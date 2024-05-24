!&&t){var u=function(a){var c=document.createElement("a");c.href=a;a=c.hostname.split(".");return-1!==a.indexOf("www")||2<a.length?a.slice(1).join("."):
c.hostname}(b);v.some(function(a){return a===u})&&(c=["C0004"])}return c}function g(b){return b&&window.OptanonActiveGroups&&b.every(function(b){return-1!==window.OptanonActiveGroups.indexOf(b)})}function l(b){return-1!==(b.getAttribute("class")||"").indexOf("optanon-category")}function m(b){return b.hasAttribute("data-ot-ignore")}var q=JSON.parse("[]"),t=JSON.parse("true"),v="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" "),
p=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,function(b){Array.prototype.forEach.call(b.addedNodes,function(a){var c,b;if(1===a.nodeType&&-1!==p.indexOf(a.tagName.toLowerCase())&&!l(a)&&!m(a))if("script"===a.tagName.toLowerCase()){if((b=h(c=a.src||"")).length){var d=b.join("-");-1===(f=a.getAttribute("class")?a.getAttribute("class"):"").indexOf("optanon-category-"+d)&&a.setAttribute("class","optanon-category-"+d+" "+f);g(b)||(a.type="text/plain");
var e=function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",e)};a.addEventListener("beforescriptexecute",e)}}else if((b=h(c=a.src||"")).length){var f;d=b.join("-");-1===(f=a.getAttribute("class")?a.getAttribute("class"):"").indexOf("optanon-category-"+d)&&a.setAttribute("class","optanon-category-"+d+" "+f);g(b)||(a.removeAttribute("src"),a.setAttribute("data-src",c))}});var a=b.target;if(b.attributeName&&(!l(a)||!m(a)))if("script"===a.nodeName.toLowerCase()){if((c=
h(d=a.src||"")).length){b=c.join("-");-1===(f=a.getAttribute("class")?a.getAttribute("class"):"").indexOf("optanon-category-"+b)&&a.setAttribute("class","optanon-category-"+b+" "+f+" ");g(c)||(a.type="text/plain");var e=function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",e)};a.addEventListener("beforescriptexecute",e)}}else if(-1!==p.indexOf(b.target.nodeName.toLowerCase())){var d,c;if((c=h(d=a.src||"")).length){var f;b=c.join("-");-1===
(f=a.getAttribute("class")?a.getAttribute("class"):"").indexOf("optanon-category-"+b)&&a.setAttribute("class","optanon-category-"+b+" "+f);g(c)||(a.removeAttribute("src"),a.setAttribute("data-src",d))}}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var r=document.createElement;document.createElement=function(){for(var b=[],k=0;k<arguments.length;k++)b[k]=arguments[k];if("script"!==b[0].toLowerCase()&&-1===p.indexOf(b[0].toLowerCase()))return r.bind(document).apply(void 0,
b);var a=r.bind(document).apply(void 0,b),e=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(d){var c="";"string"==typeof d?c=d:d instanceof Object&&(c=d.toString());c=h(c);!c.length||"script"!==b[0].toLowerCase()||l(a)||g(c)||m(a)?!c.length||-1===p.indexOf(b[0].toLowerCase())||l(a)||g(c)||m(a)?e("src",d):(a.removeAttribute("src"),e("data-src",d),a.getAttribute("class")||e("class","optanon-category-"+c)):(e("type","text/plain"),
e("src",d));return!0}},type:{set:function(b){var c=h(a.src||"");b=!c.length||l(a)||g(c)||m(a)?b:"text/plain";return e("type",b),!0}},class:{set:function(b){var c=h(a.src);!c.length||l(a)||g(c)||m(a)?e("class",b):(c=c.join("-"),e("class","optanon-category-"+c+" "+b));return!0}}}),a.setAttribute=function(b,c,f){"type"!==b&&"src"!==b||f?e(b,c):a[b]=c},a}}();ttps://www.spglobal.com/spdji/en/images/social/spdji-social-media-logo.jpg"/>
    <meta property="og:image" content="https://www.spglobal.com/spdji/en/images/social/spdji-social-media-logo.jpg"/>
            <meta property="og:url" content="/spdji/enhttps://www.spglobal.com/spdji/en/indices/equity/dow-jones-industrial-average/"/>
        <meta property="og:site_name" content="S&P Dow Jones Indices"/>
    <meta property="og:type" content="product"/>
    <meta property="og:title" content="Dow Jones Industrial Average®"/>
	<link type="text/css" rel="stylesheet" href="/spdji/en/app/css/filterable-list.css?v=20240201104310" media="all" />
    <link type="text/css" rel="stylesheet" href="/spdji/en/app/css/index-specialization.css?v=20240201104310" media="all" />
	<link type="text/css" rel="stylesheet" href="/spdji/en/app/css/index-detail.css?v=20240201104310" media="all" />
	<link type="text/css" rel="stylesheet" href="/spdji/en/app/css/index-detail-data.css?v=20240201104310" media="all" />
	<link rel="stylesheet" href="/spdji/en/app/css/datawidget.css?v=20240201104310" media="all" />
<link type="text/css" rel="stylesheet" href="/spdji/en/app/css/custom/spindices/modules.css?v=20240201104310" media="all" />
<link type="text/css" rel="stylesheet" href="/spdji/en/app/css/custom/spindices/images-styles.css?v=20240201104310" media="all" />
    
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P29G7QS');</script>
				
				<!-- Google Tag Manager -->
               <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NKVB4WM');</script>
               <!-- End Google Tag Manager -->
</head>
<body>
	<section class="wrapper">
		<!-- Header Starts here -->
		<header>
												                         																	                         									

									                         													                         													                         														                         					<div class="header-wrapper js-header js-select-dispatch">
    <div class="sites-link__dropdown" id="site_links" aria-hidden="true">
       <div class="content">
               <ul class="menu first-sub vertical drop-open-menu display-non sites-link__links"  role="menu">
                    <li role="menuitem">
                       <a href="https://www.spglobal.com/en/" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&P Global">S&P Global</a>
                    </li>
                    <li role="menuitem">
                        <a href="/spdji/en/" class="site-header-link is-current ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&P Dow Jones Indices">S&P Dow Jones Indices</a>
                    </li>
                    <li role="menuitem">
                        <a href="https://www.spglobal.com/marketintelligence/en/" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&P Global Market Intelligence">S&P Global Market Intelligence</a>
                    </li>
                    <li role="menuitem">
                        <a href="https://www.spglobal.com/mobility/en/" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&amp;P Global Mobility">S&amp;P Global Mobility</a>
                    </li>
                    <li role="menuitem">
                        <a href="https://www.spglobal.com/commodity-insights/en" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&P Global Commodity Insights">S&P Global Commodity Insights</a>
                    </li>
                    <li role="menuitem">
                       <a href="https://www.spglobal.com/ratings/en/" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&P Global Ratings">S&P Global Ratings</a>
                    </li>
                    <li role="menuitem">
                       <a href="https://www.spglobal.com/esg" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Outbound Link_Division" data-gtm-label="S&P Global Sustainable1">S&P Global Sustainable1</a>
                   </li>
               </ul>
               <div class="sites-link__close">
                   <a href="javascript:void(0);" data-gtm-category="Header" data-gtm-action="Click" data-gtm-label="Close"><i class="fa fa-times"></i> Close</a>
               </div>
       </div>
     </div>    
   <nav class="site-header-nav js-site-header-navigation">
       <!-- BEGINNING: adaptive multi application menu -->
        <div class="top-navigation">
           <ul class="adaptive-dropdown menu site-header js-adaptive-dropdown-menu" role="menubar">
               <li role="menuitem" aria-haspopup="true" aria-label="Sites">
                  <div class="top-navigation-container__left">
                 <div class="sites-link " aria-label="s&amp;p global Divisions">
                   <div class="siteDrop">
                       <a href="javascript:void(0);" class="sites-link__cta" aria-haspopup="true" id="division" aria-expanded="false"> S&P Dow Jones Indices </a>
                       </div>
                   </div>
                   <span class="sites-link__info"> Discover more about S&amp;P Global’s offerings </span>
                   </div>
               </li>
           </ul>
       </div>

       <!-- END: adaptive multi application menu -->
       <!-- BEGINNING: multi language sites menu -->
       <ul class="dropdown menu site-header js-dropdown-menu dropdown--support language-menu drop-open-menu" role="menubar">
           <li role="menuitem" class="is-dropdown-submenu-parent opens-right" aria-haspopup="true" aria-label="Support">
               <a href="#" class="site-header-link ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_English" languageID="1">English</a>
               <ul class="menu submenu is-dropdown-submenu first-sub vertical drop-open-menu" data-submenu="" role="menu" style="">
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/es/" class="ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_Spanish">Español (Spanish)</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/pt/" class="ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_Portuguese">Português (Portuguese)</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/kr/" class="ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_Korean">한국어 (Korean)</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/zh/" class="ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_SChinese">简体中文 (Simplified Chinese)</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/tc/" class="ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_TChinese">繁體中文 (Traditional Chinese)</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/jp/" class="ignorePopup" data-gtm-category="Header" data-gtm-action="Language" data-gtm-label="Language_Japanese">日本語 (Japanese)</a>
                   </li>
               </ul>
           </li>
       </ul>
       <!-- END: multi language sites menu -->
       <!-- BEGINNING: Main menu -->
       <ul class="dropdown menu site-header js-dropdown-menu dropdown--support about-menu drop-open-menu" role="menubar">
           <li role="menuitem" class="is-dropdown-submenu-parent opens-right" aria-haspopup="true" aria-label="Support">
               <a href="#" class="site-header-link">About</a>
               <ul class="menu submenu is-dropdown-submenu first-sub vertical  drop-open-menu" role="menu">
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/en/about-us" class="ignorePopup" data-gtm-category="Header" data-gtm-action="About" data-gtm-label="About_About Us">About Us</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="https://www.spglobal.com/spdji/en/about-us/our-services" class="ignorePopup" data-gtm-category="Header" data-gtm-action="About" data-gtm-label="About_Our Services">Our Services</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="/spdji/en/media-center/news-announcements" class="ignorePopup" data-gtm-category="Header" data-gtm-action="About" data-gtm-label="About_Press Room">Media Center</a>
                   </li>
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="/spdji/en/contact-us" class="ignorePopup" data-gtm-category="Header" data-gtm-action="About" data-gtm-label="About_Contact Us">Contact Us</a>
                   </li>
               </ul>
           </li>
       </ul>
       <!-- END: Main menu -->
       <!-- BEGINNING: Register/Login menu -->
       <ul class="dropdown menu site-header user login-register">
           <li>
               <a data-open="user-login" id="user-login" href="#" class="site-header-link" aria-controls="user-login" aria-haspopup="true" tabindex="0" data-toggle="modal" data-target="#register-login" data-gtm-category="Header" data-gtm-action="Click" data-gtm-label="Register/Login">
                   <span>Register / Login</span>
                   <picture aria-hidden="true">
                       <source srcset="/spdji/en/app/images/login-register.png 1x, /spdji/en/app/images/login-register2x.png 2x" media="(min-width: 1360px)"/>
                       <img src="/spdji/en/app/images/login-register.png" srcset="/spdji/en/app/images/login-register.png 1x, /spdji/en/app/images/login-register2x.png 2x" alt=""/>
                   </picture>
               </a>
           </li>
       </ul>
       <!-- END: Register/Login menu -->
       <ul class="dropdown menu site-header js-dropdown-menu dropdown--support login-menu" role="menubar">
           <li role="menuitem" class="is-dropdown-submenu-parent opens-right" aria-haspopup="true" aria-label="Support">
               <a id="loggedIn" class="site-header-link">
                   <div class="color-white">Hi&nbsp;<span>User</span></div>
                   <picture aria-hidden="true">
                       <source srcset="/spdji/en/app/images/logged-user.png 1x, /spdji/en/app/images/logged-user.png 2x" media="(min-width: 1360px)"/>
                       <img src="/spdji/en/app/images/logged-user.png" srcset="/spdji/en/app/images/logged-user.png 1x, /spdji/en/app/images/logged-user.png 2x" alt=""/>
                   </picture>
               </a>
               <ul class="menu submenu is-dropdown-submenu first-sub vertical  drop-open-menu" role="menu">
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item">
                       <a href="/spdji/en/dashboard/account-settings/">My Preferences</a>
                   </li>					
                   <li role="menuitem" class="is-submenu-item is-dropdown-submenu-item logout" id="logout">
                       <a>Log out</a>
                   </li>
               </ul>
           </li>
       </ul>
   </nav>
   
   <div class="navigation-wrapper">
       <a href="/spdji/en/" class="logo logo-market-intelligence1" title="S&P Dow Jones Indices" data-gtm-category="Navigation" 
       data-gtm-action="Main Navigation" data-gtm-label="S&P Dow Jones Indices Logo">	    			
           <img class="logo-image" alt="Spdji Logo" src="/spdji/en/app/images/logo.svg" width=200 height=50 />
       </a>
       <nav class="nav-primary">
           <ul class="nav-primary-list">
               <li class="nav-item "><a class="nav-title  active-nav "   active-nav='yes'  name="indices" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices">Indices</a></li>
               <li class="nav-item"><a class="nav-title "  name="research" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights">Research & Insights</a></li>
               <li class="nav-item"><a class="nav-title "  name="exchange" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships">Exchange Relationships</a></li>
               <li class="nav-item"><a class="nav-title "   name="professional" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources">Professional Resources</a></li>
               <li class="nav-item"><a class="nav-title "   name="governance" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance">Governance</a></li>
           </ul>
       </nav>		
       <button class="button-search is-seleced" data-event-name="search" aria-label="search">
           <svg viewBox="0 0 17.5 17.5" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Search">
               <path d="M12.5,11h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C13,2.9,10.1,0,6.5,0S0,2.9,0,6.5S2.9,13,6.5,13c1.6,0,3.1-0.6,4.2-1.6l0.3,0.3v0.8l5,5l1.5-1.5L12.5,11z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5S9,11,6.5,11z"></path>
           </svg>
           <span></span>
           <span></span>
       </button>
       <div class="mobile-menu-icon">
           <button class="button-menu " aria-label="mobile-menu">
               <span></span>
               <span></span>
               <span></span>
           </button>
       </div>			
   </div>  
   <!-- Mobile megamenu starts here -->  
   <div class="navigation-mobile-wrapper MOBILE-MENU" role="menu" aria-multiselectable="true" style="overflow: auto;">
       <div id="accordion">
           <ul class="vertical menu" id="mobile-menu" data-accordion-menu="">
               <li role="menuitem" class="accordion">					
                   <a data-toggle="collapse" href="#indices-mob" id="mob-indices" role="button" aria-expanded="false"
                       aria-controls="indices-mob" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices">Indices
                       <button aria-hidden="true" class="accordion-icon font-18">
                           <span></span>
                           <span></span></button>
                   </a>
                   <div id="indices-mob" class="collapse lh-16 font-16 mobilemenu">
                       <div>
                           <div class="row">
                               <div class="col-sm-12 submenu">
                                   <h6 class="dropdown-header submenu-header font-12">BY CATEGORY</h6>
                                   <a class="dropdown-item" href="/spdji/en/index-family/equity/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Equity">Equity</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/fixed-income/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Fixed Income">Fixed Income</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/commodities/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Commodities">Commodities</a>
                                  <a class="dropdown-item" href="/spdji/en/index-family/dividends-factors/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Dividends_Factors">Dividends &amp; Factors</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/multi-asset/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Multi-Asset">Multi-Asset</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/other-strategies/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Other_Strategies">Other Strategies</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/esg/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_ESG">ESG</a>
                                   	<a class="dropdown-item" href="/spdji/en/index-family/thematics/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Thematics">Thematics</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/digital-assets/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Digital-Assets">Digital Assets</a>
                                   <a class="dropdown-item" href="/spdji/en/index-family/indicators/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Indicators">Indicators</a>
                                   <a class="dropdown-item" href="/spdji/en/custom-indices/solutions/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Custom">Custom Solutions</a>
                               </div>
                               <div class="col-sm-12 submenu">
                                   <h6 class="dropdown-header submenu-header font-12">BY REGION</h6>
                                   <a class="dropdown-item" href="/spdji/en/regional-exposure/global/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Global">Global</a>
                                   <a class="dropdown-item" href="/spdji/en/regional-exposure/americas/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Americas">Americas</a>
                                   <a class="dropdown-item" href="/spdji/en/regional-exposure/europe/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Europe">Europe</a>
                                   <a class="dropdown-item" href="/spdji/en/regional-exposure/middle-east-africa/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Middle East & Africa">Middle East & Africa</a>
                                   <a class="dropdown-item" href="/spdji/en/regional-exposure/asia-pacific/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Asia Pacific">Asia Pacific</a>
                               </div>
								<div class="col-sm-12 submenu IHS-mobile IHS-header">
									<h6 class="dropdown-header submenu-header font-12">IHS MARKIT INDICES</h6>
									<a class="dropdown-item" href="https://www.spglobal.com/spdji/en/indices/products/iboxx.html" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_iBoxx Bond & Loan Indices ">iBoxx Bond & Loan Indices </a>
									<a class="dropdown-item" href="https://www.spglobal.com/spdji/en/indices/products/esg-sustainable-indices.html" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_ESG/Sustainable Indices">ESG/Sustainable Indices</a>
									<a class="dropdown-item" href="https://www.spglobal.com/spdji/en/indices/products/cds-indices.html" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_Credit Default Swap Indices">Credit Default Swap Indices</a>
									<a class="dropdown-item" href="https://www.spglobal.com/spdji/en/indices/products/cambridge-associates-private-investment-benchmarks.html" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_Private Investment Benchmarks">Private Investment Benchmarks</a>
									<a class="dropdown-item" href="https://www.spglobal.com/spdji/en/indices/products/indices.html" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_More IHS Markit Solutions">See All IHS Markit Solutions</a>
								</div>
                           </div>
                       </div>
                   </div>
               </li>
               <li role="menuitem" class="accordion" aria-haspopup="true">
                   <a data-toggle="collapse" href="#research-mob" role="button" id="mob-research" aria-expanded="false" aria-controls="research-mob" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights">Research & Insights
                       <button aria-hidden="true" class="accordion-icon font-18">
                           <span></span>
                           <span></span>
                       </button>	
                   </a>
                   <div id="research-mob" class="collapse">							
                       <ul class="menu vertical nested submenu is-accordion-submenu is-active" role="menu" aria-hidden="false" data-submenu="">
                           <a class="dropdown-item" href="/spdji/en/research-insights/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Overview">Overview</a>
                           <a class="dropdown-item" href="/spdji/en/research-insights/research/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Research">Research</a>
                           <a class="dropdown-item" href="/spdji/en/research-insights/commentary/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Commentary">Commentary</a>
                           <a class="dropdown-item" href="/spdji/en/research-insights/education/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Education">Education</a>
                           <a class="dropdown-item" href="/spdji/en/research-insights/performance-reports/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Performance Reports">Performance Reports</a>
                           <a class="dropdown-item" href="/spdji/en/research-insights/spiva/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_SPIVA">SPIVA</a>
                           <a class="dropdown-item" href="/spdji/en/investment-themes/overview/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Investment Themes">Investment Themes</a>
                           <a class="dropdown-item ignorePopup" href="https://www.indexologyblog.com" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Indexology Blog">Blog</a>
                           <a class="dropdown-item" href="/spdji/en/events/webinars/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Events">Events</a>
                           <a class="dropdown-item" href="/spdji/en/research-insights/index-tv/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Index TV">Index TV</a>							
                       </ul>									
                   </div>
               </li>
               <li role="menuitem" class="accordion" aria-haspopup="true">
                   <a data-toggle="collapse" href="#exchange-mob" role="a" id="mob-exchange" aria-expanded="false" aria-controls="exchange-mob" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships">Exchange Relationships
                       <button aria-hidden="true" class="accordion-icon font-18">
                           <span></span>
                           <span></span>
                       </button>
                   </a>
                   <div id="exchange-mob" class="collapse lh-16 font-16 mobilemenu">
                       <div>
                           <div class="row">
                               <div class="col-sm-12 submenu">
                                   <a class="dropdown-item" href="/spdji/en/exchange-relationships" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_Overview">Overview</a>
                                   <a class="dropdown-item" href="/spdji/en/exchange-relationships/#north-america" onclick="window.location.href ='/spdji/en/exchange-relationships/#north-america';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_North America">North America</a>
                                   <a class="dropdown-item" href="/spdji/en/exchange-relationships/#latin-america" onclick="window.location.href ='/spdji/en/exchange-relationships/#latin-america';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_Latin America">Latin America</a>
                                   <a class="dropdown-item" href="/spdji/en/exchange-relationships/#emea" onclick="window.location.href ='/spdji/en/exchange-relationships/#emea';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_EMEA">EMEA</a>
                                   <a class="dropdown-item" href="/spdji/en/exchange-relationships/#asia-pacific" onclick="location.href ='/spdji/en/exchange-relationships/#asia-pacific';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_Asia Pacific">Asia Pacific</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </li>
               <li role="menuitem" class="accordion" aria-haspopup="true">
                   <a data-toggle="collapse" href="#professional-mob" role="button" aria-expanded="false" aria-controls="professional-mob" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources">Professional Resources
                       <button aria-hidden="true" class="accordion-icon font-18">
                           <span></span>
                           <span></span>
                       </button>
                   </a>
                   <div id="professional-mob" class="collapse lh-16 font-16 mobilemenu">
                       <div>
                           <div class="row">
                               <div class="col-sm-12 submenu">
                                   <a class="dropdown-item" href="/spdji/en/landing/professional-resources/financial-advisors/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Financial Advisors">Wealth Managers</a>
                                   <a class="dropdown-item" href="/spdji/en/landing/professional-resources/insurance/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Insurance">Insurance</a>
                                   <a class="dropdown-item" href="/spdji/en/landing/professional-resources/institutional-investors/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Institutional Investors">Institutional Investors</a>
                                   <a class="dropdown-item" href="/spdji/en/landing/professional-resources/defined-contribution/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Defined Contribution">Defined Contribution</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </li>
               <li role="menuitem" class="accordion" aria-haspopup="true">
                   <a data-toggle="collapse" href="#governance-mob" role="button" aria-expanded="false" aria-controls="governance-mob" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance">Governance
                       <button aria-hidden="true" class="accordion-icon font-18">
                           <span></span>
                           <span ></span>
                       </button>
                   </a>
                   <div id="governance-mob" class="collapse lh-16 font-16 mobilemenu">
                       <div>
                           <div class="row">
                               <div class="col-sm-12 submenu">
                                   <a class="dropdown-item" href="/spdji/en/governance/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Overview">Overview</a>
                                   <a class="dropdown-item" href="/spdji/en/governance/regulatory-information/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Regulatory Information">Regulatory Information</a>
                                   <a class="dropdown-item" href="/spdji/en/governance/methodologies/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Methodologies">Methodologies</a>
                                   <a class="dropdown-item" href="/spdji/en/governance/consultations/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Consultations">Consultations</a>
                                   <a class="dropdown-item" href="/spdji/en/governance/corporate-engagement/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Corporate Engagement">Corporate Engagement</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </li>
           </ul>
       </div>
           <div class="site-nav-accordion"></div>
   </div>
   <!-- Mobile megamenu ends here -->   
   <!-- Desktop megamenu comes here -->  
   <div class="navigation-secondary-wrapper DESKTOP-MENU">
       <ul class="navigation-secondary-list">
           <li id="indices" class="nodisplay fade menu">
               <!-- BEGINNING: molecules-secondary-nav.twig -->
               <div class="nav-secondary-list four-column">
                   <span class="nav-secondary-category">BY CATEGORY</span>
                   <a href="/spdji/en/index-family/equity/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Equity">Equity</a>
                   <a href="/spdji/en/index-family/fixed-income/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Fixed Income">Fixed Income</a>
                   <a href="/spdji/en/index-family/commodities/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Commodities">Commodities</a>
                   <a href="/spdji/en/index-family/dividends-factors/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Dividends_Factors">Dividends &amp; Factors</a>
                   <a href="/spdji/en/index-family/multi-asset/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Multi-Asset">Multi-Asset</a>
                   <a href="/spdji/en/index-family/other-strategies/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Other_Strategies">Other Strategies</a>
               </div>
               <div class="nav-secondary-list four-column">
                   <span class="nav-secondary-category">&nbsp;</span>
                   <a href="/spdji/en/index-family/esg/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_ESG">ESG</a>
                   <a href="/spdji/en/index-family/thematics/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Thematics">Thematics</a>
                   <a href="/spdji/en/index-family/digital-assets/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Digital-Assets">Digital Assets</a>
                   <a href="/spdji/en/index-family/indicators/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Indicators">Indicators</a>
                   <a href="/spdji/en/custom-indices/solutions/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Custom">Custom Solutions</a>
               </div>
               <div class="nav-secondary-list four-column">
                   <span class="nav-secondary-category">By Region</span>
                   <a href="/spdji/en/regional-exposure/global/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Global">Global</a>
                   <a href="/spdji/en/regional-exposure/americas/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Americas">Americas</a>
                   <a href="/spdji/en/regional-exposure/europe/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Europe">Europe</a>
                   <a href="/spdji/en/regional-exposure/middle-east-africa/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Middle East & Africa">Middle East & Africa</a>
                   <a href="/spdji/en/regional-exposure/asia-pacific/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Asia Pacific">Asia Pacific</a>
               </div>
                <div class="nav-secondary-list four-column IHS-header">
                <span class="nav-secondary-category">IHS MARKIT INDICES </span>
                <a href="https://www.spglobal.com/spdji/en/indices/products/iboxx.html" class="IHS-navigation-arrow" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_iBoxx Bond & Loan Indices">iBoxx Bond & Loan Indices</a>
                <a href="https://www.spglobal.com/spdji/en/indices/products/esg-sustainable-indices.html" class="IHS-navigation-arrow" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_ESG/Sustainable Indices">ESG/Sustainable Indices </a>
                
                <a href="https://www.spglobal.com/spdji/en/indices/products/cds-indices.html" class="IHS-navigation-arrow" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_Credit Default Swap Indices">Credit Default Swap Indices</a>
                
                <a href="https://www.spglobal.com/spdji/en/indices/products/cambridge-associates-private-investment-benchmarks.html" class="IHS-navigation-arrow" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_Private Investment Benchmarks">Private Investment Benchmarks</a>
                
                <a href="https://www.spglobal.com/spdji/en/indices/products/indices.html" class="IHS-navigation-arrow font-red" class="font-red" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Indices_Featured_IHS Markit_SEE ALL IHS MARKIT SOLUTIONS">SEE ALL IHS MARKIT SOLUTIONS</a>
            </div>
               <!-- END: molecules-secondary-nav.twig -->
           </li>
           <li id="research" class="nodisplay fade menu research-insights-global">
               <div class="nav-secondary-list wid-25">
                   <span class="nav-secondary-category"></span>
                   <a href="/spdji/en/research-insights/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Overview">Overview</a>
                   <a href="/spdji/en/research-insights/research/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Research">Research</a>
                   <a href="/spdji/en/research-insights/commentary/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Commentary">Commentary</a>
                   <a href="/spdji/en/research-insights/education/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Education">Education</a>
                   <a href="/spdji/en/research-insights/performance-reports/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Performance Reports">Performance Reports</a>
               </div>
               <div class="nav-secondary-list wid-25" >
                   <span class="nav-secondary-category"></span>
                   <a href="/spdji/en/research-insights/spiva/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_SPIVA">SPIVA</a>
                   <a href="/spdji/en/investment-themes/overview/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Investment Themes">Investment Themes</a>
                   <a href="https://www.indexologyblog.com" class="ignorePopup" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Indexology Blog">Blog</a>
                   <a href="/spdji/en/events/webinars/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Events">Events</a>
                   <a href="/spdji/en/research-insights/index-tv/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Research & Insights_Index TV">Index TV</a>
               </div>
               <div class='nav-meta-latest two-column wid-18'><span class='nav-secondary-category'>STAY CONNECTED</span><div class='nav-meta-latest-column two-col'><a  href='https://on.spdji.com/SignUp?src=IDS' class='nav-meta-latest-link' data-gtm-category='Navigation' data-gtm-action='Main Navigation' data-gtm-label='Research & Insights_Featured_STAY CONNECTED_Get our latest research and insights in your inbox.'>Get our latest research and insights in your inbox.</a> <p class='nav-meta-latest-content'></p><a class='link-with-arrow ri-learn-more submenu-link' href='https://on.spdji.com/SignUp?src=IDS'>Sign Up</a></div></div>	<div class='nav-meta-latest two-column wid-18'><span class='nav-secondary-category'>INDEX DASHBOARDS</span><div class='nav-meta-latest-column two-col'><a  href='https://www.spglobal.com/spdji/en/research-insights/performance-reports' class='nav-meta-latest-link' data-gtm-category='Navigation' data-gtm-action='Main Navigation' data-gtm-label='Research & Insights_Featured_INDEX DASHBOARDS_Performance Analytics at a Glance'>Performance Analytics at a Glance</a> <p class='nav-meta-latest-content'></p><a class='link-with-arrow ri-learn-more submenu-link' href='https://www.spglobal.com/spdji/en/research-insights/performance-reports'>Access the Latest Dashboards</a></div></div>	
           </li>
           <li id="exchange" class="nodisplay fade">
               <nav class="nav-secondary">
                   <div class="nav-secondary-list">
                       <span class="nav-secondary-category"></span>
                       <a href="/spdji/en/exchange-relationships" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_Overview">Overview</a>
                       <a href="/spdji/en/exchange-relationships/#north-america" onclick="window.location.href ='/spdji/en/exchange-relationships/#north-america';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_North America">North America</a>
                       <a href="/spdji/en/exchange-relationships/#latin-america" onclick="window.location.href ='/spdji/en/exchange-relationships/#latin-america';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_Latin America">Latin America</a>
                       <a href="/spdji/en/exchange-relationships/#emea" onclick="window.location.href ='/spdji/en/exchange-relationships/#emea';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_EMEA">EMEA</a>
                       <a href="/spdji/en/exchange-relationships/#asia-pacific" onclick="location.href ='/spdji/en/exchange-relationships/#asia-pacific';window.location.reload();" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Exchange Relationships_Asia Pacific">Asia Pacific</a>
                   </div>
                   <div class="nav-meta-latest">							
                   
                   </div>
               </nav>					
           </li>
           <li id="professional" class="nodisplay fade">
               <nav class="nav-secondary">
                   <div class="nav-secondary-list">
                       <span class="nav-secondary-category"></span>
                           <a href="/spdji/en/landing/professional-resources/financial-advisors/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Financial Advisors">Wealth Managers</a>
                           <a href="/spdji/en/landing/professional-resources/insurance/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Insurance">Insurance</a>
                           <a href="/spdji/en/landing/professional-resources/institutional-investors/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Institutional Investors">Institutional Investors</a>
                           <a href="/spdji/en/landing/professional-resources/defined-contribution/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Professional Resources_Defined Contribution">Defined Contribution</a>
                   </div>
                   <div class="nav-meta-latest">
                   <div class='nav-meta-latest-column'><span class='nav-meta-latest-category'>INDEX-LINKED PRODUCTS</span><a href='https://www.spglobal.com/spdji/en/index-linked-products/' class='nav-meta-latest-link' data-gtm-category='Navigation' data-gtm-action='Main Navigation' data-gtm-label='Professional Resources_Featured_INDEX-LINKED PRODUCTS_Explore products linked to our indices.'>Explore products linked to our indices.</a><p class='nav-meta-latest-content'></p><a class='link-with-arrow ri-learn-more submenu-link' href='https://www.spglobal.com/spdji/en/index-linked-products/'>Find Products</a></div>
                   </div>
               </nav>
           </li>			
           <li id="governance" class="nodisplay fade">
               <nav class="nav-secondary">
                   <div class="nav-secondary-list">
                       <span class="nav-secondary-category"></span>
                       <a href="/spdji/en/governance/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Overview">Overview</a>
                       <a href="/spdji/en/governance/regulatory-information/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Regulatory Information">Regulatory Information</a>
                       <a href="/spdji/en/governance/methodologies/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Methodologies">Methodologies</a>
                       <a href="/spdji/en/governance/consultations/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Consultations">Consultations</a>
                       <a href="/spdji/en/governance/corporate-engagement/" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Governance_Corporate Engagement">Corporate Engagement</a>
                   </div>
                   <div class="nav-meta-latest">									
                   <div class='nav-meta-latest-column'><span class='nav-meta-latest-category'>METHODOLOGY INFO</span><a href='https://www.spglobal.com/spdji/en/landing/topic/gics' class='nav-meta-latest-link' data-gtm-category='Navigation' data-gtm-action='Main Navigation' data-gtm-label='Governance_Featured_METHODOLOGY INFO_GICS<sup>®</sup>: Global Industry Classification Standard'>GICS<sup>®</sup>: Global Industry Classification Standard</a> <p class='nav-meta-latest-content'></p><a class='link-with-arrow ri-learn-more submenu-link' href='https://www.spglobal.com/spdji/en/landing/topic/gics'>Explore</a></div><div class='nav-meta-latest-column'><span class='nav-meta-latest-category'>METHODOLOGY INFO</span><a href='https://www.spglobal.com/spdji/en/landing/topic/market-classification/' class='nav-meta-latest-link' data-gtm-category='Navigation' data-gtm-action='Main Navigation' data-gtm-label='Governance_Featured_METHODOLOGY INFO_S&P DJI Market Classification'>S&P DJI Market Classification</a> <p class='nav-meta-latest-content'></p><a class='link-with-arrow ri-learn-more submenu-link' href='https://www.spglobal.com/spdji/en/landing/topic/market-classification/'>LEARN MORE</a></div><div class='nav-meta-latest-column'><span class='nav-meta-latest-category'>IHS MARKIT</span><a href='https://www.markit.com/Documentation/Product/Indices' class='nav-meta-latest-link' data-gtm-category='Navigation' data-gtm-action='Main Navigation' data-gtm-label='Governance_Featured_IHS MARKIT_View methodologies, annexes, guides and legal documents.'>View methodologies, annexes, guides and legal documents.</a> <p class='nav-meta-latest-content'></p><a class='link-with-arrow ri-learn-more submenu-link' href='https://www.markit.com/Documentation/Product/Indices'>ACCESS DOCUMENTATION</a></div>
                   </div>
               </nav>
           </li>
       </ul>
   </div>
   <!-- Desktop megamenu ends here -->
   <!-- Search field starts here -->  
   <div class="navigation-search-wrapper" >
       <form action="/spdji/en/search/" name="searchform" novalidate="novalidate">
           <div class="search-input-wrapper global-search">
               <input class="search-input" type="text" data-autocomplete="true" name="query" placeholder="SEARCH BY KEYWORD" >
               <div class="autocompleteOptions search-new"></div>
               <span class="search-input-svg">
                   <svg viewBox="0 0 17.5 17.5" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Search">
                       <path d="M12.5,11h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C13,2.9,10.1,0,6.5,0S0,2.9,0,6.5S2.9,13,6.5,13c1.6,0,3.1-0.6,4.2-1.6l0.3,0.3v0.8l5,5l1.5-1.5L12.5,11z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5S9,11,6.5,11z"></path>
                   </svg>
               </span>				
               <div class="index-finder" >
                   <a href="/spdji/en/index-finder" class="button-white arrow" data-gtm-category="Navigation" data-gtm-action="Main Navigation" data-gtm-label="Search">
                       <span>Index Finder</span>
                   </a>
               </div>
           </div>	
       </form>
   </div>
   <!-- Search field ends here --> 
