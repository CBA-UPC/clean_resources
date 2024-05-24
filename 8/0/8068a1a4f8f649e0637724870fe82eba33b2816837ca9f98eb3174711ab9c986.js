<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;navigation&#45;Breadcrumb&#46;8975bd3f9f696c19dae2&#46;css" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719767&#46;d4a545
</BODY>
</HTML>
y.com/24287",intersection_js:"https://js.intercomcdn.com/intersection/assets/app.js",intersection_styles:"https://js.intercomcdn.com/intersection/assets/styles.js",article_search_messenger_app_id:27,mode:"production"}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}!function(){"use strict";var e=/iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,t=[".intercom-lightweight-app-launcher",".intercom-launcher-frame","#intercom-container",".intercom-messenger",".intercom-notifications"];function r(e){try{if(!(e in window))return!1;var t=window[e];return null!==t&&(t.setItem("intercom-test","0"),t.removeItem("intercom-test"),!0)}catch(e){return!1}}function o(){var e=i().vendor||"",t=i().userAgent||"";return 0===e.indexOf("Apple")&&/\sSafari\//.test(t)}function i(){return navigator||{}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i().userAgent;return/iPad|iPhone|iPod/.test(e)&&!window.MSStream}function c(){var e;return(null===(e=function(){if(a()){var e=i().appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return{major:parseInt(e[1],10),minor:parseInt(e[2],10),patch:parseInt(e[3]||0,10)}}return null}())||void 0===e?void 0:e.major)>=15}var s={hasXhr2Support:function(){return"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest},hasLocalStorageSupport:function(){return r("localStorage")},hasSessionStorageSupport:function(){return r("sessionStorage")},hasFileSupport:function(){return!!(window.FileReader&&window.File&&window.FileList&&window.FormData)},hasAudioSupport:function(){var e=document.createElement("audio");return!!e.canPlayType&&!!e.canPlayType("audio/mpeg;").replace(/^no$/,"")},hasVisibilitySupport:function(){return void 0!==document.hidden||void 0!==document.mozHidden||void 0!==document.msHidden||void 0!==document.webkitHidden},messengerIsVisible:function(){return t.some((function(e){var t=window.parent.document.querySelector(e);if(t){var n=t.getBoundingClientRect();return n&&n.width>0&&n.height>0}}))},messengerHasDisplayNoneSet:function(){return t.some((function(e){var t=window.parent.document.querySelector(e);if(t){var n=window.getComputedStyle(t);return null===n||"none"===n.display}}))},isMobileBrowser:function(){var t=i().userAgent;return!!t&&(null!==t.match(e)&&void 0!==window.parent)},isIOSFirefox:function(){return!!i().userAgent.match("FxiOS")},isFirefox:function(){return!!i().userAgent.match("Firefox")},isSafari:o,isElectron:function(){var e=i().userAgent||"",t=window.parent||{},n=t.process&&t.versions&&t.versions.electron;return/\sElectron\//.test(e)||n},isIE:function(){var e=i().userAgent||"";return e.indexOf("MSIE")>0||e.indexOf("Trident")>0},isEdge:function(){return(i().userAgent||"").indexOf("Edge")>0},isNativeMobile:function(){return i().isNativeMobile},isChrome:function(){var e=window.chrome,t=i().vendor,n=i().userAgent.indexOf("OPR")>-1,r=i().userAgent.indexOf("Edge")>-1;return!!i().userAgent.match("CriOS")||null!=e&&"Google Inc."===t&&!1===n&&!1===r},isIOS:a,isIOS15:c,isIOS15Safari:function(){var e=i().userAgent,t=a(e),n=!!e.match(/WebKit/i);return t&&n&&!e.match(/CriOS/i)&&c()},isAndroid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i().userAgent;return e&&e.toLowerCase().indexOf("android")>-1},isMacOS:function(){return window.navigator.appVersion.indexOf("Mac")>=0}},d=["turbo:visit","turbolinks:visit","page:before-change"],u=["turbo:before-cache","turbolinks:before-cache"],m=["turbo:load","turbolinks:load","page:change"];var p=function(e){var t=document.createElement("script");return t.type="text/javascript",t.charset="utf-8",t.src=e,t},l=n(97234).public_path,f="".concat(l,"frame.18a99cf3.js"),h="".concat(l,"vendor.3e3e6e47.js"),w="".concat(l,"frame-modern.832b4964.js"),v="".concat(l,"vendor-modern.af6641c5.js"),g="Intercom",b=/bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit/i,y=function(){return window[g]&&window[g].booted},S=function(){var e,t=!!(e=navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9\.]+)/))&&e[1];return!!t&&t.split(".").map((function(e){return parseInt(e)}))},A=function(){var e=document.querySelector('meta[name="referrer"]'),t=e?'<meta name="referrer" content="'.concat(e.content,'">'):"",n=document.createElement("iframe");n.id="intercom-frame",n.setAttribute("style","position: absolute !important; opacity: 0 !important; width: 1px !important; height: 1px !important; top: 0 !important; left: 0 !important; border: none !important; display: block !important; z-index: -1 !important; pointer-events: none;"),o()&&n.setAttribute("style",n.getAttribute("style")+"visibility: hidden;"),n.setAttribute("aria-hidden","true"),n.setAttribute("tabIndex","-1"),n.setAttribute("title","Intercom"),document.body.appendChild(n),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en";if(s.isFirefox()){var r=e.contentDocument.open();r.write("<!DOCTYPE html>"),r.close()}!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en";e.documentElement.innerHTML=t,e.documentElement.setAttribute("lang",n)}(e.contentDocument,t,n)}(n,'<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        '.concat(t,"\n      </head>\n      <body>\n      </body>\n    </html>"));var r,i=!!(r=S())&&r[0]>=81,a=p(i?w:f),c=p(i?v:h);return n.contentDocument.head.appendChild(a),n.contentDocument.head.appendChild(c),window.__intercomAssignLocation=function(e){window.location.assign(e)},window.__intercomReloadLocation=function(){window.location.reload()},n},x=function(){var e=document.getElementById("intercom-frame");e&&e.parentNode&&e.parentNode.removeChild(e),delete window.__intercomAssignLocation,delete window.__intercomReloadLocation},_=function(){if(!window[g]){var e=function e(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.q.push(n)};e.q=[],window[g]=e}},E=function(){y()||(_(),A(),window[g].booted=!0)};"attachEvent"in window&&!window.addEventListener||navigator&&navigator.userAgent&&/MSIE 9\.0/.test(navigator.userAgent)&&window.addEventListener&&!window.atob||"onpropertychange"in document&&window.matchMedia&&/MSIE 10\.0/.test(navigator.userAgent)||navigator&&navigator.userAgent&&b.test(navigator.userAgent)||window.isIntercomMessengerSheet||y()||(E(),function(e,t,n){m.forEach((function(t){document.addEventListener(t,e)})),u.forEach((function(e){document.addEventListener(e,t)})),d.forEach((function(e){document.addEventListener(e,n)}))}(E,x,(function(){window[g]("shutdown",!1),delete window[g],x(),_()})))}()}();g,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='ppress-frontend-css' href='https://www.abtasty.com/wp-content/plugins/wp-user-avatar/assets/css/frontend.min.css?ver=4.14.0' media='all' />
<link rel='stylesheet' id='ppress-flatpickr-css' href='https://www.abtasty.com/wp-content/plugins/wp-user-avatar/assets/flatpickr/flatpickr.min.css?ver=4.14.0' media='all' />
<link rel='stylesheet' id='ppress-select2-css' href='https://www.abtasty.com/wp-content/plugins/wp-user-avatar/assets/select2/select2.min.css?ver=6.4.2' media='all' />
<link rel='stylesheet' id='hello-elementor-css' href='https://www.abtasty.com/wp-content/themes/hello-elementor/style.min.css?ver=2.9.0' media='all' />
<link rel='stylesheet' id='font-awesome-all-css' href='https://www.abtasty.com/wp-content/plugins/jet-menu/assets/public/lib/font-awesome/css/all.min.css?ver=5.12.0' media='all' />
<link rel='stylesheet' id='font-awesome-v4-shims-css' href='https://www.abtasty.com/wp-content/plugins/jet-menu/assets/public/lib/font-awesome/css/v4-shims.min.css?ver=5.12.0' media='all' />
<link rel='stylesheet' id='jet-menu-public-styles-css' href='https://www.abtasty.com/wp-content/plugins/jet-menu/assets/public/css/public.css?ver=2.4.2' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.25.0' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.18.2' media='all' />
<link rel='stylesheet' id='swiper-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min.css?ver=5.3.6' media='all' />
<link rel='stylesheet' id='elementor-post-44638-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-44638.css?ver=1706188560' media='all' />
<link rel='stylesheet' id='elementor-pro-css' href='https://www.abtasty.com/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.18.1' media='all' />
<link rel='stylesheet' id='elementor-post-87072-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-87072.css?ver=1706189033' media='all' />
<link rel='stylesheet' id='elementor-post-57950-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-57950.css?ver=1706188561' media='all' />
<link rel='stylesheet' id='elementor-post-52805-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-52805.css?ver=1706188561' media='all' />
<link rel='stylesheet' id='elementor-post-52798-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-52798.css?ver=1706188561' media='all' />
<link rel='stylesheet' id='elementor-post-56427-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-56427.css?ver=1706188561' media='all' />
<link rel='stylesheet' id='elementor-post-56410-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-56410.css?ver=1706188561' media='all' />
<link rel='stylesheet' id='elementor-post-56407-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-56407.css?ver=1706188562' media='all' />
<link rel='stylesheet' id='elementor-post-56340-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-56340.css?ver=1706188592' media='all' />
<link rel='stylesheet' id='elementor-post-56325-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-56325.css?ver=1706188562' media='all' />
<link rel='stylesheet' id='abtasty-style-css' href='https://www.abtasty.com/wp-content/themes/abtasty-2019/style.css?ver=6.4.2' media='all' />
<link rel='stylesheet' id='ecs-styles-css' href='https://www.abtasty.com/wp-content/plugins/ele-custom-skin/assets/css/ecs-style.css?ver=3.1.7' media='all' />
<link rel='stylesheet' id='elementor-post-31278-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-31278.css?ver=1569883328' media='all' />
<link rel='stylesheet' id='elementor-post-38326-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-38326.css?ver=1601740391' media='all' />
<link rel='stylesheet' id='elementor-post-46638-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-46638.css?ver=1601061254' media='all' />
<link rel='stylesheet' id='elementor-post-64030-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-64030.css?ver=1622835428' media='all' />
<link rel='stylesheet' id='elementor-post-66974-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-66974.css?ver=1669988517' media='all' />
<link rel='stylesheet' id='elementor-post-89153-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-89153.css?ver=1641911393' media='all' />
<link rel='stylesheet' id='elementor-post-90072-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-90072.css?ver=1643270858' media='all' />
<link rel='stylesheet' id='prism-css' href='https://www.abtasty.com/wp-content/themes/abtasty-2019/styles/prism.css' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.4.2' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-solid-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3' media='all' />
<link rel='stylesheet' id='elementor-icons-abtasty-icon-css' href='https://www.abtasty.com/wp-content/uploads/elementor/custom-icons/abtasty-icon/styles.css?ver=1.0.0' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-brands-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><!--n2css--><script src="https://www.abtasty.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/wp-user-avatar/assets/flatpickr/flatpickr.min.js?ver=4.14.0" id="ppress-flatpickr-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/wp-user-avatar/assets/select2/select2.min.js?ver=4.14.0" id="ppress-select2-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2" id="jquery-ui-core-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.2" id="jquery-ui-mouse-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/jquery/ui/sortable.min.js?ver=1.13.2" id="jquery-ui-sortable-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/jquery/ui/resizable.min.js?ver=1.13.2" id="jquery-ui-resizable-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/advanced-custom-fields-pro/assets/build/js/acf.min.js?ver=6.2.2" id="acf-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/advanced-custom-fields-pro/assets/build/js/acf-input.min.js?ver=6.2.2" id="acf-input-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/acf-conditional-taxonomy-rules/includes/input_conditional_taxonomy.js?ver=3.0.0" id="acf-input-conditional-taxonomy-js"></script>
<script id="ecs_ajax_load-js-extra">
var ecs_ajax_params = {"ajaxurl":"https:\/\/www.abtasty.com\/wp-admin\/admin-ajax.php","posts":"{\"page\":0,\"pagename\":\"conversion-rate-optimization\",\"error\":\"\",\"m\":\"\",\"p\":0,\"post_parent\":\"\",\"subpost\":\"\",\"subpost_id\":\"\",\"attachment\":\"\",\"attachment_id\":0,\"name\":\"conversion-rate-optimization\",\"page_id\":0,\"second\":\"\",\"minute\":\"\",\"hour\":\"\",\"day\":0,\"monthnum\":0,\"year\":0,\"w\":0,\"category_name\":\"\",\"tag\":\"\",\"cat\":\"\",\"tag_id\":\"\",\"author\":\"\",\"author_name\":\"\",\"feed\":\"\",\"tb\":\"\",\"paged\":0,\"meta_key\":\"\",\"meta_value\":\"\",\"preview\":\"\",\"s\":\"\",\"sentence\":\"\",\"title\":\"\",\"fields\":\"\",\"menu_order\":\"\",\"embed\":\"\",\"category__in\":[],\"category__not_in\":[],\"category__and\":[],\"post__in\":[],\"post__not_in\":[],\"post_name__in\":[],\"tag__in\":[],\"tag__not_in\":[],\"tag__and\":[],\"tag_slug__in\":[],\"tag_slug__and\":[],\"post_parent__in\":[],\"post_parent__not_in\":[],\"author__in\":[],\"author__not_in\":[],\"search_columns\":[],\"tax_query\":[{\"taxonomy\":\"language\",\"field\":\"term_taxonomy_id\",\"terms\":[495],\"operator\":\"IN\"}],\"post_type\":[\"post\",\"page\",\"e-landing-page\"],\"facetwp\":false,\"ignore_sticky_posts\":false,\"suppress_filters\":false,\"cache_results\":true,\"update_post_term_cache\":true,\"update_menu_item_cache\":false,\"lazy_load_term_meta\":true,\"update_post_meta_cache\":true,\"posts_per_page\":99999,\"nopaging\":false,\"comments_per_page\":\"50\",\"no_found_rows\":false,\"order\":\"DESC\"}"};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/ele-custom-skin/assets/js/ecs_ajax_pagination.js?ver=3.1.7" id="ecs_ajax_load-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/ele-custom-skin/assets/js/ecs.js?ver=3.1.7" id="ecs-script-js"></script>
<script src="https://www.abtasty.com/wp-content/themes/abtasty-2019/javascript/didomi.js" id="didomi-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/clipboard.min.js?ver=2.0.11" id="clipboard-js"></script>
<script src="https://www.abtasty.com/wp-content/themes/abtasty-2019/javascript/prism.js" id="prism-js"></script>
<script src="//try.abtasty.com/35cb99569fe43be458cbc970eb95b71e.js" id="abtasty-app-js"></script>
<script defer src="https://www.abtasty.com/wp-content/themes/abtasty-2019/javascript/attribution.js?ver=20230602130508" id="attribution-js"></script>
<script defer src="https://www.abtasty.com/wp-content/themes/abtasty-2019/javascript/abtasty.js?ver=20230906085200" id="abtasty-js"></script>
<script src="https://www.abtasty.com/wp-content/themes/abtasty-2019/javascript/iframeResizer.min.js" id="iframeResizer-js"></script>
<script type="module" src="https://www.abtasty.com/wp-content/themes/abtasty-2019/javascript/visitor-id.js?ver=20220930121820" id="visitor-id-js"></script>
<link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<!-- GTM Container placement set to manual -->
<script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
	var dataLayer_content = {"visitorLoginState":"logged-out","pagePostType":"page","pagePostType2":"single-page","pagePostAuthor":"Marine Dubreil","pagePostTerms":{"language":["EN"],"meta":{"algolia_searchable_posts_records_count":["11","11"],"algolia_posts_page_records_count":["17","17"],"yuzo_metabox":"a:2:{s:21:\"yuzo_disabled_related\";N;s:16:\"yuzo_only_manual\";N;}","swp_advanced_pinterest_image":"default","swp_advanced_pinterest_image_location":"default","swp_post_location":"default","swp_float_location":"on","twitterID":"abtasty","true":"true","dsq_thread_id":null,"swp_og_title":"The Complete Guide to A\/B Testing","swp_og_description":"Everything marketers need to get up and running with A\/B testing: step-by step guide, real-life examples, mistakes to avoid and extra resources. ","bitly_link":"http:\/\/bit.ly\/2wOYZki","swp_twitter_use_open_graph":"true","swp_pin_browser_extension":"default","swp_pin_browser_extension_location":"default","swp_open_graph_image_data":"false","swp_open_graph_image_url":"","swp_cache_timestamp":"435434","eael_transient_elements":"a:0:{}","eael_uid":"cbfg128221573497649"}},"deviceType":"desktop","deviceManufacturer":"","deviceModel":"","pageLanguage":"en","continentCode":"EU","countryCode":"DE"};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRB93J');
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com -->
<link rel="preload" as="font" href="https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-solid-900.woff2" crossorigin>
<link rel="preload" as="font" href="https://www.abtasty.com/wp-content/uploads/elementor/custom-icons/abtasty-icon/fonts/abtasty-icon.woff" crossorigin>
<link rel="preload" as="font" href="https://www.abtasty.com/wp-content/uploads/criteria-cf-extra-bold-oblique.woff2" crossorigin>
<link rel="preload" as="font" href="https://www.abtasty.com/wp-content/uploads/criteria-cf-bold-oblique.woff2" crossorigin>
<link rel="preload" as="font" href="https://www.abtasty.com/wp-content/uploads/criteria-cf-medium.woff2" crossorigin><meta name="generator" content="Elementor 3.18.2; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-swap">
<link rel="icon" href="https://www.abtasty.com/wp-content/uploads/cropped-abtasty-icon-1-32x32.png" sizes="32x32" />
<link rel="icon" href="https://www.abtasty.com/wp-content/uploads/cropped-abtasty-icon-1-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.abtasty.com/wp-content/uploads/cropped-abtasty-icon-1-180x180.png" />
<meta name="msapplication-TileImage" content="https://www.abtasty.com/wp-content/uploads/cropped-abtasty-icon-1-270x270.png" />
<style>
.code-block-default {margin: 8px 0; clear: both;}
.code-block- {}
</style>
</head>

<body class="page-template-default page page-id-87072 wp-custom-logo jet-desktop-menu-active elementor-default elementor-kit-44638 elementor-page elementor-page-87072">

    
<!-- GTM Container placement set to manual -->
<!-- Google Tag Manager (noscript) -->
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRB93J" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->		<div data-elementor-type="section" data-elementor-id="57950" class="elementor elementor-57950 elementor-location-top-banner" data-elementor-post-type="elementor_library">
								<section class="elementor-section elementor-top-section elementor-element elementor-element-ec6c0b4 elementor-section-full_width dc-has-condition dc-condition-equal elementor-section-height-min-height elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-height-default elementor-section-items-middle" data-id="ec6c0b4" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
							<div class="elementor-background-overlay"></div>
							<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fef734d" data-id="fef734d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-82cfe92 elementor-align-center elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="82cfe92" data-element_type="widget" data-click-tracking="Click/Global Campaign/Forrester New Wave" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="https://www.abtasty.com/resources/powering-customer-centric-experience-webinar/">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">ROUNDTABLE EVENT | Powering Customer Experiences With Data on February 28</span>
		</span>
					</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-7d2b560 elementor-align-left elementor-widget__width-auto elementor-hidden-phone elementor-widget elementor-widget-button" data-id="7d2b560" data-element_type="widget" data-click-tracking="Click/Global Campaign/Forrester New Wave" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-xs" href="https://www.abtasty.com/resources/powering-customer-centric-experience-webinar/" target="_blank">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">SAVE YOUR SEAT</span>
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
				<div data-elementor-type="header" data-elementor-id="52805" class="elementor elementor-52805 elementor-location-header" data-elementor-post-type="elementor_library">
								<header class="elementor-section elementor-top-section elementor-element elementor-element-51e0986b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="51e0986b" data-element_type="section" id="header" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky_effects_offset&quot;:1,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-26070236" data-id="26070236" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-184c744a elementor-widget elementor-widget-image" data-id="184c744a" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.18.0 - 08-12-2023 */
