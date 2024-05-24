(()=>{var a=class{constructor(n){return this.cio=n,this._loadGist(),this}_loadGist(){let n=document.getElementById("cio-tracker");if(!n){this.cio._warn("cio-tracker script not present.");return}let r=n.getAttribute("data-site-id");if(!r){this.cio._warn("site-id can't be empty. please set data-site-id.");return}if(window.Gist){this._init(r);return}let s=document.createElement("script"),i=document.getElementsByTagName("script")[0];s.async=!0,s.onload=function(){this._init(r)}.bind(this),s.src="https://code.gist.build/web/latest/gist.min.js",i.parentNode.insertBefore(s,i)}initialized(){return this._initialized}identify(n){if(!this.initialized()){this.cio._warn("in-app indentify() called before in-app has initialized.");return}window.Gist.setUserToken(n)}reset(){this.initialized()&&window.Gist.clearUserToken()}page(n){this.initialized()&&window.Gist.setCurrentRoute(n)}_init(n){if(this.initialized())return;window.Gist.setup({siteId:n,env:"prod",dataCenter:"us"});let r=this.cio._findCustomer();r!=""?window.Gist.setUserToken(r):window.Gist.clearUserToken();let s=(i,e,t,o)=>{let d={type:"in_app",payload:{delivery_id:i,event:e,metadata:{action_name:t,action_value:o},timestamp:Date.now()/1e3}};fetch(this.cio._trackUrl+"/api/v1/cio_deliveries/events",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),keepalive:!0})};window.Gist.events.on("messageShown",i=>{var t,o,d,c;let e=(o=(t=i==null?void 0:i.properties)==null?void 0:t.gist)==null?void 0:o.campaignId;typeof e!="undefined"&&e!=""&&s(i.properties.gist.campaignId,"opened","",""),this.cio._eventBus.emit("in-app:message-opened",{messageId:i.messageId,deliveryId:(c=(d=i.properties)==null?void 0:d.gist)==null?void 0:c.campaignId})}),window.Gist.events.on("messageDismissed",i=>{var e,t;this.cio._eventBus.emit("in-app:message-dismissed",{messageId:i.messageId,deliveryId:(t=(e=i.properties)==null?void 0:e.gist)==null?void 0:t.campaignId})}),window.Gist.events.on("messageError",i=>{var e,t;this.cio._eventBus.emit("in-app:message-error",{messageId:i.messageId,deliveryId:(t=(e=i.properties)==null?void 0:e.gist)==null?void 0:t.campaignId})}),window.Gist.events.on("messageAction",i=>{var o,d,c,g,l,p;let e=(c=(d=(o=i==null?void 0:i.message)==null?void 0:o.properties)==null?void 0:d.gist)==null?void 0:c.campaignId,t=(g=i==null?void 0:i.message)==null?void 0:g.instanceId;i.action!="gist://close"&&typeof e!="undefined"&&e!=""&&s(i.message.properties.gist.campaignId,"clicked",i.name,i.action),this.cio._eventBus.emit("in-app:message-action",{messageId:i.message.messageId,deliveryId:(p=(l=i.message.properties)==null?void 0:l.gist)==null?void 0:p.campaignId,action:i.action,name:i.name,actionName:i.name,actionValue:i.action,message:{dismiss:function(){window.Gist.dismissMessage(t)}}})}),this._initialized=!0}};var I=window._cio;I&&I.notifyPluginLoaded(a);})();
0px) rotateX(-15deg);transform-origin:top;will-change:transform;box-shadow:4px 4px 24px rgba(52,52,70,0.16),1px 2px 2px rgba(52,52,70,0.01)}.uk-navbar-nav .uk-navbar-dropdown-grid{margin:0;display:flex;flex-wrap:nowrap}.uk-navbar-nav .uk-column{padding:2.5rem;background-color:var(--grey-100)}.uk-navbar-nav .uk-column:before{content:""!important;display:none!important}.uk-navbar-nav .uk-column .uk-nav .uk-parent>.uk-nav-sub{padding:0}.uk-navbar-nav .uk-first-column{background-color:transparent}.uk-navbar-nav .uk-navbar-dropdown-nav .uk-nav-sub{padding-left:0}.uk-navbar-nav .uk-navbar-dropdown-nav .uk-nav-sub a{padding:0}.uk-navbar-nav .uk-navbar-dropdown-nav .uk-nav-sub li{padding:0.75rem 0}.uk-navbar-nav .uk-navbar-dropdown-nav .uk-nav-header{padding:0;margin:0 0 0.25rem}.uk-navbar-nav .uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack){width:715px;display:block!important;left:0!important}.uk-navbar-nav .uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack) .uk-child-width-1-2>*{width:auto}.uk-navbar-nav .uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack) .custio-navColumn--wide{width:64%!important}.custio-navItem__description,.custio-navItem__title{line-height:1rem!important}.custio-navItem__description{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}.custio-navItem--has-icon{padding:0.25rem 0.375rem}.custio-navItem--has-icon .custio-navItem__description,.custio-navItem--has-icon .custio-navItem__title{line-height:1.25rem!important}@font-face{font-display:swap;font-family:'Poppins';font-style:normal;font-weight:400;src:url(https://customer.io/wp-content/themes/customer-io/fonts/font-bea2437c.woff2) format('woff2'),url(https://customer.io/wp-content/themes/customer-io/fonts/font-b26bc4c3.woff) format('woff')}@font-face{font-display:swap;font-family:'Poppins';font-style:normal;font-weight:500;src:url(https://customer.io/wp-content/themes/customer-io/fonts/font-e976ee29.woff2) format('woff2'),url(https://customer.io/wp-content/themes/customer-io/fonts/font-fa3c90a4.woff) format('woff')}@font-face{font-display:swap;font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://customer.io/wp-content/themes/customer-io/fonts/font-832b6ee1.woff2) format('woff2'),url(https://customer.io/wp-content/themes/customer-io/fonts/font-21d8b51e.woff) format('woff')}@font-face{font-display:swap;font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://customer.io/wp-content/themes/customer-io/fonts/font-cd5333c3.woff2) format('woff2'),url(https://customer.io/wp-content/themes/customer-io/fonts/font-af8673b2.woff) format('woff')}@font-face{font-display:swap;font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://customer.io/wp-content/themes/customer-io/fonts/font-ee57e61e.woff2) format('woff2'),url(https://customer.io/wp-content/themes/customer-io/fonts/font-72341145.woff) format('woff')}html{font-family:Roboto;font-size:16px;font-weight:400;line-height:1.6;-webkit-text-size-adjust:100%;background:#fff;color:#4b4b60;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}body{margin:0}a{color:#5721cc;text-decoration:none}iframe,img,svg{vertical-align:middle}img,svg{max-width:100%;height:auto;box-sizing:border-box}iframe{border:0}p,ul{margin:0 0 24px 0}*+p,*+ul{margin-top:24px}h1{margin:0 0 24px 0;font-family:Poppins;font-weight:400;color:#2f326a;text-transform:inherit}*+h1{margin-top:40px}h1{font-size:52px;line-height:1.2;font-weight:500}@media (min-width:700px){h1{font-size:40px}}ul{padding-left:50px}ul>li>ul{margin:0}hr{overflow:visible;text-align:inherit;margin:0 0 24px 0;border:0;border-top:2px solid #ebecf2}:focus{outline:0}:focus-visible{outline:2px dotted #2F326A}:root{--uk-breakpoint-s:640px;--uk-breakpoint-m:700px;--uk-breakpoint-l:1200px;--uk-breakpoint-xl:1600px}.uk-icon{margin:0;border:none;border-radius:0;overflow:visible;font:inherit;color:inherit;text-transform:none;padding:0;background-color:transparent;display:inline-block;fill:currentcolor;line-height:0}.uk-icon::-moz-focus-inner{border:0;padding:0}.uk-icon>*{transform:translate(0,0)}.uk-button{margin:0;border:none;overflow:visible;font:inherit;color:inherit;text-transform:none;-webkit-appearance:none;border-radius:0;display:inline-block;box-sizing:border-box;padding:0 38px;vertical-align:middle;font-size:12px;line-height:48px;text-align:center;text-decoration:none;font-family:Roboto;font-weight:700;text-transform:uppercase;letter-spacing:.5px;border-radius:4px;background-origin:border-box}.uk-button::-moz-focus-inner{border:0;padding:0}.uk-button-default{background-color:#fff;color:#2f326a;border:2px solid #ebebfc}.uk-button-primary{background-color:#5721cc;color:#fff;border:2px solid transparent}.uk-button-secondary{background-color:#0597ad;color:#fff;border:2px solid transparent}.uk-button-small{padding:0 20px;line-height:32px;font-size:12px;border-radius:4}.uk-section{display:flow-root;box-sizing:border-box;padding-top:40px;padding-bottom:40px}@media (min-width:700px){.uk-section{padding-top:72px;padding-bottom:72px}}.uk-section>:last-child{margin-bottom:0}.uk-section-default{background:#fff;background-repeat:no-repeat}.uk-container{display:flow-root;box-sizing:content-box;max-width:1300px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}@media (min-width:640px){.uk-container{padding-left:32px;padding-right:32px}}@media (min-width:700px){.uk-container{padding-left:40px;padding-right:40px}}.uk-container>:last-child{margin-bottom:0}.uk-container-expand{max-width:none}.uk-article{display:flow-root}.uk-article>:last-child{margin-bottom:0}.uk-article-title{font-size:30px;line-height:1.2;color:#2f326a;font-weight:400}@media (min-width:700px){.uk-article-title{font-size:45px}}.uk-dropbar{--uk-position-offset:0;--uk-position-shift-offset:0;--uk-position-viewport-offset:0;display:none;position:absolute;z-index:1020;box-sizing:border-box;padding:0 15px 20px 15px;background:#fff;color:#4b4b60}.uk-dropbar>:last-child{margin-bottom:0}@media (min-width:640px){.uk-dropbar{padding-left:32px;padding-right:32px}}@media (min-width:700px){.uk-dropbar{padding-left:40px;padding-right:40px}}.uk-dropbar-top{box-shadow:0 30px 50px -45px rgba(0,0,0,.15)}.uk-sticky{position:relative;box-sizing:border-box}.uk-sticky-fixed{z-index:980;margin:0!important;-webkit-backface-visibility:hidden;backface-visibility:hidden}:root{--uk-leader-fill-content:.}.uk-grid{display:flex;flex-wrap:wrap;margin:0;padding:0;list-style:none}.uk-grid>*{margin:0}.uk-grid>*>:last-child{margin-bottom:0}.uk-grid{margin-left:-32px}.uk-grid>*{padding-left:32px}@media (min-width:1200px){.uk-grid{margin-left:-40px}.uk-grid>*{padding-left:40px}}.uk-grid-divider>*{position:relative}.uk-grid-divider>:not(.uk-first-column)::before{content:"";position:absolute;top:0;bottom:0;border-left:2px solid #ebecf2}.uk-grid-divider{margin-left:-64px}.uk-grid-divider>*{padding-left:64px}.uk-grid-divider>:not(.uk-first-column)::before{left:32px}@media (min-width:1200px){.uk-grid-divider{margin-left:-80px}.uk-grid-divider>*{padding-left:80px}.uk-grid-divider>:not(.uk-first-column)::before{left:40px}}.uk-nav,.uk-nav ul{margin:0;padding:0;list-style:none}.uk-nav li>a{display:flex;align-items:center;column-gap:.25em;text-decoration:none}.uk-nav>li>a{padding:5px 10px}ul.uk-nav-sub{padding:5px 0 5px 15px}.uk-nav-sub a{padding:4px 0}.uk-nav-header{padding:5px 10px;text-transform:uppercase;font-size:12px}.uk-nav-default{font-size:16px;line-height:1.4}.uk-nav-default>li>a{color:#6f7488}.uk-nav-default>li.uk-active>a{color:#331673}.uk-navbar{display:flex;position:relative}.uk-navbar-container:not(.uk-navbar-transparent){background:#fff}.uk-navbar-left,.uk-navbar-right{display:flex;gap:15px;align-items:center}.uk-navbar-right{margin-left:auto}.uk-navbar-nav{display:flex;gap:0;margin:0;padding:0;list-style:none}.uk-navbar-left,.uk-navbar-right{flex-wrap:wrap}.uk-navbar-item,.uk-navbar-nav>li>a,.uk-navbar-toggle{display:flex;justify-content:center;align-items:center;column-gap:.25em;box-sizing:border-box;min-height:100px;font-size:15px;font-family:Roboto;text-decoration:none}.uk-navbar-nav>li>a{padding:0 20px;color:#4b4b60;position:relative;z-index:1}.uk-navbar-nav>li>a::before{content:"";display:block;position:absolute;z-index:-1;top:0;height:0;background-color:rgba(47,50,106,0);--uk-navbar-nav-item-line-margin-horizontal:0;left:var(--uk-navbar-nav-item-line-margin-horizontal);right:var(--uk-navbar-nav-item-line-margin-horizontal)}.uk-navbar-nav>li>a[aria-expanded=true]{color:#2f326a}.uk-navbar-nav>li>a[aria-expanded=true]::before{height:3px}.uk-navbar-item{padding:0 0;color:#4b4b60}.uk-navbar-item>:last-child{margin-bottom:0}.uk-navbar-toggle{padding:0 0;color:#2f326a}.uk-navbar-dropdown{display:none;position:absolute;z-index:1020;--uk-position-offset:10px;--uk-position-shift-offset:0px;--uk-position-viewport-offset:15px;box-sizing:border-box;width:250px;padding:0;background:#f7f8fa;color:#4b4b60;box-shadow:4px 4px 24px 5px rgba(52,52,70,.16)}.uk-navbar-dropdown>:last-child{margin-bottom:0}.uk-navbar-dropdown-grid{margin-left:-32px}.uk-navbar-dropdown-grid>*{padding-left:32px}.uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack){width:500px}.uk-navbar-dropdown-width-3:not(.uk-navbar-dropdown-stack){width:750px}.uk-navbar-dropdown-nav{margin-left:0;margin-right:0;font-size:12px}.uk-navbar-dropdown-nav .uk-nav-header{color:#2f326a;padding:12px 20px}.uk-navbar-dropdown-nav .uk-nav-sub a{color:#6f7488}.uk-navbar-dropdown-nav .uk-nav-sub{padding-left:0}@media (min-width:700px){.uk-navbar-left,.uk-navbar-right{gap:20px}}[class*=uk-child-width]>*{box-sizing:border-box;width:100%}.uk-child-width-1-2>*{width:50%}.uk-child-width-1-3>*{width:calc(100% * 1 / 3.001)}[class*=uk-width]{box-sizing:border-box;width:100%;max-width:100%}.uk-width-auto{width:auto}@media (min-width:640px){.uk-width-1-5\@s{width:20%}.uk-width-expand\@s{flex:1;min-width:1px}}@media (min-width:700px){.uk-width-1-1\@m{width:100%}}.uk-text-small{font-size:12px;line-height:1.5}.uk-text-uppercase{text-transform:uppercase!important}.uk-text-center{text-align:center!important}.uk-background-cover{background-position:50% 50%;background-repeat:no-repeat}.uk-background-cover{background-size:cover}.uk-background-bottom-center{background-position:50% 100%}.uk-background-norepeat{background-repeat:no-repeat}.uk-panel{display:flow-root;position:relative;box-sizing:border-box}.uk-panel>:last-child{margin-bottom:0}.uk-display-block{display:block!important}.uk-logo{font-size:24px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#2f326a;text-decoration:none}.uk-logo-inverse{display:none}.uk-flex{display:flex}.uk-flex-middle{align-items:center}.uk-flex-column{flex-direction:column}@media (min-width:640px){.uk-flex-first\@s{order:-1}}.uk-margin-top{margin-top:24px!important}.uk-margin-small{margin-bottom:16px}*+.uk-margin-small{margin-top:16px!important}.uk-margin-small-right{margin-right:16px!important}.uk-margin-medium{margin-bottom:40px}*+.uk-margin-medium{margin-top:40px!important}.uk-margin-auto-bottom{margin-bottom:auto!important}.uk-margin-auto-vertical{margin-top:auto!important;margin-bottom:auto!important}.uk-margin-remove-vertical{margin-top:0!important;margin-bottom:0!important}.uk-margin-remove-adjacent+*{margin-top:0!important}.uk-padding-small{padding:16px}.uk-padding-remove{padding:0!important}.uk-padding-remove-right{padding-right:0!important}.uk-padding-remove-vertical{padding-top:0!important;padding-bottom:0!important}:root{--uk-position-margin-offset:0px}@media (min-width:700px){.uk-hidden\@m{display:none!important}}@media (max-width:699px){.uk-visible\@m{display:none!important}}.uk-light{color:rgba(255,255,255,.7)}.uk-light a{color:#fff}html{overflow-y:scroll}body{overflow:hidden;overflow:clip}.tm-page{position:relative;z-index:0}.tm-header,.tm-header-mobile{position:relative}@media (min-width:640px){.tm-sidebar{min-width:200px}}.tm-height-min-1-1{min-height:100%}.tm-grid-expand>*{flex-grow:1}</style>
	<link rel="canonical" href="https://customer.io/learn/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Learn" />
	<meta property="og:description" content="Ready to Learn? Looking to use data more effectively? Want to review messaging best practices for your industry? These resources are for anyone who wants to learn to engineer better customer engagements and experiences for their customers." />
	<meta property="og:url" content="https://customer.io/learn/" />
	<meta property="og:site_name" content="Customer.io" />
	<meta property="article:modified_time" content="2023-04-28T15:31:51+00:00" />
	<meta property="og:image" content="https://customer.io/wp-content/uploads/2021/02/Customer.io_og_fullwidth.png" />
	<meta property="og:image:width" content="2400" />
	<meta property="og:image:height" content="1260" />
	<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary_large_image" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://customer.io/learn/","url":"https://customer.io/learn/","name":"Learn - Customer.io","isPartOf":{"@id":"https://customer.io/#website"},"primaryImageOfPage":{"@id":"https://customer.io/learn/#primaryimage"},"image":{"@id":"https://customer.io/learn/#primaryimage"},"thumbnailUrl":"https://customer.io/wp-content/uploads/2021/02/Customer.io_og_fullwidth.png","datePublished":"2022-02-25T15:52:38+00:00","dateModified":"2023-04-28T15:31:51+00:00","breadcrumb":{"@id":"https://customer.io/learn/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://customer.io/learn/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://customer.io/learn/#primaryimage","url":"https://customer.io/wp-content/uploads/2021/02/Customer.io_og_fullwidth.png","contentUrl":"https://customer.io/wp-content/uploads/2021/02/Customer.io_og_fullwidth.png","width":2400,"height":1260,"caption":"Build your dream messaging workflows with Customer.io"},{"@type":"BreadcrumbList","@id":"https://customer.io/learn/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://customer.io/"},{"@type":"ListItem","position":2,"name":"Learn"}]},{"@type":"WebSite","@id":"https://customer.io/#website","url":"https://customer.io/","name":"Customer.io","description":"Marketing Automation for the Whole Customer Lifecycle","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://customer.io/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"}]}</script>
	<!-- / Yoast SEO Premium plugin. -->


