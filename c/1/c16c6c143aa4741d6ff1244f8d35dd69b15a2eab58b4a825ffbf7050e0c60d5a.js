countryip({"name":"Spain","ip":"147.83.130.27","country_3":"ESP","country":"ES"})
"ready",condition:B.env.b_personalized_layout_id}).run(function(e){function t(e){_i_("f04:11397053");var t=e("utils/throttled"),n=e("utils/inviewport"),i=[{selector:".js-ds-layout-events-m-usps",id:1001},{selector:".js-ds-layout-events-recommended-communities",id:1002},{selector:".js-ds-layout-events-seo-property-types",id:1003},{selector:".js-ds-layout-events-recommended-destination",id:1004},{selector:".js-ds-layout-events-sign-in",id:1005},{selector:'[data-capla-component="b-index-lp-web-mfe/GeniusBenefitsCarousel"]',id:1006},{selector:".js-ds-layout-events-beach-baby-shark",id:1007},{selector:".js-ds-layout-events-trip-types-themes",id:1008},{selector:".js-ds-layout-events-ls-destinations-carousel",id:1009},{selector:".js-ds-layout-events-pending-review",id:1010},{selector:".js-ds-layout-events-join-app-banner",id:1012},{selector:".js-ds-layout-events-recently-viewed-properties",id:1013},{selector:".js-ds-layout-events-cross-sell-exposure",id:1015},{selector:".js-ds-layout-events-bh-awareness-campaign",id:1016},{selector:".js-ds-layout-events-incentive-promo-banner",id:1017},{selector:".js-ds-layout-events-deals-campaign-banner",id:1018},{selector:".js-ds-layout-events-back-to-travel",id:1019},{selector:".js-ds-layout-events-bh-high-comfort-carousel",id:1020},{selector:".js-ds-layout-events-opentable-signin-banner",id:1021},{selector:".js-ds-layout-events-opentable-genius-banner",id:1022},{selector:".js-ds-layout-events-similar-properties",id:1023},{selector:".js-ds-layout-events-wallet-onboarding-banner",id:1024},{selector:".js-ds-layout-events-quiz-on-index-banner",id:1025},{selector:".js-ds-layout-recently-searched-properties",id:1026},{selector:".js-ds-layout-destination-postcards",id:1028},{selector:".js-ds-layout-destination-postcards",id:1029},{selector:".js-ds-layout-recommendations-carousel",id:1030},{selector:".js-ds-layout-events-bh_promotions",id:1031},{selector:".js-ds-layout-events-domestic-destinations-carousel",id:1034},{selector:".js-ds-layout-events-alternate-nearby-carousel",id:1035},{selector:".js-ds-layout-ls_recommended_properties_carousel",id:1036}],a=i.reduce(function(e,t,n){return _i_("f04:fb7ed87d"),e.push({el:$(t.selector),index:t.id}),_r_(e)},[]),r=t(function(){_i_("f04:ae5a5c98");var t=[];a.forEach(function(e){_i_("f04:59c74ebe"),n(e.el)?o(B.env.b_personalized_layout_id,"view",e.index):t.push(e),_r_()}),a.length?a=t:$(window).off("scroll",r),_r_()},10);function o(e,t,n){_i_("f04:c292e405"),$.ajax({type:"post",dataType:"json",url:"/sendlayoutevents",data:{layout:e,action:t,widget:n,has_open_bookings:B.env.fe_pers_upcoming}}),_r_()}r(),$(window).scroll(r),i.forEach(function(e){var t,n;_i_("f04:fe426576"),t=e.clickSelector||e.selector,n=e.id,_i_("f04:783931fa"),$(t).click(function(){_i_("f04:25aaa3ba"),o(B.env.b_personalized_layout_id,"click",n),_r_()}),_r_(),_r_()}),_r_()}_i_("f04:29447236"),setTimeout(function(){_i_("f04:1f66ec6c"),t(e),_r_()},5e3),_r_()}),B.when({action:"index",events:"ready"}).run(function(e){"use strict";_i_("f04:b314fe84");var t=e("et"),n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;n<(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)?t.stage("cCHObAURAfVaeYPZZZECVVDJdDBKWPHDDWe",6):t.stage("cCHObAURAfVaeYPZZZECVVDJdDBKWPHDDWe",700<=n?7:8),_r_()}),B.when({action:"index",events:"ready"}).run(function(e){"use strict";_i_("f04:e73d8db1");var t=e("et"),n=e("utils/throttled"),i=window.innerHeight/2,a=n(function(){_i_("f04:d7a11169"),window.scrollY>=i&&(t.customGoal("cCHObAURAfVaeYPZZZECVVDJdDBKWPHDDWe",4),document.removeEventListener("scroll",a,!0)),_r_()},300);document.addEventListener("scroll",a,!0),_r_()}),B.define("component/gta/bottomsheets/interstitial-bottomsheet",function(e,t,n){_i_("f04:c24cb42a");var i=e("component"),a=e("dismiss-item"),r=window.BUI,o=e("jquery");n.exports=i.extend({init:function(){_i_("f04:9b689810");var t=this,e=parseInt(o.cookie("clba"),10)||0,n=this.$el.data("dismissibleId"),i=this.$el.data("placement");if("search_results"!==i){if(4<e||window.PCM&&1===window.PCM.isCountryNeedCookieBanner)return _r_()}else if(!o.cookie("OptanonAlertBoxClosed"))return _r_();this.bottomsheet=r.createInstance("Drawer",document.createElement("div"),{id:"gta-interstitial-bottomsheet",onAfterOpen:function(){_i_("f04:acfdd8d8");var e=t.bottomsheet.getModalRoot();B.et.initAttributesTracking(e),o(e).find(".js-close").on("click",function(){_i_("f04:507c1d8b"),t.bottomsheet.close(),_r_()}),_r_()},onAfterClose:function(){_i_("f04:89ef1e37"),a(n),B.et.customGoal("dLYHMRFeRLBBVYUIbQbAdPMeCZeBPccHe",1),B.et.customGoal("dLYHMRFeRLBBVYUVVOcOQRCSPOMOcKbDZYTTNZObbC",2),_r_()}}),this.bottomsheet.mount(),this.bottomsheet.open(),"search_results"!==i&&o.cookie("clba",e+1,{domain:B.env.b_domain_end}),_r_()}}),_r_()}),B.define("with-capla",function(e,t,n){_i_("f04:cabb24f6");var i=e("promise"),a={},r={};function o(e){return _i_("f04:4d350593"),_r_(e.slice(0,-8))}function _(t){return _i_("f04:dcecff49"),a[t]||(a[t]=new i(function(e){_i_("f04:e000dba4"),r[t]=e,_r_()})),_r_({promise:a[t],resolve:r[t]})}window.B.__caplaInitialised&&Object.keys(window.B.__caplaInitialised).forEach(function(e){_i_("f04:1d620442"),_(o(e)).resolve(window.B.__caplaInitialised[e]),_r_()}),document.addEventListener("booking-capla-initialized",function(e){_i_("f04:bf4fa97b"),_(o(e.detail.namespace)).resolve(e.detail),_r_()}),n.exports=function(e,t,i){return _i_("f04:edf87387"),_r_(function(){_i_("f04:e42d11f1");var n=arguments;_("b-"+e+"-"+t).promise.then(function(e){_i_("f04:7774fbc2");var t=[].slice.call(n);t.unshift(e),i.apply(i,t),_r_()}),_r_()})},_r_()}),B.define("component/gta/capla-data",function(e,t,n){_i_("f04:780653f9");var i=e("component"),a=e("with-capla"),d=e("et"),l=e("jquery");function u(e,t,n,i){_i_("f04:42d876a4"),e.q.push(t.replaceAll(",","")),e.v0.push(n.replaceAll(",","")),e.v1.push(i.replaceAll(",","")||""),_r_()}function r(e,t){_i_("f04:18b8d215");var n=l('a[data-placement^="GeneralFooter"]'),i=void 0,a=void 0,r=void 0,o=void 0,_=0,s=1,c={score:0,page_url:window.location.href,placement:"GeneralFooterAndroid",q:[],v0:[],v1:[]};if(0===n.length)return B&&B.reportError&&B.reportError("Attempting to load GTA capla without placement","GTA Capla Error"),_r_();c.placement=l(n[0]).data("placement");try{i=new URL(t.getTheApp.downloadUrl),a=new URL(l(n[0]).attr("href")),r=i.searchParams,o=new URLSearchParams(a.search.replaceAll(";","&"))}catch(e){u(c,"url",a?a.toString():"",i?i.toString():""),u(c,"searchParams",o?o.toString():"",r?r.toString():"")}i&&a&&r&&o&&(a.host.toLowerCase().endsWith("booking.com")&&i.host.toLowerCase().endsWith("booking.com")?_++:u(c,"host",a.host,i.host),s++,u(c,"pathname",a.pathname,i.pathname),i.pathname===a.pathname&&_++,s++,o.forEach(function(e,t){_i_("f04:78e7a2c0"),u(c,t,e,r.get(t)||""),r.get(t)===e&&_++,s++,_r_()})),c.score=parseInt(100*_/s),c.q.length===c.v0.length&&c.v0.length===c.v1.length&&(B&&B.env&&B.env.gta&&"1"===B.env.gta.fe_feature_running_APPMARKETING_GTA_REPORT_USE_JSON?l.ajax({url:"/gta_report_score_json",type:"POST",data:JSON.stringify(c),contentType:"application/json; charset=utf-8",dataType:"json"}):(c.q=c.q.join(","),c.v0=c.v0.join(","),c.v1=c.v1.join(","),l.post("/gta_report_score",c))),d.goalWithValue("js_percentage_correct_url_params",c.score),_r_()}n.exports=i.extend({init:function(){_i_("f04:3be44955"),a("index-lp","web-mfe",function(e){_i_("f04:cf205922"),e.eventBus.subscribe("CAPLA_EVENT_index-lp_web-mfe_FOOTER_BANNER_DATA",r),_r_()})(),_r_()}}),_r_()}),B.when({action:"index",events:"ready"}).run(function(e){"use strict";_i_("f04:cdd0effe");var t=e("et"),n=e("server-data");n.b_should_track_not_a_bot&&(t.stage("cCHObdGUKCMeKAcQJFYDdeBVOSPMPSXHYYfPHe",2),n.b_returning_status_user_is_new&&t.stage("cCHObdGUKCMeKAcQJFYDdeBVOSPMPSXHYYfPHe",3),n.b_returning_status_user_returning&&t.stage("cCHObdGUKCMeKAcQJFYDdeBVOSPMPSXHYYfPHe",4)),_r_()}),B.define("component/fragment-with-render-params",function(e,t,n){_i_("f04:8ae563a8");var i=e("component/fragment");n.exports=i.extend({init:function(){_i_("f04:ceeec88c"),i.prototype.init.call(this),this.fragmentName=this.$el.data("fragmentName"),_r_()},fragmentRenderParamAttrs:function(){_i_("f04:3c5eea93");for(var e,t,n={},i=this.el.attributes,a=0,r=i.length;a<r;a++)(t=(e=i[a]).nodeName)&&13<t.length&&0===t.indexOf("data-render-param-")&&(n[t.slice(18)]=e.nodeValue);return _r_(n)},fragmentBeforeRender:function(e){_i_("f04:ef93ea80");var t=this.fragmentRenderParamAttrs();return e.data&&t?(e.data.renderParams=t,_r_(!0)):(this.fragmentRequestError("No data returned from "+this.fragmentName),_r_(!1))},fragmentAfterRender:function(e){_i_("f04:6aa31ab4"),this.$el.loadComponents(),B.et.initAttributesTracking(e.$targetEl||this.$el),window.BUI&&window.BUI.initComponents(this.el),_r_()},fragmentRequestError:function(e){_i_("f04:df3d598e"),this.$el.remove(),B.reportError(e,"Error occurred while calling fragment: "+this.fragmentName),_r_()}}),_r_()}),B.define("component/index-quiz-carousel",function(e,t,n){_i_("f04:c4822a30");var i=e("component"),a=e("et"),r=e("events"),o=e("server-data"),_=e("component/beach-quiz/events"),s=e("browser-storage-handler"),c=o.b_site_type;n.exports=i.extend({init:function(){_i_("f04:59707fd0");this.wandCard=this.$el.find(".tt-quiz--opener"),"mdot"==c?this.trackCustomGoals("aXbSbccSZbXEIZBaAOGeeBaWCDWOOC"):this.trackCustomGoals("aXbSbccSZbXEIZBaAOGeeBaWdKNKNKWe"),_r_()},trackCustomGoals:function(t){_i_("f04:6a7e4d84"),r.on(_.QUIZ_OPENED,function(){_i_("f04:e5fbfc03"),a.customGoal(t,2),_r_()}),r.on(_.QUIZ_TAB_CHANGED,function(e){_i_("f04:b324c7ac"),2===(e?parseInt(e)+1:1)&&a.customGoal(t,3),_r_()}),r.on(_.SUBMIT_FORM,function(){_i_("f04:247cb32e"),a.customGoal(t,4),s.addSessionValue("has_submit_index_quiz",!0,!1),a.goalWithValue("js_trip_types_quiz_answered_questions",4),_r_()}),this.wandCard.on("click",function(){_i_("f04:973b4320"),a.customGoal(t,5),_r_()}),r.on(_.QUIZ_TAB_CHANGED,function(e){_i_("f04:ad7044df");var t=e?parseInt(e)+1:1;1<t&&a.goalWithValue("js_trip_types_quiz_answered_questions",t-1),_r_()}),_r_()}}),_r_()}),booking.jstmpl("ae_index_quiz_carousel",function(){_i_("f04:72260363");var _,s=["\n    ","\n",'\n   <div data-component="index-quiz-carousel" class="tt-index-quiz-carousel js-ds-layout-events-quiz-carousel ',"bui-spacer--largest",'">\n\n    <div class="bui-title bui-title---headline_2 bui-f-font-display_two bui-spacer--large">\n      <h2 class="bui-title__text bui-f-font-display_two bui-box--padding-none">',"/private/tt_quiz_entry_header/name",'</h2>\n      <span class="bui-title__subtitle bui_font_featured">',"/private/tt_quiz_entry_subheader/name",'</span>\n    </div>\n\n    <div role="region" class="bui-carousel bui-carousel--',"medium","large",' bui-u-bleed@small" data-bui-component="Carousel" tabindex="0">\n      <ul class="bui-carousel__inner" data-bui-ref="carousel-container">\n        ','\n          <li class="bui-carousel__item" data-bui-ref="carouse_6 #top, .b_msie_6 body.header_reshuffle #top {height:61px !important;} .b_msie_6 #special_actions { margin: 3px 15px 3px 0; overflow:visible; } body.header_reshuffle #top { min-height: 50px !important; height: auto !important; } .nobg { background: url("https://cf.bstatic.com/static/img/nobg_all_blue_iq/b700d9e3067c1186a3364012df4fe1c48ae6da44.png") repeat-x; background-position: 0 -50px; } </style> 
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/core-deps-inlinedet_cloudfront_sd/65bb6e0c1caef9acc68156912864de9c2c826461.js" crossorigin nonce="jxycb7TJvCOpW8s">
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/jquery_cloudfront_sd/e1e8c0e862309cb4caf3c0d5fbea48bfb8eaad42.js" crossorigin nonce="jxycb7TJvCOpW8s">
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/main_cloudfront_sd/416d084ab96054781891df0bf73583aa795d8cff.js" crossorigin nonce="jxycb7TJvCOpW8s">
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/index_cloudfront_sd/331a3004219803fef71cbd62c4678669e7e692e4.js" crossorigin nonce="jxycb7TJvCOpW8s">
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/landingpage_cloudfront_sd/4417f0cf113c3ec51a8190be88e7c373a6d9295d.js" crossorigin nonce="jxycb7TJvCOpW8s">
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/searchbox_cloudfront_sd/2ef4e9ae9240f4bd123bc5c51eed3c306e710ecb.js" crossorigin nonce="jxycb7TJvCOpW8s">
<link rel="preload" as="script" href="https://cf.bstatic.com/static/js/error_catcher_bec_cloudfront_sd/0acd2ada6c74d5dec978a04ea837952bdf050cd2.js" crossorigin nonce="jxycb7TJvCOpW8s">
<script nonce="jxycb7TJvCOpW8s"> if( window.performance && performance.measure && 'b-stylesheets') { performance.measure('b-stylesheets'); } </script> 
<script nonce="jxycb7TJvCOpW8s"> var lzimg = function(state){lzimg.state = state}; </script> <script src="https://cf.bstatic.com/static/js/lazy_load_images_cloudfront_sd/77204d4da4aa41b08b1a4062c8e66e4629550994.js" async crossorigin nonce="jxycb7TJvCOpW8s"></script><title>
Los mejores apartamentos del mundo | Booking.com
</title>
<meta name="description" content=" apartamentos de alquiler. Buena disponibilidad y excelentes precios en alquiler de apartamentos. Lee los comentarios del alojamiento y elige la mejor oferta para tu estancia." />
<meta name="keywords" content="hospedaje, alojamiento, hotel, hoteles, hostales, apartamentos, Hotel, Hoteles, ofertas especiales, paquetes, especiales, escapadas de fin de semanas, escapadas en la ciudad, vacaciones, ofertas especiales, descuentos, barato" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://www.booking.com/apartments/index.es.html" />
<meta name="booking-verification" content="UmFuZG9tSVZ4twlFIiSTo8G2Qd_VMwHJL--l1kTW1tHJhP77KhldOJfhavagK_54oEouq_nww7q40nAZRdVUjFrHVNSe54LxUUC_KtXu_TvvLMscEF5-zUr3qm1Qfjv1s1wEVt5KPhkJdv_BkS8Qf4DVjMrgMIr8-buCAyKxZ5Z9VvVWQgLxBDtO5mbW8kzLnOs1nCVulgZV46w9D3xtk5YVT2Cta8675_pMYkdusxnrUb0O45OL7YdZDV3MuaoEcN7Xe0e2P45h0GN4mzfqbIpROxHEC0NBF3pq9mj-edHD_nYLdOL1Z5MUyuaBOGDhg5Zusisa4QXsakNZUvxCetjibQTWNTRSrDQtqMAfbLwTzRwUxI16VPONeA9CjqQ9-RaxiQVSMfMaZEg8mOyfDOvm_TT67RDR" />
<meta name="twitter:app:id:iphone" content="367003839" />
<meta name="twitter:app:name:ipad" content="Booking.com Hotel Reservations Worldwide & Hotel Deals" />
<meta name="twitter:app:id:ipad" content="367003839" />
<meta name="twitter:app:name:googleplay" content="Booking.com Hotel Reservations" />
<meta name="twitter:app:id:googleplay" content="com.booking" />
<meta property="al:ios:app_store_id" content="367003839">
<meta property="al:ios:app_name" content="Booking.com Hotel Reservations">
<meta property="al:android:app_name" content="Booking.com Hotel Reservation">
<meta property="al:android:package" content="com.booking">
<meta property="al:ios:url" content="booking://home_page?affiliate_id=375119&source=gen173nr-1VCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIC0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIH4AIB&filters=property_type%3A%3A201" />
<meta property="al:android:url" content="booking://?affiliate_id=1146884&source=gen173nr-1VCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIC0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIH4AIB&filters=property_type%3A%3A201" />
<meta name="p:domain_verify" content="ff7f0b90ebb93e5bf7c7cafe77640ec1"/>
<meta http-equiv="content-language" content="es" />
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<meta http-equiv="window-target" content="_top" />
<meta name="google-site-verification" content="hBGbQDv6qfAgPY0P53tkv7KEIxjnDsju75ScOsASHm8" />
<meta name="google-site-verification" content="FnQUGgarokGZOLL7XCJR4hCITq2LlfCYk5F-2Th-Pgg" />
<meta name="google-site-verification" content="15ju2P2JqNf6Ig8gmR9rGNypdqb5iDBo5KEXerfMrB8" />
<meta name="google-site-verification" content="tla2duzLAGElK5X2_BVuEGfd6Uj5PUcVZ99z_RHAGHo" />
<meta name="google-site-verification" content="rwJyNfipbZvxQhL4990TXKtdglKEZN-KNV33yaKVwGQ" />
<meta name="yandex-verification" content="6fbe6b565c8dc8d4" />
<meta name="msvalidate.01" content="F9604BB1734C7DEE44F1E53461DA18AC" />
<meta name="baidu-site-verification" content="dLVQ5IDjl8" />
<meta name="majestic-site-verification" content="MJ12_052e6a2e-6a79-4b37-abd6-8d6fc08dc103" />
<meta name="seznam-wmt" content="mR3BMuBQ2CDsSGup6TTtuHXBYvtCZwOI" />
<meta name="sogou_site_verification" content="DTBkjoPXLT"/>
<meta name="yandex-verification" content="4477fe9ada72e258"/>
<meta name="msvalidate.01" content="A786B9F1EA9578E05E9F141F9319B20A"/>
<meta name="360-site-verification" content="2e8c87fed403eba0443b3593b6e00448"/>
<meta name="shenma-site-verification" content="4e703a72c5a92fafdcf3dc553f1bfe46_1675157508"/>
<meta name="seznam-wmt" content="9gBZsh9E8gAyVYYz41yqxU0yh3Pg3wBZ"/>
<meta name="yandex-verification" content="b39bb9c0352d5825"/>
<meta name="naver-site-verification" content="bb795db22fd3c55ca4b2b71bcf593b09d57c4705"/>
<meta property="fb:pages" content="131840030178250, 1425349334428496, 117615518393985, 1565844503706287, 517612321758712, 1668799180037291, 265097377176252, 1643712662515912, 303492549842824, 1638321783047271, 809709019119342, 959185470826086, 217466488652137, 641365839348517, 203741606405114">
<meta property="wb:webmaster" content="48970bbca45d28c2" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@bookingcom">
<meta name="twitter:creator" content="@bookingcom">
<meta name="twitter:image" content="https://cf.bstatic.com/static/img/twitter-image-else/566c7081f1deeaca39957e96365c3908f83b95af.jpg">
<meta name="twitter:title" content="Booking.com: La mayor selección de hoteles, casas y alquileres vacacionales">
<meta name="twitter:description" content="Si buscas hoteles, casas o alquileres vacacionales, siempre encontrarás el precio más bajo garantizado. Busca entre 2.563.380 alojamientos en más de 85.000 destinos.">
<meta property="og:type" content="company" />
<meta property="og:title" content="Booking.com: La mayor selección de hoteles, casas y alquileres vacacionales" />
<meta property="og:image" content="https://cf.bstatic.com/static/img/fb/1/8a240f547dbef4211044f4392436beda77674398.jpg" />
<meta property="og:description" content="Si buscas hoteles, casas o alquileres vacacionales, siempre encontrarás el precio más bajo garantizado. Busca entre 2.563.380 alojamientos en más de 85.000 destinos." />
<meta property="og:locale" content="es_LA" />
<meta property="og:url" content="https://www.booking.com/apartments/index.es.html" />
<meta property="og:site_name" content="Booking.com" />
<meta property="fb:app_id" content="145362478954725" />
<script type="application/ld+json" nonce="jxycb7TJvCOpW8s">
{
"@context": "https://schema.org",
"@type": "Corporation",
"legalName": "Booking.com B.V.",
"url": "https://www.booking.com",
"description": "By investing in technology that takes the friction out of travel, Booking.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Booking.com enables properties around the world to reach a global audience and grow their businesses.",
"address": {
"@type": "PostalAddress",
"addressCountry": "Netherlands",
"addressRegion": "Noord-Holland",
"addressLocality": "Amsterdam",
"postOfficeBoxNumber": "1639",
"postalCode": "1011 DL",
"streetAddress": "Oosterdokskade 163"
},
"faxNumber": "+31 20 712 5609",
"logo": "https://cf.bstatic.com/static/img/booking_logo_knowledge_graph/247454a990efac1952e44dddbf30c58677aa0fd8.png",
"founder": "Geert-Jan Bruinsma",
"foundingDate": "1996",
"foundingLocation": "Amsterdam",
"areaServed": "Global",
"brand": {
"@type": "Brand",
"name": "Booking.com"
},
"keywords": "online travel agency, hotels, holiday rentals, flights, rental cars",
"parentOrganization": {
"@type": "Corporation",
"name": "Booking Holdings Inc."
},
"sameAs": [
"https://en.wikipedia.org/wiki/Booking.com",
"https://www.instagram.com/bookingcom/",
"https://twitter.com/bookingcom",
"https://www.facebook.com/bookingcom/",
"https://www.tiktok.com/@bookingcom"
]
}
</script>
<link rel="alternate" type="text/html" hreflang="en-gb" href="https://www.booking.com/apartments/index.en-gb.html" title="English (UK)"/>
<link rel="alternate" type="text/html" hreflang="en-us" href="https://www.booking.com/apartments/index.html" title="English (US)"/>
<link rel="alternate" type="text/html" hreflang="de" href="https://www.booking.com/apartments/index.de.html" title="Deutsch"/>
<link rel="alternate" type="text/html" hreflang="nl" href="https://www.booking.com/apartments/index.nl.html" title="Nederlands"/>
<link rel="alternate" type="text/html" hreflang="fr" href="https://www.booking.com/apartments/index.fr.html" title="Français"/>
<link rel="alternate" type="text/html" hreflang="es" href="https://www.booking.com/apartments/index.es.html" title="Español"/>
<link rel="alternate" type="text/html" hreflang="es-ar" href="https://www.booking.com/apartments/index.es-ar.html" title="Español (AR)"/>
<link rel="alternate" type="text/html" hreflang="es-mx" href="https://www.booking.com/apartments/index.es-mx.html" title="Español (MX)"/>
<link rel="alternate" type="text/html" hreflang="ca" href="https://www.booking.com/apartments/index.ca.html" title="Català"/>
<link rel="alternate" type="text/html" hreflang="it" href="https://www.booking.com/apartments/index.it.html" title="Italiano"/>
<link rel="alternate" type="text/html" hreflang="pt-pt" href="https://www.booking.com/apartments/index.pt-pt.html" title="Português (PT)"/>
<link rel="alternate" type="text/html" hreflang="pt-br" href="https://www.booking.com/apartments/index.pt-br.html" title="Português (BR)"/>
<link rel="alternate" type="text/html" hreflang="no" href="https://www.booking.com/apartments/index.no.html" title="Norsk"/>
<link rel="alternate" type="text/html" hreflang="fi" href="https://www.booking.com/apartments/index.fi.html" title="Suomi"/>
<link rel="alternate" type="text/html" hreflang="sv" href="https://www.booking.com/apartments/index.sv.html" title="Svenska"/>
<link rel="alternate" type="text/html" hreflang="da" href="https://www.booking.com/apartments/index.da.html" title="Dansk"/>
<link rel="alternate" type="text/html" hreflang="cs" href="https://www.booking.com/apartments/index.cs.html" title="Čeština"/>
<link rel="alternate" type="text/html" hreflang="hu" href="https://www.booking.com/apartments/index.hu.html" title="Magyar"/>
<link rel="alternate" type="text/html" hreflang="ro" href="https://www.booking.com/apartments/index.ro.html" title="Română"/>
<link rel="alternate" type="text/html" hreflang="ja" href="https://www.booking.com/apartments/index.ja.html" title="日本語"/>
<link rel="alternate" type="text/html" hreflang="zh-cn" href="https://www.booking.com/apartments/index.zh-cn.html" title="简体中文"/>
<link rel="alternate" type="text/html" hreflang="zh-tw" href="https://www.booking.com/apartments/index.zh-tw.html" title="繁體中文"/>
<link rel="alternate" type="text/html" hreflang="pl" href="https://www.booking.com/apartments/index.pl.html" title="Polski"/>
<link rel="alternate" type="text/html" hreflang="el" href="https://www.booking.com/apartments/index.el.html" title="Ελληνικά"/>
<link rel="alternate" type="text/html" hreflang="ru" href="https://www.booking.com/apartments/index.ru.html" title="Русский"/>
<link rel="alternate" type="text/html" hreflang="tr" href="https://www.booking.com/apartments/index.tr.html" title="Türkçe"/>
<link rel="alternate" type="text/html" hreflang="bg" href="https://www.booking.com/apartments/index.bg.html" title="Български"/>
<link rel="alternate" type="text/html" hreflang="ar" href="https://www.booking.com/apartments/index.ar.html" title="العربية"/>
<link rel="alternate" type="text/html" hreflang="ko" href="https://www.booking.com/apartments/index.ko.html" title="한국어"/>
<link rel="alternate" type="text/html" hreflang="he" href="https://www.booking.com/apartments/index.he.html" title="עברית"/>
<link rel="alternate" type="text/html" hreflang="lv" href="https://www.booking.com/apartments/index.lv.html" title="Latviski"/>
<link rel="alternate" type="text/html" hreflang="uk" href="https://www.booking.com/apartments/index.uk.html" title="Українська"/>
<link rel="alternate" type="text/html" hreflang="hi" href="https://www.booking.com/apartments/index.hi.html" title="हिन्दी"/>
<link rel="alternate" type="text/html" hreflang="id" href="https://www.booking.com/apartments/index.id.html" title="Bahasa Indonesia"/>
<link rel="alternate" type="text/html" hreflang="ms" href="https://www.booking.com/apartments/index.ms.html" title="Bahasa Malaysia"/>
<link rel="alternate" type="text/html" hreflang="th" href="https://www.booking.com/apartments/index.th.html" title="ภาษาไทย"/>
<link rel="alternate" type="text/html" hreflang="et" href="https://www.booking.com/apartments/index.et.html" title="Eesti"/>
<link rel="alternate" type="text/html" hreflang="hr" href="https://www.booking.com/apartments/index.hr.html" title="Hrvatski"/>
<link rel="alternate" type="text/html" hreflang="lt" href="https://www.booking.com/apartments/index.lt.html" title="Lietuvių"/>
<link rel="alternate" type="text/html" hreflang="sk" href="https://www.booking.com/apartments/index.sk.html" title="Slovenčina"/>
<link rel="alternate" type="text/html" hreflang="sr" href="https://www.booking.com/apartments/index.sr.html" title="Srpski"/>
<link rel="alternate" type="text/html" hreflang="sl" href="https://www.booking.com/apartments/index.sl.html" title="Slovenščina"/>
<link rel="alternate" type="text/html" hreflang="vi" href="https://www.booking.com/apartments/index.vi.html" title="Tiếng Việt"/>
<link rel="alternate" type="text/html" hreflang="tl" href="https://www.booking.com/apartments/index.tl.html" title="Filipino"/>
<link rel="alternate" type="text/html" hreflang="is" href="https://www.booking.com/apartments/index.is.html" title="Íslenska"/>
<link rel="icon" href="https://cf.bstatic.com/static/img/favicon/9ca83ba2a5a3293ff07452cb24949a5843af4592.svg" type="image/svg+xml">
<link rel="icon" href="https://cf.bstatic.com/static/img/favicon/4a3b40c4059be39cbf1ebaa5f97dbb7d150926b9.png" type="image/png" sizes="192x192">
<link rel="icon" href="https://cf.bstatic.com/static/img/favicon/40749a316c45e239a7149b6711ea4c48d10f8d89.ico" sizes="32x32">
<link rel="apple-touch-icon" href="https://cf.bstatic.com/static/img/apple-touch-icon/5db9fd30d96b1796883ee94be7dddce50b73bb38.png" />
<link rel="help" href="/faq.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&amp;" />
<link rel="search" type="application/opensearchdescription+xml" href="https://cf.bstatic.com/static/opensearch/es/151ff3f9b95192040df15bdfab54b795f1f4f87b.xml" title="Booking.com reservas hoteleras online" />
<link href="https://plus.google.com/105443419075154950489" rel="publisher" />
<script nonce="jxycb7TJvCOpW8s">
/*
*/
(function avoidingXSSviaLocationHash() {
var location = window.location,
hash = location.hash,
xss = /[<>'"]/;
if (
xss.test( decodeURIComponent( hash ) ) ||
xss.test( hash )
) {
location.hash = '';
}
})();
document.documentElement.className = document.documentElement.className.replace('noJS', '') + ' hasJS';
var b_experiments = {}, WIDTH, B = window.booking = {
_onfly: [], // "on the fly" functions, will be executed as soon as external js files were loaded
devTools: {
trackedExperiments: []
},
user: {
},
env : {
isRetina : window.devicePixelRatio > 1,
"b_gtt": 'dLYAeZFVJfNTBBFYKSMJcfJFfVDSCAbBMHIOVBC',
"b_action" : 'index',
"b_secure_domain" : 'https://secure.booking.com',
"b_site_type" : 'www',
"b_site_type_id": '1',
"b_agent_is_no_robot": true,
"b_agent_is_robot": false,
"b_query_params_with_lang_no_ext": '?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d',
"b_query_params_with_lang_no_ext_enforce_lang_aid_currency": '?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d;lang=es;aid=304142;selected_currency=EUR',
"b_travel_comm_url_with_lang": 'https://community.booking.com/?profile.language=es',
"b_calendar2" : '1',
"BHDTJdReLGMeEcYPffcVDZBZMO": true,
"b_max_los_data_for_prefilled_dest" : {"is_fullon":0,"default_los":90,"extended_los":90,"has_extended_los":0,"experiment":null,"max_allowed_los":90},
/*
*/
"b_partner_channel_id": '3',
"b_bookings_owned": '1',
"b_google_maps_key_params" : 'true&indexing=true',
"b_lang" : 'es',
"b_has_valid_dates": 0,
"b_countrycode" : '',
"b_guest_country" : 'es',
"b_locale" : 'es-es',
"b_lang_for_url" : 'es',
"b_this_urchin" : '/apartments/index.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sb_price_type=total&&',
"b_flag_to_suggest" : 'es',
"b_companyname" : 'Booking.com',
"b_partner_vertical" : 'channel_direct',
b_date_format: {"date_with_weekday_with_markers":"{weekday}, {begin_marker}{day_of_month} de {month_name}{end_marker} de {full_year}","day_month_year_between":"entre el {day_name} de {month_name} {full_year} y el {day_name_until} de {month_name_until} de {full_year_until}","short_date_with_weekday_without_year":"{short_weekday}, {day_of_month} {short_month_name}","month_with_year":"{month_name_with_year_only} de {full_year}","range_from_long_date_time_until_long_date_time":"del {day_of_month} de {month_name} de {full_year} a las {time} al {day_of_month_until} de {month_name_until} de {full_year_until} a las {time_until}","short_date_without_year":"{day_of_month} {short_month_name}","numeric_date":"{day_of_month}/{month}/{full_year}","day_short_month_year_on":"el {day_name} {short_month_name} {full_year}","date_range_with_short_weekday_short_month":"{short_weekday}, {day_of_month} {short_month_name} - {short_weekday_until}, {day_of_month_until} {short_month_name_until}","day_month_year_other":"del {day_other} de {month_name} de {full_year}","date_with_weekday_from":"{weekday_from}, {day_of_month} de {month_name_from} de {full_year}","day_month_year":"{day_name} de {month_name} de {full_year}","month_name_only":"{month_name_nom}","long_date_range_both_years":"{day_of_month} de {month_name} de {full_year} - {day_of_month_until} de {month_name_until} de {full_year_until}","ux_day_month":"{day_1} de {month_1}","day_month":"{day_name} de {month_name}","numeric_day_month_year_from":"desde el {day_name_0}/{month_name_0}/{full_year}","day_month_year_until":"hasta el {day_name} de {month_name} de {full_year}","date_with_weekday_to":"{weekday_to}, {day_of_month} de {month_name_to} de {full_year}","short_date":"{day_of_month} {short_month_name} {full_year}","day_short_month_time":"{day_of_month} {short_month_name}, {time}","date_with_weekday_time_at":"date_with_weekday_time_at","from_month_with_year":"desde {month_name_from} de {full_year}","day_month_year_on":"el {day_name} de {month_name} de {full_year}","day_short_month_year":"{day_name} {short_month_name} {full_year}","date_with_weekday_time_until":"{weekday}, {begin_marker}{day_of_month} de {month_name}{end_marker} de {full_year} hasta las {time}","short_month_with_year":"{short_month_name} {full_year}","numeric_date_range_both_years":"{day_of_month}/{month}/{full_year} - {day_of_month_until}/{month_until}/{full_year_until}","day_short_month_year_between":"{day_of_month} {short_month_name} {full_year} – {day_of_month_until} {short_month_name_until} {full_year_until}","day_month_until":"hasta el {day_name} de {month_name}","short_date_without_year_range":"{day_of_month} {short_month_name} - {day_of_month_until} {short_month_name_until}","numeric_day_month_year_time_before":"antes de las {time} del {day_name_0}/{month_name_0}/{full_year}","date_with_weekday_time_from_until":"El {weekday}, {begin_marker}{day_of_month} de {month_name}{end_marker} de {full_year}, de las {time} a las {time_until}","day_short_month_year_from":"desde el {day_name} {short_month_name} {full_year}","date_with_short_weekday_without_year":"{short_weekday}, {day_of_month} de {month_name}","day_short_month_year_other":"del {day_name_other} {short_month_name} {full_year}","day_month_on":"el {day_name} de {month_name}","day_short_month_time_between":"{day_of_month} {short_month_name}, {time}–{time_until}","date_with_weekday_time_from":"{weekday}, {begin_marker}{day_of_month} de {month_name}{end_marker} de {full_year} desde las {time}","date_with_weekday":"{weekday}, {day_of_month} de {month_name} de {full_year}","day_short_month_year_time":"{day_of_month} {short_month_name} {full_year}, {time}","day_short_month_between":"{day_of_month} {short_month_name} – {day_of_month_until} {short_month_name_until}","date_with_year":"{day_of_month} de {month_name} de {full_year}","numeric_day_month_year":"{day_name_0}/{month_name_0}/{full_year}","day_of_month_only":"{day_of_month}","in_month_with_year":"en {month_name_in} de {full_year}","short_weekday_only":"{short_weekday}","day_month_from":"desde el {day_name} de {month_name}","short_date_with_weekday":"{short_weekday}, {day_of_month} {short_month_name} {full_year}","date_with_short_weekday_with_year":"{short_weekday}, {day_of_month} de {month_name} de {full_year}","numeric_day_month_year_until":"hasta el {day_name_0}/{month_name_0}/{full_year}","short_month_only":"{short_month_name}","numeric_day_month_year_between":"entre el {day_name_0}/{month_name_0}/{full_year} y el {day_name_0_until}/{month_name_0_until}/{full_year_until}","day_month_other":"del {day_other} de {month_name}","numeric_day_month_year_on":"el {day_name_0}/{month_name_0}/{full_year}","day_month_year_from":"desde el {day_name} de {month_name} de {full_year}","day_month_year_time_before":"antes de las {time} del {day_name} de {month_name} de {year}","day_short_month_year_until":"hasta el {day_name} {short_month_name} {full_year}","day_month_between":"entre el {day_name} de {month_name} y el {day_name_until} de {month_name_until}","ux_day_month_on":"el {day_2} de {month_2}","date_without_year":"{day_of_month} de {month_name}","day_short_month_year_time_between":"{day_of_month} {short_month_name} {full_year}, {time}–{time_until}","numeric_date_range":"{day_of_month}/{month} - {day_of_month_until}/{month_until}"},
b_month_for_formatted_date: {"1":{"day_to":"enero","name_from":"enero","short_name":"ene","name_other":"enero","month_2":"enero","name_to":"enero","genitive_lc":"enero","name_lc":"enero","to_month_lc":"a enero","genitive_uc":"Enero","name_def_article_lc":"el enero","short_name_only":"ene","name":"enero","name_uc":"enero","in_month_lc":"en enero","name_with_year_only":"enero","on_day_month":"01","month_1":"enero","short_name_uc":"enero","name_def_article_uc":"El enero","name_only":"enero","name_in":"enero"},"10":{"name_with_year_only":"octubre","name_to":"octubre","name_uc":"octubre","in_month_lc":"en octubre","month_2":"octubre","name_other":"octubre","name":"octubre","short_name":"oct","short_name_only":"oct","name_from":"octubre","name_in":"octubre","name_def_article_lc":"el octubre","genitive_uc":"Octubre","to_month_lc":"a octubre","name_only":"octubre","short_name_uc":"octubre","name_def_article_uc":"El octubre","name_lc":"octubre","month_1":"octubre","genitive_lc":"octubre","on_day_month":"10"},"11":{"name_to":"noviembre","name_with_year_only":"noviembre","name_uc":"noviembre","month_2":"noviembre","in_month_lc":"en noviembre","name_other":"noviembre","name":"noviembre","short_name":"nov","short_name_only":"nov","name_from":"noviembre","name_def_article_lc":"el noviembre","name_in":"noviembre","genitive_uc":"Noviembre","name_only":"noviembre","to_month_lc":"a noviembre","name_def_article_uc":"El noviembre","short_name_uc":"noviembre","name_lc":"noviembre","month_1":"noviembre","genitive_lc":"noviembre","on_day_month":"11"},"12":{"genitive_uc":"Diciembre","name_in":"diciembre","name_def_article_lc":"el diciembre","short_name_uc":"diciembre","name_def_article_uc":"El diciembre","name_only":"diciembre","to_month_lc":"a diciembre","month_1":"diciembre","name_lc":"diciembre","on_day_month":"12","genitive_lc":"diciembre","name_uc":"diciembre","month_2":"diciembre","in_month_lc":"en diciembre","name_with_year_only":"diciembre","name_to":"diciembre","name":"diciembre","name_other":"diciembre","short_name_only":"dic","name_from":"diciembre","short_name":"dic"},"2":{"name_from":"febrero","day_to":"febrero","short_name":"feb","name_other":"febrero","month_2":"febrero","name_to":"febrero","genitive_lc":"febrero","name_lc":"febrero","to_month_lc":"a febrero","genitive_uc":"Febrero","name_def_article_lc":"el febrero","short_name_only":"feb","name":"febrero","in_month_lc":"en febrero","name_uc":"febrero","name_with_year_only":"febrero","on_day_month":"02","month_1":"febrero","name_def_article_uc":"El febrero","short_name_uc":"febrero","name_only":"febrero","name_in":"febrero"},"3":{"name":"marzo","short_name_only":"mar","name_with_year_only":"marzo","name_uc":"marzo","in_month_lc":"en marzo","month_1":"marzo","on_day_month":"03","name_in":"marzo","name_only":"marzo","short_name_uc":"marzo","name_def_article_uc":"El marzo","name_other":"marzo","short_name":"mar","day_to":"marzo","name_from":"marzo","name_to":"marzo","month_2":"marzo","name_lc":"marzo","genitive_lc":"marzo","name_def_article_lc":"el marzo","genitive_uc":"Marzo","to_month_lc":"a marzo"},"4":{"name_def_article_uc":"El abril","short_name_uc":"abril","to_month_lc":"a abril","name_only":"abril","genitive_uc":"Abril","name_def_article_lc":"el abril","name_in":"abril","on_day_month":"04","genitive_lc":"abril","month_1":"abril","name_lc":"abril","name_uc":"abril","in_month_lc":"en abril","month_2":"abril","name_with_year_only":"abril","name_to":"abril","short_name_only":"abr","name_from":"abril","short_name":"abr","name":"abril","name_other":"abril"},"5":{"name_to":"mayo","name_with_year_only":"mayo","name_uc":"mayo","in_month_lc":"en mayo","month_2":"mayo","short_name":"may","short_name_only":"may","name_from":"mayo","name_other":"mayo","name":"mayo","to_month_lc":"a mayo","name_only":"mayo","short_name_uc":"mayo","name_def_article_uc":"El mayo","name_in":"mayo","name_def_article_lc":"el mayo","genitive_uc":"Mayo","genitive_lc":"mayo","on_day_month":"05","name_lc":"mayo","month_1":"mayo"},"6":{"genitive_lc":"junio","on_day_month":"06","name_lc":"junio","month_1":"junio","to_month_lc":"a junio","name_only":"junio","short_name_uc":"junio","name_def_article_uc":"El junio","name_in":"junio","name_def_article_lc":"el junio","genitive_uc":"Junio","short_name":"jun","name_from":"junio","short_name_only":"jun","name_other":"junio","name":"junio","name_to":"junio","name_with_year_only":"junio","name_uc":"junio","month_2":"junio","in_month_lc":"en junio"},"7":{"name_to":"julio","name_with_year_only":"julio","name_uc":"julio","in_month_lc":"en julio","month_2":"julio","name_other":"julio","name":"julio","short_name":"jul","name_from":"julio","short_name_only":"jul","name_def_article_lc":"el julio","name_in":"julio","genitive_uc":"Julio","to_month_lc":"a julio","name_only":"julio","name_def_article_uc":"El julio","short_name_uc":"julio","name_lc":"julio","month_1":"julio","genitive_lc":"julio","on_day_month":"07"},"8":{"short_name":"ago","short_name_only":"ago","name_from":"agosto","name_other":"agosto","name":"agosto","name_to":"agosto","name_with_year_only":"agosto","name_uc":"agosto","in_month_lc":"en agosto","month_2":"agosto","genitive_lc":"agosto","on_day_month":"08","name_lc":"agosto","month_1":"agosto","to_month_lc":"a agosto","name_only":"agosto","name_def_article_uc":"El agosto","short_name_uc":"agosto","name_def_article_lc":"el agosto","name_in":"agosto","genitive_uc":"Agosto"},"9":{"in_month_lc":"en septiembre","name_uc":"septiembre","month_2":"septiembre","name_with_year_only":"septiembre","name_to":"septiembre","name_from":"septiembre","short_name_only":"sep","short_name":"sep","name":"septiembre","name_other":"septiembre","name_def_article_uc":"El septiembre","short_name_uc":"septiembre","to_month_lc":"a septiembre","name_only":"septiembre","genitive_uc":"Septiembre","name_def_article_lc":"el septiembre","name_in":"septiembre","on_day_month":"09","genitive_lc":"septiembre","month_1":"septiembre","name_lc":"septiembre"}},
b_weekday_formatted_date: {"1":{"name_other_uc":"Lunes","short":"lun","name_from_preposition":"Desde el lunes","shortest":"lu","name_lc":"lunes","name_on":"lunes","name_uc":"Lunes","name_to":"lunes","name":"lunes","short_uc":"Lun","name_other":"lunes","name_from":"lunes"},"2":{"name_on":"martes","shortest":"ma","name_lc":"martes","name_from_preposition":"Desde el martes","name_other_uc":"Martes","short":"mar","name_from":"martes","name_other":"martes","name":"martes","short_uc":"Mar","name_to":"martes","name_uc":"Martes"},"3":{"short":"mié","name_other_uc":"Miércoles","name_from_preposition":"Desde el miércoles","name_lc":"miércoles","shortest":"mi","name_on":"miércoles","name_to":"miércoles","name_uc":"Miércoles","name_other":"miércoles","name":"miércoles","short_uc":"Mié","name_from":"miércoles"},"4":{"name_to":"jueves","name_uc":"Jueves","name_from":"jueves","name_other":"jueves","name":"jueves","short_uc":"Jue","name_from_preposition":"Desde el jueves","short":"jue","name_other_uc":"Jueves","name_on":"jueves","shortest":"ju","name_lc":"jueves"},"5":{"name_from_preposition":"Desde el viernes","name_other_uc":"Viernes","short":"vie","name_on":"viernes","name_lc":"viernes","shortest":"vi","name_to":"viernes","name_uc":"Viernes","name_from":"viernes","name_other":"viernes","name":"viernes","short_uc":"Vie"},"6":{"name_from_preposition":"Desde el sábado","short":"sáb","name_other_uc":"Sábado","name_on":"sábado","shortest":"sá","name_lc":"sábado","name_uc":"Sábado","name_to":"sábado","name_from":"sábado","short_uc":"Sáb","name":"sábado","name_other":"sábado"},"7":{"name_from_preposition":"Desde el domingo","name_other_uc":"Domingo","short":"dom","name_on":"domingo","shortest":"do","name_lc":"domingo","name_uc":"Domingo","name_to":"domingo","name_from":"domingo","name":"domingo","short_uc":"Dom","name_other":"domingo"},"8":{"name_from_preposition":"Desde cualquier día","name_other_uc":"name_other_uc","short":"short","name_on":"name_on","shortest":"shortest","name_lc":"every day","name_to":"name_to","name_uc":"name_uc","name_from":"name_from","name_other":"name_other","short_uc":"short_uc","name":"Todos los días"}},
b_time_format: {"AM_symbol":{"name":"AM"},"PM_symbol":{"name":"PM"},"time":{"name":"{hour_24h}:{minutes}"},"time_12":{"name":"{hour_12h_no0}:{minutes} {AM_PM}"},"time_24":{"name":"{hour_24h}:{minutes}"}},
"b_protocol": 'https',
auth_level : "0",
b_user_auth_level_is_none : 1,
b_check_ot_consent : 1,
bui: {
color: {
bui_color_grayscale_dark: "#333333",
bui_color_grayscale: "#6B6B6B",
bui_color_grayscale_light: "#BDBDBD",
bui_color_grayscale_lighter: "#E6E6E6",
bui_color_grayscale_lightest: "#F5F5F5",
bui_color_primary_dark: "#00224F",
bui_color_primary: "#003580",
bui_color_primary_light: "#BAD4F7",
bui_color_primary_lighter: "#EBF3FF",
bui_color_primary_lightest: "#FAFCFF",
bui_color_complement_dark: "#CD8900",
bui_color_complement: "#FEBB02",
bui_color_complement_light: "#FFE08A",
bui_color_complement_lighter: "#FDF4D8",
bui_color_complement_lightest: "#FEFBF0",
bui_color_callout_dark: "#BC5B01",
bui_color_callout: "#FF8000",
bui_color_callout_light: "#FFC489",
bui_color_callout_lighter: "#FFF0E0",
bui_color_callout_lightest: "#FFF8F0",
bui_color_destructive_dark: "#A30000",
bui_color_destructive: "#CC0000",
bui_color_destructive_light: "#FCB4B4",
bui_color_destructive_lighter: "#FFEBEB",
bui_color_destructive_lightest: "#FFF0F0",
bui_color_constructive_dark: "#006607",
bui_color_constructive: "#008009",
bui_color_constructive_light: "#97E59C",
bui_color_constructive_lighter: "#E7FDE9",
bui_color_constructive_lightest: "#F1FEF2",
bui_color_action: "#0071C2",
bui_color_white: "#FFFFFF",
bui_color_black: "#000000"
}
},
bb: {
ibb: "",
uibb: "",
ibbta: "",
itp: "0",
iuibb: "",
bme: "",
euibb: "",
tp: "2"
},
b_growls_close_fast: 1,
fe_enable_login_with_phone_number: 1,
asyncLoader: {
async_assistant_entrypoint_css: 'https://cf.bstatic.com/static/css/assistant_entrypoint_cloudfront_sd.iq_ltr/611b70b00745fa4412a0101292fb0a1e4c97741e.css',
async_assistant_entrypoint_js: 'https://cf.bstatic.com/static/js/assistant_entrypoint_cloudfront_sd/ef4280b820a27ed734dd50de76d082ea84a13f74.js',
async_atlas_places_js: 'https://cf.bstatic.com/static/js/atlas_places_async_cloudfront_sd/c94b60c4da2dae6b55fd9eabf168f146fc189acf.js',
async_atlas_v2_cn_js: 'https://cf.bstatic.com/static/js/async_atlas_v2_cn_cloudfront_sd/0117731bcd8255423a0d53e0c92b8939ff207f72.js',
async_atlas_v2_non_cn_js: 'https://cf.bstatic.com/static/js/async_atlas_v2_non_cn_cloudfront_sd/7e0cbc271e29eb434b17771a00aa554c4612d0a8.js',
image_gallery_js: 'https://cf.bstatic.com/static/js/ski_lp_overview_panel_cloudfront_sd/9d8e7cfd33a37ffb15285d98f6970024f06cf36d.js',
image_gallery_css: 'https://cf.bstatic.com/static/css/ski_lp_overview_panel_cloudfront_sd.iq_ltr/2b3350935410fe4e36d74efed93daf74f2b4ff70.css',
async_lists_js: 'https://cf.bstatic.com/static/js/async_lists_cloudfront_sd/ea653b9852a85cb0190755d3979dbd317a486979.js',
async_wpm_overlay_css: 'https://cf.bstatic.com/static/css/async_wpm_overlay_assets_cloudfront_sd.iq_ltr/abb304bf3600a5cf5f7406a27f042cf1ce2429b1.css',
async_wpm_overlay_js: 'https://cf.bstatic.com/static/js/async_wpm_overlay_assets_cloudfront_sd/c6cb9b63eea61102d4e96fe72b7c8008652fe925.js',
async_flash_deals_countdown_js: 'https://cf.bstatic.com/static/js/async_flash_deals_countdown_cloudfront_sd/ed6ec8a2950ae6f5f3420107a35db5ece475faf3.js',
async_index_postcards_c360_js: 'https://cf.bstatic.com/static/js/async_index_postcards_c360_cloudfront_sd/11d2b12d25c970340e0e5c5707da66ac8223126e.js',
async_tt_quiz_js: 'https://cf.bstatic.com/static/js/async_tt_quiz_cloudfront_sd/8e3159ed1f490736c8984a2b979c73d5dbf0c863.js',
async_tt_quiz_css: 'https://cf.bstatic.com/static/css/async_tt_quiz_cloudfront_sd.iq_ltr/ac73a1533c9b137d154e412af58b0b6a74e209a5.css',
empty: ''
},
fe_enable_fps_goal_with_value: 1,
b_email_validation_regex : /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/,
b_domain_end : '.booking.com',
b_original_url : 'https:&#47;&#47;www.booking.com&#47;apartments&#47;index.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&amp;sid=b9a8378f5f3d5508a9821b887ae2b2f5',
b_this_url : '/apartments/index.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_price_type=total&',
b_this_url_without_lang : '/apartments/index.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_price_type=total&',
b_referrer : '',
b_acc_type : '',
b_req_login: '',
jst : {'loading': true},
keep_day_month: true,
b_timestamp : 1705441566,
scripts_tracking : {
},
enable_scripts_tracking : 1,
b_ufi : '',
"setvar_affiliate_is_bookings2" : 1,
transl_close_x : 'Cerrar',
transl_checkin_title: 'Fecha de entrada',
transl_checkout_title: 'Fecha de salida',
browser_lang: '',
b_hijri_calendar_available: false,
b_aid: '304142',
b_label: 'gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB',
b_sid: '30610a043c85088182825248c69a097d',
ip_country: 'es',
country_currency: 'EUR',
b_selected_currency: 'EUR',
b_selected_currency_is_hotel_currency: "",
b_selected_language: 'es',
b_selected_language_country_flag: 'es',
pageview_id: '0007990fdc5f014e',
aid: '304142',
b_csrf_token: 'XjGnZQAAAAA=KtTuUPS8BVAwFgPGnO_L258XqEg570U9x-UPMNmG9E4XjqJ3lbymjVVIAhCzlAp9jav37e-sGPLf-9RiwxmAvilqfFPMI8V4uToHZhriHTCwo3zerVTCDB1Iu3583HDsMttiV_nr7GBrAkToymA8EhcG9x-lSCI_-6wRWG6omjXDurX1E7SLyiNVAv2Sd5R0cHCL5xGb-154hqHl',
b_show_user_accounts_features: 1,
b_browser: 'firefox',
b_browser_version: '45',
et_debug_level: '0',
icons: '/static/img',
b_static_images: 'https://cf.bstatic.com/images/',
b_currency_url: '/general.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&amp;tmpl=currency_foldout&amp;cur_currency=EUR',
b_currency_change_base_url: '/apartments/index.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_price_type=total',
b_languages_url: '/general.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&amp;tmpl=language_foldout',
b_weekdays: [
{"b_is_weekend": parseInt( '' ),
"b_number": parseInt('1'),
"name": 'Lunes',
"short": 'Lun',
"shorter": 'Lun',
"shortest": 'Lu'},
{"b_is_weekend": parseInt( '' ),
"b_number": parseInt('2'),
"name": 'Martes',
"short": 'Mar',
"shorter": 'Mar',
"shortest": 'Ma'},
{"b_is_weekend": parseInt( '' ),
"b_number": parseInt('3'),
"name": 'Miércoles',
"short": 'Mié',
"shorter": 'Mié',
"shortest": 'Mi'},
{"b_is_weekend": parseInt( '' ),
"b_number": parseInt('4'),
"name": 'Jueves',
"short": 'Jue',
"shorter": 'Jue',
"shortest": 'Ju'},
{"b_is_weekend": parseInt( '' ),
"b_number": parseInt('5'),
"name": 'Viernes',
"short": 'Vie',
"shorter": 'Vie',
"shortest": 'Vi'},
{"b_is_weekend": parseInt( '1' ),
"b_number": parseInt('6'),
"name": 'Sábado',
"short": 'Sáb',
"shorter": 'Sáb',
"shortest": 'Sá'},
{"b_is_weekend": parseInt( '1' ),
"b_number": parseInt('7'),
"name": 'Domingo',
"short": 'Dom',
"shorter": 'Dom',
"shortest": 'Do'},
{}],
b_group: [],
b_simple_weekdays: ['Lu','Ma','Mi','Ju','Vi','Sá','Do'],
b_simple_weekdays_for_js: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
b_long_weekdays: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
b_short_months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
b_short_months_abbr: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
b_year_months: {
'2024-1': {'name': 'enero de 2024' },
'2024-2': {'name': 'febrero de 2024' },
'2024-3': {'name': 'marzo de 2024' },
'2024-4': {'name': 'abril de 2024' },
'2024-5': {'name': 'mayo de 2024' },
'2024-6': {'name': 'junio de 2024' },
'2024-7': {'name': 'julio de 2024' },
'2024-8': {'name': 'agosto de 2024' },
'2024-9': {'name': 'septiembre de 2024' },
'2024-10': {'name': 'octubre de 2024' },
'2024-11': {'name': 'noviembre de 2024' },
'2024-12': {'name': 'diciembre de 2024' },
'2025-1': {'name': 'enero de 2025' },
'2025-2': {'name': 'febrero de 2025' },
'2025-3': {'name': 'marzo de 2025' },
'2025-4': {'name': 'abril de 2025' }
},
b_user_is_new: 1,
b_is_landing : 1,
b_user_auth_level_is_none: 1,
b_is_fb_safe: 1,
b_is_app: 1,
first_page_of_results: true,
b_partner_id: '1',
b_is_destination_finder_supported: 0,
b_is_dsf: 0,
b_pr_param: '',
/*
*/
feature_profile_split_sb_checkbox: 1,
inandaround_more: "Más",
b_signup_iframe_url: 'https://secure.booking.com' + '/login.html?tmpl=profile/signup_after_subscribe' + '&lang=es' ,
b_exclude_lang_firstname: 0,
view_prices_enter_dates: 'Para consultar precios y disponibilidad, introduce la fecha.',
autocomplete_categories: {
city: 'Ciudades',
region: 'Regiones',
airport: 'Aeropuertos',
hotel: 'Hoteles',
landmark: 'Lugares de interés',
country: 'Países',
district: 'Zonas',
theme: 'Temas'
},
autocomplete_skip_suggestions: 'Buscar más opciones',
autocomplete_counter_label: 'Alojamientos cercanos',
autocomplete : {
property_nearby: '1 alojamiento cercano',
properties_nearby: ' alojamientos cercanos',
hotel: 'alojamiento',
hotels: 'alojamientos',
hotels_nearby: 'Alojamientos cercanos'
},
lists: {
collection: [
{
id: "0",
name: "Mi próximo viaje",
hotels_count: "0"
}
]
},
touch_os: false,
calendar_days_allowed_number: 350,
b_search_max_months: 16,
b_run_ge_new_newsletter_login: 1,
b_password_strength_msg: ['Tiene que ser más larga','Poco segura','Bastante segura','Buena','Segura','Muy segura'],
b_passwd_min_length_error: 'La contraseña debe contener al menos 8 caracteres',
b_password_must_be_numeric: 'El código PIN de tu reserva debería estar formado por 4 dígitos. Inténtalo de nuevo.',
b_bkng_nr_must_be_numeric: 'Tu número de reserva debería estar formado por 9 dígitos. Inténtalo de nuevo.',
b_blank_numeric_pin: 'Introduce el código PIN de tu reserva.',
b_blank_bkng_nr: 'Introduce tu número de reserva.',
password_cant_be_username: 'La contraseña no puede coincidir con la dirección de e-mail',
b_show_passwd: 'Ver contraseña',
b_passwd_tooltip: 'Incluye mayúsculas, símbolos especiales y números para que tu contraseña sea más segura',
account_error_add_password: 'Introduce una contraseña',
password_needs_8: 'La contraseña debe contener al menos 8 caracteres',
error_sign_up_password_email_combo_01: 'Comprueba tu dirección de e-mail o tu contraseña e inténtalo otra vez.',
social_plugins_footer: 1,
b_lazy_load_print_css: 1,
print_css_href: 'https://cf.bstatic.com/static/css/print/0cc4ce4b7108d42a9f293fc9b654f749d84ba4eb.css',
'component/dropdown-onload-shower/header_signin_prompt' : {
b_action: "index"
},
b_hostname_signup: "www.booking.com",
b_nonsecure_hostname: "https://www.booking.com",
b_nonsecure_hostname_signup: "https://www.booking.com",
b_fd_searchresults_url_signup: "",
translation_customer_service_which_booking_no_specific: 'No es para una reserva en concreto',
stored_past_and_upcoming_bookings: [
],
global_translation_tags: {"zwsp":"\u200b","nbsp":"&nbsp;","line_break":"\u003cbr\u003e","one_dot_leader":"\u2024","rlm":"\u200f","lrm":"\u200e"},
b_hostname : 'www.booking.com',
b_rackrates_monitoring_running: true,
b_wishlist_referrer : '',
b_reg_user_last_used_wishlist: "",
b_reg_user_wishlist_remaining: 1,
is_user_center_bar: 1,
b_site_experiment_user_center_bar: 1,
b_reg_user_is_genius : "",
profile_menu: {
b_user_auth_level: 0,
b_domain_for_app: "https://www.booking.com",
b_query_params_with_lang_no_ext: "?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d",
b_travel_comm_url_with_lang: "https://community.booking.com/?profile.language=es",
b_action: "index",
b_site_info: {"is_iam_auth_allowed":1,"is_bookings_owned":1},
b_site_type: "www",
b_companyname: "Booking.com",
b_reg_user_full_name: "",
b_is_genius_branded: "0",
b_reg_user_is_genius: "",
b_genius_dashboard_expiry_destfinder_url: "https://www.booking.com/destinationfinderdeals.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d;genius_deals_mode=1&genius_next_weekend=1",
b_reg_user_last_used_wishlist: "",
b_genius_product_page_url: "https://www.booking.com/genius.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d",
b_reg_user_five_bookings_challenge: "",
b_reg_user_detail_name_email_hash: "",
b_user_is_grap_eligible: "",
b_grap_remove_raf_checks: 1,
b_is_bbtool_admin: "",
b_is_bbtool_user: "",
fe_bbtool_permission_is_connected_to_bbtool: "",
fe_this_url_travel_purpose_business: "https://secure.booking.com/company/search.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_travel_purpose=business",
fe_this_url_travel_purpose_leisure: "https://www.booking.com/index.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_travel_purpose=leisure",
fe_reservations_url_travel_purpose_business: "https://secure.booking.com/company/reservations.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_travel_purpose=business",
fe_reservations_url_travel_purpose_leisure: "https://secure.booking.com/myreservations.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_travel_purpose=leisure",
fe_my_settings_url: "https://account.booking.com/oauth2/authorize?aid=304142;client_id=d1cDdLj40ACItEtxJLTo;redirect_uri=https%3A%2F%2Faccount.booking.com%2Fsettings%2Foauth_callback;response_type=code;state=UuwBHXF4vaenKbEOT-6Nb_8uSx4Qi9U67DKWwMnKzjSJfi84w_reLYq5TMYb1L3JKJfdJfBUSsG1zxsdQ9DjqRxClfn1dqqPOgUlbaDCq0LgP7TAZ00QKIeh5xc-jI0VTKWZ5CyWkYCcAe3NfDR2aoxfXSg5Nz2HtLmx1wo4TpCIF1NhF_-PpLkQ_NhDNt2uT4_Iw3uPdzhTxieaUzus1Pcc5kIx9Hp1EBAO5_dY1r1KSTZaLTFJcRsDUFlKce5ga1zSYo5K_np73Sa1tvbtIGAK1YYYZ85Fq4FWp2noyvHVP7-MeApCKp5ZUWZ7yJ0",
fe_my_settings_url_travel_purpose_business: "https://secure.booking.com/mysettings.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_travel_purpose=business",
fe_my_settings_url_travel_purpose_leisure: "https://secure.booking.com/mysettings.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_travel_purpose=leisure",
fe_bbtool_can_see_tool_promos: "1",
fe_bbtool_can_see_tool_promos: "1",
fe_bbtool_blackout_user_company: "",
fe_bbtool_redirect_personal_to_index: 1,
b_reg_user_company_name: "",
b_reg_user_company_name_escaped: "",
b_reg_user_companyjoin_url: "",
b_bbtool_product_page_url: "https://www.booking.com/business.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&stid=934592",
b_is_ie7: "",
b_this_url: "/apartments/index.es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d&sb_price_type=total&",
b_lang_for_url: "es",
b_secure_hostname: "https://secure.booking.com",
b_nonsecure_hostname: "https://www.booking.com",
b_query_params_with_lang: ".es.html?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d",
b_query_params_with_lang_no_ext: "?label=gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB&sid=30610a043c85088182825248c69a097d",
b_travel_comm_url_with_lang: "https://community.booking.com/?profile.language=es",
b_query_params_delimiter: "&",
b_reg_user_detail_dashboard_url: "",
b_is_reg_user_city_guide_in_lang_available: "0",
b_aspiring_user_fifth_booking_ufi : "",
b_reg_user_aspiring_data: "",
b_dummy_var_for_trailing_comma: false,
b_ip_country: "",
b_guest_country: "es",
b_agent_is_no_robot: 1,
b_page_name : "index",
b_landingpage_theme_type: "acctype",
b_brewards_account_details: "",
b_upcoming_rewards: "",
b_rewards_reminder_is_on: 1,
fe_rewards__game_over: "1",
loyalty_program_rules: "",
loyalty_program_status: "",
loyalty_program_bonus_url: "",
b_brewards_loyalty_program_account_type: "",
b_user_has_mobile_app: "",
b_aid: 304142,
b_label: "gen173nr-1FCAEoggI46AdIM1gEaEaIAQGYAQq4ARnIAQ_YAQHoAQH4AQuIAgGoAgO4Auvfm60GwAIB0gIkZjljNmI0NGItYzcxYS00NDFjLWE3YzItOGNhN2IyZGY4NWNj2AIG4AIB",
fe_show_travel_communities_menu_item: 1,
fe_user_can_see_company_reservations: null,
b_oauth_client_id: "vO1Kblk7xX9tUn2cpZLS",
b_sso_logout_url: "https://account.booking.com/sso/logout/v3",
b_sso_logout_callback_url: "https://secure.booking.com/login.html?op=oauth_return",
fe_sso_logout_state: "UogDAtgUCCRlYpV3B_aV_09CwfJOFomUElfuEGlKzlnn9Z0k6tH8Xau7awifwU6mGtoCFQmG5zzvtxhUXTWBbB4PoAlTRXVVZ8mzFT6pue2HiPIiKiFVuMsBHtowiiLkkMLh6fyW5anlRcaK0RF7-sPtnjbCJVmihcS_n_5gKYcC-5Qoux2ecAEasclk9j9T3vfB2IaKsMeVh9ipyTOx2DMz3Di8UZvQP0GN37xfgnEchzFdmT20VoMDgaGvD3rTK4_xtUi2c7B4COR57Wlr_lDcvMmyERsQA9qLDDLFJubnx62SqhPFl_jU-CPy4Bulvu0p6Am35mCpYzDB08OSsN2LJ6-OIfNg3DPEsGfm2BcS_iVPxqh_6HK7KZPdEysha2Mb_gm5XqFbFgD9t_4Tl9StanZ4Q3cmnrvtLo4Gpm0Ko2EaSl_EVk3p5i3JhKH3tR8TfUtS_9_M0EOqSXdGS50Dy2eT31tZemI7Y2CcBhRpqqeDNwHVgKkqvhr7mT-Xp8x1LnYwxb8bnSU",
fe_blackout_mydashboard: "",
fe_user_menu_aspiring_genius_link: false
},
accounting_config: {"decimal_separator":{"default":","},"html_symbol":{"XPF":"CFP","INR":"Rs.","HKD":"HK$","ILS":"&#x20AA;","JPY":"&#165;","ARS":"AR$","EUR":"&#x20AC;","USD":"US$","BRL":"R$","CZK":"K&#269;","GBP":"&#163;","IDR":"Rp","PHP":"&#8369;","TRY":"TL","CLP":"CL$","PLN":"z&#x0142;","RON":"lei","SGD":"S$"},"currency_separator":{"GBP":"","default":"&nbsp;","USD":"","JPY":""},"group_separator":{"default":"."},"num_decimals":{"KRW":0,"MZM":0,"IDR":0,"COP":0,"KMF":0,"AFA":0,"XOF":0,"IQD":3,"MGA":0,"default":2,"BHD":3,"VUV":0,"KWD":3,"TND":3,"DJF":0,"XPF":0,"LAK":0,"LYD":3,"VND":0,"PYG":0,"TJR":0,"TWD":0,"RWF":0,"HUF":0,"CLP":0,"BYR":0,"XAF":0,"ECS":0,"JOD":3,"OMR":3,"GNF":0,"TMM":0,"BIF":0,"JPY":0,"RUB":0,"ISK":0,"UGX":0},"symbol_position":{"PLN":"after","RON":"after","default":"before","CZK":"after"}},
distance_config: "metric",
is_listview_page: true,
b_this_weekend_checkin: "",
b_this_weekend_checkout: "",
b_next_weekend_checkin: "",
b_next_weekend_checkout: "",
b_official_continent: "",
b_deals_continents : "",
b_messenger_url: '',
b_open_messenger: false,
b_is_asian_user: '',
b_days_to_checkin: '',
b_extra_ajax_headers: {},
et_debug_level: '0',
notification_squeaks: {
},
fe_is_cname_cobrand_header_available: '',
wl_squeak: {
open_wishlist_from_profile: 'ZQafLebbMTSWEEdC',
},
genius_vip_squeaks: {
gnsSpun_bannerView_index: 'TDXRPCTOYESVCMIWIOQHFRYDEZRae',
gnsSpun_bannerCtaClick_index: 'TDXRPCTOYESVCMIWIAHIcaWGNPZSVZMYIO',
gnsSpun_bannerDismiss_index: 'TDXRPCTOYESVCMIJeBObVIScfFdHVT',
gnsSpun_modalView_index: 'TDXRPCTOYESEIEYXWCcYbaBfFdHVT',
gnsSpun_modalCtaClick_index: 'TDXRPCTOYESEIEYXWIYKdVaQBYNZJdDBKC',
gnsSpun_modalDismiss_index: 'TDXRPCTOYESEIEYKTSCQJKbNVZMYIO',
gnsSpun_reminderModalView_index: 'TDXRPCTOYESEVfFTdJVDBaUXaWNBALOVZMYIO',
gnsSpun_reminderModalCtaClick_index: 'TDXRPCTOYESEVfFTdJVDBaUXaWBXFJVGSBBNPMPSXWe',
gnsSpun_reminderModalDismiss_index: 'TDXRPCTOYESEVfFTdJVDBaUXSZWcPXQUJdDBKC',
gnsInsCrd_bannerView_index: 'TDXRPVRBKKJVbFPbVCMIWIOQHFRYDEZRae',
gnsInsCrd_bannerCtaClick_index: 'TDXRPVRBKKJVbFPbVCMIWIAHIcaWGNPZSVZMYIO',
gnsInsCrd_bannerDismiss_index: 'TDXRPVRBKKJVbFPbVCMIJeBObVIScfFdHVT',
gnsInsCrd_modalView_index: 'TDXRPVRBKKJVbFPbEIEYXWCcYbaBfFdHVT',
gnsInsCrd_modalCtaClick_index: 'TDXRPVRBKKJVbFPbEIEYXWIYKdVaQBYNZJdDBKC',
gnsInsCrd_modalDismiss_index: 'TDXRPVRBKKJVbFPbEIEYKTSCQJKbNVZMYIO',
gnsInsCrd_reminderModalView_index: 'TDXRPVRBKKJVbFPbEVfFTdJVDBaUXaWNBALOVZMYIO',
gnsInsCrd_reminderModalCtaClick_index: 'TDXRPVRBKKJVbFPbEVfFTdJVDBaUXaWBXFJVGSBBNPMPSXWe',
gnsInsCrd_reminderModalDismiss_index: 'TDXRPVRBKKJVbFPbEVfFTdJVDBaUXSZWcPXQUJdDBKC',
gnsBkun_bannerView_index: 'TDXRPVReBZAPXPRLaWNBALOVZMYIO',
gnsBkun_bannerCtaClick_index: 'TDXRPVReBZAPXPRLaWBXFJVGSBBNPMPSXWe',
gnsBkun_bannerDismiss_index: 'TDXRPVReBZAPXPRLSZWcPXQUJdDBKC',
gnsBkun_modalView_index: 'TDXRPVReBZAZXDOXVaUSIcCJdDBKC',
gnsBkun_modalCtaClick_index: 'TDXRPVReBZAZXDOXVaSXbfIAbSOBYDEZRae',
gnsBkun_modalDismiss_index: 'TDXRPVReBZAZXDOXbNHNERGefMPSXWe',
gnsBkun_reminderModalView_index: 'TDXRPVReBZAZKIdDZEWVZJORIVTbWdKPMPSXWe',
gnsBkun_reminderModalCtaClick_index: 'TDXRPVReBZAZKIdDZEWVZJORIVbRALWIQZDSBfFdHVT',
gnsBkun_reminderModalDismiss_index: 'TDXRPVReBZAZKIdDZEWVZJORAUYBFaATLDEZRae',
gnsInsDisc_bannerView_index: 'TDXRPVRBKKQUYBFLLREHGVaUSIcCJdDBKC',
gnsInsDisc_bannerCtaClick_index: 'TDXRPVRBKKQUYBFLLREHGVaSXbfIAbSOBYDEZRae',
gnsInsDisc_bannerDismiss_index: 'TDXRPVRBKKQUYBFLLREHGbNHNERGefMPSXWe',
gnsInsDisc_modalView_index: 'TDXRPVRBKKQUYBFLQRfDRIVTbWdKPMPSXWe',
gnsInsDisc_modalCtaClick_index: 'TDXRPVRBKKQUYBFLQRfDRIVbRALWIQZDSBfFdHVT',
gnsInsDisc_modalDismiss_index: 'TDXRPVRBKKQUYBFLQRfDRAUYBFaATLDEZRae',
gnsInsDisc_reminderModalView_index: 'TDXRPVRBKKQUYBFLQRWMPNFaJdPCHKIOQHFRYDEZRae',
gnsInsDisc_reminderModalCtaClick_index: 'TDXRPVRBKKQUYBFLQRWMPNFaJdPCHKIAHIcaWGNPZSVZMYIO',
gnsInsDisc_reminderModalDismiss_index: 'TDXRPVRBKKQUYBFLQRWMPNFaJdPCHIeBObVIScfFdHVT',
gnsOnbe_modalView_index: 'TDXRPCTDfELZXDOXVaUSIcCJdDBKC',
gnsOnbe_modalCtaClick_index: 'TDXRPCTDfELZXDOXVaSXbfIAbSOBYDEZRae',
gnsOnbe_loginModalView_index: 'TDXRPCTDfELHfGEWVZJORIVTbWdKPMPSXWe',
gnsOnbe_loginModalCtaClick_index: 'TDXRPCTDfELHfGEWVZJORIVbRALWIQZDSBfFdHVT',
},
trip_types_squeaks : {
quiz_open: {
beach_holidays: 'eeBaWdcQPCPRFcFPAZSATYO',
beach_holidays_continent: 'eeBaWdcQPCPRFcFPAZSATNOYVUAPHe',
beach_holidays_country: 'eeBaWdcQPCPRFcFPAZSATNMIWe',
beach_holidays_results: 'eeBaWdcQPCPRFcFPAZSATNdXUC',
index: 'eeBaWdcLDEZRae',
},
quiz_submit: {
beach_holidays: 'eeBaWBLHFeBaUEAFQFfBNPbeKe',
beach_holidays_continent: 'eeBaWBLHFeBaUEAFQFfBNPbefeKOWBBO',
beach_holidays_country: 'eeBaWBLHFeBaUEAFQFfBNPbefRLT',
beach_holidays_results: 'eeBaWBLHFeBaUEAFQFfBNPbebaORe',
index: 'eeBaWBLHFeVZMYIO',
},
quiz_data_failed: {
beach_holidays: 'eeBaWdbfZJVHWEKJFYWYHbdbEJNZJSUC',
beach_holidays_continent: 'eeBaWdbfZJVHWEKJFYWYHbdbEJNZJSUDUITIYYT',
beach_holidays_country: 'eeBaWdbfZJVHWEKJFYWYHbdbEJNZJSUDKae',
beach_holidays_results: 'eeBaWdbfZJVHWEKJFYWYHbdbEJNZJSUFRTKe',
index: 'eeBaWdbfZJVHWEKJFfFdHVT',
},
overlay_open: {
beach_holidays: 'TGPbbBQBaUEAFQFfBNPbeKe',
beach_holidays_continent: 'TGPbbBQBaUEAFQFfBNPbefeKOWBBO',
beach_holidays_country: 'TGPbbBQBaUEAFQFfBNPbefRLT',
beach_holidays_results: 'TGPbbBQBaUEAFQFfBNPbebaORe',
},
overlay_close: {
beach_holidays: 'TGPbfQcUNSVTMIZGZVSBYQeRe',
beach_holidays_continent: 'TGPbfQcUNSVTMIZGZVSBYQeLeRDHSOC',
beach_holidays_country: 'TGPbfQcUNSVTMIZGZVSBYQeLHGO',
beach_holidays_results: 'TGPbfQcUNSVTMIZGZVSBYQeQLCHT',
},
overlay_data_failed: {
beach_holidays: 'TGPbbGcBYWMVbXEQSVTMIZGZVSBYQeRe',
beach_holidays_continent: 'TGPbbGcBYWMVbXEQSVTMIZGZVSBYQeLeRDHSOC',
beach_holidays_country: 'TGPbbGcBYWMVbXEQSVTMIZGZVSBYQeLHGO',
beach_holidays_results: 'TGPbbGcBYWMVbXEQSVTMIZGZVSBYQeQLCHT',
},
dummyvar:false
},
insurance_squeaks : {
mfe_ready: 'fFaMLVBGVPLXNWSLT',
quote_reference_received: 'fFaMLAeUVKZMRKIOfFRJXZMHbAae',
insurance_received: 'fFaMLVDERdafXdDEAJLT'
},
trackExperiment : function () {},
"error" : {}
},
ensureNamespaceExists: function (namespaceString) {
if (!booking[namespaceString]) {
booking[namespaceString] = {};
}
}, hotel: {}, experiments: {}, startup: {}, experiments_load: {}, startup_load: {}, promotions: {}, timestamp: new Date()};
function Tip() {};
(function (scope) {
booking.env.b_sb_autocomplete_predictions_url = '/autocomplete_csrf';
booking.env.b_sb_autocomplete_predictions_method = 'GET';
booking.env.b_sb_googleplaces_carrier_url = 'https://carrier.booking.com/google/places/webautocompletesimple';
booking.env.b_sb_googleplaces_carrier_method = 'POST';
var params = scope.search_autocomplete_params = {};
params.v = '1';
params.lang = 'es';
params.sid = '30610a043c85088182825248c69a097d';
params.aid = '304142';
params.pid = '0007990fdc5f014e';
params.stype = '1';
params.src = 'index';
params.eb = '0';
params.e_obj_labels = '1';
params.e_tclm = 1;
params.e_smmd = 2;
params.e_ms = 1;
params.e_msm = 1;
params.e_themes_msm_1 = 1;
params.add_themes = '1';
params.themes_match_start = '1';
params.include_synonyms = '1';
params.sort_nr_destinations = '1';
}(window.autocomplete_vars || booking.env));
</script>
<!--[if IE]> <script nonce="jxycb7TJvCOpW8s"> document.createElement('time'); </script> <![endif]-->
<script nonce="jxycb7TJvCOpW8s">
booking.jset = {"r":{"TeCYbeFOUdAHLAWPHDDHQHDDWe":1,"NaMPBEUSeONJICAfWdMADUfTMKe":0,"OAZOXHHPJTcfODaYbTZWKNeHT":1,"HWAFYFGeNBLScEXO":0,"HWAFNeOYFWUJNVPNSMXC":0,"NAFLeOeJYTBfEDXaNDTQCYO":0,"OOIBTISIBTINLeNSBNZEPfeZDbeDUHePLSIRLT":0,"HWAFNeOYDYEaNdNFKMBKOHeYHe":0,"BKATYFRURURYVcTQQDAURAfPMAeOcRDNYTUXC":1,"aXTfHAEDBOSCDWOOWXKadfKTYUAFKFGANdSSLT":1,"cQYIMdUTNOUbWNPfIVXBPKAJbVJWcWXFZEVC":0,"aXTfHAEDISIBTEaJPGAAQecbdfIPYFPVMECLO":6,"TZUfODAKSHAJDFNHLWEYZLPNBLULECC":0,"PeYGIHRIZWNZKCBZdCUfIEcTGVKCHT":1,"aWQOcYTBOcHeVacDTUTZMXC":0,"HWAFNeOYDXKe":0,"PPXGFRURURNJJYDBMdBLPLLZHT":0,"bPJAZNdAYbeDUZSQZXSMSeGEVUSZMSMGGTHHSOC":0,"cCGaYSdVKKMadMUPXPRQNMFBRcYITfNZeFOOIBBO":1,"eWHMcCcCcCSYeJNbUPeDbYBSCOODEVGZXUCeeWXFZEVC":0,"HMbIKELcdEZYHRYKe":0,"eWHMcCcCcCWEYcZbMQMLebPXKXXGPNSOUJBYASOWNIHHZCJNLEMVbEICFQbMC":0,"aWQOcYTBTLEARWSdUePTBHe":0,"cCGaYSdVKKMadMUPXPRQNMFBRcYITfNZeFcCcCcCC":0,"cCHObdRdJJVdfUJGFDSeBcZFLMFRURURHe":1,"aWQOcYTBABVYUTeKHMYAZbHJdFMUC":0,"eWHMOOIBTIPPQFFdGdfUSJXIXXQDZBTNVNHbBTCcAWWFOAZbGQDKe":1,"TfNZeFcCDbOadBKCLFAUVALCC":1,"aWQOcYTBHCTQLPbbVFRTaYYfPHe":1,"IZVTWRGMMZNECfJKTdYXSHPEcTZFKJMFXe":1,"aXTfOFJZMYeKBABVYUaWQMdWKZGdVKMSZKUFO":0,"aWQOcYTBNbbLJeEdCVAZdUUaYYfPHe":1,"cCHObdRdJJVdfUSCEcdNHMddKNKNKWe":0,"ODREBBVYUOLWCGEREHGC":2,"dLYHMRFeRLeMXFPACQVCMIQRWSEZIeZAfWdVT":0,"aXTfHAEDISIBTXMRUMVMIOUdAHLAC":1,"IZBTdFPfBKSAELSXPHceULJBbAbCWCJUbUKe":0,"INFddKNKNKHYPTJBbcGfPLEUDQbC":1,"HMbIWWPaDMRJLYZET":1,"HWAFNeOYJXAaddbLXMPMTXEUDae":1,"aWQOcabcRFYTBACXKGRZRae":0,"HWAFYHIEJKaEHT":0,"adUAAIFGXZXeIXdeYPebBGSEbdMAPWZJae":0,"OOIBBQMALHYYfPYHIEfAeUC":0,"PcVFHMPbJARGPXAPEPfIZFKFefOSWEPbCaASBaRJHET":0,"HMbVacDNOdRSCXJNBOSMUO":0,"HWAFYTfANBAAJSWQIXe":1,"NAFLeOeJcCcCcCSfdQfAJMEUBZQfGOaYEO":1,"dLYHMRFeRQNcMXdOVCUeMaAEbDHFAUVNKe":1,"HWAFYSGPRXe":0,"cCcCcCWPDYGGcQYIMdUTNOUfAJEXO":0,"NAFLeOeJYTBNAFQVFaXdJZGbGYJO":1,"PcVFHMPbJARGPXAPEPYKDcdWPBcELWdZXZdNUNEIEBGPYJOKe":2,"cCHObIKELcMWSRSPFeSICZYUNZdeLEcOOIBBO":0,"cCbCeCJHSTQLSWTUTZONebEJLBWHcPXe":1,"NAFLeOeJYTBfEDXbdbEJNZJSDefXDbXT":0,"aWQOcYTBaMEAffIVXBPKAJdDBKSCEcdcUYNdHXT":0,"fefSKeERCeYaCFdXGDSCDWOOC":1,"cQYIMdUTNOUbWNHYLFBSBBTZMXC":0,"aWQOcYTBNbbFJbdaHOOZTZMTXEUDae":1,"HWAFYHIYTdELT":0,"aWQOcYTBHaaCFddeBVOSHbESHUZTUWe":1,"cCHObdRdJJVdfUJGFDSeBcZFLMWPHDDWe":1,"VOTcHKcMKWMAcQPePAZZODdMO":0,"adUAAIFGXPQFAeDHFWRXZXe":0,"HWAFNeOYDRYQVeCIObTEPVIRPRe":0,"AZNdAYbeDUZZJBcSeWSINNKbNIFHVPSDDKe":0,"aXTfOFJZMYeKTcABVYUaWQMAZdJAINQHPQcDMFXSTHSGdNC":1,"aWQMYTBNbbWUJIFGKMXDORMTfLT":0,"TeCOeJHBdOXKbUBOMZJMCCdGNcbaBeHdZdeQHUYEFDXGDFO":0,"OMIZbREeMXFZCTHO":1,"TDXbETfZHfLebbMIGDC":1,"OOGbIFBUcJZLJHNZGCfMefFBKXe":1,"aXTfHAEDEVHWEcTNSVbXQFRWZXJTZUFPTWHT":0,"dLYHMRFeRLPYKDcdDGOQZeICRO":0,"HINZJLeUXSaZbdKNKNKZeDUHYKe":0,"OJVZAEacBHJSORBdTZWNWe":1,"fefSCOJZfIZZRAbBaFKbLVBHVNVBUKcfDHCOLcO":0,"aWQOcYTBHaaCFddeBVOSPACLO":1,"NAFLeOeJYTBfEDXfQLQBTdQdJAIO":0,"OOIBBQMALHYYfPYBRRCaUSYeJfaNfNFNeWDIPPQFFdGdfC":1,"HWAFYTfVEdFdWTNC":0,"ODRdLOLOLOCcaWQMaMEAKe":0,"HWAFNRYLJVDXKe":0,"PcVFHMPbJARGPXAPEPYKDcdFcIAFDZLANOSdPIHAae":1,"ABVYUOOIBTVXVRWTaAABGOHaT":1,"cCHObIKELcMWSRSPFeSICZYUNZdeLEccCcCcCC":1,"HWAFYHIEUXPNMWe":0,"ZOCDKBZMREYbdbEJeNYQbVceVbYANcGLAZdUUKe":1,"aWQOcYTBABVYUEKCWNBOcaGPaXe":0,"OOIBBQMALHYYfPNeUbZFMLaUJKDKaT":0,"HWAFNRNRWSdQCXHe":0,"ODREBdeUbZFMLaUWPBcHVHYQC":0,"OJVZAAURAfPMTcZJFeDBRcFPLDEZREBBVYYT":0,"OAZOXHSdNMfefVUddOKVWOVZMYIO":1,"THHSOWPDSDXbWUJIFGKBAFVNaRe":0,"HWAFNRNFMWXe":0,"eWHMcCcCcCJVfYceDFbZNSHfeRfIXGZaTCMDedRTKeeHRbdFIKe":1,"HWAFNeOYJXAaddbLXMPMfXLMEO":0,"HWAFYTbDOLbeTSLbFZVGAZfWZJae":1,"aWQOcYRYNZWNZeDUPOOFBfC":0,"NAREFTTNAECHFWUC":0,"PPXGWPHDDZAAPMYEcNfDffSRe":0,"HINZJLeUXSaZbdKNKNKPCbUdFKBSXUC":1,"fTPMPXcRWLIZSVafEJZbGXZaTaTaET":1,"TeCOeJHBdOXKbUBOMZJMCCdGNcbaBeHdZdeQHUHe":1,"cCcCcCDPCDMMfBBJeKZdLZEHe":0,"aWQOcYTBNGEcbedBWOdMZWfOFaNVSGWe":0,"eWHMcCcCcCSYeJTUDXJEBfPDIbEfKFWUC":0,"PPXGSCZSBfIUELAZHeEAHFBddQJdUDEYIKe":0,"HWAFNRYHXT":0,"YdXfCDWOOWNEGUGTAWLAHPZIdUbSIBKbLae":1,"HINZJLeUXSaZbdKNKNKPQfQOHT":0,"NAFLeOeJOMEKCccTRLHe":0,"TZUfdKNKNKPRVfEeSPGOaYdYO":0,"TZUfCDWOODXaJPeTJLBWHZHT":0,"HWAFYTbeWRTcEUXPNMWe":1,"dNXOBVbWfETXEcYPEYRAbWNWe":1,"eWHMAEaAJDaFBddQWBebfFSKe":1,"HBAEHIddAbDZSaT":0,"cCHObdRdJJXRDVMDTEREHGURXZALOLOLMO":0,"aWQOcYTBOOIBTMXWHUSCNVAELXT":0,"HWAFYecGbRbEQMRYeWWBTMAOEITKe":1,"aWQOcYTBHCTQLPbbVFRTfDHCOLcO":0,"aWQOcYTBNLJPNDJdQCXYPYKDcdC":1,"HWAFYTfJaAKDfWVdaWNBeWe":1,"eWHMeDUbWNPMQOSRWAUSCKTWFEXO":0,"YTTHbXeeVJWcFKJPFNJQVVEbMKXe":1,"HWAFNQETEYJO":0,"aXTfHAEDISIBTCJNFTCJUbUKe":0,"OOIBTISIBTAcFMBRYTYcbWaGO":2,"HWAJLGbbeLNJVSYeJfTaLSGDVdMVSDFVKZcdBKe":1,"OOGbCDOTdfdcfEBNQKLDTLZOXRT":1,"THHSOFRURURYNYHIYTLRQJRbWdWOGVO":0,"HWAFNeOYSGDMDEbedeRZLT":1,"YdXfdKNKNKZNaNNALFUZSKGWe":1,"aWQMYTBNbbWUJIFGKMXWPHDDWe":0,"cCHObdRdJJVdfUSCEcdNHMdCDWOOC":0,"IZVEdScHMDVIUZHKTWJPLeSECVdEKe":1,"YdXfTQNAVWPJSSAPPedJKe":1,"OJVZAAURAfPMTcZJFeDBRcFPLDEZRdLOLOLMO":1,"AZTbaTaTaBfEDUePdJKe":1,"HINZJLeUXSaZbCDWOOSeONWHC":1,"PcVFHMPaFBddQWHFDdcaNYCLC":0,"OOIBBQMALHYYfPYJWcRVLUZBeWe":0,"IZVEdZJScSUaPPOIPPQFFcSTKe":1,"OAZOXZeWRBYTZLTNRTHT":1,"aWQOcYTBOcHeVacDMZC":1,"OOIBBQMALHYYfPYaaTLTbUTPVLBLUZBeHPWEYcZbMQMLWe":1,"NAREFeDUfJTcfODbLWZHOfYO":1,"INFddKNKNKPTJBbcGISNFZQaWe":1,"BKeWIEcbQGWDUNRERQZPPQRfWcHVdYIKe":1,"HWAFYTbfFAWTWMRHSdFaLbFC":0,"TZUfdKNKNKPYPaEcKNOYEbDZaWe":0,"KbYJCBKJSZJXEYHOaT":0,"PPXGSCZSOPOFDIKdFHaO":1,"NAFLeOeJYTBNAFQVFfGEbfWEdbKOWe":0,"HWAFYTbaZFMQKHSKTHT":0,"TZUfCDWOODXbVSCNVAELXT":0,"NAFLeOeJAEHIOQLeKfWe":0,"YdXfdKNKNKZNTbGLGZfFeYECUSVTMKGZHIVSaO":0,"fefSKeERCeYaCFdXGDSdKNKNKWe":0,"aWQOcYTBNbbFJbdaHOOZTZCDWOOC":0,"BKbVZWNHQHDDHYYfPYRXFFfeTQcaNYCLFGLRWeXRT":0,"ZOOPRAFOOIBTdQHRYZJARGZXUMcTXObKXe":0,"OOIBBQMALHYYfPYHIGKTJVJbeYO":0,"IZAeJXVEdeJPVNLZIPPSfDcZMO":0},"f":{"bQGBNPBFDHOIVBAQbHGAXJNbMSXe":1,"TDXbEZfebGSRaPSZWTeDDEfYCeHHQeFXCEC":1,"eRYPHbcGRcHWVdCdfaefcVDZBNPbNKe":1,"eDSdUaSdFaLbFSMWdTXJbFbRILT":2,"eEBZFJZeOQHeSLHDEFRYAbZZTPUIFKdIIYO":1,"TfNZeFOBIJAdZJNfEUbQWe":1,"ZCOBeITPBRWe":1,"OMNQEDXYeQMMaXdRT":1,"YdXfdKNKNKHUSBAPBRYcFITC":1,"cCcCcCSYeJfaNfPESHbfNFNVBUKcTKe":1,"cCHObVZMYCVKKMadMUPKAMUTUWZaRbdFIKe":1,"HVPZdZGIGPeaXYRJFDdHWYRIGFZMO":1,"IZVTWRGMPOOAUaLeFfZC":1,"eWfbWNZOdLUObUANTVacDYO":1,"NAREFYTBacTTNAIOFWC":1,"HMbVXSAWXaUJIQNBOFO":1,"aWQOcYTBOOIBTBRfefWcYRfLVT":1,"aXTfHAEDBOSdQZXDOXWXKYSSdadFQRMeXcIFUWbWOOC":1,"aXTbSFYTBHMHHVbReINLOLOLOAZfLdPUVIZdRRT":1,"aXbSbcOQPCPRWXdBGZXeYBBVYYT":1,"HWAFNLTLAYDNHOeWWGO":1,"cQYIMdUYbeYYZVDPPXLdHUYWCGTQFSUCKXe":1,"AdZZMQMLSWdRdJceBeWe":1,"OaaKQZZMcBfFdHMZQbDNFMYCeVDbPaT":1,"PcJJZGafIRVVSCZC":1,"adUAVYCdFNLBdLEccZHEHFDcHOReeYaAFZKXe":1,"eWffHbcGRcTeCYbeFbINfHIDJNMTKe":1,"TfNZeFOBEUcKBSMRBGKTJVJTfNZBRe":1,"fefSCOJZfIZZRAbOOLVBHVaMEAKe":1,"NAFLfOdASUTbWXGdAecLUTdWNAIKGPAMIGDZHXRT":1,"HWAFNeOYFWUJNVPNSXKFKe":1,"cJUJSBbSfURSSZRO":1,"ODRdHUNZWODDRYGPCJKDKGNET":1,"AEUaYPZZGbBQMdBaFRYBJeEdUdZAXDKfKdXT":1,"aXbISHcAaZEYbJeDIBLGafAPeHT":1,"aXbSbcBUcJaRMSAdRTUOOIBBO":1,"fEOMTDOOMNVLWPGGHWLUTMfXLMESGZeKKWe":1,"BKeWIEcfDeOeXefNUGcNHDORMTfLT":1,"OJVZABYfQPNTDEDRcQFRURURHe":1,"OaaKLZfefIMLefBcdCBTFHZRTYC":1,"HWAFYbIeIPYbeTQcaNYCLC":1,"YdXfdKNKNKPAJeGHSWedNDeQfYUedJYVT":1,"ZdZbaBOQJYcSaERMJDDaVHNPVT":1,"dDfPJNCFGfGfZbCEWZeEHJddEPXeC":1,"NAREFBCAURAfPMcQYABKdBSYOVT":1,"HWAFYRQTaNVbIeIPNJKe":2,"HMbCALZBYeRKTTWZcYTET":1,"HDDZOWNdOZBYTZcYWHXGWe":1,"OOIBTBBLXOLWCGEfJcfNWOCeMJYGIWe":1,"NVNZYeJBBYZUeQKBBTZVGO":2,"eWfCDBOSVIHQcaMEAaRZEGcCSRPLSEdLRSUWe":1,"aXTfHAEDBOSOPRSAeUDUKVZFWbWOODPBFO":1,"YTBHMbAaBcHOGZWFfRbdPNZFZeaPQQDIVXO":1,"HMbTYWeLJFaMEAfabSWEWZWNWe":1,"PPXGSCZFCROQFSdVbCLJNGO":1,"OMHMbEdeAFSVAaT":1,"OMYNaXTacMSHePLSIRSHT":1,"cCHObVZMYCECVVDJYMNHFRURURHe":1,"cJUJDbfGYUXAUADaRABGO":1,"HWAFYTfbacWXT":1,"eDSdUfYPQBcYZNMdbDcbOLRe":1,"ODREGZUTPOOOCaJebTZWKNUMEJXO":1,"BKATYSCZWNOHeNCFJeHfLebbOceZXHe":1,"NAFLeOeJOMOLJKFQVWFQUEJDXO":1,"GfHOUbeKKZaaNRfBaFKbdKCFKVAFUJC":1,"NAFQVUNOdOKBBIUJLMSTBGIWUFcJcSVWe":1,"dLcXJeITPMObdTYMIfJaAKDKe":1,"BIUJLMSYTUFXReEIQWHJNGLTLdFYeVAZdYINGaVC":1,"febdSAYYBXYFPEOcYRISUaPZdMOOIBBO":1,"ZOOKTfGCfJaAKDAMUDWOdOIfQUfDACHOTVJXNMWSdVLT":1,"bLEBBVYUIZdDMcMdPFKFBOPdQVMSdaHMVHSGFO":1,"BIUJLMJVfNabFXFBcEbJVKfLWe":1,"HCZANHDdLYBNZfAAEAQMYaNVSDcRZTEUPHdGWe":1,"AdZZBJOTXNOQZJFJadMXbIPRaO":2,"HWAFYAOEIEYXT":1,"TeCOeJGDYLJZGNBeWe":1,"bQEAHSGVTdWPBQGMZbeKRJdPWKPNET":1,"UaDELaBWPVCBGWcOCfWPcC":1,"fTPIMLPbTfBfAJEAHYGGET":1,"AdPcRXUDEDOeWFeTKEcLOIWe":1,"BHDTJdReQHUYYOLEaMYWHT":1,"NAFQCJWZUbGQDaYfXPRQNCFeZIJDNSNC":1,"PcJJSJIRADMPIGUO":1,"TfNZeFOBedJFFWJaecO":1,"cCHObTYWeLJFaMEAaYLfDbaTaTaET":1,"HWAFYDEZREPVIRPQJbSYT":1,"HMbAURAfPMPfSWBJOTXNAHUHe":1,"NVNZYeJYQGARWSdZcIYUdSYO":1,"AEAFSXZCTPVLWLdTC":1,"ODREGHXFZPeZYSHIfDWQIORe":1,"VKGcCcCcCFEeNdDYBRXZXe":1,"BIUJLMFPAACJWMdIKdFHaO":1,"NAREFeDUfNeLLaAFZKXe":1,"YdXfMTXEUDdSYFOLbOMFcHRbdFIaZPEEccaT":1,"aWQOcYTBbJfEDdGUKCMeIKdFHaO":1,"HWAFYTfbacWCcKbOFHe":1,"aWQOcOOIBTdQeRHfEXNUGUSHMaLMJYJbVWe":1,"HWAFYTfDHCOLZIHSHFTdbLcYFPWe":2,"OOIBTVXINLcMNQKAENJHe":1,"OMYTBZbeKRJcSbCTHO":1,"eDTANZVVMMeHGDWLfEZfJfQfPIdOWe":1,"ISSfYWZWREfWBQBTUfBUPHe":2,"bdZSAccTXYaWHFXedFIaQYaC":1,"fTZaTaTaBYNZSINSQcaGKRRT":1,"HWAFNRYLJVDIDFKORe":1,"IZBTdFPfBKSAELSXPHTaSWVacDTRTfIZKe":1,"HMbOCaJeaJERObWNWe":1,"NAFQCJWZUbGSRaPSZWeAQHXeeZRbHDJQaCRbNZBUbdfdbJdPXUUBMDPEdHZFRWe":1,"IZVBEJTVFbXUCeeDNQUZARYfYO":1,"UYIVaVbMVYNFPdNYKFFaMEAaUC":1,"NAFQVUNOdOKBBIUJLMFfVUUADDRHYTKe":1,"OOIBTBBLXOLRIYFTUZSTFZTHReIET":1,"eWHMcCcCcCWEYcZbOHHWcZZONQfTZBYKe":1,"NAFQCJWZUfRFGdNECYBZSBVNRXMFDFaT":1,"NVFVcfTbdNNRSCWffPNfAVeKBMOLDEZREBBVYYT":1,"HWAFYNFIYJKVSSVHYDJO":1,"NAREFEJKaEcZGccARTKeeHRbdFIKe":1,"HWAFNRNFSUCDBae":1,"eDSdUfbfKBZTSJeOXbbFFbJFSMZDaFFcae":1,"OMIZdFSAPVFfFAYTZTEeNGTOFMeRT":1,"cCHObIPPQFFNcUWBZEWaSddKNKNKWe":1,"IZALOLOLOICWRdGOHHABNaSdFaLbFC":1,"HWAFYSGPcVDZBTUbERVNUESGQCdeBVOSWe":1,"adUAVYCdIcPWWWeTabZNHC":2,"eDSdUbaaNRfXaIRdNDDC":1,"fTZaTaTaBYNZSBJIREVSGDMSdC":1,"HMbdDRJNGPbBfDUIEbfWCUfWLEXPBOFO":1,"cCcCcCDPCDCcACOJOMYPNdeBVOSWe":1,"HWAFNeOYSUaecfbEIEYXT":1,"YLXASfBPbdFDOeecbXAKe":1,"HMbVXSAWXaUSCZC":1,"PeYGIHRIHYYfPYRZRdcCcdVUUADRVKaMUZQOQCXeRe":1,"aXbSbcOQecDKAJDKVHbVDZaTaTaET":1,"aWQOcYTBfBZVNLbMBYGUXe":1,"ABVYUYNaXTbQGNQJSFVfEQIJceVSRe":1,"HMbEHRKOEIaHVQdOXAaXFZPeZeNSCZC":1,"YTBUIHOdVLBLBGVPQWIbdPXILMUC":1,"bQbYWXFZEVWKMTUBVXaCNFOOIBTBFO":2,"eDSdUfZPUMVBFUZCHQfBSdJRe":1,"OOIBTBBLXOLDEZRdZbVeUPXKECHTeYT":1,"HWAFYTaYbZNcTAcHe":1,"aWQOcYTBVMXNPXPRLO":1,"eEBZDEQdASUTbWeDZQNUaNSVRaUC":1,"GCSXZLDeABaKDDKIHecbOFYfZXXddOERe":1,"fEOMdLHOAcFNADHcKdZJVVUSCZC":1,"BCdGNQbHVEZYeNbNEIIYIEbFRFeQEHT":1,"cQDJGZaTaTaBYNYeVacDYO":2,"OOIBTBJcQEcNNPadLXe":1,"YTcEAJDTfeTHAUNSTAUOTKe":1,"NAFQCJWZUbDOQRTWZBNHDFXXccBPKe":1,"BCOOOYOKZeSdVXZMKddbQJFYJO":1,"OOIBBQMALPbfVbQXLQPaeKKe":2,"ODREGZdaAYWXDHIcNQJBCC":2,"HWAFNQbHVEZNHSePPFfODJKaZWNWe":1,"NAFQCJWZUbEXROEccQYIMdUTWfbGQDaYKe":1,"eWfCDBOSMVZALOeERbISfXPRQTDCOOJMFVTXSLfPIFXKeKe":1,"aXTfHAEDISIBTBBLXOQWBObbObSVHLeNBLLT":2,"GdNIXCPTBcRZdbXdUKLaDWVcJNZGCOeFKebAZOHYO":1,"GCQKEaAJDbJANafabSWUHbDORMTfLT":1,"bQEWMdCPYLaALSGQCdBC":1,"dLcXJeITPMObVcKYO":1,"HMbMdIXdfdTFeSICZeQPXUXZePBOFO":1,"AfPcCWbKMDNdEHXdRT":1,"HMbCTYAaZZWIeXUJAFSCZC":1,"HVPZdZGIGPebdTYMIfKUGO":1,"HVUBYHDWNZGSRaPSZeDUHYbVSKHRbdFIKe":1,"HWAFYDEZREbUObQGNLXTFWOVVWaIfXT":1,"eDdeFCYAAFUTUeECdRJJRbWNHUDSC":1,"NVNZWUHVSeAcfeJWGaRBQBXRAXZZXIVXSKTNC":1,"THHSODPNGZfSeUHMDMKdFbQKae":1,"HMbdDJXcMKAaFYNLWLdNHWTRTfIZfQPBOFO":1,"HWAFYTfVEdFYRZOFHBUBMDOHQC":1,"bQGBVIZdRJGINYTFIYaXROZEBBVYYT":2,"HWAFNeOYSCaIbNfHZHT":1,"aWOQKVUKeFbAdcDcdAXRCBQBBHFBddQC":1,"aXTfHAEDdUJFUFcUKMBKVZMYCISIBBO":1,"HWAFYWEQCLBMC":1,"TeCOeJHBdOXKbUBOMZJMCCdGNcbaBZJNBYTBMbfRAfZC":1,"NVFVcfTbdNNJTOFaQEZYVNFJIeaUFRURURHe":1,"EUXPNMHfLebbMHSWedNDeQfYUXVaKBIecO":1,"dDfPJcbWESSIdFDSPWLBeTfecNfTXC":2,"HWAFYDEZRae":2,"HWAFNeOYWbSaKVFVYBXYZICFLcaIdTC":1,"HWAFYbcZTTdWABTXNPUcCHPLecO":1,"YdXfCDWOOScUDbMXAUAQUVIZdRRT":1,"bQGWZUYaTTDcTBeNDZSdSUWDbWNWe":1,"aXTfHAEDISIBTBaFKbdKCFKVeSNdJeCRe":1,"cJUJDRSLQKQScVIQHNMbZfFSfDGYUC":1,"febdSANFRWdNHIQJbYROKe":1,"HCZVFaNPKGUJeaILYJO":1,"HWAFYTbeYSSEdaWYO":2,"ZcSIcceNDSJVGGZYfPXPRLO":1,"HBISNFZFEUXPNMPKUGO":1,"aXTfHAEDISIBTVZMYCBBLXOLATZdSfbCaceeRAcMcWe":1,"aXbISHcAaPdAHFeMbFDaPKIC":1,"XdKYEGFAZeVNLDJFFKMEcEQPDHCOLZCDWOOC":1,"BCdGNJYGbQfSGDMSeZdMcQYIMdUdBKe":1,"TeCOeJXRAXZZdQQXEQOSRKAZRO":1,"NVNZWUATYZBZNVQZVTDdPfPPFPWe":1,"NAFQCJWZUbGSRaPSZXeCFNZWOEXKQLNJC":1,"eEBZSYTAeALFePNBacHOdNTWZHT":1,"OVYHSddeOIaONEVdZXbBPBRe":1,"BHDTJdReLBBVYUIeTJZYGTXT":1,"HCZANHDdLYBNPLbbHVJNSZWbECVVDC":1,"AdZZBOSINSQFSBUNJEREcbJfEJO":1,"eRQWcIXdCcaIXMTBEJcCYeFVIQJGEVaUcJWe":1,"TfNZeFcCSdfCONebEC":1,"YdXfCDWOOScUSfBCWXFZEVC":1,"aaOCZDSSYZTNReKaKHeFUHDJbZJae":3,"IZVaCQLOLOLOECVVDJYMTSJYMTBNFecMEO":1,"HWAFNZJNSdCYO":1,"cCHObIPPQFFTaNFbNXGDJEBBVYYT":1,"NAFQZMISRSOJaTfMDcGEfdbfZC":1,"BHDTJdReQLOLOLOVZMYCVCMILRVVPKLZcO":3,"aXTEKKVUNVfUZFeNBKKYcYRCOMIABVYYT":1,"YTBYNJXCceEDdEAXNJCVXVVUC":1,"fEOMTDOOMNVLWPGGHWLUTMfXLMESGZXNRe":1,"BKbVZWNZJFGbRdeFIbQbAdPMTAcHe":1,"dLYHMRFeRLPYKDcdDGOLLCBQSYSBNaKe":1,"HWAFYTfCaSYeGIeMdRYPVIRPRe":1,"TPOaXGPTGTbUEXODPFDC":1,"TZUfdKNKNKPAJBHDTJIKPDUeQFaJeKe":1,"TfNZeFOBbNXGDJECUWOdMWe":1,"cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe":1,"febdSAYYBXYFPEOcNSZBeLPHYYfPHe":1,"TeCOeJOUeUNfEANCNIQNNFHeBQUdQadeORSLTFMeHGC":1,"fefSCOJZfIZZRAbTXTMNZeUNFPCNBEUXPNMWe":2,"IZALOLOLOCDOHJPVCMILEEBXe":1,"OaaKQZZMcTcYNaXTbEdHO