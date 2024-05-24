// models/app.js

var app = app || {};

app.App = Backbone.Model.extend({
	defaults:{
		id: '',
		level: 0,
		gameData: '',
		answer: '',
		date: '',
		limitDate: '',
		state: '',
		isGiveup: false,
		isClear: false,
		isPrize: false,
		prizeClosingDate: '',
		prizeUrl: '',
		status: '0',
		error: {}
	},
	localStorage : new Backbone.LocalStorage(app.LOCAL_STORAGE),

	setID: 

	merge: 

	setError: function(obj){
		this.set({error: obj});
		this.save();
	},

	setState: function(label){
		this.set({state: label});
		this.save();
	},

    setClear: function(bool) {
        this.set({isClear: bool});
		this.save();
    },

	setGiveup: 
});
