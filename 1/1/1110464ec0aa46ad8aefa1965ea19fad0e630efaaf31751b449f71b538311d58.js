<!-- db tools -->
<!-- new db -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Bongacams Dynamic Banner</title>
  <base href="https://i.bngdin.com/dynamic_banner/" target="_blank">
  <script type="text/javascript" src="https://i.bngdin.com/dynamic_banner/jquery.tools.min.js"></script>
  <script type="text/javascript">
    var baseUrl = 'https://i.bngdin.com/dynamic_banner';
    var homeUrl = "https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https://bongacams.com";
    var mode = 'mode1';
    var width = '250';
    var isFullscreen = '';
    var isAdaptive = '';
    var isSlider = '';
    var isMobile = false;
    var isChat = Boolean();
    var isCustomChat = Boolean(1);
    var isChatLong = Boolean();
    var needSizeCorection = Boolean();
    var bgColor = 'none';
    var isDarkTheme = Boolean('');
    var bannerSize = '250x167';
    var geoEnabled = true;
    var footerCorrection = 34;
    var langHide = false;
    var thumbPhotoSource = 'thumbnail_imagerows = 0;
    var cols = 0;
    var topModelsByRank = Boolean('');
    var isSale = Boolean('');
        var thumbWidth = 184;
    window.videoContainerSelector = '.cam';
    window.canvasParentSelector = '.bcdb_model_group_active';

    
        var randomInited = false;
    var maxInitedThumbs = 6;
        var contentType = 'random'

    "use strict";

function BaseBanner() {
  var self = this;
  this.params = JSON.parse('{"bannerNumber":"","lang":"es","width":"250","height":"167","header":"0","footer":"none","mname":"0","mlink":"0","mode":"mode1","slider":"0","fullscreen":"","msize":"max","text_color":"#000000","chat":"0"}');

  this.onDone = function () {
  };

  this.addUnderThumb = function (params) {
    params = $.extend({}, {height: 48}, params);
    var $anchor = $('.bcdb_model_item .modelimage');
    $('.bcdb_footer').css({'padding-top': '2px', 'margin-top': 0});

    $anchor.each(function (index, el) {
      var $_anchor = $(el);
      var $link = $_anchor.closest('a');
      $('.bcdb_model_group_container').height($('html').height() - $('.bcdb_header').outerHeight() - $('.bcdb_footer').outerHeight());

      if (params.metaOver) {
        var $mName = $link.find('.modelname');
        var $mLink = $link.find('.modellink');
        var $both = $mName.add($mLink);
        if ($both.length) {
          if (window.isChat) {
            $_anchor.append($('<div class="modelimage_blured_wrapper">').append($('<div class="modelimage_blured_container">').append($both)));
            return;
          }
          $_anchor.append($both);
        }
      }
    })
  };

  this.addInnerThumb = function () {
    var $anchor = $('.bcdb_model_item .modelimage');
    var $links = $anchor.closest('a');
    $links.each(function(index, el) {
      var $el = $(el);
      var $mName = $el.find('.modelname');
      var $mLink = $el.find('.modellink');
      var $both = $mName.add($mLink);
      if ($both.length) {
        $el.find('.modelimage').append($('<div class="modelimage_blured_wrapper">').append($('<div class="modelimage_blured_container">').append($both)));
      }
    });
  };

  this.process = function () {
    var size = this.params.width + 'x' + this.params.height;
    var thumbCount = $('.bcdb_model_group_active .bcdb_model_item').length;

    if (window.isChat) {
      switch (size) {
        case '200x300':
          this.addUnderThumb({metaOver: true, height: 50});
          break;
        case '240x480':
          this.addUnderThumb();
          if (thumbCount > 1) {
            $('.bcdb_model_item:nth-child(2)').hide();
            if (this.params.footer !== 'none') {
              $('.bcdb_footer').show();
            }
          }
          break;
        case '300x250':
          this.addInnerThumb();
          break;
        case '300x300':
          this.addInnerThumb();
          break;
        case '350x280':
          this.addUnderThumb({metaOver: true});
          break;
        default:
          break;
      }
    }
  }

  this.onCreate = function () {
    if ($('html[lang]').length) {
      $('body').addClass('lang_' + $('html').attr('lang'));
    }
    this.process();
  };

  $('img.thumb').one('load', function () {
    if (!self.created) {
      var img = this;
      var waitThumbCounter = 0
      var waitThumb = setInterval(function () {
        if (self.created || !$(img).is(':visible')) {
          clearInterval(waitThumb);
          return;
        }
        waitThumbCounter++;
           if (modelimage) {
          var height = modelimage.getBoundingClientRect().height;
          self.thumbWidth = Boolean(parseInt(self.params.chat)) ? height : modelimage.getBoundingClientRect().width;
          self.thumbHeight = height;
        }
        var item = $(img).closest('.bcdb_model_item')[0];
        if (item) {
          self.itemHeight = item.getBoundingClientRect().height;
        }
        if (waitThumbCounter > 10 || self.thumbHeight > 10 || !modelimage) {
          clearInterval(waitThumb);
          self.created = true;
          self.onCreate();
        }
      }, 100);
    }
  })
}

$(function () {
  window.BaseBanner = new BaseBanner();
});
  </script>
