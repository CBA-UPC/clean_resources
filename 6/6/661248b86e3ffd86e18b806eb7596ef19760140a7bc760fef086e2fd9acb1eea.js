!function(c,l,a,r,i,t,y){a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);a[c]("metadata",(function(){a[c]("set","_s","uet")}),!1);a[c]("metadata",(function(){a[c]("set","_u","211023323")}),!1);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://www.clarity.ms/s/0.7.20/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"ibbelsdilb","upload":"https://d.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":false,"content":true,"dob":1492});0.9');

	var category = $("#categorycd").val();
	var params = location.search.replace("?", "");
	params = params.split("&").join("|");

	$.ajax({
		type : "GET",
		url : "/modules/facetsearch_modules/modalform.ashx",
		cache : false,
		data : "ca=" + category + "&pv=" + params,
		async : true,
		timeout : 3000,
		dataType : "html",
		context : FSModalPopup,
		success : function(data) {
			FSModalPopup.displayForm(data,tgt);
			// Loading Off
			$("body").removeClass("overselectOn");
		},
		error : function(data, status, xhr) {
			// Loading Off
			$("body").removeClass("overselectOn");
		}
	});
}

FSModalPopup.displayForm = function(data,tgt) {
	FSModalPopup.modal = $(data);

	$('body').append(FSModalPopup.modal).addClass('fs').addClass('fsOn');

	// ページネーション下部をクリックしたとき
	if(tgt == 'searchSpecBtm'){
		$('.fs.fsOn #searchBySpecBox').addClass('is-btmFixed');
		$('#searchBySpecBox .searchBySpecBoxM').addClass('is-btmFixed');
		$('#specBox').addClass('is-btmFixed');
		$('#searchBySpecBox').addClass('is-btmFixed');
	} else {
		$('#searchBySpecBox').removeClass('is-btmFixed');
		var wScrollTop = $(window).scrollTop();
		var wHeight = $(window).height();
		var btOffsetTop = $('#btSearhBySpec').offset().top;
		var btOuterHeight = $('#searchBySpecBox').outerHeight();
		var ctOffsetTop = $('#counterBox').offset().top;
		var ctOuterHeight = $('#counterBox').outerHeight();
		var ttlOuterHeight = $('#specBoxTTL').outerHeight();
	
		var tem = btOffsetTop - wScrollTop + ctOuterHeight + ttlOuterHeight + 70;
	
		$('#searchBySpecBox').css('top', btOffsetTop);
	
		if (wHeight <= 160) {
			$('body').removeClass('fsFixed');
		} else {
			$('#specTTL').on('load', function() {
				if ($('#searchBySpecBox').is(':visible')) {
					var pos = ctOffsetTop - wScrollTop + ctOuterHeight;
					if (pos > $(window).height()) {
						$('body').addClass('fsFixed');
						if (tem > wHeight) {
							$('body').removeClass('fsFixed');
						}
					} else {
						$('body').removeClass('fsFixed');
					}
				}
			});
		}
	}

	// 閉じるボタン
	$(function(){
		$('#specBoxClose01').clone().attr('id','specBoxClose02').appendTo('#specBoxTTL');
	});

	$('.specBoxClose').on('click', function() {
		// バルーンを閉じる
		FSModalPopup.SpecInboxObj = null;
		FSModalPopup.closeBalloon();
		FSModalPopup.close();
	});

  // モーダルの重なり解消 160408 sm29
	$('.helpicon,.guidePopBtn').on('click', function() {
		FSModalPopup.SpecInboxObj = null;
		FSModalPopup.closeBalloon();
		FSModalPopup.close();
	});
	$('.btSearhBySpec_m,.specBoxClose').on('click', function() {
		FSModalPopup.close();
    $('.variItemBox').hide();
    $('.balloon').hide();
	});
  // モーダルの重なり解消 end

	// #itemlistのみmask表示_sm61
	if (document.getElementById('itemList') != null) {
		FSModalPopupMask.maskOpen();
	}

	// バルーン
	$('#MSpecBalloon, #MSpecBalloonWide').css('z-index', 6002);

	// フッタ固定
	var timer = null;
	$(window).on('resize scroll', function() {
		clearTimeout( timer );
		timer = setTimeout(function() {
			// ページネーション下部は除く
			if ($('#searchBySpecBox').not('.is-btmFixed').is(':visible')) {
				var wScrollTop = $(window).scrollTop();
				var wHeight = $(window).height();
				var btOffsetTop = $('#btSearhBySpec').offset().top;
				var btOuterHeight = $('#searchBySpecBox').outerHeight();
				var ctOuterHeight = $('#counterBox').outerHeight();
				var ttlOuterHeight = $('#specBoxTTL').outerHeight();

				var boxLowPos = btOffsetTop + btOuterHeight - wHeight - ctOuterHeight + 70;
				var tem = btOffsetTop - wScrollTop + ctOuterHeight + ttlOuterHeight + 70;

				if (wScrollTop > boxLowPos) {
					$('body').removeClass('fsFixed');
				} else {
					$('body').addClass('fsFixed');
					if (wScrollTop < btOffsetTop) {
						if (tem >= wHeight) {
							$('body').removeClass('fsFixed');
						}
					} else {
						if (wHeight <= 160) {
							$('body').removeClass('fsFixed');
						}
					}
				}
			}
		});
	});

	// サブシリーズ
	$('#specList span img').on('click', function(){
		var bt = $(this);
		var list = $(this).parent().next('ul');

		bt.toggleClass('btSub_on');
		list.toggleClass('sub_on');

		if(list.hasClass('sub_on')){
			list.slideDown('fast');
			list.after('<img src="https://img1.kakaku.k-img.com/images/spacer.gif">');
		}else{
			list.slideUp('fast');
			list.next('img').remove();
		}
	});

	$(function(){
		function posControl(){
			$('body').removeClass('fsFixed');
			var pos =  $('#counterBox').offset().top - $(window).scrollTop() + $('#counterBox').outerHeight();
			if(pos > $(window).height()){
				$('body').addClass('fsFixed');
			}else{
				$('body').removeClass('fsFixed');
			}
		}

		// もっと見る
		$('.spc_m01').each(function(i){
			// 開いている場合は閉じない
			if (!$(this).hasClass('m_on')) {
				$(this).prev().css({'display':'none'});
			}
		});

		$('.spc_m01').on('click', function(){
			$this = $(this);
			var cl = $('img.spc_m01').index(this);
			var clPoint = $('#specList').find('.clPoint').eq(cl).offset().top;

			$this.toggleClass('m_on');

			if ($this.hasClass('m_on')) {
				$this.prev('div').slideDown('fast',function(){ posControl(); });
				$this.attr({'alt':'閉じる'});
			} else {

				if($(window).scrollTop() > clPoint) {
					$($.browser.webkit ? 'body' : 'html').animate({ scrollTop: clPoint }, 'fast', function(){
						setTimeout(function(){
							$this.prev('div').slideUp('fast',function(){ posControl(); });
							$this.attr({'alt':'もっと見る'});
						},10);
					});
				}else{
					$this.prev('div').slideUp('fast',function(){ posControl(); });
					$this.attr({'alt':'もっと見る'});
				}

			}

			FSModalPopup.closeBalloon();
		});

		// ラベル
		var input_a = $('#specList input[type=checkbox]:not(:disabled), #specList input[type=radio]:not(:disabled)');

		input_a.on('hover', function(e){
			if (e.type == 'mouseenter') {
				$(this).css({'cursor':'pointer'});
				$(this).next('label').css({'color':'#0099ff'});
			} else{
				$(this).css({'cursor':'default'});
				$(this).next('label').css({'color':'#333'});
			}
		});

		// サブシリーズ
		$('.subSeries').each(function(i){
			// 開いている場合は閉じない
			if (!$(this).hasClass('sub_on')) {
				$(this).css({'display':'none'});
			} else {
				$(this).css({'display':'block'});
			}
		});

		// ラベルCSS
		FSModalPopup.setLabelCSS();

		// チェックボックス
		$('#specList input[type=checkbox]:not(#ob)').change(function(){
			if ($(this).is(':checked')) {
				$(this).parent().addClass('chk');
			} else {
				$(this).parent().removeClass('chk');
			}
		});

		// ラジオボタン
		$('#specList input[type=radio]').change(function(){
			if ($(this).is(':checked'))
			{
				$('input[name=' + $(this).attr('name') + ']').parent().removeClass('chk');
				$(this).parent().addClass('chk');
			}
		});

		// シリーズ変更時
		$('#specBox input[type=checkbox][id^="se_"]').change(function(){
			// サブシリーズ解除
			var $subSeries = $(this).parent().next('.subSeries').find('input[type=checkbox]');
			if ($(this).is(':checked')) {
				$subSeries.prop('checked', false);
				$subSeries.parent().removeClass('chk');
			}

			var $id = $(this).attr('id');

			// グルーピングタグがある場合は、そちらも変更
			var $grpSeries = $('#grp_' + $id);

			if ($grpSeries) {
				if ($(this).is(':checked')) {
					$grpSeries.prop('checked', true);
					$grpSeries.parent().addClass('chk');

					// サブシリーズ解除
					var $grpSubSeries = $(this).parent().next('.subSeries').find('input[type=checkbox]');
					if ($(this).is(':checked')) {
						$grpSubSeries.prop('checked', false);
						$grpSubSeries.parent().removeClass('chk');
					}
				} else {
					$grpSeries.prop('checked', false);
					$grpSeries.parent().removeClass('chk');
				}
			}
		});

		// グルーピングシリーズ変更時
		$('#specBox input[type=checkbox][id^="grp_se_"]').change(function(){
			var $id = $(this).attr('id');

			// 通常タグも変更
			var $series = $('#' + $id.replace('grp_', ''));

			if ($series) {
				if ($(this).is(':checked')) {
					$series.prop('checked', true);
					$series.parent().addClass('chk');

					// サブシリーズ解除
					var $subSeries = $series.parent().next('.subSeries').find('input[type=checkbox]');
					if ($(this).is(':checked')) {
						$subSeries.prop('checked', false);
						$subSeries.parent().removeClass('chk');
					}
				} else {
					$series.prop('checked', false);
					$series.parent().removeClass('chk');
				}
			}
		});

		// サブシリーズ変更時
		$('#specBox .subSeries input[type=checkbox][id^="subse_"]').change(function(){
			// シリーズ解除
			var $series = $(this).closest('.sub_on').prev('span').children('input[type=checkbox]');
			if ($(this).is(':checked')) {
				$series.prop('checked', false);
				$series.parent().removeClass('chk');
			}

			var $id = $(this).attr('id');

			// グルーピングタグがある場合は、そちらも変更
			var $grpSubSeries = $('#grp_' + $id);

			if ($grpSubSeries) {
				if ($(this).is(':checked')) {
					// サブシリーズ選択
					$grpSubSeries.prop('checked', true);
					$grpSubSeries.parent().addClass('chk');

					// シリーズ解除
					var $grpSeries = $grpSubSeries.closest('.sub_on').prev('span').children('input[type=checkbox]');

					$grpSeries.prop('checked', false);
					$grpSeries.parent().removeClass('chk');
				} else {
					// サブシリーズ解除
					$grpSubSeries.prop('checked', false);
					$grpSubSeries.parent().removeClass('chk');
				}
			}
		});

		// グルーピングサブシリーズ変更時
		$('#specBox .subSeries input[type=checkbox][id^="grp_subse_"]').change(function(){
			// シリーズ解除
			var $grpSeries = $(this).closest('.sub_on').prev('span').children('input[type=checkbox]');
			if ($(this).is(':checked')) {
				$grpSeries.prop('checked', false);
				$grpSeries.parent().removeClass('chk');
			}

			var $id = $(this).attr('id');

			// 通常タグも変更
			var $subSeries = $('#' + $id.replace('grp_', ''));

			if ($subSeries) {
				if ($(this).is(':checked')) {
					// サブシリーズ選択
					$subSeries.prop('checked', true);
					$subSeries.parent().addClass('chk');

					// シリーズ解除
					var $series = $subSeries.closest('.sub_on').prev('span').children('input[type=checkbox]');

					$series.prop('checked', false);
					$series.parent().removeClass('chk');
				} else {
					// サブシリーズ解除
					$subSeries.prop('checked', false);
					$subSeries.parent().removeClass('chk');
				}
			}
		});

		// メーカー変更時
		$('#specBox input[type=checkbox][id^="ma_"]').change(function(){
			var $id = $(this).attr('id');

			// グルーピングタグがある場合は、そちらも変更
			var $grpMaker = $('#grp_' + $id);

			if ($grpMaker) {
				if ($(this).is(':checked')) {
					$grpMaker.prop('checked', true);
					$grpMaker.parent().addClass('chk');
				} else {
					$grpMaker.prop('checked', false);
					$grpMaker.parent().removeClass('chk');
				}
			}
		});

		// グルーピングメーカー変更時
		$('#specBox input[type=checkbox][id^="grp_ma_"]').change(function(){
			var $id = $(this).attr('id');

			// 通常タグも変更
			var $maker = $('#' + $id.replace('grp_', ''));

			if ($maker) {
				if ($(this).is(':checked')) {
					$maker.prop('checked', true);
					$maker.parent().addClass('chk');
				} else {
					$maker.prop('checked', false);
					$maker.parent().removeClass('chk');
				}
			}
		});

		// キーワード
		var $keyword = $('#m_keyword');
		var $keywordCleaer = $('#kwclear');
		var $defaultKeyword = '製品名、メーカー、スペックなど';

		if ($keyword.val() == $defaultKeyword) {
			$keyword.css('color', '#969696');
			$keywordCleaer.css('display','none');
		} else {
			$keyword.css('color', '#333');
			$keywordCleaer.css('display','block');
		}

		$keyword.focus(function(){
			if ($(this).val() == $defaultKeyword) {
				$(this).val('').css({'color':'#333'})
			}
		});
		$keyword.blur(function(){
			if ($(this).val() == '') {
				$(this).val($defaultKeyword).css({'color':'#969696'});
			}
		});

		if (navigator.userAgent.indexOf('MSIE') >= 0) {
			var keyDownCode = 0;
			$keyword.keydown(function(e) {
				keyDownCode = e.which;
			});
			$keyword.keyup(function(e) {
				if (13 == e.which && e.which == keyDownCode) {
					$keyword.change();
				}
			});
		}

		$keyword.change(function(){
			if ($(this).val() == $defaultKeyword || $(this).val() == '') {
				$keywordCleaer.css('display','none');
			} else {
				$keywordCleaer.css('display','block');
			}
		});

		// キーワード解除
		$keywordCleaer.click(function() {
			$keyword.val($defaultKeyword).css({'color':'#969696'}).change();
		});

		// チェックボックス
		$('input[type=checkbox][id^="Spec"]').change(function(){
			var specname = this.id.split('_')[0];
			var checkCount = $('input[type=checkbox][name^=' + specname + ']:checked').length;

			if (checkCount > 0) {
				// 手入力フォームはクリア
				$('#' + specname + '_rng_from, #' + specname + '_rng_to, #' + specname + '_txt')
					.val('')
					.attr('disabled', 'disabled')
					.parent().removeClass('chk');
			} else {
				// 手入力フォームを有効化
				$('#' + specname + '_rng_from, #' + specname + '_rng_to, #' + specname + '_txt')
					.removeAttr('disabled');
			}
		});

		// 手入力フォーム
		$('input[id$="_rng_from"], input[id$="_rng_to"], input[id$="_txt"]').change(function(){
			var specname = this.id.split('_')[0];

			var isRange = false;
			if ((this.id).indexOf('_rng_') !== -1) {
				isRange = true;
			}

			if ($(this).val() != '') {
				if (!specNumChk($(this).val())) {
					return false;
				}

				// 他のチェックボックスと手入力フォーム、除外指定はクリア
				// チェックボックス
				$('#specList input[name=' + specname + ']').each(function(){
					$(this).attr('checked', false);
					$(this).parent().removeClass('chk');
				});

				// 手入力フォーム
				if (isRange) {
					$('#' + specname + '_txt').val('').attr('disabled', 'disabled');
				} else {
					$('#' + specname + '_rng_from, #' + specname + '_rng_to').val('').attr('disabled', 'disabled');
				}

				// 除外指定
				$('#specList input[id^="exh_' + specname + '"]').each(function() {
					$(this).attr('disabled', 'disabled');
				});
				$('#specList span[id^="exsp_' + specname + '"]').each(function() {
					$(this).css('display', 'none');
				});

				// 背景色を変更
				$(this).parent().addClass('chk');
			} else {
				if ((isRange && $(this).siblings('input').val() == '') || !isRange) {
					// 他の手入力フォームを有効化
					if (isRange) {
						$('#' + specname + '_txt').removeAttr('disabled');
					} else {
						$('#' + specname + '_rng_from, #' + specname + '_rng_to').removeAttr('disabled');
					}

					// 除外再表示
					$('#specList input[id^="exh_' + specname + '"]').each(function() {
						$(this).removeAttr('disabled');
					});

					$('#specList span[id^="exsp_' + specname + '"]').each(function() {
						$(this).css('display', 'block');
					});

					// 背景色を変更
					$(this).parent().removeClass('chk');
				}
			}
		});

		// 価格
		$('#specList input[name=pr]').on('change', function() {
			// 入力チェック
			if ($(this).val() != '' && !priceNumCheck($(this).val())) {
				return false;
			}
		});

		// フォーム変更
		$('#specBoxForm').change(function(e){
			FSModalPopup.getAfterCount();
		});

	});
}

// ラベルのCSS制御
FSModalPopup.setLabelCSS = function() {
	var label = $('#specList input[type=checkbox]:not(:disabled) + label, #specList input[type=radio]:not(:disabled) + label');
	var label_d = $('#specList input[type=checkbox]:disabled + label, #specList input[type=radio]:disabled + label');

	label.css({'color':'#333','cursor':'default'});
	label_d.css({'cursor':'default', 'color':'#d8d8d8'});

	label.on('hover', function(e){
		if(e.type == "mouseenter"){
			$(this).css({'color':'#0099ff','cursor':'pointer'});
		}else{
			$(this).css({'color':'#333','cursor':'default'});
		}
	});

	label_d.on('hover', function(e){
		if(e.type == 'mouseenter') {
			$(this).css({'cursor':'default', 'color':'#d8d8d8'});
		}else{
			$(this).css({'cursor':'default', 'color':'#d8d8d8'});
		}
	});
}

// 絞込み後の件数取得
FSModalPopup.getAfterCount = function() {
	var category = $("#categorycd").val();
	var params = $('#specBoxForm').serialize();
	var paramList = [];
	var tmpParam = [];

	$.each(params.split("&"), function(i, param) {
		tmpParam = param.split("=");

		if (tmpParam[0] == "kw") {
			// キーワードはShift_JISに変換
			var keyword = $("#m_keyword").val();
			if (keyword != "製品名、メーカー、スペックなど") {
				paramList.push(tmpParam[0] + "=" + EscapeSJIS(keyword));
			}
		} else if (tmpParam[0] == "di") {
			// 直販モデル
			if (tmpParam.length == 2 && tmpParam[1] == "ka") {
				paramList.push(tmpParam[1] + "=1");
			} else {
				paramList.push(param);
			}
		} else {
			paramList.push(param);
		}
	});

	$.ajax({
		type : "GET",
		url : "/modules/facetsearch_modules/modalcount.ashx",
		cache : false,
		data : "ca=" + category + "&pv=" + paramList.join("|"),
		async : true,
		timeout : 3000,
		dataType : "json",
		context : FSModalPopup,
		success : function(data) {
			FSModalPopup.setAfterCount(data),
			FSModalPopup.setAfterSort(data)
		},
		error : function(data, status, xhr) {
		}
	});
}

// 絞り込み後のソート項目
FSModalPopup.setAfterSort = function(data) {
	if (data.SortList.length > 1) {
		
		var selectedVal = $('select[name="so"] option:selected').val();
		
		$('select[name="so"] > option').remove();
		
		for (var i = 0; i < data.SortList.length; i++) {
			var option = data.SortList[i];
			
			$('select[name="so"]').append($('<option>').html(decodeURIComponent(option.Text)).val(decodeURIComponent(option.Value)).prop('selected',decodeURIComponent(option.Value) == selectedVal ));
		}
	}
}

// 絞込み後の件数設定
FSModalPopup.setAfterCount = function(data) {
	// 全体の件数
	var afterTotalCount = Math.floor(data.TotalCount);
	// 変更前の件数
	var beforeTotalCount = Math.floor($('#totalCount').val());
	// 速度
	var duration = 600;

	if (Math.abs(afterTotalCount - beforeTotalCount) < 10) duration = 300;

	// アニメーション
	$('#cntTtl').prop('number', beforeTotalCount).animateNumber({
		number : afterTotalCount
	}, duration);

	// hiddenに設定
	$('#totalCount').val(afterTotalCount);

	// 個別の件数
	if (data.CountList.length > 1) {
		var key;
		var count;

		for (var i = 0; i < data.CountList.length; i++) {
			key = (data.CountList[i].Key).replace(/\./g, '\\.');
			count = data.CountList[i].Count;

			// 件数
			if ($('#cnt_' + key)[0]) {
				$('#cnt_' + key).html('（' + count + '）');
			}
			if ($('#cnt_grp_' + key)[0]) {
				$('#cnt_grp_' + key).html('（' + count + '）');
			}
			// disable
			if ($('#' + key)[0]) {
				if (count > 0) {
					$('#' + key).removeAttr('disabled');
				} else {
					if (!$('#' + key).is(':checked')) {
						$('#' + key).attr('disabled', 'disabled');
					}
				}
			}
			if ($('#grp_' + key)[0]) {
				if (count > 0) {
					$('#grp_' + key).removeAttr('disabled');
				} else {
					if (!$('#grp_' + key).is(':checked')) {
						$('#grp_' + key).attr('disabled', 'disabled');
					}
				}
			}
		}
	}

	// 検索用パラメータ
	var resultParam = data.ResultParam;
	$('#resultParam').val(resultParam);

	// CSSあてなおし
	FSModalPopup.setLabelCSS();
}

// 検索結果表示
FSModalPopup.dispResult = function(data) {
	// 画面遷移
	var resultParam = $('#resultParam').val();
	changeLocation(resultParam);

	// ポップアップを閉じる
	FSModalPopup.close();
}

FSModalPopup.closeBalloon = function() {
	// バルーンを閉じる
	if ($(window.FSModalPopup.SpecBalloonObj) != undefined && $(window.FSModalPopup.SpecBalloonObj).css('display') == 'block') {
		// 通常のポップアップが表示されていたら閉じる
		if (typeof window.FSModalPopup.hideHelp == 'function') FSModalPopup.hideHelp();
	}
	if ($(window.FSModalPopup.SpecWBalloonObj) != undefined && $(window.FSModalPopup.SpecWBalloonObj).css('display') == 'block') {
		// 通常のポップアップが表示されていたら閉じる
		if (typeof window.FSModalPopup.hideWideHelp == 'function') FSModalPopup.hideWideHelp();
	}
}

// 通常バルーン
FSModalPopup.isMSIE;
FSModalPopup.nowHelpId;
FSModalPopup.SpecBalloonObj;
FSModalPopup.SpecInboxObj;
FSModalPopup.BlMidObj;
FSModalPopup.IframeObj;

FSModalPopup.initBalloon = function() {
	var uaidx;
	var version;
	this.SpecBalloonObj = document.getElementById('MSpecBalloon');
	this.BlMidObj = document.getElementById('MBlMid');

	uaidx = navigator.userAgent.indexOf('MSIE');

	if(uaidx >= 0)
	{
		version = navigator.userAgent.substring(uaidx+5,uaidx+7);
		version = version.replace(".","");
	}

	if(uaidx >= 0 && version <= 6 && navigator.userAgent.indexOf('Opera') < 0) {
		this.isMSIE = true;
	}else{
		this.isMSIE = false;
	}

	// IE6の場合にヘルプポップアップがプルダウンの裏側にならないようにIFRAMEの上に描画する
	if(this.isMSIE){
		this.IframeObj = document.createElement('IFRAME');
		this.IframeObj.setAttribute('frameborder','no');
		this.IframeObj.setAttribute('src','about:blank');
		this.IframeObj.style.position = 'absolute';
		this.IframeObj.style.left = '2px';
		this.IframeObj.style.width = '316px';
		this.IframeObj.style.height = '0px';
		this.BlMidObj.appendChild(this.IframeObj);
	}

	this.SpecInboxObj = document.createElement('div');
	this.SpecInboxObj.className = 'Inbox';
	this.BlMidObj.appendChild(this.SpecInboxObj);

	this.addEvent(
		this.SpecBalloonObj, 'click', function(){
			FSModalPopup.hideHelp();
		}
	);
}

