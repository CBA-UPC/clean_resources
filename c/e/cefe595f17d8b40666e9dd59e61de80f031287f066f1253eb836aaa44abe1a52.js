!function(){function h(b){var e=[];if(p.some(function(a){if(a.Tag===b)return e=a.CategoryId,!0;var c,d,f,q=(c=a.Tag,d=-1!==c.indexOf("http:")?c.replace("http:",""):c.replace("https:",""),-1!==(f=d.indexOf("?"))?d.replace(d.substring(f),""):d);return!b||-1===b.indexOf(q)&&-1===a.Tag.indexOf(b)?void 0:(e=a.CategoryId,!0)}),!e.length&&r){var a=function(a){var c=document.createElement("a");c.href=a;a=c.hostname.split(".");return-1!==a.indexOf("www")||2<a.length?a.slice(1).join("."):c.hostname}(b);t.some(function(b){return b===
a})&&(e=["C0004"])}return e}function g(b){return b&&window.OptanonActiveGroups&&b.every(function(b){return-1!==window.OptanonActiveGroups.indexOf(b)})}function k(b){return-1!==(b.getAttribute("class")||"").indexOf("optanon-category")}function l(b){return u&&b.hasAttribute("data-ot-ignore")}var p=JSON.parse('[{"Host":"my.smartrecruiters.com","Tag":"https://my.smartrecruiters.com/smart-profile/identify","CategoryId":["C0003"]},{"Host":"smartrecruiters.com","Tag":"https://script.hotjar.com/modules.e6d659b18986716fc817.js","CategoryId":["C0002"]},{"Host":"script.hotjar.com","Tag":"https://script.hotjar.com/modules.fe219d49c78aed3ec89a.js","CategoryId":["C0002"]},{"Host":"facebook.com","Tag":"https://www.facebook.com/tr","CategoryId":["C0004"]},{"Host":"doubleclick.net","Tag":"https://ad.doubleclick.net/ddm/activity/src\x3d-1;type\x3datsei475;cat\x3datsth780;u1\x3d320;u2\x3d320;u3\x3d320;dc_lat\x3d;dc_rdid\x3d;tag_for_child_directed_treatment\x3d;tfua\x3d;npa\x3d;ord\x3d123456789","CategoryId":["C0004"]},{"Host":"appcast.io","Tag":"https://click.appcast.io/smartrecruiters-te8/a31.png","CategoryId":["C0004"]},{"Host":"video.digi-me.com","Tag":"https://video.digi-me.com/out_track/flv2/cev/CEVLP0001","CategoryId":["C0003"]},{"Host":"smartrecruiters.com","Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"]},{"Host":"smartrecruiters.com","Tag":"https://script.hotjar.com/modules.fe219d49c78aed3ec89a.js","CategoryId":["C0002"]}]'),
r=JSON.parse("true"),u=JSON.parse("true"),t="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" "),m=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,
function(b){Array.prototype.forEach.call(b.addedNodes,function(a){var b,c;if(1===a.nodeType&&-1!==m.indexOf(a.tagName.toLowerCase())&&!k(a)&&!l(a))if("script"===a.tagName.toLowerCase()){if((c=h(b=a.src||"")).length){var d=c.join("-"),e=a.getAttribute("class")?a.getAttribute("class"):"";a.setAttribute("class","optanon-category-"+d+" "+e);g(c)||(a.type="text/plain");var f=function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",f)};a.addEventListener("beforescriptexecute",
f)}}else(c=h(b=a.src||"")).length&&(d=c.join("-"),e=a.getAttribute("class")?a.getAttribute("class"):"",a.setAttribute("class","optanon-category-"+d+" "+e),g(c)||(a.removeAttribute("src"),a.setAttribute("data-src",b)))});var a=b.target;if(b.attributeName&&(!k(a)||!l(a)))if("script"===a.nodeName.toLowerCase()){if((e=h(d=a.src||"")).length){b=e.join("-");var f=a.getAttribute("class")?a.getAttribute("class"):"";a.setAttribute("class","optanon-category-"+b+" "+f+" ");g(e)||(a.type="text/plain");var c=
function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",c)};a.addEventListener("beforescriptexecute",c)}}else if(-1!==m.indexOf(b.target.nodeName.toLowerCase())){var d,e;(e=h(d=a.src||"")).length&&(b=e.join("-"),f=a.getAttribute("class")?a.getAttribute("class"):"",a.setAttribute("class","optanon-category-"+b+" "+f),g(e)||(a.removeAttribute("src"),a.setAttribute("data-src",d)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,
attributes:!0,attributeFilter:["src"]});var n=document.createElement;document.createElement=function(){for(var b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];if("script"!==b[0].toLowerCase()&&-1===m.indexOf(b[0].toLowerCase()))return n.bind(document).apply(void 0,b);var a=n.bind(document).apply(void 0,b),f=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var d="";"string"==typeof c?d=c:c instanceof Object&&(d=c.toString());
d=h(d);return!d.length||"script"!==b[0].toLowerCase()||k(a)||g(d)||l(a)?!d.length||-1===m.indexOf(b[0].toLowerCase())||k(a)||g(d)||l(a)?f("src",c):(a.removeAttribute("src"),f("data-src",c)):(f("type","text/plain"),f("src",c)),!0}},type:{set:function(b){var c=h(a.src||"");b=!c.length||k(a)||g(c)||l(a)?b:"text/plain";return f("type",b),!0}},class:{set:function(b){var c=h(a.src);!c.length||k(a)||g(c)||l(a)?f("class",b):(c=c.join("-"),f("class","optanon-category-"+c+" "+b));return!0}}}),a.setAttribute=
function(b,d,e){"type"!==b&&"src"!==b||e?f(b,d):a[b]=d},a}}();="home" class="site-branding__logo">
<div class="nav-logo">
<div class="hover"></div>
<img src="/_flysystem/s3-flysystem/nav_logo_0.png" alt="Home" />
</div>
</a>
</div>

</div>

<button type="button" class="menu-btn active">
<img src="/themes/custom/universal/src/img/icons/icon_menu.png" alt="Open Menu">
</button>
<button type="button" class="close-btn">
<img src="/themes/custom/universal/src/img/icons/icon_close.png" alt="Close Menu">
</button>
<div class="nav-holder">
<nav class="nav-btns">












<ul id="homePrimaryMainNav" class="navigation__menu navigation--level-1">
<li class="home-btn">
<a href="/" class="navigation__link nav-btn navigation__link--level-1" aria-label="Home" data-drupal-link-system-path="&lt;front&gt;">Home</a>
</li>
<li class="navigation__item navigation__item--level-1 navigation__item--has-children drop-menu">
<a href="/about" class="navigation__link nav-btn navigation__link--level-1" aria-label="ABOUT" data-drupal-link-system-path="node/150">ABOUT</a>
<img src="/themes/custom/universal/src/img/icons/dropdown-arrow-down.svg" class="fa-3x submenu-drop-arrow" aria-hidden="true" alt /><div style="clear: both;"></div>
<ul id="homePrimarySubNav" class="border-line navigation__sub-menu drop-content navigation--level-2">
<li class="navigation__item navigation__item--level-2">
<a href="/leadership" class="navigation__link nav-btn navigation__link--level-2" aria-label="LEADERSHIP" data-drupal-link-system-path="node/154">LEADERSHIP</a>
</li>
<li class="navigation__item navigation__item--level-2  navigation__item--last">
<a href="https://corporate.comcast.com/" class="external-link navigation__link nav-btn navigation__link--level-2" target="_blank" aria-label="COMCAST">COMCAST</a>
</li>
</ul>
</li>
<li class="navigation__item navigation__item--level-1">
<a href="/history" class="navigation__link nav-btn navigation__link--level-1" aria-label="HISTORY" data-drupal-link-system-path="node/660">HISTORY</a>
</li>
<li class="navigation__item navigation__item--level-1 navigation__item--has-children drop-menu">
<a href="/impact" class="navigation__link nav-btn navigation__link--level-1" aria-label="Impact" data-drupal-link-system-path="node/318">Impact</a>
<img src="/themes/custom/universal/src/img/icons/dropdown-arrow-down.svg" class="fa-3x submenu-drop-arrow" aria-hidden="true" alt /><div style="clear: both;"></div>
<ul id="homePrimarySubNav" class="border-line navigation__sub-menu drop-content navigation--level-2">
<li class="navigation__item navigation__item--level-2">
<a href="https://www.nbcuniversal.com/diversity-equity-inclusion" class="navigation__link nav-btn navigation__link--level-2" aria-label="DIVERSITY, EQUITY &amp; INCLUSION">DIVERSITY, EQUITY &amp; INCLUSION</a>
</li>
<li class="navigation__item navigation__item--level-2">
<a href="/environment" class="navigation__link nav-btn navigation__link--level-2" aria-label="ENVIRONMENT" data-drupal-link-system-path="node/9981">ENVIRONMENT</a>
</li>
<li class="navigation__item navigation__item--level-2  navigation__item--last">
<a href="https://www.nbcuniversal.com/csr" class="navigation__link nav-btn navigation__link--level-2" aria-label="SOCIAL IMPACT">SOCIAL IMPACT</a>
</li>
</ul>
</li>
<li class="navigation__item navigation__item--level-1">
<a href="/brands" class="navigation__link nav-btn navigation__link--level-1" aria-label="BRANDS" data-drupal-link-system-path="brands">BRANDS</a>
</li>
<li class="navigation__item navigation__item--level-1">
<a href="/newsroom" class="navigation__link nav-btn navigation__link--level-1" aria-label="NEWSROOM" data-drupal-link-system-path="newsroom">NEWSROOM</a>
</li>
<li class="navigation__item navigation__item--level-1  navigation__item--last">
<a href="https://www.nbcunicareers.com" target="_blank" class="navigation__link nav-btn navigation__link--level-1" aria-label="CAREERS">CAREERS</a>
</li>
</ul>






