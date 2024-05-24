jQuery(document).ready(function(){jQuery("a").ear("href");if(t==undefined||t=="")return;var n=t.replace("http://","").replace("https://","");var r=t.split(".").reverse();var i=r[0].toLowerCase();var r=t.split("/").reverse();var s=r[2];var o=false;if(typeof analyticsFileTypes!="undefined"){if(jQuery.inArray(i,analyticsFileTypes)!=-1){o=true;e.click(function(){if(analyticsEventTracking=="enabled"){if(analyticsSnippet=="enabled"){_gaq.push(["_trackEvent","Downloads",i.toUpperCase(),t])}else{ga("send","event","Downloads",i.toUpperCase(),t)}}else{if(analyticsSnippet=="enabled"){_gaq.push(["_trackPageview",analyticsDownloadsPrefix+n])}else{ga("send","pageview",analyticsDownloadsPrefix+n)}}})}}if(t.match(/^http/)&&!t.match(document.domain)&&o==false){e.click(function(){if(analyticsEventTracking=="enabled"){if(analyticsSnippet=="enabled"){_gaq.push(["_trackEvent","Outbound Traffic",t.match(/:\/\/(.[^/]+)/)[1],t])}else{ga("send","event","Outbound Traffic",t.match(/:\/\/(.[^/]+)/)[1],t)}}else if(analyticsSnippet=="enabled"){_gaq.push(["_trackPageview",analyticsOutboundPrefix+n])}else{ga("send","pageview",analyticsOutboundPrefix+n)}})}})})ent="https://www.ieee.org/communities/regional-world-map.html"/>

<!-- Open Group Meta Tags -->
<meta property="og:title" content="IEEE Regional World Map"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.ieee.org/communities/regional-world-map.html"/>
<meta property="og:image" content="/content/dam/ieee-org/ieee-web/images/10029837.jpg"/>
<meta property="og:description" content="regional world map"/>


    
    
<link rel="stylesheet" href="/etc.clientlibs/foundation/clientlibs/main.min.b4994788cf1eaeed300a0aa7af53f3c8.css" type="text/css">
<script type="text/javascript" src="/etc.clientlibs/clientlibs/granite/jquery.min.1494c0abbe501301e2ab9daecc6082a8.js"></script>
<script type="text/javascript" src="/etc.clientlibs/clientlibs/granite/utils.min.4a192b590a2c2926fb000264370c0588.js"></script>
<script type="text/javascript" src="/etc.clientlibs/clientlibs/granite/jquery/granite.min.543d214c88dfa6f4a3233b630c82d875.js"></script>
<script type="text/javascript" src="/etc.clientlibs/foundation/clientlibs/jquery.min.dd9b395c741ce2784096e26619e14910.js"></script>
<script type="text/javascript" src="/etc.clientlibs/foundation/clientlibs/shared.min.9f3716b2c473fd53ab31b1caa53131a8.js"></script>
<script type="text/javascript" src="/etc.clientlibs/foundation/clientlibs/main.min.a6faafbeed24f5d40aaf367c778753ab.js"></script>



    
    <link href="/etc/designs/ieee-org.css" rel="stylesheet" type="text/css"/>















<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
      

    
<link rel="stylesheet" href="/etc/clientlibs/axis41-core/thirdparty/bootstrap.min.415e90cdc2979effecb1a8783fd29374.css" type="text/css">




    
<link rel="stylesheet" href="/etc/clientlibs/axis41-core/thirdparty/datatable.min.32da7a9d474473b805c87da2b7440e7a.css" type="text/css">
<link rel="stylesheet" href="/etc/clientlibs/axis41-core/base.min.dd4fa54e5e23f02021a5e900cada31e4.css" type="text/css">




    
<link rel="stylesheet" href="/etc/clientlibs/axis41-core/apps_components.min.d41d8cd98f00b204e9800998ecf8427e.css" type="text/css">




    





    
<script type="text/javascript" src="/etc/clientlibs/axis41-core/thirdparty/jquery.min.7712f0199dae3df8a5710eb698f33a82.js"></script>




    
<script type="text/javascript" src="/etc/clientlibs/axis41-core/thirdparty/jquery_form.min.aadcea36fb627f41d61bc51eeabc2d30.js"></script>
<script type="text/javascript" src="/etc/clientlibs/axis41-core/thirdparty/jquery_validator.min.449c74f61ca55bbec5ed39305eda1661.js"></script>




    
<script type="text/javascript" src="/etc/clientlibs/axis41-core/thirdparty/datatable.min.e016dbee3087ff119335773dcb8bb0ef.js"></script>




    
<script type="text/javascript" src="/etc/clientlibs/axis41-core/thirdparty/bootstrap.min.f2e918a2d4ebfce485f87217ced3049b.js"></script>



<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>


    
<link rel="stylesheet" href="/etc/designs/ieee-core/clientlibs/base.min.ac2ae8f7ae05e9e43f3edb3d168b3988.css" type="text/css">




    
<link rel="stylesheet" href="/etc/designs/ieee-core/clientlibs/apps_components.min.d41d8cd98f00b204e9800998ecf8427e.css" type="text/css">




<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
      

    
<link rel="stylesheet" href="/etc/designs/ieee-org/clientlibs/base.min.6593b2bec2d9309f7adf316fabe6abac.css" type="text/css">




    
<link rel="stylesheet" href="/etc/designs/ieee-org/clientlibs/apps_components.min.939789984cb7a8564d5c62af2ac52f44.css" type="text/css">




    
<link rel="stylesheet" href="/etc/designs/ieee-org/clientlibs/thirdparty/font-awesome.min.e923adc01ec6cff23e270551911656c6.css" type="text/css">




    
<link rel="stylesheet" href="/etc/designs/ieee-org/clientlibs/thirdparty/formata.min.6fce10afbb211946f7c90966f3d2a499.css" type="text/css">








<link rel="shortcut icon" href="/etc/designs/ieee-org/favicon.ico"/>
<link rel="icon" type="image/png" sizes="32x32" href="/etc/designs/ieee-org/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/etc/designs/ieee-org/favicon-16x16.png"/>
<link rel="manifest" href="/etc/designs/ieee-org/site.webmanifest"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>


<!-- Google site verification code -->
<meta name="google-site-verification" content="hTNJkmjfSys2eoNeWKkSU2zJepc7uBJESs-CmqM043Q"/>
<!-- Bing site verification code -->
<meta name="msvalidate.01" content="1FD00A0907F87F784043B20D6E1F3769"/>

<!-- Google Analytics - Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-4930232-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-4930232-1');
</script>
<!-- End of Google Analytics -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P24WBM');</script>
<!-- End Google Tag Manager -->


<title>IEEE - IEEE Regional World Map</title>

<!-- Facebook Domain verification code -->
<meta name="facebook-domain-verification" content="hxzn5csdsl9pdnmxcvjs4dxzpzxf7v"/>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1591804690854330');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1591804690854330&ev=PageView&noscript=1"/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->

<!-- Marketo - Munchkin Lead Tracking Script - START (commenting out for 6.4 PROD release)-->
<script src="//app-ab24.marketo.com/js/forms2/js/forms2.min.js"></script>
<script src="//s3.amazonaws.com/ieee-mkto-cross-domain/enterprise-page-code.js"></script>
<!-- Marketo - Munchkin Lead Tracking Script - END -->

<!-- Bablic language translation tool -->
<!-- 
<script src="//d.bablic.com/snippet/5e750733279d87000114782d.js?version=3.9"></script>
 -->



<script src="https://up.pixel.ad/assets/up.js?um=1"></script>
<script type="text/javascript">
	cntrUpTag.track('cntrData', '2fe93d92d9c4c2dd');
</script>

<!-- Font awesome pro  -->
<!--  removing this as per the SR: 188152 -->
<!--  <script src="https://kit.fontawesome.com/481d654f3c.js" crossorigin="anonymous"></script>  -->
</head>
    <body>