</head>
<body class="load lang_es mode1 s250x167">
<script type="text/javascript">
            var modelsData = $.parseJSON('{"geo_models":[{"username":"Meegan","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/Meegan","display_name":"Meegan","display_age":"32","profile_images":{"profile_image":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/027\/1b6\/26c\/xbig_lq\/58e8e2.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/027\/1b6\/26c\/xbig_lq\/58e8e2.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/027\/1b6\/26c\/xbig\/58e8e2.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/Meegan","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/Meegan","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/Meegan","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/Meegan?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/Meegan","stream_feed_url":"https:\/\/ded5281-edge-us50.bcvcdn.com\/hls\/stream_Meegan\/playlist.m3u8","chat_topic":"Hello! PRIVATE & TIP MENU ARE ON   Lets have fun TIP 3 tks  IF U LIKE WHAT U SEE \u266511-22-33-44 my favorite levels|45 tks for PM & FOLLOW U |Tip 100 to support me and get in the top 10 \u2665 Remember to put love & follow me \u2665 ","chat_topic_ru":"Hello! PRIVATE & TIP MENU ARE ON   Lets have fun TIP 3 tks  IF U LIKE WHAT U SEE \u266511-22-33-44 my favorite levels|45 tks for PM & FOLLOW U |Tip 100 to support me and get in the top 10 \u2665 Remember to put love & follow me \u2665 ","flags":["english","spanish"],"online_time":1694,"vs_url_root":"https:\/\/v.bngdin.com\/stream_Meegan","chat_status":"public","marker":"nice","gender":"female","members_count":347,"vibratoy":true,"hd_cam":true,"social_networks":["instagram","twitter","snapchat","tiktok"],"is_new":0},{"username":"milaowens","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/milaowens","display_name":"milaowens","display_age":"22","profile_images":{"profile_image":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/066\/1cf\/2be\/xbig_lq\/6bb461.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/066\/1cf\/2be\/xbig_lq\/6bb461.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/066\/1cf\/2be\/xbig\/6bb461.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/milaowens","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/milaowens","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/milaowens","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/milaowens?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/milaowens","stream_feed_url":"https:\/\/ded4184-edge-us19.bcvcdn.com\/hls\/stream_milaowens\/playlist.m3u8","chat_topic":"come look at me, I want to be yours. \u2665 SPANK  ME VERY  HARD EVERY 100TK! \u2665 SQUIRT SHOW  X 600TK! \u2665 SPANKS ASS + FINGERING PUSSY   @remain ","chat_topic_ru":"come look at me, I want to be yours. \u2665 SPANK  ME VERY  HARD EVERY 100TK! \u2665 SQUIRT SHOW  X 600TK! \u2665 SPANKS ASS + FINGERING PUSSY   @remain ","flags":["spanish","english"],"online_time":7679,"vs_url_root":"https:\/\/v.bngdin.com\/stream_milaowens","chat_status":"public","marker":"nice","gender":"female","members_count":142,"vibratoy":true,"hd_cam":true,"social_networks":["twitter","snapchat"],"is_new":0},{"username":"NatyDesiree","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/NatyDesiree","display_name":"NatyDesiree","display_age":"24","profile_images":{"profile_image":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/0ae\/394\/3d9\/xbig_lq\/d58067.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/0ae\/394\/3d9\/xbig_lq\/d58067.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/0ae\/394\/3d9\/xbig\/d58067.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/NatyDesiree","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/NatyDesiree","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/NatyDesiree","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/NatyDesiree?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/NatyDesiree","stream_feed_url":"https:\/\/ded6479-edge64.bcvcdn.com\/hls\/stream_NatyDesiree\/playlist.m3u8","chat_topic":"Indulge your Naughty Desires with NatyDesiree! Join the Fun Now!","chat_topic_ru":"Indulge your Naughty Desires with NatyDesiree! Join the Fun Now!","flags":["english","romanian"],"online_time":6651,"vs_url_root":"https:\/\/v.bngdin.com\/stream_NatyDesiree","chat_status":"public","marker":"nice","gender":"female","members_count":471,"vibratoy":true,"hd_cam":false,"social_networks":[""],"is_new":0},{"username":"LexiGlowX","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/LexiGlowX","display_name":"LexiGlowX","display_age":"28","profile_images":{"profile_image":"\/\/i.wlicdn.com\/0b1\/1bc\/1f1\/89c90d0e02dea70467901d16a44e3b74_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/0b1\/1bc\/1f1\/89c90d0e02dea70467901d16a44e3b74_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/0b1\/1bc\/1f1\/89c90d0e02dea70467901d16a44e3b74_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/0b1\/1bc\/1f1\/89c90d0e02dea70467901d16a44e3b74_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/0b1\/1bc\/1f1\/xbig_lq\/40e4ff.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/0b1\/1bc\/1f1\/xbig_lq\/40e4ff.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/0b1\/1bc\/1f1\/xbig\/40e4ff.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/LexiGlowX","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/LexiGlowX","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/LexiGlowX","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/LexiGlowX?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/LexiGlowX","stream_feed_url":"https:\/\/ded6895-edge4.bcvcdn.com\/hls\/stream_LexiGlowX\/playlist.m3u8","chat_topic":"","chat_topic_ru":"Hellow , I am new here . My name is Lexi , don&#39;t be shy . Let&#39;s get know each other better @remain till pussy play and naked ","flags":["russian","english"],"online_time":9937,"vs_url_root":"https:\/\/v.bngdin.com\/stream_LexiGlowX","chat_status":"public","marker":"nice","gender":"female","members_count":210,"vibratoy":true,"hd_cam":false,"social_networks":[""],"is_new":0},{"username":"NicoleSarahX","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/NicoleSarahX","display_name":"NicoleSarahX","display_age":"23","profile_images":{"profile_image":"\/\/i.wlicdn.com\/0af\/2b2\/216\/2e1b91ede708c1c21c118ef07ba8034a_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/0af\/2b2\/216\/2e1b91ede708c1c21c118ef07ba8034a_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/0af\/2b2\/216\/2e1b91ede708c1c21c118ef07ba8034a_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/0af\/2b2\/216\/2e1b91ede708c1c21c118ef07ba8034a_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/0af\/2b2\/216\/xbig_lq\/a3ed86.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/0af\/2b2\/216\/xbig_lq\/a3ed86.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/0af\/2b2\/216\/xbig\/a3ed86.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/NicoleSarahX","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/NicoleSarahX","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/NicoleSarahX","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/NicoleSarahX?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/NicoleSarahX","stream_feed_url":"https:\/\/ded6688-edge35.bcvcdn.com\/hls\/stream_NicoleSarahX\/playlist.m3u8","chat_topic":"Let&#39;s explore the wonderful world of love with my favorites patterns 25  39 99 111 1111 ","chat_topic_ru":"Let&#39;s explore the wonderful world of love with my favorites patterns 25  39 99 111 1111 ","flags":["english"],"online_time":338,"vs_url_root":"https:\/\/v.bngdin.com\/stream_NicoleSarahX","chat_status":"public","marker":"nice","gender":"female","members_count":235,"vibratoy":true,"hd_cam":false,"social_networks":[""],"is_new":0},{"username":"AshleysinnX","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/AshleysinnX","display_name":"AshleysinnX","display_age":"25","profile_images":{"profile_image":"\/\/i.wlicdn.com\/0ae\/1f2\/35f\/c364344701c2d3ad5d78adf411dc5033_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/0ae\/1f2\/35f\/c364344701c2d3ad5d78adf411dc5033_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/0ae\/1f2\/35f\/c364344701c2d3ad5d78adf411dc5033_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/0ae\/1f2\/35f\/c364344701c2d3ad5d78adf411dc5033_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/0ae\/1f2\/35f\/xbig_lq\/116ef8.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/0ae\/1f2\/35f\/xbig_lq\/116ef8.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/0ae\/1f2\/35f\/xbig\/116ef8.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/AshleysinnX","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/AshleysinnX","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/AshleysinnX","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/AshleysinnX?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/AshleysinnX","stream_feed_url":"https:\/\/ded6810-edge48.bcvcdn.com\/hls\/stream_AshleysinnX\/playlist.m3u8","chat_topic":"Pin me down, kiss me hard, look me in the eyes and FUCK ME like you&#39;ve never fucked someone before !","chat_topic_ru":"Pin me down, kiss me hard, look me in the eyes and FUCK ME like you&#39;ve never fucked someone before !","flags":["romanian","english"],"online_time":1305,"vs_url_root":"https:\/\/v.bngdin.com\/stream_AshleysinnX","chat_status":"public","marker":"nice","gender":"female","members_count":433,"vibratoy":true,"hd_cam":false,"social_networks":[""],"is_new":0}],"top_models":[{"username":"Girl-Pleasure","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/Girl-Pleasure","display_name":"Tasty-me","display_age":"28","profile_images":{"profile_image":"\/\/i.wlicdn.com\/04a\/18d\/1fc\/f9fd7493a4124bc9bce7c6b8c5f983f6_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/04a\/18d\/1fc\/f9fd7493a4124bc9bce7c6b8c5f983f6_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/04a\/18d\/1fc\/f9fd7493a4124bc9bce7c6b8c5f983f6_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/04a\/18d\/1fc\/f9fd7493a4124bc9bce7c6b8c5f983f6_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/04a\/18d\/1fc\/xbig_lq\/c28e9c.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/04a\/18d\/1fc\/xbig_lq\/c28e9c.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/04a\/18d\/1fc\/xbig\/c28e9c.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/Girl-Pleasure","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/Girl-Pleasure","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/Girl-Pleasure","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/Girl-Pleasure?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/Girl-Pleasure","stream_feed_url":"https:\/\/ded6685-edge34.bcvcdn.com\/hls\/stream_Girl-Pleasure\/playlist.m3u8","chat_topic":"Make me big fountain squirt@remain ","chat_topic_ru":"\u0421\u043a\u0432\u0438\u0440\u0442 @remain","flags":["russian","english"],"online_time":3534,"vs_url_root":"https:\/\/v.bngdin.com\/stream_Girl-Pleasure","chat_status":"public","marker":"nice","gender":"female","members_count":663,"vibratoy":true,"hd_cam":true,"social_networks":["instagram","twitter","snapchat"],"is_new":0},{"username":"greicyass","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/greicyass","display_name":"greicyass","display_age":"23","profile_images":{"profile_image":"\/\/i.wlicdn.com\/043\/00d\/00f\/fb79ff709f6e1e9bb4a8b9f09da6f076_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/043\/00d\/00f\/fb79ff709f6e1e9bb4a8b9f09da6f076_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/043\/00d\/00f\/fb79ff709f6e1e9bb4a8b9f09da6f076_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/043\/00d\/00f\/fb79ff709f6e1e9bb4a8b9f09da6f076_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/043\/00d\/00f\/xbig_lq\/88dc1a.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/043\/00d\/00f\/xbig_lq\/88dc1a.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/043\/00d\/00f\/xbig\/88dc1a.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/greicyass","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/greicyass","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/greicyass","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/greicyass?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/greicyass","stream_feed_url":"https:\/\/ded4362-edge-us18.bcvcdn.com\/hls\/stream_greicyass\/playlist.m3u8","chat_topic":"Squads + Spanks fully naked Spin the wheel to have a surprise Any flash x 40 tks   @total  @sofar  @remain  go love!! ","chat_topic_ru":"\u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0431\u043d\u0430\u0436\u0435\u043d\u043d\u0430\u044f \u041a\u0440\u0443\u0442\u0438\u0442\u0435 \u043a\u043e\u043b\u0435\u0441\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u044e\u0440\u043f\u0440\u0438\u0437 \u041b\u044e\u0431\u0430\u044f \u0432\u0441\u043f\u044b\u0448\u043a\u0430 x 40 \u0442\u043a\u0441  @total  @sofar  @remain  \u0438\u0434\u0438, \u043b\u044e\u0431\u043e\u0432\u044c!!","flags":["russian","english"],"online_time":4352,"vs_url_root":"https:\/\/v.bngdin.com\/stream_greicyass","chat_status":"public","marker":"nice","gender":"female","members_count":97,"vibratoy":true,"hd_cam":true,"social_networks":["twitter","snapchat"],"is_new":0},{"username":"VikkiMikki","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/VikkiMikki","display_name":"Elisiya","display_age":"25","profile_images":{"profile_image":"\/\/i.wlicdn.com\/05a\/136\/32a\/cfb5877e86394047ba258d414a71a478_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/05a\/136\/32a\/cfb5877e86394047ba258d414a71a478_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/05a\/136\/32a\/cfb5877e86394047ba258d414a71a478_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/05a\/136\/32a\/cfb5877e86394047ba258d414a71a478_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/05a\/136\/32a\/xbig_lq\/4acef2.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/05a\/136\/32a\/xbig_lq\/4acef2.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/05a\/136\/32a\/xbig\/4acef2.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/VikkiMikki","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/VikkiMikki","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/VikkiMikki","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/VikkiMikki?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/VikkiMikki","stream_feed_url":"https:\/\/ded6479-edge64.bcvcdn.com\/hls\/stream_VikkiMikki\/playlist.m3u8","chat_topic":"Naked doggy style: \u201c@total \u2013 countdown: @sofar collected, @remain left before the show starts!\u201d","chat_topic_ru":" \u00ab@total \u2013 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043e\u0442\u0441\u0447\u0451\u0442: @sofar \u0441\u043e\u0431\u0440\u0430\u043d\u043e, @remain \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c!\u00bb","flags":["russian","english"],"online_time":7076,"vs_url_root":"https:\/\/v.bngdin.com\/stream_VikkiMikki","chat_status":"public","marker":"nice","gender":"female","members_count":173,"vibratoy":true,"hd_cam":true,"social_networks":["instagram","snapchat"],"is_new":0}],"initial_models":[{"username":"Meegan","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/Meegan","display_name":"Meegan","display_age":"32","profile_images":{"profile_image":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/027\/1b6\/26c\/eb3cf87c846f706cdf7f6c2399a9af7b_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/027\/1b6\/26c\/xbig_lq\/58e8e2.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/027\/1b6\/26c\/xbig_lq\/58e8e2.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/027\/1b6\/26c\/xbig\/58e8e2.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/Meegan","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/Meegan","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/Meegan","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/Meegan?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/Meegan","stream_feed_url":"https:\/\/ded5281-edge-us50.bcvcdn.com\/hls\/stream_Meegan\/playlist.m3u8","chat_topic":"Hello! PRIVATE & TIP MENU ARE ON   Lets have fun TIP 3 tks  IF U LIKE WHAT U SEE \u266511-22-33-44 my favorite levels|45 tks for PM & FOLLOW U |Tip 100 to support me and get in the top 10 \u2665 Remember to put love & follow me \u2665 ","chat_topic_ru":"Hello! PRIVATE & TIP MENU ARE ON   Lets have fun TIP 3 tks  IF U LIKE WHAT U SEE \u266511-22-33-44 my favorite levels|45 tks for PM & FOLLOW U |Tip 100 to support me and get in the top 10 \u2665 Remember to put love & follow me \u2665 ","flags":["english","spanish"],"online_time":1694,"vs_url_root":"https:\/\/v.bngdin.com\/stream_Meegan","chat_status":"public","marker":"nice","gender":"female","members_count":347,"vibratoy":true,"hd_cam":true,"social_networks":["instagram","twitter","snapchat","tiktok"],"is_new":0},{"username":"milaowens","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/milaowens","display_name":"milaowens","display_age":"22","profile_images":{"profile_image":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/066\/1cf\/2be\/f70c4baa08ce877d726617a81ec22766_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/066\/1cf\/2be\/xbig_lq\/6bb461.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/066\/1cf\/2be\/xbig_lq\/6bb461.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/066\/1cf\/2be\/xbig\/6bb461.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/milaowens","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/milaowens","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/milaowens","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/milaowens?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/milaowens","stream_feed_url":"https:\/\/ded4184-edge-us19.bcvcdn.com\/hls\/stream_milaowens\/playlist.m3u8","chat_topic":"come look at me, I want to be yours. \u2665 SPANK  ME VERY  HARD EVERY 100TK! \u2665 SQUIRT SHOW  X 600TK! \u2665 SPANKS ASS + FINGERING PUSSY   @remain ","chat_topic_ru":"come look at me, I want to be yours. \u2665 SPANK  ME VERY  HARD EVERY 100TK! \u2665 SQUIRT SHOW  X 600TK! \u2665 SPANKS ASS + FINGERING PUSSY   @remain ","flags":["spanish","english"],"online_time":7679,"vs_url_root":"https:\/\/v.bngdin.com\/stream_milaowens","chat_status":"public","marker":"nice","gender":"female","members_count":142,"vibratoy":true,"hd_cam":true,"social_networks":["twitter","snapchat"],"is_new":0},{"username":"NatyDesiree","profile_page_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/profile\/NatyDesiree","display_name":"NatyDesiree","display_age":"24","profile_images":{"profile_image":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_profile.jpg","thumbnail_image_small":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_thumb.jpg","thumbnail_image_medium":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_thumb_medium.jpg","thumbnail_image_big":"\/\/i.wlicdn.com\/0ae\/394\/3d9\/c4a3883965503d1414cdb3042d7f261d_thumb_big.jpg","thumbnail_image_small_live":"\/\/i.wlicdn.com\/live\/0ae\/394\/3d9\/xbig_lq\/d58067.jpg","thumbnail_image_medium_live":"\/\/i.wlicdn.com\/live\/0ae\/394\/3d9\/xbig_lq\/d58067.jpg","thumbnail_image_big_live":"\/\/i.wlicdn.com\/live\/0ae\/394\/3d9\/xbig\/d58067.jpg"},"chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat-popup\/NatyDesiree","random_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/chat?livetab=female","popular_chat_url":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/popular-chat?livetab=female","chat_url_on_home_page":"https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https:\/\/bongacams.com\/NatyDesiree","direct_chat_url":"https:\/\/bongacams.com\/chat-popup\/NatyDesiree","chat_url_on_home_page_for_popunder":"https:\/\/bongacams.com\/NatyDesiree?https://bongacams.com/track?c=783763&ps=dynamic_banner","chat_url_on_home_page_for_bc_popup":"https:\/\/bongacams.com\/NatyDesiree","stream_feed_url":"https:\/\/ded6479-edge64.bcvcdn.com\/hls\/stream_NatyDesiree\/playlist.m3u8","chat_topic":"Indulge your Naughty Desires with NatyDesiree! Join the Fun Now!","chat_topic_ru":"Indulge your Naughty Desires with NatyDesiree! Join the Fun Now!","flags":["english","romanian"],"online_time":6651,"vs_url_root":"https:\/\/v.bngdin.com\/stream_NatyDesiree","chat_status":"public","marker":"nice","gender":"female","members_count":471,"vibratoy":true,"hd_cam":false,"social_networks":[""],"is_new":0}]}');
    
    function shuffle(arr) {
              for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
          }

    function topmodels (models) {
              var levels = {
  amazing: 5,
  nice: 4,
  average: 3,
  bad: 2,
  ugly: 1
};

var getLevel = function(performer) {
  return performer.marker && levels.hasOwnProperty(performer.marker) ? levels[performer.marker] : 0;
};

models.sort(function(a, b) {
  var levelA = getLevel(a);
  var levelB = getLevel(b);
  if (levelA > levelB) {
    return -1;
  }
  else if (levelB > levelA) {
    return 1;
  }
  return 0;
});
            return models;
    }

    function setHref ($element, url) {
            $element.attr('href', url);
          }

    function live ($el, model) {
          }

    var autoupdateTimer;
