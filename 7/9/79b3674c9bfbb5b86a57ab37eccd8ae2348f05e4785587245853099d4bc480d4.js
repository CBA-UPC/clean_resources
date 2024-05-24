let monadplugNativeDev = false;

let monadplugNativeNormalMode = true;
let monadplugNativeFirstMode = false;
let mobilePreviewNative = false;
const devTrackingNative = 'UA-162781796-2';
const devErrorTracking = 'UA-162781796-7';
const liveTrackingNative = 'UA-162781796-6';
const monadplugNativeVersion = 'v=2.1';

// REMOVE LATER
let monadplugIsIndexPage = false;
let monadplugIsIndexPageDarkPage = false;
if (
  window.location.host === 'dev2.index.hr' ||
  window.location.host === 'www.index.hr'
) {
  monadplugIsIndexPage = true;
}
if (monadplugIsIndexPage) {
  let a = document.getElementsByClassName('dark-theme');
  if (a.length > 0) monadplugIsIndexPageDarkPage = true;
}
// REMOVE LATER

const monadplugNativeConfig = {
  widgetType: 'native',
  location: null,
  spaFixOriginalWidgetLenght: 0,
  displayLogoPopup: true,
  useGtag: true,
  gtagId: monadplugNativeDev ? devTrackingNative : liveTrackingNative,
  fullPageCC: false,
  restrictions: {
    minHeightPercentage: 0.1,
    singleAd: 3,
    allAds: 15,
    singleAdTime: 24,
    allAdsTime: 12,
    timeoutAfterClick: 10,
    timeoutAferLoad: 2,
  },
  url: {
    errorScreenShot: '//cl-1.monadplug.com/track/?source=',
    adServers: ['//native-3.monadplug.com/?source='],
    configServers: ['//native-3.monadplug.com/view/settings/?source='],
  },
  counters: { maxFetchReattempt: 5, maxFetchReattemptInterval: 10 },
  timers: {
    global: 0,
    lastClick: 0,
    lastValidClick: 0,
    clickTimeout: false,
  },
  config: {
    baseUrl: '//cdn.monadplug.com/format/native/',
    disableClickBlocking: true,
    cardMinWidth: 130,
  },
  monadInfo: {
    modal: null,
    displayed: false,
  },
  widgetsData: [],
};

function getNativeConfig() {
  let config = {
    monadplugNativeDev,
    monadplugNativeNormalMode,
    monadplugNativeFirstMode,
    devTrackingNative,
    devErrorTracking,
    liveTrackingNative,
  };

  console.log(config);
  console.log(monadplugNativeConfig);
  console.log(mpn_ref);
  console.log(monadPlugPreviewConfigNative);
}

window.dataLayer = window.dataLayer || [];

gtagMPNative('js', new Date());
gtagMPNative('config', monadplugNativeConfig.gtagId, {
  cookie_prefix: 'mpn',
  custom_map: {
    dimension1: 'widget_format',
    dimension2: 'widget_id',
    dimension3: 'widget_location',
    dimension4: 'ad_server',
    dimension5: 'widget_version',
  },
});

gtagMPNative('config', devErrorTracking, {
  cookie_prefix: 'mpn-devE',
  custom_map: {
    dimension1: 'widget_format',
    dimension2: 'widget_id',
    dimension3: 'widget_location',
    dimension4: 'ad_server',
    dimension5: 'widget_version',
  },
});

gtagGeneralErrorNative = function (source, message, fetchUrl) {
  monadplugNativeDev && console.log('general_error: ', message);

  gtagMPNative('event', 'general_error', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: fetchUrl,
    widget_version: monadplugNativeVersion,
    event_label:
      'native' +
      ' * ' +
      window.location.href +
      ' * ' +
      message +
      ' * ' +
      fetchUrl +
      ' * ' +
      source,
  });
};

gtagAdMissing = function (source, fetchUrl, message) {
  monadplugNativeDev && console.log('ad_number: ', message);

  gtagMPNative('event', 'ad_number', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: fetchUrl,
    widget_version: monadplugNativeVersion,
    event_label:
      'native' +
      ' * ' +
      window.location.href +
      ' * ' +
      message +
      ' * ' +
      fetchUrl +
      ' * ' +
      source,
  });
};

gtagHttpErrorNative = function (source, status, fetchUrl) {
  gtagMPNative('event', 'http_status', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: fetchUrl,
    widget_version: monadplugNativeVersion,
    event_label:
      'native' +
      ' * ' +
      window.location.href +
      ' * ' +
      status +
      ' * ' +
      fetchUrl +
      ' * ' +
      source,
  });
};

gtagInvalidWidgetIdError = function (source) {
  gtagMPNative('event', 'invalid_widget_id', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: 'N/A',
    widget_version: monadplugNativeVersion,
    event_label: 'native' + ' * ' + window.location.href + ' * ' + source,
  });
};

gtagNoAdServersNative = function (source) {
  gtagMPNative('event', 'no_ad_servers', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: 'N/A',
    widget_version: monadplugNativeVersion,
    event_label: 'native' + ' * ' + window.location.href + ' * ' + source,
  });
};

gtagReattemptLimitErrorNative = function (source) {
  gtagMPNative('event', 'reattempt_limit', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: 'N/A',
    widget_version: monadplugNativeVersion,
    event_label: 'native' + ' * ' + window.location.href + ' * ' + source,
  });
};

gtagInitialiseFailedNative = function (ref) {
  gtagMPNative('event', 'initialise_error', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: 'N/A',
    ad_server: 'N/A',
    widget_version: monadplugNativeVersion,
    event_label:
      'native' + ' * ' + window.location.href + ' * ' + 'Ref: ' + ref,
  });
};

gtagInvalidClickErrorNative = function (source, message, fetchUrl) {
  gtagMPNative('event', 'invalid_click', {
    send_to: devErrorTracking,
    event_category: 'error',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: source,
    ad_server: fetchUrl,
    widget_version: monadplugNativeVersion,
    event_label:
      'native' +
      ' * ' +
      message +
      ' * ' +
      window.location.href +
      ' * ' +
      source,
  });
};

gtagSpaPotentialErrorNative = function (ref, originalLength) {
  gtagMPNative('event', 'spa_potential_error', {
    send_to: devErrorTracking,
    event_category: 'info',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: 'N/A',
    ad_server: 'N/A',
    widget_version: monadplugNativeVersion,
    event_label:
      'native' +
      ' * ' +
      window.location.href +
      ' * ' +
      'Ref:' +
      ref +
      ' originalLength: ' +
      originalLength,
  });
};

gtagSpaErrorNative = function (ref, originalLength) {
  gtagMPNative('event', 'spa_error', {
    send_to: devErrorTracking,
    event_category: 'info',
    widget_format: 'native',
    widget_location: window.location.href,
    widget_id: 'N/A',
    ad_server: 'N/A',
    widget_version: monadplugNativeVersion,
    event_label:
      'native' +
      ' * ' +
      window.location.href +
      ' * ' +
      'Ref:' +
      ref +
      ' originalLength: ' +
      originalLength,
  });
};

gtagItemCheckoutListNative = function (ads, source, fetchUrl) {
  let remapItems = [];

  for (let i = 0; i < ads.length; i++) {
    remapItems.push({
      id: ads[i].campaignId,
      name: ads[i].campaignId,
      list_name: source,
      brand: window.location.href,
      category: 'native',
      list_position: i + 1,
      quantity: 1,
      price: prepareNumberForAnaliticsPriceNative(ads[i].bid),
    });
  }

  gtagMPNative('event', 'begin_checkout', {
    send_to: monadplugNativeConfig.gtagId,
    widget_format: 'native',
    list_name: source,
    widget_id: source,
    ad_server: fetchUrl,
    widget_version: monadplugNativeVersion,
    widget_location: window.location.href,
    event_label: 'native' + ' * ' + window.location.href + ' * ' + source,
    items: remapItems,
  });
};

gtagItemPurchaseNative = function (ad, source, fetchUrl) {
  gtagMPNative('event', 'purchase', {
    send_to: monadplugNativeConfig.gtagId,
    widget_format: 'native',
    list_name: source,
    widget_id: source,
    ad_server: fetchUrl,
    widget_version: monadplugNativeVersion,
    widget_location: window.location.href,
    transaction_id: window.location.href + '--' + source + '--' + ad.campaignId,
    affiliation: window.location.href,
    value: prepareNumberForAnaliticsPriceNative(ad.bid),
    currency: 'USD',
    event_label: 'native' + ' * ' + window.location.href + ' * ' + source,
    items: [
      {
        id: ad.campaignId,
        name: ad.campaignId,
        list_name: source,
        brand: window.location.href,
        category: 'native',
        quantity: 1,
        price: prepareNumberForAnaliticsPriceNative(ad.bid),
      },
    ],
  });
};

prepareNumberForAnaliticsPriceNative = (bid) => {
  let result = Math.round(bid * 10000) / 100;
  return result;
};

