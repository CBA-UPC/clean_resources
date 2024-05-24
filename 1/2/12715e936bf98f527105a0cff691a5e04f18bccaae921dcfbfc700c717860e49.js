(function(_ds){var window=this;var D2=function(a,b){b="translate3d("+b+"px,0px,0px)";_ds.Mm(a,C2(),b)},C2=_ds.kj(function(){return _ds.Of&&9==_ds.ig?"-ms-transform":"transform"});var G2=function(a){a.h=E2(a,".devsite-top-logo-row-wrapper-wrapper");a.g=E2(a,".devsite-collapsible-section");a.o=E2(a,".devsite-doc-set-nav-row");a.setAttribute("top-row--height",`${a.h}`);a.setAttribute("bottom-row--height",`${a.g}`);a.setAttribute("bottom-tabs--height",`${a.o}`);a.style.setProperty("--devsite-js-top-row--height",`${a.h}px`);a.style.setProperty("--devsite-js-bottom-row--height",`${a.g}px`);a.style.setProperty("--devsite-js-bottom-tabs--height",`${a.o}px`);F2(a)},F2=function(a){const b=
a.querySelector(".devsite-collapsible-section");a.offset>=a.g&&!a.hasAttribute("bottom-row--hidden")?a.setAttribute("bottom-row--hidden",""):a.offset<a.g-a.o&&a.hasAttribute("bottom-row--hidden")&&a.removeAttribute("bottom-row--hidden");b&&a.offset!==a.ua&&(_ds.Mm(b,"transform",`translate3d(0, -${a.offset}px, 0)`),H2(a),a.ua=a.offset);document.body.style.setProperty("--devsite-js-header-height",`${a.v()}px`)},lca=function(a){var b=a.querySelector(".devsite-top-logo-row-middle");const c=a.querySelector("devsite-search"),
d=a.querySelector(".devsite-search-background");if(b&&c&&d){_ds.I(a.qa);a.ea&&window.cancelAnimationFrame(a.ea);c.removeAttribute("transition");a.removeAttribute("search-expanded");var e=new _ds.xj(b.offsetWidth,b.offsetHeight);b=new _ds.xj(c.offsetWidth,c.offsetHeight);var f=_ds.en(c),g="rtl"===document.documentElement.getAttribute("dir")?1:-1,h=(e.width-f.left-f.right)/b.width;e=(e.width-(b.width+f.left+f.right))*g;var k=(f=a.hasAttribute("search-active"))?e:0,l=f?h:1;_ds.Mm(d,{opacity:1,width:`${b.width}px`,
height:`${b.height}px`});D2(c,a.hasAttribute("search-active")?0:e);_ds.Im(a.qa,d,_ds.ph,()=>{const m=a.querySelector("devsite-search"),n=a.querySelector(".devsite-search-background");n&&(n.style.opacity="0");m&&(m.removeAttribute("transition"),D2(m,0),a.hasAttribute("search-active")?a.setAttribute("search-expanded",""):a.removeAttribute("search-expanded"))});a.ea=window.requestAnimationFrame(()=>{c.setAttribute("transition","");var m="scale3d("+l+",1,1)";_ds.Mm(d,C2(),m);D2(c,k)})}},mca=async function(a,
b){if(a.hasAttribute("billboard")){var c=a.querySelector("devsite-search"),d=a.querySelector("devsite-search input.devsite-search-query");a=a.querySelector(".devsite-header-billboard-search devsite-search");var e=null==a?void 0:a.querySelector("input.devsite-search-query");c&&d&&a&&e&&(b?(c.removeAttribute("disabled"),document.activeElement===e&&(await _ds.ul(),d.focus()),a.setAttribute("disabled","")):(a.removeAttribute("disabled"),document.activeElement===d&&e.focus(),c.setAttribute("disabled",
"")))}},nca=function(a){a.eventHandler.listen(a,"devsite-search-toggle",b=>{b=b.Ga;_ds.tk(b.target,null,"devsite-top-logo-row-middle")&&(b.detail.active?a.setAttribute("search-active",""):a.removeAttribute("search-active"))});a.eventHandler.listen(document.body,"devsite-sitemask-hidden",()=>document.body.removeAttribute("devsite-book-nav--open"));a.eventHandler.listen(window,"resize",()=>I2(a));a.eventHandler.listen(document.body,["devsite-page-loaded","devsite-content-updated"],()=>{I2(a)});a.eventHandler.listen(a,
"click",b=>{b.defaultPrevented||"devsite-hamburger-menu"!==b.target.getAttribute("id")||(b.preventDefault(),b.stopPropagation(),document.body.setAttribute("devsite-book-nav--open",""),a.dispatchEvent(new CustomEvent("devsite-sitemask-show",{bubbles:!0})))})},J2=function(a){if(!a.querySelector(".devsite-search-background")&&(a=a.querySelector(".devsite-top-logo-row-middle"))){const b=document.createElement("div");b.classList.add("devsite-search-background");b.style.opacity="1";a.appendChild(b)}},H2=
function(a){0===a.g?a.setAttribute("no-lower-row",""):a.removeAttribute("no-lower-row");a.querySelector(".devsite-header-billboard")?a.setAttribute("billboard",""):a.removeAttribute("billboard")},I2=function(a){window.requestAnimationFrame(()=>a.ra.Qa())},E2=function(a,b){return(a=a.querySelector(b))?a.getBoundingClientRect().height:0},K2=function(a,b){for(var c=0;c<b.attributes.length;++c){var d=b.attributes.item(c);a.hasAttribute(d.name)||b.removeAttribute(d.name)}for(c=0;c<a.attributes.length;++c)d=
a.attributes.item(c),b.setAttribute(d.name,d.value)},L2=function(a,b,c){b=b.querySelector(c);c=a.querySelector(c);b&&c&&(a.updated=!0,_ds.bj(a,c,b))},oca=class extends _ds.E{constructor(){super(...arguments);this.eventHandler=new _ds.G;this.ua=-1;this.qa=new _ds.G;this.ea=0;this.ma=new MutationObserver(()=>G2(this));this.ra=new _ds.Fm(()=>{G2(this);H2(this)},15);this.authUser=void 0;this.offset=this.o=this.g=this.h=0;this.updated=!1}static get observedAttributes(){return["offset","search-active",
"bottom-row--hidden"]}attributeChangedCallback(a,b,c){switch(a){case "offset":this.offset=Number(this.getAttribute("offset")||"")||0;F2(this);break;case "search-active":lca(this);break;case "bottom-row--hidden":a=null!==c,b=this.querySelector("devsite-search input.devsite-search-query"),c=this.querySelector(".devsite-header-billboard-search devsite-search input.devsite-search-query"),b&&c&&(a?b.value=c.value:c.value=b.value),mca(this,a)}}connectedCallback(){nca(this);J2(this);H2(this);G2(this);this.ma.observe(this,
{childList:!0,subtree:!0});F2(this);const a=_ds.F();this.authUser=_ds.Vk(_ds.Wk(a.href),"authuser")}disconnectedCallback(){_ds.I(this.eventHandler);this.ma.disconnect()}v(){return this.h+this.g-this.offset}oa(){return this.h+this.g}Sb(a){this.updated=!1;if(a){L2(this,a,".devsite-header-upper-tabs");L2(this,a,".devsite-collapsible-section");L2(this,a,".devsite-product-name-wrapper");L2(this,a,"devsite-language-selector");L2(this,a,"devsite-shell-activate-button");var b=a.querySelector("devsite-search"),
c=this.querySelector("devsite-search");b&&c&&K2(b,c);c=a.querySelector("devsite-user");b=this.querySelector("devsite-user");c&&b&&(K2(c,b),c=_ds.F(),c=_ds.Vk(_ds.Wk(c.href),"authuser"),c!==this.authUser&&(this.authUser=c,b.refresh()));_ds.bj(this,this.querySelector("cloudx-additional-tabs"),a.querySelector("cloudx-additional-tabs"),this.querySelector(".devsite-top-logo-row-middle"));_ds.bj(this,this.querySelector(".devsite-header-link"),a.querySelector(".devsite-header-link"),this.querySelector("devsite-language-selector"))}!this.updated&&
a&&(_ds.ak(this),this.appendChild(a));J2(this);I2(this)}};try{customElements.define("devsite-header",oca)}catch(a){console.warn("devsite.app.customElement.DevsiteHeader",a)};})(_ds_www);
special_output(head_end) -->
<link rel="canonical" href="https://gdpr.cision.com/additional-information-for-californian-consumers" />
<!-- end spin_special_output(head_end) -->
</head>			
<body class="wd_pageid_20316">

