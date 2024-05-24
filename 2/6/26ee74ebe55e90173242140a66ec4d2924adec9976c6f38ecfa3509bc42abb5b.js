/*! 20240212-8-RELEASE */

class ArticleAndFeedAreaScanner{static initScanner(){const e=TRC.util.retry(ArticleAndFeedAreaScanner.scanAndReportContainers,2e3,2);e()}static scanAndReportContainers(){if(!ArticleAndFeedAreaScanner.shouldSearch())return;const{articleElement:e,taboolaContainers:t}=ArticleAndFeedAreaScanner.getArticleInfo();if(!e||!t)return;const n=ArticleAndFeedAreaScanner.getClosestContainer(e,t);if(!n)return;const r=ArticleAndFeedAreaScanner.getAreaYBorders(e,n.container);return ArticleAndFeedAreaScanner.searchContainerTypes(r),!0}static shouldSearch(){return ArticleAndFeedAreaScanner.containerTypesMapKeys.some(e=>!ArticleAndFeedAreaScanner.containerTypesMap[e].isReported)}static searchContainerTypes(e){ArticleAndFeedAreaScanner.containerTypesMapKeys.forEach(t=>{const n=ArticleAndFeedAreaScanner.containerTypesMap[t],{isReported:r}=n;if(r)return;const a=ArticleAndFeedAreaScanner.getContainers(n);ArticleAndFeedAreaScanner.handleRequestedContainers(a,e,t)})}static getContainers(e){const{containers:t,selector:n}=e;if(t&&t.length)return t;const r=TRC.util.toArray(document.querySelectorAll(n));return e.containers=r,r}static handleRequestedContainers(e,t,n){for(let a=0;a<e.length;a++){const c=e[a],i=ArticleAndFeedAreaScanner.getElementYBorders(c);if(ArticleAndFeedAreaScanner.isInArea(t,i)&&!r(c)){const e=c.offsetHeight;TRC.util.sendSupplyFeature("article_area_scanner","reported",`found ${n}`,`${e}`),ArticleAndFeedAreaScanner.containerTypesMap[n].isReported=!0;break}}function r(e){return n(e)||r(e)||t(e);function t(e){const t=e.className;return["item-label-href","item-thumbnail-href","tbl-rtl-label","tbl-ltr-label","video-label"].some(e=>t.indexOf(e)>-1)}function n(e){return e.offsetHeight&&e.offsetHeight>200}function r(e){let t=e;for(;null!==t;){const e=window.getComputedStyle(t).getPropertyValue("position");if("fixed"===e||"sticky"===e)return!0;t=t.parentElement}return!1}}}static getAreaYBorders(e,t){const n=ArticleAndFeedAreaScanner.getAbsoluteTopPosition(e)+e.offsetHeight,r=ArticleAndFeedAreaScanner.getAbsoluteTopPosition(t);return{areaTopY:n,areaBottomY:r}}static getElementYBorders(e){const t=ArticleAndFeedAreaScanner.getAbsoluteTopPosition(e);return{elTopY:t,elBottomY:t+e.offsetHeight}}static isInArea({areaTopY:e,areaBottomY:t},{elTopY:n,elBottomY:r}){return n>=e&&n<=t||r>=e&&r<=t}static getArticleInfo(){const e=TRC.ArticleDetection&&TRC.ArticleDetection.detectArticle&&TRC.ArticleDetection.detectArticle();return e&&e.articleElement?e:{}}static getAbsoluteTopPosition(e){return e.getBoundingClientRect().top+window.pageYOffset}static calculateDistance(e,t){const n=ArticleAndFeedAreaScanner.getAbsoluteTopPosition(e);return n-t}static getClosestContainer(e,t){const n=ArticleAndFeedAreaScanner.getAbsoluteTopPosition(e)+e.offsetHeight;return t.map(e=>({container:e,distance:ArticleAndFeedAreaScanner.calculateDistance(e,n)})).filter(e=>e.distance>=0).sort((e,t)=>e.distance-t.distance).shift()}}ArticleAndFeedAreaScanner.containerTypesMap={share_container:{selector:'[class*="share"], [class*="sharing"], [class*="social"]',isReported:!1,containers:null},tags_container:{selector:'[class*="tag"], [class*="label"]',isReported:!1,containers:null}},ArticleAndFeedAreaScanner.containerTypesMapKeys=Object.keys(ArticleAndFeedAreaScanner.containerTypesMap),TRC.ArticleAndFeedAreaScanner=ArticleAndFeedAreaScanner; <link rel='stylesheet' href="https://media.stiripesurse.ro/assets/css/smart-app-banner.css?v=2" type='text/css' media='all'/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    

    
    <script type="text/javascript">
	var now = new Date();
	now.setTime(now.getTime() + 1 * 3600 * 1000 * 24 * 365);
	delete_cookie();

	function delete_cookie() {
	    if (!getCookie('cleared-onetrust-cookies')) {
			console.log("entered");
	    	document.cookie = "OptanonAlertBoxClosed" + "=" + "; path=/" + "; domain=.stiripesurse.ro" + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
	    	document.cookie = "OptanonConsent" + "=" + "; path=/" + "; domain=.stiripesurse.ro" + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
			console.log("exit");
	    }

	    document.cookie = "cleared-onetrust-cookies" + "=" + "; path=/" + "; domain=.stiripesurse.ro" + "; expires="+now;
	    console.log("test");
	}

	function getCookie( cookieName ) {
	    var value = '; ' + document.cookie;
	    var parts = value.split( '; ' + cookieName + '=' );

	    if ( parts.length == 2 ) {
	    	return true;
	  	}
	}
	</script>
    

    
    <!-- OneTrust Cookies Consent Notice start -->
    <script src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="2253c677-ea21-4cd9-a1b2-4c92266205a4"></script>
    <script type="text/javascript">
    function OptanonWrapper() { }
    </script>
    <!-- OneTrust Cookies Consent Notice end -->
    

    

	
		<script>
			(function(i,s,o,g,r,a,m){ i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-47696422-1', 'auto');
			ga('send', 'pageview');
		</script>

		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-7CGZMQ6XRQ"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-7CGZMQ6XRQ');
		</script>
	

    
    
    
        	<script type="application/ld+json">
	    {
	        "@context": "http://schema.org",
	        "@type": "NewsArticle",
	        "mainEntityOfPage": "https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html",
	        "headline": "Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european...",
	        "datePublished": "2024-02-10T12:31:13Z",
	        "dateModified": "2024-02-10T12:31:13Z",
	        "description": "Dacian Ciolo\u0219, vinovat de protestele fermierilor - Mihai Tudose spune ce a f\u0103cut fostul comisar...",
	        "author": {
	            "@type": "Person",
	            "name": "Radu Pop"
	        },
	        "publisher": {
	            "@type": "Organization",
	            "name": "stiripesurse.ro",
	            "url": "https://www.stiripesurse.ro",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://media.stiripesurse.ro/assets/img/new_images/sps_logo_amp.png",
                    "width": 375,
                    "height": 60
                }
	        },
	        "image": {
	            "@type": "ImageObject",
	            "url": "https://media.stiripesurse.ro/image/202211/w800/media-166907707520815000.png"
	        }
	    }
	    </script>
    
    
    <script type="text/plain" class="optanon-category-C0004" defer src="https://cdn.unblockia.com/h.js"></script>

    <link rel="manifest" href="https://media.stiripesurse.ro/assets/js/onesignal-sdk/manifest.json">
    <script type="text/plain" class="optanon-category-C0004" src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"></script>
    <script type="text/plain" class="optanon-category-C0004">
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.SERVICE_WORKER_UPDATER_PATH = 'OneSignalSDKUpdaterWorker.js.php';
            OneSignal.SERVICE_WORKER_PATH = 'OneSignalSDKWorker.js.php';
            OneSignal.SERVICE_WORKER_PARAM = { scope: '/' };
        });
        if (document.cookie.indexOf('euconsent') !== -1 || document.cookie.indexOf('OptanonConsent') !== -1) {
	        OneSignal.push(["init", {
	            appId: "f8147d2f-9643-4a27-9331-cb22f319ab61",
	            autoRegister: true,
				notifyButton: {
					enable: false,
				},
				welcomeNotification: {
					title: "Stiripesurse.ro",
					message: "Mulțumim! Te vom ține la curent cu cele mai noi stiri, breaking news și dezvăluiri!",
					url: "https://www.stiripesurse.ro"
				},
	            path: '/js/onesignal-sdk/',
	            persistNotification: false,
	            safari_web_id: "web.onesignal.auto.1f4dfa09-73a7-4180-b8dc-d98896f4fb85",
	            promptOptions: {
			        /* These prompt options values configure both the HTTP prompt and the HTTP popup. */
			        /* actionMessage limited to 90 characters */
			        actionMessage: "Ultimele dezvăluiri și alerte Breaking News dacă te abonezi gratuit la notificări.",
			        /* acceptButtonText limited to 15 characters */
			        acceptButtonText: "ACCEPT",
			        /* cancelButtonText limited to 15 characters */
			        cancelButtonText: "NU ACUM"
			    }
	        }]);
	    }
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

	<script type="text/javascript">
        var section_id = '869';
                	var section_slug = 'stirile-zilei';
                                        var max_pages = '';
        var article_id='3227807';        var suprasection_id='119';        var siteURL = "https://www.stiripesurse.ro";
        var assetsURL = "https://www.stiripesurse.ro";
    </script>

    
	<script>
		var disqus_disable_mobile = false;
	</script>

	
		<script>
			var Pelcro = window.Pelcro || (window.Pelcro = {});
			Pelcro.siteid = 5029;
			Pelcro.environment = {};
			Pelcro.environment.stripe = "pk_live_Wdef2LjEQXsgFWult6IVFobB"
			Pelcro.environment.domain = "https://www.pelcro.com";
			Pelcro.environment.ui = "https://js.pelcro.com/ui/plugin/membership/v1/main.min.js"
		</script>
		<script src="//js.pelcro.com/sdk/main.min.js" type="text/javascript"></script>

		<script>
			function runAdForUnsubscribedUser(runAdCallback, runForSubscribers = null) {
				const userTokenExists = document.cookie.match(/pelcro\.user\.auth\.token/) !== null;

				if (!userTokenExists) {
					console.log('No auth token. Displaying ad.');

					runAdCallback();

					return;
				}

				const userIsLoaded = Object.keys(Pelcro.user.read()).length !== 0;

				if (!userIsLoaded) {
					document.addEventListener('PelcroUserLoaded', () => {
						if (!Pelcro.user.isEntitledTo('no_ads')) {
							console.log('User not subscribed. Displaying ad.');

							runAdCallback();
						} else {
							runForSubscribers && runForSubscribers();
						}
					});

					return;
				}

				if (!Pelcro.user.isEntitledTo('no_ads')) {
					console.log('User not subscribed. Displaying ad.');

					runAdCallback();
				} else {
					runForSubscribers && runForSubscribers();
				}
			}

			document.addEventListener('PelcroUserLoggedIn', user => {
				console.log('User logged in', user);
				window.document.location.reload();
			});

			document.addEventListener('PelcroSubscriptionCreate', () => {
				console.log('Subscription created');
				window.document.location.reload();
			});

			document.addEventListener('PelcroSubscriptionRenewed', () => {
				console.log('Subscription renewed');
				window.document.location.reload();
			});

			document.addEventListener('PelcroSubscriptionReactivated', () => {
				console.log('Subscription reactivated');
				window.document.location.reload();
			});
		</script>
	

	
	

	

	<script src="//ro.adocean.pl/files/js/ado.js"></script>
	<script type="text/plain" class="optanon-category-C0004">
	/* (c)AdOcean 2003-2023 */
    if(typeof ado!=="object"){ado={};ado.config=ado.preview=ado.placement=ado.master=ado.slave=function(){};}
    ado.config({mode: "new", xml: false, consent: true, characterEncoding: true});
    ado.preview({enabled: true, emiter: "ro.adocean.pl", id: "9o_nnmMOl7DVtYDXaZt4a6fiYvE4HBI1Yn6GfTZu5v3.E7"});
	</script>

	<script>
		if (ado && ado.slave && runAdForUnsubscribedUser) {
			const cb = ado.slave;

			ado.slave = function () {
				runAdForUnsubscribedUser(() => cb.apply(this, arguments));
			};
		}
	</script>

	

<!-- START OLD ADOCEAN CODES -->





<!-- END OLD ADOCEAN CODES -->