<div id="block-socialblock" class="block block-search block-block-content block-block-content51d6b15f-b720-4081-99b5-ceef91f80f66">
<div class="social-btns">
<a href="https://www.linkedin.com/company/nbcuniversal-inc-/" target="_blank" arial-label="See more about Follow us on LinkedIn" class="social-btn">
<i class="fab fa-linkedin-in" aria-hidden="true" title="Follow us on LinkedIn"></i>
<span class="sr-only">Follow us on LinkedIn</span>
</a>
<a href="https://twitter.com/nbcuniversal" target="_blank" class="social-btn" arial-label="See more about Follow us on Twitter">
<i class="fab fa-twitter" aria-hidden="true" title="Follow us on Twitter"></i>
<span class="sr-only">Follow us on Twitter</span>
</a>
<a href="https://www.facebook.com/nbcuniversal/" target="_blank" class="social-btn" arial-label="See more about Like us on Facebook">
<i class="fab fa-facebook-f" aria-hidden="true" title="Like us on Facebook"></i>
<span class="sr-only">Like us on Facebook</span>
</a>
<a href="https://www.instagram.com/nbcuniversal/" target="_blank" class="social-btn" arial-label="See more about Like us on Instagram">
<i class="fab fa-instagram" aria-hidden="true" title="Like us on Instagram"></i>
<span class="sr-only">instagram</span>
</a>
<a href="/search" target="_blank" class="social-btn search" arial-label="See more about Search">

<i class="fab fa-sistrix" aria-hidden="true" title="Search"></i>
<span class="sr-only">Search</span>
</a>
</div>
</div>


</nav>
</div>
<button type="button" class="close-btn">
<img src="/themes/custom/universal/src/img/icons/icon_close.png" alt="Close Menu">
</button>
</header>



<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>




<div>
<div class="highlighted">
<aside class="layout-container section clearfix" role="complementary">




<div>




<div data-drupal-messages-fallback class="hidden"></div>

</div>

</aside>
</div>
<div id="main-wrapper" class="layout-main-wrapper layout-container clearfix">
<div id="main" class="layout-main clearfix">
<main id="content" class="column main-content" role="main">
<section class="section">
<a id="main-content" tabindex="-1"></a>




<div>




<div id="block-universal-content">




<div class="parent-privacy-policy">
<div class="privacy-policy">
<div class="header">
<h1 class="title">
NBCU Privacy Center
</h1>
<div class="tab-clone ui-tabs ui-corner-all ui-widget ui-widget-content">
<ul class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
<li id="privacyorder0" class="ui-state-default  ui-state-active "><a aria-label="See more about NBCU Privacy Center" href="/privacy" class="ui-tabs-anchor">Privacy Policy</a></li>
<li id="privacyorder1" class="ui-state-default "><a aria-label="See more about NBCU Privacy Center" href="/privacy/cookies" class="ui-tabs-anchor">Cookie Notice</a></li>
<li id="privacyorder2" class="ui-state-default "><a aria-label="See more about NBCU Privacy Center" href="/privacy/california-consumer-privacy-act" class="ui-tabs-anchor">California Notice</a></li>
<li id="privacyorder3" class="ui-state-default "><a aria-label="See more about NBCU Privacy Center" href="/privacy/privacy-faqs" class="ui-tabs-anchor">Privacy FAQs</a></li>
</ul>
</div>
<div class="dclone"><div class="pp-date"> Last Updated: December 7, 2023 </div></div> <div class="filters">
<div class="custom-select language">
<ul id="news_opt_list" tabindex="-1" role="listbox" aria-labelledby="news_select" aria-multiselectable="false" class="custom-select-list hidden">
<li role="option" value="/privacy" id="news_opt_list_53" data-value="53" lang="en">English</li>
<li role="option" value="/privacy-policies/privacy-czech" id="news_opt_list_185" data-value="185" lang="cs">Ceština</li>
<li role="option" value="/privacy-policy/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96" id="news_opt_list_82" data-value="82" lang="zh">Chinese</li>
<li role="option" value="/privacy-policies/privacy-serbian" id="news_opt_list_162" data-value="162" lang="sr">Cрпски</li>
<li role="option" value="/privacy-policies/privacy-danish" id="news_opt_list_145" data-value="145" lang="da">Danish</li>
<li role="option" value="/privacy-policies/privacy-german" id="news_opt_list_134" data-value="134" lang="de">Deutsch</li>
<li role="option" value="/privacy-policies/privacy-latinamerica" id="news_opt_list_91" data-value="91" lang="es">Español (Americas)</li>
<li role="option" value="/privacy/spanish" id="news_opt_list_54" data-value="54" lang="es">Español (Spain)</li>
<li role="option" value="/privacy-policies/privacy-french" id="news_opt_list_137" data-value="137" lang="fr">Français</li>
<li role="option" value="/privacy-policies/privacy-croatian" id="news_opt_list_152" data-value="152" lang="hr">Hrvatski</li>
<li role="option" value="/privacy-policies/privacy-italian" id="news_opt_list_55" data-value="55" lang="it">Italiano</li>
<li role="option" value="/privacy-policies/privacy-japanese" id="news_opt_list_131" data-value="131" lang="ja">Japanese</li>
<li role="option" value="/privacy-policies/privacy-korean" id="news_opt_list_150" data-value="150" lang="ko">Korean</li>
<li role="option" value="/privacy-policies/privacy-hungarian" id="news_opt_list_157" data-value="157" lang="hu">Magyar</li>
<li role="option" value="/privacy-policies/privacy-dutch" id="news_opt_list_113" data-value="113" lang="nl">Nederlands</li>
<li role="option" value="/privacy-policies/privacy-polish" id="news_opt_list_119" data-value="119" lang="pl">Polski</li>
<li role="option" value="/privacy-policies/privacy-portugese-portugal" id="news_opt_list_102" data-value="102" lang="pt">Português (Portugal)</li>
<li role="option" value="/privacy-policies/privacy-portuguese" id="news_opt_list_108" data-value="108" lang="pt-br">Português(Brasil)</li>
<li role="option" value="/privacy-policies/privacy-romanian" id="news_opt_list_167" data-value="167" lang="ro">Român</li>
<li role="option" value="/privacy-policies/privacy-slovensky" id="news_opt_list_85" data-value="85" lang="sk">Slovenský</li>
<li role="option" value="/privacy-policies/privacy-slovenian" id="news_opt_list_178" data-value="178" lang="sl">Slovenščina</li>
<li role="option" value="/privacy-policies/privacy-swedish" id="news_opt_list_125" data-value="125" lang="sv">Swedish</li>
</ul>
<button aria-haspopup="listbox" aria-labelledby="news_select news_button" id="news_button" class="custom-select-button">
<span class="language-align" lang="en">English<span>
<span class="custom-select-clear-language" aria-label="clear field"></span>
</button>
</div>
</div>
</div>
<div class="styling-element-mobile">
</div>
</div>
<div class="privacy-policy-wrapper">
<div class="styling-element">
<div></div></div>
<div id="tabs" class="ui-tabs ui-corner-all ui-widget ui-widget-content">
<div id="custom-block-printfriendly">




<div>
<a href="https://www.printfriendly.com/print?url=https://www.nbcuniversal.com/taxonomy/term/56?brandA=Peacock&intake=Peacock" class="printfriendly" onclick="window.print(); return false;" title="Printer Friendly, PDF & Email"><img src="//cdn.printfriendly.com/buttons/printfriendly-pdf-button-nobg.png" alt="Printer Friendly, PDF & Email" /></a>
</div>

