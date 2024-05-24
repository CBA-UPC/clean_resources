/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.polyfill.min.js. */
!this);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.polyfill.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/jquery/jquery.min.js. */
/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,;

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/jquery/jquery.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/polyfills/element.matches.js. */
;if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector};
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/polyfills/element.matches.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/polyfills/object.assign.js. */
;if(typeof Object.assign!=='function'){Object.defineProperty(Object,'assign',{value:function(n,i){'use strict';if(n===null||n===undefined){throw new TypeError('Cannot convert undefined or null to object')};var o=Object(n);for(var t=1;t<arguments.length;t++){var e=arguments[t];if(e!==null&&e!==undefined){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){o[r]=e[r]}}}};return o},writable:!0,configurable:!0})};
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/polyfills/object.assign.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.classlist.min.js. */
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(self))}else{())}};
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.classlist.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.promise.min.js. */
/**
 * @file
 * A promise-polyfill by @taylorhakes.
 *
 * License: MIT
 * @see https://github.com/taylorhakes/promise-polyfill
 */
!0,;

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.promise.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.raf.min.js. */
!this);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.raf.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/polyfills/nodelist.foreach.js. */
;if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach};
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/polyfills/nodelist.foreach.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/css-escape/css.escape.js. */
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(typeof global!='undefined'?global:this,function(e){if(e.CSS&&e.CSS.escape){return e.CSS.escape};var n=function(r){if(arguments.length==0){throw new TypeError('`CSS.escape` requires an argument.')};var t=String(r),o=t.length,n=-1,e,i='',f=t.charCodeAt(0);while(++n<o){e=t.charCodeAt(n);if(e==0x0000){i+='\uFFFD';continue};if((e>=0x0001&&e<=0x001F)||e==0x007F||(n==0&&e>=0x0030&&e<=0x0039)||(n==1&&e>=0x0030&&e<=0x0039&&f==0x002D)){i+='\\'+e.toString(16)+' ';continue};if(n==0&&o==1&&e==0x002D){i+='\\'+t.charAt(n);continue};if(e>=0x0080||e==0x002D||e==0x005F||e>=0x0030&&e<=0x0039||e>=0x0041&&e<=0x005A||e>=0x0061&&e<=0x007A){i+=t.charAt(n);continue};i+='\\'+t.charAt(n)};return i};if(!e.CSS){e.CSS={}};e.CSS.escape=n;return n}));
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/css-escape/css.escape.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/es6-promise/es6-promise.auto.min.js. */
!this,;
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/es6-promise/es6-promise.auto.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/once/once.min.js. */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/once/once.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/jquery-once/jquery.once.min.js. */
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
((;

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/jquery-once/jquery.once.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/drupalSettingsLoader.js. */
(();
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/drupalSettingsLoader.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/drupal.js. */
;window.Drupal={behaviors:{},locale:{}};(function(t,e,r,n,o,a){t.throwError=t.attachBehaviors=t.detachBehaviors=t.checkPlain=t.formatString=t.stringReplace=function(e,r,n){if(e.length===0){return e};if(!Array.isArray(n)){n=Object.keys(r||{});n.sort(};if(n.length===0){return e};var c=n.pop(),a=e.split(c);if(n.length){for(var o=0;o<a.length;o++){a[o]=t.stringReplace(a[o],r,n.slice(0))}};return a.join(r[c])};t.t=function(e,o,n){n=n||{};n.context=n.context||'';if(typeof r!=='undefined'&&r.strings&&r.strings[n.context]&&r.strings[n.context][e]){e=r.strings[n.context][e]};if(o){e=t.formatString(e,o)};return e};t.url=t.url.toAbsolute=function(t){var r=document.createElement('a');try{t=decodeURIComponent(t)}catch(e){};r.setAttribute('href',t);return r.cloneNode(!1).href};t.url.isLocal=function(r){var n=t.url.toAbsolute(r),c=window.location.protocol;if(c==='http:'&&n.indexOf('https:')===0){c='https:'};var o=''.concat(c,'//').concat(window.location.host).concat(e.path.baseUrl.slice(0,-1));try{n=decodeURIComponent(n)}catch(a){};try{o=decodeURIComponent(o)}catch(a){};return n===o||n.indexOf(''.concat(o,'/'))===0};t.formatPlural=function(n,o,c,a,u){a=a||{};a['@count']=n;var l=e.pluralDelimiter,f=t.t(o+l+c,a,u).split(l),i=0;if(typeof r!=='undefined'&&r.pluralFormula){i=n in r.pluralFormula?r.pluralFormula[n]:r.pluralFormula.default}
else if(a['@count']!==1){i=1};return f[i]};t.encodePath=t.deprecationError=t.deprecatedProperty=function(e){var r=e.target,n=e.deprecatedProperty,c=e.message;if(!o||!a){return r};return new o(r,{get:function(e,r){if(r===n){t.deprecationError({message:c})};for(var i=arguments.length,u=new Array(i>2?i-2:0),o=2;o<i;o++){u[o-2]=arguments[o]};return a.get.apply(a,[e,r].concat(u))}})};t.theme=function(e){if(e in t.theme){var a;for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++){o[r-1]=arguments[r]};return(a=t.theme)[e].apply(a,o)}};t.theme.placeholder=)(Drupal,window.drupalSettings,window.drupalTranslations,window.console,window.Proxy,window.Reflect);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/drupal.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/drupal.init.js. */
;if(window.jQuery){jQuery.noConflict()};document.documentElement.className+=' js';(function(e,n){var t=function(e){var n=if(document.readyState!=='loading'){setTimeout(e,0)}
else{document.addEventListener('DOMContentLoaded',n)}};t(function(){e.attachBehaviors(document,n)})})(Drupal,window.drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/drupal.init.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/debounce.js. */
;Drupal.debounce=function(r,u,t){var n,e;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++){i[a]=arguments[a]};var l=this,f=c=t&&!n;clearTimeout(n);n=setTimeout(f,u);if(c){e=r.apply(l,i)};return e}};
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/debounce.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/dblazy.min.js. */
!this,this.document);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/dblazy.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.dataset.min.js. */
!dBlazy);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.dataset.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.viewport.min.js. */
!dBlazy,this,this.document);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.viewport.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.dom.min.js. */
!dBlazy,this.document);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.dom.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.xlazy.min.js. */
!dBlazy,this,this.document);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.xlazy.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.observer.min.js. */
!dBlazy,this);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.observer.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.loading.min.js. */
!dBlazy);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/plugin/blazy.loading.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.webp.min.js. */
!dBlazy,this,this.document);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/polyfill/blazy.webp.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/blazy.base.min.js. */
!dBlazy,Drupal,this);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/blazy.base.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/blazy.min.js. */
!this,;

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/blazy.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/io/bio.min.js. */
!this||module||{},;

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/io/bio.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/io/bio.media.min.js. */
!this,;

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/io/bio.media.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/blazy.drupal.min.js. */
!dBlazy,Drupal,drupalSettings,this,this.document);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/base/blazy.drupal.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/blazy.load.min.js. */
!dBlazy,Drupal,(drupalSettings,this.document));

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/blazy.load.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/blazy.compat.min.js. */
!dBlazy,Drupal,this);

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/blazy/js/blazy.compat.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/tabbable/index.umd.min.js. */
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!this,();

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/tabbable/index.umd.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/pwa/js/serviceworker-load.js. */
'use strict';(function(o,e,c,t){'use strict';if('serviceWorker' in c){t.addEventListener('load',function(){let scope=e.path.baseUrl;if(typeof e.pwa.scope!=='undefined'&&e.pwa.scope!==null){scope=e.pwa.scope};c.serviceWorker.register(e.pwa.installPath,{scope:scope}).then(.catch(})}})(Drupal,drupalSettings,navigator,window);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/pwa/js/serviceworker-load.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/misc/jquery.once.bc.js. */
(function(e,n){var o='is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256',c=e.fn.once,a=e.fn.removeOnce;e.fn.once=function(e){Drupal.deprecationError({message:'jQuery.once() '.concat(o)});return c.apply(this,[e])};e.fn.removeOnce=function(e){Drupal.deprecationError({message:'jQuery.removeOnce() '.concat(o)});return a.apply(this,[e])};var r=n;window.once=Object.assign(t,r,{remove:i})})(jQuery,once);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/misc/jquery.once.bc.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/themes/custom/wba/js/main.js. */
(function(o,e){'use strict';e.behaviors.wba={attach:function(n,l){o('article[role="article"] .block__social .social-sharing-buttons:last').css('display','flex');o(document).on('click','.block__content-toggle',function(e){e.preventDefault();o('input.form-text').focus();return!1});function t(e){if([9,13,32,38,40].indexOf(e.keyCode)!==-1){o('body').addClass('keyboard-activated');o(window).on('mousedown.keyboard',d);o(window).off('keydown.keyboard')}};function d(e){o('body').removeClass('keyboard-activated');o(window).on('keydown.keyboard',t);o(window).off('mousedown.keyboard')};o(window).on('keydown.keyboard',t);let scrollToTopBtn=document.getElementById('scrollToTopBtn');window.onscroll=function(){if(document.body.scrollTop>20||document.documentElement.scrollTop>20){scrollToTopBtn.style.display='flex'}
else{scrollToTopBtn.style.display='none'}};if(window.scrollY>0){scrollToTopBtn.style.display='flex'};o(scrollToTopBtn).on('click',i);o('svg').removeAttr('id');o(window).once('wba-main').on({'dialog:aftercreate':function(n,l,t){o('body').addClass('ui-dialog-open');setTimeout(function(){o(window).trigger('resize.dialogResize');e.blazy.init.revalidate()},500)},'dialog:afterclose':)}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/themes/custom/wba/js/main.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/themes/custom/wba/js/analytics.js. */
(function(e,t){'use strict';t.behaviors.wbaAnalytics={attach:function(t,n){if(typeof dataLayer!=='undefined'){e('.region-header .site-logo').once('analytics').on({click:function(){dataLayer.push({eventCategory:'site navigation',eventAction:'sitewide header',eventLabel:'main logo',eventvalue:'',event:'eventClick'})}});e('.block--header-menu-main .menu-item__link').once('analytics').on({click:function(){var t=e(this).text();dataLayer.push({eventCategory:'site navigation',eventAction:'sitewide header',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('.block--header-menu-main .menu-item__panel-trending-list-item .node__link').once('analytics').on({click:);e('.region-footer .menu-item__link').once('analytics').on({click:function(){var t=e(this).text();dataLayer.push({eventCategory:'site navigation',eventAction:'sitewide footer',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('html').once('analytics').on({eu_cookie_compliance_popup_open:function(){e('.eu-cookie-compliance-banner .eu-cookie-compliance-message a').on({click:function(){dataLayer.push({eventCategory:'privacy compliance',eventAction:'popup',eventLabel:'privacy policy',eventvalue:'',event:'eventClick'})}});e('.eu-cookie-compliance-banner .agree-button').on({click:function(){dataLayer.push({eventCategory:'privacy compliance',eventAction:'popup',eventLabel:'accept',eventvalue:'',event:'eventClick'})}})}});e('.media--type-image .image__expand, .media--type-remote-video .remote-video__expand').once('analytics').on({click:function(){var t=e(this).data('media-title');dataLayer.push({eventCategory:'asset interaction',eventAction:'expand',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('.media--type-image .image__download').once('analytics').on({click:function(){var t=e(this).data('media-title');dataLayer.push({eventCategory:'asset interaction',eventAction:'image download',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('.media--type-asset .media__menu-list .file a').once('analytics').on({click:function(){var t=e(this).closest('.media__title-wrapper').children('.media__title').text(),n=e(this).closest('.media--type-asset').data('asset-type');dataLayer.push({eventCategory:'asset interaction',eventAction:n+' download',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('.view-content-archive .view-filters :input:not([type=submit])').once('analytics').on({change:function(){var t=e(this).next('label').text();dataLayer.push({eventCategory:'filter interaction',eventAction:'filter selection',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('.view-content-archive .pager .pager__item a, .view-search .pager .pager__item a').once('analytics').on({click:function(){var t=e(this).attr('title');dataLayer.push({eventCategory:'filter interaction',eventAction:'page selection',eventLabel:t,eventvalue:'',event:'eventClick'})}});e('.views-exposed-form-search-page').once('analytics').on({submit:function(){var t=e(this).find('input[id^="edit-keys"]');dataLayer.push({eventCategory:'site navigation',eventAction:'site search',eventLabel:t.val(),eventvalue:'',event:'eventClick'})}});e('.views-exposed-form-search-block .js-form-submit').once('analytics').on({click:function(){var t=e(this).closest('.views-exposed-form-search-block').find('input[id^="edit-keys"]');dataLayer.push({eventCategory:'site navigation',eventAction:'site search',eventLabel:t.val(),eventvalue:'',event:'eventClick'})}});e('.view-search .view-content .node--view-mode-search-result .node__title a').once('analytics').on({click:function(){var t=e(this).children('.field--name-title').text();dataLayer.push({eventCategory:'site navigation',eventAction:'site search',eventLabel:t,eventvalue:'',event:'eventClick'})}})}}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/themes/custom/wba/js/analytics.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/modules/contrib/extlink/extlink.js. */
(function(t,e,a){'use strict';e.extlink=e.extlink||{};e.extlink.attach=function(i,a){if(typeof a.data==='undefined'||!a.data.hasOwnProperty('extlink')){return};var p='append';if(a.data.extlink.extIconPlacement&&a.data.extlink.extIconPlacement!='0'){p=a.data.extlink.extIconPlacement};var g=/^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/,h=window.location.host.replace(g,'$2$3$6'),c=window.location.host.replace(h,''),o;if(a.data.extlink.extSubdomains){o='([^/]*\\.)?'}
else if(c==='www.'||c===''){o='(www\\.)?'}
else{o=c.replace('.','\\.')};var r=!1;if(a.data.extlink.whitelistedDomains){r=[];for(var d=0;d<a.data.extlink.whitelistedDomains.length;d++){r.push(new RegExp('^https?:\\/\\/'+a.data.extlink.whitelistedDomains[d].replace(/(\r\n|\n|\r)/gm,'')+'.*$','i'))}};var u=new RegExp('^https?://([^@]*@)?'+o+h,'i'),f=!1;if(a.data.extlink.extInclude){f=new RegExp(a.data.extlink.extInclude.replace(/\\/,'\\'),'i')};var x=!1;if(a.data.extlink.extExclude){x=new RegExp(a.data.extlink.extExclude.replace(/\\/,'\\'),'i')};var l=!1;if(a.data.extlink.extCssExclude){l=a.data.extlink.extCssExclude};var s=!1;if(a.data.extlink.extCssExplicit){s=a.data.extlink.extCssExplicit};var n=[],k=[];t('a:not([data-extlink]), area:not([data-extlink])',i).each(function(e){try{var a='';if(typeof this.href=='string'){a=this.href.toLowerCase()}
else if(typeof this.href=='object'){a=this.href.baseVal};if(a.indexOf('http')===0&&((!u.test(a)&&!(x&&x.test(a)))||(f&&f.test(a)))&&!(l&&t(this).is(l))&&!(l&&t(this).parents(l).length>0)&&!(s&&t(this).parents(s).length<1)){var o=!1;if(r){for(var i=0;i<r.length;i++){if(r[i].test(a)){o=!0;break}}};if(!o){n.push(this)}}
else if(this.tagName!=='AREA'&&a.indexOf('mailto:')===0&&!(l&&t(this).parents(l).length>0)&&!(s&&t(this).parents(s).length<1)){k.push(this)}}catch(d){return!1}});if(a.data.extlink.extClass!=='0'&&a.data.extlink.extClass!==''){e.extlink.applyClassAndSpan(n,a.data.extlink.extClass,p)};if(a.data.extlink.mailtoClass!=='0'&&a.data.extlink.mailtoClass!==''){e.extlink.applyClassAndSpan(k,a.data.extlink.mailtoClass,p)};if(a.data.extlink.extTarget){t(n).filter(.attr({target:'_blank'});t(n).attr('rel',function(e,t){if(t===null||typeof t==='undefined'){return'noopener'};if(t.indexOf('noopener')>-1){if(t.indexOf('noopener')===-1){return t+' noopener'}
else{return t}}
else{return t+' noopener'}})};if(a.data.extlink.extNofollow){t(n).attr('rel',function(e,t){if(t===null||typeof t==='undefined'){return'nofollow'};var i='nofollow';if(a.data.extlink.extFollowNoOverride){i='follow'};if(t.indexOf(i)===-1){return t+' nofollow'};return t})};if(a.data.extlink.extNoreferrer){t(n).attr('rel',function(e,t){if(t===null||typeof t==='undefined'){return'noreferrer'};if(t.indexOf('noreferrer')===-1){return t+' noreferrer'};return t})};e.extlink=e.extlink||{};e.extlink.popupClickHandler=e.extlink.popupClickHandler||t(n).off('click.extlink');t(n).on('click.extlink',};e.extlink.applyClassAndSpan=function(i,e,l){var n;if(a.data.extlink.extImgClass){n=t(i)}
else{var x=t(i).find('img, svg').parents('a');n=t(i).not(x)};if(e!=='0'){n.addClass(e)};n.attr('data-extlink','');var r,o=n.length;for(r=0;r<o;r++){var s=t(n[r]);if(a.data.extlink.extUseFontAwesome){if(e===a.data.extlink.mailtoClass){s[l]('<span class="fa-'+e+' extlink"><span class="'+a.data.extlink.extFaMailtoClasses+'" aria-label="'+a.data.extlink.mailtoLabel+'"></span></span>')}
else{s[l]('<span class="fa-'+e+' extlink"><span class="'+a.data.extlink.extFaLinkClasses+'" aria-label="'+a.data.extlink.extLabel+'"></span></span>')}}
else{if(e===a.data.extlink.mailtoClass){s[l]('<svg focusable="false" class="'+e+'" role="img" aria-label="'+a.data.extlink.mailtoLabel+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>'+a.data.extlink.mailtoLabel+'</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>')}
else{s[l]('<svg focusable="false" class="'+e+'" role="img" aria-label="'+a.data.extlink.extLabel+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>'+a.data.extlink.extLabel+'</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>')}}}};e.behaviors.extlink=e.behaviors.extlink||{};e.behaviors.extlink.attach=)(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/modules/contrib/extlink/extlink.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/js-cookie/js.cookie.min.js. */
/*! js-cookie v3.0.1 | MIT */
!this,();

/* Source and licensing information for the above line(s) can be found at https://www.walgreensbootsalliance.com/core/assets/vendor/js-cookie/js.cookie.min.js. */;
