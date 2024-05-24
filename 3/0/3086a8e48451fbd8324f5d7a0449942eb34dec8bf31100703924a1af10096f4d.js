


(function() {
    var amznFetchImpression=function(c){var e={};var a=null;e.process=function(g){if(amznAndonCordModel.isAndonCordStatusEnabled()){d(g);return false;}var i=new XMLHttpRequest();i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE){if(i.status===200&&i.responseText){var j=JSON.parse(i.responseText);b(j,g);}else{f(g);}}};var h=e.getImpressionRequestUrl(c);i.open("GET",h,true);i.timeout=c.impressionFetchTimeout;i.withCredentials=true;i.ontimeout=f;i.send();};function f(g){amznImpressionModel.init(null,null);d(g);}function b(h,g){amznImpressionModel.init(h.impressionId,h.impressionToken);d(g);}e.setNextStep=function(g){a=g;};function d(g){if(a){a(g);}}e.getImpressionRequestUrl=function(g){var i="/onetag";var h={};h.tracking_id=g.trackingId;h.assocPayloadId=amznSessionStorage.get("assocPayloadId");h.refUrl=amznOneTagUtils.getCurrentUrl();var j="?src=330&pj="+encodeURIComponent(JSON.stringify(h))+"&u="+amznOneTagUtils.getCurrentUrl();return g.aesEndpoint+i+j;};return e;};var amznTransitRecorder=function(b){var e={};var a=null;var d="assocPayloadId";e.process=function(i){if(amznImpressionModel.isUserOptedOut()||amznAndonCordModel.isAndonCordStatusEnabled()){c(i);return false;}var h=amznImpressionModel.get();if(!(g())||f(amznOneTagUtils.getCurrentUrl())){amznSessionStorage.set(d,h.id);}c(i);return true;};function c(h){if(a){a(h);}}function f(i){var h=i.match(/utm_source=/i);return(h!==null);}function g(){var h=amznSessionStorage.get(d);return h;}e.setNextStep=function(h){a=h;};return e;};var amznImpressionAppender=function(a){var b={};b.process=function(c){if(amznImpressionModel.isUserOptedOut()||amznAndonCordModel.isAndonCordStatusEnabled()){return false;}amznOneTagUtils.addQueryParam(c,"imprToken",amznImpressionModel.get().token);amznOneTagUtils.addQueryParam(c,"slotNum",amznLinkSlot.getSlot());return true;};return b;};var amznPixelRecorder=function(b){var d={};var a=null;d.process=function(g){if(amznImpressionModel.isUserOptedOut()||amznAndonCordModel.isAndonCordStatusEnabled()){c(g);return false;}var h=d.createAssocPayload(g);var f=amznImpressionModel.get();var e=b.aesEndpoint+"/onetag/"+f.id+"/pixel?assoc_payload="+encodeURIComponent(h);d.generateImage(e);c(g);return true;};d.generateImage=function(e){if(e){(new Image()).src=e;}};d.createAssocPayload=function(f){var h={};h.refUrl=amznOneTagUtils.getCurrentUrl();h.assocPayloadId=amznSessionStorage.get("assocPayloadId");if(f.nodeName==="#document"){h.logType="onetag_pageload";h.linkCode="w49";}else{if(f.nodeName==="A"){var g=f.search.match(/(linkCode)=([^&]+)/i);h.logType="onetag_textlink";h.slotNum=amznLinkSlot.getSlot();h.destinationURL=f.href;if(g){h.linkCode="w50";}else{h.linkCode="w61";}}}var e=JSON.stringify(h);return e;};d.setNextStep=function(e){a=e;};function c(e){if(a){a(e);}}return d;};var amznImpressionModel=(function(){var b={};var a={};a.init=function(d,c){b.id=d;b.token=c;return b;};a.get=function(){if(Object.keys(b).length===0){b=a.init(null,null);}return b;};a.isUserOptedOut=function(){return(b.token===null||typeof b.token==="undefined");};return a;}());var amznSessionStorage=(function(){var a={};a.get=function(c){var d=null;if(typeof(window.sessionStorage)!=="undefined"){try{d=window.sessionStorage.getItem(c);}catch(b){}}return d;};a.set=function(c,d){if(typeof(window.sessionStorage)!=="undefined"){try{window.sessionStorage.setItem(c,d);}catch(b){}}};return a;}());
    var amznOneTagUtils=(function(){var b={};var a={CA:["ca"],CN:["cn"],IN:["in"],DE:["de"],FR:["fr"],GB:["co.uk"],JP:["jp","co.jp"],US:["com"],MX:["com.mx"],ES:["es"],IT:["it"],AU:["com.au"],BR:["br"],UK:["co.uk"],SA:["sa"],NL:["nl"],AE:["ae"],SG:["sg"]};var c="ots";b.fetchAmznLinks=function(h,e,f){var d=a[e];var g=[];d.forEach(function(m,k){var n=new RegExp("^(http|https)://(www|[\\w\\-\\.]+)?amazon\\.("+m+")/","i");var l=h.getElementsByTagName("a");for(i=0;i<l.length;i++){var j=String(l[i].href);if(j.match(n)&&!isAnExcludedLink(j,f,m)){g.push(l[i]);}}});return g;};b.markLinkAsProcessed=function(d){if(b.isLinkProcessed(d)){return;}b.addQueryParam(d,c,"1");};b.isLinkProcessed=function(d){return d.search.indexOf("ots=1")!==-1;};b.addQueryParam=function(e,d,f){if(e.search.length===0){e.search=e.search.concat("?"+d+"="+f);}else{e.search=e.search.replace(/\?/,"?"+d+"="+f+"&");}};b.isQueryParamPresent=function(f,e){var d="/?"+e+"=([^&]+)|&"+e+"=([^&]+)/";return f.search.match(d);};b.getCurrentUrl=function(){return(window.location!==window.parent.location)?document.referrer:document.location.href;};isAnExcludedLink=function(g,e,h){var f,d=false;for(f=0;f<e.length;f++){var j=e[f].replace("{0}",h);if(g.match(j)){d=true;break;}}return d;};b.isTrackingEnabled=function(){return !window["aa-disable-onetag-tracking"];};return b;}());var amznLinkSlot=(function(){var a={};var b=-1;a.getSlot=function(){return b;};a.increment=function(){b++;};return a;}());var amznAndonCordModel=(function(){var b={};var a={};a.init=function(c){b.status=c;return b;};a.get=function(){if(Object.keys(b).length===0){b=a.init(null);}return b;};a.isAndonCordStatusEnabled=function(){return(typeof b.status==="undefined"||(b.status!==null&&b.status===true));};return a;}());var amznFetchAndonCord=function(c){var e={};var a=null;e.process=function(g){var j=new XMLHttpRequest();j.onreadystatechange=function(){if(j.readyState===XMLHttpRequest.DONE){if(j.status===200&&j.responseText){var k=JSON.parse(j.responseText);b(k,g);}else{f(g);}}};var h=e.getAndonCordRequestUrl(c);j.open("GET",h,true);j.timeout=c.impressionFetchTimeout;j.withCredentials=true;j.ontimeout=f;j.send();};function b(g,h){amznAndonCordModel.init(g.status);d(h);}function f(g){amznAndonCordModel.init(true);d(g);}e.setNextStep=function(g){a=g;};function d(g){if(a){a(g);}}e.getAndonCordRequestUrl=function(g){var h="/onetag/andoncord";return g.aesEndpoint+h;};return e;};var amznPageHandler=function(c){var e={};var b=[];var d=null;var a=function(){if(typeof amznFetchAndonCord!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznFetchAndonCord(c));}if(typeof amznFetchImpression!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznFetchImpression(c));}if(typeof amznTransitRecorder!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznTransitRecorder(c));}if(typeof amznPixelRecorder!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznPixelRecorder(c));}var j=null;if(b.length){j=b[0];for(var h=1;h<b.length;h++){var f=b[h];var k=b[h-1];k.setNextStep(f.process);}var g=b[b.length-1];g.setNextStep(e.completed);}return j;};e.handleRequest=function(){var f=a();if(f){f.process(document);}else{e.completed();}};e.setNextHandler=function(f){d=f;};e.completed=function(){if(d){d();}};return e;};var amznLinkHandler=function(c){var e={};var d=null;var b=[];var a=function(f){if(typeof amznAutoTagger!=="undefined"){b.push(amznAutoTagger(c));}if(typeof amznPixelRecorder!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznPixelRecorder(c));}if(typeof amznImpressionAppender!=="undefined"&&amznOneTagUtils.isTrackingEnabled()){b.push(amznImpressionAppender(c));}};e.handleRequest=function(){var g=amznOneTagUtils.fetchAmznLinks(document,c.region,c.denyList);if(b.length===0){a();}for(var f=0;f<g.length;f++){if(!amznOneTagUtils.isLinkProcessed(g[f])){amznLinkSlot.increment();b.forEach(function(h){h.process(g[f]);});amznOneTagUtils.markLinkAsProcessed(g[f]);}}e.completed();};e.setNextHandler=function(f){d=f;};e.completed=function(){if(d){d();}};return e;};var amznMutationRunner=function(h){var g={};var f=3000;var c={childList:true,subtree:true,chracterData:true};var e=document.body;var j,a;var d=false;function b(){a=Date.now();j=a;h.handleRequest();d=false;}g.process=function(){h.setNextHandler(null);j=Date.now();var k=new MutationObserver(function(l){a=Date.now();if(a-j>f){j=a;h.handleRequest();}else{if(!d){d=true;setTimeout(b,f);}}});k.observe(e,c);};return g;};var amznDynamicContentHandler=function(a){var c={};var b=null;c.handleRequest=function(){if(typeof amznMutationRunner!=="undefined"){amznMutationRunner(a).process();}c.completed();};c.setNextHandler=function(d){b=d;};c.completed=function(){if(b){b();}};return c;};var amznOneTag=function(a){var b={};b.execute=function(){var e=amznPageHandler(a);var c=amznLinkHandler(a);var d=amznDynamicContentHandler(c);c.setNextHandler(d.handleRequest);e.setNextHandler(c.handleRequest);e.handleRequest();};return b;};
