!function(){if("function"!=typeof window.CustomEvent){window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}}function e(){var e,t=this.parentNode,a=arguments.length;if(t)for(a||t.removeChild(this);a--;)"object"!=typeof(e=arguments[a])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),a?t.insertBefore(e,this.nextSibling):t.replaceChild(e,this)}Element.prototype.replaceWith||(Element.prototype.replaceWith=e),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=e),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=e),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){var a,o=this.length;for(t=t||window,a=0;a<o;a++)e.call(t,this[a],a,this)})}(),advads={supports_localstorage:function(){"use strict";try{return!(!window||void 0===window.localStorage)&&(window.localStorage.setItem("x","x"),window.localStorage.removeItem("x"),!0)}catch(e){return!1}},max_per_session:function(e,t){var a=1;if(void 0!==t&&0!==parseInt(t)||(t=1),this.cookie_exists(e)){if(this.get_cookie(e)>=t)return!0;a+=parseInt(this.get_cookie(e))}return this.set_cookie(e,a),!1},count_up:function(e,t){var a=1;this.cookie_exists(e)&&(a+=parseInt(this.get_cookie(e))),this.set_cookie(e,a)},set_cookie_exists:function(e){return!!get_cookie(e)||(set_cookie(e,"",0),!1)},get_cookie:function(e){var t,a,o,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(a=n[t].substr(0,n[t].indexOf("=")),o=n[t].substr(n[t].indexOf("=")+1),(a=a.replace(/^\s+|\s+$/g,""))===e)return unescape(o)},set_cookie:function(e,t,a,o,n,i){var r=null==a?null:24*a*60*60;this.set_cookie_sec(e,t,r,o,n,i)},set_cookie_sec:function(e,t,a,o,n,i){var r=new Date;r.setSeconds(r.getSeconds()+parseInt(a)),document.cookie=e+"="+escape(t)+(null==a?"":"; expires="+r.toUTCString())+(null==o?"; path=/":"; path="+o)+(null==n?"":"; domain="+n)+(null==i?"":"; secure")},cookie_exists:function(e){var t=this.get_cookie(e);return null!==t&&""!==t&&void 0!==t},move:function(e,t,a){var o=jQuery(e);if(void 0===a&&(a={}),void 0===a.css&&(a.css={}),void 0===a.method&&(a.method="prependTo"),""===t&&void 0!==a.target)switch(a.target){case"wrapper":var n="left";void 0!==a.offset&&(n=a.offset),t=this.find_wrapper(e,n)}switch((t=void 0===a.moveintohidden?jQuery(t).filter(":visible"):jQuery(t)).length>1&&t.length,a.method){case"insertBefore":o.insertBefore(t);break;case"insertAfter":o.insertAfter(t);break;case"appendTo":o.appendTo(t);break;case"prependTo":o.prependTo(t);break;default:o.prependTo(t)}},set_parent_relative:function(e,t){t=void 0!==t?t:{};var a=jQuery(e).parent();t.use_grandparent&&(a=a.parent()),"static"!==a.css("position")&&""!==a.css("position")||a.css("position","relative")},fix_element:function(e,t){t=void 0!==t?t:{};var a=jQuery(e);t.use_grandparent?this.set_parent_relative(a.parent()):this.set_parent_relative(a),t.is_invisible&&a.show();var o=parseInt(a.offset().top),n=parseInt(a.offset().left);if(t.is_invisible&&a.hide(),"left"===t.offset){var i=jQuery(window).width()-n-a.outerWidth();a.css("position","fixed").css("top",o+"px").css("right",i+"px").css("left","")}else a.css("position","fixed").css("top",o+"px").css("left",n+"px").css("right","")},find_wrapper:function(e,t){var a;return jQuery("body").children().each((function(o,n){if(n.id!==e.substring(1)){var i=jQuery(n);if("right"===t&&i.offset().left+jQuery(i).width()<jQuery(window).width()||"left"===t&&i.offset().left>0)return"static"!==i.css("position")&&""!==i.css("position")||i.css("position","relative"),a=n,!1}})),a},center_fixed_element:function(e){var t=jQuery(e),a=jQuery(window).width()/2-parseInt(t.css("width"))/2;t.css("left",a+"px")},center_vertically:function(e){var t=jQuery(e),a=jQuery(window).height()/2-parseInt(t.css("height"))/2;"fixed"!==t.css("position")&&(a-=topoffset=parseInt(t.offset().top)),t.css("top",a+"px")},close:function(e){jQuery(e).remove()},wait_for_images:function(e,t){var a=0,o=[];e.find('img[src][src!=""]').each((function(){o.push(this.src)})),0===o.length&&t.call(e),jQuery.each(o,(function(n,i){var r=new Image;r.src=i;var s="load error";jQuery(r).one(s,(function n(i){if(jQuery(this).off(s,n),++a==o.length)return t.call(e[0]),!1}))}))},privacy:{state:"unknown",state_executed:!1,get_state:function(){if("unknown"!==window.advads_options.privacy.state)return advads.privacy.state_executed||(advads.privacy.state_executed=!0,advads.privacy.dispatch_event(window.advads_options.privacy.state,!1)),advads.privacy.state;if("custom"===window.advads_options.privacy["consent-method"]){var e=new RegExp(window.advads_options.privacy["custom-cookie-name"]+"=.*?"+window.advads_options.privacy["custom-cookie-value"]+"[^;]*");advads.privacy.state_executed||(advads.privacy.state_executed=!0,advads.privacy.dispatch_event(null!==document.cookie.match(e)?"accepted":"unknown",!0))}advads.privacy.state_executed=!0;var t=0,a=setInterval((function(){switch(600==++t&&clearInterval(a),window.advads_options.privacy["consent-method"]){case"custom":null!==document.cookie.match(e)&&(clearInterval(a),"accepted"!==advads.privacy.state&&advads.privacy.dispatch_event("accepted",!0));break;case"iab_tcf_20":if(void 0===window.__tcfapi)return;clearInterval(a),window.__tcfapi("addEventListener",2,(function(e,t){if(t&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||null===e.eventStatus&&void 0!==window.googlefc&&(void 0!==e.purpose||!e.gdprApplies))){var a="useractioncomplete"===e.eventStatus;if(!e.gdprApplies)return void("not_needed"!==advads.privacy.state&&advads.privacy.dispatch_event("not_needed",a));if(e.purpose.consents[1])return void("accepted"!==advads.privacy.state&&advads.privacy.dispatch_event("accepted",a));"rejected"!==advads.privacy.state&&advads.privacy.dispatch_event("rejected",a)}}))}}),100);return advads.privacy.state},is_adsense_npa_enabled:function(){return!window.advads_options||!window.advads_options.privacy||!(!window.advads_options.privacy["show-non-personalized-adsense"]||"custom"!==window.advads_options.privacy["consent-method"])},dispatch_event:function(e,t){var a=advads.privacy.state,o=function(){document.dispatchEvent(new CustomEvent("advanced_ads_privacy",{detail:{state:e,previousState:a,userAction:t}}))};if(advads.privacy.state=e,"loading"!==document.readyState)return o();document.addEventListener("readystatechange",o,{once:!0})},is_ad_decoded:function(e){return null===document.querySelector('script[data-tcf="waiting-for-consent"][data-id="'+e+'"]')},decode_ad:function(e,t){t="boolean"!=typeof t||t;var a=decodeURIComponent(Array.prototype.map.call(atob(e.textContent),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));if(!t)return a;e.replaceWith(document.createRange().createContextualFragment(a))}}},(window.advanced_ads_ready||jQuery(document).ready).call(null,(function(){advads.privacy.get_state()})),document.addEventListener("advanced_ads_privacy",(function(e){"accepted"!==e.detail.state&&"not_needed"!==e.detail.state||e.detail.userAction||"loading"===document.readyState||document.querySelectorAll('script[type="text/plain"][data-tcf="waiting-for-consent"]').forEach(advads.privacy.decode_ad)})),jQuery(document).ready((function(){if(!(!advads.supports_localstorage()||!localStorage.getItem("advads_frontend_picker")||window.advads_options.blog_id&&localStorage.getItem("advads_frontend_blog_id")&&window.advads_options.blog_id!==localStorage.getItem("advads_frontend_blog_id")||localStorage.getItem("advads_frontend_starttime")&&parseInt(localStorage.getItem("advads_frontend_starttime"),10)<(new Date).getTime()-27e5&&(localStorage.removeItem("advads_frontend_action"),localStorage.removeItem("advads_frontend_element"),localStorage.removeItem("advads_frontend_picker"),localStorage.removeItem("advads_prev_url"),localStorage.removeItem("advads_frontend_pathtype"),localStorage.removeItem("advads_frontend_boundary"),localStorage.removeItem("advads_frontend_blog_id"),localStorage.removeItem("advads_frontend_starttime"),advads.set_cookie("advads_frontend_picker","",-1),1))){var e,t=jQuery("<div id='advads-picker-overlay'>"),a=[document.body,document.documentElement,document];if(t.css({position:"absolute",border:"solid 2px #428bca",backgroundColor:"rgba(66,139,202,0.5)",boxSizing:"border-box",zIndex:1e6,pointerEvents:"none"}).prependTo("body"),"true"===localStorage.getItem("advads_frontend_boundary")&&jQuery("body").css("cursor","not-allowed"),window.advads.is_boundary_reached=function(e){if("true"!==localStorage.getItem("advads_frontend_boundary"))return!1;$advads_picker_cur=jQuery(e);var t=jQuery(".advads-frontend-picker-boundary-helper");return $boundaries=t.parent(),$boundaries.css("cursor","pointer"),$advads_picker_cur.is($boundaries)||!$advads_picker_cur.closest($boundaries).length},"xpath"===localStorage.getItem("advads_frontend_pathtype"))var o="getXPath";else o="getPath";jQuery(document).mousemove((function(n){if(n.target!==e){if(~a.indexOf(n.target))return e=null,void t.hide();var i=jQuery(n.target),r=i.offset(),s=i.outerWidth(),d=i.outerHeight();e=n.target;var c=jQuery(e)[o]();c&&t.css({top:r.top,left:r.left,width:s,height:d}).show()}})),jQuery(document).click((function(t){var a=jQuery(e)[o]();advads.is_boundary_reached(e)||(localStorage.setItem("advads_frontend_element",a),window.location=localStorage.getItem("advads_prev_url"))}))}})),jQuery.fn.extend({getPath:function(e,t){if(void 0===e&&(e=""),void 0===t&&(t=0),this.is("html"))return"html > "+e;if(3===t)return e;var a=this.get(0).nodeName.toLowerCase(),o=this.attr("id"),n=this.attr("class");return t+=1,void 0===o||/\d/.test(o)?void 0!==n&&(n=n.split(/[\s\n]+/),(n=jQuery.grep(n,(function(e,t){return!/\d/.test(e)}))).length&&(a+="."+n.slice(0,2).join("."))):a+="#"+o,this.siblings(a).length&&(a+=":eq("+this.siblings(a).addBack().not("#advads-picker-overlay").index(this)+")"),""===e?this.parent().getPath(a,t):this.parent().getPath(a+" > "+e,t)},getXPath:function(e,t){if(void 0===e&&(e=""),void 0===t&&(t=0),this.is("body")||3===t)return e;if(advads.is_boundary_reached(this))return e;var a=this.get(0).nodeName.toLowerCase(),o=a,n=this.attr("id"),i=this.attr("class"),r=[];if(void 0!==n&&!/\d/.test(n))return o+'[@id and id="'+n+'"]/'+e;if(void 0!==i&&(i=i.split(/[\s\n]+/),(i=jQuery.grep(i,(function(e,t){return!/\d/.test(e)}))).length)){t+=1;r=i.slice(0,2);for(var s=[],d=0;d<r.length;d++)s.push('(@class and contains(concat(" ", normalize-space(@class), " "), " '+r[d]+' "))');o+="["+s.join(" and ")+"]"}if(r.length)var c=this.siblings(a+"."+r.join("."));else c=this.siblings(a);c.length&&(o+="["+c.addBack().not("#advads-picker-overlay").index(this)+"]");return""===e?this.parent().getXPath(o,t):this.parent().getXPath(o+"/"+e,t)}});a.1.1.min.css?ver=5.8.6' type='text/css' media='all' />
<link rel='stylesheet' id='toc-screen-css'  href='https://hindiparenting.firstcry.com/wp-content/plugins/table-of-contents-plus/screen.min.css?ver=2106' type='text/css' media='all' />
<link rel='stylesheet' id='td-plugin-newsletter-css'  href='https://hindiparenting.firstcry.com/wp-content/plugins/td-newsletter/style.css?ver=11' type='text/css' media='all' />
<link rel='stylesheet' id='td-plugin-multi-purpose-css'  href='https://hindiparenting.firstcry.com/wp-content/plugins/td-composer/td-multi-purpose/style.css?ver=978887166a39c57c36d5cf4a5ec10289' type='text/css' media='all' />
<link rel='stylesheet' id='google-fonts-style-css'  href='https://fonts.googleapis.com/css?family=Palanquin%3A400%7CRoboto%3A400%2C500%2C700%7COpen+Sans%3A400%2C600%2C700&#038;display=swap&#038;ver=11' type='text/css' media='all' />
<link rel='stylesheet' id='td-theme-css'  href='https://hindiparenting.firstcry.com/wp-content/themes/Newspaper-tf/Newspaper/style.css?ver=11' type='text/css' media='all' />
<style id='td-theme-inline-css' type='text/css'>
    
        @media (max-width: 767px) {
            .td-header-desktop-wrap {
                display: none;
            }
        }
        @media (min-width: 767px) {
            .td-header-mobile-wrap {
                display: none;
            }
        }
    
	
</style>
<link rel='stylesheet' id='td-legacy-framework-front-style-css'  href='https://hindiparenting.firstcry.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/css/td_legacy_main.css?ver=978887166a39c57c36d5cf4a5ec10289' type='text/css' media='all' />
<link rel='stylesheet' id='td-standard-pack-framework-front-style-css'  href='https://hindiparenting.firstcry.com/wp-content/plugins/td-standard-pack/Newspaper/assets/css/td_standard_pack_main.css?ver=9aa5e1ff3d260687f7ac21c07b85571f' type='text/css' media='all' />
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.7' id='regenerator-runtime-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/dist/hooks.min.js?ver=a7edae857aab69d69fa10d5aef23a5de' id='wp-hooks-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/dist/i18n.min.js?ver=5f1269854226b4dd90450db411a12b79' id='wp-i18n-js'></script>
<script type='text/javascript' id='wp-i18n-js-after'>
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-slider/public/assets/js/unslider.min.js?ver=1.4.6' id='unslider-js-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-slider/public/assets/js/jquery.event.move.js?ver=1.4.6' id='unslider-move-js-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-slider/public/assets/js/jquery.event.swipe.js?ver=1.4.6' id='unslider-swipe-js-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/customization-over-wp/js/custom.js?ver=5.8.6' id='custom_js_fc1-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/customization-over-wp/js/articledetails_v11.js?v234&#038;ver=5.8.6' id='articledetails-js'></script>
<script type='text/javascript' src='https://cdn.fcglcdn.com/brainbees/js/v7/jquery-1.11.2.min.js?ver=5.8.6' id='custom_js_fc3-js'></script>
<script type='text/javascript' id='advanced-ads-advanced-js-js-extra'>
/* <![CDATA[ */
var advads_options = {"blog_id":"1","privacy":{"enabled":false,"state":"not_needed"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads/public/assets/js/advanced.min.js?ver=1.31.1' id='advanced-ads-advanced-js-js'></script>
<script type='text/javascript' id='advanced_ads_pro/visitor_conditions-js-extra'>
/* <![CDATA[ */
var advanced_ads_pro_visitor_conditions = {"referrer_cookie_name":"advanced_ads_pro_visitor_referrer","referrer_exdays":"365","page_impr_cookie_name":"advanced_ads_page_impressions","page_impr_exdays":"3650"};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-pro/modules/advanced-visitor-conditions/inc/conditions.min.js?ver=2.16.0' id='advanced_ads_pro/visitor_conditions-js'></script>
<link rel="https://api.w.org/" href="https://hindiparenting.firstcry.com/wp-json/" /><link rel="alternate" type="application/json" href="https://hindiparenting.firstcry.com/wp-json/wp/v2/pages/51" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://hindiparenting.firstcry.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://hindiparenting.firstcry.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.8.6" />
<link rel='shortlink' href='https://hindiparenting.firstcry.com/' />
<link rel="alternate" type="application/json+oembed" href="https://hindiparenting.firstcry.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhindiparenting.firstcry.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://hindiparenting.firstcry.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhindiparenting.firstcry.com%2F&#038;format=xml" />
<div id="_webengage_script_tag"></div>
<script type="text/javascript">
    var webengage; !function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i<l.length;i++)o(r,[l[i]]);for(i=0;i<a.length;i++){for(r[a[i]]={},s=0;s<c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s<p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i<u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");     

    webengage.init("~c2ab3738");
</script><link rel="alternate" href="https://hindiparenting.firstcry.com/" hreflang="hi" /><link rel="alternate" href="https://hindiparenting.firstcry.com/?amp" hreflang="hi" /><style type="text/css">div#toc_container {background: #ffffff;border: 1px solid #ffffff;}div#toc_container p.toc_title a,div#toc_container ul.toc_list a {color: #3d8ffd;}</style><script>advads_items = { conditions: {}, display_callbacks: {}, display_effect_callbacks: {}, hide_callbacks: {}, backgrounds: {}, effect_durations: {}, close_functions: {}, showed: [] };</script><style type="text/css" id="paren-layer-custom-css"></style><script type="text/javascript">
		var advadsCfpQueue = [];
		var advadsCfpAd = function( adID ){
			if ( 'undefined' == typeof advadsProCfp ) { advadsCfpQueue.push( adID ) } else { advadsProCfp.addElement( adID ) }
		};
		</script>
		<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
        <script>
        window.tdb_globals = {"wpRestNonce":"fec6e03cfa","wpRestUrl":"https:\/\/hindiparenting.firstcry.com\/wp-json\/","permalinkStructure":"\/articles\/%postname%\/","isAjax":false,"isAdminBarShowing":false,"autoloadScrollPercent":50};
    </script>
    			<script>
				window.tdwGlobal = {"adminUrl":"https:\/\/hindiparenting.firstcry.com\/wp-admin\/","wpRestNonce":"fec6e03cfa","wpRestUrl":"https:\/\/hindiparenting.firstcry.com\/wp-json\/","permalinkStructure":"\/articles\/%postname%\/"};
			</script>
			    <script>
        window.tdaGlobal = {"adminUrl":"https:\/\/hindiparenting.firstcry.com\/wp-admin\/","wpRestNonce":"fec6e03cfa","wpRestUrl":"https:\/\/hindiparenting.firstcry.com\/wp-json\/","permalinkStructure":"\/articles\/%postname%\/","postId":51};
    </script>
    		<script type="text/javascript">
			if ( typeof advadsGATracking === 'undefined' ) {
				window.advadsGATracking = {
					delayedAds: {},
					deferedAds: {}
				};
			}
		</script>
		
<!-- JS generated by theme -->

<script>
    
    

	    var tdBlocksArray = []; //here we store all the items for the current page

	    //td_block class - each ajax block uses a object of this class for requests
	    function tdBlock() {
		    this.id = '';
		    this.block_type = 1; //block type id (1-234 etc)
		    this.atts = '';
		    this.td_column_number = '';
		    this.td_current_page = 1; //
		    this.post_count = 0; //from wp
		    this.found_posts = 0; //from wp
		    this.max_num_pages = 0; //from wp
		    this.td_filter_value = ''; //current live filter value
		    this.is_ajax_running = false;
		    this.td_user_action = ''; // load more or infinite loader (used by the animation)
		    this.header_color = '';
		    this.ajax_pagination_infinite_stop = ''; //show load more at page x
	    }


        // td_js_generator - mini detector
        (function(){
            var htmlTag = document.getElementsByTagName("html")[0];

	        if ( navigator.userAgent.indexOf("MSIE 10.0") > -1 ) {
                htmlTag.className += ' ie10';
            }

            if ( !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
                htmlTag.className += ' ie11';
            }

	        if ( navigator.userAgent.indexOf("Edge") > -1 ) {
                htmlTag.className += ' ieEdge';
            }

            if ( /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ) {
                htmlTag.className += ' td-md-is-ios';
            }

            var user_agent = navigator.userAgent.toLowerCase();
            if ( user_agent.indexOf("android") > -1 ) {
                htmlTag.className += ' td-md-is-android';
            }

            if ( -1 !== navigator.userAgent.indexOf('Mac OS X')  ) {
                htmlTag.className += ' td-md-is-os-x';
            }

            if ( /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) ) {
               htmlTag.className += ' td-md-is-chrome';
            }

            if ( -1 !== navigator.userAgent.indexOf('Firefox') ) {
                htmlTag.className += ' td-md-is-firefox';
            }

            if ( -1 !== navigator.userAgent.indexOf('Safari') && -1 === navigator.userAgent.indexOf('Chrome') ) {
                htmlTag.className += ' td-md-is-safari';
            }

            if( -1 !== navigator.userAgent.indexOf('IEMobile') ){
                htmlTag.className += ' td-md-is-iemobile';
            }

        })();




        var tdLocalCache = {};

        ( function () {
            "use strict";

            tdLocalCache = {
                data: {},
                remove: function (resource_id) {
                    delete tdLocalCache.data[resource_id];
                },
                exist: function (resource_id) {
                    return tdLocalCache.data.hasOwnProperty(resource_id) && tdLocalCache.data[resource_id] !== null;
                },
                get: function (resource_id) {
                    return tdLocalCache.data[resource_id];
                },
                set: function (resource_id, cachedData) {
                    tdLocalCache.remove(resource_id);
                    tdLocalCache.data[resource_id] = cachedData;
                }
            };
        })();

    
    
var td_viewport_interval_list=[{"limitBottom":767,"sidebarWidth":228},{"limitBottom":1018,"sidebarWidth":300},{"limitBottom":1140,"sidebarWidth":324}];
var td_animation_stack_effect="type1";
var tds_animation_stack=true;
var td_animation_stack_specific_selectors=".entry-thumb, img[class*=\"wp-image-\"], a.td-sml-link-to-image > img, .td-lazy-img";
var td_animation_stack_general_selectors=".td-animation-stack .entry-thumb, .post .entry-thumb, .post img[class*=\"wp-image-\"], .post a.td-sml-link-to-image > img, .td-animation-stack .td-lazy-img";
var tdc_is_installed="yes";
var td_ajax_url="https:\/\/hindiparenting.firstcry.com\/wp-admin\/admin-ajax.php?td_theme_name=Newspaper&v=11";
var td_get_template_directory_uri="https:\/\/hindiparenting.firstcry.com\/wp-content\/plugins\/td-composer\/legacy\/common";
var tds_snap_menu="snap";
var tds_logo_on_sticky="";
var tds_header_style="";
var td_please_wait="Please wait...";
var td_email_user_pass_incorrect="User or password incorrect!";
var td_email_user_incorrect="Email or username incorrect!";
var td_email_incorrect="Email incorrect!";
var tds_more_articles_on_post_enable="";
var tds_more_articles_on_post_time_to_wait="";
var tds_more_articles_on_post_pages_distance_from_top=1500;
var tds_theme_color_site_wide="#ef3b74";
var tds_smart_sidebar="enabled";
var tdThemeName="Newspaper";
var td_magnific_popup_translation_tPrev="Previous (Left arrow key)";
var td_magnific_popup_translation_tNext="Next (Right arrow key)";
var td_magnific_popup_translation_tCounter="%curr% of %total%";
var td_magnific_popup_translation_ajax_tError="The content from %url% could not be loaded.";
var td_magnific_popup_translation_image_tError="The image #%curr% could not be loaded.";
var tdBlockNonce="64019b684b";
var tdDateNamesI18n={"month_names":["January","February","March","April","May","June","July","August","September","October","November","December"],"month_names_short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"day_names_short":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};
var td_ad_background_click_link="";
var td_ad_background_click_target="";
</script>


<!-- Header style compiled by theme -->

<style>
    
.td-header-wrap .black-menu .sf-menu > .current-menu-item > a,
    .td-header-wrap .black-menu .sf-menu > .current-menu-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > .current-category-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > li > a:hover,
    .td-header-wrap .black-menu .sf-menu > .sfHover > a,
    .sf-menu > .current-menu-item > a:after,
    .sf-menu > .current-menu-ancestor > a:after,
    .sf-menu > .current-category-ancestor > a:after,
    .sf-menu > li:hover > a:after,
    .sf-menu > .sfHover > a:after,
    .header-search-wrap .td-drop-down-search:after,
    .header-search-wrap .td-drop-down-search .btn:hover,
    input[type=submit]:hover,
    .td-read-more a,
    .td-post-category:hover,
    .td_top_authors .td-active .td-author-post-count,
    .td_top_authors .td-active .td-author-comments-count,
    .td_top_authors .td_mod_wrap:hover .td-author-post-count,
    .td_top_authors .td_mod_wrap:hover .td-author-comments-count,
    .td-404-sub-sub-title a:hover,
    .td-search-form-widget .wpb_button:hover,
    .td-rating-bar-wrap div,
    .dropcap,
    .td_wrapper_video_playlist .td_video_controls_playlist_wrapper,
    .wpb_default,
    .wpb_default:hover,
    .td-left-smart-list:hover,
    .td-right-smart-list:hover,
    #bbpress-forums button:hover,
    .bbp_widget_login .button:hover,
    .td-footer-wrapper .td-post-category,
    .td-footer-wrapper .widget_product_search input[type="submit"]:hover,
    .single-product .product .summary .cart .button:hover,
    .td-next-prev-wrap a:hover,
    .td-load-more-wrap a:hover,
    .td-post-small-box a:hover,
    .page-nav .current,
    .page-nav:first-child > div,
    #bbpress-forums .bbp-pagination .current,
    #bbpress-forums #bbp-single-user-details #bbp-user-navigation li.current a,
    .td-theme-slider:hover .slide-meta-cat a,
    a.vc_btn-black:hover,
    .td-trending-now-wrapper:hover .td-trending-now-title,
    .td-scroll-up,
    .td-smart-list-button:hover,
    .td-weather-information:before,
    .td-weather-week:before,
    .td_block_exchange .td-exchange-header:before,
    .td-pulldown-syle-2 .td-subcat-dropdown ul:after,
    .td_block_template_9 .td-block-title:after,
    .td_block_template_15 .td-block-title:before,
    div.wpforms-container .wpforms-form div.wpforms-submit-container button[type=submit],
    .td-close-video-fixed {
        background-color: #ef3b74;
    }

    .td_block_template_4 .td-related-title .td-cur-simple-item:before {
        border-color: #ef3b74 transparent transparent transparent !important;
    }
    
    
    .td_block_template_4 .td-related-title .td-cur-simple-item,
    .td_block_template_3 .td-related-title .td-cur-simple-item,
    .td_block_template_9 .td-related-title:after {
        background-color: #ef3b74;
    }

    a,
    cite a:hover,
    .td-page-content blockquote p,
    .td-post-content blockquote p,
    .mce-content-body blockquote p,
    .comment-content blockquote p,
    .wpb_text_column blockquote p,
    .td_block_text_with_title blockquote p,
    .td_module_wrap:hover .entry-title a,
    .td-subcat-filter .td-subcat-list a:hover,
    .td-subcat-filter .td-subcat-dropdown a:hover,
    .td_quote_on_blocks,
    .dropcap2,
    .dropcap3,
    .td_top_authors .td-active .td-authors-name a,
    .td_top_authors .td_mod_wrap:hover .td-authors-name a,
    .td-post-next-prev-content a:hover,
    .author-box-wrap .td-author-social a:hover,
    .td-author-name a:hover,
    .td-author-url a:hover,
    .comment-reply-link:hover,
    .logged-in-as a:hover,
    #cancel-comment-reply-link:hover,
    .td-search-query,
    .widget a:hover,
    .td_wp_recentcomments a:hover,
    .archive .widget_archive .current,
    .archive .widget_archive .current a,
    .widget_calendar tfoot a:hover,
    #bbpress-forums li.bbp-header .bbp-reply-content span a:hover,
    #bbpress-forums .bbp-forum-freshness a:hover,
    #bbpress-forums .bbp-topic-freshness a:hover,
    #bbpress-forums .bbp-forums-list li a:hover,
    #bbpress-forums .bbp-forum-title:hover,
    #bbpress-forums .bbp-topic-permalink:hover,
    #bbpress-forums .bbp-topic-started-by a:hover,
    #bbpress-forums .bbp-topic-started-in a:hover,
    #bbpress-forums .bbp-body .super-sticky li.bbp-topic-title .bbp-topic-permalink,
    #bbpress-forums .bbp-body .sticky li.bbp-topic-title .bbp-topic-permalink,
    .widget_display_replies .bbp-author-name,
    .widget_display_topics .bbp-author-name,
    .td-subfooter-menu li a:hover,
    a.vc_btn-black:hover,
    .td-smart-list-dropdown-wrap .td-smart-list-button:hover,
    .td-instagram-user a,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-display-option:hover,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-display-option:hover i,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-link:hover,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-item .td-cur-simple-item,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more i,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more i,
    .td_block_template_2 .td-related-title .td-cur-simple-item,
    .td_block_template_5 .td-related-title .td-cur-simple-item,
    .td_block_template_6 .td-related-title .td-cur-simple-item,
    .td_block_template_7 .td-related-title .td-cur-simple-item,
    .td_block_template_8 .td-related-title .td-cur-simple-item,
    .td_block_template_9 .td-related-title .td-cur-simple-item,
    .td_block_template_10 .td-related-title .td-cur-simple-item,
    .td_block_template_11 .td-related-title .td-cur-simple-item,
    .td_block_template_12 .td-related-title .td-cur-simple-item,
    .td_block_template_13 .td-related-title .td-cur-simple-item,
    .td_block_template_14 .td-related-title .td-cur-simple-item,
    .td_block_template_15 .td-related-title .td-cur-simple-item,
    .td_block_template_16 .td-related-title .td-cur-simple-item,
    .td_block_template_17 .td-related-title .td-cur-simple-item,
    .td-theme-wrap .sf-menu ul .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu ul .sfHover > a,
    .td-theme-wrap .sf-menu ul .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-category-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-menu-item > a,
    .td_outlined_btn,
    .td_block_categories_tags .td-ct-item:hover {
        color: #ef3b74;
    }

    a.vc_btn-black.vc_btn_square_outlined:hover,
    a.vc_btn-black.vc_btn_outlined:hover {
        color: #ef3b74 !important;
    }

    .td-next-prev-wrap a:hover,
    .td-load-more-wrap a:hover,
    .td-post-small-box a:hover,
    .page-nav .current,
    .page-nav:first-child > div,
    #bbpress-forums .bbp-pagination .current,
    .post .td_quote_box,
    .page .td_quote_box,
    a.vc_btn-black:hover,
    .td_block_template_5 .td-block-title > *,
    .td_outlined_btn {
        border-color: #ef3b74;
    }

    .td_wrapper_video_playlist .td_video_currently_playing:after {
        border-color: #ef3b74 !important;
    }

    .header-search-wrap .td-drop-down-search:before {
        border-color: transparent transparent #ef3b74 transparent;
    }

    .block-title > span,
    .block-title > a,
    .block-title > label,
    .widgettitle,
    .widgettitle:after,
    body .td-trending-now-title,
    .td-trending-now-wrapper:hover .td-trending-now-title,
    .wpb_tabs li.ui-tabs-active a,
    .wpb_tabs li:hover a,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tab.vc_active > a,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tab:hover > a,
    .td_block_template_1 .td-related-title .td-cur-simple-item,
    .td-subcat-filter .td-subcat-dropdown:hover .td-subcat-more, 
    .td_3D_btn,
    .td_shadow_btn,
    .td_default_btn,
    .td_round_btn, 
    .td_outlined_btn:hover {
    	background-color: #ef3b74;
    }
    .block-title,
    .td_block_template_1 .td-related-title,
    .wpb_tabs .wpb_tabs_nav,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container {
        border-color: #ef3b74;
    }
    .td_block_wrap .td-subcat-item a.td-cur-simple-item {
	    color: #ef3b74;
	}


    
    .td-grid-style-4 .entry-title
    {
        background-color: rgba(239, 59, 116, 0.7);
    }


    
    @media (max-width: 767px) {
        body .td-header-wrap .td-header-main-menu {
            background-color: #ef3e77 !important;
        }
    }


    
    .td-menu-background:before,
    .td-search-background:before {
        background: #ef779d;
        background: -moz-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, #ef779d), color-stop(100%, #db1a4d));
        background: -webkit-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: -o-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: -ms-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: linear-gradient(to bottom, #ef779d 0%, #db1a4d 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ef779d', endColorstr='#db1a4d', GradientType=0 );
    }

    
    .td-mobile-content .current-menu-item > a,
    .td-mobile-content .current-menu-ancestor > a,
    .td-mobile-content .current-category-ancestor > a,
    #td-mobile-nav .td-menu-login-section a:hover,
    #td-mobile-nav .td-register-section a:hover,
    #td-mobile-nav .td-menu-socials-wrap a:hover i,
    .td-search-close a:hover i {
        color: #ffffff;
    }

    
    ul.sf-menu > .menu-item > a {
        font-family:Palanquin;
	font-size:15px;
	font-weight:500;
	
    }
    
    .sf-menu ul .menu-item a {
        font-family:Palanquin;
	font-size:15px;
	
    }
    
    .td-mobile-content .td-mobile-main-menu > li > a {
        font-family:Palanquin;
	
    }
    
    .td-mobile-content .sub-menu a {
        font-family:Palanquin;
	font-size:18px;
	
    }
    
    .td-header-wrap .td-logo-text-container .td-logo-text {
        font-family:Palanquin;
	
    }
    
    .td-header-wrap .td-logo-text-container .td-tagline-text {
        font-family:Palanquin;
	
    }



    
	#td-mobile-nav,
	#td-mobile-nav .wpb_button,
	.td-search-wrap-mob {
		font-family:Palanquin;
	
	}


	
    .td-page-title,
    .td-category-title-holder .td-page-title {
    	font-family:Roboto;
	
    }
    
    .td-page-content p,
    .td-page-content li,
    .td-page-content .td_block_text_with_title,
    .wpb_text_column p {
    	font-family:Roboto;
	
    }
    
    .td-page-content h1,
    .wpb_text_column h1 {
    	font-family:Roboto;
	font-size:26px;
	font-weight:500;
	
    }
    
    .td-page-content h2,
    .wpb_text_column h2 {
    	font-family:Roboto;
	font-size:24px;
	font-weight:500;
	
    }
    
    .td-page-content h3,
    .wpb_text_column h3 {
    	font-family:Roboto;
	font-size:22px;
	font-weight:500;
	
    }
    
    .td-page-content h4,
    .wpb_text_column h4 {
    	font-family:Roboto;
	font-size:20px;
	font-weight:500;
	
    }
    
    .td-page-content h5,
    .wpb_text_column h5 {
    	font-family:Roboto;
	font-size:18px;
	font-weight:500;
	
    }
    
    .td-page-content h6,
    .wpb_text_column h6 {
    	font-family:Roboto;
	font-size:15px;
	font-weight:500;
	
    }



	
    body, p {
    	font-family:Roboto;
	font-size:16px;
	font-weight:300;
	
    }




    
    #bbpress-forums .bbp-header .bbp-forums,
    #bbpress-forums .bbp-header .bbp-topics,
    #bbpress-forums .bbp-header {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .hentry .bbp-forum-title,
    #bbpress-forums .hentry .bbp-topic-permalink {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-forums-list li {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-forum-info .bbp-forum-content {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums div.bbp-forum-author a.bbp-author-name,
    #bbpress-forums div.bbp-topic-author a.bbp-author-name,
    #bbpress-forums div.bbp-reply-author a.bbp-author-name,
    #bbpress-forums div.bbp-search-author a.bbp-author-name,
    #bbpress-forums .bbp-forum-freshness .bbp-author-name,
    #bbpress-forums .bbp-topic-freshness a:last-child {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .hentry .bbp-topic-content p,
    #bbpress-forums .hentry .bbp-reply-content p {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums div.bbp-template-notice p {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-pagination-count,
    #bbpress-forums .page-numbers {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-topic-started-by,
    #bbpress-forums .bbp-topic-started-by a,
    #bbpress-forums .bbp-topic-started-in,
    #bbpress-forums .bbp-topic-started-in a {
    	font-family:Roboto;
	
    }
    
    
	.white-popup-block,
	.white-popup-block .wpb_button {
		font-family:Roboto;
	
	}.td-header-style-12 .td-header-menu-wrap-full,
    .td-header-style-12 .td-affix,
    .td-grid-style-1.td-hover-1 .td-big-grid-post:hover .td-post-category,
    .td-grid-style-5.td-hover-1 .td-big-grid-post:hover .td-post-category,
    .td_category_template_3 .td-current-sub-category,
    .td_category_template_8 .td-category-header .td-category a.td-current-sub-category,
    .td_category_template_4 .td-category-siblings .td-category a:hover,
     .td_block_big_grid_9.td-grid-style-1 .td-post-category,
    .td_block_big_grid_9.td-grid-style-5 .td-post-category,
    .td-grid-style-6.td-hover-1 .td-module-thumb:after,
     .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > li > a:hover,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .sfHover > a {
        background-color: #ef3b74;
    }
    
    .td_mega_menu_sub_cats .cur-sub-cat,
    .td-mega-span h3 a:hover,
    .td_mod_mega_menu:hover .entry-title a,
    .header-search-wrap .result-msg a:hover,
    .td-header-top-menu .td-drop-down-search .td_module_wrap:hover .entry-title a,
    .td-header-top-menu .td-icon-search:hover,
    .td-header-wrap .result-msg a:hover,
    .top-header-menu li a:hover,
    .top-header-menu .current-menu-item > a,
    .top-header-menu .current-menu-ancestor > a,
    .top-header-menu .current-category-ancestor > a,
    .td-social-icon-wrap > a:hover,
    .td-header-sp-top-widget .td-social-icon-wrap a:hover,
    .td_mod_related_posts:hover h3 > a,
    .td-post-template-11 .td-related-title .td-related-left:hover,
    .td-post-template-11 .td-related-title .td-related-right:hover,
    .td-post-template-11 .td-related-title .td-cur-simple-item,
    .td-post-template-11 .td_block_related_posts .td-next-prev-wrap a:hover,
    .td-category-header .td-pulldown-category-filter-link:hover,
    .td-category-siblings .td-subcat-dropdown a:hover,
    .td-category-siblings .td-subcat-dropdown a.td-current-sub-category,
    .footer-text-wrap .footer-email-wrap a,
    .footer-social-wrap a:hover,
    .td_module_17 .td-read-more a:hover,
    .td_module_18 .td-read-more a:hover,
    .td_module_19 .td-post-author-name a:hover,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more i,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more i,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .sfHover > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > li > a:hover {
        color: #ef3b74;
    }
    
    .td-mega-menu-page .wpb_content_element ul li a:hover,
    .td-theme-wrap .td-aj-search-results .td_module_wrap:hover .entry-title a,
    .td-theme-wrap .header-search-wrap .result-msg a:hover {
        color: #ef3b74 !important;
    }
    
    .td_category_template_8 .td-category-header .td-category a.td-current-sub-category,
    .td_category_template_4 .td-category-siblings .td-category a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > li > a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .sfHover > a {
        border-color: #ef3b74;
    }
    
    


    
    .td-header-wrap .td-header-top-menu-full,
    .td-header-wrap .top-header-menu .sub-menu,
    .tdm-header-style-1.td-header-wrap .td-header-top-menu-full,
    .tdm-header-style-1.td-header-wrap .top-header-menu .sub-menu,
    .tdm-header-style-2.td-header-wrap .td-header-top-menu-full,
    .tdm-header-style-2.td-header-wrap .top-header-menu .sub-menu,
    .tdm-header-style-3.td-header-wrap .td-header-top-menu-full,
    .tdm-header-style-3.td-header-wrap .top-header-menu .sub-menu {
        background-color: #383838;
    }
    .td-header-style-8 .td-header-top-menu-full {
        background-color: transparent;
    }
    .td-header-style-8 .td-header-top-menu-full .td-header-top-menu {
        background-color: #383838;
        padding-left: 15px;
        padding-right: 15px;
    }

    .td-header-wrap .td-header-top-menu-full .td-header-top-menu,
    .td-header-wrap .td-header-top-menu-full {
        border-bottom: none;
    }


    
    .td-header-top-menu,
    .td-header-top-menu a,
    .td-header-wrap .td-header-top-menu-full .td-header-top-menu,
    .td-header-wrap .td-header-top-menu-full a,
    .td-header-style-8 .td-header-top-menu,
    .td-header-style-8 .td-header-top-menu a,
    .td-header-top-menu .td-drop-down-search .entry-title a {
        color: #eaeaea;
    }

    
    .top-header-menu .current-menu-item > a,
    .top-header-menu .current-menu-ancestor > a,
    .top-header-menu .current-category-ancestor > a,
    .top-header-menu li a:hover,
    .td-header-sp-top-widget .td-icon-search:hover {
        color: #ffffff;
    }

    
    .sf-menu > .current-menu-item > a:after,
    .sf-menu > .current-menu-ancestor > a:after,
    .sf-menu > .current-category-ancestor > a:after,
    .sf-menu > li:hover > a:after,
    .sf-menu > .sfHover > a:after,
    .td_block_mega_menu .td-next-prev-wrap a:hover,
    .td-mega-span .td-post-category:hover,
     .td-header-wrap .black-menu .sf-menu > li > a:hover,
    .td-header-wrap .black-menu .sf-menu > .current-menu-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > .sfHover > a,
    .td-header-wrap .black-menu .sf-menu > .current-menu-item > a,
    .td-header-wrap .black-menu .sf-menu > .current-menu-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > li > a:hover,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .sfHover > a {
        background-color: #ef3b74;
    }
    .td_block_mega_menu .td-next-prev-wrap a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > li > a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .sfHover > a {
        border-color: #ef3b74;
    }
    .header-search-wrap .td-drop-down-search:before {
        border-color: transparent transparent #ef3b74 transparent;
    }
    .td_mega_menu_sub_cats .cur-sub-cat,
    .td_mod_mega_menu:hover .entry-title a,
    .td-theme-wrap .sf-menu ul .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu ul .sfHover > a,
    .td-theme-wrap .sf-menu ul .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-category-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-menu-item > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > li > a:hover,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .sfHover > a {
        color: #ef3b74;
    }
    

    
    .td-header-wrap .td-header-menu-wrap .sf-menu > li > a,
    .td-header-wrap .td-header-menu-social .td-social-icon-wrap a,
    .td-header-style-4 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-style-5 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-style-6 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-style-12 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-wrap .header-search-wrap #td-header-search-button .td-icon-search {
        color: #383838;
    }
    .td-header-wrap .td-header-menu-social + .td-search-wrapper #td-header-search-button:before {
      background-color: #383838;
    }
    
    
    
    ul.sf-menu > .td-menu-item > a,
    .td-theme-wrap .td-header-menu-social {
        font-family:Palanquin;
	font-size:15px;
	font-weight:500;
	
    }
    
    .sf-menu ul .td-menu-item a {
        font-family:Palanquin;
	font-size:15px;
	
    }
    
    
    
    .td-theme-wrap .td-mega-span h3 a {
        color: #383838;
    }
    
    .td-theme-wrap .td-aj-search-results .td-module-title a,
    .td-theme-wrap #td-header-search,
    .td-theme-wrap .header-search-wrap .result-msg a {
        color: #383838;
    }
    
    .td-theme-wrap .header-search-wrap .td-drop-down-search .btn:hover,
    .td-theme-wrap .td-aj-search-results .td_module_wrap:hover .entry-title a,
    .td-theme-wrap .header-search-wrap .result-msg a:hover {
        color: #ef3b74 !important;
    }    
    
    
    .td-theme-wrap .sf-menu .td-normal-menu .sub-menu .td-menu-item > a {
        color: #383838;
    }
    
    .td-theme-wrap .sf-menu .td-normal-menu .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu .td-normal-menu .sfHover > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-category-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-item > a {
        background-color: #fcfcfc;
    }
    
    .td-theme-wrap .sf-menu .td-normal-menu .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu .td-normal-menu .sfHover > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-category-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-item > a {
        color: #ef3b74;
    }
    
    
   
    
    .td-footer-wrapper::before {
        background-size: 100% auto;
    }

    
    .td-footer-wrapper::before {
        background-position: center center;
    }

    
    .td-footer-wrapper::before {
        opacity: 0.2;
    }
    
    
    
    
    
    .block-title > span,
    .block-title > a,
    .widgettitle,
    body .td-trending-now-title,
    .wpb_tabs li a,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tab > a,
    .td-theme-wrap .td-related-title a,
    .woocommerce div.product .woocommerce-tabs ul.tabs li a,
    .woocommerce .product .products h2:not(.woocommerce-loop-product__title),
    .td-theme-wrap .td-block-title {
        font-family:Palanquin;
	font-weight:500;
	
    }
    
    .td_module_wrap .td-post-author-name a {
        font-family:Palanquin;
	font-size:13px;
	
    }
    
    .td-post-date .entry-date {
        font-family:Palanquin;
	font-size:13px;
	
    }
    
    .td-module-comments a,
    .td-post-views span,
    .td-post-comments a {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-meta .td-post-category,
    .td_module_wrap .td-post-category,
    .td-module-image .td-post-category {
        font-family:Palanquin;
	
    }
    
    
    .top-header-menu > li > a,
    .td-weather-top-widget .td-weather-now .td-big-degrees,
    .td-weather-top-widget .td-weather-header .td-weather-city,
    .td-header-sp-top-menu .td_data_time {
        font-family:Palanquin;
	
    }
    
    .top-header-menu .menu-item-has-children li a {
    	font-family:Palanquin;
	
    }
	
    .td_mod_mega_menu .item-details a {
        font-family:Palanquin;
	
    }
    
    .td_mega_menu_sub_cats .block-mega-child-cats a {
        font-family:Palanquin;
	
    }
    
    .td-subcat-filter .td-subcat-dropdown a,
    .td-subcat-filter .td-subcat-list a,
    .td-subcat-filter .td-subcat-dropdown span {
        font-family:Palanquin;
	
    }
    
    .td-excerpt,
    .td_module_14 .td-excerpt {
        font-family:Palanquin;
	font-size:15px;
	font-weight:300;
	
    }


    
    .td-theme-slider.iosSlider-col-1 .td-module-title {
        font-family:Palanquin;
	
    }
    
    .td-theme-slider.iosSlider-col-2 .td-module-title {
        font-family:Palanquin;
	
    }
    
    .td-theme-slider.iosSlider-col-3 .td-module-title {
        font-family:Palanquin;
	
    }
    
    .homepage-post .td-post-template-8 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }


    
	.td_module_wrap .td-module-title {
		font-family:Palanquin;
	
	}
    
    .td_module_1 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_2 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_3 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_4 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_5 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_6 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_7 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_8 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_9 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_10 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_11 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_12 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_13 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_14 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_15 .entry-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_16 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_17 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_18 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_19 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    
    
	.td_block_trending_now .entry-title,
	.td-theme-slider .td-module-title,
    .td-big-grid-post .entry-title {
		font-family:Palanquin;
	
	}
    
    .td_block_trending_now .entry-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx1 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx2 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx3 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx4 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx5 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx6 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx7 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx8 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx9 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx10 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx11 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx12 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx13 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx14 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx15 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx16 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx17 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx18 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx19 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx20 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx21 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx22 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx23 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx24 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx25 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx26 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-big-thumb .td-big-grid-meta,
    .td-big-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-medium-thumb .td-big-grid-meta,
    .td-medium-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-small-thumb .td-big-grid-meta,
    .td-small-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-tiny-thumb .td-big-grid-meta,
    .td-tiny-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    
    
	.post .td-post-header .entry-title {
		font-family:Palanquin;
	
	}
    
    .td-post-template-default .td-post-header .entry-title {
        font-family:Palanquin;
	font-size:35px;
	font-weight:500;
	
    }
    
    .td-post-template-1 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-2 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-3 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-4 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-5 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-6 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-7 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-8 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-9 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-10 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-11 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-12 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-13 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    
    
    .td-post-content p,
    .td-post-content {
        font-family:Palanquin;
	font-size:15px;
	font-weight:300;
	
    }
    
    .post blockquote p,
    .page blockquote p,
    .td-post-text-content blockquote p {
        font-family:Palanquin;
	
    }
    
    .post .td_quote_box p,
    .page .td_quote_box p {
        font-family:Palanquin;
	
    }
    
    .post .td_pull_quote p,
    .page .td_pull_quote p,
    .post .wp-block-pullquote blockquote p,
    .page .wp-block-pullquote blockquote p {
        font-family:Palanquin;
	
    }
    
    .td-post-content li {
        font-family:Palanquin;
	
    }
    
    .td-post-content h1 {
        font-family:Palanquin;
	font-size:26px;
	font-weight:500;
	
    }
    
    .td-post-content h2 {
        font-family:Palanquin;
	font-size:24px;
	font-weight:500;
	
    }
    
    .td-post-content h3 {
        font-family:Palanquin;
	font-size:22px;
	font-weight:500;
	
    }
    
    .td-post-content h4 {
        font-family:Roboto;
	font-size:20px;
	font-weight:500;
	
    }
    
    .td-post-content h5 {
        font-family:Roboto;
	font-size:18px;
	font-weight:500;
	
    }
    
    .td-post-content h6 {
        font-family:Roboto;
	font-size:15px;
	font-weight:500;
	
    }
    
    
    
    .post .td-category a {
        font-family:Roboto;
	
    }
    
    .post header .td-post-author-name,
    .post header .td-post-author-name a {
        font-family:Roboto;
	
    }
    
    .post header .td-post-date .entry-date {
        font-family:Roboto;
	
    }
    
    .post header .td-post-views span,
    .post header .td-post-comments {
        font-family:Roboto;
	
    }
    
    .post .td-post-source-tags a,
    .post .td-post-source-tags span {
        font-family:Roboto;
	
    }
    
    .post .td-post-next-prev-content span {
        font-family:Roboto;
	
    }
    
    .post .td-post-next-prev-content a {
        font-family:Roboto;
	
    }
    
    .post .author-box-wrap .td-author-name a {
        font-family:Roboto;
	
    }
    
    .post .author-box-wrap .td-author-url a {
        font-family:Roboto;
	
    }
    
    .post .author-box-wrap .td-author-description {
        font-family:Roboto;
	
    }
    
	.wp-caption-text,
	.wp-caption-dd,
	 .wp-block-image figcaption {
		font-family:Roboto;
	
	}
    
    .td-post-template-default .td-post-sub-title,
    .td-post-template-1 .td-post-sub-title,
    .td-post-template-4 .td-post-sub-title,
    .td-post-template-5 .td-post-sub-title,
    .td-post-template-9 .td-post-sub-title,
    .td-post-template-10 .td-post-sub-title,
    .td-post-template-11 .td-post-sub-title {
        font-family:Roboto;
	
    }
    
    .td_block_related_posts .entry-title a {
        font-family:Roboto;
	
    }
    
    .post .td-post-share-title {
        font-family:Roboto;
	
    }
    
    .td-post-template-2 .td-post-sub-title,
    .td-post-template-3 .td-post-sub-title,
    .td-post-template-6 .td-post-sub-title,
    .td-post-template-7 .td-post-sub-title,
    .td-post-template-8 .td-post-sub-title {
        font-family:Roboto;
	
    }


    
	.footer-text-wrap {
		font-family:Roboto;
	
	}
	
	.td-sub-footer-copy {
		font-family:Roboto;
	
	}
	
	.td-sub-footer-menu ul li a {
		font-family:Roboto;
	
	}
	
	
	
    .entry-crumbs a,
    .entry-crumbs span,
    #bbpress-forums .bbp-breadcrumb a,
    #bbpress-forums .bbp-breadcrumb .bbp-breadcrumb-current {
    	font-family:Roboto;
	
    }
    
    .td-trending-now-display-area .entry-title {
    	font-family:Roboto;
	
    }
    
    .page-nav a,
    .page-nav span {
    	font-family:Roboto;
	
    }
    
    #td-outer-wrap span.dropcap,
    #td-outer-wrap p.has-drop-cap:not(:focus)::first-letter {
    	font-family:Roboto;
	
    }
    
    .widget_archive a,
    .widget_calendar,
    .widget_categories a,
    .widget_nav_menu a,
    .widget_meta a,
    .widget_pages a,
    .widget_recent_comments a,
    .widget_recent_entries a,
    .widget_text .textwidget,
    .widget_tag_cloud a,
    .widget_search input,
    .woocommerce .product-categories a,
    .widget_display_forums a,
    .widget_display_replies a,
    .widget_display_topics a,
    .widget_display_views a,
    .widget_display_stats {
    	font-family:Roboto;
	
    }
    
	input[type="submit"],
	.td-read-more a,
	.vc_btn,
	.woocommerce a.button,
	.woocommerce button.button,
	.woocommerce #respond input#submit {
		font-family:Roboto;
	
	}
	
	.woocommerce .product a .woocommerce-loop-product__title,
	.woocommerce .widget.woocommerce .product_list_widget a,
	.woocommerce-cart .woocommerce .product-name a {
		font-family:Roboto;
	
	}
	
	.woocommerce .product .summary .product_title {
		font-family:Roboto;
	
	}

    
    .category .td-category a {
    	font-family:Roboto;
	
    }
