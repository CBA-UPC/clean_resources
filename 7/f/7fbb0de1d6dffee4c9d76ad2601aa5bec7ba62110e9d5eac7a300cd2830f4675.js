(function () {

const STG_PARAM = window.location.href.match(/stg-www/) ? 'stg-' : '';
const BASE_API_URL = 'https://' + STG_PARAM + 'mpi.mainichi.jp';
const BASE_CDN_URL = 'https://' + STG_PARAM + 'cdn.mainichi.jp';
const BASE_MYPAGE_URL = 'https://' + STG_PARAM + 'my.mainichi.jp';
const MYPAGE_API_KEY = STG_PARAM === 'stg-' ? 'JUHCEDNXoX7a7fYyJ9sik9ygJi6Rlt7h7MXAfJW6' : 'TUWS8SKtn78GTCFQ9MMdJ4SINNAfFsK45vDYMnHz';
const MAX_FOLLOW = 300;

$(function() {
  const accountId = $.cookie('es_accountid');
  const newsItemId = $('.js-toolsave').data('newsid') || '';
  const viewportContent = $('meta[name="viewport"]').attr('content');
  const pageDevice = viewportContent.match(/width=1280/) ? 'PC' : 'SP';

  initOpen();

  $(document).on('click', '.js-channelfollow', function(e) {
    e.preventDefault();
    if ($(this).data('channelid')) {
      showLoading();
      followChannel($(this).data('channelid'));
    }
  });

  $(document).on('click', '.js-kijistock', function(e) {
    e.preventDefault();
    if (!newsItemId || !accountId) return;
    addStock(function(error, data) {
      if (error) return showErrorMes();
      doneStockKiji();
      changeSaveButton(true);
      showViewHeadMemo('');
    });
  });

  // ツールの保存ボタン
  $('.js-toolsave').click(function(e) {
    e.preventDefault();
    handleSaveKiji();
  });

  // 青帯のチャンネルフォローボタン
  $('.js-follow-feature').click(function(e) {
    const channelId = $(this).data('channelid') || '';
    e.preventDefault();
    checkFollow(e, channelId);
  });

  // その他のチャンネルフォローボタン
  $('.js-follow').click(function(e) {
    const channelId = $(this).data('channelid') || '';
    e.preventDefault();
    checkFollowS(e, channelId);
  });

  $(document).on('click', '.js-modalclose', function(e) {
    e.preventDefault();
    removeModalBase();
    if($('body > .mypage-tooltip').length){
      $('body > .mypage-tooltip').hide();
    }
  });

  $(document).on('click', '.js-delstock', function(e) {
    e.preventDefault();
    delStock();
  });

  $(document).on('click', '.js-backdonestock', function(e) {
    e.preventDefault();
    doneStockKiji();
  });

  $(document).on('click', '.js-showmodalmemo', function(e) {
    e.preventDefault();
    showModalMemo();
  });

  $(document).on('click', '.js-savemodalmemo', function(e) {
    e.preventDefault();
    saveModalMemo();
  });

  $(document).on('click', '.js-saveheadmemo', function(e) {
    e.preventDefault(ditheadmemo', function(e) {
    e.preventDefault();
    showEditHeadMemo();
  });

  function initOpen() {
    // 未ログイン
    if (!accountId) return;

    // ガイドページで有料会員のパーツを隠す
    if(location.pathname.includes('mypage/help')) hidePaidMemberParts();

    if (newsItemId) {
      getKiji(function(error, data) {
        if (error) return console.error(error);

        // 保存ボタンの表示変更
        changeSaveButton(data.user.stock.status ? true : false);

        // メモの表示
        if (notEmpty(data.user) && data.user.stock.status) {
          const val = notEmpty(data.user.stock.memo) ? data.user.stock.memo : '';
          showViewHeadMemo(val);
        }
      });
    }

    checkFollowButtonAll();
  }

  function checkFollowButtonAll() {
    // フォローボタンの状態を更新
    getFollowAll(function(error, data) {
      if (error) return console.error(error);

      // フォローボタン青帯
      const channelFollowId = $('.js-follow-feature').data('channelid') || null;
      if (channelFollowId) {
        const isFollow = data.channel_ids.some(function(id){return id === channelFollowId;});
        changeFollowButton(isFollow);
      }

      // フォローボタンS
      $('.js-follow').each(function(i, el) {
        const elChannelId = $(el).data('channelid') || null;
        const isFollow = elChannelId ? data.channel_ids.some(function(id){return id === elChannelId;}) : false;
        isFollow
          ? $(el).addClass('is-active').text('フォロー中')
          : $(el).removeClass('is-active').text('フォロー');
      });
    });
  }

  function followChannel(channelId) {
    if (!channelId || !accountId) return;

    addFollow(function(error, data) {
      if (error) return showErrorMes();
      appendFollowDone();
      changeFollowButton(true);
      checkFollowButtonAll();
    }, channelId);
  }

  function unFollowChannel(channelId) {
    if (!channelId || !accountId) return;

    delFollow(function(error, data) {
      if (error) return showErrorMes();
      appendUnFollowDone(channelId);
      changeFollowButton(false);
      checkFollowButtonAll();
    }, channelId);
  }

  function followChannelS(channelId) {
    if (!channelId || !accountId) return;

    addFollow(function(error, data) {
      if (error) return showErrorMes();
      checkFollowButtonAll();
    }, channelId);
  }

  function unFollowChannelS(channelId) {
    if (!channelId || !accountId) return;

    delFollow(function(error, data) {
      if (error) return showErrorMes();
      checkFollowButtonAll();
    }, channelId);
  }

  function _api(callback, type, url, data) {
    if (!accountId) return;
    if (!data) data = {};

    $.ajax({
        url: BASE_API_URL + url,
        type: type,
        data: data,
        dataType: 'json',
        timeout: 6000,
        headers: {
          'content-type': 'application/json',
          'x-api-key': MYPAGE_API_KEY,
          'x-account-id': accountId,
        },
      })
      .done(function(data) {
        callback(null, data);
      })
      .fail(function(error) {
        callback(error);
      });
  }

  function addFollow(callback, channelId) {
    _api(callback, 'PUT', '/v1/user/follow/channels/' + channelId);
  }

  function delFollow(callback, channelId) {
    _api(callback, 'DELETE', '/v1/user/follow/channels/' + channelId);
  }

  function addStock(callback) {
    _api(callback, 'PUT', '/v1/user/stock/kijis/' + newsItemId);
  }

  function delStock() {
    const callback = function(error, data) {
      if (error) return showErrorMes();
      appendUnSaveDone();

      if($('#mypage_headmemo').length){
        $('#mypage_headmemo').empty();
      }
    };

    _api(callback, 'DELETE', '/v1/user/stock/kijis/' + newsIte_api(callback, 'GET', '/v1/kijis/' + newsItemId);
  }

  function getFollowAll(callback) {
    _api(callback, 'GET', '/v1/user/follow/channels/ids');
  }

  function addUserDB(callback) {
    _api(callback, 'POST', '/v1/user');
  }

  function updateMemo(callback, memo) {
    _api(callback, 'PUT', '/v1/user/stock/kijis/' + newsItemId, JSON.stringify({
      memo: memo
    }));
  }

  function isNeedAddUser() {
    if (!isLocalStorageAvailable()) return false;

    const kijiSavedIds = JSON.parse(localStorage.getItem('kijiSavedIds')) || [];
    const kijiFollowedIds = JSON.parse(localStorage.getItem('kijiFollowedIds')) || [];
    if (kijiSavedIds.includes(accountId) || kijiFollowedIds.includes(accountId)) return false;

    return true;
  }

  function checkFollow(e, channelId) {
    if (!accountId) return showNeedLoginFollow(e);

    // マイページの処理が初めての場合、DBを作成する
    if (isNeedAddUser()) {
      addUserDB(function(error, data) {
        if (error) return showErrorMes();
        checkModalFollow(channelId);
      });
    } else {
      checkModalFollow(channelId);
    }
  }

  // チャンネルをフォロー
  function checkModalFollow(channelId) {
    showModalBase(true);

    getFollowAll(function(error, data) {
      if (error) return showErrorMes();
      if (!accountId) return;

      // フォロー済みはフォロー解除
      const isFollow = data.channel_ids.some(function(id){return id === channelId;});
      if (isFollow) return unFollowChannel(channelId);

      // フォロー上限
      if (data.channel_ids.length >= MAX_FOLLOW) return showMaxFollowMes();

      showModalFollow(channelId);
    });
  }

  function showModalFollow(channelId) {
    // LocalStorageが使えない場合、毎回説明を表示する
    if (!isLocalStorageAvailable()) return showFollowGuide(channelId);

    const kijiFollowedIds = JSON.parse(localStorage.getItem('kijiFollowedIds')) || [];

    // 初回はPCのみ使い方の説明を表示する
    if (!kijiFollowedIds.includes(accountId)) {
      const ids = kijiFollowedIds;
      ids.push(accountId);
      localStorage.setItem('kijiFollowedIds', JSON.stringify(ids));

      if(pageDevice === 'PC'){
        showFollowGuide(channelId);
        return;
      }
    }

    if (channelId) followChannel(channelId);
  }

  function checkFollowS(e, channelId) {
    if (!accountId) return showNeedLoginFollow(e);

    // マイページの処�
    if (isNeedAddUser()) {
      addUserDB(function(error, data) {
        if (error) return showErrorMes();
        changeFollowS(e, channelId);
      });
    } else {
      changeFollowS(e, channelId);
    }
  }

  function changeFollowS(e, channelId) {
    getFollowAll(function(error, data) {
      if (error) return showErrorMes();

        // フォロー中なのでフォロー解除
      if (data.channel_ids.some(function(id)　{　return id === channelId;　})) {
        unFollowChannelS(channelId);
        changeFollowButtonSmall(e, false);
        return;
      }

      // フォロー上限
      if (data.channel_ids.length >= MAX_FOLLOW) return showMaxFollowMes();

      // フォローしていないのでフォローする
      followChannelS(channelId);
      changeFollowButtonSmall(e, true);
    });
  }

  function handleSaveKiji() {
    const userSession = $.cookie('es_sessiontoken');
    if (!userSession) return showNeedLoginStockKiji();

    const saveKiji = function() {
      showModalBase(true);

      // 保存記事機能は有料会員限定のため、セッションを使って有料会員情報を取得
      getPaidMember(function(error, data) {
        if (error) return showErrorMes();

        if (!data.paid) return showPaidMemberOnly();
        if (!newsItemId) return;

        // 記事情報を取得
        getKiji(function(error2, data2) {
          if (error2) return showErrorMes();
          if (!data2) return;

          // 保存済みなので保存記事を解除する確認画面表示
          if (data2.user && data2.user.stock.status) return showDelStock();

          // LocalStorageが使えない場合、毎回使い方の説明を表示する
          if (!isLocalStorageAvailable()) return showStockKijiFirst();

          const kijiSavedIds = JSON.parse(localStorage.getItem('ki   if (!kijiSavedIds.includes(accountId)) {
            const ids = kijiSavedIds;
            ids.push(accountId);
            localStorage.setItem('kijiSavedIds', JSON.stringify(ids));
            if(pageDevice === 'PC'){
              showStockKijiFirst();
              return;
            }
          }

          addStock(function(error3, data3) {
            if (error3) return showErrorMes();
            don       showViuserSessi  saveKiji()
      });
    } else {
      saveKiji();
    }
  }

  function getPaidMember(callback, Authorization) {
    $.ajax({
        url: BASE_API_URL + '/v1/user/',
        type: 'GET',
        data: {},
        dataType: 'json',
        timeout: 10000,
        headers: {
          'content-type': 'application/json',
          'x-api-key': MYPAGE_API_KEY,
          Authorization: Authorization,
        },
      })
      .done(function(data) {
        callback(null, data);
      })
      .fail(function(error) {
        callback(error);
      });
  }

  function isLocalStorageAvailable() {
    try {
      localStorage.setItem('dummy', 'dummy');
      localStorage.removeItem('dummy');
      return true;
    } catch (e) {
      return false;
    }
  }

  function showFollowGuide(channelid) {
    const slidefollowfirst =
      '<div class="mypage-modal is-wide">' +
      '<div class="mypage-modal-inner">' +
      '<div class="mypagephotolist">' +
      '<div class="mypagephotolist-main-wrapper">' +
      '<div class="mypagephotolist-main swiper-follow" id="swiper-follow">' +
      '<ul class="mypagephotolist-main-list swiper-wrapper">' +
      '<li class="swiper-slide">' +
      '<div class="mypagephotolist-main-item image-mask">' +
      '<figure>' +
      '<img src="' + BASE_CDN_URL + '/vol1/images/v2/pc/mypage/img_slide_follow_01.png" alt="">' +
      '</figure>' +
      '</div>' +
      '<div class="mypagephotolist-title">特集や連載などをフォロー</div>' +
      '<p>フォローボタンを押すと、<br>気になる特集や連載などがマイページに追加されます。</p>' +
      '</li>' +
      '<li class="swiper-slide">' +
      '<div class="mypagephotolist-main-item image-mask">' +
      '<figure>' +
      '<img src="' + BASE_CDN_URL + '/vol1/images/v2/pc/mypage/img_slide_follow_02.png" alt="">' +
      '</figure>' +
      '</div>' +
      '<div class="mypagephotolist-title">フォローした記事は見逃さずチェック</div>' +
      '<p>マイページからフォローした特集や連載などの記事を<br>見逃すことなくチェックできます。</p>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="swiper-button-prev"></div>' +
      '<div class="swiper-button-next"></div>' +
      '<div class="swiper-pagination"></div>' +
      '</div>' +
      '</div>' +
      '<div class="mypage-modal-buttons-first">' +
      '<a href="#" data-channelid="' + channelid + '" class="btn is-primary is-l js-channelfollow">フォローする</a>' +
      '<span class="mypage-modal-note">フォローした特集や連載はいつでも解除可能です</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    $('#modalWrap').empty().append(slidefollowfirst);
    setSwiperFollow();
  }

  function appendFollowDone() {
    const domPC = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">フォローしました</div>' +
      '<a href="' + BASE_MYPAGE_URL + '/follow/" class="btn is-secondary is-l">フォローした特集・連載の一覧を見る</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    const domSP = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">フォローしました</div>' +
      '<a href="' + BASE_MYPAGE_URL + '/follow/" class="btn is-secondary is-l">フォロー一覧を見る</a>' +
      '<a href="' + BASE_MYPAGE_URL + '/app/follow.html" class="btn is-secondary is-l">アプリでフォロー一覧を見る</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    const dom = pageDevice === 'PC' ? domPC : domSP;

    $('#modalWrap').empty().append(dom).hide().fadeIn('fast');
  }

  function appendUnFollowDone(channelid) {
    const domPC = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">フォロー解除しました</div>' +
      '<a data-channelid="' + channelid + '" href="" class="btn is-tertiary is-l js-channelfollow">元に戻す</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    const domSP = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">フォロー解除しました</div>' +
      '<a data-channelid="' + channelid + '" href="" class="btn is-tertiary is-l js-channelfollow">元に戻す</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    const dom = pageDevice === 'PC' ? domPC : domSP;

    $('#modalWrap').empty().append(dom).hide().fadeIn('fast');
  }

  function showLoading() {
    const slideloading = '<div class="mypage-modal-loading">' +
      '<div class="mypage-modal-loader">Loading...</div>' +
      '</div>';

    $('#modalWrap').empty().append(slideloading).hide().fadeIn('fast');
  }

  function showStockKijiFirst() {
    const slidesavefirst =
      '<div class="mypage-modal is-wide">' +
      '<div class="mypage-modal-inner">' +
      '<div class="mypagephotolist">' +
      '<div class="mypagephotolist-main-wrapper">' +
      '<div class="mypagephotolist-main swiper-save" id="swiper-save">' +
      '<ul class="mypagephotolist-main-list swiper-wrapper">' +
      '<li class="swiper-slide">' +
      '<div class="mypagephotolist-main-item image-mask">' +
      '<figure>' +
      '<img src="' + BASE_CDN_URL + '/vol1/images/v2/pc/mypage/img_slide_stock_01.png" alt="">' +
      '</figure>' +
      '</div>' +
      '<div class="mypagephotolist-title">カンタンに記事を保存</div>' +
      '<p>気になった記事は保存ボタンを押すだけでカンタンに保存！</p>' +
      '</li>' +
      '<li class="swiper-slide">' +
      '<div class="mypagephotolist-main-item image-mask">' +
      '<figure>' +
      '<img src="' + BASE_CDN_URL + '/vol1/images/v2/pc/mypage/img_slide_stock_02.png" alt="">' +
      '</figure>' +
      '<div class="mypagephotolist-title">記事にメモができる</div>' +
      '<p>記事にはメモを追加でき、あとから見直してもわかりやすい！</p>' +
      '</div>' +
      '</li>' +
      '<li class="swiper-slide">' +
      '<div class="mypagephotolist-main-item image-mask">' +
      '<figure>' +
      '<img src="' + BASE_CDN_URL + '/vol1/images/v2/pc/mypage/img_slide_stock_03.png" alt="">' +
      '</figure>' +
      '</div>' +
      '<div class="mypagephotolist-title">マイページで検索や編集も</div>' +
      '<p>記事はマイページから検索したり編集できる！</p>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="swiper-button-prev"></div>' +
      '<div class="swiper-button-next"></div>' +
      '<div class="swiper-pagination"></div>' +
      '</div>' +
      '</div>' +
      '<div class="mypage-modal-buttons-first">' +
      '<a href="#" class="btn is-primary is-l js-kijistock" data-newsid="' + newsItemId + '">この記事を保存する</a>' +
      '<span class="mypage-modal-note">保存した記事はいつでも解除可能です</span>' +
      '</div>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    $('#modalWrap').empty().append(slidesavefirst).hide().fadeIn('fast');

    new Swiper('#swiper-save', {
      loop: false,
      speed: 600,
      spaceBetween: 24,
      centeredSlides: true,
      loopAdditionalSlides: 20,
      direction: "horizontal",
      effect: "slide",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  function doneStockKiji() {
    const domPC = '<div class="mypage-modal is-memo">' +
      '<div class="mypage-modal-memo-inner">' +
      '<div class="mypage-modal-memo-lead">記事を保存しました</div>' +
      '<a href="' + BASE_MYPAGE_URL + '/stock/" class="btn is-secondary is-l">保存した記事の一覧を見る</a>' +
      '<div class="mypage-modal-memo-form">' +
      '<div class="mypage-modal-memo-formlabel">メモを追加</div>' +
      '<div class="mypage-modal-memo-formwrap">' +
      '<textarea id="memo-modalform" type="text" name="mypage_memo_modal" placeholder="保存した記事にお好きなメモを追加できます（例：クライアントへの提案資料で使用など） ※メモは後からでも追加できます" maxlength="1000"></textarea>' +
      '<div class="mypage-modal-memo-right">'+
      '<div class="mypage-modal-memo-attention"></div>' +
      '<div class="mypage-modal-memo-formcount js-memocount"></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="mypage-modal-memo-bottom">' +
      '<a href="#" class="btn is-closememo js-modalclose">閉じる</a>' +
      '<a href="#" class="btn is-savememo js-savemodalmemo">メモを追加</a>' +
      '</div>' +
      '</div>';

    const domSP = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">記事を保存しました</div>' +
      '<a href="' + BASE_MYPAGE_URL + '/stock/" class="btn is-secondary is-l">保存記事の一覧を見る</a>' +
      '<a href="' + BASE_MYPAGE_URL + '/app/stock.html" class="btn is-secondary is-l">アプリで保存記事の一覧を見る</a>' +
      '<a href="" class="btn is-secondary is-l js-showmodalmemo">メモを追加する</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    if(pageDevice === 'PC'){
      $('#modalWrap').empty().append(domPC).hide().fadeIn('fast');
      $('#memo-modalform').setMemoCount();
    } else {
      $('#modalWrap').empty().append(domSP).hide().fadeIn('fast');
    }
  }

  function showDelStock() {
    const slidesave = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead is-withnote">この保存記事を削除します</div>' +
      '<div class="mypage-modal-note mb-m">※メモも削除されます、復元できません</div>' +
      '<a href="" class="btn is-attention is-l js-delstock">削除</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    $('#modalWrap').empty().append(slidesave).hide().fadeIn('fast');
  }

  function showModalMemo() {
    const thumburl = $('meta[property="og:image"]').attr('content') || '';
    const midashi = $('.articledetail-head h1').text() || '';

    $(".articledetail-head h1").text();
    const dom = '<div class="mypage-modal-memosp">' +
      '<div class="mypage-modal-memosp-card">' +
      '<div class="mypage-modal-memosp-head">メモを追加</div>' +
      '<div class="mypage-modal-memosp-inner">' +
      '<p class="mypage-modal-memosp-text">保存した記事にお好きなメモを追加できます</p>' +
      '<div class="mypage-modal-memosp-kiji">' +
      '<div class="mypage-modal-memosp-kijititle">' + midashi + '</div>' +
      '<div class="mypage-modal-memosp-kijiimg" style="background-image:url(' + thumburl + ')"></div>' +
      '</div>' +
      '<textarea id="memo-modalform" type="text" name="mypage_memo_modal" placeholder="例：クライアントへの提案資料で使用など ※メモは後からでも追加できます" maxlength="1000"></textarea>' +
      '<div class="mypage-modal-memosp-right">'+
      '<div class="mypage-modal-memosp-attention"></div>' +
      '<div class="mypage-modal-memosp-formcount js-memocount"></div>' +
      '</div>' +
      '<div class="mypage-modal-memosp-buttons">'+
      '<div class="btn is-primary is-l js-savemodalmemo">保存</div>' +
      '<div class="mypage-modal-memosp-sublink js-backdonestock">戻る</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

    $('#modalWrap').empty().append(dom).hide().fadeIn('fast');
    $('#memo-modalform').setMemoCount();
    $('#memo-modalform').focus();
  }

  function appendUnSaveDone() {
    const slidesave = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">保存記事を削除しました</div>' +
      '<a data-newsid="' + newsItemId + '" href="" class="btn is-tertiary is-l js-kijistock">元に戻す</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    $('#modalWrap').empty().append(slidesave).hide().fadeIn('fast');
  }

  function setSwiperFollow() {
    if ($('#swiper-follow').length) {
      const mypageSliderF = new Swiper('#swiper-follow', {
        loop: false,
        speed: 600,
        spaceBetween: 24,
        centeredSlides: true,
        loopAdditionalSlides: 20,
        direction: "horizontal",
        effect: "slide",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }

  function changeFollowButton(active) {
    if (active) {
      const textFollow = $('.js-follow-feature').text().match(/連載/) ? 'この連載をフォロー中' : 'この特集をフォロー中';
      $('.js-follow-feature').addClass('is-active');
      $('.js-follow-feature').text(textFollow);
    } else {
      const textFollow = $('.js-follow-feature').text().match(/連載/) ? 'この連載をフォロー' : 'この特集をフォロー';
      $('.js-follow-feature').removeClass('is-active');
      $('.js-follow-feature').text(textFollow);
    }
  }

  function changeSaveButton(active) {
    if (active) {
      $('.tool-save').addClass('is-active');
      $('.tool-save').find('.js-toolsave-label').text('保存削除');
    } else {
      $('.tool-save').removeClass('is-active');
      $('.tool-save').find('.js-toolsave-label').text('保存');
    }
  }

  function changeFollowButtonSmall(e, isActive) {
    isActive
      ? $(e.currentTarget).addClass('is-active').text('フォロー中')
      : $(e.currentTarget).removeClass('is-active').text('フォロー');
  }

  function saveModalMemo() {
    if (!newsItemId || !accountId) return;

    const val = $('#memo-modalform').val();
    updateMemo(function(error, data) {
      if (error) return showErrorMes();
      showDoneSaveMemo();
      showViewHeadMemo(val);
    }, val);
  }

  function saveHeadMemo() {
    if (!newsItemId || !accountId) return;

    const val = $('#memo-headform').val();
    updateMemo(function(error, data) {
      if (error) return showErrorMes();
      showModalBase();
      showDoneSaveMemo();
      showViewHeadMemo(val);
    }, val);
  }

  function showViewHeadMemo(memo) {
    const memoTextHtml = !memo ? '<div class="mypage-memo-textwrap js-showeditheadmemo"><p class="mypage-memo-text-gray">メモを追加する</p></div>' :
      '<div class="mypage-memo-textwrap js-openview"><p class="mypage-memo-text-singleline js-memotext">' + memo + '</p></div>';

    const dom = '<div class="mypage-memo">' +
      '<div class="mypage-memo-wrap">' +
      memoTextHtml +
      '<a href="" class="mypage-memo-icon-edit js-showeditheadmemo"></a>' +
      '</div>' +
      '</div>';

    if(!($('#mypage_headmemo').length)){
      const articleDetail = pageDevice === 'PC' ? $(".articledetail-body") : $(".articledetail");
      articleDetail.before('<div id="mypage_headmemo"></div>');
    }
    $('#mypage_headmemo').empty().append(domypage-memo-textwrap').after('<div class="mypage-memo-button-more-wrap"><a class="mypage-memo-button-more js-openview">もっと見る</a></div>');
      $('.js-memotext').addClass("mypage-memo-text-multiplelines");
      $('.js-memotext').removeClass("mypage-memo-text-singleline");
    }

    $(document).on('click', '.js-openview', function(e) {
      e.preventDefault();
      showMoreHeadMemo(memo);
    });

  }

  function showMoreHeadMemo(memo) {
    const dom = '<div class="mypage-memo">' +
      '<div class="mypage-memo-wrap">' +
      '<div class="mypage-memo-textwrap-more js-closeview">' +
      '<p class="mypage-memo-text-more js-memotext">' + memo + '</p>' +
      '</div>' +
      '<a class="mypage-memo-button-close js-closeview">閉じる</a>' +
      '<a href="" class="mypage-memo-icon-edit js-showeditheadmemo"></a>' +
      '</div>' +
      '</div>';

    if($('#mypage_headmemo').length){
      $('#mypage_headmemo').empty().append(dom);
    }

    $(document).on('click', '.js-closeview', function(e) {
      e.preventDefault();
      showViewHeadMemo(memo);
    });
  }

  function showEditHeadMemo() {
    const val = $('.js-memotext').text();

    const dom = '<div class="mypage-memo">' +
      '<div class="mypage-memo-wrap">' +
      '<div class="mypage-memo-textwrap-edit">' +
      '<textarea id="memo-headform" type="text" name="mypage-memo-head" rows="3" placeholder="メモをする" maxlength="1000">' + val + '</textarea>' +
      '<div class="mypage-memo-right">'+
      '<div class="mypage-memo-attention"></div>' +
      '<div class="mypage-memo-formcount js-memocount"></div>' +
      '</div>' +
      '<div class="mypage-memo-buttons">' +
      '<a class="mypage-memo-button js-canceledit">キャンセル</a>' +
      '<a class="mypage-memo-button js-saveheadmemo">保存</a>' +
      '</div>';

      if($('#mypage_headmemo').length){
        $('#mypage_headmemo').empty().append(dom);
      }
      $('#memo-headform').setMemoCount();

      $(document).on('click', '.js-canceledit', function(e) {
        e.preventDefault();
        showViewHeadMemo(val);
      });
  }

  function showDoneSaveMemo() {
    const domPC = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">メモを追加しました</div>' +
      '<a href="#" class="btn is-tertiary is-l js-modalclose">閉じる</a>' +
      '</div>' +
      '</div>';

    const domSP = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead">メモを追加しました</div>' +
      '<a href="' + BASE_MYPAGE_URL + '/stock/" class="btn is-secondary is-l">保存記事の一覧を見る</a>' +
      '<a href="' + BASE_MYPAGE_URL + '/stock/" class="btn is-secondary is-l">アプリで保存記事の一覧を見る</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    const dom = pageDevice === 'PC' ? domPC : domSP;

    $('#modalWrap').empty().append(dom);
  }

  function showErrorMes() {
    const errorhtml = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead is-message">エラーが発生しました。お手数をおかけいたしますが、再度ログインをお願いします。</div>' +
      '<a href="#" class="btn is-tertiary is-l js-modalclose">閉じる</a>' +
      '</div>' +
      '</div>';

    showModalBase();
    $('#modalWrap').empty().append(errorhtml);
  }

  function showMaxFollowMes() {
    const errorhtml = '<div class="mypage-modal">' +
      '<div class="mypage-modal-buttons">' +
      '<div class="mypage-modal-lead is-message">フォローは300件までです。フォロー中の連載などを解除して新たにフォローしてください。</div>' +
      '<a href="#" class="btn is-tertiary is-l js-modalclose">閉じる</a>' +
      '</div>' +
      '</div>';

    showModalBase();
    $('#modalWrap').empty().append(errorhtml);
  }

  function showNeedLoginFollow(e) {
    const dom = '<div class="mypage-tooltip" id="tooltip_follow">' +
      '<div class="mypage-tooltip-attention">毎日ID会員登録でご利用になれます</div>' +
      '<div class="mypage-tooltip-title">気になる特集・連載をフォローすると<br class="disp-sp">ニュースがもっと便利に！</div>' +
      '<p>フォローすることで、新しい記事の更新や過去の記事がマイページで簡単にチェックできます</p>' +
      '<div class="mypage-tooltip-buttons">' +
      '<a href="/mypage/help/" class="textlink is-secondary">詳しくはこちら</a>' +
      '<a href="/info/" class="btn is-primary">新規会員登録</a>' +
      '<a href="/signup/accounts/free/login/?ru=' + location.href + '" class="btn is-secondary">ログイン</a>' +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    if (pageDevice === 'PC') {
      showModalBaseNofade();
      $('body').append(dom);
      const targetEl = $(e.target);
      const tooltip = $('#tooltip_follow');

      const a = tooltip.outerWidth() * 0.5;
      const b = targetEl.outerWidth() * 0.5;
      const setLeft = targetEl.offset().left + b - a;
      const setTop = targetEl.offset().top + targetEl.outerHeight() + 17;

      tooltip.css('top', setTop + 'px');
      tooltip.css('left', setLeft + 'px');
      tooltip.fadeIn('fast');
    } else {
      showModalBase();
      $('#modalWrap').empty().append(dom);
      $('#tooltip_follow').fadeIn('fast');
    }
  }

  function showPaidMemberOnly() {
    if(pageDevice == "PC"){
      $('#modalBg').css('background-color', 'transparent');
    }
    $('#modalWrap').empty();
    _stockKijiBox('<a href="/info/" class="btn is-primary">有料プランを見る</a>');
  }

  function showNeedLoginStockKiji() {
    _stockKijiBox('<a href="/info/" class="btngnup/accounts/free/login/?ru=' + location.href + '" class="btn is-secondary">ログイン</a>');
  }

  function _stockKijiBox(child) {
    const dom = '<div class="mypage-tooltip" id="tooltip_save">' +
      '<div class="mypage-tooltip-attention is-limited">この機能は有料会員限定です</div>' +
      '<div class="mypage-tooltip-title">最大5年間、記事の保存が可能！</div>' +
      '<p>フォローできる記事だけでなく単体の記事もメモを付けて保存ができます</p>' +
      '<div class="mypage-tooltip-buttons">' +
      '<a href="/mypage/help/" class="textlink is-secondary">詳しくはこちら</a>' +
      child +
      '</div>' +
      '<div class="mypage-modal-close js-modalclose"></div>' +
      '</div>';

    if (pageDevice === 'PC') {
      showModalBaseNofade();
      $('body').append(dom);
      const tooltip = $('#tooltip_save');

      const a = tooltip.outerHeight() * 0.5;
      const b = $('.js-toolsave').outerHeight() * 0.5;
      const setLeft = $('.js-toolsave').offset().left + $('.js-toolsave').outerWidth() + 20;
      const setTop = $('.js-toolsave').offset().top - a + b;

      tooltip.css('top', setTop + 'px');
      tooltip.css('left', setLeft + 'px');
      tooltip.fadeIn('fast');
    } else {
      showModalBase();
      $('#modalWrap').empty().append(dom);
      $('#tooltip_save').fadeIn('fast');
    }
  }

  function showModalBase(loading) {
    const modalhtml = '<section id="modalArea" class="mypage-modal-area">' +
      '<div id="modalBg" class="mypage-modal-bg js-modalclose"></div>' +
      '<div id="modalWrap" class="mypage-modal-wrapper"></div>' +
      '</section>'

    if (!($('#modalArea').length)) {
      $('body').append(modalhtml);
    }

    $('#modalArea').fadeIn().css('display', 'fixed');

    if(loading){
      const slideloading = '<div class="mypage-modal-loading">' +
      '<div class="mypage-modal-loader">Loading...</div>' +
      '</div>';

      $('#modalWrap').empty().append(slideloading).hide().fadeIn('fast');
    }

    // 動画広告のFixed表示を解除
    if ($('#ad-sp-article-banner1 iframe').length) {
      $('#ad-sp-article-banner1 iframe').css({'position':'relative','z-index':'0','top':'initial','left':'initial'});
    }
  }

  function showModalBaseNofade() {
    const modalhtml = '<section id="modalArea" class="mypage-modal-area">' +
      '<div id="modalBg" class="mypage-modal-bg-nofade js-modalclose"></div>' +
      '</section>'

    if (!($('#modalArea').length)) {
      $('body').append(modalhtml);
    }

    $('#modalArea').fadeIn().css('display', 'fixed');
  }

  function removeModalBase() {
    if ($('#modalArea').length) {
      $('#modalArea').fadeOut(200, function() {
        $(this).remove();
      });
    }
  }

  function hidePaidMemberParts() {
    const userSession = $.cookie('es_sessiontoken');
    if (!userSession) return false;

    // 有料会員情報を取得
    getPaidMember(function(error, data) {
      if (error) return false;
      if (data.paid){
        $('#paidmemberParts').hide();
      }
    }, userSession);
  }

  function notEmpty(value) {
    let result;
    switch (typeof value) {
      case "string":
        result = value && value != 0;
        break;
      case "object":
        result = value && Object.keys(value).length;
        break;
      default:
        result = value;
    }
    return Boolean(result);
  }
});

$.fn.setMemoCount = function(){
  const maxLength = 1000;
  const self = this;
  const counttext = self.next().find('.js-memocount');

  counttext.text(self.val().length + '/' + maxLength);

  self.on('keydown keyup keypress change', function() {
    counttext.text($(this).val().length + '/' + maxLength);
    if($(this).val().length >= maxLength){
      counttext.prev().text(maxLength + '文字までです');
      const inputtext = $(this).val().substr(0, maxLength);
      $(this).val(inputtext);
      counttext.text(maxLength + '/' + maxLength);
    } else {
      counttext.prev().text('');
    }
  });
  return this;
}

}());
