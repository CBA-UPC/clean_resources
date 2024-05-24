// views/cell.js

var app = app || {};

app.CellView = Backbone.View.extend({
	tagName: 'li',

	events: {
	},

	initialize: function(){
		/* events */
		if( app.IS_TOUCH)
		{
			this.events['touchend'] = 'onClick';
			this.events['touchmove'] = 'onMove';
		}else{
			this.events['click'] = 'onClick';
		}

		this.$memo = $('<div />').addClass('memo');
		this.$p = $('<span />').addClass('print');// for print
		this.$el.append( this.$memo );
		this.$el.append( this.$p );
		this.isMoved = false;

		this.listenTo( this.model, 'change', this.render);//
		this.listenTo( this.model, 'change:memos', this.onMemoChange);
	},

	render: function(){
		var c = this.model.get('nCurrent');
		var d = this.model.get('nDefault');
		var fixed = this.model.get('fixed');

		this.$el.removeClass();
		this.$p.text('');

		if( this.model.get('col')%3 == 0 )
			this.$el.addClass('sprc');
		if( this.model.get('row')%3 == 0 )
			this.$el.addClass('sprr');

		this.$el.toggleClass('fixed', fixed );
		this.$el.toggleClass('edit', this.model.get('nDefault') === 0);

		this.$el.toggleClass('selected', this.model.get('selected'));
		this.$el.toggleClass('grouped', this.model.get('grouped'));
		this.$el.toggleClass('matched', this.model.get('matched'));
		this.$el.toggleClass('wronged', this.model.get('wronged'));
		/*
		if( this.model.get('selected') )
		{
			var mt = app.APP_TYPE === 'PC' ? 4 : 2;
			this.$$el = $('<li />').addClass('expand').css({'top':this.$el.position().top-mt+Number(this.$el.css('margin-top').replace('px','')), 'left':this.$el.position().left-mt+Number(this.$el.css('margin-left').replace('px',''))});
			this.$el.parent().append( this.$$el );
		}else if( this.$$el ){
			this.$$el.remove();
		}
		*/
		if( c !== 0)
		{
			this.$el.addClass( 'n' + c);
			this.$p.text( c );
		}
		if( fixed ) return this;

		if( this.model.get('nCurrent') !== 0 )
		{
			this.$memo.hide();
		}else{
			this.$memo.show();
			this.onMemoChange();//
		}

//		this.model.save();
		return this;
	},

	onClick: function(e){
		if( this.model.get('fixed') ) return;
		if( !this.isMoved )
			this.model.trigger('cellSelect', this.model);////
		this.isMoved = false;
	},

	onMove: function(){
		if( this.model.get('fixed') ) return;
		this.isMoved = true;
	},

	onMemoChange: function(){
		this.$memo.children().remove();
		_.each( this.model.get('memos'), function(m){
			this.$memo.append( $('<div />').addClass('m' + m).text(m) );
		}, this);
	}

});