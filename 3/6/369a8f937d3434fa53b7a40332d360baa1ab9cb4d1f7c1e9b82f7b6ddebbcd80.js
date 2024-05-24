// views/numeric.js

var app = app || {};

app.NumericView = Backbone.View.extend({
	tagName: 'div',

	events: {
		'mouseover' : 'onOver',
		'mouseout' : 'onOut'
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
		this.isMoved = false;

		this.$el.addClass( 'n' + this.model.get('num'));
		this.listenTo( this.model, 'change', this.render);
	},

	render: function(){
		this.$el.toggleClass( 'disabled', this.model.get('disabled'));
		this.$el.toggleClass( 'selected', this.model.get('selected'));
		this.$el.toggleClass( 'hovered', this.model.get('hovered'));

		return this;
	},

	onClick: function(e){
		if( this.model.get('disabled') || (!app.memo.isOn() && this.model.get('selected')) ) return;
		if( !this.isMoved )
			this.model.trigger('numClick', this.model);
		this.isMoved = false;
	},

	onMove: function(){
		if( this.model.get('fixed') ) return;
		this.isMoved = true;
	},

	onOver: function(e){
		if( this.model.get('disabled') || (!app.memo.isOn() && this.model.get('selected')) ) return;
		this.model.set({hovered:true});
	},
	onOut: function(e){
		if( this.model.get('disabled') || (!app.memo.isOn() && this.model.get('selected')) ) return;
		this.model.set({hovered:false});
	}

});
