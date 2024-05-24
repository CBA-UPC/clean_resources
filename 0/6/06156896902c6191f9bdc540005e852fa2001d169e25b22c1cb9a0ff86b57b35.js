"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6341],{6341:(e,o,s)=>{s.r(o),s.d(o,{ShowSponsorsPreview:()=>i,default:()=>l});var t=s(50959),n=s(75802),a=s(97573),r=s(11527);const c=(0,t.lazy)((()=>Promise.all([s.e(8816),s.e(1228)]).then(s.bind(s,21228))));function i(e){var o;const s=(0,n.TH)(),{showSponsorsData:i}=(0,a.O)({...e,showSponsorsData:null===(o=s.state)||void 0===o?void 0:o.showSponsorsData});return null!=i&&i.length?(0,r.jsx)(t.Suspense,{fallback:!0,children:(0,r.jsx)(c,{...e,showSponsorsData:i})}):null}const l=i},20273:(e,o,s)=>{s.d(o,{F:()=>r,m:()=>c});s(70054);var t=s(50959),n=s(49857),a=s(99537);const r=420;function c(e){let{episodeBase62Id:o,getEpisodeSponsors:c,fetchedEpisodeSponsorsData:i=[],version:l}=e;const[u,d]=(0,t.useState)(i),f=(0,t.useCallback)((async()=>{try{if(!o)throw new Error("episodeBase62Id is required to fetch episode sponsors");const e=c??(await Promise.resolve().then(s.bind(s,93150))).getEpisodeSponsors;d(await e(o,{version:l}))}catch(e){d([])}}),[o,c,l]),h=(0,n.y1)(f,r);(0,t.useEffect)((function(){i.length||h()}),[h,i.length]);const p=(0,t.useCallback)((()=>({effectCallback:h})),[h]);return(0,a.H)(p),{fetchedEpisodeSponsorsData:u}}},97573:(e,o,s)=>{s.d(o,{O:()=>c});s(70054);var t=s(50959),n=s(49857),a=s(20273),r=s(99537);function c(e){let{showId:o,showSponsorsData:c=[],getShowSponsors:i}=e;const[l,u]=(0,t.useState)(c),d=(0,t.useCallback)((async e=>{const t=function(){e.mounted&&u(...arguments)};try{if(!o)throw new Error("showId is required to fetch show sponsors");const e=i??(await Promise.resolve().then(s.bind(s,60662))).getShowSponsors;t(await e(o))}catch(n){t([])}}),[o,i]),f=(0,n.y1)(d,a.F);(0,t.useEffect)((function(){const e={mounted:!0};return c.length||f(e),()=>{e.mounted=!1}}),[f,c.length]);const h=(0,t.useCallback)((()=>{const e={mounted:!0};return{effectCallback(){f(e)},destructor(){e.mounted=!1}}}),[f]);return(0,r.H)(h),{showSponsorsData:l}}},99537:(e,o,s)=>{s.d(o,{H:()=>l});var t=s(50959),n=s(10226),a=s(17676),r=s(90979),c=s(65019),i=s(95812);function l(e){const o=(0,n.W6)(a.oFA),s=(0,c.Y)((e=>{const o=(null==e?void 0:e.item)??void 0;return(0,i.k6)(o)&&o.isPodcastAd?o.id??void 0:void 0})),l=(0,r.D)(s);(0,t.useEffect)((function(){const{effectCallback:t,destructor:n}=e();return s!==l&&Boolean(s)&&setTimeout(t,o),n}),[e,s,l,o])}}}]);
//# sourceMappingURL=6341.50e2dd4e.js.map                 var keyAndValue = fields[i].split('=');
	                            if (keyAndValue.length > 1) {
	                                var key = keyAndValue[0],
	                                value = keyAndValue[1];
	                            	if (key === 'action') {
	                                	return { action: value };
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	       	 }
	    };
		
		(function(config){
		    config.appKey = 'AD-AAB-ABB-MKJ';
		    config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';
		    config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';
		    config.beaconUrlHttp = 'http://col.eum-appdynamics.com';
		    config.beaconUrlHttps = 'https://col.eum-appdynamics.com';
		    config.xd = {enable : true};   
		    config.xhr = {
				'include': {      'urls': [         {              'pattern': '^https:\/\/www\.aritzia\.com\/.*'          },        {              'pattern': '.*twilio\.com.*'          },         {                'pattern': '.*doubleclick\.net.*'          },         {             'pattern': '.*edq\.com.*'         }     ] },
				"maxPerPageView": 10
			}; 
		})(window['adrum-config'] || (window['adrum-config'] = {}));
	</script>
<script src="//cdn.appdynamics.com/adrum/adrum-latest.js"></script>
<script>
		(function(config) {
		    (function (info) {
		        info.PageView = function(context) {
		            return  {
		                userData :  {
		                    language: "en_CA",
		                    siteId: "Aritzia_CA",
		                    dataId: ""
		                },
		                userPageName: "Account"
		            }
		        }
		     })(config.userEventInfo || (config.userEventInfo = {}));
		})(window['adrum-config'] || (window['adrum-config'] = {}));
	</script>