<body lang="en">
	<!-- TransUnion Pixel -->
	<img style='display:none' src='//di.rlcdn.com/406006.gif?pdata=partner%3Dtap315285%2Cdata%3Dtype%3Asite%24audience%3AMSO_IEEEInsurance_ClientSite_Control'/>
	<!-- End TransUnion Pixel -->
	<div id="page-wrapper" class="clearfix">
		

<!-- Header
============================================= -->
<header id="page-header" class="">
    




    
        
        
        <div class="newpar new section">

</div>

    
        
        
        <div class="par iparys_inherited">

    
    
    
    
        
        
        <div class="global-header">

<!-- Global Header Content
============================================= -->
<div class="global-nav">
    <div class="container">
    	<div class="row">
    		<div class="col-sm-12 text-left">
    			<a class="skip-to-content-link hidden-xs hidden-sm hidden-md" href="#main-content"> Skip to content </a>
    		</div>
    	</div>
        <div class="row">
            <div class="col-sm-12 text-left">
				


<div id="meta-nav" class="container hidden-xs hidden-sm">
	<a class="skip-nav hidden" href="#mn-header"> 
		<img alt="Skip Navigation" src="https://www.ieee.org/ieee-mashup/images/blank.gif" height="1px" width="1px"/>
	</a>
	<div id="util-left">
		<a href="https://www.ieee.org" class="ieee-home">IEEE.org</a>|&nbsp;
		<a href="https://ieeexplore.ieee.org/Xplore/home.jsp" class="top-divider-space">IEEE <em>Xplore</em> Digital Library</a>&nbsp;|&nbsp;
		<a href="http://standards.ieee.org" class="top-divider-space">IEEE Standards</a>&nbsp;|&nbsp;
		<a href="http://spectrum.ieee.org" class="top-divider-space">IEEE Spectrum</a>&nbsp;|&nbsp;
		<a href="https://www.ieee.org/sitemap.html" class="top-divider-space" accesskey="2">More Sites</a>
		<a href="https://www.ieee.org/give" class="top-divider-space hidden-md hidden-lg">Donate</a>
	</div>
	<div id="util-right" style="float: right">
		<div id="user-info-spinner" class="dot-flashing hidden"></div>
		<div id="user-info" class="hidden">
			<a href="https://www.ieee.org/give" class="top-divider-space">Donate</a>&nbsp;|&nbsp;
			
				<span class="cart-count-link">
					<a href="https://www.ieee.org/cart/public/myCart/page.html" class="top-divider-space" style="cursor:pointer">Cart (<span id="mn-cart-item-qty" class="cart-items-count">0</span>)</a>&nbsp;|&nbsp;
				</span>
			
	
			<span id="rc-purchases" class="hidden">
				<a href="https://www.ieee.org/profile/otherpurchases/showOtherPurchases.html">Purchases</a> 
				<span class="">&nbsp;|&nbsp;</span>
	        </span>
	
			<span class="logged-in-metanav-info" style="display: none">
				<a href="https://www.ieee.org/profile" id="mn-ieee-username" class="ieee-user-name"><strong><span id="mn-user-name-text"></span></strong></a>&nbsp;|&nbsp;
				<a href="/system/sling/logout.html?resource=/bin/svc/ieeecommon/ieee-org/secured/redirect.html" id="mn-signout-link" class="mn-menu-link">Sign Out</a>
			</span>
			<span class="anonymous-metanav-info">
				<a href="https://www.ieee.org/profile/public/createwebaccount/showCreateAccount.html?url=" id="mn-calink-link">Create Account</a>&nbsp;|&nbsp;
				<a href="/bin/svc/ieeecommon/ieee-org/secured/redirect.html?finalTarget=" class="sign-in-cls" id="mn-signin-link">Sign In</a>
			</span>
		</div>
		<div id='ssoValidatorUrl' class='hidden'>https://securesso.ieee.org/ieeevendorsso/rest/auth/validatePFToken</div>
		<div id='xploreLogoutUrl' class='hidden'>https://ieeexplore.ieee.org/servlet/Login?logout=ibplogout</div>
		
	</div>
	<div style="clear: both; height: 0;">&nbsp;</div>
	<div id="mn-header"></div>
</div>


<ul class="signin pull-right hidden-lg hidden-md">
	<li class="logged-in-metanav-info" style="display: none">
		<a href="https://www.ieee.org/profile"><i class="fa fa-user-circle-o" aria-hidden="true"></i> </a>
	</li>
	<li class="anonymous-metanav-info">
		<a href="/bin/svc/ieeecommon/ieee-org/secured/redirect.html?finalTarget=" class="sign-in-cls"><i class="fa fa-user-circle-o" aria-hidden="true"></i> </a>
	</li>
	
		<li class="cart-count-link">
			<a href="https://www.ieee.org/cart/public/myCart/page.html"><span id="mnmobile-cart-item-qty" class="cart-items-count">0</span>
				<i class="fa fa-shopping-cart" aria-hidden="true"></i>
			</a>
		</li>
	
</ul>

				<div class="small-logo hidden-md hidden-lg">
                    








 


<!-- Logo Content
============================================= -->
<a href="/">
    <img src="/content/dam/ieee-org/ieee/web/org/globals/EEE140thAnniversary_Mobile_150X38.png" alt="IEEE - Advancing Technology for Humanity" title="IEEE - Advancing Technology for Humanity" class="img-responsive"/>
</a>
<!-- #logo-content end -->

                </div>
                <div class="navbar-header hidden-lg hidden-md">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<!-- #global-header-content End -->
</div>

    
        
        
        <div class="page-header-container">

<!--Page Header Content
============================================= -->
<div class="primary-navigation">
    <div class="header-block">
        <div class="container">
            <div class="row">
                <div class="header-section hidden-xs hidden-sm">
                    <div class="brand-section col-xs-12">
                        <div class="logo-left pull-left">
                            








 


<!-- Logo Content
============================================= -->
<a href="/">
    <img src="/content/dam/ieee-org/ieee/web/org/globals/ieee_logo_140yrs.png" alt="IEEE - Advancing Technology for Humanity" title="IEEE - Advancing Technology for Humanity" class="img-responsive"/>
</a>
<!-- #logo-content end -->

                        </div>
                        <div class="pull-left hidden-xs hidden-sm">
                        	<div class="slogan">
                            	










<!--Plain Text component content
============================================= -->

    <a href="/about/index.html?WT.mc_id=head_bm">The professional home for the engineering and technology community worldwide</a>

<!-- #plain-text-component end -->

                           	</div>
                        </div>
                        <div class="right-block pull-right">
                            <div class="search-bar">
                                <!-- Google search component here -->
                                

<!-- Sightly global objects declaration
============================================= -->

<!-- #sightly-global-objects-declaration end -->

<!-- Placeholder Content omitted since search will be on header.
=============================================================== -->         
<!-- #placeholder-content end -->

<!-- Search UI Content
======================= -->
<form action="/searchresults/index.html" role="search" id="searchForm">
	<div class="input-group search-bar">
		<label for="q" class="visuallyhidden">Search all IEEE websites</label>
		<input type="search" name="q" id="q" title="Search all IEEE websites" placeholder="Search all IEEE websites" class="required form-control"/>
		
		<span class="input-group-addon" id="searchSubmitButton">
			<i class="glyphicon glyphicon-search"></i>
		</span>
	</div>
</form>
<!-- #search UI content end -->	            
                            </div>
                            
                            <div class="hidden-xs hidden-sm pull-right">
                                









<!-- Social Media Container Content
============================================= -->

    
    <div class="socialmedia">
        <ul>
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->


    <a class="collabratec-icon" aria-label="Collabratec" alt="Collabratec" href="https://ieee-collabratec.ieee.org/" target="_self"></a>

