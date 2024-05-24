/*! elementor - v3.18.0 - 06-12-2023 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[791],{5363:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Video extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{imageOverlay:".elementor-custom-embed-image-overlay",video:".elementor-video",videoIframe:".elementor-video-iframe",playIcon:".elementor-custom-embed-play"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$imageOverlay:this.$element.find(e.imageOverlay),$video:this.$element.find(e.video),$videoIframe:this.$element.find(e.videoIframe),$playIcon:this.$element.find(e.playIcon)}}handleVideo(){this.getElementSettings("lightbox")||("youtube"===this.getElementSettings("video_type")?this.apiProvider.onApiReady((e=>{this.elements.$imageOverlay.remove(),this.prepareYTVideo(e,!0)})):(this.elements.$imageOverlay.remove(),this.playVideo()))}playVideo(){if(this.elements.$video.length)return void(this.youtubePlayer?this.youtubePlayer.playVideo():this.elements.$video[0].play());const e=this.elements.$videoIframe,t=e.data("lazy-load");t&&e.attr("src",t),e[0].src=this.apiProvider.getAutoplayURL(e[0].src)}async animateVideo(){(await elementorFrontend.utils.lightbox).setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))}async hideLightbox(){(await elementorFrontend.utils.lightbox).getModal().hide()}prepareYTVideo(e,t){const i=this.getElementSettings(),o={videoId:this.videoID,events:{onReady:()=>{i.mute&&this.youtubePlayer.mute(),(i.autoplay||t)&&this.youtubePlayer.playVideo()},onStateChange:t=>{t.data===e.PlayerState.ENDED&&i.loop&&this.youtubePlayer.seekTo(i.start||0)}},playerVars:{controls:i.controls?1:0,rel:i.rel?1:0,playsinline:i.play_on_mobile?1:0,modestbranding:i.modestbranding?1:0,autoplay:i.autoplay?1:0,start:i.start,end:i.end}};i.yt_privacy&&(o.host="https://www.youtube-nocookie.com",o.origin=window.location.hostname),this.youtubePlayer=new e.Player(this.elements.$video[0],o)}bindEvents(){this.elements.$imageOverlay.on("click",this.handleVideo.bind(this)),this.elements.$playIcon.on("keydown",(e=>{[13,32].includes(e.keyCode)&&this.handleVideo()}))}onInit(){super.onInit();const e=this.getElementSettings();if(elementorFrontend.utils[e.video_type]?this.apiProvider=elementorFrontend.utils[e.video_type]:this.apiProvider=elementorFrontend.utils.baseVideoLoader,"youtube"===e.video_type&&(this.videoID=this.apiProvider.getVideoIDFromURL(e.youtube_url),this.videoID&&(!e.show_image_overlay||!e.image_overlay.url)))return e.lazy_load?(this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport&&(this.intersectionObserver.unobserve(this.elements.$video.parent()[0]),this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))))}}),void this.intersectionObserver.observe(this.elements.$video.parent()[0])):void(elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading?this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))):setTimeout((()=>{this.apiProvider.onApiReady((e=>this.prepareYTVideo(e)))}),0))}onElementChange(e){if(0===e.indexOf("lightbox_content_animation"))return void this.animateVideo();const t=this.getElementSettings("lightbox");"lightbox"!==e||t||this.hideLightbox()}}t.default=Video}}]);';
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVc.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-stretch: normal;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1x4gaVc.ttf) format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj62UXskPMU.ttf) format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMU.ttf) format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUXskPMU.ttf) format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj42VnskPMU.ttf) format('truetype');
}
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVnskPMU.ttf) format('truetype');
}
</style><link rel="preload" as="font" href="https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2" crossorigin/><link rel="preload" as="font" href="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2" crossorigin/>
	<link rel="canonical" href="https://yieldmo.com/leadership/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Leadership - Yieldmo" />
	<meta property="og:description" content="LEADERSHIP LEADERSHIP TEAM Michael Yavonditte Founder &#038; CEO Learn More &gt; Mike Yavonditte is the Founder and CEO of Yieldmo, positions he has held since the company’s formation in 2012. Mike is focused on unleashing the power of big data toward better performance and understanding while delivering exceptional, human-centric ad experiences. Mike is a veteran [&hellip;]" />
	<meta property="og:url" content="https://yieldmo.com/leadership/" />
	<meta property="og:site_name" content="Yieldmo" />
	<meta property="article:modified_time" content="2024-01-05T18:42:19+00:00" />
	<meta property="og:image" content="https://yieldmo.com/wp-content/uploads/2022/03/SEO-images_0001_LEADERSHIP.png" />
	<meta property="og:image:width" content="500" />
	<meta property="og:image:height" content="300" />
	<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Yieldmo" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="13 minutes" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://yieldmo.com/leadership/","url":"https://yieldmo.com/leadership/","name":"Leadership - Yieldmo","isPartOf":{"@id":"https://yieldmo.com/#website"},"primaryImageOfPage":{"@id":"https://yieldmo.com/leadership/#primaryimage"},"image":{"@id":"https://yieldmo.com/leadership/#primaryimage"},"thumbnailUrl":"https://yieldmo.com/wp-content/uploads/2022/03/SEO-images_0001_LEADERSHIP.png","datePublished":"2021-12-21T18:44:22+00:00","dateModified":"2024-01-05T18:42:19+00:00","breadcrumb":{"@id":"https://yieldmo.com/leadership/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://yieldmo.com/leadership/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://yieldmo.com/leadership/#primaryimage","url":"https://yieldmo.com/wp-content/uploads/2022/03/SEO-images_0001_LEADERSHIP.png","contentUrl":"https://yieldmo.com/wp-content/uploads/2022/03/SEO-images_0001_LEADERSHIP.png","width":500,"height":300},{"@type":"BreadcrumbList","@id":"https://yieldmo.com/leadership/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://yieldmo.com/"},{"@type":"ListItem","position":2,"name":"Leadership"}]},{"@type":"WebSite","@id":"https://yieldmo.com/#website","url":"https://yieldmo.com/","name":"Yieldmo","description":"Yieldmo","publisher":{"@id":"https://yieldmo.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://yieldmo.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://yieldmo.com/#organization","name":"Yieldmo","url":"https://yieldmo.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://yieldmo.com/#/schema/logo/image/","url":"https://yieldmo.com/wp-content/uploads/2021/01/yieldmologo.png","contentUrl":"https://yieldmo.com/wp-content/uploads/2021/01/yieldmologo.png","width":125,"height":45,"caption":"Yieldmo"},"image":{"@id":"https://yieldmo.com/#/schema/logo/image/"},"sameAs":["https://twitter.com/Yieldmo","https://www.instagram.com/yieldmo","https://www.linkedin.com/company/yieldmo/"]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//www.googletagmanager.com' />
		<!-- This site uses the Google Analytics by MonsterInsights plugin v8.22.0 - Using Analytics tracking - https://www.monsterinsights.com/ -->
		<!-- Note: MonsterInsights is not currently configured on this site. The site owner needs to authenticate with Google Analytics in the MonsterInsights settings panel. -->
					<!-- No tracking code set -->
				<!-- / Google Analytics by MonsterInsights -->
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
<link rel='stylesheet' id='crp-style-grid-css' href='https://yieldmo.com/wp-content/plugins/contextual-related-posts/css/grid.min.css' type='text/css' media='all' />
<style id='crp-style-grid-inline-css' type='text/css'>

			.crp_related.crp-grid ul li a.crp_link {
				grid-template-rows: 250px auto;
			}
			.crp_related.crp-grid ul {
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			}
			
</style>
<link rel='stylesheet' id='hello-elementor-css' href='https://yieldmo.com/wp-content/themes/hello-elementor/style.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='hello-elementor-theme-style-css' href='https://yieldmo.com/wp-content/themes/hello-elementor/theme.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='https://yieldmo.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://yieldmo.com/wp-content/plugins/elementor/assets/css/frontend.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='swiper-css' href='https://yieldmo.com/wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-9-css' href='https://yieldmo.com/wp-content/uploads/elementor/css/post-9.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-pro-css' href='https://yieldmo.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='uael-frontend-css' href='https://yieldmo.com/wp-content/plugins/ultimate-elementor/assets/min-css/uael-frontend.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-9929-css' href='https://yieldmo.com/wp-content/uploads/elementor/css/post-9929.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-9144-css' href='https://yieldmo.com/wp-content/uploads/elementor/css/post-9144.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-7235-css' href='https://yieldmo.com/wp-content/uploads/elementor/css/post-7235.css' type='text/css' media='all' />
<link rel='stylesheet' id='tablepress-default-css' href='https://yieldmo.com/wp-content/plugins/tablepress/css/build/default.css' type='text/css' media='all' />
<link rel='stylesheet' id='hello-elementor-child-style-css' href='https://yieldmo.com/wp-content/themes/hello-theme-child-master/style.css' type='text/css' media='all' />

<link rel='stylesheet' id='elementor-icons-shared-0-css' href='https://yieldmo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-solid-css' href='https://yieldmo.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css' type='text/css' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
<!-- Google Analytics snippet added by Site Kit -->
<script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=UA-65004035-12" id="google_gtagjs-js" async></script>
<script type="text/javascript" id="google_gtagjs-js-after">
/* <![CDATA[ */
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag('set', 'linker', {"domains":["yieldmo.com"]} );
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "UA-65004035-12", {"anonymize_ip":true});
gtag("config", "G-QPJ8Y02614");
/* ]]> */
</script>