<link rel="shortcut icon" href="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dwfdbe7f6b/images/new_favicon.ico" />
<link rel="apple-touch-icon" href="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw38f31017/images/Aritzia_Favicon_57x57.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dwdb2bd59c/images/Aritzia_Favicon_72x72.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw337fa0e9/images/Aritzia_Favicon_114x114.png" />
<link href="https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/css/ui/app.ui.min.css" type="text/css" rel="stylesheet" />
<link href="https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/css/app.ns.min.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" media="print" href="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/css/print.css" />
<script src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/lib/jquery/jquery-1.7.1.min.js"></script>
<script type="text/javascript">//<!--
/* <![CDATA[ (head-active_data.js) */
var dw = (window.dw || {});
dw.ac = {
    _analytics: null,
    _events: [],
    _category: "",
    _searchData: "",
    _anact: "",
    _anact_nohit_tag: "",
    _analytics_enabled: "true",
    _timeZone: "Canada/Pacific",
    _capture: function(configs) {
        if (Object.prototype.toString.call(configs) === "[object Array]") {
            configs.forEach(captureObject);
            return;
        }
        dw.ac._events.push(configs);
    },
	capture: function() { 
		dw.ac._capture(arguments);
		// send to CQ as well:
		if (window.CQuotient) {
			window.CQuotient.trackEventsFromAC(arguments);
		}
	},
    EV_PRD_SEARCHHIT: "searchhit",
    EV_PRD_DETAIL: "detail",
    EV_PRD_RECOMMENDATION: "recommendation",
    EV_PRD_SETPRODUCT: "setproduct",
    applyContext: function(context) {
        if (typeof context === "object" && context.hasOwnProperty("category")) {
        	dw.ac._category = context.category;
        }
        if (typeof context === "object" && context.hasOwnProperty("searchData")) {
        	dw.ac._searchData = context.searchData;
        }
    },
    setDWAnalytics: function(analytics) {
        dw.ac._analytics = analytics;
    },
    eventsIsEmpty: function() {
        return 0 == dw.ac._events.length;
    }
};
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (head-cquotient.js) */
var CQuotient = window.CQuotient = {};
CQuotient.clientId = 'aaiv-Aritzia_CA';
CQuotient.realm = 'AAIV';
CQuotient.siteId = 'Aritzia_CA';
CQuotient.instanceType = 'prd';
CQuotient.locale = 'en_CA';
CQuotient.fbPixelId = '__UNKNOWN__';
CQuotient.activities = [];
CQuotient.cqcid='';
CQuotient.cquid='';
CQuotient.cqeid='';
CQuotient.cqlid='';
CQuotient.apiHost='api.cquotient.com';
/* Turn this on to test against Staging Einstein */
/* CQuotient.useTest= true; */
CQuotient.useTest = ('true' === 'false');
CQuotient.initFromCookies = function () {
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
	  var c = ca[i];
	  while (c.charAt(0)==' ') c = c.substring(1,c.length);
	  if (c.indexOf('cqcid=') == 0) {
		CQuotient.cqcid=c.substring('cqcid='.length,c.length);
	  } else if (c.indexOf('cquid=') == 0) {
		  var value = c.substring('cquid='.length,c.length);
		  if (value) {
		  	var split_value = value.split("|", 3);
		  	if (split_value.length > 0) {
			  CQuotient.cquid=split_value[0];
		  	}
		  	if (split_value.length > 1) {
			  CQuotient.cqeid=split_value[1];
		  	}
		  	if (split_value.length > 2) {
			  CQuotient.cqlid=split_value[2];
		  	}
		  }
	  }
	}
}
CQuotient.getCQCookieId = function () {
	if(window.CQuotient.cqcid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cqcid;
};
CQuotient.getCQUserId = function () {
	if(window.CQuotient.cquid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cquid;
};
CQuotient.getCQHashedEmail = function () {
	if(window.CQuotient.cqeid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cqeid;
};
CQuotient.getCQHashedLogin = function () {
	if(window.CQuotient.cqlid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cqlid;
};
CQuotient.trackEventsFromAC = function (/* Object or Array */ events) {
try {
	if (Object.prototype.toString.call(events) === "[object Array]") {
		events.forEach(_trackASingleCQEvent);
	} else {
		CQuotient._trackASingleCQEvent(events);
	}
} catch(err) {}
};
CQuotient._trackASingleCQEvent = function ( /* Object */ event) {
	if (event && event.id) {
		if (event.type === dw.ac.EV_PRD_DETAIL) {
			CQuotient.trackViewProduct( {id:'', alt_id: event.id, type: 'raw_sku'} );
		} // not handling the other dw.ac.* events currently
	}
};
CQuotient.trackViewProduct = function(/* Object */ cqParamData){
	var cq_params = {};
	cq_params.cookieId = CQuotient.getCQCookieId();
	cq_params.userId = CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.product = cqParamData.product;
	cq_params.realm = cqParamData.realm;
	cq_params.siteId = cqParamData.siteId;
	cq_params.instanceType = cqParamData.instanceType;
	cq_params.locale = CQuotient.locale;
	
	if(CQuotient.sendActivity) {
		CQuotient.sendActivity(CQuotient.clientId, 'viewProduct', cq_params);
	} else {
		CQuotient.activities.push({activityType: 'viewProduct', parameters: cq_params});
	}
};
/* ]]> */
// -->
</script>

<style type="text/css">ISAPPLEPAY{display:inline}.dw-apple-pay-button,.dw-apple-pay-button:hover,.dw-apple-pay-button:active{background-color:black;background-image:-webkit-named-image(apple-pay-logo-white);background-position:50% 50%;background-repeat:no-repeat;background-size:75% 60%;border-radius:5px;border:1px solid black;box-sizing:border-box;margin:5px auto;min-height:30px;min-width:100px;padding:0}
.dw-apple-pay-button:after{content:'Apple Pay';visibility:hidden}.dw-apple-pay-button.dw-apple-pay-logo-white{background-color:white;border-color:white;background-image:-webkit-named-image(apple-pay-logo-black);color:black}.dw-apple-pay-button.dw-apple-pay-logo-white.dw-apple-pay-border{border-color:black}</style>
<script src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/js/ga.aritzia.js"></script>
<script src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/js/analytics.aritzia.js"></script>
<script>
	//Variables
	var	pageType = 'MyAccount';
	var	siteType = 'aritzia';
	var	loginStatus = 'not logged in';
	var	demandwareUserId = 'undefined';
	var	siteLanguage = 'English';
	var	siteRegion = 'CAN';
	var	customerGroup = '0';
	var	customerType = '';
  var cdcUID = 'unavailable';
	var enableUniversalAnalytics = (/true/).test('true');
	
	//Universal Analytics
  if (enableUniversalAnalytics) {
	  gaa.init(pageType, siteType, loginStatus, demandwareUserId, siteLanguage, siteRegion, '', customerGroup, customerType, cdcUID);
  }

	//Google Analytics 4
	var coreData = {
		user_id: '', 
        content_language: siteLanguage,
        content_group: '',
		datalayer_version: '3.0',
		site_region: siteRegion, 
        page_depth: '',
		user_info: {
			logged_in: loginStatus,
			customer_type: customerType,
			customer_group: customerGroup,
			customer_tier: '',
			sfcc_id: demandwareUserId
		}
	}

	var analyticsMgr = AnalyticsManager.getInstance(coreData, enableUniversalAnalytics);
	
</script>

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KV39WP');</script>

<link rel="stylesheet" type="text/css" media="only screen and (min-width: 768px)" href="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/css/ui/flexiblegrid.css" />
<link rel="dns-prefetch" href="//widget.fitanalytics.com" />
<link rel="dns-prefetch" href="//cdn.dynamicyield.com" />
<link rel="dns-prefetch" href="//st.dynamicyield.com" />
<link rel="dns-prefetch" href="//rcom.dynamicyield.com" />
<script>
// <![CDATA[
window.DY = window.DY || {};
DY.recommendationContext = {
type: "OTHER",
lng: "en_CA"
};
if(DY.recommendationContext.type != "OTHER" && DY.recommendationContext.type != "HOMEPAGE") {
var data = "";
DY.recommendationContext.data = data.split(',');
}
// ]]>
</script>
<script src="//cdn.dynamicyield.com/api/8780652/api_dynamic.js" id="DY_api_dynamic"></script>
<script src="//cdn.dynamicyield.com/api/8780652/api_static.js" id="DY_api_static"></script>
</head>
<body>
<div id="wrapper" class="pt_account_nomenu pt_minheader container_30">

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV39WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<a class="ar-skip-content pa3 db bg-light-yellow ba absolute z-9999 underline f1" data-ec="navigation" data-ea="nav-banner" data-el="skip to main context" tabindex="0" href="#main" aria-label="Skip to main content">
Skip to main content
</a>
<a class="ar-accessibility-statement pa3 db bg-light-yellow ba absolute z-9999 underline f1" data-ec="navigation" data-ea="nav-banner" data-el="accessibility-statement" tabindex="0" href="/en/aritzia/about-aritzia/accessibility.html" aria-label="Click to View our Accessibility Statement">
Click to View our Accessibility Statement
</a>
<div class="ar-header fixed top-0 bg-white z-5 left-0 w-100 bg-white dn-ns">
<div class="flex items-center h-100 ph3">
<a href="https://www.aritzia.com/en/home" data-link-type="nav-global" aria-label="Aritzia">
<img src="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw1356bd37/images/aritzia_skin/aritzia_logo.svg" alt="Aritzia" class="ar-header__logo db" />
</a>
<div class="flex flex-auto items-center justify-end h-100">
<a href="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/CustomerServiceDialog-DialogStart" class="ar-header__help js-help-dialog bg-light-gray db flex items-center justify-center">
<span class="db relative">?</span>
</a>
</div>
</div>
</div>
<div class="ar-header ar-header--min w-100 z-5 top-0 fixed relative-ns bg-white border-box dn db-ns">
<div class="pv3 ph4 flex border-box center prefix_1 suffix_1">

<div class="w-third">
<a href="#" class="underline dim dn db-ns fl" onclick="history.back(); return false;">
Back to Shopping
</a>
</div>

<div class="w-third">
<a href="https://www.aritzia.com/en/home" class="db tc" data-link-type="nav-global">
<img src="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw1356bd37/images/aritzia_skin/aritzia_logo.svg" alt="Aritzia" class="ar-header__logo h-100" />
</a>
</div>

<div class="w-third">
<a href="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/CustomerServiceDialog-DialogStart" class="help-dialog underline db fr dim">
<span>Need Help?</span>
</a>
</div>
</div>
</div>
<div id="main" role="main" class="page-content w-100 border-box ph5-ns ph0">
<div id="browser-check">
<noscript>
	<div class="browser-compatibility-alert red">
		<p class="browser-error">Your browser's Javascript functionality is turned off. Please turn it on so that you can experience the full capabilities of this site.</p>		
	</div>
</noscript>
</div>
<div id="primary" class="primary-content mw-1012 center">
<div class="login-register__outer-wrapper">
<style scoped>    @media screen and (min-width: 768px) {        .login-register .login-register__inner-wrapper {            margin: 0 !important;            min-height: calc(100vh - 407px) !important;        }        .login-register__inner-wrapper {            align-items: flex-start !important;        }    }</style> <div id="event-clientele-specials-login-banner" class="center mt4 mt0-ns ph3 ph0-ns pb0"> <div class="pv4-ns mb2-ns"> <h3 class=" f1-ns fn1 tc ttc ttu-ns"> SIGN IN OR CREATE AN ACCOUNT TO UNLOCK: </h3> <div class=" w-90 df flex-row flex-wrap flex-nowrap-ns mt1 mt4-ns center justify-between-ns justify-center items-center"> <div class=" tc df flex-row justify-center items-center mr3 mr0-ns mt2 mt0-ns"> <span class="di f0 pt2 mr3">Free shipping </span> <img class="di w-15  center" src="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw7cb46db8/2021/87-value-props/shared/icon-free-shipping.svg" alt="Free Shipping" /> </div> <div class=" tc df flex-row justify-center items-center mr0-ns mt2 mt0-ns"> <span class="di f0 pt2 mr3">Private Sales</span><img class="di w-15 center" src="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw47166160/2021/87-value-props/shared/private-sale.svg" alt="Private Sales" /> </div> <div class=" tc df flex-row justify-center items-center mr3 mr0-ns mt2 mt0-ns"> <span class="di f0 pt2 mr3">Express checkout</span> <img class="di w-15 center" src="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw105e6518/2021/87-value-props/shared/express-checkout.svg" alt="Express Checkout" /> </div> <div class=" tc df flex-row justify-center items-center mt2  mr0-ns mt0-ns"> <span class="di f0 pt2 mr3">My List </span> <img class="di w-20 center" src="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw79bcf17a/2021/87-value-props/shared/my-list.svg" alt="My List" /> </div> <div class=" tc df flex-row justify-center items-center mt2 mr0-ns mt0-ns"> <span class="di f0 pt2 mr3">Order Tracking</span> <img class="di w-15 center" src="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw67b15862/2021/87-value-props/shared/order-tracking.svg" alt="Order Tracking" /> </div> </div> </div> </div>
<div class="login-register  js-login-register--account">
<div class="login-register__inner-wrapper flex flex-nowrap items-center justify-around">
<div class="login-register__login-wrapper order-0">
<h2 class="login-register__title">
Sign In
</h2>
<form action="https://www.aritzia.com/en/my-account?dwcont=C533273380" method="post" class="clearfix" id="dwfrm_oauthlogin">
<fieldset>
<label class="form-label-wrap">
<select name="OAuthProvider" id="OAuthProvider" style="display: none">
<option value>Select a provider then click matching icon</option>
<option value="Facebook" selected="selected">Facebook</option>
</select>
<span class="hidden">Select a provider then click matching icon</span>
</label>
<button name="dwfrm_oauthlogin_login" value="Facebook" type="submit" class="button secondary ar-facebook-button login-register__oauth-cta w-100 items-center">
<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M12 24.0016C18.6274 24.0016 24 18.629 24 12.0016C24 5.3742 18.6274 0.00162125 12 0.00162125C5.37258 0.00162125 0 5.3742 0 12.0016C0 18.629 5.37258 24.0016 12 24.0016Z" fill="#1977F3" />
<path d="M16.6711 15.4712L17.2027 12.0017H13.8749V9.75053C13.8749 8.80214 14.3389 7.87568 15.8307 7.87568H17.3444V4.92251C17.3444 4.92251 15.9708 4.68795 14.6579 4.68795C11.9173 4.68795 10.1252 6.34847 10.1252 9.35733V12.0017H7.07751V15.4712H10.1252V23.8566C10.7361 23.9527 11.3621 24.0017 12 24.0017C12.6379 24.0017 13.264 23.9511 13.8749 23.8566V15.4712H16.6711Z" fill="white" />
</g>
</svg></span><span class="f0 center">Continue with Facebook</span>
</button>
<input type="hidden" name="rememberme" id="rememberme" value="true">
<input type="hidden" name="dwfrm_oauthlogin_securekey" value="1333867169" />
<input type="hidden" name="isAuthPanel" id="isAuthPanel" value="false">
</fieldset>
</form>
<div class="ar-hruler-text login-register__hruler flex flex-nowrap justify-center items-center">
<span class="ar-hruler-text__text dn db-ns">
or
</span>
<span class="ar-hruler-text__text db dn-ns">
or sign in
</span>
</div>
<div class="login-box login-account pb4-ns pb0">
<div class="login-box-content returning-customers clearfix">
<form action="https://www.aritzia.com/en/my-account?dwcont=C533273380" method="post" class="clearfix suppress" id="dwfrm_login">
<fieldset>
<div>
<div class="form-row js-form-row  float-label-container   required  ">
<input class="input-text float-input email-input js-login-email-input required" id="dwfrm_login_username_d0ulesgydtmu" type="text" name="dwfrm_login_username" value maxlength="2147483647" autocapitalize="off" autocomplete="email" placeholder="Email Address" autocorrect="off" inputmode="email" aria-label="Email Address" />
<label for="dwfrm_login_username_d0ulesgydtmu">
<span>
Email Address
</span>
</label>
</div>
<div class="email-error error ar-error-text red pv1 ma0">This field is required</div>
<div class="email-error-2 error-form2 ar-error-text red pv1 ma0">The email address is invalid</div>
</div>
<div class="form-password" style="position:relative;">
<div class="form-row js-form-row    required  ">
<div class="password-input__outer-wrapper db mt1 float-label-container">
<input class="input-text-pw password-input  float-input password-input required" id="dwfrm_login_password" type="password" name="dwfrm_login_password" value maxlength="2147483647" autocomplete="off" placeholder="Password (8-20 characters)" aria-label="Password (8-20 characters)" />
<label for="dwfrm_login_password">
<span>
Password (8-20 characters)
</span>
</label>
<button type="button" class="password-input__reveal-cta password-input__show js-input-password-toggle black-60">
<span class="password-input__show">Show</span>
<span class="password-input__hide">Hide</span>
</button>
</div>
</div>
<div class="password-error error ar-error-text red pv1 ma0">This field is required</div>
<div class="password-size-error error-form ar-error-text red pv1 ma0">Your username or password is incorrect</div>
</div>
<div class="form-row form-row-button">
<button class="button js-login-button login-register__signin-cta" type="submit" value="Sign In" name="dwfrm_login_login">
Sign In
</button>
</div>
<input type="hidden" name="dwfrm_login_securekey" value="523452935" />
</fieldset>
<a id="password-reset" href="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Account-PasswordResetDialog" class="dialogify login-register__forgot-password ar-link pt1 fl" data-dlg-options="{&quot;width&quot;:497}" title="Forgot password?">
Forgot password?
</a>
<a href="/en/my-account/create-account?redirect=https://www.aritzia.com/" class="login-register__create-account ar-link js-login-register-switch-to-create pt1 fr" title="Create an Account">
Create an Account
</a>
</form>
<div class="create-account-trigger">
<form action="https://www.aritzia.com/en/my-account?dwcont=C533273380" method="post" id="dwfrm_login_register">
<input type="hidden" name="dwfrm_login_securekey" value="523452935" />
</form>
</div>
</div>
</div>
<script>
jQuery(document).ready(function() {
	
	$("#dwfrm_login").on("submit", function(){
		$('.form-row-button').addClass("form-row-button-overlay")
		$('.login-register__signin-cta').addClass("button-loading")
	})
	// populates the value with helper text for the username 
	if (false) {
		$('.input-text.email-input').val('null').css("color", "#000");
	}

	// Check password field before submitting form
	$("button[name='dwfrm_login_login']").on("click", function(e) {
		$('#error_1, .password-error, .password-size-error, .email-error, .email-error-2').hide();

		var errFlag = false;
		
		// password checks
		if($('#dwfrm_login_password').val() == "") {
			$('.password-error').show();
			errFlag = true;
		}
		else if( $('#dwfrm_login_password').val().length <= 4){
			$('.password-size-error').show();
			errFlag = true;
		}
	
		// email checks
		if( $('.input-text.email-input').val() == "") {
			$('.email-error').show();
			errFlag = true
		}
		else {
			$('.email-error').hide();
				 
			var regexp = /^[\w.%+\-]+@[\w.\-]+\.[\w]{2,6}$/
			if(!(regexp.test($('.input-text.email-input').val()))){
				e.preventDefault();
				$('.email-error-2').show();
				errFlag = true;
			}
		}
		
		if(errFlag) return false;
	});

	// Do not move out of file, will remove the dialog too early if placed elsewhere
	$('#password-reset').click(function() {
		$('.dialog-content:hidden').remove();
	});
});
</script>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="ar-footer" class="pt2 bg-true-black js-footer overflow-hidden cb">
<div class="ar-footer__global js-footer__global mh3">
<footer role="contentinfo" class="ph4-ns flex-ns">
<div class="w-50-ns pt2-ns">
<div class="ar-footer__copyright pt3 pb0-ns mb2 pb1 mb3-ns">
<ul class="mt0">
<li class="copyright dn dib-ns pr3"><p>&copy; <span class="js-footer__year">2021</span> Aritzia LP</p></li>
<li class="dib pr3 mb2"><a href="/en/privacy-policy" data-link-type="nav-footer-nav">Privacy Policy</a></li>
<li class="dib pr3 mb2"><button id="ot-sdk-btn" class="ot-sdk-show-settings">Manage Cookies</button></li>
<li class="dib pr3 mb2"><a href="/en/terms-of-use" data-link-type="nav-footer-nav">Terms of Use</a></li>
<li class="dib mb2"><a href="/en/sitemap" data-link-type="nav-footer-nav">Site Map</a></li>
</ul>
</div>
</div>
<div class="w-50-ns tr-ns pb0-ns pb1">
<div class="dib mt0 mt2-ns pt3-ns pb2-ns">
<div class="flex items-center flex-wrap">
<span class="mr3">
<svg width="28px" height="9px" viewBox="0 0 28 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(0.000000, -4.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(0.000000, 4.000000)">
<g>
<g transform="translate(0.197400, 0.197400)">
<polygon points="11.8300057 8.65240238 9.62866787 8.65240238 11.0055423 0.259293023 13.2067598 0.259293023"></polygon>
<path d="M19.8100511,0.464480598 C19.3758505,0.294657914 18.6871726,0.107152785 17.8356243,0.107152785 C15.6617324,0.107152785 14.1308955,1.24998468 14.1215061,2.88389014 C14.1034495,4.08938198 15.2175405,4.75894144 16.0507915,5.16089072 C16.9024602,5.5716219 17.1919674,5.83970676 17.1919674,6.20581646 C17.1833002,6.7680945 16.5037709,7.02727881 15.869985,7.02727881 C14.991111,7.02727881 14.5201954,6.89365173 13.804553,6.58082672 L13.5146847,6.44672495 L13.2066394,8.33079548 C13.7229372,8.56268474 14.6741579,8.76846568 15.6617324,8.77748492 C17.9715301,8.77748492 19.4752821,7.65233546 19.4930979,5.91114859 C19.5018855,4.95570315 18.9136021,4.22360242 17.6453079,3.62536612 C16.8753753,3.24133663 16.4038578,2.98238967 16.4038578,2.58945962 C16.4128861,2.23225048 16.8026675,1.86637813 17.6717909,1.86637813 C18.3874334,1.84845833 18.913241,2.01804367 19.3115691,2.18774768 L19.510673,2.27687195 L19.8100511,0.464480598 L19.8100511,0.464480598 L19.8100511,0.464480598 Z"></path>
<path d="M22.735819,5.67902199 C22.917107,5.19684899 23.6146929,3.33069825 23.6146929,3.33069825 C23.6055442,3.34861804 23.7956198,2.83962469 23.9043205,2.5271557 L24.0581625,3.25035586 C24.0581625,3.25035586 24.4750288,5.25939025 24.5655524,5.67902199 C24.2215144,5.67902199 23.1706214,5.67902199 22.735819,5.67902199 L22.735819,5.67902199 Z M25.4530935,0.259293023 L23.750358,0.259293023 C23.2252727,0.259293023 22.8263426,0.410958564 22.5997927,0.955672833 L19.3299868,8.65228371 L21.6397846,8.65228371 C21.6397846,8.65228371 22.0200561,7.6163772 22.1017923,7.39326983 C22.3551863,7.39326983 24.6021471,7.39326983 24.9281285,7.39326983 C24.9913266,7.6879377 25.1907916,8.65228371 25.1907916,8.65228371 L27.2290184,8.65228371 L25.4530935,0.259293023 L25.4530935,0.259293023 L25.4530935,0.259293023 Z"></path>
<path d="M7.79002651,0.259293023 L5.63419122,5.98259042 L5.39861304,4.82183873 C5.00004413,3.48248247 3.75004728,2.02730025 2.35511628,1.30374406 L4.32978388,8.64350182 L6.65763818,8.64350182 L10.1177604,0.259293023 L7.79002651,0.259293023 L7.79002651,0.259293023 L7.79002651,0.259293023 Z"></path>
<path d="M3.63231838,0.259293023 L0.0905803809,0.259293023 L0.0543468436,0.428878358 C2.81712397,1.12537684 4.64685742,2.8042598 5.39861304,4.82219475 L4.62868046,0.964810741 C4.50192327,0.428759684 4.11238265,0.276975468 3.63231838,0.259293023 L3.63231838,0.259293023 Z"></path>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="26px" height="14px" viewBox="0 0 26 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-49.000000, -2.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(49.000000, 2.000000)">
<path d="M0.0873198584,0.312910624 C0.433174984,0.138885464 0.828682577,0.209164856 1.20022001,0.20247158 C2.05116059,0.224224725 2.90381333,0.182391754 3.75475391,0.219204769 C4.13827642,0.21753145 4.46701001,0.528768756 4.52008679,0.891878945 C4.78718282,2.15690799 5.03202086,3.426957 5.29398043,4.69533268 C4.86080545,3.20942555 3.71708652,1.99626938 2.37304556,1.2248694 C1.66250162,0.808213003 0.869774275,0.56558177 0.0873198584,0.312910624 Z"></path>
<path d="M7.49067412,0.205818218 C8.22861253,0.214184812 8.96483879,0.210838175 9.70106505,0.205818218 C8.58131628,2.82121558 7.53690228,5.46673267 6.39318336,8.07209012 C5.67407864,8.05033697 4.95497392,8.06037689 4.23586921,8.06037689 C3.59894789,5.78633657 3.00483042,3.50058303 2.37304556,1.2248694 C3.71708652,1.99626938 4.86080545,3.20942555 5.29398043,4.69533268 C5.35904229,4.98314353 5.40527045,5.27764764 5.46177153,5.56880512 C6.13293593,3.78002728 6.81266111,1.99292275 7.49067412,0.205818218 Z"></path>
<path d="M10.5280355,0.20247158 C11.2214579,0.207491537 11.9148803,0.207491537 12.6083027,0.20247158 C12.1819763,2.82288889 11.7333919,5.43995957 11.3173385,8.0620502 C10.6273404,8.06372352 9.93734231,8.06372352 9.24563206,8.0620502 C9.64285181,5.43828625 10.1102699,2.82456221 10.5280355,0.20247158 Z"></path>
<path d="M14.5807042,0.69610064 C15.8237281,-0.10207245 17.4485623,-0.0786459858 18.823422,0.36311019 C18.7600723,0.94375183 18.6607674,1.51937351 18.5580381,2.09332188 C17.8269483,1.75029151 16.9742956,1.5980195 16.1798561,1.79714444 C15.8048944,1.88415702 15.4350691,2.33929975 15.7466811,2.68065679 C16.3870268,3.32153791 17.3954855,3.46711665 17.9981637,4.16489061 C18.6967226,4.83254483 18.6710403,5.95701509 18.1950615,6.738455 C17.6916882,7.56340119 16.722609,7.99511745 15.7792121,8.11894304 C14.7125401,8.22770877 13.6013521,8.16244933 12.6014541,7.75917949 C12.7076076,7.1735179 12.7966396,6.58450966 12.9045053,5.99884807 C13.7691432,6.43558428 14.7724654,6.65478905 15.7364082,6.4456242 C16.0634296,6.33853179 16.400724,6.07582073 16.3716174,5.70099731 C16.2637517,5.25422118 15.7860607,5.06346283 15.4145232,4.86099125 C14.6937064,4.51461425 13.9181006,4.08959126 13.5945034,3.32823119 C13.1921472,2.36607285 13.7246271,1.23992927 14.5807042,0.69610064 Z"></path>
<path d="M24.1602063,0.212511494 C24.7303536,2.82958217 25.2816672,5.44832617 25.8432538,8.06539684 C25.2029081,8.06707016 24.5625625,8.06707016 23.9222169,8.06874348 C23.8314727,7.67551355 23.745865,7.2806103 23.6636816,6.88403374 C22.7750736,6.88403374 21.8881778,6.88570705 21.001282,6.8806871 C20.8591732,7.27726366 20.711928,7.67384023 20.5595463,8.06707016 C19.8335929,8.06707016 19.1076396,8.06707016 18.3816863,8.06874348 C19.3850086,5.71438386 20.3986038,3.36337088 21.4002139,1.00733795 C21.5388984,0.645901075 21.812843,0.252671146 22.246018,0.230918001 C22.8829394,0.187411711 23.523285,0.224224725 24.1602063,0.212511494 Z M22.7425427,2.33762643 C22.3093677,3.29141817 21.9926192,4.29206284 21.6056724,5.26426109 C22.1809562,5.26593441 22.7545278,5.26593441 23.3298116,5.26593441 C23.1226409,4.29206284 22.8709543,3.32488455 22.7425427,2.33762643 Z"></path>
<path d="M15.655937,10.6088415 C16.1764318,11.5208003 15.7911971,12.8477421 14.8238301,13.3212913 C14.2040303,13.6442419 13.4746527,13.5053564 12.8034883,13.5354762 C13.0089467,12.3557864 13.1681771,11.16773 13.3924693,9.99138683 C14.1663629,10.0047734 15.1628366,9.87760115 15.655937,10.6088415 Z M15.289536,10.9568918 C15.0207278,10.3929834 14.3358662,10.4113899 13.7965376,10.4180831 C13.6201857,11.3266953 13.5071836,12.243674 13.3359682,13.1522861 C13.8085227,13.1439195 14.3324418,13.1857525 14.7330859,12.8895751 C15.3631586,12.474592 15.5001309,11.6262193 15.289536,10.9568918 Z"></path>
<path d="M16.8407476,9.99808011 C17.4519866,9.99808011 18.0632256,9.99640679 18.6744646,10.0014267 C18.6487823,10.1068458 18.5991298,10.3160107 18.5734475,10.4214298 C18.1282875,10.4431829 17.6831274,10.4281231 17.2379673,10.4314697 C17.1951635,10.78454 17.1386624,11.1359369 17.0633276,11.4823139 C17.4108949,11.4839872 17.7584622,11.4839872 18.1077416,11.4856606 C18.1077416,11.5977729 18.1043173,11.8219977 18.1043173,11.93411 C17.7396285,11.9324367 17.3766518,11.9307634 17.011963,11.9274167 C16.9366282,12.3306866 16.8664299,12.7339564 16.7996559,13.1388996 C17.2722104,13.1455929 17.7447649,13.1439195 18.2190316,13.1455929 C18.1967736,13.2359521 18.1539698,13.4149972 18.1317118,13.5053564 C17.5136241,13.5722892 16.8886879,13.5204163 16.267176,13.5354762 C16.4486643,12.354113 16.6352891,11.1744233 16.8407476,9.99808011 Z"></path>
<path d="M20.8608854,10.1921851 C21.4053504,10.6121881 21.1382543,11.4639074 20.5441369,11.7015187 C21.2101648,11.9675764 21.1964676,12.9330814 20.634881,13.2928449 C20.078431,13.671015 19.3559019,13.4936432 18.7224049,13.5438427 C18.922727,12.3624796 19.1076396,11.1777699 19.2994009,9.99473347 C19.8198957,10.0164866 20.3917552,9.91441417 20.8608854,10.1921851 Z M19.4654798,11.8989703 C19.4055544,12.3290133 19.3267953,12.7557096 19.2480362,13.1840792 C19.568209,13.162326 19.9037912,13.1907725 20.2085547,13.0753135 C20.5304396,12.9347547 20.7050794,12.5130783 20.5116059,12.2118809 C20.3284055,11.8286909 19.8164714,11.9357833 19.4654798,11.8989703 Z M20.6930943,10.8715525 C20.6742606,10.3478037 20.0630216,10.3980033 19.6829234,10.4130632 C19.6366952,10.78454 19.5853306,11.1526701 19.5391024,11.5241469 C19.9962476,11.5308402 20.6862457,11.4588875 20.6930943,10.8715525 Z"></path>
<path d="M22.0987728,10.0181599 C22.2220479,10.0097933 22.4685981,9.99306015 22.5935853,9.98469356 C22.3983997,11.1727499 22.2220479,12.3624796 22.0097408,13.5471894 C21.88989,13.5438427 21.6484763,13.5371495 21.5286255,13.5338028 C21.7477812,12.3674996 21.9155723,11.1911564 22.0987728,10.0181599 Z"></path>
<path d="M23.223658,10.0097933 C24.0848715,9.9796736 24.946085,10.00812 25.8090107,9.99808011 C25.8090107,10.1068458 25.8090107,10.3243773 25.8107228,10.433143 C25.4443219,10.4314697 25.0779209,10.4297964 24.7115199,10.4264497 C24.5060614,11.4555408 24.3913471,12.4996918 24.1876008,13.5271096 C24.0694621,13.5354762 23.834897,13.550536 23.7184705,13.5572293 C23.8845495,12.5147517 24.0403555,11.4706007 24.2252682,10.4314697 C23.8588672,10.4314697 23.4924662,10.4297964 23.1260652,10.4281231 C23.1500354,10.322704 23.1996879,10.1135391 23.223658,10.0097933 Z"></path>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="23px" height="18px" viewBox="0 0 23 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-95.000000, 0.000000)" fill="#FFFFFE">
<g>
<g transform="translate(95.000000, 0.000000)">
<path d="M11.5,1.53150071 C11.4083933,1.60400366 11.3187608,1.67869164 11.2311027,1.75556463 C9.73341173,3.06657691 8.78536112,4.99674454 8.78536112,7.15097609 C8.78536112,9.30520763 9.73341173,11.2351766 11.2311027,12.5463875 C11.3187608,12.6232605 11.4083933,12.6977499 11.5,12.7702528 C11.5916067,12.6977499 11.6812392,12.6232605 11.7688973,12.5463875 C13.2667857,11.2351766 14.2146389,9.30520763 14.2146389,7.15097609 C14.2146389,4.99674454 13.2667857,3.06657691 11.7688973,1.75556463 C11.6812392,1.67869164 11.5916067,1.60400366 11.5,1.53150071 L11.5,1.53150071 Z M15.8925818,0 C14.4375354,0 13.0847568,0.440182306 11.9580336,1.1952062 C12.0156827,1.24268073 12.0741214,1.28936072 12.1297962,1.33822572 C13.8043829,2.80397718 14.7644766,4.92265248 14.7644766,7.15097609 C14.7644766,9.37929969 13.8043829,11.497975 12.1299936,12.9635278 C12.0745163,13.0121942 12.0156827,13.0592714 11.9580336,13.106746 C13.0845594,13.8615712 14.4375354,14.3019522 15.8925818,14.3019522 C19.817851,14.3019522 23,11.1003013 23,7.15097609 C23,3.20145227 19.817851,0 15.8925818,0 Z M10.8702038,12.9635278 C10.9256811,13.0121942 10.9843173,13.0590728 11.0419664,13.106746 C9.91544061,13.8617699 8.56266202,14.3019522 7.10741815,14.3019522 C3.18195162,14.3019522 0,11.1003013 0,7.15097609 C0,3.2016509 3.18195162,0 7.10741815,0 C8.56246459,0 9.91544061,0.440182306 11.0419664,1.1952062 C10.9843173,1.24268073 10.926076,1.28936072 10.8702038,1.33822572 C9.19581452,2.80397718 8.23552336,4.92265248 8.23552336,7.15097609 C8.23552336,9.37949833 9.19581452,11.497975 10.8702038,12.9635278 Z M22.7773009,11.5821976 L22.7773009,11.3045014 L22.705437,11.3045014 L22.6225171,11.4955913 L22.5395972,11.3045014 L22.4675359,11.3045014 L22.4675359,11.5821976 L22.5184724,11.5821976 L22.5184724,11.3728329 L22.5960617,11.5531964 L22.6487751,11.5531964 L22.7265618,11.3724356 L22.7265618,11.5821976 L22.7773009,11.5821976 Z M22.3212416,11.5821976 L22.3212416,11.3519759 L22.4134406,11.3519759 L22.4134406,11.3050973 L22.1785009,11.3050973 L22.1785009,11.3519759 L22.2706999,11.3519759 L22.2706999,11.5821976 L22.3212416,11.5821976 Z M22.5433484,17.7558736 L22.5433484,17.8025536 L22.5859929,17.8025536 C22.5958643,17.8025536 22.6037614,17.8005672 22.6094869,17.7967931 C22.6154097,17.793019 22.6181737,17.7870598 22.6181737,17.7789157 C22.6181737,17.7711688 22.6154097,17.7654083 22.6094869,17.7616341 C22.6037614,17.75786 22.5958643,17.7558736 22.5859929,17.7558736 L22.5433484,17.7558736 Z M22.5865852,17.7230983 C22.6088946,17.7230983 22.6260708,17.7280643 22.6383114,17.7379962 C22.6503545,17.7481267 22.6564748,17.7616341 22.6564748,17.7789157 C22.6564748,17.7934162 22.6515391,17.8055332 22.6418651,17.8148692 C22.6321911,17.8242052 22.6185686,17.8299657 22.6008,17.8321507 L22.6578568,17.8982972 L22.613238,17.8982972 L22.5603272,17.832548 L22.5433484,17.832548 L22.5433484,17.8982972 L22.5060344,17.8982972 L22.5060344,17.7230983 L22.5865852,17.7230983 Z M22.5755292,17.9584846 C22.5956669,17.9584846 22.61462,17.9545118 22.6319937,17.9469636 C22.6495648,17.9392167 22.6647668,17.9286889 22.6779945,17.9153801 C22.6912222,17.90227 22.7014884,17.8865776 22.7089907,17.8687001 C22.716493,17.8508227 22.7202441,17.8317534 22.7202441,17.8112937 C22.7202441,17.7910326 22.716493,17.7719633 22.7089907,17.7540859 C22.7014884,17.7362084 22.6912222,17.720516 22.6779945,17.7072073 C22.6647668,17.6940971 22.6495648,17.6835693 22.6319937,17.6760211 C22.61462,17.6684728 22.5956669,17.6646987 22.5755292,17.6646987 C22.5549967,17.6646987 22.5356487,17.6684728 22.5178801,17.6760211 C22.4999142,17.6835693 22.4843173,17.6940971 22.4710896,17.7072073 C22.4580594,17.720516 22.4475957,17.7362084 22.4400934,17.7540859 C22.4325911,17.7719633 22.42884,17.7910326 22.42884,17.8112937 C22.42884,17.8317534 22.4325911,17.8508227 22.4400934,17.8687001 C22.4475957,17.8865776 22.4580594,17.90227 22.4710896,17.9153801 C22.4843173,17.9286889 22.4999142,17.9392167 22.5178801,17.9469636 C22.5356487,17.9545118 22.5549967,17.9584846 22.5755292,17.9584846 Z M22.5755292,17.6225874 C22.6017872,17.6225874 22.6266631,17.6275533 22.6497622,17.6374852 C22.6728613,17.6472185 22.6931964,17.6607259 22.7103727,17.6780074 C22.7277464,17.6950903 22.741369,17.7151528 22.7514378,17.7379962 C22.7613092,17.7610382 22.7662449,17.7854707 22.7662449,17.8112937 C22.7662449,17.8373153 22.7613092,17.8615492 22.7514378,17.8843926 C22.741369,17.9072359 22.7277464,17.9272984 22.7103727,17.9443813 C22.6931964,17.9614642 22.6728613,17.9749716 22.6497622,17.9851021 C22.6266631,17.995034 22.6017872,18 22.5755292,18 C22.5484815,18 22.5234081,17.995034 22.4999142,17.9851021 C22.4764202,17.9749716 22.4560851,17.9614642 22.4389088,17.9443813 C22.4217326,17.9272984 22.4083074,17.9072359 22.3982386,17.8843926 C22.3883672,17.8615492 22.3834315,17.8373153 22.3834315,17.8112937 C22.3834315,17.7854707 22.3883672,17.7610382 22.3982386,17.7379962 C22.4083074,17.7151528 22.4217326,17.6950903 22.4389088,17.6780074 C22.4560851,17.6607259 22.4764202,17.6472185 22.4999142,17.6374852 C22.5234081,17.6275533 22.5484815,17.6225874 22.5755292,17.6225874 Z M4.96986214,16.9484092 C4.96986214,16.614697 5.18703325,16.3407749 5.54220673,16.3407749 C5.88178338,16.3407749 6.11080019,16.6027787 6.11080019,16.9484092 C6.11080019,17.2940397 5.88178338,17.5562422 5.54220673,17.5562422 C5.18703325,17.5562422 4.96986214,17.2821215 4.96986214,16.9484092 Z M6.49775962,16.9484092 L6.49775962,15.9991172 L6.08710879,15.9991172 L6.08710879,16.2295375 C5.95680613,16.0587086 5.75937784,15.951444 5.49087538,15.951444 C4.96196501,15.951444 4.54736562,16.3685843 4.54736562,16.9484092 C4.54736562,17.5284329 4.96196501,17.9455731 5.49087538,17.9455731 C5.75937784,17.9455731 5.95680613,17.8383085 6.08710879,17.6674796 L6.08710879,17.8979 L6.49775962,17.8979 L6.49775962,16.9484092 Z M20.3631479,16.9484092 C20.3631479,16.614697 20.580319,16.3407749 20.9356899,16.3407749 C21.2750691,16.3407749 21.5040859,16.6027787 21.5040859,16.9484092 C21.5040859,17.2940397 21.2750691,17.5562422 20.9356899,17.5562422 C20.580319,17.5562422 20.3631479,17.2821215 20.3631479,16.9484092 Z M21.8910453,16.9484092 L21.8910453,15.2363464 L21.4803945,15.2363464 L21.4803945,16.2295375 C21.3500918,16.0587086 21.1526636,15.951444 20.8843585,15.951444 C20.3552507,15.951444 19.9406513,16.3685843 19.9406513,16.9484092 C19.9406513,17.5284329 20.3552507,17.9455731 20.8843585,17.9455731 C21.1526636,17.9455731 21.3500918,17.8383085 21.4803945,17.6674796 L21.4803945,17.8979 L21.8910453,17.8979 L21.8910453,16.9484092 Z M11.5906196,16.3209111 C11.8551735,16.3209111 12.0249618,16.4875686 12.068396,16.7815531 L11.0893492,16.7815531 C11.132586,16.5074324 11.2984257,16.3209111 11.5906196,16.3209111 Z M11.5985167,15.951444 C11.0457175,15.951444 10.6589555,16.356666 10.6589555,16.9484092 C10.6589555,17.5522694 11.0615118,17.9455731 11.6261567,17.9455731 C11.9104534,17.9455731 12.1710587,17.8738647 12.4000755,17.6793979 L12.1986987,17.373495 C12.0407561,17.5006235 11.8393792,17.5721333 11.6498481,17.5721333 C11.3852942,17.5721333 11.1444317,17.4489776 11.0852032,17.1073198 L12.486944,17.1073198 C12.4908925,17.0556739 12.4946437,17.0040279 12.4946437,16.9484092 C12.4908925,16.356666 12.1276245,15.951444 11.5985167,15.951444 Z M16.5533743,16.9484092 C16.5533743,16.614697 16.770348,16.3407749 17.1257189,16.3407749 C17.4652955,16.3407749 17.6943123,16.6027787 17.6943123,16.9484092 C17.6943123,17.2940397 17.4652955,17.5562422 17.1257189,17.5562422 C16.770348,17.5562422 16.5533743,17.2821215 16.5533743,16.9484092 Z M18.0812718,16.9484092 L18.0812718,15.9991172 L17.670621,15.9991172 L17.670621,16.2295375 C17.5403183,16.0587086 17.34289,15.951444 17.0743875,15.951444 C16.5454772,15.951444 16.1308778,16.3685843 16.1308778,16.9484092 C16.1308778,17.5284329 16.5454772,17.9455731 17.0743875,17.9455731 C17.34289,17.9455731 17.5403183,17.8383085 17.670621,17.6674796 L17.670621,17.8979 L18.0812718,17.8979 L18.0812718,16.9484092 Z M14.2357637,16.9484092 C14.2357637,17.5244601 14.6345688,17.9455731 15.2426479,17.9455731 C15.5269447,17.9455731 15.7162784,17.8820089 15.9216038,17.7191256 L15.7241755,17.3854133 C15.5701815,17.4966507 15.4082903,17.5562422 15.2308022,17.5562422 C14.9030713,17.5522694 14.6622088,17.3139036 14.6622088,16.9484092 C14.6622088,16.5831135 14.9030713,16.3447477 15.2308022,16.3407749 C15.4082903,16.3407749 15.5701815,16.4001677 15.7241755,16.5116038 L15.9216038,16.1778916 C15.7162784,16.0150082 15.5269447,15.951444 15.2426479,15.951444 C14.6345688,15.951444 14.2357637,16.372557 14.2357637,16.9484092 Z M19.5262494,15.951444 C19.2893354,15.951444 19.1353414,16.0626814 19.0287301,16.2295375 L19.0287301,15.9991172 L18.6220278,15.9991172 L18.6220278,17.8979 L19.0326787,17.8979 L19.0326787,16.8331991 C19.0326787,16.5195493 19.1669299,16.3447477 19.4354324,16.3447477 C19.5183522,16.3447477 19.6052207,16.356666 19.6920891,16.3924208 L19.8184432,16.0030899 C19.7274288,15.967335 19.6089718,15.951444 19.5262494,15.951444 Z M8.5269275,16.1500822 C8.32949922,16.018981 8.05704819,15.951444 7.75715463,15.951444 C7.27937819,15.951444 6.97139007,16.1818643 6.97139007,16.5590783 C6.97139007,16.8689539 7.20040687,17.0596466 7.6229034,17.1192381 L7.81638311,17.1470475 C8.04125393,17.1788296 8.14806263,17.238421 8.14806263,17.3456857 C8.14806263,17.492678 7.99781971,17.576106 7.71766897,17.576106 C7.43337225,17.576106 7.22804683,17.4847324 7.08984704,17.3774678 L6.89636732,17.6992617 C7.12143556,17.8659192 7.40573229,17.9455731 7.71372041,17.9455731 C8.25842504,17.9455731 8.57431029,17.6873434 8.57431029,17.3258219 C8.57431029,16.9921096 8.32555065,16.817308 7.91509725,16.7577165 L7.72161754,16.7299072 C7.54393208,16.7060706 7.40178372,16.6705144 7.40178372,16.5433859 C7.40178372,16.4043391 7.53603495,16.3209111 7.76110319,16.3209111 C8.0019657,16.3209111 8.23473364,16.4122847 8.34924205,16.4837944 L8.5269275,16.1500822 Z M13.8213617,15.951444 C13.5844478,15.951444 13.4304537,16.0626814 13.3238425,16.2295375 L13.3238425,15.9991172 L12.9171402,15.9991172 L12.9171402,17.8979 L13.327791,17.8979 L13.327791,16.8331991 C13.327791,16.5195493 13.4620423,16.3447477 13.7305447,16.3447477 C13.8134646,16.3447477 13.9003331,16.356666 13.9870041,16.3924208 L14.1133582,16.0030899 C14.0225412,15.967335 13.9040842,15.951444 13.8213617,15.951444 Z M10.3193789,15.9991172 L9.64812271,15.9991172 L9.64812271,15.4230663 L9.23372075,15.4230663 L9.23372075,15.9991172 L8.85070988,15.9991172 L8.85070988,16.3765298 L9.23372075,16.3765298 L9.23372075,17.2423938 C9.23372075,17.6833707 9.40350907,17.9455731 9.88898522,17.9455731 C10.0666707,17.9455731 10.2719961,17.8897558 10.4022988,17.7985808 L10.2838418,17.4450048 C10.1614362,17.5165146 10.027185,17.5522694 9.92057374,17.5522694 C9.71524833,17.5522694 9.64812271,17.425141 9.64812271,17.2344483 L9.64812271,16.3765298 L10.3193789,16.3765298 L10.3193789,15.9991172 Z M4.18409758,17.8979 L4.18409758,16.7060706 C4.18409758,16.2573469 3.89980085,15.9554168 3.44196467,15.951444 C3.20110216,15.9474712 2.95234253,16.0229538 2.77860564,16.289129 C2.64830298,16.0785725 2.44297756,15.951444 2.1549297,15.951444 C1.95355285,15.951444 1.75612457,16.0110355 1.60213051,16.2335103 L1.60213051,15.9991172 L1.19147968,15.9991172 L1.19147968,17.8979 L1.60607907,17.8979 L1.60607907,16.8451174 C1.60607907,16.5153779 1.78771309,16.3407749 2.06806125,16.3407749 C2.34031486,16.3407749 2.47851465,16.5195493 2.47851465,16.8411446 L2.47851465,17.8979 L2.89311404,17.8979 L2.89311404,16.8451174 C2.89311404,16.5153779 3.0826452,16.3407749 3.35509622,16.3407749 C3.63544439,16.3407749 3.76949819,16.5195493 3.76949819,16.8411446 L3.76949819,17.8979 L4.18409758,17.8979 L4.18409758,17.8979 Z"></path>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="35px" height="14px" viewBox="0 0 35 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-138.000000, -2.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(138.000000, 2.000000)">
<g>
<g transform="translate(0.789600, 0.592200)">
<path d="M33.952799,8.74368672 L32.2361974,8.74368672 C32.0648106,8.74368672 31.9509489,8.75012298 31.8550341,8.81508152 C31.7556725,8.87908655 31.7174017,8.97408097 31.7174017,9.09946884 C31.7174017,9.24857552 31.8013123,9.3500062 31.9233749,9.39386812 C32.0227364,9.4285524 32.1294669,9.43868355 32.2863536,9.43868355 L32.7968295,9.4523904 C33.3119407,9.46514373 33.655784,9.55394027 33.8654417,9.77050849 C33.9035937,9.80066356 33.9265324,9.83451351 33.952799,9.86836347 L33.952799,8.74368672 Z M33.952799,11.3495375 C33.724006,11.6850573 33.2781863,11.8551414 32.6746481,11.8551414 L30.8557135,11.8551414 L30.8557135,11.0075814 L32.6672792,11.0075814 C32.8469857,11.0075814 32.9727327,10.9838626 33.0484425,10.9097264 C33.1140496,10.848582 33.1598082,10.7597854 33.1598082,10.6519185 C33.1598082,10.5367809 33.1140496,10.4453622 33.044758,10.3905348 C32.9764172,10.3302247 32.8769368,10.302811 32.7129189,10.302811 C31.8285297,10.2726559 30.7252124,10.3302247 30.7252124,9.07944492 C30.7252124,8.50614107 31.0881911,7.90268214 32.0765771,7.90268214 L33.952799,7.90268214 L33.952799,7.11626659 L32.2095742,7.11626659 C31.6835284,7.11626659 31.3014143,7.24260798 31.0307848,7.43903308 L31.0307848,7.11626659 L28.452495,7.11626659 C28.0401921,7.11626659 27.5562205,7.21876998 27.3273086,7.43903308 L27.3273086,7.11626659 L22.7231603,7.11626659 L22.7231603,7.43903308 C22.3567348,7.17395454 21.7384587,7.11626659 21.4530914,7.11626659 L18.4161458,7.11626659 L18.4161458,7.43903308 C18.126262,7.15750632 17.4816004,7.11626659 17.0886707,7.11626659 L13.6898161,7.11626659 L12.9120385,7.9603701 L12.1835852,7.11626659 L7.10639979,7.11626659 L7.10639979,12.6314258 L12.0880269,12.6314258 L12.8894563,11.773973 L13.644414,12.6314258 L16.715114,12.6341672 L16.715114,11.3367842 L17.017002,11.3367842 C17.4244319,11.3431012 17.9049567,11.326653 18.3289073,11.142862 L18.3289073,12.6313066 L20.8616762,12.6313066 L20.8616762,11.1938754 L20.9838576,11.1938754 C21.1397935,11.1938754 21.1551256,11.2003116 21.1551256,11.3565697 L21.1551256,12.6311875 L28.8492281,12.6311875 C29.3377162,12.6311875 29.848311,12.5057996 30.1310635,12.2782659 L30.1310635,12.6311875 L32.5716021,12.6311875 C33.0794632,12.6311875 33.575439,12.5597926 33.952799,12.3769552 L33.952799,11.3495375 Z M30.1957199,9.77050849 C30.3791109,9.9608549 30.4774027,10.2011419 30.4774027,10.6079374 C30.4774027,11.4582388 29.9476725,11.8551414 28.9977951,11.8551414 L27.1632907,11.8551414 L27.1632907,11.0075814 L28.9904261,11.0075814 C29.169063,11.0075814 29.2957609,10.9838626 29.375155,10.9097264 C29.4399302,10.848582 29.4864019,10.7597854 29.4864019,10.6519185 C29.4864019,10.5367809 29.4361269,10.4453622 29.3714706,10.3905348 C29.2994453,10.3302247 29.2000838,10.302811 29.0360659,10.302811 C28.1552423,10.2726559 27.0521627,10.3302247 27.0521627,9.07944492 C27.0521627,8.50614107 27.411338,7.90268214 28.3987732,7.90268214 L30.2869994,7.90268214 L30.2869994,8.7439251 L28.5592255,8.7439251 C28.3879576,8.7439251 28.2765918,8.75036136 28.1818655,8.8153199 C28.0787007,8.87932493 28.0404298,8.97431935 28.0404298,9.09970722 C28.0404298,9.2488139 28.1280249,9.35024458 28.2465219,9.3941065 C28.3458834,9.42879078 28.4526139,9.43892193 28.6130662,9.43892193 L29.1200953,9.45262878 C29.6314033,9.46514373 29.9823778,9.55382108 30.1957199,9.77050849 Z M21.6967411,9.52640739 C21.5707564,9.60137789 21.4149394,9.60781415 21.2316672,9.60781415 L20.0874642,9.60781415 L20.0874642,8.7200871 L21.2472371,8.7200871 C21.4149394,8.7200871 21.5827606,8.7236628 21.6967411,8.7914819 C21.8188037,8.85548693 21.8917798,8.97789505 21.8917798,9.14702565 C21.8917798,9.31615624 21.8188037,9.4523904 21.6967411,9.52640739 Z M22.2655742,10.0183045 C22.4752318,10.0958972 22.6466186,10.2349919 22.7269636,10.3501294 C22.8599607,10.543098 22.879215,10.7231941 22.8830183,11.0715864 L22.8830183,11.8551414 L21.9374195,11.8551414 L21.9374195,11.3606222 C21.9374195,11.1228381 21.9602394,10.7707509 21.7851682,10.5869599 C21.6475358,10.4453622 21.4377593,10.4115123 21.0941537,10.4115123 L20.0875831,10.4115123 L20.0875831,11.8551414 L19.1411524,11.8551414 L19.1411524,7.90256295 L21.3156967,7.90256295 C21.7925371,7.90256295 22.1398271,7.92365958 22.4489652,8.08909529 C22.7462179,8.26919137 22.9331745,8.51591465 22.9331745,8.96681038 C22.9330556,9.597683 22.5135026,9.91961517 22.2655742,10.0183045 Z M26.5989741,7.90256295 L26.5989741,8.71996791 L24.393409,8.71996791 L24.393409,9.43856436 L26.5451335,9.43856436 L26.5451335,10.2450038 L24.393409,10.2450038 L24.393409,11.0314194 L26.5989741,11.0349951 L26.5989741,11.8551414 L23.4554169,11.8551414 L23.4554169,7.90256295 L26.5989741,7.90256295 Z M17.1006749,9.72664657 L15.8834958,9.72664657 L15.8834958,8.7200871 L17.1116094,8.7200871 C17.4516494,8.7200871 17.6876925,8.85906263 17.6876925,9.2047136 C17.6876925,9.5465505 17.4625839,9.72664657 17.1006749,9.72664657 Z M14.9453848,11.4956644 L13.4992938,9.88564602 L14.9453848,8.32676013 L14.9453848,11.4956644 Z M11.2108878,11.0314194 L8.89514552,11.0314194 L8.89514552,10.2450038 L10.9629594,10.2450038 L10.9629594,9.43856436 L8.89514552,9.43856436 L8.89514552,8.71996791 L11.2565276,8.71996791 L12.2867501,9.87181998 L11.2108878,11.0314194 Z M18.6988984,9.2047136 C18.6988984,10.3026918 17.882018,10.5293912 17.0587196,10.5293912 L15.8834958,10.5293912 L15.8834958,11.8551414 L14.0527948,11.8551414 L12.8930219,10.5466737 L11.6877282,11.8551414 L7.9569157,11.8551414 L7.9569157,7.90256295 L11.7451345,7.90256295 L12.9039565,9.19815815 L14.1020001,7.90256295 L17.1116094,7.90256295 C17.8590793,7.90256295 18.6988984,8.11007273 18.6988984,9.2047136 Z"></path>
<path d="M2.98601802,3.03341453 L2.3487502,1.47614827 L1.71512458,3.03341453 L2.98601802,3.03341453 Z M17.0249436,2.41331221 C16.8969966,2.4911932 16.745669,2.49378531 16.5643813,2.49378531 L15.4333014,2.49378531 L15.4333014,1.62613692 L16.5797725,1.62613692 C16.7420268,1.62613692 16.9113304,1.63344194 17.0213014,1.69659505 C17.1420815,1.75350355 17.2168054,1.87462557 17.2168054,2.0419342 C17.2168054,2.21265969 17.1457237,2.35004128 17.0249436,2.41331221 Z M25.093948,3.03341453 L24.4496307,1.47614827 L23.8088382,3.03341453 L25.093948,3.03341453 Z M10.0528294,4.71899002 L9.09833758,4.71899002 L9.09481287,1.65959864 L7.74473091,4.71899002 L6.92723284,4.71899002 L5.57362616,1.65688871 L5.57362616,4.71899002 L3.67991621,4.71899002 L3.322158,3.84768912 L1.38356672,3.84768912 L1.02216631,4.71899002 L0.0109266054,4.71899002 L1.6782326,0.812687093 L3.06156434,0.812687093 L4.64509969,4.51115029 L4.64509969,0.812687093 L6.16472027,0.812687093 L7.383213,3.46264363 L8.50254386,0.812687093 L10.0527119,0.812687093 L10.0527119,4.71899002 L10.0528294,4.71899002 Z M13.8570505,4.71899002 L10.7467276,4.71899002 L10.7467276,0.812687093 L13.8570505,0.812687093 L13.8570505,1.62613692 L11.6778389,1.62613692 L11.6778389,2.33024702 L13.8047672,2.33024702 L13.8047672,3.13097196 L11.6778389,3.13097196 L11.6778389,3.91107788 L13.8570505,3.91107788 L13.8570505,4.71899002 L13.8570505,4.71899002 Z M18.2424964,1.86472844 C18.2424964,2.48754069 17.8279903,2.80931523 17.5864301,2.90593007 C17.7901584,2.98369324 17.9641617,3.12107483 18.0469924,3.23489182 C18.1784642,3.42918191 18.2011398,3.60273515 18.2011398,3.95160898 L18.2011398,4.71899002 L17.2620392,4.71899002 L17.2585145,4.22637216 C17.2585145,3.99131532 17.2809551,3.65328121 17.111534,3.46535356 C16.9754801,3.32797197 16.7681096,3.29816276 16.4329096,3.29816276 L15.4334189,3.29816276 L15.4334189,4.71899002 L14.5024251,4.71899002 L14.5024251,0.812687093 L16.6439223,0.812687093 C17.1197583,0.812687093 17.4703496,0.825294152 17.77136,0.999789978 C18.0659084,1.1742858 18.2424964,1.42901908 18.2424964,1.86472844 Z M19.7325094,4.71899002 L18.7824822,4.71899002 L18.7824822,0.812687093 L19.7325094,0.812687093 L19.7325094,4.71899002 Z M30.754047,4.71899002 L29.4346301,4.71899002 L27.6698071,1.7870831 L27.6698071,4.71899002 L25.7736298,4.71899002 L25.4112895,3.84768912 L23.4771628,3.84768912 L23.1256316,4.71899002 L22.0361433,4.71899002 C21.5835704,4.71899002 21.0105698,4.61860484 20.6860613,4.28693317 C20.3588506,3.95526149 20.1886071,3.50600249 20.1886071,2.79564777 C20.1886071,2.2163122 20.2903537,1.68669792 20.690526,1.26819072 C20.9915363,0.956431123 21.4629077,0.812687093 22.1045227,0.812687093 L23.0059089,0.812687093 L23.0059089,1.64970151 L22.1234387,1.64970151 C21.7836565,1.64970151 21.5917947,1.70036539 21.4069823,1.88110583 C21.2482528,2.04558671 21.1393392,2.35652154 21.1393392,2.76595638 C21.1393392,3.18446359 21.2222874,3.48620823 21.3953508,3.68332607 C21.538689,3.83790981 21.7991652,3.88480335 22.0442501,3.88480335 L22.4623984,3.88480335 L23.7746485,0.812804916 L25.1697292,0.812804916 L26.7460977,4.5076156 L26.7460977,0.812804916 L28.1637366,0.812804916 L29.8003776,3.53333742 L29.8003776,0.812804916 L30.754047,0.812804916 L30.754047,4.71899002 Z M0,5.48625324 L1.59093724,5.48625324 L1.94963538,4.61860484 L2.75268213,4.61860484 L3.11044033,5.48625324 L6.24050156,5.48625324 L6.24050156,4.82290988 L6.51989369,5.48908099 L8.14478565,5.48908099 L8.42417778,4.81301275 L8.42417778,5.48625324 L16.2029809,5.48625324 L16.1993387,4.06200911 L16.3498439,4.06200911 C16.4552327,4.06566162 16.4860152,4.07544093 16.4860152,4.24993675 L16.4860152,5.48625324 L20.5092383,5.48625324 L20.5092383,5.15469938 C20.8337468,5.32907739 21.3384854,5.48625324 22.0026585,5.48625324 L23.695225,5.48625324 L24.0574478,4.61860484 L24.8604946,4.61860484 L25.2147281,5.48625324 L28.4763785,5.48625324 L28.4763785,4.66208152 L28.9703081,5.48625324 L31.5839991,5.48625324 L31.5839991,0.038118853 L28.9973309,0.038118853 L28.9973309,0.681550122 L28.635108,0.038118853 L25.9808828,0.038118853 L25.9808828,0.681550122 L25.6482676,0.038118853 L22.0630486,0.038118853 C21.4629077,0.038118853 20.9353759,0.122126634 20.5092383,0.356240887 L20.5092383,0.038118853 L18.0351259,0.038118853 L18.0351259,0.356240887 C17.7639581,0.114939433 17.3944508,0.038118853 16.983587,0.038118853 L7.94469953,0.038118853 L7.33821419,1.44527865 L6.71539768,0.038118853 L3.86837078,0.038118853 L3.86837078,0.681550122 L3.55561139,0.038118853 L1.12755518,0.038118853 L0,2.62845697 L0,5.48625324 L0,5.48625324 Z"></path>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="23px" height="15px" viewBox="0 0 23 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-147.000000, -1.000000)">
<g>
<g transform="translate(147.000000, 1.000000)">
<path d="M22.8745698,8.4 C22.8745698,8.4 16.6411308,12.8517198 5.22456981,14.8440998 L22.8745698,14.8440998 L22.8745698,8.4" fill="#FFFFFE"></path>
<path d="M22.83387,0.170044838 C22.83387,0.336418701 22.83387,14.6626636 22.83387,14.8299552 C22.6691545,14.8299552 0.331359855,14.8299552 0.16612997,14.8299552 C0.16612997,14.6635813 0.165358469,0.337729764 0.165358469,0.170569263 C0.330974104,0.170569263 22.6673543,0.170044838 22.83387,0.170044838 Z M22.916935,0 L0,0.00235991295 L0,15 L23,15 L22.9987142,0 L22.916935,0 L22.916935,0 Z" fill="#FFFFFE"></path>
<path d="M2.8000699,7.07888974 C2.5938899,7.26517973 2.32595991,7.34642973 1.90189993,7.34642973 L1.72574994,7.34642973 L1.72574994,5.12134981 L1.90189993,5.12134981 C2.32595991,5.12134981 2.58335991,5.19713981 2.8000699,5.3934398 C3.02717989,5.59558979 3.16367988,5.90875978 3.16367988,6.23102977 C3.16367988,6.55407976 3.02717989,6.87686975 2.8000699,7.07888974 Z M2.03332993,4.55116983 L1.06989996,4.55116983 L1.06989996,7.91608971 L2.02825993,7.91608971 C2.53785991,7.91608971 2.90588989,7.79583971 3.22893988,7.52764972 C3.61269987,7.20992974 3.83980986,6.73113975 3.83980986,6.23596977 C3.83980986,5.24289981 3.09776989,4.55116983 2.03332993,4.55116983 L2.03332993,4.55116983 Z" fill="#FFFFFE"></path>
<polygon fill="#FFFFFE" points="4.14179985 7.91608971 4.79816982 7.91608971 4.79816982 4.55116983 4.14179985 4.55116983"></polygon>
<path d="M6.40301977,5.84245979 C6.00911978,5.69672979 5.89341978,5.60052979 5.89341978,5.4187898 C5.89341978,5.20688981 6.09946978,5.04581981 6.38247977,5.04581981 C6.57903976,5.04581981 6.74062975,5.12654981 6.91170975,5.3182998 L7.25503973,4.86862982 C6.97293974,4.62175983 6.63519976,4.49552984 6.26638977,4.49552984 C5.67098979,4.49552984 5.21689981,4.90905982 5.21689981,5.4597398 C5.21689981,5.92331978 5.4282798,6.16056977 6.04473978,6.38247977 C6.30161977,6.47308976 6.43239976,6.53353976 6.49843976,6.57409976 C6.62960976,6.65976976 6.69525975,6.78092975 6.69525975,6.92223975 C6.69525975,7.19484974 6.47841976,7.39686973 6.18565977,7.39686973 C5.87261978,7.39686973 5.62041979,7.24034973 5.4693598,6.94810975 L5.04529981,7.35643973 C5.3476798,7.80025971 5.71089979,7.99694971 6.21022977,7.99694971 C6.89233975,7.99694971 7.37086973,7.54350972 7.37086973,6.89207975 C7.37086973,6.35751977 7.14960974,6.11545978 6.40301977,5.84245979" fill="#FFFFFE"></path>
<path d="M7.57782972,6.23596977 C7.57782972,7.22500973 8.35444969,7.99187971 9.35388966,7.99187971 C9.63650965,7.99187971 9.87843964,7.93636971 10.1769196,7.79583971 L10.1769196,7.02324974 C9.91444964,7.28584973 9.68200964,7.39179973 9.38443966,7.39179973 C8.72338968,7.39179973 8.2542197,6.91248975 8.2542197,6.23102977 C8.2542197,5.5850598 8.73833968,5.07545981 9.35388966,5.07545981 C9.66705965,5.07545981 9.90391964,5.18712981 10.1769196,5.4540198 L10.1769196,4.68181983 C9.88870964,4.53569983 9.65184965,4.47511984 9.36948966,4.47511984 C8.37511969,4.47511984 7.57782972,5.25758981 7.57782972,6.23596977" fill="#FFFFFE"></path>
<polyline fill="#FFFFFE" points="15.3809494 6.81134975 14.4835595 4.55116983 13.7666095 4.55116983 15.1945294 8.00240971 15.5477394 8.00240971 17.0013994 4.55116983 16.2899094 4.55116983 15.3809494 6.81134975"></polyline>
<polyline fill="#FFFFFE" points="17.2981894 7.91608971 19.1595293 7.91608971 19.1595293 7.34642973 17.9540393 7.34642973 17.9540393 6.43811976 19.1150693 6.43811976 19.1150693 5.86819978 17.9540393 5.86819978 17.9540393 5.12134981 19.1595293 5.12134981 19.1595293 4.55116983 17.2981894 4.55116983 17.2981894 7.91608971"></polyline>
<path d="M20.4415893,6.10037978 L20.2498393,6.10037978 L20.2498393,5.08117981 L20.4519892,5.08117981 C20.8607092,5.08117981 21.0828792,5.25251981 21.0828792,5.5799898 C21.0828792,5.91824978 20.8607092,6.10037978 20.4415893,6.10037978 Z M21.7582292,5.5446298 C21.7582292,4.91464982 21.3244192,4.55116983 20.5674292,4.55116983 L19.5942493,4.55116983 L19.5942493,7.91608971 L20.2498393,7.91608971 L20.2498393,6.56434976 L20.3353793,6.56434976 L21.2438192,7.91608971 L22.0509892,7.91608971 L20.9917492,6.49856976 C21.4861392,6.39794977 21.7582292,6.05981978 21.7582292,5.5446298 L21.7582292,5.5446298 Z" fill="#FFFFFE"></path>
<path d="M22.08255,4.70365983 L22.07059,4.70365983 L22.07059,4.62643983 L22.08333,4.62643983 C22.11817,4.62643983 22.13637,4.63891983 22.13637,4.66439983 C22.13637,4.69052983 22.11791,4.70365983 22.08255,4.70365983 Z M22.20696,4.66335983 C22.20696,4.60433983 22.16627,4.57209983 22.09503,4.57209983 L22,4.57209983 L22,4.86784982 L22.07059,4.86784982 L22.07059,4.75318983 L22.1534,4.86784982 L22.23959,4.86784982 L22.14235,4.74590983 C22.18395,4.73472983 22.20696,4.70443983 22.20696,4.66335983 L22.20696,4.66335983 Z" fill="#FFFFFE"></path>
<path d="M22.10649,4.93115982 C21.99352,4.93115982 21.90109,4.83716982 21.90109,4.71977983 C21.90109,4.60199983 21.99235,4.50800983 22.10649,4.50800983 C22.21894,4.50800983 22.31059,4.60420983 22.31059,4.71977983 C22.31059,4.83612982 22.21894,4.93115982 22.10649,4.93115982 Z M22.10753,4.46159984 C21.96388,4.46159984 21.85,4.57612983 21.85,4.71938983 C21.85,4.86251982 21.96518,4.97730982 22.10753,4.97730982 C22.24741,4.97730982 22.36207,4.86121982 22.36207,4.71938983 C22.36207,4.57820983 22.24741,4.46159984 22.10753,4.46159984 L22.10753,4.46159984 Z" fill="#FFFFFE"></path>
<circle fill="#FFFFFF" cx="12.18" cy="6.24" r="1.81"></circle>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9779 5.91163H16.2622L16.481 4.84897H17.088C17.2865 4.84897 17.4314 4.87722 17.5219 4.93662C17.6139 4.99529 17.6588 5.08801 17.6588 5.21623C17.6588 5.24158 17.6545 5.26693 17.653 5.29301C17.6472 5.32054 17.6443 5.35096 17.6378 5.38356C17.5987 5.5632 17.5277 5.69576 17.4205 5.78196C17.3111 5.86816 17.1641 5.91163 16.9779 5.91163ZM11.2467 7.41471C11.4176 7.41471 11.556 7.35531 11.6646 7.23723C11.7733 7.11988 11.8501 6.94169 11.8979 6.70554C11.9051 6.6686 11.9109 6.63021 11.9145 6.59109C11.9174 6.55342 11.9196 6.51793 11.9196 6.48533C11.9196 6.34842 11.8848 6.24122 11.8138 6.16516C11.7436 6.0891 11.6443 6.05071 11.5154 6.05071C11.3452 6.05071 11.2068 6.11083 11.0982 6.23035C10.9888 6.3506 10.9113 6.53097 10.862 6.77218C10.8555 6.80913 10.8497 6.84679 10.8453 6.88229C10.8417 6.91923 10.8403 6.954 10.841 6.98587C10.841 7.12278 10.8765 7.22854 10.9475 7.30315C11.017 7.37776 11.1163 7.41471 11.2467 7.41471ZM18.975 7.44223C19.1728 7.50525 19.4277 7.28432 19.54 6.94893C19.6552 6.61355 19.5849 6.29047 19.3857 6.2289C19.1894 6.16661 18.9337 6.38609 18.8222 6.7222C18.7048 7.05831 18.7765 7.38138 18.975 7.44223ZM13.5284 10.4455H14.5281C14.6099 10.4571 14.6563 10.4245 14.6621 10.3477L14.7302 10.1043H13.6219L13.5284 10.4455ZM16.6056 11.8834H17.1641L17.3068 11.3778H16.7483L16.6056 11.8834ZM16.833 11.0982C16.833 11.0982 17.1952 10.92 17.4415 10.9047C17.5147 10.6367 17.5857 10.402 17.5857 10.402H17.025L16.833 11.0982ZM17.1134 10.0891C17.1134 10.0891 17.4386 9.96378 17.7204 9.92829C17.7827 9.69576 17.8631 9.4234 17.8631 9.4234H17.3039L17.1134 10.0891ZM13.6921 9.83484C13.6921 9.83484 13.8761 9.70228 14.1833 9.69721C14.4911 9.69286 14.8417 9.69721 14.8417 9.69721L14.9308 9.37197H13.8247L13.6921 9.83484ZM26.1101 1.55161L23.193 14.4585C23.004 15.2872 22.1999 15.9587 21.3705 16H14.891C14.05 15.987 13.527 15.2995 13.7189 14.4527L13.9457 13.4488H13.4372L13.2104 14.4527C13.0185 15.2988 13.5407 15.987 14.3825 16H7.49366C6.65339 15.987 6.12966 15.2995 6.32235 14.4527L6.99964 11.4567H6.40565L5.72836 14.4527C5.53568 15.2988 6.0594 15.987 6.9004 16H1.20536C0.528794 15.9906 0.05795 15.5407 0 14.925V14.686C0.005795 14.6106 0.0159363 14.5331 0.0340456 14.4549L2.95183 1.54727C3.14741 0.691778 4.24267 0 5.09743 0L10.7577 0.00144865C9.908 0.0188337 8.8381 0.703369 8.64614 1.54727L8.09852 3.97175H8.69178L9.24013 1.54727C9.43209 0.702644 10.5013 0.0188337 11.351 0.00144865C11.3626 0.00072427 11.3734 0 11.3843 0L15.7696 0.00217297H18.2354C18.2304 0.00217297 18.2253 0.00289764 18.2209 0.00289764C17.3734 0.0289751 16.318 0.708439 16.1253 1.54654L15.577 3.97103H16.0855L16.6338 1.54654C16.8258 0.708439 17.8812 0.0289751 18.7287 0.00289764C18.7331 0.00289764 18.7374 0.00217297 18.7439 0.00217297C18.7439 0.00217297 18.7447 0.00217297 18.7454 0.00217297L24.9134 0.00362196C25.7675 0.00289758 26.305 0.696849 26.1101 1.55161ZM6.04129 6.60051L6.56067 4.09562H5.78051L5.26621 6.57153C5.2213 6.79029 5.12061 6.95762 4.96632 7.0757C4.81202 7.19522 4.61355 7.25389 4.37233 7.25389C4.16154 7.25389 4.01087 7.19377 3.91815 7.0728C3.8544 6.99167 3.82325 6.88808 3.82398 6.76132C3.82325 6.70409 3.82905 6.64035 3.84498 6.57081L4.35784 4.09489H3.57334L3.05397 6.59978C3.02861 6.72148 3.0163 6.8352 3.0163 6.94096C3.0163 7.19594 3.09091 7.40746 3.23941 7.57334C3.45382 7.80732 3.78993 7.92394 4.24919 7.92394C4.73669 7.92394 5.1351 7.80949 5.44296 7.58204C5.75371 7.35096 5.95436 7.02572 6.04129 6.60051ZM8.4962 5.76168C8.39044 5.6255 8.22238 5.55741 7.98913 5.55741C7.73198 5.55741 7.51394 5.65302 7.33357 5.84498L7.25462 5.93698L7.31764 5.61463H6.76349L6.31655 7.85078H6.88664L7.14089 6.56646C7.17349 6.40492 7.24013 6.27816 7.34082 6.18689C7.44151 6.09634 7.56465 6.05071 7.71097 6.05071C7.8305 6.05071 7.91308 6.08475 7.95581 6.15357C8 6.22166 8.00797 6.32814 7.97972 6.47084L7.70373 7.8515H8.27381L8.57805 6.32814C8.62803 6.0862 8.59978 5.89859 8.4962 5.76168ZM19.2807 7.7117L19.385 7.83267L20.0934 7.85078L20.557 5.74285L19.9421 5.79718L19.6827 5.9761C19.4111 5.76385 19.1626 5.63202 18.6845 5.8544C18.0319 6.15647 17.4864 8.47664 19.2807 7.7117ZM19.829 9.22782C19.7457 9.22782 19.7052 9.19667 19.7102 9.13003L19.6806 8.8707H18.975L18.9989 9.44006C19.0091 9.60377 19.1097 9.67765 19.3075 9.66679H19.8254L19.9529 9.22782H19.829V9.22782ZM15.1141 7.85078H15.8609L16.1275 6.54111H16.9909C17.3379 6.54111 17.64 6.43535 17.8964 6.226C18.1507 6.01521 18.3151 5.7385 18.3861 5.3937C18.4006 5.33068 18.4093 5.26983 18.4172 5.21043C18.4223 5.15031 18.4259 5.09381 18.4259 5.04455V5.03658C18.4259 4.77581 18.3441 4.57588 18.1796 4.4368C18.0138 4.29917 17.7754 4.22818 17.4669 4.22818H15.8566L15.1141 7.85078ZM12.6708 7.85078H13.2401L13.4951 6.56646C13.527 6.40492 13.5936 6.27816 13.6943 6.18689C13.7957 6.09634 13.9189 6.05071 14.0652 6.05071C14.184 6.05071 14.2644 6.08475 14.31 6.15357C14.3542 6.22166 14.3607 6.32814 14.3325 6.47084L14.0565 7.8515H14.6266L14.9308 6.32814C14.9808 6.08693 14.9511 5.89859 14.849 5.76241C14.7432 5.62622 14.5744 5.55813 14.3426 5.55813C14.0862 5.55813 13.8667 5.65375 13.6871 5.84571L13.6096 5.9377L13.6726 5.61536H13.1177L12.6708 7.85078ZM12.0478 9.16407L12.2035 8.88953H11.4582L11.18 9.30677C11.1489 9.37197 11.0829 9.40456 10.9837 9.40456H10.8765L10.7555 9.84353H11.3097C11.4915 9.8544 11.6422 9.7682 11.7646 9.58421H12.828L12.9417 9.16407H12.0478V9.16407ZM9.95002 5.61536H9.33575L8.85549 7.85005H9.46831L9.95002 5.61536ZM10.1485 4.80044H9.52843L9.41326 5.34372H10.0326L10.1485 4.80044ZM10.2506 7.05759C10.2514 7.32054 10.3325 7.52698 10.494 7.68128C10.6541 7.83267 10.8721 7.90873 11.1489 7.90873C11.4835 7.90873 11.7704 7.80442 12.0094 7.59363C12.2492 7.38501 12.4035 7.0996 12.4745 6.74248C12.4846 6.68816 12.4926 6.6331 12.5005 6.57515C12.5063 6.51865 12.51 6.46577 12.51 6.42014C12.51 6.15429 12.4296 5.94422 12.2695 5.78921C12.1094 5.63492 11.8906 5.55741 11.6139 5.55741C11.2771 5.55741 10.9888 5.66461 10.7505 5.8783C10.5114 6.09055 10.3571 6.37885 10.2832 6.74248C10.2731 6.79391 10.2651 6.84824 10.2586 6.90547C10.2535 6.96052 10.2506 7.01123 10.2506 7.05759ZM12.1746 12.1565H11.5502C11.3908 12.1673 11.3329 12.1181 11.3763 12.0101L11.5545 11.3604H12.3216L12.4462 10.904H11.6798L11.8001 10.4636H12.5875L12.7121 10.008H10.7534L10.6302 10.4636H11.0982L10.9786 10.9026H10.4882L10.3644 11.3604H10.854L10.6266 12.1905C10.5556 12.4513 10.6331 12.5817 10.8613 12.5817H12.0601L12.1746 12.1565ZM15.2879 11.0163H14.7577L14.707 11.1952C14.707 11.2488 14.6643 11.2771 14.5781 11.2771H14.4078L14.4209 11.0011H13.7812L13.7334 12.2702C13.7305 12.4868 13.837 12.5882 14.0507 12.5802H14.8171L14.9221 12.205H14.6034C14.4622 12.205 14.3933 12.1659 14.3999 12.092L14.4013 11.6197H14.7418C14.9996 11.6081 15.159 11.4951 15.2191 11.2771L15.2879 11.0163ZM15.3191 10.5925L15.7928 8.87649H14.5527C14.218 8.87649 13.8479 9.15393 13.8479 9.15393L13.8776 8.88664H13.222L12.2919 12.3187C12.2477 12.4832 12.3593 12.5628 12.6295 12.5628H13.3321L13.4343 12.1883H13.1576C13.0858 12.1883 13.0598 12.1543 13.0786 12.0905L13.4075 10.8852H14.812C15.1112 10.8859 15.28 10.7896 15.3191 10.5925ZM17.9609 12.3709L18.0978 11.8827H17.9522L18.6519 9.42267H18.7968L18.9439 8.90185C18.9439 8.90185 18.2941 8.90185 18.0181 8.90185C17.7414 8.90185 17.3597 9.09381 17.3597 9.09381L17.3922 8.90185H16.6432L16.4955 9.42267H16.6396L15.9399 11.8827H15.7965L15.6581 12.3709H17.0902L17.0293 12.5824H17.7544L17.8153 12.3709H17.9609ZM21.0518 9.81456H18.77L18.6346 10.2869H19.4234L19.2974 10.7251H18.51L18.3738 11.1959H19.1011L18.5382 12.0101C18.4752 12.0855 18.402 12.1239 18.3173 12.1239H18.1116L17.9804 12.5802H18.6454C18.8207 12.5918 18.9533 12.5208 19.0373 12.3687L19.3966 11.8305L19.5024 12.3347C19.5125 12.4991 19.6284 12.5737 19.853 12.5621H20.2883L20.418 12.1058H20.2948C20.2115 12.1058 20.163 12.0797 20.1521 12.0246L20.0601 11.4698H19.6668L19.8493 11.1938H20.657L20.7932 10.7229H20.0674L20.1927 10.284H20.9185L21.0518 9.81456ZM23.0887 5.61536H22.4339L21.7863 7.12495L21.7494 5.61536H21.4053L20.996 5.62115L21.1916 8.02753C21.0272 8.35494 20.7396 9.09236 20.2086 9.25534L20.1536 9.63854C20.7859 9.66172 21.0474 9.34879 21.1807 9.21333C21.3133 9.07715 21.5386 8.7845 21.7733 8.28178L23.0887 5.61536Z" fill="white" />
</svg>
</span>
<span class="mr3">
<svg width="30px" height="12px" viewBox="0 0 30 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-194.000000, -3.000000)" fill="#FFFFFF">
<g>
<g transform="translate(193.000000, 2.000000)">
<g transform="translate(0.935000, 0.922000)">
<path d="M5.44560504,1.66856709 C5.77944345,1.25620169 6.00580682,0.702386739 5.94612488,0.136588517 C5.45773165,0.160555053 4.86162559,0.4549675 4.51661168,0.86780283 C4.20678871,1.22119175 3.93263223,1.79803338 4.00396523,2.34010003 C4.55227817,2.38709324 5.10011557,2.06941915 5.44560504,1.66856709"></path>
<path d="M5.93970491,2.44606971 C5.14362869,2.39907651 4.46667858,2.89250519 4.08647372,2.89250519 C3.70603109,2.89250519 3.12371608,2.46956632 2.49384574,2.48107965 C1.67422964,2.49282796 0.913819926,2.95077677 0.497710794,3.67917149 C-0.357809581,5.13643086 0.272060756,7.29788345 1.10404124,8.48446195 C1.50802377,9.07164208 1.99499034,9.71803366 2.63651173,9.69500698 C3.2426044,9.67151038 3.48038105,9.30707805 4.2170131,9.30707805 C4.95340738,9.30707805 5.16740636,9.69500698 5.80916553,9.68325868 C6.47446459,9.67151038 6.89057372,9.09584358 7.29455624,8.50795855 C7.75798293,7.83877528 7.94772869,7.19261867 7.9598553,7.1571388 C7.94772869,7.14515553 6.67657474,6.66347515 6.66492368,5.21843401 C6.65279707,4.00835891 7.66287227,3.43292708 7.7104276,3.39721224 C7.14000142,2.56355273 6.24881455,2.46956632 5.93970491,2.44606971"></path>
<path d="M11.9190742,5.46256372 L13.5074222,5.46256372 C14.7127121,5.46256372 15.3986977,4.8213414 15.3986977,3.70971707 C15.3986977,2.59832771 14.7127121,1.96297954 13.5136044,1.96297954 L11.9190742,1.96297954 L11.9190742,5.46256372 Z M13.8783538,0.808591388 C15.6088922,0.808591388 16.8141821,1.98741601 16.8141821,3.70360796 C16.8141821,5.42590902 15.5841635,6.61084276 13.8350785,6.61084276 L11.9190742,6.61084276 L11.9190742,9.62193255 L10.5347386,9.62193255 L10.5347386,0.808591388 L13.8783538,0.808591388 L13.8783538,0.808591388 Z"></path>
<path d="M21.3602338,7.22786357 L21.3602338,6.7330251 L19.8213433,6.83077097 C18.9560741,6.88575302 18.5050118,7.20319214 18.5050118,7.75912179 C18.5050118,8.29648912 18.9746207,8.64470879 19.7100639,8.64470879 C20.6495194,8.64470879 21.3602338,8.05212444 21.3602338,7.22786357 Z M17.1575315,7.79577649 C17.1575315,6.66582481 18.028983,6.01849337 19.6358775,5.9207475 L21.3602338,5.81689251 L21.3602338,5.32839811 C21.3602338,4.61363142 20.8844427,4.2228829 20.0377201,4.2228829 C19.3391323,4.2228829 18.8324302,4.57697672 18.727333,5.12068814 L17.4787678,5.12068814 C17.5160987,3.97851822 18.6036891,3.14791327 20.0748132,3.14791327 C21.656979,3.14791327 22.6891675,3.96629999 22.6891675,5.23676136 L22.6891675,9.62193255 L21.4096913,9.62193255 L21.4096913,8.56529027 L21.3787804,8.56529027 C21.0142688,9.25538552 20.2105837,9.68889787 19.3391323,9.68889787 C18.0537117,9.68889787 17.1575315,8.93183729 17.1575315,7.79577649 L17.1575315,7.79577649 Z"></path>
<path d="M23.8654485,11.9793468 L23.8654485,10.9229395 C23.9519992,10.9349228 24.161956,10.947141 24.2732355,10.947141 C24.8850348,10.947141 25.2312376,10.6907931 25.4414321,10.0310084 L25.565076,9.6402599 L23.2225005,3.22733179 L24.668658,3.22733179 L26.3005192,8.43088969 L26.3314301,8.43088969 L27.9630535,3.22733179 L29.3723557,3.22733179 L26.9432294,9.9640431 C26.3870699,11.5091798 25.750304,12.0162365 24.4030615,12.0162365 C24.2979642,12.0162365 23.9579436,12.0040182 23.8654485,11.9793468"></path>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="33px" height="10px" viewBox="0 0 33 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-244.000000, -4.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(244.000000, 4.000000)">
<g>
<g transform="translate(0.473760, 0.473760)">
<g transform="translate(0.331632, 0.430691)">
<path d="M3.82974343,0 L1.34740342,0 C1.17753427,0 1.0330729,0.126136102 1.00657621,0.297532806 L0.00260597337,6.80355876 C-0.0173572816,6.93192079 0.0799182152,7.04766922 0.207320079,7.04766922 L1.39241148,7.04766922 C1.56228064,7.04766922 1.70674201,6.92153311 1.73323869,6.74976542 L2.00401302,4.99498965 C2.03014674,4.82322196 2.17497108,4.69708585 2.34447726,4.69708585 L3.13030357,4.69708585 C4.76547563,4.69708585 5.70919314,3.88833084 5.95564859,2.28566037 C6.06671689,1.58449204 5.96036718,1.03357406 5.63914026,0.647745984 C5.2863351,0.224077076 4.6605778,0 3.82974343,0 Z M4.11612539,2.37618157 C3.98037526,3.28658744 3.29980975,3.28658744 2.64174828,3.28658744 L2.26716502,3.28658744 L2.52995405,1.58634698 C2.54556168,1.48358316 2.63267407,1.40790149 2.73430518,1.40790149 L2.90598918,1.40790149 C3.35425499,1.40790149 3.77711303,1.40790149 3.99561993,1.66907742 C4.12592554,1.82489261 4.16585205,2.05638945 4.11612539,2.37618157 Z"></path>
<path d="M11.3842784,2.45816845 L10.1609789,2.45816845 C10.056765,2.45816845 9.96674508,2.53032707 9.95068344,2.62830717 L9.89652209,2.95231354 L9.81098451,2.83487891 C9.54615418,2.47090232 8.95560869,2.34922307 8.36618377,2.34922307 C7.01439115,2.34922307 5.85982056,3.31876616 5.63495757,4.67881475 C5.51804376,5.35724731 5.68426308,6.0059675 6.09065997,6.45837378 C6.46343948,6.87434703 6.99683541,7.04766922 7.63145703,7.04766922 C8.72066048,7.04766922 9.32465293,6.38444656 9.32465293,6.38444656 L9.27011805,6.70633062 C9.24957409,6.82942475 9.34967921,6.939785 9.48003998,6.939785 L10.5819433,6.939785 C10.7571273,6.939785 10.9050438,6.81952062 10.9326848,6.65574884 L11.5938268,2.69091538 C11.6147443,2.56888242 11.5150127,2.45816845 11.3842784,2.45816845 Z M9.67912963,4.71277175 C9.56109524,5.37457953 9.0064083,5.81885028 8.29894899,5.81885028 C7.94372524,5.81885028 7.65984505,5.71096606 7.47756409,5.50651663 C7.29677723,5.30348206 7.22804835,5.01449385 7.28557144,4.69260979 C7.39576177,4.03646151 7.95978688,3.57768829 8.65641391,3.57768829 C9.00379361,3.57768829 9.28617969,3.68698738 9.47219592,3.89320541 C9.65858567,4.10154576 9.73254393,4.39230257 9.67912963,4.71277175 Z"></path>
<path d="M17.3929926,2.34922307 L16.2290678,2.34922307 C16.1180157,2.34922307 16.0136834,2.40636374 15.9507303,2.50196447 L14.3454266,4.95095477 L13.6649674,2.59756519 C13.6221734,2.4503181 13.4909622,2.34922307 13.3424212,2.34922307 L12.1986556,2.34922307 C12.0596636,2.34922307 11.963112,2.48987702 12.0073206,2.62540295 L13.2893708,6.52195678 L12.0840668,8.28416025 C11.9892835,8.42298276 12.0847741,8.61381793 12.2485229,8.61381793 L13.411033,8.61381793 C13.5213777,8.61381793 13.6246491,8.55814241 13.6872485,8.46437311 L17.5585097,2.67704932 C17.6511709,2.5385931 17.556034,2.34922307 17.3929926,2.34922307 Z"></path>
<path d="M21.4247683,0 L18.9419547,0 C18.7724409,0 18.6279731,0.126136102 18.6014753,0.297532806 L17.5974603,6.80355876 C17.5774961,6.93192079 17.674776,7.04766922 17.8014575,7.04766922 L19.0755329,7.04766922 C19.1938659,7.04766922 19.2951385,6.95937395 19.3136507,6.83917366 L19.5985935,4.99498965 C19.6247284,4.82322196 19.7695592,4.69708585 19.9390729,4.69708585 L20.7245713,4.69708585 C22.3601792,4.69708585 23.3035758,3.88833084 23.5504052,2.28566037 C23.6618414,1.58449204 23.554761,1.03357406 23.2335198,0.647745984 C22.8810619,0.224077076 22.2556397,0 21.4247683,0 Z M21.711163,2.37618157 C21.5757698,3.28658744 20.895174,3.28658744 20.2367202,3.28658744 L19.8624832,3.28658744 L20.1256469,1.58634698 C20.1412553,1.48358316 20.2276456,1.40790149 20.3296442,1.40790149 L20.5013358,1.40790149 C20.9492587,1.40790149 21.3724985,1.40790149 21.5910152,1.66907742 C21.7213266,1.82489261 21.7608919,2.05638945 21.711163,2.37618157 Z"></path>
<path d="M28.9988397,2.47774531 L27.7762275,2.47774531 C27.6712614,2.47774531 27.5819842,2.54990393 27.5662953,2.64788402 L27.5121313,2.9718904 L27.426216,2.85445577 C27.1613727,2.49047918 26.5711718,2.36879993 25.9817181,2.36879993 C24.6298593,2.36879993 23.4756058,3.33834302 23.2507318,4.69839161 C23.1341858,5.37682417 23.2996661,6.02554436 23.7060829,6.47795064 C24.0796278,6.89392389 24.6123027,7.06724608 25.2469554,7.06724608 C26.3362121,7.06724608 26.9402341,6.40402342 26.9402341,6.40402342 L26.8856966,6.72590748 C26.8651516,6.84900161 26.9652616,6.95936186 27.0963759,6.95936186 L28.1979596,6.95936186 C28.372405,6.95936186 28.5210759,6.83909748 28.5483447,6.6753257 L29.2098926,2.71049224 C29.230064,2.58845927 29.129954,2.47774531 28.9988397,2.47774531 Z M27.2936075,4.73234861 C27.1763145,5.39415639 26.6208533,5.83842714 25.9133594,5.83842714 C25.5588653,5.83842714 25.2742242,5.73054292 25.0919343,5.52609349 C24.9111386,5.32305892 24.8431534,5.03407071 24.8999322,4.71218664 C25.010875,4.05603836 25.5741807,3.59726515 26.2708418,3.59726515 C26.6182385,3.59726515 26.9006384,3.70656424 27.0866637,3.91278227 C27.2738097,4.12112261 27.3477715,4.41187943 27.2936075,4.73234861 Z"></path>
<path d="M30.5416215,0.178807062 L29.5937697,6.80357161 C29.5751976,6.93192689 29.6656943,7.04766922 29.7835426,7.04766922 L30.7364596,7.04766922 C30.8948288,7.04766922 31.0292232,6.92153975 31.0535357,6.7497811 L31.9882182,0.244468576 C32.0067903,0.1161133 31.9162936,0 31.7984453,0 L30.7313944,0 C30.6371833,0.000370969008 30.5561415,0.0760486467 30.5416215,0.178807062 Z"></path>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span>
<svg width="50px" height="27px" viewBox="0 0 143 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M140.080249,5.56113866 L135.880396,3.12148857 L131.680543,0.561855695 C130.36803,-0.193570603 128.756418,-0.186813564 127.450168,0.579592476 C126.143917,1.34599852 125.340459,2.75621677 125.341142,4.28132222 L125.341142,4.80124765 C125.340798,5.10504716 125.489075,5.38942597 125.737355,5.56113866 L127.718417,6.68097804 C127.906081,6.79378678 128.131551,6.8234047 128.341566,6.76283537 C128.551582,6.70226604 128.727517,6.55688116 128.827813,6.36102393 C128.863192,6.23010135 128.863192,6.09200388 128.827813,5.96108129 L128.827813,4.68126486 C128.81705,4.45844963 128.894547,4.24046636 129.043207,4.0754006 C129.191868,3.91033485 129.399477,3.81174924 129.620238,3.80139105 L130.095693,3.80139105 L134.057818,6.08106408 L138.019944,8.32074285 C138.420655,8.57771615 138.543955,9.11112168 138.297293,9.52057076 L138.019944,9.80053061 L134.057818,12.0402094 L130.095693,14.3198824 C129.906808,14.4375897 129.679158,14.4742299 129.463375,14.421654 C129.247592,14.3690781 129.061568,14.2316454 128.946676,14.0399226 C128.906416,13.8825265 128.906416,13.7173875 128.946676,13.5599914 L128.946676,12.9200832 C128.94736,11.3949777 128.143901,9.98475947 126.837651,9.21835343 C125.5314,8.45194739 123.919788,8.44519035 122.607275,9.20061665 L118.32818,11.680261 L114.128327,14.1199111 C112.110949,15.3043683 111.405878,17.9021018 112.543476,19.9590736 C112.908214,20.6351875 113.458519,21.1906731 114.128327,21.5588441 L118.32818,23.9984942 L122.607275,26.4381443 C123.919788,27.1935706 125.5314,27.1868136 126.837651,26.4204075 C128.143901,25.6540015 128.94736,24.2437832 128.946676,22.7186778 L128.946676,22.1987524 C128.947021,21.8949528 128.798744,21.610574 128.550464,21.4388613 L126.569401,20.2790277 C126.381738,20.166219 126.156268,20.136601 125.946252,20.1971704 C125.736237,20.2577397 125.560301,20.4031246 125.460006,20.5989818 C125.424754,20.7434688 125.424754,20.8944317 125.460006,21.0389187 L125.460006,22.3187351 C125.470768,22.5415504 125.393271,22.7595336 125.244611,22.9245994 C125.095951,23.0896652 124.888342,23.1882508 124.667581,23.1986089 C124.511102,23.2346095 124.348604,23.2346095 124.192126,23.1986089 L120.23,20.9189359 L116.267875,18.6792571 C115.852958,18.4802237 115.662285,17.9903062 115.832041,17.5594178 L116.109389,17.2794579 L120.071515,15.0397792 L124.033641,12.7601061 C124.222525,12.6423989 124.450175,12.6057586 124.665958,12.6583345 C124.881742,12.7109105 125.067766,12.8483431 125.182657,13.040066 C125.222918,13.1974621 125.222918,13.362601 125.182657,13.5199971 L125.182657,14.1599054 C125.181974,15.6850108 125.985432,17.0952291 127.291683,17.8616351 C128.597933,18.6280411 130.209545,18.6347982 131.522058,17.8793719 L135.801154,15.3997275 L140.001007,12.9600774 C140.957769,12.3658533 141.638819,11.4094954 141.891962,10.3047239 C142.145104,9.19995246 141.949236,8.03886044 141.348129,7.08092068 C141.058877,6.47473807 140.622794,5.95201407 140.080249,5.56113866 L140.080249,5.56113866 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
<polygon fill="#FFFFFF" fill-rule="nonzero" points="112 6 102.089552 27 98.1094527 27 101.810945 19.155642 96 6 100.218905 6 103.960199 14.7840467 107.940299 6"></polygon>
<path d="M12.5488958,13.5000308 C12.4406758,11.337637 10.6196581,9.66117192 8.45646512,9.73245762 C6.29327213,9.80374331 4.58650007,11.5964629 4.6207822,13.7612933 C4.65506433,15.9261236 6.41774454,17.6638638 8.5821093,17.666572 L8.5821093,17.666572 C10.772905,17.666572 12.5488958,15.8899777 12.5488958,13.6984375 L12.5488958,13.5000308 M12.5488958,20.7617168 L12.5488958,18.8570123 C11.4153332,20.2272598 9.72536014,21.0142387 7.94742346,20.9998049 C6.06408648,20.9581754 4.27447489,20.1696025 2.97252088,18.8076679 C1.67056686,17.4457334 0.962991399,15.6220748 1.00554714,13.7381189 L1.00554714,13.5000308 C0.930469891,11.5842565 1.61998472,9.71724054 2.92213444,8.31044096 C4.22428416,6.90364138 6.03219099,6.07252544 7.94742346,6.00012695 L7.94742346,6.00012695 C9.69355442,5.98861656 11.3530005,6.76037558 12.46956,8.10336799 L12.46956,6.27802616 L16,6.27802616 L16,20.7617168 L12.5488958,20.7617168 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
<path d="M33.3009709,17.5135135 C32.0582524,17.5135135 31.7475728,17.027027 31.7475728,15.8108108 L31.7475728,9.40540541 L33.961165,9.40540541 L33.961165,6.2027027 L31.7475728,6.2027027 L31.7475728,2.47297297 L28.1747573,2.47297297 L28.1747573,6.08108108 L23.5145631,6.08108108 L23.5145631,4.58108108 C23.5145631,3.36486486 23.9805825,2.87837838 25.223301,2.87837838 L26,2.87837838 L26,0 L24.3300971,0 C21.3786408,0 19.9805825,1.01351351 19.9805825,4.05405405 L19.9805825,6.04054054 L18,6.04054054 L18,9.40540541 L19.9805825,9.40540541 L19.9805825,21 L23.5145631,21 L23.5145631,9.40540541 L28.1747573,9.40540541 L28.1747573,16.6621622 C28.1747573,19.7027027 29.2621359,21 32.0582524,21 L34,21 L34,17.5135135 L33.3009709,17.5135135 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
<path d="M47.1684317,12.1833173 C46.9237019,10.4044247 45.355899,9.11122627 43.5644342,9.21056859 C41.770584,9.12791548 40.2014099,10.4081762 39.9208324,12.1833173 L47.1684317,12.1833173 Z M39.9604368,14.4426063 C40.0876747,16.3880141 41.7364646,17.8801563 43.6832473,17.8117215 C45.0656397,17.8282664 46.3566014,17.1221657 47.089223,15.948799 L50.8120335,15.948799 C49.8640133,19.0948193 46.8815524,21.1776835 43.6040386,20.9826534 C39.6783458,21.2548215 36.2747937,18.2920272 36,14.363333 L36,13.4913267 C36,9.35398122 39.3512496,6 43.4852255,6 C47.6192014,6 50.970451,9.35398122 50.970451,13.4913267 L50.970451,13.4913267 C51.0098497,13.7939286 51.0098497,14.1003678 50.970451,14.4029697 L39.9604368,14.4426063 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
<path d="M74.3737782,13.6182915 C74.3199191,11.4125752 72.5444409,9.66115497 70.3902465,9.6887372 C68.2360521,9.71631943 66.5038815,11.5126515 66.5038815,13.7190573 C66.5038815,15.9254632 68.2360521,17.7217953 70.3902465,17.7493775 C72.5444409,17.7769597 74.3199191,16.0255395 74.3737782,13.8198232 L74.3737782,13.6182915 M63,27 L63,6.28253559 L66.5026514,6.28253559 L66.5026514,8.17693408 C67.6272916,6.78510426 69.3039626,5.98572991 71.067905,6.00019293 C72.9363494,6.03219349 74.7159006,6.82299845 76.0149444,8.19877878 C77.3139882,9.57455911 78.0260736,11.4225754 77.9944965,13.336147 L77.9944965,13.6182915 C78.0689828,15.5642404 77.3848953,17.4606631 76.0929949,18.8896207 C74.8010946,20.3185783 73.007418,21.1627848 71.1072606,21.2361918 L71.1072606,21.2361918 C69.4381448,21.2689551 67.8398337,20.5463501 66.7387852,19.2611806 L66.7387852,27 L63,27 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
<path d="M90.5488958,13.4999352 C90.4391808,11.3640864 88.6571011,9.69945386 86.5194542,9.73605191 C84.3818072,9.77264996 82.6577163,11.4973107 82.6211304,13.6356643 C82.5845444,15.7740178 84.2486269,17.5566865 86.38377,17.6664378 L86.5821093,17.6664378 C88.772905,17.6664378 90.5488958,15.88986 90.5488958,13.6983401 L90.5488958,13.4999352 M90.5488958,20.761554 L90.5488958,18.8568671 C89.4349518,20.2301983 87.7549363,21.019336 85.9870913,20.9996399 C84.1038235,20.968331 82.3101541,20.1897957 81.0008042,18.8353614 C79.6914543,17.480927 78.9737196,15.6615836 79.0055471,13.7777021 L79.0055471,13.4999352 C78.9304699,11.5841787 79.6199847,9.71717999 80.9221344,8.31039343 C82.2242842,6.90360687 84.032191,6.07249862 85.9474235,6.00011408 L85.9474235,6.00011408 C87.6821733,5.98919937 89.3292361,6.76197091 90.4298922,8.10332238 L90.4298922,6.27799744 L94,6.27799744 L94,20.761554 L90.5488958,20.761554 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
<path d="M56.4615385,7.73492013 C57.1120861,6.63601286 58.266482,5.97731922 59.5,6.00118629 C60.01694,5.98717035 60.5300703,6.09751223 61,6.32374142 L61,10.1137642 C60.2503308,9.62950491 59.3798399,9.39084081 58.5,9.42833458 C57.2450215,9.7109705 56.4078936,10.9571124 56.5769231,12.2910114 L56.5769231,21 L53,21 L53,6.28342203 L56.4615385,6.28342203 L56.4615385,7.73492013 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
</g>
</svg>
</span>
</div>
</div>
<p class="db dn-ns mt3">&copy; <span class="js-footer__year">2021</span> Aritzia LP</p>
</div>
</footer>
</div>
</div>
<div id="region-match-banner" tabindex="-1" role="dialog" aria-hidden="true" class="ar-information-banner ar-information-banner--hidden sc-region-match js-information-banner ga-promotions" data-state-memory="session" data-state-memory-key="region-match" data-user-country-code="ES" data-current-site="Aritzia_CA">
<div class="ar-information-banner__message sc-region-match__inner-wrapper tcflexbox flex-row flex-nowrap justify-center content-start items-centerr">
<div class="sc-region-match__content ma0">
<div class="sc-region-match__copy tc v-mid">Hey! It looks like you&rsquo;re not in Canada.</div>
<a class="db v-mid relative button white sc-region-match__primary-action sc-region-match__action ga-promotion" data-ga-pos="1" data-link-type="leave-country-banner" data-click-url="intl.aritzia.com" href="https://www.aritzia.com/intl/en/my-account?redirect=https://www.aritzia.com/&amp;country=intl">
<span class="absolute sc-region-match__region-icon ml1" style="filter:invert(1)">
<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-170.000000, -76.000000)" fill="#FFFFFF">
<path d="M170,82.5007738 C169.999713,78.9136148 172.911695,76.0006854 176.498616,76.0000001 C180.089273,75.9993148 183.004019,78.9178152 182.999996,82.5097052 C182.995972,86.0893256 180.081093,89.000199 176.500761,89 C172.913862,88.9997347 170.000287,86.0868496 170,82.5007738 L170,82.5007738 Z M179.42572,82.0988403 C179.392095,81.2212452 179.259296,80.3749984 178.995555,79.5429223 C178.301163,79.7202232 177.604913,79.8197947 176.90223,79.8532431 L176.90223,82.0988403 L179.42572,82.0988403 L179.42572,82.0988403 Z M173.575226,82.0966959 L176.094936,82.0966959 L176.094936,79.8510765 C175.382857,79.8214748 174.690653,79.7163544 174.002716,79.5437624 C173.741429,80.3815864 173.604806,81.2267942 173.575226,82.0966959 L173.575226,82.0966959 Z M176.09918,82.9023315 L173.573855,82.9023315 C173.607326,83.7765663 173.739616,84.6252449 174.004595,85.4573652 C174.698369,85.2789811 175.391833,85.1796086 176.09918,85.1468013 L176.09918,82.9023315 L176.09918,82.9023315 Z M178.99686,85.4574757 C179.25766,84.6185022 179.395654,83.7713932 179.424283,82.902022 L176.903999,82.902022 L176.903999,85.1476192 C177.612386,85.1789675 178.302489,85.2804401 178.99686,85.4574757 L178.99686,85.4574757 Z M170.800994,82.9003861 C170.898377,84.1296205 171.333937,85.2078839 172.103538,86.1448592 C172.485841,85.9859517 172.857355,85.8314877 173.235966,85.6741055 C172.953169,84.7695837 172.818999,83.8419377 172.781483,82.9003861 L170.800994,82.9003861 L170.800994,82.9003861 Z M182.198626,82.0988624 C182.10058,80.8683016 181.66502,79.7905688 180.895905,78.8548756 C180.51411,79.0136063 180.145249,79.166987 179.764781,79.3251872 C180.043798,80.2241379 180.181616,81.151386 180.217562,82.0988624 L182.198626,82.0988624 L182.198626,82.0988624 Z M172.782655,82.0979118 C172.818491,81.1483131 172.956131,80.2242484 173.235325,79.325364 C172.854415,79.1670312 172.483011,79.0126115 172.103671,78.8549419 C171.333273,79.7959629 170.897382,80.8735631 170.802055,82.0979118 L172.782655,82.0979118 L172.782655,82.0979118 Z M179.764693,85.6745256 C180.148543,85.8340079 180.522135,85.9892236 180.8969,86.1449255 C181.669198,85.1975155 182.103232,84.1224356 182.197874,82.9039675 L180.217054,82.9039675 C180.181461,83.852306 180.043201,84.7762823 179.764693,85.6745256 L179.764693,85.6745256 Z M176.097787,88.1527583 L176.097787,85.9425771 C175.482783,85.9645297 174.885043,86.0521631 174.283789,86.199177 C174.332978,86.302374 174.376176,86.3993147 174.424569,86.4935804 C174.675399,86.9820421 174.976413,87.4329876 175.407242,87.7841848 C175.610983,87.9502993 175.834091,88.0816611 176.097787,88.1527583 L176.097787,88.1527583 Z M178.720761,86.2008129 C178.113339,86.0514115 177.513875,85.9634022 176.900329,85.942975 L176.900329,88.1644973 C177.850371,87.8176774 178.308922,87.0406265 178.720761,86.2008129 L178.720761,86.2008129 Z M176.097964,76.835127 C175.148099,77.1832734 174.689349,77.9601474 174.279213,78.7995409 C174.885309,78.9479475 175.483158,79.0350504 176.097964,79.057202 L176.097964,76.835127 L176.097964,76.835127 Z M178.714615,78.8003147 C178.542708,78.4140553 178.342791,78.0558279 178.0886,77.728993 C177.874446,77.4536903 177.632216,77.2073482 177.327753,77.0323466 C177.195772,76.9564963 177.052605,76.9001004 176.902938,76.8294012 L176.902938,79.0573346 C177.518053,79.0339672 178.115616,78.9480359 178.714615,78.8003147 L178.714615,78.8003147 Z M173.480673,86.4351728 C173.233402,86.5326441 172.967362,86.6374771 172.693496,86.7454493 C173.023979,87.0908765 173.978111,87.6913339 174.227769,87.7320114 C173.989341,87.3180957 173.740943,86.8869584 173.480673,86.4351728 L173.480673,86.4351728 Z M178.764423,87.7444358 C179.317748,87.505566 179.83568,87.1773383 180.314348,86.7469084 C180.027174,86.6346915 179.761907,86.5310744 179.518129,86.4358139 C179.259164,86.8854551 179.009151,87.3194885 178.764423,87.7444358 L178.764423,87.7444358 Z M180.315498,78.2515442 C179.834817,77.8256684 179.321683,77.4929751 178.766877,77.2581067 C179.013772,77.6874533 179.263209,78.1212436 179.518196,78.5646062 C179.767965,78.4665602 180.033253,78.3623683 180.315498,78.2515442 L180.315498,78.2515442 Z M173.481071,78.5641862 C173.740965,78.1131523 173.989518,77.6817939 174.234424,77.256736 C173.67944,77.4940583 173.164139,77.8244083 172.685183,78.2521411 C172.967627,78.3628768 173.233579,78.4671571 173.481071,78.5641862 L173.481071,78.5641862 Z"></path>
</g>
</g>
</svg>
</span>
<span class="v-mid">Shop International Site</span>
</a>
<a class="db v-mid relative button white  sc-region-match__action js-close ga-promotion" href="#" data-ga-pos="2" data-link-type="leave-country-banner" data-click-url="banner-closed">
<span class="absolute sc-region-match__region-icon">
<svg width="25px" height="13px" viewBox="0 0 25 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-70.000000, -95.000000)" fill-rule="nonzero">
<g transform="translate(70.000000, 95.000000)">
<polygon fill="#DA291C" points="0 0 6.25 0 6.5078125 0.268125 18.4921875 0.268125 18.75 0 25 0 25 13 18.75 13 18.4921875 12.731875 6.5078125 12.731875 6.25 13 0 13"></polygon>
<path d="M6.18,0.005 L18.8300002,0.005 L18.8300002,13 L6.18,13 L6.18,0.005 Z M12.7421876,11.849896 L12.6235938,9.57553139 C12.6201018,9.49977233 12.651138,9.4265137 12.7079903,9.37631971 C12.7648427,9.32612572 12.8413827,9.30440714 12.9161251,9.31726055 L15.1799481,9.71520848 L14.8742397,8.87187513 C14.8488089,8.80307577 14.8700023,8.72572014 14.926948,8.67948971 L17.4068752,6.67130218 L16.8481668,6.41039593 C16.7700918,6.37350136 16.731685,6.28426206 16.7585627,6.20219801 L17.2487502,4.69473965 L15.8203543,4.99781257 C15.7405677,5.01444796 15.660108,4.97256483 15.6279689,4.89766674 L15.3512501,4.24671881 L14.2364689,5.443198 C14.1841117,5.49842294 14.101599,5.51248694 14.0339037,5.47772452 C13.9662085,5.44296209 13.9295618,5.36770814 13.9439376,5.29297924 L14.4815626,2.52052087 L13.6197814,3.01861463 C13.5788841,3.04258412 13.5298827,3.04853493 13.484437,3.03505105 C13.4389913,3.02156717 13.4011649,2.98985425 13.3799584,2.94745837 L12.5050001,1.22916668 L11.6300417,2.94745837 C11.6088353,2.98985425 11.5710088,3.02156717 11.5255632,3.03505105 C11.4801175,3.04853493 11.4311161,3.04258412 11.3902188,3.01861463 L10.5284376,2.52052087 L11.0660626,5.29297924 C11.0804384,5.36770814 11.0437917,5.44296209 10.9760965,5.47772452 C10.9084012,5.51248694 10.8258885,5.49842294 10.7735313,5.443198 L9.65875005,4.24671881 L9.3820313,4.89766674 C9.34989223,4.97256483 9.26943252,5.01444796 9.18964588,4.99781257 L7.76125002,4.69473965 L8.25143753,6.20219801 C8.27831516,6.28426206 8.23990837,6.37350136 8.16183336,6.41039593 L7.60312502,6.67130218 L10.0830521,8.67948971 C10.1399979,8.72572014 10.1611913,8.80307577 10.1357605,8.87187513 L9.83005214,9.71520848 L12.0938751,9.31726055 C12.1686174,9.30440714 12.2451575,9.32612572 12.3020099,9.37631971 C12.3588622,9.4265137 12.3898984,9.49977233 12.3864063,9.57553139 L12.2678126,11.849896 L12.7421876,11.849896 Z" fill="#FFFFFF"></path>
</g>
</g>
</g>
</svg>
</span>
<span class="v-mid">Shop Canadian Site</span>
</a>
<a class="db v-mid relative button white sc-region-match__action ga-promotion" data-ga-pos="3" data-link-type="leave-country-banner" data-click-url="us.aritzia.com" href="https://www.aritzia.com/us/en/my-account?redirect=https://www.aritzia.com/&amp;country=us">
<span class="absolute sc-region-match__region-icon">
<svg width="25px" height="13px" viewBox="0 0 25 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-120.000000, -95.000000)" fill-rule="nonzero">
<g transform="translate(120.000000, 95.000000)">
<polygon fill="#B22234" points="0 0 25 0 25 12.9999997 0 12.9999997"></polygon>
<path d="M0,1.5483333 L25,1.5483333 M25,3.54833326 L0,3.54833326 M0,5.54833321 L25,5.54833321 M25,7.54833317 L0,7.54833317 M0,9.54833312 L25,9.54833312 M25,11.5483331 L0,11.5483331" stroke="#FFFFFF" stroke-width="0.999999978" fill="#000000"></path>
<rect fill="#3C3B6E" x="0" y="0" width="9.87999978" height="6.99999984"></rect>
<g transform="translate(0.440000, 0.300000)" fill="#FFFFFF">
<g>
<g>
<g>
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.000000, 5.600000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.823333, 0.700000)">
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
</g>
</g>
<g transform="translate(1.646667, 0.000000)">
<g>
<g>
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.000000, 5.600000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.823333, 0.700000)">
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
</g>
</g>
</g>
</g>
<g transform="translate(3.293333, 0.000000)">
<g>
<g>
<g>
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.000000, 5.600000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.823333, 0.700000)">
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
</g>
</g>
<g transform="translate(1.646667, 0.000000)">
<g>
<g>
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.000000, 5.600000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.823333, 0.700000)">
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<g transform="translate(6.586667, 0.000000)">
<g>
<g>
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.000000, 5.600000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.823333, 0.700000)">
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
</g>
</g>
</g>
<g transform="translate(8.233333, 0.000000)">
<g>
<g>
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
<g transform="translate(0.000000, 1.400000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 2.800000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
<g transform="translate(0.000000, 4.200000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
<g transform="translate(0.000000, 5.600000)">
<polygon points="0.383333325 0 0.61844742 0.72360678 0.0029107266 0.276393197 0.763755923 0.276393197 0.14821923 0.72360678"></polygon>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="v-mid">Shop USA Site</span>
</a>
</div>
</div>
</div>
<div class="sc-region-match__background-coverall dn fixed top-0 left-0 w-100 vw-100 vh-100"></div>
<script>
(function(app){
app.messages = {"ServerConnectionError":"Server connection failed!"};
app.constants = {"AVAIL_STATUS_IN_STOCK":"IN_STOCK","AVAIL_STATUS_PREORDER":"PREORDER","AVAIL_STATUS_BACKORDER":"BACKORDER","AVAIL_STATUS_NOT_AVAILABLE":"NOT_AVAILABLE","AFTERPAY_PORTAL":"https://portal.afterpay.com/afterpay.js","SHOW_CSS_MSG":true,"POBOX_ADDR_CHECK":true,"SITE_ID":"Aritzia_CA","COUNTRY_ID":"CA","SESSION_CURRENCY":"CAD","LOW_STOCK":30,"LOW_STOCK_BUYCODE":{"N":"10"},"WISHLIST_MAX":200,"NOTIFICATION_DURATION":5000,"SORT_COLOR_SWATCHES":"light","IS_SITE_BOPIS_ENABLED":true,"IS_SITE_SIV_ENABLED":true,"IS_OMNI_ENABLED":true,"IS_NOTIFICATION_LIST_ENABLED":true,"NOTIFICATION_TYPE_PROFILE_SAVED":"saved profile notification","NOTIFICATION_TYPE_ITEM_REMOVED":"item removed notification","NOTIFICATION_TYPE_ITEM_UPDATED":"item updated notification","NOTIFICATION_TYPE_ADD_TO_BAG":"add to bag notification","NOTIFICATION_TYPE_ADD_TO_WISHLIST":"add to wishlist notification","NOTIFICATION_TYPE_MOVE_TO_WISHLIST":"moved to wishlist notification","NOTIFICATION_TYPE_SHARE_URL":"share url notification","NOTIFICATION_TYPE_WISHLIST_PUBLIC":"wishlist public notification","NOTIFICATION_TYPE_WISHLIST_PRIVATE":"wishlist private notification","NOTIFICATION_TYPE_SIGNED_IN":"sign in notification","NOTIFICATION_TYPE_NOTIFY_ME":"product notification subscription","PASSWORD_MIN_LENGTH":8,"PASSWORD_FORCE_LETTERS":true,"PASSWORD_FORCE_NUMBERS":true,"DELIVERY_DELIVER":"deliver to me","DELIVERY_PICK_UP":"pick up in store"};
app.resources = {"AND":"and","VIEW":"View","CLOSE":"Close","INCHES":"Inches","BACK_TO_TOP":"Back To Top","SOLD_OUT":"Sold Out Online","SOLD_OUT_TEXT":"Sold Out","CANCEL":"Cancel","DONE":"Done","UNDO":"Undo","LOG_OUT":"Sign Out","LOG_IN":"Sign In","TOMORROW":"Tomorrow","FREE":"Free","PLAY":"Play","VIDEO":"Video","VIDEOS":"Videos","BILL_GC":"GIFT_CERTIFICATE","SHIP_QualifiesFor":"This shipment qualifies for","CC_LOAD_ERROR":"Couldn't load credit card!","CC_EXPIRED":"Oops! Your card has expired","CC_EXPIRY_INVALID":"Please enter a valid expiry date","CC_NAME":"Please enter a valid name","CC_NUMBER":"Please enter a valid card number","CC_CSV_INVALID":"Please enter a valid security code","GIFT_CARD_INVALID":"Please enter a valid 19 digit card number.","ACCOUNT_USERNAME_HELPER":"Enter your email address","ACCOUNT_FIRSTNAME_HELPER":"Enter your first name","ACCOUNT_LASTNAME_HELPER":"Enter your last name","ACCOUNT_PASSWORD_HELPER":"Between 5 and 20 characters","ACCOUNT_CONFRIMPASS_HELPER":"Re-type your new password","ACCOUNT_NAME":"{0}&rsquo;s Account","FORMS_ZIP_POSTAL_CODE":"Postal Code","FORMS_ZIP_CODE":"Zip Code","EXPIRY_DATE":"Expiry Date","REGISTRY_FORM":"dwfrm_giftregistry","REG_ADDR_ERROR":"Couldn't Load Address","BONUS_PRODUCT":"Bonus Product","BONUS_PRODUCTS":"Bonus Product(s)","SELECT_BONUS_PRODUCTS":"Select {0} Bonus Product(s)","SELECT_BONUS_PRODUCT":"Select","BONUS_PRODUCT_MAX":"The maximum number of bonus products have been selected.  Please remove one in order to add additional bonus products.","SIMPLE_SEARCH":"What are you looking for?","SEARCH_AGAIN":"Try another search...","FILTER_SELECT":"Select a filter","SUBSCRIBE_EMAIL_DEFAULT":"Email Address","CURRENCY_SYMBOL":"C$","MISSINGVAL":"Please Enter {0}","SERVER_ERROR":"Server connection failed!","MISSING_LIB":"jQuery is undefined.","BAD_RESPONSE":"Bad response, Parser error","FIELD_REQUIRED":"This field is required","INVALID_INPUT":"Please enter a valid value","INVALID_PHONE":"Please specify a valid phone number.","INVALID_PHONE2":"Please enter a 10 - 15 digit phone number, including your area code","INVALID_EMAIL":"Oops! Please enter a valid email address","INVALID_EMAIL2":"The email address is invalid","INVALID_EMAIL3":"newsletter.error","INVALID_ZIP_POSTAL_CODE":"Please enter a valid postal code","INVALID_ZIP_CODE":"Please enter a valid zip code","INVALID_POSTAL_CODE":"Please enter a valid postal code","INVALID_DOB":"Please enter a valid date.","MISSING_COUNTRY":"Please select a country","MISSING_FIRSTNAME":"Please enter your first name","MISSING_LASTNAME":"Please enter your last name","MISSING_ADDRESS":"Please enter your street address","MISSING_CITY":"Please enter your city","MISSING_REGION":"Please enter your region","MISSING_STATE":"Please select a state","MISSING_PROVINCE":"Please select a province","MISSING_PHONE":"Please enter your telephone number","INVALID_PASSWORD":"Your password must be between 8 and 20 characters","REMOVE":"Remove","QTY":"Qty","EMPTY_IMG_ALT":"Remove","SELECT_A_SIZE":"Select a Size","SIZE":"Size","ONE_SIZE":"ONE","UNISEX":"Unisex","COMPARE_BUTTON_LABEL":"Compare Item(s)","COMPARE_CONFIRMATION":"This will remove the first product added to compare.  Is that OK?","COMPARE_REMOVE_FAIL":"Unable to remove item from list","COMPARE_ADD_FAIL":"Unable to add item to list","SORT":"Sort","SELECTED":"Filter Selected","SELECTED_PLURAL":"Filters Selected","SELECTED_NONE":"No Filters Selected","VIEW_PRODUCT":"View {0} Item","VIEW_PRODUCTS":"View {0} Items","SEARCH_HIT_TILE_QV":"Quick view for","ADD_QUANTITY":"Add quantity","SUBTRACT_QUANTITY":"Subtract quantity","CURRENT_QUANTITY":"Current quantity","QUANTITY_LIMIT":"Only {0} left for delivery","PICK_UP_QUANTITY_LIMIT":"Only {0} left for pick up in store","ADD_TO_CART":"Add to Bag","ADD_TO_CART_FAIL":"Unable to add item '{0}' to bag","ADD_TO_CART_SELECT_SIZE":"Please Select a Size","ADD_TO_CART_FAIL_BULK":"If you want to order more than 5 of the same item, please <a class=\"ar-link black-60\" href=\"mailto:service@aritzia.com\">e-mail us</a>.","ADDED_TO_CART":"Added to Bag","ADDED_TO_WISHLIST":"Added to list","ALREADY_IN_WISHLIST":"Already in List","CART_VIEW":"View Your Bag","CART_ADDED_TO_WISHLIST":"Added to Your List","WISHLIST_SELECTED":"Selected","WISHLIST_NOT_SELECTED":"Not Selected","SELECTED_ITEMS":"Select Items","ADD_TO_LIST":"Add to List","ADDED_TO_LIST":"Added to List","GIFT_CERT_INVALID_NUM":"Please enter a valid 19 digit card number.","GIFT_CERT_INVALID_PIN":"Please enter a valid PIN number.","GIFT_CERT_BALANCE":"Your current Gift Card balance is ","GIFT_CERT_AMOUNT_INVALID":"Gift Card can only be purchased with a minimum of $5 and maximum of $5000","GIFT_CERT_MISSING":"Please enter your gift card number and PIN. If you can&rsquo;t find them, <a href=\"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/CustomerServiceDialog-ContactUsDialogStart\" class=\"help-dialog red underline\">contact us</a> and we&rsquo;ll help you!","GIFT_CERT_ERROR":"We&rsquo;re so sorry, but there was an issue processing your gift card. <a href=\"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/CustomerServiceDialog-ContactUsDialogStart\" class=\"help-dialog red underline\">Contact us</a> and we&rsquo;ll help!","ITEM_OUT_OF_STOCK":"ITEM OUT OF STOCK","COUPON_CODE_MISSING":"Please Enter a Coupon Code","COOKIES_DISABLED":"Your browser currently is not set to accept Cookies. Please turn it on or check if you have another program set to block cookies.","SHARE_SEND_FRIEND_MSG":"I saw this on Aritzia.com and wanted you to see it too.","SHARE_WISHLIST_TITLE":"My List","SHARE_WISHLIST_MSG":"wants to share her list with you. Why not make her wish come true?","SHARE_WISHLIST_TWITTER":"Because I've been very good this year. View my @aritzia list: ","SHARE_WISHLIST_TITLE_RECENTLY_VIEWED":"Recently Viewed","SHARE_WISHLIST_USER_BODY":"Save the items you love here","SHARE_WISHLIST_USER_SHARE":"(you can share your list too).","SHARE_WISHLIST_USER_RECENTLY_VIEWED":"Start with your recently viewed:","PRODUCT_HEIGHT_SHORT":"Short Height","PRODUCT_HEIGHT_REGULAR":"Regular Height","PRODUCT_HEIGHT_TALL":"Tall Height","PRODUCT_HEIGHT_TALLER":"Taller Height","PRODUCT_OTHER_HEIGHTS":"Other Heights","PRODUCT_OUT_OF_COLOR":"* Size {0}<span class=\"js-variation-messaging__selected-height\"></span> in this colour is Sold Out Online but it may be available for pick up in store. Please call Aritzia Concierge at 1-855-ARITZIA (274-8942) and we&rsquo;ll do our best to help!","PRODUCT_OUT_OF_COLOR_SP":"* Size {0}<span class=\"js-variation-messaging__selected-height\"></span> in this colour is Sold Out Online but it may be available for pick up in store. ","PRODUCT_OUT_OF_HEIGHT":"All sizes in this height and colour are sold out online but may be available for pick up in store.","PRODUCT_OUT_OF_HEIGHT_OMNIOFF":"All sizes in this height and colour are sold out online.","PRODUCT_OUT_OF_SIZE":"* Sorry! We&rsquo;re out of size {0} of this colour. Please call Aritzia Concierge at 1-855-ARITZIA (274-8942) and we&rsquo;ll do our best to help!","PRODUCT_OUT_OF_SIZE_SP":"* Sorry! We&rsquo;re out of size {0} of this colour. ","PRODUCT_ONLYFEW":"Only a few left in size {0} of this colour online","PRODUCT_ONLYFEW_SHORT":"Only a Few Left","PRODUCT_QTYLEFT":"{0} in size {1} of this colour online","PRODUCT_QTYLEFT_SHORT":"{0} Left","PRODUCT_REVIEWS":"TurnTo Product Reviews","APPLEPAY_PDP_ERROR":"We&rsquo;re sorry! Our system had a problem and couldn&rsquo;t complete your purchase. Please try again or <a href=\"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/CustomerServiceDialog-ContactUsDialogStart\" class=\"help-dialog\">contact us</a> for help.","ORDER_RETURN_PLACEHOLDER":"Optional - add comments about your return","ORDER_RETURN_ERROR_NOTSELECTED":"Please select an item and quantity to return.","ORDER_RETURN_PROCEEDREASON":"Proceed to Reason","ORDER_RETURN_BACKTOSELECT":"Back to Select","ORDER_RETURN_BACKTOREASON":"Back to Reason","ORDER_RETURN_PROCEEDMETHOD":"Proceed to Return Method","ORDER_RETURN_BACKTOMETHOD":"Back to Method","ORDER_RETURN_PROCEEREVIEW":"Proceed to Review","COPY_URL":"Copy Link","COPIED_URL":"Link Copied","OF":"of","SHOW_ALL":"Show All","SHOW_LESS":"Show Less","QUICKVIEW":"Quick View","EDIT":"Edit","NEWSLETTER_SUCCESS":"newsletter.succes","WISHLIST_ADDED_ALL":"ADDED ALL ITEMS TO BAG","WISHLIST_ADD_ALL":"ADD ALL ITEMS TO BAG","WISHLIST_FINDER":"Find a List","WISHLIST_VIEW":"View List","STORE_LOCATOR":"Store Locator","STORE_LOCATOR_OPEN":"We will open at","STORE_LOCATOR_CLOSE":"We're open today until","STORE_LOCATOR_TEMP_CLOSED":"We are temporarily closed","STORE_LOCATOR_REOPEN":"We will re-open on <span class=\"reopen-day\"></span> at <span class=\"reopen-time\"></span>","STORE_LOCATOR_ALL_STORES":"All Boutiques","STORE_LOCATOR_ALL_BOUTIQUES":"All Aritzia Boutiques","CITY":"CITY","HOME_MSG_DISMISS":"Accept","HOME_MSG_UPDATE":"Update","POBOX_ADDR_ERROR":"Unfortunately we are currently unable to ship to PO Box addresses","CLEAR_RECENT_SEARCHES":"Clear recent searches","SUGGESTIONS_SUGGESTED":"Suggested","SUGGESTIONS_RECENT":"Recent","SIGN_IN_TO_SHOP":"Sign in to start shopping","CREATE_TO_SHOP":"Create account to start shopping","KEEP_TYPING":"Keep typing to display more results","READ_MORE":"Read More","READ_LESS":"Read less","NOTIFICATION_PROFILE_SAVED":"Your Profile Settings Have Been Saved","NOTIFICATION_FILTER_REMOVED_AVAILABILITY":"The Ready to Ship filter was removed. <br /><a href=\"#\" class=\"ar-link white js-search-header__promoted-filter\" data-filter-id=\"size\">Filter by size</a> to reapply this filter.","NOTIFICATION_ITEM_REMOVED":"Item Removed","NOTIFICATION_ITEMS_REMOVED":"Items Removed","NOTIFICATION_ITEM_UPDATED":"Item Updated","NOTIFICATION_ADD_TO_BAG":"Added to Bag","NOTIFICATION_MOVE_TO_BAG":"Moved to Bag","NOTIFICATION_ADD_TO_WISHLIST":"Added to List","NOTIFICATION_MOVE_TO_WISHLIST":"Moved to List","NOTIFICATION_SHARE_URL":"Share URL Copied","NOTIFICATION_WISHLIST_PUBLIC":"Your List is Unlisted","NOTIFICATION_WISHLIST_PRIVATE":"Your List is Private","NOTIFICATION_WISHLIST_SEARCHABLE":"Your List is Public","NOTIFICATION_SIGNED_IN":"Welcome Back to Aritzia, ","NOTIFICATION_SIGNED_OUT":"You Have Signed Out","NOTIFICATION_EMAIL_PREF_SAVED":"Your email preferences have been saved.","NOTIFICATION_CONTACT_PREF_SAVED":"Your contact preferences have been saved.","NOTIFICATION_CONTACT_PREF_SMS_ERROR":"There was an error saving your contact preferences.","NOTIFICATION_LANG_PREF_SAVED":"Your language preferences have been saved.","NOTIFICATION_SUBCRIBED":"Thanks for subscribing.","NOTIFICATION_ACCOUNT_DELETION_MISSING_EMAIL_ERROR":"Please enter your email address","NOTIFICATION_ACCOUNT_DELETION_INCORRECT_EMAIL_FORMAT":"The email address is invalid","NOTIFICATION_ACCOUNT_DELETION_EMAIL_DOES_NOT_EXIST_ERROR":"Sorry, this email is not associated with an Aritzia account.","NOTIFICATION_ACCOUNT_DELETION_GENERAL_ERROR":"Sorry, this request could not be completed at this time. We apologize for any inconvenience.","NOTIFICATION_NOTIFYME_SUCCESS":"We&rsquo;ll Be in Touch","NOTIFICATION_NOTIFYME_ERROR":"Error, Please Try Again","NOTIFICATION_NOTIFYME_FULLLIST":"Your Notification List is Full","SIZEGUIDE_INSEAM":"Inseam","SIZEGUIDE_GARMENT_INSEAM":"Garment Inseam","SIZEGUIDE_IN":"In","SIZEGUIDE_CM":"cm","SIZEGUIDE_COMPARE1":"A size <span class=\"js-sizeguide-compare__selected-size\"></span><span class=\"js-sizeguide-compare__selected-height\"></span> will fit someone who typically wears a <span class=\"js-sizeguide-compare__size-one\"></span> in other Aritzia clothing","SIZEGUIDE_COMPARE2":"A size <span class=\"js-sizeguide-compare__selected-size\"></span><span class=\"js-sizeguide-compare__selected-height\"></span> will fit someone who typically wears a <span class=\"js-sizeguide-compare__size-one\"></span> or <span class=\"js-sizeguide-compare__size-two\"></span> in other Aritzia clothing","SIZEGUIDE_COMPARE2_DEPENDING":"A size <span class=\"js-sizeguide-compare__selected-size\"></span><span class=\"js-sizeguide-compare__selected-height\"></span> will fit someone who typically wears a <span class=\"js-sizeguide-compare__size-one\"></span> or <span class=\"js-sizeguide-compare__size-two\"></span> in other Aritzia clothing (depending on body shape and fit preference)","SIZEGUIDE_COMPARE3":"A size <span class=\"js-sizeguide-compare__selected-size\"></span><span class=\"js-sizeguide-compare__selected-height\"></span> will fit someone who typically wears a <span class=\"js-sizeguide-compare__size-one\"></span> in other Aritzia clothing. Depending on body shape and fit preference, a <span class=\"js-sizeguide-compare__selected-size\"></span><span class=\"js-sizeguide-compare__selected-height\"></span> may also fit someone who wears a <span class=\"js-sizeguide-compare__size-three\"></span> or <span class=\"js-sizeguide-compare__size-two\"></span>.","PERSONALIZE_EMPTY":"Oops! You forgot to personalize your item. Please enter your text to proceed.","PERSONALIZE_INVALID":"No special characters, numbers, accents, or emojis.","PERSONALIZE_QTYLIMIT":"Place a separate order to personalize more than one item in the same size and colour.","PERSONALIZE_CHARLIMIT":"14 character limit.","MORE_PLP":"More","SIV_NOONLINE_CHECKSTORE":"* Size {0} in this colour is Sold Out Online but it may be available at a nearby store. <span class=\"di dn-ns\"><a href=\"#\" data-ec=\"ecommerce\" data-ea=\"store inventory visibility\" data-el=\"sold out online\" class=\"js-store-inventory__check-msg pointer underline black-60\">Check store inventory</a>.</span>","SIV_SPECIALONLINE_CHECKSTORE":"This item may be available at a nearby store. <span class=\"di dn-ns\"><a href=\"#\" data-ec=\"ecommerce\" data-ea=\"store inventory visibility\" data-el=\"special order\" class=\"js-store-inventory__check-msg pointer underline black-60\">Check store inventory</a>.</span>","SIV_NOONLINE_INSTORE":"* Size {0} in this colour is Sold Out Online, but it is available at {1} store{2} near you.","SIV_SPECIALONLINE_INSTORE":"This item is also available at {0} nearby store{1}. <span class=\"di dn-ns\"><a href=\"#\" data-ec=\"ecommerce\" data-ea=\"store inventory visibility\" data-el=\"special order\" class=\"js-store-inventory__check-msg pointer underline black-60\">Check store inventory</a>.</span>","SIV_NOONLINE_NOSTORE":"* Size {0} in this colour is Sold Out Online and In Store. Call Aritzia Concierge at 1-855-Aritzia (274-8942) and we will help you find the next best thing.","SIV_NOONLINE_NOSTORE_SP":"* Size {0} in this colour is Sold Out Online and In Store.","SIV_AVAILABLE_TODAY":"Available today","SIV_AVAILABLE_TOMORROW":"Available tomorrow","SIV_AVAILABLE_WHEN_OPEN":"Available when boutique opens again","IN_STOCK":"In Stock","QTY_IN_STOCK":"{0} Item(s) In Stock","PREORDER":"Pre-Order","QTY_PREORDER":"{0} item(s) are available for pre-order.","REMAIN_PREORDER":"The remaining items are available for pre-order.","BACKORDER":"Special Order","QTY_BACKORDER":"{0} item(s) on Special Order","REMAIN_BACKORDER":"The remaining items are available on back order.","NOT_AVAILABLE":"Sorry this item is no longer available.","REMAIN_NOT_AVAILABLE":"Sorry, only {0} of this item are left in stock."};
app.icons = {"bigArrow":"<svg width=\"32px\" height=\"62px\" viewBox=\"0 0 32 62\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z\" fill=\"#000000\" transform=\"translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) \"></path></g></svg>","closeIcon":"<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z\" fill=\"black\"/></svg>","playIconRound":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g fill=\"#999999\"><path d=\"M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 Z\" fill-rule=\"nonzero\"/><polygon points=\"18.9409752 11.9934733 8.12357407 18.2957699 8.12357407 5.7042301\"/></g></g></svg>","pauseIconRound":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g><path d=\"M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 Z\" fill=\"#999999\" fill-rule=\"nonzero\"/><g transform=\"translate(8.903226, 6.967742)\" stroke=\"#999999\" stroke-width=\"2\"><g><line x1=\"0.255319149\" y1=\"5.73018335e-14\" x2=\"0.255319149\" y2=\"9.59871708\"/><line x1=\"5.77021277\" y1=\"5.73018335e-14\" x2=\"5.77021277\" y2=\"9.59871708\"/></g></g></g></g></svg>","swiperArrow":"<svg width=\"21\" height=\"16\" viewBox=\"0 0 21 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z\" fill=\"black\"/></svg>","checkmark":"<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g><path d=\"M5,5 L5,7.999 L12,8 L12,9 L5,8.999 L5,9 L4,9 L4,5 L5,5 Z\" fill=\"#000000\" transform=\"translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) \"></path></g></g></svg>"};
app.urls = {"staticPath":"/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/","accountShow":"/en/my-account","accountPanelAccountCreate":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Account-PanelAccountCreate","loginPanelProcess":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Login-PanelProcess","addProduct":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-AddProduct","cartShow":"https://www.aritzia.com/en/cart","cartCheckout":"https://www.aritzia.com/en/checkout/express","giftRegAdd":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Address-GetAddressDetails?addressID=","addressList":"https://www.aritzia.com/en/my-account/addresses","addressEdit":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Address-Edit","getProductUrl":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Product-Show","getBonusProducts":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Product-GetBonusProducts","addBonusProduct":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-AddBonusProduct","quickShop":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-QuickShopAdd","searchsuggest":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Search-GetSuggestions","summaryRefreshURL":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COBilling-UpdateSummary","billingSelectCC":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COBilling-SelectCreditCard","ShippingMethodsJSON":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COShipping-GetApplicableShippingMethodsJSON","ShippingMethodList":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COShipping-UpdateShippingMethodList","GetShippingMethodsList":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COShipping-SelectShippingMethod","compareShow":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Compare-Show","compareAdd":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Compare-AddProduct","compareRemove":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Compare-RemoveProduct","compareEmptyImage":"/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw25a3068f/images/comparewidgetempty.png","giftCardCheckBalance":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COBilling-GetGiftCertificateBalance","productLastVisit":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Product-IncludeLastVisited","qtyoverfiveURL":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Page-Include?cid=qtyoverfive","wishlistShow":"https://www.aritzia.com/en/mylist","wishlistMoveAll":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-MoveAllToCart?mode=ajax","wishlistFind":"/en/list-search","wishlistSwiper":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-Swiper","wishlistGetLocalWishlist":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-GetLocalWishlist","wishlistCheckTimestamp":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-CheckTimestamp","wishlistGetWishlist":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-GetWishlist","wishlistAdd":"https://www.aritzia.com/en/mylist/add","wishlistRemove":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-Remove","wishlistUpdate":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-Update","wishlistSetPrivate":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-SetPrivate","wishlistSetPublic":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-SetPublic","wishlistSetSearchable":"https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Wishlist-SetSearchable","wishlistOverMax":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Page-Include?cid=wishlistovermax","changeCountryCA":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Page-Include?cid=welcome-ca","changeCountryUS":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Page-Include?cid=welcome-us","changeCountryINTL":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Page-Include?cid=welcome-intl","storeLocator":"/en/store-locator","storeLocatorPin":"https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw678d247c/images/interface/aritzia-pin-location.svg","cartNoStockUI":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-NoStockUI","inputCheckBox":"/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw5763b522/images/buttons/checkboxSmall.png","inputRadio":"/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw5e3fbaae/images/buttons/input-controls-sprite.png","currencyConverter":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Currency-SetSessionCurrency","toggleStoredAddress":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COShipping-ToggleStoredAddress","giftMessageUpdateJSON":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COSummary-UpdateGiftMessageJson","cartUndo":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-UndoAction","chatAgentAvailability":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Chat-GetAgentAvailabilty","newsletterArrow":"https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw8d45adad/images/interface/icon-arrow-right-white.png","sizeGuideSizeCompare":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/SizeGuideCharts-GetSizeCompare","storeInventoryCheck":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Product-GetAllStoresInventory","storePickupUpdate":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-UpdateLineItemsPickupStoreJSON","storeDetailPanel":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Stores-DetailsPanel","updatePreferredStore":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Stores-UpdatePreferredStore","getCartStore":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Cart-GetCartStore","getGetMatchingProducts":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Product-GetMatchingProductsSwiper","DYGetAPIProperties":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/DynamicYield-GetAPIProperties","updateBasketEmail":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COSummary-UpdateEmail","getReturnCarrierInfo":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/WSReturn-GetReturnCarrierInfo","updateShippingAddress":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COSummary-UpdateShippingAddress","checkoutSummary":"/en/checkout/summary","updateBillingData":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COSummary-UpdateBillingData","deleteAccountDialog":"https://www.aritzia.com/en/my-account/edit-profile/delete/dialog","setCCAfterpayPayment":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COSummary-SetCCAfterpayPayment","addGC":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/COSummary-AddGC","notificationPanel":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/NotificationList-Start","notificationlistRemove":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/NotificationList-Remove","getLocalNotificationlist":"/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/NotificationList-GetLocalNotificationList"};
}(window.app = window.app || {}));
</script>
<script src="https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/js/app.plugins.min.js"></script>
<script src="https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/js/app.artz.min.js"></script>
<script> 
	if(app.page){ 
		app.page.setContext({"title":"My Account","type":"MyAccount","ns":"account","eum":"Account"}); 
	}
</script>
<script>
	var meta = "";
	var keywords = "";
	var topCatID = "";
</script>
<script>
(function () {
document.addEventListener('ftr:tokenReady', function(evt) {
var token = evt.detail;
if (token != null) {
var postInfo = {
ftrToken : token
};
jQuery.ajax({
type: "POST",
url: "/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/ForterValidate-UpdateForterInfo",
data: postInfo,
success: function(data) {}
});
}
});
})()
</script>
<script type="text/javascript" id="d7007ce577c1">
(function () {
var merchantConfig = {
csp: false
};
var siteId = "d7007ce577c1";
function t(t,n){for(var e=t.split(""),r=0;r<e.length;++r)e[r]=String.fromCharCode(e[r].charCodeAt(0)+n);return e.join("")}function n(n){return t(n,-S).replace(/%SN%/g,siteId)}function e(){var t="no"+"op"+"fn",n="g"+"a",e="n"+"ame";return window[n]&&window[n][e]===t}function r(){return!(!navigator.brave||"function"!=typeof navigator.brave.isBrave)}function o(){return document.currentScript&&document.currentScript.src}function i(t){try{B.ex=t,e()&&-1===B.ex.indexOf(R.uB)&&(B.ex+=R.uB),r()&&-1===B.ex.indexOf(R.uBr)&&(B.ex+=R.uBr),o()&&-1===B.ex.indexOf(R.nIL)&&(B.ex+=R.nIL),window.ftr__snp_cwc||(B.ex+=R.s),F(B)}catch(t){}}function c(t,n){function e(o){try{o.blockedURI===t&&(n(),document.removeEventListener(r,e))}catch(t){document.removeEventListener(r,e)}}var r="securitypolicyviolation";document.addEventListener(r,e),setTimeout(function(){document.removeEventListener(r,e)},2*60*1e3)}function a(t,n,e,r){var o=!1;t="https://"+t,c(t,function(){r(!0),o=!0});var i=document.createElement("script");i.onerror=function(){if(!o)try{r(!1),o=!0}catch(t){}},i.onload=e,i.type="text/javascript",i.id="ftr__script",i.async=!0,i.src=t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a)}function u(t,n,e,r){var o=!1,i=new XMLHttpRequest;if(c("https:"+t,function(){e(new Error("CSP Violation"),!0),o=!0}),"withCredentials"in i)i.open("GET",t,!0);else{if("undefined"==typeof XDomainRequest)return;i=new XDomainRequest,i.open("GET",t)}Object.keys(r).forEach(function(t){i.setRequestHeader(t,r[t])}),i.onload=function(){"function"==typeof n&&n(i)},i.onerror=function(t){if("function"==typeof e&&!o)try{e(t,!1),o=!0}catch(t){}},i.onprogress=function(){},i.ontimeout=function(){"function"==typeof e&&e("tim"+"eo"+"ut",!1)},setTimeout(function(){i.send()},0)}function d(t,siteId,n){function e(t){var n=t.toString(16);return n.length%2?"0"+n:n}function r(t){if(t<=0)return"";for(var n="0123456789abcdef",e="",r=0;r<t;r++)e+=n[Math.floor(Math.random()*n.length)];return e}function o(t){for(var n="",r=0;r<t.length;r++)n+=e(t.charCodeAt(r));return n}function i(t){for(var n=t.split(""),e=0;e<n.length;++e)n[e]=String.fromCharCode(255^n[e].charCodeAt(0));return n.join("")}n=n?"1":"0";var c=[];return c.push(t),c.push(siteId),c.push(n),function(t){var n=40,e="";return t.length<n/2&&(e=","+r(n/2-t.length-1)),o(i(t+e))}(c.join(","))}function f(){function t(){C&&(Q(R.dUAL),setTimeout(s,E,R.dUAL))}function n(t,n){i(n?R.uAS+R.uF+R.cP:R.uAS+R.uF)}window.ftr__fdad(t,n)}function s(t){try{var n=t===R.uDF?q:C;if(!n)return;a(n,void 0,function(){try{X(),i(t+R.uS)}catch(t){}},function(n){try{X(),B.td=1*new Date-B.ts,i(n?t+R.uF+R.cP:t+R.uF),t===R.uDF&&f()}catch(t){i(R.eUoe)}})}catch(n){i(t+R.eTlu)}}var h="22g6otrwjeq6qsu1forxgiurqw1qhw2vwdwxv",v="fort",w="erTo",l="ken";window.ftr__config={m:merchantConfig,s:"15",si:siteId};var m=!1,p=v+w+l,g=10,_={write:function(t,n,e,r){void 0===r&&(r=!0);var o,i;if(e?(o=new Date,o.setTime(o.getTime()+24*e*60*60*1e3),i="; expires="+o.toGMTString()):i="",!r)return void(document.cookie=escape(t)+"="+escape(n)+i+"; path=/");for(var c=1,a=document.domain.split("."),u=g,d=!0;d&&a.length>=c&&u>0;){var f=a.slice(-c).join(".");document.cookie=escape(t)+"="+escape(n)+i+"; path=/; domain="+f;var s=_.read(t);null!=s&&s==n||(f="."+f,document.cookie=escape(t)+"="+escape(n)+i+"; path=/; domain="+f),d=-1===document.cookie.indexOf(t+"="+n),c++,u--}},read:function(t){var n=null;try{for(var e=escape(t)+"=",r=document.cookie.split(";"),o=32,i=0;i<r.length;i++){for(var c=r[i];c.charCodeAt(0)===o;)c=c.substring(1,c.length);0===c.indexOf(e)&&(n=unescape(c.substring(e.length,c.length)))}}finally{return n}}},y=window.ftr__config.s;y+="ck";var T=function(t){if(document.head){var n=function(){var n=document.createElement("link");return n.setAttribute("rel","pre"+"con"+"nect"),n.setAttribute("cros"+"sori"+"gin","anonymous"),n.onload=function(){document.head.removeChild(n)},n.onerror=function(t){document.head.removeChild(n)},n.setAttribute("href",t),document.head.appendChild(n),n}();setTimeout(function(){document.head.removeChild(n)},3e3)}},S=3,x=n(h||"22g6otrwjeq6qsu1forxgiurqw1qhw2vwdwxv"),A=t("[0Uhtxhvw0LG",-S),L=t("[0Fruuhodwlrq0LG",-S),k=t("Li0Qrqh0Pdwfk",-S),C,U="fgq71iruwhu1frp",q=n("(VQ(1"+U+"2vq2(VQ(2vfulsw1mv"),D=n("(VQ(1"+U+"2vqV2(VQ(2vfulsw1mv"),E=10;window.ftr__startScriptLoad=1*new Date;var b=function(t){var n="ft"+"r:tok"+"enR"+"eady";window.ftr__tt&&clearTimeout(window.ftr__tt),window.ftr__tt=setTimeout(function(){try{delete window.ftr__tt,t+="_tt";var e=document.createEvent("Event");e.initEvent(n,!1,!1),e.detail=t,document.dispatchEvent(e)}catch(t){}},1e3)},F=function(t){var n=function(t){return t||""},e=n(t.id)+"_"+n(t.ts)+"_"+n(t.td)+"_"+n(t.ex)+"_"+n(y);_.write(p,e,400,!0),b(e),window.ftr__gt=e},I=function(){var t=_.read(p)||"",n=t.split("_"),e=function(t){return n[t]||void 0};return{id:e(0),ts:e(1),td:e(2),ex:e(3),vr:e(4)}},V=function(){for(var t={},n="fgu",e=[],r=0;r<256;r++)e[r]=(r<16?"0":"")+r.toString(16);var o=function(t,n,r,o,i){var c=i?"-":"";return e[255&t]+e[t>>8&255]+e[t>>16&255]+e[t>>24&255]+c+e[255&n]+e[n>>8&255]+c+e[n>>16&15|64]+e[n>>24&255]+c+e[63&r|128]+e[r>>8&255]+c+e[r>>16&255]+e[r>>24&255]+e[255&o]+e[o>>8&255]+e[o>>16&255]+e[o>>24&255]},i=function(){if(window.Uint32Array&&window.crypto&&window.crypto.getRandomValues){var t=new window.Uint32Array(4);return window.crypto.getRandomValues(t),{d0:t[0],d1:t[1],d2:t[2],d3:t[3]}}return{d0:4294967296*Math.random()>>>0,d1:4294967296*Math.random()>>>0,d2:4294967296*Math.random()>>>0,d3:4294967296*Math.random()>>>0}},c=function(){var t="",n=function(t,n){for(var e="",r=t;r>0;--r)e+=n.charAt(1e3*Math.random()%n.length);return e};return t+=n(2,"0123456789"),t+=n(1,"123456789"),t+=n(8,"0123456789")};return t.safeGenerateNoDash=function(){try{var t=i();return o(t.d0,t.d1,t.d2,t.d3,!1)}catch(t){try{return n+c()}catch(t){}}},t.isValidNumericalToken=function(t){return t&&t.toString().length<=11&&t.length>=9&&parseInt(t,10).toString().length<=11&&parseInt(t,10).toString().length>=9},t.isValidUUIDToken=function(t){return t&&32===t.toString().length&&/^[a-z0-9]+$/.test(t)},t.isValidFGUToken=function(t){return 0==t.indexOf(n)&&t.length>=12},t}(),R={uDF:"UDF",dUAL:"dUAL",uAS:"UAS",mLd:"1",eTlu:"2",eUoe:"3",uS:"4",uF:"9",tmos:["T5","T10","T15","T30","T60"],tmosSecs:[5,10,15,30,60],bIR:"43",uB:"u",uBr:"b",cP:"c",nIL:"i",s:"s"};try{var B=I();try{B.id&&(V.isValidNumericalToken(B.id)||V.isValidUUIDToken(B.id)||V.isValidFGUToken(B.id))?window.ftr__ncd=!1:(B.id=V.safeGenerateNoDash(),window.ftr__ncd=!0),B.ts=window.ftr__startScriptLoad,F(B),window.ftr__snp_cwc=!!_.read(p),window.ftr__snp_cwc||(q=D);for(var G="for"+"ter"+".co"+"m",M="ht"+"tps://c"+"dn9."+G,O="ht"+"tps://"+B.id+"-"+siteId+".cd"+"n."+G,j="http"+"s://cd"+"n3."+G,N=[M,O,j],H=0;H<N.length;H++)T(N[H]);var P=new Array(R.tmosSecs.length),Q=function(t){for(var n=0;n<R.tmosSecs.length;n++)P[n]=setTimeout(i,1e3*R.tmosSecs[n],t+R.tmos[n])},X=function(){for(var t=0;t<R.tmosSecs.length;t++)clearTimeout(P[t])};window.ftr__fdad=function(n,e){if(!m){m=!0;var r={};r[k]=d(window.ftr__config.s,siteId,window.ftr__config.m.csp),u(x,function(e){try{var r=e.getAllResponseHeaders().toLowerCase();if(r.indexOf(L.toLowerCase())>=0){var o=e.getResponseHeader(L);window.ftr__altd2=t(atob(o),-S-1)}if(r.indexOf(A.toLowerCase())<0)return;var i=e.getResponseHeader(A),c=t(atob(i),-S-1);if(c){var a=c.split(":");if(a&&2===a.length){for(var u=a[0],d=a[1],f="",s=0,h=0;s<20;++s)f+=s%3>0&&h<12?siteId.charAt(h++):B.id.charAt(s);var v=d.split(",");if(v.length>1){var w=v[0],l=v[1];C=u+"/"+w+"."+f+"."+l}}}n()}catch(t){}},function(t,n){e&&e(t,n)},r)}},Q(R.uDF),setTimeout(s,E,R.uDF)}catch(t){i(R.mLd)}}catch(t){}})();
</script>
<script data-ot-ignore src="https://media.twiliocdn.com/sdk/js/flex-webchat/releases/2.3.0/twilio-flex-webchat.min.js" defer></script>
<script data-ot-ignore src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/lib/aritzia-webchat-widget.min.js" defer></script>
<script type="module">
		let envSettings = {
			accountSid: "AC35bc3d8624d14cbc14b705468e23a001",
			flexFlowSid: "FOb9d243431ff3ac71800479542ac416c1"
		};
		app.chat.init( envSettings );
	</script>
