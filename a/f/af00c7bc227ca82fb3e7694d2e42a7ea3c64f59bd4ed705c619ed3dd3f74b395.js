// models/cell.js

var app = app || {};

app.Cell = Backbone.Model.extend({
	defaults:{
		row: 0,
		col: 0,
		area: 0,
		nDefault: 0,
		nAnswer: 0,
		nCurrent: 0,
		fixed: false,
		selected: false,
		grouped: false,
		matched: false,
		wronged: false,
		memos: []
	},

	index: function(){
		return this.get('row')*9 + this.get('col');
	},

	select: function(){
		this.set({selected:true});
	},
	deselect: function(){
		this.set({selected:false});
	},
	match: function(){
		this.set({matched:true});
	},
	dematch: function(){
		this.set({matched:false});
	},
	group: function(){
		this.set({grouped:true});
	},
	degroup: function(){
		this.set({grouped:false});
	},
	wrong: function(){
		this.set({wronged:true});
	},
	dewrong: function(){
		this.set({wronged:false})
	},
	setN: 
	unsetN: 

	// be careful
	addMemo: function(n){
		if( _.contains( this.get('memos'), n) ) return false;
		var _ary = _.clone(this.get('memos'));// shallow copy
		_ary.push( n);
		this.set({memos: _.sortBy(_ary,  });
	},
	removeMemo: function(n){
		if( !_.contains( this.get('memos'), n) ) return false;
		var _ary = _.without( _.clone(this.get('memos')), n);
		this.set({memos: _ary});
	},
	addMemos: function( ary ){
		if( ary.length <= 0 ) return;
		this.set( { memos:_.map( ary,  } );
	},
	removeAllMemos: function(){
		if( this.get('memos').length <= 0 ) return;
		this.set({memos:[]});
	}


});
