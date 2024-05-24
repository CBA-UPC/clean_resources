/**
 * Swiper 3.4.111
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2016
 */
!),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],;
//# sourceMappingURL=maps/swiper.min.js.map
( function () {
  'use strict';

  var bnr_type = 'pay'
  if(window.bannerselector && typeof window.bannerselector != undefined) {
    bnr_type = window.bannerselector
  }

  const MAX_SP_WIDTH = 768;
  const RP_BANNER = {
    // 初期動作
    initBanner: function () {
      // TODO: for AB
      if (typeof window.swiper_v2 !== 'undefined') {
        window.swiper_v2.destroy();
        document.querySelector( '.swiper-rp-container' ).textContent = null;
      }

      RP_BANNER.getCampaignList();
    },
    // JSONファイルからキャンペーンデータ取得
    getCampaignList: function () {
      var currentDate = new Date();
      var queryMatch = location.search.match( /debug=(.*?)(&|$)/ );
      if( queryMatch ) {
        var urlDate = decodeURIComponent( queryMatch[1] );
        if ( !urlDate.match( /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/ ) ){
          alert( 'パラメータの書式は[YYYY-MM-DDTHH:MM]にしてください。' );
        }
        var sendDate = new Date( urlDate );
        currentDate = sendDate;
      }
      var request = new XMLHttpRequest();
      request.open( 'get', '//finance.jp.rakuten-static.com/rpay/json/campaign_v3.json', true );
      // request.setRequestHeader('Pragma', 'no-cache'); // is not allowed by Access-Control-Allow-Headersになるので後でキャッシュさせない方法調べる
      // request.setRequestHeader('Cache-Control', 'no-cache'); // is not allowed by Access-Control-Allow-Headersになるので後でキャッシュさせない方法調べる
      request.responseType = 'json';
      request.onload = function ( event ) {
        if ( request.readyState === 4 && reque          // バナー一覧を作成
          RP_BANNER.createCampaignList( currentDate, request.response );
        }
      };
      request.onerror = function ( event ) {};
      request.send( null );
    },
    // バナー一覧を作成
    createCampaignList: function ( currentDate, campaigns ) {
         }else{
        var campaignArr = JSON.parse(campaigns);
      }
      //ソート
      campaignArr = campaignArr.sort(function(a, b) {
        return (a.priority > b.priority) ? -1 : 1;
      });
      var viewBanner = campaignArr.filter( function ( item, index ) {
        var displayOpenDate = new Date(item.display_open);
        var displayCloseDate = new Date(item.display_close);
        var openDate = new Date( item.open );
        var closeDate = new Date( item.close );
        return ( displayOpenDate <= currentDate && displayCloseDate >= currentDate && item.type == 'pay' );
      } );

      if( viewBanner.length > 0 ) {
        Array.prototype.forEach.call( viewBanner, function( item ) {
          // IEが先にロードする画像しか読み込めないためPC用の記述をimg側に入れる
           var h = '<div class="swiper-slide js-click-banner-v3">'
                 + '<a href="'+ item.url_top +'" target="_blank">'
                 + '<img src="'+ item.bnrImgPc +'" width="200" height="200" alt="'+ item.title +'">'
                 + '</a>'
                 + '</div>';
           document.querySelector( '#js-rp-banner' ).insertAdjacentHTML( 'beforeend', h );
        } );

        RP_BANNER.setCarouselScroll();
        RP_BANNER.carouselSetting(viewBanner.length > 1);
      } else {
        document.querySelector( '#js-rp-banner' ).insertAdjacentHTML( 'afterbegin', '<p style="line-height: 80px;margin: 0 auto;">表示できるキャンペーンはありません</p>' );
      }
    },
    carouselSetting: function (arg_loop) {
      // custom SP style
      var swiperScrollStyle = '<style type="text/css">'
                            + '.swiper-scrollbar-drag{'
                            + 'width: 100%;'
                            + 'height: 100%;'
                            + 'position: relative;'
                            + 'background-color: rgba(0,0,0,.5);'
                            + 'border-radius: 10px;'
                            + 'left: 0;'
                            + 'right: 0;'
                            + '}'
                            + '.swiper-wrapper{'
                            + 'display: flex;'
                            + 'display: -webkit-flex;'
                            + 'display: -webkit-box;'
                            + 'display: -moz-box;'
                            + 'display: -ms-flexbox;'
                            + '}'
                            + '@media screen and (max-width:769px){.swiper-button-prev,.swiper-button-next{display:none!important}.swiper-wrapper{padding-bottom: 14px;}}'
                            + '</style>';


      document.querySelector( 'body' ).insertAdjacentHTML( 'beforeend', swiperScrollStyle );

      var breakPointsConf = {};
      // SP
      breakPointsConf[MAX_SP_WIDTH] = {
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        scrollbar: '.swiper-scrollbar',
        scrollbarDraggable: false,
        setWrapperSize: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
        autoplay: 0,
        loop: false
      };
      window.swiper_v3 = new Swiper( '.swiper-rp-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        slidesPerView:  'auto',
        spaceBetween: '1.5%',
        loop: true,
        breakpoints: breakPointsConf
      } );
    },
    setCarouselScroll: function () {
      var scroll = '<div class="swiper-scrollbar" '
                 + 'style="opacity: 0;'
                 + 'transition-duration: 400ms;'
                 + 'position: absolute;'
                 + 'width: 92%;'
                 + 'height: 5px;'
                 + 'left: 4%;'
                 + 'right: 4%;'
                 + 'bottom: 3px;'
  10px;'
                 + 'background: rgba(0,0,0,.1);'
                 + '">'
                 + '</div>';
      document.querySelector( '.swiper-rp-container' ).insertAdjacentHTML( 'beforeend', scroll );
    },
    isSP: function() {
      return window.innerWidth <= MAX_SP_WIDTH;
    }
  }
  // 初期動作
  RP_BANNER.initBanner();
}());