</div>
<div id="tabs-1" class="ui-tabs-panel ui-corner-bottom ui-widget-content print-only" aria-hidden="false" style>
<h1 class="privacy-title-container">
<span class="privacy-title print-only pf-title">NBCUniversal Privacy Policy</span>
</h1>
<div class="privacy-body print-only">
<p>This Privacy Policy explains how NBCUniversal and its affiliates (“ <strong>NBCUniversal Affiliates</strong>”) (collectively “ <strong>we</strong>” or “ <strong>us</strong>”) collect, use, and share information from or about you when you use our websites, downloadable applications, browser extensions, interactive TV applications, voice-activated skills, other digital services, connected devices such as theme-park devices, and off-line services that link to this policy,  or if you engage in business with us (“ <strong>NBCUniversal Services </strong>or <strong>Services</strong>”).  </p>
<p>This Privacy Policy applies to the NBCUniversal Services throughout the world. Any additional privacy terms that relate to specific NBCUniversal products or services should be read in conjunction with this Policy.</p>
<p>As one of the world’s leading media and entertainment companies, we offer NBCUniversal Services through a wide range of businesses and under many different brands. The data controller of your personal information will be the NBCUniversal company which provides services to you or does business with you. You can find out more information about NBCUniversal, including a list of our NBCUniversal Affiliates, <a href="/brands">here</a> .</p>
<p>PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE HANDLE YOUR INFORMATION. BY USING THE SERVICES, YOU ACKNOWLEDGE YOU HAVE READ AND UNDERSTAND THE PRIVACY POLICY AND THAT WE WILL COLLECT, USE AND SHARE YOUR INFORMATION AS SET FORTH BELOW.</p>
</div>
<div class="accordion-expand-holder print-no">
<button type="button" value="Expand All" id="speak-trigger" class="open accordion-expand-all">Expand All<i class="fa fa-plus"></i></button>
</div>
<div class="accordion set print-only ui-accordion ui-widget ui-helper-reset">
<div id="accordionheader1" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>PERSONAL INFORMATION WE COLLECT AND PURPOSES</h3>
<button id="accordionheader1" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="PERSONAL INFORMATION WE COLLECT AND PURPOSES" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="PERSONAL INFORMATION WE COLLECT AND PURPOSES" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="personal_information_we_collect_and_purposes">
<p>The tables below explain the categories of information we collect and the purposes for which we use them. &nbsp;Each NBCUniversal Service’s collection and use may vary. Please note that we may use any or all of this information to comply with the law, detect or prevent fraud, for safety and security purposes, and to defend our legal rights. Further detail about each of the purposes is set out in the “Additional Information on Purposes” table below.</p>
<div class="two-col">
<table border="0" cellpadding="0" cellspacing="0" tabindex="0">
<caption colspan="2">
<p><strong>Information you provide to us:</strong></p>
</caption>
<thead>
<tr class="pp-tr pp-tr-row2">
<th>
<p><strong>Categories of personal information we collect</strong></p>
</th>
<th>
<p><strong>Purposes of use&nbsp;(“Processing Purposes” described in more detail below)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Contact and account registration&nbsp;information</strong></p>
<p>For example: name, email, postal address, telephone number, account username and password, business contact information, and any information you may provide to us at an event or in person.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Build and manage business-to-business relationships</li>
<li>Market and advertise for third parties</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Identification information, and demographics, and interests</strong></p>
<p>For example: as permitted by law, date of birth, race*, ethnicity*, gender, interests, lifestyle information, school and sports information, photos, social media credentials, including identification information about friends, contacts or referrals you provide.&nbsp;</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security&nbsp;</li>
<li>Market and advertise for third parties</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Transactional</strong></p>
<p>For example: credit/debit card details, purchase history, delivery address, membership information, reservations and other travel related information, meal preferences, and the personal details of your guests</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Market and advertise for third parties</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>User-generated content</strong></p>
<p>For example: photos, videos, audio, and other information you may submit to us, such as comments on our forums.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Safety and security</li>
<li>Market and advertise for third parties</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Research and feedback</strong></p>
<p>For example: comments that you send us through online forms and social media platforms, by email, over the phone, by mail, or in surveys.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Biometric identifiers*</strong></p>
<p>For example: as permitted by law, facial scans or fingerprints we collect at some of our theme parks, studios, our offices.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Safety and security</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Health Data*</strong></p>
<p>For example: as permitted by law, vaccine or symptom related information</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Safety and security</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Audio and video</strong></p>
<p>For example: audio recordings of customer service calls or security video footage if you visit one of our properties.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Safety and security</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>
<div class="two-col">
<table border="0" cellpadding="0" cellspacing="0" tabindex="0">
<caption colspan="2">
<p><strong>Information we collect automatically from you and/or your device: </strong></p>
</caption>
<thead>
<tr class="pp-tr pp-tr-row2">
<th>
<p><strong>Categories of personal information we collect</strong></p>
</th>
<th>
<p><strong>Purposes of use&nbsp;(“Processing Purposes” described in more detail below)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Device information and identifiers</strong></p>
<p>For example: IP address, cookie IDs, browser type and language, operating system, platform type, device type, and advertising and app identifiers.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Market and advertise for third parties</li>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Connection and Usage&nbsp;(including information collected through cookies)</strong></p>
<p>For example: domain names, browsing activity, scrolling and keystroke activity, advertisements viewed, forms or fields you complete or partially complete, search terms, whether you open an email, content you view and duration, quality of the service and interaction with the content, logs, and other similar information. If these events occur while you are offline, they may be logged and uploaded to us when you next connect.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Market and advertise for third parties</li>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Geolocation*</strong></p>
<p>For example: city, state and ZIP code associated with your IP address or derived through Wi-Fi triangulation.</p>
<p>We will ask for your permission before using your precise location from GPS-based functionality on your mobile devices.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Market and advertise for third parties</li>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>
<div class="three-col">
<table border="0" cellpadding="0" cellspacing="0" tabindex="0">
<caption colspan="3">
<p><strong>Information we collect from third parties:</strong></p>
</caption>
<thead>
<tr class="pp-tr pp-tr-row2">
<th>
<p><strong>Categories of personal information we collect</strong></p>
</th>
<th>
<p><strong>Purposes of use&nbsp;(“Processing Purposes” described in more detail below)</strong></p>
</th>
<th>
<p><strong>Sources of Information</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Information from public and commercial sources</strong></p>
<p>For example: demographic including at a household level, contact information, inferences about your preferences, viewing and other consumption choices, loyalty program membership, and purchasing data.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience and make recommendations</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Build and manage business-to-business relationships</li>
<li>Market and advertise for third parties</li>
<li>Safety and security</li>
</ul>
</td>
<td>
<ul>
<li>Advertising providers</li>
<li>Analytics providers</li>
<li>Marketers</li>
<li>Partners (such as for sweepstakes partners)</li>
<li>Consumer data resellers</li>
<li>Public records databases</li>
<li>Related Companies</li>
<li>Content partners</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Social Media Information</strong></p>
<p>For example: if you interact with us through a social media service or log in using social media credentials, depending on your social media settings, we may have access to your information from that social network such as your name, email address, friend list, photo, age, gender, location, birthday, social networking ID, current city, your comments about our Services, and the people/sites you follow.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Market and advertise for third parties</li>
</ul>
</td>
<td>
<ul>
<li>Social media networks</li>
<li>Partners of social media networks</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Third Party Partners in Connection with providing the NBCUniversal Services </strong></p>
<p>For example: contact information such as authentication information, account legitimacy, search requests, log events and device identifiers such as IP addresses, device IDs or other unique identifiers.</p>
</td>
<td>
<ul>
<li>Provide the NBCUniversal Services</li>
<li>Personalize your experience</li>
<li>Provide seamless experience across platforms and devices</li>
<li>Safety and security</li>
<li>Send you NBCUniversal marketing and advertising</li>
<li>Market and advertise for third parties</li>
</ul>
</td>
<td>
<ul>
<li>Payment Service Providers</li>
<li>TV or Internet Service Providers</li>
<li>Media Companies, Streaming Media Device Providers or Retailers</li>
<li>Mobile Phone Carriers</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>
<div class="three-col">
<p>*Please note: this information is considered “sensitive” under certain laws, and we process this information in accordance with applicable legal requirements.</p>
<table border="0" cellpadding="0" cellspacing="0" tabindex="0">
<caption colspan="3">
<p><strong>Additional information that we collect for business-to-business relationships only</strong></p>
</caption>
<thead>
<tr class="pp-tr pp-tr-row2">
<th>
<p><strong>Categories of personal information we collect</strong></p>
</th>
<th>
<p><strong>Purposes of use&nbsp;(“Processing Purposes” described in more detail below)</strong></p>
</th>
<th>
<p><strong>Source of Information</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Business contact information</strong></p>
<p>For example: company name, your name, email address, telephone number and job.</p>
</td>
<td>
<ul>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
<td>
<ul>
<li>You</li>
<li>Your company</li>
<li>Trade associations</li>
<li>Social media</li>
<li>Business data resellers</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Transactional information</strong></p>
<p>For example: bank details of suppliers, credit/debit card details, purchase history, delivery address.</p>
</td>
<td>
<ul>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
<td>
<ul>
<li>You</li>
<li>Publicly available sources</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Demographics</strong></p>
<p>For example (as permitted by law): ethnicity (minority owned businesses), gender (women-owned businesses)</p>
</td>
<td>
<ul>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
<td>
<ul>
<li>You</li>
<li>Your company</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Due diligence information</strong></p>
<p>For example: contact information, nationality (as permitted by law), job title, age, date of birth, gender, country of residence, employment and education information, public, religious, political or trade union role (each as permitted by laws), personal and professional affiliations, connections to criminal activities or offences related to money laundering.</p>
</td>
<td>
<ul>
<li>Compliance and risk management activities for business-to-business relationships</li>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
<td>
<ul>
<li>You or your company’s responses to our due diligence questions</li>
<li>Third party risk, compliance screening and data validation tools and databases, such as those provided by LexisNexis Risk Solutions. Click&nbsp;<a href="https://risk.lexisnexis.co.uk/processing-notices/business">here</a> for more information.</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Events Information</strong></p>
<p>For example: travel information including passport and visa, meal preferences and restrictions, payment details, and guest’s details.</p>
</td>
<td>
<ul>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
<td>
<ul>
<li>You</li>
<li>Your company</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Social Media and Lifestyle Information</strong></p>
<p>For example: if you interact with us on social media or other platforms as an influencer or an athlete, we may have access to your name, photos, age, gender, location, birthday, social networking ID, current city, interests, lifestyle information, list of followers, engagement with your posts, school and sports information.</p>
</td>
<td>
<ul>
<li>Build and manage business-to-business relationships</li>
</ul>
</td>
<td>
<ul>
<li>You</li>
<li>Your company</li>
<li>Your representative</li>
<li>Your sponsor and other partners, such as marketplaces</li>
<li>Social media networks</li>
</ul>
</td>
</tr>
</tbody>
</table>
</div>
<table border="0" cellpadding="0" cellspacing="0" tabindex="0" width="633">
<thead>
<tr class="pp-tr">
<th>
<p><strong>Additional information on purposes of use</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Provide the NBCUniversal Services, for example:</strong></p>
<ul>
<li>responding to your requests or inquiries, including technical support</li>
<li>fulfilling orders you have placed</li>
<li>sending you service-related communications</li>
<li>authenticating you or verifying your identity</li>
<li>providing ticketing, payment services, mapping guidance, and offers</li>
<li>displaying content you generate, such as video and comments</li>
<li>carrying out research and analytics for uses including improving our Services and developing new ones</li>
<li>processing your information for promotional campaigns such as sweepstakes and contests, and for surveys, online and offline panels and focus groups</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Personalize your experience, for example:</strong></p>
<ul>
<li>providing you with customized product experience, including personalized newsletters, viewing and other content recommendations from NBCUniversal, our partners and other organizations</li>
<li>creating and updating profiles and audience segments that can be used for analytics, interested-based advertising and marketing on the NBCUniversal Services, television, third party services and platforms, mobile apps and/or websites, connected devices and offline</li>
<li>using inferences about your preferences and interests for any and all of the above purposes</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Send you NBCUniversal marketing and advertising, for example:</strong></p>
<ul>
<li>sending you customized newsletters, surveys and information about products, services and promotions offered by NBCUniversal (with your consent where required) based on your activities and interests including at a household level</li>
<li>providing you with NBCUniversal advertising, including targeted advertising, based on your activities and interests including at a household level</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Provide a seamless experience across platforms and devices, for example:</strong></p>
<ul>
<li>identifying you when you log into the NBCUniversal Service on multiple devices or web browsers to provide continuity and to match your interests across devices for the purposes of analytics, advertising, reporting and to improve the Services</li>
<li>identifying you if your devices have attributes suggesting that they may be used by the same individual or household for purposes of analytics, advertising, reporting and to improve the Services</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Build and manage business-to-business relationships, for example:</strong></p>
<ul>
<li>pursuing potential business opportunities, including identifying and contacting the correct person within the company</li>
<li>sending communications for business purposes</li>
<li>managing customer, supplier and other business relationships</li>
<li>sending event invitations, marketing emails and campaigns, and tracking the effectiveness of such communications</li>
<li>issuing or paying invoices, and fulfilling contractual commitments</li>
<li>providing business contacts with access to our systems, and managing that access</li>
<li>communicating with you as an influencer about a shared social media campaign, and associated analytics</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Market and advertise for third parties, for example:</strong></p>
<ul>
<li>send you newsletters, promotional emails, surveys and information about products, services and promotions offered by our partners and other organizations with which we work</li>
<li>customize content that our third-party partners deliver on the Services (e.g., targeted third-party advertising)</li>
<li>create and update inferences about you and audience segments that can be used for interested-based advertising and marketing on the Services, third party services and platforms, and mobile apps</li>
<li>create profiles about you, including adding and combining information we obtain from third parties and matching your interests across devices, which may be used for third-party marketing and advertising, including targeted advertising, on the NBCUniversal Services, television, third party services and platforms, mobile apps and/or websites, connected devices and offline</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Compliance and risk management activities for business-to-business relationships, for example:</strong></p>
<ul>
<li>compliance with laws and regulations</li>
<li>managing third party and other risks to our business</li>
<li>protecting the reputation of our businesses</li>
<li>following the principles of ethical business conduct set out in our Code of Conduct</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Safety and security purposes, for example:</strong></p>
<ul>
<li>protecting the safety and security of users and visitors to the NBCUniversal Services</li>
<li>protecting our digital and physical properties</li>
<li>detecting and preventing other activities that may be illegal or in violation of our Terms of Service for that respective NBCUniversal Service</li>
<li>protecting against threats to our talent, leadership, workforce and organization</li>
</ul>
</td>
</tr>
</tbody>
</table>
<p>We may combine all the information we collect from or receive about you for the outlined purposes. We may aggregate or deidentify your information and may use, share, rent or sell aggregated or deidentified information for any purpose, and such information is not subject to this Privacy Policy.</p>
</div>
<div id="accordionheader2" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>WHEN WE SHARE YOUR INFORMATION</h3>
<button id="accordionheader2" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="WHEN WE SHARE YOUR INFORMATION" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="WHEN WE SHARE YOUR INFORMATION" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="when_we_share_your_information">
<p>We may disclose your information to:</p>
<p>&nbsp;</p>
<ul>
<li><strong>Related Companies:</strong>&nbsp;NBCUniversal Affiliates, such as Sky, as well as our parent company Comcast Corporation and its affiliate, Comcast Cable, to help better tailor services, products, marketing, and advertising to you and to other existing and potential customers. We may share identification and demographics, device information and identifiers, and research and feedback for purposes such as improving and tailoring services.&nbsp; In addition business information may be shared for business operational purposes.&nbsp;For Fandango Brands, including Fandango, Flixster, MovieTickets.com, Vudu, RottenTomatoes, and Activaterewards.com, they may also share data with Warner Bros., as outlined in <a href="https://www.fandango.com/policies/privacy-policy">Fandango's Privacy Policy</a>.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Advertisers, Advertising Networks, and Other Third Parties:&nbsp;</strong>We may disclose information about how you use the NBCUniversal Services and interact with content or ads to better tailor services, products, marketing and advertising on our Services and on third-party platforms. To enable these purposes, we may share certain demographics and interest<span style="font-size:11.0pt"><span style="line-height:107%"><span style="font-family:&quot;Calibri&quot;,sans-serif">&nbsp;</span></span></span>information, user-generated content, device information and identifiers, connection and usage data, geolocation data, public and commercial information, and social media information. These third parties may use their own tracking technologies to collect or request information about you, please see our&nbsp;<a href="/privacy/cookies">Cookie Notice</a> for details.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Partners</strong>: We may disclose your information to certain third party partners. Depending on the partnership, we may disclose certain information including contact information (at your direction), identification and demographic and interest<span style="font-size:11.0pt"><span style="line-height:107%"><span style="font-family:&quot;Calibri&quot;,sans-serif">&nbsp;</span></span></span>information, transactional information, user-generated content that you provide, research and feedback, device information and identifiers, connection and usage information, public and commercial information, and social media information. Partners may use your information pursuant to their own policies.
<p>&nbsp;</p>
<ul>
<li>For instance, when you direct us to disclose your personal information to another company to fulfill your request, such as:
<ul>
<li>If you enter a contest or sweepstakes sponsored by a third party, we may disclose the information you provide for that entry with the sponsor.</li>
<li>When using GolfNow’s sites and services, we will provide your information to golf clubs to enable you to book reservations or access on-site amenities. &nbsp;When using SportsEngine, your information may be shared with the coaches and sports teams you join.&nbsp;&nbsp;</li>
<li>When you book travel packages with us that include goods or services provided by third-party partners, such as airlines, ground transportation providers, third-party hotels, and travel insurance providers.</li>
<li>For service authentication.</li>
<li>If you make a purchase for a third-party product in one of our online shops, we may disclose the information you provide to allow for the fulfillment of that order.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Social Networks:&nbsp;</strong>We may disclose your information to social media platforms for example, if you click on a Facebook “like” button on an NBCUniversal Service, the “like” may appear on your Facebook account. Or you may choose to provide information directly on these platforms using sharing plug-ins. To control this sharing of information, please review and adjust your privacy settings for the relevant social network. Depending on your privacy settings and actions on such network, we may disclose contact information, identification and demographic and interest information, user-generated content, device information and identifiers, connection and usage data, and social media information. Please be aware that Facebook Ireland is a Joint Controller of the Joint Processing (as set out <a href="https://www.facebook.com/legal/terms/businesstools_jointprocessing">here</a>). Further information (including about the lawful basis relied upon by Facebook Ireland and how you may exercise your data subject rights) can be found in Facebook Ireland's Data Policy <a href="https://www.facebook.com/about/privacy">here</a>. We have contracted with Facebook Ireland to determine our respective responsibilities for compliance with GDPR with regard to the Joint Processing.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Service Providers:</strong>&nbsp;We engage vendors to perform business purposes on our behalf and provide information to them to enable them to provide us with such business purposes, including research and analytics, hosting, transaction and payment processing, promotion administration, fraud prevention, identity management, acquisition and other services. Service providers may use such information for their operational purposes in order to provide their services to us.
<p>&nbsp;</p>
<ul>
<li><strong>Research and Measurement Companies:&nbsp;</strong>We provide information about content you view on the NBCUniversal Services with video measurement services such as Nielsen TV Ratings, as well as other analytics providers. See&nbsp;<a class="acopen" href="#accordionheader5">Your Rights</a>&nbsp;and&nbsp;<a class="acopen" href="#accordionheader6">Your Choices</a>&nbsp;sections for more information.</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Search Engines</strong>: Depending on the NBCUniversal Service, you may be able to engage with other members of the Service or the public. This may make the name and photo associated with your profile and any comments or user-generated content you provide visible to other members of that Service or the general public. If the information is available to the general public, it may also be searchable by search engines.&nbsp;</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Law Enforcement, Regulators, Anti-fraud Coalitions and other groups</strong>: We disclose the categories of information we collect, as appropriate, with these third parties in order to: protect and enforce the legal rights, privacy, and safety of ourselves and our visitors; protect against possible fraud or other illegal activity; respond to requests from government and other authorities; and otherwise comply with legal process.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Other Sharing</strong></p>
<p>We may provide connection and usage information about you along with a hashed or masked identifier (contact information), with third parties such as partners and social networks to inform the offers we send you and for advertising measurement or analytics. With your appropriate consent when required, and consistent with applicable law, we may disclose your video viewing behavior with third parties including service providers, advertising companies, analytic partners, and social media sites.&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Sale or transfer of all or part of our business or assets</strong></p>
<p>In the event that NBCUniversal or any NBCUniversal Affiliate is involved in a merger, acquisition, transfer of control, bankruptcy, reorganization or sale of assets, we may sell or transfer the information described in this Privacy Policy as part of that transaction or diligence associated with or in contemplation of such matters.</p>
</div>
<div id="accordionheader3" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>LEGAL BASIS FOR USE OF YOUR INFORMATION</h3>
<button id="accordionheader3" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="LEGAL BASIS FOR USE OF YOUR INFORMATION" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="LEGAL BASIS FOR USE OF YOUR INFORMATION" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="legal_basis_for_use_of_your_information">
<p>The laws of some jurisdictions, such as the European Union the UK, or Brazil, require companies to tell you about the legal basis for using, sharing, or disclosing your information. To the extent those laws apply, we may rely on the following legal bases:</p>
<p>&nbsp;</p>
<ul>
<li><strong>Performance of a contract:</strong>&nbsp;where use of your information is necessary to provide you with NBCUniversal Services under a contract, for example the relevant Terms of Service.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Legitimate interest:</strong>&nbsp;where use of your information is necessary for our or others legitimate interests and where the use is not outweighed by your rights and interests. Below are some examples of such interests:
<p>&nbsp;</p>
<ul>
<li>providing NBCUniversal Services</li>
<li>improving our Services and developing new ones</li>
<li>recognizing and better understanding our users, including across platforms</li>
<li>conducting security and fraud prevention activities</li>
<li>marketing and promoting our content and services</li>
<li>building and managing business-to-business relationships</li>
<li>conducting compliance and risk management activities</li>
<li>providing and managing access to our systems</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>Legal obligation:</strong>&nbsp;where use of your information is necessary to comply with laws and regulations such as those relating to anti-bribery and corruption and anti-money-laundering, complying with requests from government bodies or courts, or responding to litigation.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong>With consent:</strong>&nbsp;we may ask for your consent to process your information in a certain way.&nbsp; Where we rely on this basis, you have the right to withdraw your consent at any time – please see the&nbsp;<a class="acopen" href="#accordionheader5">Your Rights</a>&nbsp;and&nbsp;<a class="acopen" href="#accordionheader6">Your Choices</a>&nbsp;sections below to do this.</li>
</ul>
</div>
<div id="accordionheader4" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>CHILDREN</h3>
<button id="accordionheader4" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="CHILDREN" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="CHILDREN" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="children">
<p>Most of the NBCUniversal Services are intended for users over the age of 18. Information about the practices of NBCUniversal Services directed to children under the age of 13 in the United States or 16 in the European Union or where we have actual knowledge a child is under such ages can be found in our&nbsp;<a href="/privacy/pp-full-children#accordionh&lt;p&gt;Most of the NBCUniversal Services are intended for users over the age of 18. Information about the practices of NBCUniversal Services directed to children under the age of 13 in the United States or 16 in the European Union or where we have actual knowledge a child is under such ages can be found in our &lt;a  data-cke-saved-href=" pp-full-children privacy>Children's Privacy Policy</a>. If you are a parent or guardian and believe your child under 13 in the United States or under 16 in the European Union has provided us with personal information without consent, please contact us at&nbsp;<a href="/cdn-cgi/l/email-protection#0676746f7067657f4668646573686f2865696b"><span class="__cf_email__" data-cfemail="0e7e7c67786f6d774e606c6d7b6067206d6163">[email&#160;protected]</span></a>.</p>
<p>eader4"&gt;Children's Privacy Policy. If you are a parent or guardian and believe your child under 13 in the United States or under 16 in the European Union has provided us with personal information without consent, please contact us at&nbsp;<a href="/cdn-cgi/l/email-protection#2757554e5146445e6749454452494e0944484a"><span class="__cf_email__" data-cfemail="d8a8aab1aeb9bba198b6babbadb6b1f6bbb7b5">[email&#160;protected]</span></a>.</p>
<p>&nbsp;</p>
</div>
<div id="accordionheader5" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>YOUR RIGHTS</h3>
<button id="accordionheader5" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="YOUR RIGHTS" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="YOUR RIGHTS" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="your_rights">
<p>Depending on where you live, you may have certain rights with respect to your information. You have the right not to be discriminated against (as provided for in applicable law) for exercising your rights under some local laws such as in California.</p>
<p>For example, under local laws, including in the European Union, you may be able to ask us to:</p>
<ul>
<li>provide access to certain information we hold about you, in some cases in a portable format, if technically feasible</li>
<li>update or correct your information</li>
<li>delete certain information</li>
<li>restrict the use of your information</li>
</ul>
<p>We will respond within the time period prescribed by applicable law. Please note that the above rights are subject to exceptions and limitations.</p>
<p>Some NBCUniversal Services can only be provided if we have your information, therefore deletion of your information will result in termination of such Services.</p>
<p>We will take reasonable steps to verify your identity, including authenticating you through the email address. We may require further documentation such as a password and user ID before granting access to your information.</p>
<p>California, Colorado, Connecticut, Utah, and Virginia residents with rights under local law may click <a href="https://privacyportal.onetrust.com/webform/17e5cb00-ad90-47f5-a58d-77597d9d2c16/2aa79e13-e7d2-4d45-b928-7df9a72bec32">here</a>&nbsp;and in California, Colorado, and Connecticut their authorized agents may click <a href="https://privacyportal.onetrust.com/webform/17e5cb00-ad90-47f5-a58d-77597d9d2c16/2aa79e13-e7d2-4d45-b928-7df9a72bec32">here</a> for access, correction or deletion requests. Alternatively, California and Colorado residents or their authorized agents may call 1-800-447-0663 to make these requests. California residents may view annual California consumer request metrics <a href="https://nbcuniversal.com/privacy/ccpa-metric"> here</a>.</p>
<p>U.S. residents who wish to learn more about access, correction or deletion requests may click <a href="https://privacyportal.onetrust.com/webform/17e5cb00-ad90-47f5-a58d-77597d9d2c16/0d464fc0-b948-4f6a-9f31-9939ef36dfe2">here</a>.&nbsp;If you are a California resident business contact and want to make a request, please click <a href="https://www.nbcuniversal.com/privacy/app-form-b2b">here</a></p>
<p>If you are based outside the U.S. and would like to exercise any individual right, please fill out this <a href="https://www.nbcuniversal.com/privacy/app-form">online form</a> and for business partners who would like to exercise any individual right, please click <a href="https://www.nbcuniversal.com/privacy/app-form-b2b">here</a>.</p>
<p>Your rights and our responses will vary based on your state or country of residency. Please note that you may be located in a jurisdiction where we are not obligated, or are unable, to fulfill a request. &nbsp;In such a case, your request may not be fulfilled. If you have any unresolved concerns, you may have the right to complain to your data protection authority.</p>
<p>Colorado, Connecticut, and Virginia residents may appeal the denial of a request <a href="https://privacyportal.onetrust.com/webform/17e5cb00-ad90-47f5-a58d-77597d9d2c16/3952d5cd-63c4-485a-85ee-86c42ccb6a2f">here</a>. We will respond within the legally required time period, including a written explanation of the results of your appeal.</p>
<p>Where NBCUniversal acts as a service provider for third-party organizations, such as sports leagues and clubs, please contact your organizations directly to exercise any applicable individual’s rights.&nbsp;</p>
<p><strong>“Privacy Choices”: Do Not Sell or Share or Process My Personal Information for Targeted Advertising (California, Colorado, Connecticut, Utah, and Virginia Residents only)</strong></p>
<p>&nbsp;</p>
<ul>
<li>California, Colorado, Connecticut, Utah, and Virginia residents may opt out of the “sale” of their personal information. &nbsp;Such residents may also opt out of the sharing or processing of their personal information for targeted advertising.
<ul>
<li>We provide third parties such as advertisers and advertising networks (including social media networks) information including identification and demographics; device information and identifiers, such as IP address, and unique advertising identifiers and cookies; connection and usage information, such as browsing history or app usage; hashed identifiers [contact information], geolocation information, such as city; and inference data in order to enable marketing to you and delivery of targeted advertising on the NBCUniversal Services or other sites. &nbsp;Advertising, including targeted advertising, enables NBCUniversal to provide you certain content for free and provide relevant offers to you. &nbsp;The disclosure of such personal information listed above to these third parties to assist us in providing these services may be considered a “sale” of personal information under applicable law and is sharing of personal information and the processing of personal information for targeted advertising purposes.</li>
</ul>
</li>
</ul>
<p>If you or (in certain states where required by law) your authorized agent would like to opt out of NBCUniversal’s use or disclosure of your information for such purposes (to the extent this is considered a sale, share, or targeted advertising), you may do so in the footer or settings menu of the brand with which you engage by selecting “Your Privacy Choices” link.</p>
<p>You may still receive advertising, including personalized ads based on NBCUniversal data on the Services. On some of our websites and applications when you click the “Your Privacy Choices” link in the website footer or in the application settings menu, you will be shown a tool that allows you to opt out of the online “sales” and sharing/processing of personal information for targeted ads on the website and application. &nbsp;Please note, if you use different browsers, devices, or services you will need to make your elections separately. In some cases, you may also be presented with form field to complete, in those cases we ask for your email address or other information so we may add it to an appropriate suppression list. In other cases, you will be directed to this page where we provide additional information and options for you to learn more about your choices and how to opt out from interest-based advertising more broadly.</p>
<p>Please note, if we do not detect that you are in California, Colorado, Connecticut, Utah or Virginia, the opt out of sale or sharing/processing for targeted advertising data choices will not apply even if you take the actions described above. &nbsp;</p>
<p>Please note that if you have a legally recognized browser-based opt out preference signal turned on via your device browser (such as Global Privacy Control), we recognize such preference in accordance and to the extent required by applicable law.<br/>
&nbsp;</p>
<p><strong>Sensitive Data</strong></p>
<p>We may use certain sensitive personal information as allowable by law for purposes including analytics and to enable marketing to you and the delivery of targeted advertising on the NBCUniversal Services or other sites, such displaying an ad relevant to your precise location data. &nbsp;</p>
<p>&nbsp;</p>
<ul>
<li>You can change your precise geolocation permissions for our mobile apps in your mobile device settings.</li>
</ul>
<p>&nbsp;</p>
<p><b style="mso-bidi-font-weight:normal"><span style="mso-bidi-font-style:italic">Incentive Programs (California Residents Only)<o:p></o:p></span></b></p>
<p class="MsoNormal"><span style="mso-bidi-font-weight:bold;mso-bidi-font-style:
italic">The Services may offer opportunities to receive certain services or benefits such as discounts or free or extended services (such as bonus streaming time or additional videos), which may require the provision of personal information. Such opportunities could be considered a financial incentive under applicable law (each, an “Incentive Program”).<span style="mso-spacerun:yes">&nbsp; </span>When you participate in an Incentive Program, you agree to the terms of that Incentive Program, and may revoke your participation depending on the Incentive Program (e.g., by opting out of emails or terminating a streaming service). To the extent we can determine the value of your information, we consider the value of providing you with a more personalized experience as well as the expenses we incur in providing Incentive Programs that are reasonably related to the costs associated with offering the Incentives.</span></p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><span style="mso-bidi-font-weight:bold;mso-bidi-font-style:
italic"><o:p></o:p></span></p>
<p><strong>Third Parties List – Shine the Light (California Residents only)</strong></p>
<p>California residents can also request a list of all the third parties to which we have disclosed certain personal information (as defined by California’s Shine the Light law) during the preceding year for those third parties’ direct marketing purposes. California residents may contact us at 30 Rockefeller Plaza, New York, NY 10112, US, NBCUniversal Legal Department Attn: Chief Privacy Officer. In the body of your request, you must include: “California Shine the Light Request”, your name, a current California address including, street address, city, state, and zip code, as well as sufficient information for us to determine if the law applies to you. You will need to attest to the fact that you are a California resident. We will not accept requests by telephone, email, or facsimile, and we are not responsible for notices that are not labeled or sent properly, or that do not have complete information.</p>
<p>&nbsp;</p>
<p><strong>Nevada Residents</strong></p>
<p>NBCUniversal does not engage in the following activity, however Nevada law requires us to post the following: certain Nevada consumers may opt out of the sale of “covered information” for monetary consideration to a person for that person to license or sell such information. “Covered information” includes first and last name, address, email address, phone number, Social Security Number, or an identifier that allows a specific person to be contacted either physically or online.&nbsp;</p>
<p>If you are a Nevada resident who has purchased goods or services from NBCUniversal, you may submit a request to opt out of any potential future sales under Nevada law by filling out <a href="https://www.nbcuniversal.com/privacy/app-form">this form</a>. We will maintain your request in the event our practices change.</p>
<p>&nbsp;</p>
<p><strong>Notice to Customers of Universal Studios Japan</strong></p>
<p>For customers of Universal Studios Japan, NBCUniversal and Universal Studios Japan may use your personal information jointly as follows:</p>
<ul>
<li>The information set forth in Section 1 of this Privacy Policy, <a class="acopen" href="#accordionheader1">Personal Information We Collect and Purposes</a></li>
<li>The scope of entities who will use the personal information are set forth in Section 2 of this Privacy Policy, <a class="acopen" href="#accordionheader2">When We Share Your Information</a></li>
</ul>
<p>For questions, requests, or complaints related to the jointly-used personal information, you may contact USJ, LLC, who is responsible for the management of the jointly used personal information, at <a href="/cdn-cgi/l/email-protection#7f0f0d16091e1c063f0a0c15511c1051150f"><span class="__cf_email__" data-cfemail="c0b0b2a9b6a1a3b980b5b3aaeea3afeeaab0">[email&#160;protected]</span></a>.</p>
<p>For customers of Universal Studios Japan who have questions or complaints related to Universal Studios Japan’s privacy practices, you may contact Universal Studios Japan directly by emailing <a href="/cdn-cgi/l/email-protection#97e7e5fee1f6f4eed7e2e4fdb9f4f8b9fde7"><span class="__cf_email__" data-cfemail="f787859e8196948eb782849dd99498d99d87">[email&#160;protected]</span></a>,or calling 0570-20-0606, or writing to 2-1-33 Sakurajima, Konohana-ku, Osaka 554-0031 Japan, USJ LLC. For issues related to Club Universal please visit the <a href="https://www.usj.co.jp/inquiries/">Club Universal Inquiry page</a>.</p>
</div>
<div id="accordionheader6" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>YOUR CHOICES</h3>
<button id="accordionheader6" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="YOUR CHOICES" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="YOUR CHOICES" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="your_choices">
<p><strong>Cookies and Similar Technologies</strong></p>
<p>We and our service providers, advertisers, and other third parties use cookies and similar technologies (e.g., HTTP cookies, HTML 5, flash local storage cookies, web beacons, GIFs, embedded scripts, ETags/cache browsers, hashed identifiers and software development kits) to recognize you on, off, and across NBCUniversal Services and your devices. For more information about the use of cookies and similar technologies on the NBCUniversal Services (including your opt-out choices) please see our <a href="https://www.nbcuniversal.com/privacy/cookies">Cookie Notice</a>.</p>
<p>&nbsp;</p>
<p><strong>Mobile App and Connected Devices </strong></p>
<p>Depending on the device you use, you may be able to manage your advertising and location preferences through your device settings and as outlined in our <a href="https://www.nbcuniversal.com/privacy/cookies">Cookie Notice</a>. Many operating systems provide their own instructions on how to prevent the delivery of tailored in-application advertisements. We do not control how the applicable platform operator allows you to manage personalized in-application advertisements. You should review your device manufacturer’s support materials and/or the device settings for the respective operating systems for more detail on how to manage such preferences.</p>
<p>You can stop all collection of information by a mobile app by uninstalling the app.</p>
<p>&nbsp;</p>
<p><strong>Opt-out of Video Measurement Research by Nielsen</strong></p>
<p>NBCUniversal video services may feature Nielsen proprietary measurement software that will allow you to contribute to market research, like Nielsen’s TV Ratings.</p>
<p>To learn more about Nielsen digital measurement products and your choices in regard to them, including in mobile apps and connected devices, please visit <a href="http://www.nielsen.com/digitalprivacy">http://www.nielsen.com/digitalprivacy</a> for more information.</p>
<p>&nbsp;</p>
<p><strong>Third-Party Online Services</strong></p>
<p>NBCUniversal Services may be provided through and/or utilize features (such as voice controls) of third party platforms or contain links to third party services. These other platforms (such as gaming systems, smart TVs, mobile devices, and set top boxes) and sites (even if co-branded as NBCUniversal) may collect information about you and use this information in accordance with their own privacy policies and terms of service. We do not control those third parties’ policies or practices. Where NBCUniversal collects personal information on a co-branded website or service, we will provide a link to our privacy policy as appropriate. In some circumstances, NBCUniversal may host some websites on behalf of others and those entities may place or permit the placement of cookies and other tracking technology. NBCUniversal is not responsible for these tracking practices.</p>
</div>
<div id="accordionheader7" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>HOW WE PROTECT YOUR INFORMATION</h3>
<button id="accordionheader7" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="HOW WE PROTECT YOUR INFORMATION" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="HOW WE PROTECT YOUR INFORMATION" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="how_we_protect_your_information">
<p>We maintain organizational, technical, and physical safeguards to help protect the information we collect and use. These safeguards vary depending upon a variety of factors including the sensitivity of the information we collect and use. Despite all reasonable practices, no security method is infallible.</p>
</div>
<div id="accordionheader8" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>HOW LONG WE KEEP YOUR INFORMATION</h3>
<button id="accordionheader8" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="HOW LONG WE KEEP YOUR INFORMATION" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="HOW LONG WE KEEP YOUR INFORMATION" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="how_long_we_keep_your_information">
<p>We will keep your information only for as long as it is necessary to fulfill the purposes described above, unless a longer retention is required or permitted by law. In determining how long to retain information, we consider the amount, nature and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure of the information, the purposes for which we process the information, applicable legal requirements, and our legitimate interests. &nbsp;The purposes for which we process information (as well as the other factors listed above) may dictate different retention periods for the same types of information. &nbsp;For example, we retain your email address as an authentication credential (where applicable) as long as you have an account with us and an additional period of time after that for our legitimate interests and for our fraud and legal compliance purposes. &nbsp;If you opt out of email marketing, we maintain your email on our suppression list for an extended time to comply with your request.</p>
<p>We may delete or de-identify your information sooner if we receive a verifiable deletion request, subject to exemptions under applicable law. The retention period that applies to your information may vary depending on the NBCUniversal Services you use and how you interact with them. Some NBCUniversal Services may provide additional details on their data retention practices, so we encourage you to consult their website and/or FAQs. In addition, in the event you have an account that holds credits, point balances or other entitlements, we may continue to hold the account to allow you to obtain the benefit in accordance with the relevant terms and conditions.<br/>
&nbsp;</p>
</div>
<div id="accordionheader9" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>INTERNATIONAL TRANSFERS</h3>
<button id="accordionheader9" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="INTERNATIONAL TRANSFERS" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="INTERNATIONAL TRANSFERS" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="international_transfers">
<p>NBCUniversal is a global company and has its headquarters in the United States. We may transfer your information to Related Companies, service providers, and other third parties located outside of your country of residence, including in the United States. This is necessary to provide our Services and for the purposes outlined in this Privacy Policy. &nbsp;Data privacy laws vary from country to country and may not be equivalent to, or as protective as, the laws in your home country.&nbsp; We take steps to ensure that reasonable safeguards are in place with aim to ensure an appropriate level of protection for your information, in accordance with applicable law. These measures include data transfer agreements. By providing us with your information, you acknowledge any such transfer, storage or use.</p>
</div>
<div id="accordionheader10" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>UPDATES TO OUR PRIVACY POLICY</h3>
<button id="accordionheader10" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="UPDATES TO OUR PRIVACY POLICY" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="UPDATES TO OUR PRIVACY POLICY" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="updates_to_our_privacy_policy">
<p>We reserve the right to amend this Privacy Policy at any time to reflect changes to our practices or the law. We will make the revised Privacy Policy accessible through the NBCUniversal Services.&nbsp; Please check the NBCUniversal Services periodically for updates.</p>
<p>The date at the top of the Privacy Policy tells you when it was last updated. If we make material changes to the way we collect or use your information, you will be provided with appropriate notice, including by, but not limited to, posting the updated Privacy Policy on this website, and providing notice in accordance with legal requirements. Any changes to this Privacy Policy will become effective when the revised Privacy Policy is posted. &nbsp;By continuing to use the NBCUniversal Services following any changes to this Privacy Policy, you acknowledge you have read and understand the updated Privacy Policy, and you understand that we will collect, use, and share information as stated therein.</p>
</div>
<div id="accordionheader11" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>CONTACT US</h3>
<button id="accordionheader11" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="CONTACT US" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="CONTACT US" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="contact_us">
<p>For any questions or complaints about this Privacy Policy or our privacy practices, please <strong>contact us</strong> <a href="https://www.nbcuniversal.com/privacy/app-form">here</a>. You can also <strong>contact us</strong> at 30 Rockefeller Plaza, New York, NY 10112, USA, NBCUniversal Legal Department Attn: Chief Privacy Officer.</p>
<p>The <strong>UK Representative</strong> of our US-based NBCUniversal Affiliates is NBCUniversal International Limited, 1 Central St Giles, St Giles High Street, London WC2H 8NU, United Kingdom.</p>
<p>The <strong>EU Representative</strong> of our US-based NBCUniversal Affiliates is Universal Studios International B.V., Moermanskkade 421, 1013 BC Amsterdam, The Netherlands.</p>
<p><strong>Germany:</strong> &nbsp;If you are using NBCUniversal Services provided by <strong>Universal Pictures Germany GmbH or Universal Pictures International Germany GmbH</strong>, you can contact our German Data Protection Officer.</p>
<p>You can contact the German Data Protection Officer, the UK Representative or the EU Representative by emailing <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1262607b6473716b527c7071677c7b3c717d7f">[email&#160;protected]</a> and stating which of the above you would like to contact.<br/>
&nbsp;</p>
</div>
<div id="accordionheader12" class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
<h3>Candidate Privacy Policy</h3>
<button id="accordionheader12" tabindex="0" class="arrow down" role="button" aria-expanded="false">
<img class="down-arrow" src="/themes/custom/universal/images/icon__chevron--down.svg" alt="Candidate Privacy Policy" />
<img class="up-arrow" style="display:none;" src="/themes/custom/universal/images/icon__chevron--up.svg" alt="Candidate Privacy Policy" />
</button>
</div>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="candidate_privacy_policy">
<p>To find out more about the information we collect during our recruitment process, please see our <a href="https://www.nbcunicareers.com/candidate-privacy-policy">Candidate Privacy Policy</a>. We have separate privacy policies for workforce data.</p>
</div>
</div>
</div>
</div>
<form id="privacyorder-form"><input type="hidden" id="privacyorder-input" value="3"></form>
</div>
<div class="table-swipe-image">
<img src="https://www.nbcuniversal.com/_flysystem/s3-flysystem/2020-02/swipe-left-icon_1.png" alt="Swipe left to see more">
</div>
</div>

</div>

</div>

</section>
</main>
</div>
</div>
</div>

</div>

<footer>
<div class="legal-nav-container">
<div class="footer-logo">
<a href="/"><img src="/_flysystem/s3-flysystem/nav_logo_0.png" alt="NBCUniversal" /></a>
</div>
<div class="logo-social">
<nav class="footer-social">




<div>




<div id="block-footersocial">




<div><p class="social-links-margin"><a arial-label="See more about Follow us on LinkedIn" class="social-btn fab fa-linkedin-in" href="https://www.linkedin.com/company/nbcuniversal-inc-/" target="_blank"><span class="sr-only">Follow us on LinkedIn</span> </a><a arial-label="See more about Follow us on Twitter" class="social-btn fab fa-twitter" href="https://twitter.com/nbcuniversal" target="_blank"><span class="sr-only">Follow us on Twitter</span> </a> <a arial-label="See more about Like us on Facebook" class="social-btn fab fa-facebook-f" href="https://www.facebook.com/nbcuniversal/" target="_blank"> <span class="sr-only">Like us on Facebook</span> </a> <a arial-label="See more about Like us on Instagram" class="social-btn fab fa-instagram" href="https://www.instagram.com/nbcuniversal/" target="_blank"> <span class="sr-only">instagram</span> </a></p>
</div>

</div>

</div>

</nav>
</div>
<div class="legal-nav">
<nav class="legal primary-legal">








<h2 class="visually-hidden" id="block-universal-footer-menu">Footer menu</h2>




<a href="https://www.nbcuniversal.com/privacy/cookies#accordionheader2" class="footer-btn" data-hover="AD CHOICES" aria-label="AD CHOICES">AD CHOICES</a>
<a href="/privacy" title="Privacy" class="footer-btn" data-hover="Privacy Policy" aria-label="Privacy Policy" data-drupal-link-system-path="taxonomy/term/56">Privacy Policy</a>
<a href="https://www.nbcuniversal.com/privacy/notrtoo" class="choice-icon footer-btn" data-hover="YOUR PRIVACY CHOICES" aria-label="YOUR PRIVACY CHOICES">YOUR PRIVACY CHOICES</a>
<a href="https://www.nbcuniversal.com/privacy/california-consumer-privacy-act" class="footer-btn" data-hover="CA Notice" aria-label="CA Notice">CA Notice</a>
<a href="/terms" title="Terms Of Service" class="footer-btn" data-hover="New  Terms Of Service (Updated July 7, 2023)" aria-label="New  Terms Of Service (Updated July 7, 2023)" data-drupal-link-system-path="terms"><span style="color: red;font-family: Rock-SansBold,sans-serif;">New </span> Terms Of Service (Updated July 7, 2023)</a>



</nav>
<nav class="legal secondary-legal">








<h2 class="visually-hidden" id="block-secondaryfooter-menu">Secondary Footer</h2>




<a href="https://www.cmcsa.com/esg-reporting" title="Supply Chain Values" class="footer-btn secondary-footer-btn" data-hover="Supply Chain Values" aria-label="Supply Chain Values">Supply Chain Values</a>
<a href="https://together.nbcuni.com/advertise/?utm_source=nbcuniversal&amp;utm_medium=referral&amp;utm_campaign=property_ad_pages" class="footer-btn secondary-footer-btn" data-hover="Advertise With Us" aria-label="Advertise With Us">Advertise With Us</a>



</nav>
</div>
</div> 
<div class="copyright print-no">




<div>




<div id="block-copyrightblock">




<div><p>© 2024 NBCUNIVERSAL MEDIA, LLC.</p>
</div>

</div>

</div>

</div>
<div class="scroll-indicator"></div>
</footer>
</div>
</div>
<div id="speak" class="sr-only" aria-live="polite" aria-atomic="true"></div>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"taxonomy\/term\/56","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en","themeUrl":"themes\/custom\/universal","currentQuery":{"brandA":"Peacock","intake":"Peacock"}},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"google_analytics":{"account":"G-XTT4LKF7K1","trackOutbound":true,"trackMailto":true,"trackTel":true,"trackDownload":true,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"smartIp":"{\u0022location\u0022:[]}","smartIpSrc":{"smartIp":"smart_ip","geocodedSmartIp":"geocoded_smart_ip","w3c":"w3c"},"eu_cookie_compliance":{"cookie_policy_version":"1.0.0","popup_enabled":true,"popup_agreed_enabled":false,"popup_hide_agreed":false,"popup_clicking_confirmation":true,"popup_scrolling_confirmation":false,"popup_html_info":"\u003Cdiv aria-labelledby=\u0022popup-text\u0022  class=\u0022eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--default\u0022\u003E\n  \u003Cdiv class=\u0022popup-content info eu-cookie-compliance-content\u0022\u003E\n        \u003Cdiv id=\u0022popup-text\u0022 class=\u0022eu-cookie-compliance-message\u0022 role=\u0022document\u0022\u003E\n      \u003Cdiv class=\u0022BubbleStyle_MessagesContainer\u0022\u003E\u003Cdiv class=\u0022BubbleStyle_MessageContainer\u0022 id=\u0022msg_id_1547\u0022\u003E\u003Cdiv\u003E\u003Cspan\u003EWe and our partners use cookies on this site to improve our service, perform analytics, personalize advertising, measure advertising performance, and remember website preferences.\u00a0\u00a0By using the site, you consent to these cookies. For more information on cookies including how to manage your consent visit our \u003Ca href=\u0022https:\/\/www.nbcuniversal.com\/privacy\/cookies\u0022\u003ECookie Policy.\u003C\/a\u003E\u003C\/span\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003Cp\u003E\u00a0\u003C\/p\u003E\n          \u003C\/div\u003E\n\n    \n    \u003Cdiv id=\u0022popup-buttons\u0022 class=\u0022eu-cookie-compliance-buttons\u0022\u003E\n            \u003Cbutton type=\u0022button\u0022 class=\u0022agree-button eu-cookie-compliance-default-button\u0022\u003EAccept\u003C\/button\u003E\n          \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","use_mobile_message":false,"mobile_popup_html_info":"\u003Cdiv aria-labelledby=\u0022popup-text\u0022  class=\u0022eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--default\u0022\u003E\n  \u003Cdiv class=\u0022popup-content info eu-cookie-compliance-content\u0022\u003E\n        \u003Cdiv id=\u0022popup-text\u0022 class=\u0022eu-cookie-compliance-message\u0022 role=\u0022document\u0022\u003E\n      \n          \u003C\/div\u003E\n\n    \n    \u003Cdiv id=\u0022popup-buttons\u0022 class=\u0022eu-cookie-compliance-buttons\u0022\u003E\n            \u003Cbutton type=\u0022button\u0022 class=\u0022agree-button eu-cookie-compliance-default-button\u0022\u003EAccept\u003C\/button\u003E\n          \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","mobile_breakpoint":768,"popup_html_agreed":false,"popup_use_bare_css":false,"popup_height":"auto","popup_width":"100%","popup_delay":1000,"popup_link":"\/node\/155","popup_link_new_window":true,"popup_position":false,"fixed_top_position":true,"popup_language":"en","store_consent":false,"better_support_for_screen_readers":false,"cookie_name":"","reload_page":false,"domain":"","domain_all_sites":false,"popup_eu_only":true,"popup_eu_only_js":true,"cookie_lifetime":100,"cookie_session":0,"set_cookie_session_zero_on_disagree":0,"disagree_do_not_show_popup":false,"method":"default","automatic_cookies_removal":true,"allowed_cookies":"","withdraw_markup":"\u003Cbutton type=\u0022button\u0022 class=\u0022eu-cookie-withdraw-tab\u0022\u003EPrivacy settings\u003C\/button\u003E\n\u003Cdiv aria-labelledby=\u0022popup-text\u0022 class=\u0022eu-cookie-withdraw-banner\u0022\u003E\n  \u003Cdiv class=\u0022popup-content info eu-cookie-compliance-content\u0022\u003E\n    \u003Cdiv id=\u0022popup-text\u0022 class=\u0022eu-cookie-compliance-message\u0022 role=\u0022document\u0022\u003E\n      \u003Ch2\u003EWe use cookies on this site to enhance your user experience\u003C\/h2\u003E\u003Cp\u003EYou have given your consent for us to set cookies.\u003C\/p\u003E\n    \u003C\/div\u003E\n    \u003Cdiv id=\u0022popup-buttons\u0022 class=\u0022eu-cookie-compliance-buttons\u0022\u003E\n      \u003Cbutton type=\u0022button\u0022 class=\u0022eu-cookie-withdraw-button \u0022\u003EWithdraw consent\u003C\/button\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E","withdraw_enabled":false,"reload_options":0,"reload_routes_list":"","withdraw_button_on_info_popup":false,"cookie_categories":[],"cookie_categories_details":[],"enable_save_preferences_button":true,"cookie_value_disagreed":"0","cookie_value_agreed_show_thank_you":"1","cookie_value_agreed":"2","containing_element":"body","settings_tab_enabled":false,"olivero_primary_button_classes":"","olivero_secondary_button_classes":"","close_button_action":"close_banner","open_by_default":true,"modules_allow_popup":true,"hide_the_banner":false,"geoip_match":true},"user":{"uid":0,"permissionsHash":"d0518c74d163487cfd4ee886e47438c7297b92c08315f626ce6e929b6c40ed5f"}}</script>
<script src="/_flysystem/s3-flysystem/js/js_BRKssTsOXAuyWTBqpq0OtL4scCHgI4l66qlGzrEFXgI.js"></script>
<script src="/modules/contrib/eu_cookie_compliance/js/eu_cookie_compliance.min.js?v=9.5.9" defer></script>
<script>(function(){var js = "window['__CF$cv$params']={r:'849ee2b88e472177',t:'MTcwNjAwMDg0MC4zOTQwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>

