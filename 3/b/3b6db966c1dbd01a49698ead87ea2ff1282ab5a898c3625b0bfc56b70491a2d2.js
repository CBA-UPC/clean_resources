/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ deprecated; }
});

// UNUSED EXPORTS: logged

;// CONCATENATED MODULE: external ["wp","hooks"]
var external_wp_hooks_namespaceObject = window["wp"]["hooks"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/deprecated/build-module/index.js
/**
 * WordPress dependencies
 */

/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 *
 * @type {Record<string, true | undefined>}
 */

const logged = Object.create(null);
/**
 * Logs a message to notify developers about a deprecated feature.
 *
 * @param {string} feature               Name of the deprecated feature.
 * @param {Object} [options]             Personalisation options
 * @param {string} [options.since]       Version in which the feature was deprecated.
 * @param {string} [options.version]     Version in which the feature will be removed.
 * @param {string} [options.alternative] Feature to use instead
 * @param {string} [options.plugin]      Plugin name if it's a plugin feature
 * @param {string} [options.link]        Link to documentation
 * @param {string} [options.hint]        Additional message to help transition away from the deprecated feature.
 *
 * @example
 * ```js
 * import deprecated from '@wordpress/deprecated';
 *
 * deprecated( 'Eating meat', {
 * 	since: '2019.01.01'
 * 	version: '2020.01.01',
 * 	alternative: 'vegetables',
 * 	plugin: 'the earth',
 * 	hint: 'You may find it beneficial to transition gradually.',
 * } );
 *
 * // Logs: 'Eating meat is deprecated since version 2019.01.01 and will be removed from the earth in version 2020.01.01. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
 * ```
 */

function deprecated(feature, options = {}) {
  const {
    since,
    version,
    alternative,
    plugin,
    link,
    hint
  } = options;
  const pluginMessage = plugin ? ` from ${plugin}` : '';
  const sinceMessage = since ? ` since version ${since}` : '';
  const versionMessage = version ? ` and will be removed${pluginMessage} in version ${version}` : '';
  const useInsteadMessage = alternative ? ` Please use ${alternative} instead.` : '';
  const linkMessage = link ? ` See: ${link}` : '';
  const hintMessage = hint ? ` Note: ${hint}` : '';
  const message = `${feature} is deprecated${sinceMessage}${versionMessage}.${useInsteadMessage}${linkMessage}${hintMessage}`; // Skip if already logged.

  if (message in logged) {
    return;
  }
  /**
   * Fires whenever a deprecated feature is encountered
   *
   * @param {string}  feature             Name of the deprecated feature.
   * @param {?Object} options             Personalisation options
   * @param {string}  options.since       Version in which the feature was deprecated.
   * @param {?string} options.version     Version in which the feature will be removed.
   * @param {?string} options.alternative Feature to use instead
   * @param {?string} options.plugin      Plugin name if it's a plugin feature
   * @param {?string} options.link        Link to documentation
   * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
   * @param {?string} message             Message sent to console.warn
   */


  (0,external_wp_hooks_namespaceObject.doAction)('deprecated', feature, options, message); // eslint-disable-next-line no-console

  console.warn(message);
  logged[message] = true;
}
/** @typedef {import('utility-types').NonUndefined<Parameters<typeof deprecated>[1]>} DeprecatedOptions */

(window.wp = window.wp || {}).deprecated = __webpack_exports__["default"];
/******/ })()
;          setTimeout(addFrame, 5);
        }
      }
    }

    addFrame();

    function stubTCFAPI() {
      var args = arguments;
      __tcfapi.a = __tcfapi.a || [];

      if (!args.length) return __tcfapi.a;
      else if (args[0] === 'ping') {
        args[2](
          {
            gdprApplies: gdprAppliesGlobally,
            cmpLoaded: false,
            cmpStatus: 'stub',
            displayStatus: 'hidden',
            apiVersion: "2.0",
          },
          args[1] !== 1
        );
      } else {
        __tcfapi.a.push([].slice.apply(args));
      }
    }

    function cmpMsgHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = event.data;
      if (typeof json !== 'object') {
        try {
          json = JSON.parse(json);
        } catch (err) {
          return;
        }
      }
      if (!json.__tcfapiCall) return;

      var call = json.__tcfapiCall;
      window.__tcfapi(
        call.command,
        call.version,
        function (retValue, success) {
          var returnMsg = {
            __tcfapiReturn: {
              returnValue: retValue,
              success: success,
              callId: call.callId,
            },
          };

          if (event.source && typeof event.source.postMessage === 'function')
            event.source.postMessage(
              msgIsString ? JSON.stringify(returnMsg) : returnMsg,
              '*'
            );
        },
        call.parameter
      );
    }

    if (typeof __tcfapi !== 'function') {
      window.__tcfapi = stubTCFAPI;
      __tcfapi.msgHandler = cmpMsgHandler;

      if (window.addEventListener)
        window.addEventListener('message', cmpMsgHandler, false);
      else window.attachEvent('onmessage', cmpMsgHandler);
    }
  })();

  (function (id) {
    function append(scriptid, url, async) {
      var d = document,
        sn = 'script',
        f = d.getElementsByTagName(sn)[0];
      if (!f) f = d.head;
      var s = d.createElement(sn);
      s.async = async;
      s.id = scriptid;
      s.src = url;
      s.charset = 'utf-8';
      f.parentNode.insertBefore(s, f);
    }

    function is2parttld(value) {
      var tldindicators = [
        'co',
        'com',
        'info',
        'web',
        'info',
        'gov',
        'edu',
        'biz',
        'net',
        'org',
      ];
      var countryindicators = [
        'uk',
        'us',
        'fr',
        'es',
        'de',
        'at',
        'au',
        'ae',
        'be',
        'br',
        'ca',
        'ch',
        'cn',
        'co',
        'cz',
        'dk',
        'eg',
        'eu',
        'fi',
        'gb',
        'gr',
        'hk',
        'hr',
        'hu',
        'ie',
        'in',
        'jp',
        'mx',
        'nl',
        'no',
        'nz',
        'pl',
        'ro',
        'ru',
        'se',
      ];
      return (
        tldindicators.indexOf(value) !== -1 ||
        countryindicators.indexOf(value) !== -1
      );
    }

    function getRootDomain() {
      var parts = window.location.hostname.split('.');
      if (parts.length === 2) rootDomain = parts[0];
      else if (parts.length > 2) {
        // see if the next to last value is a common tld
        var part = parts[parts.length - 2];
        if (is2parttld(part)) {
          rootDomain = parts[parts.length - 3]; // go back one more
        } else {
          rootDomain = part;
        }
      }

      return rootDomain;
    }

    window.evidon = {};
    window.evidon.id = id;

    var cdn = '//c.evidon.com/',
      rootDomain = getRootDomain(),
      noticecdn = cdn + 'sitenotice/';
    append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
    append('evidon-location', cdn + 'geo/country.js', true);
    append('evidon-themes', noticecdn + id + '/snthemes.js', true);
    if (rootDomain)
      append(
        'evidon-settings',
        noticecdn + id + '/' + rootDomain + '/settings.js',
        true
      );

    window.evidon.priorConsentCallback = function (
      categories,
      vendors,
      cookies
    ) {
      // add the tags which need to wait for prior consent
      // here.  This should be all your advertising tags and
      // probably most of your social and tracking tags.
    };

    window.evidon.closeCallback = function () {
      // this is executed if the user closed a UI element without either Accepting (providing consent)
      // or Declining (declining to provide consent).
    };

    window.evidon.consentWithdrawnCallback = function () {
      // this is exeucted if the user withdraws consent and elects to
      // no longer allow technologies to run on the site.
    };

    window.evidon.consentDeclinedCallback = function () {
      // this is executed if the user explicitly declines giving consent by
      // using a Decline button
    };
  })(6063);

  /**
   * PDC Evidon class; adapt to your own codebase
   *
   * @class Evidon
   */
  class Evidon {
    /**
     * Constructor for Evidon class
     *
     * @constructor
     * @memberOf Evidon
     */
    constructor() {
      this.init();
    }

    /**
     * Set cookie consent and dispatch event for cookie banner
     *
     * @memberOf Evidon
     */
    setConsent(_consent) {
      // Custom event
      const consentEvent = new CustomEvent('evidonConsentState', {
        detail: {
          consent: _consent,
        },
        bubbles: true,
        cancelable: true,
      });

      document.dispatchEvent(consentEvent);
    }

    /**
     * Set cookie consent event for Adobe Analytics (optional)
     *
     * @memberOf Evidon
     */
    setEvent(_eventName, _$eventElement) {
      _gpdc.analytics.event.addGDLEvent(
        'click',
        _eventName,
        {
          moduleName: 'cookie-banner',
          elementType: 'button',
          assetName: 'empty',
          linkUrl: 'empty',
          label: 'accept',
          userActionFlag: true,
        },
        _$eventElement
      );
    }

    /**
     * Initializes the Evidon callbacks
     *
     * @memberOf Evidon
     */
    init() {
      // This is needed for environments (e.g., localhost, dev, QA) that don't load Evidon
      if (!window.evidon) return;

      /**
       * Sets a custom launchConsentAccepted method for Evidon's Launch plugin to use
       *
       * @memberOf Evidon
       */
      window.evidon.priorConsentCallback = (cookies) => {
        if (cookies['_evidon_consent_cookie'] || cookies['all']) {
          window.consent = true;
        }
        // Add the tags which need to wait for prior consent
        // here.  This should be all your advertising tags and
        // probably most of your social and tracking tags.

        this.setConsent('accept');

        //if (!!window.evidon.banner) this.setEvent('accept', document.getElementById('_evidon-accept-button')); // optional
      };

      /**
       * Sets a custom launchConsentWithdrawn method for Evidon's Launch plugin to use
       *
       * @memberOf Evidon
       */
      window.evidon.consentWithdrawnCallback = () => {
        // This is executed if the user withdraws consent and elects to
        // no longer allow technologies to run on the site.
        window.consent = null;
        this.setConsent('reject');
      };

      /**
       * Sets a custom launchConsentDeclined method for Evidon's Launch plugin to use
       *
       * @memberOf Evidon
       */
      window.evidon.consentDeclinedCallback = () => {
        // This is executed if the user explicitly declines giving consent by
        // using a Decline button

        window.evidon.notice.dropSuppressionCookie(1); // number of day; 1 = 1 day
        window.consent = null;
        this.setConsent('reject');
      };
    }
  }

  const evidonCustom = new Evidon();

  /**
   * Method for listening for consent event dispatched in above code
   */

  /**
   * Listens for user consent and executes callback when given
   *
   * @callback callback
   * @return {Boolean}
   * @memberOf GlobalPDC
   */
  window.listenForUserConsent = function (_callback) {
    document.addEventListener('evidonConsentState', (_event) => {
      if (_event.detail.consent !== 'accept') return;
      _callback();
    });
  };

  /**
   * Example of wrapping logic requiring consent before execution
   */

  window.listenForUserConsent(() => {
    // Implement the user cookie management here
  });

  // ARKOSE BEGINS
  let arkoseEC;

  const captchaOnCompleted = (response) => {
    document.dispatchEvent(
      new CustomEvent('captchaCompleted', {
        detail: { response: response.token },
      })
    );
  };

  const captchaOnShown = () => {
    const iframe = document.querySelector('iframe[title="arkose-enforcement"]');
    iframe && iframe.focus();
    document.dispatchEvent(new CustomEvent('shownCaptcha', {}));
  };

  const captchaOnHide = () => {
    arkoseEC.reset();
    document.dispatchEvent(new CustomEvent('hideCaptcha', {}));
  };

  const captchaOnReady = () => {
    document.dispatchEvent(new CustomEvent('captchaReady', {}));
  };

  function setupEnforcement(arkoseEnforcement) {
    const lang = new URL(document.location).searchParams.get('locale');
    arkoseEC = arkoseEnforcement;
    arkoseEC.setConfig({
      language: lang,
      onCompleted: captchaOnCompleted,
      onReady: captchaOnReady,
      onHide: captchaOnHide,
      onShown: captchaOnShown,
    });

    document.addEventListener('captchaExecute', arkoseEC.run);
  }
  // ARKOSE ENDS
    
  // ADOBE ANALYTICS STARTS
  let pageLoadEvent;
    
  document.addEventListener('pageLoad', (e) => {
    pageLoadEvent = e;
    loadAdobeScripts();
  });
    
  function initializeDigitalData() {
      const searchParams = new URL(document.location).searchParams;
      const emcid = searchParams.get('emcid');
      const locale = searchParams.get('locale').toLowerCase();
      const product = pageLoadEvent.detail.assetName;
      var pageName = pageLoadEvent.detail.pageName;
      var primaryCategory = pageLoadEvent.detail.primaryCategory;
      
      if (primaryCategory == null) {
          primaryCategory = 'repairs';
      }
      if (pageName == null) {
          pageName = 'home';
      }
      
      const defaultData = {
          locale: locale,
          app: {
              env: 'repairs-env',
              name: 'repairs',
              version: 'v1.0'
          },
          emcid: emcid,
          primaryCategory: primaryCategory,
          pageNames: {
              '/s/' : `${pageName}`,
              '/hardware/s/' : `${pageName}`,
              '/s/troubleshooting' : `/troubleshooting/${product}`,
              '/hardware/s/troubleshooting' : `/troubleshooting/${product}`,
              '/s/request-repair': `/request/${product}/${pageName}`,
 			  '/hardware/s/request-repair': `/request/${product}/${pageName}`,
          }
      };
      
      DataLayer.default.config({
          homePathname: "/",
      });
      
      // Initialize digitalData object for the current page
      DataLayer.default.pageview(defaultData);
  }
    
  function executeAdobe() {
    if (window.consent) {  
      initializeDigitalData();
      _satellite.track('repairs_page');
      
    }
  }

  document.addEventListener('repairsUserEngagement', (event) => {
    if (window.consent) {
        
      const assetName = event.detail.assetName;
      const elementType = event.detail.elementType;
      const label = event.detail.label;
      const linkURL = event.detail.linkURL;
      const moduleName = event.detail.moduleName;
      const persName = event.detail.persName;
      const position = event.detail.position;
      const userActionFlag = event.detail.userActionFlag;
      const eventAction = event.detail.eventAction;
      const eventName = event.detail.eventName;
      const satelliteTrack = event.detail.satelliteTrack;
        
      const eventData = {
          eventInfo: {
              eventName,
              eventAction
          },
          attributes: {
              assetName,
              label,
              moduleName,
              elementType,
              linkURL,
              userActionFlag,
              persName,
              position
          }
      };

      // Push eventData to digitalData.event  
      DataLayer.default.event.raw(eventData);
        
      _satellite.track(satelliteTrack);
    }
  });
  // ADOBE ANALYTICS ENDS
