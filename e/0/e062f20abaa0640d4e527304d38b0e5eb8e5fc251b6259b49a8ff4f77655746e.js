bc_json237({"recommendationBlock":[],"trackingPixel":""})="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="apple-touch-icon" sizes="57x57" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-16x16.png">
	<meta name="msapplication-TileImage" content="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<meta name="theme-color" content="#ffffff">

	<meta name="p:domain_verify" content="d01ad36f4033677a2e4883eee1a13af1"/>
	<meta property="fb:pages" content="15779440092" />
	<meta name="google-site-verification" content="0p9SDHXWowdbrg4wkf-aR1ejmq4mTT8io_fKCQrRjg0" />

		<script>
	window.tude = window.tude || { cmd: [] }; window.tude.cmd = window.tude.cmd || [];
	window.googletag = window.googletag || { cmd: [] }; window.googletag.cmd = window.googletag.cmd || [];
	</script>
	<!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script type="text/javascript" async="true">
(function() {
	var host = window.location.hostname;
	var element = document.createElement('script');
	var firstScript = document.getElementsByTagName('script')[0];
	var url = 'https://cmp.quantcast.com'
		.concat('/choice/', 'GANCBjEfRH5Fe', '/', host, '/choice.js?tag_version=V2');
	var uspTries = 0;
	var uspTriesLimit = 3;
	element.async = true;
	element.type = 'text/javascript';
	element.src = url;

	firstScript.parentNode.insertBefore(element, firstScript);

	function makeStub() {
		var TCF_LOCATOR_NAME = '__tcfapiLocator';
		var queue = [];
		var win = window;
		var cmpFrame;

		function addFrame() {
			var doc = win.document;
			var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

			if (!otherCMP) {
				if (doc.body) {
					var iframe = doc.createElement('iframe');

					iframe.style.cssText = 'display:none';
					iframe.name = TCF_LOCATOR_NAME;
					doc.body.appendChild(iframe);
				} else {
					setTimeout(addFrame, 5);
				}
			}
			return !otherCMP;
		}

		function tcfAPIHandler() {
			var gdprApplies;
			var args = arguments;

			if (!args.length) {
				return queue;
			} else if (args[0] === 'setGdprApplies') {
				if (
					args.length > 3 &&
					args[2] === 2 &&
					typeof args[3] === 'boolean'
				) {
					gdprApplies = args[3];
					if (typeof args[2] === 'function') {
						args[2]('set', true);
					}
				}
			} else if (args[0] === 'ping') {
				var retr = {
					gdprApplies: gdprApplies,
					cmpLoaded: false,
					cmpStatus: 'stub'
				};

				if (typeof args[2] === 'function') {
					args[2](retr);
				}
			} else {
				if(args[0] === 'init' && typeof args[3] === 'object') {
					args[3] = Object.assign(args[3], { tag_version: 'V2' });
				}
				queue.push(args);
			}
		}

		function postMessageEventHandler(event) {
			var msgIsString = typeof event.data === 'string';
			var json = {};

			try {
				if (msgIsString) {
					json = JSON.parse(event.data);
				} else {
					json = event.data;
				}
			} catch (ignore) {}

			var payload = json.__tcfapiCall;

			if (payload) {
				window.__tcfapi(
					payload.command,
					payload.version,
					function(retValue, success) {
						var returnMsg = {
							__tcfapiReturn: {
								returnValue: retValue,
								success: success,
								callId: payload.callId
							}
						};
						if (msgIsString) {
							returnMsg = JSON.stringify(returnMsg);
						}
						if (event && event.source && event.source.postMessage) {
							event.source.postMessage(returnMsg, '*');
						}
					},
					payload.parameter
				);
			}
		}

		while (win) {
			try {
				if (win.frames[TCF_LOCATOR_NAME]) {
					cmpFrame = win;
					break;
				}
			} catch (ignore) {}

			if (win === window.top) {
				break;
			}
			win = win.parent;
		}
		if (!cmpFrame) {
			addFrame();
			win.__tcfapi = tcfAPIHandler;
			win.addEventListener('message', postMessageEventHandler, false);
		}
	};

	makeStub();

	var uspStubFunction = function() {
		var arg = arguments;
		if (typeof window.__uspapi !== uspStubFunction) {
			setTimeout(function() {
				if (typeof window.__uspapi !== 'undefined') {
					window.__uspapi.apply(window.__uspapi, arg);
				}
			}, 500);
		}
	};

	var checkIfUspIsReady = function() {
		uspTries++;
		if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
			console.warn('USP is not accessible');
		} else {
			clearInterval(uspInterval);
		}
	};

	if (typeof window.__uspapi === 'undefined') {
		window.__uspapi = uspStubFunction;
		var uspInterval = setInterval(checkIfUspIsReady, 6000);
	}
})();
</script>
<!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
	<script defer src="https://cadmus.script.ac/d14pdm1b7fi5kh/script.js"></script>
		<script data-cfasync="false" type="text/javascript">(function (a, c, s, u){'Insticator'in a || (a.Insticator={ad:{loadAd: function (b){Insticator.ad.q.push(b)}, q: []}, helper:{}, embed:{}, version: "4.0", q: [], load: function (t, o){Insticator.q.push({t: t, o: o})}}); var b=c.createElement(s); b.src=u; b.async=!0; var d=c.getElementsByTagName(s)[0]; d.parentNode.insertBefore(b, d)})(window, document, 'script', 'https://d3lcz8vpax4lo2.cloudfront.net/ads-code/0c41544c-29f9-4780-aec0-693eebfe42cf.js')</script>
	<script async type="text/javascript" src="https://product.instiengage.com/product-loader-code/0c41544c-29f9-4780-aec0-693eebfe42cf.js"></script>
	
	<title>Photos: World News, Current Events, Culture | National Review</title>