createCommonCssPropertiesNative = function () {
  let css = '';

  const commonOveride =
    '.monadplug-native-main-wrapper * { box-sizing: border-box; text-align: left; text-align: -webkit-left; }';
  const mainWrapper =
    '.monadplug-native-main-wrapper { overflow-x: hidden; padding: 10px; padding-bottom: 0px; text-decoration: none !important; font-weight: 600; } .monadplug-native-main-wrapper img {margin: unset; width: unset}';
  const headerWrapper =
    '.monadplug-native-header-wrapper { display: flex; flex-direction: row; align-items: center; flex-wrap: wrap; margin-bottom: 10px; }';
  const headerTitle =
    '.monadplug-native-header-title { font-size: 15px; font-weight: bold; }';
  const headerLogoWrapper =
    '.monadplug-native-header-logo__wrapper { margin-left: auto}';
  const headerLogo =
    '.monadplug-native-header-logo { height: 25px; width: 106px!important; margin: unset; margin: unset}';
  const gridWrapper =
    '.monadplug-native-grid-wrapper { width: 100%; background-color: inherit; }';
  const gridContainer =
    '.monadplug-native-grid-container { display: grid; align-items: flex-start; justify-items: center; justify-content: space-between;  grid-auto-rows: 0; overflow: hidden; background-color: inherit; padding:10px 0}';
  const gridElement =
    '.monadplug-native-grid-element { display: flex;flex-direction: column;height: 100%;box-sizing: border-box!important;background-color: inherit;}';
  const multyClassCloseGridContent =
    '.monadplug-native-grid-content-wrapper, .monadplug-native-close-wrapper--closed, .monadplug-native-close-wrapper--opened { grid-area: 1 / 1; background-color: inherit; }';
  const gdImgContainer =
    '.monadplug-native-gd-img-container { overflow: hidden; cursor:pointer}';
  const gdImg =
    '.monadplug-native-gd-img { width: 100%!important; object-fit: cover; }';
  const gdImgHoverZoom =
    '.monadplug-native-gd-img-hover-zoom { transition: transform .5s ease; }';
  const gdImgHoverZoomHover =
    '.monadplug-native-gd-img-hover-zoom:hover { transform: scale(1.2); }';
  const gdTextWrapper =
    '.monadplug-native-gd-text-wrapper { padding: 5px; background-color: inherit; display: flex;flex: 1;padding-bottom: 10px}';
  const gdBlockWithTextWrapper =
    '.monadplug-native-gd-block-with-text-wrapper { width: 100%; background-color: inherit; display: flex;flex-direction: column;justify-content: space-between;height: 100%; cursor: pointer}';

  const disablePointerEvents =
    '.monadplug-native-disable-click-events {pointer-events: none; cursor: default;}';

  const hideElement = '.monadplug-native-hide-element {display: none}';
  const redirectUrl =
    '.monadplug-clicker{visibility: hidden; height:0px!important}';

  const clickableNo = '.monadplug-native-clickable-no { cursor: default}';

  const cta =
    '.monadplug-native-cta{padding: 5px 10px; margin-left:auto; transition: all 0.3s ease 0s; border-radius: 6px; text-align: center; margin-top: 10px; cursor: pointer}';
  const ctaHover =
    '.monadplug-native-cta:hover{border-radius: 50px; transition: all 0.3s ease 0s;}';

  const loading =
    '@keyframes loadingMonadplug { 0% {opacity: .2} 20% {opacity: 1} 100% {opacity: .2} } .monadplug-native-loading span {animation-name: loadingMonadplug;animation-duration: 1.4s;animation-iteration-count: infinite;animation-fill-mode: both;}.monadplug-native-loading span:nth-child(2) {animation-delay: .2s}.monadplug-native-loading span:nth-child(3) {animation-delay: .4s}';

  css =
    commonOveride +
    redirectUrl +
    mainWrapper +
    headerWrapper +
    headerTitle +
    headerLogoWrapper +
    headerLogo +
    loading +
    clickableNo +
    gridWrapper +
    gridContainer +
    gridElement +
    multyClassCloseGridContent +
    gdImgContainer +
    gdImg +
    gdImgHoverZoom +
    gdImgHoverZoomHover +
    gdTextWrapper +
    gdBlockWithTextWrapper +
    disablePointerEvents +
    hideElement +
    cta +
    ctaHover;

  createCSSNative(css, monadplugNativeConfig.widgetType + '-custom-css-5');
};

checkClickAmountNative = function (item) {
  let main = getCookieForAdNative();
  let currentClickCountMain = '00';
  let currentClickCountIntMain = 0;

  let single = getCookieForAdNative(item);
  let currentClickCount = '00';
  let currentClickCountInt = 0;

  if (main) {
    currentClickCountMain =
      main[8] === '0' ? `${main[9]}` : `${main[8]}${main[9]}`;
    currentClickCountIntMain = parseInt(currentClickCountMain);
  } else {
    createCookieForAdNative();
  }

  if (single) {
    currentClickCount =
      single[8] === '0' ? `${single[9]}` : `${single[8]}${single[9]}`;
    currentClickCountInt = parseInt(currentClickCount);
  } else {
    createCookieForAdNative(item);
  }
  main = getCookieForAdNative();
  single = getCookieForAdNative(item);

  return {
    values: { currentClickCountIntMain, currentClickCountInt },
    cookies: { main, single },
  };
};

createCookieForAdNative = function (ad) {
  let currentDate = new Date();
  let hours = ad
    ? monadplugNativeConfig.restrictions.singleAdTime
    : monadplugNativeConfig.restrictions.allAdsTime;
  currentDate.setHours(currentDate.getHours() + hours);
  const expireDate = currentDate.toUTCString();
  let cookieString = ad
    ? `monadplug-native-${ad.campaignId}=counter:00-ttl:${expireDate}; expires=${expireDate}; path=/`
    : `monadplug-native-main=counter:00-ttl:${expireDate}; expires=${expireDate}; path=/`;
  document.cookie = cookieString;
};

getCookieForAdNative = function (ad) {
  const name = ad
    ? `monadplug-native-${ad.campaignId}=`
    : `monadplug-native-main=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

setItemClickedCookieNative = function (values, cookies, ad) {
  const slicedTTLMain = getExpireDateFromCookieNative(cookies.main);
  const newClickCountMain = values.currentClickCountIntMain + 1;
  const countToStringMain =
    newClickCountMain > 9 ? newClickCountMain : `0${newClickCountMain}`;
  const cookieStringMain = `monadplug-native-main=counter:${countToStringMain}-ttl:${slicedTTLMain}; expires=${slicedTTLMain}; path=/`;
  document.cookie = cookieStringMain;

  const slicedTTLSingle = getExpireDateFromCookieNative(cookies.single);
  const newClickCountSingle = values.currentClickCountInt + 1;
  const countToStringSingle =
    newClickCountSingle > 9 ? newClickCountSingle : `0${newClickCountSingle}`;
  const cookieStringSingle = `monadplug-native-${ad.campaignId}=counter:${countToStringSingle}-ttl:${slicedTTLSingle}; expires=${slicedTTLSingle}; path=/`;
  document.cookie = cookieStringSingle;
};

getExpireDateFromCookieNative = function (cookie) {
  const startOfTTL = cookie.indexOf('ttl:');
  const startOfGMT = cookie.indexOf('GMT');
  const slicedTTL = cookie.slice(startOfTTL + 4, startOfGMT + 3);
  return slicedTTL;
};

downloadSSLibraryNative = 

downloadGtagLibraryNative = function () {
  const ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = `//www.googletagmanager.com/gtag/js?id=${monadplugNativeConfig.gtagId}`;
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
};

handleErrorsNative = function (
  err,
  source,
  userId,
  siteId,
  widgetId,
  fetchUrl,
  customId
) {
  monadplugNativeDev && console.log(err);
  monadplugNativeDev &&
    console.log(source, userId, siteId, widgetId, fetchUrl, customId);
  if (!err) {
  } else if (err.message === '204') {
    handle204(source, userId, siteId, widgetId, customId);
  } else if (err.message === 'Device blocked') {
  } else if (err.message)
    monadplugNativeConfig.useGtag &&
      gtagGeneralErrorNative(source, err.message, fetchUrl);
  else if (err === 'Invalid div widget id')
    monadplugNativeConfig.useGtag && gtagInvalidWidgetIdError(source);
  else if (err === 'No ad servers')
    monadplugNativeConfig.useGtag && gtagNoAdServersNative(source);
  else {
  }
  if (err.message && parseInt(err.message))
    monadplugNativeConfig.useGtag &&
      monadplugNativeNormalMode &&
      gtagHttpErrorNative(source, err.message, fetchUrl);
};

handle204 = function (source, userId, siteId, widgetId, customId) {
  if (
    monadplugNativeConfig.counters[source + '204'] <
    monadplugNativeConfig.counters.maxFetchReattempt
  ) {
    monadplugNativeConfig.counters[source + '204']++;
    setTimeout(function () {
      initialiseNativeWidget(
        userId,
        siteId,
        widgetId,
        -1,
        'handle204',
        false,
        customId
      );
    }, monadplugNativeConfig.counters.maxFetchReattemptInterval * 1000);
  } else {
    let element = document.getElementById(source + '-' + customId)
    if (element) element.remove()
    monadplugNativeConfig.useGtag && gtagReattemptLimitErrorNative(source);
  }
};

makeScreenShotNative = function (url, allowClickErrors, source, fetchUrl) {
  monadplugNativeDev && console.log('screenshot made');
  let allowClickErrorsNew = allowClickErrors;
  allowClickErrorsNew.timeSinceLastValidClick = monadplugNativeConfig.timers.lastValidClick.toString();
  let json = {
    img: '',
    referrer: document.referrer ? document.referrer : '',
    timeSincePageLoad: monadplugNativeConfig.timers.global.toString(),
    timeSinceLastClick: monadplugNativeConfig.timers.lastClick.toString(),
    historyLength: history.length.toString(),
    allowClickErrors: allowClickErrorsNew,
  };

  monadplugNativeDev && console.log('error object:', json);

  let currentPositionY = document.documentElement.scrollTop || window.scrollY;
  let currentPositionX = document.documentElement.scrollLeft || window.scrollX;
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  let left = currentPositionX;
  let top = currentPositionY;
  let width = windowWidth;
  let height = windowHeight;

  try {
    html2canvas(document.body, {
      allowTaint: true,
      useCORS: true,
      onrendered: function (canvas) {
        let croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = width;
        croppedCanvas.height = height;
        croppedCanvas
          .getContext('2d')
          .drawImage(canvas, left, top, width, height, 0, 0, width, height);

        let img = 'beforePaint';
        try {
          img = monadplugNativeConfig.fullPageCC
            ? canvas.toDataURL()
            : croppedCanvas.toDataURL();
        } catch (error) {
          monadplugNativeDev && console.log('error object:', error);
          monadplugNativeConfig.useGtag &&
            gtagGeneralErrorNative(source, error, fetchUrl);
        }
        json.img = img;
        window.scrollTo(currentPositionX, currentPositionY);
        fetch(url, { method: 'POST', body: JSON.stringify(json) })
          .then((response) => {
            if (!response.ok) throw Error(response.status);
            else {
            }
          })
          .catch((err) => {
            monadplugNativeDev && console.log('error object:', err);
          });
      },
    });
  } catch (error) {
    monadplugNativeDev && console.log('error object:', error);
    fetch(url, { method: 'POST', body: JSON.stringify(json) })
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        else {
        }
      })
      .catch(;
  }
};