.td-header-wrap .black-menu .sf-menu > .current-menu-item > a,
    .td-header-wrap .black-menu .sf-menu > .current-menu-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > .current-category-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > li > a:hover,
    .td-header-wrap .black-menu .sf-menu > .sfHover > a,
    .sf-menu > .current-menu-item > a:after,
    .sf-menu > .current-menu-ancestor > a:after,
    .sf-menu > .current-category-ancestor > a:after,
    .sf-menu > li:hover > a:after,
    .sf-menu > .sfHover > a:after,
    .header-search-wrap .td-drop-down-search:after,
    .header-search-wrap .td-drop-down-search .btn:hover,
    input[type=submit]:hover,
    .td-read-more a,
    .td-post-category:hover,
    .td_top_authors .td-active .td-author-post-count,
    .td_top_authors .td-active .td-author-comments-count,
    .td_top_authors .td_mod_wrap:hover .td-author-post-count,
    .td_top_authors .td_mod_wrap:hover .td-author-comments-count,
    .td-404-sub-sub-title a:hover,
    .td-search-form-widget .wpb_button:hover,
    .td-rating-bar-wrap div,
    .dropcap,
    .td_wrapper_video_playlist .td_video_controls_playlist_wrapper,
    .wpb_default,
    .wpb_default:hover,
    .td-left-smart-list:hover,
    .td-right-smart-list:hover,
    #bbpress-forums button:hover,
    .bbp_widget_login .button:hover,
    .td-footer-wrapper .td-post-category,
    .td-footer-wrapper .widget_product_search input[type="submit"]:hover,
    .single-product .product .summary .cart .button:hover,
    .td-next-prev-wrap a:hover,
    .td-load-more-wrap a:hover,
    .td-post-small-box a:hover,
    .page-nav .current,
    .page-nav:first-child > div,
    #bbpress-forums .bbp-pagination .current,
    #bbpress-forums #bbp-single-user-details #bbp-user-navigation li.current a,
    .td-theme-slider:hover .slide-meta-cat a,
    a.vc_btn-black:hover,
    .td-trending-now-wrapper:hover .td-trending-now-title,
    .td-scroll-up,
    .td-smart-list-button:hover,
    .td-weather-information:before,
    .td-weather-week:before,
    .td_block_exchange .td-exchange-header:before,
    .td-pulldown-syle-2 .td-subcat-dropdown ul:after,
    .td_block_template_9 .td-block-title:after,
    .td_block_template_15 .td-block-title:before,
    div.wpforms-container .wpforms-form div.wpforms-submit-container button[type=submit],
    .td-close-video-fixed {
        background-color: #ef3b74;
    }

    .td_block_template_4 .td-related-title .td-cur-simple-item:before {
        border-color: #ef3b74 transparent transparent transparent !important;
    }
    
    
    .td_block_template_4 .td-related-title .td-cur-simple-item,
    .td_block_template_3 .td-related-title .td-cur-simple-item,
    .td_block_template_9 .td-related-title:after {
        background-color: #ef3b74;
    }

    a,
    cite a:hover,
    .td-page-content blockquote p,
    .td-post-content blockquote p,
    .mce-content-body blockquote p,
    .comment-content blockquote p,
    .wpb_text_column blockquote p,
    .td_block_text_with_title blockquote p,
    .td_module_wrap:hover .entry-title a,
    .td-subcat-filter .td-subcat-list a:hover,
    .td-subcat-filter .td-subcat-dropdown a:hover,
    .td_quote_on_blocks,
    .dropcap2,
    .dropcap3,
    .td_top_authors .td-active .td-authors-name a,
    .td_top_authors .td_mod_wrap:hover .td-authors-name a,
    .td-post-next-prev-content a:hover,
    .author-box-wrap .td-author-social a:hover,
    .td-author-name a:hover,
    .td-author-url a:hover,
    .comment-reply-link:hover,
    .logged-in-as a:hover,
    #cancel-comment-reply-link:hover,
    .td-search-query,
    .widget a:hover,
    .td_wp_recentcomments a:hover,
    .archive .widget_archive .current,
    .archive .widget_archive .current a,
    .widget_calendar tfoot a:hover,
    #bbpress-forums li.bbp-header .bbp-reply-content span a:hover,
    #bbpress-forums .bbp-forum-freshness a:hover,
    #bbpress-forums .bbp-topic-freshness a:hover,
    #bbpress-forums .bbp-forums-list li a:hover,
    #bbpress-forums .bbp-forum-title:hover,
    #bbpress-forums .bbp-topic-permalink:hover,
    #bbpress-forums .bbp-topic-started-by a:hover,
    #bbpress-forums .bbp-topic-started-in a:hover,
    #bbpress-forums .bbp-body .super-sticky li.bbp-topic-title .bbp-topic-permalink,
    #bbpress-forums .bbp-body .sticky li.bbp-topic-title .bbp-topic-permalink,
    .widget_display_replies .bbp-author-name,
    .widget_display_topics .bbp-author-name,
    .td-subfooter-menu li a:hover,
    a.vc_btn-black:hover,
    .td-smart-list-dropdown-wrap .td-smart-list-button:hover,
    .td-instagram-user a,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-display-option:hover,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-display-option:hover i,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-link:hover,
    .td-block-title-wrap .td-wrapper-pulldown-filter .td-pulldown-filter-item .td-cur-simple-item,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more i,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more i,
    .td_block_template_2 .td-related-title .td-cur-simple-item,
    .td_block_template_5 .td-related-title .td-cur-simple-item,
    .td_block_template_6 .td-related-title .td-cur-simple-item,
    .td_block_template_7 .td-related-title .td-cur-simple-item,
    .td_block_template_8 .td-related-title .td-cur-simple-item,
    .td_block_template_9 .td-related-title .td-cur-simple-item,
    .td_block_template_10 .td-related-title .td-cur-simple-item,
    .td_block_template_11 .td-related-title .td-cur-simple-item,
    .td_block_template_12 .td-related-title .td-cur-simple-item,
    .td_block_template_13 .td-related-title .td-cur-simple-item,
    .td_block_template_14 .td-related-title .td-cur-simple-item,
    .td_block_template_15 .td-related-title .td-cur-simple-item,
    .td_block_template_16 .td-related-title .td-cur-simple-item,
    .td_block_template_17 .td-related-title .td-cur-simple-item,
    .td-theme-wrap .sf-menu ul .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu ul .sfHover > a,
    .td-theme-wrap .sf-menu ul .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-category-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-menu-item > a,
    .td_outlined_btn,
    .td_block_categories_tags .td-ct-item:hover {
        color: #ef3b74;
    }

    a.vc_btn-black.vc_btn_square_outlined:hover,
    a.vc_btn-black.vc_btn_outlined:hover {
        color: #ef3b74 !important;
    }

    .td-next-prev-wrap a:hover,
    .td-load-more-wrap a:hover,
    .td-post-small-box a:hover,
    .page-nav .current,
    .page-nav:first-child > div,
    #bbpress-forums .bbp-pagination .current,
    .post .td_quote_box,
    .page .td_quote_box,
    a.vc_btn-black:hover,
    .td_block_template_5 .td-block-title > *,
    .td_outlined_btn {
        border-color: #ef3b74;
    }

    .td_wrapper_video_playlist .td_video_currently_playing:after {
        border-color: #ef3b74 !important;
    }

    .header-search-wrap .td-drop-down-search:before {
        border-color: transparent transparent #ef3b74 transparent;
    }

    .block-title > span,
    .block-title > a,
    .block-title > label,
    .widgettitle,
    .widgettitle:after,
    body .td-trending-now-title,
    .td-trending-now-wrapper:hover .td-trending-now-title,
    .wpb_tabs li.ui-tabs-active a,
    .wpb_tabs li:hover a,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tab.vc_active > a,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tab:hover > a,
    .td_block_template_1 .td-related-title .td-cur-simple-item,
    .td-subcat-filter .td-subcat-dropdown:hover .td-subcat-more, 
    .td_3D_btn,
    .td_shadow_btn,
    .td_default_btn,
    .td_round_btn, 
    .td_outlined_btn:hover {
    	background-color: #ef3b74;
    }
    .block-title,
    .td_block_template_1 .td-related-title,
    .wpb_tabs .wpb_tabs_nav,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container {
        border-color: #ef3b74;
    }
    .td_block_wrap .td-subcat-item a.td-cur-simple-item {
	    color: #ef3b74;
	}


    
    .td-grid-style-4 .entry-title
    {
        background-color: rgba(239, 59, 116, 0.7);
    }


    
    @media (max-width: 767px) {
        body .td-header-wrap .td-header-main-menu {
            background-color: #ef3e77 !important;
        }
    }


    
    .td-menu-background:before,
    .td-search-background:before {
        background: #ef779d;
        background: -moz-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, #ef779d), color-stop(100%, #db1a4d));
        background: -webkit-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: -o-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: -ms-linear-gradient(top, #ef779d 0%, #db1a4d 100%);
        background: linear-gradient(to bottom, #ef779d 0%, #db1a4d 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ef779d', endColorstr='#db1a4d', GradientType=0 );
    }

    
    .td-mobile-content .current-menu-item > a,
    .td-mobile-content .current-menu-ancestor > a,
    .td-mobile-content .current-category-ancestor > a,
    #td-mobile-nav .td-menu-login-section a:hover,
    #td-mobile-nav .td-register-section a:hover,
    #td-mobile-nav .td-menu-socials-wrap a:hover i,
    .td-search-close a:hover i {
        color: #ffffff;
    }

    
    ul.sf-menu > .menu-item > a {
        font-family:Palanquin;
	font-size:15px;
	font-weight:500;
	
    }
    
    .sf-menu ul .menu-item a {
        font-family:Palanquin;
	font-size:15px;
	
    }
    
    .td-mobile-content .td-mobile-main-menu > li > a {
        font-family:Palanquin;
	
    }
    
    .td-mobile-content .sub-menu a {
        font-family:Palanquin;
	font-size:18px;
	
    }
    
    .td-header-wrap .td-logo-text-container .td-logo-text {
        font-family:Palanquin;
	
    }
    
    .td-header-wrap .td-logo-text-container .td-tagline-text {
        font-family:Palanquin;
	
    }



    
	#td-mobile-nav,
	#td-mobile-nav .wpb_button,
	.td-search-wrap-mob {
		font-family:Palanquin;
	
	}


	
    .td-page-title,
    .td-category-title-holder .td-page-title {
    	font-family:Roboto;
	
    }
    
    .td-page-content p,
    .td-page-content li,
    .td-page-content .td_block_text_with_title,
    .wpb_text_column p {
    	font-family:Roboto;
	
    }
    
    .td-page-content h1,
    .wpb_text_column h1 {
    	font-family:Roboto;
	font-size:26px;
	font-weight:500;
	
    }
    
    .td-page-content h2,
    .wpb_text_column h2 {
    	font-family:Roboto;
	font-size:24px;
	font-weight:500;
	
    }
    
    .td-page-content h3,
    .wpb_text_column h3 {
    	font-family:Roboto;
	font-size:22px;
	font-weight:500;
	
    }
    
    .td-page-content h4,
    .wpb_text_column h4 {
    	font-family:Roboto;
	font-size:20px;
	font-weight:500;
	
    }
    
    .td-page-content h5,
    .wpb_text_column h5 {
    	font-family:Roboto;
	font-size:18px;
	font-weight:500;
	
    }
    
    .td-page-content h6,
    .wpb_text_column h6 {
    	font-family:Roboto;
	font-size:15px;
	font-weight:500;
	
    }



	
    body, p {
    	font-family:Roboto;
	font-size:16px;
	font-weight:300;
	
    }




    
    #bbpress-forums .bbp-header .bbp-forums,
    #bbpress-forums .bbp-header .bbp-topics,
    #bbpress-forums .bbp-header {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .hentry .bbp-forum-title,
    #bbpress-forums .hentry .bbp-topic-permalink {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-forums-list li {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-forum-info .bbp-forum-content {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums div.bbp-forum-author a.bbp-author-name,
    #bbpress-forums div.bbp-topic-author a.bbp-author-name,
    #bbpress-forums div.bbp-reply-author a.bbp-author-name,
    #bbpress-forums div.bbp-search-author a.bbp-author-name,
    #bbpress-forums .bbp-forum-freshness .bbp-author-name,
    #bbpress-forums .bbp-topic-freshness a:last-child {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .hentry .bbp-topic-content p,
    #bbpress-forums .hentry .bbp-reply-content p {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums div.bbp-template-notice p {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-pagination-count,
    #bbpress-forums .page-numbers {
    	font-family:Roboto;
	
    }
    
    #bbpress-forums .bbp-topic-started-by,
    #bbpress-forums .bbp-topic-started-by a,
    #bbpress-forums .bbp-topic-started-in,
    #bbpress-forums .bbp-topic-started-in a {
    	font-family:Roboto;
	
    }
    
    
	.white-popup-block,
	.white-popup-block .wpb_button {
		font-family:Roboto;
	
	}.td-header-style-12 .td-header-menu-wrap-full,
    .td-header-style-12 .td-affix,
    .td-grid-style-1.td-hover-1 .td-big-grid-post:hover .td-post-category,
    .td-grid-style-5.td-hover-1 .td-big-grid-post:hover .td-post-category,
    .td_category_template_3 .td-current-sub-category,
    .td_category_template_8 .td-category-header .td-category a.td-current-sub-category,
    .td_category_template_4 .td-category-siblings .td-category a:hover,
     .td_block_big_grid_9.td-grid-style-1 .td-post-category,
    .td_block_big_grid_9.td-grid-style-5 .td-post-category,
    .td-grid-style-6.td-hover-1 .td-module-thumb:after,
     .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > li > a:hover,
    .tdm-menu-active-style5 .td-header-menu-wrap .sf-menu > .sfHover > a {
        background-color: #ef3b74;
    }
    
    .td_mega_menu_sub_cats .cur-sub-cat,
    .td-mega-span h3 a:hover,
    .td_mod_mega_menu:hover .entry-title a,
    .header-search-wrap .result-msg a:hover,
    .td-header-top-menu .td-drop-down-search .td_module_wrap:hover .entry-title a,
    .td-header-top-menu .td-icon-search:hover,
    .td-header-wrap .result-msg a:hover,
    .top-header-menu li a:hover,
    .top-header-menu .current-menu-item > a,
    .top-header-menu .current-menu-ancestor > a,
    .top-header-menu .current-category-ancestor > a,
    .td-social-icon-wrap > a:hover,
    .td-header-sp-top-widget .td-social-icon-wrap a:hover,
    .td_mod_related_posts:hover h3 > a,
    .td-post-template-11 .td-related-title .td-related-left:hover,
    .td-post-template-11 .td-related-title .td-related-right:hover,
    .td-post-template-11 .td-related-title .td-cur-simple-item,
    .td-post-template-11 .td_block_related_posts .td-next-prev-wrap a:hover,
    .td-category-header .td-pulldown-category-filter-link:hover,
    .td-category-siblings .td-subcat-dropdown a:hover,
    .td-category-siblings .td-subcat-dropdown a.td-current-sub-category,
    .footer-text-wrap .footer-email-wrap a,
    .footer-social-wrap a:hover,
    .td_module_17 .td-read-more a:hover,
    .td_module_18 .td-read-more a:hover,
    .td_module_19 .td-post-author-name a:hover,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-2 .td-subcat-dropdown:hover .td-subcat-more i,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more span,
    .td-pulldown-syle-3 .td-subcat-dropdown:hover .td-subcat-more i,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .sfHover > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > li > a:hover {
        color: #ef3b74;
    }
    
    .td-mega-menu-page .wpb_content_element ul li a:hover,
    .td-theme-wrap .td-aj-search-results .td_module_wrap:hover .entry-title a,
    .td-theme-wrap .header-search-wrap .result-msg a:hover {
        color: #ef3b74 !important;
    }
    
    .td_category_template_8 .td-category-header .td-category a.td-current-sub-category,
    .td_category_template_4 .td-category-siblings .td-category a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > li > a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .sfHover > a {
        border-color: #ef3b74;
    }
    
    


    
    .td-header-wrap .td-header-top-menu-full,
    .td-header-wrap .top-header-menu .sub-menu,
    .tdm-header-style-1.td-header-wrap .td-header-top-menu-full,
    .tdm-header-style-1.td-header-wrap .top-header-menu .sub-menu,
    .tdm-header-style-2.td-header-wrap .td-header-top-menu-full,
    .tdm-header-style-2.td-header-wrap .top-header-menu .sub-menu,
    .tdm-header-style-3.td-header-wrap .td-header-top-menu-full,
    .tdm-header-style-3.td-header-wrap .top-header-menu .sub-menu {
        background-color: #383838;
    }
    .td-header-style-8 .td-header-top-menu-full {
        background-color: transparent;
    }
    .td-header-style-8 .td-header-top-menu-full .td-header-top-menu {
        background-color: #383838;
        padding-left: 15px;
        padding-right: 15px;
    }

    .td-header-wrap .td-header-top-menu-full .td-header-top-menu,
    .td-header-wrap .td-header-top-menu-full {
        border-bottom: none;
    }


    
    .td-header-top-menu,
    .td-header-top-menu a,
    .td-header-wrap .td-header-top-menu-full .td-header-top-menu,
    .td-header-wrap .td-header-top-menu-full a,
    .td-header-style-8 .td-header-top-menu,
    .td-header-style-8 .td-header-top-menu a,
    .td-header-top-menu .td-drop-down-search .entry-title a {
        color: #eaeaea;
    }

    
    .top-header-menu .current-menu-item > a,
    .top-header-menu .current-menu-ancestor > a,
    .top-header-menu .current-category-ancestor > a,
    .top-header-menu li a:hover,
    .td-header-sp-top-widget .td-icon-search:hover {
        color: #ffffff;
    }

    
    .sf-menu > .current-menu-item > a:after,
    .sf-menu > .current-menu-ancestor > a:after,
    .sf-menu > .current-category-ancestor > a:after,
    .sf-menu > li:hover > a:after,
    .sf-menu > .sfHover > a:after,
    .td_block_mega_menu .td-next-prev-wrap a:hover,
    .td-mega-span .td-post-category:hover,
     .td-header-wrap .black-menu .sf-menu > li > a:hover,
    .td-header-wrap .black-menu .sf-menu > .current-menu-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > .sfHover > a,
    .td-header-wrap .black-menu .sf-menu > .current-menu-item > a,
    .td-header-wrap .black-menu .sf-menu > .current-menu-ancestor > a,
    .td-header-wrap .black-menu .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > li > a:hover,
    .tdm-menu-active-style5 .tdm-header .td-header-menu-wrap .sf-menu > .sfHover > a {
        background-color: #ef3b74;
    }
    .td_block_mega_menu .td-next-prev-wrap a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style4 .tdm-header .sf-menu > li > a:hover,
    .tdm-menu-active-style4 .tdm-header .sf-menu > .sfHover > a {
        border-color: #ef3b74;
    }
    .header-search-wrap .td-drop-down-search:before {
        border-color: transparent transparent #ef3b74 transparent;
    }
    .td_mega_menu_sub_cats .cur-sub-cat,
    .td_mod_mega_menu:hover .entry-title a,
    .td-theme-wrap .sf-menu ul .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu ul .sfHover > a,
    .td-theme-wrap .sf-menu ul .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-category-ancestor > a,
    .td-theme-wrap .sf-menu ul .current-menu-item > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-item > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-menu-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .current-category-ancestor > a,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > li > a:hover,
    .tdm-menu-active-style3 .tdm-header.td-header-wrap .sf-menu > .sfHover > a {
        color: #ef3b74;
    }
    

    
    .td-header-wrap .td-header-menu-wrap .sf-menu > li > a,
    .td-header-wrap .td-header-menu-social .td-social-icon-wrap a,
    .td-header-style-4 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-style-5 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-style-6 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-style-12 .td-header-menu-social .td-social-icon-wrap i,
    .td-header-wrap .header-search-wrap #td-header-search-button .td-icon-search {
        color: #383838;
    }
    .td-header-wrap .td-header-menu-social + .td-search-wrapper #td-header-search-button:before {
      background-color: #383838;
    }
    
    
    
    ul.sf-menu > .td-menu-item > a,
    .td-theme-wrap .td-header-menu-social {
        font-family:Palanquin;
	font-size:15px;
	font-weight:500;
	
    }
    
    .sf-menu ul .td-menu-item a {
        font-family:Palanquin;
	font-size:15px;
	
    }
    
    
    
    .td-theme-wrap .td-mega-span h3 a {
        color: #383838;
    }
    
    .td-theme-wrap .td-aj-search-results .td-module-title a,
    .td-theme-wrap #td-header-search,
    .td-theme-wrap .header-search-wrap .result-msg a {
        color: #383838;
    }
    
    .td-theme-wrap .header-search-wrap .td-drop-down-search .btn:hover,
    .td-theme-wrap .td-aj-search-results .td_module_wrap:hover .entry-title a,
    .td-theme-wrap .header-search-wrap .result-msg a:hover {
        color: #ef3b74 !important;
    }    
    
    
    .td-theme-wrap .sf-menu .td-normal-menu .sub-menu .td-menu-item > a {
        color: #383838;
    }
    
    .td-theme-wrap .sf-menu .td-normal-menu .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu .td-normal-menu .sfHover > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-category-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-item > a {
        background-color: #fcfcfc;
    }
    
    .td-theme-wrap .sf-menu .td-normal-menu .td-menu-item > a:hover,
    .td-theme-wrap .sf-menu .td-normal-menu .sfHover > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-category-ancestor > a,
    .td-theme-wrap .sf-menu .td-normal-menu .current-menu-item > a {
        color: #ef3b74;
    }
    
    
   
    
    .td-footer-wrapper::before {
        background-size: 100% auto;
    }

    
    .td-footer-wrapper::before {
        background-position: center center;
    }

    
    .td-footer-wrapper::before {
        opacity: 0.2;
    }
    
    
    
    
    
    .block-title > span,
    .block-title > a,
    .widgettitle,
    body .td-trending-now-title,
    .wpb_tabs li a,
    .vc_tta-container .vc_tta-color-grey.vc_tta-tabs-position-top.vc_tta-style-classic .vc_tta-tabs-container .vc_tta-tab > a,
    .td-theme-wrap .td-related-title a,
    .woocommerce div.product .woocommerce-tabs ul.tabs li a,
    .woocommerce .product .products h2:not(.woocommerce-loop-product__title),
    .td-theme-wrap .td-block-title {
        font-family:Palanquin;
	font-weight:500;
	
    }
    
    .td_module_wrap .td-post-author-name a {
        font-family:Palanquin;
	font-size:13px;
	
    }
    
    .td-post-date .entry-date {
        font-family:Palanquin;
	font-size:13px;
	
    }
    
    .td-module-comments a,
    .td-post-views span,
    .td-post-comments a {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-meta .td-post-category,
    .td_module_wrap .td-post-category,
    .td-module-image .td-post-category {
        font-family:Palanquin;
	
    }
    
    
    .top-header-menu > li > a,
    .td-weather-top-widget .td-weather-now .td-big-degrees,
    .td-weather-top-widget .td-weather-header .td-weather-city,
    .td-header-sp-top-menu .td_data_time {
        font-family:Palanquin;
	
    }
    
    .top-header-menu .menu-item-has-children li a {
    	font-family:Palanquin;
	
    }
	
    .td_mod_mega_menu .item-details a {
        font-family:Palanquin;
	
    }
    
    .td_mega_menu_sub_cats .block-mega-child-cats a {
        font-family:Palanquin;
	
    }
    
    .td-subcat-filter .td-subcat-dropdown a,
    .td-subcat-filter .td-subcat-list a,
    .td-subcat-filter .td-subcat-dropdown span {
        font-family:Palanquin;
	
    }
    
    .td-excerpt,
    .td_module_14 .td-excerpt {
        font-family:Palanquin;
	font-size:15px;
	font-weight:300;
	
    }


    
    .td-theme-slider.iosSlider-col-1 .td-module-title {
        font-family:Palanquin;
	
    }
    
    .td-theme-slider.iosSlider-col-2 .td-module-title {
        font-family:Palanquin;
	
    }
    
    .td-theme-slider.iosSlider-col-3 .td-module-title {
        font-family:Palanquin;
	
    }
    
    .homepage-post .td-post-template-8 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }


    
	.td_module_wrap .td-module-title {
		font-family:Palanquin;
	
	}
    
    .td_module_1 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_2 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_3 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_4 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_5 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_6 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_7 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_8 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_9 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_10 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_11 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_12 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_13 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_14 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_15 .entry-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_16 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_17 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_18 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_19 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    
    
	.td_block_trending_now .entry-title,
	.td-theme-slider .td-module-title,
    .td-big-grid-post .entry-title {
		font-family:Palanquin;
	
	}
    
    .td_block_trending_now .entry-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx1 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx2 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx3 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx4 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx5 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx6 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx7 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx8 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx9 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx10 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx11 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx12 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx13 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx14 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx15 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx16 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx17 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx18 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx19 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx20 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx21 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx22 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx23 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx24 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx25 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td_module_mx26 .td-module-title {
    	font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-big-thumb .td-big-grid-meta,
    .td-big-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-medium-thumb .td-big-grid-meta,
    .td-medium-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-small-thumb .td-big-grid-meta,
    .td-small-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-big-grid-post.td-tiny-thumb .td-big-grid-meta,
    .td-tiny-thumb .td-big-grid-meta .entry-title {
        font-family:Palanquin;
	
    }
    
    
    
	.post .td-post-header .entry-title {
		font-family:Palanquin;
	
	}
    
    .td-post-template-default .td-post-header .entry-title {
        font-family:Palanquin;
	font-size:35px;
	font-weight:500;
	
    }
    
    .td-post-template-1 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-2 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-3 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-4 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-5 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-6 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-7 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-8 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-9 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-10 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-11 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-12 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    .td-post-template-13 .td-post-header .entry-title {
        font-family:Palanquin;
	
    }
    
    
    
    .td-post-content p,
    .td-post-content {
        font-family:Palanquin;
	font-size:15px;
	font-weight:300;
	
    }
    
    .post blockquote p,
    .page blockquote p,
    .td-post-text-content blockquote p {
        font-family:Palanquin;
	
    }
    
    .post .td_quote_box p,
    .page .td_quote_box p {
        font-family:Palanquin;
	
    }
    
    .post .td_pull_quote p,
    .page .td_pull_quote p,
    .post .wp-block-pullquote blockquote p,
    .page .wp-block-pullquote blockquote p {
        font-family:Palanquin;
	
    }
    
    .td-post-content li {
        font-family:Palanquin;
	
    }
    
    .td-post-content h1 {
        font-family:Palanquin;
	font-size:26px;
	font-weight:500;
	
    }
    
    .td-post-content h2 {
        font-family:Palanquin;
	font-size:24px;
	font-weight:500;
	
    }
    
    .td-post-content h3 {
        font-family:Palanquin;
	font-size:22px;
	font-weight:500;
	
    }
    
    .td-post-content h4 {
        font-family:Roboto;
	font-size:20px;
	font-weight:500;
	
    }
    
    .td-post-content h5 {
        font-family:Roboto;
	font-size:18px;
	font-weight:500;
	
    }
    
    .td-post-content h6 {
        font-family:Roboto;
	font-size:15px;
	font-weight:500;
	
    }
    
    
    
    .post .td-category a {
        font-family:Roboto;
	
    }
    
    .post header .td-post-author-name,
    .post header .td-post-author-name a {
        font-family:Roboto;
	
    }
    
    .post header .td-post-date .entry-date {
        font-family:Roboto;
	
    }
    
    .post header .td-post-views span,
    .post header .td-post-comments {
        font-family:Roboto;
	
    }
    
    .post .td-post-source-tags a,
    .post .td-post-source-tags span {
        font-family:Roboto;
	
    }
    
    .post .td-post-next-prev-content span {
        font-family:Roboto;
	
    }
    
    .post .td-post-next-prev-content a {
        font-family:Roboto;
	
    }
    
    .post .author-box-wrap .td-author-name a {
        font-family:Roboto;
	
    }
    
    .post .author-box-wrap .td-author-url a {
        font-family:Roboto;
	
    }
    
    .post .author-box-wrap .td-author-description {
        font-family:Roboto;
	
    }
    
	.wp-caption-text,
	.wp-caption-dd,
	 .wp-block-image figcaption {
		font-family:Roboto;
	
	}
    
    .td-post-template-default .td-post-sub-title,
    .td-post-template-1 .td-post-sub-title,
    .td-post-template-4 .td-post-sub-title,
    .td-post-template-5 .td-post-sub-title,
    .td-post-template-9 .td-post-sub-title,
    .td-post-template-10 .td-post-sub-title,
    .td-post-template-11 .td-post-sub-title {
        font-family:Roboto;
	
    }
    
    .td_block_related_posts .entry-title a {
        font-family:Roboto;
	
    }
    
    .post .td-post-share-title {
        font-family:Roboto;
	
    }
    
    .td-post-template-2 .td-post-sub-title,
    .td-post-template-3 .td-post-sub-title,
    .td-post-template-6 .td-post-sub-title,
    .td-post-template-7 .td-post-sub-title,
    .td-post-template-8 .td-post-sub-title {
        font-family:Roboto;
	
    }


    
	.footer-text-wrap {
		font-family:Roboto;
	
	}
	
	.td-sub-footer-copy {
		font-family:Roboto;
	
	}
	
	.td-sub-footer-menu ul li a {
		font-family:Roboto;
	
	}
	
	
	
    .entry-crumbs a,
    .entry-crumbs span,
    #bbpress-forums .bbp-breadcrumb a,
    #bbpress-forums .bbp-breadcrumb .bbp-breadcrumb-current {
    	font-family:Roboto;
	
    }
    
    .td-trending-now-display-area .entry-title {
    	font-family:Roboto;
	
    }
    
    .page-nav a,
    .page-nav span {
    	font-family:Roboto;
	
    }
    
    #td-outer-wrap span.dropcap,
    #td-outer-wrap p.has-drop-cap:not(:focus)::first-letter {
    	font-family:Roboto;
	
    }
    
    .widget_archive a,
    .widget_calendar,
    .widget_categories a,
    .widget_nav_menu a,
    .widget_meta a,
    .widget_pages a,
    .widget_recent_comments a,
    .widget_recent_entries a,
    .widget_text .textwidget,
    .widget_tag_cloud a,
    .widget_search input,
    .woocommerce .product-categories a,
    .widget_display_forums a,
    .widget_display_replies a,
    .widget_display_topics a,
    .widget_display_views a,
    .widget_display_stats {
    	font-family:Roboto;
	
    }
    
	input[type="submit"],
	.td-read-more a,
	.vc_btn,
	.woocommerce a.button,
	.woocommerce button.button,
	.woocommerce #respond input#submit {
		font-family:Roboto;
	
	}
	
	.woocommerce .product a .woocommerce-loop-product__title,
	.woocommerce .widget.woocommerce .product_list_widget a,
	.woocommerce-cart .woocommerce .product-name a {
		font-family:Roboto;
	
	}
	
	.woocommerce .product .summary .product_title {
		font-family:Roboto;
	
	}

    
    .category .td-category a {
    	font-family:Roboto;
	
    }