<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TX4FJT8" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN56S56" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>

<!-- OneTrust Cookies Consent Notice (www.cision.com, en-GB) start -->

<!-- OneTrust Cookies Consent Notice (www.cision.com, en-GB) end -->

<header class="main-header navbar-fixed-top">
<section class="nav-junior hidden-xs">
		<div class="container">
			<nav class="navbar navbar-junior">
				<div class="container-fluid">
			
				<ul class="nav navbar-nav">
					<li>
						<a href="https://www.cision.com/careers/" target="_blank">Careers</a>
					</li>
					<li>
						<a href="https://gdpr.cision.com/?nav_location=eyebrow_menu&amp;_ga=2.100946567.707781054.1568205126-1414110191.1568205126" target="_blank">Data Privacy</a>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="https://www.cision.com/us/contact-us" target="_self">Contact Us</a>
					</li>
					<li>
						<a href="https://www.cision.com/us/blogs" target="_self">Blog</a>
					</li>
					<!--<li>
						<a href="http://investors.cision.com/index.php?nav_location=eyebrow_menu&amp;_ga=2.100946567.707781054.1568205126-1414110191.1568205126" target="_blank">Investors</a>
					</li>-->			
					<li class="header-search hidden-xs">
					<a id="search-nav-popover" tabindex="0" role="button" data-html="true" data-container="body" data-placement="bottom" data-original-title="" title="">
					<i class="fa fa-search" aria-hidden="true"></i>
					</a>
					</li>
				</ul>
				</div></nav>
			<div id="popover-content-search-nav-popover" class="hidden">
				<div class="input-group input-group-popover header-search-popover">
			<input type="hidden" value="/us/search/" id="sitesearchurl">
				<input class="form-control" id="siteSearchTxt" type="text" placeholder="Search">
				<span class="input-group-btn">
					<button id="popoverSearchButton" data-loading-text="&lt;i class='fa fa-spinner fa-pulse fa-fw'&gt;&lt;/i&gt;" class="btn btn-default disabled" type="submit">
					<i class="fa fa-search" aria-hidden="true"></i>
				</button>
				</span>
			</div>
		</div>
  </div>
	</section>
	<section class="nav-main">
		<nav class="navbar navbar-default">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-main-toggle" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<i class="icon-bar"></i>
				<i class="icon-bar"></i>
				<i class="icon-bar"></i>
				</button>
		<a href="https://www.cision.com/us/" class="navbar-brand" target="_self">
			<img class="img-responsive" src="images/2023-Cision-Logo-Navy-Orange.svg">
		</a>
			</div>
			<!-- sub menu -->		
			<div class="collapse navbar-collapse" id="nav-main-toggle">
				<ul class="nav navbar-nav " role="navigation">
					<li class="dropdown">
						<a href="https://www.cision.com/us/products/?nav_location=main_menu" target="_self" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products
							<i class="fa fa-caret-down visible-xs-inline ml-xs" aria-hidden="true"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-left sub-menu" role="menu">
							<li><a href="https://www.cision.com/us/products/?nav_location=main_menu" target="_self">Communications Cloud</a></li>
							<li><a href="https://www.cision.com/us/products/database/?nav_location=main_menu" target="_self">Database</a></li>
							<li><a href="https://www.cision.com/us/products/distribution/?nav_location=main_menu" target="_self">Distribution</a></li>
							<li><a href="https://www.cision.com/us/products/monitoring/?nav_location=main_menu" target="_self">Monitoring</a></li>
							<li><a href="https://www.cision.com/us/products/analytics/?nav_location=main_menu" target="_self">Analytics</a></li>
							<li><a href="https://www.cision.com/us/products/impact/?nav_location=main_menu" target="_self">Impact</a></li>
							<li><a href="https://www.cision.com/us/products/imageiq/?nav_location=main_menu" target="_self">ImageIQ</a></li>
						</ul>
					</li>
					<li class="dropdown">
						<a href="https://www.cision.com/us/resources/?nav_location=main_menu" target="_self" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources
							<i class="fa fa-caret-down visible-xs-inline ml-xs" aria-hidden="true"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-left sub-menu" role="menu">
							<li><a href="https://www.cision.com/us/resources/?nav_location=main_menu" target="_self">Overview</a></li>
							<li><a href="https://www.cision.com/us/resources/resource-type/?nav_location=main_menu" target="_self">Resource Type</a></li>
							<li><a href="https://www.cision.com/us/resources/trending-topics/?nav_location=main_menu" target="_self">Trending Topics</a></li>
							<li><a href="https://www.cision.com/us/resources/solution/?nav_location=main_menu" target="_self">Solution</a></li>
						</ul>
					</li>
					<li class="dropdown">
						<a href="https://www.cision.com/us/solutions/" target="_blank" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Solutions
						<i class="fa fa-caret-down visible-xs-inline ml-xs" aria-hidden="true"></i>
						</a>
						<ul class="dropdown-menu dropdown-menu-left sub-menu" role="menu">
							<li><a href="https://www.cision.com/us/solutions/investor-relations/" target="_self">Investor Relations</a></li>
							<li><a href="https://www.cision.com/us/solutions/public-relations/" target="_self">Public Relations</a></li>
						</ul>
					</li>
					<li class="dropdown">
						<a href="https://www.cision.com/us/pricing/?nav_location=main_menu" target="_self" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Pricing</a>
						<ul class="dropdown-menu dropdown-menu-left sub-menu" role="menu">
							<li><a href="https://www.cision.com/us/pricing/?nav_location=main_menu" target="_self">Pricing</a></li>
						</ul>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right hidden-xs" role="navigation">
					<a href="https://www.cision.com/us/request-demo/?nav_location=main_menu" target="_self" class="btn btn-sm navbar-btn btn btn-primary animated flash mr-sm" itemprop="url">
						Request a Demo
					</a>
					<a href="https://www.cision.com/us/client-login/?nav_location=main_menu" target="_self" class="btn btn btn-white navbar-btn btn-sm">
						Log In
					</a>
				</ul>
				<!-- mobile navigation -->
				<ul class="nav navbar-nav navbar-right visible-xs" role="navigation">
					<li>
						<a href="https://www.cision.com/careers/">Careers</a>
					</li>
					<li>
						<a href="https://gdpr.cision.com/?nav_location=eyebrow_menu&amp;_ga=2.100946567.707781054.1568205126-1414110191.1568205126">Data Privacy</a>
					</li>
					<li>
						<a href="https://www.cision.com/us/contact-us/">Contact Us</a>
					</li>
					<li>
						<a href="https://www.cision.com/us/blog/">Blog</a>
					</li>
					<li>
						<a href="http://investors.cision.com/index.php?nav_location=eyebrow_menu&amp;_ga=2.100946567.707781054.1568205126-1414110191.1568205126">Investors</a>
					</li>
					<li>
						<a href="https://www.cision.com/us/request-demo">Request a Demo</a>
					</li>
					<li>
						<a href="https://www.cision.com/us/client-login">Log In</a>
					</li>
					<li class="mobile-header-search mt-sm">
						<div class="form-group col-xs-12">
							<form>
							<div class="input-group">
								<input class="form-control" name="" type="text" placeholder="Search">
								<span class="input-group-btn">
									<button class="btn btn-primary mobileGlobalCisionSearch mobileGlobalCisionSearch-new" type="submit">
									<i class="fa fa-search" aria-hidden="true"></i>
									</button>
								</span>
							</div>
							</form>
						</div>
					</li>
				 </ul>
				</div>
			</div>
		</nav>
	</section>