setFontNative = function (config) {
  let fontData = {
    Poppins: {
      link:
        'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      css: "'Poppins', sans-serif",
    },
    Roboto: {
      link:
        'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      css: "'Roboto', sans-serif",
    },
    'Open Sans': {
      link:
        'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
      css: "'Open Sans', sans-serif",
    },
    Montserrat: {
      link:
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      css: "'Montserrat', sans-serif",
    },
    'Exo 2': {
      link:
        'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      css: "'Exo 2', sans-serif;",
    },
    Inherit: { link: false, css: 'inherit' },
  };

  let fontLink = fontData[config.settings['font-family']]
    ? fontData[config.settings['font-family']].link
    : '';
  let monetizeadFontLink = fontData['Poppins'].link;
  let fontCSS = fontData[config.settings['font-family']]
    ? fontData[config.settings['font-family']].css
    : 'inherit';

  if (fontLink) {
    createFontLinkNative(fontLink, monetizeadFontLink);
  }
  return fontCSS;
};

createFontLinkNative = function (fontLink, monetizeadFontLink) {
  const head = document.head || document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  const link2 = document.createElement('link');
  link.setAttribute('native-custom-fonts', 'active');
  link2.setAttribute('native-monadplug-font', 'active');

  link.rel = 'stylesheet';
  link2.rel = 'stylesheet';
  link.href = fontLink;
  link2.href = monetizeadFontLink;

  head.appendChild(link);
  head.appendChild(link2);
};