<!-- End Google Analytics snippet added by Site Kit -->
<link rel="https://api.w.org/" href="https://yieldmo.com/wp-json/" /><link rel="alternate" type="application/json" href="https://yieldmo.com/wp-json/wp/v2/pages/9929" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://yieldmo.com/xmlrpc.php?rsd" />

<link rel='shortlink' href='https://yieldmo.com/?p=9929' />
<link rel="alternate" type="application/json+oembed" href="https://yieldmo.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fyieldmo.com%2Fleadership%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://yieldmo.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fyieldmo.com%2Fleadership%2F&#038;format=xml" />

<script async src="https://tag.clearbitscripts.com/v1/pk_212d687742e75fa63a94d5ce1d076a3c/tags.js" referrerpolicy="strict-origin-when-cross-origin"></script>
<meta name="generator" content="Site Kit by Google 1.115.0" />
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<!-- GTM Container placement set to manual -->
<script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
	var dataLayer_content = {"pageTitle":"Leadership - Yieldmo","pagePostType":"page","pagePostType2":"single-page","pagePostAuthor":"alejandro@yellowlionmedia.com"};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5J6MMTS');
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com --><meta name="generator" content="Elementor 3.18.1; features: e_dom_optimization, e_optimized_assets_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-auto">
<!-- OptanonConsentNoticeStart -->
<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="78838cc6-f5d2-47b0-975a-76955e933fe4" ></script>
<script type="text/javascript">
function OptanonWrapper() { }
</script>
<!-- OptanonConsentNoticeEnd -->
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6240591.js"></script>
<!-- End of HubSpot Embed Code -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-65004035-8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());  gtag('config', 'UA-65004035-8');
</script>



<link rel="icon" href="https://yieldmo.com/wp-content/uploads/2021/04/ym-favicon-150x150.png" sizes="32x32" />
<link rel="icon" href="https://yieldmo.com/wp-content/uploads/2021/04/ym-favicon.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://yieldmo.com/wp-content/uploads/2021/04/ym-favicon.png" />
<meta name="msapplication-TileImage" content="https://yieldmo.com/wp-content/uploads/2021/04/ym-favicon.png" />
		<style type="text/css" id="wp-custom-css">
			/* https://yieldmo.com/wp-content/uploads/2023/07/noun-arrow-2094744.svg */

.dfo-icons .elementor-column:after{
	content:url(/wp-content/uploads/2023/07/noun-arrow-2094744.svg);
	width:60px;
	position:absolute;
	right:-40px;
top:35%;
}

.dfo-icons .elementor-column:last-child:after{
	content:"";
}

@media screen and (max-width:767px){
	.dfo-icons .elementor-column:after{
	
	width:60px;
right:0;
		left:0;
		margin:auto;
		top:90% !important;
		padding-top:30px;
		transform: rotate(90deg);
	}


}


div#cookie-law-info-bar {
    position: absolute;
    bottom: 100px !important;
}

.dataTables_length {

    color: white;
}

.tablepress .sorting {
    white-space: nowrap;
    padding: 20px 20px 20px 20px;
}

.dataTables_length {
    display: none;
}

.dataTables_length select {
	background:transparent;
	color:white;
	border:solid white 1px;
	padding:5px 10px;
	
}
.dataTables_filter label {
	background:transparent;
	color:white;
	padding-bottom:20px;
}


.dataTables_filter input {
	background:transparent;
	color:white;
 
}

.dataTables_wrapper label input, .dataTables_wrapper label select {
    display: inline;
    margin: 2px;
    width: auto;
}

.tablepress tfoot th, .tablepress thead th {
    background-color: #141116;
    padding:20px 15px;
	font-size:16px;
    color: #feaa06;
    min-width: 145px;
    font-family: "Space Grotesk", Sans-serif;
}

.paging_simple .paginate_button.next:after {
    display:none;
}

.paginate_button:after, .paginate_button:before {
    display:none;
}

.dataTables_paginate.paging_simple {
     font-family: "Space Grotesk";
	
}

.dataTables_paginate a {
 
    text-decoration: none;
    margin: 0 30px;
	 color: #feaa06 !important;
	font-size:18px !important;
}

.dataTables_info {
	    font-family: "Space Grotesk";
	 color: #feaa06;
}

.tablepress .sorting:hover, .tablepress .sorting_asc, .tablepress .sorting_desc {
    background-color: #141116e3;


}

.tablepress .even td {
    background-color: #e7e7e7;
    font-size: 14px;
    padding: 20px 15px;
    vertical-align: middle;
}

.tablepress .odd td {
    background-color: white;
    font-size: 14px;
    padding: 20px 15px;
    vertical-align: middle;
}




@media (orientation: portrait) {
  .yieldmo-data-table:before {
		content:"Please rotate your screen to see this table.";
		font-size:18px;

		color:white;
		font-weight:700;
	}
	
	
	.yieldmo-data-table{
		position:relative;
		text-align:center;
    width:100%;
	}
	
	.yieldmo-data-table .elementor-shortcode{
		display:none;
		
	}
	
	
}


Html, Body{
	overflow-x:hidden !important;
}

.entry-title{
	display:none !important;
}

.type-post .entry-title{
	display:block !important;
	font-size:36px;
	padding-top:20px;
	padding-bottom:20px;
}

.type-post .crp_related{
	border-top:solid 1px #e1e1e1;
	padding-top:30px;
	margin-top: 80px;
}  

p{
	line-height:1.3em !important;
}

.login-menu-item{
	margin-left:6px;
	font-size:12px;
}

blockquote {
    margin: 1.5em 1em 1.5em 3em;
    line-height: inherit;
    position: relative;
    border-left: 5px solid rgba(0,0,0,.05);
	padding:1.2em;
	color:black;
	font-size:1.1em;
	font-style:italic;
	line-height:1.8em;
  
}
.type-post p{
	margin-bottom:1.6em;
}


.leadership-learn-more-accordian
.elementor-accordion-title{
	border:solid 1px;
	padding:4px 14px;
	text-align:center;

}

.leadership-learn-more-accordian .elementor-tab-title{
	text-align:center;
}

.elementor-button {
  
    font-size: 18px;
   
}

.leadership-profile{
	display:block;
	padding-top:15px;
}

.leadership-profile:hover{
color:white !important;
}


.leadership-profile:before{
	height:30x;
	width:30px;
	content:url('/wp-content/uploads/2022/01/linkedin.svg');
  display: inline-block;
vertical-align:middle;
	padding-right:5px;
}
	
.custom-logo-slider .swiper-slide img{
	max-height:70px;
}
.custom-logo-slider .swiper-pagination {
	bottom:-20px;
}


/* Homepage responsive fix for banner - super wide screens*/
@media screen and (min-width: 1420px) {
 
	.home-page-banner {
   
    background-size: 100% 115% !important;

	}

}

.spotlight:before {
    content: "";
    position: absolute;
    box-shadow: 0 0 60px 15px rgba(239, 150, 16, 0.70);
    width: 60%;
    height: 100%;
    left:  0;
	  right: 0;
	margin:auto;
    border-radius: 500%;
}

.spotlight-slider img{
	height:170px !important;
}

.spotlight-slider a{
	border:solid 1px;
	padding: 10px 26px 10px 26px;
	border-radius:4px;
	transition: all .3s;
}