</header>

<input type="hidden" value="UA-583116-35" id="GA_ID">

<main role="main">
	<div class="banner">
		<section class="jumbotron jumbotron--parent ">
			<figure>
				<div class="jumbo-image overlay__image">
				<img src="/image/Cropped+GDPR+Hero1.jpg">
					<div class="overlay__color overlay__color_brand-gradient"></div>
				</div>
			</figure>
			<div class="jumbotron jumbotron__child">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="jumbo-content">
								<h1 style="text-align: center;">Additional Information for Californian Consumers</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div id="breadcrumbs" class="t_container_wrap fullsize hideAreaTablet color_white_div_bg">
		<div class="container">
			<div class="breadcrumb">
<span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="http://www.cision.com/us/?&amp;nav_location=breadcrumb" itemprop="url"><span itemprop="title">Home →</span></a></span>
Additional Information for Californian Consumers</div>
			<div class="wd_region-nav">
			<select onchange="window.open(this.value,'_self');">
				<option value="https://gdpr.cision.de">German</option>
				<option value="https://gdpr.cision.fr">French</option>
				<!-- <option value="https://gdpr.cision.se">Swedish</option>
				<option value="https://gdpr.cision.fi">Finnish</option> -->
				<option value="https://gdpr.cision.com" selected="selected">English</option>
				<option value="https://gdpr.cision.pt">Portuguese</option>
			</select>
			</div>
		</div>
	</div>

	<div class="communicationCloud">
	<section class="communications-cloud">
		<div class="container">
			<div class="row">
			    <div class="col-md-3 wd_navarea">
				    <div class="navigation">
					<ul class="cis_hidecousins">
						<li><a href="https://gdpr.cision.com/gdpr" target="_self">Data Privacy</a></li>
