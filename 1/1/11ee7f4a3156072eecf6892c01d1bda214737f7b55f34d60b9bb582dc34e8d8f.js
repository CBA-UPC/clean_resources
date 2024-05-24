document.addEventListener("focusin", function(event) {
	const elem = event.target?.closest("input,select,textarea,button,meter,progress");
	if ( elem ) {
		window[ gtm4wp_datalayer_name ].push({
			'event'    : 'gtm4wp.formElementEnter',

			'inputID'   : elem.getAttribute("id") || "(no input ID)",
			'inputName' : elem.getAttribute("name") || "(no input name)",
			'inputClass': elem.getAttribute("class") || "(no input class)",

			'formID'   : elem.form?.getAttribute("id") || "(no form ID)",
			'formName' : elem.form?.getAttribute("name") || "(no form name)",
			'formClass': elem.form?.getAttribute("class") || "(no form class)"
		});
	}
}, false);

document.addEventListener("focusout", function(event) {
	const elem = event.target.closest("input,select,textarea,button,meter,progress");
	if ( elem ) {
		window[ gtm4wp_datalayer_name ].push({
			'event'    : 'gtm4wp.formElementLeave',

			'inputID'   : elem.getAttribute("id") || "(no input ID)",
			'inputName' : elem.getAttribute("name") || "(no input name)",
			'inputClass': elem.getAttribute("class") || "(no input class)",

			'formID'   : elem.form?.getAttribute("id") || "(no form ID)",
			'formName' : elem.form?.getAttribute("name") || "(no form name)",
			'formClass': elem.form?.getAttribute("class") || "(no form class)"
		});
	};
}, false);
ImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
</script>
<link rel='stylesheet' id='rtwwcfm-template-fourth-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/rtwwcfm-wordpress-contact-form-7-multistep/public/partials/rtwwcfm-template-fourth.css?ver=1.3.1' media='' />
<link rel='stylesheet' id='pa-frontend-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/premium-addons-elementor/pa-frontend-9b7dd76ce.min.css?ver=1705454342' media='all' />
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
<link rel='stylesheet' id='wp-block-library-css' href='https://inscricao.prozeducacao.com.br/wp-includes/css/dist/block-library/style.min.css?ver=6.4.2' media='all' />
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
<link rel='stylesheet' id='contact-form-7-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.7.2' media='all' />
<link rel='stylesheet' id='wordpress-contact-form-7-multistep-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/rtwwcfm-wordpress-contact-form-7-multistep/public/css/rtwwcfm-wordpress-contact-form-7-multistep-public.css?ver=1.3.1' media='all' />
<link rel='stylesheet' id='font-awesomes-css' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css?ver=1.3.1' media='' />
<link rel='stylesheet' id='dashicons-css' href='https://inscricao.prozeducacao.com.br/wp-includes/css/dashicons.min.css?ver=6.4.2' media='all' />
<link rel='stylesheet' id='wp-jquery-ui-dialog-css' href='https://inscricao.prozeducacao.com.br/wp-includes/css/jquery-ui-dialog.min.css?ver=6.4.2' media='all' />
<link rel='stylesheet' id='hello-elementor-css' href='https://inscricao.prozeducacao.com.br/wp-content/themes/hello-elementor/style.min.css?ver=2.6.1' media='all' />
<link rel='stylesheet' id='hello-elementor-theme-style-css' href='https://inscricao.prozeducacao.com.br/wp-content/themes/hello-elementor/theme.min.css?ver=2.6.1' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.15.3' media='all' />
<style id='elementor-frontend-inline-css'>
body { overflow-x: hidden; }
.elementor-section.elementor-columns-alignment-fix-enabled > .elementor-column-gap-default > .elementor-row { width: calc(100% + 20px); margin-left: -10px; margin-right: -10px; }
.elementor-section.elementor-columns-alignment-fix-enabled > .elementor-column-gap-narrow > .elementor-row { width: calc(100% + 10px); margin-left: -5px; margin-right: -5px; }
.elementor-section.elementor-columns-alignment-fix-enabled > .elementor-column-gap-extended > .elementor-row { width: calc(100% + 30px); margin-left: -15px; margin-right: -15px; }
.elementor-section.elementor-columns-alignment-fix-enabled > .elementor-column-gap-wide > .elementor-row { width: calc(100% + 40px); margin-left: -20px; margin-right: -20px; }
.elementor-section.elementor-columns-alignment-fix-enabled > .elementor-column-gap-wider > .elementor-row { width: calc(100% + 60px); margin-left: -30px; margin-right: -30px; }
</style>
<link rel='stylesheet' id='elementor-post-5-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/elementor/css/post-5.css?ver=1693406350' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.21.0' media='all' />
<link rel='stylesheet' id='swiper-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min.css?ver=5.3.6' media='all' />
<link rel='stylesheet' id='elementor-pro-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.15.1' media='all' />
<link rel='stylesheet' id='elementor-global-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/elementor/css/global.css?ver=1693406351' media='all' />
<link rel='stylesheet' id='elementor-post-14357-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/elementor/css/post-14357.css?ver=1704891621' media='all' />
<link rel='stylesheet' id='elementor-post-10441-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/elementor/css/post-10441.css?ver=1701799829' media='all' />
<link rel='stylesheet' id='elementor-post-7239-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/elementor/css/post-7239.css?ver=1696948820' media='all' />
<link rel='stylesheet' id='elementor-post-7232-css' href='https://inscricao.prozeducacao.com.br/wp-content/uploads/elementor/css/post-7232.css?ver=1696948591' media='all' />
<link rel='stylesheet' id='cf7cf-style-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/cf7-conditional-fields/style.css?ver=2.3.2' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CSora%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.4.2' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-brands-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-solid-css' href='https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2" id="jquery-ui-core-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.2" id="jquery-ui-mouse-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/resizable.min.js?ver=1.13.2" id="jquery-ui-resizable-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/draggable.min.js?ver=1.13.2" id="jquery-ui-draggable-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/controlgroup.min.js?ver=1.13.2" id="jquery-ui-controlgroup-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/checkboxradio.min.js?ver=1.13.2" id="jquery-ui-checkboxradio-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/button.min.js?ver=1.13.2" id="jquery-ui-button-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-includes/js/jquery/ui/dialog.min.js?ver=1.13.2" id="jquery-ui-dialog-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-content/plugins/rtwwcfm-wordpress-contact-form-7-multistep/public/js/rtwwcfm-wordpress-contact-form-7-multistep-public.js?ver=1.3.1" id="wordpress-contact-form-7-multistep-js"></script>
<script src="https://inscricao.prozeducacao.com.br/wp-content/plugins/rtwwcfm-wordpress-contact-form-7-multistep/public/js/notify.min.js?ver=1.3.1" id="notify-js-js"></script>
<link rel="https://api.w.org/" href="https://inscricao.prozeducacao.com.br/wp-json/" /><link rel="alternate" type="application/json" href="https://inscricao.prozeducacao.com.br/wp-json/wp/v2/pages/14357" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://inscricao.prozeducacao.com.br/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.2" />
<link rel="canonical" href="https://inscricao.prozeducacao.com.br/home-2024/" />
<link rel='shortlink' href='https://inscricao.prozeducacao.com.br/?p=14357' />
<link rel="alternate" type="application/json+oembed" href="https://inscricao.prozeducacao.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Finscricao.prozeducacao.com.br%2Fhome-2024%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://inscricao.prozeducacao.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Finscricao.prozeducacao.com.br%2Fhome-2024%2F&#038;format=xml" />
                  <link rel="apple-touch-icon" sizes="180x180" href="/wp-content/uploads/fbrfg/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/wp-content/uploads/fbrfg/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/wp-content/uploads/fbrfg/favicon-16x16.png">
