// collection/table.js

var app = app || {};

app.Table = Backbone.Collection.extend({
	model: app.Cell,
	localStorage: new Backbone.LocalStorage( app.LOCAL_STORAGE ),

	initialize: function(hoge){
	},

	parse: 

	selectedCell: function(){
		return this.filter(function(cell){
			return cell.get('selected');
		})[0];
	},

	groupedCells: function(){
		return this.filter(function(cell){
			return cell.get('grouped');
		});
	},

	wrongedCells: 

	groupingCells: function( target ){
		return this.filter(function(cell){
			if( target === cell ) return false;
			return ( target !== cell && (cell.get('col') == target.get('col')) || (cell.get('row') == target.get('row')) || (cell.get('area') == target.get('area')) );
		});
	},

	matchedCells: 

	memoedCells: function(){
		return this.filter(;
	},

	makeSaveData: function(){
		var s = '';
		_.times( 9*9, function(i){
			s += this.at(i).get('nCurrent');
		}, this);
		return s;
	},

	makeMemoList: function(){
		var ary = new Array, i=0;
		_.each( this.memoedCells(), function(cell){
			ary[i++] = {
				index: cell.index(),
				memo : cell.get('memos').join(',')
			};
		}, this);
		return ary;
	},

	isAllFilled: function(){
		for( var i=0,l=this.length; i<l; i++)
			if( this.at(i).get('nCurrent') === 0 ) return false;
		return true;
	},
	isAllEmpty: function(){
		var cell;
		for(var i=0,l=this.length; i<l; i++)
		{
			cell = this.at(i);
			if( cell.get('fixed') ) continue;
			if( cell.get('nCurrent') !== 0 ) return false;
		}
		if( this.memoedCells().length > 0 ) return false;
		return true;
	},
	isAnywhereFilled: function(){
		var cell;
		for(var i=0,l=this.length; i<l; i++)
		{
			cell = this.at(i);
			if( cell.get('fixed') ) continue;
			if( this.at(i).get('nCurrent') !== 0 ) return true;
		}
		return false;
	},

	deselect: function(){
		var _cell = this.selectedCell();
		if( _cell ) _cell.deselect();
		return _cell;
	},

	unsetGroupedCells: 

	selectCell: function( cell ){
		var _cell = this.deselect();
		this.unsetGroupedCells();

		if( _cell !== cell ){
			cell.select();
			_.each( this.groupingCells(cell), function(item){
				item.group();
			});
			this.trigger('tableSelect', cell);////
		}else{
			this.trigger('tableDeselect');////
		}
	},

	getEnabledNumsByCell: function( cell ){
		var ary = [1,2,3,4,5,6,7,8,9];
		if (localStorage.getItem(app.HINT.STORAGE_ID) != 'OFF'){
			_.each( this.groupingCells(cell), function(_cell){
				ary = _.without( ary, _cell.get('nCurrent'));
			});
		}

		return ary;
	},

	setN: function( n ){
		this.selectedCell().setN(n);
		this.setMatchedCells(n);
		if( this.isAllFilled() ) this.trigger( 'tableAllFilled');
		this.trigger( 'tableAnywhereFilled');
	},
	unsetN: function(){
		this.selectedCell().unsetN();
		if( this.isAllEmpty() ) this.trigger( 'tableAllEmpty');
		this.trigger( 'tableHoled');
	},

	setMatchedCells: function(n){
		_.each( this.matchedCells(n), function(item){
			item.match();
		}, this);
	},

	unsetMatchedCells: 

	addMemo: function(n){
		this.selectedCell().addMemo(n);
		this.trigger( 'tableAnywhereFilled');
	},

	removeMemo: function(n){
		this.selectedCell().removeMemo(n);
		if( this.isAllEmpty() ) this.trigger( 'tableAllEmpty');
	},

	restart: function(){
		_.each( this.memoedCells(), function(cell){
			cell.removeAllMemos();//
		});
		this.each( function(cell){
			if( cell.get('fixed') ) return;
			cell.unsetN();
			cell.dewrong();
		}, this);
		this.trigger( 'tableHoled');
		this.trigger( 'tableAllEmpty');
	},

	resume: function(result){
		var d = result.loadData, m = result.memoList, cell;
		_.each( this.memoedCells(), ;
		_.each( m, function(memo){
			this.at(memo.index).addMemos( memo.memo.split(',') );
		}, this);

		_.times( 9*9, function(i){
			cell = this.at(i);
			if( cell.get('fixed') ) return;
			cell.dewrong();
			if( d.charAt(i) === '0')
				cell.unsetN();
			else
				cell.setN( Number(d.charAt(i)) );
		}, this);
	},

	fetchCollection: function(){
		var i = 0;
		_.each( this.models, function(cell){
			cell.fetch({
				remove: false,
				merge: false,
				error: 
				success: 			});
		});
	},

	saveCollection: function(){
		_.each( this.models, ;
	}

});
