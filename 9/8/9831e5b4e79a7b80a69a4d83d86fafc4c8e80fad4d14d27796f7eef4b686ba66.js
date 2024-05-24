(function(a){var b=parseInt((location.hostname||"local").substring(0,10),36),c="sifi_att_"+b;if("undefined"!=typeof a[c])return void a[c].run();class SifiCmpCompliance{constructor(a){this.tcData=a,this.sifiVendorId="73"}checkConsent(){return this.outOfBandConsent()||this.inBandConsent()}inBandConsent(){return this.purpose()&&this.vendor()&&this.customPurpose()&&this.noRestrictions()}outOfBandConsent(){return this.tcData.outOfBand&&this.tcData.outOfBand.allowedVendors&&this.tcData.outOfBand.allowedVendors[this.sifiVendorId]&&this.tcData.outOfBand.disclosedVendors&&this.tcData.outOfBand.disclosedVendors[this.sifiVendorId]}purpose(){return this.tcData.purpose&&this.tcData.purpose.consents&&!Object.values(this.tcData.purpose.consents).includes(!1)&&this.tcData.purpose.legitimateInterests&&!Object.values(this.tcData.purpose.legitimateInterests).includes(!1)}vendor(){return this.tcData.vendor&&this.tcData.vendor.consents&&this.tcData.vendor.consents[this.sifiVendorId]}customPurpose(){return this.tcData.customPurpose&&this.tcData.customPurpose.consents&&!Object.values(this.tcData.customPurpose.consents).includes(!1)&&this.tcData.customPurpose.legitimateInterests&&!Object.values(this.tcData.customPurpose.legitimateInterests).includes(!1)||!this.tcData.customPurpose}noRestrictions(){return this.tcData.restrictions&&!Object.values(this.tcData.restrictions).some(a=>Object.keys(a).includes(this.sifiVendorId))||!this.tcData.restrictions}}var d={pixels_url:"//i.simpli.fi/p?",pixels:[],matching_pixels:[],protocol:"https:",pixels_to_drop:[],dropping_pixels:!1,rescue_pixel:null,company_id:"",run:function(){d._cmpPresent()?d._dropPixelsOnCmpConfirmation():d.drop_pixels()},drop_pixels:function(){d.already_dropped_matching||d.url_contains_email_address()?d._drop_matching_pixels():d.get_matching_pixels()},get_matching_pixels:function(){var a=document.createElement("script");a.async=!0,a.src=d.protocol+d.pixels_url+"cid="+d.company_id+"&cb="+c+"._hp",document.body.appendChild(a)},_cmpPresent:function(){return"function"==typeof __tcfapi},_dropPixelsOnCmpConfirmation:function(){__tcfapi("addEventListener",2,d._tcDataCallback)},_tcDataCallback:function(a,b){b&&"tcloaded"===a.eventStatus&&(d._checkCmpConsent(a)&&d.drop_pixels(),__tcfapi("removeEventListener",2,()=>{},a.listenerId))},_checkCmpConsent:function(a){return new SifiCmpCompliance(a).checkConsent()},_hp:function(a){d.matching_pixels=a&&a.pixels||[],d._drop_matching_pixels()},_drop_matching_pixels:function(){if(!d.already_dropped_matching){for(var a,b=d.matching_pixels.length-1;0<=b;b--)a=new Image,a.src=d.protocol+d.matching_pixels[b];d.already_dropped_matching=!0}},url_contains_email_address:function(){return /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(d.unescaped_url())},unescaped_url:function(){for(var a=document.location.href,b=decodeURIComponent(a);a!==b;)a=b,b=decodeURIComponent(a);return a}};a[c]=d,"complete"==document.readyState?d.run():window.addEventListener("load",d.run)})(window);
se)?0:a.plainStyle)}
function O(a){var b=document.createElement("link");b.type="text/css";a:{if(a instanceof p)b.href=r(a).toString();else{if(-1===I.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');if(a instanceof E)a=a instanceof E&&a.constructor===E?a.g:"type_error:SafeUrl";else{c:if(H){try{var c=new URL(a)}catch(d){c="https:";break c}c=c.protocol}else d:{c=document.createElement("a");try{c.href=a}catch(d){c=void 0;break d}c=c.protocol;c=":"===c||""===c?"https:":
c}a="javascript:"!==c?a:void 0}if(void 0===a)break a;b.href=a}b.rel="stylesheet"}return b};var P,A=opts_.usqp?{usqp:opts_.usqp}:{},Q=opts_.language.toLowerCase();P=opts_.cselibVersion?z({versionDir:opts_.cselibVersion,versionSlash:L,lang:Q}):z({versionDir:"",versionSlash:"",lang:Q});var R=window.__gcse.scb,S=document.createElement("script");S.src=r(P);var T,U,V,W=null==(V=(U=(S.ownerDocument&&S.ownerDocument.defaultView||window).document).querySelector)?void 0:V.call(U,"script[nonce]");(T=W?W.nonce||W.getAttribute("nonce")||"":"")&&S.setAttribute("nonce",T);S.type="text/javascript";
R&&(S.onload=R);document.getElementsByTagName("head")[0].appendChild(S);
if(M()){document.getElementsByTagName("head")[0].appendChild(O(opts_.cselibVersion?u(K,{versionDir:opts_.cselibVersion,versionSlash:L,experiment:opts_.uiOptions.cssThemeVersion&&4!==opts_.uiOptions.cssThemeVersion?"_v"+opts_.uiOptions.cssThemeVersion:"",lang:opts_.language}):u(K,{versionDir:"",versionSlash:"",experiment:"",lang:opts_.language})));var X,Y="v"+(opts_.uiOptions.cssThemeVersion||4);X=u(J,{versionDir:Y,versionSlash:Y?L:"",theme:opts_.theme.toLowerCase().replace("v2_","")});document.getElementsByTagName("head")[0].appendChild(O(X))};
})({
  "cx": "015041768054457953884:dk7wgdnbkwm",
  "language": "en",
  "theme": "V2_DEFAULT",
  "uiOptions": {
    "resultsUrl": "",
    "enableAutoComplete": true,
    "enableImageSearch": false,
    "imageSearchLayout": "popup",
    "resultSetSize": "filtered_cse",
    "enableOrderBy": true,
    "orderByOptions": [{
      "label": "Relevance",
      "key": ""
    }, {
      "label": "Date",
      "key": "date"
    }],
    "overlayResults": true,
    "numTopRefinements": -1,
    "hideElementBranding": false,
    "cssThemeVersion": 4,
    "isSafeSearchActive": false,
    "autoCompleteSource": "partner-generic",
    "numTopAds": 3
  },
  "protocol": "https",
  "rawCss": ".gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))}",
  "cse_token": "AB-tC_70OrMjnrwNSNQRoQygKzrz:1706720158386",
  "isHostedPage": false,
  "exp": ["cc", "dtsq-3"],
  "cselibVersion": "8435450f13508ca1",
  "usqp": "CAI\u003d",
  "fexp": [72485392, 72485391]
});  if (drupalSettings.data.extlink.mailtoClass !== '0' && drupalSettings.data.extlink.mailtoClass !== '') {
      Drupal.extlink.applyClassAndSpan(mailto_links, drupalSettings.data.extlink.mailtoClass, extIconPlacement);
    }

    if (drupalSettings.data.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).filter(function () {
        // Filter out links with target set if option specified.
        return !(drupalSettings.data.extlink.extTargetNoOverride && $(this).is('a[target]'));
      }).attr({target: '_blank'});

      // Add noopener rel attribute to combat phishing.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the value noopener.
        if (val === null || typeof val === 'undefined') {
          return 'noopener';
        }
        // Check to see if rel contains noopener. Add what doesn't exist.
        if (val.indexOf('noopener') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          // Noopener exists. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener to val.
        else {
          return val + ' noopener';
        }
      });
    }

    if (drupalSettings.data.extlink.extNofollow) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'nofollow'.
        if (val === null || typeof val === 'undefined') {
          return 'nofollow';
        }
        var target = 'nofollow';
        // Change the target, if not overriding follow.
        if (drupalSettings.data.extlink.extFollowNoOverride) {
          target = 'follow';
        }
        if (val.indexOf(target) === -1) {
          return val + ' nofollow';
        }
        return val;
      });
    }

    if (drupalSettings.data.extlink.extNoreferrer) {
      $(external_links).attr('rel', function (i, val) {
        // When the link does not have a rel attribute set it to 'noreferrer'.
        if (val === null || typeof val === 'undefined') {
          return 'noreferrer';
        }
        if (val.indexOf('noreferrer') === -1) {
          return val + ' noreferrer';
        }
        return val;
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (drupalSettings.data.extlink.extAlert) {
        return confirm(drupalSettings.data.extlink.extAlertText);
      }
    };

    $(external_links).off("click.extlink");
    $(external_links).on("click.extlink", function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (drupalSettings.data.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img, svg').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }

    if (class_name !== '0') {
      $links_to_process.addClass(class_name);
    }

    // Add data-extlink attribute.
    $links_to_process.attr('data-extlink', '');

    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if (drupalSettings.data.extlink.extUseFontAwesome) {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaMailtoClasses + '" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '"></span></span>');
        }
        else {
          $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaLinkClasses + '" aria-label="' + drupalSettings.data.extlink.extLabel + '"></span></span>');
        }
      }
      else {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.mailtoLabel + '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>');
        }
        else {
          $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.extLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.extLabel + '</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, drupalSettings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, drupalSettings);
    }
  };

})(jQuery, Drupal, drupalSettings);
;
!function(e,s){"use strict";if(e("table.forum").addClass("responsive-enabled"),e("table.responsive-enabled").wrap('<div class="responsive-table"><div class="responsive-table__scroll"></div></div>'),e("table.responsive-enabled").prop("scrollWidth")>e(".responsive-table").width()){var l=s.t("Scroll to view");e(".responsive-table__scroll").append('<div class="responsive-table__message"><em>'+l+"</em></div>"),e("table.responsive-enabled").addClass("has-overflow")}}(jQuery,Drupal);

