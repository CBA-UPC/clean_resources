{"prompt":{"prompt_type":"modal","accent":"62072e","icon":"https://cdn.subscribers.com/uploads/setting/modal_image/44543/13335588_10153451945035146_6341306941011501238_n.png","headline":"InfoWorld wants to show you notifications","subheadline":"You can turn off notifications at any time from your browser","ctaButton":"Accept","noButton":"Do not accept","includeBranding":true,"customCSS":null,"subscriptionCategories":[],"position":"top-center","inset":24,"overlay":"light","showModalAgainAfter":-1,"showSubscribersCount":false,"alternatePromptStyle":"chicklet"},"site":{"name":"www.infoworld.com","appleWebsitePushId":null,"enabled":true,"subdomain":"infoworld","public_vapid_key":null,"triggerConditions":"{\"pageViews\":1,\"pageDelay\":4,\"scrollPercentage\":0,\"pageRule\":{\"include\":\"ALL\",\"operator\":\"\",\"value\":\"\"},\"device\":\"ALL\"}","installed":true,"https":true,"serviceWorkerPath":null,"serviceWorkerFilename":null,"siteLanguage":null,"inPageMonetization":{"active":null,"frequency":null,"showImage":null,"closeAfter":null,"rule":null},"inBrowserPush":true,"inBrowserNotifications":"[{\"id\":null,\"created_at\":\"2024-02-01T08:16:01-05:00\",\"title\":\"Java proposal would scrap sun.misc.Unsafe\",\"body\":\"Memory access methods in the 20-year-old class for performing low-level operations would be marked for removal in a future Java release.\",\"target_url\":\"https://www.infoworld.com/article/3712663/java-proposal-would-scrap-sunmiscunsafe-memory-access.html?utm_campaign=subscribers-\\u0026utm_medium=subscribers_push_notification\\u0026utm_source=subscribers\",\"icon_url\":\"https://cdn.subscribers.com/uploads/message/image/291749/square_icon_mini_magick20240201-26-1trlopv.png\"},{\"id\":null,\"created_at\":\"2024-01-31T17:00:58-05:00\",\"title\":\"How to build an ML data model in Java\",\"body\":\"Learn how to build and deploy a machine-learning data model in a Java-based production environment using Weka, Docker, and REST.\",\"target_url\":\"https://www.infoworld.com/article/3454363/machine-learning-for-java-developers-machine-learning-data-pipelines.html?utm_campaign=subscribers-\\u0026utm_medium=subscribers_push_notification\\u0026utm_source=subscribers\",\"icon_url\":\"https://cdn.subscribers.com/uploads/message/image/291660/square_icon_mini_magick20240131-35-jz0e7q.png\"},{\"id\":null,\"created_at\":\"2024-01-31T15:00:57-05:00\",\"title\":\"SnapLogic unveils no-code tool\",\"body\":\"GenAI Builder allows business users to create LLM-powered applications and workflows for customers, employees, and partners from enterprise data sources.\",\"target_url\":\"https://www.infoworld.com/article/3712760/snaplogic-unveils-no-code-tool-for-creating-llm-powered-apps.html?utm_campaign=subscribers-\\u0026utm_medium=subscribers_push_notification\\u0026utm_source=subscribers\",\"icon_url\":\"https://cdn.subscribers.com/uploads/message/image/291658/square_icon_mini_magick20240131-26-1q6j0ra.png\"}]"}}r n = a.__cmpCall;
					c.__uspapi(n.command, n.parameter, function(a, e) {
						var c = {
							__cmpReturn: {
								returnValue: a,
								success: e,
								callId: n.callId
							}
						};
						t.source.postMessage(r ? JSON.stringify(c) : c, "*")
					})
				}
			} catch (a) {}
		}
		if (typeof __uspapi !== "function") {
			c.__uspapi = p;
			__uspapi.msgHandler = l;
			c.addEventListener("message", l, false)
		}
	})();
</script>


