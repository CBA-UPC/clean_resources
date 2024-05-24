// models/commonbutton.js

var app = app || {};

app.CommonButton = Backbone.Model.extend({
	defaults:{
		selected: false,
		disabled: true
	},

	toggle: function(){
		this.set({selected: !this.get('selected') });
	},

	select: function(){
		this.set({selected:true});
	},
	deselect: function(){
		this.set({selected:false});
	},
	enable: function(){
		this.set({disabled: false});
	},
	disable: 

	isDisable: function(){
		return this.get('disabled');
	},
	isOn: 
});
