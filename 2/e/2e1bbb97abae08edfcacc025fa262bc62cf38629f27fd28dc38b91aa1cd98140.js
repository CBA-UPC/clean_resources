/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */


(typeof window !== "undefined" ? window : this, );
(( jQuery );
/*!
 * jQuery UI Core 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();
/*!
 * jQuery UI Widget 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (( $.cleanData );

$.widget = 

$.widget.extend = 

$.widget.bridge = 

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: 
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: 
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: 
	_setOptions: 
	_setOption: 

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: 

	_off: 

	_delay: 

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: 

	_trigger: };

$.each( { show: "fadeIn", hide: "fadeOut" }, ;

return $.widget;

}));



/*!
 * jQuery UI Accordion 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.widget( "ui.accordion", {
	version: "1.11.2",
	options: {
		active: 0,
		animate: {},
		collapsible: false,
		event: "click",
		header: "> li > :first-child,> :not(li):even",
		heightStyle: "auto",
		icons: {
			activeHeader: "ui-icon-triangle-1-s",
			header: "ui-icon-triangle-1-e"
		},

		// callbacks
		activate: null,
		beforeActivate: null
	},

	hideProps: {
		borderTopWidth: "hide",
		borderBottomWidth: "hide",
		paddingTop: "hide",
		paddingBottom: "hide",
		height: "hide"
	},

	showProps: {
		borderTopWidth: "show",
		borderBottomWidth: "show",
		paddingTop: "show",
		paddingBottom: "show",
		height: "show"
	},

	_create: 

	_getCreateEventData: 

	_createIcons: 

	_destroyIcons: 

	_destroy: 

	_setOption: 

	_keydown: 

	_panelKeyDown: 

	refresh: 

	_processPanels: 

	_refresh: 

	_activate: 

	_findActive: 

	_setupEvents: 

	_eventHandler: 

	_toggle: 

	_animate: 

	_toggleComplete: });

}));
/*!
 * jQuery UI Position 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
(();

return $.ui.position;

}));




/*!
 * jQuery UI Menu 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget",
			"./position"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();





/*!
 * jQuery UI Autocomplete 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget",
			"./position",
			"./menu"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();



/*!
 * jQuery UI Button 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();


/*!
 * jQuery UI Datepicker 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.ui, { datepicker: { version: "1.11.2" } });

var datepicker_instActive;

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */


$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: 

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: 

	/* Create a new instance object. */
	_newInst: 

	/* Attach the date picker to an input field. */
	_connectDatepicker: 

	/* Make attachments based on settings. */
	_attachments: 

	/* Apply the maximum length for the date format. */
	_autoSize: 

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: 

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: 

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: 

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: 

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: 

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: 

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: 

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: 

	// change method deprecated
	_changeDatepicker: 

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: 

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: 

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: 

	/* Handle keystrokes. */
	_doKeyDown: 

	/* Filter entered characters - based on date format. */
	_doKeyPress: 

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: 

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: 

	/* Generate the date picker content. */
	_updateDatepicker: 

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: 

	/* Check positioning to remain on screen. */
	_checkOffset: 

	/* Find an object's position on the screen. */
	_findPos: 

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: 

	/* Tidy up after a dialog display. */
	_tidyDialog: 

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: 

	/* Adjust one of the date sub-fields. */
	_adjustDate: 

	/* Action for current link. */
	_gotoToday: 

	/* Action for selecting a new month/year. */
	_selectMonthYear: 

	/* Action for selecting a day. */
	_selectDay: 

	/* Erase the input field and hide the date picker. */
	_clearDate: 

	/* Update the input field with the selected date. */
	_selectDate: 

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: 

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: 

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: 

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: 

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: 

	/* Extract all possible characters from the date format. */
	_possibleChars: 

	/* Get a setting value, defaulting if necessary. */
	_get: 

	/* Parse existing date and initialise date picker. */
	_setDateFromField: 

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: 

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: 

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: 

	/* Set the date(s) directly. */
	_setDate: 

	/* Retrieve the date(s) directly. */
	_getDate: 

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: 

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: 

	/* Generate the month and year header. */
	_generateMonthYearHeader: 

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: 

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: 

	/* Notify change of month/year. */
	_notifyChange: 

	/* Determine the number of months to show. */
	_getNumberOfMonths: 

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: 

	/* Find the number of days in a given month. */
	_getDaysInMonth: 

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: 

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: 

	/* Is the given date in the accepted range? */
	_isInRange: 

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: 

	/* Format the given date for display. */
	_formatDate: });

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */


/* jQuery extend now ignores nulls! */

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = 

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.11.2";

return $.datepicker;

}));



/*!
 * jQuery UI Mouse 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();




/*!
 * jQuery UI Draggable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./mouse",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.widget("ui.draggable", $.ui.mouse, {
	version: "1.11.2",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: 

	_setOption: 

	_destroy: 

	_mouseCapture: 

	_blockFrames: 

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: 

	_mouseStart: 

	_refreshOffsets: 

	_mouseDrag: 

	_mouseStop: 

	_mouseUp: 

	cancel: 

	_getHandle: 

	_setHandleClassName: 

	_removeHandleClassName: function() {
		this.handleElement.removeClass( "ui-draggable-handle" );
	},

	_createHelper: 

	_setPositionRelative: 

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = { left: +obj[0], top: +obj[1] || 0 };
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: 

	_getParentOffset: 

	_getRelativeOffset: 

	_cacheMargins: 

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: 

	_convertPositionTo: 

	_generatePosition: 

	_clear: 

	_normalizeRightBottom: 

	// From now on bulk stuff - mainly helpers

	_trigger: 

	plugins: {},

	_uiHash: 
});

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: 
	stop: 
	drag: });

$.ui.plugin.add("draggable", "cursor", {
	start: 
	stop: });

$.ui.plugin.add("draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if (t.css("opacity")) {
			o._opacity = t.css("opacity");
		}
		t.css("opacity", o.opacity);
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if (o._opacity) {
			$(ui.helper).css("opacity", o._opacity);
		}
	}
});

$.ui.plugin.add("draggable", "scroll", {
	start: 
	drag: });

$.ui.plugin.add("draggable", "snap", {
	start: 
	drag: });

$.ui.plugin.add("draggable", "stack", {
	start: });

$.ui.plugin.add("draggable", "zIndex", {
	start: 
	stop: });

return $.ui.draggable;

}));




/*!
 * jQuery UI Resizable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./mouse",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.widget("ui.resizable", $.ui.mouse, {
	version: "1.11.2",
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,
		// See #7960
		zIndex: 90,

		// callbacks
		resize: null,
		start: null,
		stop: null
	},

	_num: 

	_isNumber: 

	_hasScroll: 

	_create: 

	_destroy: 

	_mouseCapture: 

	_mouseStart: 

	_mouseDrag: 

	_mouseStop: 

	_updatePrevProperties: 

	_applyChanges: 

	_updateVirtualBoundaries: 

	_updateCache: 

	_updateRatio: 

	_respectSize: 

	_getPaddingPlusBorderDimensions: 

	_proportionallyResize: 

	_renderProxy: 

	_change: {
		e: 
		w: 
		n: 
		s: 
		se: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments),
				this._change.e.apply(this, [ event, dx, dy ]));
		},
		sw: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments),
				this._change.w.apply(this, [ event, dx, dy ]));
		},
		ne: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments),
				this._change.e.apply(this, [ event, dx, dy ]));
		},
		nw: 	},

	_propagate: 

	plugins: {},

	ui: 
});

/*
 * Resizable Extensions
 */

$.ui.plugin.add("resizable", "animate", {

	stop: 
});

$.ui.plugin.add( "resizable", "containment", {

	start: 

	resize: 

	stop: });

$.ui.plugin.add("resizable", "alsoResize", {

	start: 

	resize: 

	stop: function() {
		$(this).removeData("resizable-alsoresize");
	}
});

$.ui.plugin.add("resizable", "ghost", {

	start: 

	resize: 

	stop: 
});

$.ui.plugin.add("resizable", "grid", {

	resize: 
});

return $.ui.resizable;

}));







/*!
 * jQuery UI Dialog 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget",
			"./button",
			"./draggable",
			"./mouse",
			"./position",
			"./resizable"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.widget( "ui.dialog", {
	version: "1.11.2",
	options: {
		appendTo: "body",
		autoOpen: true,
		buttons: [],
		closeOnEscape: true,
		closeText: "Close",
		dialogClass: "",
		draggable: true,
		hide: null,
		height: "auto",
		maxHeight: null,
		maxWidth: null,
		minHeight: 150,
		minWidth: 150,
		modal: false,
		position: {
			my: "center",
			at: "center",
			of: window,
			collision: "fit",
			// Ensure the titlebar is always visible
			using: 		},
		resizable: true,
		show: null,
		title: null,
		width: 300,

		// callbacks
		beforeClose: null,
		close: null,
		drag: null,
		dragStart: null,
		dragStop: null,
		focus: null,
		open: null,
		resize: null,
		resizeStart: null,
		resizeStop: null
	},

	sizeRelatedOptions: {
		buttons: true,
		height: true,
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true,
		width: true
	},

	resizableRelatedOptions: {
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true
	},

	_create: 

	_init: 

	_appendTo: 

	_destroy: 

	widget: function() {
		return this.uiDialog;
	},

	disable: $.noop,
	enable: $.noop,

	close: 

	isOpen: function() {
		return this._isOpen;
	},

	moveToTop: function() {
		this._moveToTop();
	},

	_moveToTop: 

	open: 

	_focusTabbable: 

	_keepFocus: 

	_createWrapper: 

	_createTitlebar: 

	_title: 

	_createButtonPane: 

	_createButtons: 

	_makeDraggable: 

	_makeResizable: 

	_trackFocus: 

	_makeFocusTarget: 

	_untrackInstance: 

	_trackingInstances: 

	_minHeight: 

	_position: 

	_setOptions: 

	_setOption: 

	_size: 

	_blockFrames: 

	_unblockFrames: 

	_allowInteraction: 

	_createOverlay: 

	_destroyOverlay: });

}));





/*!
 * jQuery UI Droppable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget",
			"./mouse",
			"./draggable"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.widget( "ui.droppable", {
	version: "1.11.2",
	widgetEventPrefix: "drop",
	options: {
		accept: "*",
		activeClass: false,
		addClasses: true,
		greedy: false,
		hoverClass: false,
		scope: "default",
		tolerance: "intersect",

		// callbacks
		activate: null,
		deactivate: null,
		drop: null,
		out: null,
		over: null
	},
	_create: 

	_addToManager: 

	_splice: 

	_destroy: 

	_setOption: 

	_activate: function( event ) {
		var draggable = $.ui.ddmanager.current;
		if ( this.options.activeClass ) {
			this.element.addClass( this.options.activeClass );
		}
		if ( draggable ){
			this._trigger( "activate", event, this.ui( draggable ) );
		}
	},

	_deactivate: 

	_over: function( event ) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return;
		}

		if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
			if ( this.options.hoverClass ) {
				this.element.addClass( this.options.hoverClass );
			}
			this._trigger( "over", event, this.ui( draggable ) );
		}

	},

	_out: 

	_drop: 

	ui: 
});

$.ui.intersect = (();

/*
	This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
	current: null,
	droppables: { "default": [] },
	prepareOffsets: 
	drop: 
	dragStart: 
	drag: 
	dragStop: };

return $.ui.droppable;

}));
/*!
 * jQuery UI Effects 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */

(function( $ ) {

var dataSpace = "ui-effects-",

	// Create a local jQuery because jQuery Color relies on it and the
	// global may not exist with AMD and a custom build (#10199)
	jQuery = $;

$.effects = {
	effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(( jQuery );

/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
(();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

(();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

(();

return $.effects;

}));


/*!
 * jQuery UI Effects Blind 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.blind = 

}));


/*!
 * jQuery UI Effects Bounce 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.bounce = 

}));


/*!
 * jQuery UI Effects Clip 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.clip = 

}));


/*!
 * jQuery UI Effects Drop 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.drop = 

}));


/*!
 * jQuery UI Effects Explode 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.explode = 

}));


/*!
 * jQuery UI Effects Fade 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();


/*!
 * jQuery UI Effects Fold 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.fold = 

}));


/*!
 * jQuery UI Effects Highlight 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();


/*!
 * jQuery UI Effects Size 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/size-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.size = 

}));



/*!
 * jQuery UI Effects Scale 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect",
			"./effect-size"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.scale = 

}));



/*!
 * jQuery UI Effects Puff 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/puff-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect",
			"./effect-scale"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.puff = 

}));


/*!
 * jQuery UI Effects Pulsate 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.pulsate = 

}));


/*!
 * jQuery UI Effects Shake 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.shake = 

}));


/*!
 * jQuery UI Effects Slide 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}();


/*!
 * jQuery UI Effects Transfer 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 */

(function( $ ) {

return $.effects.effect.transfer = 

}));



/*!
 * jQuery UI Progressbar 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.widget( "ui.progressbar", {
	version: "1.11.2",
	options: {
		max: 100,
		value: 0,

		change: null,
		complete: null
	},

	min: 0,

	_create: 

	_destroy: 

	value: 

	_constrainedValue: 

	_setOptions: 

	_setOption: 

	_percentage: 

	_refreshValue: });

}));




/*!
 * jQuery UI Selectable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectable/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./mouse",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.widget("ui.selectable", $.ui.mouse, {
	version: "1.11.2",
	options: {
		appendTo: "body",
		autoRefresh: true,
		distance: 0,
		filter: "*",
		tolerance: "touch",

		// callbacks
		selected: null,
		selecting: null,
		start: null,
		stop: null,
		unselected: null,
		unselecting: null
	},
	_create: 

	_destroy: 

	_mouseStart: 

	_mouseDrag: 

	_mouseStop: 
});

}));





/*!
 * jQuery UI Selectmenu 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectmenu
 */

(function( $ ) {

return $.widget( "ui.selectmenu", {
	version: "1.11.2",
	defaultElement: "<select>",
	options: {
		appendTo: null,
		disabled: null,
		icons: {
			button: "ui-icon-triangle-1-s"
		},
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		width: null,

		// callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		select: null
	},

	_create: 

	_drawButton: 

	_drawMenu: 

	refresh: 

	_refreshMenu: 

	open: 

	_position: 

	close: 

	widget: function() {
		return this.button;
	},

	menuWidget: function() {
		return this.menu;
	},

	_renderMenu: 

	_renderItemData: 

	_renderItem: 

	_setText: 

	_move: 

	_getSelectedItem: 

	_toggle: 

	_setSelection: 

	_documentClick: {
		mousedown: 	},

	_buttonEvents: {

		// Prevent text selection from being reset when interacting with the selectmenu (#10144)
		mousedown: 

		click: 

		keydown: 	},

	_selectFocusedItem: 

	_select: 

	_setAria: 

	_setOption: 

	_appendTo: 

	_toggleAttr: 

	_resizeButton: 

	_resizeMenu: 

	_getCreateOptions: 

	_parseOptions: 

	_destroy: });

}));




/*!
 * jQuery UI Slider 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./mouse",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.widget( "ui.slider", $.ui.mouse, {
	version: "1.11.2",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: 

	_refresh: 

	_createHandles: 

	_createRange: 

	_setupEvents: 

	_destroy: 

	_mouseCapture: 

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: 

	_mouseStop: 

	_detectOrientation: 

	_normValueFromMouse: 

	_start: 

	_slide: 

	_stop: 

	_change: 

	value: 

	values: 

	_setOption: 

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: 

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: 

	// returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: 

	_calculateNewMax: 

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshValue: 

	_handleEvents: {
		keydown: 
		keyup: 	}
});

}));




/*!
 * jQuery UI Sortable 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./mouse",
			"./widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.widget("ui.sortable", $.ui.mouse, {
	version: "1.11.2",
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: "> *",
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000,

		// callbacks
		activate: null,
		beforeStop: null,
		change: null,
		deactivate: null,
		out: null,
		over: null,
		receive: null,
		remove: null,
		sort: null,
		start: null,
		stop: null,
		update: null
	},

	_isOverAxis: 

	_isFloating: 

	_create: 

	_setOption: 

	_setHandleClassName: 

	_destroy: 

	_mouseCapture: 

	_mouseStart: 

	_mouseDrag: 

	_mouseStop: 

	cancel: 

	serialize: 

	toArray: 

	/* Be careful with the following core functions */
	_intersectsWith: 

	_intersectsWithPointer: 

	_intersectsWithSides: 

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta !== 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: 

	refresh: 

	_connectWith: 

	_getItemsAsjQuery: 

	_removeCurrentsFromItems: 

	_refreshItems: 

	refreshPositions: 

	_createPlaceholder: 

	_contactContainers: 

	_createHelper: 

	_adjustOffsetFromHelper: 

	_getParentOffset: 

	_getRelativeOffset: 

	_cacheMargins: 

	_cacheHelperProportions: 

	_setContainment: 

	_convertPositionTo: 

	_generatePosition: 

	_rearrange: 

	_clear: 

	_trigger: 

	_uiHash: 
});

}));




/*!
 * jQuery UI Spinner 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./core",
			"./widget",
			"./button"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {


return $.widget( "ui.spinner", {
	version: "1.11.2",
	defaultElement: "<input>",
	widgetEventPrefix: "spin",
	options: {
		culture: null,
		icons: {
			down: "ui-icon-triangle-1-s",
			up: "ui-icon-triangle-1-n"
		},
		incremental: true,
		max: null,
		min: null,
		numberFormat: null,
		page: 10,
		step: 1,

		change: null,
		spin: null,
		start: null,
		stop: null
	},

	_create: 

	_getCreateOptions: 

	_events: {
		keydown: 
		keyup: "_stop",
		focus: 
		blur: 
		mousewheel: 
		"mousedown .ui-spinner-button": 
		"mouseup .ui-spinner-button": "_stop",
		"mouseenter .ui-spinner-button": 
		// TODO: do we really want to consider this a stop?
		// shouldn't we just stop the repeater and wait until mouseup before
		// we trigger the stop event?
		"mouseleave .ui-spinner-button": "_stop"
	},

	_draw: 

	_keydown: 

	_uiSpinnerHtml: 

	_buttonHtml: 

	_start: 

	_repeat: 

	_spin: 

	_increment: 

	_precision: 

	_precisionOf: 

	_adjustValue: 

	_stop: 

	_setOption: 

	_setOptions: spinner_modifier(function( options ) {
		this._super( options );
	}),

	_parse: 

	_format: 

	_refresh: 

	isValid: 

	// update the value without triggering change
	_value: 

	_destroy: 

	stepUp: spinner_modifier(function( steps ) {
		this._stepUp( steps );
	}),
	_stepUp: 

	stepDown: spinner_modifier(function( steps ) {
		this._stepDown( steps );
	}),
	_stepDown: 

	pageUp: spinner_modifier(function( pages ) {
		this._stepUp( (pages || 1) * this.options.page );
	}),

	pageDown: spinner_modifier(,

	value: 

	widget: function() {
		return this.uiSpinner;
	}
});

}));



/*!
 * jQuery UI Tabs 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */

(function( $ ) {

return $.widget( "ui.tabs", {
	version: "1.11.2",
	delay: 300,
	options: {
		active: null,
		collapsible: false,
		event: "click",
		heightStyle: "content",
		hide: null,
		show: null,

		// callbacks
		activate: null,
		beforeActivate: null,
		beforeLoad: null,
		load: null
	},

	_isLocal: ((),

	_create: 

	_initialActive: 

	_getCreateEventData: 

	_tabKeydown: 

	_panelKeydown: 

	// Alt+page up/down moves focus to the previous/next tab (and activates)
	_handlePageNav: 

	_findNextTab: 

	_focusNextTab: 

	_setOption: 

	_sanitizeSelector: 

	refresh: 

	_refresh: 

	_processTabs: 

	// allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: 

	_createPanel: 

	_setupDisabled: 

	_setupEvents: 

	_setupHeightStyle: 

	_eventHandler: 

	// handles show/hide for selecting tabs
	_toggle: 

	_activate: 

	_findActive: 

	_getIndex: 

	_destroy: 

	enable: 

	disable: 

	load: 

	_ajaxSettings: 

	_getPanelForTab: });

}));




/*!
 * jQuery UI Tooltip 1.11.2
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */

(function( $ ) {

return $.widget( "ui.tooltip", {
	version: "1.11.2",
	options: {
		content: 
		hide: true,
		// Disabled elements have inconsistent behavior across browsers (#8661)
		items: "[title]:not([disabled])",
		position: {
			my: "left top+15",
			at: "left bottom",
			collision: "flipfit flip"
		},
		show: true,
		tooltipClass: null,
		track: false,

		// callbacks
		close: null,
		open: null
	},

	_addDescribedBy: 

	_removeDescribedBy: 

	_create: 

	_setOption: 

	_disable: 

	_enable: 

	open: 

	_updateContent: 

	_open: 

	close: 

	_tooltip: 

	_find: 

	_removeTooltip: 

	_destroy: });

}));







































var CKEDITOR_BASEPATH = "/assets/ckeditor/";
/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/

(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return;window.CKEDITOR||(window.CKEDITOR=));
CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=CKEDITOR.event.prototype=));
CKEDITOR.editor||(CKEDITOR.editor=CKEDITOR.editor.prototype.fire=function(a,d){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fire.call(this,a,d,this)},CKEDITOR.editor.prototype.fireOnce=CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));
CKEDITOR.env||(CKEDITOR.env=));
"unloaded"==CKEDITOR.status&&);"use strict";CKEDITOR.VERBOSITY_WARN=1;CKEDITOR.VERBOSITY_ERROR=2;CKEDITOR.verbosity=CKEDITOR.VERBOSITY_WARN|CKEDITOR.VERBOSITY_ERROR;CKEDITOR.warn=function(a,d){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_WARN&&CKEDITOR.fire("log",{type:"warn",errorCode:a,additionalData:d})};
CKEDITOR.error=
CKEDITOR.on("log",null,null,999);CKEDITOR.dom={};
(function(){var a=[],d=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?"-ms-":"",b=/&/g,c=/>/g,f=/</g,h=/"/g,k=/&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,g={lt:"\x3c",gt:"\x3e",amp:"\x26",quot:'"',nbsp:" ",shy:"­"},};CKEDITOR.on("reset});CKEDITOR.tools={arrayCompar},getInde},clon},capitaliz},exten},prototypedCop},cop},isArra},
isEmpt},cssVendorPrefi},cssStyleToDomStyl}(),buildStyleHtm},htmlEncod},htmlDecod},htmlEncodeAtt},htmlDecodeAtt},
transformPlainTextToHtm},getNextNumbe}(),getNextI},getUniqueI},overrid},setTimeou},trim:function(){var a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(e){return e.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g;return function(e){return e.replace(a,"")}}(),rtri}(),indexO},searc},bin},createClas},addFunctio},removeFunctio},callFunctio},cssLengt}(),convertToP}(),repea},tryThes},
genKe},defe},normalizeCssTex},convertRgbToHe},normalizeHe},parseCssTex},writeCssTex},objectCompar},objectKey},convertArrayToObjec},fixDomai},eventsBuffe},enableHtml5Element},checkIfAnyArrayItemMatche},checkIfAnyObjectPropertyMatche},keystrokeToStrin},keystrokeToArraria:m}},transparentImageData:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d",
gen null},se\x3d/"},getCsturn a},esth):""},getMouston:!1},convertHexStringturn b},convertBytesTturn b},style:{parse:{_colors:{aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",
cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",
dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",
lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",
mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",
powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",
whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},_borderStyle:"none hidden dotted dashed solid double groove ridge inset outset".split(" "),_widthRegExp:/^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/,_rgbaRegExp:/rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi,_hslaRegExp:/hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi,bacturn b}turn c},border:function(a){var b={};a=a.split(/\s+/);CKEDITOR.tools.array.forEach(a,function(a){if(!b.color){var c=CKEDITOR.tools.style.parse._findColor(a);
if(c.length){b.color=c[0];return}}b.style||-1===CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle,a)?!b.width&&CKEDITOR.tools.style.parse._widthRegExp.test(a)&&(b.width=a):b.style=a});return b},_fiors}))}}},
array:turn g},],d,turn g}turn clength}},object:{n nullturn g}}};CKEDITOR.tools.array.indexOf=CKEDITOR.tools.indexOf;CKEDITOR.tools.array.isArray=CKEDITOR.tools.isArray;CKEDITOR.MOUSE_BUTTON_LEFT=0;CKEDITOR.MOUSE_BUTTON_MIDDLE=1;CKEDITOR.MOUSE_BUTTON_RIGHT=2})();
CKEDIturn d}();
CKEDITOR.dom.event=function(a){this.$=a};
CKEDITOR.dom.event.prototype=.which},getKeturn a},preventtion()},stopPropble=!0},ge):null},getPhase:function(){return this.$.eventPhase||2},getPaglTop)}}};CKEDITOR.CTRL=1114112;CKEDITOR.SHIFT=2228224;CKEDITOR.ALT=4456448;CKEDITOR.EVENT_PHASE_CAPTURING=1;CKEDITOR.EVENT_PHASE_AT_TARGET=2;
CKEDITOR.EVENT_PHASE_BUBBLING=3;CKEDITOR.dom.dos.$=a)};
CKEDITOR.dom.domObject.prhis)tOn(a)})(CKEDITOR.dom.domObject.prototype);
CKEDITOR.d):this};CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject;CKEDITOR.NODE_ELEMENT=1;CKEDITOR.NODE_DOCUMENT=9;CKEDITOR.NODE_TEXT=3;CKEDITOR.NODE_COMMENT=8;CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;
CKEDITOR.POSITION_IDENTICAL=0;CKEDITOR.POSITION_DISCONNECTED=1;CKEDITOR.POSITION_FOLLOWING=2;CKEDITOR.POSITION_PRECEDING=4;CKEDITOR.POSITION_IS_CONTAINED=8;CKEDITOR.POSITION_CONTAINS=16;
CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{aturn aturn f},hasPrevious:function(){return!!this.$.previousSibling},ibling},inseturn a},inserturn a},insertBturn a},getturn d},getDument)},gturn f},getNextSoud,b):a},getPreviousSoud,b):a},getPturn b},turn b},ge):null},getturn b},getCommonAn null},getPLOWING},getAsn null},hasAsturn!e(),d)}n this},move(trim()break}ild(a)},isRturn!0}});
CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.window.prototypeocus()},getViewPt)||0}},getScrollPop||0}},g):null}});CKEDITOR.dom.dhis,a)};CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStynd(d)}},appendSt.sheet},createturn b},cre,this)},focus:function(){this.getWindow().focus()},geent(a)},getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getBy):null},getElemenme(a))},"),!0)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getView)lose(ll(a))},):null},_getHtml5Sturn a}});CKEDITOR.dom.nodeList=function(a){this.$=a};
CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},):null},e(a)})}};CKEDITOR.dom.his,a)};
CKEDITOR.dom.elemnt(a))};CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node;CKEDITOR.dom.element.createFmove()};
CKEDITOR.dom.element.sea(b,c)};CKEDITOR.dom.element.clearAll[d],1)};
CKEDITOR.dom.element.clear aurn d}})();CKEDITOR.dom.documentFnt():a};
CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfbling)},/g,"")}},!0,{append:1,appendBogus:1,clone:1,getFirst:1,getHtml:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,
insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildre?a:!1}})();
CKEDITOR.dody():a};
(fun)})}}var h={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},k=CKEDITOR.dom.walker.bogus(),g=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,m=CKEDITOR.dom.walker.editable(),r=CKEDITOR.dom.walker.ignored(!0);CKEDITOR.dom.range.prototypeturn a},csed=!0},cloneCturn b},deleteCull,a)},extractCturn c},createBsed:h}},createBo2:!0}}}(),moveToBse(!0)},getBoundaode:b}},getCommonAnt():c},ore(a))},optimizeBR_END)(c,d))},er(P)}}&&!l)}},insore(a)},moveToPse(!0)},moveffset)},selectNodeCunt())},s(this)}(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEx()+1)},setEndex())},setStartAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setStart(b,0);break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setStart(b,
b.getLength()):this.setStart(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(b);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(b)}a(this)},s(this)},
fturn d},splath:p}},splitturn d},removeEmptyBlocrk(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,
this.root)},checkBoundaryOfrd"]()},checkStartward()},checkEndward()},getPreviious()},getNnext()},checkRc,b))}}(),moveToElementEditablePurn!!c},moveToClosestEditablePurn!!d},moveToElementEdion(a)},
moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,!0)},getEnclod:null},getTouchedStet)||a},getTouched-1)||a},getNextEditableNode:f(),getPreviousEditableNode:f(1),_getTable):null},scrollImove()},_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=aturn f}};CKEDITOR.dom.range.merga},[])}})();CKEDITOR.POSITION_AFTER_START=1;CKEDITOR.POSITION_BEFORE_END=2;CKEDITOR.POSITION_BEFORE_START=3;CKEDITOR.POSITION_AFTER_END=4;CKEDITOR.ENLARGE_ELEMENT=1;CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;CKEDITOR.ENLARGE_INLINE=4;CKEDITOR.START=1;CKEDITOR.END=2;CKEDITOR.SHRINK_ELEMENT=1;CKEDITOR.SHRINK_TEXT=2;"use stthis)}})();
CKEDITOR.(this)};
CKEDITOR.command.prototype=E_OFF)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},sturn!0},toggE_OFF)}};CKEDITOR.event.implementOn(CKEDITOR.command.prototype);CKEDITOR.ENTER_P=1;CKEDITOR.ENTER_BR=2;CKEDITOR.ENTER_DIV=3;
CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"\x3c!DOCTYPE html\x3e",bodyId:"",bodyClass:"",fullPage:!1,height:200,contentsCss:CKEDITOR.getUrl("contents.css"),extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]};
(fun,C=CKEDITOR.tools.copy,z=CKEDITOR.tools.trim,H=["","p","br","div"];CKEDITOR.FILTER_SKIP_TREE=2;CKEDITORlt",1)};CKEDITOR.filter.instances={};CKEDITOR.filter.prototypeturn!0},turn h},checkntent)},disable:function(){this.disabled=!0},dturn!0},
addContes(d)}}},addElementCush(a)},addnt):!0},addTransforh(c)}}turn b},getAllowedEnER_BR}}(turn a},ontent}};
var P={styles:1,attributes:1,classes:1},O={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},n=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,N={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},v=/^cke:(object|embed|param)$/,A=/^(object|embed|param)$/,G;G=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,"height")},sizeToAtight")},lengthtes[b]},lengthToAtles[b]},alignment.align},alignmentToAtloat"]},splitBorderShorthand:function(a){function b(d){a.styles["border-top-width"]=c[d[0]];a.styles["border-right-width"]=c[d[1]];a.styles["border-bottom-width"]=c[d[2]];a.styles["border-left-width"]=c[d[3]]}if(a.styles.border){var c=a.styles.border.match(/([\.\d]+\w+)/g)||["0px"];switch(c.length){case 1:a.styles["border-width"]=
c[0];break;case 2:b([0,1,0,1]);break;case 3:b([0,1,2,1]);break;case 4:b([0,1,2,3])}a.styles["border-style"]=a.styles["border-style"]||(a.styles.border.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit)/)||[])[0];a.styles["border-style"]||delete a.styles["border-style"];delete a.styles.border}},listType.type}},splitMarginShargin}},matchesStyle:F,tr=d[l]}}cus)}}})();CKEDITOR.keystroken his)}f||a}}})();
CKEDITOR.scrip)}}()}}();CKEDITOR.resourcest:{}}};
CKEDITOR.resourceManager.prototyget(||null},a+"/")},getF.js"))},addE.js"},this)}};CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugiis,b)}});CKEDITOR.plugins.a[d]=b};CKEDn this};
CKEDITOR.ui.prototyd(c,b)},get:function(a){return this.instances[a]}turn b},add[a]=
dId(a))},+"_"+a}};CKEDITOR.event.implementOn(CKEDITOR.ui);
(funotype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var D=0,w={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{add[a]=
c},_attac,a)}))},,this)},elem):null},crea):null},execlue:!1},getnds[a]},aValue},getSturn a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},ta",a)},setRnly"))},insge:c})},insertText:function(a){this.fire("insertText",a)},insertt",
a)},getSelecml():b},extractSelecml():f},focus:function(){this.fire("beforeFocus")},cheshot()},resshot()},update(this)},setKee a[c]},getCommandKen null},addFeature:function(a){return this.filter.addFeature(a)},setActiv,!0)))},setActiveEnange")},showNotification:function(a){alert(a)}})})();CKEDITOR.ELEMENT_MODE_NONE=0;CKEDITOR.ELEMENT_MODE_REPLACE=1;CKEDITOR.ELEMENT_MODE_APPENDTO=2;CKEDITOR.ELEMENT_MODE_INLINE=3;CKEDITOR.htm>)th))}}})();
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createCut:[]}},proto:{3c",a)},openT\x3e")},atd,'"')},closeTag:function(a){this._.output.push("\x3c/",a,"\x3e")},text:function(a){this._.output.push(a)},\x3e")},write:function(a){this._.output.push(a)ent=!1},turn d}}});"use st||{}}}})();"use strict";CKEDITOR.htmlParser.comment=function(a){this.value=a;this._={isBlockLike:!1}};
CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENTturn!0},writeHtml:function(a,d){d&&this.filter(d);a.comment(this.value)}});"use stue)}})})();"use stue)}})})();"use strict";CKEDITOR.htmlParser.fed|
{}}}})();"use strn c}:\1)/gi})();
"use strict";CKEDITOR.htmlParserty||!b}};
CKEDITOR.htmlParser.n(a}},!h(c):c}})();delete CKEDITOR.loadFullCore;CKEDITOR.instances={};CKEDITOR.document=new CKEDITOR.dom.document(document);
CKEDnull,a)};CKEDITOa.n a[("\n")}})();CKEDITOR.on("instanceDereset")});CKEDITOR.TRISTATE_ON=1;CKEDITOR.TRISTATE_OFF=2;
CKEDITOR.TRISTATE_DISAAll()})})();CKEDITOR.replaceClass="ckelass)})})();CKEDITOR.config.startupMode="wysiwyg";
(fuvar e,y,x,B,D,w,p,J,u,K;CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.esetup()},protocuthis,c)},attacheturn b},clearLch(b){}},restute(c))},attass(a))},che(a,b))},in"text")},transformPlainTel(a,
b)},inml",{})},insertHtmlInge:b})},inserm(this)},insertElementIntoSment(a)},insertElementIeturn!0}Ready")}eturn b},setle",!a).window},cument)},fixInitialSl,-999)},getHtmlFment.$)},extractHtmlFeturn e},setup:function(){var a=this.editor;this.attachListener(a,"beforenull,1)},this);this.attachListener(a,"getSData(1)},this);this.attachListener(a,"afterata(1))},this);this.attachListener(a,"loadSdata,1)},this);this.attachListener(a,
"befofocus()},this);this.attachListener(a,"ins.range)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},this);this.attachListener(a,"insa.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?this.attachClass("cke_editable_inline"):
a.elementMode!=CKEDITOR.ELEMENT_MODE_REPLACE&&a.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO||this.attachClass("cke_editable_themed");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",function(){this.hasFocus=!1},null,null,-1);this.onocus=!0},null,null,-1);if(CKEDITOR.env.webkit)this.on(rollTop},null,
null,-1);if(CKEDITOR.env.edge&&14<CKEDITOR.env.versioll",d))};this.on("scroll",d)}a.focusManager.add(this);this.equals(CKEDITOR.document.getActive())&&(this.hasFocus=!0,a.once("cons(this)},this));this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=
this.getDocument();a.window=this.getWindow();var f=a.document;this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker);var g=a.config.contentsLangDirection;this.getDirection(1)!=g&&this.changeAttr("dir",g);var k=CKEDITOR.getCss();if(k){var g=f.getHead(),p=g.getCustomData("stylesheet");p?k!=p.getText()&&(CKEDITOR.env.ie&&9>CKEDITOR.env.version?p.$.styleSheet.cssText=k:p.setText(k)):(k=f.appendStyleText(k),k=new CKEDITOR.dom.element(k.ownerNode||k.owningElement),g.setCustomData("stylesheet",
k),k.data("cke-temp",1))}g=f.getCustomData("stylesheet_ref")||0;f.setCustomData("stylesheet_ref",g+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(thisfault()});var t={8:1,46:1};this.attachListenerturn!d}});
a.blockless&&CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller&&this.attachListener(thislect())});this.attachListener(this,"dick",b)});CKEDITOR.env.ie&&this.attachListener(this,"click",b);CKEDITOR.env.ie&&!CKEDITOR.env.edge||this.attachListener(this,"mouault())});CKEDITOR.env.edge&&this.attachListener(this,"ment(b)});CKEDITOR.env.gecko&&this.attachListener(this,"ct(!0)}});CKEDITOR.env.webkit&&(this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()}),this.attachListener(this,"fault()}));CKEDITOR.env.webkit&&this.attachListenerturn!1}},this,null,100)}}},_.editor}}});CKEDITOR.editor.prototype.eturn b};CKEDITOR.on("instancy())}})});CKEDITOR.on("instance,e)}}})});CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");e=CKEDITOR.dom.walker.whitespaces(!0);y=CKEDITOR.dom.walker.bookmark(!1,!0);x=CKEDITOR.dom.walker.empty();
B=CKEDITOR.dom.walker.bogus();D=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/bodge(RE_ENlect())}}();u={eoEolBr(c),
1)},crol":1}})}},bogusefore(b)}},treea,b,d,t)},rebuilParent()}},celNK_TTART))}}}()})();
(fnction B(a,b){var c=CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"'+
(CKEDITOR.env.ie&&14>CKEDITOR.env.version?"display:none":"position:fixed;top:0;left:-1000px")+'"\x3e'+(b||"\x26nbsp;")+"\x3c/div\x3e",a.document);a.fire("lockSnapshot");a.editable().append(c);var d=a.getSelection(1),e=a.createRange(),f=d.root.on("select.cancel()},null,null,0);e.setStartAt(c,CKEDITOR.POSITION_AFTER_START);e.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);d.selectRanges([e]);f.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionCreturn a}var p="function"!=typeof window.getSelection,J=1,u=CKEDITOR.tools.repeat("​",7),K=new RegExp(u+"( )?","g"),l,q,F,L=CKEDITOR.dom.walker.in(),46:b(1)}}();CKEDITOR.on("instent:a})}}})});if(CKEDITOR.env.webkit)CKEDITOR.on("inull,null,0)});CKEDITOR.editor.prototype.sel.call(this)};CKEDITOR.editor.prototype.keSelection};CKEDITOR.editor.prototype.lon=a,!0):!1};CKEDITOR.editor.prototype.unltion,!0):!1};CKEDITOR.editor.prototype.forceNextSereviousPath};
CKEDITOR.dom.document.prototype.ction(this)};CKEDITOR.dom.range.prot]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;CKEDITOR.SELECTION_ELEMENT=3;CKEDITOR.dreturn this};var M={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.tools.extend(CKEDITOR.dom.selection,{_removeFillingCharSequenceString:x,
_createFillingCharSequenceNode:e,FILLING_CHAR_SEQUENCE:u});CKEDITOR.dom.selection.prototypSelection(rn a.type=lice())):d}}(),getent(b):null},getSelent(c):null},getected.isLockRangeshis.rev=J++},sRanges([b])},ionchctionchanhidden-seletRanges(),a[0].collapsed},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);this.isFake&&(a.isFake=1);return a},cre=1);return a},s);return this},getntainer):null},ollIntoView()},rthis.reset()}}}})();"use strict";CKEDITOR.STYLE_BLOCK=1;CKEDITOR.STYLE_INLINE=2;CKEDITOR.ST_IS_CONTAINED})();CKEDITOnd(this,d,!0)};
CKEDITOR.styleCommand.e(this.style)};CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet");CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet);CKEDITORSet.load(a,b)};
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{attachSttyle:a,fn:d})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)initions)})}}}});
CKEDITOR.dom.comment=function(a,d){"string"==typeof a&&(a=(d?d.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node;CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENalue+"--\x3e"}});s.elements=g}})();
CKEDITOR.dom.elementPath.protrn!1;retu];return nulltDtd()[a])tDirection(1)}};
CKE(a));this.$=a};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.node$.node()));returubstkmarkg.uiC.add(a[d][0])})();/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.skin.name="moono-lisa";CKEDITOR.skin.ua_editor="ie,iequirks,ie8,gecko";CKEDITOR.skin.ua_dialog="ie,iequirks,ie8";
CKEDITOR.e(/\]/g,"}")}}();CKEDITOR.plugins.add("diaa.type](b,h,e,d,a)}})}});CKEDITOR.DIALOG_RESIZE_NONE=0;CKEDITOR.DIALOG_RESIZE_WIDTH=1;CKEDITOR.DIALOG_RESIZE_HEIGHT=2;CKEDITOR.DIALOG_RESIZE_BOTH=3;CKEDITOR.DIALOG_STATE_IDLE=1;CKEDITORart("dialog");return c}})})();CKEDITOR.plugins.add("dialog"a.dialog)},null,null,999)}});CKEDITOR.plugins.add("abou.pang.c].concat(e)});return h}})})();CKEDITOR.plugiOR.CTRL+85,"underline"]])}});CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};CKEDITOR.config.coreStyles_underline={element:"u"};CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"};CKEDITOR.config.coreStyles_subscript={element:"sub"};
CKEDITOR.config.coreStyles_sutool",toITOR.plugins.notification=q})();(function(){var c='\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href\x3d\"javascript:void('{titleJs}')\"")+' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(c+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(c+=
' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var c=c+(' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"'),c=c+'\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e',
t=CKEDITOR.addTemplate("buttonArrow",'\x3cspan class\x3d"cke_button_arrow"\x3e'+(CKEDITOR.env.hc?"\x26#9660;":"")+"\x3c/span\x3e"),u=CKEDITOR.addTemplate("button",c);CKEDITOR.plugins.add("button",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTONand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};
CKEDITOR.ui.button.prois.refresh&&this.refresh())}var n=CKEDITOR.env,p=this._.id=CKEDITOR.tools.getNextId(),g="",d=this.command,q,k,h;this._.editor=a;var e={id:documenttion(){on(a){this.button.attach(a)}},
e.onkey(e,a.getKeystroke())}),TOR.dom.event(a)));return b}),r=0;e.clickFn=.execute();n.iOS&&a.focus()});if(this.modes){var D&&(m[a.mode]=this._.state)},this);a.on("activeFilterChange",
c,this);a.on("mode",c,this);!this.readOnly&&a.on("readOnly",c,this)}else d&&(d=a.gon(){this.setState(d.state)},this),g+=d.state==CKEDITOR.TRISTATE_ON?"on":d.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off");if(this.directiothis.icon,this.iconOffset))},this);d?(k=a.getCommandKeystroke(d))&&(h=CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard,k)):g+="off";var l=k=this.name||this.command;this.icon&&!/\./.test(this.icon)&&(l=this.icon,this.icon=null);g={id:p,name:k,iconName:l,label:this.label,cls:this.className||"",state:g,ariaDisabled:"disabled"==g?"true":"false",title:this.title+(h?" ("+h.display+")":""),ariaShortcut:h?a.lang.common.keyboardShortcut+" "+h.aria:"",titleJs:n.gecko&&!n.hc?"":(this.title||
"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:v,focusFn:w,clickFn:q,style:CKEDITOR.skin.getIconStyle(l,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?t.output():""};u.output(g,b);if(this.onRender)this.obute("aria-pressed"),!0):!1},getState:function(){reb);return this._.feature=
b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a d?c.splice(d+1,0,b):c.push(a)}})();CKEDITOR.UI_SEPARATOR="separator";CKEDITOR.config.tus()});return a.fire("paste",b)}function x(a){function b(){var b=a.editable();if(CKEDITOR.plugins.clipboarder(b,a);b.data.preventDefault()};b.on("copy",
c);b.on("cut",c);b.on("cut",function(){a.readOnly||a.extractSelectedHtml()},nullste"==p.mainPasteEvent&&m||l(a)});"beforepaste"=eventDefault(),l(a),e("paste"))}),b.on("contextmenu",hctrlKey||a.data.$.shiftKey||h()"beforecut",function(){!m&&f(a)});var d;b.attachListener(CKEDITOR.env.ie?b:a.documentd=setTimeout(function(){t()},0)});a.on("destroy",function(){c[this.type+"Error"]);return b}}}function d(){return{canUndo:!1,async:!0,fakeKeystroke:CKEDITOR.CTRL+
86,exec:function(a,b){function c(b,h){h="undefined"!==typeof h?h:!0;b?(b.method="paste",b.dataTransfer||(b.dataTransfer=p.initPasteDataTransfer()),r(a,b,h)):e&&a.showNotification(n,"info",a.config.clipboard_notificationDuration);a.fire("afterCommandExec",{name:"paste",command:d,returnValue:!!b})}b="undefined"!==typeof b&&null!==b?b:{};var d=this,e="undefined"!==typeof b.notification?b.notification:!0,h=b.type,f=CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard,a.getCommandKeystroke(this)),n=
"string"===typeof e?e:a.lang.clipboard.pasteNotification.replace(/%1/,'\x3ckbd aria-label\x3d"'+f.aria+'"\x3e'+f.display+"\x3c/kbd\x3e"),f="string"===typeof b?b:b.dataValue;h?a._.nextPasteType=h:delete a._.nextPasteType;"string"===typeof f?c({dataValue:f}):a.getClipboardData(c)}}}function g(){u=1D:CKEDITOR.TRISTATE_OFF}var p=CKEDITOy:q(,4);b("Paste","paste",d(),30,8)})();aListener();a.cancel();c(a.data)}c||(c=b,b=null);a.on("paste",d,null,null,0);!1===y()&&(a.rem(h,g)}},null,null,9999)})}var m;CKEDITOR.plugins.add("clipboard",{requires:"notification,toolbar",init:function(a){var b,c=C();a.config.forcePasteAsPlainText?b="plain-text":a.config.pasteFilter?b=a.config.pasteFilter:!CKEDITOR.env.webkit||"pasteFilter"in a.config||(b="semantic-content");a.pasteFilter=c.get(b);x(a);E(a);if(CKEDITOR.env.gecko){var d=["image/png","image/jp);g=c.dataTransfer.id;b.stoxtToHtml(d),b.data.type="tbr>$/,"$1"));a.data.dataValue=b},null,
null,3);a.on("paste",function(b){b=b.data;var d=a._.nextPasteType||b.type,f=b.dataValue,g,m=a.config.clipboard_defaultContentType||"html",n=b.dataTransfer.getTransferType(a);g="html"==d||"html"==b.preSniffing?"html":z(f);delete a._.nextPasteType;"htmlifiedtext"==g&&(f=A(a.config,f));"text"==d&&"html"==g?f=w(a,f,c.get("plain-text")):n==CKEDITOR.DATA_TRANSFER_EXTERNAL&&a.pasteFilter&&!b.dontFilter&&(f=w(a,f,a.pasteFilter));b.startsWithEOL&&(f='\x3cbr data-cke-eol\x3d"1"\x3e'+f);b.endsWithEOL&&(f+='\x3cbr data-cke-eol\x3d"1"\x3e');
"auto"==d&&(d="html"==g||"html"==m?"html":"text");b.type=d;b.dataValue=f;delete b.preSniffing;delete b.startsWithEOL;delete b.endsWiion(){a.fire("afterPaste")},0))},null,null,1E3)}});CKEDITOR.plugins.clipboard={isCustomCopyCutSupported:(!CKEDITOR.env.ie||16<=CKEDITOR.env.version)&&!CKEDITOR.env.iOS,isCustomDataTypesSupported:!CKEDITOR.env.ie||16<=CKEDITOR.env.version,isFileApiSupported:!CKEDITOR.env.ie||
9<CKEDITOR.env.version,mainPasteEvent:CKEDITOR.env.ie&&!CKEDITOR.env.edge?"beforepaste":&16<=CKEDITOR.ion||
b.isInline()?b:a.er,h,c)||g(a.endContainer,h,d))endContainer.:b},1);d.fire("unlockSnn null}}else return n.dragData=d;a.data.datfer:function(){this.dr&&a.data.$.clipboardData||nufunction(a){a&&a.on("dragover",D)}};m=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?"cke/id":"Text";CKEDIetSelection().getSelectedText()))};CKEDITOR.DATA_TRANSFER_INTERNAL=1;CKEDITOR.DATA_TRANSFER_CROSS_EDITORS=2;CKEDITOR.DATA_TRANSFER_EXTERNAL=
3;CKEDITOR.plugins.clipboa==g?c.sury{this.ext"!==m&&this.sS:CKEDITORlength&&d&&thithis._ge._getImathis.getData(b))return!e())&&
a.tyis._.fragmentRegExp,""))}return a}};CKEDITOR.plugustomDataFallbackType="text/html"};CKEDITOR.plugins.clipboard.fallbackDataTransfer._isCustomMimeTypeSupported=null;CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes=[];CKEDITOR.plugins.clipboard.fallbackDturn!a._etData(alCache=d}.getData(a)}catch(d){retlbackType,
!0)).conteb[a]&&(b[a]=b[a])},this);retage.search(/element tent=a.replace(c[0x3e");return c+(a&&a.length?a:"")}}})();CKEDITOR.config.clipboard_notificationDuration=1E4;CKEDITOR.plugins.add("panetate(CKEDITOR.TRISTATE_OFF)}}}}})},beforeInit:function(e){e.ui.addHandler(CKEDITOR.UI_PANELBUTTON,CKEDITOR.ui.panelButton.handler)}});
CKED():c.$["on"+e]()),!1}return!0}}})})();CKEDITOR.plugins.add(oy():c.element.hide()}a&&(f={})})})();CKEDITOR.plugins.add("colorbutton",{requor",
"back",h.bgColorTitle,20,w)}}});CKEDITOR.config.colorButton_colors="1ABC9C,2ECC71,3498DB,9B59B6,4E5F70,F1C40F,16A085,27AE60,2980B9,8E44AD,2C3E50,F39C12,E67E22,E74C3C,ECF0F1,95A5A6,DDD,FFF,D35400,C0392B,BDC3C7,7F8C8D,999,000";CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};CKEDITOR.plugins.cn"==typeof a&&a.call(this)}})}})}}};CKEDITOR.plugins.add("colordialLoader.load(e,d):setTimeout(d,0)}})();CKEDITOR.config.templates_files=[CKEDITOR.getUrl("plugins/templates/templates/default.js")];CKEDITOR.config.templates_replaceContent=!0;CKEDITOR.plugins.add("menu"MenuItem=functi<d.order?-1:a.order>d.order?1:0})}var h='\x3cspan class\x3d"cke_menuitem"\x3e\x3ca id\x3d"{id}" class\x3d"cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href\x3d"{href}" title\x3d"{title}" tabindex\x3d"-1" _cke_focus\x3d1 hidefocus\x3d"true" role\x3d"{role}" aria-label\x3d"{label}" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasPopup}" aria-disabled\x3d"{disabled}" {ariaChecked} draggable\x3d"false"';
CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(h+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(h+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;" ondragstart\x3d"return false;"');var h=h+(' onmouseover\x3d"CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout\x3d"CKEDITOR.tools.callFunction({moveOutFn},{index});" '+(CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;"\x3e'),r=CKEDITOR.addTemplate("menuItem",
h+'\x3cspan class\x3d"cke_menubutton_inner"\x3e\x3cspan class\x3d"cke_menubutton_icon"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{iconStyle}"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"cke_menubutton_label"\x3e{label}\x3c/span\x3e{shortcutHtml}{arrowHtml}\x3c/span\x3e\x3c/a\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_voice_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e\x3c/span\x3e'),t=CKEDITOR.addTemplate("menuArrow",'\x3cspan class\x3d"cke_menuarrow"\x3e\x3cspan\x3e{label}\x3c/span\x3e\x3c/span\x3e'),
n=CKEDITOR.addTemplate("menuShortcut",'\x3cspan class\x3d"cke_menubutton_label cke_menubutton_shortcut"\x3e{shortcut}\x3c/span\x3e');CKEDITOR."menu");thate||(f.his.edito(1):
27tion(){this.0)}else this.items.lenemoved,a,b,d,m);k.fire("menuShow",[e])},addListener:functionhis._.panel&&this._.panel.hide(a)}}});CKEDITOR.menu.group];this.etem",ariaChecked:k};r.output(a,d)}}})})();CKEDITOR.config.menu_groups="clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div";CKEDITOR.plugins.add("coChange(1),tCKEDITOR.SHIFT.element===a||b.element===d[a]})}function q(a){this.styles=null;this.sticky=!1;this.editor=a;this.filter=new CKEDITOR.filter(a.config.copyFormatting_allowRules);!0===a.config.copyFormatting_allowRules&&(this.filter.disabled=
!0);a.config.copyFormatting_disallowRules&&this.filter.disallow(a.config.copyFormatting_disallowRules)}var l=CKEDITOR.tools.indexOf,r=CKEDITOR.tools.getMouseButton,t=!1;CKEDITOR.plugins.add("copyformatting",{lang:"az,de,en,it,ja,nb,nl,oc,pl,pt-br,ru,sv,tr,zh,zh-cn",icons:"copyformatting",hidpi:!0,init:function(a){var b=CKEDITOR.plugins.copyformatting;b._addScreenReaderContainer();t||(CKEDITOR.document.appendStyleSheet(this.path+"styles/copyformatting.css"),t=!0);a.addContentsCss&&a.addContentsCss(this.path+
"styles/copyformatting.css");a.copyFormatting=new b.state(a);a.addCommand("copyFormatting",b.commands.copyFormatting);a.addCommand("applyFormatting",b.commands.applyFormatting);a.ui.addButton("CopyFormatting",{label:a.lang.copyformatting.label,command:"copyFormatting",toolbar:"cleanup,0"});a.on("contentDom",function(){var d=a.editable(),b=d.isInline()?d:a.document,c=a.ui.get("CopyFormatting");d.attachListener(b,"mouseup",function(b){r(b)===CKEDITOR.MOUSE_BUTTON_LEFT&&a.execCommand("applyFormatting")});
d.attachListener(CKEDITOR.document,"mouseup",function(b){var e=a.getCommand("copyFormatting");r(b)!==CKEDITOR.MOUSE_BUTTON_LEFT||e.state!==CKEDITOR.TRISTATE_ON||d.contains(b.data.getTarget())||a.execCommand("copyFormatting")});c&&(b=CKEDITOR.document.getById(c._and("copyFormatting",{sticky:!ction(a){a.data.stopPropagation()}))});a.config.copyFormatting_keystrokeCopy&&a.setKeystroke(a.config.copyFormatting_keystroke&&a.execCommand("copyFormatting")});a.copturn d.cancel();d.data.styleDef=e});a.coe,f.element),e.moveToBookmark(g)}});a.coditor,b.data.range,b.data.styles)},null,null,999ontexts;return!0===b||-1!==l(b,a)};CKEDITOR.event.implementOn(q.prototype);CKEDITOR.plugins.copyformatting={state:q,inlineBoundary:"h1 h2 h3 h4 h5 h6 p div".split(" "),excludedAttributes:["id","style","href","data-cke-saved-href","dir"],elementsForInlineTransform:["li"],excludedElementsFromInlineTransform:["table","thead","tbody","ul","ol"],excludedAttributesFromInlineTransform:["value","type"],preservedElements:"ul ol li td th tr thead tbody table".split(" "),
breakOnElements:["ul","ol","table"],_initialKeystrokePasteCommand:nd._attachPasteKeystrokeHandler(a)}},applyFormatting:{editorFocus:!1,
exec:function(a,b){var d=a.getCommand("copyFormatting"),e=b?"keystrokeHandler"==b.from:!1,c=CKEDITOR.plugins.copyformatting,f=a.copyFormatting,g=c._getCursorContainer(a),h=CKEDITOR.document.getDocumentElement();if(e||d.state===CKEDITOR.TRISTATE_ON){if(e&&!f.styles)return c._putScreenReaderMessage(a,"failed"),c._detachPasteKeystrokeHandler(a),!1;e=c._applyFormat(a,f.styles);f.sticky||(f.styles=null,g.removeClass("cke_copyformatting_active"),h.removeClass("cke_copyformatting_disabled"),h.removeClass("cke_copyformatting_tableresize_cursor"),
d.setState(CKEDITOR.TRISTATE_OFF),c._detachPasteKeystrokeHandler(a));c._putScreenReaderMessage(a,e?"applied":"itable():a.editable().getPYLE_INLINE,attributes:d,sty==CKEDITOR.NODE_ELEMENT)StylesFromElement(a,
c));return ibutes(c.getAttributes(ndNode:k,endOf(e.styles)||d.push?"list":b("table")?"table"tion.attributes[c[g]];b.aptext(a,b,[e]),b.moveToBookmtext(a,b,[c])ion().selectBookmarks(f)g.copyformatting.notificativ\x3e\x3c/div\x3e')).getCing_notification div[aria-livetKeystroke(b,"applyFormattininitialKeystrokePasteCommand||!1)}};CKEDITOR.config.copyFormatting_outerCursor=!0;CKEDITOR.config.copyFormatting_allowRules="b s u i em strong span p div td th ol ul li(*)[*]{*}";CKEDITOR.config.copyFormatting_disallowRules="*[data-cke-widget*,data-widget*,data-cke-realelement](cke_widget*)";
CKEDITOR.config.copyFormatting_allowedContexts=!0;CKEDITOR.config.copyFormatting_keystrokeCopy=CKEDITOR.CTRL+CKEDITOR.SHIFT+67;CKEDITOR.config.copyFormatting_keystrokePaste=CK.is("div")&&!a.isReadOnly()},1)}}})();CDITttom,t=xplyToAll:!0,excludeNestedEditable:!0})}}})})();CKEDITOR.config.basicEntities=!0;CKEDITOR.config.entities=!0;CKEDITOR.config.entities_latin=!0;CKEDITOR.config.entities_greek=!0;
CKEDITOR.config.entities_additional="#39";CKEDITOR.plugins.add("popup");
CKEDITOR.tocatser&&(d.hidden=!h(c,d.id,d.filebrowser))})})();CKEDITORdd("replace",this.path+
"dialogs/find.js")}});CKEDITOR.config.find_highlight={element:"span",styles",g(nction(b){return d(b)?e(a,b):null}}},5)}})})();CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:!1,faded",function(){k(this)},null,null,20)}})})();CKEDITOR.plugic&&setTimeout(function(){c.focus()},0)}}})}});CKEDITOR.plugins.add("richcombo",{requirI_RI(a,btSize_defaultLabel,f.fontSize_style,40)}})})();CKEDITOR.config.font_names="Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif";
CKEDITOR.config.font_defaultLabel="";CKEDITOR.config.font_style={element:"span",styles:{"font-family":"#(family)"},overrides:[{element:"font",attributes:{face:null}}]};CKEDITOR.config.fontSize_sizes="8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px";CKEDITOR.config.fontSize_defaultLabel="";CKEDITOR.config.fontSize_style={element:"span",styles:{"font-size":"#(size)"},overrides:[{element:"font",attributes:{size:null}}]};CKEDITOR.plugins.add("f6px !tton"}h[c]hidden","hiddenfield")}}},{applyToAll:!0})}});CKEDITOR.plug.setState(CKEDITOR.TRISTATE_DISABLED)}}})}}});CKEDITOR.config.format_tags="p;h1;h2;h3;h4;h5;h6;pre;address;div";CKEDITOR.config.format_p={element:"p"};CKEDITOR.config.format_div={element:"div"};CKEDITOR.config.format_pre={element:"pre"};
CKEDITOR.config.format_address={element:"address"};CKEDITOR.config.format_h1={element:"h1"};CKEDITOR.config.format_h2={element:"h2"};CKEDITOR.config.format_h3={element:"h3"};CKEDITOR.config.format_h4={element:"h4"};CKEDITOR.config.format_h5={element:"h5""horizontalrule",toolbar:"insert,40"}))}})}tationChars||"\t";b.dataProcessor.writer=a}});
CKEDITOR.htmlWriter=CKEDITOR.tools.createCletRules("pre",{output.push("\his.lineBr));this._dsSpaTOR.tool);this._.o.push(this.lt.pushloser=0;tOR.tElemCKEDITOR.warn("editor-destroy-iframe")}}})})();CKEDITOR.config.disableObjectResizing=!1;CKEDITOR.config.disableNativeTableHandles=!0;CKft"),a("right"),a("center"),a("block"))}})})();CKEctio)("+s(f));return k&&q&&q.equals(k.getFirst(n))}})();CKEDITOR.add("smiley",this.path+"dialogs/smiley.js")}});CKEDITOR.config.smiley_images="regular_smile.png sad_smile.png wink_smile.png teeth_smile.png confused_smile.png tongue_smile.png embarrassed_smile.png omg_smile.png whatchutalkingabout_smile.png angry_smile.png angel_smile.png shades_smile.png devil_smile.png cry_smile.png lightbulb.png thumbs_down.png thumbs_up.png heart.png broken_heart.png kiss.png envelope.png".split(" ");
CKEDITOR.config.smiley_descriptions="smiley;sad;wink;laugh;frown;cheeky;blush;surprise;indecision;angry;angel;cool;devil;crying;enlightened;no;ylbar:"align,40"}));a.on("dirChanged",m)}}})})();CKEDITOR.plugins.add){return new CKEDITOR.ui.menuButton(c)}}}})},beforeInit:function(d){d.ui.addHandler(CKEDITOR.UI_MENUBUTTON,CKEDITOR.ui.menuButton.handl&&b.nkShut(f.add?b:null}}(),y=["top","left","right","bottom"]})();CKEDITOR.config.magicline_keystrokePrevious=CKEDITOR.CTRL+CKEDITOR.SHIFT+51;
CKEDITOR.config.magicline_ITOR.TRISTATE_DISABLED:n)},null,null,100bary"}},requiredContent:"div{page-break-after}"}})nd("paste",{type:"text",notification:d?c:!1})}};CKEDITOR.plugins.add("pastetext",
{requires:"clipboard",init:function(a){var b=CKEDITOR.env.safari?CKEDITOR.CTRL+CKEDITOR.ALT+CKEDITOR.SHIFT+86:CKEDITOR.CTRL+CKEDITOR.SHIFT+86;a.addCommand("pastetext",f);a.setKeystroke(b,"pastetext");a.ui.addButton&&a.ui.addButton("PasteText",{label:a.lang.pastetext.button,command:"pastetext",toolbar:"clipboard,40"});if(a.c(a){"html"!=a.data.b){a.getCommand("pasITOR.scriptLoader.load(a,e,null,!0));return!h}CKEDITOR.plugins.add("pastefrataValue=a.data.dataValue.replace(c[b],d[b]))}var e=0,h=this.path,m=void 0===a.config.pasteFromWord_inlineImages?!0:a.config.pasteFromWord_inlineImages;a.addCom"!==typeof b.notification?b.notification:!0})}});a.ui.addButton&&a.ui.addButton("PasteFromWord",{label:a.lang.pastefromword.toolbar,command:"pastefromword",toolbar:"clipboard,50"});a.on("paste",function(f){var b=f.data,c=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?b.dataTransfer.getData("text/html",!0):null,d=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?b.dataTransfer.getData("text/rtf"):null,c=c||b.dataValue,g=
{dataValue:c,dataTransfer:{"text/rtf":d}},d=/(class=\"?Mso|style=(?:\"|\')[^\"]*?\bmso\-|w:WordDocument|<o:\w+>|<\/font>)/,d=/<meta\s*name=(?:\"|\')?generator(?:\"|\')?\s*content=(?:\"|\')?microsoft/gi.test(c)||d.test(c);if(c&&(e||d)&&(!1!==a.fire("pasteFromWord",g)||e)){b.dontFilter=!0;var k=l(a,h,function(){if(k)a.fire("paste",b);else if(!a.config.pasteFromWordPromptCleanup||e||confirm(a.lang.pastefromword.confirmCleanup))g.dataValue=CKEDITOR.cleanWord(g.dataValue,a),a.fire("afterPasteFromWord",
g),b.dataValue=g.dataValue;e=0});k&&f.cancel()}},null,null,3);if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupcommand:"preview",toolbar:"document,40lbar,command:"print",toolbar:"dw.$.print():a.document.$.execCommand("Print")},canUndo:!1,readOnly:1,modes:{wysiwygcommand:"removeFormat",toolbar:"cleanup,10"})}});
CKEDITOR.plugctionChec.length;f++)if(!1===e[f](h))return!1;return!0}};Cilters=[]);this._.removeFormatFilters.push(a)};CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var";
CKEDITOR.config.removeFormatAttributes="classar,cmmanKEDIder"his);this.clearCustomData();this.remove()}}})})();
CKEDITOR.plugins.sourcearea={commands:{source:{modes:{wysi.setMode("source"==c.mode?"wysiwyg":"source")},canUndo:!1}}};CKEDITOR.plugins.add("specialchar",{availableLangs:{af:1,ar:1,az:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,"de-ch":1,el:1,en:1,"en-au":1,"en-ca":1,"en-gb":1,eo:1,es:1,"es-mx":1,et:1,eu:1,fa:1,fi:1,fr:1,"fr-ca":1,gl:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,ku:1,lt:1,lv:1,nb:1,nl:1,no:1,oc:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,sv:1,th:1,tr:1,tt:1,ug:1,ukr,command:"specialchar",toolbar:"insert,50"})}});CKEDITOR.config.specialChars="! \x26quot; # $ % \x26amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; \x26lt; \x3d \x26gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ \x26euro; \x26lsquo; \x26rsquo; \x26ldquo; \x26rdquo; \x26ndash; \x26mdash; \x26iexcl; \x26cent; \x26pound; \x26curren; \x26yen; \x26brvbar; \x26sect; \x26uml; \x26copy; \x26ordf; \x26laquo; \x26not; \x26reg; \x26macr; \x26deg; \x26sup2; \x26sup3; \x26acute; \x26micro; \x26para; \x26middot; \x26cedil; \x26sup1; \x26ordm; \x26raquo; \x26frac14; \x26frac12; \x26frac34; \x26iquest; \x26Agrave; \x26Aacute; \x26Acirc; \x26Atilde; \x26Auml; \x26Aring; \x26AElig; \x26Ccedil; \x26Egrave; \x26Eacute; \x26Ecirc; \x26Euml; \x26Igrave; \x26Iacute; \x26Icirc; \x26Iuml; \x26ETH; \x26Ntilde; \x26Ograve; \x26Oacute; \x26Ocirc; \x26Otilde; \x26Ouml; \x26times; \x26Oslash; \x26Ugrave; \x26Uacute; \x26Ucirc; \x26Uuml; \x26Yacute; \x26THORN; \x26szlig; \x26agrave; \x26aacute; \x26acirc; \x26atilde; \x26auml; \x26aring; \x26aelig; \x26ccedil; \x26egrave; \x26eacute; \x26ecirc; \x26euml; \x26igrave; \x26iacute; \x26icirc; \x26iuml; \x26eth; \x26ntilde; \x26ograve; \x26oacute; \x26ocirc; \x26otilde; \x26ouml; \x26divide; \x26oslash; \x26ugrave; \x26uacute; \x26ucirc; \x26uuml; \x26yacute; \x26thorn; \x26yuml; \x26OElig; \x26oelig; \x26#372; \x26#374 \x26#373 \x26#375; \x26sbquo; \x26#8219; \x26bdquo; \x26hellip; \x26trade; \x26#9658; \x26bull; \x26rarr; \x26rArr; \x26hArr; \x26diams; \x26asymp;".split(" ");CKEDITOR.plugins.add("scayt",{requires:"menubutton,dialog",endStyt;d&&d.hideBert("Nothinion(b){b.dat"===c&&(d)&&delete a.name;return a}}});f&&f.call(a,h)},scaytMenuDefinition:function(a){var c=this;a=a.scayt;return{scayt:{scayt_ignore:{label:a.getLocal("btn_ignore"),group:"scayt_control",
order:1,exec:function(a){a.scayt.ignoreWord()}},scayt_ignoreall:{label:a.getLocal("btn_ignoreAll"),group:"scayt_control",order:2,exec:function(a){a.scayt.ignoreAllWords()}},scayt_add:{label:a.getLocal("btt(function(){b.addWordToUserDictionary()},10)}},scayt_option:{label:a.getLocal("btn_options"),group:"scayt_control",order:4,exec:function(a){a.scayt.tabToOpen="options";a.lockSelection();a.openDialog(c.dialogName)},
verification:function(a){return 1==a.config.scayt_uiTabs[0]?!0:!1}},scayt_language:{label:a.getLocal("btn_langs"),group:"scayt_control",order:5,exec:function(a){a.scayt.tabToOpen="langs";a.lockSelection();a.openDialog(c.dialogName)},verification:function(a){return 1==a.config.scayt_uiTabs[1]?!0:!1}},scayt_dictionary:{label:a.getLocal("btn_dictionaries"),group:"scayt_control",order:6,exec:function(a){a.scayt.tabToOpen="dictionaries";a.lockSelect(a){return 1==
a.config.scayt_uiTabs[2]?!0:!1}},scayt_about:{label:a.getLocal(";a.lockSelection();a.openDialog(c.dialogName)}}},grayt:{grayt_problemdescription:{label:"Grammar problem description",group:"grayt_description":CKEDITOR.TRISTATE_DISABLED,exec:function(a){}},grayt_ignore:{label:a.getLocal("btn_ignore"),group:"grayt_control",order:2,exec:function(a){a.scayt.ignorePhrase()}},grayt_ignoreall:{label:a.getLocal("btn_ignoreAll"),
group:"grayt_control",order:3,exec:function(a){a.scayt.igest",group:"scayt_suggest",order:0});return b},menuGenerator:function(a,c){var d=a.scayt,b=this.scaytMenuDefinition(a),e=
{},f=a.config.scayt_contextCommands.split("|"),g=c.getAttribute(d.getLangAttribute())||d.getLang(),h,k,m;h=d.isScaytNode(c);k=d.isGraytNode(c);h?(b=b.scayt,e=c.getAttribute(d.getScaytNodeAttributeName()),d.fire("getSuggestionsList",{lang:g,word:e}),e=this.buildSuggestionMenuItems(a,CKEDITOR.plugins.scayt.suggestions,h)):k&&(b=b.grayt,e=c.getAttribute(d.getGraytNodeAttributeName()),m=d.getProblemDescriptionText(e,g),b.grayt_problemdescription&&m&&(b.grayt_problemdescription.label=m),d.fire("getGrammarSuggestionsList",
{lang:g,phrase:e}),e=this.buildSuggestionMenuItems(a,CKEDITOR.plugins.scayt.suggestions,h));if(h&&"off"==a.config.scayt_contextCommands)return e;for(var l in b)h&&-1==CKEDITOR.tools.indexOf(f,l.replace("scayt_",""))&&"all"!=a.config.scayt_contextCommands||k&&"grayt_problemdescription"!==l&&-1==CKEDITOR.tools.indexOf(f,l.replace("grayt_",""))&&"all"!=a.config.scayt_contextCommands||(e[l]="undefined"!=typeof b[l].state?b[l].state:CKEDITOR.TRISTATE_OFF,"function"!==typeof b[l].verification||b[l].verification(a)||
delete e[l],a.addCommand(l,{exec:b[l].exec}),a.addMenuItem(l,{label:a.lang.scayt[b[l].label]||b[l].label,command:l,group:b[l].groInSelectionNode({grammarOnly:!0});b.fire(d)}}}});
CKEDITOR.plugins.scayt={charsTfromCharCode(8203)):String.fromCharCode(8203)}()}],onLoadTimestamp:"",state:{scayt:{},grayt:{}},warningCounter:0,suggestions:[],options:{disablingCommandExec:{source:!0,newpage:!0,templates:!0},
data_attribute_name:"data-scayt-word",misspelled_word_class:"scayt-misspell-word",problem_grammar_data_attribute:"data-grayt-phrase",problem_grammar_class:"gramm-problem"},backCompatibilityMap:{scayt_service_protocol:"scayt_serviceProtocol",scayt_service_host:"scayt_serviceHost",scayt_service_port:"scayt_servicePort",scayt_service_path:"scayt_servicePath",scayt_customeridbspellchecker.net:function(a){.fire("startSpellCheck,is.backCompatibilityMap[c]]=a[c],delete a[c])},createScayt:function(a){var c=this,d=CKEDITOR.pluw SCAYT.CKSCAYT(a,
function(){},function(){})}var f=a.window&&a.window.getFrame()||a.editable();if(f){f={lang:a.config.scayt_sLang,container:f.$,customDictionary:a.config.scayt_customDictionaryIds,userDictionaryName:a.config.scayt_userDictionaryName,localization:a.langCode,customer_id:a.config.scayt_customerId,customPunctuation:a.config.scayt_customPunctuation,debug:a.config.scayt_debug,data_attribute_name:c.options.data_attribute_name,misspelled_word_class:c.options.misspelled_word_class,problem_grammar_data_attribute:c.options.problem_grammar_data_attribute,
problem_grammar_class:c.options.problem_grammar_class,"options-to-restore":a.config.scayt_disableOptionsStorage,focused:a.editable().hasFocus,ignoreElementsRegex:a.config.scayt_elementsToIgnore,ignoreGraytElementsRegex:a.config.grayt_elementsToIgnore,minWordLength:a.config.scayt_minWordLength,multiLanguageMode:a.config.scayt_multiLanguageMode,multiLanguageStyles:a.config.scayt_multiLanguageStyles,graytAutoStartup:a.config.grayt_autoStartup,charsToObserve:d.charsToObserve};a.config.scayt_serviceProtocol&&
(f.service_protocol=a.config.scayt_serviceProtocol);a.config.scayt_serviceHost&&(f.service_host=a.config.scayt_serviceHost);a.config.scayt_servicePort&&(f.service_port=a.config.scayt_servicePort);a.config.scayt_servicePath&&(f.service_path=a.config.scayt_servicePath);"boolean"===typeof a.config.scayt_ignoreAllCapsWords&&(f["ignore-all-caps-words"]=a.config.scayt_ignoreAllCapsWords);"boolean"===typeof a.config.scayt_ignoreDomainNames&&(f["ignore-domain-names"]=a.config.scayt_ignoreDomainNames);"boolean"===
typeof a.config.scayt_ignoreWordsWithMixedCases&&(f["ignore-words-with-mixed-cases"]=a.config.scayt_ignoreWordsWithMixedCases);"boolean"===typeof a.config.scayt_ignoreWordsWithNumbers&&(f["ignore-words-with-numbers"]=a.config.scayt_ignoreWordsWithNumbers);var g;try{g=e(f)}catch(h){c.alarmCompatibilityMessage(),delete f.charsToOist[c]));CKEDITOR.plugins.scayt.su{a.getSelection().isLocked&&a.loced",function(c){d.state.grayt[a.name]=c.e&&(e.$=d.node,c.setCustomData(d.charName,e))});a.scayt=g;a.fire("scaytButtonState",a.readOnly?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATEire("scaytButtonS"function"===typeof window.SCAYT.CKSCAYT&&b()}};
CKEDITOR.on("dialogDefinition",function(a){var c=a.data.name;a=a.data.definiialog"===c)a.on("cancel",function(a){return!1},ted&&c.setMarkupPaused(!1);a.unlockSeleveInside:!0,forceBookmark:!0},eMarkupInDocument",{}),b.relots_DIS));c.addCommand("selectPreviousCell",k(!0))}}e)?(d=b,e=a):d||0!==a||(d=b,e=a)}}d&&d.focus();break}b<g&&(!d||b>e)&&(d=a,e=b)}}d&&d.focus()};CKEDIR.T.add("tabletools",CKEDITOR.pluginells[z]}t+=A-1;if(-1!==w&&t>=w)break}}return y};(function(){function B(a){return CKEDITOR.pluginsOf(b,d.data.name)&&c(a,d.data)})}var g={active:!:null,all:[]};this.rows={firss.rows.last=this.cells.lle(),n(this.rows.first){return this.rows.firconcat(h):h.concat(m);thiarray.filter(F(d),b));tll;for(var b=0;b<a.length;b++)a[b]Position(c)&CKE;t(d,k.cells.all);d.aryOfElement(b,CKEDITOR.Ern 1<d.getCmove();CKEDITOR.dom.element.clearAllMarkers(m)}};CKEDITOR.plugins.tableselection={getCellsBetween:x,keyboardIntegration:function(a){function b(a){var b=a.getEnclosedNode();b&&b.is({td:1,th:1})?a.getEnclosedNode().setText(""):a.deleteContents();CKEDITOR.tools.array.forEach(a._find("td"),
function(a){a.appendBogus()})}(n);f.selectRanges(g);a.fire("saveSnapshot")}}}ntEditablePosition(h),c.selectRanges([d[0]]))}},null,null,-1)},isSupportedEnvironment:!(CKEDITOR.env.ie&&11>CKEDITOR.env.version)};CKEDITOR.plugins.add("tableselleShe)}),z(ay||tplugins.lineutirn a.getName&&!a.hasAttribute("data-cke-temp")}CKEDITOR.plugins.add("widgetselection",{init:function(a){if(CKEDITOR.env.webkit){var b=CKEDITOR.plugins.widgetselection;a.on("contentDom",function(a){a=a.editor;var d=a.document,e=a.editable();e.attachListener(d,"keydown",function(a){var c=a.data.$;65==a.data.getKey()&&(CKEDITOR.env.mac&&c.metaKey||!CKEDITORfunction(){b.addFillers(e)||b.removeFillenction(a){b.rea.dataValue=b.cleanPasteData(a.data.dataValue)});"selectall"in a.plugins&&b.addSelectAllIntegration(a)})}}});CKEDITOR.plugins.widgetselection={startFiller:null,endFiller:null,fillerAttribute:"data-cke-filler-webkit",fillerConb.selectNodeComoveFiller(thisplace(this.createFillerontainer.erTagName+"["+9999px",opaciD),b.editor.getSelc");return new RegExp((adata.name&&d&&b.autes["data-cke-widget-white-space"]=1)}}function v(a){return a.f",e)}}function F(a){a.cancel()}function B(a,b){var c=a.editor,d=c.document,e=CKEDITOR.env.edge&&16<=CKEDITOR.env.version;if(!d.getById("cke_copybin")){var f=!c.blockless&&!CKEDITOR.env.ie||e?"div":"span",e=d.createElement(f),h=d.createElement(f),f=CKEDITOR.env.ie&&9>CKEDITOR.env.version;h.setAttributes({id:"cke_copybin","data-cke-temp":"1"});e.setStyles({position:"absolute",width:"1px",height:"1px",overflow:"hidden"});e.setStyle("ltr"==c.config.contentsLangDirection?"left":
"right","-5000px");var g=c.createRange();g.setStartBefore(a.wrapper);g.setEndAfter(a.wrapper);e.setHtml('\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e'+c.editable().getHtmlFromRange(g).getHtml()+'\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e');c.fire("saveSnapshot");c.fire("lockSnapshot");h.append(e);c.editable().append(h);var k=c.on("selectionChange",F,null,null,0),m=a.repository.on("checkSelection",F,null,null,0);if(f)var n=d.getDocumentElement().$,p=n.scrollTop;g=c.createRange();
g.selectNodeContents(e);g.select();f&&(n.scrollTop=p);setTimeout(function(){b||a.focus();h.remove();k.removeListener();m.removeListener();c.fire("unlockSnapshot");b&&a,removeFromRange:a,applyToObject:a})}CKEDITOR.plugins.add("widget",{rewidget_drag.document.label:e,command:c.name,toolbar:"insert,10"});V(a)}}}is.editor,b);S(this,b);return this.registered[a]=b},addUpcastCallback:functionext();)c.selis.ftRanges(s.instancesestroy(c)}else foByElement(a),als(f)&&!.instancestFirst(g.,function(c){c=c.dat-1==b.indexOtIndex(),a.remove());c.add(a);d&&z(d,f,c)}return c},_tests_createEditableFilter:x};CKEDITOR.event.implementOn(p.prototype);g.prototype={addClass:function(a){this.element.addClass(a);this.wrapper.addClass(g.WRAPPER_CLASS_PREFIX+a)},a;b=a.pops.element.replac,"dat.removeListElementClsClass:functi._.initialSetData=apper),thed:functeady:f);!b&&this.ethis.wrapperSS_PREFItaReady&&(r(this),this.fire("data",c));return this},setFocused:function(a){this.wrapper[a?"addClass":"removeClass"]("cke_widget_focused");tted");this.fire(a?"select"t"),!c&&a.resetDirty(),this._.dragHandlerOffset=b)}};CKEDITOREditable(b)?b:g.getNestedEditable(a,b.getParent())};g.isDomDragHandler=function(a){return a.type==
CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-drag-handler")};g.isDomDragHandlerContainer=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_widget_drag_handler_container")};g.isDomNestedEditable=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-editable")};g.isDomWidgetElement=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&ELEMENT&&a.hasADomWidgetWrapper(a)||this.isDomWidgetElement(a):!1};g.isParserWidgetElement=function(a){return a.type==CKEDITOR.NODE_ELEMENT&&!!aELEMENT&&!!a.attributes["data-cke-widget-wrapper"]};g.WRAPPER_CLASS_PREFIX="cke_widget_wrapper_";q.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prothis.setHme(),filter:this.filter,enterMode:this.enterMode})}});var X=/^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,
ga={37:1,38:1,39:1,40:1,8:1,46:1};CKEDITOR.plugins.widget=t8Array(e);b.push(f)}return new Blob(b,{type:d})}CKEDITOR.plugins.add("filetools",{beforeInit:function(a){a.requestData.upload=
{file:b.file,name:b.fileName}},null,null,5);a.on("fileUploadRequest",function(a){var b=a.data.fileLoader,c=new FormData;a=a.data.requestData;for(var f in a){var e=a[f];"object"===typeof e&&e.file?c.append(f,e.file,e.name):c.append(f,e)}c.append("ckCsrfToken",CKEDITOR.tools.getCsrfToken());b.xh-error",{responseText:c.responseText}),a.cancel()}},null,null,999)}});h.prototype={create:function(a,d){var b=this.loaders.length,c=new k(this.editor,a,d);c.id=b;this.loaders[b]=c;if(!this.loaders[a].isFinishll,nuhangeStg.filetools.noUrlError,changeStatus(this.abis.update().status.match(/^(?:loaded|uploaded|error|abort)$/)}};
CKEDITOR.event.implementOn(h.prototype);CKEDITOR.event.implementOn(k.prototype);var l=/^data:(\S*?);base64,/;CKEDITOR.fileTools||(CKEDITOR.fileTools={});CKEDITOR.tools.extend(CKEDITOR.fileebrowserUploadUrypeSuppr=e;CKEDITOR.plugins.notificationAggregator.task=d})();(function(){CKEDITOR.plugins.add("uploadwidget",{requires:"widgilter.allow("*[!data-widget,!data-cke-upload-id]")}});CKEDITOR.fileTools||(CKEDITOR.fileTools={});CKEDITOR.tools.extend(CKEDITOR.fileTools,{addUploadWidget:function(a,b,e){var k=CKEDITOR.fileTools,c=a.uploadRepository,m=e.supportedTypes?10:20;if(e.fileToElement)a.on("paste",function(f){f=f.data;var l=a.widgets.registered[b],g=f.dataTransfer,e=g.getFilesCount(),h=l.loadMethod||
"loadAndUpload",d,n;if(!f.dataValue&&e)for(n=0;n<e;n++)if(d=g.getFile(n),!l.supportedTypes||k.isTypeSupported(d,l.supportedTypes)){var m=l.fileToElement(d);d=c.create(d);m&&(d[h](l.uploadUrl,l.additionalRequestParameters),CKEDITOR.fileTools.markElement(m,b,d.id),"loadAndUpload"!=h&&"upload"!=h||l.skipNotifications||CKEDITOR.fileTools.bindNotifications(a,d),f.dataValue+=m.getOuterHtml(functount()||
g.a),h.select()):a.getSelection().seltributes({"data-ckowNotifotifications(c,d))}b.dataValue=f.getHtml()}}))}}})})();CKEnfig.wsc_onC69233";(thispostMessage?"dialogs/wsc.js":"dialogs/wsc_ie.js"))}});CKEDITOR.config.plugins='dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,filetools,notificationaggregator,uploadwidget,do,2016,auto,spellchecker,2040,auto','icons.png');})();CKEDITOR.lang.languages={"af":1,"sq":1,"ar":1,"az":1,"eu":1,"bn":1,"bs":1,"bg":1,"ca":1,"zh-cn":1,"zh":1,"hr":1,"cs":1,"da":1,"nl":1,"en":1,"en-au":1,"en-ca":1,"en-gb":1,"eo":1,"et":1,"fo":1,"fi":1,"fr":1,"fr-ca":1,"gl":1,"ka":1,"de":1,"de-ch":1,"el":1,"gu":1,"he":1,"hi":1,"hu":1,"is":1,"id":1,"it":1,"ja":1,"km":1,"ko":1,"ku":1,"lv":1,"lt":1,"mk":1,"ms":1,"mn":1,"no":1,"nb":1,"oc":1,"fa":1,"pl":1,"pt-br":1,"pt":1,"ro":1,"ru":1,"sr":1,"sr-latn":1,"si":1,"sk":1,"sl":1,"es":1,"es-mx":1,"sv":1,"tt":1,"th":1,"tr":1,"ug":1,"uk":1,"vi":1,"cy":1};}());
/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