</div>
<script>
		var invalidCredentials = "Invalid login credentials. Please try again.";
</script>
	<div class="modal fade modal-container" id="register-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog register-login-container modal-dialog-centered " role="document">
			<div class="modal-content register-login-container">
				<div class="modal-header">
					<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true"></span>
						<span></span>
					</button>
				</div>
				<div class="modal-body">
					<div class="account-login-form">
						<form id="login-form" class="form-validation" action="#">
														<h2 class="login-form-title">Log in</h2>
							<p class="error"></p>
							<div class="login-form-login-wrapper">								
								<ul class="form-field-list">
									<li class="form-field-control">									
										<input type="email" id="email" name="email" value="" class="login-form-input-field email form-field-input" placeholder=" ">
																				<label for="email" class="form-field-label">Email Address</label>
									</li>
									
									<li class="form-field-control">
										<input type="password" id="password" name="password" class="login-form-input-field form-field-input" placeholder=" ">
																				<label for="password" class="form-field-label">Password</label>
									</li>
								</ul>
								
																<a data-gtm-category="Register/Login" data-gtm-action="Click" data-gtm-label="Forgot Password" class="login-form-forgot-username-password" id="forgotPasswordLink">Forgot Password</a>
								<button data-gtm-category="Register/Login" data-gtm-action="Click" data-gtm-label="Login" class="form-button btn-red" type="button" id="login-button">
									<span>Log in</span>
								</button>								
							</div>														
						</form>
					</div>
					<div class="login-form-register">
												<h5 class="login-form-register-title">Not Registered?</h5>
												<p class="login-form-register-text">Access exclusive data and research, personalize your experience, and sign up to receive email updates.
							
						</p>
												<a href="/spdji/en/registration/" data-gtm-category="Register/Login" data-gtm-action="Click" data-gtm-label="Register" class="form-button btn-blue" tabindex="0" id="register-link" aria-haspopup="true"><span>Register</span></a>
					</div>	
				</div>
			</div>
		</div>
	</div> 
    <div class="modal fade modal-container user-registration" id="forgot-password" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-modal="true" style="display:none">
		<div class="modal-dialog modal-sm form-frame-register modal-dialog-centered " role="document">
		    <div class="modal-content">
				<div class="modal-header">
					 <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true"></span>
						<span></span>
					 </button>
				</div>
				<div class="modal-body forgot-password-body">
					<div class="form-frame-columns">
						<div class="form-frame-column-two login-form account-login-form password-login-form">
							<form id="forgot-password-form" class="form-validation"> 
																<h2 class="login-form-title">Forgot Password?</h2> 
								<ul class="form-frame-tab-stage">
									<li class="is-current tab-content" id="first-main-tab">
										<ul class="form-field-list">
																						<li class="form-field-control" style="margin-bottom:5px;">
												<input type="text" class="form-field-input login-form-input-field22 required email" 
												id="forgot_pass_email" tabindex="1" placeholder=" " maxlength="50" 
												name="forgot_pass_email">
												<label for="forgot_pass_email" class="form-field-label">Email<span class="red">*</span></label>
											</li>											
										</ul>
									</li>
									<li>
										<ul class="form-field-list captcha-info">
											<li>
												<div class="captcha-container">
													<div class="captcha captcha-input" style="float:left">
																												<label for="captcha" class="floating-form-fields">
															<input type="text" id="captcha" tabindex="1" value="" name="captchaText" class="form-field-input required" placeholder=" ">								
															<label for="captcha" class="form-field-label">Enter the characters displayed															
															<span class="red">*</span>	
														</label>
														</label>
													</div>
													<div class="captcha" style="margin-top:10px;">
														<img class="captcha-image fleft"> 
														<a href="#" class="refresh-captcha" onclick="$('.captcha-image').attr('src', SPI.PageAjaxMap.captcha + '?' + Math.random());return false;"></a>
													</div>
													<input type="hidden" id="useCaptcha" name="useCaptcha" value="true">
												</div>
											</li>
										</ul>
									</li>
								</ul>
								<div class="form-frame-fixed-foot" style="clear:both">
																		<input type="submit" class="form-button btn-red btn-right" value="Submit >" id="btnForgotPassword" data-gtm-action="Click" data-gtm-label="Forgot Password_Submitted" data-gtm-category="Forgot Password">
								</div>
							</form>
						</div>
						<div class="success-msg nodisplay">
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="modal fade modal-container" id="register-pre-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog register-login-container modal-dialog-centered " role="document">
			<div class="modal-content register-login-container">
				<div class="modal-header">
					<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true"></span>
						<span></span>
					</button>
				</div>
				<div class="modal-body">
					<div class="account-login-form">
						<form id="login-form-pre-login" class="form-validation" action="#">
														<h2 class="login-form-title">Log in</h2>
							<p class="error"></p>
							<div class="login-form-login-wrapper">								
								<ul class="form-field-list">
									<li class="form-field-control">									
										<input type="email" id="pre-login-email" name="pre-login-email" value="" class="login-form-input-field email form-field-input" tabindex="1" placeholder=" ">
																				<label for="pre-login-email" class="form-field-label">Email Address</label>
									</li>
									
									<li class="form-field-control">
										<input type="password" id="pre-login-password" name="pre-login-password" class="login-form-input-field form-field-input" tabindex="2" placeholder=" ">
																				<label for="pre-login-password" class="form-field-label">Password</label>
									</li>
								</ul>
								
																<a class="login-form-forgot-username-password" id="Prelogin-forgotPasswordLink">Forgot Password?</a>
								<button class="form-button btn-red" tabindex="3" type="button" id="pre-login-button">
									<span>Log in</span>
								</button>								
							</div>														
						</form>
					</div>
					<div class="login-form-register">
												<h5 class="login-form-register-title">Not Registered?</h5>
												<p class="login-form-register-text">Access exclusive data and research, personalize your experience, and sign up to receive email updates.
							
						</p>
												<a href="/spdji/en/registration/" class="form-button btn-blue" tabindex="0" id="register-link" aria-haspopup="true"><span>Register</span></a>
					</div>	
				</div>
			</div>
		</div>
	</div>		</header>
		<!-- Header Ends here -->
		<div class="content-wrapper index-detail-main">
		    <div class="content index-detail">
		    <div class="index-detail">
    <div class="intro-copy">
        <div class="intro-copy-first-column">
            <h1 class="intro-copy-title">Dow Jones Industrial Average®</h1>
				
														  				  				  				  																																													<div class="index-detail-intro-card">
						<div class="index-detail-intro-card-wrapper">
							<label><span class="published-value">38,290.41</span>  <span class="currency-code">USD</span></label>
							<label class="daily-change">0.37%</label>
							<label class="index-frequency-label"> 1 Day</label>
						</div>
					</div>
							        </div>
        <div class="intro-copy-second-column">
            <div class="sub-nav-mask">
                <nav class="sub-nav-wrapper bottom-nav-wrapper index-detail-nav-wraper" id="index-family-nav">
                    <div class="slider">
						<a href="#overview" data-value="0" class="nav-module-tab is-current-section" data-gtm-category="Navigation" data-gtm-action="Tab" data-gtm-label="Overview">Overview</a>
													<a href="#data" data-value="1" class="nav-module-tab"  data-gtm-category="Navigation" data-gtm-action="Tab" data-gtm-label="Data">Data</a>
												<a href="#index-linked-product" data-value="3" class="nav-module-tab"  data-gtm-category="Navigation" data-gtm-action="Tab" data-gtm-label="Index-Linked Products">Index-Linked Products</a>
						<a href="#news-research" data-value="2" class="nav-module-tab d-none"  data-gtm-category="Navigation" data-gtm-action="Tab" data-gtm-label="News & Research">News & Research</a>
						<div class="right-icon-widget">
														<button class="global-icons button-bookmark" aria-label="bookmark" data-gtm-category="Introduction" data-gtm-action="Next Step" data-gtm-label="Save">   
