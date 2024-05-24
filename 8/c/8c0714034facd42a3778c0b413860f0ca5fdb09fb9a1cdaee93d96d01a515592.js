var webex = webex || {};
webex.chat =
  webex.chat ||
  (function () {
    var config = {
      new: {
        urlDestination: 'https://spyder.cisco.com/app/v2/chat?id=MTAwMDA1&source=webex.com',
        window: {
          name: '_blank',
          options: 'location=no,left=0,right=0,width=425,height=800',
        },
      },
      legacy: {
        urlScript: '/content/dam/webex/eopi/lib/LiveAgent/c2c-standalone-v8-2-5-webex-b.js',
      },
    };

    var loadScript = 

    var getQueryParams = 

    var getCookie = 

    var getCountryCode = function (locale) {
      var splits = locale.split('_');
      var countryCode = splits.length > 1 ? splits[1] : '';
      return countryCode.toUpperCase();
    };

    var getLanguage = function (locale) {
      var splits = locale.split('_');
      var language = splits.length > 1 ? splits[0] : '';
      return language.toLowerCase();
    };

    var getLocale = function () {
      var lang;
      var country;
      var qs;
      var locale;
      var domain = document.domain.toLowerCase();

      switch (domain) {
        case 'www.webex.co.kr':
          locale = 'ko_KR';
          break;
        case 'www.webex.co.in':
          locale = 'en_IN';
          break;
        case 'www.webex.com.br':
          locale = 'pt_BR';
          break;
        case 'www.webex.com.cn':
          locale = 'zh_CN';
          break;
        case 'www.webex.com.hk':
          locale = 'zh_HK';
          break;
        case 'www.webex.com.mx':
          locale = 'es_MX';
          break;
        default:
          // www.webex.com
          lang = getCookie('user_lang') || 'en';
          country = getCookie('user_locale') || 'US';
          locale = lang + '_' + country;
      }

      // Locale override.
      qs = getQueryParams(document.location.search);
      locale = qs.test_locale || locale;

      return locale;
    };

    var doChatIMI = function (locale) {
      var elButton = document.querySelector('.c2c-component .c2c-active .c2c-button');

      // Remove chat button.
      if (elButton !== null) {
        elButton.remove();
      }
    };

    var doChatWCA = function (locale) {
      var elActive = document.querySelector('.c2c-component .c2c-active');
      var elButton = document.querySelector('.c2c-component .c2c-active .c2c-button');
      var chatDelay = 0;

      var countryCode = getCountryCode(locale);
      // The chat bot uses KO instead of KR for South Korea.
      if (countryCode === 'KR') countryCode = 'KO';

      if (elButton !== null) {
        // Create button click handler.
        elButton.addEventListener('click', function () {
          var url = config.new.urlDestination + '&CountryInput=' + countryCode;
          window.open(url, config.new.window.name, config.new.window.options);
        });

        // Display chat button.
        // Tealium will hide the chat. Introduce a delay to show the chat after Tealium would have hidden it.
        setTimeout( chatDelay);
      }
    };

    var doChatLegacy = 

    var removeElement = 

    var replaceMetaTag = function (name, content) {
      var elHead = document.querySelector('head');
      var elMetaOld = elHead.querySelector('meta[name=' + name + ']');
      var elMetaNew = document.createElement('meta');

      elMetaNew.setAttribute('name', name);
      elMetaNew.setAttribute('content', content);

      removeElement(elMetaOld);
      elHead.appendChild(elMetaNew);
    };

    var localizeMetaTags = function (locale) {
      // If LiveAgent cannot determine the user's locale, it reads meta tags.
      // The locale meta tag uses the same value as the country meta tag.
      var language = getLanguage(locale);
      var countryCode = getCountryCode(locale);

      replaceMetaTag('locale', countryCode);
      replaceMetaTag('language', language);
      replaceMetaTag('country', countryCode);
    };

    var supportsWCA = function (locale) {
      var reLocalesSupported = /^(en_(?!gb|it|uk)[a-z]{2}|ja_JP|ko_KR|zh-tw_HK)$/i;
      // en_GB, en_IT, en_UK have dedicated legacy chat queues.
      // Send all other en_ locales to chat bot.
      var isSupported = reLocalesSupported.test(locale);

      return isSupported;
    };

    var supportsIMI = 

    var sendMetricChat = function (assignedChat) {
      try {
        amplitude.getInstance().logEvent('chat_assigned', {version: assignedChat});
      } catch (e) {
        console.log('chat:' + assignedChat + ':' + e.message);
      }
    };

    var init = (function () {
      var locale = getLocale();
      localizeMetaTags(locale);

      if (supportsIMI(locale)) {
        doChatIMI(locale);
        sendMetricChat('IMI');
      } else if (supportsWCA(locale)) {
        doChatWCA(locale);
        sendMetricChat('WCA');
      } else {
        doChatLegacy();
        sendMetricChat('Legacy');
      }
    })();
  })();
