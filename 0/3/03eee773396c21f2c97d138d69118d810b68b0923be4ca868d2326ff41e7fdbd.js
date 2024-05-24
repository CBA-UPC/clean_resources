(function adspaceTrboFallbackHandling() {
  if (window.adspaceTrboFallbackActive) { return; } // might be handy in the future, if delivered via OCCL
  window.adspaceTrboFallbackActive = true;

  injectStyles();

  // Check if document is ready
  // wait if this may not be the case
  if (document.readyState === 'loading') {
    return document.addEventListener('DOMContentLoaded', adspaceTrboFallbackHandling, false);
  }

  // after timeout handle Adspaces (show fallback or remove parent if no contents)
  window.setTimeout(function () {
    if (document.location.href.indexOf("trppids") === -1) {
      handleAdspaces();
    }
  }, getTimeout());

  /**
   * Gets the timeout value from page config
   *
   * @returns {Number} The timeout value in ms, defaults to 1000ms
   */
  function getTimeout() {
    const timeoutElement = document.querySelector("#trbo_adspace_fallback");
    const timeout = parseInt(timeoutElement.dataset.timeout, 10);
    return timeout ? timeout : 1000;
  }

  /**
   * Check for child elements that contain content elements.
   * If the only child element is a headline the element is considered "empty".
   *
   * @param {HTMLElement} element The element that is to be iterated over
   * @returns {Boolean} Whether child elements with content have been found
   */
  function hasTrueChildren(element) {
    const children = element.querySelectorAll(":scope > *");
    var result = false;

    children.forEach(function (el) {
      if (!el.classList.contains("headline")) {
        result = true;
      }
    });

    return result;
  }

  /**
   * Removes an element from the DOM if it has no child element with content in it
   *
   * @param {HTMLElement} container An HTMLElement with child elements
   */
  function cleanUpWhenNoChildren(container) {
    // Remove container when no children or only children with a class of headline were found
    if (!hasTrueChildren(container)) {
      const inner = container.parentElement;
      container.remove();

      // Remove inner when no children
      if (inner.querySelectorAll(":scope > *").length === 0) {
        const section = inner.parentElement;
        inner.remove();

        // Remove section when no children
        if (section.querySelectorAll(":scope > *")) {
          section.remove();
        }
      }
    }
  }

  /**
   * Replace Trbo adspaces with fallback elements
   */
  function handleAdspaces() {
    const trboAdspaces = document.querySelectorAll('[data-js*="adspace-trbo"]');

    trboAdspaces.forEach(function (adspaceElement) {
      // show fallback
      const fallbackContent = adspaceElement.querySelector(":scope > :not(div.loader)");
      if (fallbackContent) {
        adspaceElement.replaceWith(fallbackContent);
        return; // this adspace is done if replaced with fallback
      }

      // hides parent wrapper, when empty (no trbo ad and no fallback)
      const isAdspaceHide = adspaceElement.classList.contains("hide");

      // POMA-22772 Workaround: If the Adspace is inside the tef-contact-link, do not remove it after timeout
      const disableRemovalForContactLink = adspaceElement.matches(
        "tef-contact-link .adspace-trbo.hide"
      );

      if (isAdspaceHide && !disableRemovalForContactLink) {
        const parent = adspaceElement.parentElement;
        adspaceElement.remove();

        const childrenLength = parent.querySelectorAll(":scope > *").length;
        if (childrenLength === 0) {
          const itemCollection = parent.parentElement;
          parent.remove();
          cleanUpWhenNoChildren(itemCollection);
        }
      }
    });
  }

  function injectStyles(){
    const isBrandBlau = !!window.location.host.match(/blau/g);
    const isBrandO2online = !!window.location.host.match(/o2online/g);
    const brand = isBrandBlau && !isBrandO2online ? 'blau' : 'o2online'; // makes sure we really are on blau and not on something like 2online.de/ablauf/

    // Same styles for both brands
    // Extracted from _loading-spinner.scss
    // *---- Spinner V2 ----* //
    const loadingSpinnerStylesShared =
      '.adspace-trbo .loading-spinner-2 { margin: 20px auto; width: 70px; text-align: center; display: block; font-size: 0; } \n'+
      '.adspace-trbo .loading-spinner-2 > div { width: 18px; height: 18px; font-size: 14px; margin: 0 2px; border-radius: 100%; display: inline-block; animation: bouncedelay 1.4s infinite ease-in-out; animation-fill-mode: both; } \n'+
      '.adspace-trbo .loading-spinner-2 .bounce1 { animation-delay: -.32s; } \n'+
      '.adspace-trbo .loading-spinner-2 .bounce2 { animation-delay: -.16s; } \n'+
      '@keyframes bouncedelay { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); }}; \n';

    // Same styles for both brands
    // Moved from adspace-trbo.scss
    const adspaceStylesShared =
      '.adspace-trbo { \n'+
      '  position: relative; \n'+
      '  min-height: 30px; \n'+
      '} \n'+
      '.adspace-trbo.loading .loader { \n'+
      '  background-color: #fff; \n'+
      '  position: absolute; \n'+
      '  bottom: 0; \n'+
      '  left: 0; \n'+
      '  right: 0; \n'+
      '  top: 0; \n'+
      '  z-index: 1050; \n'+
      '} \n'+
      '.adspace-trbo.loading .loader .spinner { \n'+
      '  position: absolute; \n'+
      '  left: 50%; \n'+
      '  top: 50%; \n'+
      '  transform: translateX(-50%) translateY(-50%); \n'+
      '} \n';

    // Brand specific styles
    // Extracted from adspace-trbo.scss
    const adspaceStylesBrand = {
      'o2online':
        '.adspace-trbo .loading-spinner-2 > div[class*="bounce"] { \n' +
        '   background-color: #005896; \n' +
        '} \n',
      'blau':
        '.adspace-trbo .loading-spinner-2 > div[class*="bounce"] { \n' +
        '   background-color: #00B6F1; \n'+
        '} \n'+
        'tef-carousel .adspace-trbo.loading .loader { \n'+
        '  background-color: #00B6F1; \n'+
        '} \n'+
        'tef-carousel .adspace-trbo.loading .loader .loading-spinner-2 div[class*="bounce"]{ \n'+
        '  background-color: #fff; \n'+
        '} \n'
    };

    const styles = adspaceStylesShared +' \n'+ adspaceStylesBrand[brand] +' \n'+ loadingSpinnerStylesShared;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
  }
}());