<link rel="manifest" href="/wp-content/uploads/fbrfg/site.webmanifest">
<link rel="shortcut icon" href="/wp-content/uploads/fbrfg/favicon.ico">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-config" content="/wp-content/uploads/fbrfg/browserconfig.xml">
<meta name="theme-color" content="#ffffff"><meta name="generator" content="Elementor 3.15.3; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap">
		<style id="wp-custom-css">
			.wpcf7-response-output {
	display: none !important;
}
[type=button]:focus, [type=button]:hover, [type=submit]:focus, [type=submit]:hover, button:focus, button:hover, [type=button], [type=submit], button {
	background: #00AD59;
}
.elementor-element.elementor-element-bbdae6a {
	background-color: #593493 !important;
	border-bottom: 1px solid #8E6FBF !important;
   padding: 10px 0px 10px 0px !important;
}


.elementor-icon-list-item::marker, .elementor-element-166c0ef, .elementor-element.elementor-element-95fa006 .elementor-button .elementor-align-icon-left, .elementor-element.elementor-element-48945e6 .elementor-button .elementor-align-icon-left {
	display: none !important;
}
.elementor-element.elementor-element-78147a5 .elementor-icon-list-icon i {
	color: #fff !important;
}
.elementor-element.elementor-element-95fa006 .elementor-button {
	background-color: #593493 !important;
	border: 1px solid #fff !important;
}
.elementor-element.elementor-element-95fa006 .elementor-button:hover, .elementor-element.elementor-element-95fa006 .elementor-button:focus {
	background: #00AD59 !important;
}
@media (max-width: 600px) {
	.elementor-9016 .elementor-element.elementor-element-c5e94c0, .elementor-9016 .elementor-element.elementor-element-00c9025, .elementor-9016 .elementor-element.elementor-element-f5a05a9, .elementor-9024 .elementor-element.elementor-element-c5e94c0, .elementor-9024 .elementor-element.elementor-element-00c9025, .elementor-9030 .elementor-element.elementor-element-c5e94c0, .elementor-8349 .elementor-element.elementor-element-c5e94c0, .elementor-8349 .elementor-element.elementor-element-00c9025, .elementor-8349 .elementor-element.elementor-element-f5a05a9, .elementor-8349 .elementor-element.elementor-element-e736ce6 {
		margin-bottom: 30px !important;
		width: 100% !important;
	}
	.formTesteV {
		margin: 0 !important;
	}
	.elementor-9016 .elementor-element.elementor-element-75b4d86, .elementor-9024 .elementor-element.elementor-element-75b4d86, .elementor-8349 .elementor-element.elementor-element-75b4d86, .elementor-8349 .elementor-element.elementor-element-674ca3d {
		display: none;
	}
	.elementor-9016 .elementor-element.elementor-element-c86a6b7, .elementor-9016 .elementor-element.elementor-element-2d2712f, .elementor-9024 .elementor-element.elementor-element-2fe4c28, .elementor-9024 .elementor-element.elementor-element-c86a6b7, .elementor-9024 .elementor-element.elementor-element-2d2712f, .elementor-9024 .elementor-element.elementor-element-aa17089 {
		width: 100% !important;
	}
}		</style>
		</head>
