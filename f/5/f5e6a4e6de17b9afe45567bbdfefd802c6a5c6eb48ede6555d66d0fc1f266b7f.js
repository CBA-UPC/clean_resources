// views/table.js

var app = app || {};

app.TableView = Backbone.View.extend({
	el: '#table',

	initialize: function( initialCells ){
		this.collection = app.table;
		this.render();//

		this.listenTo( this.collection, 'cellSelect', this.selectCell);
		this.listenTo( this.collection, 'deploy', this.deploy);
	},

	deploy: function(){
		this.stopListening( this.collection, 'deploy');
		this.listenTo( app.numbers, 'change:selected', this.onNumberSelect);
		this.listenTo( app.numbers, 'delete', this.onDelete);
	},

	render: 

	renderCell: function( item ){
		var cellView = new app.CellView({
			model: item
		});
		this.$el.append( cellView.render().el );
	},

	selectCell: function( cell ){
		if( app.app.checkPubEnd() ) return;//
		this.collection.selectCell(cell);//
	},

	// Cell[nCurrent] was changed
	setNum: 

	newgame: function(){
		app.func.ga( 'New Game');
		this.collection.selectCell( this.collection.selectedCell() );
		this.collection.restart();//
	},

	giveup: function(){
		app.func.ga( 'Give Up');
		this.collection.selectCell( this.collection.selectedCell() );
		this.collection.each( function(cell){
			if( cell.get('fixed') ) return;
			if( cell.get('nCurrent') === cell.get('nAnswer') ) return;
			cell.setN( cell.get('nAnswer'));
			cell.wrong();
		});
	},

	resume: function(result){
		app.func.ga( 'Continue');
		this.collection.selectCell( this.collection.selectedCell() );
		this.collection.resume(result);
	},

	onNumberSelect: function(numeric){
		var n  = numeric.get('num');
		var selected = numeric.get('selected');
		if( !app.memo.isOn() )
		{
			if( selected )// select
				this.collection.setN(n);
			else
				this.collection.unsetMatchedCells();
		}else{
			if( selected )
				this.collection.addMemo(n);
			else
				this.collection.removeMemo(n);
		}
	},

	onDelete: function(){
		this.collection.unsetN();
	},

	saveCollection: 
});