var loadTimer;

function autoupdate () {
  startTimer();
}

function arrayUnique(array) {
  var usernames = [];
  var result = [];
  for (var i = 0; i < array.length; i++){
    if (!(usernames.indexOf(array[i].username) + 1)) {
      usernames.push(array[i].username);
      result.push(array[i]);
    }
  }
  usernames = null;
  return result;
}

function startTimer() {
  var initial_models = modelsData['initial_models'];
  var geo_models = modelsData['geo_models'];
  var top_models = modelsData['top_models'];

  loadTimer = null;

  autoupdateTimer = setTimeout(function(){
    shuffle(initial_models);
    shuffle(geo_models);
    shuffle(top_models);

    geo_models = topmodels(geo_models);
    top_models = topmodels(top_models);

    var models = geoEnabled ? arrayUnique(geo_models.concat(top_models).concat(initial_models)) : arrayUnique(top_models.concat(geo_models).concat(initial_models));
    if (topModelsByRank) {
      models = shuffle(models);
    }
    var $modelsItem = $('.bcdb_model_item');
    if (models.length > $modelsItem.length) {
      models = models.slice(0, $modelsItem.length);
    }
    var modelsLength = models.length;

    embedThumbsCounter = 0;

    $modelsItem.each(function(i){
      var $this = $(this);
      var index = $this.data('index') + 1 ? $this.data('index') : i;
      live($this, models[index % modelsLength]);
    });

    if (!window.onlyImagePlayer) {
      loadTimer = setTimeout(function () {
        updateProccess(models);
        startTimer();
      }, 2*1000);
    } else {
      updateProccess(models);
      startTimer();
    }
  }, 5*1000);
}

function updateProccess (models) {
  var modelsLength = models.length;
  $('.bcdb_model_item').each(function(i){
    var $this = $(this);
    var index = $this.data('index') + 1 ? $this.data('index') : i;
    var model = models[index % modelsLength];
    if (!model) {
      return;
    }

    var $cam = $this.find('.cam');
    var $lang = $this.find('.modellang');
    var $thumbImg = $this.find('.modelimage');

    $lang.html('');
    var imgLangObj = {
      imgPath: (isChat || (isFullscreen && ['mode5', 'mode6'].indexOf(mode) > -1)) ? 'lang_svg' : 'lang',
      format: (isChat || (isFullscreen && ['mode5', 'mode6'].indexOf(mode) > -1)) ? 'svg' : 'png',
    };
    model.flags.forEach(function(flag){
      $lang.append('<img src="' + baseUrl + '/images/'+ imgLangObj.imgPath +'/'+flag+'.' + imgLangObj.format +'" />');
    });

    if ($cam.length) {
      $cam.toggleClass('__new', !!model.is_new);
    }

    var $langImg = $lang.find('img');
    if ($cam.length && $cam.width() < 90) {
      $langImg.hide();
    } else {
      if (((mode === 'mode3') && (['160'].indexOf(width) > -1)) ||
        ((['mode4', 'mode2'].indexOf(mode) > -1) && (['728', '700'].indexOf(width) > -1)) &&
        models[i].display_name.length > 8
      ) {
        if (models[i].display_name.length > 11) {
          $langImg.hide();
        } else {
          $langImg.filter(':nth-child(2)').hide();
        }
      } else {
        $langImg.show();
      }
    }

    if (isChat && $thumbImg.length) {
      if ($thumbImg.height() <= 70) {
        $langImg.hide();
      } else {
        $langImg.show();
      }
    }

    setHref($this.find('a'), model.chat_url_on_home_page);

    $this.find('img.thumb_active').attr({
      'data-url': isSlider ? '' : model.profile_images.thumbnail_image_medium,
      'data-video-src': model.video_feed_url_root || model.vs_url_root,
      'src': model.profile_images[thumbPhotoSource],
    });
    $this.find('img.thumb').not('.thumb_active').attr({
      'src':  model.profile_images[thumbPhotoSource],
      'data-video-src': model.video_feed_url_root || model.vs_url_root,
    });
    $this.find('.js-mdl_inner').html( model.display_name);

    $cam.attr('data-src', model.video_feed_url_root || model.vs_url_root);
    $cam.attr('data-image-player-src', model.vs_url_root);
    var promoVideo = $cam.data('video');
    if ($cam.css('display') !== 'none' && promoVideo) {
      promoVideo.showEmbed();
      promoVideo.play(model.video_feed_url_root || model.vs_url_root);
    }
  });
  $(document).trigger('baseBanner:updateModels');
}
  
  function replayLive () {
      }

  
  function initContent ($el, isClone) {
    var $parent = $el.parent();
    if ((isChat || (isFullscreen && ['mode5', 'mode6'].indexOf(mode) > -1)) && $parent.is('.thumb_wrapper')) {
        $parent = $parent.parent();
    }
    var result;
          function initLive ($el, $parent, isClone, callback) {
  var camDiv = $parent.find('.cam');
  var src = camDiv.attr('data-src');
  var videoSrc = src || $el.attr('data-video-src');
  var imagePLayerSrc = camDiv.attr('data-image-player-src') || $el.attr('data-image-player-src');
  var isVisible = camDiv.css('display') !== 'none';

  if (!(isFullscreen && ['mode5', 'mode6'].indexOf(mode) > -1)) {
    if (isChat) {
      if (isCustomChat && !isAdaptive) {
        var itemSize = ($parent.closest('.bcdb_model_item').width() * 3 / 4) - 10 ;
        $parent.width(itemSize).height(itemSize);
      }
    } else if ($el.data('width')) {
      var thumbWidth = $el.data('width');
      camDiv.width(thumbWidth).height(Math.round(thumbWidth * 3 / 4));
    } else if (isSlider) {
      camDiv.width($el.parents('.bcdb_model_item').height() * 4 / 3);
    } else {
      camDiv.width($el.width()).height(Math.round($el.width() * 3 / 4));
    }
  }

  camDiv.attr('data-loadsrc', videoSrc);
  camDiv.attr('data-load-image-player-src', imagePLayerSrc);
  if (!window.onlyImagePlayer) {
    camDiv.videoEmbed(videoSrc, {
      poster: camDiv.siblings('img.thumb_active').attr('data-url'),
      autoLoad: isVisible,
      atOnce: true,
      isClone: isClone,
      isOutsource: !src,
      probability: isMobile ? 30 : 0,
      onSuccess: function () {
        var promoVideo = camDiv.data('video');
        if (promoVideo) {
          promoVideo.play();
          camDiv.attr('data-src', camDiv.attr('data-loadsrc'));
          camDiv.attr('data-image-player-src', camDiv.attr('data-load-image-player-src'));
        }
        if (typeof callback === 'function') {
          callback();
        }
      },
      onError: function () {
        window.onlyImagePlayer = true;
        if (isVisible && !camDiv.imagePlayer(imagePLayerSrc)) {
          camDiv.html('');
          showThumb($parent.find('img.thumb_hidden'));
        }
        camDiv.attr('data-src', camDiv.attr('data-loadsrc'));
        camDiv.attr('data-image-player-src', camDiv.attr('data-load-image-player-src'));
        if (typeof callback === 'function') {
          callback();
        }
      }
    });
  } else {
    if (isVisible && !camDiv.imagePlayer(imagePLayerSrc)) {
      camDiv.html('');
      showThumb($parent.find('img.thumb_hidden'));
    }
    camDiv.attr('data-src', camDiv.attr('data-loadsrc'));
    camDiv.attr('data-image-player-src', camDiv.attr('data-load-image-player-src'));
    if (typeof callback === 'function') {
      callback();
    }
  }
}

var lastInteractedItem = null;
function liveOnDemandOn($item) {
  liveOnDemandOff();
  var $modelimage = $item.find('.modelimage');
  lastInteractedItem = $item;
  var $cam = $modelimage.find('.cam');
  if (!$cam.length) {
    var html = '<div class="cam">' +
      '<video autoplay muted loop playsinline webkitPlaysinline preload="auto"></video>' +
      '<video autoplay muted loop playsinline webkitPlaysinline preload="auto"></video>' +
      '</div>';
    $modelimage.append(html);
  } else {
    $cam.show();
    $cam.css({opacity: 0});
  }
  initLive($modelimage.find('.thumb_active'), $modelimage, undefined, function() {
    $modelimage.find('.cam').css({opacity: 1});
  });
  // trigger dom tree refresh -- otherwise video overlap overlay (chrome)
  var $group = $('.bcdb_model_group');
  $group.width($group.width() + 1);
  $group.width($group.width() - 1);
}

function liveOnDemandOff() {
  if (lastInteractedItem) {
    lastInteractedItem.find('.cam').hide();
    lastInteractedItem = null;
  }
}

      if (!randomInited) {
        randomInited = true;

        var thumbs = $('.thumb_active:visible');
        if (thumbs.length) {
          var inited = [1];
          for (var i = 0; i < maxInitedThumbs; i++) {
            var index = null;
            var tries = 0;
            while(tries < thumbs.length && (index === null || inited.indexOf(index) !== -1)) {
              index = Math.floor(Math.random() * thumbs.length);
              tries++;
            }

            inited.push(index);
            var $thumbsParent = thumbs.eq(index).parent();
            if ((isChat || (isFullscreen && ['mode5', 'mode6'].indexOf(mode) > -1)) && $thumbsParent.is('.thumb_wrapper')) {
                $thumbsParent = $thumbsParent.parent();
            }
            $thumbsParent.addClass('random_inited');
          }
        }
      }

    if ($parent.hasClass('random_inited')) {
      initLive($el, $parent, isClone);
    } else {
      showThumb($parent.find('img.thumb_hidden'));
    }
    
        return result;
  }

  function groupEffect () {
    var enable = false;
    var $bcdb = $('.bcdb');
    var $group = $('.bcdb_model_group');
    var activeClass = 'bcdb_model_group_active';
    var animateParams = {};
    var cssAfter = {};

    if ($group.length <= 1) {
      return;
    }

    
    if (!enable) {
      return;
    }
    setInterval(function(){
      $group.animate(animateParams, getEffectSpeed(), function() {
        var $this = $(this);
        if ($this.hasClass(activeClass)) {
          $this.css(cssAfter).removeClass(activeClass)
        } else {
          $this.addClass(activeClass);
        }
        $(document).trigger('sale2x:update');
      });
    }, 5*1000);
  }

  function onBodyClick (e) {
    if (!$(e.target).parents('a').length) {
            window.open($(".bcdb_model_item a:first").attr("href"));
            return false;
    }
  }

  function photoEffect () {
      }

  function getEffectSpeed() {
    return 800;
  }

  function showThumb($thumb) {
    try {
      $thumb.attr('src', $thumb.attr('data-url')).removeClass('thumb_hidden');
      $thumb.closest('.modelimage').find('.cam')[0].style.opacity = 0;
    } catch(e) {
    }
  }

  function hideThumb($thumb) {
    $thumb.addClass('thumb_hidden');
    $thumb.closest('.modelimage').find('.cam')[0].style.opacity = 1;
  }

  (function($) {
  function ImagePlayer($self, url) {
    var $this = this;
    $this.url = url;
    var $oldPlayer = $self.data('ImagePlayer');
    var f = 1;
    var display = $self.find('canvas');
    if (display.length) {
      display = display[0];
    } else {
      display = document.createElement('canvas');
      $self.html(display);
    }

    var loadFrame = function(){
      if (!$this.url) {
        return;
      }
      var img = new Image();
      img.onload = imageOnLoad;
      img.onerror = imageOnError;
      img.timestamp = new Date().getTime();
      img.url = $this.url;
      img.src = $this.url + '/' + f + '.jpg';

      function imageOnLoad() {
        if (!$this || !$this.url) {
          return;
        }

        if ($oldPlayer) {
          $oldPlayer.destroy();
          $oldPlayer = null;
        }

        var loadTime = new Date().getTime() - this.timestamp;
        drawFrame(this);
        clearTimeout($this.timeout);

        $this.timeout = setTimeout(function(){
          loadFrame();
        }, 200-loadTime);
      }

      function imageOnError() {
        if (f === 1) {
          f++;
        } else {
          f = 1;
        }
        var loadTime = new Date().getTime() - this.timestamp;
        clearTimeout($this.timeout);
        $this.timeout = setTimeout(function(){
          loadFrame();
        }, 400-loadTime);
      }
    };

    var drawFrame =  function(image){
      f++;
      var displayContext = display.getContext("2d");
      display.width = $self.width();
      display.height = $self.width() * 3 / 4 * 1.1;
      if (displayContext != null) {
        try {
          displayContext.drawImage(image, 0, 0, image.width, image.height, 0, 0, $self.width(), $self.height());
        } catch (e) {

        }
      }
    };

    var clearDisplay =  function(image){
      var displayContext = display.getContext("2d");
      if (displayContext != null) {
        try {
          f = 1;
          displayContext.clearRect(0, 0, display.width, display.height);
        } catch (e) {

        }
      }
    };

    loadFrame();

    return {
      setUrl:function(u){
        $this.url = u;
        clearDisplay();
      },
      destroy:function(){
        if (!$this) {
          return;
        }
        $this.url = null;
        clearTimeout($this.timeout);
        $this = null;
      }
    }
  }

  // Make jQuery Plugin
  $.fn.imagePlayer = function(url) {
    this.each(function() {
      $(this).data("ImagePlayer", new ImagePlayer($(this), url));
    });

    return this;
  };
})(jQuery);
  var embedThumbsCounter = 0;