<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://www.facebook.com/IEEE.org/" aria-label="Facebook" alt="Facebook" target="_self">
        <i class="fa fa-facebook"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://twitter.com/IEEEorg" aria-label="Twitter" alt="Twitter" target="_self">
        <i class="fa fa-twitter"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://www.linkedin.com/company/ieee" aria-label="Linkedin" alt="Linkedin" target="_self">
        <i class="fa fa-linkedin"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://www.instagram.com/ieeeorg/" aria-label="Instagram" alt="Instagram" target="_self">
        <i class="fa fa-instagram"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        </ul>
    </div>

<!--#Social-media-container content end-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="site-navigation" role="navigation">
            	

<!-- Sightly global objects declaration
============================================= -->


<!-- #sightly-global-objects-declaration end -->

<!-- Placeholder Content
============================================= -->

<!-- #placeholder-content end -->

<!-- Site Navigation content started
================================================= -->
<ul class="main-menu">
    <li class="hidden-md hidden-lg" id="header_menu_search">
        

<!-- Sightly global objects declaration
============================================= -->

<!-- #sightly-global-objects-declaration end -->

<!-- Placeholder Content omitted since search will be on header.
=============================================================== -->         
<!-- #placeholder-content end -->

<!-- Search UI Content
======================= -->
<form action="/searchresults/index.html" role="search" id="searchForm">
	<div class="input-group search-bar">
		<label for="q" class="visuallyhidden">Search all IEEE websites</label>
		<input type="search" name="q" id="q" title="Search all IEEE websites" placeholder="Search all IEEE websites" class="required form-control"/>
		
		<span class="input-group-addon" id="searchSubmitButton">
			<i class="glyphicon glyphicon-search"></i>
		</span>
	</div>