.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>													<a href="https://www.abtasty.com/" id="link-header-logo">
							<img width="300" height="59" src="https://www.abtasty.com/wp-content/uploads/abtasty-logo.svg" class="attachment-large size-large wp-image-29554" alt="AB Tasty Logo" />								</a>
															</div>
				</div>
					</div>
		</div>
				<nav class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5bbd48ba" data-id="5bbd48ba" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1932ada6 elementor-widget elementor-widget-jet-mega-menu" data-id="1932ada6" data-element_type="widget" data-widget_type="jet-mega-menu.default">
				<div class="elementor-widget-container">
			<div class="menu-menu-en-container"><div class="jet-menu-container"><div class="jet-menu-inner"><ul class="jet-menu jet-menu--animation-type-move-down"><li id="jet-menu-item-52810" class="ml-auto jet-new jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-mega-menu-item jet-mega-menu-position-relative-item jet-regular-item jet-menu-item-has-children jet-menu-item-52810"><a href="#" class="top-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Products</div><i class="jet-dropdown-arrow fa fa-angle-down"></i></div></a><div class="jet-sub-mega-menu" data-template-id="52819">		<div data-elementor-type="wp-post" data-elementor-id="52819" class="elementor elementor-52819" data-elementor-post-type="jet-menu">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-179fe0b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="179fe0b" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4da2968" data-id="4da2968" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1fae74e elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="1fae74e" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
			<link rel="stylesheet" href="https://www.abtasty.com/wp-content/plugins/elementor-pro/assets/css/widget-call-to-action.min.css">		<a class="elementor-cta" href="https://www.abtasty.com/web-experimentation/" data-click-tracking="Menu Clicks/Platform Megamenu/Client-Side Experiments">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Web Experimentation					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						A/B testing and  multivariate testing with a low-code/no-code approach					</div>
				
							</div>
						</a>
				</div>
				</div>
				<div class="elementor-element elementor-element-627884b elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="627884b" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://www.abtasty.com/personalization/">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Personalization					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						Audience builder  and AI-based segmentation to create personalized experiences					</div>
				
							</div>
						</a>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8d7ff53" data-id="8d7ff53" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-40b1d1f elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="40b1d1f" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://www.abtasty.com/feature-experimentation/">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Feature Experimentation					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						Server-side A/B testing, mobile apps and connected devices  optimization					</div>
				
							</div>
						</a>
				</div>
				</div>
				<div class="elementor-element elementor-element-3df1f10 elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="3df1f10" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://www.abtasty.com/rollouts/">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Rollouts					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						Feature flag and release management platform with progressive delivery and rollback					</div>
				
							</div>
						</a>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b8536b3" data-id="b8536b3" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-70cb4fe elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="70cb4fe" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://www.abtasty.com/intelligent-search/">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Search					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						AI-powered search with personalized
results and Guided Selling.					</div>
				
							</div>
						</a>
				</div>
				</div>
				<div class="elementor-element elementor-element-0864b18 elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="0864b18" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://www.abtasty.com/recommendations/">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Recommendations					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						AI-powered recommendations
delivering the right product
at the right time					</div>
				
							</div>
						</a>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-8a0e7ed elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8a0e7ed" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8a67dd2" data-id="8a67dd2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-942c78b elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="942c78b" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://www.abtasty.com/core-capabilities/">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Core capabilities					</span>
				
									<div class="elementor-cta__description elementor-cta__content-item elementor-content-item">
						AI and machine learning,</br>data collection and reporting					</div>
				
							</div>
						</a>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ec29133" data-id="ec29133" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1fb9614 elementor-widget elementor-widget-heading" data-id="1fb9614" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.18.0 - 08-12-2023 */
.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><span class="elementor-heading-title elementor-size-default">Security & Privacy​</span>		</div>
				</div>
				<div class="elementor-element elementor-element-9983b5b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="9983b5b" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
			<link rel="stylesheet" href="https://www.abtasty.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css">		<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/security/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Security practices</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/customer-personal-data-processing/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Personal data - Customers</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-08ee1a5" data-id="08ee1a5" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-7ff2bb6 elementor-widget elementor-widget-heading" data-id="7ff2bb6" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Learn more</span>		</div>
				</div>
				<div class="elementor-element elementor-element-459599c elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="459599c" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/emotions-ai/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">EmotionsAI</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/cro-widgets/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Dynamic widgets</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/guided-selling/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Guided Selling</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/intelligent-product-categories/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Intelligent Categories</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/email-recommendations/" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Email recommendations</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
							</div>
		</div></li>
<li id="jet-menu-item-67149" class="jet-menu-item jet-menu-item-type-post_type jet-menu-item-object-page jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-67149"><a href="https://www.abtasty.com/clients/" class="top-level-link" data-click-tracking="Menu Clicks|Clients"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Clients</div></div></a></li>
<li id="jet-menu-item-56557" class="jet-menu-item jet-menu-item-type-post_type jet-menu-item-object-page jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-56557"><a href="https://www.abtasty.com/pricing/" class="top-level-link" data-click-tracking="Menu Clicks|Pricing"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Pricing</div></div></a></li>
<li id="jet-menu-item-76595" class="jet-menu-item jet-menu-item-type-post_type jet-menu-item-object-page jet-no-roll-up jet-mega-menu-item jet-mega-menu-position-relative-item jet-regular-item jet-menu-item-has-children jet-menu-item-76595"><a href="https://www.abtasty.com/experience-hub/" class="top-level-link" data-click-tracking="Menu Clicks|Resources"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Resources</div><i class="jet-dropdown-arrow fa fa-angle-down"></i></div></a><div class="jet-sub-mega-menu" data-template-id="120606">		<div data-elementor-type="wp-post" data-elementor-id="120606" class="elementor elementor-120606" data-elementor-post-type="jet-menu">
							<div class="elementor-element elementor-element-bf86764 e-flex e-con-boxed e-con e-parent" data-id="bf86764" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-c6fde4c e-flex e-con-boxed e-con e-parent" data-id="c6fde4c" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-22ee97e elementor-widget elementor-widget-heading" data-id="22ee97e" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Learn</span>		</div>
				</div>
				<div class="elementor-element elementor-element-c8182dc elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c8182dc" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/experience-hub/search/?format=Article">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Blog</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/experience-hub/search/?format=Case%20Study">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-newspaper"></i>						</span>
										<span class="elementor-icon-list-text">Case Studies</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/experience-hub/search/?format=E-Book">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-book-open"></i>						</span>
										<span class="elementor-icon-list-text">E-book</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-0ec0839 e-flex e-con-boxed e-con e-parent" data-id="0ec0839" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-7dcec7b elementor-widget elementor-widget-heading" data-id="7dcec7b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Content</span>		</div>
				</div>
				<div class="elementor-element elementor-element-ba1f619 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="ba1f619" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/1000-experiments-club/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-microphone"></i>						</span>
										<span class="elementor-icon-list-text">Podcast</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/experience-hub/search/?format=Webinar">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-video"></i>						</span>
										<span class="elementor-icon-list-text">Webinars</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-50e5cf1 e-flex e-con-boxed e-con e-parent" data-id="50e5cf1" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-616a22f elementor-widget elementor-widget-heading" data-id="616a22f" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Content</span>		</div>
				</div>
				<div class="elementor-element elementor-element-839eda2 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="839eda2" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/glossary/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-bookmark"></i>						</span>
										<span class="elementor-icon-list-text">Glossary</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/guides/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-list-alt"></i>						</span>
										<span class="elementor-icon-list-text">Guides</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com//sample-size-calculator/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-calculator"></i>						</span>
										<span class="elementor-icon-list-text">Sample Size Calculator</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-e8e4dc3 e-flex e-con-boxed e-con e-parent" data-id="e8e4dc3" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;content_width&quot;:&quot;boxed&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-5154d5c elementor-widget elementor-widget-heading" data-id="5154d5c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Documentation</span>		</div>
				</div>
		<div class="elementor-element elementor-element-10606d6 e-flex e-con-boxed e-con e-parent" data-id="10606d6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}" data-core-v316-plus="true">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-2c2d478 elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="2c2d478" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://abtasty.zendesk.com/hc/en-us" data-click-tracking="Menu Clicks/Platform Megamenu/Client-Side Experiments">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Web Experimentation					</span>
				
				
							</div>
						</a>
				</div>
				</div>
				<div class="elementor-element elementor-element-e29a0bb elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="e29a0bb" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://docs.developers.flagship.io/" data-click-tracking="Menu Clicks/Platform Megamenu/Client-Side Experiments">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Feature Experimentation &</br>Rollouts					</span>
				
				
							</div>
						</a>
				</div>
				</div>
				<div class="elementor-element elementor-element-4ca9830 elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action" data-id="4ca9830" data-element_type="widget" data-widget_type="call-to-action.default">
				<div class="elementor-widget-container">
					<a class="elementor-cta" href="https://flagship.zendesk.com/hc/en-us" data-click-tracking="Menu Clicks/Platform Megamenu/Client-Side Experiments">
							<div class="elementor-cta__content">
				
									<span class="elementor-cta__title elementor-cta__content-item elementor-content-item">
						Feature Experimentation &</br>Rollouts Support					</span>
				
				
							</div>
						</a>
				</div>
				</div>
					</div>
				</div>
					</div>
				</div>
							</div>
		</div></li>
<li id="jet-menu-item-52815" class="mr-auto jet-new jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-mega-menu-item jet-mega-menu-position-relative-item jet-regular-item jet-menu-item-has-children jet-menu-item-52815"><a href="#" class="top-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Company</div><i class="jet-dropdown-arrow fa fa-angle-down"></i></div></a><div class="jet-sub-mega-menu" data-template-id="53163">		<div data-elementor-type="wp-post" data-elementor-id="53163" class="elementor elementor-53163" data-elementor-post-type="jet-menu">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-b0005f7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0005f7" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f492e64" data-id="f492e64" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c558790 elementor-widget elementor-widget-heading" data-id="c558790" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Services &amp; partners</span>		</div>
				</div>
				<div class="elementor-element elementor-element-d5dc1dc elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="d5dc1dc" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/customer-success/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-multiple-actions-check-2"></i>						</span>
										<span class="elementor-icon-list-text">Customer Success</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/agency-partners/" data-click-tracking="Menu Clicks/Company Megamenu/Agency Partners">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-module-hand-puzzle"></i>						</span>
										<span class="elementor-icon-list-text">Agency Partners</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/integrations-hub/" data-click-tracking="Menu Clicks/Company Megamenu/Technology Partners">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-programming-hold-code-1"></i>						</span>
										<span class="elementor-icon-list-text">Integrations</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/partners-directory/" data-click-tracking="Menu Clicks/Company Megamenu/Partner Directory">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-maps-pin-1"></i>						</span>
										<span class="elementor-icon-list-text">Partner Directory</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-03d0782" data-id="03d0782" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-4faab53 elementor-widget elementor-widget-heading" data-id="4faab53" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">About us</span>		</div>
				</div>
				<div class="elementor-element elementor-element-4d0b9c0 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4d0b9c0" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/about-us/">

											<span class="elementor-icon-list-text">Who We Are</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/life-at-abtasty/" data-click-tracking="Menu Clicks/Company Megamenu/Agency Partners">

											<span class="elementor-icon-list-text">Your Journey at AB Tasty</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://jobs.lever.co/abtasty" target="_blank" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Job Openings</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/corporate-news/" data-click-tracking="Menu Clicks/Company Megamenu/Technology Partners">

											<span class="elementor-icon-list-text">Corporate News</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
							</div>
		</div></li>
<li id="jet-menu-item-52820" class="pll-parent-menu-item jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-menu-item-has-children jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-52820"><a href="#pll_switcher" class="top-level-link"><div class="jet-menu-item-wrapper"><i class='jet-menu-icon fa fa-globe'></i><div class="jet-menu-title">EN</div></div></a>
<ul  class="jet-sub-menu">
	<li id="jet-menu-item-52820-fr" class="lang-item jet-lang-item-109 jet-lang-item-fr jet-no-translation jet-lang-item-first jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-52820-fr jet-sub-menu-item"><a href="https://www.abtasty.com/fr/" class="sub-level-link" hreflang="fr-FR" lang="fr-FR"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">FR</div></div></a></li>
	<li id="jet-menu-item-52820-de" class="lang-item jet-lang-item-105 jet-lang-item-de jet-no-translation jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-52820-de jet-sub-menu-item"><a href="https://www.abtasty.com/de/" class="sub-level-link" hreflang="de-DE" lang="de-DE"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">DE</div></div></a></li>
</ul>
</li>
<li id="jet-menu-item-52816" class="btn-login jet-new jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-menu-item-has-children jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-52816"><a href="#" class="top-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Log In</div></div></a>
<ul  class="jet-sub-menu">
	<li id="jet-menu-item-54519" class="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-54519 jet-sub-menu-item"><a href="https://app2.abtasty.com/login" class="sub-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">AB Tasty</div></div></a></li>
	<li id="jet-menu-item-54518" class="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-54518 jet-sub-menu-item"><a href="https://app.flagship.io/login" class="sub-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Feature Exp. &#038; Rollouts</div></div></a></li>
	<li id="jet-menu-item-129174" class="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-129174 jet-sub-menu-item"><a href="https://controldesk.epoq.de/v2/login" class="sub-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Search &#038; Recommendations</div></div></a></li>
	<li id="jet-menu-item-133137" class="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-133137 jet-sub-menu-item"><a href="https://emotionsai.abtasty.com/login/?next=/accounts/login/%3Fnext%3D/" class="sub-level-link"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">EmotionsAI</div></div></a></li>
</ul>
</li>
<li id="jet-menu-item-52817" class="btn-demo jet-new jet-btn-demo-popup-en jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-no-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-52817"><a href="#" class="top-level-link" data-click-tracking="Menu Clicks|Get a demo"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Get a demo</div></div></a></li>
</ul></div></div></div>		</div>
				</div>
					</div>
		</nav>
							</div>
		</header>
						</div>
		<div class="secondary-header"></div>
<main class="site-main post-87072 page type-page status-publish has-post-thumbnail hentry" role="main">
		<div class="page-content">
				<div data-elementor-type="wp-page" data-elementor-id="87072" class="elementor elementor-87072" data-elementor-post-type="page">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-49f72168 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="49f72168" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
							<div class="elementor-background-overlay"></div>
							<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-56125880" data-id="56125880" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-7856bce7 elementor-widget elementor-widget-heading" data-id="7856bce7" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h1 class="elementor-heading-title elementor-size-default">Everything You Need to Know about Conversion Rate Optimization
</h1>		</div>
				</div>
				<div class="elementor-element elementor-element-3b39591 elementor-widget elementor-widget-heading" data-id="3b39591" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">The Complete Guide to Conversion Rate Optimization
</h2>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-25a0aebb elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="25a0aebb" data-element_type="section" id="ab-testing">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6e9a214b" data-id="6e9a214b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-7e4366f elementor-widget elementor-widget-text-editor" data-id="7e4366f" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.18.0 - 08-12-2023 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<p>As you know, marketing (and shopping) has moved online. Whether you operate an e-commerce store or a business-to-business operation, you are constantly driving your prospects to take specific actions, like buying a product, signing up to a newsletter or downloading a free e-book. Whenever a user completes an action, this is seen as a conversion. <a href="https://www.abtasty.com/blog/conversion-rate-optimization-guide/" target="_blank" rel="noopener">Conversion rate optimization</a> is the practice of raising the number of users interacting with your site. While this is usually done through a series of small, gradual improvements, the end goal is to optimize your entire online marketing process.</p><p>First, let’s get back to basics about conversion rate: what it is, how to calculate it, how to improve it and how to make sure you don’t get in your own way. Ready? Let’s go!</p><h2>What is Conversion Rate Optimization?</h2><p>Before we get into conversion rate optimization, let&#8217;s take a deep dive into what conversions and conversion rates are and how to track them.</p><h3>What is a conversion?</h3><p>A <em>conversion </em>can refer to virtually any action taken online. It doesn&#8217;t refer to a single specific action, like a sale, but to any action that you consider valuable to your business. A conversion (also called an event) can be a click, a purchase, a swipe or a download.</p><p>Your <em><a href="https://www.abtasty.com/blog/conversion-rate/" target="_blank" rel="noopener">conversion rate</a></em> is the number of conversions that occur in relation to the total possible conversions in a given timeframe. (More on that later!)</p><h4>Macro vs micro-conversions</h4><p>You may have heard references being made to macro and micro-conversion.</p><p><em>Macro-conversions</em> (or website goals) usually refer to the conversion of a visitor into a paying client or subscriber of a web service, e.g., an online magazine membership, streaming service, or software-as-a-service (SaaS) monthly subscription. These are sometimes called website goals.</p><p>On the other hand, <em>micro-conversions</em> are seen as smaller, secondary actions that a visitor takes on a website that indicates that they will convert, for example, clicking through to the site, watching a promotional video, or adding an item to your cart.</p><h4>Can a user convert twice?</h4><p>Should you pay for conversion if a single user performed the same action twice? <em>Deduplication</em> is the method we use to ensure that the right partner is credited and that clients aren&#8217;t overcharged for conversions.</p><p>Until now, all of the conversions measured by AB Tasty have followed a deduplication method. If a user accessed your conversion URL twice, we would only count one conversion for that web user. This was the case for URL and event type objectives, such as click tracking. The transaction objectives, set explicitly by our e-commerce tag, were the only exceptions. For these objectives, you have the option of displaying the conversions in the report in deduplicated (by default) or duplicated mode.</p><p>The deduplication method is best suited if you want to track macro-conversions. You want to know whether or not your modifications impacted your ability to, more or less, convert your users into subscribers.</p><figure id="attachment_88736" aria-describedby="caption-attachment-88736" style="width: 600px" class="wp-caption aligncenter"><img fetchpriority="high" decoding="async" class="wp-image-88736" src="https://www.abtasty.com/wp-content/uploads/Have-your-modifications-impacted-your-ability-to-convert-your-users-360x240.jpg" alt="Have your modifications impacted your ability to convert your users?" width="600" height="400" srcset="https://www.abtasty.com/wp-content/uploads/Have-your-modifications-impacted-your-ability-to-convert-your-users-360x240.jpg 360w, https://www.abtasty.com/wp-content/uploads/Have-your-modifications-impacted-your-ability-to-convert-your-users-1024x682.jpg 1024w, https://www.abtasty.com/wp-content/uploads/Have-your-modifications-impacted-your-ability-to-convert-your-users-150x100.jpg 150w, https://www.abtasty.com/wp-content/uploads/Have-your-modifications-impacted-your-ability-to-convert-your-users-728x485.jpg 728w, https://www.abtasty.com/wp-content/uploads/Have-your-modifications-impacted-your-ability-to-convert-your-users.jpg 1031w" sizes="(max-width: 600px) 100vw, 600px" /><figcaption id="caption-attachment-88736" class="wp-caption-text">Have your modifications impacted your ability to convert your users? (<a href="https://unsplash.com/photos/2FPjlAyMQTA" target="_blank" rel="noopener">Source</a>)</figcaption></figure><p>For micro-conversions (e.g., add to cart, access to content), the duplication method offers a complementary perspective. For example, in the case of user interactions with your interfaces, you may wish to measure whether your tests allow more users to use any element of the interface, but also whether it generates a lot of use. The conclusions of a test consist of emphasizing whether a new functionality would be different if, despite the increase in users accessing it, it does not create any repeated use (the concept of “stickiness”). The deduplication vision responds to the initial question, while the duplication vision responds to the second.</p><h3>What is a conversion rate?</h3><p>The easiest example to illustrate conversion rate is in the context of e-commerce. Conversion rate is often used by <a href="https://www.abtasty.com/blog/boost-ecommerce-conversions/" target="_blank" rel="noopener">e-commerce sites</a> to measure the percentage of visitors that end up purchasing products. In other words, how many go through the entire <a href="https://www.abtasty.com/blog/ecommerce-conversion-funnel/" target="_blank" rel="noopener">conversion funnel</a>.</p><p>If you&#8217;re an e-commerce company, your goal will be to optimize your conversion rate, which should lead to increasing your bottom line. <a href="https://www.abtasty.com/blog/boost-ecommerce-conversions/" target="_blank" rel="noopener">Conversion tracking</a> can be done through any web analytics platform, like Google Analytics, Adobe Analytics, or Mixpanel, for any period of time.</p><h3>How do you calculate conversion rate?</h3><p>Now that you know what a conversion rate is, you want to<a href="https://www.abtasty.com/blog/calculate-analyze-conversions/" target="_blank" rel="noopener"> calculate your conversion rate </a>and measure the effectiveness of your site. Don&#8217;t worry &#8211; you don&#8217;t need crazy math skills. All you have to do is divide the number of actions completed in a defined period of time by the total number of visitors to your website, then multiply the result by 100.</p><p>In other words:</p><p style="text-align: center;"><strong>Conversion rate = (Conversions or goals achieved / Total visitors) * 100.</strong></p><p>Imagine that your e-commerce website got 25,746 visitors during a chosen time frame; of those 25,746 visitors, 4,832 completed a transaction. Then, your conversion rate is 18.76%. Pretty good!</p><p>Depending on what you&#8217;re looking to measure, you can also <a href="https://blog.useproof.com/calculate-conversion-rate" target="_blank" rel="noopener">calculate the conversion rate</a> in the following ways:</p><p><img decoding="async" class="aligncenter size-large wp-image-88996" src="https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-02-1024x467.png" alt="Conversion rate formulas" width="800" height="365" srcset="https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-02-1024x467.png 1024w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-02-360x164.png 360w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-02-150x68.png 150w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-02-728x332.png 728w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-02.png 1080w" sizes="(max-width: 800px) 100vw, 800px" /></p><p>You can also find an automatic<a href="https://www.abtasty.com/sample-size-calculator/" target="_blank" rel="noopener"> conversion rate calculator</a> to get a precise calculation of your website&#8217;s conversion rate for those not doing their own math.</p><h3><b>What is a good conversion rate? (with examples)</b></h3><p>Benchmarking conversion rates isn&#8217;t easy. An FMCG (fast-moving consumer goods) e-commerce site might have a completely different conversion rate to a site that sells insurance. Two to five percent is considered a good conversion rate; remember that even a minor jump in conversions can have a significant impact.</p><p>Try to compare a site that is most similar to yours. The<a href="https://www.slideshare.net/adobe/adi-consumer-electronics-report-2020" target="_blank" rel="noopener"> ADI Consumer Report</a> for 2020 shares the following stats:</p><table><tbody><tr><td>Industry</td><td>Conversion Rate in %</td></tr><tr><td><p>Gifts</p><p>Health and Pharmacy</p><p>Apparel and Footwear</p><p>Sports</p><p>Jewelry and Cosmetics</p><p>Furniture and Decor</p><p>Major Chains</p><p>Automotive</p><p>DIY &amp; Tools</p><p>Consumer Electronics</p></td><td><p>4.9</p><p>4.6</p><p>4.2</p><p>3.1</p><p>2.9</p><p>2.3</p><p>2.3</p><p>2.2</p><p>1.7</p><p>1.4</p></td></tr></tbody></table><h3>What is CRO?</h3><p>It doesn&#8217;t matter what business you&#8217;re in; you will always try to <a href="https://www.abtasty.com/blog/boost-ecommerce-conversions/" target="_blank" rel="noopener">increase your conversions</a>. While you might be tempted to spend more money on advertising, greater awareness doesn&#8217;t always lead to more sales.</p><p>Conversion rate optimization is a much more affordable and effective way of acquiring more traffic because you can make educated, data-driven adjustments that focus on the traffic you already have. You can concentrate on micro-conversions (for example, getting your customers to fill out forms so your sales team can give them a call and push them through the funnel) or macro-conversions, like confirmed purchases.</p><p>We&#8217;ll show you how to create a winning CRO strategy later in this article.</p><h3>Factbox: Definitions<b></b></h3>						</div>
				</div>
				<div class="elementor-element elementor-element-12a70f5 elementor-widget elementor-widget-toggle" data-id="12a70f5" data-element_type="widget" data-widget_type="toggle.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.18.0 - 08-12-2023 */
