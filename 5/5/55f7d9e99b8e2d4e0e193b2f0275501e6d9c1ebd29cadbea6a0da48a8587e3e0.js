<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
,PLATFORM_BLACKBERRY_10:"blackberry_10",PLATFORM_SYMBIAN:"symbian_series60",PLATFORM_SYMBIAN_S40:"symbian_series40",PLATFORM_J2ME_MIDP:"j2me_midp",PLATFORM_ANDROID:"android",PLATFORM_ANDROID_TABLET:"android_tablet",PLATFORM_FIREFOX_OS:"firefoxOS",PLATFORM_MOBILE_GENERIC:"mobile_generic",userAgent:false,matchedPlatformName:false,matchedUserAgentName:false,init:function(){try{i.userAgent=e.navigator.userAgent.toLowerCase();i.getPlatformName();i.getMobileUserAgentName()}catch(e){console.error(e)}},initForTest:function(e){i.matchedPlatformName=false;i.matchedUserAgentName=false;try{i.userAgent=e.toLowerCase();i.getPlatformName();i.getMobileUserAgentName()}catch(e){console.error(e)}},getMobileUserAgentName:function(){if(i.matchedUserAgentName!==false)return i.matchedUserAgentName;if(i.userAgent===false)return false;if(i.isChromeForIOS())i.matchedUserAgentName="chrome-for-ios";else if(i.isTwitterForIpad())i.matchedUserAgentName="twitter-for-ipad";else if(i.isTwitterForIphone())i.matchedUserAgentName="twitter-for-iphone";else if(i.isIPhoneOrIPod())i.matchedUserAgentName="iphone";else if(i.isIPad())i.matchedUserAgentName="ipad";else if(i.isAndroidTablet())i.matchedUserAgentName="android_tablet";else if(i.isAndroid())i.matchedUserAgentName="android";else if(i.isBlackberry10())i.matchedUserAgentName="blackberry_10";else if(r("blackberry"))i.matchedUserAgentName="blackberry";else if(i.isBlackberryTablet())i.matchedUserAgentName="blackberry_tablet";else if(i.isWindowsPhone7())i.matchedUserAgentName="win7";else if(i.isWindowsPhone8())i.matchedUserAgentName="winphone8";else if(i.isOperaMini())i.matchedUserAgentName="opera-mini";else if(i.isOperaMobile())i.matchedUserAgentName="opera-mobi";else if(i.isKindleFire())i.matchedUserAgentName="kindle-fire";else if(i.isSymbianPlatform())i.matchedUserAgentName="series60";else if(i.isFirefoxMobile())i.matchedUserAgentName="firefox_mobile";else if(i.isFirefoxOS())i.matchedUserAgentName="firefoxOS";else if(i.isFacebookForIphone())i.matchedUserAgentName="facebook-for-iphone";else if(i.isFacebookForIpad())i.matchedUserAgentName="facebook-for-ipad";else if(i.isWordPressForIos())i.matchedUserAgentName="ios-app";else if(r("iphone"))i.matchedUserAgentName="iphone-unknown";else if(r("ipad"))i.matchedUserAgentName="ipad-unknown";return i.matchedUserAgentName},getPlatformName:function(){if(i.matchedPlatformName!==false)return i.matchedPlatformName;if(i.userAgent===false)return false;if(r("windows ce")||r("windows phone")){i.matchedPlatformName=i.PLATFORM_WINDOWS}else if(r("ipad")){i.matchedPlatformName=i.PLATFORM_IPAD}else if(r("ipod")){i.matchedPlatformName=i.PLATFORM_IPOD}else if(r("iphone")){i.matchedPlatformName=i.PLATFORM_IPHONE}else if(r("android")){if(i.isAndroidTablet())i.matchedPlatformName=i.PLATFORM_ANDROID_TABLET;else i.matchedPlatformName=i.PLATFORM_ANDROID}else if(i.isKindleFire()){i.matchedPlatformName=i.PLATFORM_ANDROID_TABLET}else if(i.isBlackberry10()){i.matchedPlatformName=i.PLATFORM_BLACKBERRY_10}else if(r("blackberry")){i.matchedPlatformName=i.PLATFORM_BLACKBERRY}else if(i.isBlackberryTablet()){i.matchedPlatformName=i.PLATFORM_BLACKBERRY}else if(i.isSymbianPlatform()){i.matchedPlatformName=i.PLATFORM_SYMBIAN}else if(i.isSymbianS40Platform()){i.matchedPlatformName=i.PLATFORM_SYMBIAN_S40}else if(i.isJ2MEPlatform()){i.matchedPlatformName=i.PLATFORM_J2ME_MIDP}else if(i.isFirefoxOS()){i.matchedPlatformName=i.PLATFORM_FIREFOX_OS}else if(i.isFirefoxMobile()){i.matchedPlatformName=i.PLATFORM_MOBILE_GENERIC}return i.matchedPlatformName},getBlackBerryOSVersion:a(function(){if(i.isBlackberry10())return"10";if(!r("blackberry"))return false;var e=-1;var a;if(r("webkit")){a=/Version\/([\d\.]+)/i}else{a=/BlackBerry\w+\/([\d\.]+)/i}if(a.exec(i.userAgent)!=null)e=RegExp.$1.toString();return e===-1?false:e}),isIPhoneOrIPod:a(function(){return r("safari")&&(r("iphone")||r("ipod"))}),isIPad:a(function(){return r("ipad")&&r("safari")}),isChromeForIOS:a(function(){return i.isIPhoneOrIPod()&&r("crios/")}),isAndroid:a(function(){if(r("android")){return!(i.isOperaMini()||i.isOperaMobile()||i.isFirefoxMobile())}}),isAndroidTablet:a(function(){if(r("android")&&!r("mobile")){return!(i.isOperaMini()||i.isOperaMobile()||i.isFirefoxMobile())}}),isOperaMobile:a(function(){return r("opera")&&r("mobi")}),isOperaMini:a(function(){return r("opera")&&r("mini")}),isBlackberry10:a(function(){return r("bb10")&&r("mobile")}),isBlackberryTablet:a(function(){return r("playbook")&&r("rim tablet")}),isWindowsPhone7:a(function(){return r("windows phone os 7")}),isWindowsPhone8:a(function(){return r("windows phone 8")}),isJ2MEPlatform:a(function(){return r("j2me/midp")||r("midp")&&r("cldc")}),isSymbianS40Platform:a(function(){if(r("series40")){return r("nokia")||r("ovibrowser")||r("nokiabrowser")}}),isSymbianPlatform:a(function(){if(r("webkit")){return r("symbian")||r("series60")}else if(r("symbianos")&&r("series60")){return true}else if(r("nokia")&&r("series60")){return true}else if(r("opera mini")){return r("symbianos")||r("symbos")||r("series 60")}}),isKindleFire:a(function(){return r("silk/")&&r("silk-accelerated=")}),isFirefoxMobile:a(function(){return r("fennec")}),isFirefoxOS:a(function(){return r("mozilla")&&r("mobile")&&r("gecko")&&r("firefox")}),isFacebookForIpad:a(function(){if(!r("ipad"))return false;return r("facebook")||r("fbforiphone")||r("fban/fbios;")}),isFacebookForIphone:a(function(){if(!r("iphone"))return false;return r("facebook")&&!r("ipad")||r("fbforiphone")&&!r("tablet")||r("fban/fbios;")&&!r("tablet")}),isTwitterForIphone:a(function(){if(r("ipad"))return false;return r("twitter for iphone")}),isTwitterForIpad:a(function(){return r("twitter for ipad")||r("ipad")&&r("twitter for iphone")}),isWordPressForIos:a(function(){return r("wp-iphone")})};function r(e){return i.userAgent.indexOf(e)!=-1}function a(e){return function(){return i.userAgent===false?false:e()||false}}e.wpcom_mobile_user_agent_info=i})(typeof window!=="undefined"?window:this);rts.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
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
<link crossorigin='anonymous' rel='stylesheet' id='all-css-2-1' href='https://s1.wp.com/wp-content/plugins/gutenberg-core/v17.4.1/build/block-library/style.css?m=1704824988i&cssminify=yes' type='text/css' media='all' />
<style id='wp-block-library-inline-css'>
.has-text-align-justify {
	text-align:justify;
}
.wp-block-cover__image-background.has-parallax {
	background-size: cover;
}
</style>
<style id='wp-parsely-recommendations-style-inline-css'>
.parsely-recommendations-list-title{font-size:1.2em}.parsely-recommendations-list{list-style:none;padding:unset}.parsely-recommendations-cardbody{overflow:hidden;padding:.8em;text-overflow:ellipsis;white-space:nowrap}.parsely-recommendations-cardmedia{padding:.8em .8em 0}