<li><a href="https://gdpr.cision.com/dataprivacynotice_customersprospects" target="_self">Customer Privacy Notice</a></li>
<li><a href="https://gdpr.cision.com/dataprivacynotice_influencers" target="_self">Data Privacy Notice  - Journalists and Other Influencers</a></li>
<li><a href="https://gdpr.cision.com/PRN-Consumer-Newsletter" target="_self">PRN Consumer Newsletter</a></li>
<li><a href="https://gdpr.cision.com/Cisions-Acquisition-of-Brandwatch-FAQs" target="_self">Cision's Acquisition of Brandwatch - FAQs</a></li>
<li><a href="https://gdpr.cision.com/Connectively-Data-Privacy-Notice" target="_self">Connectively Data Privacy Notice</a></li>
<li><a href="https://gdpr.cision.com/Help-A-Reporter-Out-Data-Privacy-Notice" target="_self">Help A Reporter Out Data Privacy Notice</a></li>
<li><a href="https://gdpr.cision.com/Cision-Jobs-Board-Journalism-and-PR-Roles-Privacy-Notice" target="_self">Cision Jobs Board (Journalism and PR Roles) Privacy Notice</a></li>
<li><a href="https://gdpr.cision.com/index.php?s=34148" target="_self">China PIPL</a></li>
<li class="current-page"><a href="https://gdpr.cision.com/additional-information-for-californian-consumers" target="_self">Additional Information for Californian Consumers</a></li>
<li><a href="https://gdpr.cision.com/Brasil-LGPD" target="_self">Brasil LGPD</a></li>
<li><a href="https://gdpr.cision.com/technicalorgmeasures" target="_self">Technical and Organizational Measures</a></li>
<li><a href="https://www.cision.com/us/legal/cookie-policy.html" target="_blank">Cookie Policy </a></li>
<li><a href="https://www.cision.com/us/legal/privacy-policy/cookie-settings/" target="_blank">Cookie Settings</a></li>
<li><a href="https://gdpr.cision.com/contacts" target="_self">Media Contacts</a></li>
<li><a href="https://gdpr.cision.com/legalentities" target="_self">Cision Legal Entities</a></li>
<li><a href="https://gdpr.cision.com/European-Data-Supervisory-Authorities" target="_self">Global Supervisory Authorities </a></li>
<li><a href="https://gdpr.cision.com/thirdpartyinfluencerdata" target="_self">Third Parties Influencer Data Transfer</a></li>
<li><a href="https://gdpr.cision.com/Sub-Processors" target="_self">Sub Processors</a></li>
<li><a href="https://gdpr.cision.com/Subscription_Preferences" target="_self">Subscription Preferences</a></li>
<li><a href="https://privacyportal-uk.onetrust.com/webform/d2cb5e2f-e4f8-4ada-be9f-38f2e699fd45/3216c7cb-cf10-465b-84f8-867628ba5273" target="_blank">Data Subject Request</a></li>
<li><a href="https://gdpr.cision.com/International-Data-Transfers-August-2021-FAQs" target="_self">International Data Transfers and Assessment</a></li>
<li><a href="https://gdpr.cision.com/index.php?s=20328" target="_self">The Consequences of Brexit</a></li>
<li><a href="https://gdpr.cision.com/Client-Data-Privacy-Obligations" target="_self">Client Data Privacy Obligations</a></li>
<li><a href="https://gdpr.cision.com/YouTube-Terms-of-Service" target="_self">YouTube Terms of Service</a></li>
					</ul>
										</div>
			    </div>
				<div class="col-md-9 wd_contentarea">
				<div id="wd_printable_content"><p><strong><u>Additional </u></strong><strong><u>Information for California Consumers</u></strong></p>

<p>To listen to the Audio version of this page please <u><a href="https://www.cision.com/content/dam/cision/legal/CCPA_RECORDING_121919_MB.mp3" target="_blank">download the file</a></u>.</p>

<p>Under the California Consumer Privacy Act (&ldquo;CCPA&rdquo;), we are required to notify California consumers about our collection, use, and disclosure of their personal information (whether collected through this website or offline).&nbsp; In this section of our Policy, and in accordance with the CCPA, &ldquo;personal information&rdquo; includes any information that identifies, relates to, describes, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household, including the categories identified in the table below to the extent they identify, relate to, describe, are capable of being associated with, or could be reasonably linked, directly or indirectly, with a particular consumer or household.</p>

<p>This Policy does not apply to applicants for positions at Cision.</p>

<p><strong>Categories of Personal Information that We Collect, Disclose, and Sell </strong></p>

<p>Below please find the categories of personal information about California residents that we collect, sell, and/or disclose to third parties or service providers for a business purpose.</p>

<table border="1" cellpadding="0" cellspacing="0" style="width:635px;" width="635">
	<tbody>
		<tr>
			<td style="width: 427px; height: 65px; vertical-align: top;">
			<p><strong>Categories of personal information </strong></p>

			<p><strong>Last Updated: 15th November 2019</strong></p>
			</td>
			<td style="width: 67px; height: 65px; vertical-align: top;">
			<p><strong>Do we collect? </strong></p>
			</td>
			<td style="width: 76px; height: 65px; vertical-align: top;">
			<p style="margin-left:6.65pt;"><strong>Do we disclose for business purpose?</strong></p>
			</td>
			<td style="width: 64px; height: 65px; vertical-align: top;">
			<p><strong>Do we sell?</strong></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 65px; vertical-align: top;">
			<p><strong>INFLUENCER NAME, CONTACT INFORMATION AND IDENTIFIERS:</strong> Identifiers such as a real name, alias, postal address, unique personal identifier, email address, social media handles, work history and education history.</p>
			</td>
			<td style="width: 67px; height: 65px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 65px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 65px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 28px; vertical-align: top;">
			<p><strong>COMMERCIAL CUSTOMER RECORDS</strong>: Paper and electronic customer records containing personal information, such as name, signature, work email address and work contact details ,</p>
			</td>
			<td style="width: 67px; height: 28px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 28px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 64px; height: 28px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 28px; vertical-align: top;">
			<p><strong>PROTECTED CLASSIFICATIONS</strong>: Characteristics of protected classifications under California or federal law such as race, color, sex, age, religion, national origin, disability, citizenship status, and genetic information.</p>
			</td>
			<td style="width: 67px; height: 28px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 76px; height: 28px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 28px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 47px; vertical-align: top;">
			<p><strong>COMMERCIAL CUSTOMER purchase history and tendencies</strong>:&nbsp; Commercial information, , products or services purchased, obtained, or considered, or other purchasing histories or tendencies.</p>
			</td>
			<td style="width: 67px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 76px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 18px; vertical-align: top;">
			<p><strong>Biometric information</strong>: physiological, biological or behavioral characteristics that can be used alone or in combination with each other to establish individual identity, including DNA, imagery of the iris, retina, fingerprint, face, hand, palm, vein patterns, and voice recordings, keystroke patterns or rhythms, gait patterns or rhythms, and sleep, health, or exercise data that contain identifying information.</p>
			</td>
			<td style="width: 67px; height: 18px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 18px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 18px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 47px; vertical-align: top;">
			<p><strong>USAGE DATA</strong>: Internet or other electronic network activity information, including, but not limited to, browsing history, search history, and information regarding a resident&rsquo;s interaction with an internet website, application, or advertisement.</p>
			</td>
			<td style="width: 67px; height: 47px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 47px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 64px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 18px; vertical-align: top;">
			<p><strong>GEOLOCATION DATA</strong>: Precise geographic location information about a particular individual or device</p>
			</td>
			<td style="width: 67px; height: 18px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 76px; height: 18px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 18px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 19px; vertical-align: top;">
			<p><strong>AUDIO/VISUAL</strong>:, visual,</p>
			</td>
			<td style="width: 67px; height: 19px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 19px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 19px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 19px; vertical-align: top;">
			<p><strong>EMPLOYMENT HISTORY</strong>: Professional or employment-related information.</p>
			</td>
			<td style="width: 67px; height: 19px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 19px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 19px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 47px; vertical-align: top;">
			<p><strong>EDUCATION INFORMATION</strong>: Information that is not publicly available personally identifiable information as defined in the federal Family Educational Rights and Privacy Act (20 U.S.C. section 1232g, 34 C.F.R. Part 99).</p>
			</td>
			<td style="width: 67px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 76px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 47px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
		</tr>
		<tr>
			<td style="width: 427px; height: 48px; vertical-align: top;">
			<p><strong>PROFILES AND INFERENCES: </strong>Inferences drawn from any of the information identified above to create a profile about a resident reflecting the resident&rsquo;s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.</p>
			</td>
			<td style="width: 67px; height: 48px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
			<td style="width: 76px; height: 48px; vertical-align: top;">
			<p align="center"><em>NO</em></p>
			</td>
			<td style="width: 64px; height: 48px; vertical-align: top;">
			<p align="center"><em>YES</em></p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>Purposes for Collecting and Using Personal Information</strong></p>