</style>

<script  async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3984470865416207" crossorigin="anonymous"></script><link rel="icon" href="https://cdn.cdnparenting.com/articles/2021/05/02130657/cropped-Favicon-32x32.jpg" sizes="32x32" />
<link rel="icon" href="https://cdn.cdnparenting.com/articles/2021/05/02130657/cropped-Favicon-192x192.jpg" sizes="192x192" />
<link rel="apple-touch-icon" href="https://cdn.cdnparenting.com/articles/2021/05/02130657/cropped-Favicon-180x180.jpg" />
<meta name="msapplication-TileImage" content="https://cdn.cdnparenting.com/articles/2021/05/02130657/cropped-Favicon-270x270.jpg" />

<!-- Button style compiled by theme -->

<style>
    .tdm_block_column_content:hover .tdm-col-content-title-url .tdm-title,
                .tds-button2 .tdm-btn-text,
                .tds-button2 i,
                .tds-button5:hover .tdm-btn-text,
                .tds-button5:hover i,
                .tds-button6 .tdm-btn-text,
                .tds-button6 i,
                .tdm_block_list .tdm-list-item i,
                .tdm_block_pricing .tdm-pricing-feature i,
                body .tdm-social-item i {
                    color: #ef3b74;
                }
                .tds-button1,
                .tds-button6:after,
                .tds-title2 .tdm-title-line:after,
                .tds-title3 .tdm-title-line:after,
                .tdm_block_pricing.tdm-pricing-featured:before,
                .tdm_block_pricing.tds_pricing2_block.tdm-pricing-featured .tdm-pricing-header,
                .tds-progress-bar1 .tdm-progress-bar:after,
                .tds-progress-bar2 .tdm-progress-bar:after,
                .tds-social3 .tdm-social-item {
                    background-color: #ef3b74;
                }
                .tds-button2:before,
                .tds-button6:before,
                .tds-progress-bar3 .tdm-progress-bar:after {
                  border-color: #ef3b74;
                }
                .tdm-btn-style1 {
					background-color: #ef3b74;
				}
				.tdm-btn-style2:before {
				    border-color: #ef3b74;
				}
				.tdm-btn-style2 {
				    color: #ef3b74;
				}
				.tdm-btn-style3 {
				    -webkit-box-shadow: 0 2px 16px #ef3b74;
                    -moz-box-shadow: 0 2px 16px #ef3b74;
                    box-shadow: 0 2px 16px #ef3b74;
				}
				.tdm-btn-style3:hover {
				    -webkit-box-shadow: 0 4px 26px #ef3b74;
                    -moz-box-shadow: 0 4px 26px #ef3b74;
                    box-shadow: 0 4px 26px #ef3b74;
				}
</style>

	<style id="tdw-css-placeholder"></style>
                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="RHWC7-D2DBE-UVM7F-9FCFV-4QECG",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"RHWC7-D2DBE-UVM7F-9FCFV-4QECG",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e=""=="true"?1:0,t="",n="snjyegyxh22mizofj6ba-f-797c9fa6b-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"36","ak.cp":"881515","ak.ai":parseInt("563020",10),"ak.ol":"0","ak.cr":54,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"70a76450","ak.r":47753,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"147.83.130.0","ak.cport":56202,"ak.gh":"92.123.117.68","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"reno","ak.t":"1707429762","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==MUF45GUpoHjdunBNUeQQ3owTuMAn2rkTyx8PIx3Vh8bbn410wSChWeizR+5Mx6cjlwC+OvJkWAKiZ/9ld2AXmDpcch58gd1xW7+VWWVF4MDT11qIzOYQkSlyl8C1+jeAPr7liOcjRpzzACP4gD5cGgNQNdbm5GnadBG5jlMFU09STZW3bos3CGHyjIcFnnoS8gWO2ymDhfJtEfv5Skbbfqs8dP6RS4s9x/P6xGrYC9+z8J0h2G6qTUCTI9iO3wXVAeYrsTDkGMcuvrR2DEU734dvGec4WJJH56GAhq2570uCM5gkfVK8lRowywOz7kjdkmIcj2pxUqP2Luykfoq5V6wf8L4ukrL4Bowega/8EzXntNp48Ts4iVYIzvEdBsf7h2hgyTWv6h8RuoPTr1R4vDTzEnQFGcd+skkHnVGOimM=","ak.pv":"5","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>

<body class="home page-template page-template-page-pagebuilder-latest page-template-page-pagebuilder-latest-php page page-id-51 td-standard-pack global-block-template-1 aa-prefix-paren- tdb-template td-animation-stack-type1 td-full-layout" itemscope="itemscope" itemtype="https://schema.org/WebPage">

            <div class="td-scroll-up  td-hide-scroll-up-on-mob" style="display:none;"><i class="td-icon-menu-up"></i></div>
    
    <div class="td-menu-background"></div>
<div id="td-mobile-nav">
    <div class="td-mobile-container">
        <!-- mobile menu top section -->
        <div class="td-menu-socials-wrap">
            <!-- socials -->
            <div class="td-menu-socials">
                            </div>
            <!-- close button -->
            <div class="td-mobile-close">
                <a href="#" aria-label="Close"><i class="td-icon-close-mobile"></i></a>
            </div>
        </div>

        <!-- login section -->
        
        <!-- menu section -->
        <div class="td-mobile-content">
            <div class="menu-td-demo-header-menu-container"><ul id="menu-td-demo-header-menu" class="td-mobile-main-menu"><li id="menu-item-255650" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-first menu-item-255650"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%BE%E0%A4%A7%E0%A4%BE%E0%A4%A8/">गर्भधारण<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-255660" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255660"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%95%e0%a5%80-%e0%a4%af%e0%a5%8b%e0%a4%9c%e0%a4%a8%e0%a4%be-%e0%a4%b5-%e0%a4%a4%e0%a5%88%e0%a4%af%e0%a4%be%e0%a4%b0/">गर्भधारण की योजना व तैयारी</a></li>
	<li id="menu-item-255651" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255651"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%95%e0%a4%be-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%af%e0%a4%be%e0%a4%b8/">गर्भधारण का प्रयास</a></li>
	<li id="menu-item-255661" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255661"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%9c%e0%a4%a8%e0%a4%a8-%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%ae%e0%a4%a4%e0%a4%be-%e0%a4%ab%e0%a4%b0%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%bf%e0%a4%9f%e0%a5%80/">प्रजनन क्षमता (फर्टिलिटी)</a></li>
	<li id="menu-item-255662" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255662"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%ac%e0%a4%82%e0%a4%a7%e0%a5%8d%e0%a4%af%e0%a4%a4%e0%a4%be-%e0%a4%87%e0%a4%a8%e0%a4%ab%e0%a4%b0%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%bf%e0%a4%9f%e0%a5%80/">बंध्यता (इनफर्टिलिटी)</a></li>
</ul>
</li>
<li id="menu-item-255663" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-255663"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%BE%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE/">गर्भावस्था<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-255664" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255664"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be-%e0%a4%b8%e0%a4%aa%e0%a5%8d%e0%a4%a4%e0%a4%be%e0%a4%b9-%e0%a4%a6%e0%a4%b0-%e0%a4%b8%e0%a4%aa%e0%a5%8d/">गर्भावस्था सप्ताह दर सप्ताह</a></li>
	<li id="menu-item-255665" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255665"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5%e0%a4%aa%e0%a5%82%e0%a4%b0%e0%a5%8d%e0%a4%b5-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">प्रसवपूर्व देखभाल</a></li>
	<li id="menu-item-255666" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255666"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%b8%e0%a4%82%e0%a4%95%e0%a5%87%e0%a4%a4-%e0%a4%b5-%e0%a4%b2%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%a3/">संकेत व लक्षण</a></li>
	<li id="menu-item-255667" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255667"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5/">प्रसव</a></li>
	<li id="menu-item-255668" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255668"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%9c%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%a4%e0%a4%be%e0%a4%8f%e0%a4%82-%e0%a4%95%e0%a5%89%e0%a4%ae%e0%a5%8d%e0%a4%aa%e0%a5%8d%e0%a4%b2%e0%a5%80%e0%a4%95%e0%a5%87%e0%a4%b6%e0%a4%a8%e0%a5%8d%e0%a4%b8/">जटिलताएं (कॉम्प्लीकेशन्स)</a></li>
	<li id="menu-item-255669" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255669"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%96%e0%a4%be%e0%a4%a8%e0%a4%aa%e0%a4%be%e0%a4%a8/">खानपान</a></li>
	<li id="menu-item-255670" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255670"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5%e0%a5%8b%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">प्रसवोत्तर देखभाल</a></li>
</ul>
</li>
<li id="menu-item-275" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-275"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81/">शिशु<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-109764" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109764"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%ae%e0%a4%b9%e0%a5%80%e0%a4%a8%e0%a5%87-%e0%a4%a6%e0%a4%b0-%e0%a4%ae%e0%a4%b9%e0%a5%80%e0%a4%a8%e0%a5%87-%e0%a4%b5%e0%a4%bf%e0%a4%95%e0%a4%be%e0%a4%b8/">महीने दर महीने विकास</a></li>
	<li id="menu-item-109760" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109760"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%80-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">शिशु की देखभाल</a></li>
	<li id="menu-item-109763" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109763"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li id="menu-item-109781" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109781"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%ac%e0%a4%9a%e0%a4%be%e0%a4%b5-%e0%a4%b5-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/">बचाव व सुरक्षा</a></li>
	<li id="menu-item-109759" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109759"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b8%e0%a5%8d%e0%a4%a4%e0%a4%a8%e0%a4%aa%e0%a4%be%e0%a4%a8/">स्तनपान</a></li>
	<li id="menu-item-109761" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109761"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%96%e0%a4%be%e0%a4%a8-%e0%a4%aa%e0%a4%be%e0%a4%a8/">खान-पान</a></li>
	<li id="menu-item-109758" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109758"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%80-%e0%a4%a8%e0%a5%80%e0%a4%82%e0%a4%a6/">शिशु की नींद</a></li>
	<li id="menu-item-147288" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-147288"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%87-%e0%a4%a8%e0%a4%be%e0%a4%ae/">शिशु के नाम</a></li>
</ul>
</li>
<li id="menu-item-288" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-288"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%9F%E0%A5%89%E0%A4%A1%E0%A4%B2%E0%A4%B0/">टॉडलर (1-3 वर्ष)<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-109802" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109802"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">देखभाल</a></li>
	<li id="menu-item-109800" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109800"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li id="menu-item-255687" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255687"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/">आहार व पोषण</a></li>
	<li id="menu-item-255682" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255682"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%96%e0%a5%87%e0%a4%b2-%e0%a4%b5-%e0%a4%97%e0%a4%a4%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%bf%e0%a4%af%e0%a4%be%e0%a4%82/">खेल व गतिविधियां</a></li>
</ul>
</li>
<li id="menu-item-299" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-299"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%82%E0%A4%B2%E0%A4%B0/">प्रीस्कूलर (3-5 वर्ष)<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-255721" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255721"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/">आहार व पोषण</a></li>
	<li id="menu-item-255717" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255717"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%b5%e0%a5%8d%e0%a4%af%e0%a4%b5%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%85%e0%a4%a8%e0%a5%81/">व्यवहार व अनुशासन</a></li>
	<li id="menu-item-109791" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109791"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">देखभाल</a></li>
	<li id="menu-item-109793" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109793"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li id="menu-item-109796" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109796"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%ac%e0%a4%9a%e0%a4%be%e0%a4%b5-%e0%a4%b5-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a4%95%e0%a5%8d%e0%a4%b7/">बचाव व सुरक्षा</a></li>
</ul>
</li>
<li id="menu-item-309" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-309"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%AC%E0%A4%A1%E0%A4%BC%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87/">बड़े बच्चे (5-8 वर्ष)<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-109785" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109785"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b5%e0%a4%bf%e0%a4%95%e0%a4%be%e0%a4%b8/">विकास</a></li>
	<li id="menu-item-255730" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255730"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b5%e0%a5%8d%e0%a4%af%e0%a4%b5%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%85%e0%a4%a8%e0%a5%81%e0%a4%b6%e0%a4%be%e0%a4%b8%e0%a4%a8/">व्यवहार व अनुशासन</a></li>
	<li id="menu-item-255735" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255735"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/">आहार व पोषण</a></li>
	<li id="menu-item-255734" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-255734"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%96%e0%a5%87%e0%a4%b2-%e0%a4%b5-%e0%a4%97%e0%a4%a4%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%bf%e0%a4%af/">खेल व गतिविधियां</a></li>
	<li id="menu-item-109784" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109784"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">देखभाल</a></li>
	<li id="menu-item-109787" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109787"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li id="menu-item-109789" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109789"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a4%be%e0%a4%b5-%e0%a4%b5-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/">बचाव व सुरक्षा</a></li>
</ul>
</li>
<li id="menu-item-284403" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-284403"><a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/">बच्चों की कहानियां</a></li>
<li id="menu-item-281996" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-281996"><a href="https://parenting.firstcry.com/baby-names/?ref2=HindiParenting">Baby Names</a></li>
<li id="menu-item-1834" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1834"><a target="_blank" href="https://www.firstcry.com/?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=app_download_banners&#038;utm_content=menu">शॉपिंग<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
	<li id="menu-item-110099" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110099"><a target="_blank" href="https://www.firstcry.com/newborn-baby-clothes-dresses?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बेबी क्लोथ्स</a></li>
	<li id="menu-item-110100" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110100"><a target="_blank" href="https://www.firstcry.com/kids-clothing-dresses?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">किड्स क्लोथ्स</a></li>
	<li id="menu-item-110101" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110101"><a target="_blank" href="https://www.firstcry.com/baby-kids-footwear?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">फुटवियर</a></li>
	<li id="menu-item-110103" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110103"><a target="_blank" href="https://www.firstcry.com/toys-learning-entertainment?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">टॉयज़, बुक्स एंड स्कूल</a></li>
	<li id="menu-item-110104" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110104"><a target="_blank" href="https://www.firstcry.com/diapering?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">डायपरिंग</a></li>
	<li id="menu-item-110105" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110105"><a target="_blank" href="https://www.firstcry.com/feeding-and-nursing?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">फीडिंग एंड नर्सिंग</a></li>
	<li id="menu-item-110106" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110106"><a target="_blank" href="https://www.firstcry.com/bath-and-skin-care?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बाथ एंड स्किन</a></li>
	<li id="menu-item-110107" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110107"><a target="_blank" href="https://www.firstcry.com/health-and-safety?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">हेल्थ एंड सेफ़्टी</a></li>
	<li id="menu-item-110109" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110109"><a target="_blank" href="https://www.firstcry.com/maternity-clothing-and-care?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">मॉम्स एंड मेटर्निटी</a></li>
	<li id="menu-item-110111" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110111"><a target="_blank" href="https://www.firstcry.com/boutiques?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">प्रीमियम</a></li>
	<li id="menu-item-110108" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110108"><a target="_blank" href="https://www.firstcry.com/baby-gear-and-nursery?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बेबी गियर एंड नर्सरी</a></li>
	<li id="menu-item-110112" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110112"><a target="_blank" href="https://www.firstcry.com/offers?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">ऑफर ज़ोन</a></li>
	<li id="menu-item-110110" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110110"><a target="_blank" href="https://www.firstcry.com/baby-kids-gifts?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बर्थडे एंड गिफ्ट्स</a></li>
	<li id="menu-item-110113" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-110113"><a target="_blank" href="https://www.firstcry.com/store-locator.aspx?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">स्टोर्स</a></li>
</ul>
</li>
</ul></div>        </div>
    </div>

    <!-- register/login section -->
    </div>    <div class="td-search-background"></div>
<div class="td-search-wrap-mob">
	<div class="td-drop-down-search">
		<form method="get" class="td-search-form" action="https://hindiparenting.firstcry.com/">
			<!-- close button -->
			<div class="td-search-close">
				<a href="#"><i class="td-icon-close-mobile"></i></a>
			</div>
			<div role="search" class="td-search-input">
				<span>Search</span>
				<input id="td-header-search-mob" type="text" value="" name="s" autocomplete="off" />
			</div>
		</form>
		<div id="td-aj-search-mob" class="td-ajax-search-flex"></div>
	</div>
</div>

    <div id="td-outer-wrap" class="td-theme-wrap">
    
        
            <div class="tdc-header-wrap ">

            <!--
Header style 1
-->


<div class="td-header-wrap td-header-style-1 ">
    
    <div class="td-header-top-menu-full td-container-wrap ">
        <div class="td-container td-header-row td-header-top-menu">
            
    <div class="top-bar-style-2">
        <div class="td-header-sp-top-widget">
    
    
            </div>        
<div class="td-header-sp-top-menu">


	        <div class="td_data_time">
            <div >

                Friday, February 9, 2024
            </div>
        </div>
    </div>
    </div>

<!-- LOGIN MODAL -->

                <div  id="login-form" class="white-popup-block mfp-hide mfp-with-anim">
                    <div class="td-login-wrap">
                        <a href="#" aria-label="Back" class="td-back-button"><i class="td-icon-modal-back"></i></a>
                        <div id="td-login-div" class="td-login-form-div td-display-block">
                            <div class="td-login-panel-title">Sign in</div>
                            <div class="td-login-panel-descr">Welcome! Log into your account</div>
                            <div class="td_display_err"></div>
                            <form action="#" method="post">
                            <div class="td-login-inputs"><input class="td-login-input" autocomplete="username" type="text" name="login_email" id="login_email" value="" required><label for="login_email">your username</label></div>
	                        <div class="td-login-inputs"><input class="td-login-input" autocomplete="current-password" type="password" name="login_pass" id="login_pass" value="" required><label for="login_pass">your password</label></div>
                            <input type="button" name="login_button" id="login_button" class="wpb_button btn td-login-button" value="Login">
                            </form>
                            <div class="td-login-info-text"><a href="#" id="forgot-pass-link">Forgot your password? Get help</a></div>
                            
                            
                            <a id="register-link">Create an account</a>
                            
                        </div>

                        
                <div id="td-register-div" class="td-login-form-div td-display-none">
                    <div class="td-login-panel-title">Create an account</div>
                    <div class="td-login-panel-descr">Welcome! Register for an account</div>
                    <div class="td_display_err"></div>
                    <div class="td-login-inputs"><input class="td-login-input" type="text" name="register_email" id="register_email" value="" required><label for="register_email">your email</label></div>
                    <div class="td-login-inputs"><input class="td-login-input" type="text" name="register_user" id="register_user" value="" required><label for="register_user">your username</label></div>
                    <input type="button" name="register_button" id="register_button" class="wpb_button btn td-login-button" value="Register">
                    <div class="td-login-info-text">A password will be e-mailed to you.</div>
                    
                </div>

                         <div id="td-forgot-pass-div" class="td-login-form-div td-display-none">
                            <div class="td-login-panel-title">Password recovery</div>
                            <div class="td-login-panel-descr">Recover your password</div>
                            <div class="td_display_err"></div>
                            <div class="td-login-inputs"><input class="td-login-input" type="text" name="forgot_email" id="forgot_email" value="" required><label for="forgot_email">your email</label></div>
                            <input type="button" name="forgot_button" id="forgot_button" class="wpb_button btn td-login-button" value="Send My Password">
                            <div class="td-login-info-text">A password will be e-mailed to you.</div>
                        </div>
                        
                        
                    </div>
                </div>
                        </div>
    </div>

    <div class="td-banner-wrap-full td-logo-wrap-full td-container-wrap ">
        <div class="td-container td-header-row td-header-header">
            <div class="td-header-sp-logo">
                <h1 class="td-logo">            <a class="td-main-logo" href="https://hindiparenting.firstcry.com/">
                <img src="https://cdn.cdnparenting.com/articles/2019/08/06170200/logo-header-hindi.png" alt="FirstCry Parenting" title="FirstCry Parenting"/>
                <span class="td-visual-hidden">फर्स्टक्राई पेरेंटिंग हिंदी</span>
            </a>
        </h1>            </div>
                    </div>
    </div>

    <div class="td-header-menu-wrap-full td-container-wrap ">
        
        <div class="td-header-menu-wrap td-header-gradient ">
            <div class="td-container td-header-row td-header-main-menu">
                <div id="td-header-menu" role="navigation">
    <div id="td-top-mobile-toggle"><a href="#"><i class="td-icon-font td-icon-mobile"></i></a></div>
    <div class="td-main-menu-logo td-logo-in-header">
        		<a class="td-mobile-logo td-sticky-disable" href="https://hindiparenting.firstcry.com/">
			<img src="https://cdn.cdnparenting.com/articles/2019/08/06160349/Firstcry-hindi-white-1.png" alt="FirstCry Parenting" title="FirstCry Parenting"/>
		</a>
			<a class="td-header-logo td-sticky-disable" href="https://hindiparenting.firstcry.com/">
			<img src="https://cdn.cdnparenting.com/articles/2019/08/06170200/logo-header-hindi.png" alt="FirstCry Parenting" title="FirstCry Parenting"/>
		</a>
	    </div>
    <div class="menu-td-demo-header-menu-container"><ul id="menu-td-demo-header-menu-1" class="sf-menu"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-first td-menu-item td-normal-menu menu-item-255650"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%BE%E0%A4%A7%E0%A4%BE%E0%A4%A8/">गर्भधारण</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255660"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%95%e0%a5%80-%e0%a4%af%e0%a5%8b%e0%a4%9c%e0%a4%a8%e0%a4%be-%e0%a4%b5-%e0%a4%a4%e0%a5%88%e0%a4%af%e0%a4%be%e0%a4%b0/">गर्भधारण की योजना व तैयारी</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255651"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%95%e0%a4%be-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%af%e0%a4%be%e0%a4%b8/">गर्भधारण का प्रयास</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255661"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%9c%e0%a4%a8%e0%a4%a8-%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%ae%e0%a4%a4%e0%a4%be-%e0%a4%ab%e0%a4%b0%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%bf%e0%a4%9f%e0%a5%80/">प्रजनन क्षमता (फर्टिलिटी)</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255662"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%ac%e0%a4%82%e0%a4%a7%e0%a5%8d%e0%a4%af%e0%a4%a4%e0%a4%be-%e0%a4%87%e0%a4%a8%e0%a4%ab%e0%a4%b0%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%bf%e0%a4%9f%e0%a5%80/">बंध्यता (इनफर्टिलिटी)</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children td-menu-item td-normal-menu menu-item-255663"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%BE%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE/">गर्भावस्था</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255664"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be-%e0%a4%b8%e0%a4%aa%e0%a5%8d%e0%a4%a4%e0%a4%be%e0%a4%b9-%e0%a4%a6%e0%a4%b0-%e0%a4%b8%e0%a4%aa%e0%a5%8d/">गर्भावस्था सप्ताह दर सप्ताह</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255665"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5%e0%a4%aa%e0%a5%82%e0%a4%b0%e0%a5%8d%e0%a4%b5-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">प्रसवपूर्व देखभाल</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255666"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%b8%e0%a4%82%e0%a4%95%e0%a5%87%e0%a4%a4-%e0%a4%b5-%e0%a4%b2%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%a3/">संकेत व लक्षण</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255667"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5/">प्रसव</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255668"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%9c%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%a4%e0%a4%be%e0%a4%8f%e0%a4%82-%e0%a4%95%e0%a5%89%e0%a4%ae%e0%a5%8d%e0%a4%aa%e0%a5%8d%e0%a4%b2%e0%a5%80%e0%a4%95%e0%a5%87%e0%a4%b6%e0%a4%a8%e0%a5%8d%e0%a4%b8/">जटिलताएं (कॉम्प्लीकेशन्स)</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255669"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%96%e0%a4%be%e0%a4%a8%e0%a4%aa%e0%a4%be%e0%a4%a8/">खानपान</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255670"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5%e0%a5%8b%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">प्रसवोत्तर देखभाल</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children td-menu-item td-normal-menu menu-item-275"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81/">शिशु</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109764"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%ae%e0%a4%b9%e0%a5%80%e0%a4%a8%e0%a5%87-%e0%a4%a6%e0%a4%b0-%e0%a4%ae%e0%a4%b9%e0%a5%80%e0%a4%a8%e0%a5%87-%e0%a4%b5%e0%a4%bf%e0%a4%95%e0%a4%be%e0%a4%b8/">महीने दर महीने विकास</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109760"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%80-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">शिशु की देखभाल</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109763"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109781"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%ac%e0%a4%9a%e0%a4%be%e0%a4%b5-%e0%a4%b5-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/">बचाव व सुरक्षा</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109759"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b8%e0%a5%8d%e0%a4%a4%e0%a4%a8%e0%a4%aa%e0%a4%be%e0%a4%a8/">स्तनपान</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109761"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%96%e0%a4%be%e0%a4%a8-%e0%a4%aa%e0%a4%be%e0%a4%a8/">खान-पान</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109758"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%80-%e0%a4%a8%e0%a5%80%e0%a4%82%e0%a4%a6/">शिशु की नींद</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-147288"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%87-%e0%a4%a8%e0%a4%be%e0%a4%ae/">शिशु के नाम</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children td-menu-item td-normal-menu menu-item-288"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%9F%E0%A5%89%E0%A4%A1%E0%A4%B2%E0%A4%B0/">टॉडलर (1-3 वर्ष)</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109802"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">देखभाल</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109800"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255687"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/">आहार व पोषण</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255682"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%96%e0%a5%87%e0%a4%b2-%e0%a4%b5-%e0%a4%97%e0%a4%a4%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%bf%e0%a4%af%e0%a4%be%e0%a4%82/">खेल व गतिविधियां</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children td-menu-item td-normal-menu menu-item-299"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%82%E0%A4%B2%E0%A4%B0/">प्रीस्कूलर (3-5 वर्ष)</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255721"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/">आहार व पोषण</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255717"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%b5%e0%a5%8d%e0%a4%af%e0%a4%b5%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%85%e0%a4%a8%e0%a5%81/">व्यवहार व अनुशासन</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109791"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">देखभाल</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109793"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109796"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%b8%e0%a5%8d%e0%a4%95%e0%a5%82%e0%a4%b2%e0%a4%b0-%e0%a4%ac%e0%a4%9a%e0%a4%be%e0%a4%b5-%e0%a4%b5-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a4%95%e0%a5%8d%e0%a4%b7/">बचाव व सुरक्षा</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children td-menu-item td-normal-menu menu-item-309"><a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%AC%E0%A4%A1%E0%A4%BC%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87/">बड़े बच्चे (5-8 वर्ष)</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109785"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b5%e0%a4%bf%e0%a4%95%e0%a4%be%e0%a4%b8/">विकास</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255730"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b5%e0%a5%8d%e0%a4%af%e0%a4%b5%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%85%e0%a4%a8%e0%a5%81%e0%a4%b6%e0%a4%be%e0%a4%b8%e0%a4%a8/">व्यवहार व अनुशासन</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255735"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/">आहार व पोषण</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-255734"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%96%e0%a5%87%e0%a4%b2-%e0%a4%b5-%e0%a4%97%e0%a4%a4%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%bf%e0%a4%af/">खेल व गतिविधियां</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109784"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/">देखभाल</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109787"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/">स्वास्थ्य</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-109789"><a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a4%be%e0%a4%b5-%e0%a4%b5-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/">बचाव व सुरक्षा</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-284403"><a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/">बच्चों की कहानियां</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-281996"><a href="https://parenting.firstcry.com/baby-names/?ref2=HindiParenting">Baby Names</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children td-menu-item td-normal-menu menu-item-1834"><a target="_blank" href="https://www.firstcry.com/?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=app_download_banners&#038;utm_content=menu">शॉपिंग</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110099"><a target="_blank" href="https://www.firstcry.com/newborn-baby-clothes-dresses?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बेबी क्लोथ्स</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110100"><a target="_blank" href="https://www.firstcry.com/kids-clothing-dresses?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">किड्स क्लोथ्स</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110101"><a target="_blank" href="https://www.firstcry.com/baby-kids-footwear?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">फुटवियर</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110103"><a target="_blank" href="https://www.firstcry.com/toys-learning-entertainment?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">टॉयज़, बुक्स एंड स्कूल</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110104"><a target="_blank" href="https://www.firstcry.com/diapering?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">डायपरिंग</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110105"><a target="_blank" href="https://www.firstcry.com/feeding-and-nursing?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">फीडिंग एंड नर्सिंग</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110106"><a target="_blank" href="https://www.firstcry.com/bath-and-skin-care?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बाथ एंड स्किन</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110107"><a target="_blank" href="https://www.firstcry.com/health-and-safety?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">हेल्थ एंड सेफ़्टी</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110109"><a target="_blank" href="https://www.firstcry.com/maternity-clothing-and-care?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">मॉम्स एंड मेटर्निटी</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110111"><a target="_blank" href="https://www.firstcry.com/boutiques?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">प्रीमियम</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110108"><a target="_blank" href="https://www.firstcry.com/baby-gear-and-nursery?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बेबी गियर एंड नर्सरी</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110112"><a target="_blank" href="https://www.firstcry.com/offers?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">ऑफर ज़ोन</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110110"><a target="_blank" href="https://www.firstcry.com/baby-kids-gifts?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">बर्थडे एंड गिफ्ट्स</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-110113"><a target="_blank" href="https://www.firstcry.com/store-locator.aspx?utm_source=hindiparenting_site&#038;utm_medium=hindiparenting_site_promotions&#038;utm_campaign=parenting_shopping&#038;utm_content=menu">स्टोर्स</a></li>
</ul>
</li>
</ul></div></div>


    <div class="header-search-wrap">
        <div class="td-search-btns-wrap">
            <a id="td-header-search-button" href="#" role="button" class="dropdown-toggle " data-toggle="dropdown"><i class="td-icon-search"></i></a>
            <a id="td-header-search-button-mob" href="#" class="dropdown-toggle " data-toggle="dropdown"><i class="td-icon-search"></i></a>
        </div>

        <div class="td-drop-down-search" aria-labelledby="td-header-search-button">
            <form method="get" class="td-search-form" action="https://hindiparenting.firstcry.com/">
                <div role="search" class="td-head-form-search-wrap">
                    <input id="td-header-search" type="text" value="" name="s" autocomplete="off" /><input class="wpb_button wpb_btn-inverse btn" type="submit" id="td-header-search-top" value="Search" />
                </div>
            </form>
            <div id="td-aj-search"></div>
        </div>
    </div>
            </div>
        </div>
    </div>

</div>
            </div>

            

<div class="td-main-content-wrap td-main-page-wrap td-container-wrap">

            
                <div class="tdc-content-wrap">
                    <div id="tdi_1" class="tdc-zone"><div class="tdc_zone tdi_2  wpb_row td-pb-row"  >
<style scoped>

/* custom css */
.tdi_2{
                    min-height: 0;
                }
</style><div id="tdi_3" class="tdc-row"><div class="vc_row tdi_4  wpb_row td-pb-row" >
<style scoped>

/* custom css */
.tdi_4,
                .tdi_4 .tdc-columns{
                    min-height: 0;
                }.tdi_4,
				.tdi_4 .tdc-columns{
				    display: block;
				}.tdi_4 .tdc-columns{
				    width: 100%;
				}
</style><div class="vc_column tdi_6  wpb_column vc_column_container tdc-column td-pb-span12">
<style scoped>

/* custom css */
.tdi_6{
                    vertical-align: baseline;
                }.tdi_6 > .wpb_wrapper,
				.tdi_6 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_6 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_6 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_6 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"><div class="td_block_wrap td_block_trending_now tdi_7 td-pb-border-top td_block_template_1"  data-td-block-uid="tdi_7" >