<div class="ar-mobile-nav js-mobile-nav fixed dn-ns absolute--fill bg-white z-9999">
<div class="flex flex-column h-100 js-mobile-nav__parent">
<div class="ar-mobile-nav__search js-mobile-nav__search flex items-center flex-shrink-0">
<form role="search" action="/en/search" class="relative w-100 flex items-center" name="simpleSearch" data-eins-suggestion="true">
<div class="ar-mobile-nav__search-wrapper relative flex flex-auto mh3">
<a role="button" class="js-mobile-nav__search-icon h-100 items-center flex flex-shrink-0 pv2" data-ec="navigation" data-ea="nav-primary-search" data-el="expand" aria-label="Search Open">
<svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="black">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.36316 8.5C2.36316 5.11726 5.10542 2.375 8.48816 2.375C11.8709 2.375 14.6132 5.11726 14.6132 8.5C14.6132 11.8827 11.8709 14.625 8.48816 14.625C5.10542 14.625 2.36316 11.8827 2.36316 8.5ZM8.48816 0.625C4.13892 0.625 0.613159 4.15076 0.613159 8.5C0.613159 12.8492 4.13892 16.375 8.48816 16.375C10.3475 16.375 12.0564 15.7306 13.4036 14.6529L19.3694 20.6187L20.6068 19.3813L14.641 13.4155C15.7187 12.0683 16.3632 10.3594 16.3632 8.5C16.3632 4.15076 12.8374 0.625 8.48816 0.625Z" />
</svg>
</a>
<input type="text" value class="js-header__search-input f1 bg-transparent w-100" style="border: none; padding: 0.6154rem 1.231rem;" name="q" autocomplete="off" autocorrect="off" autocapitalize="off" aria-label="Search" />
<a href="#" role="button" class="js-header__search-clear ar-header__search-clear absolute flex right-0 top-0 h-100 justify-center items-center" aria-label="Clear search " tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
<a href="#" role="button" class="js-mobile-nav__cancel h-100 items-center flex-shrink-0 dn pr3" data-ec="navigation" data-ea="nav-primary-search" data-el="collapse" aria-label="Clear search " tabindex="0">
<span aria-hidden="true">
Cancel
</span>
</a>
<input type="submit" aria-hidden="true" hidden class="dn" style="display:none;" />
</form>
<div class="ar-mobile-nav__search-results js-mobile-nav__search-results w-100 left-0 absolute overflow-auto bg-white z-999">
<ul class="pl3 pl0-ns pb6-5 pb0-ns ar-suggestion-results__suggested js-suggestion-results__suggested">
<li class="js-header__panel-spacer ttu mb3">Suggested</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/effortless-pant-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="effortless-pant-9" data-ga-parent="Suggested" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/suiting-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="Suiting-9" data-ga-parent="Suggested" data-ga-cat="suiting">
Suiting
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/cargo-parachute-shop-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="cargo-parachute-shop-9" data-ga-parent="Suggested" data-ga-cat="cargo &amp; parachute">
Cargo &amp; Parachute
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/sweatsuits-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="sweatsuits-9" data-ga-parent="Suggested" data-ga-cat="sweatsuits">
Sweatsuits
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/activewear-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="activewear-9" data-ga-parent="Suggested" data-ga-cat="activewear">
Activewear
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/sculpt-knit-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="sculpt-knit-9" data-ga-parent="Suggested" data-ga-cat="sculpt knit">
Sculpt Knit
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/contour-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="contour-9" data-ga-parent="Suggested" data-ga-cat="contour">
Contour
</a>
</li>
</ul>
</div>
</div>
<div class="js-mobile-nav__menu overflow-auto flex-auto pt3 h-100">
<div class="flex flex-column flex-auto min-h-100 justify-between" data-selid="mobile-nav-topcat">
<div class="flex flex-column mt3 flex-shrink-0">
<ul>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="new" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="new-expand" data-cat="new" data-ga-parent="new">
New
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="clothing" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="clothing-expand" data-cat="clothing" data-ga-parent="clothing">
Clothing
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="Shop-by" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="Shop-by-expand" data-cat="shop-by" data-ga-parent="shop by">
Shop By
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="accessories-and-shoes" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="accessories-and-shoes-expand" data-cat="accessories-and-shoes" data-ga-parent="accessories">
Accessories
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="brands" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="brands-expand" data-cat="brands" data-ga-parent="brands">
Brands
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="stories" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="stories-expand" data-cat="stories" data-ga-parent="stories">
Stories
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="the-super-puff-5" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="the-super-puff-5-expand" data-cat="the-super-puff-5" data-ga-parent="the super puff&trade;">
The Super Puff&trade;
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="sweatfleece" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="sweatfleece-expand" data-cat="sweatfleece" data-ga-parent="sweatfleece">
Sweatfleece
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
<li class>
<a href="#menu-l2" class="ar-mobile-nav__trigger js-mobile-nav__trigger  ph3 pv0 df flex-wrap items-center justify-between f2 relative w-100" data-panel="sale" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="sale-expand" data-cat="sale" data-ga-parent="sale">
Sale
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</a>
</li>
</ul>
</div>
<div class="pv3">
</div>
<div class="flex flex-column" data-selid="mobile-nav-helpcat">
<ul class="pb3 ar-mobile-nav__helper-links">
<li class="pb3">
<a href="https://www.aritzia.com/en/my-account" class="ph3 db" data-panel="sign-in" data-link-type="nav-global">
Sign In
</a>
</li>
<li class="pb3">
<a href="/en/mylist" class="ph3 db" data-panel="wishlist" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-cat="wishlist" data-link-type="wishlist-nav">
My List
</a>
</li>
<li class="pb3">
<a href="#menu-l2" class="js-mobile-nav__trigger ph3 db" data-panel="help" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="help-expand" data-cat="help">
Get Help
</a>
</li>
<li>
<a href="#menu-l2" class="js-mobile-nav__trigger ph3 db" data-panel="aritzia" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="aritzia-expand" data-cat="aritzia">
About Aritzia
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="absolute absolute--fill bg-white dn js-mobile-nav__children">
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="new">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="new-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
New
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/new" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="new">
All New
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Categories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/denim" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new denim" data-link-type="nav-primary">
New Denim
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/new-dresses" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new dresses" data-link-type="nav-primary">
New Dresses
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/new-jackets-coats" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new jackets &amp; coats" data-link-type="nav-primary">
New Jackets &amp; Coats
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/new-pants" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new pants" data-link-type="nav-primary">
New Pants
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/new-blouses" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new shirts &amp; blouses" data-link-type="nav-primary">
New Shirts &amp; Blouses
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new?prefn1=subDepartment&amp;prefv1=Skirts" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new skirts" data-link-type="nav-primary">
New Skirts
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/new-sweaters" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new sweaters" data-link-type="nav-primary">
New Sweaters
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new sweatsuits" data-link-type="nav-primary">
New Sweatsuits
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/new-tshirts" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new t-shirts &amp; tops" data-link-type="nav-primary">
New T-Shirts &amp; Tops
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Featured
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/contour-feature-3" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="contour" data-link-type="nav-primary">
Contour
</a>
</li>
<li class="pb3  ar-category-isnew">
<a href="https://www.aritzia.com/en/new/online-exclusives-new" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="online exclusives" data-link-type="nav-primary">
Online Exclusives
<sup class="ar-category__new-label ttu pt2">New</sup>
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/sweatsuit-sets-feature" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="sweatfleece" data-link-type="nav-primary">
Sweatfleece
</a>
</li>
<li class="pb3  ar-category-isnew">
<a href="https://www.aritzia.com/en/new/valentines-day-new" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="valentine's day" data-link-type="nav-primary">
Valentine&#39;s Day
<sup class="ar-category__new-label ttu pt2">New</sup>
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Stories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/contour-sp24-story" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="new contour does things" data-link-type="nav-primary">
New Contour Does Things
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/lunar-new-year-new" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="lunar new year: year of the dragon" data-link-type="nav-primary">
Lunar New Year: Year of the Dragon
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/bundled-up-story-new" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="bundled up edit" data-link-type="nav-primary">
Bundled Up Edit
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/new/view-all-stories" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="new" data-ga-cat="view all stories" data-link-type="nav-primary">
View All Stories
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="clothing">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="clothing-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Clothing
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/clothing" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="clothing">
All Clothing
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Categories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="womens-workout-clothes" data-ga-parent="clothing" data-ga-cat="activewear">
Activewear
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="womens-workout-clothes">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="womens-workout-clothes-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Category
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-tops" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-leggings-1" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Leggings
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/workout-jackets" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Jackets
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/sports-bras" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bra Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-bike-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bike Shorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-sweaters" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Fleece
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-active-jumpsuits-rompers" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Jumpsuits &amp; Rompers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-bodysuits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Leotards &amp; Bodysuits
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Pants
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-skirts-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Skirts &amp; Dresses
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-workout-flares" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Flares
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/running-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Shorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/workout-accessories" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Accessories
</a>
</li>
<li class="mt4 ttu ph3 db black-60 bg-white">
Fabric
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/tna-butter" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
TnaBUTTER&trade;
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/tna-life" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
TnaLIFE&trade;
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/tna-breathe" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
TnaBREATHE&trade;
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/tna-move" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
TnaMOVE&trade;
</a>
</li>
<li class="mt4 ttu ph3 db black-60 bg-white">
Activity
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-hiking-clothes" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Hiking
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/dance-outfits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Dance
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/tennis" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Tennis
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/womens-workout-clothes/womens-gym-clothes" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Working Out
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/favourites-3" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="clothing" data-ga-cat="back in" data-link-type="nav-primary">
Back In
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/blazers-2" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="clothing" data-ga-cat="blazers &amp; vests" data-link-type="nav-primary">
Blazers &amp; Vests
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/bodysuits" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="bodysuits" data-ga-parent="clothing" data-ga-cat="bodysuits">
Bodysuits
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="bodysuits">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="bodysuits-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/bodysuits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Bodysuits
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/bodysuits/bodysuits-sleeveless" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sleeveless
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/bodysuits/bodysuits-shortsleeve" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Short Sleeve
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/bodysuits/bodysuits-longsleeve" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Long Sleeve
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/jeans" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="jeans" data-ga-parent="clothing" data-ga-cat="denim">
Denim
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="jeans">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="jeans-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Style
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/wideleg-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Wide-Leg
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/straight-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Straight
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/low-rise-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Low Rise
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/boyfriend-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Loose
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/denim-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Skirts &amp; Dresses
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/flared-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Flare &amp; Boot
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/slim-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Slim
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/short-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Shorts
</a>
</li>
<li class="mt4 ttu ph3 db black-60 bg-white">
Brands
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/denimforum-denim" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Denim Forum
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/levis" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Levi&rsquo;s&reg; Premium
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/agolde" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
AGOLDE
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/citizens" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Citizens of Humanity
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/redone-denim" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
RE/DONE
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/eb-denim" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
EB Denim
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jeans/ksubi-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Ksubi
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/dresses" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="dresses" data-ga-parent="clothing" data-ga-cat="dresses">
Dresses
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="dresses">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="dresses-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Dresses
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/mini-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Mini
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/midi-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Midi
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/maxi-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Maxi
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/cocktail-party-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Party
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/wear-to-work-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Wear to Work
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/slip-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Slip
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/bodycon-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bodycon
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/sweater-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweater
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/dresses/satin-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Satin
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/coats-jackets" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="coats-jackets" data-ga-parent="clothing" data-ga-cat="jackets &amp; coats">
Jackets &amp; Coats
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="coats-jackets">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="coats-jackets-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Coats
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/wool-coats-3" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Wool Coats
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/puffers" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Puffers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/thesuperpuff-1" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
The Super Puff&trade;
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/trench-coats" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Trenches
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/vests" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Vests
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/parkas-coats" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Parkas
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/puffers-men" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Men&#39;s Puffers
</a>
</li>
<li class="mt4 ttu ph3 db black-60 bg-white">
Jackets
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/lightweight-jackets" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Lightweight Jackets
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/jackets-blazer" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Blazers &amp; Vests
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/bomber-jacket" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bombers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/faux-leather-jackets" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Vegan Leather
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/shirt-jacket" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Shirt Jackets
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/active-jackets-1" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Active Jackets
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/coats-jackets/denim-jackets" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Denim Jackets
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/jumpsuits-rompers" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="jumpsuits-rompers" data-ga-parent="clothing" data-ga-cat="jumpsuits &amp; rompers">
Jumpsuits &amp; Rompers
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="jumpsuits-rompers">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="jumpsuits-rompers-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jumpsuits-rompers" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Jumpsuits &amp; Rompers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jumpsuits-rompers/jumpsuits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Jumpsuits
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/jumpsuits-rompers/rompers" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Rompers
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/knitwear" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="knitwear" data-ga-parent="clothing" data-ga-cat="knitwear">
Knitwear
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="knitwear">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="knitwear-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/knitwear" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Knitwear
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/knitwear/wonder-yarn" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Wonder Yarn
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/knitwear/knit-merino" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Merino
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/knitwear/knit-sculpt-knit" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sculpt Knit
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/knitwear/vegan-knits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Non-Wool
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/leggings-and-bike-shorts" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="leggings-and-bike-shorts" data-ga-parent="clothing" data-ga-cat="leggings &amp; bike shorts">
Leggings &amp; Bike Shorts
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="leggings-and-bike-shorts">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="leggings-and-bike-shorts-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/leggings-and-bike-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Leggings &amp; Bike Shorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/leggings-and-bike-shorts/leggings" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Leggings
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/leggings-and-bike-shorts/bike-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bike Shorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/leggings-and-bike-shorts/flares" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Flares
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/pants" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="pants" data-ga-parent="clothing" data-ga-cat="pants">
Pants
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="pants">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="pants-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Pants
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/tailored-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Trousers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/effortless-pant" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
The Effortless Pant&trade;
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/cargo-pant-1" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cargo &amp; Parachute
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/highwaisted-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
High-Waisted
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/faux-leather-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Vegan Leather
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/wideleg-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Wide-Leg
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/cropped-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cropped
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/flare-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Flare
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/pants-jumpsuits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Jumpsuits
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/pants/sweatpants-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweatpants
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/sale-2" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="clothing" data-ga-cat="sale" data-link-type="nav-primary">
Sale
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/blouses" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="blouses" data-ga-parent="clothing" data-ga-cat="shirts &amp; blouses">
Shirts &amp; Blouses
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="blouses">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="blouses-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Shirts &amp; Blouses
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/work-tops" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Wear to Work
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/going-out-tops" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Going Out
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/button-up-shirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Button-Up
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/bustier" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bustiers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/satin-blouses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Satin
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/cropped-blouses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cropped
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/sheer-blouses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sheer
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/blouses/denim-blouses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Denim
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/shorts" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="shorts" data-ga-parent="clothing" data-ga-cat="shorts">
Shorts
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="shorts">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="shorts-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Shorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/shorts/denim-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Denim
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/shorts/trouser-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Trouser
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/shorts/sweatshorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweatshorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/shorts/shorts-bike" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bike
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/skirts" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="skirts" data-ga-parent="clothing" data-ga-cat="skirts">
Skirts
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="skirts">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="skirts-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Skirts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/mini-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Mini
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/midi-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Midi
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/maxi-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Maxi
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/pleated-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Pleated
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/satin-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Satin
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/faux-leather-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Vegan Leather
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/cargo-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cargo &amp; Utility
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/printed-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Prints &amp; Plaids
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/skirts/active-skirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Active
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/socks-and-tights" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="clothing" data-ga-cat="socks &amp; tights" data-link-type="nav-primary">
Socks &amp; Tights
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/suits-for-women" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="suits-for-women" data-ga-parent="clothing" data-ga-cat="suits &amp; tailoring">
Suits &amp; Tailoring
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="suits-for-women">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="suits-for-women-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/suits-for-women" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Suits &amp; Tailoring
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/suits-for-women/suit-trousers" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Trousers
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/suits-for-women/suit-blazers" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Blazers &amp; Vests
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/suits-for-women/suit-skirts-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Skirts &amp; Shorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/suits-for-women/shirting" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Shirting
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/sweaters" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="sweaters" data-ga-parent="clothing" data-ga-cat="sweaters">
Sweaters
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="sweaters">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="sweaters-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Sweaters
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters/cardigan-sweaters" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cardigans
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters/cropped-sweaters" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cropped
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters/vest-sweaters" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweater Vests
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters/turtleneck-sweaters" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Turtlenecks
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters/sweatshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweatshirts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweaters/dresses-sweaters-1" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweater Dresses
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="sweatsuit-sets" data-ga-parent="clothing" data-ga-cat="sweatsuits">
Sweatsuits
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="sweatsuit-sets">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="sweatsuit-sets-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Sweatsuits
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/sweat-pants" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweatpants
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/sweat-shirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweatshirts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/sweat-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sweatshorts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/mega-fit" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Mega Fit
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/boyfriend-fit" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Boyfriend Fit
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/perfect-fit" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Perfect Fit
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/swimsuits" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="swimsuits" data-ga-parent="clothing" data-ga-cat="swim">
Swim
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="swimsuits">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="swimsuits-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/swimsuits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Swim
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/swimsuits/swim-bottoms" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bottoms
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/swimsuits/swim-one-piece" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
One-Pieces
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/swimsuits/swim-tops" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Tops
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/tshirts" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="tshirts" data-ga-parent="clothing" data-ga-cat="t-shirts &amp; tops">
T-Shirts &amp; Tops
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="tshirts">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="tshirts-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All T-Shirts &amp; Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/longsleeve-tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Long Sleeves
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/shortsleeve-tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Short Sleeves
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/tank-tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Tank Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/turtleneck-tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Turtlenecks
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/strapless-tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Tube Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/cropped-tshirts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Cropped
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/full-length" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Full Length
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/bra-top" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bra Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/clothing/tshirts/bodysuits-1" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bodysuits
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Featured
</li>
<li class="pb3  ar-category-isnew">
<a href="https://www.aritzia.com/en/clothing/online-exclusives-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="clothing" data-ga-cat="online exclusives" data-link-type="nav-primary">
Online Exclusives
<sup class="ar-category__new-label ttu pt2">New</sup>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="Shop-by">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="Shop-by-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Shop By
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="Shop-by">
All Shop By
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Iconically Aritzia
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/contour-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="contour" data-link-type="nav-primary">
Contour
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/seamless-feature-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="seamless" data-link-type="nav-primary">
Seamless
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/cozy-fleece-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="sweatfleece" data-link-type="nav-primary">
Sweatfleece
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/effortless-pant-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="the effortless pant&trade;" data-link-type="nav-primary">
The Effortless Pant&trade;
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/super-puff-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="the super puff&trade;" data-link-type="nav-primary">
The Super Puff&trade;
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Occasion
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/womens-basics" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="everyday essentials" data-link-type="nav-primary">
Everyday Essentials
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/event-dressing" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="going out" data-link-type="nav-primary">
Going Out
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/loungewear-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="loungewear" data-link-type="nav-primary">
Loungewear
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/vacation-outfits" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="vacation" data-link-type="nav-primary">
Vacation
</a>
</li>
<li class="pb3  ar-category-isnew">
<a href="https://www.aritzia.com/en/shop-by/romantic-edit" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="valentine's day" data-link-type="nav-primary">
Valentine&#39;s Day
<sup class="ar-category__new-label ttu pt2">New</sup>
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/workwear" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="wear to work" data-link-type="nav-primary">
Wear to Work
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/working-out" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="working out" data-link-type="nav-primary">
Working Out
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Trending
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="shapewear-clothing" data-ga-parent="shop by" data-ga-cat="body shaping">
Body Shaping
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="shapewear-clothing">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="shapewear-clothing-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Fabric
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Contour
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/sculpt-knit-clothing" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Sculpt Knit
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/seamless-clothes" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Seamless
</a>
</li>
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/tops" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Tops
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/shapewear-bodysuits" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Bodysuits
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/body-shaping-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Dresses &amp; Skirts
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/intimates-shapewear" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Intimates
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/cargo-parachute-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="cargo &amp; parachute" data-link-type="nav-primary">
Cargo &amp; Parachute
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/two-piece-sets-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="matching sets" data-link-type="nav-primary">
Matching Sets
</a>
</li>
<li class="pb3  ar-category-isnew">
<a href="https://www.aritzia.com/en/shop-by/online-exclusive" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="online exclusives" data-link-type="nav-primary">
Online Exclusives
<sup class="ar-category__new-label ttu pt2">New</sup>
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/puffers-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="puffers" data-link-type="nav-primary">
Puffers
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Fabric
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/butter-fabric" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="butter" data-link-type="nav-primary">
Butter
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/cozy-fleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="cozy fleece" data-link-type="nav-primary">
Cozy Fleece
</a>
</li>
<li class="pb3  ar-category-isnew">
<a href="https://www.aritzia.com/en/shop-by/crepette-clothing" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="crepette" data-link-type="nav-primary">
Crepette
<sup class="ar-category__new-label ttu pt2">New</sup>
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/sculpt-knit-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="sculpt knit" data-link-type="nav-primary">
Sculpt Knit
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing?prefn1=sustainability&amp;prefv1=Organic%20Materials%20%7C%20Recycled%20Materials%20%7C%20Responsible%20Forestry%20%7C%20Responsible%20Wool%20%7C%20Responsible%20Cashmere%20%7C%20Responsible%20Down" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="sustainable styles" data-link-type="nav-primary">
Sustainable Styles
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/shop-by/vegan-leather-shop-by" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="shop by" data-ga-cat="vegan leather" data-link-type="nav-primary">
Vegan Leather
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="accessories-and-shoes">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="accessories-and-shoes-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Accessories
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/accessories-and-shoes" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="accessories-and-shoes">
All Accessories
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Categories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/bags-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="bags" data-link-type="nav-primary">
Bags
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/belts-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="belts" data-link-type="nav-primary">
Belts
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/gloves" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="gloves &amp; mittens" data-link-type="nav-primary">
Gloves &amp; Mittens
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/hats-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="hats" data-link-type="nav-primary">
Hats
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/intimates-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="intimates" data-link-type="nav-primary">
Intimates
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/scarves-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="scarves" data-link-type="nav-primary">
Scarves
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/shoes-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="shoes" data-link-type="nav-primary">
Shoes
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/socks-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="socks &amp; tights" data-link-type="nav-primary">
Socks &amp; Tights
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/tech" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="tech" data-link-type="nav-primary">
Tech
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Featured
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/everyday-socks-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="everyday socks" data-link-type="nav-primary">
Everyday Socks
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/accessories-and-shoes/new-era-feature-2" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="accessories" data-ga-cat="new era" data-link-type="nav-primary">
New Era
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="brands">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="brands-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Brands
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/brands" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="brands">
All Brands
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Iconically Aritzia
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/contour-icon" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="contour" data-link-type="nav-primary">
Contour
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/seamless-icon" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="seamless" data-link-type="nav-primary">
Seamless
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/sweatfleece-icon" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="sweatfleece" data-link-type="nav-primary">
Sweatfleece
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/effortless-icon" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="the effortless pant&trade;" data-link-type="nav-primary">
The Effortless Pant&trade;
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/super-world" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="the super puff&trade;" data-link-type="nav-primary">
The Super Puff&trade;
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Our Brands
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/t-babaton" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="babaton" data-link-type="nav-primary">
Babaton
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/denimforum" class="ar-mobile-nav__trigger js-mobile-nav__level-two js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-panel="denimforum" data-ga-parent="brands" data-ga-cat="denim forum">
Denim Forum
</a>
<div class="js-mobile-nav__child js-mobile-nav__child-level-three flex flex-column h-100 w-100 bg-white absolute top-0 z-1 dn" data-parent-panel="denimforum">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="denimforum-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="mt4 ttu ph3 db black-60 bg-white">
Categories
</li>
<li>
<a href="https://www.aritzia.com/en/brands/denimforum" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
All Denim Forum
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/brands/denimforum/denim-forum-jeans" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Jeans
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/brands/denimforum/denim-forum-jeans-skirts-dresses" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Skirts &amp; Dresses
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/brands/denimforum/denim-forum-jeans-jackets" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Shirts &amp; Jackets
</a>
</li>
<li>
<a href="https://www.aritzia.com/en/brands/denimforum/denim-forum-jeans-shorts" class="ph3 db f2 mv1 relative" data-link-type="nav-primary">
Shorts
</a>
</li>
</ul>
</div>
</div>
</div>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/wilfred-free" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="free" data-link-type="nav-primary">
Free
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/sunday-best" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="sunday best" data-link-type="nav-primary">
Sunday Best
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/ten-by-babaton" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="ten by babaton" data-link-type="nav-primary">
Ten by Babaton
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/group" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="the group" data-link-type="nav-primary">
The Group
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/tna" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="tna" data-link-type="nav-primary">
Tna
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/tnaction" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="tnaction&trade;" data-link-type="nav-primary">
TnAction&trade;
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/wilfred" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="wilfred" data-link-type="nav-primary">
Wilfred
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
More Brands We Love
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/agolde-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="agolde" data-link-type="nav-primary">
AGOLDE
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/asics-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="asics" data-link-type="nav-primary">
ASICS
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/citizens-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="citizens of humanity" data-link-type="nav-primary">
Citizens of Humanity
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/eb-denim-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="eb denim" data-link-type="nav-primary">
EB Denim
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/levis-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="levi&rsquo;s&reg; premium" data-link-type="nav-primary">
Levi&rsquo;s&reg; Premium
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/new-era" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="new era" data-link-type="nav-primary">
New Era
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/new-balance" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="new balance" data-link-type="nav-primary">
New Balance
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/redone" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="re/done" data-link-type="nav-primary">
RE/DONE
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/brands/salomon" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="brands" data-ga-cat="salomon" data-link-type="nav-primary">
Salomon
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="stories">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="stories-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Stories
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/stories" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="stories">
All Stories
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Spring 24
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/new-contour-spring-2024" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="new contour does things" data-link-type="nav-primary">
New Contour Does Things
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Winter 23
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/lunar-new-year-24" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="lunar new year: year of the dragon" data-link-type="nav-primary">
Lunar New Year: Year of the Dragon
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/super-on-you-story-feature-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="super on you" data-link-type="nav-primary">
Super On You
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/super-puff-styles-winter-23" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="the super puff&trade;. it&rsquo;s personal. on set." data-link-type="nav-primary">
The Super Puff&trade;. It&rsquo;s Personal. On Set.
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/winter-coat-outfits" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="bundled up edit" data-link-type="nav-primary">
Bundled Up Edit
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/emma-chamberlain-super-puff-winter-23" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="super goes with emma" data-link-type="nav-primary">
Super Goes With Emma
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/vegan-leather-edit" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="vegan leather edit" data-link-type="nav-primary">
Vegan Leather Edit
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/polar-fleece-winter-23" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="polar fleece edit" data-link-type="nav-primary">
Polar Fleece Edit
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/contour-pam-winter-23" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="she's pam. in contour." data-link-type="nav-primary">
She&#39;s Pam. In Contour.
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/contour-lookbook-winter-23" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="contour winter 23 lookbook" data-link-type="nav-primary">
Contour Winter 23 Lookbook
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/stories/sweaters-edit" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="stories" data-ga-cat="sweaters edit" data-link-type="nav-primary">
Sweaters Edit
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="the-super-puff-5">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="the-super-puff-5-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
The Super Puff&trade;
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/the-super-puff-5" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="the-super-puff-5">
All The Super Puff&trade;
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Categories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/the-iconic-supers" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the classic supers" data-link-type="nav-primary">
The Classic Supers
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/the-super-puff-mens-5" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the men's supers" data-link-type="nav-primary">
The Men&#39;s Supers
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/the-new-supers-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the new supers" data-link-type="nav-primary">
The New Supers
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/clothing/coats-jackets/puffers/thesuperpuff?prefn1=sustainability&amp;prefv1=Recycled%20Materials" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the 100% recycled supers" data-link-type="nav-primary">
The 100% Recycled Supers
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/super-puff-accessories-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the super accessories" data-link-type="nav-primary">
The Super Accessories
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/super-vests-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the super vests" data-link-type="nav-primary">
The Super Vests
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/the-waterproof-supers" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the waterproof supers" data-link-type="nav-primary">
The Waterproof Supers
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Featured
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/super-colours-2" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="super colours" data-link-type="nav-primary">
Super Colours
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/super-on-you-feature-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="super on you" data-link-type="nav-primary">
Super On You
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/super-puff-guide-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade; guide" data-link-type="nav-primary">
The Super Puff&trade; Guide
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/the-super-puff-5/super-puff-game-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade;: icy odyssey" data-link-type="nav-primary">
The Super Puff&trade;: Icy Odyssey
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="sweatfleece">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="sweatfleece-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Sweatfleece
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="sweatfleece">
All Sweatfleece
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Categories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/sweatpants-sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="sweatpants" data-link-type="nav-primary">
Sweatpants
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/sweatshirts-sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="sweatshirts" data-link-type="nav-primary">
Sweatshirts
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/sweatshorts-sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="sweatshorts" data-link-type="nav-primary">
Sweatshorts
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Fit
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/mega-sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="mega" data-link-type="nav-primary">
Mega
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/boyfriend-sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="boyfriend" data-link-type="nav-primary">
Boyfriend
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/perfect-sweatfleece" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="perfect" data-link-type="nav-primary">
Perfect
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Featured
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/perfect-hoodie-feature-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="cozy fleece perfect hoodie" data-link-type="nav-primary">
Cozy Fleece Perfect Hoodie
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sweatfleece/sweatfleece-guide-1" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sweatfleece" data-ga-cat="sweatfleece guide" data-link-type="nav-primary">
Sweatfleece Guide
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="sale">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a href="#menu" class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="sale-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Sale
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="js-mobile-nav__child-list ar-mobile-nav__child-list overflow-auto flex-auto pt3" data-selid="mobile-nav-subcat">
<div class="flex-auto mt3">
<ul class="ar-mobile-nav-l2s mb4">
<li class="pb3 ">
<a href="https://www.aritzia.com/en/sale" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-link-type="nav-primary" data-ga-parent="sale">
All Sale
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Categories
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/final-few" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="final few" data-link-type="nav-primary">
Final Few
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-dresses" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="dresses" data-link-type="nav-primary">
Dresses
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-coats-jackets" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="jackets &amp; coats" data-link-type="nav-primary">
Jackets &amp; Coats
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-jumpsuits-rompers" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="jumpsuits &amp; rompers" data-link-type="nav-primary">
Jumpsuits &amp; Rompers
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-leggings-bike-shorts" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="leggings &amp; bike shorts" data-link-type="nav-primary">
Leggings &amp; Bike Shorts
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-pants" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="pants" data-link-type="nav-primary">
Pants
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-blouses" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="shirts &amp; blouses" data-link-type="nav-primary">
Shirts &amp; Blouses
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-accessories" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="shoes &amp; accessories" data-link-type="nav-primary">
Shoes &amp; Accessories
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-shorts" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="shorts" data-link-type="nav-primary">
Shorts
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-skirts" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="skirts" data-link-type="nav-primary">
Skirts
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-sweaters" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="sweaters" data-link-type="nav-primary">
Sweaters
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/swim-sale" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="swim" data-link-type="nav-primary">
Swim
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale/sale-tshirts" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="t-shirts &amp; tops" data-link-type="nav-primary">
T-Shirts &amp; Tops
</a>
</li>
<li class="f0 ttu ph3 pb3 pt3 db bg-white js-mobile-nav__child-list--spacer">
Discount
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=50-60" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="50&ndash;60% off" data-link-type="nav-primary">
50&ndash;60% Off
</a>
</li>
<li class="pb3  ">
<a href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=60-70" class="ar-mobile-nav__trigger js-mobile-nav__trigger--ga-link ph3 df flex-wrap items-center justify-between f2 relative w-100" data-ga-parent="sale" data-ga-cat="60&ndash;70% off" data-link-type="nav-primary">
60&ndash;70% Off
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="account-nav" data-selid="mobile-nav-My Account">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="account-nav-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
<span class="js-mobile-nav__profile-name"></span>
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="flex flex-column overflow-auto flex-auto">
<div class="flex flex-auto flex-column mt3 f2 pl3">
<div class="content-asset">
<ul class="level-2">
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/mylist" data-link-type="nav-global">My List</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/order-history" data-link-type="nav-global">Order History</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/order-tracking" data-link-type="nav-global">Order Tracking</a></li>
<li class="ar-mobile-nav__child-subheader fn1 mb2-ns pb1-ns"><span class="db mt4 ttu black-70">Manage</span></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/edit-profile" data-link-type="nav-global">Profile</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/preferences" data-link-type="nav-global">Preferences</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/addresses" data-link-type="nav-global">Address Book</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/payment" data-link-type="nav-global">Payment Cards</a></li>