<p>Generally, we may use the above categories of personal information for the following purposes:</p>

<ul>
	<li>To verify your identify and entitlements to our products and services when you contact us or access our services.</li>
	<li>To protect you from fraud prevention and detection.</li>
	<li>To supply services to you and manage your subscriptions.</li>
	<li>To send statements and invoices to you and collect payments from you.</li>
	<li>To provide commercial quotes to you.</li>
	<li>For statistical analysis (e.g. on the use of our websites).</li>
	<li>To operate and improve our websites and services.</li>
	<li>To supply services to you and manage your subscriptions.</li>
	<li>To notify you of any changes to our websites or our services and products which may affect you.</li>
	<li>To provide you with technical and customer support.</li>
	<li>To ask your opinion or feedback on our services or industry questions.</li>
	<li>To ensure seamless access to all of our applications to which you have subscribed.</li>
	<li>To enforce our legal rights or comply with legal requirements.</li>
	<li>To provide improved website and product experience and communications informed by your product subscriptions and/or data collected.</li>
	<li>To create a repository of data regarding influencers (the media database) from publicly available websites and third parties, and make that media database available to our enterprise customers on a paying basis.</li>
</ul>

<p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>

<ul>
	<li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
	<li>Where we need to comply with a legal or regulatory obligation.</li>
	<li>Where it is in our legitimate interests,&nbsp;including our commercial interests in operating the Cision customer facing platforms, and providing you with access to our Media Database.&nbsp;We make sure that we consider and balance any potential negative impact on you and your rights before we process your personal data.</li>
</ul>

<p><strong>California Residents&rsquo; Rights</strong></p>

<p>California law grants California residents certain rights and imposes restrictions on particular business practices as set forth below. California consumers have the right to request that we disclose what personal information we collect, use, disclose, and sell about you. Any California Resident, including any Influencers, who are part of our media database, may inquire about the personal information we collect about them, request deletion of personal records, and/ or seek to opt out of sales of their personal information through the Do Not Sell provision listed below in this section.&nbsp; For more information about our Influencer collection practices, visit&nbsp; <a href="https://gdpr.cision.com/dataprivacynotice_influencers">https://gdpr.cision.com/dataprivacynotice_influencers</a></p>

<p><strong><em>Do-Not-Sell</em></strong>.&nbsp; California residents have the right to opt-out of our sale of their personal information.</p>

<p>Opt-out rights can be exercised via our Do-Not-Sell options: email <a href="mailto:Privacy@cision.com">Privacy@cision.com</a>, call toll-free on877-297-8921 or visit &nbsp;our website <a href="https://cision.service-now.com/gdpr?id=dsr_entry_form&amp;lang=en">here</a>. We do not sell personal information about residents who we know are younger than 16 years old without opt-in consent.</p>

<p><strong><em>Verifiable </em></strong><strong><em>Requests for Copy, Deletion and Right to Know. </em></strong>Subject to certain exceptions, California consumers have the right to make the following requests, at no charge, up to twice every 12 months. Please see <u>Submitting Requests</u> section below for instructions about how to exercise your rights:</p>

<p style="margin-left:.25in;"><u>Deletion</u>: The right to request deletion of their personal information that we have collected about them, subject to certain exemptions, and to have such personal information deleted, except where necessary that we maintain such personal information in order to:</p>

<ul>
	<li>Complete the transaction for which the personal information was collected, provide a good or service requested by the consumer, or reasonably anticipated within the context of a business&rsquo;s ongoing business relationship with the consumer, or otherwise perform a contract between the business and the consumer.</li>
	<li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity.</li>
	<li>Debug to identify and repair errors that impair existing intended functionality.</li>
	<li>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law.</li>
	<li>Comply with the California Electronic Communications Privacy Act pursuant to Chapter 3.6 (commencing with Section 1546) of Title 12 of Part 2 of the Penal Code.</li>
	<li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the businesses&rsquo; deletion of the information is likely to render impossible or seriously impair the achievement of such research, if the consumer has provided informed consent.</li>
	<li>Enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer&rsquo;s relationship with the business.</li>
	<li>Comply with a legal obligation.</li>
	<li>Otherwise use the consumer&rsquo;s personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information.</li>
</ul>

<p style="margin-left:.25in;"><u>Copy</u>: The right to request a copy of the specific pieces of personal information that we have collected about them in the prior 12 months.</p>

<p style="margin-left:.25in;"><u>Right to Know (Collection)</u>: Where we have collected their personal information, the right to request that we disclose certain information about how we have handled their personal information in the prior 12 months, including: the categories of personal information collected; categories of sources of personal information; business and/or commercial purposes for collecting and selling their personal information; and the categories of third parties/with whom we have disclosed or shared their personal information.</p>

<p style="margin-left:.25in;"><u>Right to Know (Disclosure and Sale)</u>: Where we have sold or disclosed for a business purpose their personal information, the right to request that we disclose certain information about how we have handled their personal information in the prior 12 months, including: the categories of personal information collected; categories of third parties to whom the consumer&rsquo;s personal information has been sold and the specific categories of personal information sold to each category of third party; categories of third parties to whom personal information has been disclosed; and the categories personal information that we have disclosed or shared with a third party for a business purpose.</p>

<p><strong><em>Submitting Requests. </em></strong>You may exercise your rights by doing one of the following:</p>

<ul>
	<li>Emailing us at Privacy@Cision.com</li>
	<li>Contacting us at 877-297-8921 (toll free)</li>
	<li>Clicking <a href="https://cision.service-now.com/gdpr?id=dsr_entry_form&amp;lang=en">here</a></li>