FSModalPopup.showHelp = function(obj, helpId) {
  var posX;
  var posY;

  if(!this.SpecInboxObj){
    this.initBalloon();
  }
  if(this.SpecBalloonObj.style.display == 'block' && this.nowHelpId == helpId) {
    // 今表示しているポップアップなら閉じる
    this.hideHelp();
  } else {

    if(window.FSModalPopup.SpecWBalloonObj != undefined && window.FSModalPopup.SpecWBalloonObj.style.display == 'block') {
      // 横幅拡張版のポップアップが表示されていたら閉じる
      if(typeof(window.FSModalPopup.hideWideHelp) == 'function') this.hideWideHelp();
    }

    this.nowHelpId = helpId;
    this.SpecInboxObj.innerHTML = document.getElementById(helpId).innerHTML;
    this.SpecBalloonObj.style.display = 'block';

    posX = getLocation(obj, 'X');
    posY = getLocation(obj, 'Y');

    document.getElementById('MBlTop').style.display  = 'none';
    document.getElementById('MBlTopL').style.display = 'none';
    document.getElementById('MBlTopR').style.display = 'none';
    document.getElementById('MBlBtm').style.display  = 'none';
    document.getElementById('MBlBtmL').style.display = 'none';
    document.getElementById('MBlBtmR').style.display = 'none';

    if(posX - this.SpecBalloonObj.offsetWidth > 0){
      if(posY - this.SpecBalloonObj.offsetHeight - 27 - 49 - 220 > 0){
        //右上
        document.getElementById('MBlTop').style.display  = 'block';
        document.getElementById('MBlBtmL').style.display = 'block';
        this.SpecBalloonObj.style.top = posY - this.SpecBalloonObj.offsetHeight - 3 + 'px';
      }else{
        //右下
        document.getElementById('MBlTopL').style.display = 'block';
        document.getElementById('MBlBtm').style.display  = 'block';
        this.SpecBalloonObj.style.top = posY + 15 + 'px';
      }
      this.SpecBalloonObj.style.left = posX - this.SpecBalloonObj.offsetWidth + 10 + 'px';
    }else{
      if(posY - this.SpecBalloonObj.offsetHeight - 27 - 49 - 220 > 0){
        //左上
        document.getElementById('MBlTop').style.display  = 'block';
        document.getElementById('MBlBtmR').style.display = 'block';
        this.SpecBalloonObj.style.top = posY - this.SpecBalloonObj.offsetHeight - 3 + 'px';
      }else{
        //左下
        document.getElementById('MBlTopR').style.display = 'block';
        document.getElementById('MBlBtm').style.display  = 'block';
        this.SpecBalloonObj.style.top = posY + 13 + 'px';
      }
      this.SpecBalloonObj.style.left = posX + 10 + 'px';
    }

    if(this.isMSIE){
      this.IframeObj.style.height = this.SpecBalloonObj.offsetHeight - 33 + 'px';
	  this.IframeObj.style.zIndex = 100;
    }
  }
}

FSModalPopup.hideHelp = function() {
	this.SpecBalloonObj.style.display = 'none';
}

FSModalPopup.getLocation = function(elem, XorY) {
  var offset = (XorY.toUpperCase() == 'Y') ? 'offsetTop' : 'offsetLeft';
  var ret = elem[offset];
  var pa = elem.offsetParent;
  while(pa){
    if(pa[offset]) ret += pa[offset];
    pa = pa.offsetParent;
  }
  return ret;
}

FSModalPopup.addEvent = function(elm, eventType, functionName) {
	if(elm.attachEvent){
		elm['e'+eventType+functionName] = functionName;
		elm[eventType+functionName] = function(){elm['e'+eventType+functionName]( window.event );}
		elm.attachEvent( 'on'+eventType, elm[eventType+functionName] );
	} else {
		elm.addEventListener(eventType, functionName, false);
	}
}

// 横幅拡張版バルーン
FSModalPopup.isWMSIE;
FSModalPopup.nowWHelpId;
FSModalPopup.SpecWBalloonObj;
FSModalPopup.SpecWInboxObj;
FSModalPopup.BlWMidObj;
FSModalPopup.IframeWObj;

FSModalPopup.initWideBalloon = function(){
  var uaidx;
  var version;
  this.SpecWBalloonObj = document.getElementById('MSpecBalloonWide');
  this.BlWMidObj = document.getElementById('MBlWMid');

  uaidx = navigator.userAgent.indexOf('MSIE');

  if(uaidx >= 0)
  {
     version = navigator.userAgent.substring(uaidx+5,uaidx+7);
     version = version.replace(".","");
  }

  if(uaidx >= 0 &&
     version <= 6 &&
     navigator.userAgent.indexOf('Opera') < 0){
    this.isWMSIE = true;
  }else{
    this.isWMSIE = false;
  }

  // IE6の場合にヘルプポップアップがプルダウンの裏側にならないようにIFRAMEの上に描画する
  if(this.isWMSIE){
    this.IframeWObj = document.createElement('IFRAME');
    this.IframeWObj.setAttribute('frameborder','no');
    this.IframeWObj.setAttribute('src','about:blank');
    this.IframeWObj.style.position = 'absolute';
    this.IframeWObj.style.left = '2px';
    this.IframeWObj.style.width = '530px';
    this.IframeWObj.style.height = '0px';
    this.BlWMidObj.appendChild(this.IframeWObj);
  }

  this.SpecWInboxObj = document.createElement('div');
  this.SpecWInboxObj.className = 'Inbox';
  this.BlWMidObj.appendChild(this.SpecWInboxObj);

  this.addWideEvent(
	this.SpecWBalloonObj, 'click', function(){
		FSModalPopup.hideWideHelp();
	}
  );
}

FSModalPopup.showWideHelp = function(obj, helpId){
  var posX;
  var posY;

  if(!this.SpecWInboxObj){
    this.initWideBalloon();
  }

  if(this.SpecWBalloonObj.style.display == 'block' && this.nowWHelpId == helpId) {
    // 今表示しているポップアップなら閉じる
    this.hideWideHelp();
  } else {

    if(window.FSModalPopup.SpecBalloonObj != undefined && window.FSModalPopup.SpecBalloonObj.style.display == 'block') {
      // 通常のポップアップが表示されていたら閉じる
      if(typeof(window.FSModalPopup.hideHelp) == 'function') this.hideHelp();
    }

    this.nowWHelpId = helpId;
    this.SpecWInboxObj.innerHTML = document.getElementById(helpId).innerHTML;
    this.SpecWBalloonObj.style.display = 'block';

    posX = getWideLocation(obj, 'X');
    posY = getWideLocation(obj, 'Y');

    document.getElementById('MBlWTop').style.display  = 'none';
    document.getElementById('MBlWTopL').style.display = 'none';
    document.getElementById('MBlWTopR').style.display = 'none';
    document.getElementById('MBlWBtm').style.display  = 'none';
    document.getElementById('MBlWBtmL').style.display = 'none';
    document.getElementById('MBlWBtmR').style.display = 'none';

    if(posX - this.SpecWBalloonObj.offsetWidth > 0){
      //左はめり込まない
      if(posY - this.SpecWBalloonObj.offsetHeight - 27 - 49 - 220 > 0){
        //右上
        document.getElementById('MBlWTop').style.display  = 'block';
        document.getElementById('MBlWBtmL').style.display = 'block';
        this.SpecWBalloonObj.style.top = posY - this.SpecWBalloonObj.offsetHeight - 3 + 'px';
      }else{
        //右下
        document.getElementById('MBlWTopL').style.display = 'block';
        document.getElementById('MBlWBtm').style.display  = 'block';
        this.SpecWBalloonObj.style.top = posY + 15 + 'px';
      }
      this.SpecWBalloonObj.style.left = posX - this.SpecWBalloonObj.offsetWidth + 120 + 'px';
    }else{
      if(posY - this.SpecWBalloonObj.offsetHeight - 27 - 49 - 220 > 0){
        //左上
        document.getElementById('MBlWTop').style.display  = 'block';
        document.getElementById('MBlWBtmR').style.display = 'block';
        this.SpecWBalloonObj.style.top = posY - this.SpecWBalloonObj.offsetHeight - 3 + 'px';
      }else{
        //左下
        document.getElementById('MBlWTopR').style.display = 'block';
        document.getElementById('MBlWBtm').style.display  = 'block';
        this.SpecWBalloonObj.style.top = posY + 13 + 'px';
      }
      //めり込みを考慮
      if(posX > 100){
      	this.SpecWBalloonObj.style.left = posX - 100 + 'px';
      }
    }

    if(this.isWMSIE){
      this.IframeWObj.style.height = this.SpecWBalloonObj.offsetHeight - 33 + 'px';
    }
  }
}

FSModalPopup.hideWideHelp = function(){
  this.SpecWBalloonObj.style.display = 'none';
}

FSModalPopup.getWideLocation = function(elem, XorY){
  var offset = (XorY.toUpperCase() == 'Y') ? 'offsetTop' : 'offsetLeft';
  var ret = elem[offset];
  var pa = elem.offsetParent;
  while(pa){
    if(pa[offset]) ret += pa[offset];
    pa = pa.offsetParent;
  }
  return ret;
}

FSModalPopup.addWideEvent = function(elm, eventType, functionName){
	if(elm.attachEvent){
		elm['e'+eventType+functionName] = functionName;
		elm[eventType+functionName] = function(){elm['e'+eventType+functionName]( window.event );}
		elm.attachEvent( 'on'+eventType, elm[eventType+functionName] );
	} else {
		elm.addEventListener(eventType, functionName, false);
	}
}

FSModalPopup.SetEveryKanaDisplay = function(popuptype, dispClick){
	document.getElementById("listmore_" + popuptype).className = "list" + dispClick + "ON";
}

// mask表示_sm61
const FSModalPopupMask = {
	maskOpen:function() {

		FSModalPopupMask.flag = true;

		const target = document.getElementById('searchBySpecBox');
		const html = '<div class="p-itemListMask is-FSModalPopupMask"></div>';

		target.insertAdjacentHTML('beforebegin', html);
		FSModalPopupMask.mask = document.getElementsByClassName('is-FSModalPopupMask')[0];

		FSModalPopupMask.mask.onclick = function() {
			FSModalPopupMask.maskClick();
		}

	},
	maskClick:function() {
		FSModalPopup.SpecInboxObj = null;
		FSModalPopup.closeBalloon();
		FSModalPopup.close();
		FSModalPopupMask.maskClose();
		return false;	
	},
	maskClose:function() {
		FSModalPopupMask.mask.remove();
		FSModalPopupMask.flag = false;
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           _top.gif) no-repeat left top;
}
#searchCategory #main .full .boxA .boxWhiteBtm {
	padding-bottom: 5px;
	background:none;
}
#searchCategory #main .full .boxA .h3box {
	width: 720px;
	height: 18px;
	padding: 11px 10px 4px 45px;
	background: url(https://img1.kakaku.k-img.com/images/category/keyword_rank_ttl.gif) no-repeat left top;
		 voice-family: "\"}\"";
		 voice-family:inherit;
		 width: 665px;
}
#searchCategory #main .full .boxA .boxWhiteTop .boxWhiteBtm .keywordRank .dotlineRank{
	background: url(https://img1.kakaku.k-img.com/images/category/keyword_rank_line.gif) repeat-y center top;
}
#searchCategory #main .full .boxA .boxBtm {
	background: url(https://img1.kakaku.k-img.com/images/category/keyword_rank_btm.gif) no-repeat left bottom;
}
#main .full .boxA .keywordRank .rankCellL{
	width:338px;
	padding-right:4px;
	float:left;
}
#main .full .boxA .keywordRank .rankCellR{
	width:338px;
	padding-left:4px;
	float:right;
}
#main .full .boxA .keywordRank .titleHalf{
	height:16px;
	margin:5px 0px;
	padding:5px 5px 3px 15px;
	font-weight:bold;
}
#shoes .keywordRank .titleHalf,
#sports-shoes .keywordRank .titleHalf,
#ladies-shoes .keywordRank .titleHalf,
#mens-shoes .keywordRank .titleHalf,
#kids-shoes .keywordRank .titleHalf,
#shoes-accessories .keywordRank .titleHalf,
#outdoor .keywordRank .titleHalf,
#housing .keywordRank .titleHalf,
#reform .keywordRank .titleHalf,
#lighting .keywordRank .titleHalf {
	background:url(https://img1.kakaku.k-img.com/images/category/shoes_title.gif) no-repeat scroll left top;
}
#default .keywordRank .titleHalf {
	background:url(https://img1.kakaku.k-img.com/images/category/default_title.gif) no-repeat scroll left top;
}
#pc .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/pc_title.gif) no-repeat scroll left top;
}
#kaden .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/kaden_title.gif) no-repeat scroll left top;
}
#camera .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/camera_title.gif) no-repeat scroll left top;
}
#game .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/game_title.gif) no-repeat scroll left top;
}
#book-cd-dvd .keywordRank .titleHalf,
#book .keywordRank .titleHalf,
#dvd .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/book-cd-dvd_title.gif) no-repeat scroll left top;
}
/* fitness追加 150108sm17 */
#fitness .keywordRank .titleHalf,
#sports-wear .keywordRank .titleHalf,
#sports .keywordRank .titleHalf,
#golf .keywordRank .titleHalf,
#bicycle .keywordRank .titleHalf,
#snow .keywordRank .titleHalf,
#fishing .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/sports_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 sm5 120806 */
#baby .keywordRank .titleHalf,
#maternity .keywordRank .titleHalf,
#baby-goods .keywordRank .titleHalf,
#kids .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/baby_title.gif) no-repeat scroll left top;
}
#food-drink .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/food-drink_title.gif) no-repeat scroll left top;
}
#interior .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/interior_title.gif) no-repeat scroll left top;
}
#houseware .keywordRank .titleHalf,
#stationery .keywordRank .titleHalf,
#daily-goods .keywordRank .titleHalf,
#nursing-care .keywordRank .titleHalf{ /* nursing-care 150212sm17 */
	background:url(https://img1.kakaku.k-img.com/images/category/houseware_title.gif) no-repeat scroll left top;
}
#fashion .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/fashion_title.gif) no-repeat scroll left top;
}
#beauty-health .keywordRank .titleHalf,
#contactlens .keywordRank .titleHalf,
#cosme .keywordRank .titleHalf,
#cosmetic .keywordRank .titleHalf,
#medicine .keywordRank .titleHalf,
#supplement .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/beauty-health_title.gif) no-repeat scroll left top;
}
#kuruma .keywordRank .titleHalf,
#bike .keywordRank .titleHalf,
#bike-goods .keywordRank .titleHalf,
#car-goods .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/kuruma_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 sm03 10.10.01 */
#drink .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/drink_title.gif) no-repeat scroll left top;
}
#hobby .keywordRank .titleHalf,
#gakki .keywordRank .titleHalf,
#toy .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/hobby_title.gif) no-repeat scroll left top;
}
#watch-accessory .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/watch_title.gif) no-repeat scroll left top;
}
#diy .keywordRank .titleHalf,
#electric-tools .keywordRank .titleHalf,
#working-tool .keywordRank .titleHalf,
#agriculture .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/default_title.gif) no-repeat scroll left top;
}
#food .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/foods_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 20150709 sm11 */
#instant-food .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/foods_title.gif) no-repeat scroll left top;
}
#health-food .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/health_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 101210SM5 */
#kitchen .keywordRank .titleHalf,
/* カテゴリ追加 sm07 10.11.01 */
#cookware .keywordRank .titleHalf,
#kitchen-goods .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/kitchen_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/mobile_data_title.gif) no-repeat scroll left top;
}
#main .full .boxA .keywordRank .line{
	margin:5px;
	margin-top:2px;
	border:solid 0px #cccccc;
	border-bottom-width:1px;
}
#main .full .boxA .keywordRank .line p{
	font-size:107%;
	font-weight:bold;
	color:#555555;
}
#main .full .boxA .keywordRank .rank1,
#main .full .boxA .keywordRank .rank2,
#main .full .boxA .keywordRank .rank3,
#main .full .boxA .keywordRank .rank{
	width:55px;
	text-align:right;
	float:left;
}
#main .full .boxA .keywordRank p.rank1,
#main .full .boxA .keywordRank p.rank2,
#main .full .boxA .keywordRank p.rank3{
	color:#ff6b00;
}
#main .full .boxA .keywordRank .rank1{background:url(https://img1.kakaku.k-img.com/images/category/crown1.gif) no-repeat scroll left center;}
#main .full .boxA .keywordRank .rank2{background:url(https://img1.kakaku.k-img.com/images/category/crown2.gif) no-repeat scroll left center;}
#main .full .boxA .keywordRank .rank3{background:url(https://img1.kakaku.k-img.com/images/category/crown3.gif) no-repeat scroll left center;}
#main .full .boxA .keywordRank .name{
	color:#555555;
	width:255px;
	float:right;
	padding-left:10px;
}

/* サーチ用ランキング
------------------------------------------------ */
#searchCategory .tblRanking-new td {
	background:#fff url(https://img1.kakaku.k-img.com/images/category/tblRanking_line_l.gif) bottom no-repeat;
	width:658px;
	word-wrap:break-word;
}
#searchCategory .tblRanking-new td.btm {
	background:#fff url(https://img1.kakaku.k-img.com/images/spacer.gif) no-repeat scroll center bottom;
}
#searchCategory .tblRanking-new .cell3{
	text-align:left;
	padding-left:25px;
}
#searchCategory .tblRanking-new td .title {
	width:658px;
	padding:0px;
}
#searchCategory .tblRanking-new td .title span{
/*	padding:5px 25px; */
	padding:5px 25px 3px 25px;
	margin:0px;
	margin-top:3px;
	font-size:129%;
	display:block;
	font-weight:bold;
}
#searchCategory .tblRanking-new td .title span a{
	text-decoration:none;
}
#searchCategory .tblRanking-new td .title.end span,
#searchCategory .tblRanking-new td .titleDown.end span{
	padding-bottom:2px;
	margin:0px;
	padding-top:3px;
	line-height:1;
}
#searchCategory .tblRanking-new td .title.end {
	padding-bottom:0px;
	margin-bottom:0px;
}
/* addprice sm03 100107 */
#searchCategory .tblRanking-new td .titleDown {
	float:left;
	width:450px;
	padding:5px 0 5px 25px;
}
#searchCategory .tblRanking-new td .titleDown span {
	margin-top:3px;
	font-size:109%;
	font-weight:bold;
}
#searchCategory .tblRanking-new td .downPrice {
	padding:0 0 5px 25px;
	font-size:85%;
}
#searchCategory .tblRanking-new td .downPrice span {
	color:#f00;
	font-size:127%;
	font-family:Verdana;
	font-weight:bold;
	line-height:1;
}
/* addprice sm03 100107 end */
#searchCategory .tblRanking-new td .photo{
	margin:0px 9px 10px 9px;
}
#searchCategory .tblRanking-new td .photo a{
	display:block;
	width:106px;
	height:90px;
	float:left;
	text-decoration:none;
	text-align:center;
}
#searchCategory .tblRanking-new td .photo.box_hover{
	background:#eeeeee;
	cursor:pointer;
}
#searchCategory .tblRanking-new td .photo a img{
	margin:5px 10px 0px 16px;
}

#searchCategory .tblRanking-new th.rank-etc2 {
	height:0px;
	background:url(https://img1.kakaku.k-img.com/images/category/rank5_back.gif) top left repeat-x #e5e5e5;
}
#searchCategory .tblRanking-new td.ended.btm{
border-right-width:2px;
}
#searchCategory .cap-rank {
margin-top:5px;
}
#searchCategory .tblRanking-new td.tab {
background:transparent none repeat scroll 0 0;
border:medium none;
width:658px;
}
#searchCategory .tblRanking-new td.tab a{
	display:block;
	width:208px;
	float:left;
}
#searchCategory .tblRanking-new td.tab .caution{
	float:right;
	width:400px;
	text-align:right;
	padding-top:5px;
	font-size:85%;
}
#searchCategory  .tblRanking-new th.rank-etc2{
	line-height:1;
}
#searchCategory  .tblRanking-new td{
	vertical-align:middle;
}
#searchCategory  .tblRanking-new td .noRank span{
	background:transparent url(https://img1.kakaku.k-img.com/images/category/icon_nodata.gif) no-repeat scroll left center;
	background-position:  20px center;
	text-align:left;
	display:block;
	padding:10px;
	padding-left:60px;
	font-weight:normal;
	font-size:100%;
	margin:0;
}
#searchCategory .tblRanking-new td .title.end.noRank span{
	padding:10px;
	padding-left:60px;
}
#searchCategory .rankPointer{
	text-align:right;
}
#searchCategory .rankPointer img{
	vertical-align:middle;
	margin-right:3px;
}
#searchCategory .dotlineRank{
	background: url(https://img1.kakaku.k-img.com/images/category/dotline_y.gif) repeat-y center top;
}
#searchCategory .tblRanking-new th.rank-etc3 {
border-bottom:none;
height:5px;
background:url(https://img1.kakaku.k-img.com/images/category/tblRanking_cell5.gif) repeat-x bottom left;
}


/*--サーチ系プライスメニュー　絞り込み--
------------------------------------------------ */
#searchCategory #menu h4{
	border-style:solid ;
	border-width:0 0 0 7px;
	padding: 3px 2px 2px 4px;
	margin:8px 0 3px 0;
	font-size:107%;
	font-weight:bold;}
#default #searchCategory #menu h4,
#shoes #searchCategory #menu h4,
#sports-shoes #searchCategory #menu h4,
#ladies-shoes #searchCategory #menu h4,
#mens-shoes #searchCategory #menu h4,
#kids-shoes #searchCategory #menu h4,
#shoes-accessories #searchCategory #menu h4,
#outdoor #searchCategory #menu h4,
#housing #searchCategory #menu h4,
#reform #searchCategory #menu h4,
#lighting #searchCategory #menu h4 {border-color:#001789;}
#pc #searchCategory #menu h4{border-color:#0099ff;}
#kaden #searchCategory #menu h4{border-color:#ff6600;}
#camera #searchCategory #menu h4{border-color:#009899;}
#game #searchCategory #menu h4{border-color:#ffcc33;}
#book-cd-dvd #searchCategory #menu h4,
#book #searchCategory #menu h4,
#dvd #searchCategory #menu h4{border-color:#339933;}
/* fitness追加 150108sm17 */
#fitness #searchCategory #menu h4,
#sports-wear #searchCategory #menu h4,
#sports #searchCategory #menu h4,
#golf #searchCategory #menu h4,
#bicycle #searchCategory #menu h4,
#snow #searchCategory #menu h4,
#fishing #searchCategory #menu h4{border-color:#3398cc;}
#food-drink #searchCategory #menu h4{border-color:#ff9934;}
/* カテゴリ追加 sm5 120806 */
#baby #searchCategory #menu h4,
#maternity #searchCategory #menu h4,
#baby-goods #searchCategory #menu h4,
#kids #searchCategory #menu h4 {border-color:#ffa4d1;}
/* カテゴリ追加 sm11 150817*/
#pet #searchCategory #menu h4,
#dog-goods #searchCategory #menu h4,
#cat-goods #searchCategory #menu h4,
#animal-goods #searchCategory #menu h4{border-color:#d68011;}
#fashion #searchCategory #menu h4{border-color:#a00000;}
#beauty-health #searchCategory #menu h4,
#contactlens #searchCategory #menu h4,
#cosme #searchCategory #menu h4,
#cosmetic #searchCategory #menu h4,
#medicine #searchCategory #menu h4,
#supplement #searchCategory #menu h4{border-color:#99cc33;}
#interior #searchCategory #menu h4{border-color:#cdcc00;}
#houseware #searchCategory #menu h4,
#stationery #searchCategory #menu h4,
#daily-goods #searchCategory #menu h4,
#nursing-care #searchCategory #menu h4{border-color:#9cb416;} /* nursing-care 150212sm17 */
#kuruma #searchCategory #menu h4,
#bike #searchCategory #menu h4,
#bike-goods #searchCategory #menu h4,
#car-goods #searchCategory #menu h4{border-color:#013466;}
#searchCategory .menuPartition{
	width:184px;
	padding-bottom:10px;
}
/* カテゴリ追加 sm03 10.10.01 */
#drink #searchCategory #menu h4{border-color:#ff9934;}
#hobby #searchCategory #menu h4,
#gakki #searchCategory #menu h4,
#toy #searchCategory #menu h4{border-color:#feae00;}
#watch-accessory #searchCategory #menu h4{border-color:#cc3366;}
#diy #searchCategory #menu h4,
#electric-tools #searchCategory #menu h4,
#working-tool #searchCategory #menu h4,
#agriculture #searchCategory #menu h4{border-color:#001789;}
#food #searchCategory #menu h4{border-color:#ff9966;}
/* カテゴリ追加 20150709 sm11 */
#instant-food #searchCategory #menu h4{border-color:#ff9966;}
#health-food #searchCategory #menu h4{border-color:#60bf01;}
/* カテゴリ追加 101210SM5 */
#kitchen #searchCategory #menu h4,
/* カテゴリ追加 sm07 10.11.01 */
#cookware #searchCategory #menu h4,
#kitchen-goods #searchCategory #menu h4{border-color:#60bf01;}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data #searchCategory #menu h4{border-color:#5533bb;}