</style>
<link crossorigin='anonymous' rel='stylesheet' id='all-css-6-1' href='https://s0.wp.com/_static/??-eJyVjV0OwiAQBi8kEKrR+mA8C4UN2br8hAVNby8mprEvGh8n+82semSB0VJzwGpmFcChAYIAsW4gk1mgCAJv7CIDRmmZd+qb3m+fvJFsivW1ydQ8Rla+dZygeDFRsrceg5qNvYn+NrUqfEGnuC4E/yeKqRg9/9BtemuD1KPUgjFkAlHgLg/KIdd1IdbQNVz0cdTjfhjOp/kJMmh7kg==&cssminify=yes' type='text/css' media='all' />
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<link crossorigin='anonymous' rel='stylesheet' id='all-css-8-1' href='https://s1.wp.com/_static/??/wp-content/mu-plugins/core-compat/wp-mediaelement.css,/wp-content/mu-plugins/wpcom-bbpress-premium-themes.css?m=1432920480j&cssminify=yes' type='text/css' media='all' />
<style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-family--albert-sans: 'Albert Sans', sans-serif;--wp--preset--font-family--alegreya: Alegreya, serif;--wp--preset--font-family--arvo: Arvo, serif;--wp--preset--font-family--bodoni-moda: 'Bodoni Moda', serif;--wp--preset--font-family--cabin: Cabin, sans-serif;--wp--preset--font-family--chivo: Chivo, sans-serif;--wp--preset--font-family--commissioner: Commissioner, sans-serif;--wp--preset--font-family--cormorant: Cormorant, serif;--wp--preset--font-family--courier-prime: 'Courier Prime', monospace;--wp--preset--font-family--crimson-pro: 'Crimson Pro', serif;--wp--preset--font-family--dm-mono: 'DM Mono', monospace;--wp--preset--font-family--dm-sans: 'DM Sans', sans-serif;--wp--preset--font-family--domine: Domine, serif;--wp--preset--font-family--eb-garamond: 'EB Garamond', serif;--wp--preset--font-family--epilogue: Epilogue, sans-serif;--wp--preset--font-family--figtree: Figtree, sans-serif;--wp--preset--font-family--fira-sans: 'Fira Sans', sans-serif;--wp--preset--font-family--fraunces: Fraunces, serif;--wp--preset--font-family--ibm-plex-mono: 'IBM Plex Mono', monospace;--wp--preset--font-family--ibm-plex-sans: 'IBM Plex Sans', sans-serif;--wp--preset--font-family--inter: Inter, sans-serif;--wp--preset--font-family--josefin-sans: 'Josefin Sans', sans-serif;--wp--preset--font-family--jost: Jost, sans-serif;--wp--preset--font-family--libre-baskerville: 'Libre Baskerville', serif;--wp--preset--font-family--libre-franklin: 'Libre Franklin', sans-serif;--wp--preset--font-family--literata: Literata, serif;--wp--preset--font-family--lora: Lora, serif;--wp--preset--font-family--merriweather: Merriweather, serif;--wp--preset--font-family--montserrat: Montserrat, sans-serif;--wp--preset--font-family--newsreader: Newsreader, serif;--wp--preset--font-family--nunito: Nunito, sans-serif;--wp--preset--font-family--open-sans: 'Open Sans', sans-serif;--wp--preset--font-family--overpass: Overpass, sans-serif;--wp--preset--font-family--petrona: Petrona, serif;--wp--preset--font-family--piazzolla: Piazzolla, serif;--wp--preset--font-family--playfair-display: 'Playfair Display', serif;--wp--preset--font-family--plus-jakarta-sans: 'Plus Jakarta Sans', sans-serif;--wp--preset--font-family--poppins: Poppins, sans-serif;--wp--preset--font-family--raleway: Raleway, sans-serif;--wp--preset--font-family--roboto: Roboto, sans-serif;--wp--preset--font-family--roboto-slab: 'Roboto Slab', serif;--wp--preset--font-family--rubik: Rubik, sans-serif;--wp--preset--font-family--sora: Sora, sans-serif;--wp--preset--font-family--source-sans-3: 'Source Sans 3', sans-serif;--wp--preset--font-family--source-serif-4: 'Source Serif 4', serif;--wp--preset--font-family--space-mono: 'Space Mono', monospace;--wp--preset--font-family--texturina: Texturina, serif;--wp--preset--font-family--work-sans: 'Work Sans', sans-serif;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-albert-sans-font-family{font-family: var(--wp--preset--font-family--albert-sans) !important;}.has-alegreya-font-family{font-family: var(--wp--preset--font-family--alegreya) !important;}.has-arvo-font-family{font-family: var(--wp--preset--font-family--arvo) !important;}.has-bodoni-moda-font-family{font-family: var(--wp--preset--font-family--bodoni-moda) !important;}.has-cabin-font-family{font-family: var(--wp--preset--font-family--cabin) !important;}.has-chivo-font-family{font-family: var(--wp--preset--font-family--chivo) !important;}.has-commissioner-font-family{font-family: var(--wp--preset--font-family--commissioner) !important;}.has-cormorant-font-family{font-family: var(--wp--preset--font-family--cormorant) !important;}.has-courier-prime-font-family{font-family: var(--wp--preset--font-family--courier-prime) !important;}.has-crimson-pro-font-family{font-family: var(--wp--preset--font-family--crimson-pro) !important;}.has-dm-mono-font-family{font-family: var(--wp--preset--font-family--dm-mono) !important;}.has-dm-sans-font-family{font-family: var(--wp--preset--font-family--dm-sans) !important;}.has-domine-font-family{font-family: var(--wp--preset--font-family--domine) !important;}.has-eb-garamond-font-family{font-family: var(--wp--preset--font-family--eb-garamond) !important;}.has-epilogue-font-family{font-family: var(--wp--preset--font-family--epilogue) !important;}.has-figtree-font-family{font-family: var(--wp--preset--font-family--figtree) !important;}.has-fira-sans-font-family{font-family: var(--wp--preset--font-family--fira-sans) !important;}.has-fraunces-font-family{font-family: var(--wp--preset--font-family--fraunces) !important;}.has-ibm-plex-mono-font-family{font-family: var(--wp--preset--font-family--ibm-plex-mono) !important;}.has-ibm-plex-sans-font-family{font-family: var(--wp--preset--font-family--ibm-plex-sans) !important;}.has-inter-font-family{font-family: var(--wp--preset--font-family--inter) !important;}.has-josefin-sans-font-family{font-family: var(--wp--preset--font-family--josefin-sans) !important;}.has-jost-font-family{font-family: var(--wp--preset--font-family--jost) !important;}.has-libre-baskerville-font-family{font-family: var(--wp--preset--font-family--libre-baskerville) !important;}.has-libre-franklin-font-family{font-family: var(--wp--preset--font-family--libre-franklin) !important;}.has-literata-font-family{font-family: var(--wp--preset--font-family--literata) !important;}.has-lora-font-family{font-family: var(--wp--preset--font-family--lora) !important;}.has-merriweather-font-family{font-family: var(--wp--preset--font-family--merriweather) !important;}.has-montserrat-font-family{font-family: var(--wp--preset--font-family--montserrat) !important;}.has-newsreader-font-family{font-family: var(--wp--preset--font-family--newsreader) !important;}.has-nunito-font-family{font-family: var(--wp--preset--font-family--nunito) !important;}.has-open-sans-font-family{font-family: var(--wp--preset--font-family--open-sans) !important;}.has-overpass-font-family{font-family: var(--wp--preset--font-family--overpass) !important;}.has-petrona-font-family{font-family: var(--wp--preset--font-family--petrona) !important;}.has-piazzolla-font-family{font-family: var(--wp--preset--font-family--piazzolla) !important;}.has-playfair-display-font-family{font-family: var(--wp--preset--font-family--playfair-display) !important;}.has-plus-jakarta-sans-font-family{font-family: var(--wp--preset--font-family--plus-jakarta-sans) !important;}.has-poppins-font-family{font-family: var(--wp--preset--font-family--poppins) !important;}.has-raleway-font-family{font-family: var(--wp--preset--font-family--raleway) !important;}.has-roboto-font-family{font-family: var(--wp--preset--font-family--roboto) !important;}.has-roboto-slab-font-family{font-family: var(--wp--preset--font-family--roboto-slab) !important;}.has-rubik-font-family{font-family: var(--wp--preset--font-family--rubik) !important;}.has-sora-font-family{font-family: var(--wp--preset--font-family--sora) !important;}.has-source-sans-3-font-family{font-family: var(--wp--preset--font-family--source-sans-3) !important;}.has-source-serif-4-font-family{font-family: var(--wp--preset--font-family--source-serif-4) !important;}.has-space-mono-font-family{font-family: var(--wp--preset--font-family--space-mono) !important;}.has-texturina-font-family{font-family: var(--wp--preset--font-family--texturina) !important;}.has-work-sans-font-family{font-family: var(--wp--preset--font-family--work-sans) !important;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
</style>
<link crossorigin='anonymous' rel='stylesheet' id='all-css-10-1' href='https://s2.wp.com/_static/??-eJyFy0EOwjAMRNELYZyAECvEWdw0jQKuHSVOEbenLJBgAezmS/PwViCoWBTDwj1lacgkY6FwxaFnHlFogWZ3jtvQ2gb/g0nVYv1i5g4vlqICayDLKh8BE1Ouv2iNA2taZ8L19ZZPdJ5P/ugOzu933l0eBWVT+Q==&cssminify=yes' type='text/css' media='all' />
<style id='jetpack-global-styles-frontend-style-inline-css'>
:root { --font-headings: unset; --font-base: unset; --font-headings-default: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif; --font-base-default: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;}
</style>
<link crossorigin='anonymous' rel='stylesheet' id='all-css-12-1' href='https://s2.wp.com/wp-content/themes/h4/global.css?m=1420737423i&cssminify=yes' type='text/css' media='all' />
<script crossorigin='anonymous' type='text/javascript' src='https://s1.wp.com/_static/??-eJyNj90KwjAMRl/IrviD0AvxWeaajZQ2mWmq7u3tYBe9UPQqkJwvh88+ZzMwKZDakG3iG0YwJYP0U90ZpJG7kHe2ckhDLB7yCoZ7AVm20SWkn5BJOEmv0MKNWaKaWfi1fHrkMat9AHmW9TRzXEaMsTIg+s3ehgRqm9pJWYwUUkzwT6xxbfg1XfZn5w7udHQuvAGKQHYY'></script>
<script type="text/javascript" id="rlt-proxy-js-after">
/* <![CDATA[ */
	window.addEventListener( 'DOMContentLoaded', function() {
		rltInitialize( {"token":null,"iframeOrigins":["https:\/\/widgets.wp.com"]} );
	} );
/* ]]> */
</script>
<script type="text/javascript" crossorigin='anonymous' crossorigin='anonymous' src="https://s0.wp.com/wp-content/plugins/gutenberg-core/v17.4.1/build/hooks/index.min.js?m=1704824988i&amp;ver=700a21be8955e3eb9568" id="wp-hooks-js"></script>
<script type="text/javascript" crossorigin='anonymous' crossorigin='anonymous' src="https://s0.wp.com/wp-content/plugins/gutenberg-core/v17.4.1/build/i18n/index.min.js?m=1704824988i&amp;ver=f5a63315d8d2f363ce59" id="wp-i18n-js"></script>
<script type="text/javascript" id="wp-i18n-js-after">
/* <![CDATA[ */
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
/* ]]> */
</script>
<script type="text/javascript" id="media-video-jwt-bridge-js-extra">
/* <![CDATA[ */
var videopressAjax = {"ajaxUrl":"https:\/\/es.blog.wordpress.com\/wp-admin\/admin-ajax.php","bridgeUrl":"\/wp-content\/mu-plugins\/jetpack-plugin\/sun\/jetpack_vendor\/automattic\/jetpack-videopress\/build\/lib\/token-bridge.js","post_id":"3994"};
/* ]]> */
</script>
<script type="text/javascript" id="wpcom-actionbar-placeholder-js-extra">
/* <![CDATA[ */
var actionbardata = {"siteID":"11241806","postID":"0","siteURL":"https:\/\/wordpress.com\/es\/blog","xhrURL":"https:\/\/wordpress.com\/wp-admin\/admin-ajax.php","nonce":"bff008350d","isLoggedIn":"","statusMessage":"","subsEmailDefault":"instantly","proxyScriptUrl":"https:\/\/s0.wp.com\/wp-content\/js\/wpcom-proxy-request.js?ver=20211021","i18n":{"followedText":"Las entradas nuevas de este sitio aparecer\u00e1n ahora en tu <a href=\"https:\/\/wordpress.com\/read\">Lector<\/a>","foldBar":"Contraer esta barra","unfoldBar":"Expandir esta barra"}};
/* ]]> */
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s1.wp.com/_static/??-eJylj9EKwjAMRX/Img0f5ov4KdK1cWTrktKk8/edsIn4JAh5STg3hwuP7IKwIRvM1eVUB2KFES37MG07aOX9dFuQoxTw1WT2ZhTesFdFU+grpQjUntkl8RHLcdQDfHh2SfIcX8EtwX75keyTrLqQaGWchkLZ3F3EsDjFYCT8/ejfagtFlFxQ93qJejCZkF1fKA64Cq/zpe2aZp1T241P4RaB0g=='></script>
<script type="text/javascript" id="wp-jp-i18n-loader-js-after">
/* <![CDATA[ */
wp.jpI18nLoader.state = {"baseUrl":"https://widgets.wp.com/languages/","locale":"es","domainMap":{"jetpack-admin-ui":"plugins/jetpack","jetpack-assets":"plugins/jetpack","jetpack-backup-pkg":"plugins/jetpack","jetpack-blaze":"plugins/jetpack","jetpack-boost-core":"plugins/jetpack","jetpack-boost-speed-score":"plugins/jetpack","jetpack-compat":"plugins/jetpack","jetpack-config":"plugins/jetpack","jetpack-connection":"plugins/jetpack","jetpack-forms":"plugins/jetpack","jetpack-google-fonts-provider":"plugins/jetpack","jetpack-idc":"plugins/jetpack","jetpack-image-cdn":"plugins/jetpack","jetpack-import":"plugins/jetpack","jetpack-ip":"plugins/jetpack","jetpack-jitm":"plugins/jetpack","jetpack-licensing":"plugins/jetpack","jetpack-my-jetpack":"plugins/jetpack","jetpack-password-checker":"plugins/jetpack","jetpack-plugins-installer":"plugins/jetpack","jetpack-post-list":"plugins/jetpack","jetpack-publicize-pkg":"plugins/jetpack","jetpack-search-pkg":"plugins/jetpack","jetpack-stats":"plugins/jetpack","jetpack-stats-admin":"plugins/jetpack","jetpack-sync":"plugins/jetpack","jetpack-videopress-pkg":"plugins/jetpack","jetpack-waf":"plugins/jetpack","jetpack-wordads":"plugins/jetpack"},"domainPaths":{"jetpack-admin-ui":"jetpack_vendor/automattic/jetpack-admin-ui/","jetpack-assets":"jetpack_vendor/automattic/jetpack-assets/","jetpack-backup-pkg":"jetpack_vendor/automattic/jetpack-backup/","jetpack-blaze":"jetpack_vendor/automattic/jetpack-blaze/","jetpack-boost-core":"jetpack_vendor/automattic/jetpack-boost-core/","jetpack-boost-speed-score":"jetpack_vendor/automattic/jetpack-boost-speed-score/","jetpack-compat":"jetpack_vendor/automattic/jetpack-compat/","jetpack-config":"jetpack_vendor/automattic/jetpack-config/","jetpack-connection":"jetpack_vendor/automattic/jetpack-connection/","jetpack-forms":"jetpack_vendor/automattic/jetpack-forms/","jetpack-google-fonts-provider":"jetpack_vendor/automattic/jetpack-google-fonts-provider/","jetpack-idc":"jetpack_vendor/automattic/jetpack-identity-crisis/","jetpack-image-cdn":"jetpack_vendor/automattic/jetpack-image-cdn/","jetpack-import":"jetpack_vendor/automattic/jetpack-import/","jetpack-ip":"jetpack_vendor/automattic/jetpack-ip/","jetpack-jitm":"jetpack_vendor/automattic/jetpack-jitm/","jetpack-licensing":"jetpack_vendor/automattic/jetpack-licensing/","jetpack-my-jetpack":"jetpack_vendor/automattic/jetpack-my-jetpack/","jetpack-password-checker":"jetpack_vendor/automattic/jetpack-password-checker/","jetpack-plugins-installer":"jetpack_vendor/automattic/jetpack-plugins-installer/","jetpack-post-list":"jetpack_vendor/automattic/jetpack-post-list/","jetpack-publicize-pkg":"jetpack_vendor/automattic/jetpack-publicize/","jetpack-search-pkg":"jetpack_vendor/automattic/jetpack-search/","jetpack-stats":"jetpack_vendor/automattic/jetpack-stats/","jetpack-stats-admin":"jetpack_vendor/automattic/jetpack-stats-admin/","jetpack-sync":"jetpack_vendor/automattic/jetpack-sync/","jetpack-videopress-pkg":"jetpack_vendor/automattic/jetpack-videopress/","jetpack-waf":"jetpack_vendor/automattic/jetpack-waf/","jetpack-wordads":"jetpack_vendor/automattic/jetpack-wordads/"}};
/* ]]> */
</script>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://es.blog.wordpress.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress.com" />
<link rel='shortlink' href='https://wp.me/Lavs' />
	<style>
		@font-face {
			font-family: Recoleta;
			font-display: swap;
			src: url('https://s1.wp.com/i/fonts/recoleta/400.woff2')
		}
	</style>
	
<!-- Jetpack Open Graph Tags -->
<meta property="og:type" content="website" />
<meta property="og:title" content="WordPress.com en Español" />
<meta property="og:description" content="Descubre nuevas funciones, conoce a miembros de la comunidad de WordPress.com e inspírate para escribir un blog." />
<meta property="og:url" content="https://wordpress.com/es/blog/" />
<meta property="og:site_name" content="WordPress.com en Español" />
<meta property="og:image" content="https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=200&#038;ts=1705426990" />
<meta property="og:image:width" content="200" />
<meta property="og:image:height" content="200" />
<meta property="og:image:alt" content="" />
<meta property="og:locale" content="es_ES" />
<meta name="twitter:creator" content="@eswordpresscom" />
<meta name="twitter:site" content="@eswordpresscom" />
<meta name="twitter:description" content="Descubre nuevas funciones, conoce a miembros de la comunidad de WordPress.com e inspírate para escribir un blog." />
<meta name="twitter:app:name:iphone" content="Jetpack" />
<meta name="twitter:app:id:iphone" content="1565481562" />
<meta name="twitter:app:name:ipad" content="Jetpack" />
<meta name="twitter:app:id:ipad" content="1565481562" />
<meta name="twitter:app:name:googleplay" content="Jetpack" />
<meta name="twitter:app:id:googleplay" content="com.jetpack.android" />

<!-- End Jetpack Open Graph Tags -->
<link rel='openid.server' href='https://wordpress.com/es/blog/?openidserver=1' />
<link rel='openid.delegate' href='https://wordpress.com/es/blog/' />
<link rel="search" type="application/opensearchdescription+xml" href="https://wordpress.com/es/blog/osd.xml" title="WordPress.com en Español" />
<link rel="search" type="application/opensearchdescription+xml" href="https://s1.wp.com/opensearch.xml" title="WordPress.com" />
<script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"WebPage","headline":"WordPress.com en Espa\u00f1ol","url":"https:\/\/wordpress.com\/es\/blog"}</script><link rel="shortcut icon" type="image/vnd.microsoft.icon" href="//s1.wp.com/i/favicon.ico" sizes="16x16 32x32">
<link rel="shortcut icon" type="image/x-icon" href="//s1.wp.com/i/favicon.ico" sizes="16x16 32x32">
<link rel="icon" type="image/x-icon" href="//s1.wp.com/i/favicon.ico" sizes="16x16 32x32">
<link rel="icon" type="image/png" href="//s1.wp.com/i/favicons/favicon-64x64.png" sizes="64x64">
<link rel="icon" type="image/png" href="//s1.wp.com/i/favicons/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="//s1.wp.com/i/favicons/android-chrome-192x192.png" sizes="192x192">
<link rel="apple-touch-icon" sizes="57x57" href="//s1.wp.com/i/favicons/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="//s1.wp.com/i/favicons/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="//s1.wp.com/i/favicons/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="//s1.wp.com/i/favicons/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="//s1.wp.com/i/favicons/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="//s1.wp.com/i/favicons/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="//s1.wp.com/i/favicons/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="//s1.wp.com/i/favicons/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="//s1.wp.com/i/favicons/apple-touch-icon-180x180.png">
<link rel="alternate" hreflang="x-default" href="https://wordpress.com/blog/" />
	<link rel="alternate" hreflang="en" href="https://wordpress.com/blog/" />
	<link rel="alternate" hreflang="es" href="https://wordpress.com/es/blog/" />
	<link rel="alternate" hreflang="fr" href="https://wordpress.com/fr/blog/" />
	<link rel="alternate" hreflang="ja" href="https://wordpress.com/ja/blog/" />
	<link rel="alternate" hreflang="pt-br" href="https://wordpress.com/pt-br/blog/" />