(function($){
  var ua = navigator.userAgent.toLowerCase();
  var isWinPhone = /windows phone/.test(ua);
  var isIeMobile = /iemobile/.test(ua);
  var isIOS = /ipad|iphone|ipod/.test(ua) && !window.MSStream;
  var isIOSPuffin = isIOS && /puffin/.test(ua);
  var isOldIOS = isIOS && /os (5|6|7|8|9)_/.test(ua);
  var isUC = /ucbrowser/.test(ua) && !window.MSStream;

  window.videoContainerSelector = window.videoContainerSelector || '.cam';
  window.canvasParentSelector = window.canvasParentSelector || '.bcdb_model_group_active';

  var visibleThumbs;

  var inited = false;

  function init () {
    inited = true;
    visibleThumbs = $(window.videoContainerSelector).filter(':visible').length;

    $(window).bind('resize', function () {
      visibleThumbs = $(window.videoContainerSelector).filter(':visible').length;
      embedThumbsCounter = 0;
    });
  }

  var PromoVideo = function ($video1, $video2) {
    this.$activeVideo = $video1;
    this.$loadVideo = $video2;
    this.init();
  };

  PromoVideo.prototype.init = function () {
    this.$activeVideo.addClass('loaded');
    this.$loadVideo.removeClass('loaded');
    this.removeLoad(this.$activeVideo);
    this.removeLoad(this.$loadVideo);

    this.setLoad(this.$loadVideo);
    if (isUC || isOldIOS || isIOSPuffin) {
      this.error = true;
      return;
    }
    if (isIeMobile) {
      this.$activeVideo.remove();
      this.removeLoad(this.$loadVideo);
    }
  };

  PromoVideo.prototype.play = function (activeSrc) {
    var $plugin = this;
    activeSrc = this.trimSrc(activeSrc);
    if (activeSrc) {
      var currentSrc = this.trimSrc(this.$activeVideo.find('source').attr('src'));
      if (currentSrc !== activeSrc) {
        this.src = activeSrc;
      }
    }
    if (!this.src) {
      try {
        var video = this.$activeVideo[0];
        var promise = this.$activeVideo.data('promise') || video.play();
        promise.then(function () {
          $plugin.$activeVideo.data('promise', video.play());
        }).catch(function (){
        });
      } catch (e) {
        this.$activeVideo[0].play();
      }
      return;
    }
    this.embed(this.src, {
      autoLoad: true,
      atOnce: true,
      onSuccess: function () {
        $plugin.play();
      }
    })
  };

  PromoVideo.prototype.showEmbed = function () {
    var self = this;
    if (!isIeMobile) {

      if (!this.$loadVideo.find('source').length) {
        return;
      }

      this.$activeVideo.data('canvasVideo') && this.$activeVideo.data('canvasVideo').destroy();
      try {
        var video = this.$activeVideo[0];
        var promise = this.$activeVideo.data('promise') || video.play();
        promise.then(function () {
          self.$activeVideo.data('promise', video.pause());
        }).catch(function (e){
          if (typeof e !== 'string') {
            e = e.message || e.toString();
          }
          if (e.indexOf('play() request was interrupted') !== -1 || e.indexOf('was aborted') !== -1) {
            return;
          }
          self.$activeVideo[0].pause();
        });
      } catch (e) {
        this.$activeVideo[0].pause();
      }
      var tmp = this.$activeVideo;
      this.$activeVideo = this.$loadVideo;
      this.removeLoad(this.$activeVideo);
      this.$activeVideo.addClass('loaded');
      this.$loadVideo = tmp;
      this.setLoad(this.$loadVideo);
      this.$loadVideo.removeClass('loaded');
      this.$loadVideo.html('');
      if (this.$loadVideo[0]) {
        try {
          var video = this.$loadVideo[0];
          var promise = this.$loadVideo.data('promise') || video.play();
          promise.then(function () {
            self.$loadVideo.data('promise', video.pause());
          }).catch(function (e){
            self.$loadVideo[0].pause();
          });
        } catch (e) {
          this.$loadVideo[0].pause();
        }
      }
    }
  };

  PromoVideo.prototype.setLoad = function ($el) {
    $el.css({
      'position': 'absolute',
      'visibility': 'hidden',
      'z-index': '-1'
    });
  };

  PromoVideo.prototype.removeLoad = function ($el) {
    $el.css({
      'position': '',
      'visibility': '',
      'z-index': ''
    });
  };

  PromoVideo.prototype.afterLoad = function (options) {
    if (options.atOnce) {
      this.showEmbed();
    }
    if (options.onSuccess && "function" === typeof options.onSuccess) {
      options.onSuccess();
    }
  };

  PromoVideo.prototype.trimSrc = function (src) {
    if (!src) {
      return null;
    }
    return src.replace(/(.mp4|.webm|.flv)$/g, "");
  };

  PromoVideo.prototype.embed = function (src, options) {
    options = options || {};
    if (options.poster) {
      if (options.atOnce) {
        this.$activeVideo.attr("poster", options.poster);
        this.$activeVideo.css("background", "url(" + options.poster + ") center center / cover no-repeat");
      }
      this.$loadVideo.attr("poster", options.poster);
      this.$loadVideo.css("background", "url(" + options.poster + ") center center / cover no-repeat");
    }

    // if (isMobile) {
    //   var maxEmbedThumbs = Math.ceil(visibleThumbs * this.probability / 100);
    //   if (visibleThumbs > 10 && (embedThumbsCounter >= maxEmbedThumbs || embedThumbsCounter < maxEmbedThumbs && Math.floor(Math.random() * 2))) {
    //     return;
    //   }
    //   embedThumbsCounter++;
    // }

    var $plugin = this;
    src = this.trimSrc(src);
    var loadVideoSrc = src + ".mp4";

    if (window.videoCacheKey) {
      loadVideoSrc += "?t=" + window.videoCacheKey;
    }

    this.src = null;
    this.$loadVideo.html('');
    this.$loadVideo.append($("<source>", {
      type: "video/mp4",
      src: loadVideoSrc,
    }));

    this.$loadVideo.data('promise', this.$loadVideo[0].load());
    this.$loadVideo.unbind("canplay, canplaythrough");
    this.$loadVideo.bind("canplay, canplaythrough", function () {
      try {
        var promise = $plugin.$loadVideo[0].play();
        $plugin.$loadVideo.data('promise', promise);
        if (isMobile) {
          promise.catch(function (e) {
            if (typeof e !== 'string') {
              e = e.message || e.toString();
            }
            if (e.indexOf('play() request was interrupted') !== -1 || e.indexOf('was aborted') !== -1) {
              return;
            }
            $plugin.$loadVideo[0].pause();
            if (options.onError && "function" === typeof options.onError) {
              options.onError();
            }
          });
        }
      } catch(e) {
        if (isIeMobile || !isWinPhone) {
          $plugin.$loadVideo[0].pause();
          if (options.onError && "function" === typeof options.onError) {
            options.onError();
          }
          return;
        }
      }

      $plugin.afterLoad.call($plugin, options);
    });
  };

  $.fn.extend({
    videoEmbed: function (src, options) {
      var $el = $(this);

      var $videos = $el.find('video');
      if ($videos.length < 2) {
        if (options.onError && "function" === typeof options.onError) {
          options.onError();
        }
        return;
      }

      if (!inited) {
        init();
      }

      var $activeVideo = $videos.first();
      var $loadVideo = $videos.last();

      if ($activeVideo.css('visibility') === 'hidden' || $loadVideo.is('.loaded')) {

        $videos.css({
          'position': '',
          'visibility': '',
          'z-index': ''
        });
        $activeVideo = $loadVideo;
        $loadVideo = $videos.first();
      }

      var promoVideo = new PromoVideo($activeVideo, $loadVideo);
      if (promoVideo.error) {
        if (options.onError && "function" === typeof options.onError) {
          options.onError();
        }
        return;
      }
      if (options.probability) {
        promoVideo.probability = options.probability;
      }
      if (src) {
        if (options.autoLoad) {
          promoVideo.embed(src, options);
        } else {
          promoVideo.src = src;
        }
      }
      $el.data('video', promoVideo);
    }
  });
})(jQuery);
  var load = function(){
  var $body = $('body');
  if (!$body.is(':visible')) {
    loadTimeout();
    return;
  }
  var $activeThumb = $("img.thumb_active");
  var firstLoaded = false;
  if (!(isAdaptive || isSlider)) {
    $activeThumb.data('width', $activeThumb.width());
  } else {
    $(window).bind('resize.adb', onAdaptiveResize);
  }
  $body.removeClass('load');

  if (isSlider) {
    const $items = $('.bcdb_model_item');
    var itemHeight = $items.parent().height();
    var itemWidth = itemHeight * 4 / 3;
    $('.modelimage').width(itemWidth).height(itemHeight);
    $items.parent().width((itemWidth + parseInt($items.css('margin-left'), 10) + parseInt($items.css('margin-right'), 10)) * $items.length);
    $('.bcdb_header strong').magicText({
      padding: '2px',
      minLineHeight: 0.9,
      verticalAlign: 'center',
      minFontSize: 8
    });
    adjustMoreButton();

    if (homeUrl) {
      $('.more_button, .bcdb_header').bind('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        window.open(homeUrl);
      });
    }

    if (contentType === 'photo' || contentType === 'hover') {
      $items.bind(isMobile ? 'touchstart' : 'mouseenter', function (e) {
        liveOnDemandOn($(this));
      });
      $items.bind('mouseleave', function () {
        liveOnDemandOff();
      });
    }
  }

  $activeThumb.one('load', function(){
    var $this = $(this);
    var thumbWidth = $this.data('width') || this.width;
    var $parent = $this.parent();

    if (isChat) {
      $parent.find('.thumb').wrap('<div class="thumb_wrapper"/>');
      var $container = $parent.closest('.bcdb_container');
      var isHeaderUnvisible = !$('.bcdb .bcdb_header').is(':visible');
      var isNameUnvisible = !$('.bcdb .modelname').is(':visible');
      var isLinkUnvisible = !$('.bcdb .modellink').is(':visible');
      var $item = $this.closest('.bcdb_model_item');
      if (isCustomChat
        || (needSizeCorection && (isHeaderUnvisible || isNameUnvisible || isLinkUnvisible))
        || (!isSale && bannerSize === '720x200' && isHeaderUnvisible && isNameUnvisible && isLinkUnvisible)
      ) {
        $container.addClass('custom');
        if (isAdaptive) {
          $container.addClass('responsive');
        }
        var itemSize = $item.width() * 3 / 4;
        if (!isAdaptive && $container.width() > 100) {
          $item.css('margin-top', isCustomChat ? '10px' : '4px');
        }
        var isFooterVisible = $('.bcdb .bcdb_footer').is(':visible');
        var $banner = $('.bcdb');
        var bannerHeight = $banner.height();
        var containerHeight;
        var $header = $('.bcdb .bcdb_header');
        var headerHeight = isAdaptive ? $header.outerHeight() : $header.height();
        var footerHeight = isFooterVisible ? $('.bcdb .bcdb_footer').height() : 0;
        if (isFooterVisible) {
          var multiplier;
          if (isHeaderUnvisible && isNameUnvisible && isLinkUnvisible) {
            multiplier = 0.87;
          } else {
            multiplier = ((Boolean(headerHeight) && (headerHeight / bannerHeight < 0.08)) ? 0.87 : 0.75);
          }
          containerHeight = (bannerHeight - headerHeight - footerHeight) * multiplier;
        } else if (isHeaderUnvisible && isNameUnvisible && isLinkUnvisible) {
          containerHeight = bannerHeight;
        } else if (isAdaptive) {
          containerHeight = bannerHeight - headerHeight - footerHeight;
        }
        $container.css('height', '100%');
        var $modelGroupContainer = $container.find('.bcdb_model_group_container');
        if (containerHeight) {
          $modelGroupContainer.css('min-height', Math.floor(containerHeight) + 'px');
        }
        if (bannerHeight < 185) {
          $container.addClass('custom_mini');
        }
        var groupContainerHeight = $modelGroupContainer.height();
        if (isAdaptive) {
          if (!firstLoaded) {
            var $rows = $container.find('.bcdb_model_group_active .bcdb_row');
            var rowsCount = $rows.length || 1;
            $container.find('.bcdb_row').css('height', Math.floor(containerHeight / rowsCount));
          }
          var linkHeight = $item.find('.modellink').height();
          var nameHeight = $item.find('.modelname').height();
          var rowHeight = $this.closest('.bcdb_row').height();
          var maxImageHeight = rowHeight - nameHeight - linkHeight;
          itemSize = Math.min(itemSize, maxImageHeight * 3 / 4);
        }
        if (itemSize > groupContainerHeight) {
          itemSize = groupContainerHeight * 3 / 4;
        }
        itemSize = Math.floor(itemSize) - 1;
        if (isCustomChat && !isAdaptive) {
          itemSize -= 10;
        }
        $parent.height(itemSize).width(itemSize);
        thumbWidth = isAdaptive ? itemSize : $this.data('width') || this.width;
        if (itemSize >= 70) {
          $parent.find('.modellang img').show();
        }
      }
      if (isDarkTheme) {
        $container.addClass('dark');
      }
      $item.css('opacity', 1);
    } else if (isFullscreen && ['mode5', 'mode6'].indexOf(mode) > -1) {
      $parent.find('.thumb').wrap('<div class="thumb_wrapper"/>');
    } else if (!isSlider) {
      $parent.css({
        width: thumbWidth,
        height: Math.round(thumbWidth * 3 / 4)
      });
    }

    if (!firstLoaded) {
      firstLoaded = true;
      autoupdate();
      embedThumbsCounter = 0;

      if (mode === 'mode1') {
        createStyle(thumbWidth);
      }
    }

    initContent($this);
  });

  $('.bcdb_header img').one('load', function() {
    adaptiveResize();
  });

  $activeThumb.each(function(){
    if (this.complete) {
      var $this = $(this);
      setTimeout(function(){
        $this.load();
      }, 100);
    }
  });

  groupEffect();

  $body.click(onBodyClick);
  $('a').bind('touchend', $.noop); // fix IOS 300ms delay

  adaptiveResize();
};