(function ($) {

  "use strict";

  Drupal.behaviors.atFS = {
    attach: function (context, settings) {

      var activeTheme = settings['ajaxPageState']['theme'],
          slideshowSettings = settings[activeTheme]['at_slideshows'];

      for (var item in slideshowSettings) {
        if (slideshowSettings.hasOwnProperty(item)) {

          var ss = slideshowSettings[item];
          
          var bgSelector = ".bg-slider";
          var syncObj = "";
          
          // Look for the bg-slider class and start the flexslider
          if ($(bgSelector).length) {
            $(bgSelector).flexslider({
              controlnav: false,
              directionNav: false,
              touch: false,
              useCSS: false,
            });
            
            syncObj = bgSelector;
          }

          // Add a class if the pager is active.
          if (ss.controlnav) {
            $(ss.slideshow_class).addClass('has-pager');
          }

          // Add a class if the direction nav is active.
          if (ss.directionnav) {
            $(ss.slideshow_class).addClass('has-direction-nav');
          }

          // Add a class if this is a carousel
          if (ss.as_carousel) {
            $(ss.slideshow_class).addClass('is-carousel');
          }

          // Initialize and set options.
          $(ss.slideshow_class).flexslider({

            start: function(slider){$('.flexslider').resize().removeClass('loading')},
            //after: function(slider){
            //  var imgSrc = slider.find('li.flex-active-slide').find('img').attr('src');
            //  $('#featured-image').css('background-image','url(' + imgSrc + ')');
            // console.log(slider);
            //},

            //start: function(slider) { slider.removeClass('loading');

            // Basic settings
            animation      : ss.animation ? ss.animation : 'slide',       // String Controls the animation type, "fade" or "slide".
            direction      : ss.direction ? ss.direction : 'horizontal',  // String Controls the animation direction, "horizontal" or "vertical"
            smoothHeight   : ss.smoothheight ? ss.smoothheight : false,   // Boolean Animate the height of the slider smoothly for slides of varying height.
            slideshowSpeed : ss.slideshowspeed ? parseFloat(ss.slideshowspeed) : 4000, // Number Set the speed of the slideshow cycling, in milliseconds
            animationSpeed : ss.animationspeed ? parseFloat(ss.animationspeed) : 600,  // Number Set the speed of animations, in milliseconds
            controlNav     : ss.controlnav ? ss.controlnav : false,        // Boolean Create navigation for paging control of each slide.
            directionNav   : ss.directionnav ? ss.directionnav : false,    // Boolean Create previous/next arrow navigation.

            // Carousel
            itemWidth  : ss.itemwidth ? parseFloat(ss.itemwidth) : 0,      // Number Box-model width of individual carousel items, including horizontal borders and padding.
            itemMargin : ss.itemmargin ? parseFloat(ss.itemmargin) : 0,    // Number Margin between carousel items.
            minItems   : ss.minitems ? parseFloat(ss.minitems) : 0,        // Number Minimum number of carousel items that should be visible.
            maxItems   : ss.maxitems ? parseFloat(ss.maxitems) : 0,        // Number Maximum number of carousel items that should be visible.
            move       : ss.move ? parseFloat(ss.move) : 0,                // Number Number of carousel items that should move on animation.

            // Advanced options
            pauseOnAction : ss.pauseonaction ? ss.pauseonaction : false,   // Boolean Pause the slideshow when interacting with control elements.
            pauseOnHover  : ss.pauseonhover ? ss.pauseonhover : false,     // Boolean Pause the slideshow when hovering over slider, then resume when no longer hovering.
            animationLoop : ss.animationloop ? ss.animationloop : false,   // Boolean Gives the slider a seamless infinite loop.
            reverse       : ss.reverse ? String(ss.reverse) : false,       // Boolean Reverse the animation direction.
            randomize     : ss.randomize ? ss.randomize : false,           // Boolean Randomize slide order, on load
            slideshow     : ss.autostart ? ss.autostart : false,           // Boolean Setup a slideshow for the slider to animate automatically.
            initDelay     : ss.initdelay ? parseFloat(ss.initdelay) : 0,   // Number Set an initialization delay, in milliseconds
            easing        : ss.easing ? ss.easing : 'swing',               // String Determines the easing method used in jQuery transitions.
            useCSS        : ss.usecss ? ss.usecss : false,                 // Boolean Slider will use CSS3 transitions, if available
            touch         : ss.touch ? ss.touch : false,                   // Boolean Allow touch swipe navigation of the slider on enabled devices
            video         : ss.video ? ss.video : false,                   // Boolean Will prevent use of CSS3 3D Transforms, avoiding graphical glitches
            prevText      : ss.prevtext ? ss.prevtext : 'Previous',        // String Set the text for the "previous" directionNav item
            nextText      : ss.nexttext ? ss.nexttext : 'Next',            // String Set the text for the "next" directionNav item
            selector      : ss.selector ? ss.selector : '.slides > li',    // Selector Must match a simple pattern. '{container} > {slide}'.
            keyboard      : false,
            
            sync: syncObj,

          });
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