<link rel="canonical" href="https://wordpress.com/es/blog/" />
<meta name="application-name" content="WordPress.com en Español" /><meta name="msapplication-window" content="width=device-width;height=device-height" /><meta name="msapplication-tooltip" content="Blog de Noticias de la Comunidad WordPress.com" /><meta name="msapplication-task" content="name=Suscribirse;action-uri=https://wordpress.com/es/blog/feed/;icon-uri=https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=16" /><meta name="msapplication-task" content="name=Registrar un blog gratuito;action-uri=http://wordpress.com/signup/;icon-uri=https://s1.wp.com/i/favicon.ico" /><meta name="msapplication-task" content="name=Ayuda de WordPress.com;action-uri=http://support.wordpress.com/;icon-uri=https://s1.wp.com/i/favicon.ico" /><meta name="msapplication-task" content="name=Foros de WordPress.com;action-uri=http://forums.wordpress.com/;icon-uri=https://s1.wp.com/i/favicon.ico" /><meta name="description" content="Descubre nuevas funciones, conoce a miembros de la comunidad de WordPress.com e inspírate para escribir un blog." />
			<link rel="stylesheet" id="custom-css-css" type="text/css" href="https://s2.wp.com/?custom-css=1&#038;csblog=Lavs&#038;cscache=6&#038;csrev=3" />
			<!-- Your Google Analytics Plugin is missing the tracking ID -->

<script type="text/javascript">
<!--
function gotoFunction() { window.location.href = document.language.languagesel.options[document.language.languagesel.selectedIndex].value; }
// -->
</script>


<link rel="fluid-icon" href="https://s0.wp.com/wp-content/themes/h4/i/fluidicon.png" title="WordPress.com" />
</head>

<body class="wpcomblog admin-bar-hidden">

	<script type="text/javascript" charset="utf-8">
		jQuery(document).ready(function(){
			// Fix internal links with fixed header.
			if ( location.hash ) {
				setTimeout( function() {
					jQuery('body').scrollTop( jQuery(location.hash).offset().top - 75 );
				}, 1000 );
			}
		} );
	</script>


	
	
			<nav class="x-wpcom-global-nav x-nav" aria-label="WordPress.com">
			<ul class="x-nav-list">
				<li class="x-nav-item">
					<a role="menuitem" class="x-nav-link x-nav-link--logo x-link" href="https://wordpress.com/es/">
						<svg class="x-icon x-icon--logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 36" role="presentation" aria-label="Flujos de WordPress.com"><path d="M13 3c7.17 0 13 5.83 13 13s-5.83 13-13 13S0 23.17 0 16 5.83 3 13 3Zm.2 14.02-3.5 10.2a11.7 11.7 0 0 0 7.18-.2l-.08-.16-3.6-9.84ZM2.33 11.24A11.69 11.69 0 0 0 7.9 26.52Zm20.94-.85a11.03 11.03 0 0 1-.81 5.39L18.88 26.1a11.68 11.68 0 0 0 4.38-15.7Zm100.33 3.43c1-.02 2 .1 2.95.38v2.04a9.87 9.87 0 0 0-2.75-.43c-.88 0-1.7.29-1.7 1.04h.01c0 1.67 4.93.78 4.9 4.23 0 2.48-2.21 3.17-4.53 3.17-1-.02-1.98-.22-2.9-.59v-2.03c.92.33 2.19.63 2.99.63 1.13 0 1.9-.23 1.9-1.08 0-1.74-4.92-.82-4.92-4.39 0-1.84 1.67-2.97 4.05-2.97Zm-19 0h.24c2.97.12 4.02 2.25 4.02 4.29.01.48-.02.97-.08 1.46h-6.36c.06 2.17 1.29 2.67 3.13 2.67 1 0 1.94-.23 2.97-.61v2.05c-1.18.38-2.41.57-3.65.57-3.16 0-5.1-1.57-5.1-5.27 0-2.69 1.65-5.16 4.83-5.16Zm33.25 0c.95 0 1.9.16 2.8.48v2.1a8.2 8.2 0 0 0-2.76-.57c-1.51 0-2.78.79-2.78 3.12v.23c.08 2.36 1.32 3.06 2.9 3.06.77 0 1.64-.17 2.77-.6v2.04c-1 .34-1.91.57-3.08.57-3.7 0-5.16-2.11-5.16-5.18 0-3.25 2.03-5.25 5.31-5.25Zm-23.21 0c1-.02 1.98.11 2.94.38v2.04a9.87 9.87 0 0 0-2.75-.43c-.88 0-1.69.29-1.69 1.04 0 1.67 4.93.78 4.91 4.23 0 2.48-2.22 3.17-4.54 3.17-1-.02-1.98-.22-2.9-.59v-2.03c.93.33 2.2.63 3 .63 1.12 0 1.9-.23 1.9-1.08 0-1.74-4.93-.82-4.93-4.39 0-1.84 1.68-2.97 4.06-2.97ZM78.42 10v14h-2.33v-.92a5.45 5.45 0 0 1-3.2 1.17c-2.19 0-4.05-1.51-4.05-4.82 0-3.33 1.86-5.6 5.26-5.6a9 9 0 0 1 1.86.23V10h2.46Zm68.92 3.8.25.01c3.21.11 4.76 2.28 4.76 5.23 0 3.02-1.6 5.2-5.01 5.2-3.41 0-5.01-2.18-5.01-5.2 0-3.03 1.61-5.23 5.01-5.23Zm-92.53 0 .26.01c3.21.11 4.77 2.28 4.77 5.23 0 3.02-1.62 5.2-5.02 5.2-3.4 0-5-2.18-5-5.2 0-3.03 1.6-5.23 5-5.23Zm76.32 7.65V24h-2.47v-2.55h2.47Zm35.33-7.64-.01.01c2.01 0 3.15 1.4 3.15 3.32V24h-2.46v-6.26c0-1.41-.5-1.84-1.32-1.84-.7 0-1.68.4-2.6 1V24h-2.46v-6.27c0-1.4-.51-1.84-1.32-1.84a5.3 5.3 0 0 0-2.61.98V24h-2.48v-9.94h2.34v1.03a6.63 6.63 0 0 1 3.38-1.27c1.15 0 2.2.39 2.71 1.5l.3-.19c1.1-.74 2.32-1.32 3.38-1.32Zm-68.4.15c.22 0 .45.02.67.04v2.14h-.25c-1.57 0-2.51.48-3.28 1.94V24h-2.46v-9.94h2.31v1.63h.08l.1-.18a3 3 0 0 1 2.61-1.55ZM34.7 10l2.68 11.08 2.45-8.78-.65-2.3h2.81l2.79 10.72L47.57 10h2.55l-4 14h-2.95l-2.13-7.49L38.76 24H35.8L32 10h2.7Zm32.44 3.96c.22 0 .45.02.67.04v2.14h-.25c-1.57 0-2.51.48-3.28 1.94V24h-2.47v-9.94h2.3v1.64h.09v.01a3.06 3.06 0 0 1 2.94-1.75ZM86.04 10c2.99 0 5.16 1.51 5.16 4.51 0 3.01-2.17 4.62-5.16 4.62h-1.93V24h-2.64V10ZM13 4.31c-4.08 0-7.68 2.1-9.77 5.27l.76.01c1.22 0 3.11-.14 3.11-.14.63-.04.7.88.08.96h-.09c-.19.03-.7.08-1.25.1l4.25 12.67 2.56-7.67-1.82-5c-.63-.03-1.22-.1-1.22-.1-.63-.04-.56-1 .07-.96 0 0 .82.06 1.71.1l.36.02 1 .02h.17c1.22 0 2.95-.14 2.95-.14.63-.04.7.88.08.96h-.08c-.2.03-.7.08-1.26.1l4.22 12.57 1.17-3.9c.6-1.51.89-2.77.89-3.77 0-1.45-.52-2.45-.96-3.22-.6-.97-1.15-1.78-1.15-2.74 0-1.08.81-2.08 1.96-2.08l.15.01A11.64 11.64 0 0 0 13 4.31ZM74.35 15.8c-1.88 0-2.96 1.19-2.96 3.47 0 2.11.87 3.01 2.23 3.01.79 0 1.54-.4 2.34-1.13h-.01V16.1c-.5-.2-1.05-.31-1.6-.31Zm-19.52.03c-1.61 0-2.47 1.04-2.47 3.22 0 2.17.86 3.21 2.46 3.21h.16c1.44-.07 2.23-1.04 2.29-2.98v-.23c0-2.18-.84-3.22-2.44-3.22Zm92.51 0c-1.61 0-2.46 1.04-2.46 3.22 0 2.17.86 3.21 2.46 3.21h.16c1.44-.07 2.22-1.04 2.28-2.98v-.23c0-2.18-.84-3.22-2.44-3.22Zm-42.78-.14c-1.23 0-1.98.88-2.13 2.26h3.85c0-1.21-.4-2.26-1.72-2.26Zm-18.5-3.61h-1.95v5.01h1.95c1.65 0 2.38-1 2.38-2.57 0-1.56-.78-2.44-2.38-2.44Z" /></svg>											</a>
				</li>

									<li class="x-nav-item x-nav-item--wide">
						<button role="menuitem" class="x-nav-link x-link" data-dropdown-trigger="products" aria-haspopup="true" aria-expanded="false">
							Productos <span class="x-nav-link-chevron" aria-hidden="true"></span>
						</button>
					</li>
										<li class="x-nav-item x-nav-item--wide">
						<button role="menuitem" class="x-nav-link x-link" data-dropdown-trigger="features" aria-haspopup="true" aria-expanded="false">
							Funcionalidades <span class="x-nav-link-chevron" aria-hidden="true"></span>
						</button>
					</li>
										<li class="x-nav-item x-nav-item--wide">
						<button role="menuitem" class="x-nav-link x-link" data-dropdown-trigger="resources" aria-haspopup="true" aria-expanded="false">
							Recursos <span class="x-nav-link-chevron" aria-hidden="true"></span>
						</button>
					</li>
					
				<li class="x-nav-item x-nav-item--wide">
					<a role="menuitem" class="x-nav-link x-link" href="https://wordpress.com/es/pricing/">
						Planes y Precios					</a>
				</li>
			</ul>

			<ul class="x-nav-list">
									<li class="x-nav-item x-nav-item--wide">
						<a role="menuitem" class="x-nav-link x-link" href="https://wordpress.com/log-in/es">
							Iniciar sesión						</a>
					</li>
								<li class="x-nav-item x-nav-item--wide">
					<a role="menuitem" class="x-nav-link x-nav-link--primary x-link" href="https://wordpress.com/start/es">
						Comenzar					</a>
				</li>
				<li class="x-nav-item x-nav-item--narrow">
					<button role="menuitem" class="x-nav-link x-nav-link--menu x-link" aria-haspopup="true" aria-expanded="false">
						<span class="x-hidden">Menú</span>
								<span class="x-icon x-icon--menu">
			<span></span>
			<span></span>
			<span></span>
		</span>
							</button>
				</li>
			</ul>
		</nav>

				<div class="x-dropdown">
			<div class="x-dropdown-top">
				<div class="x-dropdown-top-fill"></div>
			</div>
			<div class="x-dropdown-middle"></div>
			<div class="x-dropdown-bottom">
				<div class="x-dropdown-bottom-fill"></div>
			</div>

							<div class="x-dropdown-content" data-dropdown-name="products" role="menu" aria-label="Productos" aria-hidden="true">
					<ul>
													<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/hosting/" tabindex="-1">
									Alojamiento de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/domains/" tabindex="-1">
									Dominios								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/website-builder/" tabindex="-1">
									Creador de webs								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/create-blog/" tabindex="-1">
									Crea un blog								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/newsletter/" tabindex="-1">
									Newsletter								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/professional-email/" tabindex="-1">
									Correo electrónico profesional								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/website-design-service/" tabindex="-1">
									Servicio de diseño web								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/ecommerce/" tabindex="-1">
									Commerce								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/create-a-course/" tabindex="-1">
									Creador de cursos								</a>
							</li>
														<li class="x-nav-show_separator_above">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=top_nav" tabindex="-1">
									Soluciones para empresas<span class="x-nav__external-link-icon">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="x-icon x-icon--external" role="presentation" aria-hidden="true">
			<path d="M5.5 0v1h1.795L2.38 5.915l.705.705L8 1.705V3.5h1V0H5.5zM8 8H1V1h3V0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V5H8v3z" />
		</svg></span>
										</a>
							</li>
												</ul>
				</div>
								<div class="x-dropdown-content" data-dropdown-name="features" role="menu" aria-label="Funcionalidades" aria-hidden="true">
					<ul>
													<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/features/" tabindex="-1">
									Resumen								</a>
							</li>
														<li class="x-nav-show_separator_above">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/themes" tabindex="-1">
									Temas de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/plugins" tabindex="-1">
									Plugins de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/google/" tabindex="-1">
									Google Apps								</a>
							</li>
												</ul>
				</div>
								<div class="x-dropdown-content" data-dropdown-name="resources" role="menu" aria-label="Recursos" aria-hidden="true">
					<ul>
													<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/support/" tabindex="-1">
									Ayuda de WordPress.com								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/blog/" tabindex="-1">
									Noticias de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/go/" tabindex="-1">
									Consejos para crear tu web								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/business-name-generator/" tabindex="-1">
									Generador de nombres de empresa								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/logo-maker/" tabindex="-1">
									Creador de logos								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/discover" tabindex="-1">
									Descubrir nuevas publicaciones								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/tags" tabindex="-1">
									Etiquetas populares								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/read/search" tabindex="-1">
									Buscar blog								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/webinars/" tabindex="-1">
									Webinars diarios								</a>
							</li>
												</ul>
				</div>
						</div>
				<div class="x-menu" role="menu" aria-label="Menú de navegación de WordPress.com" aria-hidden="true">
			<div class="x-menu-overlay"></div>
			<div class="x-menu-content">
				<button class="x-menu-button x-link" tabindex="-1">
					<span class="x-hidden">Cerrar el menú de navegación</span>
					<span class="x-icon x-icon--close">
					<span></span>
					<span></span>
				</span>
				</button>
				<div class="x-menu-list">
					<div class="x-menu-list-title">
						Comenzar					</div>
					<ul class="x-menu-grid">
													<li class="x-menu-grid-item">
								<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/start/es" tabindex="-1">
									Registro <span class="x-menu-link-chevron" aria-hidden="true"></span>
								</a>
							</li>
							<li class="x-menu-grid-item">
								<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/log-in/es" tabindex="-1">
									Iniciar sesión <span class="x-menu-link-chevron" aria-hidden="true"></span>
								</a>
							</li>
											</ul>
				</div>
				<div class="x-menu-list">
					<div class="x-hidden">
						Acerca de					</div>
					<ul class="x-menu-grid">
						<li class="x-menu-grid-item">
							<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/pricing/" tabindex="-1">
								Planes y Precios							</a>
						</li>
					</ul>
				</div>

									<div class="x-menu-list">
						<div class="x-menu-list-title">
							Productos						</div>
						<ul class="x-menu-grid">
															<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/hosting/" tabindex="-1">
										Alojamiento de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/domains/" tabindex="-1">
										Dominios																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/website-builder/" tabindex="-1">
										Creador de webs																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/create-blog/" tabindex="-1">
										Crea un blog																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/newsletter/" tabindex="-1">
										Newsletter																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/professional-email/" tabindex="-1">
										Correo electrónico profesional																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/website-design-service/" tabindex="-1">
										Servicio de diseño web																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/ecommerce/" tabindex="-1">
										Commerce																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/create-a-course/" tabindex="-1">
										Creador de cursos																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=top_nav" tabindex="-1">
										Soluciones para empresas										<span class="x-nav__external-link-icon">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="x-icon x-icon--external" role="presentation" aria-hidden="true">
			<path d="M5.5 0v1h1.795L2.38 5.915l.705.705L8 1.705V3.5h1V0H5.5zM8 8H1V1h3V0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V5H8v3z" />
		</svg></span>
											</a>
								</li>
														</ul>
					</div>
										<div class="x-menu-list">
						<div class="x-menu-list-title">
							Funcionalidades						</div>
						<ul class="x-menu-grid">
															<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/features/" tabindex="-1">
										Resumen																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/themes" tabindex="-1">
										Temas de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/plugins" tabindex="-1">
										Plugins de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/google/" tabindex="-1">
										Google Apps																			</a>
								</li>
														</ul>
					</div>
										<div class="x-menu-list">
						<div class="x-menu-list-title">
							Recursos						</div>
						<ul class="x-menu-grid">
															<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/support/" tabindex="-1">
										Ayuda de WordPress.com																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/blog/" tabindex="-1">
										Noticias de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/go/" tabindex="-1">
										Consejos para crear tu web																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/business-name-generator/" tabindex="-1">
										Generador de nombres de empresa																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/logo-maker/" tabindex="-1">
										Creador de logos																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/discover" tabindex="-1">
										Descubrir nuevas publicaciones																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/tags" tabindex="-1">
										Etiquetas populares																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/read/search" tabindex="-1">
										Buscar blog																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/webinars/" tabindex="-1">
										Webinars diarios																			</a>
								</li>
														</ul>
					</div>
									<div class="x-menu-list is-mobile-app-supported">
					<div class="x-menu-list-title">
						Aplicación de Jetpack					</div>
					<ul class="x-menu-grid">
						<li class="x-menu-grid-item is-ios">
							<a role="menuitem" class="x-menu-link x-link" href="https://apps.wordpress.com/es/get/?campaign=wpcom-log-out-home-global-nav" tabindex="-1">
								<img src="https://wpcom.files.wordpress.com/2023/06/group-1000004724.png" loading="lazy" alt="" role="presentation" width="120" height="34">
							</a>
						</li>
						<li class="x-menu-grid-item is-android">
							<a role="menuitem" class="x-menu-link x-link" href="https://apps.wordpress.com/es/get/?campaign=wpcom-log-out-home-global-nav" tabindex="-1">
								<img src="https://wpcom.files.wordpress.com/2023/06/play-store-logo.png" loading="lazy" alt="" role="presentation" width="120" height="34">
							</a>
						</li>
						<li class="x-menu-grid-item">
							<a role="menuitem" class="x-menu-link x-link" href="https://apps.wordpress.com/es/mobile" tabindex="-1">
								Más información <span class="x-menu-link-chevron" aria-hidden="true"></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		