#default #searchCategory .menuPartition,
#shoes #searchCategory .menuPartition,
#sports-shoes #searchCategory .menuPartition,
#ladies-shoes #searchCategory .menuPartition,
#mens-shoes #searchCategory .menuPartition,
#kids-shoes #searchCategory .menuPartition,
#shoes-accessories #searchCategory .menuPartition,
#outdoor #searchCategory .menuPartition,
#housing #searchCategory .menuPartition,
#reform #searchCategory .menuPartition,
#lighting #searchCategory .menuPartition
{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_default.gif) no-repeat left bottom;
}
#pc #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_pc.gif) no-repeat left bottom;
}
#kaden #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_kaden.gif) no-repeat left bottom;
}
#camera #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_camera.gif) no-repeat left bottom;
}
#keitai #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_keitai.gif) no-repeat left bottom;
}
#bb #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_bb.gif) no-repeat left bottom;
}
#game #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_game.gif) no-repeat left bottom;
}
#book-cd-dvd #searchCategory .menuPartition,
#book #searchCategory .menuPartition,
#dvd #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_dvd.gif) no-repeat left bottom;
}
/* fitness追加 150108sm17 */
#fitness #searchCategory .menuPartition,
#sports-wear #searchCategory .menuPartition,
#sports #searchCategory .menuPartition,
#golf #searchCategory .menuPartition,
#bicycle #searchCategory .menuPartition,
#snow #searchCategory .menuPartition,
#fishing #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_sports.gif) no-repeat left bottom;
}
#kuruma #searchCategory .menuPartition,
#bike #searchCategory .menuPartition,
#car-goods #searchCategory .menuPartition,
#bike-goods #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_kuruma.gif) no-repeat left bottom;
}
#insurance #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_insurance.gif) no-repeat left bottom;
}
#money #searchCategory .menuPartition,
#card #searchCategory .menuPartition,
#loan #searchCategory .menuPartition,
#invest #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_money.gif) no-repeat left bottom;
}
#food-drink #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_food.gif) no-repeat left bottom;
}
#food-drink #searchCategory .menuPartition.colorLow {
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_food2.gif) no-repeat left bottom;
}
#fashion #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_fashion.gif) no-repeat left bottom;
}
#beauty-health #searchCategory .menuPartition,
#contactlens #searchCategory .menuPartition,
#cosme #searchCategory .menuPartition,
#cosmetic #searchCategory .menuPartition,
#medicine #searchCategory .menuPartition,
#supplement #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_beauty.gif) no-repeat left bottom;
}
#interior #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_interior.gif) no-repeat left bottom;
}
#houseware #searchCategory .menuPartition,
#stationery #searchCategory .menuPartition,
#daily-goods #searchCategory .menuPartition,
#nursing-care #searchCategory .menuPartition{ /* nursing-care 150212sm17 */
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_houseware.gif) no-repeat left bottom;
}
/* カテゴリ追加 sm11 150817*/
#pet #searchCategory .menuPartition,
#dog-goods #searchCategory .menuPartition,
#cat-goods #searchCategory .menuPartition,
#animal-goods #searchCategory .menuPartition {
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_pet.gif) no-repeat left bottom;
}
/* カテゴリ追加 sm5 120806 */
#baby #searchCategory .menuPartition,
#maternity #searchCategory .menuPartition,
#baby-goods #searchCategory .menuPartition,
#kids #searchCategory .menuPartition {
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_baby.gif) no-repeat left bottom;
}
/* カテゴリ追加 sm03 10.10.01 */
#drink #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_drink.gif) no-repeat left bottom;
}
#hobby #searchCategory .menuPartition,
#gakki #searchCategory .menuPartition,
#toy #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_hobby.gif) no-repeat left bottom;
}
#watch-accessory #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_watch.gif) no-repeat left bottom;
}
#diy #searchCategory .menuPartition,
#electric-tools #searchCategory .menuPartition,
#working-tool #searchCategory .menuPartition,
#agriculture #searchCategory .menuPartition {
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_default.gif) no-repeat left bottom;
}
#food #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_foods.gif) no-repeat left bottom;
}
/* カテゴリ追加 20150709 sm11 */
#instant-food #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_foods.gif) no-repeat left bottom;
}
#health-food #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_health.gif) no-repeat left bottom;
}
/* カテゴリ追加 101210SM5 */
#kitchen #searchCategory .menuPartition,
/* カテゴリ追加 sm07 10.11.01 */
#cookware #searchCategory .menuPartition,
#kitchen-goods #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_kitchen.gif) no-repeat left bottom;
}
#mobile-data #searchCategory .menuPartition{
	background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_mobile_data.gif) no-repeat left bottom;
}
#menu .menuBox01 li.noDot{
	margin-top: 5px;
	font-size: 107%;
	line-height: 120%;
	list-style: none;
	width: 184px;
	background:none;
	padding-left:0px;
}
#menu #ppanel .menuBox01 li.noDot a {
	width: 184px;
	display: inline;
	margin: 0px;
	padding: 0px;
}
#default #searchCategory .searchSort strong,
#shoes #searchCategory .searchSort strong,
#sports-shoes #searchCategory .searchSort strong,
#ladies-shoes #searchCategory .searchSort strong,
#mens-shoes #searchCategory .searchSort strong,
#kids-shoes #searchCategory .searchSort strong,
#shoes-accessories #searchCategory .searchSort strong,
#outdoor #searchCategory .searchSort strong,
#housing #searchCategory .searchSort strong,
#reform #searchCategory .searchSort strong,
#lighting #searchCategory .searchSort strong {background:#9aa2d1;}
#pc #searchCategory .searchSort strong{background:#98d6ff;}
#kaden #searchCategory .searchSort strong{background:#ffc29a;}
#camera #searchCategory .searchSort strong{background:#9ad6d6;}
#game #searchCategory .searchSort strong{background:#ffebad;}
#book-cd-dvd #searchCategory .searchSort strong,
#book #searchCategory .searchSort strong,
#dvd #searchCategory .searchSort strong{
background:#add6ac;}
/* fitness追加 150108sm17 */
#fitness #searchCategory .searchSort strong,
#sports-wear #searchCategory .searchSort strong,
#sports #searchCategory .searchSort strong,
#golf #searchCategory .searchSort strong,
#bicycle #searchCategory .searchSort strong,
#snow #searchCategory .searchSort strong,
#fishing #searchCategory .searchSort strong{
background:#acd6ea;}
#food-drink #searchCategory .searchSort strong{background:#ffd6ae;}
/* カテゴリ追加 sm5 120806 */
#baby #searchCategory .searchSort strong,
#maternity #searchCategory .searchSort strong,
#baby-goods #searchCategory .searchSort strong,
#kids #searchCategory .searchSort strong {background:#ffd1ed;}
/* カテゴリ追加 sm11 150817*/
#pet #searchCategory .searchSort strong,
#dog-goods #searchCategory .searchSort strong,
#cat-goods #searchCategory .searchSort strong,
#animal-goods #searchCategory .searchSort strong {background:#f4d2a6;}
#fashion #searchCategory .searchSort strong{background:#d99999;}
#beauty-health #searchCategory .searchSort strong,
#contactlens #searchCategory .searchSort strong,
#cosme #searchCategory .searchSort strong,
#cosmetic #searchCategory .searchSort strong,
#medicine #searchCategory .searchSort strong,
#supplement #searchCategory .searchSort strong{
background:#d7ebae;}
#interior #searchCategory .searchSort strong{background:#eceb98;}
#houseware #searchCategory .searchSort strong,
#stationery #searchCategory .searchSort strong,
#daily-goods #searchCategory .searchSort strong,
#nursing-care #searchCategory .searchSort strong{background:#ddea90;} /* nursing-care 150212sm17 */
#kuruma #searchCategory .searchSort strong,
#bike #searchCategory .searchSort strong,
#car-goods #searchCategory .searchSort strong,
#bike-goods #searchCategory .searchSort strong{
background:#98adc2;}
/* カテゴリ追加 sm03 10.10.01 */
#drink #searchCategory .searchSort strong{background:#ffd6ae;}
#hobby #searchCategory .searchSort strong,
#gakki #searchCategory .searchSort strong,
#toy #searchCategory .searchSort strong{background:#ffe793;}
#watch-accessory #searchCategory .searchSort strong{background:#ffc4c4;}
#diy #searchCategory .searchSort strong,
#electric-tools #searchCategory .searchSort strong,
#working-tool #searchCategory .searchSort strong,
#agriculture #searchCategory .searchSort strong{background:#9aa2d1;}
#food #searchCategory .searchSort strong{background:#febb99;}
/* カテゴリ追加 20150709 sm11 */
#instant-food #searchCategory .searchSort strong{background:#febb99;}
#health-food #searchCategory .searchSort strong{background:#c5ee99;}
/* カテゴリ追加 101210SM5 */
#kitchen #searchCategory .searchSort strong,
#cookware #searchCategory .searchSort strong,
#kitchen-goods #searchCategory .searchSort strong{background:#c5ee99;}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data #searchCategory .searchSort strong{background:#bbade4;}

#menu .mallSort img{
	vertical-align:middle;
	margin-right:3px;
}
#menu .mallSort a{
	width:120px;
}
#menu .menuBox01 .mallSort li.noDot a {
	display:inline;
	margin:0;
	padding:0;
	width:120px;
}
#menu .menuBox01 .mallSort li.noMall{
	color:#696969;
}

/*--サーチ系プライスメニュー　絞り込み_end
------------------------------------------------ */
/*特集一覧部分の関連特集・記事を見るボタン(08/11/11 児玉追加)
------------------------------------------------ */

#main  .footerSpTab {
text-align:center;
width:704px;
}
#main  .footerSpTab a {
	background:#4F7FCB none repeat scroll 0 0;
color:white;
display:block;
padding:3px 0;
width:704px;
}
/*特集一覧部分の関連特集・記事を見るボタン　ここまで
------------------------------------------------ */

/*■■■clearfix■■■*/
.boxArea:after,
.block:after,
#main .boxSearch:after,
.boxSearchBtm:after,
#main .full:after,
#main .full .boxA .keywordRank .line:after,
#main .full .boxA .dotlineRank:after,
#searchCategory  .tblRanking-new td .title:after,
#searchCategory  .tblRanking-new td .photo:after,
#related_category .itemBox:after,
#pickupArticle .itemBox:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.boxArea,
.block,
#main .boxSearch,
.boxSearchBtm,
#main .full,
#main .full .boxA .keywordRank .line,
#main .full .boxA .dotlineRank,
#searchCategory  .tblRanking-new td .title,
#searchCategory  .tblRanking-new td .photo,
#related_category .itemBox,
#pickupArticle .itemBox {
	zoom: 1;
}

/* 検索キーワードランキング・2008/11/07更新
------------------------------------------------ */
#main .full .boxRank{
margin-top:10px;
line-height:100%;
background:#e8e8e8 url(https://img1.kakaku.k-img.com/images/category/box_rank_full_btm.gif) no-repeat left bottom;
}
#main .full .boxRank .boxWhite {
	padding: 0px 8px;
	margin: 0px;
	background: #fff;
	width: 710px;
	voice-family: "\"}\"";
	voice-family:inherit;
	width: 694px;
	height:1%;
}
#main .full .boxRank .h3box {
	width: 720px;
	padding: 11px 10px 7px 45px !important;
	background: url(https://img1.kakaku.k-img.com/images/category/h3_type_rankkeyword.gif) no-repeat left top;
	voice-family: "\"}\"";
	voice-family:inherit;
	width: 665px;
}
#main .full .boxRank .boxWhiteToprank{
	padding-top: 3px;
	margin: 0px 5px;
	background: url(https://img1.kakaku.k-img.com/images/category/box_w_f_top_rank.gif) no-repeat left top;
	line-height:100%;
}
#main .full .boxRank .boxWhiteBtmrank{
	padding-bottom: 0px;
}
#main .full .boxRank .h3box .keywordRank_icon .icon{
	background: url(https://img1.kakaku.k-img.com/images/category/keywordRank.gif) no-repeat left top;
	width: 74px;
	height:34px;
	margin-top:0px;
}
#main .full .boxRank .h3box .keywordRank_icon{
padding-bottom:1px;
}
#main .full .boxRank .boxWhite.keywordRank {
	padding: 0px 8px;
	margin: 0px;
}
#main .full .boxRank .keywordRank .rankCellL{
	width:334px;
	padding-right:10px;
	float:left;
}
#main .full .boxRank .keywordRank .rankCellR{
	width:334px;
	padding-left:10px;
	float:right;
}
#main .full .boxRank .keywordRank .titleHalf{
font-weight:bold;
height:16px;
padding:5px 5px 3px 15px;
margin:5px 0px;
}
#shoes .keywordRank .titleHalf,
#sports-shoes .keywordRank .titleHalf,
#ladies-shoes .keywordRank .titleHalf,
#mens-shoes .keywordRank .titleHalf,
#kids-shoes .keywordRank .titleHalf,
#shoes-accessories .keywordRank .titleHalf,
#outdoor .keywordRank .titleHalf,
#housing .keywordRank .titleHalf,
#reform .keywordRank .titleHalf,
#lighting .keywordRank .titleHalf {
	background:url(https://img1.kakaku.k-img.com/images/category/shoes_title.gif) no-repeat scroll left top;
}
#pc .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/pc_title.gif) no-repeat scroll left top;
}
#kaden .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/kaden_title.gif) no-repeat scroll left top;
}
#camera .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/camera_title.gif) no-repeat scroll left top;
}
#game .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/game_title.gif) no-repeat scroll left top;
}
#book-cd-dvd .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/book-cd-dvd_title.gif) no-repeat scroll left top;
}
/* fitness追加 150108sm17 */
#fitness .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/sports_title.gif) no-repeat scroll left top;
}
#sports-wear .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/sports_title.gif) no-repeat scroll left top;
}
#sports .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/sports_title.gif) no-repeat scroll left top;
}

#food-drink .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/food-drink_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 sm5 120806 */
#baby .keywordRank .titleHalf,
#maternity .keywordRank .titleHalf,
#baby-goods .keywordRank .titleHalf,
#kids .keywordRank .titleHalf {
	background:url(https://img1.kakaku.k-img.com/images/category/baby_title.gif) no-repeat scroll left top;
}
#fashion .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/fashion_title.gif) no-repeat scroll left top;
}
#beauty-health .keywordRank .titleHalf,
#cosme .keywordRank .titleHalf,
#cosmetic .keywordRank .titleHalf,
#medicine .keywordRank .titleHalf,
#supplement .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/beauty-health_title.gif) no-repeat scroll left top;
}
#interior .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/interior_title.gif) no-repeat scroll left top;
}
#houseware .keywordRank .titleHalf,
#stationery .keywordRank .titleHalf,
#daily-goods .keywordRank .titleHalf,
#nursing-care .keywordRank .titleHalf{ /* nursing-care 150212sm17 */
	background:url(https://img1.kakaku.k-img.com/images/category/houseware_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 sm11 150817*/
#pet .keywordRank .titleHalf,
#dog-goods .keywordRank .titleHalf,
#cat-goods .keywordRank .titleHalf,
#animal-goods .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/pet_title.gif) no-repeat scroll left top;
}
#kuruma .keywordRank .titleHalf,
#bike .keywordRank .titleHalf,
#car-goods .keywordRank .titleHalf,
#bike-goods .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/kuruma_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 sm03 10.10.01 */
#drink .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/drink_title.gif) no-repeat scroll left top;
}
#hobby .keywordRank .titleHalf,
#gakki .keywordRank .titleHalf,
#toy .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/hobby_title.gif) no-repeat scroll left top;
}
#watch-accessory .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/watch_title.gif) no-repeat scroll left top;
}
#diy .keywordRank .titleHalf,
#electric-tools .keywordRank .titleHalf,
#working-tool .keywordRank .titleHalf,
#agriculture .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/default_title.gif) no-repeat scroll left top;
}
#food .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/foods_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 20150709 sm11 */
#instant-food .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/foods_title.gif) no-repeat scroll left top;
}
#health-food .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/health_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 101210SM5 */
#kitchen .keywordRank .titleHalf,
/* カテゴリ追加 sm07 10.11.01 */
#cookware .keywordRank .titleHalf,
#kitchen-goods .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/kitchen_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data .keywordRank .titleHalf{
	background:url(https://img1.kakaku.k-img.com/images/category/mobile_data_title.gif) no-repeat scroll left top;
}
/* カテゴリ追加 sm5 120806 */
#baby #searchCategory .searchSort strong,
#maternity #searchCategory .searchSort strong,
#baby-goods #searchCategory .searchSort strong,
#kids #searchCategory .searchSort strong {background:#ffd1ed;}
/* カテゴリ追加 sm11 150817*/
#pet #searchCategory .searchSort strong,
#dog-goods #searchCategory .searchSort strong,
#cat-goods #searchCategory .searchSort strong,
#animal-goods #searchCategory .searchSort strong{background:#f4d2a6;}
#fashion #searchCategory .searchSort strong{background:#d99999;}
#beauty-health #searchCategory .searchSort strong,
#medicine #searchCategory .searchSort strong,
#supplement #searchCategory .searchSort strong{background:#d7ebae;}
#interior #searchCategory .searchSort strong{background:#eceb98;}
#kuruma #searchCategory .searchSort strong,
#bike #searchCategory .searchSort strong,
#car-goods #searchCategory .searchSort strong,
#bike-goods #searchCategory .searchSort strong{background:#98adc2;}
/* カテゴリ追加 sm03 10.10.01 */
#drink #searchCategory .searchSort strong{background:#ffd6ae;}
#hobby #searchCategory .searchSort strong,
#gakki #searchCategory .searchSort strong,
#toy #searchCategory .searchSort strong{background:#ffe793;}
#watch-accessory #searchCategory .searchSort strong{background:#ffc4c4;}
#diy #searchCategory .searchSort strong,
#electric-tools #searchCategory .searchSort strong,
#working-tool #searchCategory .searchSort strong,
#agriculture #searchCategory .searchSort strong {background:#9aa2d1;}
#food #searchCategory .searchSort strong{background:#febb99;}
/* カテゴリ追加 20150709 sm11 */
#instant-food #searchCategory .searchSort strong{background:#febb99;}
#health-food #searchCategory .searchSort strong{background:#c5ee99;}
/* カテゴリ追加 101210SM5 */
#kitchen #searchCategory .searchSort strong,
/* カテゴリ追加 sm07 10.11.01 */
#cookware #searchCategory .searchSort strong{background:#c5ee99;}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data #searchCategory .searchSort strong{background:#bbade4;}
#shoes #searchCategory .searchSort strong,
#sports-shoes #searchCategory .searchSort strong,
#ladies-shoes #searchCategory .searchSort strong,
#mens-shoes #searchCategory .searchSort strong,
#kids-shoes #searchCategory .searchSort strong,
#shoes-accessories #searchCategory .searchSort strong,
#outdoor #searchCategory .searchSort strong,
#housing #searchCategory .searchSort strong,
#reform #searchCategory .searchSort strong,
#lighting #searchCategory .searchSort strong {background:#9aa2d1;}

#main .full .boxRank .keywordRank .line {
	margin:5px;
	margin-top:2px;
	padding-bottom:3px;
	background:url(https://img1.kakaku.k-img.com/images/category/dotline01.gif) repeat-x left bottom;
}
#main .full .boxRank .keywordRank .line p{
	font-size:107%;
	font-weight:bold;
	color:#555555;
}
#main .full .boxRank .keywordRank .rank1,
#main .full .boxRank .keywordRank .rank2,
#main .full .boxRank .keywordRank .rank3,
#main .full .boxRank .keywordRank .rank{
	width:55px;
	text-align:right;
	float:left;
}
#main .full .boxRank .keywordRank p.rank1,
#main .full .boxRank .keywordRank p.rank2,
#main .full .boxRank .keywordRank p.rank3{
	color:#ff6b00;
}
#main .full .boxRank .keywordRank .rank1{background:url(https://img1.kakaku.k-img.com/images/category/crown1.gif) no-repeat scroll left center;}
#main .full .boxRank .keywordRank .rank2{background:url(https://img1.kakaku.k-img.com/images/category/crown2.gif) no-repeat scroll left center;}
#main .full .boxRank .keywordRank .rank3{background:url(https://img1.kakaku.k-img.com/images/category/crown3.gif) no-repeat scroll left center;}
#main .full .boxRank .keywordRank .name{
	color:#555555;
	width:255px;
	float:right;
	padding-left:10px;
}
#searchCategory .rankPointer{
	text-align:right;
}
#searchCategory .rankPointer img{
	vertical-align:middle;
	margin-right:3px;
}
#searchCategory .tblRanking-new th.rank-etc3 {
border-bottom:none;
height:5px;
background:url(https://img1.kakaku.k-img.com/images/category/tblRanking_cell5.gif) repeat-x bottom left;
}

/* 検索キーワードランキング clearfix */
#main .full .boxRank .keywordRank .line:after,
#main .full .boxRank .dotlineRank:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
#main .full .boxRank .keywordRank .line,
#main .full .boxRank .dotlineRank{
	zoom: 1;
}
/* /検索キーワードランキング clearfix */

/* 新着クチコミ 件数なし */
#main ul.listTypeA p.notxt{
line-height:100%;
padding:9px 0;
margin:0;
}
.nodata{
height:1%;
padding:30px 0;
background:#fff;
border-bottom:1px solid #fff;
}
.nodata strong{
font-size:120%;
line-height:100%;
}
.nodata p{
font-size:100%;
line-height:18px;
margin:0;
padding-top:15px;
}
.nodata .nocomment,
.nodata .noreview{
padding:5px 10px 10px 80px;
}
.nodata .nocomment strong{
color:#ff8400;
margin-left:30px;
}
.nodata .noreview strong{
color:#ff0000;
margin-left:20px;
}
.nodata .nocomment{
background:url(https://img1.kakaku.k-img.com/images/category/nocomment.gif) no-repeat left top;
}
.nodata .noreview{
background:url(https://img1.kakaku.k-img.com/images/prdevaluate/noreview.gif) no-repeat left top;
}

#searchCategory #main .boxUnit div.boxWhite a.arrowNex{
	height:1%;
}
/* /新着クチコミ 件数なし */

/* 新着クチコミ 件数なし　サーチカテゴリ用 */
#searchCategory #main .full .boxB .boxBtm .nodata .nocomment{
	background:url(https://img1.kakaku.k-img.com/images/category/nocomment.gif) no-repeat 187px 100%;
}

#searchCategory #main .full .boxB .boxBtm .nodata .nocomment{
	padding:5px 10px 10px 267px;
}
/* 新着クチコミ 件数なし　サーチカテゴリ用 */


/* 価格.com 関連カテゴリ */
#menu #related_category h2#kanrenBox{
	background:#FEFEFE url(https://img1.kakaku.k-img.com/images/category/kanren_ttl.jpg) no-repeat left top;
	font-size: 100%;
	font-weight: bold;
	line-height: 120%;
	border-bottom:1px solid #CCC;
	padding:4px 7px;
}
#menu #related_category #kanrenBoxCts{
	border-left:1px solid #CCC;
	border-right:1px solid #CCC;
	border-bottom:1px solid #CCC;
	padding:1px 7px 6px 7px;
	min-height:1%;
	_height:1px;
}