</form>
<!-- #search UI content end -->	            
    </li>
    <li id="header_menu_0">
        <a href="#" class="hidden-md hidden-lg nav-link">IEEE Sites</a>
        <a class="accordian-iocns accordianClick hidden-md hidden-lg"></a>
        <div class="dropdown-wrap header_menu_0">
            <div class="panel-collapse"></div>
        </div>
    </li>
    
        <li id="header_menu_1">
            
            <a href="/about.html" class="nav-link">
				About
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_1 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="/about/vision-mission.html" target="_self">
					Mission and vision
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/at-a-glance.html" target="_self">
					IEEE at a glance
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/ieee-strategic-plan.html" target="_self">
					IEEE Strategic Plan
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/organization/index.html" target="_self">
					Organization of IEEE
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/news/index.html" target="_self">
					Newsroom
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/diversity-index.html" target="_self">
					Diversity, Equity, &amp; Inclusion
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/compliance.html" target="_self">
					Organizational Ethics
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/annual-report.html" target="_self">
					Annual Report
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/ieee-history.html" target="_self">
					History of IEEE
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/volunteers/index.html" target="_self">
					Volunteer resources
				</a>
            </li>
        
            <li>
                
				

                <a href="https://corporate-awards.ieee.org/?utm_source=mm_link&utm_campaign=awards&utm_medium=about&utm_term=awards" target="_self">
					IEEE Corporate Awards Program
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/financials.html" target="_self">
					Financials and Statistics
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/technologies.html" target="_self">
					IEEE Future Directions
				</a>
            </li>
        
            <li>
                
				

                <a href="/about/industry/introduction.html" target="_self">
					IEEE for Industry (Corporations, Government, Individuals)
				</a>
            </li>
        
            <li>
                
				

                <a href="https://climate-change.ieee.org?utm_source=mm_link&utm_campaign=climate-change&utm_medium=about&utm_term=ieee-climate-change" target="_self">
					IEEE Climate Change
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/news/index.html?utm_source=mm_wdw&utm_campaign=new&utm_medium=ab&utm_term=news">Get the latest news</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/volunteers/index.html?utm_source=%20mm_wdw&utm_campaign=vr&utm_medium=ab&utm_term=volunteer%20resources">Access volunteer resources (Code of Ethics, financial forms, tools and templates, and more) </a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/contact.html?utm_source=%20mm_wdw&utm_campaign=contact&utm_medium=ab&utm_term=contact%20locations">Find IEEE locations </a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://supportcenter.ieee.org/?utm_source=%20mm_wdw&utm_campaign=support&utm_medium=ab&utm_term=support%20center">Get help from the IEEE Support Center </a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://supportcenter.ieee.org/app/answers/detail/a_id/3087?utm_source=wdw&utm_medium=lp-about&utm_campaign=recover-account">Recover your IEEE Account username and password</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/awards/index.html?utm_source=%20mm_wdw&utm_campaign=iap&utm_medium=ab&utm_term=awards%20program">Learn about the IEEE Awards program and submit nomination</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/organization/index.html?utm_source=%20mm_wdw&utm_campaign=ooi&utm_medium=ab&utm_term=organization%2C%20leadership">View IEEE&#39;s organizational structure and leadership</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://ieee.taleo.net/careersection/2/jobsearch.ftl?utm_source=mm_wdw&utm_campaign=taleo-jobs&utm_medium=ab&utm_term=jobs%20at%20ieee">Apply for jobs at IEEE </a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/ieee-history.html?utm_source=mm_wdw&utm_campaign=hoi&utm_medium=ab&utm_term=ieee%20history">See the history of IEEE</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/diversity-index.html?utm_source=mm_wdw&utm_campaign=dei&utm_medium=ab&utm_term=diversity">Learn more about Diversity, Equity &amp; Inclusion at IEEE</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            

            
            
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
        <li id="header_menu_2">
            
            <a href="/membership.html" class="nav-link">
				Membership
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_2 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="/membership/join/index.html" target="_self">
					Join IEEE
				</a>
            </li>
        
            <li>
                
				

                <a href="https://www.ieee.org/membership-catalog/index.html?srchProdType=Societies&searchType=prodType" target="_self">
					Join an IEEE Society
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/renew.html" target="_self">
					Renew IEEE membership
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/benefits/index.html" target="_self">
					Member benefits
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/contact-center.html" target="_self">
					IEEE Contact Center
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/geographic-activities.html" target="_self">
					Connect locally
				</a>
            </li>
        
            <li>
                
				

                <a href="https://www.ieee.org/membership-catalog/index.html?N=0?utm_source=mm_link&utm_campaign=shop&utm_medium=ms&utm_term=memberships%20and%20subs%20shop" target="_self">
					Memberships and Subscriptions Catalog
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/discounts/index.html" target="_self">
					Member insurance and discounts
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/grade-elevation.html" target="_self">
					Member Grade Elevation
				</a>
            </li>
        
            <li>
                
				

                <a href="/membership/ieee-corporate-engagement.html" target="_self">
					Get your company engaged
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            IEEE membership offers access to technical innovation, cutting-edge information, networking opportunities, and exclusive member benefits. Members support IEEE's mission to advance technology for humanity and the profession, while memberships build a platform to introduce careers in technology to students around the world.<br />
        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://www.ieee.org/profile?utm_source=mm_wdw&utm_campaign=access-your-account&utm_medium=ms&utm_term=access">Access your Account</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/membership/join/dues.html?utm_source=mm_wdw&utm_campaign=join_dues&utm_medium=ms&utm_term=membership%20dues">Learn about membership dues</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/membership/women/index.html?utm_source=mm_wdw&utm_campaign=wie&utm_medium=ms&utm_term=wie">Learn about Women in Engineering (WIE)</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/membership/products/google-apps.html?utm_source=mm_wdw&utm_campaign=eleccomm&utm_medium=ms&utm_term=member-email">Access IEEE member email</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/membership/fellows/index.html?utm_source=mm_wdw&utm_campaign=fellows&utm_medium=ms&utm_term=fellows">Find information on IEEE Fellows</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://ieee-collabratec.ieee.org/?utm_source=mm_wdw&utm_campaign=my_ieee-directory&utm_medium=ms&utm_term=my_ieee-member%20directory">Access the IEEE member directory</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://www.ieee.org/membership_services/membership/join/mgm.html?utm_source=mm_wdw&utm_campaign=mgm&utm_medium=ms&utm_term=mgm%2C%20member-get-a-member">Learn about the Member-Get-a-Member program</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/membership/students/potentials.html?utm_source=mm_wdw&utm_campaign=potentials&utm_medium=ms&utm_term=potentials">Learn about IEEE Potentials magazine</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/membership/students/index.html?utm_source=mm_wdw&utm_campaign=student&utm_medium=ms&utm_term=student%20membership">Learn about Student membership</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            <a class="btn-style" href="/membership/join/index.html" target="_self">Join IEEE </a>

            
            <a class="btn-style" href="https://www.ieee.org/membership-catalog/index.html?srchProdType=Societies&searchType=prodType" target="_self">Join an IEEE Society</a>
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
        <li id="header_menu_3">
            
            <a href="/communities.html" class="nav-link">
				Communities
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_3 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="/communities/index.html" target="_self">
					Affinity groups
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/societies/index.html" target="_self">
					IEEE Societies
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/societies/about-technical-councils.html" target="_self">
					Technical Councils
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/societies/about-technical-communities.html" target="_self">
					Technical Communities
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/geographic-activities.html" target="_self">
					Geographic Activities
				</a>
            </li>
        
            <li>
                
				

                <a href="http://grouper.ieee.org/groups/index.html?utm_source=mm_link&amp;utm_campaign=swg&amp;utm_medium=com&amp;utm_term=working%20groups" target="_self">
					Working groups
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/regional-world-map.html" target="_self">
					IEEE Regions
				</a>
            </li>
        
            <li>
                
				

                <a href="http://collabratec.ieee.org/?utm_source=mm_link&utm_campaign=coll&utm_medium=ms&utm_term=collabratec" target="_self">
					IEEE Collabratec®
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/ieee-resource-centers.html" target="_self">
					IEEE Resource Centers
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/ieee-dataport.html" target="_self">
					IEEE DataPort
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            As the world's largest technical professional organization, IEEE offers a number of ways to get involved with technical and local communities. These communities are active participants in research and authorship, conferences, and important conversations about today's most relevant technical topics locally and globally.<br />
<br />
 
        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://www.ieee.org/membership-catalog/index.html?srchProdType=Societies&searchType=prodType">Join an IEEE Society</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/communities/regional-world-map.html?utm_source=wdw&utm_campaign=region_map&utm_medium=com&utm_term=regions%20map">See the IEEE Regions</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://mga.ieee.org/board-committees/operations-manual">View the MGA Operations Manual</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/volunteers/tab/home/index.html">Find information on IEEE Technical Activities</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://mga.ieee.org/resources-operations/geographic-unit/chapters">Get IEEE Chapter resources</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/communities/geographic-activities.html?utm_source=wdw&utm_campaign=geo_act&utm_medium=com&utm_term=geographic%20activities">Find IEEE Sections, Chapters, Student Branches, and other communities</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://students.ieee.org/student-branches/">Learn how to create an IEEE Student Chapter</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            

            
            
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
        <li id="header_menu_4">
            
            <a href="/conferences.html" class="nav-link">
				Conferences
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_4 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="https://conferences.ieee.org/conferences_events/conferences/search?q=*&subsequent_q=&date=all&from=&to=&region=all&country=all&pos=0&sortorder=desc&sponsor=&sponsor_type=all&state=all&field_of_interest=all&sortfield=relevance?utm_source=mm_con_search&utm_medium=hp&utm_campaign=conferences-search-all" target="_self">
					Upcoming conferences
				</a>
            </li>
        
            <li>
                
				

                <a href="http://ieeemce.org" target="_self">
					IEEE Meetings, Conferences &amp; Events (MCE)
				</a>
            </li>
        
            <li>
                
				

                <a href="/conferences/organizers/conf-app.html" target="_self">
					IEEE Conference Application
				</a>
            </li>
        
            <li>
                
				

                <a href="/conferences/organizers/conference-organizer-education.html" target="_self">
					IEEE Conference Organizer Education Program
				</a>
            </li>
        
            <li>
                
				

                <a href="/publications/authors/publishing-benefits/index.html" target="_self">
					See benefits of authoring a conference paper
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            IEEE sponsors over 2,000 annual conferences and events worldwide, curating cutting-edge content for all of the technical fields of interest within IEEE. Use the IEEE conference search to find the right conference for you to share and discuss innovation and interact with your community.<br />
<br />
<br />

        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://conferences.ieee.org/conferences_events/conferences/search?q=*&subsequent_q=&date=all&from=2025-01-01&to=2025-12-31&region=all&country=all&pos=0&sortorder=desc&sponsor=&sponsor_type=all&state=all&field_of_interest=all&sortfield=relevance&searchmode=basic&virtualConfReadOnly=N&eventformat=">Search for 2025 conferences</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://conferences.ieee.org/conferences_events/conferences/search?q=*&subsequent_q=&date=all&from=2024-01-01&to=2024-12-31&region=all&country=all&pos=0&sortorder=desc&sponsor=&sponsor_type=all&state=all&field_of_interest=all&sortfield=relevance&searchmode=basic&virtualConfReadOnly=N&eventformat=">Search for 2024 conferences</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/conferences/organizers/organizers-index.html?utm_source=mm_wdw&utm_campaign=org_resources&utm_medium=conf&utm_term=organizer%20resources">Find conference organizer resources</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/conferences/application-form.html?utm_source=mm_wdw&utm_campaign=register_conf&utm_medium=conf&utm_term=register%20a%20conference">Register a conference</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/conferences/organizers/publishing-conference-papers.html?utm_source=mm_wdw&utm_campaign=conf_pap&utm_medium=conf&utm_term=publish%20conference%20papers">Publish conference papers</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/conferences/organizers/managing-conference-finances.html?utm_source=mm_wdw&utm_campaign=conf_fin&utm_medium=conf&utm_term=conference%20finances">Manage conference finances</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://www.ieeemce.org?utm_source=mm_wdw&utm_campaign=ben_pub&utm_medium=conf&utm_term=benefits_publishing">Learn about IEEE Meetings, Conferences &amp; Events (MCE)</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            

            
            
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
        <li id="header_menu_5">
            
            <a href="/standards.html" class="nav-link">
				Standards
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_5 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="http://standards.ieee.org/" target="_self">
					Visit the IEEE SA site
				</a>
            </li>
        
            <li>
                
				

                <a href="https://standards.ieee.org/about/membership/?_ga=2.132795785.620929615.1638192524-1590554406.1633466825" target="_self">
					Become a member of the IEEE SA
				</a>
            </li>
        
            <li>
                
				

                <a href="https://standards.ieee.org/products-services/regauth/?_ga=2.22833596.620929615.1638192524-1590554406.1633466825" target="_self">
					Find information on the IEEE Registration Authority
				</a>
            </li>
        
            <li>
                
				

                <a href="http://regauth.standards.ieee.org/?_ga=2.195330091.620929615.1638192524-1590554406.1633466825" target="_self">
					Obtain a MAC, OUI, or Ethernet address
				</a>
            </li>
        
            <li>
                
				

                <a href="https://standards.ieee.org/ieee/802.11/4523/?_ga=2.129204235.620929615.1638192524-1590554406.1633466825" target="_self">
					Access the IEEE 802.11™ WLAN standard
				</a>
            </li>
        
            <li>
                
				

                <a href="http://www.techstreet.com/ieee?utm_source=mm_link&utm_campaign=techstreet&utm_medium=std&utm_term=buy%20standards%2C%20techstreet" target="_self">
					Purchase standards
				</a>
            </li>
        
            <li>
                
				

                <a href="https://ieeexplore.ieee.org/browse/standards/get-program/page?utm_source=lp_wdw&utm_campaign=free_std&utm_medium=std&utm_term=free%20standards&_ga=2.199388329.620929615.1638192524-1590554406.1633466825" target="_self">
					Get free select IEEE standards
				</a>
            </li>
        
            <li>
                
				

                <a href="http://innovate.ieee.org/ieee-standards-online-collections/?_ga=2.198405288.620929615.1638192524-1590554406.1633466825" target="_self">
					Purchase standards subscriptions on IEEE Xplore®
				</a>
            </li>
        
            <li>
                
				

                <a href="https://standards.ieee.org/participate/?_ga=2.198354984.620929615.1638192524-1590554406.1633466825" target="_self">
					Get involved with standards development
				</a>
            </li>
        
            <li>
                
				

                <a href="http://standards.ieee.org/develop/index.html?_ga=2.202588566.620929615.1638192524-1590554406.1633466825" target="_self">
					Find a working group
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            IEEE nurtures, develops, and advances the building of global technologies. As a leading developer of industry standards in a broad range of technologies, IEEE SA drives the functionality, capabilities, safety, and interoperability of products and services, transforming how people live, work, and communicate. IEEE standards provide the bricks and mortar for a globally level playing field for innovation; protect public safety, health, and wellbeing; and contribute to a more sustainable future.
        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://ieeexplore.ieee.org/browse/standards/get-program/page/series?id=68&utm_source=lp_wdw&utm_campaign=80211&utm_medium=std&utm_term=80211m=std&amp;utm_term=80211">Find information on IEEE 802.11™</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://standards.ieee.org/products-programs/nesc/?utm_source=mm_wdw&utm_campaign=nesc&utm_medium=std&utm_term=nesc">Access the National Electrical Safety Code® (NESC®)</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://standards.ieee.org/products-programs/regauth/?utm_source=mm_wdw&utm_campaign=regauth&utm_medium=std&utm_term=regauth">Find MAC, OUI, and Ethernet addresses from Registration Authority (regauth)</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://ieeexplore.ieee.org/browse/standards/get-program/page/">Get free IEEE standards</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://standards.ieee.org/about/index.html?utm_source=mm_wdw&utm_campaign=std_info&utm_medium=std&utm_term=standards%20association%20info">Learn more about the IEEE Standards Association</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://standards.ieee.org/search/?q=Software%20and%20Systems%20Engineering&topic=%7CSoftware%20and%20Systems%20Engineering&type=%7CStandard&utm_source=lp_wdw&utm_campaign=soft_eng&utm_medium=std&utm_term=software%20engineering">View Software and Systems Engineering Standards</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            

            
            
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
        <li id="header_menu_6">
            
            <a href="/publications.html" class="nav-link">
				Publications
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_6 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="http://ieeexplore.ieee.org/Xplore/guesthome.jsp?utm_source=mm_link&utm_campaign=vix&utm_medium=pubs&utm_term=Xplore%20guest" target="_self">
					IEEE Xplore® Digital Library
				</a>
            </li>
        
            <li>
                
				

                <a href="http://innovate.ieee.org/?utm_source=mm_link&utm_campaign=lp&utm_medium=pubs&utm_term=innovate%20subscription%20options" target="_self">
					Subscription options
				</a>
            </li>
        
            <li>
                
				

                <a href="http://spectrum.ieee.org/?utm_source=mm_link&utm_campaign=sp&utm_medium=pubs&utm_term=spectrum%20home" target="_self">
					IEEE Spectrum
				</a>
            </li>
        
            <li>
                
				

                <a href="http://theinstitute.ieee.org/?utm_source=mm_link&utm_campaign=inst&utm_medium=pubs&utm_term=institute%20home" target="_self">
					The Institute
				</a>
            </li>
        
            <li>
                
				

                <a href="http://proceedingsoftheieee.ieee.org" target="_self">
					Proceedings of the IEEE
				</a>
            </li>
        
            <li>
                
				

                <a href="https://open.ieee.org/" target="_self">
					IEEE Open
				</a>
            </li>
        
            <li>
                
				

                <a href="http://ieeeaccess.ieee.org" target="_self">
					IEEE Access®
				</a>
            </li>
        
            <li>
                
				

                <a href="http://ieeeauthorcenter.ieee.org/" target="_self">
					Author resources
				</a>
            </li>
        
            <li>
                
				

                <a href="http://collabratec.ieee.org/?utm_source=mm_link&utm_campaign=coll&utm_medium=ms&utm_term=collabratec" target="_self">
					IEEE Collabratec®
				</a>
            </li>
        
            <li>
                
				

                <a href="/publications/books/index.html" target="_self">
					IEEE Press
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            IEEE provides a wide range of quality publications that make the exchange of technical knowledge and information possible among technology professionals. This essential content, categorized below, is delivered through the IEEE <i>Xplore</i><sup>®</sup> Digital Library.<br />
<br />
<br />

        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/publications/subscriptions/products/mdl/free-trial.html?utm_source=mm_wdw&utm_campaign=xtrial&utm_medium=pubs&utm_term=Xplore%20trial">Get an IEEE Xplore Digital Library trial for IEEE members</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/publications/subscriptions/journal-citations.html?utm_source=mm_wdw&utm_campaign=xtrial&utm_medium=pubs&utm_term=impact-factor">Review impact factors of IEEE journals</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/publications/services/thesaurus-access-page.html?utm_source=mm_wdw&utm_campaign=xtrial&utm_medium=pubs&utm_term=thesaurus-taxonomy">Request access to the IEEE Thesaurus and Taxonomy</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/publications/rights/copyright-main.html">Access the IEEE copyright form</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://www.ieee.org/publications_standards/publications/authors/author_templates.html?utm_source=mm_wdw&utm_campaign=templates&utm_medium=pubs&utm_term=author%20templates">Find article templates in Word and LaTeX formats</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://www.ieee.org/publications_standards/publications/authors/author_education?utm_source=mm_wdw&utm_campaign=author_ed&utm_medium=pubs&utm_term=author%20education">Get author education resources</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://ieeexplore.ieee.org/?utm_source=mm_wdw&utm_campaign=xplore&utm_medium=pubs&utm_term=xplore">Visit the IEEE Xplore digital library</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://ieeeauthorcenter.ieee.org/?utm_source=mm_wdw&utm_campaign=author_tools&utm_medium=pubs&utm_term=author%2520digital%2520tools">Find Author Digital Tools for IEEE paper submission</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/publications/rights/plagiarism/index.html?utm_source=mm_wdw&utm_campaign=plagiarism&utm_medium=pubs&utm_term=plagiarism%20policy">Review the IEEE plagiarism policy</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://ieeeauthorcenter.ieee.org/?utm_source=wdw&utm_medium=lp-pubs&utm_campaign=stage-of-publishing">Get information about all stages of publishing with IEEE</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            

            
            
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
        <li id="header_menu_7">
            
            <a href="/education.html" class="nav-link">
				Education
             </a>
            <a class="accordian-iocns accordianClick"></a>
            
                <div class="dropdown-wrap header_menu_7 col-md-10 col-lg-10 col-xs-12">
                    <div class="panel-collapse">
                        
    <div class="dropdown-left pull-left col-md-4 col-lg-4 col-xs-12">
        <ul class="arrow-link">
            <li>
                
				

                <a href="/education/iln.html" target="_self">
					IEEE Learning Network (ILN)
				</a>
            </li>
        
            <li>
                
				

                <a href="/education/credentialing/index.html" target="_self">
					IEEE Credentialing Program
				</a>
            </li>
        
            <li>
                
				

                <a href="/education/preuniversity.html" target="_self">
					Pre-university
				</a>
            </li>
        
            <li>
                
				

                <a href="/education/hkn-index.html" target="_self">
					IEEE-Eta Kappa Nu
				</a>
            </li>
        
            <li>
                
				

                <a href="/education/accreditation.html" target="_self">
					Accreditation
				</a>
            </li>
        
            <li>
                
				

                <a href="/communities/ieee-resource-centers.html?utm_source=mm_link&utm_campaign=resourcecenters&utm_medium=ms&utm_term=resourcecenters" target="_self">
					IEEE Resource Centers
				</a>
            </li>
        
            <li>
                
				

                <a href="/education/continuing-education-africa.html" target="_self">
					IEEE Continu►ED eLearning Special Offer for Africa
				</a>
            </li>
        </ul>
    </div>
    <div class="dropdown-right pull-left col-md-8 col-lg-8 col-xs-12">
        <div class="rte-description font-e hidden-xs hidden-sm">
            IEEE is a leader in engineering and technology education, providing resources for pre-university, university, and continuing professional education. IEEE offers innovative STEM and university education and recognition programs for students and their teachers, facilitates the accreditation of engineering programs at the university level, and offers ongoing continuing professional education for practitioners and engineering faculty through platforms such as the IEEE Learning Network (ILN). Explore education programs and offerings from IEEE below.
        </div>
        <div class="dropdown-title font-e hidden-xs hidden-sm">
            What do you want to do?
        </div>

		
        <div class="dropdown-selector">
            <div class="selector">
                <a aria-expanded="true" aria-haspopup="true" class="dropdown_title dropdown-toggle" data-toggle="dropdown" href="#" role="button">Select an option</a>
                <ul class="dropdown-menu">
					<li>
                        <i class="fa fa-check selected hidden-xs hidden-sm"></i>
                        <a href="#">Select an option</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://iln.ieee.org/public/TrainingCatalog.aspx?_ga=2.229099423.288629489.1603724526-973538082.1603388995?utm_source=mm_wdw&utm_campaign=certificates&utm_medium=ec&utm_term=iln">Access continuing education courses on the IEEE Learning Network</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://tryengineering.org/?utm_source=mm_wdw&utm_campaign=tryeng&utm_medium=ec&utm_term=Try%20Engineering">Find STEM education resources on TryEngineering.org</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://tryengineeringinstitute.ieee.org/?_ga=2.242008833.288629489.1603724526-973538082.1603388995?utm_source=mm_wdw&utm_campaign=certificates&utm_medium=ec&utm_term=summer">Learn about the TryEngineering Summer Institute for high school students</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/education/university-programs.html?utm_source=mm_wdw&utm_campaign=univ_prog&utm_medium=ec&utm_term=university%20programs">Explore university education program resources</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://tryengineering.org/?utm_source=mm_wdw&utm_campaign=pre_univ&utm_medium=ec&utm_term=pre-university%20program">Access pre-university STEM education resources</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/education/credentialing/index.html?utm_source=mm_wdw&utm_campaign=certificates&utm_medium=ec&utm_term=e-learning">Learn about IEEE certificates and how to offer them</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="https://hkn.ieee.org?utm_source=mm_wdw&utm_campaign=hkn&utm_medium=ec&utm_term=hkn">Find information about the IEEE-Eta Kappa Nu honor society</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/ieee-projects.html?utm_source=mm_wdw&utm_campaign=projects&utm_medium=ec&utm_term=projects">Learn about resources for final-year engineering projects</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="/about/employers-job-seekers.html?utm_source=mm_wdw&utm_campaign=career_res&utm_medium=ec&utm_term=career%20resources">Access career resources</a>
                    </li>
                    
                	
                    <li>
                        <i class="fa fa-check hidden-xs hidden-sm"></i>
                        <a href="http://ieeeauthorcenter.ieee.org/?utm_source=wdw&utm_medium=lp-education&utm_campaign=stage-of-publishing">Get information about all stages of publishing with IEEE</a>
                    </li>
                    
                </ul>
            </div>
            <a class="btn-style hidden-xs hidden-sm btn-go" href="#">Go</a>
        </div>
        <div class="btns-ieee hidden-xs hidden-sm">
            
            

            
            
        </div>
    </div>

                    </div>
                </div>
            
        </li>
    
