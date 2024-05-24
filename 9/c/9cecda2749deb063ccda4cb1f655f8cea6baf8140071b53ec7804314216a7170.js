var)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";function t(t,e,n){return!(u(t,e,n)||_(t,e,n)||f(t,e,n)||h(t,e,n))}function e(t,e,n){var o=e._settings;!n&&r(t)||(C(o.callback_enter,t),R.indexOf(t.tagName)>-1&&(x(t,e),y(t,o.class_loading)),H(t,e),s(t),C(o.callback_set,t))}var n=function(){rndow,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1}},o=function(t,e){return t.getAttribute("data-"+e)},i=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},s=function(t){return i(t,"was-processed","true")},r=function(t){return"true"===o(t,"was-processed")},l=function(t){return t.filter(function(t){return!r(t)})},a=function(t,e){return t.filter(function(t){return t!==e})},c=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},u=function(t,e,n){return(e===window?window.innerHeight+window.pageYOffset:c(e)+e.offsetHeight)<=c(t)-n},d=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},f=function(t,e,n){var o=window.innerWidth;return(e===window?o+window.pageXOffset:d(e)+o)<=d(t)-n},_=function(t,e,n){return(e===window?window.pageYOffset:c(e))>=c(t)+n+t.offsetHeight},h=function(t,e,n){return(e===window?window.pageXOffset:d(e))>=d(t)+n+t.offsetWidth},p=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},g=function(t,e){return e?t.replace(/\.(jpe?g|png)/gi,".webp"):t},m="undefined"!=typeof window,w=m&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),v=m&&"classList"in document.createElement("p"),b=m&&function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}(),y=function(t,e){v?t.classList.add(e):t.className+=(t.className?" ":"")+e},E=function(t,e){v?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},L=function(t,e,n,i){for(var s,r=0;s=t.children[r];r+=1)if("SOURCE"===s.tagName){var l=o(s,n);T(s,e,l,i)}},T=function(t,e,n,o){n&&t.setAttribute(e,g(n,o))},S=function(t,e){var n=b&&e.to_webp,i=o(t,e.data_src),s=o(t,e.data_bg);if(i){var r=g(i,n);t.style.backgroundImage='url("'+r+'")'}if(s){var l=g(s,n);t.style.backgroundImage=l}},O={IMG:function(t,e){var n=b&&e.to_webp,i=e.data_srcset,s=t.parentNode;s&&"PICTURE"===s.tagName&&L(s,"srcset",i,n);var r=o(t,e.data_sizes);T(t,"sizes",r);var l=o(t,i);T(t,"srcset",l,n);var a=o(t,e.data_src);T(t,"src",a,n)},IFRAME:function(t,e){var n=o(t,e.data_src);T(t,"src",n)},VIDEO:function(t,e){var n=e.data_src,i=o(t,n);L(t,"src",n),T(t,"src",i),t.load()}},H=function(t,e){var n=e._settings,o=t.tagName,i=O[o];if(i)return i(t,n),e._updateLoadingCount(1),void(e._elements=a(e._elements,t));S(t,n)},C=function(t,e){t&&t(e)},k=function(t,e,n){t.addEventListener(e,n)},z=function(t,e,n){t.removeEventListener(e,n)},N=function(t,e,n){k(t,"load",e),k(t,"loadeddata",e),k(t,"error",n)},A=function(t,e,n){z(t,"load",e),z(t,"loadeddata",e),z(t,"error",n)},I=function(t,e,n){var o=n._settings,i=e?o.class_loaded:o.class_error,s=e?o.callback_load:o.callback_error,r=t.target;E(r,o.class_loading),y(r,i),C(s,r),n._updateLoadingCount(-1)},x=function(t,e){var n=function n(i){I(i,!0,e),A(t,n,o)},o=function o(i){I(i,!1,e),A(t,n,o)};N(t,n,o)},R=["IMG","IFRAME","VIDEO"],D=function(t,e){for(;e.length;)t.splice(e.pop(),1)},F=function(t){this._settings=_extends({},n(),t),this._loadingCount=0,this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};return F.prototype={_loopThroughElements:function(e){var n=this._settings,o=this._elements,i=o?o.length:0,s=void 0,r=[],l=this._isFirstLoop;if(l&&(this._isFirstLoop=!1),0!==i){for(s=0;s<i;s++){var a=o[s];n.skip_invisible&&null===a.offsetParent||(e||t(a,n.container,n.threshold))&&(l&&y(a,n.class_initial),this.load(a),r.push(s))}D(o,r)}else this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},_updateLoadingCount:function(t){this._loadingCount+=t,0===this._elements.length&&0===this._loadingCount&&C(this._settings.callback_finish)},handleScroll:function(){var t=this._settings.throttle;if(0!==t){var e=Date.now(),n=t-(e-this._previousLoopTime);n<=0||n>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},loadAll:function(){this._loopThroughElements(!0)},update:function(t){var e=this._settings,n=t||this._queryOriginNode.querySelectorAll(e.elements_selector);this._elements=l(Array.prototype.slice.call(n)),w?this.loadAll():(this._loopThroughElements(),this._startScrollHandler())},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},load:function(t,n){e(t,this,n)}},m&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)p(t,n);else p(t,e)}(F,window.lazyLoadOptions),F});
//# sourceMappingURL=lazyload.min.js.map
&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
</script>
<link rel='stylesheet' id='genesis-blocks-style-css-css' href='https://www.bugsnag.com/wp-content/plugins/genesis-blocks/dist/style-blocks.build.css?ver=1685120709' type='text/css' media='all' />
<style id='wp-emoji-styles-inline-css' type='text/css'>

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
<link rel='stylesheet' id='wp-block-library-css' href='https://www.bugsnag.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.2' type='text/css' media='all' />
<style id='safe-svg-svg-icon-style-inline-css' type='text/css'>
.safe-svg-cover .safe-svg-inside{display:inline-block;max-width:100%}.safe-svg-cover svg{height:100%;max-height:100%;max-width:100%;width:100%}