function loadTimeout() {
  setTimeout(function () {
    load();
  }, 500);
};

if (!getUrlParam('bodyonload')) {
  $(function(){load()});
} else {
  $(window).one('load', function(e){load()});
}

function isUSBrowser() {
  return navigator.userAgent.toLowerCase().indexOf('ucbrowser') !== -1;
}

function createStyle(thumbWidth) {
  var $style = $('<style/>');
  var styleHtml = '';
  if (isChat) {
    if ($('.bcdb').width() <= 100) {
      styleHtml += '.modelstatus {display:none !important;}';
      styleHtml += '.bcdb .custom .bcdb_model_item {overflow: hidden; margin-top: 2px; max-height: 100%;}';
      styleHtml += '.bcdb .custom .bcdb_model_item span.modellink, .bcdb .custom .bcdb_model_item span.modelname {font-size: 50%; margin-top: 2px;}';
      styleHtml += '.bcdb .custom .modelimage .cam, .bcdb .custom .modelimage .thumb_wrapper, .custom .modelimage .sale2x.three-lines, .custom .modelimage .sale2x.three-lines {margin: 3px; width: calc(100% - 6px); height: calc(100% - 6px);}';
    }
    if (isAdaptive) {
      styleHtml += '.bcdb .custom .bcdb_model_item {max-height: 100%;}';
      styleHtml += '.bcdb {height: 100%;}';
    }
    if (!isUSBrowser()) {
      styleHtml += '.modelimage_blured_container {backdrop-filter: blur(5px);}';
    }
  } else if (thumbWidth <= 100) {
    langHide = true;
    if (!isSlider) {
      styleHtml += '.modellang {display:none !important;}';
    }
    styleHtml += '.bcdb_model_item {font-size:80%;}';
    styleHtml += '.modelname {white-space:nowrap;font-size:100%;width:' + thumbWidth + 'px}';
    styleHtml += '.modelstatus {display:none !important;}';
  } else if (thumbWidth <= 120) {
    styleHtml += '.bcdb_model_item {font-size:90%;}';
    styleHtml += '.modelname {white-space:nowrap;font-size:100%}';
  }
  styleHtml += '.modellink {padding-bottom:1px;}';

  if (isSlider) {
  }
  $style.html(styleHtml);
  $('head').append($style);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getUrlParam(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (null != results && results[1]) {
    return decodeURIComponent(results[1]);
  }
  return null;
}

var resizeTimeout;

function onAdaptiveResize () {
  clearTimeout(resizeTimeout);
  $('.bcdb_header strong').css('visibility', 'hidden');
  resizeTimeout = setTimeout(function () {
    adaptiveResize();
  }, 500);
}

function adaptiveResize () {
  setContainerHeight();

  var $header = $('.bcdb_header');
  var headerHeight = $header.is(':visible') ? $header.height() : 0;
  var $logo = $header.find('img');
  var $text = $header.find('strong');
  var $container = $('.bcdb_model_group_container');
  var containerHeight = isChat ? $container.height() : $container.data('height') || $container.height();
  var $footer = $(".bcdb_footer");
  var footerHeight = $footer.height();
  var footerVisible = $footer.is(':visible');
  var bcdbHeight = $(".bcdb").height();

  if (!isSlider && (!$logo.is(':visible') || $logo.width() + $text.width() >  $header.width() - 10)) {
    $text.css('visibility', 'hidden');
  } else {
    $text.css('visibility', '');
  }

  $('.bcdb_model_item').each(function () {
    checkThumb($(this));
  });

  if (!(isAdaptive || isSlider)) {
    if (isChat) {
      headerHeight = $header.is(':visible') ? $header.outerHeight(true) : 0;
    }
    if (footerCorrection + $container.height() + headerHeight + footerHeight > bcdbHeight) {
      $footer.hide();
      containerHeight += (bcdbHeight - containerHeight - headerHeight);
      if (!isFullscreen) {
        $container.height(containerHeight);
      }
    }
    return;
  }

  headerHeight = $header.is(':visible') ? $header.outerHeight(true) : 0;
  footerHeight = $footer.outerHeight(true);

  //footer correction
  if (footerCorrection + containerHeight + headerHeight + footerHeight > bcdbHeight) {
    if (footerVisible) {
      $footer.hide();
      containerHeight += (bcdbHeight - containerHeight - headerHeight);
      $container.height(containerHeight);
    }
  } else if (!footerVisible) {
    $footer.show();
    $container.height(containerHeight);
  }

  $('.cam canvas').each(function () {
    var $canvas = $(this);
    var thisWidth = $canvas.parent().width();
    $canvas.width(thisWidth);
    $canvas.height(thisWidth * 3 / 4 * 1.1);
  });

  if ($container.find('.bcdb_row.clone').length) {
    $container.find('.bcdb_row.clone').each(function () {
      var $this = $(this);
      var timeoutId = $this.data('contentTimeout') || 0;
      clearTimeout(timeoutId);
      $this.find('video').each(function () {
        var canvasVideo = $(this).data('canvasVideo');
        canvasVideo && canvasVideo.destroy();
      });
      $this.remove();
    });
  }

  $container.height(containerHeight);

  var $groups = $('.bcdb_model_group');
  var $rows = $groups.first().find('.bcdb_row');
  var rowHeight = $rows.height();
  var allRowsHeight = $rows.length * rowHeight;
  var maxSpace = bcdbHeight - headerHeight - footerHeight;

  var cloneCount = Math.floor((maxSpace - allRowsHeight) / rowHeight);
  if (rowHeight && cloneCount) {
    $container.height('');
    renderClones(false, cloneCount);
  } else {
    replayLive();
  }

  $(document).trigger('sale2x:update');
}

function renderClones (isUpdate, cloneCount) {
  if (!cloneCount) {
    return;
  }
  var cloneExist = false;
  var $groups = $('.bcdb_model_group');
  var visibleThumbsCount = $groups.find('.bcdb_row:first .bcdb_model_item:visible').length;
  $groups.each(function () {
    var $group = $(this);
    var $rows = $group.find('.bcdb_row');
    var visibleRowsCount = $rows.length;
    var curIndex = -1;
    for (var i = 0; i < cloneCount; i++) {
      var $clone = $rows.eq(i % visibleRowsCount).clone(true);
      var $thumbs = $clone.find('.bcdb_model_item');
      if (i % visibleRowsCount === 0) {
        curIndex++;
      }
      $thumbs.first().before($thumbs.filter(':nth-child(n+' + ((curIndex + 1) * visibleThumbsCount + 1) + ')'));
      if ($clone.find('.bcdb_model_item:nth-child(-1n+' + visibleThumbsCount + ')[data-index="0"]').length) {
        break;
      }
      $clone.addClass('clone');
      $group.append($clone);
      cloneExist = true;
    }
  });

  $('.bcdb_row.clone').find('.bcdb_model_item').each(function () {
    var $item = $(this);
    checkThumb($item);
    if ($item.css('display') !== 'none') {
      var $cam = $item.find('.cam');
      $cam.html('<video autoplay muted loop playsinline webkitPlaysinline preload="auto"></video><video autoplay muted loop playsinline webkitPlaysinline preload="auto"></video>');
      initContent($item.find('.thumb_active'), true);
    }
  });
  replayLive();
  setContainerHeight();
}

function isNeedHidingThumbs(bcdbWidth, bcdbHeight) {
  return (
    (bcdbWidth === 160 && bcdbHeight >= 90 && bcdbHeight <= 530) ||
    (bcdbWidth === 150 && ((bcdbHeight >= 645 && bcdbHeight <= 665) || (bcdbHeight >= 794 && bcdbHeight <= 820))) ||
    (bcdbWidth === 130 && (bcdbHeight === 800 || bcdbHeight === 590))
  );
}

function checkThumb ($modelItem) {
  var modelName = $modelItem.find('.js-mdl_inner').html() || '';
  var $modelLang = $modelItem.find('.modellang img');
  var $itemStatus = $modelItem.find('.modelstatus');
  var $itemName = $modelItem.find('.modelname');
  var $itemLink = $modelItem.find('.modellink');
  var imageWidth = thumbWidth;
  var $cam = $modelItem.find('.cam');
  var $bcdb = $('.bcdb');
  var bcdbWidth = $bcdb.width();
  var bcdbHeight = $bcdb.height();
  var modelThumbImg = $modelItem.find('.modelimage');
  if (isChat && isNeedHidingThumbs(bcdbWidth, bcdbHeight)) {
    var thumbsCount = null;
    if (bcdbWidth === 160) {
      if ((bcdbHeight >= 90 && bcdbHeight <= 140) || bcdbHeight === 530) {
        thumbsCount = 3;
      } else if ((bcdbHeight > 140 && bcdbHeight <= 240) || (bcdbHeight >= 363 && bcdbHeight < 530)) {
        thumbsCount = 2;
      } else if (bcdbHeight > 240 && bcdbHeight <= 362) {
        thumbsCount = 1;
      }
    } else if (bcdbWidth === 150) {
      if (bcdbHeight >= 645 && bcdbHeight <= 665) {
        thumbsCount = 3;
      } else if (bcdbHeight >= 794 && bcdbHeight <= 820) {
        thumbsCount = 4;
      }
    } else if (bcdbWidth === 130) {
      if (bcdbHeight === 800) {
        thumbsCount = 4;
      } else if (bcdbHeight === 590) {
        thumbsCount = 3;
      }
    }
    if (thumbsCount && parseInt($modelItem.attr('data-index')) > (thumbsCount - 1)) {
      $modelItem.hide();
    }
  } else if (mode === 'mode1' && $cam.length && $cam.width() < 90) {
    $modelLang.hide();
  } else if ((((mode === 'mode3') && (['160'].indexOf(window.width) > -1)) || ((['mode4', 'mode2'].indexOf(mode) > -1) && (['728', '700'].indexOf(window.width) > -1))) && (modelName.length > 8)) {
    if (modelName.length > 11) {
      $modelLang.filter(':nth-child(n)').hide();
    } else {
      $modelLang.filter(':nth-child(2)').hide();
    }
  } else {
    if (modelName.length > 11) {
      $modelLang.filter(':nth-child(n)').show();
    } else {
      $modelLang.show();
    }
  }

  if (mode !== 'mode1') {
    return;
  }

  if (isChat) {
    if (!Boolean($modelItem.find('.sale2x').length)) {
      $itemStatus.show();
    }

    if (modelThumbImg.length) {
      if (modelThumbImg.height() <= 70) {
        $modelLang.hide();
      } else {
        $modelLang.show();
      }
    }

  } else if (imageWidth && imageWidth <= 90) {
    $modelItem.css('font-size', '80%');
    $itemName.css({
      'padding-bottom': '+=1',
      'white-space': 'nowrap',
      'font-size': '100%'
    });
    $itemLink.css({
      'margin-top': '-=1',
      'padding-bottom': '1px'
    });
    $itemStatus.hide();

    if (isSlider) {
      $modelLang.show();
    } else {
      $modelLang.hide();
    }
  } else if (imageWidth && imageWidth <= 110) {
    $modelItem.css('font-size', '90%');
    $itemName.css({
      'padding-bottom': '+=1',
      'white-space': 'nowrap',
      'font-size': '100%'
    });
    $itemLink.css({
      'margin-top': '-=1',
      'padding-bottom': '1px'
    });
    $itemStatus.show();
    $modelLang.show();
  } else if (mode === 'mode1') {
    $modelItem.css('font-size', '');
    $itemName.css({
      'padding-bottom': '',
      'white-space': '',
      'font-size': ''
    });
    $itemLink.css({
      'margin-top': '',
      'padding-bottom': '1px'
    });
    $itemStatus.show();
    $modelLang.show();
  }
}

function setContainerHeight() {
  var containerHeight = 0;
  $('.bcdb_model_group_active .bcdb_row').each(function () {
    containerHeight += $(this).outerHeight(true);
  });

  var $container = $('.bcdb_model_group_container');
  if (containerHeight) {
    $container.height(containerHeight);
    $container.data('height', containerHeight);
  } else {
    $container.data('height', $container.height());
  }

  if (cols && rows) {
    $container.css({
      height: 'inherit',
    });
  }
}

function adjustMoreButton() {
  var itemHeight = $('.bcdb_model_item').height();
  var h = itemHeight * 0.182 + 5.4;
  var $btn = $('.more_button');
  $btn.height(h);
  $btn.width(itemHeight);
  $btn.css('border-radius', h + 'px');
  $btn.magicText({
    padding: (h/4) + 'px' + ' ' + (h/2) + 'px',
    minLineHeight: 0.9,
    verticalAlign: 'center',
    minFontSize: 4
  });
}
</script>

<style type="text/css">
  html, body {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .bcdb div, .bcdb p {
    margin: 0;
    padding: 0;
  }

  .bcdb img {
    border: 0 none;
  }

  .bcdb {
    background-color: none;
    color: #000000;
    width: 250px;
    height: 167px;
    font-family: 'Arial';
    overflow: hidden;
    font-size: 12px;
    position: relative;
  }

  .bcdb .bcdb_model_item span.modelname {
    max-width: 100%;
    box-sizing: border-box;
  }

  .bcdb .bcdb_model_item span.modelname .mdl_inner {
    max-width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }

      .bcdb .bcdb_model_item span.modelname {
      padding: 0 5px;
    }

    .s728x90 .bcdb .bcdb_model_item span.modelname,
    .s700x90 .bcdb .bcdb_model_item span.modelname {
      padding: 0;
    }
  
  .bcdb a {
    color: #a02239;
  }

  .bcdb a {
    text-decoration: none;
  }

  .bcdb .bcdb_container {
            padding: 4px 5px 4px 4px;
            padding: 0px;
    }

  
  .bcdb .bcdb_header {
    position: relative;
      padding: 8px 5px 0;
  
            display: none;
      
      }

  .bcdb .bcdb_footer {
      padding: 15px 5px 5px;
          font-size: 130%;
          text-align: center;
  
            }

  
  .bcdb .bcdb_header img {
   height: 100%;
    width: auto;
    }

  .bcdb .bcdb_header strong {
    font-size: 18px;
    position: absolute;
   top: 14px;
   right: 5px;
    }

  .bcdb .bcdb_model_item {
    max-width: 100%;
            width: 100%;
            }

  .bcdb .bcdb_model_group {
    position: absolute;
    width: 100%;
    height: 100%;
    }

  .bcdb .bcdb_model_group_active {
    top: 0;
    left: 0;
    }

  .bcdb .bcdb_model_group_container {
    position: relative;
    overflow: hidden;
      height: 146px;
      
    }

  .bcdb .bcdb_model_item a {
    text-decoration: none;
    display: block;
            padding: 4px 4px;
              
        }

  .bcdb .bcdb_model_item a.camlink {
    padding: 0 !important;
    margin: 0 !important;
    position: absolute;
    z-index: 9;
  }

  .bcdb .bcdb_model_item a img.thumb {
    display: block;
    position: absolute;
      width: 100%;
  
      }

  .bcdb .bcdb_model_item .cam {
    position: absolute;
    z-index: 2;

  }

  .bcdb .bcdb_model_item a img.thumb_active {
    z-index: 1;
    left: 0;
  }

  .bcdb .bcdb_model_item a img.thumb_hidden {
    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
    zoom: 1;
    z-index: 9 !important;
  }

  .bcdb .bcdb_model_item span {
    display: block;
    line-height: 101%;
    text-align: center;
  }

  .bcdb .bcdb_model_item span.modelimage {
    position: relative;
    overflow: hidden;
            border: 1px solid #ffffff;
                    }

  .bcdb .bcdb_model_item a:hover span.modelimage {
    border-color: #a02239;
  }

  .bcdb .bcdb_model_item span.modelname,
  .bcdb .bcdb_model_item span.modellink {
   margin-top: 4px;
   overflow: hidden;
  }

  .bg_fon {
    background: url('https://i.bngdin.com/dynamic_banner/images/bg_dynamic_baner.png') repeat-x;
    width: 120px;
    height: 21px;
    display: block;
    z-index: 4;
    position: absolute;
    bottom: 0;
  }

  .bcdb .bcdb_model_item span.modelname {
    }

  .bcdb .bcdb_model_item span.modellink {
    font-size: 90%;
    text-decoration: underline;
    }

  .bcdb .bcdb_model_item span.modelname {
    color: transparent;
  }

  .bcdb .bcdb_model_item a:hover span.modellink {
    text-decoration: none;
  }

  .bcdb .bcdb_model_item em.modelstatus {
    background: #30a913;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    -khtml-border-radius: 4px;
    padding: 1px 4px;
    color: #fff;
    font-size: 9px;
    font-style: normal;
    position: absolute;
    z-index: 3;
    top: 5px;
    left: 5px;
    text-shadow: 0 1px 0 #006600;
  }

  .bcdb .bcdb_model_item em.modellang {
    position: absolute;
    z-index: 4;
    top: 5px;
    right: 5px;
  }
  .bcdb .bcdb_model_item em.modellang img {
    display: block;
  }
  .bcdb .clr {
    clear: both;
  }
          
  
  
  .bcdb_model_item .column {
    display: none;
  }

    .bcdb_model_item .modelstatus,
  .bcdb .bcdb_model_item em.modellang img {
    display: none;
  }
  </style>
<style type="text/css">
  .cam {
  width: 100%;
}

.cam video,
.bcdb .bcdb_model_item a,
.mode1 .bcdb .bcdb_model_item span.modelimage {
  opacity: 0.9999; /* @see BCS-2962 and BCS-816 */
}

.mode1 .bcdb .bcdb_model_item a {
  opacity: 1;
}

.cam video {
  width: 101%;
  height: 101%;
  object-fit: cover;
  background: transparent;
}

@media all and (-ms-high-contrast:none) {
  .cam video {
    width: auto;
    min-width: 101%;
  }
}


.cam canvas {
  width: 101%;
  height: 110%;
  max-width: 100%;
  background: transparent;
}
  
  </style>



    <style type="text/css">
    .s300x300 .bcdb.__sale .bcdb_footer, .s300x250 .bcdb.__sale .bcdb_footer {

    padding-top: 5px;
}

.s300x300 .bcdb .bcdb_badge_sale_wrp, .s300x250 .bcdb .bcdb_badge_sale_wrp {

    bottom: 5px;
}

.s300x300 .bcdb .bcdb_badge_sale_wrp.__top_ver.__no_logo, .s300x250 .bcdb .bcdb_badge_sale_wrp.__top_ver.__no_logo {

    position: relative;

    width: 100%;

    left: 0;
}

.s300x300 .bcdb .bcdb_badge_sale, .s300x250 .bcdb .bcdb_badge_sale {

    max-width: 90%;
}

.s300x300 .bcdb .bcdb_badge_sale.__friday .bcdb_br, .s300x250 .bcdb .bcdb_badge_sale.__friday .bcdb_br {

    display: none;
}

.s300x300 .bcdb .bcdb_badge_sale.__friday .bcdb_br:lang(jp), .s300x250 .bcdb .bcdb_badge_sale.__friday .bcdb_br:lang(jp) {

    display: block;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver, .s300x250 .bcdb .bcdb_badge_sale.__top_ver {

    max-width: 100%;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver.__friday br, .s300x250 .bcdb .bcdb_badge_sale.__top_ver.__friday br {

    display: none;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver .bcdb_bs_text, .s300x250 .bcdb .bcdb_badge_sale.__top_ver .bcdb_bs_text {

    padding-right: 2px;

    padding-left: 2px;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver .bcdb_bs_percent, .s300x250 .bcdb .bcdb_badge_sale.__top_ver .bcdb_bs_percent {

    display: none;
}

.s300x300 .bcdb .bcdb_badge_sale.__inner_ver, .s300x250 .bcdb .bcdb_badge_sale.__inner_ver {

    position: absolute;

    max-width: 80%;

    left: 3px;

    bottom: 2px;

    z-index: 2;
}

.s300x300 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_br_last, .s300x250 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_br_last {

    display: block;
}

.s300x300 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_bs_inner, .s300x250 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_bs_inner {

    max-height: 60px;
}

.s300x300 .bcdb .bcdb_badge_sale .bcdb_bs_inner, .s300x250 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 30px;
}

.s350x280 .bcdb .bcdb_badge_sale_wrp, .s300x300 .bcdb .bcdb_badge_sale_wrp, .s300x250 .bcdb .bcdb_badge_sale_wrp, .s240x480 .bcdb .bcdb_badge_sale_wrp, .s200x300 .bcdb .bcdb_badge_sale_wrp, .s160x650 .bcdb .bcdb_badge_sale_wrp {

    position: absolute;

    -webkit-box-align: center;

    -webkit-align-items: center;

    -ms-flex-align: center;

    align-items: center;

    left: 0;

    z-index: 1;
}

.s350x280 .bcdb .bcdb_badge_sale, .s300x300 .bcdb .bcdb_badge_sale, .s300x250 .bcdb .bcdb_badge_sale, .s240x480 .bcdb .bcdb_badge_sale, .s200x300 .bcdb .bcdb_badge_sale, .s160x650 .bcdb .bcdb_badge_sale {

    position: relative;

    white-space: nowrap;

    line-height: 1.2;
}

.s350x280 .bcdb .bcdb_badge_sale.__friday, .s300x300 .bcdb .bcdb_badge_sale.__friday, .s300x250 .bcdb .bcdb_badge_sale.__friday, .s240x480 .bcdb .bcdb_badge_sale.__friday, .s200x300 .bcdb .bcdb_badge_sale.__friday, .s160x650 .bcdb .bcdb_badge_sale.__friday {

    font-size: 16px;
}

.s700x90 .bcdb .bcdb_badge_sale_wrp, .s728x90 .bcdb .bcdb_badge_sale_wrp, .s300x100 .bcdb .bcdb_badge_sale_wrp {

    position: absolute;

    bottom: 2px;

    left: 0;

    z-index: 1;
}

.s700x90 .bcdb .bcdb_badge_sale_wrp.__flat_ver, .s728x90 .bcdb .bcdb_badge_sale_wrp.__flat_ver, .s300x100 .bcdb .bcdb_badge_sale_wrp.__flat_ver {

    -webkit-box-align: center;

    -webkit-align-items: center;

    -ms-flex-align: center;

    align-items: center;

    top: 0;

    bottom: 0;

    right: 0;

    left: auto;

    width: 62px;
}

.s700x90 .bcdb .bcdb_badge_sale, .s728x90 .bcdb .bcdb_badge_sale, .s300x100 .bcdb .bcdb_badge_sale {

    position: relative;

    max-width: 90%;

    white-space: nowrap;
}

.s700x90 .bcdb .bcdb_badge_sale.__flat_ver, .s728x90 .bcdb .bcdb_badge_sale.__flat_ver, .s300x100 .bcdb .bcdb_badge_sale.__flat_ver {

    max-width: 90%;
}

.s700x90 .bcdb .bcdb_badge_sale.__flat_ver br, .s728x90 .bcdb .bcdb_badge_sale.__flat_ver br, .s300x100 .bcdb .bcdb_badge_sale.__flat_ver br {

    display: block;
}

.s700x90 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_inner, .s728x90 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_inner, .s300x100 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_inner {

    max-height: 100%;
}

.s700x90 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_text, .s728x90 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_text, .s300x100 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_text {

    padding-left: 0;

    padding-right: 0;
}

.s700x90 .bcdb .bcdb_badge_sale br, .s728x90 .bcdb .bcdb_badge_sale br, .s300x100 .bcdb .bcdb_badge_sale br {

    display: none;
}

.s700x90 .bcdb .bcdb_badge_sale .bcdb_bs_text, .s728x90 .bcdb .bcdb_badge_sale .bcdb_bs_text, .s300x100 .bcdb .bcdb_badge_sale .bcdb_bs_text {

    padding-top: 2px;

    padding-bottom: 2px;
}

.s700x90 .bcdb .bcdb_badge_sale .bcdb_bs_percent, .s728x90 .bcdb .bcdb_badge_sale .bcdb_bs_percent, .s300x100 .bcdb .bcdb_badge_sale .bcdb_bs_percent {

    display: none;
}

.s700x90 .bcdb .bcdb_badge_sale .bcdb_bs_inner, .s728x90 .bcdb .bcdb_badge_sale .bcdb_bs_inner, .s300x100 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 20px;
}

.s750x300 .bcdb .bcdb_badge_sale_wrp, .s550x550 .bcdb .bcdb_badge_sale_wrp, .s400x600 .bcdb .bcdb_badge_sale_wrp {

    position: absolute;

    left: 0;

    bottom: 3px;

    z-index: 1;
}

.s750x300 .bcdb .bcdb_badge_sale, .s550x550 .bcdb .bcdb_badge_sale, .s400x600 .bcdb .bcdb_badge_sale {

    position: relative;

    white-space: nowrap;

    max-width: 90%;

    line-height: 1.2;
}

.s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__friday br, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__friday br, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__friday br {

    display: none;
}

.s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver .bcdb_bs_inner, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver .bcdb_bs_inner, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver .bcdb_bs_inner {

    max-height: 20px;
}

.s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname br, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_percent, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo br, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_percent, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo br, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_percent, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname br, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_percent, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo br, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_percent, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo br, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_percent, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname br, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_percent, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo br, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_percent, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo br, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_percent {

    display: none;
}

.s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_inner, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_inner, .s750x300 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_inner, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_inner, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_inner, .s550x550 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_inner, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_inner, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_inner, .s400x600 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_inner {

    max-height: 14px;
}

.s750x300 .bcdb .bcdb_badge_sale.__friday br, .s750x300 .bcdb .bcdb_badge_sale.__sale br, .s550x550 .bcdb .bcdb_badge_sale.__friday br, .s550x550 .bcdb .bcdb_badge_sale.__sale br, .s400x600 .bcdb .bcdb_badge_sale.__friday br, .s400x600 .bcdb .bcdb_badge_sale.__sale br {

    display: none;
}

.s750x300 .bcdb .bcdb_badge_sale .bcdb_bs_text, .s550x550 .bcdb .bcdb_badge_sale .bcdb_bs_text, .s400x600 .bcdb .bcdb_badge_sale .bcdb_bs_text {

    padding-top: 2px;

    padding-bottom: 2px;
}

.s750x300 .bcdb .bcdb_badge_sale .bcdb_bs_inner, .s550x550 .bcdb .bcdb_badge_sale .bcdb_bs_inner, .s400x600 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 30px;
}

.s160x650 .bcdb.__sale .bcdb_footer {

    display: none;
}

.s160x650 .bcdb .bcdb_badge_sale_wrp {

    bottom: 10px;

    height: 44px;
}

.s160x650 .bcdb .bcdb_badge_sale_wrp.__flat_ver {

    bottom: 0;

    height: 80px;
}

.s160x650 .bcdb .bcdb_badge_sale {

    max-width: 152px;
}

.s160x650 .bcdb .bcdb_badge_sale.__friday .bcdb_br {

    display: none;
}

.s160x650 .bcdb .bcdb_badge_sale.__friday .bcdb_br:lang(jp) {

    display: block;
}

.s160x650 .bcdb .bcdb_badge_sale.__sale .bcdb_br_second {

    display: none;
}

.s160x650 .bcdb .bcdb_badge_sale.__flat_ver .bcdb_bs_inner {

    max-height: 60px;
}

.s160x650 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 45px;
}

.s200x300 .bcdb.__sale .bcdb_footer {

    display: none;
}

.s200x300 .bcdb .bcdb_badge_sale_wrp {

    bottom: 0;

    height: 50px;
}

.s200x300 .bcdb .bcdb_badge_sale_wrp.__min_ver {

    height: 22px;
}

.s200x300 .bcdb .bcdb_badge_sale_wrp.__min_ver.__no_mlink.__no_mname, .s200x300 .bcdb .bcdb_badge_sale_wrp.__min_ver.__no_mname.__no_logo, .s200x300 .bcdb .bcdb_badge_sale_wrp.__min_ver.__no_mlink.__no_logo {

    height: 20px;
}

.s200x300 .bcdb .bcdb_badge_sale {

    max-width: 190px;
}

.s200x300 .bcdb .bcdb_badge_sale.__friday .bcdb_br {

    display: none;
}

.s200x300 .bcdb .bcdb_badge_sale.__friday .bcdb_br:lang(jp) {

    display: block;
}

.s200x300 .bcdb .bcdb_badge_sale.__sale .bcdb_br_second {

    display: none;
}

.s200x300 .bcdb .bcdb_badge_sale.__min_ver br {

    display: none;
}

.s200x300 .bcdb .bcdb_badge_sale.__min_ver.__no_mlink.__no_mname .bcdb_bs_inner, .s200x300 .bcdb .bcdb_badge_sale.__min_ver.__no_mname.__no_logo .bcdb_bs_inner, .s200x300 .bcdb .bcdb_badge_sale.__min_ver.__no_mlink.__no_logo .bcdb_bs_inner {

    max-height: 14px;
}

.s200x300 .bcdb .bcdb_badge_sale.__min_ver .bcdb_bs_inner {

    max-height: 20px;
}

.s200x300 .bcdb .bcdb_badge_sale.__min_ver .bcdb_bs_percent {

    display: none;
}

.s200x300 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 40px;
}

.s240x480 .bcdb.__sale.__min_ver .bcdb_footer {

    display: none;
}

.s240x480 .bcdb .bcdb_badge_sale_wrp {

    bottom: 0;

    height: 60px;
}

.s240x480 .bcdb .bcdb_badge_sale_wrp.__min_ver {

    height: 40px;
}

.s240x480 .bcdb .bcdb_badge_sale_wrp.__min_ver.__no_mname.__no_logo, .s240x480 .bcdb .bcdb_badge_sale_wrp.__min_ver.__no_mlink.__no_logo {

    height: 18px;

    bottom: 0;
}

.s240x480 .bcdb .bcdb_badge_sale {

    max-width: 90%;
}

.s240x480 .bcdb .bcdb_badge_sale.__sale, .s240x480 .bcdb .bcdb_badge_sale.__friday {

    font-size: 30px;
}

.s240x480 .bcdb .bcdb_badge_sale.__friday .bcdb_br {

    display: none;
}

.s240x480 .bcdb .bcdb_badge_sale.__friday .bcdb_br:lang(jp) {

    display: block;
}

.s240x480 .bcdb .bcdb_badge_sale.__sale br {

    display: none;
}

.s240x480 .bcdb .bcdb_badge_sale.__min_ver.__friday br {

    display: none;
}

.s240x480 .bcdb .bcdb_badge_sale.__min_ver .bcdb_bs_inner {

    max-height: 30px;
}

.s240x480 .bcdb .bcdb_badge_sale.__min_ver.__no_mlink.__no_mname br, .s240x480 .bcdb .bcdb_badge_sale.__min_ver.__no_mname.__no_logo br, .s240x480 .bcdb .bcdb_badge_sale.__min_ver.__no_mlink.__no_logo br {

    display: none;
}

.s240x480 .bcdb .bcdb_badge_sale.__min_ver.__no_mlink.__no_mname .bcdb_bs_inner, .s240x480 .bcdb .bcdb_badge_sale.__min_ver.__no_mname.__no_logo .bcdb_bs_inner, .s240x480 .bcdb .bcdb_badge_sale.__min_ver.__no_mlink.__no_logo .bcdb_bs_inner {

    max-height: 14px;
}

.s240x480 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 50px;
}

