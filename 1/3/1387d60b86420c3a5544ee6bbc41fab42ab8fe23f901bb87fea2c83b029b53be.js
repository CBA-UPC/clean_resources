// views/button.js

var app = app || {};

//--------------------------------------------------------------//
app.CommonButtonView = Backbone.View.extend({

	events: {
		'click' : 'onClick',
		'mouseover': 'onOver',
		'mouseout': 'onOut'
	},

	render: function(){
		this.$el.css('opacity','');
		this.$el.toggleClass( 'disabled', this.model.isDisable() );
		this.$el.toggleClass('selected', this.model.isOn() );
		return this;
	},

	onClick: 

	onOver: function(e){
		if( this.model.isDisable() ) return;
		this.$el.stop().animate({opacity:0.7}, 50);
	},
	onOut: function(e){
		if( this.model.isDisable() ) return;
		this.$el.stop().animate({opacity:1}, 200);
	}

});

//--------------------------------------------------------------//
app.MemoButtonView = app.CommonButtonView.extend({
	el: '#memo',

	initialize: function(){
		this.model = new app.CommonButton();

		this.listenTo( this.model, 'change', this.render);
		this.listenTo( app.table, 'change:selected', this.onCellChanged);
		this.listenTo( app.table, 'change:nCurrent', this.onCellChanged);
		this.listenTo( app.table, 'tableSelect', this.deselectTable);
		this.listenTo( app.table, 'tableDeselect', this.deselectTable);
		this.render();//
		app.memo = this.model;
	},

	onClick: function(e){
		e.preventDefault();
		if( app.app.checkPubEnd() ) return;//
		if( this.model.get('disabled') ) return;
		this.model.toggle();
	},

	onCellChanged: function(cell){
		if( cell.get('selected') && cell.get('nCurrent') == 0 ) this.model.enable();
		else this.model.disable();
	},

	deselectTable: function(){
		this.model.deselect();
	}

});

//--------------------------------------------------------------//
app.CheckButtonView = app.CommonButtonView.extend({
	el: '#check',

	initialize: function(){
		this.model = new app.CommonButton();

		this.listenTo( this.model, 'change:disabled', this.render);
		this.listenTo( app.table, 'tableAllFilled', this.onAllFilled);
		this.listenTo( app.table, 'tableHoled', this.onHoled);

		this.render();//
	},

	onClick: function(e){
		var _this = this;
		e.preventDefault();
		if( app.app.checkPubEnd() ) return;//
		if( this.model.isDisable() ) return;

		if( app.app.isGiveup() )
		{
			new app.ModalView({
				label: app.LABEL.ALERT_GIVEUP
			});
		}else{
			isAnswer = _this.answerCheck();
			if (isAnswer) {
				_this.sendCheckData();
			} else {
				new app.ModalView({
					label: app.LABEL.GAME_INCORRECT
				});
			}
		}
	},
	answerCheck: function(){
		let inputanswer = app.table.makeSaveData()
    let localStorageSaveKey = app.LOCAL_STORAGE + "-" + app.HASH + app.SID;
    let sudokuGameInfo = localStorage.getItem(localStorageSaveKey);
    let sudokuGameAnswer = JSON.parse(sudokuGameInfo).answer;
    if (sudokuGameAnswer != inputanswer) {
			return false;
		}
		return true;
	},

	sendCheckData: function(){
		var spinner = new app.ModalView({
			state: app.STATE.CHECK,
			spinner: true,
			label: app.LABEL.GAME_SEND
		});
		$.ajax( app.func.makeAjaxParams( app.API.CLEAR_SET, {sid:app.SID,clear:2}) )
			.then( function(e){
					spinner.suspend(e)
						.then( function(){
							if( app.func.eChecker(e) )
							{
								app.app.setClear();
								let localStorageSaveKey = app.LOCAL_STORAGE + "-" + app.HASH + app.SID;
								let sudokuGameInfo = localStorage.getItem(localStorageSaveKey);
								let isSudokuGamePrize = JSON.parse(sudokuGameInfo).isPrize;

								let prizeClosingDate = new Date(JSON.parse(sudokuGameInfo).prizeClosingDate);
								let today = new Date();
								let isNotExpired = prizeClosingDate && today < prizeClosingDate;
								if (isSudokuGamePrize && isNotExpired) {
										app.app.openPrizeClearDialog();
								}
								else {
										new app.ModalView({
												label: app.LABEL.GAME_CLEAR
										});
								}
								app.func.ga('Clear');
							}
						},
							app.app.onStatusError
						);
			},function(e){
				spinner.suspend(e)
					.then( app.func.cantConnect );
			});
		app.func.ga('Check');
	},

	onAllFilled: function(){
		this.model.enable();//
	},

	onHoled: function(){
		this.model.disable();//
	}

});

//--------------------------------------------------------------//
app.SaveButtonView = app.CommonButtonView.extend({
	el: '#save',

	initialize: function(){
		var b = app.table.isAnywhereFilled();
		this.model = new app.CommonButton({disabled:!b});

		this.listenTo( this.model, 'change:disabled', this.render);
		this.listenTo( app.table, 'tableAnywhereFilled', this.onAny);
		this.listenTo( app.table, 'tableAllEmpty', this.onEmpty);

		this.render();
	},

	onClick: function(e){
		e.preventDefault();
		if( app.app.checkPubEnd() ) return;//
		if( this.model.isDisable() ) return;

		if( app.app.isGiveup() )
		{
			new app.ModalView({
				label: app.LABEL.ALERT_GIVEUP
			});
		}else{
			new app.ModalView({
				cancel: true,
				label: app.LABEL.GAME_SAVE
			}).promise()
				.then( this.sendSaveData );
		}
	},
	sendSaveData: function(){
		var spinner = new app.ModalView({
			state: app.STATE.SAVE,
			spinner: true,
			label: app.LABEL.GAME_SEND
		});

		$.ajax( app.func.makeAjaxParams( app.API.DATA_SET, {
			sid:app.SID,
			saveData : app.table.makeSaveData(),
			memoList: app.table.makeMemoList()
		}))
			.then(function(e){
				spinner.suspend(e)
					.then( function(){
						if( app.func.eChecker(e) )
						{
							app.func.ga('Save');
							new app.ModalView({
								label: app.LABEL.GAME_SAVED
							});
						}
					},
						app.app.onStatusError
					);
			}
			, ;
	},


	onAny: function(){
		this.model.enable();
	},
	onEmpty: function(){
		this.model.disable();//
	}


});

//--------------------------------------------------------------//
app.PrizeButtonView = app.CommonButtonView.extend({
    el: '#reward-apply',

    initialize: function(){
        this.model = new app.CommonButton({disabled: true});
        this.listenTo( this.model, 'change:disabled', this.render);
        this.render();
    },

    onClick: function(e){
        var _this = this;
        e.preventDefault();
        if( !app.app.isClear() ) return;
        if( this.model.isDisable() ) return;

        if( app.app.isGiveup() ) {
            new app.ModalView({
                label: app.LABEL.ALERT_GIVEUP
            });
        }
        else {
            app.app.openPrizeClearDialog();
            app.func.ga('Prize');
        }
    },

    onAny: function(){
        this.model.enable();
    },

    onEmpty: });