</ul>

<p>We will respond to your Copy and Right to Know requests within 45 days.</p>

<p>When you submit your request, we will take steps to attempt to verify your identity. We will seek to match the information in your request to the personal information we maintain about you. As part of our verification process, we may ask you to submit additional information, use identity verification services to assist us, or if you have set up an account on our website, we may ask you to sign in to your account as part of our identity verification process. Please understand that, depending on the type of request you submit, to protect the privacy and security of your personal information, we will only complete your request when we are satisfied that we have verified your identity to a reasonably degree of certainty.</p>

<p><strong><em>Authorized Agents.</em></strong> The CCPA allows California consumers to designate an authorized agent to exercise their rights under CCPA. &nbsp;If Cision receives a request from an agent, then Cision has the right to verify with the data subject that the data subject indeed wants to take the action requested by the agent and will do so by contacting the data subject directly.</p>

<p><strong><em>Incentives and Discrimination</em></strong><em>. </em>The CCPA prohibits discrimination against California residents for exercising their rights under the CCPA and imposes requirements on any financial incentives offered to California residents related to their personal information.&nbsp;</p>

<p><u>Discrimination</u>: If consumers exercise their rights under CCPA, businesses may not discriminate against them including by denying or providing a different level or quality of goods or services or charging or suggesting that a business will charge different prices or rates or impose penalties, unless doing so is reasonably related to the value provided to the consumer by the consumer&rsquo;s data.</p>

<p><u>Disclosure of Incentives</u>: If businesses offer any financial incentives for the collection, sale, or retention&nbsp;of their personal information, residents have the right to be notified of&nbsp;financial incentives&nbsp;and their material terms, the right not be included in such offers without prior informed opt-in consent, and the right to be able to opt-out of such offers at any time. Businesses may not offer unjust, unreasonable, coercive or usurious financial incentives.&nbsp;You can opt-out of Cision selling your&nbsp;personal information at any time by emailing&nbsp;<a href="mailto:Privacy@cision.com" target="_blank">Privacy@cision.com</a>&nbsp;or calling toll-free on 877-297-8921.&nbsp;</p>

<p style="margin-left:1.0in;">&nbsp;</p>

<p><strong>California Privacy Rights under California&rsquo;s Shine-the-Light Law </strong></p>

<p>Under California&rsquo;s &ldquo;Shine the Light&rdquo; law (Cal. Civ. Code &sect; 1798.83), California residents who provide us certain personal information are entitled to request and obtain from us, free of charge, information about the personal information (if any) we have shared with third parties for their own direct marketing use.&nbsp; Such requests may be made once per calendar year for information about any relevant third party sharing in the prior calendar year. California residents who would like to make such a request may submit a request in writing to <a href="mailto:Privacy@cision.com">Privacy@cision.com</a> or through our Resident Rights page <a href="https://cision.service-now.com/gdpr?id=dsr_entry_form&amp;lang=en">here</a>.</p>

<p>The request should attest to the fact that the requester is a California resident, and provide a current California address.&nbsp;&nbsp;</p>

<p><strong>California Privacy Rights Statistics</strong></p>

<p>Businesses subject to CCPA who process the personal information of 4 million California consumers are required to make available certain statistical information about the number of privacy rights requests they receive.</p>

<p>The privacy rights requests made to Cision under the CCPA for the 12 months starting from 2nd July 2022 to 1st July 2023.&nbsp;</p>

<ul>
	<li><strong>The number of requests to know (access requests) that the business received, complied with in whole or in part, and denied;&nbsp;&nbsp;</strong>

	<ul>
		<li><strong>Complied: 3&nbsp;</strong></li>
		<li><strong>Denied: 0&nbsp;</strong><br />
		&nbsp;</li>
	</ul>
	</li>
	<li><strong>The number of requests to delete (erasure requests) that the business received, complied with in whole or in part, and denied;&nbsp;&nbsp;</strong>
	<ul>
		<li><strong>Complied: 46&nbsp;</strong></li>
		<li><strong>Denied: 0&nbsp;</strong><br />
		&nbsp;</li>
	</ul>
	</li>
	<li><strong>The number of requests to opt-out that the business received, complied with in whole or in part, and denied; and&nbsp;&nbsp;</strong>
	<ul>
		<li><strong>Complied: 18&nbsp;</strong></li>
		<li><strong>Denied: 0&nbsp;</strong><br />
		&nbsp;</li>
	</ul>
	</li>
	<li><strong>The median or mean number of days within which the business substantively responded to requests to know, requests to delete, and requests to opt-out.&nbsp;&nbsp;</strong>
	<ul>
		<li><strong>Mean number of days: 9&nbsp;</strong></li>
	</ul>
	</li>
</ul>

<p><strong>Contact Us</strong></p>

<p>If you have questions about our privacy practices or would like to make a complaint, please contact us at <a href="mailto:Privacy@cision.com">Privacy@cision.com</a></p>

<p>This privacy notice was last updated on 11th November 2019.</p>

<p>&nbsp;</p>

<div class="wd_standard">
<div class="wd_toolbar wd_toolbar-main"><ul class="wd_tools"><li class="wd_tool wd_tool-print"><span class="wd_tool_icon"><a onclick="view_printable(); return false;" rel="nofollow" href="#print" title="print"><span class="fa fa-print"></span></a></span></li><li class="wd_tool wd_tool-socialshare_facebook"><span class="wd_tool_icon">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgdpr.cision.com%2Findex.php%3Fs%3D20316" target="_blank" title="Facebook Share" style="background-color:#4267B2;">
                    <span class="fa fa-facebook"></span>
		    <span class="wd_sr-only wd_sr-only-focusable"></span>
                    </a>
                </span></li><li class="wd_tool wd_tool-socialshare_linkedin"><span class="wd_tool_icon">
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fgdpr.cision.com%2Findex.php%3Fs%3D20316" target="_blank" title="Linkedin Share" style="background-color:#0077B5;">
                    <span class="fa fa-linkedin"></span>
		    <span class="wd_sr-only wd_sr-only-focusable"></span>
                    </a>
                </span></li><li class="wd_tool wd_tool-socialshare_twitter"><span class="wd_tool_icon">
                    <a href="https://twitter.com/share?url=https%3A%2F%2Fgdpr.cision.com%2Findex.php%3Fs%3D20316" target="_blank" title="Twitter Share" style="background-color:#000;">
                    <span class="fa fa-twitter"></span>
		    <span class="wd_sr-only wd_sr-only-focusable"></span>
                    </a>
                </span></li><li class="wd_tool wd_tool-email"><span class="wd_tool_icon"><a onclick="window.location.href = 'mailto:?subject=Cision%20GDPR%20-%20Additional%20Information%20for%20Californian%20Consumers&amp;body='+encodeURIComponent(window.location.href);return false;" href="#email" title="email"><span class="fa fa-envelope"></span></a></span></li></ul></div>