<div id="wrapper" class="en-wrapper">
<script type="text/javascript" charset="utf-8">
	/* <![CDATA[ */
jQuery(document).ready(function() {
	jQuery('#archive-button').css('display','block');
	jQuery('#archives').css('overflow', 'visible');

		jQuery('#archives li:gt(0)').each(function() {
			jQuery(this).css('display','none');
		});

	jQuery('#archives li:gt(1)').css('display', 'none');

	jQuery('#archive-button').click(function() {
		jQuery('#archives li:gt(0)').each(function() {
			jQuery(this).toggle();
		});
	});

	jQuery('#s').click(function() {
		jQuery('#s').val('');
	});
});
/* ]]> */
</script>

	
			<style type="text/css">
			#post-focus.has-header-img {
				background-image: url("https://es-blog.files.wordpress.com/2024/01/wordpress-wallpaper-26.webp?w=2000");
			}
		</style>
	
	<div id="blog-header" class="has-header-img">
		<div class="inner">
			<h2 id="blog-title"><a href="https://wordpress.com/es/blog">El blog de WordPress.com</a></h2>
			<p id="blog-tagline"><a href="https://wordpress.com/es/blog">WordPress.com en Español</a></p>
		</div>
	</div>

	<div id="post-focus" class="has-header-img post-3994 home">
		<div id="post-focus-alignment">
					</div>
	</div>

	<div id="blog-home">
		<div id="post-focus-metadata" class="post-3994 home">
			<div class="post-title-top">
				<h2 class="post-title"><a href="https://wordpress.com/es/blog/2024/01/15/resumen-de-2023-en-wordpress-com/" rel="bookmark" title="Enlace permanente a Resumen de 2023 en&nbsp;WordPress.com">Resumen de 2023 en&nbsp;WordPress.com</a></h2>
								<div class="entry">
					<p>Lo más destacado de 2023.</p>
				</div>
							</div>
			<div class="post-meta-top">
				<div id="wpcom-comments-date">
					<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>15/01/2024</span>
					<span class="divider"> / </span>
					<a class="comments" href="https://wordpress.com/es/blog/2024/01/15/resumen-de-2023-en-wordpress-com/#respond"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>0</a>
				</div>
				<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />				<p class="post-author-name">Magdalena Oliva</p>
			</div>
		</div>

		<div id="post-river">
				<div class="post has-postthumbnail" id="post-3986">

									<a href="https://wordpress.com/es/blog/2024/01/08/webinars-aprende-a-disenar-tu-propio-tema-y-descubre-todo-lo-que-necesitas-saber-los-fundamentos-del-seo/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2024/01/design-your-own-theme-blog-header402x.jpg?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2024/01/08/webinars-aprende-a-disenar-tu-propio-tema-y-descubre-todo-lo-que-necesitas-saber-los-fundamentos-del-seo/">Webinars: aprende a diseñar tu propio tema y descubre todo lo que necesitas saber los fundamentos del SEO </a></h2>
					<div class="entrytext">
						<p>¡2024 llega cargado de novedades en nuestros webinars! Estamos encantados de presentarte nuestro nuevo centro de aprendizaje, una página que reúne todos nuestros recursos educativos para ofrecerte una experiencia completa y más accesible.&nbsp; Hemos trabajado para diseñar un lugar más intuitivo y fácil de navegar. Ahora podrás ver los horarios &hellip;</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>08/01/2024</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2024/01/08/webinars-aprende-a-disenar-tu-propio-tema-y-descubre-todo-lo-que-necesitas-saber-los-fundamentos-del-seo/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>1</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://0.gravatar.com/avatar/0785f4ee07eb77d7a450cf209cf5d47746ad83a4ed9b77ec4f67a6e94e9cee27?s=32&#038;d=identicon&#038;r=G' srcset='https://0.gravatar.com/avatar/0785f4ee07eb77d7a450cf209cf5d47746ad83a4ed9b77ec4f67a6e94e9cee27?s=32&#038;d=identicon&#038;r=G 1x, https://0.gravatar.com/avatar/0785f4ee07eb77d7a450cf209cf5d47746ad83a4ed9b77ec4f67a6e94e9cee27?s=48&#038;d=identicon&#038;r=G 1.5x, https://0.gravatar.com/avatar/0785f4ee07eb77d7a450cf209cf5d47746ad83a4ed9b77ec4f67a6e94e9cee27?s=64&#038;d=identicon&#038;r=G 2x, https://0.gravatar.com/avatar/0785f4ee07eb77d7a450cf209cf5d47746ad83a4ed9b77ec4f67a6e94e9cee27?s=96&#038;d=identicon&#038;r=G 3x, https://0.gravatar.com/avatar/0785f4ee07eb77d7a450cf209cf5d47746ad83a4ed9b77ec4f67a6e94e9cee27?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Pilar Perona</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3966">

									<a href="https://wordpress.com/es/blog/2024/01/02/bloganuary-ya-esta-aqui/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2024/01/bloganurary-announcement-blog-header.webp?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2024/01/02/bloganuary-ya-esta-aqui/">¡Bloganuary ya está&nbsp;aquí!</a></h2>
					<div class="entrytext">
						<p>Este enero, únete a miles de blogueros en un reto mensual.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>02/01/2024</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2024/01/02/bloganuary-ya-esta-aqui/#respond"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>0</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3943">

									<a href="https://wordpress.com/es/blog/2023/12/27/wordpress-com-tus-propositos-de-2024-25-de-descuento-en-todos-los-planes-de-pago/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/12/eoy-blog-header-2.png?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/12/27/wordpress-com-tus-propositos-de-2024-25-de-descuento-en-todos-los-planes-de-pago/">WordPress.com + tus propósitos de año nuevo = 25 % de descuento en todos los planes de&nbsp;pago</a></h2>
					<div class="entrytext">
						<p>Ya estamos en los últimos días de 2023, queda poco tiempo para aprovechar el 25 % de descuento y hacer realidad los propósitos de año nuevo de tu web. Por si no lo sabías, estamos ofreciendo un 25 % de descuento en todos los planes de pago anuales hasta fin &hellip;</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>27/12/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/12/27/wordpress-com-tus-propositos-de-2024-25-de-descuento-en-todos-los-planes-de-pago/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>8</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3931">

									<a href="https://wordpress.com/es/blog/2023/12/26/recien-salidos-del-horno-nuevos-temas-para-wordpress-com-diciembre-2023/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/12/december-themes.webp?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/12/26/recien-salidos-del-horno-nuevos-temas-para-wordpress-com-diciembre-2023/">Recién salidos del horno: nuevos temas para WordPress.com (diciembre&nbsp;2023)</a></h2>
					<div class="entrytext">
						<p>Cinco versátiles nuevos temas de WordPress que se adaptan a todas tus necesidades, incluyendo el lanzamiento de Twenty Twenty-Four.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>26/12/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/12/26/recien-salidos-del-horno-nuevos-temas-para-wordpress-com-diciembre-2023/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>3</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3913">

									<a href="https://wordpress.com/es/blog/2023/12/21/cumple-tus-propositos-para-2024-25-de-descuento-en-todos-los-planes-anuales-hasta-final-de-2023/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/12/eoy-blog-header.webp?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/12/21/cumple-tus-propositos-para-2024-25-de-descuento-en-todos-los-planes-anuales-hasta-final-de-2023/">Cumple tus propósitos para 2024: 25 % de descuento en todos los planes anuales hasta final de&nbsp;2023</a></h2>
					<div class="entrytext">
						<p>Date un capricho con WordPress.com.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>21/12/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/12/21/cumple-tus-propositos-para-2024-25-de-descuento-en-todos-los-planes-anuales-hasta-final-de-2023/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>4</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3898">

									<a href="https://wordpress.com/es/blog/2023/12/18/grabacion-y-resumen-del-state-of-the-word-2023/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/12/logo.png?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/12/18/grabacion-y-resumen-del-state-of-the-word-2023/">Grabación y resumen del State of the Word&nbsp;2023</a></h2>
					<div class="entrytext">
						<p>Una celebración de 2023 en WordPress y una mirada al futuro.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>18/12/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/12/18/grabacion-y-resumen-del-state-of-the-word-2023/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>6</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3869">

									<a href="https://wordpress.com/es/blog/2023/12/13/mejora-tu-experiencia-en-wordpress-con-la-nueva-actualizacion-de-la-app-de-jetpack/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/12/featured-image.webp?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/12/13/mejora-tu-experiencia-en-wordpress-con-la-nueva-actualizacion-de-la-app-de-jetpack/">Mejora tu experiencia en WordPress con la nueva actualización de la app de&nbsp;Jetpack</a></h2>
					<div class="entrytext">
						<p>La última actualización de la app de Jetpack ofrece una experiencia WordPress móvil mejorada que cubre todas tus necesidades.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>13/12/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/12/13/mejora-tu-experiencia-en-wordpress-con-la-nueva-actualizacion-de-la-app-de-jetpack/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>11</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3878">

									<a href="https://wordpress.com/es/blog/2023/12/06/state-of-the-word-2023-acompananos-en-directo-el-11-de-diciembre/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/12/img_8661.jpg?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/12/06/state-of-the-word-2023-acompananos-en-directo-el-11-de-diciembre/">State of the Word 2023: acompáñanos en directo el 11 de&nbsp;diciembre</a></h2>
					<div class="entrytext">
						<p>Acompáñanos el 11 de diciembre en el State of the Word de WordPress anual.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>06/12/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/12/06/state-of-the-word-2023-acompananos-en-directo-el-11-de-diciembre/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>8</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div class="post has-postthumbnail" id="post-3826">

									<a href="https://wordpress.com/es/blog/2023/11/29/redisena-tu-web-sin-complicaciones-gracias-a-la-sincronizacion-de-los-sitios-de-pruebas/">
						<div class="postthumbnail" style="background-image: url( 'https://es-blog.files.wordpress.com/2023/11/staging-sites-sync-wordpress.com_.webp?resize=350,350' );"></div>
					</a>
				
				<div class="post-meta">
					<h2><a href="https://wordpress.com/es/blog/2023/11/29/redisena-tu-web-sin-complicaciones-gracias-a-la-sincronizacion-de-los-sitios-de-pruebas/">Rediseña tu web sin complicaciones gracias a la sincronización de los sitios de&nbsp;pruebas</a></h2>
					<div class="entrytext">
						<p>Prueba sin miedo nuevas ideas y diseños antes de publicarlos.</p>
					</div>
					<div id="wpcom-comments-date">
						<span class="date"><svg class="icon icon-clock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="time"><path d="M12,4c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S7.589,4,12,4 M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10 s10-4.477,10-10S17.523,2,12,2L12,2z M15.8,15.4L13,11.667V7h-2v5.333l3.2,4.266L15.8,15.4z"/></g><g id="Layer_1"></g></svg>29/11/2023</span>
						<span class="divider"> / </span>
						<a class="comments" href="https://wordpress.com/es/blog/2023/11/29/redisena-tu-web-sin-complicaciones-gracias-a-la-sincronizacion-de-los-sitios-de-pruebas/#comments"><svg class="icon icon-comments" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="comment"><path d="M3,6v9c0,1.105,0.895,2,2,2h9v5l5.325-3.804C20.376,17.446,21,16.233,21,14.942V6c0-1.105-0.895-2-2-2H5C3.895,4,3,4.895,3,6z"/></g><g id="Layer_1"></g></svg>9</a>
					</div>
					<div id="wpcom-author">
						<img alt='' src='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G' srcset='https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=32&#038;d=identicon&#038;r=G 1x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=48&#038;d=identicon&#038;r=G 1.5x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=64&#038;d=identicon&#038;r=G 2x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=96&#038;d=identicon&#038;r=G 3x, https://2.gravatar.com/avatar/2fcc358229bc7d888ca827e5517d9158af90b7c379927acd6b17fa44731bf334?s=128&#038;d=identicon&#038;r=G 4x' class='avatar avatar-32' height='32' width='32' loading='lazy' decoding='async' />						<p>Magdalena Oliva</p>
					</div>
				</div>
			</div>
						<div id="home-nav">
				<a class="button" href="https://wordpress.com/es/blog/2024/">
					<svg class="icon icon-calendar" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g id="calendar"><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.895,4,3,4.896,3,6v13c0,1.104,0.895,2,2,2h14c1.104,0,2-0.896,2-2V6C21,4.896,20.104,4,19,4zM19,19H5V8h14V19z"/></g><g id="Layer_1"></g></svg>
					Todas las entradas del 2024				</a>
			</div>
		</div>

		<div id="home-sidebar">
			<div class="widget search">
				<h6>Buscar</h6>

				<div id="search">
					<form id="searchform" name="searchform" method="get" action="https://wordpress.com/es/blog">
						<input type="text" id="s" name="s" placeholder="Buscar en este blog"  />
					</form>
				</div>
			</div>

			
																				</div>
	</div>

