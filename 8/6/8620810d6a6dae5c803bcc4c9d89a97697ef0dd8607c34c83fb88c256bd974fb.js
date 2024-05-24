/**
 *  PDFObject v2.1.1
 *  https://github.com/t (c) 2008-2018 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.PDFObject=t()}(this,function(){"use strict";if("undefined"==typeof window||"undefined"==typeof navigator)return!1;var e=window.navigator.userAgent,t=void 0!==navigator.mimeTypes&&void 0!==navigator.mimeTypes["application/pdf"],v=void 0!==window.Promise,o=-1!==e.indexOf("irefox")&&-1===e.indexOf("Mobile")&&-1===e.indexOf("Tablet")&&18<parseInt(e.split("rv:")[1].split(".")[0],10),b=/iphone|ipad|ipod/i.test(e.toLowerCase()),n=function(e){var t;try{t=new ActiveXObject(e)}catch(e){t=null}return t},i=function(){return!!(window.ActiveXObject||"ActiveXObject"in window)},h=!b&&navigator.vendor&&-1!==navigator.vendor.indexOf("Apple")&&navigator.userAgent&&-1!==navigator.userAgent.indexOf("Safari"),r=function(){return!(!n("AcroPDF.PDF")&&!n("PDF.PdfCtrl"))},y=!b&&(o||t||i()&&r()),w=function(e){var t,o="";if(e){for(t in e)e.hasOwnProperty(t)&&(o+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");o=o&&(o="#"+o).slice(0,o.length-1)}return o},d=function(e){"undefined"!=typeof console&&console.log&&console.log("[PDFObject] "+e)},P=function(e){return d(e),!1},D=function(e){var t=document.body;return"string"==typeof e?t=document.querySelector(e):"undefined"!=typeof jQuery&&e instanceof jQuery&&e.length?t=e.get(0):void 0!==e.nodeType&&1===e.nodeType&&(t=e),t},s=function(e){var t="pdfobject-container",o=e.className.split(/\s+/);-1===o.indexOf(t)&&(o.push(t),e.className=o.join(" "))},T=function(e,t,o,n,i){var r=n+"?file="+encodeURIComponent(t)+o,d="<div style='"+(b?"-webkit-overflow-scrolling: touch; overflow-y: scroll; ":"overflow: hidden; ")+"position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  "+i+" src='"+r+"' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";return s(e),e.style.position="relative",e.style.overflow="auto",e.innerHTML=d,e.getElementsByTagName("iframe")[0]},j=function(e,t,o,n,i,r,d){var a="",a=t&&t!==document.body?"width: "+i+"; height: "+r+";":"position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";return s(e),e.innerHTML="<embed "+d+" class='pdfobject' src='"+o+n+"' type='application/pdf' style='overflow: auto; "+a+"'/>",e.getElementsByTagName("embed")[0]},F=function(e,t,o,n,i,r,d){var a="",a=t&&t!==document.body?"width: "+i+"; height: "+r+";":"position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";return e.className+=" pdfobject-container",e.innerHTML="<iframe "+d+" class='pdfobject' src='"+o+n+"' type='application/pdf' style='border: none; "+a+"'/>",e.getElementsByTagName("iframe")[0]};return{embed:function(e,t,o){if("string"!=typeof e)return P("URL is not valid");t=void 0!==t&&t;var n,i=(o=void 0!==o?o:{}).id&&"string"==typeof o.id?"id='"+o.id+"'":"",r=!!o.page&&o.page,d=o.pdfOpenParams?o.pdfOpenParams:{},a=void 0===o.fallbackLink||o.fallbackLink,s=o.width?o.width:"100%",f=o.height?o.height:"100%",p="boolean"!=typeof o.assumptionMode||o.assumptionMode,l="boolean"==typeof o.forcePDFJS&&o.forcePDFJS,c="boolean"==typeof o.supportRedirect&&o.supportRedirect,u=!!o.PDFJS_URL&&o.PDFJS_URL,m=D(t),g="";return m?(r&&(d.page=r),n=w(d),l&&u?T(m,e,n,u,i):y||p&&v&&!b?(c&&h?F:j)(m,t,e,n,s,f,i):u?T(m,e,n,u,i):(a&&(g="string"==typeof a?a:"<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>",m.innerHTML=g.replace(/\[url\]/g,e)),P("This browser does not support embedded PDFs"))):P("Target element cannot be determined")},pdfobjectversion:"2.1.1",supportsPDFs:y}});" src="/etc/clientlibs/axis41-core/thirdparty/jquery_validator.min.449c74f61ca55bbec5ed39305eda1661.js"></script>




    
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


<title>IEEE - Volunteer Resources</title>

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
            
                <a href="/about.html">
                        About
                </a>
            
            
        </li>
    
        
        <li>
            
                <a href="/about/volunteers.html">
                        Volunteers
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
		<h1>Volunteer Resources</h1>
		
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
    <div class="vertical-nav-header">
        Boards and Organizations
    </div>
    <ul class="link-list">
        <li>
            
            
            <a href="/about/corporate.html" target="_self">Corporate </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/about/corporate/election.html" target="_self">
              Election
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/constitutional-amendments.html" target="_self">
              Constitutional Amendments
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/index.html" target="_self">
              IEEE Annual Election Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/candidates.html" target="_self">
              Annual Election Candidates
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/candidate-nominations.html" target="_self">
              Candidate Nominations
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/petition.html" target="_self">
              Petition Process
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/previous-elections.html" target="_self">
              Previous Elections
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/eligibility.html" target="_self">
              Voter Eligibility
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/assembly/index.html" target="_self">
              IEEE Assembly Election
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/election-campaign-resources.html" target="_self">
              Election Campaign Resources
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/annual-election-faq.html" target="_self">
              Annual Election FAQ
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/election/candidate-campaign-forums.html" target="_self">
              Candidate Campaign Forums
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/governance.html" target="_self">
              Governance
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/governance/index.html" target="_self">
              IEEE Governing Documents
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/governance/review.html" target="_self">
              Board 30-Day Review/Approval Process
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/initiatives.html" target="_self">
              Initiatives
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/initiatives/index.html" target="_self">
              IEEE New Initiative Program
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/initiatives/initiatives-committee.html" target="_self">
              IEEE New Initiatives Committee
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/initiatives/initiatives-faqs.html" target="_self">
              IEEE New Initiative Program Frequently Asked Questions
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/initiatives/forms.html" target="_self">
              IEEE New Initiative Program
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility.html" target="_self">
              Public Visibility
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility/index.html" target="_self">
              Public Visibility Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility/bylaw-and-charter-documents.html" target="_self">
              Public Visibility Bylaw and Charter Documents
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility/technical-expert-form-index.html" target="_self">
              Technical Expert Form
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility/technical-expert-resources-index.html" target="_self">
              Technical Expert Resources
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility/report-archive-ieee-account-required.html" target="_self">
              Report Archive (IEEE Account Required)
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/public-visibility/contact.html" target="_self">
              Committee Members and Staff Contacts
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations.html" target="_self">
              Nominations
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations/index.html" target="_self">
              Nominations and Appointments Committee Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations/nac-position-descriptions.html" target="_self">
              IEEE Committee Position Descriptions
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations/faqs.html" target="_self">
              FAQs
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations/guidelines.html" target="_self">
              Guidelines for Nominating Candidates
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations/nomination-form.html" target="_self">
              Nominations Form
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/nominations/nomination-overview.html" target="_self">
              IEEE N&amp;A Activity Schedule
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/legal-compliance/resources.html" target="_self">
              Compliance Related Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/agreements-discount.html" target="_self">
              Membership Discount Promotion Codes
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/leadership.html" target="_self">
              Leadership
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/agreements.html" target="_self">
              Agreements
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/agreements/index.html" target="_self">
              About National Society Agreements
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/agreements/sister_guidelines.html" target="_self">
              IEEE - Establishing a Technical/Sister Society Agreement
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/agreements/national_society.html" target="_self">
               IEEE - Establishing a National Society Agreement
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/board.html" target="_self">
              Board of Directors and Executive Staff
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/industry-engagement-committee.html" target="_self">
              IEEE Industry Engagement Committee
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/corporate/industry-engagement-committee/industry-engagement-committee-events-activities.html" target="_self">
              IEEE Industry Engagement Committee Events and Activities: Calls for Proposals
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a href="/about/vision-mission.html" target="_self">Mission and vision </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/about/at-a-glance.html" target="_self">IEEE at a glance </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/about/organization.html" target="_self">Organization </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/about/news.html" target="_self">News </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/about/news/index.html" target="_self">
              Newsroom
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/news/media-kit.html" target="_self">
              Media Kit
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/news/media-kit/media-kit-index.html" target="_self">
              Media Resources
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/news/media.html" target="_self">
              Media
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/news/media/ieee-in-the-media.html" target="_self">
              IEEE in the News
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a href="/about/compliance.html" target="_self">Organizational Ethics </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/about/compliance/conflict-of-interest.html" target="_self">
               Conflict of Interest
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/compliance/conflict-of-interest/index.html" target="_self">
              Principles of Business Conduct and Conflict of Interest Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/compliance/conflict-of-interest/coiandpob.html" target="_self">
              Combined POBC/COI form
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a href="/about/ieee-history.html" target="_self">History of IEEE </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/about/volunteers.html" target="_self">Volunteers </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a class="active" href="/about/volunteers/index.html" target="_self">
              Volunteer resources
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration.html" target="_self">
              Tax Administration
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/vat-gst-info.html" target="_self">
              VAT and GST Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/independent-contractors.html" target="_self">
              Independent Contractors
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/1099-conf-info.html" target="_self">
              Form 1099 Requirements
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/canadian-conferences.html" target="_self">
              Tax Information for IEEE Conferences Held in Canada
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/exemptions.html" target="_self">
              US Sales Tax Exemptions
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/index.html" target="_self">
              Tax Management Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/related-info.html" target="_self">
              Related Tax Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/tax-corp-info.html" target="_self">
              Tax and Corporate Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/tax-administration/treaty-info.html" target="_self">
              Income Tax Treaty Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance.html" target="_self">
              Risk Insurance
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/business-continuity-management.html" target="_self">
              Business Continuity Management
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/conference-insurance.html" target="_self">
              Conference Insurance Program
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/enterprise-risk-management.html" target="_self">
              IEEE Enterprise Risk Management (ERM) Program
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/index.html" target="_self">
              IEEE Risk and Insurance Management Services
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/insurance-services.html" target="_self">
              Corporate Insurance Program
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/ieee-activities-with-children.html" target="_self">
              IEEE Activities with Children
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/registration-form.html" target="_self">
              Registration Form
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/volunteers/risk-insurance/insurance-for-ieee-organizational-units.html" target="_self">
              Insurance for IEEE Organizational Units
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a href="/about/financials.html" target="_self">Financials and Statistics </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/about/ethics.html" target="_self">Ethics </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/about/ethics/index.html" target="_self">
              Ethics and Member Conduct Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/ethics/competition.html" target="_self">
              Student Ethics Competition
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/ethics/award.html" target="_self">
              IEEE Award for Distinguished Ethical Practices
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/ethics/mission.html" target="_self">
              Committee Vision and Mission
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/ethics/resources.html" target="_self">
              Ethics Resources and Organizations
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/ethics/roster.html" target="_self">
              Ethics and Member Conduct Committee
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/ethics/position-paper.html" target="_self">
              Position Paper on Ethical Conduct Awareness
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a href="/about/contact.html" target="_self">IEEE Contact Center </a>
            
            
        </li>
    
        <li>
            
            
            <a href="/about/history-center.html" target="_self">History Center </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/about/history-center/index.html" target="_self">
              History Center Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/contact.html" target="_self">
              History Center: Location &amp; Contact Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/newsletters.html" target="_self">
              Newsletters
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/organization.html" target="_self">
              History Center: History of the History Center
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/programs.html" target="_self">
              History Center: Programs &amp; Projects
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/staff.html" target="_self">
              Staff
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/support.html" target="_self">
              Support the History Center
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/history-center.html" target="_self">
              History Center Home
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/history-committee.html" target="_self">
              IEEE History Committee
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/support.html" target="_self">
              Support the History Center
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/newsletters.html" target="_self">
              Newsletters
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/staff.html" target="_self">
              Staff 
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/programs.html" target="_self">
              Programs/Projects
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/organization.html" target="_self">
              History of the History Center
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/history-center-nav/history-center-contact.html" target="_self">
              Location &amp; Contact Information
			</a>
        </li>
    
        <li>
            
            
            <a href="/about/history-center/events.html" target="_self">
              History Center: Events
			</a>
        </li>
    </ul>

        </li>
    
        <li>
            
            
            <a href="/about/assembly.html" target="_self">IEEE Assembly </a>
            <span class="arrow-right link-extract"><i aria-hidden="true" class="fa fa-plus"></i></span>
            
    <ul class="link-list sub-links">
        <li>
            
            
            <a href="/about/assembly/index.html" target="_self">
              IEEE Assembly Election Candidates
			</a>
        </li>
    </ul>

        </li>
    </ul>
</div>
<!-- #vertical-navigation-content end -->

                </div>
            </div>
        
        
        <div class="rte-section">
            




    
    
    <div class="rte text parbase">

<link rel="stylesheet" href="/etc.clientlibs/wcm/foundation/clientlibs/accessibility.min.6fe5d4427361a4c0ca5a75457e3e4256.css" type="text/css">


    <p><a class="arrow-link" href="https://corporate.ieee.org/resources/travel,-medical-and-insurance/ieee-expense-report"><b>New IEEE Volunteer Expense Reimbursement System (Concur)—see details</b></a></p>
<p>As part of an effort to carve out a well-deserved space in the IEEE digital presence for volunteers, each major Board will have a space devoted to them, with cross-linkages to other volunteer-only content across the organization. In this new space, y<b></b>ou will find the content you need to access for your work as an IEEE volunteer. This includes meetings, agendas, resources, and other crucial information related to your role.<br />
<br />
Benefits of this change include:<br />
</p>
<ul>
<li>Flexibility to pilot new ideas, innovate, personalize, and evolve the volunteer web presence</li>
<li>A robust search to find and access content across each Board, crawling all volunteer content</li>
<li>Removal of clutter and unrelated content, creating a dedicated space for volunteers</li>
<li>Role-based access to shared resources across several Boards, centralizing volunteer resources in a one-stop-shop</li>
</ul>
<p>General resources that pertain to most IEEE volunteer roles, as well as links to other resource collections, are on this page.</p>

</div>



        </div>
        
            <div class="jump-link-section hidden-xs">
                





         



<!-- Jump Links Container Content
============================================= -->
<div class="jump-links hidden-xs">
	
    <div class="jump-links-header font-c">On this page:</div>
    <ul class="link-list">
        <li>
            <a href="#Compliance-Training-for-Volunteer-Leadership" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Compliance Training for Volunteer Leadership
            </a>
        </li>
    
        <li>
            <a href="#read-the-latest-news-from-ieee-volunteer-newsletters" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Read the latest news from IEEE volunteer newsletters
            </a>
        </li>
    
        <li>
            <a href="#find" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Find:
            </a>
        </li>
    
        <li>
            <a href="#operations-manuals" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Operations Manuals
            </a>
        </li>
    
        <li>
            <a href="#resources-for-volunteers-involved-in" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Resources for volunteers involved in:
            </a>
        </li>
    
        <li>
            <a href="#volunteer-training-opportunities" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Volunteer training opportunities
            </a>
        </li>
    
        <li>
            <a href="#awards,-nominations,-elections" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Awards, nominations, elections
            </a>
        </li>
    
        <li>
            <a href="#administrative-resources" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Administrative resources
            </a>
        </li>
    
        <li>
            <a href="#access-medical,-travel,-and-insurance-benefits" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Access medical, travel, and insurance benefits
            </a>
        </li>
    
        <li>
            <a href="#contact-staff-and-volunteers" target="">
                <span class="arrow-right">
            		<i aria-hidden="true" class="fa fa-angle-right"></i>
            	</span>Contact staff and volunteers
            </a>
        </li>
    </ul>
</div>
<!-- #jump-links-container-content end -->

            </div>
        
    </div>
</div>
<div class="clearfix"></div></div>


    
    
    <div class="dropdown-selector">









<!--Dropdown Selector component content
============================================= -->
<div class="dd-section-main">
    <div class="dd-section-title hidden-xs">
        <div class="dropdown-header">
            Find your volunteer content 
        </div>
    </div>
    <div class="dd-section-drpdown">
        <div class="comp-dropdown-selector">
            <div class="dropdown-selector">
                <div class="selector">
                    <a aria-expanded="true" aria-haspopup="true" class="dropdown-toggle dropdown_title" data-toggle="dropdown" href="#" id="dropdown_title" role="button">Select an option</a>
                    <ul class="dropdown-menu" id="dropdown-selector">
                        <li>
                            <i class="fa fa-check selected hidden-xs"></i>
                            <a href="#">Select an option</a>
                        </li>
                        
                            
                            <li>
                                <i class="fa fa-check hidden-xs hidden-sm"></i>
                                <a href="https://corporate.ieee.org/" target="_self">Board of Director resources</a>
                            </li>
                        
                            
                            <li>
                                <i class="fa fa-check hidden-xs hidden-sm"></i>
                                <a href="https://ta.ieee.org/" target="_self">Technical Activities-related resources</a>
                            </li>
                        
                            
                            <li>
                                <i class="fa fa-check hidden-xs hidden-sm"></i>
                                <a href="https://mga.ieee.org/" target="_self">Membership &amp; Geographic Activities-related resources</a>
                            </li>
                        
                            
                            <li>
                                <i class="fa fa-check hidden-xs hidden-sm"></i>
                                <a href="https://pspb.ieee.org/" target="_self">Publications, Services, &amp; Products Board-related resources</a>
                            </li>
                        
                            
                            <li>
                                <i class="fa fa-check hidden-xs hidden-sm"></i>
                                <a href="https://ea.ieee.org/" target="_self">Educational Activities-related resources</a>
                            </li>
                        
                            
                            <li>
                                <i class="fa fa-check hidden-xs hidden-sm"></i>
                                <a href="https://corporate.ieee.org/" target="_self">Committees, Governance, Financial resources</a>
                            </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="dd-section-btn">
        <a class="btn-style hidden-xs btn-go" href="#">Go</a>
    </div>
</div>
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


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="Compliance-Training-for-Volunteer-Leadership" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    	
    		<h4>Compliance Training for Volunteer Leadership</h4>
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p>It is important that those who act on behalf of IEEE, both volunteers and staff, are aware of IEEE's legal obligations and requirements under applicable law. <i><b>Updated compliance learning</b></i> has been designed to help you understand those requirements and provide you with the information you need to act in IEEE's best interest and be compliant with legal obligations. This compliance learning is required for certain volunteer leadership positions.<br />
</p>
<p>To provide you with information on this improved compliance learning, the IEEE Legal &amp; Compliance team has developed the below information which will help to explain why it is necessary, who is required to take it, and how you can access the IEEE Volunteer Compliance Training Site.</p>
<ul>
<li><a href="/content/dam/ieee-org/ieee/web/org/legalcompliance/2021-compliance-training-faq.pdf" target="_blank">Frequently Asked Questions (PDF, 141 KB)</a></li>
<li><a href="https://supportcenter.ieee.org/">IEEE Support Center</a></li>
<li><a href="/content/dam/ieee-org/ieee/web/org/educ/iln/iln-user-guides/login-volunteer-training-ug.pdf" target="_blank">How to get started with the new site (PDF, 235 KB)</a></li>
<li><a href="https://volunteers.iln.ieee.org/Default.aspx">Access to the new ILN Volunteer Compliance Training site:</a> (login required)</li>
<li>In addition to this new site for compliance learning, we remind you that IEEE offers other training for volunteers based on your roles:<ul>
<li><a href="https://ieee-elearning.org/CLE/">Center for Leadership Excellence</a></li>
<li><a href="/conferences/organizers/conference-organizer-education.html">IEEE Conference Education Program</a></li>
<li><a href="https://standards.ieee.org/about/training/index.html">IEEE SA Training + Development</a></li>
<li><a href="http://mynextgen.ieee.org">IEEE NextGen Experience Training</a></li>
<li style="list-style-type: none;"><ul>
<li><small><i>The system is available to those who are authorized to act on financials and contracts.</i></small></li>
</ul>
</li>
</ul>
</li>
</ul>

</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="read-the-latest-news-from-ieee-volunteer-newsletters" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Read the latest news from IEEE volunteer newsletters</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p class="arrow-link"><a href="https://mga.ieee.org/news">MGA News (SCOOP)</a></p>
<p class="arrow-link"><a href="https://ta.ieee.org/news/society-sentinel-newsletter">Society Sentinel</a></p>
<p class="arrow-link"><a href="https://ea.ieee.org/news">Educational Activities Insight</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="find" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Find:</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p class="arrow-link"><a href="/communities/geographic-activities.html">Your local IEEE Section and Chapter</a></p>
<p class="arrow-link"><a href="/communities/index.html">A technical society, council, or technical community</a></p>
<p class="arrow-link"><a href="http://wie.ieee.org/">Activities for women engineers (Women in Engineering)</a></p>
<p class="arrow-link"><a href="/membership/young-professionals.html">Activities for young professionals</a></p>
<p class="arrow-link"><a href="https://students.ieee.org/committee/">Activities for students</a></p>
<p class="arrow-link"><a href="http://standards.ieee.org/index.html">IEEE Standards</a></p>
<p class="arrow-link"><a href="https://www.ieeeusa.org/">IEEE-USA</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="operations-manuals" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Operations Manuals</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p class="arrow-link"><a href="/content/dam/ieee-org/ieee/web/org/voluntr/tab/tab-operations-manual.pdf" target="_blank">Technical Activities</a> (PDF, 3 MB)</p>
<p class="arrow-link"><a href="https://mga.ieee.org/images/files/MGA_Operations_Manual_2021.6.26_1.pdf" target="_blank">Membership &amp; Geographic Activities</a> (PDF 944 KB)</p>
<p class="arrow-link"><a href="https://pspb.ieee.org/images/files/files/opsmanual.pdf" target="_blank">Publication Services and Products Board</a> (PDF, 1 MB)</p>
<p class="arrow-link"><a href="/content/dam/ieee-org/ieee/web/org/educ/eab_ops_manual_current.pdf" target="_blank">Educational Activities Board</a> (PDF, 2 MB)</p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="resources-for-volunteers-involved-in" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Resources for volunteers involved in:</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p class="arrow-link"><a href="https://mga.ieee.org/membership-development">Membership development</a></p>
<p class="arrow-link"><a href="https://ta.ieee.org/volunteer-development/nominations-appointments/volunteer-opportunities">Technical Societies and Communities</a></p>
<p class="arrow-link"><a href="http://standards.ieee.org/develop/index.html">Standards Development and Working Groups</a></p>
<p><b>Publications</b></p>
<p class="arrow-link"><a href="/publications/rights/index.html">Reprints, rights, and permission</a></p>
<p class="arrow-link"><a href="/publications/publication-types.html">Publication types</a></p>
<p class="arrow-link"><a href="http://ieeeauthorcenter.ieee.org/">Author resources</a></p>
<p class="arrow-link"><a href="/publications/services/index.html">Publishing Tools and Services</a></p>
<p><b>Conferences</b></p>
<p class="arrow-link"><a href="https://ieeemce.org/">Running a conference</a></p>
<p class="arrow-link"><a href="/conferences/organizers/conference-organizer-education.html">Conference Organizer Education</a></p>
<p class="arrow-link"><a href="https://ieeemce.org/mce-services/event-management-services/">MCE Event Management Services</a></p>
<p><b>Societies</b></p>
<p class="arrow-link"><a href="http://ta.ieee.org/operations/society-and-council-operations/ta-resource-centers-ecommerce-platforms">Resource Centers</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="volunteer-training-opportunities" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Volunteer training opportunities</h4>
    	
    	
    </div>

    




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/volunteers/training.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Access volunteer training
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/conferences/organizers/conference-organizer-education.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Conference Education Program
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

<!-- #link-content end -->

    </ul>

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="awards,-nominations,-elections" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Awards, nominations, elections</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p><b>IEEE Awards and Recognitions</b></p>
<p class="arrow-link"><a href="https://corporate-awards.ieee.org/">View all IEEE awards and guidelines</a></p>
<p class="arrow-link"><a href="/membership/fellows/steps.html">Become an IEEE Fellow</a></p>
<p class="arrow-link"><a href="/membership/senior/index.html">Become an IEEE Senior member</a></p>
<p><b>Nominations and Appointments</b></p>
<p class="arrow-link"><a href="/about/corporate/nominations/guidelines.html">IEEE offices, Boards, and Committees Nomination Form and Guidelines</a></p>
<p class="arrow-link"><a href="https://corporate-awards.ieee.org/ieee-awards-board-committees/">Awards Board Nominations and Appointments Committee</a></p>
<p class="arrow-link"><a href="https://mga.ieee.org/awards/mga-awards-and-recognition-program">Member and Geographic Activities Board</a></p>
<p class="arrow-link"><a href="https://ta.ieee.org/volunteer-development/nominations-appointments/become-an-ieee-technical-activities-volunteer">Technical Activities Board</a></p>
<p class="arrow-link"><a href="https://ea.ieee.org">Educational Activities Board</a></p>
<p class="arrow-link"><a href="https://pspb.ieee.org/pspb/pspb-committees/ieee-publication-services-and-products-board-pspb-operating-committee-opcom?view=article&amp;id=61:pspb-nominations-and-appointments">Publication Services and Products Board</a></p>
<p><b>Elections Information</b></p>
<p class="arrow-link"><a href="/about/corporate/election/index.html">IEEE Annual Election</a></p>
<p class="arrow-link"><a href="https://ta.ieee.org/operations/society-and-council-operations/society-and-council-elections-petitions-support">Society Elections</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="administrative-resources" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Administrative resources</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p>Business, Finance, and Tax Information and Resources</p>
<p class="arrow-link"><a href="https://corporate.ieee.org/resources/travel,-medical-and-insurance/ieee-expense-report">Expense Report and New Expense Reimbursement Platform (Concur)</a></p>
<p class="arrow-link"><a href="/publications/rights/copyright-main.html">IEEE Copyright Form</a></p>
<p class="arrow-link"><a href="https://www.ieee.org/membership_services/services/financial/treasury/concentration.html">Concentration Banking</a></p>
<p class="arrow-link"><a href="/about/volunteers/merchant-lending-for-geographic-organizational-unit.html">Merchant Account Lending Program</a></p>
<p class="arrow-link"><a href="/membership/financial/contracts/po-terms.html">Purchase Order Terms and Conditions (Strategic Sourcing)</a></p>
<p class="arrow-link"><a href="/membership/financial/procurement/ieee-isupplier-privacy-statement.html">IEEE Oracle iSupplier Privacy Statement (Strategic Sourcing)</a></p>
<p class="arrow-link"><a href="/about/corporate/compliance/legal/index.html">Corporate Compliance and Tax Management</a></p>
<p class="arrow-link"><a href="/about/financials.html">IEEE Financials &amp; Statistics</a></p>
<p class="arrow-link"><a href="/about/volunteers/internal-audit.html">Internal Audit</a></p>
<p class="arrow-link"><a href="https://corporate.ieee.org/committees-of-ieee/committees/investment-committee">Investment Guidelines (IEEE Investment Committee)</a></p>
<p class="arrow-link"><a href="/about/compliance/conflict-of-interest/index.html">Principals of Business Conduct</a></p>
<p class="arrow-link"><a href="https://brand-experience.ieee.org/">Brand Identity Toolkit/Digital Publishers Toolkit (Presentation Templates, Master Brand &amp; Logos)</a></p>
<p class="arrow-link"><a href="https://vtools.ieee.org/remote-conferencing/">Remote Conferencing and Screencasting</a></p>
<p class="arrow-link"><a href="https://mga.ieee.org/resources-operations/volunteer-tools/ieee-enotice-service">eNotice services</a></p>
<p class="arrow-link"><a href="http://sites.ieee.org/vtools/">vTools (Electronic tools for volunteers)</a></p>
<p class="arrow-link"><a href="https://mga.ieee.org/resources-operations/volunteer-tools/samieee">OU Analytics</a></p>
<p class="arrow-link"><a href="https://www.ieee.org/about/social_media/index.html">Social media policy</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="access-medical,-travel,-and-insurance-benefits" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Access medical, travel, and insurance benefits</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p class="arrow-link"><a href="/membership/services/travel/index.html">Travel services</a></p>
<p class="arrow-link"><a href="/about/volunteers/global-travel.html">Volunteer Global Accident / Medical Plan</a></p>
<p class="arrow-link"><a href="/about/volunteers/risk-insurance.html">Office of Risk and Insurance Management Services</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>


    
    
    <div class="section-header-container">





<!-- Section Header Container Content
============================================= -->

    

    <div id="contact-staff-and-volunteers" class="section-header font-c" style="background-color: ; 
    		color: ">
    	
    		<h4>Contact staff and volunteers</h4>
    	
    	
    </div>

    




    
    
    <div class="rte text parbase">



    <p class="arrow-link"><a href="/about/volunteers/rosters.html">IEEE Organization Rosters</a></p>
<p class="arrow-link"><a href="/about/contact.html">IEEE Contact Center</a></p>

</div>


    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

<!-- #link-list-container-content end -->
</div>




    

<!-- Top Of Page Content
============================================= -->

<div class="top-of-page-link hidden-xs text-right no-margin ">
    <a class="arrow-color-blue" href="#top">
        <img class="svg top-arrow-link" src="/etc/designs/ieee-core/clientlibs/images/top-arrow.svg"/>
        <span class="title-label">top of page</span>
    </a>
</div>
<!-- Enable bottom spacing between the content section -->

<!-- #top-of-page-content end -->


<!-- #section-header-container-content end --></div>



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


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="20039988 right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(0,102,153,1);">
        <div class="column-module-header font-c">Calendars for volunteers</div>
        




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/education/eab.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Educational Activities Board (EAB)
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/conferences/index.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Conferences
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/content/dam/ieee-org/ieee/web/org/about/corporate/ieee-upcoming-meeting-series.pdf" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Meeting Series Schedule
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://ieeeusa.org/calendar/" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE-USA Calendar of Events
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/board-committees/region-meetings-calendar" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span><p>Member and Geographic Activities Board (login required)</p>

        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/publications/rights/pmd.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Publishing Mail Dates
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://ta.ieee.org/preview-meetings" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Technical Activities
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


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="20039989 right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(0,102,153,1);">
        <div class="column-module-header font-c">Forms and templates for volunteers</div>
        




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://www.ieee.org/about/toolkit/index.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Brand Identity Toolkit
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://corporate.ieee.org/resources/travel,-medical-and-insurance/ieee-expense-report" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Expense Form
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/publications/rights/copyright-main.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Copyright Form
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://brand-experience.ieee.org/download/ieee-corporate-presentation-template-fullscreen/?wpdmdl=854" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE fullscreen presentation template
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://brand-experience.ieee.org/download/ieee-corporate-presentation-template-widescreen/?wpdmdl=855" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE widescreen presentation template
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://brand-experience.ieee.org/templates-tools-resources/master-brand-and-logos/" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Master Brand and Logos
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/compliance/conflict-of-interest/coiandpob.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Principles of Business Conduct Compliance Certificate
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/compliance/conflict-of-interest/index.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Principles of Business Conduct / Conflict of Interest Form
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


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="right_column_module right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div id="rightcolumn-1" class="column-module" style="border-color:rgba(204,0,51,1);">
        <div class="column-module-header font-c">Security</div>
        




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="http://ieeetv.ieee.org/ieeetv-specials/don-t-get-hooked-safe-strategies-on-the-net" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Don't Get Hooked: Safe Strategies on the Net
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/content/dam/ieee-org/ieee/web/org/about/corporate/google-and-third-party-apps.pdf" target="_blank">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE G-Suite and Recent Report of Google Allowing App Developers to Access Your Email (PDF, 62 KB)
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


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="20039986 right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(178,178,178,1);">
        <div class="column-module-header font-c">News for volunteers</div>
        




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="http://newsmanager.commpartners.com/ieeemeet/issues/" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Conference Organizers' Newsletter
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="http://yp.ieee.org/impact/" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span><p>Young Professionals IMPACT Blog</p>

        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://mga.ieee.org/news" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Member and Geographic Activities News
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="https://ta.ieee.org/news/sentinel-archive" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Society Sentinel Newsletter
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


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="DF_IEEE_MIG_GRT_77381_7 right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(0,102,153,1);">
        <div class="column-module-header font-c"> Business policies &amp; information </div>
        




    
    
    <div class="link-list-container">





         



<!-- Link List Container Content ============================================= -->

    
    <ul class="link-list">
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help-pricing.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Pricing Policy
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/browser-policy.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Browser Policy
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/export.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Export Restrictions
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/business-policies/payment.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Payment &amp; Order Methods
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/business-policies/returns.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Returns Policy
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/business-policies/business-policies-shipping.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Shipping Information
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/business-policies/purchase-taxes.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Tax Information
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/help/site-terms-conditions.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Terms &amp; Conditions
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/corporate/governance/p9-26.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Nondiscrimination Policy
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/security-privacy.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Privacy Policy
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/about/compliance/conflict-of-interest/index.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>Principles of Business Conduct and Conflict of Interest
        </a>
    </li>

<!-- #link-content end -->

    
        





         



<!-- Link Content
============================================= -->

    <li>
        <a href="/ieee-data-access-and-use-policy.html" target="_self">
            <span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>IEEE Data Access and Use Policy
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


    
    
    <div class="reference parbase"><div class="cq-dd-paragraph"><div class="42073454 right-column-module">





<!-- Section Header Content
============================================= -->

    
    <div class="column-module" style="border-color:rgba(178,178,178,1);">
        <div class="column-module-header font-c">Membership Development Volunteers Community</div>
        




    
    
    <div class="rte text parbase">



    <p style="text-align: left;">Join the<b> Membership Development Volunteers Community in Collabratec®</b> to:</p>
<ul>
<li>Post your questions</li>
<li>Start discussions about MD efforts</li>
<li>Share best practices</li>
<li>Receive the MD Monthly report, and other important announcements that impact your MD efforts. </li>
</ul>

</div>


    
    
    <div class="cta-button">










<a class="btn-style" href="/membership/my-ieee.html" target="_self">Sign in to Collabratec </a>
<!-- #cta-button-content end -->
</div>



    </div>

<!-- #section-header-content end -->
</div>
</div>
</div>


    
    
    <div class="right-column-module">





<!-- Section Header Content
============================================= -->

<!-- #section-header-content end -->
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

    <ul id="VLGHREJXQVZNUJCKBL" class=" utilitylinks separator-pipe">
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