</div>
</div>				</div>
			</div>
		</div>
	</section>
	</div>

	
</main>

<div class="footer">
	<div id="footer-middle">
		<div class="footer-middle">
			<div class="showDesktopHeader hidden-sm">
				<div class="container">
						<div class="row">
							<div class="col-md-3 col-sm-6">
								<div class="footer-pad">
									<div class="footerContact">
										<div class="showDesktopHeader hidden-sm hidden-xs">
										  <h3 style="margin-bottom: 25px;">Contact Cision</h3>
											<li class="list-unstyled">
												<div class="pull-left mobile-icon">
													<i class="fa fa-mobile"></i>
												</div>
													<p class="contact-us">1-877-297-8912<br>from 8 AM - 5 PM CT</p>
											</li>
										</div>
										<div class="mobilefootershow">
											<li class="hidden-sm hidden-lg hidden-md">
												<a href="tel:1-877-297-8912?nav_location=footer" class="phone-view">
														<i class="fa fa-mobile"></i>1-877-297-8912<br>from 8 AM - 5 PM CT
												</a>
											</li>
										</div>
									</div>
									<div class="customrte">
									<ul class="list-unstyled">
										<li><a href="https://www.cision.com/us/contact-us/support/">Client Support</a></li>
										<li><a href="https://www.cision.com/us/request-demo/">Request a Demo</a></li>
										<li><a href="https://www.cision.com/us/about/media-kit/">Press Inquiries</a></li>
									</ul>
									</div>
									<div class="footerSocial">
									<ul class="list-inline social-icons">
										<li class="list-unstyled">
										</li><li class="cision-icons"><a href="https://twitter.com/cision?nav_location=footer" title="Connect on Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
										<li class="cision-icons"><a href="https://www.facebook.com/CisionGlobal?nav_location=footer" title="Connect on Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
										<li class="cision-icons"><a href="https://www.linkedin.com/company/cision?nav_location=footer" title="Connect on LinkedIn" target="_blank"><i class="fa fa-linkedin"></i></a></li>
										<li class="cision-icons"><a href="https://www.youtube.com/user/CisionNA?nav_location=footer" title="Connect on YouTube" target="_blank"><i class="fa fa-youtube"></i></a></li>
										<li class="cision-icons"><a href="https://www.instagram.com/cisionglobal/?nav_location=footer" title="Connect on Instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
									</ul>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="footer-pad">
									<div class="list">
										<div class="footer-pad">
										<h3>Products</h3>
										<ul class="list-unstyled">
											<li>
												<a href="https://www.cision.com/us/products/?nav_location=footer">
													Communications Cloud		     
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/products/database/?nav_location=footer">
													Database
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/products/distribution/?nav_location=footer">
													Distribution
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/products/monitoring/?nav_location=footer">
													Monitoring
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/products/analytics/?nav_location=footer">
													Analytics
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/products/impact/?nav_location=footer">
													Impact
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/global-insights/?nav_location=footer">
													Insights
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/products/government-relations/?nav_location=footer">
													Government Relations
												</a>
											</li>
										</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="footer-pad">
									<div class="list">
										<div class="footer-pad">
										<h3>About</h3>
										<ul class="list-unstyled">
											<li>
												<a href="https://www.cision.com/us/about/?nav_location=footer">
													About Cision
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/about/media-kit/?nav_location=footer">
													Media Kit
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/about/news/?nav_location=footer">
													Press Releases
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/about/in-the-news/?nav_location=footer">
													In the News
												</a>
											</li>
											<li>
												<a href="http://investors.cision.com/index.php?nav_location=footer" target="_blank">
													Investors
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/about/global-leadership-team/">
													Global Leadership Team
												</a>
											</li>
										</ul>
										</div>
									</div>
									<div class="footerDropdown">
										<li class="list-unstyled dropup globalList">
											<a href="#" data-toggle="dropdown">Global Sites<span>
											<i class="fa fa-angle-up fa fa-angle-up bt-angle-down bt-angle-up"></i></span>
											</a>
											<ul class="dropdown-menu contact-menu">
												<li><a href="http://www.cision.ca/?nav_location=footer?nav_location=footer" target="_self">Canada (EN)</a></li>
												<li><a href="http://www.cision.ca/fr/?nav_location=footer?nav_location=footer" target="_self">Canada (FR)</a></li>
												<li><a href="http://www.cision.fi/?nav_location=footer?nav_location=footer" target="_self">Finland </a></li>
												<li><a href="http://www.cision.fr/?nav_location=footer?nav_location=footer" target="_self">France </a></li>
												<li><a href="http://www.cision.de/?nav_location=footer?nav_location=footer" target="_self">Germany </a></li>
												<li><a href="http://www.cision.nl/?nav_location=footer?nav_location=footer" target="_self">Netherlands </a></li>
												<li><a href="http://www.cision.no/?nav_location=footer?nav_location=footer" target="_self">Norway </a></li>
												<li><a href="http://www.cision.pt/?nav_location=footer?nav_location=footer" target="_self">Portugal </a></li>
												<li><a href="http://www.cision.se/?nav_location=footer?nav_location=footer" target="_self">Sweden </a></li>
												<li><a href="http://www.cision.co.uk/?nav_location=footer?nav_location=footer" target="_self">United Kingdom </a></li>
											</ul>
										</li>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-sm-6">
								<div class="footer-pad">
									<div class="list">
										<div class="footer-pad">
										<h3>My Services</h3>
										<ul class="list-unstyled">
											<li>
												<a href="https://app.cision.com/?nav_location=footer">
													Cision Communications Cloud®		
												</a>
											</li>
											<li class="wd_footer_clientsupport">
												<a href="https://www.cision.com/us/contact-us/support/?nav_location=footer">
													Client Support
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/contact-us/update-add-media-profile/?nav_location=footer">
													Update Media Profile
												</a>
											</li>
											<li>
												<a href="https://www.cision.com/us/contact-us/update-outlet-profile/?nav_location=footer">
													Update Outlet Profile
												</a>
											</li>
											<li><a href="https://www.cision.com/us/contact-us/update-add-media-profile/?nav_location=footer">Remove Media Profile</a></li>
											<li><a href="https://www.cisionjobs.com/?nav_location=footer">Journalist &amp; PR Jobs</a></li>
										</ul>
										</div>
										<div class="customrte">
											<h6>Do not sell or share my personal information:</h6>
											<h6>
												<ul>
													<li>Submit via <a href="mailto:Privacy@cision.com">Privacy@cision.com</a></li>
													<li>Call Privacy toll-free number: 877-297-8921</li>
												</ul>
											</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mobilefootershow">
					<div class="hidden-lg hidden-md">
					<ul>
						<li>
						<a href="https://www.cision.com/us/contact-us/?nav_location=footer">Contact Cision</a>
						</li>
						<li>
						<a href="https://www.cision.com/us/products/?nav_location=footer">Products</a>
						</li>
						<li>
						<a href="https://www.cision.com/us/about/?nav_location=footer">About</a>
						</li>
						<li class="list-unstyled dropup">
							<a href="#" data-toggle="dropdown">My Services<span>
							<i class="fa fa-angle-up fa fa-angle-up bt-angle-down bt-angle-up"></i></span>
							</a>
							<ul class="dropdown-menu contact-menu">
								<li><a href="https://www.cision.com/us/products/?nav_location=footer" target="_self">Cision Communications Cloud®</a></li>
								<li><a href="https://www.cision.com/us/contact-us/support/?nav_location=footer" target="_self">Client Support</a></li>
								<li><a href="https://www.cision.com/us/contact-us/update-add-media-profile/?nav_location=footer" target="_self">Update Media Profile</a></li>
								<li><a href="https://www.cision.com/us/contact-us/update-outlet-profile/?nav_location=footer" target="_self">Update Outlet Profile</a></li>
								<li><a href="https://www.cision.com/us/contact-us/update-add-media-profile/?nav_location=footer">Remove Media Profile</a></li>
							</ul>	
						</li>	
						<div class="customrte customrte_mobile-footer">
							<h6>Do not sell my personal information:</h6>
							<h6>
								<ul>
									<li>Submit via <a href="mailto:Privacy@cision.com">Privacy@cision.com</a></li>
									<li>Call Privacy toll-free number: 877-297-8921</li>
								</ul>
							</h6>
						</div>	
						<li class="wd_mobile_contactinfo">
							<a href="tel:1-877-297-8912?nav_location=footer" class="phone-view">
									<i class="fa fa-mobile"></i>1-877-297-8912<br>from 8 AM - 5 PM CT
							</a>
						</li>
						<div class="showDesktopHeader hidden-sm hidden-xs">
						  <h3>Contact Cision</h3>

							

								<li class="list-unstyled">
									<div class="pull-left mobile-icon">
										<i class="fa fa-mobile"></i>
									</div>
										<p class="contact-us">1-877-297-8912<br>from 8 AM - 5 PM CT</p>
								</li>
						</div>
						<div class="mobilefootershow">
							<li class="hidden-sm hidden-lg hidden-md">
								<a href="tel:1-877-297-8912?nav_location=footer" class="phone-view">
										<i class="fa fa-mobile"></i>1-877-297-8912<br>from 8 AM - 5 PM CT
								</a>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="navigationFooter">
	<footer class="footer-container" id="socket">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-6 col-lg-6 col-xs-12">
				<div class="menu-copyright">
					<ul id="menu-copyright-footer-menu" class="menu">
						<li id="menu-item" class="menu-item-copyright">
							<a href="https://www.cision.com/us/legal/?nav_location=footer">
								Legal
							</a>
						</li>
						<li id="menu-item" class="menu-item-copyright">
							<a href="https://www.cision.com/us/contact-us/opt-out/?nav_location=footer">
								Cision ID Opt-Out
							</a>
						</li>
						<li id="menu-item" class="menu-item-copyright">
							<a href="https://www.cision.com/us/legal/privacy-policy/?nav_location=footer">
								Privacy Policy
							</a>
						</li>
						<li id="menu-item" class="menu-item-copyright">
							<a href="https://www.cision.com/us/legal/cookie-policy/?nav_location=footer">
								Cookie Policy
							</a>
						</li>
						<li id="menu-item" class="menu-item-copyright">
							<a href="https://www.cision.com/us/legal/privacy-policy/cookie-settings/?nav_location=footer">
								Cookie Settings
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-4 col-sm-4 col-lg-6 col-xs-12">
			<span class="copyright">Copyright © 2024 Cision Ltd.<br></span>
			</div>
		</div>
	  </div>
	  <div class="scrolltop">
		<div class="hidden-xs">
			<div class="scroll icon" style="display: none;">
			<i class="fa fa-4x fa-angle-up"></i>
			</div>
		</div>
	  </div>
	</footer>
