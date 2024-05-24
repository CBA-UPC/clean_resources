// models/modal.js

var app = app || {};

app.Modal = Backbone.Model.extend({
	defaults:{
		spinner: false,
		bg: true,
		label: '',
		backURL: '',
		cancel: false,
		state: ''
	}
});