</script><meta name="viewport" content="initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, minimal-ui"/>
<style>
        .auraMsgMask, #auraErrorMask, body .auraLoadingBox {
            display: none;
        }

        .spaError {
            padding: 10px;
        }

        .spaErrorLink {
            padding: 10px 0;
            display: block
        }

        </style><style>:root{--LanguageIOLA-paletteIndigo10:rgb(32, 6, 71);--LanguageIOLA-popoverWalkthroughHeaderImage:;--LanguageIOLA-zIndexDialog:6000;--LanguageIOLA-colorPickerSelectorWidth:14rem;--LanguageIOLA-nubbinSizeDefault:1rem;--LanguageIOLA-paletteCloudBlue40:rgb(5, 98, 138);--LanguageIOLA-colorBackgroundContextBarInverseItemHover:rgba(255, 255, 255, 0.2);--LanguageIOLA-dropZoneSlotHeight:0.25rem;--LanguageIOLA-colorTextTabLabelSelected:rgb(1, 118, 211);--LanguageIOLA-colorStrokeBrandActive:rgb(3, 45, 96);--LanguageIOLA-paletteIndigo15:rgb(31, 9, 116);--LanguageIOLA-cardBodyPadding:0 1rem;--LanguageIOLA-varSpacingHorizontalSmall:0.75rem;--LanguageIOLA-tableColorBackgroundHeaderResizableHandle:rgb(174, 174, 174);--LanguageIOLA-colorBackgroundPathActiveHover:rgb(3, 45, 96);--LanguageIOLA-brandPrimaryTransparent:rgba(21, 137, 238, 0.1);--LanguageIOLA-brandPrimaryTransparent40:rgba(21, 137, 238, 0.4);--LanguageIOLA-colorBorderButtonDefault:rgb(201, 201, 201);--LanguageIOLA-paletteIndigo20:rgb(50, 29, 113);--LanguageIOLA-popoverColorText:rgb(201, 201, 201);--LanguageIOLA-paletteCloudBlue30:rgb(8, 73, 104);--LanguageIOLA-colorTextButtonDefaultActive:rgb(1, 118, 211);--LanguageIOLA-colorPickerSliderHeight:1.5rem;--LanguageIOLA-colorTextIconInverse:rgb(255, 255, 255);--LanguageIOLA-heightFooter:3.75rem;--LanguageIOLA-splitViewColorBorder:rgb(201, 201, 201);--LanguageIOLA-colorBorderRowSelectedHover:rgb(27, 150, 255);--LanguageIOLA-fontSizeTextXxSmall:0.625rem;--LanguageIOLA-lineHeightHeading:1.25;--LanguageIOLA-cardHeaderMargin:0 0 0.75rem;--LanguageIOLA-paletteIndigo30:rgb(47, 44, 183);--LanguageIOLA-mqMediumLandscape:only screen and (min-width: 48em) and (min-aspect-ratio: 4/3);--LanguageIOLA-brandBandImageHeightMedium:12.5rem;--LanguageIOLA-illustrationColorSecondary:rgb(207, 233, 254);--LanguageIOLA-zIndexDefault:1;--LanguageIOLA-colorBorderSelectionActive:rgb(243, 243, 243);--LanguageIOLA-paletteCloudBlue20:rgb(2, 50, 72);--LanguageIOLA-utilityBarColorBackgroundNotificationFocus:rgb(201, 201, 201);--LanguageIOLA-colorTextIconDefaultDisabled:rgb(201, 201, 201);--LanguageIOLA-colorTextBrand:rgb(27, 150, 255);--LanguageIOLA-durationToastMedium:9.6s;--LanguageIOLA-colorBackgroundButtonIconActive:rgb(243, 243, 243);--LanguageIOLA-brandHeaderContrastWeak:rgb(145, 145, 145);--LanguageIOLA-colorBackgroundNotificationNew:rgb(243, 243, 243);--LanguageIOLA-brandHeaderContrastInverseActive:rgb(238, 238, 238);--LanguageIOLA-colorBackgroundInputCheckboxSelected:rgb(27, 150, 255);--LanguageIOLA-progressColorBorder:rgb(255, 255, 255);--LanguageIOLA-spacingXxxSmall:0.125rem;--LanguageIOLA-paletteIndigo40:rgb(58, 73, 218);--LanguageIOLA-colorBackgroundProgressRingContent:rgb(255, 255, 255);--LanguageIOLA-lineHeightButtonSmall:1.75rem;--LanguageIOLA-salesforceSansBoldItalicWoff:url(/_slds/fonts/v2.3.0/SalesforceSans-BoldItalic.woff);--LanguageIOLA-brandBackgroundDarkTransparent:rgba(221, 219, 218, 0);--LanguageIOLA-colorPickerThumbWidth:0.375rem;--LanguageIOLA-paletteCloudBlue10:rgb(0, 26, 40);--LanguageIOLA-brandHeaderIconActive:rgb(129, 129, 129);--LanguageIOLA-widthStageLeftCollapsed:4rem;--LanguageIOLA-paletteCloudBlue15:rgb(10, 38, 54);--LanguageIOLA-colorBorderOffline:rgb(68, 68, 68);--LanguageIOLA-colorBackgroundUtilityBarHover:rgb(243, 243, 243);--LanguageIOLA-sliderHandleColorBackgroundHover:rgb(1, 118, 211);--LanguageIOLA-colorTextIconInverseHint:rgba(255, 255, 255, 0.5);--LanguageIOLA-sizeMedium:20rem;--LanguageIOLA-brandPrimaryTransparent10:rgba(21, 137, 238, 0.1);--LanguageIOLA-colorBorderIconInverseHintHover:rgba(255, 255, 255, 0.75);--LanguageIOLA-colorTextDefault:rgb(3, 45, 96);--LanguageIOLA-paletteIndigo50:rgb(88, 103, 232);--LanguageIOLA-progressBarHeight:0.125rem;--LanguageIOLA-colorBackgroundWarning:rgb(254, 147, 57);--LanguageIOLA-colorBackgroundBrandPrimaryActive:rgb(3, 45, 96);--LanguageIOLA-paletteBlue90:rgb(216, 230, 254);--LanguageIOLA-brandHeaderContrastCool:rgb(1, 68, 134);--LanguageIOLA-paletteCloudBlue80:rgb(144, 208, 254);--LanguageIOLA-paletteBlue95:rgb(238, 244, 255);--LanguageIOLA-colorBorderSelectionHover:rgb(27, 150, 255);--LanguageIOLA-zIndexPopup:5000;--LanguageIOLA-borderRadiusLarge:0.5rem;--LanguageIOLA-colorTextIconInverseHintHover:rgba(255, 255, 255, 0.75);--LanguageIOLA-popoverBrandBorderWidth:0.25rem;--LanguageIOLA-fontSizeHeadingXLarge:1.75rem;--LanguageIOLA-typingIconDotColorBackgroundGrayDark:rgb(201, 201, 201);--LanguageIOLA-paletteIndigo65:rgb(142, 155, 239);--LanguageIOLA-varSpacingLarge:1.5rem;--LanguageIOLA-pageHeaderSpacingMargin:0;--LanguageIOLA-fontSizeTextXLarge:1.25rem;--LanguageIOLA-paletteIndigo60:rgb(127, 140, 237);--LanguageIOLA-paletteCloudBlue70:rgb(26, 185, 255);--LanguageIOLA-welcomeMatColorActionShadow:rgba(0, 0, 0, 0.05);--LanguageIOLA-colorTextBrowser:rgb(255, 255, 255);--LanguageIOLA-welcomeMatSpacingInfo:7.75rem;--LanguageIOLA-mqLarge:only screen and (min-width: 64.0625em);--LanguageIOLA-paletteIndigo70:rgb(158, 169, 241);--LanguageIOLA-squareTappableSmall:2rem;--LanguageIOLA-colorTextActionLabel:rgb(116, 116, 116);--LanguageIOLA-paletteCloudBlue60:rgb(13, 157, 218);--LanguageIOLA-paletteBlue70:rgb(120, 176, 253);--LanguageIOLA-colorBorderTabActive:rgb(255, 255, 255);--LanguageIOLA-paletteCloudBlue65:rgb(8, 171, 237);--LanguageIOLA-globalnavigationItemHeightAccentFocus:4px;--LanguageIOLA-colorBorderDestructiveHover:rgb(186, 5, 23);--LanguageIOLA-buttonLineHeightTouch:2.65rem;--LanguageIOLA-colorTextCustomer:rgb(254, 147, 57);--LanguageIOLA-squareIconUtilitySmall:1rem;--LanguageIOLA-colorBackgroundModalButtonActive:rgba(0, 0, 0, 0.16);--LanguageIOLA-colorTextBrandPrimary:rgb(255, 255, 255);--LanguageIOLA-squareIconXSmallBoundary:1.25rem;--LanguageIOLA-widthToggle:3rem;--LanguageIOLA-paletteIndigo80:rgb(190, 199, 246);--LanguageIOLA-welcomeMatMinHeight:25rem;--LanguageIOLA-zIndexDocked:4;--LanguageIOLA-squareIconMediumBoundaryAlt:2.25rem;--LanguageIOLA-colorBorderSelection:rgb(1, 118, 211);--LanguageIOLA-paletteBlue80:rgb(170, 203, 255);--LanguageIOLA-paletteCloudBlue50:rgb(16, 124, 173);--LanguageIOLA-brandHeaderContrastActive:rgb(80, 80, 80);--LanguageIOLA-formLabelFontSize:0.75rem;--LanguageIOLA-colorTextActionLabelActive:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundBackdropTint:rgb(243, 243, 243);--LanguageIOLA-durationSlowly:0.4s;--LanguageIOLA-colorBackgroundRowHover:rgb(243, 243, 243);--LanguageIOLA-popoverWalkthroughAltNubbinColorBackground:rgb(1, 118, 211);--LanguageIOLA-spinnerSizeSmall:1.25rem;--LanguageIOLA-sliderTrackColorBackgroundFill:rgb(27, 150, 255);--LanguageIOLA-welcomeMatWidth:52.0625rem;--LanguageIOLA-paletteIndigo95:rgb(241, 243, 251);--LanguageIOLA-paletteIndigo90:rgb(224, 229, 248);--LanguageIOLA-filesZIndexHover:5;--LanguageIOLA-colorTextPill:rgb(1, 118, 211);--LanguageIOLA-varSpacingSmall:0.75rem;--LanguageIOLA-heightDockedBar:2.5rem;--LanguageIOLA-paletteBlue50:rgb(1, 118, 211);--LanguageIOLA-colorTextTabLabelHover:rgb(1, 68, 134);--LanguageIOLA-fontSizeHeadingXSmall:0.75rem;--LanguageIOLA-colorStrokeDisabled:rgb(243, 243, 243);--LanguageIOLA-widthPathBorderCurrent:0.125rem;--LanguageIOLA-colorBackgroundButtonDefaultHover:rgb(243, 243, 243);--LanguageIOLA-varSpacingVerticalXxSmall:0.25rem;--LanguageIOLA-colorTextButtonDefaultHover:rgb(1, 118, 211);--LanguageIOLA-durationPromptly:0.2s;--LanguageIOLA-colorBorderPathCurrent:rgb(1, 68, 134);--LanguageIOLA-colorBackgroundButtonDefaultActive:rgb(243, 243, 243);--LanguageIOLA-colorTextStageLeft:rgb(243, 243, 243);--LanguageIOLA-colorBorderHint:rgb(3, 45, 96);--LanguageIOLA-colorTextPrimary:rgb(3, 45, 96);--LanguageIOLA-brandBandColorBackgroundSecondaryTransparent:rgba(0, 0, 0, 0);--LanguageIOLA-paletteBlue60:rgb(27, 150, 255);--LanguageIOLA-cardColorBackground:rgb(255, 255, 255);--LanguageIOLA-brandHeaderIcon:rgb(145, 145, 145);--LanguageIOLA-paletteBlue65:rgb(87, 163, 253);--LanguageIOLA-spacingLarge:1.5rem;--LanguageIOLA-pageHeaderColorBorder:rgba(0, 0, 0, 0);--LanguageIOLA-cardFooterMargin:0.75rem;--LanguageIOLA-fontSizeTextSmall:0.8125rem;--LanguageIOLA-colorTextLinkInverseActive:rgba(255, 255, 255, 0.5);--LanguageIOLA-durationToastShort:4.8s;--LanguageIOLA-lineHeightButton:1.875rem;--LanguageIOLA-panelDockedLeftShadow:1px 0 3px rgba(0,0,0,0.25);--LanguageIOLA-panelDockedRightShadow:-1px 0 3px 0 rgba(0,0,0,0.25);--LanguageIOLA-colorTextLinkPrimaryHover:rgb(1, 118, 211);--LanguageIOLA-shadowButton:0 1px 1px 0 rgba(0, 0, 0, 0.05);--LanguageIOLA-welcomeMatMaxHeight:37.5rem;--LanguageIOLA-colorBorderToggleChecked:rgb(255, 255, 255);--LanguageIOLA-shadowHeader:0 2px 4px rgba(0, 0, 0, 0.07);--LanguageIOLA-sizeXxLarge:60rem;--LanguageIOLA-colorBackgroundDockedPanelHeader:rgb(255, 255, 255);--LanguageIOLA-paletteBlue30:rgb(1, 68, 134);--LanguageIOLA-lineHeightSalespath:1.5rem;--LanguageIOLA-shadowDrag:0 2px 4px 0 rgba(0, 0, 0, 0.40);--LanguageIOLA-colorBackgroundPathExpanded:rgb(255, 255, 255);--LanguageIOLA-colorBackground:rgb(243, 243, 243);--LanguageIOLA-colorBackgroundInput:rgb(255, 255, 255);--LanguageIOLA-sizeSmall:15rem;--LanguageIOLA-userDefaultAvatar:url(/_slds/images/profile_avatar_200.png?cache=7bdcafae);--LanguageIOLA-colorTextButtonInverse:rgb(243, 243, 243);--LanguageIOLA-colorBackgroundInputCheckboxDisabled:rgb(201, 201, 201);--LanguageIOLA-tableColorTextHeader:rgb(68, 68, 68);--LanguageIOLA-paletteBlue40:rgb(11, 92, 171);--LanguageIOLA-cardColorBorder:rgb(201, 201, 201);--LanguageIOLA-squareIconUtilityMedium:1.25rem;--LanguageIOLA-colorBackgroundButtonSuccessHover:rgb(46, 132, 74);--LanguageIOLA-colorBorderButtonBrandDisabled:rgba(0, 0, 0, 0);--LanguageIOLA-fontSizeHeadingXxSmall:0.625rem;--LanguageIOLA-colorBackgroundButtonInverseActive:rgba(0, 0, 0, 0.24);--LanguageIOLA-illustrationEmptyStateEvents:url(/_slds/images/illustrations/empty-state-events.svg?cache=985b247a);--LanguageIOLA-colorBackgroundToggle:rgb(174, 174, 174);--LanguageIOLA-colorBackgroundStencil:rgb(243, 243, 243);--LanguageIOLA-welcomeMatCheckSize:0.625rem;--LanguageIOLA-colorTextButtonBrandHover:rgb(255, 255, 255);--LanguageIOLA-buttonColorBackgroundSecondary:rgba(255, 255, 255, 0.8);--LanguageIOLA-paletteBlue10:rgb(0, 22, 57);--LanguageIOLA-varSpacingVerticalLarge:1.5rem;--LanguageIOLA-colorBorderReminder:rgb(243, 243, 243);--LanguageIOLA-colorBrandDark:rgb(1, 118, 211);--LanguageIOLA-paletteBlue15:rgb(3, 35, 77);--LanguageIOLA-colorBorderBrandPrimaryFocus:rgb(1, 118, 211);--LanguageIOLA-salesforceSansItalicWoff:url(/_slds/fonts/v2.3.0/SalesforceSans-Italic.woff);--LanguageIOLA-colorBorderBrandPrimaryActive:rgb(3, 45, 96);--LanguageIOLA-datepickerColorTextDayAdjacentMonth:rgb(116, 116, 116);--LanguageIOLA-colorBorderErrorAlt:rgb(254, 143, 125);--LanguageIOLA-shadowReminder:0 2px 3px 0 rgba(0, 0, 0, 0.20);--LanguageIOLA-brandTextLinkActive:rgb(1, 68, 134);--LanguageIOLA-pageHeaderColorBackground:rgb(243, 243, 243);--LanguageIOLA-salesforceSansBoldWoff2:url(/_slds/fonts/v2.3.0/SalesforceSans-Bold.woff2);--LanguageIOLA-fontSizeHeadingLarge:1.5rem;--LanguageIOLA-colorBackgroundStencilAlt:rgb(243, 243, 243);--LanguageIOLA-paletteBlue20:rgb(3, 45, 96);--LanguageIOLA-elevationInverseShadow3Below:0 -3px 3px 0 rgba(0, 0, 0, 0.16) inset;--LanguageIOLA-varSpacingHorizontalXxSmall:0.25rem;--LanguageIOLA-colorBorderSeparatorAlt:rgb(201, 201, 201);--LanguageIOLA-colorPickerRangeHeight:5rem;--LanguageIOLA-colorBackgroundButtonIcon:rgba(0, 0, 0, 0);--LanguageIOLA-paletteTeal15:rgb(7, 40, 37);--LanguageIOLA-buttonIconColorBorderPrimary:rgb(255, 255, 255);--LanguageIOLA-brandAccessibleActive:rgb(1, 68, 134);--LanguageIOLA-paletteYellow80:rgb(252, 192, 3);--LanguageIOLA-zIndexSpinner:9050;--LanguageIOLA-colorBackgroundContextTabBarItem:rgb(255, 255, 255);--LanguageIOLA-fontWeightBold:700;--LanguageIOLA-paletteTeal10:rgb(7, 27, 18);--LanguageIOLA-colorBackgroundContextBarItemActive:rgb(255, 255, 255);--LanguageIOLA-shadowFocusInset:0 0 2px 2px #1b96ff inset;--LanguageIOLA-colorBackgroundAltInverse:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundPathIncompleteHover:rgb(201, 201, 201);--LanguageIOLA-squareIconMediumContent:1rem;--LanguageIOLA-colorBackgroundContextBar:rgb(255, 255, 255);--LanguageIOLA-colorTextInverseHover:rgb(174, 174, 174);--LanguageIOLA-colorBackgroundInputActive:rgb(255, 255, 255);--LanguageIOLA-brandContrast:rgb(26, 27, 30);--LanguageIOLA-colorTextSecondary:rgb(116, 116, 116);--LanguageIOLA-fillHeaderButtonHover:rgb(1, 68, 134);--LanguageIOLA-fontFamilyText:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';--LanguageIOLA-welcomeMatCompleteIconSize:1.25rem;--LanguageIOLA-varSpacingXxLarge:3rem;--LanguageIOLA-paletteYellow95:rgb(251, 243, 224);--LanguageIOLA-paletteYellow90:rgb(249, 227, 182);--LanguageIOLA-brandBackgroundPrimary:rgb(250, 250, 249);--LanguageIOLA-paletteTeal20:rgb(2, 52, 52);--LanguageIOLA-progressRingWidth:0.1875rem;--LanguageIOLA-paletteYellow65:rgb(215, 147, 4);--LanguageIOLA-paletteYellow60:rgb(202, 133, 1);--LanguageIOLA-colorBorderInputCheckboxSelectedCheckmark:rgb(255, 255, 255);--LanguageIOLA-colorBorderCanvasElementSelectionHover:rgb(1, 68, 134);--LanguageIOLA-borderRadiusSmall:0.125rem;--LanguageIOLA-progressBarColorBackground:rgb(201, 201, 201);--LanguageIOLA-durationInstantly:0s;--LanguageIOLA-colorBackgroundToastSuccess:rgb(46, 132, 74);--LanguageIOLA-tabsFontWeight:400;--LanguageIOLA-colorBackgroundPost:rgb(243, 243, 243);--LanguageIOLA-colorTextPlaceholderInverse:rgb(243, 243, 243);--LanguageIOLA-colorTextInputIcon:rgb(174, 174, 174);--LanguageIOLA-sliderHandleShadow:rgba(0, 0, 0, 0.16) 0 2px 3px;--LanguageIOLA-paletteYellow70:rgb(228, 162, 1);--LanguageIOLA-fontWeightLight:300;--LanguageIOLA-colorTextError:rgb(234, 0, 30);--LanguageIOLA-varSpacingXxSmall:0.25rem;--LanguageIOLA-colorBorderInput:rgb(201, 201, 201);--LanguageIOLA-brandAccessible:rgb(1, 118, 211);--LanguageIOLA-pageColorBackgroundPrimary:rgb(255, 255, 255);--LanguageIOLA-cardShadow:none;--LanguageIOLA-lineClamp:3;--LanguageIOLA-welcomeMatWidthProgressBar:12.5rem;--LanguageIOLA-progressColorBackgroundShade:rgb(243, 243, 243);--LanguageIOLA-globalActionFillHover:rgb(1, 68, 134);--LanguageIOLA-illustrationEmptyStateAssistant:url(/_slds/images/illustrations/empty-state-assistant.svg?cache=127a789e);--LanguageIOLA-varSpacingHorizontalXSmall:0.5rem;--LanguageIOLA-colorPickerInputCustomHexFontSize:0.75rem;--LanguageIOLA-varSpacingMedium:1rem;--LanguageIOLA-colorBackgroundShadeDark:rgb(201, 201, 201);--LanguageIOLA-colorPickerSwatchesWidth:13.3rem;--LanguageIOLA-squareIconLargeBoundaryAlt:5rem;--LanguageIOLA-colorBorderInputDisabled:rgb(201, 201, 201);--LanguageIOLA-paletteYellow40:rgb(140, 75, 2);--LanguageIOLA-cardWrapperSpacing:1rem;--LanguageIOLA-colorBackgroundNotificationBadgeActive:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundHighlight:rgb(250, 255, 189);--LanguageIOLA-colorBackgroundRowActive:rgb(243, 243, 243);--LanguageIOLA-componentSpacingMargin:0;--LanguageIOLA-colorBorderButtonFocusInverse:rgb(243, 243, 243);--LanguageIOLA-shadowButtonFocus:0 0 3px #0176d3;--LanguageIOLA-varSpacingVerticalXLarge:2rem;--LanguageIOLA-tableColorBackgroundHeaderHover:rgb(243, 243, 243);--LanguageIOLA-colorBackgroundDockedPanel:rgb(255, 255, 255);--LanguageIOLA-colorTextTertiary:rgb(116, 116, 116);--LanguageIOLA-varSpacingVerticalXxLarge:3rem;--LanguageIOLA-paletteYellow50:rgb(168, 100, 3);--LanguageIOLA-brandContrastActive:rgb(13, 14, 18);--LanguageIOLA-squareIconLargeContent:2rem;--LanguageIOLA-colorPickerSliderThumbColorBackground:rgb(243, 243, 243);--LanguageIOLA-inputStaticFontSize:0.8125rem;--LanguageIOLA-borderWidthThin:1px;--LanguageIOLA-fontWeightRegular:400;--LanguageIOLA-colorBackgroundButtonSuccess:rgb(69, 198, 90);--LanguageIOLA-splitViewColorBackgroundRowHover:rgb(255, 255, 255);--LanguageIOLA-paletteYellow20:rgb(79, 33, 0);--LanguageIOLA-bannerUserDefaultImage:;--LanguageIOLA-elevation8:8;--LanguageIOLA-brandDark:rgb(1, 118, 211);--LanguageIOLA-colorBackgroundPathCurrentHover:rgb(255, 255, 255);--LanguageIOLA-elevation0:0;--LanguageIOLA-elevation2:2;--LanguageIOLA-pageHeaderJoinedColorBorder:rgb(201, 201, 201);--LanguageIOLA-elevation4:4;--LanguageIOLA-durationPaused:3.2s;--LanguageIOLA-colorBrand:rgb(27, 150, 255);--LanguageIOLA-colorBackgroundPathComplete:rgb(59, 167, 85);--LanguageIOLA-progressColorBorderHover:rgb(1, 118, 211);--LanguageIOLA-spacingXxSmall:0.25rem;--LanguageIOLA-tableCellSpacing:0.5rem;--LanguageIOLA-colorBorderContextBarThemeDefault:rgb(13, 157, 218);--LanguageIOLA-colorBackgroundAnchor:rgb(243, 243, 243);--LanguageIOLA-paletteYellow30:rgb(111, 52, 0);--LanguageIOLA-shadowButtonFocusInverse:0 0 3px #f3f3f3;--LanguageIOLA-welcomeMatFontSizeInfoTitle:2.625rem;--LanguageIOLA-colorBorderLinkFocusInverse:rgb(243, 243, 243);--LanguageIOLA-borderRadiusCircle:50%;--LanguageIOLA-buttonColorBorderSecondary:rgba(255, 255, 255, 0.8);--LanguageIOLA-colorTextSuccessInverse:rgb(69, 198, 90);--LanguageIOLA-varSpacingXLarge:2rem;--LanguageIOLA-sizeXLarge:40rem;--LanguageIOLA-varSpacingHorizontalXxxSmall:0.125rem;--LanguageIOLA-elevation3Inset:-3;--LanguageIOLA-lineHeightTab:2.5rem;--LanguageIOLA-colorBackgroundDestructiveActive:rgb(142, 3, 15);--LanguageIOLA-colorTextLinkPrimaryActive:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundPageHeader:rgb(255, 255, 255);--LanguageIOLA-colorBackgroundPill:rgb(255, 255, 255);--LanguageIOLA-fillBrandHover:rgb(1, 68, 134);--LanguageIOLA-colorBorderContextBarItem:rgba(0, 0, 0, 0.2);--LanguageIOLA-borderStrokeWidthThin:1px;--LanguageIOLA-progressColorBorderShade:rgb(243, 243, 243);--LanguageIOLA-heightHeader:2.75rem;--LanguageIOLA-shadowInlineEdit:0 2px 4px 4px rgba(0, 0, 0, 0.16);--LanguageIOLA-colorBackgroundNotificationBadgeHover:rgb(1, 68, 134);--LanguageIOLA-borderRadiusPill:15rem;--LanguageIOLA-colorTextButtonInverseDisabled:rgba(255, 255, 255, 0.5);--LanguageIOLA-sizeXxxSmall:3rem;--LanguageIOLA-colorBackgroundSuccessDarker:rgb(25, 78, 49);--LanguageIOLA-colorBackgroundToggleHover:rgb(147, 147, 147);--LanguageIOLA-paletteYellow15:rgb(46, 34, 4);--LanguageIOLA-paletteYellow10:rgb(40, 18, 2);--LanguageIOLA-cardSpacingSmall:0.75rem;--LanguageIOLA-illustrationEmptyStateTasks:url(/_slds/images/illustrations/empty-state-tasks.svg?cache=dc5e5e5b);--LanguageIOLA-brandBandScrimHeight:3.125rem;--LanguageIOLA-popoverWalkthroughColorBackground:rgb(0, 22, 57);--LanguageIOLA-colorBorderErrorDark:rgb(254, 143, 125);--LanguageIOLA-heightTappableSmall:2rem;--LanguageIOLA-colorBackgroundButtonBrandDisabled:rgb(243, 243, 243);--LanguageIOLA-colorBorderPrimary:rgb(201, 201, 201);--LanguageIOLA-colorGray1:rgb(255, 255, 255);--LanguageIOLA-fontSizeXLarge:1.5rem;--LanguageIOLA-varSquareIconMediumBoundary:2rem;--LanguageIOLA-colorGray5:rgb(221, 219, 218);--LanguageIOLA-colorGray4:rgb(236, 235, 234);--LanguageIOLA-colorGray3:rgb(243, 242, 242);--LanguageIOLA-colorGray2:rgb(250, 250, 249);--LanguageIOLA-opacity8:0.8;--LanguageIOLA-salesforceSansBoldItalicWoff2:url(/_slds/fonts/v2.3.0/SalesforceSans-BoldItalic.woff2);--LanguageIOLA-opacity5:0.5;--LanguageIOLA-squareIconGlobalIdentityIcon:1.25rem;--LanguageIOLA-colorBackgroundBrowser:rgb(116, 116, 116);--LanguageIOLA-colorTextIconInverseActive:rgb(255, 255, 255);--LanguageIOLA-shadowDocked:0 -2px 2px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-colorBackgroundInputError:rgb(253, 221, 227);--LanguageIOLA-colorGray9:rgb(112, 110, 107);--LanguageIOLA-colorGray8:rgb(150, 148, 146);--LanguageIOLA-colorGray7:rgb(176, 173, 171);--LanguageIOLA-colorGray6:rgb(201, 199, 197);--LanguageIOLA-colorTextLinkInverse:rgb(255, 255, 255);--LanguageIOLA-squareIconSmallBoundary:1.5rem;--LanguageIOLA-varSpacingHorizontalXLarge:2rem;--LanguageIOLA-colorBackgroundDark:rgb(243, 243, 243);--LanguageIOLA-colorTextWarningAlt:rgb(140, 75, 2);--LanguageIOLA-elevationInverseShadow2:0 -2px 2px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-elevationInverseShadow0:none;--LanguageIOLA-colorStrokeBrand:rgb(1, 118, 211);--LanguageIOLA-colorBackgroundToggleActive:rgb(1, 68, 134);--LanguageIOLA-colorBorderContextBarDivider:rgba(255, 255, 255, 0.2);--LanguageIOLA-zIndexToast:10000;--LanguageIOLA-colorBackgroundContextBarActionHighlight:rgba(255, 255, 255, 0.2);--LanguageIOLA-colorBackgroundBrandPrimaryFocus:rgb(1, 68, 134);--LanguageIOLA-buttonColorBackgroundBrandPrimary:rgb(1, 118, 211);--LanguageIOLA-brandHeaderContrastWarm:rgb(186, 5, 23);--LanguageIOLA-buttonColorTextPrimary:rgb(255, 255, 255);--LanguageIOLA-colorBrandDarker:rgb(1, 68, 134);--LanguageIOLA-colorBorderPathCurrentHover:rgb(3, 45, 96);--LanguageIOLA-colorTextButtonDefaultDisabled:rgb(201, 201, 201);--LanguageIOLA-colorBackgroundPathLost:rgb(234, 0, 30);--LanguageIOLA-einsteinHeaderBackground:url(/_slds/images/einstein-headers/einstein-header-background.svg?cache=ff7fa2ff);--LanguageIOLA-brandTextLink:rgb(1, 118, 211);--LanguageIOLA-sliderTrackColorBackground:rgb(243, 243, 243);--LanguageIOLA-colorContrastPrimary:rgb(243, 243, 243);--LanguageIOLA-groupDefaultAvatar:url(/_slds/images/group_avatar_200.png?cache=a0044dae);--LanguageIOLA-templateProfileGutters:0;--LanguageIOLA-sizeXxSmall:6rem;--LanguageIOLA-colorBackgroundPayload:rgb(243, 243, 243);--LanguageIOLA-paletteCloudBlue90:rgb(207, 233, 254);--LanguageIOLA-colorBackgroundPathActive:rgb(1, 68, 134);--LanguageIOLA-colorTextDestructive:rgb(234, 0, 30);--LanguageIOLA-squareIconLargeBoundary:3rem;--LanguageIOLA-colorBorderWarning:rgb(254, 147, 57);--LanguageIOLA-shadowSoftPrimaryHover:none;--LanguageIOLA-paletteCloudBlue95:rgb(234, 245, 254);--LanguageIOLA-spacingSmall:0.75rem;--LanguageIOLA-colorBackgroundErrorDark:rgb(186, 5, 23);--LanguageIOLA-brandHeaderContrastWeakDisabled:rgba(166, 166, 166, 0.25);--LanguageIOLA-squareIconMediumContentAlt:0.875rem;--LanguageIOLA-colorBackgroundButtonInverse:rgba(0, 0, 0, 0);--LanguageIOLA-brandHeader:rgb(255, 255, 255);--LanguageIOLA-lineHeightText:1.5;--LanguageIOLA-widthStageLeftExpanded:15rem;--LanguageIOLA-colorBackgroundError:rgb(254, 92, 76);--LanguageIOLA-colorTextButtonBrandActive:rgb(255, 255, 255);--LanguageIOLA-fontFamily:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';--LanguageIOLA-mqMedium:only screen and (min-width: 48em);--LanguageIOLA-brandDarkActive:rgb(37, 48, 69);--LanguageIOLA-colorBackgroundPathStepActionActive:rgb(0, 22, 57);--LanguageIOLA-neutrafaceDisplayWoff2:url(/_slds/fonts/NeutrafaceDisplay.woff2?cache=2.9.0);--LanguageIOLA-spacingMedium:1rem;--LanguageIOLA-colorTextModal:rgb(255, 255, 255);--LanguageIOLA-spinnerSizeLarge:2.75rem;--LanguageIOLA-carouselIndicatorColorBackgroundHover:rgb(243, 243, 243);--LanguageIOLA-shadowActionOverflowFooter:0 -2px 4px #f3f3f3;--LanguageIOLA-popoverWalkthroughHeaderColorBackground:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundPathWon:rgb(46, 132, 74);--LanguageIOLA-lineHeightToggle:1.3rem;--LanguageIOLA-neutrafaceDisplayWoff:url(/_slds/fonts/NeutrafaceDisplay.woff?cache=2.9.0);--LanguageIOLA-cardFooterPadding:0 1rem 0.75rem;--LanguageIOLA-sliderHandleColorBackground:rgb(27, 150, 255);--LanguageIOLA-colorBackgroundErrorAlt:rgb(254, 143, 125);--LanguageIOLA-colorBackgroundIndicatorDot:rgb(3, 45, 96);--LanguageIOLA-chatMessageColorBackgroundInbound:rgb(243, 243, 243);--LanguageIOLA-elevationShadow0:none;--LanguageIOLA-heightPill:1.625rem;--LanguageIOLA-elevationShadow4:0 4px 4px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-elevationShadow2:0 2px 2px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-elevationShadow8:0 8px 8px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-varFontSize8:1.5rem;--LanguageIOLA-colorBackgroundButtonDefaultDisabled:rgb(255, 255, 255);--LanguageIOLA-varFontSize7:1.25rem;--LanguageIOLA-elevationInverseShadow8:0 -8px 8px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-varFontSize9:1.75rem;--LanguageIOLA-brandBandColorBackgroundPrimary:rgba(0, 0, 0, 0);--LanguageIOLA-colorTextButtonBrand:rgb(255, 255, 255);--LanguageIOLA-elevationInverseShadow4:0 -4px 4px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-colorBackgroundToggleActiveHover:rgb(1, 68, 134);--LanguageIOLA-welcomeMatBackgroundImageInfo:url(/_slds/images/welcome-mat/bg-info@2x.png?cache=ddb4e82f);--LanguageIOLA-varFontSize2:0.75rem;--LanguageIOLA-varFontSize1:0.625rem;--LanguageIOLA-varFontSize4:0.875rem;--LanguageIOLA-pageHeaderSpacingRow:0.75rem 1rem;--LanguageIOLA-varFontSize3:0.8125rem;--LanguageIOLA-varFontSize6:1.125rem;--LanguageIOLA-varFontSize5:1rem;--LanguageIOLA-varSpacingVerticalMedium:1rem;--LanguageIOLA-pageHeaderSpacingPadding:1rem;--LanguageIOLA-colorTextModalButton:rgb(116, 116, 116);--LanguageIOLA-colorBackgroundPrimary:rgb(255, 255, 255);--LanguageIOLA-colorTextInputFocusInverse:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundScrollbarTrack:rgb(201, 201, 201);--LanguageIOLA-paletteNeutral70:rgb(174, 174, 174);--LanguageIOLA-brandPrimaryActive:rgb(1, 118, 211);--LanguageIOLA-popoverWalkthroughAltImage:;--LanguageIOLA-nubbinTriangleOffset:-0.1875rem;--LanguageIOLA-salesforceSansLightWoff:url(/_slds/fonts/v2.3.0/SalesforceSans-Light.woff);--LanguageIOLA-colorBorderSuccessDark:rgb(46, 132, 74);--LanguageIOLA-mqHighRes:only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-pixel-ratio: 2),screen and (min-resolution: 192dpi),screen and (min-resolution: 2dppx);--LanguageIOLA-brandBandColorBackgroundPrimaryTransparent:rgba(0, 0, 0, 0);--LanguageIOLA-colorBackgroundContextBarInverseItemActive:rgba(255, 255, 255, 0.4);--LanguageIOLA-colorTextButtonDefaultHint:rgb(174, 174, 174);--LanguageIOLA-salesforceSansItalicWoff2:url(/_slds/fonts/v2.3.0/SalesforceSans-Italic.woff2);--LanguageIOLA-paletteGreen60:rgb(59, 167, 85);--LanguageIOLA-heightContextBar:2.5rem;--LanguageIOLA-colorBackgroundOrgSwitcherArrow:rgb(0, 22, 57);--LanguageIOLA-paletteGreen65:rgb(65, 182, 88);--LanguageIOLA-brandHeaderContrastInverse:rgb(255, 255, 255);--LanguageIOLA-notificationColorBackgroundInverse:rgb(116, 116, 116);--LanguageIOLA-colorBackgroundButtonIconDisabled:rgb(255, 255, 255);--LanguageIOLA-paletteNeutral60:rgb(147, 147, 147);--LanguageIOLA-colorBorderContextBarThemeDefaultAlt:rgb(243, 243, 243);--LanguageIOLA-fillBrand:rgb(1, 118, 211);--LanguageIOLA-colorBackgroundInputCheckbox:rgb(255, 255, 255);--LanguageIOLA-colorBorder:rgb(201, 201, 201);--LanguageIOLA-squareIconSmall:1rem;--LanguageIOLA-varSpacingHorizontalMedium:1rem;--LanguageIOLA-illustrationColorPrimary:rgb(144, 208, 254);--LanguageIOLA-varSpacingVerticalXSmall:0.5rem;--LanguageIOLA-colorTextPlaceholder:rgb(116, 116, 116);--LanguageIOLA-einsteinHeaderBackgroundColor:rgb(144, 208, 254);--LanguageIOLA-paletteGreen70:rgb(69, 198, 90);--LanguageIOLA-brandHeaderContrast:rgb(94, 94, 94);--LanguageIOLA-inputStaticColor:rgb(24, 24, 24);--LanguageIOLA-paletteNeutral90:rgb(229, 229, 229);--LanguageIOLA-paletteGreen90:rgb(205, 239, 196);--LanguageIOLA-spacingXxLarge:3rem;--LanguageIOLA-shadowDropDown:0 2px 3px 0 rgba(0, 0, 0, 0.16);--LanguageIOLA-paletteNeutral95:rgb(243, 243, 243);--LanguageIOLA-colorBackgroundModal:rgb(255, 255, 255);--LanguageIOLA-elevationShadow3Below:0 3px 3px 0 rgba(0, 0, 0, 0.16) inset;--LanguageIOLA-paletteRed80:rgb(254, 184, 171);--LanguageIOLA-sliderTrackWidth:100%;--LanguageIOLA-elevation32:32;--LanguageIOLA-globalHeaderColorBackground:rgb(255, 255, 255);--LanguageIOLA-spacingXLarge:2rem;--LanguageIOLA-paletteGreen80:rgb(145, 219, 139);--LanguageIOLA-colorBorderInputActive:rgb(27, 150, 255);--LanguageIOLA-varSpacingXSmall:0.5rem;--LanguageIOLA-paletteNeutral80:rgb(201, 201, 201);--LanguageIOLA-colorBackgroundModalButton:rgba(0, 0, 0, 0.07);--LanguageIOLA-colorBorderPathDivider:rgb(255, 255, 255);--LanguageIOLA-colorTextIconDefault:rgb(116, 116, 116);--LanguageIOLA-zIndexDeepdive:-99999;--LanguageIOLA-elevation16:16;--LanguageIOLA-paletteRed90:rgb(254, 222, 216);--LanguageIOLA-globalnavigationItemHeightAccentActive:3px;--LanguageIOLA-templateGutters:0;--LanguageIOLA-paletteRed95:rgb(254, 241, 238);--LanguageIOLA-buttonColorBorderBrandPrimary:rgb(1, 118, 211);--LanguageIOLA-buttonIconBoundaryTouch:2.75rem;--LanguageIOLA-brandBackgroundPrimaryTransparent:rgba(176, 196, 223, 0);--LanguageIOLA-fillHeaderButtonFocus:rgb(1, 118, 211);--LanguageIOLA-colorBorderError:rgb(234, 0, 30);--LanguageIOLA-colorTextLinkHover:rgb(1, 68, 134);--LanguageIOLA-paletteGreen95:rgb(235, 247, 230);--LanguageIOLA-einsteinHeaderFigure:url(/_slds/images/einstein-headers/einstein-figure.svg?cache=ec975fb1);--LanguageIOLA-colorBorderRowSelected:rgb(1, 118, 211);--LanguageIOLA-colorStrokeBrandHover:rgb(1, 118, 211);--LanguageIOLA-paletteNeutral30:rgb(68, 68, 68);--LanguageIOLA-varSpacingVerticalXxxSmall:0.125rem;--LanguageIOLA-paletteHotOrange10:rgb(40, 18, 2);--LanguageIOLA-colorTextButtonBrandDisabled:rgb(255, 255, 255);--LanguageIOLA-squareIconXSmallContent:0.5rem;--LanguageIOLA-varFontSize10:2rem;--LanguageIOLA-paletteRed60:rgb(254, 92, 76);--LanguageIOLA-varFontSize11:2.625rem;--LanguageIOLA-paletteRed65:rgb(254, 119, 101);--LanguageIOLA-buttonBorderRadius:.25rem;--LanguageIOLA-squareTappableXSmall:1.5rem;--LanguageIOLA-colorBackgroundGuidance:rgb(255, 255, 255);--LanguageIOLA-colorTextContextBarInverse:rgb(255, 255, 255);--LanguageIOLA-paletteNeutral20:rgb(46, 46, 46);--LanguageIOLA-fontFamilyHeading:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';--LanguageIOLA-paletteRed70:rgb(254, 143, 125);--LanguageIOLA-brandHeaderContrastCoolActive:rgb(1, 68, 134);--LanguageIOLA-borderWidthThick:2px;--LanguageIOLA-pageHeaderShadow:none;--LanguageIOLA-spinnerSizeXxSmall:0.5rem;--LanguageIOLA-tableColorBackgroundHeader:rgb(255, 255, 255);--LanguageIOLA-pageHeaderColorBackgroundAlt:rgb(255, 255, 255);--LanguageIOLA-colorBorderBrandPrimaryHover:rgb(1, 118, 211);--LanguageIOLA-colorTextTabLabelActive:rgb(3, 45, 96);--LanguageIOLA-paletteNeutral50:rgb(116, 116, 116);--LanguageIOLA-colorBackgroundTempModalTint:rgba(126, 140, 153, 0.8);--LanguageIOLA-fontSizeMedium:1rem;--LanguageIOLA-colorBorderButtonBrand:rgb(1, 118, 211);--LanguageIOLA-paletteHotOrange30:rgb(126, 38, 0);--LanguageIOLA-paletteRed40:rgb(186, 5, 23);--LanguageIOLA-brandBandImageHeightSmall:6rem;--LanguageIOLA-colorTextInverseWeak:rgb(174, 174, 174);--LanguageIOLA-colorTextInverse:rgb(255, 255, 255);--LanguageIOLA-shadowLinkFocusInverse:0 0 3px #f3f3f3;--LanguageIOLA-squareIconXxSmallBoundary:1rem;--LanguageIOLA-lineHeightReset:1;--LanguageIOLA-verticalNavigationColorBackgroundShadeRowActive:rgb(243, 243, 243);--LanguageIOLA-colorBackgroundTempModal:rgba(126, 140, 153, 0.8);--LanguageIOLA-colorBackgroundToggleDisabled:rgb(174, 174, 174);--LanguageIOLA-colorGray13:rgb(8, 7, 7);--LanguageIOLA-colorGray10:rgb(81, 79, 77);--LanguageIOLA-paletteNeutral40:rgb(92, 92, 92);--LanguageIOLA-colorBorderInverse:rgb(0, 22, 57);--LanguageIOLA-carouselIndicatorColorBackgroundActive:rgb(1, 118, 211);--LanguageIOLA-colorBackgroundBackdrop:rgba(255, 255, 255, 0.75);--LanguageIOLA-colorGray12:rgb(43, 40, 38);--LanguageIOLA-colorGray11:rgb(62, 62, 60);--LanguageIOLA-colorTextContextBarActionTrigger:rgba(255, 255, 255, 0.4);--LanguageIOLA-paletteHotOrange20:rgb(74, 36, 19);--LanguageIOLA-colorBackgroundNotification:rgb(255, 255, 255);--LanguageIOLA-colorBackgroundPathStepActionCurrent:rgb(1, 68, 134);--LanguageIOLA-badgeColorBackgroundInverse:rgb(116, 116, 116);--LanguageIOLA-colorBorderSeparatorInverse:rgb(3, 45, 96);--LanguageIOLA-paletteRed50:rgb(234, 0, 30);--LanguageIOLA-colorBackgroundSpinnerDot:rgb(174, 174, 174);--LanguageIOLA-colorBackgroundButtonBrandActive:rgb(3, 45, 96);--LanguageIOLA-paletteHotOrange15:rgb(66, 22, 4);--LanguageIOLA-sliderHandleColorBackgroundFocus:rgb(1, 118, 211);--LanguageIOLA-spinnerSizeMedium:2rem;--LanguageIOLA-brandPrimary:rgb(27, 150, 255);--LanguageIOLA-paletteHotOrange50:rgb(216, 58, 0);--LanguageIOLA-colorTextLinkPrimaryFocus:rgb(1, 118, 211);--LanguageIOLA-colorTextInputDisabled:rgb(116, 116, 116);--LanguageIOLA-brandLogoImage:url(/_slds/images/logo-noname.svg?cache=380754d9);--LanguageIOLA-brandLight:rgb(244, 246, 254);--LanguageIOLA-paletteRed20:rgb(100, 1, 3);--LanguageIOLA-fillHeaderButton:rgb(174, 174, 174);--LanguageIOLA-varLineHeightText:1.5;--LanguageIOLA-colorBackgroundPathCurrent:rgb(255, 255, 255);--LanguageIOLA-colorBackgroundOffline:rgb(68, 68, 68);--LanguageIOLA-colorBorderTabSelected:rgb(1, 118, 211);--LanguageIOLA-colorTextWarning:rgb(254, 147, 57);--LanguageIOLA-salesforceSansRegularWoff:url(/_slds/fonts/v2.3.0/SalesforceSans-Regular.woff);--LanguageIOLA-paletteHotOrange40:rgb(170, 48, 1);--LanguageIOLA-cardSpacingLarge:1.5rem;--LanguageIOLA-paletteRed30:rgb(142, 3, 15);--LanguageIOLA-fontSizeMediumA:1.125rem;--LanguageIOLA-borderRadiusMedium:0.25rem;--LanguageIOLA-colorPickerSliderThumbBorderColor:rgb(68, 68, 68);--LanguageIOLA-shadowSoftPrimary:none;--LanguageIOLA-zIndexDropdown:7000;--LanguageIOLA-paletteHotOrange70:rgb(255, 144, 110);--LanguageIOLA-verticalNavigationColorBackgroundShadeRowHover:rgb(243, 243, 243);--LanguageIOLA-squareIconMediumBoundary:2rem;--LanguageIOLA-colorBackgroundButtonDefaultFocus:rgb(243, 243, 243);--LanguageIOLA-heightTappable:2.75rem;--LanguageIOLA-colorBackgroundToastError:rgb(234, 0, 30);--LanguageIOLA-brandBandDefaultImage:;--LanguageIOLA-durationQuickly:0.1s;--LanguageIOLA-colorBackgroundSelection:rgb(216, 230, 254);--LanguageIOLA-paletteHotOrange60:rgb(255, 93, 45);--LanguageIOLA-colorBackgroundActionbarIconUtility:rgb(116, 116, 116);--LanguageIOLA-colorBackgroundNotificationBadgeFocus:rgb(1, 68, 134);--LanguageIOLA-paletteHotOrange65:rgb(255, 120, 79);--LanguageIOLA-cardFooterTextAlign:right;--LanguageIOLA-colorBorderBrandDark:rgb(1, 68, 134);--LanguageIOLA-brandBackgroundDark:rgb(232, 232, 232);--LanguageIOLA-avatarGroupColorBackgroundLightest:rgb(255, 255, 255);--LanguageIOLA-colorTextContextBar:rgb(68, 68, 68);--LanguageIOLA-inputStaticFontWeight:400;--LanguageIOLA-paletteRed10:rgb(48, 12, 1);--LanguageIOLA-colorTextLinkDisabled:rgb(3, 45, 96);--LanguageIOLA-colorTextPathCurrent:rgb(1, 68, 134);--LanguageIOLA-paletteRed15:rgb(74, 12, 4);--LanguageIOLA-zIndexOverlay:8000;--LanguageIOLA-buttonColorBorderPrimary:rgb(243, 243, 243);--LanguageIOLA-paletteHotOrange90:rgb(255, 222, 213);--LanguageIOLA-shadowImage:0 1px 1px rgba(0, 0, 0, 0.16);--LanguageIOLA-paletteHotOrange95:rgb(254, 241, 237);--LanguageIOLA-cardHeaderPadding:0.75rem 1rem 0;--LanguageIOLA-colorBorderSeparatorAlt2:rgb(201, 201, 201);--LanguageIOLA-fillBrandActive:rgb(3, 45, 96);--LanguageIOLA-fontSizeTextMedium:1rem;--LanguageIOLA-spacingXSmall:0.5rem;--LanguageIOLA-chatMessageColorBackgroundOutboundAgent:rgb(116, 116, 116);--LanguageIOLA-colorBackgroundButtonIconHover:rgb(243, 243, 243);--LanguageIOLA-sliderHandleColorBackgroundActive:rgb(1, 118, 211);--LanguageIOLA-colorBorderSuccess:rgb(145, 219, 139);--LanguageIOLA-colorTextIconInverseHover:rgb(255, 255, 255);--LanguageIOLA-componentSpacingPadding:1rem;--LanguageIOLA-colorBorderDestructiveActive:rgb(142, 3, 15);--LanguageIOLA-colorBackgroundButtonInverseDisabled:rgba(0, 0, 0, 0);--LanguageIOLA-colorTextTabLabelFocus:rgb(1, 68, 134);--LanguageIOLA-paletteHotOrange80:rgb(254, 185, 165);--LanguageIOLA-colorBackgroundNotificationBadge:rgb(234, 0, 30);--LanguageIOLA-zIndexReminder:8500;--LanguageIOLA-colorBackgroundImageOverlay:rgba(0, 0, 0, 0.4);--LanguageIOLA-colorBackgroundReminderHover:rgb(255, 255, 255);--LanguageIOLA-colorTextPathCurrentHover:rgb(3, 45, 96);--LanguageIOLA-colorBackgroundCustomer:rgb(254, 147, 57);--LanguageIOLA-colorBackgroundButtonDefault:rgb(255, 255, 255);--LanguageIOLA-colorBackgroundInverseLight:rgb(3, 45, 96);--LanguageIOLA-salesforceSansBoldWoff:url(/_slds/fonts/v2.3.0/SalesforceSans-Bold.woff);--LanguageIOLA-progressColorBorderActive:rgb(27, 150, 255);--LanguageIOLA-fontSizeLarge:1.25rem;--LanguageIOLA-brandHeaderContrastWeakActive:rgb(129, 129, 129);--LanguageIOLA-brandHeaderContrastWarmActive:rgb(186, 5, 23);--LanguageIOLA-squareToggleSlider:1.25rem;--LanguageIOLA-progressBarColorBackgroundFillSuccess:rgb(46, 132, 74);--LanguageIOLA-colorBackgroundButtonBrand:rgb(1, 118, 211);--LanguageIOLA-colorBackgroundWarningDark:rgb(254, 147, 57);--LanguageIOLA-colorTextIconUtility:rgb(174, 174, 174);--LanguageIOLA-colorBackgroundScrollbar:rgb(243, 243, 243);--LanguageIOLA-chatMessageColorBackgroundStatus:rgb(255, 255, 255);--LanguageIOLA-colorBackgroundTempModalTintAlt:rgba(255, 255, 255, 0.75);--LanguageIOLA-pageHeaderBorderRadius:0;--LanguageIOLA-palettePink95:rgb(254, 240, 243);--LanguageIOLA-welcomeMatColorIconComplete:rgb(201, 201, 201);--LanguageIOLA-palettePink90:rgb(253, 221, 227);--LanguageIOLA-paletteViolet50:rgb(186, 1, 255);--LanguageIOLA-paletteTeal30:rgb(2, 77, 76);--LanguageIOLA-colorTextIconInverseDisabled:rgba(255, 255, 255, 0.15);--LanguageIOLA-bannerGroupDefaultImage:;--LanguageIOLA-colorBorderBrand:rgb(27, 150, 255);--LanguageIOLA-colorBackgroundInfo:rgb(116, 116, 116);--LanguageIOLA-heightToggle:1.5rem;--LanguageIOLA-badgeColorBackgroundLightest:rgb(255, 255, 255);--LanguageIOLA-brandBandColorBackgroundSecondary:rgba(0, 0, 0, 0);--LanguageIOLA-shadowSoftPrimaryActive:none;--LanguageIOLA-colorTextIconDefaultHint:rgb(174, 174, 174);--LanguageIOLA-colorBackgroundChromeMobile:rgb(1, 118, 211);--LanguageIOLA-colorPickerSwatchSize:1.25rem;--LanguageIOLA-colorBackgroundPathIncomplete:rgb(243, 243, 243);--LanguageIOLA-paletteTeal40:rgb(5, 103, 100);--LanguageIOLA-colorTextToggleDisabled:rgb(201, 201, 201);--LanguageIOLA-paletteViolet40:rgb(150, 2, 199);--LanguageIOLA-colorTextLinkInverseHover:rgba(255, 255, 255, 0.75);--LanguageIOLA-palettePink80:rgb(253, 182, 197);--LanguageIOLA-zIndexModal:9000;--LanguageIOLA-pageHeaderIconSize:2.25rem;--LanguageIOLA-colorTextDestructiveHover:rgb(186, 5, 23);--LanguageIOLA-colorBorderCanvasElementSelection:rgb(26, 185, 255);--LanguageIOLA-colorBackgroundSuccess:rgb(69, 198, 90);--LanguageIOLA-carouselIndicatorColorBackground:rgb(255, 255, 255);--LanguageIOLA-sliderTrackHeight:4px;--LanguageIOLA-squareIconSmallContent:0.75rem;--LanguageIOLA-colorBackgroundInputDisabled:rgb(243, 243, 243);--LanguageIOLA-paletteTeal50:rgb(11, 130, 124);--LanguageIOLA-palettePink70:rgb(254, 138, 167);--LanguageIOLA-paletteViolet30:rgb(115, 3, 148);--LanguageIOLA-mqSmall:only screen and (max-width: 47.9375em);--LanguageIOLA-brandBandImageHeightLarge:18.75rem;--LanguageIOLA-carouselIndicatorWidth:1rem;--LanguageIOLA-colorTextLinkActive:rgb(3, 45, 96);--LanguageIOLA-squareIconXxSmallContent:.875rem;--LanguageIOLA-fontSizeXSmall:0.625rem;--LanguageIOLA-palettePink