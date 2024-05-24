BrightTag.site('2EAwPRw,fxuCSgZ,BqUkFaL,0s9n8UO',function(s){
s.domready(function(){
s.tag('\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22//jp-tags.mediaforge.com/js/3036/\x22\x3e\x3c/script\x3e',{tagId:3158247});
});
});
indow.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;recommend_pc_item_detail: 100,
      recommend_sp: 30,
      recommend_sp_top: 15,
    },
    device: {
      pc: 1,
      sp: 2
    },
    sex: {
      ladies: 1,
      men: 2,
      kids:4
    },
    url_part_key: {
      'item_pc'      : 'l2-id=brn_item_recommend',
      'item_sp'      : 'l2-id=brn_item_recommend',
      'top_all_pc'   : 's-id=brn_top_recommend',
      'top_women_pc' : 's-id=brn_top_recommend',
      'top_men_pc'   : 's-id=brn_men_recommend',
      'top_kids_pc'  : 's-id=brn_kids_recommend',
      'top_all_sp'   : 's-id=brn_top_recommend',
      'top_women_sp' : 's-id=brn_top_recommend',
      'top_men_sp'   : 's-id=brn_men_recommend',
      'top_kids_sp'  : 's-id=brn_kids_recommend',
      'shoptop_pc'   : 's-id=brn_shop_recommend',
      'shoptop_sp'   : 's-id=brn_shop_recommend',
      'genre1_pc'    : 's-id=brn_category_recommend',
      'genre1_sp'    : 's-id=brn_category_recommend',
      'genre2_pc'    : 's-id=brn_category_recommend',
      'genre2_sp'    : 's-id=brn_category_recommend',
      'search_pc'    : 's-id=brn_search_recommend',
      'search_sp'    : 's-id=brn_search_recommend'
    },
    recommend_title: {
      'title'      : 'おすすめアイテム',
      'item_title' : 'おすすめのアイテム',
    },
    site_cd: {
      'ba'    : '01',
      'luxury'  : '13'
    },
    botton: {
      'more_botton' : 'もっと見る',
      'close_botton': '閉じる'
    }
  };

  // --------------------------
  // 共通変数
  // --------------------------
  var vars = {
    device: 1,
    site: conf.site_cd.ba,
  };

  //商品画像パス
  var productImgPath = $(this).imageUrl();

  // リロード判定変数
  var isReload = window.performance.navigation.type === 1;
  // ブラウザバック用判定変数
  var isBackForward = window.performance.navigation.type === 2;

  var gender = [conf.sex.ladies,conf.sex.men,conf.sex.kids];
  var TopPC = ['top_all_pc','top_women_pc','top_men_pc','top_kids_pc'];
  var TopSP = ['top_all_sp','top_women_sp','top_men_sp','top_kids_sp'];

  // ポイント情報表示判定用
  const isShowPointInfo = true;

  // itempage判定用変数
  const isItemPage = location.pathname.toLowerCase().match(/^\/item\/[A-z0-9]{2}\d{4}/);

  $(function () {
    $('.itemlist').each(function () {

      var thisObj = $(this), props = {};
      if (thisObj.attr('data-sid') == null ) return;
      props.device   = thisObj.attr('data-device') != null ? thisObj.attr('data-device') : 1;
      props.Id       = thisObj.attr('data-recoid');
      props.siteCd   = thisObj.attr('data-site-cd') != null ? thisObj.attr('data-site-cd') : conf.site_cd.ba;
      props.sid      = thisObj.attr('data-sid');
      props.urlPartKey  = $('#rat_recommend_rpl').val();

      var pid = '';
      if (thisObj.attr('data-id') != null) {
        props.url = $('#recommend_api_url').val() + props.urlPartKey;
        props.url += '?id=' + thisObj.attr('data-id');
        pid = thisObj.attr('data-id');
      } else if ($.inArray(props.urlPartKey, TopPC) !== -1) {
        props.url = $('#recommend_api_url').val() + 'top_pc';
        if ($.inArray(Number($('#rat_recommend_sex').val()), gender) !== -1) {
          props.url += '?id=' + $('#rat_recommend_sex').val();
          pid = $('#rat_recommend_sex').val();
        }
      } else if ($.inArray(props.urlPartKey, TopSP) !== -1) {
        props.url = $('#recommend_api_url').val() + 'top_sp';
        if ($.inArray(Number($('#rat_recommend_sex').val()), gender) !== -1) {
          props.url += '?id=' + $('#rat_recommend_sex').val();
          pid = $('#rat_recommend_sex').val();
        }
      } else {
        props.url = $('#recommend_api_url').val() + props.urlPartKey;
      }

      props.dataType = 'json';
      // RATレコメンドON、OFFフラグ
      var rat_recommend_flg = true;
      // 画面ごとのデータを格納
      var page_info = new Array();
      // トップ、商品詳細、ショップトップ用データ
      page_info['acc'] = parseInt($('#rat_recommend_acc').val(), 10);
      page_info['aid'] = parseInt($('#rat_recommend_aid').val(), 10);
      var rba_genderid = ($('#rat_recommend_sex').val() !== void 0) ? $('#rat_recommend_sex').val() : '';
      rba_genderid = rba_genderid.toString();
      page_info['rba_genderid'] = [rba_genderid];
      var rba_iid = ($('#rat_recommend_rba_id').val() !== void 0) ? $('#rat_recommend_rba_id').val() : '';
      page_info['rba_itemid'] = [rba_iid.toLowerCase()];
      var rba_itemid = ($('#rat_recommend_rba_itemid').val() !== void 0) ? $('#rat_recommend_rba_itemid').val() : '';
      var rba_shop_id = parseInt($('#rat_recommend_shop_id').val(), 10);
      page_info['itemid'] = [rba_shop_id + "/" + rba_itemid];
      var rba_shopid = ($('#rat_recommend_rba_shopid').val() !== void 0) ? $('#rat_recommend_rba_shopid').val() : '';
      rba_shopid = rba_shopid.toString();
      var rba_genreid1 = ($('#rat_recommend_rba_genreid1').val() !== void 0) ? $('#rat_recommend_rba_genreid1').val() : '';
      page_info['rba_genreid1'] = [rba_genreid1];
      var rba_genreid2 = ($('#rat_recommend_rba_genreid2').val() !== void 0) ? $('#rat_recommend_rba_genreid2').val() : '';
      page_info['rba_genreid2'] = [rba_genreid2];
      page_info['rba_shopid'] = [rba_shopid];
      page_info['url_part_key'] = props.urlPartKey;
      page_info['pid'] = pid;

      let recommend_title;
      if (isItemPage) {
        recommend_title = conf.recommend_title.item_title;
      } else {
        recommend_title = conf.recommend_title.title;
      }
      $('#recommend_title').append(recommend_title);


      if (props.url !== void 0) {
        // --------------------------
        // 非同期
        // --------------------------
        $.ajax({
          url: props.url,
          cache: false,
          xhrFields: {withCredentials: true},
          dataType: props.dataType,
          scriptCharset: 'UTF-8',
          timeout: 3500,
          success: function (data) {
            vars.device = props.device;
            if ((isItemPage && data.status == 'Success' && data.reco_count > 0) ||
              (data.status == 'Success' && data.reco_count >= thisObj.data('count'))) {
              page_info['sid'] = (data.sid !== void 0) ? data.sid : '';

              // vip shopの判定フラグ
              var vip_flg = $(this).checkPartsHide();
              var rba_brand_name = thisObj.attr('data-brand-name') != null ? thisObj.attr('data-brand-name') : '';
              if (vip_flg) {
                data.reco = data.reco.filter(reco_data => reco_data.brand_name == rba_brand_name);
                data.reco_count = data.reco.length;
              }

              if (isItemPage) {
                // pc,spの初期表示件数、最大表示件数取得
                let max_count = 0;
                if (vars.device == conf.device.sp) {
                  if (data.reco_count > conf.maxCount.recommend_sp){
                    max_count = conf.maxCount.recommend_sp;
                  } else if(data.reco_count > 0) {
                    max_count = data.reco_count;
                  }
                  page_info['rpp'] = [0, max_count];
                } else {
                  const max = conf.maxCount.recommend_pc_item_detail;
                  max_count = data.reco_count > max ? max : data.reco_count;
                  const count = thisObj.data('count') > data.reco_count ? data.reco_count : thisObj.data('count');
                  page_info['rpp'] = [0, count];
                }
                // HTML出力
                $(this).getRecommend(data.reco, props.siteCd, thisObj, props.urlPartKey, max_count, null);
              } else {
                // pc,spの初期表示件数、最大表示件数取得
                if (vars.device == conf.device.sp) {
                  var topFlg = thisObj.data('top-flg');
                  var max = topFlg ? conf.maxCount.recommend_sp_top : conf.maxCount.recommend_sp;
                  var response_length_sp = data.reco_count > max ? max : data.reco_count;
                  var max_count = response_length_sp - (response_length_sp % thisObj.data('count'));
                  if (topFlg) {
                    var display_count = response_length_sp > conf.initCount.recommend_sp_top ? conf.initCount.recommend_sp_top : max_count;
                    page_info['rpp'] = [0, display_count];
                  } else {
                    page_info['rpp'] = [0, max_count];
                  }
                } else {
                  var max = page_info['url_part_key'] === 'item_pc' ? conf.maxCount.recommend_pc_item_detail : conf.maxCount.recommend_pc;
                  var response_length_pc = data.reco_count > max ? max : data.reco_count;
                  var max_count = response_length_pc - (response_length_pc % thisObj.data('count'));
                  page_info['rpp'] = [0, thisObj.data('count')];
                }
                // HTML出力
                $(this).getRecommend(data.reco, props.siteCd, thisObj, props.urlPartKey, max_count, topFlg);
              }

              // アイテムページの場合におすすめアイテムのハートアイコンのRATイベント登録
              if (isItemPage) {
                if (vars.device == conf.device.pc) {
                  setDynamicProductFavoriteEvent({
                    open: 'div#recommend_parts button.dynamic-product-favorite',
                    trackingCd : 'brn_item_recommend_favorite',
                  });
                } else {
                  // 動的商品リストモーダルをセットアップする
                  setUpFavoriteSKUModal({
                    modal: '.dynamic-product-modal',
                    open: 'div#recommend_parts button.dynamic-product-favorite',
                    content: '.dynamic-product-modal-contents',
                    trackingCd : 'brn_item_recommend_favorite',
                  });
                }
              }

              if (props.Id != null) $('#' + props.Id).show();

              if (isItemPage) {
                // おすすめアイテム描画後、お気に入り登録済みのアイテムのハートマークをピンクにする
                setupFavorites('div#recommend_parts button.dynamic-product-favorite');
              }

              // ポイント情報取得
              if (isShowPointInfo && isItemPage) {
                const bdgUrl = $('#bdg_url').val();
                const bdgApiKey = $('#bdg_api_key').val();
                const ncpParams = data.reco.reduce((acc, curr) => {
                  if (curr.item_id) {
                    acc.push({
                      itemId: curr.item_id.toString(),
                      variantId: curr.variant_id,
                      data: {
                        genreId: curr.genre_id,
                        itemType: curr.item_type,
                        taxIncluded: true,
                        price: curr.selling_price_tax.toString(),
                      },
                    });
                  }
                  return acc;
                }, [])
                $(this).getPointInfo(bdgUrl, bdgApiKey, rba_shop_id, ncpParams);
              }

              // slick設定
              if (props.device == conf.device.pc) {
                slickFunc(thisObj, page_info, data.reco)
                slickGoTo(thisObj, 'recommendSlickInfo');
                sessionStorage.removeItem('recommendSlickInfo');
              } else {
                if (!topFlg) {
                  $('#' + conf.partsId).show();
                }
                // 開閉処理
                toggleButtonEvent(thisObj, page_info, data.reco, topFlg, max_count);
                // ブラウザバック時開閉処理
                if (isBackForward) {
                  if (sessionStorage.getItem("toggleList") !== null) {
                    var toggleList = JSON.parse(sessionStorage.getItem("toggleList"));
                    if (toggleList.before_page !== undefined) {
                      if (toggleList.before_page.recommend_toggle !== undefined && toggleList.before_page.recommend_toggle === 0) {
                        // 開閉挙動ファンクション
                        var btnPartsId = $('#' + conf.partsId).next();
                        $(btnPartsId).rbaCloseMainToggleOther();
                      }
                    }
                  }
                }
              };

              // ログイン後のitempageの時のみ、かつURLにfav_proceed_sku_cdを含んでいればパーツの先頭にスクロールする
              if (isItemPage && !isReload && !isBackForward
                  && sessionStorage.getItem('favTarget') !== null && sessionStorage.getItem('favTarget') === 'fav_recommend'){
                const scrollRestoration = history.scrollRestoration;
                // スクロール位置を復元するため、history.scrollRestorationをmanualにセット
                history.scrollRestoration = 'manual';
                // スクロール位置を復元
                window.location.hash = '#recommend_parts';
                // favTargetをクリア
                sessionStorage.removeItem('favTarget');
                // history.scrollRestorationを元に戻す
                history.scrollRestoration = scrollRestoration;
              } else if (sessionStorage.getItem('favTarget') !== null && sessionStorage.getItem('favTarget') === 'fav_recommend') {
                // favTargetをクリア
                sessionStorage.removeItem('favTarget');
              }

              // RecommendRat送信
              if (rat_recommend_flg) {
                getRatRecommend(page_info, data.reco);
              }
            } else {
              if (props.Id != null) $('#' + props.Id).hide();
            }

          }
        });
      }
    })

    // --------------------------
        // レコメンド用RAT出力関数
    // --------------------------
    function getRatRecommend(page_info, recommend_info) {
      var customEvent = {};
      var recommendItem = new Array();
      var rat_tracking = new Array();
      var recommend_cd = ['top_all_pc','top_women_pc','top_men_pc','top_kids_pc','top_all_sp','top_women_sp','top_men_sp','top_kids_sp'];

      $.each(recommend_info,function() {
        recommendItem.push(this['model_cd']);
        rat_tracking.push(this['rtg']);
      });

      // Recommendチーム指定のacc_aid
      customEvent.accountId = page_info['acc'];
      customEvent.serviceId = page_info['aid'];

      customEvent.includeInput = true;

      // pData=GenericParameter, cpData=CustomParameter, cvData=ConversionParameter
      if ($.inArray(page_info['url_part_key'], recommend_cd) >= 0) {
        if ($.inArray(page_info['url_part_key'], TopPC) >= 0) {
          var rec_rpl = 'top_pc';
        } else {
          var rec_rpl = 'top_sp';
        }
        if(page_info['pid'] != '') {
          customEvent.cpData = {
            "rec_srv"      : "fashion",
            "rba_genderid" : page_info['rba_genderid'],
            "rec_id"       : recommendItem,
            "rec_rtg"      : rat_tracking,
            "evn"          : "reco",
            "rec_rpl"      : rec_rpl,
            "rec_rpp"      : page_info['rpp'],
            "rec_pid"      : page_info['pid'],
            "rba_shopid"   : page_info['rba_shopid'],
            "genreid_1"    : page_info['rba_genreid1'],
            "genreid_2"    : page_info['rba_genreid2'],
            "rec_sid"      : page_info['sid'],
          };
        } else {
          customEvent.cpData = {
            "rec_srv"      : "fashion",
            "rba_genderid" : page_info['rba_genderid'],
            "rec_id"       : recommendItem,
            "rec_rtg"      : rat_tracking,
            "evn"          : "reco",
            "rec_rpl"      : rec_rpl,
            "rec_rpp"      : page_info['rpp'],
            "rba_shopid"   : page_info['rba_shopid'],
            "genreid_1"    : page_info['rba_genreid1'],
            "genreid_2"    : page_info['rba_genreid2'],
            "rec_sid"      : page_info['sid'],
          };
        };
      } else {
        customEvent.cpData = {
          "rec_srv"      : "fashion",
          "rba_genderid" : page_info['rba_genderid'],
          "rec_id"       : recommendItem,
          "rec_rtg"      : rat_tracking,
          "evn"          : "reco",
          "rec_rpl"      : page_info['url_part_key'],
          "rec_rpp"      : page_info['rpp'],
          "rec_pid"      : page_info['pid'],
          "rba_shopid"   : page_info['rba_shopid'],
          "genreid_1"    : page_info['rba_genreid1'],
          "genreid_2"    : page_info['rba_genreid2'],
          "rec_sid"      : page_info['sid'],
        };
      }

      customEvent.cvData = {};

      customEvent.options = ["url", "ua"];

      customEvent.eventType = 'appear';

      // customEventをRATに送信します(rat-mai n.js必須)
      RAT.addCustomEvent(customEvent);
    };

    // --------------------------
    // HTML描画用関数
    // --------------------------
    $.fn.extend({
      /**
       * recommend
       *
       */
      getRecommend: function (json_response, siteCd, thisObj, urlPartKey, max_count, top_flg) {
        var html = '';
        var recommend_title = conf.recommend_title.title;
        // サイカタ用パス取得
        var url_key_list = conf.url_part_key;

        var url_key_path = url_key_list[urlPartKey];

        // 商品詳細画面の場合
        if (isItemPage) {
          // PC
          if (vars.device == conf.device.pc) {
          // レコメンドパーツPC HTML生成
            thisObj.attr('slick-rows', json_response.length);
            $.each(json_response, function (i, item) {
              const model_cd = item.model_cd;
              if (i < max_count) {
                // 商品リンク生成
                let item_link = '/item/' + item.id + '/?recommend=1&' + url_key_path;
                if (item.rtg != null) {
                  item_link = item_link + '&rtg=' + item.rtg;
                }
                // 画像リンク生成
                let img_link = getImgUrl(item.id, item.product_img_info[0].product_img_path);

                html += '<li class="dynamic-product-item" data-item-id="' + item.item_id + '">';
                html += '  <a class="dynamic-product-link" href="' + item_link + '">';
                html += '   <img class="dynamic-product-image" src="' + img_link + '"  loading="lazy" alt="' + thisObj.htmlEscape(item.product_name) + '" width="190" height="228" />';
                if (item.coupon_flg) {
                  html += '<span class="dynamic-product-coupon">クーポン対象</span>'
                }
                html += '   <button class="dynamic-product-favorite" id="'+ model_cd +'" data-model=' + model_cd + ' tabIndex="0" data-favPart="fav_recommend">';
                html += '     <i class="material-icons">favorite_border</i>';
                html += '   </button>';
                html += '  </a>';

                html += '<div class="dynamic-product-info">'
                html += '  <p class="dynamic-product-info-name">' + thisObj.htmlEscape(item.brand_name) + '</p>';
                html += '  <p class="dynamic-product-info-category">' + thisObj.htmlEscape(item.category_m_name) + '</p>';
                if (item.discount_rate > 0) {
                  html += '  <p class="dynamic-product-info-price dynamic-product-info-price-sale">';
                  html += '    <span class="dynamic-product-info-price-value">' + item.selling_price_tax.toLocaleString() + ' ';
                  html += '      <span class="dynamic-product-info-price-value-unit">円</span>'
                  html += '    </span>';
                  html += '    <span class="dynamic-product-info-price-off">' + item.discount_rate + '% OFF</span>';
                  html += '  </p>';
                } else {
                  html += '  <p class="dynamic-product-info-price">';
                  html += '    <span class="dynamic-product-info-price-value">' + item.fixed_price_tax.toLocaleString() + ' ';
                  html += '      <span class="dynamic-product-info-price-value-unit">円</span>'
                  html += '    </span>';
                  html += '  </p>';
                }
                html += '</p>';
                html += '</li>';
              }
            });
            thisObj.append(html);
          // SP
          } else {
            // レコメンドパーツSP HTML生成
            html += '<ul class="dynamic-product-list">';

            $.each(json_response, function (i, item) {
              const model_cd = item.model_cd;
              if (i < max_count) {
              // 商品リンク生成
                let item_link = '/item/' + item.id + '/?recommend=1&' + url_key_path;
                if (item.rtg != null) {
                  item_link = item_link + '&rtg=' + item.rtg;
                }
                // 画像リンク生成
                let img_link = getImgUrl(item.id, item.product_img_info[0].product_img_path);

                // 商品画像
                html += '<li class="dynamic-product-item">';
                html += '  <a class="dynamic-product-link" href="' + item_link +'" >';
                html += '    <img class="dynamic-product-image" alt="' + thisObj.htmlEscape(item.product_name) + '" loading="lazy" src=' + img_link + ' width="190" height="228">';
                if (item.coupon_flg) {
                  html += '<span class="dynamic-product-coupon">クーポン対象</span>';
                }
                html += '    <button class="dynamic-product-favorite" id="'+ model_cd +'" data-model=' + model_cd + ' tabIndex="0" data-favPart="fav_recommend">';
                html += '      <i class="material-icons">favorite_border</i>';
                html += '    </button>';
                html += '  </a>';

                // 金額等の情報
                html += '  <div class="dynamic-product-info">';
                html += '    <p class="dynamic-product-info-name">' + thisObj.htmlEscape(item.brand_name) + '</p>';
                html += '    <p class="dynamic-product-info-category">' + thisObj.htmlEscape(item.category_m_name) + '</p>';
                if (item.discount_rate > 0) {
                  html += '    <p class="dynamic-product-info-price dynamic-product-info-price-sale">';
                  html += '      <span class="dynamic-product-info-price-value">' + item.selling_price_tax.toLocaleString() + ' ';
                  html += '        <span class="dynamic-product-info-price-value-unit">円</span>';
                  html += '      </span>';
                  html += '      <span class="dynamic-product-info-price-off">' + item.discount_rate + '% OFF</span>';
                  html += '    </p>'
                } else {
                  html += '    <p class="dynamic-product-info-price">';
                  html += '      <span class="dynamic-product-info-price-value">' + item.selling_price_tax.toLocaleString() + ' ';
                  html += '        <span class="dynamic-product-info-price-value-unit">円</span>';
                  html += '      </span>';
                  html += '    </p>'
                }
                html += '    <p class="dynamic-product-info-point" data-item-id="' + item.item_id + '"></p>';
                html += '  </div>';
                html += '</li>';
              }
            });
            html += '  </ul>';
            html += '</div>';
            thisObj.after(html);
          }
        }
        else {
          // PC
          if (vars.device == conf.device.pc) {
            // レコメンドパーツPC HTML生成
            $.each(json_response, function (i, item) {
              if (i < max_count) {
                // 商品リンク生成
                var item_link = '/item/' + item.id + '/?recommend=1&' + url_key_path;
                if (item.rtg != null) {
                  item_link = item_link + '&rtg=' + item.rtg;
                }
                // 画像リンク生成
                var img_link = getImgUrl(item.id, item.product_img_info[0].product_img_path);

                html += '<li>';
                html += '<div class="tlb_pic"><a href="' + item_link + '"> <img src="' + img_link + '"  class="lazy" alt="' + thisObj.htmlEscape(item.product_name) + '" class="image" /></a></div>';

                var systemDate = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
                if (item.event_type == "1" && formatDate(item.deal_from_timestamp) <= formatDate(systemDate) && formatDate(item.deal_to_timestamp) >= formatDate(systemDate)) {
                  html += '<div class="rakuten_flags"><span class="flg_deal">スーパーDEAL</span></div>';
                }

                html += '<p class="tlb_text">';
                html += '<span class="brand">' + item.brand_name + '</span>';
                if (item.discount_rate > 0) {
                  html += '  <span class="price">';
                  html += '  <span class="discount-price">';
                  html += item.selling_price_tax.toLocaleString() + '円<span class="off">' + item.discount_rate + '%OFF</span>';
                  html += '  </span>';
                  html += '  </span>';
                } else {
                  html += '  <span class="price">' + item.fixed_price_tax.toLocaleString() + '円</span>';
                }
                html += '</p>';
                html += '</li>';
              }
            });
          // SP
          } else {
            // レコメンドボタン表示
            var close_botton = conf.botton.close_botton;
            var more_button = conf.botton.more_botton;
            // 初期表示件数
            var initDisp = top_flg ? conf.initCount.recommend_sp_top : conf.initCount.default;

            // レコメンドパーツSP HTML生成
            html += '<ul class="sub-items-list">';

            $.each(json_response, function (i, item) {
              if (i < max_count) {
                // 商品リンク生成
                var item_link = '/item/' + item.id + '/?recommend=1&' + url_key_path;
                if (item.rtg != null) {
                  item_link = item_link + '&rtg=' + item.rtg;
                }
                // 画像リンク生成
                var img_link = getImgUrl(item.id, item.product_img_info[0].product_img_path);

                html += '<li class="sub-items-item">';
                html += '  <a class="clearfix" href="' + item_link +'" >';
                html += '    <img alt="' + thisObj.htmlEscape(item.product_name) + '" class="lazy" src=' + img_link + '>';
                var systemDate = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
                if (item.event_type == "1" && formatDate(item.deal_from_timestamp) <= formatDate(systemDate) && formatDate(item.deal_to_timestamp) >= formatDate(systemDate)) {
                  html += '    <span class="itemlist-grid-tile-flag itemlist-grid-tile-flag-deal">スーパーDEAL</span>';
                }
                html += '    <span class="name">' + item.brand_name + '</span>';
                if (item.discount_rate > 0) {
                  html += '    <span class="saleprice">' + item.selling_price_tax.toLocaleString() + '円' + '</span>';
                  html += '    <span class="saleoff">' + item.discount_rate + '%OFF</span>';
                } else {
                  html += '    <span class="price">' + item.fixed_price_tax.toLocaleString() + '円' + '</span>';
                }
                html += '  </a>';
                html += '</li>';
              }

              if (max_count > initDisp && i == initDisp - 1) {
                html += '</ul>'
                html += '<div class="sub-items-list-additional" id=' + conf.partsId + '>';
                html += '  <ul class="sub-items-list">';
              }
            });
            if (max_count > initDisp) {
              html += '  </ul>';
              html += '</div>';
              if (top_flg) {
                html += '<div class="openBtn open">';
                html += '  <span>' + more_button + '</span>';
                html += '</div>';
              } else {
                html += '<div class="openBtn close">';
                html += '  <span>' + close_botton + '</span>';
                html += '</div>';
              }

            }
          }
          thisObj.append(html);
        }
      },
      getPointInfo: function (url, apiKey, shopId, ncpParams) {
        const apiUrl = encodeURI(`${url}?apikey=${apiKey}`);
        const requestBody = createBenefitsCalculationRequestBody(shopId, ncpParams);

        $.ajax({
          url: apiUrl,
          type: 'POST',
          xhrFields: {
            withCredentials: false
          },
          dataType: 'json',
          data: JSON.stringify(requestBody),
          timeout: 60000
        })
          .done(function(data) {
            pointInfo = createBenefitsCalculationResponse(data);
            showPointInfo(pointInfo);
          })
          .fail(function(xhr, textStatus, errorThrown) {});
      }
    });

    // --------------------------
    // 共通関数
    // --------------------------
    /**
     * slider
     *
     */
    function slickFunc(thisObj, page_info, reco) {
      const count = thisObj.data('count');
      const breakpoint = thisObj.data('breakpoint') != null ? thisObj.data('breakpoint') : 767;
      const prevArrow = isItemPage ? '<button class="dynamic-product-slide-prev slideButton"></button>' : '<p class="sliderPrev"></p>';
      const nextArrow = isItemPage ? '<button class="dynamic-product-slide-next slideButton"></button>' : '<p class="sliderNext"></p>';

      thisObj.slick({
        slidesToShow: count,
        slidesToScroll: count,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [
          {
            breakpoint: breakpoint,
            settings: {
              slidesToShow: count,
              slidesToScroll: count,
              }
            }
          ]
        }).on('afterChange', function(event, slick, currentSlide){
          page_info['rpp'] = [currentSlide, currentSlide + count];
          getRatRecommend(page_info, reco);
        });
      }

    function slickGoTo(thisObj, sessionKey) {
      if (!isReload && !isBackForward && sessionStorage.getItem(sessionKey) !== null) {
        const rankingSlickInfo = JSON.parse(sessionStorage.getItem(sessionKey));
        let dataSlickIndex = 0;
        const sessionIndex = rankingSlickInfo.dataSlickIndex;
        if (sessionIndex !== undefined && sessionIndex < Number(thisObj.attr('slick-rows'))) {
          dataSlickIndex = sessionIndex;
        }
        thisObj.slick('slickGoTo', dataSlickIndex, true);
      }
    }

    /**
     * 商品画像変換
     *
     */
    function convertImgUrlCheck(items, s_id) {
      for (var key in items) {
        imgUrl = items[key]['imageurl'].replace('/@0_mall', '');
        imgUrl = imgUrl.replace('thumbnail.image.rakuten.co.jp/_brandavenue', productImgPath);
        imgUrl += '?fitin=160:214';

        itemUrl = items[key]['itemurlfull'].replace('item.rakuten.co.jp/_brandavenue/', 'brandavenue.rakuten.co.jp/item/');
        itemUrl = itemUrl.replace('item.rakuten.co.jp/stylife/', 'brandavenue.rakuten.co.jp/item/');
        itemUrl = itemUrl.replace('http://', '');
        itemUrlArray = itemUrl.split('/');
        itemUrlArray[4] = itemUrlArray[4].toUpperCase();
        itemUrl = itemUrlArray.join('/');
        items[key]['imageurl'] = imgUrl;
        items[key]['itemurlfull'] = itemUrl + "?" + s_id;
      }
      return items;
    }

    /**
     * 商品画像URL取得
     *
     */
    function getImgUrl(model_cd, imge_url) {
      if (isItemPage) {
        return 'https://' + productImgPath + '/cabinet/item/' + model_cd.slice(3) + '/' + imge_url.toLowerCase() + '?fitin=190:228&composite-to=center,center%7C190:228';
      } else {
        return 'https://' + productImgPath + '/cabinet/item/' + model_cd.slice(3) + '/' + imge_url.toLowerCase() + '?fitin=168:202&composite-to=center,center%7C168:202';
      }
    }

    // レコメンド開閉挙動ファンクション
    function toggleButtonEvent(thisObj, page_info, reco, top_flg, max_count) {
      thisObj.children('#' + conf.partsId).next().on('click', function () {
        // ブラウザバック時開閉状態保存処理
        var toggleList= new Array();
        if (sessionStorage.getItem("toggleList") !== null) {
          toggleList = JSON.parse(sessionStorage.getItem("toggleList"));
        } else {
          toggleList = {
            current_page : {}
          };
        }

        // 開閉挙動
        var site_cd = thisObj.attr('data-site-cd') != null ? thisObj.attr('data-site-cd') : conf.site_cd.ba;
        if ($(this).hasClass(conf.close)) {
          toggleList.current_page[conf.partsId] = 0;
          $(this).rbaCloseMainToggleOther();
        } else {
          $(this).rbaOpenMainToggleOther();
          if (top_flg && toggleList.current_page.recommend_toggle == undefined){
            page_info['rpp'] = [0, max_count];
            getRatRecommend(page_info, reco);
          }
          toggleList.current_page[conf.partsId] = 1;
        }
        sessionStorage.setItem("toggleList", JSON.stringify(toggleList));
      });
    }

    // 時間をフォーマットする
    function formatDate(time) {
      var systemDate = new Date(time);
      var year    = systemDate.getFullYear();
      var month   = ('0' + (systemDate.getMonth() + 1)).slice(-2);
      var date    = ('0' + systemDate.getDate()).slice(-2);
      var hours   = ('0' + systemDate.getHours()).slice(-2);
      var minutes = ('0' + systemDate.getMinutes()).slice(-2);

      return year + "/" + month + "/" + date + " " + hours + ":" + minutes;
    }

    const DEVICE_ID = {
      'FashionApp-jp.co.rakuten.fashion/': 27,
      'FashionApp-jp.co.rakuten.fashionAndroid/': 27,
    };

    function createBenefitsCalculationRequestBody(shopId, ncpParams) {
      const detailLevel = 'SIMPLE';

      const requestContexts = {};
      ncpParams.forEach((item) => {
        const key = JSON.stringify({
          shopId: shopId,
          itemId: item.itemId,
        });
        const context = {
          type: 'ITEM',
          value: {
            shopId: shopId,
            itemId: item.itemId,
            quantity: 1,
            variantId: item.variantId,
            data: {
              ...item.data,
              price: item.data.price.replace(/,|円/g, ''),
            },
          },
        };
        requestContexts[key] = [context];
      });

      const requestBody = {
        requestContexts,
        globalContexts: [],
        calculation: { detailLevel },
      };

      const rz = getCookie('Rz');
      if (rz) {
        requestBody.globalContexts.push({
          type: 'USER',
          value: { rz },
        });
      }

      const device = Object.keys(DEVICE_ID).find((key) => navigator.userAgent.indexOf(key) !== -1);
      if (device) {
        requestBody.globalContexts.push({
          type: 'DEVICE',
          value: { id: DEVICE_ID[device] },
        });
      }

      return requestBody;
    }

    function createBenefitsCalculationResponse(res) {
      // エラーの場合は処理をスキップ(ポイント非表示)
      if ('errors' in res) {
        return null;
      }

      const benefitsCalculationResponse = {
        results: [],
      };

      Object.keys(res.results).forEach((key) => {
        // エラーの場合は処理をスキップ
        if ('errors' in res.results[key]) {
          return;
        }

        const keyContext = JSON.parse(key);
        if (!('itemId' in keyContext)) {
          return;
        }

        benefitsCalculationResponse.results.push({
          itemId: keyContext.itemId,
          pointRate: createPointRateText(
            res.results[key].benefits.POINTS.rate,
            res.results[key].benefits.POINTS.extraRate,
            res.results[key].benefits.POINTS.backRate
          ),
          points: res.results[key].benefits.POINTS.value,
        });
      });

      return benefitsCalculationResponse;
    }

    function createPointRateText(rate, extraRate, backRate) {
      const extraRateSum = extraRate ? extraRate.reduce((acc, curr) => acc + curr.value, 0) : 0;
      const extraRateSumText = extraRateSum ? `+${extraRateSum}倍UP` : '';
      const rateText = rate ? `${rate}倍${extraRateSumText}` : '';
      const backRateText = backRate
        ? `${rate ? '+' : ''}${backRate
            .reduce((acc, curr) => acc + curr.value, 0)
            .toString()}%ポイントバック`
        : '';
      return rateText + backRateText;
    }

    function showPointInfo(pointInfo) {
      const recommendElements = $('.dynamic-product-recommend');
      pointInfo.results.forEach(v => {
        // 0ポイントの場合は非表示
        if (v.points === 0) {
          return;
        }

        // PC
        if (vars.device == conf.device.pc) {
          const targetElement = recommendElements.find('.dynamic-product-item').filter(`[data-item-id="${v.itemId}"]`);

          targetElement.length > 0 && targetElement.find('.dynamic-product-info').append(
            `<p class="dynamic-product-info-point">${v.points.toLocaleString()}ポイント${v.pointRate ? `(${v.pointRate})` : ''}</p>`
          )
        // SP
        } else {
          const targetElement = recommendElements.find('.dynamic-product-item .dynamic-product-info-point').filter(`[data-item-id="${v.itemId}"]`);
          targetElement.length > 0 && targetElement.html(`${v.points.toLocaleString()}ポイント${v.pointRate ? `(${v.pointRate})` : ''}`);
        }
      })
    }

    /**
     * Get the value of a cookie
     *
     * @param  name Cookie name
     * @return      Value of the cookie or `undefined` if not found
     */
    function getCookie(name) {
      return getAllCookies()[name];
    }

    /**
     * Get all the cookies and their values
     *
     * @return Map of all the cookies as `{ name: value }`
     */
    function getAllCookies() {
      const all = {};

      if (typeof document === 'undefined' || !document.cookie) {
        return all;
      }

      const cookiesList = document.cookie.split(';');

      for (const c of cookiesList) {
        const j = c.indexOf('=');

        if (j === -1) {
          continue;
        }

        const key = String(decodeURIComponent(c.substr(0, j))).trim();
        let val = decodeURIComponent(c.substr(j + 1, c.length - j - 1));

        try {
          val = JSON.parse(val);
        } catch (e) {
          // nothing to do here
        }

        all[key] = val;
      }

      return all;
    }
  });
})(jQuery);