</style>
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
<link rel='stylesheet' id='style-css' href='https://www.bugsnag.com/wp-content/themes/web-wp-bugsnag-theme/style.css?ver=1704831664' type='text/css' media='all' />
<script type="text/javascript" src="https://www.bugsnag.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://www.bugsnag.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.10.0/lottie.min.js?ver=6.4.2" id="lottie-js"></script>
<link rel="https://api.w.org/" href="https://www.bugsnag.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.bugsnag.com/wp-json/wp/v2/pages/33" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.bugsnag.com/xmlrpc.php?rsd" />
<link rel='shortlink' href='https://www.bugsnag.com/?p=33' />
<link rel="alternate" type="application/json+oembed" href="https://www.bugsnag.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.bugsnag.com%2Fproduct%2Fsecurity%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.bugsnag.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.bugsnag.com%2Fproduct%2Fsecurity%2F&#038;format=xml" />
<link rel="icon" href="https://www.bugsnag.com/wp-content/uploads/2023/05/63bd8cc71ce5783325d15646_BugSnag-Icon-Color-copy-1-150x150.png" sizes="32x32" />
<link rel="icon" href="https://www.bugsnag.com/wp-content/uploads/2023/05/63bd8cc71ce5783325d15646_BugSnag-Icon-Color-copy-1.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.bugsnag.com/wp-content/uploads/2023/05/63bd8cc71ce5783325d15646_BugSnag-Icon-Color-copy-1.png" />
<meta name="msapplication-TileImage" content="https://www.bugsnag.com/wp-content/uploads/2023/05/63bd8cc71ce5783325d15646_BugSnag-Icon-Color-copy-1.png" />
    <!-- head-tracking-codes.php -->
<!--Homepage navigation: shows dashboard button-->
<script>
  function isDashboardLoggedIn() {
    return /bugsnag_dashboard_logged_in=true/.test(document.cookie);
  }
  function showButton(el) {
    if(el) el.style.display = "block";
  }
  function hideButton(el) {
    if(el) el.style.display = "none";
  }
  function showCorrectButton() {
    var getStartedButton = document.getElementById("not-logged-in");
    var signInLink = document.getElementById("nav-sign-in-link");
    var dashboardButton = document.getElementById("logged-in");
    if (isDashboardLoggedIn() === true) {
      hideButton(getStartedButton);
      hideButton(signInLink);
      showButton(dashboardButton);
    } else {
      showButton(getStartedButton);
      showButton(signInLink);
      hideButton(dashboardButton);
      //showButton(heroSignInLink);
     // hideButton(heroDashboardButton);
    }
  }
  jQuery(document).ready(function(e){
    showCorrectButton();
  })
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTQKQW6');</script>
<!-- End Google Tag Manager -->

<!-- begin Convert Experiences code-->
<script type="text/javascript" src="//cdn-4.convertexperiments.com/js/1004798-10041468.js"></script>
<!-- end Convert Experiences code -->

<!-- CookieHub -->
<script type="text/javascript">
var cpm = {};
(function(h,u,b){
var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
e.async=true;e.src='https://cookiehub.net/c2/93363859.js';
e.onload=function(){u.cookiehub.load(b);}
d.parentNode.insertBefore(e,d);
})(document,window,cpm);
</script>

<!-- Global site tag (gtag.js) - Google Ads: 987941250 -->
<script type="text/plain" data-consent="marketing" async src="https://www.googletagmanager.com/gtag/js?id=AW-987941250"></script>
<script type="text/plain" data-consent="marketing">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-987941250');
</script>

<!-- Event snippet for Sign-up 2020-04-30 conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script type="text/plain" data-consent="marketing">
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-987941250/AllYCPWI684BEIKTi9cD',
      'event_callback': callback
  });
  return false;
}
</script>

<!-- Start of Async Drift Code -->
<script>
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('84ez2iacf3yr');
</script>
<!-- End of Async Drift Code -->

<!-- Swap the Drift widget out with the Zendesk for support requests -->
<script>
drift.on('ready',function(api, payload) {
  drift.on("conversation:buttonClicked", function(data) {
    if (data.buttonBody.indexOf("connect with support") !== -1) {
      drift.unload();
      zE.activate({hideOnClose: true});
    };
  });
});

</script>
    <style>
    html {
        opacity: 0;
        transition: opacity 0s ease-out;
    }

    html.dom-loaded {
        opacity: 1;
    }
    </style>