<link rel='dns-prefetch' href='//www.facebook.com' />
<link rel='dns-prefetch' href='//www.googleadservices.com' />
<link rel='dns-prefetch' href='//www.google.com' />
<link rel='dns-prefetch' href='//www.google.ca' />
<link rel='dns-prefetch' href='//googleads.g.doubleclick.net' />
<link rel='dns-prefetch' href='//assets.customer.io' />
<link rel='dns-prefetch' href='//www.google-analytics.com' />
<link rel='dns-prefetch' href='//consentcdn.cookiebot.com' />
<link rel='dns-prefetch' href='//www.googletagmanager.com' />

<link rel="alternate" type="application/rss+xml" title="Customer.io &raquo; Feed" href="https://customer.io/feed/" />
<link rel="alternate" type="application/rss+xml" title="Customer.io &raquo; Comments Feed" href="https://customer.io/comments/feed/" />

<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<!-- GTM Container placement set to footer -->
<script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
	var dataLayer_content = {"pagePostType":"page","pagePostType2":"single-page","pagePostAuthor":"Alex Patton"};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRGKPHX');
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com --><style id='wp-emoji-styles-inline-css' type='text/css'>

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
<link rel='preload'  href='https://customer.io/wp-includes/css/dist/block-library/style.min.css?ver=6.4.3' data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'" onerror="this.removeAttribute('data-rocket-async')"  type='text/css' media='all' />
<style id='classic-theme-styles-inline-css' type='text/css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link data-minify="1" rel='preload'  href='https://customer.io/wp-content/cache/min/1/wp-content/themes/customer-io/style.css?ver=1706581558' data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'" onerror="this.removeAttribute('data-rocket-async')"  type='text/css' media='all' />
<link data-minify="1" rel='preload'  href='https://customer.io/wp-content/cache/min/1/wp-content/plugins/wp-search-with-algolia/css/algolia-autocomplete.css?ver=1706581558' data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'" onerror="this.removeAttribute('data-rocket-async')"  type='text/css' media='all' />
<link data-minify="1" href="https://customer.io/wp-content/cache/min/1/wp-content/themes/yootheme/css/theme.1.css?ver=1706581558" data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'" onerror="this.removeAttribute('data-rocket-async')"  rel="preload">
<script type="text/javascript" src="https://customer.io/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://customer.io/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<link rel="https://api.w.org/" href="https://customer.io/wp-json/" /><link rel="alternate" type="application/json" href="https://customer.io/wp-json/wp/v2/pages/26755" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://customer.io/xmlrpc.php?rsd" />
<link rel='shortlink' href='https://customer.io/?p=26755' />
<link rel="alternate" type="application/json+oembed" href="https://customer.io/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcustomer.io%2Flearn%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://customer.io/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcustomer.io%2Flearn%2F&#038;format=xml" />

<!-- Start VWO Async SmartCode -->
<link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
<script type='text/javascript' id='vwoCode'>
window._vwo_code || (function() {
var account_id=824907,
version=2.0,
settings_tolerance=2000,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=this.getSettings(),n=d.createElement('script'),i=this;if(t){n.textContent=t;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);i.load(e)}}else{n.fetchPriority='high';n.src=e;n.type='text/javascript';n.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(n)}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t=d.currentScript,n=d.createElement('style'),i=this.hide_element(),r=t&&!t.async&&i?i+this.hide_element_style():'',c=d.getElementsByTagName('head')[0];n.setAttribute('id','_vis_opt_path_hides');v&&n.setAttribute('nonce',v.nonce);n.setAttribute('type','text/css');if(n.styleSheet)n.styleSheet.cssText=r;else n.appendChild(d.createTextNode(r));c.appendChild(n);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version)}};w._vwo_code=code;code.init();})();
</script>
<!-- End VWO Async SmartCode -->
		<style>
			.algolia-search-highlight {
				background-color: #fffbcc;
				border-radius: 2px;
				font-style: normal;
			}
		</style>
		<script data-minify="1" src="https://customer.io/wp-content/cache/min/1/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit.js?ver=1706581558"></script>
<script src="https://customer.io/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit-icons-flow.min.js?ver=4.0.13"></script>
<script data-minify="1" src="https://customer.io/wp-content/cache/min/1/wp-content/themes/yootheme/js/theme.js?ver=1706581558"></script>
<script>window.yootheme = window.yootheme || {}; var $theme = yootheme.theme = {"i18n":{"close":{"label":"Close"},"totop":{"label":"Back to top"},"marker":{"label":"Open"},"navbarToggleIcon":{"label":"Open menu"},"paginationPrevious":{"label":"Previous page"},"paginationNext":{"label":"Next page"},"searchIcon":{"toggle":"Open Search","submit":"Submit Search"},"slider":{"next":"Next slide","previous":"Previous slide","slideX":"Slide %s","slideLabel":"%s of %s"},"slideshow":{"next":"Next slide","previous":"Previous slide","slideX":"Slide %s","slideLabel":"%s of %s"},"lightboxPanel":{"next":"Next slide","previous":"Previous slide","slideLabel":"%s of %s","close":"Close"}}};</script>
<script>if (typeof UIKit !== 'undefined') {
UIkit.util.ready(function() {
    var tag = window.location.hash.substring(1);
    if (tag.length) {
        UIkit.util.$$('li[uk-filter-control="[data-tag~=\'' + decodeURI(tag).replace(/ /g, '-') + '\']"] > a').forEach(function(el) {
            el.click();
        });
    }
});
}
</script>		<style type="text/css" id="wp-custom-css">
			/* hide Footer */ 
.page-id-28580 .cio-footer,.page-id-28580 .cio-footer-line, .postid-28578 .cio-footer, .postid-28578 .cio-footer-line,.postid-28578 #cio-newsletter-signup-footer {
	display:none
}

/*Pseudo Workflow Items*/
.pseudo-workflow-action{
    font-size:14px;
    font-weight:400;
    border:1px solid #ebecf2;
    border-radius:4px;
    padding:16px 16px;
    background-color:white;
    border-left:4px solid #00d9f5;
    text-align:left;
}

.pseudo-workflow-action-content{
    background-color:#fffae5;
    color:#8c6e00;
    padding:4px;
    margin-bottom:8px;
    border:1px solid #fffae5;
    
    border-radius:4px;
}

/* Nav */



/*
ul.uk-navbar-nav li.uk-parent:hover{
	border-bottom: 3px #5721CC solid;
	
}
ul.uk-navbar-nav li{
	border-bottom: 3px #ffffff solid;
	
}*/

div.uk-navbar-dropdown-grid.uk-child-width-1-2.uk-grid {
	flex-wrap:inherit;
}

span.custio-navItem__title:hover{
	color:#5721CC!important;
}
.uk-navbar-dropdown .uk-column:first-child {
	background-color:white !important;
	width:auto;
}

.uk-navbar-dropdown .uk-column{
	padding:40px !important;
}


.mega-nav-mobile-column {
	padding-top:15px !important;
}

.fly__type--label {
	font-weight:500;
}

.custio-navItem__title {
	white-space:nowrap;
	padding-bottom:4px;
}
.uk-navbar-dropdown-width-2 {
	width:auto !important;
}
.uk-navbar-dropdown-width-3 {
	width:auto !important;
}

.uk-navbar-dropdown-width-3 .uk-column{
	width:auto !important;
}


ul.uk-nav-sub li:last-child {
	padding-bottom:0px !important;
}

.uk-navbar-nav .uk-navbar-dropdown-grid {
    justify-content: space-between;
}
.uk-nav-sub span img {
	width:36px !important;
	
}

.uk-nav-sub li {
	padding:12px 0px;
}



/* Blog grid styling */ 