<meta name='robots' content='max-image-preview:large' />
<link rel='dns-prefetch' href='//www.nationalreview.com' />
<link rel='dns-prefetch' href='//a10.nationalreview.com' />
<link rel='dns-prefetch' href='//b-code.liadm.com' />
<link rel='dns-prefetch' href='//ak.sail-horizon.com' />
<link rel='dns-prefetch' href='//i0.wp.com' />
<link rel='dns-prefetch' href='//acdn.adnxs.com' />
<link rel='dns-prefetch' href='//ads.pubmatic.com' />
<link rel='dns-prefetch' href='//ads.rubiconproject.com' />
<link rel='dns-prefetch' href='//adservice.google.com' />
<link rel='dns-prefetch' href='//api.bounceexchange.com' />
<link rel='dns-prefetch' href='//as-sec.casalemedia.com' />
<link rel='dns-prefetch' href='//assets.bounceexchange.com' />
<link rel='dns-prefetch' href='//assets.revcontent.com' />
<link rel='dns-prefetch' href='//cdn.ampproject.org' />
<link rel='dns-prefetch' href='//connect.facebook.net' />
<link rel='dns-prefetch' href='//dsum.casalemedia.com' />
<link rel='dns-prefetch' href='//events.bouncex.net' />
<link rel='dns-prefetch' href='//googleads.g.doubleclick.net' />
<link rel='dns-prefetch' href='//ib.adnxs.com' />
<link rel='dns-prefetch' href='//jadserve.postrelease.com' />
<link rel='dns-prefetch' href='//media.msg.dotomi.com' />
<link rel='dns-prefetch' href='//pagead2.googlesyndication.com' />
<link rel='dns-prefetch' href='//perfads.bouncex.net' />
<link rel='dns-prefetch' href='//pixel.advertising.com' />
<link rel='dns-prefetch' href='//secure.adnxs.com' />
<link rel='dns-prefetch' href='//securepubads.g.doubleclick.net' />
<link rel='dns-prefetch' href='//stats.g.doubleclick.net' />
<link rel='dns-prefetch' href='//tpc.googlesyndication.com' />
<link rel='dns-prefetch' href='//trends.revcontent.com' />
<link rel='dns-prefetch' href='//www.facebook.com' />
<link rel='dns-prefetch' href='//www.google-analytics.com' />
<link rel='dns-prefetch' href='//www.google.com' />
<link rel='dns-prefetch' href='//www.googleadservices.com' />
<link rel='dns-prefetch' href='//www.googletagmanager.com' />
<link rel='dns-prefetch' href='//www.googletagservices.com' />
<link rel='preconnect' href='https://s0.wp.com' />
<link rel='preconnect' href='https://s1.wp.com' />
<link rel='preconnect' href='https://s2.wp.com' />
<link rel='preconnect' href='https://pixel.wp.com' />
<link rel="alternate" type="application/rss+xml" title="National Review &raquo; Feed" href="https://www.nationalreview.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="National Review &raquo; Comments Feed" href="https://www.nationalreview.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="National Review &raquo; Slideshows Feed" href="https://www.nationalreview.com/photos/feed/" />
<link rel="stylesheet" class="wp-asset-manager nr-fonts" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/css/fonts.min.css" media="print" onload="this.onload=null;this.media='all'" /><noscript><link rel="stylesheet" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/css/fonts.min.css" media="all" class="wp-asset-manager nr-fonts" /></noscript><link rel="stylesheet" class="wp-asset-manager nr-headless" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/css/app.min.css?ver=4d6557a97f2cfcbb96d6" media="print" onload="this.onload=null;this.media='all'" /><noscript><link rel="stylesheet" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/css/app.min.css?ver=4d6557a97f2cfcbb96d6" media="all" class="wp-asset-manager nr-headless" /></noscript><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/js/app.bundle.min.js?ver=07ad73c4bd2b467fcf04" class="wp-asset-manager nr-headless" as="script" media="all" type="text/javascript" /><link rel="preload" href="https://www.googletagservices.com/tag/js/gpt.js" class="wp-asset-manager dfp-gpt" as="script" media="all" type="text/javascript" /><link rel="preload" href="https://dn0qt3r0xannq.cloudfront.net/nr-y5lWQefcIT/default/prebid-load.js" class="wp-asset-manager prebid-load" as="script" media="all" type="text/javascript" /><link rel="preload" href="https://dn0qt3r0xannq.cloudfront.net/nr-y5lWQefcIT/default/prebid-library.js" class="wp-asset-manager prebid-library" as="script" media="all" type="text/javascript" /><link rel="preload" href="https://dn0qt3r0xannq.cloudfront.net/nr-y5lWQefcIT/default/prebid-wrapper.js" class="wp-asset-manager prebid-wrapper" as="script" media="all" type="text/javascript" /><meta name='description' content='View the latest photo essays and photo galleries covering world news, current events, politics, and culture.' /><!-- WP SEO -->
<link rel='stylesheet' id='debug-bar-searchpress-css' href='https://www.nationalreview.com/wp-content/mu-plugins/debug-bar-searchpress/css/debug-bar-searchpress.css?ver=1.0.1' type='text/css' media='all' />
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
	<script>
		var wpPageCacheControlSettings = {"provider":"PantheonProvider","registeredGroups":["logged_in"]};
	</script>
	<script type="text/javascript" id="wp-page-cache-control-js-extra">
/* <![CDATA[ */
var wpPageCacheControlSettings = {"provider":"PantheonProvider","registeredGroups":["logged_in"]};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.nationalreview.com/wp-content/plugins/wp-page-cache-control/build/global/index.js?ver=9865e1fee0914bd3912b" id="wp-page-cache-control-js"></script>
<script type="text/javascript" async src="https://a10.nationalreview.com/script.js" id="blueconic-js"></script>
<script type="text/javascript" defer src="https://b-code.liadm.com/a-0316.min.js" id="liveconnect-js"></script>
<script type="text/javascript" id="personalize_js-js-extra">
/* <![CDATA[ */
var tag = {"options":{"customerId":"535fb0fe1ac7fd1c16de558f4aec182e"}};
/* ]]> */
</script>
<script type="text/javascript" defer src="//ak.sail-horizon.com/spm/spm.v1.min.js?ver=6.4.2" id="personalize_js-js"></script>
<link rel="https://api.w.org/" href="https://www.nationalreview.com/wp-json/" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.nationalreview.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.2" />
<link rel="preload" href="https://www.nationalreview.com/wp-content/plugins/wp-page-cache-control/build/global/index.js?ver=9865e1fee0914bd3912b" as="script" />
<!-- Jetpack Open Graph Tags -->
<meta property="og:type" content="website" data-react-helmet="true" />
<meta property="og:title" content="Photos: World News, Current Events, Culture | National Review" data-react-helmet="true" />
<meta property="og:url" content="https://www.nationalreview.com/photos/" data-react-helmet="true" />
<meta property="og:site_name" content="National Review" data-react-helmet="true" />
<meta property="og:image" content="https://www.nationalreview.com/wp-content/themes/national-review/static/images/social.jpg" data-react-helmet="true" />
<meta property="og:image:secure_url" content="https://www.nationalreview.com/wp-content/themes/national-review/static/images/social.jpg" data-react-helmet="true" />
<meta property="og:image:alt" content="" data-react-helmet="true" />
<meta property="og:locale" content="en_US" data-react-helmet="true" />

