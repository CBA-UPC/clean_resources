if(typeof(__vc_paramstr) === "undefined"){__vc_paramstr = "";}if(!__vc_paramstr && location.ancestorOrigins){__vc_dlist = location.ancestorOrigins;__vc_srcurl = "&_su="+encodeURIComponent(document.URL);__vc_dlarr = [];__vc_paramstr = "";for ( var i=0, l=__vc_dlist.length; l>i; i++ ) {__vc_dlarr.push(__vc_dlist[i]);}__vc_paramstr = "&_su="+encodeURIComponent(document.URL);if (__vc_dlarr.length){__vc_paramstr = __vc_paramstr + "&_dl=" + encodeURIComponent(__vc_dlarr.join(','));}}document.write("<A TARGET='_top' HREF='//ck.jp.ap.valuecommerce.com/servlet/referral?va=2633208&sid=3458949&pid=887573282"+__vc_paramstr+"' rel='nofollow'><IMG BORDER=0 SRC='//i.imgvc.com/vc/images/00/28/2d/f8.gif'></A>");できます'
        }
      });
    }
    if ($('.wrap_scroll_figure').length > 0) {
      new ScrollHint('.wrap_scroll_figure', {
        scrollHintIconAppendClass: 'scroll-hint-icon-black', // white-icon will appear
        i18n: {
          scrollable: 'スクロールできます'
        }
      });
    }

   //アコーディオン　複数展開   
    $('.acnav__label').click(function() {
      var label = $(this);
      var parent = label.parent('.has-children');
      var list = label.siblings('.acnav__list');
      if (parent.hasClass('is-open')) {
        list.slideUp('fast');
        parent.removeClass('is-open');
      } else {
        list.slideDown('fast');
        parent.addClass('is-open');
      }
    });

    //スマホ　ヘッダーナビ　アイコン切り替え（menu <--> close）
    $('.sp_page_nav_toggle').click(function() {
      if ($(this).children('img').hasClass('menu')) {
// console.log('aaa');
        $(this).children('img').removeClass('menu').addClass('close');
        $(this).children('img').attr('src', '/images/close.png');
        $(this).addClass('is-open');
      } else {
// console.log('bbb');
        $(this).children('img').removeClass('close').addClass('menu');
        $(this).children('img').attr('src', '/images/menu.svg');
      }
      //スマホ　ヘッダーナビ　開閉
      $(".l_header .page_nav").toggleClass("is-open");

      //arrowクラス追加
      $(".acnav__link").addClass("arrow arrow_bold");

      //body 固定
      $('body').toggleClass('fixed');
    });

    //検索ボックス　開閉
    $('.page_search_box_toggle').click(function() {
      if ($('.page_search_box_area').is(':hidden')) {
        $('.page_search_box_area').fadeIn(100);
      } else {
        $('.page_search_box_area').fadeOut(100);
      }
    });

    //ハンバーガーメニュー表示時、bodyがスクロールされるのを防ぐ
    $('.sp_page_nav_toggle').on('click', function(){
      var st = $(window).scrollTop();
      if($('.sp_page_nav_toggle').children('span').hasClass("is-open") == true) {
        $('body').addClass('scroll-prevent');
        $('body').css('top', -(st) + 'px');
        // console.log("オープン");
      }
      else{
        $('body').removeClass('scroll-prevent');
        $(window).scrollTop(st);
        // console.log("クローズ");
      }
    });

    //検索ボックス以外のエリアクリック --> 閉じる
    $('.page_search_box_area').click(function() {
      $(this).fadeOut();
    });
    $('.page_search_box').click(function(e) {
      e.stopPropagation();
    });

  } else {
    //PCの処理
    //アコーディオン　this以外閉じる
    $('.acnav__label').click(function() {
      var label = $(this);
      var parent = label.parent('.has-children');
      var list = label.siblings('.acnav__list');
      parent.toggleClass('is-open');
      list.toggle();
      parent.siblings().find('ul').hide();
      $('.page_nav .has-children').not($(this).parent('.has-children')).removeClass("is-open");
    });
  }
});