(function(a){if("undefined"==typeof a)throw Error("jQuery should be loaded before CKEditor jQuery adapter.");if("undefined"==typeof CKEDITOR)throw Error("CKEditor should be loaded before CKEditor jQuery adapter.");CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.zed yet, use ckeditor() with a callback.";return a},
ckeditor:function(g,d){if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");if(!a.isFunction(g)){var m=d;d=g;g=m}var k=[];d=d||{};this.each(function(){var b=a(this),c=b.data("ckeditorInstance"),f=b.data("_ckeditorInstanceLock"),h=this,l=new a.Deferred;k.push(l.promise());if(c&&!f)g&&g.apply(c,[,l.resolve()):setTimeout(arguments.callee,100)},0)},
null,null,9999);else{if(d.autoUpdateElement||"undefined"==typeof d.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)d.autoUpdateElementJquery=!0;d.autoUpdateElement=!1;b.data("_ckeditorInstanceLock",!0);c=a(this).is("textarea")?CKEDITOR.replace(h,d):CKEDITOR.inline(h,d);b.data("ckeditorInstance",c);c.on("instanceReady",function(d){var e=d.editor;setTimeout(function(){if(e.element){d.removeListener();e.on("dataReady",function(){b.trigger("dataReady.ckeditor",[e])});e.on("setData",function(a){b.triggnction(a){b.trigger(troy",function(){b.trigger("destroy.ckeditor",[e])});e.on("save",function(){a(h.form).submit();return!1},null,null,20);if(e.config.autoUpdateElemenction(){b.ckeditor(function(){e.updateElement()})};a(h.form).submit(c);a(h.form).binbmit",c);a(h.form).unbind("form-pre-serialize",
c)})}e.on("destroy",function(){b.removeData("ckeditorInstance")});b.removeData("_ckeditorInstanceLock");b.trigger("instanceReady.ckeditor",[e]);g&&g.apply(e,[h]);l.resolve()}else setTimeout(arguments.callee,100)},0)},null,null,9999)}});var f=new a.Deferred;this.promise=f.promise();a.when.apply(this,k).then(function(){f.resolve()});this.editor=this.eq(0).data("ckeditorInstance");return this}});CKEDITOR.config.jqueryOver;return f.is("textarea")&&c?c.getData():g.call(f)}}))})(window.jQuery);