</ul>

<!-- #site navigation-content end -->

                <div class="pull-right hidden-xs hidden-sm">
              		










<a class="btn-blue" href="/membership/join/index.html?WT.mc_id=hc_join" target="_self">JOIN IEEE</a>
<!-- #cta-button-content end -->

          		</div>
          		<div class="btns-tab-mob hidden-md hidden-md hidden-lg">
                    
                    
                    
					
                    
                </div>
   			</div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<!-- End Page header Block component -->
</div>

    

</div>

    


</header>
<!-- #header ends -->

	    

<!-- Page Container
============================================= -->
<div id="main-content" role="main">
    <div class="container">
        <div>
<!-- Service Alert Banner content
============================================= -->







    


<!-- service-alert-banner-end --></div>
        <div class="row hidden-sm hidden-xs">
            <div class="col-sm-12">
                




<!-- Start BreadCrumb component
============================================= -->

<div class="bread-crumb font-e separator-arrow text-left">

    <ul>
        
        <li>
            
                <a href="/">
                        Home
                </a>
            
            
        </li>
    
        
        <li>
            
                <a href="/communities.html">
                        Communities
                </a>
            
            
        </li>
    </ul>
    
</div>
<!-- End Breadcrumb component -->

            </div>
        </div>
        <div class="row">
            <div class="col-sm-9 col-xs-12">
                




    
    
    <div class="introduction-container"><!-- Sightly global objects declaration