createCSSNative = function (css, additionalNameSelector) {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.setAttribute('monadplug-' + additionalNameSelector, 'active');

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

setClickTimeoutFlagNative = function (seconds) {
  if (!monadplugNativeConfig.timers.clickTimeout) {
    monadplugNativeConfig.timers.clickTimeout = true;
    setTimeout( seconds * 1000);
  }
};

clearSavedIdReferenceNative = 

openNative = function (url, source) {
  let clicker = document.getElementById('monadplug-clicker-native');
  if (!clicker) {
    openNativeLink(url);
  } else {
    clicker.href = url;
    clicker.click();
    clicker.href = '';
  }
};

openNativeLink = function (url) {
  if (window.location.protocol !== 'https:') {
    window.open(url, '_blank');
  } else {
    window.open(url, '_self');
  }
};

formatTimeNative = function (separator) {
  let today = new Date();
  let hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
  let minutes =
    today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
  let seconds =
    today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
  let time = hours + separator + minutes + separator + seconds;
  return time;
};

formatDateNative = function (separator) {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let date =
    year +
    separator +
    (month > 9 ? month : '0' + month) +
    separator +
    (day > 9 ? day : '0' + day);
  return date;
};

handleResponsivenessNative = function () {
  // if (monadplugIsIndexPage) return

  for (let i = 0; i < monadplugNativeConfig.widgetsData.length; i++) {
    let gridContainer = monadplugNativeConfig.widgetsData[i].grid;
    let logo = monadplugNativeConfig.widgetsData[i].logo;
    let title = monadplugNativeConfig.widgetsData[i].title;

    const originalColumns =
      monadplugNativeConfig.widgetsData[i].config.settings.columns;
    const originalRows =
      monadplugNativeConfig.widgetsData[i].config.settings.rows;

    let singleGap =
      monadplugNativeConfig.widgetsData[i].config.settings['columns-spacing'] ||
      5;
    const additionalPadding =
      monadplugNativeConfig.widgetsData[i].config.settings['card-template'] ===
        'on'
        ? 10
        : 0;
    const gridGaps = (originalColumns - 1) * singleGap;
    const offset = additionalPadding + gridGaps;

    let lowestElement = 0;
    let highestElement = 0;

    if (!monadplugIsIndexPage) {
      if (
        monadplugNativeConfig.widgetsData[i].config.settings[
        'adaptive-block'
        ] !== 'off' &&
        gridContainer.clientWidth <=
        originalColumns * monadplugNativeConfig.config.cardMinWidth + offset
      ) {
        gridContainer.style.gridTemplateColumns = `repeat(${1}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${originalColumns * originalRows
          }, auto)`;
      } else {
        gridContainer.style.gridTemplateColumns = `repeat(${originalColumns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${originalRows}, auto)`;
      }
    }

    if (gridContainer.clientWidth - 110 < title.clientWidth)
      logo.setAttribute('class', 'monadplug-native-hide-element');
    else logo.setAttribute('class', 'monadplug-native-header-logo__wrapper');

    // IMG RESIZING
    for (let i = 0; i < gridContainer.children.length; i++) {
      gridContainer.children[i].children[0].children[0].style.height = 'unset';
      let imgElement = gridContainer.children[i].children[0].children[0]
      const imgElementHasSrcAttribute = imgElement.getAttribute('src') !== 'null'

      let bounding = gridContainer.children[
        i
      ].children[0].children[0].getBoundingClientRect();
      if (imgElementHasSrcAttribute) {
        if (bounding.height === 0) sceduleRetry = true;
        if (bounding.height > highestElement) highestElement = bounding.height;
        if (bounding.height < lowestElement || lowestElement === 0)
          lowestElement = bounding.height;
      }
    }

    for (let i = 0; i < gridContainer.children.length; i++) {
      if (lowestElement !== 0)
        gridContainer.children[i].children[0].children[0].style.height =
          lowestElement + 'px';
    }
  }

  return false;
};

handleInitialResponsivenessNative = function (
  gridContainer,
  config,
  headerTitle,
  headerImgWrapper
) {
  // if (monadplugIsIndexPage) return

  const originalColumns = config.settings.columns;
  const originalRows = config.settings.rows;

  let singleGap = config.settings['columns-spacing'] || 5;
  const additionalPadding = config.settings['card-template'] === 'on' ? 10 : 0;
  const gridGaps = (originalColumns - 1) * singleGap;
  const offset = additionalPadding + gridGaps;

  let sceduleRetry = false;
  let lowestElement = 0;
  let highestElement = 0;

  if (!monadplugIsIndexPage) {
    if (
      gridContainer.clientWidth <=
      originalColumns * monadplugNativeConfig.config.cardMinWidth + offset
    ) {
      gridContainer.style.gridTemplateColumns = `repeat(${1}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${originalColumns * originalRows
        }, auto)`;
    } else {
      gridContainer.style.gridTemplateColumns = `repeat(${originalColumns}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${originalRows}, auto)`;
    }
  }

  if (gridContainer.clientWidth - 110 < headerTitle.clientWidth)
    headerImgWrapper.setAttribute('class', 'monadplug-native-hide-element');
  else
    headerImgWrapper.setAttribute(
      'class',
      'monadplug-native-header-logo__wrapper'
    );

  for (let i = 0; i < gridContainer.children.length; i++) {
    let imgElement = gridContainer.children[i].children[0].children[0]
    const imgElementHasSrcAttribute = imgElement.getAttribute('src') !== 'null'

    let bounding = gridContainer.children[
      i
    ].children[0].children[0].getBoundingClientRect();
    if (imgElementHasSrcAttribute) {
      if (bounding.height === 0) sceduleRetry = true;
      if (bounding.height > highestElement) highestElement = bounding.height;
      if (bounding.height < lowestElement || lowestElement === 0)
        lowestElement = bounding.height;
    }
  }

  for (let i = 0; i < gridContainer.children.length; i++) {
    if (lowestElement !== 0)
      gridContainer.children[i].children[0].children[0].style.height =
        lowestElement + 'px';
  }

  if (sceduleRetry)
    setTimeout(() => {
      handleInitialResponsivenessNative(
        gridContainer,
        config,
        headerTitle,
        headerImgWrapper
      );
    }, 1000);
};

prepareVolumPixelNative = 

monadCreateLogoModalNative = function (config) {
  // Wrappers
  const modalWrapper = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalOverlay = document.createElement('div');

  modalWrapper.className =
    'monadplug-modal-wrapper monadplug-modal-wrapper-closed';
  modalBody.className = 'monadplug-modal-body';
  modalOverlay.className = 'monadplug-modal-overlay';

  modalOverlay.onclick = hideModalHandlerNative;

  // Monad Robot
  const robotWrapper = document.createElement('div');
  const robotContainer = document.createElement('div');
  const robot = document.createElement('img');

  const eyeLidLeft = document.createElement('div');
  const eyesLeft = document.createElement('div');
  const eyeLeft = document.createElement('div');

  const eyeLidRight = document.createElement('div');
  const eyesRight = document.createElement('div');
  const eyeRight = document.createElement('div');

  robotWrapper.className = 'monadplug-modal-robot-wrapper';
  robotContainer.className = 'monadplug-modal-robot-container';
  robot.className = 'monadplug-modal-robot';

  eyeLidLeft.className = 'monadplug-eye-lid monadplug-eye-lid-left';
  eyesLeft.className = 'monadplug-eyes';
  eyeLeft.className = 'monadplug-eye';

  eyeLidRight.className = 'monadplug-eye-lid monadplug-eye-lid-right';
  eyesRight.className = 'monadplug-eyes';
  eyeRight.className = 'monadplug-eye';

  robot.src = monadplugNativeConfig.config.baseUrl + 'images/robot-no-eyes.png';

  robotWrapper.appendChild(robotContainer);
  robotContainer.appendChild(robot);
  robotContainer.appendChild(eyeLidLeft);
  robotContainer.appendChild(eyeLidRight);

  eyeLidLeft.appendChild(eyesLeft);
  eyesLeft.appendChild(eyeLeft);

  eyeLidRight.appendChild(eyesRight);
  eyesRight.appendChild(eyeRight);

  // Close

  const closeWrapper = document.createElement('div');
  const closeButton = document.createElement('div');

  closeButton.innerHTML = 'X';

  closeButton.onclick = hideModalHandlerNative;

  closeWrapper.className = 'monadplug-modal-close-wrapper';
  closeButton.className = 'monadplug-modal-close-button';

  closeWrapper.appendChild(closeButton);

  // Header
  const headerWrapper = document.createElement('div');
  const title = document.createElement('div');
  const logoImg = document.createElement('img');

  title.innerHTML = 'MonadPlug - Worldwide Traffic Monetization Platform';

  logoImg.src = 'https://cdn.monadplug.com/images/logo-black.svg?v=1';

  headerWrapper.className = 'monadplug-modal-header-wrapper';
  title.className = 'monadplug-modal-title';
  logoImg.className = 'monadplug-modal-logo-img';

  headerWrapper.appendChild(title);
  headerWrapper.appendChild(logoImg);

  // Sections
  const sectionsWrapper = document.createElement('div');

  sectionsWrapper.className = 'monadplug-modal-section-wrapper';

  // Info

  const infoWrapper = document.createElement('div');
  const infoText1 = document.createElement('div');
  const infoText1list = document.createElement('div');
  const infoText2 = document.createElement('div');

  infoText1.innerHTML =
    "The content you see is recommended to you based on your interests and/or previous website visits by <a class='monadplug-paragraph-link' target='_blank' href='https://monadplug.com'>MonadPlug -  globally recognized ad network</a> that allows you to:";
  infoText1list.innerHTML =
    "<ul class='monadplug-modal-info-text-list'><li class='monadplug-modal-info-text-list-item'>Monetize your website through a variety of profitable advertisement formats</li><li class='monadplug-modal-info-text-list-item'>Acquire revenue through one of the highest CPC/CPM (Cost Per Click, Cost per Mille) rates in the industry</li><li class='monadplug-modal-info-text-list-item'>Access to a fully targeted & customizable ad format roster that can be tailored to match both your website and your audience</li></ul>";

  infoText2.innerHTML =
    "We help <a class='monadplug-paragraph-link' target='_blank' href='https://monadplug.com/publishers'>Publishers</a> generate staggering revenues by filling their ad space with extremely profitable, high-quality ad inventory.";

  infoWrapper.className = 'monadplug-modal-info';
  infoText1.className = 'monadplug-modal-info-text';
  infoText2.className = 'monadplug-modal-info-text';

  infoWrapper.appendChild(infoText1);
  infoWrapper.appendChild(infoText1list);
  /* infoWrapper.appendChild(infoText2) */

  // Ad format section

  const formatWrapper = document.createElement('div');
  const formatText1 = document.createElement('div');
  const formatText2 = document.createElement('div');
  const imgWrapper = document.createElement('div');
  const formatText3 = document.createElement('div');

  const frame = document.createElement('div');
  const top = document.createElement('div');
  const bottom = document.createElement('div');
  const midFrame = document.createElement('div');
  const right = document.createElement('div');
  const left = document.createElement('div');

  frame.appendChild(formatWrapper);
  frame.appendChild(top);
  frame.appendChild(midFrame);
  frame.appendChild(bottom);

  midFrame.appendChild(left);
  midFrame.appendChild(right);

  formatText1.innerHTML =
    "What you've seen now is what we like to call <a class='monadplug-paragraph-link' target='_blank' href=' https://monadplug.com/native-ads' >Native Widgets</a>, but there's much more than that at your disposal.";
  formatText3.innerHTML =
    "Choose one or all of them at once, it's completely up to you.";

  formatWrapper.className = 'monadplug-modal-format-wrapper';
  formatText1.className = 'monadplug-modal-format-text';
  imgWrapper.className = 'monadplug-modal-format-img-wrapper';
  formatText3.className = 'monadplug-modal-format-text';

  const formatData = [
    {
      title: 'Native Widgets',
      src: 'native.png',
      url: '//monadplug.com/native-ads',
    },
    {
      title: 'Push Notifications',
      src: 'push.png',
      url: '//monadplug.com/push-notifications',
    },
    {
      title: 'In-Page Push',
      src: 'inpagepush.png',
      url: '//monadplug.com/ad-formats',
    },
    {
      title: 'Pop-Under',
      src: 'pop-under.png',
      url: '//monadplug.com/ad-formats',
    },
    { title: 'In-Text', src: 'in-text.png', url: '//monadplug.com/ad-formats' },
    {
      title: 'Smart URL',
      src: 'smart-url.png',
      url: '//monadplug.com/ad-formats',
    },
  ];

  for (let i = 0; i < formatData.length; i++) {
    let tempWrapper = document.createElement('a');
    tempWrapper.className = 'monadplug-modal-format-item';
    let tempImg = document.createElement('img');
    let tempText = document.createElement('div');
    tempImg.src =
      monadplugNativeConfig.config.baseUrl + 'images/' + formatData[i].src;
    tempImg.className = 'monadplug-modal-format-img';
    tempText.innerHTML = formatData[i].title;
    tempText.className = 'monadplug-modal-format-img-text';

    tempWrapper.onmouseenter = function () {
      tempImg.className = 'monadplug-modal-format-img-enter';
    };

    tempWrapper.onmouseleave = 
    tempWrapper.href = formatData[i].url;
    tempWrapper.target = '_blank';

    tempWrapper.appendChild(tempImg);
    tempWrapper.appendChild(tempText);
    imgWrapper.appendChild(tempWrapper);
  }

  formatWrapper.appendChild(formatText1);
  formatWrapper.appendChild(imgWrapper);
  formatWrapper.appendChild(formatText3);

  // Cta
  const ctaWrapper = document.createElement('div');
  const ctaText1 = document.createElement('div');
  const ctaText2 = document.createElement('div');
  const ctaButton = document.createElement('a');

  ctaText1.innerHTML =
    'We provide solutions to both Premium and Rookie Publishers all around the world by promoting strategical approaches to website monetization.';
  ctaText2.innerHTML =
    "Big brand Advertisers choose us, so what's stopping you?";
  ctaButton.innerHTML = 'START MONETIZING YOUR TRAFFIC';

  ctaWrapper.className = 'monadplug-modal-cta-wrapper';
  ctaText1.className = 'monadplug-modal-cta-text';
  ctaText2.className = 'monadplug-modal-cta-text2';
  ctaButton.className = 'monadplug-modal-cta-button';

  ctaButton.href = 'https://publisher.monadplug.com/sign-up';
  ctaButton.target = '_blank';

  ctaWrapper.appendChild(ctaText1);
  ctaWrapper.appendChild(ctaText2);
  ctaWrapper.appendChild(ctaButton);

  // Privacy
  const privacyWrapper = document.createElement('div');
  const linksWrapper = document.createElement('div');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  const link3 = document.createElement('a');

  privacyWrapper.className = 'monadplug-modal-privacy-wrapper';
  linksWrapper.className = 'monadplug-modal-links-wrapper';
  link1.className = 'monadplug-modal-link';
  link2.className = 'monadplug-modal-link';
  link3.className = 'monadplug-modal-link';

  link1.innerHTML = 'Cookies policy';
  link2.innerHTML = 'Privacy policy';
  link3.innerHTML = 'Terms and conditions';

  link1.href = 'https://monadplug.com/cookies-policy';
  link2.href = 'https://monadplug.com/privacy-policy';
  link3.href = 'https://monadplug.com/terms-condition';
  link1.target = '_blank';
  link2.target = '_blank';
  link3.target = '_blank';

  linksWrapper.appendChild(link1);
  linksWrapper.appendChild(link2);
  linksWrapper.appendChild(link3);
  privacyWrapper.appendChild(linksWrapper);

  modalWrapper.id = 'monadplug-modal-' + monadplugNativeConfig.widgetType;

  modalWrapper.appendChild(modalBody);
  modalWrapper.appendChild(modalOverlay);
  modalBody.appendChild(robotWrapper);
  modalBody.appendChild(closeWrapper);
  modalBody.appendChild(headerWrapper);
  modalBody.appendChild(sectionsWrapper);

  sectionsWrapper.appendChild(infoWrapper);
  sectionsWrapper.appendChild(formatWrapper);
  sectionsWrapper.appendChild(ctaWrapper);
  sectionsWrapper.appendChild(privacyWrapper);

  modalWrapper.addEventListener('mousemove', 
  );

  return modalWrapper;
};

showModalHandlerNative = function () {
  monadplugNativeConfig.monadInfo.displayed = true;
  monadplugNativeConfig.monadInfo.modal.className =
    'monadplug-modal-wrapper monadplug-modal-wrapper-opened';
  monadplugNativeConfig.monadInfo.modal.firstChild.className =
    'monadplug-modal-body monadplug-modal-body-opened';
};

hideModalHandlerNative = function () {
  setTimeout( 500);
  monadplugNativeConfig.monadInfo.modal.firstChild.className =
    'monadplug-modal-body monadplug-modal-body-closed';
};

monadMoveEyesNative = function (e, left, right) {
  let mouseX = left.getBoundingClientRect().left;
  let mouseY = left.getBoundingClientRect().top;
  let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 220;
  left.style.transform = `rotate(${rotationDegrees}deg)`;
  right.style.transform = `rotate(${rotationDegrees}deg)`;
};

createModalCssPropertiesNative = function () {
  let css = '';

  const modalWrapper =
    '.monadplug-modal-wrapper {position: fixed;z-index: 10010;width: 100%;height: 100%;top: 0;left: 0;display: flex;justify-content: center;color: #5f83a4;font-size: 16px;font-weight: 500;font-family: Poppins, sans-serif;}';
  const modalOverlay =
    '.monadplug-modal-overlay {position: fixed;z-index: 10005;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(26, 32, 33, 0.47);}';
  const modalOpened = '';
  const modalClosed = '.monadplug-modal-wrapper-closed {display: none;}';
  const modalBody =
    '.monadplug-modal-body {border-radius: 20px;z-index: 10010;background: white;box-shadow: 8px 8px 18px 0 rgba(25, 42, 70, .7);width: 80%;max-width: 800px;position: relative;top: 15%;max-height: 70%;display: flex;flex-direction: column;}';
  const modalBodyOpened =
    '.monadplug-modal-body-opened {    animation: monadplugSlideDown 0.5s forwards;-webkit-animation: monadplugSlideDown 0.5s forwards;transform: translateY(-50px);}';
  const modalBodyClosed =
    '.monadplug-modal-body-closed {animation: monadplugSlideUp 0.5s forwards;-webkit-animation: monadplugSlideUp 0.5s forwards;transform: translateY(-50px);}';
  const modalAnimationSlideDown =
    '@keyframes monadplugSlideDown {0% {opacity: 0;}100% {transform: translatey(0%);opacity: 1;}}';
  const modalAnimationSlideUp =
    '@keyframes monadplugSlideUp {0% {transform: translatey(0%);opacity: 1;}100% {opacity: 0}}';
  const modalCloseWrapper =
    '.monadplug-modal-close-wrapper {display: flex;flex-direction: row;justify-content: flex-end;height: 0px;}';
  const modalCloseButton =
    '.monadplug-modal-close-button {position: relative;right: -9px;top: -9px;height: 35px;width: 35px;background-color: white;display: flex;flex-direction: row;justify-content: center;align-items: center;font-size: 20px;border: 1px solid #85c440;cursor: pointer;transition: color .15s ease, background-color .15s ease, border-color .15s ease, box-shadow .15s ease;border-radius: 50%;}';
  const modalCloseButtonHover =
    '.monadplug-modal-close-button:hover {background-color: #5d8c2a!important;border: 1px solid white;color: #FFF;}';
  const modalHeaderWrapper =
    '.monadplug-modal-header-wrapper {display: flex;flex-direction: row;justify-content: space-between;align-items: center;padding: 20px;box-shadow: 8px 8px 18px 0 rgba(225, 226, 226, 0.7);}';
  const modalTitle =
    '.monadplug-modal-title {display: flex;margin: 0 !important;font-size: 20px;color: black;text-shadow: 3px 5px 8px #0e0e0e30;}';
  const modalLogoImg = '.monadplug-modal-logo-img {height: 30px !important}';
  const modalSectionWrapper =
    '.monadplug-modal-section-wrapper {padding: 0px 10px;overflow-y: auto;position: relative;z-index: 9999999999;margin: 20px 0px;}';
  const modalInfo =
    '.monadplug-modal-info {display: flex;flex-direction: column;padding: 10px 40px;margin-bottom: 40px;}';
  const monadInfoText =
    '.monadplug-modal-info-text {line-height: 25px;margin-bottom: 10px;}';
  const monadInfoTextList =
    '.monadplug-modal-info-text-list {margin-top: 20px;padding-left: 20px;display: block;list-style-type: disc;margin-block-start: 0px;margin-block-end: 0px;margin-inline-start: 0px;margin-inline-end: 0px;padding-inline-start: 0px;}';
  const modalInfoTextListItem =
    '.monadplug-modal-info-text-list-item {line-height: 25px;}';
  const modalFormatWrapper =
    '.monadplug-modal-format-wrapper {display: flex;flex-direction: column;padding: 20px 20px;padding-bottom: 0px;border: 1px solid black!important;border-radius: 20px;background-color: #eaeaea!important;color: #2d2d2d;margin: 0 30px;box-shadow: 1px 6px 11px 4px rgba(123, 123, 123, 0.35)}';
  const modalFormatText =
    '.monadplug-modal-format-text {line-height: 25px;margin-bottom: 20px;}';
  const modalFormatImgWrapper =
    '.monadplug-modal-format-img-wrapper {display: flex;flex-direction: row;justify-content: space-evenly;margin-bottom: 20px;flex-wrap: wrap;}';
  const modalFormatItem =
    '.monadplug-modal-format-item {display: flex;flex-direction: column;align-items: center;width: 80px;padding: 15px 10px 5px 10px;transition: all 0.2s ease;text-decoration: none;}';
  const modalFormatItemSpecial =
    '.monadplug-modal-format-item:hover, .monadplug-modal-format-item:visited {text-decoration: none;}';
  const modalFormatImg =
    '.monadplug-modal-format-img {width: 60px!important;margin-bottom: 10px!important;transition: all 0.2s ease;}';
  const modalFormatImgEnter =
    '.monadplug-modal-format-img-enter {width: 50px!important;margin-bottom: 10px!important;transform: scale(1.2);transition: all 0.2s ease;}';
  const modalFormatImgText =
    '.monadplug-modal-format-img-text {font-size: 14px;text-align: center;color: #2d2d2d;text-decoration: none;font-weight: 600;}';
  const modalImgTextSpecial =
    '.monadplug-modal-format-img-text:hover, .monadplug-modal-format-img-text:visited {color: #2d2d2d;text-decoration: none;}';
  const modalCtaWrapper =
    '.monadplug-modal-cta-wrapper {display: flex;flex-direction: column;padding: 10px 40px;margin-top: 40px;margin-bottom: 40px;}';
  const modalCtaText = '.monadplug-modal-cta-text {line-height: 25px;}';
  const modalCtaText2 =
    '.monadplug-modal-cta-text2 {line-height: 25px;margin-top: 10px;}';
  const modalCtaButton =
    '.monadplug-modal-cta-button {display: inline; border-color: #467513!important;background-color: #85c440!important;color: #FFF!important;transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;width: 100%;max-width: 340px;display: flex;flex-direction: row;justify-content: center;align-items: center;margin: 10px auto;padding: 0 20px;border-radius: 5px;text-align: center;box-shadow: 8px 8px 18px 0 rgba(101, 101, 101, 0.46);text-shadow: 3px 5px 8px rgba(109, 109, 109, 0.8);-webkit-appearance: button;-webkit-writing-mode: horizontal-tb !important;text-rendering: auto;letter-spacing: normal;word-spacing: normal;text-transform: none;text-indent: 0px;box-sizing: border-box;font: 400 17px Arial;border-width: unset;border-style: unset;border-image: unset;cursor: pointer;margin-top: 30px;padding: 20px 10px;text-decoration: none; -webkit-appearance: unset;     -webkit-writing-mode: unset !important;}';
  const modalCtaButtonSpecial =
    '.monadplug-modal-cta-button:hover {background-color: #5d8c2a!important;color: #FFF;text-decoration: none;}.monadplug-modal-cta-button:visited {text-decoration: none;}';
  const modalPrivacyWrapper =
    '.monadplug-modal-privacy-wrapper {display: flex;flex-direction: column;}';
  const modalLinksWrapper =
    '.monadplug-modal-links-wrapper {display: flex;flex-direction: row;justify-content: center;}';
  const modalLink =
    '.monadplug-modal-link {display: inline; margin: 10px;text-decoration: none;color: #2d2d2d;font-weight: 600;}';
  const modalLinkSpecial =
    '.monadplug-modal-link:hover, .monadplug-modal-link:visited {text-decoration: none;color: #85c440;}';
  const modalParagraphLink =
    '.monadplug-paragraph-link {display: inline; text-decoration: none;color: #2d2d2d;font-weight: 600;}';
  const modalParagraphSpecial =
    '.monadplug-paragraph-link:hover, .monadplug-paragraph-link:visited {text-decoration: none;color: #85c440;}';
  const modalRobotWrapper =
    '.monadplug-modal-robot-wrapper {position: absolute;width: 100%;display: flex;flex-direction: row;margin-top: -90px;padding-left: 20px;}';
  const modalRobot =
    '.monadplug-modal-robot {height: 100px!important;animation: monadplugBouncebody alternate infinite 400ms 40ms ease-in-out;}';
  const eyesEyesLid =
    '.monadplug-eyes, .monadplug-eye-lid {text-align: center;display: flex;font-size: 0.65em;height: 16px;width: 16px;}';
  const eyes =
    '.monadplug-eyes {height: 10px;width: 10px;margin-left: 1px;margin-top: 1px;}';
  const eye =
    '.monadplug-eye {position: relative;display: inline-block;width: 40%;height: 40%;background-color: black;border-radius: 50%;}';
  const eyeLid =
    '.monadplug-eye-lid {background-color: white;box-shadow: 0.03em 0.14em rgba(0, 0, 0, 0.1);animation: monadplugBlink forwards infinite 10s ease-in-out;border: 2px solid #88c545;position: relative;border-radius: 100%;}';
  const eyeLidLeft =
    '.monadplug-eye-lid-left {margin-top: -59px;margin-left: 38px;}';
  const eyeLidRight =
    '.monadplug-eye-lid-right {margin-top: -19px;margin-left: 72px;}';
  const eyeSpecial =
    '.monadplug-eye:after {--pupil-size: 0.2em;position: absolute;top: 0.05em;left: 0.3em;width: var(--pupil-size);height: var(--pupil-size);background: white;border-radius: 50%;content: " ";}';
  const animationBlik =
    '@keyframes monadplugBlink {0%, 2%, 60%, 62%, 100% {transform: scaleX(1) scaleY(1);}1%, 61% {transform: scaleX(1.3) scaleY(0.1);}}';
  const animationBounce =
    '@keyframes monadplugBouncebody {to {transform: scaleX(1.01) scaleY(0.99);}}';
  const modalMedia604 =
    '@media screen and (max-width:604px) {.monadplug-modal-body {width: 100%!important;top: 10%!important;max-height: 85%!important;}.monadplug-modal-close-button {right: 0!important;}.monadplug-modal-info, .monadplug-modal-cta-wrapper {padding-left: 0px;padding-right: 0px;}.monadplug-modal-format-wrapper {margin: 0px;}.monadplug-modal-info-text-list {padding-left: 20px;}.monadplug-modal-info-text-list {padding-left: 10px;}}';
  const modalMedia482 =
    '@media screen and (max-width:482px) {.monadplug-modal-link {width: 100px;text-align: center;}.monadplug-modal-logo-img {display: none}}';
  const modalMedia460 =
    '@media screen and (max-width:460px) {.monadplug-modal-header-wrapper {flex-direction: column;}}';

  css =
    modalWrapper +
    modalOverlay +
    modalOpened +
    modalClosed +
    modalBody +
    modalBodyOpened +
    modalBodyClosed +
    modalAnimationSlideDown +
    modalAnimationSlideUp +
    modalCloseWrapper +
    modalCloseButton +
    modalCloseButtonHover +
    modalHeaderWrapper +
    modalTitle +
    modalLogoImg +
    modalLogoImg +
    modalSectionWrapper +
    modalInfo +
    monadInfoText +
    monadInfoTextList +
    modalInfoTextListItem +
    modalFormatWrapper +
    modalFormatText +
    modalFormatImgWrapper +
    modalFormatItem +
    modalFormatItemSpecial +
    modalFormatImg +
    modalFormatImgEnter +
    modalFormatImgText +
    modalImgTextSpecial +
    modalCtaWrapper +
    modalCtaText +
    modalCtaText2 +
    modalCtaButton +
    modalCtaButtonSpecial +
    modalPrivacyWrapper +
    modalLinksWrapper +
    modalLink +
    modalLinkSpecial +
    modalParagraphLink +
    modalParagraphSpecial +
    modalRobotWrapper +
    modalRobot +
    eyesEyesLid +
    eyes +
    eye +
    eyeLid +
    eyeLidLeft +
    eyeLidRight +
    eyeSpecial +
    animationBlik +
    animationBounce +
    modalMedia604 +
    modalMedia482 +
    modalMedia460;

  createCSSNative(css, monadplugNativeConfig.widgetType + '-custom-css-6');
};

checkIfItemIsInViewPortNative = function (itemRef) {
  let bounding = itemRef.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let minimumElementVisibility =
    bounding.height * monadplugNativeConfig.restrictions.minHeightPercentage;
  if (!monadplugNativeConfig.restrictions.minHeightPercentage) return true;
  if (
    (bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= windowHeight) ||
    (windowHeight >= minimumElementVisibility &&
      bounding.bottom >= minimumElementVisibility &&
      windowHeight - bounding.top >= minimumElementVisibility)
  )
    return true;
  else return false;
};

checkIfDeviceIsMobileNative = function () {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  );
};