.s300x100 .bcdb.__sale.__flat_ver .bcdb_model_item:nth-last-child(-n + 2) {

    display: none;
}

.s700x90 .bcdb.__sale.__flat_ver .bcdb_model_item:nth-last-child(-n+2), .s728x90 .bcdb.__sale.__flat_ver .bcdb_model_item:nth-last-child(-n+2) {

    display: none;
}

.s720x200 .bcdb.__sale .bcdb_header strong {

    font-size: 13px;
}

.s720x200 .bcdb .bcdb_badge_sale_wrp {

    position: absolute;

    -webkit-box-align: center;

    -webkit-align-items: center;

    -ms-flex-align: center;

    align-items: center;

    -webkit-box-pack: start;

    -webkit-justify-content: flex-start;

    -ms-flex-pack: start;

    justify-content: flex-start;

    width: 250px;

    height: 43px;

    top: 0;

    left: 146px;

    z-index: 1;
}

.s720x200 .bcdb .bcdb_badge_sale_wrp.__no_logo {

    position: relative;

    -webkit-box-pack: center;

    -webkit-justify-content: center;

    -ms-flex-pack: center;

    justify-content: center;

    width: 100%;

    height: 38px;

    left: 0;
}

.s720x200 .bcdb .bcdb_badge_sale {

    position: relative;

    max-width: 100%;

    white-space: nowrap;

    line-height: 1.2;
}