<style>
/* custom css */
.td_block_trending_now{
                  padding: 0 18px;
                }.td-trending-now-wrapper{
                  display: flex;
                  align-items: center;
                  position: relative;
                  -webkit-transform: translate3d(0px, 0px, 0px);
                  transform: translate3d(0px, 0px, 0px);
                  overflow: hidden;
                }.td-trending-now-wrapper .td-next-prev-wrap{
                  margin: 0 0 0 auto;
                  z-index: 1;
                }.td-trending-now-wrapper:hover .td-trending-now-title{
                  background-color: #4db2ec;
                }.td-trending-now-wrapper .td-trending-now-nav-right{
                  padding-left: 2px;
                }.td-trending-now-title{
                  background-color: #222;
                  font-family: 'Roboto', sans-serif;
                  font-size: 12px;
                  text-transform: uppercase;
                  color: #fff;
                  padding: 2px 10px 1px;
                  display: inline-block;
                  line-height: 22px;
                  -webkit-transition: background-color 0.3s;
                  transition: background-color 0.3s;
                  cursor: default;
                  -webkit-user-select: none;
                  user-select: none;
                }@-moz-document url-prefix(){
                  .td-trending-now-title {
                    line-height: 21px;
                  }}
                .td-trending-now-display-area{
                  display: flex;
                  align-items: center;
                  vertical-align: top;
                  padding: 0 0 0 15px;
                }.td-trending-now-display-area .entry-title{
                  font-size: 15px;
                  line-height: 25px;
                  margin: 0;
                }.td-trending-now-post{
                  opacity: 0;
                  position: absolute;
                  top: 0;
                  padding-right: 119px;
                  overflow: hidden;
                }.td-trending-now-post:first-child{
                  opacity: 1;
                  z-index: 1;
                
                  opacity: 1;
                }.td-next-prev-wrap .td-trending-now-nav-right{
                  margin-right: 0;
                }.td_block_trending_now.td-trending-style2{
                  border: 1px solid #eaeaea;
                  padding-top: 20px;
                  padding-bottom: 20px;
                }body .tdi_7 .td-trending-now-title,
				.tdi_7 .td-trending-now-wrapper:hover .td-trending-now-title{
					background-color: #ef3b74;
				}.tdi_7 .td-next-prev-wrap a:hover{
				    color: #fff;
				}@media (min-width: 768px) and (max-width: 1018px) {
                  .td_block_trending_now {
                    padding: 0 6px;
                  }
                }@media (min-width: 768px) and (max-width: 1018px) {
                  .td-trending-now-post {
                    padding-right: 107px;
                  }
                }@media (max-width: 767px) {
                  .td_block_trending_now {
                    padding: 0;
                  }
                  .td-trending-now-wrapper {
                    flex-direction: column;
                    text-align: center;
                  }
                  .td-trending-now-wrapper .td-next-prev-wrap {
                    display: none;
                  }
                  .td-trending-now-title {
                    padding: 2px 10px 1px;
                  }
                  .td-trending-now-display-area {
                    width: 100%;
                    padding: 0;
                    display: block;
                    height: 26px;
                    position: relative;
                    top: 10px;
                  }
                  .td-trending-now-display-area .td_module_trending_now .entry-title {
                    font-size: 14px;
                    line-height: 16px;
                  }
                  .td-trending-now-post {
                    width: 100%;
                    padding-right: 0;
                  }
                }
</style><script>var block_tdi_7 = new tdBlock();
block_tdi_7.id = "tdi_7";
block_tdi_7.atts = '{"header_color":"#ef3b74","tdc_css":"eyJhbGwiOnsiZGlzcGxheSI6IiJ9fQ==","block_type":"td_block_trending_now","custom_title":"","title_padding":"","navigation":"","timer":3,"style":"","separator":"","mt_tl":"","mt_title_tag":"","post_ids":"","category_id":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","header_text_color":"","articles_color":"","next_prev_color":"","next_prev_border_color":"","next_prev_hover_color":"","f_title_font_header":"","f_title_font_title":"Block title","f_title_font_settings":"","f_title_font_family":"","f_title_font_size":"","f_title_font_line_height":"","f_title_font_style":"","f_title_font_weight":"","f_title_font_transform":"","f_title_font_spacing":"","f_title_":"","f_article_font_title":"Articles title","f_article_font_settings":"","f_article_font_family":"","f_article_font_size":"","f_article_font_line_height":"","f_article_font_style":"","f_article_font_weight":"","f_article_font_transform":"","f_article_font_spacing":"","f_article_":"","css":"","block_template_id":"","td_column_number":3,"ajax_pagination_infinite_stop":"","td_ajax_preloading":"","td_ajax_filter_type":"","td_filter_default_txt":"","td_ajax_filter_ids":"","color_preset":"","ajax_pagination":"","border_top":"","class":"tdi_7","tdc_css_class":"tdi_7","tdc_css_class_style":"tdi_7_rand_style"}';
block_tdi_7.td_column_number = "3";
block_tdi_7.block_type = "td_block_trending_now";
block_tdi_7.post_count = "5";
block_tdi_7.found_posts = "3873";
block_tdi_7.header_color = "#ef3b74";
block_tdi_7.ajax_pagination_infinite_stop = "";
block_tdi_7.max_num_pages = "775";
tdBlocksArray.push(block_tdi_7);
</script><div class="td_block_inner"><div class="td-trending-now-wrapper" id="tdi_7" data-start="" data-timer=""><div class="td-trending-now-title">Trending Now</div><div class="td-trending-now-display-area">
        <div class="td_module_trending_now td-trending-now-post-0 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/anay-naam-ka-arth-matlab-aur-rashifal" rel="bookmark" title="अनय नाम का अर्थ, मतलब और राशिफल &#8211; Anay  Name Meaning in Hindi">अनय नाम का अर्थ, मतलब और राशिफल &#8211; Anay  Name Meaning in Hindi</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-1 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/neela-siyaar-ki-kahani/" rel="bookmark" title="नीला सियार की कहानी | The Blue Jackal Story In Hindi">नीला सियार की कहानी | The Blue Jackal Story In Hindi</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-2 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/bandar-aur-khargosh-ki-kahani/" rel="bookmark" title="बंदर और खरगोश की कहानी | Monkey And Rabbit Story In Hindi">बंदर और खरगोश की कहानी | Monkey And Rabbit Story In Hindi</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-3 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/-articles/alibaba-aur-chalis-chor-ki-kahani/" rel="bookmark" title="अलीबाबा और चालिस चोर की कहानी | Alibaba And The Forty Thieves Story">अलीबाबा और चालिस चोर की कहानी | Alibaba And The Forty Thieves Story</a></h3>
        </div>

        
        <div class="td_module_trending_now td-trending-now-post-4 td-trending-now-post">

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/essay-on-swami-vivekananda-in-hindi/" rel="bookmark" title="स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)">स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)</a></h3>
        </div>

        </div><div class="td-next-prev-wrap"><a href="#"
                                  class="td_ajax-prev-pagex td-trending-now-nav-left" 
                                  aria-label="prev" 
                                  data-block-id="tdi_7"
                                  data-moving="left"
                                  data-control-start=""><i class="td-icon-menu-left"></i></a><a href="#"
                                  class="td_ajax-next-pagex td-trending-now-nav-right" 
                                  aria-label="next"
                                  data-block-id="tdi_7"
                                  data-moving="right"
                                  data-control-start=""><i class="td-icon-menu-right"></i></a></div></div></div></div><div class="td_block_wrap td_block_big_grid_3 tdi_8 td-grid-style-1 td-hover-1 td-big-grids td-pb-border-top td_block_template_1"  data-td-block-uid="tdi_8" ><div id=tdi_8 class="td_block_inner"><div class="td-big-grid-wrapper">
        <div class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/pregnancy-mein-kele-ka-sevan-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%95%E0%A5%87%E0%A4%B2%E0%A5%87-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%A8/" rel="bookmark" class="td-image-wrap " title="गर्भावस्था के दौरान केले का सेवन" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAAHOAQMAAAD+DNJPAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAADVJREFUeNrtwQENAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICEA3q4AAGK1CNoAAAAAElFTkSuQmCC" alt="प्रेगनेंसी के दौरान केले का सेवन करना: स्वास्थ लाभ और सावधानियां" title="गर्भावस्था के दौरान केले का सेवन" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/03/213368830-H-534x462.jpg"  width="534" height="462" /></a></div>            <div class="td-meta-info-container">
                <div class="td-meta-align">
                    <div class="td-big-grid-meta">
                                                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/pregnancy-mein-kele-ka-sevan-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%95%E0%A5%87%E0%A4%B2%E0%A5%87-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%A8/" rel="bookmark" title="गर्भावस्था के दौरान केले का सेवन">गर्भावस्था के दौरान केले का सेवन</a></h3>                    </div>
                    <div class="td-module-meta-info">
                        <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/shreyasihindicontent/">श्रेयसी चाफेकर</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-12-12T16:53:33+05:30" >December 12, 2019</time></span>                    </div>
                </div>
            </div>

        </div>

        <div class="td-big-grid-scroll">
        <div class="td_module_mx11 td-animation-stack td-big-grid-post-1 td-big-grid-post td-medium-thumb">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/breastfeeding-ke-dauran-alcohol-ka-sevan-%e0%a4%ac%e0%a5%8d%e0%a4%b0%e0%a5%87%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a4%ab%e0%a5%80%e0%a4%a1%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%95%e0%a5%87-%e0%a4%a6%e0%a5%8c%e0%a4%b0%e0%a4%be%e0%a4%a8-%e0%a4%85%e0%a4%b2%e0%a5%8d%e0%a4%95%e0%a5%8b%e0%a4%b9%e0%a4%b2-%e0%a4%95%e0%a4%be-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%a8/" rel="bookmark" class="td-image-wrap " title="ब्रेस्टफीडिंग के दौरान अल्कोहल का सेवन" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhUAAAEFAQMAAABuFIc7AAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAACdJREFUeNrtwQENAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAIORFVAABqJvmiQAAAABJRU5ErkJggg==" alt="ब्रेस्टफीडिंग के दौरान अल्कोहल का सेवन" title="ब्रेस्टफीडिंग के दौरान अल्कोहल का सेवन" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2017/11/528384532-H-533x261.jpg"  width="533" height="261" /></a></div>            <div class="td-meta-info-container">
                <div class="td-meta-align">
                    <div class="td-big-grid-meta">
                                                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/breastfeeding-ke-dauran-alcohol-ka-sevan-%e0%a4%ac%e0%a5%8d%e0%a4%b0%e0%a5%87%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a4%ab%e0%a5%80%e0%a4%a1%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%95%e0%a5%87-%e0%a4%a6%e0%a5%8c%e0%a4%b0%e0%a4%be%e0%a4%a8-%e0%a4%85%e0%a4%b2%e0%a5%8d%e0%a4%95%e0%a5%8b%e0%a4%b9%e0%a4%b2-%e0%a4%95%e0%a4%be-%e0%a4%b8%e0%a5%87%e0%a4%b5%e0%a4%a8/" rel="bookmark" title="ब्रेस्टफीडिंग के दौरान अल्कोहल का सेवन">ब्रेस्टफीडिंग के दौरान अल्कोहल का सेवन</a></h3>                    </div>
                </div>
            </div>

        </div>

        
        <div class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-small-thumb">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/khane-mein-nakhrile-baccho-se-kaise-nipate-%e0%a4%96%e0%a4%be%e0%a4%a8%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%a8%e0%a4%96%e0%a4%b0%e0%a5%80%e0%a4%b2%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%b8%e0%a5%87-%e0%a4%95%e0%a5%88%e0%a4%b8%e0%a5%87-%e0%a4%a8%e0%a4%bf%e0%a4%aa%e0%a4%9f%e0%a5%87%e0%a4%82/" rel="bookmark" class="td-image-wrap " title="खाने में नखरीले बच्चों से कैसे निपटें" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAADGAQMAAAD7b+fyAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwQENAAAAwiD7p7bHBwwAAAAAAADSDhsSAAGoWlW2AAAAAElFTkSuQmCC" alt="खाने में नखरीले बच्चों से कैसे निपटें" title="खाने में नखरीले बच्चों से कैसे निपटें" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/03/492304303-H-265x198.jpg"  width="265" height="198" /></a></div>            <div class="td-meta-info-container">
                <div class="td-meta-align">
                    <div class="td-big-grid-meta">
                                                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/khane-mein-nakhrile-baccho-se-kaise-nipate-%e0%a4%96%e0%a4%be%e0%a4%a8%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%a8%e0%a4%96%e0%a4%b0%e0%a5%80%e0%a4%b2%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%b8%e0%a5%87-%e0%a4%95%e0%a5%88%e0%a4%b8%e0%a5%87-%e0%a4%a8%e0%a4%bf%e0%a4%aa%e0%a4%9f%e0%a5%87%e0%a4%82/" rel="bookmark" title="खाने में नखरीले बच्चों से कैसे निपटें">खाने में नखरीले बच्चों से कैसे निपटें</a></h3>                    </div>
                </div>
            </div>

        </div>


        
        <div class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-small-thumb">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/17-saptaah-ka-baccha-17-%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B9-%E0%A4%95%E0%A4%BE-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%BE/" rel="bookmark" class="td-image-wrap " title="17 सप्ताह का बच्चा &#8211; विकास, पड़ाव और देखभाल" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAADGAQMAAAD7b+fyAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwQENAAAAwiD7p7bHBwwAAAAAAADSDhsSAAGoWlW2AAAAAElFTkSuQmCC" alt="17 सप्ताह का बच्चा - विकास, पड़ाव और देखभाल" title="17 सप्ताह का बच्चा &#8211; विकास, पड़ाव और देखभाल" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/06/500684509_H-265x198.jpg"  width="265" height="198" /></a></div>            <div class="td-meta-info-container">
                <div class="td-meta-align">
                    <div class="td-big-grid-meta">
                                                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/17-saptaah-ka-baccha-17-%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B9-%E0%A4%95%E0%A4%BE-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A4%BE/" rel="bookmark" title="17 सप्ताह का बच्चा &#8211; विकास, पड़ाव और देखभाल">17 सप्ताह का बच्चा &#8211; विकास, पड़ाव और देखभाल</a></h3>                    </div>
                </div>
            </div>

        </div>


        </div></div><div class="clearfix"></div></div></div> <!-- ./block --></div></div></div></div><div id="tdi_9" class="tdc-row"><div class="vc_row tdi_10 td-ss-row wpb_row td-pb-row" >
<style scoped>

/* custom css */
.tdi_10,
                .tdi_10 .tdc-columns{
                    min-height: 0;
                }.tdi_10,
				.tdi_10 .tdc-columns{
				    display: block;
				}.tdi_10 .tdc-columns{
				    width: 100%;
				}
</style><div class="vc_column tdi_12  wpb_column vc_column_container tdc-column td-pb-span8">
<style scoped>

/* custom css */
.tdi_12{
                    vertical-align: baseline;
                }.tdi_12 > .wpb_wrapper,
				.tdi_12 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_12 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_12 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_12 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"><div class="td_block_wrap td_block_1 tdi_13 td_with_ajax_pagination td-pb-border-top td_block_template_1 td-column-2"  data-td-block-uid="tdi_13" >
<style>
.td-theme-wrap .tdi_13 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_13 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_13 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_13 .block-title > *,
            .td-theme-wrap .tdi_13 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_13 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_13 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_13 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_13 .td_quote_on_blocks,
            .td-theme-wrap .tdi_13 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_13 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_13 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_13 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_13 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_13 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_13 .td-read-more a,
            .td-theme-wrap .tdi_13 .td-weather-information:before,
            .td-theme-wrap .tdi_13 .td-weather-week:before,
            .td-theme-wrap .tdi_13 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_13 .td-post-category,
            .td-theme-wrap .tdi_13 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_13 = new tdBlock();
block_tdi_13.id = "tdi_13";
block_tdi_13.atts = '{"limit":"5","custom_title":"\u0905\u0935\u0936\u094d\u092f \u092a\u095d\u0947\u0902 ","header_color":"#ef3b74","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","ajax_pagination":"next_prev","sort":"random_posts","category_ids":"","block_template_id":"","block_type":"td_block_1","separator":"","custom_url":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_id":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_13","tdc_css_class":"tdi_13","tdc_css_class_style":"tdi_13_rand_style"}';
block_tdi_13.td_column_number = "2";
block_tdi_13.block_type = "td_block_1";
block_tdi_13.post_count = "5";
block_tdi_13.found_posts = "3869";
block_tdi_13.header_color = "#ef3b74";
block_tdi_13.ajax_pagination_infinite_stop = "";
block_tdi_13.max_num_pages = "774";
tdBlocksArray.push(block_tdi_13);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">अवश्य पढ़ें </span></h4></div><div id=tdi_13 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/breastfeeding-ke-dauran-kitni-calories-kam-hoti-hai-%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A4%BF%E0%A4%A4%E0%A4%A8%E0%A5%80-%E0%A4%95%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%AE-%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%80-%E0%A4%B9%E0%A5%88/" rel="bookmark" class="td-image-wrap " title="ब्रेस्टफीडिंग के दौरान कितनी कैलोरी कम होती है" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAADrAQMAAAArGX0KAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAACBJREFUaN7twTEBAAAAwiD7pzbEXmAAAAAAAAAAAACQHSaOAAGSp1GBAAAAAElFTkSuQmCC" alt="ब्रेस्टफीडिंग के दौरान कितनी कैलोरी कम होती है" title="ब्रेस्टफीडिंग के दौरान कितनी कैलोरी कम होती है" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/08/1066824548-H-324x235.jpg"  width="324" height="235" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b8%e0%a5%8d%e0%a4%a4%e0%a4%a8%e0%a4%aa%e0%a4%be%e0%a4%a8/" class="td-post-category">स्तनपान</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/breastfeeding-ke-dauran-kitni-calories-kam-hoti-hai-%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A4%BF%E0%A4%A4%E0%A4%A8%E0%A5%80-%E0%A4%95%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%AE-%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%80-%E0%A4%B9%E0%A5%88/" rel="bookmark" title="ब्रेस्टफीडिंग के दौरान कितनी कैलोरी कम होती है">ब्रेस्टफीडिंग के दौरान कितनी कैलोरी कम होती है</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/surakshahindicontent/">सुरक्षा कटियार</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-04-02T00:00:00+05:30" >April 2, 2021</time></span>                            </div>

            <div class="td-excerpt">
                बच्चे को शुरुआती 6 महीने तक पूरा न्यूट्रिशन माँ के दूध से मिलता है और ये आवश्यक विटामिन्स, फैट्स और मिनरल्स भी देता है...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/sote-samay-bacche-ki-ankhe-khuli-rehna-%E0%A4%B8%E0%A5%8B%E0%A4%A4%E0%A5%87-%E0%A4%B8%E0%A4%AE%E0%A4%AF-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%86%E0%A4%81%E0%A4%96%E0%A5%87%E0%A4%82-%E0%A4%96%E0%A5%81%E0%A4%B2%E0%A5%80-%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A4%BE/" rel="bookmark" class="td-image-wrap " title="सोते समय बच्चे की आँखें खुली रहना &#8211; क्या यह चिंताजनक है?" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="सोते समय बच्चे की आँखें खुली रहना - क्या यह चिंताजनक है?" title="सोते समय बच्चे की आँखें खुली रहना &#8211; क्या यह चिंताजनक है?" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/08/781203172-H-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/sote-samay-bacche-ki-ankhe-khuli-rehna-%E0%A4%B8%E0%A5%8B%E0%A4%A4%E0%A5%87-%E0%A4%B8%E0%A4%AE%E0%A4%AF-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%86%E0%A4%81%E0%A4%96%E0%A5%87%E0%A4%82-%E0%A4%96%E0%A5%81%E0%A4%B2%E0%A5%80-%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A4%BE/" rel="bookmark" title="सोते समय बच्चे की आँखें खुली रहना &#8211; क्या यह चिंताजनक है?">सोते समय बच्चे की आँखें खुली रहना &#8211; क्या यह चिंताजनक...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-03-26T00:00:00+05:30" >March 26, 2021</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/fathers-day-par-40-behtreen-quotes-aur-wishes-%E0%A4%AB%E0%A4%BE%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B8-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-40-%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8/" rel="bookmark" class="td-image-wrap " title="116 सबसे नए फादर्स डे पर पिता के कोट्स और विशेस" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="फादर्स डे पर बेहतरीन कोट्स और विशेस" title="116 सबसे नए फादर्स डे पर पिता के कोट्स और विशेस" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2021/06/06224618/%E0%A4%AB%E0%A4%BE%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B8-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/fathers-day-par-40-behtreen-quotes-aur-wishes-%E0%A4%AB%E0%A4%BE%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B8-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-40-%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8/" rel="bookmark" title="116 सबसे नए फादर्स डे पर पिता के कोट्स और विशेस">116 सबसे नए फादर्स डे पर पिता के कोट्स और विशेस</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-06-12T00:00:00+05:30" >June 12, 2023</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-mahabharat-ki-vishesh-aur-naitik-kahaniyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4-%E0%A4%95%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7-%E0%A4%94%E0%A4%B0-%E0%A4%A8%E0%A5%88%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए महाभारत से प्रेरित कहानियां" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="बच्चों के लिए महाभारत की नैतिक कहानियां और शिक्षाएं" title="बच्चों के लिए महाभारत से प्रेरित कहानियां" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/12/27154753/1137709367-H-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-mahabharat-ki-vishesh-aur-naitik-kahaniyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4-%E0%A4%95%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7-%E0%A4%94%E0%A4%B0-%E0%A4%A8%E0%A5%88%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" title="बच्चों के लिए महाभारत से प्रेरित कहानियां">बच्चों के लिए महाभारत से प्रेरित कहानियां</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-08-06T00:00:00+05:30" >August 6, 2020</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/toddlers-ke-liye-20-majedar-aur-interactive-learning-activities-%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0%e0%a5%8d%e0%a4%b8-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-20-%e0%a4%ae%e0%a4%9c%e0%a5%87%e0%a4%a6%e0%a4%be%e0%a4%b0-%e0%a4%94%e0%a4%b0-%e0%a4%87%e0%a4%82%e0%a4%9f%e0%a4%b0%e0%a4%8f%e0%a4%95%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b5-%e0%a4%b2%e0%a4%b0%e0%a5%8d%e0%a4%a8%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%8f%e0%a4%95%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%9f%e0%a5%80%e0%a4%9c/" rel="bookmark" class="td-image-wrap " title="टॉडलर्स के लिए 20 मजेदार और इंटरएक्टिव लर्निंग एक्टिविटीज" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="टॉडलर्स के लिए 20 मजेदार और इंटरएक्टिव लर्निंग एक्टिविटीज" title="टॉडलर्स के लिए 20 मजेदार और इंटरएक्टिव लर्निंग एक्टिविटीज" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/01/50844475-H-1-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/toddlers-ke-liye-20-majedar-aur-interactive-learning-activities-%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0%e0%a5%8d%e0%a4%b8-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-20-%e0%a4%ae%e0%a4%9c%e0%a5%87%e0%a4%a6%e0%a4%be%e0%a4%b0-%e0%a4%94%e0%a4%b0-%e0%a4%87%e0%a4%82%e0%a4%9f%e0%a4%b0%e0%a4%8f%e0%a4%95%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b5-%e0%a4%b2%e0%a4%b0%e0%a5%8d%e0%a4%a8%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%8f%e0%a4%95%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%9f%e0%a5%80%e0%a4%9c/" rel="bookmark" title="टॉडलर्स के लिए 20 मजेदार और इंटरएक्टिव लर्निंग एक्टिविटीज">टॉडलर्स के लिए 20 मजेदार और इंटरएक्टिव लर्निंग एक्टिविटीज</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-12-04T00:00:00+05:30" >December 4, 2021</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div><div class="td-next-prev-wrap"><a href="#" class="td-ajax-prev-page ajax-page-disabled" aria-label="prev-page" id="prev-page-tdi_13" data-td_block_id="tdi_13"><i class="td-next-prev-icon td-icon-font td-icon-menu-left"></i></a><a href="#"  class="td-ajax-next-page" aria-label="next-page" id="next-page-tdi_13" data-td_block_id="tdi_13"><i class="td-next-prev-icon td-icon-font td-icon-menu-right"></i></a></div></div> <!-- ./block --><div class="td_block_wrap td_block_2 tdi_14 td_with_ajax_pagination td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-2 td_block_padding"  data-td-block-uid="tdi_14" >
<style>
.td-theme-wrap .tdi_14 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_14 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_14 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_14 .block-title > *,
            .td-theme-wrap .tdi_14 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_14 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_14 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_14 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_14 .td_quote_on_blocks,
            .td-theme-wrap .tdi_14 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_14 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_14 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_14 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_14 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_14 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_14 .td-read-more a,
            .td-theme-wrap .tdi_14 .td-weather-information:before,
            .td-theme-wrap .tdi_14 .td-weather-week:before,
            .td-theme-wrap .tdi_14 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_14 .td-post-category,
            .td-theme-wrap .tdi_14 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_14 = new tdBlock();
block_tdi_14.id = "tdi_14";
block_tdi_14.atts = '{"category_id":"6","limit":"6","custom_title":"\u0917\u0930\u094d\u092d\u093e\u0927\u093e\u0928 ","header_color":"#ef3b74","td_ajax_filter_ids":"","td_filter_default_txt":"All","ajax_pagination":"next_prev","td_ajax_filter_type":"","td_ajax_preloading":"preload","sort":"random_posts","block_type":"td_block_2","separator":"","custom_url":"","block_template_id":"","m2_tl":"","m2_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m2f_title_font_header":"","m2f_title_font_title":"Article title","m2f_title_font_settings":"","m2f_title_font_family":"","m2f_title_font_size":"","m2f_title_font_line_height":"","m2f_title_font_style":"","m2f_title_font_weight":"","m2f_title_font_transform":"","m2f_title_font_spacing":"","m2f_title_":"","m2f_cat_font_title":"Article category tag","m2f_cat_font_settings":"","m2f_cat_font_family":"","m2f_cat_font_size":"","m2f_cat_font_line_height":"","m2f_cat_font_style":"","m2f_cat_font_weight":"","m2f_cat_font_transform":"","m2f_cat_font_spacing":"","m2f_cat_":"","m2f_meta_font_title":"Article meta info","m2f_meta_font_settings":"","m2f_meta_font_family":"","m2f_meta_font_size":"","m2f_meta_font_line_height":"","m2f_meta_font_style":"","m2f_meta_font_weight":"","m2f_meta_font_transform":"","m2f_meta_font_spacing":"","m2f_meta_":"","m2f_ex_font_title":"Article excerpt","m2f_ex_font_settings":"","m2f_ex_font_family":"","m2f_ex_font_size":"","m2f_ex_font_line_height":"","m2f_ex_font_style":"","m2f_ex_font_weight":"","m2f_ex_font_transform":"","m2f_ex_font_spacing":"","m2f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_14","tdc_css_class":"tdi_14","tdc_css_class_style":"tdi_14_rand_style"}';
block_tdi_14.td_column_number = "2";
block_tdi_14.block_type = "td_block_2";
block_tdi_14.post_count = "6";
block_tdi_14.found_posts = "168";
block_tdi_14.header_color = "#ef3b74";
block_tdi_14.ajax_pagination_infinite_stop = "";
block_tdi_14.max_num_pages = "28";
tdBlocksArray.push(block_tdi_14);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">गर्भाधान </span></h4></div><div id=tdi_14 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_2 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/banjhpan-ke-upchar-ke-liye-IUI-prakriya-%E0%A4%AC%E0%A4%BE%E0%A4%81%E0%A4%9D%E0%A4%AA%E0%A4%A8-%E0%A4%95%E0%A5%87-%E0%A4%89%E0%A4%AA%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%86%E0%A4%88-%E0%A4%AF%E0%A5%82-%E0%A4%86%E0%A4%88-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE/" rel="bookmark" class="td-image-wrap " title="बाँझपन के उपचार के लिए अंतर्गर्भाशयी गर्भाधान (आई.यू.आई.) प्रक्रिया" ><img width="324" height="160" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/10/157768778-H-324x160.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/10/157768778-H-324x160.jpg 324w, https://cdn.cdnparenting.com/articles/2017/10/157768778-H-648x320.jpg 648w, https://cdn.cdnparenting.com/articles/2017/10/157768778-H-533x261.jpg 533w" sizes="(max-width: 324px) 100vw, 324px"  alt="बाँझपन के उपचार के लिए अंतर्गर्भाशयी गर्भाधान (आई.यू.आई.) प्रक्रिया" title="बाँझपन के उपचार के लिए अंतर्गर्भाशयी गर्भाधान (आई.यू.आई.) प्रक्रिया" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%ac%e0%a4%82%e0%a4%a7%e0%a5%8d%e0%a4%af%e0%a4%a4%e0%a4%be-%e0%a4%87%e0%a4%a8%e0%a4%ab%e0%a4%b0%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b2%e0%a4%bf%e0%a4%9f%e0%a5%80/" class="td-post-category">बंध्यता (इनफर्टिलिटी)</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/banjhpan-ke-upchar-ke-liye-IUI-prakriya-%E0%A4%AC%E0%A4%BE%E0%A4%81%E0%A4%9D%E0%A4%AA%E0%A4%A8-%E0%A4%95%E0%A5%87-%E0%A4%89%E0%A4%AA%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%86%E0%A4%88-%E0%A4%AF%E0%A5%82-%E0%A4%86%E0%A4%88-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE/" rel="bookmark" title="बाँझपन के उपचार के लिए अंतर्गर्भाशयी गर्भाधान (आई.यू.आई.) प्रक्रिया">बाँझपन के उपचार के लिए अंतर्गर्भाशयी गर्भाधान (आई.यू.आई.) प्रक्रिया</a></h3>

            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-01T05:30:00+05:30" >July 1, 2019</time></span>                            </div>


            <div class="td-excerpt">
                आपने कृत्रिम गर्भाधान के बारे में सुना होगा और आप इसको आधुनिक तकनीक समझ रहे होंगे, लेकिन क्या आप जानते हैं कि यह तकनीक...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_2 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/luteal-charan-iska-pregnancy-se-kya-sambandh-hai-%e0%a4%b2%e0%a5%8d%e0%a4%af%e0%a5%82%e0%a4%9f%e0%a4%b2-%e0%a4%9a%e0%a4%b0%e0%a4%a3-%e0%a4%87%e0%a4%b8%e0%a4%95%e0%a4%be-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%87%e0%a4%97%e0%a4%a8%e0%a5%87%e0%a4%82%e0%a4%b8%e0%a5%80-%e0%a4%b8%e0%a5%87-%e0%a4%95%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%b8%e0%a4%82%e0%a4%ac%e0%a4%82%e0%a4%a7-%e0%a4%b9%e0%a5%88/" rel="bookmark" class="td-image-wrap " title="ल्यूटल चरण &#8211; इसका गर्भावस्था से क्या संबंध है" ><img width="324" height="160" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/05/611675405-H-324x160.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/05/611675405-H-324x160.jpg 324w, https://cdn.cdnparenting.com/articles/2018/05/611675405-H-533x261.jpg 533w" sizes="(max-width: 324px) 100vw, 324px"  alt="ल्यूटल चरण - इसका गर्भावस्था से क्या संबंध है" title="ल्यूटल चरण &#8211; इसका गर्भावस्था से क्या संबंध है" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%95%e0%a5%80-%e0%a4%af%e0%a5%8b%e0%a4%9c%e0%a4%a8%e0%a4%be-%e0%a4%b5-%e0%a4%a4%e0%a5%88%e0%a4%af%e0%a4%be%e0%a4%b0/" class="td-post-category">गर्भधारण की योजना व तैयारी</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/luteal-charan-iska-pregnancy-se-kya-sambandh-hai-%e0%a4%b2%e0%a5%8d%e0%a4%af%e0%a5%82%e0%a4%9f%e0%a4%b2-%e0%a4%9a%e0%a4%b0%e0%a4%a3-%e0%a4%87%e0%a4%b8%e0%a4%95%e0%a4%be-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%87%e0%a4%97%e0%a4%a8%e0%a5%87%e0%a4%82%e0%a4%b8%e0%a5%80-%e0%a4%b8%e0%a5%87-%e0%a4%95%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%b8%e0%a4%82%e0%a4%ac%e0%a4%82%e0%a4%a7-%e0%a4%b9%e0%a5%88/" rel="bookmark" title="ल्यूटल चरण &#8211; इसका गर्भावस्था से क्या संबंध है">ल्यूटल चरण &#8211; इसका गर्भावस्था से क्या संबंध है</a></h3>

            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-02-19T00:00:00+05:30" >February 19, 2022</time></span>                            </div>


            <div class="td-excerpt">
                पीरियड साइकिल के तीन चरण होते हैं, जिनका नाम है ओवुलेटरी, ल्यूटल और फॉलिक्युलर है। पीरियड साइकिल के हर चरण का अपना अलग महत्व...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/toothpaste-se-ghar-par-pregnancy-test-tarika-aur-sateekata-%e0%a4%9f%e0%a5%82%e0%a4%a5%e0%a4%aa%e0%a5%87%e0%a4%b8%e0%a5%8d%e0%a4%9f-%e0%a4%b8%e0%a5%87-%e0%a4%98%e0%a4%b0-%e0%a4%aa%e0%a4%b0-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%87%e0%a4%97%e0%a4%a8%e0%a5%87%e0%a4%82%e0%a4%b8%e0%a5%80-%e0%a4%9f%e0%a5%87%e0%a4%b8%e0%a5%8d%e0%a4%9f-%e0%a4%a4%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a4%be-%e0%a4%94%e0%a4%b0-%e0%a4%b8%e0%a4%9f%e0%a5%80%e0%a4%95%e0%a4%a4%e0%a4%be/" rel="bookmark" class="td-image-wrap " title="टूथपेस्ट से घर पर प्रेगनेंसी टेस्ट &#8211; तरीका और सटीकता" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/04/365930975-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/04/365930975-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/04/365930975-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="टूथपेस्ट से घर पर प्रेगनेंसी टेस्ट - तरीका और सटीकता" title="टूथपेस्ट से घर पर प्रेगनेंसी टेस्ट &#8211; तरीका और सटीकता" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/toothpaste-se-ghar-par-pregnancy-test-tarika-aur-sateekata-%e0%a4%9f%e0%a5%82%e0%a4%a5%e0%a4%aa%e0%a5%87%e0%a4%b8%e0%a5%8d%e0%a4%9f-%e0%a4%b8%e0%a5%87-%e0%a4%98%e0%a4%b0-%e0%a4%aa%e0%a4%b0-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%87%e0%a4%97%e0%a4%a8%e0%a5%87%e0%a4%82%e0%a4%b8%e0%a5%80-%e0%a4%9f%e0%a5%87%e0%a4%b8%e0%a5%8d%e0%a4%9f-%e0%a4%a4%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a4%be-%e0%a4%94%e0%a4%b0-%e0%a4%b8%e0%a4%9f%e0%a5%80%e0%a4%95%e0%a4%a4%e0%a4%be/" rel="bookmark" title="टूथपेस्ट से घर पर प्रेगनेंसी टेस्ट &#8211; तरीका और सटीकता">टूथपेस्ट से घर पर प्रेगनेंसी टेस्ट &#8211; तरीका और सटीकता</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-02-11T00:00:00+05:30" >February 11, 2022</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/egg-freezing-kya-hai-aur-isse-kaise-kiya-jata-hai-%E0%A4%8F%E0%A4%97-%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%9C%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%B9%E0%A5%88-%E0%A4%94%E0%A4%B0-%E0%A4%87%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88/" rel="bookmark" class="td-image-wrap " title="एग फ्रीजिंग: यह क्या है और इसे कैसे किया जाता है" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/01/214474510-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/01/214474510-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/01/214474510-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2018/01/214474510-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/01/214474510-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="एग फ्रीजिंग" title="एग फ्रीजिंग: यह क्या है और इसे कैसे किया जाता है" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/egg-freezing-kya-hai-aur-isse-kaise-kiya-jata-hai-%E0%A4%8F%E0%A4%97-%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%9C%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%B9%E0%A5%88-%E0%A4%94%E0%A4%B0-%E0%A4%87%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88/" rel="bookmark" title="एग फ्रीजिंग: यह क्या है और इसे कैसे किया जाता है">एग फ्रीजिंग: यह क्या है और इसे कैसे किया जाता है</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-08-04T00:00:00+05:30" >August 4, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baanjpan-upachaar-ke-liye-in-vitro-fertilization-%E0%A4%AC%E0%A4%BE%E0%A4%82%E0%A4%9D%E0%A4%AA%E0%A4%A8-%E0%A4%89%E0%A4%AA%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B5%E0%A4%BF%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%8B-%E0%A4%AB%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A5%80%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%9C%E0%A5%87%E0%A4%B6%E0%A4%A8/" rel="bookmark" class="td-image-wrap " title="बांझपन के उपचार के लिए इन विट्रो फर्टीलाइजेशन (आई.वी.एफ)" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/09/489475348-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/09/489475348-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/09/489475348-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/09/489475348-H-436x300.jpg 436w, https://cdn.cdnparenting.com/articles/2017/09/489475348-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="बांझपन के उपचार के लिए इन विट्रो फर्टीलाइजेशन (आई.वी.एफ)" title="बांझपन के उपचार के लिए इन विट्रो फर्टीलाइजेशन (आई.वी.एफ)" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baanjpan-upachaar-ke-liye-in-vitro-fertilization-%E0%A4%AC%E0%A4%BE%E0%A4%82%E0%A4%9D%E0%A4%AA%E0%A4%A8-%E0%A4%89%E0%A4%AA%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B5%E0%A4%BF%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%8B-%E0%A4%AB%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A5%80%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%9C%E0%A5%87%E0%A4%B6%E0%A4%A8/" rel="bookmark" title="बांझपन के उपचार के लिए इन विट्रो फर्टीलाइजेशन (आई.वी.एफ)">बांझपन के उपचार के लिए इन विट्रो फर्टीलाइजेशन (आई.वी.एफ)</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-01T05:30:00+05:30" >July 1, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/birth-control-patch-ka-upyog-%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AE-%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%A3-%E0%A4%AA%E0%A5%88%E0%A4%9A-%E0%A4%95%E0%A4%BE-%E0%A4%89%E0%A4%AA%E0%A4%AF%E0%A5%8B%E0%A4%97/" rel="bookmark" class="td-image-wrap " title="जन्म नियंत्रण पैच को समझें और उसके उपयोग जानें" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/11/256732030-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/11/256732030-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/11/256732030-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/11/256732030-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/11/256732030-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="जन्म नियंत्रण पैच को समझें और उसके उपयोग जानें" title="जन्म नियंत्रण पैच को समझें और उसके उपयोग जानें" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/birth-control-patch-ka-upyog-%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AE-%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%A3-%E0%A4%AA%E0%A5%88%E0%A4%9A-%E0%A4%95%E0%A4%BE-%E0%A4%89%E0%A4%AA%E0%A4%AF%E0%A5%8B%E0%A4%97/" rel="bookmark" title="जन्म नियंत्रण पैच को समझें और उसके उपयोग जानें">जन्म नियंत्रण पैच को समझें और उसके उपयोग जानें</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T05:30:00+05:30" >July 5, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div><div class="td-next-prev-wrap"><a href="#" class="td-ajax-prev-page ajax-page-disabled" aria-label="prev-page" id="prev-page-tdi_14" data-td_block_id="tdi_14"><i class="td-next-prev-icon td-icon-font td-icon-menu-left"></i></a><a href="#"  class="td-ajax-next-page" aria-label="next-page" id="next-page-tdi_14" data-td_block_id="tdi_14"><i class="td-next-prev-icon td-icon-font td-icon-menu-right"></i></a></div></div> <!-- ./block --><div class="td_block_wrap td_block_1 tdi_15 td_with_ajax_pagination td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-2"  data-td-block-uid="tdi_15" >