<!-- START NEW ADOCEAN CODES -->





	
	<script type="text/plain" class="optanon-category-C0004">
	/* (c)AdOcean 2003-2023, MASTER: SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART */
	ado.master({id: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07', server: 'ro.adocean.pl' });
	</script>
	


<!-- END NEW ADOCEAN CODES -->


	
		<script type="text/plain" class="ad-code">
			window._taboola = window._taboola || [];
            _taboola.push({article:'auto'});
            !function (e, f, u, i) {
              if (!document.getElementById(i)){
                e.async = 1;
                e.src = u;
                e.id = i;
                f.parentNode.insertBefore(e, f);
              }
            }(document.createElement('script'),
            document.getElementsByTagName('script')[0],
            '//cdn.taboola.com/libtrc/stiripesurse/loader.js',
            'tb_loader_script');
            if(window.performance && typeof window.performance.mark == 'function')
              {window.performance.mark('tbl_ic');}
		</script>

		<script type="text/plain" class="taboola-for-subscribers">
			window._taboola = window._taboola || [];
			_taboola.push({article:'auto'});
			!function (e, f, u, i) {
				if (!document.getElementById(i)){
					e.async = 1;
					e.src = u;
					e.id = i;
					f.parentNode.insertBefore(e, f);
				}
			}(document.createElement('script'),
					document.getElementsByTagName('script')[0],
					'//cdn.taboola.com/libtrc/stiripesurse-organicro-p25528745/loader.js',
					'tb_loader_script');
			if(window.performance && typeof window.performance.mark == 'function')
			{window.performance.mark('tbl_ic');}
		</script>

        <!-- Taboola Pixel Code -->
		<script type="text/plain" class="optanon-category-C0004">
			window._tfa = window._tfa || [];
			window._tfa.push({notify: 'event', name: 'page_view', id: 1497728});
			!function (t, f, a, x) {
			     if (!document.getElementById(x)) {
			        t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
			     }
			}(document.createElement('script'),
			document.getElementsByTagName('script')[0],
			'//cdn.taboola.com/libtrc/unip/1497728/tfa.js',
			'tb_tfa_script');
		</script>
		<!-- End of Taboola Pixel Code -->
	

	

	
		
			<script type="text/plain" class="ad-code" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4772869140693984" crossorigin="anonymous"></script>
		

	
	
		<!-- Cxense SATI script 2.1 begin -->
		<!-- <script async src="//code3.adtlgc.com/js/sati_init.js"></script> -->
		<script async src="//code3.adtlgc.com/js/sati_init.js"></script>
		<script>
			var cX = cX || { options: { consent: true } };
			cX.callQueue = cX.callQueue || [];
			cX.callQueue.push(['requireConsent']);
			cX.callQueue.push(['invoke', function() {
				setPageViewConsent();
			}]);
			cX.callQueue.push(['setSiteId', '1137353861562327966']);
			cX.callQueue.push(['sendPageViewEvent']);

			function setPageViewConsent() {
				console.log('SATI "pv" consent', cX.hasConsent('pv'));
				console.log('SATI "segment" consent', cX.hasConsent('segment'));
				console.log('SATI "ad" consent', cX.hasConsent('ad'));

				if (!cX.hasConsent('pv') || !cX.hasConsent('segment') || !cX.hasConsent('ad')) {
					cX.callQueue.push(['setConsent', {pv: true, segment: true, ad: true}, {runCallQueue: true}]);
				}
			}
		</script>
		<script> (function(d, s, e, t) {
			e = d.createElement(s);
			e.type = 'text/java' + s;
			e.async = 'async';
			e.src = 'http' + ('https:' === location.protocol ? 's://s' : '://') + 'cdn.cxense.com/cx.js';
			t = d.getElementsByTagName(s)[0];
			t.parentNode.insertBefore(e, t);
		})(document, 'script');
		</script>
		<script type="text/javascript">
			function SATI_TrackView(locationURL, referrerURL) {
			    if(locationURL === referrerURL) {return;}
				window.cX = window.cX || {};
			    cX.callQueue = cX.callQueue || [];
			    cX.callQueue.push(['initializePage']);
			    cX.callQueue.push(['setSiteId', '1137353861562327966']);
			    cX.callQueue.push(['sendPageViewEvent', { 'location': locationURL, 'referrer':referrerURL}]);
			};
		</script>
		<!-- Cxense SATI script 2.1 end -->
	

	
	<!-- Facebook Pixel Code -->
	<script type="text/plain" class="optanon-category-C0002">
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window,document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '524936886177568');
		fbq('track', 'PageView');
	</script>

	<noscript>
		<img height="1" width="1" src="https://www.facebook.com/tr?id=524936886177568&ev=PageView &noscript=1"/>
	</noscript>
	<!-- End Facebook Pixel Code -->
	

    

        	<script type="text/plain" class="ad-code" src="//pahtdz.tech/c/stiripesurse.ro.js"></script>
    
	<script src='https://www.google.com/recaptcha/api.js?hl=ro'></script>
</head>
<body>
	
		<script type="text/plain" class="optanon-category-C0002">
		<!--//--><![CDATA[//><!--
		var pp_gemius_identifier = '..g70.gz1N6V3oRnVb5VmnZGHbEB5QedkIrJtFtGjSD.17';
		// lines below shouldn't be edited
		function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
		gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');
		(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
		gt.setAttribute('defer','defer'); gt.src=l+'://garo.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
		//--><!]]>
		</script>
	

    
    <script>
        var ad = document.createElement('div');
        ad.id = 'AdSense';
        ad.className = 'AdSense';
        ad.style.display = 'block';
        ad.style.position = 'absolute';
        ad.style.top = '-1px';
        ad.style.height = '1px';
        document.body.appendChild(ad);
    </script>
    

    

    <div id="fb-root"></div>
            
			<script async defer crossorigin="anonymous"
				src="https://connect.facebook.net/ro_RO/sdk.js#xfbml=1&version=v16.0&appId=937173573088655&autoLogAppEvents=1"
				nonce="rZGgSIXo">
			</script>
        
    
	
	

        	<div style="position: relative; width: 1280px; margin: 0 auto">
    		
    		<div class="banner banner--top-frame" style="width: 1280px">
		    	<div id="adoceanroqkdkgxourk"></div>
				<script type="text/plain" class="optanon-category-C0004">
				/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf 1280x150 DART Branding TOP */
				ado.slave('adoceanroqkdkgxourk', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
				</script>
		    </div>

    		<div class="banner banner--left-frame">
			    <div id="adoceanrowifnpmllmu"></div>
				<script type="text/plain" class="optanon-category-C0004">
				/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf 120x600 DART Branding Left */
				ado.slave('adoceanrowifnpmllmu', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
				</script>
    		</div>

    		<div class="banner banner--right-frame">
		    	<div id="adoceanrotjmtckfqhp"></div>
				<script type="text/plain" class="optanon-category-C0004">
				/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf 120x600 DART Branding Right */
				ado.slave('adoceanrotjmtckfqhp', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
				</script>
		    </div>
		    
    	</div>
    
    
	<form class="search-popup" role="search" method="get" action="https://www.stiripesurse.ro/cauta">
	<div class="js-search-close">&times;</div>
    <div class="input-group">
        <input type="text" id="search-term" class="form-control" placeholder="Caută" name="s" value="">
        <button class="search-popup-submit" type="submit">Caută</button>
    </div>
</form>

<div class="subscription-info-modal" data-active="false">
	<section class="subscription-info-modal__content">
		<header class="subscription-info-modal__header">
			<button class="subscription-info-close-button">&times;</button>

			<h4 class="subscription-info-modal__title">
				<img src="https://media.stiripesurse.ro/assets/img/new_images/new_sps_logo.png" alt="Subscription modal logo"/>
				Premium
			</h4>
		</header>
		<div class="subscription-info-modal__body">
			<h4>
				Abonează-te pentru experiența stiripesurse.ro Premium!
			</h4>

			<ul>
				<li>
					cea mai rapidă sursă de informații și știri
				</li>

				<li>
					experiența premium fără reclame sau întreruperi
				</li>

				<li>
					în fiecare zi,cele mai noi știri, exclusivități și breaking news
				</li>
			</ul>

			<div class="subscription-info-modal__buttons">
				<button class="pelcro-subscribe-button" data-product-id="2058">
					Abonează-te
				</button>
				<a class="pelcro-login-button" data-login-text="intră în cont" data-dashboard-text="Contul meu">intră în cont</a>
			</div>
		</div>
	</section>
</div>



	<div class="banner banner--top-frame">
		<!-- START OLD ADOCEAN CODES -->
		
		<!-- END OLD ADOCEAN CODES -->

		<!-- START NEW ADOCEAN CODES -->

		
		<div id="adoceanrokmrgnrsnve"></div>
		<script type="text/plain" class="optanon-category-C0004">
		if (window.innerWidth >= 1500) {
			/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf V4 DART Branding */
			ado.slave('adoceanrokmrgnrsnve', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
		}
		</script>
		

		<!-- END NEW ADOCEAN CODES -->
	</div>



	
	<div style="clear: both; /* display: flex; justify-content: center; */">
		<div id="ado-QolHxdcyh1mFtOy7yKwgoQsO.LCj2PCv3ZTf0p95XR7.47"></div>
		<script type="text/plain" class="optanon-category-C0004">
		/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).unf 970x250 DNM Top */
		ado.placement({id: 'ado-QolHxdcyh1mFtOy7yKwgoQsO.LCj2PCv3ZTf0p95XR7.47', server: 'ro.adocean.pl' });
		</script>
	</div>
	

<header class="header">
	<div class="header-wrapper container_16">
		<div class="header-top">
			<div class="header-social-buttons">
				<a href="//www.facebook.com/stiripesurse.ro" target="_blank" class="header-social-button css-transition fb-button">&nbsp;</a>
				<a href="//twitter.com/stiripesurse_ro" target="_blank" class="header-social-button css-transition twitter-button">&nbsp;</a>
				<a href="https://www.stiripesurse.ro/rss/stiri.xml" target="_blank" class="header-social-button css-transition rss-button">&nbsp;</a>
				<a href="javascript:void(1)" class="header-social-button css-transition search-button js-search-open">&nbsp;</a>
			</div>

			<div class="app-download">
				<span class="app-download-text">DESCARCĂ APLICAȚIA:</span>
				
					<a href="https://itunes.apple.com/ro/app/stiri-pe-surse/id897510793?mt=8&uo=4" target="itunes_store" style="">
						<img alt="iTunes app" src="https://media.stiripesurse.ro/assets/img/new_images/badge_appstore-lrg.png" style="vertical-align:middle;display:inline-block;overflow:hidden;width:auto;height:30px;" width="101" height="30">
					</a>

				    <a target="_blank" href="https://play.google.com/store/apps/details?id=ro.soma.social.stiripesurse">
					  <img alt="Android app on Google Play" src="https://media.stiripesurse.ro/assets/img/new_images/en_app_rgb_wo_45.png" style="max-height:30px;vertical-align:middle" width="86" height="30"/>
					</a>
				
			</div>

			<div class="fb-subscription hidden">
				CELE MAI NOI ȘTIRI ȘI ALERTE BREAKING NEWS:
				<a href="https://www.stiripesurse.ro/notificari/" target="_blank" class="onesignal-notif-button">ACTIVEAZĂ NOTIFICĂRILE</a>
			</div>

			<div class="account-subscription">
				<span class="account-subscription__info hide-for-subscribed">
					NOU! Citește stiripesurse.ro <button class="subscription-info-button">Premium</button>
				</span>
				<button class="pelcro-subscribe-button" data-product-id="2058">
					Abonează-te
				</button>
				<a class="pelcro-login-button" data-login-text="intră în cont" data-dashboard-text="Contul meu" style="text-align: center">intră în cont</a>
			</div>
		</div>

		<div class="header-middle">
							<div class="logo">
					<a href="https://www.stiripesurse.ro">
						<img class="logo-img" src="https://media.stiripesurse.ro/assets/img/new_images/new_sps_logo.png" alt="logo" width="430" height="87"/>
					</a>
				</div>
			
	    	<div class="header-banner" style="position:relative">

<!-- START OLD ADOCEAN CODES -->






<!-- END OLD ADOCEAN CODES -->

<!-- START NEW ADOCEAN CODES -->


<div id="adoceanrounptdmghky"></div>
<script type="text/plain" class="optanon-category-C0004">
/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Category DCAT.728x90 DCAT Top */
ado.slave('adoceanrounptdmghky', {myMaster: 'D3lFeAjFPU2NRn.d3eXVu9No0Gway8M6QS0gBAIpXXj.U7' });
</script>




    
    <div id="adoceanrorbgtqvsreb"></div>
    <script type="text/plain" class="optanon-category-C0004">
    /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.728x90 DART Top */
    ado.slave('adoceanrorbgtqvsreb', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
    </script>
    


<!-- END NEW ADOCEAN CODES -->

</div>
	    </div>

	    <nav class="header-menu">
	<ul id="menu-header-menu" class="menu">
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category mainMenuLinkActive"><a href="https://www.stiripesurse.ro/stirile-zilei" target="_self"> Știrile Zilei</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/politica" target="_self">Politică</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/stiri-din-republica-moldova" target="_self">Știri din R. Moldova</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/externe" target="_self">Externe</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/sanatate" target="_self">Sănătate</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/economie" target="_self">Economie</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/crypto" target="_self">Crypto</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/social" target="_self">Social</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/cultura-si-media" target="_self">Cultură și Media</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/uniunea-europeana" target="_self">U.E.</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/diaspora" target="_self">Diaspora</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/meteo" target="_self">Meteo</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/sinteze" target="_self">Sinteze</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/sport" target="_self">Sport</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/stiri-din-bucuresti" target="_self">București</a></li>
                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category "><a href="https://www.stiripesurse.ro/english" target="_self">English</a></li>
                                </ul>
</nav>
    </div>
</header>

<div class="account-subscription">
	<span class="account-subscription__info hide-for-subscribed">
		NOU! Citește stiripesurse.ro <button class="subscription-info-button">Premium</button>
	</span>
	<div>
		<button class="pelcro-subscribe-button" data-product-id="2058">
			Abonează-te
		</button>
		<a class="pelcro-login-button" data-login-text="intră în cont" data-dashboard-text="Contul meu" style="text-align: center">intră în cont</a>
	</div>
</div>

<div class="mobile-header">
	<a href="https://www.stiripesurse.ro">
		<img src="https://media.stiripesurse.ro/assets/img/logo-mobil.png" class="logos" alt="" width="170" height="28"/>
	</a>
	<a href="javascript:void(1)" class="mobile-search header-social-button css-transition search-button js-search-open">&nbsp;</a>
</div>


	<section class="main container_16">
        <section class="left-container column ld-three-fourths md-two-thirds sd-one-full">
	<article class="post article-single">
		<header class="article-single-header">
			<div class="article-header-data column ld-three-fifths md-one-full sd-two-thirds">
									<div class="article-socials">
						

						<a href="https://www.facebook.com/dialog/share?app_id=460603584065574&display=popup&href=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html&redirect_uri=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-facebook"></a>
						<a href="https://twitter.com/intent/tweet?text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură&url=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-twitter"></a>
						<a href="https://telegram.me/share/url?url=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html&text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură" target="_blank" class="fa fa-telegram"></a>
						<a href="https://api.whatsapp.com/send?text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură%20https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-whatsapp"></a>
						<a href="https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-link js-copy-link"></a>
					</div>
				
				
				<h1 class="article-single-title">Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură</h1>

				<div class="article-single-meta">
																		<div>
								<label for="author">
																			Autor:
																	</label>

								<address>
									<a href="">
																					Radu Pop																			</a>
								</address>
							</div>
																<div>
						<label for="date">
															Publicat:
													</label>

						<time class="op-published" datetime='2024-02-10T12:31:13Z'>
							10/02/2024 12:31
						</time>
					</div>
															<div>
						<label for="source">Sursa foto:</label> euronews.com
					</div>
										<!--<span class="views"><div class="entypo eye"></div>0</span>-->
				</div>
			</div>

			<div class="article-single-featured column ld-two-fifths md-one-full sd-one-third">
				<figure>
					<img alt="ciolos" src="https://media.stiripesurse.ro/image/202211/w295h180/media-166907707520815000.png" style="width: 285px; height: 174px; " class="attachment-large" width="285" height="174" />
				</figure>
			</div>

			
					</header>

		
		
		

		<section class="article-content">
							<div style="height: 100px" class="news-reader">
					<script data-cfasync="false" type="text/plain" class="ad-code" src="https://video.onnetwork.tv/embed.php?ext=stiripesurse"></script>
				</div>
			
			<div><script type="text/plain" class="teads" async="true" src="//a.teads.tv/page/90202/tag"></script></div><h3>Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură</h3><p>Europarlamentarul PSD <a href="https://www.stiripesurse.ro/tag/mihai-tudose" target="_blank"><span style="color: #0000ff;">Mihai Tudose</span></a> a afirmat, sâmbătă, că fermierii din România au cele mai mici subvenţii din Europa, după ce actualul europarlamentar REPER <a href="https://www.stiripesurse.ro/tag/dacian-ciolos" target="_blank"><span style="color: #0000ff;">Dacian Cioloş</span></a>, în vremea când a ocupat funcţia de comisar european pentru agricultură, a negociat cele mai mici subvenţii pentru fermierii din România. Tudose a adăugat că aceste sume urmează să fie renegociate.</p><div id="adoceanromhhqishsia"></div>
            <script type="text/plain" class="optanon-category-C0004">
            /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.300x250R DART 2 Paragraf */
            ado.slave('adoceanromhhqishsia', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
            </script><p>Întrebat, sâmbătă, în emisiunea Insider Politic de la Prima TV, dacă fermierii primesc o subvenţie prea mică, Mihai Tudose a explicat care sunt motivele protestelor.</p><p>”Termenul ăsta, prea mic, prea mare, necontextualizat, nu face sens. Fermierii din Europa sunt revoltaţi datorită unei impuneri de mediu care le strică viaţa complet. Adică închizi ferme de vaci, fiindcă vacile poluează prin ce fac ele când fac. Apoi să laşi 4 la sută pârloagă. La noi, 4 la sută din suprafaţa agricolă e mult. Apoi la noi în România, după cum ştiţi, e un tip foarte vocal, e foarte şmecher, le ştie el pe toate, domnul Cioloş, care a negociat el nişte subvenţii pentru agricultori, cea mai mică subvenţie din Europa e la noi în România, când era comisar european, el făcea politica agricolă comună, dar a făcut politica agricolă pentru alte ţări, nu pentru România. Ce dovezi mai bune, decât faptul că avem cea mai mică subvenţie, a negociat pentru România parcă în pofida României, să ne facă rău. Şi acum tot el ne dă lecţii”, a declarat Tudose.</p><div id="adoceanropgqjfvnnnf"></div>
            <script type="text/plain" class="optanon-category-C0004">
            /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.300x250R DART 1 Paragraf */
            ado.slave('adoceanropgqjfvnnnf', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
            </script>

            <div id="adoceanrozhogmprgrz"></div>
            <script type="text/plain" class="optanon-category-C0004">
            /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf Parallax Interscroller DART */
            ado.slave('adoceanrozhogmprgrz', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
            </script>
        <h4><span style="color: #ff0000;">Europarlamentarul a precizat că, în noul mandat european, sumele pentru subvenţii vor fi renegociate</span></h4><p>”Pe noul mandat tocmai vine momentul în care se pot renegocia aceste sume, în următorul parlament, următoarea configurare. Şi atunci da, fermierii români sunt îndreptăţiţi pe  aceatsă zonă. Între timp au crescut extraordinar de mult preţurile la energie, motorină, curent electric şi în ultimii ani au scăzut aproape la jumate preţurile la cereale. Este evident că ceva nu mai merge şi trebuie regândit tot.</p><p>Motivele pentru care ies fermierii din Olanda, versus motivele pentru care ies fermierii din Franţa, versus motivele pentru care ies fermierii din România sunt diferite, dar au ca element comun nevoia de stabilitate într-un domeniu vital pentru Europa şi pentru omenire, hrana”, a declarat Tudose.</p><div id="adoceanronpnmdsnqsv"></div>
            <script type="text/plain" class="optanon-category-C0004">
            /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.300x250R DART 3 Paragraf */
            ado.slave('adoceanronpnmdsnqsv', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
            </script>

            <div id="onnOutstreamPlayer" style="min-width:300px; min-height: 5px;"></div>
            <script type="text/javascript" src="https://video.onnetwork.tv/embed.php?sid=M25QLFN4ZSww&o=1&cId=onnOutstreamPlayer"></script>
        

			

					</section><!--|nl2br-->

		
		
		

		<div class="article-socials">
			<span class="article-socials__follow-us-text">
				<strong>Urmărește-ne:</strong>
			</span>

			<a href="https://news.google.com/publications/CAAiEKLyXCvWu0Z-UresCyw9pr4qFAgKIhCi8lwr1rtGflK3rAssPaa-?hl=ro&gl=RO&ceid=RO%3Aro" target="_blank">
				<img src="https://media.stiripesurse.ro/assets/img/google-news-button.png" alt="" style="height: 35px; vertical-align: middle;" width="128" height="35"/>
			</a>

			

			<a href="https://www.facebook.com/dialog/share?app_id=460603584065574&display=popup&href=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html&redirect_uri=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-facebook"></a>
			<a href="https://twitter.com/intent/tweet?text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură&url=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-twitter"></a>
			<a href="https://telegram.me/share/url?url=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html&text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură" target="_blank" class="fa fa-telegram"></a>
			<a href="https://api.whatsapp.com/send?text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură%20https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-whatsapp"></a>
			<a href="https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" target="_blank" class="fa fa-link js-copy-link"></a>

			<a href="https://www.stiripesurse.ro/notificari/" target="_blank" class="onesignal-notif-button">ACTIVEAZĂ NOTIFICĂRILE</a>
		</div>

		<div class="article-tags">
			<label for="tags">TAGS: </label>
							<a href="https://www.stiripesurse.ro/tag/dacian-ciolos" rel="tag">dacian ciolos</a>
							<a href="https://www.stiripesurse.ro/tag/fermieri" rel="tag">fermieri</a>
							<a href="https://www.stiripesurse.ro/tag/mihai-tudose" rel="tag">mihai tudose</a>
							<a href="https://www.stiripesurse.ro/tag/proteste" rel="tag">proteste</a>
							<a href="https://www.stiripesurse.ro/tag/subventii" rel="tag">subvenții</a>
					</div>

		
		

		<div class="telegram-comments">
			<script async src="https://comments.app/js/widget.js?3" data-comments-app-website="uo0uMpDa" data-limit="5"></script>
		</div>
	</article>

	

			<div class="vertical-banner">	
	<!-- START OLD ADOCEAN CODES -->
	
	<!-- END OLD ADOCEAN CODES -->

	<!-- START NEW ADOCEAN CODES -->

	
	<div id="adoceanroydlglnqpoq"></div>
	<script type="text/plain" class="optanon-category-C0004">
	/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.160x600 DART 1 Left */
	ado.slave('adoceanroydlglnqpoq', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
	</script>
	

	
	<div id="adoceanrovecnokkujl"></div>
	<script type="text/plain" class="optanon-category-C0004">
	/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.160x600 DART 2 Left */
	ado.slave('adoceanrovecnokkujl', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
	</script>
	

	
	<div id="adoceanrosfjtbiejok"></div>
	<script type="text/plain" class="optanon-category-C0004">
	/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf 160x600 DART 3 Left */
	ado.slave('adoceanrosfjtbiejok', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
	</script>
	

	<!-- END NEW ADOCEAN CODES -->
	
	
</div>
	
	<div style="clear:both"></div>

	

			<!--TABOOLA RECOMMENDED-->
		
			<div id="taboola-below-article-thumbnails"></div>
			<script type="text/plain" class="ad-code">
				window._taboola = window._taboola || [];
                _taboola.push({
                    mode: 'thumbnails-a',
                    container: 'taboola-below-article-thumbnails',
                    placement: 'Below Article Thumbnails',
                    target_type: 'mix'
                });
			</script>

		<div id="taboola-organic-below-article"></div>
		<script type="text/plain" class="taboola-for-subscribers">
			window._taboola = window._taboola || [];
			_taboola.push({
				mode: 'organic-stiripesurse',
				container: 'taboola-organic-below-article',
				placement: 'Organic Below Article',
				target_type: 'mix',
				tracking: 'utm_source=projectagora&utm_medium=contentdiscovery'
			});
		</script>
		
	
	
	<section>
		<div class="category-title border-articole-similare">
			<a href="javascript:void(0)">
				<span class="bgcolor-articole-similare">CITESTE SI</span>
			</a>
		</div>

		<div class="row">
	        	<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop  border-stirile-zilei">
			<a href="https://www.stiripesurse.ro/oamenii-de-stiinta-germani-dau-un-verdict-aspru-ridurile-ne-fac-sa-aratam-neincrezatori_3227323.html" target="_self">
				
							        			        	<img alt="ingrijire fata riduri" src="https://media.stiripesurse.ro/image/202303/w230h150/media-167858909055484600.jpg" style="width: 212px; height: 150px; " class="wp-post-image" width="212" height="150" />
			        			    				<div class="article-data  ">
											<div class="article-title">Oamenii de ştiinţă germani dau un verdict aspru: 'Ridurile ne fac să arătăm neîncrezători!'</div>
					
										<div class="article-meta">
						<span class="time">
							
							<svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
							10/02/2024
						</span>
						<span class="views">
							
							<svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
							370
						</span>
					</div>
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop  border-stirile-zilei">
			<a href="https://www.stiripesurse.ro/dupa-constanta-marcel-ciolacu-a-ajuns-in-judetul-tulcea-mesajul-premierului-la-jurilovca-foto_3227799.html" target="_self">
				
							        			        	<span class="strip strip--breaking-news">BREAKING NEWS</span><img alt="marcel ciolacu oameni jurilovca" src="https://media.stiripesurse.ro/image/202402/w230h150/media-170755975218137300.jpg" style="width: 212px; height: 150px; " class="wp-post-image" width="212" height="150" />
			        			    				<div class="article-data breaking-news ">
											<div class="article-title">După Constanța, Marcel Ciolacu a ajuns în judeţul Tulcea - Mesajul premierului de la Jurilovca / Foto</div>
					
										<div class="article-meta">
						<span class="time">
							
							<svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
							10/02/2024
						</span>
						<span class="views">
							
							<svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
							330
						</span>
					</div>
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop  border-stirile-zilei">
			<a href="https://www.stiripesurse.ro/simona-halep-a-revenit-in-tara-dupa-audierile-de-la-tas-sportiva-vizibil-deranjata-de-insistentele-jurnalistilor_3227787.html" target="_self">
				
							        			        	<img alt="Simona Halep" src="https://media.stiripesurse.ro/image/202208/w230h150/media-166058096466741400.jpg" style="width: 212px; height: 150px; " class="wp-post-image" width="212" height="150" />
			        			    				<div class="article-data  ">
											<div class="article-title">Simona Halep a revenit în țară după audierile de la TAS. Sportiva, vizibil deranjată de insistențele jurnaliștilor</div>
					
										<div class="article-meta">
						<span class="time">
							
							<svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
							10/02/2024
						</span>
						<span class="views">
							
							<svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
							1043
						</span>
					</div>
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop  border-stirile-zilei">
			<a href="https://www.stiripesurse.ro/capcana-din-noua-lege-a-pensiilor-cine-sunt-pensionarii-carora-nu-le-va-creste-pensia-de-la-1-septembrie-si-ulterior-vor-rata-indexarile_3227047.html" target="_self">
				
							        			        	<span class="strip strip--exclusiv">EXCLUSIV</span><img alt="pensie pensionar" src="https://media.stiripesurse.ro/image/202311/w230h150/media-169973778797328600.jpg" style="width: 212px; height: 150px; " class="wp-post-image" width="212" height="150" />
			        			    				<div class="article-data exclusiva ">
											<div class="article-title">'Capcana' din noua Lege a Pensiilor: Cine sunt pensionarii cărora NU le va crește pensia de la 1 septembrie și ulterior vor 'rata' indexările</div>
					
										<div class="article-meta">
						<span class="time">
							
							<svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
							10/02/2024
						</span>
						<span class="views">
							
							<svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
							36793
						</span>
					</div>
									</div>

							</a>
		</article>
	</div>

	
	
	

		</div>
	</section>

	

	<section>
		<div class="category-title border-revista-blogurilor">
			<a href="javascript:void(0)">
				<span class="bgcolor-revista-blogurilor">EXQUIS.RO</span>
			</a>
		</div>

		<div class="row">
	        	<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://www.exquis.ro/ce-efect-are-alcoolul-asupra-colesterolului/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://www.exquis.ro/wp-content/uploads/2017/07/baut-pahar-vin-rosu-300x169.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Ce efect are alcoolul asupra colesterolului</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://www.exquis.ro/o-idee-gustoasa-si-sanatoasa-de-cornuri-pentru-pachet/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://www.exquis.ro/wp-content/uploads/2024/02/IMG_9671-300x229.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">O idee gustoasă și sănătoasă de cornuri pentru pachet</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://www.exquis.ro/de-ce-sa-nu-consumi-citrice-dupa-mancare-cum-e-afectat-stomacul/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://www.exquis.ro/wp-content/uploads/2017/11/citrice-300x169.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">De ce să nu consumi citrice după mâncare: Cum e afectat stomacul</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://www.exquis.ro/mineralul-care-grabeste-vindecarea-ranilor-si-ajuta-la-functionarea-sistemului-nervos/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://www.exquis.ro/wp-content/uploads/2020/05/ingrijire-rana-300x149.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Mineralul care grăbește vindecarea rănilor și ajută la funcționarea sistemului nervos</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
	

		</div>
	</section>

	<section>
		<div class="category-title border-economie">
			<a href="javascript:void(0)">
				<span class="bgcolor-economie">SPORTBULL.RO</span>
			</a>
		</div>

		<div class="row">
	        	<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/s-a-aflat-adevarul-despre-andrea-compagno-atacantul-italian-a-semnat-contractul-vietii-cati-bani-va-primi-de-la-chinezi/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2024/02/Andrea-Compagno-1-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">S-a aflat adevărul despre Andrea Compagno! Atacantul italian a semnat contractul vieții. Câţi bani va primi de la chinezi</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/favoritul-lui-gigi-becali-in-ipostaze-socante-cristi-tanase-are-probleme-grave-marturia-teribila-a-acestuia/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2024/02/Cristi-Tanase-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Favoritul lui Gigi Becali, în ipostaze șocante! Cristi Tănase are probleme grave. Mărturia teribilă a acestuia</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/verdictul-americanilor-pentru-simona-halep-ce-se-va-intampla-la-tas-dezvaluiri-din-interior/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2023/09/simona-halep-1-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Verdictul americanilor pentru Simona Halep! Ce se va întâmpla la TAS. Dezvăluiri din interior</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/florinel-coman-pleaca-de-la-fcsb-oferta-importanta-pentru-vedeta-lui-elias-charalambous-gigi-becali-a-dat-toate-detaliile/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2023/11/florinel-coman-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Florinel Coman pleacă de la FCSB?! Ofertă importantă pentru vedeta lui Elias Charalambous. Gigi Becali a dat toate detaliile</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/scandal-urias-in-direct-i-a-facut-praf-pe-cei-de-la-fcsb-dupa-ultima-victorie-cuvinte-dure-la-adresa-liderului-din-superliga/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2024/02/fcsb-farul-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Scandal uriaş în direct! I-a făcut praf pe cei de la FCSB după ultima victorie. Cuvinte dure la adresa liderului din Superliga</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/femeia-celebra-care-a-facut-dezvaluiri-incendiare-ce-a-vazut-in-raiul-milionarilor-sotul-fotbalist-i-a-facut-toate-poftele-foto/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2023/02/pulhac-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Femeia celebră care a făcut dezvăluiri incendiare! Ce a văzut în raiul milionarilor. Soţul fotbalist i-a făcut toate poftele / Foto</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/spectacol-marca-marius-sumudica-ce-a-facut-dupa-victoria-celor-de-la-gaziantep-imaginile-momentului-video/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2024/02/Marius-Sumudica-1-300x200.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Spectacol marca Marius Șumudică. Ce a făcut după victoria celor de la Gaziantep. Imaginile momentului / Video</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-economie">
			<a href="https://sportbull.ro/gigi-becali-s-a-dezlantuit-l-a-distrus-pe-dan-sucu-in-direct-ce-le-a-transmis-rivalilor-de-la-rapid/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://sportbull.ro/wp-content/uploads/2023/12/gigi-becali-1-300x169.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Gigi Becali s-a dezlănţuit! L-a distrus pe Dan Şucu în direct. Ce le-a transmis rivalilor de la Rapid</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
	

		</div>
	</section>

	

	

	<div class="row">
		<div class="column-container">
	        <div class="column ld-one-half md-one-half">
				<div class="category-title border-bugetul">
					<a href="https://www.bugetul.ro/" target="_blank">
						<span class="bgcolor-bugetul">BUGETUL.RO</span>
					</a>
				</div>

				<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/mii-de-pensionari-romani-loviti-in-plin-ce-s-ar-putea-intampla-cu-veniturile-lor-lunare-daca-se-aproba-taxa/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/Pensionari-2-600x400.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Mii de pensionari români loviți în plin! Ce s-ar putea întâmpla cu veniturile lor lunare dacă se aprobă taxa</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/apartamentele-din-bucuresti-nu-mai-sunt-un-lux-in-2024-ce-s-a-intamplat-in-ianuarie-i-a-surprins-pe-specialistii-imobiliari/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/pexels-jovydas-dobilas-2462015-400x600.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Apartamentele din București nu mai sunt un lux în 2024. Ce s-a întâmplat în ianuarie i-a surprins pe specialiștii imobiliari</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/programul-noua-casa-2024-din-romania-a-fost-desfiintat-de-un-reprezentant-in-parlamentul-european-cui-i-se-adreseaza-programul/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/Program-Noua-Casă-600x400.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Programul Noua Casă 2024, din România, a fost desființat de un reprezentant în Parlamentul European: „Cui i se adresează programul?”</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/reguli-noi-pentru-voucherele-de-vacanta-in-2024-cine-primeste-bonurile-si-cum-se-calculeaza-totul/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/voucher-600x400.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Reguli noi pentru voucherele de vacanță în 2024. Cine primește bonurile și cum se calculează totul</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/dispare-banca-aflata-de-20-de-ani-in-romania-odata-cu-finalizarea-oficiala-a-tranzactiei-bt-isi-consolideaza-statutul-de-lider-in-piata/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/Banca-Transilvania-600x400.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Dispare banca aflată de 20 de ani în România. Odată cu finalizarea oficială a tranzacției, BT își consolidează statutul de lider în piață</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/cati-bani-are-primaria-generala-a-municipiului-bucuresti-nicusor-dan-a-dezvaluit-pe-ce-buget-se-bazeaza-institutia-in-2024/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/nicusor-dan-1-600x400.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Câți bani are Primăria Generală a Municipiului București? Nicușor Dan a dezvăluit pe ce buget se bazează instituția în 2024</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/anul-2024-aduce-sanctiuni-mai-mari-cine-este-obligat-sa-plateasca-amenda-daca-pasagerul-nu-poarta-centura-de-siguranta/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/pexels-kelly-3119975-600x400.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Anul 2024 aduce sancțiuni mai mari! Cine este obligat să plătească amenda dacă pasagerul nu poartă centura de siguranță</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://www.bugetul.ro/sabotaj-al-lidl-romania-la-adresa-procesatorilor-din-tara-noastra-acuzatiile-au-ajuns-pana-la-guvern/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://www.bugetul.ro/wp-content/uploads/2024/02/Lidl-2-1-600x450.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Sabotaj al Lidl România la adresa procesatorilor din țara noastră? Acuzațiile au ajuns până la Guvern</div>
                    </div>

            </a>
</article>
</div>

	        </div>

	        <div class="column ld-one-half md-one-half">
				<div class="category-title border-bugetul">
					<a href="https://stiripesurse.md/" target="_blank">
						<span class="bgcolor-bugetul">STIRIPESURSE.MD</span>
					</a>
				</div>

		        <div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/video-fermierii-au-blocat-traseul-spre-ptf-leuseni-albita/" target="_blank" >
                                            <div class="article-data  ">
            <div class="article-title">VIDEO: Fermierii au blocat traseul spre PTF Leușeni-Albița</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/premierul-armeniei-refuza-sa-spuna-daca-erevanul-l-ar-aresta-pe-putin/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/1920_63becd2fb09c6041fd7f16a2-300x169.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Premierul Armeniei refuză să spună dacă Erevanul l-ar aresta pe Putin</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/atac-armat-in-inima-atenei-patru-oameni-au-murit/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/2-1247-300x150.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Atac armat în inima Atenei! Patru oameni au murit!</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/atentie-un-tanar-este-de-negasit-de-cateva-zile/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/disparut-1-225x300.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Atenție! Un tânăr este de negăsit de câteva zile</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/modificari-la-codul-muncii-moldovenii-vor-avea-un-nou-tip-de-concediu/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/concediu-medical-300x200.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Modificări la Codul Muncii: Moldovenii vor avea un nou tip de concediu</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/igor-grosu-nu-vad-o-necesitate-ca-noi-sa-apelam-la-gazul-rusesc/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/Igor-Grosu-300x200.jpeg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Igor Grosu: „nu vad o necesitate ca noi să apelăm la gazul rusesc”</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/orban-vrea-ca-serbia-sa-adere-la-ue-inaintea-ucrainei/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/1-10003-300x180.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">Orban vrea ca Serbia să adere la UE înaintea Ucrainei</div>
                    </div>

            </a>
</article>
</div>
<div class="column ld-one-half md-one-half">
<article class="article-loop article-loop-partner border-bugetul ">
    <a href="https://stiripesurse.md/o-batrana-din-floresti-a-fost-omorata-in-bataie-de-sotul-ei/" target="_blank" >
                                            <div class="article-image-container">
                    <img src="https://stiripesurse.md/wp-content/uploads/4-672-300x169.jpg" alt="" width="202" height="135"/>
                </div>
                            <div class="article-data  ">
            <div class="article-title">O bătrână din Floreşti a fost omorâtă în bătaie de soţul ei</div>
                    </div>

            </a>
</article>
</div>

	        </div>
        </div>
	</div>

	<section>
		<div class="category-title border-revista-blogurilor">
			<a href="javascript:void(0)">
				<span class="bgcolor-revista-blogurilor">REVISTABLOGURILOR.RO</span>
			</a>
		</div>

		<div class="row">
	        	<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://revistablogurilor.ro/lovitura-uriasa-pentru-pensionari-parlamentarii-vor-sa-ii-taxeze/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://revistablogurilor.ro/wp-content/uploads/2013/01/pensionar_7cfd70cad6-300x199.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Lovitură uriașă pentru pensionari: Parlamentarii vor să îi taxeze</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://revistablogurilor.ro/cu-cat-au-bubuit-preturile-la-cele-mai-importante-produse-alimentare/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://revistablogurilor.ro/wp-content/uploads/2016/03/alimente-expirate-300x169.png" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Cu cât au bubuit prețurile la cele mai importante produse alimentare</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://revistablogurilor.ro/nu-mai-poti-vinde-masina-fara-acest-document-legea-se-aplica-de-luna-aceasta/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://revistablogurilor.ro/wp-content/uploads/2016/01/images-3.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Nu mai poți vinde mașina fără acest document: Legea se aplică de luna aceasta</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
		<div class="column ld-one-fourth md-one-fourth">
		<article class="article-loop article-loop-partner border-revista-blogurilor">
			<a href="https://revistablogurilor.ro/toti-pensionarii-sunt-vizati-ordinul-a-ajuns-la-casele-de-pensii-din-toata-tara/" target="_blank">
				
															<div class="article-image-container">
		                	<img src="https://revistablogurilor.ro/wp-content/uploads/2013/01/pensionar_7cfd70cad6-300x199.jpg" alt="" width="212" height="150"/>
		                </div>
		            								<div class="article-data  ">
											<div class="article-title">Toți pensionarii sunt vizați: Ordinul a ajuns la Casele de Pensii din toată țara</div>
					
									</div>

							</a>
		</article>
	</div>

	
	
	

		</div>
	</section>

	

	

	<div class="column-container">
			        <div class="column ld-one-half md-one-half">
                        <div class="category-title border-externe">
                <a href="https://www.stiripesurse.ro/externe">
                    <span class="bgcolor-externe">Externe</span>
                </a>
            </div>
                <div class="column-container">
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-externe article-medium">
        	<a href="https://www.stiripesurse.ro/negocieri-privind-formarea-unui-guvern-in-pakistan-negocieri-intense-intre-nawaz-sharif-si-bilawal-bhutto-dupa-ce-adeptii-cu-imran-khan-au-castigat-alegerile_3229647.html">
                
                                    <img alt="pakistan alegeri" src="https://media.stiripesurse.ro/image/202402/w230h150/media-170774060050036500.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Negocieri privind formarea unui guvern în Pakistan. Negocieri intense între Nawaz Sharif și Bilawal Bhutto după ce adepții cu Imran Khan au câștigat alegerile</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:23
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            22
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-externe article-medium">
        	<a href="https://www.stiripesurse.ro/josep-borell-reactioneaza-dupa-declaratiile-lui-donald-trump-nato-nu-poate-depinde-de-capriciile-presedintelui-sua_3229375.html">
                
                                    <img alt="Josep Borell" src="https://media.stiripesurse.ro/image/202102/w230h150/media-161252002696061500.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Josep Borell reacționează după declarațiile lui Donald Trump: NATO nu poate depinde de capriciile preşedintelui SUA</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:20
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            2186
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-externe article-medium">
        	<a href="https://www.stiripesurse.ro/noua-din-zece-unguri-considera-casatoria-drept-cea-mai-buna-forma-de-relatie-kincs_3229619.html">
                
                                    <img alt="Ungaria-maghiari" src="https://media.stiripesurse.ro/image/202309/w230h150/media-169383182602701700.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Nouă din zece unguri consideră căsătoria drept cea mai bună formă de relație (KINCS)</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:16
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            110
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
            </div>
</div>
	    	        <div class="column ld-one-half md-one-half">
                        <div class="category-title border-sanatate">
                <a href="https://www.stiripesurse.ro/sanatate">
                    <span class="bgcolor-sanatate">Sănătate</span>
                </a>
            </div>
                <div class="column-container">
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-sanatate article-medium">
        	<a href="https://www.stiripesurse.ro/ministerul-sanatatii-18-spitale-din-toata-tara-afectate-de-un-atac-cibernetic-masiv-de-tip-ransomware_3229631.html">
                
                                    <img alt="spitale" src="https://media.stiripesurse.ro/image/201605/w230h150/hol_spital_0988_26589300-2.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Ministerul Sănătăţii - 18 spitale din toată ţara, afectate de un atac cibernetic masiv de tip ransomware</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:19
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            67
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-sanatate article-medium">
        	<a href="https://www.stiripesurse.ro/primul-transplant-pediatric-de-rinichi-din-acest-an-la-institutul-clinic-de-urologie-si-transplant-renal-cluj-napoca-o-femeie-de-38-de-ani-a-donat_3229627.html">
                
                                    <img alt="transplant" src="https://media.stiripesurse.ro/image/202201/w230h150/media-164188473519790000.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Primul transplant pediatric de rinichi din acest an, la Institutul Clinic de Urologie şi Transplant Renal Cluj-Napoca – O femeie de 38 de ani a donat</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:19
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            42
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-sanatate article-medium">
        	<a href="https://www.stiripesurse.ro/atac-cibernetic-la-mai-multe-spitale-din-bucuresti-si-din-tara-dnsc-este-un-atac-cibernetic-de-tip-ransomware-asupra-unui-furnizor-de-servicii_3229371.html">
                
                                    <img alt="alerta cibernetica" src="https://media.stiripesurse.ro/image/202204/w230h150/media-165134836358082400.jpeg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Atac cibernetic la mai multe spitale din Bucureşti şi din ţară - DNSC: Este un atac cibernetic de tip ransomware asupra unui furnizor de servicii</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            11:47
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            155
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
            </div>
</div>
	    	        <div class="column ld-one-half md-one-half">
                        <div class="category-title border-economie">
                <a href="https://www.stiripesurse.ro/economie">
                    <span class="bgcolor-economie">Economie</span>
                </a>
            </div>
                <div class="column-container">
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-economie article-medium">
        	<a href="https://www.stiripesurse.ro/tesla-reia-productia-in-germania-dupa-perturbarile-provocate-de-atacurile-din-marea-rosie_3229599.html">
                
                                    <img alt="Tesla Model Y" src="https://media.stiripesurse.ro/image/202007/w230h150/media-159461553320557000.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Tesla reia producţia în Germania, după perturbările provocate de atacurile din Marea Roşie</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:07
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            33
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-economie article-medium">
        	<a href="https://www.stiripesurse.ro/actionarul-novo-nordisk-vrea-sa-investeasca-pana-la-sapte-miliarde-de-dolari-pe-an_3229571.html">
                
                                    <img alt="novo nordisk" src="https://media.stiripesurse.ro/image/202308/w230h150/media-169173357048309000.png" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Acţionarul Novo Nordisk vrea să investească până la şapte miliarde de dolari pe an</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            13:48
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            114
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-economie article-medium">
        	<a href="https://www.stiripesurse.ro/grindeanu-dezminte-lipsa-finantarii-pentru-autostrada-ploiesti-brasov_3229535.html">
                
                                    <img alt="Sorin Grindeanu" src="https://media.stiripesurse.ro/image/202311/w230h150/media-169891409425670400.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Grindeanu dezminte lipsa finanţării pentru autostrada Ploieşti-Braşov</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            12:52
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            339
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
            </div>
</div>
	    	        <div class="column ld-one-half md-one-half">
                        <div class="category-title border-social">
                <a href="https://www.stiripesurse.ro/social">
                    <span class="bgcolor-social">Social</span>
                </a>
            </div>
                <div class="column-container">
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-social article-medium">
        	<a href="https://www.stiripesurse.ro/femeie-gasita-decedata-intr-un-baraj-de-pe-raul-olt_3229711.html">
                
                                    <img alt="inundatii-baraj" src="https://media.stiripesurse.ro/image/202306/w230h150/media-168611716311193000.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Femeie găsită decedată într-un baraj de pe râul Olt</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:41
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            49
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-social article-medium">
        	<a href="https://www.stiripesurse.ro/iubita-unuia-dintre-suspectii-in-crima-de-la-padina-rupe-tacerea-afirmatii-sub-protectia-anonimatului-pentru-ca-se-teme-pentru-viata-ei_3229703.html">
                
                                    <img alt="alex velea cu suspectii de crima" src="https://media.stiripesurse.ro/image/202402/w230h150/media-170765881280596900.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Iubita unuia dintre suspecţii în crima de la Padina rupe tăcerea. Afirmații sub protecția anonimatului pentru că se teme pentru viața ei</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:50
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            1622
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-social article-medium">
        	<a href="https://www.stiripesurse.ro/tanara-accidentata-cand-incerca-sa-traverseze-prin-loc-nepermis-dn-15-la-zanesti_3229679.html">
                
                                    <img alt="accident rutier " src="https://media.stiripesurse.ro/image/202402/w230h150/media-170766868434586900.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Tânără accidentată când încerca să traverseze prin loc nepermis DN 15, la Zăneşti</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:37
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            25
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
            </div>
</div>
	    	        <div class="column ld-one-half md-one-half">
                        <div class="category-title border-cultura-si-media">
                <a href="https://www.stiripesurse.ro/cultura-si-media">
                    <span class="bgcolor-cultura-si-media">Cultură si Media</span>
                </a>
            </div>
                <div class="column-container">
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-cultura-si-media article-medium">
        	<a href="https://www.stiripesurse.ro/spectacolul-pterodactili-de-la-teatrul-excelsior-un-portret-al-unei-familii-americane-in-destramare-intr-o-interpretare-dinamica_3229659.html">
                
                                    <img alt="amfiteatru umf" src="https://media.stiripesurse.ro/image/202310/w230h150/media-169625695868685800.jpeg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Spectacolul Pterodactili de la Teatrul Excelsior, un portret al unei familii americane în destrămare, într-o interpretare dinamică</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:23
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            20
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-cultura-si-media article-medium">
        	<a href="https://www.stiripesurse.ro/comedia-romantica-baietii-buni-ajung-in-rai-cu-bogdan-dumitrache-cosmina-stratan-si-serban-pavlu-in-cinema-din-22-martie_3229539.html">
                
                                    <img alt="sala cinema" src="https://media.stiripesurse.ro/image/202301/w230h150/media-167474522402532900.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Comedia romantică Băieţii buni ajung în Rai, cu Bogdan Dumitrache, Cosmina Stratan şi Şerban Pavlu, în cinema din 22 martie</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            12:55
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            58
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-cultura-si-media article-medium">
        	<a href="https://www.stiripesurse.ro/stampe-japoneze-si-statui-cu-samurai-expuse-in-premiera-nationala-la-muzeul-brukenthal_3229447.html">
                
                                    <img alt="Muzeul Brukenthal" src="https://media.stiripesurse.ro/image/202211/w230h150/media-166782386726726400.jpeg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Stampe japoneze şi statui cu samurai, expuse în premieră naţională la Muzeul Brukenthal</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            12:13
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            68
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
            </div>
</div>
	    	        <div class="column ld-one-half md-one-half">
                        <div class="category-title border-uniunea-europeana">
                <a href="https://www.stiripesurse.ro/uniunea-europeana">
                    <span class="bgcolor-uniunea-europeana">Uniunea Europeană</span>
                </a>
            </div>
                <div class="column-container">
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-uniunea-europeana article-medium">
        	<a href="https://www.stiripesurse.ro/josep-borell-reactioneaza-dupa-declaratiile-lui-donald-trump-nato-nu-poate-depinde-de-capriciile-presedintelui-sua_3229375.html">
                
                                    <img alt="Josep Borell" src="https://media.stiripesurse.ro/image/202102/w230h150/media-161252002696061500.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Josep Borell reacționează după declarațiile lui Donald Trump: NATO nu poate depinde de capriciile preşedintelui SUA</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            14:20
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            2186
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-uniunea-europeana article-medium">
        	<a href="https://www.stiripesurse.ro/jens-stoltenberg-si-liderii-europeni-au-criticat-dur-comentariile-lui-trump-despre-nato-ii-expune-pe-soldatii-americani-si-europeni-unui-risc-sporit_3228759.html">
                
                                    <img alt="Jens Stoltenberg NATO" src="https://media.stiripesurse.ro/image/202210/w230h150/media-166678935470580900.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">Jens Stoltenberg și liderii europeni au criticat dur comentariile lui Trump despre NATO: Îi expune pe soldaţii americani şi europeni unui risc sporit</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            11/02/2024
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            3009
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
                <div class="column ld-one-third md-one-third column-smaller-padding">
        <article class="border-uniunea-europeana article-medium">
        	<a href="https://www.stiripesurse.ro/am-incurcat-o-suntem-terminati-razboiul-brevetelor-planeaza-asupra-viitoarelor-superculturi-din-europa_3228743.html">
                
                                    <img alt="agricultura" src="https://media.stiripesurse.ro/image/202402/w230h150/media-170765824778003700.jpg" style="width: 135px; height: 88px; " class="wp-post-image" width="135" height="88" />
                        		<div class="article-data ">
        			                        <div class="article-title">'Am încurcat-o, suntem terminați'. Războiul brevetelor planează asupra viitoarelor 'superculturi' din Europa</div>
                            			<div class="article-meta">
        				<span class="time">
                            
                            <svg version="1.1" class="clock clock-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
	<g>
		<g>
			<path d="M46,0C20.6,0,0,20.6,0,46c0,25.4,20.6,46,46,46c25.4,0,46-20.6,46-46C92,20.6,71.4,0,46,0z M46,82c-19.9,0-36-16.1-36-36
				c0-19.9,16.1-36,36-36c19.9,0,36,16.1,36,36C82,65.9,65.9,82,46,82z"/>
			<polygon points="49.5,20 42.5,20 42.5,47.5 59.5,64.5 64.5,59.5 49.5,44.6"/>
		</g>
	</g>
</svg>
                            11/02/2024
                        </span>
                        <span class="views">
                            
                            <svg version="1.1" class="eyecon eye-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 56" enable-background="new 0 0 100 56" xml:space="preserve">
	<g>
		<path d="M50,0C17.2,0,0,24.2,0,28c0,3.8,17.2,28,50,28c32.8,0,50-24.2,50-28C100,24.2,82.8,0,50,0z M50,49.5
			c-12.3,0-22.2-9.6-22.2-21.5S37.7,6.5,50,6.5S72.2,16.1,72.2,28S62.3,49.5,50,49.5z M50,28c-2-2.2,3.3-10.8,0-10.8
			c-6.1,0-11.1,4.8-11.1,10.8c0,5.9,5,10.8,11.1,10.8c6.1,0,11.1-4.8,11.1-10.8C61.1,25.3,51.7,29.9,50,28z"/>
	</g>
</svg>
                            5319
                        </span>
        			</div>
        		</div>

                        	</a>
        </article>
        </div>
            </div>
</div>
	    	</div>

	
	<img width="1px" height="1px" src="https://www.stiripesurse.ro/images/print_3227807.gif" alt="" />
</section>

        			<aside class="sidebar column ld-one-fourth md-one-third">
    
    <div class="widget">
        <!-- START OLD ADOCEAN CODES -->




<!-- END OLD ADOCEAN CODES -->

<!-- START NEW ADOCEAN CODES -->


    

    <div id="adoceanroopnqkwjqeo"></div>
    <script type="text/plain" class="optanon-category-C0004">
    /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Category DCAT.300x250 DCAT Sidebar */
    ado.slave('adoceanroopnqkwjqeo', {myMaster: 'D3lFeAjFPU2NRn.d3eXVu9No0Gway8M6QS0gBAIpXXj.U7' });
    </script>

    



    
    
    <div id="adoceanroocnjetmgua"></div>
    <script type="text/plain" class="optanon-category-C0004">
    /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.300x600 DART Sidebar */
    ado.slave('adoceanroocnjetmgua', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
    </script>
    


<!-- END NEW ADOCEAN CODES -->

    </div>

    <div class="widget">
        <!-- START NEW ADOCEAN CODES -->

        
        <div id="adoceanromeihpvemys"></div>
        <script type="text/plain" class="optanon-category-C0004">
        /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Home Page DHP.300x250 DHP Sidebar Article */
        ado.slave('adoceanromeihpvemys', {myMaster: 'GC060x6Ok3M1SfJBz8M9C9l9Aw1ggVKypRgJTz6sp.D.X7' });
        </script>
        

        <!-- END NEW ADOCEAN CODES -->
    </div>

    <div class="widget">
        <div class="ukraine-news-box">
            <a href="https://www.stiripesurse.ro/razboi-in-ucraina">
                <img
                    class="ukraine-news-box__banner"
                    src="https://media.stiripesurse.ro/assets/img/banner-war-in-ukraine.webp"
                    alt="Razboi in Ucraina banner"
                    width="298"
                    height="149"
                />
            </a>
            <ul class="ukraine-news-list">
                                    <li class="ukraine-news-item">
                        <a href="https://www.stiripesurse.ro/fostul-presedinte-al-mongoliei-rasuceste-cutitul-in-rana-lui-vladimir-putin-teritoriul-rusiei-ar-t_3229483.html">
                            Fostul președinte al Mongoliei răsucește cuțitul în rana lui Vladimir Putin: 'Teritoriul Rusiei ar trebui să aparțină descendenților lui Gingis Khan'
                        </a>
                    </li>
                                    <li class="ukraine-news-item">
                        <a href="https://www.stiripesurse.ro/elon-musk-dezminte-categoric-orice-sprijin-pentru-rusia-este-categoric-fals_3229211.html">
                            Elon Musk dezminte categoric orice sprijin pentru Rusia: 'Este categoric fals!'
                        </a>
                    </li>
                                    <li class="ukraine-news-item">
                        <a href="https://www.stiripesurse.ro/jens-stoltenberg-catre-tarile-nato-confruntarea-cu-rusia-ar-putea-dura-decenii-accelerati-productia-de-arme_3229159.html">
                            Jens Stoltenberg, către țările NATO: 'Confruntarea cu Rusia ar putea dura decenii, accelerați producția de arme'
                        </a>
                    </li>
                            </ul>
        </div>
    </div>

    <!-- START NEW ADOCEAN CODES -->

    
    <!-- END NEW ADOCEAN CODES -->

    <div class="widget">
        <div class="ukraine-news-box">
            <a href="https://www.stiripesurse.ro/pastila-de-achizitii-publice">
                <img
                    class="ukraine-news-box__banner"
                    src="https://media.stiripesurse.ro/assets/img/banner-pastila-achizitii-publice.webp"
                    alt="Pastila de achizitii publice"
                    width="298"
                    height="149"
                />
            </a>
            <ul class="ukraine-news-list">
                                    <li class="ukraine-news-item">
                        <a href="https://www.stiripesurse.ro/oferta-care-depaseste-valoarea-estimata-a-contractului-de-achizitie-publica-partea-a-iii-a-pana-la-urma-cu-cat-se-poate-depasi-valoarea-comunicata-initial_2973318.html">
                            Oferta care depășește valoarea estimată a contractului de achiziție publică. Partea a III-a. Până la urmă, cu cât se poate depăși valoarea comunicată inițial?
                        </a>
                    </li>
                                    <li class="ukraine-news-item">
                        <a href="https://www.stiripesurse.ro/oferta-care-depaseste-valoarea-estimata-a-contractului-de-achizitie-publica-partea-a-ii-a-evolutia-unei-jurisprudente-contradictorii_2935575.html">
                            Oferta care depășește valoarea estimată a contractului de achiziție publică? Partea a II-a – evoluția unei jurisprudențe contradictorii
                        </a>
                    </li>
                                    <li class="ukraine-news-item">
                        <a href="https://www.stiripesurse.ro/oferta-care-depaseste-valoarea-estimata-a-contractului-de-achizitie-publica-partea-i-o-modalitate-de-reglementare-care-genereaza-incertitudine-juridica_2909820.html">
                            Oferta care depășește valoarea estimată a contractului de achiziție publică. Partea I – o modalitate de reglementare care generează incertitudine juridică
                        </a>
                    </li>
                            </ul>
        </div>
    </div>

    

    <div class="widget">
        <!-- START NEW ADOCEAN CODES -->


<div id="adoceanrolafhotdffn"></div>
<script type="text/plain" class="optanon-category-C0004">
/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Category DCAT.300x600 DCAT Sidebar after Pastila */
ado.slave('adoceanrolafhotdffn', {myMaster: 'D3lFeAjFPU2NRn.d3eXVu9No0Gway8M6QS0gBAIpXXj.U7' });
</script>



<div id="adoceanroldeqhqglpv"></div>
<script type="text/plain" class="optanon-category-C0004">
/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.300x250 DART Sidebar after Pastila */
ado.slave('adoceanroldeqhqglpv', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
</script>


<!-- END NEW ADOCEAN CODES -->

    </div>

            <div class="widget">
            

            
                

            
            

            
        </div>
    
    
    
    <div class="widget">
        <section class="tabbed-news">
    <header class="tabbed-news__header">
        <ul class="tabbed-news__nav">
            <li class="tabbed-news__nav-item tabbed-news__nav-item--active js-toggle-tabbed-news" data-target="latestNews">
                                    ULTIMELE ȘTIRI
                            </li>
            <li class="tabbed-news__nav-item js-toggle-tabbed-news" data-target="mostReadLastSevenDays">
                                    CELE MAI CITITE
                            </li>
        </ul>
    </header>
    <ul id="latestNews" class="tabbed-news__list tabbed-news__list--latest-news tab">
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/minister-intotero-there-is-still-a-lot-to-do-in-romania-in-terms-of-equality-of-opportunity_3229731.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        15:01
                    </span>
                                            <div class="tabbed-news__list-item__title">Minister Intotero: There is still a lot to do in Romania in terms of equality of opportunity</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/marcel-ciolacu-negociaza-la-guvern-proiectul-urias-care-poate-schimba-fata-romaniei_3229723.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:57
                    </span>
                                            <div class="tabbed-news__list-item__title">Marcel Ciolacu negociază la Guvern proiectul uriaș care poate schimba fața României </div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/iubita-unuia-dintre-suspectii-in-crima-de-la-padina-rupe-tacerea-afirmatii-sub-protectia-anonimatului-pentru-ca-se-teme-pentru-viata-ei_3229703.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:50
                    </span>
                                            <div class="tabbed-news__list-item__title">Iubita unuia dintre suspecţii în crima de la Padina rupe tăcerea. Afirmații sub protecția anonimatului pentru că se teme pentru viața ei</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/blocaj-total-la-toplita-majoritatea-pnl-udmr-pmp-blocheaza-adoptarea-bugetului-pentru-2024-finantarea-spitalului-si-a-scolilor-in-pericol_3229719.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:50
                    </span>
                                            <div class="tabbed-news__list-item__title">Blocaj total la Toplița - PNL-UDMR-PMP blochează adoptarea Bugetului pentru 2024. Finanțarea spitalului și a școlilor în pericol</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/eduard-hellvig-pune-un-verdict-cu-o-doza-de-autoironie-specia-daunatoare-a-consilierilor-personali-postura-din-care-a-pornit-si-fostul-sef-sri_3229559.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:45
                    </span>
                                            <div class="tabbed-news__list-item__title">Eduard Hellvig pune un verdict cu o doză de autoironie: Specia dăunătoare a consilierilor personali, postură din care a pornit și fostul șef SRI</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/femeie-gasita-decedata-intr-un-baraj-de-pe-raul-olt_3229711.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:41
                    </span>
                                            <div class="tabbed-news__list-item__title">Femeie găsită decedată într-un baraj de pe râul Olt</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/tanara-accidentata-cand-incerca-sa-traverseze-prin-loc-nepermis-dn-15-la-zanesti_3229679.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:37
                    </span>
                                            <div class="tabbed-news__list-item__title">Tânără accidentată când încerca să traverseze prin loc nepermis DN 15, la Zăneşti</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/pompierii-au-intervenit-pentru-stingerea-a-11-incendii-de-vegetatie-uscata-si-stuf-in-ultimele-72-de-ore_3229675.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:37
                    </span>
                                            <div class="tabbed-news__list-item__title">Pompierii au intervenit pentru stingerea a 11 incendii de vegetaţie uscată şi stuf în ultimele 72 de ore</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/laliga-alvaro-morata-atletico-a-suferit-o-entorsa-la-genunchiul-drept_3229667.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:36
                    </span>
                                            <div class="tabbed-news__list-item__title">LaLiga: Alvaro Morata (Atletico) a suferit o entorsă la genunchiul drept</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/senate-president-official-visit-to-spain-next-week_3229687.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:35
                    </span>
                                            <div class="tabbed-news__list-item__title">Senate president, official visit to Spain next week</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/sarmiza-andronic-diana-osoaca-a-trecut-la-urmatorul-nivel-nu-se-mai-cearta-cu-asupritorii-poporului-ci-si-cu-poporul_3229695.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:33
                    </span>
                                            <div class="tabbed-news__list-item__title">Sarmiza Andronic: Diana Șoșoacă a trecut la următorul nivel - nu se mai ceartă cu asupritorii poporului, ci și cu poporul!</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/ips-teodosie-se-leapada-de-mitingisti-si-anunta-ca-tine-aproape-de-patriarhul-daniel-unele-cercuri-bisericesti-vor-conflict_3229547.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:30
                    </span>
                                            <div class="tabbed-news__list-item__title">ÎPS Teodosie se leapădă de mitingiști și anunță că ține aproape de Patriarhul Daniel: Unele cercuri bisericești vor conflict</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/euro-trades-at-ron-49753_3229683.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:27
                    </span>
                                            <div class="tabbed-news__list-item__title">Euro trades at RON 4.9753</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/new-tezaur-securities-issue-with-up-to-675pct-per-annum-non-taxable-interest_3229655.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:23
                    </span>
                                            <div class="tabbed-news__list-item__title">New Tezaur securities issue, with up to 6.75pct per annum non-taxable interest</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/negocieri-privind-formarea-unui-guvern-in-pakistan-negocieri-intense-intre-nawaz-sharif-si-bilawal-bhutto-dupa-ce-adeptii-cu-imran-khan-au-castigat-alegerile_3229647.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:23
                    </span>
                                            <div class="tabbed-news__list-item__title">Negocieri privind formarea unui guvern în Pakistan. Negocieri intense între Nawaz Sharif și Bilawal Bhutto după ce adepții cu Imran Khan au câștigat alegerile</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/spectacolul-pterodactili-de-la-teatrul-excelsior-un-portret-al-unei-familii-americane-in-destramare-intr-o-interpretare-dinamica_3229659.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:23
                    </span>
                                            <div class="tabbed-news__list-item__title">Spectacolul Pterodactili de la Teatrul Excelsior, un portret al unei familii americane în destrămare, într-o interpretare dinamică</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/novak-djokovici-se-mentine-pe-primul-loc-in-clasamentul-atp-ce-pozitii-ocupa-jucatorii-romani_3229643.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:23
                    </span>
                                            <div class="tabbed-news__list-item__title">Novak Djokovici se menţine pe primul loc în clasamentul ATP -Ce poziţii ocupă jucătorii români</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/romania-under-17-a-invins-republica-moldova-scor-2-0-in-cel-de-al-doilea-meci-de-pregatire_3229635.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:22
                    </span>
                                            <div class="tabbed-news__list-item__title">România Under 17 a învins Republica Moldova, scor 2-0, în cel de-al doilea meci de pregătire</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/hidrologii-avertizeaza-asupra-riscului-de-inundatii-cu-posibile-depasiri-ale-cotelor-de-aparare-pentru-rauri-din-13-bazine-hidrografice_3229651.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:22
                    </span>
                                            <div class="tabbed-news__list-item__title">Hidrologii avertizează asupra riscului de inundaţii, cu posibile depăşiri ale cotelor de apărare, pentru râuri din 13 bazine hidrografice</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/josep-borell-reactioneaza-dupa-declaratiile-lui-donald-trump-nato-nu-poate-depinde-de-capriciile-presedintelui-sua_3229375.html">
                    <span class="tabbed-news__list-item__time">
                        <svg class="tabbed-news__list-item__arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#AF2D32"/>
                                <path fill="#FFF" d="M5.04 10.045l2.794-2.51L5 4.99 6.102 4 10 7.5 6.102 11l-1.063-.955z"/>
                            </g>
                        </svg>

                        14:20
                    </span>
                                            <div class="tabbed-news__list-item__title">Josep Borell reacționează după declarațiile lui Donald Trump: NATO nu poate depinde de capriciile preşedintelui SUA</div>
                                    </a>
            </li>
            </ul>
    <ul id="mostReadLastSevenDays" class="tabbed-news__list tabbed-news__list--most-read-news tab tab--hidden">
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/klaus-iohannis-a-batut-cu-pumnul-in-masa-in-parlamentul-european-cere-deschiderea-urgenta-a-frontierelor-schengen-video_3224451.html">
                                            <div class="tabbed-news__list-item__title">Klaus Iohannis a bătut cu pumnul în masă în Parlamentul European: cere deschiderea urgentă a frontierelor Schengen/ Video </div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/descopeirea-care-schimba-perspectiva-asupra-imperiului-roman-romanii-ascundeau-semintele-de-gaina-n_3227355.html">
                                            <div class="tabbed-news__list-item__title">Descoperirea care schimbă perspectiva asupra Imperiului Roman: romanii ascundeau semințele de Găină Neagră în oase</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/momentul-asteptat-de-catre-toti-pensionarii-ordinul-a-fost-trimis-catre-casele-de-pensii-din-toata-tara_3225395.html">
                                            <div class="tabbed-news__list-item__title">Momentul așteptat de către toți pensionarii: ordinul a fost trimis către Casele de Pensii din toată țara </div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/capcana-din-noua-lege-a-pensiilor-cine-sunt-pensionarii-carora-nu-le-va-creste-pensia-de-la-1-septembrie-si-ulterior-vor-rata-indexarile_3227047.html">
                                            <div class="tabbed-news__list-item__title">'Capcana' din noua Lege a Pensiilor: Cine sunt pensionarii cărora NU le va crește pensia de la 1 septembrie și ulterior vor 'rata' indexările</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/pensia-minima-1-septembrie-crestere_3221535.html">
                                            <div class="tabbed-news__list-item__title">Anunțul așteptat de mulți pensionari: s-au făcut calculele, iar de la 1 septembrie crește spectaculos pensia minimă</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/vesti-proaste-de-la-meteorologi-zapada-si-vreme-rea-de-paste-si-1-mai-accuweather_3223059.html">
                                            <div class="tabbed-news__list-item__title">Vesti proaste de la meteorologi: ninsorile lovesc în România de Paște și 1 Mai</div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/germania-face-cel-mai-sumbru-anunt-pentru-ucraina-s-a-atins-limita-posibilului_3225063.html">
                                            <div class="tabbed-news__list-item__title">Germania face cel mai sumbru anunț pentru Ucraina: 'S-a atins limita posibilului' </div>
                                    </a>
            </li>
                    <li class="tabbed-news__list-item">
                <a href="https://www.stiripesurse.ro/schimbare-de-strategie-generalii-rusi-au-comandat-bombardarea-masiva-a-complexului-militar-industri_3224971.html">
                                            <div class="tabbed-news__list-item__title">Schimbare de strategie: Generalii ruși au ordonat bombardarea masivă a complexului militar-industrial ucrainean</div>
                                    </a>
            </li>
            </ul>
</section>
    </div>

    
            <div class="widget">
            <!-- START NEW ADOCEAN CODES -->

            
            <div id="adoceanronlkqjuijlj"></div>
            <script type="text/plain" class="optanon-category-C0004">
            /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf 300x600 DART Sidebar After Ultimele Stiri */
            ado.slave('adoceanronlkqjuijlj', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
            </script>
            

            <!-- END NEW ADOCEAN CODES -->
        </div>
    
    

    
            <div class="widget">
            <div class="banner small">
                
            </div>
        </div>
    
    
    

    
    <div class="widget news-widget news-widget-color-1">
            <div class="news-widget-title">RECOMANDARI STIRIPESURSE</div>
<ul class="news-widget-list">
    	<li class="news-widget-item">
		<a href="https://www.stiripesurse.ro/descopeirea-care-schimba-perspectiva-asupra-imperiului-roman-romanii-ascundeau-semintele-de-gaina-n_3227355.html">
							<img alt="imperiul roman" src="https://media.stiripesurse.ro/image/202206/w100/media-165651049404930800.jpg" style="width: 100px; height: 56px; "  width="100" height="56" />
			
                            <div>Descoperirea care schimbă perspectiva asupra Imperiului Roman: romanii ascundeau semințele de Găină Neagră în oase</div>
                    </a>
	</li>
    	<li class="news-widget-item">
		<a href="https://www.stiripesurse.ro/tezaurul-din-villena-un-mister-care-a-uluit-cercetatorii-obiecte-fabricate-cu-material-din-afara-planetei-pamant_3226659.html">
							<img alt="" src="https://media.stiripesurse.ro/image/202402/w100/media-170745714241699400.png" style="width: 100px; height: 56px; "  width="100" height="56" />
			
                            <div>Tezaurul din Villena, un mister care a uluit cercetătorii: obiecte fabricate cu material din afara planetei Pământ</div>
                    </a>
	</li>
    	<li class="news-widget-item">
		<a href="https://www.stiripesurse.ro/025prc-din-pib-pentru-ucraina-miscarea-care-ar-putea-asigura-victoria-armatei-ucrainene_3226803.html">
							<img alt="Kaja Kallas" src="https://media.stiripesurse.ro/image/202205/w100/media-165289621108706300.jpg" style="width: 100px; height: 56px; "  width="100" height="56" />
			
                            <div>0,25% din PIB pentru Ucraina. `Mișcarea care ar putea asigura victoria armatei ucrainene`</div>
                    </a>
	</li>
    	<li class="news-widget-item">
		<a href="https://www.stiripesurse.ro/video-interviul-integral-al-lui-tucker-carlson-cu-vladimir-putin-tradus-in-romana_3226927.html">
							<img alt="Putin Tucker interviu" src="https://media.stiripesurse.ro/image/202402/w100/media-170745573454001100.jpg" style="width: 100px; height: 56px; "  width="100" height="56" />
			
                            <div>VIDEO | Interviul integral al lui Tucker Carlson cu Vladimir Putin, tradus în română</div>
                    </a>
	</li>
    </ul>
    </div>

    <div class="widget">
        
        <div id="ado-dXvmT5C50gOpASVkfEE_eKr5gqszvR5tM2dNA3oi5Vn.y7"></div>
        <script type="text/plain" class="optanon-category-C0004">
        /* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).unf 300x600 DNM Sidebar */
        ado.placement({id: 'ado-dXvmT5C50gOpASVkfEE_eKr5gqszvR5tM2dNA3oi5Vn.y7', server: 'ro.adocean.pl' });
        </script>
        
    </div>

            

        
    
    
    

    

    
    

    

    

    

            <div class="widget">
            <div class="banner small">
                
            </div>
        </div>
    
    
    

    

    
            

        

        

        
    
    

    
    
    
    <div class="widget">
        <div class="js-alternating-banners">
            <div class="alternating-banner hidden">
                <iframe width="300" height="250" src="https://media.stiripesurse.ro/assets/img/ads_img/phoenix-media-loop/skipad/300x250/index.html?v=2" frameborder="0"></iframe>
            </div>
            <div class="alternating-banner hidden">
                <iframe width="300" height="250" src="https://media.stiripesurse.ro/assets/img/ads_img/phoenix-media-loop/boti/300x250/index.html?v=2" frameborder="0"></iframe>
            </div>
            <div class="alternating-banner hidden">
                <iframe width="300" height="250" src="https://media.stiripesurse.ro/assets/img/ads_img/phoenix-media-loop/ad-block/300x250/index.html?v=2" frameborder="0"></iframe>
            </div>
        </div>
    </div>

    
    
    <div class="widget">
        <a href="https://www.stiripesurse.ro/arhiva">
            <h3 class="archive-title">ARHIVA</h3>
        </a>
    </div>

    <div class="widget news-widget news-widget-color-1 banner-request">
                    <div class="news-widget-title">Campanii publicitare</div>
                <ul class="news-widget-list">
            <a href="https://www.somasocial.com/" target="_blank">
                <div class="banner-request__button">Comandati acum</div>
            </a>
            <p class="banner-request__text">O campanie publicitara pe stiripesurse.ro!</p>
            <ul class="banner-request__options">
                <li>Formate standard si speciale</li>
                <li>Date demografice detaliate</li>
                <li>Targetare geografica si orara</li>
                <li>Advertoriale si product placement</li>
            </ul>
            <a href="https://www.somasocial.com/" target="_blank">
                <img src="https://media.stiripesurse.ro/assets/img/ads_img/banner-request-logo.jpg" alt="sales banner" class="banner-request__logo" width="90" height="30"/>
            </a>
        </ul>
    </div>

    

    

    <div class="widget">
        <a href="https://ccir.ro/event/incoterms-2020-noutati-provocari-si-oportunitati-20/" target="_blank">
            <img src="https://media.stiripesurse.ro/assets/img/ads_img/ccir-2024-02-01.webp" alt=""/>
        </a>
    </div>

    <div class="widget">
        <a href="https://www.stiripesurse.ro/tag/verdict-politic/">
            <div class="verdict-politic__all-videos">
                <header class="verdict-politic__header">
                    EXCLUSIV STIRIPESURSE.RO
                </header>
                <img class="verdict-politic__image" src="https://media.stiripesurse.ro/assets/img/verdict-politic-cover.jpg?v=2" alt="" width="300" height="200"/>
                <span class="verdict-politic__all-videos-link">Vezi toate episoadele</span>
            </div>
            
        </a>
    </div>

    </aside>

		
        	</section><!--end main-->

			
		<div style="clear: both; /* display: flex; justify-content: center; */">
			<div id="ado-MhQ2cecqgqCVG8.IiHE3ZIWYXcMdlsdH_WMIi29pD0f.r7"></div>
			<script type="text/plain" class="optanon-category-C0004">
			/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).unf 970x250 DNM Bottom */
			ado.placement({id: 'ado-MhQ2cecqgqCVG8.IiHE3ZIWYXcMdlsdH_WMIi29pD0f.r7', server: 'ro.adocean.pl' });
			</script>
		</div>
		
	
	<div
		class="giant-modal giant-modal--fb-like giant-modal--hidden"
		data-cookie-name="sps_like_box"
		data-cookie-days="30">
		<div class="giant-modal__left">
			<div class="giant-modal__left__text">
				<p>Fii la curent cu cele mai noi stiri.</p>
				<img src="https://media.stiripesurse.ro/assets/img/like-box-modal/giant-s.png" alt="" width="219" height="153"/>
				<p>Urmărește stiripesurse.ro pe Facebook</p>
			</div>
			<div class="giant-modal__arrow"></div>
		</div>
		<div class="giant-modal__like-box">
							<div class="fb-page" data-href="https://www.facebook.com/stiripesurse.ro/?fref=ts" data-width="230" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/stiripesurse.ro/?fref=ts"><a href="https://www.facebook.com/stiripesurse.ro/?fref=ts">stiripesurse.ro</a></blockquote></div></div>
					</div>
		<div class="giant-modal__close">&times;</div>
	</div>

	
	<div class="newsletter-container">
	<div class="newsletter-tag">NEWSLETTER <span class="newsletter-hide"> &times; </span></div>
	<form class="newsletter-form" methor="POST" action="">
		<div class="newsletter-message"></div>
		
		<p>
			<input type="text" class="newsletter-email" name="email" placeholder="adresa ta de mail"/>
			<input type="submit" class="newsletter-submit" value="Adaugă!"/>
		</p>

		<p>
			<input type="checkbox" value="1" name="email_consent" class="newsletter-consent-checkbox"/>
			<label for="email" class="newsletter-consent-label">Am citit și sunt de acord cu <br/><a href="https://www.stiripesurse.ro/politica-de-confidentialitate/" target="_blank">Politică de confidențialitate</a></label>
		</p>

		<div class="g-recaptcha" data-sitekey="6Lfm7lsUAAAAAAoV949ztWuseWa6aJ4MiSurahq8"></div>
	</form>
</div>

						
	<footer>
	<button class="back-to-top">BACK TO TOP</button>

	<div class="footer-columns container_16">
		<div class="footer-column ld-one-third">
			<div class="footer-title">DESPRE</div>
			<p style="text-align: justify;">Exclusivități și documente incendiare.</p>
			<p style="text-align: justify;">Echipa<strong> stiripesurse.ro</strong> vă prezintă ştirile din spatele ştirilor.</p>
			<p style="text-align: justify;"></p>
			<div class="footer__sati">
				<div class="footer-title">DATE DE AUDIENTA</div>
				<a href="https://www.brat.ro/sati/site/stiripesurse-ro/trafic-total/" target="_blank">
					<img src="https://media.stiripesurse.ro/assets/img/brat_sati.png" alt="footer sati" width="148" height="101"/>
				</a>
			</div>
		</div>
		
		

		<div class="footer-column ld-one-third">
			<div class="footer-title">ARTICOLE RECENTE</div>
			<ul>
				     		        	 
		        		<li class="recent-post-item">
			        		<a href="https://www.stiripesurse.ro/minister-intotero-there-is-still-a-lot-to-do-in-romania-in-terms-of-equality-of-opportunity_3229731.html">
				        		<span class="footer-article-title">Minister Intotero: There is still a lot to do in Romania in terms of equality of opportunity</span>
			        		</a>
		        		</li>
                     		        	 
		        		<li class="recent-post-item">
			        		<a href="https://www.stiripesurse.ro/marcel-ciolacu-negociaza-la-guvern-proiectul-urias-care-poate-schimba-fata-romaniei_3229723.html">
				        		<span class="footer-article-title">Marcel Ciolacu negociază la Guvern proiectul uriaș care poate schimba fața României </span>
			        		</a>
		        		</li>
                     		        	 
		        		<li class="recent-post-item">
			        		<a href="https://www.stiripesurse.ro/iubita-unuia-dintre-suspectii-in-crima-de-la-padina-rupe-tacerea-afirmatii-sub-protectia-anonimatului-pentru-ca-se-teme-pentru-viata-ei_3229703.html">
				        		<span class="footer-article-title">Iubita unuia dintre suspecţii în crima de la Padina rupe tăcerea. Afirmații sub protecția anonimatului pentru că se teme pentru viața ei</span>
			        		</a>
		        		</li>
                		      </ul>
	    </div>

		<div class="footer-column ld-one-third">
			<div class="footer-title">TAGS</div>
			<div class="post_tags">
                            <a href='https://www.stiripesurse.ro/tag/rusia' class='tag'>Rusia</a>
                            <a href='https://www.stiripesurse.ro/tag/' class='tag'></a>
                            <a href='https://www.stiripesurse.ro/tag/ucraina' class='tag'>Ucraina</a>
                            <a href='https://www.stiripesurse.ro/tag/marcel-ciolacu' class='tag'>marcel ciolacu</a>
                            <a href='https://www.stiripesurse.ro/tag/romania' class='tag'>romania</a>
                            <a href='https://www.stiripesurse.ro/tag/pnl' class='tag'>PNL</a>
                            <a href='https://www.stiripesurse.ro/tag/psd' class='tag'>PSD</a>
                            <a href='https://www.stiripesurse.ro/tag/sua' class='tag'>SUA</a>
                            <a href='https://www.stiripesurse.ro/tag/razboi' class='tag'>razboi</a>
                            <a href='https://www.stiripesurse.ro/tag/israel' class='tag'>israel</a>
                        </div>		
        </div>

        <div class="terms">
        	<a href="https://www.stiripesurse.ro/termeni-si-conditii/">Termeni si Conditii</a>
            <a href="https://www.stiripesurse.ro/politica-de-confidentialitate/"> | Politica de confidentialitate</a>
            <a href="https://www.stiripesurse.ro/cookie-policy/"> | Politica cookie-uri</a>
            <a href="https://sales.somasocial.com/" target="_blank"> | Publicitate</a>
        	<a href="https://www.stiripesurse.ro/contact/"> | CONTACT</a>
            <a id="ot-sdk-btn" class="optanon-toggle-display" style="cursor: pointer;"> | Modifică Setările</a>
        </div>
	</div>
	
	<div class="bottom-line">
		<span class="copyright-text">Copyright &copy; 2013-2019 www.stiripesurse.ro</span>

		<div class="copyright_right"> Proudly powered by <a href="http://somasocial.com/" target="_blank">
			<img src="https://media.stiripesurse.ro/assets/img/SOMA.png" alt="" width="100" height="33"/></a>
		</div>

		<div class="footer-socials">
			<a href="https://www.facebook.com/pages/stiripesursero/679218552100812" target="_blank"><div class="footer-social"></div></a>
			<a href="https://twitter.com/stiripesurse_ro" target="_blank"><div class="footer-social"></div></a>
		</div>
	</div>
</footer>

	
			<!-- START OLD ADOCEAN CODES -->
		

		<!-- END OLD ADOCEAN CODES -->

		<!-- START NEW ADOCEAN CODES -->

		
		<div id="adoceanroxminqomsfz"></div>
		<script type="text/plain" class="optanon-category-C0004">
		/* (c)AdOcean 2003-2023, SomaSocial_ro.stiripesurse.ro (new).Desktop Article DART.unf 960x100 DART Footer */
		ado.slave('adoceanroxminqomsfz', {myMaster: '.Lz1y.BwjbeP9iqhVg.Y33BWjN_.N5BbmZfv32t4X8L.07' });
		</script>
		

		<!-- END NEW ADOCEAN CODES -->
	
			<div id="modal-bg"></div>
<div class="like-box-dialog">
	<span id="close-dialog"></span>
	<p class="like-box-message">Nu uitaţi să daţi "Like". În felul acesta nu veţi rata cele mai importante ştiri.</p>
	<div class="like-box-wrapper">
		<div class="fb-like-box" data-href="https://www.facebook.com/pages/stiripesursero/679218552100812" data-colorscheme="light" data-show-faces="true" data-width="393" data-header="true" data-stream="false" data-show-border="false"></div>
	</div>
</div>
	
			<div class="social-icons--mobile">
			<a target="_blank" href="https://www.facebook.com/dialog/share?app_id=460603584065574&display=popup&href=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html&redirect_uri=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html">
				<div class="social-icon social-icon--mobile social-icon--facebook">
					<i class="icon--facebook"></i>
				</div>
			</a>

			<a target="_blank" href="https://twitter.com/intent/tweet?text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură&url=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html">
				<div class="social-icon social-icon--mobile social-icon--twitter">
					<i class="icon--twitter"></i>
				</div>
			</a>

			<a target="_blank" href="https://news.google.com/publications/CAAiEKLyXCvWu0Z-UresCyw9pr4qFAgKIhCi8lwr1rtGflK3rAssPaa-?hl=ro&gl=RO&ceid=RO%3Aro">
				<div class="social-icon social-icon--mobile social-icon--gplus">
					<img src="https://media.stiripesurse.ro/assets/img/google-news-button-mobile.webp" alt="" width="56" height="56"/>
				</div>
			</a>

			<a href="whatsapp://send?text=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură%20https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html" data-action="share/whatsapp/share">
				<div class="social-icon social-icon--mobile social-icon--whatsapp">
					<i class="icon--whatsapp"></i>
				</div>
			</a>

			<div class="social-icon social-icon--more social-icon--mobile social-icon--share">
				<i class="icon--share"></i>
			</div>

			<div class="social-icons--mobile__hidden-icons">
				<a href="mailto:?&subject=Ti-a fost recomandat Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură&body=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a...%0A%0ACiteste%20continuarea%20articolului%20pe%20stiripesurse.ro%0Ahttps://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html">
					<div class="social-icon social-icon--mobile social-icon--email">
						<i class="icon--email"></i>
					</div>
				</a>

				<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.stiripesurse.ro/dacian-ciolos-vinovat-de-protestele-fermierilor---mihai-tudose-spune-ce-a-facut-fostul-comisar-european-pentru-agricultura_3227807.html&title=Dacian Cioloș, vinovat de protestele fermierilor - Mihai Tudose spune ce a făcut fostul comisar european pentru agricultură&summary=&source=">
					<div class="social-icon social-icon--mobile social-icon--linkedin">
						<i class="icon--linkedin"></i>
					</div>
				</a>
			</div>
		</div>
	
	

	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>

	

	<script src='https://media.stiripesurse.ro/assets/js/dist.js?ver=4.0.183'></script>
	<script src='https://media.stiripesurse.ro/assets/js/smart-app-banner.js'></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.6/mobile-detect.min.js"></script>

	
		<script type="text/javascript">
			jQuery(function(){
				// if (navigator.cookieEnabled === true)
				// {
				// 	if (document.cookie.indexOf("visited") == -1)
				// 	{
				// 		jQuery('body').prepend('<div id="cookie"><div><div id="cookie-text">stiripesurse.ro foloseste cookie-uri proprii şi ale terţilor. Continuarea navigarii implică acceptarea lor. <a href="/cookie-policy/">Află mai multe</a></div><div id="cookieclose">&times;</div></div></div>');
				// 		jQuery('head').append('<style type="text/css">#cookie a {text-decoration:underline;color: #000;} #cookie {overflow: hidden; color: #383838; padding: 5px;font-family: helvetica, arial;font-size:10px;text-align: left; position:relative; width:100%;background:#fdfdfd;z-index:100000;border-bottom:1px solid #949596;}#cookieclose{font-size: 39px;float: left;cursor: pointer;width: 10%;height: 30px;color: #39c;text-align: center;line-height: 30px;}#cookie-text{float: left;width: 89%;margin-right: 1%;border-right: 1px solid #aaa;}@media only screen and (min-width:600px) { #cookie {padding:0;border:0;background: #f6f7f8;} #cookie > div {width:47%;margin:0 auto;} #cookie-text{width:85%;border:0;} #cookieclose{font-size:24px;width:auto;height:17px;line-height:17px;}}</style>');
				// 		jQuery('#cookie').show("fast");
				// 		jQuery('#cookieclose').click(function() {
				// 			jQuery('#cookie').hide("fast");
				// 			document.cookie="visited=yes; max-age=1814400; path=/";
				// 		});
				// 	}
				// }

				new SmartBanner({
					daysHidden: 15,
					daysReminder: 90,
					appStoreLanguage: 'us',
					title: 'Stiripesurse.ro',
					author: 'Soma Social',
					button: 'DESCARCA',
					store: {
					  ios: 'On the App Store',
					  android: 'In Google Play',
					  windows: 'In Windows store'
					},
					price: {
						ios: 'FREE',
						android: 'FREE',
						windows: 'FREE'
					}
				});
			});
		</script>

		<!--[if (gte IE 6)&(lte IE 8)]>
			<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
		<![endif]-->

		<!--[if lte IE 8]>
		<script type="text/javascript">
			$(document).ready(function(){
				if(!Modernizr.input.placeholder){
					$('[placeholder]').focus(function() {
					  var input = $(this);
					  if (input.val() == input.attr('placeholder')) {
						input.val('');
						input.removeClass('placeholder');
					  }
					}).blur(function() {
					  var input = $(this);
					  if (input.val() == '' || input.val() == input.attr('placeholder')) {
						input.addClass('placeholder');
						input.val(input.attr('placeholder'));
					  }
					}).blur();

					$('[placeholder]').parents('form').submit(function() {
					  $(this).find('[placeholder]').each(function() {
						var input = $(this);
						if (input.val() == input.attr('placeholder')) {
						  input.val('');
						}
					  })
					});
				}
			});
		</script>
		<![endif]-->
	

	

	
		<script type="text/plain" class="ad-code taboola-for-subscribers">
			window._taboola = window._taboola || [];
			_taboola.push({flush: true});
		</script>
	

	
		<script type="text/plain" class="optanon-category-C0004">
			window.addEventListener('load', function (event) {
				// ONE SIGNAL SUBSCRIPTION INIT
			    function onManageWebPushSubscriptionButtonClicked(event) {
			    	setWebPushButtonPendingState(buttonSelector);
			        getSubscriptionState().then(function(state) {
			            if (state.isPushEnabled) {
			                /* Subscribed, opt them out */
			                OneSignal.setSubscription(false).then(function (response) {
	                			updateMangeWebPushSubscriptionButton(buttonSelector);
			                });
			            } else {
			                if (state.isOptedOut) {
			                    /* Opted out, opt them back in */
			                    OneSignal.setSubscription(true).then(function (response) {
									updateMangeWebPushSubscriptionButton(buttonSelector);
			                    });
			                } else {
			                    /* Unsubscribed, subscribe them */
			                    OneSignal.registerForPushNotifications();
			                }
			            }
			        });
			        event.preventDefault();
			    }

			    function updateMangeWebPushSubscriptionButton(buttonSelector) {
			        var hideWhenSubscribed = false;
			        var subscribeText = "ACTIVEAZĂ NOTIFICĂRILE";
			        var unsubscribeText = "DEZACTIVEAZĂ NOTIFICĂRILE";
			        var subscribedStatus = "activate";
			        var unsubscribedStatus = "dezactivate";
			        var subscribedButtonClass = 'onesignal-notif-button--inactive';

			        getSubscriptionState().then(function(state) {
			        	console.log('Onesignal State', state);
			            var isSubscribed = !state.isPushEnabled || state.isOptedOut ? false : true;
			            var buttonText = !state.isPushEnabled || state.isOptedOut ? subscribeText : unsubscribeText;
			            var statusText = !state.isPushEnabled || state.isOptedOut ? unsubscribedStatus : subscribedStatus;

			            var buttons = document.querySelectorAll(buttonSelector);
			            var statusElement = document.querySelector(statusSelector);

			            if (buttons.length == 0) {
			                return;
			            }

			            for (var i = buttons.length - 1; i >= 0; i--) {
	            			buttons[i].removeEventListener('click', onManageWebPushSubscriptionButtonClicked);
				            buttons[i].addEventListener('click', onManageWebPushSubscriptionButtonClicked);
				            buttons[i].removeEventListener('touchstart', onManageWebPushSubscriptionButtonClicked);
				            buttons[i].addEventListener('touchstart', onManageWebPushSubscriptionButtonClicked);
				            buttons[i].textContent = buttonText;

				            if (isSubscribed) {
				            	buttons[i].classList.add(subscribedButtonClass);
				            } else {
				            	buttons[i].classList.remove(subscribedButtonClass);
				            }

				            if (state.hideWhenSubscribed && state.isPushEnabled) {
				                buttons[i].style.display = "none";
				            } else {
				                buttons[i].style.display = "";
				            }
			            }

			            if (statusElement !== null) {
			            	statusElement.textContent = statusText;
			        	}
			        });
			    }

			    function setWebPushButtonPendingState(buttonSelector) {
			    	var buttons = document.querySelectorAll(buttonSelector);
			    	for (var i = buttons.length - 1; i >= 0; i--) {
			            buttons[i].textContent = 'SE INCARCA...';
			        }
			    }

			    function getSubscriptionState() {
			        return Promise.all([
			          OneSignal.isPushNotificationsEnabled(),
			          OneSignal.isOptedOut()
			        ]).then(function(result) {
			            var isPushEnabled = result[0];
			            var isOptedOut = result[1];

			            return {
			                isPushEnabled: isPushEnabled,
			                isOptedOut: isOptedOut
			            };
			        });
			    }

			    var OneSignal = window.OneSignal || [];
			    var buttonSelector = ".onesignal-notif-button";
			    var statusSelector = ".notif-status";

			    setWebPushButtonPendingState(buttonSelector);
			    /* This example assumes you've already initialized OneSignal */
			    OneSignal.push(function() {
			    	console.log('OneSignal init');
			        // If we're on an unsupported browser, do nothing
			        if (!OneSignal.isPushNotificationsSupported()) {
			            return;
			        }

			        updateMangeWebPushSubscriptionButton(buttonSelector);
			        OneSignal.on("subscriptionChange", function (isSubscribed) {
			        	console.log('OneSignal subscription:', isSubscribed);
			            /* If the user's subscription state changes during the page's session, update the button text */
			            updateMangeWebPushSubscriptionButton(buttonSelector);
			        });
			    });
			});
	    </script>
	

	

    
    
    <script type="text/plain" class="optanon-category-C0002">
        cX.callQueue.push(['invoke', function () {
            console.log(document.getElementById('AdSense').clientHeight);
            let isAdBlockDetected = !document.getElementById('AdSense').clientHeight ? 'Yes' : 'No';
            console.log('HasAdBlock : ' + isAdBlockDetected);
            cX.setEventAttributes({origin: 'brt-adblock', persistedQueryId: 'fcadb0c22bec63a3e94af5a65644fc6b869880e0'});
            cX.sendEvent('adBlockerDetection', {adBlockerDetected: isAdBlockDetected});
            document.getElementById('status').innerHTML = isAdBlockDetected;
        }]);
    </script>
    

    
    <script>
    	window.addEventListener('load', function () {
    		if (window.hasOwnProperty('__tcfapi')) {
				window.__tcfapi('addEventListener', 2, function (tcData, listenerSuccess) {
					console.log(tcData, listenerSuccess);
				});
			}
    	});
    </script>
    

    
    <script type="text/plain" class="optanon-category-C0002">
		window.teads_analytics = window.teads_analytics || {};
		window.teads_analytics.analytics_tag_id = "PUB_16825";
		window.teads_analytics.share = window.teads_analytics.share || function() {
			;(window.teads_analytics.shared_data = window.teads_analytics.shared_data || []).push(arguments)
		};
	</script>
	<script type="text/plain" class="optanon-category-C0002" async src="https://a.teads.tv/analytics/tag.js"></script>
    

    
    <script>
    	window.addEventListener('load', function () {
    		Array.from(document.querySelectorAll('.js-copy-link')).forEach(function (button) {
				button.addEventListener('click', function (e) {
					e.preventDefault();

					const link = button.href;
					navigator.clipboard.writeText(link);

					button.classList.remove('fa-link');
					button.classList.add('fa-check');
					setTimeout(function () {
						button.classList.add('fa-link');
						button.classList.remove('fa-check');
					}, 3000);
				});
    		});
    	});
    </script>
    

    
	    <script type="text/plain" class="optanon-category-C0004">
			var unblockiaScript = document.createElement('script');
			unblockiaScript.src = 'https://cdn.unblockia.com/h.js';
			unblockiaScript.async = true;
			document.head.appendChild(unblockiaScript);
		</script>
    

	
		<script>
			window.addEventListener('load', function () {
				const teadsScriptElements = Array.from(document.querySelectorAll('.teads'));
				const adScriptElements = Array.from(document.querySelectorAll('.ad-code'));

				runAdForUnsubscribedUser(() => {
					console.log('Running Teads');

					teadsScriptElements.forEach(function (teadsScriptElement) {
						const newTeadsScriptElement = teadsScriptElement.cloneNode();

						newTeadsScriptElement.type = 'text/javascript';

						teadsScriptElement.after(newTeadsScriptElement);
						teadsScriptElement.remove();
					});
				});

				runAdForUnsubscribedUser(() => {
					console.log('Running Ad codes');

					adScriptElements.forEach(function (adScriptElement) {
						const newAdScriptElement = adScriptElement.cloneNode(true);

						newAdScriptElement.type = 'text/javascript';

						adScriptElement.after(newAdScriptElement);
						adScriptElement.remove();
					});
				}, () => {
					console.log('Running code for subscribers');

					const taboolaCodes = Array.from(document.querySelectorAll('.taboola-for-subscribers'));

					taboolaCodes.forEach(function (taboolaCode) {
						const newTaboolaCode = taboolaCode.cloneNode(true);

						newTaboolaCode.type = 'text/javascript';

						taboolaCode.after(newTaboolaCode);
						taboolaCode.remove();
					});

					const newsReaderElement = document.querySelector('.news-reader');

					if (newsReaderElement) {
						newsReaderElement.style.display = 'none';
					}

					const hideForSubscribed = Array.from(document.querySelectorAll('.hide-for-subscribed'));

					hideForSubscribed.forEach(function (elementToHide) {
						elementToHide.style.display = 'none';
					});

					const pelcroSubscriptionButtons = Array.from(document.querySelectorAll('.pelcro-subscribe-button'));

					pelcroSubscriptionButtons.forEach(function (button) {
						button.innerText = 'Schimbă Abonament';
					});
				});
			});
		</script>
	
</body>
</html>