<body class="page-template-default page page-id-14357 elementor-default elementor-kit-5 elementor-page elementor-page-14357">


<a class="skip-link screen-reader-text" href="#content">
	Skip to content</a>

<header id="site-header" class="site-header dynamic-header menu-dropdown-tablet" role="banner">
	<div class="header-inner">
		<div class="site-branding show-title">
							<h1 class="site-title show">
					<a href="https://inscricao.prozeducacao.com.br/" title="Inicial" rel="home">
						Proz Educação					</a>
				</h1>
					</div>

			</div>
</header>

<main id="content" class="site-main post-14357 page type-page status-publish hentry" role="main">
		<div class="page-content">
				<div data-elementor-type="wp-page" data-elementor-id="14357" class="elementor elementor-14357" data-elementor-post-type="page">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-14385b90 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="14385b90" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5ad12617 elementor-hidden-tablet elementor-hidden-mobile" data-id="5ad12617" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1c3ec833 elementor-widget elementor-widget-heading" data-id="1c3ec833" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.15.0 - 20-08-2023 */
.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><h3 class="elementor-heading-title elementor-size-default">Ainda não é aluno? INSCREVA-SE!</h3>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2950faaa elementor-hidden-tablet elementor-hidden-mobile" data-id="2950faaa" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1a3c09b6 elementor-align-right elementor-mobile-align-center elementor-hidden-tablet elementor-hidden-mobile abrirWhatsApp elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1a3c09b6" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
			<link rel="stylesheet" href="https://inscricao.prozeducacao.com.br/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css">		<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="#">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fab fa-whatsapp"></i>						</span>
										<span class="elementor-icon-list-text"> <strong>WhatsApp</strong></span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5a17598b" data-id="5a17598b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1d493bd6 elementor-align-right elementor-mobile-align-right elementor-widget-mobile__width-initial elementor-hidden-desktop abrirWhatsApp elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1d493bd6" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="#">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fab fa-whatsapp"></i>						</span>
										<span class="elementor-icon-list-text">WhatsApp</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-5eb77094 elementor-align-right elementor-mobile-align-left elementor-widget-mobile__width-initial elementor-hidden-desktop elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5eb77094" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="tel:+5508005803041">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-phone-alt"></i>						</span>
										<span class="elementor-icon-list-text">Fale Conosco</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-265fb1d2 elementor-align-right elementor-mobile-align-center elementor-hidden-tablet elementor-hidden-mobile elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="265fb1d2" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="tel:08005803041">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-phone-alt"></i>						</span>
										<span class="elementor-icon-list-text">Fale Conosco: <strong>0800-580-3041</strong></span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e093300 elementor-hidden-mobile" data-id="e093300" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-6fa5295 premium-nav-hor premium-nav-none premium-ham-dropdown elementor-widget elementor-widget-premium-nav-menu" data-id="6fa5295" data-element_type="widget" data-settings="{&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;submenu_item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;}}" data-widget_type="premium-nav-menu.default">
				<div class="elementor-widget-container">
						<div data-settings="{&quot;breakpoint&quot;:1024,&quot;mobileLayout&quot;:&quot;dropdown&quot;,&quot;mainLayout&quot;:&quot;hor&quot;,&quot;stretchDropdown&quot;:false,&quot;hoverEffect&quot;:&quot;&quot;,&quot;submenuEvent&quot;:&quot;hover&quot;,&quot;submenuTrigger&quot;:null,&quot;closeAfterClick&quot;:false}" class="premium-nav-widget-container premium-nav-pointer-none" style="visibility:hidden; opacity:0;">
				<div class="premium-ver-inner-container">
					<div class="premium-hamburger-toggle premium-mobile-menu-icon" role="button" aria-label="Toggle Menu">
						<span class="premium-toggle-text">
							<i aria-hidden="true" class="fas fa-bars"></i>Menu						</span>
						<span class="premium-toggle-close">
							<i aria-hidden="true" class="fas fa-times"></i>Fechar						</span>
					</div>
												<div class="premium-nav-menu-container premium-nav-default">
								<ul id="menu-aluno" class="premium-nav-menu premium-main-nav-menu"><li id="premium-nav-menu-item-15000" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children premium-nav-menu-item"><a href="#" class="premium-menu-link premium-menu-link-parent"><i class="fa fa-user premium-item-icon" style="color:#ff7f00"></i>Já sou aluno<i class="fas fa-angle-down premium-dropdown-icon"></i></a>
