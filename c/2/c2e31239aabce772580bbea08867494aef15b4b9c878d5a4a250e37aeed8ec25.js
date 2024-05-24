// app.js

var app = app || {
	HASH : '5c9a869c-1aa3-0739-9307-e14a04a82f68-',
	LOCAL_STORAGE : 'sudoku-game-yp',
	STAGE : 0, // 0:Publish 1:Dev 2:Local
	ID : '1',
	VERSION : 2,
	APP_TYPE: '', // PC or SP
	URL:{
		INDEX : '/sudoku',
		LOGIN : '/member/login/',
		BACK : '',
		API : '',
		HELP : '/sudoku'
	},
	STATUS : {
		NORMAL : '0',
		ERROR: '2'
	},
	LABEL : {
		ERROR_PARAMETER: 'パラメーターエラー',
		ERROR_AUTHENTICATION: '認証エラー',
		ERROR_UNKNOWN: '原因不明のエラー',
		ALERT_OVERDUE: 'ゲームの有効期限が切れています<br />数独一覧画面に戻ります',
		ALERT_UNLOAD : 'ページを移動しようとしています。',
		ALERT_GIVEUP : 'ゲームをギブアップしています<br />新しくゲームを始めてください',
		ALERT_UNLOAD : 'ログイン画面に遷移します<br />プレイデータは失われません',
		GAME_LOAD : 'ロード中',
		GAME_SEND : '送信中',
		GAME_CONNECT_ERROR : 'ネットワークに接続できません',
		GAME_NEW : 'プレイ中のデータは消去されます<br />新しくゲームをはじめますか？',
		GAME_GIVEUP : 'プレイ中のデータは消去されます<br />ギブアップしますか？',
		GAME_CLEAR : '<img src="/assets/libs/sudoku/images/sp/dialogue_icon_01.png" width="45" height="45" /><br />クリアーおめでとうございます！！',
		GAME_SAVE : 'プレイデータをサーバに送信します<br />よろしいですか？',
		GAME_SAVED : 'プレイデータを保存しました'すか？',
		GAME_INCORRECT : '回答が正しくありません。',
	},
	API : {
		DETAIL : 'GCO001',
		CLEAR_GET : 'GCO002',
		CLEAR_SET : 'GCO003',
		DATA_GET : 'GCO004',
		DATA_SET : 'GCO005',
		KEYWORD_GET : 'GCO006'
	},
	STATE : {
		LOAD: '',
		GIVEUP: 'giveup',
		CONTINUE: 'continue',
		SAVE: 'save',
		CHECK: 'check'
	},
	HINT : {
		VIEW_ID:'sudoku_hint',
		STORAGE_ID:'yol-sudoku-hint',
	},

	/****************************************/
	func : {
		openMenu : function(){
			$('#main-menu a.on:visible').hide();
			$('#main-menu-on:hidden').show();
		},

		closeMenu : function(){
			if( app.APP_TYPE == 'PC') return;
			$('#main-menu-on:visible').hide();
			$('#main-menu a.on:hidden').show();
		},

		makeAjaxParams : function( _apiId, _params){
			app.func.log( 'sudoku.makeAjaxParams', _apiId, _params);
			var _data = {
				apis: [
					{
						apiId: _apiId,
						params:_params
					}
				]
			};
			if( app.STAGE < 2) _data = JSON.stringify( _data );
			var obj = {
				type:'POST',
				url: app.URL.API,
				data: _data,
				dataType: 'json',
				cache: false,
				timeout: 5000
			};
			return obj;
		},

		cantConnect : function( msg ){
			return new app.ModalView({
				label: msg + '<br />' + app.LABEL.GAME_CONNECT_ERROR
			}).promise();
 app.ModalView({
				label: msg
			}).promise();
		},

		unknownError: function( e ){
			var _label, _backURL = '';
			if( e.apis[0].errors && e.apis[0].errors.length > 0 )
			{
				_.each( e.apis[0].errors, funcbr />' + obj.msg;
					if( obj.backURL ) _backURL = obj.backURL;
				});
			}else{
				_label = app.LABEL.ERROR_UNKNOWN;
			}
			return new app.ModalView({
				label: _label,
				backURL: _backURL
			}).promise();
		},

		reload : function(){
			document.location.reload(true);
		},

		deploy: function(_date, _level, _isPrize, _prizeClosingDate){
			$('#main-menu a.on').on( 'click', function(e){
				e.preventDefault();
				app.func.openMenu();//
			});
			$('#main-menu a.off').on( '		e.preventDefault();
				app.func.closeMenu();//
			});

			//h3 Date
			date = _date.split(' ');
			date = date[0].split('-')
			var dd = date[2], dm = date[1], dy = date[0];
			date = dy + '.' + dm + '.' +dd;
			var $s;
			_.each( date.split(''), function(d){
				$s = $('<span />').text(d);
				if( d === width':'5px'});
				else
					$s.css('background-position', '0 -' + 15*Number(d) + 'px');
				$('#game h3').append($s);
			});
			//h4 Level
			var star = '';
			_.times(_level, function(){star+='★';});
			$('#game h4').addClass('n'+_level).text(star);

			$('#main-board').animate({opacity:1}, 300);
            //Prizeマークと文言
            if (_isPrize) {
                $('.reward').show();
                $('#note span').text(_prizeClosingDate);
                $('#note').show();
            }
		},

		go: function( _url ){
			window.location.href = _url;
		},
		goLogin: function(){
			app.func.go( app.URL.LOGIN + escape(app.URL.BACK) );//
		},

		eChecker: function(e){
			app.func.log('eChecker', e);
			if( e.status == app.STATUS.ERROR )
			{
				app.func.unknownError(e);//
				return false;
			}
			return true;
tion( action ){
			return;
			app.func.log( '_gaq.push(["_trackEvent", "数独", "' + action + '", "' + app.SID + '"]);');
			_gaq.push(["_trackEvent", "数独", action, app.SID]);
			// ga('send', 'event', app.SID, action);
		},

		alert: function( label, param ){
			var $dialogue = $('<div class="dialogue"><p class="label' + (param.isAlignLeft ? ' align-left' : '') + '">' + label + '</p></div>').css('margin-top', -74);
			var $modal = $('<div class="modal"><div class="bg"></div></div>');
			$modal.append( $dialogue );
			$('body').append( $modal );
		},

		log: function(){
		},

        // 日付型へ変換
        parseDate: function(dateStr) {
            if (!dateStr) {
                return null;
            }

            dateStr = dateStr.split(' ');
            dateStr = dateStr[0].split('-').concat( dateStr[1].split(':') );
            var date = new Date( Number(dateStr[0]), Number(dateStr[1])-1, Number(dateStr[2]), Number(dateStr[3]), Number(dateStr[4]), Number(dateStr[5]) );
            if (!date || date.toString().toLowerCase().indexOf('invalid date') >= 0) {
                return null;
            }
            return date;
        },

        // 日付の整形
        formatDate: function(date, format) {
            if (!format) format = 'YYYY-MM-DD hh:mm:ss';
            format = format.replace(/YYYY/g, date.getFullYear());
            format = format.replace(/MM/g, date.getMonth() + 1);
            format = format.replace(/DD/g, date.getDate());
            return format;
        }
	}

};