var spec = {
trackingId : "httpwwwidgcsm-20",
region : "US",
aesEndpoint : "https://assoc-na.associates-amazon.com",
denyList: [   "kdp.amazon.{0}"   , "amazon.{0}/adprefs"   , "advertising.amazon.{0}"   , "services.amazon.{0}/advertising"   , "amazon.{0}/advertise"   , "aws.amazon.{0}"   , "docs.aws.amazon.{0}"   , "developer.amazon.{0}"   , "giveaway.amazon.{0}"   , "powerup.amazon.{0}/admin"   , "quip-amazon.{0}"   , "advantage.amazon.{0}"   , "amazon.{0}/advantage"   , "ams.amazon.{0}"   , "author.amazon.{0}"   , "cscentral-eu.amazon.{0}"   , "org.amazon.{0}"   , "mturk.amazon.{0}"   , "dtp.amazon.{0}"   , "gamedev.amazon.{0}"   , "videodirect.amazon.{0}"   , "smile.amazon.{0}"   , "echo.amazon.{0}"   , "blueprints.amazon.{0}"   , "affiliate-blog.amazon.{0}"   , "jobfinder.amazon.{0}"   , "whispercast.amazon.{0}"   , "affiliate-program.amazon.{0}"   , "freight.amazon.{0}"   , "brandservices.amazon.{0}"   , "aftlite-na.amazon.{0}"   , "smt-tools.amazon.{0}"   , "alexa.amazon.{0}"   , "rapids.amazon.{0}"   , "fba.amazon.{0}"   , "authorize.payments.amazon.{0}"   , "kindleworlds.amazon.{0}"   , "authorcentral.amazon.{0}"   , "primenow.amazon.{0}"   , "kindlescout.amazon.{0}"   , "ignite.amazon.{0}"   , "payments.amazon.{0}"   , "amazonpublishing.amazon.{0}"   , "sell.amazon.{0}"   , "wap-jobs.amazon.{0}"   , "catalyst.amazon.{0}"   , "analytics-bi.amazon.{0}"   , "pay.amazon.{0}"   , "sellercentral.amazon.{0}"   , "source.amazon.{0}"   , "remars.amazon.{0}"   , "cloudcam.amazon.{0}"   , "studios.amazon.{0}"   , "read.amazon.{0}"   , "seller-central.amazon.{0}"   , "images.amazon.{0}"   , "alexaanswers.amazon.{0}"   , "kindle.amazon.{0}"   , "apub.amazon.{0}"   , "login.amazon.{0}"   , "sellercentral-europe.amazon.{0}"   , "services.amazon.{0}"   , "games.amazon.{0}"   , "twitch.amazon.{0}"   , "merch.amazon.{0}"   , "aps.amazon.{0}"   , "iliate-program.amazon.{0}"   , "translation.amazon.{0}"   , "logistics.amazon.{0}"   , "trans-logistics-eu.amazon.{0}"   , "pslip-web-na.amazon.{0}"   ]
};
var onetag = amznOneTag(spec);
onetag.execute();
}());
-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='editions-desktop-css' href='https://www.networkworld.com/wp-content/client-mu-plugins/idg-editions/dist/styles/main.css?ver=0.1.0' media='all' />
<link rel='stylesheet' id='third-party-integrations-style-css' href='https://www.networkworld.com/wp-content/client-mu-plugins/idg-third-party/dist/styles/index.css?ver=1706610157' media='all' />
<link rel='stylesheet' id='frontend-jwplayer-styles-css' href='https://www.networkworld.com/wp-content/themes/idg-b2b-base-theme/dist/styles/jwplayer.css?ver=1706610040' media='all' />
<link rel='stylesheet' id='frontend-shared-styles-css' href='https://www.networkworld.com/wp-content/themes/idg-b2b-base-theme/dist/styles/shared.css?ver=1706610040' media='all' />
<link rel='stylesheet' id='frontend-styles-css' href='https://www.networkworld.com/wp-content/themes/idg-b2b-base-theme/dist/styles/bundle.css?ver=1706610157' media='all' />
<link rel='stylesheet' id='nww-amp-styles-css' href='https://www.networkworld.com/wp-content/themes/nww-b2b-child-theme/dist/styles/amp.css?ver=1706610041' media='all' />
<link rel='stylesheet' id='jetpack_css-css' href='https://www.networkworld.com/wp-content/mu-plugins/jetpack-12.8/css/jetpack.css?ver=12.8.1' media='all' />
<script type="text/javascript" src="https://www.networkworld.com/_static/??-eJyNzTEOgzAMheELlZioiE6Is1SNWxySOLKTVtyeDAxMqPP7fj345Y7SK1SHCl7BkRb4YnIs0KbMYXtTCM2gFBMpGa83uIgEP9jss7B0UlOhiP9kp69LvjCveog5TvbRj+Nwt0PvdykLSiM=" ></script><script src="https://www.networkworld.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type="text/javascript" src="https://www.networkworld.com/wp-content/client-mu-plugins/idg-editions/dist/scripts/editions-front.js?m=1706610157g" ></script><script id="third-party-integrations-script-js-extra">
var IDG = {"settings":{"cmp":{"account":{"id":"146","base_endpoint":"https:\/\/cmpv2.networkworld.com","href":"https:\/\/networkworld.com"},"gdpr":{"script":"https:\/\/cmpv2.networkworld.com\/wrapperMessagingWithoutDetection.js","privacy_manager_id":"165662","property_id":"9222","privacy_manager_id_amp":"172450","href_amp":"https:\/\/amp.networkworld.com"},"ccpa":{"script":"https:\/\/ccpa.sp-prod.net\/ccpa.js","origin":"https:\/\/ccpa-service.sp-prod.net","privacy_manager_id":"3922","privacy_manager_uuid":"5dfa75f712068b42714ed7b8","property_id":"16079","href_amp":"https:\/\/ccpa.amp.networkworld.com"}},"gtm":{"account":{"id":"GTM-5JGZ3LH","amp_id":"","ua_number":"UA-230061-1"}},"gpt":{"consent":{"vendor_id":"5e74df5ff443bb795772df9c"},"config":{"prefix":"\/8456\/IDG.G_B2B_NetworkWorld.com\/","threshold":"0.7","slots":[{"name":"gpt-leaderboard","template":"banner","disabled":false,"sticky_duration":"12","pos":"ATF1","size":"320x50","size_definitions":[{"breakpoint":"970","sizes":"728x90"},{"breakpoint":"728","sizes":"728x90"},{"breakpoint":"320","sizes":"300x50,320x50"}],"insert_after_p":"1"},{"name":"gpt-leaderboardmainbod","template":"article","disabled":false,"refresh_interval":"30","refresh_amount":"5","size":"300x50","pos":"BTF{{count}}","size_definitions":[{"breakpoint":"970","sizes":"970x250,728x90,300x250"},{"breakpoint":"728","sizes":"728x90,300x250"},{"breakpoint":"320","sizes":"300x50,320x50,300x250"}],"page_template":[{"custom_template":"Homepage","desktop":"3,10","mobile":"3,10","feed_v2_articlelisting":[{"feed_v2":"Feed-V2","desktop":"3,5,9","mobile":"3,5,9","block_name":"feed_v2"}]},{"custom_template":"Article","desktop":"6,12,16","mobile":"6,12,16","feed_v2_articlelisting":[{"feed_v2":"Feed-V2","desktop":"3,5,9","mobile":"3,5,9","block_name":"feed_v2"}]},{"custom_template":"Archive","desktop":"0","mobile":"0","feed_v2_articlelisting":[{"feed_v2":"Feed-V2","desktop":"3,5,9","mobile":"3,5,9","block_name":"feed_v2"}]},{"custom_template":"Topic landing page","desktop":"3,9","mobile":"3,9","feed_v2_articlelisting":[{"feed_v2":"Feed-V2","desktop":"3,5,9","mobile":"3,5,9","block_name":"feed_v2"}]}],"insert_after_p":"1"},{"name":"gpt-rightrail","template":"right_rail","disabled":false,"size":"120x600","section":"Sidebardfpatf{{count}}","pos":"BTF{{count}}","size_definitions":[{"breakpoint":"970","sizes":"300x250,300x600,160x600,120x600"},{"breakpoint":"728","sizes":""},{"breakpoint":"320","sizes":""}],"insert_after_p":"1"},{"name":"gpt-oc_ad_1","template":"oc_ad_1","disabled":false,"size":"7x7","pos":"ATF1","size_definitions":[{"breakpoint":"970","sizes":"7x7"},{"breakpoint":"728","sizes":"7x7"},{"breakpoint":"320","sizes":"7x7"}],"insert_after_p":"1"},{"name":"gpt-topimu","template":"topimu","disabled":false,"size":"300x50","pos":"ATF1","size_definitions":[{"breakpoint":"970","sizes":"300x250,300x600,160x600,120x600"},{"breakpoint":"728","sizes":""},{"breakpoint":"320","sizes":""}],"insert_after_p":"1"},{"name":"gpt-overlay","template":"overlay","disabled":false,"size":"640x480","pos":"gpt-overlay","size_definitions":[{"breakpoint":"970","sizes":"640x480"},{"breakpoint":"728","sizes":"640x480"},{"breakpoint":"320","sizes":""}],"insert_after_p":"1"},{"name":"gpt-skin","template":"skin","disabled":false,"size":"1x1","pos":"gpt-skin","size_definitions":[{"breakpoint":"970","sizes":"1x1"},{"breakpoint":"728","sizes":""},{"breakpoint":"320","sizes":""}],"insert_after_p":"1"}],"aps_pub_id":"0"}},"ias":{"account":{"pub_id":""}},"index_exchange":{"config":{"id":""}},"permutive":{"account":{"workspace_id":"f5b3be27-f789-4ef1-8867-37c67da5b361","api_key":"84c7e805-5ce9-41f4-b988-3529488bab1c"}},"outbrain":[],"nativo":{"config":{"script":"https:\/\/s.ntv.io\/serve\/load.js","page_template":[{"custom_template":"Homepage","desktop":"5,8,13","mobile":"5,8,13"},{"custom_template":"Article","desktop":"3,5,9","mobile":"3,5,9"},{"custom_template":"Archive","desktop":"5","mobile":"5"}],"relatedcontent":[{"related_content_block":"Related Content","desktop":"3","block_name":"related_content"}],"populartopic":[{"nativopopulartopic":"Popular Topics","desktop":"2","mobile":"2","block_name":"popular_topics"}],"herov2":[{"nativoherov2":"Hero V2","desktop":"2","mobile":"2","block_name":"hero_v2","variant":[{"variant_name":"Default","desktop":"3,5","mobile":"3,5","Variant_value":"default"},{"variant_name":"Card 4 By 4","desktop":"4","mobile":"4","Variant_value":"fourByFour"},{"variant_name":"Card Small 4 By 4","desktop":"3","mobile":"3","Variant_value":"oneByThree"}]}],"variouscontentlisting":[{"various_content_listing":"Various content listings","desktop":"3,5,9","mobile":"3,5,9","block_name":"various_content_listing"}]}},"newsletter_register_para_details":{"nrp_info":{"paracount":"0"}},"newsletter_subscribe_btn_redirect_url":[],"blueconic":{"config":{"script":"https:\/\/cdn.blueconic.net\/idg.js","amp_config":"https:\/\/idg.blueconic.net\/rest\/custom\/frontend\/listener_amp\/config","item_id":"c619e04f-be23-492f-a453-3eab17c0e2f6"}},"subscribers":{"config":{"id":"84759cfb-f9aa-4fcf-bbe0-a758ebb06e08","script":"https:\/\/cdn.subscribers.com\/assets\/subscribers.js"}},"jw_player":{"config":{"insert_after_p":"4","insert_after_article":"4","player_library_id":"8yHZorDV","amp_player_library_id":"euFYK9mW","floating_player_playlist_id":"PXPA4gP3","adscheduleid":"LxK3nuOJ","floating_player_adscheduleid":"LxK3nuOJ","description_url":"http:\/\/www.networkworld.com","sz":"640x480","ciu_szs":"300x250,728x90"}},"io_script":{"config":{"id":"","io_amp_id":""}}},"GPT":{"ad_slot_name":"homepage_door","prefix":"\/8456\/IDG.G_B2B_NetworkWorld.com\/","targeting":{"articleId":"100002467","author":"Magnus Mueller","browser":"crawler4j(https:\/\/github.com\/yasserg\/crawler4j\/)","templateType":"home","categorySlugs":"","categoryIds":"","env":null,"productId":"","goldenIds":"","channel":"","fireplace":"true","type":"","typeId":"","sponsored":"false","video-autoplay":"true","manufactuer":"","url":"https:\/\/www.networkworld.com\/","zone":"index-home","wpsponsorshipId":""}},"geolocation":"ES","suppress_monetization":{},"supressBb2bRightrail":"","products":[],"vendor_pricing":{"amazon":[]},"APS":{"pubID":"0","scriptURL":"https:\/\/www.networkworld.com\/wp-content\/client-mu-plugins\/idg-third-party\/dist\/scripts\/apstag_library.js"},"isB2B":"1","isSingle":"","isEuVisitor":"1"};
</script>
<script id="third-party-integrations-script-js-before">
window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({"adBlockerEnabled":true,"arenaId":"","audience":"enterprise","ccpaOptedOut":"false","environment":"wp_production","sessionNumber":"@TODO","firstSessionDate":"@TODO","lastSessionDate":"@TODO","timestamp":1706795974,"url":"https:\/\/www.networkworld.com\/","triblioPixelCode":"","prodIds":"","prodCategories":"","prodManufacturers":"","prodNames":"","prodVendors":"","categories":"","categoryIds":"","categoriesSlugs":"","channel":"","primaryCategory":"","primaryAncestorCategoryList":"","primaryAncestorCategoryListSlugs":"","ancestorGoldenCategories":"","goldenTaxonomyIdPrimary":"","gtaxPrimaryIdsList":"","gtaxPrimarySlugsList":"","gtaxIdList":"","gtaxList":"","bcGtaxIdList":[],"bcGtaxList":[],"language":"English","articleId":"100002467","articleTitle":"Network World","articleType":"","author":"Magnus Mueller","isBlog":"false","blogname":"","blogId":"","brandpost":"false","content_type":"index","datePublished":"2023-11-07","dateUpdate":"2024-01-16","dateTimePublished":"2023-11-07T04:18:40-05:00","dateTimeUpdate":"2024-01-16T02:29:45-05:00","daysSincePublished":"86","daysSinceUpdated":"16","description":"Network World provides news and analysis of enterprise data center technologies, including networking, storage, servers and virtualization.","displayType":"home page","fireplace":"true","pageNumber":"1","page_type":"home","platform":"web","podcastSponsored":"false","property":"network world","source":"","sponsorName":"","sponsorshipId":"","tags":[],"legacyCmsId":"","edition":"us","articleLocale":"","isInsiderContent":"false","insiderSignedIn":"true","adSuppression":"false","BCUID":"","legacyCmsName":"","idgAppID":{"SITE_TYPE":[{"type":"delivery","site":"networkworld.com","sourcecms":"onecms","connectedhub":"b2b","staff":"NWW Staff","brand":"NWW"}],"IDG_APP_ID":7481}});
					// GDPR Stub
			!function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break; } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();

			// CCPA Stub
			(function () { var e = false; var c = window; var t = document; function r() { if (!c.frames["__uspapiLocator"]) { if (t.body) { var a = t.body; var e = t.createElement("iframe"); e.style.cssText = "display:none"; e.name = "__uspapiLocator"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __uspapi.a = __uspapi.a || []; if (!a.length) { return __uspapi.a } else if (a[0] === "ping") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __uspapi.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === "string"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__uspapi(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, "*") }) } } catch (a) { } } if (typeof __uspapi !== "function") { c.__uspapi = p; __uspapi.msgHandler = l; c.addEventListener("message", l, false) } })();
				// Google Tag Manager
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-5JGZ3LH');
		
		// Permutive Stub
		!function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config={}||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<o.length;r++){var t=o[r];n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);n.q.push({functionName:e,arguments:i})}}(t)}}}(    			window.permutive,
			'84c7e805-5ce9-41f4-b988-3529488bab1c'
		);
		window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[])}});

					
				let categorySlug = '';

				const stripOutIllegal = s => s.replace(/[~'"=!+#;^()<>&[]]/g,'');

				window.ntvConfig = window.ntvConfig || {} ;
				window.ntvConfig.keyValues = window.ntvConfig.keyValues || {};
				const segs = localStorage.getItem('_pnativo');
				if (segs) {
					window.ntvConfig.keyValues.permutive = JSON.parse(segs).join(",");
				}

				const metaKeywordsTag = document.querySelector("meta[name='keywords']");
				if ( metaKeywordsTag && (metaKeywordsTag.hasAttribute('content')) ) {
					const kwds = metaKeywordsTag.content.split(',').filter(kw => kw.length <= 40);
					window.ntvConfig.keyValues.contextual = stripOutIllegal(kwds.join(','));
				}
				[categorySlug].forEach(function(val) {
					if (val.length !== 0) {
						window.ntvConfig.keyValues.channel = stripOutIllegal(val);
					}
				});
				if (typeof(window.ntvConfig.keyValues.channel) === "undefined") {
					window.ntvConfig.keyValues.channel = "";
				}
				const DoSomething = () => {
					const boxes = document.querySelectorAll('.nativo-loading');
					boxes.forEach(box => {
						box.classList.remove('nativo-loading');
					});
				}
				var ntv=ntv||{};ntv.cmd=ntv.cmd||[]; // setup command queue
				ntv.cmd.push(function(){ setTimeout(DoSomething, 1000) });
</script>
<script src="https://www.networkworld.com/wp-content/client-mu-plugins/idg-third-party/dist/scripts/index.js?ver=1706610157" id="third-party-integrations-script-js"></script>
<script type="text/javascript" src="https://www.networkworld.com/_static/??-eJydj90KwjAMRl/IrJuOeSU+S3/CltF2tUkZe/sVdaBXghD4IHycnKg1gV2iYBRlPdWAUCD5MlJkRW4EmSg7SDrLphyxKLaZkrCa1+T1hrmZ+aT+x6SMhhxoxweIovXFYb1Q51Ewb+9oAsWfJQg0Zi34WT7UZMKALx9zNmA0Izx330q2sCyhfuCFGD1aqaB7uHXXdhj6S9e38w5AMXQ5" ></script>	<style>img#wpstats{display:none}</style>
		<script type="application/ld+json">[{"@context":"https:\/\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https:\/\/www.networkworld.com\/"},{"@type":"ListItem","position":2,"name":"Network World","item":""}]},{"@context":"https:\/\/schema.org","@type":"Organization","name":"Network World","description":"From the data center to the edge","memberOf":{"@type":"Organization","name":"Foundry"},"url":"https:\/\/www.networkworld.com","sameAs":["https:\/\/www.facebook.com\/NetworkWorld","https:\/\/twitter.com\/networkworld","https:\/\/www.linkedin.com\/company\/network-world"]}]</script>		<style>
			:root {
				/* Nativo Loader */
				--nativo-loader-color: #424a45;
				--sponsored-links--border-bottom-color: #9d9490;
				--sponsored-container--background-color: #fff
							}
		</style>
		<link rel="shortcut icon" href="https://www.networkworld.com/wp-content/themes/nww-b2b-child-theme/src/static/img/favicon.ico" type="image/x-icon"/>		<style>
			:root {
				/*Host Speaker Profile*/
				--host-speaker-profile-heading-color: #141414;
				--host-speaker-profile-heading-font-family: "fira-sans", sans-serif;
				--host-speaker-profile-title-description-font-family: "myriad-pro",sans-serif;
				--host-speaker-title-color: #808080;
				--host-speaker-description-color: #141414;
				--host-speaker-label-color: #AAA;
				--host-speaker-remove-link-color: #c30e0e;
				--host-speaker-horizontal-line-color: #DEDEDE;
				--host-speaker-company-name-font-color: #75757A;
				/* Agenda Block */
				--agenda-heading-event-name-color: #141414;
				--agenda-heading-font-family: "fira-sans", sans-serif;
				--agenda-event-name-font-family: "myriad-pro",sans-serif;
				--agenda-horizontal-block-divider-color: #dedede;
				--agenda-event-month-day-date-color: #322a2a;
				--agenda-event-month-date-color: #969696;
				--agenda-start-end-time-color: #75757a;
				--agenda-error-msg-color: #FF0000;
				--agenda-day-time-text-shadow-color: #808080;
				--agenda-note-text-color: #808080;
				--agenda-label-text-color: #111;
				--agenda-multi-day-button-background-color: #000;
				--agenda-multi-day-button-text-color: #fff;
				--agenda-heading-label-color: #AAA;
				--agenda-details-link-color: #327F7C;
				--agenda-block-mobile-background-color: #f5f5f5;

				/*event content block */
				--event-register-btn-bg-color: #ed1b24;
				--event-register-btn-color: #fff;
				--event-share-icons-color: white;
				--event-share-icons-color-fb: #3b5998;
				--event-share-icons-color-twitter: #00acee;
				--event-share-icons-color-linkedin: #2867b2;
				--event-description-top-border: #d8dad8;
				--event-details-label-color: #B30000;
				--event-details-text-color: #141414;
				--event-logo-label: "myriad-pro", sans-serif;
				--event-description-text-color: #322a2a;
				--who-should-attend-heading: "fira-sans", sans-serif;
				--who-should-attend-text: "myriad-pro", sans-serif;

				/* Event Hero Block */
				--fira-sans-fonts: "fira-sans", sans-serif;
				--fira-sans-regular: 400;
				--fira-sans-extrabold: 800;
				--fira-sans-semibold: 600;
				/* Event Index Page */
				--border-color: #75757a;
				--filter-background-color: #F6F6F6;
				--base--font-color: #322a2a;
				--index-more-events-title-color: #141414;
				--myraid-font-family: "myriad-pro",sans-serif;
				--myriad-regular: 400;
				--myriad-bold: 700;
				--base--global-white-color: #fff;
				--base--global-black-color: #000;
				--index-events-title-font-hover-color: #B30000;
				/* Image Credit */
				--image-credit-font-color: #555;
				--image-credit-text: "Credit: ";
				--image-caption-text: "Caption: ";

				--event-hero-block-heading-color: #fff;--event-hero-dynamic-background-image: url("");			}
		</style>
				<style>
			:root {
				/* FAQ*/
				--faq-heading-seprator-color: #d8d8d8;
				--faq-input-box-border-color: #757575;
				--faq-remove-link-color: #c30e0e;
				--faq-heading-color: #141414;
				--faq-heading-font-family: "fira-sans", sans-serif;
				--faq-title-description-font-family: "myriad-pro",sans-serif;
				--faq-label-color: #AAA;
				--faq-company-name-font-color: #75757A;
				--faq-horizontal-line-color: #DEDEDE;
				--faq-head-title--font-family: "graphik", sans-serif;
			}

		</style>
				<style>
			:root {
			/* Nav menu */
			--nav-menu-error: #b32d2e;
			/* Promo Unit Block HR color */
			--promo-unit-hr: #d55d5d;
			/* Promo Unit Block Title After Color */
			--promo-unit-title-after: #d04949;
			/* Promo Unit Block Title After Color */
			--promo-unit-title: #322a2a;
			/* Promo Unit Block Title before Color */
			--promo-unit-before-one: #e42e22;
			/* Promo Unit Block Title before Color */
			--promo-unit-before-two: #f3f5f6;
			/* Promo Unit Block Title before Color */
			--promo-unit-item-bg: #000;

			/* Deals Collection Block */
			--deal-collection-productIndex-border-color: #12C7F1;
			--deal-collection-deal-header-color: #000;
			--deal-collection-deal--view-button--background-color: #21873A;
			--deal-collection-deal-price-color: #CD0912;
			--site-primary: #3399cc;
			--view-button--green: #3e873a;
			/* Publication list pop-up pn edit edition page */
			--publication-list-container-bg: rgba(255, 255, 255, 1);
			--publication-list-container-border: #111;
			--publication-list-container-bs: #222;
			--publication-list-bg:rgba(100, 100, 100, .6);
			--publication-list-popup-header-border: #ddd;
			--publication-list-popup-header-bg: #e9e9e9;
			/*Lineup Element*/
			--lineup-element-error-font-color: #cd423b;
			--lineup-element-disabled-button-background-color: #ddd;
			--lineup-element-disabled-button-font-color: #eee;
			--lineup-element-button-tooltip-background-color: #757575;
			--lineup-element-button-tooltip-font-color: #fff;
			--lineup-element-note-font-color: #757575;
			--lineup-element-button-disabled: hsla(0,0%,100%,.4);

			/* LineUp Popover.*/
			--lineup-popover-a-color: white;
			--lineup-popover-err-color: red;
			--lineup-popover-th-color: #d4d4d4;
			--lineup-popover-tr-color: #f2f2f2;
			--lineup-popover-paginate-a-active-color: #ddd;
			--lineup-popover-paginate-a-non-active-color: #006ba1;

			/* Slotting settings */
			--slotting-settings-taxonomy-help-text-color: #808080;

			/* Author section top */
			--sponsorship-brandpost-divider-line-color: #D8D8D8;
			/** Block - Product chart */
			--product-chart--information-value--font-color: #2A7DA7;
			--product-chart--review-link--font-color: #2A7DA7;
			--product-chart--description--font-color: #4D4D4D;
			--product-chart--separator--background-color: #404040;

			/** Block - Product chart Pros and Cons */
			--product-chart--pros-cons-title--font-color: #111111;
			--product-chart--pros-cons-border: 1px solid #ccc;
			/* Author Archive Page */
			--author-archive-title: rgba(0, 0, 0, .87);
			--author-job-title: #000;
			--author-share-icons-divider-color: #D8D8D8;
			--author-share-icon-fill-color: #111;
			/* Sponsors index Page */
			--sponsored-index-page-slug-background-color: #eee;
			--sponsorship-brandpost--title: 28px;
			--sponsorship-title--line-height: 32px;
			--uppercase-text: uppercase;
			--sponsor-eyebrow--font-color: #75757A;
			--sponsor-tooltip-learn-more--font-color: #111111;
			--sponsorship-brandpost--title-color: #111111;
			/* How to - at a glance block */
			--how-to-at-glance-text-font-family: "canada-type-gibson", sans-serif;
			--how-to--step-heading--font-family: "regis", serif;
			--how-to--step-border--divider-color: #B6AEAA;
			--how-to--at-a-glance--background-color: #E6DCD5;

			/* Sponsorship Header. */
			--sponsorship-header--font-color: #4d4d4d;

			/* fonts */
			--fira-sans-semibold: 700;

			/* responsive table gradient */
			--core-table--gradient--border-color: #C5C5C5;
			--core-table--gradient--alpha--border-color: #faf6f445;

			/* headings */
			--heading-three: 24px;
			--heading-four: 20px;
			--heading-three-line-height: 30px;
			/* Insider Popover.*/
			--insider-popover-background-color: white;
			--insider-popover-box-shadow-color: rgba(0, 0, 0, .31);
			--insider-popover-help-text-color: #4a4a4a;
			--insiderPopover-link-color: #322a2a;
			--insider-popover-signing-button-text-color: white;
			--insider-popover-signin-button-background: #4a3d3d;
			--insider-popover-signout-button-background: #b43017;
			--insiderPopover-welcome-font-color: #141414;
			/* Listing Button */
			--insider-listing-primary-button-background : #4e4242;
			--insiderPopover-link-hover-color:#3c807c;
			--mercury-form--insider-color: #6eae00;
			}
		</style>
			<meta name="displaytype" content="article" />
<meta name="source" content="https://www.networkworld.com/" />
<link rel="canonical" href="https://www.networkworld.com/" />
<meta name="description" content="Network World provides news and analysis of enterprise data center technologies, including networking, storage, servers and virtualization." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.networkworld.com/" />
<meta property="og:site_name" content="Network World" />
<meta property="og:title" content="Network World" />
<meta property="og:description" content="Network World provides news and analysis of enterprise data center technologies, including networking, storage, servers and virtualization." />
<meta property="og:image" content="https://www.networkworld.com/wp-content/uploads/2024/01/new-nww-montage-v1.jpg?quality=50&amp;strip=all&amp;w=1024" />
<meta property="og:image:width" content="1024" />
<meta property="og:image:height" content="576" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.networkworld.com/" />
<meta property="twitter:site" content="Network World" />
<meta property="twitter:title" content="Network World" />
<meta property="twitter:description" content="Network World provides news and analysis of enterprise data center technologies, including networking, storage, servers and virtualization." />
<meta property="twitter:image" content="https://www.networkworld.com/wp-content/uploads/2024/01/new-nww-montage-v1.jpg?quality=50&amp;strip=all&amp;w=1024" />
<!-- There is no amphtml version available for this URL. --></head>

<body class="home page-template page-template-homepage page-template-homepage-php page page-id-100002467 static-header theme-nww">
	<svg id="icon-sprite" style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <g id="icon-apple-podcasts">
      <path d="M11.432 20.546c-.681-.244-.827-.575-1.107-2.515-.324-2.255-.395-3.65-.207-4.093.25-.586.927-.919 1.873-.922.94-.004 1.624.332 1.874.922.189.441.118 1.838-.207 4.093-.221 1.575-.342 1.974-.647 2.241-.418.37-1.012.473-1.575.274h-.004Zm-2.91-2.314c-2.351-1.157-3.858-3.114-4.406-5.718-.137-.673-.16-2.275-.03-2.893.342-1.655.997-2.95 2.085-4.094C7.739 3.874 9.756 3 12 3c2.222 0 4.231.858 5.761 2.461 1.164 1.21 1.819 2.491 2.154 4.179.114.561.114 2.092.007 2.724a8.091 8.091 0 0 1-3.082 5.04c-.58.437-1.994 1.2-2.222 1.2-.084 0-.092-.087-.053-.438.068-.563.136-.68.456-.814.51-.213 1.378-.831 1.91-1.366a7.27 7.27 0 0 0 1.91-3.363c.198-.784.176-2.527-.044-3.334-.695-2.567-2.787-4.56-5.351-5.093-.746-.153-2.101-.153-2.855 0-2.595.532-4.741 2.625-5.397 5.258-.175.714-.175 2.459 0 3.174.434 1.743 1.561 3.341 3.037 4.293.25.167.512.317.784.449.32.137.388.25.448.814.038.342.03.441-.053.441-.053 0-.441-.167-.852-.365l-.036-.028Zm.031-3.095c-.792-.632-1.491-1.752-1.78-2.851-.176-.664-.176-1.926.007-2.587.48-1.787 1.796-3.172 3.622-3.823.625-.22 2.008-.268 2.778-.1 2.648.588 4.529 3.24 4.165 5.871-.145 1.06-.51 1.931-1.157 2.74-.32.409-1.096 1.095-1.233 1.095-.022 0-.044-.26-.044-.575v-.573l.396-.472c1.492-1.787 1.385-4.282-.244-5.921-.631-.637-1.362-1.012-2.306-1.185-.609-.113-.738-.113-1.377-.007-.97.158-1.722.535-2.39 1.194-1.64 1.618-1.746 4.129-.254 5.917l.393.474v.58c0 .32-.026.58-.057.58-.031 0-.251-.152-.487-.343l-.032-.014Zm2.64-3.107c-.676-.316-1.042-.91-1.05-1.685 0-.696.389-1.304 1.058-1.66.427-.222 1.18-.222 1.606 0 .473.256.828.686.99 1.199.441 1.5-1.15 2.816-2.588 2.144l-.015.002Z" fill="currentColor"/>
      <path d="M12.114 12.325a1.898 1.898 0 1 0 0-3.795 1.898 1.898 0 0 0 0 3.796ZM12.298 13.06c.215.025.428.068.635.13a2.3 2.3 0 0 1 .636.318c.168.121.29.248.366.401.076.153.114.336.137.636.015.3.015.713-.053 1.491a53.146 53.146 0 0 1-.313 2.636c-.106.726-.182 1.05-.281 1.286a1.152 1.152 0 0 1-.845.738 1.83 1.83 0 0 1-.441.038 1.893 1.893 0 0 1-.442-.038c-.174-.038-.401-.106-.57-.243-.176-.137-.29-.335-.381-.594-.091-.259-.16-.57-.251-1.195a66.213 66.213 0 0 1-.29-2.26 18.148 18.148 0 0 1-.112-1.522c-.006-.328.008-.491.044-.647.036-.15.098-.291.183-.419a1.389 1.389 0 0 1 .661-.504c.157-.06.32-.106.485-.137.197-.038.426-.075.543-.091a.596.596 0 0 1 .248 0l.04-.024Z" fill="currentColor"/>
    </g>

    <g id="icon-arrow-up-right-from-square">
      <path fill-rule="evenodd" clip-rule="evenodd" d="m19.19 3.75-9.72 9.72-.53.53L10 15.06l.53-.53 9.72-9.72v4.94h1.5V3a.747.747 0 0 0-.75-.75h-6.75v1.5h4.94ZM4 5.75a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25V11.717h1.5V20A1.75 1.75 0 0 1 18 21.75H4A1.75 1.75 0 0 1 2.25 20V6c0-.966.784-1.75 1.75-1.75H12.283v1.5H4Z" fill="currentColor"/>
    </g>

    <g id="icon-calendar">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.5H4a.5.5 0 0 0-.5.5v2.25h17V6a.5.5 0 0 0-.5-.5ZM3.5 18V9.75h17V18a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5ZM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm5.42 10.292c0 .75.198 1.092.696 1.092.48 0 .666-.354.666-1.098v-.156c0-.75-.198-1.098-.678-1.098-.486 0-.684.348-.684 1.092v.168Zm2.712-.03c0 1.38-.804 2.172-2.058 2.172-1.236 0-2.004-.768-2.004-2.136v-.168c0-1.374.882-2.13 2.028-2.13 1.14 0 2.034.678 2.034 2.1v.162Zm3.254 2.094h-1.362v-2.952l-.792.474V12.75l.984-.684h1.17v4.29Z" fill="currentColor"/>
    </g>

    <g id="icon-caret-down">
      <path d="m6 8 4.3 7.1c.8 1.3 2.7 1.3 3.4 0L18 8H6Z" fill="currentColor"/>
    </g>

    <g id="icon-circle-bars">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.287 5.833C16.902 4.408 14.815 3.5 12 3.5c-2.87 0-4.952.91-6.32 2.329C4.303 7.256 3.5 9.353 3.5 12c0 2.58.819 4.684 2.217 6.134C7.107 19.574 9.196 20.5 12 20.5c2.804 0 4.893-.926 6.283-2.366C19.681 16.684 20.5 14.58 20.5 12c0-2.636-.822-4.735-2.213-6.167ZM22 12c0-5.9-3.7-10-10-10C5.6 2 2 6.1 2 12c0 5.8 3.7 10 10 10s10-4.2 10-10ZM7 10.75v-1.5h10v1.5H7Zm0 2.5v1.5h10v-1.5H7Z" fill="currentColor"/>
    </g>

    <g id="icon-circle-chevron-down">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.39 1.44-3.479 2.366-6.283 2.366-2.804 0-4.893-.926-6.283-2.366C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5ZM12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10S2 17.8 2 12C2 6.1 5.6 2 12 2ZM8.326 9.97l3.536 3.536a.25.25 0 0 0 .353 0l3.536-3.535 1.06 1.06-3.535 3.536a1.75 1.75 0 0 1-2.475 0L7.266 11.03l1.06-1.06Z" fill="currentColor"/>
    </g>

    <g id="icon-circle-chevron-left">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.39 1.44-3.479 2.366-6.283 2.366-2.804 0-4.893-.926-6.283-2.366C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5ZM12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10S2 17.8 2 12C2 6.1 5.6 2 12 2Zm1.773 6.53-3.536 3.536a.25.25 0 0 0 0 .353l3.536 3.536-1.061 1.06-3.536-3.535a1.75 1.75 0 0 1 0-2.475l3.536-3.535 1.06 1.06Z" fill="currentColor"/>
    </g>

    <g id="icon-circle-chevron-right">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.39 1.44-3.479 2.366-6.283 2.366-2.804 0-4.893-.926-6.283-2.366C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5ZM12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10S2 17.8 2 12C2 6.1 5.6 2 12 2ZM9.712 8.53l3.535 3.536a.25.25 0 0 1 0 .353l-3.535 3.536 1.06 1.06 3.536-3.535a1.75 1.75 0 0 0 0-2.475L10.773 7.47 9.712 8.53Z" fill="currentColor"/>
    </g>

    <g id="icon-circle-chevron-up">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.39 1.44-3.479 2.366-6.283 2.366-2.804 0-4.893-.926-6.283-2.366C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5ZM12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10S2 17.8 2 12C2 6.1 5.6 2 12 2Zm3.752 12.53-3.536-3.536a.25.25 0 0 0-.353 0l-3.536 3.535-1.06-1.06 3.535-3.536a1.75 1.75 0 0 1 2.475 0l3.536 3.536-1.061 1.06Z" fill="currentColor"/>
    </g>

    <g id="icon-circle-xmark">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.287 5.833C16.902 4.408 14.815 3.5 12 3.5c-2.87 0-4.952.91-6.32 2.329C4.303 7.256 3.5 9.353 3.5 12c0 2.58.819 4.684 2.217 6.134C7.107 19.574 9.196 20.5 12 20.5c2.804 0 4.893-.926 6.283-2.366C19.681 16.684 20.5 14.58 20.5 12c0-2.636-.822-4.735-2.213-6.167ZM22 12c0-5.9-3.7-10-10-10C5.6 2 2 6.1 2 12c0 5.8 3.7 10 10 10s10-4.2 10-10Zm-9.998-1.069 3-3 1.06 1.061-3 3 3.01 3.009-1.062 1.06-3.008-3.008-3.01 3.01-1.061-1.06 3.01-3.01L7.94 8.99 9 7.93l3.002 3.002Z" fill="currentColor"/>
    </g>

    <g id="icon-chevron-down">
      <path fill-rule="evenodd" clip-rule="evenodd" d="m11.776 14.42-4.95-4.95-1.06 1.061 4.95 4.95a1.75 1.75 0 0 0 2.474 0l4.95-4.95-1.06-1.06-4.95 4.95a.25.25 0 0 1-.354 0Z" fill="currentColor"/>
    </g>

    <g id="icon-chevron-left">
      <path fill-rule="evenodd" clip-rule="evenodd" d="m10.08 11.87 4.95-4.95-1.061-1.06-4.95 4.95a1.75 1.75 0 0 0 0 2.474l4.95 4.95 1.06-1.06-4.95-4.95a.25.25 0 0 1 0-.354Z" fill="currentColor"/>
    </g>

    <g id="icon-chevron-right">
      <path fill-rule="evenodd" clip-rule="evenodd" d="m14.42 12.224-4.95 4.95 1.061 1.06 4.95-4.95a1.75 1.75 0 0 0 0-2.474l-4.95-4.95-1.06 1.06 4.95 4.95a.25.25 0 0 1 0 .354Z" fill="currentColor"/>
    </g>

    <g id="icon-chevron-up">
      <path fill-rule="evenodd" clip-rule="evenodd" d="m12.13 10.08 4.95 4.95 1.06-1.061-4.95-4.95a1.75 1.75 0 0 0-2.474 0l-4.95 4.95 1.06 1.06 4.95-4.95a.25.25 0 0 1 .354 0Z" fill="currentColor"/>
    </g>

    <g id="icon-envelope">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.5h16a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5ZM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm4.416 1.376-.624-.416-.832 1.248.624.416 4.89 3.26a2.75 2.75 0 0 0 3.051 0l4.891-3.26.624-.416-.832-1.248-.624.416-4.89 3.26c-.42.28-.968.28-1.387 0l-4.891-3.26Z" fill="currentColor"/>
    </g>

    <g id="icon-facebook">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.226 1.27-2.995 2.14-5.318 2.328v-5.35h2.04l.39-2.61h-2.43v-1.695c0-.714.343-1.41 1.43-1.41H15.5v-2.22S14.495 7 13.537 7c-2.001 0-3.31 1.25-3.31 3.514v1.992H8v2.61h2.227v5.25c-1.93-.305-3.43-1.114-4.51-2.232C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5Zm-.472 18.492C5.516 21.787 2 17.654 2 12 2 6.1 5.6 2 12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10-.147 0-.293-.002-.437-.007l-.016.007-.019-.008Z" fill="currentColor"/>
    </g>

    <g id="icon-globe">
      <path d="M19.4 4.8C17.6 3 15 2 12 2 8.9 2 6.4 3 4.6 4.8 2.9 6.6 2 9 2 12c0 2.9.9 5.4 2.6 7.2C6.4 21 9 22 12 22s5.6-1 7.4-2.8c1.7-1.8 2.6-4.3 2.6-7.2 0-2.9-.9-5.4-2.6-7.2Zm1.1 6.4H17c-.1-2.6-.5-4.8-1.3-6.5-.1-.3-.3-.6-.5-.8 1.2.4 2.2 1 3.1 1.8 1.3 1.5 2 3.3 2.2 5.5ZM12 20.5c-.9 0-1.7-.7-2.3-2-.7-1.4-1.1-3.4-1.2-5.8h7c-.1 2.3-.5 4.4-1.2 5.8-.6 1.3-1.4 2-2.3 2Zm-3.5-9.3c.1-2.3.5-4.3 1.2-5.8.6-1.3 1.4-1.9 2.3-1.9.9 0 1.7.7 2.3 1.9.7 1.4 1.1 3.4 1.2 5.8h-7ZM5.7 5.8C6.5 5 7.5 4.4 8.8 4c-.2.2-.4.5-.5.8-.8 1.6-1.2 3.8-1.3 6.4H3.5c.2-2.2.9-4 2.2-5.4Zm-2.2 6.9H7c.1 2.6.5 4.8 1.3 6.4.2.3.3.6.5.8-1.2-.4-2.2-1-3.1-1.9-1.3-1.2-2-3.1-2.2-5.3Zm14.8 5.4c-.8.9-1.9 1.5-3.1 1.9.2-.2.3-.5.5-.8.8-1.6 1.2-3.8 1.3-6.4h3.5c-.2 2.1-.9 4-2.2 5.3Z" fill="currentColor"/>
    </g>

    <g id="icon-google-podcasts">
      <path d="M12 6.9c-.606 0-1.098-.476-1.098-1.063V4.562c0-.587.492-1.062 1.098-1.062.606 0 1.098.475 1.098 1.062v1.275c0 .587-.492 1.062-1.098 1.062ZM12 15.826c-.606 0-1.098-.476-1.098-1.063V9.24c0-.587.492-1.062 1.098-1.062.606 0 1.098.475 1.098 1.062v5.524c0 .587-.492 1.063-1.098 1.063ZM10.902 19.438c0 .587.492 1.062 1.098 1.062.606 0 1.098-.476 1.098-1.062v-1.275c0-.587-.492-1.063-1.098-1.063-.606 0-1.098.476-1.098 1.063v1.275ZM8.049 17.098c-.607 0-1.098-.476-1.098-1.063v-1.274c0-.587.491-1.063 1.098-1.063.606 0 1.097.476 1.097 1.063v1.274c0 .587-.49 1.063-1.097 1.063ZM14.854 9.24c0 .586.49 1.062 1.097 1.062s1.098-.476 1.098-1.063V7.964c0-.586-.491-1.062-1.098-1.062-.606 0-1.097.476-1.097 1.062V9.24ZM8.049 12.429c-.607 0-1.098-.476-1.098-1.062V7.542c0-.587.491-1.062 1.098-1.062.606 0 1.097.475 1.097 1.062v3.825c0 .586-.49 1.062-1.097 1.062ZM14.854 16.466c0 .587.49 1.062 1.097 1.062s1.098-.475 1.098-1.062V12.64c0-.586-.491-1.062-1.098-1.062-.606 0-1.097.476-1.097 1.062v3.825ZM4.098 13.704C3.49 13.704 3 13.228 3 12.64v-1.274c0-.587.491-1.063 1.098-1.063.606 0 1.097.476 1.097 1.063v1.274c0 .587-.491 1.063-1.097 1.063ZM18.805 12.641c0 .587.491 1.063 1.097 1.063.607 0 1.098-.476 1.098-1.063v-1.274c0-.587-.491-1.063-1.098-1.063-.606 0-1.097.476-1.097 1.063v1.274Z" fill="currentColor"/>
    </g>

    <g id="icon-instagram">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5H8A3.5 3.5 0 0 0 4.5 8v8A3.5 3.5 0 0 0 8 19.5h8a3.5 3.5 0 0 0 3.5-3.5V8A3.5 3.5 0 0 0 16 4.5ZM8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8Zm6.237 6.8C13.794 9.344 13.082 9 12 9c-1.11 0-1.818.347-2.25.796C9.308 10.253 9 10.976 9 12c0 .986.31 1.714.766 2.187.448.465 1.162.813 2.234.813s1.786-.348 2.234-.813C14.69 13.714 15 12.986 15 12c0-1.014-.313-1.738-.763-2.2ZM16.5 12c0-2.655-1.665-4.5-4.5-4.5-2.88 0-4.5 1.845-4.5 4.5 0 2.61 1.665 4.5 4.5 4.5s4.5-1.89 4.5-4.5ZM18 7c0-.59-.37-1-1-1-.64 0-1 .41-1 1 0 .58.37 1 1 1s1-.42 1-1Z" fill="currentColor"/>
    </g>

    <g id="icon-layer-group">
      <path fill-rule="evenodd" clip-rule="evenodd" d="m6.09 7.984 5.672 3.166a.5.5 0 0 0 .486 0l5.665-3.132-5.672-3.166a.5.5 0 0 0-.485 0L6.09 7.983Zm-1.546.855 6.487 3.62a2 2 0 0 0 1.943.005l6.482-3.585.055-.03.703-.389a.5.5 0 0 0 .002-.874l-.702-.392-.054-.03-6.488-3.621a2 2 0 0 0-1.942-.004L4.548 7.123l-.055.03-.704.39a.5.5 0 0 0-.001.873l.701.392.055.03Zm2.254 6.758-1.543-.861-.706.39-.055.03-.703.39a.5.5 0 0 0-.002.873l.702.392.054.03h.001l6.487 3.621a2 2 0 0 0 1.942.004l6.482-3.584.055-.03.704-.39a.5.5 0 0 0 .002-.873l-.702-.392-.055-.03-.711-.398-1.546.855.71.397-5.665 3.133a.5.5 0 0 1-.485-.001l-5.672-3.166.706-.39Zm-1.543-4.861 1.543.86-.706.391 5.672 3.166a.5.5 0 0 0 .485 0l5.666-3.132-.712-.397 1.547-.855.71.397h.001l.055.031.702.392a.5.5 0 0 1-.002.874l-.704.389-.054.03-6.483 3.585a2 2 0 0 1-1.942-.004l-6.487-3.621-.055-.03-.702-.393a.5.5 0 0 1 .002-.874l.703-.389.055-.03.706-.39Z" fill="currentColor"/>
    </g>

    <g id="icon-linked-in">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.093 4a2.125 2.125 0 0 0-2.124 2.122c0 1.17.953 2.122 2.124 2.122 1.17 0 2.122-.952 2.122-2.122S7.263 4 6.093 4Zm1.61 5.14H4.486a.259.259 0 0 0-.258.26v10.34c0 .143.115.258.258.258h3.219a.259.259 0 0 0 .259-.258V9.4a.259.259 0 0 0-.26-.26Zm5.358.93c.58-.631 1.535-1.187 2.828-1.187 3.625 0 4.114 2.62 4.114 5.184v5.672a.259.259 0 0 1-.259.259h-3.213a.259.259 0 0 1-.258-.259v-5.028c0-1.407-.104-2.484-1.413-2.484-1.202 0-1.67.672-1.67 2.396v5.116a.259.259 0 0 1-.259.258H9.72a.259.259 0 0 1-.26-.258V9.399c0-.143.117-.26.26-.26h3.082c.143 0 .259.117.259.26v.671Z" fill="currentColor"/>
    </g>

    <g id="icon-magnifying-glass">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4.5c1.726 0 2.943.538 3.726 1.319.785.783 1.274 1.952 1.274 3.484 0 1.495-.486 2.669-1.278 3.464-.787.792-2.006 1.34-3.722 1.34-1.716 0-2.935-.548-3.722-1.34-.792-.795-1.278-1.969-1.278-3.464 0-1.543.48-2.71 1.253-3.488C6.523 5.04 7.736 4.5 9.5 4.5Zm0-1.5C13.595 3 16 5.584 16 9.303c0 3.656-2.405 6.303-6.5 6.303-4.095 0-6.5-2.647-6.5-6.303C3 5.584 5.34 3 9.5 3Zm6.405 11.845a.75.75 0 1 0-1.06 1.06l5.5 5.5 1.06-1.06-5.5-5.5Z" fill="currentColor"/>
    </g>

    <g id="icon-play">
      <path d="m7 20 10.002-6.155c1.374-.846 1.374-2.844 0-3.69L7 4v16Z" fill="currentColor"/>
    </g>

    <g id="icon-podcast">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2.25v19.5h-1.5V2.25h1.5Zm3 17.5V4.25h-1.5v15.5h1.5Zm-6-12.5v9.5h-1.5v-9.5h1.5Zm12 3v3.5h-1.5v-3.5h1.5Zm-3 5.5v-7.5h-1.5v7.5h1.5Zm-13-4.25c.473 0 .75.307.75.75 0 .435-.277.75-.75.75S2 12.685 2 12.25c0-.443.27-.75.75-.75Zm19.25.75c0-.443-.277-.75-.75-.75-.48 0-.75.307-.75.75 0 .435.277.75.75.75s.75-.315.75-.75Z" fill="currentColor"/>
    </g>

    <g id="icon-print">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3.5v4H6V2h12v5.5h-1.5v-4h-9ZM18 18h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2v4h12v-4Zm0-1.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2V14h12v2.5Zm-1.5 0v-1h-9v5h9v-4Z" fill="currentColor"/>
    </g>

    <g id="icon-quote">
      <path d="M0 15.224v.147C0 18.375 2.32 20.5 5.366 20.5c3.045 0 5.22-2.125 5.22-5.13v-.146c0-2.345-1.305-4.103-3.408-4.836L9.208 3.5H3.77l-2.755 7.62C.29 12.88 0 14.126 0 15.225Zm13.414 0v.147c0 3.004 2.32 5.129 5.365 5.129 3.046 0 5.221-2.125 5.221-5.13v-.146c0-2.345-1.305-4.103-3.408-4.836l2.03-6.888h-5.438l-2.755 7.62c-.725 1.76-1.015 3.005-1.015 4.104Z" fill="currentColor"/>
    </g>

    <g id="icon-reddit">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.39 1.44-3.479 2.366-6.283 2.366-2.804 0-4.893-.926-6.283-2.366C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5ZM12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10S2 17.8 2 12C2 6.1 5.6 2 12 2Zm4.693 5.963a.954.954 0 0 0-.94-.963.895.895 0 0 0-.493.145.93.93 0 0 0-.339.396l-2.183-.476a.257.257 0 0 0-.179.032.264.264 0 0 0-.105.152l-.665 3.226c-1.402.044-2.658.466-3.564 1.147a1.315 1.315 0 0 0-.907-.378c-.727 0-1.318.607-1.318 1.353 0 .261.073.517.212.736.138.22.336.393.569.498-.021.13-.033.271-.033.412C6.748 16.322 9.1 18 12.011 18c2.91 0 5.262-1.678 5.262-3.757 0-.134-.01-.268-.032-.4.432-.217.759-.694.759-1.246 0-.746-.59-1.353-1.318-1.353-.358 0-.675.14-.907.379-.897-.66-2.14-1.094-3.511-1.148l.6-2.89 1.952.422c.013.25.121.484.3.654a.925.925 0 0 0 1.306-.03.977.977 0 0 0 .27-.668Zm-7.709 5.598c0-.53.422-.964.94-.964.516 0 .937.433.937.964 0 .53-.421.963-.938.963a.953.953 0 0 1-.939-.963Zm4.134 0c0-.531.421-.964.938-.964.517 0 .939.434.939.964s-.422.963-.939.963a.953.953 0 0 1-.938-.963Zm-3.343 2.187a.243.243 0 0 1 .268-.055c.03.013.057.031.08.055.4.412 1.265.563 1.888.563.622 0 1.476-.152 1.887-.563a.245.245 0 0 1 .348 0 .283.283 0 0 1-.021.357c-.643.66-1.867.704-2.225.704-.358 0-1.592-.055-2.225-.704a.258.258 0 0 1 0-.357Z" fill="currentColor"/>
    </g>

    <g id="icon-rss">
      <path d="M5.5 17c.945 0 1.5.615 1.5 1.5 0 .87-.555 1.5-1.5 1.5S4 19.37 4 18.5c0-.885.54-1.5 1.5-1.5Z" fill="currentColor"/>
      <path d="M18.405 20v.05H19.159V20A15.159 15.159 0 0 0 4 4.84h-.05V5.596H4a14.405 14.405 0 0 1 14.405 14.404Z" fill="currentColor" stroke="currentColor" stroke-width=".5"/>
      <path d="M12.06 19.997v.1h.568v-.1A8.628 8.628 0 0 0 4 11.37h-.1v.569H4a8.06 8.06 0 0 1 8.06 8.06Z" fill="currentColor" stroke="currentColor" stroke-width=".5"/>
    </g>

    <g id="icon-soundcloud">
      <path d="M7 17h1.25V9.128a3.214 3.214 0 0 0-1.25.69V17Zm-2.5-5.325v5.316l.08.009h1.17v-5.334H4.58l-.08.009ZM2 14.332c0 .968.504 1.808 1.25 2.276V12.06A2.675 2.675 0 0 0 2 14.332ZM9.5 17h1.25V9.475A3.12 3.12 0 0 0 9.5 9.03V17Zm9.92-5.333h-.704c.036-.218.058-.439.058-.667 0-2.21-1.733-4-3.87-4-1.16 0-2.195.534-2.904 1.37V17h7.42c1.424 0 2.58-1.194 2.58-2.668 0-1.472-1.156-2.665-2.58-2.665Z" fill="currentColor"/>
    </g>

    <g id="icon-spotify">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c2.815 0 4.902.908 6.287 2.333C19.678 7.265 20.5 9.364 20.5 12c0 2.58-.819 4.684-2.217 6.134-1.39 1.44-3.479 2.366-6.283 2.366-2.804 0-4.893-.926-6.283-2.366C4.319 16.684 3.5 14.58 3.5 12c0-2.647.803-4.744 2.18-6.171C7.048 4.41 9.13 3.5 12 3.5ZM12 2c6.3 0 10 4.1 10 10 0 5.8-3.7 10-10 10S2 17.8 2 12C2 6.1 5.6 2 12 2Zm3.355 14.164a.56.56 0 1 0 .586-.958c-2.372-1.45-5.313-1.787-8.741-1.003a.56.56 0 1 0 .25 1.094c3.132-.716 5.792-.424 7.905.867Zm.908-2.405a.702.702 0 0 0 .735-1.196c-2.779-1.707-6.842-2.188-10.11-1.196a.703.703 0 0 0 .407 1.343c2.862-.87 6.55-.438 8.968 1.049ZM6.867 9.935c2.77-.84 7.555-.682 10.456 1.04a.842.842 0 1 0 .86-1.447c-3.34-1.983-8.625-2.17-11.804-1.204a.842.842 0 0 0 .488 1.61Z" fill="currentColor"/>
    </g>

    <g id="icon-twitter">
      <path d="M15.563 5c-2.086.033-3.73 1.891-3.73 4.043v.522C8.105 8.88 6.272 7.837 4.249 5.652c-1.201 2.413.126 4.435 1.58 5.544-.98 0-1.801-.13-2.433-.718-.064-.032-.127 0-.095.066.537 2.021 2.37 3.489 3.793 3.912-1.296 0-2.15.196-3.066-.39-.063-.033-.127 0-.095.064.695 1.99 2.086 2.61 4.109 2.61-1.012.782-2.37 1.564-4.93 1.63-.096 0-.159.13-.064.195C3.995 19.38 6.334 20 9.62 20c5.405 0 9.799-4.957 9.799-11.087v-.326c.853-.326 1.327-1.109 1.58-1.891 0-.033-.032-.066-.063-.066l-1.802.653c-.032 0-.063-.066-.032-.098.76-.62 1.328-1.402 1.581-2.152 0 0-.032-.033-.063-.033-.854.359-1.675.717-2.308.913a.364.364 0 0 1-.316-.033c-.41-.228-1.643-.88-2.434-.88Z" fill="currentColor"/>
    </g>

    <g id="icon-user">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5c.925 0 1.512.293 1.87.66.363.375.63.974.63 1.84 0 .84-.264 1.444-.634 1.829-.363.375-.952.671-1.866.671-.914 0-1.503-.296-1.866-.671C9.764 8.444 9.5 7.84 9.5 7c0-.877.263-1.474.62-1.844.348-.36.93-.656 1.88-.656ZM12 3c2.52 0 4 1.64 4 4 0 2.32-1.48 4-4 4S8 9.32 8 7c0-2.36 1.44-4 4-4Zm4.814 13.275C15.772 15.203 14.184 14.5 12 14.5c-2.23 0-3.812.706-4.84 1.771C6.123 17.346 5.5 18.943 5.5 21H4c0-4.72 2.88-8 8-8 5.04 0 8 3.28 8 8h-1.5c0-2.046-.637-3.645-1.686-4.725Z" fill="currentColor"/>
    </g>

    <g id="icon-video">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.5h16a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5ZM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm11.57 5.857L10 15V9l3.57 2.143a1 1 0 0 1 0 1.714Z" fill="currentColor"/>
    </g>

    <g id="icon-youtube">
      <path d="M12 4.856c-.603 0-5.922.012-7.417.407A3.06 3.06 0 0 0 2.41 7.41C2.005 8.91 2 11.874 2 11.998c0 .125.005 3.088.412 4.59a3.06 3.06 0 0 0 2.172 2.147c1.494.394 6.814.406 7.415.406s5.922-.012 7.417-.408a3.06 3.06 0 0 0 2.172-2.146c.407-1.503.412-4.464.412-4.589 0-.124-.005-3.087-.412-4.588a3.06 3.06 0 0 0-2.172-2.147c-1.494-.395-6.814-.407-7.415-.407h-.002Zm0 12.782c-1.58 0-5.92-.065-7.023-.357A1.54 1.54 0 0 1 3.882 16.2c-.356-1.312-.361-4.172-.361-4.2 0-.03.005-2.89.36-4.202a1.54 1.54 0 0 1 1.096-1.082c1.102-.291 5.443-.356 7.022-.356 1.58 0 5.92.065 7.023.356.534.142.954.556 1.095 1.082.356 1.313.36 4.173.36 4.201 0 .029-.004 2.89-.36 4.201a1.541 1.541 0 0 1-1.095 1.082c-1.103.292-5.444.357-7.023.357Z" fill="currentColor"/>
      <path d="m14.41 11.997-3.598 2.399V9.598l3.599 2.4Z" fill="currentColor" stroke="currentColor"/>
    </g>
  </defs>
</svg>
	<div id="page" class="site">
		<header class="header header--bg-nww-brown">
			
<div id="primaryNav" class="container header__container">
	<!-- header logo -->
	<div class="header__logo-container">
		<a href="https://www.networkworld.com" aria-label="Home page">
			<?xml version="1.0" encoding="UTF-8"?>
<svg width="201" height="31" version="1.1" viewBox="0 0 201 31" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><g transform="scale(.41875 .4026)" data-name="Layer 2"><g data-name="Layer 1"><g id="Networkworld"><path d="m36.32 74.31v-72h-13.32v14.07c0 7.21 0.1 14.15 0.47 21.18a66.72 66.72 0 0 0-2.34-9.65c-1.31-4.5-7.5-25.6-7.5-25.6h-12.93v72h13.3v-18.37c0-8.44-0.09-10.13-0.65-19.78a76.74 76.74 0 0 0 2.81 11.53c1.7 5.31 8.54 26.62 8.54 26.62z"/><polygon points="65.39 43.28 65.39 32.03 53.01 32.03 53.01 13.56 67.17 13.56 67.17 2.31 38.2 2.31 38.2 74.31 69.32 74.31 69.32 62.59 53.01 62.59 53.01 43.28"/><polygon points="80.19 13.56 80.19 74.31 95.19 74.31 95.19 13.56 106.54 13.56 106.54 2.31 68.94 2.31 68.94 13.56"/><path d="m161.1 2.31h-12.47s-1.78 15.19-3 24.94a147.7 147.7 0 0 0-0.75 17.34s-0.19-9.46-1.22-17.34c-1.22-9.66-2.06-16.31-3.28-24.94h-11.63c-0.84 6.29-2.34 15.28-3.75 24.85-0.75 4.87-0.75 17.43-0.75 17.43s-0.18-12.46-0.65-17.34c-0.85-9.75-2.35-24.94-2.35-24.94h-13.68l9.18 72h12.66s1.87-12.94 3-21.09 1.78-15 1.78-15 0.94 6.84 1.87 15 2.63 21.09 2.63 21.09h11.81z"/><path d="m181.62 38.41c0 13.12-0.09 15.09-0.56 20.25-0.47 4.87-1.13 6.09-2.81 6.09s-2.81-1.22-3.1-6.09c-0.28-5.07-0.28-7.13-0.28-20.25 0-11.25 0.1-16.32 0.28-21.47 0.19-4.88 1-6.28 2.91-6.28 1.69 0 2.62 1.4 3 6.28 0.37 5.15 0.56 10.12 0.56 21.47m15.66 0c0-31.13-6-37.22-19.5-37.22s-18.56 5.62-18.56 37.22c0 32.15 6.47 37.4 18.56 37.4 12.94 0 19.5-6.37 19.5-37.4"/><path d="m221.28 23.41c0 6.75-1.13 8.72-4.78 8.72h-3v-19.32h1.31c4.31 0 6.47 0.1 6.47 10.6m16.59 50.9c-1.87-2.72-3-11.44-3.09-18-0.1-11.34-1.6-18.37-10.22-18.93 9.09-1.13 11.53-5.44 11.53-16.79 0-13-6.66-18.28-16.59-18.28h-20.63v72h14.63v-31.69h1c4.12 0 5.25 3.19 5.25 9.75v8.82c0 5.15 0.56 10.5 1.59 13.12z"/><polygon points="252.67 26.69 252.67 2.31 237.86 2.31 237.86 74.31 252.67 74.31 252.67 47.69 263.64 74.31 280.79 74.31 263.45 35.41 279.39 2.31 264.01 2.31"/><path d="m332.24 2.31h-12.47s-1.78 15.19-3 24.94a150.18 150.18 0 0 0-0.77 17.34s-0.18-9.46-1.21-17.34c-1.22-9.66-2.07-16.31-3.29-24.94h-11.6c-0.84 6.29-2.34 15.28-3.75 24.85-0.75 4.87-0.75 17.43-0.75 17.43s-0.19-12.46-0.66-17.34c-0.84-9.75-2.34-24.94-2.34-24.94h-13.69l9.19 72h12.66s1.87-12.94 3-21.09 1.78-15 1.78-15 0.93 6.84 1.87 15l2.63 21.09h11.81z"/><path d="m352.77 38.41c0 13.12-0.09 15.09-0.56 20.25-0.47 4.87-1.13 6.09-2.82 6.09s-2.81-1.22-3.09-6.09c-0.28-5.07-0.28-7.13-0.28-20.25 0-11.25 0.09-16.32 0.28-21.47 0.19-4.88 1-6.28 2.91-6.28 1.68 0 2.62 1.4 3 6.28 0.37 5.15 0.56 10.12 0.56 21.47m15.65 0c0-31.13-6-37.22-19.49-37.22s-18.57 5.62-18.57 37.22c0 32.15 6.47 37.4 18.57 37.4 12.93 0 19.49-6.37 19.49-37.4"/><path d="m392.42 23.41c0 6.75-1.12 8.72-4.78 8.72h-3v-19.32h1.36c4.31 0 6.46 0.1 6.46 10.6m16.54 50.9c-1.88-2.72-3-11.44-3.1-18-0.09-11.34-1.59-18.37-10.21-18.93 9.09-1.13 11.53-5.44 11.53-16.79 0-13-6.66-18.28-16.6-18.28h-20.62v72h14.62v-31.69h1c4.13 0 5.25 3.19 5.25 9.75v8.82c0 5.15 0.57 10.5 1.6 13.12z"/><polygon points="409 2.31 409 74.31 440.22 74.31 440.22 62.59 423.82 62.59 423.82 2.31"/><path d="m463.64 43.28c0 19.5-0.93 19.78-5.43 19.78h-1.41v-49.5h1.31c4.69 0 5.53 1.88 5.53 29.72m15.66-1.28c0-32-6.19-39.66-21.47-39.66h-15.65v72h18.28c13.5 0 18.84-5.15 18.84-32.34"/></g><rect class="cls-1" width="480" height="77"/></g></g></svg>
		</a>
	</div>

	<nav class="header__nav">
		<!-- primary menu nevigation -->
		<div class="header__nav-left">
			<ul class="header__nav-items">
				<li class="header__nav-item">
					<button class="header__nav-link" type="button" aria-label="Open topics menu" data-menu-trigger="topics">
						<span>
							<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<use xlink:href="#icon-layer-group"></use>
							</svg>
							Topics						</span>
					</button>
				</li>
				<li class='header__nav-item'><a class='header__nav-link' href='/newsletters/signup/'>Newsletters</a></li><li class='header__nav-item'><a class='header__nav-link' href='/events/'>Events</a></li><li class='header__nav-item'><a class='header__nav-link' href='https://us.resources.networkworld.com/'>Resources</a></li>			</ul>
		</div>
		<!-- right side header navigation -->
<div class="header__nav-right">
	<button
		class="header__icon-button"
		type="button"
		aria-label="Open search"
		data-menu-trigger="search"
	>
		<svg
		class="icon icon--lg"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		>
		<use xlink:href="#icon-magnifying-glass"></use>
		</svg>
	</button>	
	<button class="header__main-menu-button header__main-menu-button--mobile" type="button" aria-label="Open main menu" data-menu-trigger="main-mobile">
		<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<use xlink:href="#icon-circle-bars"></use>
		</svg>
	</button>
	<button class="header__main-menu-button" type="button" aria-label="Open main menu" data-menu-trigger="main">
		<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<use xlink:href="#icon-circle-bars"></use>
		</svg>
	</button>
</div>
<!-- right section menu container -->
<div class="header__menu" data-menu="main">
	<div class="container container--no-padding header__menu-container">
		<button class="header__menu-close-main-button" type="button" aria-label="Close main menu" data-menu-close="main">
			<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<use xlink:href="#icon-circle-xmark"></use>
			</svg>
		</button>
		<div class="container grid header__menu-content"><div class="col-12 col-3@lg"><h2 class="header__menu-title header__menu-title--large">About</h2><ul class="header__menu-items"><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/about-us/">About Us</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/our-brands/networkworld/">Advertise</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/contact-us/">Contact Us</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/work-here/">Foundry Careers</a></li><li class="header__menu-item"><a class="header__menu-link" href="/contact-us/#republication-permissions">Reprints</a></li><li class="header__menu-item"><a class="header__menu-link" href="/newsletters/signup/">Newsletters</a></li></ul></div><div class="col-12 col-3@lg"><h2 class="header__menu-title header__menu-title--large">Policies</h2><ul class="header__menu-items"><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/terms-of-service-agreement/">Terms of Service</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/privacy-policy/">Privacy Policy</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/cookie-policy/">Cookie Policy</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/copyright-notice/">Copyright Notice</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/member-preferences/">Member Preferences</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/about-adchoices/">About AdChoices</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/e-commerce-affiliate-relationships/">E-commerce Links</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/your-california-privacy-rights/">Your California Privacy Rights</a></li></ul></div><div class="col-12 col-3@lg"><h2 class="header__menu-title header__menu-title--large">Our Network</h2><ul class="header__menu-items"><li class="header__menu-item"><a class="header__menu-link" href="https://www.cio.com/">CIO</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.csoonline.com/">CSO</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.computerworld.com/">Computerworld</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.infoworld.com/">InfoWorld</a></li></ul></div><div class="col-12 col-3@lg"><h2 class="header__menu-title header__menu-title--large">More</h2><ul class="header__menu-items"><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/blogs/">Blogs</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/brandposts/">Brandposts</a></li><li class="header__menu-item"><a class="header__menu-link" href="/events/">Events</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/videos/">Videos</a></li></div>	</div>
</div>
	</nav>
</div>
<!-- Topic menu -->
<div class="header__menu" data-menu="topics">
	<div class="container container--no-padding header__menu-container">
		<div class="container grid header__menu-content">
			<div class="header__menu-close-button">
				<button class="button button--quaternary" type="button" data-menu-close="topics" aria-label="Close topics menu">
					<span>Close</span>
					<span>
						<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<use xlink:href="#icon-circle-xmark"></use>
						</svg>
					</span>
				</button>
			</div>
			<div class='col-12 col-6@lg'> <ul class='header__menu-items header__menu-items--large'><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/generative-ai/'>Generative AI</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/careers/'>Careers</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/cloud-computing/'>Cloud Computing</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/cpus-and-processors/'>CPUs and Processors</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/data-center/'>Data Center</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/edge-computing/'>Edge Computing</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/enterprise-storage/'>Enterprise Storage</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/linux/'>Linux</a></li></ul></div><div class='col-12 col-6@lg'> <ul class='header__menu-items header__menu-items--large'><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/virtualization/'>Virtualization</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/industry/'>Industry</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/5g/'>5G</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/networking/'>Networking</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/internet-of-things/'>Internet of Things</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/network-management-software/'>Network Management Software</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/network-security/'>Network Security</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/artificial-intelligence/'>Artificial Intelligence</a></li></ul></div>		</div>
	</div>
</div>
<!-- edition menu -->
<div class="header__menu" data-menu="location">
	<div class="container container--no-padding header__menu-container">
		<div class="header__menu-back-button">
			<button class="button button--quaternary" type="button" data-menu-trigger="main-mobile" aria-label="Back to main menu">
				<span>
					<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<use xlink:href="#icon-circle-chevron-left"></use>
					</svg>
				</span>
				<span>Back</span>
			</button>
		</div>
		<div class="container grid header__menu-content">
			<div class="header__menu-close-button">
				<button class="button button--quaternary" type="button" data-menu-close="location" aria-label="Close location menu">
					<span>Close</span>
					<span>
						<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<use xlink:href="#icon-circle-xmark"></use>
						</svg>
					</span>
				</button>
			</div>
								<div class="col-12 col-2@lg">
						<h2 class="header__menu-title">Americas</h2>
						<ul class="header__menu-items header__menu-items--small header__menu-items--divider">
															<li class="header__menu-item edition-item">
																			<span class="header__menu-link header__menu-link--active">United States</span>
																		</li>
													</ul>
					</div>
							</div>
	</div>
</div>
							<div class="header__menu header__menu--inverted" data-menu="search">
					<div class="header__menu-container">
						<div class="header__menu-back-button">
							<button class="button button--quaternary" type="button" data-menu-trigger="main-mobile" aria-label="Back to main menu">
								<span>
									<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<use xlink:href="#icon-circle-chevron-left"></use>
									</svg>
								</span>
								<span>Back</span>
							</button>
						</div>
						<div class="container header__menu-content">
							<div class="header__menu-close-button">
								<button class="button button--quaternary" type="button" data-menu-close="search" aria-label="Close search">
									<span>Close</span>
									<span>
										<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<use xlink:href="#icon-circle-xmark"></use>
										</svg>
									</span>
								</button>
							</div>
							<div class="google-programmable-search">
								<div class="google-programmable-search__searchbox">
									<div class="gcse-searchbox-only" data-resultsUrl="https://www.networkworld.com/search"></div>
								</div>

								<div class="grid google-programmable-search__popular-topics-container">
									<div class="col-12 google-programmable-search__popular-topics-title">
										Popular Topics									</div>
									<div class="col-12 col-6@lg">
										<div class='grid grid--cols-6@lg'> <ul class='col-12 col-6@md col-3@lg google-programmable-search__menu-items'><li><a class='google-programmable-search__menu-link' href='https://www.networkworld.com/generative-ai/'>Generative AI</a></li><li><a class='google-programmable-search__menu-link' href='https://www.networkworld.com/networking/'>Networking</a></li><li><a class='google-programmable-search__menu-link' href='https://www.networkworld.com/cloud-computing/'>Cloud Computing</a></li></ul><ul class='col-12 col-6@md col-3@lg google-programmable-search__menu-items'><li><a class='google-programmable-search__menu-link' href='https://www.networkworld.com/data-center/'>Data Center</a></li><li><a class='google-programmable-search__menu-link' href='https://www.networkworld.com/linux/'>Linux</a></li><li><a class='google-programmable-search__menu-link' href='https://www.networkworld.com/virtualization/'>Virtualization</a></li></ul></div>									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
							<div id="primaryNav" class="header__menu" data-menu="main-mobile">
	<div class="container container--no-padding header__menu-container">
		<button class="header__menu-close-main-button" type="button" aria-label="Close main menu" data-menu-close="main-mobile">
			<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<use xlink:href="#icon-circle-xmark"></use>
			</svg>
		</button>
		<div class="container grid header__menu-content">
			<div class="col-12">
				<ul class="header__menu-items header__menu-items--small">
					<li class="header__menu-item">
						<button class="header__menu-link" type="button"  aria-label="Open search" data-menu-trigger="search">
							<span>
								<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<use xlink:href="#icon-magnifying-glass"></use>
								</svg>
							</span>
							<span>Search</span>
						</button>
					</li>
				</ul>
			</div>
			<div class="col-12">
				<ul class="header__menu-items">
					<li class="header__menu-item">
						<button class="header__menu-link" type="button" aria-label="Open topics menu" data-menu-trigger="topics-mobile">
							<span>Topics</span>
							<span>
								<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<use xlink:href="#icon-layer-group"></use>
								</svg>
							</span>
						</button>
					</li>
					<li class='header__menu-item'><a class='header__menu-link' href='/newsletters/signup/'>Newsletters</a></li><li class='header__menu-item'><a class='header__menu-link' href='/events/'>Events</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://us.resources.networkworld.com/'>Resources</a></li><li class='header__menu-item'><button class='header__menu-link' type='button' data-menu-trigger='hamburger-100002498'>About</button><li class='header__menu-item'><button class='header__menu-link' type='button' data-menu-trigger='hamburger-100002505'>Policies</button><li class='header__menu-item'><button class='header__menu-link' type='button' data-menu-trigger='hamburger-100004346'>Our Network</button><li class='header__menu-item'><button class='header__menu-link' type='button' data-menu-trigger='hamburger-100004352'>More</button>				</ul>
			</div>
		</div>
	</div>
</div>

<div class="header__menu" data-menu="topics-mobile">
	<div class="container container--no-padding header__menu-container">
		<div class="header__menu-back-button">
			<button class="button button--quaternary" type="button" data-menu-trigger="main-mobile"  aria-label="Back to main menu">
				<span>
					<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<use xlink:href="#icon-circle-chevron-left"></use>
					</svg>
				</span>
				<span>Back</span>
			</button>
		</div>

		<div class="container grid header__menu-content">
			<div class="col-12">
				<h2 class="header__menu-title">
					<span>Topics</span>
					<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<use xlink:href="#icon-layer-group"></use>
					</svg>
				</h2>
				<ul class="header__menu-items header__menu-items--small header__menu-items--divider">
					<li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/generative-ai/'>Generative AI</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/careers/'>Careers</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/cloud-computing/'>Cloud Computing</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/cpus-and-processors/'>CPUs and Processors</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/data-center/'>Data Center</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/edge-computing/'>Edge Computing</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/enterprise-storage/'>Enterprise Storage</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/linux/'>Linux</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/virtualization/'>Virtualization</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/industry/'>Industry</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/5g/'>5G</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/networking/'>Networking</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/internet-of-things/'>Internet of Things</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/network-management-software/'>Network Management Software</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/network-security/'>Network Security</a></li><li class='header__menu-item'><a class='header__menu-link' href='https://www.networkworld.com/artificial-intelligence/'>Artificial Intelligence</a></li>				</ul>
			</div>
		</div>
	</div>
</div>
<!-- hamburger menu -->
 <div class="header__menu" data-menu="hamburger-100002498">			<div class="container header__menu-container">
				<button class="button button--quaternary header__menu-back-button" type="button" data-menu-trigger="main-mobile" aria-label="Back to main menu">
					<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<circle cx="12" cy="12" r="9" stroke="currentColor" />
						<path d="m9.976 11.22.312.39-.312-.39Zm4.336 4.39-4.024-3.22-.624.781 4.024 3.22.624-.781Zm-4.024-4 4.024-3.22-.624-.78-4.024 3.219.624.78Zm0 .78a.5.5 0 0 1 0-.78l-.624-.781a1.5 1.5 0 0 0 0 2.342l.624-.78Z" fill="currentColor" />
					</svg>
					Back				</button>

				<div class="grid header__menu-content">
					<button class="header__menu-close-button" type="button" aria-label="Close hamburger menu" data-menu-close="hamburger">
						<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke="currentColor" stroke-width="2" d="M1.293 22.506 22.506 1.293M1.707 1.293 22.92 22.506" />
						</svg>
					</button>
				<div class="col-12 col-2@lg"><h2 class="header__menu-title">About</h2><ul class="header__menu-items header__menu-items--small header__menu-items--divider"><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/about-us/">About Us</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/our-brands/networkworld/">Advertise</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/contact-us/">Contact Us</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/work-here/">Foundry Careers</a></li><li class="header__menu-item"><a class="header__menu-link" href="/contact-us/#republication-permissions">Reprints</a></li><li class="header__menu-item"><a class="header__menu-link" href="/newsletters/signup/">Newsletters</a></li></ul></div>				</div>
			</div>
			</div>
				 <div class="header__menu" data-menu="hamburger-100002505">			<div class="container header__menu-container">
				<button class="button button--quaternary header__menu-back-button" type="button" data-menu-trigger="main-mobile" aria-label="Back to main menu">
					<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<circle cx="12" cy="12" r="9" stroke="currentColor" />
						<path d="m9.976 11.22.312.39-.312-.39Zm4.336 4.39-4.024-3.22-.624.781 4.024 3.22.624-.781Zm-4.024-4 4.024-3.22-.624-.78-4.024 3.219.624.78Zm0 .78a.5.5 0 0 1 0-.78l-.624-.781a1.5 1.5 0 0 0 0 2.342l.624-.78Z" fill="currentColor" />
					</svg>
					Back				</button>

				<div class="grid header__menu-content">
					<button class="header__menu-close-button" type="button" aria-label="Close hamburger menu" data-menu-close="hamburger">
						<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke="currentColor" stroke-width="2" d="M1.293 22.506 22.506 1.293M1.707 1.293 22.92 22.506" />
						</svg>
					</button>
				<div class="col-12 col-2@lg"><h2 class="header__menu-title">Policies</h2><ul class="header__menu-items header__menu-items--small header__menu-items--divider"><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/terms-of-service-agreement/">Terms of Service</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/privacy-policy/">Privacy Policy</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/cookie-policy/">Cookie Policy</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://foundryco.com/copyright-notice/">Copyright Notice</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/member-preferences/">Member Preferences</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/about-adchoices/">About AdChoices</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/e-commerce-affiliate-relationships/">E-commerce Links</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/your-california-privacy-rights/">Your California Privacy Rights</a></li></ul></div>				</div>
			</div>
			</div>
				 <div class="header__menu" data-menu="hamburger-100004346">			<div class="container header__menu-container">
				<button class="button button--quaternary header__menu-back-button" type="button" data-menu-trigger="main-mobile" aria-label="Back to main menu">
					<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<circle cx="12" cy="12" r="9" stroke="currentColor" />
						<path d="m9.976 11.22.312.39-.312-.39Zm4.336 4.39-4.024-3.22-.624.781 4.024 3.22.624-.781Zm-4.024-4 4.024-3.22-.624-.78-4.024 3.219.624.78Zm0 .78a.5.5 0 0 1 0-.78l-.624-.781a1.5 1.5 0 0 0 0 2.342l.624-.78Z" fill="currentColor" />
					</svg>
					Back				</button>

				<div class="grid header__menu-content">
					<button class="header__menu-close-button" type="button" aria-label="Close hamburger menu" data-menu-close="hamburger">
						<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke="currentColor" stroke-width="2" d="M1.293 22.506 22.506 1.293M1.707 1.293 22.92 22.506" />
						</svg>
					</button>
				<div class="col-12 col-2@lg"><h2 class="header__menu-title">Our Network</h2><ul class="header__menu-items header__menu-items--small header__menu-items--divider"><li class="header__menu-item"><a class="header__menu-link" href="https://www.cio.com/">CIO</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.csoonline.com/">CSO</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.computerworld.com/">Computerworld</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.infoworld.com/">InfoWorld</a></li></ul></div>				</div>
			</div>
			</div>
				 <div class="header__menu" data-menu="hamburger-100004352">			<div class="container header__menu-container">
				<button class="button button--quaternary header__menu-back-button" type="button" data-menu-trigger="main-mobile" aria-label="Back to main menu">
					<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<circle cx="12" cy="12" r="9" stroke="currentColor" />
						<path d="m9.976 11.22.312.39-.312-.39Zm4.336 4.39-4.024-3.22-.624.781 4.024 3.22.624-.781Zm-4.024-4 4.024-3.22-.624-.78-4.024 3.219.624.78Zm0 .78a.5.5 0 0 1 0-.78l-.624-.781a1.5 1.5 0 0 0 0 2.342l.624-.78Z" fill="currentColor" />
					</svg>
					Back				</button>

				<div class="grid header__menu-content">
					<button class="header__menu-close-button" type="button" aria-label="Close hamburger menu" data-menu-close="hamburger">
						<svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke="currentColor" stroke-width="2" d="M1.293 22.506 22.506 1.293M1.707 1.293 22.92 22.506" />
						</svg>
					</button>
				<div class="col-12 col-2@lg"><h2 class="header__menu-title">More</h2><ul class="header__menu-items header__menu-items--small header__menu-items--divider"><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/blogs/">Blogs</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/brandposts/">Brandposts</a></li><li class="header__menu-item"><a class="header__menu-link" href="/events/">Events</a></li><li class="header__menu-item"><a class="header__menu-link" href="https://www.networkworld.com/videos/">Videos</a></li>		</header>
		<div class="advert">
					<div class="container advert__container">
					  <div class="advert__content"><div class="ad ad-overlay" data-ad-template="overlay" data-ofp="true"></div></div></div></div><div class="advert">
					<div class="container advert__container">
					  <div class="advert__content"><div class="ad ad-skin" data-ad-template="skin" data-ofp="true"></div></div></div></div>	<main id="primary">
		
<article id="post-100002467" class="post-100002467 page type-page status-publish has-post-thumbnail languages-en">
	<div class="entry-content">
		<section class="wp-block-bigbite-multi-title"><div class="container"></div></section>


<section class="latest-content " id="latest"> <div class="container"><div class="latest-content__head"><h2 class="latest-content__title" id="latest-from-today">Latest from today</h2></div><div class="grid latest-content__content"><div class="col-12 col-7@md col-8@lg"><div class="latest-content__content-featured"><a class="card card--xxl " href="https://www.networkworld.com/article/1302717/cisco-hitachi-deliver-managed-hybrid-cloud-services.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type">news</span></div><div class="card__image"><div class="insider-image"><div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?quality=50&amp;strip=all&amp;w=252" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?quality=50&amp;strip=all 2400w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=300%2C200&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=768%2C512&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=1024%2C683&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=1536%2C1024&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=2048%2C1365&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=1240%2C826&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=150%2C100&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=1046%2C697&amp;quality=50&amp;strip=all 1046w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=252%2C168&amp;quality=50&amp;strip=all 252w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=126%2C84&amp;quality=50&amp;strip=all 126w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=720%2C480&amp;quality=50&amp;strip=all 720w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=540%2C360&amp;quality=50&amp;strip=all 540w, https://www.networkworld.com/wp-content/uploads/2024/01/spot-nww-primary-main-hybridcloud-2400x1600-1-100915769-orig.jpg?resize=375%2C250&amp;quality=50&amp;strip=all 375w" data-id="idg_render_hero_index_one_card_image" sizes="
            (min-resolution: 3dppx) and (max-width: 600px) 900px,
            (min-resolution: 3dppx) and (max-width: 1200px) 1200px,

            (min-resolution: 2dppx) and (max-width: 600px) 900px,
            (min-resolution: 2dppx) and (max-width: 1200px) 1200px,

            (min-resolution: 1dppx) and (max-width: 600px) 900px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1300px" alt="Image" loading="eager" width="400px"></div></div></div><h4 class="card__title" id="cisco-hitachi-deliver-managed-hybrid-cloud-services">Cisco, Hitachi deliver managed hybrid cloud services</h4><p class="card__description">New services from Cisco and Hitachi offer cloud network monitoring, problem alerting, capacity management, provisioning and more.</p><div class="card__info"><span>By Michael Cooney</span></div><div class="card__info card__info--light"><span>Jan 31, 2024</span><span>2 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Enterprise Storage</span></span><span class="card__tag"><span class="tag">Managed Cloud Services</span></span><span class="card__tag"><span class="tag">Network Management Software</span></span></div></a>
		</div><div class="grid grid--cols-7@md grid--cols-8@lg latest-content__content-main"><div class="col-12 col-7@md col-4@lg latest-content__card-main"><a class="card " href="https://www.networkworld.com/article/1302680/backbox-bolsters-network-automation-platform-with-zero-trust-tools.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type">news</span></div><div class="card__image">
			<div class="insider-image"><div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?quality=50&amp;strip=all&amp;w=252" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?quality=50&amp;strip=all 5472w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=300%2C200&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=768%2C512&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=1024%2C683&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=1536%2C1024&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=2048%2C1365&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=1240%2C826&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=150%2C100&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=1046%2C697&amp;quality=50&amp;strip=all 1046w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=252%2C168&amp;quality=50&amp;strip=all 252w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=126%2C84&amp;quality=50&amp;strip=all 126w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=720%2C480&amp;quality=50&amp;strip=all 720w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=540%2C360&amp;quality=50&amp;strip=all 540w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1878688420.jpg?resize=375%2C250&amp;quality=50&amp;strip=all 375w" data-id="idg_render_hero_index_two_three_break" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="backbox-bolsters-network-automation-platform-with-zero-trust-tools">BackBox bolsters network automation platform with zero-trust tools</h4><div class="card__info"><span>By Denise Dubie</span></div><div class="card__info card__info--light"><span>Jan 31, 2024</span><span>4 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Network Monitoring</span></span><span class="card__tag"><span class="tag">Network Security</span></span></div></a></div><div class="col-12 col-7@md col-4@lg latest-content__card-main"><span class="nativo-loading"></span><a id="nativofeatuedmed-1" class="card nativo" href="https://www.networkworld.com/article/1302440/kentik-boosts-observability-platform-with-genai.html" backfill="true" aria-label="Go to content"><div class="card__header"><span class="card__content-type">news</span></div><div class="card__image">
			<div class="insider-image"><div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?quality=50&amp;strip=all&amp;w=252" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?quality=50&amp;strip=all 1200w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=300%2C200&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=768%2C512&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=1024%2C683&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=150%2C100&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=1046%2C697&amp;quality=50&amp;strip=all 1046w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=252%2C168&amp;quality=50&amp;strip=all 252w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=126%2C84&amp;quality=50&amp;strip=all 126w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=720%2C480&amp;quality=50&amp;strip=all 720w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=540%2C360&amp;quality=50&amp;strip=all 540w, https://www.networkworld.com/wp-content/uploads/2024/01/data-center-monitoring-network-woman-it-specialist_shutterstock_1936992898-100944697-orig-4.jpg?resize=375%2C250&amp;quality=50&amp;strip=all 375w" data-id="idg_render_hero_index_two_three_break" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="kentik-boosts-observability-platform-with-genai">Kentik boosts observability platform with genAI</h4><div class="card__info"><span>By Denise Dubie</span></div><div class="card__info card__info--light"><span>Jan 31, 2024</span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Network Monitoring</span></span></div></a></div></div></div><div class="col-12 col-5@md col-4@lg latest-content__content-secondary"><div class="latest-content__card-secondary"><a class="card " href="https://www.networkworld.com/article/1302522/extreme-grows-universal-switch-portfolio-adds-wi-fi-7-access-point.html" aria-label="Go to content"><div class="card__header"> <span class="card__content-type">news</span></div><h4 class="card__title" id="extreme-grows-universal-switch-portfolio-adds-wi-fi-7-access-point">Extreme grows Universal Switch portfolio, adds Wi-Fi 7 access point</h4><div class="card__info"><span>By Michael Cooney</span></div>
		<div class="card__info card__info--light"><span>Jan 31, 2024</span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Networking Devices</span></span><span class="card__tag"><span class="tag">Wi-Fi</span></span></div></a>
		</div><div class="latest-content__card-secondary"><span class="nativo-loading"></span><a id="nativocardgrid-1" class="card nativo" href="https://www.networkworld.com/article/1302097/will-2024-be-wi-fi-7s-breakthrough-year.html" backfill="true" aria-label="Go to content"><div class="card__header"> <span class="card__content-type">feature</span></div><h4 class="card__title" id="will-2024-be-wi-fi-7s-breakthrough-year">Will 2024 be Wi-Fi 7's breakthrough year?</h4><div class="card__info"><span>By John Edwards</span></div>
		<div class="card__info card__info--light"><span>Jan 30, 2024</span><span>8 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Wi-Fi</span></span><span class="card__tag"><span class="tag">Networking</span></span></div></a>
		</div><div class="latest-content__card-secondary"><a class="card " href="https://www.networkworld.com/article/1296653/easy-command-line-linux-tricks.html" aria-label="Go to content"><div class="card__header"> <span class="card__content-type">how-to</span></div><h4 class="card__title" id="easy-command-line-linux-tricks">Easy command line Linux tricks</h4><div class="card__info"><span>By Sandra Henry-Stocker</span></div>
		<div class="card__info card__info--light"><span>Jan 30, 2024</span><span>5 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Linux</span></span></div></a>
		</div><div class="latest-content__card-secondary"><a class="card " href="https://www.networkworld.com/article/1302110/juniper-brings-ai-to-data-center-operations.html" aria-label="Go to content"><div class="card__header"> <span class="card__content-type">analysis</span></div><h4 class="card__title" id="juniper-brings-ai-to-data-center-operations">Juniper brings AI to data center operations</h4><div class="card__info"><span>By Michael Cooney</span></div>
		<div class="card__info card__info--light"><span>Jan 29, 2024</span><span>5 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Data Center</span></span></div></a>
		</div><div class="latest-content__card-secondary"><a class="card " href="https://www.networkworld.com/article/1302075/nvidia-and-equinix-partner-for-ai-data-center-infrastructure.html" aria-label="Go to content"><div class="card__header"> <span class="card__content-type">news</span></div><h4 class="card__title" id="nvidia-and-equinix-partner-for-ai-data-center-infrastructure">Nvidia and Equinix partner for AI data center infrastructure</h4><div class="card__info"><span>By Andy Patrizio</span></div>
		<div class="card__info card__info--light"><span>Jan 29, 2024</span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Data Center</span></span></div></a>
		</div><div class="latest-content__card-secondary"><a class="card " href="https://www.networkworld.com/article/1302076/__trashed-15.html" aria-label="Go to content"><div class="card__header"> <span class="card__content-type">news</span></div><h4 class="card__title" id="us-based-cloud-companies-may-need-to-reveal-client-details">US-based cloud companies may need to reveal client details</h4><div class="card__info"><span>By Gagandeep Kaur</span></div>
		<div class="card__info card__info--light"><span>Jan 29, 2024</span><span>4 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Cloud Computing</span></span></div></a>
		</div></div></div></div></section><div class="advert">
					<div class="container advert__container">
					  <div class="advert__content"><div class="ad page-ad has-ad-prefix ad-article" data-ad-template="article" data-ofp="false"></div></div></div></div>

<section class="popular-topics-selector"> <div class="container"><h2 class="popular-topics-selector__title" id="explore-a-topic">Explore a topic </h2><p class="popular-topics-selector__text"></p><ul class="popular-topics-selector__topics-container"><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/5g/">5G </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/careers/">Careers </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/cloud-computing/">Cloud Computing </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/cpus-and-processors/">CPUs and Processors </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/data-center/">Data Center </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/edge-computing/">Edge Computing </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/enterprise-storage/">Enterprise Storage </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/generative-ai/">Generative AI </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/industry/">Industry </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/internet-of-things/">Internet of Things </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/linux/">Linux </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/networking/">Networking </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/network-management-software/">Network Management Software </a></li><li class="popular-topics-selector__topic">
				<a class="chip chip--topic" target="_self" href="https://www.networkworld.com/network-security/">Network Security </a></li><li class="popular-topics-selector__topic"><button class="button" type="button" data-modal-trigger="popular-topics-selector-modal">View all topics</button></li>
			</ul><div class="modal" data-modal="popular-topics-selector-modal" role="dialog">
								<div class="modal__backdrop" data-modal-backdrop></div>
								<div class="modal__content"><div class="popular-topics-selector__modal-content">
			<header class="popular-topics-selector__modal-header">
				<h1 class="popular-topics-selector__modal-title" id="all-topics">All topics</h1>
				<div class="popular-topics-selector__modal-close-button">
					<button class="button button--quaternary" type="button" data-modal-close="popular-topics-selector-modal">
						<span>Close</span>
						<span class="icon"></span>
					</button>
				</div>
			</header><ul class="popular-topics-selector__modal-list"><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/5g/" class="popular-topics-selector__modal-list-item-link"> 5G </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/careers/" class="popular-topics-selector__modal-list-item-link"> Careers </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/cloud-computing/" class="popular-topics-selector__modal-list-item-link"> Cloud Computing </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/cpus-and-processors/" class="popular-topics-selector__modal-list-item-link"> CPUs and Processors </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/data-center/" class="popular-topics-selector__modal-list-item-link"> Data Center </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/edge-computing/" class="popular-topics-selector__modal-list-item-link"> Edge Computing </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/enterprise-storage/" class="popular-topics-selector__modal-list-item-link"> Enterprise Storage </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/generative-ai/" class="popular-topics-selector__modal-list-item-link"> Generative AI </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/industry/" class="popular-topics-selector__modal-list-item-link"> Industry </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/internet-of-things/" class="popular-topics-selector__modal-list-item-link"> Internet of Things </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/linux/" class="popular-topics-selector__modal-list-item-link"> Linux </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/networking/" class="popular-topics-selector__modal-list-item-link"> Networking </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/network-management-software/" class="popular-topics-selector__modal-list-item-link"> Network Management Software </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/network-security/" class="popular-topics-selector__modal-list-item-link"> Network Security </a></li><li class="popular-topics-selector__modal-list-item">
						<a href="https://www.networkworld.com/virtualization/" class="popular-topics-selector__modal-list-item-link"> Virtualization </a></li></ul></div></div>
						</div>
					</div>
				</section>

<section class="popular-topics"><div class="container"><h2 class="popular-topics__title" id="popular-topics">Popular topics</h2><div class="popular-topics__topic grid"><div class="popular-topics__column popular-topics__column--one col-12@sm col-6@md col-4@lg col-4@xl"><h3 class="popular-topics__topic-title" id="generative-ai">Generative AI </h3></div><div class="popular-topics__column popular-topics__column--two col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1298769/5-data-center-predictions-surging-demand-and-tighter-rules-squeeze-operations.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> feature</span></div><div class="card__image"><div class="insider-image"><div class="image image--aspect-ratio-16-9 image--crop-position-center-center"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?quality=50&amp;strip=all&amp;w=252" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?quality=50&amp;strip=all 2400w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=300%2C200&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=768%2C512&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=1024%2C683&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=1536%2C1024&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=2048%2C1365&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=1240%2C826&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=150%2C100&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=1046%2C697&amp;quality=50&amp;strip=all 1046w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=252%2C168&amp;quality=50&amp;strip=all 252w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=126%2C84&amp;quality=50&amp;strip=all 126w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=720%2C480&amp;quality=50&amp;strip=all 720w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=540%2C360&amp;quality=50&amp;strip=all 540w, https://www.networkworld.com/wp-content/uploads/2024/01/it_technician_works_on_laptop_in_data_center_full_of_servers_with_multiple_people_in_the_background_by_gorodenkoff_shutterstock_661116433_2400x1600-100906073-orig.jpg?resize=375%2C250&amp;quality=50&amp;strip=all 375w" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="5-data-center-predictions-surging-demand-and-tighter-rules-squeeze-operations">5 data center predictions: Surging demand and tighter rules squeeze operations</h4><div class="card__info"><span>By  Maria Korolov</span> </div> <div class="card__info card__info--light"><span>Jan 29, 2024 </span><span>7 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Energy Efficiency</span></span><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Network Management Software</span></span></div></a></div><div class="popular-topics__column popular-topics__column--three col-12 col-6@md col-4@lg col-4@xl"><span class="nativo-loading"></span><a id="nativocardgrid-2" class="card nativo" href="https://www.networkworld.com/article/1298745/meta-to-build-800-million-ai-first-data-center-in-indiana.html" backfill="true" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><h4 class="card__title" id="meta-to-build-800-million-ai-first-data-center-in-indiana">Meta to build $800 million, AI-first data center in Indiana</h4><div class="card__info"><span>By  Jon Gold</span> </div> <div class="card__info card__info--light"><span>Jan 26, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Data Center</span></span></div></a></div><div class="popular-topics__column popular-topics__column--four col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1298168/forward-networks-boosts-digital-twin-platform-with-generative-ai.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><h4 class="card__title" id="forward-networks-boosts-digital-twin-platform-with-generative-ai">Forward Networks boosts digital twin platform with generative AI</h4><div class="card__info"><span>By  Denise Dubie</span> </div> <div class="card__info card__info--light"><span>Jan 25, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Network Security</span></span></div></a></div><div class="popular-topics__view-all-button-container">
			<a class="button button--secondary" target="_blank" href="https://www.networkworld.com/generative-ai/">
			View topic
			</a>
		</div></div><div class="popular-topics__topic grid"><div class="popular-topics__column popular-topics__column--one col-12@sm col-6@md col-4@lg col-4@xl"><h3 class="popular-topics__topic-title" id="networking">Networking </h3></div><div class="popular-topics__column popular-topics__column--two col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1298566/cisco-brings-sse-technology-to-new-kyndryl-services.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><div class="card__image"><div class="insider-image"><div class="image image--aspect-ratio-16-9 image--crop-position-center-center"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?quality=50&amp;strip=all&amp;w=252" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?quality=50&amp;strip=all 4500w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=300%2C200&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=768%2C512&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=1024%2C683&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=1536%2C1024&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=2048%2C1365&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=1240%2C826&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=150%2C100&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=1046%2C697&amp;quality=50&amp;strip=all 1046w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=252%2C168&amp;quality=50&amp;strip=all 252w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=126%2C84&amp;quality=50&amp;strip=all 126w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=720%2C480&amp;quality=50&amp;strip=all 720w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=540%2C360&amp;quality=50&amp;strip=all 540w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1808484295_board_meeting_security-100936365-orig-100943343-orig-1.jpg?resize=375%2C250&amp;quality=50&amp;strip=all 375w" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="cisco-brings-sse-technology-to-new-kyndryl-services">Cisco brings SSE technology to new Kyndryl services</h4><div class="card__info"><span>By  Michael Cooney</span> </div> <div class="card__info card__info--light"><span>Jan 25, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">SASE</span></span><span class="card__tag"><span class="tag">Network Security</span></span><span class="card__tag"><span class="tag">Cloud Computing</span></span></div></a></div><div class="popular-topics__column popular-topics__column--three col-12 col-6@md col-4@lg col-4@xl"><span class="nativo-loading"></span><a id="nativocardgrid-3" class="card nativo" href="https://www.networkworld.com/article/1298153/2024-networking-and-security-predictions.html" backfill="true" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> brandpost</span><span class="card__sponsor-text">Sponsored by HPE Aruba Networking</span></div><h4 class="card__title" id="2024-networking-and-security-predictions">2024 networking and security predictions</h4><div class="card__info"><span>By  David Hughes, SVP, Chief Product and Technology Officer at HPE Aruba Networking</span> </div> <div class="card__info card__info--light"><span>Jan 24, 2024 </span><span>8 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Networking</span></span></div></a></div><div class="popular-topics__column popular-topics__column--four col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1298124/cisco-t-mobile-team-to-offer-managed-5g-service.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><h4 class="card__title" id="cisco-t-mobile-team-to-offer-managed-5g-service">Cisco, T-Mobile team to offer managed 5G service</h4><div class="card__info"><span>By  Michael Cooney</span> </div> <div class="card__info card__info--light"><span>Jan 24, 2024 </span><span>2 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">5G</span></span><span class="card__tag"><span class="tag">IoT Platforms</span></span><span class="card__tag"><span class="tag">Networking</span></span></div></a></div><div class="popular-topics__view-all-button-container">
			<a class="button button--secondary" target="_blank" href="https://www.networkworld.com/networking/">
			View topic
			</a>
		</div></div><div class="popular-topics__topic grid"><div class="popular-topics__column popular-topics__column--one col-12@sm col-6@md col-4@lg col-4@xl"><h3 class="popular-topics__topic-title" id="data-center">Data Center </h3></div><div class="popular-topics__column popular-topics__column--two col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1298610/cisco-looks-to-ease-management-of-software-agents.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><div class="card__image"><div class="insider-image"><div class="image image--aspect-ratio-16-9 image--crop-position-center-center"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?quality=50&amp;strip=all&amp;w=300" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?quality=50&amp;strip=all 2309w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=300%2C168&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=768%2C432&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=1024%2C576&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=1536%2C864&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=2048%2C1152&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=1240%2C697&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=150%2C84&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=854%2C480&amp;quality=50&amp;strip=all 854w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=640%2C360&amp;quality=50&amp;strip=all 640w, https://www.networkworld.com/wp-content/uploads/2024/01/iStock-1465188429.jpg?resize=444%2C250&amp;quality=50&amp;strip=all 444w" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="cisco-looks-to-ease-management-of-software-agents">Cisco looks to ease management of software agents</h4><div class="card__info"><span>By  Michael Cooney</span> </div> <div class="card__info card__info--light"><span>Jan 26, 2024 </span><span>4 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Cloud Computing</span></span><span class="card__tag"><span class="tag">Data Center</span></span></div></a></div><div class="popular-topics__column popular-topics__column--three col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1298113/report-ai-crypto-drive-spike-in-data-center-energy-demands.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><h4 class="card__title" id="report-ai-crypto-drive-spike-in-data-center-energy-demands">Report: AI, crypto drive spike in data-center energy demands</h4><div class="card__info"><span>By  Elizabeth Montalbano</span> </div> <div class="card__info card__info--light"><span>Jan 24, 2024 </span><span>4 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Energy Efficiency</span></span><span class="card__tag"><span class="tag">Data Center</span></span></div></a></div><div class="popular-topics__column popular-topics__column--four col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1296616/ai-5g-and-iot-spur-edge-data-centers.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> feature</span></div><h4 class="card__title" id="ai-5g-and-iot-spur-edge-data-centers">AI, 5G and IoT spur edge data centers</h4><div class="card__info"><span>By  Jeff Vance</span> </div> <div class="card__info card__info--light"><span>Jan 23, 2024 </span><span>9 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">5G</span></span><span class="card__tag"><span class="tag">Generative AI</span></span><span class="card__tag"><span class="tag">Edge Computing</span></span></div></a></div><div class="popular-topics__view-all-button-container">
			<a class="button button--secondary" target="_blank" href="https://www.networkworld.com/data-center/">
			View topic
			</a>
		</div></div><div class="popular-topics__topic grid"><div class="popular-topics__column popular-topics__column--one col-12@sm col-6@md col-4@lg col-4@xl"><h3 class="popular-topics__topic-title" id="network-security">Network Security </h3></div><div class="popular-topics__column popular-topics__column--two col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1296684/cato-networks-extends-sase-platform-with-xdr-epp-capabilities.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><div class="card__image"><div class="insider-image"><div class="image image--aspect-ratio-16-9 image--crop-position-center-center"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?quality=50&amp;strip=all&amp;w=300" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?quality=50&amp;strip=all 3840w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=300%2C168&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=768%2C432&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=1024%2C576&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=1536%2C864&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=2048%2C1152&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=1240%2C697&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=150%2C84&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=854%2C480&amp;quality=50&amp;strip=all 854w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=640%2C360&amp;quality=50&amp;strip=all 640w, https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1341253400-1.jpg?resize=444%2C250&amp;quality=50&amp;strip=all 444w" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="cato-networks-extends-sase-platform-with-xdr-epp-capabilities">Cato Networks extends SASE platform with XDR, EPP capabilities</h4><div class="card__info"><span>By  Denise Dubie</span> </div> <div class="card__info card__info--light"><span>Jan 23, 2024 </span><span>4 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">SASE</span></span><span class="card__tag"><span class="tag">Network Security</span></span></div></a></div><div class="popular-topics__column popular-topics__column--three col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1293353/dell-data-protection-report-adds-genai-to-threat-mix.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><h4 class="card__title" id="dell-data-protection-report-adds-genai-to-threat-mix">Dell data-protection report adds genAI to threat mix</h4><div class="card__info"><span>By  Andy Patrizio</span> </div> <div class="card__info card__info--light"><span>Jan 18, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Backup and Recovery</span></span><span class="card__tag"><span class="tag">Network Security</span></span><span class="card__tag"><span class="tag">Data Center</span></span></div></a></div><div class="popular-topics__column popular-topics__column--four col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1291149/cisco-buy-highlights-container-networking-security.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news analysis</span></div><h4 class="card__title" id="cisco-buy-highlights-container-networking-security">Cisco buy highlights container networking, security</h4><div class="card__info"><span>By  Michael Cooney</span> </div> <div class="card__info card__info--light"><span>Jan 17, 2024 </span><span>5 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">Network Security</span></span><span class="card__tag"><span class="tag">Cloud Computing</span></span><span class="card__tag"><span class="tag">Networking</span></span></div></a></div><div class="popular-topics__view-all-button-container">
			<a class="button button--secondary" target="_blank" href="https://www.networkworld.com/network-security/">
			View topic
			</a>
		</div></div><div class="popular-topics__topic grid"><div class="popular-topics__column popular-topics__column--one col-12@sm col-6@md col-4@lg col-4@xl"><h3 class="popular-topics__topic-title" id="cpus-and-processors">CPUs and Processors </h3></div><div class="popular-topics__column popular-topics__column--two col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1296545/openai-plans-to-set-up-chip-factories-worth-100-billion-report.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><div class="card__image"><div class="insider-image"><div class="image image--aspect-ratio-16-9 image--crop-position-center-center"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?quality=50&amp;strip=all&amp;w=252" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?quality=50&amp;strip=all 1200w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=300%2C200&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=768%2C512&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=1024%2C683&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=150%2C100&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=1046%2C697&amp;quality=50&amp;strip=all 1046w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=252%2C168&amp;quality=50&amp;strip=all 252w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=126%2C84&amp;quality=50&amp;strip=all 126w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=720%2C480&amp;quality=50&amp;strip=all 720w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=540%2C360&amp;quality=50&amp;strip=all 540w, https://www.networkworld.com/wp-content/uploads/2024/01/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-orig.jpg?resize=375%2C250&amp;quality=50&amp;strip=all 375w" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Image" loading="lazy" width="400px"></div></div></div><h4 class="card__title" id="openai-plans-to-set-up-chip-factories-worth-100-billion-report">OpenAI plans to set up chip factories worth $100 billion: Report</h4><div class="card__info"><span>By  Anirban Ghoshal</span> </div> <div class="card__info card__info--light"><span>Jan 22, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">CPUs and Processors</span></span><span class="card__tag"><span class="tag">Technology Industry</span></span></div></a></div><div class="popular-topics__column popular-topics__column--three col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1291109/intels-ai-spinoff-is-about-platform-neutrality.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news analysis</span></div><h4 class="card__title" id="intels-ai-spinoff-is-about-platform-neutrality">Intel&rsquo;s AI spinoff is about platform neutrality</h4><div class="card__info"><span>By  Andy Patrizio</span> </div> <div class="card__info card__info--light"><span>Jan 16, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">CPUs and Processors</span></span><span class="card__tag"><span class="tag">Generative AI</span></span></div></a></div><div class="popular-topics__column popular-topics__column--four col-12 col-6@md col-4@lg col-4@xl"><a class="card " href="https://www.networkworld.com/article/1288967/georgia-tech-researchers-achieve-key-breakthrough-in-graphene-semiconductors.html" aria-label="Go to content"><div class="card__header"><span class="card__content-type"> news</span></div><h4 class="card__title" id="georgia-tech-researchers-achieve-key-breakthrough-in-graphene-semiconductors">Georgia Tech researchers achieve key breakthrough in graphene semiconductors</h4><div class="card__info"><span>By  Jon Gold</span> </div> <div class="card__info card__info--light"><span>Jan 09, 2024 </span><span>3 mins</span></div><div class="card__tags"><span class="card__tag"><span class="tag">CPUs and Processors</span></span></div></a></div><div class="popular-topics__view-all-button-container">
			<a class="button button--secondary" target="_blank" href="https://www.networkworld.com/cpus-and-processors/">
			View topic
			</a>
		</div></div></div></section><div class="advert">
					<div class="container advert__container">
					  <div class="advert__content"><div class="ad page-ad has-ad-prefix ad-article" data-ad-template="article" data-ofp="false"></div></div></div></div>

<section class="suggested-content-upcoming-events" id="upcoming_events"><div class="container">
				<h2 class="suggested-content-upcoming-events__title" id="upcoming-events">Upcoming Events</h2><a class="grid suggested-content-upcoming-events__item" href="https://www.idgevents.com/nLQ4O?RefId=event-listing" aria-label="Go to content"><div class="col-12 col-3@md suggested-content-upcoming-events__date-label"><span class="date-label">15/Feb</span></div><div class="col-12 col-4@md col-5@xl suggested-content-upcoming-events__image"><div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?w=1240" srcset="https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?quality=50&amp;strip=all%201920w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=300%2C168&amp;quality=50&amp;strip=all%20300w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=768%2C432&amp;quality=50&amp;strip=all%20768w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=1024%2C576&amp;quality=50&amp;strip=all%201024w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=1536%2C864&amp;quality=50&amp;strip=all%201536w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=1240%2C697&amp;quality=50&amp;strip=all%201240w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=150%2C84&amp;quality=50&amp;strip=all%20150w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=854%2C480&amp;quality=50&amp;strip=all%20854w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=640%2C360&amp;quality=50&amp;strip=all%20640w,%20https://www.networkworld.com/wp-content/uploads/2023/12/Smartsheet-RT_Sept23-v2-1.png?resize=444%2C250&amp;quality=50&amp;strip=all%20444w" alt="Image" loading="lazy" width="400px"></div></div>
			<div class="col-12 col-5@md col-4@xl suggested-content-upcoming-events__card">
				<div class="card card--xl">
					<div class="card__header"><span class="card__content-type">roundtable dinner</span><span class="card__external-link-icon" data-url="https://www.idgevents.com/nLQ4O?RefId=event-listing"><svg class="icon icon--sm" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <use xlink:href="#icon-arrow-up-right-from-square"></use></svg></span></div><h4 class="card__title" id="cio-in-person-roundtable-empowering-teams-for-high-performance">CIO In-Person Roundtable: Empowering Teams for High Performance</h4><div class="card__info card__info--light"><span>Feb 15, 2024</span><span>18:30-21:30 GMT</span><span>The Greenhouses, London</span></div>
		<div class="card__tags"><span class="card__tag"><span class="tag">Events</span></span></div></div>
			</div>
		</a><a class="grid suggested-content-upcoming-events__item" href="https://www.idgevents.com/eWk9b?rt=D6xu4cPNx0-y6xS43PXNPA&amp;RefId=NWW" aria-label="Go to content"><div class="col-12 col-3@md suggested-content-upcoming-events__date-label"><span class="date-label">21/Mar</span></div><div class="col-12 col-4@md col-5@xl suggested-content-upcoming-events__image"><div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?w=1240" srcset="https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?quality=50&amp;strip=all%201920w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=300%2C168&amp;quality=50&amp;strip=all%20300w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=768%2C432&amp;quality=50&amp;strip=all%20768w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=1024%2C576&amp;quality=50&amp;strip=all%201024w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=1536%2C864&amp;quality=50&amp;strip=all%201536w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=1240%2C697&amp;quality=50&amp;strip=all%201240w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=150%2C84&amp;quality=50&amp;strip=all%20150w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=854%2C480&amp;quality=50&amp;strip=all%20854w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=640%2C360&amp;quality=50&amp;strip=all%20640w,%20https://www.networkworld.com/wp-content/uploads/2024/01/CXEX-Forum-UK-2024-Article-v1-1.png?resize=444%2C250&amp;quality=50&amp;strip=all%20444w" alt="Image" loading="lazy" width="400px"></div></div>
			<div class="col-12 col-5@md col-4@xl suggested-content-upcoming-events__card">
				<div class="card card--xl">
					<div class="card__header"><span class="card__content-type">in-person event</span><span class="card__external-link-icon" data-url="https://www.idgevents.com/eWk9b?rt=D6xu4cPNx0-y6xS43PXNPA&amp;RefId=NWW"><svg class="icon icon--sm" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <use xlink:href="#icon-arrow-up-right-from-square"></use></svg></span></div><h4 class="card__title" id="cio-customer-employee-experience-forum">CIO Customer &amp; Employee Experience Forum&#8203;</h4><div class="card__info card__info--light"><span>Mar 21, 2024</span><span>9:30 am &ndash; 18:30</span><span>Conrad London St. James</span></div>
		<div class="card__tags"><span class="card__tag"><span class="tag">Events</span></span></div></div>
			</div>
		</a><a class="grid suggested-content-upcoming-events__item" href="https://www.idgevents.com/EO1Lv?RefId=cio" aria-label="Go to content"><div class="col-12 col-3@md suggested-content-upcoming-events__date-label"><span class="date-label">16/May</span></div><div class="col-12 col-4@md col-5@xl suggested-content-upcoming-events__image"><div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?quality=50&amp;strip=all&amp;w=1240" srcset="https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?quality=50&amp;strip=all%201920w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=300%2C168&amp;quality=50&amp;strip=all%20300w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=768%2C432&amp;quality=50&amp;strip=all%20768w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=1024%2C576&amp;quality=50&amp;strip=all%201024w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=1536%2C864&amp;quality=50&amp;strip=all%201536w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=1240%2C697&amp;quality=50&amp;strip=all%201240w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=150%2C84&amp;quality=50&amp;strip=all%20150w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=854%2C480&amp;quality=50&amp;strip=all%20854w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=640%2C360&amp;quality=50&amp;strip=all%20640w,%20https://www.networkworld.com/wp-content/uploads/2024/02/MicrosoftTeams-image-51-1.jpg?resize=444%2C250&amp;quality=50&amp;strip=all%20444w" alt="Image" loading="lazy" width="400px"></div></div>
			<div class="col-12 col-5@md col-4@xl suggested-content-upcoming-events__card">
				<div class="card card--xl">
					<div class="card__header"><span class="card__content-type">in-person event</span><span class="card__external-link-icon" data-url="https://www.idgevents.com/EO1Lv?RefId=cio"><svg class="icon icon--sm" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <use xlink:href="#icon-arrow-up-right-from-square"></use></svg></span></div><h4 class="card__title" id="cio-digital-enterprise-forum">CIO Digital Enterprise Forum</h4><div class="card__info card__info--light"><span>May 16, 2024</span><span>9:30 am &ndash; 18:30</span><span>Prospero House, London</span></div>
		<div class="card__tags"><span class="card__tag"><span class="tag">Events</span></span></div></div>
			</div>
		</a></div><div class="suggested-content-upcoming-events__button-container container">
						<a class="button" href="https://www.networkworld.com/events/"> View all events</a>
					</div>
				</section><section class="content-spotlight-article">
			<div class="container"><h2 class="content-spotlight-article__title" id="hear-from-the-experts">Hear from the Experts</h2><div class="grid content-spotlight-article__content">
			<div class="col-12 col-6@md content-spotlight-article__main"><div class="content-spotlight-article__main-top">
			<a class="card card--xxl" href="https://www.networkworld.com/article/957360/what-it-needs-to-know-about-energy-efficiency-directives-for-data-centers.html" rel="noreferrer" aria-label="Go to content"><div class="card__header"><span class="card__content-type">feature</span></div><h4 class="card__title" id="what-it-needs-to-know-about-energy-efficiency-directives-for-data-centers">What IT needs to know about energy-efficiency directives for data centers</h4><p class="card__description">Global regulations aimed at sustainability are increasing pressure on IT teams to create more efficient data centers.</p><div class="card__info"><span>By Bob Violino</span></div><div class="card__info card__info--light"><span>Oct 02, 2023</span><span>10 mins</span></div>
		<div class="card__tags"><span class="card__tag"><span class="tag">Enterprise Storage</span></span><span class="card__tag"><span class="tag">Green IT</span></span><span class="card__tag"><span class="tag">Servers</span></span></div></a><div class="content-spotlight-article__cta"><a class="button button--primary" href="https://www.networkworld.com/article/957360/what-it-needs-to-know-about-energy-efficiency-directives-for-data-centers.html"> Read the Article </a></div></div></div>
			<div class="col-12 col-6@md content-spotlight-article__image">
				<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?quality=50&amp;strip=all&amp;w=1240" srcset="https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?quality=50&amp;strip=all 5440w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=300%2C168&amp;quality=50&amp;strip=all 300w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=768%2C432&amp;quality=50&amp;strip=all 768w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=1024%2C576&amp;quality=50&amp;strip=all 1024w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=1536%2C864&amp;quality=50&amp;strip=all 1536w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=2048%2C1152&amp;quality=50&amp;strip=all 2048w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=1240%2C697&amp;quality=50&amp;strip=all 1240w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=150%2C84&amp;quality=50&amp;strip=all 150w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=854%2C480&amp;quality=50&amp;strip=all 854w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=640%2C360&amp;quality=50&amp;strip=all 640w, https://www.networkworld.com/wp-content/uploads/2023/11/shutterstock_1928699927-100938526-orig.jpg?resize=444%2C250&amp;quality=50&amp;strip=all 444w" sizes="(min-resolution: 3dppx) and (max-width: 600px) 600px,
            (min-resolution: 3dppx) and (max-width: 1200px) 900px,

            (min-resolution: 2dppx) and (max-width: 600px) 600px,
            (min-resolution: 2dppx) and (max-width: 1200px) 900px,

            (min-resolution: 1dppx) and (max-width: 600px) 600px,
            (min-resolution: 1dppx) and (max-width: 2000px) 1024px" alt="Climate change, carbon footprint, carbon emissions, green tech" loading="lazy" width="400px"></div>
			</div>
		</div></div>
		</section><div class="advert">
					<div class="container advert__container">
					  <div class="advert__content"><div class="ad page-ad has-ad-prefix ad-article" data-ad-template="article" data-ofp="false"></div></div></div></div><div class="advert">
					<div class="container advert__container">
					  <div class="advert__content"><div class="ad page-ad has-ad-prefix ad-article" data-ad-template="article" data-ofp="false"></div></div></div></div><section class="suggested-content-various"><div class="container"><div class="grid suggested-content-various__content"><div class="col-12 col-3@lg">
			<h4 class="suggested-content-various__title" id="show-me-more">Show me more</h4><div class="suggested-content-various__filters"><span class="suggested-content-various__filter"><button class="chip chip--filter chip--active" type="button" data-filter-key="latest">Popular</button></span><span class="suggested-content-various__filter"><button class="chip chip--filter" type="button" data-filter-key="article">Articles</button></span><span class="suggested-content-various__filter"><button class="chip chip--filter" type="button" data-filter-key="podcast">Podcasts</button></span><span class="suggested-content-various__filter"><button class="chip chip--filter" type="button" data-filter-key="video">Videos</button></span></div>
		</div><div class="col-12 col-9@lg suggested-content-various__items-wrap"><div class="grid grid--cols-9@lg suggested-content-various__items"><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				latest,article"><a class="suggested-content-various__link" href="https://www.networkworld.com/article/1302444/move-beyond-tech-silos-with-secure-outcome-driven-and-converged-networking-solutions.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">brandpost</span> <span class="card__sponsor-text">Sponsored by Cisco</span></div> <h4 class="card__title" id="move-beyond-tech-silos-with-secure-outcome-driven-and-converged-networking-solutions">Move beyond tech silos with secure, outcome-driven, and converged networking solutions</h4> <div class="card__info"><span>By Ian Chard, Solutions Marketing Manager, Cisco</span></div><div class="card__info card__info--light">
					<span>Jan 31, 2024</span><span>6 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Internet Security</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/iStock-808157966_3588ee-4.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				article"><a class="suggested-content-various__link" href="https://www.networkworld.com/article/1298355/sk-hynixs-q4-profit-signals-an-ai-backed-rise-in-advanced-dram-demand.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">news</span> </div> <h4 class="card__title" id="sk-hynixs-q4-profit-signals-an-ai-backed-rise-in-advanced-dram-demand">SK Hynix&rsquo;s Q4 profit signals an AI-backed rise in advanced DRAM demand </h4> <div class="card__info"><span>By Prasanth Aby Thomas</span></div><div class="card__info card__info--light">
					<span>Jan 25, 2024</span><span>4 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Enterprise Storage</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/id-2960930-ddr4_module_2-0-100602653-orig-1.jpg?quality=50&amp;strip=all&amp;w=375" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				article"><a class="suggested-content-various__link" href="https://www.networkworld.com/article/1298069/new-relic-brings-business-context-to-its-observability-platform.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">news</span> </div> <h4 class="card__title" id="new-relic-brings-business-context-to-its-observability-platform">New Relic brings business context to its observability platform </h4> <div class="card__info"><span>By Denise Dubie</span></div><div class="card__info card__info--light">
					<span>Jan 24, 2024</span><span>3 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Network Management Software</span></span><span class="card__tag"><span class="tag">Network Monitoring</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2024/01/shutterstock_1957556851.jpg?quality=50&amp;strip=all&amp;w=375" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				latest,podcast"><a class="suggested-content-various__link" href="https://www.networkworld.com/podcast/663051/episode-1-understanding-cisco-s-converged-sdn-transport.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">podcast</span> </div> <h4 class="card__title" id="episode-1-understanding-ciscos-converged-sdn-transport">Episode 1: Understanding Cisco&rsquo;s Converged SDN Transport</h4> <div class="card__info"><span></span></div><div class="card__info card__info--light">
					<span>Sep 24, 2021</span><span>20 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Cisco Systems</span></span><span class="card__tag"><span class="tag">Internet</span></span><span class="card__tag"><span class="tag">Networking</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/iStock-1132912672-1-1.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				podcast"><a class="suggested-content-various__link" href="https://www.networkworld.com/podcast/663053/pluggable-optics-and-the-internet-for-the-future.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">podcast</span> </div> <h4 class="card__title" id="episode-2-pluggable-optics-and-the-internet-for-the-future">Episode 2: Pluggable Optics and the Internet for the Future</h4> <div class="card__info"><span></span></div><div class="card__info card__info--light">
					<span>Sep 23, 2021</span><span>17 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Optical Drives</span></span><span class="card__tag"><span class="tag">Cisco Systems</span></span><span class="card__tag"><span class="tag">Internet</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/episode-2-100908797-orig.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				podcast"><a class="suggested-content-various__link" href="https://www.networkworld.com/podcast/663052/looking-forward-5g-digital-transformation-and-the-network-of-the-future.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">podcast</span> </div> <h4 class="card__title" id="episode-3-looking-forward-5g-digital-transformation-and-the-network-of-the-future">Episode 3: Looking Forward: 5G, Digital Transformation, and the Network of the Future</h4> <div class="card__info"><span></span></div><div class="card__info card__info--light">
					<span>Sep 22, 2021</span><span>14 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">5G</span></span><span class="card__tag"><span class="tag">Cisco Systems</span></span><span class="card__tag"><span class="tag">Internet</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/episode-3-100908795-orig.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				latest,video"><a class="suggested-content-various__link" href="https://www.networkworld.com/video/663056/how-to-calculate-factorials-in-linux.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">video</span> </div> <h4 class="card__title" id="how-to-calculate-factorials-in-linux">How to calculate factorials in Linux</h4> <div class="card__info"><span></span></div><div class="card__info card__info--light">
					<span>Nov 02, 2023</span><span>2 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Linux</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/tt-how-to-nopic-100947838-orig.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				video"><a class="suggested-content-various__link" href="https://www.networkworld.com/video/663057/how-to-use-the-nohup-command.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">video</span> </div> <h4 class="card__title" id="how-to-use-the-nohup-command">How to use the nohup command</h4> <div class="card__info"><span></span></div><div class="card__info card__info--light">
					<span>Oct 31, 2023</span><span>2 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Linux</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/tt-how-to-nopic-100947711-orig.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div><div class="col-4@md col-3@lg suggested-content-various__item suggested-content-various__item--active" data-filter-value="
				video"><a class="suggested-content-various__link" href="https://www.networkworld.com/video/663058/how-to-use-date-command-options.html" aria-label="Go to content"><div class="card card--xxs">
					<div class="card__header">
						<span class="card__content-type">video</span> </div> <h4 class="card__title" id="how-to-use-date-command-options">How to use date command options</h4> <div class="card__info"><span></span></div><div class="card__info card__info--light">
					<span>Oct 26, 2023</span><span>2 mins</span></div>
				 <div class="card__tags"><span class="card__tag"><span class="tag">Linux</span></span></div></div>
					<div class="image"><img decoding="async" src="https://www.networkworld.com/wp-content/uploads/2023/11/tt-how-to-nopic-100947710-orig.jpg?quality=50&amp;strip=all&amp;w=444" alt="Image" loading="lazy" width="400px"></div>
				</a>
			</div></div></div></div></div></section>	</div><!-- .entry-content -->
</article><!-- #post-100002467 -->
	</main><!-- #main -->
	<footer class="footer">
		<div class="container footer__container">
			<div class="grid footer__content">
				<div class="col-12 col-9@lg grid grid--cols-9@lg footer__main">
					<div class="col-12 col-6@md col-3@lg footer__menu">
						<details class="accordion" data-accordion-enabled="mobile" data-accordion-expanded="desktop">
																	<summary data-accordion-summary class="accordion__summary">
											<div class="accordion__title">
												<div class="footer__menu-title">About</div>
											</div>
											<div class="accordion__icon">
												<svg
													class="icon"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<use xlink:href="#icon-circle-chevron-down"></use>
												</svg>
											</div>
										</summary>
																	<div class="accordion__content" data-accordion-content>
								<nav data-content aria-label="About navigation menu">
									<ul class="footer__menu-items">
																							<li class="footer__menu-item">
														<a href="https://www.networkworld.com/about-us/" class="footer__menu-link">About Us</a>
													</li>
																										<li class="footer__menu-item">
														<a href="https://foundryco.com/our-brands/networkworld/" class="footer__menu-link">Advertise</a>
													</li>
																										<li class="footer__menu-item">
														<a href="https://www.networkworld.com/contact-us/" class="footer__menu-link">Contact Us</a>
													</li>
																										<li class="footer__menu-item">
														<a href="https://foundryco.com/work-here/" class="footer__menu-link">Foundry Careers</a>
													</li>
																										<li class="footer__menu-item">
														<a href="/contact-us/#republication-permissions" class="footer__menu-link">Reprints</a>
													</li>
																										<li class="footer__menu-item">
														<a href="/newsletters/signup/" class="footer__menu-link">Newsletters</a>
													</li>
																										<li class="footer__menu-item">
														<a href="/brandposts/" class="footer__menu-link">Brandposts</a>
													</li>
																						</ul>
								</nav>
							</div>
						</details>
					</div>
					<div class="col-12 col-6@md col-3@lg footer__menu">
						<details class="accordion" data-accordion-enabled="mobile" data-accordion-expanded="desktop">
																	<summary data-accordion-summary class="accordion__summary">
											<div class="accordion__title">
												<div class="footer__menu-title">Policies</div>
											</div>
											<div class="accordion__icon">
												<svg
													class="icon"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<use xlink:href="#icon-circle-chevron-down"></use>
												</svg>
											</div>
										</summary>
																	<div class="accordion__content" data-accordion-content>
								<nav data-content aria-label="Policies navigation menu">
									<ul class="footer__menu-items">
										
													<li class="footer__menu-item">
														<a href="https://foundryco.com/terms-of-service-agreement/" class="footer__menu-link">Terms of Service</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://www.networkworld.com/privacy-policy/" class="footer__menu-link">Privacy Policy</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://www.networkworld.com/cookie-policy/" class="footer__menu-link">Cookie Policy</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://foundryco.com/copyright-notice/" class="footer__menu-link">Copyright Notice</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://www.networkworld.com/member-preferences/" class="footer__menu-link">Member Preferences</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://www.networkworld.com/about-adchoices/" class="footer__menu-link">About AdChoices</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://www.networkworld.com/e-commerce-affiliate-relationships/" class="footer__menu-link">E-commerce Affiliate Relationships</a>
													</li>
													
													<li class="footer__menu-item">
														<a href="https://www.networkworld.com/your-california-privacy-rights/" class="footer__menu-link">Your California Privacy Rights</a>
													</li>
																							<li class="footer__menu-item">
											<a class="ccpa-btn eea-consent-ui footer__menu-link">Privacy Settings</a>
										</li>
									</ul>
								</nav>
							</div>
						</details>
					</div>
					<div class="col-12 col-6@md col-3@lg footer__menu">
						<details class="accordion" data-accordion-enabled="mobile" data-accordion-expanded="desktop">
							<summary data-accordion-summary class="accordion__summary">
								<div class="accordion__title">
									<div class="footer__menu-title">Our Network</div>
								</div>
								<div class="accordion__icon">
									<svg
										class="icon"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<use xlink:href="#icon-circle-chevron-down"></use>
									</svg>
								</div>
							</summary>
															<div class="accordion__content" data-accordion-content>
									<nav data-content aria-label="Our Network navigation menu">
										<ul class="footer__menu-items">
																								<li class="footer__menu-item">
														<a href="https://www.cio.com" target="_blank" class="footer__menu-link">CIO</a>
													</li>
																										<li class="footer__menu-item">
														<a href="https://www.computerworld.com" target="_blank" class="footer__menu-link">Computerworld</a>
													</li>
																										<li class="footer__menu-item">
														<a href="https://www.csoonline.com" target="_blank" class="footer__menu-link">CSO Online</a>
													</li>
																										<li class="footer__menu-item">
														<a href="https://www.infoworld.com" target="_blank" class="footer__menu-link">InfoWorld</a>
													</li>
																							</ul>
									</nav>
								</div>
													</details>
					</div>
					<div class="col-12 col-9@lg footer__logo-container">
												<a href="https://foundryco.com/" target="_blank" rel="noreferrer" aria-label="Go to Foundry website">
							<svg id="a" width="156" height="57" version="1.1" viewBox="0 0 156 57" xmlns="http://www.w3.org/2000/svg"><defs><style>.b{fill:#fff;}</style></defs><g transform="matrix(.67576 0 0 .67576 .37936 .26588)"><path class="b" d="m35.79 77.23c0-1.83 1.94-2.45 3.97-2.45h1.14v-0.57c0-1.26-0.48-1.79-1.7-1.79-1.09 0-1.7 0.46-1.82 1.42h-1.26c0.17-1.8 1.6-2.47 3.13-2.47s2.89 0.62 2.89 2.83v5.22h-1.26v-1c-0.59 0.74-1.3 1.13-2.47 1.13-1.47 0-2.63-0.71-2.63-2.33zm5.1-0.58v-0.98h-1.09c-1.59 0-2.75 0.39-2.75 1.56 0 0.82 0.39 1.33 1.5 1.33 1.33 0 2.35-0.68 2.35-1.91z"/><path class="b" d="m44.65 71.5h1.26v1.26c0.36-0.74 1.24-1.39 2.54-1.39 1.63 0 2.79 0.89 2.79 3.19v4.86h-1.26v-4.95c0-1.39-0.59-2.01-1.86-2.01-1.17 0-2.21 0.74-2.21 2.17v4.8h-1.26v-7.92z"/><path class="b" d="m58.32 68.6h1.32v10.82h-1.32z"/><path class="b" d="m62.47 68.6h2.86c3.72 0 5.48 2.3 5.48 5.31v0.14c0 3-1.73 5.37-5.51 5.37h-2.83zm2.8 9.75c2.79 0 4.18-1.66 4.18-4.31v-0.12c0-2.5-1.21-4.25-4.19-4.25h-1.47v8.69h1.48z"/><path class="b" d="m72.5 74.08v-0.12c0-3.16 2.13-5.53 5.24-5.53 2.15 0 4.07 1 4.4 3.44h-1.32c-0.3-1.72-1.48-2.39-3.06-2.39-2.48 0-3.91 1.82-3.91 4.46v0.12c0 2.68 1.33 4.44 3.88 4.44 2.35 0 3.36-1.53 3.41-3.45h-3.16v-1.09h4.45v0.8c0 3.13-1.92 4.8-4.69 4.8-3.33 0-5.24-2.32-5.24-5.48z"/><path class="b" d="m83.75 80.19c0.65-0.09 0.94-0.35 0.94-0.82-0.58 0-0.97-0.32-0.97-0.91 0-0.51 0.44-0.91 0.94-0.91 0.58 0 1 0.41 1 1.11v0.29c0 1.33-0.85 1.91-1.91 1.97z"/><path class="b" d="m91.33 68.6h1.32v10.82h-1.32z"/><path class="b" d="m95.39 71.5h1.26v1.26c0.36-0.74 1.24-1.39 2.54-1.39 1.63 0 2.79 0.89 2.79 3.19v4.86h-1.26v-4.95c0-1.39-0.59-2.01-1.86-2.01-1.17 0-2.21 0.74-2.21 2.17v4.8h-1.26v-7.92z"/><path class="b" d="m103.88 75.55v-0.12c0-2.42 1.73-4.06 3.84-4.06 1.65 0 3.19 0.76 3.44 2.77h-1.24c-0.2-1.26-1.1-1.73-2.19-1.73-1.44 0-2.54 1.15-2.54 3.01v0.12c0 1.94 1.06 2.97 2.59 2.97 1.12 0 2.13-0.65 2.27-1.94h1.17c-0.17 1.71-1.54 2.98-3.45 2.98-2.21 0-3.88-1.56-3.88-4.01z"/><path class="b" d="m112.87 78.53c0-0.54 0.44-0.97 0.97-0.97s0.97 0.42 0.97 0.97-0.44 0.97-0.97 0.97-0.97-0.42-0.97-0.97z"/><path class="b" d="m119.75 75.55v-0.12c0-2.42 1.73-4.06 3.84-4.06 1.65 0 3.19 0.76 3.44 2.77h-1.24c-0.2-1.26-1.1-1.73-2.19-1.73-1.44 0-2.54 1.15-2.54 3.01v0.12c0 1.94 1.06 2.97 2.59 2.97 1.12 0 2.13-0.65 2.27-1.94h1.17c-0.17 1.71-1.54 2.98-3.45 2.98-2.21 0-3.88-1.56-3.88-4.01z"/><path class="b" d="m128.41 75.53v-0.12c0-2.38 1.65-4.04 3.89-4.04s3.89 1.65 3.89 4.03v0.12c0 2.39-1.65 4.04-3.91 4.04s-3.88-1.71-3.88-4.03zm6.48 0v-0.11c0-1.83-1.01-3.01-2.59-3.01s-2.59 1.18-2.59 3v0.12c0 1.8 0.98 2.98 2.59 2.98s2.59-1.2 2.59-2.98z"/><path class="b" d="m138.17 71.5h1.26v1.21c0.36-0.74 1.23-1.35 2.36-1.35 1.01 0 1.91 0.42 2.32 1.48 0.54-1.03 1.73-1.48 2.71-1.48 1.42 0 2.66 0.85 2.66 3.15v4.9h-1.26v-5c0-1.39-0.59-1.97-1.68-1.97-1.03 0-2.09 0.7-2.09 2.12v4.84h-1.26v-5c0-1.39-0.59-1.97-1.68-1.97-1.03 0-2.09 0.7-2.09 2.12v4.84h-1.26v-7.92z"/><path class="b" d="m151.98 71.5h1.26v1.33c0.45-0.77 1.53-1.47 2.68-1.47 2.07 0 3.6 1.51 3.6 3.98v0.12c0 2.42-1.42 4.09-3.6 4.09-1.3 0-2.23-0.65-2.68-1.44v4.06h-1.26zm6.24 4.03v-0.12c0-2-1.1-3-2.44-3-1.47 0-2.59 0.97-2.59 3v0.12c0 2.03 1.06 2.98 2.6 2.98s2.42-1.06 2.42-2.98z"/><path class="b" d="m160.85 77.23c0-1.83 1.94-2.45 3.97-2.45h1.14v-0.57c0-1.26-0.48-1.79-1.7-1.79-1.09 0-1.7 0.46-1.82 1.42h-1.26c0.17-1.8 1.6-2.47 3.13-2.47s2.89 0.62 2.89 2.83v5.22h-1.26v-1c-0.59 0.74-1.3 1.13-2.47 1.13-1.47 0-2.63-0.71-2.63-2.33zm5.1-0.58v-0.98h-1.09c-1.59 0-2.75 0.39-2.75 1.56 0 0.82 0.39 1.33 1.5 1.33 1.33 0 2.35-0.68 2.35-1.91z"/><path class="b" d="m169.71 71.5h1.26v1.26c0.36-0.74 1.24-1.39 2.54-1.39 1.63 0 2.79 0.89 2.79 3.19v4.86h-1.26v-4.95c0-1.39-0.59-2.01-1.86-2.01-1.17 0-2.21 0.74-2.21 2.17v4.8h-1.26v-7.92z"/><path class="b" d="m180.77 78.6-3.1-7.1h1.35l2.42 5.68 2.19-5.68h1.29l-4.37 10.67h-1.27l1.5-3.57z"/><path class="b" d="m113.87 0.82c4.27 0 6.75 2.78 6.75 6.75s-2.47 6.75-6.8 6.75-6.75-2.83-6.75-6.75 2.47-6.75 6.8-6.75"/><path class="b" d="m95.74 39.61c0 2.78-0.26 5.2-1.13 7.21-2.32 5.3-7.16 8.09-13.75 8.09s-11.69-2.78-14.01-8.09c-0.88-2.01-1.13-4.43-1.13-7.21v-21.48h9.27v20.96c0 1.65 0.1 2.99 0.57 4.07 0.98 2.27 3.09 3.09 5.31 3.09 1.96 0 4.07-0.82 5.05-3.09 0.46-1.08 0.57-2.42 0.57-4.07v-20.96h9.27v21.48z"/><path class="b" d="m129.16 32.6v21.58h-9.27v-20.91c0-1.65-0.1-2.99-0.57-4.07-0.98-2.27-3.09-3.3-5.46-3.3s-4.48 1.03-5.46 3.3c-0.46 1.08-0.57 2.42-0.57 4.07v20.91h-9.27v-21.58c0-2.78 0.26-5.2 1.13-7.21 2.32-5.3 7.16-8.14 14.16-8.14s11.85 2.83 14.16 8.14c0.88 2.01 1.13 4.43 1.13 7.21"/><polygon class="b" points="193.6 18.13 203.79 18.13 211.37 32.19 218.99 18.13 228.83 18.13 215.9 41.51 215.9 54.18 206.42 54.18 206.42 41.51"/><polygon class="b" points="10.44 33.63 10.44 26.53 26.98 26.53 26.98 18.13 1.17 18.13 1.17 54.18 10.44 54.18 10.44 41.98 25.85 41.98 25.85 33.63"/><path class="b" d="m113.87 0.82c4.27 0 6.75 2.78 6.75 6.75s-2.47 6.75-6.8 6.75-6.75-2.83-6.75-6.75 2.47-6.75 6.8-6.75"/><path class="b" d="m95.74 39.61c0 2.78-0.26 5.2-1.13 7.21-2.32 5.3-7.16 8.09-13.75 8.09s-11.69-2.78-14.01-8.09c-0.88-2.01-1.13-4.43-1.13-7.21v-21.48h9.27v20.96c0 1.65 0.1 2.99 0.57 4.07 0.98 2.27 3.09 3.09 5.31 3.09 1.96 0 4.07-0.82 5.05-3.09 0.46-1.08 0.57-2.42 0.57-4.07v-20.96h9.27v21.48z"/><path class="b" d="m129.16 32.6v21.58h-9.27v-20.91c0-1.65-0.1-2.99-0.57-4.07-0.98-2.27-3.09-3.3-5.46-3.3s-4.48 1.03-5.46 3.3c-0.46 1.08-0.57 2.42-0.57 4.07v20.91h-9.27v-21.58c0-2.78 0.26-5.2 1.13-7.21 2.32-5.3 7.16-8.14 14.16-8.14s11.85 2.83 14.16 8.14c0.88 2.01 1.13 4.43 1.13 7.21"/><path class="b" d="m181.65 42.8h-5.82v11.38h-9.27v-36.05h17.2c6.9 0 12.05 4.58 12.05 12.26 0 4.74-1.96 8.34-5.36 10.51l5.56 13.29h-9.89l-4.48-11.38zm-5.82-16.69v8.6h5.82c3.45 0 4.94-1.65 4.94-4.33 0-2.52-1.49-4.28-4.94-4.28h-5.82zm5.82 16.69h-5.82v11.38h-9.27v-36.05h17.2c6.9 0 12.05 4.58 12.05 12.26 0 4.74-1.96 8.34-5.36 10.51l5.56 13.29h-9.89l-4.48-11.38zm-5.82-16.69v8.6h5.82c3.45 0 4.94-1.65 4.94-4.33 0-2.52-1.49-4.28-4.94-4.28h-5.82z"/><path class="b" d="m132.31 54.18v-36.05h13.34c11.69 0 18.54 7.11 18.54 18.03s-6.13 18.03-17.98 18.03h-13.91zm9.27-8.14h3.86c6.03 0 9.27-3.3 9.27-9.89s-3.25-9.89-9.27-9.89h-3.86zm-9.27 8.14v-36.05h13.34c11.69 0 18.54 7.11 18.54 18.03s-6.13 18.03-17.98 18.03h-13.91zm9.27-8.14h3.86c6.03 0 9.27-3.3 9.27-9.89s-3.25-9.89-9.27-9.89h-3.86z"/><path class="b" d="m45.93 17.41c10.87 0 17.31 7.98 17.31 18.75s-6.7 18.75-17.31 18.75-17.36-7.93-17.36-18.75 6.75-18.75 17.36-18.75m-0.05 29.05c4.89 0 7.98-4.07 7.98-10.04 0-6.59-3.09-10.56-7.73-10.56-5.05 0-8.14 3.97-8.14 10.04 0 6.49 3.09 10.56 7.88 10.56m0.05-29.05c10.87 0 17.31 7.98 17.31 18.75s-6.7 18.75-17.31 18.75-17.36-7.93-17.36-18.75 6.75-18.75 17.36-18.75m-0.05 29.05c4.89 0 7.98-4.07 7.98-10.04 0-6.59-3.09-10.56-7.73-10.56-5.05 0-8.14 3.97-8.14 10.04 0 6.49 3.09 10.56 7.88 10.56"/><polygon class="b" points="10.44 33.63 10.44 26.53 26.98 26.53 26.98 18.13 1.17 18.13 1.17 54.18 10.44 54.18 10.44 41.98 25.85 41.98 25.85 33.63"/></g></svg>
						</a>
					</div>
				</div>
				<div class="col-12 col-3@lg footer__social">
					<ul class="footer__social-items">
													<li class="footer__social-item">
								<a class="footer__social-link" href="https://www.linkedin.com/company/network-world" target="_blank" rel="noreferrer" aria-label="LinkedIn">
									<span class="footer__social-link-text">LinkedIn</span>
									<span class="footer__social-link-icon">
										<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<use xlink:href="#icon-linked-in"></use>
										</svg>
									</span>
								</a>
							</li>
																			<li class="footer__social-item">
								<a class="footer__social-link" href="https://twitter.com/networkworld" target="_blank" rel="noreferrer" aria-label="Twitter">
									<span class="footer__social-link-text">Twitter</span>
									<span class="footer__social-link-icon">
										<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<use xlink:href="#icon-twitter"></use>
										</svg>
									</span>
								</a>
							</li>
																			<li class="footer__social-item">
								<a class="footer__social-link" href="https://www.facebook.com/NetworkWorld" target="_blank" rel="noreferrer" aria-label="Facebook">
									<span class="footer__social-link-text">Facebook</span>
									<span class="footer__social-link-icon">
										<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<use xlink:href="#icon-facebook"></use>
										</svg>
									</span>
								</a>
							</li>
																	</ul>
				</div>
			</div>
			<div class="footer__copyright">
								<div class="entry-copyright">
					<a href="https://foundryco.com/terms-of-service-agreement/">Copyright © IDG Communications, Inc.</a>				</div>
							</div>
		</div>
	</footer>
</div><!-- #page-->

		<!-- Start Subscriber Embed Code -->
		<script type="text/javascript">
			var subscribersSiteId = "84759cfb-f9aa-4fcf-bbe0-a758ebb06e08";
			var subscribersServiceWorkerPath = '/?firebase-messaging-sw';
		</script>
				<script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
		<!-- End Subscriber Embed Code -->
				<!-- Google Tag Manager (noscript) -->
		<noscript>
			<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JGZ3LH" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
		<!-- End Google Tag Manager (noscript) -->
				<div id="amzn-assoc-ad-10622f81-ee09-465f-830a-63c3cbbab39c"></div>
		<script async src="https://z-na.associates-amazon.com/onetag/v2?MarketPlace=US&instanceId=10622f81-ee09-465f-830a-63c3cbbab39c"></script>
		<link rel='stylesheet' id='typekit-styles-css' href='https://use.typekit.net/uow1hrg.css?ver=1.0.0' media='all' />
<link rel='stylesheet' id='robotofont-css' href='https://www.networkworld.com/wp-content/themes/nww-b2b-child-theme/src/static/fonts/roboto.css?ver=1.0.0' media='1' />
<script id="google-recaptcha-js-extra">
var recaptcha_site_key = "6Lcpg5woAAAAAC6mlZsgRDBDLrpkwIBUEUTjCanh";
</script>
<script src="https://www.google.com/recaptcha/api.js?render=6Lcpg5woAAAAAC6mlZsgRDBDLrpkwIBUEUTjCanh&amp;ver=1.0" id="google-recaptcha-js"></script>
<script id="child_ajaxload_posts-js-extra">
var ajaxload_params = {"ajaxurl":"https:\/\/www.networkworld.com\/wp-admin\/admin-ajax.php","nonce":"57582e9503"};
</script>
<script id="frontend-scripts-js-extra">
var siteData = {"site":"networkworld.com","connectedhub":"b2b"};
var googleSearch = {"search_engine_id":"011881588825642368632:xid-ycrg4pg","search_title":"Search"};
</script>
<script id="ajaxload_posts-js-extra">
var ajaxload_params = {"ajaxurl":"https:\/\/www.networkworld.com\/wp-admin\/admin-ajax.php","nonce":"f34b2d6545"};
</script>
<script id="ajaxload_events-js-extra">
var ajaxload_event_params = {"ajaxurl":"https:\/\/www.networkworld.com\/wp-admin\/admin-ajax.php","nonce":"cc86e7624c"};
</script>
<script id="idg-vary-cache-script-js-extra">
var ajaxload_params = {"ajaxurl":"https:\/\/www.networkworld.com\/wp-admin\/admin-ajax.php","nonce":"f34b2d6545","insider_archive":"https:\/\/www.networkworld.com\/insider\/","base_url":"https:\/\/register-qa.idgcommunications.net","require_redirect":""};
</script>
<script type="text/javascript" src="https://www.networkworld.com/_static/??-eJylkN0OgjAMRl/IOjARrozP0v3IhmMsawF5ewcXRBOJiV41+ZJz+rViiqD6wCawUN7lAd0A0Q+NCyScboCtSxoiJp6FdsSCVHKRSdzSymmQCYOOPTFI36v7saWDeNGyNZ0hEaYJ5EmCss5rWMN3H7b48D1qaJBN3piFtONaei0uiWQ+qeQQtDc/wluPfxpsEjNm6lfLiGkGhcru3fL1qWuU4Wt3KeuiqsqiPNftE9iMuZI=" ></script><script defer src="https://stats.wp.com/e-202405.js" id="jetpack-stats-js"></script>
<script id="jetpack-stats-js-after">
_stq = window._stq || [];
_stq.push([ "view", {v:'ext',blog:'221251393',post:'100002467',tz:'-5',srv:'www.networkworld.com',hp:'vip',j:'1:12.8.1'} ]);
_stq.push([ "clickTrackerInit", "221251393", "100002467" ]);
</script>
<script async src="https://cse.google.com/cse.js?cx=011881588825642368632%3Axid-ycrg4pg&amp;ver=1" id="google-search-script-js"></script>

</body>
</html>