</ul>
</div> 
<ul class="ar-mobile-nav-l2s level-2">
<li class="f2 f1-ns" style="margin: 0"><a href="https://aritzia.ca1.qualtrics.com/jfe/form/SV_8C88e9gIyAlyjmS?Site=CA_EN" data-link-type="nav-global" target="_blank">Send Us Feedback</a></li>
<li class="f2 f1-ns">
<a href="https://airtable.com/shrNqPX9R03BqVrma" data-link-type="research-community-nav" target="_blank">Aritzia Research Community</a>
</li>
</ul>
</div>
<a href="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Login-Logout" class="js-header__logout ph3 mb3 db" data-link-type="nav-global">
Sign Out
</a>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="help" data-selid="mobile-nav-Get Help">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="help-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
Get Help
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="flex mt5 mh3 ttu">
<div class="js-chat--online dn w-100 mr2">
<a href="#" class="js-chat--start button secondary" aria-label="Live chat" title="Live chat" data-location="get-help-nav-web chat click" style="border-width: 1px; padding: 1.2em;">Live chat</a>
</div>
<div class="w-100 mr2">
<a href="tel:18552748942" class="js-contact-page-info-phone button secondary" data-link-type="get-help-nav-telephone" style="border-width: 1px; padding: 1.2em;">Phone</a>
</div>
<div class="w-100">
<a href="mailto:service@aritzia.com" class="button secondary" data-link-type="get-help-nav-mailto" style="border-width: 1px; padding: 1.2em;">Email</a>
</div>
</div>
<div class="flex flex-column overflow-auto flex-auto">
<div class="flex flex-auto flex-column mt3 f2 pl3">
<div class="content-asset">
<ul class="level-2">
<li class="pb3"><a href="https://www.aritzia.com/en/contact-us" data-link-type="get-help-nav">Contact Us</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/size-guide" data-link-type="get-help-nav">Size Guide</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/shipping-info" data-link-type="get-help-nav">Shipping</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/returns" data-link-type="get-help-nav">Returns &amp;
Exchanges</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/security" data-link-type="get-help-nav">Payment &amp;
Security</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/order-tracking" data-link-type="get-help-nav">Order Tracking</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/policies-information/specialorders.html" data-link-type="get-help-nav">Special Orders</a>
</li>
<li class="pb3"> <a href="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dwb5b6f227/aritzia/legal/California%20Transparency%20in%20Supply%20Chains%20Act%2007-24-2023.pdf" data-link-type="get-help-nav" target="”_blank”">California Transparency Act</a></li>
<li class="pb3 js-promotion-details__link"><a href="https://www.aritzia.com/en/sale-details" data-link-type="aritzia-nav">Promotion Details</a></li>

