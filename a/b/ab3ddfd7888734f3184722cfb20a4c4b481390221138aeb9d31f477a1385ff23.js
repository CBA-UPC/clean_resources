/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,;
jQuery.noConflict();
;/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),;

;!function n(i,o,a){function u(r,e){if(!o[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(d)return d(r,!0);throw(e=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",e}t=o[r]={exports:{}},i[r][0].call(t.exports,function(e){return u(i[r][1][e]||e)},t,t.exports,n,i,o,a)}return o[r].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,r,t){"use strict";jQuery(function(e){function r(){jQuery("body").removeClass("dipi-anim-preload");var e=jQuery("#dipi-injected-after-nav-archives").detach(),e=(e.insertAfter("#main-header"),e.insertAfter(".et-l--header"),jQuery("#dipi-injected-after-nav-categories").detach());e.insertAfter("#main-header"),e.insertAfter(".et-l--header")}"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",})},{}]},{},[1]);
;!{1:[function(e,i,t){"use strict";jQuery(function(o){var s=!1,l=o("body");function e(){var e,i,t,n,r,a;s||(s=!0,l.hasClass("et_header_style_slide")||l.hasClass("et_header_style_fullscreen")?(r=o(".dipi_hamburger"),o("#et-top-navigation").append(r.detach()),(a=o("#et-top-navigation .mobile_menu_bar")).hide(),r.click(,document.addEventListener("click",function(e){e=o(e.target);e.hasClass("et_toggle_fullscreen_menu")&&"et-top-navigation"!==e.parent().attr("id")&&r.toggleClass("is-active")})):(e=o(".mobile_menu_bar_toggle, .mobile_menu_bar"),i=o(".mobile_nav"),0==e.length&&(e=o(".et-l--header .mobile_menu_bar")),(t=o(".dipi_hamburger")).css("float","none"),t.css("margin-bottom",""),e.append(t.detach()),e.on("click",function(){var e=o(this).closest(".mobile_nav");t=o(".dipi_hamburger"),e.hasClass("closed")?t.addClass("is-active"):t.removeClass("is-active")}),e=o(".et_mobile_menu .menu-item:not(.menu-item-has-children) a"),i=o(".mobile_nav"),n=o(".et_mobile_menu"),e.on("click",function(){(t=o(".dipi_hamburger")).removeClass("is-active"),i.removeClass("opened"),i.addClass("closed"),n.hide()})))}window.addEventListener("load",function(){jQuery(".dipi_hamburger").show(),e()}),o(document).ready(})},{}]},{},[1]);
;/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = 

/* ---------- global functions - vendors ------------ */

Object.deepExtend = 

window.requestAnimFrame = (();

window.cancelRequestAnimFrame = ( )();







/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = 

window.particlesJS.load = 
;jQuery(document).ready(function($){if($('#de-particles').length>0){particlesJS("de-particles",{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ca1014"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ca1014"},"polygon":{"nb_sides":5},"image":{"src":"","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ca1014","opacity":1,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":2},"remove":{"particles_nb":2}}},"retina_detect":true});}});