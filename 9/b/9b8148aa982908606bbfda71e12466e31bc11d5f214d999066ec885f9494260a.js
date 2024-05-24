// views/modal.js

var app = app || {};

app.ModalView = Backbone.View.extend({
	template: _.template( $('#template-modal').html() ),

	events: {
		'click .ok': 'onOkClick',
		'click .cancel' : 'onCancelClick'
	},

	initialize: function( params ){
		this.model = new app.Modal(params);
		this.d = new $.Deferred;
		$('body').append( this.$el );
		this.render();//
	},

	render: function(){
		this.$el.html( this.template(this.model.attributes) );
		this.$el.css({opacity:0}).animate({opacity:1.0}, 300);
		this.$dialogue = $(this.$el.find('.dialogue')[0]);
		this.$spinner = $(this.$el.find('.spinner')[0]);
		if( this.$dialogue )
		{
//			this.$dialogue.css('margin-top', -(this.$dialogue.height()/2 | 0) );
			this.appear( this.$dialogue );
		}
		if( this.$spinner )
		{
			this.$spinner.css('margin-top', -(this.$spinner.height()/2 | 0) );
			this.appear( this.$spinner );
		}
		return this;
	},
	appear: function( $elm ){
		$elm.css({'margin-top':'-=10px'}).animate({'margin-top':'+=10px'}, 300, 'easeOutExpo');
	},
	disappear: function( $elm ){
		$elm.animate({'margin-top':'+=10px'}, 300, 'easeOutExpo');
	},

	close: function( bool ){
		if( this.$dialogue )
			this.disappear( this.$dialogue );
		if( this.$spinner )
			this.disappear( this.$spinner );
		var _this = this;
		this.$el.stop().animate( {opacity:0.0}, 300, function(){
			if( bool ) _this.d.resolve();
			else _this.d.reject();
			_this.model.destroy();
			_this.remove();
			_this = null;
		});
	},

	suspend: function( e ){
		var _this = this;
		if( _this.$dialogue )
			_this.disappear( _this.$dialogue );
		if( this.$spinner )
			_this.disappear( _this.$spinner );
		

		_this.$el.stop().animate( {opacity:0.0}, 300, function(){
			// HTTP error
			if ( e.status === app.STATUS.ERROR)
			{
				_this.d.resolve( e.apis[0].errors[0].msg);
			}else if( e.status === app.STATUS.NORMAL){// check status code
				_this.d.resolve();
			}else{
				_this.d.reject( {status:e.status, state:_this.model.get('state')} );
			}
			_this.model.destroy();
			_this.remove();
			_this = null;
		});
		return _this.d.promise();
	},

	promise: 

	onOkClick: function(e){
		e.preventDefault();
		var _this = this;		
		var _backURL = _this.model.get('backURL');
		if( _backURL )
			app.func.go( _backURL);
		this.close(true);
	},

	onCancelClick: 
});

//--------------------------------------------------------------//
app.PrizeClearModalView = app.ModalView.extend({
    template: _.template( $('#template-prize-clear-modal').html() ),

    events: {
        'click .close': 'onOkClick'
    },

    render: function(){
        var _this = this;

        var spinner = new app.ModalView({
            state: app.STATE.SAVE,
            spinner: true,
            label: app.LABEL.GAME_SEND
        });

        $.ajax( app.func.makeAjaxParams( app.API.KEYWORD_GET, {
            sid: app.SID
        }))
            .then(function(e){
                spinner.suspend(e)
                    .then( function(){
                        if( app.func.eChecker(e) )
                        {
                            _this.constructor.__super__.render.apply(_this);
                            var k = e.apis[0].result;
                            _this.$('.dialogue-reward__ex span').text(k);
                            _this.$('.dialogue-reward__keyword').text(k);
                        }
                    },
                        app.app.onStatusError
                    );
            }
            , ;
    },
});