<div class="enblog-cta">
	<div class="enblog-cta-container">
		<h2 class="enblog-cta-headline">Crea un blog o sitio web de forma gratuita</h2>
		<p><a id="enblog-cta-footer" class="button is-primary is-large is-cta wpcom-button" href="//wordpress.com/start/?ref=enblog-cta-footer">Comenzar</a></p>
	</div>
</div>

<script type="text/javascript">
	window._tkq = window._tkq || [];
	jQuery( function($) {
		$( '.wpcom-button' ).on( 'click', function() {
			_tkq.push( [ 'recordEvent', 'wpcom_wpblog_signup_click', {} ] );
		});
	});
</script>



<!-- google_ad_section_start(weight=ignore) -->
<div id="footer" class="no-feedbag">
			<div class="c0">
					<h4>Comenzar</h4>
			<a class="button-primary" href="https://wordpress.com/start/es?ref=websitebluefooter">Crea tu propia página web</a>
				</div>
									<div class="c0">
				<h4>Productos</h4>
				<ul>
																		<li><a href="https://wordpress.com/es/hosting/" title="">Alojamiento de WordPress</a></li>
																								<li><a href="https://wordpress.com/es/domains/" title="">Dominios</a></li>
																								<li><a href="https://wordpress.com/es/website-builder/" title="">Creador de webs</a></li>
																								<li><a href="https://wordpress.com/es/create-blog/" title="">Crea un blog</a></li>
																								<li><a href="https://wordpress.com/es/professional-email/" title="">Correo electrónico profesional</a></li>
																								<li><a href="https://wordpress.com/es/p2/?ref=wpcom-product-menu" title="">P2: WordPress para equipos</a></li>
																								<li data-is-external="true"><a href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=footer" title="">Soluciones para empresas</a></li>
																								<li><a href="https://wordpress.com/es/website-design-service/?ref=footer-link" title="">Servicio de diseño web</a></li>
															</ul>
			</div>
								<div class="c1">
				<h4>Funcionalidades</h4>
				<ul>
																		<li><a href="https://wordpress.com/es/features/" title="">Resumen</a></li>
																								<li><a href="https://wordpress.com/es/s" title="">Temas de WordPress</a></li>
																								<li><a href="https://wordpress.com/es/plugins" title="">Plugins de WordPress</a></li>
																								<li><a href="https://wordpress.com/es/google/" title="">Google Apps</a></li>
															</ul>
			</div>
								<div class="c2">
				<h4>Recursos</h4>
				<ul>
																		<li><a href="https://wordpress.com/es/support/" title="">Ayuda de WordPress.com</a></li>
																								<li><a href="https://wordpress.com/es/forums/" title="">Foros WordPress</a></li>
																								<li><a href="https://wordpress.com/es/blog/" title="">Noticias de WordPress</a></li>
																								<li><a href="https://wordpress.com/es/go/" title="">Consejos para crear tu web</a></li>
																								<li><a href="https://wordpress.com/es/business-name-generator/" title="">Generador de nombres de empresa</a></li>
																								<li><a href="https://wordpress.com/es/logo-maker/" title="">Creador de logos</a></li>
																								<li><a href="https://wordpress.com/es/tags/" title="">Temas populares</a></li>
																								<li><a href="https://wordpress.com/es/webinars/" title="">Webinars diarios</a></li>
																								<li><a href="https://wordpress.com/es/learn/" title="">Aprender a usar WordPress</a></li>
																								<li><a href="https://developer.wordpress.com/" title="">Recursos para programadores</a></li>
															</ul>
			</div>
								<div class="c3">
				<h4>Empresa</h4>
				<ul>
																		<li><a href="https://wordpress.com/es/about/" title="">Acerca de</a></li>
																								<li><a href="https://wordpress.com/es/partners/" title="">Socios</a></li>
																								<li><a href="https://automattic.com/press/" title="">Prensa</a></li>
																								<li><a href="https://wordpress.com/es/tos/" title="">Condiciones del servicio</a></li>
																								<li><a href="https://automattic.com/es/privacy/" title="">Política de privacidad</a></li>
																								<li data-is-ccpa-dnsd-trigger="1" data-is-ccpa-dnsd="1"><a href="#" title="">No vendas ni compartas mi información personal</a></li>
																								<li data-is-ccpa="1"><a href="https://automattic.com/es/privacy/#ley-de-privacidad-del-consumidor-de-california-ccpa" title="">Aviso de privacidad para usuarios de California</a></li>
															</ul>
			</div>
				<div class="spacergif"></div>
			<p class="automattic">
		<span>An </span><a class="automattic-logo" href="https://automattic.com/">Automattic</a><span> Joint</span>	</p>
</div>
</div>