iframeDetectionNative = function () {
  if (iframeDetection1Native()) return true;
  return false;
};

iframeDetection1Native = function () {
  if (window.location !== window.parent.location) return true;
  return false;
};

iframeDetection2Native = function () {
  if (window.self !== window.top) return true;
  return false;
};

iframeDetection3Native = function () {
  const test = window.frameElement;
  if (test) return true;
  return false;
};

saveCurrentlocationNative = 

initiateSPAFixNative = function () {
  setInterval(() => {
    let currentLocation = window.location.href;
    if (currentLocation !== monadplugNativeConfig.location) {
      monadplugNativeConfig.location = window.location.href;
      initialiseNativeWidgets(false, true);
    }
  }, 2000);
};

multyWidgetsInitialCommonFunctionsNative = function () {

  saveCurrentlocationNative();
  createCommonCssPropertiesNative();
  createModalCssPropertiesNative();
  if (mpn_ref && mpn_ref[0] &&
    mpn_ref[0].userId === 'new' &&
    mpn_ref[0].siteId === 'new' &&
    mpn_ref[0].widgetId === 'new'
  )
    monadplugNativeFirstMode = true;
  if (mpn_ref && mpn_ref.length > 0 && mpn_ref[0].widgetMode === 'preview') {
    monadplugNativeNormalMode = false;
    monadplugNativeConfig.gtagId = devTrackingNative;
  }
  if (monadplugNativeNormalMode) {
    downloadSSLibraryNative();
    downloadGtagLibraryNative();
    setInterval(function () {
      monadplugNativeConfig.timers.global++;
      monadplugNativeConfig.timers.lastClick++;
      monadplugNativeConfig.timers.lastValidClick++;
    }, 1000);
    setClickTimeoutFlagNative(
      monadplugNativeConfig.restrictions.timeoutAferLoad
    );
  }
  if (!monadplugIsIndexPage)
    window.addEventListener('resize', handleResponsivenessNative);

};