/* デスクトップパソコンナビゲーター 100914 sm5 */
#main div.deskpcNav .boxA {
	background-image: none;
}
#main div.deskpcNav .h3box span.icon {
background:url(https://img1.kakaku.k-img.com/images/category/h3_icon_deskpcnav.gif) no-repeat scroll left top transparent;
}
#main div.deskpcNav .h3box span.floatR {
	margin:-2px -8px 0 0;
}

/* トレンドカテゴリ */
.full .boxB .boxBtm .trendBlock{
	display:block;
}
.full .boxB .boxBtm ul#trendTab{
	margin:0;
	padding:5px 15px 0 15px;
	width:690px;
	background:#E8E8E8;
}
.full .boxB .boxBtm ul#trendTab li{
	list-style:none;
	width:160px;
	float:left;
	margin:0 3px 0 0;
}
.full .boxB .boxBtm ul#trendTab li img{
	display:block;
}
.full .boxB .boxBtm ul#trendTabIn{
	background:#FFEDA4;
	padding:0 0 0 10px;
	width:700px;
	margin:0 5px;
}
.full .boxB .boxBtm ul#trendTabIn li{
	list-style:none;
	float:left;
	background:url(https://img1.kakaku.k-img.com/images/category/trend_menu_bd.gif) no-repeat right bottom;
}
.full .boxB .boxBtm ul#trendTabIn li a,
.full .boxB .boxBtm ul#trendTabIn li strong{
	display:block;
	float:left;
}
.full .boxB .boxBtm ul#trendTabIn li a{
	padding:4px 12px 5px 10px;
	color:#333;
	text-decoration:none;
}
.full .boxB .boxBtm ul#trendTabIn li a:hover,
.full .boxB .boxBtm ul#trendTabIn li strong{
	background:#FFF url(https://img1.kakaku.k-img.com/images/category/tab_r01.gif) no-repeat left top;
	margin:0 4px 0 2px;
	padding:0;
}
.full .boxB .boxBtm ul#trendTabIn li a:hover span,
.full .boxB .boxBtm ul#trendTabIn li strong span{
	background:url(https://img1.kakaku.k-img.com/images/category/tab_r02.gif) no-repeat right top;
	padding:4px 8px 5px 8px;
	display:block;
}
.full .boxB .boxBtm .trendIn{
	padding:10px 10px 0 10px;
	background:#FFF;
	margin:0 5px;
	width:690px;
}
.full .boxB .boxBtm .trendIn .floatL{
	width:596px;
	padding-top:3px;
}
.full .boxB .boxBtm .trendIn .floatR{
	width:79px;
}
.full .boxB .boxBtm .trendIn #noFlash{
	margin:10px 0 15px 0;
}

/*--サーチ系　アーティスト検索--
------------------------------------------------ */
#main .full .boxB .boxBtm .artistSearchList a:visited,
#main .full .boxB .boxBtm .artistList a:visited {
	color:#0000dd;
}
#main .full .boxB .boxBtm .artistSearchList a:hover,
#main .full .boxB .boxBtm .artistList a:hover {
	color: #0099ff;
	text-decoration:none;
}
#main .full .boxB .boxBtm .artistSearchList,
#main .full .boxB .boxBtm .artistList {
	background:#fff;
	margin:0;
	padding:10px 0 0 10px;
}
#main .full .boxB .boxBtm .artistSearchList ul {
	list-style:none;
	float:left;
	height:1%;
	display:block;
	margin:0 0 10px 4px;
	padding:0 3px 2px 0;
	height:1em;
	white-space:nowrap;
	border-right:1px solid #cccccc;
}
#main .full .boxB .boxBtm .artistSearchList ul li {
	display:inline;
	margin:0;
	padding:0;
}
#main .full .boxB .boxBtm .artistSearchList ul li a {
	padding:0.2em 0.4em;
}
#main .full .boxB .boxBtm .artistSearchList ul li span {
	font-weight:bold;
	text-decoration:underline;
}
#main .full .boxB .boxBtm .artistSearchList ul.alphabet {
	width:690px;
	height:auto;
	padding-top:10px;
	white-space:normal;
	word-break:break-all;
	border:none;
}
#main .full .boxB .boxBtm .artistSearchList ul li span.checkNow {
	padding:0.2em 0.4em;
	text-decoration:none;
	color:#333;
}
/* リンクがない場合 */
#main .full .boxB .boxBtm .artistSearchList ul li span.noList {
	padding:0.2em 0.4em;
	color:#666;
	text-decoration:none;
}
#main .full .boxB .boxBtm .artistSearchList ul.alphabet li a {
	padding:0.2em 0.4em;
}

#main .full .boxB .boxBtm .artistList .artistListTtl {
	width:690px;
	margin-bottom:7px;
	line-height:170%;
	background:url(https://img1.kakaku.k-img.com/images/category/dotline01.gif) repeat-x bottom;
}
#main .full .boxB .boxBtm .artistList .artistListTtl h4 {
	display:inline;
	font-size:100%;
	font-weight:normal;
	margin-right:7px;
}
#main .full .boxB .boxBtm .artistList .artistListTtl h4 em {
	font-style:normal;
	font-weight:bold;
}
#main .full .boxB .boxBtm .artistList .artistListTtl p {
	display:inline;
}

#main .full .boxB .boxBtm .artistList .clearfix {
	width:690px;
}

#main .full .boxB .boxBtm .artistList .boxGrey {
	background:#f2f2f2;
}

#main .full .boxB .boxBtm .artistList p.artistNameL {
	width:333px;
	padding:4px 0 4px 12px;
	background:url(https://img1.kakaku.k-img.com/images/category/bg_artist_list.gif) no-repeat 5px 10px;
	float:left;
}

#main .full .boxB .boxBtm .artistList p.artistNameR {
	width:333px;
	padding:4px 0 4px 12px;
	background:url(https://img1.kakaku.k-img.com/images/category/bg_artist_list.gif) no-repeat 5px 10px;
	float:right;
}

#main .full .boxB .boxBtm .artistList p.artistNameL span,
#main .full .boxB .boxBtm .artistList p.artistNameR span {
	margin-left:2px;
}

/* paging(小) */
#main .full .boxB .boxBtm .short_paging {
	font-weight:bold;

	text-align:center;
	padding:15px 0;
}
#main .full .boxB .boxBtm .short_paging p {
	display:inline;
}
#main .full .boxB .boxBtm .short_paging span.now {
	background: #cccccc;
	border:1px solid #cccccc;
	margin:2px;
	color:#fff;
	padding:0.2em 0.5em;
}
#main .full .boxB .boxBtm .short_paging span.prev,
#main .full .boxB .boxBtm .short_paging span.next { border: none; }
#main .full .boxB .boxBtm .short_paging span.prev_no,
#main .full .boxB .boxBtm .short_paging span.prev a {
	background:url(https://img1.kakaku.k-img.com/images/category/category_prev.gif) no-repeat 0px center;
	padding:0.2em 0.5em 0.2em 13px;
	text-decoration: none;
}
#main .full .boxB .boxBtm .short_paging span.next_no,
#main .full .boxB .boxBtm .short_paging span.next a {
	background:url(https://img1.kakaku.k-img.com/images/category/category_next.gif) no-repeat right center;
	padding:0.2em 13px 0.2em 0.5em;
	text-decoration: none;
}
#main .full .boxB .boxBtm .short_paging span.prev a:link,
#main .full .boxB .boxBtm .short_paging span.prev a:visited,
#main .full .boxB .boxBtm .short_paging span.next a:link,
#main .full .boxB .boxBtm .short_paging span.next a:visited {
	border:none;
	width:auto;
	text-decoration: none;
}
#main .full .boxB .boxBtm .short_paging span.prev a:hover {
	border:none;
	width:auto;
	text-decoration:underline;
	background:url(https://img1.kakaku.k-img.com/images/category/category_prev_over.gif) no-repeat left center;
}
#main .full .boxB .boxBtm .short_paging span.next a:hover {
	border:none;
	width:auto;
	text-decoration:underline;
	background:url(https://img1.kakaku.k-img.com/images/category/category_next_over.gif) no-repeat right center;
}
#main .full .boxB .boxBtm .short_paging .num a {
	border:1px solid #cccccc;
	margin:2px;
	padding:0.2em 0.45em 0.2em 0.5em;
}
#main .full .boxB .boxBtm .short_paging .num a:link,
#main .full .boxB .boxBtm .short_paging .num a:visited,
#main .full .boxB .boxBtm .short_paging .num a:active {
	color:#0000de;
	background-color:#fff;
	text-decoration:none;
}
#main .full .boxB .boxBtm .short_paging .num a:hover {
	color:#333333;
	background-color:#eeeeee;
}
/* 携帯カテゴリ 2カラムver追加 2009.05 */
.tblRanking-new.doubleBox td {
	background:#fff url(https://img1.kakaku.k-img.com/images/category/tblRanking_line_m.gif) bottom no-repeat;
	width:327px;
}
.tblRanking-new td.btm { background:#fff url(https://img1.kakaku.k-img.com/images/spacer.gif) bottom no-repeat; }
.tblRanking-new td.end {
	border:none !important;
	width:327px;
}
.tblRanking-new.doubleBox td.tab {
	border:none;
	background:none;
	width:218px;
}
.tblRanking-new.doubleBox .cell3 {
	width:327px;
}
.tblRanking-new.doubleBox .cell4 {
	width:327px;
}
.tblRanking-new.doubleBox td .item {
	clear:both;
	float:left;
	padding:3px 0px 3px 25px;
}
/* 130920 sm4 */
#cosme .tblRanking-new.doubleBox td .item,
#cosmetic .tblRanking-new.doubleBox td .item,
#medicine .tblRanking-new.doubleBox td .item,
#supplement .tblRanking-new.doubleBox td .item {
	width:80px;
	text-align:center;
}

.tblRanking-new.doubleBox td .name {
	float:left;
	width:215px;
	padding:0 0 10px 0;
	line-height:1.1;
	font-size:107%;
	font-weight:bold;
	word-break:break-all;
}
.tblRanking-new.doubleBox td .name p {
	margin-left:25px;
}
.tblRanking-new.doubleBox td .name a {
	color: #0000dd;
	display:block;
	text-decoration:underline !important;
}
.tblRanking-new.doubleBox td .name a:hover {
	color: #0099ff;
}
.tblRanking-new.doubleBox td .title p {
	padding-bottom:5px;
}
.tblRanking-new.doubleBox th.rank-etc2 {
	height:30px;
}
/* 130613 sm4 */
.tblRanking-new.doubleBox td .price {
    margin-left:20px;
}
.tblRanking-new.doubleBox td .title p.titlePdt {
    width:295px;
}
/*マネー用スタイル　2009.08togashi*/
#money .tblRanking-new.doubleBox td .name p,
#card .tblRanking-new.doubleBox td .name p,
#loan .tblRanking-new.doubleBox td .name p,
#invest .tblRanking-new.doubleBox td .name p {
	margin-left:10px;
}

/*-----色検索-----*/
#menu #colorSearchLine{
	padding:0 0 3px 0;
	margin-top: 10px;
	font-weight: bold;
	color: #666666;
	background: url(https://img1.kakaku.k-img.com/images/category/dotline01.gif) repeat-x left bottom;
	width:184px;
	font-size: 107%;
}
#menu #colorSearchLine p{
	float:left;
}
#menu #colorSearchLine span#colorSearch{
	float:left;
	position:relative;
	top:-3px;
	left:3px;
}
#menu span#colorSearch input#defaultcolor,
#menu span#colorSearch input#color{
	border:1px solid #ccc;
	padding:2px;
}
#menu .changeUi {
	background:url(https://img1.kakaku.k-img.com/images/search/color/line_colorselect.gif) no-repeat;
	width:170px;
	font-size:100%;
	margin:0 0 0 7px;
	padding:5px 0;
	text-align:center;
}
#menu .changeUi img {
	vertical-align:middle;
	margin-right:3px;
	padding-bottom:1px;
}
#menu .changeUi a, .changeUi a:hover, .changeUi a:visited {
	color:#333;
}
#menu #colorSearchBoxIn ul,
#menu .colorSearchBoxIn ul {
	list-style:none;
	margin:2px 0;
}
#menu .menuBox01 #colorSearchBoxIn ul li,
#menu .menuBox01 .colorSearchBoxIn ul li {
	background:none;
	float:left;
	width:33px;
	height:33px;
	margin:0;
	padding:0;
}
#menu .menuBox01 #colorSearchBoxIn ul li img,
#menu .menuBox01 .colorSearchBoxIn ul li img {
	vertical-align:bottom;
}
#menu .menuBox01 #colorSearchBoxIn ul li a,
#menu .menuBox01 .colorSearchBoxIn ul li a {
	display:inline;
}
/*IE5.5で非表示*/
#colorSearchBox, #colorSearchLine, #colorSearchBoxIn, #colorSearchPm, .changeUi,
#colorSearchBox, #colorSearchLine, .colorSearchBoxIn, #colorSearchPm, .changeUi {
  display:none;
  voice-family: "\"}\"";
  voice-family: inherit;
  display:block;
}
#colorSearchBoxIn,
.colorSearchBoxIn {
	clear:both;
	width:165px;
	margin:0 9px;
	padding:5px 0;
}

/*プライスメニュー用*/
#menu #h2color{
	padding-bottom:8px;
}
#default #menu #h2color,
#shoes #menu #h2color,
#sports-shoes #menu #h2color,
#ladies-shoes #menu #h2color,
#mens-shoes #menu #h2color,
#kids-shoes #menu #h2color,
#shoes-accessories #menu #h2color,
#outdoor #menu #h2color,
#housing #menu #h2color,
#reform #menu #h2color,
#lighting #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_default.gif) no-repeat left bottom;}
#pc #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_pc.gif) no-repeat left bottom;}
#kaden #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_kaden.gif) no-repeat left bottom;}
#camera #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_camera.gif) no-repeat left bottom;}
#keitai #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_keitai.gif) no-repeat left bottom;}
#bb #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_bb.gif) no-repeat left bottom;}
#game #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_game.gif) no-repeat left bottom;}
#book-cd-dvd #menu #h2color,
#book #menu #h2color,
#dvd #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_dvd.gif) no-repeat left bottom;}
/* fitness追加 150108sm17 */
#fitness #menu #h2color,
#sports-wear #menu #h2color,
#sports #menu #h2color,
#golf #menu #h2color,
#bicycle #menu #h2color,
#snow #menu #h2color,
#fishing #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_sports.gif) no-repeat left bottom;}
#kuruma #menu #h2color,
#bike #menu #h2color,
#car-goods #menu #h2color,
#bike-goods #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_kuruma.gif) no-repeat left bottom;}
#insurance #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_insurance.gif) no-repeat left bottom;}
#money #menu #h2color,
#card #menu #h2color,
#loan #menu #h2color,
#invest #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_money.gif) no-repeat left bottom;}
#food-drink #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_food.gif) no-repeat left bottom;}
#fashion #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_fashion.gif) no-repeat left bottom;}
#beauty-health #menu #h2color,
#contactlens #menu #h2color,
#cosme #menu #h2color,
#cosmetic #menu #h2color,
#medicine #menu #h2color,
#supplement #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_beauty.gif) no-repeat left bottom;}
#interior #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_interior.gif) no-repeat left bottom;}
#houseware #menu #h2color,
#stationery #menu #h2color,
#daily-goods #menu #h2color,
#nursing-care #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_houseware.gif) no-repeat left bottom;} /* nursing-care 150212sm17 */
/* カテゴリ追加 sm11 150817*/
#pet #menu #h2color,
#dog-goods #menu #h2color,
#cat-goods #menu #h2color,
#animal-goods #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_pet.gif) no-repeat left bottom;}
/* カテゴリ追加 sm5 120806 */
#baby #menu #h2color,
#maternity #menu #h2color,
#baby-goods #menu #h2color,
#kids #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_baby.gif) no-repeat left bottom;}
#used #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_used.gif) no-repeat left bottom;}
#outlet #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_outlet.gif) no-repeat left bottom;}
/* カテゴリ追加 sm03 10.10.01 */
#drink #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_drink.gif) no-repeat left bottom;}
#hobby #menu #h2color,
#gakki #menu #h2color,
#toy #menu #h2color{background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_hobby.gif) no-repeat left bottom;}
#watch-accessory #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_watch.gif) no-repeat left bottom;}
#diy #menu #h2color,
#electric-tools #menu #h2color,
#working-tool #menu #h2color,
#agriculture #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_default.gif) no-repeat left bottom;}
#food #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_foods.gif) no-repeat left bottom;}
/* カテゴリ追加 20150709 sm11 */
#instant-food #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_foods.gif) no-repeat left bottom;}
#health-food #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_health.gif) no-repeat left bottom;}
/* カテゴリ追加 101210SM5 */
#kitchen #menu #h2color,
/* カテゴリ追加 sm07 10.11.01 */
#cookware #menu #h2color,
#kitchen-goods #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_kitchen.gif) no-repeat left bottom;}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data #menu #h2color {background: url(https://img1.kakaku.k-img.com/images/category/menu_bar_mobile_data.gif) no-repeat left bottom;}

#menu #h2color h2{
	background:none;
	padding:0;
	float:left;
}
#menu #h2color span#colorSearch{
	float:left;
	position:relative;
	top:-4px;
	left:3px;
}

/*-----属性検索-----*/
#menu ul.discountList li {
	background: url(https://img1.kakaku.k-img.com/images/category/search/arrow_9cf.gif) no-repeat left top;
	list-style: none;
	padding-left: 0px;
	width: 176px;
}
#menu ul.discountList li a {
	padding-left: 8px;
	width: 176px;
}
#menu img#discountHelp{
	margin-left:5px;
	position:relative;
	top:2px;
}

/*-----プライスメニューのタイプから選ぶ枠の拡張-----*/
#menu .menuBox01 h2.specMenu{
	position:relative;
}
#menu .menuBox01 h2.specMenu a{
	display:block;
	width:184px;
}
#menu .menuBox01 h2.specMenu a img{
	position:absolute;
	right:2px;
	_right:10px;
}
#menu .menuBox01 h2.specMenu a:link {
	color:#333;
	text-decoration:none;
}
#menu .menuBox01 h2.specMenu a:visited {
	color:#333;
}
#menu .menuBox01 h2.specMenu a:hover {
	color:#333;
	text-decoration:none;
}
/*-----ショッピングサイト別ランキング 090714sm2-----*/

/*カテゴリ別*/
#shoes #mallRank,
#sports-shoes #mallRank,
#ladies-shoes #mallRank,
#mens-shoes #mallRank,
#kids-shoes #mallRank,
#shoes-accessories #mallRank,
#outdoor #mallRank,
#housing #mallRank,
#reform #mallRank,
#lighting #mallRank {background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_shoes.gif) left top no-repeat;}
#pc #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_pc.gif) left top no-repeat;}
#kaden #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_kaden.gif) left top no-repeat;}
#camera #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_camera.gif) left top no-repeat;}
#game #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_game.gif) left top no-repeat;}
#kuruma #mallRank, #bike #mallRank, #car-goods #mallRank, #bike-goods #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_kuruma.gif) left top no-repeat;}
/* fitness追加 150108sm17 */
#fitness #mallRank,
#sports-wear #mallRank,
#sports #mallRank,
#golf #mallRank,
#bicycle #mallRank,
#snow #mallRank,
#fishing #mallRank {background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_sports.gif) left top no-repeat;}
#book-cd-dvd #mallRank,#book #mallRank, #dvd #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_book-cd-dvd.gif) left top no-repeat;}
#food-drink #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_food-drink.gif) left top no-repeat;}
#interior #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_interior.gif) left top no-repeat;}
/* インテリア・ファッション・スポーツウェアカテゴリ追加 sm4 13.06.05 */
#interior #interiorOri #mallRank,
#fashion #fashionOri #mallRank,
#sports-wear #sports-wearOri #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_interior2.gif) left top no-repeat;}
#houseware #mallRank,
#stationery #mallRank,
#daily-goods #mallRank,
#nursing-care #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_houseware.gif) left top no-repeat;} /* nursing-care 150212sm17 */
#beauty-health #mallRank, #contactlens #mallRank, #cosme #mallRank, #cosmetic #mallRank, #medicine #mallRank, #supplement #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_beauty-health.gif) left top no-repeat;}
/* カテゴリ追加 sm5 120806 */
#baby #mallRank,
#maternity #mallRank,
#baby-goods #mallRank,
#kids #mallRank {background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_baby.gif) left top no-repeat;}
#fashion #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_fashion.gif) left top no-repeat;}
/* カテゴリ追加 sm03 10.10.01 */
#drink #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_drink.gif) left top no-repeat;}
#hobby #mallRank,
#gakki #mallRank,
#toy #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_hobby.gif) left top no-repeat;}
#watch-accessory #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_watch.gif) left top no-repeat;}
/* カテゴリ追加（default） sm11 20170731 */
#default #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_default.gif) left top no-repeat;}
#diy #mallRank,
#electric-tools #mallRank,
#working-tool #mallRank,
#agriculture #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_default.gif) left top no-repeat;}
#food #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_foods.gif) left top no-repeat;}
/* カテゴリ追加 20150709 sm11 */
#instant-food #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_foods.gif) left top no-repeat;}
#health-food #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_health.gif) left top no-repeat;}
/* カテゴリ追加 101210SM5 */
#kitchen #mallRank,
#cookware #mallRank,
#kitchen-goods #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_kitchen.gif) left top no-repeat;}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_mobile_data.gif) left top no-repeat;}
/* 111001 sm1 */
/* カテゴリ追加 sm11 150817*/
#pet #mallRank,
#dog-goods #mallRank,
#cat-goods #mallRank,
#animal-goods #mallRank{background:url(https://img1.kakaku.k-img.com/images/category/mall/mall_rank_pet.gif) left top no-repeat;}
#mallRank h3{
	padding:4px 0 3px 35px;
	line-height:100%;
}
/* インテリア・ファッション・スポーツウェアカテゴリ追加 sm4 13.06.05 */
#interior #interiorOri{
	margin:15px 0;
}
#fashion #fashionOri,
#sports-wear #sports-wearOri{
	margin:15px 0 30px;
}
#interior #interiorOri #mallRank h3,
#fashion #fashionOri #mallRank h3,
#sports-wear #sports-wearOri #mallRank h3{
	padding:0 0 3px 0px;
}
#mallRank h3 a{
	color:#4e4d4d;
}
/*3カラム*/
#mall3{
	width:693px;
	background:url(https://img1.kakaku.k-img.com/images/category/mall/mall3_bg.gif) left top repeat-y;
	padding:5px 0;
	margin:0 0 5px 0;
}
#mall3 table#mallItem th{
	width:217px;
	padding:0 7px 5px 7px;
	font-weight:bold;
	font-size:107%;
	line-height:130%;
}
#mall3 table#mallItem td .itemTxt{
	width:130px;
	float:right;
}

/*2カラム*/
#mall2{
	width:694px;
	background:url(https://img1.kakaku.k-img.com/images/category/mall/mall2_bg.gif) left top repeat-y;
	padding:5px 0;
	margin:0 0 5px 0;
}
#mall2 table#mallItem th{
	width:333px;
	padding:0 7px 5px 7px;
	font-weight:bold;
	font-size:107%;
	line-height:130%;
}
#mall2 table#mallItem td .itemTxt{
	width:246px;
	float:right;
}

/*1カラム*/
#mall1{
	width:694px;
	padding:5px 0;
	margin:0 0 5px 0;
}
#mall1 table#mallItem th{
	width:680px;
	padding:0 7px 5px 7px;
	font-weight:bold;
	font-size:107%;
	line-height:130%;
}
#mall1 table#mallItem td .itemTxt{
	width:593px;
	float:right;
}
table#mallItem{
	border-collapse:collapse;
	border-spacing:0;
	font-size:100%;
	text-align:left;
	vertical-align:top;
}
table#mallItem td{
	padding:0 7px;
}
table#mallItem td .itemImg{
	width:80px;
	float:left;
}
table#mallItem:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
table#mallItem{display: inline-block;}
/* Hides from IE-mac \*/
table#mallItem{display: block;}
/* End hide from IE-mac */

/*価格*/
table#mallItem td .itemTxt .price span{
	font-weight:bold;
	color:#f00;
	font-family:Verdana;
	font-size:107%;
}

