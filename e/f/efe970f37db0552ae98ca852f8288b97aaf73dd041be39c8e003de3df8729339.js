<!DOCTYPE html>
<html dir="ltr" lang="en-us" class="no-js">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    
        <link rel="preload stylesheet" href="https://www.dell.com/cdn/assets/shop/styles/global-fonts.min.142954444b1163250b65327cd7f30fef.css" as="style" />
    <link rel="preload stylesheet" href="//www.dell.com/cdn/assets/csb/htmlsitemapux/bundles/1.0.0.8111/css/error-page.min.css" as="style" />


    
    <title>Page Not Found</title>
    <link rel="canonical" href="https://www.dell.com/en-us/pagenotfound" />
    
        <meta name="COUNTRY" content="us" />
        <meta name="LANGUAGE" content="en" />
        <meta name="SEGMENT" content="gen" />
        <meta name="CUSTOMERSET" content="" />
        <meta name="TITLE" content="Page Not Found" />
        <meta name="DESCRIPTION" content="Page not found" />
        <meta name="KEYWORDS" content="404, page not found" />
        <meta name="robots" content="noindex" />
        <meta name="PAGENAME" content="us|en|gen|stp|notfoundpage|Index" />
        <meta name="PRODCAT" content="desktops" />
        <meta name="AUTHOR" content="Dell US" />
        <meta name="DOCUMENTCOUNTRYCODE" content="us" />
        <meta name="ENVIRONMENT" content="ST" />
        <meta name="detailpagename" content="pagenotfound" />
        <meta name="CHANNEL" content="https://www.dell.com/en-us/pagenotfound" />
        <meta name="SMch" content="3;172.16.0.104:61068" />

    <link rel="icon" type="image/x-icon" href="//www.dell.com/favicon.ico" />

    
        <link rel="preconnect" href="https://stt.dell.com" crossorigin="anonymous" />

        <link rel="dns-prefetch" href="https://dds.dell.com" crossorigin="anonymous" />


    
    <!--[if lt IE 9]>
        <script src="~/js/html5shiv.min.js" type="text/javascript" shared-asset="true" crossorigin="anonymous"></script>
    <![endif]-->
    
    
<script shared-add-to-script-loader="false" type="text/javascript">
    var Dell = window.Dell || {};
    Dell.Metrics = Dell.Metrics || {};
    Dell.Metrics.sc = Dell.Metrics.sc || {};
    Dell.Api = Dell.Api || {};
    Dell.Api.url = Dell.Api.url || { UserState: '//www.dell.com/csbapi/{0}/personalization/getusercontext' };

        Dell.Metrics.sc.country = "us";
        Dell.Metrics.sc.language = "en";
        Dell.Metrics.sc.segment = "gen";
        Dell.Metrics.sc.customerset = "";
        Dell.Metrics.sc.channel = "https://www.dell.com/en-us/pagenotfound";
        Dell.Metrics.sc.smch = "3;172.16.0.104:61068";
        Dell.Metrics.sc.pagename = "us|en|gen|stp|notfoundpage|Index";
        Dell.Metrics.sc.applicationname = "NotFoundPage";
        Dell.Metrics.sc.boomerangtti = "1476|1476|4187|-1|-1|-1|3635|552|undefined|Y|Y|Y|N|N|N|Y|Y";
        Dell.Metrics.sc.categoryid = "NotFoundPage";
        Dell.Metrics.sc.cms = "stp";
        Dell.Metrics.sc.dc = "dell";
        Dell.Metrics.sc.prod = "true";
        Dell.Metrics.sc.robots = "noindex";
        Dell.Metrics.sc.s_account = "dellglobalonline";
        Dell.Metrics.sc.trigger = "True";
        Dell.Metrics.sc.visitorapito = "4000";
        Dell.Metrics.sc.waapplicationname = "notfoundpage";
        Dell.Metrics.sc.wacontroller = "notfoundpage";
        Dell.Metrics.sc.waview = "Index";
        Dell.Metrics.sc.bodyhiding = "false";
    Dell.Metrics.sc.devicetype = 'D';
</script>
    <script type="text/javascript">"use strict";var MarketingUdo={CJ:{COUNTRY:Dell.Metrics.sc.country?Dell.Metrics.sc.country.toUpperCase():"",CSEG:Dell.Metrics.sc.customerset?Dell.Metrics.sc.customerset.toUpperCase():"",LANG:Dell.Metrics.sc.language?Dell.Metrics.sc.language.toUpperCase():"",SEG:Dell.Metrics.sc.segment?Dell.Metrics.sc.segment.toUpperCase():"",DEVICE:Dell.Metrics.sc.devicetype||"",FAMILY:Dell.Metrics.sc.categoryid||"",PRODUCT:"",CURRENCY:"",ORDERCODE:"",EMAILHASH:"",ACCOUNTID:"",CATEGORY:"",CATEGORYPATH:"",PLATFORM:"sitemap",PRODCAT:"",PROMOID:"10",CID:"",TYPE:"",DISCOUNT:"",OGID:"",COUPON:"",REVENUE:"",DEALS:"",PRODUCTLIST:[]}};</script>
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.start('dell-script-loader');</script>
    <script>var dellScriptLoader = (function () {
	"use strict";

	var scriptsArray = [];
	var urlRegex = /^(https:\/\/www\.|https:\/\/|\/\/|\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/; //exit if not a url or an array

	function scriptsArrayCopy() {
		return JSON.parse(JSON.stringify(scriptsArray));
	}

	//check for valid url
	function isValidUrl(url) {
		return typeof url === "string" && urlRegex.test(url);
	}

	//check for array
	function isValidArray(scripts) {
		return Array.isArray(scripts);
	}

	function load(scripts) {
		if (!(isValidUrl(scripts) || isValidArray(scripts))) {
			return;
		}

		//single url being passed
		if (isValidUrl(scripts)) {
            scriptsArray.push(scripts);
            return;
		}

		//handling of array
		if (isValidArray(scripts)) {
			for (var i = 0; i < scripts.length; ++i) {
				var _script = scripts[i];

				//if array of strings
				if (typeof _script === "string" && isValidUrl(_script)) {
                    scriptsArray.push({ url: _script });
                    continue;
				}

				//if array of objects with url and order
                if (_script.hasOwnProperty("url") && _script.hasOwnProperty("order") && !isNaN(Number(_script.order))) {
					_script.order = Number(_script.order);
					scriptsArray.push(_script);
					continue;
				}

				//if array of objects with only url
                if (_script.hasOwnProperty("url") && isValidUrl(_script.url)) {
                    scriptsArray.push(_script);
                    continue;
				}
			}
		}
	}

	return Object.freeze({
		load: load,
		scriptsArrayCopy: scriptsArrayCopy
	});
})();
</script>
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.end('dell-script-loader');</script>
    <script type="text/javascript">"use strict";Dell=window.Dell||{},Dell.Services={userContext:{}},function(u,d){(function(){function t(e){e=d.cookie.match("(^|[^;]+)\\s*"+e+"\\s*=\\s*([^;]+)");return e?e.pop():null}var e,n,s=this,l=u.sessionStorage,r="uctxt.state",c={Country:Dell.Metrics.sc.country,Segment:Dell.Metrics.sc.segment,Language:Dell.Metrics.sc.language,CustomerSet:Dell.Metrics.sc.customerset},o=u.innerWidth||d.documentElement.clientWidth||d.body.clientWidth,i=Dell.Api.url.UserState.replace("{0}",Dell.Metrics.sc.language+"-"+Dell.Metrics.sc.country);function a(){var e=Dell.Metrics.sc.prod?t("GAAuth"):t("GAAuthNONProd2");c.IsAuthenticated=null!==e,c.IsRecognized=null!==e||null!==t("GAAnon"),Dell.Metrics.sc.dfsauthstate=s.getComoState(),Dell.Metrics.sc.devicetype=o<768?"M":o<992?"T":"D"}s.get=function(){return c},s.getComoState=function(){var e="cold:no-dpa:no-da";return void 0!==c&&(c.IsAuthenticated||c.IsRecognized)&&(e=c.IsAuthenticated?"hot":"warm",e+=":"+(c.IsDellAdvantageMember?"da":"no-da"),e+=":"+(c.IsDellPreferredAccountMember?"dpa":"no-dpa")),e},!l||null!==(e=u.sessionStorage.getItem(r))&&(c=JSON.parse(e)),a(),0<i.length&&((n=new XMLHttpRequest).open("GET",i,!0),n.withCredentials=!1,n.onreadystatechange=function(e){var t;n.readyState===XMLHttpRequest.DONE&&(t=n.response,0!==n.status&&t&&JSON.stringify(c)!==t&&(c=JSON.parse(t),l&&u.sessionStorage.setItem(r,JSON.stringify(c)),a()))},n.send())}).call(Dell.Services.userContext)}(window,document);</script>

    
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.start('mbox-bundle');</script>
    <script type="text/javascript" src="//www.dell.com/cdn/assets/tnt/adobebundle/shop/bundle_toggle.min.js" shared-add-to-script-loader="false" async></script>
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.end('mbox-bundle');</script>



    <style type="text/css">
        @-webkit-viewport {
            width: device-width;
        }

        @-moz-viewport {
            width: device-width;
        }

        @-ms-viewport {
            width: device-width;
        }

        @-o-viewport {
            width: device-width;
        }

        @viewport {
            width: device-width;
        }

        [hidden] {
            display: none;
        }
    </style>
    
</head>
<body>
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.start('bodyGlobal');</script>
    <main>
        



<!--wmm:ignore-->
    <style nonce="">@charset "UTF-8";.UMH .mh-cart.empty .icon:before{display:none}.UMH .mh-cart .icon:before{content:attr(mh-bubble-count)}@media only screen and (min-width:0){.UMH .mh-cart .icon{display:block}.UMH .mh-cart .icon:before{right:-3px;top:-2px}}.UMH .mh-cart-dropdown{border-bottom:1px solid #f9f9f9;box-sizing:border-box;z-index:100}.UMH .mh-cart-dropdown .dropdown-title{padding:16px 16px 0}.UMH .mh-cart-dropdown a{display:block;text-decoration:none}.UMH .mh-cart-empty{display:none}.UMH .mh-cart.empty .mh-cart-empty{display:block}.UMH .mh-cart.empty .mh-cart-loaded{display:none}.UMH .mh-cart-empty-label{border-bottom:1px solid #c8c9c7;padding-bottom:80px}.UMH .mh-cart-content .mh-ct-dd-cartInfo{color:#636363;line-height:20px}.UMH .mh-cart-content .mh-ct-dd-cartInfo>span{padding:0 16px}.UMH .mh-cart-content ul{list-style-type:none;margin:0;padding:0}.UMH .mh-cart-content a{color:#444}.UMH .mh-cart-list-item{padding:0 16px}.UMH .mh-cart-list-item a{border-bottom:1px solid #c8c9c7;color:#0e0e0e;line-height:20px;outline-width:0}.UMH .mh-cart-list-item .mh-ct-hp-subtotal-wrap .mh-cart-category-label{color:#0e0e0e;font-size:.875em}.UMH .mh-cart-list-item .mh-ct-hp-subtotal-wrap .mh-cart-subtotal{color:#0e0e0e}.UMH .mh-cart-list-item:last-child{align-items:center;display:flex;padding:0}.UMH .mh-cart-list-item:last-child a{border-bottom:none;color:#636363;width:100%}.UMH.user-is-tabbing .mh-cart-list-item a:focus{outline:1px solid #00468b}.UMH .mh-cart-subtotal{display:flex;justify-content:space-between}.UMH .mh-cart-category-label{font-size:.875em;line-height:20px}.UMH .mh-saved-subtotal-label{font-size:.75em;line-height:20px}.UMH .mh-saved-subtotal-price{font-size:.75em;font-weight:700;text-align:right}@media only screen and (min-width:0){.UMH .mh-cart-dropdown{width:auto}.UMH .mh-cart-dropdown .mh-close{padding:16px}.UMH .mh-cart-dropdown h2.dropdown-title{display:none}.UMH .mh-cart-list-item a{padding:14px 0}.UMH .mh-cart-list-item:last-child a{padding:12px 16px}}@media only screen and (min-width:1024px){.UMH .mh-cart-dropdown{height:auto;width:256px}.UMH .mh-cart-dropdown h2.dropdown-title{display:block}.mh-cart-list-item a{padding:10px 0}.mh-cart-list-item:hover{background-color:#f0f0f0}.mh-cart-list-item:last-child a{padding:18px 16px}}.UMH .mh-close{display:flex;justify-content:flex-end}.UMH .mh-close a{display:inline-flex;height:15px;line-height:15px}.UMH .mh-close svg{height:15px;width:15px}@media only screen and (min-width:1024px){.UMH .mh-close{display:none}}.UMH .mh-contact{display:none}.UMH .mh-contact label{fill:#636363;color:#636363}.UMH .mh-contact>button>span:before{margin-right:6px}.UMH .mh-contact-nav>button>span:before{margin-right:9px}.UMH .menu-list-item>.mh-contact-btn,.UMH .mh-contact-icon .mh-flyout-wrapper>.mh-contact-btn{height:56px}.UMH .menu-list-item>.mh-contact-btn>span:before,.UMH .mh-contact-icon .mh-flyout-wrapper>.mh-contact-btn>span:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0c-.138-.006-.3-.009-.463-.009-6.602 0-11.974 5.271-12.136 11.834v8.755h1.54v.34a4.26 4.26 0 0 0 4.26 4.26h2V14h-2a4.26 4.26 0 0 0-3.649 2.1l-.011.02v-4.28c.161-5.397 4.575-9.711 9.996-9.711.163 0 .326.004.487.012l-.023-.001c.168-.01.363-.016.561-.016 5.391 0 9.769 4.335 9.839 9.709v4.287A4.267 4.267 0 0 0 22.805 14h-2.004v11.18h2a4.26 4.26 0 0 0 3.649-2.1l.011-.02v3.42l-6.46 3.38h-2.94V28h-2.12v4h5.62l8-4.24v-16C28.434 5.231 23.111-.013 16.563-.013c-.198 0-.394.005-.59.014L16.001 0zM7.08 18.26v-.003a2.12 2.12 0 0 1 1.994-2.116h.006v6.9a2.121 2.121 0 0 1-2-2.117v-.004zm17.84 2.66v.003a2.12 2.12 0 0 1-1.994 2.116h-.006v-6.9c1.118.065 2 .988 2 2.117v.004z' fill='%23636363'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:16px 16px;content:"";display:inline-block;height:16px;margin-right:4px;padding:4px;width:16px}@media only screen and (min-width:0){.UMH .mh-contact-icon.mh-contact-btn{height:auto!important}.UMH .mh-contact-icon.mh-contact-btn>span{align-items:center;display:flex}.UMH .mh-contact-icon.mh-contact-btn>span:before{margin-right:12px;position:relative}}@media only screen and (min-width:1024px){.UMH .mh-contact{display:block}}.UMH .flyoutOverlay{background:#000;content:"";cursor:pointer;display:none;height:calc(100vh - 58px);left:0;opacity:.5;position:fixed;width:100%;z-index:1000}.UMH .mh-utility-dwell-path{background-color:transparent;-webkit-clip-path:polygon(100% 0,0 100%,100% 100%);clip-path:polygon(100% 0,0 100%,100% 100%);display:none;left:-99%;position:absolute;top:0}.UMH .mh-utility-dwell-path:after,.UMH .mh-utility-dwell-path:before{display:none!important}.UMH .mh-flyout-wrapper{position:relative}.UMH .mh-flyout-wrapper>a[aria-expanded=true]{background:#f5f6f7}.UMH .mh-flyout-link{align-items:center;background-color:transparent;border:none;display:block;justify-content:center;padding:0;position:relative;text-decoration:none}.UMH .mh-flyout-link .icon{background:0 0;display:flex;position:relative}.UMH .mh-flyout-link .icon:before{background-color:#0672cb;border-radius:50%;color:#fff;display:block;font-size:.5em;font-weight:500;height:12px;line-height:12px;position:absolute;text-align:center;width:12px}.UMH .mh-flyout-link .label{font-size:.875em;padding:0}.UMH .mh-flyout-link:focus{outline-width:0}.UMH .mh-flyout-link~.flyout{background:#fff;border-radius:2px;box-shadow:0 4px 16px rgba(0,43,85,.12);box-sizing:border-box;height:auto;right:-1px;text-align:left;z-index:1001}.UMH .mh-flyout-link>span{align-items:center;cursor:pointer;height:100%;justify-content:center;width:100%}.UMH .mh-flyout-link>span:after{content:"";height:12px;top:40%;transition:transform .2s linear;width:12px}#mh-unified-footer.user-is-tabbing .mh-flyout-link:focus,.UMH.user-is-tabbing .mh-flyout-link:focus{box-shadow:0 0 0 1px #00468b}@media only screen and (min-width:0){.UMH .mh-top .right-column .mh-flyout-link:hover{border-bottom:2px solid #636363}.UMH .mh-flyout-link{height:58px;position:static;width:48px}.UMH .mh-flyout-link .icon svg{height:24px;width:24px}.UMH .mh-flyout-link>span{display:block;padding:17px 12px}.UMH .mh-flyout-link>span .label,.UMH .mh-flyout-link>span:after{display:none}.UMH .mh-flyout-link>span>span:not(.label){margin-right:0}.UMH .mh-flyout-link~.flyout{bottom:0;max-width:320px;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:58px;transform:translateX(110%);transition:transform .3s ease-out;width:320px;will-change:transform}.UMH .mh-flyout-link:hover .UMH .mh-flyout-link~.flyout.hide{background:0 0}.UMH .mh-flyout-link:hover .UMH .mh-flyout-link~.flyout.hide>*{transform:translateX(0)}.UMH .mh-flyout-link.show~.flyoutOverlay,.UMH .mh-flyout-link[aria-expanded=true]~.flyoutOverlay{display:block}.UMH .mh-flyout-link.show~.flyout,.UMH .mh-flyout-link[aria-expanded=true]~.flyout{transform:translateX(0)}}@media only screen and (min-width:1024px){.UMH .mh-top .right-column .mh-flyout-link:hover{border-bottom:0}.UMH .mh-bottom .flyoutOverlay{position:absolute;top:104px}.UMH .mh-bottom .utilityTop{top:58px}.UMH .mh-flyout-wrapper .mh-flyout-link{height:56px;padding:0 8px;width:auto}.UMH .mh-flyout-wrapper .mh-flyout-link .icon:before{right:-4px!important;top:-4px!important}.UMH .mh-flyout-wrapper .mh-flyout-link svg{height:16px;width:16px}.UMH .mh-flyout-wrapper .mh-flyout-link~.flyout{display:none;transition:none}.UMH .mh-flyout-wrapper .mh-flyout-link>span{display:flex;padding:0}.UMH .mh-flyout-wrapper .mh-flyout-link>span .label,.UMH .mh-flyout-wrapper .mh-flyout-link>span:after{display:block}.UMH .mh-flyout-wrapper .mh-flyout-link>span>span:not(.label){margin-right:8px}.UMH .mh-flyout-wrapper .mh-flyout-link[aria-expanded=true]~.flyoutOverlay{display:none}.UMH .mh-flyout-wrapper .mh-flyout-link[aria-expanded=true] span:after{transform:rotate(-180deg)}.UMH .mh-flyout-wrapper .mh-flyout-link[aria-expanded=true]~.flyout{border:1px solid #f9f9f9;bottom:auto;display:block;font-size:1em;height:auto;margin-top:0;max-width:none;min-height:50px;overflow-y:visible;position:absolute;top:auto;width:auto}}header#unified-masthead{font-size:16px!important}.UMH{background-color:#fff;border-bottom:2px solid #d2d2d2;display:flex;flex-direction:column;font-display:swap;font-family:roboto,Arial,Helvetica,sans-serif;position:relative;width:100%;z-index:1000}.UMH,.UMH *,.UMH :after,.UMH :before{box-sizing:border-box}.UMH .mh-top{height:56px;justify-content:space-between;position:relative}.UMH .mh-top,.UMH .mh-top .left-column,.UMH .mh-top .right-column{align-items:center;display:flex}.UMH .mh-top .left-column{flex:1}.UMH .mh-top .left-column .mh-mobile-nav-toggle{-webkit-tap-highlight-color:transparent;align-items:center;background-color:transparent;border-radius:0;border-width:0;cursor:pointer;display:flex;justify-content:center;padding:18px 14px}.UMH .mh-top .left-column .mh-mobile-nav-toggle.mh-nav-open,.UMH .mh-top .left-column .mh-mobile-nav-toggle.open,.UMH .mh-top .left-column .mh-mobile-nav-toggle:hover{background:#f0f0f0;border-bottom:2px solid #636363}.UMH .mh-top .left-column .mh-mobile-nav-toggle:hover{margin-bottom:-2px}.UMH .mh-top .left-column .mh-mobile-nav-toggle.open:hover{margin-bottom:0}.UMH .mh-top .left-column .mh-mobile-nav-toggle .mh-nav-menu-icon{border:none;cursor:pointer;display:flex;height:20px;position:relative;transform:rotate(0);transition:transform .5s ease-in-out;width:20px;will-change:transform}.UMH .mh-top .left-column .mh-mobile-nav-toggle .mh-nav-menu-icon span{background:#636363;border-radius:2px;display:block;height:2px;left:0;opacity:1;position:absolute;transform:rotate(0);transition:transform .25s ease-in-out;width:100%}.UMH .mh-top .left-column .mh-mobile-nav-toggle .mh-nav-menu-icon span:first-child{top:0}.UMH .mh-top .left-column .mh-mobile-nav-toggle .mh-nav-menu-icon span:nth-child(2),.UMH .mh-top .left-column .mh-mobile-nav-toggle .mh-nav-menu-icon span:nth-child(3){top:8px}.UMH .mh-top .left-column .mh-mobile-nav-toggle .mh-nav-menu-icon span:nth-child(4){top:16px}.UMH .mh-top .left-column .mh-mobile-nav-toggle.open .mh-nav-menu-icon span:first-child{left:50%;top:10px;width:0}.UMH .mh-top .left-column .mh-mobile-nav-toggle.open .mh-nav-menu-icon span:nth-child(2){left:-12.5%;transform:rotate(45deg);width:125%}.UMH .mh-top .left-column .mh-mobile-nav-toggle.open .mh-nav-menu-icon span:nth-child(3){left:-12.5%;transform:rotate(-45deg);width:125%}.UMH .mh-top .left-column .mh-mobile-nav-toggle.open .mh-nav-menu-icon span:nth-child(4){left:50%;top:10px;width:0}.UMH .mh-top .left-column .mh-header-wrapper{display:flex;flex:1}.UMH .mh-top .left-column .mh-logo a{display:flex;padding:8px}.UMH .mh-top .left-column .mh-logo a:focus{outline:1px solid #00468b}.UMH .mh-top .left-column .mh-logo a.dellLogoWrapper svg{fill:#0477cf}.UMH .mh-top .center-column{justify-content:space-evenly;position:absolute;top:calc(100% + 8px);width:100%}.UMH .mh-top .right-column{display:flex}.UMH .mh-top .right-column .country-selector,.UMH .mh-top .right-column .language-switcher-compact-model{display:none}.UMH .mh-top .dropdown-title{color:#636363;font-size:1em;font-weight:700;line-height:24px;margin:0 0 16px}.UMH>*{font-display:swap;font-family:roboto,Arial,Helvetica,sans-serif}.UMH .mh-overlay-background{background-color:rgba(0,0,0,.7);display:none;height:100%;position:absolute;width:100%;z-index:999}.UMH .mh-overlay-background.show{display:block}.UMH .skip-nav-link{align-items:center;background:#0063b8;border-radius:2px;color:#fff;display:flex;flex:none;font-size:1em;font-weight:500;justify-content:center;line-height:24px;margin:10px 0 0 10px;opacity:0;padding:12px 16px;position:absolute;text-decoration:none;transform:translateY(-100%);z-index:1000}.UMH .skip-nav-link:focus{border:2px solid #fff;opacity:1;outline:1px solid #00468b;outline-offset:0;transform:translateY(0)}.mh-ele-fixed-pos{position:fixed!important;top:0}@media only screen and (min-width:0){.UMH{padding-top:0}.UMH .mh-top{height:58px}.UMH .mh-top .left-column .mh-mobile-nav-toggle{margin-left:4px}.UMH .mh-top .left-column .mh-logo{padding:0}.UMH .mh-top .left-column .mh-logo a.delltechLogoWrapper{padding:20px 12px}.UMH .mh-top .left-column .mh-logo a{padding:9px 12px}.UMH .mh-bottom{height:68px}.UMH .mh-bottom.non-commerce{height:0}.UMH .right-column{margin-right:4px}.UMH[data-state=mobile-expanded]{position:fixed;top:0}.UMH[data-state=mobile-expanded] .mh-search{z-index:-1}.UMH[data-state=mobile-expanded] .mh-bottom>.flyoutOverlay{display:block}.UMH[data-state=mobile-expanded] .mh-nav{transform:translateX(0)}.UMH[data-state=mobile-expanded] .mh-nav .divider{padding:16px}.UMH[data-state=mobile-expanded] .mh-nav nav>ul{position:fixed}.UMH[data-state=mobile-expanded] .mh-nav .divider:before{border-bottom:1px solid #c8c9c7;content:"";display:block;width:100%}.UMH[data-state=mobile-expanded] .mh-nav .mob-country-selector{display:flex!important}.UMH[data-state=mobile-expanded] .mh-nav .mob-country-selector .country-selector{display:flex}.UMH[data-state=mobile-expanded] .mh-nav .mob-country-selector .flyout{display:none}}@media only screen and (min-width:768px){.UMH .mh-top .left-column .mh-logo a.delltechLogoWrapper{padding:16px 12px 18px}.UMH .mh-top .left-column .mh-logo a.delltechLogoWrapper svg.dellTechLogo{enable-background:new 0 0 1017 132;height:23px;width:182px}.UMH .mh-top .left-column .mh-logo a.delltechLogoWrapper svg.dellTechLogo path{fill:#0076ce}.UMH .mh-bottom{height:0;width:100%}}@media only screen and (min-width:1024px){.UMH{padding-top:2px}.UMH .mh-top{height:auto;margin:0 24px}.UMH .mh-top .left-column .mh-logo{padding:0}.UMH .mh-top .left-column .mh-logo a.delltechLogoWrapper{align-items:center;height:56px;padding:0 6px}.UMH .mh-top .left-column .mh-logo a.delltechLogoWrapper svg.dellTechLogo{height:23px;padding:0;width:182px}.UMH .mh-top .left-column .mh-mobile-nav-toggle{display:none}.UMH .mh-top .right-column{justify-content:flex-end;margin-right:0}.UMH .mh-top .right-column .label{color:#636363;font-size:.875em;font-weight:400;line-height:20px;margin-bottom:0;padding:0;text-transform:none}.UMH .mh-top .right-column .mh-label{color:#636363;font-size:1em;font-weight:400;line-height:20px;text-transform:none}.UMH .mh-top .right-column .mh-flyout-link:hover .label{color:#0e0e0e}.UMH .mh-top .right-column .mh-flyout-link .icon{height:16px;width:16px}.UMH .mh-top .right-column .mh-contact-dropdown .mh-contact-list-item .mh-contact-flyout-icon{padding-right:0}.UMH .mh-top .right-column .mh-contact-dropdown .mh-contact-list-item .label{display:inline-block;font-size:.875em;margin-left:14px}.UMH .mh-top .right-column .country-selector,.UMH .mh-top .right-column .language-switcher-compact-model{display:block}.UMH .mh-bottom{display:block;height:46px}.UMH .mh-bottom.non-commerce{height:46px}}.mh-nav .mh-menu-chevron.left{background-position:50%;height:20px;margin-right:6px;transform:rotate(180deg);width:20px}.mh-nav nav .child-nav>button:after{content:"";display:block;padding:15px;position:absolute;right:0}.mh-nav nav a,.mh-nav nav button{word-wrap:break-word;color:#636363;display:flex;font-size:1em;justify-content:flex-start;text-decoration:none}.mh-nav nav button{background-color:transparent;border:0;cursor:pointer;padding:0;text-align:left}.mh-nav nav ul{list-style-type:none;margin:0;padding:0}.mh-nav nav li{-webkit-tap-highlight-color:transparent;cursor:pointer;font-weight:400}.mh-nav nav li a:focus,.mh-nav nav li button:focus{outline:1px solid #00468b}.mh-nav nav ul.sub-nav{background-color:#fff;top:46px;z-index:1001}.mh-nav nav ul.sub-nav li>ul.sub-nav{background-color:#f0f0f0}.mh-nav nav ul.sub-nav li>ul.sub-nav li>ul.sub-nav{background-color:#e0e1e2}.mh-nav nav ul.sub-nav .mh-hide-mob-links{display:none}@media only screen and (min-width:0){.mh-nav{background-color:#fff;box-shadow:0 3px 8px rgba(0,43,85,.12);height:calc(100% - 58px);position:fixed;transform:translateX(-110%);transition:transform .3s ease-out;width:320px;will-change:transform;z-index:1001}.mh-nav,.mh-nav nav,.mh-nav nav>ul{overflow-x:hidden}.mh-nav nav>ul{height:100%;overflow-y:auto;padding-top:48px;width:320px}.mh-nav nav>ul>li:hover{background:#f5f6f7}.mh-nav nav>ul>li.divider:hover{background:0 0}.mh-nav nav>ul>li>a>span{word-wrap:break-word;padding-right:20px}.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav,.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li{pointer-events:auto}.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li:hover{background:#f0f0f0}.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li:not(.child-nav) a,.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav,.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li{pointer-events:auto}.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li:hover{background:#e0e1e2}.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li:not(.child-nav) a,.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav,.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li,.mh-nav nav>ul>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li[aria-expanded=true]>.sub-nav>li a{pointer-events:auto}.mh-nav nav>ul>li>.sub-nav,.mh-nav nav>ul>li>.sub-nav>li{pointer-events:none}.mh-nav nav>ul>li>.sub-nav>li a{word-wrap:break-word;padding-right:20px;pointer-events:none}.mh-nav nav>ul>li>.sub-nav>li a.dell-chat-link-setup{padding-right:0}.mh-nav nav>ul>li>.sub-nav>li a,.mh-nav nav>ul>li>.sub-nav>li li,.mh-nav nav>ul>li>.sub-nav>li ul{pointer-events:none}.mh-nav nav>ul>li>.sub-nav>li[aria-expanded=true]>.sub-nav-wrapper>.sub-nav,.mh-nav nav>ul>li>.sub-nav>li[aria-expanded=true]>.sub-nav-wrapper>.sub-nav a{pointer-events:auto}.mh-nav nav a,.mh-nav nav button{font-size:1em}.mh-nav nav .menu-list-item .nav-title{color:#0e0e0e;font-weight:600}.mh-nav nav ul{display:block;flex-direction:column}.mh-nav nav ul li{align-items:center;display:block;padding:13px 16px}.mh-nav nav ul li[aria-expanded=true] .country-list-container>li[aria-expanded=true]>.sub-nav-wrapper>.sub-nav,.mh-nav nav ul li[aria-expanded=true]>.sub-nav{display:flex!important;transform:translateZ(0);transition:transform .3s ease-out,visibility .1s ease-out;visibility:visible}.mh-nav nav ul li .chevron-csel-mob{float:right;transform:scale(1.89) rotate(-90deg)}.mh-nav nav ul li.mh-back-list-item{display:flex}.mh-nav nav ul li.mh-back-list-item .mh-back-button{align-items:center;background:0 0;border:none;display:inline-flex;justify-content:flex-start;width:100%}.mh-nav nav ul li ul.sub-nav{height:100%;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;transform:translate3d(100%,0,0);transition:transform .3s ease-out,visibility .4s ease-out;visibility:hidden;width:320px;will-change:transform}.mh-nav nav ul li ul.sub-nav .mh-hide-mob-links{display:flex}.mh-nav nav ul li ul.sub-nav .mh-mastheadTitle{color:#0e0e0e;font-weight:600}.mh-nav nav ul li:not(.child-nav){display:block}.mh-nav nav .mh-hide-mob-links,.mh-nav nav .mob-country-selector,.mh-nav nav .mob-language-switcher{display:flex}.mh-nav nav .child-nav>a,.mh-nav nav button{position:relative}.mh-nav nav a,.mh-nav nav button{display:block;width:100%}.mh-nav nav .child-nav>button:after{top:0}}@media only screen and (min-width:1024px){.mh-nav{background-color:transparent;box-shadow:none;font-size:1em;height:auto;transform:none;transition:all 0s ease 0s;width:100%;will-change:unset;z-index:auto}.mh-nav,.mh-nav nav{overflow-x:visible;position:relative}.mh-nav nav{display:inline-block;height:46px;padding:0 16px}.mh-nav nav>ul{height:auto;overflow-x:visible;overflow-y:visible;position:static}.mh-nav nav>ul>li .sub-nav,.mh-nav nav>ul>li .sub-nav>li,.mh-nav nav>ul>li .sub-nav>li a,.mh-nav nav>ul>li .sub-nav>li li,.mh-nav nav>ul>li .sub-nav>li ul{pointer-events:auto}.mh-nav nav a,.mh-nav nav button{font-size:.875em}.mh-nav nav>ul>li:focus{outline:1px solid #00468b}.mh-nav nav>ul>li>a>span{word-wrap:break-word;padding-right:0}.mh-nav nav>ul>li:active{box-shadow:inset 0 -2px 0 #1d73c2}.mh-nav nav>ul>li.uActived,.mh-nav nav>ul>li:hover{background:#f5f6f7;box-shadow:inset 0 -2px 0 #707070}.mh-nav nav>ul>li.uActived.child-nav .mh-top-nav-button span:after,.mh-nav nav>ul>li:hover.child-nav .mh-top-nav-button span:after{transform:rotate(-180deg)}.mh-nav nav>ul>li.uActived>.uActived>li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover{background:#f0f0f0}.mh-nav nav>ul>li.uActived>.uActived>li:hover>.uActived,.mh-nav nav>ul>li.uActived>.uActived>li:hover>ul.sub-nav,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>.uActived,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>ul.sub-nav,.mh-nav nav>ul>li:hover>.uActived>li:hover>.uActived,.mh-nav nav>ul>li:hover>.uActived>li:hover>ul.sub-nav,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>.uActived,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>ul.sub-nav{display:flex}.mh-nav nav>ul>li.uActived>.uActived>li:hover>.uActived li:hover,.mh-nav nav>ul>li.uActived>.uActived>li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>.uActived li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover>.uActived li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>.uActived li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>ul.sub-nav li:hover{background:#e0e1e2}.mh-nav nav>ul>li.uActived>.uActived>li:hover>.uActived li:hover>.uActived,.mh-nav nav>ul>li.uActived>.uActived>li:hover>.uActived li:hover>ul.sub-nav,.mh-nav nav>ul>li.uActived>.uActived>li:hover>ul.sub-nav li:hover>.uActived,.mh-nav nav>ul>li.uActived>.uActived>li:hover>ul.sub-nav li:hover>ul.sub-nav,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>.uActived li:hover>.uActived,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>.uActived li:hover>ul.sub-nav,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>ul.sub-nav li:hover>.uActived,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>ul.sub-nav li:hover>ul.sub-nav,.mh-nav nav>ul>li:hover>.uActived>li:hover>.uActived li:hover>.uActived,.mh-nav nav>ul>li:hover>.uActived>li:hover>.uActived li:hover>ul.sub-nav,.mh-nav nav>ul>li:hover>.uActived>li:hover>ul.sub-nav li:hover>.uActived,.mh-nav nav>ul>li:hover>.uActived>li:hover>ul.sub-nav li:hover>ul.sub-nav,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>.uActived li:hover>.uActived,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>.uActived li:hover>ul.sub-nav,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>ul.sub-nav li:hover>.uActived,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>ul.sub-nav li:hover>ul.sub-nav{display:flex}.mh-nav nav>ul>li.uActived>.uActived>li:hover>.uActived li:hover>.uActived li:hover,.mh-nav nav>ul>li.uActived>.uActived>li:hover>.uActived li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li.uActived>.uActived>li:hover>ul.sub-nav li:hover>.uActived li:hover,.mh-nav nav>ul>li.uActived>.uActived>li:hover>ul.sub-nav li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>.uActived li:hover>.uActived li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>.uActived li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>ul.sub-nav li:hover>.uActived li:hover,.mh-nav nav>ul>li.uActived>ul.sub-nav>li:hover>ul.sub-nav li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover>.uActived li:hover>.uActived li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover>.uActived li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover>ul.sub-nav li:hover>.uActived li:hover,.mh-nav nav>ul>li:hover>.uActived>li:hover>ul.sub-nav li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>.uActived li:hover>.uActived li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>.uActived li:hover>ul.sub-nav li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>ul.sub-nav li:hover>.uActived li:hover,.mh-nav nav>ul>li:hover>ul.sub-nav>li:hover>ul.sub-nav li:hover>ul.sub-nav li:hover{background:#d2d2d2}.mh-nav nav>ul>li.uActived>.uActived li.cta-link,.mh-nav nav>ul>li.uActived>ul.sub-nav li.cta-link,.mh-nav nav>ul>li:hover>.uActived li.cta-link,.mh-nav nav>ul>li:hover>ul.sub-nav li.cta-link{align-items:center;box-shadow:inset 0 1px 0 #c4c4c4;height:30px}.mh-nav nav>ul>li.uActived>.uActived .additional-nav-item,.mh-nav nav>ul>li.uActived>ul.sub-nav .additional-nav-item,.mh-nav nav>ul>li:hover>.uActived .additional-nav-item,.mh-nav nav>ul>li:hover>ul.sub-nav .additional-nav-item{background:#ebf1f6}.mh-nav nav ul li{align-items:stretch;padding:0}.mh-nav nav ul li ul.sub-nav{border:1px solid #c4c4c4;display:none;flex-direction:column;height:auto;left:auto;margin:0;overflow:visible;padding:0;position:absolute;top:46px;transform:none;visibility:visible;width:242px}.mh-nav nav ul li ul.sub-nav li{display:flex;padding:0}.mh-nav nav ul li ul.sub-nav li a,.mh-nav nav ul li ul.sub-nav li button{display:inline-block;padding:12px 22px 12px 16px;width:100%}.mh-nav nav ul li ul.sub-nav li.mh-back-list-item{display:none}.mh-nav nav ul li ul.sub-nav li>ul.sub-nav,.mh-nav nav ul li ul.sub-nav li>ul.sub-nav li>ul.sub-nav{left:240px;top:0}.mh-nav nav .mh-hide-mob-links{display:none!important}.mh-nav nav .mob-country-selector,.mh-nav nav .mob-language-switcher{display:none}.mh-nav nav .child-nav>button:after{top:12px}.mh-nav ul.mh-top-menu-nav{display:flex;flex-direction:row;height:100%;list-style-type:none;margin:0;padding:0;width:auto}.mh-nav ul.mh-top-menu-nav .mh-top-menu.child-nav>.mh-top-nav-button :after{content:"";display:block;height:20px;padding:0;position:absolute;right:15px;top:12px;transition:transform .3s cubic-bezier(0,.52,0,1);width:20px}.mh-nav ul.mh-top-menu-nav>.child-nav>button:after{display:none}.mh-nav ul.mh-top-menu-nav>li:hover>ul.sub-nav{display:flex}.mh-nav ul.mh-top-menu-nav li.uActived>ul.sub-nav{display:flex;transition-delay:.3s;visibility:visible!important}.mh-nav ul.mh-top-menu-nav button[aria-expanded=true]~ul.sub-nav{display:block}.mh-nav .mh-top-nav-button{align-items:center;background-color:transparent;border:none;cursor:pointer;display:flex;font-family:Roboto,Arial,Helvetica,sans-serif;justify-content:center;line-height:20px;padding:12px 36px 14px 16px;position:relative}.mh-nav .mh-top-nav-no-child{padding:12px 16px 14px}}.UMH .mh-myaccount.auth .icon:before{content:"✓";font-weight:900;transform:rotate(10deg)}.UMH .mh-myaccount.auth .icon.green:before{background-color:#6ea204}.UMH .mh-myaccount.auth .icon.yellow:before{background-color:orange}.UMH .mh-myaccount.auth .icon.black:before{background-color:#000}.UMH .mh-myaccount.auth .icon.orange:before{background-color:orange}.UMH .mh-myaccount .mh-myaccount-btn .label{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media only screen and (min-width:0){.UMH .mh-myaccount .mh-myaccount-btn .icon:before{right:0;top:-2px}}.mh-myaccount-dropdown-wrap{color:#636363}.mh-myaccount-dropdown-wrap .dropdown-title{margin:0!important}.mh-myaccount-dropdown-wrap ul{margin:0;padding:0}.mh-myaccount-dropdown-wrap ul li{list-style:none}.mh-myaccount-dropdown-wrap a{outline:0;text-decoration:none}.mh-myaccount-auth-dropdown{display:none}.auth .mh-myaccount-auth-dropdown{display:block}.auth .mh-myaccount-unauth-dropdown{display:none}.auth .twocolumn .mh-ma-dd-tc-unauth{display:none}.auth .twocolumn .mh-ma-dd-tc-auth,.twocolumn .mh-ma-dd-tc-unauth{display:block}.twocolumn .mh-ma-dd-tc-auth{display:none}.twocolumn .mh-my-accnt-two-col-ctas .mh-myaccount-ctas a{display:block;width:100%}.twocolumn .mh-my-accnt-two-col-ctas .mh-myaccount-ctas .mh-btn{margin-top:16px}.mh-myaccount-unauth-dropdown{padding:16px}.mh-myaccount-unauth-dropdown ul li{list-style:disc;margin-left:14px;padding:0}.mh-myaccount-unauth-dropdown .dropdown-subtitle{margin:10px 0}.mh-myaccount-unauth-dropdown .mh-myaccount-ctas a{display:block;width:100%}.mh-myaccount-unauth-dropdown .mh-myaccount-ctas .mh-btn{margin-top:16px}.mh-myaccount-unauth-dropdown .mh-myaccount-additional-options{background-color:#f5f6f7;margin:0 -16px -16px;padding:0 16px 16px}.mh-myaccount-unauth-dropdown .mh-myaccount-additional-options .dropdown-subtitle{margin-top:16px;padding-top:16px}.mh-myaccount-unauth-dropdown .mh-myaccount-additional-options ul li{list-style:none;margin-left:0;padding-bottom:8px}.mh-myaccount-unauth-dropdown .mh-myaccount-additional-options a{color:#0672cb;outline-width:0}.mh-myaccount-dropdown-two-col{padding:16px}.mh-myaccount-auth-dropdown{padding:16px 16px 0}.mh-myaccount-auth-wrapper{display:flex}.mh-myaccount-auth-wrapper .mh-ma-col-2 ul li a,.mh-myaccount-auth-wrapper .mh-myaccount-first-column ul li a{margin:0 0 0 -16px;padding:10px 16px 10px 32px}.mh-myaccount-auth-wrapper>div ul li a{color:#636363;display:block;position:relative}.mh-myaccount-auth-wrapper>div ul li a:hover{background-color:#f0f0f0;color:#0e0e0e}.mh-myaccount-auth-wrapper>div ul li a .current{color:#0e0e0e}.mh-myaccount-auth-wrapper>div ul li .current:before{background-color:#007db8;border-radius:50%;content:"";display:inline-block;height:8px;left:15px;position:absolute;top:15px;width:8px}.auth-signout{box-sizing:border-box}.auth-signout .mh-btn{width:100%}.mh-myaccount-additional-options>ul li>a:focus-visible,.mh-myaccount-label-list li>a:focus-visible{box-shadow:0 0 0 1px #00468b}@media only screen and (min-width:0){.mh-flyout-link~.flyout>*{height:auto}.mh-myaccount-dropdown-wrap{display:none;font-size:1em;line-height:24px}.mh-myaccount-dropdown-wrap .dropdown-title-container .dropdown-title{padding:12px 0}.mh-myaccount-dropdown-wrap .mh-close{padding:16px 16px 0}.mh-myaccount-auth-dropdown,.mh-myaccount-dropdown-two-col,.mh-myaccount-unauth-dropdown{width:320px}.mh-myaccount-auth-wrapper{flex-direction:column}.mh-myaccount-auth-wrapper .mh-ma-col-2,.mh-myaccount-auth-wrapper .mh-myaccount-first-column{border-right:0}.mh-myaccount-auth-wrapper .mh-ma-col-2 .dropdown-title,.mh-myaccount-auth-wrapper .mh-myaccount-first-column .dropdown-title{padding:12px 0}.mh-myaccount-auth-wrapper>div ul li a{padding:12px 16px}.mh-myaccount-auth-dropdown .dropdown-title-container,.mh-myaccount-dropdown-two-col .dropdown-title-container{border-bottom:0}.auth-signout{padding:16px 0}}@media only screen and (min-width:1024px){.mh-flyout-link~.flyout>*{height:auto}.UMH .mh-top .mh-myaccount-dropdown-wrap .dropdown-title{font-size:1.142857em}.mh-myaccount-dropdown-wrap{display:block;font-size:.875em;font-weight:400;line-height:20px}.mh-myaccount-dropdown-wrap a[role=button]{font-size:1em}.mh-myaccount-dropdown-wrap .dropdown-title-container .dropdown-title{padding:0 0 16px}.mh-myaccount-unauth-dropdown{width:314px}.auth .mh-myaccount-auth-dropdown{width:100%}.auth .mh-myaccount-auth-dropdown .dropdown-title-container{border-bottom:1px solid #b6b6b6}.mh-myaccount-dropdown-two-col{width:513px}.mh-myaccount-dropdown-two-col .dropdown-title-container{border-bottom:1px solid #b6b6b6}.mh-myaccount-auth-wrapper{flex-direction:row;justify-content:space-between}.mh-myaccount-auth-wrapper .mh-myaccount-left-wrapper{border-right:1px solid #c8c9c7}.mh-myaccount-auth-wrapper>div{width:256.5px}.mh-myaccount-auth-wrapper>div ul li a{padding:10px 16px}.mh-myaccount-auth-dropdown.mh-myaccount-auth-dropdown-extra-wide{width:100%}.auth-signout,.mh-my-accnt-two-col-ctas{border-left:1px solid #c8c9c7;float:right;padding:16px 0 16px 16px;width:241.5px}.auth-signout{border-left:0}.mh-my-accnt-two-col-ctas{padding-top:0}.mh-my-accnt-two-col-ctas .auth-signout{padding-bottom:0}}.UMH .mh-search{align-items:center;border-radius:2px;height:48px;max-width:612px}.UMH .mh-search-input{-webkit-appearance:none;background-color:#fff;border:1px solid #b6b6b6;border-radius:2px;-webkit-border-radius:2px;box-sizing:border-box;color:#0e0e0e;font-weight:400;outline:0;padding:5px 98px 5px 16px;width:100%}.UMH .mh-search-input:focus{box-shadow:0 0 0 2px #fff,0 0 0 3px #00468b}.UMH input.mh-search-input:-moz-placeholder-shown,.UMH input.mh-search-input::-moz-placeholder{color:#6e6e6e;font-family:roboto,Arial,Helvetica,sans-serif;font-style:normal}.UMH input.mh-search-input::placeholder,.UMH input.mh-search-input:placeholder-shown{color:#6e6e6e;font-family:roboto,Arial,Helvetica,sans-serif;font-style:normal}.UMH input.mh-search-input[type=search]::-webkit-search-cancel-button,.UMH input.mh-search-input[type=search]::-webkit-search-decoration,.UMH input.mh-search-input[type=search]::-webkit-search-results-button,.UMH input.mh-search-input[type=search]::-webkit-search-results-decoration{display:none}.UMH input.mh-search-input[type=search]::-ms-clear,.UMH input.mh-search-input[type=search]::-ms-reveal{display:none;height:0;width:0}.UMH .mh-search-btns{align-items:center;background-position:50%;background-repeat:no-repeat;display:flex;height:48px;position:absolute;right:16px}.UMH .mh-search-btns button{cursor:pointer}.UMH .mh-search-cancel-label{background-color:transparent;border:none;color:#636363;cursor:pointer;display:none;height:48px;position:relative;right:-30%;width:46px}.UMH .mh-search-cancel-label:focus,.UMH .mh-search-cancel-label:hover{background-color:#d9f5fd;border-radius:2px}.UMH .mh-search-cancel-label:focus{box-shadow:2px 2px 0 #fff}.UMH .mh-search-cancel-label:active{background-color:#94dcf7}.UMH .mh-search-btn{outline-width:0;width:46px}.UMH .mh-search-btn:active,.UMH .mh-search-btn:focus,.UMH .mh-search-btn:hover{border-radius:2px}.UMH .mh-search-btn:focus{background-color:#fff}.UMH .mh-search-btn:active,.UMH .mh-search-btn:hover{background-color:#f5f6f7}.UMH .mh-search-cancel{background-color:transparent;border:none;display:none;right:0;top:9px}.UMH .mh-search-submit{background-color:transparent;border:none;margin-right:1px}.UMH .mh-search-input::-ms-clear{display:none}@media only screen and (min-width:0){.UMH .mh-search{left:0;position:relative;width:100%}.UMH .mh-search-only-mobile{display:flex}.UMH .mh-search-only-deskTop{display:none}.UMH .mh-search-only-mobile{height:68px;position:absolute;top:58px;width:100%}.UMH .mh-search-input{font-size:1em;height:48px;line-height:24px;margin:0 16px;transition:width .2s cubic-bezier(0,.52,0,1)}.UMH .mh-search-btn{height:46px;width:44px}.UMH .mh-search-transform .mh-search-btns{margin:0;right:56px}.UMH .mh-search-transform .mh-search-cancel-label{display:block;right:2px}.UMH .mh-search-cancel{right:30px}.UMH .mh-search-temp-wrapper{display:flex;left:0;position:absolute;top:66px;width:100%}}@media only screen and (min-width:768px){.UMH .mh-search-only-deskTop{display:flex;flex:1}.UMH .mh-search-only-mobile{display:none}.UMH .mh-search{flex:1;left:0;margin:0 64px;position:relative;top:0}.UMH .mh-search-btn{height:30px;width:30px}.UMH .mh-search-btns{height:32px;right:2px}.UMH .mh-search-input{font-size:.875em;height:auto;line-height:20px;margin:0}.UMH .mh-search-submit{display:inline-block;margin-left:8px;padding-top:5px;top:9px}.UMH .mh-search-cancel{padding-top:5px;right:30px}.UMH .mh-search-transform .mh-search-cancel-label{display:block;right:2px}.UMH .mh-search-transform .mh-search-input{width:100%}.UMH .mh-search-transform .mh-search-cancel-label{display:none}.UMH .mh-search-temp-wrapper{display:flex;left:0;position:relative;top:0;width:100%}.UMH .mh-search-temp-wrapper.mh-search-transform .mh-search-btns{right:0}}@media only screen and (min-width:1024px){.UMH .mh-search-cancel{right:33px}.UMH .mh-search-input{height:32px}.UMH .mh-search-cancel-label{display:none}}.user-is-tabbing .mh-search-btns button:focus,.user-is-tabbing .mh-search-cancel-label:focus{box-shadow:0 0 0 1px #00468b;outline:0}@media only screen and (min-width:1366px){.UMH .mh-search{margin:0 128px 0 64px}}@media only screen and (min-width:1920px){.UMH .mh-search{margin:0 608px 0 64px}}.autocomplete-suggestions{background:#fff;border:1px solid #ccc;border-top:0;box-shadow:-1px 1px 3px rgba(0,0,0,.1);box-sizing:border-box;cursor:default;display:none;max-height:254px;overflow:hidden;overflow-y:auto;position:absolute;text-align:left;z-index:9999}.autocomplete-suggestion{align-items:center;color:#636363;cursor:pointer;font-size:1.02em;height:32px;line-height:23px;overflow:hidden;padding:6px 16px;position:relative;text-overflow:ellipsis;white-space:nowrap}.autocomplete-suggestion b{color:#535657;font-weight:700}.autocomplete-selected,.autocomplete-suggestion.selected{background:#f0f0f0}@media only screen and (min-width:0) and (max-width:767.9px){.autocomplete-suggestions{height:277px!important;left:0!important;top:126px!important;width:100%!important}}.mh-btn{background-image:none;border:1px solid transparent;border-radius:2px;cursor:pointer;display:inline-block;font-size:.875em;font-weight:400;line-height:20px;margin-bottom:0;outline-width:0;padding:6px 12px;text-align:center;vertical-align:middle;white-space:nowrap}.mh-btn-primary.active,a.mh-btn-primary.active{background-color:#00447c;border-color:#00537b;color:#fff}.mh-btn-primary,a.mh-btn-primary{background-color:#0672cb;color:#fff;position:relative}.mh-btn-primary:hover,a.mh-btn-primary:hover{background-color:#0063b8;color:#fff;text-decoration:none}.mh-btn-primary:active,a.mh-btn-primary:active{background-color:#00468b;color:#fff}.mh-btn-primary:active:after,a.mh-btn-primary:active:after{display:none!important}.user-is-tabbing .mh-btn:focus:after{border-radius:2px;bottom:0;box-shadow:0 0 0 2px #00468b,0 0 0 4px #fff,0 0 0 6px #00468b;content:"";display:block;left:0;position:absolute;right:0;top:0}.mh-btn-secondary,a.mh-btn-secondary{background-color:transparent;border:1px solid #0672cb;color:#0672cb;position:relative}.mh-btn-secondary:hover,a.mh-btn-secondary:hover{background-color:#d9f5fd;text-decoration:none}.mh-btn-secondary:active,a.mh-btn-secondary:active{background-color:#94dcf7}.mh-btn-secondary:active:after,[component=footer] .mh-hide,[component=unified-masthead] .mh-hide,a.mh-btn-secondary:active:after{display:none!important}[component=footer] .mh-show,[component=unified-masthead] .mh-show{display:block!important}[component=footer] .mh-show-flex,[component=unified-masthead] .mh-show-flex{display:flex!important}[component=footer] .no-after:after,[component=unified-masthead] .no-after:after{display:none!important}[component=footer] .mh-borderNone,[component=unified-masthead] .mh-borderNone{border-width:0!important}[component=footer] .mh-overFlow-yHidden,[component=unified-masthead] .mh-overFlow-yHidden{overflow-y:hidden!important}[component=footer] .mh-no-text-decoration,[component=unified-masthead] .mh-no-text-decoration{text-decoration:none}[component=footer] .prevent-click,[component=unified-masthead] .prevent-click{pointer-events:none}.UMH .mh-flyout-wrapper>.no-chevron>span:after{content:none}@media only screen and (min-width:0){.UMH .mh-cart .mh-flyout-link[aria-expanded=true]~.flyout h2.dropdown-title,.UMH .mh-myaccount .mh-flyout-link[aria-expanded=true]~.flyout .mh-myaccount-dropdown-wrap{display:block}.mh-onlyMobileTab,.mh-show-Mobile{display:block!important}.mh-show-DeskTop-Tab{display:none!important}.mh-onlyDeskTop{display:none}.mh-bodyOverFlow-Hidden{overflow:hidden!important;position:fixed}.mh-bodyOverFlow-Hidden .site-canvas{transform:inherit;transition:none}}@media only screen and (min-width:768px){.mh-show-Mobile{display:none!important}.mh-show-DeskTop-Tab{display:block!important}.mh-bodyOverFlow-Hidden{overflow:hidden!important}}@media only screen and (min-width:1024px){.mh-onlyMobileTab{display:none!important}.mh-onlyDeskTop{display:block}}[component=footer] .mh-load-spinner,[component=unified-masthead] .mh-load-spinner{align-items:center;background-color:rgba(0,0,0,.2);bottom:0;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:100000}[component=footer] .mh-load-spinner span[role=progressbar],[component=unified-masthead] .mh-load-spinner span[role=progressbar]{animation:spin .92s linear infinite;border:.3rem solid #e1e1e1;border-left-color:#0672cb;border-radius:50%;grid-area:center;height:35px;margin:auto;position:relative;width:35px;z-index:1}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.chevron{display:inline-block}.mh-flyout-link>span:after,.mh-shipto-cheveron,.mh-top-menu.child-nav>.mh-top-nav-button :after,.view-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%230E0E0E'%3E%3Cpath d='M30.485 7.244 16 21.729 1.515 7.244 0 8.757l16 16 16-16z'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:10px 8px;box-sizing:border-box;padding:6px}.UMH .mh-top .right-column .mh-flyout-link>span:after{height:24px;width:24px}.chevron-right,.child-nav>button:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%230E0E0E'%3E%3Cpath d='M8.76 0 7.24 1.52 21.72 16 7.24 30.48 8.76 32l16-16z'/%3E%3C/svg%3E");background-position:8px 2px;background-repeat:no-repeat;background-size:13px 15px}.unifiedGlobe .country-selector-mobile>span:before,.unifiedGlobe .language-switcher-mobile>span:before,.unifiedGlobe .mh-flyout-link>span:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 .942a7.058 7.058 0 1 0 0 14.116A7.058 7.058 0 0 0 8 .942ZM1.908 8.47h2.304c.028.801.122 1.564.278 2.263H2.537a6.053 6.053 0 0 1-.629-2.263Zm6.563-4.145V2.03c.715.263 1.348 1.11 1.782 2.295H8.471Zm2.069.942c.17.692.278 1.458.309 2.262H8.471V5.267h2.068ZM7.53 2.03v2.295H5.748C6.183 3.14 6.816 2.293 7.53 2.03Zm0 3.237v2.262H5.152c.031-.804.14-1.57.31-2.262H7.53ZM4.212 7.529H1.908a6.06 6.06 0 0 1 .629-2.262H4.49c-.157.7-.251 1.461-.279 2.262Zm.94.941H7.53v2.263H5.462a11.35 11.35 0 0 1-.31-2.263Zm2.378 3.204v2.297c-.715-.264-1.347-1.112-1.782-2.297H7.53Zm.94 2.297v-2.297h1.783c-.435 1.186-1.067 2.033-1.782 2.297Zm0-3.238V8.47h2.379c-.031.805-.14 1.57-.31 2.263H8.472ZM11.79 8.47h2.304a6.06 6.06 0 0 1-.629 2.263h-1.953c.157-.7.25-1.462.278-2.263Zm0-.94a12.302 12.302 0 0 0-.278-2.263h1.953c.347.69.566 1.454.628 2.262h-2.303Zm1.089-3.205h-1.63c-.26-.79-.602-1.473-1.008-2.011a6.136 6.136 0 0 1 2.638 2.011ZM5.76 2.315c-.405.538-.747 1.22-1.007 2.01H3.122a6.14 6.14 0 0 1 2.638-2.01Zm-2.638 9.36h1.63c.26.79.602 1.472 1.007 2.01a6.136 6.136 0 0 1-2.637-2.01Zm7.119 2.01c.405-.538.748-1.22 1.007-2.011h1.63a6.131 6.131 0 0 1-2.637 2.011Z' fill='%23636363'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:16px 16px;content:"";display:inline-block;height:16px;margin-right:4px;padding:4px;width:16px}#mh-unified-footer [component=unified-country-selector] .mh-flyout-link>span:before{margin-right:6px;padding:0}#mh-unified-footer .mh-flyout-link>span:after{margin-left:6px}.UMH[data-state=mobile-expanded] [component=unified-country-selector] a>span,.UMH[data-state=mobile-expanded] [component=unified-country-selector]>span{align-items:center;display:flex;line-height:24px}.UMH[data-state=mobile-expanded] [component=unified-country-selector] a>span:before,.UMH[data-state=mobile-expanded] [component=unified-country-selector]>span:before{margin-right:12px;padding:0}.UMH .mh-search-cancel{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 32 32' fill='%23636363'%3E%3Cpath d='m22 8.46-6 6-6-6L8.48 10l6 6-6 6 1.5 1.5 6-6 6 6L23.5 22l-6-6 6-6zM16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29.86C8.345 29.86 2.14 23.655 2.14 16S8.345 2.14 16 2.14c7.655 0 13.86 6.205 13.86 13.86-.011 7.65-6.21 13.849-13.859 13.86H16z'/%3E%3C/svg%3E") 50% no-repeat}.UMH .mh-search-submit{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 32 32' fill='%23636363'%3E%3Cpath d='M32 30.52 21.4 20a12.502 12.502 0 0 0 2.761-7.864l-.001-.143V12v-.001c0-6.627-5.373-12-12-12L11.992 0H12C5.358.067-.001 5.467-.001 12.119l.001.19v-.01c0 6.627 5.373 12 12 12a11.556 11.556 0 0 0 8.012-2.911l-.012.011 10.6 10.6 1.48-1.48zm-20-8.26c-5.523 0-10-4.477-10-10v-.021C2 6.692 6.463 2.187 11.994 2.12H12c5.523 0 10 4.477 10 10-.011 5.547-4.465 10.05-9.992 10.14H12z'/%3E%3C/svg%3E") 50% no-repeat}.UMH .mh-search-cancel-label{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 32 32' fill='%23636363'%3E%3Cpath d='m28 5.236-1.235-1.235-10.8 10.8L5.236 4.071 4.001 5.306l10.729 10.73L4.072 26.694l1.235 1.235 10.658-10.658L26.695 28l1.235-1.235L17.2 16.036z'/%3E%3C/svg%3E") 50% no-repeat}</style>
<!--/wmm:ignore-->

<header id="unified-masthead" class="UMH" country="us" lang="en" segment="corp" context-type="stp" cust-set="uscorp1" srch-svc="https://pilot.search.dell.com/queryunderstandingapi/2/suggest?term=" search-redirect="https://www.dell.com/en-us/search/" coveo-search-token-api-url="https://www.delltechnologies.com/coveo/search/token" marketing-coveo-search-param="" search-url-encoded="true" cust-srv="/csbapi/masthead/getuser" country-svc="https://www.dell.com/csbapi/masthead/countrylist/us/en/stp" is-persistent-country="false" ma-flyout-srv="https://www.dell.com/csbapi/masthead/unifiedmasthead/getusercontext/stp" component="unified-masthead" cart-count-api-url="https://www.dell.com/csbapi/en-us/cart/item" cart-fly-out-api-url="https://www.dell.com/csbapi/en-us/cart/masthead?savedCartsLimit=3" cart-checkout-url="https://www.dell.com/en-us/buy" premier-cart-count-api-url="" premier-cart-checkout-url="" is-legacy-cart="false" show-cart-flyout="true" env-domain="https://www.dell.com" ooc-message-enabled="true" ooc-cookies-duration-days="30" ooc-api-url="//www.dell.com/csbapi/masthead/oocmessage/us/en/stp" myaccount-default-header-label="Account" is-csb-homepage="true" ma-premier-isglobalportal="false" ma-enable-nonce-in-response="true" ma-saved-items-mfe-url="https://www.dell.com/buyer/mdcpcf/ma-saved-items/api/loader" ma-enable-two-col-signin-flyout="false" ma-premier-isglobalportal-b2b="false" ma-premier-isglobalportal-b2b-cookie-exists="false" myaccount-fetchusercontextalways="true" ma-enable-encoding="true" redirect-cs-url-current-location="false" ma-get-claims-ext-srv="false" iso-country="US" currency="USD" use-usercontext-service="false" disable-cart-flyout-by-page-lets="none" disable-bubble-count="false" disable-cart-bubble-count-by-page-lets="none">

 
    <a href="#mh-main" class="skip-nav-link">Skip to main content</a>
   


     <div class="mh-top">
        <div class="left-column">
            <button class="mh-mobile-nav-toggle" tabindex="0" data-navigation-aria-label-text="Navigation" data-navigation-close-aria-label-text="Close" aria-label="Navigation">
                <span class="mh-nav-menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            <div class="mh-logo">
                <a class="delltechLogoWrapper dynamic-link" href="//www.dell.com/en-us" aria-label="Dell Technologies Home">
                    
                    <div>
                        <svg class="dellTechLogo mh-show-DeskTop-Tab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1017 132">
                            <path d="M1015 84.89c0-12.23-6.8-17.66-20.39-20.38-13.58-2.71-21.73-4.08-21.73-13.58 0-6.79 5.43-10.87 14.95-10.87 12.23 0 16.3 5.43 16.3 12.23l1.36 1.36h5.43l1.36-1.36c0-13.58-10.87-19.02-24.46-19.02-14.95 0-23.09 8.15-23.09 17.67 0 10.87 8.15 16.3 21.73 19.02 13.59 2.72 20.38 4.08 20.38 14.95 0 6.79-4.07 12.23-17.66 12.23-12.23 0-17.66-6.8-17.66-14.95l-1.36-1.36h-5.43l-1.36 1.36c0 12.23 9.51 21.74 25.81 21.74 17.66-.02 25.82-8.17 25.82-19.04m-58.42-13.58l1.35-1.36v-4.07c0-19.02-10.87-32.61-29.89-32.61s-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.72 8.15-8.15 13.59-19.02 13.59-17.67 0-23.1-16.3-23.1-24.45l1.36-1.36h48.92zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.74-23.09 16.3 0 21.74 13.58 21.74 23.09l-1.36 1.36zm-59.78 36.68V35.97l-1.36-1.36h-5.43l-1.36 1.36v65.22l1.36 1.36h5.43l1.36-1.36zm0-78.8v-8.15l-1.36-1.36h-5.43l-1.36 1.36v8.15l1.36 1.36h5.43l1.36-1.36zm-51.62 74.73c-13.59 0-21.74-9.51-21.74-28.53s8.15-28.53 21.74-28.53c13.58 0 21.73 9.51 21.73 28.53 0 19.01-8.15 28.53-21.73 28.53m21.73-4.08c0 17.66-4.08 31.25-20.38 31.25-12.23 0-16.3-5.43-17.66-12.23l-1.36-1.36h-5.43l-1.36 1.36c1.36 10.87 9.51 19.02 25.81 19.02 17.67 0 28.53-10.87 28.53-38.04V35.97l-1.36-1.36h-4.08l-1.36 1.36-1.36 8.16h-1.36c-2.71-5.43-9.51-10.87-21.74-10.87-19.02 0-28.53 14.95-28.53 35.33 0 20.37 9.51 35.32 28.53 35.32 12.23 0 19.02-5.43 21.74-10.87h1.37zm-88.3-52.98c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.24-12.23 31.24-35.32s-13.58-35.33-31.24-35.33c-17.67 0-31.25 12.23-31.25 35.33 0 23.09 13.59 35.32 31.25 35.32m-40.76-2.72V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.37zm-48.9-61.13c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.25-12.23 31.25-35.32s-13.59-35.33-31.25-35.33-31.25 12.23-31.25 35.33c0 23.09 13.59 35.32 31.25 35.32m-39.4-2.72V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.67 4.08-21.74 10.87h-1.36l-1.35-8.16-1.36-1.36h-4.08l-1.36 1.36v65.22l1.36 1.36h5.44l1.35-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.43l1.36-1.36zm-69.29 0V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.66 4.08-21.74 10.87h-1.36V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.44l1.35-1.36zm-116.83-32.6c0-19.02 9.51-28.53 23.09-28.53s19.02 8.15 20.37 16.3l1.36 1.36h5.44l1.36-1.36c-1.36-13.58-12.23-23.09-28.53-23.09-17.66 0-31.24 10.87-31.24 35.33 0 24.45 13.58 35.32 31.24 35.32 16.3 0 27.17-9.51 28.53-23.09l-1.36-1.36h-5.44l-1.36 1.36c-1.36 8.15-6.79 16.3-20.37 16.3-13.59-.01-23.09-9.53-23.09-28.54m-14.95 2.72l1.36-1.36v-4.07c0-19.02-10.87-32.61-29.9-32.61-19.01 0-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.71 8.15-8.15 13.59-19.02 13.59-17.66 0-23.09-16.3-23.09-24.45l1.36-1.36h48.91zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.73-23.09 16.31 0 21.74 13.58 21.74 23.09l-1.35 1.36zm-36.61-51.63V8.81l-1.36-1.36h-70.65l-1.36 1.36v4.08l1.36 1.36h29.89l1.36 1.36v85.59l1.36 1.36h5.43l1.36-1.36V15.6l1.36-1.36h29.89l1.36-1.36zM322.2 83.65v18.9h-61.35V7.45h21.6v76.2h39.75zm-283.65 18.9c22.13 0 40.73-15.12 46.03-35.58l53.8 42.03 53.77-42.01v35.56h61.35v-18.9h-39.75V7.45h-21.6v35.56L140.58 83.3l-11.53-9.01L153.73 55l26.88-21-15.34-12-51.58 40.3-11.53-9.01L153.73 13 138.38 1l-53.8 42.03c-5.3-20.46-23.9-35.58-46.03-35.58H0v95.1h38.55zM21.6 83.65v-57.3h16.95C52.88 26.35 64.5 39.18 64.5 55S52.88 83.65 38.55 83.65H21.6z" />
                        </svg>
                        <svg class="mh-show-Mobile" xmlns="http://www.w3.org/2000/svg" width="58" height="33" viewBox="0 0 58 33">
                            <path fill="#0076ce" d="M58 14.793v3.383H46.956V1.154h3.888v13.638H58zM6.939 18.175c3.984 0 7.332-2.706 8.286-6.368l9.685 7.522 9.679-7.519v6.365h11.044v-3.383h-7.155V1.154H34.59v6.364l-9.283 7.211-2.076-1.613 4.443-3.453 4.839-3.759-2.761-2.148-9.285 7.213-2.075-1.613 9.283-7.211L24.91 0l-9.685 7.522c-.954-3.662-4.302-6.368-8.286-6.368H0v17.021h6.939zm-3.051-3.383V4.537h3.051c2.58 0 4.671 2.296 4.671 5.128s-2.092 5.128-4.671 5.128H3.888zM58 29.156c0-1.018-.569-1.469-1.706-1.697s-1.82-.34-1.82-1.131c0-.566.455-.904 1.251-.904 1.024 0 1.364.453 1.364 1.018l.113.113h.456l.113-.113c0-1.131-.911-1.584-2.047-1.584-1.251 0-1.933.678-1.933 1.471 0 .904.682 1.357 1.82 1.582s1.707.34 1.707 1.244c0 .566-.34 1.018-1.478 1.018-1.024 0-1.478-.566-1.478-1.244l-.113-.113h-.455l-.113.113c0 1.018.796 1.81 2.16 1.81 1.478 0 2.16-.678 2.16-1.584zm-4.891-1.129l.113-.113v-.338c0-1.584-.909-2.715-2.502-2.715s-2.502 1.131-2.502 2.715v.226c0 1.582.796 2.941 2.616 2.941 1.591 0 2.16-1.018 2.275-1.697l-.113-.113h-.456l-.113.113c-.227.678-.682 1.131-1.591 1.131-1.48 0-1.933-1.357-1.933-2.035l.113-.113h4.093v-.002zm-.682-.566h-3.411l-.113-.113c0-.791.455-1.922 1.82-1.922s1.82 1.131 1.82 1.922l-.115.113zm-5.004 3.053v-5.428l-.113-.113h-.456l-.113.113v5.428l.113.113h.456l.113-.113zm0-6.56v-.678l-.113-.113h-.456l-.113.113v.678l.113.113h.456l.113-.113zm-4.322 6.22c-1.138 0-1.82-.791-1.82-2.375s.682-2.375 1.82-2.375 1.82.791 1.82 2.375-.682 2.375-1.82 2.375zm1.82-.34c0 1.47-.342 2.601-1.706 2.601-1.024 0-1.364-.453-1.478-1.018l-.113-.113h-.456l-.113.113c.113.904.796 1.582 2.16 1.582 1.48 0 2.389-.904 2.389-3.166v-4.75l-.113-.113h-.342l-.113.113-.113.68h-.113c-.227-.453-.796-.906-1.82-.906-1.591 0-2.389 1.244-2.389 2.941s.796 2.941 2.389 2.941c1.024 0 1.593-.451 1.82-.904h.113 0zm-7.393-4.41c1.138 0 1.933.904 1.933 2.375s-.796 2.375-1.933 2.375-1.933-.904-1.933-2.375.796-2.375 1.933-2.375zm0 5.316c1.478 0 2.616-1.018 2.616-2.941s-1.138-2.941-2.616-2.941-2.616 1.018-2.616 2.941 1.138 2.941 2.616 2.941zm-3.411-.226v-7.691l-.114-.113h-.455l-.113.113v7.691l.113.113h.455l.114-.113zm-4.095-5.09c1.138 0 1.933.904 1.933 2.375s-.796 2.375-1.933 2.375-1.933-.904-1.933-2.375.796-2.375 1.933-2.375zm0 5.316c1.478 0 2.616-1.018 2.616-2.941s-1.138-2.941-2.616-2.941-2.616 1.018-2.616 2.941 1.138 2.941 2.616 2.941zm-3.298-.226v-3.393c0-1.469-.796-2.262-2.047-2.262-.796 0-1.48.34-1.82.906h-.113l-.113-.68-.113-.113h-.342l-.113.113v5.428l.113.113h.456l.113-.113V27.46c0-1.244.569-2.035 1.82-2.035.909 0 1.478.566 1.478 1.697v3.393l.113.113h.455l.113-.113zm-5.802 0v-3.393c0-1.469-.796-2.262-2.047-2.262-.796 0-1.478.34-1.82.906h-.113v-2.941l-.113-.113h-.456l-.113.113v7.691l.113.113h.456l.113-.113v-3.053c0-1.244.569-2.035 1.82-2.035.909 0 1.478.566 1.478 1.697v3.394l.113.113h.455l.113-.115zm-9.78-2.715c0-1.584.796-2.375 1.933-2.375s1.591.678 1.707 1.357l.113.113h.456l.113-.113c-.113-1.131-1.024-1.922-2.389-1.922-1.478 0-2.616.906-2.616 2.941s1.138 2.941 2.616 2.941c1.365 0 2.275-.791 2.389-1.922l-.113-.113h-.456l-.113.113c-.113.678-.569 1.357-1.707 1.357s-1.933-.791-1.933-2.375zm-1.251.227l.113-.113v-.338c0-1.584-.911-2.715-2.502-2.715S5 25.991 5 27.575v.226c0 1.582.796 2.941 2.616 2.941 1.591 0 2.16-1.018 2.275-1.697l-.113-.113h-.454l-.113.113c-.227.678-.682 1.131-1.591 1.131-1.478 0-1.933-1.357-1.933-2.035l.113-.113h4.09v-.002zm-.682-.566H5.795l-.113-.113c0-.791.455-1.922 1.82-1.922s1.82 1.131 1.82 1.922l-.113.113zm-3.066-4.297v-.34l-.113-.113H.113L0 22.824v.34l.113.113h2.502l.113.113v7.125l.113.113h.455l.113-.113V23.39l.113-.113h2.502l.115-.113z" />
                        </svg>
                    </div>
                </a>
            </div>

                

    <div class="mh-search mh-search-temp-wrapper" role="search">
        <input id="mh-search-input" type="search" class="mh-search-input" aria-label="Search Dell" placeholder="Search Dell" tabindex="0" />
        <div class="mh-search-btns">
            <button class="mh-search-btn mh-search-cancel" tabindex="0" aria-label="Cancel Search"></button>
            <button class="mh-search-btn mh-search-submit" tabindex="0" aria-label="Search Dell"></button>
        </div>
        <button class="mh-search-cancel-label" tabindex="0" aria-label="Cancel Search"></button>
    </div>


    </div>
    <div class="right-column">
            
        
<div class="mh-myaccount">
    <div class="mh-flyout-wrapper has-flyout">
        <a role="button" class="mh-myaccount-btn mh-flyout-link" tabindex="0" aria-label="Sign In" aria-expanded="false" aria-haspopup="true">
            <span class="flyoutIconWrapper ">
                <span class="icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#707070" d="M16 16H0l.11-.54c0-.21.52-4.4 3.68-6.55l.32-.21.31.21a5.48 5.48 0 0 0 7.16.09l.31-.21.32.21c3.26 2.15 3.68 6.34 3.68 6.55L16 16zM1.16 14.93h13.58A8.67 8.67 0 0 0 11.89 10 6.71 6.71 0 0 1 4 10a9.34 9.34 0 0 0-2.84 4.93zM8 0a4.51 4.51 0 0 0-4.424 5.39 4.51 4.51 0 0 0 8.174 1.625A4.51 4.51 0 0 0 8 0zm0 7.94a3.44 3.44 0 0 1-2.442-5.872A3.44 3.44 0 0 1 11.43 4.51 3.44 3.44 0 0 1 8 7.94z" />
                    </svg>
                </span>
                <span id="um-si-label" data-header-label="Sign In" class="label">Sign In</span>
                
            </span>
            
        </a>
        <div class="flyoutOverlay"></div>
        <div class="flyout">
            
    <div class="mh-myaccount-dropdown-wrap flyoutWrapper">
        
<div class="mh-close">
    <a role="button" tabindex="-1" aria-label="Close">
        <svg viewBox="0 0 32 32" focusable="false">
            <path fill="#707070" d="M28 5.236l-1.235-1.235-10.8 10.8-10.729-10.73-1.235 1.235 10.729 10.73-10.658 10.658 1.235 1.235 10.658-10.658 10.73 10.729 1.235-1.235-10.73-10.729z"></path>
        </svg>
    </a>
</div>
        
<div class="mh-myaccount-auth-dropdown mh-myaccount-single-col">
    <div class="dropdown-title-container">
        <h2 id="um-so-fl-label" class="dropdown-title" data-welcome-message="Welcome">Welcome</h2>
        
    </div>

    <div class="mh-myaccount-auth-wrapper ">
            <div class="mh-myaccount-left-wrapper mh-onlyDeskTop">
          



<div class="mh-myaccount-first-column">




    <div>
        <div class="dropdown-title mh-onlyMobileTab">Dell Sites</div>

        <ul class="mh-myaccount-label-list">
                    <li><a class="current" href="//www.dell.com/en-us">Dell Technologies</a></li>
                    <li><a class="" href="//www.dell.com/premier/home">Premier Sign In</a></li>
                    <li><a class="" href="//www.delltechnologies.com/partner/en-us/auth/partner-portal.htm">Partner Program Sign In</a></li>
                    <li><a class="" href="//dfs.dell.com/#/?lang=en-us">Dell Financial Services</a></li>
                    <li><a class="" href="//www.dell.com/support/home/en-us">Support</a></li>
        </ul>
    </div>

</div>
            </div>
            <div class="mh-onlyMobileTab">
           



<div class="mh-myaccount-first-column">




    <div>
        <div class="dropdown-title mh-onlyMobileTab">Dell Sites</div>

        <ul class="mh-myaccount-label-list">
                    <li><a class="current" href="//www.dell.com/en-us">Dell Technologies</a></li>
                    <li><a class="" href="//www.dell.com/premier/home">Premier Sign In</a></li>
                    <li><a class="" href="//www.delltechnologies.com/partner/en-us/auth/partner-portal.htm">Partner Program Sign In</a></li>
                    <li><a class="" href="//dfs.dell.com/#/?lang=en-us">Dell Financial Services</a></li>
                    <li><a class="" href="//www.dell.com/support/home/en-us">Support</a></li>
        </ul>
    </div>

</div>
          </div>

        
        
        

<div class="mh-myaccount-second-column">
    <ul class="mh-myaccount-label-list">
                    <li><a href="//www.dell.com/myaccount/en-us">My Account</a></li>
                    <li><a href="//www.dell.com/myaccount/en-us/orders">Order Status</a></li>
                    <li><dell-myaccount-saveditems-link></dell-myaccount-saveditems-link></li>
                    <li><a href="//www.dell.com/support/mps/en-us/myproducts">My Products</a></li>
                    <li><a href="//dfs.dell.com/#/?lang=en-us">Make a Payment</a></li>
                    <li><a href="//www.dell.com/myaccount/en-us/rewards">Dell Rewards Balance</a></li>
    </ul>

        <div class="auth-signout">
            <a class="mh-btn mh-btn-secondary navigate logout" href="https://www.dell.com/di/v3/fp/session/logout/2c742395-6cc1-4e68-ba00-fdceae72418b?redirect_uri=" role="button" log-out-redirect-url="//www.dell.com/en-us">
            Sign Out
        </a>
    </div>
</div>



    </div>

    
</div>
        <div class="mh-myaccount-unauth-dropdown">
  <div class="dropdown-title-container">
      <h2 class="dropdown-title">Welcome to Dell</h2>
      <div class='dropdown-subtitle'>My Account</div>
    </div>
        <ul>
                <li>Place orders quickly and easily</li>
                <li>View orders and track your shipping status</li>
                <li>Enjoy members-only rewards and discounts</li>
                <li>Create and access a list of your products</li>
        </ul>
        <div class="mh-myaccount-ctas">
                <a href="//www.dell.com/Identity/global/LoginOrRegister/98254675-AC6F-47D9-A7E4-4537724F135D?c=us&amp;l=en&amp;r=us&amp;s=corp&amp;redirectUrl=" class="mh-btn mh-btn-primary navigate" role="button">
                    Sign In
                </a>
                <a href="//www.dell.com/Identity/global/In/98254675-AC6F-47D9-A7E4-4537724F135D?c=us&amp;l=en&amp;r=us&amp;s=corp&amp;action=register&amp;redirectUrl=" class="mh-btn mh-btn-secondary navigate" role="button">
                    Create an Account
                </a>
                <a href="//dfs.dell.com/#/?lang=en-us" class="mh-btn mh-btn-secondary" role="button">
                    Dell Financial Services
                </a>
                <a href="//www.dell.com/premier/home" class="mh-btn mh-btn-secondary" role="button">
                    Premier Sign In
                </a>
                <a href="//www.delltechnologies.com/partner/en-us/auth/partner-portal.htm" class="mh-btn mh-btn-secondary" role="button">
                    Partner Program Sign In
                </a>
        </div>
    
</div>
    </div>

        </div>
    </div>
</div>



            <div class="mh-contact mh-contact-icon">
    <div class="mh-flyout-wrapper ">
        
        <a href="//www.dell.com/en-us/lp/contact-us" class="mh-contact-btn mh-flyout-link no-chevron" tabindex="0" role="link">
            <span class="mh-icon">
                <span class="label">Contact Us</span>
            </span>
        </a>
    </div>
</div>
            
    <div component="unified-country-selector" class="unifiedGlobe stack country-selector showChevron">
        <div class="mh-flyout-wrapper has-flyout">
            <a role="button" class="mh-flyout-link" aria-expanded="false" aria-haspopup="true" aria-label="US/EN Location &amp; Language selection, Selected United States English" tabindex="0">
                <span class="mh-label">US/EN</span>
                
            </a>
            <div class="flyout">
                
    <div class="mh-load-spinner js-mh-gss">
        <span aria-label="Loading" role="progressbar"></span>
    </div>

                <div class="country-list-container mh-show-DeskTop-Tab"></div>
            </div>
        </div>
    </div>

            <div class="mh-cart empty">
    <div class="mh-flyout-wrapper has-flyout">
        <a aria-label="Cart" role="button" class="cart mh-flyout-link" tabindex="0" aria-expanded="false" aria-haspopup="true" cart-count-label="{0} {1} in your cart." cart-empty-label="No items in your cart." hm-item-singular="item" hm-item-plural="items">
            <span class="flyoutIconWrapper ">
                <span class="icon" mh-bubble-count="0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#707070" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#707070" d="M16 3.09H2.88L2 .32H0v1.07h1.17L4.48 12.8h8.85v-1.07h-8L4.8 9.92h9.81L16 3.09zM4.48 8.85L3.09 4.16h11.52l-1 4.69H4.48z" />
                        <path fill="#707070" d="M12.59 12.05c-.239-.001-.477.045-.698.136a1.81 1.81 0 0 0-1.122 1.684 1.74 1.74 0 0 0 .118.707c.088.225.222.429.393.599a1.74 1.74 0 0 0 1.309.504 1.74 1.74 0 0 0 1.81-1.81 1.8 1.8 0 0 0-1.81-1.82zm0 2.56a.75.75 0 0 1-.54-1.28.75.75 0 0 1 1.28.54.73.73 0 0 1-.74.74zm-7.47-2.56a1.8 1.8 0 0 0-1.81 1.82 1.73 1.73 0 0 0 1.81 1.81 1.73 1.73 0 0 0 1.81-1.81 1.8 1.8 0 0 0-1.81-1.82zm0 2.56a.75.75 0 0 1-.527-1.284.75.75 0 0 1 1.277.544.73.73 0 0 1-.75.74z" />
                    </svg>
                </span>
                <span class="label">Cart</span>
            </span>
            
        </a>

            <div class="flyoutOverlay"></div>
            <div class="flyout">
                <div class="flyoutWrapper mh-cart-dropdown" hm-item-singular="item" hm-item-plural="items" hm-absent-cartitem="Your cart is empty" hm-cart-subtotal-label="Subtotal:">
    
<div class="mh-close">
    <a role="button" tabindex="-1" aria-label="Close">
        <svg viewBox="0 0 32 32" focusable="false">
            <path fill="#707070" d="M28 5.236l-1.235-1.235-10.8 10.8-10.729-10.73-1.235 1.235 10.729 10.73-10.658 10.658 1.235 1.235 10.658-10.658 10.73 10.729 1.235-1.235-10.73-10.729z"></path>
        </svg>
    </a>
</div>
    <h2 class="dropdown-title">Your Dell.com Carts</h2>
    
    <div class="mh-load-spinner js-mh-cart">
        <span aria-label="Loading" role="progressbar"></span>
    </div>


    <div class="mh-cart-content">
        <span class="mh-ct-dd-cartInfo"></span>
        <div class="mh-cart-empty">
            <div class="mh-cart-empty-label"></div>
            <ul class="mh-ct-carts-wrap">
            </ul>
        </div>
        <div class="mh-cart-loaded">
            <ul class="mh-ct-carts-wrap">
            </ul>
        </div>
    </div>
</div>
            </div>
    </div>
</div>
    </div>
</div>
    <div class="mh-bottom ">
        <div class="flyoutOverlay"></div>
        

<div id="unified-masthead-navigation" class="mh-nav" component="unified-masthead-navigation">
    <nav class="mh-top-nav">
        <ul role="menu" class="mh-top-menu-nav aria-nav">
                <li role="none" class="mh-top-menu  child-nav" data-tier-id="0">
                        <button role="menuitem" class="mh-top-nav-button first-level" aria-expanded="false" aria-haspopup="true">
                            <span>APEX</span>
                        </button>

                        <ul class="sub-nav" aria-label="APEX" role="menu" data-tier-id="0" aria-orientation="vertical">
                                
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        APEX
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/index.htm" data-tier-id="0" tabindex="0">View All APEX</a>
        

    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Compute &amp; HCI</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Compute &amp; HCI" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Compute &amp; HCI
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/compute-hci/private-cloud.htm" data-tier-id="0" tabindex="0">APEX Private Cloud</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/compute-hci/compute.htm" data-tier-id="0" tabindex="0">APEX Compute</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Storage</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Storage" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Storage
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/storage/data-storage-services/index.htm" data-tier-id="0" tabindex="0">APEX Storage for Private Cloud</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/storage/public-cloud/index.htm" data-tier-id="0" tabindex="0">APEX Storage for Public Cloud</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Cyber &amp; Data Protection</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Cyber &amp; Data Protection" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Cyber &amp; Data Protection
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cyber-data-protection/backup-services.htm" data-tier-id="0" tabindex="0">APEX Backup Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cyber-data-protection/cyber-recovery-services.htm" data-tier-id="0" tabindex="0">APEX Cyber Recovery Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/storage/data-storage-services/backup-storage.htm" data-tier-id="0" tabindex="0">APEX Data Storage Services Backup Target</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Cloud Platforms</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Cloud Platforms" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Cloud Platforms
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cloud-platforms/microsoft-azure.htm" data-tier-id="0" tabindex="0">APEX Cloud Platform for Microsoft Azure</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cloud-platforms/red-hat-openshift.htm" data-tier-id="0" tabindex="0">APEX Cloud Platform for Red Hat OpenShift</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cloud-platforms/index.htm" data-tier-id="0" tabindex="0">APEX Cloud Platform for VMware</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cloud-platforms/hybrid-cloud-vmware.htm" data-tier-id="0" tabindex="0">APEX Hybrid Cloud for VMware</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/compute-hci/high-performance-computing.htm" data-tier-id="0" tabindex="0">APEX High Performance Computing</a>
        

    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Device</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Device" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Device
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/device/managed-device-service.htm" data-tier-id="0" tabindex="0">APEX Managed Device Service</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/device/pc-as-a-service.htm" data-tier-id="0" tabindex="0">APEX PC-as-a-Service</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Create a Custom Solution</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Create a Custom Solution" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Create a Custom Solution
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/payment-solutions/flexible-consumption/flex-on-demand.htm" data-tier-id="0" tabindex="0">APEX Flex on Demand</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/payment-solutions/flexible-consumption/data-center-utility.htm" data-tier-id="0" tabindex="0">APEX Data Center Utility</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="0">
            <button role="menuitem" class="mh-menuItem" data-tier-id="0" tabindex="0" aria-expanded="false" aria-haspopup="true">Resources</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="0" aria-label="Resources" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Resources
    </li>

    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/use-cases.htm" data-tier-id="0" tabindex="0">APEX Use Cases</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/business-value.htm" data-tier-id="0" tabindex="0">APEX Business Value</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/sustainability.htm" data-tier-id="0" tabindex="0">APEX Sustainability</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/professional-services/index.htm" data-tier-id="0" tabindex="0">APEX Professional Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/console.htm" data-tier-id="0" tabindex="0">APEX Console</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/colocation.htm" data-tier-id="0" tabindex="0">APEX Colocation Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="0">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/partners/index.htm" data-tier-id="0" tabindex="0">APEX Partners</a>
        

    </li>


    </ul>
    </li>

                        </ul>
                </li>
                <li role="none" class="mh-top-menu  child-nav" data-tier-id="1">
                        <button role="menuitem" class="mh-top-nav-button first-level" aria-expanded="false" aria-haspopup="true">
                            <span>IT Infrastructure</span>
                        </button>

                        <ul class="sub-nav" aria-label="IT Infrastructure" role="menu" data-tier-id="1" aria-orientation="vertical">
                                
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        IT Infrastructure
    </li>

    <li role="none" class=" child-nav" data-tier-id="1">
            <button role="menuitem" class="mh-menuItem" data-tier-id="1" tabindex="0" aria-expanded="false" aria-haspopup="true">Products</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="1" aria-label="Products" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Products
    </li>

    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/servers" data-tier-id="1" tabindex="0">Servers</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/storage-products" data-tier-id="1" tabindex="0">Data Storage</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/data-protection" data-tier-id="1" tabindex="0">Data Protection</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/converged-infrastructure/hyper-converged-infrastructure.htm" data-tier-id="1" tabindex="0">Hyperconverged Infrastructure</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/networking-products" data-tier-id="1" tabindex="0">Networking</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/modular-data-centers.htm" data-tier-id="1" tabindex="0">Modular Data Center</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/cloudiq.htm" data-tier-id="1" tabindex="0">AIOps &amp; IT Observability</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="1">
            <button role="menuitem" class="mh-menuItem" data-tier-id="1" tabindex="0" aria-expanded="false" aria-haspopup="true">Workloads</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="1" aria-label="Workloads" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Workloads
    </li>

    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/solutions" data-tier-id="1" tabindex="0">View All Workloads</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/analytics/index.htm" data-tier-id="1" tabindex="0">Analytics</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/artificial-intelligence/index.htm" data-tier-id="1" tabindex="0">Artificial Intelligence</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/apex/cloud-services/index.htm" data-tier-id="1" tabindex="0">Cloud Solutions</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/what-we-do/emerging-technology/data-management.htm" data-tier-id="1" tabindex="0">Data Management</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/edge-computing/index.htm" data-tier-id="1" tabindex="0">Edge Solutions</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/high-performance-computing/index.htm" data-tier-id="1" tabindex="0">High Performance Computing</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/kubernetes-containers/index.htm" data-tier-id="1" tabindex="0">Kubernetes &amp; Containers</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/security/index.htm" data-tier-id="1" tabindex="0">Security Solutions</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/vdi/index.htm" data-tier-id="1" tabindex="0">Virtual Desktop Infrastructure</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="1">
            <button role="menuitem" class="mh-menuItem" data-tier-id="1" tabindex="0" aria-expanded="false" aria-haspopup="true">Industry</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="1" aria-label="Industry" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Industry
    </li>

    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/industry.htm" data-tier-id="1" tabindex="0">View All Industry</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/digital-cities/index.htm" data-tier-id="1" tabindex="0">Digital Cities</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/energy/index.htm" data-tier-id="1" tabindex="0">Energy, Climate Action &amp; Sustainability</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/federal/federal-government-it.htm" data-tier-id="1" tabindex="0">Federal Government</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/financial-solutions.htm" data-tier-id="1" tabindex="0">Financial</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/healthcare-it/index.htm" data-tier-id="1" tabindex="0">Healthcare &amp; Life Sciences</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/higher-education/index.htm" data-tier-id="1" tabindex="0">Higher Education</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/education/index.htm" data-tier-id="1" tabindex="0">K-12 Education</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/retail-it/index.htm" data-tier-id="1" tabindex="0">Retail</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/safety-and-security/index.htm" data-tier-id="1" tabindex="0">Safety &amp; Security</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/state-local-government/index.htm" data-tier-id="1" tabindex="0">State &amp; Local Government</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/telecom/index.htm" data-tier-id="1" tabindex="0">Telecommunications</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/industry/energy-utilities/index.htm" data-tier-id="1" tabindex="0">Utilities</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/payment-solutions/index.htm" data-tier-id="1" tabindex="0">Payment &amp; Consumption Solutions</a>
        

    </li>
    <li role="none" class="" data-tier-id="1">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/solutions/devops/index.htm" data-tier-id="1" tabindex="0">Developers &amp; DevOps</a>
        

    </li>

                        </ul>
                </li>
                <li role="none" class="mh-top-menu  child-nav" data-tier-id="2">
                        <button role="menuitem" class="mh-top-nav-button first-level" aria-expanded="false" aria-haspopup="true">
                            <span>Computers &amp; Accessories</span>
                        </button>

                        <ul class="sub-nav" aria-label="Computers &amp; Accessories" role="menu" data-tier-id="2" aria-orientation="vertical">
                                
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Computers &amp; Accessories
    </li>

    <li role="none" class=" child-nav" data-tier-id="2">
            <button role="menuitem" class="mh-menuItem" data-tier-id="2" tabindex="0" aria-expanded="false" aria-haspopup="true">Laptops</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="2" aria-label="Laptops" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Laptops
    </li>

    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/laptops" data-tier-id="2" tabindex="0">View All Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/xps-laptops" data-tier-id="2" tabindex="0">XPS Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/latitude-laptops" data-tier-id="2" tabindex="0">Latitude Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/inspiron-laptops" data-tier-id="2" tabindex="0">Inspiron Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/vostro-laptops" data-tier-id="2" tabindex="0">Vostro Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/alienware-laptops" data-tier-id="2" tabindex="0">Alienware Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/g-series" data-tier-id="2" tabindex="0">G Series Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/workstations/precision-laptops" data-tier-id="2" tabindex="0">Precision Mobile Workstations</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/rugged-laptops" data-tier-id="2" tabindex="0">Latitude Rugged Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/laptops/chromebook-laptops" data-tier-id="2" tabindex="0">Chromebook Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/connected-pc" data-tier-id="2" tabindex="0">4G/5G Laptops</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="2">
            <button role="menuitem" class="mh-menuItem" data-tier-id="2" tabindex="0" aria-expanded="false" aria-haspopup="true">Desktops &amp; All-in-Ones</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="2" aria-label="Desktops &amp; All-in-Ones" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Desktops &amp; All-in-Ones
    </li>

    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/desktops" data-tier-id="2" tabindex="0">View All Desktops &amp; All-in-Ones</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/desktops/xps-desktops" data-tier-id="2" tabindex="0">XPS Desktops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/desktops/optiplex-desktops" data-tier-id="2" tabindex="0">OptiPlex Desktops &amp; All-in-Ones</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/desktops/inspiron-desktops" data-tier-id="2" tabindex="0">Inspiron Desktops &amp; All-in-Ones</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/desktops/vostro-desktops" data-tier-id="2" tabindex="0">Vostro Desktops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/desktops/alienware-desktops" data-tier-id="2" tabindex="0">Alienware Desktops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/workstations/precision-desktops" data-tier-id="2" tabindex="0">Precision Fixed Workstations</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="2">
            <button role="menuitem" class="mh-menuItem" data-tier-id="2" tabindex="0" aria-expanded="false" aria-haspopup="true">Monitors</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="2" aria-label="Monitors" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Monitors
    </li>

    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/sac/monitors" data-tier-id="2" tabindex="0">View All Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/ar/8605?appliedRefinements=40636" data-tier-id="2" tabindex="0">UltraSharp&#xA0;Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/ar/8605?appliedRefinements=40617" data-tier-id="2" tabindex="0">Ultra High Definition Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/ar/8605?appliedRefinements=40618" data-tier-id="2" tabindex="0">Curved Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/ar/8605?appliedRefinements=45132" data-tier-id="2" tabindex="0">Alienware &amp; Gaming Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/ar/8605?appliedRefinements=43886" data-tier-id="2" tabindex="0">Business Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitor-accessories/ar/5390" data-tier-id="2" tabindex="0">Monitor Accessories</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="2">
            <button role="menuitem" class="mh-menuItem" data-tier-id="2" tabindex="0" aria-expanded="false" aria-haspopup="true">Gaming</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="2" aria-label="Gaming" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Gaming
    </li>

    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/gaming/alienware" data-tier-id="2" tabindex="0">Alienware</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/game" data-tier-id="2" tabindex="0">Dell Gaming</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/game-laptops" data-tier-id="2" tabindex="0">Gaming Laptops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/game-desktops" data-tier-id="2" tabindex="0">Gaming Desktops</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/monitors-monitor-accessories/ar/8605?appliedRefinements=45132" data-tier-id="2" tabindex="0">Alienware &amp; Gaming Monitors</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/gaming-gaming-accessories/ac/6488" data-tier-id="2" tabindex="0">Gaming Accessories</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/virtual-reality-simulators/ar/8473" data-tier-id="2" tabindex="0">Virtual Reality &amp; Simulators</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/video-games/ar/8474" data-tier-id="2" tabindex="0">Video Games</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="2">
            <button role="menuitem" class="mh-menuItem" data-tier-id="2" tabindex="0" aria-expanded="false" aria-haspopup="true">Electronics &amp; Accessories</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="2" aria-label="Electronics &amp; Accessories" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Electronics &amp; Accessories
    </li>

    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/accessories" data-tier-id="2" tabindex="0">View All Electronics &amp; Accessories</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/docks-and-stands/ac/8407" data-tier-id="2" tabindex="0">Docking Stations</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/audio/ac/8310" data-tier-id="2" tabindex="0">Audio</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/keyboards-and-mice/ac/6591" data-tier-id="2" tabindex="0">Keyboards &amp; Mice</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/pc-accessories/ac/5436" data-tier-id="2" tabindex="0">PC Accessories</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/home-electronics/ac/8449" data-tier-id="2" tabindex="0">Home Electronics</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/partsforyourdell" data-tier-id="2" tabindex="0">Parts, Batteries &amp; Upgrades</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/printers-ink-toner/ac/4014" data-tier-id="2" tabindex="0">Printers &amp; Scanners</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/carrying-cases/ac/7301" data-tier-id="2" tabindex="0">Laptop Bags &amp; Cases</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/networking/ac/4011" data-tier-id="2" tabindex="0">Wi-Fi &amp; Networking</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/storage-drives-media/ac/5683" data-tier-id="2" tabindex="0">Hard Drives, SSDs &amp; Storage</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/web-cameras/ac/8332" data-tier-id="2" tabindex="0">Webcams &amp; Video Conferencing</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/software/ac/4020" data-tier-id="2" tabindex="0">Software</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/cloud-client" data-tier-id="2" tabindex="0">Thin Clients</a>
        

    </li>
    <li role="none" class=" child-nav" data-tier-id="2">
            <button role="menuitem" class="mh-menuItem" data-tier-id="2" tabindex="0" aria-expanded="false" aria-haspopup="true">Workstations</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="2" aria-label="Workstations" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Workstations
    </li>

    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sc/workstations" data-tier-id="2" tabindex="0">View All Workstations</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/workstations/precision-laptops" data-tier-id="2" tabindex="0">Precision Mobile Workstations</a>
        

    </li>
    <li role="none" class="" data-tier-id="2">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/scc/sr/workstations/precision-desktops" data-tier-id="2" tabindex="0">Precision Fixed Workstations</a>
        

    </li>


    </ul>
    </li>

                        </ul>
                </li>
                <li role="none" class="mh-top-menu  child-nav" data-tier-id="3">
                        <button role="menuitem" class="mh-top-nav-button first-level" aria-expanded="false" aria-haspopup="true">
                            <span>Services</span>
                        </button>

                        <ul class="sub-nav" aria-label="Services" role="menu" data-tier-id="3" aria-orientation="vertical">
                                
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Services
    </li>

    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/services/index.htm" data-tier-id="3" tabindex="0">View All Services</a>
        

    </li>
    <li role="none" class=" child-nav" data-tier-id="3">
            <button role="menuitem" class="mh-menuItem" data-tier-id="3" tabindex="0" aria-expanded="false" aria-haspopup="true">Professional Services</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="3" aria-label="Professional Services" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Professional Services
    </li>

    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/professional-services" data-tier-id="3" tabindex="0">View All Professional Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/multicloud-services" data-tier-id="3" tabindex="0">Multicloud Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/data-and-apps" data-tier-id="3" tabindex="0">Data &amp; Applications Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/modern-workforce" data-tier-id="3" tabindex="0">Modern Workforce Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/security-and-resiliency" data-tier-id="3" tabindex="0">Security &amp; Resiliency Services</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/services/deployment-services/index.htm" data-tier-id="3" tabindex="0">Deployment Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/services/support-services/index.htm" data-tier-id="3" tabindex="0">Support Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/services/deployment-services/residency-services.htm" data-tier-id="3" tabindex="0">Residency Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/services/education-services.htm" data-tier-id="3" tabindex="0">Education Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dt/services/managed-services/index.htm" data-tier-id="3" tabindex="0">Managed Services</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/technologies-and-tools" data-tier-id="3" tabindex="0">Technology &amp; Tools</a>
        

    </li>
    <li role="none" class="" data-tier-id="3">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dt/dell-premier" data-tier-id="3" tabindex="0">Premier: e-Procurement &amp; Integrations</a>
        

    </li>

                        </ul>
                </li>
                <li role="none" class="mh-top-menu  child-nav" data-tier-id="4">
                        <button role="menuitem" class="mh-top-nav-button first-level" aria-expanded="false" aria-haspopup="true">
                            <span>Support</span>
                        </button>

                        <ul class="sub-nav" aria-label="Support" role="menu" data-tier-id="4" aria-orientation="vertical">
                                
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Support
    </li>

    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/home/en-us" data-tier-id="4" tabindex="0">Support Home</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/contents/en-us/category/product-support/self-support-knowledgebase" data-tier-id="4" tabindex="0">Support Library</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/contractservices/en-us/" data-tier-id="4" tabindex="0">Support Services &amp; Contracts</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/home/en-us?app=drivers" data-tier-id="4" tabindex="0">Drivers &amp; Downloads</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/home/en-us?app=manuals" data-tier-id="4" tabindex="0">Manuals &amp; Documentation</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/home/en-us/quicktest" data-tier-id="4" tabindex="0">Diagnostics &amp; Tools</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/contents/en-us/article/warranty/Self-Repair" data-tier-id="4" tabindex="0">Self-Repair &amp; Parts</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/incidents-online/en-us/srsearch" data-tier-id="4" tabindex="0">Service Requests &amp; Dispatch Status</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/order-status/en-us/order-support" data-tier-id="4" tabindex="0">Order Support</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/support/contents/en-us/category/Contact-Information" data-tier-id="4" tabindex="0">Contact Support</a>
        

    </li>
    <li role="none" class="" data-tier-id="4">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/community/Dell-Community/ct-p/English?profile.language=en" data-tier-id="4" tabindex="0">Community</a>
        

    </li>

                        </ul>
                </li>
                <li role="none" class="mh-top-menu  child-nav" data-tier-id="5">
                        <button role="menuitem" class="mh-top-nav-button first-level" aria-expanded="false" aria-haspopup="true">
                            <span>Deals</span>
                        </button>

                        <ul class="sub-nav" aria-label="Deals" role="menu" data-tier-id="5" aria-orientation="vertical">
                                
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Deals
    </li>

    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals" data-tier-id="5" tabindex="0">View All Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/pc-laptop-deals" data-tier-id="5" tabindex="0">Laptop Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/business-deals/business-laptop-deals" data-tier-id="5" tabindex="0">Business Laptop Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/pc-desktop-deals" data-tier-id="5" tabindex="0">Desktop Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/business-deals/business-desktop-deals" data-tier-id="5" tabindex="0">Business Desktop Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/pc-gaming-deals" data-tier-id="5" tabindex="0">Gaming PC Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/business-deals/enterprise-special-deals" data-tier-id="5" tabindex="0">Server Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/computer-monitor-deals" data-tier-id="5" tabindex="0">Monitor Deals</a>
        

    </li>
    <li role="none" class=" child-nav" data-tier-id="5">
            <button role="menuitem" class="mh-menuItem" data-tier-id="5" tabindex="0" aria-expanded="false" aria-haspopup="true">Electronics &amp; Accessories Deals</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="5" aria-label="Electronics &amp; Accessories Deals" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Electronics &amp; Accessories Deals
    </li>

    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/computer-accessories-deals" data-tier-id="5" tabindex="0">View All Electronics &amp; Accessories Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/computer-accessories-deals/gaming-accessories-deals" data-tier-id="5" tabindex="0">Gaming Accessories Deals</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/shop/deals/computer-accessories-deals/keyboards-mice-deals" data-tier-id="5" tabindex="0">Keyboards &amp; Mice Deals</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class=" child-nav" data-tier-id="5">
            <button role="menuitem" class="mh-menuItem" data-tier-id="5" tabindex="0" aria-expanded="false" aria-haspopup="true">Member Discounts</button>
        

    <ul class="sub-nav" role="menu" data-tier-id="5" aria-label="Member Discounts" aria-orientation="vertical">
        
<li role="none" class="mh-back-list-item">
    <button role="menuitem" class="mh-back-button" tabindex="0">
        <span class="mh-menu-chevron left chevron-right"></span>
        <span class="mh-back-button-label">
            Back
        </span>
    </button>
</li>

    <li role="menuitem" class="mh-hide-mob-links mh-mastheadTitle">
        Member Discounts
    </li>

    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/students" data-tier-id="5" tabindex="0">Student Discounts</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dell-military" data-tier-id="5" tabindex="0">Military &amp; Veteran Discounts</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/small-business-solutions" data-tier-id="5" tabindex="0">Small Business Solutions</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dell-expert-network" data-tier-id="5" tabindex="0">Dell Expert Network</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/small-business-associations" data-tier-id="5" tabindex="0">Dell Professional Associations</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dell-for-startups" data-tier-id="5" tabindex="0">Dell for Startups</a>
        

    </li>


    </ul>
    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/lp/dell-rewards" data-tier-id="5" tabindex="0">Dell Rewards</a>
        

    </li>
    <li role="none" class="" data-tier-id="5">
            <a role="menuitem" class="mh-menuItem" href="//www.dell.com/en-us/dfh/lp/outlet" data-tier-id="5" tabindex="0">Dell Outlet (Certified Refurbished)</a>
        

    </li>

                        </ul>
                </li>
            <li role="menuitem" aria-hidden="true" class="divider mh-onlyMobileTab"></li>

                <li role="none" class="menu-list-item mh-hide-mob-links ">

                        <a href="//www.dell.com/en-us/lp/contact-us" class="mh-contact-btn mh-contact-nav mh-contact-icon first-level" role="menuitem">
                            <span>Contact Us</span>

                        </a>

                </li>
            <li role="none" class="unifiedGlobe mob-country-selector child-nav" component="unified-country-selector">
                <button role="menuitem" class="country-selector-mobile first-level" aria-haspopup="true" aria-expanded="false">
                    <span>US/EN</span>
                </button>
                <ul role="menu" class="sub-nav country-list-container mobile-country-selector country-list-wrapper" data-tier-id="0">
                    <li role="none" class="mh-back-list-item">
                        <button role="menuitem" class="mh-back-button" tabindex="0">
                            <span class="mh-menu-chevron left chevron-right"></span>
                            <span class="mh-back-button-label">
                                Back
                            </span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
    </div>
</header>

<div id="mh-main"></div>

   <script shared-script-required="true" type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"https://www.dell.com/cdn/assets/csb/unifiedmasthead/bundles/1.0.1.15957/js/mastheadscripts-stp-ooc-v1.min.js","order":"1","crossorigin":false}])</script>













        
        
        

<div class="shp-dds__position-relative shp-dds__m-auto" component="errorpage">
    <div id="error-page-sub" class="shp-dds__container shp-dds__m-auto error-container">
        <section id="error-page-content">
            <div class="alert-icon shp-dds__m-auto">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon--alert-error" viewBox="0 0 32 32" fill="#D3D3D3">
                    <path d="M22.62 0h-13.24l-9.38 9.38v13.24l9.38 9.38h13.24l9.38-9.38v-13.24zM29.88 21.74l-8.14 8.14h-11.48l-8.14-8.14v-11.48l8.14-8.14h11.48l8.14 8.14zM6.42 14.9h19.14v2.14h-19.14z" />
                </svg>
            </div>
            <div class="error-title shp-dds__text-center">Sorry - we cannot find this page.</div>
            <div class="error-content shp-dds__text-center">We might have moved or deleted it. Try using the search bar or going to the home page.</div>
            <div class="homepage-button shp-dds__text-center" data-metrics="{&quot;btnname&quot;:&quot;gotohomepage&quot;}"><a class="shp-dds__button shp-dds__link--standalone" href = "//www.dell.com/en-us">Go to Homepage</a></div>
        </section>
    </div>
    <section>
        </section>
</div>

        

    <style>[component=unified-country-selector].readonly,[component=unified-country-selector].readonly a{pointer-events:none}[component=unified-country-selector].readonly a:after,[component=unified-country-selector].readonly span:after{display:none!important}[component=unified-country-selector] a{color:#636363;outline-width:0;text-decoration:none}[component=unified-country-selector] .country-list.active>a,[component=unified-country-selector] .country-list>a:hover{color:#0e0e0e}[component=unified-country-selector] .mh-flyout-link{font-size:.875em;font-weight:400;height:56px}[component=unified-country-selector] .mh-flyout-link span{padding-right:0}[component=unified-country-selector] .cs-header{color:#535657;font-size:1em;font-weight:500;margin-bottom:16px;text-align:left}footer [component=unified-country-selector]{padding:0}footer [component=unified-country-selector] .mh-flyout-link{cursor:pointer;display:inline-block;height:auto}footer [component=unified-country-selector] .mh-flyout-link>span{align-items:center;display:flex}footer [component=unified-country-selector] span.mh-flyout-link>span.mh-label{padding:0!important}@media only screen and (min-width:0){.country-list-container>li[aria-expanded=true]>.sub-nav-wrapper>.sub-nav,.mh-nav nav ul li[aria-expanded=true]>.sub-nav{flex-wrap:nowrap}header .mobile-country-selector ul li:hover{background-color:#f5f6f7}footer [component=unified-country-selector] .mh-back-list-item{display:none}footer [component=unified-country-selector]>.mh-flyout-wrapper a.mh-flyout-link{padding:0}footer [component=unified-country-selector]>.mh-flyout-wrapper .flyout,footer [component=unified-country-selector]>.mh-flyout-wrapper .flyout .mh-load-adjust-huener,footer [component=unified-country-selector]>.mh-flyout-wrapper a.mh-flyout-link>span:after{display:none}footer [component=unified-country-selector] .country-list-container>.country-list{display:block}footer [component=unified-country-selector] .country-list-container>.country-list>a{background-position:96%;background-repeat:no-repeat}footer [component=unified-country-selector] .country-list-container>.country-list>.sub-nav-wrapper,footer [component=unified-country-selector] .country-list-container>.country-list>.sub-nav-wrapper ul{display:none}footer [component=unified-country-selector] .country-list-container>.country-list>.sub-nav-wrapper ul li a{font-weight:400;padding:12px 16px 12px 66px}footer [component=unified-country-selector].active .flyout{height:auto;min-height:50px;overflow:visible;padding-top:0;width:100%}footer [component=unified-country-selector].active .flyout .mh-load-spinner>span[role=progressbar]{height:45px}footer [component=unified-country-selector].active .flyout ul.country-list-container{background:#e1e1e1;box-shadow:inset 0 2px 4px rgba(0,0,0,.12);display:block;height:auto;max-width:none;transform:none}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list.active>.sub-nav-wrapper,footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list.active>.sub-nav-wrapper>ul{display:block}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list.active>a:after{font-weight:400;transform:rotate(-180deg)}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list.active>button{color:#0e0e0e}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list.active>button:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 5 4-4 4 4' stroke='%23292B2C'/%3E%3C/svg%3E")}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list>button{-webkit-touch-callout:none;background-color:transparent;border:0;color:#636363;cursor:pointer;font-size:1em;outline:0!important;padding:12px 16px 12px 56px;text-align:left;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list>button:hover{color:#0e0e0e}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list>button:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 1 4 4 4-4' stroke='%23707070'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:10px 6px;content:"";float:right;font-weight:400;height:24px;padding:6px;transition:transform .2s linear;width:24px}footer [component=unified-country-selector].active .flyout ul.country-list-container>.country-list>button~ul{text-decoration:none}}@media only screen and (min-width:768px){[component=unified-country-selector] .cs-header{display:none}[component=unified-country-selector].readonly{pointer-events:none}[component=unified-country-selector].header{display:none}[component=unified-country-selector] ul{box-shadow:unset;display:flex;height:auto;width:auto}[component=unified-country-selector] ul li ul{-moz-column-count:1;column-count:1;display:block;flex-wrap:nowrap}[component=unified-country-selector] .section-label{width:100%}footer .country-selector:hover .flyout{display:none}footer .country-selector:hover span:after{transform:none}footer [component=unified-country-selector]>.mh-flyout-wrapper a.mh-flyout-link>span:after{content:"";display:block;height:12px;margin-left:6px;top:40%;transition:transform .2s linear;width:12px}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]>span:after{transform:rotate(-180deg)}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]~.flyout{background:#fff;box-shadow:0 4px 16px rgba(0,43,85,.12);display:block!important;min-height:50px;position:absolute;top:25px}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]~.flyout>ul{height:auto;max-width:none;width:auto}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]~.flyout .mh-load-spinner>span[role=progressbar]{height:35px}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]~.flyout .mh-load-adjust-huener{width:722px}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]~.flyout .sub-nav li{border:1px solid #fff;padding:0;position:relative;vertical-align:top;width:218px}footer [component=unified-country-selector] .mh-flyout-link[aria-expanded=true]~.flyout .sub-nav li a{margin-bottom:0}footer [component=unified-country-selector] .country-list-container{display:block;max-height:550px;padding:0 16px}footer [component=unified-country-selector] .country-list,footer [component=unified-country-selector] .country-list-container{padding:0}footer [component=unified-country-selector] .country-list-container>a,footer [component=unified-country-selector] .country-list>a{display:inline-block;margin-bottom:0;padding:18px}footer [component=unified-country-selector] .country-list .sub-nav-wrapper,footer [component=unified-country-selector] .country-list-container .sub-nav-wrapper{left:0;max-height:470px;overflow-y:auto;position:absolute;width:722px;z-index:0}footer [component=unified-country-selector] .country-list .sub-nav-wrapper>.sub-nav,footer [component=unified-country-selector] .country-list-container .sub-nav-wrapper>.sub-nav{margin-top:0;padding:2px 16px 16px}footer [component=unified-country-selector].active .flyout ul.country-list-container{display:none}footer [component=unified-country-selector] .region-list-container .country-list{font-size:.875em}.country-selector .flyout{background:0 0;background-color:#fff;display:none;padding:0 15px 15px;width:722px!important}.country-selector *{box-sizing:border-box}.country-selector li{list-style:none}.country-selector .region-list-container{background:#fff;display:flex}.country-selector .region-list-container:after{background:linear-gradient(0deg,#ccc 2px,transparent 0);content:"";display:block;flex:1 1 auto}.country-selector .region-list-container>li{padding:15px}.country-selector .region-list-container div.country-list,.country-selector .region-list-container>li{background:linear-gradient(0deg,#ccc 2px,transparent 0)}.country-selector .region-list-container div.country-list.active,.country-selector .region-list-container div.country-list:hover,.country-selector .region-list-container>li.active,.country-selector .region-list-container>li:hover{background:linear-gradient(0deg,#0672cb 4px,transparent 0)}.country-selector .region-list-container div.country-list.active a,.country-selector .region-list-container div.country-list:hover a,.country-selector .region-list-container>li.active a,.country-selector .region-list-container>li:hover a{text-decoration:none}.country-selector .region-list-container div.country-list{cursor:pointer;padding:15px}.country-selector .mh-back-list-item,.country-selector .sub-nav{display:none}.country-selector .active,.country-selector .active>.sub-nav-wrapper>.sub-nav,.country-selector .sub-nav{display:block}.country-selector .active>.sub-nav-wrapper>.sub-nav>li.active:before,.country-selector .active>li.active:before,.country-selector .sub-nav>li.active:before{background-color:#1282d6;border-radius:50%;content:"";display:inline-block;height:8px;left:16px;margin-right:.5rem;position:absolute;top:16px;width:8px}.country-selector .sub-nav{background:#fff;box-shadow:0 4px 16px rgba(0,43,85,.12);-moz-columns:3;column-count:3;left:0;margin-bottom:0;margin-top:0;padding:16px;position:relative;right:0;text-align:left;z-index:-1}.country-selector .sub-nav li{display:inline-block;padding-bottom:0}.country-selector .sub-nav li a{display:flex;font-size:.875em;font-weight:400;line-height:20px;outline-width:0;padding:10px 16px 10px 32px;width:100%}.country-selector .sub-nav .mh-back-list-item{display:none}.country-selector .country-list:focus,.country-selector .sub-nav:focus{box-shadow:0 0 0 1px #00468b;outline:0}.country-selector .country-list a:focus,.country-selector .sub-nav a:focus{box-shadow:0 0 0 1px #00468b}}@media only screen and (min-width:768px) and (pointer:coarse){footer [component=unified-country-selector] .region-list-container .country-list .sub-nav li:hover{background-color:#f0f0f0}}@media only screen and (min-width:1024px){.UMH [component=unified-country-selector]{height:56px}.UMH [component=unified-country-selector] .country-list-container .sub-nav li{position:relative;width:218px}.UMH [component=unified-country-selector] .country-list-container .sub-nav li:hover{background-color:#f0f0f0}.country-selector .flyout{overflow-x:visible!important;overflow-y:visible!important;padding:15px}[component=unified-country-selector] .country-list-container .sub-nav-wrapper{box-shadow:0 4px 16px rgba(0,43,85,.12);left:0;max-height:550px;overflow-y:auto;position:absolute;width:720px;z-index:-1}footer.user-is-tabbing [component=unified-country-selector]:focus{box-shadow:0 0 0 1px #00468b}footer [component=unified-country-selector]:focus{outline-width:0}footer [component=unified-country-selector] .country-list-container{display:block;max-height:550px}footer [component=unified-country-selector] .country-list-container .sub-nav-wrapper{max-height:470px;width:721px}footer [component=unified-country-selector] .country-list-container .sub-nav li:hover{background-color:#f0f0f0}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.country-list-container .country-list .sub-nav-wrapper{overflow-y:scroll!important}}footer#mh-unified-footer{font-size:16px!important}#mh-unified-footer,#mh-unified-footer *{font-display:swap;font-family:roboto,Arial,Helvetica,sans-serif}#mh-unified-footer *,#mh-unified-footer :after,#mh-unified-footer :before{box-sizing:border-box}[component=footer]{background-color:#f0f0f0;display:flex;flex-direction:column;font-size:16px;line-height:20px}[component=footer] a{outline-width:0}[component=footer] a:focus-visible,[component=footer] button:focus-visible,[component=footer] h3:focus-visible{box-shadow:0 0 0 1px #00468b;outline-width:0}[component=footer] h3,[component=footer]>a{color:#636363;font-size:.875em;font-weight:700;margin:0;padding:0}[component=footer] h3{margin:0}[component=footer] ul{font-weight:400;margin:0;padding:0}[component=footer] ul>li{list-style:none;padding-bottom:16px}[component=footer] ul>li>a:link,[component=footer] ul>li>a:visited{color:#636363}[component=footer] ul>li>a:link{color:#636363;text-decoration:none}[component=footer] ul>li>a:hover{text-decoration:underline}[component=footer] ul.legal,[component=footer] ul.site-switcher{display:inline-flex;flex-wrap:wrap}[component=footer] ul.legal>li,[component=footer] ul.site-switcher>li{margin-right:48px}[component=footer] ul.site-switcher li{font-weight:600;line-height:20px}[component=footer] .stack>h3{font-weight:700}[component=footer] .stack a[role=heading]{cursor:text}[component=footer] .ft-contextual-links-section .ContextualFooter1{display:flex;justify-content:flex-start}[component=footer] .ft-contextual-links-section .ContextualFooter1 .country-selector{display:block;position:relative}[component=footer] .ft-contextual-links-section .ContextualFooter1 .country-selector>a{background:0 0;border:none;padding:0;position:static}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack{flex:1}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper{flex-direction:column}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback a{color:#636363}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback a:hover{text-decoration:underline}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .stack{flex:none}[component=footer] .ft-contextual-links-section .ContextualFooter2{display:flex;justify-content:flex-start}[component=footer] .ft-contextual-links-section,[component=footer] .ft-legal-links-section,[component=footer] .ft-site-switcher-section{color:#636363;height:100%;width:100%}[component=footer] .ft-birdseed-section{color:#636363;font-size:.875em}[component=footer] .ft-birdseed-section a{color:#636363;text-decoration:underline}[component=footer] .ft-contextual-links-section .stack>a{color:#636363;display:inline-block;font-size:.875em;font-weight:700;padding-bottom:16px;text-decoration:none}[component=footer] .ft-contextual-links-section .stack.active>a>.flyout,a.active [component=footer] .ft-contextual-links-section .stack+ul{display:block}[component=footer] .ft-contextual-links-section .button-wrapper{display:flex;flex-direction:column}[component=footer] .ft-contextual-links-section .button-wrapper a.cta{align-items:center;cursor:pointer;display:inline-flex;font-weight:400;white-space:nowrap;width:280px}[component=footer] .ft-contextual-links-section .button-wrapper a.cta>svg{stroke:#0e0e0e;margin-right:12px}[component=footer] .ft-contextual-links-section .button-wrapper a[role=button].cta{border:1px solid #535657;color:#0e0e0e;font-weight:700;padding:6px 14px}[component=footer] .ft-contextual-links-section .button-wrapper a[role=button].cta:last-child{margin-top:10px}[component=footer] .ft-contextual-links-section .button-wrapper a[role=button].cta:first-child{margin-top:0}[component=footer] .ft-contextual-links-section .button-wrapper a[role=button].cta:hover{background-color:#e1e1e1}@media only screen and (min-width:0){.showChevron{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 1 4 4 4-4' stroke='%23707070'/%3E%3C/svg%3E");background-position:96%;background-repeat:no-repeat}[component=footer] .mh-show-flex-Mobile{display:flex}[component=footer] .mh-show-flex-DeskTop-Tab{display:none!important}[component=footer] .ft-birdseed-section{padding:32px 16px 44px}[component=footer] .ft-legal-links-section,[component=footer] .ft-site-switcher-section{padding:32px 16px 0}[component=footer] .stack:not(.social,.contact).active,[component=footer] .stack:not(.social,.contact)>.active{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1 5 4-4 4 4' stroke='%23292B2C'/%3E%3C/svg%3E");background-position:96% 1em;background-repeat:no-repeat;font-weight:600}[component=footer] .stack:not(.social,.contact) h3{cursor:pointer}[component=footer] .ft-contextual-links-section .ContextualFooter1{flex-direction:column;padding:32px 0 0}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback{margin-top:0}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback a{display:block;font-size:1em;line-height:24px;padding:12px 20px 12px 16px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .contact{order:4}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack.country-selector{margin-bottom:0;padding:0;position:relative}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack.country-selector span{padding:12px 20px 12px 16px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack.country-selector>a{background:0 0;border:none;position:relative}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack.country-selector .country-list-container li a:hover{text-decoration:none}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack{flex:auto}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack .contact{padding:0 20px 0 16px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack .contact li{padding:12px 0}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack .contact li a{margin:0}[component=footer] .ft-contextual-links-section .ContextualFooter2{flex-direction:column;padding:32px 0 0}[component=footer] .ft-contextual-links-section .stack{width:100%}[component=footer] .ft-contextual-links-section .stack a,[component=footer] .ft-contextual-links-section .stack h3{display:block;font-size:1em;font-weight:400;padding:12px 20px 12px 16px}[component=footer] .ft-contextual-links-section .stack h3 button{background-color:transparent;border:0;color:#636363;cursor:pointer;font-size:1em;line-height:24px;padding:0;text-align:left;width:90%}[component=footer] .ft-contextual-links-section .stack.active .flyout,[component=footer] .ft-contextual-links-section .stack.active>h3>.flyout,[component=footer] .ft-contextual-links-section .stack.active~ul,[component=footer] .ft-contextual-links-section .stack>h3.active~ul{display:block}[component=footer] .ft-contextual-links-section .button-wrapper a.cta{padding:12px 0;width:100%}[component=footer] .ft-contextual-links-section .button-wrapper a[role=button].cta{padding:12px 16px}[component=footer] .ft-contextual-links-section .stack .flyout>ul,[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact){background:#e1e1e1;box-shadow:inset 0 2px 4px rgba(0,0,0,.12);display:none;font-size:1em;line-height:24px}[component=footer] .ft-contextual-links-section .stack .flyout>ul li,[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact) li{line-height:24px;padding:0}[component=footer] .ft-contextual-links-section .stack .flyout>ul li a,[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact) li a{padding:12px 16px 12px 56px}[component=footer] .ft-contextual-links-section .stack .flyout>ul li .sub-nav li a,[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact) li .sub-nav li a{padding:12px 16px 12px 66px}[component=footer] ul.legal,[component=footer] ul.site-switcher{display:flex;flex-direction:column}[component=footer] ul.legal>li,[component=footer] ul.site-switcher>li{margin-right:48px;padding:12px 0}[component=footer] ul.legal>li a,[component=footer] ul.site-switcher>li a{font-size:1em;line-height:24px}}@media only screen and (min-width:768px){.showChevron{background:0 0}[component=footer] nav:first-of-type{padding-top:44px}[component=footer] .mh-show-flex-Mobile{display:none!important}[component=footer] .mh-show-flex-DeskTop-Tab{display:flex!important}[component=footer] ul>li{padding-bottom:24px}[component=footer] ul>li:last-child{padding-bottom:0}[component=footer] .stack:not(.social,.contact).active,[component=footer] .stack:not(.social,.contact)>.active{background-image:none}[component=footer] .stack:not(.social,.contact) h3{cursor:auto;pointer-events:none}[component=footer] .stack:not(.social,.contact) a{padding:0}[component=footer] .ContextualFooter1,[component=footer] .ContextualFooter2,[component=footer] ul.legal,[component=footer] ul.site-switcher{flex-direction:row!important}[component=footer] .ft-legal-links-section,[component=footer] .ft-site-switcher-section{padding:0 40px 20px}[component=footer] .ft-birdseed-section{padding:0 40px 44px}[component=footer] .ft-contextual-links-section .stack a,[component=footer] .ft-contextual-links-section .stack h3{display:inline-block;font-size:.875em;line-height:20px;padding:0}[component=footer] .ft-contextual-links-section .stack h3{font-weight:700;margin-bottom:24px}[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact){background:0 0;box-shadow:unset;display:block;font-size:.875em;line-height:20px}[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact)>li{font-size:1em;line-height:20px;padding-bottom:24px}[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact)>li>a{font-size:1em;font-weight:400;line-height:20px;padding:0}[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact).active,[component=footer] .ft-contextual-links-section .stack>ul:not(.social,.contact)>.active{background-image:none}[component=footer] .ft-contextual-links-section .ContextualFooter1{flex:0;flex-wrap:wrap;padding:0 40px 44px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .country-selector span:hover{text-decoration:underline}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack{flex:none;margin-bottom:44px;width:50%}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper{flex:none;flex-direction:column;margin-bottom:44px;order:0;width:50%}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .stack{margin-bottom:16px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .country-selector span,[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback a{line-height:20px;padding:0}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback a{font-size:.875em}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .countrySlectorTabpanel>.sub-nav li a{font-size:.875em;font-weight:400;line-height:20px;padding:10px 16px 10px 32px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .active:not(div.country-list),[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .showChevron{background-image:none!important}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper div.country-list{font-weight:400}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback{margin-bottom:18px;margin-top:0}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .unified-feedback a{display:inline-block}[component=footer] .ft-contextual-links-section .ContextualFooter2{flex-wrap:wrap;padding:0 40px}[component=footer] .ft-contextual-links-section .ContextualFooter2 .stack{flex:none;margin-bottom:44px;width:50%}[component=footer] .ft-contextual-links-section .button-wrapper a.cta{margin-bottom:0;width:80%}[component=footer] ul.legal li,[component=footer] ul.site-switcher li{font-size:1em;line-height:24px;padding:0 0 24px}}@media only screen and (min-width:1024px){#mh-unified-footer .ContextualFooter2{padding:0 40px 44px}#mh-unified-footer .ContextualFooter2 .stack{margin-bottom:0;padding-right:5px;width:25%}#mh-unified-footer ul li{padding-bottom:16px}#mh-unified-footer ul li:last-child{padding-bottom:0}#mh-unified-footer ul li a{line-height:20px}[component=footer] .ft-contextual-links-section .stack h3{font-size:.875em;margin-bottom:0;padding-bottom:16px}[component=footer] .ft-contextual-links-section .ContextualFooter1{justify-content:flex-start;padding-bottom:44px}[component=footer] .ft-contextual-links-section .ContextualFooter1 .country-selector span:hover{text-decoration:underline}[component=footer] .ft-contextual-links-section .ContextualFooter1 .unified-feedback a{font-size:.875em}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper{flex:none;margin-bottom:0;width:25%}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .stack{margin-bottom:20px;width:100%}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack-wrapper .countrySlectorTabpanel>.sub-nav li{padding-bottom:0!important}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack{flex:none;margin-bottom:0;padding-right:5px;width:25%}[component=footer] .ft-contextual-links-section .ContextualFooter1 .stack .country-selector span{font-size:.875em;line-height:20px}[component=footer] .ft-birdseed-section a:hover{text-decoration:underline}[component=footer] ul.legal li>a,[component=footer] ul.site-switcher li>a{font-size:.875em;line-height:20px}[component=footer] .ft-site-switcher-section{padding:0 40px 8px}[component=footer] .ft-legal-links-section{padding:0 40px 28px}[component=footer] .ft-legal-links-section ul>li:last-child{padding-bottom:16px}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){[component=footer] .ContextualFooter1 .stack{flex:2}}[component=footer] *{box-sizing:border-box}[component=footer] a{text-decoration:none}</style>
<!-- Footer ver:1.0.1.15957 -->
<footer id="mh-unified-footer" component="footer" country="us" lang="en" segment="corp" context-type="stp" country-svc="https://www.dell.com/csbapi/masthead/countrylist/us/en/stp" redirect-cs-url-current-location="false">
    
    
    <nav class="ft-contextual-links-section">

            <div class="ContextualFooter1">
                
<div class="stack-wrapper mh-show-flex-DeskTop-Tab">
    
        
    <div component="unified-country-selector" class="unifiedGlobe stack country-selector showChevron">
        <div class="mh-flyout-wrapper has-flyout">
            <a role="button" class="mh-flyout-link" aria-expanded="false" aria-haspopup="true" aria-label="US/EN Location &amp; Language selection, Selected United States English" tabindex="0">
                <span class="mh-label">US/EN</span>
                
            </a>
            <div class="flyout">
                
    <div class="mh-load-spinner js-mh-gss">
        <span aria-label="Loading" role="progressbar"></span>
    </div>

                <div class="country-list-container mh-show-DeskTop-Tab"></div>
            </div>
        </div>
    </div>

    <div class="unified-feedback">
        <a href="//www.dell.com/en-us/sitemap" role="button">
            Site Map
        </a>
    </div>
</div>

                
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section1mhstack1" aria-expanded="false">
                        Account
                </button>
                <span class="mh-show-DeskTop-Tab">Account</span>
            </h3>
            
    <ul class="" aria-labelledby="Section1mhstack1">
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/myaccount/en-us">My Account</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/myaccount/en-us/orders">Order Status</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/support/mps/en-us/myproducts">My Products</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//dfs.dell.com/#/?lang=en-us">Make a Payment</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/myaccount/en-us/rewards">Dell Rewards Balance</a>
                        </li>

    </ul>

</div>
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section1mhstack2" aria-expanded="false">
                        Support
                </button>
                <span class="mh-show-DeskTop-Tab">Support</span>
            </h3>
            
    <ul class="" aria-labelledby="Section1mhstack2">
                        <li data-testid="footer--links">
                                <a class="viewall" data-label="viewall" href="//www.dell.com/support/home/en-us">Support Home</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/support/contents/en-us/category/Contact-Information">Contact Support</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/return-policy">Returns</a>
                        </li>

    </ul>

</div>
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section1mhstack3" aria-expanded="false">
                        Connect with Us
                </button>
                <span class="mh-show-DeskTop-Tab">Connect with Us</span>
            </h3>
            
    <ul class="" aria-labelledby="Section1mhstack3">
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/community/Dell-Community/ct-p/English?profile.language=en">Community</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/contact-us">Contact Us</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="twitter_icon" data-label="twitter_icon" href="//twitter.com/delltech?lang=en">Twitter</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="linkedin_icon" data-label="linkedin_icon" href="//www.linkedin.com/company/delltechnologies">LinkedIn</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="instagram_icon" data-label="instagram_icon" href="//www.instagram.com/dell/">Instagram</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="youtube_icon" data-label="youtube_icon" href="//www.youtube.com/channel/UC01FW5V9UVohbPtqKSmXX-w">YouTube</a>
                        </li>

    </ul>

</div>


                
<div class="stack-wrapper mh-show-flex-Mobile mobile-Country-accordion">
    <div class="unified-feedback">
        <a href="//www.dell.com/en-us/sitemap" role="button">
            Site Map
        </a>
    </div>
        
    <div component="unified-country-selector" class="unifiedGlobe stack country-selector showChevron">
        <div class="mh-flyout-wrapper has-flyout">
            <a role="button" class="mh-flyout-link" aria-expanded="false" aria-haspopup="true" aria-label="US/EN Location &amp; Language selection, Selected United States English" tabindex="0">
                <span class="mh-label">US/EN</span>
                
            </a>
            <div class="flyout">
                
    <div class="mh-load-spinner js-mh-gss">
        <span aria-label="Loading" role="progressbar"></span>
    </div>

                <div class="country-list-container mh-show-DeskTop-Tab"></div>
            </div>
        </div>
    </div>

    
</div>
            </div>

            <div class="ContextualFooter2">
                
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section2mhstack1" aria-expanded="false">
                        Our Offerings
                </button>
                <span class="mh-show-DeskTop-Tab">Our Offerings</span>
            </h3>
            
    <ul class="" aria-labelledby="Section2mhstack1">
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/apex/index.htm">APEX</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us">Products</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/dt/solutions">Solutions</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/services/index.htm">Services</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/shop/deals">Deals</a>
                        </li>

    </ul>

</div>
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section2mhstack2" aria-expanded="false">
                        Our Company
                </button>
                <span class="mh-show-DeskTop-Tab">Our Company</span>
            </h3>
            
    <ul class="" aria-labelledby="Section2mhstack2">
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/corporate/about-us/who-we-are.htm">Who We Are</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//jobs.dell.com/">Careers</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.delltechnologiescapital.com">Dell Technologies Capital</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//investors.delltechnologies.com">Investors</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/corporate/newsroom.htm">Newsroom</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/perspectives/">Perspectives</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/corporate/social-impact/advancing-sustainability/electronics-recycling/index.htm">Recycling</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/corporate/social-impact.htm">ESG &amp; Impact</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/case-studies-customer-stories/index.htm">Customer Stories</a>
                        </li>

    </ul>

</div>
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section2mhstack3" aria-expanded="false">
                        Our Partners
                </button>
                <span class="mh-show-DeskTop-Tab">Our Partners</span>
            </h3>
            
    <ul class="" aria-labelledby="Section2mhstack3">
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.delltechnologies.com/partner/en-us/partner/find-a-partner.htm">Find a Partner</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/reseller_store_locator">Find a Reseller</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/oem/index.htm">OEM Solutions</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.delltechnologies.com/partner/en-us/partner/partner.htm">Partner Program</a>
                        </li>

    </ul>

</div>
<div class="stack ">
            <h3 class="showChevron mh-no-text-decoration mh-stackHeading">
                <button class="mh-show-Mobile" id="Section2mhstack4" aria-expanded="false">
                        Resources
                </button>
                <span class="mh-show-DeskTop-Tab">Resources</span>
            </h3>
            
    <ul class="" aria-labelledby="Section2mhstack4">
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/blog/">Blog</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/dell-rewards">Dell Rewards</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/events/index.htm">Events</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/technology-solutions-updates">Email Sign-Up</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/dell-learning-center">Dell Learning Center</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/lp/privacy-center">Privacy Center</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/resource-library.htm">Resource Library</a>
                        </li>
                        <li data-testid="footer--links">
                                <a class="" data-label="" href="//www.dell.com/en-us/dt/software-downloads/index.htm">Trial Software Downloads</a>
                        </li>

    </ul>

</div>

            </div>

        </nav>
       
    <nav class="ft-site-switcher-section">
            
    <ul class="site-switcher">
                        <li data-testid="footer-site-switcher-links">
                                <a data-label="" href="//www.dell.com/en-us">Dell Technologies</a>
                        </li>
                        <li data-testid="footer-site-switcher-links">
                                <a data-label="" href="//www.dell.com/en-us/lp/dt/dell-premier">Dell Premier</a>
                        </li>
                        <li data-testid="footer-site-switcher-links">
                                <a data-label="" href="//dfs.dell.com/#/?lang=en-us">Dell Financial Services</a>
                        </li>

    </ul>

    </nav>
    
    <nav class="ft-legal-links-section">
        
    <ul class="legal">
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/learn/us/en/uscorp1/site-terms-of-use-copyright">Copyright © 2024 Dell Inc.</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/learn/us/en/uscorp1/terms-of-sale">Terms of Sale</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/learn/us/en/uscorp1/policies-privacy">Privacy Statement</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/en-us/lp/do-not-sell-my-info">Do Not Sell or Share My Personal Information</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/learn/us/en/uscorp1/policies-cookies-ads-emails">Cookies, Ads &amp; Emails</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/learn/us/en/uscorp1/terms">Legal &amp; Regulatory</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/en-us/lp/accessibility">Accessibility</a>
                        </li>
                        <li data-testid="footer-legal-links">
                                <a data-label="" href="//www.dell.com/learn/us/en/uscorp1/legal_docs/dell-modern-slavery-statement.pdf">Anti-Slavery &amp; Human Trafficking</a>
                        </li>

    </ul>

    </nav>
   
        
</footer>



                <script shared-script-required="true" data-api-url="https://www.dell.com" id="ucx-init" type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"https://www.dell.com/cdn/assets/csb/unified-comm/bundles/1.0.0.7751/js/unified-communication-stp-init-min.js","crossorigin":false}])</script>





        <script id="mh-ext-signup-email-script" data-hook-unauthenticated-event="true" mfe-url="https://www.dell.com/csbapi/masthead/external/signupforemail/Stp/us/en/corp" mfe-disabled-pagelets="ecomm-contents,ecomm-shipping-payments,ecomm-review,ecomm-confirmation,shop-myaccounthome,shop-isgproductcategory,shop-isgfranchisepage|poweredge" mfe-disabled-cmsdoctypewise="dell-premier-deals,do-not-sell-my-info,server-upgrades,server-accessories" time-delay="7000" shared-script-required="true" type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"https://www.dell.com/cdn/assets/csb/unifiedmastheadexternal/bundles/1.0.1.15957/js/signupforemail.min.js","order":"1000","crossorigin":false}])</script>






    </main>
    
     <script shared-script-required="true" type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"//www.dell.com/cdn/assets/shop/scripts/global-bundle.min.7c6a48954db5f3906d140c6739a74582.js","order":"0","crossorigin":true}])</script>
     <script async type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"//nexus.dell.com/dell/stpfooter/Bootstrap.js","crossorigin":false}])</script>
     <script async type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"//nexus.dell.com/dell/marketing/Bootstrap.js#marketing","crossorigin":false}])</script>
     <script type="text/javascript">if (typeof dellScriptLoader !== 'undefined') dellScriptLoader.load([{"url":"//www.dell.com/cdn/assets/boomerang/latest/boomerang-csb-full.min.js","crossorigin":true}])</script>
    
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.start('dell-script-loader-ajax');</script>
    <script>function initLoadScripts() {
	"use strict";
	function removeDuplicates(urlArray) {
		var unique = {};
		var newArr = [];
		var max = urlArray.length;

		for (var i = 0; i < max; ++i) {
			var script = urlArray[i];
			//remove `.js` and everything after to make sure we are removing query parameters and/or markers to ensure no duplicates
			//then remove prefixes
			var sensitizedKey = script.url.replace(/(\.js).*/g, "").replace(/^(https:\/\/www\.|https:\/\/|\/\/|\/)/g, "");

			if (!unique[sensitizedKey]) {
				unique[sensitizedKey] = true;
				newArr.push(script);
			}
		}

		return newArr;
	}

	var scriptsArray = typeof dellScriptLoader !== "undefined"
		&& dellScriptLoader.hasOwnProperty("scriptsArrayCopy")
		&& Array.isArray(dellScriptLoader.scriptsArrayCopy())
			? orderArray(removeDuplicates(dellScriptLoader.scriptsArrayCopy()))
			: [];

	
	var flattendScriptsArray = scriptsArray.map(function (value) {
		if ("string" === typeof value) {
			return value
		}

		if ("object" === typeof value && value.url) {
			return value.url
        }
	});

	function arrayMatches(array1, array2) {
		var matches = [];

		for (var i = 0; i < array1.length; i++) {
			for (var j = 0; j < array2.length; j++) {
				if (array1[i] === array2[j]) {
					matches.push(array1[i]);
				}
			}
		}

		return matches;
	}

	//remove already loaded scripts
	function removeLoadedScripts(matchedScripts) {
		if (!matchedScripts.length) { return; }

		for (var i = 0; i < matchedScripts.length; i++) {
			for (var j = 0; j < scriptsArray.length; j++) {
				if ("string" === typeof scriptsArray[j] && matchedScripts[i] === scriptsArray[j]) {
					scriptsArray.splice(j, 1);
					continue;
				}
				if ("object" === typeof scriptsArray[j] && matchedScripts[i] === scriptsArray[j].url) {
					scriptsArray.splice(j, 1);
					continue;
				}
			}
		}
	}

	if (window.allScriptsLoaded) {
		var matchedScripts = arrayMatches(flattendScriptsArray, window.allScriptsLoaded);

		removeLoadedScripts(matchedScripts)
		//after the list is sanitized push unique scripts to allScriptsLoaded that haven't been loaded yet to be compared on next call
		for (var j = 0; j < scriptsArray.length; j++) {
			if ("string" === typeof scriptsArray[j]) {
				window.allScriptsLoaded.push(scriptsArray[j])
				continue;
			}

			if ("object" === typeof scriptsArray[j] && scriptsArray[j].url) {
				window.allScriptsLoaded.push(scriptsArray[j].url)
				continue;
			}
		}
	}

	if (!window.allScriptsLoaded) {
		window.allScriptsLoaded = flattendScriptsArray;
	}
	
	if (scriptsArray.length === 0) {
		return;
	}

	function orderArray(array) {
		var withOrder = array.filter(function (value, index, arr) {
			return value.hasOwnProperty("order");
		});

		var noOrder = array.filter(function (value, index, arr) {
			return !value.hasOwnProperty("order");
		});

		withOrder = withOrder.sort(function (a, b) {
			return a.order > b.order ? 1 : -1;
		});

		return [].concat(withOrder, noOrder);
	}

	(function loadScripts() {
		var scriptObject;
		var scriptTag;
		var pendingScripts = [];
		var firstScript = document.scripts[0];
		var documentHead = document.head;
		var fragment = document.createDocumentFragment();

		// Watch scripts load in IE
		function stateChange() {
			// Execute as many scripts in order as we can
			var pendingScript;
			while (pendingScripts[0] && pendingScripts[0].readyState === 'loaded') {
				pendingScript = pendingScripts.shift();
				// avoid future loading events from this script (eg, if src changes)
				pendingScript.onreadystatechange = null;
				// can't just appendChild, old IE bug if element isn't closed
				firstScript.parentNode.insertBefore(pendingScript, firstScript);
			}
		}

		// loop through our script urls
		while (scriptObject = scriptsArray.shift()) {
			if ('async' in firstScript) { // modern browsers
				scriptTag = document.createElement('script');

				if (scriptObject.crossorigin) {
					scriptTag.setAttribute("crossorigin", "anonymous");
				}

				scriptTag.async = false;
				scriptTag.src = scriptObject.url;
				fragment.appendChild(scriptTag);
			}
			else if (firstScript.readyState) { // IE<10
				// create a script and add it to our todo pile
				scriptTag = document.createElement('script');

				if (scriptObject.crossorigin) {
					scriptTag.setAttribute("crossorigin", "anonymous");
				}

				pendingScripts.push(scriptTag);
				// listen for state changes
				scriptTag.onreadystatechange = stateChange;
				// must set src AFTER adding onreadystatechange listener
				// else we’ll miss the loaded event for cached scripts
				scriptTag.src = scriptObject.url;
			}
			else { // fall back to defer
				document.write('<script src="' + scriptObject.url + '" defer></' + 'script>');
			}
		}

		//modern browsers IE10 >= append script tags added to html fragment
		if ('async' in firstScript) {
			documentHead.appendChild(fragment);
		}
	})();
}

initLoadScripts();

var dellScriptLoader = (function () {
	"use strict";
	var scriptsArray = [];
	var urlRegex = /^(https:\/\/www\.|https:\/\/|\/\/|\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/; //exit if not a url or an array

	function scriptsArrayCopy() {
		return JSON.parse(JSON.stringify(scriptsArray));
	}

	//check for valid url
	function isValidUrl(url) {
		return typeof url === "string" && urlRegex.test(url);
	}

	//check for array
	function isValidArray(scripts) {
		return Array.isArray(scripts);
	}

	function validateScripts(scripts) {
		if (!(isValidUrl(scripts) || isValidArray(scripts))) {
			return;
		}

		//single url being passed
		if (isValidUrl(scripts)) {
			scriptsArray.push(scripts);
			return;
		}

		//handling of array
		if (isValidArray(scripts)) {
			for (var i = 0; i < scripts.length; ++i) {
				var _script = scripts[i];

				//if array of strings
				if (typeof _script === "string" && isValidUrl(_script)) {
					scriptsArray.push({ url: _script });
					continue;
				}

				//if array of objects with url and order
				if (_script.hasOwnProperty("url") && _script.hasOwnProperty("order") && !isNaN(Number(_script.order))) {
					_script.order = Number(_script.order);
					scriptsArray.push(_script);
					continue;
				}

				//if array of objects with only url
				if (_script.hasOwnProperty("url") && isValidUrl(_script.url)) {
					scriptsArray.push(_script);
					continue;
				}
			}
		}
    }

	function load(scripts) {
		scriptsArray = [];
		validateScripts(scripts);
		initLoadScripts();
	}

	return Object.freeze({
		load: load,
		scriptsArrayCopy: scriptsArrayCopy
	});
})();

</script>
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.end('dell-script-loader-ajax');</script>

    
    <script type="text/javascript">if (typeof Dell !== 'undefined' && typeof Dell.perfmetrics !== 'undefined') Dell.perfmetrics.end('bodyGlobal');</script>
</body>
</html>e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){t._addClass(i(this),"ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){var n=t.uiDialog.offset(),l=n.left-t.document.scrollLeft(),h=n.top-t.document.scrollTop();e.height=t.uiDialog.height(),e.width=t.uiDialog.width(),e.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:t.window},t._removeClass(i(this),"ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",o,a(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,(function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)})),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var o,s,n=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:i("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((o=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!o&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=i.fn.jquery.substring(0,4),e=!0;this._delay((function(){e=!1})),this.document.data("ui-dialog-overlays")||this.document.on("focusin.ui-dialog",function(i){if(!e){var o=this._trackingInstances()[0];o._allowInteraction(i)||(i.preventDefault(),o._focusTabbable(),"3.4."!==t&&"3.5."!==t||o._delay(o._restoreTabbableFocus))}}.bind(this)),this.overlay=i("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):(this.document.off("focusin.ui-dialog"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==i.uiBackCompat&&i.widget("ui.dialog",i.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(i,t){"dialogClass"===i&&this.uiDialog.removeClass(this.options.dialogClass).addClass(t),this._superApply(arguments)}}),i.ui.dialog}));

/* @license MIT https://raw.githubusercontent.com/focus-trap/tabbable/v6.1.2/LICENSE */
/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):(t="undefined"!=typeof globalThis?globalThis:t||self,function(){var n=t.tabbable,o=t.tabbable={};e(o),o.noConflict=function(){return t.tabbable=n,o}}())}(this,(function(t){"use strict";var e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],n=e.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},a=function t(e,n){var o;void 0===n&&(n=!0);var r=null==e||null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"inert");return""===r||"true"===r||n&&e&&t(e.parentNode)},l=function(t,e,o){if(a(t))return[];var i=Array.prototype.slice.apply(t.querySelectorAll(n));return e&&r.call(t,n)&&i.unshift(t),i=i.filter(o)},u=function t(e,o,i){for(var l=[],u=Array.from(e);u.length;){var d=u.shift();if(!a(d,!1))if("SLOT"===d.tagName){var c=d.assignedElements(),f=t(c.length?c:d.children,!0,i);i.flatten?l.push.apply(l,f):l.push({scopeParent:d,candidates:f})}else{r.call(d,n)&&i.filter(d)&&(o||!e.includes(d))&&l.push(d);var s=d.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(d),p=!a(s,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(d));if(s&&p){var h=t(!0===s?d.children:s.children,!0,i);i.flatten?l.push.apply(l,h):l.push({scopeParent:d,candidates:h})}else u.unshift.apply(u,d.children)}}return l},d=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},c=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},f=function(t){return"INPUT"===t.tagName},s=function(t){return function(t){return f(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||i(t),o=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=o(window.CSS.escape(t.name));else try{e=o(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!r||r===t}(t)},p=function(t){var e=t.getBoundingClientRect(),n=e.width,o=e.height;return 0===n&&0===o},h=function(t,e){var n=e.displayCheck,o=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var a=r.call(t,"details>summary:first-of-type")?t.parentElement:t;if(r.call(a,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return p(t)}else{if("function"==typeof o){for(var l=t;t;){var u=t.parentElement,d=i(t);if(u&&!u.shadowRoot&&!0===o(u))return p(t);t=t.assignedSlot?t.assignedSlot:u||d===t.ownerDocument?u:d.host}t=l}if(function(t){var e,n,o,r,a=t&&i(t),l=null===(e=a)||void 0===e?void 0:e.host,u=!1;if(a&&a!==t)for(u=!!(null!==(n=l)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(l)||null!=t&&null!==(r=t.ownerDocument)&&void 0!==r&&r.contains(t));!u&&l;){var d,c,f;u=!(null===(c=l=null===(d=a=i(l))||void 0===d?void 0:d.host)||void 0===c||null===(f=c.ownerDocument)||void 0===f||!f.contains(l))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},v=function(t,e){return!(e.disabled||a(e)||function(t){return f(t)&&"hidden"===t.type}(e)||h(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var o=e.children.item(n);if("LEGEND"===o.tagName)return!!r.call(e,"fieldset[disabled] *")||!o.contains(t)}return!0}e=e.parentElement}return!1}(e))},b=function(t,e){return!(s(e)||d(e)<0||!v(t,e))},m=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},y=function t(e){var n=[],o=[];return e.forEach((function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,l=d(a,i),u=i?t(e.candidates):a;0===l?i?n.push.apply(n,u):n.push(a):o.push({documentOrder:r,tabIndex:l,item:e,isScope:i,content:u})})),o.sort(c).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},g=e.concat("iframe").join(",");t.focusable=function(t,e){return(e=e||{}).getShadowRoot?u([t],e.includeContainer,{filter:v.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):l(t,e.includeContainer,v.bind(null,e))},t.isFocusable=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,g)&&v(e,t)},t.isTabbable=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==r.call(t,n)&&b(e,t)},t.tabbable=function(t,e){var n;return n=(e=e||{}).getShadowRoot?u([t],e.includeContainer,{filter:b.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:m}):l(t,e.includeContainer,b.bind(null,e)),y(n)},Object.defineProperty(t,"__esModule",{value:!0})}));

;
/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function(factory){'use strict';if(typeof define==='function'&&define.amd)define(['jquery'],factory);else if(typeof exports!=='undefined')module.exports=factory(require('jquery'));else factory(jQuery);}(function($){'use strict';var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3e3,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(i+1)+'</button>';},dots:false,dotsClass:'slick-dots',draggable:true,easing:'easeOutQuint',edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:false,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1e3};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.hidden='hidden';_.paused=false;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,dataSettings,settings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else{if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}};_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);_.checkResponsive(true);};return Slick;}());Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==='boolean'){addBefore=index;index=null;}else{if(index<0||(index>=_.slideCount))return false;}_.unload();if(typeof index==='number')if(index===0&&_.$slides.length===0)$(markup).appendTo(_.$slideTrack);else if(addBefore)$(markup).insertBefore(_.$slides.eq(index));else $(markup).insertAfter(_.$slides.eq(index));else if(addBefore===true)$(markup).prependTo(_.$slideTrack);else $(markup).appendTo(_.$slideTrack);_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false)targetLeft=-targetLeft;if(_.transformsEnabled===false)if(_.options.vertical===false)_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);else _.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);else if(_.cssTransitions===false){if(_.options.rtl===true)_.currentLeft=-(_.currentLeft);$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps);}},complete:function(){if(callback)callback.call();}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false)animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';else animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';_.$slideTrack.css(animProps);if(callback)setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null)asNavFor=$(asNavFor).not(_.$slider);if(asNavFor!==null&&typeof asNavFor==='object')asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked)target.slideHandler(index,true);});};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false)transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;else transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;if(_.options.fade===false)_.$slideTrack.css(transition);else _.$slides.eq(slide).css(transition);};Slick.prototype.autoPlay=function(){var _=this;if(_.autoPlayTimer)clearInterval(_.autoPlayTimer);if(_.slideCount>_.options.slidesToShow&&_.paused!==true)_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer)clearInterval(_.autoPlayTimer);};Slick.prototype.autoPlayIterator=function(){var _=this;if(_.options.infinite===false)if(_.direction===1){if((_.currentSlide+1)===_.slideCount-1)_.direction=0;_.slideHandler(_.currentSlide+_.options.slidesToScroll);}else{if((_.currentSlide-1===0))_.direction=1;_.slideHandler(_.currentSlide-_.options.slidesToScroll);}else _.slideHandler(_.currentSlide+_.options.slidesToScroll);};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow))_.$prevArrow.prependTo(_.options.appendArrows);if(_.htmlExpr.test(_.options.nextArrow))_.$nextArrow.appendTo(_.options.appendArrows);if(_.options.infinite!==true)_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}else _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true',tabindex:'-1'});}};Slick.prototype.buildDots=function(){var _=this,i,dotString;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){dotString='<ul class="'+_.options.dotsClass+'">';for(i=0;i<=_.getDotCount();i+=1)dotString+='<li>'+_.options.customPaging.call(this,_,i)+'</li>';dotString+='</ul>';_.$dots=$(dotString).appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden','false');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true)_.options.slidesToScroll=1;$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true)_.$list.addClass('draggable');};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target))row.appendChild(originalSlides.get(target));};slide.appendChild(row);};newSlides.appendChild(slide);};_.$slider.html(newSlides);_.$slider.children().children().children().css({width:(100/_.options.slidesPerRow)+'%',display:'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false,sliderWidth=_.$slider.width(),windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window')respondToWidth=windowWidth;else if(_.respondTo==='slider')respondToWidth=sliderWidth;else{if(_.respondTo==='min')respondToWidth=Math.min(windowWidth,sliderWidth);}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints)if(_.breakpoints.hasOwnProperty(breakpoint))if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint])targetBreakpoint=_.breakpoints[breakpoint];}else{if(respondToWidth>_.breakpoints[breakpoint])targetBreakpoint=_.breakpoints[breakpoint];}if(targetBreakpoint!==null)if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick')_.unslick(targetBreakpoint);else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true)_.currentSlide=_.options.initialSlide;_.refresh(initial);};triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick')_.unslick(targetBreakpoint);else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true)_.currentSlide=_.options.initialSlide;_.refresh(initial);};triggerBreakpoint=targetBreakpoint;}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true)_.currentSlide=_.options.initialSlide;_.refresh(initial);triggerBreakpoint=targetBreakpoint;}};if(!initial&&triggerBreakpoint!==false)_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.target),indexOffset,slideOffset,unevenOffset;if($target.is('a'))event.preventDefault();if(!$target.is('li'))$target=$target.closest('li');unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case 'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow)_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);break;case 'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow)_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);break;case 'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1])index=navigables[navigables.length-1];else for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;};prevNavigable=navigables[n];};return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide);if(_.options.pauseOnDotsHover===true&&_.options.autoplay===true)$('li',_.$dots).off('mouseenter.slick',$.proxy(_.setPaused,_,true)).off('mouseleave.slick',$.proxy(_.setPaused,_,false));};if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);};_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.$list.off('mouseenter.slick',$.proxy(_.setPaused,_,true));_.$list.off('mouseleave.slick',$.proxy(_.setPaused,_,false));if(_.options.accessibility===true)_.$list.off('keydown.slick',_.keyHandler);if(_.options.focusOnSelect===true)$(_.$slideTrack).children().off('click.slick',_.selectHandler);$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);$(document).off('ready.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.html(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots)_.$dots.remove();if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css("display","");if(_.htmlExpr.test(_.options.prevArrow))_.$prevArrow.remove();};if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css("display","");if(_.htmlExpr.test(_.options.nextArrow))_.$nextArrow.remove();};if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);};_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.unslicked=true;if(!refresh)_.$slider.trigger('destroy',[_]);};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false)_.$slideTrack.css(transition);else _.$slides.eq(slide).css(transition);};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback)setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false)_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this,breakPoint=0,counter=0,pagerQty=0;if(_.options.infinite===true)while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}else if(_.options.centerMode===true)pagerQty=_.slideCount;else while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;};return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;verticalOffset=(verticalHeight*_.options.slidesToShow)*-1;};if(_.slideCount%_.options.slidesToScroll!==0)if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow)if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1;}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1;}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight;}};if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;};if(_.options.centerMode===true&&_.options.infinite===true)_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;else{if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}};if(_.options.vertical===false)targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset;else targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset;if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false)targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);else targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);if(_.options.rtl===true)if(targetSlide[0])targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;else targetLeft=0;else targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false)targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);else targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);if(_.options.rtl===true)if(targetSlide[0])targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;else targetLeft=0;else targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}};return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false)max=_.slideCount;else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;};while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;};return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else return _.options.slidesToScroll;};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();};if(creation)_.$slider.trigger('init',[_]);if(_.options.accessibility===true)_.initADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.on('click.slick',{message:'next'},_.changeSlide);}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow)$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.options.autoplay===true)$('li',_.$dots).on('mouseenter.slick',$.proxy(_.setPaused,_,true)).on('mouseleave.slick',$.proxy(_.setPaused,_,false));};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.setPaused,_,true));_.$list.on('mouseleave.slick',$.proxy(_.setPaused,_,false));};if(_.options.accessibility===true)_.$list.on('keydown.slick',_.keyHandler);if(_.options.focusOnSelect===true)$(_.$slideTrack).children().on('click.slick',_.selectHandler);$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(document).on('ready.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();};if(_.options.dots===true&&_.slideCount>_.options.slidesToShow)_.$dots.show();if(_.options.autoplay===true)_.autoPlay();};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT'))if(event.keyCode===37&&_.options.accessibility===true)_.changeSlide({data:{message:'previous'}});else{if(event.keyCode===39&&_.options.accessibility===true)_.changeSlide({data:{message:'next'}});}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy').removeClass('slick-loading');});});};imageToLoad.src=imageSource;});};if(_.options.centerMode===true)if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=rangeStart+_.options.slidesToShow;if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}};loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else{if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive')_.progressiveLazyLoad();};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.paused=false;_.autoPlay();};Slick.prototype.postSlide=function(index){var _=this;_.$slider.trigger('afterChange',[_,index]);_.animating=false;_.setPosition();_.swipeLeft=null;if(_.options.autoplay===true&&_.paused===false)_.autoPlay();if(_.options.accessibility===true)_.initADA();};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(){var _=this,imgCount,targetImage;imgCount=$('img[data-lazy]',_.$slider).length;if(imgCount>0){targetImage=$('img[data-lazy]',_.$slider).first();targetImage.attr('src',null);targetImage.attr('src',targetImage.attr('data-lazy')).removeClass('slick-loading').load(function(){targetImage.removeAttr('data-lazy');_.progressiveLazyLoad();if(_.options.adaptiveHeight===true)_.setPosition();}).error(function(){targetImage.removeAttr('data-lazy');_.progressiveLazyLoad();});}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,firstVisible;firstVisible=_.slideCount-_.options.slidesToShow;if(!_.options.infinite)if(_.slideCount<=_.options.slidesToShow)_.currentSlide=0;else{if(_.currentSlide>firstVisible)_.currentSlide=firstVisible;}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide});_.init();if(!initializing)_.changeSlide({data:{message:'index',index:currentSlide}},false);};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;currentBreakpoint=responsiveSettings[breakpoint].breakpoint;if(responsiveSettings.hasOwnProperty(breakpoint)){while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint)_.breakpoints.splice(l,1);l--;};_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}};_.breakpoints.sort(function(a,b){return (_.options.mobileFirst)?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0)_.currentSlide=_.currentSlide-_.options.slidesToScroll;if(_.slideCount<=_.options.slidesToShow)_.currentSlide=0;_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true)$(_.$slideTrack).children().on('click.slick',_.selectHandler);_.setSlideClasses(0);_.setPosition();_.$slider.trigger('reInit',[_]);if(_.options.autoplay===true)_.focusHandler();};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked)_.setPosition();},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else index=removeBefore===true?--index:index;if(_.slideCount<1||index<0||index>_.slideCount-1)return false;_.unload();if(removeAll===true)_.$slideTrack.children().remove();else _.$slideTrack.children(this.options.slide).eq(index).remove();_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true)position=-position;x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false)_.$slideTrack.css(positionProps);else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true)_.$list.css({padding:('0px '+_.options.centerPadding)});}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true)_.$list.css({padding:(_.options.centerPadding+' 0px')});};_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children('.slick-slide').length)));}else if(_.options.variableWidth===true)_.$slideTrack.width(5e3*_.slideCount);else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length)));};var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===true)$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});else $(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(option,value,refresh){var _=this,l,item;if(option==="responsive"&&$.type(value)==="array")for(item in value)if($.type(_.options.responsive)!=="array")_.options.responsive=[value[item]];else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint)_.options.responsive.splice(l,1);l--;};_.options.responsive.push(value[item]);}else _.options[option]=value;if(refresh===true){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false)_.setCSS(_.getLeft(_.currentSlide));else _.setFade();_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top')_.$slider.addClass('slick-vertical');else _.$slider.removeClass('slick-vertical');if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined)if(_.options.useCSS===true)_.cssTransitions=true;if(_.options.fade)if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3)_.options.zIndex=3;}else _.options.zIndex=_.defaults.zIndex;if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;};if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;};if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;};if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;};if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';};_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false);};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset)_.$slides.slice(index-centerOffset,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');};if(index===0)allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');else{if(index===_.slideCount-1)allSlides.eq(_.options.slidesToShow).addClass('slick-center');}};_.$slides.eq(index).addClass('slick-center');}else if(index>=0&&index<=(_.slideCount-_.options.slidesToShow))_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');else if(allSlides.length<=_.options.slidesToShow)allSlides.addClass('slick-active').attr('aria-hidden','false');else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow)allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');else allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');};if(_.options.lazyLoad==='ondemand')_.lazyLoad();};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true)_.options.centerMode=false;if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true)infiniteCount=_.options.slidesToShow+1;else infiniteCount=_.options.slidesToShow;for(i=_.slideCount;i>(_.slideCount-infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');};for(i=0;i<infiniteCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');};_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.setPaused=function(paused){var _=this;if(_.options.autoplay===true&&(_.options.pauseOnHover===true||_.options.pauseOnDotsHover===true)){_.paused=paused;if(!paused)_.autoPlay();else _.autoPlayClear();}};Slick.prototype.selectHandler=function(event){var _=this,targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide'),index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.setSlideClasses(index);_.asNavFor(index);return;};_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true)return;if(_.options.fade===true&&_.currentSlide===index)return;if(_.slideCount<=_.options.slidesToShow)return;if(sync===false)_.asNavFor(index);targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true)_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});else _.postSlide(targetSlide);};return;}else{if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true)_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});else _.postSlide(targetSlide);};return;}};if(_.options.autoplay===true)clearInterval(_.autoPlayTimer);if(targetSlide<0)if(_.slideCount%_.options.slidesToScroll!==0)animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll);else animSlide=_.slideCount+targetSlide;else if(targetSlide>=_.slideCount)if(_.slideCount%_.options.slidesToScroll!==0)animSlide=0;else animSlide=targetSlide-_.slideCount;else animSlide=targetSlide;_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else _.postSlide(animSlide);_.animateHeight();return;};if(dontAnimate!==true)_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});else _.postSlide(animSlide);};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();};if(_.options.dots===true&&_.slideCount>_.options.slidesToShow)_.$dots.hide();_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0)swipeAngle=360-Math.abs(swipeAngle);if((swipeAngle<=45)&&(swipeAngle>=0))return (_.options.rtl===false?'left':'right');if((swipeAngle<=360)&&(swipeAngle>=315))return (_.options.rtl===false?'left':'right');if((swipeAngle>=135)&&(swipeAngle<=225))return (_.options.rtl===false?'right':'left');if(_.options.verticalSwiping===true)if((swipeAngle>=35)&&(swipeAngle<=135))return 'left';else return 'right';return 'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount;_.dragging=false;_.shouldClick=(_.touchObject.swipeLength>10)?false:true;if(_.touchObject.curX===undefined)return false;if(_.touchObject.edgeHit===true)_.$slider.trigger('edge',[_,_.swipeDirection()]);if(_.touchObject.swipeLength>=_.touchObject.minSwipe)switch(_.swipeDirection()){case 'left':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.slideHandler(slideCount);_.currentDirection=0;_.touchObject={};_.$slider.trigger('swipe',[_,'left']);break;case 'right':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.slideHandler(slideCount);_.currentDirection=1;_.touchObject={};_.$slider.trigger('swipe',[_,'right']);break;}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===false)||('ontouchend' in document&&_.options.swipe===false))return;else{if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1)return;}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true)_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;switch(event.data.action){case 'start':_.swipeStart(event);break;case 'move':_.swipeMove(event);break;case 'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||touches&&touches.length!==1)return false;curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));if(_.options.verticalSwiping===true)_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));swipeDirection=_.swipeDirection();if(swipeDirection==='vertical')return;if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4)event.preventDefault();positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true)positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false)if((_.currentSlide===0&&swipeDirection==='right')||(_.currentSlide>=_.getDotCount()&&swipeDirection==='left')){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;};if(_.options.vertical===false)_.swipeLeft=curLeft+swipeLength*positionOffset;else _.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset;if(_.options.verticalSwiping===true)_.swipeLeft=curLeft+swipeLength*positionOffset;if(_.options.fade===true||_.options.touchMove===false)return false;if(_.animating===true){_.swipeLeft=null;return false;};_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;};if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined)touches=event.originalEvent.touches[0];_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots)_.$dots.remove();if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow))_.$prevArrow.remove();if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow))_.$nextArrow.remove();_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else{if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').attr('aria-hidden','true');var index=Math.floor(_.currentSlide/_.options.slidesToScroll);$.each(_.$dots,function(){$(this).find('li').eq(index).addClass('slick-active').attr('aria-hidden','false');});}};Slick.prototype.visibility=function(){var _=this;if(document[_.hidden]){_.paused=true;_.autoPlayClear();}else{if(_.options.autoplay===true){_.paused=false;_.autoPlay();}}};Slick.prototype.initADA=function(){var _=this;_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true',tabindex:'-1'}).find('a, input, button, select').attr({tabindex:'-1'});_.$slideTrack.attr('role','listbox');_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){$(this).attr({role:'option','aria-describedby':'slick-slide'+_.instanceUid+i+''});});if(_.$dots!==null)_.$dots.attr('role','tablist').find('li').each(function(i){$(this).attr({role:'presentation','aria-selected':'false','aria-controls':'navigation'+_.instanceUid+i+'',id:'slick-slide'+_.instanceUid+i+''});}).first().attr('aria-selected','true').end().find('button').attr('role','button').end().closest('div').attr('role','toolbar');_.activateADA();};Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({tabindex:'0'});};Slick.prototype.focusHandler=function(){var _=this;_.$slider.on('focus.slick blur.slick','*',function(event){event.stopImmediatePropagation();var sf=$(this);setTimeout(function(){if(_.isPlay)if(sf.is(':focus')){_.autoPlayClear();_.paused=true;}else{_.paused=false;_.autoPlay();}},0);});};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined')_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;};return _;};}));;
(function($){var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler);},teardown:function(){$(this).off("resize",$special.handler);},handler:function(event,execAsap){var context=this,args=arguments,dispatch=function(){event.type="debouncedresize";$event.dispatch.apply(context,args);};if(resizeTimeout)clearTimeout(resizeTimeout);execAsap?dispatch():resizeTimeout=setTimeout(dispatch,$special.threshold);},threshold:150};})(jQuery);(function($){'use strict';function init_gavias_slider($slider_wrapper){var $pause_on_hover=$slider_wrapper.data('pause'),$speed=$slider_wrapper.data('speed'),$height=$slider_wrapper.attr('data-height'),$fullHeight=$slider_wrapper.attr('data-fullheight'),$dots=$slider_wrapper.data('dots'),$arrows=$slider_wrapper.data('arrows'),$autoplay=$slider_wrapper.data('autoplay'),$autoplay_speed=$slider_wrapper.data('autoplayspeed'),$responsiveFlag=$slider_wrapper.data('responsive'),$fade=$slider_wrapper.data('fade'),$draggable=$slider_wrapper.data('draggable'),$infinite=$slider_wrapper.data('infinite'),$customPaging=$slider_wrapper.data('indicator'),$header_height=0,gavias_height=0,adminbar=0;if(typeof !$fade==="undefined")$fade=false;if(typeof !$draggable==="undefined")$draggable=true;if(typeof !$infinite==="undefined")$infinite=true;if(!$responsiveFlag)$responsiveFlag=false;if($customPaging)$customPaging=$customPaging.split(",");else $customPaging=[];var $responsive=[];if($responsiveFlag==true)$responsive=[{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}];var appendDots=function(){var $resourceDotsPlaceholder=$slider_wrapper.find('.resource-slide-dots .slider-placeholder');if($resourceDotsPlaceholder.length){$resourceDotsPlaceholder.closest('.resource-slide-dots').show();return $resourceDotsPlaceholder;};return null;}(),customPaging=function(slider,i){if($customPaging.length==0)return '';if($customPaging[i]!=''){var $customIndicator=$customPaging[i].split("|"),indicatorImage=$customIndicator[0],collateralType=$customIndicator[1];return '<div class="image-indicator-inner"><div style="position:relative"><img class="lazy" data-src="'+indicatorImage+'"></div><div class="indicator-label">'+collateralType+'</div></div>';};return '';},swiper_main_options={fade:$fade,dots:$dots,infinite:$infinite,arrows:$arrows,centerMode:false,draggable:$draggable,prevArrow:'<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',nextArrow:'<a class="slick-next"><i class="fa fa-angle-right"></i></a>',cssEase:'ease',easing:'easeOutQuint',edgeFriction:0.35,pauseOnHover:$pause_on_hover,speed:$speed,autoplay:$autoplay,autoplaySpeed:$autoplay_speed,responsive:$responsive,pauseOnDotsHover:true};if(appendDots!=null)swiper_main_options.appendDots=appendDots;if(customPaging.length>0)swiper_main_options.customPaging=customPaging;var swiper_main=$slider_wrapper.find('.swiper-wrapper').slick(swiper_main_options),animationDimensions=function(){gavias_slider_resposnive($slider_wrapper);gavias_slider_opacity($height);if($fullHeight==='true')gavias_height=$(window).height()-$header_height-adminbar;else gavias_height=$height;};}function gavias_slider_opacity(height){$('.gavias-opacity').each(function(){var divs=$(this),$scrollTop=$(window).scrollTop(),percent=$scrollTop/(height-100);divs.css({opacity:1-percent,'z-index':999});divs.parents('.gavias-slider-image').css({opacity:1-(0.5*percent),'z-index':999});});}function gavias_slider_resposnive(el){"use strict";var $this=el,$items=$this.find('.swiper-slide .gavias-slider-image'),$height=$this.attr('data-height'),$fullHeight=$this.attr('data-fullheight'),$skip_header_fix=0,$header_height=0,$window_height=$(window).outerHeight();if($(window).width()<780)$window_height=500;else if($fullHeight=='true')$window_height=$window_height-$header_height;else $window_height=$height;$items.each(function(){$(this).css('height',$window_height);});$this.find('.swiper-slide').each(function(){var $this=$(this),$content=$this.find('.tp-caption');if($this.hasClass('left_center')||$this.hasClass('center_center')||$this.hasClass('right_center')){var $this_height_half=$content.outerHeight()/2;if($content.outerHeight()<$window_height){var $window_half=$window_height/2;$content.css('marginTop',($window_half-$this_height_half));}};if($this.hasClass('left_bottom')||$this.hasClass('center_bottom')||$this.hasClass('right_bottom'))if($content.outerHeight()<$window_height){var $distance_from_top=$window_height-$content.outerHeight()-40;$content.css('marginTop',$distance_from_top);}});$this.find('.edge-slider-loading').fadeOut();}function start_gavias_slider(){$('.swiper-wrapper').on('setPosition',function(){$(this).find('.slick-slide').height('auto');var slickTrack=$(this).find('.slick-track'),slickTrackHeight=$(slickTrack).height();$(this).find('.slick-slide').css('height',slickTrackHeight+'px');$(this).find('.slick-slide > div').css('height','100%');});$('.swiper-wrapper').on('init',function(){$(this).css({visibility:'visible'});$(this).find('.banner').css({visibility:'visible'});$(this).siblings('.loading').hide();$(this).css('max-height','none');$(".gavias-slider .slick-dots>li:has(img)").each(function(){jQuery(this).addClass('image-indicator');});});if((jQuery.browser)&&(!jQuery.browser.mobile))$(".youtube-bg").mb_YTPlayer();$('.gavias-slider:not(.lazy)').each(function(){var $slider=$(this);function checkContentLoadingThenInit(){if($slider.find('.swiper-wrapper').hasClass('loading-content')==false){clearInterval(sliderTimer);init_gavias_slider($slider);}};var sliderTimer=setInterval(checkContentLoadingThenInit,100);});$('.gavias-slider.lazy').on('lazybeforeunveil',function(e){if(!$(e.target).hasClass('gavias-slider'))return;if($(e.target).hasClass('webinars'))return;init_gavias_slider($(e.target));if((!isReadyToAutoPlay)&&($(e.target).data('autoplay'))){pausePlayEle.push($(e.target));$(e.target).find('.swiper-wrapper').slick('slickPause');}});var lazyLoadImageTimmer;$('.gavias-slider .slide img.lazy[data-src]').on('lazybeforeunveil',function(e){clearTimeout(lazyLoadImageTimmer);lazyLoadImageTimmer=setTimeout(function(){$(e.target).closest('.swiper-wrapper').slick('setPosition');},800);});};var isReadyToAutoPlay=false,pausePlayEle=[];$('.gavias-slider').addClass('lazy');$(window).load(function(){isReadyToAutoPlay=true;$.each(pausePlayEle,function(i,$ele){$ele.find('.swiper-wrapper').slick('slickPlay');});});start_gavias_slider();})(jQuery);;
(function($,Drupal){Drupal.theme.progressBar=function(id){return (`<div id="${id}" class="progress" aria-live="polite">`+'<div class="progress__label">&nbsp;</div>'+'<div class="progress__track"><div class="progress__bar"></div></div>'+'<div class="progress__percentage"></div>'+'<div class="progress__description">&nbsp;</div>'+'</div>');};Drupal.ProgressBar=function(id,updateCallback,method,errorCallback){this.id=id;this.method=method||'GET';this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$(Drupal.theme('progressBar',id));};$.extend(Drupal.ProgressBar.prototype,{setProgress(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('div.progress__bar').css('width',`${percentage}%`);$(this.element).find('div.progress__percentage').html(`${percentage}%`);}$('div.progress__description',this.element).html(message);$('div.progress__label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this);},startMonitoring(uri,delay){this.delay=delay;this.uri=uri;this.sendPing();},stopMonitoring(){clearTimeout(this.timer);this.uri=null;},sendPing(){if(this.timer)clearTimeout(this.timer);if(this.uri){const pb=this;let uri=this.uri;if(uri.indexOf('?')===-1)uri+='?';else uri+='&';uri+='_format=json';$.ajax({type:this.method,url:uri,data:'',dataType:'json',success(progress){if(progress.status===0){pb.displayError(progress.data);return;}pb.setProgress(progress.percentage,progress.message,progress.label);pb.timer=setTimeout(()=>{pb.sendPing();},pb.delay);},error(xmlhttp){const e=new Drupal.AjaxError(xmlhttp,pb.uri);pb.displayError(`<pre>${e.message}</pre>`);}});}},displayError(string){const error=$('<div class="messages messages--error"></div>').html(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this);}});})(jQuery,Drupal);;
/* @license MIT https://raw.githubusercontent.com/muicss/loadjs/4.2.0/LICENSE.txt */
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function(Drupal,debounce){let liveElement;const announcements=[];Drupal.behaviors.drupalAnnounce={attach(context){if(!liveElement){liveElement=document.createElement('div');liveElement.id='drupal-live-announce';liveElement.className='visually-hidden';liveElement.setAttribute('aria-live','polite');liveElement.setAttribute('aria-busy','false');document.body.appendChild(liveElement);}}};function announce(){const text=[];let priority='polite';let announcement;const il=announcements.length;for(let i=0;i<il;i++){announcement=announcements.pop();text.unshift(announcement.text);if(announcement.priority==='assertive')priority='assertive';}if(text.length){liveElement.innerHTML='';liveElement.setAttribute('aria-busy','true');liveElement.setAttribute('aria-live',priority);liveElement.innerHTML=text.join('\n');liveElement.setAttribute('aria-busy','false');}}Drupal.announce=function(text,priority){announcements.push({text,priority});return debounce(announce,200)();};})(Drupal,Drupal.debounce);;
((Drupal)=>{Drupal.Message=class{constructor(messageWrapper=null){if(!messageWrapper)this.messageWrapper=Drupal.Message.defaultWrapper();else this.messageWrapper=messageWrapper;}static defaultWrapper(){let wrapper=document.querySelector('[data-drupal-messages]');if(!wrapper){wrapper=document.querySelector('[data-drupal-messages-fallback]');wrapper.removeAttribute('data-drupal-messages-fallback');wrapper.setAttribute('data-drupal-messages','');wrapper.classList.remove('hidden');}return wrapper.innerHTML===''?Drupal.Message.messageInternalWrapper(wrapper):wrapper.firstElementChild;}static getMessageTypeLabels(){return {status:Drupal.t('Status message'),error:Drupal.t('Error message'),warning:Drupal.t('Warning message')};}add(message,options={}){if(!options.hasOwnProperty('type'))options.type='status';if(typeof message!=='string')throw new Error('Message must be a string.');Drupal.Message.announce(message,options);options.id=options.id?String(options.id):`${options.type}-${Math.random().toFixed(15).replace('0.','')}`;if(!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)){const {type}=options;throw new Error(`The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`);}this.messageWrapper.appendChild(Drupal.theme('message',{text:message},options));return options.id;}select(id){return this.messageWrapper.querySelector(`[data-drupal-message-id^="${id}"]`);}remove(id){return this.messageWrapper.removeChild(this.select(id));}clear(){Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'),(message)=>{this.messageWrapper.removeChild(message);});}static announce(message,options){if(!options.priority&&(options.type==='warning'||options.type==='error'))options.priority='assertive';if(options.announce!=='')Drupal.announce(options.announce||message,options.priority);}static messageInternalWrapper(messageWrapper){const innerWrapper=document.createElement('div');innerWrapper.setAttribute('class','messages__wrapper');messageWrapper.insertAdjacentElement('afterbegin',innerWrapper);return innerWrapper;}};Drupal.theme.message=({text},{type,id})=>{const messagesTypes=Drupal.Message.getMessageTypeLabels();const messageWrapper=document.createElement('div');messageWrapper.setAttribute('class',`messages messages--${type}`);messageWrapper.setAttribute('role',type==='error'||type==='warning'?'alert':'status');messageWrapper.setAttribute('data-drupal-message-id',id);messageWrapper.setAttribute('data-drupal-message-type',type);messageWrapper.setAttribute('aria-label',messagesTypes[type]);messageWrapper.innerHTML=`${text}`;return messageWrapper;};})(Drupal);;
(function($,window,Drupal,drupalSettings,loadjs,{isFocusable,tabbable}){Drupal.behaviors.AJAX={attach(context,settings){function loadAjaxBehavior(base){const elementSettings=settings.ajax[base];if(typeof elementSettings.selector==='undefined')elementSettings.selector=`#${base}`;once('drupal-ajax',$(elementSettings.selector)).forEach((el)=>{elementSettings.element=el;elementSettings.base=base;Drupal.ajax(elementSettings);});}Object.keys(settings.ajax||{}).forEach(loadAjaxBehavior);Drupal.ajax.bindAjaxLinks(document.body);once('ajax','.use-ajax-submit').forEach((el)=>{const elementSettings={};elementSettings.url=$(el.form).attr('action');elementSettings.setClick=true;elementSettings.event='click';elementSettings.progress={type:'throbber'};elementSettings.base=el.id;elementSettings.element=el;Drupal.ajax(elementSettings);});},detach(context,settings,trigger){if(trigger==='unload')Drupal.ajax.expired().forEach((instance)=>{Drupal.ajax.instances[instance.instanceIndex]=null;});}};Drupal.AjaxError=function(xmlhttp,uri,customMessage){let statusCode;let statusText;let responseText;if(xmlhttp.status)statusCode=`\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status})}`;else statusCode=`\n${Drupal.t('An AJAX HTTP request terminated abnormally.')}`;statusCode+=`\n${Drupal.t('Debugging information follows.')}`;const pathText=`\n${Drupal.t('Path: !uri',{'!uri':uri})}`;statusText='';try{statusText=`\n${Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()})}`;}catch(e){}responseText='';try{responseText=`\n${Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()})}`;}catch(e){}responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');responseText=responseText.replace(/[\n]+\s+/g,'\n');const readyStateText=xmlhttp.status===0?`\n${Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})}`:'';customMessage=customMessage?`\n${Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})}`:'';this.message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;this.name='AjaxError';if(!Drupal.AjaxError.messages)Drupal.AjaxError.messages=new Drupal.Message();Drupal.AjaxError.messages.add(Drupal.t("Oops, something went wrong. Check your browser's developer console for more details."),{type:'error'});};Drupal.AjaxError.prototype=new Error();Drupal.AjaxError.prototype.constructor=Drupal.AjaxError;Drupal.ajax=function(settings){if(arguments.length!==1)throw new Error('Drupal.ajax() function must be called with one configuration object only');const base=settings.base||false;const element=settings.element||false;delete settings.base;delete settings.element;if(!settings.progress&&!element)settings.progress=false;const ajax=new Drupal.Ajax(base,element,settings);ajax.instanceIndex=Drupal.ajax.instances.length;Drupal.ajax.instances.push(ajax);return ajax;};Drupal.ajax.instances=[];Drupal.ajax.expired=function(){return Drupal.ajax.instances.filter((instance)=>instance&&instance.element!==false&&!document.body.contains(instance.element));};Drupal.ajax.bindAjaxLinks=(element)=>{once('ajax','.use-ajax',element).forEach((ajaxLink)=>{const $linkElement=$(ajaxLink);const elementSettings={progress:{type:'throbber'},dialogType:$linkElement.data('dialog-type'),dialog:$linkElement.data('dialog-options'),dialogRenderer:$linkElement.data('dialog-renderer'),base:$linkElement.attr('id'),element:ajaxLink};const href=$linkElement.attr('href');if(href){elementSettings.url=href;elementSettings.event='click';}const httpMethod=$linkElement.data('ajax-http-method');if(httpMethod)elementSettings.httpMethod=httpMethod;Drupal.ajax(elementSettings);});};Drupal.Ajax=function(base,element,elementSettings){const defaults={httpMethod:'POST',event:element?'mousedown':null,keypress:true,selector:base?`#${base}`:null,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:Drupal.t('Please wait...')},submit:{js:true}};$.extend(this,defaults,elementSettings);this.commands=new Drupal.AjaxCommands();this.instanceIndex=false;if(this.wrapper)this.wrapper=`#${this.wrapper}`;this.element=element;this.elementSettings=elementSettings;if(this.element&&this.element.form)this.$form=$(this.element.form);if(!this.url){const $element=$(this.element);if($element.is('a'))this.url=$element.attr('href');else{if(this.element&&element.form)this.url=this.$form.attr('action');}}const originalUrl=this.url;this.url=this.url.replace(/\/nojs(\/|$|\?|#)/,'/ajax$1');if(drupalSettings.ajaxTrustedUrl[originalUrl])drupalSettings.ajaxTrustedUrl[this.url]=true;const ajax=this;ajax.options={url:ajax.url,data:ajax.submit,isInProgress(){return ajax.ajaxing;},beforeSerialize(elementSettings,options){return ajax.beforeSerialize(elementSettings,options);},beforeSubmit(formValues,elementSettings,options){ajax.ajaxing=true;return ajax.beforeSubmit(formValues,elementSettings,options);},beforeSend(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options);},success(response,status,xmlhttprequest){if(typeof response==='string')response=$.parseJSON(response);if(response!==null&&!drupalSettings.ajaxTrustedUrl[ajax.url])if(xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){const customMessage=Drupal.t('The response failed verification so will not be processed.');return ajax.error(xmlhttprequest,ajax.url,customMessage);}return (Promise.resolve(ajax.success(response,status)).then(()=>{ajax.ajaxing=false;$(document).trigger('ajaxSuccess',[xmlhttprequest,this]);$(document).trigger('ajaxComplete',[xmlhttprequest,this]);if(--$.active===0)$(document).trigger('ajaxStop');}));},error(xmlhttprequest,status,error){ajax.ajaxing=false;},complete(xmlhttprequest,status){if(status==='error'||status==='parsererror')return ajax.error(xmlhttprequest,ajax.url);},dataType:'json',jsonp:false,method:ajax.httpMethod};if(elementSettings.dialog)ajax.options.data.dialogOptions=elementSettings.dialog;if(ajax.options.url.indexOf('?')===-1)ajax.options.url+='?';else ajax.options.url+='&';let wrapper=`drupal_${elementSettings.dialogType||'ajax'}`;if(elementSettings.dialogRenderer)wrapper+=`.${elementSettings.dialogRenderer}`;ajax.options.url+=`${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;$(ajax.element).on(elementSettings.event,function(event){if(!drupalSettings.ajaxTrustedUrl[ajax.url]&&!Drupal.url.isLocal(ajax.url))throw new Error(Drupal.t('The callback URL is not local and not trusted: !url',{'!url':ajax.url}));return ajax.eventResponse(this,event);});if(elementSettings.keypress)$(ajax.element).on('keypress',function(event){return ajax.keypressResponse(this,event);});if(elementSettings.prevent)$(ajax.element).on(elementSettings.prevent,false);};Drupal.ajax.WRAPPER_FORMAT='_wrapper_format';Drupal.Ajax.AJAX_REQUEST_PARAMETER='_drupal_ajax';Drupal.Ajax.prototype.execute=function(){if(this.ajaxing)return;try{this.beforeSerialize(this.element,this.options);return $.ajax(this.options);}catch(e){this.ajaxing=false;window.alert(`An error occurred while attempting to process ${this.options.url}: ${e.message}`);return $.Deferred().reject();}};Drupal.Ajax.prototype.keypressResponse=function(element,event){const ajax=this;if(event.which===13||(event.which===32&&element.type!=='text'&&element.type!=='textarea'&&element.type!=='tel'&&element.type!=='number')){event.preventDefault();event.stopPropagation();$(element).trigger(ajax.elementSettings.event);}};Drupal.Ajax.prototype.eventResponse=function(element,event){event.preventDefault();event.stopPropagation();const ajax=this;if(ajax.ajaxing)return;try{if(ajax.$form){if(ajax.setClick)element.form.clk=element;ajax.$form.ajaxSubmit(ajax.options);}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options);}}catch(e){ajax.ajaxing=false;window.alert(`An error occurred while attempting to process ${ajax.options.url}: ${e.message}`);}};Drupal.Ajax.prototype.beforeSerialize=function(element,options){if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.detachBehaviors(this.$form.get(0),settings,'serialize');}options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER]=1;const pageState=drupalSettings.ajaxPageState;options.data['ajax_page_state[theme]']=pageState.theme;options.data['ajax_page_state[theme_token]']=pageState.theme_token;options.data['ajax_page_state[libraries]']=pageState.libraries;};Drupal.Ajax.prototype.beforeSubmit=function(formValues,element,options){};Drupal.Ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.$form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload='1';const v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=v;}$(this.element).prop('disabled',true);if(!this.progress||!this.progress.type)return;const progressIndicatorMethod=`setProgressIndicator${this.progress.type.slice(0,1).toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;if(progressIndicatorMethod in this&&typeof this[progressIndicatorMethod]==='function')this[progressIndicatorMethod].call(this);};Drupal.theme.ajaxProgressThrobber=(message)=>{const messageMarkup=typeof message==='string'?Drupal.theme('ajaxProgressMessage',message):'';const throbber='<div class="throbber">&nbsp;</div>';return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;};Drupal.theme.ajaxProgressIndicatorFullscreen=()=>'<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';Drupal.theme.ajaxProgressMessage=(message)=>`<div class="message">${message}</div>`;Drupal.theme.ajaxProgressBar=($element)=>$('<div class="ajax-progress ajax-progress-bar"></div>').append($element);Drupal.Ajax.prototype.setProgressIndicatorBar=function(){const progressBar=new Drupal.ProgressBar(`ajax-progress-${this.element.id}`,$.noop,this.progress.method,$.noop);if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(Drupal.theme('ajaxProgressBar',progressBar.element));this.progress.object=progressBar;$(this.element).after(this.progress.element);};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){this.progress.element=$(Drupal.theme('ajaxProgressThrobber',this.progress.message));if($(this.element).closest('[data-drupal-ajax-container]').length)$(this.element).closest('[data-drupal-ajax-container]').after(this.progress.element);else $(this.element).after(this.progress.element);};Drupal.Ajax.prototype.setProgressIndicatorFullscreen=function(){this.progress.element=$(Drupal.theme('ajaxProgressIndicatorFullscreen'));$('body').append(this.progress.element);};Drupal.Ajax.prototype.commandExecutionQueue=function(response,status){const ajaxCommands=this.commands;return Object.keys(response||{}).reduce((executionQueue,key)=>executionQueue.then(()=>{const {command}=response[key];if(command&&ajaxCommands[command])return ajaxCommands[command](this,response[key],status);}),Promise.resolve());};Drupal.Ajax.prototype.success=function(response,status){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).prop('disabled',false);const elementParents=$(this.element).parents('[data-drupal-selector]').addBack().toArray();const focusChanged=Object.keys(response||{}).some((key)=>{const {command,method}=response[key];return (command==='focusFirst'||(command==='invoke'&&method==='focus'));});return (this.commandExecutionQueue(response,status).then(()=>{if(!focusChanged&&this.element&&!$(this.element).data('disable-refocus')){let target=false;for(let n=elementParents.length-1;!target&&n>=0;n--)target=document.querySelector(`[data-drupal-selector="${elementParents[n].getAttribute('data-drupal-selector')}"]`);if(target)$(target).trigger('focus');}if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}this.settings=null;}).catch((error)=>console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error',{'!error':error}))));};Drupal.Ajax.prototype.getEffect=function(response){const type=response.effect||this.effect;const speed=response.speed||this.speed;const effect={};if(type==='none'){effect.showEffect='show';effect.hideEffect='hide';effect.showSpeed='';}else if(type==='fade'){effect.showEffect='fadeIn';effect.hideEffect='fadeOut';effect.showSpeed=speed;}else{effect.showEffect=`${type}Toggle`;effect.hideEffect=`${type}Toggle`;effect.showSpeed=speed;}return effect;};Drupal.Ajax.prototype.error=function(xmlhttprequest,uri,customMessage){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).prop('disabled',false);if(this.$form&&document.body.contains(this.$form.get(0))){const settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}throw new Drupal.AjaxError(xmlhttprequest,uri,customMessage);};Drupal.theme.ajaxWrapperNewContent=($newContent,ajax,response)=>(response.effect||ajax.effect)!=='none'&&$newContent.filter((i)=>!(($newContent[i].nodeName==='#comment'||($newContent[i].nodeName==='#text'&&/^(\s|\n|\r)*$/.test($newContent[i].textContent))))).length>1?Drupal.theme('ajaxWrapperMultipleRootElements',$newContent):$newContent;Drupal.theme.ajaxWrapperMultipleRootElements=($elements)=>$('<div></div>').append($elements);Drupal.AjaxCommands=function(){};Drupal.AjaxCommands.prototype={insert(ajax,response){const $wrapper=response.selector?$(response.selector):$(ajax.wrapper);const method=response.method||ajax.method;const effect=ajax.getEffect(response);const settings=response.settings||ajax.settings||drupalSettings;let $newContent=$($.parseHTML(response.data,document,true));$newContent=Drupal.theme('ajaxWrapperNewContent',$newContent,ajax,response);switch(method){case 'html':case 'replaceWith':case 'replaceAll':case 'empty':case 'remove':Drupal.detachBehaviors($wrapper.get(0),settings);break;default:break;}$wrapper[method]($newContent);if(effect.showEffect!=='show')$newContent.hide();const $ajaxNewContent=$newContent.find('.ajax-new-content');if($ajaxNewContent.length){$ajaxNewContent.hide();$newContent.show();$ajaxNewContent[effect.showEffect](effect.showSpeed);}else{if(effect.showEffect!=='show')$newContent[effect.showEffect](effect.showSpeed);}if($newContent.parents('html').length)$newContent.each((index,element)=>{if(element.nodeType===Node.ELEMENT_NODE)Drupal.attachBehaviors(element,settings);});},remove(ajax,response,status){const settings=response.settings||ajax.settings||drupalSettings;$(response.selector).each(function(){Drupal.detachBehaviors(this,settings);}).remove();},changed(ajax,response,status){const $element=$(response.selector);if(!$element.hasClass('ajax-changed')){$element.addClass('ajax-changed');if(response.asterisk)$element.find(response.asterisk).append(` <abbr class="ajax-changed" title="${Drupal.t('Changed')}">*</abbr> `);}},alert(ajax,response,status){window.alert(response.text);},announce(ajax,response){if(response.priority)Drupal.announce(response.text,response.priority);else Drupal.announce(response.text);},redirect(ajax,response,status){window.location=response.url;},css(ajax,response,status){$(response.selector).css(response.argument);},settings(ajax,response,status){const ajaxSettings=drupalSettings.ajax;if(ajaxSettings)Drupal.ajax.expired().forEach((instance)=>{if(instance.selector){const selector=instance.selector.replace('#','');if(selector in ajaxSettings)delete ajaxSettings[selector];}});if(response.merge)$.extend(true,drupalSettings,response.settings);else ajax.settings=response.settings;},data(ajax,response,status){$(response.selector).data(response.name,response.value);},focusFirst(ajax,response,status){let focusChanged=false;const container=document.querySelector(response.selector);if(container){const tabbableElements=tabbable(container);if(tabbableElements.length){tabbableElements[0].focus();focusChanged=true;}else{if(isFocusable(container)){container.focus();focusChanged=true;}}}if(ajax.hasOwnProperty('element')&&!focusChanged)ajax.element.focus();},invoke(ajax,response,status){const $element=$(response.selector);$element[response.method](...response.args);},restripe(ajax,response,status){$(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');},update_build_id(ajax,response,status){document.querySelectorAll(`input[name="form_build_id"][value="${response.old}"]`).forEach((item)=>{item.value=response.new;});},add_css(ajax,response,status){if(typeof response.data==='string'){Drupal.deprecationError({message:'Passing a string to the Drupal.ajax.add_css() method is deprecated in 10.1.0 and is removed from drupal:11.0.0. See https://www.drupal.org/node/3154948.'});$('head').prepend(response.data);return;}const allUniqueBundleIds=response.data.map(function(style){const uniqueBundleId=style.href+ajax.instanceIndex;loadjs(style.href,uniqueBundleId,{before(path,styleEl){Object.keys(style).forEach((attributeKey)=>{styleEl.setAttribute(attributeKey,style[attributeKey]);});}});return uniqueBundleId;});return new Promise((resolve,reject)=>{loadjs.ready(allUniqueBundleIds,{success(){resolve();},error(depsNotFound){const message=Drupal.t(`The following files could not be loaded: @dependencies`,{'@dependencies':depsNotFound.join(', ')});reject(message);}});});},message(ajax,response){const messages=new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));if(response.clearPrevious)messages.clear();messages.add(response.message,response.messageOptions);},add_js(ajax,response,status){const parentEl=document.querySelector(response.selector||'body');const settings=ajax.settings||drupalSettings;const allUniqueBundleIds=response.data.map((script)=>{const uniqueBundleId=script.src+ajax.instanceIndex;loadjs(script.src,uniqueBundleId,{async:false,before(path,scriptEl){Object.keys(script).forEach((attributeKey)=>{scriptEl.setAttribute(attributeKey,script[attributeKey]);});parentEl.appendChild(scriptEl);return false;}});return uniqueBundleId;});return new Promise((resolve,reject)=>{loadjs.ready(allUniqueBundleIds,{success(){Drupal.attachBehaviors(parentEl,settings);resolve();},error(depsNotFound){const message=Drupal.t(`The following files could not be loaded: @dependencies`,{'@dependencies':depsNotFound.join(', ')});reject(message);}});});},scrollTop(ajax,response){const offset=$(response.selector).offset();let scrollTarget=response.selector;while($(scrollTarget).scrollTop()===0&&$(scrollTarget).parent())scrollTarget=$(scrollTarget).parent();if(offset.top-10<$(scrollTarget).scrollTop())$(scrollTarget).animate({scrollTop:offset.top-10},500);}};const stopEvent=(xhr,settings)=>{return (xhr.getResponseHeader('X-Drupal-Ajax-Token')==='1'&&settings.isInProgress&&settings.isInProgress());};$.extend(true,$.event.special,{ajaxSuccess:{trigger(event,xhr,settings){if(stopEvent(xhr,settings))return false;}},ajaxComplete:{trigger(event,xhr,settings){if(stopEvent(xhr,settings)){$.active++;return false;}}}});})(jQuery,window,Drupal,drupalSettings,loadjs,window.tabbable);;
/* @license MIT https://raw.githubusercontent.com/js-cookie/js-cookie/v3.0.5/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o;};}());}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o];}return e;}var t=function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof (i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c;}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break;}catch(e){}}return e?o[e]:o;}},remove:function(t,n){r(t,"",e({},n,{expires:-1}));},withAttributes:function(n){return t(this.converter,e({},this.attributes,n));},withConverter:function(n){return t(e({},this.converter,n),this.attributes);}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}});}({read:function(e){return '"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent);}},{path:"/"});return t;}));;
/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,Drupal,drupalSettings,once){'use strict';Drupal.quicktabs=Drupal.quicktabs||{};Drupal.quicktabs.getQTName=function(el){return el.attr('id').substring(el.attr('id').indexOf('-')+1);};Drupal.behaviors.quicktabs={attach:function(context,settings){$(once('quicktabs-wrapper','div.quicktabs-wrapper',context)).each(function(){var el=$(this);Drupal.quicktabs.prepare(el);});}};Drupal.quicktabs.prepare=function(el){var qt_name=Drupal.quicktabs.getQTName(el),$ul=$(el).find('ul.quicktabs-tabs:first');$ul.find('li a').each(function(i,element){element.myTabIndex=i;element.qt_name=qt_name;var tab=new Drupal.quicktabs.tab(element),parent_li=$(element).parents('li').get(0);$(element).bind('click',{tab},Drupal.quicktabs.clickHandler);$(element).bind('keydown',{myTabIndex:i},Drupal.quicktabs.keyDownHandler);});};Drupal.quicktabs.clickHandler=function(event){var tab=event.data.tab,element=this;$(this).parents('li').siblings().removeClass('active');$(this).parents('li').siblings().attr('aria-selected','false');$(this).parents('li').siblings().attr('tabindex','-1');$(this).parents('li').siblings().find('a').attr('tabindex','-1');$(this).parents('li').addClass('active');$(this).parents('li').attr('aria-selected','true');$(this).attr('tabindex','0');if($(this).hasClass('use-ajax'))$(this).addClass('quicktabs-loaded');tab.container.children().addClass('quicktabs-hide');if(!tab.tabpage.hasClass("quicktabs-tabpage"))tab=new Drupal.quicktabs.tab(element);tab.tabpage.removeClass('quicktabs-hide');return false;};Drupal.quicktabs.keyDownHandler=function(event){var tabIndex=event.data.myTabIndex,tabs=$(this).parent('li').parent("ul").find("li a");switch(event.key){case 'ArrowLeft':case 'ArrowUp':event.preventDefault();if(tabIndex<=0){tabs[tabs.length-1].click();tabs[tabs.length-1].focus();}else{tabs[tabIndex-1].click();tabs[tabIndex-1].focus();};break;case 'ArrowRight':case 'ArrowDown':event.preventDefault();if(tabIndex>=tabs.length-1){tabs[0].click();tabs[0].focus();}else{tabs[tabIndex+1].click();tabs[tabIndex+1].focus();}}};Drupal.quicktabs.tab=function(el){this.element=el;this.tabIndex=el.myTabIndex;var qtKey='qt_'+el.qt_name,i=0;for(var i=0;i<drupalSettings.quicktabs[qtKey].tabs.length;i++)if(i==this.tabIndex){this.tabObj=drupalSettings.quicktabs[qtKey].tabs[i];this.tabKey=typeof el.dataset.quicktabsTabIndex!=='undefined'?el.dataset.quicktabsTabIndex:i;};this.tabpage_id='quicktabs-tabpage-'+el.qt_name+'-'+this.tabKey;this.container=$('#quicktabs-container-'+el.qt_name);this.tabpage=this.container.find('#'+this.tabpage_id);};Drupal.behaviors.quicktabsmemory={attach:function(context,settings){$(once('form-group','div.quicktabs-wrapper',context)).each(function(){var el=$(this),qt_name=Drupal.quicktabs.getQTName(el),$ul=$(el).find('ul.quicktabs-tabs:first'),cookieOptions={path:'/'},cookieName='Drupal-quicktabs-active-tab-id-'+qt_name;$ul.find('li a').each(function(i,element){var $link=$(element);$link.data('myTabIndex',i);var $cookieValue=Cookies.get("yourCookieNamecookieName");if($cookieValue!==''&&$link.data('myTabIndex')==$cookieValue)$(element).click();$link.on('click',function(){var $linkdata=$(this),tabIndex=$linkdata.data('myTabIndex');$.cookie(cookieName,tabIndex,cookieOptions);});});});}};if(Drupal.Ajax)Drupal.Ajax.prototype.eventResponse=function(element,event){event.preventDefault();event.stopPropagation();var ajax=this;if(ajax.ajaxing)return;try{if(ajax.$form){if(ajax.setClick)element.form.clk=element;ajax.$form.ajaxSubmit(ajax.options);}else{if(!$(element).hasClass('quicktabs-loaded')){ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options);}}}catch(e){ajax.ajaxing=false;window.alert('An error occurred while attempting to process '+ajax.options.url+': '+e.message);}};})(jQuery,Drupal,drupalSettings,once);;
window.lazySizesConfig=window.lazySizesConfig||{};window.lazySizesConfig.lazyClass='lazy';document.addEventListener('lazybeforeunveil',function(e){var bg=e.target.getAttribute('data-bg');if(bg)if(e.target.getAttribute('data-bg-sizes')==='auto'){var bgRatio=e.target.getAttribute('data-bg-ratio');if(!bgRatio)bgRatio=1;var resizeUrl;if(bg.indexOf('url(')>0){resizeUrl=bg.replace('url(');resizeUrl=resizeUrl.substr(0,resizeUrl.length-1);}else resizeUrl=bg;resizeUrl+='?imwidth='+Math.floor(window.innerWidth*bgRatio);e.target.style.backgroundImage='url('+resizeUrl+')';}else if(bg.indexOf('url(')>0)e.target.style.backgroundImage=bg;else e.target.style.backgroundImage='url('+bg+')';});document.addEventListener('lazybeforesizes',function(e){var resizeUrl,getResizeUrl=function(src){return src+='?imwidth='+Math.floor(e.detail.width);};if(e.target.tagName="IMG"){resizeUrl=e.target.getAttribute('data-src');if(resizeUrl.indexOf('imwidth=')>=0)return;resizeUrl=getResizeUrl(resizeUrl);e.target.setAttribute("data-src",resizeUrl);return;}});;
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t)if(!(e in H))H[e]=t[e];}(),!D||!D.getElementsByClassName)return {init:function(){},cfg:H,noSupport:true};var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t])a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)");return a[t].test(e[$]("class")||"")&&a[t];},K=function(e,t){if(!J(e,t))e.setAttribute("class",(e[$]("class")||"").trim()+" "+t);},Q=function(e,t){var a;if(a=J(e,t))e.setAttribute("class",(e[$]("class")||"").replace(a," "));},V=function(t,a,e){var i=e?P:"removeEventListener";if(e)V(t,a);r.forEach(function(e){t[i](e,a);});},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a)a={};a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n;},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset"))e.setAttribute("srcset",t.src);a({reevaluate:true,elements:[e]});}else{if(t&&t.src)e.src=t.src;}},Z=function(e,t){return (getComputedStyle(e,null)||{})[t];},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode;}return a;},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length)e.shift()();a=false;};var e=function(e,t){if(a&&!t)e.apply(this,arguments);else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s);}}};e._lsFlush=s;return e;}(),te=function(a,e){return e?function(){ee(a);}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t);});};},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e();};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout)n=H.ricTimeout;}:te(function(){I(t);},true);return function(e){var t;if(e=e===true)n=33;if(a)return;a=true;t=r-(f.now()-i);if(t<0)t=0;if(e||t<9)s();else I(s,t);};},ie=function(e){var t,a;var i=99;var r=function(){t=null;e();};var n=function(){var e=f.now()-a;if(e<i)I(n,i-e);else (o||r)(r);};return function(){a=f.now();if(!t)t=I(n,i);};},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll" in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target)M=0;};var x=function(e){if(A==null)A=Z(D.body,"visibility")=="hidden";return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden");};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1;}}return r;};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace)continue;if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue;}if(!(o=d[t][$]("data-expand"))||!(n=o*1))n=w;if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0;}else if(h>1&&N>1&&M<6)w=u;else w=_;}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n;}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9)break;}else{if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto")))i=v[0]||d[t];}}if(i&&!r)R(i);}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return;}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded");};var i=te(S);var B=function(e){i({target:e.target});};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0)e.contentWindow.location.replace(t);else{if(a==1)e.src=t;}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")])e.setAttribute("media",t);if(a)e.setAttribute("srcset",a);};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i)if(a)K(t,H.autosizesClass);else t.setAttribute("sizes",i);s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"");}f=e.firesLoad||"src" in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true);}if(l)G.call(o.getElementsByTagName("source"),F);if(s)t.setAttribute("srcset",s);else{if(n&&!l)if(d.test(t.nodeName))T(t,n);else t.src=n;}if(r&&(s||l))Y(t,{src:n});}if(t._lazyRace)delete t._lazyRace;Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e)K(t,H.fastLoadedClass);S(u);t._lazyCache=true;I(function(){if("_lazyCache" in t)delete t._lazyCache;},9);}if(t.loading=="lazy")M--;},true);});var R=function(e){if(e._lazyRace)return;var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass))return;t=X(e,"lazyunveilread").detail;if(r)re.updateElem(e,true,e.offsetWidth);e._lazyRace=true;M++;s(e,t,r,i,a);};var r=ie(function(){H.loadMode=3;a();});var o=function(){if(H.loadMode==3)H.loadMode=2;r();};var l=function(){if(m)return;if(f.now()-e<999){I(l,999);return;}m=true;H.loadMode=3;a();q("scroll",o,true);};return {_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach)U(function(){t.forEach(function(e){if(e.complete)R(e);});});}});if(u.MutationObserver)new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true});else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999);}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true);});if(/d$|^c/.test(D.readyState))l();else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4);}if(k.elements.length){t();ee._lsFlush();}else a();},checkElems:a,unveil:R,_aLSL:o};}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++)r[n].setAttribute("sizes",i);}if(!a.detail.dataAttr)Y(e,a.detail);});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth)n(e,r,i,a);}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++)i(a[e]);}};var t=ie(e);return {_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t);},checkElems:t,updateElem:i};}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._();}};return I(function(){H.init&&t();}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee};}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t);}("undefined"!=typeof window?window:{});;
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function($){"use strict";function transitionEnd(){var el=document.createElement('bootstrap'),transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames)if(el.style[name]!==undefined)return {end:transEndEventNames[name]};};$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this;$(this).one($.support.transition.end,function(){called=true;});var callback=function(){if(!called)$($el).trigger($.support.transition.end);};setTimeout(callback,duration);return this;};$(function(){$.support.transition=transitionEnd();});}(window.jQuery);+function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close);};Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'');};var $parent=$(selector);if(e)e.preventDefault();if(!$parent.length)$parent=$this.hasClass('alert')?$this:$this.parent();$parent.trigger(e=$.Event('close.bs.alert'));if(e.isDefaultPrevented())return;$parent.removeClass('in');function removeElement(){$parent.trigger('closed.bs.alert').remove();};$.support.transition&&$parent.hasClass('fade')?$parent.one($.support.transition.end,removeElement).emulateTransitionEnd(150):removeElement();};var old=$.fn.alert;$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.alert');if(!data)$this.data('bs.alert',(data=new Alert(this)));if(typeof option=='string')data[option].call($this);});};$.fn.alert.Constructor=Alert;$.fn.alert.noConflict=function(){$.fn.alert=old;return this;};$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close);}(window.jQuery);+function($){"use strict";var Button=function(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);};Button.DEFAULTS={loadingText:'loading...'};Button.prototype.setState=function(state){var d='disabled',$el=this.$element,val=$el.is('input')?'val':'html',data=$el.data();state=state+'Text';if(!data.resetText)$el.data('resetText',$el[val]());$el[val](data[state]||this.options[state]);setTimeout(function(){state=='loadingText'?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d);},0);};Button.prototype.toggle=function(){var $parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find('input').prop('checked',!this.$element.hasClass('active')).trigger('change');if($input.prop('type')==='radio')$parent.find('.active').removeClass('active');};this.$element.toggleClass('active');};var old=$.fn.button;$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.button'),options=typeof option=='object'&&option;if(!data)$this.data('bs.button',(data=new Button(this,options)));if(option=='toggle')data.toggle();else{if(option)data.setState(option);}});};$.fn.button.Constructor=Button;$.fn.button.noConflict=function(){$.fn.button=old;return this;};$(document).on('click.bs.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target);if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn');$btn.button('toggle');e.preventDefault();});}(window.jQuery);+function($){"use strict";var Carousel=function(element,options){this.$element=$(element);this.$indicators=this.$element.find('.carousel-indicators');this.options=options;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=='hover'&&this.$element.on('mouseenter',$.proxy(this.pause,this)).on('mouseleave',$.proxy(this.cycle,this));};Carousel.DEFAULTS={interval:5e3,pause:'hover',wrap:true};Carousel.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval));return this;};Carousel.prototype.getActiveIndex=function(){this.$active=this.$element.find('.item.active');this.$items=this.$active.parent().children();return this.$items.index(this.$active);};Carousel.prototype.to=function(pos){var that=this,activeIndex=this.getActiveIndex();if(pos>(this.$items.length-1)||pos<0)return;if(this.sliding)return this.$element.one('slid',function(){that.to(pos);});if(activeIndex==pos)return this.pause().cycle();return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]));};Carousel.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find('.next, .prev').length&&$.support.transition.end){this.$element.trigger($.support.transition.end);this.cycle(true);};this.interval=clearInterval(this.interval);return this;};Carousel.prototype.next=function(){if(this.sliding)return;return this.slide('next');};Carousel.prototype.prev=function(){if(this.sliding)return;return this.slide('prev');};Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active'),$next=next||$active[type](),isCycling=this.interval,direction=type=='next'?'left':'right',fallback=type=='next'?'first':'last',that=this;if(!$next.length){if(!this.options.wrap)return;$next=this.$element.find('.item')[fallback]();};this.sliding=true;isCycling&&this.pause();var e=$.Event('slide.bs.carousel',{relatedTarget:$next[0],direction});if($next.hasClass('active'))return;if(this.$indicators.length){this.$indicators.find('.active').removeClass('active');this.$element.one('slid',function(){var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()]);$nextIndicator&&$nextIndicator.addClass('active');});};if($.support.transition&&this.$element.hasClass('slide')){this.$element.trigger(e);if(e.isDefaultPrevented())return;$next.addClass(type);$next[0].offsetWidth;$active.addClass(direction);$next.addClass(direction);$active.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active');$active.removeClass(['active',direction].join(' '));that.sliding=false;setTimeout(function(){that.$element.trigger('slid');},0);}).emulateTransitionEnd(600);}else{this.$element.trigger(e);if(e.isDefaultPrevented())return;$active.removeClass('active');$next.addClass('active');this.sliding=false;this.$element.trigger('slid');};isCycling&&this.cycle();return this;};var old=$.fn.carousel;$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.carousel'),options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option),action=typeof option=='string'?option:options.slide;if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)));if(typeof option=='number')data.to(option);else if(action)data[action]();else{if(options.interval)data.pause().cycle();}});};$.fn.carousel.Constructor=Carousel;$.fn.carousel.noConflict=function(){$.fn.carousel=old;return this;};$(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){var $this=$(this),href,$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')),options=$.extend({},$target.data(),$this.data()),slideIndex=$this.attr('data-slide-to');if(slideIndex)options.interval=false;$target.carousel(options);if(slideIndex=$this.attr('data-slide-to'))$target.data('bs.carousel').to(slideIndex);e.preventDefault();});$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);$carousel.carousel($carousel.data());});});}(window.jQuery);+function($){"use strict";var Collapse=function(element,options){this.$element=$(element);this.options=$.extend({},Collapse.DEFAULTS,options);this.transitioning=null;if(this.options.parent)this.$parent=$(this.options.parent);if(this.options.toggle)this.toggle();};Collapse.DEFAULTS={toggle:true};Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width');return hasWidth?'width':'height';};Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return;var startEvent=$.Event('show.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;var actives=this.$parent&&this.$parent.find('> .panel > .in');if(actives&&actives.length){var hasData=actives.data('bs.collapse');if(hasData&&hasData.transitioning)return;actives.collapse('hide');hasData||actives.data('bs.collapse',null);};var dimension=this.dimension();this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);this.transitioning=1;var complete=function(){this.$element.removeClass('collapsing').addClass('in')[dimension]('auto');this.transitioning=0;this.$element.trigger('shown.bs.collapse');};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(['scroll',dimension].join('-'));this.$element.one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);};Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return;var startEvent=$.Event('hide.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight;this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');this.transitioning=1;var complete=function(){this.transitioning=0;this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');};if(!$.support.transition)return complete.call(this);this.$element[dimension](0).one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350);};Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']();};var old=$.fn.collapse;$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.collapse'),options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option);if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)));if(typeof option=='string')data[option]();});};$.fn.collapse.Constructor=Collapse;$.fn.collapse.noConflict=function(){$.fn.collapse=old;return this;};$(document).on('click.bs.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href,target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''),$target=$(target),data=$target.data('bs.collapse'),option=data?'toggle':$this.data(),parent=$this.attr('data-parent'),$parent=parent&&$(parent);if(!data||!data.transitioning){if($parent)$parent.find('[data-toggle=collapse][data-parent="'+parent+'"]').not($this).addClass('collapsed');$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed');};$target.collapse(option);});}(window.jQuery);+function($){"use strict";var backdrop='.dropdown-backdrop',toggle='[data-toggle=dropdown]',Dropdown=function(element){var $el=$(element).on('click.bs.dropdown',this.toggle);};Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is('.disabled, :disabled'))return;var $parent=getParent($this),isActive=$parent.hasClass('open');clearMenus();if(!isActive){if('ontouchstart' in document.documentElement&&!$parent.closest('.navbar-nav').length)$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus);$parent.trigger(e=$.Event('show.bs.dropdown'));if(e.isDefaultPrevented())return;$parent.toggleClass('open').trigger('shown.bs.dropdown');$this.focus();};return false;};Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.keyCode))return;var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is('.disabled, :disabled'))return;var $parent=getParent($this),isActive=$parent.hasClass('open');if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).focus();return $this.click();};var $items=$('[role=menu] li:not(.divider):visible a',$parent);if(!$items.length)return;var index=$items.index($items.filter(':focus'));if(e.keyCode==38&&index>0)index--;if(e.keyCode==40&&index<$items.length-1)index++;if(!~index)index=0;$items.eq(index).focus();};function clearMenus(){$(backdrop).remove();$(toggle).each(function(e){var $parent=getParent($(this));if(!$parent.hasClass('open'))return;$parent.trigger(e=$.Event('hide.bs.dropdown'));if(e.isDefaultPrevented())return;$parent.removeClass('open').trigger('hidden.bs.dropdown');});}function getParent($this){var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&/#/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'');};var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent();};var old=$.fn.dropdown;$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown');if(!data)$this.data('dropdown',(data=new Dropdown(this)));if(typeof option=='string')data[option].call($this);});};$.fn.dropdown.Constructor=Dropdown;$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this;};$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation();}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle+', [role=menu]',Dropdown.prototype.keydown);}(window.jQuery);+function($){"use strict";var Modal=function(element,options){this.options=options;this.$element=$(element);this.$backdrop=this.isShown=null;if(this.options.remote)this.$element.load(this.options.remote);};Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this[!this.isShown?'show':'hide'](_relatedTarget);};Modal.prototype.show=function(_relatedTarget){var that=this,e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.escape();this.$element.on('click.dismiss.modal','[data-dismiss="modal"]',$.proxy(this.hide,this));this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade');if(!that.$element.parent().length)that.$element.appendTo(document.body);that.$element.show();if(transition)that.$element[0].offsetWidth;that.$element.addClass('in').attr('aria-hidden',false);that.enforceFocus();var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget});transition?that.$element.find('.modal-dialog').one($.support.transition.end,function(){that.$element.focus().trigger(e);}).emulateTransitionEnd(300):that.$element.focus().trigger(e);});};Modal.prototype.hide=function(e){if(e)e.preventDefault();e=$.Event('hide.bs.modal');this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented())return;this.isShown=false;this.escape();$(document).off('focusin.bs.modal');this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.modal');$.support.transition&&this.$element.hasClass('fade')?this.$element.one($.support.transition.end,$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal();};Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length)this.$element.focus();},this));};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard)this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide();},this));else{if(!this.isShown)this.$element.off('keyup.dismiss.bs.modal');}};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.removeBackdrop();that.$element.trigger('hidden.bs.modal');});};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null;};Modal.prototype.backdrop=function(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':'';if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body);this.$element.on('click.dismiss.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return;this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this);},this));if(doAnimate)this.$backdrop[0].offsetWidth;this.$backdrop.addClass('in');if(!callback)return;doAnimate?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback();}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in');$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback();}else{if(callback)callback();}};var old=$.fn.modal;$.fn.modal=function(option,_relatedTarget){return this.each(function(){var $this=$(this),data=$this.data('bs.modal'),options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option);if(!data)$this.data('bs.modal',(data=new Modal(this,options)));if(typeof option=='string')data[option](_relatedTarget);else{if(options.show)data.show(_relatedTarget);}});};$.fn.modal.Constructor=Modal;$.fn.modal.noConflict=function(){$.fn.modal=old;return this;};$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr('href'),$target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))),option=$target.data('modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());e.preventDefault();$target.modal(option,this).one('hide',function(){$this.is(':visible')&&$this.focus();});});$(document).on('show.bs.modal','.modal',function(){$(document.body).addClass('modal-open');}).on('hidden.bs.modal','.modal',function(){$(document.body).removeClass('modal-open');});}(window.jQuery);+function($){"use strict";var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init('tooltip',element,options);};Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false};Tooltip.prototype.init=function(type,element,options){this.enabled=true;this.type=type;this.$element=$(element);this.options=this.getOptions(options);var triggers=this.options.trigger.split(' ');for(var i=triggers.length;i--;){var trigger=triggers[i];if(trigger=='click')this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this));else{if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focus',eventOut=trigger=='hover'?'mouseleave':'blur';this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this));this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this));}}};this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle();};Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS;};Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options);if(options.delay&&typeof options.delay=='number')options.delay={show:options.delay,hide:options.delay};return options;};Tooltip.prototype.getDelegateOptions=function(){var options={},defaults=this.getDefaults();this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value;});return options;};Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type);clearTimeout(self.timeout);self.hoverState='in';if(!self.options.delay||!self.options.delay.show)return self.show();self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show();},self.options.delay.show);};Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type);clearTimeout(self.timeout);self.hoverState='out';if(!self.options.delay||!self.options.delay.hide)return self.hide();self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide();},self.options.delay.hide);};Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);if(e.isDefaultPrevented())return;var $tip=this.tip();this.setContent();if(this.options.animation)$tip.addClass('fade');var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement,autoToken=/\s?auto?\s?/i,autoPlace=autoToken.test(placement);if(autoPlace)placement=placement.replace(autoToken,'')||'top';$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement);this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition(),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(autoPlace){var $parent=this.$element.parent(),orgPlacement=placement,docScroll=document.documentElement.scrollTop||document.body.scrollTop,parentWidth=this.options.container=='body'?window.innerWidth:$parent.outerWidth(),parentHeight=this.options.container=='body'?window.innerHeight:$parent.outerHeight(),parentLeft=this.options.container=='body'?0:$parent.offset().left;placement=placement=='bottom'&&pos.top+pos.height+actualHeight-docScroll>parentHeight?'top':placement=='top'&&pos.top-docScroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentWidth?'left':placement=='left'&&pos.left-actualWidth<parentLeft?'right':placement;$tip.removeClass(orgPlacement).addClass(placement);};var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement);this.$element.trigger('shown.bs.'+this.type);}};Tooltip.prototype.applyPlacement=function(offset,placement){var replace,$tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,marginTop=parseInt($tip.css('margin-top'),10),marginLeft=parseInt($tip.css('margin-left'),10);if(isNaN(marginTop))marginTop=0;if(isNaN(marginLeft))marginLeft=0;offset.top=offset.top+marginTop;offset.left=offset.left+marginLeft;$tip.offset(offset).addClass('in');var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(placement=='top'&&actualHeight!=height){replace=true;offset.top=offset.top+height-actualHeight;};if(/bottom|top/.test(placement)){var delta=0;if(offset.left<0){delta=offset.left*-2;offset.left=0;$tip.offset(offset);actualWidth=$tip[0].offsetWidth;actualHeight=$tip[0].offsetHeight;};this.replaceArrow(delta-width+actualWidth,actualWidth,'left');}else this.replaceArrow(actualHeight-height,actualHeight,'top');if(replace)$tip.offset(offset);};Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?(50*(1-delta/dimension)+"%"):'');};Tooltip.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle();$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title);$tip.removeClass('fade in top bottom left right');};Tooltip.prototype.hide=function(){var that=this,$tip=this.tip(),e=$.Event('hide.bs.'+this.type);function complete(){if(that.hoverState!='in')$tip.detach();};this.$element.trigger(e);if(e.isDefaultPrevented())return;$tip.removeClass('in');$.support.transition&&this.$tip.hasClass('fade')?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete();this.$element.trigger('hidden.bs.'+this.type);return this;};Tooltip.prototype.fixTitle=function(){var $e=this.$element;if($e.attr('title')||typeof ($e.attr('data-original-title'))!='string')$e.attr('data-original-title',$e.attr('title')||'').attr('title','');};Tooltip.prototype.hasContent=function(){return this.getTitle();};Tooltip.prototype.getPosition=function(){var el=this.$element[0];return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset());};Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width};};Tooltip.prototype.getTitle=function(){var title,$e=this.$element,o=this.options;title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title);return title;};Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template);};Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow');};Tooltip.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null;}};Tooltip.prototype.enable=function(){this.enabled=true;};Tooltip.prototype.disable=function(){this.enabled=false;};Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled;};Tooltip.prototype.toggle=function(e){var self=e?$(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type):this;self.tip().hasClass('in')?self.leave(self):self.enter(self);};Tooltip.prototype.destroy=function(){this.hide().$element.off('.'+this.type).removeData('bs.'+this.type);};var old=$.fn.tooltip;$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.tooltip'),options=typeof option=='object'&&option;if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)));if(typeof option=='string')data[option]();});};$.fn.tooltip.Constructor=Tooltip;$.fn.tooltip.noConflict=function(){$.fn.tooltip=old;return this;};}(window.jQuery);+function($){"use strict";var Popover=function(element,options){this.init('popover',element,options);};if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js');Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype);Popover.prototype.constructor=Popover;Popover.prototype.getDefaults=function(){return Popover.DEFAULTS;};Popover.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent();$tip.find('.popover-title')[this.options.html?'html':'text'](title);$tip.find('.popover-content')[this.options.html?'html':'text'](content);$tip.removeClass('fade top bottom left right in');if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide();};Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent();};Popover.prototype.getContent=function(){var $e=this.$element,o=this.options;return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content);};Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.arrow');};Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template);return this.$tip;};var old=$.fn.popover;$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.popover'),options=typeof option=='object'&&option;if(!data)$this.data('bs.popover',(data=new Popover(this,options)));if(typeof option=='string')data[option]();});};$.fn.popover.Constructor=Popover;$.fn.popover.noConflict=function(){$.fn.popover=old;return this;};}(window.jQuery);+function($){"use strict";function ScrollSpy(element,options){var href,process=$.proxy(this.process,this);this.$element=$(element).is('body')?$(window):$(element);this.$body=$('body');this.$scrollElement=this.$element.on('scroll.bs.scroll-spy.data-api',process);this.options=$.extend({},ScrollSpy.DEFAULTS,options);this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a';this.offsets=$([]);this.targets=$([]);this.activeTarget=null;this.refresh();this.process();};ScrollSpy.DEFAULTS={offset:10};ScrollSpy.prototype.refresh=function(){var offsetMethod=this.$element[0]==window?'offset':'position';this.offsets=$([]);this.targets=$([]);var self=this,$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#\w/.test(href)&&$(href);return ($href&&$href.length&&[[$href[offsetMethod]().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null;}).sort(function(a,b){return a[0]-b[0];}).each(function(){self.offsets.push(this[0]);self.targets.push(this[1]);});};ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i;if(scrollTop>=maxScroll)return activeTarget!=(i=targets.last()[0])&&this.activate(i);for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i]);};ScrollSpy.prototype.activate=function(target){this.activeTarget=target;$(this.selector).parents('.active').removeClass('active');var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parents('li').addClass('active');if(active.parent('.dropdown-menu').length)active=active.closest('li.dropdown').addClass('active');active.trigger('activate');};var old=$.fn.scrollspy;$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.scrollspy'),options=typeof option=='object'&&option;if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)));if(typeof option=='string')data[option]();});};$.fn.scrollspy.Constructor=ScrollSpy;$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this;};$(window).on('load',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);$spy.scrollspy($spy.data());});});}(window.jQuery);+function($){"use strict";var Tab=function(element){this.element=$(element);};Tab.prototype.show=function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'');};if($this.parent('li').hasClass('active'))return;var previous=$ul.find('.active:last a')[0],e=$.Event('show.bs.tab',{relatedTarget:previous});$this.trigger(e);if(e.isDefaultPrevented())return;var $target=$(selector);this.activate($this.parent('li'),$ul);this.activate($target,$target.parent(),function(){$this.trigger({type:'shown.bs.tab',relatedTarget:previous});});};Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&$active.hasClass('fade');function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');element.addClass('active');if(transition){element[0].offsetWidth;element.addClass('in');}else element.removeClass('fade');if(element.parent('.dropdown-menu'))element.closest('li.dropdown').addClass('active');callback&&callback();};transition?$active.one($.support.transition.end,next).emulateTransitionEnd(150):next();$active.removeClass('in');};var old=$.fn.tab;$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.tab');if(!data)$this.data('bs.tab',(data=new Tab(this)));if(typeof option=='string')data[option]();});};$.fn.tab.Constructor=Tab;$.fn.tab.noConflict=function(){$.fn.tab=old;return this;};$(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault();$(this).tab('show');});}(window.jQuery);+function($){"use strict";var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options);this.$window=$(window).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this));this.$element=$(element);this.affixed=this.unpin=null;this.checkPosition();};Affix.RESET='affix affix-top affix-bottom';Affix.DEFAULTS={offset:0};Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1);};Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return;var scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetTop=offset.top,offsetBottom=offset.bottom;if(typeof offset!='object')offsetBottom=offsetTop=offset;if(typeof offsetTop=='function')offsetTop=offset.top();if(typeof offsetBottom=='function')offsetBottom=offset.bottom();var affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&(scrollTop<=offsetTop)?'top':false;if(this.affixed===affix)return;if(this.unpin)this.$element.css('top','');this.affixed=affix;this.unpin=affix=='bottom'?position.top-scrollTop:null;this.$element.removeClass(Affix.RESET).addClass('affix'+(affix?'-'+affix:''));if(affix=='bottom')this.$element.offset({top:document.body.offsetHeight-offsetBottom-this.$element.height()});};var old=$.fn.affix;$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data('bs.affix'),options=typeof option=='object'&&option;if(!data)$this.data('bs.affix',(data=new Affix(this,options)));if(typeof option=='string')data[option]();});};$.fn.affix.Constructor=Affix;$.fn.affix.noConflict=function(){$.fn.affix=old;return this;};$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{};if(data.offsetBottom)data.offset.bottom=data.offsetBottom;if(data.offsetTop)data.offset.top=data.offsetTop;$spy.affix(data);});});}(window.jQuery);;
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return -c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return -c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return -c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return (t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return -c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158,p=0,a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});;
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1;}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t);},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t);},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key];},t.prototype.disable=function(){return this.enabled=!1,this;},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this;},t.prototype.next=function(){return this.group.next(this);},t.prototype.previous=function(){return this.group.previous(this);},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]();},t.destroyAll=function(){t.invokeAll("destroy");},t.disableAll=function(){t.invokeAll("disable");},t.enableAll=function(){t.invokeAll("enable");},t.refreshAll=function(){t.Context.refreshAll();},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight;},t.viewportWidth=function(){return document.documentElement.clientWidth;},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight();},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth();}},window.Waypoint=t;}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60);}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler();}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh();},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key]);},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1;}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t));});},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1;}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t));});},e.prototype.handleResize=function(){n.Context.refreshAll();},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group);}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll};},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight();},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty();},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth();},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy();},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group);}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers();}),this;},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t);},e.refreshAll=function(){for(var t in o)o[t].refresh();},e.findByElement=function(t){return o[t.waypointContextKey];},window.onload=function(){r&&r(),e.refreshAll();},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e);},n.Context=e;}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint;}function e(t,e){return e.triggerPoint-t.triggerPoint;}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this;}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t);},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]};},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i]);}}this.clearTriggerQueues();},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1];},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null;},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t);},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1);},i.prototype.first=function(){return this.waypoints[0];},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1];},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t);},n.Group=i;}(),function(){"use strict";function t(t){this.$element=e(t);}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t);};}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o];}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t;}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n));}),i;};}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto));}();(function($){'use strict';var $=window.jQuery;var Waypoint=window.Waypoint;function Sticky(options){this.options=$.extend({},Waypoint.defaults,Sticky.defaults,options);this.element=this.options.element;this.$element=$(this.element);this.createWrapper();this.createWaypoint();}Sticky.prototype.createWaypoint=function(){var originalHandler=this.options.handler;this.waypoint=new Waypoint($.extend({},this.options,{element:this.wrapper,handler:$.proxy(function(direction){var shouldBeStuck=this.options.direction.indexOf(direction)>-1;var wrapperHeight=shouldBeStuck?this.$element.outerHeight(true):'';this.$wrapper.height(wrapperHeight);this.$element.toggleClass(this.options.stuckClass,shouldBeStuck);if(originalHandler)originalHandler.call(this,direction);},this)}));};Sticky.prototype.createWrapper=function(){if(this.options.wrapper)this.$element.wrap(this.options.wrapper);this.$wrapper=this.$element.parent();this.wrapper=this.$wrapper[0];};Sticky.prototype.destroy=function(){if(this.$element.parent()[0]===this.wrapper){this.waypoint.destroy();this.$element.removeClass(this.options.stuckClass);if(this.options.wrapper)this.$element.unwrap();}};$(document).ready(function(){Sticky.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:'stuck',direction:'down right'};Waypoint.Sticky=Sticky;});})(jQuery);;
(function(factory){var registeredInModuleLoader;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true;};if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true;};if(!registeredInModuleLoader){var OldCookies=window.Cookies,api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0,result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes)result[key]=attributes[key];};return result;}function decode(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);}function init(converter){function api(){}function set(key,value,attributes){if(typeof document==='undefined')return;attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number')attributes.expires=new Date(new Date()*1+attributes.expires*864e+5);attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{var result=JSON.stringify(value);if(/^[\{\[]/.test(result))value=result;}catch(e){};value=converter.write?converter.write(value,key):encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);key=encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName])continue;stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true)continue;stringifiedAttributes+='='+attributes[attributeName].split(';')[0];};return (document.cookie=key+'='+value+stringifiedAttributes);}function get(key,json){if(typeof document==='undefined')return;var jar={},cookies=document.cookie?document.cookie.split('; '):[],i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('='),cookie=parts.slice(1).join('=');if(!json&&cookie.charAt(0)==='"')cookie=cookie.slice(1,-1);try{var name=decode(parts[0]);cookie=(converter.read||converter)(cookie,name)||decode(cookie);if(json)try{cookie=JSON.parse(cookie);}catch(e){};jar[name]=cookie;if(key===name)break;}catch(e){}};return key?jar[key]:jar;};api.set=set;api.get=function(key){return get(key,false);};api.getJSON=function(key){return get(key,true);};api.remove=function(key,attributes){set(key,'',extend(attributes,{expires:-1}));};api.defaults={};api.withConverter=init;return api;};return init(function(){});}));;
var SMC_COMMON=SMC_COMMON||{};SMC_COMMON.context={method:{},data:{storeUrl:null}};SMC_COMMON.context.method.getStoreUrl=function(){if(SMC_COMMON.context.data.storeUrl===null)if(window.location.hostname==='dev.supermicro.com')SMC_COMMON.context.data.storeUrl='https://dev-store.supermicro.com/us_en';else if(window.location.hostname==='staging.supermicro.com')SMC_COMMON.context.data.storeUrl='https://staging-store.supermicro.com/us_en';else if(window.location.hostname==='entweb-va.supermicro.com')SMC_COMMON.context.data.storeUrl='https://us-store-va.supermicro.com/us_en';else SMC_COMMON.context.data.storeUrl='https://store.supermicro.com/us_en';return SMC_COMMON.context.data.storeUrl;};;
var SMC_COMMON=SMC_COMMON||{};SMC_COMMON.vars={method:{},data:{isLoginStore:null,isInsideUser:null}};SMC_COMMON.vars.method.getIsLoginStore=async function(){if(SMC_COMMON.vars.data.isLoginStore===null)try{const domain=SMC_COMMON.context.method.getStoreUrl();const res=await fetch(domain+'/customer/section/load/?sections=customer',{method:'GET',credentials:"include"});const data=await res.json();if((data.customer)&&(data.customer.fullname))SMC_COMMON.vars.data.isLoginStore=true;else SMC_COMMON.vars.data.isLoginStore=false;console.log('fetch');}catch(err){console.log('catch',err);}return SMC_COMMON.vars.data.isLoginStore;};SMC_COMMON.vars.method.getIsInsideUser=async function(){if(SMC_COMMON.vars.data.isInsideUser===null)try{const res=await fetch('/sites/default/files/php/cdn_header.php',{method:'GET',credentials:"include"});const data=await res.text();if(data.length<=0)SMC_COMMON.vars.data.isInsideUser=true;else SMC_COMMON.vars.data.isInsideUser=false;}catch(err){console.log('catch',err);}return SMC_COMMON.vars.data.isInsideUser;};;
var stuckHeaderHeight=0,SMC_COMMON=SMC_COMMON||{};SMC_COMMON.tools={};function disablePageScrolling(){var scrollbarWidth=window.innerWidth-document.documentElement.clientWidth;jQuery('html, body, .hs-container').addClass('noscroll');jQuery('body, #backtotop').css('margin-right',scrollbarWidth+'px');jQuery('#sticky-subnav.navbar-fixed, .header-main.gv-sticky-menu.stuck, .header-main.gv-sticky-menu.front-page').css('padding-right',scrollbarWidth+'px');}function enablePageScrolling(){jQuery('html, body, .hs-container').removeClass('noscroll');jQuery('body, #backtotop').css('margin-right','0px');jQuery('#sticky-subnav.navbar-fixed, .header-main.gv-sticky-menu.stuck, .header-main.gv-sticky-menu.front-page').css('padding-right','');}function refreshScrollspy(){if(jQuery("#sticky-subnav").length)jQuery('body').scrollspy('refresh');}function openSpecPage(productType,language,sku,specUrl){var hostname="https://entweb.supermicro.com",url=hostname+"/"+language+specUrl;if(productType=='motherboards')url=hostname+"/"+language+"/products/motherboard/"+sku;window.open(url,'smc-spec');}function scrollToAnchor(anchor,animateTime){var $stickyNav=jQuery("#sticky-subnav"),stickyHeaderHeight=0;if($stickyNav.length)stickyHeaderHeight+=$stickyNav.outerHeight();else stickyHeaderHeight+=jQuery("#header").outerHeight();var $anchorBlock=jQuery(anchor);if($anchorBlock.length<=0)return;var anchorPosition=$anchorBlock.offset().top-stickyHeaderHeight;jQuery('html, body').animate({scrollTop:anchorPosition},animateTime);};document.addEventListener("DOMContentLoaded",function(){var div,n,v=document.getElementsByClassName("youtube-thumbnail");for(n=0;n<v.length;n++){loadVideoThumb(v[n]);if(typeof v[n].dataset.id==="undefined")v[n].addEventListener('click',function(){$thumbnail=jQuery(this);$iframe=$thumbnail.next('.videowrapper').find('iframe');$iframe.removeClass('lazy');$iframe.attr('allow',"autoplay; fullscreen");var videoUrl=$iframe.attr('data-src');videoUrl=videoUrl.replace('autoplay=0','autoplay=1');$iframe.attr('src',videoUrl);setTimeout(function(){$thumbnail.hide();$thumbnail.next('.videowrapper').show();},200);});else v[n].addEventListener('click',function(){loadAndPlayVideo('https://www.youtube.com/embed/'+this.dataset.id+'?autoplay=1&amp;start=0&amp;rel=0&amp;loop=1&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1');});};var f=document.getElementsByClassName("video-embed-field-launch-modal");for(n=0;n<f.length;n++)f[n].innerHTML=f[n].innerHTML+'<div class="play"></div>';});function loadVideoThumb($youtubeVideo){var id=$youtubeVideo.dataset.id,videoThumb=$youtubeVideo.dataset.thumb,play='<div class="play"></div>',thumb='';if(id!==undefined)thumb='<img data-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" class="lazy">'.replace("ID",id);if(videoThumb!==undefined)thumb='<img data-src="'+videoThumb+'" class="lazy">';if(thumb!='')$youtubeVideo.innerHTML=thumb+play;}function loadAndPlayVideo(videoSrc){var $iframe=jQuery(".videowrapper iframe");if($iframe.length){$iframe.attr('allow',"autoplay; fullscreen");$iframe.attr('src',videoSrc);}}function getParameterByName(name){return window.location.search.match(new RegExp('(?:[\?\&]'+name+'=)([^&]+)'));};(function($){"use strict";jQuery(document).ready(function(){var $stickyNav=$("#sticky-subnav");$('body').append("<div id='backtotop' class='lazy' data-bg='https://www.supermicro.com/sites/default/files/icons/backtotop.png'></div>");$(window).scroll(function(){if($(this).scrollTop()>100)$('#backtotop').fadeIn();else $('#backtotop').fadeOut();});$('#backtotop').click(function(){$("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup",function(){$('html, body').stop();});$('html,body').animate({scrollTop:0},1200,'easeOutQuart',function(){$("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");});return false;});$("select").each(function(){$(this).val($(this).find('option[selected]').val());});function scrollToAnchorOnLoad(){var htmlEncode=function(str){var temp=document.createElement('div');temp.textContent=str;return temp.innerHTML;},pageHash=htmlEncode(window.location.hash);if(pageHash=='#PUR')pageHash='#for-suppliers';if(pageHash)scrollToAnchor(pageHash,600);};jQuery(document).on('click','a[href^="#"][smooth]',function(event){event.preventDefault();if($(this).parents('.subnav.navbar-mobile').length>0){var $obj=this;setTimeout(function(){scrollToAnchor(jQuery.attr($obj,'href'),600);},300);}else scrollToAnchor(jQuery.attr(this,'href'),600);});if($('.gv-sticky-menu').length>0)if($stickyNav.length==0)var sticky=new Waypoint.Sticky({element:$('.gv-sticky-menu')[0]});if($stickyNav.length){var subnavOffset=$stickyNav.offset().top;jQuery(window).scroll(function(){var scrollTop=jQuery(window).scrollTop(),distance=(subnavOffset-scrollTop);if(distance<0){$stickyNav.addClass('navbar-fixed');$stickyNav.css('top',"0px");if(!jQuery('#page-title-sticky-header').length){var pageTitle=$.trim($('.banner-title').text());if(pageTitle!=''){$stickyNav.find('.container').prepend("<div class='bb-container' id='page-title-sticky-header'><div>"+pageTitle+"</div></div>");var english=/^[A-Za-z0-9®]*$/;if(pageTitle.length>15||!english.test(pageTitle))jQuery('#page-title-sticky-header').addClass('long-title');}};$('#content').css('margin-top',$stickyNav.outerHeight());}else{$stickyNav.removeClass('navbar-fixed');$stickyNav.css('top','');$('#content').css('margin-top',0);}});if($('.nav-sub-tabs').length>0){$('.nav-sub-tabs').find('li:first-child').addClass('active');var $stickyParentNav;$stickyParentNav=$('#sticky-subnav .nav.nav-tabs li.active');$('body').on('activate.bs.scrollspy',function(){$stickyParentNav.addClass('active');});};var initMobileStickyNav=function(){var ele={};ele.mainNav=$stickyNav.find('.nav-tabs');ele.subNav=$stickyNav.find('.nav-sub-tabs');var setInitLayout=function(){var setLayout=function($list){if($list.find('li.active').length<=0)$list.addClass('initless');else $list.removeClass('initless');};setLayout(ele.mainNav);setLayout(ele.subNav);},setLayoutType=function(showType){if(showType=='more'){ele.showMore.hide();ele.showLess.show();if((ele.subNav.length>0)&&(ele.subNav.is(":visible"))){ele.subNav.removeClass('less');return;};ele.mainNav.removeClass('less');}else{ele.showMore.show();ele.showLess.hide();if((ele.subNav.length>0)&&(ele.subNav.is(":visible"))){ele.subNav.addClass('less');return;};ele.mainNav.addClass('less');}},checkMobile=function(){setLayoutType('less');if(window.matchMedia('(max-width: 1199px)').matches)$stickyNav.addClass('navbar-mobile');else $stickyNav.removeClass('navbar-mobile');},init=function(){ele.mainNav.addClass('less');ele.subNav.addClass('less');ele.showMore=$('<div class="slide-control slide-control-down js-slide-nav-down"><i class="fa fa-chevron-down"></i></div>');ele.showLess=$('<div class="slide-control slide-control-up js-slide-nav-up"><i class="fa fa-chevron-up"></i></div>');$stickyNav.append(ele.showMore).append(ele.showLess);$stickyNav.find('li a').on('click',function(){setLayoutType('less');});ele.showMore.on('click',function(){setLayoutType('more');});ele.showLess.on('click',function(){setLayoutType('less');});$('body').on('activate.bs.scrollspy',function(){setInitLayout();});$(window).resize(function(){checkMobile();});checkMobile();setInitLayout();}();}();jQuery('body').scrollspy({target:'#sticky-subnav',offset:Math.round($(window).height()/3)});$(window).resize(function(){setTimeout(function(){refreshScrollspy();},500);});};jQuery(window).scroll(function(){if(stuckHeaderHeight==0&&jQuery(".gv-sticky-menu.stuck").length)stuckHeaderHeight=jQuery(".gv-sticky-menu.stuck").outerHeight(true);});function adjustLangSelect(){var lg=['ko','es','fr','it','pt-pt','ru','vi','th','id','ms','hi','nl'],arrayRemove=function(arr,value){return arr.filter(function(ele){return ele!=value;});},pathArray=window.location.pathname.split('/');if(pathArray.length>=0){if(pathArray[pathArray.length-1].toLowerCase()=='ceo-letter')lg=arrayRemove(lg,'ko');if(pathArray[pathArray.length-1].toLowerCase()=='ceo-3rdpartysecurity-update'){lg=arrayRemove(lg,'ko');lg=arrayRemove(lg,'es');};if(pathArray[pathArray.length-1].toLowerCase()=='supermicro-business-update-5-17-19'){lg=arrayRemove(lg,'ko');lg=arrayRemove(lg,'es');};if((pathArray.length>=2)&&(pathArray[pathArray.length-2].toLowerCase()=='pressreleases'))return;};for(var i=0;i<lg.length;i++)lg[i]='.lang-dropdown-select-element option[value='+lg[i]+']';$(lg.join(',')).remove();};adjustLangSelect();function setCopyright(){var $ele=$('#footer .copyright-year');if($ele.length<=0)return;$ele.replaceWith(new Date().getFullYear());};setCopyright();function pageLoadSetting(){setTimeout(function(){scrollToAnchorOnLoad();},500);var recTimes=0,tabTimer=setInterval(function(){recTimes+=1;refreshScrollspy();if(recTimes==5)clearInterval(tabTimer);},2e3);};pageLoadSetting();$(window).resize(function(){if(window.matchMedia('(min-width: 991px)').matches){$('.mobile-style-tab').show();$('.product-type-tab').show();$('.portfolio-filter.filtertab').show();$('html, body').css('overflow','auto');$('.sub-menu.show-on-mobile').addClass('hide-on-desktop').removeClass('show-on-mobile');$('#search-sku-form').show();}else{if($('.gva-navigation').hasClass('show-view')){$('html, body').css('overflow','hidden');$('#search-sku-form').hide();};if(jQuery.trim(jQuery('.selected-product-family li.active a').text())==""){jQuery('.selected-product-family').hide();jQuery('.mobile-style-tab').show();};$('.sub-menu.hide-on-desktop').addClass('show-on-mobile').removeClass('hide-on-desktop');}});});})(jQuery);;
(function($,Drupal,debounce){const cache={right:0,left:0,bottom:0,top:0};const cssVarPrefix='--drupal-displace-offset';const documentStyle=document.documentElement.style;const offsetKeys=Object.keys(cache);const offsetProps={};offsetKeys.forEach((edge)=>{offsetProps[edge]={enumerable:true,get(){return cache[edge];},set(value){if(value!==cache[edge])documentStyle.setProperty(`${cssVarPrefix}-${edge}`,`${value}px`);cache[edge]=value;}};});const offsets=Object.seal(Object.defineProperties({},offsetProps));function getRawOffset(el,edge){const $el=$(el);const documentElement=document.documentElement;let displacement=0;const horizontal=edge==='left'||edge==='right';let placement=$el.offset()[horizontal?'left':'top'];placement-=window[`scroll${horizontal?'X':'Y'}`]||document.documentElement[`scroll${horizontal?'Left':'Top'}`]||0;switch(edge){case 'top':displacement=placement+$el.outerHeight();break;case 'left':displacement=placement+$el.outerWidth();break;case 'bottom':displacement=documentElement.clientHeight-placement;break;case 'right':displacement=documentElement.clientWidth-placement;break;default:displacement=0;}return displacement;}function calculateOffset(edge){let edgeOffset=0;const displacingElements=document.querySelectorAll(`[data-offset-${edge}]`);const n=displacingElements.length;for(let i=0;i<n;i++){const el=displacingElements[i];if(el.style.display==='none')continue;let displacement=parseInt(el.getAttribute(`data-offset-${edge}`),10);if(isNaN(displacement))displacement=getRawOffset(el,edge);edgeOffset=Math.max(edgeOffset,displacement);}return edgeOffset;}function displace(broadcast=true){const newOffsets={};offsetKeys.forEach((edge)=>{newOffsets[edge]=calculateOffset(edge);});offsetKeys.forEach((edge)=>{offsets[edge]=newOffsets[edge];});if(broadcast)$(document).trigger('drupalViewportOffsetChange',offsets);return offsets;}Drupal.behaviors.drupalDisplace={attach(){if(this.displaceProcessed)return;this.displaceProcessed=true;$(window).on('resize.drupalDisplace',debounce(displace,200));}};Drupal.displace=displace;Object.defineProperty(Drupal.displace,'offsets',{value:offsets,writable:false});Drupal.displace.calculateOffset=calculateOffset;})(jQuery,Drupal,Drupal.debounce);;
(($,Drupal,{isTabbable})=>{$.extend($.expr[':'],{tabbable(element){Drupal.deprecationError({message:'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 11.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'});return isTabbable(element);}});})(jQuery,Drupal,window.tabbable);;
(($)=>{let cachedScrollbarWidth=null;const {max,abs}=Math;const regexHorizontal=/left|center|right/;const regexVertical=/top|center|bottom/;const regexOffset=/[+-]\d+(\.[\d]+)?%?/;const regexPosition=/^\w+/;const regexPercent=/%$/;const _position=$.fn.position;function getOffsets(offsets,width,height){return [parseFloat(offsets[0])*(regexPercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(regexPercent.test(offsets[1])?height/100:1)];}function parseCss(element,property){return parseInt($.css(element,property),10)||0;}function getDimensions(elem){const raw=elem[0];if(raw.nodeType===9)return {width:elem.width(),height:elem.height(),offset:{top:0,left:0}};if($.isWindow(raw))return {width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};if(raw.preventDefault)return {width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};return {width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}const collisions={fit:{left(position,data){const {within}=data;const withinOffset=within.isWindow?within.scrollLeft:within.offset.left;const outerWidth=within.width;const collisionPosLeft=position.left-data.collisionPosition.marginLeft;const overLeft=withinOffset-collisionPosLeft;const overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset;let newOverRight;if(data.collisionWidth>outerWidth)if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0)position.left=withinOffset;else if(overLeft>overRight)position.left=withinOffset+outerWidth-data.collisionWidth;else position.left=withinOffset;else if(overLeft>0)position.left+=overLeft;else if(overRight>0)position.left-=overRight;else position.left=max(position.left-collisionPosLeft,position.left);},top(position,data){const {within}=data;const withinOffset=within.isWindow?within.scrollTop:within.offset.top;const outerHeight=data.within.height;const collisionPosTop=position.top-data.collisionPosition.marginTop;const overTop=withinOffset-collisionPosTop;const overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset;let newOverBottom;if(data.collisionHeight>outerHeight)if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0)position.top=withinOffset;else if(overTop>overBottom)position.top=withinOffset+outerHeight-data.collisionHeight;else position.top=withinOffset;else if(overTop>0)position.top+=overTop;else if(overBottom>0)position.top-=overBottom;else position.top=max(position.top-collisionPosTop,position.top);}},flip:{left(position,data){const {within}=data;const withinOffset=within.offset.left+within.scrollLeft;const outerWidth=within.width;const offsetLeft=within.isWindow?within.scrollLeft:within.offset.left;const collisionPosLeft=position.left-data.collisionPosition.marginLeft;const overLeft=collisionPosLeft-offsetLeft;const overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft;const myOffset=data.my[0]==='left'?-data.elemWidth:data.my[0]==='right'?data.elemWidth:0;const atOffset=data.at[0]==='left'?data.targetWidth:data.at[0]==='right'?-data.targetWidth:0;const offset=-2*data.offset[0];let newOverRight;let newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft))position.left+=myOffset+atOffset+offset;}else{if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight)position.left+=myOffset+atOffset+offset;}}},top(position,data){const {within}=data;const withinOffset=within.offset.top+within.scrollTop;const outerHeight=within.height;const offsetTop=within.isWindow?within.scrollTop:within.offset.top;const collisionPosTop=position.top-data.collisionPosition.marginTop;const overTop=collisionPosTop-offsetTop;const overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop;const top=data.my[1]==='top';const myOffset=top?-data.elemHeight:data.my[1]==='bottom'?data.elemHeight:0;const atOffset=data.at[1]==='top'?data.targetHeight:data.at[1]==='bottom'?-data.targetHeight:0;const offset=-2*data.offset[1];let newOverTop;let newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop))position.top+=myOffset+atOffset+offset;}else{if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom)position.top+=myOffset+atOffset+offset;}}}},flipfit:{left(...args){collisions.flip.left.apply(this,args);collisions.fit.left.apply(this,args);},top(...args){collisions.flip.top.apply(this,args);collisions.fit.top.apply(this,args);}}};$.position={scrollbarWidth(){if(cachedScrollbarWidth!==undefined)return cachedScrollbarWidth;const div=$('<div '+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>");const innerDiv=div.children()[0];$('body').append(div);const w1=innerDiv.offsetWidth;div.css('overflow','scroll');let w2=innerDiv.offsetWidth;if(w1===w2)w2=div[0].clientWidth;div.remove();cachedScrollbarWidth=w1-w2;return cachedScrollbarWidth;},getScrollInfo(within){const overflowX=within.isWindow||within.isDocument?'':within.element.css('overflow-x');const overflowY=within.isWindow||within.isDocument?'':within.element.css('overflow-y');const hasOverflowX=overflowX==='scroll'||(overflowX==='auto'&&within.width<within.element[0].scrollWidth);const hasOverflowY=overflowY==='scroll'||(overflowY==='auto'&&within.height<within.element[0].scrollHeight);return {width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo(element){const withinElement=$(element||window);const isWindow=$.isWindow(withinElement[0]);const isDocument=!!withinElement[0]&&withinElement[0].nodeType===9;const hasOffset=!isWindow&&!isDocument;return {element:withinElement,isWindow,isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of)return _position.apply(this,arguments);options=$.extend({},options);const within=$.position.getWithinInfo(options.within);const scrollInfo=$.position.getScrollInfo(within);const collision=(options.collision||'flip').split(' ');const offsets={};const target=typeof options.of==='string'?$(document).find(options.of):$(options.of);const dimensions=getDimensions(target);const targetWidth=dimensions.width;const targetHeight=dimensions.height;const targetOffset=dimensions.offset;if(target[0].preventDefault)options.at='left top';const basePosition=$.extend({},targetOffset);$.each(['my','at'],function(){let pos=(options[this]||'').split(' ');if(pos.length===1)pos=regexHorizontal.test(pos[0])?pos.concat(['center']):regexVertical.test(pos[0])?['center'].concat(pos):['center','center'];pos[0]=regexHorizontal.test(pos[0])?pos[0]:'center';pos[1]=regexVertical.test(pos[1])?pos[1]:'center';const horizontalOffset=regexOffset.exec(pos[0]);const verticalOffset=regexOffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[regexPosition.exec(pos[0])[0],regexPosition.exec(pos[1])[0]];});if(collision.length===1)collision[1]=collision[0];if(options.at[0]==='right')basePosition.left+=targetWidth;else{if(options.at[0]==='center')basePosition.left+=targetWidth/2;}if(options.at[1]==='bottom')basePosition.top+=targetHeight;else{if(options.at[1]==='center')basePosition.top+=targetHeight/2;}const atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){let using;const elem=$(this);const elemWidth=elem.outerWidth();const elemHeight=elem.outerHeight();const marginLeft=parseCss(this,'marginLeft');const marginTop=parseCss(this,'marginTop');const collisionWidth=elemWidth+marginLeft+parseCss(this,'marginRight')+scrollInfo.width;const collisionHeight=elemHeight+marginTop+parseCss(this,'marginBottom')+scrollInfo.height;const position=$.extend({},basePosition);const myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==='right')position.left-=elemWidth;else{if(options.my[0]==='center')position.left-=elemWidth/2;}if(options.my[1]==='bottom')position.top-=elemHeight;else{if(options.my[1]==='center')position.top-=elemHeight/2;}position.left+=myOffset[0];position.top+=myOffset[1];const collisionPosition={marginLeft,marginTop};$.each(['left','top'],function(i,dir){if(collisions[collision[i]])collisions[collision[i]][dir](position,{targetWidth,targetHeight,elemWidth,elemHeight,collisionPosition,collisionWidth,collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within,elem});});if(options.using)using=function(props){const left=targetOffset.left-position.left;const right=left+targetWidth-elemWidth;const top=targetOffset.top-position.top;const bottom=top+targetHeight-elemHeight;const feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?'left':left>0?'right':'center',vertical:bottom<0?'top':top>0?'bottom':'middle'};if(targetWidth<elemWidth&&abs(left+right)<targetWidth)feedback.horizontal='center';if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight)feedback.vertical='middle';if(max(abs(left),abs(right))>max(abs(top),abs(bottom)))feedback.important='horizontal';else feedback.important='vertical';options.using.call(this,props,feedback);};elem.offset($.extend(position,{using}));});};if(!$.hasOwnProperty('ui'))$.ui={};$.ui.position=collisions;})(jQuery);;
(function($,Drupal,drupalSettings){drupalSettings.dialog={autoOpen:true,dialogClass:'',buttonClass:'button',buttonPrimaryClass:'button--primary',close(event){Drupal.dialog(event.target).close();Drupal.detachBehaviors(event.target,null,'unload');}};Drupal.dialog=function(element,options){let undef;const $element=$(element);const dialog={open:false,returnValue:undef};function openDialog(settings){settings=$.extend({},drupalSettings.dialog,options,settings);$(window).trigger('dialog:beforecreate',[dialog,$element,settings]);$element.dialog(settings);dialog.open=true;$(window).trigger('dialog:aftercreate',[dialog,$element,settings]);}function closeDialog(value){$(window).trigger('dialog:beforeclose',[dialog,$element]);$element.dialog('close');dialog.returnValue=value;dialog.open=false;$(window).trigger('dialog:afterclose',[dialog,$element]);}dialog.show=()=>{openDialog({modal:false});};dialog.showModal=()=>{openDialog({modal:true});};dialog.close=closeDialog;return dialog;};})(jQuery,Drupal,drupalSettings);;
(function($,Drupal,drupalSettings,debounce,displace){drupalSettings.dialog=$.extend({autoResize:true,maxHeight:'95%'},drupalSettings.dialog);function resetPosition(options){const offsets=displace.offsets;const left=offsets.left-offsets.right;const top=offsets.top-offsets.bottom;const leftString=`${(left>0?'+':'-')+Math.abs(Math.round(left/2))}px`;const topString=`${(top>0?'+':'-')+Math.abs(Math.round(top/2))}px`;options.position={my:`center${left!==0?leftString:''} center${top!==0?topString:''}`,of:window};return options;}function resetSize(event){const positionOptions=['width','height','minWidth','minHeight','maxHeight','maxWidth','position'];let adjustedOptions={};let windowHeight=$(window).height();let option;let optionValue;let adjustedValue;for(let n=0;n<positionOptions.length;n++){option=positionOptions[n];optionValue=event.data.settings[option];if(optionValue)if(typeof optionValue==='string'&&/%$/.test(optionValue)&&/height/i.test(option)){windowHeight-=displace.offsets.top+displace.offsets.bottom;adjustedValue=parseInt(0.01*parseInt(optionValue,10)*windowHeight,10);if(option==='height'&&event.data.$element.parent().outerHeight()<adjustedValue)adjustedValue='auto';adjustedOptions[option]=adjustedValue;}}if(!event.data.settings.modal)adjustedOptions=resetPosition(adjustedOptions);event.data.$element.dialog('option',adjustedOptions).trigger('dialogContentResize');}$(window).on({'dialog:aftercreate':function(event,dialog,$element,settings){const autoResize=debounce(resetSize,20);const eventData={settings,$element};if(settings.autoResize===true||settings.autoResize==='true'){$element.dialog('option',{resizable:false,draggable:false}).dialog('widget').css('position','fixed');$(window).on('resize.dialogResize scroll.dialogResize',eventData,autoResize).trigger('resize.dialogResize');$(document).on('drupalViewportOffsetChange.dialogResize',eventData,autoResize);}},'dialog:beforeclose':function(event,dialog,$element){$(window).off('.dialogResize');$(document).off('.dialogResize');}});})(jQuery,Drupal,drupalSettings,Drupal.debounce,Drupal.displace);;
(function($,{tabbable,isTabbable}){$.widget('ui.dialog',$.ui.dialog,{options:{buttonClass:'button',buttonPrimaryClass:'button--primary'},_createButtons(){const opts=this.options;let primaryIndex;let index;const il=opts.buttons.length;for(index=0;index<il;index++)if(opts.buttons[index].primary&&opts.buttons[index].primary===true){primaryIndex=index;delete opts.buttons[index].primary;break;}this._super();const $buttons=this.uiButtonSet.children().addClass(opts.buttonClass);if(typeof primaryIndex!=='undefined')$buttons.eq(index).addClass(opts.buttonPrimaryClass);},_focusTabbable(){let hasFocus=this._focusedElement?this._focusedElement.get(0):null;if(!hasFocus)hasFocus=this.element.find('[autofocus]').get(0);if(!hasFocus){const $elements=[this.element,this.uiDialogButtonPane];for(let i=0;i<$elements.length;i++){const element=$elements[i].get(0);if(element){const elementTabbable=tabbable(element);hasFocus=elementTabbable.length?elementTabbable[0]:null;}if(hasFocus)break;}}if(!hasFocus){const closeBtn=this.uiDialogTitlebarClose.get(0);hasFocus=closeBtn&&isTabbable(closeBtn)?closeBtn:null;}if(!hasFocus)hasFocus=this.uiDialog.get(0);$(hasFocus).eq(0).trigger('focus');}});})(jQuery,window.tabbable);;
(($)=>{$.widget('ui.dialog',$.ui.dialog,{_allowInteraction(event){return event.target.classList.contains('ck')||this._super(event);}});})(jQuery);;
(function($,Drupal,{focusable}){Drupal.behaviors.dialog={attach(context,settings){const $context=$(context);if(!$('#drupal-modal').length)$('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');const $dialog=$context.closest('.ui-dialog-content');if($dialog.length){if($dialog.dialog('option','drupalAutoButtons'))$dialog.trigger('dialogButtonsChange');$dialog.dialog('widget').trigger('focus');}const originalClose=settings.dialog.close;settings.dialog.close=function(event,...args){originalClose.apply(settings.dialog,[event,...args]);const $element=$(event.target);const ajaxContainer=$element.data('uiDialog')?$element.data('uiDialog').opener.closest('[data-drupal-ajax-container]'):[];if(ajaxContainer.length&&(document.activeElement===document.body||$(document.activeElement).not(':visible'))){const focusableChildren=focusable(ajaxContainer[0]);if(focusableChildren.length>0)setTimeout(()=>{focusableChildren[0].focus();},0);}$(event.target).remove();};},prepareDialogButtons($dialog){const buttons=[];const $buttons=$dialog.find('.form-actions input[type=submit], .form-actions a.button');$buttons.each(function(){const $originalButton=$(this).css({display:'none'});buttons.push({text:$originalButton.html()||$originalButton.attr('value'),class:$originalButton.attr('class'),click(e){if($originalButton.is('a'))$originalButton[0].click();else{$originalButton.trigger('mousedown').trigger('mouseup').trigger('click');e.preventDefault();}}});});return buttons;}};Drupal.AjaxCommands.prototype.openDialog=function(ajax,response,status){if(!response.selector)return false;let $dialog=$(response.selector);if(!$dialog.length)$dialog=$(`<div id="${response.selector.replace(/^#/,'')}" class="ui-front"></div>`).appendTo('body');if(!ajax.wrapper)ajax.wrapper=$dialog.attr('id');response.command='insert';response.method='html';ajax.commands.insert(ajax,response,status);if(!response.dialogOptions.buttons){response.dialogOptions.drupalAutoButtons=true;response.dialogOptions.buttons=Drupal.behaviors.dialog.prepareDialogButtons($dialog);}$dialog.on('dialogButtonsChange',()=>{const buttons=Drupal.behaviors.dialog.prepareDialogButtons($dialog);$dialog.dialog('option','buttons',buttons);});response.dialogOptions=response.dialogOptions||{};const dialog=Drupal.dialog($dialog.get(0),response.dialogOptions);if(response.dialogOptions.modal)dialog.showModal();else dialog.show();$dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');};Drupal.AjaxCommands.prototype.closeDialog=function(ajax,response,status){const $dialog=$(response.selector);if($dialog.length){Drupal.dialog($dialog.get(0)).close();if(!response.persist)$dialog.remove();}$dialog.off('dialogButtonsChange');};Drupal.AjaxCommands.prototype.setDialogOption=function(ajax,response,status){const $dialog=$(response.selector);if($dialog.length)$dialog.dialog('option',response.optionName,response.optionValue);};$(window).on('dialog:aftercreate',(e,dialog,$element,settings)=>{$element.on('click.dialog','.dialog-cancel',(e)=>{dialog.close('cancel');e.preventDefault();e.stopPropagation();});});$(window).on('dialog:beforeclose',(e,dialog,$element)=>{$element.off('.dialog');});})(jQuery,Drupal,window.tabbable);;
(function($,Drupal,once){'use strict';if($.ui&&$.ui.dialog&&$.ui.dialog.prototype._allowInteraction){var _allowInteraction=$.ui.dialog.prototype._allowInteraction;$.ui.dialog.prototype._allowInteraction=function(event){if($(event.target).closest('.cke_dialog').length)return true;return _allowInteraction.apply(this,arguments);};};Drupal.behaviors.webformDialogEvents={attach:function(){if(once('webform-dialog','html').length)$(window).on({'dialog:aftercreate':function(event,dialog,$element,settings){setTimeout(function(){var hasFocus=$element.find('[autofocus]:tabbable');if(!hasFocus.length)hasFocus=$element.find(':input:tabbable:not(:button)');if(!hasFocus.length)hasFocus=$element.parent().find('.ui-dialog-titlebar-close');hasFocus.eq(0).trigger('focus');});}});}};})(jQuery,Drupal,once);;
(function($,Drupal,drupalSettings,once){'use strict';Drupal.webform=Drupal.webform||{};Drupal.webform.dialog=Drupal.webform.dialog||{};Drupal.webform.dialog.options=Drupal.webform.dialog.options||{};Drupal.webformOpenDialog=function(url,type){var $div=$('<div><a href="'+url+'" class="webform-dialog '+type+'"></a></div>');Drupal.behaviors.webformDialog.attach($div.get(0));$div.find('a').trigger('click');};Drupal.behaviors.webformDialog={attach:function(context){$(once('webform-dialog','a.webform-dialog',context)).each(function(){var $a=$(this),options=$.extend({},Drupal.webform.dialog.options);if($a.attr('class').match(/webform-dialog-([a-z0-9_]+)/)){var dialogOptionsName=RegExp.$1;if(drupalSettings.webform.dialog.options[dialogOptionsName]){options=drupalSettings.webform.dialog.options[dialogOptionsName];delete options.title;}};if($(this).data('dialog-options'))$.extend(options,$(this).data('dialog-options'));var href=$a.attr('href');if(href.indexOf('?source_entity_type=ENTITY_TYPE&source_entity_id=ENTITY_ID')!==-1){if(drupalSettings.webform.dialog.entity_type&&drupalSettings.webform.dialog.entity_id){href=href.replace('ENTITY_TYPE',encodeURIComponent(drupalSettings.webform.dialog.entity_type));href=href.replace('ENTITY_ID',encodeURIComponent(drupalSettings.webform.dialog.entity_id));}else href=href.replace('?source_entity_type=ENTITY_TYPE&source_entity_id=ENTITY_ID','');$a.attr('href',href);};href+=(href.indexOf('?')===-1?'?':'&')+'_webform_dialog=1';var element_settings={};element_settings.progress={type:'fullscreen'};element_settings.url=href;element_settings.event='click';element_settings.dialogType=$a.data('dialog-type')||'modal';element_settings.dialog=options;element_settings.element=this;element_settings.error=function error(xmlhttp,uri){if(xmlhttp.status===403)window.location.replace(href.split('?')[0]);};Drupal.ajax(element_settings);});}};})(jQuery,Drupal,drupalSettings,once);;
const dl=drupalSettings.gtm.settings.data_layer||'dataLayer';window[dl]=window[dl]||[];(function(drupalSettings){const config=drupalSettings.gtm;window[dl].push({'gtm.start':new Date().getTime(),event:'gtm.js'});const gtmSettings=config.settings;if(gtmSettings.include_classes===true)window[dl].push({'gtm.allowlist':gtmSettings.allowlist_classes??[],'gtm.blocklist':gtmSettings.blocklist_classes??[]});config.tagIds.forEach(function(tagId){const script=document.createElement('script');script.async=true;const dLink=dl!='dataLayer'?'&l='+dl:'';script.src='https://www.googletagmanager.com/gtm.js?id='+tagId+dLink;script.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(script);});})(drupalSettings);;
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('set','developer_id.dMDhkMT',true);(function(drupalSettings){const config=drupalSettings.gtag;if(config.tagId.length!==0){const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+config.tagId;script.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(script);}const additionalConfigInfo=config.additionalConfigInfo||[];if(additionalConfigInfo.length===0)gtag('config',config.tagId);else gtag('config',config.tagId,additionalConfigInfo);const otherIds=config.otherIds||[];otherIds.forEach((id)=>gtag('config',id));const events=config.events||[];events.forEach((event)=>gtag('event',event.name,event.data));})(drupalSettings);;
(function(Drupal){Drupal.AjaxCommands.prototype.gtagEvent=function(ajax,response){gtag('event',response.event_name,response.data);};})(Drupal);;
(function($,Drupal,drupalSettings,once){'use strict';Drupal.behaviors.initColorbox={attach:function(context,settings){if(!$.isFunction($.colorbox)||typeof settings.colorbox==='undefined')return;if(settings.colorbox.mobiledetect&&window.matchMedia){var mq=window.matchMedia('(max-device-width: '+settings.colorbox.mobiledevicewidth+')');if(mq.matches){$.colorbox.remove();return;}};settings.colorbox.rel=function(){return $(this).data('colorbox-gallery');};$(once('init-colorbox','.colorbox',context)).each(function(){var extendParams={photo:true},title=$(this).attr('title');if(title)extendParams.title=Drupal.colorbox.sanitizeMarkup(title);$(this).colorbox($.extend({},settings.colorbox,extendParams));});$('.colorbox',context).colorbox({onComplete:function(e){var focus=$('#cboxContent').find('#cboxPrevious').css('display')!=='none'?$('#cboxContent').find('#cboxPrevious'):$('#cboxContent').find('#cboxClose');focus.focus();$('#cboxContent').on('keydown',function(e){var keyCode=e.keyCode||e.which,firstElement=$('#cboxContent').find('#cboxPrevious').last().is(':focus'),lastElement=$('#cboxContent').find('#cboxClose').first().is(':focus');if(keyCode===9&&!e.shiftKey&&lastElement){e.preventDefault();$('#cboxContent').find('#cboxPrevious').first().focus();}else{if(keyCode===9&&e.shiftKey&&firstElement){e.preventDefault();$('#cboxContent').find('#cboxClose').first().focus();}}});}});}};if(!Drupal.hasOwnProperty('colorbox'))Drupal.colorbox={};Drupal.colorbox.sanitizeMarkup=function(markup){if(typeof DOMPurify!=='undefined'){var purifyConfig={ALLOWED_TAGS:['a','b','strong','i','em','u','cite','code','br'],ALLOWED_ATTR:['href','hreflang','title','target']};if(drupalSettings.hasOwnProperty('dompurify_custom_config'))purifyConfig=drupalSettings.dompurify_custom_config;return DOMPurify.sanitize(markup,purifyConfig);}else return Drupal.checkPlain(markup);};})(jQuery,Drupal,drupalSettings,once);;
(function($){Drupal.behaviors.initColorboxDefaultStyle={attach:function(context,settings){$(context).bind('cbox_complete',function(){if($('#cboxTitle:empty',context).length==false){$('#cboxLoadedContent img',context).bind('mouseover',function(){$('#cboxTitle',context).slideDown();});$('#cboxOverlay',context).bind('mouseover',function(){$('#cboxTitle',context).slideUp();});}else $('#cboxTitle',context).hide();});}};})(jQuery);;
!(function(){var e=new AddSearchClient("25a46de65b9e7e0c0ec2154d930d5460");e.setPaging(1,15,"relevance","desc"),e.setSearchOperator("and");var t=new AddSearchClient("25a46de65b9e7e0c0ec2154d930d5460");t.setPaging(1,10,"relevance","desc");var a=new AddSearchClient("25a46de65b9e7e0c0ec2154d930d5460");a.setPaging(1,5,"relevance","desc");var s={en:"25a46de65b9e7e0c0ec2154d930d5460",jp:"0ca408e2b43cf34847c7695f5a840bf1",zh_cn:"5d447be16615d87ca9cf031909f90548",zh_tw:"8246a6fbc1915bf06781d91c9469505b",de:"25a46de65b9e7e0c0ec2154d930d5460"},n='';function analyticsFunct(addsearchStatsPayload){if(typeof window.dataLayer!='undefined')try{window.dataLayer.push({event:'view_search_results',search_term:addsearchStatsPayload.keyword,num_results:addsearchStatsPayload.numberOfResults,search_or_click:addsearchStatsPayload.action});}catch(err){console.log('error:gtm');};if(typeof window.gtag!='undefined')try{window.gtag('event','view_search_results',{search_term:addsearchStatsPayload.keyword,num_results:addsearchStatsPayload.numberOfResults,search_or_click:addsearchStatsPayload.action});}catch(err){console.debug('error:gtag');}};if(typeof window.addsearchConfigurationShared==='undefined'){var nLang=window.location.toString().toLowerCase();n='en';if(nLang.indexOf('/zh_tw')>-1)n='zh_tw';else if(nLang.indexOf('/zh_cn')>-1)n='zh_cn';else if(nLang.indexOf('/ja')>-1)n='jp';else{if(nLang.indexOf('/de')>-1)n='de';}}else{if(null!=window.addsearchConfigurationShared.lang)n=window.addsearchConfigurationShared.lang;}(e=new AddSearchClient(s[n])),(t=new AddSearchClient(s[n])),(a=new AddSearchClient(s[n]));var i={matchAllQuery:(window.location.toString().toLowerCase().indexOf('/search')>-1)?true:false},autov=[{type:AddSearchUI.AUTOCOMPLETE_TYPE.SUGGESTIONS,client:a,jsonKey:"results"},{type:AddSearchUI.AUTOCOMPLETE_TYPE.SEARCH,client:t,jsonKey:"hits"}];i.analyticsCallback=function(res){var addsearchStatsPayload={keyword:res.keyword,numberOfResults:res.numberOfResults,action:res.action};analyticsFunct(addsearchStatsPayload);};if(n=='en')i.baseFilters={and:[{or:[{not:{category:"1xde"}}]},{or:[{not:{category:"1xnl_de"}}]},{or:[{not:{category:"1xnl_nl"}}]}]};else{if(n=='de'){i.baseFilters={and:[{or:[{not:{category:"1xen"}}]},{or:[{not:{category:"1xus_en"}}]},{or:[{not:{category:"1xnl_nl"}}]}]};window.searchResultsPageUrl='/de/search';}};if(n=='en'||n=='de'){if(Intl.DateTimeFormat().resolvedOptions().timeZone.indexOf("Europe/")!==-1)if(n=='en')i.baseFilters.and.push({or:[{not:{category:"1xus_en"}}]});else{if(n=='de')i.baseFilters.and.push({or:[{not:{category:"1xnl_de"}}]});}else i.baseFilters.and.push({or:[{not:{category:"1xnl_en"}}]});autov=[{type:AddSearchUI.AUTOCOMPLETE_TYPE.SUGGESTIONS,jsonKey:"results"},{type:AddSearchUI.AUTOCOMPLETE_TYPE.SEARCH,jsonKey:"hits"}];};window.searchResultsPageUrl&&(i.searchResultsPageUrl=window.searchResultsPageUrl);var c=new AddSearchUI(e,i);function d(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t);};e.addHierarchicalFacetSetting([{fields:["custom_fields.category","custom_fields.secondcategory","custom_fields.thirdcategory"],sortOrder:"COUNT_DESC_NAME_ASC"}]),c.registerHandlebarsHelper("documentContentReplace",function(e){if(null!=e)return e.replace(/© 2022 Copyright Super Micro Computer, Inc. All rights reserved |.*Copyright 2020|.*©/,"");}),document.getElementById("autocomplete-container")&&c.autocomplete({containerId:"autocomplete-container",template:'\n  <div class="addsearch-autocomplete">\n   {{#gt suggestions.length 0}}\n   <div class="adds-suggestions-main-wrapper">  \n    <h3 class="adds-title">Suggestions</h3>\n    <ul class="suggestions adds-suggestions-container">\n      {{#each ../suggestions}}\n        <li class="adds-suggestion" data-keyword="{{value}}" data-index="{{@index}}" {{#equals ../../activeSuggestionIndex @index}}class="active"{{/equals}}>\n          {{value}}\n        </li>\n      {{/each}}\n    </ul>\n   </div>\n  {{/gt}}\n  <div class="adds-hits-main-wrapper">\n    {{#gt searchResults.hits.length 0}}\n    {{keyword}}\n    <h3 class="adds-title results-title">Results</h3>\n <div class="showAllBtn">\n      <button class="btn all-results" onclick="window.showAllResultBtn()"><span>Show all results</span></button>\n    </div>\n     <div class="adds-hits-xtra-wrapper">\n        {{#each ../searchResults.hits}}\n        <a href="{{url}}" data-analytics-click="{{id}}"  class="adds-hit adds-search-results-link">\n        <div class="adds-hit-wrapper" {{#if style}} style="background-color:{{style.background_color}}"{{/if}}>\n<!--           <div class="adds-hit-top">\n               <div class="adds-main-image {{document_type}} {{#unless images.main}}noimage{{/unless}}"{{#if images.main}} style="background-image: url(data:image/jpeg;base64,{{images.main_b64}})"{{/if}}>\n                {{#if images.main}}<div class="adds-aspect"><img src="{{images.main}}" alt="{{title}}" /></div>\n                {{else if style.image_url}}<div class="adds-aspect"><img src="{{style.image_url}}" alt="{{title}}" /></div>{{/if}}    \n             </div>\n           </div> -->\n            <div class="adds-hit-bottom">\n                <h2 class="adds-hit-title" {{#if style}} style="color:{{style.text_color}}"{{/if}}>\n                    {{title}}\n                </h2>\n              <div class="adds-highlight" {{#if style}} style="color:{{style.text_color}}"{{/if}}>        \n                {{#if meta_description}} {{{meta_description}}} {{else}} {{{highlight}}}{{#not type "PROMOTED"}}&#8230;{{/not}} {{/if}}\n              </div>         \n            <div class="adds-url">{{url}}</div>\n        </div>\n        </div>\n        </a>\n        {{/each}}\n      </div>\n    {{/gt}} \n   </div>   \n  </div>\n',hideAutomatically:!1,sources:autov}),c.searchField({containerId:"searchfield-container",placeholder:"Keyword..",button:"Search",icon:!0,ignoreAutocomplete:false,searchAsYouType:false,template:'\n  <div class="addsearch-searchfield-container">\n    <form class="addsearch-searchfield" autocomplete="off" action="?" role="search">\n      <div class="search-field-wrapper">     \n        <input type="search" placeholder="{{placeholder}}" aria-label="Search field" class="{{#not icon false}}icon{{/not}} addsearch" />\n      </div>\n      {{#if button}}\n        <button type="button" aria-label="Search button" >{{button}}</button>\n      {{/if}}\n    </form>\n  </div>\n'}),c.searchField({containerId:"searchfield-container-secondary",placeholder:"Keyword..",button:"Search",icon:!0,ignoreAutocomplete:true,searchAsYouType:!!document.getElementById("searchresults-container"),template:'\n  <div class="addsearch-searchfield-container">\n    <form class="addsearch-searchfield" autocomplete="off" action="?" role="search">\n      <div class="search-field-wrapper">     \n        <input type="search" placeholder="{{placeholder}}" aria-label="Search field" class="{{#not icon false}}icon{{/not}} addsearch" />\n      </div>\n      {{#if button}}\n        <button type="button" aria-label="Search button" >{{button}}</button>\n      {{/if}}\n    </form>\n  </div>\n'});document.getElementById("sortby")&&c.sortBy({containerId:"sortby",options:[{label:"Relevance",sortBy:"relevance",order:"desc"},{label:"Title A-Z",sortBy:"custom_fields.customTitle",order:"asc"},{label:"Title Z-A",sortBy:"custom_fields.customTitle",order:"desc"}]}),document.getElementById("searchresults-container")&&c.searchResults({containerId:"searchresults-container",template:'\n   <div class="addsearch-searchresults">    \n    {{#if resultcount}}\n      {{> numberOfResultsTemplate }}\n    {{/if}}\n    <div class="adds-hits-main-wrapper">\n    {{#each hits}}\n    <a href="{{url}}" data-analytics-click="{{id}}" class="adds-search-results-link">\n      <div class="adds-hit{{#equals type "PROMOTED"}} promoted{{/equals}}">\n        <div class="adds-hit-wrapper" {{#if style}} style="background-color:{{style.background_color}}"{{/if}}>\n\x3c!--           <div class="adds-hit-top">\n               <div class="adds-main-image {{document_type}} {{#unless images.main}}noimage{{/unless}}" {{#if images.main}} style="background-image: url(data:image/jpeg;base64,{{images.main_b64}})"{{/if}}>\n                {{#if images.main}}<div class="adds-aspect"><img src="{{images.main}}" alt="{{title}}" /></div>\n                {{else if style.image_url}}<div class="adds-aspect"><img src="{{style.image_url}}" alt="{{title}}" /></div>{{/if}}    \n             </div>\n           </div> --\x3e\n            <div class="adds-hit-bottom">\n              <h2 class="adds-hit-title" {{#if style}} style="color:{{style.text_color}}"{{/if}}>\n                {{title}}\n              </h2>\n              <div class="adds-highlight" {{#if style}} style="color:{{style.text_color}}"{{/if}}>        \n                {{#if meta_description}} {{{meta_description}}} {{else}} {{{highlight}}}{{#not type "PROMOTED"}}&#8230;{{/not}} {{/if}}\n              </div>\n              <div class="adds-url">{{url}}</div>              \n            </div>\n          </div>\n        </div>\n      </a>\n    {{/each}}\n    </div>\n  </div>\n',template_resultcount:'\n  <div class="number-of-results">\n    {{#gt page 1}}Page {{../page}} of {{/gt}}\n    {{total_hits}}{{#equals total_hits 10000}}+{{/equals}} results for <em>{{keyword}}</em>\n  </div>\n'}),document.getElementById("selected-filters-container")&&c.activeFilters({containerId:"selected-filters-container"}),document.getElementById("facets-container-category")&&c.hierarchicalFacets({containerId:"facets-container-category",facetsFilter:function(e){var t=["Products","Specifications","Documents","Resource","News","Support","Others"];return (e.sort(function(e,a){return t.indexOf(e.value)-t.indexOf(a.value);}),e);},fields:["custom_fields.category","custom_fields.secondcategory","custom_fields.thirdcategory"]}),document.getElementById("pagination-container")&&c.pagination({containerId:"pagination-container"}),c.start(),document.querySelector("#autocomplete-container")&&(document.addEventListener("click",function(){return c.hideAutocomplete();}),document.querySelector("#autocomplete-container").addEventListener("click",function(e){return e.stopPropagation();}),document.querySelector("#searchfield-container").addEventListener("click",function(e){return e.stopPropagation();}),(window.showAllResultBtn=function(){document.querySelector(".addsearch-searchfield button").click();})),document.addEventListener("click",function(e){e.target&&(e.target.classList.contains("adds-open-sub-group-icon")||e.target.classList.contains("adds-filter-title")||e.target.classList.contains("adds-open-group-icon"))&&(e.target.classList.contains("adds-filter-title")&&d(e.target.parentElement,"adds-shrink"),(e.target.classList.contains("adds-open-sub-group-icon")||e.target.classList.contains("adds-open-group-icon"))&&d(e.target.parentElement.parentElement,"adds-shrink"));});var l=document.querySelector(".adds-filter-toggle");l&&l.addEventListener("click",function(){d(document.querySelector(".adds-filters-main-wrapper"),"adds-close");});})();;
(function($){"use strict";jQuery(document).ready(function(){jQuery("header .sub-menu .product-image").show();jQuery('.smc-global-navigation .quicktabs-tabs').append('<li class="quicktabs-close"></li>');$('.quicktabs-close').on('click',function(e){showMegamenu(false);});jQuery('.smc-global-navigation .gva_menu > li.menu-item > .sub-menu').hover(function(){jQuery(this).parent().children('a').addClass('active');},function(){jQuery(this).parent().children('a').removeClass('active');});var megaMenuDelayTimer=null;var $navigationOverlay=jQuery('<div class="smc-global-navigation-overlay"></div>');jQuery('body').append($navigationOverlay);function showMegamenu(isShow,$obj){if(isShow){$('.js-addition-menu').trigger('smc.globalMenu.additionMenu.hide');jQuery('.smc-global-navigation .gva_menu > li.menu-item.show-sub-menu').removeClass('show-sub-menu');$obj.addClass('show-sub-menu');$navigationOverlay.addClass('show');jQuery('.smc-global-navigation .gva_menu > li.menu-item > .sub-menu').scrollTop(0);}else{jQuery('.smc-global-navigation .gva_menu > li.menu-item.show-sub-menu').removeClass('show-sub-menu');$navigationOverlay.removeClass('show');}}jQuery('.smc-global-navigation .gva_menu > li.menu-item').mouseenter(function(){if(megaMenuDelayTimer!=null){clearTimeout(megaMenuDelayTimer);megaMenuDelayTimer=null;}var $obj=$(this);megaMenuDelayTimer=setTimeout(function(){showMegamenu(true,$obj);megaMenuDelayTimer=null;},600);}).mouseleave(function(){if(megaMenuDelayTimer!=null){clearTimeout(megaMenuDelayTimer);megaMenuDelayTimer=null;}megaMenuDelayTimer=setTimeout(function(){showMegamenu(false);megaMenuDelayTimer=null;},700);});jQuery('.gva-mega-menu .block .quicktabs-main .menu-item').hover(function(){jQuery(this).find('ul').stop(true,true).delay(400).slideDown('500');},function(){jQuery(this).find('ul').stop(true,true).delay(400).slideUp('500');});$('.smc-global-navigation .gva_menu > li > ul.sub-menu.show-on-desktop, .smc-global-navigation .gva_menu > li div.sub-menu.show-on-desktop').addClass('attach-transition');function calculateMegamenuHeihgt(){$('.smc-global-navigation .gva_menu .sub-menu.show-on-desktop:hidden').show();var calculateProductCategoryHeight=function($obj){var maxHeight=0;var $eleProductCat=$obj.find('.menu-category');$eleProductCat.css('height','');$eleProductCat.each(function(index){if($(this).outerHeight()>maxHeight)maxHeight=$(this).outerHeight()+10;});$eleProductCat.outerHeight(maxHeight);};var calculateTabHeight=function(){var maxHeight=0;var eleTabs=$(".smc-global-navigation .quicktabs-tabpage");var $preShowMenu;maxHeight=0;eleTabs.css('height','');eleTabs.each(function(index){var isHide=false;if($(this).hasClass('quicktabs-hide')){isHide=true;$(this).removeClass('quicktabs-hide');}if($(this).hasClass('js-menu-category')){$preShowMenu=$(this).find('.col:first-child .menu-item:first-of-type ul');$preShowMenu.show();calculateProductCategoryHeight($(this));}var eleHeight=$(this).outerHeight();if($(this).hasClass('solution'))eleHeight-=45;if(eleHeight>maxHeight)maxHeight=eleHeight;if($(this).hasClass('js-menu-category'))$preShowMenu.hide();if(isHide)$(this).addClass('quicktabs-hide');});eleTabs.filter('.solution').outerHeight(maxHeight+10+45);};calculateTabHeight();var caculateHeaderHeight=function(){if(window.matchMedia('(max-width: 1199px)').matches){var $header=$('.smc-global-navigation').closest('header');if($header.length)$('.gva-navigation').css('top',$header.outerHeight(true));}}();};calculateMegamenuHeihgt();var calculateMegamenuTimer;$(window).resize(function(){if(calculateMegamenuTimer!=undefined)clearTimeout(calculateMegamenuTimer);calculateMegamenuTimer=setTimeout(function(){calculateMegamenuHeihgt();},2000);});$('.gva-navigation > ul.gva_menu_main > li.menu-item > a, .gva-navigation > ul.gva_menu_main > li.menu-item > ul:not(.show-on-desktop) a').on('click',function(){var item=$(this).find(".nav-plus");if(item.length){if(item.hasClass('nav-minus')==false){if(item.parent('a').parent('li').find('> ul').length==2)item.parent('a').parent('li').find('> ul.show-on-mobile').slideDown();else item.parent('a').parent('li').find('> ul').slideDown();item.addClass('nav-minus');}else{item.parent('a').parent('li').find('> ul:not(.show-on-desktop)').slideUp();item.removeClass('nav-minus');}return false;}return true;});$('#menu-bar').on('click',function(e){if($('.gva-navigation').hasClass('show-view')){$(this).removeClass('show-view');$('.gva-navigation').removeClass('show-view');$('.header-right').removeClass('show-view');$('html, body').css('overflow','auto');$('.sub-menu.show-on-mobile').addClass('hide-on-desktop').removeClass('show-on-mobile');$('#search-sku-form').show();}else{$(this).addClass('show-view');$('.gva-navigation').addClass('show-view');$('.header-right').addClass('show-view');$('html, body').css('overflow','hidden');$('.sub-menu.hide-on-desktop').addClass('show-on-mobile').removeClass('hide-on-desktop');$('#search-sku-form').hide();}e.stopPropagation();});function showHeaderSearchForm(isShow){var $searchForm=$('#smc-global-menu .search-content');if(!isShow){$searchForm.removeClass('show');setTimeout(function(){$searchForm.hide();},200);}else{$searchForm.show();$('.addsearch-searchfield input.addsearch').focus();setTimeout(function(){$searchForm.addClass('show');},100);}}$('#smc-global-menu .search-content-close').on('click',function(e){showHeaderSearchForm(false);e.stopPropagation();});$(window).click(function(){if($('.search-content').hasClass('show'))showHeaderSearchForm(false);if($('.gva-navigation').hasClass('show-view')&&$(window).innerWidth()<1199){$('#menu-bar').removeClass('show-view');$('.gva-navigation').removeClass('show-view');$('.header-right').removeClass('show-view');$('html, body').css('overflow','auto');$('.sub-menu.show-on-mobile').addClass('hide-on-desktop').removeClass('show-on-mobile');$('#search-sku-form').show();}});$('.search-content').click(function(event){event.stopPropagation();});$('.gva-navigation.show-view').click(function(event){event.stopPropagation();});function initTabs(){if(!(typeof Drupal==='undefined'||typeof Drupal.quicktabs==='undefined'))return;var ele={};ele.tabs=$('.smc-global-navigation .quicktabs-tabs');ele.tabs.find('a').on('click',function(e){var $tabsBlock=$(e.target).closest('.quicktabs-wrapper');var index=$(e.target).parent().index();$tabsBlock.find('.quicktabs-tabpage').addClass('quicktabs-hide');$tabsBlock.find('.quicktabs-tabs > li.active').removeClass('active');$(e.target).parent('li').addClass('active');var $showViw=$tabsBlock.find('.quicktabs-tabpage:nth-of-type('+(index+1)+')').removeClass('quicktabs-hide');return false;});}initTabs();function initLazyLoad(){if(!typeof lazySizes==='undefined')return;const images=document.querySelectorAll('.smc-global-navigation .quicktabs-tabpage .lazy');const loadImage=function(img){let src;if(img.tagName=='IMG')src=img.getAttribute('data-src');else src=img.getAttribute('data-bg');if(!src)return;if(img.tagName=='IMG')img.src=src;else img.style.backgroundImage='url('+src+')';};const callback=function(entries,observer){entries.forEach(function(entry){if(!entry.isIntersecting)return;loadImage(entry.target);observer.unobserve(entry.target);});};let observer=new IntersectionObserver(callback);images.forEach(function(image){observer.observe(image);});}initLazyLoad();function getStoreUrl(){return SMC_COMMON.context.method.getStoreUrl();}async function initShopLink(){var ele={};ele.container=$('.js-addition-menu');if(ele.container.length<=0)return;async function getShopPurchase(){const res=await fetch(getStoreUrl()+'/customer/section/load/?sections=item&count=1',{method:'GET',credentials:"include"});const data=await res.json();if(data.item&&data.item&&!isNaN(data.item.summary_count))return parseInt(data.item.summary_count);return 0;}async function getShopQuote(){const res=await fetch('/configuratorapi/sso/config/quote/count?app=enterprise',{method:'GET',credentials:"include"});const data=await res.text();if(!isNaN(data))return parseInt(data);return 0;}async function loadShopCartData(){const purchaseQty=await getShopPurchase();const quoteQty=await getShopQuote();let total=purchaseQty+quoteQty;const $link=ele.container.find('.js-addition-menu-item.cart');if(total<=0)$link.find('.cart-qty').hide();else $link.find('.cart-qty').text((total>99)?'99+':total).show();if(purchaseQty>0||total===0)$link.find('a').attr('href',getStoreUrl()+'/shop/cart');else $link.find('a').attr('href',getStoreUrl()+'/shop/quote');}document.addEventListener('reload.customer-data',(e)=>{console.log(e.detail.sections);if(e.detail.sections.includes('cart'))loadShopCartData();});}initShopLink();function initAccountMenu(){var domainPath=location.protocol+'//'+location.hostname+'/';var ccDomainPath=location.protocol+'//'+location.hostname+'/sso/';var ele={};ele.container=$('.js-addition-menu-item.account');if(ele.container.length<=0)return;function goToAccountFunction(action){$.ajax({url:domainPath+"sso/getsession",dataType:"json"}).done(function(msg){window.location.href=ccDomainPath+action+"/aid/"+msg.aid+"/key/"+msg.key;});}function getAccountStatus(callback){if(domainPath.indexOf('super-opweb')!=-1||domainPath.indexOf('onsite')!=-1)return;var statusURL=domainPath+"sso/getsession";$.ajax({url:statusURL,dataType:"json"}).done(function(msg){callback(msg);});}var timeflag=null;var renderAccountInfo=function(){if((timeflag!=null)&&(new Date().getTime()-timeflag<=10000))return;timeflag=new Date().getTime();var checkLayoutStatus=function(msg){if(msg===null||msg.id===null){ele.container.find('.js-logout').show();ele.container.find('.js-login').hide();ele.container.removeClass('login');}else{ele.container.find('.username').text(msg.id);ele.container.find('.js-logout').hide();ele.container.find('.js-login').show();ele.container.addClass('login');if(!msg.email)return;if(msg.email.indexOf('supermicro.com')>=0)ele.container.find('.js-update').hide();}};getAccountStatus(checkLayoutStatus);};var bindEvent=function(){ele.container.find('.addition-menu-content').on('smc.globalMenu.additionMenuContent.show',function(){renderAccountInfo();});ele.container.on('click','.js-menu-action',function(e){var $obj=$(this);if($obj.hasClass('js-sign-in')){var loginURL=domainPath+'sso/login?page='+encodeURIComponent(window.location.href);window.location.replace(loginURL);return;}if($obj.hasClass('js-sign-out')){var logoutURL=domainPath+'sso/logout?page='+encodeURIComponent(window.location.href);window.location.replace(logoutURL);return;}if($obj.hasClass('js-create')){goToAccountFunction('profile/register');return;}if($obj.hasClass('js-forget')){goToAccountFunction('profile/password/forget');return;}if($obj.hasClass('js-update')){goToAccountFunction('profile/change');return;}if($obj.hasClass('js-update-mail')){goToAccountFunction('profile/emailpref/change');return;}if($obj.hasClass('js-jumpstart')){window.location.href=domainPath+'jumpstart/dashboard';return;}});$(window).on('focus',function(event){renderAccountInfo();});function checkTabFocused(){if(document.visibilityState==='visible')renderAccountInfo();}document.addEventListener('visibilitychange',checkTabFocused);};if(window.location.host.indexOf('intweb.supermicro.com')===0)return;ele.container.find('.js-sign-out').parent().before($('<li class="menu-item js-login" style="display: none;"><a class="js-menu-action js-jumpstart">JumpStart</a></li>'));ele.container.show();renderAccountInfo();bindEvent();}initAccountMenu();function initAdditionMenu(){var ele={};ele.container=$('.js-addition-menu');if(ele.container.length<=0)return;var showAccountMenu=function(isShow,$obj){if(isShow){showMegamenu(false);$obj.next('.addition-menu-content').show();$navigationOverlay.addClass('show');}else{$obj.next('.addition-menu-content').hide();$navigationOverlay.removeClass('show');}};var bindEvent=function(){ele.container.find('.js-addition-menu-item.account').on('mouseenter',function(e){if(megaMenuDelayTimer!=null){clearTimeout(megaMenuDelayTimer);megaMenuDelayTimer=null;}var $obj=$(this);megaMenuDelayTimer=setTimeout(function(){showAccountMenu(true,$obj.find('.addition-menu-trigger'));megaMenuDelayTimer=null;},600);});ele.container.find('.js-addition-menu-item.account').on('mouseleave',function(e){if(megaMenuDelayTimer!=null){clearTimeout(megaMenuDelayTimer);megaMenuDelayTimer=null;}var $obj=$(this);megaMenuDelayTimer=setTimeout(function(){showAccountMenu(false,$obj.find('.addition-menu-trigger'));megaMenuDelayTimer=null;},700);});ele.container.on('click','.addition-menu-trigger',function(e){if(!$(this).parent().hasClass('search'))return;e.stopPropagation();showMegamenu(false);ele.container.find('.addition-menu-content').hide();if($(this).parent().hasClass('search')){showHeaderSearchForm(true);return;}});ele.container.on('smc.globalMenu.additionMenu.hide',function(){ele.container.find('.addition-menu-content').hide();$navigationOverlay.removeClass('show');});$(document).on('click',function(e){if($(e.target).closest('.addition-menu').length){e.stopPropagation();return;}ele.container.trigger('smc.globalMenu.additionMenu.hide');});};bindEvent();}initAdditionMenu();});})(jQuery);;
(($,Drupal,debounce,displace)=>{Drupal.offCanvas={position:null,minimumHeight:30,minDisplaceWidth:768,$mainCanvasWrapper:$('[data-off-canvas-main-canvas]'),isOffCanvas($element){return $element.is('#drupal-off-canvas');},removeOffCanvasEvents($element){$element.off('.off-canvas');$(document).off('.off-canvas');$(window).off('.off-canvas');},beforeCreate({settings,$element}){Drupal.offCanvas.removeOffCanvasEvents($element);$('body').addClass('js-off-canvas-dialog-open');settings.position={my:'left top',at:`${Drupal.offCanvas.getEdge()} top`,of:window};const position=settings.drupalOffCanvasPosition;const height=position==='side'?$(window).height():settings.height;const width=position==='side'?settings.width:'100%';settings.height=height;settings.width=width;},beforeClose({$element}){$('body').removeClass('js-off-canvas-dialog-open');Drupal.offCanvas.removeOffCanvasEvents($element);Drupal.offCanvas.resetPadding();},afterCreate({$element,settings}){const eventData={settings,$element,offCanvasDialog:this};$element.on('dialogContentResize.off-canvas',eventData,Drupal.offCanvas.handleDialogResize).on('dialogContentResize.off-canvas',eventData,Drupal.offCanvas.bodyPadding);Drupal.offCanvas.getContainer($element).attr(`data-offset-${Drupal.offCanvas.getEdge()}`,'');$(window).on('resize.off-canvas',eventData,debounce(Drupal.offCanvas.resetSize,100,true)).trigger('resize.off-canvas');},render({settings}){$('.ui-dialog-off-canvas, .ui-dialog-off-canvas .ui-dialog-titlebar').toggleClass('ui-dialog-empty-title',!settings.title);},handleDialogResize(event){const $element=event.data.$element;const $container=Drupal.offCanvas.getContainer($element);const $offsets=$container.find('> :not(#drupal-off-canvas, .ui-resizable-handle)');let offset=0;$element.css({height:'auto'});const modalHeight=$container.height();$offsets.each((i,e)=>{offset+=$(e).outerHeight();});const scrollOffset=$element.outerHeight()-$element.height();$element.height(modalHeight-offset-scrollOffset);},resetSize(event){const $element=event.data.$element;const container=Drupal.offCanvas.getContainer($element);const position=event.data.settings.drupalOffCanvasPosition;if(Drupal.offCanvas.position&&Drupal.offCanvas.position!==position)container.removeAttr(`data-offset-${Drupal.offCanvas.position}`);if(position==='top')$element.css('min-height',`${Drupal.offCanvas.minimumHeight}px`);displace();const offsets=displace.offsets;const topPosition=position==='side'&&offsets.top!==0?`+${offsets.top}`:'';const adjustedOptions={position:{my:`${Drupal.offCanvas.getEdge()} top`,at:`${Drupal.offCanvas.getEdge()} top${topPosition}`,of:window}};const height=position==='side'?`${$(window).height()-(offsets.top+offsets.bottom)}px`:event.data.settings.height;container.css({position:'fixed',height});$element.dialog('option',adjustedOptions).trigger('dialogContentResize.off-canvas');Drupal.offCanvas.position=position;},bodyPadding(event){const position=event.data.settings.drupalOffCanvasPosition;if(position==='side'&&$('body').outerWidth()<Drupal.offCanvas.minDisplaceWidth)return;Drupal.offCanvas.resetPadding();const $element=event.data.$element;const $container=Drupal.offCanvas.getContainer($element);const $mainCanvasWrapper=Drupal.offCanvas.$mainCanvasWrapper;const width=$container.outerWidth();const mainCanvasPadding=$mainCanvasWrapper.css(`padding-${Drupal.offCanvas.getEdge()}`);if(position==='side'&&width!==mainCanvasPadding){$mainCanvasWrapper.css(`padding-${Drupal.offCanvas.getEdge()}`,`${width}px`);$container.attr(`data-offset-${Drupal.offCanvas.getEdge()}`,width);displace();}const height=$container.outerHeight();if(position==='top'){$mainCanvasWrapper.css('padding-top',`${height}px`);$container.attr('data-offset-top',height);displace();}},getContainer($element){return $element.dialog('widget');},getEdge(){return document.documentElement.dir==='rtl'?'left':'right';},resetPadding(){Drupal.offCanvas.$mainCanvasWrapper.css(`padding-${Drupal.offCanvas.getEdge()}`,0);Drupal.offCanvas.$mainCanvasWrapper.css('padding-top',0);displace();}};Drupal.behaviors.offCanvasEvents={attach:()=>{if(!once('off-canvas','html').length)return;$(window).on({'dialog:beforecreate':(event,dialog,$element,settings)=>{if(Drupal.offCanvas.isOffCanvas($element))Drupal.offCanvas.beforeCreate({dialog,$element,settings});},'dialog:aftercreate':(event,dialog,$element,settings)=>{if(Drupal.offCanvas.isOffCanvas($element)){Drupal.offCanvas.render({dialog,$element,settings});Drupal.offCanvas.afterCreate({$element,settings});}},'dialog:beforeclose':(event,dialog,$element)=>{if(Drupal.offCanvas.isOffCanvas($element))Drupal.offCanvas.beforeClose({dialog,$element});}});}};})(jQuery,Drupal,Drupal.debounce,Drupal.displace);;
(function($,Drupal,drupalSettings){const ids=[];Drupal.behaviors.copyFieldValue={attach(context){Object.keys(drupalSettings.copyFieldValue||{}).forEach((element)=>{ids.push(element);});if(ids.length){$(once('copy-field-values','body')).on('value:copy',this.valueTargetCopyHandler);$(once('copy-field-values',`#${ids.join(', #')}`)).on('blur',this.valueSourceBlurHandler);}},detach(context,settings,trigger){if(trigger==='unload'&&ids.length){$(once.remove('copy-field-values','body')).off('value:copy');$(once.remove('copy-field-values',`#${ids.join(', #')}`)).off('blur');}},valueTargetCopyHandler(e,value){const {target}=e;if(target.value==='')target.value=value;},valueSourceBlurHandler(e){const {value}=e.target;const targetIds=drupalSettings.copyFieldValue[e.target.id];$(`#${targetIds.join(', #')}`).trigger('value:copy',value);}};})(jQuery,Drupal,drupalSettings);;
/* @license MIT https://github.com/jackmoore/colorbox/blob/master/LICENSE.md */
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,once){Drupal.behaviors.video_embed_field_colorbox={attach:function(context,settings){$(once('video-embed-field-launch-modal','.video-embed-field-launch-modal',context)).click(function(e){e.preventDefault();$.colorbox($.extend(settings.colorbox,{html:$(this).data('video-embed-field-modal')}));});}};})(jQuery,once);;
var urls={"/products/ultra":"/products/nfo/Ultra.cfm","/products/mp":"/products/nfo/Xeon_MP.cfm","/products/mainstream":"/products/nfo/Xeon_SP_X11.cfm?pg=SS&show=SELECT&type=MS","/products/gpu":"/products/nfo/gpu.cfm","/products/dco":"/products/nfo/Xeon_SP_X11.cfm?pg=SS&show=SELECT&type=DCO","/products/wio":"/products/nfo/WIO.cfm","/products/bigtwin":"/products/nfo/BigTwin.cfm","/products/fattwin":"/products/nfo/FatTwin.cfm","/products/twinpro":"/products/nfo/2UTwinPro.cfm","/products/twin-servers":"/products/nfo/2UTwin2.cfm","/products/general-purpose-storage":"","/products/top-loading-storage":"","/products/rackmount":"","/products/blade":"","/products/storage":"/products/nfo/storage.cfm","/products/twin":"/products/nfo/Twin.cfm","/products/superblade":"/products/SuperBlade/","/products/microblade":"/products/MicroBlade/","/products/superblade/networking":"/products/SuperBlade/networking/","/products/superblade/enclosure":"/products/SuperBlade/enclosure/","/products/superblade/modules":"/products/SuperBlade/module/","/products/superblade/powersupply":"/products/SuperBlade/powersupply/","/products/superblade/management":"/products/SuperBlade/management/","/products/superblade/storage":"","/products/microblade/networking":"/products/MicroBlade/networking/","/products/microblade/enclosure":"/products/MicroBlade/enclosure/","/products/microblade/modules":"/products/MicroBlade/module/","/products/microblade/powersupply":"/products/MicroBlade/powersupply/","/products/microblade/management":"/products/MicroBlade/management/","/products/microcloud":"/products/nfo/MicroCloud.cfm","/products/motherboards":"/products/motherboard/","/products/chassis":"/products/chassis/","/products/chassis?pro=filter%3Dformfactor%26formfactor%3D1U":"/products/chassis/1U","/products/chassis?pro=filter%3Dformfactor%26formfactor%3D2U":"/products/chassis/2U","/products/chassis?pro=filter%3Dformfactor%26formfactor%3D3U":"/products/chassis/3U","/products/chassis?pro=filter%3Dformfactor%26formfactor%3D4U":"/products/chassis/4U","/products/chassis?pro=filter%3Dformfactor%26formfactor%3DMid-Tower%2CMini-Tower":"/products/chassis/tower","/products/chassis?pro=filter%3Dformfactor%26formfactor%3DMini-ITX":"/products/chassis/Mini-ITX","/products/chassis?pro=filter%3Dfeature%26feature%3DMobile%20Rack":"/products/chassis/mobileRack","/products/chassis?pro=filter%3Dfeature%26feature%3DJBOD":"/products/chassis/JBOD","/products/motherboards/matrix":"/support/resources/MB_matrix.php","/products/embedded/servers":"/products/embedded/embedded_server.cfm","/products/embedded/compact-and-industrial":"/products/system/Compact/","/products/chassis/embedded-iot":"/products/embedded/embedded_chassis.cfm","/products/motherboards/embedded-iot-boards":"/products/embedded/embedded_motherboard.cfm","/products/systems":"/products/system/"},path=window.location.pathname.toLowerCase(),languages=['/en','/zh_tw','/zh_cn','/ja','/de'],langParam="mlg=0",lang="/en";for(var i=0;i<languages.length;i++)if(path.indexOf(languages[i])==0){langParam="mlg="+i;path=path.substring(languages[i].length);break;};var link=(urls[path]?urls[path]:"");if(window.location.search!='')link=(urls[path+window.location.search]?urls[path+window.location.search]:link);var badgeLabel="Switch to legacy site";if(link==""){badgeLabel="Switch to legacy homepage";link="/index_home.cfm";};if(link.indexOf("?")>=0)link+="&"+langParam;else link+="?"+langParam;var contactUs;switch(document.documentElement.lang){case 'zh-hant':contactUs='聯絡我們';break;case 'zh-hans':contactUs='联系我们';break;case 'ja':contactUs='お問合せ一覧';break;case 'de':contactUs='Kontakt';break;default:contactUs='Contact Us';};var badgeDIV='<div id="contact-fixed"><a class="btn btn-sm js-link-contact-form" href="/contact"><span class="button-icon fa fa-envelope-o" title="'+contactUs+'"></span> <span class="button-text">'+contactUs+'</span></a></div>';Drupal.attachBehaviors(document,Drupal.settings);(function($){"use strict";jQuery(document).ready(function(){jQuery('#footer').prepend(badgeDIV);$('.ent-to-legacy').click(function(){jQuery.ajax({url:"/sites/default/files/php/optoutTrack.php",complete:function(jqXHR,textStatus){console.log("complete");}});});});})(jQuery);;
function openSlidedownOverlay(contentHtml,title){jQuery("#overlay").show();jQuery('#slidedown-overlay .overlay-content').html(contentHtml);jQuery('#slidedown-overlay .overlay-title').hide();if(title!==undefined){jQuery('#slidedown-overlay .overlay-title').html(title);jQuery('#slidedown-overlay .overlay-title').show();};disablePageScrolling();}function closeSlidedownOverlay(){enablePageScrolling();jQuery("#overlay").hide();}function resizeEmbeddedVideo($embeddedVideo){var h=$embeddedVideo.height(),w=$embeddedVideo.width();if(h/w<0.5625)w=h/0.5625;else h=0.5625*w;var $iframe=$embeddedVideo.find('.video-embed-field-responsive-video iframe');$iframe.height(h);$iframe.width(w);};(function($){"use strict";jQuery(document).ready(function(){var bannerSlideTimeout,setProductBannerSlide=function(){if(jQuery(".banner-slide").length<=0)return;var slideIndex=0;showSlides();function showSlides(){if(jQuery(".banner-slide").length){jQuery(".banner-slide").each(function(){jQuery(this).hide();var $img=jQuery(this).find('img[data-src].lazy');if($img.length)lazySizes.loader.unveil($img[0]);});slideIndex++;if(slideIndex>jQuery(".banner-slide").length)slideIndex=1;jQuery(".banner .banner-slide:nth-child("+slideIndex+")").show();jQuery(".banner .image-selector").each(function(){jQuery(this).removeClass('active');});jQuery(".banner .image-selector:nth-child("+slideIndex+")").addClass('active');bannerSlideTimeout=setTimeout(showSlides,8e3);}}}();jQuery(".paragraph--type--video-player .play-video-action").on('click',function(e){var $thumbnail=$(this).closest('.paragraph--type--video-player').find('.youtube-thumbnail'),setIframe=function($iframe){if($iframe.length){$iframe.removeClass('lazy');$iframe.attr('allow',"autoplay; fullscreen");var videoURL=$iframe.attr('data-src');if(videoURL==undefined)videoURL=$iframe.attr('src');videoURL=videoURL.replace('autoplay=0','autoplay=1');$iframe.attr('src',videoURL);}};if($thumbnail.length){var $iframe=$thumbnail.next('.videowrapper').find('iframe');setIframe($iframe);setTimeout(function(){$thumbnail.hide();$thumbnail.next('.videowrapper').show();},200);}else{var $modalVideo=$(this).closest('.paragraph--type--video-player').find('.modal-video');if($modalVideo.length){var i=$modalVideo.index('#resources.border-style .resource-slide .modal-video'),video=document.querySelectorAll('[data-video-embed-field-modal]')[i];video.click();}else{var $iframe=$(this).closest('.paragraph--type--video-player').find('.videowrapper iframe');setIframe($iframe);}}});$('#resources.border-style .resource-slide .slider-placeholder').scroll(function(){$('#resources.border-style .resource-slide .slider-placeholder').scrollLeft($(this).scrollLeft());});$(document).on('click','#resources.border-style .slick-arrow.slick-next',function(){$('#resources.border-style .resource-slide .slider-placeholder').scrollLeft($('#resources.border-style .resource-slide .slider-placeholder').scrollLeft()+105);});$(document).on('click','#resources.border-style .slick-arrow.slick-prev',function(){$('#resources.border-style .resource-slide .slider-placeholder').scrollLeft($('#resources.border-style .resource-slide .slider-placeholder').scrollLeft()-105);});if($(".colorbox-iframe").length)$(".colorbox-iframe").colorbox({iframe:true,width:"80%",height:"80%"});jQuery(".banner .image-selector").on('click',function(e){if(!jQuery(this).hasClass('active')){jQuery(".banner .image-selector").removeClass('active');jQuery(this).addClass('active');clearTimeout(bannerSlideTimeout);jQuery(".banner-slide").each(function(){jQuery(this).hide();});jQuery(".banner .banner-slide:nth-child("+($(this).index()+1)+")").show();}});$('#leadership .team-info a:not([href]) .readmore').on('click',function(event){openSlidedownOverlay(jQuery(this).closest('.team-info').find('.leadership-info')[0].outerHTML);event.stopPropagation();});$(window).click(function(event){if($(event.target).closest('#slidedown-overlay').length==0)closeSlidedownOverlay();});if(jQuery("#news-search a").length){var htmlEncode=function(str){var temp=document.createElement('div');temp.textContent=str;return temp.innerHTML;},path=htmlEncode(Drupal.checkPlain(window.location.pathname)).replace(/\/$/,"");jQuery("#news-search li.active").removeClass('active');jQuery("#news-search a[href='"+path+"']").each(function(){$(this).parent().addClass("active");});};var setProductShowMore=function(){var enclosures=$('#enclosures');enclosures.find('.js-show-more').on('click',function(event){event.preventDefault();$(this).hide();enclosures.find('.js-pre-hide:not(.js-show-less)').show();enclosures.find('.js-pre-hide.js-show-less').css("display","block");enclosures.find('.js-show-more').hide();setTimeout(function(){enclosures.find('.slick-slider').slick('setPosition');if(typeof refreshScrollspy==='undefined'||refreshScrollspy===null)refreshScrollspy();},50);});enclosures.find('.js-show-less').on('click',function(event){event.preventDefault();$(this).hide();enclosures.find('.js-pre-hide').hide();enclosures.find('.js-show-more').show();setTimeout(function(){enclosures.find('.slick-slider').slick('setPosition');if(typeof refreshScrollspy==='undefined'||refreshScrollspy===null)refreshScrollspy();},50);});};setProductShowMore();var setBladeNetworking=function(){var currUrl=location.pathname.split('/');if(currUrl.length<2)return;var currePage=currUrl[currUrl.length-1].toLowerCase();if(!(currePage=='networking'||currePage=='management'))return;var currProduct=currUrl[currUrl.length-2].toLowerCase();if(!(currProduct=='superblade'||currProduct=='microblade'))return;var setBNMGallery=function(){var pic=$("#BNM a.bnm-system-pic");if(pic.length<=0)return;pic.colorbox({rel:"bnmSystemPic",width:"900px",maxWidth:"90%",overlayClose:false});},setProductSort=function(){var needSortArray=['InfiniBand','IntelOmni-Path','25GE'];for(var i=0;i<needSortArray.length;i++){var $block=$('#'+needSortArray[i]).find('.portfolio-v1'),startIndex=0;$block.each(function(index){var title=$(this).find('ul.product-tags li:first-child').text().trim();if(title.substr(0,1)!='A'){$(this).insertBefore($(this).parent().find(".portfolio-v1").eq(startIndex));startIndex+=1;}});}},setProductTitle=function(){var $block=$('.portfolio-v1'),preType='',passThruModuleNamingConvention=/^[MS]BM-\d+G-P\d+$/;$block.each(function(index){if($(this).index()==0)preType='';var title=$(this).find('ul.product-tags li:first-child').text().trim(),curreType;if(passThruModuleNamingConvention.test(title))curreType='Pass-Thru Modules';else if(title.substr(0,1)=='A')curreType='Mezzanine Cards';else curreType='Switches';if(curreType!=preType){if(curreType!=='Pass-Thru Modules')$('<div class="sub-title">'+curreType+'</div>').insertBefore($(this));preType=curreType;}});$('.box-title').html(function(){return '<div>'+$(this).text()+'</div>';});},setProductFormFactor=function(){var fromFactor={superblade:{'MBM-XEM-100':'4U / 6U / 8U','MBM-XEM-002':'4U / 6U / 8U','MBM-XEM-002+':'4U / 6U / 8U','MBM-GEM-004':'4U / 6U / 8U','SBM-25G-100':'6U / 8U','SBM-25G-200':'4U / 6U / 8U','SBM-25G-P10':'4U / 6U / 8U','MBM-CMM-FIO/MBM-CMM-FIO-V':'4U / 6U / 8U','MBM-CMM-6':'4U / 6U / 8U','SBM-CMM-001/BMB-CMM-002(mini-CMM)/SBM-CMM-003':'7U'},microblade:{'SBM-25G-200':'3U / 6U','MBM-25G-P20':'3U / 6U','SBM-25G-P10':'6U','MBM-XEM-100':'3U / 6U','MBM-XEM-002':'3U / 6U','MBM-XEM-002+':'3U / 6U','MBM-GEM-004':'3U / 6U','MBM-CMM-001/MBM-CMM-FIO/MBM-CMM-FIO-V':'3U / 6U','MBM-CMM-6':'3U / 6U','AOC-XEH-I2M':'3U / 6U','AOC-GEH-I4M':'3U / 6U'}},$block=$('.portfolio-v1');$block.each(function(index){var title=$(this).find('ul.product-tags li:first-child').text().trim();title=title.replace(/\r\n|\n/g,"");title=title.replace(/\s+/g,"");var info=fromFactor[currProduct][title];if(info!=undefined){var $tags=$(this).find('.product-tags');$tags.append('<li><img src="/sites/default/files/icons/system_icon_white2.svg">'+info+'</li>');}});};if(currePage=='networking'){setBNMGallery();setProductSort();setProductTitle();};setProductFormFactor();};setBladeNetworking();jQuery(window).resize(function(){jQuery('.embedded-video .videowrapper:visible').each(function(){resizeEmbeddedVideo(jQuery(this).closest('.embedded-video'));});});jQuery('.embedded-video').click(function(){resizeEmbeddedVideo(jQuery(this));});jQuery('.embedded-video .closebtn').click(function(){var $embeddedVideo=jQuery(this).closest('.embedded-video');$embeddedVideo.find('.videowrapper').hide();$embeddedVideo.find('.video-thumbnail.youtube-thumbnail').show();$embeddedVideo.find('.video-embed-field-responsive-video iframe').each(function(){this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}','*');});});jQuery(document).on('click','#page-title-sticky-header > div',function(){jQuery('html, body').animate({scrollTop:0},600);});if($('.subnav ul.nav-tabs li.active').length==0){var path=window.location.pathname.toLowerCase();$('.subnav ul.nav-tabs li').each(function(){if(path===$(this).find('a').attr('href')){$(this).addClass('active');return false;}});}function directToProductSelector(){var getUrlParameter=function getUrlParameter(sParam){var sPageURL=window.location.search.substring(1),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam)return sParameterName[1]===undefined?true:decodeURIComponent(sParameterName[1]);};return '';},pro=getUrlParameter('pro');if(pro=='')return;var setProductSelector=function(){if(triggerFilterByParams==undefined)return;clearInterval(proTimer);var toPage=decodeURIComponent(pro);triggerFilterByParams(pro);},proTimer=setInterval(setProductSelector,500);};directToProductSelector();function setScrollBox(){var ele={},itmeWidth,maxWidth;function bindEvent(){ele.scrollLeft.on('click',function(){ele.scroll.animate({scrollLeft:ele.scroll.scrollLeft()-itmeWidth},500);checkArrowShow();});ele.scrollRight.on('click',function(){ele.scroll.animate({scrollLeft:ele.scroll.scrollLeft()+itmeWidth},500);checkArrowShow();});ele.scroll.on('scroll',function(){checkArrowShow();});$(window).on('resize',function(){setScrollWidth();ele.scroll.scrollLeft(0);});}function checkArrowShow(){var currentPosition=ele.scroll.scrollLeft();if(currentPosition>=maxWidth)ele.scrollRight.addClass('scroll-disabled');else ele.scrollRight.removeClass('scroll-disabled');if(currentPosition<=0)ele.scrollLeft.addClass('scroll-disabled');else ele.scrollLeft.removeClass('scroll-disabled');}function setScrollWidth(){var $items=ele.scroll.find('.gsc-column');$items.css('min-width','');ele.scroll.find('.row').css('width','');itmeWidth=ele.scroll.find('.gsc-column:first-child').outerWidth();var totalWidth=$items.length*itmeWidth;maxWidth=totalWidth-ele.scroll.outerWidth();$items.css('min-width','auto');ele.scroll.find('.row').outerWidth(totalWidth);}function setScrollLayout(){ele.scrollBox.removeClass('scroll-box-loading');ele.scrollLeft=$('<a class="scroll-prev scroll-arrow scroll-disabled" href="javascript:void(0);"><i class="fa fa-angle-left"></i></a>');ele.scrollRight=$('<a class="scroll-next scroll-arrow" href="javascript:void(0);"><i class="fa fa-angle-right"></i></a>');ele.scrollBox.find('.paragraph-boxes .row').wrap('<div class="scroll-box-container">').wrap('<div class="scroll-box-list">').css('opacity','1');ele.scrollBox=ele.scrollBox.find('.scroll-box-container');ele.scroll=ele.scrollBox.find('.scroll-box-list');ele.scrollBox.append(ele.scrollLeft);ele.scrollBox.append(ele.scrollRight);}function init(){ele.scrollBox=$('#product-families.scroll-box');if(ele.scrollBox<=0)return;setScrollLayout();setScrollWidth();bindEvent();};init();};setScrollBox();var initParagraphAnchor=function(){var ele={},initFixBar=function(){var listHeight=ele.anchorList.outerHeight(),checkListPosition=function(){if(!window.matchMedia('(min-width: 992px)').matches)return;var headerHeight=$('#header').outerHeight(),checkPoint=ele.anchorList.offset().top-headerHeight,checkPointBottom=ele.anchorBlock.offset().top+ele.anchorBlock.outerHeight();if($(document).scrollTop()>checkPoint){ele.anchorList.addClass('s-paragraph-anchor-list--fixed');if($(document).scrollTop()>=checkPointBottom-$(window).height()){var bottomOffset=((checkPointBottom-$(document).scrollTop())%$(window).height());if(bottomOffset<listHeight){bottomOffset=$(window).height()-bottomOffset;ele.anchorList.find('ul').css({top:'auto',bottom:bottomOffset+'px'});return;}};ele.anchorList.find('ul').css({top:(headerHeight+20)+'px',bottom:'auto'});}else ele.anchorList.removeClass('s-paragraph-anchor-list--fixed');};$(document).on('scroll',checkListPosition);},initAnchorList=function(){if(!ele.container.hasClass('js-paragraph-anchor-list-auto'))return;var $list=$('<ul class="s-list"></ul>');ele.container.find('.js-paragraph-anchor-block').each(function(index){var title=$(this).find('.js-paragraph-anchor-title').text(),id=$(this).attr('id');if(id==undefined){id='js-paragraph-anchor-block-'+index;$(this).attr('id',id);};$list.append('<li><a href="#'+id+'" smooth>'+title+'</a></li>');});ele.anchorList.append($list);},init=function(){ele.container=$('#js-paragraph-anchor');if(ele.container.length<=0)return;ele.anchorList=ele.container.find('.js-paragraph-anchor-list');ele.anchorBlock=ele.container.find('.js-paragraph-anchor-content');initAnchorList();initFixBar();}();}(),initSupport=function(){var initSupportFooter=function(){var $download=$('.js-support-footer .js-redirect');if($download.length<=0)return;$download.on('click',function(event){event.preventDefault();var newwindow=window.open("/about/policies/disclaimer.cfm?url="+$(this).attr('href'),'disclaimer','height=800,width=500,scrollbars=1,resizable=1');newwindow.moveTo(0,0);return false;});}();}(),initNamingConvention=function(){if(jQuery('#product-naming-conventions').length<=0)return;jQuery('.js-append-icon-info-circle a').prepend('<i class="fa fa-info-circle" style="color:#faab1a;font-size: 1.1em;margin-right: 0;"></i>');jQuery(document).on('click','#product-naming-conventions a.naming-convention',function(){var link=jQuery(this).attr('href');jQuery("#overlay").show();jQuery('#slidedown-overlay .overlay-content').html("<iframe style='border: 0;width: 100%;height: 100%;' src='"+link+"'></iframe>");disablePageScrolling();return false;});}(),setSupport24Hour=function(){var ele={};ele.container=jQuery('#js-form-24hour');if(ele.container.length<=0)return;ele.sn=ele.container.find('#sn');ele.loading=ele.container.find('.loading');var showResult=function(msg){var errorMsg='\
                <div class="s-panel-outline white-bg js-sn-result">\
                <h3>Serial Number Not Found</h3>\
                <p>The Serial Number is not found in our records. For Technical Support please call 1-408-503-8000. It is our pleasure to support you.</p>\
                </div>\
                ',$obj=ele.container.find('.js-sn-result');if(msg.bIsSerialNumberFound===false)$obj.replaceWith(errorMsg).show();else{ele.container.hide();ele.container.next().show();$('.js-intro-superserver').hide();$('html, body').scrollTop(0);};ele.loading.hide();},fetchSN=function(sn){ele.loading.show();$.ajax({method:"GET",url:Drupal.url("external_db_block/support/sncheck?serialNum="+sn),dataType:"json"}).done(function(msg){showResult(msg);});},sendSearch=function(){var sn=ele.sn.val().trim();if(sn.length<=0){alert('You must enter a Product Serial Number!');return;};fetchSN(sn);},bindEvent=function(){ele.container.find('.btn').on('click',function(){sendSearch();});ele.container.find('.s-form').on('submit',function(){sendSearch();return false;});};bindEvent();}(),setLeaderShip=function(){var leadership=$('#leadership');if(leadership.length<=0)return;leadership.find('.swiper-wrapper').on('setPosition',function(){setTimeout(function(){leadership.find('.bio').width('');leadership.find('.bio').width(leadership.find('.bio').width());},500);});leadership.addClass('with-photo');$('#slidedown-overlay').addClass('with-photo');$('.overlay-content').addClass('with-photo');}(),setIntelBannerTag=function(){var getStr=function(hasText){var wording='',pageLanguage=document.documentElement.lang;if(hasText)switch(pageLanguage){default:wording='<div>Featuring 3rd Gen Intel® Xeon®</div><div>Scalable Processors</div>';break;case 'zh-hant':wording='<div>配备第三代 Intel® Xeon®</div><div>可擴充處理器</div>';break;case 'zh-hans':wording='<div>配备第三代 Intel® Xeon®</div><div>可扩展处理器</div>';break;case 'ja':wording='<div>第3世代 インテル® Xeon®</div><div>スケーラブル・プロセッサー対応</div>';break;case 'de':wording='<div>Ausgestattet mit skalierbaren</div><div> Intel® Xeon® Prozessoren der 3.</div>';break;};return '\
                <div class="bb-container s-intel-tag">\
                    <div class="s-intel-tag-innter">\
                        <div class="s-intel-tag-box">'+wording+'\
                            <img class="lazy" data-src="/sites/default/files/icons/Intel-Xeon-Platinum-2021.jpg"></div>\
                        </div>\
                    </div>\
                </div>';};$('.js-attach-intel-tag').append(getStr(true));$('.js-attach-intel-tag-pic-only').append(getStr(false));}(),setEStoreBannerLink=function(){var matchPath=function(urlFragment){var currentPath=window.location.pathname,urlPrefixRegExpString="^\/(en|zh_tw|zh_cn|ja|de)\/products\/",fullRegExp=new RegExp(urlPrefixRegExpString+urlFragment);return currentPath.match(fullRegExp);},isTestingEnv=window.location.hostname==='dev.supermicro.com',eStoreOrigin=(isTestingEnv?'https://staging-store.supermicro.com':'https://store.supermicro.com'),linkHref='';if(matchPath('ultra'))linkHref=eStoreOrigin+'/systems/ultra-servers.html';else if(matchPath('mainstream'))linkHref=eStoreOrigin+'/systems/mainstream.html';else if(matchPath('storage'))linkHref=eStoreOrigin+'/systems/superstorage.html';else if(matchPath('superworkstation'))linkHref=eStoreOrigin+'/systems/superworkstation.html';else if(matchPath('wio'))linkHref=eStoreOrigin+'/systems/wio.html';else linkHref=eStoreOrigin+'/system.html';var htmlSnippet='\
                <div class="banner-button-note">Ready-to-Ship Systems</div>\
                <a class="btn" href="'+linkHref+'" target="_blank">Shop Now</a>';$('.with-estore-link .banner-buttons').prepend(htmlSnippet);}();Drupal.attachBehaviors(document,Drupal.settings);});})(jQuery);(function($){SMC_COMMON.tools.showLightBox=function(option){$.colorbox(option);};SMC_COMMON.tools.showLightBoxForLink=function(url){SMC_COMMON.tools.showLightBox({href:url});return false;};SMC_COMMON.tools.showLightBoxForVideo=function(url){SMC_COMMON.tools.showLightBox({iframe:true,width:'900px',height:'600px',maxWidth:'100%',maxHeight:'90%',href:url});return false;};SMC_COMMON.tools.htmlEncode=function(str){return String(str).replace(/</g,'&lt;').replace(/'/g,'&#39;').replace(/"/g,'&quot;').replace(/>/g,'&gt;').replace(/&/g,'&amp;');};SMC_COMMON.tools.getUrlParameter=function(){var parameterMap={},searchParams=new URLSearchParams(location.search);searchParams.forEach(function(value,key){parameterMap[key]=SMC_COMMON.tools.htmlEncode(value);});return parameterMap;};})(jQuery);;
(function($){var $overview=$('#highlights'),setInnovationContent=function(){var $innovation=$overview.find('.expand-box-item .innovation .team-info .field__item'),$innovationList=$innovation.find('.expand-box-summary').clone().removeClass('expand-box-summary'),innovationContentTemplate='\
        <a class="expand-box-control expand-box-show-more btn btn-sm btn-outline" href="javascript:;">Learn more</a>\
        <a class="expand-box-control expand-box-show-less close-icon" href="javascript:;"></a>\
        <a class="expand-box-control expand-box-show-less btn" href="javascript:;">Close</a>\
        <div class="expand-box-detail"></div>\
        ',$innovationContent=$(innovationContentTemplate);$innovation.append($innovationContent);$innovation.find('.expand-box-detail').append($innovationList);$innovation.find('.loading').hide();},setOverviewEffects=function(){var $expandBox=$overview.find('.row');$expandBox.css({'max-height':$expandBox.outerHeight()+'px'});$expandBox.find('.expand-box-show-more').on('click',function(){var box=$(this).closest(".expand-box"),boxIndex=$(this).closest(".expand-box-item").index()+1;box.addClass('expand-box-expand-'+boxIndex);});$expandBox.find('.expand-box-show-less').on('click',function(){var box=$(this).closest(".expand-box"),boxIndex=$(this).closest(".expand-box-item").index()+1;box.removeClass('expand-box-expand-'+boxIndex);if(!$(this).hasClass('btn'))return;var $viewSection=$(this).closest('.gsc-column');jQuery('html, body').animate({scrollTop:$viewSection.offset().top-200},0);});$(window).resize(function(){$expandBox.css({'max-height':'none'});$expandBox.css({'max-height':$expandBox.outerHeight()+'px'});});},setOverviewBlock=function(){setInnovationContent();setOverviewEffects();};setOverviewBlock();})(jQuery);;
(function($){jQuery(document).ready(function(){function setHelpMessage(){var $successMessage=$('.main .help .messages__wrapper .messages');if($successMessage.length>0)setTimeout(function(){$successMessage.parent().fadeOut();},3e3);};setHelpMessage();function getContactPath(formUrl){var currentPath=location.pathname+location.search+location.hash;if(currentPath=='/'||currentPath=='/'+drupalSettings.path.currentLanguage||currentPath=='/'+drupalSettings.path.currentLanguage+'/')currentPath='';currentPath=currentPath.replace('/'+drupalSettings.path.pathPrefix,'');if(currentPath.substr(0,1)=='/')currentPath=currentPath.substr(1,currentPath.length-1);currentPath=Drupal.url(currentPath);if(formUrl=='')formUrl='contact';if(formUrl.substr(0,1)=='/')formUrl=formUrl.substr(1,formUrl.length-1);if(formUrl.indexOf('?destination')<0)return Drupal.url(formUrl+'?destination='+encodeURIComponent(currentPath));else return Drupal.url(formUrl);}function setContact(){var setContactLink=function(){var $links=$('.js-link-contact-form,a[href*=jsLinkContactForm]');if($links.length<=0)return;$links.each(function(index){var formUrl=$(this).attr('href');if(formUrl=='#jsLinkContactForm')formUrl='';formUrl=formUrl.split('#')[0];var contactPath=getContactPath(formUrl);$(this).attr('href',contactPath);$(this).addClass('use-ajax');$(this).data('dialog-type','dialog').data('dialog-renderer','off_canvas').data('dialog-options',{width:500});});},setOffCanvas=function(){if(Drupal.offCanvas==undefined)return;clearInterval(checkOffCanvasTimer);setContactLink();$(window).on('dialog:aftercreate',function(){var $form=$('#drupal-off-canvas .feedback-form'),$textPath=$form.find('.field--name-field-path textarea');if($textPath.length>=0)$textPath.val(location.pathname);$form.find('.btn.button.button--primary').removeClass('button button--primary');});Drupal.attachBehaviors(document,Drupal.settings);};$(document).on('smc.contact.loadHubSpot',function(event,callback){console.log('smc.contact.loadHubSpot');$.ajax({type:"GET",url:"https://js.hsforms.net/forms/v2.js",dataType:"script",cache:true,beforeSend:function(){if(window.hubspot&&window.hubspot.form)return false;}}).always(function(){if(window.hubspot&&window.hubspot.form)callback();});});var checkOffCanvasTimer=setInterval(setOffCanvas,300);};setContact();});})(jQuery);;
(function($){"use strict";var throttle=function(type,name,obj){obj=obj||window;var running=false;var func=function(){if(running)return;running=true;requestAnimationFrame(function(){obj.dispatchEvent(new CustomEvent(name));running=false;});};obj.addEventListener(type,func);};throttle("resize","optimizedResize");jQuery(document).ready(function(){function disableHoverOnScroll(){let hoverDisabledTimer;const $productLines=$('.product-lines-cols-3.hover-style');const hoverDisabledClass='hover-disabled';if($productLines.length===0)return;window.addEventListener('scroll',function(){if(window.matchMedia('(min-width: 768px)').matches){clearTimeout(hoverDisabledTimer);if(!$productLines.hasClass(hoverDisabledClass))$productLines.addClass(hoverDisabledClass);hoverDisabledTimer=setTimeout(function(){$productLines.removeClass(hoverDisabledClass);},500);}},false);}const $productLinesBlock=document.querySelector('.product-lines-cols-3');const $gridContainer=(!$productLinesBlock?null:$productLinesBlock.querySelector('.block-content'));function equalizeHeights($gridContainer){const $cards=$gridContainer.querySelectorAll('.gsc-column');const elementSelectorsToEqualize=['.team-name','.team-info h4'];if(!$productLinesBlock.classList.contains('hover-style'))elementSelectorsToEqualize.push('.team-info .s-list');elementSelectorsToEqualize.forEach(function(selectorString){$cards.forEach(function($card){const $content=$card.querySelector(selectorString);$content.style.height=null;});});if(window.matchMedia('(min-width: 768px)').matches)elementSelectorsToEqualize.forEach(function(selectorString){const largestHeight=[...$cards].reduce((largestHeight,$card)=>{const rect=$card.querySelector(selectorString).getBoundingClientRect();const height=rect.height;if(height>largestHeight)return height;else return largestHeight;},0);$cards.forEach(function($card){$card.querySelector(selectorString).style.height=largestHeight+'px';});});}const $prodLinesContainer=$(".product-lines-cols-3");const $slideElem=$prodLinesContainer.find(".block-content");let slideBool=false;const slideBreakptMobileFirstSm=767;const slideBreakptMd=992;let slideSettings={mobileFirst:true,responsive:[{breakpoint:slideBreakptMobileFirstSm,settings:"unslick"},{breakpoint:0,settings:{draggable:false,slidesToShow:1,slidesToScroll:1,autoplay:false,autoplaySpeed:10000,infinite:true,arrows:true,dots:true,speed:150}}]};if($prodLinesContainer.hasClass('carousel-desktop'))slideSettings={dots:true,speed:300,slidesToShow:3,slidesToScroll:3,draggable:false,autoplay:false,autoplaySpeed:10000,infinite:true,arrows:true,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,speed:150}}]};function slideInit(){if($prodLinesContainer.hasClass('carousel-desktop')||window.innerWidth<=slideBreakptMobileFirstSm)if(slideBool==false){$slideElem.not('.slick-initialized').slick(slideSettings);slideBool=true;slideBool=false;}}if($('.product-lines-cols-3').length>0){slideInit();disableHoverOnScroll();equalizeHeights($gridContainer);window.addEventListener('optimizedResize',function(){slideInit();setTimeout(function(){equalizeHeights($gridContainer);},100);});}else{if($('#product-lines img.img-responsive').length>0){var lazyAttr='';$('#product-lines img.img-responsive').each(function(){lazyAttr=$(this).attr('data-lazy');if(typeof lazyAttr!==typeof undefined&&lazyAttr!==false)$(this).attr('data-src',lazyAttr).addClass('lazy').removeAttr('data-lazy');});}}});})(jQuery);;
var ptCompare={};(function($){ptCompare.history={};ptCompare.history.setting={localStorageID:'ptCompare',family:'',compareItems:[],allCompareItems:{systems:[],motherboards:[],chassis:[]},maxLimit:4,compareWindow:null,highlightDiff:true};ptCompare.history.getSetting=function(){var $ele=$('.js-ptCompare-setting');if($ele.length<=0)return;var familySeries=$ele.data('family-series');if(familySeries=='system')familySeries='systems';ptCompare.history.setting.family=familySeries;var defaultStoreSetting={systems:[],motherboards:[],chassis:[]},storeSetting=localStorage.getItem(ptCompare.history.setting.localStorageID)||'{}';storeSetting=JSON.parse(storeSetting);if(storeSetting.allCompareItems!=undefined)for(var key in ptCompare.history.setting.allCompareItems)if(storeSetting.allCompareItems.hasOwnProperty(key))ptCompare.history.setting.allCompareItems[key]=storeSetting.allCompareItems[key];ptCompare.history.setting.compareItems=ptCompare.history.setting.allCompareItems[ptCompare.history.setting.family];var arr=ptCompare.history.setting.compareItems;const specChars=['(',')','/'];for(var i=0;i<arr.length;i++)for(var j=0;j<specChars.length;j++)if(arr[i]["sku"].indexOf(specChars[j])!==-1)ptCompare.history.removeProduct(arr[i]["sku"]);if(storeSetting.highlightDiff!=undefined)ptCompare.history.setting.highlightDiff=storeSetting.highlightDiff;};ptCompare.history.storeSetting=function(){ptCompare.history.setting.allCompareItems[ptCompare.history.setting.family]=ptCompare.history.setting.compareItems;var storeSetting={allCompareItems:ptCompare.history.setting.allCompareItems,highlightDiff:ptCompare.history.setting.highlightDiff};localStorage.setItem(ptCompare.history.setting.localStorageID,JSON.stringify(storeSetting));};ptCompare.history.addProduct=function(skuFeature,successCallback,failCallback){if(!ptCompare.history.couldPushItem()){if(failCallback!=undefined)failCallback();return;};if(!ptCompare.history.hasProduct(skuFeature.sku)){ptCompare.history.setting.compareItems.push(skuFeature);ptCompare.history.storeSetting();};if(successCallback!=undefined)successCallback();};ptCompare.history.removeProduct=function(sku){var arrayRemove=function(arr,value){return arr.filter(function(ele){return ele.sku!=value;});};ptCompare.history.setting.compareItems=arrayRemove(ptCompare.history.setting.compareItems,sku);ptCompare.history.storeSetting();};ptCompare.history.clearProduct=function(){ptCompare.history.setting.compareItems=[];ptCompare.history.storeSetting();};ptCompare.history.couldPushItem=function(sku){if(ptCompare.history.setting.compareItems.length>=ptCompare.history.setting.maxLimit)return false;else return true;};ptCompare.history.hasProduct=function(sku){var arr=ptCompare.history.setting.compareItems;for(var i=0;i<arr.length;i++)if(arr[i].sku==sku)return true;return false;};ptCompare.history.getCompareItems=function(){return ptCompare.history.setting.compareItems;};ptCompare.history.goCompareMatrixPage=function(proList,isNewOpen){var compareWindow=ptCompare.history.setting.compareWindow;if(proList==null){proList=[];var compareItems=ptCompare.history.setting.compareItems;for(var i=0;i<compareItems.length;++i)proList.push(compareItems[i].sku);};var str=[];for(var i=0;i<proList.length;++i)str.push(encodeURIComponent(proList[i].replace('AS-','AS -').replace('_40',' (').replace('_41',')').replace('_47','/').replace('_','+')));var pageUrl,ifCFM=true;if($('#ptCompare-matrix-v2').length>0)ifCFM=false;else if($('#block-productcompareblock').length>0)ifCFM=true;else{if($('.js-ptCompare-setting').length>0)if($('.js-ptCompare-setting').attr('data-family-series')==='systems'){ifCFM=false;$('.selected-product-list a').each(function(){if($(this).attr('href').indexOf('.cfm')!==-1){ifCFM=true;return false;}});}};if(ifCFM)pageUrl=Drupal.url('products/compare?sku='+str.join(','));else pageUrl=Drupal.url('products/system/compare?sku='+str.join(','));if(isNewOpen==true){if(compareWindow!==null)compareWindow.close();compareWindow=window.open(pageUrl,'smc-product-compare');compareWindow.focus();}else document.location.href=pageUrl;};ptCompare.history.setHighlightStatus=function(status){ptCompare.history.setting.highlightDiff=status;ptCompare.history.storeSetting();};ptCompare.history.getHighlightStatus=function(){return ptCompare.history.setting.highlightDiff;};ptCompare.history.attachHandler=function(){$(window).on('focus',function(event){var $ele=$('.js-ptCompare-setting');if($ele.length<=0)return;ptCompare.history.getSetting();$(document).trigger('ptCompare.compareTray.renderLayout');$(document).trigger('ptCompare.productSelector.renderChosenGroupState');});};ptCompare.init=function(){ptCompare.history.getSetting();ptCompare.history.attachHandler();}();})(jQuery);(function($){ptCompare.productSelector={};function attachHandler(){$(document).on('click','.js-ptCompare-chosen .js-ptCompare-control',function(event){var $target=$(event.target),$targetProduct=$target.closest('.js-ptCompare-chosen'),sku=$targetProduct.data('sku');if($target.prop('checked')){var srcType=($('.child-elem').length==0)?'src':'data-src',productFeature={sku,specUrl:$targetProduct.find('a').attr('href'),specImg:$targetProduct.find('.product-image-hover-box img').attr(srcType)};ptCompare.history.addProduct(productFeature,function(){renderChosenState($targetProduct,true);renderChosenLimitState();$(document).trigger('ptCompare.compareTray.renderLayout');},function(){renderChosenState($targetProduct,false);renderChosenLimitState();});}else{ptCompare.history.removeProduct(sku);renderChosenState($targetProduct,false);renderChosenLimitState();$(document).trigger('ptCompare.compareTray.renderLayout');}});$(document).on('ptCompare.productSelector.renderChosenGroupState',function(){renderChosenGroupState();});}function renderChosenState($targetProduct,checked){if(checked){$targetProduct.addClass('js-ptCompare-chosen-selected');$targetProduct.find('.js-ptCompare-control').prop('checked',true);}else{$targetProduct.removeClass('js-ptCompare-chosen-selected');$targetProduct.find('.js-ptCompare-control').prop('checked',false);}}function renderChosenGroupState(){var proList=ptCompare.history.getCompareItems();$('.js-ptCompare-chosen.js-ptCompare-chosen-selected').each(function(){renderChosenState($(this),false);});for(var i=0;i<proList.length;++i){var $obj=$('#'+proList[i].sku.replace('+','_')+'.js-ptCompare-chosen');renderChosenState($obj,true);};renderChosenLimitState();}function renderChosenLimitState(){if(ptCompare.history.couldPushItem()){$('body').removeClass('js-ptCompare-limit');$('.js-ptCompare-chosen:not(.js-ptCompare-chosen-selected)').find('.js-ptCompare-control').prop('disabled',false);}else{$('body').addClass('js-ptCompare-limit');$('.js-ptCompare-chosen:not(.js-ptCompare-chosen-selected)').find('.js-ptCompare-control').prop('disabled',true);}}function init(){attachHandler();renderChosenGroupState();};init();})(jQuery);(function($){var $container=$('#compare-tray'),compareWindow=null,historyCompareNum=null;function attachHandler(){$(document).on('ptCompare.compareTray.renderLayout',function(){renderLayout();});$container.on('click','.js-ptCompare-remove',function(event){var sku=$(this).closest('.js-ptCompare-product').data('sku');ptCompare.history.removeProduct(sku);renderLayout();$(document).trigger('ptCompare.productSelector.renderChosenGroupState');});$container.on('click','.js-ptCompare-remove-all',function(event){ptCompare.history.clearProduct();renderLayout();$(document).trigger('ptCompare.productSelector.renderChosenGroupState');});$container.on('click','.js-ptCompare-view-items',function(event){showCompareItems();});$container.on('click','.js-ptCompare-go',function(event){ptCompare.history.goCompareMatrixPage(null,true);});}function getProductTempHtml(){return '\
        <div class="selected-product js-ptCompare-product" data-sku="%sku%">\
            <div class="close-compare js-ptCompare-remove"><i class="fa fa-times-circle-o"></i></div>\
            <a href="%specUrl%" target="smc-spec">\
                <div class="product-image-hover-box">\
                    <img src="%specImg%">\
                </div>\
                <span class="compare-sku">%title%</span>\
            </a>\
        </div>\
        ';}function renderLayoutForList(){var proList=ptCompare.history.getCompareItems(),htmlTemp=getProductTempHtml(),str='';for(var i=0;i<proList.length;++i){var productInfo=htmlTemp;productInfo=productInfo.replace('%sku%',proList[i].sku);productInfo=productInfo.replace('%specImg%',proList[i].specImg);productInfo=productInfo.replace('%specUrl%',proList[i].specUrl);productInfo=productInfo.replace('%title%',proList[i].sku.replace('AS-','AS -').replace('_40',' (').replace('_41',')').replace('_47','/').replace('_','+'));str+=productInfo;};$container.find('.js-ptCompare-compare-items').html(str);}function renderLayout(){var proList=ptCompare.history.getCompareItems();renderLayoutForList();$container.find('.js-ptCompare-total').text(proList.length);$container.find('.js-ptCompare-total-max').text(ptCompare.history.setting.maxLimit);if(proList.length>0){$container.show();$container.find('.js-ptCompare-view-items').show();}else{$container.fadeOut(200);$container.find('.js-ptCompare-view-items').removeClass('more').hide();$container.find('.js-ptCompare-compare-items').hide();};if((historyCompareNum==0)&&(proList.length==1))setTimeout(function(){$container.addClass('hvr-wobble-vertical');},200);historyCompareNum=proList.length;}function showCompareItems(isShow){$container.find('.js-ptCompare-view-items').toggleClass('more');$container.find('.js-ptCompare-compare-items').slideToggle();}function init(){if($container.length<=0)return;attachHandler();renderLayout();};init();})(jQuery);(function($){var $container=$('.js-ptCompare-matrix'),ele={},windowWidth;function reLoadPageForDelete(sku){var proList=[];$container.find('.js-ptCompare-product').each(function(){var proSku=$(this).data('sku');if(proSku!=sku)proList.push($(this).data('sku'));});if(proList.length<=0){reLoadPageForDeleteAll();return;};ptCompare.history.goCompareMatrixPage(proList,false);}function reLoadPageForDeleteAll(){if(window.opener!=null){window.close();window.opener.focus();return;};var familyName=$container.find('.js-ptCompare-product:first-of-type .family').text();if(familyName.length<=0)familyName=$('.js-ptCompare-setting').data('family-name');window.location='/'+drupalSettings.path.currentLanguage+'/products/'+familyName;}function highlightDiff(isShowDiff){$container.find('.js-ptCompare-highlight').prop('checked',isShowDiff);if(!isShowDiff){$container.find('.compare-diff').removeClass('compare-diff');return;};var $rows=$container.find('.compare-row:not(.image-row)');$rows.each(function(){var $items=$(this).find('.compare-feature-title').next().find('.compare-feature-value'),diffRec=new Array($items.length),max=0;for(var i=0;i<diffRec.length;i++){diffRec[i]=0;for(var j=0;j<diffRec.length;j++){if(i==j)continue;if($($items[i]).text()==$($items[j]).text())diffRec[i]=diffRec[i]+1;};if(diffRec[i]>max)max=diffRec[i];};var rec,start=0;if(diffRec.length==2)start=1;for(var i=start;i<diffRec.length;i++){var isDiff=false;if(diffRec[i]<=0)isDiff=true;if(diffRec[i]<max)isDiff=true;if(diffRec.join('')=='1111')isDiff=true;if(isDiff==true)$($items[i]).closest('.compare-row').addClass('compare-diff');}});}function attachHandler(){$container.on('click','.js-ptCompare-remove',function(event){var sku=$(this).closest('.js-ptCompare-product').data('sku');ptCompare.history.removeProduct(sku);reLoadPageForDelete(sku);});$container.on('click','.js-ptCompare-remove-all',function(event){ptCompare.history.clearProduct();reLoadPageForDeleteAll();});$container.on('click','.js-ptCompare-highlight',function(event){var status=$(this).prop('checked');highlightDiff(status);ptCompare.history.setHighlightStatus(status);});$container.on('click','.js-ptCompare-print',function(event){window.print();});}function attachHandlerForScroll(){ele.scrollLeft.on('click',function(){var itmeWidth=$('.js-ptCompare-product:first-of-type').outerWidth();ele.scroll.animate({scrollLeft:ele.scroll.scrollLeft()-itmeWidth},500);checkArrowShow();});ele.scrollRight.on('click',function(){var itmeWidth=$('.js-ptCompare-product:first-of-type').outerWidth();ele.scroll.animate({scrollLeft:ele.scroll.scrollLeft()+itmeWidth},500);checkArrowShow();});ele.scroll.on('scroll',function(){checkArrowShow();});$(window).on('resize',function(){if($(window).width()==windowWidth)return;windowWidth=$(window).width();ele.scroll.scrollLeft(0);checkArrowShow();});}function checkArrowShow(){var itmeWidth=$('.js-ptCompare-product:first-of-type').outerWidth(),totalWidth=($('.js-ptCompare-product').length*itmeWidth)+150-2,maxWidth=totalWidth-ele.scroll.outerWidth(),currentPosition=ele.scroll.scrollLeft();if(totalWidth<=ele.scroll.innerWidth()){ele.scrollRight.hide();ele.scrollLeft.hide();}else{ele.scrollRight.show();ele.scrollLeft.show();};if(currentPosition>=maxWidth)ele.scrollRight.prop('disabled',true);else ele.scrollRight.prop('disabled',false);if(currentPosition<=0)ele.scrollLeft.prop('disabled',true);else ele.scrollLeft.prop('disabled',false);}function renderScrollEffects(){ele.scrollLeft=$('<button class="s-btn-clear scroll-prev scroll-arrow js-scroll-prev"><i class="fa fa-angle-left"></i></button>');ele.scrollRight=$('<button class="s-btn-clear scroll-next scroll-arrow js-scroll-next"><i class="fa fa-angle-right"></i></button>');ele.scrollBox=$container;ele.scroll=ele.scrollBox.find('.product-compare-scroll');ele.scrollBox.find('.product-compare-main').append(ele.scrollLeft);ele.scrollBox.find('.product-compare-main').append(ele.scrollRight);checkArrowShow();}function renderLayout(){if(ptCompare.history.getHighlightStatus())highlightDiff(true);renderScrollEffects();}function init(){if($container.length<=0)return;renderLayout();attachHandler();attachHandlerForScroll();};init();})(jQuery);(function($){"use strict";jQuery(document).ready(function(){var $imageRow=$(".product-compare-main .image-row"),width=$imageRow.width();if($imageRow.length<=0)return;function initSticky(){return new Waypoint.Sticky({element:$('.product-compare-main .image-row')[0],stuckClass:'image-stuck',handler:function(direction){if(direction==='down')jQuery(".product-compare-main .image-row.image-stuck").width(width);else jQuery(".product-compare-main .image-row").css('width','');},offset:100});};$(window).resize(function(){if(sticky!=undefined)sticky.destroy();jQuery(".product-compare-main .image-row").css('width','');width=$imageRow.width();if($(window).innerWidth()>1200&&$(".product-compare-main .sticky-wrapper").length==0)sticky=initSticky();});$(window).scroll(function(){if($(window).innerWidth()>1200&&$(window).scrollTop()<(parseInt($(".product-compare-main").css('margin-top'))+$(".product-compare-main").outerHeight()-$('.image-row').outerHeight())){if($(".product-compare-main .sticky-wrapper").length==0)sticky=initSticky();}else{if(sticky!=undefined)sticky.destroy();jQuery(".product-compare-main .image-row.image-stuck").removeClass('image-stuck');}});var sticky;if($(window).innerWidth()>1200)sticky=initSticky();});})(jQuery);;
(function($){var setting={isAllow:false,allowSku:null};function getSkuFromSpecPage(){var str=window.location.pathname.split('/');str=str[str.length-1].toUpperCase();str=str.replace('_','+');str=str.replace('.CFM','');str=str.replace(/^AS-/,'AS -');if(str.length>=30)return '';return str;}function renderContactForm($link){$link.addClass('use-ajax');$link.data('dialog-type','dialog').data('dialog-renderer','off_canvas').data('dialog-options',{width:500});}function renderLayoutForProduct(){return;if(!setting.isAllow)return;var $container=$('.product-selector[data-family-series=systems]');if($container.length<=0)return;var $products=$container.find('.js-direct-shop-systems');if($products.length<=0)return;$products.css('display','inline-block');$.each(setting.allowSku,function(key,value){$(".js-direct-shop-systems[data-sku='"+key+"']").addClass('js-buy-now').attr('href',value.replace('?utm=smcpp','?utm_source=corp&utm_medium=smcpp')).find('.btn div').text('Buy Now');});$(".js-direct-shop-systems:not(.js-buy-now)").each(function(index){renderContactForm($(this));});}function renderLayoutForSpecPage(){if((!setting.isAllow)||(setting.allowSku==null))return;if(location.href.indexOf('system')<0)return;var $container=$('.spec-key-features.spec-table');if($container.length<=0)return;var generateBtn=function(url,str){return jQuery('<a class="shop-systems enterprise btn" href="'+url+'" target="_blank">'+str+'</a>');};var generateBtnForGetPrice=function(){var $link=generateBtn(Drupal.url('contact/get_pricing'),'Get Pricing');return $link;};var generateBtnForBuyNow=function(sku){var $link=generateBtn(setting.allowSku[sku],'Buy Now');return $link;};var generateBtnForAddToCart=function(sku){var $link=generateBtn('javascript:;','');$link.attr('id','smc-configurator-addtocart');$link.attr('disabled','');$link.removeAttr('target');$link.html('<div class="ajax-progress ajax-progress-throbber"><div class="ajax-progress-throbber"><div class="throbber" style="color: #a7a8a9;"></div></div></div>');return $link;};var generateBtnForJumpStart=function(sku){var getJumpStartUrl=function(sku){if(sku=='AS -2025HS-TNR'||sku=='AS -2015CS-TNR'||sku=='SYS-111C-NR'||sku=='SYS-621H-TN12R')return (sku=='SYS-111C-NR'||sku=='SYS-621H-TN12R')?'jumpstart/x13':'jumpstart/h13';return '';};var url=getJumpStartUrl(sku);if(url!='')return generateBtn(Drupal.url(url),'Test Online');return null;};var generateBtnForPreOrder=function(sku){if(sku!=='SYS-751GE-TNRT-NV1')return null;var $link=generateBtn('https://store.supermicro.com/us_en/liquid-cooled-ai-development-platform-sys-751ge-tnrt-nv1-pre-config.html','Buy Now');return $link;};function attachJSfile(url){var fileref=document.createElement('script');fileref.setAttribute("type","text/javascript");fileref.setAttribute("src",url);fileref.async=false;document.getElementsByTagName("head")[0].appendChild(fileref);}var attachSystemBuilder=function(email){var domain=window.location.hostname;var trackURL='https://www.supermicro.com/en/products/system/recordbuyanalytics';if(domain.indexOf('staging.supermicro.com')==0)domain+='/frontend/ss';else domain+='/frontend';jQuery('.row.part-list').after(jQuery('<div class="more" rel="system-builder-more"><span>Configure & Buy</span> <i class="fa fa-angle-down"></i></div><div class="row system-builder" style="display: none;"><div id="smc-configurator-widget" app="estore"></div></div>'));jQuery('.tab-menu-more .tab-specs-more').after(jQuery('<span rel="system-builder-more" class="tab-system-builder-more">Configure & Buy</span>'));attachJSfile("//"+domain+"/configurator/react-helper.js");attachJSfile("//"+domain+"/configurator/configurator-widget.js");if(window.location.hostname.indexOf('www.supermicro.com')!=0)trackURL='https://staging.supermicro.com/en/products/system/recordbuyanalytics';jQuery('.tab-menu-more').on('click','.tab-system-builder-more',function(){jQuery.ajax({type:'POST',url:trackURL,data:{userEmail:email,source:jQuery(location).attr("href"),_token:$("meta[name='csrf-token']").attr("content")},success:function(response){},error:function(xhr,ajaxOptions,thrownError){},complete:function(jqXHR,textStatus){}});});var showSystemBuilder=function(){jQuery('.tab-menu-more span.active').removeClass('active');jQuery('.more.less').next().removeClass('active-tab').hide();jQuery('.tab-menu-more .tab-system-builder-more').addClass('active');jQuery('.more[rel="system-builder-more"]').next().addClass('active-tab');};document.addEventListener('show.systembuilder',(e)=>{showSystemBuilder();});var checkURLParameters=function(){const pageURL=new URL(window.location.href);const params=new URLSearchParams(pageURL.search);if(params.toString()!=params.toString().replace(/(<([^>]+)>)/gi,' '))return;if((params.has('tab')&&params.get('tab')=='config')||jQuery('.call-show-system-builder').length>0){if(jQuery('.call-show-system-builder').length>0)jQuery('.call-show-system-builder').removeClass('call-show-system-builder');showSystemBuilder();}};checkURLParameters();};var attachBtn=function(){var sku=getSkuFromSpecPage();var $link=jQuery('.shop-systems-block');if($link.val()!==undefined)$link.remove();var $box=jQuery('<div class="shop-systems-block"></div>');$container.find('.key-feature-list').append('');$container.find(' > tbody > tr > td').append($box);var $linkJumpStart=generateBtnForJumpStart(sku);var $linkPreOrder=generateBtnForPreOrder(sku);if(setting.allowSku[sku]==undefined){if($linkPreOrder===null){$box.append(generateBtnForGetPrice());renderContactForm($box.find('a.shop-systems'));Drupal.attachBehaviors(document,Drupal.settings);}else $box.append($linkPreOrder);if($linkJumpStart!==null)$box.append($linkJumpStart);jQuery(document).trigger('smc.spec.setFeaturesColEqualHeight');}else{var generateLayoutForOutsideUser=function(){$box.append(generateBtnForBuyNow(sku));if($linkJumpStart!==null)$box.append($linkJumpStart);jQuery(document).trigger('smc.spec.setFeaturesColEqualHeight');};var generateLayoutForInsideUser=function(email){var userEmail=(email!==null)?email:'anonymous@supermicro.com';var $linkAddToCart=generateBtnForAddToCart(sku);$box.append($linkAddToCart);if($linkJumpStart!==null)$box.append($linkJumpStart);jQuery(document).trigger('smc.spec.setFeaturesColEqualHeight');setTimeout(function(){attachSystemBuilder(userEmail);},300);};var isNonUSProduct=function(sku){return ('AS -1124US-TNR,AS -4124GS-TNR,SSG-520P-ACTR12L,SSG-640P-E1CR36H,SYS-620P-TRT,SYS-E100-9W-C'.indexOf(sku)>=0)?true:false;};if(jQuery('.tab-menu').val()!==undefined){if(setting.isAllowUser){generateLayoutForInsideUser(null);return;}generateLayoutForOutsideUser();}else generateLayoutForOutsideUser();}};attachBtn();}function renderLayoutForProductSelectorFilter(){return;if(!setting.isAllow)return;var $container=$('.product-selector[data-family-series=systems]');if($container.length<=0)return;if($container.data('family-name')=='gpu')return;$container.find('.sidebar-left .sidebar-inner').append('<a class="shop-systems" href="https://store.supermicro.com/system.html" target="_blank">Shop Systems &gt;&gt;</a>');}function renderLayoutForMenu(){if(!setting.isAllow)return;if(window.location.hostname.indexOf('super-opweb')!=-1||window.location.hostname.indexOf('onsite')!=-1)return;var $menu=$('<li class="menu-item"><a href="https://store.supermicro.com/system.html?utm_source=corp&utm_medium=headersystem"><span>Shop Quick Ship Systems</span></a></li>');$('#header .menu-item.where-to-buy .sub-menu').append($menu);}function renderLayoutForHeader(){if(!setting.isAllowUser)return;var attachHeaderShopIcon=function(){const reloadCustomerData=new CustomEvent('reload.customer-data',{detail:{sections:['cart']}});document.dispatchEvent(reloadCustomerData);$('.js-addition-menu-item.cart').show();};attachHeaderShopIcon();}function renderSystemShopLayout(){if(!setting.isAllow)return;attachHandler();renderLayoutForMenu();renderLayoutForProductSelectorFilter();renderLayoutForProduct();renderLayoutForSpecPage();renderLayoutForHeader();}function parseRegionInfo(shop){setting.isAllow=true;if(shop!=null){setting.app=shop.app;setting.isIntranet=shop.isIntranet;setting.isLogin=shop.isLogin;setting.isAllowUser=((shop.isIntranet||shop.isLogin)&&shop.app.toLowerCase()=='estore')?true:false;setting.allowSku={};if(shop.skuUrl){$.each(shop.skuUrl,function(key,value){setting.allowSku[key]=value;});return;}}}function attachHandler(){$(document).on('smc.shopSystem.renderLayoutForProduct',function(){renderLayoutForProductSelectorFilter();renderLayoutForProduct();});$(document).on('smc.shopSystem.renderLayoutForSpecPage',function(){renderLayoutForSpecPage();});$(document).on('smc.shopSystem.renderLayout',function(event,callback){callback(setting);});}function initSystemShop(){$.getJSON("/configuratorapi/estore/url").done(function(data2){parseRegionInfo(data2);renderSystemShopLayout();}).fail(function(){console.log('get estore url error');});}function init(){initSystemShop();}$(document).ready(function(){init();});})(jQuery);;
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint();};var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e);},this)}));},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0];},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap());},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t;}();;
(function($){"use strict";jQuery(document).ready(function(){if(jQuery('#systems .gsc-column').length>8){jQuery('#systems .gsc-column:gt(7)').hide();jQuery('#systems .row').append("<div class='more'>Show more <i class='fa fa-angle-down'></i></div");jQuery('.more').on('click',function(){if(jQuery(this).hasClass('less')){jQuery('#systems .gsc-column:gt(7)').slideUp();jQuery(this).html("Show more <i class='fa fa-angle-down'></i>").removeClass('less');}else{jQuery('#systems .gsc-column:gt(7)').slideDown();jQuery(this).html("Show less <i class='fa fa-angle-up'></i>").addClass('less');}});};jQuery('<div class="header-overlay"></div>').insertAfter('.header-main.front-page');$('.swiper-wrapper').on('init',function(event,slick){var $firstBanner=$('[data-slick-index="0"]').find('.banner');if($firstBanner.hasClass('light-layer-banner')){$('.navigation .gva_menu > li > a').addClass('dark');$('header .front-page #shopping-cart-layer .cls-1').addClass('dark');$('header .front-page .gva-search-region .icon .search .st0').addClass('dark');$('.header-overlay').addClass('light');};if(!$firstBanner.hasClass('no-overlay-banner'))$('.header-overlay').show();});$('.header-overlay').show();$('.swiper-wrapper').on('beforeChange',function(event,slick,currentSlide,nextSlide){var $banner=$("[data-slick-index="+nextSlide+"]").find('.banner');if($banner.hasClass('light-layer-banner')){$('.navigation .gva_menu > li > a').addClass('dark');$('header .front-page #shopping-cart-layer .cls-1').addClass('dark');$('header .front-page .gva-search-region .icon .search .st0').addClass('dark');$('.header-overlay').addClass('light');}else{$('.navigation .gva_menu > li > a').removeClass('dark');$('header .front-page #shopping-cart-layer .cls-1').removeClass('dark');$('header .front-page .gva-search-region .icon .search .st0').removeClass('dark');$('.header-overlay').removeClass('light');};if($banner.hasClass('no-overlay-banner'))$('.header-overlay').hide();else $('.header-overlay').show();});$('#computex-video-btn').click(function(){$('.swiper-wrapper').slick('slickPause');});var slideElem=$("#systems .row.row-eq-height"),slideBool=false,slideBreakpt=768,slideSet={mobileFirst:true,responsive:[{breakpoint:slideBreakpt,settings:"unslick"},{breakpoint:0,settings:{lazyLoad:'ondemand',slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:1e4,infinite:false,arrows:true,dots:true,speed:300}}]};function slideInit(){if(window.innerWidth<=slideBreakpt){if(slideBool==false){var rand=Math.floor(Math.random()*5);slideElem.on('afterChange',function(event,slick,direction){slideElem.addClass('slick-random-done');});slideElem.slick(slideSet);slideElem.slick('slickGoTo',rand);slideBool=true;}}else slideBool=false;};slideInit();$(window).resize(function(){slideInit();});var videoPlayIconHtml='<div class="video-play-icon"><img class="lazy" alt="video ‘play’ icon" data-src="/sites/default/files/homepage/VideoButtonGraphic.png"></div>';$('#systems .with-video-play-icon .team-header > a').attr('title','Play Video').append(videoPlayIconHtml);var renderGridlayout=function(){var ele=jQuery('#homepage-grid-2-1');if(ele.length<=0)return;ele.find('.column-inner[class*="panel-"]').each(function(){var imageFilename='';Array.prototype.some.call(this.classList,function(htmlClass){if(htmlClass.indexOf('panel-')>-1)imageFilename=htmlClass;});var backgroundImage='/sites/default/files/homepage/block-panel/'+imageFilename+'.jpg';jQuery(this).attr('data-bg',backgroundImage);});ele.find('.column-inner').addClass('lazy');}();});})(jQuery);;
(function($,drupalSettings){'use strict';Drupal.behaviors.lang_dropdown={attach:function(context,settings){settings=settings||drupalSettings;if(settings.lang_dropdown)$('select.lang-dropdown-select-element').each(function(){var $dropdown=$(this),key=$dropdown.data('lang-dropdown-id'),ldSettings=settings.lang_dropdown[key];if(ldSettings){var flags=ldSettings.languageicons;if(flags)$.each(flags,function(index,value){var option=$dropdown.find('option[value="'+index+'"]');if(ldSettings.widget==='msdropdown')option.attr('data-image',value);else{if(ldSettings.widget==='ddslick'&&Boolean(ldSettings.showSelectedHTML))option.attr('data-imagesrc',value);}});if(ldSettings.widget==='msdropdown')try{$dropdown.msDropDown({visibleRows:ldSettings.visibleRows,roundedCorner:Boolean(ldSettings.roundedCorner),animStyle:ldSettings.animStyle,event:ldSettings.event,mainCSS:ldSettings.mainCSS});}catch(e){if(console)console.log(e);}else if(ldSettings.widget==='chosen')$dropdown.chosen({disable_search:ldSettings.disable_search,no_results_text:ldSettings.no_results_text});else{if(ldSettings.widget==='ddslick'){$.data(document.body,'ddslick'+key+'flag',0);$dropdown.ddslick({width:ldSettings.width,height:(ldSettings.height===0)?null:ldSettings.height,showSelectedHTML:Boolean(ldSettings.showSelectedHTML),imagePosition:ldSettings.imagePosition,onSelected:function(data,element){var i=jQuery.data(document.body,'ddslick'+key+'flag');if(i){$.data(document.body,'ddslick'+key+'flag',0);data.selectedItem.closest('form').submit();};$.data(document.body,'ddslick'+key+'flag',1);}});}}}});$('select.lang-dropdown-select-element').change(function(){$(this).closest('form').submit();});}};})(jQuery,drupalSettings);;