/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license ter==typeixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
/*
 * Stick all your javascript hacks that work around capybara/poltergeist issues
 * here. Please document them all inline so that it doesn't trip someone else up
 * down the line. Make sure to include references to e.g. github issues or
 * feature requests that pertain to the wart you're trying to work around.
 */

$.fn.vitaeFilePicker = function(settings) {
  response = {
    "id": 62,
    "name": "Example Resume",
    "filename": "9_50041821.docx20140307-3291-1rvacvy.docx",
    "tag_list": ["resume"],
    "download_url": "https://pa.chroniclevitae.com/api/documents/62/download",
    "updated_at": "2014-03-12T15:51:46-04:00"
  }
  return this.each(function() {
    $(document).delegate('a[data-vitae-file-picker]', "click", function(e) {
      e.preventDefault();
      var $selected = $(this);
      var $target_url = $($selected.data("vitae-file-picker-target-url"));
      var $target_name = $($selected.data("vitae-file-picker-target-name"));

      $selected.prev("span").text(response.name + ' ');
      $selected.text("(change)");
      $target_url.val(response.download_url);
      $target_name.val(response.filename);
    })
  })
}

$(function() {
  /* Our main navigation tabs use CSS hovering to reveal their menus; capybara
   * and poltergeist don't like this (although the developer of poltergeist
   * appears interested in making CSS :hover work).
   *
   * Refs:
   *   https://github.com/jonleighton/poltergeist/issues/106
   *   https://github.com/jnicklas/capybara/issues/832
   */

  $("#tabs a.tab-link").bind("mouseover", function(event) {
    var li = $(event.target).parent();
    li.children(".sub").show();
  });

  /* We want AJAX requests that fail to fail loudly.
   * Ideally, these will be picked up by our DetectErrorPage capybara plugin.
   */
  $(document).ajaxError(function(event, request, settings) {
    $("body").html(request.responseText);
    $("h1:first").append("(ajax error)");
  });
});
function sendApplicantData(data) {
  spinner.show();

  var $form = $("#edit_submission");

  var linkedInput = $("<input>").attr("type", "hidden")
                                .attr("name", "linkedin_data")
                                .val(JSON.stringify(data));

  $form.append(linkedInput);
  $form.submit();
}