</button>

  <button class="global-icons button-share global-share-icon dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 

 aria-label="share" 
data-gtm-category="Introduction" data-gtm-action="Next Step" data-gtm-label="Share" >
    <svg  id="Layer_1" x="0px" y="0px" viewBox="0 0 16.2 16.2" enable-background=" 0 0 16.2 16.2" xml:space="preserve">
    <g>
        <defs>
            <rect id="SVGID_1_" x="0.1" y="0.2" width="16" height="15.8"></rect>
        </defs>
        <clipPath id="SVGID_2_">
            <use xlink:href="#SVGID_1_" overflow="visible"></use>
        </clipPath>
        <circle clip-path="url(#SVGID_2_)" fill="none" stroke="#888888" stroke-width="2" cx="3.3" cy="8.1" r="2.2"></circle>
        <circle clip-path="url(#SVGID_2_)" fill="none" stroke="#888888" stroke-width="2" cx="13" cy="12.9" r="2.2"></circle>
        <circle clip-path="url(#SVGID_2_)" fill="none" stroke="#888888" stroke-width="2" cx="13" cy="3.4" r="2.2"></circle>
        <line clip-path="url(#SVGID_2_)" fill="none" stroke="#888888" stroke-width="2" x1="5.2" y1="7.1" x2="11" y2="4.3"></line>
        <line clip-path="url(#SVGID_2_)" fill="none" stroke="#888888" stroke-width="2" x1="10.8" y1="11.8" x2="5" y2="9.1"></line>
    </g>
    </svg>
</button>
  <div class="dropdown-menu share-dropdown-menu" aria-labelledby="dropdownMenuButton">
    <ul>
                    <li><a class="dropdown-item btn-twitter" data-gtm-category="Introduction" data-gtm-action="Next Step" data-gtm-label="Share_Twitter" href="#" data-shareurl="https://twitter.com/intent/tweet?text={title}&url={url}"><i class="fab fa-x-twitter custom-icon"></i></a></li>     
            <li><a class="dropdown-item btn-facebook" data-gtm-category="Introduction" data-gtm-action="Next Step" data-gtm-label="Share_Facebook" href="#" data-shareurl="http://www.facebook.com/sharer/sharer.php?u={url}&t={title}" ><i class="fa fa-facebook custom-icon"></i></a></li>   
                <li><a class="dropdown-item btn-linkedin" data-gtm-category="Introduction" data-gtm-action="Next Step" data-gtm-label="Share_Linkedin" href="#" data-shareurl="http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&source=Standard%26Poor%27s"><i class="fa fa-linkedin custom-icon"></i></a></li>
        <li><a class="dropdown-item btn-email"  data-gtm-category="Introduction" data-gtm-action="Next Step" data-gtm-label="Share_Email" onclick="socialShareIcon();" href="#" data-shareurl=""><i class="fa fa-envelope custom-icon"></i></a></li>  
    </ul>
  </div>						</div>
					</div>
                </nav>
            </div>
        </div>
    </div>