<style>
.td-theme-wrap .tdi_15 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_15 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_15 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_15 .block-title > *,
            .td-theme-wrap .tdi_15 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_15 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_15 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_15 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_15 .td_quote_on_blocks,
            .td-theme-wrap .tdi_15 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_15 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_15 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_15 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_15 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_15 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_15 .td-read-more a,
            .td-theme-wrap .tdi_15 .td-weather-information:before,
            .td-theme-wrap .tdi_15 .td-weather-week:before,
            .td-theme-wrap .tdi_15 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_15 .td-post-category,
            .td-theme-wrap .tdi_15 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_15 = new tdBlock();
block_tdi_15.id = "tdi_15";
block_tdi_15.atts = '{"category_id":"11","limit":"6","custom_title":"\u0917\u0930\u094d\u092d\u093e\u0935\u0938\u094d\u0925\u093e ","header_color":"#ef3b74","td_ajax_filter_ids":"","td_filter_default_txt":"All","ajax_pagination":"next_prev","td_ajax_filter_type":"","td_ajax_preloading":"preload","sort":"random_posts","block_type":"td_block_1","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_15","tdc_css_class":"tdi_15","tdc_css_class_style":"tdi_15_rand_style"}';
block_tdi_15.td_column_number = "2";
block_tdi_15.block_type = "td_block_1";
block_tdi_15.post_count = "6";
block_tdi_15.found_posts = "1181";
block_tdi_15.header_color = "#ef3b74";
block_tdi_15.ajax_pagination_infinite_stop = "";
block_tdi_15.max_num_pages = "197";
tdBlocksArray.push(block_tdi_15);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">गर्भावस्था </span></h4></div><div id=tdi_15 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/kya-pregnancy-ke-dauran-ultrasound-sonography-scans-surakshit-hai-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%A8-%E0%A4%85%E0%A4%B2%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B8%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%A1-%E0%A4%B8%E0%A5%8B%E0%A4%A8%E0%A5%8B%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AB%E0%A5%80-%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%88%E0%A4%A8-%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4-%E0%A4%B9%E0%A5%88/" rel="bookmark" class="td-image-wrap " title="क्या गर्भावस्था के दौरान अल्ट्रासाउंड (सोनोग्राफी) स्कैन सुरक्षित है?" ><img width="324" height="235" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/07/क्या-गर्भावस्था-के-दौरान-अल्ट्रासाउंड-सोनोग्राफी-स्कैन-सुरक्षित-है-324x235.jpg"   alt="क्या प्रेगनेंसी में किए जाने वाले अल्ट्रासाउंड (सोनोग्राफी) स्कैन सेफ होते हैं?" title="क्या गर्भावस्था के दौरान अल्ट्रासाउंड (सोनोग्राफी) स्कैन सुरक्षित है?" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%97%e0%a4%b0%e0%a5%8d%e0%a4%ad%e0%a4%be%e0%a4%b5%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%be/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a4%b5%e0%a4%aa%e0%a5%82%e0%a4%b0%e0%a5%8d%e0%a4%b5-%e0%a4%a6%e0%a5%87%e0%a4%96%e0%a4%ad%e0%a4%be%e0%a4%b2/" class="td-post-category">प्रसवपूर्व देखभाल</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/kya-pregnancy-ke-dauran-ultrasound-sonography-scans-surakshit-hai-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%A8-%E0%A4%85%E0%A4%B2%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B8%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%A1-%E0%A4%B8%E0%A5%8B%E0%A4%A8%E0%A5%8B%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AB%E0%A5%80-%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%88%E0%A4%A8-%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4-%E0%A4%B9%E0%A5%88/" rel="bookmark" title="क्या गर्भावस्था के दौरान अल्ट्रासाउंड (सोनोग्राफी) स्कैन सुरक्षित है?">क्या गर्भावस्था के दौरान अल्ट्रासाउंड (सोनोग्राफी) स्कैन सुरक्षित है?</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-10-01T00:00:00+05:30" >October 1, 2020</time></span>                            </div>

            <div class="td-excerpt">
                गर्भावस्था के दौरान विभिन्न कारणों से अल्ट्रासाउंड स्कैन किया जा सकता है। अल्ट्रासाउंड स्कैन की मदद से होने वाले कॉम्प्लिकेशन का पता लगाया जाता...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/kya-pregnancy-mein-mahilayein-raktdaan-ya-blood-donate-kar-sakti-hain-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%8F%E0%A4%82-%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%A6%E0%A4%BE%E0%A4%A8-%E0%A4%AF%E0%A4%BE-%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%A1-%E0%A4%A1%E0%A5%8B%E0%A4%A8%E0%A5%87%E0%A4%9F-%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80-%E0%A4%B9%E0%A5%88%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="क्या गर्भवती महिलाएं रक्तदान कर सकती हैं?" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/07/क्या-गर्भवती-महिलाएं-रक्तदान-कर-सकती-हैं-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/07/क्या-गर्भवती-महिलाएं-रक्तदान-कर-सकती-हैं-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/07/क्या-गर्भवती-महिलाएं-रक्तदान-कर-सकती-हैं-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="क्या प्रेग्नेंट महिलाएं रक्त दान (ब्लड डोनेट) कर सकती हैं" title="क्या गर्भवती महिलाएं रक्तदान कर सकती हैं?" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/kya-pregnancy-mein-mahilayein-raktdaan-ya-blood-donate-kar-sakti-hain-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%8F%E0%A4%82-%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%A6%E0%A4%BE%E0%A4%A8-%E0%A4%AF%E0%A4%BE-%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%A1-%E0%A4%A1%E0%A5%8B%E0%A4%A8%E0%A5%87%E0%A4%9F-%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80-%E0%A4%B9%E0%A5%88%E0%A4%82/" rel="bookmark" title="क्या गर्भवती महिलाएं रक्तदान कर सकती हैं?">क्या गर्भवती महिलाएं रक्तदान कर सकती हैं?</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-09-14T00:00:00+05:30" >September 14, 2020</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/miscarriage-ke-baad-jaldi-recover-hone-ki-exercise-%E0%A4%AE%E0%A4%BF%E0%A4%B8%E0%A4%95%E0%A5%88%E0%A4%B0%E0%A4%9C-%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%BE%E0%A4%A6-%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A4%B5%E0%A4%B0-%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%8F%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%9C/" rel="bookmark" class="td-image-wrap " title="मिसकैरज के बाद जल्दी रिकवर होने के लिए हल्के एक्सरसाइज" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/06/1024165147-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/06/1024165147-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/06/1024165147-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="मिसकैरज के बाद जल्दी रिकवर होने के लिए 6 आसान एक्सरसाइज" title="मिसकैरज के बाद जल्दी रिकवर होने के लिए हल्के एक्सरसाइज" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/miscarriage-ke-baad-jaldi-recover-hone-ki-exercise-%E0%A4%AE%E0%A4%BF%E0%A4%B8%E0%A4%95%E0%A5%88%E0%A4%B0%E0%A4%9C-%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%BE%E0%A4%A6-%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A4%B5%E0%A4%B0-%E0%A4%B9%E0%A5%8B%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%8F%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%9C/" rel="bookmark" title="मिसकैरज के बाद जल्दी रिकवर होने के लिए हल्के एक्सरसाइज">मिसकैरज के बाद जल्दी रिकवर होने के लिए हल्के एक्सरसाइज</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-07-20T00:00:00+05:30" >July 20, 2020</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/blighted-ovum-karan-lakshan-aur-upchar-%e0%a4%ac%e0%a5%8d%e0%a4%b2%e0%a4%be%e0%a4%87%e0%a4%9f%e0%a5%87%e0%a4%a1-%e0%a4%93%e0%a4%b5%e0%a4%ae-%e0%a4%95%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%b2%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%a3-%e0%a4%94%e0%a4%b0-%e0%a4%89%e0%a4%aa%e0%a4%9a%e0%a4%be%e0%a4%b0/" rel="bookmark" class="td-image-wrap " title="ब्लाइटेड ओवम: कारण, लक्षण और उपचार" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/02/589683482-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/02/589683482-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/02/589683482-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2018/02/589683482-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/02/589683482-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="ब्लाइटेड ओवम: कारण, लक्षण और उपचार" title="ब्लाइटेड ओवम: कारण, लक्षण और उपचार" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/blighted-ovum-karan-lakshan-aur-upchar-%e0%a4%ac%e0%a5%8d%e0%a4%b2%e0%a4%be%e0%a4%87%e0%a4%9f%e0%a5%87%e0%a4%a1-%e0%a4%93%e0%a4%b5%e0%a4%ae-%e0%a4%95%e0%a4%be%e0%a4%b0%e0%a4%a3-%e0%a4%b2%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%a3-%e0%a4%94%e0%a4%b0-%e0%a4%89%e0%a4%aa%e0%a4%9a%e0%a4%be%e0%a4%b0/" rel="bookmark" title="ब्लाइटेड ओवम: कारण, लक्षण और उपचार">ब्लाइटेड ओवम: कारण, लक्षण और उपचार</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-12-10T00:00:00+05:30" >December 10, 2021</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/pregnancy-mein-shatavari-ka-sevan-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B6%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%A8/" rel="bookmark" class="td-image-wrap " title="गर्भावस्था में शतावरी का सेवन" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/01/455279566-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/01/455279566-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/01/455279566-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2018/01/455279566-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/01/455279566-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="प्रेगनेंसी में शतावरी यानी ऐस्पैरागस का सेवन" title="गर्भावस्था में शतावरी का सेवन" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/pregnancy-mein-shatavari-ka-sevan-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B6%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%A8/" rel="bookmark" title="गर्भावस्था में शतावरी का सेवन">गर्भावस्था में शतावरी का सेवन</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-05-02T00:00:00+05:30" >May 2, 2020</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/kya-breastfeeding-ke-dauran-raktdaan-kiya-ja-sakta-hai-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%A8-%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%A6%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE-%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88/" rel="bookmark" class="td-image-wrap " title="क्या ब्रेस्टफीडिंग कराने के दौरान रक्तदान किया जा सकता है?" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/08/541600759-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/08/541600759-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/08/541600759-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="क्या ब्रेस्टफीडिंग कराने के दौरान रक्तदान किया जा सकता है?" title="क्या ब्रेस्टफीडिंग कराने के दौरान रक्तदान किया जा सकता है?" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/kya-breastfeeding-ke-dauran-raktdaan-kiya-ja-sakta-hai-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%AB%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%82%E0%A4%97-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A5%8C%E0%A4%B0%E0%A4%BE%E0%A4%A8-%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%A6%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE-%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A4%BE-%E0%A4%B9%E0%A5%88/" rel="bookmark" title="क्या ब्रेस्टफीडिंग कराने के दौरान रक्तदान किया जा सकता है?">क्या ब्रेस्टफीडिंग कराने के दौरान रक्तदान किया जा सकता है?</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-11-06T00:00:00+05:30" >November 6, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div><div class="td-next-prev-wrap"><a href="#" class="td-ajax-prev-page ajax-page-disabled" aria-label="prev-page" id="prev-page-tdi_15" data-td_block_id="tdi_15"><i class="td-next-prev-icon td-icon-font td-icon-menu-left"></i></a><a href="#"  class="td-ajax-next-page" aria-label="next-page" id="next-page-tdi_15" data-td_block_id="tdi_15"><i class="td-next-prev-icon td-icon-font td-icon-menu-right"></i></a></div></div> <!-- ./block --><div class="wpb_wrapper td_block_wrap vc_widget_sidebar tdi_18 " ></div><div class="td_block_wrap td_block_2 tdi_19 td_with_ajax_pagination td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-2 td_block_padding"  data-td-block-uid="tdi_19" >
<style>
.td-theme-wrap .tdi_19 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_19 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_19 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_19 .block-title > *,
            .td-theme-wrap .tdi_19 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_19 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_19 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_19 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_19 .td_quote_on_blocks,
            .td-theme-wrap .tdi_19 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_19 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_19 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_19 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_19 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_19 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_19 .td-read-more a,
            .td-theme-wrap .tdi_19 .td-weather-information:before,
            .td-theme-wrap .tdi_19 .td-weather-week:before,
            .td-theme-wrap .tdi_19 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_19 .td-post-category,
            .td-theme-wrap .tdi_19 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_19 = new tdBlock();
block_tdi_19.id = "tdi_19";
block_tdi_19.atts = '{"category_id":"12","limit":"6","custom_title":"\u0936\u093f\u0936\u0941 ","header_color":"#ef3b74","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","ajax_pagination":"next_prev","sort":"random_posts","td_ajax_preloading":"preload","block_type":"td_block_2","separator":"","custom_url":"","block_template_id":"","m2_tl":"","m2_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m2f_title_font_header":"","m2f_title_font_title":"Article title","m2f_title_font_settings":"","m2f_title_font_family":"","m2f_title_font_size":"","m2f_title_font_line_height":"","m2f_title_font_style":"","m2f_title_font_weight":"","m2f_title_font_transform":"","m2f_title_font_spacing":"","m2f_title_":"","m2f_cat_font_title":"Article category tag","m2f_cat_font_settings":"","m2f_cat_font_family":"","m2f_cat_font_size":"","m2f_cat_font_line_height":"","m2f_cat_font_style":"","m2f_cat_font_weight":"","m2f_cat_font_transform":"","m2f_cat_font_spacing":"","m2f_cat_":"","m2f_meta_font_title":"Article meta info","m2f_meta_font_settings":"","m2f_meta_font_family":"","m2f_meta_font_size":"","m2f_meta_font_line_height":"","m2f_meta_font_style":"","m2f_meta_font_weight":"","m2f_meta_font_transform":"","m2f_meta_font_spacing":"","m2f_meta_":"","m2f_ex_font_title":"Article excerpt","m2f_ex_font_settings":"","m2f_ex_font_family":"","m2f_ex_font_size":"","m2f_ex_font_line_height":"","m2f_ex_font_style":"","m2f_ex_font_weight":"","m2f_ex_font_transform":"","m2f_ex_font_spacing":"","m2f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_19","tdc_css_class":"tdi_19","tdc_css_class_style":"tdi_19_rand_style"}';
block_tdi_19.td_column_number = "2";
block_tdi_19.block_type = "td_block_2";
block_tdi_19.post_count = "6";
block_tdi_19.found_posts = "1772";
block_tdi_19.header_color = "#ef3b74";
block_tdi_19.ajax_pagination_infinite_stop = "";
block_tdi_19.max_num_pages = "296";
tdBlocksArray.push(block_tdi_19);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">शिशु </span></h4></div><div id=tdi_19 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_2 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ko-daliya-khilane-ke-fayde-recipes-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%A6%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A4%BE-%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%AB%E0%A4%BE%E0%A4%AF%E0%A4%A6%E0%A5%87-%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80%E0%A4%9C/" rel="bookmark" class="td-image-wrap " title="बच्चों को दलिया खिलाने के फायदे और रेसिपीज" ><img width="324" height="160" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/07/1133889533-H-324x160.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/07/1133889533-H-324x160.jpg 324w, https://cdn.cdnparenting.com/articles/2018/07/1133889533-H-533x261.jpg 533w" sizes="(max-width: 324px) 100vw, 324px"  alt="बच्चों को दलिया खिलाने के फायदे और रेसिपीज" title="बच्चों को दलिया खिलाने के फायदे और रेसिपीज" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/" class="td-post-category">आहार व पोषण</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ko-daliya-khilane-ke-fayde-recipes-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%A6%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A4%BE-%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%AB%E0%A4%BE%E0%A4%AF%E0%A4%A6%E0%A5%87-%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80%E0%A4%9C/" rel="bookmark" title="बच्चों को दलिया खिलाने के फायदे और रेसिपीज">बच्चों को दलिया खिलाने के फायदे और रेसिपीज</a></h3>

            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/shreyasihindicontent/">श्रेयसी चाफेकर</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-11-22T12:13:01+05:30" >November 22, 2019</time></span>                            </div>


            <div class="td-excerpt">
                बच्चों को ठोस आहार की शुरुआत में दलिया देना बहुत अच्छा रहता है। दलिया एक ऐसा आहार है जो न केवल पौष्टिक है बल्कि...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_2 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/kya-shishuo-ko-sone-ke-liye-takiya-ka-istemal-karna-chahiye-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%B8%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A4%E0%A4%95%E0%A4%BF%E0%A4%8F-%E0%A4%95%E0%A4%BE-%E0%A4%87%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%E0%A4%AE%E0%A4%BE%E0%A4%B2-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE-%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F/" rel="bookmark" class="td-image-wrap " title="क्या शिशुओं को सुलाने के लिए तकिए का इस्तेमाल करना चाहिए?" ><img width="324" height="160" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/08/553043551-H-324x160.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/08/553043551-H-324x160.jpg 324w, https://cdn.cdnparenting.com/articles/2018/08/553043551-H-533x261.jpg 533w" sizes="(max-width: 324px) 100vw, 324px"  alt="क्या शिशुओं को सुलाने के लिए तकिए का इस्तेमाल करना चाहिए" title="क्या शिशुओं को सुलाने के लिए तकिए का इस्तेमाल करना चाहिए?" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%80-%e0%a4%a8%e0%a5%80%e0%a4%82%e0%a4%a6/" class="td-post-category">शिशु की नींद</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/kya-shishuo-ko-sone-ke-liye-takiya-ka-istemal-karna-chahiye-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%B8%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A4%E0%A4%95%E0%A4%BF%E0%A4%8F-%E0%A4%95%E0%A4%BE-%E0%A4%87%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%E0%A4%AE%E0%A4%BE%E0%A4%B2-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE-%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F/" rel="bookmark" title="क्या शिशुओं को सुलाने के लिए तकिए का इस्तेमाल करना चाहिए?">क्या शिशुओं को सुलाने के लिए तकिए का इस्तेमाल करना चाहिए?</a></h3>

            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-10T05:30:00+05:30" >July 10, 2019</time></span>                            </div>


            <div class="td-excerpt">
                जब आप खुद लेटते समय नरम और आरामदायक तकिए का इस्तेमाल करते हैं तब आपको लगता है कि तकिया शिशु को भी उसी प्रकार...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/neonatal-sepsis-%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%A8%E0%A5%87%E0%A4%9F%E0%A4%B2-%E0%A4%B8%E0%A5%87%E0%A4%AA%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%B8/" rel="bookmark" class="td-image-wrap " title="नियोनेटल सेप्सिस: कारण, लक्षण और इलाज" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/11/392251675-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/11/392251675-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/11/392251675-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/11/392251675-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/11/392251675-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="नियोनेटल सेप्सिस" title="नियोनेटल सेप्सिस: कारण, लक्षण और इलाज" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/neonatal-sepsis-%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%A8%E0%A5%87%E0%A4%9F%E0%A4%B2-%E0%A4%B8%E0%A5%87%E0%A4%AA%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%B8/" rel="bookmark" title="नियोनेटल सेप्सिस: कारण, लक्षण और इलाज">नियोनेटल सेप्सिस: कारण, लक्षण और इलाज</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-12-30T00:00:00+05:30" >December 30, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/permalink%3A-articles/bacche-breastfeeding-karne-se-kyon-mana-karte-hain-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87-%E0%A4%A6%E0%A5%82%E0%A4%A7-%E0%A4%AA%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A4%A8%E0%A4%BE-%E0%A4%95%E0%A4%B0%E0%A4%A4%E0%A5%87-%E0%A4%B9%E0%A5%88%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="बच्चे दूध पीने से मना क्यों करते हैं?" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/05/301455563_H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/05/301455563_H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/05/301455563_H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चे दूध पीने से मना क्यों करते हैं?" title="बच्चे दूध पीने से मना क्यों करते हैं?" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/permalink%3A-articles/bacche-breastfeeding-karne-se-kyon-mana-karte-hain-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87-%E0%A4%A6%E0%A5%82%E0%A4%A7-%E0%A4%AA%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A4%A8%E0%A4%BE-%E0%A4%95%E0%A4%B0%E0%A4%A4%E0%A5%87-%E0%A4%B9%E0%A5%88%E0%A4%82/" rel="bookmark" title="बच्चे दूध पीने से मना क्यों करते हैं?">बच्चे दूध पीने से मना क्यों करते हैं?</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-02-05T00:00:00+05:30" >February 5, 2021</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/j-aur-jh-akshar-se-ladkiyon-ke-naam-arth-sahit-%E0%A4%9C-%E0%A4%94%E0%A4%B0-%E0%A4%9D-%E0%A4%85%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%B0-%E0%A4%B8%E0%A5%87-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%B8%E0%A4%B9%E0%A4%BF%E0%A4%A4/" rel="bookmark" class="td-image-wrap " title="150 ‘ज’ और ‘झ’ अक्षर से लड़कियों के नाम अर्थ सहित" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2020/05/448629580-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2020/05/448629580-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2020/05/448629580-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="150 ‘ज’ और ‘झ’ अक्षर से लड़कियों के नाम अर्थ सहित" title="150 ‘ज’ और ‘झ’ अक्षर से लड़कियों के नाम अर्थ सहित" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/j-aur-jh-akshar-se-ladkiyon-ke-naam-arth-sahit-%E0%A4%9C-%E0%A4%94%E0%A4%B0-%E0%A4%9D-%E0%A4%85%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%B0-%E0%A4%B8%E0%A5%87-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%B8%E0%A4%B9%E0%A4%BF%E0%A4%A4/" rel="bookmark" title="150 ‘ज’ और ‘झ’ अक्षर से लड़कियों के नाम अर्थ सहित">150 ‘ज’ और ‘झ’ अक्षर से लड़कियों के नाम अर्थ सहित</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-05-26T15:53:01+05:30" >May 26, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-avocado-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%8F%E0%A4%B5%E0%A5%8B%E0%A4%95%E0%A4%BE%E0%A4%A1%E0%A5%8B/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए एवोकाडो &#8211; फायदे, रेसिपीज और अन्य जानकारियां" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/11/713132776-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/11/713132776-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/11/713132776-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/11/713132776-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/11/713132776-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों के लिए एवोकाडो" title="बच्चों के लिए एवोकाडो &#8211; फायदे, रेसिपीज और अन्य जानकारियां" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-avocado-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%8F%E0%A4%B5%E0%A5%8B%E0%A4%95%E0%A4%BE%E0%A4%A1%E0%A5%8B/" rel="bookmark" title="बच्चों के लिए एवोकाडो &#8211; फायदे, रेसिपीज और अन्य जानकारियां">बच्चों के लिए एवोकाडो &#8211; फायदे, रेसिपीज और अन्य जानकारियां</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-02-18T00:00:00+05:30" >February 18, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div><div class="td-next-prev-wrap"><a href="#" class="td-ajax-prev-page ajax-page-disabled" aria-label="prev-page" id="prev-page-tdi_19" data-td_block_id="tdi_19"><i class="td-next-prev-icon td-icon-font td-icon-menu-left"></i></a><a href="#"  class="td-ajax-next-page" aria-label="next-page" id="next-page-tdi_19" data-td_block_id="tdi_19"><i class="td-next-prev-icon td-icon-font td-icon-menu-right"></i></a></div></div> <!-- ./block --></div></div><div class="vc_column tdi_21  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>

/* custom css */
.tdi_21{
                    vertical-align: baseline;
                }.tdi_21 > .wpb_wrapper,
				.tdi_21 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_21 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_21 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_21 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"><div class="td_block_wrap td_block_1 tdi_22 td_with_ajax_pagination td-pb-border-top td_block_template_1 td-column-1"  data-td-block-uid="tdi_22" >
<style>
.td-theme-wrap .tdi_22 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_22 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_22 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_22 .block-title > *,
            .td-theme-wrap .tdi_22 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_22 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_22 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_22 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_22 .td_quote_on_blocks,
            .td-theme-wrap .tdi_22 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_22 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_22 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_22 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_22 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_22 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_22 .td-read-more a,
            .td-theme-wrap .tdi_22 .td-weather-information:before,
            .td-theme-wrap .tdi_22 .td-weather-week:before,
            .td-theme-wrap .tdi_22 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_22 .td-post-category,
            .td-theme-wrap .tdi_22 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_22 = new tdBlock();
block_tdi_22.id = "tdi_22";
block_tdi_22.atts = '{"category_id":"","limit":"4","custom_title":"\u091f\u094d\u0930\u0947\u0902\u0921\u093f\u0902\u0917 ","td_filter_default_txt":"All","ajax_pagination":"next_prev","sort":"random_posts","block_template_id":"","header_color":"#ef3b74","block_type":"td_block_1","separator":"","custom_url":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","class":"tdi_22","tdc_css_class":"tdi_22","tdc_css_class_style":"tdi_22_rand_style"}';
block_tdi_22.td_column_number = "1";
block_tdi_22.block_type = "td_block_1";
block_tdi_22.post_count = "4";
block_tdi_22.found_posts = "3846";
block_tdi_22.header_color = "#ef3b74";
block_tdi_22.ajax_pagination_infinite_stop = "";
block_tdi_22.max_num_pages = "962";
tdBlocksArray.push(block_tdi_22);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">ट्रेंडिंग </span></h4></div><div id=tdi_22 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/chhote-baccho-ke-liye-dairy-products-fayde-evam-anya-jankari-%E0%A4%9B%E0%A5%8B%E0%A4%9F%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A1%E0%A5%87%E0%A4%AF%E0%A4%B0%E0%A5%80-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%95%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%AB%E0%A4%BE%E0%A4%AF%E0%A4%A6%E0%A5%87-%E0%A4%8F%E0%A4%B5%E0%A4%82-%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%AF-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80/" rel="bookmark" class="td-image-wrap " title="शिशुओं के लिए डेयरी प्रोडक्ट्स &#8211; फायदे एवं अन्य जानकारी" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAADrAQMAAAArGX0KAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAACBJREFUaN7twTEBAAAAwiD7pzbEXmAAAAAAAAAAAACQHSaOAAGSp1GBAAAAAElFTkSuQmCC" alt="शिशुओं के लिए डेयरी प्रोडक्ट्स - फायदे एवं अन्य जानकारी" title="शिशुओं के लिए डेयरी प्रोडक्ट्स &#8211; फायदे एवं अन्य जानकारी" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/05/717635353-H-324x235.jpg"  width="324" height="235" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/" class="td-post-category">आहार व पोषण</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/chhote-baccho-ke-liye-dairy-products-fayde-evam-anya-jankari-%E0%A4%9B%E0%A5%8B%E0%A4%9F%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A1%E0%A5%87%E0%A4%AF%E0%A4%B0%E0%A5%80-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A1%E0%A4%95%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%AB%E0%A4%BE%E0%A4%AF%E0%A4%A6%E0%A5%87-%E0%A4%8F%E0%A4%B5%E0%A4%82-%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%AF-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80/" rel="bookmark" title="शिशुओं के लिए डेयरी प्रोडक्ट्स &#8211; फायदे एवं अन्य जानकारी">शिशुओं के लिए डेयरी प्रोडक्ट्स &#8211; फायदे एवं अन्य जानकारी</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/poojahindicontent/">पूजा ठाकुर</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-04-17T00:00:00+05:30" >April 17, 2021</time></span>                            </div>

            <div class="td-excerpt">
                आपके नन्हे शिशु को उसकी हड्डियों और दूसरे अंगों के स्वस्थ विकास के लिए विटामिन &#039;बी12&#039;, &#039;डी&#039; और कैल्शियम की जरूरत होती है। शुरुआती...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/%E0%A4%86%E0%A4%95%E0%A4%BE%E0%A4%B6-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%95%E0%A4%BE-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%AE%E0%A4%A4%E0%A4%B2%E0%A4%AC-%E0%A4%B0%E0%A4%BE%E0%A4%B6%E0%A4%BF%E0%A4%AB%E0%A4%B2-akash-name-meaning-in-hindi/" rel="bookmark" class="td-image-wrap " title="आकाश नाम का अर्थ, मतलब और राशिफल &#8211; Akash Name Meaning in Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="अभिनव नाम का अर्थ, मतलब और राशिफल - Abhinav Name Meaning in Hindi" title="आकाश नाम का अर्थ, मतलब और राशिफल &#8211; Akash Name Meaning in Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2022/11/30202724/122495920-1024x700-1-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/%E0%A4%86%E0%A4%95%E0%A4%BE%E0%A4%B6-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%95%E0%A4%BE-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%AE%E0%A4%A4%E0%A4%B2%E0%A4%AC-%E0%A4%B0%E0%A4%BE%E0%A4%B6%E0%A4%BF%E0%A4%AB%E0%A4%B2-akash-name-meaning-in-hindi/" rel="bookmark" title="आकाश नाम का अर्थ, मतलब और राशिफल &#8211; Akash Name Meaning in Hindi">आकाश नाम का अर्थ, मतलब और राशिफल &#8211; Akash Name Meaning...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-01-25T09:56:40+05:30" >January 25, 2023</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/%E0%A4%86%E0%A4%B6%E0%A4%BE-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%95%E0%A4%BE-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%AE%E0%A4%A4%E0%A4%B2%E0%A4%AC-%E0%A4%B0%E0%A4%BE%E0%A4%B6%E0%A4%BF%E0%A4%AB%E0%A4%B2-asha-name-meaning-in-hindi/" rel="bookmark" class="td-image-wrap " title="आशा नाम का अर्थ, मतलब और राशिफल &#8211; Asha Name Meaning in Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="सोनाली नाम का अर्थ, मतलब और राशिफल - Sonali Name Meaning in Hindi" title="आशा नाम का अर्थ, मतलब और राशिफल &#8211; Asha Name Meaning in Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2022/11/02205210/631827794-1024x700-1-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/%E0%A4%86%E0%A4%B6%E0%A4%BE-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%95%E0%A4%BE-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%AE%E0%A4%A4%E0%A4%B2%E0%A4%AC-%E0%A4%B0%E0%A4%BE%E0%A4%B6%E0%A4%BF%E0%A4%AB%E0%A4%B2-asha-name-meaning-in-hindi/" rel="bookmark" title="आशा नाम का अर्थ, मतलब और राशिफल &#8211; Asha Name Meaning in Hindi">आशा नाम का अर्थ, मतलब और राशिफल &#8211; Asha Name Meaning...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-02-22T15:27:58+05:30" >February 22, 2023</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/pregnancy-mein-pranayam-kaise-kare-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A3%E0%A4%BE%E0%A4%AF%E0%A4%BE%E0%A4%AE-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="गर्भावस्था के दौरान प्राणायाम कैसे करें?" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="प्रेगनेंसी में प्राणायाम करना" title="गर्भावस्था के दौरान प्राणायाम कैसे करें?" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2019/07/गर्भावस्था-के-दौरान-प्राणायाम-कैसे-करें-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/pregnancy-mein-pranayam-kaise-kare-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A3%E0%A4%BE%E0%A4%AF%E0%A4%BE%E0%A4%AE-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82/" rel="bookmark" title="गर्भावस्था के दौरान प्राणायाम कैसे करें?">गर्भावस्था के दौरान प्राणायाम कैसे करें?</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-09-19T00:00:00+05:30" >September 19, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div><div class="td-next-prev-wrap"><a href="#" class="td-ajax-prev-page ajax-page-disabled" aria-label="prev-page" id="prev-page-tdi_22" data-td_block_id="tdi_22"><i class="td-next-prev-icon td-icon-font td-icon-menu-left"></i></a><a href="#"  class="td-ajax-next-page" aria-label="next-page" id="next-page-tdi_22" data-td_block_id="tdi_22"><i class="td-next-prev-icon td-icon-font td-icon-menu-right"></i></a></div></div> <!-- ./block --><div class="td_block_wrap td_block_1 tdi_23 td-pb-border-top td_block_template_1 td-column-1"  data-td-block-uid="tdi_23" >
<style>
.td-theme-wrap .tdi_23 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_23 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_23 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_23 .block-title > *,
            .td-theme-wrap .tdi_23 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_23 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_23 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_23 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_23 .td_quote_on_blocks,
            .td-theme-wrap .tdi_23 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_23 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_23 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_23 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_23 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_23 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_23 .td-read-more a,
            .td-theme-wrap .tdi_23 .td-weather-information:before,
            .td-theme-wrap .tdi_23 .td-weather-week:before,
            .td-theme-wrap .tdi_23 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_23 .td-post-category,
            .td-theme-wrap .tdi_23 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_23 = new tdBlock();
block_tdi_23.id = "tdi_23";
block_tdi_23.atts = '{"category_id":"","limit":"4","custom_title":"\u092a\u0947\u0930\u0947\u0902\u091f\u093f\u0902\u0917 \u092a\u0930 \u0928\u092f\u093e","td_filter_default_txt":"All","sort":"","header_color":"#ef3b74","block_type":"td_block_1","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","class":"tdi_23","tdc_css_class":"tdi_23","tdc_css_class_style":"tdi_23_rand_style"}';
block_tdi_23.td_column_number = "1";
block_tdi_23.block_type = "td_block_1";
block_tdi_23.post_count = "4";
block_tdi_23.found_posts = "3842";
block_tdi_23.header_color = "#ef3b74";
block_tdi_23.ajax_pagination_infinite_stop = "";
block_tdi_23.max_num_pages = "961";
tdBlocksArray.push(block_tdi_23);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">पेरेंटिंग पर नया</span></h4></div><div id=tdi_23 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/anay-naam-ka-arth-matlab-aur-rashifal" rel="bookmark" class="td-image-wrap " title="अनय नाम का अर्थ, मतलब और राशिफल &#8211; Anay  Name Meaning in Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAADrAQMAAAArGX0KAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAACBJREFUaN7twTEBAAAAwiD7pzbEXmAAAAAAAAAAAACQHSaOAAGSp1GBAAAAAElFTkSuQmCC" alt="अनय नाम का अर्थ, मतलब और राशिफल - Anay Name Meaning in Hindi" title="अनय नाम का अर्थ, मतलब और राशिफल &#8211; Anay  Name Meaning in Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2023/12/21171647/1045909807-1024x700-1-324x235.jpg"  width="324" height="235" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%87-%e0%a4%a8%e0%a4%be%e0%a4%ae/" class="td-post-category">शिशु के नाम</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/anay-naam-ka-arth-matlab-aur-rashifal" rel="bookmark" title="अनय नाम का अर्थ, मतलब और राशिफल &#8211; Anay  Name Meaning in Hindi">अनय नाम का अर्थ, मतलब और राशिफल &#8211; Anay  Name...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/payalhindicontent/">पायल कश्यप</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:54+05:30" >February 8, 2024</time></span>                            </div>

            <div class="td-excerpt">
                कई पेरेंट्स को आपने देखा होगा कि उन्हें बड़े क्यूट और स्वीट से नाम पसंद आते हैं। इसलिए ये अपने बच्चों के नाम इसी...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/neela-siyaar-ki-kahani/" rel="bookmark" class="td-image-wrap " title="नीला सियार की कहानी | The Blue Jackal Story In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="नीला सियार की कहानी" title="नीला सियार की कहानी | The Blue Jackal Story In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/02/05160408/1307578453-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/neela-siyaar-ki-kahani/" rel="bookmark" title="नीला सियार की कहानी | The Blue Jackal Story In Hindi">नीला सियार की कहानी | The Blue Jackal Story In Hindi</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:52+05:30" >February 8, 2024</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/bandar-aur-khargosh-ki-kahani/" rel="bookmark" class="td-image-wrap " title="बंदर और खरगोश की कहानी | Monkey And Rabbit Story In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="बंदर और खरगोश की कहानी" title="बंदर और खरगोश की कहानी | Monkey And Rabbit Story In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/02/05145358/1895872996-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/bandar-aur-khargosh-ki-kahani/" rel="bookmark" title="बंदर और खरगोश की कहानी | Monkey And Rabbit Story In Hindi">बंदर और खरगोश की कहानी | Monkey And Rabbit Story In...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:45+05:30" >February 8, 2024</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/-articles/alibaba-aur-chalis-chor-ki-kahani/" rel="bookmark" class="td-image-wrap " title="अलीबाबा और चालिस चोर की कहानी | Alibaba And The Forty Thieves Story" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="अलीबाबा और चालिस चोर की कहानी" title="अलीबाबा और चालिस चोर की कहानी | Alibaba And The Forty Thieves Story" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/02/05144222/1335567191-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/-articles/alibaba-aur-chalis-chor-ki-kahani/" rel="bookmark" title="अलीबाबा और चालिस चोर की कहानी | Alibaba And The Forty Thieves Story">अलीबाबा और चालिस चोर की कहानी | Alibaba And The Forty...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:27+05:30" >February 8, 2024</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --></div></div></div></div><div id="tdi_24" class="tdc-row"><div class="vc_row tdi_25  wpb_row td-pb-row" >
<style scoped>

/* custom css */
.tdi_25,
                .tdi_25 .tdc-columns{
                    min-height: 0;
                }.tdi_25,
				.tdi_25 .tdc-columns{
				    display: block;
				}.tdi_25 .tdc-columns{
				    width: 100%;
				}
</style><div class="vc_column tdi_27  wpb_column vc_column_container tdc-column td-pb-span8">
<style scoped>

/* custom css */
.tdi_27{
                    vertical-align: baseline;
                }.tdi_27 > .wpb_wrapper,
				.tdi_27 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_27 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_27 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_27 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"><div class="td_block_wrap td_block_1 tdi_28 td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-2"  data-td-block-uid="tdi_28" >
<style>
.td-theme-wrap .tdi_28 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_28 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_28 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_28 .block-title > *,
            .td-theme-wrap .tdi_28 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_28 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_28 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_28 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_28 .td_quote_on_blocks,
            .td-theme-wrap .tdi_28 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_28 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_28 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_28 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_28 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_28 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_28 .td-read-more a,
            .td-theme-wrap .tdi_28 .td-weather-information:before,
            .td-theme-wrap .tdi_28 .td-weather-week:before,
            .td-theme-wrap .tdi_28 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_28 .td-post-category,
            .td-theme-wrap .tdi_28 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_28 = new tdBlock();
