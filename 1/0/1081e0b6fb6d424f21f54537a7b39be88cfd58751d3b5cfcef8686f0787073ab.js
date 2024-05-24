var INITIAL_RENDERING = !0,
  pubmaticOn = !0,
  BID_TIMEOUT = 2e3,
  apstagSlots = (pubSlots = []),
  APS_CONFIG = {
    pubID: '2202a6a5-32cd-4e86-a8b6-48b0a3829463',
    adServer: 'googletag',
    bidTimeout: BID_TIMEOUT,
  };
var cookieStrKey = 'privacy-policy';

var getCookie = function () {
  var cookies = document.cookie.split(';');
  var cookieObj;
  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i].indexOf(cookieStrKey) >= 0) {
      cookieObj = cookies[i];
      break;
    }
  }
  //cookie values are copied into cookieObj and return in JSON format.
  if (cookieObj) {
    cookieObj = cookieObj.substring(
      cookieObj.indexOf('=') + 1,
      cookieObj.length,
    );
    return JSON.parse(cookieObj);
  }
  return null;
};
var consentValue = getCookie() == 1 ? true : false;

apstag.init(APS_CONFIG),
  (tndbgmsg = (e, t = '') => {
    // console.log(
    //   '%cTNN',
    //   'font-weight:bold;color: white; background-color: #2a3e9d;padding: 4px;border-radius:4px;',
    //   e,
    //   t,
    // );
  }),
  (RENDER_ADS = (e) => {
    try {
      if (!e.length) return;
      googletag = window.googletag;
      let t = [],
        a = [],
        g = [];
      e.forEach((e) => {
        try {
          let t = e?.getAttribute('id'),
            o = JSON.parse(e?.getAttribute('data-dimensions')),
            d = e?.getAttribute('data-adunit'),
            i = { slotID: t, sizes: o, slotName: d };
          a.push(i), g.push(t);
        } catch (s) {
          tndbgmsg('ERROR : ', s);
        }
      });
      // let o = pubmaticOn && window.OWT.registerExternalBidders(g);

      googletag.cmd.push(() => {
        e.forEach((e, a) => {
          let g = e?.getAttribute('id'),
            o = JSON.parse(e?.getAttribute('data-dimensions')),
            d = e?.getAttribute('data-adunit');
          sec = e?.getAttribute('data-section');
          subsec = e?.getAttribute('data-subsec');
          ptype = e?.getAttribute('data-pagetype');
          medium = e?.getAttribute('data-med');
          source = e?.getAttribute('data-src');
          metaInfoAttr = e?.getAttribute('data-metaInfoAttr');
          id = e?.getAttribute('data-msid');
          sequence = e?.getAttribute('data-idx');
          query = e?.getAttribute('data-QueryId');
          origin = e?.getAttribute('data-origin');
          t[a] = d?.includes('_ROS_Interstitial')
            ? googletag
                .defineOutOfPageSlot(
                  d,
                  googletag.enums.OutOfPageFormat.INTERSTITIAL,
                )
                .addService(googletag.pubads())
            : googletag.defineSlot(d, o, g).addService(googletag.pubads());
        });
        // A) Enable with defaults.
        // googletag.pubads().enableLazyLoad();

        // B) Enable without lazy fetching. Additional calls override previous
        // ones.
        // googletag.pubads().enableLazyLoad({ fetchMarginPercent: -1 });

        // C) Enable lazy loading with...
        // googletag.pubads().enableLazyLoad({
        //   // Fetch slots within 5 viewports.
        //   fetchMarginPercent: origin.fetchMarginPercent,
        //   // Render slots within 2 viewports.
        //   fetchMarginPercent: origin.fetchMarginPercent,
        //   // Double the above values on mobile, where viewports are smaller
        //   // and users tend to scroll faster.
        //   mobileScaling: 2.0,
        // });
        // tndbgmsg('TNH sec : ', sec);
        // tndbgmsg('TNH sec : ', sequence);
        let isPubDone = false,
          isApsDone = false;
        googletag.pubads().clearTargeting();
        // googletag.pubads().setTargeting('lang', 'hi'),
        sec && googletag.pubads().setTargeting('section', [sec]);
        subsec && googletag.pubads().setTargeting('subsec', [subsec]);
        ptype && googletag.pubads().setTargeting('page', [ptype]);
        metaInfoAttr &&
          googletag.pubads().setTargeting('keyword', [metaInfoAttr]);
        id && googletag.pubads().setTargeting('articleid', [id]);
        sequence &&
          googletag.pubads().setTargeting('article_sequence', [sequence]);
        query && googletag.pubads().setTargeting('demo', [query]);

        googletag.pubads().setCentering(!0),
          googletag.pubads().enableSingleRequest(),
          googletag.pubads().enableAsyncRendering(),
          googletag.pubads().setPrivacySettings({
            restrictDataProcessing: consentValue,
          });

        googletag.pubads().disableInitialLoad(),
          googletag.enableServices(),
          e.forEach((e) => {
            let t = e?.getAttribute('id');
            t && googletag.display(t);
          }),
          a &&
            t &&
            pubmaticOn &&
            apstag.fetchBids({ slots: a || [], timeout: BID_TIMEOUT }, () => {
              isApsDone = true;
              // window.OWT.notifyExternalBiddingComplete(o),
              // googletag.cmd.push(function () {
              //   apstag.setDisplayBids(), googletag.pubads().refresh(t);
              // });
            });
        if (
          window?.PWT?.requestBids &&
          typeof window?.PWT?.requestBids === 'function'
        ) {
          PWT.initAdserverSet = false;
          PWT.setAuctionTimeout(1000);
          PWT.requestBids(PWT.generateConfForGPT(t), function (adUnitsArray) {
            PWT.addKeyValuePairsToGPTSlots(adUnitsArray);
            // initAdserver();
            isPubDone = true;
          });
        } else {
          isPubDone = true;
        }
        // googletag
        //   .pubads()
        //   .addEventListener('slotRenderEnded', function (event) {
        //     let e = event?.slot?.getSlotElementId();
        //     let p = event?.slot?.getAdUnitPath();
        //     if (e && !(ptype == 'article' && p?.includes('_Sticky'))) {
        //       document.getElementById(event.slot.getSlotElementId()).className =
        //         document
        //           .getElementById(event.slot.getSlotElementId())
        //           .className.replace('dfp ', 'dfploaded ');
        //     }
        //   });
        let refresh = () => {
          if (isPubDone && isApsDone) {
            googletag.cmd.push(function () {
              apstag.setDisplayBids(), googletag.pubads().refresh(t);
            });
          } else {
            setTimeout(refresh, 100);
          }
        };

        refresh();
      });
    } catch (d) {
      tndbgmsg('ADS ERROR : ', d);
    }
  });