<!-- End Jetpack Open Graph Tags -->
<link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/4e5d4cc69b32888efc81.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/a297aabfbf2b0f181329.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/f57a62e9efddf6ace18b.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/fb9fdde61d631c58d46c.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/92425c623934facef057.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/1666787ea3ff3941e764.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/624a5054a7b14c7a5521.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="https://www.nationalreview.com/wp-content/themes/national-review/client/build/1f49509f1d983ea16fe1.woff2" as="font" type="font/woff2" crossorigin="anonymous">	<script>
	window.nr_is_subscriber = false;
	window.nr_is_logged_in = window.nr_is_subscriber;

		</script>
	
	<!-- Set up the dataLayer. -->
	<script>
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({"loginStatus":""});
	</script>

			<!-- Start third party scripts -->
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-MCWKR6');</script>
		<!-- End Google Tag Manager -->
	
			<!-- Begin comScore Tag -->
		<script>
			var _comscore = _comscore || [];
			_comscore.push({ c1: '2', c2: "23390304" });
			(function(){
				var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el);
			})();
		</script>
		<noscript>
			<img src="https://sb.scorecardresearch.com/p?c1=2&c2=23390304&cv=2.0&cj=1" />
		</noscript>
		<script async type="text/javascript" src="https://sb.scorecardresearch.com/beacon.js"></script>
		<!-- End comScore Tag -->
	
	
			<!-- True Anthem -->
		<script>
			(function (w, d) {
			var s1 = d.getElementsByTagName('script')[0],
					s = d.createElement('script'),
					cid = '245';
			s.src = '//tru.am/scripts/ta-pagesocial-sdk.js';
			if (s.addEventListener) {
				s.addEventListener('load', function () {
					w.TRUE_ANTHEM.configure(cid);
				}, false);
			} else {
				s.onreadystatechange = function () {
					if (s.readyState in {loaded: 1, complete: 1}) {
					s.onreadystatechange = null;
					w.TRUE_ANTHEM.configure(cid);
					}
				};
			}
			s1.parentNode.insertBefore(s, s1);
			}(window, document));
		</script>
	
	<!-- Pinterest -->
	<meta name="p:domain_verify" content="d01ad36f4033677a2e4883eee1a13af1"/>

	<meta property="fb:pages" content="15779440092" />

	<!-- Facebook Pixel -->
	<script>
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '1626507807583041');
		fbq('track', 'PageView');
	</script>

	
	<!-- End third party scripts -->
				<script type="text/javascript">
				!(function(o,_name){o[_name]=o[_name]||function n(){(n.q=n.q||[]).push(arguments)},o[_name].v=o[_name].v||2;!(function(o,t,n,f,e,i){function c(f,e){(f=(function(t,n){try{if(n=(t=o.localStorage).getItem("_aQS01RTY2OEYxRjQ5NEZCNTYwNUFENUIzNDItMQ"))return JSON.parse(n).lgk||[];if((t.getItem("v4ac1eiZr0")||"").split(",")[4]>0)return[[_name+"-engaged","true"]]}catch(f){}})())&&typeof f.forEach===n&&(e=o[t].pubads())&&f.forEach((function(o){o&&o[0]&&e.setTargeting(o[0],o[1]||"")}))}(i=o[t]=o[t]||{}).cmd=i.cmd||[],typeof i.pubads===n?c():typeof i.cmd.unshift===n?i.cmd.unshift(c):i.cmd.push(c)})(window,"googletag","function");})(window,String.fromCharCode(97,100,109,105,114,97,108));!(function(t,n,c,i,o,a,r){!(function e(f,u,$,s){u=n.createElement(i),$=n.getElementsByTagName(i)[0],s=$.parentNode,u.async=1,u.src=f,u[o]&&u[o]("error",(function(i){s.removeChild(u),t++,i&&!i.isTrusted||t>2?(function(t,i,o){if(new(function(){t=(function h(e,t,r,n){if(!e||(function e(r,n,i,o){for(o=0;r&&o<r.length;o+=2)o>0&&(r[o+1]||[]).unshift(i),i=(n=t[r[o]])&&n(e,r[o+1]||[]);return i})(e))return r.apply(this,n||[])}([0,[[[1,[[3,[],2,["/subscribe"]]]],[1,[[3,[],2,["/donate"]]]],[1,[[3,[],2,["/subscribe-50-off"]]]],[1,[[5,["STYXKEY-logged_in"],4,["yes"]]]]]]],[function c(e,t){for(var r=t[0]&&t[0].length>0,n=0;r&&n<t[0].length;n++)r=e(t[0][n]);return r},function a(e,t){return!e(t[0])},function l(e,t,r,n){return r=t[0]||"",(n=t[1]||"")?0===r.indexOf(n):!!r},function p(e,t,r){return"/"+(document.location.pathname||"").replace(/^\/+|\/+$/,"")},function s(e,t){return t[0]===t[1]},function f(e,t,r){return(r=(document.cookie||"").match(new RegExp("(^|;\\s*)"+t[0]+"\\s*=\\s*([^;]+)")))?r[2]:void 0}],function(el,a,f,i,m){el=document.createElement("div");el.innerHTML="<style>.bOvWNQ{all:initial;position:fixed;top:0;right:0;bottom:0;left:0;font-family:'Source Sans Pro',Arial,'Helvetica';overflow:auto;background-color:rgba(255,255,255,1);z-index:2147483647;}.ghwPHX{width:100%;height:100%;max-width:740px;margin:0 auto;position:relative;padding-top:0;}.duogaR{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0 auto;height:100%;}.dzMDQR{display:inline-block;max-width:700px;width:100%;}.ingAWB{position:fixed;bottom:0;height:40px;width:100%;text-align:center;line-height:40px;font-size:13px;color:rgba(153,153,153,1);background-color:rgba(153,153,153,0.4);}.dfmDjJ{height:15px;vertical-align:middle;}.bBWhhG{text-align:left;box-sizing:border-box;margin:0 0 5px;font-size:24px;line-height:28px;font-weight:500;color:rgba(0,0,0,1);}.eGsdXc{box-sizing:border-box;text-align:left;margin-bottom:15px;font-size:14px;line-height:22px;font-weight:400;color:rgba(0,0,0,1);}.cPOkjL{display:inline-block;margin-right:5px;line-height:40px;}.fKMnlC{-webkit-text-decoration:none;text-decoration:none;color:rgba(153,153,153,1);}.iZDsHe{width:100%;height:33px;cursor:pointer;color:rgba(255,255,255,1);background-color:rgba(207,17,16,1);border:none;border-radius:3px;font-weight:700;margin-bottom:24px;}.cQCYKZ{cursor:pointer;background-color:rgba(255,255,255,1);color:rgba(182,182,182,1);border:none;font-weight:700;}</style><div class=\"bOvWNQ\"><div class=\"ghwPHX\"><div class=\"duogaR\"><div class=\"dzMDQR\"><h3 color=\"0,0,0,1\" class=\"bBWhhG\">Something went wrong. Please disable your blocker on National Review</h3><div color=\"0,0,0,1\" class=\"eGsdXc\">It looks like your blocker is attempting to interfere with the intended operation of this site. Help National Review provide the best conservative content available online by allowing our site to function as we intended. Click the red button for instructions.\n\n<br><br><b>\nFrequently Asked Questions \n</b><br><i>I'm not using a blocker. Why am I seeing this message?</i> <br> You're likely seeing this message because an app or extension on your computer is blocking ads. The app or extension may be called an adblocker, privacy blocker, or malware blocker. Add NationalReview.com to the allowlist of your blocking extension.<br> \n\n</b><br> <i>I disabled my blocker. Why am I still seeing this message?</i> <br> It's common to have two or more blocking extensions running at the same time. See the guidance above.<br><br>\n\n<i>I'm a subscriber. Why am I seeing this message?</i> <br>Please <a href=\"https://www.nationalreview.com/login\">LOGIN</a>.</div><button data-asfn-click-0 data-instructions-url=\"https://my.getadmiral.com/instructions\" color=\"255,255,255,1\" class=\"iZDsHe\">Show me how to disable my blocker</button><button data-asfn-click-2 color=\"182,182,182,1\" class=\"cQCYKZ\">I have disabled my blocker</button></div></div></div><div color=\"153,153,153,1\" class=\"ingAWB\"><span><span class=\"cPOkjL\">Need help? <a href=\"https://getadmiral.typeform.com/to/s8M2nY5H\" target=\"_blank\" color=\"153,153,153,1\" class=\"fKMnlC\">Contact support</a></span><span class=\"cPOkjL\">|</span></span><span class=\"cPOkjL\"><a href=\"https://getadmiral.com/pb/\" target=\"_blank\" color=\"153,153,153,1\" class=\"fKMnlC\"><span>We&apos;re using&nbsp;</span><img src=\"https://pubimgs.com/412d3545363638463146343934464235363035414435423334322d31_logo.svg\" class=\"dfmDjJ\"></img></a></span></div></div>";function onClose(){el.remove()}a='data-asfn-';f=["click",function(e){var t=e.currentTarget.getAttribute("data-instructions-url"),r=e.currentTarget.parentElement,n=document.createElement("iframe");n.src=t,n.style="margin: 36px 0 36px;outline: 0;border: 0;width: 100%;height: 400px;",r.replaceWith(n),window.addEventListener("message",(function e(t){var i=t.data,o=i.goBack,c=i.blockerDisabled;o?(n.replaceWith(r),window.removeEventListener("message",e)):c&&window.location.reload()}))},"click",onClose];for (i=0;i<f.length;i+=2){(m=el.querySelector('[data-asfn-'+f[i]+'-'+i+']'))&&m.addEventListener(f[i],f[i+1]);}document.body.appendChild(el);return {"candidates":[{"batchID":"648722433c416093ee9e7822","candidateID":"648722433c416093ee9e7821","groups":["purpose:failsafe"],"payload":{"container":"body","name":"Failsafe","options":{"attribution":true,"btnColor":"207,17,16,1","btnText":"I have disabled my blocker","btnTextColor":"255,255,255,1","continueTextColor":"182,182,182,1","footerBgColor":"153,153,153,0.4","footerTextColor":"153,153,153,1","headerBgColor":"255,255,255,1","headline":"Something went wrong. Please disable your blocker on National Review","instructionsActionText":"Show me how to disable my blocker","logoImageURL":"","logoLocation":"left","message":"It looks like your blocker is attempting to interfere with the intended operation of this site. Help National Review provide the best conservative content available online by allowing our site to function as we intended. Click the red button for instructions.\n\n<br><br><b>\nFrequently Asked Questions \n</b><br><i>I'm not using a blocker. Why am I seeing this message?</i> <br> You're likely seeing this message because an app or extension on your computer is blocking ads. The app or extension may be called an adblocker, privacy blocker, or malware blocker. Add NationalReview.com to the allowlist of your blocking extension.<br> \n\n</b><br> <i>I disabled my blocker. Why am I still seeing this message?</i> <br> It's common to have two or more blocking extensions running at the same time. See the guidance above.<br><br>\n\n<i>I'm a subscriber. Why am I seeing this message?</i> <br>Please <a href=\"https://www.nationalreview.com/login\">LOGIN</a>.","name":"Default Failsafe","showXButton":false,"supportLeaderText":"Need help?","supportLinkText":"Contact support","textBgColor":"255,255,255,1","textColor":"0,0,0,1","type":"gated"},"replace":false,"when":["and",[["not",["pre","path","/subscribe"]],["not",["pre","path","/donate"]],["not",["pre","path","/subscribe-50-off"]],["not",["eq","cookie:STYXKEY-logged_in","yes"]]]]},"payloadType":"template","triggers":[{"type":"adblockerDisabled"}],"tsUpdated":1694097453.9}]}},[]))}),!r++){i=c.sessionStorage;try{o=JSON.parse(i[a]).slice(-4)}catch(e){o=[]}o.push([Date.now(),{p:""+c.location,r:""+n.referrer,cs:t,t:1}]),i[a]=JSON.stringify(o)}})():e(t>1?"https://succeedscene.com/ads_30f3e256-31d8-4903-8005-68f875feb350/v2/ads.load.js":f)})),s.insertBefore(u,$)})("https://childlikecrowd.com/dist/3407b97d824/95a85abc6ad70947e8e8c56b7.index.js")})(0,document,window,"script","addEventListener","afsvisits");
			</script>
					<script type="application/ld+json" id="jsonld" data-react-helmet="true">
				{
    "@context": "http:\/\/schema.org",
    "@type": "WebPage",
    "headline": "",
    "url": "",
    "thumbnailUrl": "",
    "dateCreated": "",
    "datePublished": "",
    "dateModified": "",
    "articleSection": "",
    "creator": "",
    "author": "",
    "keywords": "",
    "metadata": [],
    "isAccessibleForFree": "",
    "hasPart": [],
    "publisher": [],
    "image": [],
    "mainEntityOfPage": ""
}			</script>
		<script type="text/javascript">var sailthru_vars = {"ajaxurl":"https:\/\/www.nationalreview.com\/wp-admin\/admin-ajax.php"}</script>      <meta name="onesignal" content="wordpress-plugin"/>
            <script>

      window.OneSignal = window.OneSignal || [];

      OneSignal.push( function() {
        OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
                      OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
                      OneSignal.SERVICE_WORKER_PARAM = { scope: "/" };
        OneSignal.setDefaultNotificationUrl("https://www.nationalreview.com");
        var oneSignal_options = {};
        window._oneSignalInitOptions = oneSignal_options;

        oneSignal_options['wordpress'] = true;
oneSignal_options['appId'] = '1398e2b0-b596-49ff-ac1e-101402b1a3d0';
oneSignal_options['allowLocalhostAsSecureOrigin'] = true;
oneSignal_options['welcomeNotification'] = { };
oneSignal_options['welcomeNotification']['title'] = "National Review";
oneSignal_options['welcomeNotification']['message'] = "Thanks for subscribing!";
oneSignal_options['welcomeNotification']['url'] = "nationalreview.com";
oneSignal_options['path'] = "https://www.nationalreview.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
oneSignal_options['safari_web_id'] = "web.onesignal.auto.44daf2d6-544c-403f-a3b6-3ab51abe3e37";
oneSignal_options['persistNotification'] = true;
oneSignal_options['promptOptions'] = { };
oneSignal_options['promptOptions']['actionMessage'] = "We’d like to send you notifications of our latest news and opinion. Unsubscribe anytime.";
                OneSignal.init(window._oneSignalInitOptions);
                OneSignal.showSlidedownPrompt();      });

      function documentInitOneSignal() {
        var oneSignal_elements = document.getElementsByClassName("OneSignal-prompt");

        var oneSignalLinkClickHandler = function(event) { OneSignal.push(['registerForPushNotifications']); event.preventDefault(); };        for(var i = 0; i < oneSignal_elements.length; i++)
          oneSignal_elements[i].addEventListener('click', oneSignalLinkClickHandler, false);
      }

      if (document.readyState === 'complete') {
           documentInitOneSignal();
      }
      else {
           window.addEventListener("load", function(event){
               documentInitOneSignal();
          });
      }
    </script>