block_tdi_28.id = "tdi_28";
block_tdi_28.atts = '{"limit":"6","custom_title":"\u091f\u0949\u0921\u0932\u0930","td_filter_default_txt":"All","category_id":"2","sort":"random_posts","td_ajax_filter_type":"","td_ajax_preloading":"preload","header_color":"#ef3b74","block_type":"td_block_1","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_ids":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_28","tdc_css_class":"tdi_28","tdc_css_class_style":"tdi_28_rand_style"}';
block_tdi_28.td_column_number = "2";
block_tdi_28.block_type = "td_block_1";
block_tdi_28.post_count = "6";
block_tdi_28.found_posts = "213";
block_tdi_28.header_color = "#ef3b74";
block_tdi_28.ajax_pagination_infinite_stop = "";
block_tdi_28.max_num_pages = "36";
tdBlocksArray.push(block_tdi_28);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">टॉडलर</span></h4></div><div id=tdi_28 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/15-month-ke-shishu-ke-liye-aahar-sambandhi-sujhav-%E0%A5%A7%E0%A5%AB-%E0%A4%AE%E0%A4%B9%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%86%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80-%E0%A4%B8%E0%A5%81%E0%A4%9D%E0%A4%BE%E0%A4%B5/" rel="bookmark" class="td-image-wrap " title="15 महीने के बच्चे को क्या खिलाना चाहिए" ><img width="324" height="235" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/08/225952702-H-324x235.jpg"   alt="15 माह के बच्चे के लिए आहार संबंधी सुझाव" title="15 महीने के बच्चे को क्या खिलाना चाहिए" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0/%e0%a4%9f%e0%a5%89%e0%a4%a1%e0%a4%b2%e0%a4%b0-%e0%a4%86%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%aa%e0%a5%8b%e0%a4%b7%e0%a4%a3/" class="td-post-category">आहार व पोषण</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/15-month-ke-shishu-ke-liye-aahar-sambandhi-sujhav-%E0%A5%A7%E0%A5%AB-%E0%A4%AE%E0%A4%B9%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%86%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80-%E0%A4%B8%E0%A5%81%E0%A4%9D%E0%A4%BE%E0%A4%B5/" rel="bookmark" title="15 महीने के बच्चे को क्या खिलाना चाहिए">15 महीने के बच्चे को क्या खिलाना चाहिए</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-03-30T10:00:00+05:30" >March 30, 2023</time></span>                            </div>

            <div class="td-excerpt">
                जब आप खुद के खाने को लेकर एक खास डाइट प्लान तैयार करने पर खास ध्यान देती हैं तो यह बहुत स्वाभाविक है कि...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/22-month-ke-shishu-ke-liye-aahar-sambandhi-sujhav-%E0%A5%A8%E0%A5%A8-%E0%A4%AE%E0%A4%B9%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%86%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80-%E0%A4%B8%E0%A5%81%E0%A4%9D%E0%A4%BE%E0%A4%B5/" rel="bookmark" class="td-image-wrap " title="22 माह के बच्चे के लिए आहार संबंधी सुझाव" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/08/217775473-H-1-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/08/217775473-H-1-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/08/217775473-H-1-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="22-माह के बच्चे का भोजन - सुझाव, सारणी और व्यंजन" title="22 माह के बच्चे के लिए आहार संबंधी सुझाव" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/22-month-ke-shishu-ke-liye-aahar-sambandhi-sujhav-%E0%A5%A8%E0%A5%A8-%E0%A4%AE%E0%A4%B9%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%86%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80-%E0%A4%B8%E0%A5%81%E0%A4%9D%E0%A4%BE%E0%A4%B5/" rel="bookmark" title="22 माह के बच्चे के लिए आहार संबंधी सुझाव">22 माह के बच्चे के लिए आहार संबंधी सुझाव</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T05:30:00+05:30" >July 5, 2019</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-chehre-par-safed-patches-hone-ke-karan-aur-unhe-hatane-ke-gharelu-upay-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%9A%E0%A5%87%E0%A4%B9%E0%A4%B0%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%B8%E0%A4%AB%E0%A5%87%E0%A4%A6-%E0%A4%AA%E0%A5%88%E0%A4%9A%E0%A5%87%E0%A4%9C/" rel="bookmark" class="td-image-wrap " title="बच्चों के चेहरे पर सफेद पैचेज होने के कारण और उन्हें हटाने के घरेलू उपाय" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/01/16170633/767266711-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/01/16170633/767266711-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/01/16170633/767266711-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों के चेहरे पर सफेद पैचेज होने के कारण और उन्हें हटाने के घरेलू उपाय" title="बच्चों के चेहरे पर सफेद पैचेज होने के कारण और उन्हें हटाने के घरेलू उपाय" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-chehre-par-safed-patches-hone-ke-karan-aur-unhe-hatane-ke-gharelu-upay-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%9A%E0%A5%87%E0%A4%B9%E0%A4%B0%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%B8%E0%A4%AB%E0%A5%87%E0%A4%A6-%E0%A4%AA%E0%A5%88%E0%A4%9A%E0%A5%87%E0%A4%9C/" rel="bookmark" title="बच्चों के चेहरे पर सफेद पैचेज होने के कारण और उन्हें हटाने के घरेलू उपाय">बच्चों के चेहरे पर सफेद पैचेज होने के कारण और उन्हें...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-10-04T00:00:00+05:30" >October 4, 2019</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/child-insurance-har-jaruri-jankari-%E0%A4%9A%E0%A4%BE%E0%A4%87%E0%A4%B2%E0%A5%8D%E0%A4%A1-%E0%A4%87%E0%A4%82%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%B8-%E0%A4%B9%E0%A4%B0-%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80/" rel="bookmark" class="td-image-wrap " title="चाइल्ड इंश्योरेंस &#8211; हर जरूरी जानकारी" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H-768x527.jpg 768w, https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H-696x478.jpg 696w, https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H-612x420.jpg 612w, https://cdn.cdnparenting.com/articles/2018/11/13123508/744476260-H.jpg 1020w" sizes="(max-width: 100px) 100vw, 100px"  alt="चाइल्ड इंश्योरेंस - हर जरूरी जानकारी" title="चाइल्ड इंश्योरेंस &#8211; हर जरूरी जानकारी" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/child-insurance-har-jaruri-jankari-%E0%A4%9A%E0%A4%BE%E0%A4%87%E0%A4%B2%E0%A5%8D%E0%A4%A1-%E0%A4%87%E0%A4%82%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%B8-%E0%A4%B9%E0%A4%B0-%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80/" rel="bookmark" title="चाइल्ड इंश्योरेंस &#8211; हर जरूरी जानकारी">चाइल्ड इंश्योरेंस &#8211; हर जरूरी जानकारी</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-08-17T00:00:00+05:30" >August 17, 2021</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-10-behtarin-aur-famous-kahaniyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-10-%E0%A4%AB%E0%A5%87%E0%A4%AE%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए 10 प्रसिद्ध कहानियां" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/07/Fairy-Tale-Stories-for-Kids-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/07/Fairy-Tale-Stories-for-Kids-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/07/Fairy-Tale-Stories-for-Kids-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों के लिए 10 मोहक कहानियां" title="बच्चों के लिए 10 प्रसिद्ध कहानियां" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-10-behtarin-aur-famous-kahaniyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-10-%E0%A4%AB%E0%A5%87%E0%A4%AE%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%AC%E0%A5%87%E0%A4%B9%E0%A4%A4%E0%A4%B0%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" title="बच्चों के लिए 10 प्रसिद्ध कहानियां">बच्चों के लिए 10 प्रसिद्ध कहानियां</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-08-05T00:00:00+05:30" >August 5, 2020</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/bharat-mein-single-parent-adoption-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A4%B2-%E0%A4%AA%E0%A5%87%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%9F-%E0%A4%85%E0%A4%A1%E0%A5%89%E0%A4%AA%E0%A5%8D%E0%A4%B6%E0%A4%A8/" rel="bookmark" class="td-image-wrap " title="भारत में एकल अभिभावक दत्तक ग्रहण (गोद लेना)" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/07/भारत-में-एकल-अभिभावक-दत्तक-ग्रहण-गोद-लेना-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/07/भारत-में-एकल-अभिभावक-दत्तक-ग्रहण-गोद-लेना-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/07/भारत-में-एकल-अभिभावक-दत्तक-ग्रहण-गोद-लेना-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="भारत में सिंगल पेरेंट अडॉप्शन" title="भारत में एकल अभिभावक दत्तक ग्रहण (गोद लेना)" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/bharat-mein-single-parent-adoption-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A4%B2-%E0%A4%AA%E0%A5%87%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%9F-%E0%A4%85%E0%A4%A1%E0%A5%89%E0%A4%AA%E0%A5%8D%E0%A4%B6%E0%A4%A8/" rel="bookmark" title="भारत में एकल अभिभावक दत्तक ग्रहण (गोद लेना)">भारत में एकल अभिभावक दत्तक ग्रहण (गोद लेना)</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-09-19T00:00:00+05:30" >September 19, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div></div> <!-- ./block --><div class="td_block_wrap td_block_1 tdi_29 td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-2"  data-td-block-uid="tdi_29" >
<style>
.td-theme-wrap .tdi_29 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_29 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_29 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_29 .block-title > *,
            .td-theme-wrap .tdi_29 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_29 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_29 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_29 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_29 .td_quote_on_blocks,
            .td-theme-wrap .tdi_29 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_29 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_29 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_29 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_29 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_29 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_29 .td-read-more a,
            .td-theme-wrap .tdi_29 .td-weather-information:before,
            .td-theme-wrap .tdi_29 .td-weather-week:before,
            .td-theme-wrap .tdi_29 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_29 .td-post-category,
            .td-theme-wrap .tdi_29 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_29 = new tdBlock();
block_tdi_29.id = "tdi_29";
block_tdi_29.atts = '{"limit":"5","custom_title":"\u092a\u094d\u0930\u0940\u0938\u094d\u0915\u0942\u0932\u0930","td_filter_default_txt":"All","category_id":"17","sort":"random_posts","td_ajax_filter_type":"","td_ajax_preloading":"preload","header_color":"#ef3b74","block_type":"td_block_1","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_ids":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_29","tdc_css_class":"tdi_29","tdc_css_class_style":"tdi_29_rand_style"}';
block_tdi_29.td_column_number = "2";
block_tdi_29.block_type = "td_block_1";
block_tdi_29.post_count = "5";
block_tdi_29.found_posts = "510";
block_tdi_29.header_color = "#ef3b74";
block_tdi_29.ajax_pagination_infinite_stop = "";
block_tdi_29.max_num_pages = "102";
tdBlocksArray.push(block_tdi_29);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">प्रीस्कूलर</span></h4></div><div id=tdi_29 class="td_block_inner">

	<div class="td-block-row">

	<div class="td-block-span6">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/pani-mein-rehne-wale-janwaro-ke-bare-mein-intresting-educative-jankariyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A5%87+%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%B5%E0%A4%B0%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए पानी में रहने वाले जानवरों के बारे में इंट्रेस्टिंग जानकारियां" ><img width="324" height="235" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/05/106945244-H-324x235.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/05/106945244-H-324x235.jpg 324w, https://cdn.cdnparenting.com/articles/2018/05/106945244-H-648x470.jpg 648w, https://cdn.cdnparenting.com/articles/2018/05/106945244-H-970x700.jpg 970w" sizes="(max-width: 324px) 100vw, 324px"  alt="बच्चों के लिए वॉटर एनिमल्स के बारे में इंट्रेस्टिंग और एजुकेटिव जानकारियां" title="बच्चों के लिए पानी में रहने वाले जानवरों के बारे में इंट्रेस्टिंग जानकारियां" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b6%e0%a4%bf%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/" class="td-post-category">शिक्षा</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/pani-mein-rehne-wale-janwaro-ke-bare-mein-intresting-educative-jankariyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A5%87+%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%B5%E0%A4%B0%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" title="बच्चों के लिए पानी में रहने वाले जानवरों के बारे में इंट्रेस्टिंग जानकारियां">बच्चों के लिए पानी में रहने वाले जानवरों के बारे में...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/surakshahindicontent/">सुरक्षा कटियार</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-08-05T00:00:00+05:30" >August 5, 2020</time></span>                            </div>

            <div class="td-excerpt">
                पानी के अंदर की दुनिया हम सभी को बहुत ज्यादा आकर्षित करती है। बच्चों को पानी में रहने वाले जानवरों के बारे में बताने...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-mein-meningitis-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%a8%e0%a4%bf%e0%a4%a8%e0%a4%9c%e0%a4%be%e0%a4%87%e0%a4%9f%e0%a4%bf%e0%a4%b8/" rel="bookmark" class="td-image-wrap " title="बच्चों में मेनिनजाइटिस" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/04/399663421-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/04/399663421-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/04/399663421-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2018/04/399663421-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/04/399663421-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों में मेनिनजाइटिस" title="बच्चों में मेनिनजाइटिस" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-mein-meningitis-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%a8%e0%a4%bf%e0%a4%a8%e0%a4%9c%e0%a4%be%e0%a4%87%e0%a4%9f%e0%a4%bf%e0%a4%b8/" rel="bookmark" title="बच्चों में मेनिनजाइटिस">बच्चों में मेनिनजाइटिस</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-01-21T00:00:00+05:30" >January 21, 2022</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-navratri-dussehra-se-jude-kahaniyaan-tathy-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A8%E0%A4%B5%E0%A4%B0%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BF-%E0%A4%94%E0%A4%B0-%E0%A4%A6%E0%A4%B6%E0%A4%B9%E0%A4%B0%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%9C%E0%A5%81%E0%A5%9C%E0%A5%80-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82-%E0%A4%94%E0%A4%B0-%E0%A4%A4%E0%A4%A5%E0%A5%8D%E0%A4%AF/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए नवरात्रि और दशहरे से जुड़ी कहानियां और तथ्य" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/09/25145614/1508890127-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/09/25145614/1508890127-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/09/25145614/1508890127-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों के लिए नवरात्रि और दशहरे से जुड़ी कहानियां और तथ्य" title="बच्चों के लिए नवरात्रि और दशहरे से जुड़ी कहानियां और तथ्य" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-navratri-dussehra-se-jude-kahaniyaan-tathy-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A8%E0%A4%B5%E0%A4%B0%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BF-%E0%A4%94%E0%A4%B0-%E0%A4%A6%E0%A4%B6%E0%A4%B9%E0%A4%B0%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%9C%E0%A5%81%E0%A5%9C%E0%A5%80-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82-%E0%A4%94%E0%A4%B0-%E0%A4%A4%E0%A4%A5%E0%A5%8D%E0%A4%AF/" rel="bookmark" title="बच्चों के लिए नवरात्रि और दशहरे से जुड़ी कहानियां और तथ्य">बच्चों के लिए नवरात्रि और दशहरे से जुड़ी कहानियां और तथ्य</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-10-06T00:00:00+05:30" >October 6, 2023</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/essay-on-best-friend-in-hindi/" rel="bookmark" class="td-image-wrap " title="प्रिय मित्र पर निबंध (Essay on Best Friend in Hindi)" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2023/05/30152217/2167543849-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2023/05/30152217/2167543849-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2023/05/30152217/2167543849-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="प्रिय मित्र पर निबंध (Essay on Best Friend in Hindi)" title="प्रिय मित्र पर निबंध (Essay on Best Friend in Hindi)" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/essay-on-best-friend-in-hindi/" rel="bookmark" title="प्रिय मित्र पर निबंध (Essay on Best Friend in Hindi)">प्रिय मित्र पर निबंध (Essay on Best Friend in Hindi)</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-05-30T00:00:29+05:30" >May 30, 2023</time></span>                            </div>
        </div>

        </div>

        
        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-mein-acid-reflux-gerd-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%8F%E0%A4%B8%E0%A4%BF%E0%A4%A1-%E0%A4%B0%E0%A4%BF%E0%A4%AB%E0%A5%8D%E0%A4%B2%E0%A4%95%E0%A5%8D%E0%A4%B8-%E0%A4%9C%E0%A5%80%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80/" rel="bookmark" class="td-image-wrap " title="बच्चों में एसिड रिफ्लक्स (जीईआरडी) &#8211; कारण, लक्षण और उपचार" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/06/601520951-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/06/601520951-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/06/601520951-H-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों में एसिड रिफ्लक्स (जीईआरडी) - कारण, लक्षण और उपचार" title="बच्चों में एसिड रिफ्लक्स (जीईआरडी) &#8211; कारण, लक्षण और उपचार" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-mein-acid-reflux-gerd-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%8F%E0%A4%B8%E0%A4%BF%E0%A4%A1-%E0%A4%B0%E0%A4%BF%E0%A4%AB%E0%A5%8D%E0%A4%B2%E0%A4%95%E0%A5%8D%E0%A4%B8-%E0%A4%9C%E0%A5%80%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80/" rel="bookmark" title="बच्चों में एसिड रिफ्लक्स (जीईआरडी) &#8211; कारण, लक्षण और उपचार">बच्चों में एसिड रिफ्लक्स (जीईआरडी) &#8211; कारण, लक्षण और उपचार</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-03-21T00:00:00+05:30" >March 21, 2020</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--></div></div> <!-- ./block --><div class="td_block_wrap td_block_11 tdi_30 td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-2"  data-td-block-uid="tdi_30" >
<style>
.td-theme-wrap .tdi_30 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_30 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_30 .td-subcat-item .td-cur-simple-item {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_30 .block-title > *,
            .td-theme-wrap .tdi_30 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #ef3b74;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_30 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_30 .block-title {
                border-color: #ef3b74;
            }

            
            .td-theme-wrap .tdi_30 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_30 .td_quote_on_blocks,
            .td-theme-wrap .tdi_30 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_30 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_30 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_30 .td-instagram-user a {
                color: #ef3b74;
            }

            .td-theme-wrap .tdi_30 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_30 .td-load-more-wrap a:hover {
                background-color: #ef3b74;
                border-color: #ef3b74;
            }

            .td-theme-wrap .tdi_30 .td-read-more a,
            .td-theme-wrap .tdi_30 .td-weather-information:before,
            .td-theme-wrap .tdi_30 .td-weather-week:before,
            .td-theme-wrap .tdi_30 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_30 .td-post-category,
            .td-theme-wrap .tdi_30 .td-post-category:hover {
                background-color: #ef3b74;
            }
</style><script>var block_tdi_30 = new tdBlock();
block_tdi_30.id = "tdi_30";
block_tdi_30.atts = '{"limit":"5","custom_title":"\u092c\u0921\u093c\u0947 \u092c\u091a\u094d\u091a\u0947","td_filter_default_txt":"All","category_id":"80","sort":"random_posts","td_ajax_filter_type":"","td_ajax_preloading":"preload","header_color":"#ef3b74","block_type":"td_block_11","separator":"","custom_url":"","block_template_id":"","m10_tl":"","m10_el":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_ids":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m10f_title_font_header":"","m10f_title_font_title":"Article title","m10f_title_font_settings":"","m10f_title_font_family":"","m10f_title_font_size":"","m10f_title_font_line_height":"","m10f_title_font_style":"","m10f_title_font_weight":"","m10f_title_font_transform":"","m10f_title_font_spacing":"","m10f_title_":"","m10f_cat_font_title":"Article category tag","m10f_cat_font_settings":"","m10f_cat_font_family":"","m10f_cat_font_size":"","m10f_cat_font_line_height":"","m10f_cat_font_style":"","m10f_cat_font_weight":"","m10f_cat_font_transform":"","m10f_cat_font_spacing":"","m10f_cat_":"","m10f_meta_font_title":"Article meta info","m10f_meta_font_settings":"","m10f_meta_font_family":"","m10f_meta_font_size":"","m10f_meta_font_line_height":"","m10f_meta_font_style":"","m10f_meta_font_weight":"","m10f_meta_font_transform":"","m10f_meta_font_spacing":"","m10f_meta_":"","m10f_ex_font_title":"Article excerpt","m10f_ex_font_settings":"","m10f_ex_font_family":"","m10f_ex_font_size":"","m10f_ex_font_line_height":"","m10f_ex_font_style":"","m10f_ex_font_weight":"","m10f_ex_font_transform":"","m10f_ex_font_spacing":"","m10f_ex_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"tdi_30","tdc_css_class":"tdi_30","tdc_css_class_style":"tdi_30_rand_style"}';
block_tdi_30.td_column_number = "2";
block_tdi_30.block_type = "td_block_11";
block_tdi_30.post_count = "5";
block_tdi_30.found_posts = "549";
block_tdi_30.header_color = "#ef3b74";
block_tdi_30.ajax_pagination_infinite_stop = "";
block_tdi_30.max_num_pages = "110";
tdBlocksArray.push(block_tdi_30);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">बड़े बच्चे</span></h4></div><div id=tdi_30 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_10 td_module_wrap td-animation-stack">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-protein-fayde-jarurat-aur-food-items-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%8b%e0%a4%9f%e0%a5%80%e0%a4%a8-%e0%a4%ab%e0%a4%be%e0%a4%af%e0%a4%a6%e0%a5%87-%e0%a4%9c%e0%a4%b0%e0%a5%81%e0%a4%b0%e0%a4%a4-%e0%a4%94%e0%a4%b0-%e0%a4%ab%e0%a5%82%e0%a4%a1-%e0%a4%86%e0%a4%87%e0%a4%9f%e0%a4%ae%e0%a5%8d%e0%a4%b8/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए प्रोटीन: फायदे, जरूरत और फूड आइटम्स" ><img width="218" height="150" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/01/1073811641_H-218x150.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/01/1073811641_H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/01/1073811641_H.jpg 1024w, https://cdn.cdnparenting.com/articles/2018/01/1073811641_H-768x525.jpg 768w, https://cdn.cdnparenting.com/articles/2018/01/1073811641_H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/01/1073811641_H-696x476.jpg 696w, https://cdn.cdnparenting.com/articles/2018/01/1073811641_H-614x420.jpg 614w" sizes="(max-width: 218px) 100vw, 218px"  alt="बच्चों के लिए प्रोटीन: फायदे, जरूरत और फूड आइटम्स" title="बच्चों के लिए प्रोटीन: फायदे, जरूरत और फूड आइटम्स" /></a></div>
            <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-protein-fayde-jarurat-aur-food-items-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%8b%e0%a4%9f%e0%a5%80%e0%a4%a8-%e0%a4%ab%e0%a4%be%e0%a4%af%e0%a4%a6%e0%a5%87-%e0%a4%9c%e0%a4%b0%e0%a5%81%e0%a4%b0%e0%a4%a4-%e0%a4%94%e0%a4%b0-%e0%a4%ab%e0%a5%82%e0%a4%a1-%e0%a4%86%e0%a4%87%e0%a4%9f%e0%a4%ae%e0%a5%8d%e0%a4%b8/" rel="bookmark" title="बच्चों के लिए प्रोटीन: फायदे, जरूरत और फूड आइटम्स">बच्चों के लिए प्रोटीन: फायदे, जरूरत और फूड आइटम्स</a></h3>
                <div class="td-module-meta-info">
                                            <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-12-07T00:00:00+05:30" >December 7, 2021</time></span>                                        </div>

                <div class="td-excerpt">
                    जब खाने-पीने की बात आती है तो बच्चे सेलेक्टिव हो जाते हैं, यानि आप जो उन्हें खिलाना चाहती हैं जरूरी नहीं है कि वे...                </div>
            </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_10 td_module_wrap td-animation-stack">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-ande-se-bani-recipe-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%85%E0%A4%82%E0%A4%A1%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%AC%E0%A4%A8%E0%A5%80-%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए अंडे से बनी रेसिपीज" ><img width="218" height="150" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/03/124774279-H-218x150.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/03/124774279-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H-300x205.jpg 300w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H-768x525.jpg 768w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H.jpg 1024w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H-436x300.jpg 436w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H-696x476.jpg 696w, https://cdn.cdnparenting.com/articles/2018/03/124774279-H-614x420.jpg 614w" sizes="(max-width: 218px) 100vw, 218px"  alt="बच्चों के लिए अंडे से बनी रेसिपीज" title="बच्चों के लिए अंडे से बनी रेसिपीज" /></a></div>
            <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-ande-se-bani-recipe-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%85%E0%A4%82%E0%A4%A1%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%AC%E0%A4%A8%E0%A5%80-%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80/" rel="bookmark" title="बच्चों के लिए अंडे से बनी रेसिपीज">बच्चों के लिए अंडे से बनी रेसिपीज</a></h3>
                <div class="td-module-meta-info">
                                            <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-01-16T00:00:00+05:30" >January 16, 2021</time></span>                                        </div>

                <div class="td-excerpt">
                    बच्चे तेजी से बढ़ते हैं और ऐसे में अच्छा खाना उनके शरीर के लिए फ्यूल का काम करता है। अंडे की हर सर्विंग में...                </div>
            </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_10 td_module_wrap td-animation-stack">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ko-reduce-reuse-and-recycle-ke-bare-mein-batana-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%B0%E0%A4%BF%E0%A4%A1%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%B8-%E0%A4%B0%E0%A5%80%E0%A4%AF%E0%A5%82%E0%A4%9C-%E0%A4%94%E0%A4%B0-%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%AF%E0%A4%95%E0%A4%B2-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%BE/" rel="bookmark" class="td-image-wrap " title="बच्चों को रिड्यूस, रीयूज और रीसायकल के बारे में बताना" ><img width="218" height="150" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1-218x150.jpg"  srcset="https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1-768x525.jpg 768w, https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1-696x476.jpg 696w, https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1-614x420.jpg 614w, https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2022/06/19101901/650428003-H-1024x700-1.jpg 1024w" sizes="(max-width: 218px) 100vw, 218px"  alt="बच्चों को रिड्यूस, रीयूज और रीसायकल के बारे में बताना" title="बच्चों को रिड्यूस, रीयूज और रीसायकल के बारे में बताना" /></a></div>
            <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ko-reduce-reuse-and-recycle-ke-bare-mein-batana-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%B0%E0%A4%BF%E0%A4%A1%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%B8-%E0%A4%B0%E0%A5%80%E0%A4%AF%E0%A5%82%E0%A4%9C-%E0%A4%94%E0%A4%B0-%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%AF%E0%A4%95%E0%A4%B2-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AC%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%BE/" rel="bookmark" title="बच्चों को रिड्यूस, रीयूज और रीसायकल के बारे में बताना">बच्चों को रिड्यूस, रीयूज और रीसायकल के बारे में बताना</a></h3>
                <div class="td-module-meta-info">
                                            <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-06-27T00:00:00+05:30" >June 27, 2022</time></span>                                        </div>

                <div class="td-excerpt">
                    पर्यावरण को बचाना या इसका संरक्षण अब कोई विकल्प नहीं है, बल्कि यह हमारे लिए एक आवश्यकता बन गई है। बढ़ती जनसंख्या, प्रदूषण और...                </div>
            </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_10 td_module_wrap td-animation-stack">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-mein-atmavishwas-kaise-badhaye-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%86%e0%a4%a4%e0%a5%8d%e0%a4%ae%e0%a4%b5%e0%a4%bf%e0%a4%b6%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8-%e0%a4%95%e0%a5%88%e0%a4%b8%e0%a5%87-%e0%a4%ac%e0%a5%9d%e0%a4%be%e0%a4%8f%e0%a4%82/" rel="bookmark" class="td-image-wrap " title="बच्चों में आत्मविश्वास कैसे बढ़ाएं" ><img width="218" height="150" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/03/334181882-H-218x150.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/03/334181882-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H-300x205.jpg 300w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H-768x525.jpg 768w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H.jpg 1024w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H-436x300.jpg 436w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H-696x476.jpg 696w, https://cdn.cdnparenting.com/articles/2018/03/334181882-H-614x420.jpg 614w" sizes="(max-width: 218px) 100vw, 218px"  alt="बच्चों में आत्मविश्वास कैसे बढ़ाएं" title="बच्चों में आत्मविश्वास कैसे बढ़ाएं" /></a></div>
            <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-mein-atmavishwas-kaise-badhaye-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%86%e0%a4%a4%e0%a5%8d%e0%a4%ae%e0%a4%b5%e0%a4%bf%e0%a4%b6%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8-%e0%a4%95%e0%a5%88%e0%a4%b8%e0%a5%87-%e0%a4%ac%e0%a5%9d%e0%a4%be%e0%a4%8f%e0%a4%82/" rel="bookmark" title="बच्चों में आत्मविश्वास कैसे बढ़ाएं">बच्चों में आत्मविश्वास कैसे बढ़ाएं</a></h3>
                <div class="td-module-meta-info">
                                            <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-10-26T00:00:00+05:30" >October 26, 2021</time></span>                                        </div>

                <div class="td-excerpt">
                    बच्चे अभी भी अपने आसपास की दुनिया को समझने का प्रयास कर रहे होते हैं। माता पिता होने के नाते आपका कर्तव्य बनता है...                </div>
            </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_10 td_module_wrap td-animation-stack">
            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/ladkiyon-ke-liye-birthday-party-ke-best-aur-unique-themes-ideas-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AC%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A4%94%E0%A4%B0-%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%BF%E0%A4%95-%E0%A4%A5%E0%A5%80%E0%A4%AE%E0%A5%8D%E0%A4%B8-%E0%A4%86%E0%A4%87%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%9C/" rel="bookmark" class="td-image-wrap " title="लड़कियों की बर्थडे पार्टी के लिए 27 बेस्ट थीम्स" ><img width="218" height="150" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/03/407263582-H-218x150.jpg"  srcset="https://cdn.cdnparenting.com/articles/2018/03/407263582-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H-300x205.jpg 300w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H-768x525.jpg 768w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H.jpg 1024w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H-436x300.jpg 436w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H-696x476.jpg 696w, https://cdn.cdnparenting.com/articles/2018/03/407263582-H-614x420.jpg 614w" sizes="(max-width: 218px) 100vw, 218px"  alt="27 बेस्ट थीम आइडियाज लड़कियों की बर्थडे पार्टी के लिए" title="लड़कियों की बर्थडे पार्टी के लिए 27 बेस्ट थीम्स" /></a></div>
            <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/ladkiyon-ke-liye-birthday-party-ke-best-aur-unique-themes-ideas-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AC%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A4%94%E0%A4%B0-%E0%A4%AF%E0%A5%82%E0%A4%A8%E0%A4%BF%E0%A4%95-%E0%A4%A5%E0%A5%80%E0%A4%AE%E0%A5%8D%E0%A4%B8-%E0%A4%86%E0%A4%87%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%9C/" rel="bookmark" title="लड़कियों की बर्थडे पार्टी के लिए 27 बेस्ट थीम्स">लड़कियों की बर्थडे पार्टी के लिए 27 बेस्ट थीम्स</a></h3>
                <div class="td-module-meta-info">
                                            <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/surakshahindicontent/">सुरक्षा कटियार</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2020-08-07T00:00:00+05:30" >August 7, 2020</time></span>                                        </div>

                <div class="td-excerpt">
                    आजकल सभी पार्टीज थीम के अनुसार रखी जाती हैं, लेकिन कभी-कभी बच्चों के लिए थीम के अनुसार पार्टी रखना थोड़ा कन्फ्यूजिंग हो सकता है...                </div>
            </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --></div></div><div class="vc_column tdi_32  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>

/* custom css */
.tdi_32{
                    vertical-align: baseline;
                }.tdi_32 > .wpb_wrapper,
				.tdi_32 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_32 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_32 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_32 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"><div class="td_block_wrap td_block_1 tdi_33 td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-1"  data-td-block-uid="tdi_33" >
<style>
.td-theme-wrap .tdi_33 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_33 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_33 .td-subcat-item .td-cur-simple-item {
                color: #e91e63;
            }

            .td-theme-wrap .tdi_33 .block-title > *,
            .td-theme-wrap .tdi_33 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #e91e63;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_33 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_33 .block-title {
                border-color: #e91e63;
            }

            
            .td-theme-wrap .tdi_33 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_33 .td_quote_on_blocks,
            .td-theme-wrap .tdi_33 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_33 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_33 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_33 .td-instagram-user a {
                color: #e91e63;
            }

            .td-theme-wrap .tdi_33 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_33 .td-load-more-wrap a:hover {
                background-color: #e91e63;
                border-color: #e91e63;
            }

            .td-theme-wrap .tdi_33 .td-read-more a,
            .td-theme-wrap .tdi_33 .td-weather-information:before,
            .td-theme-wrap .tdi_33 .td-weather-week:before,
            .td-theme-wrap .tdi_33 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_33 .td-post-category,
            .td-theme-wrap .tdi_33 .td-post-category:hover {
                background-color: #e91e63;
            }
</style><script>var block_tdi_33 = new tdBlock();
block_tdi_33.id = "tdi_33";
block_tdi_33.atts = '{"category_id":"","limit":"4","custom_title":"\u0905\u0928\u0941\u0936\u0902\u0938\u093f\u0924","header_color":"#e91e63","td_filter_default_txt":"All","tag_slug":"","sort":"popular","td_ajax_filter_type":"","td_ajax_preloading":"preload","block_type":"td_block_1","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_ids":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","class":"tdi_33","tdc_css_class":"tdi_33","tdc_css_class_style":"tdi_33_rand_style"}';
block_tdi_33.td_column_number = "1";
block_tdi_33.block_type = "td_block_1";
block_tdi_33.post_count = "4";
block_tdi_33.found_posts = "3822";
block_tdi_33.header_color = "#e91e63";
block_tdi_33.ajax_pagination_infinite_stop = "";
block_tdi_33.max_num_pages = "956";
tdBlocksArray.push(block_tdi_33);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">अनुशंसित</span></h4></div><div id=tdi_33 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/36-achchi-aadatien-mata-pita-ko-baccho-ko-sikhani-chahiye-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A5%80-%E0%A4%86%E0%A4%A6%E0%A4%A4%E0%A5%87%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="36 अच्छी आदतें &#8211; जो माता-पिता को अपने बच्चों को सिखानी चाहिएं" ><img width="324" height="235" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/07/07213353/708925735-H-324x235.jpg"   alt="" title="36 अच्छी आदतें &#8211; जो माता-पिता को अपने बच्चों को सिखानी चाहिएं" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b5%e0%a5%8d%e0%a4%af%e0%a4%b5%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%b5-%e0%a4%85%e0%a4%a8%e0%a5%81%e0%a4%b6%e0%a4%be%e0%a4%b8%e0%a4%a8/" class="td-post-category">व्यवहार व अनुशासन</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/36-achchi-aadatien-mata-pita-ko-baccho-ko-sikhani-chahiye-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A5%80-%E0%A4%86%E0%A4%A6%E0%A4%A4%E0%A5%87%E0%A4%82/" rel="bookmark" title="36 अच्छी आदतें &#8211; जो माता-पिता को अपने बच्चों को सिखानी चाहिएं">36 अच्छी आदतें &#8211; जो माता-पिता को अपने बच्चों को सिखानी...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T00:00:00+05:30" >July 5, 2019</time></span>                            </div>

            <div class="td-excerpt">
                बच्चे अपने माता-पिता को देखकर ही सब कुछ सीखते है जैसे आदतें, तौर-तरीके, बोलचाल इत्यादि। । बच्चों के लिए उनके माता-पिता हमेशा उनके उदहारण...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ko-thos-aahaar-khilaane-ki-shuruaat-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%A0%E0%A5%8B%E0%A4%B8-%E0%A4%86%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%86%E0%A4%A4/" rel="bookmark" class="td-image-wrap " title="शिशुओं को ठोस आहार खिलाने की शुरुआत करना" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/12/66565162-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/12/66565162-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/12/66565162-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/12/66565162-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/12/66565162-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="शिशुओं को ठोस आहार खिलाने की शुरुआत करना" title="शिशुओं को ठोस आहार खिलाने की शुरुआत करना" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ko-thos-aahaar-khilaane-ki-shuruaat-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%A0%E0%A5%8B%E0%A4%B8-%E0%A4%86%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%96%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%B6%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%86%E0%A4%A4/" rel="bookmark" title="शिशुओं को ठोस आहार खिलाने की शुरुआत करना">शिशुओं को ठोस आहार खिलाने की शुरुआत करना</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T05:30:00+05:30" >July 5, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-15-choti-naitik-kahaniya-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%9B%E0%A5%8B%E0%A4%9F%E0%A5%80-%E0%A4%A8%E0%A5%88%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए 15 सर्वश्रेष्ठ लघु नैतिक कहानियाँ" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/11/393730435-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/11/393730435-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/11/393730435-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/11/393730435-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/11/393730435-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों के लिए 15 सर्वश्रेष्ठ लघु नैतिक कहानियाँ" title="बच्चों के लिए 15 सर्वश्रेष्ठ लघु नैतिक कहानियाँ" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-15-choti-naitik-kahaniya-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%9B%E0%A5%8B%E0%A4%9F%E0%A5%80-%E0%A4%A8%E0%A5%88%E0%A4%A4%E0%A4%BF%E0%A4%95-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81/" rel="bookmark" title="बच्चों के लिए 15 सर्वश्रेष्ठ लघु नैतिक कहानियाँ">बच्चों के लिए 15 सर्वश्रेष्ठ लघु नैतिक कहानियाँ</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T05:30:00+05:30" >July 5, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/180-bilkul-naye-ladkiyon-ke-naam-%E0%A4%B2%E0%A5%87%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%A8%E0%A4%BE%E0%A4%AE/" rel="bookmark" class="td-image-wrap " title="180 लेटेस्ट लड़कियों के नाम उनके अर्थ के साथ" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/09/05112132/693510871-H-1-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/09/05112132/693510871-H-1-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/09/05112132/693510871-H-1-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="180 लेटेस्ट लड़कियों के नाम उनके अर्थ के साथ" title="180 लेटेस्ट लड़कियों के नाम उनके अर्थ के साथ" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/180-bilkul-naye-ladkiyon-ke-naam-%E0%A4%B2%E0%A5%87%E0%A4%9F%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%A8%E0%A4%BE%E0%A4%AE/" rel="bookmark" title="180 लेटेस्ट लड़कियों के नाम उनके अर्थ के साथ">180 लेटेस्ट लड़कियों के नाम उनके अर्थ के साथ</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-09-05T11:21:53+05:30" >September 5, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --><div class="wpb_wrapper td_block_empty_space td_block_wrap vc_empty_space tdi_35 preschoolerad1 "  style="height: 32px"></div><div class="td_block_wrap td_block_1 tdi_36 td-pb-border-top td_block_template_1 td_ajax_preloading_preload td-column-1"  data-td-block-uid="tdi_36" >
<style>
.td-theme-wrap .tdi_36 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_36 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_36 .td-subcat-item .td-cur-simple-item {
                color: #e91e63;
            }

            .td-theme-wrap .tdi_36 .block-title > *,
            .td-theme-wrap .tdi_36 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #e91e63;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_36 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_36 .block-title {
                border-color: #e91e63;
            }

            
            .td-theme-wrap .tdi_36 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_36 .td_quote_on_blocks,
            .td-theme-wrap .tdi_36 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_36 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_36 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_36 .td-instagram-user a {
                color: #e91e63;
            }

            .td-theme-wrap .tdi_36 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_36 .td-load-more-wrap a:hover {
                background-color: #e91e63;
                border-color: #e91e63;
            }

            .td-theme-wrap .tdi_36 .td-read-more a,
            .td-theme-wrap .tdi_36 .td-weather-information:before,
            .td-theme-wrap .tdi_36 .td-weather-week:before,
            .td-theme-wrap .tdi_36 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_36 .td-post-category,
            .td-theme-wrap .tdi_36 .td-post-category:hover {
                background-color: #e91e63;
            }
