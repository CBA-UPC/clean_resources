this.schttp = this.schttp || {}
this.schttp.workboxGetRouteList = [
  /* {
    capture: ({ sameOrigin, url, request }) => {
      return sameOrigin && (request.destination === 'document' || request.headers.has('prefetch')) && /^\/cart\/?$/.test(url.pathname)
    },
    strategy: 'StaleWhileRevalidate',
    strategyOptions: {
      cacheName: 'cartDynamicData',
    },
    ExpirationPluginConfig: {
      maxEntries: 1,
      maxAgeSeconds: 60 * 2,
    },
    CacheRecognizePluginConfig: true,
  }, */
  {
    // 首页推荐？ 这不明明是详情用的？？
    capture: /.*(localhost.+|\.shein\..+|\.romwe\..+)\api\/productInfo\/.+\/(get|query)/,
    strategy: 'CacheFirst',
    strategyOptions: {
      cacheName: 'dynamicData',
    },
    ExpirationPluginConfig: {
      maxEntries: 100,
      maxAgeSeconds: 60 * 10,
    },
    CacheRecognizePluginConfig: true,
  },
  {
    // 语言
    capture: /.*(localhost.+|\.shein\..+|\.romwe\..+)\/(pageLogo|(api\/common\/i18nBatch\/get)|(api\/common\/language\/get)|ccc_bottom_policy|config_top_banner|(ccc\/icon))/,
    strategy: 'CacheFirst',
    strategyOptions: {
      cacheName: 'dynamicData',
    },
    ExpirationPluginConfig: {
      maxEntries: 100,
      maxAgeSeconds: 60 * 10,
    },
    CacheRecognizePluginConfig: true,
  },
  {
    capture: /.*(localhost.+|\.shein\..+|\.romwe\..+)\/api\/user\/addressbook\/(universalCountryList\/get|countryAddressAreaByType\/get|addressById\/get|infoByPincode\/get|checkTwName\/get|addressCheckRule\/get|parentAddressAreaInfo\/get|addressFormConfigByInfo\/get)/,
    strategy: 'CacheFirst',
    strategyOptions: {
      cacheName: 'addressbook',
    },
    ExpirationPluginConfig: {
      maxEntries: 50,
      maxAgeSeconds: 60 * 2,
    },
    CacheableResponsePluginConfig: {
      jsonValidator({ json }) {
        return !!json?.info
      }
    },
    CacheRecognizePluginConfig: true,
  }
]
this.schttp.workboxPostRouteList = [
  // e.g.
  // {
  //   capture: /schttp=test/,
  //   // strategy: 'CacheFirst', // 暂时只提供此策略
  //   strategyOptions: {
  //     cacheName: 'dynamicData-post',
  //   },
  //   ExpirationPluginConfig: {
  //     maxEntries: 50,
  //     maxAgeSeconds: 60 * 5,
  //   },
  //   CacheableResponsePluginConfig: {
  //     statuses: [0, 200],
  //     headers: {
  //       'Content-Type': 'image/jpeg'
  //     },
  //     async validator(response) {
  //       return !!response
  //     },
  //     async jsonValidator(json) {
  //       return !!json?.info
  //     }
  //   }
  // }
  {
    capture: /.*(localhost.+|\.shein\..+|\.romwe\..+)\/api\/user\/addressbook\/(textSearch\/get|placeDetails\/get|associateAddress\/get|checkStateCityInOtherCountry\/get|checkAssociateMapped\/get)/,
    strategyOptions: {
      cacheName: 'addressbook-post',
    },
    ExpirationPluginConfig: {
      maxEntries: 50,
      maxAgeSeconds: 60 * 2,
    },
    CacheableResponsePluginConfig: {
      jsonValidator({ json, url }) {
        const isSearch = /.*(localhost.+|\.shein\..+|\.romwe\..+)\/api\/user\/addressbook\/(textSearch\/get|placeDetails\/get)/.test(url?.href)
        return isSearch ? !!json : !!json?.info
      }
    },
    CacheRecognizePluginConfig: true,
  }
]