<!-- There is no amphtml version available for this URL. -->	<script>
	var setOneSignalTag = function() {
		window.OneSignal = window.OneSignal || [];

		window.OneSignal.push(function() {
			var profile = window.blueConicClient.profile.getProfile();

			profile.loadValues(['cds_status'], this, function() {
				OneSignal.sendTag('cds_status', profile.getValue('cds_status'));
			});
		});
	};

	if ('undefined' !== typeof window.blueConicClient) {
		setOneSignalTag();
	} else {
		window.addEventListener('onBlueConicLoaded', setOneSignalTag, false);
	}
	</script>
	<link rel="icon" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-96x96.png" sizes="32x32" />
<link rel="icon" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-96x96.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-96x96.png" />
<meta name="msapplication-TileImage" content="https://www.nationalreview.com/wp-content/themes/national-review/static/images/favicons/favicon-96x96.png" />

	<script>
		window.__coral_talk_base_url__ = window.__coral_talk_base_url__ ||
			"https:\/\/comments.nationalreview.com";
		window.__coral_talk_static_url__ = window.__coral_talk_static_url__ ||
			"https:\/\/comments.nationalreview.com";
	</script>
</head>
<body class="nr-headless">
	<svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="0" role="none" style="left:-9999px;overflow:hidden;position:absolute" viewBox="0 0 0 0" width="0"></svg>
	<div id="page" class="site" data-headless></div>

	<div id="bc-root"></div>

			<!-- START Parse.ly Include: Standard -->
		<div id="parsely-root" style="display: none">
										<div id="parsely-cfg" data-parsely-site="nationalreview.com"></div>
					</div>
		<script>
			(function( s, p, d ) {
				var h = d.location.protocol, i = p + "-" + s, e = d.getElementById( i ), r = d.getElementById( p + "-root" ), u = h === "https:" ? "d1z2jf7jlzjs58.cloudfront.net" : "static." + p + ".com";
				if ( e ) return;
				e = d.createElement( s );
				e.id = i;
				e.async = true;
				e.defer = true;
				e.src = h + "//" + u + "/p.js";
				r.appendChild( e );
			})( "script", "parsely", document );
		</script>
		<!-- END Parse.ly Include -->
		<script type="text/javascript" id="nr-headless-js-extra">