/*モール名*/
/*amazon*/
table#mallItem td .itemTxt .mall6{
	background:url(https://img1.kakaku.k-img.com/images/icon_mall_6.gif) 0px 2px no-repeat;
	font-weight:bold;
	padding:0 0 0 16px;
	letter-spacing:-1px;
}
/*楽天*/
table#mallItem td .itemTxt .mall1{
	background:url(https://img1.kakaku.k-img.com/images/icon_mall_1.gif) 0px 2px no-repeat;
	font-weight:bold;
	padding:0 0 0 16px;
	letter-spacing:-1px;
}
/*Yhaoo*/
table#mallItem td .itemTxt .mall2{
	background:url(https://img1.kakaku.k-img.com/images/icon_mall_2.gif) 0px 2px no-repeat;
	font-weight:bold;
	padding:0 0 0 18px;
	letter-spacing:-2px;
}
/*ランキング*/
table#mallItem td .itemTxt .rank{
	font-weight:bold;
	font-size:107%;
	color:#ff6b00;
	padding:3px 0 0 0;
}
/*一覧*/
#mallList{
	border-top:1px solid #cbcbcb;
	text-align:right;
	padding:7px 0 3px 0;
}
#mallList a{
	background:url(https://img1.kakaku.k-img.com/images/category/rankPointer.gif) 0px 0px no-repeat;
	padding:0 0 3px 20px;
}

/*-----最近みたアイテム 090722sm2-----*/
#menu .menuBox01 .pastBox{
	background:#fff url(https://img1.kakaku.k-img.com/images/category/past_top.gif) left top no-repeat;
	margin:10px 0 0 0;
	padding:3px 0 0 0;
	width:184px;
}
#menu .menuBox01 .pastBox .pastBoxBottom{
	background:url(https://img1.kakaku.k-img.com/images/category/past_bottom.gif) left bottom no-repeat;
	padding:0 8px;
}

/*キーワード*/
#menu .menuBox01 .pastBox .pastBoxBottom ul{
	font-size:92%;
	border-bottom:1px solid #e7e7e7;
	padding-bottom:7px;
}
#menu .menuBox01 .pastBox .pastBoxBottom ul li{
	width:162px;
}
#menu .menuBox01 .pastBox .pastBoxBottom ul li a{
	width:162px;
}

/*アイテム*/
#menu .menuBox01 .pastBox .pastBoxBottom .pastItemBox{
	padding:8px 0 7px 0;
	border-bottom:1px solid #e7e7e7;
}
#menu .menuBox01 .pastBox .pastBoxBottom .pastItemBox .pastImg{
	text-align:center;
}
#menu .menuBox01 .pastBox .pastBoxBottom .pastItemBox p.pastTtl{
	text-align:center;
	margin-top:5px;
}
#menu .menuBox01 .pastBox .pastBoxBottom .pastItemBox p.pastPrice{
	color:#f00;
	font-family:Verdana;
	font-size:120%;
	font-weight:bold;
	text-align:center;
	margin-top:5px;
}
#menu .menuBox01 .pastBox .pastBoxBottom .pastItemBox p.pastRank{
	text-align:center;
	position:relative;
	top:-3px;
}
#menu .menuBox01 .pastBox .pastBoxBottom .pastItemBox p.pastRank img{
	position:relative;
	top:5px;
}

/*共通部分*/
#menu .menuBox01 .pastBox .pastBoxBottom .pastDelete{
	text-align:right;
	padding:5px 0 5px 0;
}
#menu .menuBox01 .pastBox .pastBoxBottom .pastDelete a{
	background:url(https://img1.kakaku.k-img.com/images/category/past_delete.gif) 0px 2px no-repeat;
	padding:0 0 0 11px;
}
#menu .menuBox01 .pastBtn{
	text-align:center;
	padding:7px 0 0 0;
}
/*ヘルプ*/
#menu .menuBox01 img.pastHelp{
	margin-left:5px;
	position:relative;
	top:2px;
}
/*見出しの字詰め*/
#menu .menuBox01 #pastKeyTtl{
	letter-spacing:-1px;
}
/*履歴がありません*/
#menu .menuBox01 .noPast{
	text-align:center;
	padding:15px 0 18px 0;
}

/*-----選び方ガイド　露出枠-----*/
.full .boxB .boxBtm #guideImg{
	width:120px;
	float:left;
	padding-top:4px;
}
.full .boxB .boxBtm #guideTxt{
	width:564px;
	float:right;
	padding-top:4px;
}
.full .boxB .boxBtm #guideTxt p{
	line-height:140%;
}

/*修正後*/
.full .boxB .boxBtm table#guideList{
	border-spacing:0;
	border-collapse:collapse;
	width:536px;
	margin:5px 0;
	float:right;
	font-size:100%;
}
.full .boxB .boxBtm table#guideList th,
.full .boxB .boxBtm table#guideList td{
	background:url(https://img1.kakaku.k-img.com/images/category/dotline02.gif) repeat-x left bottom;
	padding:5px 0;
}
.full .boxB .boxBtm table#guideList th{
	font-weight:bold;
	width:180px;
	text-align:left;
}
.full .boxB .boxBtm table#guideList th a{text-decoration:underline;}
.full .boxB .boxBtm table#guideList th span{
	padding:0 0 0 6px;
	display:block;
}
#default .full .boxB .boxBtm table#guideList th span,
#shoes .full .boxB .boxBtm table#guideList th span,
#sports-shoes .full .boxB .boxBtm table#guideList th span,
#ladies-shoes .full .boxB .boxBtm table#guideList th span,
#mens-shoes .full .boxB .boxBtm table#guideList th span,
#kids-shoes .full .boxB .boxBtm table#guideList th span,
#shoes-accessories .full .boxB .boxBtm table#guideList th span,
#outdoor .full .boxB .boxBtm table#guideList th span,
#housing .full .boxB .boxBtm table#guideList th span,
#reform .full .boxB .boxBtm table#guideList th span,
#lighting .full .boxB .boxBtm table#guideList th span {border-left:4px solid #001789;}
#kaden .full .boxB .boxBtm table#guideList th span{border-left:4px solid #ff6600;}
#camera .full .boxB .boxBtm table#guideList th span{border-left:4px solid #009899;}
#pc .full .boxB .boxBtm table#guideList th span{border-left:4px solid #0099ff;}
#keitai .full .boxB .boxBtm table#guideList th span{border-left:4px solid #3266cc;}
#game .full .boxB .boxBtm table#guideList th span{border-left:4px solid #ffcc33;}
#kuruma .full .boxB .boxBtm table#guideList th span,
#bike .full .boxB .boxBtm table#guideList th span,
#car-goods .full .boxB .boxBtm table#guideList th span,
#bike-goods .full .boxB .boxBtm table#guideList th span{border-left:4px solid #013466;}
/* fitness追加 150108sm17 */
#fitness .full .boxB .boxBtm table#guideList th span,
#sports-wear .full .boxB .boxBtm table#guideList th span,
#sports .full .boxB .boxBtm table#guideList th span,
#golf .full .boxB .boxBtm table#guideList th span,
#bicycle .full .boxB .boxBtm table#guideList th span,
#snow .full .boxB .boxBtm table#guideList th span,
#fishing .full .boxB .boxBtm table#guideList th span{border-left:4px solid #3398cc;}
#book-cd-dvd .full .boxB .boxBtm table#guideList th span,
#book .full .boxB .boxBtm table#guideList th span,
#dvd .full .boxB .boxBtm table#guideList th span{border-left:4px solid #339933}
#fashion .full .boxB .boxBtm table#guideList th span{border-left:4px solid #a00000;}
#food-drink .full .boxB .boxBtm table#guideList th span{border-left:4px solid #ff9934;}
#interior .full .boxB .boxBtm table#guideList th span{border-left:4px solid #cdcc00;}
#houseware .full .boxB .boxBtm table#guideList th span,
#stationery .full .boxB .boxBtm table#guideList th span,
#daily-goods .full .boxB .boxBtm table#guideList th span,
#nursing-care .full .boxB .boxBtm table#guideList th span{border-left:4px solid #9cb416;} /* nursing-care 150212sm17 */
#beauty-health .full .boxB .boxBtm table#guideList th span,
#contactlens .full .boxB .boxBtm table#guideList th span,
#cosme .full .boxB .boxBtm table#guideList th span,
#cosmetic .full .boxB .boxBtm table#guideList th span,
#medicine .full .boxB .boxBtm table#guideList th span,
#supplement .full .boxB .boxBtm table#guideList th span{border-left:4px solid #99cc33;}
/* カテゴリ追加 sm5 120806 */
#baby .full .boxB .boxBtm table#guideList th span,
#maternity .full .boxB .boxBtm table#guideList th span,
#baby-goods .full .boxB .boxBtm table#guideList th span,
#kids .full .boxB .boxBtm table#guideList th span {border-left:4px solid #ffa4d1;}
/* カテゴリ追加 sm11 150817*/
#pet .full .boxB .boxBtm table#guideList th span,
#dog-goods .full .boxB .boxBtm table#guideList th span,
#cat-goods .full .boxB .boxBtm table#guideList th span,
#animal-goods .full .boxB .boxBtm table#guideList th span{border-left:4px solid #d68011;}
/* カテゴリ追加 sm03 10.10.01 */
#drink .full .boxB .boxBtm table#guideList th span{border-left:4px solid #ff9934;}
#hobby .full .boxB .boxBtm table#guideList th span,
#gakki .full .boxB .boxBtm table#guideList th span,
#toy .full .boxB .boxBtm table#guideList th span{border-left:4px solid #feae00;}
#watch-accessory .full .boxB .boxBtm table#guideList th span{border-left:4px solid #cc3366;}
#diy .full .boxB .boxBtm table#guideList th span,
#electric-tools .full .boxB .boxBtm table#guideList th span,
#working-tool .full .boxB .boxBtm table#guideList th span,
#agriculture .full .boxB .boxBtm table#guideList th span{border-left:4px solid #001789;}
#food .full .boxB .boxBtm table#guideList th span{border-left:4px solid #ff9966;}
/* カテゴリ追加 20150709 sm11 */
#instant-food .full .boxB .boxBtm table#guideList th span{border-left:4px solid #ff9966;}
#health-food .full .boxB .boxBtm table#guideList th span{border-left:4px solid #60bf01;}
/* カテゴリ追加 101210SM5 */
#kitchen .full .boxB .boxBtm table#guideList th span,
/* カテゴリ追加 sm07 10.11.01 */
#cookware .full .boxB .boxBtm table#guideList th span,
#kitchen-goods .full .boxB .boxBtm table#guideList th span{border-left:4px solid #60bf01;}
/* カテゴリ追加 11.07.01 sm1 */
#mobile-data .full .boxB .boxBtm table#guideList th span{border-left:4px solid #5533bb;}

.full .boxB .boxBtm table#guideList td span{
	background:url(https://img1.kakaku.k-img.com/images/category/guide/guide_icon.gif) no-repeat 0px 1px;
	padding:0 0 0 17px;
	display:block;
}
.full .boxB .boxBtm table#guideList td.date{
	width:130px;
	text-align:center;
}
.full .boxB .boxBtm #guideImgBtn{
	float:left;
	width:148px;
	padding:5px 0 0 0;
}

/*DVD・ゲーム値下げ　注目タイトル　091113 sm2*/
#main #book-cd-dvd .full .boxC #pdPickupBox, #book .full .boxC #pdPickupBox, #dvd .full .boxC #pdPickupBox, #book-cd-dvd .full .boxC #pdPickupBox{
	background:url(https://img1.kakaku.k-img.com/images/category/h3_dvd_pd_pickup.gif) no-repeat left top;
	padding:10px 10px 7px 43px;
}
#game .full .boxC #pdPickupBox{
	background:url(https://img1.kakaku.k-img.com/images/category/h3_game_pd_pickup.gif) no-repeat left top;
	padding:10px 10px 7px 43px;
}

/*IE5.5向けハック*/
#main #book-cd-dvd .full .boxC #pdPickupBox, #dvd .full .boxC #pdPickupBox,
#book-cd-dvd .full .boxC #pdPickupBox,
#game .full .boxC #pdPickupBox{
	width:720px;
	voice-family: "\"}\"";
	voice-family: inherit;
	width:667px;
}
#main table#pdPickup{
	border-collapse:collapse;
	border-spacing:0;
	font-size:100%;
	width:694px;
	margin:0 0 15px 0;
}
#dvd #main table#pdPickup{		/* 20110106 sm6 add */
	margin:0 0 5px 0;
}
#main table#pdPickup tr th{
	width:342px;
	border-bottom:1px solid #ccc;
	font-size:107%;
	padding:10px 0 3px 0;
	text-align:left;
}
#main table#pdPickup tr td{
	vertical-align:top;
}
#main table#pdPickup tr td.dvdImg,
#main table#pdPickup tr td.gameImg{
	width:166px;
	text-align:center;
	padding:15px 0 0 0;
}
#main table#pdPickup tr td.dvdTitle,
#main table#pdPickup tr td.gameTitle{
	text-align:center;
	padding:8px 0 0 0;
	width:166px;
}
#main table#pdPickup tr td.dvdPrice,
#main table#pdPickup tr td.gamePrice{
	text-align:center;
	padding:3px 0 0 0;
	line-height:100%;
}
#main table#pdPickup tr td.dvdPricedown{		/*20110116 sm6 add*/
	text-align:center;
	padding:5px 0 0 0;
}
#main table#pdPickup tr td.dvdPrice span.price,
#main table#pdPickup tr td.gamePrice span.price{
	font-size:110%;
	color:#f00;
	font-weight:bold;
	font-family:verdana;
	margin:0 5px 5px 0;
	position:relative;
	top:2px;
}
#main table#pdPickup tr td.dvdPrice span.price a,
#main table#pdPickup tr td.gamePrice span.price a{
	color:#f00;
}		/* sm6 101210 add */
#main table#pdPickup tr td.dvdPrice span.down{
	background:#ffecb0 url(https://img1.kakaku.k-img.com/images/pricedown/dvd/down_arrow.gif) no-repeat 3px 4px;
	font-weight:bold;
	color:#333;
	padding:2px 3px 2px 15px;
	line-height:180%;
}
#main table#pdPickup tr td.gamePrice span.down{
	background:#ffecb0 url(https://img1.kakaku.k-img.com/images/pricedown/game/down_arrow.gif) no-repeat 3px 4px;
	font-weight:bold;
	color:#333;
	padding:2px 3px 2px 15px;
	line-height:180%;
}
/*一覧へ*/
#main #pdList{
	background:url(https://img1.kakaku.k-img.com/images/category/dotline02.gif) repeat-x left top;
	padding:7px 0 3px 0;
	text-align:right;
}
/*リード文*/
#main .full .boxC .boxPdTop{
	padding-top: 5px;
	margin: 0px 5px;
	background: url(https://img1.kakaku.k-img.com/images/category/box_g_f_top.gif) no-repeat left top;
}
#main .full .boxC p#lead{
	background:#e8e8e8;
	padding:0 10px 5px 10px;
}
/*更新日*/
#main .full .boxC span.pdUpdate{
	color:#333333;
	float:right;
	font-size:85%;
	font-weight:normal;
	line-height:110%;
	margin:4px 0 -4px;
}
/*--関連特集一覧　090914 sm2--*/
#main .full .featureList{
	margin-top:-5px;
}
#main .full .boxD p.year{
	background:#888;
	color:#fff;
	font-weight:bold;
	padding:1px 5px;
	margin:0 0 10px 0;
}
#main .full .boxD .borderNone{
	background:none;
}

/*arrow 090918 sm1*/
.arrow03 {
background:transparent url(https://img1.kakaku.k-img.com/images/itemview/item/arrow03.gif) no-repeat scroll left top;
padding-left:7px;
}
/*arrow end*/

/*--本日の値下がり製品リスト露出枠　091016 sm2--*/
/*カテゴリ別*/
#pc #pricedownList{background:url(https://img1.kakaku.k-img.com/images/category/pricedown_list/pricedown_list_pc.gif) left top no-repeat;}
#kaden #pricedownList{background:url(https://img1.kakaku.k-img.com/images/category/pricedown_list/pricedown_list_kaden.gif) left top no-repeat;}
#camera #pricedownList{background:url(https://img1.kakaku.k-img.com/images/category/pricedown_list/pricedown_list_camera.gif) left top no-repeat;}

#pricedownList h3{
	padding:4px 0 3px 35px;
	line-height:100%;
}
#pricedownList h3 a{
	color:#4e4d4d;
}
#pricedownListBox{
	width:693px;
	background:url(https://img1.kakaku.k-img.com/images/category/pricedown_list/pricedown_list_line.gif) left top repeat-y;
	padding:5px 0;
	margin:0 0 5px 0;
}
#pricedownListBox table{
	border-collapse:collapse;
	border-spacing:0;
	font-size:100%;
	text-align:left;
	vertical-align:top;
	line-height:130%;
}
#pricedownListBox table td{
	width:173px;
	padding:0 7px 2px 7px;
	word-break:break-all;
}
#pricedownListBox table td.img{
	text-align:center;
	padding: 30px 7px 35px;
}
#pricedownListBox table td.item a{
	text-decoration:underline;
}
#pricedownListBox table td.price{
	color:#f00;
	padding-top:3px;
}
#pricedownListBox table td.price a{
	color:#f00;
}		/* sm6 20101210 add */
#pricedownListBox table td.price strong{
	font-family:Verdana;
	font-size:129%;
}
#pricedownListBox table td.off{
	color:#f00;
}
#pricedownListBox table td.off strong {
	font:bold 129% Verdana;
}
#pricedownListBox table td.noItem{
	text-align:center;
	vertical-align:middle;
}
#main #pricedownList .textNotes {
	margin-top:6px;
}

/*-- 特長露出枠 20091019 ohara --*/

/* カテゴリトップ露出枠
------------------------------------------- */
#featureAdCategoryTop {
	width:703px;
	margin:0 auto 0;
}
#featureAdCategoryTop h3 {
	height:15px;
	padding:4px 2px 2px;
	margin-bottom:4px;
	margin-top:10px;
	background:#f0f0f0;
}
#featureAdCategoryTop h3 span {
	font-size:85%;
	font-weight:normal;
}
#main #featureAdCategoryTop .featBoxL {
	float:left;
	width:346px;
	padding-right:2px;
	background:transparent url(https://img1.kakaku.k-img.com/images/category/dotline_y.gif) repeat-y scroll right top;
}
#main #featureAdCategoryTop .featBoxR {
	float:right;
	width:351px;
}
#main #featureAdCategoryTop a {
	display:block;
	padding-top:4px;
	text-decoration:none !important;
}
#main #featureAdCategoryTop a:hover {
	background:url(https://img1.kakaku.k-img.com/images/home/block_category_over.gif) repeat-x;
	text-decoration:none !important;
}
#featureAdCategoryTop .imgArea img {
	float:left;
	width:80px;
	padding:2px;
	margin:0 4px;
	border:1px solid #e0e0e0;
	background:#fff;
}
#featureAdCategoryTop .textArea {
	float:right;
	width:245px;
	padding-right:5px;
	text-align:left;
}
#featureAdCategoryTop .textArea p.prdinfo span {
	color:#666;
}

#featureAdCategoryTop .textArea p.featureHeadline {
	font-weight:bold;
	text-decoration:underline;
}
#featureAdCategoryTop .textArea p.featureText {
	color:#333;
}
#featureAdCategoryTop .imgArea,
#featureAdCategoryTop .textArea p.prdinfo,
#featureAdCategoryTop .textArea p.featureHeadline,
#featureAdCategoryTop .textArea p.featureText {
	cursor:pointer;
	}
/* sm03 add 100106 */
.boxB #featureAdCategoryTop {
	width:693px;
}
#main .boxB #featureAdCategoryTop .featBoxL {
	width:341px;
}
#main .boxB  #featureAdCategoryTop .featBoxR {
	width:346px;
}
.boxB #featureAdCategoryTop .textArea {
	width:240px;
}
.boxB #featureAdCategoryTop .imgArea img {
	margin-right:0;
}

/* プライスメニュー露出枠
------------------------------------------- */
#featureAdPriceMenu {
	width:704px;
	margin:10px auto 0;
}
#featureAdPriceMenu h3 {
	height:15px;
	padding:4px 2px 2px;
	margin-bottom:10px;
	background:#f0f0f0;
}
#featureAdPriceMenu h3 span {
	font-size:85%;
	font-weight:normal;
}
#featureAdPriceMenu .featureTable {
	font-size:100%;
}
#featureAdPriceMenu .featureTable td.featureContainerL {
	width:180px;
	text-align:center;
	vertical-align:middle;
}
#featureAdPriceMenu .featureTable td.featureContainerL img {
	margin:0 auto;
}
#featureAdPriceMenu .featureTable td.featureContainer {
	width:160px;
	padding:0 7px;
	text-align:left;
	vertical-align:top;
}
#main #featureAdPriceMenu .featureContainer a,
#main #featureAdPriceMenu .featureContainerL a {
	display:block;
	text-decoration:none !important;
}
#featureAdPriceMenu .featureTable p.featureCategory {
	width:160px;
	height:21px;
	padding-top:4px;
	background:transparent url(https://img1.kakaku.k-img.com/images/category/bg_featureHeadline.jpg) no-repeat;
	color:#fff;
	font-size:108%;
	font-weight:bold;
	text-align:center;
	cursor:pointer;
}
#featureAdPriceMenu p.featureHeadline {
	padding:2px 0;
	line-height:120%;
	font-weight:bold;
}
#featureAdPriceMenu p.featureText {
	color:#333;
	line-height:120%;
}
#featureAdPriceMenu p.featureImg {
	padding:10px 0;
	text-align:center;
}
/* add sm03 100106 */
.boxB #featureAdPriceMenu {
	width:694px;
	padding:7px 0;
	margin-top:0;
}
.boxB #featureAdPriceMenu .featureTable td.featureContainerL {
	width:170px;
}
/*-- END / 特長露出枠 20091019 ohara --*/

/*　2009/10/22 add shirakura */
/*------法人向けサービスのご案内------*/
#menu .corporation {
	margin:20px 0 0 0;
	background:#fffae4;
}
#menu .corporation p {
	padding:5px 10px 2px 10px;
	background:#fdb861 url('https://img1.kakaku.k-img.com/images/category/menu_box04_top.gif') top repeat-x;
	font-weight:bold;
}
#menu .corporation ul {
	list-style:none;
	padding:0 0 10px 5px;
}
#menu .corporation li {
	display:inline;
}
#menu .corporation a {
	display:block;
	margin:10px 0 0 0;
	padding:0 0 7px 40px;
	color:#333333;
	text-decoration:underline;
}
#menu .corporation .corpPr a {
	background:#fffae4 url('https://img1.kakaku.k-img.com/images/parts/category_top/icon_corp_pr.gif') no-repeat;
}
#menu .corporation .corpFeature a {
	background:#fffae4 url('https://img1.kakaku.k-img.com/images/parts/category_top/icon_corp_feature.gif') no-repeat;
}
#menu .corporation .corpTrendsearch a {
	background:#fffae4 url('https://img1.kakaku.k-img.com/images/parts/category_top/icon_corp_ts.gif') no-repeat;
}
#menu .corporation .corpShop a {
	background:#fffae4 url('https://img1.kakaku.k-img.com/images/parts/category_top/icon_corp_shop.gif') no-repeat;
}
/*　2009/10/22 add shirakura */

/*------法人向けサービス 101019 sm5 ------*/
#corporation {
	margin:20px 0 0 0;
	padding:0 0 10px 0;
	background:#edf8ff url('https://img1.kakaku.k-img.com/images/parts/category_top/corp_bg_btm.png') bottom no-repeat;
	overflow:hidden;
	zoom:1;
}
#corporation h2 {
	padding:0 10px;
	background:#edf8ff url('https://img1.kakaku.k-img.com/images/parts/category_top/corp_bg_tit.png') no-repeat !important;
	line-height:38px;
	font-size:107%;
	font-weight:bold;
}
#corporation div {
	margin:10px 10px 0 10px;
	padding:0 0 10px 0;
	border-bottom:1px #b6b6b7 dotted;
}
#corporation div.corpShop {
	border-bottom:0px #edf8ff none;
}
#corporation h3 {
	margin:0 0 8px 0;
	font-size:107%;
	font-weight:bold;
}
#menu #corporation p a {
	display:block;
	padding:0 0 0 40px;
	color:#333333;
	text-decoration:underline;
}
#corporation .corpTrendsearch p a {
	background:url('https://img1.kakaku.k-img.com/images/parts/category_top/ico_corp_ts.png') 0% 50% no-repeat;
}
#corporation .corpFeature p a {
	background:url('https://img1.kakaku.k-img.com/images/parts/category_top/ico_corp_feature.png') 0% 50% no-repeat;
}
#corporation .corpPr p a {
	background:url('https://img1.kakaku.k-img.com/images/parts/category_top/ico_corp_pr.png') 0% 50% no-repeat;
}
#corporation .corpShop p a {
	background:url('https://img1.kakaku.k-img.com/images/parts/category_top/ico_corp_shop.png') 0% 50% no-repeat;
}
/*------法人向けサービス end------*/