function onProfileData(data) {
  var currentEmail = $(".apply-with-linkedin-wrapper").data("email-address");
  var newEmail = data['emailAddress'];

  if (currentEmail && (currentEmail !== newEmail)) {
    var firstName = data['firstName'];
    var lastName = data['lastName'];

    var message = "Your current email ${currentEmail} does not match the email from LinkedIn ${newEmail}. Are you sure you want to import data from ${firstName} ${lastName}'s account?"
    var confirmation = confirm(message);

    if (confirmation == true) {
      sendApplicantData(data)
    }
  } else {
    sendApplicantData(data)
  }
}
;
function watch_for_changes() {
  $("a").not(".ik(function() { return check_for_changes($(this)); });
  $("input").not(".ignore_check_for_changes").change(function() { handle_changes($(this)); });
  $("textarea").not(".ignore_check_for_changes").change(function() { handle_changes($(this)); });
  $("select").not(".ignore_check_for_changes").change(function() { handle_changes($(this)); });
}

function check_for_changes(the_link) {
  var changed_fields = $(".changed");
  var choice = true;
    if (changed_fields.length > 0) {
      choice = confirm("There are unsaved changes on this page.  Do you want to leave the pages(the_field) {
    the_field.addClass("changed");
}

// This function controls the boostrap dropdown for the responsive_new job application screen
$('div.btn-group ul.dropdown-menu li a').click(function (e) {
  e.preventDefault();

  if ($(this).attr('tab')) {
    var redirectInput = $("<input>").attr("type", "hidden").attr("name", "jumpToTab").val($(this).attr('tab'));
    $("#edit_submission").append($(redirectInput));
    $("#edit_submission").submit();
  }
});
$(document).ready(function() {
  // doing this approach so that the page doesn't depent on JS to render.
  $('#refresh_me').bind('custom', function() { wait_and_refresh(); });
  $('#refresh_me').trigger('custom', ['Custom', 'Event']);

});

function wait_and_refresh() {
  load_spinner();
  var dateNow = new Date();
  var warningTime = 5000;
  window.s src='/images/spinner.gif' alt='spinner'</img>");
}

function refresh_doc_list() {
  vardata){
    $('#required_documents').html(data);
  });
}

function refresh_document_status() {
  $("#check_status").fadeOut("slow");
  var me = $('#refresh_me');
  if (me.size() > 0) {
    var url = $('#refresh_me').html();
    $.ajax({
      url : url,
      success : function (html) {
        $("#job_application_status").html(html);
        load_spinner();
        if (html.length == 0) {
          // turn on the cert and submit buttons
          $("[id^=cert_and_submit]").show();
          refresh_doc_list();
        } else {
          var me = $('#refresh_me');
          if (me.size() == 0) {
            refresh_doc_list();
          }
        }
      }
    });
    $("#check_status").fadeIn("slow");
    wait_and_refresh();
  }
}
;
/* global window, document, $, VitaeFilepickerButton */


(function() {
  "use strict";

  // A JQuery plugin to invoke the vitae file picker on an element.
  $.fn.vitaeFilePicker = function(settings) {
    var options = $.extend({
      access_token: '',
      api: window.PeopleAdmin.vitaeBaseUrl + '/api',
      stylesheet: '/stylesheets/vitae-filepicker.css',
      fonts_dir: '/fonts',
      el: this.selector
    }, settings);

    return this.each(function(){
      var $this = $(this);
      var filepicker = new VitaeFilepickerButton(options, function(response, targetEvent){
        var $selected = $(targetEvent.currentTarget);
        var $target_url = $($selected.data("vitae-file-picker-target-url"));
        var $target_name = $($selected.data("vitae-file-picker-target-name"));

        $selected.prev("span").text(response.name + ' ');
        $selected.text("(change)");
        $target_url.val(response.download_url);
        $target_name.val(response.filename);
      });
    });
  };

  $(function() {
    function enableDocumentAddition(){
      $(document).delegate("a[data-activate-document-source]", "click", function(e) {
        var docSource = $(this).data("activate-document-source");
        $(".document-source").hide().filter("#document-" + docSource).show();
        $(".document-source-alternative").hide().filter("#document-alternative-" + docSource).show();
        $(":hidden[name='active-document-source']").val("document-" + docSource);
        e.preventDefault();
      });
      $('.document-source').hide().first().show();
      $('.document-source-alternative').hide().first().show();
    }

    $(document).delegate(".btn-primary", "click", function(e) {
      if ($('#document-source-ui').size() > 0) {
        e.preventDefault();
        $('#document-sourment[description]"]').removeAttr('name');
        });
        $('form.form').submit();
        $('.btn-primary').prop("disabled", true);
      }
    });

    $('#fallback-upload-form').toggleClass('sr-only');
    if ($('#document-source-ui').length > 0) {
      enableDocumentAddition();
    }

    var exposeFallbackForm = function(message) {
      window.scrollTo(0, 0);
      $('form.primary').hide();
      $('#sr-message').hide();
      $('#fallback-upload-form').toggleClass('sr-only');
      $('#error-messages')
        .html("<p class='error'>There was an error contacting Vitae.<br/>" +
              "Please use the file upload form.</p>")
        .find('p').effect("highlight", {color: 'red'}, 1500);
    };

    if(window.PeopleAdmin && window.PeopleAdmin.vitaeAccessToken) {
      if(window.PeopleAdmin.local_upload_only) {
        exposeFallbackForm();
      } else {
        $('a[data-vitae-file-picker]').vitaeFilePicker({
          errorHandler: exposeFallbackForm,
          access_token: window.PeopleAdmin.vitaeAccessToken
        });
      }
    }
  });
}());
$(document).ready(function ($) {
  $('#select_all').click(function () {
    set_checked_property(true);
  });
  $('#clear_all').click(function () {
    set_check(funct_card_list :checkbox').prop('checked', value);
  }

  if ($('#user_exists').val() == 'true') {
    $('#login_notice_popup').dialog(
      {
        modal: true,
        title: "",
        w    window.location = window.login_path
          },
          Cancel: function () {
            $(this).dialog("close");
          }
        }
      });
    $(".ui-dialog-titlebar").hide();
  }

});
// If vitae is in use, add a handler to display the opt-out (traditional) login
// form when the opt-out link is clicked#local-account').slideDown();
    return false;
  });

  // If a validation fails in a signup form, make sure the form is visible.
  if ($('#errorExplanation,#flash p.error').length) {
    $('#local-account').show();
    $('#hide-when-local-login-expanded').hide();
    $('#vitae-account.hide();
  $('#form_view').removeClass('hidden');
});
$(document).ready(function() {
  $('.logo').hover(function() {
    $this = $(this);
    $parent = $this.parent().data('location');
    var coordinates = $parent.split(',');

    if (coordinates.filter(Boolean).length > 0) {
      // X coordinate
      var left_coord = coordinates[0] + 'px';

      // Y coordinate
      var bottom_coord = coordinates[1] + 'px';

      $('#state-map-container').append("<div class='red-dot'></div>")
      $('.red-dot').css({'lef }
  }, function() {
    $('.red-dot').remove()
  });

  $('.logo').each(function(index) {
    $this = $(this);
    $parent = $this.parent().data('location');
    var coordinates = $parent.split(',');
    if (coordinates.filter(Boolean).length > 0) {
      // X coordinate
      var left_coord = coordinates[0] + 'px';

      // Y coordinate
      var bottom_coord = coordinates[1] + 'px';

      $('#state-map-container').append("<div class='circle'></div>")
      $('.circle').last().css({'left': left_coord, 'bottom': bottom_coord})
    }
  });
});
$(document).ready(function() {
  $("img[id^='btn_hide']").click(function () { hide_message($(this)); })on']").click(function () { hide_message($(this)); });

  if ($("#announcement_values").sortable != undefined) {
 ent, ui) { save_site_announcement_sort_order(ui); }
    });
  }
});

function hide_message(clicked) {
  var div_parent = "#" + $(clicked).parent().get(0).id;
  if (div_parent == "#system_message_close_all") {
    hide_all_info_messages();
  } else {
    var div_gparent = "#" + $(clicked).parent().parent().get(0).id;
    $(div_gparent).hide('slow');
    update_messages_header();
    save_hidden_message(clicked);
  }
}

function hide_all_info_messages() {
  kids = $("#system_messages").children(".system_msg");
  var alert_count = 0;
  var msg_id_list = new Array;
  for (var i = 0; i < kids.length; i++) {
    if ($(kids[i]).is(".system_msg_alert")) {
      alert_count++;
    } else {
      msg_id_list.push(get_db_id_from_div_id(kids[i]));
      $(kids[i]).hide('fast');
    }
  }
  if (alert_count > 0) {
    if (alert_count == 1) {
      set_singular_message_header();
    }
    remove_close_all_button();
  } else {
    $("#system_messages").hide('slow');
  }
  save_on_session(msg_id_list);
}

function remove_close_all_button() eader").text("A Message from the Administrator");
}

function update_messages_header() {
  kids = $("#system_messages").children(".system_msg");
  var visible_count = -1;
  var is_alert_left = false;
  for (var i = 0; i < kids.length; i++) {
    if ($(kids[i]).is(":visible")) {
      if ($(kids[i]).is(".system_msg_alert")) {
        is_alert_left = true;
      }
      visible_count++;
    }
  }
  if (visible_count == 0) {
    $("#system_messages").hide('slow');
  } else {
    if (visible_count == 1) {
      set_singular_message_header();
      if (is_alert_left) {
        remove_close_all_button();
      }
    }
  }
}

function get_db_id_from_div_id(div) {
  txt_array = div.id.split("_");
  msg_id = txt_array[txt_array.length - 1]; // get msg id from button name
  return msg_id;
}

function save_hidden_message(clicked) {
  msg_id = get_db_id_from_div_id(clicked.get(0));
  save_on_session([msg_id]);
}

function save_on_session(msg_id_list) {
  url = $("#hide_on_session_url").attr('href') + 'site_announcement_ids=' + msg_id_list;
  $.getJSON(url, function(data) {});
}