/****************************************/
$(function(){
	app.URL.BACK = document.location.href;
	if (app.URL.BACK.indexOf('localhost') >= 0)
		app.STAGE = 2;
	app.URL.API = '/y_ajax/sudoku/';

	// URLからsidを取得
	var url = document.location.href;
	var paths = url.split('/');
	var sid = '';
	if(paths.length >= 6 && isFinite(Number(paths[5]))){ sid = paths[5]; }
	if(sid == ''){ sid = escape(location.hash.substr(1)); }

	app.SID = sid;
	app.APP_TYPE = ( $('#main-menu-on:visible').length > 0) ? 'PC' : 'SP';
	app.IS_TOUCH = ('ontouchstart' in window);
	app.func.log(app.APP_TYPE, app.IS_TOUCH);

	var ua = navigator.userAgent;
	if( app.APP_TYPE === 'SP')
	{
		// iPhone&iPad OS5以下
		if( ua.match(/(iPhone OS [2-5])|(CPU OS [3-5])/) ){
			app.func.alert( '最新のOSにのみ対応しています。古いOSで閲�ue} );
			return;
		}
		var ac = window.applicationCache;
		if (!ac || ac.UNCACHED === ac.status){//未サポート
			init();
			return;
		}
		ac.addEventListener('updateready', function(){//キャッシュが古い
			ac.swapCache();
			location.reload();
			return;
		});
	}else{
		// IE ~7
		if( ua.match(/MSIE [4-7]/) )
		{
			app.func.alert('IEのメニューにある<em>ツール＞互換表示</em>のチェックが入っている場合は、はずしてください。それでも正常に表示されない場合は、ブラウザを最新にすると動作する可能性があります', {isAlignLeft:true} );
			return;
		}
	}

	init();//

	function init(){
		app.app = new app.AppView();/////
	}

});
////////////////////////////
(function($){
	$.extend(jQuery.easing, {
		easeOutExpo: function (x, t, b, c, d){
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
	});
})(jQuery);