/** 関連特集マガジン枠 20091030 miyamoto **/
#mag .boxIn {
	padding:10px 0 0 0;
}
#mag .boxIn .boxFeature {
	width:702px;
	background:url(https://img1.kakaku.k-img.com/images/mag/catetop_mag_bg.gif) repeat-x left bottom;
	padding:0 8px 8px;
	margin:0 auto;
}
#mag .magSpecial {
	width:375px;
	padding-right:10px;
	float:left;
}
#mag .textAreaB {
	margin-left:115px;
}
#mag .textAreaB img {
	float:none;
	margin-right:6px;
	vertical-align:middle;
}
#mag li {
	list-style-type:none;
	margin-top:7px;
	line-height:100%;
}
#mag .first {
	margin:0;
}
#mag li a {
	font-weight:bold;
	margin-left:0px;
}
#mag .w704 {
	padding:8px 8px 0;
}
#main #mag .arrowNext {
	text-decoration:none;
}
#main #mag .arrowNext:hover {
	text-decoration:underline;
}
.iconMag_special {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 0;}
.iconMag_report {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 -13px;}
.iconMag_event {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 -26px;}

.iconMag_remark {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 -39px;}
.iconMag_spextra {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 -52px;}
.iconMag_serial {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 -65px;}
.iconMag_woman {background:url(https://img1.kakaku.k-img.com/images/home/icon_mag.gif) no-repeat 0 -78px;}
/*-- 20091030 miyamoto ------------------------------------*/

/*価格.com限定モデル　露出枠　091105 sm2*/
table#limitList{
	border-collapse:collapse;
	border-spacing:0;
	font-size:100%;
	margin:0 0 10px 0;
}
table#limitList tr td{
	width:217px;
	padding:0;
	line-height:135%;
}
table#limitList tr td.name a{
	font-weight:bold;
	text-decoration:underline;
}
table#limitList tr td.maker{
	font-weight:bold;
	color:#666;
}
table#limitList tr td.bd{
	width:auto;
	padding:0 0 0 21px;
	background:url(https://img1.kakaku.k-img.com/images/category/dotline_y.gif) repeat-y 11px 0;
}
table#limitList tr td .itemImg{
	width:80px;
	float:left;
	padding:5px 0;
}
table#limitList tr td .itemTxt{
	width:127px;
	float:right;
	padding:5px 0;
}
table#limitList tr td .itemTxt span.price{
	color:#f00;
	font-weight:bold;
	font-size:129%;
	font-family:Verdana;
}

/*中古　露出枠　100220 sm3*/
table.usedPckup{
	border-collapse:collapse;
	border-spacing:0;
	font-size:100%;
	margin:0 0 10px 0;
}
table.usedPckup tr td{
	width:217px;
	padding:0;
	line-height:135%;
}
#main table.usedPckup tr td.name a{
	font-weight:bold;
	text-decoration:underline;
}
table.usedPckup tr td.bd{
	width:auto;
	padding:0 0 0 21px;
	background:url(https://img1.kakaku.k-img.com/images/category/dotline_y.gif) repeat-y 11px 0;
}
table.usedPckup tr td .itemImg{
	float:left;
	width:80px;
	margin-right:10px;
	padding:5px 0;
}
table.usedPckup tr td .itemTxt{
	float:left;
	padding-top:5px;
}
table.usedPckup tr td .itemTxt .price{
	width:auto;
	color:#f00;
	font-weight:bold;
	font-size:129%;
	font-family:Verdana;
}
table.usedPckup tr td .itemTxt .price a{
	color:#f00;
}		/* sm6 101210 add */
table.usedPckup tr td .itemTxt .shop {
	width:auto;
	background:url(https://img1.kakaku.k-img.com/images/used/icon_shop_s.gif) no-repeat left 5px;
	padding:5px 0 5px 18px;
	font-size:85%;
}
table.usedPckup tr td .itemImg + .itemTxt .price{
	width:126px;
}
table.usedPckup tr td .itemImg + .itemTxt .shop{
	width:108px;
}

/* printCSS(2column) sm03 100108
------------------------------------------------ */
@media print {
html:not([lang*=""]) div#contents,
html:not([lang*=""]) div#mainContents,
/* fast検索 */
html:not([lang*=""]) div#mainContents div.resultTitle_s,
html:not([lang*=""]) div#mainContents div.result,
html:not([lang*=""]) div#mainContents div.resultBox01{
    display:table;
}
    html:not([lang*=""]) div#mainContents div#menu,
    html:not([lang*=""]) div#mainContents div#sub,
    html:not([lang*=""]) div#mainContents div#main,
	/* itemview  */
    html:not([lang*=""]) div#mainContents div#mainLeft,
    html:not([lang*=""]) div#mainContents div#mainRight,
	/* shopview */
    html:not([lang*=""]) div#mainContents div.floatL,
    html:not([lang*=""]) div#mainContents div.floatR,
	/* fast検索 */
    html:not([lang*=""]) div#mainContents div#result .leftBox,
    html:not([lang*=""]) div#mainContents div#result .rightBox{
        display:table-cell;
        float:none;
    }
}


/*サーチ系　注目ランキング　リニューアル*/
table.tblRanking-new .digest{
	padding:12px;
}

/*100622 sm04 サッカー･フットサル　キーワード追加修正*/
table.tblRanking-new .digest .product{
	width:210px;
	float:left;
	background:url(https://img1.kakaku.k-img.com/images/category/rank_box_top.gif) no-repeat left top;
	padding-top:10px;
}
table.tblRanking-new .digest .product p.proName{
	font-size:107%;
	font-weight:bold;
	padding:0 12px 0 12px;
	line-height:125%;
}
table.tblRanking-new .digest .product p.proNameText{
	font-size:85%;
	margin:0 10px;
	color:#666;
}
table.tblRanking-new p.proNameText{
	font-size:10px;
	margin:0 10px 0 22px;
	color:#666;
	font-weight:normal;
}
/*100622 sm04 サッカー･フットサル　キーワード追加修正 end*/

table.tblRanking-new .digest .product p.proPrice{
	font-size:85%;
	padding:0 12px 3px 12px;
}
table.tblRanking-new .digest .product p.proPrice span{
	color:#f00;
	font-size:127%;
	font-weight:bold;
	font-family:Verdana;
}
table.tblRanking-new .digest .product .alignC{
	padding:0 0 5px 0;
}
table.tblRanking-new .digest .productList{
	width:412px;
	float:right;
}
table.tblRanking-new .digest .productList .proBox{
	background:url(https://img1.kakaku.k-img.com/images/category/rank_dot.gif) repeat-x left bottom;
	padding:0 0 5px 0;
	margin:0 0 5px 0;
}
table.tblRanking-new .digest .productList .proBoxNobd{
	background:none;
	padding:0;
	margin:0;
}
table.tblRanking-new .digest .productList .proBox .pict,
table.tblRanking-new .digest .productList .proBoxNobd .pict{
	float:left;
	width:40px;
	text-align:center;
}
table.tblRanking-new .digest .productList .proBox .item,
table.tblRanking-new .digest .productList .proBoxNobd .item{
	float:right;
	width:362px;
	padding:0;
}
table.tblRanking-new .digest .productList .proBox .item .itemName,
table.tblRanking-new .digest .productList .proBoxNobd .item .itemName{
	padding:0 0 1px 0;
}
table.tblRanking-new .digest .productList .proBox .item .noItem,
table.tblRanking-new .digest .productList .proBoxNobd .item .noItem{
	padding:10px 0 0 0;
	color:#999;
}
table.tblRanking-new .digest .productList .proBox .item .itemPrice,
table.tblRanking-new .digest .productList .proBoxNobd .item .itemPrice{
	color:#f00;
	font-weight:bold;
	font-family:Verdana;
	padding:0 0 3px 0;
}
table.tblRanking-new .digest .productList .proBox .item .itemPrice a,
table.tblRanking-new .digest .productList .proBoxNobd .item .itemPrice a{
	color:#f00;
}
table.tblRanking-new .digest .productList .proBox .item .itemShop span,
table.tblRanking-new .digest .productList .proBoxNobd .item .itemShop span{
	position:relative;
	top:-2px;
}

/*ランキング用　リンクスタイル設定*/
.boxC .h3box h3.rankTtl a{color:#4E4D4D;}

/*usedwatch 100701 sm1*/
#used .newitem .nBoxB {
	background:url(https://img1.kakaku.k-img.com/images/category/UWbox_btm.gif) no-repeat bottom;
}
#used .newitem .nBoxB .h3box {
	background:url(https://img1.kakaku.k-img.com/images/category/Nbox_top.gif) no-repeat top;
	padding:12px 10px 8px 45px;
}
#used table.tblWatch {
	width:700px;
}
#used .tblWatch td {
background:transparent url(https://img1.kakaku.k-img.com/images/category/dotline_y.gif) repeat-y scroll right top;
padding:0 4px;
vertical-align:top;
width:33%;
}
#used .tblWatch td.end {
background:transparent url(https://img1.kakaku.k-img.com/images/spacer.gif) repeat scroll 0 0;
}
#used .tblWatch ul {
margin:0 0 0 8px;
}
#used .tblWatch ul li {
background:transparent url(https://img1.kakaku.k-img.com/images/category/list01.gif) no-repeat scroll left top;
line-height:140%;
list-style-image:none;
list-style-position:outside;
list-style-type:none;
padding:0 4px 0 15px;
}
#used .tblWatch ul li.makerName {
background:transparent url(https://img1.kakaku.k-img.com/images/category/list_arrow01.gif) no-repeat scroll left top;
list-style-image:none;
list-style-position:outside;
list-style-type:none;
padding:0 4px 0 15px;
}
#used .tblWatch ul li.makerName a:link,
#used .tblWatch ul li.makerName a:visited{
	color:#333;
}
#used .tblWatch ul li.makerName a:hover {
	color:#333;
	text-decoration:underline;
}
#used .tblWatch ul li.end {
background:transparent url(https://img1.kakaku.k-img.com/images/category/list_end.gif) no-repeat scroll left top;
margin-bottom:5px;
}
#used .full .boxA .h3box h3 {
	float:left;
}
#used .uwatchseries {
	margin-bottom:15px;
}
#used .full .boxA .h3box p {
	float:right;
	font-size:85%;
	margin-top:2px;
}

/*usedwatch end*/

/* 100810 sm4 価格.com Q&amp;A枠追加 -------------------------- */
#main #qaBox{
	background: url(https://img1.kakaku.k-img.com/images/category/h3_qa_bottom.gif) no-repeat left bottom;
	min-height:1%;
	_height:1px;
	margin:10px 0 0 0;
	padding:0 0 12px 0;
}
#kaden #main #qaBox{
	margin-bottom:10px;
}
#main #qaBoxIn{
	background: url(https://img1.kakaku.k-img.com/images/category/h3_qa_line.gif) repeat-y left top;
	min-height:1%;
	_height:1px;
}
#main #qaBoxCts{
	min-height:1%;
	_height:1px;
	padding:0 13px;
}
#main #qaBox h3{
	background: url(https://img1.kakaku.k-img.com/images/category/h3_qa_bg.gif) no-repeat left top;
	padding:12px 0 13px 50px;
	position:relative;
}
#main #qaBox h3 span{
	font-weight:normal;
}
#main #qaBox h3 .btnQa{
	position:absolute;
	right:5px;
	top:10px;
}
#main #qaBox table.qaListTbl{
	width:695px;
	margin-bottom:5px;
	border-collapse:collapse;
	word-wrap: break-word;
}
#main #qaBox table.qaListTbl th{
	padding:8px 0;
	font-size:77%;
	font-weight:normal;
	text-align:center;
}
#main #qaBox table.qaListTbl th{
	background-color:#f4f4f4;
	border-bottom:2px solid #cbcbcb;
}
#main #qaBox table.qaListTbl th.listTitle{
	width:500px;
}
#main #qaBox table.qaListTbl th.listReply{
	width:100px;
}
#main #qaBox table.qaListTbl th.listDate{
	width:95px;
}
#main #qaBox table.qaListTbl td{
	background-color:#ffffff;
}
#main #qaBox table.qaListTbl td a{
	text-decoration:none;
}
#main #qaBox table.qaListTbl td a:hover{
	text-decoration:underline;
	cursor:pointer;
}
#main #qaBox table.qaListTbl td .qaList{
	width:695px;
	padding:6px 0;
	background: url(https://img1.kakaku.k-img.com/images/category/qa_line.gif) repeat-x left bottom;
}
#main #qaBox table.qaListTbl td .qaList .batchArea{
	width:65px;
	float:left;
}
#main #qaBox table.qaListTbl td .qaList .imgArea{
	width:43px;
	float:left;
}
#main #qaBox table.qaListTbl td .qaList .textArea{
	width:397px;
	float:left;
	color:#0000dd;
	line-height:1.2;
}
#main #qaBox table.qaListTbl td .qaList .textArea02{
	width:587px;
	float:left;
	color:#0000dd;
	line-height:1.2;
}
#main #qaBox table.qaListTbl td .qaList .textArea02 p {
	width:587px;
	word-wrap:break-word;
}
#main #qaBox table.qaListTbl td .qaList .textArea .detailTxt,
#main #qaBox table.qaListTbl td .qaList .textArea02 .detailTxt{
	color:#333333;
}
#main #qaBox table.qaListTbl td .qaList .replyArea{
	width:100px;
	float:left;
	text-align:center;
	font-family:Verdana;
	color:#ff8400;
	font-weight:bold;
}
#main #qaBox table.qaListTbl td .qaList .dateArea{
	width:95px;
	float:left;
	text-align:right;
	color:#333333;
	font-size:77%;
}
#main #qaBox .noHitArea{
	width:695px;
	margin-top:6px;
	margin-bottom:6px;
	padding-bottom:15px;
	background: url(https://img1.kakaku.k-img.com/images/category/qa_line.gif) repeat-x left bottom;
}
#main #qaBox .noHitAreaInner{
	width:695px;
	padding:15px 0;
	text-align:center;
}
#main #qaBox .qaNodata {
	width: 280px;
	background: url(https://img1.kakaku.k-img.com/images/qa/no_qa_bg.gif) no-repeat left top;
	padding:0 0 0 100px;
	text-align: left;
	margin: 0px auto;
}
#main #qaBox .qaBtmArea{
	width:695px;
	margin-bottom:6px;
}
#main #qaBox .answerRate{
	float:left;
	width:170px;
	font-size:77%;
}
#main #qaBox .qaListAll{
	float:right;
	width:525px;
	text-align:right;
}
#main #qaBox .qaListAll a{
	text-decoration:none;
}
#main #qaBox .qaBtnArea{
	background: url(https://img1.kakaku.k-img.com/images/category/qa_btn_bg_btm.gif) no-repeat left bottom;
	width:695px;
}
#main #qaBox .qaBtnTop{
	background: url(https://img1.kakaku.k-img.com/images/category/qa_btn_bg_top.gif) no-repeat left top;
	width:695px;
	padding:6px 0;
	text-align:center;
}
#main #qaBox .qaBtntset{
	margin-bottom:7px;
}
#main .boxHelpbbs {
	background:#d7e8f2 url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_btm.gif) no-repeat left bottom;
	margin-top:10px;
	padding-bottom:6px;
}
#main .boxHelpbbs h3 {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_bg.gif) no-repeat left top;
	padding:17px 10px 10px 58px;
}
#main .boxHelpbbs h3 span {
	font-weight:normal;
	font-size:85%;
}
#main .boxHelpbbs .boxWhite {
	padding: 0px 8px;
	margin: 0px;
	background: #fff;
	width: 710px;
	voice-family: "\"}\"";
	voice-family:inherit;
	width: 694px;
}
#main .boxHelpbbs .boxWhiteTop{
	padding-top: 5px;
	margin: 0px 5px;
	background: url(https://img1.kakaku.k-img.com/images/category/box_w_f_top.gif) no-repeat left top;
}
#main .boxHelpbbs .boxWhiteBtm {
	padding-bottom: 5px;
	background: url(https://img1.kakaku.k-img.com/images/category/box_w_f_btm.gif) no-repeat left bottom;
}

#main .boxHelpbbs table.helpBbsTbl{
	width:695px;
	margin-bottom:5px;
	border-collapse:collapse;
	word-wrap: break-word;
}
#main .boxHelpbbs table.helpBbsTbl th{
	padding:5px 0;
	font-weight:normal;
	text-align:center;
	background-color:#e8f2f8;
}
#main .boxHelpbbs table.helpBbsTbl th.listTitle{
	width:480px;
}
#main .boxHelpbbs table.helpBbsTbl th.listReply{
	width:60px;
	text-align:right;
}
#main .boxHelpbbs table.helpBbsTbl th.listDate{
	width:160px;
	text-align:right;
	padding-right:5px;
}
#main .boxHelpbbs table.helpBbsTbl td{
	background-color:#ffffff;
}
#main .boxHelpbbs .bbs-all {
	background: transparent url(https://img1.kakaku.k-img.com/images/category/dotline02.gif) repeat-x left top;
	padding-top: 10px;
}
#main .boxHelpbbs .bbsNodata {
	width: 280px;
	background: url(https://img1.kakaku.k-img.com/images/itemview/item/no_bbs_bg.gif) no-repeat 0 15px;
	padding:25px 10px 30px 130px;
	text-align: left;
	margin:0 auto;
}
/* 100810 sm4 価格.com Q&amp;A枠追加 end -------------------------- */

/* 100909 sm4 価格.com Q&amp;A枠修正 */
#main .boxHelpbbsNew {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_btm02.gif) no-repeat left bottom;
	margin-top:10px;
	padding-bottom:6px;
	width:720px;
}
#main .boxHelpbbsInner {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_top.gif) no-repeat left top;
	padding-top:8px;
}
#main .boxHelpbbsNew .h3Box {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_inner_bg.gif) repeat-y left top;
	width:708px;
	margin:0 auto 5px;
}
#main .boxHelpbbsNew .h3BoxInner {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_inner_btm.gif) no-repeat left bottom;
}
#main .boxHelpbbsNew h3 {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_inner_top.gif) no-repeat left top;
	padding:4px 5px 2px 14px;
}
#main .boxHelpbbsNew h3 .helpBbsIcon {
	background:url(https://img1.kakaku.k-img.com/images/category/h3_helpbbs_icon.gif) no-repeat left top;
	font-weight:bold;
	padding:5px 0 4px 38px;
	display:inline-block;
}
#main .boxHelpbbsNew h3 .h3Sub {
	font-weight:normal;
	line-height:1.2;
}
#main .boxHelpbbsNew .boxWhite {
	padding: 0px 8px;
	margin: 0px;
	background: #fff;
	width: 710px;
	voice-family: "\"}\"";
	voice-family:inherit;
	width: 694px;
}
#main .boxHelpbbsNew .boxWhiteTop{
	padding-top: 5px;
	margin: 0px 5px;
	background: url(https://img1.kakaku.k-img.com/images/category/box_w_f_top.gif) no-repeat left top;
}
#main .boxHelpbbsNew .boxWhiteBtm {
	padding-bottom: 5px;
	background: url(https://img1.kakaku.k-img.com/images/category/box_w_f_btm.gif) no-repeat left bottom;
}
#main .boxHelpbbsNew table.helpBbsTbl{
	width:695px;
	margin-bottom:5px;
	border-collapse:collapse;
	word-wrap: break-word;
}
#main .boxHelpbbsNew table.helpBbsTbl th{
	padding:5px 0;
	font-weight:normal;
	text-align:center;
	background-color:#e8f2f8;
}
#main .boxHelpbbsNew table.helpBbsTbl th.listTitle{
	width:480px;
}
#main .boxHelpbbsNew table.helpBbsTbl th.listReply{
	width:60px;
	text-align:right;
}
#main .boxHelpbbsNew table.helpBbsTbl th.listDate{
	width:160px;
	text-align:right;
	padding-right:5px;
}
#main .boxHelpbbsNew table.helpBbsTbl td{
	background-color:#ffffff;
}
#main .boxHelpbbsNew ul.bbs-all {
	background: transparent url(https://img1.kakaku.k-img.com/images/category/dotline02.gif) repeat-x left top;
	padding-top: 10px;
}
#main .boxHelpbbsNew ul.bbs-all li {
	float:right;
	white-space:nowrap;
	margin-left:10px;
	list-style-type:none;
	padding: 3px 0px 2px 18px;
	background: url(https://img1.kakaku.k-img.com/images/category/arrow01.gif) no-repeat left top;
}
#main .boxHelpbbsNew .bbsNodata {
	width: 280px;
	background: url(https://img1.kakaku.k-img.com/images/itemview/item/no_bbs_bg.gif) no-repeat 0 15px;
	padding:25px 10px 30px 130px;
	text-align: left;
	margin:0 auto;
}
#main #qaBox ul.qaBtmLink{
	width:695px;
	margin-bottom:6px;
}
#main #qaBox ul.qaBtmLink li {
	float:right;
	white-space:nowrap;
	margin-left:10px;
	list-style-type:none;
	padding: 3px 0px 2px 18px;
	background: url(https://img1.kakaku.k-img.com/images/category/arrow01.gif) no-repeat left top;
}
/* 100909 sm4 価格.com Q&amp;A枠修正 end -------------------------- */


/* 100927 sm6 特長スライド start -------------------------- */
#flashObj {
	background-image: url(https://img1.kakaku.k-img.com/images/category/bg_swf_720.jpg);
	background-repeat: no-repeat;
	margin-top: 10px;
}
.featSlider {
	border-right: 1px solid #e9e9e9;
	background-image: url(https://img1.kakaku.k-img.com/images/category/bg_featscrl.jpg);
	background-repeat: repeat-x;
	height: 25px;
	margin: 10px 0 0 0;
	width: 719px;
}
.featSlideTtl {
	float: left;
}
#featureText {
	width: 637px;
	height: 24px;
	white-space: nowrap;
	float: left;
}
#featureText p {
	font-size: 13px;
	line-height: 14px;
	padding-top: 5px;
}
em.featPrice {
	color: #FF0000;
	font-size: 120%;
	font-weight: bold;
	font-family: Verdana;
	font-style: normal;
	line-height: 100%;
}
div.textNotePriceArea {
	width: 720px;
	position: relative;
}
p.textNotePrice {
	color: #666666;
	font-size:85%;
	font-weight:normal;
	text-align: right;
	margin-bottom: -10px;
	position: relative;
}
#featureText a {
	text-decoration: none;
	font-weight: bold;
	display: block;
	width: 637px;
	height: 25px;
}
#featureText a:hover { text-decoration: none;}
#featureText a:hover .featTxt { text-decoration: underline;}
#featureText a .priceTxt {
	color: #333333;
	font-weight: normal;
	font-size: 80%;
}
#featureText a:link { text-decoration: none;}
#featureText a:visited { text-decoration: none;}
#featureText a:hover { *text-decoration: underline;}
#featureText a:hover .priceTxt { *text-decoration: none;}

/* 100927 sm6 特長スライド end -------------------------- */

/* 101021 car-goods sm1 */
#car-goods .menuBox01 .mLeft68 a.ttl {
	font-weight:bold;
	display:block;
}
/* 101021 car-goods end */

/* 121011 related_category2 sm8 */
#related_category.splitAnchor .menuBox01 .mLeft68 a.ttl {
	font-weight:bold;
	display:block;
}
/* 121011 related_category2 end */