</head>

<body class="page-template page-template-security page-template-security-php page page-id-33 page-child parent-pageid-13">
    
        <div class="global-body-wrap">
        <!--Start Global Body Wrap -->
                <a class="skip-link screen-reader-text" href="#content">Skip to content</a>

        <style>
    @media (max-width: 750px) {
        .navbar-dd-cols.is--cols-feat-content {
            display: block;
        }
    }
</style>
<div data-w-id="01c52176-2876-a8d2-3663-c609e99a1b13" class="navbar-wrapper">
    <div data-animation="default" class="navbar-n w-nav" data-easing2="ease-in-out" data-easing="ease-in-out" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
        <div class="navbar-container">
            <a href="/" class="navbar-brand w-nav-brand" aria-label="home"><img src="/wp-content/uploads/2023/06/63bc40cd9d502eda8ea74ce7_Bugsnag-Full-Color-1.svg" alt="" class="global-logo"></a>
            <nav role="navigation" class="navbar-menu w-nav-menu">
                <div class="navbar-menu-link-wrapper">
                    <div data-hover="false" data-delay="0" class="navbar-dd-btn w-dropdown">
                        <nav class="navbar-link w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                            <div class="navbar-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                            <div class="navbar-text">Product</div>
                        </nav>
                        <nav class="navbar-dd-wrap w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                            <div class="navbar-dd-contain is--short-col-1">
                                <div class="navbar-dd-col-wrap">
                                <div class="navbar-dd-col-label">BUGSNAG PLATFORM</div>
                                    <div class="navbar-dd-cols">
                                        <div class="navbar-dd-cols-list">
                                        <a href="/real-user-monitoring/" class="navbar-dd-link w-dropdown-link" tabindex="0">Real User Monitoring</a>
                                            <a href="/error-monitoring/" class="navbar-dd-link w-dropdown-link" tabindex="0">Error Monitoring</a>
                                            <a href="/distributed-tracing/" class="navbar-dd-link w-dropdown-link" tabindex="0">Aspecto & Distributed Tracing</a>
                                            <a href="/product/" class="navbar-dd-link w-dropdown-link" tabindex="0">App Stability Management</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="navbar-dd-col-wrap">
                                    <div class="navbar-dd-col-label">FEATURES</div>
                                    <div class="navbar-dd-cols">
                                        <div class="navbar-dd-cols-list">
                                        <a href="/integrations/" class="navbar-dd-link w-dropdown-link" tabindex="0">Integrations</a>

                                            <a href="/product/stability-score/" class="navbar-dd-link w-dropdown-link" tabindex="0">Stability Score</a>
                                            <a href="/product/search-and-segmentation/" class="navbar-dd-link w-dropdown-link" tabindex="0">Search &amp;&nbsp;Segment</a>
                                            <a href="/product/on-premise/" class="navbar-dd-link w-dropdown-link" tabindex="0">On-Premises</a>
                                        </div>
                                        <div class="navbar-dd-cols-list">
                                            <a href="/product/security/" class="navbar-dd-link w-dropdown-link" tabindex="0">Security</a>
                                            <a href="/product/error-ownership/" class="navbar-dd-link w-dropdown-link" tabindex="0">Error Ownership</a>

                                        </div>
                                    </div>
                                </div>
                                <div class="navbar-dd-col-wrap">
                                    <div class="navbar-dd-col-label">SUPPORTED TECHNOLOGIES</div>
                                    <div class="navbar-dd-cols is--80percent">
                                        <div class="navbar-dd-cols-list">
                                            <a href="https://docs.bugsnag.com/platforms/flutter/" class="navbar-dd-link w-dropdown-link" tabindex="0">Flutter</a>
                                            <a href="/platforms/javascript/" class="navbar-dd-link w-dropdown-link" tabindex="0">JavaScript</a>
                                            <a href="/platforms/react-native-error-reporting/" class="navbar-dd-link w-dropdown-link" tabindex="0">React Native</a>
                                        </div>
                                        <div class="navbar-dd-cols-list">
                                            <a href="/platforms/android/" class="navbar-dd-link w-dropdown-link" tabindex="0">Android</a>
                                            <a href="/platforms/ios-crash-reporting/" class="navbar-dd-link w-dropdown-link" tabindex="0">iOS</a>
                                            <a href="/platforms/unity/" class="navbar-dd-link w-dropdown-link" tabindex="0">Unity</a>
                                        </div>
                                    </div>
                                    <div class="inline-button__wrapper">
                                        <a href="/platforms/" class="inline-button w-inline-block" tabindex="0">
                                            <img src="/wp-content/uploads/2023/06/607f4f6df411bd78587dc7fe_arrow_icon-9cd96687.svg" width="8" alt="" class="inline-button__arrow">
                                            <div class="inline-button__text">Browse all</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <a href="/pricing/" class="navbar-link w-nav-link">Pricing</a>
                    <div data-hover="false" data-delay="0" class="navbar-dd-btn w-dropdown">
                        <nav class="navbar-link w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                            <div class="navbar-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                            <div class="navbar-text">Solutions</div>
                        </nav>
                        <nav class="navbar-dd-wrap solutions w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1">
                            <div class="navbar-dd-contain is--short-col-1">
                                <div class="navbar-dd-col-wrap">
                                    <div class="navbar-dd-col-label">Application</div>
                                    <div class="navbar-dd-cols">
                                        <div class="navbar-dd-cols-list">
                                            <a href="/product/mobile-app-monitoring/" class="navbar-dd-link w-dropdown-link" tabindex="0">Mobile Solution</a>
                                            <a href="/solutions/web/" class="navbar-dd-link w-dropdown-link" tabindex="0">Web Solution</a>
                                            <a href="/solutions/server-side/" class="navbar-dd-link w-dropdown-link" tabindex="0">Server-Side Solution</a>
                                         </div>
                                    </div>
                                </div>
                                <div id="w-node-_01c52176-2876-a8d2-3663-c609e99a1b6d-e99a1b13" class="navbar-dd-col-wrap">
                                    <div class="navbar-dd-col-label">Industry</div>
                                    <div class="navbar-dd-cols">
                                        <div class="navbar-dd-cols-list">
                                        <a href="/solutions/crash-reporting-for-gaming/" class="navbar-dd-link w-dropdown-link" tabindex="0">Gaming</a>
                                        <a href="/solutions/media-and-entertainment/" class="navbar-dd-link w-dropdown-link" tabindex="0">Media &amp; Entertainment</a>
                                        </div>
                                        <div class="navbar-dd-cols-list">
                                        <a href="/solutions/financial-services-error-monitoring/" class="navbar-dd-link w-dropdown-link" tabindex="0">Financial Services</a>
                                        <a href="/solutions/ecommerce-and-retail-monitoring/" class="navbar-dd-link w-dropdown-link" tabindex="0">eCommerce</a>
                                          
                                        </div>
                                    </div>
                                </div>
                                <div class="navbar-dd-col-wrap">
                                    <div class="navbar-dd-col-label">Role</div>
                                    <div class="navbar-dd-cols">
                                        <div class="navbar-dd-cols-list">
                                            <a href="/solutions/observability/" class="navbar-dd-link w-dropdown-link" tabindex="0">Observability Teams</a>
                                            <a href="/solutions/release-management/" class="navbar-dd-link w-dropdown-link" tabindex="0">Release Management</a>
                                            <a href="/solutions/engineering-management/" class="navbar-dd-link w-dropdown-link" tabindex="0">Engineering Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    
                    <a href="https://www.bugsnag.com/customers/" class="navbar-link w-nav-link">Customer Stories</a>
                    <a href="https://docs.bugsnag.com/" class="navbar-link w-nav-link">Docs</a>
                    <div data-hover="false" data-delay="0" class="navbar-dd-btn w-dropdown">
                        <nav class="navbar-link w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                            <div class="navbar-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                            <div class="navbar-text">Resources</div>
                        </nav>
                        <nav class="navbar-dd-wrap w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                            <div class="navbar-dd-contain is--contain-resources">
                            <div class="navbar-dd-col-wrap">
                                    <div class="navbar-dd-col-label">Learn</div>
                                    <div class="navbar-dd-cols">
                                        <div class="navbar-dd-cols-list">
                                            <a href="/blog/" class="navbar-dd-link w-dropdown-link" tabindex="0">Blog</a>
                                            <a href="/resources/webinars/" class="navbar-dd-link w-dropdown-link" tabindex="0">Webinars</a>
                                            <a href="/resources/all/" class="navbar-dd-link w-dropdown-link" tabindex="0">Resources</a>
                                            <a href="https://smartbear.com/academy/bugsnag/#Courses" class="navbar-dd-link w-dropdown-link" tabindex="0">SmartBear Academy</a>
                                            <a href="/contact/" class="navbar-dd-link w-dropdown-link" tabindex="0">Contact</a>
                                        </div>
                                    </div>
                                </div>
                                     <div class="navbar-dd-col-wrap is--bkgd-grey">
                                    <div class="navbar-dd-col-label">Featured resources</div>
                                    <div class="navbar-dd-cols is--cols-feat-content">
                                        <a id="w-node-_01c52176-2876-a8d2-3663-c609e99a1bbc-e99a1b13" href="/blog/bugsnag-aspecto-integration/" aria-current="page" class="navbar-dd-cols-list is--cols-feat w-inline-block w--current" tabindex="0">
                                            <img src="/wp-content/uploads/2023/06/607f4f6df411bd657d7dcc2f_icon-content.svg" loading="lazy" width="40" alt="" class="image-41">
                                            <div class="div-block-204">
                                                <p class="paragraph-14">Blog</p>
                                                <p class="paragraph-15">BugSnag Now Directly Integrates with Aspecto Distributed Tracing</p>
                                                <div class="inline-button__wrapper">
                                                    <div class="inline-button"><img src="/wp-content/uploads/2023/06/607f4f6df411bd78587dc7fe_arrow_icon-9cd96687.svg" width="8" alt="" class="inline-button__arrow">
                                                        <div class="inline-button__text">Read more</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a id="w-node-_01c52176-2876-a8d2-3663-c609e99a1bc8-e99a1b13" href="/blog/enhance-clarity-with-bugsnags-upcoming-real-user-monitoring-capabilities/" class="navbar-dd-cols-list is--cols-feat w-inline-block" tabindex="0">
                                        <img src="/wp-content/uploads/2023/06/607f4f6df411bd657d7dcc2f_icon-content.svg" loading="lazy" width="40" alt="" class="image-41">
                                            <div class="div-block-204">
                                                <p class="paragraph-14">Blog</p>
                                                <p class="paragraph-15 feature-item-2">BugSnag Adds Real User Monitoring to Production Visibility Platform</p>
                                                <div class="inline-button__wrapper">
                                                    <div class="inline-button"><img src="/wp-content/uploads/2023/06/607f4f6df411bd78587dc7fe_arrow_icon-9cd96687.svg" width="8" alt="" class="inline-button__arrow">
                                                        <div class="inline-button__text feature-item-2">Read more</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a id="w-node-_01c52176-2876-a8d2-3663-c609e99a1bbc-e99a1b13" href="/blog/achieving-observability-goals-testguild-podcast/" aria-current="page" class="navbar-dd-cols-list is--cols-feat w-inline-block w--current" tabindex="0">
                                            <img src="/wp-content/uploads/2023/06/607f4f6df411bd657d7dcc2f_icon-content.svg" loading="lazy" width="40" alt="" class="image-41">
                                            <div class="div-block-204">
                                                <p class="paragraph-14">Blog</p>
                                                <p class="paragraph-15">Achieving Observability Goals: A Conversation with TestGuild</p>
                                                <div class="inline-button__wrapper">
                                                    <div class="inline-button"><img src="/wp-content/uploads/2023/06/607f4f6df411bd78587dc7fe_arrow_icon-9cd96687.svg" width="8" alt="" class="inline-button__arrow">
                                                        <div class="inline-button__text">Read more</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="navbar-menu-cta-wrapper">
                    <a href="https://app.bugsnag.com/user/sign_in/" id="nav-sign-in-link" class="navbar-link link-not-signedin w-nav-link" style="display: block;">Sign in</a>
                    <div class="navbar-menu-ctas">
                        <div id="not-logged-in" class="button-embed embed--navbar-menu-cta w-embed" style="display: block;">
                            <a href="https://app.bugsnag.com/user/new/" class="global-button button--navbar nav-trial w-button" onclick="gtag_report_conversion();">Get Started</a>
                        </div>
                        <a href="https://www.bugsnag.com/demo-request/" class="global-button button--navbar navbar-demo w-button">Request a demo</a>
                        <a id="logged-in" href="https://app.bugsnag.com" class="global-button button--external external-signedin w-button" style="display: none;">Dashboard</a>
                    </div>
                </div>
            </nav>
            <div class="navbar-menu-btn w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                <div data-is-ix2-target="1" class="navbar-menu-icon" data-w-id="01c52176-2876-a8d2-3663-c609e99a1bdd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                        <defs>
                            <clipPath id="__lottie_element_2">
                                <rect width="15" height="15" x="0" y="0"></rect>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#__lottie_element_2)">
                            <g transform="matrix(0.46875,0,0,0.46875,7.5,7.5)" opacity="1" style="display: block;" id="hamburger-icon-line-1">
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M12,0 C12,0 -12,0 -12,0"></path>
                                </g>
                            </g>
                            <g transform="matrix(0.46875,0,0,0.46875,7.5,3.75)" opacity="1" style="display: block;" id="hamburger-icon-line-2">
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M-12,0 C-12,0 12,0 12,0"></path>
                                </g>
                            </g>
                            <g transform="matrix(0.46875,0,0,0.46875,7.5,11.25)" opacity="1" style="display: block;" id="hamburger-icon-line-3">
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M12,0 C12,0 -12,0 -12,0"></path>
                                </g>
                            </g>
                        </g>
                    </svg></div>
            </div>
        </div>
        <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
    <div class="navbar-overlay"></div>