.blog-grid .el-item {border-color:#EBECF2;padding-top:0px !important;margin-top:50px;box-shadow:none; border-style:solid;border-width:1px;border-radius:4px;}

.blog-grid .el-link {float:left !important;font-weight:500}
.blog-grid .el-image {position:relative; top:-37.5px;border-style:solid;border-width:1px;border-color:#EBECF2; width: 75px; height: 75px;} 

.blog-grid .el-title {font-weight:500}
.blog-grid .el-meta {font-size:14px;}

/* Careers Badge in Footer
 */
.footer-careers:after{
	content:"WE'RE HIRING!";
  padding: 4px 8px;
    border-radius: 4px;
    background: #f1eaff;
    color: #5721cc!important;
    font-size: 11px;
    display: inline-flex;
    justify-content: center;
	  vertical-align:center;
    align-items: center;
    font-weight: 700;
}


/* Global Styling */
.uk-badge {
	letter-spacing: 0.5px;
	text-transform:uppercase;
	color:#5721CC !important;
}

/* Search Styling, based on https://customer.io/wp-content/plugins/wp-search-with-algolia/css/algolia-autocomplete.css?ver=1.2.0 */
.aa-dropdown-menu a{
font-family: "Roboto" !important;
font-size: 16px !important;
font-weight: 400  !important;
color: #2f326a !important;
}
.aa-suggestion .suggestion-post-title {
font-family: "Roboto" !important;
}

.aa-dropdown-menu .autocomplete-header-title
{
display:none;
}
.aa-dropdown-menu {
border-style: solid;
border-width: 1px;
border-radius: 4px !important;
border-color: #EBECF2;
box-shadow: none;
}

.aa-dropdown-menu .aa-suggestion .suggestion-post-content em {
box-shadow: inset 0 -2px 0 0 #7131FF !important;
}

.aa-dropdown-menu .aa-suggestion em {
	color: #2F326A;
	background: rgb(113, 49, 255,.1);
}


/*Article body copy size*/
#article-post-body p, #article-post-body ul, #article-post-body ol, #article-post-body pre {font-size:18px}


/* Blog Post Font Colors*/
#article-post-body h1, #article-post-body h2, #article-post-body h3, #article-post-body h4, #article-post-body h5, #article-post-body h6, #article-post-body em,#article-post-body uk-h1, #article-post-body uk-h2, #article-post-body uk-h3, #article-post-body uk-h4, #article-post-body- h5, .post uk-h6, #article-post-body strong { color: #2F326A!important;}
.uk-article-meta { color: #6F7488; }
.uk-article-meta a { color: #4B4B60; }
.uk-link, a { color: #5721CC; }
.uk-link-toggle:focus .uk-link, .uk-link-toggle:hover .uk-link, .uk-link:hover, a:hover { color: #331673; }


/*Blog heading sizes - standard*/
#article-post-body h1 { font-size: 40px; }
@media (min-width: 640px) {#article-post-body h1 { font-size: 52px }
}
#article-post-body h2 { font-size: 32px; }
#article-post-body h3 { font-size: 24px; }
#article-post-body h4 { font-size: 20px; }



/*Blog heading sizes - uk-*/
#article-post-body h1, #article-post-body uk-h1 { font-size: 40px; }
@media (min-width: 640px) #article-post-body h1, @media (min-width: 640px) #article-post-body uk-h1 { font-size: 52px }
#article-post-body h2, #article-post-body uk-h3,#article-post-body uk-h2 { font-size: 32px; }
#article-post-body h3, #article-post-body uk-h4 { font-size: 24px; }
#article-post-body h4 { font-size: 20px; }


/*Font weight 500 all headers*/
#article-post-body h1, #article-post-body h2, #article-post-body h3, #article-post-body h4, #article-post-body h5, #article-post-body h6, #article-post-body em, #article-post-body uk-h1, #article-post-body uk-h2, #article-post-body uk-h3, #article-post-body uk-h4, #article-post-body uk-h5, #article-post-body uk-h6, #article-post-body strong { font-weight: 500; }


/*Add slight border to image/video*/
.uk-article canvas, .uk-article img, .uk-article video,.wp-block-image img { border: 1px solid #EBECF2; border-radius: 4px; }
.uk-article canvas, .uk-article.no-border img, .uk-article video,.wp-block-image img { border: 0px solid #EBECF2; border-radius: 4px;  display: block;
  margin-left: auto;
  margin-right: auto;}


/*vertical spacing to images*/
.uk-article canvas, .uk-article img, .uk-article video, .wp-block-image { margin: 1rem 0; }


/*Blockquote styling*/
blockquote { border-left: 4px solid #7131FF; font-style: italic; color: #6F7488; margin: 0 0 24px 0; }
blockquote footer { text-transform: uppercase; letter-spacing: 1px; color: #6F7488; font-weight:700; font-style: normal }
cite { font-style: normal; font-size:16px !important }

/*vertical spacing to headings*/
*+.uk-h1, *+.uk-h2, *+.uk-h3, *+.uk-h4, *+.uk-h5, *+.uk-h6, *+.uk-heading-2xlarge, *+.uk-heading-large, *+.uk-heading-medium, *+.uk-heading-small, *+.uk-heading-xlarge, *+h1, *+h2, *+h3, *+h4, *+h5, *+h6 { margin-top: 48px; }

/*Standardized spacing to unit of 8*/
address, dl, fieldset, figure, ol, p, pre, ul { margin: 0 0 24px 0; }



 /* Individual Post Styling */
#article-post-body {
	border-style:solid;
	border-width:1px;
	border-radius:4px;
	border-color:#EBECF2;
}

.inline-quote-box {
	    background-image: url(/wp-content/themes/customer-io/dist/bg--grey-block-1.3283a47d.svg);
	background-size: 100% 100%;
	padding: 32px 8px;
	max-width: 800px;
}
.inline-quote-box img{
	border-width:0px;
}
.inline-quote-box .wp-block-column{
	border-width:0px;
}

 /* Individual Post Styling - figcaption */
#article-post-body figcaption {
	padding-left: 1em;
	color: #6F7488;
  padding-right: 1em;
	text-align: center;
	
}

 /* Individual Post Styling - pre code */
#article-post-body pre code {
	overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

/* Mailing List Box Styling */
#article-post-newsletter {
	box-shadow: rgb(153, 240, 212) 0px 84px 0px -80px inset, rgba(153, 240, 212, 0.13) 0px 0px 0px 1px inset;
}

 /* Hide on medium and small breakpoints */
@media screen and (max-width: 1150px) {
    #wtr-progress {
        display: none !important;
	}
}

/* Show on large and x-large breakpoints */
@media screen and (min-width: 1150px) {
    #individual-post-padding {
    background-color:#fff;
    padding-left:68px;
    padding-right:68px;
	}
}


/*Homepage Switcher*/
.custio-pane__heading {
	font-size: 18px; }
.custio-pane__link {
	font-size: 18px;
}

/* CPC Pages */
.parent-pageid-19620 .cio-footer,.parent-pageid-19620 .cio-footer-links,.parent-pageid-19620 .cio-footer-line,.parent-pageid-19620 .uk-navbar-nav,.parent-pageid-19620 .uk-navbar-right {
	display:none;
}

@font-face { font-family: 'CustomerIO Handwritten'; src:  url('/wp-content/themes/customer-io/fonts/cio-standard-webfont.woff2') format('woff2'), url('/wp-content/themes/customer-io/fonts/cio-standard-webfont.woff') format('woff'); font-display: swap; }


@font-face { font-family: 'CustomerIO Handwritten Numbers'; src:  url('/wp-content/themes/customer-io/fonts/CIO-Numbers.woff') format('woff'); font-display: swap; }

/* demo form */
#demoForm .uk-form-label {
	color: #6f7488;
  display: block;
  font-size: .6875rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 8px;
  text-transform: uppercase;
}

#demoForm input,#demoForm select,#demoForm textarea {
	    border-radius: 4px;
    border: 1px solid #c7c7d4;
}
#demoForm input:focus:not(.uk-radio),#demoForm select:focus,#demoForm textarea:focus {
	border-color:#5721cc !important;
	background-color: white 
}
/* form styling */
.cio-form .uk-form-label {
	color: #6f7488;
  display: block;
  font-size: .6875rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.cio-form input,.cio-form select,.cio-form textarea {
	    border-radius: 4px;
    border: 1px solid #c7c7d4;
}
.cio-form input:focus:not(.uk-radio),.cio-form select:focus,.cio-form textarea:focus {
	border-color:#5721cc !important;
	background-color: white 
}


/* Liquid Tutorial Code Box */

@media only screen and (max-width: 640px) {
  p {
    font-size: 16px;
  }

/* Secondary Quote Box */
.secondary-quote-box {
    background-image: url(/wp-content/themes/customer-io/dist/bg--grey-block-1.3283a47d.svg);
    background-size: 100% 100%;
    padding: 32px 32px;
    max-width: 800px;
    padding: 40px;
	
	}
#app-sign-in:hover {
	border-bottom: none;
/* 	transform: translateX(-50%) */
}
	
	

	
/* mobile landing page */
.mobile-platform-tag {
	text-transform:none;
	font-family: Poppins;
	font-weight:500;
	font-size:14px;
	margin-bottom:3px;
}
	
.uk-navbar-dropdown-grid { 
	margin-left: 0 !important;
}
	
	
			</style>
		<noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript><script>
/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
(function(w){"use strict";if(!w.loadCSS){w.loadCSS=function(){}}
var rp=loadCSS.relpreload={};rp.support=(function(){var ret;try{ret=w.document.createElement("link").relList.supports("preload")}catch(e){ret=!1}
return function(){return ret}})();rp.bindMediaToggle=function(link){var finalMedia=link.media||"all";function enableStylesheet(){link.media=finalMedia}
if(link.addEventListener){link.addEventListener("load",enableStylesheet)}else if(link.attachEvent){link.attachEvent("onload",enableStylesheet)}
setTimeout(function(){link.rel="stylesheet";link.media="only x"});setTimeout(enableStylesheet,3000)};rp.poly=function(){if(rp.support()){return}
var links=w.document.getElementsByTagName("link");for(var i=0;i<links.length;i++){var link=links[i];if(link.rel==="preload"&&link.getAttribute("as")==="style"&&!link.getAttribute("data-loadcss")){link.setAttribute("data-loadcss",!0);rp.bindMediaToggle(link)}}};if(!rp.support()){rp.poly();var run=w.setInterval(rp.poly,500);if(w.addEventListener){w.addEventListener("load",function(){rp.poly();w.clearInterval(run)})}else if(w.attachEvent){w.attachEvent("onload",function(){rp.poly();w.clearInterval(run)})}}
if(typeof exports!=="undefined"){exports.loadCSS=loadCSS}
else{w.loadCSS=loadCSS}}(typeof global!=="undefined"?global:this))
</script>    </head>
    <body class="page-template-default page page-id-26755 page-parent ">
        
        <div class="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
            <div class="uk-notification-message">
                <a href="#tm-main">Skip to main content</a>
            </div>
        </div>
    
        
        
        <div class="tm-page">

                        


<header class="tm-header-mobile uk-hidden@m" uk-header>


    
        <div class="uk-navbar-container">

            <div class="uk-container uk-container-expand">
                <nav class="uk-navbar" uk-navbar="{&quot;container&quot;:&quot;.tm-header-mobile&quot;}">

                                        <div class="uk-navbar-left">

                                                    <a href="https://customer.io/" aria-label="Back to home" class="uk-logo uk-navbar-item">
    <img alt="Customer.io" loading="eager" width="200" height="36" src="/wp-content/uploads/2019/01/customer-io-logo-color.svg"><img class="uk-logo-inverse" alt="Customer.io" loading="eager" width="200" height="36" src="/wp-content/uploads/2019/01/customer-io-logo-white.svg"></a>                        
                        
                    </div>
                    
                    
                                        <div class="uk-navbar-right">

                                                                            
                        <a uk-toggle href="#tm-dialog-mobile" class="uk-navbar-toggle uk-navbar-toggle-animate">

        
        <div uk-navbar-toggle-icon></div>

        
    </a>
                    </div>
                    
                </nav>
            </div>

        </div>

    



    
    
        <div id="tm-dialog-mobile" class="uk-dropbar uk-dropbar-top" uk-drop="{&quot;clsDrop&quot;:&quot;uk-dropbar&quot;,&quot;flip&quot;:&quot;false&quot;,&quot;container&quot;:&quot;.tm-header-mobile&quot;,&quot;target-y&quot;:&quot;.tm-header-mobile .uk-navbar-container&quot;,&quot;mode&quot;:&quot;click&quot;,&quot;target-x&quot;:&quot;.tm-header-mobile .uk-navbar-container&quot;,&quot;stretch&quot;:true,&quot;bgScroll&quot;:&quot;false&quot;,&quot;animation&quot;:&quot;reveal-top&quot;,&quot;animateOut&quot;:true,&quot;duration&quot;:300,&quot;toggle&quot;:&quot;false&quot;}">

        <div class="tm-height-min-1-1 uk-flex uk-flex-column">

                        <div class="uk-margin-auto-bottom">
                
<div class="uk-grid uk-child-width-1-1" uk-grid>    <div>
<div class="uk-panel widget widget_nav_menu" id="nav_menu-14">

    
    
<ul class="uk-nav uk-nav-default">
    
	<li><a href="/journeys" class=" menu-item menu-item-type-custom menu-item-object-custom">Journeys (Message Automation)</a></li>
	<li><a href="https://customer.io/data-pipelines/" class=" menu-item menu-item-type-custom menu-item-object-custom">Data Pipelines (CDP)</a></li>
	<li><a href="/pricing" class=" menu-item menu-item-type-custom menu-item-object-custom">Pricing</a></li>
	<li><a href="/customers" class=" menu-item menu-item-type-custom menu-item-object-custom">Customers</a></li>
	<li><a href="/docs" class=" menu-item menu-item-type-custom menu-item-object-custom">Docs</a></li></ul>

</div>
</div>    <div>
<div class="uk-panel widget widget_custom_html" id="custom_html-7">

    
    <div class="textwidget custom-html-widget"><hr>

<a class="uk-margin-small 
 uk-button uk-button-primary uk-width-1-1 uk-text-uppercase" href="https://customer.io/demo/?nav=header">Request Demo</a>





<a class="uk-margin-small uk-button uk-button-default uk-width-1-1 uk-text-uppercase" href="https://fly.customer.io/users/login/?nav=header">Sign In</a></div>
</div>
</div></div>            </div>
            
            
        </div>

    </div>
    

</header>





<header class="tm-header uk-visible@m" uk-header>



        <div uk-sticky media="@m" cls-active="uk-navbar-sticky" sel-target=".uk-navbar-container">
    
        <div class="uk-navbar-container">

            <div class="uk-container">
                <nav class="uk-navbar" uk-navbar="{&quot;align&quot;:&quot;center&quot;,&quot;container&quot;:&quot;.tm-header &gt; [uk-sticky]&quot;,&quot;boundary&quot;:&quot;.tm-header .uk-navbar-container&quot;,&quot;target-x&quot;:&quot;.tm-header .uk-navbar&quot;}">

                                        <div class="uk-navbar-left">

                                                    <a href="https://customer.io/" aria-label="Back to home" class="uk-logo uk-navbar-item">
    <img alt="Customer.io" loading="eager" width="200" height="36" src="/wp-content/uploads/2019/01/customer-io-logo-color.svg"><img class="uk-logo-inverse" alt="Customer.io" loading="eager" width="200" height="36" src="/wp-content/uploads/2019/01/customer-io-logo-white.svg"></a>                        
                                                    
<ul class="uk-navbar-nav">
    
	<li class="navbar--platform menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"><a> Platform</a>
	<div class="uk-navbar-dropdown uk-navbar-dropdown-width-3"><div class="uk-navbar-dropdown-grid uk-child-width-1-3" uk-grid><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="custio-navColumn--wide menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="menu-item menu-item-type-custom menu-item-object-custom uk-nav-header uk-padding-remove fly__type--label fly__color--gray-500"> Products</li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/journeys"><span class="uk-flex uk-flex-middle">	<img width="36" height="36" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2036%2036'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2023/04/journeys.svg"><noscript><img width="36" height="36" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2023/04/journeys.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Journeys</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Automate your marketing messages</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/data-pipelines"><span class="uk-flex uk-flex-middle">	<img width="36" height="36" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2036%2036'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2023/04/cdp-1.svg"><noscript><img width="36" height="36" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2023/04/cdp-1.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Data Pipelines</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Collect &#038; route data to all your tools</span>	</span></span></a></li></ul></li></ul></div><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="uk-width-auto menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="menu-item menu-item-type-custom menu-item-object-custom uk-nav-header uk-padding-remove fly__type--label fly__color--gray-500"> Top Features</li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/in-app-messages"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> In-App Messages</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Web &#038; mobile in-app messages</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/data-warehouse"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Data Warehouse Sync</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Snowflake, BigQuery &#038; others</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/custom-audience-sync"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Ad Audience Sync</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Google &#038; Facebook Ads</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/custom-objects"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Custom Objects</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Go beyond profile data</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/docs/merge-people/"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Identity Resolution</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Match customer &#038; lead profiles</span>	</span></span></a></li></ul></li></ul></div><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="mega-nav-mobile-column menu-item menu-item-type-custom menu-item-object-custom"><a href="/mobile"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Mobile</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">iOS &#038; Android SDKs</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/security"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Data & Security</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Compliance &#038; data protection</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/visual-workflow-builder"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Visual Workflow Builder</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Build campaigns visually</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/features#metrics"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Metrics & Reporting</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Track conversions &#038; more</span>	</span></span></a></li>
			<li class="uk-margin-top menu-item menu-item-type-custom menu-item-object-custom"><a href="/features"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> All Features <img class="alignnone wp-image-15906" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2013'%3E%3C/svg%3E" alt="" width="32" height="13" data-lazy-src="https://customer.io/wp-content/uploads/2021/06/purple-arrow.svg"><noscript><img loading="lazy" class="alignnone wp-image-15906" src="https://customer.io/wp-content/uploads/2021/06/purple-arrow.svg" alt="" width="32" height="13"></noscript></span>	</span></span></a></li></ul></li></ul></div></div></div></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/pricing/"> Pricing</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children uk-active uk-parent"><a> Resources</a>
	<div class="uk-navbar-dropdown uk-navbar-dropdown-width-3"><div class="uk-navbar-dropdown-grid uk-child-width-1-3" uk-grid><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="uk-width-auto menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="menu-item menu-item-type-custom menu-item-object-custom uk-nav-header uk-padding-remove fly__type--label fly__color--gray-500"> Learn, Discover, and Explore</li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://community.customer.io/"><span class="uk-flex uk-flex-middle">	<img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20104%20104'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2023/01/Chat.svg"><noscript><img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2023/01/Chat.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Ask the Community</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Connect with and learn from power users.</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/docs/"><span class="uk-flex uk-flex-middle">	<img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20104%20104'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2021/11/book.svg"><noscript><img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2021/11/book.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Platform Documentation</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Easy-to-follow product guides.</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/docs/api/"><span class="uk-flex uk-flex-middle">	<img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20104%20104'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2021/11/lego.svg"><noscript><img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2021/11/lego.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> API Documentation</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">Detailed developer resources.</span>	</span></span></a></li></ul></li></ul></div><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="uk-width-auto menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children uk-active uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="menu-item menu-item-type-custom menu-item-object-custom uk-nav-header uk-padding-remove fly__type--label fly__color--gray-500"> Resources</li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/docs/release-notes"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Release Notes</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/integrations"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Integrations</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/partners/"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Agency Partners</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item uk-active"><a href="/learn"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Webinars and Guides</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/customer-success/"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Customer Success</span>	</span></span></a></li></ul></li></ul></div><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="uk-width-auto menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="menu-item menu-item-type-custom menu-item-object-custom uk-nav-header uk-padding-remove fly__type--label fly__color--gray-500"> Industries</li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/saas"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> SaaS</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/edtech"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> EdTech</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/fintech"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> FinTech</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/marketplace"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Marketplaces</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/healthcare"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Healthcare</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/customers"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Learn about our customers <img class="alignnone wp-image-15906" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2013'%3E%3C/svg%3E" alt="" width="32" height="13" data-lazy-src="https://customer.io/wp-content/uploads/2021/06/purple-arrow.svg"><noscript><img loading="lazy" class="alignnone wp-image-15906" src="https://customer.io/wp-content/uploads/2021/06/purple-arrow.svg" alt="" width="32" height="13"></noscript></span>	</span></span></a></li></ul></li></ul></div></div></div></li>
	<li class="navbar--company menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"><a> Company</a>
	<div class="uk-navbar-dropdown uk-navbar-dropdown-width-2"><div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="mega-nav-company-column menu-item menu-item-type-custom menu-item-object-custom"><a href="/about"><span class="uk-flex uk-flex-middle">	<img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20104%20104'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2021/10/our_company_icon-1.svg"><noscript><img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2021/10/our_company_icon-1.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> About Us</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">our culture &#038; history.</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/careers"><span class="uk-flex uk-flex-middle">	<img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20104%20104'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2021/10/careers_icon-1.svg"><noscript><img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2021/10/careers_icon-1.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Careers</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">at a customer-centric company</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="/blog"><span class="uk-flex uk-flex-middle">	<img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20104%20104'%3E%3C/svg%3E" data-lazy-src="https://customer.io/wp-content/uploads/2021/10/security_icon-1.svg"><noscript><img width="104" height="104" class="uk-margin-auto-vertical uk-margin-small-right" src="https://customer.io/wp-content/uploads/2021/10/security_icon-1.svg"></noscript>	<span class="custio-navItem--has-icon">		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Blog</span>		<span class="custio-navItem__description uk-display-block fly__type--p-small fly__color--gray-700">with tips &#038; stories.</span>	</span></span></a></li></ul></li></ul></div><div class="uk-column"><ul class="uk-nav uk-navbar-dropdown-nav">

		<li class="custio-navColumn--wide menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children uk-parent"> 
		<ul class="uk-nav-sub">

			<li class="custio-navColumn--wide menu-item menu-item-type-custom menu-item-object-custom uk-nav-header uk-padding-remove fly__type--label fly__color--gray-500"> Recent Platform Releases</li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/docs/release-notes/2023-04-19-cdp-early-access/"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Customer.io Data Pipelines (CDP) early access</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/docs/release-notes/#2023-04-03-flutter-official-release"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Add Flutter SDK for mobile messages</span>	</span></span></a></li>
			<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://customer.io/docs/release-notes/2023-01-20-subscription-center-beta/"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> Build your custom subscription center</span>	</span></span></a></li>
			<li class="uk-margin-top menu-item menu-item-type-custom menu-item-object-custom"><a href="/docs/release-notes/"><span class="uk-flex uk-flex-middle">	<span>		<span class="custio-navItem__title uk-display-block fly__type--h6 fly__color--gray-900"> All recent releases <img class="alignnone wp-image-15906" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2013'%3E%3C/svg%3E" alt="" width="32" height="13" data-lazy-src="https://customer.io/wp-content/uploads/2021/06/purple-arrow.svg"><noscript><img loading="lazy" class="alignnone wp-image-15906" src="https://customer.io/wp-content/uploads/2021/06/purple-arrow.svg" alt="" width="32" height="13"></noscript></span>	</span></span></a></li></ul></li></ul></div></div></div></li></ul>
                        
                        
                    </div>
                    
                    
                                        <div class="uk-navbar-right">

                        
                                                    
<div class="uk-navbar-item widget widget_custom_html" id="custom_html-10">

    
    <div class="textwidget custom-html-widget"><ul class="uk-navbar-nav" >
    <li><a href="https://fly.customer.io/login?nav=header" id="app-sign-in" class="menu-item menu-item-type-post_type menu-item-object-page uk-padding-remove-right">Sign In</a></li>
</ul></div>
</div>

<div class="uk-navbar-item widget widget_custom_html" id="custom_html-9">

    
    <div class="textwidget custom-html-widget"><!--<a class="uk-margin-small-right uk-button uk-button-default uk-button-small" href="https://fly.customer.io/signup">Start Trial</a>-->

<a class="uk-button uk-button-primary uk-button-small" href="https://customer.io/demo/?nav=header">Request Demo</a>

</div>
</div>
                        
                    </div>
                    
                </nav>
            </div>

        </div>

        </div>
    







</header>

            
            
            <main id="tm-main" >

                <!-- Builder #page --><style class="uk-margin-remove-adjacent">#page\#0{ font-size:20px; } #page\#1 .el-link { display:none; } </style>
<div class="uk-section-default uk-position-relative">
        <div data-src="/wp-content/uploads/2021/07/CIO_dots_BG_fade.svg" uk-img class="uk-background-norepeat uk-background-center-center uk-section uk-padding-remove-bottom uk-flex uk-flex-middle" uk-height-viewport="offset-top: true; offset-bottom: ! +;">    
        
                <div class="uk-position-cover" style="background-image: linear-gradient(#FF000000, #FFFFFF); background-clip: padding-box"></div>        
        
                        <div class="uk-width-1-1">
            
                                <div class="uk-container uk-position-relative">                
                    
                    <div class="uk-grid tm-grid-expand uk-grid-margin" uk-grid>
<div class="uk-width-1-2@m">
    
        
            
            
            
                
                    
<h1 class="uk-h1 uk-text-left@m uk-text-center">        Ready to <span class="uline uline--1">Learn?</span>    </h1><div class="uk-panel uk-margin-medium uk-width-2xlarge uk-margin-auto" id="page#0"><p>Looking to use data more effectively? Want to review messaging best practices for your industry? These resources are for anyone who wants to learn to engineer better customer engagements and experiences for their customers.</p></div>
                
            
        
    
</div>
<div class="uk-width-1-2@m uk-visible@m">
    
        
            
            
            
                
                    
<div class="uk-margin uk-width-medium uk-margin-auto uk-visible@m">
        <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20646%20314'%3E%3C/svg%3E" width="646" height="314" class="el-image" alt="People_talking_animation" data-lazy-src="/wp-content/uploads/2021/06/People_talking_animation.svg"><noscript><img decoding="async" src="/wp-content/uploads/2021/06/People_talking_animation.svg" width="646" height="314" class="el-image" alt="People_talking_animation" loading="lazy"></noscript>    
    
</div>

                
            
        
    
</div></div>
                                </div>
                
                        </div>
            
        
        </div>
    
</div>
<div class="uk-section-default uk-section">
    
        
        
        
            
                                <div class="uk-container">                
                    
                    <div class="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
<div class="uk-width-1-1">
    
        
            
            
            
                
                    
<div uk-filter="target: .js-filter;" id="page#1" class="uk-margin">
    
        
<ul class="el-nav uk-tab uk-margin">
        <li class="uk-active" uk-filter-control><a href>All</a></li>
    
        <li  uk-filter-control="{&quot;filter&quot;:&quot;[data-tag~=\&quot;Guides\&quot;]&quot;}">
        <a href>Guides</a>
    </li>
        <li  uk-filter-control="{&quot;filter&quot;:&quot;[data-tag~=\&quot;Tutorials\&quot;]&quot;}">
        <a href>Tutorials</a>
    </li>
        <li  uk-filter-control="{&quot;filter&quot;:&quot;[data-tag~=\&quot;Webinars\&quot;]&quot;}">
        <a href>Webinars</a>
    </li>
    
</ul>

    
        <div class="uk-grid js-filter uk-child-width-1-1" uk-grid="masonry: 1; parallax: 300;">                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/liquid-tutorial/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/41/OG_Image_1200x630_Liquid-guides-41bed05b.webp 768w, /wp-content/themes/yootheme/cache/d1/OG_Image_1200x630_Liquid-guides-d1632928.webp 1024w, /wp-content/themes/yootheme/cache/3c/OG_Image_1200x630_Liquid-guides-3ceb1871.webp 1366w, /wp-content/themes/yootheme/cache/13/OG_Image_1200x630_Liquid-guides-13974910.webp 1600w, /wp-content/themes/yootheme/cache/22/OG_Image_1200x630_Liquid-guides-225a092b.webp 1920w, /wp-content/themes/yootheme/cache/7f/OG_Image_1200x630_Liquid-guides-7f11c071.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/d4/OG_Image_1200x630_Liquid-guides-d457431f.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/d4/OG_Image_1200x630_Liquid-guides-d457431f.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Your guide to intermediate and advanced Liquid</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">This two-part guide will take you through everything you need to know about Liquid so you can create ultra-personalized messages for your customers.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/state-of-messaging-report/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/d9/OG-IMAGE-d98bf204.webp 768w, /wp-content/themes/yootheme/cache/fc/OG-IMAGE-fca6cc29.webp 1024w, /wp-content/themes/yootheme/cache/53/OG-IMAGE-53973d08.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20630'%3E%3C/svg%3E" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/f2/OG-IMAGE-f238ed95.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/f2/OG-IMAGE-f238ed95.png" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">The State of Messaging Report</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Download The State of Messaging Report to gain valuable insights from 2023 and discover trends shaping 2024 to help you optimize your messaging and thrive in the ever-evolving realm of customer engagement.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/build-vs-buy-cdp/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/0e/OG_Image_1200x630_build-or-buy-cdp-guide-0e8d2859.webp 768w, /wp-content/themes/yootheme/cache/f2/OG_Image_1200x630_build-or-buy-cdp-guide-f2ec5314.webp 1024w, /wp-content/themes/yootheme/cache/1f/OG_Image_1200x630_build-or-buy-cdp-guide-1f64624d.webp 1366w, /wp-content/themes/yootheme/cache/30/OG_Image_1200x630_build-or-buy-cdp-guide-3018332c.webp 1600w, /wp-content/themes/yootheme/cache/c0/OG_Image_1200x630_build-or-buy-cdp-guide-c0d8d23e.webp 1920w, /wp-content/themes/yootheme/cache/78/OG_Image_1200x630_build-or-buy-cdp-guide-78d073f2.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/e9/OG_Image_1200x630_build-or-buy-cdp-guide-e97fda18.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/e9/OG_Image_1200x630_build-or-buy-cdp-guide-e97fda18.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Build or buy: Choose your own CDP adventure</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Your journey to actionable data for personalized customer experiences. Download our build vs. buy CDP guide to help you choose the right path for your data needs.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/how-to-html/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/53/OG_Image_1200x630_how-to-html-53fb8d94.webp 768w, /wp-content/themes/yootheme/cache/af/OG_Image_1200x630_how-to-html-af23d813.webp 1024w, /wp-content/themes/yootheme/cache/39/OG_Image_1200x630_how-to-html-395d774c.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20630'%3E%3C/svg%3E" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/9f/OG_Image_1200x630_how-to-html-9f49b07a.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/9f/OG_Image_1200x630_how-to-html-9f49b07a.png" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">How to HTML</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">These guides walk you through the principles and practices you need to create HTML emails that get delivered and perform well out in the wild.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/lifecycle-marketing-for-product-led-growth/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/16/LIFECYCLE-MARKETING-OG-16ae899b.webp 768w, /wp-content/themes/yootheme/cache/24/LIFECYCLE-MARKETING-OG-24eb373d.webp 1024w, /wp-content/themes/yootheme/cache/01/LIFECYCLE-MARKETING-OG-01002a35.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/2e/LIFECYCLE-MARKETING-OG-2e5d5e2d.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/2e/LIFECYCLE-MARKETING-OG-2e5d5e2d.png" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Lifecycle marketing for product-led growth</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn from experts at Whimsical, Air, and Chameleon on how to enhance your product’s value through ongoing lifecycle marketing.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/3-ways-to-maximize-the-value-of-your-cdp/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/0e/data-pipelines-ga-v1-0ecf7c52.webp 768w, /wp-content/themes/yootheme/cache/79/data-pipelines-ga-v1-792c992d.webp 1024w, /wp-content/themes/yootheme/cache/95/data-pipelines-ga-v1-95376ed9.webp 1208w" sizes="(min-width: 1208px) 1208px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201208%20638'%3E%3C/svg%3E" width="1208" height="638" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/b7/data-pipelines-ga-v1-b7e2d43f.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/b7/data-pipelines-ga-v1-b7e2d43f.png" width="1208" height="638" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">3 ways to maximize the value of your CDP</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Ready to get more value out of your data? Watch three ways your team can use your customer data platform (CDP) to boost conversions, understand your customer journey, and achieve data consistency across your tech stack.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/omnichannel-workshop-cio-lob/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/dd/CIO_Lob_Webinar_v2-dd77e578.webp 768w, /wp-content/themes/yootheme/cache/fa/CIO_Lob_Webinar_v2-fa30ee94.webp 1024w, /wp-content/themes/yootheme/cache/3c/CIO_Lob_Webinar_v2-3c38864a.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/22/CIO_Lob_Webinar_v2-22f50583.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/22/CIO_Lob_Webinar_v2-22f50583.png" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Omnichannel Workshop: How to Leverage Email + Direct Mail to Acquire and Retain Customers&#8221;</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">🐌 Snail mail ain’t stale. 67% of marketers say direct mail provides the best ROI of any channel, and this is super-charged when you run your email + direct mail campaigns in sync. So, where does direct mail currently fit in your omnichannel strategy?</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/survival-guide-churnpocalypse-form/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/d2/churpocalypse_og_1200x627-d28c1877.webp 768w, /wp-content/themes/yootheme/cache/0f/churpocalypse_og_1200x627-0f0fe9a3.webp 1024w, /wp-content/themes/yootheme/cache/07/churpocalypse_og_1200x627-071bfc39.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/3c/churpocalypse_og_1200x627-3ceab7a3.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/3c/churpocalypse_og_1200x627-3ceab7a3.png" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">The Marketer&#8217;s Survival Guide to Churnpocalypse</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Are your dashboards feeling hopeless? Access 13 life-saving tools, templates, and resources to recession-proof your growth strategy.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/plg-workshop-cio-chameleon/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/21/CIO_Chameleon_Webinar_OG_Image_1200x630-21c765f8.webp 768w, /wp-content/themes/yootheme/cache/6d/CIO_Chameleon_Webinar_OG_Image_1200x630-6d03c15f.webp 1024w, /wp-content/themes/yootheme/cache/14/CIO_Chameleon_Webinar_OG_Image_1200x630-146045d1.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20630'%3E%3C/svg%3E" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/6a/CIO_Chameleon_Webinar_OG_Image_1200x630-6af09be4.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/6a/CIO_Chameleon_Webinar_OG_Image_1200x630-6af09be4.png" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Workshop: 3 Messaging Plays You Need to Drive Product-Led Growth</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn 3 messaging plays to activate, retain, and upgrade your customers with messaging and in-product experiences personalized to key customer behaviors.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/product-showcase-intro-to-customer-io-data-pipelines/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20630'%3E%3C/svg%3E" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/uploads/2023/05/Product_Showcase_OG_Image_1200x630-1-1.svg"><noscript><img decoding="async" src="/wp-content/uploads/2023/05/Product_Showcase_OG_Image_1200x630-1-1.svg" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Product Showcase: Intro to Customer.io Data Pipelines</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Watch this product showcase for a first look at how your team can use CDP to integrate new and existing tools faster, improve data accuracy across your stack, and pair with our Journeys product to build the ultimate omnichannel experience for your customers.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/product-showcase-ways-to-unlock-personalized-data-campaigns/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/59/Product_Showcase_OG_Image_1200x630-59a37d4f.webp 768w, /wp-content/themes/yootheme/cache/28/Product_Showcase_OG_Image_1200x630-28ff0afb.webp 1024w, /wp-content/themes/yootheme/cache/c5/Product_Showcase_OG_Image_1200x630-c5773ba2.webp 1366w, /wp-content/themes/yootheme/cache/ea/Product_Showcase_OG_Image_1200x630-ea0b6ac3.webp 1600w, /wp-content/themes/yootheme/cache/de/Product_Showcase_OG_Image_1200x630-de27fc65.webp 1920w, /wp-content/themes/yootheme/cache/5a/Product_Showcase_OG_Image_1200x630-5a9f12dc.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/77/Product_Showcase_OG_Image_1200x630-777d3373.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/77/Product_Showcase_OG_Image_1200x630-777d3373.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Product Showcase: 3 ways to unlock your data for more personalized, impactful campaigns</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Tune in to learn 3 ways Customer.io empowers you to access and act on your product and customer data to build more personalized, impactful campaigns &#8211; without constant need for developer time.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/customerio-kickbox-email-deliverability-workshop/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/52/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-5205dff5.webp 768w, /wp-content/themes/yootheme/cache/c8/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-c8dcfa59.webp 1024w, /wp-content/themes/yootheme/cache/25/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-2554cb00.webp 1366w, /wp-content/themes/yootheme/cache/0a/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-0a289a61.webp 1600w, /wp-content/themes/yootheme/cache/2d/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-2d8311c3.webp 1920w, /wp-content/themes/yootheme/cache/b6/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-b687ed25.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/5b/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-5bb82553.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/5b/Cio-Kickbox-Email_Workshop_OG_Image_1200x630-5bb82553.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Email Deliverability Workshop: How to Reduce Spam Rates &#038; Grow Engagement</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Roll up your sleeves in this email deliverability workshop to learn how to avoid spam complaints, reduce list churn, and grow email engagement!</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/onboarding-workshop-whimsical/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/0d/Onboarding-Workshop_v3-0d4cd13b.webp 768w, /wp-content/themes/yootheme/cache/2d/Onboarding-Workshop_v3-2d998185.webp 1024w, /wp-content/themes/yootheme/cache/29/Onboarding-Workshop_v3-292063c2.webp 1366w, /wp-content/themes/yootheme/cache/e3/Onboarding-Workshop_v3-e38c43eb.webp 1600w, /wp-content/themes/yootheme/cache/f3/Onboarding-Workshop_v3-f38867f7.webp 1920w, /wp-content/themes/yootheme/cache/b6/Onboarding-Workshop_v3-b66ef82c.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201254'%3E%3C/svg%3E" width="2400" height="1254" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/de/Onboarding-Workshop_v3-de054191.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/de/Onboarding-Workshop_v3-de054191.png" width="2400" height="1254" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Onboarding Workshop: How to fix drop-off</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Join this interactive onboarding workshop hosted in partnership by Customer.io and Whimsical where you’ll learn actionable tips and tricks to plan and build a higher-converting onboarding experience for your customers.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/whats-new-in-customerio-spring-2023/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/3e/Whats_New_Product_Demo_OG_Image_1200x630-3eed50b4.webp 768w, /wp-content/themes/yootheme/cache/79/Whats_New_Product_Demo_OG_Image_1200x630-79c99159.webp 1024w, /wp-content/themes/yootheme/cache/94/Whats_New_Product_Demo_OG_Image_1200x630-9441a000.webp 1366w, /wp-content/themes/yootheme/cache/bb/Whats_New_Product_Demo_OG_Image_1200x630-bb3df161.webp 1600w, /wp-content/themes/yootheme/cache/9d/Whats_New_Product_Demo_OG_Image_1200x630-9d90f621.webp 1920w, /wp-content/themes/yootheme/cache/93/Whats_New_Product_Demo_OG_Image_1200x630-9347efba.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/ac/Whats_New_Product_Demo_OG_Image_1200x630-acf467a6.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/ac/Whats_New_Product_Demo_OG_Image_1200x630-acf467a6.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">What&#8217;s New in Customer.io &#8211; Spring 2023</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">4 new features that will empower you to increase engagement on web &#038; mobile, plus manage B2B and B2C data in the same place, without the engineering headache.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/messaging-workshop-send-time-optimization/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/7f/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-7f1cda59.webp 768w, /wp-content/themes/yootheme/cache/db/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-db616ce6.webp 1024w, /wp-content/themes/yootheme/cache/36/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-36e95dbf.webp 1366w, /wp-content/themes/yootheme/cache/19/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-19950cde.webp 1600w, /wp-content/themes/yootheme/cache/ba/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-babe6231.webp 1920w, /wp-content/themes/yootheme/cache/b8/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-b8cb8858.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/ee/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-eea19127.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/ee/Send_Time_Optimization_Workshop_OG_Image_1200x630-1-eea19127.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Messaging Workshop &#8211; Send Time Optimization</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn how to leverage behavioral data to send messages at the moments when your users are most likely to engage &#038; convert.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/saas-email-workshop/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/0d/SaaS_Email_Workshop_OG_Image_1200x630-0da279d3.webp 768w, /wp-content/themes/yootheme/cache/4c/SaaS_Email_Workshop_OG_Image_1200x630-4cf882cc.webp 1024w, /wp-content/themes/yootheme/cache/a1/SaaS_Email_Workshop_OG_Image_1200x630-a170b395.webp 1366w, /wp-content/themes/yootheme/cache/8e/SaaS_Email_Workshop_OG_Image_1200x630-8e0ce2f4.webp 1600w, /wp-content/themes/yootheme/cache/fb/SaaS_Email_Workshop_OG_Image_1200x630-fb1408be.webp 1920w, /wp-content/themes/yootheme/cache/cf/SaaS_Email_Workshop_OG_Image_1200x630-cf213268.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/f7/SaaS_Email_Workshop_OG_Image_1200x630-f74d6b77.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/f7/SaaS_Email_Workshop_OG_Image_1200x630-f74d6b77.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Email Workshop &#8211; Bringing the “Spotify Wrapped” Strategy to SaaS</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn how the Gorgias team leverages customer engagement data in personalized recap emails to drive social shares and customer advocacy at scale.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/healthcare-marketing-panel/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/d0/Healthcare_Panel_OG_Image_1200x630-d097cbed.webp 768w, /wp-content/themes/yootheme/cache/ec/Healthcare_Panel_OG_Image_1200x630-ec127743.webp 1024w, /wp-content/themes/yootheme/cache/01/Healthcare_Panel_OG_Image_1200x630-019a461a.webp 1366w, /wp-content/themes/yootheme/cache/2e/Healthcare_Panel_OG_Image_1200x630-2ee6177b.webp 1600w, /wp-content/themes/yootheme/cache/e7/Healthcare_Panel_OG_Image_1200x630-e7e5a16c.webp 1920w, /wp-content/themes/yootheme/cache/f1/Healthcare_Panel_OG_Image_1200x630-f17a299d.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/61/Healthcare_Panel_OG_Image_1200x630-61497563.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/61/Healthcare_Panel_OG_Image_1200x630-61497563.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Healthcare Marketing Panel</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Watch to hear how three top healthcare marketers approach campaign building, personalization, and experimentation to drive better engagement at every stage of the customer lifecycle.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/email-deliverability-workshop/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/9d/Deliverability_Workshop_OG_Image_1200x630-9d2941b0.webp 768w, /wp-content/themes/yootheme/cache/2c/Deliverability_Workshop_OG_Image_1200x630-2c591cb0.webp 1024w, /wp-content/themes/yootheme/cache/c1/Deliverability_Workshop_OG_Image_1200x630-c1d12de9.webp 1366w, /wp-content/themes/yootheme/cache/ee/Deliverability_Workshop_OG_Image_1200x630-eead7c88.webp 1600w, /wp-content/themes/yootheme/cache/16/Deliverability_Workshop_OG_Image_1200x630-164db191.webp 1920w, /wp-content/themes/yootheme/cache/79/Deliverability_Workshop_OG_Image_1200x630-79e9860d.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/0a/Deliverability_Workshop_OG_Image_1200x630-0ab1066a.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/0a/Deliverability_Workshop_OG_Image_1200x630-0ab1066a.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">The Email Deliverability Workshop</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Don’t let bounces and spam folders block your 2023 email growth goals. Make deliverability your superpower.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/retention-recipes-how-musoras-boosted-mobile-user-retention-3-with-hyper-personalized-messaging/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/0f/Musora_OG_Image_1200x630-1-0f238e24.webp 768w, /wp-content/themes/yootheme/cache/e1/Musora_OG_Image_1200x630-1-e1318d78.webp 1024w, /wp-content/themes/yootheme/cache/0c/Musora_OG_Image_1200x630-1-0cb9bc21.webp 1366w, /wp-content/themes/yootheme/cache/23/Musora_OG_Image_1200x630-1-23c5ed40.webp 1600w, /wp-content/themes/yootheme/cache/b9/Musora_OG_Image_1200x630-1-b9a75fd8.webp 1920w, /wp-content/themes/yootheme/cache/ee/Musora_OG_Image_1200x630-1-eeb2dea4.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/06/Musora_OG_Image_1200x630-1-06d887f6.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/06/Musora_OG_Image_1200x630-1-06d887f6.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Retention Recipes: How Musora reduced subscriber churn by 3%</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Tune into this event for a look at how Musora Media built a personalized re-engagement campaign that decreased subscriber churn by 3%, across their 4 music learning apps.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/the-no-code-marketing-workshop/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/4e/Customer.io-Webinar-OG_Image_1200x630-4e80bfa7.webp 768w, /wp-content/themes/yootheme/cache/09/Customer.io-Webinar-OG_Image_1200x630-095c81a9.webp 1024w, /wp-content/themes/yootheme/cache/e4/Customer.io-Webinar-OG_Image_1200x630-e4d4b0f0.webp 1366w, /wp-content/themes/yootheme/cache/cb/Customer.io-Webinar-OG_Image_1200x630-cba8e191.webp 1600w, /wp-content/themes/yootheme/cache/d4/Customer.io-Webinar-OG_Image_1200x630-d406adec.webp 1920w, /wp-content/themes/yootheme/cache/fe/Customer.io-Webinar-OG_Image_1200x630-fe543ef8.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/eb/Customer.io-Webinar-OG_Image_1200x630-ebd2075b.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/eb/Customer.io-Webinar-OG_Image_1200x630-ebd2075b.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">The No-Code Marketing Workshop</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Join this workshop to learn no-code personalization and segmentation tactics to activate and engage your customers more effectively across channels, without being blocked by technical hurdles.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/demystifying-deep-links-in-lifecycle-marketing/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/55/Branch-Customer.io-Webinar-OG_Image_1200x630-55a0ccc2.webp 768w, /wp-content/themes/yootheme/cache/c8/Branch-Customer.io-Webinar-OG_Image_1200x630-c8b655bf.webp 1024w, /wp-content/themes/yootheme/cache/25/Branch-Customer.io-Webinar-OG_Image_1200x630-253e64e6.webp 1366w, /wp-content/themes/yootheme/cache/0a/Branch-Customer.io-Webinar-OG_Image_1200x630-0a423587.webp 1600w, /wp-content/themes/yootheme/cache/dc/Branch-Customer.io-Webinar-OG_Image_1200x630-dc3a93db.webp 1920w, /wp-content/themes/yootheme/cache/ad/Branch-Customer.io-Webinar-OG_Image_1200x630-ad39fcab.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/57/Branch-Customer.io-Webinar-OG_Image_1200x630-5781d3a7.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/57/Branch-Customer.io-Webinar-OG_Image_1200x630-5781d3a7.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Demystifying Deep Links in Lifecycle Marketing</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn how to combine the data-driven powers of marketing automation with the hyper-specific control of deep-links to make sure every message in your customer lifecycle has the highest chance to convert.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/my-campaign-rescue-time-bianca-landis/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/f4/RescueTime-OG-1200x600-3-f487ae53.webp 768w, /wp-content/themes/yootheme/cache/a4/RescueTime-OG-1200x600-3-a49d7e93.webp 1024w, /wp-content/themes/yootheme/cache/49/RescueTime-OG-1200x600-3-49154fca.webp 1366w, /wp-content/themes/yootheme/cache/66/RescueTime-OG-1200x600-3-66691eab.webp 1600w, /wp-content/themes/yootheme/cache/05/RescueTime-OG-1200x600-3-050c7b8f.webp 1920w, /wp-content/themes/yootheme/cache/33/RescueTime-OG-1200x600-3-334ae0bf.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/c0/RescueTime-OG-1200x600-3-c0c697ff.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/c0/RescueTime-OG-1200x600-3-c0c697ff.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Customer workflows: Onboarding with Bianca Landis of RescueTime</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn how Bianca Landis, Director of Customer Relations at RescueTime uses Customer.io to onboard leads and drive free-to-paid conversions.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/lifecycle-marketing-for-fintech-growth/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/66/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-667485fe.webp 768w, /wp-content/themes/yootheme/cache/88/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-8839ed28.webp 1024w, /wp-content/themes/yootheme/cache/65/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-65b1dc71.webp 1366w, /wp-content/themes/yootheme/cache/4a/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-4acd8d10.webp 1600w, /wp-content/themes/yootheme/cache/dd/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-ddc20add.webp 1920w, /wp-content/themes/yootheme/cache/43/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-43f19a4a.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/67/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-6793f5e9.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/67/Lifecycle-Marketing-for-Fintech-Growth-Webinar-OG-OG-1200x600-1-1-6793f5e9.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Lifecycle Marketing for Fintech Growth</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn how top Fintech marketers are using cross-channel campaigns to deepen product adoption, increase customer LTV, and convert new users into loyal spenders, lenders, and investors.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/healthmatch-customer-io-rudderstack/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/66/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-66881893.webp 768w, /wp-content/themes/yootheme/cache/57/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-5785718f.webp 1024w, /wp-content/themes/yootheme/cache/ba/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-ba0d40d6.webp 1366w, /wp-content/themes/yootheme/cache/95/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-957111b7.webp 1600w, /wp-content/themes/yootheme/cache/79/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-7910fdd5.webp 1920w, /wp-content/themes/yootheme/cache/8e/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-8e480674.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/5e/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-5ee6ace6.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/5e/Customer.io-x-Rudderstack-Webinar-OG-1200x600-1-5ee6ace6.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">How HealthMatch.io Uses Customer.io and RudderStack</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Join us in this webinar to learn how HealthMatch.io uses Customer.io and Rudderstack in sync to drive revenue and reduce reliance on developers for data and messaging use cases.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/mobile-marketing-growth-tactics/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/7c/Mobile-Marketing-Growth-Tactics-V2-7c4a5beb.webp 768w, /wp-content/themes/yootheme/cache/ee/Mobile-Marketing-Growth-Tactics-V2-ee88c127.webp 1024w, /wp-content/themes/yootheme/cache/2d/Mobile-Marketing-Growth-Tactics-V2-2dfd8bdd.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/a9/Mobile-Marketing-Growth-Tactics-V2-a9fc1808.jpeg"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/a9/Mobile-Marketing-Growth-Tactics-V2-a9fc1808.jpeg" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Mobile Marketing Growth Tactics</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">The average person has 40 apps installed on their phone and receives over 100 SMS and push notifications per day. Learn how top marketers are using data and cross-channel campaigns to stand out in the noise and acquire, convert, and retain mobile users.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/data-tracking-guide-and-templates/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/34/Data-Tracking-OG-1200x600-1-3440a40c.webp 768w, /wp-content/themes/yootheme/cache/40/Data-Tracking-OG-1200x600-1-40f9a983.webp 1024w, /wp-content/themes/yootheme/cache/da/Data-Tracking-OG-1200x600-1-da8fe41a.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20630'%3E%3C/svg%3E" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/b0/Data-Tracking-OG-1200x600-1-b07c2649.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/b0/Data-Tracking-OG-1200x600-1-b07c2649.png" width="1200" height="630" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Data tracking guide and templates</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Wondering what customer data your team needs in your customer engagement tools in order to create a personalized customer experience? Access a guide for data tracking best practices, and pick a template to get started planning or auditing your existing data plan.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/driving-growth-with-in-app-messages/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/ee/In-App-Webinar-1-eec9ec8d.webp 768w, /wp-content/themes/yootheme/cache/31/In-App-Webinar-1-31964ea7.webp 1024w, /wp-content/themes/yootheme/cache/bd/In-App-Webinar-1-bd8b67ed.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/48/In-App-Webinar-1-48503274.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/48/In-App-Webinar-1-48503274.png" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Driving Growth with In-App Messages</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">In-app messages give you the power to engage customers when they are active in your app. However, this also means that messages run the risk of distracting from your product experience. Join this event and learn strategies to make in-app messaging a high-converting, and consistent part of your cross-channel approach..</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/lifecycle-marketing-for-self-service-growth/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/8b/Workana-Webinar-2-8b70af18.webp 768w, /wp-content/themes/yootheme/cache/dd/Workana-Webinar-2-dd14c029.webp 1024w, /wp-content/themes/yootheme/cache/9e/Workana-Webinar-2-9e99e0fc.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/89/Workana-Webinar-2-891576f6.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/89/Workana-Webinar-2-891576f6.png" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Email Marketing for Self-Service Growth &#8211; with Workana</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Special guest Alessandra Carvalho, Email Marketing Strategist at Workana, highlights how to harness the power of behavior-based messaging campaigns to drive platform adoption and grow engagement to a network of over 1m users.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/lifecycle-marketing-for-edtech-growth/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/df/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-dfd2d4b2.webp 768w, /wp-content/themes/yootheme/cache/5a/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-5aafd591.webp 1024w, /wp-content/themes/yootheme/cache/b7/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-b727e4c8.webp 1366w, /wp-content/themes/yootheme/cache/98/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-985bb5a9.webp 1600w, /wp-content/themes/yootheme/cache/c2/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-c2e8049e.webp 1920w, /wp-content/themes/yootheme/cache/93/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-937e9e0f.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/5f/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-5fd5b7e8.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/5f/Lifecycle_Marketing_for_Edtech_Growth_OG_Image_1200x630-5fd5b7e8.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Lifecycle Marketing for EdTech Growth</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Learn from a panel of EdTech lifecycle marketers who use Customer.io to help create more personalized learning experiences, and retain customers long-term.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/localizing-marketing-for-your-global-audience/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/e3/Localizing-Marketing-OG-1200x600-1-e329dd4e.webp 768w, /wp-content/themes/yootheme/cache/ad/Localizing-Marketing-OG-1200x600-1-ade3726a.webp 1024w, /wp-content/themes/yootheme/cache/40/Localizing-Marketing-OG-1200x600-1-406b4333.webp 1366w, /wp-content/themes/yootheme/cache/6f/Localizing-Marketing-OG-1200x600-1-6f171252.webp 1600w, /wp-content/themes/yootheme/cache/ab/Localizing-Marketing-OG-1200x600-1-ab0b8168.webp 1920w, /wp-content/themes/yootheme/cache/15/Localizing-Marketing-OG-1200x600-1-15723dfe.webp 2400w" sizes="(min-width: 2400px) 2400px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202400%201260'%3E%3C/svg%3E" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/96/Localizing-Marketing-OG-1200x600-1-96cf8d7a.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/96/Localizing-Marketing-OG-1200x600-1-96cf8d7a.png" width="2400" height="1260" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Localizing marketing for your global audience</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Does your app/site have multiple languages or customer groups in various regions? If so, download this guide to identify the best ways to message your global audiences.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/live-build-testing-and-attribution/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20562%20275'%3E%3C/svg%3E" width="562" height="275" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/uploads/2022/06/FinTech_EnsureROI_Testing_Workflow.svg"><noscript><img decoding="async" src="/wp-content/uploads/2022/06/FinTech_EnsureROI_Testing_Workflow.svg" width="562" height="275" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Live Build: Testing and Attribution</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">As marketers, part of our mission is to continuously elevate the customer experience so being data-driven in our approach is a must.🔬 Don&#8217;t miss this opportunity to hear how to make experimentation an integral part of your campaign building workflow from our very own Customer Success Manager, Ryan Stahulak, during a behind-the-scenes look into Customer.io.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/retention-recipes/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/14/retention_recipes_preview-1449660c.webp 548w" sizes="(min-width: 548px) 548px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20548%20455'%3E%3C/svg%3E" width="548" height="455" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/ca/retention_recipes_preview-caef24f8.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/ca/retention_recipes_preview-caef24f8.png" width="548" height="455" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Retention recipes</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">How can you build a high-performing campaign strategy to retain customers long-term and increase lifetime value? This guide will unlock strategies to stop churn and boost loyalty at four key customer lifecycle moments.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/live-build-creating-data-driven-campaigns-for-two-sided-marketplace-companies/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/c8/Data-Driven-Webinar-V2-2-c8ca82be.webp 768w, /wp-content/themes/yootheme/cache/f0/Data-Driven-Webinar-V2-2-f0fa8d6f.webp 1024w, /wp-content/themes/yootheme/cache/2c/Data-Driven-Webinar-V2-2-2cec5613.webp 1200w" sizes="(min-width: 1200px) 1200px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20627'%3E%3C/svg%3E" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/0b/Data-Driven-Webinar-V2-2-0b754558.jpeg"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/0b/Data-Driven-Webinar-V2-2-0b754558.jpeg" width="1200" height="627" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Live Build: Creating Data-Driven Campaigns for Two-Sided Marketplace Companies</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Watch and learn how to break down data and messaging silos that commonly exist for two-sided marketplace companies and create more cohesive, data-driven customer experiences.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/pawp-webinar/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/05/Screen-Shot-2022-08-08-at-3.24.23-PM-054c4c8c.webp 768w, /wp-content/themes/yootheme/cache/b3/Screen-Shot-2022-08-08-at-3.24.23-PM-b3535c98.webp 982w" sizes="(min-width: 982px) 982px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20982%20652'%3E%3C/svg%3E" width="982" height="652" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/80/Screen-Shot-2022-08-08-at-3.24.23-PM-8064e6a5.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/80/Screen-Shot-2022-08-08-at-3.24.23-PM-8064e6a5.png" width="982" height="652" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Growth through Retention &#8211; with Pawp</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">She tripled email conversion rates in her first 3 months on the job, now hear how Jessie Miller, growth marketing manager at Pawp, is tackling retention marketing. Learn strategies for using a cross-channel and data-driven messaging approach to nurture increased customer adoption and lifetime value.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/guide-to-hipaa-compliant-customer-engagement/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/17/Preview_Guide-to-HIPAA-Compliant-Customer-Engagement-1715ccb0.webp 768w, /wp-content/themes/yootheme/cache/ba/Preview_Guide-to-HIPAA-Compliant-Customer-Engagement-ba2cc574.webp 960w" sizes="(min-width: 960px) 960px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20960%20540'%3E%3C/svg%3E" width="960" height="540" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/59/Preview_Guide-to-HIPAA-Compliant-Customer-Engagement-5981a1e5.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/59/Preview_Guide-to-HIPAA-Compliant-Customer-Engagement-5981a1e5.png" width="960" height="540" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Guide to HIPAA Compliant Customer Engagement</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">How can you build a data-driven strategy while also maintaining top-notch compliance? This guide will provide the foundations for engaging your customers safely and effectively.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Webinars">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/would-you-give-your-wallet-to-a-stranger/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/ec/would-you-give-your-wallet-to-a-stranger-thumbnail-ec5089be.webp 768w, /wp-content/themes/yootheme/cache/88/would-you-give-your-wallet-to-a-stranger-thumbnail-8896d792.webp 1024w, /wp-content/themes/yootheme/cache/64/would-you-give-your-wallet-to-a-stranger-thumbnail-6444985d.webp 1298w" sizes="(min-width: 1298px) 1298px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201298%20856'%3E%3C/svg%3E" width="1298" height="856" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/fc/would-you-give-your-wallet-to-a-stranger-thumbnail-fc1f4785.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/fc/would-you-give-your-wallet-to-a-stranger-thumbnail-fc1f4785.png" width="1298" height="856" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Webinar: Would You Give Your Wallet To A Stranger?</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Special guest Chris Craver (Valley Bank) highlights approaches for onboarding FinTech customers more effectively by reducing friction during KYC and guiding customers to key milestones with behavior-based campaigns.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Guides">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/fintech-kyc-and-onboarding-campaigns/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/ba/kyc_guide_preview-ba0c0048.webp 545w" sizes="(min-width: 545px) 545px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20545%20458'%3E%3C/svg%3E" width="545" height="458" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/24/kyc_guide_preview-24087761.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/24/kyc_guide_preview-24087761.png" width="545" height="458" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">5 Keys to Better FinTech KYC and Onboarding Campaigns</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">This guide will discuss 5 tried-and-true best practices for converting more customers through your registration, KYC, and onboarding funnel.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                <div data-tag="Tutorials">
<div class="el-item uk-grid-item-match">
        <a class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block" href="https://customer.io/learn/email-deliverability/">    
    
        <div class="uk-child-width-expand" uk-grid>            <div class="uk-width-1-4@m"><div class="uk-inline-clip"><picture>
<source type="image/webp" data-lazy-srcset="/wp-content/themes/yootheme/cache/09/G2_900x470-2-09d8beb8.webp 768w, /wp-content/themes/yootheme/cache/7b/G2_900x470-2-7b8f5cba.webp 1024w, /wp-content/themes/yootheme/cache/0b/G2_900x470-2-0bae5772.webp 1366w, /wp-content/themes/yootheme/cache/b5/G2_900x470-2-b59a9ed4.webp 1600w, /wp-content/themes/yootheme/cache/e9/G2_900x470-2-e944e0f8.webp 1799w, /wp-content/themes/yootheme/cache/e3/G2_900x470-2-e3ae3e95.webp 1800w" sizes="(min-width: 1800px) 1800px">
<img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201800%20940'%3E%3C/svg%3E" width="1800" height="940" class="el-image uk-transition-scale-up uk-transition-opaque" alt data-lazy-src="/wp-content/themes/yootheme/cache/a1/G2_900x470-2-a120f707.png"><noscript><img decoding="async" src="/wp-content/themes/yootheme/cache/a1/G2_900x470-2-a120f707.png" width="1800" height="940" class="el-image uk-transition-scale-up uk-transition-opaque" alt loading="lazy"></noscript>
</picture></div></div>            <div class="uk-margin-remove-first-child">
                                    

        
                <h3 class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">                        <span class="uk-link-heading">Learn Email Deliverability</span>                    </h3>        
        
    
        
        
                <div class="el-content uk-panel uk-margin-top">Ever wonder why some of your emails don’t land in inboxes? As an email sender, your domain and sending IP reputation are your personal credit score. If your reputation is poor, your emails won’t reliably get to your customers. In this email series, you’ll learn everything you need to become a deliverability expert.</div>        
        
                <div class="uk-margin-top"><div class="el-link uk-button uk-button-default">Read more</div></div>        
                
            </div>        </div>

    
        </a>    
</div></div>                </div>

    
</div>

                
            
        
    
</div></div>
                                </div>
                
            
        
    
</div><!-- HFCM by 99 Robots - Snippet # 27: Double-Opt In -->
<script>
if (window.location.href.includes("double-opt-in")){
UIkit.notification("<div class=\"uk-text-center\">You're confirmed!<br>Check your inbox for your first lesson 📧</div>");
}
</script>
<!-- /end HFCM by 99 Robots -->
        
            </main>

            
                        <footer>
                <!-- Builder #footer --><style class="uk-margin-remove-adjacent">#footer\#2 { font-weight: 500 !important; } #footer\#3 { padding-left:0px; } #footer\#4 .el-item a{ color: #6f7488 !important; line-height:22.4px !important; } #footer\#4 .el-item { line-height:22.4px !important; } #footer\#5 { padding-left:0px; } #footer\#6 .el-item a{ color: #6f7488 !important; line-height:22.4px !important; } #footer\#6 .el-item { line-height:22.4px !important; } #footer\#7 { padding-left:0px; } #footer\#8 .el-item a{ color: #6f7488 !important; line-height:22.4px !important; } #footer\#8 .el-item { line-height:22.4px !important; } #footer\#9 { padding-left:0px; } #footer\#10 .el-item a{ color: #6f7488 !important; line-height:22.4px !important; } #footer\#10 .el-item { line-height:22.4px !important; } #footer\#11 { padding-left:0px; } #footer\#12 .el-item a{ color: #6f7488 !important; line-height:22.4px !important; } #footer\#12 .el-item { line-height:22.4px !important; } #footer\#13 #footer-sublinks li{ display: inline-block; padding: 0px 5px; font-size:11px; } /* Footer legal */ #footer\#14 .footer-legal { display: flex; flex-flow: row wrap; justify-content: center; align-items: center; gap: 16px; list-style: none; font-size: 14px; margin: 0; padding: 0; } #footer\#14 .footer-legal li { display: flex; justify-content: center; } </style>
<div class="cio-footer uk-section-default uk-light">
        <div data-src="/wp-content/uploads/2023/06/ink-950.png" data-sources="[{&quot;type&quot;:&quot;image\/webp&quot;,&quot;srcset&quot;:&quot;\/wp-content\/themes\/yootheme\/cache\/c4\/ink-950-c44a573c.webp 1451w&quot;,&quot;sizes&quot;:&quot;(max-aspect-ratio: 1451\/519) 280vh&quot;}]" uk-img class="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section" uk-height-viewport="expand: true;">    
        
        
        
            
                                <div class="uk-container">                
                    
                    <div class="uk-grid tm-grid-expand uk-margin-large" uk-grid uk-height-match="target: .uk-card">
<div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
    
        
            
            
                        <div class="uk-panel uk-width-1-1">            
                
                    
<div class="uk-h2 uk-margin-small uk-text-left@m uk-text-center" id="footer#2">        <span style="color: #fff;"> Learn why <span class="uline uline--2"><!-- HFCM by 99 Robots - Snippet # 22: Customer Count Shortcode -->
7,600+
<!-- /end HFCM by 99 Robots -->
</span> companies trust their messages to Customer.io</span>    </div>
<div class="uk-margin uk-text-left@m uk-text-center">
        <div class="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-left@m uk-flex-center" uk-grid>    
    
                <div class="el-item">
        
        
<a class="el-content uk-button uk-button-primary" href="/demo/">
    
        Request Demo    
    
</a>


                </div>
        
    
                <div class="el-item">
        
        
<a class="el-content uk-button uk-button-default" href="https://fly.customer.io/signup">
    
        Start Trial    
    
</a>


                </div>
        
    
        </div>
    
</div>

                
                        </div>
            
        
    
</div>
<div class="uk-width-1-2@m">
    
        
            
            
            
                
                    
<div class="uk-margin uk-text-center">
    <div class="uk-grid uk-child-width-1-4 uk-child-width-1-4@s uk-child-width-1-3@m uk-child-width-1-3@l uk-child-width-1-3@xl uk-flex-center uk-flex-middle uk-grid-match" uk-grid>        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20117%2048'%3E%3C/svg%3E" width="117" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/klar-white.svg"><noscript><img src="/wp-content/uploads/2023/06/klar-white.svg" width="117" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20118%2048'%3E%3C/svg%3E" width="118" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/buffer-white.svg"><noscript><img src="/wp-content/uploads/2023/06/buffer-white.svg" width="118" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20117%2048'%3E%3C/svg%3E" width="117" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/workana-white.svg"><noscript><img src="/wp-content/uploads/2023/06/workana-white.svg" width="117" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20119%2048'%3E%3C/svg%3E" width="119" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/mailgun-white.svg"><noscript><img src="/wp-content/uploads/2023/06/mailgun-white.svg" width="119" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2048'%3E%3C/svg%3E" width="120" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/ifttt-white.svg"><noscript><img src="/wp-content/uploads/2023/06/ifttt-white.svg" width="120" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20119%2048'%3E%3C/svg%3E" width="119" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/imax-white.svg"><noscript><img src="/wp-content/uploads/2023/06/imax-white.svg" width="119" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20119%2048'%3E%3C/svg%3E" width="119" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/segment-white.svg"><noscript><img src="/wp-content/uploads/2023/06/segment-white.svg" width="119" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2048'%3E%3C/svg%3E" width="120" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/mapbox-white.svg"><noscript><img src="/wp-content/uploads/2023/06/mapbox-white.svg" width="120" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        <div>
<div class="el-item uk-panel uk-margin-remove-first-child">
    
    
        
                    

        
        
        
    
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20119%2048'%3E%3C/svg%3E" width="119" height="48" class="el-image uk-margin-top" alt data-lazy-src="/wp-content/uploads/2023/06/notion-white.svg"><noscript><img src="/wp-content/uploads/2023/06/notion-white.svg" width="119" height="48" class="el-image uk-margin-top" alt loading="lazy"></noscript>        
        
        
        
        
        
        
    
    
</div></div>
        </div>

</div>

                
            
        
    
</div></div>
                                </div>
                
            
        
        </div>
    
</div>
<div class="cio-footer-links uk-section-default uk-section">
    
        
        
        
            
                                <div class="uk-container uk-container-small">                
                    
                    <div class="uk-grid tm-grid-expand uk-grid-column-small uk-grid-margin" uk-grid>
<div class="uk-width-1-2@s uk-width-1-5@m">
    
        
            
            
            
                
                    
<div class="uk-h4 uk-margin-small uk-text-left@m uk-text-center" id="footer#3">        Product    </div>
<ul class="uk-list" id="footer#4">
    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/features" class="el-link uk-margin-remove-last-child">Features</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/customer-success/" class="el-link uk-margin-remove-last-child">Customer Success</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/pricing/" class="el-link uk-margin-remove-last-child">Pricing</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/visual-workflow-builder/" class="el-link uk-margin-remove-last-child">Workflows</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/leads/" class="el-link uk-margin-remove-last-child">Lead Engagement</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/custom-audience-sync/" class="el-link uk-margin-remove-last-child">Ad Audience Sync</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/transactional-messages/" class="el-link uk-margin-remove-last-child">Transactional Messaging</a></div>            </li>
</ul>
                
            
        
    
</div>
<div class="uk-width-1-2@s uk-width-1-5@m">
    
        
            
            
            
                
                    
<div class="uk-h4 uk-margin-small uk-text-left@m uk-text-center" id="footer#5">        Resources    </div>
<ul class="uk-list" id="footer#6">
    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/docs/" class="el-link uk-margin-remove-last-child">Documentation</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/docs/release-notes/" class="el-link uk-margin-remove-last-child">Release Notes</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://community.customer.io/" class="el-link uk-margin-remove-last-child">Community</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/docs/api/" class="el-link uk-margin-remove-last-child">Customer.io API</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/integrations/" class="el-link uk-margin-remove-last-child">Integrations</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/learn/" class="el-link uk-margin-remove-last-child">Webinars and Guides</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/data-export/" class="el-link uk-margin-remove-last-child">Data Export Methods</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/product-demo/" class="el-link uk-margin-remove-last-child">Watch a Demo Video</a></div>            </li>
</ul>
                
            
        
    
</div>
<div class="uk-width-1-3@s uk-width-1-5@m">
    
        
            
            
            
                
                    
<div class="uk-h4 uk-margin-small uk-text-left@m uk-text-center" id="footer#7">        Industry    </div>
<ul class="uk-list" id="footer#8">
    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/healthcare/" class="el-link uk-margin-remove-last-child">Healthcare</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/marketplace/" class="el-link uk-margin-remove-last-child">Marketplace</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/edtech/" class="el-link uk-margin-remove-last-child">EdTech</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/saas/" class="el-link uk-margin-remove-last-child">SaaS</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/iot/" class="el-link uk-margin-remove-last-child">Internet of Things</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/media/" class="el-link uk-margin-remove-last-child">Media Companies</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/fintech/" class="el-link uk-margin-remove-last-child">FinTech</a></div>            </li>
</ul>
                
            
        
    
</div>
<div class="uk-width-1-3@s uk-width-1-5@m">
    
        
            
            
            
                
                    
<div class="uk-h4 uk-margin-small uk-text-left@m uk-text-center" id="footer#9">        Compare    </div>
<ul class="uk-list" id="footer#10">
    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-activecampaign/" class="el-link uk-margin-remove-last-child">ActiveCampaign</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-braze/" class="el-link uk-margin-remove-last-child">Braze</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-hubspot/" class="el-link uk-margin-remove-last-child">HubSpot</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-iterable/" class="el-link uk-margin-remove-last-child">Iterable</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-mailchimp/" class="el-link uk-margin-remove-last-child">Mailchimp</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-onesignal/" class="el-link uk-margin-remove-last-child">OneSignal</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-sendgrid/" class="el-link uk-margin-remove-last-child">SendGrid</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="/competitors/customer-io-vs-intercom/" class="el-link uk-margin-remove-last-child">Intercom</a></div>            </li>
</ul>
                
            
        
    
</div>
<div class="uk-width-1-3@s uk-width-1-5@m">
    
        
            
            
            
                
                    
<div class="uk-h4 uk-margin-small uk-text-left@m uk-text-center" id="footer#11">        Company    </div>
<ul class="uk-list" id="footer#12">
    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/blog/" class="el-link uk-margin-remove-last-child">Blog</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://fly.customer.io/?support=true" class="el-link uk-margin-remove-last-child">Support</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/partners/" class="el-link uk-margin-remove-last-child">Partners</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/about/" class="el-link uk-margin-remove-last-child">About</a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/startup-program/" class="el-link uk-margin-remove-last-child"><p><span>Startup Program</span></p></a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/careers/" class="el-link uk-margin-remove-last-child"><span class="footer-careers">Careers </span></a></div>            </li>

    <li class="el-item">        
    <div class="el-content uk-panel"><a href="https://customer.io/contact/" class="el-link uk-margin-remove-last-child">Contact Us</a></div>            </li>
</ul>
                
            
        
    
</div></div>
                                </div>
                
            
        
    
</div>
<div id="footer#14" class="uk-section-default uk-section">
    
        
        
        
            
                                <div class="uk-container">                
                    
                    <div class="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-small uk-margin-remove-bottom">
<div class="uk-grid-item-match uk-flex-middle uk-width-1-1@m">
    
        
            
            
                        <div class="uk-panel uk-width-1-1">            
                
                    <div id="footer#13" class="uk-text-center uk-link-muted"><div class="uk-width-1-1@m uk-first-column">
    <div class="uk-margin uk-text-center">
        <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
      ">
        <div class="uk-first-column">
            <a aria-label="Link to Customer.io's twitter page."class="el-link uk-icon-link uk-icon" target="_blank" href="https://twitter.com/CustomerIO" uk-icon="icon: x;"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="x"><path d="M15.176 2H17.936L11.9061 8.89203L19 18.2703H13.4454L9.09511 12.5823L4.11727 18.2703H1.35539L7.80498 10.8986L1 2H6.69528L10.6277 7.19891L15.176 2ZM14.2073 16.6181H15.7367L5.86432 3.5654H4.22323L14.2073 16.6181Z"></path></svg></a>        </div>
        <div>
            <a aria-label="Link to Customer.io's Facebook page."class="el-link uk-icon-link uk-icon" target="_blank" href="https://www.facebook.com/customer.io/" uk-icon="icon: facebook;"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="facebook"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg></a>        </div>
        <div>
            <a aria-label="Link to Customer.io's Linked In page." class="el-link uk-icon-link uk-icon" target="_blank" href="https://www.linkedin.com/company/customer-io/" uk-icon="icon: linkedin;"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="linkedin"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg></a>        </div>
        <div>
            <a aria-label="Google Maps link to Customer.io's office in Portland, Oregon."class="el-link uk-icon-link uk-icon" target="_blank" href="https://www.google.com/maps/place/Customer.io/@45.5213658,-122.6829807,17z/data=!3m1!4b1!4m5!3m4!1s0x54950b9deef653f1:0xf88d514655119e45!8m2!3d45.5213658!4d-122.680792" uk-icon="icon: location;"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="location"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg></a>        </div>
        <div>
            <a aria-label="Link to send Customer.io an email."class="el-link uk-icon-link uk-icon" target="_blank" href="mailto:win@customer.io" uk-icon="icon: mail;"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="mail"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg></a>        </div>
        </div>
    </div> 
</div>
    
    <ul class="footer-legal">
        <li><a href="/legal/privacy-policy/">Privacy Policy</a></li>
        <li><a href="/legal/terms-of-service/">Terms of Service</a></li>
            <li><a href="https://status.customerio.com/">Status</a></li>
       
        
        <li>©<span><script> document.currentScript.insertAdjacentHTML('afterend', '<time datetime="' + new Date().toJSON() + '">' + new Intl.DateTimeFormat(document.documentElement.lang, {year: 'numeric'}).format() + '</time>'); </script>&nbsp;</span> Peaberry Software, Inc.</li>
    </ul></div>
                
                        </div>
            
        
    
</div></div>
                                </div>
                
            
        
    
</div>            </footer>
            
        </div>

        
        <!-- HFCM by 99 Robots - Snippet # 30: GravityForms Data Layer -->
<script>
function slugify(str) {
  return String(str)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_');
}
	
function updateDataLayerOnChange(e) {
	const label = e.target.closest('.dl-capture').querySelector('.gfield_label').innerText;
	const value = e.target.value;
	
	const payload = {};
	payload['input_' + slugify(label)] = value;
	dataLayer.push(payload)
}
document.addEventListener('DOMContentLoaded', () => {
	const inputs = document.querySelectorAll('.dl-capture input')
	inputs.forEach(el => el.addEventListener('change', updateDataLayerOnChange))
})
</script>
<!-- /end HFCM by 99 Robots -->

<!-- GTM Container placement set to footer -->
<!-- Google Tag Manager (noscript) -->
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRGKPHX" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --><script id="custio-arrow-svg" type="text/template"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.69975 15.3134C9.31531 15.7099 8.68223 15.7197 8.2857 15.3353L1.80916 9.05628C1.60029 8.85379 1.48996 8.57038 1.50693 8.27996C1.52391 7.98955 1.66651 7.72092 1.89754 7.54414L9.37409 1.82315C9.8127 1.48754 10.4403 1.57103 10.776 2.00964C11.1116 2.44824 11.0281 3.07588 10.5895 3.4115L5.15171 7.57243C6.2804 7.6591 7.72212 7.75271 9.34664 7.81877C13.2579 7.97781 18.1773 7.97476 22.333 7.34943C22.8791 7.26725 23.3885 7.64337 23.4706 8.1895C23.5528 8.73564 23.1767 9.24499 22.6306 9.32717C18.2863 9.98087 13.2174 9.97782 9.26538 9.81712C7.72056 9.7543 6.33854 9.66702 5.22657 9.58384L9.67785 13.8994C10.0744 14.2838 10.0842 14.9169 9.69975 15.3134Z" fill="#BA9CFF"/>
</svg></script><svg width="0" height="0">
  <defs>
    <clipPath id="organicCircleClipPath" clipPathUnits="objectBoundingBox">
      <path d="M.50965.95624.52544.95667l.00209,0A.02716.02716,0,0,0,.54.95494L.55589.95365l.0011,0L.57965.95188h.003L.59288.951h0l.001-.00017L.60014.95014.61906.94775.6202.94753.62767.94576.64112.94318.645.94188.65627.93861.66758.93535.67206.93448.67654.93361.68081.93187.68508.93013.68978.92882.698.92631.718.91925.72563.9162l.00768-.003L.73542.91223.738.911.753.904h0L.76329.899l.005-.0028L.7745.89249.78069.88879l.00682-.004L.8046.87443A.3914.3914,0,0,0,.83606.85088L.84472.844.85481.8348.87119.8209.87411.81842.875.81742.88228.81.88869.80328.89509.79654.907.78392.91259.77783.92283.76477.92881.7565.93565.74585.9446.73214.95743.71.95954.706A.34366.34366,0,0,0,.97406.6747.3516.3516,0,0,0,.992.6203L.99284.61682.99369.61334A.22813.22813,0,0,0,1.00138.57548.13736.13736,0,0,0,1.00563.55111L1.00692.54067c.00214-.01349.00342-.027.00427-.04047A.34548.34548,0,0,0,1.01162.46365l-.00214-.027-.006-.03916L1.0001.37923.99423.3591.99326.35617.99113.35051A.06422.06422,0,0,1,.98385.33212L.983.32919.98208.3264.98088.3231.97546.31143.97406.30787.96513.28887.95527.2674.95442.26566h0L.94247.24608.93828.24107.93564.23825.93329.23368.93094.22911.922.21649.921.21508.91814.2117.91062.20293.91.20213.90859.20006A.05683.05683,0,0,0,.89594.18559L.8921.18081h0A.08555.08555,0,0,0,.87673.16558L.872.16166.85475.147.84686.14077h0L.84259.13816.83675.13447.82679.129.82594.12837.82509.12772.81454.11985.81185.11815.78966.10553A.26264.26264,0,0,0,.76192.09348L.7538.0903.72573.08045.7188.07811.71631.07743.70429.07376.68344.06779.67185.06462.6648.06288.65776.06114.6563.06077.6377.05722.61935.05461.6138.054.60825.05331.59288.052.58328.05113.57367.05026C.56853.05.56321.05007.55794.05017L.55019.05026.53846.05092.53117.05132.5119.0509a.44609.44609,0,0,0-.05132.003L.45458.05244.43964.04939.43516.04852.43068.04765.42385.04591.40464.0433H.39739L.38846.0438.37775.04417l-.006.00068-.003.00063L.36158.04682l-.012.0017L.3436.05026.33378.05287.32567.05461.3054.06266l-.02924.012A.41843.41843,0,0,0,.23262.09769L.23021.09929.22579.102A.26577.26577,0,0,0,.19624.12286L.18994.12772.17457.1423.1592.15687.13573.183C.12762.19255.12036.20256.1131.21257h0L.1101.21675a.3187.3187,0,0,0-.02.0302L.08236.26.0717.27828l-.014.02685L.05548.30961A.34353.34353,0,0,0,.04054.34616C.03542.36052.03072.37488.02688.38968L.0248.398C.022.40917.0192.42031.01749.43145L.016.44087a.5069.5069,0,0,0-.00667.058L.00905.51239l-.001.027v.003L.00981.57592.01194.59681l.0015.00826L.01493.61334.01664.62161l.0021.00888L.02261.64467.02283.64619.023.64772A.08634.08634,0,0,0,.03158.67339l.0017.00479L.04139.70081.04865.7156.05591.73039.05676.73214.06658.748.0764.7639a.09156.09156,0,0,0,.01365.017l.0094.00958L.102.79354a.17635.17635,0,0,0,.018.02L.12335.81742.12676.82134l.009.00871.00341.003.00342.003.0081.00694.01452.0122.00374.003L.178.864.1814.86616l.0111.0074h0L.2164.88748.22622.89292.236.89836.23958.90013.24159.901.24713.90315.2542.9063A.33177.33177,0,0,0,.286.91925L.30305.92469.32013.93013A.52682.52682,0,0,0,.379.94318L.41233.948.4467.952.44989.95232l.0104.001L.49385.9558Z" transform="translate(-0.0081 0)"/>
    </clipPath>
  </defs>
</svg>
<script type="text/javascript">var algolia = {"debug":false,"application_id":"TM58S0W4ZF","search_api_key":"98b3de8397b5c22dd695876f5fe0150a","powered_by_enabled":false,"query":"","autocomplete":{"sources":[{"index_id":"posts_post","index_name":"wp_posts_post","label":"Posts","admin_name":"Posts","position":10,"max_suggestions":3,"tmpl_suggestion":"autocomplete-post-suggestion","enabled":true}],"input_selector":"input[name='s']:not(.no-autocomplete):not(#adminbar-search)"},"indices":{"searchable_posts":{"name":"wp_searchable_posts","id":"searchable_posts","enabled":true,"replicas":[]},"posts_post":{"name":"wp_posts_post","id":"posts_post","enabled":true,"replicas":[]}}};</script>
<script type="text/html" id="tmpl-autocomplete-header">
	<div class="autocomplete-header">
		<div class="autocomplete-header-title">{{{ data.label }}}</div>
		<div class="clear"></div>
	</div>
</script>

<script type="text/html" id="tmpl-autocomplete-post-suggestion">
	<a class="suggestion-link" href="{{ data.permalink }}" title="{{ data.post_title }}">
		<# if ( data.images.thumbnail ) { #>
			<img class="suggestion-post-thumbnail" src="{{ data.images.thumbnail.url }}" alt="{{ data.post_title }}">
		<# } #>
		<div class="suggestion-post-attributes">
			<span class="suggestion-post-title">{{{ data._highlightResult.post_title.value }}}</span>
			<# if ( data._snippetResult['content'] ) { #>
				<span class="suggestion-post-content">{{{ data._snippetResult['content'].value }}}</span>
			<# } #>
		</div>
			</a>
</script>

<script type="text/html" id="tmpl-autocomplete-term-suggestion">
	<a class="suggestion-link" href="{{ data.permalink }}" title="{{ data.name }}">
		<svg viewBox="0 0 21 21" width="21" height="21">
			<svg width="21" height="21" viewBox="0 0 21 21">
				<path
					d="M4.662 8.72l-1.23 1.23c-.682.682-.68 1.792.004 2.477l5.135 5.135c.7.693 1.8.688 2.48.005l1.23-1.23 5.35-5.346c.31-.31.54-.92.51-1.36l-.32-4.29c-.09-1.09-1.05-2.06-2.15-2.14l-4.3-.33c-.43-.03-1.05.2-1.36.51l-.79.8-2.27 2.28-2.28 2.27zm9.826-.98c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25z"
					fill-rule="evenodd"></path>
			</svg>
		</svg>
		<span class="suggestion-post-title">{{{ data._highlightResult.name.value }}}</span>
	</a>
</script>

<script type="text/html" id="tmpl-autocomplete-user-suggestion">
	<a class="suggestion-link user-suggestion-link" href="{{ data.posts_url }}" title="{{ data.display_name }}">
		<# if ( data.avatar_url ) { #>
			<img class="suggestion-user-thumbnail" src="{{ data.avatar_url }}" alt="{{ data.display_name }}">
		<# } #>
		<span class="suggestion-post-title">{{{ data._highlightResult.display_name.value }}}</span>
	</a>
</script>

<script type="text/html" id="tmpl-autocomplete-footer">
	<div class="autocomplete-footer">
		<div class="autocomplete-footer-branding">
			<a href="#" class="algolia-powered-by-link" title="Algolia">
				<svg width="150px" height="25px" viewBox="0 0 572 64"><path fill="#36395A" d="M16 48.3c-3.4 0-6.3-.6-8.7-1.7A12.4 12.4 0 0 1 1.9 42C.6 40 0 38 0 35.4h6.5a6.7 6.7 0 0 0 3.9 6c1.4.7 3.3 1.1 5.6 1.1 2.2 0 4-.3 5.4-1a7 7 0 0 0 3-2.4 6 6 0 0 0 1-3.4c0-1.5-.6-2.8-1.9-3.7-1.3-1-3.3-1.6-5.9-1.8l-4-.4c-3.7-.3-6.6-1.4-8.8-3.4a10 10 0 0 1-3.3-7.9c0-2.4.6-4.6 1.8-6.4a12 12 0 0 1 5-4.3c2.2-1 4.7-1.6 7.5-1.6s5.5.5 7.6 1.6a12 12 0 0 1 5 4.4c1.2 1.8 1.8 4 1.8 6.7h-6.5a6.4 6.4 0 0 0-3.5-5.9c-1-.6-2.6-1-4.4-1s-3.2.3-4.4 1c-1.1.6-2 1.4-2.6 2.4-.5 1-.8 2-.8 3.1a5 5 0 0 0 1.5 3.6c1 1 2.6 1.7 4.7 1.9l4 .3c2.8.2 5.2.8 7.2 1.8 2.1 1 3.7 2.2 4.9 3.8a9.7 9.7 0 0 1 1.7 5.8c0 2.5-.7 4.7-2 6.6a13 13 0 0 1-5.6 4.4c-2.4 1-5.2 1.6-8.4 1.6Zm35.6 0c-2.6 0-4.8-.4-6.7-1.3a13 13 0 0 1-4.7-3.5 17.1 17.1 0 0 1-3.6-10.4v-1c0-2 .3-3.8 1-5.6a13 13 0 0 1 7.3-8.3 15 15 0 0 1 6.3-1.4A13.2 13.2 0 0 1 64 24.3c1 2.2 1.6 4.6 1.6 7.2V34H39.4v-4.3h21.8l-1.8 2.2c0-2-.3-3.7-.9-5.1a7.3 7.3 0 0 0-2.7-3.4c-1.2-.7-2.7-1.1-4.6-1.1s-3.4.4-4.7 1.3a8 8 0 0 0-2.9 3.6c-.6 1.5-.9 3.3-.9 5.4 0 2 .3 3.7 1 5.3a7.9 7.9 0 0 0 2.8 3.7c1.3.8 3 1.3 5 1.3s3.8-.5 5.1-1.3c1.3-1 2.1-2 2.4-3.2h6a11.8 11.8 0 0 1-7 8.7 16 16 0 0 1-6.4 1.2ZM80 48c-2.2 0-4-.3-5.7-1a8.4 8.4 0 0 1-3.7-3.3 9.7 9.7 0 0 1-1.3-5.2c0-2 .5-3.8 1.5-5.2a9 9 0 0 1 4.3-3.1c1.8-.7 4-1 6.7-1H89v4.1h-7.5c-2 0-3.4.5-4.4 1.4-1 1-1.6 2.1-1.6 3.6s.5 2.7 1.6 3.6c1 1 2.5 1.4 4.4 1.4 1.1 0 2.2-.2 3.2-.7 1-.4 1.9-1 2.6-2 .6-1 1-2.4 1-4.2l1.7 2.1c-.2 2-.7 3.8-1.5 5.2a9 9 0 0 1-3.4 3.3 12 12 0 0 1-5.3 1Zm9.5-.7v-8.8h-1v-10c0-1.8-.5-3.2-1.4-4.1-1-1-2.4-1.4-4.2-1.4a142.9 142.9 0 0 0-10.2.4v-5.6a74.8 74.8 0 0 1 8.6-.4c3 0 5.5.4 7.5 1.2s3.4 2 4.4 3.6c1 1.7 1.4 4 1.4 6.7v18.4h-5Zm12.9 0V17.8h5v12.3h-.2c0-4.2 1-7.4 2.8-9.5a11 11 0 0 1 8.3-3.1h1v5.6h-2a9 9 0 0 0-6.3 2.2c-1.5 1.5-2.2 3.6-2.2 6.4v15.6h-6.4Zm34.4 1a15 15 0 0 1-6.6-1.3c-1.9-.9-3.4-2-4.7-3.5a15.5 15.5 0 0 1-2.7-5c-.6-1.7-1-3.6-1-5.4v-1c0-2 .4-3.8 1-5.6a15 15 0 0 1 2.8-4.9c1.3-1.5 2.8-2.6 4.6-3.5a16.4 16.4 0 0 1 13.3.2c2 1 3.5 2.3 4.8 4a12 12 0 0 1 2 6H144c-.2-1.6-1-3-2.2-4.1a7.5 7.5 0 0 0-5.2-1.7 8 8 0 0 0-4.7 1.3 8 8 0 0 0-2.8 3.6 13.8 13.8 0 0 0 0 10.3c.6 1.5 1.5 2.7 2.8 3.6s2.8 1.3 4.8 1.3c1.5 0 2.7-.2 3.8-.8a7 7 0 0 0 2.6-2c.7-1 1-2 1.2-3.2h6.2a11 11 0 0 1-2 6.2 15.1 15.1 0 0 1-11.8 5.5Zm19.7-1v-40h6.4V31h-1.3c0-3 .4-5.5 1.1-7.6a9.7 9.7 0 0 1 3.5-4.8A9.9 9.9 0 0 1 172 17h.3c3.5 0 6 1.1 7.9 3.5 1.7 2.3 2.6 5.7 2.6 10v16.8h-6.4V29.6c0-2.1-.6-3.8-1.8-5a6.4 6.4 0 0 0-4.8-1.8c-2 0-3.7.7-5 2a7.8 7.8 0 0 0-1.9 5.5v17h-6.4Zm63.8 1a12.2 12.2 0 0 1-10.9-6.2 19 19 0 0 1-1.8-7.3h1.4v12.5h-5.1v-40h6.4v19.8l-2 3.5c.2-3.1.8-5.7 1.9-7.7a11 11 0 0 1 4.4-4.5c1.8-1 3.9-1.5 6.1-1.5a13.4 13.4 0 0 1 12.8 9.1c.7 1.9 1 3.8 1 6v1c0 2.2-.3 4.1-1 6a13.6 13.6 0 0 1-13.2 9.4Zm-1.2-5.5a8.4 8.4 0 0 0 7.9-5c.7-1.5 1.1-3.3 1.1-5.3s-.4-3.8-1.1-5.3a8.7 8.7 0 0 0-3.2-3.6 9.6 9.6 0 0 0-9.2-.2 8.5 8.5 0 0 0-3.3 3.2c-.8 1.4-1.3 3-1.3 5v2.3a9 9 0 0 0 1.3 4.8 9 9 0 0 0 3.4 3c1.4.7 2.8 1 4.4 1Zm27.3 3.9-10-28.9h6.5l9.5 28.9h-6Zm-7.5 12.2v-5.7h4.9c1 0 2-.1 2.9-.4a4 4 0 0 0 2-1.4c.4-.7.9-1.6 1.2-2.7l8.6-30.9h6.2l-9.3 32.4a14 14 0 0 1-2.5 5 8.9 8.9 0 0 1-4 2.8c-1.5.6-3.4.9-5.6.9h-4.4Zm9-12.2v-5.2h6.4v5.2H248Z"></path><path fill="#003DFF" d="M534.4 9.1H528a.8.8 0 0 1-.7-.7V1.8c0-.4.2-.7.6-.8l6.5-1c.4 0 .8.2.9.6v7.8c0 .4-.4.7-.8.7zM428 35.2V.8c0-.5-.3-.8-.7-.8h-.2l-6.4 1c-.4 0-.7.4-.7.8v35c0 1.6 0 11.8 12.3 12.2.5 0 .8-.4.8-.8V43c0-.4-.3-.7-.6-.8-4.5-.5-4.5-6-4.5-7zm106.5-21.8H528c-.4 0-.7.4-.7.8v34c0 .4.3.8.7.8h6.5c.4 0 .8-.4.8-.8v-34c0-.5-.4-.8-.8-.8zm-17.7 21.8V.8c0-.5-.3-.8-.8-.8l-6.5 1c-.4 0-.7.4-.7.8v35c0 1.6 0 11.8 12.3 12.2.4 0 .8-.4.8-.8V43c0-.4-.3-.7-.7-.8-4.4-.5-4.4-6-4.4-7zm-22.2-20.6a16.5 16.5 0 0 1 8.6 9.3c.8 2.2 1.3 4.8 1.3 7.5a19.4 19.4 0 0 1-4.6 12.6 14.8 14.8 0 0 1-5.2 3.6c-2 .9-5.2 1.4-6.8 1.4a21 21 0 0 1-6.7-1.4 15.4 15.4 0 0 1-8.6-9.3 21.3 21.3 0 0 1 0-14.4 15.2 15.2 0 0 1 8.6-9.3c2-.8 4.3-1.2 6.7-1.2s4.6.4 6.7 1.2zm-6.7 27.6c2.7 0 4.7-1 6.2-3s2.2-4.3 2.2-7.8-.7-6.3-2.2-8.3-3.5-3-6.2-3-4.7 1-6.1 3c-1.5 2-2.2 4.8-2.2 8.3s.7 5.8 2.2 7.8 3.5 3 6.2 3zm-88.8-28.8c-6.2 0-11.7 3.3-14.8 8.2a18.6 18.6 0 0 0 4.8 25.2c1.8 1.2 4 1.8 6.2 1.7s.1 0 .1 0h.9c4.2-.7 8-4 9.1-8.1v7.4c0 .4.3.7.8.7h6.4a.7.7 0 0 0 .7-.7V14.2c0-.5-.3-.8-.7-.8h-13.5zm6.3 26.5a9.8 9.8 0 0 1-5.7 2h-.5a10 10 0 0 1-9.2-14c1.4-3.7 5-6.3 9-6.3h6.4v18.3zm152.3-26.5h13.5c.5 0 .8.3.8.7v33.7c0 .4-.3.7-.8.7h-6.4a.7.7 0 0 1-.8-.7v-7.4c-1.2 4-4.8 7.4-9 8h-.1a4.2 4.2 0 0 1-.5.1h-.9a10.3 10.3 0 0 1-7-2.6c-4-3.3-6.5-8.4-6.5-14.2 0-3.7 1-7.2 3-10 3-5 8.5-8.3 14.7-8.3zm.6 28.4c2.2-.1 4.2-.6 5.7-2V21.7h-6.3a9.8 9.8 0 0 0-9 6.4 10.2 10.2 0 0 0 9.1 13.9h.5zM452.8 13.4c-6.2 0-11.7 3.3-14.8 8.2a18.5 18.5 0 0 0 3.6 24.3 10.4 10.4 0 0 0 13 .6c2.2-1.5 3.8-3.7 4.5-6.1v7.8c0 2.8-.8 5-2.2 6.3-1.5 1.5-4 2.2-7.5 2.2l-6-.3c-.3 0-.7.2-.8.5l-1.6 5.5c-.1.4.1.8.5 1h.1c2.8.4 5.5.6 7 .6 6.3 0 11-1.4 14-4.1 2.7-2.5 4.2-6.3 4.5-11.4V14.2c0-.5-.4-.8-.8-.8h-13.5zm6.3 8.2v18.3a9.6 9.6 0 0 1-5.6 2h-1a10.3 10.3 0 0 1-8.8-14c1.4-3.7 5-6.3 9-6.3h6.4zM291 31.5A32 32 0 0 1 322.8 0h30.8c.6 0 1.2.5 1.2 1.2v61.5c0 1.1-1.3 1.7-2.2 1l-19.2-17a18 18 0 0 1-11 3.4 18.1 18.1 0 1 1 18.2-14.8c-.1.4-.5.7-.9.6-.1 0-.3 0-.4-.2l-3.8-3.4c-.4-.3-.6-.8-.7-1.4a12 12 0 1 0-2.4 8.3c.4-.4 1-.5 1.6-.2l14.7 13.1v-46H323a26 26 0 1 0 10 49.7c.8-.4 1.6-.2 2.3.3l3 2.7c.3.2.3.7 0 1l-.2.2a32 32 0 0 1-47.2-28.6z"></path></svg>
			</a>
		</div>
	</div>
</script>

<script type="text/html" id="tmpl-autocomplete-empty">
	<div class="autocomplete-empty">
		No results matched your query 		<span class="empty-query">"{{ data.query }}"</span>
	</div>
</script>

<script type="text/javascript">
	window.addEventListener('load', function () {

		/* Initialize Algolia client */
		var client = algoliasearch( algolia.application_id, algolia.search_api_key );

		/**
		 * Algolia hits source method.
		 *
		 * This method defines a custom source to use with autocomplete.js.
		 *
		 * @param object $index Algolia index object.
		 * @param object $params Options object to use in search.
		 */
		var algoliaHitsSource = function( index, params ) {
			return function( query, callback ) {
				index
					.search( query, params )
					.then( function( response ) {
						callback( response.hits, response );
					})
					.catch( function( error ) {
						callback( [] );
					});
			}
		}

		/* Setup autocomplete.js sources */
		var sources = [];
		algolia.autocomplete.sources.forEach( function( config, i ) {
			var suggestion_template = wp.template( config[ 'tmpl_suggestion' ] );
			sources.push( {
				source: algoliaHitsSource( client.initIndex( config[ 'index_name' ] ), {
					hitsPerPage: config[ 'max_suggestions' ],
					attributesToSnippet: [
						'content:10'
					],
					highlightPreTag: '__ais-highlight__',
					highlightPostTag: '__/ais-highlight__'
				} ),
				templates: {
					header: function () {
						return wp.template( 'autocomplete-header' )( {
							label: _.escape( config[ 'label' ] )
						} );
					},
					suggestion: function ( hit ) {
						if ( hit.escaped === true ) {
							return suggestion_template( hit );
						}
						hit.escaped = true;

						for ( var key in hit._highlightResult ) {
							/* We do not deal with arrays. */
							if ( typeof hit._highlightResult[ key ].value !== 'string' ) {
								continue;
							}
							hit._highlightResult[ key ].value = _.escape( hit._highlightResult[ key ].value );
							hit._highlightResult[ key ].value = hit._highlightResult[ key ].value.replace( /__ais-highlight__/g, '<em>' ).replace( /__\/ais-highlight__/g, '</em>' );
						}

						for ( var key in hit._snippetResult ) {
							/* We do not deal with arrays. */
							if ( typeof hit._snippetResult[ key ].value !== 'string' ) {
								continue;
							}

							hit._snippetResult[ key ].value = _.escape( hit._snippetResult[ key ].value );
							hit._snippetResult[ key ].value = hit._snippetResult[ key ].value.replace( /__ais-highlight__/g, '<em>' ).replace( /__\/ais-highlight__/g, '</em>' );
						}

						return suggestion_template( hit );
					}
				}
			} );

		} );

		/* Setup dropdown menus */
		document.querySelectorAll( algolia.autocomplete.input_selector ).forEach( function( element ) {

			var config = {
				debug: algolia.debug,
				hint: false,
				openOnFocus: true,
				appendTo: 'body',
				templates: {
					empty: wp.template( 'autocomplete-empty' )
				}
			};

			if ( algolia.powered_by_enabled ) {
				config.templates.footer = wp.template( 'autocomplete-footer' );
			}

			/* Instantiate autocomplete.js */
			var autocomplete = algoliaAutocomplete( element, config, sources )
				.on( 'autocomplete:selected', function ( e, suggestion ) {
					/* Redirect the user when we detect a suggestion selection. */
					window.location.href = suggestion.permalink ?? suggestion.posts_url; // Users use the `posts_url` property instead of `permalink`.
				} );

			/* Force the dropdown to be re-drawn on scroll to handle fixed containers. */
			window.addEventListener( 'scroll', function() {
				if ( autocomplete.autocomplete.getWrapper().style.display === "block" ) {
					autocomplete.autocomplete.close();
					autocomplete.autocomplete.open();
				}
			} );
		} );

		var algoliaPoweredLink = document.querySelector( '.algolia-powered-by-link' );
		if ( algoliaPoweredLink ) {
			algoliaPoweredLink.addEventListener( 'click', function( e ) {
				e.preventDefault();
				window.location = "https://www.algolia.com/?utm_source=WordPress&utm_medium=extension&utm_content=" + window.location.hostname + "&utm_campaign=poweredby";
			} );
		}
	});
</script>
<script data-minify="1" type="text/javascript" src="https://customer.io/wp-content/cache/min/1/wp-content/plugins/duracelltomi-google-tag-manager/dist/js/gtm4wp-form-move-tracker.js?ver=1706581558" id="gtm4wp-form-move-tracker-js"></script>
<script type="text/javascript" id="rocket-browser-checker-js-after">
/* <![CDATA[ */
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
/* ]]> */
</script>
<script type="text/javascript" id="rocket-preload-links-js-extra">
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/demo\/|\/ppc\/demo\/|\/ppc\/email-marketing\/|\/ppc\/customer-engagement\/|\/ppc\/marketing-automation\/|\/ppc\/email-newsletters-demo\/|\/ppc\/lifecycle-marketing-demo\/|\/ppc\/messaging-automation-demo\/|\/ppc\/audience-segmentation-demo\/|\/ppc\/push-notifications-demo\/|\/ppc\/sms-marketing-demo\/|\/ppc\/transactional-messages-demo\/|\/ppc\/data-pipelines\/|\/competitors\/customer-io-vs-segment\/|\/competitors\/customer-io-vs-rudderstack\/|\/competitors\/customer-io-vs-braze\/|\/competitors\/customer-io-vs-iterable\/|\/competitors\/customer-io-vs-intercom\/|\/competitors\/customer-io-vs-sendgrid\/|\/competitors\/customer-io-vs-onesignal\/|\/competitors\/customer-io-vs-hubspot\/|\/referral\/|\/startup-program\/application\/|\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index.php\/)?(.*)wp-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm","siteUrl":"https:\/\/customer.io","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script type="text/javascript" id="rocket-preload-links-js-after">
/* <![CDATA[ */
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
/* ]]> */
</script>
<script data-minify="1" type="text/javascript" src="https://customer.io/wp-content/cache/min/1/wp-content/themes/customer-io/dist/js/jquery.mousewheel.js?ver=1706581558" id="jquery.mousewheel-js"></script>
<script data-minify="1" type="text/javascript" src="https://customer.io/wp-content/cache/min/1/wp-content/themes/customer-io/dist/js/jquery.scrolltabs.js?ver=1706581558" id="jquery.scrolltabs-js"></script>
<script data-minify="1" type="text/javascript" src="https://customer.io/wp-content/cache/min/1/wp-content/themes/customer-io/dist/js/theme.js?ver=1706581558" id="customerio-js"></script>
<script type="text/javascript" src="https://customer.io/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
<script type="text/javascript" id="wp-util-js-extra">
/* <![CDATA[ */
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://customer.io/wp-includes/js/wp-util.min.js?ver=6.4.3" id="wp-util-js"></script>
<script data-minify="1" type="text/javascript" src="https://customer.io/wp-content/cache/min/1/wp-content/plugins/wp-search-with-algolia/js/algoliasearch/dist/algoliasearch-lite.umd.js?ver=1706581558" id="algolia-search-js"></script>
<script type="text/javascript" src="https://customer.io/wp-content/plugins/wp-search-with-algolia/js/autocomplete.js/dist/autocomplete.min.js?ver=2.7.0" id="algolia-autocomplete-js"></script>
<script data-minify="1" type="text/javascript" src="https://customer.io/wp-content/cache/min/1/wp-content/plugins/wp-search-with-algolia/js/autocomplete-noconflict.js?ver=1706581558" id="algolia-autocomplete-noconflict-js"></script>
<script type="text/javascript" src="https://customer.io/wp-content/plugins/wp-rocket/assets/js/heartbeat.js?ver=3.15.8.1" id="heartbeat-js"></script>
<script>window.lazyLoadOptions=[{elements_selector:"img[data-lazy-src],.rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}},{elements_selector:".rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,}];window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(var i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async src="https://customer.io/wp-content/plugins/wp-rocket/assets/js/lazyload/17.8.3/lazyload.min.js"></script>    <script>"use strict";function wprRemoveCPCSS(){var preload_stylesheets=document.querySelectorAll('link[data-rocket-async="style"][rel="preload"]');if(preload_stylesheets&&0<preload_stylesheets.length)for(var stylesheet_index=0;stylesheet_index<preload_stylesheets.length;stylesheet_index++){var media=preload_stylesheets[stylesheet_index].getAttribute("media")||"all";if(window.matchMedia(media).matches)return void setTimeout(wprRemoveCPCSS,200)}var elem=document.getElementById("rocket-critical-css");elem&&"remove"in elem&&elem.remove()}window.addEventListener?window.addEventListener("load",wprRemoveCPCSS):window.attachEvent&&window.attachEvent("onload",wprRemoveCPCSS);</script><noscript><link rel='stylesheet' id='wp-block-library-css' href='https://customer.io/wp-includes/css/dist/block-library/style.min.css?ver=6.4.3' type='text/css' media='all' /><link data-minify="1" rel='stylesheet' id='custio-theme-css' href='https://customer.io/wp-content/cache/min/1/wp-content/themes/customer-io/style.css?ver=1706581558' type='text/css' media='all' /><link data-minify="1" rel='stylesheet' id='algolia-autocomplete-css' href='https://customer.io/wp-content/cache/min/1/wp-content/plugins/wp-search-with-algolia/css/algolia-autocomplete.css?ver=1706581558' type='text/css' media='all' /><link data-minify="1" href="https://customer.io/wp-content/cache/min/1/wp-content/themes/yootheme/css/theme.1.css?ver=1706581558" rel="stylesheet"></noscript></body>
</html>

<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1706866976 -->