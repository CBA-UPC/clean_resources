if(CE_USER_SCRIPT=!0,"object"==typeof CE2&&(CE2.uid||CE2.data))throw Error("CE: multiple userscripts installed");if((CE2="undefined"==typeof CE2?{}:CE2).userDataToJs=function(e){for(var t=[["uid","uid"],["snapshots","snapshots"],["status","status"],["flows","flows"],["sites","sites"],["USER_SCRIPT_VERSION","updated_at"],["__CE_HOST__","ce_app_url"],["COMMON_SCRIPT","common_script_url"],["COMMON_SCRIPT_SECURE","common_script_url"],["TRACKING_SCRIPT","tracking_script_url"],["TRACKING_SCRIPT_SECURE","tracking_script_url"],["AUTH_KEY","hud_auth_key"],["HUD","hud"],["GLOBAL_IP_BLOCK_LIST","global_ip_block_list"],["IS_USING_IP_BLOCKING","is_using_ip_blocking"],["TRACKING_DEST_NEW","v6_tracking_dest"],["TRACKING_DEST_NEW_SECURE","v6_secure_tracking_dest"],["DEST_V11","v11_tracking_dest"],["FT_DEST","flow_tracking_dest"],["PAGE_VIEWS_LIMIT_REACHED","page_views_limit_reached"],["NUMBER_OF_RECORDINGS","recordings_number"],["RECORDINGS_ACTIVATION","recordings_activation"],["ERROR_TRACKING","error_tracking"],["DEST_ERRORS_API","error_tracking_dest"],["DEST_ERRORS_API_DOMAIN","error_tracking_script_url"]],a=0;a<t.length;a++){var r=t[a];CE2.data[r[1]]&&(CE2[r[0]]=CE2.data[r[1]])}CE2.data.recordings_dest&&(CE2.SREC_DEST={record:CE2.data.recordings_dest,sample:CE2.data.recordings_sampling_dest})},"undefined"==typeof CE_USER_DATA&&(CE_USER_SITE_DATA_URL="https://script.crazyegg.com/pages/data-scripts/0064/1845/site/SITENAME.json"),"undefined"==typeof CE_USER_DATA_URL&&"undefined"!=typeof CE_USER_SITE_DATA_URL&&CE_USER_SITE_DATA_URL&&(CE_USER_DATA_URL=CE_USER_SITE_DATA_URL.replace("SITENAME",window.location.host)),CE2.debugEnabled=function(){return"undefined"!=typeof CE_DEBUG&&CE_DEBUG||!!~window.location.href.indexOf("ced=f901fd93fbf6eb0d387820032889aeef")},CE2.debug=function(e){if(!CE2.debugEnabled())return!1;e="string"==typeof e?"CE: "+e:e;console.log(e)},CE2.runLoadedScriptCallbacks=function(e){for(var t;t=CE2.LOADED_SCRIPTS_CALLBACKS[e].shift();)t()},CE2.loadScript=function(e,t){var a;return CE2.LOADED_SCRIPTS||(CE2.LOADED_SCRIPTS=[]),CE2.INCLUDED_SCRIPTS||(CE2.INCLUDED_SCRIPTS=[]),CE2.LOADED_SCRIPTS_CALLBACKS||(CE2.LOADED_SCRIPTS_CALLBACKS={}),CE2.LOADED_SCRIPTS_CALLBACKS[e]||(CE2.LOADED_SCRIPTS_CALLBACKS[e]=[]),t&&CE2.LOADED_SCRIPTS_CALLBACKS[e].push(t),~CE2.LOADED_SCRIPTS.indexOf(e)?CE2.runLoadedScriptCallbacks(e):~CE2.INCLUDED_SCRIPTS.indexOf(e)?void 0:(a=document.createElement("script"),CE2.debug("[Loading] Script "+e),a.src=e,a.type="text/javascript",a.async=!0,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(a,t),a.onload=a.onreadystatechange=function(){a.readyState&&!/complete|loaded/.test(a.readyState)||(CE2.LOADED_SCRIPTS.push(e),CE2.runLoadedScriptCallbacks(e),a.onload=null,a.onreadystatechange=null)},CE2.INCLUDED_SCRIPTS.push(e),!1)},CE2.loadCommonScript=function(e){if(CE2.userMain)return e();CE2.loadScript(CE2.data.common_script_url,e)},CE2.loadTrackingScript=function(e){if(CE2.V11Tracker)return e();CE2.loadScript(CE2.data.tracking_script_url,e)},CE2.loadSessionTrackingScript=function(e){if(CE2.pageState)return e();CE2.loadScript(CE2.data.trackingpagestate_script_url,function(){CE2.loadTrackingScript(e)})},CE2.getUserDataTime=function(){if(window.performance&&performance.getEntriesByType){var e=performance.getEntriesByType("navigation");if(e&&e[0])return"back_forward"===e[0].type?parseInt(+new Date/3e5,10):1}return parseInt(+new Date/36e5,10)},CE2.isNativeFunction=function(e){return!!e&&/\{\s+\[native code\]/.test(Function.prototype.toString.call(e))},CE2.cleanPrototype=function(e){var t,a;return("undefined"==typeof window?CE2.s:(t="ce_proto_iframe",(a=document.getElementById(t))||((a=document.createElement("iframe")).id=t,a.title="CrazyEgg Tracking iframe",a.style.display="none",document.documentElement.appendChild(a)),a.contentWindow))[e]},CE2.getNativeXMLHttpRequest=function(){return new(CE2.isNativeFunction(XMLHttpRequest.prototype.send)?XMLHttpRequest:CE2.cleanPrototype("XMLHttpRequest"))},CE2.afterUserDataLoaded=function(){var e;"undefined"!=typeof CE_LOCAL_SCRIPT_HOST&&(CE2.data.common_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/common-scripts-source/latest.js",CE2.data.tracking_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/tracking-scripts-source/latest.js",CE2.data.trackingpagestate_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/trackingpagestate-scripts-source/latest.js"),window.CE_USER_COMMON_SCRIPT_URL||(window.CE_USER_COMMON_SCRIPT_URL=CE2.data.common_script_url,window.CE_USER_THIRDPARTY_SCRIPT_URL=CE2.data.thirdparty_script_url),CE2.userDataToJs(CE2.data),"ok"===CE2.data.status?CE2.loadCommonScript():(e=document.location.hash.match(/#ce-(?:survey|cta)-(.+)/))&&e[1]?(CE2.commonScriptForceLoaded=!0,CE2.loadCommonScript()):CE2.checkLoadCommonScript()},CE2.loadUserData=function(e){CE2.userDataStatus="loading";var t=CE2.getNativeXMLHttpRequest();t.onreadystatechange=function(){if(4==t.readyState)try{200==t.status&&t.responseText&&(CE2.data=JSON.parse(t.responseText),CE2.afterUserDataLoaded(),CE2.userDataStatus="ok")}catch(e){CE2.debug("Error loading user data: "+e.message)}},CE2.debug("[Loading] User data",CE_USER_DATA_URL),t.open("GET",CE_USER_DATA_URL+"?t="+CE2.getUserDataTime(),!0),t.send()},CE2.loadUserDataInline=function(){CE2.debug("[Loading] User data inline"),CE2.data=JSON.parse(CE_USER_DATA),CE2.afterUserDataLoaded(),CE2.userDataStatus="ok"},CE2.checkLoadCommonScript=function(){window.opener&&window.addEventListener("message",function e(t){try{t.source===window.opener&&(a=t.origin,r=CE2.data,a===r.ce_app_url||~(r.hud&&r.hud.launch_origins||[]).indexOf(a)||~(r.survey_launch_origins||r.addon_launch_origins||[]).indexOf(a))&&(CE2.commonScriptForceLoaded=!0,CE2.loadCommonScript(),window.removeEventListener("message",e))}catch(e){CE2.debug(e)}var a,r})},CE2.debug("[Loading] Boot"),CE2.userDataStatus)throw Error("CE: multiple userscripts installed");"undefined"!=typeof CE_USER_DATA_URL&&CE_USER_DATA_URL?CE2.loadUserData():"undefined"!=typeof CE_USER_DATA&&CE_USER_DATA?CE2.loadUserDataInline():CE2.debugEnabled()&&CE2.debug("Missing CE_USER_DATA_URL");
nt set to automatic -->
<script data-cfasync="false" data-pagespeed-no-defer>
	var dataLayer_content = {"pagePostType":"frontpage","pagePostType2":"single-page","pagePostAuthor":"Sasha Im"};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQ6QQBT');
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com -->
        <!--[if lt IE 9]>
            <script src="//www.washington.edu/wp-content/themes/uw-2014/assets/ie/js/html5shiv.js" type="text/javascript"></script>
            <script src="//www.washington.edu/wp-content/themes/uw-2014/assets/ie/js/respond.js" type="text/javascript"></script>
            <link rel='stylesheet' href='//www.washington.edu/wp-content/themes/uw-2014/assets/ie/css/ie.css' type='text/css' media='all' />
        <![endif]-->

        
    </head>
    <!--[if lt IE 9]> <body class="home page-template page-template-templates page-template-template-small-hero page-template-small-hero page page-id-4360 lt-ie9 cms site-populationhealth "> <![endif]-->
    <!--[if gt IE 8]><!-->
    <body class="home page-template page-template-templates page-template-template-small-hero page-template-small-hero page page-id-4360 cms site-populationhealth " >
    <!--<![endif]-->

    <div id="uwsearcharea" aria-hidden="true" class="uw-search-bar-container"></div>

    <a id="main-content" href="#main_content" class="screen-reader-shortcut">Skip to main content</a>

    <div id="uw-container">
        
	<nav id="quicklinks" aria-label="quick links" aria-hidden="true">
<ul id="big-links"><li><span class="icon-myuw"></span><a href="https://my.uw.edu/?utm_source=quicklinks&utm_medium=click&utm_campaign=quicklinks&utm_term=myuw" tabindex="-1">MyUW</a></li>< 0 25%;max-width:25%}.col-4{flex:0 0 33.33%;max-width:33.33%}.col-5{flex:0 0 41.67%;max-width:41.67%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33%;max-width:58.33%}.col-8{flex:0 0 66.67%;max-width:66.67%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33%;max-width:83.33%}.col-11{flex:0 0 91.67%;max-width:91.67%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33%}.offset-2{margin-left:16.67%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33%}.offset-5{margin-left:41.67%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33%}.offset-8{margin-left:66.67%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33%}.offset-11{margin-left:91.67%}@media (min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.33%;max-width:33.33%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.67%;max-width:16.67%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.33%;max-width:8.33%}.col-sm-2{flex:0 0 16.67%;max-width:16.67%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33%;max-width:33.33%}.col-sm-5{flex:0 0 41.67%;max-width:41.67%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33%;max-width:58.33%}.col-sm-8{flex:0 0 66.67%;max-width:66.67%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33%;max-width:83.33%}.col-sm-11{flex:0 0 91.67%;max-width:91.67%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33%}.offset-sm-2{margin-left:16.67%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33%}.offset-sm-5{margin-left:41.67%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33%}.offset-sm-8{margin-left:66.67%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33%}.offset-sm-11{margin-left:91.67%}}@media (min-width: 768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.33%;max-width:33.33%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.67%;max-width:16.67%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.33%;max-width:8.33%}.col-md-2{flex:0 0 16.67%;max-width:16.67%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33%;max-width:33.33%}.col-md-5{flex:0 0 41.67%;max-width:41.67%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33%;max-width:58.33%}.col-md-8{flex:0 0 66.67%;max-width:66.67%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33%;max-width:83.33%}.col-md-11{flex:0 0 91.67%;max-width:91.67%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33%}.offset-md-2{margin-left:16.67%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33%}.offset-md-5{margin-left:41.67%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33%}.offset-md-8{margin-left:66.67%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33%}.offset-md-11{margin-left:91.67%}}@media (min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.33%;max-width:33.33%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.67%;max-width:16.67%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.33%;max-width:8.33%}.col-lg-2{flex:0 0 16.67%;max-width:16.67%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33%;max-width:33.33%}.col-lg-5{flex:0 0 41.67%;max-width:41.67%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33%;max-width:58.33%}.col-lg-8{flex:0 0 66.67%;max-width:66.67%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33%;max-width:83.33%}.col-lg-11{flex:0 0 91.67%;max-width:91.67%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33%}.offset-lg-2{margin-left:16.67%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33%}.offset-lg-5{margin-left:41.67%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33%}.offset-lg-8{margin-left:66.67%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33%}.offset-lg-11{margin-left:91.67%}}@media (min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.33%;max-width:33.33%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.67%;max-width:16.67%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.33%;max-width:8.33%}.col-xl-2{flex:0 0 16.67%;max-width:16.67%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33%;max-width:33.33%}.col-xl-5{flex:0 0 41.67%;max-width:41.67%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33%;max-width:58.33%}.col-xl-8{flex:0 0 66.67%;max-width:66.67%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33%;max-width:83.33%}.col-xl-11{flex:0 0 91.67%;max-width:91.67%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33%}.offset-xl-2{margin-left:16.67%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33%}.offset-xl-5{margin-left:41.67%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33%}.offset-xl-8{margin-left:66.67%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33%}.offset-xl-11{margin-left:91.67%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table th,.table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm th,.table-sm td{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered th,.table-bordered td{border:1px solid #dee2e6}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(55,58,60,0.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(55,58,60,0.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#cdc4dc}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#a192bf}.table-hover .table-primary:hover{background-color:#bfb4d3}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#bfb4d3}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#ddd8cd}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#c0b7a2}.table-hover .table-secondary:hover{background-color:#d3ccbe}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#d3ccbe}.table-success,.table-success>th,.table-success>td{background-color:#cbe4cb}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#9ecc9e}.table-hover .table-success:hover{background-color:#badbba}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#badbba}.table-info,.table-info>th,.table-info>td{background-color:#b8d8ec}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#7ab7dc}.table-hover .table-info:hover{background-color:#a4cde7}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#a4cde7}.table-warning,.table-warning>th,.table-warning>td{background-color:#fae2b8}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#f6c97a}.table-hover .table-warning:hover{background-color:#f8d8a0}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#f8d8a0}.table-danger,.table-danger>th,.table-danger>td{background-color:#f0c4c2}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#e4928e}.table-hover .table-danger:hover{background-color:#ebb0ae}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#ebb0ae}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(55,58,60,0.075)}.table-hover .table-active:hover{background-color:rgba(43,45,47,0.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(43,45,47,0.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.38rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#8967ca;outline:0;box-shadow:0 0 0 .2rem rgba(75,46,131,0.25)}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type="date"].form-control,input[type="time"].form-control,input[type="datetime-local"].form-control,input[type="month"].form-control{appearance:none}select.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.38rem + 1px);padding-bottom:calc(.38rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.88rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.38rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.88rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*="col-"]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.31rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.88em;color:#449D44}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.88rem;line-height:1.5;color:#fff;background-color:rgba(68,157,68,0.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*="col-"]>.valid-tooltip{left:5px}.was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#449D44;padding-right:calc(1.5em + .75rem) !important;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23449D44' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.38em + .19rem) center;background-size:calc(.75em + .38rem) calc(.75em + .38rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#449D44;box-shadow:0 0 0 .2rem rgba(68,157,68,0.25)}.was-validated select.form-control:valid,select.form-control.is-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") format("woff"),
		url("../fonts/dashicons.ttf?99ac726223c749443b642ce33df8b800") format("truetype");
	font-weight: 400;
	font-style: normal;
}
/* stylelint-enable */


.dashicons,
.dashicons-before:before {
	font-family: dashicons;
	display: inline-block;
	line-height: 1;
	font-weight: 400;
	font-style: normal;
	speak: never;
	text-decoration: inherit;
	text-transform: none;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 20px;
	height: 20px;
	font-size: 20px;
	vertical-align: top;
	text-align: center;
	transition: color 0.1s ease-in;
}

/* Icons */

.dashicons-admin-appearance:before {
	content: "\f100";
}

.dashicons-admin-collapse:before {
	content: "\f148";
}

.dashicons-admin-comments:before {
	content: "\f101";
}

.dashicons-admin-customizer:before {
	content: "\f540";
}

.dashicons-admin-generic:before {
	content: "\f111";
}

.dashicons-admin-home:before {
	content: "\f102";
}

.dashicons-admin-links:before {
	content: "\f103";
}

.dashicons-admin-media:before {
	content: "\f104";
}

.dashicons-admin-multisite:before {
	content: "\f541";
}

.dashicons-admin-network:before {
	content: "\f112";
}

.dashicons-admin-page:before {
	content: "\f105";
}

.dashicons-admin-plugins:before {
	content: "\f106";
}

.dashicons-admin-post:before {
	content: "\f109";
}

.dashicons-admin-settings:before {
	content: "\f108";
}

.dashicons-admin-site-alt:before {
	content: "\f11d";
}

.dashicons-admin-site-alt2:before {
	content: "\f11e";
}

.dashicons-admin-site-alt3:before {
	content: "\f11f";
}

.dashicons-admin-site:before {
	content: "\f319";
}

.dashicons-admin-tools:before {
	content: "\f107";
}

.dashicons-admin-users:before {
	content: "\f110";
}

.dashicons-airplane:before {
	content: "\f15f";
}

.dashicons-album:before {
	content: "\f514";
}

.dashicons-align-center:before {
	content: "\f134";
}

.dashicons-align-full-width:before {
	content: "\f114";
}

.dashicons-align-left:before {
	content: "\f135";
}

.dashicons-align-none:before {
	content: "\f138";
}

.dashicons-align-pull-left:before {
	content: "\f10a";
}

.dashicons-align-pull-right:before {
	content: "\f10b";
}

.dashicons-align-right:before {
	content: "\f136";
}

.dashicons-align-wide:before {
	content: "\f11b";
}

.dashicons-amazon:before {
	content: "\f162";
}

.dashicons-analytics:before {
	content: "\f183";
}

.dashicons-archive:before {
	content: "\f480";
}

.dashicons-arrow-down-alt:before {
	content: "\f346";
}

.dashicons-arrow-down-alt2:before {
	content: "\f347";
}

.dashicons-arrow-down:before {
	content: "\f140";
}

.dashicons-arrow-left-alt:before {
	content: "\f340";
}

.dashicons-arrow-left-alt2:before {
	content: "\f341";
}

.dashicons-arrow-left:before {
	content: "\f141";
}

.dashicons-arrow-right-alt:before {
	content: "\f344";
}

.dashicons-arrow-right-alt2:before {
	content: "\f345";
}

.dashicons-arrow-right:before {
	content: "\f139";
}

.dashicons-arrow-up-alt:before {
	content: "\f342";
}

.dashicons-arrow-up-alt2:before {
	content: "\f343";
}

.dashicons-arrow-up-duplicate:before {
	content: "\f143";
}

.dashicons-arrow-up:before {
	content: "\f142";
}

.dashicons-art:before {
	content: "\f309";
}

.dashicons-awards:before {
	content: "\f313";
}

.dashicons-backup:before {
	content: "\f321";
}

.dashicons-bank:before {
	content: "\f16a";
}

.dashicons-beer:before {
	content: "\f16c";
}

.dashicons-bell:before {
	content: "\f16d";
}

.dashicons-block-default:before {
	content: "\f12b";
}

.dashicons-book-alt:before {
	content: "\f331";
}

.dashicons-book:before {
	content: "\f330";
}

.dashicons-buddicons-activity:before {
	content: "\f452";
}

.dashicons-buddicons-bbpress-logo:before {
	content: "\f477";
}

.dashicons-buddicons-buddypress-logo:before {
	content: "\f448";
}

.dashicons-buddicons-community:before {
	content: "\f453";
}

.dashicons-buddicons-forums:before {
	content: "\f449";
}

.dashicons-buddicons-friends:before {
	content: "\f454";
}

.dashicons-buddicons-groups:before {
	content: "\f456";
}

.dashicons-buddicons-pm:before {
	content: "\f457";
}

.dashicons-buddicons-replies:before {
	content: "\f451";
}

.dashicons-buddicons-topics:before {
	content: "\f450";
}

.dashicons-buddicons-tracking:before {
	content: "\f455";
}

.dashicons-building:before {
	content: "\f512";
}

.dashicons-businessman:before {
	content: "\f338";
}

.dashicons-businessperson:before {
	content: "\f12e";
}

.dashicons-businesswoman:before {
	content: "\f12f";
}

.dashicons-button:before {
	content: "\f11a";
}

.dashicons-calculator:before {
	content: "\f16e";
}

.dashicons-calendar-alt:before {
	content: "\f508";
}

.dashicons-calendar:before {
	content: "\f145";
}

.dashicons-camera-alt:before {
	content: "\f129";
}

.dashicons-camera:before {
	content: "\f306";
}

.dashicons-car:before {
	content: "\f16b";
}

.dashicons-carrot:before {
	content: "\f511";
}

.dashicons-cart:before {
	content: "\f174";
}

.dashicons-category:before {
	content: "\f318";
}

.dashicons-chart-area:before {
	content: "\f239";
}

.dashicons-chart-bar:before {
	content: "\f185";
}

.dashicons-chart-line:before {
	content: "\f238";
}

.dashicons-chart-pie:before {
	content: "\f184";
}

.dashicons-clipboard:before {
	content: "\f481";
}

.dashicons-clock:before {
	content: "\f469";
}

.dashicons-cloud-saved:before {
	content: "\f137";
}

.dashicons-cloud-upload:before {
	content: "\f13b";
}

.dashicons-cloud:before {
	content: "\f176";
}

.dashicons-code-standards:before {
	content: "\f13a";
}

.dashicons-coffee:before {
	content: "\f16f";
}

.dashicons-color-picker:before {
	content: "\f131";
}

.dashicons-columns:before {
	content: "\f13c";
}

.dashicons-controls-back:before {
	content: "\f518";
}

.dashicons-controls-forward:before {
	content: "\f519";
}

.dashicons-controls-pause:before {
	content: "\f523";
}

.dashicons-controls-play:before {
	content: "\f522";
}

.dashicons-controls-repeat:before {
	content: "\f515";
}

.dashicons-controls-skipback:before {
	content: "\f516";
}

.dashicons-controls-skipforward:before {
	content: "\f517";
}

.dashicons-controls-volumeoff:before {
	content: "\f520";
}

.dashicons-controls-volumeon:before {
	content: "\f521";
}

.dashicons-cover-image:before {
	content: "\f13d";
}

.dashicons-dashboard:before {
	content: "\f226";
}

.dashicons-database-add:before {
	content: "\f170";
}

.dashicons-database-export:before {
	content: "\f17a";
}

.dashicons-database-import:before {
	content: "\f17b";
}

.dashicons-database-remove:before {
	content: "\f17c";
}

.dashicons-database-view:before {
	content: "\f17d";
}

.dashicons-database:before {
	content: "\f17e";
}

.dashicons-desktop:before {
	content: "\f472";
}

.dashicons-dismiss:before {
	content: "\f153";
}

.dashicons-download:before {
	content: "\f316";
}

.dashicons-drumstick:before {
	content: "\f17f";
}

.dashicons-edit-large:before {
	content: "\f327";
}

.dashicons-edit-page:before {
	content: "\f186";
}

.dashicons-edit:before {
	content: "\f464";
}

.dashicons-editor-aligncenter:before {
	content: "\f207";
}

.dashicons-editor-alignleft:before {
	content: "\f206";
}

.dashicons-editor-alignright:before {
	content: "\f208";
}

.dashicons-editor-bold:before {
	content: "\f200";
}

.dashicons-editor-break:before {
	content: "\f474";
}

.dashicons-editor-code-duplicate:before {
	content: "\f494";
}

.dashicons-editor-code:before {
	content: "\f475";
}

.dashicons-editor-contract:before {
	content: "\f506";
}

.dashicons-editor-customchar:before {
	content: "\f220";
}

.dashicons-editor-expand:before {
	content: "\f211";
}

.dashicons-editor-help:before {
	content: "\f223";
}

.dashicons-editor-indent:before {
	content: "\f222";
}

.dashicons-editor-insertmore:before {
	content: "\f209";
}

.dashicons-editor-italic:before {
	content: "\f201";
}

.dashicons-editor-justify:before {
	content: "\f214";
}

.dashicons-editor-kitchensink:before {
	content: "\f212";
}

.dashicons-editor-ltr:before {
	content: "\f10c";
}

.dashicons-editor-ol-rtl:before {
	content: "\f12c";
}

.dashicons-editor-ol:before {
	content: "\f204";
}

.dashicons-editor-outdent:before {
	content: "\f221";
}

.dashicons-editor-paragraph:before {
	content: "\f476";
}

.dashicons-editor-paste-text:before {
	content: "\f217";
}

.dashicons-editor-paste-word:before {
	content: "\f216";
}

.dashicons-editor-quote:before {
	content: "\f205";
}

.dashicons-editor-removeformatting:before {
	content: "\f218";
}

.dashicons-editor-rtl:before {
	content: "\f320";
}

.dashicons-editor-spellcheck:before {
	content: "\f210";
}

.dashicons-editor-strikethrough:before {
	content: "\f224";
}

.dashicons-editor-table:before {
	content: "\f535";
}

.dashicons-editor-textcolor:before {
	content: "\f215";
}

.dashicons-editor-ul:before {
	content: "\f203";
}

.dashicons-editor-underline:before {
	content: "\f213";
}

.dashicons-editor-unlink:before {
	content: "\f225";
}

.dashicons-editor-video:before {
	content: "\f219";
}

.dashicons-ellipsis:before {
	content: "\f11c";
}

.dashicons-email-alt:before {
	content: "\f466";
}

.dashicons-email-alt2:before {
	content: "\f467";
}

.dashicons-email:before {
	content: "\f465";
}

.dashicons-embed-audio:before {
	content: "\f13e";
}

.dashicons-embed-generic:before {
	content: "\f13f";
}

.dashicons-embed-photo:before {
	content: "\f144";
}

.dashicons-embed-post:before {
	content: "\f146";
}

.dashicons-embed-video:before {
	content: "\f149";
}

.dashicons-excerpt-view:before {
	content: "\f164";
}

.dashicons-exit:before {
	content: "\f14a";
}

.dashicons-external:before {
	content: "\f504";
}

.dashicons-facebook-alt:before {
	content: "\f305";
}

.dashicons-facebook:before {
	content: "\f304";
}

.dashicons-feedback:before {
	content: "\f175";
}

.dashicons-filter:before {
	content: "\f536";
}

.dashicons-flag:before {
	content: "\f227";
}

.dashicons-food:before {
	content: "\f187";
}

.dashicons-format-aside:before {
	content: "\f123";
}

.dashicons-format-audio:before {
	content: "\f127";
}

.dashicons-format-chat:before {
	content: "\f125";
}

.dashicons-format-gallery:before {
	content: "\f161";
}

.dashicons-format-image:before {
	content: "\f128";
}

.dashicons-format-quote:before {
	content: "\f122";
}

.dashicons-format-status:before {
	content: "\f130";
}

.dashicons-format-video:before {
	content: "\f126";
}

.dashicons-forms:before {
	content: "\f314";
}

.dashicons-fullscreen-alt:before {
	content: "\f188";
}

.dashicons-fullscreen-exit-alt:before {
	content: "\f189";
}

.dashicons-games:before {
	content: "\f18a";
}

.dashicons-google:before {
	content: "\f18b";
}

.dashicons-googleplus:before {
	content: "\f462";
}

.dashicons-grid-view:before {
	content: "\f509";
}

.dashicons-groups:before {
	content: "\f307";
}

.dashicons-hammer:before {
	content: "\f308";
}

.dashicons-heading:before {
	content: "\f10e";
}

.dashicons-heart:before {
	content: "\f487";
}

.dashicons-hidden:before {
	content: "\f530";
}

.dashicons-hourglass:before {
	content: "\f18c";
}

.dashicons-html:before {
	content: "\f14b";
}

.dashicons-id-alt:before {
	content: "\f337";
}

.dashicons-id:before {
	content: "\f336";
}

.dashicons-image-crop:before {
	content: "\f165";
}

.dashicons-image-filter:before {
	content: "\f533";
}

.dashicons-image-flip-horizontal:before {
	content: "\f169";
}

.dashicons-image-flip-vertical:before {
	content: "\f168";
}

.dashicons-image-rotate-left:before {
	content: "\f166";
}

.dashicons-image-rotate-right:before {
	content: "\f167";
}

.dashicons-image-rotate:before {
	content: "\f531";
}

.dashicons-images-alt:before {
	content: "\f232";
}

.dashicons-images-alt2:before {
	content: "\f233";
}

.dashicons-index-card:before {
	content: "\f510";
}

.dashicons-info-outline:before {
	content: "\f14c";
}

.dashicons-info:before {
	content: "\f348";
}

.dashicons-insert-after:before {
	content: "\f14d";
}

.dashicons-insert-before:before {
	content: "\f14e";
}

.dashicons-insert:before {
	content: "\f10f";
}

.dashicons-instagram:before {
	content: "\f12d";
}

.dashicons-laptop:before {
	content: "\f547";
}

.dashicons-layout:before {
	content: "\f538";
}

.dashicons-leftright:before {
	content: "\f229";
}

.dashicons-lightbulb:before {
	content: "\f339";
}

.dashicons-linkedin:before {
	content: "\f18d";
}

.dashicons-list-view:before {
	content: "\f163";
}

.dashicons-location-alt:before {
	content: "\f231";
}

.dashicons-location:before {
	content: "\f230";
}

.dashicons-lock-duplicate:before {
	content: "\f315";
}

.dashicons-lock:before {
	content: "\f160";
}

.dashicons-marker:before {
	content: "\f159";
}

.dashicons-media-archive:before {
	content: "\f501";
}

.dashicons-media-audio:before {
	content: "\f500";
}

.dashicons-media-code:before {
	content: "\f499";
}

.dashicons-media-default:before {
	content: "\f498";
}

.dashicons-media-document:before {
	content: "\f497";
}

.dashicons-media-interactive:before {
	content: "\f496";
}

.dashicons-media-spreadsheet:before {
	content: "\f495";
}

.dashicons-media-text:before {
	content: "\f491";
}

.dashicons-media-video:before {
	content: "\f490";
}

.dashicons-megaphone:before {
	content: "\f488";
}

.dashicons-menu-alt:before {
	content: "\f228";
}

.dashicons-menu-alt2:before {
	content: "\f329";
}

.dashicons-menu-alt3:before {
	content: "\f349";
}

.dashicons-menu:before {
	content: "\f333";
}

.dashicons-microphone:before {
	content: "\f482";
}

.dashicons-migrate:before {
	content: "\f310";
}

.dashicons-minus:before {
	content: "\f460";
}

.dashicons-money-alt:before {
	content: "\f18e";
}

.dashicons-money:before {
	content: "\f526";
}

.dashicons-move:before {
	content: "\f545";
}

.dashicons-nametag:before {
	content: "\f484";
}

.dashicons-networking:before {
	content: "\f325";
}

.dashicons-no-alt:before {
	content: "\f335";
}

.dashicons-no:before {
	content: "\f158";
}

.dashicons-open-folder:before {
	content: "\f18f";
}

.dashicons-palmtree:before {
	content: "\f527";
}

.dashicons-paperclip:before {
	content: "\f546";
}

.dashicons-pdf:before {
	content: "\f190";
}

.dashicons-performance:before {
	content: "\f311";
}

.dashicons-pets:before {
	content: "\f191";
}

.dashicons-phone:before {
	content: "\f525";
}

.dashicons-pinterest:before {
	content: "\f192";
}

.dashicons-playlist-audio:before {
	content: "\f492";
}

.dashicons-playlist-video:before {
	content: "\f493";
}

.dashicons-plugins-checked:before {
	content: "\f485";
}

.dashicons-plus-alt:before {
	content: "\f502";
}

.dashicons-plus-alt2:before {
	content: "\f543";
}

.dashicons-plus:before {
	content: "\f132";
}

.dashicons-podio:before {
	content: "\f19c";
}

.dashicons-portfolio:before {
	content: "\f322";
}

.dashicons-post-status:before {
	content: "\f173";
}

.dashicons-pressthis:before {
	content: "\f157";
}

.dashicons-printer:before {
	content: "\f193";
}

.dashicons-privacy:before {
	content: "\f194";
}

.dashicons-products:before {
	content: "\f312";
}

.dashicons-randomize:before {
	content: "\f503";
}

.dashicons-reddit:before {
	content: "\f195";
}

.dashicons-redo:before {
	content: "\f172";
}

.dashicons-remove:before {
	content: "\f14f";
}

.dashicons-rest-api:before {
	content: "\f124";
}

.dashicons-rss:before {
	content: "\f303";
}

.dashicons-saved:before {
	content: "\f15e";
}

.dashicons-schedule:before {
	content: "\f489";
}

.dashicons-screenoptions:before {
	content: "\f180";
}

.dashicons-search:before {
	content: "\f179";
}

.dashicons-share-alt:before {
	content: "\f240";
}

.dashicons-share-alt2:before {
	content: "\f242";
}

.dashicons-share:before {
	content: "\f237";
}

.dashicons-shield-alt:before {
	content: "\f334";
}

.dashicons-shield:before {
	content: "\f332";
}

.dashicons-shortcode:before {
	content: "\f150";
}

.dashicons-slides:before {
	content: "\f181";
}

.dashicons-smartphone:before {
	content: "\f470";
}

.dashicons-smiley:before {
	content: "\f328";
}

.dashicons-sort:before {
	content: "\f156";
}

.dashicons-sos:before {
	content: "\f468";
}

.dashicons-spotify:before {
	content: "\f196";
}

.dashicons-star-empty:before {
	content: "\f154";
}

.dashicons-star-filled:before {
	content: "\f155";
}

.dashicons-star-half:before {
	content: "\f459";
}

.dashicons-sticky:before {
	content: "\f537";
}

.dashicons-store:before {
	content: "\f513";
}

.dashicons-superhero-alt:before {
	content: "\f197";
}

.dashicons-superhero:before {
	content: "\f198";
}

.dashicons-table-col-after:before {
	content: "\f151";
}

.dashicons-table-col-before:before {
	content: "\f152";
}

.dashicons-table-col-delete:before {
	content: "\f15a";
}

.dashicons-table-row-after:before {
	content: "\f15b";
}

.dashicons-table-row-before:before {
	content: "\f15c";
}

.dashicons-table-row-delete:before {
	content: "\f15d";
}

.dashicons-tablet:before {
	content: "\f471";
}

.dashicons-tag:before {
	content: "\f323";
}

.dashicons-tagcloud:before {
	content: "\f479";
}

.dashicons-testimonial:before {
	content: "\f473";
}

.dashicons-text-page:before {
	content: "\f121";
}

.dashicons-text:before {
	content: "\f478";
}

.dashicons-thumbs-down:before {
	content: "\f542";
}

.dashicons-thumbs-up:before {
	content: "\f529";
}

.dashicons-tickets-alt:before {
	content: "\f524";
}

.dashicons-tickets:before {
	content: "\f486";
}

.dashicons-tide:before {
	content: "\f10d";
}

.dashicons-translation:before {
	content: "\f326";
}

.dashicons-trash:before {
	content: "\f182";
}

.dashicons-twitch:before {
	content: "\f199";
}

.dashicons-twitter-alt:before {
	content: "\f302";
}

.dashicons-twitter:before {
	content: "\f301";
}

.dashicons-undo:before {
	content: "\f171";
}

.dashicons-universal-access-alt:before {
	content: "\f507";
}

.dashicons-universal-access:before {
	content: "\f483";
}

.dashicons-unlock:before {
	content: "\f528";
}

.dashicons-update-alt:before {
	content: "\f113";
}

.dashicons-update:before {
	content: "\f463";
}

.dashicons-upload:before {
	content: "\f317";
}

.dashicons-vault:before {
	content: "\f178";
}

.dashicons-video-alt:before {
	content: "\f234";
}

.dashicons-video-alt2:before {
	content: "\f235";
}

.dashicons-video-alt3:before {
	content: "\f236";
}

.dashicons-visibility:before {
	content: "\f177";
}

.dashicons-warning:before {
	content: "\f534";
}

.dashicons-welcome-add-page:before {
	content: "\f133";
}

.dashicons-welcome-comments:before {
	content: "\f117";
}

.dashicons-welcome-learn-more:before {
	content: "\f118";
}

.dashicons-welcome-view-site:before {
	content: "\f115";
}

.dashicons-welcome-widgets-menus:before {
	content: "\f116";
}

.dashicons-welcome-write-blog:before {
	content: "\f119";
}

.dashicons-whatsapp:before {
	content: "\f19a";
}

.dashicons-wordpress-alt:before {
	content: "\f324";
}

.dashicons-wordpress:before {
	content: "\f120";
}

.dashicons-xing:before {
	content: "\f19d";
}

.dashicons-yes-alt:before {
	content: "\f12a";
}

.dashicons-yes:before {
	content: "\f147";
}

.dashicons-youtube:before {
	content: "\f19b";
}

/* Additional CSS classes, manually added to the CSS template file */

.dashicons-editor-distractionfree:before {
	content: "\f211";
}

/* This is a typo, but was previously released. It should remain for backward compatibility. See https://core.trac.wordpress.org/ticket/30832. */
.dashicons-exerpt-view:before {
	content: "\f164";
}

.dashicons-format-links:before {
	content: "\f103";
}

.dashicons-format-standard:before {
	content: "\f109";
}

.dashicons-post-trash:before {
	content: "\f182";
}

.dashicons-share1:before {
	content: "\f237";
}

.dashicons-welcome-edit-page:before {
	content: "\f119";
}