</div><div class="hero-section">
    <div class="w-container">
        <h1>Protect your data.<br></h1>
        <div class="global-subtitle">BugSnag is a secure and compliant error monitoring solution for your full
            application stack. We meet the industry's strictest certifications for security, privacy, and control.
            Whether you use our BugSnag hosted platform or choose our on-premises BugSnag Enterprise offering, we've
            got you covered.</div>
        <div class="security__logos">
            <div class="security__logos-wrap w-dyn-list">
                <div role="list" class="security__logos-list w-dyn-items w-row">
                    <div role="listitem" class="security__logos-item w-dyn-item w-col w-col-2">
                        <div style="background-image:url(&quot;/wp-content/uploads/2023/06/60f89cdfce22b376391284df_security-pci-logo@4x.png&quot;)"
                            class="security__logos-img"></div>
                    </div>
                    <div role="listitem" class="security__logos-item w-dyn-item w-col w-col-2">
                        <div style="background-image:url(&quot;/wp-content/uploads/2023/06/60f89ba378774c429ad29c28_ISO-27001_2013_UKAS_black.jpg&quot;)"
                            class="security__logos-img"></div>
                    </div>
                    <div role="listitem" class="security__logos-item w-dyn-item w-col w-col-2">
                        <div style="background-image:url(&quot;/wp-content/uploads/2023/06/60f89cfd705220671216f2e7_security-soc-logo@4x.png&quot;)"
                            class="security__logos-img"></div>
                    </div>
                    <div role="listitem" class="security__logos-item w-dyn-item w-col w-col-2">
                        <div style="background-image:url(&quot;/wp-content/uploads/2023/06/60f89d07f249be0f924c5724_security-csa-star-logo@4x.png&quot;)"
                            class="security__logos-img"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="global-section is--grey wf-section">
    <div class="section__title--center">
        <h2>Certifications and Compliance</h2>
    </div>
    <div class="w-container">
        <div class="cert-list w-dyn-list">
            <div role="list" class="w-dyn-items">
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">BugSnag on-premises option</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>For Enterprise customers seeking maximum control of data security measures, we
                                    offer a completely <a href="/product/on-premise">on-premises version of
                                        BugSnag</a>. For more information, please <a href="#">contact us</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">PCI DSS</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>BugSnag's payment and credit card information is handled by Stripe, which is a
                                    certified <a target="_blank"
                                        href="https://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe,%20inc">PCI
                                        Level 1 Service Provider</a>, the most stringent level of certification
                                    available in the payments industry. BugSnag does not typically receive credit
                                    card data, making it compliant with PCI DSS in most situations. Our libraries
                                    also have configurable client-side data scrubbing which allows you to block
                                    credit card data.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">ISO 27001, ISO 27017, ISO 27018</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>BugSnag is ISO 27001:2013 certified. The audit process and certification
                                    demonstrates that BugSnag has met rigorous international standards for
                                    information security and are committed to the protection of customer data. The
                                    ISO 27001 certificate is available for download <a
                                        href="/wp-content/uploads/2023/06/60f708ca8cf84a01c78250ef_0115175_ENG_Bugsnag.pdf"
                                        target="_blank" class=" bf_ungated_init">here</a>.&nbsp;</p>
                                <p>Our hosting provider, Google Cloud Platform, is compliant with the ISO 27001, ISO
                                    27017, and ISO 27018 standards. Google’s ISO 27001 covers the Google Cloud
                                    Platform and Google’s shared common infrastructure. The ISO 27017 certification
                                    covers cloud security specifically for cloud service providers. ISO 27018
                                    governs protection of personally identifiable information in public cloud
                                    services.<br></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">SSAE 16 / ISAE 3402 Type II: SOC 1, SOC 2 and SOC 3</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>BugSnag data centers are compliant with SOC 1, SOC 2, and SOC 3 certifications.
                                    SOC provides certification for the internal security controls at third party IT
                                    service providers. Our hosting provider, Google Cloud Platform, has achieved SOC
                                    3 certification, in which the controls were evaluated by an independent third
                                    party for a period of one (1) year. The Google Cloud Platform SOC 3 public audit
                                    report can be <a href="https://cloud.google.com/security/compliance/soc-3"
                                        target="_blank">downloaded here</a>.<br></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">CSA STAR</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>BugSnag is registered with the Cloud Security Alliance (CSA). The Cloud Security
                                    Alliance (CSA) has developed the Security, Trust, &amp; Assurance Registry
                                    (STAR) program, an assurance program for customers of Cloud Service Providers
                                    intended to assist customers in their due diligence. The BugSnag CSA STAR
                                    self-assessment can be found <a target="_blank"
                                        href="https://cloudsecurityalliance.org/registry/bugsnag-inc/">here.</a>
                                    BugSnag data centers are hosted with Google Cloud Platform, which has also
                                    completed the CSA STAR self-assessment found <a target="_blank"
                                        href="https://cloud.google.com/files/Google-Cloud-CSA-CAIQ-January2017-CSA-CAIQ-v3.0.1.pdf"
                                        class=" bf_ungated_init">here.</a>‍</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">EU GDPR</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>BugSnag collects, processes, stores, and uses personal data of EU data subjects
                                    in compliance with the requirements of the <a
                                        href="https://ec.europa.eu/info/law/law-topic/data-protection_en"
                                        target="_blank">EU General Data Protection Regulation (EU GDPR)</a>. We only
                                    transfer EU personal data outside of the EU with the permission of our customer,
                                    typically to the United States. When we transfer EU personal data outside the
                                    EU, we only use a transfer mechanism permitted under the GDPR such as the
                                    Standard Contract Clauses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="w-dyn-item">
                    <div class="cert-wrapper">
                        <div data-w-id="89923691-269f-1544-2e24-b02ce844de26" class="cert__title-wrapper">
                            <h3 class="heading-11">CCPA</h3><img
                                src="/wp-content/uploads/2023/06/607f4f6df411bd2ba47dca70_arrow-down.svg"
                                width="20" alt="" class="cert__arrow">
                        </div>
                        <div style="height: 0px;" class="cert__body">
                            <div class="w-richtext">
                                <p>BugSnag collects, processes, stores, and uses personal data in compliance with
                                    the requirements of the <a
                                        href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375"
                                        target="_blank">California Consumer Privacy Act (CCPA)</a>. We never share
                                    or “sell” personal data for non-BugSnag purposes under the CCPA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="global-section wf-section">
    <div class="global-container">
        <div class="w-layout-grid security__grid">
            <div id="w-node-_187506b2-1004-4dc7-2e64-b6edbe73f9f8-e27a2c26" class="security__grid__image"></div>
            <div id="w-node-_8b2e5bc3-9523-2b3c-e875-10ebb204c2d9-e27a2c26">
                <h2>Want more detail on BugSnag security?</h2>
                <p>Contact our customer success team.</p>
                <div class="html-embed-15 w-embed"><button class="global-button"
                        onclick="drift.api.startInteraction({ interactionId: 238571 });"><span
                            class="button__text">Contact Us</span></button></div>
            </div>
        </div>
    </div>
