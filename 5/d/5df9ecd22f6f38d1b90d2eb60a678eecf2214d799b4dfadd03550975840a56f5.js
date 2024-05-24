/*
 *
 *  * Copyright (C) 2015 by Estalea, Inc. All rights reserved.
 *  * This is proprietary software of Estalea, Inc.
 *
 */

Ext.Uitk.Table = Ext.extend(Ext.util.Observable, {
    constructor : function(config) {
		var me = this;
        Ext.apply(me, config);
        
        me.tableId = 'grid_' + me.id;
        me.disabledClass = 'disabledTable';
		me.pagingConfig = {};
        me.checkboxSelectionModel = null;
        me.gridPlugins = [];
        me.hasLightboxColumn = false;
        me.hasMultipleViews = me.displayParams.hasGridView && me.displayParams.hasListView;
        me.init();
	},
	init: function() {
		this.createReader();
		this.createStore();

        this.createPagingToolbarConfig();
        this.createPagingToolbar();
        this.createTopToolbar();

		this.buildColumnModel();
		this.createTable();
		this.initStatics();
		this.createSelectAllFunctions();
		this.manageFilters();
	},
	initStatics : function() {
		Ext.define('uitkTableUtils', {
		    statics: {
		    	getQueryParams: 
		    	buildDownloadLink: function(link, formId, isServerSide) {
		        	if(isServerSide && formId) {
						var form = Ext.getCmp(formId),
		    				vals = form.getValues();
		    	    	
		    	    	for(var key in vals) {
		    	    		if(link.indexOf(key) != -1) {// remove duplicate query params; this should be fixed by not setting defaults on the query string
		    					link = link.replace(new RegExp('([?&])' + key + '=(.*)[&]'), '$1');
		    				}
		    	    	}

						var lastChar = link.charAt(link.length - 1);

						if((lastChar != '?') && (lastChar != '&')) {
							link += ((link.indexOf('?') > -1) ? '&' : '?');
						}

		    	    	link += form.getValues(true);
		        	}
		    		return link;
		        }
		    }
		});
	},
	createSelectAllFunctions: function() {
		if(this.topToolbarParams.hasBulkActions) {
			var me = this,
				formFieldId = 'uitkSelectAllPagesField_' + me.id,
				flag = Ext.get(formFieldId);
			Ext.define('uitkSelectAllPages', {
			    statics: {
			        selectAction: function() {
		                flag.set({value:'allselected'});
			            // Get the displayed text item and replace the text by calling renderDeSelectAllPages.
			            var selectAllPagesItem = Ext.get('uitkAllPagesSelect');
			            if(selectAllPagesItem) {
			            	selectAllPagesItem.setHTML(me.renderDeSelectAllPages(me.store.getTotalCount()));
			            }
			            if(Ext.labelBulkActionToolbar) {
                            Ext.labelBulkActionToolbar.newSelection(me)
                        }
			        },
			        //called when Clear Selection is clicked
					deSelectAction: function(keepSelection) {
						flag.set({value:''});
						selectAllPagesItem = Ext.get('uitkAllPagesSelect');
			            if(selectAllPagesItem) {selectAllPagesItem.setHTML('&nbsp;');}
			            if(!keepSelection) {
                            me.checkboxSelectionModel.deselectAll(true);
                        }
					}
			    }
			});
		}
	},
	manageFilters:function() {
		if(this.filters) {
			var me = this;
			me.filters.on('filtered',me.loadStore,me);
		}
	},
	renderSelectAllPages: function(count, totalCount) {
		var selectAllTextHtml = '<span id="uitkAllPagesSelect"><b>' + count + '</b> ' + this.selectionBannerMsg.itemsSelectedLabel + '.';
        if (count != totalCount ){
        	selectAllTextHtml += ' <a href="javascript:;" onclick="uitkSelectAllPages.selectAction();"> ' + this.selectionBannerMsg.selectAllLabel + '<b> ' + totalCount + '</b> ' + this.selectionBannerMsg.itemsLabel + '</a>.';
    	}
        selectAllTextHtml += '</span>';
        return selectAllTextHtml;
	},
	renderDeSelectAllPages: function(totalCount) {
		var deSelectAllTextHtml = this.selectionBannerMsg.allLabel + ' <b>' + totalCount + '</b> ' + this.selectionBannerMsg.itemsSelectedLabel + '. <a href="javascript:;" onclick="uitkSelectAllPages.deSelectAction();">' + this.selectionBannerMsg.clearSelectionLabel +'</a>';
		
		return deSelectAllTextHtml;
	},
	getPageSize:function() {
		var cookiePageSize = Ext.util.Cookies.get("ext-gridPg");
		return cookiePageSize ? cookiePageSize : this.storeParams.pageSize;
	},
	createPagingToolbarConfig:function() {
		this.pagingConfig = {
			disablePagination: this.disablePagination,
			hideRecordCount: this.hideRecordCount,
			disableColumnsButton: this.disableColumnsButton,
			pageSize: this.getPageSize(),
			store: this.store,
			displayInfo: true,
			emptyMsg:'No results found',
			beforePageText:'Page',
			nextText:'',
			tableId:this.id,
			prevText:'',
			variations:this.bottomToolbarParams.pageSizeVariations,
			downloadOptions:this.bottomToolbarParams.downloadLinks,
			searchWidgetFormId:this.bottomToolbarParams.searchWidgetFormId
		};
	},
	createPagingToolbar:function() {
		this.pagingToolbar = null;
		if(this.storeParams.pageSize > 0) {
			var config = this.pagingConfig;
			config.id = this.id + '-bbar';
			config.tableConfig = this;
            config.displayMsg = config.disablePagination || config.hideRecordCount ? '' : 'Displaying: {0} - {1} of {2}';
			if (this.alwaysShowPagination) {
				config.displayMsg = 'Displaying: {0} - {1}';
			}
            this.pagingToolbar = new Ext.Uitk.CustomPagingToolbar(config);
		}
	},
	createTopToolbar:function() {
		this.topToolbar = null;
		if(this.topToolbarParams.hasBulkActions || this.hasMultipleViews || (!this.displayParams.showColHd && this.topToolbarParams.sortOptions)) {
			var config = this.pagingConfig;
			config.id = 'uitkDefaultTbar';
			config.minHeight = 50;
			config.tableConfig = this;
			this.topToolbar = new Ext.Uitk.TableTopToolbar(config);
		}
	},
	createTable:function() {
		var tableDef = {
			store:this.store,
	        enableColumnResize:true,
	        id:this.tableId,
	        hideHeaders:!this.displayParams.showColHd,
	        columns:this.columnDefinitions,
	        ctCls: this.displayParams.containerClass,
	        cls:'',
	        viewConfig: {
				loadMask:true,
				loadingHeight:400,
				stripeRows:false,
				enableTextSelection:true,
    			emptyText:this.noResultsMessage,
    			getRowClass : function(row, index) { 
			      var cls = '';
			      if(row.json && row.json.rowCls) {
			      	cls = row.json.rowCls;
			      }
			      return cls; 
			   } 
	        },
			tbar:this.topToolbar,
	        bbar:this.pagingToolbar,
	        selModel:this.checkboxSelectionModel,
	        disableSelection:!this.topToolbarParams.hasBulkActions,
	        plugins:this.gridPlugins,
	        stateful:this.isStateful,
	        stateId:this.cookieId,
	        stateEvents:['cellclick'],
			listeners:{
				beforestaterestore:function(el, state) {
					if(el.columns && state.columns) {
						//Clear state if number of columns has changed
						return el.columns.length == state.columns.length;
					}
				}
			}
		};

		if(this.hasSelectAllPages) {
			tableDef.dockedItems = [{
	            xtype: 'panel',
	            dock: 'top',
	            id:'uitkAllSelect',
	            weight:101,// 102-109 is currently unused, if needed for future widgets
	            height:32,
	            hidden:true,
	            html: ''
	        }];
		}
		
		if(this.displayParams.showSummary) {
			tableDef.features = [{ftype:'summary'}];
		}
		if(this.displayParams.hasGridView && !this.hasMultipleViews) {// if only grid view need to set class here
			tableDef.cls += 'uitkGridDisplay';
		}
		if(this.displayParams.maxHeight) {
			tableDef.maxHeight = this.displayParams.maxHeight;
		}
		else {
			tableDef.manageHeight = false;
			tableDef.cls += ' uitkFreeHeightGrid';
		}
		if(this.displayParams.title && !this.topToolbarParams.hasBulkActions && !this.hasMultipleViews && !(!this.displayParams.showColHd && this.topToolbarParams.sortOptions)) {
			tableDef.title = this.displayParams.title;
		}
		
		this.table = new Ext.grid.Panel(tableDef);
		
		this.addGridRenderListeners();
		
		this.renderTable();
		
		this.loadStore();
	},

	updateStoreParams:function() {
		var me = this, 
			url = me.store.proxy.url,
			params;
		if (me.filters && me.storeParams.isServerSideDataSource) {
			for (var key in me.filters.getValues()) {
				if (url.indexOf(key) != -1) {
					url = url.replace(new RegExp('([?&])' + key + '=(.*)[&]'), '$1');
				}
			}
			
			params = Ext.apply({'tableId':me.id}, me.filters.getAllParams());
			
			if(me.topToolbar) {
				params = Ext.apply(params, me.topToolbar.sorting);
			}
			
			me.store.proxy.url = url;
			me.store.proxy.extraParams = params;
		}
	},
	loadStore: function() {
		var me = this,
			si = 0;
		me.updateStoreParams();
		if(me.storeParams.pageSize > 0) {
			si = (me.store.pageIndex || me.storeParams.startIndex) * me.getPageSize();
			me.store.on('load',function(){
				if(me.store.getCount() < 1) {
					me.table.addCls(me.disabledClass);
				}
				else {
					me.table.removeCls(me.disabledClass);
				}
			},me);
		}
		me.store.load({
			scope:me,
			params:{
				'startIndex':si,
				'pageSize':me.getPageSize(),
				'tableId': me.id
			}
		});
	},
	renderTable:function() {
		this.table.render(document.getElementById(this.displayParams.divId));
	},
	addGridRenderListeners:function() {
		var me = this;

		this.table.on('render',this);

		this.table.getView().on('refresh',function() {
			setTimeout(function() {
				var w = Ext.Element.getViewWidth(),
					h = Ext.Element.getViewHeight();
				Ext.EventManager.resizeEvent.fire(w, h);
			}, 1);

			uitkOnReadyAndOnAjaxReadyHolder(this.table.id);
		},this);

    	window.addEventListener('resize', ;

		if(this.hasLightboxColumn) {
			this.table.on('cellclick',function(el, td, colIndex, record, tr, rowIndex) {
				var cd = this.columnDefinitions[this.getColumnIndex(colIndex)],
					lightboxActive = cd && record.data[cd.dataIndex].crv != 0;

				if(cd && cd.lightbox && lightboxActive) {
					var qpVal = record.data[cd.dataIndex].crv || record.data[cd.dataIndex].dv,
						url = cd.lightbox + qpVal,
						height = cd.lightboxHeight || 600;

					url = Ext.String.urlAppend(url, "fromPopup=1");

					Ext.create('Ext.ux.PagingWindow', {
					    width: cd.lightboxWidth || 850,
					    html: '<iframe width="100%" height="' + height + '" frameborder="0" scrolling="auto" src="' + url + '"></iframe>',
					    store: this.table.getStore(),
					    startIndex: rowIndex,
					    dataIndex: cd.dataIndex,
					    lightboxUrlKey: cd.lightboxKey,
					    modal: true,
					    iframeUrl: url,
						id: cd.lightboxId || undefined,
						header: false,
						manageHeight: false
					}).show();
				}
			},this);
		}
	},
	addStoreListeners: function() { // grid must be rendered
		if(this.storeParams.pageSize > 0) {
			  this.store.on('load', function(){
					if(this.table.bbar && this.store.getTotalCount() > this.storeParams.pageSize){
						this.table.bbar.show();
					}
					if(this.store.getTotalCount() === 0) {
						this.table.addCls(this.disabledClass);
					}
			  },this);
		}
	},
	addColumnHeaderStyling:function() {
		var cell,
			cols = this.table.columns;
		for(var x=0,len=cols.length;x<len;x++) {
			cell = cols[x];
			if(cell.tooltip) {
				cell.addCls('uitkColTip uitkAnchoredTip');
			}
			if(cell.sortable) {
				cell.addCls('uitkColHeadSort');
			}
			if(cell.isActionColumn) {
				cell.addCls('uitkDefaultRowActionCls');
			}
		}
	},
	createStore:function() {

		Ext.define('tModel', {
			extend:'Ext.data.Model',
			fields:this.readerParams.definition
		});
		var storeParams = {
			pageSize:this.getPageSize()
		};
		if(this.storeParams.isServerSideDataSource)	{
			storeParams.proxy = this.getProxy();
		}
		else {
			storeParams.data = this.storeParams.data;
			storeParams.proxy = {
				type:'pagingmemory'
			};
		}
		storeParams.remoteSort = true;// not sure why PagingMemory proxy only works between pages with remote sort enabled (extjs bug?)
		storeParams.model = 'tModel';
		storeParams.proxy.reader = this.reader;
		storeParams.proxy.extraParams = {
			'tableId':this.id
		};
		
		if(this.storeParams.defaultSortOption.value) {
			storeParams.proxy.extraParams.sortBy = this.storeParams.defaultSortOption.value;
			storeParams.proxy.extraParams.sortOrder = this.storeParams.defaultSortOption.order;
		}

	    storeParams.hasRowExpander = this.rowBodyParams ? true : false; // add to store to use in renderer; to adjust colIndex returned in renderer when there is row expander
	    storeParams.hasBulkActions = this.topToolbarParams.hasBulkActions;// add to store to use in renderer; to adjust colIndex returned in renderer when there is checkbox column
		storeParams.columnDefinitions = this.columnDefinitions;// put col def on store to be used in renderer
		this.store =  Ext.create('Ext.data.Store', storeParams);
	},
	getProxy:function() {
		return new Ext.data.HttpProxy({
				url: this.storeParams.dataSource,
				method : 'GET',
			    noCache: false,
				headers:{
					'Is-Ajax-Request':true
				},
				listeners:{
					exception:{
						scope:this,
						fn:function(proxy, response, operation, eOpts){
							  	if(response.status=='403' || response.status=='401') {
									uitkSessionExpiredPop(this.logoutUrl);	
								}
							  	if(response.status=='0' && ((typeof this.noResponseMessage) !== 'undefined')) {
							  		Ext.MessageBox.alert(
										'Request timed out',
										this.noResponseMessage
							  	    );
							  	}
						}
					}
				},
				startParam: 'startIndex',
				limitParam: 'pageSize',
				sortParam: 'sortBy',
				directionParam: 'sortOrder',
				simpleSortMode: true
		});
		
	},
	createReader:function() {
		this.reader = new Ext.data.JsonReader({
			useSimpleAccessors:true,
			root: 'records',
			totalProperty: 'totalCount',
			idProperty:'rowId'
		});
	},
	buildColumnModel: 
	setColumnDefaults:
	setColumnLightboxes:function(col) {
		if(!this.hasLightboxColumn && col.lightbox) {
			this.hasLightboxColumn = true;
		}
	},
	setColumnAttributes:function() {
		for(var x=0,col,len=this.columnDefinitions.length;x<len;x++) {
			col = this.columnDefinitions[x];
			this.setColumnDefaults(col);
			this.setColumnLightboxes(col);
			this.setRenderers(col);
		}
	},
	setRenderers:function(col) {
		if(col.isActionColumn) {
			col.renderer = Ext.Function.bind(this.rowActionRenderer,this,col,true);
		}
		else if(!col.checkOnly && col.ptype != 'expander') {
			col.renderer = Ext.Function.bind(this.defaultRenderer,this,col,true);
		}
	},
	createBulkActions:function() {
		if(this.topToolbarParams.hasBulkActions) {
			var me = this;
            if(this.hasSelectAllPages) {
				this.store.on('load', function() {
					var selectAllPagesItem = Ext.get('uitkAllPagesSelect');
					if(selectAllPagesItem) {selectAllPagesItem.setHTML('&nbsp;');}
	
					var formFieldId = 'uitkSelectAllPagesField_' + me.id;
					var totalRecordsFieldId = 'uitkTotalCountHiddenField_' + me.id;
					var totalCountHiddenField = Ext.get(totalRecordsFieldId);
			        flagValue = Ext.get(formFieldId).getValue();
					
					if(flagValue == 'allselected') {
						me.checkboxSelectionModel.selectAll(true);
						var selectAllText = me.renderDeSelectAllPages(me.store.getTotalCount());
		                if(selectAllPagesItem) {
		                	selectAllPagesItem.setHTML(selectAllText);
	                	}
		                totalCountHiddenField.set({'value': me.store.getTotalCount()});
					}
				});
			}
			this.checkboxSelectionModel = new Ext.selection.CheckboxModel({
				checkOnly:true,
				injectCheckbox:this.store.hasRowExpander ? 1 : 0,
				headerWidth:28,
				listeners: {
					'selectionchange': function(el,selected){
						var btns = this.topToolbarParams.bulkActionButtons || [],
                            btn,
                            sel = el.getSelection(),
                            sharedOptions,
                            selectedOptions,
                            opts,
                            indeterminateOptions;

                        if(Ext.isDefined(Ext.additionalBulkActions)) {
							btns = Ext.additionalBulkActions.concat(btns);
						}

						if(Ext.customSelectionListener != undefined) {
							Ext.customSelectionListener(this, me);
						}

                        for(var x=0,len=btns.length;x<len;x++) {
                            btn = Ext.getCmp(btns[x].id);
                            if(btn.assocColId) {// multi select

                                sharedOptions = [];
                                selectedOptions = [];
                                if(sel.length) {
                                    btn.menu.getRecords().each(function(el) {
                                        sharedOptions.push(el.raw.label.replace(/\\'/g,"'"));
                                    });
                                }
                                var tempStr;
                                for(var y= 0,yy=sel.length;y<yy;y++) {
                                    if(sel[y].raw[btn.assocColId]) {
                                        // TODO: instead of splitting the display value we should add a different return value
                                        tempStr  = replaceAll(sel[y].raw[btn.assocColId].dv, '</span>','<br/>');
                                        tempStr = replaceAll(tempStr, '<span class="gridLabelList">','');
                                        tempStr = replaceAll(tempStr, '&#39;', "'");
                                        opts = tempStr.split('<br/>');
                                        selectedOptions = Ext.Array.insert(selectedOptions, 0, opts);
                                        sharedOptions = Ext.Array.intersect(opts, sharedOptions);
                                    }
                                }
                                btn.menu.checkAll(false);

                                selectedOptions = Ext.Array.unique(selectedOptions);
                                indeterminateOptions = Ext.Array.difference(selectedOptions, sharedOptions);

                                btn.menu.getRecords(false).each(function (el) {
                                    btn.menu.setIndeterminate(el, Ext.Array.contains(indeterminateOptions, el.raw.label));
                                    btn.menu.checkItem(el, Ext.Array.contains(sharedOptions, el.raw.label));
                                });
                            }
                            btn.setDisabled(el.getCount() == 0);
                        }
						if(this.hasSelectAllPages) {
							var allSect = Ext.getCmp('uitkAllSelect');
							var formFieldId = 'uitkSelectAllPagesField_' + me.id;
							totalRecordsFieldId = 'uitkTotalCountHiddenField_' + me.id;
							totalCountHiddenField = Ext.get(totalRecordsFieldId);
							flagValue = Ext.get(formFieldId).getValue();
							if(flagValue != 'allselected'){
                                if(el.getCount() == this.getPageSize()) {
                                        var selectAllText = me.renderSelectAllPages(el.getCount(), this.store.getTotalCount());
                                    allSect.update(selectAllText);
                                    totalCountHiddenField.set({'value': this.store.getTotalCount()});
                                    allSect.show();
                                } else {
                                    allSect.hide();
                                }
							} else {
                                if(el.getCount() == this.getPageSize()) {
                                    allSect.hide();
                                    uitkSelectAllPages.deSelectAction(true);
                                }
                            }
						}
					},
					scope:this
				}
			});
		}
	},
	createRowBodyExpander:function() {
		if(this.rowBodyParams) {
			var rowExpander = {
				ptype:'rowexpander',
				isAjax:true,
				propertyName: this.rowBodyParams.propertyName,
				rowBodyTpl: ['<div class="uitkExpandedRowContent"></div>'],
				width:10
			};
			this.gridPlugins.push(rowExpander);
		}
	},
	getColumnIndex:function(colIndex) {
		var index = this.store.hasBulkActions ? colIndex -1 : colIndex;
		index = this.store.hasRowExpander ? index - 1 : index;
		return index;
	},
	defaultRenderer:function(value, metadata, record, rowIndex, colIndex, store, view, col){
		if(metadata && col.colCssClass) {
			metadata.tdCls = col.colCssClass;
		}
		return value.dv;
	},
	rowActionRenderer:function(value, metadata, record, rowIndex, colIndex, store, view, col){
		if(col.colCssClass) {
			metadata.tdCls = col.colCssClass;
		}

		var id = uitkGenerateId(),
			rowActions = value;

				var menuItem = '',
			confPop = '';

		var rowAction,confPopClass,actionid,
			i=0,
			len=rowActions.length,
			showAsDropDown = !col.showAsButton && (len > 1);

		metadata.tdCls += (showAsDropDown ? ' uitkDefaultRowActionCls' : ' uitkButtonRowActionCls');

		if(showAsDropDown) {
			menuItem += '<div id="' + id + '-container" class="splitButtonContainer">';
			menuItem += '<ul title="Select" id="' + id + '" class="uitkSplitButton uitkAlignMenuRight x-hidden">';
			for(;i < len; i++){

				rowAction = rowActions[i];
				confPopClass = '';
				actionid = 'mi' + id+'btn'+i;
				if (rowAction.subOptions != null) {
					menuItem += '<li><a href="' + rowAction.url + '" id="' + actionid + '" class="uitkDisabled" rel="uitkMenuParent"';
					menuItem += '><b>' + rowAction.label + '</b></a>';
    				// Sub menu
    				menuItem += '<ul id="' + actionid + '-sub">';
					for (var j = 0; j < rowAction.subOptions.length; j++) {
    					menuItem += '<li><a href="' + rowAction.url+ '&subMenu='+rowAction.subOptions[j].value + '" id="' + actionid + j + '">' + rowAction.subOptions[j].label + '</a></li>'; 
					}
    				menuItem += '</ul>';
				}
				else {
					if(rowAction.confirmationPopup) {
						rowAction.confirmationPopup.id = actionid;
						confPop += confirmHelper(rowAction.confirmationPopup);
						confPopClass = 'uitkButtonConfirmation';
					}
					if(rowAction.nw) {
						confPopClass = 'uitkRowActionPop uitkPopAddressBar';
					}
					if(rowAction.lb) {
						confPopClass = 'uitkRowActionLightbox';
					}

					menuItem += '<li><a href="' + rowAction.url + '"';
					if(rowAction.ww) {
						menuItem += ' rev="' + rowAction.ww + '" coords="' + rowAction.wh + '"';
					}
					menuItem += ' id="' + actionid + '" class="' + confPopClass + '"><b>' + rowAction.label + '</b></a>';
					if(rowAction.jsEvent) {
						Ext.ComponentMgr.onAvailable(actionid,function(){
		                	this.setHandler(function(){
		                		var el = this;
		                		this.parentMenu.items.each(function(item,index) {
		                			if(el.text == this.text) {
		                				UitkPubSub.publish("grid/rowaction/select/grid_" + store.proxy.extraParams.tableId, {record:record,rowActions:rowActions,itemIndex:index});
		                			}
		                		});
		                	});
		                });
					}
				}
				menuItem += '</li>';
			}
			menuItem += '</ul>';
			menuItem += '</div>';
		} else {
			if(rowActions) {
				for(;i < len; i++) {
					rowAction = rowActions[i];
					confPopClass = '';
					actionid = id+'btn'+i;
					
					if(rowAction.confirmationPopup) {
						rowAction.confirmationPopup.id = actionid;
						confPop += confirmHelper(rowAction.confirmationPopup);
						confPopClass = 'uitkButtonConfirmation';
					}
					if(rowAction.nw) {
						confPopClass = 'uitkRowActionPop uitkPopAddressBar';
					}
					if(rowAction.lb) {
						confPopClass = 'uitkRowActionLightbox';
					}
	                if(rowAction.url){
	                   menuItem += '<div id="'+actionid+'" class="extButton extSimpleButton uitkNoDisable '+confPopClass+'"><button type="submit" title="'+rowAction.url+'" style="display:none;"';
	                   if(rowAction.ww) {
	                	   menuItem += ' name="' + rowAction.ww + '" value="' + rowAction.wh + '"';
	                   }
	                   menuItem += '><span style="white-space: normal;">'+rowAction.label+'</span></button></div>';
	                }else if (rowAction.jsEvent) {
	                 menuItem += '<div id="'+actionid+'" class="extButton uitkNoDisable '+confPopClass+'"><button type="submit"  style="display:none;"><span>'+rowAction.label+'</span></button></div>';
	                 Ext.ComponentMgr.onAvailable("button-"+actionid,function(){
		                	this.setHandler(function(){
		                		UitkPubSub.publish("grid/rowaction/select/grid_" + store.proxy.extraParams.tableId, {record:record,rowAction:rowAction});
		                	});
	                 });
	                }
					
				}
			}
		}
		
		return menuItem + confPop;
	 }
});

Ext.define('Ext.Uitk.CustomPagingToolbar', {

    extend: 'Ext.toolbar.Paging',
    selectedMenuCls:'uitkSelectedMenuItem',

	getPagingItems: function() {
        var me = this,
            items = [],
            div = Ext.get(this.tableId + "_div"),
			alwaysShowPagination = this.tableConfig.alwaysShowPagination;

        if (!me.disablePagination) {
            items.push({
                xtype: 'splitbutton',
                itemId: 'options',
                text: 'Show ' + this.pageSize,
                cls: 'uitkCustomTbarItem',
                menuAlign: 'bl-tl',
                menu: {
                    minWidth: 180,
                    showSeparator: false,
                    items: me.getSettingsItems()
                }
            });
        }

        if (!me.disableColumnsButton) {
			items.push({
				xtype: 'splitbutton',
				itemId: 'columns',
				text: 'Columns',
				margin: '0 0 0 8',
				cls: 'uitkCustomTbarItem',
				menuAlign: 'bl-tl',
				menu: {
					listeners: {
						beforerender: this.addColumnItems,
						scope: this
					},
					minWidth: 180,
					showSeparator: false,
					dockedItems: [this.getColumnResetItem()]
				}
			});
        }
	   	if(me.downloadOptions) {
			items.push({
				xtype:'splitbutton',
				itemId:'download',
				text:'<i class="fa fa-download"></i>',
				width:34,
				margin: '0 0 0 8',
	            cls:'uitkCustomTbarItem uitkNoCaret',
				menuAlign: 'bl-tl',
	            menu: {
					minWidth: 180,
					showSeparator:false,
			  		items: me.downloadOptions,
			  		listeners:{
						scope:me,
						click:function(menu,item) {
							window.location = uitkTableUtils.buildDownloadLink(item.actionLink,this.searchWidgetFormId,me.tableConfig.storeParams.isServerSideDataSource);
						}
					}
				}
	        });
		}
	    items.push(
	    {
	    	xtype: 'tbtext',
	    	itemId: 'displayItem',
			margin: '0 0 0 20'
	    },
	    '->');
        if (!me.disablePagination) {
			if (!alwaysShowPagination) {
                items.push(
                    {
                        xtype: 'splitbutton',
                        itemId: 'inputButton',
                        name: 'inputButton',
                        margin: '0 10 0 0',
                        cls: 'uitkPageSelector uitkNoCaret',
                        menuAlign: 'bl-tl',
                        menu: {
                            showSeparator: false,
                            padding: '9 10 3 10',
                            items: [{
                                xtype: 'combobox',
                                itemId: 'inputItem',
                                enableKeyEvents: true,
                                selectOnFocus: true,
                                queryMode: 'local',
                                displayField: 'page',
                                valueField: 'page',
                                width: 150,
                                margins: '0 0 0 0',
                                listeners: {
                                    scope: me,
                                    buffer: 300,
                                    blur: me.onPagingBlur,
                                    keydown: me.onPagingKeyDown,
                                    select: me.onPagingNumbered
                                }
                            }]
                        }
                    });

                items.push(
                    {
                        itemId: 'first',
                        width: 34,
                        cls: 'noRightRounding',
                        margin: 0,
                        disabled: true,
                        text: '<i class="fa fa-angle-double-left"></i>',
                        handler: me.moveFirst,
                        scope: me
                    });

            }
            items.push(
                {
                    itemId: 'prev',
                    width: 34,
                    text: '<i class="fa fa-angle-left"></i>',
                    cls: alwaysShowPagination ? 'noRightRounding' : 'noCornerRounding',
                    margin: 0,
                    disabled: true,
                    handler: me.movePrevious,
                    scope: me
                },
                {
                    itemId: 'next',
                    cls: alwaysShowPagination ? 'noLeftRounding' : 'noCornerRounding',
                    width: 34,
                    text: '<i class="fa fa-angle-right"></i>',
                    margin: 0,
                    disabled: true,
                    handler: me.moveNext,
                    scope: me
                });
            if (!alwaysShowPagination) {
                items.push({
                    itemId: 'last',
                    width: 34,
                    cls: 'noLeftRounding',
                    text: '<i class="fa fa-angle-double-right"></i>',
                    margin: 0,
                    disabled: true,
                    handler: me.moveLast,
                    scope: me
                });
            }
        }
	    return items;
	},
	getInputStore:function() {
		var count = this.getPageData().pageCount;
		var inputStore = Ext.create('Ext.data.Store', {
			fields: ['page']
		});

		count = (isNaN(count) ? 1 : count);

		for(var i = 1; i <= count; i++) {
			inputStore.add({'page':('' + i)})
		}

		return inputStore;
	},
	onPagingNumbered:function(el) {
		var pd = this.getPageData();
		var val = parseInt(el.getValue(), 10);

		val = Math.min(Math.max(1, val), pd.pageCount);

		this.store.loadPage(val);
	},
	initComponent : function(){
	    var me = this,
	        pagingItems = me.getPagingItems(),
	        userItems   = me.items || me.buttons || [];
	    me.items = pagingItems.concat(userItems);
	    delete me.buttons;
	    // do not use callParent here as we need to call initComponent on the toolbar
	    Ext.toolbar.Toolbar.prototype.initComponent.call(this);
	    me.addEvents(
	        'change',
	        'beforechange'
	    );
	    me.on('beforerender', me.onLoad, me, {single: true});
	
	    me.bindStore(me.store || 'ext-empty-store', true);

		Ext.EventManager.onWindowResize(function() {
			me.doComponentLayout();
		});
	},
	updateInfo:function() {// hide toolbar if no results
		this.callParent();
		this.setVisible(this.getPageData().total > 0 || this.tableConfig.alwaysShowPagination);
	},
	onLoad:function() {
        var me = this,
            pageData = me.getPageData(),
            currPage = pageData.currentPage,
            pageCount = pageData.pageCount,
            count,
            isEmpty;

        count = me.store.getCount();
        if(pageCount && count == 0 && pageCount < currPage) {
            me.movePrevious();
            return;
        }
        isEmpty = count === 0;
        if (isEmpty) {
            currPage = 0;
            pageCount = 0;
        }

        Ext.suspendLayouts();
        if(me.child('#inputButton')){
        	me.child('#inputButton').setDisabled(pageCount == 1 || isEmpty).setText('Page ' + currPage);
        	me.child('#inputButton').menu.child('#inputItem')
        		.setDisabled(isEmpty)
        		.bindStore(me.getInputStore())
        		.setValue(currPage);
        	if (this.tableConfig.alwaysShowPagination && me.child('#inputButton').el !== undefined) {
                me.child('#inputButton').el.dom.style.display = 'none';
			}
        }
        if(me.child('#first')){
        	me.child('#first').setDisabled(currPage === 1 || isEmpty);
    	}
        if (me.child('#prev')) {
            me.child('#prev').setDisabled(currPage === 1 || isEmpty);
        }
        if (me.child('#next')) {
            me.child('#next').setDisabled(currPage === pageCount || isEmpty);
        }
       	if(me.child('#last')){
        	me.child('#last').setDisabled(currPage === pageCount  || isEmpty);
    	}
        if (this.tableConfig.alwaysShowPagination && count == 0 && pageData.fromRecord > pageData.toRecord) {
            me.child('#prev').setDisabled(false);
        }
        me.updateInfo();
        Ext.resumeLayouts(true);

        if (me.rendered) {
            me.fireEvent('change', me, pageData);
        }
	},
	pageNumberResults: function(el) {
		this.pageSize = el.value;
		
		// set selected class in menu on change
		el.parentMenu.items.each(this);
		el.addCls(this.selectedMenuCls);

		this.getComponent('options').setText('Show ' + this.pageSize);

		if(this.store.proxy.type != 'pagingmemory') {
			this.store.proxy.setExtraParam('pageSize', this.pageSize);
		}
		this.store.pageSize = this.pageSize;// needed for memory proxy
		
		Ext.util.Cookies.set("ext-gridPg", this.pageSize);
		
		this.store.fireEvent('datachanged', this.store);
		this.doRefresh();
		this.updateInfo();
	},
	getPageData : function(){
        var me = this,
        	store = me.store,
        	total = store.totalCount,
        	pageSize = me.pageSize,
			pageCount,
			toRecord,
			fromRecord;
        if (this.tableConfig.alwaysShowPagination) {
        	total = this.store.data.items.length;
        	pageCount = store.currentPage + 1;
        	toRecord = store.currentPage * pageSize;
        	fromRecord = ((store.currentPage - 1) * pageSize) + 1;
        	if (toRecord - fromRecord + 1 > total) {
        		toRecord = fromRecord + total -1;
        		pageCount--;
			}
		}else {
        	pageCount = Math.ceil(total / pageSize);
        	toRecord = Math.min(store.currentPage * pageSize, total);
		}
        return {
            total: total,
            currentPage : store.currentPage,
            pageCount: pageCount,
            fromRecord: ((store.currentPage - 1) * pageSize) + 1,
            toRecord: toRecord
        };
    },
    readPageFromInput : function(pageData){
    	var input = this.child('#inputButton').menu.child('#inputItem');

        var v = input.getValue(),
            pageNum = parseInt(v, 10);

        if (!v || isNaN(pageNum)) {
            input.setValue(pageData.currentPage);
            return false;
        }
        return pageNum;
    }, 
    onPagingBlur : function(e){
        var currPage = this.getPageData().currentPage;
        this.child('#inputButton').setText('Page ' + currPage);
        this.child('#inputButton').menu.child('#inputItem').setValue(currPage);
    },
	getSettingsItems: function() {
    	if(this.variations) {
			var nums = this.variations,
				items = [],
				itm;

			for(var i = 0; i < nums.length; i++) {
				itm = {
					text: 'Show ' + nums[i],
					handler: this.pageNumberResults,
					value: nums[i],
					scope: this
				};
				if(nums[i] == this.pageSize) {
					itm.cls = this.selectedMenuCls;// set selected class in menu on load
				}
				items.push(itm);
			}
			return items;
    	}
	},
	addColumnItems: function(el) {
		var grid = this.findParentByType('grid'),
			columns = grid.columns,
			items = [];

		
		for(var i = 0; i < columns.length; i++) {
			var column = columns[i];

			if(column.hideable) {
				items.push({
					text: column.text,
					checked: !column.hidden,
					checkHandler: showColumn,
					column: column,
					initialState: !column.hidden
				});
			}
		}

		el.add(items);
	},
	getColumnResetItem: function() {
		return {
			xtype: 'menuitem',
			text: 'Restore defaults',
			dock: 'bottom',
			cls: 'uitkMultiSelectAll',
			border: 0,

			handler: function() {
				this.parentMenu.items.each(;
			}
		};
	}
});

Ext.define('Ext.Uitk.TableTopToolbar', {
    extend: 'Ext.Uitk.CustomPagingToolbar',
    prevPos:0,
    sorting:{},
    initComponent : function(){
	    var me = this,
	        pagingItems = me.topToolbarItems(),
	        userItems   = me.tableConfig.topToolbarParams.bulkActionButtons || [];


	    me.items = userItems.concat(pagingItems);

		if(Ext.additionalBulkActions != undefined) {
			me.items = Ext.additionalBulkActions.concat(me.items);
		}

	    delete me.buttons;
	    // do not use callParent here as we need to call initComponent on the toolbar
	    Ext.toolbar.Toolbar.prototype.initComponent.call(this);
	    
	    me.addEvents(
	        'change',
	        'beforechange'
	    );
	    me.on('beforerender', me.onLoad, me, {single: true});
	
	    me.bindStore(me.store || 'ext-empty-store', true);
	    me.addBulkActionForm();

		Ext.EventManager.onWindowResize(;
	},
	addBulkActionForm:function() {
		var form = document.createElement('form');
		form.id = 'bulkActionForm_' + this.tableId;
		form.className = 'uitkBulkActionForm';
		form.method = 'POST';
		
		// Create a select all hidden field
		var selectAllHiddenField = document.createElement('input');
		selectAllHiddenField.setAttribute('type', 'hidden');
		selectAllHiddenField.setAttribute('name', 'selectAllPagesField');
		selectAllHiddenField.setAttribute('value', '');
		selectAllHiddenField.id = 'uitkSelectAllPagesField_' + this.tableId;
		//
		var totalCountHiddenField = document.createElement('input');
		totalCountHiddenField.setAttribute('type', 'hidden');
		totalCountHiddenField.setAttribute('name', 'totalCountField');
		totalCountHiddenField.setAttribute('value', '');
		totalCountHiddenField.id = 'uitkTotalCountHiddenField_' + this.tableId;


        var token = document.createElement('input');
        token.setAttribute('type', 'hidden');
        token.setAttribute('name', 'uitk_csrf');
        token.setAttribute('value', getCsrfToken());
        form.appendChild(token);

		form.appendChild(selectAllHiddenField);
		form.appendChild(totalCountHiddenField);
		document.body.appendChild(form);
	},
	topToolbarItems:function() {
		var me = this,
		items = me.getPagingItems(),
		item;
		for(var x=0,xx=items.length;x<xx;x++) {
			item = items[x];
			if(Ext.Array.contains(['last', 'first', 'options', 'columns', 'download', 'displayItem', 'inputItem'], item.itemId)) {
				item.hidden = true;
			}
			else if(item.itemId == 'next') {
				item.cls = 'noLeftRounding';
			}
			else if(item.itemId == 'prev') {
				me.prevPos = x;
				item.cls = 'noRightRounding';
			}
		}
		if(me.tableConfig.displayParams.title) {
			items.splice(0,0,{
				xtype:'tbtext',
				cls:'uitkTableTbarTitle',
				text:me.tableConfig.displayParams.title
			});
		}
		if(me.tableConfig.topToolbarParams.sortOptions) {
			var sItems = me.tableConfig.topToolbarParams.sortOptions,
				headingsVisible = me.tableConfig.displayParams.showColHd,
				defaultSort = me.tableConfig.storeParams.defaultSortOption.text;
			if(sItems) {
				sorter = me.addCustomTbarItem({
			    	xtype:'splitbutton',
			    	itemId:'gridSorter',
			    	id:'gridSorterId',
			    	text:defaultSort || sItems[0].text,
				    minWidth:32,
				    hidden:headingsVisible,
				    menu: {
				  		items: ([{
				  			disabled:true,
				  			plain:true,
				  			text:'<b class="hdMenuTitle  hdMenuTitle1">Sort By</b>'
				  		}]).concat(sItems),
				  		listeners: {
							scope:this,
		        			click:function(menu,item) {
								var store = this.store,
									proxy = store.proxy,
									order;

								if((typeof item) == 'undefined') {
									return;
								}

								order = item.order;

								if(proxy.extraParams.sortBy && proxy.extraParams.sortBy == item.value) {
									order = proxy.extraParams.sortOrder == 'ASC' ? 'DESC' : 'ASC';
								}
								else {
									me.sorting.sortBy = item.value;
									this.store.proxy.setExtraParam('sortBy', item.value);
								}
								menu.ownerButton.setText(item.text);
								
								me.sorting.sortOrder = order;
								proxy.setExtraParam('sortOrder',order);
								
								store.load();
		        			}
		        		}
					}
				},items);
				me.addCustomTbarItem(' ',items);
			}
			if(me.tableConfig.hasMultipleViews) {
				me.addCustomTbarItem({
					itemId: 'listView',
					pressed:true,
					enableToggle:true,
			        minWidth:28,
			        toggleGroup:'gridListViews',
			        scope:this,
			        text:'<i class="fa fa-align-justify"></i>',
			        cls:'uitkListView uitkCustomTbarItem noRightRounding',
			        handler: function() {
						this.container.removeCls('uitkGridDisplay');
						var hasItems = sItems && sItems.length > 0;
						Ext.getCmp(sorter.id).setVisible(!headingsVisible && hasItems);
						this.tableConfig.table.getView().refresh();
					}
				},items);
				me.addCustomTbarItem({
					itemId: 'gridView',
			        minWidth:28,
			        toggleGroup:'gridListViews',
			        enableToggle:true,
			        scope:this,
			        text:'<i class="fa fa-th"></i>',
			        cls:'uitkGridView uitkCustomTbarItem noLeftRounding',
			        handler: function() {
						this.container.addCls('uitkGridDisplay');
						if(sItems && sItems.length > 0) {
							Ext.getCmp(sorter.id).show();
							this.tableConfig.table.getView().refresh();
						}
					}
				},items);
				me.addCustomTbarItem(' ',items);
			}
		}
		return items;
	},
	addCustomTbarItem:function(config,items) {
		items.splice(this.prevPos,0,config);
		this.prevPos++;
		return config;
	}
});

Ext.define(Ext.grid.feature.Summary, {
    override: 'Ext.grid.feature.Summary',
    generateSummaryData: function(){
		try {
	    var me = this,
	        store = me.view.store,
	        data = store.proxy.reader.jsonData.totRow,
	        columns = store.columnDefinitions,
	        colHeaders = me.view.headerCt.getColumnsForTpl(),
	        newData = {},
	        startIndex = store.hasBulkActions ? 1 : 0;
	    startIndex = store.hasRowExpander ? startIndex + 1 : startIndex;
	    for (var i=0,len=columns.length;i < len;i++) {
	    	if(!columns[i].isActionColumn) {
	    		var si = i + startIndex;
		    	newData[colHeaders[si].id] = columns[i].renderer.call(
		    			this,
		                data[columns[i].dataIndex],
		                null,
		                null,
		                null,
		                si,
		                store,
		                me.view);
		    	}
	    }
	    return newData;
		}
		catch(e) {
		}
	}
});

Ext.define(Ext.selection.CheckboxModel, {
    override: 'Ext.selection.CheckboxModel',

    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
		return record.data.bulkActionCol.disableBulkAction ? '' : this.callParent(arguments);
	},
	doSelect: function(record) {
		if(Ext.isObject(record) && record.data.bulkActionCol.disableBulkAction) {
			return;
		}
		this.callParent(arguments);
	},
    updateHeaderState: function() {
		var count = this.store.data.filterBy(.getCount();

        this.toggleUiHeader(this.selected.getCount() === count);
    }
});

Ext.define('Ext.grid.Panel', {// apply state when a row is clicked to come back to the same page and highlight the clicked row
    override: 'Ext.grid.Panel',
    rowInfo:{
        page:0,
        index:0
    },
    getState:function() {
        var me = this,
            state = me.callParent();

        state = me.addPropertyToState(state, 'row', me.rowInfo || state.row);
        return state;
    },
    applyState: function(state) {
        var me = this,
            row = state.row;

        me.callParent(arguments);


        if(row) {
            var page = row.page,
                sIndex = row.index;


            if(Date.now() - row.stamp < 900000) {// if it has been over 15 minutes since the last visit, don't restore the state
                if (page) {
                    me.store.currentPage = page;
                    me.store.pageIndex = page - 1;
                }
                me.view.getRowClass = 
            }
        }
    },
    initComponent: function() {
        var me = this;
        function updateInfo(el, td, cellIndex, record, tr, rowIndex) {
            me.rowInfo = {
                index:rowIndex,// will be undefined if invoked from staterestore, thus state is only maintained for one visit
                page:me.store.currentPage,
                stamp:Date.now()
            };
        }
        me.callParent();
        me.on('beforestaterestore',;
        me.on('cellclick',updateInfo);
        me.on('staterestore',updateInfo);
    }
});