============================================= -->


<!-- #sightly-global-objects-declaration end -->

<!-- Placeholder Content
============================================= -->
<!-- #placeholder-content end -->

<!-- Vertical Navigation content started
================================================= -->

<!-- #vertical-navigation-content end -->

<div class="vertical-section">
    <div class="col-sm-12 left-right-space-none-sm">
        
            <div class="sub-nav-title">
                

<!--Title component content
============================================= -->


<div class="pagetitle font-c">
	<div class="page-heading">
		<h1>IEEE Regional World Map</h1>
		
	</div>
</div>

<!-- Enable subscribe overlay modal -->

<!-- End Title component -->

            </div>
        
        
        
            <div class="sub-nav-section-head left-space-none">
                <div class="vertical-subhead">
                    Related information
                </div>
            </div>
        
    </div>
    <div class="col-sm-12 left-right-space-none sect-main clearfix" style="position:relative;">
        
            <div class="sub-nav-section">
                <div class="vertical-subhead-content">
                    <!-- Sightly global objects declaration
============================================= -->


<!-- #sightly-global-objects-declaration end -->

<!-- Placeholder Content
============================================= -->

<!-- #placeholder-content end -->

<!-- Vertical Navigation content started
================================================= -->
<div class="vertical-navigation">
    
    <ul class="link-list">
        <li>
            
            
            <a href="/communities/geographic-activities.html" target="_self">Geographic Activities </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/communities/geographic-activities/awards.html" target="_self">
              MGA Awards Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/communities/geographic-activities/regional-list-region-6.html" target="_self">
              Region 6 (Western US)
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a class="active" href="/communities/regional-world-map.html" target="_self">IEEE Regions </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/communities/life-members.html" target="_self">Life Membership </a>
            
            
        </li>
    
        <li>
            
            
            <a href="http://collabratec.ieee.org/?utm_source=mm_link&utm_campaign=coll&utm_medium=ms&utm_term=collabratec" target="_self">IEEE Collabratec® </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/communities/forms_petitions.html" target="_self">IEEE - IEEE Geographic Unit Formation Policies and Petitions </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/communities/ieee-resource-centers.html" target="_self">IEEE Resource Centers </a>
            
            
        </li>
    </ul>
</div>
<!-- #vertical-navigation-content end -->

                </div>
            </div>
        
        
        <div class="rte-section">
            




    
    
    <div class="rte text parbase">