.spotlight-slider cite{
	padding-top:16px;
}

.spotlight-slider a:hover{
	color:black;
	background:#ef9610;
}

.spotlight-slider .swiper-container-horizontal>.swiper-pagination-bullets{
	bottom:20px
}

.swiper-pagination-bullet {
    background: #545454;
    opacity: 1;
}

.spotlight-slider .elementor-widget-testimonial-carousel .swiper-slide {
    padding-left: 10px;
	 padding-right: 10px;
}

@media screen and (max-width:767px){
	.spotlight-slider .elementor-testimonial {
    flex-wrap: wrap;
}
	.spotlight-slider .elementor-testimonial__footer {
    order: 0;
		padding-right:0px !important;
		padding-bottom:20px;
		width:100%;
		
}
	
	
	.spotlight-slider .elementor-testimonial__content {
    order: 1;
		width: 100%;
    text-align: center;
} 
	.spotlight-slider.elementor-widget-testimonial-carousel .swiper-slide {
    padding: 20px !important;
    padding-bottom: 60px !important;
}
	.spotlight-slider a{
		font-size:16px;
	}
}


.format-spotlight img{
	height:auto !important;
}

.format-spotlight-title{
	color:#ef9610;
	padding-bottom:20px;
	padding-top:15px;
}



@media screen and (max-width:767px){
	
	#greenhouse-widget .job .job_excerpt {
    margin-top: 4px !important;
}
	#greenhouse-widget .job{
	display:block !important;


}
}


#greenhouse-widget .jobs.cycle-slide.cycle-slide-active {
    width: 100%;

}

#greenhouse-widget .group_headline{
	color:White !important;
	padding-bottom:20px;
	padding-top:20px;
	
}

#greenhouse-widget .job{
	display:flex;
	justify-content:space-between;
flex-wrap:wrap;
align-items: center;
padding-bottom:50px;	
color:#ef9610;

}

#greenhouse-widget .job h3{
	font-size:22px;
	margin-top:0;
	margin-bottom:0;
}

#greenhouse-widget .job .job_excerpt a{
	border:solid 1px;
	padding: 10px 26px 10px 26px;
	border-radius:4px;
	transition: all .3s;
	font-family: "Space Grotesk", Sans-serif;
	text-transform:uppercase;
   
}

#greenhouse-widget .job .job_excerpt a:hover{
	background:#ef9610;
}


#greenhouse-widget .job .job_excerpt{
margin-top:-20px;
}

#greenhouse-widget .display_description {
    COLOR: WHITE;
	padding-top:25px;
	padding-bottom:25px;
}

#greenhouse-widget .job_apply{
	border:solid 1px;
	padding: 10px 26px 10px 26px;
	border-radius:4px;
	transition: all .3s;
	margin-bottom:10px;
		font-family: "Space Grotesk", Sans-serif;
	text-transform:uppercase;
}



#greenhouse-widget .job_apply:hover{
	background:#ef9610;
}

#greenhouse-widget h1.job_title{
	padding-bottom:25px;
}


#greenhouse-widget .return{
	transition: all .3s;
	margin-bottom:10px;
		font-family: "Space Grotesk", Sans-serif;
	text-transform:uppercase;
}

#greenhouse-widget .return:hover{
	color:white !important;
}



#greenhouse-widget .apply_jobs {
    color: white;
}


#greenhouse-widget .apply_jobs h1{
   color: #ef9610;
}


#greenhouse-widget input.submit.button {
	border:solid 1px;
	padding: 10px 26px 10px 26px;
	border-radius:4px;
	transition: all .3s;
	margin-bottom:10px;
		font-family: "Space Grotesk", Sans-serif !important;
	text-transform:uppercase;
	font-weight:500;
}


#greenhouse-widget  .field_wrap label{
	padding-bottom:20px;
	 color: #ef9610;
}

#greenhouse-widget .field_wrap {
	padding:5px;
}


.careers-yieldmo-slider img{
	box-shadow:0 0 20px 10px rgba(49,50,135, 0.70);
}

.careers-yieldmo-slider figure.swiper-slide-inner {
    padding: 30px;
}

.careers-yieldmo-slider .eicon-chevron-right:before {
    content: "";
    border: solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(
-45deg
);
    -webkit-transform: rotate(
-45deg
);
    width: 40px;
    height: 40px;
}

.careers-yieldmo-slider .eicon-chevron-left:before {
    content: "";
    border: solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding:3px;
    transform: rotate(
135deg
);
    -webkit-transform: rotate(
135deg
);
    width: 40px;
    height: 40px;
}


.crp_related {
    max-width: 1140px;
    margin: auto;
	padding-bottom:60px;
}

.crp_related h3{
   padding-bottom:30px;
}

.crp_related ul {
    gap: 40px;

}

.crp_title{
	padding-top:15px;
	padding-bottom:10px;
}

.crp_related ul li img {
    height: 200px;
    object-fit: cover;
}

.crp_related ul {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
	padding-left:0px;
}


.custom-home-button a:hover{
	color:#ef9610;
	transition-duration:0.3s;
}

.custom-home-button img{
	width:50px !important;
}


#greenhouse-widget .jobs.cycle-slide.cycle-slide-active {
    width: 100%;
    padding-top: 14px;
}


.hbspt-form{ color:white}

.hbspt-form input ,.hbspt-form select,.hbspt-form textarea {
	background:none;
	color:white;
	border-width:0px 0px 2px 0px;
	border-color:white;
font-family: Open Sans;
}
.hbspt-form .field{
	margin:15px 0px 15px 0px;
}

.hbspt-form .hs-richtext{
	font-size:14px;
	padding-top:10px;
	padding-bottom:5px;
}

.hbspt-form .hs-richtext a:hover{
	color:white;
}


.hbspt-form .inputs-list{
	list-style:none;
	padding:0px;
}

.hs-form-required{
	color:Red;
	PADDING-LEFT:5PX;
}

.hbspt-form input:focus, .hbspt-form select:focus, .hbspt-form textarea:focus {
    border-color: WHITE;
    outline: 0 none;
}

.hbspt-form .hs-error-msg{
	display:none;
}

.hbspt-form input[type="submit"]{
background: #da873d;
    border-color: #da873d;
    color: #ffffff;
    font-size: 14px;
    line-height: 14px;
	font-family: Open Sans;
margin-top:16px;}		</style>
		</head>
<body class="page-template-default page page-id-9929 wp-custom-logo elementor-default elementor-kit-9 elementor-page elementor-page-9929 elementor-page-5880">