// var PWT = {},
var googletag = googletag || {};
(googletag.cmd = googletag.cmd || []),
  // (PWT.jsLoaded = () => {
  //   var e = document.querySelectorAll('.dfp');
  //   'undefined' != typeof window &&
  //     e?.length > 0 &&
  //     INITIAL_RENDERING &&
  //     (RENDER_ADS(e || []), (INITIAL_RENDERING = !1));
  // }),
  (() => {
    // var e = document.createElement('script');
    // (e.async = !0),
    //   (e.id = 'dfppwt'),
    //   (e.type = 'text/javascript'),
    //   (e.src = `//ads.pubmatic.com/AdServer/js/pwt/156537/${
    //     document?.documentElement?.clientWidth < 720 ? 3401 : 445
    //   }/pwt.js`);
    // var t = document.getElementsByTagName('script')[0];
    // t.parentNode.insertBefore(e, t);
    var a = document.createElement('script');
    (a.id = 'dfpgpt'),
      (a.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js');
    var t = document.getElementsByTagName('script')[0];
    document.head.appendChild(a);

    // t.parentNode.insertBefore(a, t);

    a.onload = function () {
      var e = document.querySelectorAll('.dfp');
      'undefined' != typeof window &&
        e?.length > 0 &&
        INITIAL_RENDERING &&
        (RENDER_ADS(e || []), (INITIAL_RENDERING = !1));
    };
  })();
