importScripts('https://cdn.webpush.jp/js/coins-sw-sdk.js');


/**
 * サービスワーカーファイル
 *
 * workboxを使用してリソースファイル（JS,CSS）のプリキャッシュを行います。
 */

importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW({
    cachedId: 'yol-web',
    skipWaiting: true,
    clientsClaim: true
});

workboxSW.precache([
  {
    "url": "assets/css/amp-20240112055445.css"
  },
  {
    "url": "assets/css/appwv-20240112055445.css"
  },
  {
    "url": "assets/css/plugin-yol-gns-20240112055445.css"
  },
  {
    "url": "assets/css/style-20240112055445.css"
  },
  {
    "url": "assets/css/sys-ajax-contents-20240112055445.css"
  },
  {
    "url": "assets/css/uni-akb-20240112055445.css"
  },
  {
    "url": "assets/css/uni-choken-20240112055445.css"
  },
  {
    "url": "assets/css/uni-column-20240112055445.css"
  },
  {
    "url": "assets/css/uni-comic-20240112055445.css"
  },
  {
    "url": "assets/css/uni-commentary-20240112055445.css"
  },
  {
    "url": "assets/css/uni-coupon-20240112055445.css"
  },
  {
    "url": "assets/css/uni-crossword-20240112055445.css"
  },
  {
    "url": "assets/css/uni-culture-book-reviews-20240112055445.css"
  },
  {
    "url": "assets/css/uni-digital-20240112055445.css"
  },
  {
    "url": "assets/css/uni-economy-20240112055445.css"
  },
  {
    "url": "assets/css/uni-ekiden-virtual-ouen-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-2019-home-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-2019-top-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-archive-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-archive-shimen-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-archive-zikeiretu-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-base-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-local-2019_parts-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-local-2019-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-local-base-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-local-tochijisen2016-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-local-tochijisen2020-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-local-togisen2021-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-2016_chumoku-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-2016_kaihyou-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-2016_status-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-2019_kaihyou-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-2019_parts-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-2019-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-sangiin-base-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2017_chumoku-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2017_kaihyou-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2017_status-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2019_kaihyou-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2021_kaihyou-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2021_parts-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-2021-20240112055445.css"
  },
  {
    "url": "assets/css/uni-election-shugiin-base-20240112055445.css"
  },
  {
    "url": "assets/css/uni-error-20240112055445.css"
  },
  {
    "url": "assets/css/uni-expo-2025-20240112055445.css"
  },
  {
    "url": "assets/css/uni-feature-top10news-special-20240112055445.css"
  },
  {
    "url": "assets/css/uni-fukayomi-20240112055445.css"
  },
  {
    "url": "assets/css/uni-giants-20240112055445.css"
  },
  {
    "url": "assets/css/uni-guidance-20240112055445.css"
  },
  {
    "url": "assets/css/uni-hakone-ekiden-20240112055445.css"
  },
  {
    "url": "assets/css/uni-help-20240112055445.css"
  },
  {
    "url": "assets/css/uni-hobby-atcars-20240112055445.css"
  },
  {
    "url": "assets/css/uni-home-2020-20240112055445.css"
  },
  {
    "url": "assets/css/uni-home-2021-20240112055445.css"
  },
  {
    "url": "assets/css/uni-home-2024-20240112055445.css"
  },
  {
    "url": "assets/css/uni-home-20240112055445.css"
  },
  {
    "url": "assets/css/uni-igoshougi-kisei-20240112055445.css"
  },
  {
    "url": "assets/css/uni-igoshougi-ryuoh-20240112055445.css"
  },
  {
    "url": "assets/css/uni-info-20240112055445.css"
  },
  {
    "url": "assets/css/uni-jinsei-20240112055445.css"
  },
  {
    "url": "assets/css/uni-keitai-20240112055445.css"
  },
  {
    "url": "assets/css/uni-kodomo-20240112055445.css"
  },
  {
    "url": "assets/css/uni-komachiplus-20240112055445.css"
  },
  {
    "url": "assets/css/uni-kyoiku-20240112055445.css"
  },
  {
    "url": "assets/css/uni-life-food-column-20240112055445.css"
  },
  {
    "url": "assets/css/uni-life-horoscope-2022-20240112055445.css"
  },
  {
    "url": "assets/css/uni-life-nyancology-20240112055445.css"
  },
  {
    "url": "assets/css/uni-life-podcast-20240112055445.css"
  },
  {
    "url": "assets/css/uni-life-recipe-20240112055445.css"
  },
  {
    "url": "assets/css/uni-medical-20240112055445.css"
  },
  {
    "url": "assets/css/uni-member-20240112055445.css"
  },
  {
    "url": "assets/css/uni-mynews-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-culture-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-editorial-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-feature-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-igoshougi-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-life-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-local-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-matome-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-saigai-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-sports-20240112055445.css"
  },
  {
    "url": "assets/css/uni-news-top-20240112055445.css"
  },
  {
    "url": "assets/css/uni-novel-20240112055445.css"
  },
  {
    "url": "assets/css/uni-nyushi-20240112055445.css"
  },
  {
    "url": "assets/css/uni-olympic-2020-20240112055445.css"
  },
  {
    "url": "assets/css/uni-olympic-2020-top-20240112055445.css"
  },
  {
    "url": "assets/css/uni-olympic-20240112055445.css"
  },
  {
    "url": "assets/css/uni-opinion-20240112055445.css"
  },
  {
    "url": "assets/css/uni-otekomachi-20240112055445.css"
  },
  {
    "url": "assets/css/uni-paralympic-2020-20240112055445.css"
  },
  {
    "url": "assets/css/uni-paralympic-2020-top-20240112055445.css"
  },
  {
    "url": "assets/css/uni-photograph-20240112055445.css"
  },
  {
    "url": "assets/css/uni-photograph-kikaku-kataru-20240112055445.css"
  },
  {
    "url": "assets/css/uni-photograph-lookback2020-20240112055445.css"
  },
  {
    "url": "assets/css/uni-photograph-lookback2021-20240112055445.css"
  },
  {
    "url": "assets/css/uni-photograph-lookback2023-20240112055445.css"
  },
  {
    "url": "assets/css/uni-pokemon-20240112055445.css"
  },
  {
    "url": "assets/css/uni-policy-20240112055445.css"
  },
  {
    "url": "assets/css/uni-rensai-20240112055445.css"
  },
  {
    "url": "assets/css/uni-rss-toyo-20240112055445.css"
  },
  {
    "url": "assets/css/uni-scrap-20240112055445.css"
  },
  {
    "url": "assets/css/uni-search-20240112055445.css"
  },
  {
    "url": "assets/css/uni-serial-20240112055445.css"
  },
  {
    "url": "assets/css/uni-shimen-20240112055445.css"
  },
  {
    "url": "assets/css/uni-sitemap-20240112055445.css"
  },
  {
    "url": "assets/css/uni-slitherlink-20240112055445.css"
  },
  {
    "url": "assets/css/uni-special-20240112055445.css"
  },
  {
    "url": "assets/css/uni-special-hibaku-20240112055445.css"
  },
  {
    "url": "assets/css/uni-sports-actionsports-20240112055445.css"
  },
  {
    "url": "assets/css/uni-sports-interhigh-schedule-20240112055445.css"
  },
  {
    "url": "assets/css/uni-stream-20240112055445.css"
  },
  {
    "url": "assets/css/uni-sudoku-20240112055445.css"
  },
  {
    "url": "assets/css/uni-teen-20240112055445.css"
  },
  {
    "url": "assets/css/uni-traffic-20240112055445.css"
  },
  {
    "url": "assets/css/uni-voc-20240112055445.css"
  },
  {
    "url": "assets/css/uni-weather-20240112055445.css"
  },
  {
    "url": "assets/css/uni-welcome_to_online-20240112055445.css"
  },
  {
    "url": "assets/css/uni-world-20240112055445.css"
  },
  {
    "url": "assets/css/uni-world-ukraine_reconstruction-20240112055445.css"
  },
  {
    "url": "assets/css/uni-yolapp-20240112055445.css"
  },
  {
    "url": "assets/css/uni-yolica-20240112055445.css"
  },
  {
    "url": "assets/js/ajax-contents-20240112055445.js"
  },
  {
    "url": "assets/js/ajax-settings-20240112055445.js"
  },
  {
    "url": "assets/js/d-common-20240112055445.js"
  },
  {
    "url": "assets/js/ekiden-record-20240112055445.js"
  },
  {
    "url": "assets/js/jq-autokana-20240112055445.js"
  },
  {
    "url": "assets/js/jq-loader-20240112055445.js"
  },
  {
    "url": "assets/js/manifest-20240112055445.js"
  },
  {
    "url": "assets/js/npb-results-20240112055445.js"
  },
  {
    "url": "assets/js/pimg-20240112055445.js"
  },
  {
    "url": "assets/js/plugins/yol-gns/yol-gns-main-renew-20240112055445.js"
  },
  {
    "url": "assets/js/plugins/yol-members/member_reader_reg-20240112055445.js"
  },
  {
    "url": "assets/js/plugins/yol-members/member_register-20240112055445.js"
  },
  {
    "url": "assets/js/rt_dnt-20240112055445.js"
  },
  {
    "url": "assets/js/scrap-button-20240112055445.js"
  },
  {
    "url": "assets/js/shortcodeMovie-20240112055445.js"
  },
  {
    "url": "assets/js/sns-share-20240112055445.js"
  },
  {
    "url": "assets/js/sumo-results-20240112055445.js"
  },
  {
    "url": "assets/js/team8-20240112055445.js"
  },
  {
    "url": "assets/js/uni-coupon-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-2019-home-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-2019-top-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-archive-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-base-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-local-2019-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-local-base-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-local-tochijisen2016-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-local-tochijisen2020-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-local-togisen2021-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-sangiin-2016-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-sangiin-2019-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-sangiin-2019-kaihyou-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-sangiin-base-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-shugiin-2017-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-shugiin-2019-kaihyou-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-shugiin-2021-candidates-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-shugiin-2021-kaihyou-20240112055445.js"
  },
  {
    "url": "assets/js/uni-election-shugiin-base-20240112055445.js"
  },
  {
    "url": "assets/js/uni-feature-top10news-special-20240112055445.js"
  },
  {
    "url": "assets/js/uni-feature-top10news-special-result-20240112055445.js"
  },
  {
    "url": "assets/js/uni-footer-20240112055445.js"
  },
  {
    "url": "assets/js/uni-giants-20240112055445.js"
  },
  {
    "url": "assets/js/uni-guidance-20240112055445.js"
  },
  {
    "url": "assets/js/uni-hakone-ekiden_2017_matome-20240112055445.js"
  },
  {
    "url": "assets/js/uni-header-20240112055445.js"
  },
  {
    "url": "assets/js/uni-hobby-atcars-20240112055445.js"
  },
  {
    "url": "assets/js/uni-home-2020-20240112055445.js"
  },
  {
    "url": "assets/js/uni-home-2020-redirect-20240112055445.js"
  },
  {
    "url": "assets/js/uni-home-20240112055445.js"
  },
  {
    "url": "assets/js/uni-life-nyancology-20240112055445.js"
  },
  {
    "url": "assets/js/uni-life-recipe-20240112055445.js"
  },
  {
    "url": "assets/js/uni-local-20240112055445.js"
  },
  {
    "url": "assets/js/uni-member-20240112055445.js"
  },
  {
    "url": "assets/js/uni-news-20240112055445.js"
  },
  {
    "url": "assets/js/uni-olympic-2020-20240112055445.js"
  },
  {
    "url": "assets/js/uni-photograph-20240112055445.js"
  },
  {
    "url": "assets/js/uni-pokemon-20240112055445.js"
  },
  {
    "url": "assets/js/uni-scrap-20240112055445.js"
  },
  {
    "url": "assets/js/uni-search-20240112055445.js"
  },
  {
    "url": "assets/js/uni-sports-ikee_rikako-20240112055445.js"
  },
  {
    "url": "assets/js/uni-sports-interhigh-20240112055445.js"
  },
  {
    "url": "assets/js/uni-sports-koshien-20240112055445.js"
  },
  {
    "url": "assets/js/uni-stream-20240112055445.js"
  },
  {
    "url": "assets/js/uni-tarots-20240112055445.js"
  },
  {
    "url": "assets/js/uni-temp_header-20240112055445.js"
  },
  {
    "url": "assets/js/uni-voc-20240112055445.js"
  },
  {
    "url": "assets/js/uni-weather-20240112055445.js"
  },
  {
    "url": "assets/js/uni-web-search-20240112055445.js"
  },
  {
    "url": "assets/js/uni-yolica-shops-20240112055445.js"
  },
  {
    "url": "assets/js/vendor-20240112055445.js"
  },
  {
    "url": "assets/libs/apng/apng-canvas.min.js",
    "revision": "a7041be00023fd86f595eacdd6c401de"
  },
  {
    "url": "assets/libs/consts/consts.js",
    "revision": "2435154a35c72c783c35129f1d7e53d5"
  },
  {
    "url": "assets/libs/d3/js/d3.v4.min.js",
    "revision": "e899651bcf1a3591032d7213daeab171"
  },
  {
    "url": "assets/libs/d3/js/d3.v5.min.js",
    "revision": "1b502d803c21ae94f7758d05c75b1276"
  },
  {
    "url": "assets/libs/echo/echo.js",
    "revision": "29b0cabb94c11292f6249a0a1ddb967f"
  },
  {
    "url": "assets/libs/echo/echo.min.js",
    "revision": "0bd67ba1f63ec71f37b53c2713ac9ef7"
  },
  {
    "url": "assets/libs/fingerprintjs2/fingerprint2.js",
    "revision": "01691c92e45de453e1cfb82ded12c1c2"
  },
  {
    "url": "assets/libs/fullpage/css/jquery.fullPage.css",
    "revision": "a638777abb4f64a5c7828706a3f0e4a0"
  },
  {
    "url": "assets/libs/fullpage/js/jquery.easings.min.js",
    "revision": "b4adc2012a44cb2096f6df47956bd089"
  },
  {
    "url": "assets/libs/fullpage/js/jquery.fullPage.min.js",
    "revision": "f073bf526826ed3ff9f7aefcd2d2b516"
  },
  {
    "url": "assets/libs/igoshougi/ryuoh/2021/profile.css",
    "revision": "0da42367c7163eb59863c41476f4d9d4"
  },
  {
    "url": "assets/libs/imagesLoaded/imagesloaded.pkgd.min.js",
    "revision": "e2c1a80b99251b7b94726b41312fb160"
  },
  {
    "url": "assets/libs/jquery-ui/smoothness/jquery-ui.css",
    "revision": "bf051f24690699bc2665ef6e4d7487a7"
  },
  {
    "url": "assets/libs/jquery-ui/smoothness/jquery-ui.min.css",
    "revision": "3c2a865c832a1322285c55c6ed99abb2"
  },
  {
    "url": "assets/libs/jquery-ui/smoothness/theme.css",
    "revision": "e4327912458100faa111dbe7bd75f4d9"
  },
  {
    "url": "assets/libs/jquery/jquery-1.12.4.min.js",
    "revision": "0fca26b5a37a66d68d0f4406976be4b5"
  },
  {
    "url": "assets/libs/jquery/jquery-2.2.4.min.js",
    "revision": "b354cc9d56a1da6b0c77604d1b153850"
  },
  {
    "url": "assets/libs/jquery/jquery-3.4.1.min.js",
    "revision": "f832e36068ab203a3f89b1795480d0d7"
  },
  {
    "url": "assets/libs/masonry/masonry-docs.css",
    "revision": "e59515bb97dd504387b8975d5caac33f"
  },
  {
    "url": "assets/libs/masonry/masonry-docs.min.js",
    "revision": "2c0a111ac836f6dd1ad835abae681d90"
  },
  {
    "url": "assets/libs/masonry/masonry.pkgd.min.js",
    "revision": "520e46df77727aaf3d5e799ef241be02"
  },
  {
    "url": "assets/libs/nivo-lightbox/nivo-lightbox.js",
    "revision": "30a486cf2200b5f399a90e734a97d738"
  },
  {
    "url": "assets/libs/object-fit-images/3.2.4/ofi.js",
    "revision": "1a69c435559567df92f38e272a3ad8dd"
  },
  {
    "url": "assets/libs/partialcontent/partialcontent.js",
    "revision": "29228d9826b737687e9d868e7154d9ba"
  },
  {
    "url": "assets/libs/photogp/awards42/css/bootstrap-build.css",
    "revision": "33a5701c0305a9169e8c58aa54647712"
  },
  {
    "url": "assets/libs/photogp/awards42/css/layout.css",
    "revision": "a0b20172e2012f0dee7470b99f72fa1f"
  },
  {
    "url": "assets/libs/photogp/awards42/css/modaal.min.css",
    "revision": "d2727416e80ea560690e3eead43a4295"
  },
  {
    "url": "assets/libs/photogp/awards42/css/style.css",
    "revision": "36bfe524c64aa8ad3a9c7b4d63566217"
  },
  {
    "url": "assets/libs/photogp/awards42/css/swiper.min.css",
    "revision": "6f831a2cd3a66125860b090b99b5497e"
  },
  {
    "url": "assets/libs/photogp/awards42/js/fitie.js",
    "revision": "e01c3e36a523f60f22badd88e4c41430"
  },
  {
    "url": "assets/libs/photogp/awards42/js/iscroll.js",
    "revision": "f2324255adfc2da2e58653a2672f2dc4"
  },
  {
    "url": "assets/libs/photogp/awards42/js/modaal.min.js",
    "revision": "72540584f47ec6f7bf294a7958dddb2a"
  },
  {
    "url": "assets/libs/photogp/awards42/js/ofi.min.js",
    "revision": "3548f57d0ab5d4223e487d34ca37a3be"
  },
  {
    "url": "assets/libs/photogp/awards42/js/script.js",
    "revision": "c3d0fc0c1b51c5b337b769d4eb1bea11"
  },
  {
    "url": "assets/libs/photogp/awards42/js/swiper.min.js",
    "revision": "cd5e9023967a0cd17a7633c9aaca748a"
  },
  {
    "url": "assets/libs/photograph/lookback2020/masonry-docs.css",
    "revision": "e59515bb97dd504387b8975d5caac33f"
  },
  {
    "url": "assets/libs/photograph/lookback2020/masonry-docs.min.js",
    "revision": "2c0a111ac836f6dd1ad835abae681d90"
  },
  {
    "url": "assets/libs/photograph/lookback2020/masonry.pkgd.min.js",
    "revision": "520e46df77727aaf3d5e799ef241be02"
  },
  {
    "url": "assets/libs/photograph/lookback2020/nivo-lightbox.js",
    "revision": "30a486cf2200b5f399a90e734a97d738"
  },
  {
    "url": "assets/libs/skrollr/js/skrollr.min.js",
    "revision": "b1f41260da79657330190e2d37cfb4cb"
  },
  {
    "url": "assets/libs/slick/css/slick-base.css",
    "revision": "900392eed4919bcb8e380ca0d5e961f8"
  },
  {
    "url": "assets/libs/slick/css/slick-theme.css",
    "revision": "da5b2e8e71af2a93cdd69be9b6448ad8"
  },
  {
    "url": "assets/libs/slick/css/slick.css",
    "revision": "f38b2db10e01b1572732a3191d538707"
  },
  {
    "url": "assets/libs/slick/js/slick.js",
    "revision": "5a86d389707aa0c1e8cf6b0d0edc913c"
  },
  {
    "url": "assets/libs/slick/js/slick.min.js",
    "revision": "d5a61c749e44e47159af8a6579dda121"
  },
  {
    "url": "assets/libs/sports/rugby/2023/css/opta-widgets-arrangement.css",
    "revision": "bfdd4b8d72dbfca40e78a0dd99541235"
  },
  {
    "url": "assets/libs/sports/rugby/2023/css/rugby-omonyu-home.css",
    "revision": "e4c69731cfb62b2ae47090f601a455f2"
  },
  {
    "url": "assets/libs/sports/rugby/2023/css/rugby-omonyu.css",
    "revision": "61a03fb5279ef85c4414d607c0894707"
  },
  {
    "url": "assets/libs/sports/rugby/2023/css/uni-Rugby_WorldCup.css",
    "revision": "1189ffb4bd11da9683a51827d3b57960"
  },
  {
    "url": "assets/libs/sports/rugby/2023/js/opta_data.js",
    "revision": "68f6b7370a9a3b0d3c4196d631dd603a"
  },
  {
    "url": "assets/libs/sports/rugby/2023/js/opta_settings.js",
    "revision": "c9f6e82bfee2abe7470078cacdde9a59"
  },
  {
    "url": "assets/libs/sports/rugby/2023/js/opta-omonyu-settings.js",
    "revision": "691a5bccaec28334c85f519342f25fe4"
  },
  {
    "url": "assets/libs/sports/rugby/2023/js/uni-Rugby_WorldCup.js",
    "revision": "3a50c9a3fe3cd7eaec0eeff8d6674cf3"
  },
  {
    "url": "assets/libs/sudoku/css/main.css",
    "revision": "bf1276cfc6272d058332f25d55c99c2e"
  },
  {
    "url": "assets/libs/sudoku/css/print.css",
    "revision": "4583f58909ae23dae1c6c3581abb8692"
  },
  {
    "url": "assets/libs/sudoku/js/collections/numbers.js",
    "revision": "9886fdf4e81b98be0b8b2d25e2ee756f"
  },
  {
    "url": "assets/libs/sudoku/js/collections/table.js",
    "revision": "6a3765c2f86f0dd7a91e77765d0cdcf1"
  },
  {
    "url": "assets/libs/sudoku/js/lib/backbone-min.js",
    "revision": "9cfbc78dc7eb8ac72cc3af1bec8ce7ee"
  },
  {
    "url": "assets/libs/sudoku/js/lib/backbone.localStorage-min.js",
    "revision": "b3d379da97315802e017e77794a1e5d9"
  },
  {
    "url": "assets/libs/sudoku/js/lib/html5.js",
    "revision": "fb4e3b19e8946427b114623ad94b0a95"
  },
  {
    "url": "assets/libs/sudoku/js/lib/jquery-1.9.1.min.js",
    "revision": "397754ba49e9e0cf4e7c190da78dda05"
  },
  {
    "url": "assets/libs/sudoku/js/lib/underscore-min.js",
    "revision": "c1d87f22acbfed0f3ddca62db6958eeb"
  },
  {
    "url": "assets/libs/sudoku/js/models/app.js",
    "revision": "e24045d37338c281c0e1f14590dc40c5"
  },
  {
    "url": "assets/libs/sudoku/js/models/cell.js",
    "revision": "452678f7d38c304e935f34c17dbd6cc5"
  },
  {
    "url": "assets/libs/sudoku/js/models/commonbutton.js",
    "revision": "065858fc5f990cb41bcb785be08285e3"
  },
  {
    "url": "assets/libs/sudoku/js/models/modal.js",
    "revision": "99bf39c82f7a43492e3c240ef0ba3b3c"
  },
  {
    "url": "assets/libs/sudoku/js/models/numeric.js",
    "revision": "d5a3f3344c6cd64d1aed496b23cd15c5"
  },
  {
    "url": "assets/libs/sudoku/js/sudoku.js",
    "revision": "44d207d19b77217424d576fbebd29b87"
  },
  {
    "url": "assets/libs/sudoku/js/views/app.js",
    "revision": "7d084a27a1ebd84316e2159e2256376c"
  },
  {
    "url": "assets/libs/sudoku/js/views/buttons.js",
    "revision": "f0bd762c4fc2836095ecc4d90ede6f16"
  },
  {
    "url": "assets/libs/sudoku/js/views/cell.js",
    "revision": "a5b71698442768697bcfde4e11253399"
  },
  {
    "url": "assets/libs/sudoku/js/views/modal.js",
    "revision": "f3a6d7bdb3e6ddd51576f152848e61cc"
  },
  {
    "url": "assets/libs/sudoku/js/views/numbers.js",
    "revision": "8804300986611f98c8b34fe0e1cb72e7"
  },
  {
    "url": "assets/libs/sudoku/js/views/numeric.js",
    "revision": "8640030fcbe28825147ca0d71e263351"
  },
  {
    "url": "assets/libs/sudoku/js/views/table.js",
    "revision": "e4ff1f13fce1f8f65badda4c1099aa47"
  },
  {
    "url": "assets/libs/threejs/js/CSS2DRenderer.js",
    "revision": "2e447765ce097db1728ad18990ad2a87"
  },
  {
    "url": "assets/libs/threejs/js/GLTFLoader.js",
    "revision": "e9e9e786c2dd2efee3af5271282e66e0"
  },
  {
    "url": "assets/libs/threejs/js/OrbitControls.js",
    "revision": "dc184f0e176c2df73a7e1fcb0cca9afe"
  },
  {
    "url": "assets/libs/threejs/js/three.min.js",
    "revision": "c6f85ecd9da1b6a0a2b098bd58c429cb"
  },
  {
    "url": "assets/libs/threejs/js/TrackballControls.js",
    "revision": "53e335045c80fe1523b4f981f4532656"
  },
  {
    "url": "assets/libs/yomiurifp/yomiurifp.js",
    "revision": "f3cc7e996cc564231e9f1ac897d036dc"
  },
  {
    "url": "sports/rugby/2019/assets/css/_style.css",
    "revision": "797683e0d1ea42c731b5eb3503c7c8ec"
  },
  {
    "url": "sports/rugby/2019/assets/css/style.css",
    "revision": "7bec13ffcea30af0b23b4192cd791dc5"
  },
  {
    "url": "sports/rugby/2019/assets/css/v3.all.opta-widgets.css",
    "revision": "3f308188822eda72013821c38a241db9"
  },
  {
    "url": "sports/rugby/2019/assets/js/bundle.js",
    "revision": "da403b55d2386e0798922fe79aa6ac5b"
  },
  {
    "url": "sports/rugby/2019/assets/js/loadrefresh.js",
    "revision": "2367dffb4009aae5370e6b164f2b3af1"
  },
  {
    "url": "sports/rugby/2019/assets/js/v3.opta-widgets.js",
    "revision": "1b82e96cdf8d5248be0b2803cf9fa718"
  },
  {
    "url": "sports/rugby/2019/rugbyworldcup/assets/css/style.css",
    "revision": "c1158f23f61395874fb47798184eeb51"
  }
]);

// workboxSW.router.registerRoute(/\assets\/.*\.(?:jpeg|jpg|png|gif|svg|woff|ttf|eot)/, workboxSW.strategies.cacheFirst({
//     cacheName: 'assets-cache',
//     cacheExpiration: {
//         maxAgeSeconds: 60 * 60 * 24 * 14
//     }
// }));
//
// workboxSW.router.registerRoute(/\/media\/.*\.(?:jpeg|jpg|png|gif|webp)/, workboxSW.strategies.cacheFirst({
//     cacheName: 'media-cache',
//     cacheExpiration: {
//         maxEntries: 100,
//         maxAgeSeconds: 60 * 60 * 24
//     }
// }));