<!-- GTM Container placement set to manual -->
<!-- Google Tag Manager (noscript) -->
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J6MMTS" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --><script> 
jQuery(document).ready(function($) { 
var delay = 100; setTimeout(function() { 
$('.elementor-tab-title').removeClass('elementor-active');
 $('.elementor-tab-content').css('display', 'none'); }, delay); 
}); 
</script>
		<div data-elementor-type="header" data-elementor-id="9144" class="elementor elementor-9144 elementor-location-header" data-elementor-post-type="elementor_library">
								<section class="elementor-section elementor-top-section elementor-element elementor-element-f07a63d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f07a63d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-68f4bcb" data-id="68f4bcb" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-d5cfab7 elementor-widget elementor-widget-heading" data-id="d5cfab7" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/creative-performance-with-dfo-and-ai/?utm_campaign=yieldmobanner&#038;utm_source=banner&#038;utm_medium=websitebanner">Download Our New Whitepaper "Creative Performance with DFO and AI" → READ MORE</a></p>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-48fc1d9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="48fc1d9" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_effects_offset&quot;:90,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c6c4fcc" data-id="c6c4fcc" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-534229b elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="534229b" data-element_type="widget" data-widget_type="theme-site-logo.default">
				<div class="elementor-widget-container">
											<a href="https://yieldmo.com">
			<img width="125" height="45" src="https://yieldmo.com/wp-content/uploads/2021/01/yieldmologo.png" class="attachment-full size-full wp-image-32" alt="" />				</a>
											</div>
				</div>
				<div class="elementor-element elementor-element-9feb3a1 elementor-widget__width-auto elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="9feb3a1" data-element_type="widget" data-settings="{&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;i class=\&quot;fas fa-chevron-down\&quot;&gt;&lt;\/i&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
				<div class="elementor-widget-container">
						<nav class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
				<ul id="menu-1-9feb3a1" class="elementor-nav-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9164"><a href="/for-buyers" class="elementor-item">For Buyers</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9166"><a href="/for-sellers" class="elementor-item">For Sellers</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-10833"><a href="https://yieldmo.com/product-overview/" class="elementor-item">Product Overview</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10828"><a href="https://yieldmo.com/global-smart-exchange/" class="elementor-sub-item">Global Smart Exchange</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10829"><a href="https://yieldmo.com/contextual-curation-engine/" class="elementor-sub-item">Contextual Curation Engine</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10830"><a href="https://yieldmo.com/advertising-formats/" class="elementor-sub-item">Advertising Formats</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10970"><a href="https://yieldmo.com/deals/" class="elementor-sub-item">Yieldmo Deals</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10873"><a href="https://yieldmo.com/privacy-first-marketplace/" class="elementor-sub-item">Privacy-First Marketplace</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10899"><a href="https://yieldmo.com/video-ctv/" class="elementor-sub-item">Video &#038; CTV</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15170"><a href="https://yieldmo.com/dynamic-format-optimization/" class="elementor-sub-item">Dynamic Format Optimization</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5025"><a href="#" class="elementor-item elementor-item-anchor">Insights</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11994"><a href="https://yieldmo.com/blog/" class="elementor-sub-item">Blog</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12006"><a href="https://yieldmo.com/case-study/" class="elementor-sub-item">Case Study</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11995"><a href="https://yieldmo.com/press/" class="elementor-sub-item">Press</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12198"><a href="https://yieldmo.com/events/" class="elementor-sub-item">Events</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11617"><a href="https://yieldmo.com/whitepaper-contextualreimagined/" class="elementor-sub-item">Contextual Reimagined Whitepaper</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15313"><a href="https://yieldmo.com/creative-performance-with-dfo-and-ai/" class="elementor-sub-item">Creative Performance with DFO and AI Whitepaper</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11654"><a href="https://yieldmo.com/instructional-guides/" class="elementor-sub-item">Instructional Guides</a></li>
</ul>
</li>
<li class="unclickable menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-5020"><a href="#" class="elementor-item elementor-item-anchor">Company</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-9929 current_page_item menu-item-10832"><a href="https://yieldmo.com/leadership/" aria-current="page" class="elementor-sub-item elementor-item-active">Leadership</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10834"><a href="https://yieldmo.com/careers/" class="elementor-sub-item">Careers</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11633"><a href="https://yieldmo.com/contact-us/" class="elementor-sub-item">Contact Us</a></li>
</ul>
</li>
</ul>			</nav>
					<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">
			<i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open eicon-menu-bar"></i><i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close eicon-close"></i>			<span class="elementor-screen-only">Menu</span>
		</div>
					<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
				<ul id="menu-2-9feb3a1" class="elementor-nav-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9164"><a href="/for-buyers" class="elementor-item" tabindex="-1">For Buyers</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9166"><a href="/for-sellers" class="elementor-item" tabindex="-1">For Sellers</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-10833"><a href="https://yieldmo.com/product-overview/" class="elementor-item" tabindex="-1">Product Overview</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10828"><a href="https://yieldmo.com/global-smart-exchange/" class="elementor-sub-item" tabindex="-1">Global Smart Exchange</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10829"><a href="https://yieldmo.com/contextual-curation-engine/" class="elementor-sub-item" tabindex="-1">Contextual Curation Engine</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10830"><a href="https://yieldmo.com/advertising-formats/" class="elementor-sub-item" tabindex="-1">Advertising Formats</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10970"><a href="https://yieldmo.com/deals/" class="elementor-sub-item" tabindex="-1">Yieldmo Deals</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10873"><a href="https://yieldmo.com/privacy-first-marketplace/" class="elementor-sub-item" tabindex="-1">Privacy-First Marketplace</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10899"><a href="https://yieldmo.com/video-ctv/" class="elementor-sub-item" tabindex="-1">Video &#038; CTV</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15170"><a href="https://yieldmo.com/dynamic-format-optimization/" class="elementor-sub-item" tabindex="-1">Dynamic Format Optimization</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5025"><a href="#" class="elementor-item elementor-item-anchor" tabindex="-1">Insights</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11994"><a href="https://yieldmo.com/blog/" class="elementor-sub-item" tabindex="-1">Blog</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12006"><a href="https://yieldmo.com/case-study/" class="elementor-sub-item" tabindex="-1">Case Study</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11995"><a href="https://yieldmo.com/press/" class="elementor-sub-item" tabindex="-1">Press</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12198"><a href="https://yieldmo.com/events/" class="elementor-sub-item" tabindex="-1">Events</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11617"><a href="https://yieldmo.com/whitepaper-contextualreimagined/" class="elementor-sub-item" tabindex="-1">Contextual Reimagined Whitepaper</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15313"><a href="https://yieldmo.com/creative-performance-with-dfo-and-ai/" class="elementor-sub-item" tabindex="-1">Creative Performance with DFO and AI Whitepaper</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11654"><a href="https://yieldmo.com/instructional-guides/" class="elementor-sub-item" tabindex="-1">Instructional Guides</a></li>
</ul>
</li>
<li class="unclickable menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-5020"><a href="#" class="elementor-item elementor-item-anchor" tabindex="-1">Company</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-9929 current_page_item menu-item-10832"><a href="https://yieldmo.com/leadership/" aria-current="page" class="elementor-sub-item elementor-item-active" tabindex="-1">Leadership</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10834"><a href="https://yieldmo.com/careers/" class="elementor-sub-item" tabindex="-1">Careers</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11633"><a href="https://yieldmo.com/contact-us/" class="elementor-sub-item" tabindex="-1">Contact Us</a></li>
</ul>
</li>
</ul>			</nav>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
						</div>
		
<main class="site-main post-9929 page type-page status-publish has-post-thumbnail hentry" role="main">
		<div class="page-content">
				<div data-elementor-type="wp-page" data-elementor-id="9929" class="elementor elementor-9929" data-elementor-post-type="page">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-a3181f9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a3181f9" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20dc46d" data-id="20dc46d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-8f2dca1 elementor-invisible elementor-widget elementor-widget-heading" data-id="8f2dca1" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h1 class="elementor-heading-title elementor-size-default">LEADERSHIP</h1>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-a7716c4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a7716c4" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e3e7d29" data-id="e3e7d29" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-38a980f elementor-invisible elementor-widget elementor-widget-heading" data-id="38a980f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">LEADERSHIP TEAM</h2>		</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-7151dea elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="7151dea" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-25dd325" data-id="25dd325" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-fe76795 elementor-widget elementor-widget-image" data-id="fe76795" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="175" height="175" src="https://yieldmo.com/wp-content/uploads/2021/01/Whitnee-Shulman-Photography_Yieldmo_head.png" class="attachment-large size-large wp-image-619" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Whitnee-Shulman-Photography_Yieldmo_head.png 175w, https://yieldmo.com/wp-content/uploads/2021/01/Whitnee-Shulman-Photography_Yieldmo_head-150x150.png 150w" sizes="(max-width: 175px) 100vw, 175px" />															</div>
				</div>
				<div class="elementor-element elementor-element-ac4224e elementor-widget elementor-widget-heading" data-id="ac4224e" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Michael Yavonditte
<br>
Founder & CEO
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-cf4caf3 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="cf4caf3" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-2171" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-2171" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-2171" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-2171"><span style="font-weight: 400;">Mike Yavonditte is the Founder and CEO of Yieldmo, positions he has held since the company’s formation in 2012. Mike is focused on unleashing the power of big data toward better performance and understanding while delivering exceptional, human-centric ad experiences. Mike is a veteran of new media and technology and is a private investor in the technology industry with more than 100 active investments. Mike was previously CEO of Quigo, pioneers of auction-based advertising marketplaces. Through his successful strategy of helping publishers monetize their content, Mike led Quigo to a successful acquisition by AOL in 2007. Prior to that, Mike served as a sales and business development leader for numerous organizations, including USA Networks Electronic Commerce Solutions Group, AltaVista, Juno Online Services, and Ziff-Davis Publishing.</span>
<a class="leadership-profile" href="https://www.linkedin.com/in/michael-yavonditte-3b69193a/"> Linkedin</a></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4a486e5" data-id="4a486e5" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-48eabf9 elementor-widget elementor-widget-image" data-id="48eabf9" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/06/RickE.png" class="attachment-large size-large wp-image-7101" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/06/RickE.png 200w, https://yieldmo.com/wp-content/uploads/2021/06/RickE-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-d6500da elementor-widget elementor-widget-heading" data-id="d6500da" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Rick Eaton
<br>
CFO & Co-Founder
<br></p>		</div>
				</div>
				<div class="elementor-element elementor-element-136a0b1 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="136a0b1" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-2031" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-2031" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-2031" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-2031"><span style="font-weight: 400;">Rick Eaton is a Co-Founder and CFO of Yieldmo, positions he has held since the company’s formation in 2012.  Rick has more than 25 years of experience managing fast-growing technology companies. He served as CFO of several NYC-based startups, including Quigo, a creator of auction-based advertising marketplaces, and Juno Online Services, one of the nation’s leading Internet Service Providers. Rick founded his career with Coopers &amp; Lybrand, now PricewaterhouseCoopers. Rick is a member of the American Institute of Certified Public Accountants.</span>

<a class="leadership-profile" href="https://www.linkedin.com/in/rickeatoncfo/"> Linkedin</a></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e5bfe29" data-id="e5bfe29" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-edcbb86 elementor-widget elementor-widget-image" data-id="edcbb86" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Teddy.png" class="attachment-large size-large wp-image-1030" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Teddy.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Teddy-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-6ec104c elementor-widget elementor-widget-heading" data-id="6ec104c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Teddy Jawde
<br>
Chief Strategy & Partnerships Officer, Co-Founder
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-56a6d1a leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="56a6d1a" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-9081" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-9081" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-9081" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-9081"><p>Teddy is a co-founder of Yieldmo and serves as Chief Strategy &amp; Partnerships Officer. Teddy was one of the principal product architects of Quigo, an early digital ad exchange marketplace sold to AOL. Prior to AOL and Quigo, Teddy held various product positions at Yahoo! and Hotjobs.com.</p><p>Teddy graduated from Tulane University in New Orleans, where he eventually plans to relocate so he can be closer to his favorite food and music.</p><p><a class="leadership-profile" href="https://www.linkedin.com/in/teddyjawde/"> Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-c5ffc2f elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="c5ffc2f" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-34fa8c7" data-id="34fa8c7" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-e522dfc elementor-widget elementor-widget-image" data-id="e522dfc" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="150" height="150" src="https://yieldmo.com/wp-content/uploads/2023/04/Headshot-Johnny-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-14631" alt="Headshot-Johnny" />															</div>
				</div>
				<div class="elementor-element elementor-element-b93bfcd elementor-widget elementor-widget-heading" data-id="b93bfcd" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Johnny Horgan
<br>
Chief Commercial Officer
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-c894532 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="c894532" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-2101" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-2101" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-2101" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-2101"><div>Johnny is Yieldmo&#8217;s Chief Commercial Officer and an established advertising technology executive. Johnny has spent more than 15 years in the industry in roles at Kargo, Amobee, Meta, and Microsoft. Prior to Yieldmo, he served as Chief Revenue Officer at Kargo. With deep experience building and scaling global revenue organizations, he is charged with leading the global commercial teams and overall go-to-market execution for the organization.</div><p><a class="leadership-profile" href="https://www.linkedin.com/in/johnnyhorgan/"> Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-045983e" data-id="045983e" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c2f370e elementor-widget elementor-widget-image" data-id="c2f370e" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Duc-1.png" class="attachment-large size-large wp-image-1031" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Duc-1.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Duc-1-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-aea8544 elementor-widget elementor-widget-heading" data-id="aea8544" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Duc Chau

<br>
Chief Technology Officer
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-17bcab0 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="17bcab0" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-2481" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-2481" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-2481" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-2481"><div>Duc brings over 20 years of technology leadership experience to his role as CTO of Yieldmo. Duc is an innovative and hands on engineer who was pivotal in designing and building many of the core technologies at companies such as Rubicon Project, which he took public in 2015 as co-founder, MySpace, where he was Lead Developer, and Omaze, where he was CTO. A pioneer of AdTech, MarTech, and Social Networking, Duc’s background places him in a unique position to reimagine the digital advertising ecosystem. Duc has a BS in Computer Information Systems and received an MBA from MIT Sloan.</div><p><a class="leadership-profile" href="https://www.linkedin.com/in/ducky/ "> Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ecfa6bf" data-id="ecfa6bf" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-2c7bcb9 elementor-widget elementor-widget-image" data-id="2c7bcb9" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Meagan.png" class="attachment-large size-large wp-image-1037" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Meagan.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Meagan-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-dbabe1a elementor-widget elementor-widget-heading" data-id="dbabe1a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Meagan Soszynski
<br>Chief People Officer								
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-33a6c65 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="33a6c65" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-5411" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-5411" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-5411" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-5411"><p>Bringing more than 15 years of human capital management to her role as Chief People Officer, Meagan is responsible for fostering an environment of heightened individual and team performance and unlocking the culture framework that makes organizations tick. Meagan focuses on growing talent through learning and development programs, coaching effective leadership teams, and establishing talent programs that promote and inspire career development. From articulating an employer brand to leading internal hackathons, Meagan deploys a variety of culture-building initiatives that energize teams’ and people’s highest potentials.</p><p>Prior to Yieldmo, Meagan’s experiences spanned industries—including ad tech and digital media—and company stages from startup to established. She holds a bachelor&#8217;s degree from Syracuse University and a master’s from American University.</p><p><a class="leadership-profile" style="font-size: 16px;" href="https://www.linkedin.com/in/mbreensos/" target="_blank" rel="noopener">Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-e23ef78 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="e23ef78" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-319ca60" data-id="319ca60" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-3311498 elementor-widget elementor-widget-image" data-id="3311498" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Todd.png" class="attachment-large size-large wp-image-1032" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Todd.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Todd-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-bd61bcd elementor-widget elementor-widget-heading" data-id="bd61bcd" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Todd Coleman
<br>
Chief Architect and Co-Founder
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-1e78860 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="1e78860" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-3191" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-3191" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-3191" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-3191"><span style="font-size: 16px;">Todd brings his deep experience building ad tech platforms to his role as Chief Architect. Prior to being part of the founding team at Yieldmo, Todd worked closely with the co-founders during his tenure at Quigo Technologies, Inc., which was acquired by AOL in 2007.</span>

Before that, Todd worked for Columbia House and Tallan enterprise consultants. He holds a Master in Computer Science from the University of Colorado Boulder and undergraduate degrees in both business and CS from the University of Missouri Columbia.

<a class="leadership-profile" href="https://www.linkedin.com/in/todd-coleman-40084/">Linkedin</a></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-cc4be08" data-id="cc4be08" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-634bc0e elementor-widget elementor-widget-image" data-id="634bc0e" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Lisa.png" class="attachment-large size-large wp-image-1034" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Lisa.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Lisa-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-bd2bc2d elementor-widget elementor-widget-heading" data-id="bd2bc2d" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Lisa Bradner
<br>
Chief Strategy Officer</p>		</div>
				</div>
				<div class="elementor-element elementor-element-8a4f3e0 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="8a4f3e0" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1451" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1451" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-1451" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1451"><p>Lisa is a seasoned strategic media and marketing leader with more than 20 years experience leading organizational change. Having worked as a client, as an analyst, as an agency leader and now as Chief Strategy Officer of Yieldmo&#8217;s business, she has seen from all sides the opportunities and challenges of integrating technology and data into marketing to create better more holistic experiences for consumers. Lisa&#8217;s previous work experience includes time at media agencies (most recently as President of OMD, Midwest), time as an analyst at Forrester research counseling CMOs on emerging data and digital media trends, and time as a client developing new products and lines for manufacturers such as Fortune Brands. Lisa has a BA from Yale and an MBA from The Kellogg Graduate School of Management.</p><p><a class="leadership-profile" href="https://www.linkedin.com/in/lisabradner/"> Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e4c69a3" data-id="e4c69a3" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-b2fb473 elementor-widget elementor-widget-image" data-id="b2fb473" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="800" height="823" src="https://yieldmo.com/wp-content/uploads/2022/03/JohnTigg.png" class="attachment-large size-large wp-image-12212" alt="John-Tigg" srcset="https://yieldmo.com/wp-content/uploads/2022/03/JohnTigg.png 809w, https://yieldmo.com/wp-content/uploads/2022/03/JohnTigg-292x300.png 292w, https://yieldmo.com/wp-content/uploads/2022/03/JohnTigg-768x790.png 768w" sizes="(max-width: 800px) 100vw, 800px" />															</div>
				</div>
				<div class="elementor-element elementor-element-b9b53d0 elementor-widget elementor-widget-heading" data-id="b9b53d0" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">John Tigg
<br>
EVP, Global Buyer Development &amp; GM, International</p>		</div>
				</div>
				<div class="elementor-element elementor-element-4cbebc6 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="4cbebc6" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-8041" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-8041" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-8041" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-8041"><p><span style="font-weight: 400;">Over nearly 20 years in advertising, John has a long history of building successful teams and businesses across the industry, in particular in the ad tech space. A specialist in the advanced TV sector, John most recently served as VP &amp; Managing Director EMEA for Cadent, leading the company’s successful expansion in Europe as the leader in addressable TV advertising. Prior to that, John served as SVP of Enterprise and Media solutions at Videology Inc., playing a key role in the executive leadership group that in under 5 years grew a start-up business with into the clear market leader in EMEA. John has also held senior leadership roles at Yahoo Inc. and lives in London, UK. </span></p><p><a class="leadership-profile" style="font-size: 16px;" href="https://www.linkedin.com/in/johntigg/" target="_blank" rel="noopener">Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-3b7518a elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="3b7518a" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1ce3b27" data-id="1ce3b27" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-3dd0949 elementor-widget elementor-widget-image" data-id="3dd0949" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="300" height="300" src="https://yieldmo.com/wp-content/uploads/2024/01/Jen.png" class="attachment-large size-large wp-image-15918" alt="" srcset="https://yieldmo.com/wp-content/uploads/2024/01/Jen.png 300w, https://yieldmo.com/wp-content/uploads/2024/01/Jen-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />															</div>
				</div>
				<div class="elementor-element elementor-element-ca462d2 elementor-widget elementor-widget-heading" data-id="ca462d2" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Jennifer Werner
<br>
SVP, Sales & Client Partnerships
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-39b83b5 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="39b83b5" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-6051" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-6051" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-6051" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-6051"><p class="p1">Jennifer is a seasoned professional with a rich background in media and advertising. With a decade at Time Inc., where she represented some of the world’s most iconic brands, and subsequent roles as Head of Brand Partnerships at eBay Ads and most recently, VP of Sales for Teads, Jennifer brings a wealth of industry knowledge. In her new capacity as SVP of Sales at Yieldmo, she will spearhead sales partnerships, leveraging her expertise to propel the organization to new heights. Based in Alpharetta, GA, Jennifer is supported by her husband, Chris Werner, and their two children.</p><p><a class="leadership-profile" href="https://www.linkedin.com/in/jennifermwerner/"> Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7081c7f" data-id="7081c7f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-0278e1c elementor-widget elementor-widget-image" data-id="0278e1c" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Dan.png" class="attachment-large size-large wp-image-1036" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Dan.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Leadership-Dan-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-0847624 elementor-widget elementor-widget-heading" data-id="0847624" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Dan Contento
<br>
SVP, Global Platform Development
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-5d8734a leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="5d8734a" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-9801" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-9801" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-9801" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-9801"><p>Dan heads up the Global Platform Development team at Yieldmo, where he oversees strategy and relationships related to Yieldmo&#8217;s Programmatic marketplace.</p><p>Prior to joining Yieldmo, Dan was Vice President of Sales at Luminate, an interactive image technology firm. He also led sales at news aggregator Digg, where he helped pioneer their native ad product called Digg Ads. Dan has also held sales roles at Yahoo!, CNET Networks, and Ziff-Davis Publishing.</p><p>Dan holds a BA in Economics from the University of Pennsylvania.</p><p><a class="leadership-profile" href="https://www.linkedin.com/in/dancontento/"> Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-eb6c797" data-id="eb6c797" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-cdcc3c2 elementor-widget elementor-widget-image" data-id="cdcc3c2" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="800" height="735" src="https://yieldmo.com/wp-content/uploads/2022/01/StephenCutbill-Headshot-1024x941.png" class="attachment-large size-large wp-image-11172" alt="Stephen Cutbill Headshot" srcset="https://yieldmo.com/wp-content/uploads/2022/01/StephenCutbill-Headshot-1024x941.png 1024w, https://yieldmo.com/wp-content/uploads/2022/01/StephenCutbill-Headshot-300x276.png 300w, https://yieldmo.com/wp-content/uploads/2022/01/StephenCutbill-Headshot-768x706.png 768w, https://yieldmo.com/wp-content/uploads/2022/01/StephenCutbill-Headshot.png 1158w" sizes="(max-width: 800px) 100vw, 800px" />															</div>
				</div>
				<div class="elementor-element elementor-element-fbc5c28 elementor-widget elementor-widget-heading" data-id="fbc5c28" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Stephen Cutbill
<br>
UK General Manager
​</p>		</div>
				</div>
				<div class="elementor-element elementor-element-6529b78 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="6529b78" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1061" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1061" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-1061" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1061"><p>Stephen is Yieldmo’s UK General Manager and an experienced international digital leader. Stephen has spent more than 15 years working on both the buy and sell-side of the advertising ecosystem, at companies such as Future PLC, MediaMath, OpenX, and TripleLift. He joined Yieldmo from Cavai, where he had previously been VP of Global Partnerships.With expert knowledge of leading — and organising — commercial and client service efforts across DSPs, SSP’s and publishers, he is charged with spearheading the development and execution of Yieldmo’s UK strategy, as well as acquiring new clients. In addition, Stephen brings expertise in management and people development as he builds and leads Yieldmo’s UK team.</p><p><a class="leadership-profile" style="font-size: 16px;" href="https://www.linkedin.com/in/stephencutbill/" target="_blank" rel="noopener">Linkedin</a></p></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-d8de883 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="d8de883" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ed2724b" data-id="ed2724b" data-element_type="column">
			<div class="elementor-widget-wrap">
									</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4d00d71" data-id="4d00d71" data-element_type="column">
			<div class="elementor-widget-wrap">
									</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f2bd593" data-id="f2bd593" data-element_type="column">
			<div class="elementor-widget-wrap">
									</div>
		</div>
							</div>
		</section>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-5c0064b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c0064b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2a53351" data-id="2a53351" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-40fe886 elementor-invisible elementor-widget elementor-widget-heading" data-id="40fe886" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">BOARD MEMBERS</h2>		</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-fe43212 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="fe43212" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f933508" data-id="f933508" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-d745dfa elementor-widget elementor-widget-image" data-id="d745dfa" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="175" height="175" src="https://yieldmo.com/wp-content/uploads/2021/01/Whitnee-Shulman-Photography_Yieldmo_head.png" class="attachment-large size-large wp-image-619" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Whitnee-Shulman-Photography_Yieldmo_head.png 175w, https://yieldmo.com/wp-content/uploads/2021/01/Whitnee-Shulman-Photography_Yieldmo_head-150x150.png 150w" sizes="(max-width: 175px) 100vw, 175px" />															</div>
				</div>
				<div class="elementor-element elementor-element-6cfce08 elementor-widget elementor-widget-heading" data-id="6cfce08" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Michael Yavonditte
<br>
Founder & CEO
</p>		</div>
				</div>
				<div class="elementor-element elementor-element-0ebc136 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="0ebc136" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1541" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1541" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-1541" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1541"><span style="font-weight: 400;">Mike Yavonditte is the Founder and CEO of Yieldmo, positions he has held since the company’s formation in 2012. Mike is focused on unleashing the power of big data toward better performance and understanding while delivering exceptional, human-centric ad experiences. Mike is a veteran of new media and technology and is a private investor in the technology industry with more than 100 active investments. Mike was previously CEO of Quigo, pioneers of auction-based advertising marketplaces. Through his successful strategy of helping publishers monetize their content, Mike led Quigo to a successful acquisition by AOL in 2007. Prior to that, Mike served as a sales and business development leader for numerous organizations, including USA Networks Electronic Commerce Solutions Group, AltaVista, Juno Online Services, and Ziff-Davis Publishing.</span>

 <a class="leadership-profile" href="https://www.linkedin.com/in/michael-yavonditte-3b69193a/"> Linkedin</a></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-539cddf" data-id="539cddf" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-f59096f elementor-widget elementor-widget-image" data-id="f59096f" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Brad-1.png" class="attachment-large size-large wp-image-1038" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Brad-1.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Brad-1-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-9331406 elementor-widget elementor-widget-heading" data-id="9331406" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Brad Burnham

<br>
Union Square Ventures
<br></p>		</div>
				</div>
				<div class="elementor-element elementor-element-73e0c42 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="73e0c42" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1211" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1211" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-1211" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1211">Brad is a partner at Union Square Ventures. He started working in information technology with AT&#038;T in 1979. Brad spun Echo Logic out of Bell Laboratories in 1989 and joined AT&#038;T Ventures in 1993. Brad co-founded TACODA in 2001 before joining Fred Wilson to create Union Square Ventures in 2003. Brad majored in political science at Wesleyan University. He is married with two kids and lives in New York City.</div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4eab0a5" data-id="4eab0a5" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-2f22771 elementor-widget elementor-widget-image" data-id="2f22771" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Doug-1.png" class="attachment-large size-large wp-image-1039" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Doug-1.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Doug-1-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-f2f7df2 elementor-widget elementor-widget-heading" data-id="f2f7df2" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Doug Chertok
<br>
Vast Ventures
<br></p>		</div>
				</div>
				<div class="elementor-element elementor-element-404c3d3 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="404c3d3" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-6741" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-6741" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-6741" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-6741">Doug has founded, advised and invested in early-stage companies for over 20 years. He is the founder of Vast Ventures, a manifesto-driven venture fund investing in disruptive companies with global impact. The Vast portfolio includes companies such as ASAPP, BarkBox, Bidclix (sold to Aquantive/Microsoft), ClassPass, Coinbase, Conductor (sold to WeWork), Diamond Foundry, Eighty, Elite Daily (sold to Daily Mail), FirstFuel (sold to Tendril), Fotolog (sold to Hi-Media), Ginkgo Bioworks, Inverse, Kiip, Klout (sold to Lithium), Latch, Lygos, Meetup (sold to WeWork), Mighty, Moat (sold to Oracle), Modria (sold to Tyler Technologies), Phosphorus, OpenX, Phosphorus, Quigo (sold to AOL/Time Warner), Recombine (sold to Cooper Companies), Ritual, Ripple, SafeGraph, Samumed, Streeteasy, Styleseat, SweetGreen, Tala, Troops, Yieldmo, and ZocDoc.
<br><br>
For more: www.vastvc.com</div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-95e8cf0 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="95e8cf0" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6a0aa1d" data-id="6a0aa1d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-dea00cc elementor-widget elementor-widget-image" data-id="dea00cc" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Allison.png" class="attachment-large size-large wp-image-1040" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Allison.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Allison-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-c8585af elementor-widget elementor-widget-heading" data-id="c8585af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Allison Goldberg

<br>
Independent Director
<br></p>		</div>
				</div>
				<div class="elementor-element elementor-element-40c310a leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="40c310a" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-6791" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-6791" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-6791" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-6791">Allison Goldberg is a digital consumer and media technology investor. She was Group Managing Director &amp; Senior Vice President of Time Warner Investments, where she ran the group focused on strategic equity investments. Prior to joining Time Warner in July 2001, Allison was an Associate at Groupe Arnault, investing in and managing new media and technology equity investments for the private holding company of the Chairman of LVMH. Previously, she worked in the Global Media Group, Investment Banking at Morgan Stanley.
<br><br>
Allison graduated from the Wharton School at the University of Pennsylvania, where she received a Bachelor of Science in Economics, with concentrations in Finance and Operations &amp; Information Management. She is married with two kids and lives in New York City.</div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c40ab0b" data-id="c40ab0b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-966becc elementor-widget elementor-widget-image" data-id="966becc" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Erin.png" class="attachment-large size-large wp-image-1041" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Erin.png 200w, https://yieldmo.com/wp-content/uploads/2021/01/Yieldmo-Board-Erin-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-4e15463 elementor-widget elementor-widget-heading" data-id="4e15463" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Erik Nordlander<BR>
Google Ventures
<br></p>		</div>
				</div>
				<div class="elementor-element elementor-element-9de6748 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="9de6748" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1651" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1651" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-1651" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1651">Erik is a general partner at GV, where he manages GV’s operations in New York and is part of the enterprise investing team. Erik has over a decade of technical experience as an engineering leader with expertise in building first-class teams and scaling massive systems. He has interests in developer tools, cloud infrastructure, and machine learning. Prior to joining GV in 2010, Erik led the development of Google’s next generation display ad serving system. He helped with the acquisition and technical integration of DoubleClick (DCLK) and led a team that built statistical and machine learning models for Google’s ad businesses.
<br><br>
Erik was also a developer on Google’s core infrastructure, creating a distributed file system that Google.com and Gmail rely on today. Erik studied computer science and engineering at MIT. He completed his graduate research at the Computer Science and Artificial Intelligence Laboratory where he focused on unique data extraction and disk forensics. Erik is an avid runner and an expert in television game show theory.</div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-308f2bd" data-id="308f2bd" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-06d7eb6 elementor-widget elementor-widget-image" data-id="06d7eb6" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="200" height="200" src="https://yieldmo.com/wp-content/uploads/2021/10/Yieldmo-Leadership-Mike.jpg" class="attachment-large size-large wp-image-8495" alt="" srcset="https://yieldmo.com/wp-content/uploads/2021/10/Yieldmo-Leadership-Mike.jpg 200w, https://yieldmo.com/wp-content/uploads/2021/10/Yieldmo-Leadership-Mike-150x150.jpg 150w" sizes="(max-width: 200px) 100vw, 200px" />															</div>
				</div>
				<div class="elementor-element elementor-element-f119838 elementor-widget elementor-widget-heading" data-id="f119838" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Mike Fazio
<br>
MARCorp Financial, LLC
<br></p>		</div>
				</div>
				<div class="elementor-element elementor-element-fec9ba1 leadership-learn-more-accordian elementor-widget elementor-widget-accordion" data-id="fec9ba1" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-2671" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-2671" aria-expanded="false">
												<a class="elementor-accordion-title" tabindex="0">Learn More ></a>
					</div>
					<div id="elementor-tab-content-2671" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-2671">Michael A. Fazio is a highly accomplished and result-driven investment executive with over 30 years of experience in advisory services in connection with acquisitions, divestitures, corporate strategy, operational oversight and restructurings. Michael has a genuine passion for investment management and an extensive background in developing organizational strategies to optimize business performance and growth.


Since its inception in August 2012, Michael has served as the chairman of MARCorp Financial LLC, a private equity firm located in Illinois. Previously he held various senior management roles at Houlihan Lokey, a global investment banking firm, serving as managing director and co-head of the European Financial Institutions Group. Michael has also served as President and CEO of Comdisco Europe, a multibillion equipment leasing company. Prior to Comdisco, Inc., he served as EVP and COO of Deutsche Bank of the Americas, a global banking and financial services company.


 <a class="leadership-profile" href="https://www.linkedin.com/in/michaelafazio/"> Linkedin</a></div>
				</div>
								</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-43e8a8a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="43e8a8a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-55caec6" data-id="55caec6" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-8e138b3 elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-heading" data-id="8e138b3" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">See what Yieldmo can do for your business.</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-25076df elementor-align-left elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-button" data-id="25076df" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="https://yieldmo.com/contact-us/">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">LEARN MORE</span>
		</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
							</div>
				<div class="post-tags">
					</div>
			</div>

	<section id="comments" class="comments-area">

	


</section><!-- .comments-area -->
</main>

			<div data-elementor-type="footer" data-elementor-id="7235" class="elementor elementor-7235 elementor-location-footer" data-elementor-post-type="elementor_library">
								<section class="elementor-section elementor-top-section elementor-element elementor-element-8aa1221 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8aa1221" data-element_type="section" id="elementor-footer" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4198f1a" data-id="4198f1a" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-ad2d11e elementor-widget elementor-widget-heading" data-id="ad2d11e" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="/for-buyers">- For Buyers</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-c7c1513 elementor-widget elementor-widget-heading" data-id="c7c1513" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="/for-sellers">- For Sellers</a></h3>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a56acc7" data-id="a56acc7" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-4385a60 elementor-widget elementor-widget-heading" data-id="4385a60" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Products Overview</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-01d385c elementor-widget elementor-widget-heading" data-id="01d385c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/product-overview/">- Products Overview</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-22bb1cc elementor-widget elementor-widget-heading" data-id="22bb1cc" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="/global-smart-exchange/">- Global Smart Exchange</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-a4c0c50 elementor-widget elementor-widget-heading" data-id="a4c0c50" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="/contextual-curation-engine/">- Contextual Curation Engine</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-3c75a77 elementor-widget elementor-widget-heading" data-id="3c75a77" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/advertising-formats/">- Advertising Formats</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-297d216 elementor-widget elementor-widget-heading" data-id="297d216" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/deals/">- Yieldmo Deals</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-0cc9bc3 elementor-widget elementor-widget-heading" data-id="0cc9bc3" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/privacy-first-marketplace/">- Privacy-First Marketplace</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-fd6525b elementor-widget elementor-widget-heading" data-id="fd6525b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/video-ctv/">- Video/CTV</a></h3>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3d0b55d" data-id="3d0b55d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-e3db726 elementor-widget elementor-widget-heading" data-id="e3db726" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Company</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-918211c elementor-widget elementor-widget-heading" data-id="918211c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="/leadership">- Leadership</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-2e0fbc0 elementor-widget elementor-widget-heading" data-id="2e0fbc0" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="/careers">- Careers</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-3705f78 elementor-widget elementor-widget-heading" data-id="3705f78" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/contact-us/">- Contact Us</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-51d663f elementor-widget elementor-widget-heading" data-id="51d663f" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Insights</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-4d375b0 elementor-widget elementor-widget-heading" data-id="4d375b0" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/blog/">- Blog</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-9ec1f51 elementor-widget elementor-widget-heading" data-id="9ec1f51" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/case-study/">- Case Study</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-1e0117e elementor-widget elementor-widget-heading" data-id="1e0117e" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/press/">- Press</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-c10485e elementor-widget elementor-widget-heading" data-id="c10485e" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/events/">- Events</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-5b3748d elementor-widget elementor-widget-heading" data-id="5b3748d" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/whitepaper-contextualreimagined/">- Contextual Whitepaper</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-821f515 elementor-widget elementor-widget-heading" data-id="821f515" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/instructional-guides/">- Instructional Guides </a></h3>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-802b1ee" data-id="802b1ee" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-0c848a8 elementor-widget elementor-widget-heading" data-id="0c848a8" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default"><a href="https://yieldmo.com/contact-us/">Contact Us</a></h2>		</div>
				</div>
				<div class="elementor-element elementor-element-0b19b95 elementor-widget elementor-widget-heading" data-id="0b19b95" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="mailto:info@yieldmo.com">info@yieldmo.com</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-9804e0b elementor-widget elementor-widget-heading" data-id="9804e0b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="mailto:careers@yieldmo.com">careers@yieldmo.com</a></h3>		</div>
				</div>
				<div class="elementor-element elementor-element-1a8b751 elementor-widget elementor-widget-heading" data-id="1a8b751" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default"><a href="tel:%20(646)%20845%200800">(646) 845 0800</a></h3>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-6927ad0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6927ad0" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f84e341" data-id="f84e341" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-3fa567f elementor-widget elementor-widget-heading" data-id="3fa567f" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Copyright © 2023 Yieldmo | <a href="/privacy-policy">Privacy Policy</a> | <a href="/adpolicy/">Yieldmo’s Ad Policy</a> | <a href="/opt-out/">Opt Out</a> | <a href="/docs/pub_guidelines/">Publisher Guidelines</a> | <a href="/opt-out/">Do Not Sell My Personal Information</a> | <a href="/processor-list/">Processor List</a> | <a | <a href="/dpa-controller-to-controller/">DPA Controller to Controller </a> | <a href="/dpa-controller-to-controller/ "> Retargeting Service Addendum </a> | Developed by <a href="https://yellowlionmedia.com">Yellow Lion Media</a></h2>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
						</div>
		
<link rel='stylesheet' id='e-animations-css' href='https://yieldmo.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css' type='text/css' media='all' />
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/jquery/jquery.min.js" id="jquery-core-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/jquery/jquery-migrate.min.js" id="jquery-migrate-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js" id="smartmenus-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js" id="elementor-pro-webpack-runtime-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js" id="elementor-webpack-runtime-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js" id="elementor-frontend-modules-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js" id="wp-polyfill-inert-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js" id="regenerator-runtime-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/dist/vendor/wp-polyfill.min.js" id="wp-polyfill-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/dist/hooks.min.js" id="wp-hooks-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/dist/i18n.min.js" id="wp-i18n-js"></script>
<script type="text/javascript" id="wp-i18n-js-after">
/* <![CDATA[ */
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
/* ]]> */
</script>
<script type="text/javascript" id="elementor-pro-frontend-js-before">
/* <![CDATA[ */
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/yieldmo.com\/wp-admin\/admin-ajax.php","nonce":"089f3156ee","urls":{"assets":"https:\/\/yieldmo.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/yieldmo.com\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/yieldmo.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js" id="elementor-pro-frontend-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js" id="elementor-waypoints-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-includes/js/jquery/ui/core.min.js" id="jquery-ui-core-js"></script>
<script type="text/javascript" id="elementor-frontend-js-extra">
/* <![CDATA[ */
var uael_particles_script = {"uael_particles_url":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/min-js\/uael-particles.min.js","particles_url":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/lib\/particles\/particles.min.js","snowflakes_image":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/snowflake.svg","gift":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/gift.png","tree":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/tree.png","skull":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/skull.png","ghost":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/ghost.png","moon":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/moon.png","bat":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/bat.png","pumpkin":"https:\/\/yieldmo.com\/wp-content\/plugins\/ultimate-elementor\/assets\/img\/pumpkin.png"};
/* ]]> */
</script>
<script type="text/javascript" id="elementor-frontend-js-before">
/* <![CDATA[ */
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.18.1","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"additional_custom_breakpoints":true,"theme_builder_v2":true,"block_editor_assets_optimize":true,"landing-pages":true,"e_image_loading_optimization":true,"e_global_styleguide":true,"page-transitions":true,"notes":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/yieldmo.com\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper-container","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":9929,"title":"Leadership%20-%20Yieldmo","excerpt":"","featuredImage":"https:\/\/yieldmo.com\/wp-content\/uploads\/2022\/03\/SEO-images_0001_LEADERSHIP.png"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor/assets/js/frontend.min.js" id="elementor-frontend-js"></script>
<script type="text/javascript" id="elementor-frontend-js-after">
/* <![CDATA[ */
window.scope_array = [];
								window.backend = 0;
								jQuery.cachedScript = function( url, options ) {
									// Allow user to set any option except for dataType, cache, and url.
									options = jQuery.extend( options || {}, {
										dataType: "script",
										cache: true,
										url: url
									});
									// Return the jqXHR object so we can chain callbacks.
									return jQuery.ajax( options );
								};
							    jQuery( window ).on( "elementor/frontend/init", function() {
									elementorFrontend.hooks.addAction( "frontend/element_ready/global", function( $scope, $ ){
										if ( "undefined" == typeof $scope ) {
												return;
										}
										if ( $scope.hasClass( "uael-particle-yes" ) ) {
											window.scope_array.push( $scope );
											$scope.find(".uael-particle-wrapper").addClass("js-is-enabled");
										}else{
											return;
										}
										if(elementorFrontend.isEditMode() && $scope.find(".uael-particle-wrapper").hasClass("js-is-enabled") && window.backend == 0 ){		
											var uael_url = uael_particles_script.uael_particles_url;
											
											jQuery.cachedScript( uael_url );
											window.backend = 1;
										}else if(elementorFrontend.isEditMode()){
											var uael_url = uael_particles_script.uael_particles_url;
											jQuery.cachedScript( uael_url ).done(function(){
												var flag = true;
											});
										}
									});
								});
								 jQuery( document ).on( "ready elementor/popup/show", () => {
									if ( jQuery.find( ".uael-particle-yes" ).length < 1 ) {
										return;
									}
									var uael_url = uael_particles_script.uael_particles_url;
									jQuery.cachedScript = function( url, options ) {
										// Allow user to set any option except for dataType, cache, and url.
										options = jQuery.extend( options || {}, {
											dataType: "script",
											cache: true,
											url: url
										});
										// Return the jqXHR object so we can chain callbacks.
										return jQuery.ajax( options );
									};
									jQuery.cachedScript( uael_url );
								});	
/* ]]> */
</script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js" id="pro-elements-handlers-js"></script>
<script type="text/javascript" src="https://yieldmo.com/wp-content/plugins/elementor-pro/assets/lib/sticky/jquery.sticky.min.js" id="e-sticky-js"></script>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J6MMTS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

</body>
</html>