</div><div id="overview-main">
		<div class="bg-black datawidget">
		<div class="datawidget-loading"></div>
			<div class="tab-wrapper">
				<div class="dw-dd global-performance-type"></div>			
			</div>
			<div class="content-pane-wrapper content">
				<div class="content-separator"></div>
			</div>
	</div>
	<div class="other-overview-items">
		<div class="index-details-overview-top-container">
    <div class="index-details-overview-top-wrapper">
        <div class="index-details-accordion-title">
            <h2> <label>Bloomberg Ticker :</label> INDU</h2>
        </div>        
		        <div class="index-details-accordion-content" style="display: none;">			
            <p>
               <p>The Dow Jones Industrial Average<sup>&reg;</sup> (The Dow<sup><span>&reg;</span></sup>), is a price-weighted measure of 30 U.S. blue-chip companies. The index covers all industries except transportation and utilities.</p>
            </p>
        </div>				
    </div>

                      


    <div class="index-details-overview-top-wrapper">
        <div class="index-details-accordion-title">
            <h2>Documents</h2>
        </div>
        <div class="index-details-accordion-content">
            <div class="row">
                                  
															
										
																																																				
																												
															<div class="col col-md-6 index-details-docs-icon-wrper "">     
																																																																							
																						
							<div class="additional-widget-wrapper">
								<a href="/spdji/en/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&indexId=1720081" contentId = "0789394b-489d-4446-b132-eb7a50a3ea82" title="Dow Jones Industrial Average" gtm-content-type="Factsheets"  data-gtm-category="Documents" data-gtm-action="Download"  data-gtm-label="Factsheet_Dow Jones Industrial Average (USD) Factsheet"
								indexName="Dow Jones Industrial Average" class="additional-widget-btn right">
									<span class="simple-pdf-icon"></span>Factsheet
								</a>
							</div>
																		</div>
                
                				
								    <div class="col col-md-6 index-details-docs-icon-wrper">				
						<div class="additional-widget-wrapper mt-1">
							<a href="#" class="additional-widget-btn down methodologies-info-dropdown" id="add-info-dropdown" data-toggle="dropdown">						
								<span class="simple-page-icon" style="margin-top:-3px"></span>						
								<span>Methodology</span>
							</a>
							<div class="dropdown-menu additional-widget-dropmenu" aria-labelledby="add-info-dropdown" style="margin-left:6px;">					
																																																															
									
																			<a class="dropdown-item" href="/spdji/en/methodology/article/dow-jones-averages-methodology/" contentTitle="Dow Jones Averages Methodology" contentIdentifier="6a56d697-e8de-4758-bfcf-9ab405b95657" gtm-content-type="Methodologies" data-gtm-category="Documents" data-gtm-action="Article"  data-gtm-label="Methodology_Dow Jones Averages Methodology">
											<span class="simple-page-icon"></span><span>Dow Jones Averages Methodology</span>								 
										</a>
																																	</div>
						</div>
					</div>						
				            </div>
									<!-- indexFamilyCategoryVelocityVarName : usEquity, djAverages -->
            <div class="row">
                            	               <div class="col col-md-6 index-details-docs-icon-wrper additional-info ">
                  <div class="additional-widget-wrapper mt-1 es-wrapper">
                     <a href="#" class="additional-widget-btn down additional-info-dropdown" data-toggle="dropdown">
                          <svg class="svg-icons-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.41 61.41">
						  <defs>
							 <style>.cls-1{fill:none;stroke:#b7b7b8;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:#b7b7b8;}</style>
						  </defs>
						  <title>Additional Info</title>
						  <g id="Layer_3" data-name="Layer 3">
							 <circle class="cls-1" cx="30.71" cy="30.71" r="29.21"/>
						  </g>
						  <g id="Layer_4" data-name="Layer 4">
							 <rect class="cls-2" x="29.03" y="23.6" width="3.36" height="21.2"/>
							 <circle class="cls-2" cx="30.47" cy="19.33" r="2.34"/>
						  </g>
						</svg>
                         <span class="es-title">Additional Info</span></a>
							<div class="dropdown-menu additional-widget-dropmenu">
								<a class="dropdown-item" href="#">
									 																																						
										
																																						
										
										
																																																							
								
                                <a class="dropdown-item" href="/spdji/en/web-data-downloads/reports/dja-performance-report-daily.xls?force_download=true" contentId="dd83ecd4-0a43-4157-8e64-f13721428ac8"  hostIdentifier="48190c8c-42c4-46af-8d1a-0cd5db894797" language="1" indexId="1720081" gtm-content-type="Additional Info" data-gtm-category="Documents" data-gtm-action="Download"  data-gtm-label="Additional Info_DJIA Daily Performance History" indexName="Dow Jones Industrial Average" fileName="web-page"  target="_self">
									<span class="static-icon xlsx-icon"></span><span>DJIA Daily Performance History</span>
                                </a>
                                    <div class="dropdown-divider"></div>
                              																																						
										
																																						
										
										
																																																							
								
                                <a class="dropdown-item" href="/spdji/en/web-data-downloads/reports/dja-performance-report-yearly.xls?force_download=true" contentId="5969b0f5-48af-45c1-9f9a-fdc6a4c301af"  hostIdentifier="48190c8c-42c4-46af-8d1a-0cd5db894797" language="1" indexId="1720081" gtm-content-type="Additional Info" data-gtm-category="Documents" data-gtm-action="Download"  data-gtm-label="Additional Info_DJIA Yearly Performance History" indexName="Dow Jones Industrial Average" fileName="web-page"  target="_self">
									<span class="static-icon xlsx-icon"></span><span>DJIA Yearly Performance History</span>
                                </a>
                                    <div class="dropdown-divider"></div>
                              																																						
										
																																						
										
										
																																																							
								
                                <a class="dropdown-item" href="/spdji/en/web-data-downloads/reports/dja-performance-report-monthly.xls?force_download=true" contentId="b2c2e87e-0786-4c9d-8a90-8a98ad33b209"  hostIdentifier="48190c8c-42c4-46af-8d1a-0cd5db894797" language="1" indexId="1720081" gtm-content-type="Additional Info" data-gtm-category="Documents" data-gtm-action="Download"  data-gtm-label="Additional Info_DJIA Monthly Performance History" indexName="Dow Jones Industrial Average" fileName="web-page"  target="_self">
									<span class="static-icon xlsx-icon"></span><span>DJIA Monthly Performance History</span>
                                </a>
                                    <div class="dropdown-divider"></div>
                                                         
                     </div>
                  </div>
               </div>
            	

                            </div>
        </div>
    </div>

    <div class="index-details-overview-top-wrapper">
        <div class="index-details-accordion-title">
            <h2>Index Classification</h2>
        </div>
        <div class="index-details-accordion-content">
            <div class="index-classification-breadcrums">  			
			
																										
				
								
																						
																															<a href="/spdji/en/index-family/equity/" data-gtm-category="Index Classification" data-gtm-action="Click" data-gtm-label="Equity">Equity</a>
													<a href="/spdji/en/index-family/equity/us-equity/" data-gtm-category="Index Classification" data-gtm-action="Click" data-gtm-label="U.S. Equity">U.S. Equity</a>
													<a href="/spdji/en/index-family/equity/us-equity/dow-jones-averages/" data-gtm-category="Index Classification" data-gtm-action="Click" data-gtm-label="Dow Jones Averages">Dow Jones Averages</a>
				            </div>
			














  
    
      
  
  



 





  
      
          
    

              
    

              
    

              
    

              
    

        
      
          
    

              
    

              
    

              
    

              
    

        
      
          
    

              
    

              
    

              
    

              
    

              
    

              
    

              
    

              
    

              
    

              
    

        
      
          
    

              
    

              
    

              
    

              
    

              
    

        
      
          
    

              
    

              
    

              
    

        
      
          
    

        
      
          
    

              
    

              
    

              
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

        
      
          
    

              
    

              
    

              
    

              
    

              
    

              
    

        
      
          
    

        
      
          
    

              
    

              
    

              
    

              
    

              
    

        
      
          
    

              
    

        
      
          
    

              
    

              
    

              
    

              
    

              
    

              
    

        
      
          
    

        
      
          
    

        
      
          
    

              
    

        
      
          
    

        
      
          
    

              
    

              
    

        
      
          
    

        
      
          
    

              
    

              
    

        
      
          
    

              
    

              
    

        
      
          
    

              
    

        
      
          
    

        
      
          
    

        
      
          
    

              
    

              
    

              
    

              
    

        
      
          
    

        
      
          
    

              
    

              
    

              
    

              
    

              
    

        
      
          
    

        
      
          
    

          
     
                                                                    
  
  			            <div class="related-indices-header">Related Indices</div>
            <ul class="related-indices-list">
																			<li>
						<a href="/spdji/en/indices/equity/dow-jones-transportation-average" data-gtm-category="Related Indices" data-gtm-action="Index Detail" data-gtm-label="Dow Jones Transportation Average">Dow Jones Transportation Average</a>
					</li>
																			<li>
						<a href="/spdji/en/indices/equity/dow-jones-utility-average" data-gtm-category="Related Indices" data-gtm-action="Index Detail" data-gtm-label="Dow Jones Utility Average">Dow Jones Utility Average</a>
					</li>
																			<li>
						<a href="/spdji/en/indices/equity/dow-jones-composite-average" data-gtm-category="Related Indices" data-gtm-action="Index Detail" data-gtm-label="Dow Jones Composite Average™">Dow Jones Composite Average</a>
					</li>
																			<li>
						<a href="/spdji/en/indices/equity/dow-jones-industrial-average-yield-weighted-index" data-gtm-category="Related Indices" data-gtm-action="Index Detail" data-gtm-label="Dow Jones Industrial Average Yield Weighted Index">Dow Jones Industrial Average Yield Weighted Index</a>
					</li>
																			<li>
						<a href="/spdji/en/indices/equity/sp-kensho-global-democratized-banking-index" data-gtm-category="Related Indices" data-gtm-action="Index Detail" data-gtm-label="S&P Kensho Global Democratized Banking Index">S&P Kensho Global Democratized Banking Index</a>
					</li>
				            </ul>
			        </div>		
    </div>
</div>
<div class="mobile-only-divider"></div>
<style>
.static-icon {
	width:20px;
	height: 20px;
	float: left;
	margin-right:10px;
}
.additional-widget-btn.down[aria-expanded="true"] .simple-pdf-icon,
.additional-widget-btn.down[aria-expanded="true"] .simple-page-icon,
.additional-widget-btn.down[aria-expanded="true"] .svg-icons-default{
	margin: 0 10px;
}
.simple-page-icon {
    background-image: url(/spdji/en/app/images/simple-page-icon.png);
}
.index-detail-main .additional-info .additional-widget-wrapper .additional-widget-btn.down[aria-expanded="true"]{
	width:165px;
}
</style>		


<!--- hh ("+contentType:IndexNews +IndexNews.announcementType:*indexNews* +(categories:djAverages) +IndexNews.sysExpireDate:[20240201104313 TO 21001010101000] +IndexNews.sysPublishDate:[19001010101000 TO 20240201104313]  +(conhost:48190c8c-42c4-46af-8d1a-0cd5db894797 conhost:SYSTEM_HOST) +languageId:1 +live:true ", 0, "IndexNews.sysPublishDate desc")--->




    <div class="index-details-overview-middle-container">
   <div class="index-details-overview-middle-first-col" id="index-detail-news-announcement-overview">
         <div class="index-details-overview-title">
            <h2>News & Announcements</h2>
            <a href="#news-research" class="link-with-arrow" target="" data-gtm-category="News & Announcements" data-gtm-action="More" data-gtm-label="Explore Index Detail News & Research" >SEE ALL</a>
         </div>
         <div class="index-details-news-content">
            <ul class="card-article list-wrapper">               
                                                
                                                                                                                                                   <li class="card-article list-item">
                           <a class="card-article-link" href="/spdji/en/documents/indexnews/announcements/20230524-1464119/1464119_spdjimergersacquisitionmethodologyupdate5-24-2023.pdf"  gtm-content-type="IndexNews" data-gtm-category="News & Announcements" data-gtm-action="Inbound" data-gtm-label="S&P Dow Jones Equity Indices’ Mergers & Acquisitions Policy Update" data-placement="bottom" data-original-title="S&P Dow Jones Equity Indices’ Mergers & Acquisitions Policy Update"  target="_blank" >
                              <div class="card-article-content">
                                 <ul class="meta-data">
                                       <li class="meta-data-txt">
                                                                                                            Index News
                                                                                                            </li>
                                       <li class="meta-data-date">May 24, 2023</li>
                                       <li class="meta-data-date">5:15 PM</li>
                                 </ul>                                 
                                  <h1 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="2">S&P Dow Jones Equity Indices’ Mergers & Acquisitions Policy Update</h1>
                               <h1 class="mobile-tablet-only">S&P Dow Jones Equity Indices’ Mergers & Acquisitions Policy Update</h1>
                              </div>
                           </a>
                     </li>
                                                                  
                                                                                                                                                   <li class="card-article list-item">
                           <a class="card-article-link" href="/spdji/en/documents/indexnews/announcements/20220126-1449426/1449426_djuaexespinfeb2022.pdf"  gtm-content-type="IndexNews" data-gtm-category="News & Announcements" data-gtm-action="Inbound" data-gtm-label="Exelon to remain in Dow Jones Utility Average after Spin-off Transaction" data-placement="bottom" data-original-title="Exelon to remain in Dow Jones Utility Average after Spin-off Transaction"  target="_blank" >
                              <div class="card-article-content">
                                 <ul class="meta-data">
                                       <li class="meta-data-txt">
                                                                                                            Index News
                                                                                                            </li>
                                       <li class="meta-data-date">Jan 26, 2022</li>
                                       <li class="meta-data-date">5:15 PM</li>
                                 </ul>                                 
                                  <h1 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="2">Exelon to remain in Dow Jones Utility Average after Spin-off Transaction</h1>
                               <h1 class="mobile-tablet-only">Exelon to remain in Dow Jones Utility Average after Spin-off Transaction</h1>
                              </div>
                           </a>
                     </li>
                                                                  
                                                                                                                                                   <li class="card-article list-item">
                           <a class="card-article-link" href="/spdji/en/documents/indexnews/announcements/20211101-1444761/1444761_djiaibmspinnov2021.pdf"  gtm-content-type="IndexNews" data-gtm-category="News & Announcements" data-gtm-action="Inbound" data-gtm-label="IBM to remain in Dow Jones Industrial Average after Spin-off Transaction" data-placement="bottom" data-original-title="IBM to remain in Dow Jones Industrial Average after Spin-off Transaction"  target="_blank" >
                              <div class="card-article-content">
                                 <ul class="meta-data">
                                       <li class="meta-data-txt">
                                                                                                            Index News
                                                                                                            </li>
                                       <li class="meta-data-date">Nov 1, 2021</li>
                                       <li class="meta-data-date">5:15 PM</li>
                                 </ul>                                 
                                  <h1 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="2">IBM to remain in Dow Jones Industrial Average after Spin-off Transaction</h1>
                               <h1 class="mobile-tablet-only">IBM to remain in Dow Jones Industrial Average after Spin-off Transaction</h1>
                              </div>
                           </a>
                     </li>
                                                                  
                                                                                                                                                         <li class="card-article list-item">
                           <a class="card-article-link" href="/spdji/en/corporate-news/article/sp-dow-jones-indices-reports-us-indicated-dividend-payments-increased-12-9-billion-in-q2-2021"  gtm-content-type="IndexNews" data-gtm-category="News & Announcements" data-gtm-action="Article" data-gtm-label="S&P Dow Jones Indices Reports U.S. Indicated  Dividend Payments Increased $12.9 Billion in Q2 2021" data-placement="bottom" data-original-title="S&P Dow Jones Indices Reports U.S. Indicated  Dividend Payments Increased $12.9 Billion in Q2 2021"  target="_self" >
                              <div class="card-article-content">
                                 <ul class="meta-data">
                                       <li class="meta-data-txt">
                                                                                                            Index News
                                                                                                            </li>
                                       <li class="meta-data-date">Jul 7, 2021</li>
                                       <li class="meta-data-date">9:00 AM</li>
                                 </ul>                                 
                                  <h1 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="2">S&P Dow Jones Indices Reports U.S. Indicated  Dividend Payments Increased $12.9 Billion in Q2 2021</h1>
                               <h1 class="mobile-tablet-only">S&P Dow Jones Indices Reports U.S. Indicated  Dividend Payments Increased $12.9 Billion in Q2 2021</h1>
                              </div>
                           </a>
                     </li>
                                                                                                                                                                     </ul>
         </div>
   </div>
         <div class="index-details-overview-middle-sec-col">
         <div class="index-details-overview-title">
            <h2>Index-Linked Products </h2>
            <a href="#index-linked-product" class="link-with-arrow" target="" data-gtm-category="Index-Linked Products" data-gtm-action="More" data-gtm-label="Explore Index Detail Index-Linked Products" >SEE ALL</a>
         </div>
         <table class="table my-indices-table index-linked-table">
            <thead>
				<tr>
				   <th>Product Name</th>
				   <th>Product Type</th>
    			   <th>Country/Region</th>
               <th>Ticker</th>
				</tr>
            </thead>
            <tbody>
            
            				<tr>
                     <td data-title="Product Name">
                        <span>Amundi PEA Dow Jones Industrial Avg ETF</span>
                     </td>
                      <td data-title="Product Type">
                        <span>ETF</span>
                     </td>
                     <td data-title="Country/Region">
                        <span>Germany</span>
                     </td>
                     <td data-title="Ticker">
                        <span>AHYL</span>
                     </td>
				</tr>
            				<tr>
                     <td data-title="Product Name">
                        <span>BMO Dow Jones Ind Avg Hdgd to CAD ETF</span>
                     </td>
                      <td data-title="Product Type">
                        <span>ETF</span>
                     </td>
                     <td data-title="Country/Region">
                        <span>Canada</span>
                     </td>
                     <td data-title="Ticker">
                        <span>ZDJ</span>
                     </td>
				</tr>
            				<tr>
                     <td data-title="Product Name">
                        <span>Cathay DJIA ETF</span>
                     </td>
                      <td data-title="Product Type">
                        <span>ETF</span>
                     </td>
                     <td data-title="Country/Region">
                        <span>Taiwan</span>
                     </td>
                     <td data-title="Ticker">
                        <span>00668</span>
                     </td>
				</tr>
            				<tr>
                     <td data-title="Product Name">
                        <span>DJIA Index (UDF)</span>
                     </td>
                      <td data-title="Product Type">
                        <span>Future</span>
                     </td>
                     <td data-title="Country/Region">
                        <span>Taiwan</span>
                     </td>
                     <td data-title="Ticker">
                        <span>UDF</span>
                     </td>
				</tr>
            				<tr>
                     <td data-title="Product Name">
                        <span>DJIA Margin (¥10)</span>
                     </td>
                      <td data-title="Product Type">
                        <span>Future</span>
                     </td>
                     <td data-title="Country/Region">
                        <span>Japan</span>
                     </td>
                     <td data-title="Ticker">
                        <span>D23/JPY</span>
                     </td>
				</tr>
                        </tbody>
         </table>
   </div>
   </div>
<div class="mobile-only-divider"></div>		


		
		
								
	
		
																
		
					
		
								
	
		
																
		
					
		
								
	
		
																
		
					
		
								
	
		
																
		
					
		
														
	
		
																
		
					
		
														
	
		
																
		
					
		
								
	
		
																
		
					
		
								
	
		
																
		
					
		
														
	
		
																
		
					
		
														
	
		
																
		
					
		
								
	
		
																
		
					
		
														
	
		
																
		
					
		
														
	
		
																
		
					
		
								
	
		
																
		
					
		
								
	
		
																
		
					
		
								
	
		
																
		
			
	<div class="index-details-ovw-news-res-container feature-card-container">
			<div class="feature-card-title card-set-details">
				<h2 class="card-title">Research & Insights</h2>
				<a href="#news-research" class="link-with-arrow view-all view-all-cta" target=""  data-gtm-category="Research & Insights" data-gtm-action="More" data-gtm-label="Explore Index Detail News & Research">SEE ALL</a>
			</div>
			<div class="carousel-wrapper featured-three featured-tallshort-cards">
				<div class="card-set-three card-set-two-list three-short-cards card-set-product one-tall-two-short-card">				
					<ul class="feature-content content-card feature-content-list feature-card-carousel owl-carousel" ignorableInodes="" id="index-ovw-news-carosuel" style="">
																					<li class="slider-card item" style="">
									<div class="black">
										<a class="modalimage card product card-media index-detail-news-research-card"  href="/spdji/en/commentary/article/us-equities-market-attributes" gtm-content-type="Commentary" data-gtm-category="Research & Insights" data-gtm-action="Download" data-gtm-label="U.S. Equities Market Attributes December 2023" contentIdentifier="58292ccd-970b-42f8-9598-55f1748d5861" contentTitle="U.S. Equities Market Attributes December 2023"  target="_self" >
											<div class="card-content">
												<ul class="meta-data">
													<li class="meta-data-type black">Commentary - Jan 3, 2024 </li>
												</ul>
												<h3 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="4" data-placement="bottom" data-title="U.S. Equities Market Attributes December 2023">U.S. Equities Market Attributes December 2023</h3>
                                                <h3 class="mobile-tablet-only">U.S. Equities Market Attributes December 2023</h3>
																							</div>
																						<picture class="car-background-image tets js-fit-parent" aria-hidden="true">
												<source srcset="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" media="(min-width: 1360px)">
												<img src="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" alt="" class="lazyloaded">
											</picture>
																					</a>
									</div>
								</li>
																												<li class="slider-card item" style="">
									<div class="black">
										<a class="modalimage card product card-media index-detail-news-research-card"  href="/spdji/en/commentary/article/us-equities-market-attributes-november-2023" gtm-content-type="Commentary" data-gtm-category="Research & Insights" data-gtm-action="Download" data-gtm-label="U.S. Equities Market Attributes November 2023" contentIdentifier="1c50ebf7-9ea0-408d-9cde-6cc525bae0ca" contentTitle="U.S. Equities Market Attributes November 2023"  target="_self" >
											<div class="card-content">
												<ul class="meta-data">
													<li class="meta-data-type black">Commentary - Dec 4, 2023 </li>
												</ul>
												<h3 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="4" data-placement="bottom" data-title="U.S. Equities Market Attributes November 2023">U.S. Equities Market Attributes November 2023</h3>
                                                <h3 class="mobile-tablet-only">U.S. Equities Market Attributes November 2023</h3>
																							</div>
																						<picture class="car-background-image tets js-fit-parent" aria-hidden="true">
												<source srcset="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" media="(min-width: 1360px)">
												<img src="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" alt="" class="lazyloaded">
											</picture>
																					</a>
									</div>
								</li>
																												<li class="slider-card item" style="">
									<div class="black">
										<a class="modalimage card product card-media index-detail-news-research-card"  href="/spdji/en/commentary/article/us-equities-market-attributes-october-2023" gtm-content-type="Commentary" data-gtm-category="Research & Insights" data-gtm-action="Download" data-gtm-label="U.S. Equities Market Attributes October 2023" contentIdentifier="09be07ab-50d4-4362-af69-a54a2c69d01e" contentTitle="U.S. Equities Market Attributes October 2023"  target="_self" >
											<div class="card-content">
												<ul class="meta-data">
													<li class="meta-data-type black">Commentary - Nov 2, 2023 </li>
												</ul>
												<h3 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="4" data-placement="bottom" data-title="U.S. Equities Market Attributes October 2023">U.S. Equities Market Attributes October 2023</h3>
                                                <h3 class="mobile-tablet-only">U.S. Equities Market Attributes October 2023</h3>
																							</div>
																						<picture class="car-background-image tets js-fit-parent" aria-hidden="true">
												<source srcset="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" media="(min-width: 1360px)">
												<img src="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" alt="" class="lazyloaded">
											</picture>
																					</a>
									</div>
								</li>
																		</ul>
				</div>
			</div>
	</div>
		</div>
</div>	<div id="index-detail-data">
	<section class="index-detail-page-data">
			<section id="sidebar-nav" class="detail-data-sidenav">
				<div class="sidebar-nav-widget">
					<h4>On this page</h4>
					<ul>
						<li class="data-quick-facts-menu">
							<a class="active" href="#data-quick-facts" data-gtm-category="Index Detail Data Nav" data-gtm-action="Click" data-gtm-label="Quick Facts">Quick Facts</a>
						</li>
						<li class="data-characteristics-menu">
							<a href="#data-characteristics" data-gtm-category="Index Detail Data Nav" data-gtm-action="Click" data-gtm-label="Characteristics">Characteristics</a>
						</li>
						<li class="data-constituents-menu">
							<a href="#data-constituents" data-gtm-category="Index Detail Data Nav" data-gtm-action="Click" data-gtm-label="Constituents">Constituents</a>
						</li>
						<li class="data-sector-breakdown-menu">
							<a href="#data-sector-breakdown" data-gtm-category="Index Detail Data Nav" data-gtm-action="Click" data-gtm-label="Sector Breakdown">Sector Breakdown</a>
						</li>
						<li class="data-country-breakdown-menu">
							<a href="#data-country-breakdown" data-gtm-category="Index Detail Data Nav" data-gtm-action="Click" data-gtm-label="Country Breakdown">Country Breakdown</a>
						</li>
						<li class="data-tickers-menu">
							<a href="#data-tickers" data-gtm-category="Index Detail Data Nav" data-gtm-action="Click" data-gtm-label="Tickers">Tickers</a>
						</li>
					</ul>
					
																																																																							
																<div class="additional-widget-wrapper mt-1">
							<a href="#" class="additional-widget-btn down factsheet-data-button" id="add-info-dropdown" data-toggle="dropdown" style="width: 210px;font-size: 16px;margin-top:23px">						
								<span class="simple-pdf-icon" style="margin-top:-3px;"></span>						
								<span>Download Factsheet</span>
							</a>
							<div class="dropdown-menu additional-widget-dropmenu factsheet-data-tab" aria-labelledby="add-info-dropdown" style="margin-left:6px;">	
																																																																									
									
																		
									<a href='/spdji/en/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&indexId=1720081' contentId = "0789394b-489d-4446-b132-eb7a50a3ea82" title="Dow Jones Industrial Average" indexName="Dow Jones Industrial Average" 
										class="dropdown-item"  gtm-content-type="Factsheets" data-gtm-category="Index Detail Data Nav" data-gtm-action="Download" data-gtm-label="Factsheet_Dow Jones Industrial Average (USD) Factsheet"> 
										<span class="simple-pdf-icon"></span><span>Dow Jones Industrial Average (USD) Factsheet</span>								 
									</a>							
																								</div>
						</div>
									</div>
			</section>
			<section class="download-factsheet-mob mobile-only">
									<div class="additional-widget-wrapper mt-1">
						<a href="#" class="additional-widget-btn down factsheet-data-button" id="add-info-dropdown" data-toggle="dropdown" 
						style="width: 210px;font-size: 16px;margin-top:23px">						
							<span class="simple-pdf-icon" style="margin-top:-3px;"></span>						
							<span>Download Factsheet</span>
						</a>
						<div class="dropdown-menu additional-widget-dropmenu factsheet-data-tab" aria-labelledby="add-info-dropdown" style="margin-left:6px;">	
																																																									
																<a href='/spdji/en/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&indexId=1720081' contentId = "0789394b-489d-4446-b132-eb7a50a3ea82" title="Dow Jones Industrial Average" indexName="Dow Jones Industrial Average" 
									class="dropdown-item" gtm-content-type="Factsheets" data-gtm-category="Index Detail Data Nav" data-gtm-action="Download" data-gtm-label="Factsheet_Dow Jones Industrial Average (USD) Factsheet"> 
									<span class="simple-pdf-icon"></span><span>Dow Jones Industrial Average (USD) Factsheet</span>								 
								</a>							
																					</div>
					</div>
							</section>
			<section class="detail-data-content">
				<section class="data-quick-facts detail-data-widgets" id="data-quick-facts"></section>
				<section class="data-characteristics table-divider detail-data-widgets" id="data-characteristics">
					<hr class="divider">
					<h2>Characteristics</h2>
					<section class="characteristics-column"></section>	
					<div class="characteristics-disclaimer disclaimer-txt-index"></div>					
					<section class="esg-column"></section>
					<div class="esg-disclaimer disclaimer-txt-index"></div>		
				</section>
				<section class="data-constituents table-divider detail-data-widgets" id="data-constituents"> 
					<hr class="divider">
					<h2 class="no-border-header">Constituents</h2>
					<div class="data-constituents-export">
						<p>Top 10 Constituents by Index Weight</p>
						<a class="constituents-export" id="constituents-export-data" href="#" gtm-content-type="Data Exports" data-gtm-category="Data_Constituents" data-gtm-action="Next Step" data-gtm-label="Export_Index Data_Constituents">
							Full Constituents List<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.78 25.78"><defs><style>.export-svg-prop{fill:#DF1E36;stroke: #DF1E36;stroke-width: 1px;}</style></defs><title>Full Constituents List</title><g id="Left"><path class="export-svg-prop" d="M14.5,1.61A12.89,12.89,0,1,0,27.39,14.5,12.89,12.89,0,0,0,14.5,1.61Zm0,24.2A11.3,11.3,0,1,1,25.78,14.5,11.32,11.32,0,0,1,14.5,25.81Zm3.75-14.14L14.5,15.41l-3.75-3.74a.8.8,0,0,0-1.14,0,.81.81,0,0,0,0,1.14l4.89,4.76,4.89-4.76a.85.85,0,0,0,.23-.57.83.83,0,0,0-.23-.57A.8.8,0,0,0,18.25,11.67Z" transform="translate(-1.61 -1.61)"></path></g></svg>
						</a>
					</div>				   
					<div class="filterable-table-list-three">
						<ul class="filterable-list-header">
							<li class="filterable-list-cell">
								<h6>Constituent</h6>
							</li>
							<li class="filterable-list-cell">
								<h6>Symbol</h6>
							</li>
							<li class="filterable-list-cell">
								<h6>Sector*</h6>
							</li>
						</ul>
						<div class="filterable-table-content"></div>
						<div class="disclaimer-txt-index">
							<p></p>
							<p class="updated-date"></p>
						</div>
					</div>
				</section>
				<section class="data-sector-breakdown table-divider detail-data-widgets" id="data-sector-breakdown">
					<hr class="divider">
					<h2 class="no-border-header">Sector Breakdown</h2>
					<section class="index-donut-chart-wrapper">
						<div class="index-donut-chart-area" id="chart-area"></div>
						<div class="index-donut-table-value">
							<div class="donut-table-head">
								<div class="donut-table-cell">
									<span>Sector</span>
								</div>
								<div class="donut-table-cell">
									<span>Index Weight</span>
								</div>
							</div>
							<div class="donut-table-body-content">                                        
							</div>
						</div>
					</section>
					<section class="disclaimer-txt-index">
						<p class="index-detail-gics-sector-footer-description"></p>
						<p class="index-detail-gics-sector-footer"></p>
						<p class="updated-date"></p>
					</section>
				</section>
				<section class="data-country-breakdown table-divider detail-data-widgets" id="data-country-breakdown">
					<hr class="divider">				   
				</section>
				<section class="data-tickers table-divider detail-data-widgets" id="data-tickers">
					<hr class="divider">					
				</section>		   
			</section>
		</section>
	</div>


	
			
			
	
		    
    						    		
	
    
      	
			
			
	
		    
    						    		
	
    
      	
			
			
	
		    
    						    		
	
    
      	
			
			
	
		    
    						    		
	
    
      	
			
							
	
		    
    						    		
	
    
      	
			
							
	
		    
    						    		
	
    
      	
			
			
	
		    
    						    		
	
    
      	
			
			
	
		    
    						    		
	
    
      	
			
							
	
		    
    						    		
	
    
      	
			
							
	
		    
    						    		
	
    
      	
			
			
	
		    
    						    		
	
    
      	
			
							
	
		    
    						    		
	
    
      	
			
							
	
		    
    						    		
	
    
      	
		    
			
	
		    
    						    		
	
    
      	
		    
			
	
		    
    						    		
	
    
      	
		    
			
	
		    
    						    		
	
    
      

		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
<div id="index-detail-news" class="content index-detail-news">
   <div class="card-set-three card-set-two-list three-short-cards card-set-product" id="news-research-page-carosuel">
    <div class="carousel-wrapper featured-three short-cards js-carousel">
        <div class="ingnorableInode">
            <ul class="feature-content content-card feature-content-list" id="feature-content" ignorableInodes=" -inode:9414f67f-1021-43da-8f3e-8c77680f8616 -inode:255182c5-e01b-4935-9589-fb40a250257a -inode:df50e39b-ce0d-458f-831c-bd76eda6b1b3">
                <div class="card-container card-set-wrapper">
                    <div class="content-card">
                                                                            <li class="slider-card " >
                            <div class="card-details black">
                                <a class="modalimage card product card-media" href="/spdji/en/commentary/article/us-equities-market-attributes"  gtm-content-type="Commentary" contentIdentifier="58292ccd-970b-42f8-9598-55f1748d5861" contentTitle="U.S. Equities Market Attributes December 2023" data-gtm-category="News & Research_Featured" data-gtm-action="Download" data-gtm-label="U.S. Equities Market Attributes December 2023"  target="_self" >
                                    <div class="card-content ">
                                        <ul class="meta-data">
                                            <li class="meta-data-type">
                                            <span class="text-upper">Commentary</span>
                                                                                        <span>- Jan 03, 2024</span>
                                                                                        </li>
                                        </ul>
                                        <h3 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="7" data-placement="bottom" data-title="U.S. Equities Market Attributes December 2023">U.S. Equities Market Attributes December 2023</h3>
                                        <h3 class="mobile-tablet-only">U.S. Equities Market Attributes December 2023</h3>
                                                                            </div>
									<!-- /images/cards/us-equities-market-attributes-437x565.jpg -->
                                    <picture class="car-background-image js-fit-parent test1" aria-hidden="true">
                                        <source srcset="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" media="(min-width: 1360px)">
                                        <img src="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" alt="" class="lazyloaded">
                                    </picture>
                                </a>
                            </div>
                        </li>
                                                                                                     <li class="slider-card " >
                            <div class="card-details black">
                                <a class="modalimage card product card-media" href="/spdji/en/commentary/article/us-equities-market-attributes-november-2023"  gtm-content-type="Commentary" contentIdentifier="1c50ebf7-9ea0-408d-9cde-6cc525bae0ca" contentTitle="U.S. Equities Market Attributes November 2023" data-gtm-category="News & Research_Featured" data-gtm-action="Download" data-gtm-label="U.S. Equities Market Attributes November 2023"  target="_self" >
                                    <div class="card-content ">
                                        <ul class="meta-data">
                                            <li class="meta-data-type">
                                            <span class="text-upper">Commentary</span>
                                                                                        <span>- Dec 04, 2023</span>
                                                                                        </li>
                                        </ul>
                                        <h3 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="7" data-placement="bottom" data-title="U.S. Equities Market Attributes November 2023">U.S. Equities Market Attributes November 2023</h3>
                                        <h3 class="mobile-tablet-only">U.S. Equities Market Attributes November 2023</h3>
                                                                            </div>
									<!-- /images/cards/us-equities-market-attributes-437x565.jpg -->
                                    <picture class="car-background-image js-fit-parent test1" aria-hidden="true">
                                        <source srcset="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" media="(min-width: 1360px)">
                                        <img src="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" alt="" class="lazyloaded">
                                    </picture>
                                </a>
                            </div>
                        </li>
                                                                                                     <li class="slider-card " >
                            <div class="card-details black">
                                <a class="modalimage card product card-media" href="/spdji/en/commentary/article/us-equities-market-attributes-october-2023"  gtm-content-type="Commentary" contentIdentifier="09be07ab-50d4-4362-af69-a54a2c69d01e" contentTitle="U.S. Equities Market Attributes October 2023" data-gtm-category="News & Research_Featured" data-gtm-action="Download" data-gtm-label="U.S. Equities Market Attributes October 2023"  target="_self" >
                                    <div class="card-content ">
                                        <ul class="meta-data">
                                            <li class="meta-data-type">
                                            <span class="text-upper">Commentary</span>
                                                                                        <span>- Nov 02, 2023</span>
                                                                                        </li>
                                        </ul>
                                        <h3 class="desktop-above-only enable-trunk-tooltip" data-trunk-lines="7" data-placement="bottom" data-title="U.S. Equities Market Attributes October 2023">U.S. Equities Market Attributes October 2023</h3>
                                        <h3 class="mobile-tablet-only">U.S. Equities Market Attributes October 2023</h3>
                                                                            </div>
									<!-- /images/cards/us-equities-market-attributes-437x565.jpg -->
                                    <picture class="car-background-image js-fit-parent test1" aria-hidden="true">
                                        <source srcset="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" media="(min-width: 1360px)">
                                        <img src="/spdji/en/images/cards/us-equities-market-attributes-437x565.jpg" alt="" class="lazyloaded">
                                    </picture>
                                </a>
                            </div>
                        </li>
                                                                     </div>
                </div>
            </ul>
            <nav class="carousel-nav-wrapper visible card-slider display">
                <span href="#" value="1" class="carousel__nav-item active"> </span>
                <span href="#" value="2" class="carousel__nav-item"> </span>
                <span href="#" value="3" class="carousel__nav-item"> </span>
            </nav>
        </div>
    </div>
</div>

   <div class="home-content news-content">
<div indexSpecializationName="equity--us-equity--dow-jones-averages" class="index-specialization-name d-none"></div>
    <section class="news-filter">
        <div class="side-column-filters">
            <button class="filter_toggle_button" id="news_filter">Filters
                <i class="filter-icon"></i>
            </button>
            <div class="content-type-section">
                <div class="filter-sub-header">CONTENT TYPE</div>
                <ul class="dropdown-menu-chkbox">
                    					<li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="brochure" id="brochure" name="brochure" class="dropdown-menu-chkbox-input" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Brochure"/>
                        <label class="dropdown-chkbox-label" for="brochure">
                            <span>Brochure </span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item" >
                        <input type="checkbox" data-value="resourceresearch" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Research" id="resourceresearch" name="resourceresearch" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="resourceresearch">
                            <span>Research </span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="commentary"  data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Commentary" id="commentary" name="commentary" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="commentary">
                            <span>Commentary</span>
                        </label>
                    </li>
                     <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="education"  data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Education" id="education" name="education" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="education">
                            <span>Education</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="performancereports" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Performance Reports" id="performancereports" name="performancereports" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="performancereports">
                            <span>Performance Reports</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="events"  data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Events" id="events" name="events" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="events">
                            <span>Events</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="webinars" id="webinars"  data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Webinars" name="webinars" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="webinars">
                            <span>Webinars</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="indextv" id="indextv" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Index TV"  name="indextv" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="indextv">
                            <span>Index TV</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" data-value="corporatenews" id="corporatenews"  data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Corporate News" name="corporatenews" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="corporatenews">
                            <span>Corporate News </span>
                        </label>
                    </li>
                    <li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" name="indexannouncements" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Index Announcements" id="indexannouncements" data-value="indexannouncements" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="indexannouncements">
                            <span>Index Announcements </span>
                        </label>
                    </li>
					<li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" name="indexlaunches" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Index Launches" id="indexlaunches" data-value="indexlaunches" class="dropdown-menu-chkbox-input" />
                        <label class="dropdown-chkbox-label" for="indexlaunches">
                            <span>Index Launches</span>
                        </label>
                    </li>
					<li class="dropdown-menu-chkbox-item">
                        <input type="checkbox" name="indexdecommissions" id="indexdecommissions" data-value="indexdecommissions" class="dropdown-menu-chkbox-input" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Content Type_Index Decommissions" />
                        <label class="dropdown-chkbox-label" for="indexdecommissions">
                            <span>Index Decommissions</span>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="date-section">
                <div class="filter-sub-header">DATES</div>
                <ul class="dropdown-menu-radio">
                    <li class="dropdown-menu-radio-item">
                        <input type="radio" id="all"name="dates" data-value="all" class="dropdown-menu-radio-input" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Date_All" checked/>
                        <label class="dropdown-radio-label" for="all">
                            <span>All</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-radio-item">
                        <input type="radio" id="pastweek" name="dates" data-value="pastweek" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Date_Past Week" class="dropdown-menu-radio-input" />
                        <label class="dropdown-radio-label" for="pastweek">
                            <span>Past Week</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-radio-item">
                        <input type="radio" id="past30days" name="dates" data-value="past30days" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Date_Past 30 Days" class="dropdown-menu-radio-input" />
                        <label class="dropdown-radio-label" for="past30days">
                            <span>Past 30 Days</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-radio-item">
                        <input type="radio" id="past60days" name="dates" data-value="past60days" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Date_Past 60 Days" class="dropdown-menu-radio-input" />
                        <label class="dropdown-radio-label" for="past60days">
                            <span>Past 60 Days</span>
                        </label>
                    </li>
                    <li class="dropdown-menu-radio-item">
                        <input type="radio" id="pastyear" name="dates" data-value="pastyear" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Filter" data-gtm-label="Date_Past Year" class="dropdown-menu-radio-input" />
                        <label class="dropdown-radio-label" for="pastyear">
                            <span>Past Year</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="news-latest">
    <div class="news-and-research-template">
    </div>
    <div class="d-none no-data-available">No results match your criteria.</div>
        <div class="load-more-wrapper js-load-more js-homepage" data-on-complete-label="Back To Top">
            <a class="button-load-more arrow news-load-more" pageNumber="" data-gtm-category="News & Research_Newsfeed" data-gtm-action="Click" data-gtm-label="Load More/All" >
                <span>Load More</span>
            </a>
        </div>

    </section>

</div>
</div>
















<!-- facetInputMap : {host=[48190c8c-42c4-46af-8d1a-0cd5db894797], languageId=[1], indexId=[1720081], assetClass=[], productExchange=[], contentType=[InvestableProduct], productType=[]} -->
<div id="index-detail-index-linked" class="content index-linked-product-content">
    <div class="filterable-list-index-linked-four filterable-list index-detail-indexlinked index-linked-product-list" data-indexid="1720081" data-actionurl="/spdji/en/util/redesign/index-family/get-index-family-index-linked-products-json.dot">
        <div class="table-filter">
            <button class="filter-toggle-button">Filters
                <i class="filter-icon"></i>
            </button>
            <div class="table-filter-content" style="display:none;">
                <div class="table-filter-content-data">
                    <h3 class="table-filter-data-title">Product Name</h3>
                    <ul class="vertical bs-dropdown-wrapper dropdown-radio" data-fieldname="productName" data-submenu="" role="menu">
                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                            <a class="active" data-field="productName" data-value="">Default</a>
                        </li>
                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                            <a data-field="productName" data-value="asc">Ascending</a>
                        </li>
                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                            <a data-field="productName" data-value="desc">Descending</a>
                        </li>
                    </ul>
                </div>
                <div class="table-filter-content-data">
                    <h3 class="table-filter-data-title">Product Type</h3>
                    <ul class="vertical bs-dropdown-wrapper" data-fieldname="productType" data-submenu=""  role="menu">
                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a href="javascript:;" data-field="productType" data-gtm-category="News & Research_Newsfeed" data-gtm-action="More" data-gtm-label="Explore Index Detail News & Research" data-value="etf" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Product Type_ETF">ETF</a>
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a href="javascript:;" data-field="productType" data-gtm-category="News & Research_Newsfeed" data-gtm-action="More" data-gtm-label="Explore Index Detail News & Research" data-value="future" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Product Type_Future">Future</a>
                                </li>
                                                                                                                <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a href="javascript:;" data-field="productType" data-gtm-category="News & Research_Newsfeed" data-gtm-action="More" data-gtm-label="Explore Index Detail News & Research" data-value="option" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Product Type_Option">Option</a>
                                </li>
                                                                                                                                                                                                                                                                                                                                            </ul>
                </div>
                <div class="table-filter-content-data">
                    <h3 class="table-filter-data-title">Country/Region</h3>
                    <ul class="vertical bs-dropdown-wrapper" data-fieldname="exchangeCountry" data-submenu="" role="menu">                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="CA"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Canada">Canada</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="CN"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_China">China</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="FR"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_France">France</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="DE"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Germany">Germany</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="IL"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Israel">Israel</a> 
                                </li>
                                                                                                                                                                                                                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="JP"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Japan">Japan</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="KR"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_South Korea">South Korea</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="CH"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Switzerland">Switzerland</a> 
                                </li>
                                                                                                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="TW"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Taiwan">Taiwan</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="US"  data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_United States">United States</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </ul>
				</div>
           </div>
        </div>
        <ul class="filterable-list-dropdown-menu filterable-list-header">
            <li class="filterable-list-cell is-dropdown">
                <div class=" bs-dropdown-wrapper dropdown-radio" data-fieldname="productName">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-boundary="scrollParent" aria-expanded="false">
                        <span>Product Name</span>
                        <span class="sort-icon desc"></span>
                        <span class="caret"></span>
                    </a>
                    <ul
                        class="dropdown menu is-dropdown-submenu submenu first-sub vertical dropdown-menu"
                        data-submenu=""
                        role="menu">
                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                            <a class="active" data-field="productName" data-value="">Default</a>
                        </li>
                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                            <a data-field="productName" data-value="asc">Ascending</a>
                        </li>
                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                            <a data-field="productName" data-value="desc">Descending</a>
                        </li>
                    </ul>
                </div>
            </li>
             <li class="filterable-list-cell is-dropdown">
                <div class="bs-dropdown-wrapper dropdown-checkbox" data-fieldname="productType">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-boundary="scrollParent" aria-expanded="false">
                        <span>Product Type</span>
                        <span class="panel-icon"></span>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown menu is-dropdown-submenu submenu first-sub vertical dropdown-menu" data-submenu="" role="menu">
                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a href="javascript:;" data-field="productType" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Product Type_ETF" data-value="etf">ETF</a>
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a href="javascript:;" data-field="productType" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Product Type_Future" data-value="future">Future</a>
                                </li>
                                                                                                                <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a href="javascript:;" data-field="productType" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Product Type_Option" data-value="option">Option</a>
                                </li>
                                                                                                                                                                                                                                                                                                                                            </ul>
                </div>
            </li>
          <li class="filterable-list-cell is-dropdown">
                <div class=" bs-dropdown-wrapper dropdown-checkbox" data-fieldname="exchangeCountry">
                    <a class="dropdown-toggle" data-toggle="dropdown" data-boundary="scrollParent" aria-expanded="false">
                        <span>Country/Region</span>
                        <span class="panel-icon"></span>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown menu is-dropdown-submenu submenu first-sub vertical dropdown-menu" data-submenu="" role="menu">                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="CA" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Canada">Canada</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="CN" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_China">China</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="FR" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_France">France</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="DE" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Germany">Germany</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="IL" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Israel">Israel</a> 
                                </li>
                                                                                                                                                                                                                        <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="JP" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Japan">Japan</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="KR" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_South Korea">South Korea</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="CH" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Switzerland">Switzerland</a> 
                                </li>
                                                                                                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="TW" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_Taiwan">Taiwan</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li class="is-dropdown-submenu-item is-submenu-item" role="menuitem">
                                    <a data-field = "exchangeCountry" data-value="US" data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Filter" data-gtm-label="Country_United States">United States</a> 
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    </ul>
                </div>
			</li>
            <li class="filterable-list-cell is-dropdown">
                <div class=" bs-dropdown-wrapper dropdown-checkbox" data-fieldname="ticker">
                    <a aria-expanded="false">
                        <span>Ticker</span>
                    </a>
                </div>
            </li>
        </ul>
        <div class="data-row-template" style="display:none">
            <div class="filterable-list-row data-row">
                <div class="filterable-list-cell">
                    <span class="column-label mobile-only">Product Name:</span>
                    <span class="data-item" data-fieldname="productName">Direxion Daily S&P Biotech Bear 3X Shares</span>
                </div>
                <div class="filterable-list-cell">
                    <span class="column-label mobile-only">Product Type:</span>
                    <span class="data-item" data-fieldname="productType">ETF</span>
                </div>
                <div class="filterable-list-cell">
				<span class="column-label mobile-only">Country/Region:</span>
				<span class="data-item" data-fieldname="exchangeCountry">Australia</span>
			</div>
                <div class="filterable-list-cell">
                    <span class="column-label mobile-only">Ticker:</span>
                    <span class="data-item" data-fieldname="ticker">LABD</span>
                </div>
            </div>
        </div>
        <div class="filterable-list-data-row-wrapper">
                                    <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Amundi PEA Dow Jones Industrial Avg ETF</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Germany</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">AHYL</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">BMO Dow Jones Ind Avg Hdgd to CAD ETF</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Canada</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">ZDJ</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Cathay DJIA ETF</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Taiwan</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">00668</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">DJIA Index (UDF)</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Future</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Taiwan</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">UDF</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">DJIA Margin (¥10)</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Future</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Japan</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">D23/JPY</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Dow Jones Industrial Average Index (DJX)</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Option</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">United States</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">DJX</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Dow Jones Industrial Index</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Option</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">United States</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">DJX</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Dow Jones Industrial Index (DJX)</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Option</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">United States</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">DJX</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">E-micro $5 DJIA</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Future</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">United States</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">MYM</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">E-mini $5 DJIA</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Future</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">United States</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">YM</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Harel Sal DJ Industrial Average</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Israel</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">HRLF64</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">iShares DJ Industrial Average ETF (DE)</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry"></span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">EXI3</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">iShares Dow Jones Indust Avg ETF USD Acc</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Switzerland</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">CSINDU</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">KSM ETF Dow Jones Industrial Average</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Israel</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">KSMF78</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Lyxor DJ Industrial Average ETF Dist</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">France</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">DJE</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Lyxor PEA Dow Jones Industrial Avg ETF C</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">France</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">PDJE</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">MAXIS NY Dow Industrial Average ETF</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Japan</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">2241</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">Mini Dow Jones Industrial Index</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Option</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">United States</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">YM</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">NEXT FUNDS DJIA (UnHedged) ETF</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">ETF</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Japan</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">1546</span>
                    </div>
                </div>
                            <div class="filterable-list-row data-row">
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Name:</span>
                        <span class="data-item" data-fieldname="productName">OSE DJIA</span>
                    </div>
                     <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Product Type:</span>
                        <span class="data-item" data-fieldname="productType">Future</span>
                    </div>
                   <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Country/Region:</span>
                        <span class="data-item" data-fieldname="exchangeCountry">Japan</span>
                    </div>
                    <div class="filterable-list-cell">
                        <span class="column-label mobile-only">Ticker:</span>
                        <span class="data-item" data-fieldname="ticker">DJIA</span>
                    </div>
                </div>
                    </div>
                	<div id="data-container" class="empty-records" style="display:none">
				<p class="no-match-text" style="">
				No index-linked product details are currently available.
				</p>
		</div>
        <div class="filterable-list-row no-border">
            <div class="filterable-list-cell filterable-list-load-more">
                <a data-gtm-category="Index-Linked Products_Simple List" data-gtm-action="Click" data-gtm-label="Load More/All" class="button-load-more arrow  " pagenumber="1">
                    <span>Load All</span>
                </a>
            </div>
        </div>
    </div>
    <div class="filterable-list-disclaimer">
        <p>
        This list includes investable products traded on certain exchanges currently linked to this selection of indices. While we have tried to include all such products, we do not guarantee the completeness or accuracy of such lists. Please refer to the disclaimers <a href=https://www.spglobal.com/spdji/en/disclaimers/ target=blank>here</a> for more information about S&P Dow Jones Indices' relationship to such third party product offerings.
        </p>
    </div>
</div>
<!-- Index Detail Index Linked Product Ends Here -->			<!-- Content ends -->
			</div>
		</div>
		<!---footer starts here-->
		<footer class="footer-section">
		    <!-- Session sessionLanguageId : 1 -->
	<section class="footer-global-wrapper">
    <br/>
<ul class="footer-links-primary">
<li>
<a href="https://www.spglobal.com/spdji/en/about-us" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="About S&P Dow Jones Indices">About S&P Dow Jones Indices
</a>
</li>
<li>
<a href="https://www.spglobal.com/spdji/en/about-us/our-services" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Our Services">Our Services</a>
</li>
<li>
<a href="/spdji/en/media-center/news-announcements" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Media Center">Media Center</a>
</li>
<li>
<a href="/spdji/en/contact-us" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Contact Us">Contact Us</a>
</li>
</ul>

<ul class="footer-links-secondary">
<li>
<a href="https://careers.spglobal.com/ListJobs/ByCustom/Segment/Keyword-S-P-Dow-Jones-Indices" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Outbound Link_Division" data-gtm-label="Careers">Careers</a>
</li>
<li>
<a href="https://www.spglobal.com/en/who-we-are/corporate-responsibility/overview" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Outbound Link_Division" data-gtm-label="Corporate Responsibility">Corporate Responsibility</a>
</li>
<li>
<a href="https://www.spglobal.com/en/who-we-are/our-history" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Outbound Link_Division" data-gtm-label="History">History</a>
</li>
<li>
<a href="http://investor.spglobal.com" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Outbound Link_Division" data-gtm-label="Investor Relations">Investor Relations</a>
</li>
<li>
<a href="https://www.spglobal.com/spdji/en/our-leadership" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Leadership">Leadership</a>
</li>
</ul> 
<div class="footer-bottom">
<ul class="social-links">
<li>
<a href="https://on.spdji.com/SignUp?src=IDS" data-gtm-category="Footer" data-gtm-action="Outbound Link" data-gtm-label="Email">
<i class="fa fa-envelope"></i>
</a>
</li>
<li>
<a href="https://twitter.com/SPDJIndices" data-gtm-category="Footer" data-gtm-action="Outbound Link_Social" data-gtm-label="Twitter">
<i class="fab fa-x-twitter"></i>
</a>
</li>
<li>
<a href="https://www.linkedin.com/company/s&p-dow-jones-indices" data-gtm-category="Footer" data-gtm-action="Outbound Link_Social" data-gtm-label="LinkedIn"> 
<i class="fa fa-linkedin-square"></i>
</a>
</li>
<li>
<a href="https://www.facebook.com/SP-Dow-Jones-Indices-161630018534/" data-gtm-category="Footer" data-gtm-action="Outbound Link_Social" data-gtm-label="Facebook">
<i class="fa fa-facebook"></i>
</a>
</li>
<li>
<a href="https://www.youtube.com/user/SPIndicesChannel" data-gtm-category="Footer" data-gtm-action="Outbound Link_Social" data-gtm-label="YouTube">
<i class="fab fa-youtube"></i>
</a>
</li>
<li>
<a href="/spdji/en/rss" data-gtm-category="Footer" data-gtm-action="Outbound Link_Social" data-gtm-label="RSS Feed">
<i class="fa fa-rss"></i>
</a>
</li>
</ul>
<ul class="copyright-links">
<li>
© 2024 S&P Dow Jones Indices
</li>
<li>
<a href="https://www.spglobal.com/spdji/en/disclaimers" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Legal Disclaimers">Legal Disclaimers</a>
</li>
<li>
<a href="https://www.spglobal.com/en/terms-of-use" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Terms of Use">Terms of Use</a>
</li>
<li>
<a href="https://www.spglobal.com/en/privacy/privacy-policy-english" class="ignorePopup" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Privacy Policy">Privacy Policy</a>
</li>
<li>
<a href="https://www.spglobal.com/en/cookie-notice" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Cookie Notice">Cookie Notice</a>
</li>
<li>
<a href="https://more.spglobal.com/DoNotSell" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Do Not Sell My Personal Information">Do Not Sell My Personal Information</a>
</li>
<li>
<a href="https://www.spglobal.com/spdji/en/benchmark-complaints-policy" class="ignorePopup" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Complaints">Complaints</a>
</li>
<li>
<button id="ot-sdk-btn" class="ot-sdk-show-settings" data-gtm-category="Footer" data-gtm-action="Support" data-gtm-label="Cookie Settings">Cookie Settings</button>
</li>
</ul>
</div>
</section> 
		</footer>
		<!--footer ends here-->	
	</section>
	<div class="modal fade modal-container other-popup global-modal-message-dialog" role="dialog" aria-modal="true" >
	<div class="modal-dialog modal-sm form-frame-register modal-dialog-centered" role="document">
		<div class="modal-content">	
			<div class="modal-header">
				<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" data-dismiss="modal"></span>
					<span data-dismiss="modal"></span>
				</button>
			</div>
			<div class="modal-body">							
			</div>
		</div>
	</div>
</div>	
<div class="modal fade modal-container" id="third-party-pop" role="dialog" aria-modal="true" >
	<div class="modal-dialog modal-sm form-frame-register modal-dialog-centered" role="document">
		<div class="modal-content">	
			<div class="modal-header">
				<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" data-dismiss="modal"></span>
					<span data-dismiss="modal"></span>
				</button>
			</div>
			<div class="modal-body">							
			</div>
		</div>
	</div>
</div>	

<div id="ajax-loader-overlay">
	<div class="ajax-wrapper">
		<div id="ajax-loader-wrap">
			<img src="/spdji/en/app/images/ajax-loader.gif" align="center">
		</div>
		<div class="color-white">
									Processing ...
					</div>
	</div>
</div>
 
		<script>
var urlPrefix = '/spdji/en';
var englishPrefix = '/spdji/en';
var indicesLabel = 'Indices';
var addedLbl = 'Added';	
var oktaClientId = "0oa68hw8x9WzCcY2f4x7";
var oktaURL = "https://secure.login.spglobal.com";
var oktaIssuerURL = "https://secure.login.spglobal.com/oauth2/spglobal";
var oktaAccessToken = "";
var caseShillerformattedFetchedDate ="index-detail.caseshiller-fetched-date"; 
</script>
<script src="/spdji/en/app/js/okta-auth-js.min.js" type="text/javascript"></script>
	<script src="/spdji/en/app/js/minified/spdji-js-plugins-bundle.min.js" type="text/javascript"></script>


<script>
var countrySelect = "Select";
var jsSiteLabels = {};
jsSiteLabels.SavePageMap = {
	pageSaved : "Page Saved!"
}
jsSiteLabels.LoginMap = {
	giveLoginDetailsError : "Please enter your registered email address and password",
	accountLockedError : "Your account has been temporarily locked because you have exceeded the maximum number of login attempts. Please refresh the page in 15 minutes and try again."
}
jsSiteLabels.ForgotPasswordMap = {
	emailSentFollowInstructions :"If an account is associated with the email address provided, you will receive an email message with instructions on how to reset your password."
}
jsSiteLabels.ChangePasswordMap = {
	passWordChangeSuccess : "Your password has been reset.",
	resetPasswordTitle : "Reset Your Password?",
	tryResetPassword : "Reset Password",
	trychangePasssword :"Try again"
}
jsSiteLabels.UserLoginModalMap = {
	saveIndex :"Log in to Save This Index",
	showSavedSearches : "Login to View Your Saved Searches",
	showRecentSearches :"Login to View Your Recent Searches",
	saveSearch : "Login to Save This Search",
	showSavedCriteria : "Login to View Your Saved Criterias",
	saveIFCriteria : "Login to Save this Search Criteria",
	showIndices :"Login to View Your Indices",
	savePage : "Log in to Save This Page",
	logintoDownload : "Log In to Access Data",
	logintoDownloadPremiumData : "Log in to Access Premium Content",
	loginPromptPremiumDataAlert : "Access exclusive data and research, personalize your experience, and sign up to receive email updates.",
	loginMethodologyAddToRegister: "Login to Submit Request",
	consultationsLoginTitle: "Log in to Participate in the Consultation"
}
jsSiteLabels.EventRegistrationMap = {
	registrationSaved : "Your registration details are saved. Please click anywhere to continue"
}
jsSiteLabels.ServerErrorMap = {
	troubleInteractingWithServer :"Trouble interacting with server"
}
jsSiteLabels.indexFinderErrorMap = {
	noFactsheetDocument :"No Factsheet available for this index",
	noMethodologyDocument : "No Methodology document available for this index",
	noSelectedIndicesToExport :"No indices selected for export",
	emptySearchTerm : "Please provide the keyword"
}
//modules.js related labels
var jsModulesLabels = {};
jsModulesLabels.UserRegistrationMap = {
	stepOneValidationOne : "Please select your professional profile and country and agree to the terms and conditions.",
	stepOneValidationTwo :"Please agree to the terms and conditions.",
	stepOneValidationThree : "Please select your professional profile.",
	registrationServerError :"Registration couldn't be completed at this time. Trouble interacting with server.",
	registrationSuccess :"Registration Successful",
	continueText : "Continue",
	registerStepTwoOfTwo : "REGISTER: STEP 2 OF 2"
}
jsModulesLabels.UserSettingsInitMap = {
	subsRequired: "Your selection to opt in or opt out is required.",
	settingsUpdated : "Your settings have been updated. Please click anywhere to continue."
}
jsModulesLabels.TermsOfUse = {
	errorMessage : "To continue, please click and read our Terms of Use.",
	acknowledgementRequired :"You must click the acknowledgement box to continue."
}
jsModulesLabels.SurveyValidationMessage = {
	surveySuccessMessage : "Survey has been submitted successfully.",
	surveyErrorMessage :"Error while saving consultation survey form."
}
jsModulesLabels.MySnpMap = {
	noSavedIndices :"You have no saved indices.",
	noSavedPages : "You have no saved pages."
}
jsModulesLabels.ShowErrorMap = {
	errorMessage :"Error:"
}
jsModulesLabels.ShareByEmail = {
	emailSent : "Email Sent.",
	emailNotValid : "Please enter a valid email address"
}
jsModulesLabels.ClientServicesMap = {
	requestSubmitted : "Thank you. Your request has been submitted."
}
jsModulesLabels.FeedbackMap = {
	thankYouMessage :"Thank you for your valuable feedback."
}
jsModulesLabels.ResetPasswordMap = {
	resetSuccessMessage : "Your password was reset successfully",
	continueText :"Continue"
}
jsModulesLabels.ServerError = {
	troubleInteractingWithServer : "Trouble interacting with server"
}
var searchQueryLabel = {};
searchQueryLabel.searchQueryMap = {
	searchText : "Search by Keyword",
	paginationOf :"of"
}
var validationErrorMessges = function(){
	var msg = $.validator.messages;
	msg.required = "This field is required",
	msg.businessEmail= "Must be a business email",
	msg.email= "Please enter a valid email address",
	msg.url= "Please enter a valid URL",
	msg.date= "Please enter a valid date",
	msg.dateISO="Please enter a valid date (ISO)",
	msg.number="Please enter a valid number",
	msg.digits= "Please enter only digits",
	msg.equalTo= "Please enter the same value again",
	msg.accept= "Please enter a value with a valid extension",
	msg.maxlength="Please enter no more than {0} characters",
	msg.minlength="Please enter at least {0} characters",
	msg.rangelength="Please enter a value between {0} and {1} characters long",
	msg.range= "Please enter a value between {0} and {1}",
	msg.max= "Please enter a value less than or equal to {0}",
	msg.min= "Please enter a value greater than or equal to {0}"
}
jsModulesLabels.signUpForEmailUpdates = {
	thankYouMessage : "Thank you for signing up."
}
</script>	<script src="/spdji/en/app/js/script.js" type="text/javascript"></script>




<script src="/spdji/en/app/js/index-detail.js" type="text/javascript"></script>
					
<script type="text/javascript" src="/spdji/en/app/js/charts.plugins.min.js"></script>

<script>
	var DataWidgetLabels = {};
	var DataWidgetConfig = {};
	DataWidgetConfig.configurationMap = {
		isUserPersonalizationRequired: true
	};
	$.ajax({		
		url: "/spdji/en/util/redesign/get-datawidget-labels.dot",
		dataType: "json",		
		type: 'get',
		async: false,
		success:function(response) {	
			DataWidgetLabels = response;
		}
	});
	</script>
		<script type="text/javascript">
				var suggestedIndicesForPerformanceComparisons = [];
		var customIndexWidgetIndicesCollection = [];
		var initialFlagStatus = "oneYearFlag";
		var indexDisclaimerText = "";			
		var generalDataWidgetDisclaimerText = "All information for an index prior to its Launch Date is hypothetical back-tested, not actual performance, based on the index methodology in effect on the Launch Date.  Back-tested performance reflects application of an index methodology and selection of index constituents with the benefit of hindsight and knowledge of factors that may have positively affected its performance, cannot account for all financial risk that may affect results and may be considered to reflect survivor/look ahead bias. Actual returns may differ significantly from, and be lower than, back-tested returns.  Past performance is not an indication or guarantee of future results.  This back-tested data may have been created using a “Backward Data Assumption”. For more information on “Backward Data Assumption” and back-testing in general, please see the <a href='https://www.spglobal.com/spdji/en/disclaimers/#performance-disclosure'>Performance Disclosure</a>.";
		var hostIdentifier = "48190c8c-42c4-46af-8d1a-0cd5db894797";
		var sleepingIndexDisclaimer = "";
					var localeCountryCode = "US";
				
		
		var indexSavedStatus   = false;
				var indexId = 1720081;
		var indexFamilyName = "equity";
		var customClientName = "";		
										




  
          

    
  






  
    
    
    
    
    
    
    
  








  
                

 

    
    

  
    
    







			</script>
			<script src="/spdji/en/app/js/datawidget.js?v=20240201104310" type="text/javascript"></script>
		<script src="/spdji/en/app/js/index-detail-data.js" type="text/javascript"></script>
	<script src="/spdji/en/app/js/supplemental-data.js?v=20240201104310" type="text/javascript"></script>
	<script type="text/javascript">
		$(document).ready(function(){		
			$.ajax({		
				url: "/spdji/en/util/redesign/index-data/get-performance-data-for-datawidget-redesign.dot",
				dataType: "json",
				type: 'get',
				data: {
					indexId : indexId							
				},	
				success:function(response) {	
					if (response.status == true) {
						indexData = response;
							getJsonValue(indexData);
						$(".datawidget").dataWidget({
							indexData: indexData,
							suggestedComparisons : suggestedIndicesForPerformanceComparisons,//suggestedIndicesForPerformanceComparisons,
							caseShillerMap : customIndexWidgetIndicesCollection ,
							initialFlag : initialFlagStatus,
							disclaimerText : indexDisclaimerText,
							generalDisclaimerText: generalDataWidgetDisclaimerText,
							dataWidgetLabels : DataWidgetLabels,
							hostIdentifier :  hostIdentifier,
							sleepingIndexDisclaimerText: sleepingIndexDisclaimer,
							customClientName: customClientName
						});									
					} else {
						SPI.modules.showErrors(indexData.serviceMessages);
					}
				}
			});			
		});         
	</script>
		<script src="/spdji/en/app/js/index-family-index-linked-product.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			var s =  new SPI.modules.indexFamilyIndexLinkedProductsList(".filterable-list-index-linked-four.index-detail-indexlinked");
			s.init();
		});
	</script>