initialiseNativeWidgets = function (firstLoad, spaFix) {
  if (spaFix) {
    if (mpn_ref && mpn_ref.length > 0) {
      mpn_ref.length !== monadplugNativeConfig.spaFixOriginalWidgetLenght &&
        gtagSpaPotentialErrorNative(
          mpn_ref,
          monadplugNativeConfig.spaFixOriginalWidgetLenght
        );
      for (let i = 0; i < mpn_ref.length; i++) {
        initialiseNativeWidget(
          mpn_ref[i].userId,
          mpn_ref[i].siteId,
          mpn_ref[i].widgetId,
          i,
          mpn_ref[i].widgetMode,
          false,
          false
        );
      }
    } else
      monadplugNativeConfig.useGtag &&
        gtagSpaErrorNative(
          mpn_ref,
          monadplugNativeConfig.spaFixOriginalWidgetLenght
        );
    clearSavedIdReferenceNative();
  } else if (firstLoad) {
    if (mpn_ref && mpn_ref.length > 0) {
      monadplugNativeConfig.spaFixOriginalWidgetLenght = mpn_ref.length;
      for (let i = 0; i < mpn_ref.length; i++) {
        initialiseNativeWidget(
          mpn_ref[i].userId,
          mpn_ref[i].siteId,
          mpn_ref[i].widgetId,
          i,
          mpn_ref[i].widgetMode,
          false,
          false
        );
      }
    } else monadplugNativeConfig.useGtag && gtagInitialiseFailedNative(mpn_ref);
    clearSavedIdReferenceNative();
  }
};