.s720x200 .bcdb .bcdb_badge_sale.__friday .bcdb_bs_text:lang(in) {

    padding-top: 2px;
}

.s720x200 .bcdb .bcdb_badge_sale.__no_logo .bcdb_bs_inner {

    max-height: 38px;
}

.s720x200 .bcdb .bcdb_badge_sale.__inner_ver {

    position: absolute;

    max-width: 80%;

    left: 5px;

    bottom: 2px;

    z-index: 1;
}

.s720x200 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_br_last {

    display: block;
}

.s720x200 .bcdb .bcdb_badge_sale br {

    display: none;
}

.s720x200 .bcdb .bcdb_badge_sale .bcdb_bs_text {

    padding: 2px 3px;
}

.s720x200 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 40px;
}

.s350x280 .bcdb.__sale .bcdb_footer {

    display: none;
}

.s350x280 .bcdb .bcdb_badge_sale_wrp {

    bottom: 5px;
}

.s350x280 .bcdb .bcdb_badge_sale_wrp.__flat_ver {

    bottom: 0;

    height: 50px;
}

.s350x280 .bcdb .bcdb_badge_sale {

    max-width: 80%;
}

.s350x280 .bcdb .bcdb_badge_sale.__friday .bcdb_br {

    display: none;
}

.s350x280 .bcdb .bcdb_badge_sale.__friday .bcdb_br:lang(jp) {

    display: block;
}