<ul class="premium-sub-menu">
	<li id="premium-nav-menu-item-15001" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://essa.prozeducacao.com.br/" class="premium-menu-link premium-sub-menu-link">São Paulo</a></li>
	<li id="premium-nav-menu-item-15003" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://enferminas.prozeducacao.com.br/" class="premium-menu-link premium-sub-menu-link">Minas Gerais</a></li>
	<li id="premium-nav-menu-item-15004" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://essa.prozeducacao.com.br/" class="premium-menu-link premium-sub-menu-link">Paraná</a></li>
</ul>
</li>
</ul>							</div>
														<div class="premium-mobile-menu-container">
								<ul id="menu-aluno-1" class="premium-mobile-menu premium-main-mobile-menu premium-main-nav-menu"><li id="premium-nav-menu-item-15000" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children premium-nav-menu-item"><a href="#" class="premium-menu-link premium-menu-link-parent"><i class="fa fa-user premium-item-icon" style="color:#ff7f00"></i>Já sou aluno<i class="fas fa-angle-down premium-dropdown-icon"></i></a>
<ul class="premium-sub-menu">
	<li id="premium-nav-menu-item-15001" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://essa.prozeducacao.com.br/" class="premium-menu-link premium-sub-menu-link">São Paulo</a></li>
	<li id="premium-nav-menu-item-15003" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://enferminas.prozeducacao.com.br/" class="premium-menu-link premium-sub-menu-link">Minas Gerais</a></li>
	<li id="premium-nav-menu-item-15004" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://essa.prozeducacao.com.br/" class="premium-menu-link premium-sub-menu-link">Paraná</a></li>