</ul>
</div> 
<ul class="ar-mobile-nav-l2s level-2">
<li class="f2 f1-ns" style="margin: 0"><a href="https://aritzia.ca1.qualtrics.com/jfe/form/SV_8C88e9gIyAlyjmS?Site=CA_EN" data-link-type="nav-global" target="_blank">Send Us Feedback</a></li>
<li class="f2 f1-ns">
<a href="https://airtable.com/shrNqPX9R03BqVrma" data-link-type="research-community-nav" target="_blank">Aritzia Research Community</a>
</li>
</ul>
</div>
</div>
</div>
<div class="js-mobile-nav__child flex flex-column h-100 dn" data-parent-panel="aritzia" data-selid="mobile-nav-About Aritzia">
<div class="ar-mobile-nav__child-header flex items-center flex-shrink-0">
<a class="js-mobile-nav__back pa3" data-ec="navigation" data-ea="nav-primary-hamburger-category" data-el="aritzia-collapse" aria-label="back">
<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7519 7.29942H4.16189L9.74189 1.71942L8.50189 0.479416L0.81189 8.16942L8.50189 15.8594L9.74189 14.6194L4.16189 9.04942H20.7519V7.29942Z" fill="black" />
</svg>
</a>
<span class="ttu flex-auto tc ph2 mt1">
About Aritzia
</span>
<a href="#" role="button" class="js-mobile-nav__close pa3" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="collapse" aria-label="Close Menu" tabindex="0">
<div class="ar-svg js-svg" data-default-color="black">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</a>
</div>
<div class="flex flex-column overflow-auto flex-auto">
<div class="flex flex-auto flex-column mt3 f2 pl3">
<div class="content-asset">
<ul class="level-2">
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/corporate-hub/corporate-landing.html" data-link-type="aritzia-nav" target="_blank">About
Us</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/corporate-hub/careers/careers-landing-page.html" target="_blank" data-link-type="aritzia-nav">Careers</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/corporate-hub/community/community-landing-page.html" target="_blank" data-link-type="aritzia-nav">Community</a></li>
<li class="pb3"><a href="https://investors.aritzia.com" data-link-type="aritzia-nav">Investor Relations</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/store-locator" data-link-type="aritzia-nav">Store Locator</a></li>
<li class="pb3 ga-promotion" ga-promotion="23-sp-garment-care-vegan-navigational"><a href="https://www.aritzia.com/en/fabric-care-guide" data-link-type="aritzia-nav">Fabric Care</a>
</li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/about-aritzia/accessibility.html" data-link-type="aritzia-nav">Accessibility</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/gift-card" data-link-type="aritzia-nav">Gift Cards</a>
</li>
<li class="pb3"><a href="https://www.aritzia.com/en/list-search" data-link-type="aritzia-nav">Find a List</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/at-your-service.html" data-link-type="aritzia-nav">Our
Services</a></li>
</ul>
</div> 
<ul class="ar-mobile-nav-l2s level-2">
<li class="f2 f1-ns" style="margin: 0"><a href="https://aritzia.ca1.qualtrics.com/jfe/form/SV_8C88e9gIyAlyjmS?Site=CA_EN" data-link-type="nav-global" target="_blank">Send Us Feedback</a></li>
<li class="f2 f1-ns">
<a href="https://airtable.com/shrNqPX9R03BqVrma" data-link-type="research-community-nav" target="_blank">Aritzia Research Community</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="ar-mobile-nav__overlay js-mobile-nav__overlay fixed absolute--fill db dn-ns bg-true-black o-0 z-2000"></div>