function save_site_announcement_sort_order(ui) {
  sort_url = $("#sort_url").attr('href');
  sorted_announcements = $("#announcement_values").sortable('serialize');
  url = sort_url + sorted_announquire&&require,o=0;o<ckbone=r(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(e,t,n,r){{var i=e.Backbone,s=[],o=(s.push,s.slice);s.splice}t.VERSION="1.1.2",t.$=r,t.noConflict=function(){return e.Backbone=i,this},trn r.s,arsh(s);i.events.all;ret_events))&&+)r(;++r<i;)(n=e[r]).callback.apply(n.ctx,t);retu|"object"!=typeof r||(i=this),t[e](r,i,this),this}}),a.bs.changed={},this.initialize.apply(this,arguments)};n.extend(f.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return n.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)]},e.get,r);reeturn oid 0;retur==e?!n.isEmpty(thi.isEqual(reviousAttributes?tunctionc",tis.sync( s=tlace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(e){return e},clone:function(){isNew:fun this._vaid",this,r,n.extend(t,{validationError:r})),!1):!0}});var h=["keys","values","pairs","invert","pick","omit"];n.each(h,function(e){f.prototype[e]=function(){var t=o.call(arguments);return t.unshift(thirguments),e&&this.reset(e,n.extend({silent:!0},t))},m={add:!0,remove:!0,merge:!0},g={add:!0,remove:!1};n.extend(p.){retync:n(e,t){is,tngth)&t:!0}t){rt=this.aunctiotion(ee:futhis._byId[e]||this._byId[e.id]||this._byId[(var n in e)if(e[n]!==t.get(n))return!1;return!0})},,this)k:func("sync"){t.wait&&r.add(e,t),i&&i(e,n,t)},unctionction(){this.l.trigger("invallection=this),e. e.collection,byId[t.id]=t)),this.trigger.apply(this,arguments))}});var v=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle"ts);return t.unshift(this.models),n[e].apply(n,t)}});var (e){return e.gialize.apply(this,arguments),this.delegateEvents()},_=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];n.extend(b.prototype,a,{tagName:"div",$:function(e){retutializereturn this.el=this.$el[0]o?this.$el.on(s,rturn this.$el.ohis,"tagNn.extend(o,i));return r.trigger("request",r,l,i),l};var w=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),k={create:"POST",update:"PUT"ax=function(){rbindRoutes(),this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,E=/(\(\?)?:\w+/g,S=/\*\w+/g,D=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.oute",r,)}),this}:function(e,);null!=(e=t.po[^?]*?)"),new RegEx=r.length-1?e||nulation=window.location,this.history=window.history)},M=/^[#\/]|\s+$/g,A=/^\/+|\/+$/g,H=/msie [\w.]+/,O=/\/$/,j=/#.*$/;N.station.pais).locationgth))})}retclearIn(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(){var e=this.getFragment();return e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment?!1:(this.ifrreturn t.replace))}ret:|#).*$/,"");e.replace(&n.extend(r.prototype,e),r.__super__=i.prototype,r};f('=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}};return t})},{underscore:2}],2:[function(e,t,n){(function(){var e=this,r=e._,i={},s=Array.prototype,o=Object.prototype,a=Function.prototype,l=s.push,u=s.slice,c=s.concat,d=o.toString,f=o.hasOwnProperty,h=s.forEach,p=s.map,m=s.reduce,g=s.reduceRight,v=s.filter,y=s.every,b=s.some,_=s.indexOf,x=s.le:this instanceof C?void(this._wrapped=e):new C(e)};"undefined"!=typeof n?("undefined"!=typeof t&&t.exports&&(n=t.exports=C),n.++)if(t.call(n,e:(E(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r)};var S="Reduce of empty arro):(n=e,i=!0)}),!i)thr(n=e[l],i=!0)}),(e,i,s){return t.c(e,functiilter(e,functi,s,o){return(r=r&&ts,o){return r||(r=t.c=_?-1!=e. C.map(e,function(e){return(r?t:e[t]).apply(e,n)})},C.pluck=function(e,t){return C.map(e,C.property(t))},C.where=functiodWhere,s,o){,s,o){var function((e.lennull==e?Cd 0===,function(s,M(function(e,h(n):e[t]=[n]C.countBy=M(fun{var a=s+ogth===+e?0:e.length===+e.lengull==e?voi,t,n){r||n?e[e.length-1]:u.cop=functio.comparguments(e(e)}),n)};tion(e){retu;return E(e,func==n:C.co=function(){retn C.every(t,frn C.f,n=0;e>n;i>r;r++)t?Of(t,n);for(;i i=r?n:e,0),i=0,s=new Array(r);r>incat(u.calth;)r.pushs");returnturn C.hn setTimC.delay.appi=null):o||r=setTiurn n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},C.gth-1;n>tion(){t=[];for(h,r=new  Array(n)e),r=0,i=n.length;i>r;in e)C.iss,1),fu1));retr(var r in if(t)forsObjec.extenas(t,c)&&!p(),u};C.igth;for(var .isElement=fuy=w||functill(e)},C.isObject=function(e){return e===Object(e)},E(["Argume]=function(t){return d.call(t)=="[object uments=function(e){return!(!e||!C.has(e,"callee"))}),"function"!=typeof/./&&(C.isFunction=ction(e))},C.isNaN=fturn e==="==d.call(e)},l===e}void 0===e},Cll(e,t)},C.noConflict=function(){return e._=C.constant=operty=fun0;for(vath.max(0,==t&&(t=e,e=0),eow=Date.now||function(){return(new Date).getTime()};var j={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};j.unescape=C.invert(j.escape);var F={escape:new RegExp("["+C.keys(j.escape).join("")+"]","g"),unescape:new RegExp("("+C.keys(j.unescap(""+t).repid 0;var l.apply(e,argumentC.uniqueId=function(e){var t=++L+"";return e?e+t:t},C.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"rce="fun"+o+"}ar $=function(e){return this._chain?C(e).chain():e};C.mixin(C),E(["pop",ice"!=e||0!==n.length||deleteurn $.call(this,t.apply(this.otype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("unders.template(t,e)},e},u=l();u.create=l,n["default"]=u},{"./handlebars/base":4,"./handlebars/exception":5,"./handlebars/runtime":6,"./handlebars/safe-string":7,"./hael,10):1;e.log(r,t)})}function s(e,t){m.log(e,t)}var o=e("./utils"),a=e("./exception")["default"],l="1.3.0";n.VERSION=l;var u=4;n.COMPILER_REVISION=u;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=c;var d=o.isArray,f=o.isFunction,h=o.toString,p="[object Object]";n.HandlebarsEnvironment=r,r.prohis.helpers,e)}e)===p?o.extend(this.partials,e):this.partials[e]=t}};var m={methodMap:{0:"debug",1:"info",2:"warn",3f console&&console[n]&&con;var g=function(e){var t={};return o.extend(t,e),t};n.createFrame=g},{"./excepti];n&&(this.lineNumber=n,this.column=t.firstColumn)}var i=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error, Function?e(n,o):void 0}function l(){return""}var u=e("./utils"),c=e("./exception")["default"],d=e("./base").COMPILER_REVISION,f=e("./base").REVISION_CHANGES;n.checkRevision=r,n.template=i,n.programWithDepth=s,n.program=o,n.invokePartial=a,n.noop=l},{"./base":4,"./exception(e,t,n){"use stricprototype.toString=function(){return""+this.string},(e){return e||0===e?h(e)&&0===e.length?!0:!1:!0}var a=e("./safe-string")["default"],l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,c=/[&<>"'`]/;n.extend=iing=d;var fnction"==typeof e&&"[object Function]"===d."object"==typeof e?"[object Array]"===d.call(e):!1};n.isArray=h,n.esca(e,t){t.exports=e("./dist/cjs/handlebars.(e,t){t.exports=e("handlebars/runtime")["defauires a window with a document");return(e.jQuery=or),st},typeof t===Tt&&(e.jon(n){returt)}for(var st,ot,at="2.5.1",lt=this,ut=Math.round,ct=0,dt=1,ft=2,ht=3,pt=4,mt=5,gt=6,vt={},yt={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},bt="undefined"!=typeof t&&t.exports&&"undefined"!=typeof e,_t=/^\/?Date\((\-?\d+)/i,xt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,wt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,kt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Tt=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ct=/\d\d?/,Et=/\d{1,3}/,St=/\d{1,4}/,Dt=/[+\-]?\d{1,6}/,Nt=/\d+/,Mt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,At=/Z|[\+\-]\d\d:?\d\d/gi,Ht=/T/i,Ot=/[\+\-]?\d+(\.\d{1,3})?/,jt=/\d/,Ft=/\d\d/,Lt=/\d{3}/,Pt=/\d{4}/,qt=/[+-]?\d{6}/,Rt=/[+-]?\d+/,$t=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,It="YYYY-MM-DDTHH:mm:ssZ",Yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],zt=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Ut=/([\+\-]|\d\d)/gi,Bt="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Wt={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Xt={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Gt={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Vt={},Jt="DDD w W M W".split(" "),Qt={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:func,dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return f(this.year()%100,2)},YYYY:function(){return f(this.year(=this.year(),t=e>=0?"+":"-";return t+f(Math.abs(e),6)},gg:function(){return f(this.weekYear()%100,2)},gggg:function(){return f(this.weekYear(,5)},GG:function(){return f(this.isoWeekYear()%100,2)},GGGG:function(){return f(this.isoWeekYear(),4)},GGGGG:function(){return f(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return t this.lang().meridiem(this.hours(),tthis.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds},SS:function(){return f(_(this.milliseconds()/10),2)),urn;return 0>e&&(e=-e,t="-"),t+f(_(e/60),2)+f(_(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Kt=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Jt.length;)ot=Jt.pop(),Qt[ot+"o"]=s(Qt[ot],ot);for(;Zt.length;)ot=Zt.pop(),Qt[ot+ot]=e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:functie(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weedaysMin:functi".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM n(e){unction(e){return"p"===(e+"").toLowerCasm:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT"._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month"urn"functio"];returinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return Q(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date"o._f=t,._l=i,o.r(),et(o).uton(e)&&e.hasOwnProperty("_lang")&&(r._lang=e._lang),r},st.version=at,st.fn._lang=sturn e&&e._laceof a||null!=ct")},st.isDuration=function(e){return e instanceof l},ot=Kt.length-1;ot>=0;--ot)b(Kt[ot]);for;return null!=e?u(t._pf,e):t._pf.userInvalidated=!0,t},st.parseZone=function(e){return st(e).parseZone()},u(st.fn=lueOfset||0)},lang("eunction(){re:mm:ss.S),e.hours(),e.minutes(),e.seconds(),e.millisecons._isUTC?st.u)>0:!1},parsingFlags:function(){return u({},this._pf)},invalidAt:function(){return this._al:funce||se?st.dura?st.d"===ton(this.ize(!t)},lse";returnn,thish(0)turn nt.updatehis.wetOf(e).allisecondlliseco"ms"on(eon(e)UTC=!0,t!==e&&h(this,st.duration(t-e,"m"),1,!0),this)},zon(){return zm):"string"==typeof (e){return eInMonth:fu("year")arter:fun()._week.doyt=Q(tg().weekthis,1,4ang()._weekrn ny()%rn e=ion(e){return e===n?this._lang:(this._lang=M(e),this)}}),ot=0;ot<Bt.length;ot++)tt(Bt[ot].toLowerCase().replace(/s$/,""),Bt[ot]);tt("year","FullYear"),st.fn.days=st.fn.day,st.fn.months=st.fn.month,st.fn.weeks=st.fn.week,st.fn.isoWeeks=st.fn.isoWeek,st.fn.toJSON=says=s%),a.yearays+this.his.+=n._days-=n.funthis["as"+e.charAt(0).toUppe?"T":"")+(r?r+"H":"")+(i?i+"M":"")+(s?s+"S":""):"P0D"}});for(ot in Wt)Wt.hasOwnProperty(ot)&&(rt(ot,Wt[ot]),nt(ot.toLorn(+this-31536e6*this."th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),bt?(t.exports=st,it(!0))onfig().noGlobal!==!0&&it(r.config().noGlobal===n),st}):it()}).call(this)},{}],13:[function(e){var t,n,r,i,s,o,a,l,u;r=e("backbone"),t=r.$=e("jquery"),u=e("underscore"),a=e("./models/state"),i=e("./views/Trigger"),n=t(e("./templates/fontTrigger")()),o=e("./templates/fontStyles"),l=function(){return t("body").append(n),setTimeout(function(){return n.remove()},1500)},s=function(){var e,n,r;return n=t("head"),r=t('<link rel="stylesheet">'),e=o({fonts_dir:a.get("fonts_dir")}),n.append(e),n.append(r),r.attr("href",a.get("stylesheet"))},window.vitaeFilePicker={version:"2.0.2",init:function(e){return a.set(e),s(),l(),e.el?this.addButton(e.el,e.callback,e.errorHandler):void 0},addButton:function(e,t,n){var r;return t||(t=a.get("callback")),n||(n=a.get("errorHandler")),r=new i({el:e,callback:t,errorHandler:n}),r.$el}},window.VitaeFilepickerButton=function(e,t,n){return t&&(e.callback||(e.callback=t)),n&&(e.errorHandler||(e.errorHandler=n)),window.vitaeFilePicker.init(u.omit(e,"el")),window.vitaeFilePicker.addButton(e.el,e.callback,e.errorHandler)}},{"./models/state":19,"./templates/fontStyles":26,"./templates/fontTrigger":27,"./views/Trigger":48,backbone:1,jquery:11,underscore:2}],14:[function(e,t){var n;n=e("backbone"),t.exports=n.Collection.extend({model:e("../models/Document"),comparator:"updated_at"})},{"../models/Document":16,backbone:1}],15:[function(e,t){var n;n=e("backbone"),t.exports=n.Collection.extend({model:e("../models/Folder")})},{"../models/Folder":17,backbone:1}],16:[function(e,t){var n,r,i;i=e("underscore"),n=e("backbone"),r=e("moment"),t.exports=n.Model.extend({defaults:{download_url:"missing download url",folders:!1,name:"Untitled",tag_list:!1,updated_at:"Unknown",selected:!1},constructor:function(e,t){return nu,parse:funcize:function(){return i.bindAll(this,"formattedDate")},formattedDate:function(){return r(this.get("updated_at")).fromNow()}})},{backbone:1,moment:12,underscore:2}],17:[function(e,t){var n;n=e("backbone"),t.exports=n.Model.extend({defaults:{documents:!1,folders:!1,name:"folder",selected:!1},initialize:function(){return this.get("folders")&&this.createFoldersCollection(),this.get("documents")?this.createDocumentsCollection():void 0},createFoldersCollection:function(){var t,n;return t=e("../collections/Folders"),n=new t(this.get("folders")),this.set("folders",n)},createDocumentsCollection:function(){var t;return t=e("../collections/Documents"),this.set("documents",new t(this.get("documents")))}})},{"../collections/Documents":14,"../collections/Folders":15,backbone:1}],18:[function(e,t){var n,r,i;r=e("backbone"),n=r.$,i=e("../vent"){return this.get("api")+"/"+this.get("resourn i.trigger("api:error","Error connecting to Vitae!")})},fetch:function(){var e;return e={headers:{Authorization:"Bearer "+this.get("access_token")}},"XDomainRequest"in window&&null!=window.XDomainRequest?this.ieFetch():r.Model.prototype.fetch.call(this,e)},ieFetch:function(){var e,t;return e=this.url()+"?access_token="+this.get("access_token"),t=new XDomainRequest,t.timeout=5e3,t.onerror=function(){},t.ontimeout=function(){},t.onprogress=function(){},t.onload=function(e){return function(){var r;return r=n.parseJSON(t.responseText),e.set(e.parse(r))}}(this),t.open("get",e),setTimeout(function(){return t.send()},0)}})},{"../vent":34,backbone:1}],19:[function(e,t){var n,r;n=e("backbone"),r=n.Model.extend({defaults:{access_token:!1,api:"https://chroniclevitae.com/api",documents_path:"dossier/self",letters_path:"recommendation_letters",noSelectionMessage:"Please Select a Document...",selectedDocument:!1,folder_id:!1,uploads_path:"documents/upload",stylesheet:"/dev/app.css",fonts_dir:"/dev/fonts",callback:function(){rfunction(){return alert("Error connecting to Vitae.")}},urlFor:function(e){return this.get("api")+"/"+this.get(e)}}),t.exports=new r},{backbone:1}],20:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){function s(){return'\n	<div class="vit_file-uploader"></div>\n'}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var o,a="",l=this;return o=n.unless.call(t,t&&t.noUploads,{hash:{},inverse:l.noop,fn:l.program(1,s,i),data:i}),(o||0===o)&&(a+=o),a+='\n<div class="vit_folder-contents__header">\n	<span class="vit_folder-contents__header__name">Name</span>\n	<span class="vit_folder-contents__header__updated">Updated</span>\n</div>\n<ul class="documents__list"></ul>'})},{"hbsfy/runtime":10}],21:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="vit_modal__content"></div>'})},{"hbsfy/runtime":10}],22:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<span class="vit_folder-contents__filename">',(o=n.name)?s=o.call(t,{hash:{},data:i}):(o=t&&t.name,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+'</span>\n<span class="vit_folder-contents__timestamp">',(o=n.formattedDate)?s=o.call(t,{hash:{},data:i}):(o=t&&t.formattedDate,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"</span>\n"})},{"hbsfy/runtime":10}],23:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="vit_folder-nav"></div>\n<div class="vit_folder-contents"></div>'})},{"hbsfy/runtime":10}],24:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<li class="vit_folder-contents__folder -empty">',(o=n.message)?s=o.call(t,{hash:{},data:i}):(o=t&&t.message,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"</li>"})},{"hbsfy/runtime":10}],25:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<h2 class="vit_folder-nav__folder__name">',(o=n.name)?s=o.call(t,{hash:{},data:i}):(o=t&&t.name,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"</h2>\n"})},{"hbsfy/runtime":10}],26:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<style>\n	@font-face {\n	  font-family: "Source Sans Pro";\n	  font-style: normal;\n	  font-weight: normal;\n	  src: url(\'',(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/source-sans-pro-regular.eot?v1');\n	  src: url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/source-sans-pro-regular.eot?v1#iefix') format(\"embedded-opentype\"), url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/source-sans-pro-regular.woff?v1') format(\"woff\"), url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+'/source-sans-pro-regular.svg?v1#source-sans-pro-regular\') format("svg");\n	}\n	@font-face {\n	  font-family: "Source Sans Pro";\n	  font-style: normal;\n	  font-weight: bold;\n	  src: url(\'',(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/source-sans-pro-bold.eot?v1');\n	  src: url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/source-sans-pro-bold.eot?v1#iefix') format(\"embedded-opentype\"), url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/source-sans-pro-bold.woff?v1') format(\"woff\"), url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+'/source-sans-pro-bold.svg?v1#source-sans-pro-bold\') format("svg");\n	}\n	@font-face {\n	  font-family: "vitae-filepicker";\n	  font-style: normal;\n	  font-weight: normal;\n	  src: url(\'',(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/vitae-filepicker.eot?v1');\n	  src: url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/vitae-filepicker.eot?v1#iefix') format(\"embedded-opentype\"), url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"/vitae-filepicker.woff?v1') format(\"woff\"), url('",(o=n.fonts_dir)?s=o.call(t,{hash:{},data:i}):(o=t&&t.fonts_dir,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+'/vitae-filepicker.svg?v1#vitae-filepicker\') format("svg");\n	}\n</style>'})},{"hbsfy/runtime":10}],27:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="vit vit_font-trigger" style="position: absolute; height: 0; width: 0; overflow: hidden; z-index: -100; left: 100%;">\n	<span class="vit_font-trigger__icons">.</span>\n	<span class="vit_font-trigger__regular">.</span>\n	<span class="vit_font-trigger__bold">.</span>\n	<span class="vit_font-trigger__italic">.</span>\n</div>'})},{"hbsfy/runtime":10}],28:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="vit_filepicker__header">\n	<h1 class="vit_logo">\n		<a class="vit_logo__link" href="http://chroniclevitae.com" target="_blank"><span class="hidden">Vitae</span></a>\n	</h1>\n</div>\n\n<div class="vit_filepicker__content">\n</div>\n\n<div class="vit_filepicker__actions">\n	<span class="vit_filepicker__filename"></span>\n	<button class="vit_button -select">Select</button>\n	<button class="vit_button -cancel -low">Cancel</button>\n</div>\n'})},{"hbsfy/runtime":10}],29:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<div class="vit_tab__content vit_tab-loader">\n	<p class="vit_tab-loader__message">',(o=n.message)?s=o.call(t,{hash:{},data:i}):(o=t&&t.message,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"</p>\n</div>\n"})},{"hbsfy/runtime":10}],30:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<span class="vit_folder-contents__foldername">',(o=n.name)?s=o.call(t,{hash:{},data:i}):(o=t&&t.name,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"</span>\n"})},{"hbsfy/runtime":10}],31:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="vit_tabs-nav">\n</div>\n<div class="tabs-content">\n</div>'})},{"hbsfy/runtime":10}],32:[functmum allowed file size is 10mb per file.</em>\n</p>\n'})},{"hbsfy/runtime":10}],33:[function(e,t){var n=e("hbsfy/runtime");t.exports=n.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o,a="",l="function",u=this.escapeExpression;return a+='<li class="vit_file-uploader__document -uploading">\n	<span class="vit_file-uploader__document__name">',(o=n.name)?s=o.call(t,{hash:{},data:i}):(o=t&&t.name,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+'</span>\n	<span class="vit_file-uploader__document__status">',(o=n.status)?s=o.call(t,{hash:{},data:i}):(o=t&&t.status,s=typeof o===l?o.call(t,{hash:{},data:i}):o),a+=u(s)+"</span>\n</li>"})},{"hbsfy/runtime":10}],34:[function(e,t){var n,r;r=e("underscore"),n=e("backbone"),t.exports=r.extend({},n.Events)},{backbone:1,underscore:2}],35:[function(e,t){var n,r;n=e("backbone"),r=e("../vent"),t.exports=n.View.extend({className:"vit_folder-contents__folder vit_icon -file",selectedClass:"-selected",tagName:"li",template:e("../templates/document.hbs"),events:{click:"select"},initialize:function(){return this.model.set("formattedDate",this.model.formattedDate),this.listenTo(r,{"document:select":this.deselect,"folder:select":this.deselect,"document:upload":this.deselect}),this.render()},render:function(){var e;return e=this.template(this.model.toJSON()),this.$el.html(e)},select:function(){return this.model.get("isSelected")?void 0:(r.trigger("document:select",this.model.attributes),this.model.set("isSelected",!0),this.$el.addClass(this.selectedClass))},deselect:function(){return this.model.set("isSelected",!1),this.$el.removeClass(this.selectedClass)}})},{"../templates/document.hbs":22,"../vent":34,backbone:1}],36:[function(e,t){var n,r,i;n=e("./Tab"),r=e("../models/Tab"),i=e("../vent"),t.exports=n.extend({template:e("../templates/documentPicker"),loadingMessage:"Fetching your documents...",ui:{documents:".vit_folder-contents",folders:".vit_folder-nav"},initialize:function(e){return this.model=new r({access_token:e.parent.get("access_token"),api:e.parent.get("api"),label:"Documents",resourcePath:e.parent.get("documents_path")}),this.listenTo(this.model,{"change:results":this.renderFolders}),this.listenTo(i,{"folfunction(){return this.preRender(),this.model.fetch()},renderFolders:function(){var t,n,r;return r=this.model.get("results"),t=e("../collections/Folders"),n=e("./Folders"),this.foldersView=new n({collection:new t(r)}),this.render(),this.ui.$folders.append(this.foldersView.el),this.ui.$folders.find(".vit_folder-nav__folder").first().click()},renderDocuments:function(e){return this.model.set("selectedDocument",!1),this.model.set("selectedFolder",e),this.ui.$documents.html(e.documentsView.render())}})},{"../collections/Folders":15,"../models/Tab":18,"../templates/documentPicker":23,"../vent":34,"./Folders":41,"./Tab":45}],37:[function(e,t){var n,r,i,s,o,a,l,u;u=e("underscore"),n=e("jquery"),r=e("backbone"),a=e("./FileUploader"),s=e("./Document"),o=e("./Subfolder"),i=e("../models/Document"),l=e("../templates/uploadingDocument"),t.exports=r.View.extend({className:"vit_folder-contents__inner",emptyMessage:"Folder is empty.",emptyTemplate:e("../templates/empty"),template:e("../templates/Documents"),initialize:function(e){return this.options=e,u.bindAll(this,"createDocument","addFolder","addDocument","addDocumentPlaceholder"),this.preRender()},addDocument:function(e){var t,n;return t=new i(e),this.$uploadedDocument=this.createDocument(t),this.fileUploader.$placeholder.replaceWith(this.$uploadedDocument),null!=(n=this.$emptyTemplate)&&n.remove(),this.$uploadedDocument.click()},addDocumentPlaceholder:function(e){var t;return t=this.fileUploader.getPlaceholder(e),this.$documentsList.prepend(t)},createDocument:function(e){var t;return t=new s({model:e}),t.el},addFileUploader:function(){return this.fileUploader=new a({el:this.$(".vit_file-uploader"),folder_id:this.options.folder_id}),this.fileUploader.on({"upload:start":this.addDocumentPlaceholder,"upload:success":this.addDocument})},addFolder:function(e){var t;return t=new o({model:e}),t.el},getMarkup:function(){var e,t;return this.collection.length>0?(e=this.collection.map(this.createDocument).reverse(),(null!=(t=this.folders)?t.length:void 0)>0?this.folders.map(this.addFolder).concat(e):e):this.$emptyTemplate=n(this.emptyTemplate({message:this.emptyMessage}))},renderDocumentList:function(){return this.$documentsList=this.$(".documents__list"),this.$documentsList.html(this.getMarkup())},preRender:function(){return this.$el.html(this.template({noUploads:this.options.noUploads})),this.options.noUploads?void 0:this.addFileUploader()},render:function(){return this.renderDocumentList(),this.options.noUploads||this.fileUploader.render(),this.$el}})},{"../models/Document":16,"../templates/Documents":20,"../templates/empty":24,"../templates/uploadingDocument":33,"./Document":35,"./FileUploader":39,"./Subfolder":44,backbone:1,jquery:11,underscore:2}],38:[function(e,t){var n,r,i,s,o,a,l,u;n=e("backbone"),u=e("underscore"),r=e("./DocumentPicker"),s=e("./Tab"),o=e("./Tabs"),i=e("./LettersTab"),l=e("../vent"),a=e("../models/state"),t.exports=n.View.extend({className:"vit_filepicker",selectedClass:"-selected",template:e("../templates/layout"),events:{"click .vit_button.-cancel":"close","click .vit_button.-select":"submit"},initialize:function(){return this.tabs=[new r({parent:a}),new i({parent:a})],this.tabsView=new o(this.tabs),this.render(),this.listenTo(l,{"api:error":this.errorAndClose,"modal:close":this.remove,"document:select":this.setSelected,"folder:select":this.unsetSelected,"document:upload":this.unsetSelected})},close:function(){return l.trigger("close:modal"),u.each(this.tabs,function(e){return e.remove()}),this.tabsView.remove(),this.remove()},errorAndClose:function(e){return a.get("errorHandler")(e),this.close()},render:function(){return this.$el.append(this.template()),this.ui={content:this.$(".vit_filepicker__content"),filename:this.$(".vit_filepicker__filename")},this.ui.content.append(this.tabsView.el),this.ui.filename.text(a.get("noSelectionMessage"))},setSelected:function(e){return a.set("selectedDocument",e),this.ui.filename.addClass(this.selectedClass),this.ui.filename.text(e.name)},unsetSelected:function(){return a.set("selectedDocument",!1),this.ui.filename.removeClass(this.selectedClass),this.ui.filename.text(a.get("noSelectionMessage"))},submit:function(){var e;return e=a.get("selectedDocument"),e?(a.get("callback")(e,a.get("event")),this.close()):alert(a.get("noSelectionMessage"))}})},{"../models/state":19,"../templates/layout":28,"../vent":34,"./DocumentPicker":36,"./LettersTab":42,"./Tab":45,"./Tabs":47,backbone:1,underscore:2}],39:[function(e,t){var n,r,i,s,o,a,l;l=e("underscore"),n=e("jquery"),r=e("backbone"),a=e("../vent"),o=e("../models/state"),s=e("../templates/uploadingDocument"),i=e("simpleUpload"),t.exports=r.View.extend({className:"vit_file-uploader",template:e("../templates/uploader"),inactiveClass:"-inactive",status:{error:"Something went wrong.",success:"Success!",uploading:"Uploading..."},initialize:function(){return l.bindAll(this,"onSubmit","onComplete","reportError","getPlaceholder")},create:function(){var e;return null!=(e=this.uploader)&&e.destroy(),this.uploader=new i({url:o.urlFor("uploads_path"),button:this.$(".vit_uploader__button")[0],cors:!0,maxSize:10240,name:"document",onComplete:this.onComplete,onError:this.reportError,onSubmit:this.onSubmit,responseType:"json"})},getPlaceholder:function(e){return this.$placeholder=n(s({name:e,status:"Uploading..."})),this.$status=this.$placeholder.find(".vit_file-uploas:function(e){return this.trigger("upload:success",e)},onSubmit:function(e){return this.uploader.setData({access_token:o.get("access_token"),folder_id:o.get("folder_id")}),a.trigger("document:upload"),this.trigger("upload:start",e)},onComplete:function(e,t){var n,r;return n=null!=t?null!=(r=t.results)?r[0]:void 0:void 0,n?this.markSuccess(n):this.reportError()},reportError:function(e,t,n,r){return this.$placeholder.removeClass("-uploading").addClass("-error"),this.$status.text(r||this.status.error)},render:function(){return this.$el.html(this.template()),this.create()}})},{"../models/state":19,"../templates/uploader":32,"../templates/uploadingDocument":33,"../vent":34,backbone:1,jquery:11,simpleUpload:49,underscore:2}],40:[function(e,t){var n,r,i,s,o;o=e("underscore"),n=e("backbone"),r=e("./Documents"),i=e("../models/state"),s=e("../vent"),t.exports=n.View.extend({className:"vit_folder-nav__folder",tagName:"li",template:e("../templates/folder.hbs"),selectedClass:"-selected",events:{click:"select"},initialize:function(){return this.createDocumentsView(),this.folders=this.getFolders(),this.listenTo(s,"folder:select",this.deselect),this.render()},createDocumentsView:function(){return this.documentsView=new r({collection:this.model.get("documents"),folders:this.model.get("folders")})},deselect:function(){return this.model.set("isSelected",!1),this.$el.removeClass(this.selectedClass)},getFolders:function(){var t,n,r;return n=this.model.get("folders"),n?(t=e("./Folders"),r=new t({collection:n}),r.el):void 0},select:function(e){return o.result(e,"stopPropagation"),this.model.get("isSelected")?void 0:(s.trigger("folder:select",this),i.set("folder_id",this.model.id),this.model.set("isSelected",!0),this.$el.addClass(this.selectedClass))},render:function(){return this.$el.attr("id","folder-"+this.model.id),this.$el.empty().html(this.template(this.model.attributes)),this.$el.append(this.folders)}})},{"../models/state":19,"../templates/folder.hbs":25,"../vent":34,"./Documents":37,"./Folders":41,backbone:1,underscore:2}],41:[function(e,t){var n;n=e("backbone"),t.exports=n.View.extend({className:"vit_folder-nav__list",tagName:"ul",initialize:function(){return this.render()},render:function(){var t;return t=e("./Folder"),this.collection.each(function(e){return function(n){var r;return r=new t({model:n}),e.$el.append(r.el)}}(this)),this.$el}})},{"./Folder":40,backbone:1}],42:[function(e,t){var n,r,i;n=e("./Tab"),r=e("../models/Tab"),i=e("../vent"),t.exports=n.extend({loadingMessage:"Fetching Letters of Recommendation...",initialize:function(e){return this.model=new r({access_token:e.parent.get("access_token"),api:e.parent.get("api"),label:"Letters",resourcePath:e.parent.get("letters_path")}),this.listenTo(this.model,{"change:results":this.renderLetters}),this.preRender(),this.model.fetch()},renderLetters:function(){var t,n;return t=e("../collections/Documents"),n=e("./Documents"),this.documentsView=new n({collection:new t(this.model.get("results")),emptyMessage:"No Letters of Recommendation Found.",noUploads:!0}),this.render(),this.$el.html(this.documentsView.render())}})},{"../collections/Documents":14,"../models/Tab":18,"../vent":34,"./Documents":37,"./Tab":45}],43:[function(e,t){var n,r,i,s;n=e("jquery"),s=e("underscore"),r=e("backbone"),i=e("../vent"),t.exports=r.View.extend({className:"vit vit_modal",contentWrapperSelector:".vit_modal__content",template:e("../templates/Modal"),initialize:function(e){return this.render(null!=e?e.content:void 0),this.open(),this.listenForClose()},close:function(){return i.trigger("modal:close"),n(dofunction(e){return 27===e.keyCode?this.close():void 0},listenForClose:function(){return s.bindAll(this,"close","closeOnEsc"),n(document).on("keydown.vitae",this.closeOnEsc),this.listenTo(i,"close:modal",this.close)},open:function(){return this.$el.appendTo("body")},render:function(e){return this.$el.html(this.template()),this.$contentWrapper=this.$(this.contentWrapperSelector),this.$contentWrapper.append(e)}})},{"../templates/Modal":21,"../vent":34,backbone:1,jquery:11,underscore:2}],44:[function(e,t){var n,r,i;n=e("jquery"),r=e("backbone"),i=e("../vent"),t.exports=r.View.extend({className:"vit_folder-contents__folder vit_icon -folder",selectedClass:"-selected",tagName:"li",template:e("../templates/subfolder.hbs"),events:{click:"select"},initialize:function(){return this.render()},render:function(){var e;return e=this.template(this.model.toJSON()),this.$el.html(e)},select:function(){return n("#folder-"+this.model.id).click()}})},{"../templates/subfolder.hbs":30,"../vent":34,backbone:1,jquery:11}],45:[function(e,t){var n,r,i,s,o;o=e("underscore"),r=e("backbone"),i=e("./TabLabel"),s=e("../models/Tab"),n=r.$,t.exports=r.View.extend({selectedClass:"-selected",className:"vit_tab",model:new s,loadingTemplate:e("../templates/loading"),loadingMessage:"",preRender:function(){return this.createLabel(),this.$preloader=n(this.loadingTemplate({message:this.loadingMessage})),this.$el.html(this.$preloader)},createLabel:function(){return this.label=new i({label:this.model.get("label")})},setUI:function(){return this._ui||(this._ui=o.extend({},this.ui)),this.ui={},o.each(this._ui,function(e){return function(t,n){return e.ui["$"+n]=e.$(t)}}(this))},show:function(){return this.$el.addClass(this.selectedClass)},hide:function(){return this.$el.removeClass(this.selectedClass)},removePreloader:function(){on(e){return function(){return e.$preloader.remove()}}(this),200)},render:function(e){return this.removePreloader(),this.template&&this.$el.append(this.template(e)),this.ui?this.setUI():void 0}})},{"../models/Tab":18,"../templates/loading":29,"./TabLabel":46,backbone:1,underscore:2}],46:[function(e,t){var n,r;n=e("backbone"),r=e("../vent"),t.exports=n.View.extend({className:"vit_tabs__label",selectedClass:"-selected",tagName:"a",events:{click:"select"},initialize:function(e){return this.listenTo(r,"tab:select",this.deselect),this.label=e.label,this.render()},render:function(){return this.$el.text(this.label)},select:function(){return r.trigger("tab:select",this.ion(){return this.$el.removeClass(this.selectedClass)}})},{"../vent":34,backbone:1}],47:[function(e,t){var n,r,i;i=e("underscore"),n=e("backbone"),r=e("../vent"),t.exports=n.View.extend({className:"vit_tabs",template:e("../templates/tabs"),initialize:function(e){return i.bindAll(this,"addTab"),this.tabs={},this.listenTo(r,"tab:select",this.select),this.render(e),e[0].label.select()},addTab:function(e){return this.tabs[e.model.get("label").toLowerCase()]=e,this.$(".vit_tabs-nav").append(e.label.el),this.$(".tabs-content").append(e.el)},select:function(e){var t;return null!=(t=this.activeTab)&&t.hide(),this.activeTab=this.tabs[e.toLowerCase()],this.activeTab.show()},render:function(e){return this.$el.html(this.template()),i.each(e,this.addTab)}})},{"../templates/tabs":31,"../vent":34,backbone:1,underscore:2}],48:[function(e,t){var n,r,i,s;n=e("backbone"),r=e("./FilePicker"),i=e("./Modal"),s=e("../models/state"),t.exports=n.View.extend({el:".vit_filepicker.errorHandler=e.errorHandler,this.callback=e.callback},createFilepicker:function(e){var t,n;return this.errorHandler&&s.set("errorHandler",this.errorHandler),this.callback&&s.set("callback",this.callback),(null!=e?e.preventDefault:void 0)&&(e.preventDefault(),s.set("event",e)),t=new r,n=new i({content:t.el})}})},{"../models/state":19,"./FilePicker":38,"./Modal":43,backbone:1}],49:[function(e,t){(function(n){__browserify_shim_require__=e,function(e,t,n,r,i){!function(e,t,n){var r,i=e.ss||{},s=/^\s+/,o=/\s+$/,a=/[xy]/g,l=/.*(\/|\\)/,u=/.*[.]/,c=/[\t\r\n]/g,d=Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor")>0,f=t.createElement("input");f.type="file",r="multiple"in f&&"undefined"!=typeof File&&"undenent(s)+"="+rict";for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i.contains=function(e,t){"use strict";for(var n=e.length;n--;)if(e[n]===t)return!0;return!1},i.removeItem=function(e,t){"use strict";for(var n=e.lenttachEvent("on"+t,n),function(){i.removeEvent(e,t,n)}},i.removeEvent=function(e,t,n){"use strict";e.removeEventListener?e.removeEActiveXObject("Microsoft.XMLHTTP")}catch(t){return!1}},i.parseJSON=function(t){"use strict";if(!t)return!1;if(t=i.trim(t),e.JSON&&e.JSON.parse)try{return e.JSON.parse(t)}catch(n){return!1}return t&&/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,"@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?new Function("return "+t)():!1
},i.getBox=function(n){"use strict";var r,i,s=0,o=0;if(n.getBoundingClientRect)r=n.getBoundingClientRect(),i=t.documentElement,s=r.top+(e.pageYOffset||i.scrollTop)-(i.clientTop||0),o=r.left+(e.pageXOffset||i.scrollLeft)-(i.clientLeft||0);else do o+=n.offsetLeft,s+=n.offsetTop;while(n=n.offsetParent);retfor(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n])},i.copyLayout=function(e,t){"use strict";var n=i.getBox(e);i.addStyles(t,{position:"absolute",left:n.left+"px",top:n.top+"px",width:e.offsetWidth+"px",height:e.offsetHeight+"px"})},i.toElement=functerHTML=t;var n=e.firstChild;return e.removeChild(n),n}}(),i.getUID=function(){"use strict";ath.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})},i.trim=function(e){"use strict";return eename=fun strict";return-1!==e.indexOf(".")?e.replace(u,""):""},i.hasClass=function(e,t){"use strict";return(" "+e.className+" ").replace(c," ").indexOf(" "+t+" ")>=0},i.addClass=function(e,t){"use strict";return t&&""!==t?void(i.hasClass(e,t)||(e.className+=" "+t)):!1},i.removeClass=function(){"use strict";var e={};return function(t,n){e[n]||(e[n]=new RegExp("(?:^|\\s)"+n+"(?!\\S)")),t.className=t.className.replace(e[n],"")}}(),i.purge=function(e){"use strict";var t,n,r,s=e.attributes;if(s)for(t=s.length-1;t>=0;t-=1)r=s[t].name,"function"==typeof e[r]&&(e[r]=null);if(s=e.childNodes)for(n=s.length,t=0;n>t;t+=1)i.purge(e.childNodes[t])},i.remove=function(e){"use strict";e.parentNode&&(i.purge(e),e.parentNode.removeChild(e)),e=null},i.verifyElem=function(n){"use strict";return"undefined"!=typeof jQuery&&n instanceof jQuery?n=n[0]:"string"==typeof n&&("#"==n.charAt(0)&&(n=n.substr(1)),n=t.getElementById(n)),n&&1===n.nodeType?("A"==n.nodeName.toUpper?t.preventDefault():e.event&&(e.event.returnValue=!1)})),n):!1},i.SimpleUpload=function(e){"use strict";var t,n,s;if(this._opts={button:"",url:"",cors:!1,progressUrl:!1,nginxProgressUrl:!1,multiple:!1,maxUploads:3,queue:!0,checkProgressInterval:50,keyParamName:"APC_UPLOAD_PROGRESS",nginxProgressHeader:"X-Progress-ID",corsInputName:"XHR_CORS_TARGETORIGIN",allowedExtensions:[],accept:"",maxSize:!1,name:"",data:{},autoSubmit:!0,multipart:!1,method:"POST",responseType:"",debug:!1,hoverClass:"",focusClass:"",disabledClass:"",onAbort:function(){},onChange:function(){},onSubmit:function(){},onProgress:function(){},onUpdateFileSize:function(){},onComplete:function(){},onExtError:function(){},onSizeError:function(){},onError:function(){},startXHR:function(){},endXHR:function(){},startNonXHR:function(){},endNonXHR:function(){}},i.extendObj(this._opts,e),e=null,this._btns=[],this._opts.button instanceof Array)for(n=this._opts.button.length,t=0;n>t;t++)s=i.verifyElem(this._opts.button[t]),s!==!1?this._btns.push(this.rerouteClicks(s)):this.log("Button with array index "+t+" is invalid");else s=i.verifyElem(this._opts.button),s!==!1&&this._btns.push(this.rerouteClicks(s));if(delete this._opts.button,this._btns.length<1||this._btns[0]===!1)throw new Error("Invalid button. Make sure the element you're passing exists.");this._opts.multiple===!1&&(this._opts.maxUploads=1),this._queue=[],this._active=0,this._disabled=!1,this._progKeys=[],this._maxFails=10,r||(this._sizeFlags={}),this._createInput(),this.enable()},i.SimpleUpload.prototype={destroy:function(){"use strict";for(var e=this._btns.length;e--;)this._btns[e].off&&this._btns[e].off(),i.removeClass(this._btns[e],this._opts.hoverClass),i.removeClass(this._btns[e],this._opts.focusClass),i.removeClass(this._btns[e],this._opts.disabledClass),this._btns[e].disabled=!1;i.remove(this._input.parentNode);for(var t in this)this.hasOwnProperty(t)&&delete this.prop},log:function(t){"use strict";this._opts.d)},setData:function(e){"use strict";this._opts.data=e},setProgressBar:function(e){"use strict";this._progBar=i.verifyElem(e)},setPctBox:function(e){"use strict";this._pctBox=i.verifyElem(e)},setFileSizeBox:function(e){"use stricunction(e){"lem(e),this._ize:function(){"use strict";return this._queue.length},_cycleQueue:function(){"use strict";this._queue.length>0&&this._opts.autoSubmit&&this.submit()},removeCurrent:function(){"use strict";for(var e=this._queue.length;e--;)if(this._queue[e].file===this._file){this._queue.splice(e,1);break}delete this._file,this._cycleQueue()},disable:function(){"use strict";var e,t=this._btns.length;for(this._disabled=!0;t--;)e=this._btns[t].nodeName.toUpperCase(),i.addClass(this._btns[t],this._opts.disabledClass),("INPUT"==e||"BUTTON"==e)&&(this._btns[t].disabled=!0);this._input&&this._input.parentNode&&(this._input.parentNode.style.visibility="hidden")},enable:function(){"use strict";var e=this._btns.length;for(this._disabled=!1;e--;)i.removeClass(this._btns[e],this._oreturn n.href=e,n.hostname?n.hostname.toLowerCase():e},_createInput:function(){"use strict";var e=this,n=t.createElement("div");this._input=t.createElement("input"),this._input.type="file",this._input.name=this._opts.name,r&&!d&&(this._input.multiple=!0),"accept"in this._input&&""!==this._opts.accept&&(this._input.accept=this._opts.accept),i.addStyles(n,{display:"block",position:"absolute",overflow:"hidden",margin:0,padding:0,opacity:0,direction:"ltr",zIndex:2147483583}),i.addStyles(this._input,{position:"absolute",right:0,margin:0,padding:0,fontSize:"480px",fontFamily:"sans-serif",cursor:"pointer"}),"0"!==n.style.opacity&&(n.style.filter="alpha(opacity=0)"),i.addEvent(this._input,"change",function(){var t,n,s,o,a=e._overBtn;if(e._input&&""!==e._input.value){if(r){if(t=i.getFilename(e._input.files[0].name),n=i.getExt(t),!1===e._opts.onChange.call(e,t,n,a))return;for(s=e._input.files.length,e._opts.multiple||(s=1),o=0;s>o;o++)e._queue.push({file:e._input.files[o],btn:a})}else{if(t=i.getFilename(e._input.value),n=i.getExt(t),!1===e._opts.onChange.call(e,t,n,a))return;e._queue.push({file:e._input,btn:a})}i.removeClass(e._overBtn,e._opts.hoverClass),i.removeClass(e._overBtn,e._opts.focusClass),i.remove(e._input.parentNode),delete e._input,e._createInput(),e._opts.autoSubmit&&e.submit()}}),i.addEvent(this._input,"mouseover",function(){i.addClass(e._overBtn,e._opts.hoverClass)}),i.addEvent(this._input,"mouseout",function(){i.removeClass(e._overBtn,e._opts.hoverClass),i.removeClass(e._overBtn,e._opts.focusClass),e._input.parentNode.style.visibility="hidden"}),i.addEvent(this._input,"focus",function(){i.addClass(e._overBnction(){i.removeClass(e._overBtn,e._opts.focusClass)}),t.body.appendChild(n),n.appendChild(this._input)},rerouteClicks:function(e){"use stNode),t._input.parentNode.style.visibility="visible")}),e},_getFrame:function(){"use strict";var e=i.getUID(),n=i.toElement('<iframe src="javascript:false;" name="'+e+'" />');return t.body.appendChild(n),n.style.display="none",n.id=e,n},_getForm:function(e,n){"use strict";var r=i.toElement('<form method="post" enctype="multipart/form-data"></form>'),s=this._opts.url;return t.body.appendChild(r),r.style.display="none",this._opts.nginxProgressUrl&&(s=s+(s.indexOf("?")>-1?"&":"?")+encodeURIComponent(this._opts.nginxProgressHeader)+"="+encodeURI("input");return r.type="hidden",r.name=e,r.value=n,r},_last:function(e,t,n,r,s){"use strict";e&&(e.innerHTML=""),t&&i.remove(t),n&&(n.innerHTML=""),r&&s&&i.remove(r),this._active--,e=t=n=r=s=null,this._disabled&&this.enable(),this._cycleQueue()},_errorFinish:function(e,t,n,r,s,o,a,l,u,c,d){"use strict";this.log("Upload failed: "+e+" "+t),n=i.parseJSON(n),this._opts.onError.call(this,s,r,e,t,n,d),this._last(o,a,l,u,c),e=t=n=r=s=o=a=l=u=c=d=null},_finish:function(e,t,n,r,s,o,a,l,u,c){"use strict";return this.log("Server response: "+n),"json"==this._opts.responseType.toLowerCase()&&(n=i.parseJSON(n),n===!1)?void this._errorFinish(e,t,!1,"parseerror",r,s,o,l,u,c):(this._opts.onComplete.call(this,r,n,c),this._last(s,o,a,l,u),void(e=t=n=r=s=o=a=l=u=c=null))},_uploadXhr:function(e,t,r,s,o,a,l,u,c){"use strict";var d,f,h,p=this,m=this._opts,g=i.newXHR(),v={};if(v[m.name]=e,i.extendObj(v,m.data),d=m.url+(m.url.indexOf("?")>-1?"&":"?")+i.obj2string(v),r&&(r.innerHTML=t+"K"),a&&(a.innerHTML="0%"),s&&(s.style.width="0%"),m.onProgress.call(this,0),f=function(i,s){var d,h;try{if(f&&(s||4===g.readyState))if(f=n,g.onreadystatechange=function(){},s)4!==g.readyState&&g.abort(),p._last(r,o,a,l,u),m.onAbort.call(p,e,c);else{d=g.status;try{h=g.statusText}catch(v){h=""}d>=200&&300>d?(m.endXHR.call(p,e,t,c),p._finish(d,h,g.responseText,e,r,o,a,l,u,c)):p._errorFinish(d,h,g.responseText,"error",e,r,o,a,l,u,c)}}catch(v){s||p._errorFinish(-1,v.message,!1,"error",e,r,o,a,l,u,c)}},h=function(){i.removeEvent(l,"click",h),f&&f(n,!0)},l&&i.addEvent(l,"click",h),g.onreadystatechange=f,g.open(m.metp,t),a&&(a.innerHTML=t+"%"),s&&(s.style.width=t+"%")}}),g.setRequestHeader("X-Requested-With","XMLHttpRequest"),g.setRequestHeader("X-File-Name",encodeURIComponent(e)),"json"==m.responseType.toLowerCase()&&g.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01"),m.multipart===!0){var y=new FormData;for(var b in m.data)m.data.hasOwnProperty(b)&&y.append(b,m.data[b]);y.append(m.name,this._file),this.log("Commencing upload using multipart form"),g.send(y)}else g.setRequestHeader("Content-Type","application/octet-stream"),this.log("Commencing upload using binary stream"),g.send(this._file);this.removeCurrent()},_uploadIframe:function(t,r,s,o,a,l){"use strict";var u,c,d=this,f=this._opts,h=(f.url,i.getUID()),p=this._getFrame(),m=this._getForm(p,h),g=!1;f.progressUrl&&m.appendChild(this._getHidden(f.keyParamName,h));for(var v in f.data)f.data.hasOwnProperty(v)&&m.appendChild(this._getHidden(v,f.data[v]));f.cors&&m.appendChild(this._getHidden(f.corsInputName,e.location.href)),m.appendChild(this._file),f.onProgress.call(this,0),a&&(a.innerHTML="0%"),s&&(s.style.width="0%"),f.cors&&(u=i.addEvent(e,"message",function(e){return d._getHost(e.origin)!=d._getHost(f.url)?void d.log("Non-matching origin: "+e.origin):(g=!0,u(),f.endNonXHR.call(d,t,l),void d._finish("","",e.data,t,r,o,a,n,n,l))})),c=i.addEvent(p,"load",function(){if(p.parentNode)if(c(),i.removeItem(d._progKeys,h),d._sizeFlags[h]&&delete d._sizeFlags.key,f.cors)e.setTimeout(function(){i.remove(p),g||d._errorFinish("","",!1,"error",t,r,o,a,n,n,l),f=h=p=r=o=a=l=null},600);else{try{var s=p.contentDocument?p.contentDocument:p.contentWindow.document,u=s.body.innerHTML;f.endNonXHR.call(d,t,l),d._finish("","",u,t,r,o,a,n,n,l)}catch(m){d._errorFinish("",m.message,!1,"error",t,r,o,a,n,n,l)}i.remove(p),f=h=p=r=o=a=l=null}}),d.log("Commencing upload using iframe"),m.submit(),i.remove(m),m=null,(f.progressUrl||f.netTimeout(function(){d._getProg(h,s,r,a,1),s=r=a=null},f.checkProgressInterval)),this.removeCurrent()},_getProg:function(t,r,s,o,a){"use strict";var l,u,c,d=this,f=this._opts,h=(new Date).getTime();if(t){if(f.nginxProgressUrl?u=f.nginxProgressUrl+"?"+encodeURIComponent(f.nginxProgressHeader)+"="+encodeURIComponent(t)+"&_="+h:f.progressUrl&&(u=f.progressUrl+"?progresskey="+encodeURIComponent(t)+"&_="+h),c=function(){var u,h,p,m,g;try{if(c&&(f.cors||4===l.readyState)){c=n,l.onreadystatechange=function(){};try{g=l.statusText,m=l.status}catch(v){g="",m=""}if(f.cors||m>=200&&300>m){if(u=i.parseJSON(l.responseText),a++,u===!1)return void d.log("Error parsing progress response (expecting JSON)");if(f.nginxProgressUrl){if("uploading"==u.state)h=u.size,h>0&&(p=Math.round(u.received/h*100),h=Math.round(h/1024));else if("done"==u.state)p=100;else if("error"==u.state)return void d.log("Error requesting upload progress: "+u.status)}else f.progressUrl&&u.success===!0&&(h=u.size,p=u.pct);if(p&&(o&&(o.innerHTML=p+"%"),r&&(r.style.width=p+"%"),f.onProgress.call(d,p)),h&&!d._sizeFlags[t]&&(d._sizeFlags[t]=1,s&&(s.innerHTML=h+"K"),f.onUpdateFileSize.call(d,h)),!p&&!h&&a>=d._maxFails)return void d.log("Failed progress request limit remeout(function(){d._getProg(t,r,s,o,a),t=r=s=o=a=null},f.checkProgressInterval)}else i.removeItem(d._progKeys,t),d.log("Error requesting upload progress: "+m+" "+g);l=h=p=m=g=u=null}}catch(v){d.log("Error requesting upload progress: "+v.message)}},f.cors){if("undefined"==typeof XDomainRequest)return;l=new e.XDomainRequest,l.open("GET",u,!0),l.onprogress=l.ontimeout=function(){},l.onload=c,l.onerror=function(){i.removeItem(d._progKeys,t),t=null,d.log("Error requesting upload progress")}}else l=i.newXHR(),l.onreadystatechange=c,l.open("GET",u,!0),f.nginxProgressUrl&&l.setRequestHeader(f.nginxProgressHeader,t),l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");l.send()}},_checkFile:function(e,t,n){"use strict";var r=this._opts.allowedExtensions,i=r.length,s=!1;if(i>0){for(t=t.toLowerCase();i--;)if(r[i].toLowerCase()==t){s=!0;break}if(!s)return this.removeCurrent(),this.log("File extension not permitted"),this._opts.onExtError.call(this,e,t),!1}return n&&this._opts.maxSize!==!1&&n>this._opts.maxSize?(this.removeCurrent(),this.log(e+" exceeds "+this._opts.maxSize+"K limit"),this._opts.onSizeError.call(this,e,n),!1):!0},submit:function(){"use strict";var e,t,n;if(!(this._disabled||this._active>=this._opts.maxUploads||this._queue.length<1)&&(this._file=this._queue[0].file,r?(e=i.getFilename(this._file.name),n=Math.round(this._file.size/1024)):e=i.getFilename(this._file.value),t=i.getExt(e),this._checkFile(e,t,n)&&!1!==this._opts.onSubmit.call(this,e,t,this._queue[0].btn))){if(this._active++,(this._opts.multiple===!1||this._opts.queue===!1&&this._active>=this._opts.maxUploads)&&this.disable(),r){if(!1===this._opts.startXHR.call(this,e,n,this._queue[0].btn))return this._disabled&&this.enable(),void this._active--;this._uploadXhr(e,n,this._sizeBox,this._progBar,this._progBox,this._pctBox,this._abortBtn,this._removeAbort,this._queue[0].btn)}else{if(!1===this._opts.startNonXHR.call(this,e,this._queue[0].btn))return this._disabled&&this.enable(),void this._active--;this._uploadIframe(e,this._sizeBox,this._progBar,this._progBox,this._pctBox,this._queue[0].btn)}this._sizeBox=this._progBar=this._progBox=this._pctBox=this._abortBtn=this._removeAbort=null}}},e.ss=i}(window,document),i("undefined"!=typeof ss.SimpleUpload?ss.SimpleUpload:windon,void 0,void 0,void 0,void 0,function(e){t.exports=e})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[13]);
$(function () {
  var modalBtn = $("#apply-with-vitae-link");
  var closeBtn = $(".close-btn");
  var modal = $(".modal");

  modalBtn.click(function(){
    modal.show();
  });
  closeBtn.click.className === "modal"){
      modal.hide();
    }
  });
});
$(document).ready(function() {
  $('.multiselect-check-box').change(function() {
    var div = this.closest('div');
    if(!this.checked) {
      $(div).find('.multiselect-additional-string').val('');
      $(div).find('.multiselect-additional-string').attr("readonly", "true");
    } else {
      $(div).find('.multiselect-additional-string').removeAttr('readonly');
    }
  });
});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)thro JavaScrib.handleOnt).on("c").toggle.each(funta("bs.coown.data-:visible"tip.noConver.noCon.each(fun.on("clicoffsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//



















function wire_ckeditor(elem_id, width) {
  CKEDITOR.replace( elem_id,
  {
    toolbar :
      [
          ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
          ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
          ['Source'],
          ['Cut','Copy','Paste','-','Print', 'SpellChecker', 'Scayt'],
          ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
          ['Link','Unlink'],
          ['Image','Table','HorizontalRule'],
          '/',
          ['Styles','Format','Font','FontSize'],
          ['TextColor','BGColor'],
          ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
      ],
      width:width
});
}

function maxLengthIndicator(field) {
  var $field = $(field);
  var $caption = $field.next('.length-restriction');
  var minlen = parseInt($field.attr('data-min-length'));
  var maxlen = parseInt($field.attr('data-max-length'));
  $field.bind('keyup', function(e) {
    var len = $field.val().length;
    if(len == 0) {
      if(minlen && maxlen) {
        $caption.html("Minimum: " + minlen + ", Maximum: " + maxlen + " characters");
      } else if(minlen) { $caption.html("Minimum: " + minlen + " characters");
      } else if(maxlen) { $caption.html("Maximum: " + maxlen + " characters"); }
    } else if(maxlen) {
      $caption.html("Entered " + len + " out of " + maxlen + " allowed character" + (maxlen != 1 ? "s" : ""));
    }
    if(len > maxlen) {
      $caption.addClass('length-error');
    } else {
      $caption.removeClass('length-error');
    }
  });
  $field.trigger('keyup');
}

$(window).on('load', function() {
    // Resizes a group of elements (.eq-height) to be the height of the tallest element within a common parent (.eq-height-parent).
    $(window).on('resize', function() {
        var $eqHeightParents = $('.eq-height-parent');
        $eqHeightParents.each(function() {
            var $eqHeight = $(this).find('.eq-height');
            $eqHeight.height('            return $(this).height();
                }).get()
            var maxHeight = Math.max.apply(null, elementHeights);
            $eqHeight.height(maxHeight);
        });
    }).resize();
});

$(document).on('ready', function() {

    $("textarea.rich-text").each(function() {
        wire_ckeditor($(this)[0].id, "99%")
    });

    $('input.date[readonly!=readonly][type!=checkbox], input[name*=_date][readonly!=readonly]').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-100:+100',
        constt[type='submit']").attr("disabled", "disabled");
    });

    $('textarea[data-max-length],input[data-max-length],textarea[data-min-length],input[data-min-length]').each(function(){
        maxLengthIndicator(this);
    })

});

window.userHasBeenActive = false;
function refreshSessionTimeout() {
    if ($("#timeout-message").dialog('isOpen')) { return; }
    window.userHasBeenActive = true;
}

$(document)
    .keypress(refreshSessionTimeout)
    .mousemove(refreshSessionTimeout);

function refreshSession() {
    var form = $("#check_session_timeout");
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        dataType: "html",
        success : function(result) {
            if (result != 'true'){
                window.location = window.location.href
            } else {
                updateSessionInfo()
            }
            $("#timeou      window.location = window.location.href
        }
    });
}

