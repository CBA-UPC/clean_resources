// views/app.js

var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#game',

	events: {
		'click #newgame' : 'onNewClick',
		'click #giveup' : 'onGiveClick',
		'click #continue' : 'onContinueClick',
		// 'click #help' : 'onHelpClick',
		'click #print' : 'onPrintClick',
		// , 'touchstart' : 'onTouchStart'
		'click #sudoku_hint' : 'onHintSwitchClick',
	},

	initialize: function( params ){
		app.func.log('app.initialize');
		var _this = this;

		// this.$newgame = this.$('#newgame');
		// this.$giveup = this.$('#giveup');
		// this.$continue = this.$('#continue');
		// this.$help = this.$('#help');
		// this.$print = this.$('#print');
		// this.$save = this.$('#save');
		// this.$check = this.$('#check');

		this.model = new app.App({id: app.HASH + app.SID});//
		this.model.fetch({
			remove: false,
			merge: false,
			error: 
			success: function(collection, response, options){
				app.func.log( 'app.init.fetch.success', collection, response, options);

				app.answer = response.answer;

				if( response.gameData === '')
					_this.loadDetail()
				else
					_this.render();
			}
		});

		this.hintSwitchViewChange()
	},

	loadDetail: function(){
		app.func.log('app.loadDetail');
		var _this = this;

		var spinner = new app.ModalView({
			state: app.STATE.LOAD,
			spinner: true,
			label: app.LABEL.GAME_LOAD
		});

		app.func.log('json load start')
		$.ajax( app.func.makeAjaxParams( app.API.DETAIL, {sid:app.SID}) )
			.then(function(e){
				app.func.log( 'json load succeeded');
				spinner
					.suspend(e)
					.then(function(){
						app.func.log( 'json spinner then');
						if( app.func.eChecker(e) )
						{
							_this.model.merge( e.apis[0].result );
							_this.model.merge( e.status);
							if( e.status != '0'){
								_this.model.merge( e.apis[0].errors[0]);
							}
							_this.render();
						}else{
						}
					}, function(ee){
						app.func.log( 'json spinner else')
						if( e.status != app.STATUS.NORMAL){
							_this.model.setError( e.apis[0].errors[0]);
						}
						_this.onStatusError(ee);
					}
					);
			}, function(e){
				app.func.log('json load failed')
				spinner.suspend(e)
					.then( app.func.cantConnect );
			});
	},

	render: function(){
		app.func.log( 'app.render');
		var _this = this;
		_this.model.save();////

		var nums = [];
		_.times(10, ;
		var cells = [];
		var q=this.model.get('gameData'), a=this.model.get('answer');

		_.times(9, function(y){
			_.times( 9, function(x){
				cells.push({
					id: app.HASH + app.SID + "-c" + (y*9+x),
					col:x,
					row:y,
					area: Math.floor(y/3)*3 + Math.floor(x/3),
					nDefault: Number( q.charAt(y*9+x) ),
					nAnswer: Number( a.charAt(y*9+x) ),
					nCurrent: Number( q.charAt(y*9+x) ),
					fixed: (Number( q.charAt(y*9+x) ) !== 0)
				});
			});
		});

        var _isPrize = this.isPrize();
        var _isClear = this.model.get('isClear');
		app.table = new app.Table( cells);// Table Collection

		app.tableView = new app.TableView();
		app.memoButton = new app.MemoButtonView();
		app.saveButton = new app.SaveButtonView();
		app.checkButton = new app.CheckButtonView();
        if (_isPrize) {
            app.prizeButton = new app.PrizeButtonView();
            if (_isClear) {
                app.prizeButton.onAny();
            }
        }
        else {
            _this.$('#reward-apply').remove();
        }
		app.numbersView = new app.NumbersView(nums);

		var _state = this.model.get('state');
		if( _state != app.STATE.LOAD )
		{
			this.model.setState( app.STATE.LOAD );//
			app.table.fetchCollection();////

			if( _state === app.STATE.GIVEUP )
			{
				_this.sendGiveup();//
			}else{
				if( _state === app.STATE.SAVE )
				{
					app.saveButton.sendSaveData();//
				}else if( _state === app.STATE.CHECK ){
					app.checkButton.sendCheckData();//
				}else if( _state === app.STATE.CONTINUE){
					_this.loadSaveData();//
				}
				_this.model.setGiveup( false );
			}
		}else{
			_this.model.setGiveup( false );
		}

        if( !_this.checkPubEnd() ) {
            if (_isPrize) {
                _this.$('#giveup').remove();
            }
            app.func.deploy( this.model.get('date'), Number(this.model.get('level')), _isPrize, this.getFormattedPrizeClosingDate());
        }

		return this;
	},

	// tableView.selectCell & other buttons
	checkPubEnd: function(){
		var _ld = this.model.get('limitDate');
		_ld = _ld.split(' ');
		_ld = _ld[0].split('-').concat( _ld[1].split(':') );
		app.func.log( 'app.checkPubEnd', new Date( Number(_ld[0]), Number(_ld[1])-1, Number(_ld[2]), Number(_ld[3]), Number(_ld[4]), Number(_ld[5]) ) );
		if( new Date().getTime() > new Date( Number(_ld[0]), Number(_ld[1])-1, Number(_ld[2]), Number(_ld[3]), Number(_ld[4]), Number(_ld[5]) ).getTime() )
		{
			new app.ModalView({
				label: app.LABEL.ALERT_OVERDUE
			}).promise()
				.then(;
			return true;
		}
		return false;
	},

	checkStatus: 

	onTouchStart: 

	onNewClick: function(e){
		var _this = this;
		e.preventDefault();
		app.func.closeMenu();//
		if( _this.checkPubEnd() ) return;//

		new app.ModalView({
			label: app.LABEL.GAME_NEW,
			cancel: true
		}).promise()
			.then( function(){
				_this.model.setGiveup( false );
				_.bind( app.tableView.newgame, app.tableView)();
			});
	},

	onGiveClick: function(e){
		e.preventDefault();
		app.func.closeMenu();
		var _this = this;
		if( _this.checkPubEnd() ) return;//

		if( _this.isGiveup() )
		{
			new app.ModalView({
				label: app.LABEL.ALERT_GIVEUP
			});
		}else{
			new app.ModalView({
				label: app.LABEL.GAME_GIVEUP,
				cancel: true
			}).promise()
				.then( ;
		}
	},

    openPrizeClearDialog: function() {
        var _prizeUrl = this.model.get('prizeUrl');
        var _prizeClosingDate = this.getFormattedPrizeClosingDate();
        var clearDialog = new app.PrizeClearModalView({
            spinner: false,
            label: app.LABEL.GAME_CLEAR,
            prizeUrl: _prizeUrl,
            prizeClosingDate: _prizeClosingDate
        });
    },

	sendGiveup: function(){
		var _this = this;
		var spinner = new app.ModalView({
			state: app.STATE.GIVEUP,
			spinner: true,
			label: app.LABEL.GAME_SEND
		});
		$.ajax( app.func.makeAjaxParams( app.API.CLEAR_SET, {sid:app.SID,clear:1}) )
			.then( function(e){
				app.func.log( 'app.sendGiveup', 'ajax succeeded');
				spinner.suspend(e)
					.then(function(){
						if( app.func.eChecker(e) )
						{
							_.bind( app.tableView.giveup, app.tableView)();
							_this.model.setGiveup(true);
						}
					}, function(ee){
						_this.onStatusError(ee);
					}
					);
			},function(e){
				app.func.log( 'app.sendGiveup', 'ajax failed');
				spinner.suspend(e)
					.then( app.func.cantConnect );
			});
	},

	onHelpClick: function(e){
		e.preventDefault();
		app.func.closeMenu();//
		// app.func.ga( 'Help');
		window.open( app.URL.HELP );
	},

	onPrintClick: function(e){
		e.preventDefault();
		// app.func.ga( 'Print');
		if( this.checkPubEnd() ) return;//
		print();
	},

	initPrintTable: function(){
		var _this = this;
		var cell, $tr, $td, $tt, $ttr, $ttd, $ttt, $tttr, $tttd;
		_.times(3,function(r){
			$tr = $('<tr />');
			_.times(3, function(c){
				$tt = $('<table />');
				$td = $('<td />');
				_.times(3, function(rr){
					$ttr = $('<tr />');
					_.times(3, function(cc){
						cell = app.table.at( (r*3+rr)*3*3+c*3+cc );
						$ttd = $('<td />');
						if( cell.get('fixed') )
						{
							$ttd.text( cell.get('nAnswer' )).addClass('fixed');
						}else{
							if( cell.get('nCurrent') > 0 )
							{
								$ttd.text( cell.get('nCurrent') );
							}else if( cell.get('memos').length > 0){
								var $ttt = $('<table />');
								_.times(3, function(rrr){
									$tttr = $('<tr />');
									_.times(3,function(ccc){
										$tttd = $('<td />');
										if( _.indexOf( cell.get('memos'),rrr*3+ccc+1) >= 0 )
											$tttd.text( rrr*3+ccc+1 );
										$tttr.append( $tttd );
									});
									$ttt.append( $tttr );
								});
								$ttd.append( $ttt );
							}
						}
						$ttr.append( $ttd );
					});
					$tt.append( $ttr );
				});
				$td.append( $tt );
				$tr.append( $td );
			});
			_this.$printTable.append( $tr );
		});
	},

	onContinueClick: function(e){
		e.preventDefault();
		app.func.closeMenu();//
		if( app.app.checkPubEnd() ) return;//

		if( this.isGiveup() )
		{
			app.func.log( 'app.cotinue', 'isGiveup')
			new app.ModalView({
				label: app.LABEL.ALERT_GIVEUP
			});
		}else{
			app.func.log( 'app.cotinue', 'notGiveup')
			new app.ModalView({
				cancel: true,
				label: app.LABEL.GAME_CONTINUE
			}).promise()
				.then( _.bind(this.loadSaveData, app.app) );
		}

	},
	loadSaveData: function(){
		var _this = this;
		var spinner = new app.ModalView({
			state: app.STATE.CONTINUE,
			spinner: true,
			label: app.LABEL.GAME_LOAD
		});
		app.func.log( 'app.loadSaveData');
		$.ajax( app.func.makeAjaxParams( app.API.DATA_GET, {sid:app.SID}) )
			.then( function(e){
					app.func.log( 'app.loadSaveData', 'ajax succeeded');
					spinner.suspend(e)
						.then( function(){
							if( app.func.eChecker(e) )
								app.tableView.resume(e.apis[0].result);
						},						);
			}, function(e){
				app.func.log( 'app.loadSaveData', 'ajax failed');
				spinner.suspend(e)
					.then( app.func.cantConnect );
			});
	},

	onStatusError: function( e ){
		var promise;
		var _this = this;
		var _error = _this.model.get('error');
		app.func.log( 'onStatusError', _error );
		if( e.status !== app.STATUS.NORMAL )
		{
			if( app.tableView )
			{
				new app.ModalView({
					label: app.LABEL.ALERT_UNLOAD
				}).promise()
					.then( function(){
						app.tableView.saveCollection();
						app.app.setState( e.state );////
						app.func.goLogin();
					});
			}else{
				if( _error.msg){
					new app.ModalView({
						label: _error.msg
					});
				}else{

				}

			}
			return;

		} else if( e.status === app.STATUS.ERROR){
			promise = app.func.serverError( app.LABEL.ERROR_PARAMETER );
		}
		return promise;
	},

    getFormattedPrizeClosingDate: function() {
        var _prizeClosingDate = app.func.parseDate(this.model.get('prizeClosingDate'));
        if (!_prizeClosingDate) {
            return '';
        }
        return app.func.formatDate(_prizeClosingDate, 'MM月DD日');
    },

	setSta
	},

    setClear: function() {
        this.model.setClear(true);
        if (this.isPrize()) {
            app.prizeButton.onAny();
        }
    },

	isGiveup: function(){
		return this.model.get('isGiveup');
	},

    isPrize: function() {
        var isPrize = this.model.get('isPrize');
        if (isPrize) {
            var today = new Date();
            var _prizeClosingDate = app.func.parseDate(this.model.get('prizeClosingDate'));
            isPrize = _prizeClosingDate && today < _prizeClosingDate;
        }
        return isPrize;
    },

    isCle  },

    onHintSwitchClick: function() {
        let hintSwitch = document.getElementById(app.HINT.VIEW_ID);
        if (localStorage.getItem(app.HINT.STORAGE_ID) == 'OFF'){
            hintSwitch.innerHTML = 'ON';
            localStorage.setItem(app.HINT.STORAGE_ID, 'ON');
        } else {
            hintSwitch.innerHTML = 'OFF';
            localStorage.setItem(app.HINT.STORAGE_ID, 'OFF');
        }
    },

    hintSwitchViewChange: function() {
        let hintSwitch = document.getElementById(app.HINT.VIEW_ID);
        if (localStorage.getItem(app.HINT.STORAGE_ID) == 'OFF'){
            hintSwitch.innerHTML = 'OFF';
        } else {
            hintSwitch.innerHTML = 'ON';
        }
    },
});