<script type="text/javascript">
<!--
addLoadEvent(function(){jQuery('#user_login').focus();});
// -->
</script>
<!--  -->
		<div class="jetpack-instant-search__widget-area" style="display: none">
							<div id="jetpack-search-filters-2" class="widget jetpack-filters widget_search">			<div id="jetpack-search-filters-2-wrapper" class="jetpack-instant-search-wrapper">
		</div></div>					</div>
					<!-- A8C Analytics [start] -->
			<script type="text/javascript">
				( function() {
					'use strict';

					var setupAnalytics = function() {
						window.a8cAnalyticsConfig = {"cookieBanner":{"version":"2","cssZIndex":50001,"skipBanner":false,"cookieDomain":"wordpress.com","v1CookieName":"sensitive_pixel_option","v2CookieName":"sensitive_pixel_options","v1Text":"Nuestra p\u00e1gina web usa cookies. Al continuar aceptas su uso. <a target=\"_blank\" href=\"https:\/\/automattic.com\/es\/cookies\/\">Obt\u00e9n m\u00e1s informaci\u00f3n<\/a>, incluyendo c\u00f3mo administrar las cookies.","v2Text":"Como empresa de c\u00f3digo abierto, nos tomamos tu privacidad muy en serio y queremos actuar con la m\u00e1xima transparencia. En resumen: utilizamos cookies para recopilar ciertos datos personales (como los datos de navegaci\u00f3n, las direcciones IP y otros identificadores \u00fanicos). Algunas de estas cookies son absolutamente necesarias para que todo funcione correctamente, mientras que otras las puedes elegir para optimizar tu experiencia al usar nuestro sitio y nuestros servicios. ","v2OptionsText":"Tu privacidad es extremamente importante para nosotros. Nosotros y nuestros socios utilizamos, almacenamos y procesamos tus datos personales para optimizar: nuestro <strong>sitio web<\/strong>, por ejemplo, al mejorar la seguridad o realizar an\u00e1lisis; las <strong>actividades de marketing<\/strong> para ofrecer servicios de marketing o contenidos relevantes y tu <strong>experiencia de usuario<\/strong>, por ejemplo, al recordar el nombre de tu cuenta, la configuraci\u00f3n del idioma o la informaci\u00f3n del carrito, cuando corresponda. Puedes personalizar la configuraci\u00f3n de las cookies a continuaci\u00f3n. Obt\u00e9n m\u00e1s informaci\u00f3n en nuestra <a href=\"https:\/\/automattic.com\/es\/privacy\/\" target=\"_blank\">pol\u00edtica de privacidad<\/a> y nuestra <a href=\"https:\/\/automattic.com\/es\/cookies\/\" target=\"_blank\">pol\u00edtica de cookies<\/a>.","v2EssentialOptionHeading":"Obligatorio","v2EssentialOptionText":"Estas cookies son fundamentales para que nuestros sitios web y servicios realicen funciones b\u00e1sicas y, asimismo, nos sirven para gestionar determinadas prestaciones, como las que permiten a los usuarios registrados autentificarse y realizar funciones relacionadas con la cuenta, las que almacenan las preferencias establecidas por los usuarios (como el nombre de la cuenta, el idioma y la ubicaci\u00f3n) y las que garantizan que nuestros servicios funcionen correctamente.","v2AnalyticsOptionHeading":"Estad\u00edsticas","v2AnalyticsOptionText":"Adem\u00e1s, nos permiten optimizar el rendimiento mediante la recopilaci\u00f3n de informaci\u00f3n sobre la forma en que los usuarios interact\u00faan con nuestros sitios web.","v2AdvertisingOptionHeading":"Publicidad","v2AdvertisingOptionText":"Estas cookies las configuramos, junto con nuestros socios publicitarios, para ofrecerte contenido relevante y entender la efectividad de ese contenido.","v1ButtonText":"Entendido","v2CustomizeButtonText":"Personalizar","v2AcceptAllButtonText":"Aceptar todas","v2AcceptSelectionButtonText":"Aceptar selecci\u00f3n","hiddenConsents":[],"isLoggedIn":false},"doNotSellDialog":{"contactEmailAddress":"privacypolicyupdates@automattic.com"},"adminAnalytics":"analytics-wpcom-admin.php","fireAnalyticsOptions":[]};
					};

					if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
						defQueue.items.push( setupAnalytics );
					} else {
						setupAnalytics();
					}
				} )();
			</script>

			<div style="display: none;" id="a8c-analytics">
	<script type="text/javascript">
	( function() {
		'use strict';

		/**
		 * Establish the farthest away parent from an element matching
		 * a given list of selectors. Selectors can be css classes, IDs,
		 * element types, etc. (e.g. '.my-class', '#my-id', 'div', etc.)
		 */
		const getLastMatchingAncestor = ( event, selectors ) => {
			let { target: element } = event;

			let foundElement = null;

			while ( element && !foundElement ) {
				for ( const selector of selectors ) {
					if ( element.matches( selector ) ) {
						foundElement = element;
						break;
					}
				}

				element = element.parentElement;
			}

			return foundElement;
		}

		/**
		 * Establish the closest parent from an element matching
		 * a given list of selectors. Selectors can be css classes, IDs,
		 * element types, etc. (e.g. '.my-class', '#my-id', 'div', etc.)
		 */
		const getClosestMatchingAncestor = ( event, selectors ) => {
			let { target: element } = event;
			let foundElement;

			for ( const selector of selectors ) {
				foundElement = element.closest( selector );
				if ( foundElement ) {
					break;
				}
			}

			return foundElement;
		}

		/**
		 * Main function to setup analytics.
		 */
		const setupAnalytics = () => {
			/**
			 * Returns the current page path.
			 */
			function getCurrentPagePath() {
				return window.location.pathname.replace( /^\/|\/$/g, '' );
			}

			/**
			 * Returns the current page name.
			 */
			function getCurrentPageName() {
				return getCurrentPagePath().replace( getLocaleInPagePathRegExp(), '' );
			}

			/**
			 * Returns the current page locale.
			 */
			function getCurrentPageLocale() {
				const currentPagePath = getLocaleInPagePathRegExp().exec( getCurrentPagePath() );
				return getCurrentPagePath !== null && getCurrentPagePath.length === 2 ? getCurrentPagePath[1] : '';
			}
			/**
			 * Helper function to extract locale from page path.
			 */
			function getLocaleInPagePathRegExp() {
				return /^(af|als|am|an|ar|arc|as|ast|av|ay|az|ba|bel|bg|bm|bn|bo|br|bs|ca|ce|ckb|cs|csb|cv|cy|da|de|dv|dz|el|el\-po|en|en\-gb|eo|es|es\-mx|et|eu|fa|fi|fo|fr|fr\-be|fr\-ca|fr\-ch|fur|fy|ga|gd|gl|gn|gu|he|hi|hr|hu|hy|ia|id|ii|ilo|is|it|ja|ka|kir|km|kn|ko|kk|ks|kv|la|li|lo|lv|lt|mk|ml|mwl|mn|mr|ms|mya|nah|nap|ne|nds|nl|nn|nb|non|nv|oci|or|os|pa|pl|ps|pt|pt\-br|qu|ro|ru|rup|sc|si|sk|skr|sl|snd|so|sq|sr|su|sv|ta|te|th|tl|tir|tr|tt|ty|udm|ug|uk|ur|uz|vec|vi|wa|xal|yi|yo|za|zh\-cn|zh\-tw)(?:\/|$)/;
			}

			/**
			 * Returns the config for WPcom analytics. Sets various event props
			 * used in tracking, e.g. locale, page path, etc. Mainly used for Tracks
			 * event props.
			 */
			function getWPCOMAnalyticsDefaultConfig() {
				return {
					// Current page props.
					currentPagePath: getCurrentPagePath(),
					currentPageName: getCurrentPageName(),
					currentPageLocale: getCurrentPageLocale(),

					// Page variation props.
					pageVariation: '',
					pagePersonalVariation: '',

					// Current user props.
					currentUserIdHash: "",
					currentUserIdHashShort: "",
					currentUserEmailHash: "",

					// Other misc. props.
					isHomepage: false,
					affiliateJSVersion: "1557961113",
				}
			}


			// When a8c-analytics:loaded is fired, start main event handling.
			document.addEventListener( 'a8c-analytics:loaded', () => {
				const cb            = window.a8cAnalytics.cb;
				const kit           = window.a8cAnalytics.kit;
				const config        = getWPCOMAnalyticsDefaultConfig();
				const configOptions = window.a8cAnalyticsConfig.fireAnalyticsOptions;

				// Extend config with any custom props.
				Object.assign( window.a8cAnalyticsConfig, config );

				// Backcompat. for `lpName` and `lpVariation` config properties.
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-homepage' === configOptions.lpName ? configOptions.lpName : config.currentPageName;
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-app-promo' === configOptions.lpName ? configOptions.lpName : config.currentPageName;

				// Backcompat. for `lpPersonalVariation` config property.
				config.pageVariation        = ! configOptions.pageVariation && configOptions.lpVariation ? configOptions.lpVariation : config.pageVariation;
				config.pagePersonalVariation = ! configOptions.pagePersonalVariation && configOptions.lpPersonalVariation ? configOptions.lpPersonalVariation : config.pagePersonalVariation;

				/**
				 * Applies linkers, e.g. for "forwarding" certain URL parameters between WordPress.com
				 * and other properties (e.g. Jetpack.com). Used for affiliate tracking, coupons, etc.
				 */
				const applyLinkers = () => {
					kit.linkQueryVars( [
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack|woocommerce|crowdsignal|wpjobmanager)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'aff',
								'affiliate',
								'cid', // Aff campaign ID.
								'sid', // Aff sub ID.
								'irclickid' // Impact Affiliate Click ID
							],
						},
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'coupon',
							],
						},
					] );
				}

				/**
				 * Handles currencies. Gets the currency value from cookies, and sets the currency
				 * if the cookie is not present. Can also be overridden by setting the `currency` URL
				 * paramter.
				 */
				const fireCurrencyHandlers = () => {
					let currency = kit.getQueryVar( 'currency' ) || '';

					if ( ! currency && 'amex-business-in' === config.currentPageName ) {
						currency = 'USD'; // Special case for this LP.
					}
					if ( currency ) {
						kit.docCookies.setItem( 'landingpage_currency', currency, 31536000, '/', '.rootDomain' );
					}
				};

				/**
				 * Fires the `wpcom_page_view` Tracks event.
				*/
				const fireTracks = () => {
					const props = Object.assign( {}, kit.getQueryVars( '', kit.QUERY_PARAMS ), {
						// Page props.
						path: config.currentPagePath,
						name: config.currentPageName,
						locale: config.currentPageLocale,
						variation: config.pageVariation,
						personal_variation: config.pagePersonalVariation,

						// Back compat. LP props.
						lp_name: config.currentPageName,
						lp_variation: config.pageVariation,
						lp_personal_variation: config.pagePersonalVariation,
					} );
					window._tkq.push( [ 'recordEvent', 'wpcom_page_view', props ] );
				};

				/**
				 * Handles the referral tracking.
				*/
				const fireAffiliateReferrals = () => {
					kit.attachScriptElement( 'https://s1.wp.com/wp-content/themes/h4/landing/marketing/js/affiliate-referrals.js?v=' + config.affiliateJSVersion );
				};

				/**
				 * Loads the Google Ads gtag.
				 */
				const loadGoogleAdsGtag = () => {
						kit.loadGtag( 'AW-946162814' );
				}

				/**
				 * Loads and fires the Google Analytics 4.
				*/
				const fireGoogleAnalyticsFour = () => {
					const gtagOptions = {
						'anonymize_ip': true,
						'use_amp_client_id': true
					};

					kit.loadGtag( 'G-1H4VG5F5JF', gtagOptions );
				}

				const fireParsely = ( trackingId ) => {
					kit.loadParselyTracker( trackingId );
				}

				/**
				 * Loads and fires the Facebook Pixel.
				 */
				const fireFacebook = () => {
					kit.loadFacebook();
					fbq( 'init', '823166884443641' );
					fbq( 'track', 'PageView' );
				}

				/**
				 * Loads and fires Microsoft Clarity
				 */
				const fireMicrosoftClarity = () => {
					if ( window.clarity ) {
						return;
					}

					// Needs to be set prior to loading the external script.
					window.clarity =
						window.clarity ||
						function () {
							( window.clarity.q = window.clarity.q || [] ).push( arguments );
						};

					const clarityScript = kit.attachScriptElement( 'https://www.clarity.ms/tag/j0cc1i1dba' );

					document.body.appendChild( clarityScript );
				};

				const fireImpactAffiliate = () => {
					kit.loadImpactAffiliate( config.currentUserIdHash, config.currentUserEmailHash );
				}

				/**
				 * Handles scroll percentage tracking.
				 */
				const trackScrollPercentage = () => {
					const scrollPosition = window.pageYOffset;
					const pageHeight = document.body.scrollHeight - window.innerHeight;
					const scrollProgress = ( scrollPosition / pageHeight ) * 100;

					// Check if the user has scrolled to 25%, 50%, 75%, or 100% of the page
					if ( scrollProgress >= 25 && scrollProgress < 50 ) {
						dispatchScrollCustomEvent( 25 )
					} else if ( scrollProgress >= 50 && scrollProgress < 75 ) {
						dispatchScrollCustomEvent( 50 )
					} else if ( scrollProgress >= 75 && scrollProgress < 100 ) {
						dispatchScrollCustomEvent( 75 )
					} else if ( scrollProgress >= 100 ) {
						dispatchScrollCustomEvent( 100 )
					}
				}

				/**
				 * Dispatches a custom event with the scroll percentage.
				 */
				const dispatchScrollCustomEvent = ( scrollPercentage ) => {
					const event = new CustomEvent( `PageScrollPercentage${scrollPercentage}`, { detail: scrollPercentage } );
					window.dispatchEvent(event);
				}

				/**
				 * Handles the scroll tracking callback. E.g. firing Tracks and GA events.
				 */
				const scrollTrackingCallback = ( event ) => {
					const { detail: scrollPercentage } = event;
					const trackingProps = {};

					// Event props.
					trackingProps.percent = event.detail ?? 0;
					trackingProps.path = config.currentPagePath || '';
					trackingProps.name = config.currentPageName || '';
					trackingProps.locale = config.currentPageLocale || '';
					trackingProps.variation = config.pageVariation || '';
					trackingProps.personal_variation = config.pagePersonalVariation || '';
					trackingProps.lp_name = config.currentPageName || '';
					trackingProps.lp_variation = config.pageVariation || '';
					trackingProps.lp_personal_variation = config.pagePersonalVariation || '';

					tracksAnalyticsScrollEvent( trackingProps );
				}

				/**
				 * Dispatches a Tracks event for page scroll.
				 */
				const tracksAnalyticsScrollEvent = ( trackingProps ) => {
					window._tkq.push( [ 'recordEvent', 'wpcom_page_scroll', trackingProps ] );
				}

				// Call the trackScrollProgress function every time the user scrolls
				window.addEventListener( 'scroll', trackScrollPercentage );

				// Listen to events for specific scroll percentages, each event is only acted upon once.
				window.addEventListener( 'PageScrollPercentage25', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage50', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage75', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage100', scrollTrackingCallback, { once: true } )

				/**
				 * Handles click tracking for certain elements in Tracks and GA.
				 */
				const setupTracksGAClickTracking = () => {
					document.querySelector( 'body' ).addEventListener( 'click', ( event ) => {
						// We only care about clicks on certain elements.
						if ( event.target.matches( 'a, button, .click-tracking-enable' ) ) {
							const { target: clickEventTarget } = event;

							// Initialize eventProps object with some defaults.
							const eventProps = {};
							eventProps.path = config.currentPagePath || '';
							eventProps.name = config.currentPageName || '';
							eventProps.locale = config.currentPageLocale || '';
							eventProps.variation = config.pageVariation || '';
							eventProps.personal_variation = config.pagePersonalVariation || '';

							// Identify farthest and closest parent element.
							const selectors = [ '.wpcom-masterbar.wpcom-header', '.lpc', '.lp-module', 'section', 'post', 'article' ];
							const section = getLastMatchingAncestor( event, selectors );
							const container = getClosestMatchingAncestor( event, selectors );

							// Get class name and ID for container and add to props.
							eventProps.container_id = container ? container.getAttribute( 'id' ) : '';
							eventProps.container_class = container ? container.getAttribute( 'class' ) : '';
							eventProps.container = eventProps.container_id || eventProps.container_class;

							// What type of element have we clicked?
							eventProps.is_cta = clickEventTarget.matches( 'is-cta' ) ?? false;
							eventProps.is_in_header_nav = clickEventTarget.classList.contains('x-nav-link') || clickEventTarget.classList.contains('x-dropdown-link') || clickEventTarget.classList.contains('x-menu-link') || section === 'lpc-header-nav' || section === 'wpcom-masterbar.wpcom-header';
							const isClickedElementButton = clickEventTarget.classList.contains('lpc-button') || clickEventTarget.classList.contains('button') || clickEventTarget.classList.contains('wp-block-button__link');
							const isParentElementButton = clickEventTarget.parentElement && (clickEventTarget.parentElement.classList.contains('lpc-button') || clickEventTarget.parentElement.classList.contains('button') || clickEventTarget.parentElement.classList.contains('wp-block-button__link'));
							eventProps.is_button = isClickedElementButton || isParentElementButton;

							// Link data.
							eventProps.href = clickEventTarget.getAttribute( 'href' ) || '';
							eventProps.target = clickEventTarget.getAttribute( 'target' ) || '';
							eventProps.text = clickEventTarget.innerText || '';

							// Emit tracking event in Tracks and GA.
							window._tkq.push( [ 'recordEvent', 'wpcom_link_click', eventProps ] );
							// Temporary duplicate event using beacon api to verify functionality.
							window._tkq.push( [ 'recordEvent', 'wpcom_link_click_beacon', Object.assign( {}, eventProps, { use_beacon: true } ) ] );

							// TODO: Implement a click delay on navigation links and CTA buttons to improve data integrity.
							// if ( props.is_in_header_nav || props.is_cta || props.is_button ) {
							// 	if ( props.href && 0 !== props.href.indexOf( '#' ) && -1 !== [ '', '_top', '_self' ].indexOf( props.target ) ) {
							// 		event.preventDefault(); // Allow time for trackers to record the click.

							// 		setTimeout( function() {
							// 			document.location = props.href;
							// 		}, 300 );
							// 	}
							// }

						}
					});
				}


				/**
				 * Add cookie and stats tracking for the Landpack language picker.
				 */
				const setupLocaleChangeTracking = () => {

					function createLocaleCookie( locale ) {
						const cookieDomain = '.wordpress.com';
						const cookieName   = 'wpcom_locale';

						const date = new Date();
						date.setTime( date.getTime() + ( 5 * 365 * 24 * 60 * 60 * 1000 ) );

						const expires = " expires=" + date.toGMTString();
						document.cookie = cookieName + '=' + locale + ';' + expires +'; path=/; domain=' + cookieDomain;
					}

					function createStatsRequest( locale, href ) {
						const languageChangeStat = new Image();
						languageChangeStat.onload = () => window.location.href = href;

						languageChangeStat.onerror = languageChangeStat.onload;
						languageChangeStat.src     = 'https://pixel.wp.com/g.gif?v=wpcom-no-pv&x_language-switcher=manual-switch-' + locale + '&rm=' + Math.random();
					}

					document.body.addEventListener( 'click', ( event ) => {
						const { target } = event;

						if ( target.matches( '.lp-language-picker a[lang]' ) ) {
							event.preventDefault();

							const code = target.getAttribute( 'lang' );
							const href = target.getAttribute( 'href' );

							createLocaleCookie( code );
							createStatsRequest( code, href );
						}
					});
				}

				/**
				 * Loads and fires the Bing tracking pixel.
				 */
				const fireBing = () => {
					( function( w, d, t, r, u ) {
						var f, n, i;
						w[ u ] = w[ u ] || [], f = function() {
							var o = { ti: "4074038" };
							o.q = w[ u ], w[ u ] = new UET( o ), w[ u ].push( "pageLoad" )
						}, n = d.createElement( t ), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
							var s = this.readyState;
							s && s !== "loaded" && s !== "complete" || ( f(), n.onload = n.onreadystatechange = null )
						}, i = d.getElementsByTagName( t )[ 0 ], i.parentNode.insertBefore( n, i )
					} )( window, document, "script", "//bat.bing.com/bat.js", "uetq" );
				}

				/**
				 * Adds a click event for Facebook pixel tracking on the /webinar sub pages.
				 */
				const trackFacebookWebinarClicks = () => {
					const facebookPixelURL = 'https://www.facebook.com/tr?id=759053181468957&ev=SubscribedButtonClick&noscript=1';

					const elementsToTrack = document.getElementsByClassName( 'webinar-facebook-click-track' );

					const handleFacebookClickEvent = ( event ) => {
						const facebookImgPixel = document.createElement( 'img' );
						facebookImgPixel.width = 1;
						facebookImgPixel.height = 1;
						facebookImgPixel.src = facebookPixelURL;

						document.body.appendChild( facebookImgPixel );
					}

					Array.from( elementsToTrack ).forEach( ( element ) => element.addEventListener( 'click', handleFacebookClickEvent ));
				}

				// Apply the URL parameter linkers.
				applyLinkers();

				// Add "essential" trackers to queue.
				cb.addTracker( 'essential', false, fireCurrencyHandlers );

				// Add "analytics" trackers to queue.
				cb.addTracker( 'analytics', false, fireTracks );
				cb.addTracker( 'analytics', false, fireAffiliateReferrals );
				cb.addTracker( 'analytics', false, setupTracksGAClickTracking );
				cb.addTracker( 'analytics', false, trackScrollPercentage );
				cb.addTracker( 'analytics', false, setupLocaleChangeTracking );
				cb.addTracker( 'analytics', true, fireGoogleAnalyticsFour );
				cb.addTracker( 'analytics', true, () => fireParsely( 'wordpress.com' ) );

				// Add "advertising" trackers to queue.
				cb.addTracker( 'advertising', true, loadGoogleAdsGtag );
				cb.addTracker( 'advertising', true, fireFacebook );
				cb.addTracker( 'advertising', true, trackFacebookWebinarClicks );
				cb.addTracker( 'advertising', true, fireBing );
				cb.addTracker( 'advertising', true, window.addEventListener( 'load', () => kit.fireHotjar( 227769 ) ) );
				// cb.addTracker( 'advertising', true, fireMicrosoftClarity ); - Disabling for now.
				cb.addTracker( 'advertising', true, fireImpactAffiliate );

				// Maybe fire trackers now, via cookie banner, based on bucketed consent.
				cb.maybeFireTrackers();
			});
		};
		// CCPA - Do Not Sell My Data.
		document.addEventListener( 'a8c-analytics:loaded-is-ccpa', ( event ) => {
			const { detail } = event;
			const isCCPAEligible = JSON.parse( detail ).isCCPA;

			if ( ! isCCPAEligible ) {
				document.querySelectorAll( '[data-is-ccpa-dnsd]' ).forEach( ( element ) => {
					const parent = element.parentNode;
					const parentTagName = parent.tagName.toLowerCase();

					// If the link in a part of a list, remove the entire parent item.
					// Otherwise, remove only the link element.
					( parentTagName === 'li' ? parent : element ).remove();
				} );
				return;
			}

			document.querySelector( '[data-is-ccpa-dnsd-trigger]' ).onclick = ( event ) => {
				event.preventDefault();
				window.a8cAnalytics.dnsd.show();
			};
		} );

		if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
			defQueue.items.push( setupAnalytics );
		} else {
			setupAnalytics();
		}
	} )();
	</script>