</ul>
</li>
</ul>							</div>
											</div>
			</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-2290c44d elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2290c44d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4317e53f" data-id="4317e53f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-5e7c2fd4 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-id="5e7c2fd4" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.15.0 - 20-08-2023 */
.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>													<a href="https://prozeducacao.com.br">
							<img decoding="async" width="118" height="35" src="https://inscricao.prozeducacao.com.br/wp-content/uploads/2024/01/logo.png" class="attachment-large size-large wp-image-14359" alt="" />								</a>
															</div>
				</div>
				<div class="elementor-element elementor-element-5c8c885c elementor-align-justify elementor-widget-mobile__width-initial elementor-hidden-desktop elementor-widget elementor-widget-button" data-id="5c8c885c" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="#inscreversem">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">INSCREVA-SE</span>
		</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8b52716" data-id="8b52716" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-4b226846 premium-nav-hor premium-nav-none premium-ham-dropdown elementor-widget elementor-widget-premium-nav-menu" data-id="4b226846" data-element_type="widget" data-settings="{&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;submenu_item_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;}}" data-widget_type="premium-nav-menu.default">
				<div class="elementor-widget-container">
						<div data-settings="{&quot;breakpoint&quot;:1024,&quot;mobileLayout&quot;:&quot;dropdown&quot;,&quot;mainLayout&quot;:&quot;hor&quot;,&quot;stretchDropdown&quot;:true,&quot;hoverEffect&quot;:&quot;&quot;,&quot;submenuEvent&quot;:&quot;hover&quot;,&quot;submenuTrigger&quot;:null,&quot;closeAfterClick&quot;:false}" class="premium-nav-widget-container premium-nav-pointer-none premium-stretch-dropdown" style="visibility:hidden; opacity:0;">
				<div class="premium-ver-inner-container">
					<div class="premium-hamburger-toggle premium-mobile-menu-icon" role="button" aria-label="Toggle Menu">
						<span class="premium-toggle-text">
							<i aria-hidden="true" class="fas fa-bars"></i>						</span>
						<span class="premium-toggle-close">
							<i aria-hidden="true" class="fas fa-times"></i>						</span>
					</div>
												<div class="premium-nav-menu-container premium-nav-default">
								<ul id="menu-principal" class="premium-nav-menu premium-main-nav-menu"><li id="premium-nav-menu-item-14417" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children premium-nav-menu-item"><a href="https://prozeducacao.com.br/cursos/" class="premium-menu-link premium-menu-link-parent">Cursos<i class="fas fa-angle-down premium-dropdown-icon"></i></a>
<ul class="premium-sub-menu">
	<li id="premium-nav-menu-item-14418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children premium-nav-menu-item premium-sub-menu-item"><a href="https://prozeducacao.com.br/tipo_de_curso/cursos-tecnicos/" class="premium-menu-link premium-sub-menu-link">Cursos Técnicos<i class="fas fa-angle-right premium-dropdown-icon"></i></a>
	<ul class="premium-sub-menu">
		<li id="premium-nav-menu-item-14421" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children premium-nav-menu-item premium-sub-menu-item"><a href="https://prozeducacao.com.br/tipo_de_curso/cursos-tecnicos/ambiente-e-saude/" class="premium-menu-link premium-sub-menu-link">Saúde<i class="fas fa-angle-right premium-dropdown-icon"></i></a>
		<ul class="premium-sub-menu">
			<li id="premium-nav-menu-item-14424" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://prozeducacao.com.br/curso/tecnico-em-enfermagem/" class="premium-menu-link premium-sub-menu-link">Técnico em Enfermagem</a></li>
			<li id="premium-nav-menu-item-14425" class="menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-sub-menu-item"><a href="https://prozeducacao.com.br/curso/tecnico-em-enfermagem-