// collection/numbers.js

var app = app || {};

app.Numbers = Backbone.Collection.extend({
	model: app.Numeric,

	selectedNum: function(){
		return this.filter( [0];
	},

	enable: function(n){
		this.disable();//
		this.each(  this);
	},

	disable: function(){
		this.each(function(item){
			item.disable();
		}, this);
	},
	enableByObj: function( obj ){
		_.each( obj['nums'],  this);
		this.checkDelete( obj['cell'].get('nCurrent') );
	},

	checkDelete: 

	deselect: function(){
		this.each(  this);
	},

	select: function(n){
		this.at(n).select();
	},
	toggle: function(n){
		this.at(n).toggle();
	},

	selectByObj: function( obj ){
		this.select( obj['cell'].get('nCurrent') );
	},

	selectByArray: function( ary ){
		_.each( ary,  this);
	}

});