.elementor-toggle{text-align:left}.elementor-toggle .elementor-tab-title{font-weight:700;line-height:1;margin:0;padding:15px;border-bottom:1px solid #d5d8dc;cursor:pointer;outline:none}.elementor-toggle .elementor-tab-title .elementor-toggle-icon{display:inline-block;width:1em}.elementor-toggle .elementor-tab-title .elementor-toggle-icon svg{margin-inline-start:-5px;width:1em;height:1em}.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-right{float:right;text-align:right}.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-left{float:left;text-align:left}.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-closed{display:block}.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-opened{display:none}.elementor-toggle .elementor-tab-title.elementor-active{border-bottom:none}.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-closed{display:none}.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-opened{display:block}.elementor-toggle .elementor-tab-content{padding:15px;border-bottom:1px solid #d5d8dc;display:none}@media (max-width:767px){.elementor-toggle .elementor-tab-title{padding:12px}.elementor-toggle .elementor-tab-content{padding:12px 10px}}.e-con-inner>.elementor-widget-toggle,.e-con>.elementor-widget-toggle{width:var(--container-widget-width);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="elementor-toggle">
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1951" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1951" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Conversion</a>
					</h4>

					<div id="elementor-tab-content-1951" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1951"><p>A <em>conversion</em> is any desired action or interaction with your online ad or website that has been defined as being valuable to your business.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1952" class="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-1952" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Conversion Rate</a>
					</h4>

					<div id="elementor-tab-content-1952" class="elementor-tab-content elementor-clearfix" data-tab="2" role="region" aria-labelledby="elementor-tab-title-1952"><p>A <em>conversion rate</em> is the number of conversions (or desired actions) taken by visitors divided by the total number of visitors to your site. </p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1953" class="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-1953" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Conversion Rate Optimization</a>
					</h4>

					<div id="elementor-tab-content-1953" class="elementor-tab-content elementor-clearfix" data-tab="3" role="region" aria-labelledby="elementor-tab-title-1953"><p><em>Conversion rate optimization</em> is the strategic process of increasing the percentage of visitors that perform a desirable action on your site.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1954" class="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-1954" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Conversion Funnel</a>
					</h4>

					<div id="elementor-tab-content-1954" class="elementor-tab-content elementor-clearfix" data-tab="4" role="region" aria-labelledby="elementor-tab-title-1954"><p>A <em><a href="https://www.abtasty.com/blog/ecommerce-conversion-funnel/">conversion funnel</a></em> refers to the different steps prospects take before becoming full-fledged customers of your business.</p></div>
				</div>
								</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-71e9ece elementor-widget elementor-widget-text-editor" data-id="71e9ece" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<h2><b>Benefits of Conversion Rate Optimization </b></h2><p>There are many reasons <a href="https://www.abtasty.com/blog/conversion-rate-optimization-guide/#why-is-cro-so-valuable-for-companies" target="_blank" rel="noopener">why CRO is such an important part of your online marketing strategy</a>. While strategies like SEO and advertising can generate additional traffic, your <a href="https://www.abtasty.com/blog/conversion-rate-optimization-guide/#why-is-cro-so-valuable-for-companies" target="_blank" rel="noopener">conversion rate optimization strategy</a> can help turn your traffic into quality leads and sales. You&#8217;ll also gain valuable insights into customer preferences and behaviors. Let&#8217;s look at how CRO can benefit your business.</p><h3><b>CRO creates a seamless shopping experience</b></h3><p>Conversion rate optimization drives sales, but it can also remove any obstacles on your site that might prevent customers from completing a purchase. Small improvements in UX can have a big impact and improve the overall shopping experience of your customers.</p><p>Creating a seamless shopping experience without these niggling roadblocks will increase the customer lifetime value, i.e., keep customers coming back for more. This is done by analyzing feedback and testing solutions to ensure that the decisions you make are rooted in real data.</p><figure id="attachment_88770" aria-describedby="caption-attachment-88770" style="width: 728px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-88770" src="https://www.abtasty.com/wp-content/uploads/Turn-your-traffic-into-quality-leads-and-sales-with-the-correct-conversion-rate-optimization-strategy.jpg" alt="Turn your traffic into quality leads and sales with the correct conversion rate optimization strategy." width="728" height="485" srcset="https://www.abtasty.com/wp-content/uploads/Turn-your-traffic-into-quality-leads-and-sales-with-the-correct-conversion-rate-optimization-strategy.jpg 728w, https://www.abtasty.com/wp-content/uploads/Turn-your-traffic-into-quality-leads-and-sales-with-the-correct-conversion-rate-optimization-strategy-360x240.jpg 360w, https://www.abtasty.com/wp-content/uploads/Turn-your-traffic-into-quality-leads-and-sales-with-the-correct-conversion-rate-optimization-strategy-150x100.jpg 150w" sizes="(max-width: 728px) 100vw, 728px" /><figcaption id="caption-attachment-88770" class="wp-caption-text">Turn your traffic into quality leads and sales with the correct conversion rate optimization strategy. (<a href="https://unsplash.com/photos/iE71-TMrrkE" target="_blank" rel="noopener">Source</a>)</figcaption></figure><h3><b>CRO helps you understand your customers </b></h3><p>The days of &#8220;educated guesses&#8221; are over. A CRO specialist will provide you with real insights based on data collected, getting to the root of any problems you may be experiencing. Let&#8217;s look at the issue of shopping cart abandonment.</p><p>You might find that your users are landing on your site, browsing around, and adding items to their cart but simply not taking the final step of checking out. This could be due to <a href="https://www.abtasty.com/blog/cognitive-dissonance-more-conversions/" target="_blank" rel="noopener">cognitive dissonance</a>, a simple psychological barrier to purchase. You might add a pop-up message that states that the item will only be on sale for 24 hours — or that there are only three left in stock — to create urgency or add a badge that indicates that checkout is secure to see if that makes a difference.</p><p>Maybe you want to know more about your customers so that you can tailor your messaging according to their needs. CRO can provide real insight into <a href="https://www.abtasty.com/blog/psychographics-in-marketing/" target="_blank" rel="noopener">buyer personas and user psychographics</a>.</p><h3><b>CRO improves marketing ROI and lowers acquisition costs</b></h3><p>You might be aware of the adage that it costs more to acquire a new customer than to retain or convert an existing one. It&#8217;s true! Luckily, the higher the conversion rate is on your site, the lower your <a href="https://www.abtasty.com/blog/ultimate-guide-customer-acquisition/" target="_blank" rel="noopener">customer acquisition</a> costs.</p><p>We know that you have to spend on advertising, and we know that paid advertising is expensive. Popular keywords aren&#8217;t cheap, so identifying the problems on your site and the phrases that lead to the most conversions will save you a lot of money on ineffective paid advertisements and improve your marketing ROI.</p><h2><b>How to create a CRO strategy</b><b> </b></h2><p>According to <a href="https://ignitevisibility.com/guide-conversion-rate-optimization-2018/" target="_blank" rel="noopener">Forrester Research</a>, 90% of firms rated their CRO program as valuable or extremely valuable on a Likert Scale when it comes to achieving their strategic goals. Let&#8217;s examine how you can create your winning CRO strategy.</p><h3><b>Why your CRO strategy matters</b></h3><p>CRO can transform your business for good. A recent survey by marketing firm Outgrow found that among 3,000 companies, 5% of companies investing in CRO tools reported an ROI larger than 1000%. While your business might not enjoy that level of growth, the average ROI for the companies surveyed stands at 223%; and more than 70% of marketers use CRO campaign results to inform their campaigns.</p><p>If executed correctly, CRO strategies can <a href="https://www.abtasty.com/blog/boost-ecommerce-conversions/" target="_blank" rel="noopener">improve landing page conversions</a>, identify buyer personas, reduce cart abandonment and increase sales.</p><h3><b>Setting clear CRO goals</b></h3><p>Before setting your CRO campaign, define your <a href="https://www.abtasty.com/blog/key-performance-indicator/" target="_blank" rel="noopener">Key Performance Indicators</a> (KPIs). Try to be as detailed as possible. Good examples include:</p><ul><li aria-level="1">Decreasing your bounce rate by 10%</li><li aria-level="1">Increasing the average browsing time by 1 minute</li><li aria-level="1">Reducing cart abandonment rates by 25%</li><li aria-level="1">Increase site speed by 1.5 seconds</li><li aria-level="1">Increase subscriptions by 5%</li><li aria-level="1">Increase page views</li><li aria-level="1">Increase newsletter subscribers</li></ul><p><img loading="lazy" decoding="async" class="aligncenter size-large wp-image-88992" src="https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-04-1024x654.png" alt="Examples of KPIs" width="800" height="511" srcset="https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-04-1024x654.png 1024w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-04-360x230.png 360w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-04-150x96.png 150w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-04-728x465.png 728w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-04.png 1087w" sizes="(max-width: 800px) 100vw, 800px" /></p><p>A good KPI is specific, measurable, and limited to a specific timeframe. Once you know what you are aiming for, you can start executing.</p><h3><b>Phases of your CRO strategy</b></h3><p>You&#8217;ll soon discover that the entire process of optimizing conversion rates will provide a wealth of information that you can explore and utilize in your future campaigns. While A/B testing is the most common experiment that <a href="https://www.abtasty.com/blog/conversion-rate-experts-to-follow/" target="_blank" rel="noopener">CRO experts</a> run, true optimization is more robust.</p><p><img loading="lazy" decoding="async" class="aligncenter size-full wp-image-88991" src="https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-03.png" alt="Phases of your CRO strategy" width="630" height="540" srcset="https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-03.png 630w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-03-360x309.png 360w, https://www.abtasty.com/wp-content/uploads/CRO-guide-info-graphie-03-150x129.png 150w" sizes="(max-width: 630px) 100vw, 630px" /></p><h4><b>Step One: Research and discovery</b></h4><p>Your first step will be trying to identify opportunities for improvement. This could be anything that prevents a visitor from converting, such as bad copy to UX bottlenecks. You&#8217;ll start by analyzing your existing site in Google Analytics and choosing a limited number of opportunity pages to optimize.</p><p>From there, you can choose the metric that you want to compare and improve upon, e.g., high bounce rates or low average session duration. The pages you want to test should have sufficient traffic and be important enough to your business that making improvements will deliver a real impact. Once you&#8217;ve identified the pages, you can hone in on why users aren&#8217;t converting as well as they should.</p><p>Try to answer the question, &#8220;How are people finding this page?&#8221; and &#8220;What is their pre-click experience like?&#8221;, Knowing this will help you hone in on the user intent (i.e., what value they hope to get out of their visit). You can see this by visiting Google Analytics and examining the Default Channel Group of the URL you want to analyze. This will reveal the sources that are leading people to your page.</p><p>You can use various on and off-site testing methods to reveal possible bottlenecks or barriers to conversion, including user testing, session replays, heat maps, click maps and heuristic analysis. The insights you gather should give you enough information to create a detailed hypothesis to test.</p><h4><b>Step Two: Hypotheses and prioritization</b></h4><p>While (theoretically) there&#8217;s no limit to the number of hypotheses you can test for, companies have finite resources and a limited amount of time to devote to testing, which is where prioritization comes in. You don&#8217;t want to focus on hypotheses that won&#8217;t move the needle.</p><p>To combat this, we can follow two guidelines:</p><ul><li aria-level="1">Come up with testable hypotheses (<a href="https://patreonhq.com/thats-not-a-hypothesis-25666b01d5b4" target="_blank" rel="noopener">follow this guide</a> on how to do this).</li><li aria-level="1">Ruthlessly prioritize ideas based on effort and ease.</li></ul><p>There are plenty of prioritization models out there you can follow, the most popular being <a href="https://blog.growthhackers.com/the-practical-advantage-of-the-ice-score-as-a-test-prioritization-framework-cdd5f0808d64" target="_blank" rel="noopener">ICE</a>, <a href="https://www.widerfunnel.com/pie-framework/" target="_blank" rel="noopener">PIE</a>, and <a href="https://conversionxl.com/blog/better-way-prioritize-ab-tests/" target="_blank" rel="noopener">PXL</a>. You want to determine which actions will generate the greatest impact on the effort and resources you&#8217;re putting in. Deciding on an objective way to choose between hypotheses will go a long way towards creating predictable, repeatable CRO processes. All prioritization frameworks have pros and cons, so don&#8217;t waste too much time picking the right one. Choose one, stick to it, and get started.</p><h4><b>Step Three: Experimentation</b></h4><p>Finally, we have experimentation. This is the stage that everyone associates with CRO: A/B testing. A/B testing is a common CRO technique that involves changing one aspect of your website — the color of a CTA, the length of a form, etc. — and observing whether this change positively or negatively impacts your chosen KPI. If your variation provides better results, you can hard code it into your site.</p><figure id="attachment_88779" aria-describedby="caption-attachment-88779" style="width: 728px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-88779" src="https://www.abtasty.com/wp-content/uploads/There-are-several-tools-you-can-use-to-run-AB-tests.jpg" alt="There are several tools you can use to run AB tests" width="728" height="485" srcset="https://www.abtasty.com/wp-content/uploads/There-are-several-tools-you-can-use-to-run-AB-tests.jpg 728w, https://www.abtasty.com/wp-content/uploads/There-are-several-tools-you-can-use-to-run-AB-tests-360x240.jpg 360w, https://www.abtasty.com/wp-content/uploads/There-are-several-tools-you-can-use-to-run-AB-tests-150x100.jpg 150w" sizes="(max-width: 728px) 100vw, 728px" /><figcaption id="caption-attachment-88779" class="wp-caption-text">There are several tools you can use to run AB tests (<a href="https://unsplash.com/photos/Im7lZjxeLhg" target="_blank" rel="noopener">Source</a>)</figcaption></figure><p>Testing is a process that requires statistical knowledge to get it right. You don&#8217;t necessarily need to have a data scientist looking over your shoulder, but it wouldn&#8217;t hurt to have some guidance on your first few <a href="https://abtasty.canny.io/feature-requests-staff/p/reporting-compact-view-extended-view" target="_blank" rel="noopener">experiments</a>. (We&#8217;ll get into best practices a little later on).</p><p>There are several tools you can use to run A/B tests. <a href="https://www.abtasty.com/" target="_blank" rel="noopener">AB Tasty</a> is a solid solution for running a website, blog, or product experiments and any web personalization.</p><p>If you&#8217;re experimenting on your pop-ups or your email list, it&#8217;s almost certain that your tool of choice will have some sort of A/B testing feature native to the product. That&#8217;s certainly true of something like HubSpot or Mailchimp.</p><p>In any case, just make sure you can:</p><ul><li aria-level="1">Set up experiments correctly (i.e., the page has enough traffic to draw meaningful insights)</li><li aria-level="1">Randomize and deploy experiences (with the help of a testing tool)</li><li aria-level="1">Analyze the experiments correctly</li></ul><p>If you don&#8217;t have enough traffic to the page you want to test, you can:</p><ul><li aria-level="1">Validate using qualitative research</li><li aria-level="1">Roll it out and watch the time-series data</li></ul><p>You can validate copy changes through Five Second Testing. Show users a design or copy for five seconds, and then ask follow-up questions about what they saw and remember. You can validate usability changes through user testing, session replays, or polls.</p><p>Additionally, keep an eye on the data before and after you roll out the changes. If the change is big enough, you can see the bump in the data over time. The numbers certainly shouldn&#8217;t go down. You can also try a <a href="https://www.abtasty.com/blog/convert-readers-into-customers/" target="_blank" rel="noopener">Bayesian time series</a> model to see if your changes produced significant results, given other implicit trends like seasonality.</p><p>It&#8217;s not necessarily the best approach, but it is a quick and more scientific way of measuring changes and improvements.</p><h4><b>Step Four: Analysis and repeat</b></h4><p>The analysis is tricky, and your best bet would be to engage with a specialist to help you make sense of the data. If you don&#8217;t have an analyst, you should take some time to go over the basics. There are many<a href="https://www.abtasty.com/blog/10-books-to-boost-cro-skills/"> books</a> you can read on the subject of great online resources:</p><ul><li aria-level="1"><a href="http://20bits.com/article/statistical-analysis-and-ab-testing" target="_blank" rel="noopener">Statistical Analysis and A/B Testing</a></li><li aria-level="1"><a href="https://towardsdatascience.com/data-science-you-need-to-know-a-b-testing-f2f12aff619a" target="_blank" rel="noopener">Data science you need to know! A/B testing</a></li><li aria-level="1"><a href="http://hookedondata.org/Guidelines-for-AB-Testing/" target="_blank" rel="noopener">Guidelines for A/B Testing</a></li><li aria-level="1"><a href="https://www.abtasty.com/blog/calculate-analyze-conversions/" target="_blank" rel="noopener">How to Calculate, Track, and Analyze Conversion Rates</a></li></ul><p>Important note: before you run the test, you should decide upfront what action you will take if the test wins, loses, or is inconclusive. That way, you mitigate the effects of confirmation bias and cherry-picking.</p><h2><b>Components of CRO </b></h2><p>While there isn&#8217;t a set CRO process that all companies use, most contain the same or similar components. We&#8217;ve compiled a list of commonly used CRO elements, as well as a <a href="https://www.abtasty.com/blog/conversion-optimization-glossary/" target="_blank" rel="noopener">glossary of terms</a> you can consult if you come across a phrase you don&#8217;t know.<b></b></p>						</div>
				</div>
				<div class="elementor-element elementor-element-47d7a7e elementor-widget elementor-widget-toggle" data-id="47d7a7e" data-element_type="widget" data-widget_type="toggle.default">
				<div class="elementor-widget-container">
					<div class="elementor-toggle">
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7531" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-7531" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">A/B testing</a>
					</h4>

					<div id="elementor-tab-content-7531" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-7531"><p><a href="https://www.abtasty.com/ab-testing/" target="_blank" rel="noopener">A/B testing</a> is the process of verifying your conversion hypothesis. It involves comparing two or more versions of your site and conversion rates to determine which is the most effective. To do this, one version is given to one group and another to the other group. From this, you can identify how each version performs.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7532" class="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-7532" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Call to action (CTA)</a>
					</h4>

					<div id="elementor-tab-content-7532" class="elementor-tab-content elementor-clearfix" data-tab="2" role="region" aria-labelledby="elementor-tab-title-7532"><p>Your <a href="https://www.abtasty.com/blog/call-to-action-guide/" target="_blank" rel="noopener">call to action</a> tells visitors exactly which action you would like them to take (e.g., “Click here for more information” or “Download your free e-book here”)!</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7533" class="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-7533" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Analytics</a>
					</h4>

					<div id="elementor-tab-content-7533" class="elementor-tab-content elementor-clearfix" data-tab="3" role="region" aria-labelledby="elementor-tab-title-7533"><p>Analytics is the various tools to measure and explore visitor information to improve conversion rates.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7534" class="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-7534" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">User or session recordings</a>
					</h4>

					<div id="elementor-tab-content-7534" class="elementor-tab-content elementor-clearfix" data-tab="4" role="region" aria-labelledby="elementor-tab-title-7534"><p>User or session recordings are software programs that can track the movement of users and visitors as they navigate through your site. You can use the information to find out which areas they are most likely to click on, which barriers exist that prevent them from taking action, and where they would like to go on the site. </p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7535" class="elementor-tab-title" data-tab="5" role="button" aria-controls="elementor-tab-content-7535" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">User experience</a>
					</h4>

					<div id="elementor-tab-content-7535" class="elementor-tab-content elementor-clearfix" data-tab="5" role="region" aria-labelledby="elementor-tab-title-7535"><p>User experience (UX) is defined as the overall experience your users have throughout the use of an interface, digital appliance, or, more generally, interaction with any device or service. We say that a user experience is poor if a user experiences an obstacle that prevents them from doing what they&#8217;d like to do (for example, if they find it difficult to find or use the search bar, or if the search function delivers irrelevant results). UX and CRO go hand-in-hand because CRO involves identifying obstacles, testing them, and <a href="https://www.abtasty.com/blog/better-ux-increase-conversion-chances/" target="_blank" rel="noopener">optimizing</a> them so that you <a href="https://www.abtasty.com/blog/improve-ux-optimize-conversions/" target="_blank" rel="noopener">perform better</a>.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7536" class="elementor-tab-title" data-tab="6" role="button" aria-controls="elementor-tab-content-7536" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Heatmaps</a>
					</h4>

					<div id="elementor-tab-content-7536" class="elementor-tab-content elementor-clearfix" data-tab="6" role="region" aria-labelledby="elementor-tab-title-7536"><p>Heatmapping is a data visualization technique that shows where visitors click on your page using colors. Hot colors (usual hues of red) show you where visitors are clicking or interacting on your page most frequently, whereas cold colors (blue or green) show you the areas they least click on. You may want to move your most important call to action buttons to the &#8220;hot zones&#8221; as part of your CRO process.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7537" class="elementor-tab-title" data-tab="7" role="button" aria-controls="elementor-tab-content-7537" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Multivariate testing</a>
					</h4>

					<div id="elementor-tab-content-7537" class="elementor-tab-content elementor-clearfix" data-tab="7" role="region" aria-labelledby="elementor-tab-title-7537"><p>Multivariate testing is similar to A/B testing but compares more variables and reveals more information about how these variables interact. In an A/B test, the traffic is split between different versions of the design of a page. Multivariate testing compares the data from each variation to determine which method is the most successful and which elements will significantly impact a visitor&#8217;s interaction with the site. A good example would be creating two different sign-up forms, two different calls to action, and two different headers. You would then send visitors to all possible combinations of these elements to see which combination would be most effective. Whether you use <a href="https://www.abtasty.com/blog/ab-vs-multivariate-test/" target="_blank" rel="noopener">multivariate testing or A/B testing</a> depends on your site traffic. You need a significant amount of traffic to your site to obtain meaningful data from multivariate testing.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-7538" class="elementor-tab-title" data-tab="8" role="button" aria-controls="elementor-tab-content-7538" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Surveys and NPS</a>
					</h4>

					<div id="elementor-tab-content-7538" class="elementor-tab-content elementor-clearfix" data-tab="8" role="region" aria-labelledby="elementor-tab-title-7538"><p>You don&#8217;t always have to use on-site behavior to guide CRO. Many companies use surveys and NPS (<a href="https://www.abtasty.com/blog/net-promoter-score-nps-guide/" target="_blank" rel="noopener">Net Promoter Score</a>) surveys to gather the opinions of their users. Net Promoter asks customers variations of the same simple question: <em>Based on your recent interaction, how likely are you to recommend our brand to others?</em> This is an excellent way to determine the sentiment about your site and identify areas for improvement.</p></div>
				</div>
								</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-ac4f20e elementor-widget elementor-widget-text-editor" data-id="ac4f20e" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<h2><b>Best CRO practices</b></h2><p>It&#8217;s hard to compile a list of best (and worst!) CRO practices because every company is different. In fact, that&#8217;s why we have to test every assumption we make — there simply isn&#8217;t a one-size-fits-all methodology that works for every site, every time. You have to spend time understanding how your customers think and behave and what their preferences are.</p><p>Here are a few strategies you can try as you embark on your optimization journey (and a few things you should avoid):</p><h3><b>Five things to try during conversion rate optimization</b></h3><p>When it comes to CRO, your best practices are actually just suggestions! There are no quick wins in conversion rate optimization, but you can follow our guidelines as a starting point.</p><h4><b>Run A/B Tests on your landing pages </b></h4><p>Landing pages are designed specifically to convert your users to a specific action, like capturing a lead or buying a product. An optimized landing page might be the only thing you need for business to boom, so make sure you thoroughly test and improve the landing pages that have the most impact on your bottom line.</p><p>To run an A/B test, you should put at least two different landing pages against each other, differentiated by a single element. This could include different calls to action, different designs, copy lengths, and images. Make sure that your landing page is visually appealing, and be prepared to redesign the entire page if it&#8217;s not converting. Remember, it&#8217;s not about your preferences: it&#8217;s about your customers.</p><figure id="attachment_88783" aria-describedby="caption-attachment-88783" style="width: 728px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-88783" src="https://www.abtasty.com/wp-content/uploads/AB-testing-1.jpg" alt="A/B testing consists of changing one aspect of your website and observing how this change impacts your chosen KPI." width="728" height="485" srcset="https://www.abtasty.com/wp-content/uploads/AB-testing-1.jpg 728w, https://www.abtasty.com/wp-content/uploads/AB-testing-1-360x240.jpg 360w, https://www.abtasty.com/wp-content/uploads/AB-testing-1-150x100.jpg 150w" sizes="(max-width: 728px) 100vw, 728px" /><figcaption id="caption-attachment-88783" class="wp-caption-text">A/B testing consists of observing how changing one aspect of your website impacts your chosen KPI (<a href="https://www.seobility.net/en/wiki/AB_Testing" target="_blank" rel="noopener">Source</a>)</figcaption></figure><h4> </h4><h4><b>CTA copy and color combinations and placement</b></h4><p>Experimenting with a CTA button (including changing the wording, font, and copy length as well as color combinations and where the buttons are placed) is a great way to test your site and improve conversion.</p><p>For example, let&#8217;s say you&#8217;re an AB Tasty client and you&#8217;d like to increase clicks to the “Confirm purchase” CTA on your basket page. Using our visual editor, you can test if changing the <a href="https://www.abtasty.com/blog/green-ctas-always-work-better/" target="_blank" rel="noopener">color of the CTA</a> from blue to green will help. Since you&#8217;ve already got AB Tasty&#8217;s tag on your website, you can get this test up and running in minutes.</p><p>Unbeknownst to them, a shopper on your site will either be presented with the original version or the variation. This process is randomized so that the pool seeing version A is more or less identical to those visiting version B. Since you&#8217;ll have set your test&#8217;s KPI to be “Clicks on CTA,” you can easily see in the report which variation performed best once enough visitors have been exposed to the test to make it statistically significant.</p><h4><b>Page layout testing </b></h4><p>Website navigation has a significant impact on user experience. If you have high bounce rates or low session duration, make sure to test different variations of your page layout. Is it easy for users to find what they are looking for? Are they able to find and use the search bar? Most websites have their search bar located on the top right corner of the site, above the fold. Design-wise, it might look better to place it somewhere else, but non-conventional placement can make it difficult for users to find. Drop-menus are popular, but a lot of website visitors find them annoying because their eyes move faster than their mouse, which makes them hard to use. A different menu format can make a big difference.</p><h4> </h4><h4><b>Pop-ups and urgency </b></h4><p><a href="https://www.abtasty.com/blog/pop-up-conversion/" target="_blank" rel="noopener">Pop-ups</a> have a bad reputation, but they can be extremely useful tools if used correctly. A pop-up letting users know that they can receive an additional 10% off if they sign up for the newsletter before checking out is a great motivator. They can also be used to create a sense of urgency. This is usually found on accommodation sites letting you know that four other people are looking at the same room as you or on e-commerce sites that tell you that there are only two units of the item you are looking at in stock. Personalized offers, time-limited offers, and free delivery offers are valuable conversion tools for customers because the benefits outweigh the intrusiveness of the pop-up.</p><h4><b>Clean, actionable web copywriting</b></h4><p>Copywriting isn&#8217;t easy. Often it&#8217;s not <em>what</em> you say, but <em>how</em> you say it (and present it). A few simple phrases that clearly state what you want your visitor to do and know about your brand are often more effective than long-winded essays about your years of experience in the business.</p><p>Good copywriting for a website is concise and easy to understand, even at a glance. If you are writing a more complex article, such as a troubleshooting guide, try to solve their problem right away by making it easy to find their question and then guiding them through the steps. Remember that most people don&#8217;t like to read, so include lots of imagery and video where possible to break up the text.</p><p><a href="https://www.abtasty.com/blog/cro-seo/">SEO</a> forms part of your copywriting and CRO considerations as well. Try writing SEO-optimized copy for every step of the buyer journey, whether they are simply looking for information to solve a problem, doing comparison shopping or ready to make a purchase.</p><h3><b>Five things to avoid during CRO</b></h3><h4><b>Conversion killers</b></h4><p>While there is no magic wand to wave during CRO that will guarantee a better result, there are a few things that are surefire conversion killers. You have to be willing to kill your darlings or, more specifically, <a href="https://www.abtasty.com/blog/fix-homepage-killing-conversion-rates/" target="_blank" rel="noopener">kill off pages</a> and posts that are hurting your conversion rates instead of helping.</p><h4><b>Too many distractions</b></h4><p>Too many bells and whistles will only get in the way. Multiple calls to action, gimmicky animation, and pages overstuffed with copy and images will cause more frustration than conversion. Visitors should be able to find what they need easily. Avoid clutter and <a href="https://www.abtasty.com/blog/decision-fatigue-website-conversion-rates/" target="_blank" rel="noopener">decision fatigue</a> by presenting options in a neat, intuitive, and organized way.</p><h4><b>Slow site speed</b></h4><p>Consumers are used to websites loading at lightning speed — even a two-second delay can increase bounce rates by 100%! A slow loading time can negatively impact your SEO as well as your UX, so make sure that you keep your site running optimally to <a href="https://www.abtasty.com/blog/page-speed-conversions/" target="_blank" rel="noopener">prevent your site speed from negatively affecting your conversion rate</a>.</p><h4><b>Unclear navigation</b></h4><p>Have you ever entered a building and found yourself hopelessly lost and frustrated because of the layout? Website visitors have even less tolerance for sites that aren&#8217;t easy to navigate because they can simply click away and visit a competitor&#8217;s site. If your site isn&#8217;t intuitive to use, your bounce rates will go through the roof.</p><figure id="attachment_88790" aria-describedby="caption-attachment-88790" style="width: 728px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-88790" src="https://www.abtasty.com/wp-content/uploads/Improving-the-navigation-on-your-site-will-reduce-bounce-rates-considerably-Source.jpg" alt="Improving the navigation on your site will reduce bounce rates considerably" width="728" height="485" srcset="https://www.abtasty.com/wp-content/uploads/Improving-the-navigation-on-your-site-will-reduce-bounce-rates-considerably-Source.jpg 728w, https://www.abtasty.com/wp-content/uploads/Improving-the-navigation-on-your-site-will-reduce-bounce-rates-considerably-Source-360x240.jpg 360w, https://www.abtasty.com/wp-content/uploads/Improving-the-navigation-on-your-site-will-reduce-bounce-rates-considerably-Source-150x100.jpg 150w" sizes="(max-width: 728px) 100vw, 728px" /><figcaption id="caption-attachment-88790" class="wp-caption-text">Improving the navigation on your site will reduce bounce rates considerably (<a href="https://unsplash.com/photos/7okkFhxrxNw" target="_blank" rel="noopener">Source</a>)</figcaption></figure><h4> </h4><h4><b>Ultra-long forms</b></h4><p>Data is powerful and important, but you have to keep your customers&#8217; preferences in mind. If your data collection form is too long and too detailed, you risk your customers abandoning the form altogether. Shorter is always better when it comes to web forms.</p><h4><b>Forced account creation</b></h4><p>Data privacy is a hot topic, and very few people are willing to hand over their email addresses and details to a website. Give customers the option to checkout as a guest and convince them to sign up with compelling offers and freebies (like e-books) instead of forcing them to create an account before they are ready.</p><h2><b>FAQs</b></h2>						</div>
				</div>
				<div class="elementor-element elementor-element-6357991 elementor-widget elementor-widget-toggle" data-id="6357991" data-element_type="widget" data-widget_type="toggle.default">
				<div class="elementor-widget-container">
					<div class="elementor-toggle">
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1041" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1041" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">What is the purpose of CRO?</a>
					</h4>

					<div id="elementor-tab-content-1041" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1041"><p>Conversion Rate Optimization (CRO) aims to persuade more website users or visitors to complete the desired action on your website. This ultimately allows you to lower your customer acquisition costs by gaining more value from existing users, acquiring additional new visitors and growing your sales and business. </p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1042" class="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-1042" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">What is a CRO strategy?</a>
					</h4>

					<div id="elementor-tab-content-1042" class="elementor-tab-content elementor-clearfix" data-tab="2" role="region" aria-labelledby="elementor-tab-title-1042"><p>A conversion rate optimization (CRO) strategy is the technique used to improve conversions (such as purchasing an item, signing up to a service for a trial period, or downloading a free e-book) by visitors on a website or app.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1043" class="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-1043" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">What are the best CRO tools?</a>
					</h4>

					<div id="elementor-tab-content-1043" class="elementor-tab-content elementor-clearfix" data-tab="3" role="region" aria-labelledby="elementor-tab-title-1043"><p>You will need to use a combination of tools to get the best CRO results. For analytics, we recommend using <a href="https://analytics.google.com/analytics/web/provision/#/provision" target="_blank" rel="noopener">Google Analytics </a>or <a href="https://www.adobe.io/apis/experiencecloud/analytics.html#:~:text=Adobe%20Analytics%20is%20the%20industry,all%20of%20your%20marketing%20channels.&amp;text=Adobe%20Analytics%20APIs%20offer%20limitless,data%20into%20key%20business%20processes." target="_blank" rel="noopener">Adobe Analytics</a>. Behavioral analysis tools like Microsoft Clarity’s <a href="https://clarity.microsoft.com/heatmaps" target="_blank" rel="noopener">heatmapping tool</a> and feedback tools like<a href="https://www.hubspot.com/products/service/customer-feedback?hubs_post=blog.hubspot.com%2Fservice%2Fnps-survey-tools&amp;hubs_post-cta=HubSpot%20Customer%20Feedback%20Software&amp;_ga=2.268026638.1627223736.1636984683-258675987.1636984683&amp;_conv_v=vi%3A1*sc%3A1*cs%3A1636984682*fs%3A1636984682*pv%3A1*seg%3A%7B10031564.1%7D*exp%3A%7B%7D&amp;_conv_s=si%3A1*sh%3A1636984681932-0.3698280917115886*pv%3A1" target="_blank" rel="noopener"> Hubspot&#8217;s NPS surveys</a> can help gather additional insight that drives improvement. At the same time, <a href="https://www.abtasty.com/#">AB Tasty</a> makes split and multivariate testing and experimentation seamless and straightforward.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1044" class="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-1044" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">What is a CRO test?</a>
					</h4>

					<div id="elementor-tab-content-1044" class="elementor-tab-content elementor-clearfix" data-tab="4" role="region" aria-labelledby="elementor-tab-title-1044"><p>A conversion rate optimization (CRO) test is used to determine which changes to your site will have the best possible outcome. This is usually an A/B or multivariate test, but there are numerous other methods of testing that can be deployed.</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h4 id="elementor-tab-title-1045" class="elementor-tab-title" data-tab="5" role="button" aria-controls="elementor-tab-content-1045" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">How do I improve my conversion rate?</a>
					</h4>

					<div id="elementor-tab-content-1045" class="elementor-tab-content elementor-clearfix" data-tab="5" role="region" aria-labelledby="elementor-tab-title-1045"><p>Conversion rates can be improved through many tactics, including shortening your contact forms, adding testimonials and reviews, removing distractions, strengthening your copy and adding pop-ups that create a sense of scarcity or urgency.</p></div>
				</div>
								</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-3a9a3dc elementor-widget elementor-widget-text-editor" data-id="3a9a3dc" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<h2><b>Resources</b></h2><p>You will find plenty of information about conversion rates on our blog, but if you&#8217;d like to bookmark a few outside sources, we can recommend the following thought leaders:</p><ul><li><a href="https://twitter.com/stlstude" target="_blank" rel="noopener">Laura Stude</a></li><li><a href="https://linktr.ee/TheGrok" target="_blank" rel="noopener">Bryan Eisenberg</a></li><li><a href="https://primalbrain.com/" target="_blank" rel="noopener">Tim Ash</a></li><li><a href="https://peeplaja.com/" target="_blank" rel="noopener">Peep Laja</a></li><li><a href="https://copyhackers.com/copywriting-training-calendar" target="_blank" rel="noopener">Joanna Wiebe</a></li><li><a href="https://shanebarker.com/" target="_blank" rel="noopener">Shane Barker</a></li><li><a href="https://conversionsciences.com/cro-consultants-conversions-profits/" target="_blank" rel="noopener">Brian Massey</a></li><li><a href="https://chiefmartec.com/" target="_blank" rel="noopener">Scott Brinker</a></li></ul>						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6e3917c" data-id="6e3917c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-b9b1c89 elementor-toc--content-ellipsis elementor-widget elementor-widget-table-of-contents" data-id="b9b1c89" data-element_type="widget" data-settings="{&quot;headings_by_tags&quot;:[&quot;h2&quot;,&quot;h3&quot;],&quot;exclude_headings_by_selector&quot;:[],&quot;marker_view&quot;:&quot;bullets&quot;,&quot;icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-right&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;collapse_subitems&quot;:&quot;yes&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;sticky_offset&quot;:100,&quot;sticky_parent&quot;:&quot;yes&quot;,&quot;_animation&quot;:&quot;none&quot;,&quot;container&quot;:&quot;#ab-testing&quot;,&quot;hierarchical_view&quot;:&quot;yes&quot;,&quot;min_height&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;min_height_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;min_height_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;sticky_effects_offset&quot;:0}" data-widget_type="table-of-contents.default">
				<div class="elementor-widget-container">
			<style>/*! elementor-pro - v3.18.0 - 06-12-2023 */
.elementor-widget-table-of-contents .elementor-toc__header-title{color:var(--header-color)}.elementor-widget-table-of-contents.elementor-toc--collapsed .elementor-toc__toggle-button--collapse,.elementor-widget-table-of-contents:not(.elementor-toc--collapsed) .elementor-toc__toggle-button--expand{display:none}.elementor-widget-table-of-contents .elementor-widget-container{min-height:var(--box-min-height);border:var(--box-border-width,1px) solid var(--box-border-color,#9da5ae);border-radius:var(--box-border-radius,3px);background-color:var(--box-background-color);transition:min-height .4s;overflow:hidden}.elementor-toc__header{display:flex;align-items:center;justify-content:space-between;padding:var(--box-padding,20px);background-color:var(--header-background-color);border-bottom:var(--separator-width,1px) solid var(--box-border-color,#9da5ae)}.elementor-toc__header-title{font-size:18px;margin:0;color:var(--header-color)}.elementor-toc__toggle-button{cursor:pointer;display:inline-flex}.elementor-toc__toggle-button i{color:var(--toggle-button-color)}.elementor-toc__toggle-button svg{height:1em;width:1em;fill:var(--toggle-button-color)}.elementor-toc__spinner-container{text-align:center}.elementor-toc__spinner{font-size:2em}.elementor-toc__spinner.e-font-icon-svg{height:1em;width:1em}.elementor-toc__body{padding:var(--box-padding,20px);max-height:var(--toc-body-max-height);overflow-y:auto}.elementor-toc__body::-webkit-scrollbar{width:7px}.elementor-toc__body::-webkit-scrollbar-thumb{background-color:#babfc5;border-radius:10px}.elementor-toc__list-wrapper{list-style:none;padding:0}.elementor-toc__list-item{margin-bottom:.5em}.elementor-toc__list-item.elementor-item-active{font-weight:700}.elementor-toc__list-item .elementor-toc__list-wrapper{margin-top:.5em;margin-left:var(--nested-list-indent,1em)}.elementor-toc__list-item-text:hover{color:var(--item-text-hover-color);-webkit-text-decoration:var(--item-text-hover-decoration);text-decoration:var(--item-text-hover-decoration)}.elementor-toc__list-item-text.elementor-item-active{color:var(--item-text-active-color);-webkit-text-decoration:var(--item-text-active-decoration);text-decoration:var(--item-text-active-decoration)}.elementor-toc__list-item-text-wrapper{display:flex;align-items:center}.elementor-toc__list-item-text-wrapper:before,.elementor-toc__list-item-text-wrapper i{margin-right:8px;color:var(--marker-color)}.elementor-toc__list-item-text-wrapper svg{margin-right:8px;fill:var(--marker-color);height:var(--marker-size,.5em);width:var(--marker-size,.5em)}.elementor-toc__list-item-text-wrapper i{font-size:var(--marker-size,.5em)}.elementor-toc__list-item-text-wrapper:before{font-size:var(--marker-size,1em)}.elementor-toc--content-ellipsis .elementor-toc__list-item-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.elementor-toc__list-items--collapsible>.elementor-toc__list-wrapper>.elementor-toc__list-item>.elementor-toc__list-wrapper{display:none}.elementor-toc__heading-anchor{position:absolute}.elementor-toc__body .elementor-toc__list-item-text{color:var(--item-text-color);-webkit-text-decoration:var(--item-text-decoration);text-decoration:var(--item-text-decoration)}.elementor-toc__body .elementor-toc__list-item-text:hover{color:var(--item-text-hover-color);-webkit-text-decoration:var(--item-text-hover-decoration);text-decoration:var(--item-text-hover-decoration)}.elementor-toc__body .elementor-toc__list-item-text.elementor-item-active{color:var(--item-text-active-color);-webkit-text-decoration:var(--item-text-active-decoration);text-decoration:var(--item-text-active-decoration)}ol.elementor-toc__list-wrapper{counter-reset:item}ol.elementor-toc__list-wrapper .elementor-toc__list-item{counter-increment:item}ol.elementor-toc__list-wrapper .elementor-toc__list-item-text-wrapper:before{content:counters(item,".") ". "}</style>		<div class="elementor-toc__header">
			<div class="elementor-toc__header-title">
				Table of Contents			</div>
					</div>
		<div id="elementor-toc__b9b1c89" class="elementor-toc__body elementor-toc__list-items--collapsible">
			<div class="elementor-toc__spinner-container">
				<i class="elementor-toc__spinner eicon-animation-spin eicon-loading" aria-hidden="true"></i>			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
							</div>
					</div>

	</main>

			<div data-elementor-type="footer" data-elementor-id="52798" class="elementor elementor-52798 elementor-location-footer" data-elementor-post-type="elementor_library">
								<footer class="elementor-section elementor-top-section elementor-element elementor-element-7f0cbc17 footer-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7f0cbc17" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-74986e43" data-id="74986e43" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-9be9bd6 elementor-widget elementor-widget-image" data-id="9be9bd6" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" width="104" height="104" src="https://www.abtasty.com/wp-content/uploads/ab-tasty-badge.svg" class="attachment-thumbnail size-thumbnail wp-image-55356" alt="AB Tasty badge" />															</div>
				</div>
				<div class="elementor-element elementor-element-3c7524ba elementor-align-left elementor-list-item-link-inline elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list" data-id="3c7524ba" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="mailto:hello@abtasty.com">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-unread"></i>						</span>
										<span class="elementor-icon-list-text">hello@abtasty.com</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-pin-location-1"></i>						</span>
										<span class="elementor-icon-list-text">408 Broadway NY 10013, New York, United States</span>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-1a9850a0" data-id="1a9850a0" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-1d0b2200 elementor-widget elementor-widget-heading" data-id="1d0b2200" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Platform</p>		</div>
				</div>
				<div class="elementor-element elementor-element-3e7bb405 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3e7bb405" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/client-side-experiments/">

											<span class="elementor-icon-list-text">Web Experimentation</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/personalization/">

											<span class="elementor-icon-list-text">Personalization</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/feature-experimentation/">

											<span class="elementor-icon-list-text">Feature Experimentation</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/rollouts/">

											<span class="elementor-icon-list-text">Rollouts</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/intelligent-search/">

											<span class="elementor-icon-list-text">Search</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/recommendations/">

											<span class="elementor-icon-list-text">Recommendations</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-5273e026" data-id="5273e026" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-d57ef78 elementor-widget elementor-widget-heading" data-id="d57ef78" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Company</p>		</div>
				</div>
				<div class="elementor-element elementor-element-44622762 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="44622762" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/about-us/">

											<span class="elementor-icon-list-text">About Us</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/corporate-news/">

											<span class="elementor-icon-list-text">Corporate News</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://jobs.lever.co/abtasty">

											<span class="elementor-icon-list-text">Careers</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/clients/">

											<span class="elementor-icon-list-text">Customers</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/life-at-abtasty/">

											<span class="elementor-icon-list-text">Life at AB Tasty</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/magic-makers/">

											<span class="elementor-icon-list-text">Magic Makers</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-3a9d1f86" data-id="3a9d1f86" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-42a2decf elementor-widget elementor-widget-heading" data-id="42a2decf" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Guides & How-Tos</p>		</div>
				</div>
				<div class="elementor-element elementor-element-407e8d87 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="407e8d87" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/conversion-rate-optimization/">

											<span class="elementor-icon-list-text">Conversion Rate Optimization</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/blog/tags/experimentation/">

											<span class="elementor-icon-list-text">Experimentation</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/blog/tags/e-commerce/">

											<span class="elementor-icon-list-text">E-Commerce Optimization</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/blog/tags/landing-page/">

											<span class="elementor-icon-list-text">Landing Page Design</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/blog/tags/psychology/">

											<span class="elementor-icon-list-text">User Psychology</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/blog/tags/ux-design/">

											<span class="elementor-icon-list-text">UX Design</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/blog/topics/website-optimization-ideas/">

											<span class="elementor-icon-list-text">Website Optimization</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-1d173750" data-id="1d173750" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-6539ef28 elementor-widget elementor-widget-heading" data-id="6539ef28" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Useful Links</p>		</div>
				</div>
				<div class="elementor-element elementor-element-283c039c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="283c039c" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/ab-testing/">

											<span class="elementor-icon-list-text">A/B Testing Guide</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/personalization-guide/">

											<span class="elementor-icon-list-text">Personalization Guide</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.flagship.io/feature-flags/">

											<span class="elementor-icon-list-text">Feature Flag Management</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/sample-size-calculator/">

											<span class="elementor-icon-list-text">Sample Size Calculator</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://abtasty.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Client-Side Knowledge Base</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://flagship.zendesk.com/hc/en-us/" target="_blank" rel="noopener noreferrer">

											<span class="elementor-icon-list-text">Server-Side Knowledge Base</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.abtasty.com/contact/">

											<span class="elementor-icon-list-text">Contact Us</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
							</div>
		</footer>
				<footer class="elementor-section elementor-top-section elementor-element elementor-element-5cd936fa elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5cd936fa" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-185be5f4" data-id="185be5f4" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-38ac8627 elementor-icon-list--layout-inline elementor-align-left elementor-mobile-align-left elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="38ac8627" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items elementor-inline-items">
							<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://www.abtasty.com/legal-notices/">

											<span class="elementor-icon-list-text">Legal notices</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://www.abtasty.com/privacy-policy/">

											<span class="elementor-icon-list-text">Privacy policy</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://www.abtasty.com/customer-personal-data-processing/">

											<span class="elementor-icon-list-text">Personal data - Customers</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="#" id="cookie-consent">

											<span class="elementor-icon-list-text">Cookie preferences</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-7a6e1ef4 e-grid-align-left e-grid-align-mobile-left elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="7a6e1ef4" data-element_type="widget" data-widget_type="social-icons.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.18.0 - 08-12-2023 */
.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container{line-height:1;font-size:0}.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid{display:inline-grid}.elementor-widget-social-icons .elementor-grid{grid-column-gap:var(--grid-column-gap,5px);grid-row-gap:var(--grid-row-gap,5px);grid-template-columns:var(--grid-template-columns);justify-content:var(--justify-content,center);justify-items:var(--justify-content,center)}.elementor-icon.elementor-social-icon{font-size:var(--icon-size,25px);line-height:var(--icon-size,25px);width:calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em));height:calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em))}.elementor-social-icon{--e-social-icon-icon-color:#fff;display:inline-flex;background-color:#69727d;align-items:center;justify-content:center;text-align:center;cursor:pointer}.elementor-social-icon i{color:var(--e-social-icon-icon-color)}.elementor-social-icon svg{fill:var(--e-social-icon-icon-color)}.elementor-social-icon:last-child{margin:0}.elementor-social-icon:hover{opacity:.9;color:#fff}.elementor-social-icon-android{background-color:#a4c639}.elementor-social-icon-apple{background-color:#999}.elementor-social-icon-behance{background-color:#1769ff}.elementor-social-icon-bitbucket{background-color:#205081}.elementor-social-icon-codepen{background-color:#000}.elementor-social-icon-delicious{background-color:#39f}.elementor-social-icon-deviantart{background-color:#05cc47}.elementor-social-icon-digg{background-color:#005be2}.elementor-social-icon-dribbble{background-color:#ea4c89}.elementor-social-icon-elementor{background-color:#d30c5c}.elementor-social-icon-envelope{background-color:#ea4335}.elementor-social-icon-facebook,.elementor-social-icon-facebook-f{background-color:#3b5998}.elementor-social-icon-flickr{background-color:#0063dc}.elementor-social-icon-foursquare{background-color:#2d5be3}.elementor-social-icon-free-code-camp,.elementor-social-icon-freecodecamp{background-color:#006400}.elementor-social-icon-github{background-color:#333}.elementor-social-icon-gitlab{background-color:#e24329}.elementor-social-icon-globe{background-color:#69727d}.elementor-social-icon-google-plus,.elementor-social-icon-google-plus-g{background-color:#dd4b39}.elementor-social-icon-houzz{background-color:#7ac142}.elementor-social-icon-instagram{background-color:#262626}.elementor-social-icon-jsfiddle{background-color:#487aa2}.elementor-social-icon-link{background-color:#818a91}.elementor-social-icon-linkedin,.elementor-social-icon-linkedin-in{background-color:#0077b5}.elementor-social-icon-medium{background-color:#00ab6b}.elementor-social-icon-meetup{background-color:#ec1c40}.elementor-social-icon-mixcloud{background-color:#273a4b}.elementor-social-icon-odnoklassniki{background-color:#f4731c}.elementor-social-icon-pinterest{background-color:#bd081c}.elementor-social-icon-product-hunt{background-color:#da552f}.elementor-social-icon-reddit{background-color:#ff4500}.elementor-social-icon-rss{background-color:#f26522}.elementor-social-icon-shopping-cart{background-color:#4caf50}.elementor-social-icon-skype{background-color:#00aff0}.elementor-social-icon-slideshare{background-color:#0077b5}.elementor-social-icon-snapchat{background-color:#fffc00}.elementor-social-icon-soundcloud{background-color:#f80}.elementor-social-icon-spotify{background-color:#2ebd59}.elementor-social-icon-stack-overflow{background-color:#fe7a15}.elementor-social-icon-steam{background-color:#00adee}.elementor-social-icon-stumbleupon{background-color:#eb4924}.elementor-social-icon-telegram{background-color:#2ca5e0}.elementor-social-icon-thumb-tack{background-color:#1aa1d8}.elementor-social-icon-tripadvisor{background-color:#589442}.elementor-social-icon-tumblr{background-color:#35465c}.elementor-social-icon-twitch{background-color:#6441a5}.elementor-social-icon-twitter{background-color:#1da1f2}.elementor-social-icon-viber{background-color:#665cac}.elementor-social-icon-vimeo{background-color:#1ab7ea}.elementor-social-icon-vk{background-color:#45668e}.elementor-social-icon-weibo{background-color:#dd2430}.elementor-social-icon-weixin{background-color:#31a918}.elementor-social-icon-whatsapp{background-color:#25d366}.elementor-social-icon-wordpress{background-color:#21759b}.elementor-social-icon-xing{background-color:#026466}.elementor-social-icon-yelp{background-color:#af0606}.elementor-social-icon-youtube{background-color:#cd201f}.elementor-social-icon-500px{background-color:#0099e5}.elementor-shape-rounded .elementor-icon.elementor-social-icon{border-radius:10%}.elementor-shape-circle .elementor-icon.elementor-social-icon{border-radius:50%}</style>		<div class="elementor-social-icons-wrapper elementor-grid">
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-abtasty-icon-professional-network-linkedin elementor-animation-grow elementor-repeater-item-865911d" href="https://www.linkedin.com/company/ab-tasty" target="_blank" rel="noopener noreferrer">
						<span class="elementor-screen-only">Abtasty-icon-professional-network-linkedin</span>
						<i class="abtastyicon- abtasty-icon-professional-network-linkedin"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-abtasty-icon-social-media-twitter elementor-animation-grow elementor-repeater-item-e1fb2cb" href="https://twitter.com/ABTasty" target="_blank" rel="noopener noreferrer">
						<span class="elementor-screen-only">Abtasty-icon-social-media-twitter</span>
						<i class="abtastyicon- abtasty-icon-social-media-twitter"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-abtasty-icon-social-media-faceboo elementor-animation-grow elementor-repeater-item-0267196" href="https://www.facebook.com/abtasty/" target="_blank" rel="noopener noreferrer">
						<span class="elementor-screen-only">Abtasty-icon-social-media-faceboo</span>
						<i class="abtastyicon- abtasty-icon-social-media-faceboo"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-abtasty-icon-social-instagram elementor-animation-grow elementor-repeater-item-1d9d37d" href="https://www.instagram.com/abtasty/" target="_blank" rel="noopener noreferrer">
						<span class="elementor-screen-only">Abtasty-icon-social-instagram</span>
						<i class="abtastyicon- abtasty-icon-social-instagram"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-spotify elementor-animation-grow elementor-repeater-item-833b778" href="https://open.spotify.com/show/2HcTLKMv7Y4wqaDpZhylAV?si=b2bdebc8bab649d4" target="_blank">
						<span class="elementor-screen-only">Spotify</span>
						<i class="fab fa-spotify"></i>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-abtasty-icon-love-it elementor-animation-grow elementor-repeater-item-f7c0964" href="https://www.abtasty.com/spread-love/" target="_blank" rel="noopener noreferrer" id="link-footer-wall-love">
						<span class="elementor-screen-only">Abtasty-icon-love-it</span>
						<i class="abtastyicon- abtasty-icon-love-it"></i>					</a>
				</span>
					</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</footer>
						</div>
		
					<script type="text/x-template" id="mobile-menu-item-template"><li
	:id="'jet-mobile-menu-item-'+itemDataObject.itemId"
	:class="itemClasses"
>
	<div
		class="jet-mobile-menu__item-inner"
		tabindex="0"
		:aria-label="itemDataObject.name"
        aria-expanded="false"
		v-on:click="itemSubHandler"
		v-on:keyup.enter="itemSubHandler"
	>
		<a
			:class="itemLinkClasses"
			:href="itemDataObject.url"
			:rel="itemDataObject.xfn"
			:title="itemDataObject.attrTitle"
			:target="itemDataObject.target"
		>
			<div class="jet-menu-item-wrapper">
				<div
					class="jet-menu-icon"
					v-if="isIconVisible"
					v-html="itemIconHtml"
				></div>
				<div class="jet-menu-name">
					<span
						class="jet-menu-label"
						v-if="isLabelVisible"
						v-html="itemDataObject.name"
					></span>
					<small
						class="jet-menu-desc"
						v-if="isDescVisible"
						v-html="itemDataObject.description"
					></small>
				</div>
				<div
					class="jet-menu-badge"
					v-if="isBadgeVisible"
				>
					<div class="jet-menu-badge__inner" v-html="itemDataObject.badgeContent"></div>
				</div>
			</div>
		</a>
		<span
			class="jet-dropdown-arrow"
			v-if="isSub && !templateLoadStatus"
			v-html="dropdownIconHtml"
			v-on:click="markerSubHandler"
		>
		</span>
		<div
			class="jet-mobile-menu__template-loader"
			v-if="templateLoadStatus"
		>
			<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="24px" height="25px" viewBox="0 0 128 128" xml:space="preserve">
				<g>
					<linearGradient id="linear-gradient">
						<stop offset="0%" :stop-color="loaderColor" stop-opacity="0"/>
						<stop offset="100%" :stop-color="loaderColor" stop-opacity="1"/>
					</linearGradient>
				<path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z" fill="url(#linear-gradient)" fill-rule="evenodd"/>
				<animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1080ms" repeatCount="indefinite"></animateTransform>
				</g>
			</svg>
		</div>
	</div>

	<transition name="menu-container-expand-animation">
		<mobile-menu-list
			v-if="isDropdownLayout && subDropdownVisible"
			:depth="depth+1"
			:children-object="itemDataObject.children"
		></mobile-menu-list>
	</transition>

</li>
					</script>					<script type="text/x-template" id="mobile-menu-list-template"><div
	class="jet-mobile-menu__list"
	role="navigation"
>
	<ul class="jet-mobile-menu__items">
		<mobile-menu-item
			v-for="(item, index) in childrenObject"
			:key="item.id"
			:item-data-object="item"
			:depth="depth"
		></mobile-menu-item>
	</ul>
</div>
					</script>					<script type="text/x-template" id="mobile-menu-template"><div
	:class="instanceClass"
	v-on:keyup.esc="escapeKeyHandler"
>
	<div
		class="jet-mobile-menu__toggle"
		role="button"
		ref="toggle"
		tabindex="0"
		aria-label="Open/Close Menu"
        aria-expanded="false"
		v-on:click="menuToggle"
		v-on:keyup.enter="menuToggle"
	>
		<div
			class="jet-mobile-menu__template-loader"
			v-if="toggleLoaderVisible"
		>
			<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="24px" height="25px" viewBox="0 0 128 128" xml:space="preserve">
				<g>
					<linearGradient id="linear-gradient">
						<stop offset="0%" :stop-color="loaderColor" stop-opacity="0"/>
						<stop offset="100%" :stop-color="loaderColor" stop-opacity="1"/>
					</linearGradient>
				<path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z" fill="url(#linear-gradient)" fill-rule="evenodd"/>
				<animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1080ms" repeatCount="indefinite"></animateTransform>
				</g>
			</svg>
		</div>

		<div
			class="jet-mobile-menu__toggle-icon"
			v-if="!menuOpen && !toggleLoaderVisible"
			v-html="toggleClosedIcon"
		></div>
		<div
			class="jet-mobile-menu__toggle-icon"
			v-if="menuOpen && !toggleLoaderVisible"
			v-html="toggleOpenedIcon"
		></div>
		<span
			class="jet-mobile-menu__toggle-text"
			v-if="toggleText"
			v-html="toggleText"
		></span>

	</div>

	<transition name="cover-animation">
		<div
			class="jet-mobile-menu-cover"
			v-if="menuContainerVisible && coverVisible"
			v-on:click="closeMenu"
		></div>
	</transition>

	<transition :name="showAnimation">
		<div
			class="jet-mobile-menu__container"
			v-if="menuContainerVisible"
		>
			<div
				class="jet-mobile-menu__container-inner"
			>
				<div
					class="jet-mobile-menu__header-template"
					v-if="headerTemplateVisible"
				>
					<div
						class="jet-mobile-menu__header-template-content"
						ref="header-template-content"
						v-html="headerContent"
					></div>
				</div>

				<div
					class="jet-mobile-menu__controls"
				>
					<div
						class="jet-mobile-menu__breadcrumbs"
						v-if="isBreadcrumbs"
					>
						<div
							class="jet-mobile-menu__breadcrumb"
							v-for="(item, index) in breadcrumbsPathData"
							:key="index"
						>
							<div
								class="breadcrumb-label"
								v-on:click="breadcrumbHandle(index+1)"
								v-html="item"
							></div>
							<div
								class="breadcrumb-divider"
								v-html="breadcrumbIcon"
								v-if="(breadcrumbIcon && index !== breadcrumbsPathData.length-1)"
							></div>
						</div>
					</div>
					<div
						class="jet-mobile-menu__back"
						role="button"
						ref="back"
						tabindex="0"
						aria-label="Close Menu"
                        aria-expanded="false"
						v-if="!isBack && isClose"
						v-html="closeIcon"
						v-on:click="menuToggle"
						v-on:keyup.enter="menuToggle"
					></div>
					<div
						class="jet-mobile-menu__back"
						role="button"
						ref="back"
						tabindex="0"
						aria-label="Back to Prev Items"
                        aria-expanded="false"
						v-if="isBack"
						v-html="backIcon"
						v-on:click="goBack"
						v-on:keyup.enter="goBack"
					></div>
				</div>

				<div
					class="jet-mobile-menu__before-template"
					v-if="beforeTemplateVisible"
				>
					<div
						class="jet-mobile-menu__before-template-content"
						ref="before-template-content"
						v-html="beforeContent"
					></div>
				</div>

				<div
					class="jet-mobile-menu__body"
				>
					<transition :name="animation">
						<mobile-menu-list
							v-if="!templateVisible"
							:key="depth"
							:depth="depth"
							:children-object="itemsList"
						></mobile-menu-list>
						<div
							class="jet-mobile-menu__template"
							ref="template-content"
							v-if="templateVisible"
						>
							<div
								class="jet-mobile-menu__template-content"
								v-html="itemTemplateContent"
							></div>
						</div>
					</transition>
				</div>

				<div
					class="jet-mobile-menu__after-template"
					v-if="afterTemplateVisible"
				>
					<div
						class="jet-mobile-menu__after-template-content"
						ref="after-template-content"
						v-html="afterContent"
					></div>
				</div>

			</div>
		</div>
	</transition>
</div>
					</script>		<div data-elementor-type="popup" data-elementor-id="56340" class="elementor elementor-56340 elementor-location-popup" data-elementor-settings="{&quot;entrance_animation&quot;:&quot;slideInDown&quot;,&quot;entrance_animation_duration&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;prevent_scroll&quot;:&quot;yes&quot;,&quot;avoid_multiple_popups&quot;:&quot;yes&quot;,&quot;prevent_close_on_background_click&quot;:&quot;yes&quot;,&quot;prevent_close_on_esc_key&quot;:&quot;yes&quot;,&quot;a11y_navigation&quot;:&quot;yes&quot;,&quot;triggers&quot;:{&quot;page_load_delay&quot;:40,&quot;page_load&quot;:&quot;yes&quot;},&quot;timing&quot;:{&quot;times_times&quot;:1,&quot;times&quot;:&quot;yes&quot;}}" data-elementor-post-type="elementor_library">
								<section class="elementor-section elementor-top-section elementor-element elementor-element-685ef804 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="685ef804" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-32178c4f elementor-hidden-phone" data-id="32178c4f" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-2b8dd59 elementor-widget elementor-widget-heading" data-id="2b8dd59" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Don't throw away hard-earned traffic.</span>		</div>
				</div>
				<div class="elementor-element elementor-element-3f8c6fdf elementor-widget elementor-widget-heading" data-id="3f8c6fdf" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Make your website work overtime - so you don't have to.</span>		</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-8cfa633 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8cfa633" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-85e28ba" data-id="85e28ba" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-544ed87 elementor-widget elementor-widget-heading" data-id="544ed87" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">+250%</span>		</div>
				</div>
				<div class="elementor-element elementor-element-619be6b elementor-widget elementor-widget-heading" data-id="619be6b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">click-through rate</span>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e67a70f" data-id="e67a70f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-fbbca2c elementor-widget elementor-widget-heading" data-id="fbbca2c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">+19%</span>		</div>
				</div>
				<div class="elementor-element elementor-element-8dc8511 elementor-widget elementor-widget-heading" data-id="8dc8511" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">conversion rate</span>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4fee08a" data-id="4fee08a" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-569e95b elementor-widget elementor-widget-heading" data-id="569e95b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">+5%</span>		</div>
				</div>
				<div class="elementor-element elementor-element-540d779 elementor-widget elementor-widget-heading" data-id="540d779" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">average order value</span>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<div class="elementor-element elementor-element-4328fe78 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4328fe78" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-ab-testing-browsers"></i>						</span>
										<span class="elementor-icon-list-text">Full featured experimentation platform</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-face-id-4"></i>						</span>
										<span class="elementor-icon-list-text">AI-powered personalization</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-settings-toggle-horizontal"></i>						</span>
										<span class="elementor-icon-list-text">Feature toggling and progressive rollout</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-7b4e0a07 elementor-widget-divider--view-line_text elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider" data-id="7b4e0a07" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.18.0 - 08-12-2023 */
.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-bottom:0;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="elementor-divider">
			<span class="elementor-divider-separator">
							<span class="elementor-divider__text elementor-divider__element">
				Trusted by				</span>
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-8d0091 elementor-widget elementor-widget-gallery" data-id="8d0091" data-element_type="widget" data-settings="{&quot;columns&quot;:3,&quot;aspect_ratio&quot;:&quot;21:9&quot;,&quot;columns_mobile&quot;:2,&quot;lazyload&quot;:&quot;yes&quot;,&quot;gallery_layout&quot;:&quot;grid&quot;,&quot;columns_tablet&quot;:2,&quot;gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="gallery.default">
				<div class="elementor-widget-container">
			<style>/*! elementor-pro - v3.18.0 - 06-12-2023 */
.elementor-gallery__container{min-height:1px}.elementor-gallery-item{position:relative;overflow:hidden;display:block;text-decoration:none;border:solid var(--image-border-width) var(--image-border-color);border-radius:var(--image-border-radius)}.elementor-gallery-item__content,.elementor-gallery-item__overlay{height:100%;width:100%;position:absolute;top:0;left:0}.elementor-gallery-item__overlay{mix-blend-mode:var(--overlay-mix-blend-mode);transition-duration:var(--overlay-transition-duration);transition-property:mix-blend-mode,transform,opacity,background-color}.elementor-gallery-item__image.e-gallery-image{transition-duration:var(--image-transition-duration);transition-property:filter,transform}.elementor-gallery-item__content{display:flex;flex-direction:column;justify-content:var(--content-justify-content,center);align-items:center;text-align:var(--content-text-align);padding:var(--content-padding)}.elementor-gallery-item__content>div{transition-duration:var(--content-transition-duration)}.elementor-gallery-item__content.elementor-gallery--sequenced-animation>div:nth-child(2){transition-delay:calc(var(--content-transition-delay) / 3)}.elementor-gallery-item__content.elementor-gallery--sequenced-animation>div:nth-child(3){transition-delay:calc(var(--content-transition-delay) / 3 * 2)}.elementor-gallery-item__content.elementor-gallery--sequenced-animation>div:nth-child(4){transition-delay:calc(var(--content-transition-delay) / 3 * 3)}.elementor-gallery-item__description{color:var(--description-text-color,#fff);width:100%}.elementor-gallery-item__title{color:var(--title-text-color,#fff);font-weight:700;width:100%}.elementor-gallery__titles-container{display:flex;flex-wrap:wrap;justify-content:var(--titles-container-justify-content,center);margin-bottom:20px}.elementor-gallery__titles-container:not(.e--pointer-framed) .elementor-item:after,.elementor-gallery__titles-container:not(.e--pointer-framed) .elementor-item:before{background-color:var(--galleries-pointer-bg-color-hover)}.elementor-gallery__titles-container:not(.e--pointer-framed) .elementor-item.elementor-item-active:after,.elementor-gallery__titles-container:not(.e--pointer-framed) .elementor-item.elementor-item-active:before{background-color:var(--galleries-pointer-bg-color-active)}.elementor-gallery__titles-container.e--pointer-framed .elementor-item:before{border-color:var(--galleries-pointer-bg-color-hover);border-width:var(--galleries-pointer-border-width)}.elementor-gallery__titles-container.e--pointer-framed .elementor-item:after{border-color:var(--galleries-pointer-bg-color-hover)}.elementor-gallery__titles-container.e--pointer-framed .elementor-item.elementor-item-active:after,.elementor-gallery__titles-container.e--pointer-framed .elementor-item.elementor-item-active:before{border-color:var(--galleries-pointer-bg-color-active)}.elementor-gallery__titles-container.e--pointer-framed.e--animation-draw .elementor-item:before{border-left-width:var(--galleries-pointer-border-width);border-bottom-width:var(--galleries-pointer-border-width);border-right-width:0;border-top-width:0}.elementor-gallery__titles-container.e--pointer-framed.e--animation-draw .elementor-item:after{border-left-width:0;border-bottom-width:0;border-right-width:var(--galleries-pointer-border-width);border-top-width:var(--galleries-pointer-border-width)}.elementor-gallery__titles-container.e--pointer-framed.e--animation-corners .elementor-item:before{border-left-width:var(--galleries-pointer-border-width);border-bottom-width:0;border-right-width:0;border-top-width:var(--galleries-pointer-border-width)}.elementor-gallery__titles-container.e--pointer-framed.e--animation-corners .elementor-item:after{border-left-width:0;border-bottom-width:var(--galleries-pointer-border-width);border-right-width:var(--galleries-pointer-border-width);border-top-width:0}.elementor-gallery__titles-container .e--pointer-double-line .elementor-item:after,.elementor-gallery__titles-container .e--pointer-double-line .elementor-item:before,.elementor-gallery__titles-container .e--pointer-overline .elementor-item:before,.elementor-gallery__titles-container .e--pointer-underline .elementor-item:after{height:var(--galleries-pointer-border-width)}.elementor-gallery-title{--space-between:10px;cursor:pointer;color:#6d7882;font-weight:500;position:relative;padding:7px 14px;transition:all .3s}.elementor-gallery-title--active{color:#495157}.elementor-gallery-title:not(:last-child){margin-right:var(--space-between)}.elementor-gallery-item__title+.elementor-gallery-item__description{margin-top:var(--description-margin-top)}.e-gallery-item.elementor-gallery-item{transition-property:all}.e-gallery-item.elementor-animated-content .elementor-animated-item--enter-from-bottom,.e-gallery-item.elementor-animated-content .elementor-animated-item--enter-from-left,.e-gallery-item.elementor-animated-content .elementor-animated-item--enter-from-right,.e-gallery-item.elementor-animated-content .elementor-animated-item--enter-from-top,.e-gallery-item:focus .elementor-gallery__item-overlay-bg,.e-gallery-item:focus .elementor-gallery__item-overlay-content,.e-gallery-item:focus .elementor-gallery__item-overlay-content__description,.e-gallery-item:focus .elementor-gallery__item-overlay-content__title,.e-gallery-item:hover .elementor-gallery__item-overlay-bg,.e-gallery-item:hover .elementor-gallery__item-overlay-content,.e-gallery-item:hover .elementor-gallery__item-overlay-content__description,.e-gallery-item:hover .elementor-gallery__item-overlay-content__title{opacity:1}a.elementor-item.elementor-gallery-title{color:var(--galleries-title-color-normal)}a.elementor-item.elementor-gallery-title.elementor-item-active,a.elementor-item.elementor-gallery-title.highlighted,a.elementor-item.elementor-gallery-title:focus,a.elementor-item.elementor-gallery-title:hover{color:var(--galleries-title-color-hover)}a.elementor-item.elementor-gallery-title.elementor-item-active{color:var(--gallery-title-color-active)}.e-con-inner>.elementor-widget-gallery,.e-con>.elementor-widget-gallery{width:var(--container-widget-width);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="elementor-gallery__container">
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_ashley_homestore.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_sephora.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_calvin_klein.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_allianz.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_usa_today.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_klaviyo.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
					</div>
			</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5996757c" data-id="5996757c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-6c1ec398 elementor-widget elementor-widget-heading" data-id="6c1ec398" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Request a demo</span>		</div>
				</div>
				<div class="elementor-element elementor-element-30bfd34d elementor-widget elementor-widget-html" data-id="30bfd34d" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<iframe src="https://go.abtasty.com/l/140121/2021-02-28/3lbdw9?Language=English&request_type=demo-request" id="demo-pardot-iframe" width="100%" height="520" type="text/html" frameborder="0" allowTransparency="true" style="border: 0" onload="setIframeParameters(this.id)"></iframe>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
						</div>
				<div data-elementor-type="popup" data-elementor-id="56325" class="elementor elementor-56325 elementor-location-popup" data-elementor-settings="{&quot;entrance_animation&quot;:&quot;slideInDown&quot;,&quot;entrance_animation_duration&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;prevent_scroll&quot;:&quot;yes&quot;,&quot;prevent_close_on_background_click&quot;:&quot;yes&quot;,&quot;prevent_close_on_esc_key&quot;:&quot;yes&quot;,&quot;a11y_navigation&quot;:&quot;yes&quot;,&quot;triggers&quot;:[],&quot;timing&quot;:[]}" data-elementor-post-type="elementor_library">
								<section class="elementor-section elementor-top-section elementor-element elementor-element-051d356 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="051d356" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-14f2c40 elementor-hidden-phone" data-id="14f2c40" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-4cbeda2 elementor-widget elementor-widget-heading" data-id="4cbeda2" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Don't throw away hard-earned traffic.</span>		</div>
				</div>
				<div class="elementor-element elementor-element-bf85eac elementor-widget elementor-widget-heading" data-id="bf85eac" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Make your website work overtime - so you don't have to.</span>		</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-12c5ce8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="12c5ce8" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ec3e388" data-id="ec3e388" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-efd22d8 elementor-widget elementor-widget-heading" data-id="efd22d8" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">+250%</span>		</div>
				</div>
				<div class="elementor-element elementor-element-eca3663 elementor-widget elementor-widget-heading" data-id="eca3663" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">click-through rate</span>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a66aac6" data-id="a66aac6" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-a5a979e elementor-widget elementor-widget-heading" data-id="a5a979e" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">+19%</span>		</div>
				</div>
				<div class="elementor-element elementor-element-261ab27 elementor-widget elementor-widget-heading" data-id="261ab27" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">conversion rate</span>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-94e68d2" data-id="94e68d2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c5d9ba4 elementor-widget elementor-widget-heading" data-id="c5d9ba4" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">+5%</span>		</div>
				</div>
				<div class="elementor-element elementor-element-2617039 elementor-widget elementor-widget-heading" data-id="2617039" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">average order value</span>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<div class="elementor-element elementor-element-66eb2a2 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="66eb2a2" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-ab-testing-browsers"></i>						</span>
										<span class="elementor-icon-list-text">Full featured experimentation platform</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-face-id-4"></i>						</span>
										<span class="elementor-icon-list-text">AI-powered personalization</span>
									</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="abtastyicon- abtasty-icon-settings-toggle-horizontal"></i>						</span>
										<span class="elementor-icon-list-text">Feature toggling and progressive rollout</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-9bd9388 elementor-widget-divider--view-line_text elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider" data-id="9bd9388" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
							<span class="elementor-divider__text elementor-divider__element">
				Trusted by				</span>
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-38ad5ea elementor-widget elementor-widget-gallery" data-id="38ad5ea" data-element_type="widget" data-settings="{&quot;columns&quot;:3,&quot;aspect_ratio&quot;:&quot;21:9&quot;,&quot;columns_mobile&quot;:2,&quot;lazyload&quot;:&quot;yes&quot;,&quot;gallery_layout&quot;:&quot;grid&quot;,&quot;columns_tablet&quot;:2,&quot;gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="gallery.default">
				<div class="elementor-widget-container">
					<div class="elementor-gallery__container">
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_loreal.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_sephora.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_calvin_klein.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_allianz.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_usa_today.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
							<div class="e-gallery-item elementor-gallery-item">
					<div class="e-gallery-image elementor-gallery-item__image" data-thumbnail="https://www.abtasty.com/wp-content/uploads/logo_slider_klaviyo.svg" data-width="210" data-height="90" aria-label="" role="img" ></div>
														</div>
					</div>
			</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-257ea7c" data-id="257ea7c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-e62a136 elementor-widget elementor-widget-heading" data-id="e62a136" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Request a demo</span>		</div>
				</div>
				<div class="elementor-element elementor-element-bbeefaf elementor-widget elementor-widget-html" data-id="bbeefaf" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<iframe src="https://go.abtasty.com/l/140121/2021-02-28/3lbdw9?Language=English&request_type=demo-request" id="demo-pardot-iframe" width="100%" height="520" type="text/html" frameborder="0" allowTransparency="true" style="border: 0" onload="setIframeParameters(this.id)"></iframe>
<script>
  iFrameResize({ log: false, checkOrigin: false }, '#demo-pardot-iframe')
</script>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
						</div>
		<link rel='stylesheet' id='elementor-post-52819-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-52819.css?ver=1706188562' media='all' />
<link rel='stylesheet' id='elementor-post-120606-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-120606.css?ver=1706188562' media='all' />
<link rel='stylesheet' id='elementor-post-53163-css' href='https://www.abtasty.com/wp-content/uploads/elementor/css/post-53163.css?ver=1706188562' media='all' />
<link rel='stylesheet' id='elementor-gallery-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/e-gallery/css/e-gallery.min.css?ver=1.2.0' media='all' />
<link rel='stylesheet' id='e-animations-css' href='https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.18.2' media='all' />
<script src="https://www.abtasty.com/wp-content/plugins/dynamicconditions/Public/js/dynamic-conditions-public.js?ver=1.6.2" id="dynamic-conditions-js"></script>
<script id="geoip-detect-js-js-extra">
var geoip_detect = {"options":{"ajaxurl":"https:\/\/www.abtasty.com\/wp-admin\/admin-ajax.php","default_locales":["en","en"],"do_body_classes":false,"do_shortcodes":false,"cookie_name":"geoip-detect-result","cookie_duration_in_days":1}};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/geoip-detect/js/dist/frontend_full.js?ver=5.3.1" id="geoip-detect-js-js"></script>
<script id="toc-front-js-extra">
var tocplus = {"smooth_scroll":"1","smooth_scroll_offset":"150"};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/table-of-contents-plus/front.min.js?ver=2309" id="toc-front-js"></script>
<script id="ppress-frontend-script-js-extra">
var pp_ajax_form = {"ajaxurl":"https:\/\/www.abtasty.com\/wp-admin\/admin-ajax.php","confirm_delete":"Are you sure?","deleting_text":"Deleting...","deleting_error":"An error occurred. Please try again.","nonce":"fdbeb29388","disable_ajax_form":"false","is_checkout":"0","is_checkout_tax_enabled":"0"};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/wp-user-avatar/assets/js/frontend.min.js?ver=4.14.0" id="ppress-frontend-script-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0" id="regenerator-runtime-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1" id="wp-hooks-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/jet-menu/assets/public/lib/vue/vue.min.js?ver=2.6.11" id="jet-vue-js"></script>
<script id="jet-menu-public-scripts-js-extra">
var jetMenuPublicSettings = {"version":"2.4.2","ajaxUrl":"https:\/\/www.abtasty.com\/wp-admin\/admin-ajax.php","isMobile":"false","getElementorTemplateApiUrl":"https:\/\/www.abtasty.com\/wp-json\/jet-menu-api\/v2\/get-elementor-template-content","getBlocksTemplateApiUrl":"https:\/\/www.abtasty.com\/wp-json\/jet-menu-api\/v2\/get-blocks-template-content","menuItemsApiUrl":"https:\/\/www.abtasty.com\/wp-json\/jet-menu-api\/v2\/get-menu-items","restNonce":"b0bbe77229","devMode":"false","wpmlLanguageCode":"en","menuSettings":{"jetMenuRollUp":"false","jetMenuMouseleaveDelay":"100","jetMenuMegaWidthType":"selector","jetMenuMegaWidthSelector":"#header .elementor-container","jetMenuMegaOpenSubType":"hover","jetMenuMegaAjax":"false"}};
var CxCollectedCSS = {"type":"text\/css","title":"cx-collected-dynamic-style","css":".jet-menu-item-52810 > .jet-sub-mega-menu {width:900px !important;; }.jet-menu-item-52810 > .jet-custom-nav__mega-sub {width:900px !important;; }.jet-menu-item-52810 > .jet-mega-menu-mega-container {width:900px !important;; }.jet-menu-item-76595 > .jet-sub-mega-menu {width:700px !important;; }.jet-menu-item-76595 > .jet-custom-nav__mega-sub {width:700px !important;; }.jet-menu-item-76595 > .jet-mega-menu-mega-container {width:700px !important;; }.jet-menu-item-52815 > .jet-sub-mega-menu {width:500px !important;; }.jet-menu-item-52815 > .jet-custom-nav__mega-sub {width:500px !important;; }.jet-menu-item-52815 > .jet-mega-menu-mega-container {width:500px !important;; }.jet-menu ul.jet-sub-menu {border-style:solid; border-top-width:1px; border-right-width:1px; border-bottom-width:1px; border-left-width:1px; border-color:rgba(226,226,226,1); min-width:200px; margin-top:14px; border-top-left-radius:4px; border-top-right-radius:4px; border-bottom-right-radius:4px; border-bottom-left-radius:4px; }.jet-menu div.jet-sub-mega-menu {border-style:solid; border-top-width:1px; border-right-width:1px; border-bottom-width:1px; border-left-width:1px; border-color:#e2e2e2; margin-top:14px; border-top-left-radius:4px; border-top-right-radius:4px; border-bottom-right-radius:4px; border-bottom-left-radius:4px; }.jet-menu .jet-menu-item .top-level-link .jet-menu-icon {align-self:center; order:-1; }.jet-menu .jet-menu-item .sub-level-link .jet-menu-icon {align-self:center; order:-1; }.jet-menu .jet-menu-item .top-level-link .jet-menu-badge {flex:0 0 100%; width:0; order:-2; text-align:right; }.jet-menu .jet-menu-item .sub-level-link .jet-menu-badge {flex:0 0 100%; width:0; order:-2; text-align:right; }.jet-menu .jet-menu-item .top-level-link .jet-dropdown-arrow {align-self:center; order:2; }.jet-menu .jet-menu-item .sub-level-link .jet-dropdown-arrow {align-self:center; order:2; margin-left:auto !important; }.jet-menu  {justify-content:flex-end !important; }.jet-mobile-menu-single .jet-mobile-menu__toggle {color:#ffffff; background-color:#217981; }.jet-mobile-menu-single .jet-mobile-menu-cover {background-color:rgba(255,255,255,0); }.jet-mobile-menu-single .jet-menu-icon {-webkit-align-self:center; align-self:center; }.jet-mobile-menu-single .jet-menu-badge {-webkit-align-self:flex-start; align-self:flex-start; }"};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/jet-menu/assets/public/js/legacy/jet-menu-public-scripts.js?ver=2.4.2" id="jet-menu-public-scripts-js"></script>
<script id="jet-menu-public-scripts-js-after">
function CxCSSCollector(){"use strict";var t,e=window.CxCollectedCSS;void 0!==e&&((t=document.createElement("style")).setAttribute("title",e.title),t.setAttribute("type",e.type),t.textContent=e.css,document.head.appendChild(t))}CxCSSCollector();
</script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/e-gallery/js/e-gallery.min.js?ver=1.2.0" id="elementor-gallery-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.18.2" id="elementor-webpack-runtime-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.18.2" id="elementor-frontend-modules-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2" id="elementor-waypoints-js"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.18.2","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"additional_custom_breakpoints":true,"container":true,"theme_builder_v2":true,"block_editor_assets_optimize":true,"landing-pages":true,"nested-elements":true,"e_image_loading_optimization":true,"e_global_styleguide":true,"page-transitions":true,"notes":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/www.abtasty.com\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper-container","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":87072,"title":"The%20Complete%20Guide%20to%20Conversion%20Rate%20Optimization","excerpt":"","featuredImage":"https:\/\/www.abtasty.com\/wp-content\/uploads\/ab-testing-start-guide-1024x576.jpg"}};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.18.2" id="elementor-frontend-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/ele-custom-skin-pro/assets/js/ecspro.js?ver=3.2.4" id="ecspro-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.18.1" id="elementor-pro-webpack-runtime-js"></script>
<script src="https://www.abtasty.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script id="elementor-pro-frontend-js-before">
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/www.abtasty.com\/wp-admin\/admin-ajax.php","nonce":"dfddb9a2a0","urls":{"assets":"https:\/\/www.abtasty.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/www.abtasty.com\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/www.abtasty.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
</script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.18.1" id="elementor-pro-frontend-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.18.1" id="pro-elements-handlers-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/jet-menu/includes/elementor/assets/public/js/legacy/widgets-scripts.js?ver=2.4.2" id="jet-menu-elementor-widgets-scripts-js"></script>
<script src="https://www.abtasty.com/wp-content/plugins/elementor-pro/assets/lib/sticky/jquery.sticky.min.js?ver=3.18.1" id="e-sticky-js"></script>
<script>
(function() {
				var expirationDate = new Date();
				expirationDate.setTime( expirationDate.getTime() + 31536000 * 1000 );
				document.cookie = "pll_language=en; expires=" + expirationDate.toUTCString() + "; path=/; secure; SameSite=Lax";
			}());

</script>
<script>
function b2a(a){var b,c=0,l=0,f="",g=[];if(!a)return a;do{var e=a.charCodeAt(c++);var h=a.charCodeAt(c++);var k=a.charCodeAt(c++);var d=e<<16|h<<8|k;e=63&d>>18;h=63&d>>12;k=63&d>>6;d&=63;g[l++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d)}while(c<
a.length);return f=g.join(""),b=a.length%3,(b?f.slice(0,b-3):f)+"===".slice(b||3)}function a2b(a){var b,c,l,f={},g=0,e=0,h="",k=String.fromCharCode,d=a.length;for(b=0;64>b;b++)f["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)]=b;for(c=0;d>c;c++)for(b=f[a.charAt(c)],g=(g<<6)+b,e+=6;8<=e;)((l=255&g>>>(e-=8))||d-2>c)&&(h+=k(l));return h}b64e=function(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,a){return String.fromCharCode("0x"+a)}))};
b64d=function(a){return decodeURIComponent(atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))};
/* <![CDATA[ */
ai_front = {"insertion_before":"BEFORE","insertion_after":"AFTER","insertion_prepend":"PREPEND CONTENT","insertion_append":"APPEND CONTENT","insertion_replace_content":"REPLACE CONTENT","insertion_replace_element":"REPLACE ELEMENT","visible":"VISIBLE","hidden":"HIDDEN","fallback":"FALLBACK","automatically_placed":"Automatically placed by AdSense Auto ads code","cancel":"Cancel","use":"Use","add":"Add","parent":"Parent","cancel_element_selection":"Cancel element selection","select_parent_element":"Select parent element","css_selector":"CSS selector","use_current_selector":"Use current selector","element":"ELEMENT","path":"PATH","selector":"SELECTOR"};
/* ]]> */
var ai_cookie_js=!0,ai_block_class_def="code-block";
/*
 JavaScript Cookie v2.2.0
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
*/
"undefined"!==typeof ai_cookie_js&&(function(a){if("function"===typeof define&&define.amd){define(a);var c=!0}"object"===typeof exports&&(module.exports=a(),c=!0);if(!c){var d=window.Cookies,b=window.Cookies=a();b.noConflict=function(){window.Cookies=d;return b}}}(function(){function a(){for(var d=0,b={};d<arguments.length;d++){var f=arguments[d],e;for(e in f)b[e]=f[e]}return b}function c(d){function b(){}function f(h,k,g){if("undefined"!==typeof document){g=a({path:"/",sameSite:"Lax"},b.defaults,
g);"number"===typeof g.expires&&(g.expires=new Date(1*new Date+864E5*g.expires));g.expires=g.expires?g.expires.toUTCString():"";try{var l=JSON.stringify(k);/^[\{\[]/.test(l)&&(k=l)}catch(p){}k=d.write?d.write(k,h):encodeURIComponent(String(k)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);h=encodeURIComponent(String(h)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);l="";for(var n in g)g[n]&&(l+="; "+n,!0!==g[n]&&(l+="="+
g[n].split(";")[0]));return document.cookie=h+"="+k+l}}function e(h,k){if("undefined"!==typeof document){for(var g={},l=document.cookie?document.cookie.split("; "):[],n=0;n<l.length;n++){var p=l[n].split("="),m=p.slice(1).join("=");k||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var q=p[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);m=(d.read||d)(m,q)||m.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(k)try{m=JSON.parse(m)}catch(r){}g[q]=m;if(h===q)break}catch(r){}}return h?g[h]:g}}b.set=f;b.get=
function(h){return e(h,!1)};b.getJSON=function(h){return e(h,!0)};b.remove=function(h,k){f(h,"",a(k,{expires:-1}))};b.defaults={};b.withConverter=c;return b}return c(function(){})}),AiCookies=Cookies.noConflict(),ai_check_block=function(a){if(null==a)return!0;var c=AiCookies.getJSON("aiBLOCKS");ai_debug_cookie_status="";null==c&&(c={});"undefined"!==typeof ai_delay_showing_pageviews&&(c.hasOwnProperty(a)||(c[a]={}),c[a].hasOwnProperty("d")||(c[a].d=ai_delay_showing_pageviews));if(c.hasOwnProperty(a)){for(var d in c[a]){if("x"==
d){var b="",f=document.querySelectorAll('span[data-ai-block="'+a+'"]')[0];"aiHash"in f.dataset&&(b=f.dataset.aiHash);f="";c[a].hasOwnProperty("h")&&(f=c[a].h);var e=new Date;e=c[a][d]-Math.round(e.getTime()/1E3);if(0<e&&f==b)return ai_debug_cookie_status=a="closed for "+e+" s = "+Math.round(1E4*e/3600/24)/1E4+" days",!1;ai_set_cookie(a,"x","");c[a].hasOwnProperty("i")||c[a].hasOwnProperty("c")||ai_set_cookie(a,"h","")}else if("d"==d){if(0!=c[a][d])return ai_debug_cookie_status=a="delayed for "+c[a][d]+
" pageviews",!1}else if("i"==d){b="";f=document.querySelectorAll('span[data-ai-block="'+a+'"]')[0];"aiHash"in f.dataset&&(b=f.dataset.aiHash);f="";c[a].hasOwnProperty("h")&&(f=c[a].h);if(0==c[a][d]&&f==b)return ai_debug_cookie_status=a="max impressions reached",!1;if(0>c[a][d]&&f==b){e=new Date;e=-c[a][d]-Math.round(e.getTime()/1E3);if(0<e)return ai_debug_cookie_status=a="max imp. reached ("+Math.round(1E4*e/24/3600)/1E4+" days = "+e+" s)",!1;ai_set_cookie(a,"i","");c[a].hasOwnProperty("c")||c[a].hasOwnProperty("x")||
ai_set_cookie(a,"h","")}}if("ipt"==d&&0==c[a][d]&&(e=new Date,b=Math.round(e.getTime()/1E3),e=c[a].it-b,0<e))return ai_debug_cookie_status=a="max imp. per time reached ("+Math.round(1E4*e/24/3600)/1E4+" days = "+e+" s)",!1;if("c"==d){b="";f=document.querySelectorAll('span[data-ai-block="'+a+'"]')[0];"aiHash"in f.dataset&&(b=f.dataset.aiHash);f="";c[a].hasOwnProperty("h")&&(f=c[a].h);if(0==c[a][d]&&f==b)return ai_debug_cookie_status=a="max clicks reached",!1;if(0>c[a][d]&&f==b){e=new Date;e=-c[a][d]-
Math.round(e.getTime()/1E3);if(0<e)return ai_debug_cookie_status=a="max clicks reached ("+Math.round(1E4*e/24/3600)/1E4+" days = "+e+" s)",!1;ai_set_cookie(a,"c","");c[a].hasOwnProperty("i")||c[a].hasOwnProperty("x")||ai_set_cookie(a,"h","")}}if("cpt"==d&&0==c[a][d]&&(e=new Date,b=Math.round(e.getTime()/1E3),e=c[a].ct-b,0<e))return ai_debug_cookie_status=a="max clicks per time reached ("+Math.round(1E4*e/24/3600)/1E4+" days = "+e+" s)",!1}if(c.hasOwnProperty("G")&&c.G.hasOwnProperty("cpt")&&0==c.G.cpt&&
(e=new Date,b=Math.round(e.getTime()/1E3),e=c.G.ct-b,0<e))return ai_debug_cookie_status=a="max global clicks per time reached ("+Math.round(1E4*e/24/3600)/1E4+" days = "+e+" s)",!1}ai_debug_cookie_status="OK";return!0},ai_check_and_insert_block=function(a,c){if(null==a)return!0;var d=document.getElementsByClassName(c);if(d.length){d=d[0];var b=d.closest("."+ai_block_class_def),f=ai_check_block(a);!f&&0!=parseInt(d.getAttribute("limits-fallback"))&&d.hasAttribute("data-fallback-code")&&(d.setAttribute("data-code",
d.getAttribute("data-fallback-code")),null!=b&&b.hasAttribute("data-ai")&&d.hasAttribute("fallback-tracking")&&d.hasAttribute("fallback_level")&&b.setAttribute("data-ai-"+d.getAttribute("fallback_level"),d.getAttribute("fallback-tracking")),f=!0);d.removeAttribute("data-selector");if(f)ai_insert_code(d),b&&(f=b.querySelectorAll(".ai-debug-block"),f.length&&(b.classList.remove("ai-list-block"),b.classList.remove("ai-list-block-ip"),b.classList.remove("ai-list-block-filter"),b.style.visibility="",b.classList.contains("ai-remove-position")&&
(b.style.position="")));else{f=d.closest("div[data-ai]");if(null!=f&&"undefined"!=typeof f.getAttribute("data-ai")){var e=JSON.parse(b64d(f.getAttribute("data-ai")));"undefined"!==typeof e&&e.constructor===Array&&(e[1]="",f.setAttribute("data-ai",b64e(JSON.stringify(e))))}b&&(f=b.querySelectorAll(".ai-debug-block"),f.length&&(b.classList.remove("ai-list-block"),b.classList.remove("ai-list-block-ip"),b.classList.remove("ai-list-block-filter"),b.style.visibility="",b.classList.contains("ai-remove-position")&&
(b.style.position="")))}d.classList.remove(c)}d=document.querySelectorAll("."+c+"-dbg");b=0;for(f=d.length;b<f;b++)e=d[b],e.querySelector(".ai-status").textContent=ai_debug_cookie_status,e.querySelector(".ai-cookie-data").textContent=ai_get_cookie_text(a),e.classList.remove(c+"-dbg")},ai_load_cookie=function(){var a=AiCookies.getJSON("aiBLOCKS");null==a&&(a={});return a},ai_set_cookie=function(a,c,d){var b=ai_load_cookie();if(""===d){if(b.hasOwnProperty(a)){delete b[a][c];a:{c=b[a];for(f in c)if(c.hasOwnProperty(f)){var f=
!1;break a}f=!0}f&&delete b[a]}}else b.hasOwnProperty(a)||(b[a]={}),b[a][c]=d;0===Object.keys(b).length&&b.constructor===Object?AiCookies.remove("aiBLOCKS"):AiCookies.set("aiBLOCKS",b,{expires:365,path:"/"});return b},ai_get_cookie_text=function(a){var c=AiCookies.getJSON("aiBLOCKS");null==c&&(c={});var d="";c.hasOwnProperty("G")&&(d="G["+JSON.stringify(c.G).replace(/"/g,"").replace("{","").replace("}","")+"] ");var b="";c.hasOwnProperty(a)&&(b=JSON.stringify(c[a]).replace(/"/g,"").replace("{","").replace("}",
""));return d+b});
var ai_internal_tracking=0,ai_external_tracking=1,ai_external_tracking_category="Ad Inserter Pro",ai_external_tracking_action="[EVENT]",ai_external_tracking_label="[BLOCK_NAME] / [BLOCK_COUNTER]",ai_external_tracking_username="",ai_track_pageviews=1,ai_advanced_click_detection=0,ai_viewport_widths=[980,768,0],ai_viewport_indexes=[1,2,3],ai_viewport_names_string="WyJEZXNrdG9wIiwiVGFibGV0IiwiUGhvbmUiXQ==",ai_data_id="2d31a225e6",
ai_ajax_url="https://www.abtasty.com/wp-admin/admin-ajax.php",ai_debug_tracking=0,ai_adb_attribute='ZGF0YS1kYXRhLW1hc2s=';
if("undefined"!==typeof ai_internal_tracking){ai_viewport_names=JSON.parse(b64d(ai_viewport_names_string));function F(k,l){return(new RegExp("^"+l.split("*").map(r=>r.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")).join(".*")+"$")).test(k)}function I(k,l,r,x){if(x){const B=y=>{y.target&&y.target.matches(x)&&r(y)};k.addEventListener(l,B);return B}k.addEventListener(l,r);return r}installIframeTracker=function(k,l){"function"==typeof k&&(k={blurCallback:k});if(null===k||!1===k)ai_iframeTracker.untrack(l);
else if("object"==typeof k)ai_iframeTracker.track(l,k);else throw Error("Wrong handler type (must be an object, or null|false to untrack)");return this};var ai_mouseoverHander=function(k,l){l.data={handler:k};ai_iframeTracker.mouseoverListener(l)},ai_mouseoutHander=function(k,l){l.data={handler:k};ai_iframeTracker.mouseoutListener(l)};ai_iframeTracker={focusRetriever:null,focusRetrieved:!1,handlersList:[],isIE8AndOlder:!1,init:function(){try{9>navigator.userAgent.match(RegExp("(msie) ([\\w.]+)","i"))[2]&&
(this.isIE8AndOlder=!0)}catch(l){}window.focus();window.addEventListener("blur",l=>{ai_iframeTracker.windowLoseFocus(l)});var k=document.createElement("div");k.style="position:fixed; top:0; left:0; overflow:hidden;";k.innerHTML='<input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /><label for="focus_retriever">&nbsp;</label>';document.querySelector("body").append(k);this.focusRetriever=document.querySelector("#focus_retriever");this.focusRetrieved=
!1;if(this.isIE8AndOlder){this.focusRetriever.blur(function(l){l.stopPropagation();l.preventDefault();ai_iframeTracker.windowLoseFocus(l)});document.querySelector("body").addEventListener("click",l=>{window.focus()});document.querySelector("form").addEventListener("click",l=>{l.stopPropagation()});try{I(document.querySelector("body"),"click",l=>{l.stopPropagation()},"form")}catch(l){console.log("[iframeTracker] error (exception: "+l.message+")")}}},track:function(k,l){l.target=k;ai_iframeTracker.handlersList.push(l);
k.addEventListener("mouseover",ai_mouseoverHander.bind(event,l),!1);k.addEventListener("mouseout",ai_mouseoutHander.bind(event,l),!1)},untrack:function(k){if("function"!=typeof Array.prototype.filter)console.log("Your browser doesn't support Array filter, untrack disabled");else{k.forEach((B,y)=>{B.removeEventListener("mouseover",ai_mouseoverHander,!1);B.removeEventListener("mouseout",ai_mouseoutHander,!1)});var l=function(B){return null===B?!1:!0},r;for(r in this.handlersList){for(var x in this.handlersList[r].target)-1!==
$.inArray(this.handlersList[r].target[x],k)&&(this.handlersList[r].target[x]=null);this.handlersList[r].target=this.handlersList[r].target.filter(l);0===this.handlersList[r].target.length&&(this.handlersList[r]=null)}this.handlersList=this.handlersList.filter(l)}},mouseoverListener:function(k){k.data.handler.over=!0;ai_iframeTracker.retrieveFocus();try{k.data.handler.overCallback(k.data.handler.target,k)}catch(l){}},mouseoutListener:function(k){k.data.handler.over=!1;ai_iframeTracker.retrieveFocus();
try{k.data.handler.outCallback(k.data.handler.target,k)}catch(l){}},retrieveFocus:function(){if(document.activeElement&&"IFRAME"===document.activeElement.tagName){var k=!0;if(document.activeElement.hasAttribute("id")&&"undefined"!==typeof ai_ignore_iframe_ids&&ai_ignore_iframe_ids.constructor===Array){var l=document.activeElement.id;ai_ignore_iframe_ids.forEach(function(x){F(l,x)&&(k=!1)})}if(k&&document.activeElement.hasAttribute("class")&&"undefined"!==typeof ai_ignore_iframe_classes&&ai_ignore_iframe_classes.constructor===
Array){var r=document.activeElement.className;ai_ignore_iframe_classes.forEach(function(x){F(r,x)&&(k=!1)})}k&&(ai_iframeTracker.focusRetriever.focus(),ai_iframeTracker.focusRetrieved=!0)}},windowLoseFocus:function(k){for(var l in this.handlersList)if(!0===this.handlersList[l].over)try{this.handlersList[l].blurCallback(k)}catch(r){}}};function G(k){"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?k():document.addEventListener("DOMContentLoaded",
k)}G(function(){ai_iframeTracker.init()});ai_tracking_finished=!1;G(function(){function k(b,m,n,f,d,a,c){b=b.replace("[EVENT]",m);b=b.replace("[BLOCK_NUMBER]",n);b=b.replace("[BLOCK_NAME]",f);b=b.replace("[BLOCK_COUNTER]",d);b=b.replace("[VERSION_NUMBER]",a);b=b.replace("[VERSION_NAME]",c);b=b.replace("[BLOCK_VERSION_NUMBER]",n+(0==a?"":" - "+a));b=b.replace("[BLOCK_VERSION_NAME]",f+(""==c?"":" - "+c));return b=b.replace("[WP_USERNAME]",ai_external_tracking_username)}function l(b,m,n,f,d,a,c){var h=
k(ai_external_tracking_category,b,m,n,f,d,a),g=k(ai_external_tracking_action,b,m,n,f,d,a),q=k(ai_external_tracking_label,b,m,n,f,d,a);if("function"!=typeof ai_external_tracking_event||0!=ai_external_tracking_event({event:b,block:m,block_name:n,block_counter:f,version:d,version_name:a},h,g,q,c))"function"==typeof window.ga&&(b="send","string"==typeof ai_ga_tracker_name?b=ai_ga_tracker_name+"."+b:(m=ga.getAll(),0!=m.length&&(m=m[0].get("name"),"t0"!=m&&(b=m+"."+b))),ga(b,"event",{eventCategory:h,eventAction:g,
eventLabel:q,nonInteraction:c})),"function"==typeof window.gtag&&gtag("event","impression",{event_category:h,event_action:g,event_label:q,non_interaction:c}),"function"==typeof window.__gaTracker&&__gaTracker("send","event",{eventCategory:h,eventAction:g,eventLabel:q,nonInteraction:c}),"object"==typeof _gaq&&_gaq.push(["_trackEvent",h,g,q,void 0,c]),"object"==typeof _paq&&_paq.push(["trackEvent",h,g,q])}function r(b,m){var n=b[0],f=b[1];if(Number.isInteger(f))if("undefined"==typeof ai_check_data&&
"undefined"==typeof ai_check_data_timeout)ai_check_data_timeout=!0,setTimeout(function(){r(b,m)},2500);else{ai_cookie=ai_load_cookie();for(var d in ai_cookie)if(parseInt(n)==parseInt(d))for(var a in ai_cookie[d])if("c"==a){var c=ai_cookie[d][a];if(0<c)if(ai_set_cookie(d,"c",c-1),1==c){c=document.querySelector('span[data-ai-block="'+n+'"]').dataset.aiCfpTime;var h=new Date;h=Math.round(h.getTime()/1E3);var g=h+604800;ai_set_cookie(d,"c",-g);setTimeout(function(){document.querySelectorAll('span[data-ai-block="'+
n+'"]').forEach((e,p)=>{(e=e.closest("div[data-ai]"))&&e.remove()})},50)}else ai_set_cookie(d,"c",c-1)}else"cpt"==a&&(c=ai_cookie[d][a],0<c?(ai_set_cookie(d,"cpt",c-1),1==c&&(c=document.querySelector('span[data-ai-block="'+n+'"]').dataset.aiCfpTime,h=new Date,h=Math.round(h.getTime()/1E3),g=ai_cookie[d].ct,ai_set_cookie(d,"x",g),setTimeout(function(){document.querySelectorAll('span[data-ai-block="'+n+'"]').forEach((e,p)=>{(e=e.closest("div[data-ai]"))&&e.remove()})},75),"undefined"!=typeof c&&(g=
h+86400*c,ai_set_cookie(n,"x",g),document.querySelectorAll("span.ai-cfp").forEach((e,p)=>{p=e.dataset.aiBlock;setTimeout(function(){var v=e.closest("div[data-ai]");v&&v.remove()},50);ai_set_cookie(p,"x",g)})))):ai_check_data.hasOwnProperty(d)&&ai_check_data[d].hasOwnProperty("cpt")&&ai_check_data[d].hasOwnProperty("ct")?ai_cookie.hasOwnProperty(d)&&ai_cookie[d].hasOwnProperty("ct")&&(h=new Date,c=ai_cookie[d].ct-Math.round(h.getTime()/1E3),0>=c&&(h=Math.round(h.getTime()/1E3),ai_set_cookie(d,"cpt",
ai_check_data[d].cpt-1),ai_set_cookie(d,"ct",Math.round(h+86400*ai_check_data[d].ct)))):(ai_cookie.hasOwnProperty(d)&&ai_cookie[d].hasOwnProperty("cpt")&&ai_set_cookie(d,"cpt",""),ai_cookie.hasOwnProperty(d)&&ai_cookie[d].hasOwnProperty("ct")&&ai_set_cookie(d,"ct","")));ai_cookie.hasOwnProperty("G")&&ai_cookie.G.hasOwnProperty("cpt")&&(c=ai_cookie.G.cpt,0<c?(ai_set_cookie("G","cpt",c-1),1==c&&(c=document.querySelector('span[data-ai-block="'+n+'"]').dataset.aiCfpTime,h=new Date,h=Math.round(h.getTime()/
1E3),g=ai_cookie.G.ct,ai_set_cookie(n,"x",g),setTimeout(function(){document.querySelectorAll('span[data-ai-block="'+n+'"]').forEach((e,p)=>{(e=e.closest("div[data-ai]"))&&e.remove()})},75),"undefined"!=typeof c&&(g=h+86400*c,ai_set_cookie(n,"x",g),document.querySelectorAll("span.ai-cfp").forEach((e,p)=>{p=e.dataset.aiBlock;setTimeout(function(){e.closest("div[data-ai]").remove()},50);ai_set_cookie(p,"x",g)})))):ai_check_data.hasOwnProperty("G")&&ai_check_data.G.hasOwnProperty("cpt")&&ai_check_data.G.hasOwnProperty("ct")?
ai_cookie.hasOwnProperty("G")&&ai_cookie.G.hasOwnProperty("ct")&&(h=new Date,c=ai_cookie.G.ct-Math.round(h.getTime()/1E3),0>=c&&(h=Math.round(h.getTime()/1E3),ai_set_cookie("G","cpt",ai_check_data.G.cpt-1),ai_set_cookie("G","ct",Math.round(h+86400*ai_check_data.G.ct)))):(ai_cookie.hasOwnProperty("G")&&ai_cookie.G.hasOwnProperty("cpt")&&ai_set_cookie("G","cpt",""),ai_cookie.hasOwnProperty("G")&&ai_cookie.G.hasOwnProperty("ct")&&ai_set_cookie("G","ct","")));if(ai_internal_tracking&&"undefined"===typeof ai_internal_tracking_no_clicks){d=
{action:"ai_ajax",ai_check:ai_data_id,click:n,version:f,type:m};var q=[],u;for(u in d)a=encodeURIComponent(u),c=encodeURIComponent(d[u]),q.push(a+"="+c);q=q.join("&");(async function(){return await (await fetch(ai_ajax_url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:q})).text()})().then(e=>{e=e.trim();""!=e&&(e=JSON.parse(e),"undefined"!=typeof e["#"]&&e["#"]==n&&(ai_cookie=ai_load_cookie(),e=Math.round((new Date).getTime()/1E3)+43200,ai_cookie.hasOwnProperty(n)&&
ai_cookie[n].hasOwnProperty("x")||ai_set_cookie(n,"x",e),setTimeout(function(){document.querySelectorAll('span[data-ai-block="'+n+'"]').forEach((p,v)=>{(p=p.closest("div[data-ai]"))&&p.remove()})},50)))})}if(ai_external_tracking&&"undefined"===typeof ai_external_tracking_no_clicks){var t=b[2],w=b[3];l("click",n,t,b[4],f,w,!1)}"function"==typeof ai_click_action&&ai_click_action(n,t,f,w)}}function x(){ai_check_data={};if("undefined"==typeof ai_iframe){ai_cookie=ai_load_cookie();document.querySelectorAll(".ai-check-block").forEach((f,
d)=>{var a=f.dataset.aiBlock,c=f.dataset.aiDelayPv,h=f.dataset.aiEveryPv,g=f.dataset.aiHash,q=f.dataset.aiMaxImp,u=f.dataset.aiLimitImpPerTime,t=f.dataset.aiLimitImpTime,w=f.dataset.aiMaxClicks,e=f.dataset.aiLimitClicksPerTime,p=f.dataset.aiLimitClicksTime;d=f.dataset.aiGlobalLimitClicksPerTime;f=f.dataset.aiGlobalLimitClicksTime;if("undefined"!=typeof c&&0<c){ai_check_data.hasOwnProperty(a)||(ai_check_data[a]={});ai_check_data[a].d=c;var v="";ai_cookie.hasOwnProperty(a)&&ai_cookie[a].hasOwnProperty("d")&&
(v=ai_cookie[a].d);""===v&&ai_set_cookie(a,"d",c-1)}"undefined"!=typeof h&&2<=h&&(ai_check_data.hasOwnProperty(a)||(ai_check_data[a]={}),"undefined"!==typeof ai_delay_showing_pageviews||ai_cookie.hasOwnProperty(a)&&ai_cookie[a].hasOwnProperty("d")||(ai_cookie.hasOwnProperty(a)||(ai_cookie[a]={}),ai_cookie[a].d=0),ai_check_data[a].e=h);if("undefined"!=typeof q&&0<q){if(ai_check_data.hasOwnProperty(a)||(ai_check_data[a]={}),ai_check_data[a].i=q,ai_check_data[a].h=g,h=c="",ai_cookie.hasOwnProperty(a)&&
(ai_cookie[a].hasOwnProperty("i")&&(h=ai_cookie[a].i),ai_cookie[a].hasOwnProperty("h")&&(c=ai_cookie[a].h)),""===h||c!=g)ai_set_cookie(a,"i",q),ai_set_cookie(a,"h",g)}else ai_cookie.hasOwnProperty(a)&&ai_cookie[a].hasOwnProperty("i")&&(ai_set_cookie(a,"i",""),ai_cookie[a].hasOwnProperty("c")||ai_cookie[a].hasOwnProperty("x")||ai_set_cookie(a,"h",""));if("undefined"!=typeof u&&0<u&&"undefined"!=typeof t&&0<t){ai_check_data.hasOwnProperty(a)||(ai_check_data[a]={});ai_check_data[a].ipt=u;ai_check_data[a].it=
t;q=c="";ai_cookie.hasOwnProperty(a)&&(ai_cookie[a].hasOwnProperty("ipt")&&(c=ai_cookie[a].ipt),ai_cookie[a].hasOwnProperty("it")&&(q=ai_cookie[a].it));if(""===c||""===q)ai_set_cookie(a,"ipt",u),c=new Date,c=Math.round(c.getTime()/1E3),ai_set_cookie(a,"it",Math.round(c+86400*t));0<q&&(c=new Date,c=Math.round(c.getTime()/1E3),q<=c&&(ai_set_cookie(a,"ipt",u),ai_set_cookie(a,"it",Math.round(c+86400*t))))}else ai_cookie.hasOwnProperty(a)&&(ai_cookie[a].hasOwnProperty("ipt")&&ai_set_cookie(a,"ipt",""),
ai_cookie[a].hasOwnProperty("it")&&ai_set_cookie(a,"it",""));if("undefined"!=typeof w&&0<w){if(ai_check_data.hasOwnProperty(a)||(ai_check_data[a]={}),ai_check_data[a].c=w,ai_check_data[a].h=g,u=c="",ai_cookie.hasOwnProperty(a)&&(ai_cookie[a].hasOwnProperty("c")&&(u=ai_cookie[a].c),ai_cookie[a].hasOwnProperty("h")&&(c=ai_cookie[a].h)),""===u||c!=g)ai_set_cookie(a,"c",w),ai_set_cookie(a,"h",g)}else ai_cookie.hasOwnProperty(a)&&ai_cookie[a].hasOwnProperty("c")&&(ai_set_cookie(a,"c",""),ai_cookie[a].hasOwnProperty("i")||
ai_cookie[a].hasOwnProperty("x")||ai_set_cookie(a,"h",""));if("undefined"!=typeof e&&0<e&&"undefined"!=typeof p&&0<p){ai_check_data.hasOwnProperty(a)||(ai_check_data[a]={});ai_check_data[a].cpt=e;ai_check_data[a].ct=p;g=w="";ai_cookie.hasOwnProperty(a)&&(ai_cookie[a].hasOwnProperty("cpt")&&(w=ai_cookie[a].cpt),ai_cookie[a].hasOwnProperty("ct")&&(g=ai_cookie[a].ct));if(""===w||""===g)ai_set_cookie(a,"cpt",e),c=new Date,c=Math.round(c.getTime()/1E3),ai_set_cookie(a,"ct",Math.round(c+86400*p));0<g&&
(c=new Date,c=Math.round(c.getTime()/1E3),g<=c&&(ai_set_cookie(a,"cpt",e),ai_set_cookie(a,"ct",Math.round(c+86400*p))))}else ai_cookie.hasOwnProperty(a)&&(ai_cookie[a].hasOwnProperty("cpt")&&ai_set_cookie(a,"cpt",""),ai_cookie[a].hasOwnProperty("ct")&&ai_set_cookie(a,"ct",""));if("undefined"!=typeof d&&0<d&&"undefined"!=typeof f&&0<f){ai_check_data.hasOwnProperty("G")||(ai_check_data.G={});ai_check_data.G.cpt=d;ai_check_data.G.ct=f;a=e="";ai_cookie.hasOwnProperty("G")&&(ai_cookie.G.hasOwnProperty("cpt")&&
(e=ai_cookie.G.cpt),ai_cookie.G.hasOwnProperty("ct")&&(a=ai_cookie.G.ct));if(""===e||""===a)ai_set_cookie("G","cpt",d),c=new Date,c=Math.round(c.getTime()/1E3),ai_set_cookie("G","ct",Math.round(c+86400*f));0<a&&(c=new Date,c=Math.round(c.getTime()/1E3),a<=c&&(ai_set_cookie("G","cpt",d),ai_set_cookie("G","ct",Math.round(c+86400*f))))}else ai_cookie.hasOwnProperty("G")&&(ai_cookie.G.hasOwnProperty("cpt")&&ai_set_cookie("G","cpt",""),ai_cookie.G.hasOwnProperty("ct")&&ai_set_cookie("G","ct",""))});document.querySelectorAll(".ai-check-block").forEach((f,
d)=>{f.classList.remove("ai-check-block")});for(var b in ai_cookie)for(var m in ai_cookie[b])if("d"==m){var n=ai_cookie[b][m];0<n?ai_set_cookie(b,"d",n-1):ai_check_data.hasOwnProperty(b)&&ai_check_data[b].hasOwnProperty("e")?ai_set_cookie(b,"d",ai_check_data[b].e-1):ai_check_data.hasOwnProperty(b)&&ai_check_data[b].hasOwnProperty("d")||ai_set_cookie(b,"d","")}}}function B(){if(ai_track_pageviews){var b=document.documentElement.clientWidth,m=window.innerWidth,n=b<m?m:b,f=0;ai_viewport_widths.every((h,
g)=>n>=h?(f=ai_viewport_indexes[g],!1):!0);b=document.querySelector(b64d("Ym9keQ==")).getAttribute(b64d(ai_adb_attribute));if("string"===typeof b)var d=b==b64d("bWFzaw==");"string"===typeof b&&"boolean"===typeof d&&d&&(ai_external_tracking&&l("ad blocking",0,ai_viewport_names[f-1],0,0,"",!0),f|=128);y=[0,f]}x();ai_process_impressions();if(0!=y.length&&ai_internal_tracking){d={action:"ai_ajax",ai_check:ai_data_id};var a=[],c;for(c in d)b=encodeURIComponent(c),m=encodeURIComponent(d[c]),a.push(b+"="+
m);b=encodeURIComponent("views[]");m=encodeURIComponent(0);a.push(b+"="+m);b=encodeURIComponent("versions[]");m=encodeURIComponent(f);a.push(b+"="+m);a=a.join("&");(async function(){return await (await fetch(ai_ajax_url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:a})).text()})().then(h=>{})}ai_tracking_finished=!0}ai_debug_tracking&&(ai_ajax_url+="?ai-debug-tracking=1");Number.isInteger=Number.isInteger||function(b){return"number"===typeof b&&isFinite(b)&&
Math.floor(b)===b};ai_install_standard_click_trackers=function(b){"undefined"==typeof b&&(b=document.querySelector("body"));b=b.querySelectorAll("div.ai-track[data-ai]");var m=[];b.forEach((f,d)=>{if(f.offsetWidth||f.offsetHeight||f.getClientRects().length)f.querySelectorAll("div.ai-lazy, div.ai-wait-for-interaction, div.ai-manual, div.ai-list-manual, div.ai-manual-auto, div.ai-delayed").length||m.push(f)});var n=[];m.forEach((f,d)=>{f.classList.remove("ai-track");n.push.apply(n,f.querySelectorAll("a"))});
b=n;0!=b.length&&(ai_advanced_click_detection?b.forEach((f,d)=>{f.addEventListener("click",()=>{for(var a=f.closest("div[data-ai]");null!==a&&a.hasAttribute("data-ai");){var c=JSON.parse(b64d(a.getAttribute("data-ai")));"undefined"!==typeof c&&c.constructor===Array&&Number.isInteger(c[1])&&!a.classList.contains("clicked")&&(a.classList.add("clicked"),r(c,"a.click"));a=a.parentElement.closest("div[data-ai]")}})}):b.forEach((f,d)=>{f.addEventListener("click",()=>{for(var a=f.closest("div[data-ai]");null!==
a&&a.hasAttribute("data-ai");){var c=JSON.parse(b64d(a.getAttribute("data-ai")));"undefined"!==typeof c&&c.constructor===Array&&Number.isInteger(c[1])&&(r(c,"a.click"),clicked=!0);a=a.parentElement.closest("div[data-ai]")}})}))};ai_install_click_trackers=function(b){"undefined"==typeof b&&(b=document.querySelector("body"));if(ai_advanced_click_detection){var m=b.querySelectorAll("div.ai-track[data-ai], div.ai-rotate[data-info] div.ai-track[data-ai]"),n=[];m.forEach((d,a)=>{(d.offsetWidth||d.offsetHeight||
d.getClientRects().length)&&n.push(d)});b.hasAttribute("data-ai")&&b.classList.contains("ai-track")&&(b.offsetWidth||b.offsetHeight||b.getClientRects().length)&&n.push(b);var f=[];n.forEach((d,a)=>{d.querySelectorAll("div.ai-lazy, div.ai-wait-for-interaction, div.ai-manual, div.ai-list-manual, div.ai-manual-auto, div.ai-delayed").length||f.push(d)});m=f;0!=m.length&&m.forEach((d,a)=>{installIframeTracker({blurCallback:function(){if(null!=this.ai_data&&null!=wrapper&&!wrapper.classList.contains("clicked")){wrapper.classList.add("clicked");
r(this.ai_data,"blurCallback");for(var c=wrapper.querySelector("div[data-ai]");null!=c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length)&&c.hasAttribute("data-ai");){var h=JSON.parse(b64d(c.getAttribute("data-ai")));"undefined"!==typeof h&&h.constructor===Array&&Number.isInteger(h[1])&&r(h,"blurCallback INNER");c=c.querySelector("div[data-ai]")}}},overCallback:function(c){c=c.closest("div[data-ai]");if(c.hasAttribute("data-ai")){var h=JSON.parse(b64d(c.getAttribute("data-ai")));"undefined"!==
typeof h&&h.constructor===Array&&Number.isInteger(h[1])?(wrapper=c,this.ai_data=h):(null!=wrapper&&wrapper.classList.remove("clicked"),this.ai_data=wrapper=null)}},outCallback:function(c){null!=wrapper&&wrapper.classList.remove("clicked");this.ai_data=wrapper=null},focusCallback:function(c){if(null!=this.ai_data&&null!=wrapper&&!wrapper.classList.contains("clicked"))for(wrapper.classList.add("clicked"),r(this.ai_data,"focusCallback"),c=wrapper.querySelector("div[data-ai]");null!=c&&(c.offsetWidth||
c.offsetHeight||c.getClientRects().length)&&c.hasAttribute("data-ai");){var h=JSON.parse(b64d(c.getAttribute("data-ai")));"undefined"!==typeof h&&h.constructor===Array&&Number.isInteger(h[1])&&r(h,"focusCallback INNER");c=c.querySelector("div[data-ai]")}},wrapper:null,ai_data:null,block:null,version:null},d)})}ai_install_standard_click_trackers(b)};var y=[];ai_process_impressions=function(b){"undefined"==typeof b&&(b=document.querySelector("body"));var m=[],n=[],f=[],d=[],a=[];0!=y.length&&(m.push(y[0]),
n.push(y[1]),f.push("Pageviews"),a.push(0),d.push(""));var c=b.querySelectorAll("div.ai-track[data-ai], div.ai-rotate[data-info] div.ai-track[data-ai]"),h=[];c.forEach((e,p)=>{(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&!e.classList.contains("ai-no-pageview")&&h.push(e)});null!==b&&b.hasAttribute("data-ai")&&b.classList.contains("ai-track")&&!b.classList.contains("ai-no-pageview")&&(b.offsetWidth||b.offsetHeight||b.getClientRects().length)&&h.push(b);c=h;0!=c.length&&c.forEach((e,
p)=>{if(e.hasAttribute("data-ai")){p="";for(var v=1;9>=v;v++)if(e.hasAttribute("data-ai-"+v))p=e.getAttribute("data-ai-"+v);else break;""!=p&&e.setAttribute("data-ai",p);p=JSON.parse(b64d(e.getAttribute("data-ai")));if("undefined"!==typeof p&&p.constructor===Array){v=0;var z=e.querySelectorAll("div.ai-rotate[data-info]");1==z.length&&(v=JSON.parse(b64d(z[0].dataset.info))[1]);if(Number.isInteger(p[0])&&0!=p[0]&&Number.isInteger(p[1])){z=0;var C=e.classList.contains("ai-no-tracking"),A=document.querySelector(b64d("Ym9keQ==")).getAttribute(b64d(ai_adb_attribute));
if("string"===typeof A)var D=A==b64d("bWFzaw==");if("string"===typeof A&&"boolean"===typeof D){var E=e.offsetHeight;A=e.querySelectorAll(".ai-attributes");A.length&&A.forEach((H,J)=>{E>=e.offsetHeight&&(E-=e.offsetHeight)});A=e.querySelectorAll(".ai-code");E=0;A.length&&A.forEach((H,J)=>{E+=H.offsetHeight});D&&0===E&&(z=128)}0!=e.querySelectorAll("div.ai-lazy, div.ai-wait-for-interaction, div.ai-manual, div.ai-list-manual, div.ai-manual-auto, div.ai-delayed").length&&(C=!0);if(!C)if(0==v)m.push(p[0]),
n.push(p[1]|z),f.push(p[2]),d.push(p[3]),a.push(p[4]);else for(D=1;D<=v;D++)m.push(p[0]),n.push(D|z),f.push(p[2]),d.push(p[3]),a.push(p[4])}}}});ai_cookie=ai_load_cookie();for(var g in ai_cookie)if(m.includes(parseInt(g)))for(var q in ai_cookie[g])"i"==q?(b=ai_cookie[g][q],0<b&&(1==b?(b=new Date,b=Math.round(b.getTime()/1E3)+604800,ai_set_cookie(g,"i",-b)):ai_set_cookie(g,"i",b-1))):"ipt"==q&&(b=ai_cookie[g][q],0<b?ai_set_cookie(g,"ipt",b-1):ai_check_data.hasOwnProperty(g)&&ai_check_data[g].hasOwnProperty("ipt")&&
ai_check_data[g].hasOwnProperty("it")?ai_cookie.hasOwnProperty(g)&&ai_cookie[g].hasOwnProperty("it")&&(b=new Date,0>=ai_cookie[g].it-Math.round(b.getTime()/1E3)&&(b=Math.round(b.getTime()/1E3),ai_set_cookie(g,"ipt",ai_check_data[g].ipt),ai_set_cookie(g,"it",Math.round(b+86400*ai_check_data[g].it)))):(ai_cookie.hasOwnProperty(g)&&ai_cookie[g].hasOwnProperty("ipt")&&ai_set_cookie(g,"ipt",""),ai_cookie.hasOwnProperty(g)&&ai_cookie[g].hasOwnProperty("it")&&ai_set_cookie(g,"it","")));if(m.length){if(ai_internal_tracking&&
"undefined"===typeof ai_internal_tracking_no_impressions){y=[];g={action:"ai_ajax",ai_check:ai_data_id};var u=[],t;for(t in g)q=encodeURIComponent(t),b=encodeURIComponent(g[t]),u.push(q+"="+b);for(var w in m)q=encodeURIComponent("views[]"),b=encodeURIComponent(m[w]),u.push(q+"="+b);for(w in n)q=encodeURIComponent("versions[]"),b=encodeURIComponent(n[w]),u.push(q+"="+b);u=u.join("&");(async function(){return await (await fetch(ai_ajax_url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
body:u})).text()})().then(e=>{e=e.trim();if(""!=e&&(e=JSON.parse(e),"undefined"!=typeof e["#"])){ai_cookie=ai_load_cookie();var p=Math.round((new Date).getTime()/1E3)+43200,v=[],z;for(z in e["#"])ai_cookie.hasOwnProperty(e["#"][z])&&ai_cookie[e["#"][z]].hasOwnProperty("x")||ai_set_cookie(e["#"][z],"x",p);setTimeout(function(){for(w=0;w<v.length;++w)document.querySelectorAll('span[data-ai-block="'+v[w]+'"]').forEach((C,A)=>{(C=C.closest("div[data-ai]"))&&C.remove()})},50)}})}if(ai_external_tracking&&
"undefined"===typeof ai_external_tracking_no_impressions)for(t=0;t<m.length;t++)0!=m[t]&&l("impression",m[t],f[t],a[t],n[t],d[t],!0)}};window.addEventListener("load",b=>{"undefined"==typeof ai_delay_tracking&&(ai_delay_tracking=0);setTimeout(B,ai_delay_tracking+1400);setTimeout(ai_install_click_trackers,ai_delay_tracking+1500)})})};

ai_js_code = true;
</script>

</body>
</html>