</style><script>var block_tdi_36 = new tdBlock();
block_tdi_36.id = "tdi_36";
block_tdi_36.atts = '{"category_id":"","limit":"4","custom_title":"\u0938\u0902\u092a\u093e\u0926\u0915 \u0915\u0940 \u092a\u0938\u0902\u0926","header_color":"#e91e63","td_filter_default_txt":"All","tag_slug":"","sort":"popular","td_ajax_filter_type":"","td_ajax_preloading":"preload","block_type":"td_block_1","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","autors_id":"","installed_post_types":"","offset":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","el_class":"","td_ajax_filter_ids":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_settings":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_settings":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_settings":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_settings":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","class":"tdi_36","tdc_css_class":"tdi_36","tdc_css_class_style":"tdi_36_rand_style"}';
block_tdi_36.td_column_number = "1";
block_tdi_36.block_type = "td_block_1";
block_tdi_36.post_count = "4";
block_tdi_36.found_posts = "3818";
block_tdi_36.header_color = "#e91e63";
block_tdi_36.ajax_pagination_infinite_stop = "";
block_tdi_36.max_num_pages = "955";
tdBlocksArray.push(block_tdi_36);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">संपादक की पसंद</span></h4></div><div id=tdi_36 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_4 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/125-modern-stylish-naam-ladakon-ke-lie-%E0%A4%86%E0%A4%A7%E0%A5%81%E0%A4%A8%E0%A4%BF%E0%A4%95-%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%B2%E0%A4%BF%E0%A4%B6-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F/" rel="bookmark" class="td-image-wrap " title="125 आधुनिक व स्टाइलिश नाम, अर्थसहित &#8211; लड़कों के लिए" ><img width="324" height="235" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2018/06/691746451-H-324x235.jpg"   alt="125 आधुनिक व स्टाइलिश नाम, अर्थसहित - लड़कों के लिए" title="125 आधुनिक व स्टाइलिश नाम, अर्थसहित &#8211; लड़कों के लिए" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81/%e0%a4%b6%e0%a4%bf%e0%a4%b6%e0%a5%81-%e0%a4%95%e0%a5%87-%e0%a4%a8%e0%a4%be%e0%a4%ae/" class="td-post-category">शिशु के नाम</a>            </div>

            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/125-modern-stylish-naam-ladakon-ke-lie-%E0%A4%86%E0%A4%A7%E0%A5%81%E0%A4%A8%E0%A4%BF%E0%A4%95-%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A4%BE%E0%A4%87%E0%A4%B2%E0%A4%BF%E0%A4%B6-%E0%A4%A8%E0%A4%BE%E0%A4%AE-%E0%A4%B2%E0%A5%9C%E0%A4%95%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F/" rel="bookmark" title="125 आधुनिक व स्टाइलिश नाम, अर्थसहित &#8211; लड़कों के लिए">125 आधुनिक व स्टाइलिश नाम, अर्थसहित &#8211; लड़कों के लिए</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/surakshahindicontent/">सुरक्षा कटियार</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-09-05T11:00:00+05:30" >September 5, 2019</time></span>                            </div>

            <div class="td-excerpt">
                अपने बच्चे के लिए नाम चुनना एक आवश्यक कार्य है। आखिरकार, आप केवल एक बार ही अपने बच्चे का नाम रखते हैं और वह...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-15-majedar-learning-activities-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-15-%e0%a4%ae%e0%a4%9c%e0%a5%87%e0%a4%a6%e0%a4%be%e0%a4%b0-%e0%a4%b2%e0%a4%b0%e0%a5%8d%e0%a4%a8%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%8f%e0%a4%95%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%9f%e0%a5%80%e0%a4%9c/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए 15 मजेदार लर्निंग एक्टिविटीज" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/12/386802193-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/12/386802193-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/12/386802193-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/12/386802193-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/12/386802193-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="बच्चों के लिए 15 मजेदार लर्निंग एक्टिविटीज" title="बच्चों के लिए 15 मजेदार लर्निंग एक्टिविटीज" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-15-majedar-learning-activities-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%8b%e0%a4%82-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-15-%e0%a4%ae%e0%a4%9c%e0%a5%87%e0%a4%a6%e0%a4%be%e0%a4%b0-%e0%a4%b2%e0%a4%b0%e0%a5%8d%e0%a4%a8%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%8f%e0%a4%95%e0%a5%8d%e0%a4%9f%e0%a4%bf%e0%a4%b5%e0%a4%bf%e0%a4%9f%e0%a5%80%e0%a4%9c/" rel="bookmark" title="बच्चों के लिए 15 मजेदार लर्निंग एक्टिविटीज">बच्चों के लिए 15 मजेदार लर्निंग एक्टिविटीज</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2021-09-30T00:00:00+05:30" >September 30, 2021</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/periods-se-pehale-pregnancy-ke-lakshan-%E0%A4%AA%E0%A5%80%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%A1%E0%A5%8D%E0%A4%B8-%E0%A4%B8%E0%A5%87-%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3/" rel="bookmark" class="td-image-wrap " title="मासिक धर्म से पहले 21 प्रारंभिक गर्भावस्था के लक्षण" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2019/07/Early-Pregnancy-Symptoms-before-Missed-Period-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2019/07/Early-Pregnancy-Symptoms-before-Missed-Period-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2019/07/Early-Pregnancy-Symptoms-before-Missed-Period-218x150.jpg 218w" sizes="(max-width: 100px) 100vw, 100px"  alt="प्रेग्नेंसी के 21 प्रारंभिक लक्षण जो पीरियड होने से पहले दिखते हैं" title="मासिक धर्म से पहले 21 प्रारंभिक गर्भावस्था के लक्षण" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/periods-se-pehale-pregnancy-ke-lakshan-%E0%A4%AA%E0%A5%80%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%A1%E0%A5%8D%E0%A4%B8-%E0%A4%B8%E0%A5%87-%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%97%E0%A4%A8%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3/" rel="bookmark" title="मासिक धर्म से पहले 21 प्रारंभिक गर्भावस्था के लक्षण">मासिक धर्म से पहले 21 प्रारंभिक गर्भावस्था के लक्षण</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T05:30:00+05:30" >July 5, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/shishu-ko-nehalana-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81-%E0%A4%95%E0%A5%8B-%E0%A4%A8%E0%A4%B9%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A4%BE/" rel="bookmark" class="td-image-wrap " title="शिशु को नहलाना &#8211; प्रक्रिया, सुझाव व अन्य तथ्य" ><img width="100" height="70" class="entry-thumb" src="https://cdn.cdnparenting.com/articles/2017/11/203727406-H-100x70.jpg"  srcset="https://cdn.cdnparenting.com/articles/2017/11/203727406-H-100x70.jpg 100w, https://cdn.cdnparenting.com/articles/2017/11/203727406-H-200x140.jpg 200w, https://cdn.cdnparenting.com/articles/2017/11/203727406-H-218x150.jpg 218w, https://cdn.cdnparenting.com/articles/2017/11/203727406-H-436x300.jpg 436w" sizes="(max-width: 100px) 100vw, 100px"  alt="शिशु को नहलाना - प्रक्रिया, सुझाव व अन्य तथ्य" title="शिशु को नहलाना &#8211; प्रक्रिया, सुझाव व अन्य तथ्य" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/shishu-ko-nehalana-%E0%A4%B6%E0%A4%BF%E0%A4%B6%E0%A5%81-%E0%A4%95%E0%A5%8B-%E0%A4%A8%E0%A4%B9%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A4%BE/" rel="bookmark" title="शिशु को नहलाना &#8211; प्रक्रिया, सुझाव व अन्य तथ्य">शिशु को नहलाना &#8211; प्रक्रिया, सुझाव व अन्य तथ्य</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2019-07-05T05:30:00+05:30" >July 5, 2019</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block --></div></div></div></div><div id="tdi_37" class="tdc-row"><div class="vc_row tdi_38  wpb_row td-pb-row" >
<style scoped>

/* custom css */
.tdi_38,
                .tdi_38 .tdc-columns{
                    min-height: 0;
                }.tdi_38,
				.tdi_38 .tdc-columns{
				    display: block;
				}.tdi_38 .tdc-columns{
				    width: 100%;
				}
</style><div class="vc_column tdi_40  wpb_column vc_column_container tdc-column td-pb-span12">
<style scoped>

/* custom css */
.tdi_40{
                    vertical-align: baseline;
                }.tdi_40 > .wpb_wrapper,
				.tdi_40 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_40 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_40 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_40 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"></div></div></div></div><div id="tdi_41" class="tdc-row"><div class="vc_row tdi_42  wpb_row td-pb-row" >
<style scoped>

/* custom css */
.tdi_42,
                .tdi_42 .tdc-columns{
                    min-height: 0;
                }.tdi_42,
				.tdi_42 .tdc-columns{
				    display: block;
				}.tdi_42 .tdc-columns{
				    width: 100%;
				}
</style><div class="vc_column tdi_44  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>

/* custom css */
.tdi_44{
                    vertical-align: baseline;
                }.tdi_44 > .wpb_wrapper,
				.tdi_44 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_44 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_44 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_44 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"></div></div><div class="vc_column tdi_46  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>

/* custom css */
.tdi_46{
                    vertical-align: baseline;
                }.tdi_46 > .wpb_wrapper,
				.tdi_46 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_46 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_46 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_46 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"></div></div><div class="vc_column tdi_48  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>

/* custom css */
.tdi_48{
                    vertical-align: baseline;
                }.tdi_48 > .wpb_wrapper,
				.tdi_48 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_48 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_48 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_48 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"></div></div></div></div><div id="tdi_49" class="tdc-row"><div class="vc_row tdi_50  wpb_row td-pb-row" >
<style scoped>

/* custom css */
.tdi_50,
                .tdi_50 .tdc-columns{
                    min-height: 0;
                }.tdi_50,
				.tdi_50 .tdc-columns{
				    display: block;
				}.tdi_50 .tdc-columns{
				    width: 100%;
				}
</style><div class="vc_column tdi_52  wpb_column vc_column_container tdc-column td-pb-span12">
<style scoped>

/* custom css */
.tdi_52{
                    vertical-align: baseline;
                }.tdi_52 > .wpb_wrapper,
				.tdi_52 > .wpb_wrapper > .tdc-elements{
				    display: block;
				}.tdi_52 > .wpb_wrapper > .tdc-elements{
				    width: 100%;
				}.tdi_52 > .wpb_wrapper > .vc_row_inner{
				    width: auto;
				}.tdi_52 > .wpb_wrapper{
				    width: auto;
				    height: auto;
				}
</style><div class="wpb_wrapper"></div></div></div></div></div></div>                </div>

                    

<div class="td-container td-pb-article-list ">
    <div class="td-pb-row">
                            <div class="td-pb-span8 td-main-content" role="main">
                        <div class="td-ss-main-content td_block_template_1">
                            <div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">LATEST ARTICLES</span></h4></div>

	<div class="td-block-row">

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/essay-on-swami-vivekananda-in-hindi/" rel="bookmark" class="td-image-wrap " title="स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)" title="स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/01/11115929/2400322143-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b6%e0%a4%bf%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/" class="td-post-category">शिक्षा</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/essay-on-swami-vivekananda-in-hindi/" rel="bookmark" title="स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)">स्वामी विवेकानंद पर निबंध (Swami Vivekananda Essay In Hindi)</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:27+05:30" >February 8, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/buddhiman-bandar-aur-magarmachh-ki-kahani/" rel="bookmark" class="td-image-wrap " title="बुद्धिमान बंदर और मगरमच्छ की कहानी | Story Of The Wise Monkey and Crocodile In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="बुद्धिमान बंदर और मगरमच्छ की कहानी" title="बुद्धिमान बंदर और मगरमच्छ की कहानी | Story Of The Wise Monkey and Crocodile In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/02/05142626/684055891-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/" class="td-post-category">बच्चों की कहानियां</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/buddhiman-bandar-aur-magarmachh-ki-kahani/" rel="bookmark" title="बुद्धिमान बंदर और मगरमच्छ की कहानी | Story Of The Wise Monkey and Crocodile In Hindi">बुद्धिमान बंदर और मगरमच्छ की कहानी | Story Of The Wise...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:21+05:30" >February 8, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/suraj-aur-hawa-ki-kahani/" rel="bookmark" class="td-image-wrap " title="सूरज और हवा की कहानी l The Story Of The Sun And The Wind In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="सूरज और हवा की कहानी" title="सूरज और हवा की कहानी l The Story Of The Sun And The Wind In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/02/05150447/2291964359-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/" class="td-post-category">बच्चों की कहानियां</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/suraj-aur-hawa-ki-kahani/" rel="bookmark" title="सूरज और हवा की कहानी l The Story Of The Sun And The Wind In Hindi">सूरज और हवा की कहानी l The Story Of The Sun...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/shreyasihindicontent/">श्रेयसी चाफेकर</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-08T00:00:02+05:30" >February 8, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/kachhua-aur-khargosh-ki-kahani/" rel="bookmark" class="td-image-wrap " title="कछुआ और खरगोश की कहानी l The Story Of Rabbit And Tortoise In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="The Story Of Rabbit And Tortoise In Hindi" title="कछुआ और खरगोश की कहानी l The Story Of Rabbit And Tortoise In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/01/31094304/2213659707-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/" class="td-post-category">बच्चों की कहानियां</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/kachhua-aur-khargosh-ki-kahani/" rel="bookmark" title="कछुआ और खरगोश की कहानी l The Story Of Rabbit And Tortoise In Hindi">कछुआ और खरगोश की कहानी l The Story Of Rabbit And...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/shreyasihindicontent/">श्रेयसी चाफेकर</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-30T00:00:42+05:30" >January 30, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/neeli-ankhon-wali-pari-ki-kahani/" rel="bookmark" class="td-image-wrap " title="नीली आँखों वाली परी की कहानी | Story Of Blue Eyed Fairy In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="Story Of Blue Eyed Fairy In Hindi" title="नीली आँखों वाली परी की कहानी | Story Of Blue Eyed Fairy In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/01/31120012/1342132016-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/" class="td-post-category">बच्चों की कहानियां</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/neeli-ankhon-wali-pari-ki-kahani/" rel="bookmark" title="नीली आँखों वाली परी की कहानी | Story Of Blue Eyed Fairy In Hindi">नीली आँखों वाली परी की कहानी | Story Of Blue Eyed...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-30T00:00:27+05:30" >January 30, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/pyasa-kauwa-ki-kahani/" rel="bookmark" class="td-image-wrap " title="प्यासे कौवे की कहानी | Story Of Thirsty Crow In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="Story Of Thirsty Crow In Hindi" title="प्यासे कौवे की कहानी | Story Of Thirsty Crow In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/01/31121409/1705589518-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/" class="td-post-category">बच्चों की कहानियां</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/pyasa-kauwa-ki-kahani/" rel="bookmark" title="प्यासे कौवे की कहानी | Story Of Thirsty Crow In Hindi">प्यासे कौवे की कहानी | Story Of Thirsty Crow In Hindi</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-30T00:00:01+05:30" >January 30, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/billi-aur-chuho-ki-kahani/" rel="bookmark" class="td-image-wrap " title="बिल्ली और चूहों की कहानी I Story of The Cat And Rats In Hindi" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="Story of The Cat And Rats In Hindi" title="बिल्ली और चूहों की कहानी I Story of The Cat And Rats In Hindi" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/01/31122030/1171359469-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/kahaniya/" class="td-post-category">बच्चों की कहानियां</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/billi-aur-chuho-ki-kahani/" rel="bookmark" title="बिल्ली और चूहों की कहानी I Story of The Cat And Rats In Hindi">बिल्ली और चूहों की कहानी I Story of The Cat And...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/shreyasihindicontent/">श्रेयसी चाफेकर</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-29T00:00:14+05:30" >January 29, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/class-1-2-aur-3-ke-baccho-ke-liye-republic-day-par-nibandh-lekhan-%E0%A4%95%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-1-2-%E0%A4%94%E0%A4%B0-3-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7-%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8/" rel="bookmark" class="td-image-wrap " title="गणतंत्र दिवस 2024: कक्षा 1, 2 और 3 के बच्चों के लिए गणतंत्र दिवस पर निबंध लेखन" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="बच्चों के लिए गणतंत्र दिवस पर निबंध लेखन" title="गणतंत्र दिवस 2024: कक्षा 1, 2 और 3 के बच्चों के लिए गणतंत्र दिवस पर निबंध लेखन" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2023/01/19164910/%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%97%E0%A4%A3%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7-%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%E0%A4%AC%E0%A4%A1%E0%A4%BC%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%87/" class="td-post-category">बड़े बच्चे (5-8 वर्ष)</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/class-1-2-aur-3-ke-baccho-ke-liye-republic-day-par-nibandh-lekhan-%E0%A4%95%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-1-2-%E0%A4%94%E0%A4%B0-3-%E0%A4%95%E0%A5%87-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7-%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8/" rel="bookmark" title="गणतंत्र दिवस 2024: कक्षा 1, 2 और 3 के बच्चों के लिए गणतंत्र दिवस पर निबंध लेखन">गणतंत्र दिवस 2024: कक्षा 1, 2 और 3 के बच्चों के...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-11T00:00:44+05:30" >January 11, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid-->

	<div class="td-block-row">

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/magazine-pariwar-aur-doston-ke-liye-pongal-ki-wishes-quotes-message-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0-%E0%A4%94%E0%A4%B0-%E0%A4%A6%E0%A5%8B%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AA%E0%A5%8B%E0%A4%82%E0%A4%97%E0%A4%B2-%E0%A4%95%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%AE%E0%A5%88%E0%A4%B8%E0%A5%87%E0%A4%9C/" rel="bookmark" class="td-image-wrap " title="परिवार और दोस्तों के लिए पोंगल की विशेस, कोट्स और मैसेज" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="परिवार और दोस्तों के लिए पोंगल की विशेस, कोट्स और मैसेज" title="परिवार और दोस्तों के लिए पोंगल की विशेस, कोट्स और मैसेज" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2021/01/12161200/766320769-696x476-1-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ae%e0%a5%88%e0%a4%97%e0%a4%9c%e0%a4%bc%e0%a5%80%e0%a4%a8/" class="td-post-category">मैगज़ीन</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/magazine-pariwar-aur-doston-ke-liye-pongal-ki-wishes-quotes-message-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0-%E0%A4%94%E0%A4%B0-%E0%A4%A6%E0%A5%8B%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AA%E0%A5%8B%E0%A4%82%E0%A4%97%E0%A4%B2-%E0%A4%95%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%AE%E0%A5%88%E0%A4%B8%E0%A5%87%E0%A4%9C/" rel="bookmark" title="परिवार और दोस्तों के लिए पोंगल की विशेस, कोट्स और मैसेज">परिवार और दोस्तों के लिए पोंगल की विशेस, कोट्स और मैसेज</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-11T00:00:29+05:30" >January 11, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 -->

	<div class="td-block-span6">
<!-- module -->
        <div class="td_module_1 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/magazine-baccho-ke-liye-gantantra-divas-ke-mauke-par-tirange-se-bani-dish-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%97%E0%A4%A3%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%95%E0%A5%87-%E0%A4%AE%E0%A5%8C%E0%A4%95%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%A4%E0%A4%BF%E0%A4%B0%E0%A4%82%E0%A4%97%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%AC%E0%A4%A8%E0%A5%80-%E0%A4%A1%E0%A4%BF%E0%A4%B6/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए गणतंत्र दिवस के मौके पर तीन रंगों वाली डिश" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="बच्चों के लिए गणतंत्र दिवस के मौके पर तीन रंगों वाली डिश" title="बच्चों के लिए गणतंत्र दिवस के मौके पर तीन रंगों वाली डिश" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2019/07/21152942/1142031566-H-696x476-1-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ae%e0%a5%88%e0%a4%97%e0%a4%9c%e0%a4%bc%e0%a5%80%e0%a4%a8/" class="td-post-category">मैगज़ीन</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/magazine-baccho-ke-liye-gantantra-divas-ke-mauke-par-tirange-se-bani-dish-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%97%E0%A4%A3%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%95%E0%A5%87-%E0%A4%AE%E0%A5%8C%E0%A4%95%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%A4%E0%A4%BF%E0%A4%B0%E0%A4%82%E0%A4%97%E0%A5%87-%E0%A4%B8%E0%A5%87-%E0%A4%AC%E0%A4%A8%E0%A5%80-%E0%A4%A1%E0%A4%BF%E0%A4%B6/" rel="bookmark" title="बच्चों के लिए गणतंत्र दिवस के मौके पर तीन रंगों वाली डिश">बच्चों के लिए गणतंत्र दिवस के मौके पर तीन रंगों वाली...</a></h3>
            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-11T00:00:00+05:30" >January 11, 2024</time></span>                            </div>

            
        </div>

        
	</div> <!-- ./td-block-span6 --></div><!--./row-fluid--><div class="page-nav td-pb-padding-side"><span class="current">1</span><a href="https://hindiparenting.firstcry.com/page/2/?utm_source=firstcry_footer&#038;utm_medium=firstcrysite&#038;utm_campaign=promote_parenting" class="page" title="2">2</a><a href="https://hindiparenting.firstcry.com/page/3/?utm_source=firstcry_footer&#038;utm_medium=firstcrysite&#038;utm_campaign=promote_parenting" class="page" title="3">3</a><span class="extend">...</span><a href="https://hindiparenting.firstcry.com/page/382/?utm_source=firstcry_footer&#038;utm_medium=firstcrysite&#038;utm_campaign=promote_parenting" class="last" title="382">382</a><a href="https://hindiparenting.firstcry.com/page/2/?utm_source=firstcry_footer&#038;utm_medium=firstcrysite&#038;utm_campaign=promote_parenting"  aria-label="next-page" ><i class="td-icon-menu-right"></i></a><span class="pages">Page 1 of 382</span><div class="clearfix"></div></div>                        </div>
                    </div>
                    <div class="td-pb-span4 td-main-sidebar" role="complementary">
                        <div class="td-ss-main-sidebar">
                            <div class="td_block_wrap td_block_18 td_block_widget tdi_53 td-pb-border-top Rahul_Check td_block_template_1 td-column-1"  data-td-block-uid="tdi_53" >
<style>
.td-theme-wrap .tdi_53 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_53 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_53 .td-subcat-item .td-cur-simple-item {
                color: #cb9558;
            }

            .td-theme-wrap .tdi_53 .block-title > *,
            .td-theme-wrap .tdi_53 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #cb9558;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_53 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_53 .block-title {
                border-color: #cb9558;
            }

            
            .td-theme-wrap .tdi_53 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_53 .td_quote_on_blocks,
            .td-theme-wrap .tdi_53 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_53 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_53 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_53 .td-instagram-user a {
                color: #cb9558;
            }

            .td-theme-wrap .tdi_53 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_53 .td-load-more-wrap a:hover {
                background-color: #cb9558;
                border-color: #cb9558;
            }

            .td-theme-wrap .tdi_53 .td-read-more a,
            .td-theme-wrap .tdi_53 .td-weather-information:before,
            .td-theme-wrap .tdi_53 .td-weather-week:before,
            .td-theme-wrap .tdi_53 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_53 .td-post-category,
            .td-theme-wrap .tdi_53 .td-post-category:hover {
                background-color: #cb9558;
            }
</style><script>var block_tdi_53 = new tdBlock();
block_tdi_53.id = "tdi_53";
block_tdi_53.atts = '{"custom_title":"POPULAR POSTS","custom_url":"","block_template_id":"","header_color":"#cb9558","header_text_color":"#","accent_text_color":"#","mx8_tl":"","m10_tl":"","m10_el":"","mx2_tl":"","limit":"5","offset":"","el_class":"Rahul_Check","post_ids":"","category_id":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","class":"td_block_widget tdi_53","block_type":"td_block_18","separator":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","mx8f_title_font_header":"","mx8f_title_font_title":"Article title","mx8f_title_font_settings":"","mx8f_title_font_family":"","mx8f_title_font_size":"","mx8f_title_font_line_height":"","mx8f_title_font_style":"","mx8f_title_font_weight":"","mx8f_title_font_transform":"","mx8f_title_font_spacing":"","mx8f_title_":"","mx8f_cat_font_title":"Article category tag","mx8f_cat_font_settings":"","mx8f_cat_font_family":"","mx8f_cat_font_size":"","mx8f_cat_font_line_height":"","mx8f_cat_font_style":"","mx8f_cat_font_weight":"","mx8f_cat_font_transform":"","mx8f_cat_font_spacing":"","mx8f_cat_":"","mx8f_meta_font_title":"Article meta info","mx8f_meta_font_settings":"","mx8f_meta_font_family":"","mx8f_meta_font_size":"","mx8f_meta_font_line_height":"","mx8f_meta_font_style":"","mx8f_meta_font_weight":"","mx8f_meta_font_transform":"","mx8f_meta_font_spacing":"","mx8f_meta_":"","m10f_title_font_header":"","m10f_title_font_title":"Article title","m10f_title_font_settings":"","m10f_title_font_family":"","m10f_title_font_size":"","m10f_title_font_line_height":"","m10f_title_font_style":"","m10f_title_font_weight":"","m10f_title_font_transform":"","m10f_title_font_spacing":"","m10f_title_":"","m10f_cat_font_title":"Article category tag","m10f_cat_font_settings":"","m10f_cat_font_family":"","m10f_cat_font_size":"","m10f_cat_font_line_height":"","m10f_cat_font_style":"","m10f_cat_font_weight":"","m10f_cat_font_transform":"","m10f_cat_font_spacing":"","m10f_cat_":"","m10f_meta_font_title":"Article meta info","m10f_meta_font_settings":"","m10f_meta_font_family":"","m10f_meta_font_size":"","m10f_meta_font_line_height":"","m10f_meta_font_style":"","m10f_meta_font_weight":"","m10f_meta_font_transform":"","m10f_meta_font_spacing":"","m10f_meta_":"","m10f_ex_font_title":"Article excerpt","m10f_ex_font_settings":"","m10f_ex_font_family":"","m10f_ex_font_size":"","m10f_ex_font_line_height":"","m10f_ex_font_style":"","m10f_ex_font_weight":"","m10f_ex_font_transform":"","m10f_ex_font_spacing":"","m10f_ex_":"","mx2f_title_font_header":"","mx2f_title_font_title":"Article title","mx2f_title_font_settings":"","mx2f_title_font_family":"","mx2f_title_font_size":"","mx2f_title_font_line_height":"","mx2f_title_font_style":"","mx2f_title_font_weight":"","mx2f_title_font_transform":"","mx2f_title_font_spacing":"","mx2f_title_":"","mx2f_cat_font_title":"Article category tag","mx2f_cat_font_settings":"","mx2f_cat_font_family":"","mx2f_cat_font_size":"","mx2f_cat_font_line_height":"","mx2f_cat_font_style":"","mx2f_cat_font_weight":"","mx2f_cat_font_transform":"","mx2f_cat_font_spacing":"","mx2f_cat_":"","mx2f_meta_font_title":"Article meta info","mx2f_meta_font_settings":"","mx2f_meta_font_family":"","mx2f_meta_font_size":"","mx2f_meta_font_line_height":"","mx2f_meta_font_style":"","mx2f_meta_font_weight":"","mx2f_meta_font_transform":"","mx2f_meta_font_spacing":"","mx2f_meta_":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","tdc_css_class":"tdi_53","tdc_css_class_style":"tdi_53_rand_style"}';
block_tdi_53.td_column_number = "1";
block_tdi_53.block_type = "td_block_18";
block_tdi_53.post_count = "5";
block_tdi_53.found_posts = "3804";
block_tdi_53.header_color = "#cb9558";
block_tdi_53.ajax_pagination_infinite_stop = "";
block_tdi_53.max_num_pages = "761";
tdBlocksArray.push(block_tdi_53);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">POPULAR POSTS</span></h4></div><div id=tdi_53 class="td_block_inner td-column-1">
        <div class="td_module_mx8 td_module_wrap td-animation-stack">
            <div class="meta-info-container">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-gantantra-divas-se-judi-jankariyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%97%E0%A4%A3%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%B8%E0%A5%87-%E0%A4%9C%E0%A5%81%E0%A5%9C%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए गणतंत्र दिवस से जुड़ी जानकारियां" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArgAAAGBAQMAAAC3k1CUAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAADdJREFUeNrtwTEBAAAAwiD7p7bETmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDuhFgAARFpDB8AAAAASUVORK5CYII=" alt="बच्चों के लिए गणतंत्र दिवस से जुड़ी जानकारियां" title="बच्चों के लिए गणतंत्र दिवस से जुड़ी जानकारियां" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/09/featured-1-696x385.jpg"  width="696" height="385" /></a></div>
                <div class="td-module-meta-info">
                    <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-gantantra-divas-se-judi-jankariyan-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%97%E0%A4%A3%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8-%E0%A4%B8%E0%A5%87-%E0%A4%9C%E0%A5%81%E0%A5%9C%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" title="बच्चों के लिए गणतंत्र दिवस से जुड़ी जानकारियां">बच्चों के लिए गणतंत्र दिवस से जुड़ी जानकारियां</a></h3>                                        <span class="td-author-date">
                        <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                        <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-11T00:00:00+05:30" >January 11, 2024</time></span>                                            </span>
                </div>
            </div>

        </div>

        
        <div class="td_module_mx2 td_module_wrap td-animation-stack">

            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-republic-day-par-speech-taiyar-karne-ke-tips-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%80%E0%A4%9A-%E0%A4%A4%E0%A5%88%E0%A4%AF%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%9F%E0%A4%BF%E0%A4%AA%E0%A5%8D%E0%A4%B8/" rel="bookmark" class="td-image-wrap " title="गणतंत्र दिवस पर स्पीच: 5 सैंपल और टिप्स के साथ" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8AQMAAADL6a/PAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAA5JREFUKM9jGAWjYJABAAKUAAHoEAeuAAAAAElFTkSuQmCC" alt="बच्चों के लिए गणतंत्र दिवस पर स्पीच तैयार करने के टिप्स" title="गणतंत्र दिवस पर स्पीच: 5 सैंपल और टिप्स के साथ" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2019/07/14152437/15167102435a67296397343_untitled-design-36-696x373-1-80x60.jpg"  width="80" height="60" /></a></div>
            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-republic-day-par-speech-taiyar-karne-ke-tips-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95-%E0%A4%A1%E0%A5%87-%E0%A4%AA%E0%A4%B0-%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%80%E0%A4%9A-%E0%A4%A4%E0%A5%88%E0%A4%AF%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A5%87-%E0%A4%9F%E0%A4%BF%E0%A4%AA%E0%A5%8D%E0%A4%B8/" rel="bookmark" title="गणतंत्र दिवस पर स्पीच: 5 सैंपल और टिप्स के साथ">गणतंत्र दिवस पर स्पीच: 5 सैंपल और टिप्स के साथ</a></h3>                <div class="td-module-meta-info">
                                                            <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-11T00:00:00+05:30" >January 11, 2024</time></span>                                    </div>
            </div>

        </div>

        
        <div class="td_module_mx2 td_module_wrap td-animation-stack">

            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/magazine-makar-sankranti-2021-family-friends-ke-liye-message-wishes-quotes-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-2021-%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%AB%E0%A5%88%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A5%88%E0%A4%B8%E0%A5%87%E0%A4%9C-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8/" rel="bookmark" class="td-image-wrap " title="मकर संक्रांति 2024: बेस्ट कोट्स, मैसेज और विशेस परिवार और दोस्तों के लिए" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8AQMAAADL6a/PAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAA5JREFUKM9jGAWjYJABAAKUAAHoEAeuAAAAAElFTkSuQmCC" alt="मकर संक्रांति 2021" title="मकर संक्रांति 2024: बेस्ट कोट्स, मैसेज और विशेस परिवार और दोस्तों के लिए" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2021/01/12162245/782502208-H-696x476-1-80x60.jpg"  width="80" height="60" /></a></div>
            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/magazine-makar-sankranti-2021-family-friends-ke-liye-message-wishes-quotes-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-2021-%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B8-%E0%A4%94%E0%A4%B0-%E0%A4%AB%E0%A5%88%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%80-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A5%88%E0%A4%B8%E0%A5%87%E0%A4%9C-%E0%A4%95%E0%A5%8B%E0%A4%9F%E0%A5%8D%E0%A4%B8-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B8/" rel="bookmark" title="मकर संक्रांति 2024: बेस्ट कोट्स, मैसेज और विशेस परिवार और दोस्तों के लिए">मकर संक्रांति 2024: बेस्ट कोट्स, मैसेज और विशेस परिवार और दोस्तों के लिए</a></h3>                <div class="td-module-meta-info">
                                                            <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-08T00:00:54+05:30" >January 8, 2024</time></span>                                    </div>
            </div>

        </div>

        
        <div class="td_module_mx2 td_module_wrap td-animation-stack">

            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-makar-sankranti-par-nibandh-10-line-chhota-bada-essay-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए मकर संक्रांति पर निबंध" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8AQMAAADL6a/PAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAA5JREFUKM9jGAWjYJABAAKUAAHoEAeuAAAAAElFTkSuQmCC" alt="बच्चों के लिए मकर संक्रांति पर निबंध" title="बच्चों के लिए मकर संक्रांति पर निबंध" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2023/01/11125653/%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7-80x60.jpg"  width="80" height="60" /></a></div>
            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-makar-sankranti-par-nibandh-10-line-chhota-bada-essay-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7/" rel="bookmark" title="बच्चों के लिए मकर संक्रांति पर निबंध">बच्चों के लिए मकर संक्रांति पर निबंध</a></h3>                <div class="td-module-meta-info">
                                                            <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-08T00:00:30+05:30" >January 8, 2024</time></span>                                    </div>
            </div>

        </div>

        
        <div class="td_module_mx2 td_module_wrap td-animation-stack">

            <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/essay-on-pongal-in-hindi/" rel="bookmark" class="td-image-wrap " title="पोंगल पर निबंध (Essay On Pongal in Hindi)" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8AQMAAADL6a/PAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAA5JREFUKM9jGAWjYJABAAKUAAHoEAeuAAAAAElFTkSuQmCC" alt="Essay On Pongal in Hindi" title="पोंगल पर निबंध (Essay On Pongal in Hindi)" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2024/01/08175722/1598690083-80x60.jpg"  width="80" height="60" /></a></div>
            <div class="item-details">
                <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/essay-on-pongal-in-hindi/" rel="bookmark" title="पोंगल पर निबंध (Essay On Pongal in Hindi)">पोंगल पर निबंध (Essay On Pongal in Hindi)</a></h3>                <div class="td-module-meta-info">
                                                            <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-08T00:00:28+05:30" >January 8, 2024</time></span>                                    </div>
            </div>

        </div>

        </div></div> <!-- ./block --><div class="td_block_wrap td_block_2 td_block_widget tdi_54 td-pb-border-top td_block_template_1 td-column-1 td_block_padding"  data-td-block-uid="tdi_54" >
<style>
.td-theme-wrap .tdi_54 .td-pulldown-filter-link:hover,
            .td-theme-wrap .tdi_54 .td-subcat-item a:hover,
            .td-theme-wrap .tdi_54 .td-subcat-item .td-cur-simple-item {
                color: #cb9558;
            }

            .td-theme-wrap .tdi_54 .block-title > *,
            .td-theme-wrap .tdi_54 .td-subcat-dropdown:hover .td-subcat-more {
                background-color: #cb9558;
            }
            .td-theme-wrap .td-footer-wrapper .tdi_54 .block-title > * {
                padding: 6px 7px 5px;
                line-height: 1;
            }

            .td-theme-wrap .tdi_54 .block-title {
                border-color: #cb9558;
            }

            
            .td-theme-wrap .tdi_54 .td_module_wrap:hover .entry-title a,
            .td-theme-wrap .tdi_54 .td_quote_on_blocks,
            .td-theme-wrap .tdi_54 .td-opacity-cat .td-post-category:hover,
            .td-theme-wrap .tdi_54 .td-opacity-read .td-read-more a:hover,
            .td-theme-wrap .tdi_54 .td-opacity-author .td-post-author-name a:hover,
            .td-theme-wrap .tdi_54 .td-instagram-user a {
                color: #cb9558;
            }

            .td-theme-wrap .tdi_54 .td-next-prev-wrap a:hover,
            .td-theme-wrap .tdi_54 .td-load-more-wrap a:hover {
                background-color: #cb9558;
                border-color: #cb9558;
            }

            .td-theme-wrap .tdi_54 .td-read-more a,
            .td-theme-wrap .tdi_54 .td-weather-information:before,
            .td-theme-wrap .tdi_54 .td-weather-week:before,
            .td-theme-wrap .tdi_54 .td-exchange-header:before,
            .td-theme-wrap .td-footer-wrapper .tdi_54 .td-post-category,
            .td-theme-wrap .tdi_54 .td-post-category:hover {
                background-color: #cb9558;
            }