<script type="text/javascript">//<!--
/* <![CDATA[ */
function trackPage() {
    try{
        var trackingUrl = "https://www.aritzia.com/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/__Analytics-Start";
        var dwAnalytics = dw.__dwAnalytics.getTracker(trackingUrl);
        if (typeof dw.ac == "undefined") {
            dwAnalytics.trackPageView();
        } else {
            dw.ac.setDWAnalytics(dwAnalytics);
        }
    }catch(err) {};
}
/* ]]> */
// -->
</script>
<script type="text/javascript" src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/internal/jscript/dwanalytics-22.2.js" async="async" onload="trackPage()"></script>

<script src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/internal/jscript/dwac-21.7.js" type="text/javascript" async="async"></script>
<script src="https://cdn.cquotient.com/js/v2/gretel.min.js" type="text/javascript" async="async"></script>

<script type="text/javascript">//<!--
/* <![CDATA[ */
if (!window.dw) dw = {};
dw.applepay = {"action":{"cancel":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-Cancel","getRequest":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-GetRequest","onshippingcontactselected":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-ShippingContactSelected","onpaymentmethodselected":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-PaymentMethodSelected","onvalidatemerchant":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-ValidateMerchant","onpaymentauthorized":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-PaymentAuthorized","prepareBasket":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-PrepareBasket","onshippingmethodselected":"https:\/\/www.aritzia.com\/on\/demandware.store\/Sites-Aritzia_CA-Site\/en_CA\/__SYSTEM__ApplePay-ShippingMethodSelected"},"inject":{"directives":[{"css":"dw-apple-pay-button","query":"ISAPPLEPAY","action":"replace","copy":true}]}};
/* ]]> */
// -->
</script>
<script type="text/javascript" src="/on/demandware.static/Sites-Aritzia_CA-Site/-/en_CA/v1707563714206/internal/jscript/applepay.js" async="true"></script>
</body>
</html>