/* 101102 usedcarBox sm1 */
#car-goods #usedcar .h3Bk,
#baby #usedcar .h3Bk{
	background:url(https://img1.kakaku.k-img.com/images/category/h3box_usedcar.gif) no-repeat;
	height:42px;
}
#car-goods #usedcar h3,
#baby #usedcar h3{
	padding:10px 0 0 65px;
}
#car-goods #usedcar h3 a,
#baby #usedcar h3 a{
	color:#333;
}
#car-goods #usedcar h3 span,
#baby #usedcar h3 span{
	font-weight:normal;
}
#car-goods #usedcar h4,
#baby #usedcar h4{
	background:url(https://img1.kakaku.k-img.com/images/category/h4_usedcar.gif) no-repeat;
	padding:5px 0 0 20px;
	height:25px;
	font-size:100%;
	margin-top:5px;
}
#car-goods #usedcar .Wbox,
#baby #usedcar .Wbox{
	width:680px;
	margin:0 auto;
}
#car-goods #usedcar .Wbox p.lead,
#baby #usedcar .Wbox p.lead{
	padding:5px 0;
}
#car-goods #usedcar .Wbox table,
#baby #usedcar .Wbox table{
	border-collapse:collapse;
}
#car-goods #usedcar .Wbox table.pop,
#baby #usedcar .Wbox table.pop{
	margin-bottom:10px;
}
#car-goods #usedcar .Wbox table.pop td,
#baby #usedcar .Wbox table.pop td{
	background:transparent url(https://img1.kakaku.k-img.com/images/category/dotline_y.gif) repeat-y scroll right top;
	padding:5px;
	width:25%;
	font-size:13px;
	word-wrap:break-word;
	word-break:break-all;
}
#car-goods #usedcar .Wbox table.pop td.end,
#baby #usedcar .Wbox table.pop td.end{
	background:transparent none repeat scroll 0 0;
}
#car-goods #usedcar .Wbox table.pop td.dline,
#baby #usedcar .Wbox table.pop td.dline{
	background:transparent url(https://img1.kakaku.k-img.com/images/mag/catetop_mag_bg.gif) repeat-x scroll left bottom;
	height:1px;
	padding:0;
}
#car-goods #usedcar .Wbox a,
#baby #usedcar .Wbox a{
	font-weight:bold;
	text-decoration:underline;
}
#car-goods #usedcar .Wbox img,
#baby #usedcar .Wbox img{
	float:left;
	margin-right:3px;
}
#car-goods #usedcar .Wbox span.sprice,
#baby #usedcar .Wbox span.sprice{
	font-size:85%;
}
#car-goods #usedcar .Wbox span.cprice,
#baby #usedcar .Wbox span.cprice{
	color:#f00;
	font-weight:bold;
}
#car-goods #usedcar .Wbox table.popmaker th,
#car-goods #usedcar .Wbox table.popmaker td,
#baby #usedcar .Wbox table.popmaker th,
#baby #usedcar .Wbox table.popmaker td {
	padding:5px 0;
}
#car-goods #usedcar .Wbox table.popmaker li,
#baby #usedcar .Wbox table.popmaker li{
	float:left;
	list-style-type:none;
	margin:0 15px 3px 0;
	white-space:nowrap;
}
#car-goods #usedcar .Wbox table.popmaker th,
#baby #usedcar .Wbox table.popmaker th{
	width:60px;
	white-space:nowrap;
}
#car-goods #usedcar .Wbox table.popmaker td,
#baby #usedcar .Wbox table.popmaker td{
	/*width:580px;*/
}
#car-goods #usedcar .Wbox table.popmaker span,
#baby #usedcar .Wbox table.popmaker span{
	padding:2px;
	background:#e8e8e8;
}
#car-goods #usedcar .Wbox p.usedClink,
#baby #usedcar .Wbox p.usedClink{
	text-align:right;
	margin:5px 0 10px;
}
#car-goods #usedcar .Wbox p.usedClink a,
#baby #usedcar .Wbox p.usedClink a{
	font-weight:normal;
}
/* 101102 usedcarBox end */

/* 101111 タイヤ・スタッドレスタイヤの左メニューにサイズから選ぶ追加 sm4 */
#car-goods .tireSize {
	display: none;
}
#car-goods .itemSelectBox{
    background:none;
    padding:5px 0px 2px 0px;
}
#car-goods .itemSelectBox select{
	width:140px;
}
#car-goods .itemSearchBtn{
	margin-top:5px;
	padding-bottom:1px;
	text-align:center;
}
#car-goods h2 .sizeInfo{
	font-size:77%;
	font-weight:normal;
	line-height:1;
	padding-top:4px;
	color: #0000dd;
}
#car-goods h2 .sizeInfo a:link {
	color: #0000dd;
	text-decoration: underline;
	cursor:pointer;
}
#car-goods h2 .sizeInfo a:visited {
	color: #993399;
	cursor:pointer;
}
#car-goods h2 .sizeInfo a:hover {
	color: #0099ff;
	text-decoration: underline;
	cursor:pointer;
}
#car-goods .ballonnImg{
	margin-right:10px;
	margin-bottom:5px;
}
#car-goods .ballonnTextBtm{
	clear:both;
}
/* 101111 タイヤ・スタッドレスタイヤの左メニューにサイズから選ぶ追加 sm4 end */

/* 101220 タイヤ・スタッドレスタイヤのヘルプ追加 sm4 */
#car-goods .ballonnTextS{
	clear:both;
	background-color:#fffce5;
	border:1px solid #f6efba;
	margin-bottom:5px;
	padding:5px;
	font-size:77%;
}
/* 101220 タイヤ・スタッドレスタイヤのヘルプ追加 sm4 end */

/* 151126 タイヤ・スタッドレスタイヤ 車種から探す枠 sm16 */
#car-goods #main .searchByCarBox {
	margin-top:15px;
}
#car-goods #main .searchByCarBox .contType001 {
	margin-top:-2px;
}
#car-goods #main .searchByCarBox .tab {
	display:table;
	padding-left:10px;
}
#car-goods #main .searchByCarBox .tab li {
	list-style:none;
}
#car-goods #main .searchByCarBox .tab .tabIndv,
#car-goods #main .searchByCarBox .tab .banner {
	display:table-cell;
	vertical-align:top;
}
#car-goods #main .searchByCarBox .tab .tabIndv a,
#car-goods #main .searchByCarBox .tab .tabIndv span {
	display:block;
	height:40px;
	width:233px;
	overflow:hidden;
}
#car-goods #main .searchByCarBox .tab .tabIndv a:hover img { margin-top:-40px; }
#car-goods #main .searchByCarBox .tab .tabIndv span img { margin-top:-80px; }
#car-goods #main .searchByCarBox .tab .banner a {
	display:block;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow {
	border:1px solid #9BD0F5;
	border-radius:3px;
	background-color:#E9F6FF;
	margin-top:7px;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul {
	display:table;
	width:100%;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li {
	display:table-cell;
	vertical-align:top;
	padding:10px 0 10px 25px;
	background:url(https://img1.kakaku.k-img.com/images/car_goods/tire/search_by_car/arrow.png) no-repeat left center;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li:first-child {
	background:none;
	padding-left:10px;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.flow04 {
	padding-right:10px;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.active {
	background-color:#9BD0F5;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.active + li {
	background-image:url(https://img1.kakaku.k-img.com/images/car_goods/tire/search_by_car/arrow_active.png);
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li .flowTxt {
	display:block;
	height:22px;
	width:120px;
	overflow:hidden;
	margin-bottom:7px;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li select {
	display:block;
	box-sizing:border-box;
	width:148px;
	padding:5px;
}
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.flow01 .flowTxt img { margin-left:0; }
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.flow02 .flowTxt img { margin-left:-200px; }
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.flow03 .flowTxt img { margin-left:-400px; }
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.flow04 .flowTxt img { margin-left:-600px; }
#car-goods #main .searchByCarBox .searchByCarBody .searachFlow > ul > li.active .flowTxt img { margin-top:-30px; }
#car-goods #main .searchByCarBox .searchByCarBody .searchSize {
	margin-top:10px;
	text-align:center;
}
#car-goods #main .searchByCarBox .searchByCarBody .searchSize a,
#car-goods #main .searchByCarBox .searchByCarBody .searchSize span {
	display:inline-block;
	padding:10px 40px 9px 40px;
	border-radius:4px;

	font-size:138%;
	font-weight:bold;
	line-height:1.2;
	font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro" ,"ＭＳ Ｐゴシック", Osaka ,arial ,verdana ,sans-serif;
}
#car-goods #main .searchByCarBox .searchByCarBody .searchSize a {
	box-shadow:0 2px 0 0 rgba(0,0,0,0.15);
	background: #2F88C6;
	background: linear-gradient(to bottom,  #3493D5 0%,#2B7EB9 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3493D5', endColorstr='#2B7EB9',GradientType=0 ); /* IE6-9 */
	border:1px solid #327CB0;
	text-shadow: 0px -1px 0px #1A4C70;
	color:#FFF;
}
#car-goods #main .searchByCarBox .searchByCarBody .searchSize a:hover {
	background: #4BA7E7;
	background: linear-gradient(to bottom,  #60beff 0%,#3690CF 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60beff', endColorstr='#3690CF',GradientType=0 ); /* IE6-9 */
}
#car-goods #main .searchByCarBox .searchByCarBody .searchSize span {
	background: #F5F5F5;
	background: linear-gradient(to bottom,  #ffffff 0%,#e6e6e6 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6e6e6',GradientType=0 ); /* IE6-9 */
	border:1px solid #CCC;
	text-shadow: 0px 1px 0px #FFF;
	color:#BBB;
}
#car-goods #main .searchByCarBox .result {
	margin-top:15px;
	border:1px solid #586f86;
	border-radius:3px;
	background-color:#FFF;
	font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro" ,"ＭＳ Ｐゴシック", Osaka ,arial ,verdana ,sans-serif;
}
#car-goods #main .searchByCarBox .result .tl {
	background-color:#586f86;
	text-align:center;
	padding:8px;
	color:#FFF;
	text-shadow: 0px -1px 0px #333;
	line-height:1.2;
}
#car-goods #main .searchByCarBox .result .tl .main {
	font-size:110%;
	font-weight:bold;
}
#car-goods #main .searchByCarBox .result .body {
	padding:15px 15px 10px 15px;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap {
	display:table;
	width:100%;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndvCell {
	display:table-cell;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndvCell:first-child {
	padding-right:10px;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv {
	display:block;
	width:325px;
	height:57px;
	background:url(https://img1.kakaku.k-img.com/images/car_goods/tire/search_by_car/size_btn_bg.png) no-repeat 0 0;
	line-height:1;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv:visited {
	color:#00D;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv:visited:hover {
	color:#09F;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv .label,
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv .sizeBtn {
	display:table-cell;
	vertical-align:middle;
	text-align:center;
	height:52px;
	padding-bottom:3px;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv .sizeBtn .main {
	font-family:Verdana;
	font-weight:bold;
	font-size:177%;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv .sizeBtn .sub {
	display:block;
	font-weight:normal;
	font-size:10px;
	font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro" ,"ＭＳ Ｐゴシック", Osaka ,arial ,verdana ,sans-serif;
}
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv .label { width:100px; font-size:0; }
#car-goods #main .searchByCarBox .result .body .sizeBtnWrap .sizeBtnIndv .sizeBtn { width:230px; overflow:hidden; }
#car-goods #main .searchByCarBox .result .body .notice {
	padding-top:7px;
	font-size:85%;
	line-height:1.2;
	color:#888;
}
#car-goods #menu .searchByCarBox label {
	display:block;
	padding-bottom:10px;
}
#car-goods #menu .searchByCarBox label span.itemTl {
	display:block;
	margin-bottom:3px;
}
#car-goods #menu .searchByCarBox label select {
	width:100%;
}
#car-goods #menu .searchByCarBox .itemSearchBtn {
	margin-top:0;
}
#car-goods #menu .searchByCarBox .itemSearchBtn label {
	padding-bottom:0;
}
#car-goods #menu .searchByCarBox .itemSearchBtn label span img {
	opacity: 0.5;
	filter: alpha(opacity=50);
	-ms-filter: "alpha(opacity=50)";
	zoom: 1;
}
#car-goods #menu .searchByCarBox .result {
	margin-top:10px;
	border:1px solid #586f86;
	border-radius:3px;
	background-color:#FFF;
}
#car-goods #menu .searchByCarBox .result .tl {
	background-color:#586f86;
	text-align:center;
	padding:10px 0 10px 0;
	color:#FFF;
	font-weight:bold;
	font-size:92%;
}
#car-goods #menu .searchByCarBox .result .body {
	padding:7px 10px 10px 10px;
}
#car-goods #menu .searchByCarBox .result .body .label {
	font-size:92%;
}
#car-goods #menu .searchByCarBox .result .body .sizeBtn a {
	font-family:Verdana;
	font-weight:bold;
	text-align:center;
	display:block;
	padding:9px 0 11px 0;
	margin:2px 0 7px 0;
	font-size:138%;
	line-height:1;
	word-break: break-all;

	background: #F5F5F5;
	background: linear-gradient(to bottom,  #ffffff 0%,#e6e6e6 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6e6e6',GradientType=0 ); /* IE6-9 */
	border:1px solid #999;
	border-radius:3px;

	box-shadow:0 2px 0 0 rgba(0,0,0,0.1);
}
#car-goods #menu .searchByCarBox .result .body .sizeBtn a:visited {
	color:#00D;
}
#car-goods #menu .searchByCarBox .result .body .sizeBtn a:visited:hover {
	color:#09F;
}
#car-goods #main .searchByCarBox .notice {
	margin-top:10px;
	color:#666;
	text-align:center;
	font-size:92%;
}
/* 151126 タイヤ・スタッドレスタイヤ 車種から探す枠 sm16 end */

/* 101125sm5 サーチプライスメニュー・ピックアップパーツ */
/* boxPickup */
#searchCategory #main .full .serchPickup .h3box {
background:url(https://img1.kakaku.k-img.com/images/category/h3_type_a_full.gif) no-repeat scroll left top transparent;
height:15px;
voice-family:inherit;
width:665px;
}
#searchCategory #main .full .serchPickup .h3box h3 {
	line-height:100%;
}
#searchCategory #main .full .serchPickup .boxBtm {
background:url(https://img1.kakaku.k-img.com/images/category/box_a_full_btm.gif) no-repeat scroll left bottom transparent;
}
#searchCategory #main .full .serchPickup span.icon {
background:url(https://img1.kakaku.k-img.com/images/category/h3_icon_pickup_02.gif) no-repeat scroll left top transparent;
top:-2px;
}
/* h4 img */
#searchCategory #main .full .serchPickup h4 {
	font-size:100%;
	border-left: 4px solid #fe9965;
	padding-left:7px;
}
#searchCategory #main .full .serchPickup span.pickupImg {
	border: 1px solid #d9d9d9;
	display: block;
	padding: 1px;
	float: left;
	margin:7px 0 6px;
}
/* h4 boder color */
#food #searchCategory #main .full .serchPickup h4 { border-left-color: #fe9965; }
/* カテゴリ追加 20150709 sm11 */
#instant-food #searchCategory #main .full .serchPickup h4 { border-left-color: #fe9965; }
/* カテゴリ追加 sm5 120806 */
#baby #searchCategory #main .full .serchPickup h4,
#maternity #searchCategory #main .full .serchPickup h4,
#baby-goods #searchCategory #main .full .serchPickup h4,
#kids #searchCategory #main .full .serchPickup h4 { border-left-color: #ffa4d1; }
/* pickupTop */
#searchCategory #main .full .serchPickup .pickupTop {
	background: url(https://img1.kakaku.k-img.com/images/category/pickup_bg_01.gif) repeat-y 360px top;
}
#searchCategory #main .full .serchPickup .pickupMain {
	float: left;
	width: 335px;
	padding: 10px 12px 0px 13px;
}
#searchCategory #main .full .serchPickup .pickupMain h4 {
	font-size:116%;
	padding-top:2px;
	border-left-width: 5px;
}
#searchCategory #main .full .serchPickup .pickupMain div.pickupItemttl {
	background: url(https://img1.kakaku.k-img.com/images/category/pickup_bg_02.gif) repeat-x left bottom;
	padding-bottom:7px;
	margin-bottom:5px;
	float: left;
	width: 335px;
}
#searchCategory #main .full .serchPickup .pickupMain .pickupContent {
	float: right;
	width: 150px;
	margin-top:6px;
	padding-left:10px;
}
#searchCategory #main .full .serchPickup .pickupMain .pickupContent a {
	text-decoration:underline;
}
#searchCategory #main .full .serchPickup .pickupMain .pickupContent p {
	font-size: 92%;
	letter-spacing:0.1em;
	line-height:150%;
	width: 150px;
	margin-bottom:7px;
}
#searchCategory #main .full .serchPickup .pickupMain .pickupContent ul {
	letter-spacing:0.1em;
	width: 150px;
	list-style: none;
	line-height:110%;
	padding-bottom:9px;
}
#searchCategory #main .full .serchPickup .pickupMain .pickupContent ul li {
	font-size: 92%;
	line-height:150%;
	margin-right:10px;
	display: inline;
}
#searchCategory #main .full .serchPickup .pickupLink {
	clear:both;
	padding-bottom: 6px;
}
#searchCategory #main .full .serchPickup span.pickupLinkbox {
	float: left;
	width:348px;
	margin-bottom:2px;
	display: block;
	text-align: right;
	padding-right: 12px;
}
#searchCategory #main .full .serchPickup span.pickupLinkbox a.arrowNext{
	background:url(https://img1.kakaku.k-img.com/images/category/arrow01.gif) no-repeat scroll left 1px transparent;
	line-height:130%;
	padding:3px 0 2px 20px;
	text-decoration:underline;
}
/* pickupMid */
#searchCategory #main .full .serchPickup .pickupMid {
	background: url(https://img1.kakaku.k-img.com/images/category/pickup_bg_03.gif) repeat-y left top;
	border-top: 1px solid #d4d2d3;
}
#searchCategory #main .full .serchPickup .pickupSub {
	float: left;
	width: 120px;
	padding: 10px 12px;
}
/* pickupBtm */
#searchCategory #main .full .serchPickup .pickupBtm {
	border-top: 1px solid #d4d2d3;
}
#searchCategory #main .full .serchPickup .pickupBtm dl {
	padding:9px 9px 2px;
}
#searchCategory #main .full .serchPickup .pickupBtm dl dt {
	width:147px;
	height:24px;
	float: left;
}
#searchCategory #main .full .serchPickup .pickupBtm dl dd {
	width:555px;
	float: right;
	padding-top:3px;
	margin-bottom: 0;
	line-height:100%;
}
#searchCategory #main .full .serchPickup .pickupBtm dl dd ul {
	list-style: none;
	line-height:110%;
}
#searchCategory #main .full .serchPickup .pickupBtm dl dd ul li{
	float:left;
	margin-right:12px;
	line-height:150%;
}
#searchCategory #main .full .serchPickup .pickupBtm dl dd ul li a{
	text-decoration:underline;
}
/* pickupCaption */
#searchCategory #main .full .serchPickup .pickupCaption {
	padding:13px 0 5px;
	background: #f7f7f7;
	border-bottom: 1px solid #d4d2d2;
	border-right: 1px solid #d4d2d2;
	border-left: 1px solid #d4d2d2;
}
#searchCategory #main .full .serchPickup .pickupCaption p {
	padding:0 16px 8px;
	line-height:162%;
}
/* add 110407 sm1*/
#main .serchPickup h4 a:link,.serchPickup h4 a:visited {
	text-decoration:none;
	display:block;
}
#main .serchPickup h4 a:hover {
	text-decoration:underline;
	display:block;
}
/* 101125sm5 サーチプライスメニュー・ピックアップパーツ end */

/* 101210 sm1 creditcard-menu */
#money #menu p.menuarrow,
#card #menu p.menuarrow,
#loan #menu p.menuarrow,
#invest #menu p.menuarrow {
border-top:1px solid #CCC;
text-align:right;
margin-top:5px;
padding-top:5px;
}
#money #menu p.menuarrow a,
#card #menu p.menuarrow a,
#loan #menu p.menuarrow a,
#invest #menu p.menuarrow a {
background:transparent url(https://img1.kakaku.k-img.com/images/category/arrow03.gif) no-repeat scroll left top;
line-height:130%;
padding:3px 0 2px 18px;
}

/* 101210 sm1 end */

/* 110106 sm6 start */
/*--------- 本・CD・DVD 新A3C枠 ------------*/
.menuPanel { margin-top:10px;}
.menuPanel p { margin-bottom:10px;}
.menuPanel ul {
list-style:none;
margin-left:15px;
}
.menuPanel li {
float:left;
margin-right:8px;
margin-bottom:2px;
}

/*-------- 予約受付中DVD -----------*/
#dvdReserved {
	margin-top:10px;
	padding-bottom:15px;
	width:720px;
	background:url(https://img1.kakaku.k-img.com/images/dvd/reserved/dvd_reserved_btm.gif) no-repeat bottom;
	position:relative;
}
#dvdReserved #reservedTitleBox .dateNotes {
	position:absolute;
	right:5px;
	top:17px;
	font-size: 85%;
	font-weight: normal;
	color: #666666;
	text-align:right;
}
#dvdReserved #reservedListBox{
	width:680px;
	padding:0px 20px;
	margin-left:5px;
}
#dvdReserved #reservedListBox table{
	border-collapse:collapse;
	border-spacing:0;
	font-size:100%;
	text-align:center;
	vertical-align:top;
	line-height:130%;
	margin-top:10px;
}
#dvdReserved #reservedListBox table td{
	width:150px;
	padding:0 10px 2px 10px;
	word-break:break-all;
	vertical-align:middle;
	margin-right:10px;
}
#dvdReserved #reservedListBox table td.img{
	text-align:center;
	padding-bottom:5px;
}
#dvdReserved #reservedListBox table td.itemCate{	font-weight:bold;}
#dvdReserved #reservedListBox table td.item a{	text-decoration:none;}
#dvdReserved #reservedListBox table td.item a:hover{	text-decoration:underline;}
#dvdReserved #reservedListBox table td.price{ color:#f00;}
#dvdReserved #reservedListBox table td.price a{ color:#f00;}
#dvdReserved #reservedListBox table td.price strong{
	font-family:Verdana;
	font-size:129%;
}
#dvdReserved #reservedListBox table td.noItem{
	vertical-align:middle;
	padding:0 7px 2px 11px;
}
#dvdReserved .dvdReseavedLink {
	background:url(https://img1.kakaku.k-img.com/images/category/dotline02.gif) repeat-x top;
	padding-top:5px;
}
#dvdReserved .dvdReseavedLink a {
	background:url(https://img1.kakaku.k-img.com/images/dvd/reserved/dvd_reserved_linkarrow.gif) no-repeat scroll left;
	padding:2px 0 2px 20px;
}

/*-------- DVDソフト サブカテトップ 記事枠 -----------*/
#dvdFeature {
	margin-top:10px;
	padding-bottom:10px;
	width:720px;
	background:url(https://img1.kakaku.k-img.com/images/dvd/reserved/dvd_reserved_btm.gif) no-repeat bottom;
	position:relative;
}
#dvdFeature .dateNotes {
	position:absolute;
	right:5px;
	top:17px;
	font-size: 85%;
	font-weight: normal;
	color: #666666;
	text-align:right;
}
#dvdFeatureList{
	width:700px;
	padding:8px 0 5px 10px;
	border-left:5px solid #359534;
	border-right:5px solid #359534;
}
#dvdFeatureList .featList{
	width:132px;
	background:url(https://img1.kakaku.k-img.com/images/category/article/dvd/dvd_article_feature_btm.gif) no-repeat bottom left;
	float:left;
	min-height:172px;
	height: auto !important;
	height: 172px;
}
#dvdFeatureList .featList .featImg{
	width:120px;
	height:132px;
	background:url(https://img1.kakaku.k-img.com/images/category/article/dvd/dvd_article_feature_bg.gif) no-repeat;
	padding: 6px 6px 0 6px;
}
#dvdFeatureList p {
	font-weight:bold;
	margin:-5px 2px 5px 5px;
}
#dvdFeatureList .space{
	margin-right:7px;
}
/* 110106 sm6 end */

/* DVDソフト記事枠 4カラムに変更 121004 sm1 */
#dvdFeatureList .featList4 {
	width:168px;
	background:url(https://img1.kakaku.k-img.com/images/category/article/dvd/dvd_article_feature_wide.gif) no-repeat bottom left;
	float:left;
	min-height:172px;
	height: auto !important;
	height: 172px;
}
#dvdFeatureList .featList4 .featImg{
	width:168px;
	height:132px;
	background:url(https://img1.kakaku.k-img.com/images/category/article/dvd/dvd_article_feature_wide.gif) no-repeat top left;
	padding: 6px 24px 0 24px;
}
/* DVDソフト記事枠 end */