/* <![CDATA[ */
var nr = {"env":"production","is_wp_logged_in":"","is_developer":"","is_nr_staff":"","postId":"","url":{"ajax":"https:\/\/www.nationalreview.com\/wp-admin\/admin-ajax.php","cds":{"testRootUrl":"https:\/\/admin.buysub.com\/servlet","rootUrl":"https:\/\/w1.buysub.com\/servlet","magCode":"NR1","pageId":"222344","queryType":"A","loginType":"S"},"coral":{"authorization":"https:\/\/comments.nationalreview.com\/api\/v1\/cds\/auth\/amp\/authorization","base":"https:\/\/comments.nationalreview.com","pingback":"https:\/\/comments.nationalreview.com\/api\/v1\/cds\/auth\/amp\/pingback"},"polyfill":"https:\/\/www.nationalreview.com\/wp-content\/themes\/national-review\/client\/build\/js\/polyfills.bundle.min.js","restApi":"https:\/\/www.nationalreview.com\/wp-json","restApiNr":"https:\/\/www.nationalreview.com\/wp-json\/nr\/v1","restApiNs":"nr\/v1","themeRoot":"https:\/\/www.nationalreview.com\/wp-content\/themes\/national-review"},"l10n":{"readMore":{"button":"Continue Reading","screenReader":"Continue Reading Story"},"seeMore":"See More"},"comscore":{"clientId":"23390304","pageviewCandidateUrl":"https:\/\/www.nationalreview.com\/wp-content\/themes\/national-review\/pageview_candidate.xml"},"is_headless":"1","route_patterns":[{"exact":true,"page":"national-review\/home","path":"\/","request_type":"home","preload_paths":["\/nr\/v1\/sidebar\/atf-homepage-sidebar","\/nr\/v1\/sidebar\/homepage-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/home","path":"\/page\/:paged(\\d+)\/","request_type":"home","preload_paths":["\/nr\/v1\/sidebar\/atf-homepage-sidebar","\/nr\/v1\/sidebar\/homepage-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/latest","path":"\/latest\/page\/:paged(\\d+)\/","request_type":"dispatch","query_args":{"dispatch":"latest"},"options":{"pagination":true},"pattern":"\/^\\\/latest\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/most-popular","path":"\/most-popular\/page\/:paged(\\d+)\/","request_type":"dispatch","query_args":{"dispatch":"most-popular"},"options":{"pagination":true},"pattern":"\/^\\\/most-popular\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/latest","path":"\/latest\/","request_type":"dispatch","query_args":{"dispatch":"latest"},"options":{"pagination":true},"pattern":"\/^\\\/latest\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/most-popular","path":"\/most-popular\/","request_type":"dispatch","query_args":{"dispatch":"most-popular"},"options":{"pagination":true},"pattern":"\/^\\\/most-popular\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/authors","path":"\/authors\/","request_type":"dispatch","query_args":{"dispatch":"authors"},"preload_paths":["\/nr\/v1\/sidebar\/archive-sidebar"],"pattern":"\/^\\\/authors\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/login","path":"\/login\/","request_type":"dispatch","query_args":{"dispatch":"login"},"pattern":"\/^\\\/login\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/logout","path":"\/logout\/","request_type":"dispatch","query_args":{"dispatch":"logout"},"pattern":"\/^\\\/logout\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/slideshow-single","path":"\/photos\/:slug\/","request_type":"singular","query_args":{"post_type":"slideshow"},"pattern":"\/^\\\/photos\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/flipbook","path":"\/magazine\/:issue_year(\\d+)\/:issue_monthnum(\\d+)\/:issue_day(\\d+)\/flipbook\/","request_type":"singular","query_args":{"post_type":"issue"},"pattern":"\/^\\\/magazine\\\/(\\d+)\\\/(\\d+)\\\/(\\d+)\\\/flipbook\\\/$\/","match_keys":[{"name":"issue_year","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_monthnum","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_day","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/flipbook","path":"\/magazine\/:issue_year(\\d+)\/:issue_monthnum(\\d+)\/flipbook\/","request_type":"singular","query_args":{"post_type":"issue"},"pattern":"\/^\\\/magazine\\\/(\\d+)\\\/(\\d+)\\\/flipbook\\\/$\/","match_keys":[{"name":"issue_year","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_monthnum","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/magazine-article-single","path":"\/magazine\/:issue_year(\\d+)\/:issue_monthnum(\\d+)\/:issue_day(\\d+)\/:slug\/","request_type":"singular","query_args":{"post_type":"post"},"pattern":"\/^\\\/magazine\\\/(\\d+)\\\/(\\d+)\\\/(\\d+)\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"issue_year","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_monthnum","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_day","delimiter":"\/","optional":false,"repeat":false},{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/magazine-single","path":"\/magazine\/:issue_year(\\d+)\/:issue_monthnum(\\d+)\/:issue_day(\\d+)\/","request_type":"singular","query_args":{"post_type":"issue"},"preload_paths":["\/nr\/v1\/sidebar\/magazine-issue-sidebar"],"pattern":"\/^\\\/magazine\\\/(\\d+)\\\/(\\d+)\\\/(\\d+)\\\/$\/","match_keys":[{"name":"issue_year","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_monthnum","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_day","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/magazine-article-single","path":"\/magazine\/:issue_year(\\d+)\/:issue_monthnum(\\d+)\/:slug\/","request_type":"singular","query_args":{"post_type":"post"},"pattern":"\/^\\\/magazine\\\/(\\d+)\\\/(\\d+)\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"issue_year","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_monthnum","delimiter":"\/","optional":false,"repeat":false},{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/magazine-single","path":"\/magazine\/:issue_year(\\d+)\/:issue_monthnum(\\d+)\/","request_type":"singular","query_args":{"post_type":"issue"},"preload_paths":["\/nr\/v1\/sidebar\/magazine-issue-sidebar"],"pattern":"\/^\\\/magazine\\\/(\\d+)\\\/(\\d+)\\\/$\/","match_keys":[{"name":"issue_year","delimiter":"\/","optional":false,"repeat":false},{"name":"issue_monthnum","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/magazine-archive","path":"\/magazine\/archive\/","post_type":"issue","request_type":"post_type_archive","pattern":"\/^\\\/magazine\\\/archive\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/magazine-single-latest","path":"\/magazine\/","request_type":"singular","query_args":{"post_type":"issue","post_status":"publish"},"preload_paths":["\/nr\/v1\/sidebar\/magazine-issue-sidebar","\/nr\/v1\/template\/singular?post_type=issue"],"pattern":"\/^\\\/magazine\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/post-single","path":"\/:year(\\d+)\/:monthnum(\\d+)\/:slug\/","query_args":{"post_type":"post"},"request_type":"singular","pattern":"\/^\\\/(\\d+)\\\/(\\d+)\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"year","delimiter":"\/","optional":false,"repeat":false},{"name":"monthnum","delimiter":"\/","optional":false,"repeat":false},{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/blog-post-single","strict":true,"path":"\/:section(2016-the-gops-four-faces|article|articles|battle-10|bench-memos|blogs|cia|critical-condition|david-calling|developing|education-week|egypt-watch|election-night|energy-week|events|exchequer|happening|human-exceptionalism|kudlows-money-politics|liberal-fascism|media-blog|mideast-watch|news|nro-energy|on-the-news-updates|petition|phi-beta-cons|planet-gore|postmodern-conservative|right-field|rnc-watch|the-agenda|the-campaign-spot|corner|the-feed|g-file|the-home-front|the-morning-jolt|the-primary-event|the-tuesday|the-tyranny-blog|the-weekend-jolt|unnaturally-political|video|web-briefing)\/:slug([A-Za-z0-9-]*)\/","query_args":{"post_type":"blog-post"},"request_type":"singular","pattern":"\/^\\\/(2016-the-gops-four-faces|article|articles|battle-10|bench-memos|blogs|cia|critical-condition|david-calling|developing|education-week|egypt-watch|election-night|energy-week|events|exchequer|happening|human-exceptionalism|kudlows-money-politics|liberal-fascism|media-blog|mideast-watch|news|nro-energy|on-the-news-updates|petition|phi-beta-cons|planet-gore|postmodern-conservative|right-field|rnc-watch|the-agenda|the-campaign-spot|corner|the-feed|g-file|the-home-front|the-morning-jolt|the-primary-event|the-tuesday|the-tyranny-blog|the-weekend-jolt|unnaturally-political|video|web-briefing)\\\/([A-Za-z0-9-]*)\\\/$\/","match_keys":[{"name":"section","delimiter":"\/","optional":false,"repeat":false},{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/video","path":"\/videos\/:slug\/","post_type":"video","request_type":"singular","pattern":"\/^\\\/videos\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/series-archive","path":"\/podcasts\/:slug\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"series","options":{"pagination":true},"pattern":"\/^\\\/podcasts\\\/([^\\\/]+?)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/video","path":"\/videos\/","post_type":"video","request_type":"post_type_archive","preload_paths":["\/nr\/v1\/video-hub-groups"],"pattern":"\/^\\\/videos\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/slideshow","path":"\/photos\/","post_type":"slideshow","request_type":"post_type_archive","preload_paths":["\/nr\/v1\/slideshow\/landing"],"pattern":"\/^\\\/photos\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/capital-matters-archive","path":"\/capital-matters\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","preload_paths":["\/nr\/v1\/sidebar\/capital-matters-landing-sidebar"],"query_args":{"taxonomy":"category","category":"capital-matters"},"options":{"pagination":true},"pattern":"\/^\\\/capital-matters\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"query_args":{"taxonomy":"category"},"options":{"pagination":true,"top_level":true},"pattern":"\/^\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"query_args":{"taxonomy":"category"},"options":{"pagination":true,"top_level":true},"pattern":"\/^\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/section-archive","path":"\/:section(2016-the-gops-four-faces|article|articles|battle-10|bench-memos|blogs|cia|critical-condition|david-calling|developing|education-week|egypt-watch|election-night|energy-week|events|exchequer|happening|human-exceptionalism|kudlows-money-politics|liberal-fascism|media-blog|mideast-watch|news|nro-energy|on-the-news-updates|petition|phi-beta-cons|planet-gore|postmodern-conservative|right-field|rnc-watch|the-agenda|the-campaign-spot|corner|the-feed|g-file|the-home-front|the-morning-jolt|the-primary-event|the-tuesday|the-tyranny-blog|the-weekend-jolt|unnaturally-political|video|web-briefing)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"section","preload_paths":[],"query_args":{"taxonomy":"section"},"options":{"filter_out_blogs":false,"pagination":true,"top_level":true},"pattern":"\/^\\\/(2016-the-gops-four-faces|article|articles|battle-10|bench-memos|blogs|cia|critical-condition|david-calling|developing|education-week|egypt-watch|election-night|energy-week|events|exchequer|happening|human-exceptionalism|kudlows-money-politics|liberal-fascism|media-blog|mideast-watch|news|nro-energy|on-the-news-updates|petition|phi-beta-cons|planet-gore|postmodern-conservative|right-field|rnc-watch|the-agenda|the-campaign-spot|corner|the-feed|g-file|the-home-front|the-morning-jolt|the-primary-event|the-tuesday|the-tyranny-blog|the-weekend-jolt|unnaturally-political|video|web-briefing)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"section","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/photos\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"slideshow","taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/photos\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/magazine\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"post","magazine":true,"taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/magazine\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/videos\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"video","taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/videos\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/podcasts\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"podcast","taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/podcasts\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/tag-archive","path":"\/tag\/:slug([A-Za-z0-9-]*)\/page\/:paged(\\d+)\/","request_type":"term_archive","taxonomy":"post_tag","query_args":{"taxonomy":"post_tag"},"preload_paths":["\/nr\/v1\/sidebar\/tag-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/tag\\\/([A-Za-z0-9-]*)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/series-archive","path":"\/podcasts\/:slug\/","request_type":"term_archive","taxonomy":"series","options":{"pagination":true},"pattern":"\/^\\\/podcasts\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/author-archive","path":"\/author\/:slug([A-Za-z0-9-]*)\/page\/:paged(\\d+)\/","request_type":"author_archive","preload_paths":["\/nr\/v1\/sidebar\/author-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/author\\\/([A-Za-z0-9-]*)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/landing-page","path":"\/:landing_page(2024-election|policy-analysis|combating-woke|crt-roundup)\/page\/:paged(\\d+)\/","post_type":"landing-page","request_type":"singular","query_args":{"post_type":"landing-page"},"options":{"pagination":true},"pattern":"\/^\\\/(2024-election|policy-analysis|combating-woke|crt-roundup)\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"landing_page","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/podcast","path":"\/podcasts\/","post_type":"podcast","request_type":"post_type_archive","preload_paths":["\/nr\/v1\/podcast\/landing","\/nr\/v1\/sidebar\/podcast-show-sidebar"],"pattern":"\/^\\\/podcasts\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/date-archive","path":"\/:year([0-9]{4})\/:monthnum([0-9]{1,2})\/page\/:paged(\\d+)\/","request_type":"date_archive","preload_paths":["\/nr\/v1\/sidebar\/archive-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/([0-9]{4})\\\/([0-9]{1,2})\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"year","delimiter":"\/","optional":false,"repeat":false},{"name":"monthnum","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/date-archive","path":"\/:year([0-9]{4})\/page\/:paged(\\d+)\/","request_type":"date_archive","preload_paths":["\/nr\/v1\/sidebar\/archive-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/([0-9]{4})\\\/page\\\/(\\d+)\\\/$\/","match_keys":[{"name":"year","delimiter":"\/","optional":false,"repeat":false},{"name":"paged","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/podcast-single","path":"\/podcasts\/:series\/:slug\/","request_type":"singular","query_args":{"post_type":"podcast"},"preload_paths":["\/nr\/v1\/sidebar\/podcast-episode-sidebar"],"pattern":"\/^\\\/podcasts\\\/([^\\\/]+?)\\\/([^\\\/]+?)\\\/$\/","match_keys":[{"name":"series","delimiter":"\/","optional":false,"repeat":false},{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/capital-matters-archive","path":"\/capital-matters\/","request_type":"term_archive","taxonomy":"category","preload_paths":["\/nr\/v1\/sidebar\/capital-matters-landing-sidebar"],"query_args":{"taxonomy":"category","category":"capital-matters"},"options":{"pagination":true},"pattern":"\/^\\\/capital-matters\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/category-archive","path":"\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/","request_type":"term_archive","taxonomy":"category","preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"query_args":{"taxonomy":"category"},"options":{"pagination":true,"top_level":true},"pattern":"\/^\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/","request_type":"term_archive","taxonomy":"category","preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"query_args":{"taxonomy":"category"},"options":{"pagination":true,"top_level":true},"pattern":"\/^\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/section-archive","path":"\/:section(2016-the-gops-four-faces|article|articles|battle-10|bench-memos|blogs|cia|critical-condition|david-calling|developing|education-week|egypt-watch|election-night|energy-week|events|exchequer|happening|human-exceptionalism|kudlows-money-politics|liberal-fascism|media-blog|mideast-watch|news|nro-energy|on-the-news-updates|petition|phi-beta-cons|planet-gore|postmodern-conservative|right-field|rnc-watch|the-agenda|the-campaign-spot|corner|the-feed|g-file|the-home-front|the-morning-jolt|the-primary-event|the-tuesday|the-tyranny-blog|the-weekend-jolt|unnaturally-political|video|web-briefing)\/","request_type":"term_archive","taxonomy":"section","preload_paths":[],"query_args":{"taxonomy":"section"},"options":{"filter_out_blogs":false,"pagination":true,"top_level":true},"pattern":"\/^\\\/(2016-the-gops-four-faces|article|articles|battle-10|bench-memos|blogs|cia|critical-condition|david-calling|developing|education-week|egypt-watch|election-night|energy-week|events|exchequer|happening|human-exceptionalism|kudlows-money-politics|liberal-fascism|media-blog|mideast-watch|news|nro-energy|on-the-news-updates|petition|phi-beta-cons|planet-gore|postmodern-conservative|right-field|rnc-watch|the-agenda|the-campaign-spot|corner|the-feed|g-file|the-home-front|the-morning-jolt|the-primary-event|the-tuesday|the-tyranny-blog|the-weekend-jolt|unnaturally-political|video|web-briefing)\\\/$\/","match_keys":[{"name":"section","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/photos\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"slideshow","taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/photos\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/magazine\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"post","magazine":true,"taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/magazine\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/videos\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"video","taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/videos\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/category-archive","path":"\/podcasts\/category\/:category(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\/","request_type":"term_archive","taxonomy":"category","query_args":{"post_type":"podcast","taxonomy":"category"},"preload_paths":["\/nr\/v1\/sidebar\/category-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/podcasts\\\/category\\\/(adam-smith-300|against-socialism|art|athwart|banking-finance|books|books-arts-manners|business|capital-matters|capital-writing|cartoons|city-desk|classic-films|coronavirus-update|country-life|culture|defense-of-markets|economics|economy-business|education|elections|energy-environment|film-tv|fiscal-policy|forgotten-fact-checks|garner-the-grammarian|happy-warrior|health-care|history|humor|immigration|impromptus|international|israel-at-war|law-the-courts|letters|magazine|markets|media|military|monetary-policy|music|national-review|national-security-defense|natural-law|news-events|nr-insider|nr-webathon|nri|nri-ideas-summit|olympics|our-spacious-skies|poetry|politics-policy|reading-right|regulatory-policy|religion|russia-ukraine-conflict|science-tech|science-technology|sponsored-content|sports|supply-demand|the-bent-pin|the-bookshelf|the-capital-letter|the-capital-note|the-detransitioners|the-economy|the-forgotten-book|the-horse-race|the-long-view|the-misanthropes-corner|the-straggler|the-vitruvian-life|the-week|theater|to-the-contrary|today-in-history|trade|us|weekend-short|wfb-essay-contest-winner|white-house|woke-culture|words-edgewise|world)\\\/$\/","match_keys":[{"name":"category","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/tag-archive","path":"\/tag\/:slug([A-Za-z0-9-]*)\/","request_type":"term_archive","taxonomy":"post_tag","query_args":{"taxonomy":"post_tag"},"preload_paths":["\/nr\/v1\/sidebar\/tag-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/tag\\\/([A-Za-z0-9-]*)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/search","path":"\/search\/","request_type":"search","preload_paths":["\/nr\/v1\/sidebar\/search-sidebar"],"pattern":"\/^\\\/search\\\/$\/","match_keys":[]},{"exact":true,"page":"national-review\/author-archive","path":"\/author\/:slug([A-Za-z0-9-]*)\/","request_type":"author_archive","preload_paths":["\/nr\/v1\/sidebar\/author-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/author\\\/([A-Za-z0-9-]*)\\\/$\/","match_keys":[{"name":"slug","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/landing-page","path":"\/:landing_page(2024-election|policy-analysis|combating-woke|crt-roundup)\/","post_type":"landing-page","request_type":"singular","query_args":{"post_type":"landing-page"},"options":{"pagination":true},"pattern":"\/^\\\/(2024-election|policy-analysis|combating-woke|crt-roundup)\\\/$\/","match_keys":[{"name":"landing_page","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/page","path":"\/:page(nr-ec|service-notice|tcl-preview-non-subs|nr-daily-preview|wik-preview|the-capital-letter-nrplus-member-preview|the-horse-race-preview-nrplus-members|the-horse-race-preview|bn-preview|mj-preview-nrplus-members|mj-preview|upgrade|weve-got-an-answer-to-the-big-guy|redesign|thankyou-cap|thankyou-horserace|thankyou-news|thankyou-nrd|upgrade-comments|subscribe-30-off|advertise-2023|subscribe-12-weeks-for-12|commenting-policy-2023-9999|subscribe-70-off|givenow|hollywood|ff-gift-2022|subscribe-ff|christmas-2022-subscribe-60|nofreelunch|thank-you-for-your-vote|subscribe-12-for-6|subscribe-60-off|subscribe30|privacy-policy-2|donate2022|give-60-tote|subscribe-50-off|thank-you-lp|alec65|subscribe-50-off-premium|nrplus-now|plusnow|give-60-off|subscribe-65|subscribe-12-6-60|subscribe-20-20|commenting-policy|nr-nrplus-feature-comparison|subscribe-12-6|tips|about|nri-fund-appeal|subscribe-index|newsletter-signup-gsn|facebook-ebook|subscribe-13|subscribe40|nrplus-subscribe|subscribe-60|subscribe-50|subscribe|donate|careers|list-removal-success|scout-from-sailthru|care|terms-of-service|nrplus-2-2|newsletter-signup|advertise|contact-us|privacy-policy|the-masthead|frequently-asked-questions)\/","request_type":"singular","preload_paths":["\/nr\/v1\/sidebar\/page-sidebar"],"query_args":{"post_type":"page"},"pattern":"\/^\\\/(nr-ec|service-notice|tcl-preview-non-subs|nr-daily-preview|wik-preview|the-capital-letter-nrplus-member-preview|the-horse-race-preview-nrplus-members|the-horse-race-preview|bn-preview|mj-preview-nrplus-members|mj-preview|upgrade|weve-got-an-answer-to-the-big-guy|redesign|thankyou-cap|thankyou-horserace|thankyou-news|thankyou-nrd|upgrade-comments|subscribe-30-off|advertise-2023|subscribe-12-weeks-for-12|commenting-policy-2023-9999|subscribe-70-off|givenow|hollywood|ff-gift-2022|subscribe-ff|christmas-2022-subscribe-60|nofreelunch|thank-you-for-your-vote|subscribe-12-for-6|subscribe-60-off|subscribe30|privacy-policy-2|donate2022|give-60-tote|subscribe-50-off|thank-you-lp|alec65|subscribe-50-off-premium|nrplus-now|plusnow|give-60-off|subscribe-65|subscribe-12-6-60|subscribe-20-20|commenting-policy|nr-nrplus-feature-comparison|subscribe-12-6|tips|about|nri-fund-appeal|subscribe-index|newsletter-signup-gsn|facebook-ebook|subscribe-13|subscribe40|nrplus-subscribe|subscribe-60|subscribe-50|subscribe|donate|careers|list-removal-success|scout-from-sailthru|care|terms-of-service|nrplus-2-2|newsletter-signup|advertise|contact-us|privacy-policy|the-masthead|frequently-asked-questions)\\\/$\/","match_keys":[{"name":"page","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/date-archive","path":"\/:year([0-9]{4})\/:monthnum([0-9]{1,2})\/","request_type":"date_archive","preload_paths":["\/nr\/v1\/sidebar\/archive-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/([0-9]{4})\\\/([0-9]{1,2})\\\/$\/","match_keys":[{"name":"year","delimiter":"\/","optional":false,"repeat":false},{"name":"monthnum","delimiter":"\/","optional":false,"repeat":false}]},{"exact":true,"page":"national-review\/date-archive","path":"\/:year([0-9]{4})\/","request_type":"date_archive","preload_paths":["\/nr\/v1\/sidebar\/archive-sidebar"],"options":{"pagination":true},"pattern":"\/^\\\/([0-9]{4})\\\/$\/","match_keys":[{"name":"year","delimiter":"\/","optional":false,"repeat":false}]},{"page":"national-review\/nativo-sponsored","path":"\/sponsored\/","_comment":"This is a catch-all route that should be the last route in the list.","request_type":"dispatch","query_args":{"dispatch":"nativo"},"pattern":"\/^\\\/sponsored\\\/$\/","match_keys":[]},{"page":"national-review\/not-found","path":"*\/","_comment":"This is a catch-all route that should be the last route in the list.","request_type":"unknown","pattern":"\/^\\*\\\/$\/","match_keys":[]}],"nonceRestApi":"d710c19ace","hasRefreshToken":"","headless":{"feature_flags":{"blueconic-paywall":true,"cached-wsg":false}},"subscriberSegment":{"group":"logged_in","segmentDigital":"yes","segmentNonDigital":"non_digital"},"is_subscriber":"","parsely":{"domain":"nationalreview.com","key":"nationalreview.com","apiUrl":"https:\/\/api.parsely.com\/v2"}};
/* ]]> */
</script>
<script type="text/javascript" id="nr-headless-js-before">
/* <![CDATA[ */
/* ]]> */
</script>
<script type="text/javascript" src="https://www.nationalreview.com/wp-content/themes/national-review/client/build/js/app.bundle.min.js?ver=07ad73c4bd2b467fcf04" id="nr-headless-js"></script>
<script type="text/javascript" id="ai-logger-insert-js-extra">
/* <![CDATA[ */
var aiLoggerConfig = {"nonce":"26312e739e","url":"https:\/\/www.nationalreview.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" async src="https://www.nationalreview.com/wp-content/plugins/logger/static/js/logger-insert.js?ver=0.1" id="ai-logger-insert-js"></script>
<script type="text/javascript" defer src="https://cdn.onesignal.com/sdks/OneSignalSDK.js?ver=6.4.2&#039; async=&#039;async" id="remote_sdk-js"></script>

	<!-- Facebook Pixel -->
	<script>
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '1626507807583041');
		fbq('track', 'PageView');
	</script>
</body>
</html>

<!-- plugin=object-cache-pro client=phpredis metric#hits=1058 metric#misses=111 metric#hit-ratio=90.5 metric#bytes=40433295 metric#prefetches=38 metric#store-reads=41 metric#store-writes=2 metric#store-hits=84 metric#store-misses=28 metric#sql-queries=1 metric#ms-total=340.42 metric#ms-cache=192.86 metric#ms-cache-avg=4.5920 metric#ms-cache-ratio=56.7 -->