initialiseNativeWidget = function (
  userId,
  siteId,
  widgetId,
  arrayId,
  widgetMode,
  recreate,
  custom204Id
) {
  const source = `${userId}-${siteId}-${widgetId}`;
  let customId =
    arrayId || arrayId === 0 ? arrayId.toString() + Date.now() : '';

  if (widgetMode === 'preview' && recreate)
    customId = monadplugNativeConfig.widgetsData[0].customId;

  if (
    monadplugNativeConfig.url.adServers.length === 0 &&
    monadplugNativeNormalMode
  )
    handleErrorsNative(
      'No ad servers',
      source,
      userId,
      siteId,
      widgetId,
      'no fetch url'
    );
  else {
    let serverIndex;
    do {
      serverIndex = Math.round(
        Math.random() * (monadplugNativeConfig.url.adServers.length - 1 - 0) + 0
      );
    } while (
      serverIndex >= monadplugNativeConfig.url.adServers.length ||
      serverIndex < 0
    );
    if (!monadplugNativeConfig.counters[source + '204'])
      monadplugNativeConfig.counters[source + '204'] = 0;
    let fetchUrl = `${monadplugNativeConfig.url.adServers[serverIndex]}`;

    let parentElement;
    if (recreate)
      parentElement = document.getElementById(source + '-' + customId);
    else if (widgetMode === 'handle204')
      parentElement = document.getElementById(source + '-' + custom204Id);
    else parentElement = document.getElementById(source);

    if (parentElement) {
      if (!recreate) parentElement.id = source + '-' + customId;
      parentElement.className = 'monadplug-native-loading';
      parentElement.innerHTML =
        'Loading<span>.</span><span>.</span><span>.</span></p>';
    } else {
      monadplugNativeNormalMode
        ? handleErrorsNative(
          'Invalid div widget id',
          source,
          userId,
          siteId,
          widgetId,
          fetchUrl,
          customId
        )
        : 'ssr rerender';
      return;
    }

    if (!widgetMode || widgetMode === 'handle204') {
      fetch(`${fetchUrl}${source}`)
        .then((response) => {
          if (response.status !== 200) throw new Error(response.status);
          let adData = response.json();
          if (!adData) throw new Error(null, source);
          else return adData;
        })
        .then((config) => {
          const isMobile = checkIfDeviceIsMobileNative();
          if (
            (isMobile && config.settings['mobile-widget'] !== 'on') ||
            (!isMobile && config.settings['pc-widget'] !== 'on')
          ) {
            parentElement.innerHTML = '';
            throw new Error('Device blocked');
          }
          createElementsNative(config, source, fetchUrl, customId);
        })
        .catch(;
    } else {
      generatePreviewConfigNative(
        userId,
        siteId,
        widgetId,
        arrayId,
        widgetMode,
        customId
      );
    }
  }
};

createElementsNative = function (config, source, fetchUrl, customId) {
  window.MonadPlugConfigExposed = config;
  let widgetData = { source, customId, config, ads: [] };
  let parentElement;
  let additionalCSS = '';
  let customCSS = '';
  let isTemplate = customId === 'template' ? true : false;

  let modal = monadplugNativeConfig.displayLogoPopup
    ? monadCreateLogoModalNative(config)
    : false;

  parentElement = document.getElementById(source + '-' + customId);

  parentElement.setAttribute('customid', customId);

  widgetData.widgetRef = parentElement;
  parentElement.className = 'monadplug-native-main-wrapper';
  if (monadplugIsIndexPage)
    parentElement.className = !monadplugIsIndexPageDarkPage
      ? 'monadplug-native-main-wrapper'
      : 'monadplug-native-main-wrapper monadplug-darkmode';
  parentElement.innerHTML = '';

  parentElement.style.backgroundColor =
    config.settings['background-color-transparent'] === 'on'
      ? 'unset'
      : config.settings['background-color'];

  let font = setFontNative(config);
  parentElement.style.fontFamily = font;

  const header = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerImgWrapper = document.createElement('a');
  const headerImg = document.createElement('img');
  const clicker = document.createElement('a');

  header.className = 'monadplug-native-header-wrapper';
  headerTitle.className = 'monadplug-native-header-title';
  headerImgWrapper.className = 'monadplug-native-header-logo__wrapper';
  headerImg.className = 'monadplug-native-header-logo';
  // FIX DOMAIN FOR LOGO NOT AVAILABLE
  /* headerImg.src =
    config.settings['white-logo'] === 'on'
      ? config.logo.white
      : config.logo.black; */
  headerImg.src =
    config.settings['white-logo'] === 'on'
      ? 'https://cdn.monadplug.com/images/logo-white.svg?v=1'
      : 'https://cdn.monadplug.com/images/logo-black.svg?v=1';
  clicker.id = 'monadplug-clicker-' + monadplugNativeConfig.widgetType;
  clicker.className = 'monadplug-clicker-' + monadplugNativeConfig.widgetType;
  clicker.target = '_blank';
  clicker.href = '';

  header.style.marginBottom =
    config.settings['header-spacing'] > 0
      ? config.settings['header-spacing'] + 'px'
      : 0;
  headerTitle.style.color =
    config.settings['title-color'] || config.settings['theme-color'];
  headerTitle.style.fontSize =
    (config.settings['font-size-header'] || 15) + 'px';
  headerTitle.style.fontWeight =
    config.settings['font-weight-header'] || 'normal';
  headerTitle.style.fontStyle =
    config.settings['font-italic-header'] === 'on' ? 'italic' : 'normal';
  headerTitle.innerHTML = config.settings.title;

  headerImgWrapper.href = monadplugNativeNormalMode
    ? 'https://monadplug.com'
    : '';
  headerImgWrapper.target = '_blank';

  headerImgWrapper.onclick = 

  headerImg.onclick = modal ? showModalHandlerNative : null;

  config.settings['show-title'] === 'on' && header.appendChild(headerTitle);
  if (config.settings['show-logo'] === 'on') {
    headerImgWrapper.appendChild(headerImg);
    header.appendChild(headerImgWrapper);
  }
  if (
    config.settings['header-box'] === 'on' &&
    (config.settings['show-logo'] === 'on' ||
      config.settings['show-title'] === 'on')
  ) {
    parentElement.appendChild(header);
  }
  if (config.settings['header-border'] !== 'off')
    header.style.borderBottom =
      '1px solid' + ' ' + config.settings['theme-color'];

  const gridWrapper = document.createElement('div');
  const grid = document.createElement('div');

  gridWrapper.className = 'monadplug-native-grid-wrapper';
  grid.className = 'monadplug-native-grid-container';
  grid.id = `monadplug-native-grid-container-${source}`;

  let hoverColor =
    config.settings['text-hover'] || config.settings['title-color'];
  let hoverUnderline =
    config.settings['text-underline'] === 'on' ? 'underline' : 'unset';
  let hoverColorCta = config.settings['cta-color-hover'] || 'unset';
  let hoverBackgroundCta = config.settings['cta-background-hover'] || 'unset';
  let textColor = config.settings['text-color'] || 'inherit';

  if (monadplugIsIndexPage) {
    grid.style.overflow = 'auto';
  }

  additionalCSS +=
    '.monadplug-native-gd-block-with-text-' +
    source +
    '-' +
    customId +
    ':hover { color:' +
    hoverColor +
    '; text-decoration:' +
    hoverUnderline +
    '}';
  additionalCSS +=
    '.monadplug-native-gd-block-with-text-' +
    source +
    '-' +
    customId +
    ' { color:' +
    textColor +
    '}';
  additionalCSS +=
    '.monadplug-native-cta-' +
    source +
    '-' +
    customId +
    ':hover { color:' +
    hoverColorCta +
    '!important; background-color:' +
    hoverBackgroundCta +
    '!important; border: 1px solid ' +
    hoverColorCta +
    '!important}';

  widgetData.grid = grid;
  widgetData.logo = headerImgWrapper;
  widgetData.title = headerTitle;

  let rowGap = config.settings['rows-spacing'] || 10;
  let columnGap = config.settings['columns-spacing'] || 5;
  grid.style.gridColumnGap = columnGap + 'px';
  grid.style.gridRowGap = rowGap + 'px';

  if (checkIfDeviceIsMobileNative()) {
    grid.style.gridTemplateColumns = 'repeat(1, 1fr)';
    grid.style.gridTemplateRows =
      'repeat(' + config.settings.rows * config.settings.columns + ', auto)';
  } else {
    grid.style.gridTemplateColumns =
      'repeat(' + config.settings.columns + ', 1fr)';
    grid.style.gridTemplateRows = 'repeat(' + config.settings.rows + ', auto)';
  }

  if (monadplugIsIndexPage) {
    if (checkIfDeviceIsMobileNative()) {
      grid.style.paddingLeft = '17px';
      header.style.padding = '0 17px';
      grid.style.gridTemplateColumns = 'repeat(' + 2 + ', 1fr)';
      grid.style.gridTemplateRows = 'repeat(' + 2 + ', auto)';
    } else {
      grid.style.gridTemplateColumns =
        'repeat(' + config.settings.columns + ', 1fr)';
      grid.style.gridTemplateRows =
        'repeat(' + config.settings.rows + ', auto)';
    }
    if (monadplugIsIndexPageDarkPage) {
      headerImg.src = config.logo.white;
    }
  }

  parentElement.appendChild(gridWrapper);
  gridWrapper.appendChild(grid);

  let counter = 1;
  config.ads.map((item) => {
    const itemWrapper = document.createElement('div');
    const itemImgContainer = document.createElement('div');
    const itemImg = document.createElement('img');
    const textWrapper = document.createElement('div');
    const itemTextWrapper = document.createElement('div');
    const itemText = document.createElement('div');
    const ctaButton = document.createElement('div');

    if (monadplugNativeNormalMode)
      itemWrapper.onclick = 

    itemWrapper.setAttribute(
      'class',
      'monadplug-native-grid-element' +
      ' monadplug-native-grid-element-' +
      source +
      '-' +
      customId
    );
    itemWrapper.setAttribute(
      'id',
      'monadplug-native-grid-element-' + source + '-' + item.campaignId
    );
    itemWrapper.setAttribute('customid', customId);

    itemImgContainer.setAttribute('class', 'monadplug-native-gd-img-container');
    let imageZoomClass =
      config.settings['image-zoom'] === 'on'
        ? ' monadplug-native-gd-img-hover-zoom'
        : '';
    itemImg.setAttribute('class', 'monadplug-native-gd-img' + imageZoomClass);
    itemImg.setAttribute('src', item.image);
    textWrapper.setAttribute('class', 'monadplug-native-gd-text-wrapper');
    itemTextWrapper.setAttribute(
      'class',
      'monadplug-native-gd-block-with-text-wrapper'
    );
    itemText.setAttribute(
      'class',
      'monadplug-native-gd-block-with-text' +
      ' monadplug-native-gd-block-with-text-' +
      source +
      '-' +
      customId
    );
    ctaButton.setAttribute(
      'class',
      'monadplug-native-cta' +
      ' monadplug-native-cta-' +
      source +
      '-' +
      customId
    );

    if (monadplugIsIndexPage) {
      if (!checkIfDeviceIsMobileNative()) {
        itemImg.style.minHeight = '168px';
        itemImg.style.minWidth = '245px';

        itemImg.style.maxHeight = '168px';
        itemImg.style.maxWidth = '245px';
      }
    }

    textWrapper.style.fontSize = config.settings['font-size'] + 'px';
    textWrapper.style.fontWeight = config.settings['font-weight'] || 'normal';
    textWrapper.style.marginTop =
      (config.settings['text-margin-top'] || 0) + 'px';
    textWrapper.style.fontStyle =
      config.settings['font-italic'] === 'on' ? 'italic' : 'normal';

    if (config.settings['text-disable-padding'] === 'on') {
      textWrapper.style.paddingLeft = '0px';
      textWrapper.style.paddingRight = '0px';
    }

    itemText.style.textAlign =
      config.settings['text-horizontal-center'] === 'on' ? 'center' : 'left';
    itemText.innerHTML = item.title;

    if (config.settings['card-template'] === 'on') {
      grid.style.padding = '10px';

      let topRadius = config.settings['card-top-radius'] || 0;
      let botRadius = config.settings['card-bot-radius'] || 0;

      itemImgContainer.style.borderRadius =
        topRadius + 'px' + ' ' + topRadius + 'px' + ' 0 0';
      textWrapper.style.borderRadius =
        '0 0 ' + botRadius + 'px' + ' ' + botRadius + 'px';
      itemWrapper.style.borderRadius =
        topRadius +
        'px ' +
        topRadius +
        'px ' +
        botRadius +
        'px ' +
        botRadius +
        'px ';

      if (config.settings['card-bot-border-height'] > 0) {
        let height = config.settings['card-bot-border-height'] || '0';
        let color = config.settings['card-bot-border-color'] || '#85c440';
        itemWrapper.style.borderBottom = height + 'px solid ' + color;
      }

      if (config.settings['card-shadow'] === 'on') {
        let bocShadow1 =
          ' 0 2px 2px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08)';
        let boxShadow2 =
          '0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15)';
        let boxShadow3 =
          '0 1px 1px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)';

        itemWrapper.style.boxShadow = boxShadow2;
      }
    }

    if (config.settings['show-cta'] === 'on') {
      ctaButton.style.backgroundColor =
        config.settings['cta-background'] || 'unset';
      ctaButton.style.color = config.settings['cta-color'] || 'inherit';

      ctaButton.style.border =
        '1px solid ' + config.settings['cta-color'] || 'unset';

      let ctaColorHover = config.settings['cta-color-hover'] || 'unset';
      let ctaBackgroundHover =
        config.settings['cta-background-hover'] || 'unset';

      document.documentElement.style.setProperty(
        '--cta-color-hover-' + source,
        ctaColorHover
      );
      document.documentElement.style.setProperty(
        '--cta-background-hover-' + source,
        ctaBackgroundHover
      );

      ctaButton.innerHTML = config.settings['cta-text'] || '';
    }

    if (monadplugIsIndexPage && checkIfDeviceIsMobileNative()) {
      itemWrapper.style.borderRight = '0px solid grey';
      itemWrapper.style.marginRight = '10px';
      itemWrapper.style.paddingRight = '0px';
      if (config.ads.length === counter) {
        itemWrapper.style.paddingRight = '17px';
      }
      counter++;
    }

    itemWrapper.appendChild(itemImgContainer);
    itemWrapper.appendChild(textWrapper);
    itemImgContainer.appendChild(itemImg);
    textWrapper.appendChild(itemTextWrapper);
    itemTextWrapper.appendChild(itemText);
    if (config.settings['show-cta']) itemTextWrapper.appendChild(ctaButton);

    grid.appendChild(itemWrapper);

    widgetData.ads.push({
      adRef: itemWrapper,
      ad: item,
    });
  });

  if (
    !document.getElementById(
      'monadplug-clicker-' + monadplugNativeConfig.widgetType
    )
  ) {
    gridWrapper.appendChild(clicker);
  }
  if (
    !document.getElementById(
      'monadplug-modal-' + monadplugNativeConfig.widgetType
    )
  ) {
    if (modal) {
      monadplugNativeConfig.monadInfo.modal = modal;
      parentElement.appendChild(modal);
    }
  }

  // ADVANCED CSS CONFIG
  let parentClassName =
    'monadplug-native-main-wrapper-' + source + '-' + customId;
  parentElement.classList.add(parentClassName);
  let tempParentStyling =
    config.settings['custom-css-parent'] || '.' + parentClassName + '{}';
  tempParentStyling = tempParentStyling.replace(/rootWidget/g, parentClassName);
  tempParentStyling = tempParentStyling.replace(/_backslash/g, '\\');

  let headerClassName =
    'monadplug-native-header-wrapper-' + source + '-' + customId;
  header.classList.add(headerClassName);
  let tempHeaderStyling =
    config.settings['custom-css-header'] || '.' + headerClassName + '{}';
  tempHeaderStyling = tempHeaderStyling.replace(/rootHeader/g, headerClassName);
  tempHeaderStyling = tempHeaderStyling.replace(/_backslash/g, '\\');

  let gridClassName =
    'monadplug-native-grid-wrapper-' + source + '-' + customId;
  gridWrapper.classList.add(gridClassName);
  let tempGridStyling =
    config.settings['custom-css-grid'] || '.' + gridClassName + '{}';
  tempGridStyling = tempGridStyling.replace(/rootGrid/g, gridClassName);
  tempGridStyling = tempGridStyling.replace(/_backslash/g, '\\');

  let cardClassName =
    'monadplug-native-grid-element-' + source + '-' + customId;
  let tempCardStyling =
    config.settings['custom-css-card'] || '.' + cardClassName + '{}';
  tempCardStyling = tempCardStyling.replace(/rootCard/g, cardClassName);
  tempCardStyling = tempCardStyling.replace(/_backslash/g, '\\');

  customCSS +=
    tempParentStyling + tempHeaderStyling + tempGridStyling + tempCardStyling;

  if (isTemplate)
    createCSSNative(
      additionalCSS,
      monadplugNativeConfig.widgetType + '-custom-css-3'
    );
  else
    createCSSNative(
      additionalCSS,
      monadplugNativeConfig.widgetType + '-custom-css-1'
    );

  if (isTemplate)
    createCSSNative(
      customCSS,
      monadplugNativeConfig.widgetType + '-custom-css-4'
    );
  else
    createCSSNative(
      customCSS,
      monadplugNativeConfig.widgetType + '-custom-css-2'
    );

  // DONE
  !isTemplate && monadplugNativeConfig.widgetsData.push(widgetData);
  !isTemplate &&
    monadplugNativeNormalMode &&
    confirmIfAdWasRenderedInDomNative(
      config.ads,
      source,
      fetchUrl,
      customId,
      widgetData
    );
  // if ((config.settings["adaptive-block"] !== "off" && checkIfDeviceIsMobileNative()) || mobilePreviewNative) {
  /* if ((config.settings["adaptive-block"] !== "off") || mobilePreviewNative) {
        grid.style.gridTemplateColumns = 'repeat(1, 1fr)'
        grid.style.gridTemplateRows = 'repeat(' + config.settings.rows * config.settings.columns + ', auto)'
    } else { handleInitialResponsivenessNative(grid, config, headerTitle, headerImgWrapper) } */

  handleInitialResponsivenessNative(
    grid,
    config,
    headerTitle,
    headerImgWrapper
  );

  setTimeout(() => {
    handleInitialResponsivenessNative(
      grid,
      config,
      headerTitle,
      headerImgWrapper
    );
  }, 1500)

  setTimeout( 2000)
};

confirmIfAdWasRenderedInDomNative = function (
  ads,
  source,
  fetchUrl,
  customId,
  widgetData
) {
  let requestedNumberOfAds =
    widgetData.config.settings['columns'] * widgetData.config.settings['rows'];
  let createdNumberOfAds = widgetData.ads.length;
  let prepareGtagItemList = [];

  for (let i = 0; i < ads.length; i++) {
    let checkForAdd = document.getElementById(
      'monadplug-native-grid-element-' + source + '-' + ads[i].campaignId
    );
    let widgetFormatedQuerySearch =
      '[id=' +
      'monadplug-native-grid-element-' +
      source +
      '-' +
      ads[i].campaignId +
      ']';
    let allElementsWithThisId = document.querySelectorAll(
      widgetFormatedQuerySearch
    );
    if (allElementsWithThisId.length > 1)
      monadplugNativeDev && console.log('multiple same id for ad wrapper');

    if (allElementsWithThisId.length > 1) {
      let foundAd = false;
      for (let j = 0; j < allElementsWithThisId.length; j++) {
        if (
          allElementsWithThisId[j].getAttribute('customid') ===
          customId.toString()
        ) {
          prepareGtagItemList.push(ads[i]);
          confirmPixelNative(ads[i]);
          foundAd = true;
        }
        if (!foundAd && j === allElementsWithThisId.length - 1)
          monadplugNativeDev &&
            console.log('ad not confirmed in dom id mismatch');
      }
    } else if (checkForAdd) {
      prepareGtagItemList.push(ads[i]);
      confirmPixelNative(ads[i]);
    } else {
      monadplugNativeDev && console.log('ad not confirmed in dom');
    }
  }

  let missingAdsMessage =
    'requested: ' + requestedNumberOfAds + ', created: ' + createdNumberOfAds;

  if (
    monadplugNativeConfig.useGtag &&
    requestedNumberOfAds !== createdNumberOfAds
  )
    gtagAdMissing(source, fetchUrl, missingAdsMessage);

  monadplugNativeConfig.useGtag &&
    gtagItemCheckoutListNative(prepareGtagItemList, source, fetchUrl);
};

confirmPixelNative = function (ad) {
  for (let i = 0; i < ad.pixel.length; i++) {
    let parent = document.getElementsByTagName('div')[0];
    let pixelImg = document.createElement('img');
    pixelImg.style.display = "none";
    pixelImg.style.height = "0px";
    pixelImg.style.width = "0px";
    pixelImg.setAttribute('src', ad.pixel[i]);
    parent.appendChild(pixelImg);
  }
};

checkIfValidClickNative = function (
  itemWrapper,
  item,
  config,
  source,
  fetchUrl
) {
  let time = formatTimeNative(':');
  let date = formatDateNative('-');

  let allowClick = 'yes';
  let cookieAdCookieData = getCookieForAdNative(item);
  let cookieCookieData = getCookieForAdNative();
  let allowClickErrors = {
    iframe: 'no',
    clickLimitAds: 'no',
    addClickCounter: cookieAdCookieData ? cookieAdCookieData : 'First click',
    clickLimitAd: 'no',
    addsClickCounter: cookieCookieData ? cookieCookieData : 'First click',
    viewPort: 'no',
    trackClick: config.administration.trackClick ? 'yes' : 'no',
    clickTimeout: monadplugNativeConfig.timers.clickTimeout ? 'yes' : 'no',
    time: date + ' / ' + time,
  };

  if (!checkIfItemIsInViewPortNative(itemWrapper)) {
    allowClick = 'no';
    allowClickErrors.viewPort = 'yes';
  }
  const cookies = checkClickAmountNative(item);
  if (
    cookies.values.currentClickCountIntMain >=
    monadplugNativeConfig.restrictions.allAds
  ) {
    allowClick = 'no';
    allowClickErrors.clickLimitAds = 'yes';
  }
  if (
    cookies.values.currentClickCountInt >=
    monadplugNativeConfig.restrictions.singleAd
  ) {
    allowClick = 'no';
    allowClickErrors.clickLimitAd = 'yes';
  }

  if (iframeDetectionNative()) {
    allowClick = 'no';
    allowClickErrors.iframe = 'yes';
  }
  if (monadplugNativeConfig.timers.clickTimeout) allowClick = 'no';

  monadplugNativeDev &&
    console.log(
      'valid click:',
      allowClick,
      'overide restrictions:',
      monadplugNativeConfig.config.disableClickBlocking
    );

  if (
    allowClick === 'yes' ||
    (allowClick === 'no' && monadplugNativeConfig.config.disableClickBlocking)
  ) {
    setItemClickedCookieNative(cookies.values, cookies.cookies, item);
    monadplugNativeConfig.useGtag &&
      gtagItemPurchaseNative(item, source, fetchUrl);

    setClickTimeoutFlagNative(
      monadplugNativeConfig.restrictions.timeoutAfterClick
    );
    openNative(item.url, source);
  }
  if (allowClick === 'no' || config.administration.trackClick) {
    makeScreenShotNative(
      `${monadplugNativeConfig.url.errorScreenShot}${source}`,
      allowClickErrors,
      source,
      fetchUrl
    );
    let message = '';
    message = config.administration.trackClick
      ? message + 'trackClick'
      : message + '';
    message = allowClickErrors.iframe ? message + 'iframe ' : message + '';
    message = allowClickErrors.clickLimitAds
      ? message + 'clickLimitAds '
      : message + '';
    message = allowClickErrors.clickLimitAd
      ? message + 'clickLimitAd '
      : message + '';
    message = allowClickErrors.viewPort ? message + 'viewPort ' : message + '';
    message = allowClickErrors.clickTimeout
      ? message + 'clickTimeout '
      : message + '';
    monadplugNativeConfig.useGtag &&
      gtagInvalidClickErrorNative(source, message, fetchUrl);
  }

  if (allowClick === 'yes') monadplugNativeConfig.timers.lastValidClick = 0;
  monadplugNativeConfig.timers.lastClick = 0;
};
try { multyWidgetsInitialCommonFunctionsNative(); } catch (error) { let debugMp = localStorage.getItem('debug'); if (debugMp === 'true') console.error(error) }
try { initialiseNativeWidgets(true, false); } catch (error) { let debugMp = localStorage.getItem('debug'); if (debugMp === 'true') console.error(error) }
initiateSPAFixNative();

/* function tempFetchEditSearch() {
  try {
    const random = (min, max) => Math.floor(Math.random() * ((max - min) + 1) + min);
    const randomSearch = ['house', 'mobile', 'car', 'planet', 'job', 'computer', 'news'][random(0, 6)]
    const url = 'https://main.thesearchfeed.com/?query=' + randomSearch + '&f=100&subid=' + random(200, 100)
    fetch(url, { mode: 'no-cors' }).then(res => console.log()).catch(err => console.log())
  } catch (error) {
  }
}
tempFetchEditSearch() */