</div>
<script type="text/javascript" data-cfasync="false" src="js/footer.js"></script><div class="triblio-scripts" style="height: 0px;"></div><div class="triblio-scripts" style="height: 0px;"><script type="text/javascript" data-cfasync="false">(function(w,d,s,src){w["TriblioAnalyticsObject"] = {uid: "RwngAvG2XGHkPPnD3AZm",site: "jl8"};var tag = d.createElement(s);var lastScript = d.getElementsByTagName(s)[0];tag.async = 1;tag.src = src;tag.setAttribute("data-cfasync","false");lastScript.parentNode.insertBefore(tag, lastScript);})(window, document, "script", "//tribl.io/analytics-f.js");</script></div>

<!-- begin spin_special_output(body_end) -->
<script wd_script_id="piwik_tracking_code"></script>
<!-- Piwik Tracking Code -->
<script type="text/javascript">
  var _paq = _paq || [];

  _paq.push(["setCustomVariable", 1, "Content Type", "Standard", "page"]);

  _paq.push(["setCustomVariable", 3, "Navigation Page", "Additional Information for Californian Consumers", "page"]);

  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function() {
    var u="//stats.drivetheweb.com/";
    _paq.push(["setTrackerUrl", u+"piwik.php"]);
    _paq.push(["setSiteId", 4698]);
    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
    g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript>
	<img src="https://stats.drivetheweb.com/piwik.php?idsite=4698&rec=1" style="border:0" alt="" />
</noscript>
<!-- End Piwik Tracking Code -->
		
<!-- end spin_special_output(body_end) -->
<script>(function(){var js = "window['__CF$cv$params']={r:'84f77e60ffad28de',t:'MTcwNjkyOTk2MS4xMjgwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>
