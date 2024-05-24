!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};e[o].call(r.exports,r,r.exports,n);r.l=!0;return r.exports}n.m=e;n.c=t;n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})};n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};n.t=function(e,t){1&t&&(e=n(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);n.r(o);Object.defineProperty(o,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o};n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="//static.hsappstatic.net/AsyncSupport/static-1.122/";n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(2),i=n(3);Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var s=function(){return Array.prototype.slice.call(document.querySelectorAll(".comment-reply-to"))},a=function(){function e(){Object(o.a)(this,e);this.oneQuarterOfASecondMS=250;this.successRegexp=/[?|&]success=true/;this.replyingTo="";this.disableContactPromotion=!1;this.onFormReady=this.onFormReady.bind(this);this.onFormSubmitted=this.onFormSubmitted.bind(this);this.handleSuccess=this.handleSuccess.bind(this);this.handlePostResponse=this.handlePostResponse.bind(this);this.scrollToComment=this.scrollToComment.bind(this);this.renderComment=this.renderComment.bind(this);this.hsPopulateCommentsFeed=this.hsPopulateCommentsFeed.bind(this);this.getExtraMetaDataBeforeSubmit=this.getExtraMetaDataBeforeSubmit.bind(this);this.setUpThreading=this.setUpThreading.bind(this)}Object(r.a)(e,[{key:"scrollToTarget",value:function(e){var t=this;setTimeout((function(){var n=document.documentElement||document.body,o=document.querySelector(e);if(o){n.style.transition="all "+t.oneQuarterOfASecondMS;n.scrollTop=o.offsetTop}}),0)}},{key:"getExtraMetaDataBeforeSubmit",value:function(){return{disableContactPromotion:this.disableContactPromotion,replyingTo:this.replyingTo}}},{key:"onFormSubmitted",value:function(){var e="success=true";window.location.search?this.successRegexp.exec(window.location.search)?window.location.reload():window.location.search+="&"+e:window.location.search=e}},{key:"handleSuccess",value:function(e,t){var n=this,o=document.querySelector(e);if(!(o&&o.querySelector("form").length>0))return setTimeout((function(){return n.handleSuccess(e,t)}),this.oneQuarterOfASecondMS);o.insertAdjacentHTML("afterbegin",'<div class="hs-comment-message hs-common-confirm-message">'+t+"</div>");return this.scrollToTarget(e)}},{key:"handlePostResponse",value:function(e){var t=e.successMessage,n=e.target;this.successRegexp.exec(window.location.search)&&this.handleSuccess(n,t)}},{key:"onFormReady",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successMessage,n=e.target;return this.handlePostResponse({successMessage:t,target:n})}},{key:"isThreadId",value:function(e){for(var t=e.split("."),n=0;n<t.length;n++){var o=t[n];if(4!==o.length||parseInt(o,10)<0||parseInt(o,10)>9999)return!1}return!0}},{key:"scrollToComment",value:function(e){var t=location.hash.replace("#","");if(t&&this.isThreadId(t)){var n=e+" [id='c"+t+"']";document.querySelector(n).length>0&&this.scrollToTarget(n)}}},{key:"getDepth",value:function(e){for(var t=e.split("."),n=-1,o=0;o<t.length;o++){if("0000"===t[o])return n;n++}return n}},{key:"setUpThreading",value:function(e){var t=this,n=function(e){t.replyingTo=e};s().forEach((function(t){t.addEventListener("click",(function(){var t=this.closest(".comment");if(t){n(t.dataset.threadid);var o=document.querySelector(e);if(o){s().forEach((function(e){e.style.display="block"}));var r=o.querySelector("input[name=replyingTo]");r&&(r.style.display="none");o.style.display="none";o.classList.add("replying");var i="Replying to "+this.querySelector("em").innerHTML,a=o.querySelector(".replying-to");a?a.innerText=i:o.insertAdjacentHTML("afterbegin",'<span class="replying-to">'+i+"</span>");t.parentNode&&t.parentNode.insertBefore(o,t.nextSibling);o.style.display="block";this.style.display="none";this.scrollToTarget(e);o.querySelector(".hs_comment .hs-input").focus()}}}))}))}},{key:"highlightCode",value:function(e){var t=window.hljs;if(t&&t.highlightBlock){t.configure&&t.configure({useBR:!0});var n=document.querySelector(e);Array.prototype.slice.call(n.querySelectorAll("pre code")).forEach((function(e){return t.highlightBlock(e)}))}}},{key:"renderComment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.commentText,o=e.created,r=e.threadInfo,i=e.user,s=e.userUri,a=t.maxThreadDepth,c=t.showForm,l=this.getDepth(r),u=l<a&&c,d=n.replace(/\n/g,"<br/>"),m=new Date(o).toLocaleString(),h='\n      <div id="c'+r+'" class="comment depth-'+l+'" data-threadid="'+r+'">\n      <div class="comment-from">\n      <h4>\n      ';if(s){h+='<a href="'+(0!==s.indexOf("http")?"http://"+s:s)+'" rel="nofollow noopener" target="_blank">'+i+"</a>"}else h+=i;h+='\n      </h4>\n      </div>\n      <div class="comment-date">'+m+'</div>\n      <div class="comment-body"><p>'+d+"</p></div>\n      ";u&&(h+='<button class="comment-reply-to hs-button secondary">Reply to <em>'+i+"</em></button>");return h+="</div>"}},{key:"hsPopulateCommentsFeed",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.a.jsonp(t.commentsUrl,(function(n){e.disableContactPromotion=t.disableContactPromotion;var o=t.commentsSelector||"#comments-listing",r=document.querySelector(o);if(r){for(;r.firstChild;)r.removeChild(r.firstChild);n.objects.length>0&&r.setAttribute("data-has-comments",!0);var i=n.objects.map((function(n){return e.renderComment(n,t)})).join("");r.insertAdjacentHTML("beforeend",i);e.setUpThreading("#"+t.target);e.highlightCode(o);e.scrollToComment(o);"function"==typeof hsPostCommentsComplete&&window.hsPostCommentsComplete(r)}}))}}]);return e}();window.hsCommentListing=new a;window.hsPopulateCommentsFeed=window.hsCommentListing.hsPopulateCommentsFeed;window.hsPopulateCommentFormOnFormReady=window.hsCommentListing.onFormReady;window.hsPopulateCommentFormOnFormSubmitted=window.hsCommentListing.onFormSubmitted;window.hsPopulateCommentFormGetExtraMetaDataBeforeSubmit=window.hsCommentListing.getExtraMetaDataBeforeSubmit},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(e,o.key,o)}}function r(e,t,n){t&&o(e.prototype,t);n&&o(e,n);return e}},function(e,t,n){"use strict";var o=n(1),r=n(2),i=function(){function e(){Object(o.a)(this,e)}Object(r.a)(e,[{key:"generateCallbackFunction",value:function(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}},{key:"httpRequest",value:function(){return new XMLHttpRequest}},{key:"jsonp",value:function(e,t){var n=this.generateCallbackFunction();window[n]=function(e){t(e)};var o=e+(-1!==e.indexOf("?")?"&":"?")+"callback="+n,r=document.createElement("script");r.type="text/javascript";r.async=!0;r.src=o;document.getElementsByTagName("head")[0].appendChild(r)}},{key:"send",value:function(e,t,n){var o=this.httpRequest();o.open(n,e);o.onreadystatechange=function(){if(4===o.readyState&&200===o.status)try{var e=JSON.parse(o.responseText);t(e)}catch(e){console.log(e.message+" in "+o.responseText);return}};o.send()}},{key:"get",value:function(e,t){this.send(e,t,"GET")}}]);return e}();t.a=new i}]);creases Speed-to-Market With Hands-on Keyboard Control - Innovid</title>
	<meta name="description" content="Advertising in the pharma industry presents unique hurdles with strict regulations and lengthy approval processes." />
	<link rel="canonical" href="https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="CMI Media Group Increases Speed-to-Market With Hands-on Keyboard Control" />
	<meta property="og:description" content="Advertising in the pharma industry presents unique hurdles with strict regulations and lengthy approval processes." />
	<meta property="og:url" content="https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/" />
	<meta property="og:site_name" content="Innovid" />
	<meta property="article:publisher" content="https://www.facebook.com/innovid" />
	<meta property="article:modified_time" content="2023-06-07T13:16:42+00:00" />
	<meta property="og:image" content="https://www.innovid.com/wp-content/uploads/2023/06/CMI_casestudy_BLOG_TILE_1200x675.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="675" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@innovid" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/","url":"https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/","name":"CMI Media Group Increases Speed-to-Market With Hands-on Keyboard Control - Innovid","isPartOf":{"@id":"https://www.innovid.com/#website"},"datePublished":"2023-06-07T13:12:48+00:00","dateModified":"2023-06-07T13:16:42+00:00","description":"Advertising in the pharma industry presents unique hurdles with strict regulations and lengthy approval processes.","breadcrumb":{"@id":"https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/"]}]},{"@type":"BreadcrumbList","@id":"https://www.innovid.com/resources/cmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.innovid.com/"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://www.innovid.com/resources/"},{"@type":"ListItem","position":3,"name":"CMI Media Group Increases Speed-to-Market With Hands-on Keyboard Control"}]},{"@type":"WebSite","@id":"https://www.innovid.com/#website","url":"https://www.innovid.com/","name":"Innovid","description":"","publisher":{"@id":"https://www.innovid.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.innovid.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://www.innovid.com/#organization","name":"Innovid","url":"https://www.innovid.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://www.innovid.com/#/schema/logo/image/","url":"https://www.innovid.com/wp-content/uploads/2019/09/news-innovid-logo@2x.png","contentUrl":"https://www.innovid.com/wp-content/uploads/2019/09/news-innovid-logo@2x.png","width":488,"height":378,"caption":"Innovid"},"image":{"@id":"https://www.innovid.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/innovid","https://twitter.com/innovid","https://www.instagram.com/innovid/","https://www.linkedin.com/company/innovid_2/","https://www.youtube.com/channel/UCbrEklUa2D9ODxu1FmniMUw"]}]}</script>
	<!-- / Yoast SEO Premium plugin. -->


<link rel='dns-prefetch' href='//moderate.cleantalk.org' />
<link rel='dns-prefetch' href='//use.fontawesome.com' />
<script type="text/javascript">
/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.innovid.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.2"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
</script>
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
<style id='safe-svg-svg-icon-style-inline-css' type='text/css'>
.safe-svg-cover{text-align:center}.safe-svg-cover .safe-svg-inside{display:inline-block;max-width:100%}.safe-svg-cover svg{height:100%;max-height:100%;max-width:100%;width:100%}

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
<link rel='stylesheet' id='ct_public_css-css' href='https://www.innovid.com/wp-content/plugins/cleantalk-spam-protect/css/cleantalk-public.min.css?ver=6.24' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css' href='https://use.fontawesome.com/releases/v5.0.13/css/all.css?ver=6.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='app-css' href='https://www.innovid.com/wp-content/themes/innovid/public/css/app.css?ver=1704846851' type='text/css' media='all' />
<link rel='stylesheet' id='main.css-css' href='https://www.innovid.com/wp-content/themes/innovid-2019/assets/dist/main.7a9e8fc471dd93ac20ae.css' type='text/css' media='all' />
<script type="text/javascript" src="https://www.innovid.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://www.innovid.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script type="text/javascript" data-pagespeed-no-defer src="https://www.innovid.com/wp-content/plugins/cleantalk-spam-protect/js/apbct-public-bundle.min.js?ver=6.24" id="ct_public_functions-js"></script>
<script type="text/javascript" src="https://moderate.cleantalk.org/ct-bot-detector-wrapper.js" id="ct_bot_detector-js"></script>
<script type="text/javascript" src="https://www.innovid.com/wp-content/themes/innovid/node_modules/feather-icons/dist/feather.min.js?ver=6.4.2" id="feather-icons-js"></script>
<link rel="https://api.w.org/" href="https://www.innovid.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.innovid.com/wp-json/wp/v2/iresource/4780" /><link rel="alternate" type="application/json+oembed" href="https://www.innovid.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.innovid.com%2Fresources%2Fcmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.innovid.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.innovid.com%2Fresources%2Fcmi-media-group-increases-speed-to-market-with-hands-on-keyboard-control%2F&#038;format=xml" />
		<script type="text/javascript">
				(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;
					t.src="https://www.clarity.ms/tag/"+i+"?ref=wordpress";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "i1w6mpv3da");
		</script>
		
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<!-- GTM Container placement set to manual -->
<script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
	var dataLayer_content = {"pagePostType":"iresource","pagePostType2":"single-iresource","pagePostAuthor":"Brenna Fowler"};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N33ZLD6');
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com -->        <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="4c628707-4068-4552-b519-d993fccd9f7a"
            data-blockingmode="auto"
            data-georegions="{'region':'US','cbid':'5254632b-80ff-477e-a432-1b36406572d2'}"
            type="text/javascript"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Marketo Munchkin -->
        <script type="text/javascript">
            (function() {
                var didInit = false;
                function initMunchkin() {
                    if(didInit === false) {
                        didInit = true;
                        Munchkin.init('597-QOT-387');
                    }
                }
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//munchkin.marketo.net/munchkin.js';
                s.onreadystatechange = function() {
                        if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        initMunchkin();
                    }
                };
                s.onload = initMunchkin;
                document.getElementsByTagName('head')[0].appendChild(s);
            })();
        </script>
        <!-- End Marketo Munchkin -->
    
    <meta name="ahrefs-site-verification" content="d17925568061195e82c861db0077013381f9c2197cb277def4628a58f1b0399b">
</head>

<body class="iresource-template-default single single-iresource">
    
<!-- GTM Container placement set to manual -->
<!-- Google Tag Manager (noscript) -->
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N33ZLD6" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->    <div class="js-window c-window">
        <div class="c-window__container">
            <div class="c-window__container__inner">
                <div class="c-window__content"></div>
                <div class="js-window-close c-window__close-btn">
                    <img class="mr-2 inline-block" src="https://www.innovid.com/wp-content/themes/innovid/public/images/icon-close-grey.svg" alt="X">
                    <span class="c-window__close-btn__label">Close Window</span>
                </div>
            </div>
        </div>
    </div>

    <main class="main">
        <div class="c-header" data-js-behavior="menu" data-language-selector-el=".menu-item-wpml-globe">
            <div class="l-container">
                <nav class="c-header__nav">
                    <a href="https://www.innovid.com"><img src="https://www.innovid.com/wp-content/themes/innovid/public/images/logo-innovid.svg" alt="INNOVID" width="109" height="20"></a>
                    <div class="menu-primary-container"><ul id="menu-primary" class="menu"><li id="menu-item-1854" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1854"><a href="https://www.innovid.com/solutions/">Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-1758" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1758"><a href="https://www.innovid.com/solutions/primary-ad-serving/">Ad Serving</a></li>
	<li id="menu-item-1831" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1831"><a href="https://www.innovid.com/solutions/creative-management/">Creative Management</a></li>
	<li id="menu-item-1765" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1765"><a href="https://www.innovid.com/solutions/advertising-measurement/">Advertising Measurement</a></li>
	<li id="menu-item-2809" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2809"><a href="https://www.innovid.com/solutions/identity-resolution/">Identity Resolution</a></li>
	<li id="menu-item-1759" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a href="https://www.innovid.com/solutions/sell-side-solutions/">Sell-Side Solutions</a></li>
</ul>
</li>
<li id="menu-item-3622" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3622"><a href="/resources">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-1120" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1120"><a href="#">Newsroom</a>
	<ul class="sub-menu">
		<li id="menu-item-3590" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3590"><a href="/resources/category/news/">News</a></li>
		<li id="menu-item-1121" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1121"><a href="/resources/category/reports/">Reports</a></li>
		<li id="menu-item-1122" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1122"><a href="/resources/category/case-studies/">Case Studies</a></li>
		<li id="menu-item-1123" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1123"><a href="/resources/category/blog/">Blog</a></li>
		<li id="menu-item-3591" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3591"><a href="/resources/category/videos/">Videos</a></li>
	</ul>
</li>
	<li id="menu-item-3592" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3592"><a href="#">Fundamentals</a>
	<ul class="sub-menu">
		<li id="menu-item-3639" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3639"><a href="/resources/fundamentals-of-ctv-advertising/">Fundamentals of CTV</a></li>
		<li id="menu-item-3659" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3659"><a href="/resources/reimagine-tv-advertising/">Reimagine TV Advertising</a></li>
		<li id="menu-item-4388" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4388"><a href="https://www.innovid.com/resources/the-fundamentals-of-converged-tv-measurement/">Converged TV Measurement</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1833" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1833"><a href="https://www.innovid.com/about/">About</a>
<ul class="sub-menu">
	<li id="menu-item-1835" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1835"><a href="/about/#leadership">Leadership</a></li>
	<li id="menu-item-1836" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1836"><a href="/about/#partners">Partners</a></li>
	<li id="menu-item-1837" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1837"><a href="/about/#awards">Awards</a></li>
	<li id="menu-item-1838" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1838"><a href="/about/#careers">Careers</a></li>
	<li id="menu-item-2043" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2043"><a href="https://www.innovid.com/diversity-equity-inclusion/">Diversity</a></li>
	<li id="menu-item-3453" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3453"><a href="https://investors.innovid.com/">Investors</a></li>
</ul>
</li>
</ul></div>
                    <div class="c-header-primary-side-wrapper flex flex-row flex-wrap">
                                                <div class="menu-primary-side-container"><ul id="menu-primary-side" class="menu"><li id="menu-item-181" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-181"><a target="_blank" rel="noopener" href="https://studio.innovid.com/analytics">Log In</a></li>
<li id="menu-item-1839" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1839"><a href="https://www.innovid.com/contact/">Contact Us</a></li>
</ul></div>                    </div>
                </nav>
            </div>
        </div>

        <div class="c-m-header">
            <div class="l-container">
                <div class="c-m-header__top">
                    <a href="https://www.innovid.com"><img src="https://www.innovid.com/wp-content/themes/innovid/public/images/logo-innovid.svg" alt="INNOVID" width="109" height="20"></a>
                    <div class="c-m-header__toggle js-toggle">
                        <div class="c-toggle">
                            <span class="c-toggle__bar1"></span>
                            <span class="c-toggle__bar2"></span>
                            <span class="c-toggle__bar3"></span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="menu-primary-mobile-container"><ul id="menu-primary-mobile" class="menu"><li id="menu-item-1157" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1157"><a href="https://www.innovid.com/contact/">Contact Us</a></li>
<li id="menu-item-1855" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1855"><a href="https://www.innovid.com/solutions/">Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-1766" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1766"><a href="https://www.innovid.com/solutions/primary-ad-serving/">Ad Serving</a></li>
	<li id="menu-item-1832" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1832"><a href="https://www.innovid.com/solutions/creative-management/">Creative Management</a></li>
	<li id="menu-item-1767" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="https://www.innovid.com/solutions/advertising-measurement/">Advertising Measurement</a></li>
	<li id="menu-item-2810" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2810"><a href="https://www.innovid.com/solutions/identity-resolution/">Identity Resolution</a></li>
	<li id="menu-item-1768" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1768"><a href="https://www.innovid.com/solutions/sell-side-solutions/">Sell-Side Solutions</a></li>
</ul>
</li>
<li id="menu-item-3636" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3636"><a href="/resources">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-3602" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3602"><a href="#">Newsroom</a>
	<ul class="sub-menu">
		<li id="menu-item-1175" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1175"><a href="/resources/category/news">News</a></li>
		<li id="menu-item-1508" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1508"><a href="/resources/category/reports">Reports</a></li>
		<li id="menu-item-1510" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1510"><a href="/resources/category/case-studies">Case Studies</a></li>
		<li id="menu-item-1176" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1176"><a href="/resources/category/blog">Blog</a></li>
		<li id="menu-item-3648" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3648"><a href="/resources/category/videos/">Videos</a></li>
	</ul>
</li>
	<li id="menu-item-3603" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3603"><a href="#">Fundamentals</a>
	<ul class="sub-menu">
		<li id="menu-item-2736" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2736"><a href="https://www.innovid.com/resources/fundamentals-of-ctv-advertising/">Fundamentals of CTV</a></li>
		<li id="menu-item-3660" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3660"><a href="/resources/reimagine-tv-advertising/">Reimagine TV Advertising</a></li>
		<li id="menu-item-4389" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4389"><a href="https://www.innovid.com/resources/the-fundamentals-of-converged-tv-measurement/">Converged TV Measurement</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1789" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1789"><a href="https://www.innovid.com/about/">About</a>
<ul class="sub-menu">
	<li id="menu-item-1851" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1851"><a href="/about/#leadership">Leadership</a></li>
	<li id="menu-item-1852" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1852"><a href="/about/#partners">Partners</a></li>
	<li id="menu-item-1853" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1853"><a href="/about/#awards">Awards</a></li>
	<li id="menu-item-1790" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1790"><a href="/about/#careers">Careers</a></li>
	<li id="menu-item-2044" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2044"><a href="https://www.innovid.com/diversity-equity-inclusion/">Diversity</a></li>
	<li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455"><a href="https://investors.innovid.com/">Investors</a></li>
</ul>
</li>
<li id="menu-item-1158" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1158"><a href="https://www.innovid.com/privacy-policy/">Privacy Policy</a></li>
<li id="menu-item-1159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1159"><a href="https://www.innovid.com/terms-of-use/">Terms of Use</a></li>
</ul></div>        </div>
<article class="post pt-12 xxmd:pt-20">
    <div class="resource-search-bar hidden xxmd:block">
    <div class="max-w-7xl mx-auto px-6 py-6 flex justify-between">
        <div class="font-sans font-semibold text-gray text-3xl lg:text-4xl">
            <a href="https://www.innovid.com/resources/">                Resources            </a>        </div>
        <form id="searchform" action="/" class="relative border border-gray rounded-full text-gray w-64">
            <input type="text" name="s" value="" class="w-full h-full rounded-full pl-4 pr-8 focus:outline-none" placeholder="Search"></input>
            <button type="submit" form="searchform">
                <svg class="search-icon absolute" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M6.041 0A6.051 6.051 0 0 0 0 6.041a6.051 6.051 0 0 0 6.041 6.042c1.44 0 2.762-.509 3.802-1.354l4.089 4.088a.627.627 0 0 0 .885 0 .619.619 0 0 0 0-.879L10.729 9.85a6.013 6.013 0 0 0 1.354-3.809A6.051 6.051 0 0 0 6.04 0ZM6 1c2.77 0 5 2.23 5 5s-2.23 5-5 5-5-2.23-5-5 2.23-5 5-5Z" fill="#404040" fill-rule="evenodd"/></svg>
            </button>
            <input type="hidden" name="post_type" value="iresource" />
        </form>
    </div>
    <div class="h-1 bg-gradient-rainbow relative"></div>
</div>
    <div class="bg-gray-lightest py-4">
        <div class="max-w-7xl mx-auto px-6 xxmd:block flex justify-center">
            <a class="font-sans font-bold text-orange-medium inline-flex items-center text-xl" href="https://www.innovid.com/resources/">
            <span class="text-orange-medium pr-2 flex items-center"><svg class="inline-block" width="15" height="23" viewBox="0 0 15 23" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21 3 11.5 12.5 2" stroke="#F26504" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round"/></svg></span>
            Back to Resources            </a>
        </div>
    </div>
    <div class="post-content max-w-5xl w-full px-6 mx-auto mt-12 mb-20">
        <div class="post-content__header mb-12">
                            <h1 class="font-sans font-bold text-gray text-3xl lg:text-4xl text-center leading-tight mb-4">CMI Media Group Increases Speed-to-Market With Hands-on Keyboard Control</h1>
                                        <div class="font-sans font-normal text-gray text-xl text-center">June 7, 2023</div>
                    </div>
                <div class="post-content__body rich-text leading-normal">
            
        <section class="post-content__text rich-text pt-8 xxmd:pt-12 pb-12">
        <p><img fetchpriority="high" decoding="async" class="aligncenter wp-image-4782 size-full" src="https://www.innovid.com/wp-content/uploads/2023/06/CMI_casestudy_website_image_1024.png" alt="CMI Case Study" width="1024" height="609" srcset="https://www.innovid.com/wp-content/uploads/2023/06/CMI_casestudy_website_image_1024.png 1024w, https://www.innovid.com/wp-content/uploads/2023/06/CMI_casestudy_website_image_1024-300x178.png 300w, https://www.innovid.com/wp-content/uploads/2023/06/CMI_casestudy_website_image_1024-768x457.png 768w" sizes="(max-width: 1024px) 100vw, 1024px" /></p>
<p><strong>Goal: </strong></p>
<p>Agencies that represent leading pharmaceutical brands are in a unique position compared to other industries due to the strict regulations in place for advertising. These strict regulations create longer approval processes, and inevitably longer turnaround times to activate campaigns. CMI Media Group and their partner agency, Compas, wanted to take more control to go to market quickly, but not to the detriment of delivering the outstanding support their clients had come to rely on.</p>
<p><strong>Strategy: </strong></p>
<p>Historically, Innovid managed and trafficked all digital campaigns while CMI Media Group and Compas focused on the bigger picture. Innovid worked directly with CMI Media Group and Compas to develop a unique hybrid approach to managing their advertising initiatives. For the agencies, this meant gaining direct access to Innovid’s ad management and analytics platforms to develop and distribute ads, while leaving Innovid to tackle the creative production end required to engage customers while still abiding by pharmaceutical regulations. Innovid also developed comprehensive onboarding that featured unique inplatform training sessions, and a detailed on-demand help center for continued learning. Further enabling the Compas Ad Tech Services team to own the activation of their digital campaigns in a self-service capacity.</p>
<p><strong>Results: </strong></p>
<ul>
<li><strong>2 Hours</strong> Average Time Spent Per Campaign End-to-End</li>
<li><strong>10+ </strong>Pharma Advertisers Owning Activation</li>
<li><strong>35+ </strong>Innovid-Certified Team Members</li>
</ul>
<p><center><!--HubSpot Call-to-Action Code --><span id="hs-cta-wrapper-58b29367-4e07-48b9-98aa-5ae40daacd28" class="hs-cta-wrapper"><span id="hs-cta-58b29367-4e07-48b9-98aa-5ae40daacd28" class="hs-cta-node hs-cta-58b29367-4e07-48b9-98aa-5ae40daacd28"><!-- [if lte IE 8]>


<div id="hs-cta-ie-element"></div>


<![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/2529493/58b29367-4e07-48b9-98aa-5ae40daacd28" target="_blank" rel="noopener"><img decoding="async" id="hs-cta-img-58b29367-4e07-48b9-98aa-5ae40daacd28" class="hs-cta-img aligncenter" style="border-width: 0px;" src="https://no-cache.hubspot.com/cta/default/2529493/58b29367-4e07-48b9-98aa-5ae40daacd28.png" alt="Download Case Study" /></a></span></span><!-- end HubSpot Call-to-Action Code --></center></p>
    </section>
    
    
    
    
    
        </div>
                    </div>
            <div class="related-content bg-gray-lightest pt-12 pb-20">
    <div class="max-w-7xl px-6 mx-auto ">
        <h2 class="font-sans font-bold text-gray text-center text-3xl lg:text-4xl leading-tight mb-12">Recommended Knowledge</h2>
        <div class="grid lg:grid-cols-3 gap-10">
                            
<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/10-trends-that-will-transform-tv-advertising-in-2024" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Couple on a couch with a remote control" decoding="async" srcset="https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/blog/10-trends-that-will-transform-tv-advertising-in-2024" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    10 Trends That Will Transform TV Advertising in 2024                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">The 10 key trends shaping TV advertising in 2024 include the cookie's crumbling, AI, the ad server as a data-generating juggernaut, and more. Check out all 10 trends. </div>
            </div>
</div>
                            
<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://www.innovid.com/resources/the-great-ctv-data-disconnect-innovids-dave-helmreich/" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/11/Dave-Beet-TV-Interview_Resource-Hub_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="" decoding="async" srcset="https://www.innovid.com/wp-content/uploads/2023/11/Dave-Beet-TV-Interview_Resource-Hub_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/11/Dave-Beet-TV-Interview_Resource-Hub_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/11/Dave-Beet-TV-Interview_Resource-Hub_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/11/Dave-Beet-TV-Interview_Resource-Hub_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/11/Dave-Beet-TV-Interview_Resource-Hub_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://www.innovid.com/resources/the-great-ctv-data-disconnect-innovids-dave-helmreich/" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Great CTV Data Disconnect: Innovid’s Dave Helmreich                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Connected TV advertising is supposed to provide brands the ability to optimize their campaigns in real-time – just like they do in digital. Hear what Dave Helmreich has to say on the disconnect.</div>
            </div>
</div>
                            
<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/top-8-quotes-from-advertising-week-showcasing-the-power-of-ctv" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/10/AWNY_Blog_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Advertising Week New York quotes" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/10/AWNY_Blog_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/10/AWNY_Blog_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/10/AWNY_Blog_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/10/AWNY_Blog_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/10/AWNY_Blog_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/blog/top-8-quotes-from-advertising-week-showcasing-the-power-of-ctv" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Top 8 Quotes from Advertising Week Showcasing the Power of CTV                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">The power of connected TV (CTV) dominated the conversation at Advertising Week New York 2023. Here are 8 quotes illuminating the effectiveness of CTV. </div>
            </div>
</div>
                    </div>
    </div>
</div>
    </article>
<div class="bg-blue">
    <div class="max-w-6xl mx-auto px-8 xxl:px-0 block xxmd:flex items-center justify-between">
        <p class="font-sans font-normal text-2xl sm:text-3xl text-white text-center xxmd:text-left leading-tight pt-12 sm:py-12 pr-0 xxmd:pr-6">
            Want to Learn How We Can Make Your Advertising Easier?        </p>
        <div class="mt-6 sm:mt-0 pb-12 xxmd:pb-0 flex justify-center flex-shrink-0">
                <a href="/contact" target="" class="btn bg-transparent btn--outline-white bg-transparent btn-transition">
        Let's Talk    </a>
        </div>
    </div>
</div>
<footer class="c-footer" data-js-behavior="footerMenu">
  <div class="l-container-p8">
    <div class="c-footer__top">
              <div class="menu-solutions-container"><ul id="menu-solutions" class="menu"><li id="menu-item-1857" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1857"><a href="https://www.innovid.com/solutions/">Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-1771" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1771"><a href="https://www.innovid.com/solutions/primary-ad-serving/">Ad Serving</a></li>
	<li id="menu-item-1858" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1858"><a href="https://www.innovid.com/solutions/creative-management/">Creative Management</a></li>
	<li id="menu-item-1770" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1770"><a href="https://www.innovid.com/solutions/advertising-measurement/">Advertising Measurement</a></li>
	<li id="menu-item-2811" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2811"><a href="https://www.innovid.com/solutions/identity-resolution/">Identity Resolution</a></li>
	<li id="menu-item-1769" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a href="https://www.innovid.com/solutions/sell-side-solutions/">Sell-Side Solutions</a></li>
</ul>
</li>
</ul></div>      <div class="menu-resources-container"><ul id="menu-resources" class="menu"><li id="menu-item-3637" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3637"><a href="/resources">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-3607" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3607"><a href="#">Newsroom</a>
	<ul class="sub-menu">
		<li id="menu-item-234" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-234"><a href="/resources/category/news/">News</a></li>
		<li id="menu-item-235" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-235"><a href="/resources/category/reports/">Reports</a></li>
		<li id="menu-item-236" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="/resources/category/case-studies/">Case Studies</a></li>
		<li id="menu-item-298" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-298"><a href="/resources/category/blog/">Blog</a></li>
		<li id="menu-item-3609" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3609"><a href="/resources/category/videos/">Videos</a></li>
	</ul>
</li>
	<li id="menu-item-3606" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3606"><a href="#">Fundamentals</a>
	<ul class="sub-menu">
		<li id="menu-item-2737" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2737"><a href="https://www.innovid.com/resources/fundamentals-of-ctv-advertising/">Fundamentals of CTV</a></li>
		<li id="menu-item-3661" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3661"><a href="/resources/reimagine-tv-advertising/">Reimagine TV Advertising</a></li>
		<li id="menu-item-4390" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4390"><a href="https://www.innovid.com/resources/the-fundamentals-of-converged-tv-measurement/">Converged TV Measurement</a></li>
	</ul>
</li>
</ul>
</li>
</ul></div>      <div class="menu-about-container"><ul id="menu-about" class="menu"><li id="menu-item-192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-192"><a href="https://www.innovid.com/about/">About</a>
<ul class="sub-menu">
	<li id="menu-item-237" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-237"><a href="/about/#team">Leadership</a></li>
	<li id="menu-item-238" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-238"><a href="/about/#partners">Partners</a></li>
	<li id="menu-item-239" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-239"><a href="/about/#awards">Awards</a></li>
	<li id="menu-item-240" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-240"><a href="/about/#careers">Careers</a></li>
	<li id="menu-item-2042" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2042"><a href="https://www.innovid.com/diversity-equity-inclusion/">Diversity</a></li>
	<li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454"><a href="https://investors.innovid.com/">Investors</a></li>
</ul>
</li>
</ul></div>            <div class="c-footer__newsletter c-footer__newsletter--no-bg">
        <div class="c-footer__newsletter__container c-footer__newsletter__container--no-padding">
          <h5>Subscribe to our newsletter for industry insights, benchmarks, and more.</h5>
                    <p><script src="//marketing.innovid.com/js/forms2/js/forms2.min.js"></script> </p>
<form id="mktoForm_2644"></form>
<p> <script>MktoForms2.loadForm("//marketing.innovid.com", "597-QOT-387", 2644);</script></p>
                  </div>
      </div>
    </div>
    <div class="c-footer__bottom">
      <div class="c-footer__copyright">© 2023 Innovid. All rights reserved.</div>
            <div class="menu-secondary-container"><ul id="menu-secondary" class="menu"><li id="menu-item-201" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-201"><a href="https://www.innovid.com/contact/">Contact</a></li>
<li id="menu-item-272" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-272"><a href="/contact/#offices">Offices</a></li>
<li id="menu-item-983" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-983"><a href="https://www.innovid.com/privacy-policy/">Privacy Policy</a></li>
<li id="menu-item-986" class="opt-out-privacy-popup menu-item menu-item-type-custom menu-item-object-custom menu-item-986"><a>Opt Out</a></li>
<li id="menu-item-1924" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1924"><a href="https://www.innovid.com/innovid-and-consumer-privacy/">Consumer Privacy</a></li>
<li id="menu-item-204" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"><a href="https://www.innovid.com/terms-of-use/">Terms of Use</a></li>
</ul></div>      <div class="menu-sns-container"><ul id="menu-sns" class="menu"><li id="menu-item-197" class="facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-197"><a target="_blank" rel="noopener" href="https://www.facebook.com/innovid"><span>Facebook</span></a></li>
<li id="menu-item-198" class="instagram menu-item menu-item-type-custom menu-item-object-custom menu-item-198"><a target="_blank" rel="noopener" href="https://www.instagram.com/innovid/"><span>Instagram</span></a></li>
<li id="menu-item-199" class="twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-199"><a target="_blank" rel="noopener" href="https://twitter.com/innovid"><span>Twitter</span></a></li>
<li id="menu-item-200" class="linkedin menu-item menu-item-type-custom menu-item-object-custom menu-item-200"><a target="_blank" rel="noopener" href="https://www.linkedin.com/company/innovid_2/"><span>Linkedin</span></a></li>
</ul></div>          </div>
  </div>
</footer>
<!-- opt-out code -->

<div id="oo-popup" style="display:none">
  <span class="button b-close">
    <span>X</span>
  </span>
  <div class="oo-header">Opt-Out</div>
  <span id="oo-msg">Click OK to opt-out of Innovid advertising cookies.</span><br><br>
  <div align="right"><span class="button" id="oo-button-ok"><span>OK</span></span></div>
</div>
<!-- end opt-out code -->

<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2529493.js"></script>
<!-- End of HubSpot Embed Code -->
<img alt="Cleantalk Pixel" title="Cleantalk Pixel" id="apbct_pixel" style="display: none;" src="https://moderate2-v4.cleantalk.org/pixel/f64ea4ee247d5123c5763cf7e8a5745d.gif"><script type="text/javascript" src="https://www.innovid.com/wp-content/plugins/duracelltomi-google-tag-manager/dist/js/gtm4wp-form-move-tracker.js?ver=1.19.1" id="gtm4wp-form-move-tracker-js"></script>
<script type="text/javascript" id="app-js-extra">
/* <![CDATA[ */
var Ajax = {"ajax_url":"https:\/\/www.innovid.com\/wp-admin\/admin-ajax.php"};
var Innovid = {"path":"https:\/\/www.innovid.com\/wp-content\/themes\/innovid"};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.innovid.com/wp-content/themes/innovid/public/js/app.js?ver=1704846853" id="app-js"></script>
<script type="text/javascript" src="https://www.innovid.com/wp-content/themes/innovid-2019/assets/dist/main.7a9e8fc471dd93ac20ae.js" id="main.js-js"></script>
</main>
<link rel="stylesheet" href="//demo.innovid.com/site/assets/bPopup.css">
<script src="//demo.innovid.com/site/assets/jquery.bpopup-0.11.0.min.js"></script>
<script>
  (function($) {
    var ooSuccessMsg = "Your settings have been applied. You are now opted-out.<br><br>Note: Deleting your cookies or changing computers or devices<br>after opting-out, will require you to opt-out again.";
    var ooFailureMsg = "An error occured. Please try again later.";
    var ooInitialMsg = "Click OK to opt-out of Innovid advertising cookies.";
    var ooInProgressMsg = "Processing...";

    $(function() {
      $('.opt-out-privacy-popup').on('click', function(e) {
        e.preventDefault();
        $.ooPopUp();
      });

      $('#oo-button-ok').on('click', function(e) {
        e.preventDefault();
        $('#oo-msg').html(ooInProgressMsg);

        $.ajax({
          url: "https://dts.innovid.com/dnt/?action_id=8",
          jsonp: "callback",
          dataType: "jsonp"
        }).done(function() {
          $('#oo-msg').html(ooSuccessMsg);
          $('#oo-button-ok').hide();
          $('#oo-popup').bPopup().reposition(1);
        }).fail(function() {
          $('#oo-msg').html(ooFailureMsg);
          $('#oo-button-ok').hide();
          $('#oo-popup').bPopup().reposition(1);
        });
      });
    });

    $.ooPopUp = function() {
      $('#oo-msg').html(ooInitialMsg);
      $('#oo-button-ok').show();
      var ooPopUp = $('#oo-popup').bPopup();
    };
  })(jQuery);
</script>
</body>

</html>
