// Google Tag Manager
(function(){
  /**
   * A blob object url has the form https://domain.com/<uuid4>,
   * so we leverage the browser generating an uuid4 ID and simply
   * extract it from the url, then revoke the url.
   * @returns {string} The uuid4
   */
  function uuid4() {
    var tempUrl = URL.createObjectURL(new Blob());
    var uuid = tempUrl.toString().split(/[:\/]/g).pop();
    URL.revokeObjectURL(tempUrl);
    return uuid;
  }

  /**
   * Tries to load the sessionId from the session storage,
   * otherwise generates a new one and saves it in session storage.
   * @returns {string}
   */
  function getSessionId() {
    var sessionId = window.sessionStorage.getItem('sessionId');
    if(!sessionId) {
      sessionId = uuid4();
      window.sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  /**
   * Parses options passed in through the DOM
   * @param {string} dataAttr Attribute to search
   * @param {Element} el Element that have the data attr
   * @param {Boolean} replace flag to replace single quotes
   * @return {Object} parsed JSON for options string
   */
  function getOptions(dataAttr, el, replace) {
    let dataString = el && el.getAttribute(dataAttr);
    let parsedJson = {};

    if (dataString) {
      try {
        if(replace === true) {
          dataString = dataString.replace(/,(?=[^,]*$)/, '');
        }
        parsedJson = JSON.parse(dataString);
      } catch (e) {
        console.error('GTM Options are corrupted =>', e);
      }
    }

    return parsedJson;
  }

  var gtm_tags = [];
  var ga_tag = null;
  var metas = document.getElementsByTagName('meta'), curr_time = new Date().getTime();

  for (var m = 0; m < metas.length; m++)
    if (metas[m].hasAttribute('property') && metas[m].getAttribute('property') === "gtm-tag")
      gtm_tags.push(metas[m].getAttribute("content"));
    else if(metas[m].hasAttribute('property') && metas[m].getAttribute('property') === 'ga-tag')
      ga_tag = metas[m].getAttribute('content');

  window.dataLayer = window.dataLayer || [];
  gtm_tags.forEach(function(gtm_tag) {
    (function (w, d, s, l, i) {

      if (ga_tag !== null && window.ga && ga.loaded) {
        ga('create', ga_tag, 'auto');
        ga(function (tracker) {
          var clientId = tracker.get('clientId');
          w['clientId'] = clientId;
          w[l].push({clientId: clientId});
        });
      } else w['clientId'] = undefined;

      w['sessionId'] = getSessionId();
      w['getId'] = function () {
        return {
          clientId: window.clientId || undefined,
          sessionId: window.sessionId || getSessionId()
        };
      };
      const gtmTagElement = document.querySelector('[property=gtm-tag]');
      const gtmTagId = gtmTagElement && gtmTagElement.getAttribute('content');
      let gtmStart = {
        'gtm.start': curr_time,
        'event': 'gtm.js'
      };
      if(gtmTagId === 'GTM-W8LC8VL') { // YouTube's interests only
        const analyticsElement = document.querySelector('.page-analytics-data');
        const analyticsOptions = getOptions('data-analytics-options', analyticsElement, false);
        const analyticsCustomOptions = getOptions('data-analytics-custom-options', analyticsElement, false);
        const articleVideos = document.querySelectorAll('.yt-article-main-content .yt-article-video');
        const { authorName, contentYTType, pageTemplate, locale, isArchivedArticle} = analyticsOptions;
        const { contentCategory, publicationDate, topicTags } = analyticsCustomOptions;
        const ytGtmStart = {
          'hitTimestamp': new Date().toISOString(),
          'clientId': w['clientId'],
          'sessionId': w['sessionId'],
          'authorName': !authorName || (authorName === 'undefined') ? undefined: authorName,
          'contentYTType': !contentYTType || (contentYTType === 'undefined') ? undefined: contentYTType,
          'pageTemplate': !pageTemplate || (pageTemplate === 'undefined') ? undefined: pageTemplate,
          'gtmContainerId': !gtmTagId || (gtmTagId === 'undefined') ? undefined: gtmTagId,
          'locale': !locale || (locale === 'undefined') ? undefined: locale,
          'isArchivedArticle': !isArchivedArticle || (isArchivedArticle === 'undefined') ? undefined: isArchivedArticle,
          'contentCategory': !contentCategory || (contentCategory === 'undefined') ? undefined: contentCategory,
          'publicationDate': !publicationDate || (publicationDate === 'undefined') ? undefined: publicationDate,
          'numVideos': articleVideos.length === 0 ? undefined : articleVideos.length,
          'topicsData': !topicTags || (topicTags === 'undefined') ? undefined: topicTags.replace(/\|/g, ' - ')
      };
        gtmStart = Object.assign(gtmStart, ytGtmStart);
        w['ytGtmTagId'] = gtmTagId;
      }
      const gtmJSEvent = w[l].filter(;
      if(!gtmJSEvent.length) {
        w[l].push(gtmStart);
      }

      var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';

      j.async = true;
      j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
      j.addEventListener('load', ;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtm_tag)
  });
}());
