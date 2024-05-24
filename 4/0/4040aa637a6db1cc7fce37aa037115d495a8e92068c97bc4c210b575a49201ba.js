(function () {
  'use strict';

  // Encyclopedia Britannica

  let cafeMediaQuizIntroObserverSet = false;

  let buttonFound = false;

  const cafeMediaEBQuizObserver = new MutationObserver(() => {
    if (!buttonFound) {
      document.querySelectorAll('button').forEach((button) => {
        if (button.innerText === 'Next') {
          button.addEventListener(
            'click',
            () => {
              window.adthrive.refreshSlots();

              buttonFound = false;
            },
            {
              once: true,
            }
          );

          buttonFound = true;
        }
      });
    }
  });



  const cafeMediaEBQuizIntroObserver = new MutationObserver(() => {
    if (
      document.querySelector('div[data-testid="QuestionView"]') &&
      !cafeMediaQuizIntroObserverSet
    ) {
      cafeMediaEBQuizObserver.observe(
        document.querySelector('div[data-testid="QuestionView"]'),
        {
          childList: true,
          subtree: true,
          attributes: true,
        }
      );

      cafeMediaQuizIntroObserverSet = true;
    }
  });

  if (document.location.pathname.includes('/quiz/')) {
    cafeMediaEBQuizIntroObserver.observe(document.querySelector('body'), {
      childList: true,
      subtree: true,
      attributes: true,
    });

    setTimeout(() => {
      window.adthrive.slots._slots.forEach((_value, key) => {
        window.adthrive.slotManager.updateRefreshTimeout(key, 0);
      });
    }, 5000);
  }


  // Reload ads for media modal

  if (document.querySelector('.media-overlay-container')) {
    const cafeMediaSiteId = '61575e5c934c481d714b3ca9';

    const insertHeadTag = () => {
      window.adthrive = {};
      window.adthrive.cmd = [];
      window.adthrive.host = 'ads.adthrive.com';
      window.adthrive.plugin = 'adthrive-manual-spa';
      window.adthrive.threshold = Math.floor(Math.random() * 100 + 1);

      const script = document.createElement('script');

      script.async = true;
      script.type = 'text/javascript';
      script.src =
        'https://ads.adthrive.com/sites/' +
        cafeMediaSiteId +
        '/ads' +
        '.min.js?referrer=' +
        window.encodeURIComponent(window.location.href) +
        '&cb=' +
        window.adthrive.threshold;

      const node = document.getElementsByTagName('script')[0];

      node.parentNode.insertBefore(script, node);
    };

    const cleanUpSelectors = [
      'iframe[src*="track.adthrive"]',
      'iframe[src*="d.agkn.com"]',
      'iframe[src*="ads.adthrive"]',
      'script[src*="ads.adthrive"]',
      'script[src*="confiant"]',
      'script[src*="securepubads"]',
      'script[src*="amazon-adsystem"]',
      'script[src*="scorecardresearch"]',
      'script[src*="js.agkn.com"]',
      'link[rel="stylesheet"][href^="https://ads.adthrive"]',
      '.adthrive-comscore',
      '.adthrive-ad',
    ];

    const initCleanUpSelectors = [
      '.adthrive-comscore span',
      '.adthrive-ccpa-link',
      '.adthrive-privacy-preferences',
      '.adthrive-comscore.adthrive-footer-message',
    ];

    const cleanupAds = () => {
      document.body.classList.remove(
        'adthrive-device-desktop',
        'adthrive-device-tablet',
        'adthrive-device-phone'
      );

      initCleanUpSelectors.forEach((selector) =>
        document.querySelectorAll(selector).forEach((el, i) => {
          if (i > 0) el.remove();
        })
      );

      cleanUpSelectors.forEach(      );

      if (
        window.googletag &&
        typeof window.googletag.destroySlots === 'function'
      ) {
        window.googletag.destroySlots();
      }

      if (
        window.adthrive.slots &&
        window.adthrive.slots._slots &&
        window.adthrive.slots._slots.size
      ) {
        window.adthrive.slots._slots.forEach(;
      }

      if (
        window.adthrive._googleAdManager &&
        window.adthrive._googleAdManager._slots &&
        window.adthrive._googleAdManager._slots._slots &&
        window.adthrive._googleAdManager._slots._slots.size
      ) {
        window.adthrive._googleAdManager._slots._slots.forEach((slot) => {
          window.adthrive._googleAdManager._slots._slots.delete(slot.id);
        });
      }

      if (window.adthrive && window.adthrive._googleAdManager) {
        window.adthrive._googleAdManager._started = false;
      }

      if (window.pbjs && typeof window.pbjs.removeAdUnit === 'function') {
        window.pbjs.removeAdUnit();
      }
    };

    const initializeAds = 

    // Remove body class when modal closed
      const removeBodyClass = () => {
          const bodyClassArray = [...document.body.classList];
          if (bodyClassArray.includes('gallery-open')) {
              document.body.classList.remove('gallery-open');
              initializeAds();
          } else {
              return;
          }
      };

    let modalAdLocationExists = !!document.querySelector('.media-overlay-container #media-overlay-ad');

    let initializationAllowed = true;

    const addObserver = () => {
      if (!document.body) {
        setTimeout(addObserver, 50);

        return;
      }

      const observer = new MutationObserver(() => {
        const intializeTrigger = [];

        if (document.querySelector('.media-overlay-container #media-overlay-ad')) {
          if (!modalAdLocationExists) {
            intializeTrigger.push(true);
          }
          modalAdLocationExists = true;
        } else {
          modalAdLocationExists = false;
          removeBodyClass();
        }

        if (intializeTrigger.length > 0 && initializationAllowed) {
          initializationAllowed = false;

          // Set the exclusion body class
          document.body.classList.add('gallery-open');
          
          initializeAds();

          intializeTrigger.length = 0;

          setTimeout( 100);
        }
      });

      observer.observe(document.querySelector('body'), {
        childList: true,
        subtree: true,
        attributes: true,
      });
    };

    addObserver();
  }

}());
