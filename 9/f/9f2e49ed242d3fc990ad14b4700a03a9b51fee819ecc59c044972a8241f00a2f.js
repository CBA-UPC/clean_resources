// models/numeric.js

var app = app || {};

app.Numeric = Backbone.Model.extend({
	defaults: {
		num: 0,
		selected: false,
		disabled: true,
		hovered: false
	},

	select: function(){
		this.set({hovered:false});
		if( this.get('num') === 0 ) return;
		this.set({selected:true});
	},
	deselect: function(){
		this.set({selected:false});
	},
	toggle: function(){
		if( this.get('selected') ) this.deselect();
		else this.select();
	},

	enable: function(n){
		if( n > 0 || this.get('num') > 0 )
			this.set({disabled:false});
	},
	disable: 
});