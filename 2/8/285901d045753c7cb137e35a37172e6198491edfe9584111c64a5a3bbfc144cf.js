(function () {
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
());

define("../lib/almond", function(){});

define( 'models/whenModel',[], function() {
	var model = Backbone.Model.extend( {
		initialize: function( models, options ) {
			/*
			 * If our key or comparator is empty, don't do anything else.
			 */
			if ( ! this.get( 'key' ) || ! this.get( 'comparator' ) ) return;

			/*
			 * Our key could be a field or a calc.
			 * We need to setup a listener on either the field or calc model for changes.
			 */
			if ( 'calc' == this.get( 'type' ) ) { // We have a calculation key
				/*
				 * Get our calc model
				 */
				var calcModel = nfRadio.channel( 'form-' + this.collection.options.condition.collection.formModel.get( 'id' ) ).request( 'get:calc', this.get( 'key' ) );
				/*
				 * When we update our calculation, update our compare
				 */
				this.listenTo( calcModel, 'change:value', this.updateCalcCompare );
				/*
				 * Update our compare status.
				 */
				this.updateCalcCompare( calcModel );
			} else { // We have a field key
				// Get our field model
				var fieldModel = nfRadio.channel( 'form-' + options.condition.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', this.get( 'key' ) );

				if( 'undefined' == typeof fieldModel ) return;

				// When we change the value of our field, update our compare status.
				fieldModel.on( 'change:value', this.updateFieldCompare, this );
				// When we keyup in our field, maybe update our compare status.
				this.listenTo( nfRadio.channel( 'field-' + fieldModel.get( 'id' ) ), 'keyup:field', this.maybeupdateFieldCompare );
				// Update our compare status.
				this.updateFieldCompare( fieldModel );

				/*
				 * TODO: This should be moved to the show_field/hide_field file because it is specific to showing and hiding.
				 * Create a radio message here so that the specific JS file can hook into whenModel init.
				 */
				fieldModel.on( 'change:visible', this.updateFieldCompare, this );
			}
		},

		updateCalcCompare: 

		maybeupdateFieldCompare: function( el, fieldModel, keyCode ) {
			if( 'checkbox' == fieldModel.get( 'type' ) ){
                var fieldValue = ( 'checked' == jQuery( el ).attr( 'checked' ) ) ? 1 : 0;
            } else if( 'listcheckbox' == fieldModel.get( 'type' ) ) {
				// This field isn't a single element, so we need to reference the fieldModel, instead of the DOM.
                var fieldValue = fieldModel.get( 'value' ).join();
            } else if ( 'date' == fieldModel.get ('type' ) ) {
				var fieldValue = fieldModel.get( 'value' );

				if ( _.isEmpty( fieldValue ) ) {
					fieldValue = '1970/01/01';
				}

				let date_mode = fieldModel.get( 'date_mode' );
				if ( 'undefined' == typeof date_mode ) { // If 'date_mode' is undefined, then we assume it's date_only.
					date_mode = 'date_only';
				}
				let date = 0;
				// If we're in time_only mode, then we need to use 1970-01-01 as our date.
				if ( 'time_only' == fieldModel.get( 'date_mode' ) ) {
					date = '1970/01/01';
				} else {
					date = fieldValue;
				}

				// Convert field value into a timestamp
				let hour = fieldModel.get( 'selected_hour' );
				if ( 'undefined' == typeof hour ) {
					hour = '00';
				}

				let minute = fieldModel.get( 'selected_minute' );
				if ( 'undefined' == typeof minute ) {
					minute = '00';
				}

				// If we have a date_and_time field, but we haven't selected a date yet, we don't need to compare.
				if ( 'date_and_time' == date_mode && '1970/01/01' == date ) {
					fieldValue = false;
				} else {
					fieldValue = date + ' ' + hour + ':' + minute + ' UT';

					let dateObject = new Date( fieldValue );
					fieldValue = Math.floor( dateObject.getTime() / 1000 );					
				}
			} else {
				var fieldValue = jQuery( el ).val();
			}

			this.updateFieldCompare( fieldModel, null, fieldValue );
		},

		updateCompare: function( value ) {
			var this_val = this.get( 'value' );

			// if this is a calcModel then let's convert to number for comparison
			if ( 'calc' === this.get( 'type' ) ) {
				this_val = Number( this_val );
				value = Number( value );
			}
			// Check to see if the value of the field model value COMPARATOR the value of our when condition is true.
			var status = this.compareValues[ this.get( 'comparator' ) ]( value, this_val );
			this.set( 'status', status );
		},

		updateFieldCompare: function( fieldModel, val, fieldValue ) {
			if ( _.isEmpty( fieldValue ) ) {
				fieldValue = fieldModel.get( 'value' );
			}

			// Change the value of checkboxes to match the new convention.
			if( 'checkbox' == fieldModel.get( 'type' ) ) {
				if( 0 == fieldValue ) {
					fieldValue = 'unchecked';
				} else {
					fieldValue = 'checked';
				}
			} else if ( 'date' == fieldModel.get( 'type' ) ) {
				if ( _.isEmpty( fieldValue ) ) {
					fieldValue = '1970/01/01';
				}

				let date_mode = fieldModel.get( 'date_mode' );
				if ( 'undefined' == typeof date_mode ) { // If 'date_mode' is undefined, then we assume it's date_only.
					date_mode = 'date_only';
				}
				let date = 0;
				// If we're in time_only mode, then we need to use 1970-01-01 as our date.
				if ( 'time_only' == fieldModel.get( 'date_mode' ) ) {
					date = '1970/01/01';
				} else {
					date = fieldValue;
				}

				// Convert field value into a timestamp
				let hour = fieldModel.get( 'selected_hour' );
				if ( 'undefined' == typeof hour ) {
					hour = '00';
				}

				let ampm = fieldModel.get( 'selected_ampm' );
				if ( 'undefined' != typeof ampm ) {
					// Convert our hour into 24 hr format.
					if ( 'pm' == ampm && '12' != hour ) {
						hour = parseInt( hour ) + 12;
					} else if ( 'am' == ampm && '12' == hour ) {
						hour = '00';
					}
				}

				let minute = fieldModel.get( 'selected_minute' );
				if ( 'undefined' == typeof minute ) {
					minute = '00';
				}

				// If we have a date_and_time field, but we haven't selected a date yet, we don't need to compare.
				if ( 'date_and_time' == date_mode && '1970/01/01' == date ) {
					fieldValue = false;
				} else {
					fieldValue = date + ' ' + hour + ':' + minute + ' UT';

					let dateObject = new Date( fieldValue );
					fieldValue = Math.floor( dateObject.getTime() / 1000 );					
				}
			}

			this.updateCompare( fieldValue );

			/*
			 * TODO: This should be moved to the show_field/hide_field file because it is specific to showing and hiding.
			 */
			if ( ! fieldModel.get( 'visible' ) ) {
				this.set( 'status', false );
			}			
		},

		compareValues: {
			'equal': 
			'notequal': 
			'contains': function( a, b ) {
				if ( jQuery.isArray( a ) ) {
					/*
					 * If a is an array, then we're searching for an index.
					 */
					return a.indexOf( b ) >= 0;
				} else {
					/*
					 * If a is a string, then we're searching for a string position.
					 *
					 * If our b value has quotes in it, we want to find that exact word or phrase.
					 */
					if ( b.indexOf( '"' ) >= 0 ) {
						b = b.replace( /['"]+/g, '' );
						return new RegExp("\\b" + b + "\\b").test( a );
					}
					return a.toLowerCase().indexOf( b.toLowerCase() ) >= 0; 				
				}
			},
			'notcontains': 
			'greater': function( a, b ) {
				/*
				 * In 2.9.x, you could use the greater and less like string count.
				 * i.e. if textbox > (empty string) do something.
				 * This recreates that ability.
				 */
				if ( jQuery.isNumeric( b ) ) {
					return parseFloat( a ) > parseFloat( b );
				} else if ( 'string' == typeof a ) {
					return 0 < a.length;
				}
				
			},
			'less': function( a, b ) {
				/*
				 * In 2.9.x, you could use the greater and less like string count.
				 * i.e. if textbox > (empty string) do something.
				 * This recreates that ability.
				 */
				if ( jQuery.isNumeric( b ) ) {
					return parseFloat( a ) < parseFloat( b );
				} else if ( 'string' == typeof a ) {
					return 0 >= a.length;
				}
		
			},
			'greaterequal': function( a, b ) {
				return parseFloat( a ) > parseFloat( b ) || parseFloat( a ) == parseFloat( b );
			},
			'lessequal': function( a, b ) {
				return parseFloat( a ) < parseFloat( b ) || parseFloat( a ) == parseFloat( b );
			}
		} 
	} );
	
	return model;
} );
define( 'models/whenCollection',['models/whenModel'], function( WhenModel ) {
	var collection = Backbone.Collection.extend( {
		model: WhenModel,

		initialize: 	} );
	return collection;
} );
define( 'models/conditionModel',[ 'models/whenCollection' ], function( WhenCollection ) {
	var model = Backbone.Model.extend( {
		initialize: function( options ) {
			/*
			 * Our "when" statement will be like:
			 * When field1 == value
			 * AND field2 == value
			 *
			 * We need to create a collection out of this when statement, with each row as a model.
			 */
			this.set( 'when', new WhenCollection( this.get( 'when' ), { condition: this } ) );
			/*
			 * When we update any of our "when" models' status, check to see if we should send a message.
			 */
			this.get( 'when' ).on( 'change:status', this.checkWhen, this );
			/*
			 * Check our initial status;
			 */
			this.checkWhen();
		},

		checkWhen: function() {
			/*
			 * If we have any OR connectors, then any status being true should trigger pass.
			 * Otherwise, we need every status to be true.
			 */
			var statusResults = this.get( 'when' ).pluck( 'status' );

			var connectors = this.get( 'when' ).pluck( 'connector' );
			var allAND = _.every( _.values( connectors ),  this );
			if ( allAND ) {
				var status = _.every( _.values( statusResults ), function(v) { return v; }, this );
			} else {
				var status = _.some( _.values( statusResults ),  this );
			}

			if ( status ) {
			   	/*
			 	 * Send out a request for each of our "then" statements.
			 	 */
				_.each( this.get( 'then' ), function( then, index ) {
					nfRadio.channel( 'condition:trigger' ).request( then.trigger, this, then );
				}, this );			 
			} else {
				/*
				 * Send out a request for each of our "else" statements.
				 */
				_.each( this.get( 'else' ), function( elseData, index ) {
					nfRadio.channel( 'condition:trigger' ).request( elseData.trigger, this, elseData );
				}, this );
			}
		}
	} );
	
	return model;
} );
define( 'models/conditionCollection',['models/conditionModel'], function( ConditionModel ) {
	var collection = Backbone.Collection.extend( {
		model: ConditionModel,

		initialize: 	} );
	return collection;
} );
/**
 * Initialise condition collection
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/initCollection',[ 'models/conditionCollection' ], function( ConditionCollection ) {
	var controller = Marionette.Object.extend( {
		initialize: function( formModel ) {
			this.collection = new ConditionCollection( formModel.get( 'conditions' ), { formModel: formModel } );
            this.listenTo(nfRadio.channel('fields'), 'reset:collection', this.resetCollection);
		},
        resetCollection: function( fieldsCollection ) {
            var formModel = fieldsCollection.options.formModel;
            this.collection = new ConditionCollection( formModel.get( 'conditions' ), { formModel: formModel } );
        }
	});

	return controller;
} );
/**
 * Handle showing/hiding fields
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/showHide',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'condition:trigger' ).reply( 'hide_field', this.hideField, this );
			nfRadio.channel( 'condition:trigger' ).reply( 'show_field', this.showField, this );
		},

		hideField: function( conditionModel, then ) {
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );

			if( 'undefined' == typeof targetFieldModel ) return;
			targetFieldModel.set( 'visible', false );
            if ( ! targetFieldModel.get( 'clean' ) ) {
				targetFieldModel.trigger( 'change:value', targetFieldModel );
			}
			
			nfRadio.channel( 'fields' ).request( 'remove:error', targetFieldModel.get( 'id' ), 'required-error' );
		},

		showField: function( conditionModel, then ) {
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );
			//TODO: Add an error to let the user know the show/hide field is empty.
			if( 'undefined' == typeof targetFieldModel ) return;
			targetFieldModel.set( 'visible', true );
            if ( ! targetFieldModel.get( 'clean' ) ) {
                targetFieldModel.trigger( 'change:value', targetFieldModel );
			}
			if ( 'recaptcha' === targetFieldModel.get( 'type' ) ) {
				this.renderRecaptcha();
			}
			var viewEl = { el: nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:el' ) };
            nfRadio.channel( 'form' ).request( 'init:help', viewEl );
		},

		renderRecaptcha: function() {
			jQuery( '.g-recaptcha' ).each( function() {
                var callback = jQuery( this ).data( 'callback' );
                var fieldID = jQuery( this ).data( 'fieldid' );
                if ( typeof window[ callback ] !== 'function' ){
                    window[ callback ] = function( response ) {
                        nfRadio.channel( 'recaptcha' ).request( 'update:response', response, fieldID );
                    };
                }
				var opts = {
					theme: jQuery( this ).data( 'theme' ),
					sitekey: jQuery( this ).data( 'sitekey' ),
					callback: callback
				};
				
				grecaptcha.render( jQuery( this )[0], opts );
			} );
		}
	});

	return controller;
} );
/**
 * Setting/unsetting required.
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2019 WP Ninjas
 * @since 3.0
 */
define( 'controllers/changeRequired',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'condition:trigger' ).reply( 'set_required', this.setRequired, this );
			nfRadio.channel( 'condition:trigger' ).reply( 'unset_required', this.unsetRequired, this );
		},

		setRequired: function( conditionModel, then ) {
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );

			if( 'undefined' == typeof targetFieldModel ) return;
            targetFieldModel.set( 'required', 1 );
			targetFieldModel.trigger( 'reRender', targetFieldModel );
		},

		unsetRequired: function( conditionModel, then ) {
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );

			if( 'undefined' == typeof targetFieldModel ) return;
            targetFieldModel.set( 'required', 0 );
            targetFieldModel.trigger( 'reRender', targetFieldModel );
            // Ensure we resolve any errors when the field is no longer required.
			nfRadio.channel( 'fields' ).request( 'remove:error', targetFieldModel.get( 'id' ), 'required-error' );
        }
        
	});

	return controller;
} );
/**
 * Handle adding or removing an option from our list
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/showHideOption',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'condition:trigger' ).reply( 'show_option', this.showOption, this );

			nfRadio.channel( 'condition:trigger' ).reply( 'hide_option', this.hideOption, this );
		},

		showOption: function( conditionModel, then ) {
			var option = this.getOption( conditionModel, then );
			option.visible = true;
			this.updateFieldModel( conditionModel, then );
		},

		hideOption: function( conditionModel, then ) {
			var option = this.getOption( conditionModel, then );
			option.visible = false;
			this.updateFieldModel( conditionModel, then );
		},

		getFieldModel: function( conditionModel, then ) {
			return nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );
		},

		getOption: function( conditionModel, then ) {
			var targetFieldModel = this.getFieldModel( conditionModel, then );
			var options = targetFieldModel.get( 'options' );
			return _.find( options, );
		},

		updateFieldModel: function( conditionModel, then ) {
			var targetFieldModel = this.getFieldModel( conditionModel, then );
			var options = targetFieldModel.get( 'options' );
			targetFieldModel.set( 'options', options );
			targetFieldModel.trigger( 'reRender' );
		}
	});

	return controller;
} );
/**
 * Handle changing a field's value
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/changeValue',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'condition:trigger' ).reply( 'change_value', this.changeValue, this );
		},

		changeValue: function( conditionModel, then ) {
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );
			/*
			 * If we have a checkbox then we need to change the value that is set
			 * of the then variable to a 1 or 0 to re-render on the front end when
			 * the condition is met.
			 */
			if( 'checkbox' == targetFieldModel.get( 'type' ) ) {
				// We also need to do the opposite of the value that is in the changed model.
				if( 'unchecked' == targetFieldModel.changed.value ) {
					then.value = 1;
                } else if( 'checked' == targetFieldModel ) {
					then.value = 0;
				}
			}
            /*
             * Change the value of our field model, and then trigger a re-render of its view.
             */
			targetFieldModel.set( 'value', then.value );
			targetFieldModel.trigger( 'reRender', targetFieldModel );
		},

	});
	return controller;
} );
/**
 * Handle selecting/deselecting list options
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/selectDeselect',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'condition:trigger' ).reply( 'select_option', this.selectOption, this );

			nfRadio.channel( 'condition:trigger' ).reply( 'deselect_option', this.deselectOption, this );
		},

		selectOption: function( conditionModel, then ) {
			/*
			 * Get our field model and set this option's "selected" property to 1
			 */
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );


			if( _.contains( [ 'listselect', 'listcountry', 'liststate' ], targetFieldModel.get( 'type' ) ) ) { // TODO: Make this more dynamic.
				targetFieldModel.set('clean', false); // Allows for changes to default values.
			}

			var options = targetFieldModel.get( 'options' );

			var option = _.find( options, { value: then.value } );
			option.selected = 1;

			targetFieldModel.set( 'options', options );

			if( _.contains( [ 'listselect', 'listcountry', 'liststate' ], targetFieldModel.get( 'type' ) ) ) { // TODO: Make this more dynamic.
				targetFieldModel.set( 'value', option.value ); // Propagate the selected option to the model's value.
			} else {
				var value = targetFieldModel.get( 'value' );
				if ( _.isArray( value ) ) {
                    if ( 0 > value.indexOf( option.value ) ) {
                        value.push( option.value );
                        // Set the value to nothing so it knows that something has changed.
                        targetFieldModel.set( 'value', '' );
                    }
				} else {
					value = option.value;
				}
				
				targetFieldModel.set( 'value', value ); // Propagate the selected option to the model's value.
			}

			/*
			 * Re render our field
			 */
			targetFieldModel.trigger( 'reRender', targetFieldModel );
		},

		deselectOption: function( conditionModel, then ) {
			/*
			 * When we are trying to deselect our option, we need to change it's "selected" property to 0 AND change its value.
			 */
			var targetFieldModel = nfRadio.channel( 'form-' + conditionModel.collection.formModel.get( 'id' ) ).request( 'get:fieldByKey', then.key );

			/*
			 * Set "selected" to 0.
			 */
			var options = targetFieldModel.get( 'options' );
			var option = _.find( options, { value: then.value } );
			option.selected = 0;
			targetFieldModel.set( 'options', options );

			/*
			 * Update our value
			 */
			var currentValue = targetFieldModel.get( 'value' );
			if ( _.isArray( currentValue ) ) {
				currentValue = _.without( currentValue, then.value );
			} else {
				currentValue = '';
			}
			targetFieldModel.set( 'value', currentValue );

			/*
			 * Re render our field
			 */
			targetFieldModel.trigger( 'reRender', targetFieldModel );
		},

	});

	return controller;
} );
/**
 * Keep an internal record for which actions are active and deactive.
 * 
 * @package Ninja Forms Conditional Logic
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/actions',[], function() {
	var controller = Marionette.Object.extend( {
		actions: {},
		
		initialize: function() {
			/*
			 * Listen for activate/deactivate action messages.
			 */
			nfRadio.channel( 'condition:trigger' ).reply( 'activate_action', this.activateAction, this );
			nfRadio.channel( 'condition:trigger' ).reply( 'deactivate_action', this.deactivateAction, this );
		
			/*
			 * Reply to requests for action status.
			 */
			nfRadio.channel( 'actions' ).reply( 'get:status', this.getStatus, this );
		},

		activateAction: function( conditionModel, thenObject ) {
			this.actions[ thenObject.key ] = true;
			console.log( 'activate action' );
		},

		deactivateAction: function( conditionModel, thenObject ) {
			console.log( 'deactivate action' );
			this.actions[ thenObject.key ] = false;
		},

		getStatus: 	});

	return controller;
} );
var nfRadio = Backbone.Radio;

require( [ 'controllers/initCollection', 'controllers/showHide', 'controllers/changeRequired', 'controllers/showHideOption', 'controllers/changeValue', 'controllers/selectDeselect', 'controllers/actions' ], function( InitCollection, ShowHide, ChangeRequired, ShowHideOption, ChangeValue, SelectDeselect, Actions ) {

	var NFConditionalLogic = Marionette.Application.extend( {

		initialize: function( options ) {
			this.listenTo( nfRadio.channel( 'form' ), 'after:loaded', this.loadControllers );
		},

		loadControllers: function( formModel ) {
			new ShowHide();
			new ChangeRequired();
			new ShowHideOption();
			new ChangeValue();
			new SelectDeselect();
			new Actions();
			new InitCollection( formModel );
		},

		onStart: function() {
			
		}
	} );

	var nfConditionalLogic = new NFConditionalLogic();
	nfConditionalLogic.start();
} );
define("main", ;

}());
//# sourceMappingURL=front-end.js.map