</div>

<section class="footer-cta__section wf-section">
    <div class="footer-cta__grid">
        <div class="footer-cta__col-contain">
            <div>
                <h2 class="footer-cta__title">Try BugSnag’s features for free for 14 days. No credit card required.<br></h2>
                <div class="button-embed w-embed"><a href="https://app.bugsnag.com/user/new/" class="global-button w-button" onclick="gtag_report_conversion();">try for free</a></div>
            </div>
        </div>
        <div class="footer-cta__col-contain">
            <div>
                <h2 class="footer-cta__title">Experience BugSnag with a custom walkthrough for your enterprise app.<br></h2><a href="https://www.bugsnag.com/demo-request/" class="global-button w-button">Request A Demo</a>
            </div>
        </div>
    </div>
</section>



<footer class="footer wf-section">
    <div class="w-layout-grid footer__grid">
        <a id="w-node-f5116c24-dd74-9cff-6863-83720342b1b7-f1f98e23" href="/" aria-current="page" class="link-block-2 w-inline-block w--current">
            <img src="/wp-content/uploads/2023/06/63bc72ad903825f46f53f71a_Bugsnag-Icon-White.svg" alt="Bugsnag monogram." class="footer__logo" width="80">
        </a>
        <div id="w-node-d0ce2cf9-825c-7e3e-cda9-82c6f1f98e26-f1f98e23" class="footer__title">Product</div>
        <div id="w-node-d0ce2cf9-825c-7e3e-cda9-82c6f1f98e33-f1f98e23">
            <a href="/real-user-monitoring/" class="footer__link w-inline-block"><div>Real User Monitoring</div></a>
            <a href="/error-monitoring/" class="footer__link w-inline-block"><div>Error Monitoring</div></a>
            <a href="/integrations/" class="footer__link w-inline-block"><div>Integrations</div></a>
            <a href="/product/on-premise/" class="footer__link w-inline-block"><div>On-Premises</div></a>
            <a href="/pricing/" class="footer__link w-inline-block"><div>Pricing</div></a>
            <a href="/support/" class="footer__link w-inline-block"><div>Enterprise Support</div></a>
            <a href="/solutions/web/" class="footer__link w-inline-block"><div>Web Solution</div></a>
            <a href="/product/mobile-app-monitoring/" class="footer__link w-inline-block"><div>Mobile Solution</div></a>
            <a href="/solutions/server-side/" class="footer__link w-inline-block"><div>Server-side Solution</div></a>
        </div>
        <div id="w-node-d0ce2cf9-825c-7e3e-cda9-82c6f1f98e2a-f1f98e23" class="footer__title">Supported <br>Technologies</div>
        <div id="w-node-_711ac2f0-8468-fc71-4894-073ae3f097a5-f1f98e23">
            <a href="/platforms/javascript/" class="footer__link w-inline-block"><div>JavaScript</div></a>
            <a href="/platforms/react-error-reporting/" class="footer__link w-inline-block"><div>React</div></a>
            <a href="/platforms/react-native-error-reporting/" class="footer__link w-inline-block"><div>React Native</div></a>
            <a href="/platforms/ios-crash-reporting/" class="footer__link w-inline-block"><div>iOS</div></a>
            <a href="/platforms/android/" class="footer__link w-inline-block"><div>Android</div></a>
            <a href="/platforms/rails/" class="footer__link w-inline-block"><div>Rails</div></a>
            <a href="/platforms/php-laravel/" class="footer__link w-inline-block"><div>Laravel</div></a>
            <a href="/platforms/python-error-reporting/" class="footer__link w-inline-block"><div>Python</div></a>
            <a href="/platforms/php/" class="footer__link w-inline-block"><div>PHP</div></a>
            <a href="/platforms/" class="footer__link footer__link--more w-inline-block"><div>More...</div></a>
        </div>
        <div id="w-node-d0ce2cf9-825c-7e3e-cda9-82c6f1f98e28-f1f98e23" class="footer__title">Resources</div>
        <div id="w-node-bc13b642-7ab0-d51f-2cc7-bec55fc7ce7d-f1f98e23">
            <a href="/blog/" class="footer__link w-inline-block"><div>Blog</div></a>
            <a href="/resources/webinars/" class="footer__link w-inline-block"><div>Webinars</div></a>
            <a href="/resources/all/" class="footer__link w-inline-block"><div>Resources</div></a>
            <a href="https://docs.bugsnag.com/" target="_blank" class="footer__link w-inline-block"><div>Docs</div></a>
            <a href="https://status.bugsnag.com/" target="_blank" class="footer__link w-inline-block"><div>Status</div></a>
            <a href="https://smartbear.com/academy/bugsnag/#Courses" class="footer__link w-inline-block" tabindex="0">SmartBear Academy</a>
            <a href="https://smartbear.com/connect/" class="footer__link w-inline-block" tabindex="0">SmartBear Connect</a>
            <a href="/contact/" target="_blank" class="footer__link w-inline-block"><div>Contact</div></a>
            <div class="html-embed-14 hide w-embed">
                <button class="footer__link" onclick="drift.api.startInteraction({ interactionId: 238571 });">Contact</button>
            </div>
        </div>
        <div id="w-node-_5bce572a-a07e-3ced-8a63-6d483c63ebca-f1f98e23" class="footer__title">Company</div>
        <div id="w-node-d0ce2cf9-825c-7e3e-cda9-82c6f1f98e46-f1f98e23">
            <a href="/about/" class="footer__link w-inline-block"><div>About</div></a>
            <a href="/newsroom/" class="footer__link w-inline-block"><div>Newsroom</div></a>
            <a href="/customers/" class="footer__link w-inline-block"><div>Customers</div></a>
            <a href="/jobs/" class="footer__link w-inline-block"><div>Jobs</div></a>
            <a href="/product/security/" class="footer__link w-inline-block"><div>Security</div></a>
            <a href="/careers-in-coding-contest/" class="footer__link hide w-inline-block"><div>Careers in Coding Contest</div></a>
        </div>
        <div id="w-node-d0ce2cf9-825c-7e3e-cda9-82c6f1f98e2c-f1f98e23" class="footer__social">
            <a href="https://dribbble.com/bugsnag/" target="_blank" class="footer__social__link w-inline-block"><img src="/wp-content/uploads/2023/06/607f4f6df411bdcee17dc7df_dribbble-logo.svg" alt="Dribbble social icon."></a>
            <a href="https://github.com/bugsnag/" target="_blank" class="footer__social__link w-inline-block"><img src="/wp-content/uploads/2023/06/607f4f6df411bda7fd7dc7e2_github-logo.svg" alt="GitHub social icon."></a>
        </div>
        <div id="w-node-_711bfcb9-a7ed-9b61-abe5-cdec4702f062-f1f98e23" class="footer__terms-wrapper">
            <p class="copyright">© 2023 SmartBear Software. All Rights Reserved.</p>
            <div class="terms__row">
                <a href="https://docs.bugsnag.com/legal/terms-of-service/" target="_blank" class="terms__link">Terms of Service</a>
                <div class="terms__dot"></div>
                <a href="https://docs.bugsnag.com/legal/privacy-policy/" target="_blank" class="terms__link">Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>

	<script type="text/javascript">
		function genesisBlocksShare( url, title, w, h ){
			var left = ( window.innerWidth / 2 )-( w / 2 );
			var top  = ( window.innerHeight / 2 )-( h / 2 );
			return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=600, top='+top+', left='+left);
		}
	</script>
	<script type="text/javascript" src="https://www.bugsnag.com/wp-content/plugins/genesis-blocks/dist/assets/js/dismiss.js?ver=1685120709" id="genesis-blocks-dismiss-js-js"></script>
