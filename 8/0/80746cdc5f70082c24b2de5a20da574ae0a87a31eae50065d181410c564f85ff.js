// views/numbers.js

var app = app || {};

app.NumbersView = Backbone.View.extend({
	el: '#nums',

	initialize: function( initialItems ){
		this.collection = new app.Numbers( initialItems );
		this.render();//

		this.listenTo( app.table, 'tableSelect', this.selectTable);
		this.listenTo( app.table, 'tableDeselect', this.deselectTable);
		this.listenTo( this.collection, 'numClick', this.onNumClick);
		this.listenTo( app.memo, 'change:selected', this.onMemoSelect );

		if( !app.numbers ) app.numbers = this.collection;
		app.table.trigger( 'deploy' );////
	},

	render: 

	renderOne: function( item ){
		var view = new app.NumericView({
			model: item
		});
		this.$el.append( view.render().el );
	},

	selectTable: function(cell){
		var obj = {cell:cell, nums:app.table.getEnabledNumsByCell(cell) };
		this.collection.deselect();
		this.collection.disable();
		if( !app.memo.isOn() )
		{
			this.collection.enableByObj( obj );
			this.collection.selectByObj( obj);
		}
	},

	deselectTable: 

	onNumClick: function(num){
		var n = num.get('num');
		if( !app.memo.isOn() )
		{
			this.collection.deselect();
			this.collection.select( n );
			this.collection.checkDelete( n );
			if( n <= 0 ) this.collection.trigger( 'delete' );/////
		}else{
			this.collection.toggle( n );
		}
	},

	onMemoSelect: function(memo){
		if( memo.isOn() )
		{
			this.collection.deselect();
			this.collection.enable();
			this.collection.selectByArray( app.table.selectedCell().get('memos') );
		}else{
			if( app.table.selectedCell() )
				this.selectTable( app.table.selectedCell() );//
			else
				this.deselectTable();
		}
	}

});