.s350x280 .bcdb .bcdb_badge_sale.__flat_ver {

    max-width: 90%;
}

.s350x280 .bcdb .bcdb_badge_sale.__flat_ver br {

    display: none;
}

.s350x280 .bcdb .bcdb_badge_sale.__inner_ver {

    position: absolute;

    max-width: 80%;

    left: 3px;

    bottom: 2px;

    z-index: 2;
}

.s350x280 .bcdb .bcdb_badge_sale.__inner_ver.__sale:lang(cn) .bcdb_br {

    display: none;
}

.s350x280 .bcdb .bcdb_badge_sale.__inner_ver.__sale:lang(cz) .bcdb_br_second {

    display: none;
}

.s350x280 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_br_last {

    display: block;
}

.s350x280 .bcdb .bcdb_badge_sale.__inner_ver .bcdb_bs_inner {

    max-height: 60px;
}

.s350x280 .bcdb .bcdb_badge_sale.__ex_small_ver br {

    display: none;
}

.s350x280 .bcdb .bcdb_badge_sale.__ex_small_ver .bcdb_bs_inner {

    max-height: 20px;
}

.s350x280 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_mname .bcdb_bs_inner, .s350x280 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mname.__no_logo .bcdb_bs_inner, .s350x280 .bcdb .bcdb_badge_sale.__ex_small_ver.__no_mlink.__no_logo .bcdb_bs_inner {

    max-height: 14px;
}

.s350x280 .bcdb .bcdb_badge_sale .bcdb_bs_text {

    padding-top: 2px;

    padding-bottom: 2px;
}

.s350x280 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 30px;
}

.s550x550 .bcdb.__sale .bcdb_footer {

    padding-top: 7px;
}

.s300x300 .bcdb .bcdb_badge_sale_wrp.__top_ver {

    left: auto;

    right: 0;

    top: 2px;

    bottom: auto;

    height: 42px;

    width: 150px;
}

.s300x300 .bcdb .bcdb_badge_sale_wrp.__top_ver.__no_logo {

    width: 100%;

    height: 22px;
}

.s300x300 .bcdb .bcdb_badge_sale.__sale br {

    display: none;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver.__friday .bcdb_br_last {

    display: block;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver.__sale .bcdb_br {

    display: block;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver.__no_logo.__friday .bcdb_br_last {

    display: none;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver.__no_logo.__sale .bcdb_br {

    display: none;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver.__no_logo .bcdb_bs_inner {

    max-height: 20px;
}

.s300x300 .bcdb .bcdb_badge_sale.__top_ver .bcdb_bs_inner {

    max-height: 38px;
}

.s300x300 .bcdb .bcdb_badge_sale .bcdb_bs_text {

    padding-top: 2px;

    padding-bottom: 2px;
}

.s300x300 .bcdb .bcdb_badge_sale .bcdb_bs_text:lang(in) {

    padding-top: 4px;
}

.s300x300 .bcdb .bcdb_badge_sale .bcdb_bs_inner {

    max-height: 40px;
}

.s300x250 .bcdb.__sale .bcdb_footer {

    white-space: nowrap;
}

.s300x250 .bcdb .bcdb_badge_sale_wrp.__top_ver {

    left: 128px;

    top: 2px;

    bottom: auto;

    height: 28px;

    width: 170px;
}

.s300x250 .bcdb .bcdb_badge_sale.__sale br {

    display: none;
}

.s300x250 .bcdb .bcdb_badge_sale.__top_ver.__no_logo .bcdb_bs_inner {

    max-height: 20px;
}

.s300x250 .bcdb .bcdb_badge_sale.__top_ver .bcdb_bs_inner {

    max-height: 25px;
}

.s300x250 .bcdb .bcdb_badge_sale .bcdb_bs_text {

    padding-top: 2px;

    padding-bottom: 2px;
}

.s300x250 .bcdb .bcdb_badge_sale .bcdb_bs_text:lang(in) {

    padding-top: 4px;
}
  </style>



<div
  class="bcdb __no_logo">
  <div class="bcdb_container">
    
    
    
    
    <div class="bcdb_model_group_container">
      <div class="bcdb_model_group bcdb_model_group_active">
                                  
        <div
          class="bcdb_model_item max"
          data-index="0"
        >
                    <a target="_blank" href="https://bongacams.com/track?c=783763&ps=dynamic_banner&csurl=https://bongacams.com/Meegan">
              <span class="modelimage">
                  <div class="column"></div>
                                  <div class="cam">
                    <video autoplay muted loop playsinline webkitPlaysinline preload="auto"></video>
                    <video autoplay muted loop playsinline webkitPlaysinline preload="auto"></video>
                  </div>
                  <img id="th0"
                       class="thumb thumb_active thumb_hidden"
                       src="//i.wlicdn.com/027/1b6/26c/eb3cf87c846f706cdf7f6c2399a9af7b_thumb_medium.jpg"
                       data-url="//i.wlicdn.com/027/1b6/26c/eb3cf87c846f706cdf7f6c2399a9af7b_thumb_medium.jpg"
                       data-video-src="https://v.bngdin.com/stream_Meegan"
                       data-image-player-src="https://v.bngdin.com/stream_Meegan"
                       alt=""
                      >
                                                  <em class="modelstatus">
                                          Online
                                      </em>
                                
                              </span>
                                                            
            
                      </a>
        </div>
                                          </div>
      <div class="clr"><!-- --></div>
    </div>
          </div>
</body>
</html>