<script type="text/javascript" src="https://www.bugsnag.com/wp-content/themes/web-wp-bugsnag-theme/src/js/main.js?ver=1704831664" id="mktg-bundle-js"></script>
<script type="text/javascript" src="https://www.bugsnag.com/wp-content/themes/web-wp-bugsnag-theme/src/js/bundle.js?ver=1704831664" id="bundle-js"></script>

</div><!--End Global Body Wrap -->
<!-- footer-tracking-codes.php -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTQKQW6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- <script src="https://d2vbpkts4ss4v2.cloudfront.net/production/js/bundle.js?20190529194109"></script> -->

<!-- Bugsnag -->
<script>window.bugsnagClient = bugsnag('8c812cdda1d21caf4fddb3b228eff5c5')</script>

<!-- Segment -->
<script type="text/plain" data-consent="analytics" charset="utf-8">
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
    analytics.load("K5mYXoqXbzNaa0QZ1ELEvSBIpvfVWuBr");
    analytics.page()
  }}();
</script>

<!-- Mintigo pixel -->
<img height='0' width='0' alt='' src='https://pixel.mintigo.com/mintigo_pixel.png?pixel_cid=a44ef0526d'/>

<!-- Zendesk Widget -->
<script>
  window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","bugsnag.zendesk.com");

  // Don't allow the widget to set cookies: https://developer.zendesk.com/embeddables/docs/widget/settings#cookies
  window.zESettings = {
    cookies: false
  };
  
  // Force the widget locale to be en-US to encourage customers to send in support queries in English
  zE('webWidget', 'setLocale', 'en-US');
  
  // Hide the widget by default. Can be activated when required.
  zE('webWidget', 'hide');

  // Launch the Drift widget when a user action minimises the Zendesk widget
  zE('webWidget:on', 'userEvent', function(event) {
    if (event.action == "Web Widget Minimised") {
      drift.load('84ez2iacf3yr');
    }
  });
</script>

<!-- hide/show announcement bar during scroll -->

<script>
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.announcement-wrap').fadeOut();
     }
    else
     {
      $('.announcement-wrap').fadeIn();
     }
 });

</script> 
</body>

</html>