<script src="/spdji/en/app/js/trunk8.js"></script>
<script type="text/javascript">	
	SPI.currentPage.url = "/indices/equity/dow-jones-industrial-average/";		
	
	SPI.currentPage.title = "Dow Jones Industrial Average®";
	SPI.currentPage.type = "CONTENT_INODE";
	SPI.currentPage.id = "e814995d-f73c-4303-828d-68489fd784f4";
	//SPI.currentPage.languageId = "1";
	SPI.currentPage.languageId = "1";
	SPI.currentPage.pageState = false;
	SPI.currentPage.indexIdForReference = 0;
	SPI.currentPage.articleSpecificShare = "https://www.spglobal.com/spdji/en/";
	SPI.currentPage.sharePageSpecificTitle = "Dow%20Jones%20Industrial%20Average%C2%AE%20%7C%20S%26P%20Dow%20Jones%20Indices";
	SPI.currentPage.emailPageSpecificURL = "indices/equity/dow-jones-industrial-average";
	SPI.currentPage.globalShare = "https://www.spglobal.com/spdji/en/";
				SPI.currentPage.mySPIndicesUrl = window.location.origin;
	SPI.currentPage.applicationUrl = window.location.origin + urlPrefix;
		SPI.PageAjaxMap.loginUserValidate = "https://login.spglobal.com/oam/server/auth_cred_submit"; 
	// Variable declared for 14 min 
    SPI.user.hideLoginTimer = 300000;  
	SPI.user.sso = {};
	SPI.currentInstanceName = "LOCALHOST";
			SPI.announcementDRPopupFlag = false;  
					SPI.announcementGroupId = 353544;
				
			SPI.user.userState = false;
		SPI.user.sso.ssoPostLoginActionInd=false;
				SPI.currentPage.indexIdForReference = 1720081;
		var regionsForPersonalization = "[regionEurope]";
			SPI.internalDomainReferences = ["spindices", "standardandpoors", "mcgraw-hill", "djindexes", "djaverages", "seemoreindices", "event.on24.com", "go.spglobal.com", "spdji.com","mhfi","spglobal","indicesweb.ihsmarkit","content.markitcdn","cdn.ihsmarkit","markit","ihsmarkit.com"];
				SPI.excludedExternalLinks = ["http://twitter.com/hsilverb", 
"https://twitter.com/SPDJIndices",
"http://twitter.com/Dave_Guarino",
"http://www.mhfi.com/",
"http://www.mhfi.com/innovation_behind_the_index",
"https://www.mhfi.com/innovation_behind_the_index",
"http://www.youtube.com/user/SPIndicesChannel", 
"http://www.linkedin.com/groups?gid=2426754&trk=myg_ugrp_ovr",
"http://www.facebook.com/pages/SP-Indices/161630018534",
"http://www.housingviews.com",
"http://www.spvixviews.com",
"http://www.indexologyblog.com",
"https://www.indexologyblog.com",
"http://www.standardandpoors.com",
"http://feedproxy.google.com",
"http://app.info.standardandpoors.com",
"http://spindices.webex.com",
"https://spindices.webex.com",
"http://itunes.apple.com/us/podcast/s-p-indices-your-indexing",
"http://www.mcgraw-hill.com/site/careers/college-students",
"https://mh.taleo.net/careersection/10020/jobsearch.ftl?lang=en",
"http://www.spdji.com",
"http://careers.mhfi.com/ListJobs/ByCustom/Corporate-Brand/Keyword-S-P-Dow-Jones-Indices/",
"http://www.djindexes.com",
"http://www.djaverages.com",
"http://www.spice-indices.com",
"http://www.sp-indexdata.com",
"http://now.eloqua.com",
"http://now.eloqua.com/es.asp?s=795&e=690209",
"http://now.eloqua.com/es.asp?s=795&e=700582&elq=9a224591f0a54ac3a96179fc85581a6a",
"http://www.facebook.com/sharer.php",
"http://twitter.com/home?status=",
"formstack.com",
"asset.tv/",
"https://www.spice-indices.com",
"https://www.spglobal.com",
"http://www.spglobal.com",
"https://www.youtube.com/user/McGrawHillFinancial",
"https://www.youtube.com/channel/UCg1TzTKsU6CGEa5OlS0SC3Q",
"http://www.linkedin.com/",
"http://html5.epaperflip.com/",
"http://link.videoplatform.limelight.com",
"https://www.youtube.com/playlist?list=PLdv2EjukkSMGuPGGZXyPY1m4RG21h3bLc",
"https://www.trucost.com/",
"https://indices.kensho.com/",
"https://embed.vidyard.com/",
"https://play.vidyard.com/",
"https://www.youtube.com/channel/UCDGhESnNliw6tgFEiK0jLGQ",
"https://cifp.zoom.us/webinar/register/",
"https://ihsmarkit.com/products/indices.html",
"https://www.linkedin.com/",
"https://ihsmarkit.com/"];
				SPI.nonBusinessEmailDomains = ["0-mail.com", "027168.com", "0815.su", "0sg.net", "10mail.org", "10minutemail.co.za", "11mail.com", "123.com", "123box.net", "123india.com", "123mail.cl", "123mail.org", "123qwe.co.uk", "126.com", "139.com", "150mail.com", "150ml.com", "15meg4free.com", "163.com", "16mail.com", "188.com", "189.cn", "1ce.us", "1chuan.com", "1coolplace.com", "1freeemail.com", "1funplace.com", "1internetdrive.com", "1mail.ml", "1mail.net", "1me.net", "1mum.com", "1musicrow.com", "1netdrive.com", "1nsyncfan.com", "1pad.de", "1under.com", "1webave.com", "1webhighway.com", "1zhuan.com", "2-mail.com", "20email.eu", "20mail.in", "20mail.it", "212.com", "21cn.com", "24horas.com", "2911.net", "2980.com", "2bmail.co.uk", "2d2i.com", "2die4.com", "2trom.com", "3000.it", "30minutesmail.com", "3126.com", "321media.com", "33mail.com", "37.com", "3ammagazine.com", "3dmail.com", "3email.com", "3g.ua", "3mail.ga", "3xl.net", "444.net", "4email.com", "4email.net", "4mg.com", "4newyork.com", "4warding.net", "4warding.org", "4x4man.com", "50mail.com", "60minutemail.com", "6ip.us", "6mail.cf", "6paq.com", "74.ru", "7mail.ga", "7mail.ml", "88.am", "8848.net", "8mail.ga", "8mail.ml", "97rock.com", "99experts.com", "a45.in", "aaamail.zzn.com", "aamail.net", "aapt.net.au", "aaronkwok.net", "abbeyroadlondon.co.uk", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk.com", "abcflash.net", "abdulnour.com", "aberystwyth.com", "about.com", "abusemail.de", "abwesend.de", "abyssmail.com", "ac20mail.in", "academycougars.com", "acceso.or.cr", "access4less.net", "accessgcc.com", "accountant.com", "acdcfan.com", "ace-of-base.com", "acmemail.net", "acninc.net", "activist.com", "adam.com.au", "add3000.pp.ua", "addcom.de", "address.com", "adelphia.net", "adexec.com", "adfarrow.com", "adios.net", "adoption.com", "ados.fr", "adrenalinefreak.com", "advalvas.be", "advantimo.com", "aeiou.pt", "aemail4u.com", "aeneasmail.com", "afreeinternet.com", "africamail.com", "africamel.net", "ag.us.to", "agoodmail.com", "ahaa.dk", "ahk.jp", "aichi.com", "aim.com", "aircraftmail.com", "airforce.net", "airforceemail.com", "airpost.net", "ajacied.com", "ajaxapp.net", "ak47.hu", "aknet.kg", "albawaba.com", "alex4all.com", "alexandria.cc", "algeria.com", "alhilal.net", "alibaba.com", "alice.it", "alive.cz", "aliyun.com", "allergist.com", "allmail.net", "alloymail.com", "allracing.com", "allsaintsfan.com", "alpenjodel.de", "alphafrau.de", "alskens.dk", "altavista.com", "altavista.net", "altavista.se", "alternativagratis.com", "alumni.com", "alumnidirector.com", "alvilag.hu", "amail.com", "amazonses.com", "amele.com", "america.hm", "ameritech.net", "amnetsal.com", "amorki.pl", "amrer.net", "amuro.net", "amuromail.com", "ananzi.co.za", "ancestry.com", "andylau.net", "anfmail.com", "angelfire.com", "angelic.com", "animail.net", "animalhouse.com", "animalwoman.net", "anjungcafe.com", "annsmail.com", "ano-mail.net", "anonmails.de", "anonymous.to", "anote.com", "another.com", "anotherdomaincyka.tk", "anotherwin95.com", "anti-social.com", "antisocial.com", "antispam24.de", "antongijsen.com", "antwerpen.com", "anymoment.com", "anytimenow.com", "aol.com", "aon.at", "apexmail.com", "apmail.com", "apollo.lv", "aport.ru", "aport2000.ru", "appraiser.net", "approvers.net", "arabia.com", "arabtop.net", "archaeologist.com", "arcor.de", "arcotronics.bg", "arcticmail.com", "argentina.com", "aristotle.org", "army.net", "armyspy.com", "arnet.com.ar", "art-en-ligne.pro", "artlover.com", "artlover.com.au", "as-if.com", "asdasd.nl", "asean-mail.com", "asheville.com", "asia-links.com", "asia-mail.com", "asiafind.com", "asianavenue.com", "asiancityweb.com", "asiansonly.net", "asianwired.net", "asiapoint.net", "ass.pp.ua", "assala.com", "assamesemail.com", "astroboymail.com", "astrolover.com", "astrosfan.com", "astrosfan.net", "asurfer.com", "atheist.com", "athenachu.net", "atina.cl", "atl.lv", "atlaswebmail.com", "atmc.net", "atozasia.com", "atrus.ru", "att.net", "attglobal.net", "attymail.com", "au.ru", "auctioneer.net", "ausi.com", "aussiemail.com.au", "austin.rr.com", "australia.edu", "australiamail.com", "austrosearch.net", "autoescuelanerja.com", "autograf.pl", "autorambler.ru", "aver.com", "avh.hu", "avia-tonic.fr", "awsom.net", "axoskate.com", "ayna.com", "azazazatashkent.tk", "azimiweb.com", "azmeil.tk", "bachelorboy.com", "bachelorgal.com", "backpackers.com", "backstreet-boys.com", "backstreetboysclub.com", "bagherpour.com", "baldmama.de", "baldpapa.de", "ballyfinance.com", "bangkok.com", "bangkok2000.com", "bannertown.net", "baptistmail.com", "baptized.com", "barcelona.com", "bareed.ws", "bartender.net", "baseballmail.com", "basketballmail.com", "batuta.net", "baudoinconsulting.com", "bboy.zzn.com", "bcvibes.com", "beddly.com", "beeebank.com", "beenhad.com", "beep.ru", "beer.com", "beethoven.com", "belice.com", "belizehome.com", "bell.net", "bellair.net", "bellsouth.net", "berlin.com", "berlin.de", "berlinexpo.de", "bestmail.us", "betriebsdirektor.de", "bettergolf.net", "bharatmail.com", "big1.us", "bigassweb.com", "bigblue.net.au", "bigboab.com", "bigfoot.com", "bigfoot.de", "bigger.com", "biggerbadder.com", "bigmailbox.com", "bigmir.net", "bigpond.au", "bigpond.com", "bigpond.com.au", "bigpond.net", "bigpond.net.au", "bigramp.com", "bigstring.com", "bikemechanics.com", "bikeracer.com", "bikeracers.net", "bikerider.com", "billsfan.com", "billsfan.net", "bimla.net", "bin-wieder-da.de", "bio-muesli.info", "birdlover.com", "birdowner.net", "bisons.com", "bitmail.com", "bitpage.net", "bizhosting.com", "bk.ru", "blackburnmail.com", "blackplanet.com", "blader.com", "bladesmail.net", "blazemail.com", "bleib-bei-mir.de", "blockfilter.com", "blogmyway.org", "bluebottle.com", "bluehyppo.com", "bluemail.ch", "bluemail.dk", "bluesfan.com", "blueyonder.co.uk", "blushmail.com", "blutig.me", "bmlsports.net", "boardermail.com", "boatracers.com", "bodhi.lawlita.com", "bol.com.br", "bolando.com", "bollywoodz.com", "bolt.com", "boltonfans.com", "bombdiggity.com", "bonbon.net", "boom.com", "bootmail.com", "bootybay.de", "bornnaked.com", "bostonoffice.com", "boun.cr", "bounce.net", "bounces.amazon.com", "bouncr.com", "box.az", "box.ua", "boxbg.com", "boxemail.com", "boxformail.in", "boxfrog.com", "boximail.com", "boyzoneclub.com", "bradfordfans.com", "brasilia.net", "brazilmail.com", "brazilmail.com.br", "breadtimes.press", "breathe.com", "brennendesreich.de", "bresnan.net", "brew-master.com", "brew-meister.com", "brfree.com.br", "briefemail.com", "bright.net", "britneyclub.com", "brittonsign.com", "broadcast.net", "brokenvalve.com", "brusseler.com", "bsdmail.com", "btcmail.pw", "btconnect.co.uk", "btconnect.com", "btinternet.com", "btopenworld.co.uk", "buerotiger.de", "buffymail.com", "bullsfan.com", "bullsgame.com", "bumerang.ro", "bumpymail.com", "bund.us", "burnthespam.info", "burstmail.info", "buryfans.com", "business-man.com", "businessman.net", "busta-rhymes.com", "buyersusa.com", "bvimailbox.com", "byom.de", "c2.hu", "c2i.net", "c3.hu", "c4.com", "c51vsgq.com", "cabacabana.com", "cable.comcast.com", "cableone.net", "caere.it", "cairomail.com", "calendar-server.bounces.google.com", "calidifontain.be", "californiamail.com", "callnetuk.com", "callsign.net", "caltanet.it", "camidge.com", "canada-11.com", "canada.com", "canadianmail.com", "canoemail.com", "canwetalk.com", "caramail.com", "care2.com", "careerbuildermail.com", "carioca.net", "cartelera.org", "cartestraina.ro", "casablancaresort.com", "casema.nl", "cash4u.com", "cashette.com", "casino.com", "catcha.com", "catchamail.com", "catholic.org", "catlover.com", "cd2.com", "celineclub.com", "celtic.com", "center-mail.de", "centermail.at", "centermail.de", "centermail.info", "centoper.it", "centralpets.com", "centrum.cz", "centrum.sk", "centurytel.net", "certifiedmail.com", "cfl.rr.com", "cgac.es", "cghost.s-a-d.de", "chacuo.net", "chaiyomail.com", "chammy.info", "chance2mail.com", "chandrasekar.net", "charmedmail.com", "charter.net", "chat.ru", "chattown.com", "chauhanweb.com", "cheatmail.de", "chechnya.conf.work", "check.com", "check1check.com", "cheerful.com", "chef.net", "chek.com", "chello.nl", "chemist.com", "chequemail.com", "cheyenneweb.com", "chez.com", "chickmail.com", "china.com", "china.net.vg", "chinamail.com", "chirk.com", "chocaholic.com.au", "chong-mail.com", "chong-mail.net", "churchusa.com", "cia-agent.com", "cia.hu", "ciaoweb.it", "cicciociccio.com", "cincinow.net", "citiz.net", "citlink.net", "city-of-bath.org", "city-of-birmingham.com", "city-of-brighton.org", "city-of-cambridge.com", "city-of-coventry.com", "city-of-edinburgh.com", "city-of-lichfield.com", "city-of-lincoln.com", "city-of-liverpool.com", "city-of-manchester.com", "city-of-nottingham.com", "city-of-oxford.com", "city-of-swansea.com", "city-of-westminster.com", "city-of-westminster.net", "city-of-york.net", "cityofcardiff.net", "cityoflondon.org", "ckaazaza.tk", "claramail.com", "classicalfan.com", "classicmail.co.za", "clear.net.nz", "clearwire.net", "clerk.com", "cliffhanger.com", "clixser.com", "close2you.net", "clrmail.com", "club4x4.net", "clubalfa.com", "clubbers.net", "clubducati.com", "clubhonda.net", "clubmember.org", "clubnetnoir.com", "clubvdo.net", "cluemail.com", "cmail.net", "cmpmail.com", "cnnsimail.com", "cntv.cn", "codec.ro", "coder.hu", "coid.biz", "coldmail.com", "collectiblesuperstore.com", "collector.org", "collegeclub.com", "collegemail.com", "colleges.com", "columbus.rr.com", "columbusrr.com", "columnist.com", "comcast.com", "comcast.net", "comic.com", "communityconnect.com", "comporium.net", "comprendemail.com", "compuserve.com", "computer-freak.com", "computer4u.com", "computermail.net", "conexcol.com", "conk.com", "connect4free.net", "connectbox.com", "consultant.com", "consumerriot.com", "contractor.net", "contrasto.cu.cc", "cookiemonster.com", "cool.br", "coole-files.de", "coolgoose.ca", "coolgoose.com", "coolkiwi.com", "coollist.com", "coolmail.com", "coolmail.net", "coolsend.com", "coolsite.net", "cooooool.com", "cooperation.net", "cooperationtogo.net", "copacabana.com", "copper.net", "cornells.com", "cornerpub.com", "corporatedirtbag.com", "correo.terra.com.gt", "cortinet.com", "cotas.net", "counsellor.com", "countrylover.com", "cox.com", "cox.net", "coxinet.net", "cracker.hu", "crapmail.org", "crazedanddazed.com", "crazymailing.com", "crazysexycool.com", "cristianemail.com", "critterpost.com", "croeso.com", "crosshairs.com", "crosswinds.net", "crwmail.com", "cry4helponline.com", "cs.com", "csinibaba.hu", "cuemail.com", "curio-city.com", "curryworld.de", "cute-girl.com", "cuteandcuddly.com", "cutey.com", "cww.de", "cyber-africa.net", "cyber-innovation.club", "cyber-matrix.com", "cyber-phone.eu", "cyber-wizard.com", "cyber4all.com", "cyberbabies.com", "cybercafemaui.com", "cyberdude.com", "cyberforeplay.net", "cybergal.com", "cybergrrl.com", "cyberinbox.com", "cyberleports.com", "cybermail.net", "cybernet.it", "cyberservices.com", "cyberspace-asia.com", "cybertrains.org", "cyclefanz.com", "cynetcity.com", "dabsol.net", "dadacasa.com", "daha.com", "dailypioneer.com", "dallasmail.com", "dangerous-minds.com", "dansegulvet.com", "dasdasdascyka.tk", "data54.com", "davegracey.com", "dawnsonmail.com", "dawsonmail.com", "dazedandconfused.com", "dbzmail.com", "dcemail.com", "deadlymob.org", "deagot.com", "deal-maker.com", "dearriba.com", "death-star.com", "deliveryman.com", "deneg.net", "depechemode.com", "deseretmail.com", "desertmail.com", "desilota.com", "deskpilot.com", "destin.com", "detik.com", "deutschland-net.com", "devotedcouples.com", "dezigner.ru", "dfwatson.com", "di-ve.com", "die-besten-bilder.de", "die-genossen.de", "die-optimisten.de", "die-optimisten.net", "diemailbox.de", "digibel.be", "digital-filestore.de", "diplomats.com", "directbox.com", "dirtracer.com", "discard.email", "discard.ga", "discard.gq", "disciples.com", "discofan.com", "discoverymail.com", "disign-concept.eu", "disign-revelation.com", "disinfo.net", "dispomail.eu", "disposable.com", "dispose.it", "dm.w3internet.co.uk", "dmailman.com", "dnainternet.net", "dnsmadeeasy.com", "doclist.bounces.google.com", "docmail.cz", "docs.google.com", "doctor.com", "dodgit.org", "dodo.com.au", "dodsi.com", "dog.com", "dogit.com", "doglover.com", "dogmail.co.uk", "dogsnob.net", "doityourself.com", "domforfb1.tk", "domforfb2.tk", "domforfb3.tk", "domforfb4.tk", "domforfb5.tk", "domforfb6.tk", "domforfb7.tk", "domforfb8.tk", "domozmail.com", "doneasy.com", "donjuan.com", "dontgotmail.com", "dontmesswithtexas.com", "doramail.com", "dostmail.com", "dotcom.fr", "dotmsg.com", "dott.it", "download-privat.de", "dplanet.ch", "dr.com", "dragoncon.net", "dropmail.me", "dropzone.com", "drotposta.hu", "dubaimail.com", "dublin.com", "dublin.ie", "dumpmail.com", "dumpmail.de", "dumpyemail.com", "dunlopdriver.com", "dunloprider.com", "duno.com", "duskmail.com", "dutchmail.com", "dwp.net", "dygo.com", "dynamitemail.com", "dyndns.org", "e-apollo.lv", "e-mail.com.tr", "e-mail.dk", "e-mail.ru", "e-mail.ua", "e-mailanywhere.com", "e-mails.ru", "e-tapaal.com", "earthalliance.com", "earthcam.net", "earthdome.com", "earthling.net", "earthlink.net", "earthonline.net", "eastcoast.co.za", "eastmail.com", "easy.to", "easypost.com", "easytrashmail.com", "ec.rr.com", "ecardmail.com", "ecbsolutions.net", "echina.com", "ecolo-online.fr", "ecompare.com", "edmail.com", "ednatx.com", "edtnmail.com", "educacao.te.pt", "eelmail.com", "ehmail.com", "einrot.com", "einrot.de", "eintagsmail.de", "eircom.net", "elisanet.fi", "elitemail.org", "elsitio.com", "elvis.com", "elvisfan.com", "email-fake.gq", "email-london.co.uk", "email.biz", "email.cbes.net", "email.com", "email.cz", "email.ee", "email.it", "email.nu", "email.org", "email.ro", "email.ru", "email.si", "email.su", "email.ua", "email2me.net", "email4u.info", "emailacc.com", "emailaccount.com", "emailage.ga", "emailage.gq", "emailasso.net", "emailchoice.com", "emailcorner.net", "emailem.com", "emailengine.net", "emailengine.org", "emailer.hubspot.com", "emailforyou.net", "emailgo.de", "emailgroups.net", "emailinfive.com", "emailit.com", "emailpinoy.com", "emailplanet.com", "emailplus.org", "emailproxsy.com", "emails.ga", "emails.incisivemedia.com", "emails.ru", "emailthe.net", "emailto.de", "emailuser.net", "emailx.net", "emailz.ga", "emailz.gq", "ematic.com", "embarqmail.com", "emeil.in", "emeil.ir", "emil.com", "eml.cc", "eml.pp.ua", "end-war.com", "enel.net", "engineer.com", "england.com", "england.edu", "englandmail.com", "epage.ru", "epatra.com", "ephemail.net", "epix.net", "epost.de", "eposta.hu", "eqqu.com", "eramail.co.za", "eresmas.com", "eriga.lv", "estranet.it", "ethos.st", "etoast.com", "etrademail.com", "etranquil.com", "etranquil.net", "eudoramail.com", "europamel.net", "europe.com", "europemail.com", "euroseek.com", "eurosport.com", "every1.net", "everyday.com.kh", "everymail.net", "everyone.net", "everytg.ml", "examnotes.net", "excite.co.jp", "excite.com", "excite.it", "execs.com", "exemail.com.au", "exg6.exghost.com", "existiert.net", "expressasia.com", "extenda.net", "extended.com", "eyepaste.com", "eyou.com", "ezcybersearch.com", "ezmail.egine.com", "ezmail.ru", "ezrs.com", "f-m.fm", "f1fans.net", "facebook-email.ga", "facebook.com", "facebookmail.com", "facebookmail.gq", "fahr-zur-hoelle.org", "fake-email.pp.ua", "fake-mail.cf", "fake-mail.ga", "fake-mail.ml", "fakemailz.com", "falseaddress.com", "fan.com", "fansonlymail.com", "fansworldwide.de", "fantasticmail.com", "farang.net", "farifluset.mailexpire.com", "faroweb.com", "fast-email.com", "fast-mail.fr", "fast-mail.org", "fastacura.com", "fastchevy.com", "fastchrysler.com", "fastem.com", "fastemail.us", "fastemailer.com", "fastermail.com", "fastest.cc", "fastimap.com", "fastkawasaki.com", "fastmail.ca", "fastmail.cn", "fastmail.co.uk", "fastmail.com", "fastmail.com.au", "fastmail.es", "fastmail.fm", "fastmail.im", "fastmail.in", "fastmail.jp", "fastmail.mx", "fastmail.net", "fastmail.nl", "fastmail.se", "fastmail.to", "fastmail.tw", "fastmail.us", "fastmailbox.net", "fastmazda.com", "fastmessaging.com", "fastmitsubishi.com", "fastnissan.com", "fastservice.com", "fastsubaru.com", "fastsuzuki.com", "fasttoyota.com", "fastyamaha.com", "fatcock.net", "fatflap.com", "fathersrightsne.org", "fax.ru", "fbi-agent.com", "fbi.hu", "fdfdsfds.com", "fea.st", "federalcontractors.com", "feinripptraeger.de", "felicitymail.com", "femenino.com", "fetchmail.co.uk", "fettabernett.de", "feyenoorder.com", "ffanet.com", "fiberia.com", "ficken.de", "fightallspam.com", "filipinolinks.com", "financemail.net", "financier.com", "findmail.com", "finebody.com", "fire-brigade.com", "fireman.net", "fishburne.org", "fishfuse.com", "fixmail.tk", "fizmail.com", "flashbox.5july.org", "flashmail.com", "flashmail.net", "fleckens.hu", "flipcode.com", "fmail.co.uk", "fmailbox.com", "fmgirl.com", "fmguy.com", "fnbmail.co.za", "fnmail.com", "folkfan.com", "foodmail.com", "footard.com", "footballmail.com", "foothills.net", "for-president.com", "force9.co.uk", "forfree.at", "forgetmail.com", "fornow.eu", "forpresident.com", "fortuncity.com", "fortunecity.com", "forum.dk", "foxmail.com", "fr33mail.info", "francemel.fr", "free-email.ga", "free-online.net", "free-org.com", "free.com.pe", "free.fr", "freeaccess.nl", "freeaccount.com", "freeandsingle.com", "freedom.usa.com", "freedomlover.com", "freegates.be", "freeghana.com", "freelance-france.eu", "freeler.nl", "freemail.c3.hu", "freemail.com.au", "freemail.com.pk", "freemail.de", "freemail.et", "freemail.gr", "freemail.hu", "freemail.it", "freemail.lt", "freemail.ms", "freemail.nl", "freemail.org.mk", "freemails.ga", "freemeil.gq", "freenet.de", "freenet.kg", "freeola.com", "freeola.net", "freeserve.co.uk", "freestart.hu", "freesurf.fr", "freesurf.nl", "freeuk.com", "freeuk.net", "freeukisp.co.uk", "freeweb.org", "freewebemail.com", "freeyellow.com", "freezone.co.uk", "fresnomail.com", "freudenkinder.de", "freundin.ru", "friendlymail.co.uk", "friends-cafe.com", "friendsfan.com", "from-africa.com", "from-america.com", "from-argentina.com", "from-asia.com", "from-australia.com", "from-belgium.com", "from-brazil.com", "from-canada.com", "from-china.net", "from-england.com", "from-europe.com", "from-france.net", "from-germany.net", "from-holland.com", "from-israel.com", "from-italy.net", "from-japan.net", "from-korea.com", "from-mexico.com", "from-outerspace.com", "from-russia.com", "from-spain.net", "fromalabama.com", "fromalaska.com", "fromarizona.com", "fromarkansas.com", "fromcalifornia.com", "fromcolorado.com", "fromconnecticut.com", "fromdelaware.com", "fromflorida.net", "fromgeorgia.com", "fromhawaii.net", "fromidaho.com", "fromillinois.com", "fromindiana.com", "fromiowa.com", "fromjupiter.com", "fromkansas.com", "fromkentucky.com", "fromlouisiana.com", "frommaine.net", "frommaryland.com", "frommassachusetts.com", "frommiami.com", "frommichigan.com", "fromminnesota.com", "frommississippi.com", "frommissouri.com", "frommontana.com", "fromnebraska.com", "fromnevada.com", "fromnewhampshire.com", "fromnewjersey.com", "fromnewmexico.com", "fromnewyork.net", "fromnorthcarolina.com", "fromnorthdakota.com", "fromohio.com", "fromoklahoma.com", "fromoregon.net", "frompennsylvania.com", "fromrhodeisland.com", "fromru.com", "fromsouthcarolina.com", "fromsouthdakota.com", "fromtennessee.com", "fromtexas.com", "fromthestates.com", "fromutah.com", "fromvermont.com", "fromvirginia.com", "fromwashington.com", "fromwashingtondc.com", "fromwestvirginia.com", "fromwisconsin.com", "fromwyoming.com", "front.ru", "frontier.com", "frontiernet.net", "frostbyte.uk.net", "fsmail.net", "ftc-i.net", "ftml.net", "fullmail.com", "funkfan.com", "fuorissimo.com", "furnitureprovider.com", "fuse.net", "fut.es", "fux0ringduh.com", "fwnb.com", "fxsmails.com", , "galaxy5.com", "galaxyhit.com", "gamebox.net", "gamegeek.com", "gamespotmail.com", "gamno.config.work", "garbage.com", "gardener.com", "gawab.com", "gaybrighton.co.uk", "gaza.net", "gazeta.pl", "gazibooks.com", "gci.net", "geecities.com", "geek.com", "geek.hu", "geeklife.com", "gelitik.in", "gencmail.com", "general-hospital.com", "gentlemansclub.de", "geocities.com", "geography.net", "geologist.com", "geopia.com", "germanymail.com", "get.pp.ua", "get1mail.com", "getairmail.cf", "getairmail.com", "getairmail.ga", "getairmail.gq", "getonemail.net", "ghanamail.com", "ghostmail.com", "ghosttexter.de", "giga4u.de", "gigileung.org", "girl4god.com", "givepeaceachance.com", "glay.org", "glendale.net", "globalfree.it", "globalpagan.com", "globalsite.com.br", "gmail.com", "gmail.com.br", "gmail.ru", "gmx.at", "gmx.com", "gmx.de", "gmx.li", "gmx.net", "go.com", "go.ro", "go.ru", "go2net.com", "gocollege.com", "gocubs.com", "goemailgo.com", "gofree.co.uk", "gol.com", "goldenmail.ru", "goldmail.ru", "goldtoolbox.com", "golfemail.com", "golfilla.info", "golfmail.be", "gonavy.net", "goodnewsmail.com", "goodstick.com", "googlegroups.com", "googlemail.com", "goplay.com", "gorillaswithdirtyarmpits.com", "gorontalo.net", "gospelfan.com", "gothere.uk.com", "gotmail.com", "gotmail.org", "gotomy.com", "gotti.otherinbox.com", "gportal.hu", "graduate.org", "graffiti.net", "gramszu.net", "grandmamail.com", "grandmasmail.com", "graphic-designer.com", "grapplers.com", "gratisweb.com", "greenmail.net", "groupmail.com", "grr.la", "grungecafe.com", "gtmc.net", "gua.net", "guessmail.com", "guju.net", "gustr.com", "guy.com", "guy2.com", "guyanafriends.com", "gyorsposta.com", "gyorsposta.hu", "h-mail.us", "hab-verschlafen.de", "habmalnefrage.de", "hacccc.com", "hackermail.com", "hackermail.net", "hailmail.net", "hairdresser.net", "hamptonroads.com", "handbag.com", "handleit.com", "hang-ten.com", "hanmail.net", "happemail.com", "happycounsel.com", "happypuppy.com", "harakirimail.com", "hardcorefreak.com", "hartbot.de", "hawaii.rr.com", "hawaiiantel.net", "heartthrob.com", "heerschap.com", "heesun.net", "hehe.com", "hello.hu", "hello.net.au", "hello.to", "helter-skelter.com", "herediano.com", "herono1.com", "herp.in", "herr-der-mails.de", "hetnet.nl", "hey.to", "hhdevel.com", "hidzz.com", "highmilton.com", "highquality.com", "highveldmail.co.za", "hilarious.com", "hiphopfan.com", "hispavista.com", "hitmail.com", "hitthe.net", "hkg.net", "hkstarphoto.com", "hockeymail.com", "hollywoodkids.com", "home-email.com", "home.de", "home.nl", "home.no.net", "home.ro", "home.se", "homelocator.com", "homemail.com", "homestead.com", "honduras.com", "hongkong.com", "hookup.net", "hoopsmail.com", "hopemail.biz", "horrormail.com", "hot-mail.gq", "hot-shot.com", "hot.ee", "hotbot.com", "hotbrev.com", "hotfire.net", "hotletter.com", "hotmail.ca", "hotmail.ch", "hotmail.co", "hotmail.co.il", "hotmail.co.jp", "hotmail.co.nz", "hotmail.co.uk", "hotmail.co.za", "hotmail.com", "hotmail.com.au", "hotmail.com.br", "hotmail.com.tr", "hotmail.de", "hotmail.es", "hotmail.fi", "hotmail.fr", "hotmail.it", "hotmail.kg", "hotmail.kz", "hotmail.nl", "hotmail.ru", "hotpop.com", "hotpop3.com", "hotvoice.com", "housemail.com", "hsuchi.net", "hu2.ru", "hughes.net", "humanoid.net", "humn.ws.gy", "hunsa.com", "hurting.com", "hush.com", "hushmail.com", "hypernautica.com", "i-connect.com", "i-france.com", "i-mail.com.au", "i-p.com", "i.am", "i.ua", "i12.com", "i2pmail.org", "iamawoman.com", "iamwaiting.com", "iamwasted.com", "iamyours.com", "icestorm.com", "ich-bin-verrueckt-nach-dir.de", "ich-will-net.de", "icloud.com", "icmsconsultants.com", "icq.com", "icqmail.com", "icrazy.com", "id-base.com", "ididitmyway.com", "idigjesus.com", "idirect.com", "ieatspam.eu", "ieatspam.info", "ieh-mail.de", "iespana.es", "ifoward.com", "ig.com.br", "ignazio.it", "ignmail.com", "ihateclowns.com", "ihateyoualot.info", "iheartspam.org", "iinet.net.au", "ijustdontcare.com", "ikbenspamvrij.nl", "ilkposta.com", "ilovechocolate.com", "ilovejesus.com", "ilovetocollect.net", "ilse.nl", "imaginemail.com", "imail.ru", "imailbox.com", "imap-mail.com", "imap.cc", "imapmail.org", "imel.org", "imgof.com", "imgv.de", "immo-gerance.info", "imneverwrong.com", "imposter.co.uk", "imstations.com", "imstressed.com", "imtoosexy.com", "in-box.net", "in2jesus.com", "iname.com", "inbax.tk", "inbound.plus", "inbox.com", "inbox.net", "inbox.ru", "inbox.si", "inboxalias.com", "incamail.com", "incredimail.com", "indeedemail.com", "index.ua", "indexa.fr", "india.com", "indiatimes.com", "indo-mail.com", "indocities.com", "indomail.com", "indyracers.com", "inerted.com", "inet.com", "inet.net.au", "info-media.de", "info-radio.ml", "info66.com", "infohq.com", "infomail.es", "infomart.or.jp", "infospacemail.com", "infovia.com.ar", "inicia.es", "inmail.sk", "inmail24.com", "inmano.com", "inmynetwork.tk", "innocent.com", "inorbit.com", "inoutbox.com", "insidebaltimore.net", "insight.rr.com", "instant-mail.de", "instantemailaddress.com", "instantmail.fr", "instruction.com", "instructor.net", "insurer.com", "interburp.com", "interfree.it", "interia.pl", "interlap.com.ar", "intermail.co.il", "internet-e-mail.com", "internet-mail.org", "internet-police.com", "internetbiz.com", "internetdrive.com", "internetegypt.com", "internetemails.net", "internetmailing.net", "internode.on.net", "invalid.com", "inwind.it", "iobox.com", "iobox.fi", "iol.it", "iol.pt", "iowaemail.com", "ip3.com", "ip4.pp.ua", "ip6.pp.ua", "ipoo.org", "iprimus.com.au", "iqemail.com", "irangate.net", "iraqmail.com", "ireland.com", "irelandmail.com", "iremail.de", "irj.hu", "iroid.com", "isellcars.com", "iservejesus.com", "islamonline.net", "isleuthmail.com", "ismart.net", "isonfire.com", "isp9.net", "israelmail.com", "ist-allein.info", "ist-einmalig.de", "ist-ganz-allein.de", "ist-willig.de", "italymail.com", "itloox.com", "itmom.com", "ivebeenframed.com", "ivillage.com", "iwan-fals.com", "iwmail.com", "iwon.com", "izadpanah.com", , "jahoopa.com", "jakuza.hu", "japan.com", "jaydemail.com", "jazzandjava.com", "jazzfan.com", "jazzgame.com", "je-recycle.info", "jerusalemmail.com", "jet-renovation.fr", "jetable.de", "jetable.pp.ua", "jetemail.net", "jippii.fi", "jmail.co.za", "job4u.com", "jobbikszimpatizans.hu", "joelonsoftware.com", "joinme.com", "jokes.com", "jordanmail.com", "journalist.com", "jourrapide.com", "jovem.te.pt", "joymail.com", "jpopmail.com", "jsrsolutions.com", "jubiimail.dk", "jump.com", "jumpy.it", "juniormail.com", "junk1e.com", "junkmail.com", "junkmail.gq", "juno.com", "justemail.net", "justicemail.com", "kaazoo.com", "kaffeeschluerfer.com", "kaffeeschluerfer.de", "kaixo.com", "kalpoint.com", "kansascity.com", "kapoorweb.com", "karachian.com", "karachioye.com", "karbasi.com", "katamail.com", "kayafmmail.co.za", "kbjrmail.com", "kcks.com", "keg-party.com", "keinpardon.de", "keko.com.ar", "kellychen.com", "keromail.com", "keyemail.com", "kgb.hu", "khosropour.com", "kickassmail.com", "killermail.com", "kimo.com", "kimsdisk.com", "kinglibrary.net", "kinki-kids.com", "kissfans.com", "kittymail.com", "kitznet.at", "kiwibox.com", "kiwitown.com", "klassmaster.net", "km.ru", "knol-power.nl", "kolumbus.fi", "kommespaeter.de", "konx.com", "korea.com", "koreamail.com", "kpnmail.nl", "krim.ws", "krongthip.com", "krunis.com", "ksanmail.com", "ksee24mail.com", "kube93mail.com", "kukamail.com", "kulturbetrieb.info", "kumarweb.com", "kuwait-mail.com", "l33r.eu", "la.com", "labetteraverouge.at", "ladymail.cz", "lagerlouts.com", "lags.us", "lahoreoye.com", "lakmail.com", "lamer.hu", "land.ru", "lankamail.com", "laoeq.com", "laposte.net", "lass-es-geschehen.de", "last-chance.pro", "lastmail.co", "latemodels.com", "latinmail.com", "lavache.com", "law.com", "lawyer.com", "lazyinbox.com", "leehom.net", "legalactions.com", "legalrc.loan", "legislator.com", "lenta.ru", "leonlai.net", "letsgomets.net", "letterboxes.org", "letthemeatspam.com", "levele.com", "levele.hu", "lex.bg", "lexis-nexis-mail.com", "libero.it", "liberomail.com", "lick101.com", "liebt-dich.info", "linkmaster.com", "linktrader.com", "linuxfreemail.com", "linuxmail.org", "lionsfan.com.au", "liontrucks.com", "liquidinformation.net", "list.ru", "listomail.com", "littleapple.com", "littleblueroom.com", "live.at", "live.be", "live.ca", "live.cl", "live.cn", "live.co.uk", "live.co.za", "live.com", "live.com.ar", "live.com.au", "live.com.mx", "live.com.pt", "live.com.sg", "live.de", "live.dk", "live.fr", "live.ie", "live.in", "live.it", "live.jp", "live.nl", "live.no", "live.ru", "live.se", "liveradio.tk", "liverpoolfans.com", "llandudno.com", "llangollen.com", "lmxmail.sk", "lobbyist.com", "localbar.com", "locos.com", "login-email.ga", "loh.pp.ua", "lolfreak.net", "lolito.tk", "london.com", "looksmart.co.uk", "looksmart.com", "looksmart.com.au", "lopezclub.com", "louiskoo.com", "love.cz", "loveable.com", "lovecat.com", "lovefall.ml", "lovefootball.com", "lovelygirl.net", "lovemail.com", "lover-boy.com", "lovergirl.com", "lovesea.gq", "lovethebroncos.com", "lovethecowboys.com", "loveyouforever.de", "lovingjesus.com", "lowandslow.com", "lr7.us", "lroid.com", "luso.pt", "luukku.com", "luv2.us", "lvie.com.sg", "lycos.co.uk", "lycos.com", "lycos.es", "lycos.it", "lycos.ne.jp", "lycosmail.com", "m-a-i-l.com", "m-hmail.com", "m4.org", "m4ilweb.info", "mac.com", "macbox.com", "macfreak.com", "machinecandy.com", "macmail.com", "madcreations.com", "madonnafan.com", "madrid.com", "maennerversteherin.com", "maennerversteherin.de", "maffia.hu", "magicmail.co.za", "magspam.net", "mahmoodweb.com", "mail.bg", "mail-awu.de", "mail-box.cz", "mail-center.com", "mail-central.com", "mail-easy.fr", "mail-filter.com", "mail-me.com", "mail-page.com", "mail-tester.com", "mail.austria.com", "mail.az", "mail.be", "mail.bulgaria.com", "mail.by", "mail.co.za", "mail.com", "mail.com.tr", "mail.de", "mail.ee", "mail.entrepeneurmag.com", "mail.freetown.com", "mail.gr", "mail.hitthebeach.com", "mail.htl22.at", "mail.md", "mail.misterpinball.de", "mail.nu", "mail.org.uk", "mail.pf", "mail.pt", "mail.r-o-o-t.com", "mail.ru", "mail.sisna.com", "mail.svenz.eu", "mail.usa.com", "mail.vasarhely.hu", "mail.wtf", "mail114.net", "mail15.com", "mail2007.com", "mail2aaron.com", "mail2abby.com", "mail2abc.com", "mail2actor.com", "mail2admiral.com", "mail2adorable.com", "mail2adoration.com", "mail2adore.com", "mail2adventure.com", "mail2aeolus.com", "mail2aether.com", "mail2affection.com", "mail2afghanistan.com", "mail2africa.com", "mail2agent.com", "mail2aha.com", "mail2ahoy.com", "mail2aim.com", "mail2air.com", "mail2airbag.com", "mail2airforce.com", "mail2airport.com", "mail2alabama.com", "mail2alan.com", "mail2alaska.com", "mail2albania.com", "mail2alcoholic.com", "mail2alec.com", "mail2alexa.com", "mail2algeria.com", "mail2alicia.com", "mail2alien.com", "mail2allan.com", "mail2allen.com", "mail2allison.com", "mail2alpha.com", "mail2alyssa.com", "mail2amanda.com", "mail2amazing.com", "mail2amber.com", "mail2america.com", "mail2american.com", "mail2andorra.com", "mail2andrea.com", "mail2andy.com", "mail2anesthesiologist.com", "mail2angela.com", "mail2angola.com", "mail2ann.com", "mail2anna.com", "mail2anne.com", "mail2anthony.com", "mail2anything.com", "mail2aphrodite.com", "mail2apollo.com", "mail2april.com", "mail2aquarius.com", "mail2arabia.com", "mail2arabic.com", "mail2architect.com", "mail2ares.com", "mail2argentina.com", "mail2aries.com", "mail2arizona.com", "mail2arkansas.com", "mail2armenia.com", "mail2army.com", "mail2arnold.com", "mail2art.com", "mail2artemus.com", "mail2arthur.com", "mail2artist.com", "mail2ashley.com", "mail2ask.com", "mail2astronomer.com", "mail2athena.com", "mail2athlete.com", "mail2atlas.com", "mail2atom.com", "mail2attitude.com", "mail2auction.com", "mail2aunt.com", "mail2australia.com", "mail2austria.com", "mail2azerbaijan.com", "mail2baby.com", "mail2bahamas.com", "mail2bahrain.com", "mail2ballerina.com", "mail2ballplayer.com", "mail2band.com", "mail2bangladesh.com", "mail2bank.com", "mail2banker.com", "mail2bankrupt.com", "mail2baptist.com", "mail2bar.com", "mail2barbados.com", "mail2barbara.com", "mail2barter.com", "mail2basketball.com", "mail2batter.com", "mail2beach.com", "mail2beast.com", "mail2beatles.com", "mail2beauty.com", "mail2becky.com", "mail2beijing.com", "mail2belgium.com", "mail2belize.com", "mail2ben.com", "mail2bernard.com", "mail2beth.com", "mail2betty.com", "mail2beverly.com", "mail2beyond.com", "mail2biker.com", "mail2bill.com", "mail2billionaire.com", "mail2billy.com", "mail2bio.com", "mail2biologist.com", "mail2black.com", "mail2blackbelt.com", "mail2blake.com", "mail2blind.com", "mail2blonde.com", "mail2blues.com", "mail2bob.com", "mail2bobby.com", "mail2bolivia.com", "mail2bombay.com", "mail2bonn.com", "mail2bookmark.com", "mail2boreas.com", "mail2bosnia.com", "mail2boston.com", "mail2botswana.com", "mail2bradley.com", "mail2brazil.com", "mail2breakfast.com", "mail2brian.com", "mail2bride.com", "mail2brittany.com", "mail2broker.com", "mail2brook.com", "mail2bruce.com", "mail2brunei.com", "mail2brunette.com", "mail2brussels.com", "mail2bryan.com", "mail2bug.com", "mail2bulgaria.com", "mail2business.com", "mail2buy.com", "mail2ca.com", "mail2california.com", "mail2calvin.com", "mail2cambodia.com", "mail2cameroon.com", "mail2canada.com", "mail2cancer.com", "mail2capeverde.com", "mail2capricorn.com", "mail2cardinal.com", "mail2cardiologist.com", "mail2care.com", "mail2caroline.com", "mail2carolyn.com", "mail2casey.com", "mail2cat.com", "mail2caterer.com", "mail2cathy.com", "mail2catlover.com", "mail2catwalk.com", "mail2cell.com", "mail2chad.com", "mail2champaign.com", "mail2charles.com", "mail2chef.com", "mail2chemist.com", "mail2cherry.com", "mail2chicago.com", "mail2chile.com", "mail2china.com", "mail2chinese.com", "mail2chocolate.com", "mail2christian.com", "mail2christie.com", "mail2christmas.com", "mail2christy.com", "mail2chuck.com", "mail2cindy.com", "mail2clark.com", "mail2classifieds.com", "mail2claude.com", "mail2cliff.com", "mail2clinic.com", "mail2clint.com", "mail2close.com", "mail2club.com", "mail2coach.com", "mail2coastguard.com", "mail2colin.com", "mail2college.com", "mail2colombia.com", "mail2color.com", "mail2colorado.com", "mail2columbia.com", "mail2comedian.com", "mail2composer.com", "mail2computer.com", "mail2computers.com", "mail2concert.com", "mail2congo.com", "mail2connect.com", "mail2connecticut.com", "mail2consultant.com", "mail2convict.com", "mail2cook.com", "mail2cool.com", "mail2cory.com", "mail2costarica.com", "mail2country.com", "mail2courtney.com", "mail2cowboy.com", "mail2cowgirl.com", "mail2craig.com", "mail2crave.com", "mail2crazy.com", "mail2create.com", "mail2croatia.com", "mail2cry.com", "mail2crystal.com", "mail2cuba.com", "mail2culture.com", "mail2curt.com", "mail2customs.com", "mail2cute.com", "mail2cutey.com", "mail2cynthia.com", "mail2cyprus.com", "mail2czechrepublic.com", "mail2dad.com", "mail2dale.com", "mail2dallas.com", "mail2dan.com", "mail2dana.com", "mail2dance.com", "mail2dancer.com", "mail2danielle.com", "mail2danny.com", "mail2darlene.com", "mail2darling.com", "mail2darren.com", "mail2daughter.com", "mail2dave.com", "mail2dawn.com", "mail2dc.com", "mail2dealer.com", "mail2deanna.com", "mail2dearest.com", "mail2debbie.com", "mail2debby.com", "mail2deer.com", "mail2delaware.com", "mail2delicious.com", "mail2demeter.com", "mail2democrat.com", "mail2denise.com", "mail2denmark.com", "mail2dennis.com", "mail2dentist.com", "mail2derek.com", "mail2desert.com", "mail2devoted.com", "mail2devotion.com", "mail2diamond.com", "mail2diana.com", "mail2diane.com", "mail2diehard.com", "mail2dilemma.com", "mail2dillon.com", "mail2dinner.com", "mail2dinosaur.com", "mail2dionysos.com", "mail2diplomat.com", "mail2director.com", "mail2dirk.com", "mail2disco.com", "mail2dive.com", "mail2diver.com", "mail2divorced.com", "mail2djibouti.com", "mail2doctor.com", "mail2doglover.com", "mail2dominic.com", "mail2dominica.com", "mail2dominicanrepublic.com", "mail2don.com", "mail2donald.com", "mail2donna.com", "mail2doris.com", "mail2dorothy.com", "mail2doug.com", "mail2dough.com", "mail2douglas.com", "mail2dow.com", "mail2downtown.com", "mail2dream.com", "mail2dreamer.com", "mail2dude.com", "mail2dustin.com", "mail2dyke.com", "mail2dylan.com", "mail2earl.com", "mail2earth.com", "mail2eastend.com", "mail2eat.com", "mail2economist.com", "mail2ecuador.com", "mail2eddie.com", "mail2edgar.com", "mail2edwin.com", "mail2egypt.com", "mail2electron.com", "mail2eli.com", "mail2elizabeth.com", "mail2ellen.com", "mail2elliot.com", "mail2elsalvador.com", "mail2elvis.com", "mail2emergency.com", "mail2emily.com", "mail2engineer.com", "mail2english.com", "mail2environmentalist.com", "mail2eos.com", "mail2eric.com", "mail2erica.com", "mail2erin.com", "mail2erinyes.com", "mail2eris.com", "mail2eritrea.com", "mail2ernie.com", "mail2eros.com", "mail2estonia.com", "mail2ethan.com", "mail2ethiopia.com", "mail2eu.com", "mail2europe.com", "mail2eurus.com", "mail2eva.com", "mail2evan.com", "mail2evelyn.com", "mail2everything.com", "mail2exciting.com", "mail2expert.com", "mail2fairy.com", "mail2faith.com", "mail2fanatic.com", "mail2fancy.com", "mail2fantasy.com", "mail2farm.com", "mail2farmer.com", "mail2fashion.com", "mail2fat.com", "mail2feeling.com", "mail2female.com", "mail2fever.com", "mail2fighter.com", "mail2fiji.com", "mail2filmfestival.com", "mail2films.com", "mail2finance.com", "mail2finland.com", "mail2fireman.com", "mail2firm.com", "mail2fisherman.com", "mail2flexible.com", "mail2florence.com", "mail2florida.com", "mail2floyd.com", "mail2fly.com", "mail2fond.com", "mail2fondness.com", "mail2football.com", "mail2footballfan.com", "mail2found.com", "mail2france.com", "mail2frank.com", "mail2frankfurt.com", "mail2franklin.com", "mail2fred.com", "mail2freddie.com", "mail2free.com", "mail2freedom.com", "mail2french.com", "mail2freudian.com", "mail2friendship.com", "mail2from.com", "mail2fun.com", "mail2gabon.com", "mail2gabriel.com", "mail2gail.com", "mail2galaxy.com", "mail2gambia.com", "mail2games.com", "mail2gary.com", "mail2gavin.com", "mail2gemini.com", "mail2gene.com", "mail2genes.com", "mail2geneva.com", "mail2george.com", "mail2georgia.com", "mail2gerald.com", "mail2german.com", "mail2germany.com", "mail2ghana.com", "mail2gilbert.com", "mail2gina.com", "mail2girl.com", "mail2glen.com", "mail2gloria.com", "mail2goddess.com", "mail2gold.com", "mail2golfclub.com", "mail2golfer.com", "mail2gordon.com", "mail2government.com", "mail2grab.com", "mail2grace.com", "mail2graham.com", "mail2grandma.com", "mail2grandpa.com", "mail2grant.com", "mail2greece.com", "mail2green.com", "mail2greg.com", "mail2grenada.com", "mail2gsm.com", "mail2guard.com", "mail2guatemala.com", "mail2guy.com", "mail2hades.com", "mail2haiti.com", "mail2hal.com", "mail2handhelds.com", "mail2hank.com", "mail2hannah.com", "mail2harold.com", "mail2harry.com", "mail2hawaii.com", "mail2headhunter.com", "mail2heal.com", "mail2heather.com", "mail2heaven.com", "mail2hebe.com", "mail2hecate.com", "mail2heidi.com", "mail2helen.com", "mail2hell.com", "mail2help.com", "mail2helpdesk.com", "mail2henry.com", "mail2hephaestus.com", "mail2hera.com", "mail2hercules.com", "mail2herman.com", "mail2hermes.com", "mail2hespera.com", "mail2hestia.com", "mail2highschool.com", "mail2hindu.com", "mail2hip.com", "mail2hiphop.com", "mail2holland.com", "mail2holly.com", "mail2hollywood.com", "mail2homer.com", "mail2honduras.com", "mail2honey.com", "mail2hongkong.com", "mail2hope.com", "mail2horse.com", "mail2hot.com", "mail2hotel.com", "mail2houston.com", "mail2howard.com", "mail2hugh.com", "mail2human.com", "mail2hungary.com", "mail2hungry.com", "mail2hygeia.com", "mail2hyperspace.com", "mail2hypnos.com", "mail2ian.com", "mail2ice-cream.com", "mail2iceland.com", "mail2idaho.com", "mail2idontknow.com", "mail2illinois.com", "mail2imam.com", "mail2in.com", "mail2india.com", "mail2indian.com", "mail2indiana.com", "mail2indonesia.com", "mail2infinity.com", "mail2intense.com", "mail2iowa.com", "mail2iran.com", "mail2iraq.com", "mail2ireland.com", "mail2irene.com", "mail2iris.com", "mail2irresistible.com", "mail2irving.com", "mail2irwin.com", "mail2isaac.com", "mail2israel.com", "mail2italian.com", "mail2italy.com", "mail2jackie.com", "mail2jacob.com", "mail2jail.com", "mail2jaime.com", "mail2jake.com", "mail2jamaica.com", "mail2james.com", "mail2jamie.com", "mail2jan.com", "mail2jane.com", "mail2janet.com", "mail2janice.com", "mail2japan.com", "mail2japanese.com", "mail2jasmine.com", "mail2jason.com", "mail2java.com", "mail2jay.com", "mail2jazz.com", "mail2jed.com", "mail2jeffrey.com", "mail2jennifer.com", "mail2jenny.com", "mail2jeremy.com", "mail2jerry.com", "mail2jessica.com", "mail2jessie.com", "mail2jesus.com", "mail2jew.com", "mail2jeweler.com", "mail2jim.com", "mail2jimmy.com", "mail2joan.com", "mail2joann.com", "mail2joanna.com", "mail2jody.com", "mail2joe.com", "mail2joel.com", "mail2joey.com", "mail2john.com", "mail2join.com", "mail2jon.com", "mail2jonathan.com", "mail2jones.com", "mail2jordan.com", "mail2joseph.com", "mail2josh.com", "mail2joy.com", "mail2juan.com", "mail2judge.com", "mail2judy.com", "mail2juggler.com", "mail2julian.com", "mail2julie.com", "mail2jumbo.com", "mail2junk.com", "mail2justin.com", "mail2justme.com", "mail2k.ru", "mail2kansas.com", "mail2karate.com", "mail2karen.com", "mail2karl.com", "mail2karma.com", "mail2kathleen.com", "mail2kathy.com", "mail2katie.com", "mail2kay.com", "mail2kazakhstan.com", "mail2keen.com", "mail2keith.com", "mail2kelly.com", "mail2kelsey.com", "mail2ken.com", "mail2kendall.com", "mail2kennedy.com", "mail2kenneth.com", "mail2kenny.com", "mail2kentucky.com", "mail2kenya.com", "mail2kerry.com", "mail2kevin.com", "mail2kim.com", "mail2kimberly.com", "mail2king.com", "mail2kirk.com", "mail2kiss.com", "mail2kosher.com", "mail2kristin.com", "mail2kurt.com", "mail2kuwait.com", "mail2kyle.com", "mail2kyrgyzstan.com", "mail2la.com", "mail2lacrosse.com", "mail2lance.com", "mail2lao.com", "mail2larry.com", "mail2latvia.com", "mail2laugh.com", "mail2laura.com", "mail2lauren.com", "mail2laurie.com", "mail2lawrence.com", "mail2lawyer.com", "mail2lebanon.com", "mail2lee.com", "mail2leo.com", "mail2leon.com", "mail2leonard.com", "mail2leone.com", "mail2leslie.com", "mail2letter.com", "mail2liberia.com", "mail2libertarian.com", "mail2libra.com", "mail2libya.com", "mail2liechtenstein.com", "mail2life.com", "mail2linda.com", "mail2linux.com", "mail2lionel.com", "mail2lipstick.com", "mail2liquid.com", "mail2lisa.com", "mail2lithuania.com", "mail2litigator.com", "mail2liz.com", "mail2lloyd.com", "mail2lois.com", "mail2lola.com", "mail2london.com", "mail2looking.com", "mail2lori.com", "mail2lost.com", "mail2lou.com", "mail2louis.com", "mail2louisiana.com", "mail2lovable.com", "mail2love.com", "mail2lucky.com", "mail2lucy.com", "mail2lunch.com", "mail2lust.com", "mail2luxembourg.com", "mail2luxury.com", "mail2lyle.com", "mail2lynn.com", "mail2madagascar.com", "mail2madison.com", "mail2madrid.com", "mail2maggie.com", "mail2mail4.com", "mail2maine.com", "mail2malawi.com", "mail2malaysia.com", "mail2maldives.com", "mail2mali.com", "mail2malta.com", "mail2mambo.com", "mail2man.com", "mail2mandy.com", "mail2manhunter.com", "mail2mankind.com", "mail2many.com", "mail2marc