<script type="text/javascript">
	
	/*
	 * Vendor config
	 */
	window.foundryVendors = {
		gtm: {
			name: 'Google Tag Manager',
			vendorId: '5e952f6107d9d20c88e7c975',
		},
		triblio: {
			name: 'Triblio',
			vendorId: '5f2bf89e2b87b72624acb6fa',
		},
		hubspot: {
			name: 'HubSpot',
			vendorId: '5ecb8bccb8e05c4a0a513172'
		}

	};

	window.checkGDPRConsent = function() {
		return false;
	};

	/*
	 * Variables for consent check
	 */
	var consentedCustomVendors = [];
	var consentedPurposes = [];
	var vendorGrants = {};

	window.loadVendorScript = function(vendorName) {

		console.log('Loading vendor script for', vendorName);

		if(vendorName === 'Google Tag Manager') {

			(function(w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({
					'gtm.start': new Date().getTime(),
					event: 'gtm.js'
				});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src =
					'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-KMKTVZL');
		};

		if(vendorName === 'Triblio') {

			/* Triblio Header */
			var triblioHeaderScript = document.createElement('script');
			triblioHeaderScript.src = "https://tribl.io/h.js?orgId=DoJGW2O912UGkvRezxvL";
			triblioHeaderScript.setAttribute('data-cfasync', 'false')
			triblioHeaderScript.setAttribute('type', 'text/javascript')
			document.head.appendChild(triblioHeaderScript);

			

			/* Triblio Firm tracking */
			var triblioBodyInterval = setInterval( function() {
				console.log('triblio-script waiting for document.body to be available');
				if(typeof document.body != 'undefined') {
					
					clearInterval(triblioBodyInterval);
					console.log('document.body should be available now, adding triblio firm_tracking.js and footer.js');

					/* Trilbio Footer */
					var triblioFooterScript = document.createElement('script');
					triblioFooterScript.src = "https:////tribl.io/footer.js?orgId=DoJGW2O912UGkvRezxvL";
					triblioFooterScript.setAttribute('data-cfasync', 'false')
					triblioFooterScript.setAttribute('type', 'text/javascript')
					document.body.appendChild(triblioFooterScript);

					var triblioFirmTrackingScript = document.createElement('script');
					triblioFirmTrackingScript.src = "https://tribl.io/firm_tracking.js?orgId=DoJGW2O912UGkvRezxvL";
					triblioFirmTrackingScript.setAttribute('data-cfasync', 'false')
					triblioFirmTrackingScript.setAttribute('type', 'text/javascript')
					document.body.appendChild(triblioFirmTrackingScript);
				}
			}, 100);
		};

		if(vendorName === 'HubSpot') {
			var hubspotHeaderScript = document.createElement('script');
			hubspotHeaderScript.src = "https://js.hs-scripts.com/1624046.js";
			hubspotHeaderScript.setAttribute('id', 'hs-script-loader')
			hubspotHeaderScript.setAttribute('async', '')
			hubspotHeaderScript.setAttribute('defer', '')
			hubspotHeaderScript.setAttribute('type', 'text/javascript')
			document.head.appendChild(hubspotHeaderScript);
		};



	};


	window._sp_ = {
		config: {
			accountId: 146,
			baseEndpoint: "https://cdn.privacy-mgmt.com",
			propertyHref: "https://foundryco.com",
			joinHref: true,
			targetingParams: {
				type: "GDPR"
			}
		}
	}
	window._sp_ccpa = {
		config: {
			baseEndpoint: "https://cdn.privacy-mgmt.com",
			propertyHref: "https://foundryco.com",
			accountId: 146,
			getDnsMsgMms: true,
			alwaysDisplayDns: false,
			targetingParams: {
				type: "CCPA"
			}
		}
	}


    __tcfapi('addEventListener', 2, function(tcData, success) {
    	console.log('Global consent event listener.')
    	if ( success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') ) {

    		isEuVisitor = tcData.gdprApplies || false;

    		console.log('Checking for EU/GDPR case.');

    		if( isEuVisitor ) {

    			console.log('EU case, running getCustomVendorConsents');
    			/* 
    			 * EU case, so we need to get custom vendor consents for the checkConsent function
    			 */
    			__tcfapi('getCustomVendorConsents', 2, function(vendorConsents, success) {
    				
    				if(success) {

    					console.log('getCustomVendorConsents success');

    					consentedPurposes = vendorConsents.consentedPurposes || [];
    					consentedCustomVendors = vendorConsents.consentedVendors || [];
    					vendorGrants = vendorConsents.grants;

    					/* 
    					 * Check GDPR consent by Sourcepoint vendor-id
    					 * e.g. checkGDPRCosent('5f2bf89e2b87b72624acb6fa')
    					 */
    					console.log('Building checkGDPRConsent function');
    					checkGDPRConsent = function(identity) {
    					    
    					    /*
					        * Always assume consent is not given by default
					        */
    					    var consentGiven = false;

    					    if (identity in vendorGrants) {

    					        /* 
					            * Check grant for consent and associated purposes
					            */
    					        var vendor = vendorGrants[identity];

    					        consentGiven = vendor.vendorGrant;
    					        
    					        /*
					            * Check purposes
					            */
    					        if (consentGiven) {

    					            for (var purposeID in vendor.purposeGrants) {
    					                
    					                consentGiven = vendor.purposeGrants[purposeID];

    					                /*
					                    * We can stop here if one consent was denied already
					                    */
    					                if (!consentGiven) {
    					                    break;
    					                }
    					            }
    					        }

    					        return consentGiven;
    					    }
    					
    					    /*
    					    * not in vendorGrants, so check purposes 
    					    */
    					    consentGiven = consentedPurposes.some( function(object) { return object['__id'] ==  identity} );
    					    
    					    return consentGiven;
    					};


    					/*
    					 * Iterate over vendors here and load their scripts if consent was given
    					 */

    					for(var vendor in foundryVendors) {

    					    console.log('EU Cosent - Checking consent for vendor', vendor, foundryVendors[vendor].vendorId);

    					    if( checkGDPRConsent(foundryVendors[vendor].vendorId) ) {
    					    	console.log('Consent given for vendor', vendor);

    					    	loadVendorScript(foundryVendors[vendor].name)
    					    }

    					};



    				} else {
    					console.error('Error in getCustomVendorConsents');
    				}

    			});

    			/* Remove this event listener so it does not fire twice within the same page */
    			__tcfapi('removeEventListener', 2, function(success) {
    				console.log('EU case consent check end, removing eventListener.');
    			}, tcData.listenerId);

    		} else {

    			/* 
    			 * Non-EU case, so check CCPA opt-out
    			 */
    			__uspapi('getUSPData', 1, function(uspData, success) {
    				if(success) {
    					var uspDataString = uspData.uspString;
    					var uspDataArray = [];
    					uspDataArray = uspDataString.split("");
    					
    					if( typeof uspDataArray[2] !== 'undefined' && uspDataArray[2] !== 'Y') {
    						/* User not opted out --> consent is true */

    						for(var vendor in foundryVendors) {

    							console.log('Non-EU case, CCPA not opted out, loading vendors..');
						    	loadVendorScript(foundryVendors[vendor].name)

    						};
    					} else {
    						/* User opted out --> consent is false */
    					}
    				}
    			});
    		}

    		/* Remove this event listener so it does not fire twice within the same page */
    		__tcfapi('removeEventListener', 2, function(success) {
    			console.log('Non-EU case consent check end, removing eventListener.');
    		}, tcData.listenerId);

    	};


    });
</script>

<!-- GDPR Script --->
<script src="https://cdn.privacy-mgmt.com/wrapperMessagingWithoutDetection.js"></script>

<!-- CCPA Script -->
<script src="https://cdn.privacy-mgmt.com/ccpa.js"></script>




<script type="text/javascript">
	/**
	 * Add click events to cmp buttons.
	 */
	const clickEvents = () => {
		const gdprLink = document.querySelector('.eea-consent-ui');
		const ccpaLink = document.querySelector('.ccpa-consent-ui');

		if (gdprLink) {
			gdprLink.addEventListener('click', e => {
			e.preventDefault();
			window._sp_.loadPrivacyManagerModal(199068);
			});
		}

		if (ccpaLink) {
			ccpaLink.addEventListener('click', e => {
			e.preventDefault();
			window._sp_ccpa.loadPrivacyManagerModal(23846, '5dfa75f712068b42714ed7b8')
			});
		}
	};
</script>


	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- This site is optimized with the Yoast SEO Premium plugin v21.0 (Yoast SEO v21.8) - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Computerworld Audience: Reach, Engage &amp; Advertise | Foundry</title>
	<meta name="description" content="Contact us to use Computerworld insights to reach and engage your audience of future customers. See what’s special about Computerworld." />
	<link rel="canonical" href="https://foundryco.com/our-brands/computerworld/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Computerworld Audience: Reach, Engage &amp; Advertise | Foundry" />
	<meta property="og:description" content="Contact us to use Computerworld insights to reach and engage your audience of future customers. See what’s special about Computerworld." />
	<meta property="og:url" content="https://foundryco.com/our-brands/computerworld/" />
	<meta property="og:site_name" content="Foundry" />
	<meta property="article:modified_time" content="2024-01-30T14:35:31+00:00" />
	<meta property="og:image" content="https://foundryco.com/wp-content/uploads/2020/05/obd3_computeworld_bg-1-prog.jpg" />
	<meta property="og:image:width" content="1440" />
	<meta property="og:image:height" content="560" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="1 minute" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://foundryco.com/our-brands/computerworld/","url":"https://foundryco.com/our-brands/computerworld/","name":"Computerworld Audience: Reach, Engage & Advertise | Foundry","isPartOf":{"@id":"https://foundryco.com/#website"},"primaryImageOfPage":{"@id":"https://foundryco.com/our-brands/computerworld/#primaryimage"},"image":{"@id":"https://foundryco.com/our-brands/computerworld/#primaryimage"},"thumbnailUrl":"https://foundryco.com/wp-content/uploads/2020/05/obd3_computeworld_bg-1-prog.jpg","datePublished":"2020-04-14T18:18:23+00:00","dateModified":"2024-01-30T14:35:31+00:00","description":"Contact us to use Computerworld insights to reach and engage your audience of future customers. See what’s special about Computerworld.","breadcrumb":{"@id":"https://foundryco.com/our-brands/computerworld/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://foundryco.com/our-brands/computerworld/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://foundryco.com/our-brands/computerworld/#primaryimage","url":"https://foundryco.com/wp-content/uploads/2020/05/obd3_computeworld_bg-1-prog.jpg","contentUrl":"https://foundryco.com/wp-content/uploads/2020/05/obd3_computeworld_bg-1-prog.jpg","width":1440,"height":560},{"@type":"BreadcrumbList","@id":"https://foundryco.com/our-brands/computerworld/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Our Brands","item":"https://foundryco.com/our-brands/"},{"@type":"ListItem","position":2,"name":"Computerworld"}]},{"@type":"WebSite","@id":"https://foundryco.com/#website","url":"https://foundryco.com/","name":"Foundry","description":"an IDG, Inc. company","publisher":{"@id":"https://foundryco.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://foundryco.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://foundryco.com/#organization","name":"Foundry","url":"https://foundryco.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://foundryco.com/#/schema/logo/image/","url":"https://foundryco.com/wp-content/uploads/2023/05/logo2023.svg","contentUrl":"https://foundryco.com/wp-content/uploads/2023/05/logo2023.svg","width":109,"height":27,"caption":"Foundry"},"image":{"@id":"https://foundryco.com/#/schema/logo/image/"}}]}</script>
	<!-- / Yoast SEO Premium plugin. -->


<link rel='dns-prefetch' href='//static.addtoany.com' />
<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
<link rel='dns-prefetch' href='//stats.wp.com' />
<link rel="alternate" type="application/rss+xml" title="Foundry &raquo; Feed" href="https://foundryco.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Foundry &raquo; Comments Feed" href="https://foundryco.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="Foundry &raquo; Computerworld Comments Feed" href="https://foundryco.com/our-brands/computerworld/feed/" />
<script>
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/foundryco.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.3"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
</script>
<style id='wp-emoji-styles-inline-css'>

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
<link rel='stylesheet' id='all-css-2' href='https://foundryco.com/wp-includes/css/dist/block-library/style.min.css?m=1706643139g' type='text/css' media='all' />
<style id='wp-block-library-inline-css'>
.has-text-align-justify{text-align:justify;}
</style>
<link rel='stylesheet' id='all-css-4' href='https://foundryco.com/_static/??-eJzTLy/QzcxLzilNSS3WzyrWz01NyUxMzUnNTc0rQeEU5CRWphbp5qSmJyZX6uVm5uklFxfr6OPTDpRD5sM02efaGpobmJmZGBuaGAAARKsu2w==' type='text/css' media='all' />
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='all-css-8' href='https://foundryco.com/_static/??-eJzTLy/QTc7PK0nNK9EvyUjNTS3WT8svzUspqjQyMDLWT8ksLoEIJJZk5ufpFpdU5qQW6yUXF+voE6GzOLMkFUmPfa6tobmBqaWxuZGFMQDh9yuj' type='text/css' media='all' />
<link rel='stylesheet' id='selectize-styles-css' href='https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.14.0/css/selectize.min.css?ver=1.0.0' media='all' />
<link rel='stylesheet' id='all-css-10' href='https://foundryco.com/_static/??/wp-content/plugins/searchwp/assets/css/frontend/search-forms.css,/wp-content/plugins/add-to-any/addtoany.min.css?m=1699458107' type='text/css' media='all' />
<script id="addtoany-core-js-before">
window.a2a_config=window.a2a_config||{};a2a_config.callbacks=[];a2a_config.overlays=[];a2a_config.templates={};
</script>
<script async src="https://static.addtoany.com/menu/page.js" id="addtoany-core-js"></script>
<script type="text/javascript" src="https://foundryco.com/_static/??-eJx9ykEKgCAQheELZZMktYrOIiqi5Gg6Et6+AhetggfvX3xwJeZQHVWbAv7ZWU1u/cbgcPRlgD/EgrNZkvliFZEMEqSjWocFpNaMIpPY3qT4ROd72Pg6LYuYuZj8DehQM5A=" ></script><link rel="https://api.w.org/" href="https://foundryco.com/wp-json/" /><link rel="alternate" type="application/json" href="https://foundryco.com/wp-json/wp/v2/pages/94938" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://foundryco.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.3" />
<link rel='shortlink' href='https://foundryco.com/?p=94938' />
<link rel="alternate" type="application/json+oembed" href="https://foundryco.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Ffoundryco.com%2Four-brands%2Fcomputerworld%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://foundryco.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Ffoundryco.com%2Four-brands%2Fcomputerworld%2F&#038;format=xml" />
	<style>img#wpstats{display:none}</style>
		<link rel="pingback" href="https://foundryco.com/xmlrpc.php"><link rel="icon" href="https://foundryco.com/wp-content/uploads/2022/02/cropped-favicon-neg-02-1-1.png?w=32" sizes="32x32" />
<link rel="icon" href="https://foundryco.com/wp-content/uploads/2022/02/cropped-favicon-neg-02-1-1.png?w=192" sizes="192x192" />
<link rel="apple-touch-icon" href="https://foundryco.com/wp-content/uploads/2022/02/cropped-favicon-neg-02-1-1.png?w=180" />
<meta name="msapplication-TileImage" content="https://foundryco.com/wp-content/uploads/2022/02/cropped-favicon-neg-02-1-1.png?w=270" />
</head>

<body class="page-template-default page page-id-94938 page-child parent-pageid-94915 wp-custom-logo no-sidebar">
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary">Skip to content</a>

	
	<header id="masthead" class="header site-header menu-closed default-back">

		<div class="inner-masthead grid-x">

		<div class="dropdown-pane search cell small-12" data-position="bottom" data-alignment="right" id="search-toggler" data-dropdown data-auto-focus="true">
			<form action="https://foundryco.com/search-results/" method="get" role="search" class="search-form" data-dropdown data-auto-focus="true">
				<span class="screen-reader-text">Search</span>
				<input type="search" placeholder="Search" value="" name="_search_facet">
				<input type="submit" class="screen-reader-text" value="Search" />
			</form>
		</div>

			<div class="site-branding cell small-2 medium-3 nav-left">

				
						<a href="https://foundryco.com/" rel="home">
							<div class="has-logo site-title" role="img" aria-label="Link to Foundry Homepage" style="background-image:url(https://foundryco.com/wp-content/uploads/2023/05/logo2023.svg)"></div>
							<div class="site-tagline show-for-large">an IDG, Inc. company</div>
						</a>

    			
			</div><!-- .site-branding -->

			<div class="nav-right cell small-10 medium-9">

					<nav id="utility-header">

						<ul id="utility-nav" class="menu utility-menu show-for-large"><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-100505"><a href="https://foundryco.com/contact-us/" class="menu-link">Contact us</a></li><li class="login menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-100506" aria-haspopup="true"><a href="https://foundryco.com/log-in/" class="menu-link">Log in</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-100506" aria-label="More Log in"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-102643"><a href="https://app.triblio.com/login" class="menu-link">Foundry ABM</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-102644"><a href="https://intent.foundryco.com/login?_gl=1*1nkrfzf*_gcl_au*MTYxOTA2MjMxMC4xNjgzMTMzNzc4" class="menu-link">Foundry Intent</a></li></ul></li></ul>

						
						<div id="toggle-search" class="show-for-large">
							<button class="search-button" aria-label="open search form" aria-expanded="false"></button>
							<form action="https://foundryco.com/search-results/" method="get" role="search" class="search-form">
								<span class="screen-reader-text">Search for:</span>
								<input id="search-field-toggle" type="search" class="search-field" placeholder="Search" value="" name="_search_facet" title="Search for:" />
							</form>
						</div>

						<button id="header-search" class="button hide-for-large" type="button" data-toggle="search-toggler"><span class="screen-reader-text">Search</span></button>
						

					</nav>

					<nav id="a11y-mega-menu" class="show-for-large a11y-desktop" aria-label="Foundry" role="navigation">

											
							<ul id="a11y-2023" class="menu a11y-menu"><li class="pin-last two-cols menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-menu-parent current-page-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-95039" aria-haspopup="true"><a href="https://foundryco.com/our-brands/" class="menu-link">Brands</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95039" aria-label="More Brands"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107462"><a href="https://foundryco.com/our-brands/cio/" class="menu-link">CIO</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107463"><a href="https://foundryco.com/our-brands/cso/" class="menu-link">CSO</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107468"><a href="https://foundryco.com/our-brands/infoworld/" class="menu-link">InfoWorld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107469"><a href="https://foundryco.com/our-brands/networkworld/" class="menu-link">Network World</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-94938 current_page_item menu-item-107470"><a href="https://foundryco.com/our-brands/computerworld/" class="menu-link">Computerworld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107467"><a href="https://foundryco.com/our-brands/macworld/" class="menu-link">Macworld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107466"><a href="https://foundryco.com/our-brands/pcworld/" class="menu-link">PCWorld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107465"><a href="https://foundryco.com/our-brands/tech-advisor/" class="menu-link">Tech Advisor</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107464"><a href="https://foundryco.com/our-brands/techhive/" class="menu-link">TechHive</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107471"><a href="https://foundryco.com/our-brands/channelworld/" class="menu-link">ChannelWorld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107472"><a href="https://foundryco.com/our-brands/specialty/" class="menu-link">Specialty brands</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107474"><a href="https://events.foundryco.com/event-series/cio100-symposium-and-awards/" class="menu-link">CIO100</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107475"><a href="https://events.foundryco.com/event-series/cso50-conference-awards/" class="menu-link">CSO50</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-page-parent menu-item-100372"><a href="https://foundryco.com/our-brands/" class="menu-link">All brands</a></li></ul></li><li class="pin-last menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-107476" aria-haspopup="true"><a href="https://foundryco.com/our-solutions/" class="menu-link">Solutions</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-107476" aria-label="More Solutions"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95073"><a href="https://foundryco.com/our-solutions/advertising/" class="menu-link">Ads</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-102650"><a href="https://foundryco.com/our-solutions/software/" class="menu-link">ABM/ABX</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-99476"><a href="https://foundryco.com/our-solutions/demand-gen-solutions/" class="menu-link">Lead gen</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-102597"><a href="https://foundryco.com/our-solutions/data/intent-data/" class="menu-link">Intent data</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-98060"><a href="https://foundryco.com/our-solutions/brandhub/" class="menu-link">Brand experiences</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-100300"><a href="https://foundryco.com/our-solutions/events/" class="menu-link">Events</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-99628"><a href="https://foundryco.com/our-solutions/partner-marketing/" class="menu-link">Partner marketing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107478"><a href="https://foundryco.com/our-solutions/content-marketing/" class="menu-link">Content creation</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95068"><a href="https://foundryco.com/our-solutions/affiliate/" class="menu-link">Affiliate marketing</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107479"><a href="https://foundryco.com/our-solutions/" class="menu-link">All solutions</a></li></ul></li><li class="pin-last menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95059" aria-haspopup="true"><a href="/tools_type/research" class="menu-link">Research</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95059" aria-label="More Research"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107481"><a href="https://foundryco.com/tools-for-marketers/research-state-of-the-cio/" class="menu-link">State of the CIO</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107483"><a href="https://foundryco.com/tools-for-marketers/research-ai-priorities/" class="menu-link">AI priorities</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107484"><a href="https://foundryco.com/tools-for-marketers/research-customer-engagement/" class="menu-link">Customer engagement</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107485"><a href="https://foundryco.com/tools-for-marketers/research-role-and-influence/" class="menu-link">Role and influence</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107486"><a href="https://foundryco.com/tools-for-marketers/research-abm-intent-benchmarking-study/" class="menu-link">ABM &amp; Intent</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107487"><a href="https://foundryco.com/tools-for-marketers/research-security-priorities/" class="menu-link">Security priorities</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107488"><a href="https://foundryco.com/tools-for-marketers/research-cloud-computing/" class="menu-link">Cloud computing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107489"><a href="https://foundryco.com/tools-for-marketers/research-partner-marketing/" class="menu-link">Partner marketing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107491"><a href="/tools_type/research" class="menu-link">All research</a></li></ul></li><li class="pin-last two-cols menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95060" aria-haspopup="true"><a href="/tools-for-marketers" class="menu-link">Resources</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95060" aria-label="More Resources"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<span class="accent olive">Resources</span><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-104964"><a href="https://foundryco.com/tools-for-marketers/" class="menu-link">Tools for marketers</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-resource_tax menu-item-95077"><a href="https://foundryco.com/resource-tax/blog/" class="menu-link">Blog</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-95305"><a href="https://foundryco.com/resource-tax/case-studies/" class="menu-link">Customer stories</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-99737"><a href="https://foundryco.com/developers/" class="menu-link">Developer portal</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107492"><a href="https://resources.foundryco.com/the-intersection-subscribe" class="menu-link">The Intersection​ newsletter</a></li><span class="accent olive">Collections</span><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-104967"><a href="https://foundryco.com/collections/buying-teams/" class="menu-link">Buying teams</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-104969"><a href="https://foundryco.com/collections/buyer-intent/" class="menu-link">Buyer intent</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-104968"><a href="https://foundryco.com/collections/buyer-journeys/" class="menu-link">Buyer journeys</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-104966"><a href="https://foundryco.com/collections/buyer-engagement/" class="menu-link">Buyer engagement</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-104965"><a href="https://foundryco.com/inspire/" class="menu-link">All collections</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-103403"><a href="/tools-for-marketers" class="menu-link">All Resources</a></li></ul></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95061" aria-haspopup="true"><a href="https://foundryco.com/about-us/" class="menu-link">About us</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95061" aria-label="More About us"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95063"><a href="https://foundryco.com/press/" class="menu-link">Press</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107495"><a href="https://foundryco.com/our-leaders/" class="menu-link">Our leaders</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95070"><a href="https://foundryco.com/work-here/" class="menu-link">Work here</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95064"><a href="https://foundryco.com/about-us/privacy-compliance/" class="menu-link">Privacy / Compliance</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95065"><a href="https://foundryco.com/about-us/licensing/" class="menu-link">Licensing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-95066"><a href="https://idginc.com" class="menu-link">IDG, Inc.</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107496"><a href="https://foundryco.com/about-us/" class="menu-link">About Us</a></li></ul></li></ul>
										
					</nav>

			<button class="hamburger-menu hide-for-large" type="button" data-toggle="mobile-menu" aria-label="open the main menu"><div class="hamburger-icon"></div></button>
			
			<nav id="mobile-menu" class="off-canvas position-top is-closed" data-off-canvas data-content-overlay="false" data-transition="detached" data-transition-time="20ms">
					 

				<ul id="menu-mobile-menu" class="menu mobile-menu mobile-a11y"><li class="pin-last menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-95017" aria-haspopup="true"><a href="https://foundryco.com/our-brands/" class="menu-link">Brands</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95017" aria-label="More Brands"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107497"><a href="https://foundryco.com/our-brands/cio/" class="menu-link">CIO</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107498"><a href="https://foundryco.com/our-brands/cso/" class="menu-link">CSO</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107503"><a href="https://foundryco.com/our-brands/infoworld/" class="menu-link">InfoWorld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107504"><a href="https://foundryco.com/our-brands/networkworld/" class="menu-link">Network World</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-94938 current_page_item menu-item-107507"><a href="https://foundryco.com/our-brands/computerworld/" class="menu-link">Computerworld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107502"><a href="https://foundryco.com/our-brands/macworld/" class="menu-link">Macworld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107501"><a href="https://foundryco.com/our-brands/pcworld/" class="menu-link">PCWorld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107500"><a href="https://foundryco.com/our-brands/tech-advisor/" class="menu-link">Tech Advisor</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107499"><a href="https://foundryco.com/our-brands/techhive/" class="menu-link">TechHive</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107508"><a href="https://foundryco.com/our-brands/channelworld/" class="menu-link">ChannelWorld</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107509"><a href="https://foundryco.com/our-brands/specialty/" class="menu-link">Specialty brands</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107510"><a href="https://events.foundryco.com/event-series/cio100-symposium-and-awards/" class="menu-link">CIO 100</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107511"><a href="https://events.foundryco.com/event-series/cso50-conference-awards/" class="menu-link">CSO50</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-page-parent menu-item-100375"><a href="https://foundryco.com/our-brands/" class="menu-link">All brands</a></li></ul></li><li class="pin-last menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-107512" aria-haspopup="true"><a href="https://foundryco.com/our-solutions/" class="menu-link">Solutions</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-107512" aria-label="More Solutions"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-100091"><a href="https://foundryco.com/our-solutions/advertising/" class="menu-link">Ads</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107513"><a href="https://foundryco.com/our-solutions/software-q2/" class="menu-link">ABM/ABX</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-100092"><a href="https://foundryco.com/our-solutions/demand-gen-solutions/" class="menu-link">Lead gen</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-102599"><a href="https://foundryco.com/our-solutions/data/intent-data/" class="menu-link">Intent data</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-98062"><a href="https://foundryco.com/our-solutions/brandhub/" class="menu-link">Brand experiences</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95038"><a href="https://foundryco.com/our-solutions/events/" class="menu-link">Events</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-99635"><a href="https://foundryco.com/our-solutions/partner-marketing/" class="menu-link">Partner marketing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107514"><a href="https://foundryco.com/our-solutions/content-marketing/" class="menu-link">Content creation</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95032"><a href="https://foundryco.com/our-solutions/affiliate/" class="menu-link">Affiliate marketing</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-107515"><a href="https://foundryco.com/our-solutions/" class="menu-link">All solutions</a></li></ul></li><li class="pin-last menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95052" aria-haspopup="true"><a href="/tools_type/research" class="menu-link">Research</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95052" aria-label="More Research"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107518"><a href="https://foundryco.com/tools-for-marketers/research-state-of-the-cio/" class="menu-link">State of the CIO</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107519"><a href="https://foundryco.com/tools-for-marketers/research-ai-priorities/" class="menu-link">AI priorities</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107520"><a href="https://foundryco.com/tools-for-marketers/research-customer-engagement/" class="menu-link">Customer engagement</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107521"><a href="https://foundryco.com/tools-for-marketers/research-role-and-influence/" class="menu-link">Role &amp; influence</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107522"><a href="https://foundryco.com/tools-for-marketers/research-abm-intent-benchmarking-study/" class="menu-link">ABM &amp; intent</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107523"><a href="https://foundryco.com/tools-for-marketers/research-security-priorities/" class="menu-link">Security priorities</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107524"><a href="https://foundryco.com/tools-for-marketers/research-cloud-computing/" class="menu-link">Cloud computing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107525"><a href="https://foundryco.com/tools-for-marketers/research-partner-marketing/" class="menu-link">Partner marketing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107526"><a href="https://foundryco.com/tools-for-marketers/cio-tech-poll-tech-priorities/" class="menu-link">CIO tech priorities</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107527"><a href="/tools_type/research" class="menu-link">All research</a></li></ul></li><li class="pin-last menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95053" aria-haspopup="true"><a href="https://foundryco.com/tools-for-marketers/" class="menu-link">Resources</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95053" aria-label="More Resources"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<span class="accent olive">Resources</span><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-106460"><a href="/tools-for-marketers" class="menu-link">Tools for marketers</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-resource_tax menu-item-100096"><a href="https://foundryco.com/resource-tax/blog/" class="menu-link">Blog</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-100095"><a href="https://foundryco.com/resource-tax/case-studies/" class="menu-link">Customer stories</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-100094"><a href="https://foundryco.com/developers/" class="menu-link">Developer Portal</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-107528"><a href="https://resources.foundryco.com/the-intersection-subscribe" class="menu-link">The Intersection newsletter</a></li><span class="accent olive">Collections</span><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-106463"><a href="https://foundryco.com/collections/buying-teams/" class="menu-link">Buying teams</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-106465"><a href="https://foundryco.com/collections/buyer-intent/" class="menu-link">Buyer intent</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-106464"><a href="https://foundryco.com/collections/buyer-journeys/" class="menu-link">Buyer journeys</a></li><li class=" menu-item menu-item-type-taxonomy menu-item-object-collections menu-item-106462"><a href="https://foundryco.com/collections/buyer-engagement/" class="menu-link">Buyer engagement</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-106461"><a href="https://foundryco.com/inspire/" class="menu-link">All collections</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-106466"><a href="/tools-for-marketers" class="menu-link">All Resources</a></li></ul></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95028" aria-haspopup="true"><a href="https://foundryco.com/about-us/" class="menu-link">About us</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-95028" aria-label="More About us"><i class="fa-regular fa-chevron-down"></i></button>
<ul class="sub-menu">
<li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95027"><a href="https://foundryco.com/press/" class="menu-link">Press</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-106865"><a href="https://foundryco.com/our-leaders/" class="menu-link">Our leaders</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95055"><a href="https://foundryco.com/work-here/" class="menu-link">Work here</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95025"><a href="https://foundryco.com/about-us/privacy-compliance/" class="menu-link">Privacy / Compliance</a></li><li class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-95024"><a href="https://foundryco.com/about-us/licensing/" class="menu-link">Licensing</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-95029"><a href="https://idginc.com" class="menu-link">IDG, Inc.</a></li><li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-106829"><a href="https://foundryco.com/about-us/" class="menu-link">About Us</a></li></ul></li><li class="lighten menu-item menu-item-type-post_type menu-item-object-page menu-item-95026"><a href="https://foundryco.com/contact-us/" class="menu-link">Contact</a></li><li class="login menu-item menu-item-type-custom menu-item-object-custom menu-item-95058"><a href="https://intent.foundryco.com/login" class="menu-link">Log in</a></li></ul>
				

			</nav>

			</div><!-- .inner-right -->

		</div><!-- .inner-masthead -->

	</header><!-- #masthead -->

	<main id="primary" class="site-main">

		
<article id="post-94938" class="post-94938 page type-page status-publish has-post-thumbnail hentry">

		
<!-- THE REMAINING HERO FIELDS FROM LEGACY -->

		
		<header class="default-hero with-logo">

			<div class="page-hero" style="background-image: url(https://foundryco.com/wp-content/uploads/2020/05/obd3_computeworld_bg-1-prog.jpg)"></div>

				<div class="the-logo">

					<h1 class="screen-reader-text">Computerworld</h1>

					<img src="https://foundryco.com/wp-content/uploads/2020/04/logo-computerworld-white.png" alt="logo for Computerworld" />

				</div>

		</header><!-- .with-logo -->

		<div class="hero-text narrow">

		
				<div id="hero-blurb" class="medium-width grid-x grid-margin-x">

					<div class="small-12 medium-12 large-11 cell max-ten">
						
														
								<h6>Computerworld</h6>
								
														
							<h2>Making technology work for business</h2>
							
						<p>By empowering enterprise users and their managers, Computerworld helps create business advantage by skillfully exploiting today’s abundantly powerful web, mobile and desktop applications. Users rely on Computerworld for advice, insight and best practices to better navigate the digital landscape. Computerworld helps IT managers understand and utilize technology to drive revenue and invigorate the customer and employee experience. With our research, events, social platforms and more, connecting with Computerworld’s audience of tech professionals has never been easier.</p>
<h4>What we cover</h4>
<ul>
<li>Browsers</li>
<li>Blockchain</li>
<li>Cloud computing</li>
<li>Collaboration tech</li>
<li>Macs</li>
<li>Office software</li>
<li>Productivity software</li>
<li>Windows</li>
<li>Small business</li>
<li>Android</li>
<li>Chrome OS/Chromebooks</li>
<li>iOS</li>
</ul>
	 			 			<div class="hero-ctas">
	 			 					 								    <div class="hero-btn">

										
											

<div class="a11y-cta standard-cta left" role="button" style="border-color: inherit; color: inherit">
    <a class="brand-button" href="https://www.computerworld.com/" target="_blank">
        Visit Computerworld                    <span class="screen-reader-text">External link</span>
            </a>
</div>
										
										</div>
	 									 			 			</div>
	 			 	   					</div>

				</div><!-- .hero-blurb -->

			</div><!-- .hero-text -->

				
		
        

	<div class="entry-content">

		<section id="foundry-stats-block_570a0e36f05dbfbb8b5053d4e6dba3bc" class="stats-block custom-block  ">
			<div class="the-stats grid-x">
										<div class="single-stat-entry cell small-12 medium-4">
					<div class="positioner">
						
							<div class="the-stat-number">3.1M</div>
							<div class="color-break"></div>
							<span class="stat-under"><p>Page views per month</p>
</span>
																		</div>
				</div><!-- END .single-stat-entry -->
													<div class="single-stat-entry cell small-12 medium-4">
					<div class="positioner">
						
							<div class="the-stat-number">93%</div>
							<div class="color-break"></div>
							<span class="stat-under"><p>Take an action as a result<br />
of visiting Computerworld</p>
</span>
																		</div>
				</div><!-- END .single-stat-entry -->
													<div class="single-stat-entry cell small-12 medium-4">
					<div class="positioner">
						
							<div class="the-stat-number">88%</div>
							<div class="color-break"></div>
							<span class="stat-under"><p>Like to consume a high amount of<br />
editorial content before making a purchase</p>
</span>
																		</div>
				</div><!-- END .single-stat-entry -->
								</div><!-- END .the-stats -->
				<div class="the-stat-source">Google Analytics, 6-month average, July 2021 – December 2021; Computerworld Audience Profile Survey, 2021</div>
	</section><!-- END .stats-block -->


<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>



<section id="basic-foundry-col-block_9c30b1b8720142b3b5fab4d38c2c8c67" class="basic-foundry-col custom-block  " style="background-color: ">
	<div class="wrapper">
		<div class="grid-x grid-margin-x">
					<div class="cell cell small-12">
				<h3>See what’s special about Computerworld</h3>
<p><a href="https://www.computerworld.com/" target="_blank" rel="noreferrer noopener">Computerworld.com</a><strong>:</strong> Computerworld is an award-winning editorial website and top resource for enterprise users seeking insight and input they can trust. With expert editors across the U.S. and in key markets such as the U.K., India, Australia, New Zealand and the Netherlands, Computerworld is the destination to learn about the many technologies that enable digital business.</p>
<hr />
<h5>Newsletters</h5>
<p><a href="https://www.computerworld.com/newsletters/signup.html" target="_blank" rel="noreferrer noopener">Computerworld First Look</a><strong>:</strong> The latest news and analysis on business technology.</p>
<p><a href="https://www.computerworld.com/newsletters/signup.html" target="_blank" rel="noreferrer noopener">Computerworld Windows</a><strong>:</strong> Windows updates, bugs and insights.</p>
<hr />
<h5>Blogs &amp; Reviews</h5>
<p><a href="https://www.computerworld.com/blog/android-intelligence/" target="_blank" rel="noreferrer noopener">Android Intelligence Blog</a>: Not your average android news — a diverse mix of advice, insight, and analysis with veteran android journalist JR Raphael.</p>
<p><a href="https://www.computerworld.com/reviews/" target="_blank" rel="noreferrer noopener">Reviews</a>: Computerworld provides thorough, fair and honest reviews of products, software and technology tools to help guide professionals in their buying journey.</p>
<hr />
<h5>Special features</h5>
<p><a href="https://www.computerworld.com/video/series/8529/today-in-tech" target="_blank" rel="noreferrer noopener">Today in Tech</a><strong>: </strong>Hear directly from Computerworld Executive Editor Ken Mingis, Juliet Beauchamp and guests as they discuss the latest tech news and trends happening in the industry. Look for new episodes every week.</p>
<hr />
<h5>Recognition programs</h5>
<p><a href="https://www.idginsiderpro.com/article/3448582/about-the-best-places-to-work-in-it.html" target="_blank" rel="noreferrer noopener">The</a><a href="https://www.idginsiderpro.com/article/3448582/about-the-best-places-to-work-in-it.html" target="_blank" rel="noreferrer noopener"> Best Places to Work in IT</a><strong>: </strong>Foundry’s Insider and Computerworld compiles this annual list of organizations that showcase the best working environments for tech professionals. One hundred organizations are selected based on a comprehensive questionnaire of IT professionals focused on offerings such as benefits, diversity, career development, training and retention, and worker satisfaction.</p>
<hr />
<h5>Signature events</h5>
<p><a href="https://events.idg.com/summits/" target="_blank" rel="noreferrer noopener">Virtual events</a>: Participate in Foundry’s virtual event summits that provide the ultimate immersive online experience surrounding a variety of critical topics that attract and engage the industry’s most influential tech decision-makers. These interactive events provide attendees with the opportunity to hear from spectacular speakers, access world-class content, and network with their peers and solution providers. Build new and meaningful connections with IT and security decision-makers through speaking and networking opportunities by partnering with us today.</p>
			</div>
						
				</div>
	</div>
</section>		



<blockquote class="wp-block-quote">
<p>&#8220;For more than 50 years, Computerworld has delivered authoritative, richly researched content for our audience of IT pros and decision makers, helping them make smart decisions about how to choose, use and manage the technology they need to be successful. Our recent in-depth evaluation of five different videoconferencing apps – critical tools as companies look to move forward with a more-distributed workforce – is just the latest example of the depth of knowledge and understanding about tech that Computerworld delivers every day.&#8221;</p>
<cite>Ken Mingis, Executive Editor, Computerworld</cite></blockquote>



<section id="basic-foundry-col-block_e052c6630bcb47d13d2b339c886999bd" class="basic-foundry-col custom-block  " style="background-color: ">
	<div class="wrapper">
		<div class="grid-x grid-margin-x">
					<div class="cell cell small-12">
				<h3>Use our insights to reach your audience of future customers</h3>
<h4>Explore our product offerings</h4>
<ul id="block-204148ff-cfad-416b-b33c-101ab8d5062f" class="block-editor-rich-text__editable block-editor-block-list__block wp-block is-selected wp-block-list rich-text" role="document" aria-label="Block: List" data-block="204148ff-cfad-416b-b33c-101ab8d5062f" data-type="core/list" data-title="List">
<li><strong data-rich-text-format-boundary="true">Branding/awareness</strong> &#8211; Generating brand awareness is the first step toward fostering relationships with enthusiasts. Establishing trust increases the likelihood a tech decision-maker will consider your brand during the buying process.</li>
<li><strong data-rich-text-format-boundary="true">Content</strong> &#8211; Quality content drives engagement. Foundry’s content capabilities can help position your brand as a leader to your target audience.</li>
<li><strong data-rich-text-format-boundary="true">Demand generation</strong> &#8211; Utilize Foundry’s exclusive first-party data to reach specific tech buyers based on purchase intent and other contextual insights.</li>
<li><strong>Native</strong> &#8211; Showcase your message to a tailored and engaged audience through seamless native integration on Foundry’s editorial sites.</li>
<li><strong>Research </strong>&#8211; Foundry offers primary research studies and audience analysis to help you discover the insights you need to create a strong marketing strategy.</li>
<li><strong>Social</strong> &#8211; Drive awareness and engagement by tapping into Foundry’s suite of social products to showcase your message to a broad audience.</li>
<li><strong>ABM</strong> &#8211; Personalize and scale your message to engage with a target list of your most valued customers with Foundry&#8217;s suite of account-based marketing services.</li>
</ul>
			</div>
						
				</div>
	</div>
</section>		



<section id="foundry-feed-block_fa8b1624405dd6a153155a73d9c97a79" class="feed-block custom-block">

	<div class="all-feed-wrapper">

		<div class="team-heading">
			<h2>Meet Computerworld&#039;s editorial leaders</h2>
			<p></p>
		</div>
		<div class="mobile-only">Click each person to read bio</div>

					
			<div class="team-feed four">

					
							<div class="flyout-entry has-bio" data-bio=true>

								<div class="flyout-base">

									<div class="flyout-thumb">
										<img decoding="async" width="150" height="150" src="https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?w=150&amp;h=150&amp;crop=1" class="attachment-thumbnail size-thumbnail" alt="" srcset="https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg 800w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=300,300 300w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=768,768 768w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=50,50 50w" sizes="(max-width: 150px) 100vw, 150px" />									</div>

									<h4>Amy Bennett</h4>

									<h6>Editor in Chief, B2B </h6>

								</div><!-- END .flyout-base -->

								<div class="full-flyout">

									<div class="full-inner">
										

										<div class="grid-x">
											<div class="cell small-12 large-6">
												<div class="full-flyout-thumb show-for-large" role="image" aria-label="" style="background-image: url('https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?w=800&#038;h=800&#038;crop=1'); background-size: cover;background-position: center; background-repeat: no-repeat; padding-bottom: 75%; width: 100%; height: 100%;">
												</div>
											</div>
											<div class="cell small-12 large-6">
												<div class="full-flyout-content">
													<header>
														<div class="controls">
															<div class="toggle-team">
																<button class="prev-team toggle-team-entry"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
																<button class="next-team toggle-team-entry"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
															</div>
															<button class="full-inner-close" aria-label="Click to close modal">
																<i class="fa fa-close" aria-hidden="true"></i>
															</button>
														</div>
														<div class="grid-x grid-margin-x">
															<div class="full-flyout-thumb hide-for-large cell small-6 medium-4">
																<img fetchpriority="high" decoding="async" width="300" height="300" src="https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?w=300" class="attachment-medium size-medium" alt="" srcset="https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg 800w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=300,300 300w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=768,768 768w, https://foundryco.com/wp-content/uploads/2023/11/2_Amy-Bennett-1.jpg?resize=50,50 50w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
															<div class="cell small-6 medium-8 large-12">
																<h4>Amy Bennett</h4>
																<h6>Editor in Chief, B2B</h6>
																<ul class="social-links">
																																			<li><a href="https://twitter.com/atbennett" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a></li>
																																																		</ul>
															</div>
													</header>
													<div class="bio-wrap">
														<p class="p4">Amy Bennett is a veteran editor with more than 15 years of experience in B2B tech publishing. In her role as Editor in Chief, English language for  CIO, CSO, Computerworld, InfoWorld, Network World, Amy oversees editorial operations for these award-winning media brands unwaveringly focused on serving the information needs of IT and security leaders. Amy cut her teeth in publishing spending summers answering phones and writing product announcements at a series of small trade publications that are now long forgotten except to vintage tech enthusiasts. She joined IDG in 2000 as Web Production Manager at ITworld, following stints at Harvard Business School Publishing and Daedalus, the Journal of The American Academy of Arts and Sciences.<span class="apple-converted-space"> </span></p>
													</div>
												</div>
											</div>
										</div>

										

									</div><!-- END .full-inner -->

								</div><!-- END .full-flyout -->

							</div><!-- END .flyout-entry -->

												
						
					
							<div class="flyout-entry has-bio" data-bio=true>

								<div class="flyout-base">

									<div class="flyout-thumb">
										<img decoding="async" width="150" height="150" src="https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?w=150&amp;h=150&amp;crop=1" class="attachment-thumbnail size-thumbnail" alt="" srcset="https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?resize=49,50 49w" sizes="(max-width: 150px) 100vw, 150px" />									</div>

									<h4>Ken Mingis</h4>

									<h6>Executive Editor, Computerworld </h6>

								</div><!-- END .flyout-base -->

								<div class="full-flyout">

									<div class="full-inner">
										

										<div class="grid-x">
											<div class="cell small-12 large-6">
												<div class="full-flyout-thumb show-for-large" role="image" aria-label="" style="background-image: url('https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?w=532&#038;h=540&#038;crop=1'); background-size: cover;background-position: center; background-repeat: no-repeat; padding-bottom: 75%; width: 100%; height: 100%;">
												</div>
											</div>
											<div class="cell small-12 large-6">
												<div class="full-flyout-content">
													<header>
														<div class="controls">
															<div class="toggle-team">
																<button class="prev-team toggle-team-entry"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
																<button class="next-team toggle-team-entry"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
															</div>
															<button class="full-inner-close" aria-label="Click to close modal">
																<i class="fa fa-close" aria-hidden="true"></i>
															</button>
														</div>
														<div class="grid-x grid-margin-x">
															<div class="full-flyout-thumb hide-for-large cell small-6 medium-4">
																<img loading="lazy" decoding="async" width="296" height="300" src="https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?w=296" class="attachment-medium size-medium" alt="" srcset="https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg 532w, https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?resize=296,300 296w, https://foundryco.com/wp-content/uploads/2020/04/obd3_Ken_Mingis_bw_2x-1.jpg?resize=49,50 49w" sizes="(max-width: 296px) 100vw, 296px" />															</div>
															<div class="cell small-6 medium-8 large-12">
																<h4>Ken Mingis</h4>
																<h6>Executive Editor, Computerworld</h6>
																<ul class="social-links">
																																			<li><a href="https://twitter.com/kmingis" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a></li>
																																																		</ul>
															</div>
													</header>
													<div class="bio-wrap">
														<p>Ken Mingis has been executive editor at Computerworld since 2017, and has worked for the IDG publication in various editorial roles since 2001. A native of North Carolina, he has a B.A. in Journalism/Poli Sci from UNC-Chapel Hill and has been a journalist for more than three decades. Before coming to Computerworld, Ken worked at the Boston Globe and the Providence Journal. Computerworld focuses on the how business can get the most from critical software tools, including Windows, collaboration software and mobile devices.</p>
													</div>
												</div>
											</div>
										</div>

										

									</div><!-- END .full-inner -->

								</div><!-- END .full-flyout -->

							</div><!-- END .flyout-entry -->

												
						
					
							<div class="flyout-entry has-bio" data-bio=true>

								<div class="flyout-base">

									<div class="flyout-thumb">
										<img loading="lazy" decoding="async" width="150" height="150" src="https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?w=150&amp;h=150&amp;crop=1" class="attachment-thumbnail size-thumbnail" alt="" srcset="https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?resize=49,50 49w" sizes="(max-width: 150px) 100vw, 150px" />									</div>

									<h4>Galen Gruman</h4>

									<h6>Executive Editor for Global Content </h6>

								</div><!-- END .flyout-base -->

								<div class="full-flyout">

									<div class="full-inner">
										

										<div class="grid-x">
											<div class="cell small-12 large-6">
												<div class="full-flyout-thumb show-for-large" role="image" aria-label="" style="background-image: url('https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?w=532&#038;h=540&#038;crop=1'); background-size: cover;background-position: center; background-repeat: no-repeat; padding-bottom: 75%; width: 100%; height: 100%;">
												</div>
											</div>
											<div class="cell small-12 large-6">
												<div class="full-flyout-content">
													<header>
														<div class="controls">
															<div class="toggle-team">
																<button class="prev-team toggle-team-entry"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
																<button class="next-team toggle-team-entry"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
															</div>
															<button class="full-inner-close" aria-label="Click to close modal">
																<i class="fa fa-close" aria-hidden="true"></i>
															</button>
														</div>
														<div class="grid-x grid-margin-x">
															<div class="full-flyout-thumb hide-for-large cell small-6 medium-4">
																<img loading="lazy" decoding="async" width="296" height="300" src="https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?w=296" class="attachment-medium size-medium" alt="" srcset="https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg 532w, https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?resize=296,300 296w, https://foundryco.com/wp-content/uploads/2020/04/obd_Galen_Gruman_bw_2x.jpg?resize=49,50 49w" sizes="(max-width: 296px) 100vw, 296px" />															</div>
															<div class="cell small-6 medium-8 large-12">
																<h4>Galen Gruman</h4>
																<h6>Executive Editor for Global Content</h6>
																<ul class="social-links">
																																			<li><a href="https://twitter.com/infoworld" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a></li>
																																																		</ul>
															</div>
													</header>
													<div class="bio-wrap">
														<p>Galen Gruman is executive editor for global content at IDG Communications, responsible for the editorial content in English-language editions of the B2B sites in Australia, India, New Zealand, and Southeast Asia (ASEAN countries). He&#8217;s had several roles at IDG over his 20-year tenure, including features editor, executive editor, and editor at Macworld; West Coast bureau chief of Computerworld; and executive editor of InfoWorld. Galen is a member of IDG&#8217;s global B2B Editorial Board and has led several IDG initiatives outside of editorial, including providing leadership for two CMS initiatives and serving as a member of the Macworld senior leadership team. He has also been an adjunct analyst for the IDC IT Executive Program, editor of UBM&#8217;s M-Business magazine, executive editor of Upside magazine, and associate editor at the IEEE Computer Society.</p>
													</div>
												</div>
											</div>
										</div>

										

									</div><!-- END .full-inner -->

								</div><!-- END .full-flyout -->

							</div><!-- END .flyout-entry -->

												
						
					
							<div class="flyout-entry has-bio" data-bio=true>

								<div class="flyout-base">

									<div class="flyout-thumb">
										<img loading="lazy" decoding="async" width="150" height="150" src="https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?w=150&amp;h=150&amp;crop=1" class="attachment-thumbnail size-thumbnail" alt="" srcset="https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg 800w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=300,300 300w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=768,768 768w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=50,50 50w" sizes="(max-width: 150px) 100vw, 150px" />									</div>

									<h4>Matt Egan</h4>

									<h6>Editorial Director </h6>

								</div><!-- END .flyout-base -->

								<div class="full-flyout">

									<div class="full-inner">
										

										<div class="grid-x">
											<div class="cell small-12 large-6">
												<div class="full-flyout-thumb show-for-large" role="image" aria-label="" style="background-image: url('https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?w=800&#038;h=800&#038;crop=1'); background-size: cover;background-position: center; background-repeat: no-repeat; padding-bottom: 75%; width: 100%; height: 100%;">
												</div>
											</div>
											<div class="cell small-12 large-6">
												<div class="full-flyout-content">
													<header>
														<div class="controls">
															<div class="toggle-team">
																<button class="prev-team toggle-team-entry"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
																<button class="next-team toggle-team-entry"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
															</div>
															<button class="full-inner-close" aria-label="Click to close modal">
																<i class="fa fa-close" aria-hidden="true"></i>
															</button>
														</div>
														<div class="grid-x grid-margin-x">
															<div class="full-flyout-thumb hide-for-large cell small-6 medium-4">
																<img loading="lazy" decoding="async" width="300" height="300" src="https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?w=300" class="attachment-medium size-medium" alt="" srcset="https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg 800w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=300,300 300w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=768,768 768w, https://foundryco.com/wp-content/uploads/2020/04/6_Matt-Egan.jpg?resize=50,50 50w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
															<div class="cell small-6 medium-8 large-12">
																<h4>Matt Egan</h4>
																<h6>Editorial Director</h6>
																<ul class="social-links">
																																			<li><a href="https://twitter.com/MattJEgan" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a></li>
																																																		</ul>
															</div>
													</header>
													<div class="bio-wrap">
														<p>An executive leader with more than two decades experience leading successful editorial teams, Matt Egan is Foundry&#8217;s (formerly IDG Communications) first ever Editorial Director.</p>
<p>Matt leads and supports Foundry&#8217;s world class teams of journalists in key markets across the globe, as they create expert content in multiple major world languages. He is responsible for audience development, data, content, ecommerce, analytics, video, and content strategy for the world&#8217;s most popular business-to-business and B2C technology publications and events.</p>
<p>Prior to his global role Matt managed Foundry&#8217;s award-winning enterprise and B2C editorial teams in the US, UK, ASEAN, France and Spain.</p>
<p>Matt holds a BA in English and Drama from the University of Hull. He&#8217;s married with two children and enjoys running.</p>
													</div>
												</div>
											</div>
										</div>

										

									</div><!-- END .full-inner -->

								</div><!-- END .full-flyout -->

							</div><!-- END .flyout-entry -->

												
						
					
							<div class="flyout-entry no-bio">

								<div class="flyout-base">

									<div class="flyout-thumb">
										<img loading="lazy" decoding="async" width="150" height="150" src="https://foundryco.com/wp-content/uploads/2021/12/Heinrichbw-scaled-e1639079042670.jpg?w=150&amp;h=150&amp;crop=1" class="attachment-thumbnail size-thumbnail" alt="" srcset="https://foundryco.com/wp-content/uploads/2021/12/Heinrichbw-scaled-e1639079042670.jpg?resize=150,150 150w, https://foundryco.com/wp-content/uploads/2021/12/Heinrichbw-scaled-e1639079042670.jpg?resize=800,800 800w, https://foundryco.com/wp-content/uploads/2021/12/Heinrichbw-scaled-e1639079042670.jpg?resize=51,50 51w" sizes="(max-width: 150px) 100vw, 150px" />									</div>

									<h4>Heinrich Vaske</h4>

									<h6>Editor in Chief Europe</h6>

								</div><!-- END .flyout-base -->

							</div><!-- END .flyout-entry -->

												
						
					
				</div><!-- END .team-feed -->

			</div><!-- all-feed-wrapper -->

		
</section><!-- END .feed-block -->


<section id="basic-foundry-col-block_3aecb9619e0bdcf26c54415c5d066716" class="basic-foundry-col custom-block \u0022has-text-align-center\u0022  " style="background-color: ">
	<div class="wrapper">
		<div class="grid-x grid-margin-x">
						
				</div>
	</div>
</section>		



<section id="basic-foundry-col-block_c2f77f5b407d14536501d3c35170ec28" class="basic-foundry-col custom-block  " style="background-color: ">
	<div class="wrapper">
		<div class="grid-x grid-margin-x">
					<div class="cell cell small-12">
				<h3>Contact us to learn more about how to reach and engage this Computerworld audience:</h3>
			</div>
						
				</div>
	</div>
</section>		


 
            <div id="general-form-block_0eb2ec2ef75a562d7cf1e3eeb612d66a" class="gen-form-entry custom-block contact-two">
            <div class="gen-form-inner"><!--[if lte IE 8]>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
  hbspt.forms.create({
                portalId: "1624046",
                formId: "f1ffae22-7adb-491c-9a9a-885af51935af"
});
</script></div>
        </div>	
    	
		
	</div><!-- .entry-content -->

</article><!-- #post-94938 -->



	</main><!-- #main -->


	<footer id="colophon" class="site-footer" style="background:#000000;">

		<div class="site-info inner-footer grid-x">

			<nav class="small-12 desktop-footer-nav"><ul id="footer-menu-desktop" class="menu cell"><li id="menu-item-95079" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-has-children menu-item-95079"><a href="https://foundryco.com/our-brands/" data-ps2id-api="true">Media</a>
<ul class="sub-menu">
	<li id="menu-item-95094" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95094"><a href="https://foundryco.com/our-solutions/affiliate/" data-ps2id-api="true">Affiliate</a></li>
	<li id="menu-item-100304" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100304"><a href="https://foundryco.com/our-solutions/advertising/" data-ps2id-api="true">Advertising</a></li>
	<li id="menu-item-98064" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-98064"><a href="https://foundryco.com/our-solutions/brandhub/" data-ps2id-api="true">Brand to demand</a></li>
	<li id="menu-item-95090" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95090"><a href="https://foundryco.com/our-solutions/content-marketing/" data-ps2id-api="true">Content strategy</a></li>
	<li id="menu-item-99632" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-99632"><a href="https://foundryco.com/our-solutions/partner-marketing/" data-ps2id-api="true">Partner marketing</a></li>
	<li id="menu-item-103001" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103001"><a href="https://foundryco.com/our-brands/sponsorship-packages/" data-ps2id-api="true">Sponsorship Packages</a></li>
	<li id="menu-item-100378" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-100378"><a href="https://foundryco.com/our-brands/" data-ps2id-api="true">Our brands</a></li>
</ul>
</li>
<li id="menu-item-102594" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-102594"><a href="https://foundryco.com/our-solutions/data/intent-data/" data-ps2id-api="true">Data</a>
<ul class="sub-menu">
	<li id="menu-item-95112" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95112"><a href="https://foundryco.com/our-solutions/demand-gen-solutions/" data-ps2id-api="true">Demand gen</a></li>
	<li id="menu-item-102595" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102595"><a href="https://foundryco.com/our-solutions/data/intent-data/" data-ps2id-api="true">Intent data</a></li>
	<li id="menu-item-95097" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95097"><a href="https://foundryco.com/our-solutions/advertising/" data-ps2id-api="true">Intent targeting</a></li>
</ul>
</li>
<li id="menu-item-95109" class="hidden-parent menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-95109"><a href="#" data-ps2id-api="true">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-102651" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102651"><a href="https://foundryco.com/our-solutions/software/" data-ps2id-api="true">Software</a></li>
	<li id="menu-item-95111" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95111"><a href="https://foundryco.com/our-solutions/events/" data-ps2id-api="true">Events</a></li>
	<li id="menu-item-95099" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95099"><a href="https://foundryco.com/tools-for-marketers/" data-ps2id-api="true">Resources</a></li>
</ul>
</li>
<li id="menu-item-95103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95103"><a href="https://foundryco.com/about-us/" data-ps2id-api="true">About</a>
<ul class="sub-menu">
	<li id="menu-item-95102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95102"><a href="https://foundryco.com/work-here/" data-ps2id-api="true">Work here</a></li>
	<li id="menu-item-95101" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95101"><a href="https://foundryco.com/contact-us/" data-ps2id-api="true">Contact us</a></li>
	<li id="menu-item-95100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95100"><a href="https://foundryco.com/press/" data-ps2id-api="true">Press</a></li>
	<li id="menu-item-100463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100463"><a href="https://foundryco.com/awards/" data-ps2id-api="true">Awards</a></li>
	<li id="menu-item-95104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95104"><a href="https://foundryco.com/about-us/privacy-compliance/" data-ps2id-api="true">Privacy / Compliance</a></li>
	<li id="menu-item-100557" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100557"><a href="https://foundryco.com/environmental-policy/" data-ps2id-api="true">Environmental Policy</a></li>
	<li id="menu-item-104185" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104185"><a href="https://foundryco.com/copyright-notice/" data-ps2id-api="true">Copyright Notice</a></li>
	<li id="menu-item-95105" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95105"><a href="https://foundryco.com/about-us/licensing/" data-ps2id-api="true">Licensing</a></li>
	<li id="menu-item-95107" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-95107"><a target="_blank" rel="noopener" href="https://www.idginc.com/" data-ps2id-api="true">IDG, Inc.</a></li>
	<li id="menu-item-95110" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95110"><a href="https://foundryco.com/ccpa/" data-ps2id-api="true">CCPA</a></li>
</ul>
</li>
<li id="menu-item-96687" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-96687"><a href="#" data-ps2id-api="true">Topics</a>
<ul class="sub-menu">
	<li id="menu-item-96695" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96695"><a href="https://foundryco.com/our-solutions/account-based-marketing/" data-ps2id-api="true">Account-based marketing</a></li>
	<li id="menu-item-96698" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96698"><a href="https://foundryco.com/our-solutions/first-party-third-party-cookies/" data-ps2id-api="true">Cookies: First-party &#038; third-party</a></li>
	<li id="menu-item-103006" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103006"><a href="https://foundryco.com/generative-ai-sponsorships/" data-ps2id-api="true">Generative AI sponsorships</a></li>
	<li id="menu-item-96697" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96697"><a href="https://foundryco.com/our-solutions/what-is-intent-data/" data-ps2id-api="true">Intent data</a></li>
	<li id="menu-item-96696" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96696"><a href="https://foundryco.com/our-solutions/website-cookies-vs-ip-address-intelligence/" data-ps2id-api="true">IP address intelligence</a></li>
	<li id="menu-item-96699" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96699"><a href="https://foundryco.com/our-solutions/reverse-ip-lookup/" data-ps2id-api="true">Reverse IP lookup</a></li>
	<li id="menu-item-96700" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96700"><a href="https://foundryco.com/our-solutions/website-visitor-tracking/" data-ps2id-api="true">Website visitor tracking</a></li>
	<li id="menu-item-105257" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105257"><a href="https://foundryco.com/our-brands/cio/selling-to-the-cio/" data-ps2id-api="true">Selling to the CIO</a></li>
	<li id="menu-item-105258" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105258"><a href="https://foundryco.com/our-brands/cio/voices-of-the-cio/" data-ps2id-api="true">Voices of the CIO</a></li>
	<li id="menu-item-105259" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105259"><a href="https://foundryco.com/our-brands/cio/how-to-market-to-cios-around-the-world/" data-ps2id-api="true">Marketing to global CIOs</a></li>
</ul>
</li>
<li id="menu-item-100938" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-100938"><a data-ps2id-api="true">Regions</a>
<ul class="sub-menu">
	<li id="menu-item-104273" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104273"><a href="https://foundryco.com/asean/" data-ps2id-api="true">ASEAN</a></li>
	<li id="menu-item-104931" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104931"><a href="https://foundryco.com/au-nz/" data-ps2id-api="true">Australia &#038; New Zealand</a></li>
	<li id="menu-item-105410" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105410"><a href="https://foundryco.com/central-europe/" data-ps2id-api="true">Central Europe</a></li>
	<li id="menu-item-104932" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104932"><a href="https://foundryco.com/germany/" data-ps2id-api="true">Germany</a></li>
	<li id="menu-item-104626" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104626"><a href="https://foundryco.com/india/" data-ps2id-api="true">India</a></li>
	<li id="menu-item-105398" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105398"><a href="https://foundryco.com/japan/" data-ps2id-api="true">Japan</a></li>
	<li id="menu-item-104627" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104627"><a href="https://foundryco.com/middle-east-turkey-africa/" data-ps2id-api="true">Middle East, Turkey, &#038; Africa</a></li>
	<li id="menu-item-104274" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104274"><a href="https://foundryco.com/southern-europe/" data-ps2id-api="true">Southern Europe</a></li>
	<li id="menu-item-100907" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100907"><a href="https://foundryco.com/western-europe/" data-ps2id-api="true">Western Europe</a></li>
</ul>
</li>
</ul></nav>			<nav class="small-12 mobile-footer-nav"><ul id="footer-menu-mobile" class="menu cell mobile-a11y"><li id="menu-item-100307" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-has-children menu-item-100307"><a href="https://foundryco.com/our-brands/" data-ps2id-api="true">Media</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-100307" aria-label="More Media"><i><img src="https://foundryco.com/wp-content/themes/foundry2023/assets/images/mobile-footer-arrow.svg"></i></button>
<ul class="sub-menu">
	<li id="menu-item-100308" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100308"><a href="https://foundryco.com/our-solutions/affiliate/" data-ps2id-api="true">Affiliate</a></li>
	<li id="menu-item-100309" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100309"><a href="https://foundryco.com/our-solutions/advertising/" data-ps2id-api="true">Advertising</a></li>
	<li id="menu-item-100310" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100310"><a href="https://foundryco.com/our-solutions/brandhub/" data-ps2id-api="true">Brand to demand</a></li>
	<li id="menu-item-100311" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100311"><a href="https://foundryco.com/our-solutions/content-marketing/" data-ps2id-api="true">Content strategy</a></li>
	<li id="menu-item-100312" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100312"><a href="https://foundryco.com/our-solutions/partner-marketing/" data-ps2id-api="true">Partner marketing</a></li>
	<li id="menu-item-100380" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-100380"><a href="https://foundryco.com/our-brands/" data-ps2id-api="true">Our brands</a></li>
</ul>
</li>
<li id="menu-item-102602" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-102602"><a href="https://foundryco.com/our-solutions/data/intent-data/" data-ps2id-api="true">Data</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-102602" aria-label="More Data"><i><img src="https://foundryco.com/wp-content/themes/foundry2023/assets/images/mobile-footer-arrow.svg"></i></button>
<ul class="sub-menu">
	<li id="menu-item-100314" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100314"><a href="https://foundryco.com/our-solutions/demand-gen-solutions/" data-ps2id-api="true">Demand gen</a></li>
	<li id="menu-item-102603" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102603"><a href="https://foundryco.com/our-solutions/data/intent-data/" data-ps2id-api="true">Intent data</a></li>
	<li id="menu-item-100315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100315"><a href="https://foundryco.com/our-solutions/advertising/" data-ps2id-api="true">Intent targeting</a></li>
</ul>
</li>
<li id="menu-item-102652" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102652"><a href="https://foundryco.com/our-solutions/software/" data-ps2id-api="true">Software</a></li>
<li id="menu-item-100317" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100317"><a href="https://foundryco.com/our-solutions/events/" data-ps2id-api="true">Events</a></li>
<li id="menu-item-100318" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100318"><a href="https://foundryco.com/tools-for-marketers/" data-ps2id-api="true">Resources</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-100318" aria-label="More Resources"><i><img src="https://foundryco.com/wp-content/themes/foundry2023/assets/images/mobile-footer-arrow.svg"></i></button>
<ul class="sub-menu">
	<li id="menu-item-100319" class="menu-item menu-item-type-taxonomy menu-item-object-resource_tax menu-item-100319"><a href="https://foundryco.com/resource-tax/blog/" data-ps2id-api="true">Blog</a></li>
	<li id="menu-item-100320" class="menu-item menu-item-type-taxonomy menu-item-object-resource_tax menu-item-100320"><a href="https://foundryco.com/resource-tax/case-studies/" data-ps2id-api="true">Case studies</a></li>
	<li id="menu-item-100329" class="menu-item menu-item-type-taxonomy menu-item-object-focus menu-item-100329"><a href="https://foundryco.com/focus/research-topic/" data-ps2id-api="true">Research</a></li>
	<li id="menu-item-100321" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100321"><a href="https://foundryco.com/developers/" data-ps2id-api="true">Developer Portal</a></li>
</ul>
</li>
<li id="menu-item-100322" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100322"><a href="https://foundryco.com/about-us/" data-ps2id-api="true">About Us</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-100322" aria-label="More About Us"><i><img src="https://foundryco.com/wp-content/themes/foundry2023/assets/images/mobile-footer-arrow.svg"></i></button>
<ul class="sub-menu">
	<li id="menu-item-100323" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100323"><a href="https://foundryco.com/press/" data-ps2id-api="true">Press</a></li>
	<li id="menu-item-100325" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100325"><a href="https://foundryco.com/work-here/" data-ps2id-api="true">Work here</a></li>
	<li id="menu-item-100326" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100326"><a href="https://foundryco.com/about-us/privacy-compliance/" data-ps2id-api="true">Privacy / Compliance</a></li>
	<li id="menu-item-100327" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100327"><a href="https://foundryco.com/about-us/licensing/" data-ps2id-api="true">Licensing | Republication Permissions</a></li>
	<li id="menu-item-100328" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100328"><a href="https://foundryco.com/ccpa/" data-ps2id-api="true">CCPA</a></li>
</ul>
</li>
<li id="menu-item-100324" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100324"><a href="https://foundryco.com/contact-us/" data-ps2id-api="true">Contact</a></li>
<li id="menu-item-100352" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-100352"><a href="https://foundryco.com/" data-ps2id-api="true">Topics</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-100352" aria-label="More Topics"><i><img src="https://foundryco.com/wp-content/themes/foundry2023/assets/images/mobile-footer-arrow.svg"></i></button>
<ul class="sub-menu">
	<li id="menu-item-100353" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100353"><a href="https://foundryco.com/our-solutions/account-based-marketing/" data-ps2id-api="true">Account-based marketing</a></li>
	<li id="menu-item-100354" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100354"><a href="https://foundryco.com/our-solutions/first-party-third-party-cookies/" data-ps2id-api="true">First-party &#038; third-party cookies</a></li>
	<li id="menu-item-100360" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100360"><a href="https://foundryco.com/our-solutions/what-is-intent-data/" data-ps2id-api="true">What is intent data?</a></li>
	<li id="menu-item-100356" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100356"><a href="https://foundryco.com/our-solutions/website-cookies-vs-ip-address-intelligence/" data-ps2id-api="true">Website cookies vs. IP address intelligence</a></li>
	<li id="menu-item-100357" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100357"><a href="https://foundryco.com/our-solutions/reverse-ip-lookup/" data-ps2id-api="true">Reverse IP lookup</a></li>
	<li id="menu-item-100358" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100358"><a href="https://foundryco.com/our-solutions/website-visitor-tracking/" data-ps2id-api="true">Website visitor tracking</a></li>
</ul>
</li>
<li id="menu-item-105399" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-105399"><a href="https://foundryco.com/" data-ps2id-api="true">Regions</a><button class="sub-menu-btn" aria-expanded="false" aria-controls="sub-menu-105399" aria-label="More Regions"><i><img src="https://foundryco.com/wp-content/themes/foundry2023/assets/images/mobile-footer-arrow.svg"></i></button>
<ul class="sub-menu">
	<li id="menu-item-105401" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105401"><a href="https://foundryco.com/asean/" data-ps2id-api="true">ASEAN</a></li>
	<li id="menu-item-105400" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105400"><a href="https://foundryco.com/au-nz/" data-ps2id-api="true">Australia &#038; New Zealand</a></li>
	<li id="menu-item-105408" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105408"><a href="https://foundryco.com/central-europe/" data-ps2id-api="true">Central Europe</a></li>
	<li id="menu-item-105402" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105402"><a href="https://foundryco.com/germany/" data-ps2id-api="true">Germany</a></li>
	<li id="menu-item-105403" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105403"><a href="https://foundryco.com/india/" data-ps2id-api="true">India</a></li>
	<li id="menu-item-105404" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105404"><a href="https://foundryco.com/japan/" data-ps2id-api="true">Japan</a></li>
	<li id="menu-item-105405" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105405"><a href="https://foundryco.com/middle-east-turkey-africa/" data-ps2id-api="true">Middle East, Turkey, &#038; Africa</a></li>
	<li id="menu-item-105407" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105407"><a href="https://foundryco.com/southern-europe/" data-ps2id-api="true">Southern Europe</a></li>
	<li id="menu-item-100908" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100908"><a href="https://foundryco.com/western-europe/" data-ps2id-api="true">Western Europe</a></li>
</ul>
</li>
</ul></nav>
			<div class="small-12 medium-3 cell pad-logo">

				
						<a href="https://foundryco.com/" rel="home">
							<div class="footer-logo" role="img" aria-label="Link to Foundry Homepage" style="background-image:url(https://foundryco.com/wp-content/uploads/2023/05/logo2023.svg)"></div>
						</a>

				
			</div>

			<div class="small-12 medium-12 large-9 cell social-media footer-right">
				<ul class="social-icons">
									<li><a href="https://www.facebook.com/FoundryIDG/" target="_blank"><span class="screen-reader-text">Facebook</span><i class="fa-brands fa-facebook-f"></i></a></li>
													<li><a href="https://twitter.com/FoundryIDG" target="_blank"><span class="screen-reader-text">Twitter</span><i class="fa-brands fa-twitter"></i></a></li>
													<li><a href="https://www.linkedin.com/company/foundryidg/" target="_blank"><span class="screen-reader-text">LinkedIn</span><i class="fa-brands fa-linkedin-in"></i></a></li>
												</ul>
			</div>

			

			<div class="small-12 medium-12 large-3 cell copyright">

				<p>&copy;2024 IDG All Rights Reserved.</p>

			</div>

			<div class="small-12 medium-12 large-9 cell privacy-menu footer-right">

				<ul>
					
											<li><a href="https://foundryco.com/idg-privacy-policy/" target="_self">Privacy Policy</a></li>
											<li><a href="https://foundryco.com/idg-ad-choices/" target="_self">Ad Choices</a></li>
					
						<li><a href="javascript:window._sp_.loadPrivacyManagerModal('199068')">Privacy Settings</a></li>

											<li><a href="javascript:window._sp_ccpa.loadPrivacyManagerModal(23846, '5dfa75f712068b42714ed7b8')">California: Do Not Sell My Information</a></li>
									</ul>

			</div>
					
		</div><!-- .site-info -->
		
	</footer><!-- #colophon -->

</div><!-- #page -->

<script id="page-scroll-to-id-plugin-script-js-extra">
var mPS2id_params = {"instances":{"mPS2id_instance_0":{"selector":"a[href*='#']:not([href='#'])","autoSelectorMenuLinks":"true","excludeSelector":"a[href^='#tab-'], a[href^='#tabs-'], a[data-toggle]:not([data-toggle='tooltip']), a[data-slide], a[data-vc-tabs], a[data-vc-accordion], a.screen-reader-text.skip-link, .portal-parent-link","scrollSpeed":800,"autoScrollSpeed":"true","scrollEasing":"easeInOutQuint","scrollingEasing":"easeOutQuint","forceScrollEasing":"false","pageEndSmoothScroll":"true","stopScrollOnUserAction":"false","autoCorrectScroll":"false","autoCorrectScrollExtend":"false","layout":"vertical","offset":"110","dummyOffset":"false","highlightSelector":"","clickedClass":"mPS2id-clicked","targetClass":"mPS2id-target","highlightClass":"mPS2id-highlight","forceSingleHighlight":"true","keepHighlightUntilNext":"true","highlightByNextTarget":"false","appendHash":"true","scrollToHash":"true","scrollToHashForAll":"true","scrollToHashDelay":0,"scrollToHashUseElementData":"true","scrollToHashRemoveUrlHash":"false","disablePluginBelow":0,"adminDisplayWidgetsId":"true","adminTinyMCEbuttons":"true","unbindUnrelatedClickEvents":"false","unbindUnrelatedClickEventsSelector":"","normalizeAnchorPointTargets":"false","encodeLinks":"false"}},"total_instances":"1","shortcode_class":"_ps2id"};
</script>
<script type="text/javascript" src="https://foundryco.com/_static/??/wp-content/plugins/page-scroll-to-id/js/page-scroll-to-id.min.js,/wp-content/themes/foundry2023/dist/site-bundle.js?m=1705937283j" ></script><script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.14.0/js/selectize.js?ver=1.0.0" id="selectize-js-js"></script>
<script type="text/javascript" src="https://foundryco.com/wp-includes/js/comment-reply.min.js?m=1706643140g" ></script><script defer src="https://stats.wp.com/e-202405.js" id="jetpack-stats-js"></script>
<script id="jetpack-stats-js-after">
_stq = window._stq || [];
_stq.push([ "view", JSON.parse("{\"v\":\"ext\",\"blog\":\"224324793\",\"post\":\"94938\",\"tz\":\"0\",\"srv\":\"foundryco.com\",\"hp\":\"vip\",\"j\":\"1:13.0\"}") ]);
_stq.push([ "clickTrackerInit", "224324793", "94938" ]);
</script>

</body>
</html>