</style><script>var block_tdi_54 = new tdBlock();
block_tdi_54.id = "tdi_54";
block_tdi_54.atts = '{"custom_title":"LATEST","custom_url":"","block_template_id":"","header_color":"#cb9558","header_text_color":"#","accent_text_color":"#","m2_tl":"","m2_el":"","m6_tl":"","limit":"5","offset":"","el_class":"","post_ids":"","category_id":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","class":"td_block_widget tdi_54","block_type":"td_block_2","separator":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m2f_title_font_header":"","m2f_title_font_title":"Article title","m2f_title_font_settings":"","m2f_title_font_family":"","m2f_title_font_size":"","m2f_title_font_line_height":"","m2f_title_font_style":"","m2f_title_font_weight":"","m2f_title_font_transform":"","m2f_title_font_spacing":"","m2f_title_":"","m2f_cat_font_title":"Article category tag","m2f_cat_font_settings":"","m2f_cat_font_family":"","m2f_cat_font_size":"","m2f_cat_font_line_height":"","m2f_cat_font_style":"","m2f_cat_font_weight":"","m2f_cat_font_transform":"","m2f_cat_font_spacing":"","m2f_cat_":"","m2f_meta_font_title":"Article meta info","m2f_meta_font_settings":"","m2f_meta_font_family":"","m2f_meta_font_size":"","m2f_meta_font_line_height":"","m2f_meta_font_style":"","m2f_meta_font_weight":"","m2f_meta_font_transform":"","m2f_meta_font_spacing":"","m2f_meta_":"","m2f_ex_font_title":"Article excerpt","m2f_ex_font_settings":"","m2f_ex_font_family":"","m2f_ex_font_size":"","m2f_ex_font_line_height":"","m2f_ex_font_style":"","m2f_ex_font_weight":"","m2f_ex_font_transform":"","m2f_ex_font_spacing":"","m2f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","tdc_css_class":"tdi_54","tdc_css_class_style":"tdi_54_rand_style"}';
block_tdi_54.td_column_number = "1";
block_tdi_54.block_type = "td_block_2";
block_tdi_54.post_count = "5";
block_tdi_54.found_posts = "3799";
block_tdi_54.header_color = "#cb9558";
block_tdi_54.ajax_pagination_infinite_stop = "";
block_tdi_54.max_num_pages = "760";
tdBlocksArray.push(block_tdi_54);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">LATEST</span></h4></div><div id=tdi_54 class="td_block_inner">

	<div class="td-block-span12">

        <div class="td_module_2 td_module_wrap td-animation-stack">
            <div class="td-module-image">
                <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-lohri-par-nibandh-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B2%E0%A5%8B%E0%A4%B9%E0%A5%9C%E0%A5%80-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7/" rel="bookmark" class="td-image-wrap " title="लोहड़ी पर निबंध (Essay On Lohri in Hindi)" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACgAQMAAABOhoelAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAAB1JREFUWMPtwTEBAAAAwiD7p/ZdCGAAAAAAAAAQBxpAAAH8le3bAAAAAElFTkSuQmCC" alt="लोहड़ी 2023: बच्चों के लिए लोहड़ी पर निबंध" title="लोहड़ी पर निबंध (Essay On Lohri in Hindi)" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2021/01/12223145/Lohri-Festival-324x160.jpg"  width="324" height="160" /></a></div>                <a href="https://hindiparenting.firstcry.com/articles/category/%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a5%87-%e0%a4%ac%e0%a4%9a%e0%a5%8d%e0%a4%9a%e0%a5%87/%e0%a4%b6%e0%a4%bf%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be/" class="td-post-category">शिक्षा</a>            </div>
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-liye-lohri-par-nibandh-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B2%E0%A5%8B%E0%A4%B9%E0%A5%9C%E0%A5%80-%E0%A4%AA%E0%A4%B0-%E0%A4%A8%E0%A4%BF%E0%A4%AC%E0%A4%82%E0%A4%A7/" rel="bookmark" title="लोहड़ी पर निबंध (Essay On Lohri in Hindi)">लोहड़ी पर निबंध (Essay On Lohri in Hindi)</a></h3>

            <div class="td-module-meta-info">
                <span class="td-post-author-name"><a href="https://hindiparenting.firstcry.com/articles/author/samarhindicontent/">समर नक़वी</a> <span>-</span> </span>                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-08T00:00:09+05:30" >January 8, 2024</time></span>                            </div>


            <div class="td-excerpt">
                एक भारतीय के रूप में, हम भाग्यशाली हैं कि हमने विविध संस्कृतियों वाली भूमि पर जन्म लिया। भारत जैसे देश में रहने का हमें...            </div>

            
        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/magazine-makar-sankranti-ke-liye-special-recipes-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%B2-%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80%E0%A4%9C/" rel="bookmark" class="td-image-wrap " title="मकर संक्रांति के लिए 14 स्पेशल रेसिपीज" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="मकर संक्रांति के लिए 12 स्पेशल रेसिपीज" title="मकर संक्रांति के लिए 14 स्पेशल रेसिपीज" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2019/01/10114834/782502208-H-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/magazine-makar-sankranti-ke-liye-special-recipes-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%B2-%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80%E0%A4%9C/" rel="bookmark" title="मकर संक्रांति के लिए 14 स्पेशल रेसिपीज">मकर संक्रांति के लिए 14 स्पेशल रेसिपीज</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-08T00:00:00+05:30" >January 8, 2024</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/magazine-baccho-ke-liye-makar-sankranti-ke-tyohar-se-judi-jankariya-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%95%E0%A5%87-%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%8C%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A5%87-%E0%A4%9C%E0%A5%81%E0%A5%9C%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" class="td-image-wrap " title="बच्चों के लिए मकर संक्रांति के त्यौहार से जुड़ी जानकारियां" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="बच्चों के लिए मकर संक्रांति के त्यौहार से जुड़ी जानकारियां" title="बच्चों के लिए मकर संक्रांति के त्यौहार से जुड़ी जानकारियां" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2018/09/Information-About-Makar-Sankranti-Festival-For-Kids-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/magazine-baccho-ke-liye-makar-sankranti-ke-tyohar-se-judi-jankariya-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%95%E0%A4%B0-%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF-%E0%A4%95%E0%A5%87-%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%8C%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A5%87-%E0%A4%9C%E0%A5%81%E0%A5%9C%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%82/" rel="bookmark" title="बच्चों के लिए मकर संक्रांति के त्यौहार से जुड़ी जानकारियां">बच्चों के लिए मकर संक्रांति के त्यौहार से जुड़ी जानकारियां</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-01-08T00:00:00+05:30" >January 8, 2024</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-sabse-naye-aur-unique-naam/" rel="bookmark" class="td-image-wrap " title="400+ बच्चों के सबसे यूनिक नाम 2024 में" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="2024 में बच्चों के सबसे यूनिक नाम&gt;" title="400+ बच्चों के सबसे यूनिक नाम 2024 में" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2023/12/30121837/%E0%A4%B2%E0%A4%A1%E0%A4%BC%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%A8%E0%A4%BE%E0%A4%AE-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/baccho-ke-sabse-naye-aur-unique-naam/" rel="bookmark" title="400+ बच्चों के सबसे यूनिक नाम 2024 में">400+ बच्चों के सबसे यूनिक नाम 2024 में</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-12-30T00:00:21+05:30" >December 30, 2023</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 -->

	<div class="td-block-span12">

        <div class="td_module_6 td_module_wrap td-animation-stack">

        <div class="td-module-thumb"><a href="https://hindiparenting.firstcry.com/articles/coronavirus-new-variant-jn1-se-kaise-bache/" rel="bookmark" class="td-image-wrap " title="कोरोना के नए वैरिएंट जेएन.1 से कैसे बचें? (Covid 19 New Variant JN.1)" ><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt="Covid 19 New Variant JN 1" title="कोरोना के नए वैरिएंट जेएन.1 से कैसे बचें? (Covid 19 New Variant JN.1)" data-type="image_tag" data-img-url="https://cdn.cdnparenting.com/articles/2023/12/23002304/Covid-19-New-Variant-JN-1-100x70.jpg"  width="100" height="70" /></a></div>
        <div class="item-details">
            <h3 class="entry-title td-module-title"><a href="https://hindiparenting.firstcry.com/articles/coronavirus-new-variant-jn1-se-kaise-bache/" rel="bookmark" title="कोरोना के नए वैरिएंट जेएन.1 से कैसे बचें? (Covid 19 New Variant JN.1)">कोरोना के नए वैरिएंट जेएन.1 से कैसे बचें? (Covid 19 New...</a></h3>            <div class="td-module-meta-info">
                                                <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2023-12-22T19:19:17+05:30" >December 22, 2023</time></span>                            </div>
        </div>

        </div>

        
	</div> <!-- ./td-block-span12 --></div></div> <!-- ./block -->                        </div>
                    </div>
                    </div> <!-- /.td-pb-row -->
</div> <!-- /.td-container -->
</div> <!-- /.td-main-content-wrap -->

<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/106924862/300*250_ICICI_pop_up', [[225, 250], [225, 225]], 'div-gpt-ad-1629879079967-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script> 
<div class="popup-ad">
  
    <div id='div-gpt-ad-1629879079967-0' style='min-width: 225px; min-height: 225px;'>
      <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1629879079967-0'); });
      </script>
    </div> 
     <!-- <div class="ad-close left" data-icon-font="C"></div> -->
     <div class="ad-close_btn">
        <div class="ad-close left" data-icon-font="C" onClick=""></div>
    </div>
 </div>
<script>
       $(document).on("click", ".ad-close", function () {
         $(".popup-ad").hide();
    });
   </script>
<!-- Instagram -->

	
	
            <div class="tdc-footer-wrap ">

                <!-- Footer -->
				<div class="td-footer-wrapper td-footer-container td-container-wrap td-footer-template-4 ">
    <div class="td-container">

	    <div class="td-pb-row">
		    <div class="td-pb-span12">
                		    </div>
	    </div>

        <div class="td-pb-row">

            <div class="td-pb-span12">
                <div class="td-footer-info"><div class="footer-logo-wrap"><a href="https://hindiparenting.firstcry.com/"><img src="https://cdn.cdnparenting.com/articles/2019/08/06161801/Firstcry-hindi-white-2.webp" alt="FirstCry Parenting" title="FirstCry Parenting"/></a></div><div class="footer-text-wrap">इस वेबसाइट पर प्रकाशित लेख सामान्य जानकारी के लिए हैं व केवल शैक्षिक उद्देश्य से लिखे गए हैं तथा चिकित्सा क्षेत्र के किसी भी पेशेवर या डॉक्टर की सलाह के विकल्प के रूप में नहीं हैं। यदि आपको अपने स्वास्थ्य अथवा अपने शिशु या बच्चे के स्वास्थ्य के बारे में कोई भी चिंता या समस्या है तो कृपया अपने डॉक्टर से परामर्श करें। आप यह भी स्वीकार करते हैं कि साइट पर संवादात्मक विषयों पर संचार की सीमित प्रकृति के कारण कोई भी सहायता या आपको प्राप्त प्रतिक्रिया अकेले लेखक द्वारा प्रदान की जाती है। HindiParenting.Firstcry.com किसी भी त्रुटि, चूक या मिथ्या निरूपण के लिए जिम्मेदार नहीं है। आपके द्वारा इस साइट का उपयोग यह दर्शाता है कि आप उपयोग की शर्तों से बंधे होने के लिए सहमत हैं। 
</div><div class="footer-social-wrap td-social-style-2"></div></div>            </div>
        </div>
    </div>
</div>
                <!-- Sub Footer -->
				    <div class="td-sub-footer-container td-container-wrap ">
        <div class="td-container">
            <div class="td-pb-row">
                <div class="td-pb-span td-sub-footer-menu">
                    <div class="menu-td-demo-footer-menu-container"><ul id="menu-td-demo-footer-menu" class="td-subfooter-menu"><li id="menu-item-256291" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-first td-menu-item td-normal-menu menu-item-256291"><a href="https://hindiparenting.firstcry.com/cookie-privacy-policy/">Cookie &#038; Privacy Policy</a></li>
<li id="menu-item-256292" class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-256292"><a href="https://hindiparenting.firstcry.com/terms-of-use/">Terms of Use</a></li>
<li id="menu-item-256555" class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-256555"><a href="https://hindiparenting.firstcry.com/%e0%a4%b9%e0%a4%ae%e0%a4%be%e0%a4%b0%e0%a5%87-%e0%a4%ac%e0%a4%be%e0%a4%b0%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82/">हमारे बारे में</a></li>
</ul></div>                </div>

                <div class="td-pb-span td-sub-footer-copy">
                    © 2010-2023 HindiParenting.FirstCry.com. All rights reserved. This website can be best viewed in resolution width of 1024 and above.
                </div>
            </div>
        </div>
    </div>
            </div><!--close td-footer-wrap-->
			
</div><!--close td-outer-wrap-->


<script>(function(){var advanced_ads_ga_UID="FCAdSenseHindi",advanced_ads_ga_anonymIP=!!1;function AdvAdsAdBlockCounterGA(t){this.UID=t,this.analyticsObject="function"==typeof gtag;var n=this;return this.count=function(){gtag("event","AdBlock",{event_category:"Advanced Ads",event_label:"Yes",non_interaction:!0,send_to:n.UID})},function(){if(!n.analyticsObject){var e=document.createElement("script");e.src="https://www.googletagmanager.com/gtag/js?id="+t,e.async=!0,document.body.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},n.analyticsObject=!0,gtag("js",new Date)}var a={send_page_view:!1,transport_type:"beacon"};window.advanced_ads_ga_anonymIP&&(a.anonymize_ip=!0),gtag("config",t,a)}(),this}window.advanced_ads_check_adblocker=function(t){var n=[],e=null;function a(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)}).call(window,t)}return a((function(){var t=document.createElement("div");t.innerHTML="&nbsp;",t.setAttribute("class","ad_unit ad-unit text-ad text_ad pub_300x250"),t.setAttribute("style","width: 1px !important; height: 1px !important; position: absolute !important; left: 0px !important; top: 0px !important; overflow: hidden !important;"),document.body.appendChild(t),a((function(){var a=window.getComputedStyle&&window.getComputedStyle(t),o=a&&a.getPropertyValue("-moz-binding");e=a&&"none"===a.getPropertyValue("display")||"string"==typeof o&&-1!==o.indexOf("about:");for(var i=0,d=n.length;i<d;i++)n[i](e);n=[]}))})),function(t){null!==e?t(e):n.push(t)}}(),advanced_ads_check_adblocker((function(t){t&&new AdvAdsAdBlockCounterGA(advanced_ads_ga_UID).count()}));})();</script><script>
       $(document).on("click", ".ad-close", function () {
         $(".popup-ad").hide();
    });
   </script><div  class="paren-5373d5be9f1b6b642b53405c08400e06 paren-parentinghindi_stickyfooter_ros_msite" id="paren-5373d5be9f1b6b642b53405c08400e06"></div>

    <!--

        Theme: Newspaper by tagDiv.com 2021
        Version: 11 (rara)
        Deploy mode: deploy
        
        uid: 65c54f7482701
    -->

    
<!-- Custom css from theme panel -->
<style type="text/css" media="screen">
/* custom css theme panel */
.paren-adlabel { font-size: 0.6em; }
</style>

  
<!-- how to schema end here -->
    <script>
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/106924862/300*250_ICICI_pop_up', [[255, 250], [225, 250]], 'div-gpt-ad-1576130451335-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    </script>

   <style type="text/css">
        .popup-ad {
              width: 240px;
              height: 250px;
              position: fixed;
              bottom: 44px;
              right: 10px;
              z-index: 9;
              cursor: pointer;
          }
          .popup-ad .ad-close {
              position: absolute;
              top: 0;
              right: 0;
          }
          .ad-close-icon {
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    height: 10px;
    width: 10px;
    background: #000;
    cursor: pointer;
}
        @media screen and (min-width: 320px) and (max-width : 767px){         
          .slide-controls .custom-dots {
              bottom: 72px !important;
          }
          .popup-ad{
              right: 5px !important;
          }
      }
    </style>


<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-V334B9J80D" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) GTM-K5WW8LV--><script type='text/javascript' id='toc-front-js-extra'>
/* <![CDATA[ */
var tocplus = {"smooth_scroll":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/table-of-contents-plus/front.min.js?ver=2106' id='toc-front-js'></script>
<script type='text/javascript' id='advanced-ads-pro/cache_busting-js-extra'>
/* <![CDATA[ */
var advanced_ads_pro_ajax_object = {"ajax_url":"https:\/\/hindiparenting.firstcry.com\/wp-admin\/admin-ajax.php","lazy_load_module_enabled":"","lazy_load":{"default_offset":0,"offsets":[]},"moveintohidden":"","wp_timezone_offset":"19800"};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-pro/assets/js/base.min.js?ver=2.16.0' id='advanced-ads-pro/cache_busting-js'></script>
<script type='text/javascript' id='advanced-ads-layer-footer-js-js-extra'>
/* <![CDATA[ */
var advanced_ads_layer_settings = {"layer_class":"paren-layer","placements":[]};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-layer/public/assets/js/layer.js?ver=1.7.2' id='advanced-ads-layer-footer-js-js'></script>
<script type='text/javascript' id='advanced-ads-responsive-js-extra'>
/* <![CDATA[ */
var advanced_ads_responsive = {"reload_on_resize":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-responsive/public/assets/js/script.js?ver=1.10.2' id='advanced-ads-responsive-js'></script>
<script type='text/javascript' id='advanced-ads-sticky-footer-js-js-extra'>
/* <![CDATA[ */
var advanced_ads_sticky_settings = {"check_position_fixed":"","sticky_class":"paren-sticky","placements":["parentinghindi_stickyfooter_ros_msite","parentinghindi_stickyfooter_amp"]};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-sticky-ads/public/assets/js/sticky.js?ver=1.8.1' id='advanced-ads-sticky-footer-js-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-pro/assets/js/advanced-ads-pro.min.js?ver=2.16.0' id='advanced-ads-pro/front-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/underscore.min.js?ver=1.13.1' id='underscore-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/td-cloud-library/assets/js/js_posts_autoload.min.js?ver=45456ad3a6d583e9cee0a9fe2cdd86cb' id='tdb_js_posts_autoload-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tagdiv_theme.min.js?ver=11' id='td-site-min-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/comment-reply.min.js?ver=5.8.6' id='comment-reply-js'></script>
<script type='text/javascript' id='advadsTrackingScript-js-extra'>
/* <![CDATA[ */
var advadsTracking = {"impressionActionName":"aatrack-records","clickActionName":"aatrack-click","targetClass":"paren-target","blogId":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-tracking/public/assets/js/dist/tracking.min.js?ver=2.2.0' id='advadsTrackingScript-js'></script>
<script type='text/javascript' id='advadsTrackingGAFront-js-extra'>
/* <![CDATA[ */
var advadsGALocale = {"Impressions":"Impressions","Clicks":"Clicks"};
/* ]]> */
</script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-tracking/public/assets/js/dist/ga-tracking.min.js?ver=2.2.0' id='advadsTrackingGAFront-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/advanced-ads-tracking/public/assets/js/dist/delayed.min.js?ver=2.2.0' id='advadsTrackingDelayed-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-content/plugins/td-cloud-library/assets/js/js_files_for_front.min.js?ver=45456ad3a6d583e9cee0a9fe2cdd86cb' id='tdb_js_files_for_front-js'></script>
<script type='text/javascript' src='https://hindiparenting.firstcry.com/wp-includes/js/wp-embed.min.js?ver=5.8.6' id='wp-embed-js'></script>
<div  class="paren-e68dc109f1cc01b1af4038633e571d77 paren-parentinghindi_footer_ros_desktop" id="paren-e68dc109f1cc01b1af4038633e571d77"></div><div  class="paren-33d56dc1f6918a0e2c35d916787b3720 paren-parentinghindi_footer_ros_msite" id="paren-33d56dc1f6918a0e2c35d916787b3720"></div><div  class="paren-d665b4b0e12ead4371699a28340c6154 paren-parentinghindi_header_ros_desktop" id="paren-d665b4b0e12ead4371699a28340c6154"></div><div  class="paren-e4a2c00dabf115265d5973de420dd127 paren-parentinghindi_header_ros_msite" id="paren-e4a2c00dabf115265d5973de420dd127"></div><script>window.advads_admin_bar_items = [{"title":"amp_head","type":"placement"},{"title":"ParentingHindi_stickyfooter_AMP","type":"placement"}];</script><script>window.advads_passive_placements = {"parentinghindi_stickyfooter_ros_msite_1":{"elementid":["paren-5373d5be9f1b6b642b53405c08400e06"],"ads":{"268411":{"id":268411,"title":"ParentingHindi_StickyFooter_ROS_Msite","expiry_date":0,"visitors":[{"type":"mobile","operator":"is"}],"content":"<script>advads.move(\"#paren-5373d5be9f1b6b642b53405c08400e06\", \"\", {  });<\/script><div class=\"paren-parentinghindi_stickyfooter_ros_msite paren-sticky\" style=\"margin-left: auto; margin-right: auto; text-align: center; position: fixed; bottom: 0; z-index: 10000; \" id=\"paren-99174618\"><span class=\"advads-close-button\" onclick=\"void(0)\" title=\"close\" style=\"width: 15px; height: 15px; background: #fff; position: relative; line-height: 15px; text-align: center; cursor: pointer; z-index: 10000;right:-15px;float: right; margin-left: -15px;\">\u00d7<\/span><script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script>\r\n<script>\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {\r\n    googletag.defineSlot('\/84382175\/ParentingHindi\/ParentingHindi_StickyFooter_ROS_Msite', [320, 50], 'div-gpt-ad-1589441455712-0').addService(googletag.pubads());\r\n    googletag.pubads().enableSingleRequest();\r\n    googletag.enableServices();\r\n  });\r\n<\/script>\r\n<!-- \/84382175\/ParentingHindi\/ParentingHindi_StickyFooter_ROS_Msite -->\r\n<div id='div-gpt-ad-1589441455712-0' style='width: 320px; height: 50px;'>\r\n  <script>\r\n    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1589441455712-0'); });\r\n  <\/script>\r\n<\/div><\/div><script>( window.advanced_ads_ready || jQuery( document ).ready ).call( null, function() {var wrapper_id = \"#paren-99174618\"; var $wrapper = jQuery( wrapper_id );window.advanced_ads_sticky_items = window.advanced_ads_sticky_items || {};advanced_ads_sticky_items[ \"paren-99174618\" ] = { \"can_convert_to_abs\": \"1\", \"initial_css\": $wrapper.attr( \"style\" ), \"modifying_func\": function() { $wrapper.css({ \"-webkit-transform\": \"translateX(-50%)\", \"-moz-transform\": \"translateX(-50%)\", \"transform\": \"translateX(-50%)\", \"left\": \"50%\", \"margin-right\": \"-50%\" });jQuery( \"#paren-99174618\" ).on( \"click\", \"span\", function() { advads.close( \"#paren-99174618\" ); });}};\nif ( advads.wait_for_images ) { \n    var sticky_wait_for_images_time = new Date().getTime();\n    $wrapper.data( \"sticky_wait_for_images_time\", sticky_wait_for_images_time );\n    advads.wait_for_images( $wrapper, function() {\n        \/\/ At the moment when this function is called, it is possible that \n        \/\/ the placement has been updated using \"Reload ads on resize\" feature of Responsive add-on \n        if ( $wrapper.data( \"sticky_wait_for_images_time\" ) === sticky_wait_for_images_time ) {\n            advanced_ads_sticky_items[ \"paren-99174618\" ][\"modifying_func\"]();\n        } \n    } );\n} else { \n    advanced_ads_sticky_items[ \"paren-99174618\" ][\"modifying_func\"]();\n};\n});<\/script>","once_per_page":0,"debugmode":false,"blog_id":1,"type":"plain","position":"center","tracking_enabled":false,"privacy":{"ignore":false,"needs_consent":false}}},"type":"ad","id":268411,"placement_info":{"type":"sticky_footer","name":"ParentingHindi_StickyFooter_ROS_Msite","item":"ad_268411","options":{"close":{"enabled":"1","where":"outside","side":"right","timeout":"0"}},"id":"parentinghindi_stickyfooter_ros_msite"},"test_id":null,"inject_before":[""]},"parentinghindi_footer_ros_desktop_3":{"elementid":["paren-e68dc109f1cc01b1af4038633e571d77"],"ads":{"255920":{"id":255920,"title":"ParentingHindi_Footer_ROS_Desktop","expiry_date":0,"visitors":[{"type":"mobile","operator":"is_not"}],"content":"<div class=\"paren-parentinghindi_footer_ros_desktop\" id=\"paren-901729054\"><script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script>\r\n<script>\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {\r\n    googletag.defineSlot('\/84382175\/ParentingHindi\/parentinghindi_footer_hp_desktop_728x90_970x90', [[970, 90], [728, 90]], 'div-gpt-ad-1565248601651-0').addService(googletag.pubads());\r\n    googletag.pubads().enableSingleRequest();\r\n    googletag.enableServices();\r\n  });\r\n<\/script>\r\n<!-- \/84382175\/ParentingHindi\/parentinghindi_footer_hp_desktop_728x90_970x90 -->\r\n<div id='div-gpt-ad-1565248601651-0'>\r\n  <script>\r\n    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1565248601651-0'); });\r\n  <\/script>\r\n<\/div><\/div>","once_per_page":0,"debugmode":false,"blog_id":1,"type":"plain","position":"","tracking_enabled":false,"privacy":{"ignore":false,"needs_consent":false}}},"type":"ad","id":255920,"placement_info":{"type":"custom_position","name":"ParentingHindi_Footer_ROS_Desktop","item":"ad_255920","options":{"inject_by":"pro_custom_element","pro_custom_element":"div.footer-logo-wrap > a > img","container_id":"#c77000ecd3de4b9a373400114e14f1194","placement_position":""},"id":"parentinghindi_footer_ros_desktop"},"test_id":null,"inject_before":["<script>advads.move(\"#paren-e68dc109f1cc01b1af4038633e571d77\", \"div.footer-logo-wrap > a > img\", { method: \"insertBefore\" });<\/script>"]},"parentinghindi_footer_ros_msite_5":{"elementid":["paren-33d56dc1f6918a0e2c35d916787b3720"],"ads":{"255967":{"id":255967,"title":"ParentingHindi_Footer_ROS_Msite","expiry_date":0,"visitors":[{"type":"mobile","operator":"is"}],"content":"<div class=\"paren-parentinghindi_footer_ros_msite\" style=\"margin-left: auto; margin-right: auto; text-align: center; \" id=\"paren-1686588434\"><script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script>\r\n<script>\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {\r\n    googletag.defineSlot('\/84382175\/ParentingHindi\/parentinghindi_footer_ros_msite_300x250_320x50_320x100', [[320, 200], [320, 100], [300, 250]], 'div-gpt-ad-1565265729713-0').addService(googletag.pubads());\r\n    googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n  });\r\n<\/script>\r\n<!-- \/84382175\/ParentingHindi\/parentinghindi_footer_ros_msite_300x250_320x50_320x100 -->\r\n<div id='div-gpt-ad-1565265729713-0'>\r\n  <script>\r\n    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1565265729713-0'); });\r\n  <\/script>\r\n<\/div><\/div>","once_per_page":0,"debugmode":false,"blog_id":1,"type":"plain","position":"center","tracking_enabled":false,"privacy":{"ignore":false,"needs_consent":false}}},"type":"ad","id":255967,"placement_info":{"type":"custom_position","name":"ParentingHindi_Footer_ROS_Msite","item":"ad_255967","options":{"inject_by":"pro_custom_element","pro_custom_element":"div.footer-logo-wrap > a > img","container_id":"#c52bba585f7e2cf5ec5b595cb58b0e54e","placement_position":""},"id":"parentinghindi_footer_ros_msite"},"test_id":null,"inject_before":["<script>advads.move(\"#paren-33d56dc1f6918a0e2c35d916787b3720\", \"div.footer-logo-wrap > a > img\", { method: \"insertBefore\" });<\/script>"]},"parentinghindi_header_ros_desktop_7":{"elementid":["paren-d665b4b0e12ead4371699a28340c6154"],"ads":{"255917":{"id":255917,"title":"ParentingHindi_Header_ROS_Desktop","expiry_date":0,"visitors":[{"type":"mobile","operator":"is_not"}],"content":"<div class=\"paren-parentinghindi_header_ros_desktop\" style=\"float: left; margin-top: 30px; \" id=\"paren-644024884\"><script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script>\r\n<script>\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {\r\n    googletag.defineSlot('\/84382175\/ParentingHindi\/parentinghindi_header_hp_desktop_728x90', [728, 90], 'div-gpt-ad-1565248157120-0').addService(googletag.pubads());\r\n    googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n  });\r\n<\/script>\r\n<!-- \/84382175\/ParentingHindi\/parentinghindi_header_hp_desktop_728x90 -->\r\n<div id='div-gpt-ad-1565248157120-0' style='width: 728px; height: 90px;'>\r\n  <script>\r\n    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1565248157120-0'); });\r\n  <\/script>\r\n<\/div><\/div>","once_per_page":0,"debugmode":false,"blog_id":1,"type":"plain","position":"right","tracking_enabled":false,"privacy":{"ignore":false,"needs_consent":false}}},"type":"ad","id":255917,"placement_info":{"type":"custom_position","name":"ParentingHindi_Header_ROS_Desktop","item":"ad_255917","options":{"inject_by":"pro_custom_element","pro_custom_element":"div.td-banner-wrap-full.td-logo-wrap-full.td-container-wrap > div.td-container.td-header-row.td-header-header","container_id":"#cb7d97894523d9a5b5254f3c754f7ad8d","placement_position":"left"},"id":"parentinghindi_header_ros_desktop"},"test_id":null,"inject_before":["<script>advads.move(\"#paren-d665b4b0e12ead4371699a28340c6154\", \"div.td-banner-wrap-full.td-logo-wrap-full.td-container-wrap > div.td-container.td-header-row.td-header-header\", { method: \"appendTo\" });<\/script>"]},"parentinghindi_header_ros_msite_9":{"elementid":["paren-e4a2c00dabf115265d5973de420dd127"],"ads":{"255966":{"id":255966,"title":"ParentingHindi_Header_ROS_Msite","expiry_date":0,"visitors":[{"type":"mobile","operator":"is"}],"content":"<div class=\"paren-parentinghindi_header_ros_msite\" style=\"margin-left: auto; margin-right: auto; text-align: center; \" id=\"paren-1533694580\"><script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script>\r\n<script>\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {\r\n    googletag.defineSlot('\/84382175\/ParentingHindi\/parentinghindi_header_ros_msite_320x50_320x100_300x250', [[375, 96], [320, 50], [414, 96], [320, 100], [411, 96], [360, 96]], 'div-gpt-ad-1592217806164-0').addService(googletag.pubads());\r\n    googletag.pubads().enableSingleRequest();\r\n    googletag.enableServices();\r\n  });\r\n<\/script>\r\n<!-- \/84382175\/ParentingHindi\/parentinghindi_header_ros_msite_320x50_320x100_300x250 -->\r\n<div id='div-gpt-ad-1592217806164-0'>\r\n  <script>\r\n    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1592217806164-0'); });\r\n  <\/script>\r\n<\/div><\/div>","once_per_page":0,"debugmode":false,"blog_id":1,"type":"plain","position":"center","tracking_enabled":false,"privacy":{"ignore":false,"needs_consent":false}}},"type":"ad","id":255966,"placement_info":{"type":"custom_position","name":"ParentingHindi_Header_ROS_Msite","item":"ad_255966","options":{"inject_by":"pro_custom_element","pro_custom_element":"div.td-header-wrap > div.td-banner-wrap-full.td-logo-wrap-full > div.td-container.td-header-row","container_id":"#c56e7c4550faa40f2f0f3d9ed6dda6307","placement_position":"center"},"id":"parentinghindi_header_ros_msite"},"test_id":null,"inject_before":["<script>advads.move(\"#paren-e4a2c00dabf115265d5973de420dd127\", \"div.td-header-wrap > div.td-banner-wrap-full.td-logo-wrap-full > div.td-container.td-header-row\", { method: \"insertBefore\" });<\/script>"]}};
( window.advanced_ads_ready || jQuery( document ).ready ).call( null, function() {if ( !window.advanced_ads_pro ) {console.log("Advanced Ads Pro: cache-busting can not be initialized");} });</script><script>!function(){window.advanced_ads_ready_queue=window.advanced_ads_ready_queue||[],advanced_ads_ready_queue.push=window.advanced_ads_ready;for(var d=0,a=advanced_ads_ready_queue.length;d<a;d++)advanced_ads_ready(advanced_ads_ready_queue[d])}();</script>
<!-- JS generated by theme -->

<script>
    
</script>

<script id="paren-tracking">var advads_tracking_ads = {};var advads_tracking_urls = {"1":"https:\/\/hindiparenting.firstcry.com\/wp-admin\/admin-ajax.php"};var advads_tracking_methods = {"1":"ga"};var advads_tracking_parallel = {"1":false};var advads_tracking_linkbases = {"1":"https:\/\/hindiparenting.firstcry.com\/linkout\/"};var advads_gatracking_uids = {"1":"UA-23731137-9"};var advads_gatracking_allads = {"1":{"280179":{"title":"Aniview_Regional_Hindi_AMP","target":"","impression":false,"click":false},"280180":{"title":"Aniview_Regional_Hindi_Web","target":"","impression":false,"click":false},"269885":{"title":"225*250_Pop_up","target":"","impression":false,"click":false},"268617":{"title":"parenting.Hindi_outstreamvideo_InContent_Msite","target":"","impression":false,"click":false},"268618":{"title":"parenting.Hindi_outstreamvideo_InContent_DSK","target":"","impression":false,"click":false},"268468":{"title":"Vdo.ai_Inarticle_video","target":"","impression":false,"click":false},"268413":{"title":"ParentingHindi_Para47_AMP","target":"","impression":false,"click":false},"268412":{"title":"ParentingHindi_Para45_AMP","target":"","impression":false,"click":false},"268411":{"title":"ParentingHindi_StickyFooter_ROS_Msite","target":"","impression":false,"click":false},"268395":{"title":"InArticle_Para20_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268394":{"title":"InArticle_Para19_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268393":{"title":"InArticle_Para18_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268392":{"title":"InArticle_Para17_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268391":{"title":"InArticle_Para16_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268390":{"title":"InArticle_Para15_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268389":{"title":"InArticle_Para14_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268388":{"title":"InArticle_Para13_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268387":{"title":"InArticle_Para12_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268386":{"title":"InArticle_Para11_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268385":{"title":"InArticle_Para10_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268384":{"title":"InArticle_Para9_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268383":{"title":"InArticle_Para8_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268382":{"title":"InArticle_Para7_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268381":{"title":"InArticle_Para6_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268380":{"title":"InArticle_Para5_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268379":{"title":"InArticle_Para4_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268378":{"title":"InArticle_Para3_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268377":{"title":"InArticle_Para2_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268376":{"title":"InArticle_Para1_Desktop_ParentingHindi","target":"","impression":false,"click":false},"268374":{"title":"ParentingHindi_InArticle_Para39_Msite","target":"","impression":false,"click":false},"268373":{"title":"ParentingHindi_InArticle_Para38_Msite","target":"","impression":false,"click":false},"268372":{"title":"ParentingHindi_InArticle_Para37_Msite","target":"","impression":false,"click":false},"268371":{"title":"ParentingHindi_InArticle_Para36_Msite","target":"","impression":false,"click":false},"268370":{"title":"ParentingHindi_InArticle_Para35_Msite","target":"","impression":false,"click":false},"268369":{"title":"ParentingHindi_InArticle_Para34_Msite","target":"","impression":false,"click":false},"268368":{"title":"ParentingHindi_InArticle_Para33_Msite","target":"","impression":false,"click":false},"268367":{"title":"ParentingHindi_InArticle_Para32_Msite","target":"","impression":false,"click":false},"268366":{"title":"ParentingHindi_InArticle_Para31_Msite","target":"","impression":false,"click":false},"256123":{"title":"ParentingHindi_stickyfooter_AMP","target":"","impression":false,"click":false},"256120":{"title":"ParentingHindi_EndOfTheArticle_AMP","target":"","impression":false,"click":false},"256113":{"title":"ParentingHindi_Para43_AMP","target":"","impression":false,"click":false},"256110":{"title":"ParentingHindi_Para41_AMP","target":"","impression":false,"click":false},"256105":{"title":"ParentingHindi_Para38_AMP","target":"","impression":false,"click":false},"256102":{"title":"ParentingHindi_Para35_AMP","target":"","impression":false,"click":false},"256101":{"title":"ParentingHindi_Para32_AMP","target":"","impression":false,"click":false},"256097":{"title":"ParentingHindi_Para29_AMP","target":"","impression":false,"click":false},"256096":{"title":"ParentingHindi_Para26_AMP","target":"","impression":false,"click":false},"256095":{"title":"ParentingHindi_Para23_AMP","target":"","impression":false,"click":false},"256093":{"title":"ParentingHindi_Para20_AMP","target":"","impression":false,"click":false},"256091":{"title":"ParentingHindi_Para17_AMP","target":"","impression":false,"click":false},"256090":{"title":"ParentingHindi_Para14_AMP","target":"","impression":false,"click":false},"256089":{"title":"ParentingHindi_Para11_AMP","target":"","impression":false,"click":false},"256087":{"title":"ParentingHindi_Para8_AMP","target":"","impression":false,"click":false},"256084":{"title":"ParentingHindi_Para5_AMP","target":"","impression":false,"click":false},"256083":{"title":"ParentingHindi_Para2_AMP","target":"","impression":false,"click":false},"256079":{"title":"ParentingHindi_Para1_AMP","target":"","impression":false,"click":false},"256073":{"title":"ParentingHindi_Header_AMP","target":"","impression":false,"click":false},"256071":{"title":"ParentingHindi_Footer_AMP","target":"","impression":false,"click":false},"256070":{"title":"amp_head","target":"","impression":false,"click":false},"256001":{"title":"ParentingHindi_afterendofarticle_msite","target":"","impression":false,"click":false},"256000":{"title":"ParentingHindi_InArticle_Para30_Msite","target":"","impression":false,"click":false},"255999":{"title":"ParentingHindi_InArticle_Para26_Msite","target":"","impression":false,"click":false},"255998":{"title":"ParentingHindi_InArticle_Para23_Msite","target":"","impression":false,"click":false},"255997":{"title":"ParentingHindi_InArticle_Para20_Msite","target":"","impression":false,"click":false},"255996":{"title":"ParentingHindi_InArticle_Para17_Msite","target":"","impression":false,"click":false},"255995":{"title":"ParentingHindi_InArticle_Para14_Msite","target":"","impression":false,"click":false},"255994":{"title":"ParentingHindi_InArticle_Para11_Msite","target":"","impression":false,"click":false},"255993":{"title":"ParentingHindi_InArticle_Para8_Msite","target":"","impression":false,"click":false},"255992":{"title":"ParentingHindi_InArticle_Para5_Msite","target":"","impression":false,"click":false},"255991":{"title":"ParentingHindi_InArticle_Para2","target":"","impression":false,"click":false},"255983":{"title":"ParentingHindi_InArticle_Para1","target":"","impression":false,"click":false},"255967":{"title":"ParentingHindi_Footer_ROS_Msite","target":"","impression":false,"click":false},"255966":{"title":"ParentingHindi_Header_ROS_Msite","target":"","impression":false,"click":false},"255946":{"title":"ParentingHindi_BTF_RHS_Article_Desktop","target":"","impression":false,"click":false},"255945":{"title":"ParentingHindi_BTF_Category_RHS_Desktop","target":"","impression":false,"click":false},"255925":{"title":"ParentingHindi_ATF_RHS_Article_Desktop","target":"","impression":false,"click":false},"255924":{"title":"ParentingHindi_ATF_Category_RHS_Desktop","target":"","impression":false,"click":false},"255921":{"title":"ParentingHindi_Mid-Article_Desktop","target":"","impression":false,"click":false},"255920":{"title":"ParentingHindi_Footer_ROS_Desktop","target":"","impression":false,"click":false},"255917":{"title":"ParentingHindi_Header_ROS_Desktop","target":"","impression":false,"click":false}}};var advads_gatracking_anonym = false;var advads_gatracking_transmitpageqs = {};</script>
</body>
</html>