<link rel="stylesheet" href="/etc.clientlibs/wcm/foundation/clientlibs/accessibility.min.6fe5d4427361a4c0ca5a75457e3e4256.css" type="text/css">


    Learn more about how to get involved in your Region. View the links below to go to your IEEE Region's home page or learn about IEEE geographic unit (Section, Chapter, and affinity group) activities in your Region.
</div>



        </div>
        
    </div>
</div>
<div class="clearfix"></div></div>


    
    
    <div class="dropdown-selector">









<!--Dropdown Selector component content
============================================= -->

<div class="clearfix"></div>
<!-- #Dropdown-Selector-component end -->
</div>


    
    
    <div class="top-of-page">

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin hidden">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->
<div style="margin-bottom: ;">
</div>
<!-- #top-of-page-content end -->
</div>


    
    
    <div class="html-prototype">





<!-- HTML ProtoType component content -->
 <style type="text/css">
  .img-region{
  max-width: 100%;
  height: auto;
  }

  .img-left{
  width: 55px;
  margin: 0 10px 12px 0;
  }

  .table-container{
      width: 100%;
  }
  
  
  
    .rte table tbody tr:first-child{
      border: 0px;
    }
  
    .rte table tbody tr td:first-child, .rte table tbody tr th:first-child{
      border: 0px;
    }
  
    .rte table tbody tr td, .rte table tbody tr th{
      border: 0px;
      border-bottom: 0px !important;
    }
  
  .tdFull{
  background: #fff !important
  }
  
  .tdFull small{
  font-size: 77% !important;
  }
  
  #heightFix{
  min-height: 0px !important
  }
 
  @media screen and (max-width: 1199px) and (min-width: 1025px) {
    .table-container{
        width: 90% !important; 
       }
  }

  @media only screen and (max-width: 1024px) {

  .img-left{
  margin: 0 20px 12px 0;
  }
    #heightFix{
  margin-top: 5px;
  }
  
  .tdFull{
   width: 100% !important;
  height: auto !important;
  float: left !important;
  padding: 0px !important;
  }
  
  }
  </style> 
<!-- html-prototype-component-content -->
</div>


    
    
    <div class="responsive-image">












<!-- Responsive Image Content  
============================================= -->
<div class="responsive-img">
    

    
        <a target="_self" style="width:100%">
          <img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/ieee-regional-world-map-june-2022.png" class="img-responsive" alt="Map of the world in colors corresponding to each IEEE Region."/>    
        </a>
    
    
</div>
<!-- End Response Image Content --></div>


    
    
    <div class="rte text parbase">



    <p> </p>
<p class="arrow-link"><a href="http://www.ieeeusa.org/">IEEE-USA</a> (Regions 1-6)</p>
<table class="table-container">
<tbody style="display: inline-table;"><tr><td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-1.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-1.png" class="img-left" alt="Region 1 (Northeastern US)"/></a><a href="/communities/geographic-activities/regional-list-region-1.html"><b>Region 1</b></a><br />
<small>(Northeastern US)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-2.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-2.png" class="img-left" alt="Region 2 (Eastern US)"/></a> <a href="/communities/geographic-activities/regional-list-region-2.html"><b>Region 2</b></a><br />
<small>(Eastern US)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-3.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-3.png" class="img-left" alt="Region 3 (Southern US)"/></a> <a href="/communities/geographic-activities/regional-list-region-3.html"><b>Region 3</b></a><br />
<small>(Southern US)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-4.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-4.png" class="img-left" alt="Region 4 (Central US)"/></a> <a href="/communities/geographic-activities/regional-list-region-4.html"><b>Region 4</b></a><br />
<small>(Central US)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-5.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-5.png" class="img-left" alt="Region 5 (Southwestern US)"/></a> <a href="/communities/geographic-activities/regional-list-region-5.html"><b>Region 5</b></a><br />
<small>(Southwestern US)</small></td>
</tr><tr><td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-6.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-6.png" class="img-left" alt="Region 6 (Western US)"/></a> <a href="/communities/geographic-activities/regional-list-region-6.html"><b>Region 6</b></a><br />
<small>(Western US)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-7.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-7.png" class="img-left" alt="Region 7 (Canada)"/></a> <a href="/communities/geographic-activities/regional-list-region-7.html"><b>Region 7</b></a><br />
<small>(Canada)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-8.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-8.png" class="img-left" alt="Region 8 (Africa, Europe, Middle East)"/></a> <a href="/communities/geographic-activities/regional-list-region-8.html"><b>Region 8</b></a><br />
<small>(Africa, Europe, Middle East)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-9.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-9.png" class="img-left" alt="Region 9 (Latin America)"/></a> <a href="/communities/geographic-activities/regional-list-region-9.html"><b>Region 9</b></a><br />
<small>(Latin America)</small></td>
<td class="tdFull"><a href="/communities/geographic-activities/regional-list-region-10.html"><img src="/content/dam/ieee-org/ieee/web/org/geoactivities/ieee-usa/may-2022/region-10.png" class="img-left" alt="Region 10 (Asia and Pacific)"/></a> <a href="/communities/geographic-activities/regional-list-region-10.html"><b>Region 10</b></a><br />
<small>(Asia and Pacific)</small></td>
</tr></tbody></table>

</div>



            </div>
            <div class="col-sm-3 col-xs-12">
                <div class="right-column-section">
                    




    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="right_column_module right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(225,114,34,1);">
        <div class="column-module-header font-c">The IEEE App</div>
        




    
    
    <div class="rte text parbase">



    <p><img src="/content/dam/ieee-org/ieee/web/org/landing-page-carousel/ieee-app.png" alt="A cell phone on a blue background with connected faces on it.  The text reads 'Tap. Connect. Network. Share. with the IEEE App.'" width="180" height="150"/></p>
<p><span style="background-color: transparent;">Let's stay connected.</span><br />
</p>
<p><a class="arrow-link" href="https://app.ieee.org/?utm_source=lp-about&amp;utm_medium=right-module&amp;utm_campaign=ieee-app">Download today</a></p>
<p> </p>

</div>


    
    
    <div class="responsive-image">












<!-- Responsive Image Content  
============================================= -->

<!-- End Response Image Content --></div>



    </div>

<!-- #section-header-content end -->
</div>
</div>
</div>


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="DF_IEEE_MIG_GRT_69492 right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(178,178,178,1);">
        <div class="column-module-header font-c">MGA Links</div>
        




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span><p>Visit the MGA home page</p>

        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/images/files/CurrentMGA_Operations_Manual_2023_June_29_2023_CG_v1.1.pdf" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span><p>MGA Operations Manual (PDF, 1 MB)</p>

        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/board-committees/available-mga-positions" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Available MGA Board/Committee Positions
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/resources-operations/sections-congress" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Sections Congress
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/board-committees/region-meetings-calendar#!region-meetings" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Region Meetings Calendar
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/contact.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Contact Center
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/corporate/governance/index.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Governing Documents
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="mailto:mga@ieee.org" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span><p>Email MGA staff</p>

        </a>
    </li>

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->
</div>



    </div>

<!-- #section-header-content end -->
</div>
</div>
</div>



                </div>
            </div>
        </div>
    </div>
</div>
<!-- #page-container ends -->
	    

<!-- Footer
============================================= -->
<footer id="page-footer">
    




    
        
        
        <div class="newpar new section">

</div>

    
        
        
        <div class="par iparys_inherited">

    
    
    
    
        
        
        <div class="footer-container">

<!-- Footer Content
============================================= -->
<div class="footer top-footer-wrapper">
    <div class="top-footer-container container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-3">
                

 



<!-- Footer Column Section Content
============================================= -->

    <div class="foot-top-title font-e"><a>About IEEE </a></div>
    <div class="accordion">
        <div class="inside-space font-f">
            <div class="rte-text">



    IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.<br />