</div>

			<script type="text/javascript">
				( function() {
					'use strict';
					var currentScript = document.currentScript;

					var setupAnalytics = function() {
						function getScript() {
							var script = document.createElement( 'script' );
							var prev = currentScript || document.getElementsByTagName( 'script' )[ 0 ];
							script.setAttribute( 'src', "https:\/\/s0.wp.com\/wp-content\/mu-plugins\/a8c-analytics\/a8c-analytics.js?v=1702465711" );
							script.setAttribute( 'async', true );
							prev.parentNode.insertBefore( script, prev );
						}

													getScript();
											};

					if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
						defQueue.items.push( setupAnalytics );
					} else {
						setupAnalytics();
					}
				} )();
			</script>
			<!-- A8C Analytics [end] -->
		<script type="text/javascript" src="//0.gravatar.com/js/hovercards/hovercards.min.js?ver=202403131f6b765e798866d728f95661b78bbf269c86482ffff0fa8c08e18a1a65cc89" id="grofiles-cards-js"></script>
<script type="text/javascript" id="wpgroho-js-extra">
/* <![CDATA[ */
var WPGroHo = {"my_hash":""};
/* ]]> */
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s2.wp.com/wp-content/mu-plugins/gravatar-hovercards/wpgroho.js?m=1610363240i'></script>

	<script>
		// Initialize and attach hovercards to all gravatars
		( function() {
			function init() {
				if ( typeof Gravatar === 'undefined' ) {
					return;
				}

				if ( typeof Gravatar.init !== 'function' ) {
					return;
				}

				Gravatar.profile_cb = function ( hash, id ) {
					WPGroHo.syncProfileData( hash, id );
				};

				Gravatar.my_hash = WPGroHo.my_hash;
				Gravatar.init(
					'body',
					'#wp-admin-bar-my-account',
					{
						i18n: {
							'Edit your profile': 'Edita tu perfil',
							'View profile': 'View profile',
							'Sorry, we are unable to load this Gravatar profile.': 'Sorry, we are unable to load this Gravatar profile.',
							'Sorry, we are unable to load this Gravatar profile. Please check your internet connection.': 'Sorry, we are unable to load this Gravatar profile. Please check your internet connection.',
						},
					}
				);
			}

			if ( document.readyState !== 'loading' ) {
				init();
			} else {
				document.addEventListener( 'DOMContentLoaded', init );
			}
		} )();
	</script>

		<div style="display:none">
	<div class="grofile-hash-map-c00405d81be5c53c91963df00e3587e2">
	</div>
	<div class="grofile-hash-map-fe41012bbe6d9bf54720f44169c31735">
	</div>
	</div>
	<div id="actionbar" style="display: none;"
			class="actnbr-a8c-wpblog actnbr-has-follow">
		<ul>
								<li class="actnbr-btn actnbr-hidden">
								<a class="actnbr-action actnbr-actn-follow " href="">
			<svg class="gridicon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path clip-rule="evenodd" d="m4 4.5h12v6.5h1.5v-6.5-1.5h-1.5-12-1.5v1.5 10.5c0 1.1046.89543 2 2 2h7v-1.5h-7c-.27614 0-.5-.2239-.5-.5zm10.5 2h-9v1.5h9zm-5 3h-4v1.5h4zm3.5 1.5h-1v1h1zm-1-1.5h-1.5v1.5 1 1.5h1.5 1 1.5v-1.5-1-1.5h-1.5zm-2.5 2.5h-4v1.5h4zm6.5 1.25h1.5v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25z"  fill-rule="evenodd"></path></svg>
			<span>Suscribirse</span>
		</a>
		<a class="actnbr-action actnbr-actn-following  no-display" href="">
			<svg class="gridicon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5H4V15C4 15.2761 4.22386 15.5 4.5 15.5H11.5V17H4.5C3.39543 17 2.5 16.1046 2.5 15V4.5V3H4H16H17.5V4.5V12.5H16V4.5ZM5.5 6.5H14.5V8H5.5V6.5ZM5.5 9.5H9.5V11H5.5V9.5ZM12 11H13V12H12V11ZM10.5 9.5H12H13H14.5V11V12V13.5H13H12H10.5V12V11V9.5ZM5.5 12H9.5V13.5H5.5V12Z" fill="#008A20"></path><path class="following-icon-tick" d="M13.5 16L15.5 18L19 14.5" stroke="#008A20" stroke-width="1.5"></path></svg>
			<span>Suscrito</span>
		</a>
							<div class="actnbr-popover tip tip-top-left actnbr-notice" id="follow-bubble">
							<div class="tip-arrow"></div>
							<div class="tip-inner actnbr-follow-bubble">
															<ul>
											<li class="actnbr-sitename">
			<a href="https://wordpress.com/es/blog">
				<img alt='' src='https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=50&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png' srcset='https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=50&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 1x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=75&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 1.5x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=100&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 2x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=150&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 3x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=200&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 4x' class='avatar avatar-50' height='50' width='50' />				WordPress.com en Español			</a>
		</li>
										<div class="actnbr-message no-display"></div>
									<form method="post" action="https://subscribe.wordpress.com" accept-charset="utf-8" style="display: none;">
																						<div class="actnbr-follow-count">Únete a otros 8.612.338 suscriptores</div>
																					<div>
										<input type="email" name="email" placeholder="Introduce tu dirección de correo electrónico" class="actnbr-email-field" aria-label="Introduce tu dirección de correo electrónico" />
										</div>
										<input type="hidden" name="action" value="subscribe" />
										<input type="hidden" name="blog_id" value="11241806" />
										<input type="hidden" name="source" value="https://wordpress.com/es/blog/" />
										<input type="hidden" name="sub-type" value="actionbar-follow" />
										<input type="hidden" id="_wpnonce" name="_wpnonce" value="45d2391d4b" />										<div class="actnbr-button-wrap">
											<button type="submit" value="Suscríbeme">
												Suscríbeme											</button>
										</div>
									</form>
									<li class="actnbr-login-nudge">
										<div>
											¿Ya tienes una cuenta de WordPress.com? <a href="https://wordpress.com/log-in?redirect_to=https%3A%2F%2Fwordpress.com%2Fes%2Fblog%2F2024%2F01%2F15%2Fresumen-de-2023-en-wordpress-com%2F&#038;signup_flow=account">Inicia sesión</a>.										</div>
									</li>
								</ul>
															</div>
						</div>
					</li>
									<li class="actnbr-btn actnbr-hidden no-display" onclick="javascript:__tcfapi( 'showUi' );">
						<a class="actnbr-action actnbr-actn-privacy" href="#">
							<svg class="gridicon gridicons-info-outline" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/></g></svg>							<span>Privacidad						</span>
						</a>
					</li>
							<li class="actnbr-ellipsis actnbr-hidden">
				<svg class="gridicon gridicons-ellipsis" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M7 12c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm12-2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-7 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/></g></svg>				<div class="actnbr-popover tip tip-top-left actnbr-more">
					<div class="tip-arrow"></div>
					<div class="tip-inner">
						<ul>
									<li class="actnbr-sitename">
			<a href="https://wordpress.com/es/blog">
				<img alt='' src='https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=50&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png' srcset='https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=50&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 1x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=75&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 1.5x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=100&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 2x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=150&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 3x, https://secure.gravatar.com/blavatar/aebe2ebedf9366d6fecfe8214bbc37bb1cf83951263b9a9896ede32e137d0190?s=200&#038;d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png 4x' class='avatar avatar-50' height='50' width='50' />				WordPress.com en Español			</a>
		</li>
								<li class="actnbr-folded-customize">
								<a href="https://es.blog.wordpress.com/wp-admin/customize.php?url=https%3A%2F%2Fes.blog.wordpress.com%2Fes%2Fblog%2F">
									<svg class="gridicon gridicons-customize" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M2 6c0-1.505.78-3.08 2-4 0 .845.69 2 2 2 1.657 0 3 1.343 3 3 0 .386-.08.752-.212 1.09.74.594 1.476 1.19 2.19 1.81L8.9 11.98c-.62-.716-1.214-1.454-1.807-2.192C6.753 9.92 6.387 10 6 10c-2.21 0-4-1.79-4-4zm12.152 6.848l1.34-1.34c.607.304 1.283.492 2.008.492 2.485 0 4.5-2.015 4.5-4.5 0-.725-.188-1.4-.493-2.007L18 9l-2-2 3.507-3.507C18.9 3.188 18.225 3 17.5 3 15.015 3 13 5.015 13 7.5c0 .725.188 1.4.493 2.007L3 20l2 2 6.848-6.848c1.885 1.928 3.874 3.753 5.977 5.45l1.425 1.148 1.5-1.5-1.15-1.425c-1.695-2.103-3.52-4.092-5.448-5.977z"/></g></svg>									<span>Personalizar</span>
								</a>
							</li>
																<li class="actnbr-folded-follow">
												<a class="actnbr-action actnbr-actn-follow " href="">
			<svg class="gridicon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path clip-rule="evenodd" d="m4 4.5h12v6.5h1.5v-6.5-1.5h-1.5-12-1.5v1.5 10.5c0 1.1046.89543 2 2 2h7v-1.5h-7c-.27614 0-.5-.2239-.5-.5zm10.5 2h-9v1.5h9zm-5 3h-4v1.5h4zm3.5 1.5h-1v1h1zm-1-1.5h-1.5v1.5 1 1.5h1.5 1 1.5v-1.5-1-1.5h-1.5zm-2.5 2.5h-4v1.5h4zm6.5 1.25h1.5v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25z"  fill-rule="evenodd"></path></svg>
			<span>Suscribirse</span>
		</a>
		<a class="actnbr-action actnbr-actn-following  no-display" href="">
			<svg class="gridicon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5H4V15C4 15.2761 4.22386 15.5 4.5 15.5H11.5V17H4.5C3.39543 17 2.5 16.1046 2.5 15V4.5V3H4H16H17.5V4.5V12.5H16V4.5ZM5.5 6.5H14.5V8H5.5V6.5ZM5.5 9.5H9.5V11H5.5V9.5ZM12 11H13V12H12V11ZM10.5 9.5H12H13H14.5V11V12V13.5H13H12H10.5V12V11V9.5ZM5.5 12H9.5V13.5H5.5V12Z" fill="#008A20"></path><path class="following-icon-tick" d="M13.5 16L15.5 18L19 14.5" stroke="#008A20" stroke-width="1.5"></path></svg>
			<span>Suscrito</span>
		</a>
										</li>
																	<li class="actnbr-signup"><a href="https://wordpress.com/start/">Regístrate</a></li>
									<li class="actnbr-login"><a href="https://wordpress.com/log-in?redirect_to=https%3A%2F%2Fwordpress.com%2Fes%2Fblog%2F2024%2F01%2F15%2Fresumen-de-2023-en-wordpress-com%2F&#038;signup_flow=account">Iniciar sesión</a></li>
																	<li class="flb-report">
										<a href="http://en.wordpress.com/abuse/?report_url=https://wordpress.com/es/blog" target="_blank">
											Denunciar este contenido										</a>
									</li>
																	<li class="actnbr-reader">
										<a href="https://wordpress.com/read/feeds/25820">
											Ver sitio web en el Lector										</a>
									</li>
																	<li class="actnbr-subs">
										<a href="https://subscribe.wordpress.com/">Gestionar las suscripciones</a>
									</li>
																		<li class="actnbr-fold"><a href="">Contraer esta barra</a></li>
															</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
	