/* 110228sm5 ショッピングサイト別ランキング */
.mallRankBox #mall3 table#mallItem th {
    font-size: 100%;
    font-weight: normal;
	text-align:left;
	padding: 0 7px 7px;
}
.mallRankBox table#mallItem td .itemTxt .price {
    color: #FF0000;
    font-family: Verdana;
    font-size: 107%;
    font-weight: bold;
	margin-top:2px;
}
.mallRankBox table#mallItem td .itemTxt .mall1,
.mallRankBox table#mallItem td .itemTxt .mall2,
.mallRankBox table#mallItem td .itemTxt .mall6 {
	letter-spacing:normal;
    font-weight: normal;
}
.mallRankBox table#mallItem td .itemTxt .rank {
	padding: 0;
}
.mallRankBox table#mallItem td .itemTxt .rank span {
    color: #333333;
    font-size: 82%;
    font-weight: normal;
	padding-right:3px;
}
/* 110228sm5 ショッピングサイト別ランキング end */

/* サーチカテゴリトップ 注目ランキング 110228 sm8 */
div.img5RankBoxes {
	width: 720px;
}
div.img5RankBox {
	padding-bottom: 10px;
	background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_bg.gif") no-repeat scroll bottom left transparent;
}
.mTop7 {
	margin-top: 7px;
}
div.img5RankBox .rankTitle {
	height: 27px;
}

/*カテゴリ別見出し背景*/
/* fitness追加 150108sm17 */
#fitness div.img5RankBox .rankTitle,
#sports-wear div.img5RankBox .rankTitle,
#sports div.img5RankBox .rankTitle,
#golf div.img5RankBox .rankTitle,
#bicycle div.img5RankBox .rankTitle,
#snow div.img5RankBox .rankTitle,
#fishing div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_sports.gif") no-repeat scroll 0 0 transparent;}
#hobby div.img5RankBox .rankTitle,
#gakki div.img5RankBox .rankTitle,
#toy div.img5RankBox .rankTitle{ background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_hobby.gif") no-repeat scroll 0 0 transparent;}
#book-cd-dvd div.img5RankBox .rankTitle,
#book div.img5RankBox .rankTitle,
#dvd div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_book_cd_dvd.gif") no-repeat scroll 0 0 transparent;}
#fashion div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_fashion.gif") no-repeat scroll 0 0 transparent;}
#watch-accessory div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_watch_accessory.gif") no-repeat scroll 0 0 transparent;}
/* カテゴリ追加（default） sm11 20170731 */
#default div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_default.gif") no-repeat scroll 0 0 transparent;}
#diy div.img5RankBox .rankTitle,
#electric-tools div.img5RankBox .rankTitle,
#working-tool div.img5RankBox .rankTitle,
#agriculture div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_default.gif") no-repeat scroll 0 0 transparent;}
#kitchen div.img5RankBox .rankTitle,
/* カテゴリ追加 sm07 10.11.01 */
#cookware div.img5RankBox .rankTitle,
#kitchen-goods div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_kitchen.gif") no-repeat scroll 0 0 transparent;}
#interior div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_interior.gif") no-repeat scroll 0 0 transparent;}
#houseware div.img5RankBox .rankTitle,
#stationery div.img5RankBox .rankTitle,
#daily-goods div.img5RankBox .rankTitle,
#nursing-care div.img5RankBox .rankTitle{ background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_houseware.gif") no-repeat scroll 0 0 transparent;} /* nursing-care 150212sm17 */
#food div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_food.gif") no-repeat scroll 0 0 transparent;}
/* カテゴリ追加 20150709 sm11 */
#instant-food div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_food.gif") no-repeat scroll 0 0 transparent;}
#drink div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_drink.gif") no-repeat scroll 0 0 transparent;}
/* カテゴリ追加 sm11 150817*/
#pet div.img5RankBox .rankTitle,
#dog-goods div.img5RankBox .rankTitle,
#cat-goods div.img5RankBox .rankTitle,
#animal-goods div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_pet.gif") no-repeat scroll 0 0 transparent;}
/* カテゴリ追加 sm5 120806 */
#baby div.img5RankBox .rankTitle,
#maternity div.img5RankBox .rankTitle,
#baby-goods div.img5RankBox .rankTitle,
#kids div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_baby.gif") no-repeat scroll 0 0 transparent;}
#beauty-health div.img5RankBox .rankTitle,
#contactlens div.img5RankBox .rankTitle,
#cosme div.img5RankBox .rankTitle,
#cosmetic div.img5RankBox .rankTitle,
#medicine div.img5RankBox .rankTitle,
#supplement div.img5RankBox .rankTitle { background: url("https://img1.kakaku.k-img.com/images/category/ranking_5img_ttl_beauty_health.gif") no-repeat scroll 0 0 transparent;}

div.img5RankBoxes .rankTitle h3{
	padding: 7px 0 0 20px;
	font-size: 107%;
	line-height: 120%;
}
div.img5RankBoxes .rankTitle h3 a:link,
div.img5RankBoxes .rankTitle h3 a:visited { /* add sm1 111012 */
	color:#333;
	text-decoration:none;
}
div.img5RankBoxes .rankTitle h3 a:hover {
	text-decoration:underline;
}
div.img5RankBoxes .rankTitle p{
	margin: -1.1em 7px 0 0;
	color: #666;
	font-size: 85%;
	text-align: right;
}
div.img5RankBox table{
	width: 696px;
	margin: 0 12px;
	border-collapse: collapse;
	font-size: 13px;
	line-height: 120%;
}
div.img5RankBox td{
	width: 128px;
	padding-right: 14px;
}
div.img5RankBox .itemName td p{
	width: 128px;
	word-wrap: break-word;
	font-weight: bold;
}
div.img5RankBox td.lastChild{
	padding-right: 0;
}
div.img5RankBox tr.rank td{
	text-align: center;
	vertical-align: middle;
}
div.img5RankBox tr.rank td div{
	border-bottom: 1px solid #D6D6D6;
}
div.img5RankBox tr.rank p{
	margin: 6px auto 4px auto;
	color: #585655;
	font-weight: bold;
}
div.img5RankBox tr.rank p.no1{
	padding-left: 2em;
	color: #FF6C00;
	background: url("https://img1.kakaku.k-img.com/images/category/icon_ranking01.gif") no-repeat scroll 35% top transparent;
}
div.img5RankBox tr.rank p.no2{
	padding-left: 2em;
	color: #FF6C00;
	background: url("https://img1.kakaku.k-img.com/images/category/icon_ranking02.gif") no-repeat scroll 35% top transparent;
}
div.img5RankBox tr.rank p.no3{
	padding-left: 2em;
	color: #FF6C00;
	background: url("https://img1.kakaku.k-img.com/images/category/icon_ranking03.gif") no-repeat scroll 35% top transparent;
}
div.img5RankBox tr.rank p span{
	font: bold 135% Verdana;
}
div.img5RankBox tr.itemImg td{
	padding-top: 8px;
	text-align: center;
	vertical-align: middle;
}
div.img5RankBox tr.itemName td{
	padding-top: 8px;
}
div.img5RankBox p.toRankList {
    font-size: 100%;
    padding: 8px 8px 0 0;
    text-align: right;
}
div.img5RankBox p.toRankList a {
    background: url("https://img1.kakaku.k-img.com/images/category/rankPointer.gif") no-repeat scroll right center transparent;
    padding: 3px 20px 3px 3px;
    text-decoration: none;
}
/* サーチカテゴリトップ 注目ランキング 110228 sm8 end */

/* サーチカテゴリトップ・第二階層 下層カテゴリ一覧 110228 sm8 */
div.categoryListContainer {
	width: 720px;
}
.categoryListRow1c {
	background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_bg_column1.gif") no-repeat bottom left;
}
.categoryListRow1c .categoryList {
	width: 720px;
}
.categoryListRow2c {
	background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_bg_column2.gif") no-repeat bottom left;
}
.categoryListRow2c .categoryList {
	width: 355px;
}
.categoryListRow1c .categoryList .title,
.categoryListRow2c .categoryList .title {
	height: 42px;
}

/*カテゴリ別見出し背景*/
/* fitness追加 150108sm17 */
#fitness .categoryList .title,
#sports-wear .categoryList .title,
#sports .categoryList .title,
#golf .categoryList .title,
#bicycle .categoryList .title,
#snow .categoryList .title,
#fishing .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_sports.gif") no-repeat top left;}
#hobby .categoryList .title,
#gakki .categoryList .title,
#toy .categoryList .title{ background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_hobby.gif") no-repeat top left;}
#book-cd-dvd .categoryList .title,
#book .categoryList .title,
#dvd .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_book_cd_dvd.gif") no-repeat top left;}
#watch-accessory .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_watch_accessory.gif") no-repeat top left;}
#diy .categoryList .title,
#electric-tools .categoryList .title,
#working-tool .categoryList .title,
#agriculture .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_default.gif") no-repeat top left;}
#kitchen .categoryList .title,
/* カテゴリ追加 sm07 10.11.01 */
#cookware .categoryList .title,
#kitchen-goods .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_kitchen.gif") no-repeat top left;}
#interior .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_interior.gif") no-repeat top left;}
#houseware .categoryList .title,
#stationery .categoryList .title,
#daily-goods .categoryList .title,
#nursing-care .categoryList .title{ background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_houseware.gif") no-repeat top left;} /* nursing-care 150212sm17 */
#food .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_food.gif") no-repeat top left;}
/* カテゴリ追加 20150709 sm11 */
#instant-food .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_food.gif") no-repeat top left;}
#drink .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_drink.gif") no-repeat top left;}
/* カテゴリ追加 sm11 150817*/
#pet .categoryList .title,
#dog-goods .categoryList .title,
#cat-goods .categoryList .title,
#animal-goods .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_pet.gif") no-repeat top left;}
/* カテゴリ追加 sm5 120806 */
#baby .categoryList .title,
#maternity .categoryList .title,
#baby-goods .categoryList .title,
#kids .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_baby.gif") no-repeat top left;}
#beauty-health .categoryList .title,
#contactlens .categoryList .title,
#cosme .categoryList .title,
#cosmetic .categoryList .title,
#medicine .categoryList .title,
#supplement .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_beauty_health.gif") no-repeat top left;}
#shoes .categoryList .title,
#sports-shoes .categoryList .title,
#ladies-shoes .categoryList .title,
#mens-shoes .categoryList .title,
#kids-shoes .categoryList .title,
#shoes-accessories .categoryList .title,
#outdoor .categoryList .title,
#housing .categoryList .title,
#reform .categoryList .title,
#lighting .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_shoes.gif") no-repeat top left;}
#default .categoryList .title { background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_default.gif") no-repeat top left;}
.categoryList .title div{
	height: 42px;
}
.categoryList h3{
	padding: 17px 0 0 22px;
	font-size: 107%;
	font-weight: bold;
	line-height: 120%;
}
.categoryList h3 a{
	color: #333;
}
.categoryListRow1c .categoryList h3{
	width: 590px;
}
.categoryListRow2c .categoryList h3{
	width: 220px;
}
.categoryList p{
	padding: 10px 10px 0 10px;
}
.listGroupBox {
	margin: 4px 10px 10px 10px;
}
.listGroupBox div {
	padding-left: 10px;
}
.listGroupBox div.firstChild {
	padding-left: 0;
}
.listGroup li {
	width: 156px;
	margin-top: 5px;
    padding-left: 6px;
	line-height: 120%;
	list-style: none outside none;
	background: url("https://img1.kakaku.k-img.com/images/category/arrow_menu.gif") no-repeat scroll left top transparent;
}
.categoryListRow1c .listGroup li {
	width: 161px;
}

/*ホビートップのみclearfixのpadding-topが18pxになる対策*/
#hobby .categoryListContainer .clearfix {
	padding-top: 0;
}

/* サーチカテゴリトップ・第二階層 下層カテゴリ一覧 110228 sm8 end */

/* サーチカテゴリトップ 関連カテゴリ枠 110228 sm8 */
.categoryListRel {
	background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_bg_column1.gif") no-repeat bottom left;
}
.categoryListRel .categoryList {
	width: 720px;
}
.categoryListRel .categoryList .title {
	height: 45px;
	background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_relational.gif") no-repeat top right !important;
}
.categoryListRel .categoryList .title div{
	background: none;
}
.categoryListRel .categoryList h3 {
	padding: 11px 0 0 12px;
	font-size: 107%;
	font-weight: bold;
	line-height: 120%;
}
.categoryListRel .listGroupBox {
	margin-top: 0;
	background: url("https://img1.kakaku.k-img.com/images/category/search/list/catelist_bg_divider.gif") repeat-y top center;
}
.categoryListRel .listGroupBox div {
	margin-left: 10px;
}
.categoryListRel .listGroupBox div.firstChild {
	margin-left: 0;
	padding-left: 0;
}
.categoryListRel .listGroup li {
	margin-top: 5px;
    padding-left: 0;
	line-height: 120%;
	list-style: none outside none;
	background: none;
}
.categoryListRel .listGroupBox div.floatL li {
	width: 340px;
}
.categoryListRel .listGroup a {
	display: inline;
}
/* add 110830 sm1 */
#food .categoryGroupBox {
	padding:10px;
}
#food .categoryGroupBox dl {
	margin-bottom:15px;
}
#food .categoryGroupBox dt {
	border-bottom:1px dotted #999;
	font-weight:bold;
	padding:0 0 3px 5px;
}
#food .categoryGroupBox dt a{
	color:#333;
}
#food .categoryGroupBox ul {
	margin-left:10px;
}
#food .categoryGroupBox li {
	float:left;
	width:24%;
    background: url("https://img1.kakaku.k-img.com/images/category/arrow_menu.gif") no-repeat scroll left top transparent;
    line-height: 120%;
    list-style: none outside none;
    margin-top: 5px;
    padding-left: 6px;
}
/* add end */
/* カテゴリ追加 20150709 sm11 */
#instant-food .categoryGroupBox {
	padding:10px;
}
#instant-food .categoryGroupBox dl {
	margin-bottom:15px;
}
#instant-food .categoryGroupBox dt {
	border-bottom:1px dotted #999;
	font-weight:bold;
	padding:0 0 3px 5px;
}
#instant-food .categoryGroupBox dt a{
	color:#333;
}
#instant-food .categoryGroupBox ul {
	margin-left:10px;
}
#instant-food .categoryGroupBox li {
	float:left;
	width:24%;
    background: url("https://img1.kakaku.k-img.com/images/category/arrow_menu.gif") no-repeat scroll left top transparent;
    line-height: 120%;
    list-style: none outside none;
    margin-top: 5px;
    padding-left: 6px;
}
/* サーチカテゴリトップ 関連カテゴリ枠 110228 sm8 end */

/* プライスメニュー左メニュー ピックアップ記事枠（関連コンテンツ枠(#related_category)と同様の体裁） 110411 sm8 */
#pickupArticle .itemBox{
	margin-top:2px;
	background:url(https://img1.kakaku.k-img.com/images/category/dotline01.gif) repeat-x scroll left bottom;
	padding:5px 0px 5px 0px;
}
#pickupArticle .itemBox_end{
	margin-top:0px;
	padding:5px 0px 0px 0px;
}
#pickupArticle .mLeft68{
	width:112px;
	float:right;
	margin-left:0;
}
#pickupArticle .itemBox:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
#pickupArticle .itemBox {
	zoom: 1;
}
/* プライスメニュー左メニュー ピックアップ記事枠（関連コンテンツ枠(#related_category)と同様の体裁） 110411 sm8 end */

/* search catelist 110422 sm1 */
#catelist {
	margin:10px auto -10px;
}
#catelist h3 {
	width: 590px;
    font-size: 107%;
    font-weight: bold;
    line-height: 120%;
    padding: 17px 0 5px 22px;
}
#main #catelist h4 a {
	text-decoration:none;
}
#catelist .catelistbl {
	margin-top:10px;
	width:720px;
	border-collapse:collapse;
}
#catelist .catelistbl td.lcell,
#catelist .catelistbl th.lcell {
	width:365px;
}
#catelist .catelistbl h4 {
	font-size:114%;
	padding:8px 7px 5px 20px;
	text-align:left;
}
#catelist .catelistbl .catelistitem {
	width:345px;
	text-align:center;
	padding:8px 0;
	margin-left:2px;
}
/* fitness追加 150108sm17 */
#fitness #catelist .ttl,
#sports-wear #catelist .ttl,
#sports #catelist .ttl,
#golf #catelist .ttl,
#bicycle #catelist .ttl,
#snow #catelist .ttl,
#fishing #catelist .ttl{
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_sports.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
/* fitness追加 150108sm17 */
#fitness #catelist .catelistbl th,
#sports-wear #catelist .catelistbl th,
#sports #catelist .catelistbl th,
#golf #catelist .catelistbl th,
#bicycle #catelist .catelistbl th,
#snow #catelist .catelistbl th,
#fishing #catelist .catelistbl th{
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_sports.gif) top left no-repeat;
}
/* fitness追加 150108sm17 */
#fitness #catelist .catelistbl td,
#sports-wear #catelist .catelistbl td,
#sports #catelist .catelistbl td,
#golf #catelist .catelistbl td,
#bicycle #catelist .catelistbl td,
#snow #catelist .catelistbl td,
#fishing #catelist .catelistbl td{
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_sports.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#hobby #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_hobby.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#hobby #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_hobby.gif) top left no-repeat;
}
#hobby #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_hobby.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#book-cd-dvd #catelist .ttl,
#book #catelist .ttl,
#dvd #catelist .ttl{
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_book_cd_dvd.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#book-cd-dvd #catelist .catelistbl th,
#book #catelist .catelistbl th,
#dvd #catelist .catelistbl th{
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_book_cd_dvd.gif) top left no-repeat;
}
#book-cd-dvd #catelist .catelistbl td,
#book #catelist .catelistbl td,
#dvd #catelist .catelistbl td{
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_book_cd_dvd.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#watch-accessory #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_watch_accessory.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#watch-accessory #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_watch_accessory.gif) top left no-repeat;
}
#watch-accessory #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_watch_accessory.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#default #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_default.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#diy #catelist .ttl,
#electric-tools #catelist .ttl,
#working-tool #catelist .ttl,
#agriculture #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_default.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#default #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_default.gif) top left no-repeat;
}
#diy #catelist .catelistbl th,
#electric-tools #catelist .catelistbl th,
#working-tool #catelist .catelistbl th,
#agriculture #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_default.gif) top left no-repeat;
}
#default #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_default.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#diy #catelist .catelistbl td,
#electric-tools #catelist .catelistbl td,
#working-tool #catelist .catelistbl td,
#agriculture #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_default.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#kitchen #catelist .ttl,
/* カテゴリ追加 sm07 10.11.01 */
#cookware #catelist .ttl,
#kitchen-goods #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_kitchen.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#kitchen #catelist .catelistbl th,
/* カテゴリ追加 sm07 10.11.01 */
#cookware #catelist .catelistbl th,
#kitchen-goods #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_kitchen.gif) top left no-repeat;
}
#kitchen #catelist .catelistbl td,
/* カテゴリ追加 10.11.01 sm07 */
#cookware #catelist .catelistbl td,
#kitchen-goods #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_kitchen.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#interior #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_interior.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#interior #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_interior.gif) top left no-repeat;
}
#interior #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_interior.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#houseware #catelist .ttl,
#stationery #catelist .ttl,
#daily-goods #catelist .ttl,
#nursing-care #catelist .ttl{ /* nursing-care 150212sm17 */
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_houseware.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#houseware #catelist .catelistbl th,
#stationery #catelist .catelistbl th,
#daily-goods #catelist .catelistbl th,
#nursing-care #catelist .catelistbl th{ /* nursing-care 150212sm17 */
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_houseware.gif) top left no-repeat;
}
#houseware #catelist .catelistbl td,
#stationery #catelist .catelistbl td,
#daily-goods #catelist .catelistbl td,
#nursing-care #catelist .catelistbl td{ /* nursing-care 150212sm17 */
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_houseware.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#drink #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_drink.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#drink #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_drink.gif) top left no-repeat;
}
#drink #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_drink.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#food #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_food.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#food #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_food.gif) top left no-repeat;
}
#food #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_food.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
/* カテゴリ追加 20150709 sm11 */
#instant-food #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_food.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#instant-food #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_food.gif) top left no-repeat;
}
#instant-food #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_food.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
/* カテゴリ追加 sm11 150817*/
#pet #catelist .ttl,
#dog-goods #catelist .ttl,
#cat-goods #catelist .ttl,
#animal-goods #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_pet.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#pet #catelist .catelistbl th,
#dog-goods #catelist .catelistbl th,
#cat-goods #catelist .catelistbl th,
#animal-goods #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_pet.gif) top left no-repeat;
}
#pet #catelist .catelistbl td,
#dog-goods #catelist .catelistbl td,
#cat-goods #catelist .catelistbl td,
#animal-goods #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_pet.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
/* カテゴリ追加 sm5 120806 */
#baby #catelist .ttl,
#maternity #catelist .ttl,
#baby-goods #catelist .ttl,
#kids #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_baby.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
/* カテゴリ追加 sm5 120806 */
#baby #catelist .catelistbl th,
#maternity #catelist .catelistbl th,
#baby-goods #catelist .catelistbl th,
#kids #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_baby.gif) top left no-repeat;
}
#baby #catelist .catelistbl td,
#maternity #catelist .catelistbl td,
#baby-goods #catelist .catelistbl td,
#kids #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_baby.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#beauty-health #catelist .ttl,
#cosme #catelist .ttl,
#cosmetic #catelist .ttl,
#medicine #catelist .ttl,
#supplement #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_beauty_health.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#beauty-health #catelist .catelistbl th,
#cosme #catelist .catelistbl th,
#cosmetic #catelist .catelistbl th,
#medicine #catelist .catelistbl th,
#supplement #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_beauty_health.gif) top left no-repeat;
}
#beauty-health #catelist .catelistbl td,
#cosme #catelist .catelistbl td,
#cosmetic #catelist .catelistbl td,
#medicine #catelist .catelistbl td,
#supplement #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_beauty_health.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#pc #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_pc.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#pc #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_pc.gif) top left no-repeat;
}
#pc #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_pc.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#kaden #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_kaden.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#kaden #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_kaden.gif) top left no-repeat;
}
#kaden #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_kaden.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#camera #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_camera.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#camera #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_camera.gif) top left no-repeat;
}
#camera #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_btm_camera.gif) bottom left no-repeat;
	padding:3px 5px 15px 3px;
}
#shoes #catelist .ttl,
#sports-shoes #catelist .ttl,
#ladies-shoes #catelist .ttl,
#mens-shoes #catelist .ttl,
#kids-shoes #catelist .ttl,
#shoes-accessories #catelist .ttl,
#outdoor #catelist .ttl,
#housing #catelist .ttl,
#reform #catelist .ttl,
#lighting #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_shoes.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#default #catelist .ttl {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_ttl_default.gif) no-repeat;
	border-bottom:1px #d4d2d2 solid;
}
#shoes #catelist .catelistbl th,
#sports-shoes #catelist .catelistbl th,
#ladies-shoes #catelist .catelistbl th,
#mens-shoes #catelist .catelistbl th,
#kids-shoes #catelist .catelistbl th,
#shoes-accessories #catelist .catelistbl th,
#outdoor #catelist .catelistbl th,
#housing #catelist .catelistbl th,
#reform #catelist .catelistbl th,
#lighting #catelist .catelistbl th {
	background:url(https://img1.kakaku.k-img.com/images/category/search/list/catelist_top_shoes.gif) top left no-repeat;
}
#shoes #catelist .catelistbl td,
#sports-shoes #catelist .catelistbl td,
#ladies-shoes #catelist .catelistbl td,
#mens-shoes #catelist .catelistbl td,
#kids-shoes #catelist .catelistbl td,
#shoes-accessories #catelist .catelistbl td,
#outdoor #catelist .catelistbl td,
#housing #catelist .catelistbl td,
#reform #catelist .catelistbl td,
#lighting #catelist .catelistbl td {
	background:url(https://img1.kakaku.k-img.com/images/category/searc