function handleWarningTime(warningTime){
    if (window.userHasBeenActive) {
        window.userHasBeenActive = false;
        refreshSession();
        return;
    }

    window.focus();
    $("#timeout-at").text(localStorage.sessionTimeout);
    $("#timeout-message").dia  $('#timeout-message').removeClass('hidden');
      },
      buttons: {
        OK: function() {
          refreshSession()
        }
      }
    })
    $("#timeout-message").dialog('open')
}

function multitabSessionTimeout(minutes) {
    localStorage.setItem('sessionTimeoutLength', minutes);
    updateSessionInfo();
    window.session_timeout_warn_interval_id = setInterval(warnUserIfTimeoutNear, 1000);

    //Initialize Dialog
    $("#timeout-message").dialog({autoOpen: false})
}

function updateSessionInfo() {
    var minutes = localStorage.sessionTimeoutLength || 15;
    var now = Date.now();
    var timeout = new Date(now + minutes*60000);
    var warn = new Date(now + (minutes-3)*60000);
    localStorage.setItem('sessionTimeout', timeout);
    localStorage.setItem('sessionTimeoutWarn', warn);
}

function warnUserIfTimeoutNear() {
    var timeout = Date.parse(localStorage.sessionTimeout)
    var warn = Date.parse(localStorage.sessionTimeoutWarn)


    if (timeout < Date.now()) {
        window.location = window.location.href
        clearInterval(window.session_timeout_warn_interval_id)
    } else if (warn < Date.now()) {
        handleWarningTime(3000)
    } else {
    $('.hidden-if-no-js').css('visibility', 'visible')
})


function anchorMoveableNavbar() {
  var window_top = $(window).scrollTop(),
      anchor = $('#moveable-navbar-anchor'),
      div_top;

  if (anchor && anchor.offset()) {
    div_top = anchor.offset().top;
    // Is there a dynamic way of finding the +50?
    if (window_top > div_top + 50) {
      $('#moveable-navbar').addClass('navbar-anchored');
    }
    else {
      $('#moveable-noll(anchorMoveableNavbar);
  anchorMoveableNavbar();
});

$('form').submit(function(e){
  $(this).find('input.requiredJS').each(function(){
    if ($(this).val() === ''){
      e.preventDefault()
      $(this).addClass('empty-input');
    }
  });
});

var spinner;
$(function () {
  // This object literal is for displaying a 'wait' spinner ov);
      $s;
      $spinner.removeClass("visible-spinner");
    }
  };
});