</div>
            
            





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=learn-more" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Learn more about IEEE
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/vision-mission.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=mission-vision" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Mission &amp; Vision
        </a>
    </li>

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->

        </div>
    </div>

<!-- #footer-column-section-content end -->

            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
                

 



<!-- Footer Column Section Content
============================================= -->

    <div class="foot-top-title font-e"><a>Locations </a></div>
    <div class="accordion">
        <div class="inside-space font-f">
            <div class="rte-text">



    IEEE has a global presence with seven offices internationally.
</div>
            
            





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/contact.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=office-locations" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE office locations
        </a>
    </li>

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->

        </div>
    </div>

<!-- #footer-column-section-content end -->

            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
                

 



<!-- Footer Column Section Content
============================================= -->

    <div class="foot-top-title font-e"><a>Membership </a></div>
    <div class="accordion">
        <div class="inside-space font-f">
            
            
            





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/membership/join/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=join" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Join
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/membership/renew.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=renew" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Renew
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/membership/benefits/index.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Benefits
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://ieee-collabratec.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=collabratec-membership-list" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Collabratec
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="mailto:security@ieee.org" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Report cybersecurity concerns to security@ieee.org
        </a>
    </li>

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->

        </div>
    </div>

<!-- #footer-column-section-content end -->

            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
                

 



<!-- Footer Column Section Content
============================================= -->

    <div class="foot-top-title font-e"><a>Get involved </a></div>
    <div class="accordion">
        <div class="inside-space font-f">
            
            
            





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/conferences/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=conferences" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Conferences
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/communities/geographic-activities.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=local-activities" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Local activities
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/publications/authors/publishing-benefits/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=publishing" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Publishing
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/communities/societies/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=societies" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Societies
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/communities/societies/about-technical-councils.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=councils" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Councils
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="http://standards.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=standards&_ga=2.138828091.983862010.1583757310-1875752245.1558373461" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Standards
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="http://careers.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=technical-careers" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Technical careers
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/volunteers/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=volunteer" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Volunteer
        </a>
    </li>

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->

        </div>
    </div>

<!-- #footer-column-section-content end -->

            </div>
            <div class="col-sm-12 col-md-13 col-lg-3 border-bottom">
                

 



<!-- Footer Column Section Content
============================================= -->

    <div class="foot-top-title font-e"><a>Connect with IEEE </a></div>
    <div class="accordion">
        <div class="inside-space font-f">
            
            










<a class="btn-transparent" href="/about/contact.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=contact-support-button" target="_self">Contact &amp; Support</a>
<!-- #cta-button-content end -->

            





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="http://ieee-collabratec.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=collabratec" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Collabratec
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://ieee.taleo.net/careersection/2/jobsearch.ftl?utm_source=mf&utm_campaign=taleo-jobs&utm_medium=footer&utm_term=taleo-jobs%20at%20ieee" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Careers at IEEE
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/news/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=newsroom" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Newsroom
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/news/media-kit/media-kit-index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=media-kit" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Media Kit
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://iln.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=iln&_ga=2.163606711.983862010.1583757310-1875752245.1558373461" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Learning Network
        </a>
    </li>

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->

        </div>
    </div>

<!-- #footer-column-section-content end -->

            </div>
         </div>
         <div class="row">
			<div class="footer-space"></div>
			<div class="col-sm-12 col-md-12 footer-add">
                












<!-- Responsive Image Content  
============================================= -->
<div class="responsive-img">
    

    
        <a href="https://climate-change.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=climate-change" target="_blank" style="width:100%">
          <img src="/content/dam/ieee-org/ieee/web/org/globals/climate-change-footer-728x90.jpg" class="img-responsive" alt="Visit the IEEE Climate Change website" title="Visit the IEEE Climate Change website"/>    
        </a>
    
    
</div>
<!-- End Response Image Content -->
            </div>
         </div>
         <div class="row">
            <div class="footer-space"></div>
            <div class="col-sm-12 col-md-12">
                









<!-- Social Media Container Content
============================================= -->

    
    <div class="socialmedia">
        <ul>
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->


    <a class="collabratec-icon" aria-label="Collabratec" alt="Collabratec" href="https://ieee-collabratec.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-collabratec" target="_self"></a>

<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://www.facebook.com/pages/IEEE/176104589110851?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-facebook" target="_self">
        <i class="fa fa-facebook-f"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://twitter.com/IEEEorg?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-twitter" target="_self">
        <i class="fa fa-twitter"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://www.linkedin.com/company/ieee?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-linkedin" target="_self">
        <i class="fa fa-linkedin"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        
            <li>
                









<!-- ============================================= Social Media Content   ============================================= -->

    <a href="https://www.instagram.com/ieeeorg/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-youtube" aria-label="Instagram" alt="Instagram" target="_self">
        <i class="fa fa-instagram"></i>
    </a>


<!-- #social-media-content end -->
            </li>
        </ul>
    </div>

<!--#Social-media-container content end-->
            </div>
        </div>
        <div class="top-of-page-link hidden-xs text-right">
		    <a class="arrow-color-white" href="#top">
		        <img class="svg footer-top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
		        <span class="title-label">top of page</span>
		    </a>
		</div>
    </div>
</div>
<!-- #footer-content end -->
</div>

    
        
        
        <div class="global-footer-container">

<!-- Global Footer Content
============================================= -->
<div class="global-footer">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 footer-links font-f">
                







        



<!-- Utility Links Content
============================================= -->

    <ul id="TKSQSVHYQGLWFXVYGL" class=" utilitylinks separator-pipe">
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <a href="/">Home</a>
</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <a href="/sitemap.html">Sitemap</a>
</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <a href="/about/contact.html">Contact &amp; Support</a>
</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <a href="/accessibility-statement.html">Accessibility</a>
</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <a href="/about/corporate/governance/p9-26.html">Nondiscrimination Policy</a>
</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <p><a href="https://secure.ethicspoint.com/domain/media/en/gui/20410/index.html">IEEE Ethics Reporting</a></p>

</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <p><a href="/security-privacy.html">IEEE Privacy Policy</a></p>

</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <p><a href="/about/help/site-terms-conditions.html">Terms</a></p>

</div>
            
        </li>
    
        <li class="utilitylinks-default-color" style="color:">
            
                <div style="min-width:30px">



    <p><a href="/about/feedback-ieee-site.html">Feedback</a></p>

</div>
            
        </li>
    </ul>

<!-- #utility-links-content end -->
            </div>
            <div class="col-xs-12 legal-copy font-f">
                <div class="cq-dd-paragraph"><div class="rte text parbase">



    © Copyright <span id="copyrightyear"></span> IEEE – All rights reserved. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
</div>
</div>

            </div>
        </div>
    </div>
</div>
<!-- #global-footer-content end --></div>

    

</div>

    


</footer>
<!-- #footer ends -->

	</div>
	
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>


    
<script type="text/javascript" src="/etc/clientlibs/axis41-core/base.min.0fff28e514bed6def3d25fff59d5fd46.js"></script>




    
<script type="text/javascript" src="/etc/clientlibs/axis41-core/apps_components.min.932a8211ac095e24521718fd05aa0170.js"></script>



	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>


    
<script type="text/javascript" src="/etc/designs/ieee-core/clientlibs/base.min.fec41c381097e2664d657eb15bf8f448.js"></script>




    
<script type="text/javascript" src="/etc/designs/ieee-core/clientlibs/apps_components.min.d41d8cd98f00b204e9800998ecf8427e.js"></script>




<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>


    
<script type="text/javascript" src="/etc/designs/ieee-org/clientlibs/base.min.5b83ac1ebc8a8f3ca2807882eaf69ad8.js"></script>




    
<script type="text/javascript" src="/etc/designs/ieee-org/clientlibs/apps_components.min.f4c85af47ead13d1cd17c648fb04a0b9.js"></script>





	
	

</body>
</body>
</html>