<script>
window.addEventListener( "load", function( event ) {
	var link = document.createElement( "link" );
	link.href = "https://s0.wp.com/wp-content/mu-plugins/actionbar/actionbar.css?v=20240115";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.head.appendChild( link );

	var script = document.createElement( "script" );
	script.src = "https://s0.wp.com/wp-content/mu-plugins/actionbar/actionbar.js?v=20231122";
	script.defer = true;
	document.body.appendChild( script );
} );
</script>

	<script type="text/javascript" crossorigin='anonymous' crossorigin='anonymous' src="https://s0.wp.com/wp-content/plugins/gutenberg-core/v17.4.1/build/url/index.min.js?m=1704824988i&amp;ver=79076beb79b51caaf6ac" id="wp-url-js"></script>
<script type='text/javascript' id='jetpack-instant-search-js-translations'>
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "jetpack-search-pkg", {"domain":"","locale_data":{"messages":{"":{"domain":"","plural_forms":"nplurals=2; plural=n != 1;","language":"es","project_id_version":"Plugins - Jetpack &#8211; WP Security, Backup, Speed, &amp; Growth - Development (trunk)"},"Price: high to low":["Precio: De mayor a menor"],"Price: low to high":["Precio: De menor a mayor"],"Oldest":["M\u00e1s antiguo"],"Relevance":["Relevancia"],"Rating":["Valoraci\u00f3n"],"Newest":["Nuevos"]}}} );
</script>
<script type="text/javascript" id="jetpack-instant-search-js-before">
/* <![CDATA[ */
var JetpackInstantSearchOptions=JSON.parse(decodeURIComponent("%7B%22overlayOptions%22%3A%7B%22colorTheme%22%3A%22light%22%2C%22enableInfScroll%22%3Atrue%2C%22enableFilteringOpensOverlay%22%3Atrue%2C%22enablePostDate%22%3Atrue%2C%22enableSort%22%3Atrue%2C%22highlightColor%22%3A%22%23FFC%22%2C%22overlayTrigger%22%3A%22submit%22%2C%22resultFormat%22%3A%22expanded%22%2C%22showPoweredBy%22%3Atrue%2C%22defaultSort%22%3A%22relevance%22%2C%22excludedPostTypes%22%3A%5B%5D%7D%2C%22homeUrl%22%3A%22https%3A%5C%2F%5C%2Fwordpress.com%5C%2Fes%5C%2Fblog%22%2C%22locale%22%3A%22en-US%22%2C%22postsPerPage%22%3A10%2C%22siteId%22%3A11241806%2C%22postTypes%22%3A%7B%22post%22%3A%7B%22singular_name%22%3A%22Entrada%22%2C%22name%22%3A%22Entradas%22%7D%2C%22page%22%3A%7B%22singular_name%22%3A%22P%5Cu00e1gina%22%2C%22name%22%3A%22P%5Cu00e1ginas%22%7D%2C%22attachment%22%3A%7B%22singular_name%22%3A%22Medios%22%2C%22name%22%3A%22Medios%22%7D%7D%2C%22webpackPublicPath%22%3A%22https%3A%5C%2F%5C%2Fs2.wp.com%5C%2Fwp-content%5C%2Fmu-plugins%5C%2Fjetpack-plugin%5C%2Fsun%5C%2Fjetpack_vendor%5C%2Fautomattic%5C%2Fjetpack-search%5C%2Fbuild%5C%2Finstant-search%5C%2F%22%2C%22isPhotonEnabled%22%3Atrue%2C%22isFreePlan%22%3Afalse%2C%22apiRoot%22%3A%22https%3A%5C%2F%5C%2Fpublic-api.wordpress.com%5C%2F%22%2C%22apiNonce%22%3A%22f10c1c6e3e%22%2C%22isPrivateSite%22%3Afalse%2C%22isWpcom%22%3Atrue%2C%22hasOverlayWidgets%22%3Atrue%2C%22widgets%22%3A%5B%7B%22filters%22%3A%5B%7B%22name%22%3A%22A%5Cu00f1o%22%2C%22type%22%3A%22date_histogram%22%2C%22count%22%3A10%2C%22field%22%3A%22post_date%22%2C%22interval%22%3A%22year%22%2C%22widget_id%22%3A%22jetpack-search-filters-2%22%2C%22filter_id%22%3A%22date_histogram_0%22%7D%2C%7B%22name%22%3A%22Etiquetas%22%2C%22type%22%3A%22taxonomy%22%2C%22taxonomy%22%3A%22post_tag%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-2%22%2C%22filter_id%22%3A%22taxonomy_1%22%7D%2C%7B%22name%22%3A%22Categor%5Cu00edas%22%2C%22type%22%3A%22taxonomy%22%2C%22taxonomy%22%3A%22category%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-2%22%2C%22filter_id%22%3A%22taxonomy_2%22%7D%5D%2C%22widget_id%22%3A%22jetpack-search-filters-2%22%7D%5D%2C%22widgetsOutsideOverlay%22%3A%5B%5D%2C%22hasNonSearchWidgets%22%3Afalse%2C%22preventTrackingCookiesReset%22%3Atrue%7D"));
/* ]]> */
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s2.wp.com/wp-content/mu-plugins/jetpack-plugin/sun/jetpack_vendor/automattic/jetpack-search/build/instant-search/jp-search.js?m=1704739186i'></script>
<script type="text/javascript" crossorigin='anonymous' crossorigin='anonymous' src="//stats.wp.com/w.js?ver=202403" id="jp-tracks-js"></script>
<script type="text/javascript" id="coblocks-loader-js-extra">
/* <![CDATA[ */
var wpcom_coblocks_js = {"coblocks_masonry_js":"https:\/\/s2.wp.com\/wp-content\/plugins\/coblocks\/2.18.1-simple-rev.4\/dist\/js\/coblocks-masonry.min.js","coblocks_lightbox_js":"https:\/\/s2.wp.com\/wp-content\/plugins\/coblocks\/2.18.1-simple-rev.4\/dist\/js\/coblocks-lightbox.min.js","jquery_core_js":"\/wp-includes\/js\/jquery\/jquery.min.js","jquery_migrate_js":"\/wp-includes\/js\/jquery\/jquery-migrate.min.js","masonry_js":"\/wp-includes\/js\/masonry.min.js","imagesloaded_js":"\/wp-includes\/js\/imagesloaded.min.js"};
var coblocksLigthboxData = {"closeLabel":"Cerrar la galer\u00eda","leftLabel":"Anterior","rightLabel":"Siguiente"};
/* ]]> */
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s2.wp.com/_static/??/wp-content/plugins/coblocks/2.18.1-simple-rev.4/dist/js/coblocks-loader.min.js,/wp-content/themes/h4/js/smallscreen.js?m=1681832297j'></script>

	<script type="text/javascript">
		(function () {
			var wpcom_reblog = {
				source: 'toolbar',

				toggle_reblog_box_flair: function (obj_id, post_id) {

					// Go to site selector. This will redirect to their blog if they only have one.
					const postEndpoint = `https://wordpress.com/post`;

					// Ideally we would use the permalink here, but fortunately this will be replaced with the 
					// post permalink in the editor.
					const originalURL = `${ document.location.href }?page_id=${ post_id }`; 
					
					const url =
						postEndpoint +
						'?url=' +
						encodeURIComponent( originalURL ) +
						'&is_post_share=true' +
						'&v=5';

					const redirect = function () {
						if (
							! window.open( url, '_blank' )
						) {
							location.href = url;
						}
					};

					if ( /Firefox/.test( navigator.userAgent ) ) {
						setTimeout( redirect, 0 );
					} else {
						redirect();
					}
				},
			};

			window.wpcom_reblog = wpcom_reblog;
		})();
	</script>
<script type="text/javascript">
// <![CDATA[
(function() {
try{
  if ( window.external &&'msIsSiteMode' in window.external) {
    if (window.external.msIsSiteMode()) {
      var jl = document.createElement('script');
      jl.type='text/javascript';
      jl.async=true;
      jl.src='/wp-content/plugins/ie-sitemode/custom-jumplist.php';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(jl, s);
    }
  }
}catch(e){}
})();
// ]]>
</script><script src="//stats.wp.com/w.js?66" defer></script> <script type="text/javascript">
_tkq = window._tkq || [];
_stq = window._stq || [];
_tkq.push(['storeContext', {'blog_id':'11241806','blog_tz':'2','user_lang':'es','blog_lang':'es','user_id':'0'}]);
_stq.push(['view', {'blog':'11241806','v':'wpcom','tz':'2','user_id':'0','subd':'es.blog'}]);
_stq.push(['extra', {'crypt':'UE40eW5QN0p8M2Y/RE1lSiYrZXhzUkM5fD1uTDNLUGt6QzVbd3FKb3Q4aWxfXXI3YWo4Qz1ObnoxZ1dPWjRrdlQuMmdtYV8tL0tMLi9RSDFyaG1nZGVDVDZbd2RbSEhPUkpkMU9YOVRSbGhsdXh0U3IyWmQmU1tYTD9uRHlJbWZSSC5ZejUrd2xLUlhxeHRIVGg0bU41X2hJYTFOXTRTQ2l5OUNXRllDRj1HSyxpUVhnJXJCcUo0b3h+fG13X3c3bTB3cS55W3l8RDBpfi1zSllsc05IbT0rMTA5dnwtMUNZYjNXK104V1AxP1QxNlRXMGJNfix8cmtuNlppPUJmdzNCM2crV3A4PWp1RU5lWXYwTy1dRiZkcHdGQWZzeVUxdGxyc1pRaj0='}]);
_stq.push([ 'clickTrackerInit', '11241806', '0' ]);
</script>
<noscript><img src="https://pixel.wp.com/b.gif?v=noscript" style="height:1px;width:1px;overflow:hidden;position:absolute;bottom:1px;" alt="" /></noscript>
<script defer id="bilmur" data-customproperties="{&quot;enq_jquery&quot;:&quot;1&quot;,&quot;logged_in&quot;:&quot;0&quot;,&quot;wptheme&quot;:&quot;a8c\/wpblog&quot;,&quot;wptheme_is_block&quot;:&quot;0&quot;}" data-provider="wordpress.com" data-service="simple"  src="/wp-content/js/bilmur.min.js?i=11&m=202403"></script>		<script type="text/javascript">
			( function( $ ) {
				if ( ! $ ) return; // Not possible.
				$( document ).ajaxSend( function( event, jqXhr, settings ) {
					if ( 0 === String( settings.url || '' ).indexOf( "https:\/\/es.blog.wordpress.com\/wp-admin\/admin-ajax.php" ) ) {
						settings.xhrFields                 = settings.xhrFields || {};
						settings.xhrFields.withCredentials = true;
					}
				} );
			} )( window.jQuery );
		</script>
		<script>
if ( 'object' === typeof wpcom_mobile_user_agent_info ) {

	wpcom_mobile_user_agent_info.init();
	var mobileStatsQueryString = "";
	
	if( false !== wpcom_mobile_user_agent_info.matchedPlatformName )
		mobileStatsQueryString += "&x_" + 'mobile_platforms' + '=' + wpcom_mobile_user_agent_info.matchedPlatformName;
	
	if( false !== wpcom_mobile_user_agent_info.matchedUserAgentName )
		mobileStatsQueryString += "&x_" + 'mobile_devices' + '=' + wpcom_mobile_user_agent_info.matchedUserAgentName;
	
	if( wpcom_mobile_user_agent_info.isIPad() )
		mobileStatsQueryString += "&x_" + 'ipad_views' + '=' + 'views';

	if( "" != mobileStatsQueryString ) {
		new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv' + mobileStatsQueryString + '&baba=' + Math.random();
	}
	
}
</script><!-- google_ad_section_end -->
</body>
</html>
