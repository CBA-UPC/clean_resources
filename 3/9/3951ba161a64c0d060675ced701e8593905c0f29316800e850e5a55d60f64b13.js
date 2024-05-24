/*1.0*/
/**
*	@name							Elastic
*	@descripton						Elastic is jQuery plugin that grow and shrink your textareas automatically
*	@version						1.6.11
*	@requires						jQuery 1.2.6+
*
*	@author							Jan Jarfalk
*	@author-email					jan.jarfalk@unwrongest.com
*	@author-website					http://www.unwrongest.com
*
*	@licence						MIT License - http://www.opensource.org/licenses/mit-license.php
*/


(function($){ 
	jQuery.fn.extend({  
		elastic: function() {
		
			//	We will create a div clone of the textarea
			//	by copying these attributes from the textarea to the div.
			var mimics = [
				'paddingTop',
				'paddingRight',
				'paddingBottom',
				'paddingLeft',
				'fontSize',
				'lineHeight',
				'fontFamily',
				'width',
				'fontWeight',
				'border-top-width',
				'border-right-width',
				'border-bottom-width',
				'border-left-width',
				'borderTopStyle',
				'borderTopColor',
				'borderRightStyle',
				'borderRightColor',
				'borderBottomStyle',
				'borderBottomColor',
				'borderLeftStyle',
				'borderLeftColor'
				];
			
			return this.each( function() {

				// Elastic only works on textareas
				if ( this.type !== 'textarea' ) {
					return false;
				}
					
			var $textarea	= jQuery(this),
				$twin		= jQuery('<div />').css({
					'position'		: 'absolute',
					'display'		: 'none',
					'word-wrap'		: 'break-word',
					'white-space'	:'pre-wrap'
				}),
				lineHeight	= parseInt($textarea.css('line-height'),10) || parseInt($textarea.css('font-size'),'10'),
				minheight	= parseInt($textarea.css('height'),10) || lineHeight*3,
				maxheight	= parseInt($textarea.css('max-height'),10) || Number.MAX_VALUE,
				goalheight	= 0;
				
				// Opera returns max-height of -1 if not set
				if (maxheight < 0) { maxheight = Number.MAX_VALUE; }
					
				// Append the twin to the DOM
				// We are going to meassure the height of this, not the textarea.
				$twin.appendTo($textarea.parent());
				
				// Copy the essential styles (mimics) from the textarea to the twin
				var i = mimics.length;
				while(i--){
					$twin.css(mimics[i].toString(),$textarea.css(mimics[i].toString()));
				}
				
				// Updates the width of the twin. (solution for textareas with widths in percent)
				function setTwinWidth(){
					var curatedWidth = Math.floor(parseInt($textarea.width(),10));
					if($twin.width() !== curatedWidth){
						$twin.css({'width': curatedWidth + 'px'});
						
						// Update height of textarea
						update(true);
					}
				}
				
				// Sets a given height and overflow state on the textarea
				function setHeightAndOverflow(height, overflow){
				
					var curratedHeight = Math.floor(parseInt(height,10));
					if($textarea.height() !== curratedHeight){
						$textarea.css({'height': curratedHeight + 'px','overflow':overflow});
					}
				}
				
				// This function will update the height of the textarea if necessary 
				function update(forced) {
					
					// Get curated content from the textarea.
					var textareaContent = $textarea.val().replace(/&/g,'&amp;').replace(/ {2}/g, '&nbsp;').replace(/<|>/g, '&gt;').replace(/\n/g, '<br />');
					
					// Compare curated content with curated twin.
					var twinContent = $twin.html().replace(/<br>/ig,'<br />');
					
					if(forced || textareaContent+'&nbsp;' !== twinContent){
					
						// Add an extra white space so new rows are added when you are at the end of a row.
						$twin.html(textareaContent+'&nbsp;');
						
						// Change textarea height if twin plus the height of one line differs more than 3 pixel from textarea height
						if(Math.abs($twin.height() + lineHeight - $textarea.height()) > 3){
							
							var goalheight = $twin.height()+lineHeight;
							if(goalheight >= maxheight) {
								setHeightAndOverflow(maxheight,'auto');
							} else if(goalheight <= minheight) {
								setHeightAndOverflow(minheight,'hidden');
							} else {
								setHeightAndOverflow(goalheight,'hidden');
							}
							
						}
						
					}
					
				}
				
				// Hide scrollbars
				$textarea.css({'overflow':'hidden'});
				
				// Update textarea size on keyup, change, cut and paste
				$textarea.bind('keyup change cut paste', function(){
					update(); 
				});
				
				// Update width of twin if browser or textarea is resized (solution for textareas with widths in percent)
				$(window).bind('resize', setTwinWidth);
				$textarea.bind('resize', setTwinWidth);
				$textarea.bind('update', update);
				
				// Compact textarea on blur
				/*
				$textarea.bind('blur',function(){
					if($twin.height() < maxheight){
						if($twin.height() > minheight) {
							$textarea.height($twin.height());
						} else {
							$textarea.height(minheight);
						}
					}
				});
				*/
				
				// And this line is to catch the browser paste event
				$textarea.bind('input paste',function(e){ setTimeout( update, 250); });				
				
				// Run update once when elastic is initialized
				update();
				
			});
			
        } 
    }); 
})(jQuery);
/*1.0*/
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */


;)(window.jQuery || window.Zepto);
/*1.0*/
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 *
 * Requires jQuery 1.6.0 or later.
 * https://github.com/rails/jquery-ujs

 * Uploading file using rails.js
 * =============================
 *
 * By default, browsers do not allow files to be uploaded via AJAX. As a result, if there are any non-blank file fields
 * in the remote form, this adapter aborts the AJAX submission and allows the form to submit through standard means.
 *
 * The `ajax:aborted:file` event allows you to bind your own handler to process the form submission however you wish.
 *
 * Ex:
 *     $('form').live('ajax:aborted:file', function(event, elements){
 *       // Implement own remote file-transfer handler here for non-blank file inputs passed in `elements`.
 *       // Returning false in this handler tells rails.js to disallow standard form submission
 *       return false;
 *     });
 *
 * The `ajax:aborted:file` event is fired when a file-type input is detected with a non-blank value.
 *
 * Third-party tools can use this hook to detect when an AJAX file upload is attempted, and then use
 * techniques like the iframe method to upload the file instead.
 *
 * Required fields in rails.js
 * ===========================
 *
 * If any blank required inputs (required="required") are detected in the remote form, the whole form submission
 * is canceled. Note that this is unlike file inputs, which still allow standard (non-AJAX) form submission.
 *
 * The `ajax:aborted:required` event allows you to bind your own handler to inform the user of blank required inputs.
 *
 * !! Note that Opera does not fire the form's submit event if there are blank required inputs, so this event may never
 *    get fired in Opera. This event is what causes other browsers to exhibit the same submit-aborting behavior.
 *
 * Ex:
 *     $('form').live('ajax:aborted:required', function(event, elements){
 *       // Returning false in this handler tells rails.js to submit the form anyway.
 *       // The blank required inputs are passed to this function in `elements`.
 *       return ! confirm("Would you like to submit the form with missing info?");
 *     });
 */

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input:file',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire:,

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, crossDomain, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        crossDomain = element.data('cross-domain') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType, crossDomain: crossDomain,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete:,
          error:
        };
        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input,
        selector = specifiedSelector || 'input,textarea';
      form.find(selector).each(function() {
        input = $(this);
        // Collect non-blank inputs if nonBlank option is true, otherwise, collect blank inputs
        if (nonBlank ? input.val() : !input.val()) {
          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs:,

    // Helper function, needed to provide consistent behavior in IE
    stopEverything:,

    // find all the submit events directly bound to the form and
    // manually invoke them. If anyone returns false then stop the loop
    callFormSubmitBindings: function(form, event) {
      var events = form.data('events'), continuePropagation = true;
      if (events !== undefined && events['submit'] !== undefined) {
        $.each(events['submit'], function(i, obj){
          if (typeof obj.handler === 'function') return continuePropagation = obj.handler(event);
        });
      }
      return continuePropagation;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e)
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        // this should be element.removeData('ujs:enable-with')
        // but, there is currently a bug in jquery which makes hyphenated data attributes not get removed
        element.data('ujs:enable-with', false); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  $.ajaxPrefilter);

  $(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
      rails.enableElement($(this));
  });

  $(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
    var link = $(this), method = link.data('method'), data = link.data('params');
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

    if (link.data('remote') !== undefined) {
      if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

      if (rails.handleRemote(link) === false) { rails.enableElement(link); }
      return false;

    } else if (link.data('method')) {
      rails.handleMethod(link);
      return false;
    }
  });

  $(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
    var link = $(this);
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    rails.handleRemote(link);
    return false;
  });

  $(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
    var form = $(this),
      remote = form.data('remote') !== undefined,
      blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
      nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

    if (!rails.allowAction(form)) return rails.stopEverything(e);

    // skip other logic when required values are missing or file upload is present
    if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
      return rails.stopEverything(e);
    }

    if (remote) {
      if (nonBlankFileInputs) {
        return rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
      }

      // If browser does not support submit bubbling, then this live-binding will be called before direct
      // bindings. Therefore, we should directly call any direct bindings before remotely submitting form.
      if (!$.support.submitBubbles && $().jquery < '1.7' && rails.callFormSubmitBindings(form, e) === false) return rails.stopEverything(e);

      rails.handleRemote(form);
      return false;

    } else {
      // slight timeout so that the submit button gets properly serialized
      setTimeout(function(){ rails.disableFormElements(form); }, 13);
    }
  });

  $(document).delegate(rails.formInputClickSelector, 'click.rails',);

  $(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
    if (this == event.target) rails.disableFormElements($(this));
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
    if (this == event.target) rails.enableFormElements($(this));
  });

  $(function(){
    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    csrf_token = $('meta[name=csrf-token]').attr('content');
    csrf_param = $('meta[name=csrf-param]').attr('content');
    $('form input[name="' + csrf_param + '"]').val(csrf_token);
  });

})( jQuery );
/*1.0*/
(function($){
  $.extend({
    determine:
  });
})(jQuery);
/*1.0*/
/*!
 * Select2 4.0.13
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

; 2;
}));
/*1.0*/
/**
  This is a pure Javascript replacement for the jQuery document ready()
  handler.  It is adapted from the disucssions here:
   https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
   https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
*/

(function(winObj) {
  'use strict';

  winObj = winObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;

  // call this when the document is ready
  // this function protects itself against being called more than on
  
  }

  // This is the one public interface
  // docReady(fn, context);
  // the context argument is optional - if present, it will be passed
  // as an argument to the callback
  winObj.docRea
  };
})(window);
/*1.0*/




// Set up optimize activation event triggers. Any page dynamic components eligible
// for optimize testing should have an event trigger added in here.
if (window.dataLayer) {
  // Main optimize activation event. Global object should be initialized and available
  // at this point, but optimize might still not work on dynamically generated elements
  window.docReady(function() {
    var optimizeObserver;
    GoogleAnalytics.triggerOptimize();

    // Hack into navbar to trigger optimize event on nav.
    // TODO: This should be moved to the global nav on the toolkit side
    if ($UI && $UI._GlobalNavbar) {
      var _globalNavRender = $UI._GlobalNavbar.prototype._render;
      $UI._GlobalNavbar.prototype._render = function($placeholderEl, params) {
        _globalNavRender.call(this, $placeholderEl, params);

        GoogleAnalytics.triggerOptimize('nav');
      }
    }

    // Look for elements being added with the optimize trigger attr to trigger events
    optimizeObserver = new MutationObserver(triggerOptimizeOnElemAdd);

    optimizeObserver.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    function triggerOptimizeOnElemAdd(mutationsList) {
      var addedNodes = [].concat.apply([], mutationsList   }));

      var optimizeNodes = addedNodes.fi   });

      optimizeNodes.for   });
    }
  });

  document.addEventListener('editorial-slidein:rendered', function () {
    GoogleAnalytics.triggerOptimize('slidein');
  });
}

if( typeof window.initMarketoAnalytics === 'function' ) {
  initMarketoAnalytics();
}

var GoogleAnalytics = (function(){
  // IMPORTANT: If you change any of the names of dimensions/groups, check
  // app/helpers/application_helper/google_analytics_helper.rb and change it
  // there too.

  var setDimension = function(dimension, value){
    if(window.ga){
      window.ga('set', dimension, value);
    }
  };

  var setContentGroup = function(content_group, value){
    if(window.ga){
      window.ga('set', content_group, value);
    }
  }

  return {
    triggerOptimize: function(label) {
      // shortcut for triggering optimize activation
      var _label = 'optimize.activate';
      _label += label ? '-' + label : '';
      if (window.dataLayer) {
        window.dataLayer.push({ 'event': _label });
      }
    },
    setGroup:function(name){
      setDimension('dimension1', name);
    },
    setUserType:function(userClass){
      setDimension('dimension2', userClass);
    },
    setAppVersion:function(appVersion){
      setDimension('dimension3', appVersion);
    },
    setPepperLevel:function(pepperLevel){
      setDimension('dimension4', pepperLevel);
    },
    setHomePageType:function(homePageType){
      setDimension('dimension5', homePageType);
    },
    setExperiment: function(experiment){
      setDimension('dimension6', experiment);
    },
    setUserId: function(userId){
      setDimension('dimension7', userId);
    },
    setNexusId: function(nexusId){
      setDimension('dimension8', nexusId);
    },
    setLearnGroupCategory: function(categoryId){
      setDimension('dimension9', categoryId);
    },
    setFirstTimeVisitor: function(isReturning) {
      // 0 = new, 1 = returning
      setDimension('dimension10', isReturning);
    },
    setVisitCount: function(visitCount) {
      setDimension('dimension12', visitCount);
    },
    setUserRole: function(role) {
      setDimension('dimension14', role);
    },
    setTopicContentGr   },
    trackPageview: function(page) {
      if(window.ga) {
        if(page){
          window.ga('send', 'pageview', page);
        } else {
          window.ga('send', 'pageview', document.location.pathname + document.location.search);
        }
      }
    },

    trackEventWithFields: function(fields) {
      if(window.ga && fields !== null && 'object' === typeof fields) {
        fields.hitType = 'event';
        window.ga('send', fields);
      }
    },

    // Assumes arguments in order: trackEvent(eventCategory, eventAction, eventLabel, eventValue, nonInteraction)
    // Will not pass along args that are sent as null
    trackEvent: function(){
      if(window.ga){
        var fields = {hitType: 'event'};
        var keys = {
          0: "eventCategory",
          1: "eventAction",
          2: "eventLabel",
          3: "eventValue",
          4: "nonInteraction"
        };
        for(var i = 0; i < arguments.length; i++){
          var field = arguments[i]
          if(field){
            fields[keys[i]] = field;
          }
        }
        window.ga('send', fields);
      }
    }
  };
})();

window.GoogleAnalytics = GoogleAnalytics;

// Moved here from _google_analytics.html.erb. That code is only loaded when not in dev
// but this bit should be ok b/c it has not effect if not used.
document.addEventListener( 'google-analytics:send:eve);
});
/*1.0*/
(function() {
  /* 
   * ExperimentAnalytics is an mixin to abstract event tracking for 
   * experiments that use the tableau dashboard originally created for the 
   * Growth Squad.
   */
  function ExperimentAnalytics(name, variant) {
    this.name = name;
    this.category = '';
    this.variant = variant || 'var0';
  }

  ExperimentAnalytics.prototype = {
    trackEvent: function(type, action, options) {
      /*
       * Wraps the trackEvent method on the GoogleAnalytics object to
       * format event labels so that Tableau dashboards pick them up
       *
       * Options:
       *   - options.nonInteractive: passes noninteraction parameter
       *   - options.tableauTrack: if false moves the variant label after
       *                           the event data so that the tableau dashboard
       *                           does not pick the event up (useful for tracking
       *                           events that you don't want to show up on the dashboard
       *                           such as the closing modals)
       */
      var _options = ('object' === typeof options && options !== null) ? options : {};
      var nonInteractive = _options.nonInteractive;
      var track = 'tableauTrack' in _options ? _options.tableauTrack : true;
      var label = [this.name];
      var args = [this.category, type];

      if (!action) {
        label.push(this.variant);
      } else if (track) {
        label.push(this.variant, action);
      } else {
        label.push(action, this.variant);
      }

      args.push(label.join('|'));
      if (nonInteractive) {
        args.push(0, nonInteractive);
      }

      GoogleAnalytics.trackEvent.apply(GoogleAnalytics, args);
    }
  
  }

  GrowthExperimentAnalytics.prototype = Object.create(ExperimentAnalytics.prototype);
  GrowthExperimentAnalytics.prototype.constructor = GrowthExperimentAnalytics;

  window.GrowthExperimentAnalytics = GrowthExperimentAnalytics;
})();
/*1.0*/
/*!
	Autosize v1.18.9 - 2014-05-27
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {
    'use strict';
	var	defaults = {
		className: 'autosizejs',
		id: 'autosizejs',
		append: '\n',
		callback: false,
		resizeDelay: 10,
		placeholder: true
	},

	// border:0 is unnecessary, but avoids a bug in Firefox on OSX
	copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',

	// line-height is conditionally included because IE7/IE8/old Opera do not return the correct value.
	typographyStyles = [
		'fontFamily',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'letterSpacing',
		'textTransform',
		'wordSpacing',
		'textIndent'
	],

	// to keep track which textarea is being mirrored when adjust() is called.
	mirrored,

	// the mirror element, which is used to calculate what size the mirrored element should be.
	mirror = $(copy).data('autosize', true)[0];

	// test that line-height can be accurately copied.
	mirror.style.lineHeight = '99px';
	if ($(mirror).css('lineHeight') === '99px') {
		typographyStyles.push('lineHeight');
	}
	mirror.style.lineHeight = '';

	$.fn.autosize = function (options) {
		if (!this.length) {
			return this;
		}

		options = $.extend({}, defaults, options || {});

		if (mirror.parentNode !== document.body) {
			$(document.body).append(mirror);
		}

		return this.each(function () {
			var
			ta = this,
			$ta = $(ta),
			maxHeight,
			minHeight,
			boxOffset = 0,
			callback = $.isFunction(options.callback),
			originalStyles = {
				height: ta.style.height,
				overflow: ta.style.overflow,
				overflowY: ta.style.overflowY,
				wordWrap: ta.style.wordWrap,
				resize: ta.style.resize
			},
			timeout,
			width = $ta.width(),
			taResize = $ta.css('resize');

			if ($ta.data('autosize')) {
				// exit if autosize has already been applied, or if the textarea is the mirror element.
				return;
			}
			$ta.data('autosize', true);

			if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box'){
				boxOffset = $ta.outerHeight() - $ta.height();
			}

			// IE8 and lower return 'auto', which parses to NaN, if no min-height is set.
			minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height());

			$ta.css({
				overflow: 'hidden',
				overflowY: 'hidden',
				wordWrap: 'break-word' // horizontal overflow is hidden, so break-word is necessary for handling words longer than the textarea width
			});

			if (taResize === 'vertical') {
				$ta.css('resize','none');
			} else if (taResize === 'both') {
				$ta.css('resize', 'horizontal');
			}

			// The mirror width must exactly match the textarea width, so using getBoundingClientRect because it doesn't round the sub-pixel value.
			// window.getComputedStyle, getBoundingClientRect returning a width are unsupported, but also unneeded in IE8 and lower.
			function setWidth() {
				var width;
				var style = window.getComputedStyle ? window.getComputedStyle(ta, null) : false;
				
				if (style) {

					width = ta.getBoundingClientRect().width;

					if (width === 0 || typeof width !== 'number') {
						width = parseInt(style.width,10);
					}

					$.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidt			});
				} else {
					width = $ta.width();
				}

				mirror.style.width = Math.max(width,0) + 'px';
			}

			function initMirror() {
				var styles = {};

				mirrored = ta;
				mirror.className = options.className;
				mirror.id = options.id;
				maxHeight = parseInt($ta.css('maxHeight'), 10);

				// mirror is a duplicate textarea located off-screen that
				// is automatically updated to contain the same text as the
				// original textarea.  mirror always has a height of 0.
				// This gives a cross-browser supported way getting the actual
				// height of the text, through the scrollTop property.
				$.each(typographySty			});
				
				$(mirror).css(styles).attr('wrap', $ta.attr('wrap'));

				setWidth();

				// Chrome-specific fix:
				// When the textarea y-overflow is hidden, Chrome doesn't reflow the text to account for the space
				// made available by removing the scrollbar. This workaround triggers the reflow for Chrome.
				if (window.chrome) {
					var width = ta.style.width;
					ta.style.width = '0px';
					var ignore = ta.offsetWidth;
					ta.style.width = width;
				}
			}

			// Using mainly bare JS in this function because it is going
			// to fire very often while typing, and needs to very efficient.
			function adjust() {
				var height, original;

				if (mirrored !== ta) {
					initMirror();
				} else {
					setWidth();
				}

				if (!ta.value && options.placeholder) {
					// If the textarea is empty, copy the placeholder text into 
					// the mirror control and use that for sizing so that we 
					// don't end up with placeholder getting trimmed.
					mirror.value = ($ta.attr("placeholder") || '') + options.append;
				} else {
					mirror.value = ta.value + options.append;
				}

				mirror.style.overflowY = ta.style.overflowY;
				original = parseInt(ta.style.height,10);

				// Setting scrollTop to zero is needed in IE8 and lower for the next step to be accurately applied
				mirror.scrollTop = 0;

				mirror.scrollTop = 9e4;

				// Using scrollTop rather than scrollHeight because scrollHeight is non-standard and includes padding.
				height = mirror.scrollTop;

				if (maxHeight && height > maxHeight) {
					ta.style.overflowY = 'scroll';
					height = maxHeight;
				} else {
					ta.style.overflowY = 'hidden';
					if (height < minHeight) {
						height = minHeight;
					}
				}

				height += boxOffset;

				if (original !== height) {
					ta.style.height = height + 'px';
					if (callback) {
						options.callback.call(ta,ta);
					}
				}
			}

			function resize () {
				clearTimeout(timeout);
				timeout = setTim			}, parseInt(options.resizeDelay,10));
			}

			if ('onpropertychange' in ta) {
				if ('oninput' in ta) {
					// Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
					// so binding to onkeyup to catch most of those occasions.  There is no way that I
					// know of to detect something like 'cut' in IE9.
					$ta.on('input.autosize keyup.autosize', adjust);
				} else {
					// IE7 / IE8
					$ta.on('propertychange.autosi			});
				}
			} else {
				// Modern Browsers
				$ta.on('input.autosize', adjust);
			}

			// Set options.resizeDelay to false if using fixed-width textarea elements.
			// Uses a timeout and width check to reduce the amount of times adjust needs to be called after window resize.

			if (options.resizeDelay !== false) {
				$(window).on('resize.autosize', resize);
			}

			// Event for manual triggering if needed.
			// Should only be needed when the value of the textarea is changed through JavaScript rather than user input.
			$ta.on('autosize.resize', adjust);

			// Event for manual triggering that also forces the styles to update as well.
			// Should only be needed if one of typography styles of the textarea change, and the textarea is already the target of the adjust method.
			$ta.on('autosize.resizeIncludeSty			});

			$ta.on('autosize.destroy', function(){
				mirrored = null;
				clearTimeout(timeout);
				$(window).off('resize', resize);
				$ta
					.off('autosize')
					.off('.autosize')
					.css(originalStyles)
					.removeData('autosize');
			});

			// Call adjust in case the textarea already contains text.
			adjust();
		});
	};
}(window.jQuery || window.$)); // jQuery or jQuery-like library, such as Zepto
;
/*1.0*/
/*
 * BestInPlace (for jQuery)
 * version: 3.0.0.alpha (2014)
 *
 * By Bernat Farrero based on the work of Jan Varwig.
 * Examples at http://bernatfarrero.com
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @requires jQuery
 *
 * Usage:
 *
 * Attention.
 * The format of the JSON object given to the select inputs is the following:
 * [["key", "value"],["key", "value"]]
 * The format of the JSON object given to the checkbox inputs is the following:
 * ["falseValue", "trueValue"]

 */


function BestInPlaceEditor(e) {
    'use strict';
    this.element = e;
    this.initOptions();
    this.bindForm();
    this.initPlaceHolder();
    jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
}

BestInPlaceEditor.prototype = {
    // Public Interface Functions //////////////////////////////////////////////

    activate: function () {
        'use strict';
        var to_display;
        if (this.isPlaceHolder()) {
            to_display = "";
        } else if (this.original_content) {
            to_display = this.original_content;
        } else {
            switch (this.formType) {
                case 'input':
                case 'textarea':
                    if (this.display_raw) {
                        to_display = this.element.html().replace(/&amp;/gi, '&');
                    }
                    else {
                        var value = this.element.data('bipValue');
                        if (typeof value === 'undefined') {
                            to_display = '';
                        } else if (typeof value === 'string') {
                            to_display = this.element.data('bipValue').replace(/&amp;/gi, '&');
                        } else {
                            to_display = this.element.data('bipValue');
                        }
                    }
                    break;
                case 'select':
                    to_display = this.element.html();

            }
        }

        this.oldValue = this.isPlaceHolder() ? "" : this.element.html();
        this.display_value = to_display;
        jQuery(this.activator).unbind("click", this.clickHandler);
        this.activateForm();
        this.element.trigger(jQuery.Event("best_in_place:activate"));
    },

    abort: function () {
        'use strict';
        this.activateText(this.oldValue);
        jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:abort"));
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));
    },

    abortIfConfirm: function () {
        'use strict';
        if (!this.useConfirm) {
            this.abort();
            return;
        }

        if (confirm(BestInPlaceEditor.defaults.locales[''].confirmMessage)) {
            this.abort();
        }
    },

    update: function () {
        'use strict';
        
        this.element.trigger(jQuery.Event("best_in_place:before-update"));
        
        var editor = this,
            value = this.getValue();

        // Avoid request if no change is made
        if (this.formType in {"input": 1, "textarea": 1} && value === this.oldValue) {
            this.abort();
            return true;
        }

        editor.ajax({
            "type": this.requestMethod(),
            "dataType": BestInPlaceEditor.defaults.ajaxDataType,
            "data": editor.requestData(),
            "succe   },
            "error": function (request, error) {
                editor.loadErrorCallback(request, error);
            }
        });


        switch (this.formType) {
            case "select":
                this.previousCollectionValue = value;

                // search for the text for the span
                $.each(this.values, function(index, arr){ if (String(arr[0]) === String(value)) editor.element.html(arr[1]); });
                break;

            case "checkbox":
                $.each(this.values, function(index, arr){ if (String(arr[0]) === String(value)) editor.element.html(arr[1]); });
                break;

            default:
                if (value !== "") {
                    if (this.display_raw) {
                        editor.element.html(value);
                    } else {
                        editor.element.text(value);
                    }
                } else {
                    editor.element.html(this.placeHolder);
                }
        }

        editor.element.data('bipValue', value);
        editor.element.attr('data-bip-value', value);

        editor.element.trigger(jQuery.Event("best_in_place:update"));
    },

    activateForm: function () {
        'use strict';
        alert(BestInPlaceEditor.defaults.locales[''].uninitializedForm);
    },

    activateText: function (value) {
        'use strict';
        this.element.html(value);
        if (this.isPlaceHolder()) {
            this.element.html(this.placeHolder);
        }
    },

    // Helper Functions ////////////////////////////////////////////////////////

    initOptions: function () {
        // Try parent supplied info
        'use strict';
        var self = this;
        self.element.parents().each(function () {
            var $parent = jQuery(this);
            self.url = self.url || $parent.data("bipUrl");
            self.activator = self.activator || $parent.data("bipActivator");
            self.okButton = self.okButton || $parent.data("bipOkButton");
            self.okButtonClass = self.okButtonClass || $parent.data("bipOkButtonClass");
            self.cancelButton = self.cancelButton || $parent.data("bipCancelButton");
            self.cancelButtonClass = self.cancelButtonClass || $parent.data("bipCancelButtonClass");
            self.skipBlur = self.skipBlur || $parent.data("bipSkipBlur");
        });

        // Load own attributes (overrides all others)
        self.url = self.element.data("bipUrl") || self.url || document.location.pathname;
        self.collection = self.element.data("bipCollection") || self.collection;
        self.formType = self.element.data("bipType") || "input";
        self.objectName = self.element.data("bipObject") || self.objectName;
        self.attributeName = self.element.data("bipAttribute") || self.attributeName;
        self.activator = self.element.data("bipActivator") || self.element;
        self.okButton = self.element.data("bipOkButton") || self.okButton;
        self.okButtonClass = self.element.data("bipOkButtonClass") || self.okButtonClass || BestInPlaceEditor.defaults.okButtonClass;
        self.cancelButton = self.element.data("bipCancelButton") || self.cancelButton;
        self.cancelButtonClass = self.element.data("bipCancelButtonClass") || self.cancelButtonClass || BestInPlaceEditor.defaults.cancelButtonClass;
        self.skipBlur = self.element.data("bipSkipBlur") || self.skipBlur || BestInPlaceEditor.defaults.skipBlur;
        self.isNewObject = self.element.data("bipNewObject");
        self.dataExtraPayload = self.element.data("bipExtraPayload");

        // Fix for default values of 0
        if (self.element.data("bipPlaceholder") == null) {
          self.placeHolder = BestInPlaceEditor.defaults.locales[''].placeHolder;
        } else {
          self.placeHolder = self.element.data("bipPlaceholder");
        }

        self.inner_class = self.element.data("bipInnerClass");
        self.html_attrs = self.element.data("bipHtmlAttrs");
        self.original_content = self.element.data("bipOriginalContent") || self.original_content;

        // if set the input won't be satinized
        self.display_raw = self.element.data("bip-raw");

        self.useConfirm = self.element.data("bip-confirm");

        if (self.formType === "select" || self.formType === "checkbox") {
            self.values = self.collection;
            self.collectionValue = self.element.data("bipValue") || self.collectionValue;
        }
    },

    bindForm: function () {
        'use strict';
        this.activateForm = BestInPlaceEditor.forms[this.formType].activateForm;
        this.getValue = BestInPlaceEditor.forms[this.formType].getValue;
    },


    initPlaceHolder: function () {
        'use strict';
        // TODO add placeholder for select and checkbox
        if (this.element.html() === "") {
            this.element.addClass('bip-placeholder');
            this.element.html(this.placeHolder);
        }
    },

    isPlaceHolder: function () {
        'use strict';
        // TODO: It only work when form is deactivated.
        // Condition will fail when form is activated
        return this.element.html() === "" || this.element.html() === this.placeHolder;
    },

    getValue: function () {
        'use strict';
        alert(BestInPlaceEditor.defaults.locales[''].uninitializedForm);
    },

    // Trim and Strips HTML from text
    sanitizeVa   },

    requestMethod: function() {
        'use strict';
        return this.isNewObject ? 'post' : BestInPlaceEditor.defaults.ajaxMethod;
    },

    /* Generate the data sent in the POST request */
    requestData: function () {
        'use strict';
        // To prevent xss attacks, a csrf token must be defined as a meta attribute
        var csrf_token = jQuery('meta[name=csrf-token]').attr('content'),
            csrf_param = jQuery('meta[name=csrf-param]').attr('content');

        var data = {}
        data['_method'] = this.requestMethod()

        data[this.objectName] = this.dataExtraPayload || {}

        data[this.objectName][this.attributeName] = this.getValue()

        if (csrf_param !== undefined && csrf_token !== undefined) {
            data[csrf_param] = csrf_token
        }
        return jQuery.param(data);
    },

    ajax: function (options) {
        'use strict';
        options.url = this.url;
        options.beforeSe   };
        return jQuery.ajax(options);
    },

    // Handlers ////////////////////////////////////////////////////////////////

    loadSuccessCallback: function (data, status, xhr) {
        'use strict';
        data = jQuery.trim(data);
        //Update original content with current text.
        if (this.display_raw) {
          this.original_content = this.element.html();
        } else {
          this.original_content = this.element.text();
        }

        if (data && data !== "") {
            var response = jQuery.parseJSON(data);
            if (response !== null && response.hasOwnProperty("display_as")) {
                this.element.data('bip-original-content', this.element.text());
                this.element.html(response.display_as);
            }
            if (this.isNewObject && response && response[this.objectName]) {
                if (response[this.objectName]["id"]) {
                    this.isNewObject = false
                    this.url += "/" + response[this.objectName]["id"] // in REST a POST /thing url should become PUT /thing/123
                }
            }
        }
        this.element.toggleClass('bip-placeholder', this.isPlaceHolder());

        this.element.trigger(jQuery.Event("best_in_place:success"), [data, status, xhr]);
        this.element.trigger(jQuery.Event("ajax:success"), [data, status, xhr]);

        // Binding back after being clicked
        jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));

        if (this.collectionValue !== null && this.formType === "select") {
            this.collectionValue = this.previousCollectionValue;
            this.previousCollectionValue = null;
        }
    },

    loadErrorCallback: function (request, error) {
        'use strict';
        this.activateText(this.oldValue);

        this.element.trigger(jQuery.Event("best_in_place:error"), [request, error]);
        this.element.trigger(jQuery.Event("ajax:error"), request, error);

        // Binding back after being clicked
        jQuery(this.activator).bind('click', {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));
    },

    clickHandler: function (event) {
        'use strict';
        event.preventDefault();
        event.data.editor.activate();
    },

    setHtmlAttributes: function () {
        'use strict';
        var formField = this.element.find(this.formType);

        if (this.html_attrs) {
            var attrs = this.html_attrs;
            $.each(attrs, function (key, val) {
                formField.attr(key, val);
            });
        }
    },

    placeButtons: function (output, field) {
        'use strict';
        if (field.okButton) {
            output.append(
                jQuery(document.createElement('input'))
                    .attr('type', 'submit')
                    .attr('class', field.okButtonClass)
                    .attr('value', field.okButton)
            );
        }
        if (field.cancelButton) {
            output.append(
                jQuery(document.createElement('input'))
                    .attr('type', 'button')
                    .attr('class', field.cancelButtonClass)
                    .attr('value', field.cancelButton)
            );
        }
    }
};


// Button cases:
// If no buttons, then blur saves, ESC cancels
// If just Cancel button, then blur saves, ESC or clicking Cancel cancels (careful of blur event!)
// If just OK button, then clicking OK saves (careful of blur event!), ESC or blur cancels
// If both buttons, then clicking OK saves, ESC or clicking Cancel or blur cancels
BestInPlaceEditor.forms = {
    "input": {
        activateForm: function () {
            'use strict';
            var output = jQuery(document.createElement('form'))
                .addClass('form_in_place')
                .attr('action', 'javascript:void(0);')
                .attr('style', 'display:inline');
            var input_elt = jQuery(document.createElement('input'))
                .attr('type', 'text')
                .attr('name', this.attributeName)
                .val(this.display_value);

            // Add class to form input
            if (this.inner_class) {
                input_elt.addClass(this.inner_class);
            }

            output.append(input_elt);
            this.placeButtons(output, this);

            this.element.html(output);
            this.setHtmlAttributes();

            this.element.find("input[type='text']")[0].select();
            this.element.find("form").bind('submit', {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
            if (this.cancelButton) {
                this.element.find("input[type='button']").bind('click', {editor: this}, BestInPlaceEditor.forms.input.cancelButtonHandler);
            }
            if (!this.okButton) {
                this.element.find("input[type='text']").bind('blur', {editor: this}, BestInPlaceEditor.forms.input.inputBlurHandler);
            }
            this.element.find("input[type='text']").bind('keyup', {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);
            this.blurTimer = null;
            this.userClicked = false;
        },

        getValue: function () {
            'use strict';
            return this.sanitizeValue(this.element.find("input").val());
        },

        // When buttons are present, use a timer on the blur event to give precedence to clicks
        inputBlurHandler: function (event) {
            'use strict';
            if (event.data.editor.okButton) {
                event.data.editor.blurTimer = setTimeout(function () {
                    if (!event.data.editor.userClicked) {
                        event.data.editor.abort();
                    }
                }, 500);
            } else {
                if (event.data.editor.cancelButton) {
                    event.data.editor.blurTimer = setTimeout(function () {
                        if (!event.data.editor.userClicked) {
                            event.data.editor.update();
                        }
                    }, 500);
                } else {
                    event.data.editor.update();
                }
            }
        },

        submitHandler: function (event) {
            'use strict';
            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.update();
        },

        cancelButtonHandler: function (event) {
            'use strict';
            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.abort();
            event.stopPropagation(); // Without this, click isn't handled
        },

        keyupHandler: function (event) {
            'use strict';
            if (event.keyCode === 27) {
                event.data.editor.abort();
                event.stopImmediatePropagation();
            }
        }
    },

    "select": {
        activateForm: function () {
            'use strict';
            var output = jQuery(document.createElement('form'))
                    .attr('action', 'javascript:void(0)')
                    .attr('style', 'display:inline'),
                selected = '',
                select_elt = jQuery(document.createElement('select'))
                    .attr('class', this.inner_class !== null ? this.inner_class : ''),
                currentCollectionValue = this.collectionValue,
                key, value,
                a = this.values;

            $.each(a, function(index, arr){
                key = arr[0];
                value = arr[1];
                var option_elt = jQuery(document.createElement('option'))
                    .val(key)
                    .html(value);

                if (currentCollectionValue) {
                  if (String(key) === String(currentCollectionValue)) option_elt.attr('selected', 'selected');
                }
                select_elt.append(option_elt);
            });
            output.append(select_elt);

            this.element.html(output);
            this.setHtmlAttributes();
            this.element.find("select").bind('change', {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
            this.element.find("select").bind('blur', {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
            this.element.find("select").bind('keyup', {editor: this}, BestInPlaceEditor.forms.select.keyupHandler);
            this.element.find("select")[0].focus();

            // automatically click on the select so you
            // don't have to click twice
            try {
              var e = document.createEvent("MouseEvents");
              e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
              this.element.find("select")[0].dispatchEvent(e);
            }
            catch(e) {
              // browser doesn't support this, e.g. IE8
            }
        },

        getValue: function () {
            'use strict';
            return this.sanitizeValue(this.element.find("select").val());
        },

        blurHandler: function (event) {
            'use strict';
            event.data.editor.update();
        },

        keyupHandler: function (event) {
            'use strict';
            if (event.keyCode === 27) {
                event.data.editor.abort();
            }
        }
    },

    "checkbox": {
        activateForm: function () {
            'use strict';
            this.collectionValue = !this.getValue();
            this.setHtmlAttributes();
            this.update();
        },

        getVa   }
    },

    "textarea": {
        activateForm: function () {
            'use strict';
            // grab width and height of text
            var width = this.element.css('width');
            var height = this.element.css('height');

            // construct form
            var output = jQuery(document.createElement('form'))
                .addClass('form_in_place')
                .attr('action', 'javascript:void(0);')
                .attr('style', 'display:inline');
            var textarea_elt = jQuery(document.createElement('textarea'))
                .attr('name', this.attributeName)
                .val(this.sanitizeValue(this.display_value));

            if (this.inner_class !== null) {
                textarea_elt.addClass(this.inner_class);
            }

            output.append(textarea_elt);

            this.placeButtons(output, this);

            this.element.html(output);
            this.setHtmlAttributes();

            // set width and height of textarea
            jQuery(this.element.find("textarea")[0]).css({'min-width': width, 'min-height': height});
            jQuery(this.element.find("textarea")[0]).autosize();

            this.element.find("textarea")[0].focus();
            this.element.find("form").bind('submit', {editor: this}, BestInPlaceEditor.forms.textarea.submitHandler);

            if (this.cancelButton) {
                this.element.find("input[type='button']").bind('click', {editor: this}, BestInPlaceEditor.forms.textarea.cancelButtonHandler);
            }

            if (!this.skipBlur) {
                this.element.find("textarea").bind('blur', {editor: this}, BestInPlaceEditor.forms.textarea.blurHandler);
            }
            this.element.find("textarea").bind('keyup', {editor: this}, BestInPlaceEditor.forms.textarea.keyupHandler);
            this.blurTimer = null;
            this.userClicked = false;
        },

        getValue: function () {
            'use strict';
            return this.sanitizeValue(this.element.find("textarea").val());
        },

        // When buttons are present, use a timer on the blur event to give precedence to clicks
        blurHandler: function (event) {
            'use strict';
            if (event.data.editor.okButton) {
                event.data.editor.blurTimer = setTimeout(function () {
                    if (!event.data.editor.userClicked) {
                        event.data.editor.abortIfConfirm();
                    }
                }, 500);
            } else {
                if (event.data.editor.cancelButton) {
                    event.data.editor.blurTimer = setTim   }, 500);
                } else {
                    event.data.editor.update();
                }
            }
        },

        submitHandler: function (event) {
            'use strict';
            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.update();
        },

        cancelButtonHandler: function (event) {
            'use strict';
            event.data.editor.userClicked = true;
            clearTimeout(event.data.editor.blurTimer);
            event.data.editor.abortIfConfirm();
            event.stopPropagation(); // Without this, click isn't handled
        },

        keyupHandler: function (event) {
            'use strict';
            if (event.keyCode === 27) {
                event.data.editor.abortIfConfirm();
            }
        }
    }
};

BestInPlaceEditor.defaults = {
    locales: {},
    ajaxMethod: "put",  //TODO Change to patch when support to 3.2 is dropped
    ajaxDataType: 'text',
    okButtonClass: '',
    cancelButtonClass: '',
    skipBlur: false
};

// Default locale
BestInPlaceEditor.defaults.locales[''] = {
    confirmMessage: "Are you sure you want to discard your changes?",
    uninitializedForm: "The form was not properly initialized. getValue is unbound",
    placeHolder: '-'
};

jQuery.fn.best_in_place = function () {
    'use strict';
    function setBestInPlace(element) {
        if (!element.data('bestInPlaceEditor')) {
            element.data('bestInPlaceEditor', new BestInPlaceEditor(element));
            return true;
        }
    }

    jQuery(this.context).delegate(this.selector, 'click', function () {
        var el = jQuery(this);
        if (setBestInPlace(el)) {
            el.click();
        }
    });

    this.   });

    return this;
};



/*1.0*/
// Initiliaze best-in-place in-place editing
jQuery(document).ready(function($) {
  $(".best_in_place").best_in_place();

  $('.best_in_place').bind("ajax:succe
  });

  $('.best_in_place').bind("ajax:error", function (event, xhr) {
    if($(this).data("noError")) {
      return true;
    }

    var errors = JSON.parse(xhr.responseText);

    if (errors.errors != undefined) {
      errors = _.map(errors.err   });
    }

    $UI.growl({
      caption: _.toSentence(errors),
      type: 'error'
    });
  });

  $(document).on("focusin", ".best_in_place input", function (event) {
    $(this).closest(".best_in_place").addClass('editing');
  });
  $(document).on("focusout", ".best_in_place inp
  });

});
/*1.0*/
// Moved from spiceworks.js

var Cookie = {
  get: function( name ){
    var nameEQ = escape(name) + "=", ca = document.cookie.split(';');
    for (var i = 0, c; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0) == ' ') { c = c.substring(1, c.length); }
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
  },
  set: function( name, value, options ){
    options = (options || {});
    if ( options.expiresInOneYear ){
      var today = new Date();
      today.setFullYear(today.getFullYear()+1, today.getMonth(), today.getDay());
      options.expires = today;
    }
    var curCookie = escape(name) + "=" + escape(value) +
      ((options.expires) ? "; expires=" + options.expires.toGMTString() : "") +
      ((options.path)    ? "; path="    + options.path : "") +
      ((options.domain)  ? "; domain="  + options.domain : "") +
      ((options.secure)  ? "; secure" : "");
    document.cookie = curCookie;
  },
  removeCookie: function ( key, options ) {
    options = (options || {});
    var date = new Date();
    date.setTime(date.getTime()-(1*24*60*60*1000));
    options.expires = date;
    this.set(key, '', options);
  },
  hasCoo
  },
  checkSupp
  }
};

window.Cookie = Cookie;
/*1.0*/
(function($) {
  window.Browser = _.extend({
    IE6:false,
    IE7:false,
    IE8:false,
    hasStylesheet: function (stylesheet) {
      var document_stylesheets;
      var count;
      var sheet;
      document_stylesheets = document.styleSheets;
      if (!document_stylesheets){
        return false;
      }
      count = document_stylesheets.length;
      while(count){
        --count;
        sheet = document_stylesheets[count];
        if(sheet.href){
          if(sheet.href.indexOf(stylesheet) > 0){
            return true;
          }
        }
      }
      return false;
    }
  }, window.Browser);

  window.User = window.User || {};
  window.UserPermissions = window.UserPermissions || {};

  window.SpiceworksApplication = window.SpiceworksApplication || {};

  window.Application = _.extend({
    runMode:'production',
    narrowLayout: function(){
      $(document.body).addClass('narrow');
      Application.narrow = true;
    },
    updatePageUri: function(hard_link){
      var my_href = location.href.toString(), matches = null;
      matches = my_href.match(/#(.+)/);
      if (matches){
        my_href = my_href.replace(matches[0], hard_link);
        location.href = my_href;
      } else {
        location.href += hard_link;
      }
    },
    inDevelopment: function() {
      return this.runMode == 'development';
    },
    inProduction: function() {
      return this.runMode == 'production';
    },
    // Simple refresh, just reset the iframe src to the same thing (will load another random ad with the same context)
    // Add &jsr=1 if needed (javascript refresh!)
    refreshAd: function () {
      var frame = $('#sidebar_box_frame') || $('#adframe');
      if (frame && frame.length) {
        var src = frame[0].src.toString();
        if (!src.match(/jsr\=1/)) {
          src = src + "&jsr=1";
        }
        frame[0].src = src;
      } else if (typeof(gekko) != 'undefined') {
        if (gekko.refresh) {
          gekko.refresh();
        }
      }
    }
  }, window.Application );

  window.CurrentUser = _.extend({
    permissionClass:'guest',
    guest: function(){
      return this.permissionClass == 'guest';
    },
    unverified: function(){
      return this.permissionClass == 'unverified';
    },
    anonymous: function(){
      return this.permissionClass == 'anonymous';
    },
    verif   },
    emplo   }
  }, window.CurrentUser );

})(jQuery);
/*1.0*/
// ES6+ Object.assign polyfill for ES5
// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    va   },
    writable: true,
    configurable: true
  });
}
;
/*1.0*/



var JoinAndLogin = JoinAndLogin || {};

Object.assign(JoinAndLogin, {
  trackAndShowForm: function(form, trackingInfo, options) {
    var loginForm = form === 'login';
    JoinAndLogin.trackJoinLoginEvent((loginForm ? 'Login' : 'Join'), trackingInfo);

    if(typeof options === 'undefined' || !options) {
      options = {};
    }

    if(options.fromNavbar && typeof SignupTypes !== 'undefined') {
      options.signupType = SignupTypes.fromNavbar;
    }

    if(options.redirect) {
      JoinAndLogin.redirectToJoinLogin(form, options);
      return;
    }

    JoinLoginWrapper.showModalForm(form, options);
  },

  redirectToJoinLogin: function(form, options) {
    var redirectUrl = (form === 'login') ? '/login' : '/join';
    var referer = (options.destination) ? options.destination : (window.location.pathname + window.location.search);
    var communityURL   = window.COMMUNITY_URL || '';
    var refererFullUrl = window.origin + referer;

    redirectUrl += '?referer=' + encodeURIComponent(referer);
    redirectUrl += '&referer_full_url=' + encodeURIComponent(refererFullUrl);

    if (options.signupType) {
      redirectUrl += '&signup_type=' + encodeURIComponent(options.signupType);
    }

    window.location.href = communityURL + redirectUrl;
  },

  TRACKING_DEFAULTS: {
    action: 'click',
    label: '',
    nonInteraction: false
  },

  trackJoinLoginEvent: function(category, trackingInfo) {
    if(GoogleAnalytics) {
      if(typeof trackingInfo === 'undefined') {
        trackingInfo = {};
      }

      if(trackingInfo.doNotTrack) {
        return;
      }

      trackingInfo = Object.assign({}, JoinAndLogin.TRACKING_DEFAULTS, trackingInfo);

      if(Application.inDevelopment() && !trackingInfo.label.length) {
        console.warn('JoinAndLogin.trackAndShowForm: Please provide a valid eventLabel for tracking');
      }

      GoogleAnalytics.trackEvent(category, trackingInfo.action, trackingInfo.label, null, trackingInfo.nonInteraction);
    }
  },

  modalSh
  },
});
/*1.0*/
(function() {
  function AltModalRegistryEntry (options) {
    this.timeout = options.timeout;
    this.xhr = options.xhr;
    this.$vm = options.$vm;
    this.prevented = options.prevented || false;
  };

  AltModalRegistryEntry.prototype = {
    update: function(options) {
      this.timeout = options.timeout || this.timeout;
      this.xhr = options.xhr || options.xhr;
      this.$vm = options.$vm || options.$vm;
      this.prevented = options.prevented || this.prevented;
    },

    destroy: function() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      if (this.xhr) {
        this.xhr.abort();
      }

      if (this.$vm) {
        this.$vm.$el.remove();
        this.$vm.$destroy();
      }
    }
  }
  };

  AltModalRegistry.modal = AltModalRegistryEntry;

  AltModalRegistry.prototype = {
    constructor: AltModalRegistry,

    register: function(name, options) {
      if(this._modals[name]) {
        this._modals[name].update(options);
      } else {
        this._modals[name] = new AltModalRegistryEntry(options);
      }
    },

    destroy: function(name) {
      if (!this._modals[name]) { return; }

      this._modals[name].destroy();
    },
  }

  var _modalRegistry = window.getModalRegistry ? window.getModalRegistry() : new AltModalRegistry();
  window.getModalRegistry = window.getModalRegistry || function() {
    return _modalRegistry;
  }
})();

var JoinAltModal = {
  checkForAltModal: function() {
    if( window.SplashModalConfig && 
      window.SplashModalConfig.show &&
      JoinAltModal.shouldShowPhotoModal()) {

      JoinAltModal.asyncPhotoModal();
    }
    else if(JoinAltModal.shouldShowRepeatVisitModal()) {
      JoinAltModal.asyncRepeatVisitModal();
    }
  },

  isModalPrevented: function(type) {
    var modal = JoinAltModal.modalRegistry && JoinAltModal.modalRegistry._modals[type];
    return modal && modal.prevented;
  },

  asyncAltJoinModal: function(data, callback, callBackOptions) {
    if(typeof data !== 'object') {
      data = {};
    }

    if(!data.referer) {
      data.referer = window.location.pathname + window.location.search;
    }

    if(typeof data.connect === 'undefined') {
      data.connect = SignupTypes && SignupTypes.connectProduct;
    }

    if(window.JoinLoginAltWrapper) { // Do not load the pack again if it's already on page
      data.exclude_pack = true;
    }

    var request = jQuery.get('/join/alt_modal', data)
    .success(function(xhr) {
      jQuery('body').append(xhr.partial);

      callback(callBackOptions);
    });

    if (data.type) {
      JoinAltModal.registerModal(data.type, {xhr: request});
    }
  },

  showAltJoinModal: function(modalType, options, callback) {
    if(
      !JoinAndLogin.modalShown() &&
      typeof JoinLoginAltWrapper !== 'undefined' &&
      JoinLoginAltWrapper[modalType] &&
      !jQuery('.sui-modal_overlay.is-shown').length
    ) {
      JoinLoginAltWrapper[modalType].showModal(options);
      JoinAltModal.registerModal(modalType, { $vm: JoinLoginAltWrapper[modalType] })
      if(typeof callback === 'function') {
        callback();
      }
    }
  },

  delayedShowAltJoinModal: function(modalType, delay, options, callback) {
    var timeout = setTim   }, delay);
    JoinAltModal.registerModal(modalType, { timeout: timeout })
  },

  getTopicId: function() {
    var $topicData = jQuery('[data-config=topicData]');

    if($topicData.length && $topicData.text()) {
      try {
        var topicJson = jQuery.parseJSON($topicData.text());
        return topicJson.id;
      }
      catch(e) {
        return null;
      }
    }
  },

  /********************************************************************************/
  /* 6-second modal                                                               */
  /********************************************************************************/

  photoModalCookie: 'photo_modal_shown',

  setPhotoModalCookie: function() {
    var date = new Date();
    date.setTime( date.getTime()+(24*60*60*1000) );
    Cookie.set(JoinAltModal.photoModalCookie, 'PhotoModalShown', { path: '/', expires: date } );
  },

  photoModalDelay: function() {
    var delay = 6;
    if(SignupTypes && SignupTypes.photoModalDelay) {
      delay = SignupTypes.photoModalDelay;
    }
    return delay * 1000;
  },

  shouldShowPhotoModal: function(fromDigest) {
    if(
      SignupTypes.repeatVisitModalEnabled || 
      !SignupTypes.photoModalEnabled ||
      JoinAltModal.isModalPrevented('six-second')
    ){
      return false;
    }

    if(typeof fromDigest === 'undefined') {
      fromDigest = window.SplashModalConfig && window.SplashModalConfig.fromDigest;
    }

    if(fromDigest) {
      // this is a registered user that happens to be logged out
      // set the cookie so they don't see it later and don't show the modal
      JoinAltModal.setPhotoModalCookie();
      return false;
    }
    // cookie check moved to community_helper
    return !$UI.useMobile;
  },

  asyncPhotoModal: function(fromDigest) {
    var callBackOptions = { delay: JoinAltModal.photoModalDelay() },
        data = { type: 'six-second' },
        topicId = JoinAltModal.getTopicId();

    if(topicId) {
      data.topic_id = topicId;
    }

    if(typeof fromDigest !== 'undefined') {
      callBackOptions.fromDigest = fromDigest;
    }
    else if(window.SplashModalConfig && window.SplashModalConfig.fromDigest) {
      callBackOptions.fromDigest = window.SplashModalConfig.fromDigest;
    }

    JoinAltModal.asyncAltJoinModal(data, JoinAltModal.showPhotoModal, callBackOptions);
  },

  showPhotoModal: function(options) {
    fromDigest = options.fromDigest || false;
    // have to check again for pages that don't use the async method
    if(!JoinAltModal.shouldShowPhotoModal(fromDigest)) {
      return false;
    }
    delay = options.delay || JoinAltModal.photoModalDelay();

    JoinAltModal.delayedShowAltJoinModal('six-second', delay, {}, JoinAltModal.setPhotoModalCookie);
  },

  /********************************************************************************/
  /* Repeat visit modal                                                           */
  /********************************************************************************/

  setRepeatVisitCookie: function() {
    var date = new Date();
    date.setTime( date.getTime()+(24*60*60*1000) );
    Cookie.set('repeat_visit_modal', 'shown', { path: '/', expires: date } );
  },

  shouldShowRepeatVisitModal: function() {
    return (
      SignupTypes &&
      SignupTypes.repeatVisitModalEnabled &&
      !$UI.mobileView() &&
      !JoinAltModal.isModalPrevented('repeat-visit')
    );
  },

  asyncRepeatVisitModal: function() {
    var data = { type: 'repeat-visit' },
        topicId = JoinAltModal.getTopicId();

    if(topicId) {
      data.topic_id = topicId;
    }

    JoinAltModal.asyncAltJoinModal(data, JoinAltModal.showRepeatVisitModal);
  },

  showRepeatVisitModal: function() {
    JoinAltModal.delayedShowAltJoinModal('repeat-visit', 6000, {}, JoinAltModal.setRepeatVisitCookie);
  },

  registerMo
  },

  destroyMo
  },

  preventMo
  }
};

/********************************************************************************/
/* Entry point                                                                  */
/********************************************************************************/

jQuery(function($) {
  JoinAltModal.modalRegistry = window.getModalRegistry();
  JoinAltModal.checkForAltModal();

  GoogleAnalytics.triggerOptimize('join-alt-modals');
});
/*1.0*/
(function($) {
  // Bindings of various actions that call up the join/login form

  $(document).ready(function() {

    $("[data-join-action='join-promotion']").click(function(event) {
      event.preventDefault();

      JoinAndLogin.trackAndShowForm('join', {label: 'Join Promotion Alert'}, {signupType: SignupTypes.fromPanel});
    });

    $("[data-no-login-action]").click(function(event) {
      event.preventDefault();

      var $target = $(this),
          formAction = $target.data('no-login-action'),
          actionLabel = formAction === 'login' ? 'Login' : 'Join',
          itemType = $target.data('no-login-type') === 'link' ? 'Link' : 'Button',
          eventLabel = 'Welcome Header ' + actionLabel + ' ' + itemType,
          extraLabel = $target.data('no-login-label');

      if(extraLabel && extraLabel.length) {
        eventLabel = eventLabel + ' - ' + extraLabel;
      }

      JoinAndLogin.trackAndShowForm(formAction, {label: eventLabel});
    });

    $("[data-join-action='join-now-bottom']").click(function(event) {
      event.preventDefault();

      JoinAndLogin.trackAndShowForm('join', {label: 'Join Now Bottom Button'}, {signupType: SignupTypes.fromPanel});
    });

    $("[data-login-link]").click(function(event) {
      event.preventDefault();
      var eventLabel = $(this).data('login-link');
      if(!(typeof eventLabel === 'string' && eventLabel.length)) {
        eventLabel = 'Login Link';
      }

      JoinAndLogin.trackAndShowForm('login', {label: eventLabel});
    });

  });
})(jQuery);
/*1.0*/





window.SignupTypes = window.SignupTypes || {};

jQuery(function($) {
  if(window.registrationNotice) {
    $(document).ready(function() {
      if(registrationNotice === 'verified') {
        var msg = 'Account verified! Congratulations you’ve unlocked all features in Spiceworks!';
      }
      else {
        var msg = 'Account created! Check the email we sent to verify your account and unlock all features.';
      }

      $UI.growl({ caption: msg, type: 'success' });
    });
  }
});

/*******************************/
/* Join-And-Login Pseudo-Modal */
/*******************************/
/* The pseudo-modal box that includes the Join form _and_ Login form. Also includes the "mainModal" */
/* which is the instance of the "pseudo-modal" that actually pops up on most pages as a real modal  */
var JoinAndLogin = JoinAndLogin || {};
jQuery.extend(JoinAndLogin, {
  init: function($) {
    jQuery('body').on('click', 'a[data-social-join]', function() {
      // Need to open window immediately to avoid popup from being blocked
      var socialPopup = window.open('', 'sw_social_join', 'width=760,height=640'),
          social_network = jQuery(this).attr('data-social-join');

      if(!socialPopup) {
        GoogleAnalytics.trackEvent('Join Login Form', 'failure', 'Social join popup failure - ' + social_network, 0, null);
        return;
      }
      socialPopup.document.write('Redirecting...');

      var $this = jQuery(this),
          form = $this.attr('data-join-form'),
          message = $this.attr('data-join-message'),
          signupType = $this.attr('data-signup-type'),
          referrer = window.location.pathname + window.location.search,
          communityUrl = window.COMMUNITY_URL || '';

      if ( jQuery(this).attr('data-referrer') ){
        referrer = jQuery(this).attr('data-referrer');
      }

      var referrerFullUrl = window.origin + referrer;

      if (referrer !== undefined  &&  referrer !== null  && referrer.length > 0) {
        Cookie.set('social_auth_referer_url', referrer, {path: '/'});
      } else {
        where = document.location;
        Cookie.set('social_auth_referer_url', where, {path: '/'});
      }

      var windowUrl = communityUrl + '/auth/' + social_network + '?form=' + form + '&message=' + message;

      if(typeof signupType !== 'undefined') {
        windowUrl += '&signup_type=' + signupType;
      }

      windowUrl += '&referer_full_url=' + encodeURIComponent(referrerFullUrl);

      socialPopup.location.href = windowUrl;
      GoogleAnalytics.trackEvent('Join Login Form', 'show', 'Social join popup shown - ' + social_network, 0, null);
    });

    JoinAndLogin.registerModalLaunchTrigger();

    // Auto-show login or join on URL param
    if( $('[data-auto-join-modals]').length ) {
      var urlParams = window.location.search.substr(1).split('&');
      if( _.contains( urlParams, 'show_modal=login' ) ) {
        JoinAndLogin.trackAndShowForm('login', { doNotTrack: true });
      }
      if( _.contains( urlParams, 'show_modal=join' ) ) {
        JoinAndLogin.trackAndShowForm('join', { doNotTrack: true });
      }
    }
  },
  registerModalLaunchTrigger: function() {
    jQuery(document).on( 'click', 'a[data-toggle="modal"][data-modal-name="join"]', function(event) {
      event.preventDefault();
      if(jQuery(this).data('action') !== 'nav-join') {
        JoinAndLogin.trackAndShowForm('join', { label: 'Modal Launch' });
      }
    });

    jQuery(document).on( 'click', 'a[data-toggle="modal"][data-modal-name="login"]', function(event) {
      event.preventDefault();
      if(jQuery(this).data('action') !== 'nav-login') {
        JoinAndLogin.trackAndShowForm('login', { label: 'Modal Launch' });
      }
    });
  }
});

jQuery(function($) {
  JoinAndLogin.init($);
  if (SignupTypes.joinFooterEnabled) {
    JoinFooter.init();
  }
});

/***********************************************************************/
/* Join functionality _not_ related to the Join-And-Login Pseudo-Modal */
/***********************************************************************/

var Join = {
  guestState: function(data, commit) {
        commit = typeof commit !== 'undefined' ? commit : false;

        if( this.guest_state === null || this.guest_state === undefined ) {
            this.guest_state = {};
        }

        if( this.guest_state_token === undefined ) {
          this.guest_state_token = null;
        }

        if( data !== null && data !== undefined ) {
            if( data.content_type != this.guest_state.content_type ) {
                this.guest_state = data;
            }
            else {
                jQuery.extend( this.guest_state, data );
            }
        }

        var date = new Date();
        date.setTime( date.getTime()+(1*24*60*60*1000) );

        if(this.guest_state_token == null) {
          this.guest_state_token = Join.commitGuestState( this.guest_state );
          Cookie.set('guest_state', this.guest_state_token, { path: '/', expires: date } );
        } else {
          Join.updateGuestState( this.guest_state, this.guest_state_token );
        }



        return this.guest_state;
  },
  updateGuestState: function(state, token) {
    jQuery.ajax({
      async: false,
      url: "/api/guest_state/" + token,
      data: {"content": JSON.stringify(state)},
      dataType: "json",
      type: "PUT"
    });
  },
  commitGuestState: function(state) {
    var token;

    jQuery.ajax({
      async: false,
      url: "/api/guest_state",
      data: {"content": JSON.stringify(state)},
      dataType: "json",
      type: "POST",

      su     },

      fa     }
    });

    return token;
  }
};

/************************************************************************/
/* Login functionality _not_ related to the Join-And-Login Pseudo-Modal */
/************************************************************************/
var Login = {
  showConnectExisting:function() {
    jQuery("#setup_new_account").slideUp(250, function() {
      jQuery("#setup_existing_connection").slideDown(250);
    });
  },
  showSe);
  },
  retrySocialSiteLogin: function(social_nw_provider_name, form) {
    window.location.href = "/auth/" + social_nw_provider_name + "?form=" + form;
  }
};

var JoinFooter = {
  footer: function(){ return jQuery('.join-footer') },
  analyticsLogged: false,
  atBottom: false,
  scrollBound: false,
  cookieName: 'join_footer_hidden',
  init: function(){
    var footer = JoinFooter.footer();
    scrollThrottle = _.throttle(JoinFooter.scrollFooter, 20);
    JoinFooter.setHeight(scrollThrottle);
    if ( JoinFooter.footerEnabled() ){
      jQuery(window).on('scroll', scrollThrottle);
      JoinFooter.scrollBound = true;
    }

    jQuery('.join-footer-products').find('.community-button').on('click', function(event){
      event.preventDefault();

      JoinAndLogin.trackAndShowForm('login', { label: 'Sticky Footer - Community Link' }, {signupType: SignupTypes.fromFooter});
    });

    // on resize bind/unbind and show/hide the footer
    // if too narrow to read message
    jQuery(window).on('resize', _.throttle(function(){
      JoinFooter.setHeight(scrollThrottle);
      if (JoinAndLogin.modalShown()) {
        footer.hide();
      }
      else if ( !JoinFooter.footerWideEnough() ){
        if ( JoinFooter.scrollBound ){
          JoinFooter.scrollBound = false;
          jQuery(window).off('scroll', scrollThrottle);
          footer.hide();
        }
      }
      else if ( !JoinFooter.scrollBound ){
        jQuery(window).on('scroll', scrollThrottle);
        JoinFooter.scrollBound = true;
        footer.show();
      }
    }, 20));

    jQuery('.challenge-footer_hide-footer').on('click', function(){
      JoinFooter.hideFooter();
      GoogleAnalytics.trackEvent('Daily Challenge Guest ' + DailyChallenge.analyticsCategory, 'click', 'Hide Challenge Footer');
    });

  },
  footerEnabled: function(){
    return !$UI.useMobile &&
           !SignupTypes.marketingPage &&
           SignupTypes.joinFooterEnabled &&
           JoinFooter.footerWideEnough() &&
           !Cookie.get(JoinFooter.cookieName) &&
           !(jQuery('.hide-join-footer').length)
  },
  hideFooter: function(){
    var date = new Date();
    date.setTime( date.getTime()+(24*60*60*1000) );
    Cookie.set(JoinFooter.cookieName, 'JoinFooterHidden', { path: '/', expires: date } );
    JoinFooter.footer().hide();
  },
  scrollFooter: function() {
    var footer = JoinFooter.footer();
    var enabled = JoinFooter.footerEnabled();

    if ( !enabled ){
      if( footer.is(':visible') ){
        footer.hide();
      }
      return false;
    }
    else{
      if ( !footer.is(':visible') ){
        footer.show()
      }
    }

    var footerHeight = footer.height();
    var hideAtBottom = jQuery('.read-next-footer').length == 0;

    // pushes the footer into/out of view if scrolling between 0 and the footers height
    // starts invisible, scrolls into view as you scroll down, and hides again if you scroll up
    if ( window.scrollY <= footerHeight ) {
      var footerOffset = window.scrollY-footerHeight
      footer.css('bottom', footerOffset+'px' );
    }
    else if ( !JoinFooter.atBottom ){
      footer.css('bottom', 0);
    }

    // only track the first time footer is fully shown
    if ( window.scrollY > footerHeight && !JoinFooter.analyticsLogged ){
      JoinFooter.analyticsLogged = true;
      if (jQuery('.join-footer.challenge-footer').length > 0){
        GoogleAnalytics.trackEvent('Daily Challenge Guest ' + DailyChallenge.analyticsCategory, 'show', 'Footer', 0, true);
      }
      else {
        GoogleAnalytics.trackEvent('Join Login Form', 'Footer', 'Shown', 0, true);
      }
    }
    // hide if scroll to bottom of page if not infinite scroll
    if ( hideAtBottom ){
      if(jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height()) {
        footer.slideUp(500);
        JoinFooter.atBottom = true;
      }
      else if ( JoinFooter.atBottom ){
        JoinFooter.atBottom = false;
        footer.slideDown(500);
      }
    }
  },
  footerWideEnough: function() {
    var width = jQuery(window).width();
    // margins are 5% on each side
    width -= width * 0.1;
    var footer = JoinFooter.footer();
    var footerContentWidth = 0;
    var footerFound = false;
    if(footer.find('.message').length > 0){
      footerContentWidth += footer.find('.message').outerWidth(true);
      footerFound = true;
    }
    if(footer.find('.join-footer-products').length > 0){
      footerContentWidth += footer.find('.join-footer-products').outerWidth(true);
      footerFound = true;
    }
    if(footer.find('.challenge-question_choice-row').length > 0 ){
      width = jQuery(window).width();
      footerContentWidth += footer.find('.challenge-question_choice-row').outerWidth(true);
      footerFound = true;
    }

    return footerContentWidth < width && footerFound
  },
  setHeight: function(throttle){
    var footer = JoinFooter.footer();
    var footerHeight = 100;
    footer.height(footerHeight);
    jQuery('.join-footer .message').css('line-height', footerHeight + "px");
    if ( !JoinFooter.scrollBound ){
      jQuery(window).on('scroll', throttle);
      JoinFooter.scrollBound = true;
    }
    footer.show();
  }
};
/*1.0*/
if (typeof UrlHelpers === 'undefined') { UrlHelpers = {}; }

UrlHelpers.ASSET_HOST = "https://community.spiceworksstatic.com";

UrlHelpers.asset_path = function(path) {
  if( path == null || path == '' ) { return null; }

  if ( path.substring(0,2) === '//' ||  path.substring(0,4) === 'http' ) {
    return path;
  }

  if( path[0] == '/' ) {
    return '/' + path.substring(1);
  }

  var cdn_path = UrlHelpers.ASSET_HOST;
  if($UI_ENV && $UI_ENV.environment === 'development') {
    cdn_path = '';
  }

  return cdn_path + '/assets/' + path;
};

UrlHelpers.avatar_path = function(path) {
  if( path == null || path == '' ) { return null; }

  if ( path.substring(0,2) === '//' ||  path.substring(0,4) === 'http' ) {
    return path;
  }

  if (path[0] !== '/') {
    path = '/' + path;
  }

  return UrlHelpers.ASSET_HOST + path;
};

UrlHelpers.invitation_join_waiting_list_path = function() {
  return "/invitation/join_waiting_list";
};

UrlHelpers.invitation_activate_code_path = function() {
  return "/invitation/activate_code";
};

UrlHelpers.invitation_check_invitation_status_path = function() {
  return "/invitation/check_invitation_status";
};

UrlHelpers.invitation_peer_code_generate_path = function() {
  return "/invitation/peer_code_generate";
};

UrlHelpers.has_insecure_ -1;
};

UrlHelpers.best_answer_ id;
}
;
/*1.0*/

if (typeof SocialHelpers === 'undefined') { SocialHelpers = {}; }

// used on topics
SocialHelpers.sharePath = function( siteName, title, contentLink ) {
  var shareUrl = '';

  if( !contentLink.match('http://') && !contentLink.match('https://')) {
    contentLink = window.COMMUNITY_URL + contentLink;
  }
  title = encodeURIComponent(title);
  contentLink = _.escape(contentLink);

  switch (siteName) {
    case 'twitter':
      shareUrl = 'https://twitter.com/intent/tweet?text=' + title + ' ' + contentLink;
      break;
    case 'facebook':
      shareUrl = 'http://www.facebook.com/sharer.php?u=' + contentLink + '&amp;t=' + title;
      break;
    case 'linkedin':
      shareUrl = 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + contentLink + '&amp;title=' + title;
      break;
    case 'reddit':
      shareUrl = 'http://www.reddit.com/submit?url=' + contentLink + '&amp;title=' + title;
      break;
    case 'stumbleupon':
      shareUrl = 'http://www.stumbleupon.com/submit?url=' + contentLink + '&amp;title=' + title;
      break;
    case 'mail':
      shareUrl = 'mailto:?subject=Spiceworks%20Community:' + title + '&body=I%20wanted%20to%20share%20this%20page%20from%20the%20Spiceworks%20IT%20Community%20with%20you:%0D%0A' + contentLink;
      break;
  }

  return shareUrl;
}

if (typeof UIHelpers === 'undefined') { UIHelpers = {}; }

if (typeof TextHelpers === 'undefined') { TextHelpers = {}; }
if (typeof ImageHelpers === 'undefined') { ImageHelpers = {}; }

TextHelpers.parameterize = function(text) {
  var result = jQuery.trim(text).toLowerCase();
  return result.replace(/[^a-z0-9\-_]/g, "-").replace(/\-{2}/g, "-").replace(/^\-|\-$/g, "");
}

TextHelpers.simpleFormat = function(text) {
  text = (text || '').replace(/\r\n?/, "\n");
  text = jQuery.trim(text);
  text = Handlebars.Utils.escapeExpression(text);
  if (text.length > 0) {
    text = '<p>' + text.replace(/\n\s*\n+/g, '</p><p>').replace(/\n/g, '<br />') + '</p>';
  }
  return text;
}

TextHelpers.truncate = function(text, truncate_length) {
  if((typeof text !== undefined) && (text !== undefined) && (text !== null)) {
    if(text.length <= truncate_length) {
      return text;
    }
    else {
      return text.substr(0, truncate_length) + "...";
    }
  }
  return "";
}

TextHelpers.titleize = function(string) {
  if(!string.length) {
    return '';
  }

  var words = string.replace(/_/g, ' ').split(' );
  });

  return words.join(' ');
};

TextHelpers.howtoMarkdownCapv>';
};

ImageHelpers.resizeImageByDimensions = function(image, divWidth, divHeight, fill) {
  var imageWidth, imageHeight, ratio, topShift, leftShift;
  imageWidth = image.naturalWidth;
  imageHeight = image.naturalHeight;

  // IE8 doesn't support naturalWidth and naturalHeight
  // this is the work around
  if(imageWidth === undefined || imageHeight === undefined) {
    var new_image = new Image();
    new_image.src = jQuery(image).attr("src");
    imageWidth = new_image.width;
    imageHeight = new_image.height;
  }

  // always resize if we want to fill the container fully
  // otherwise, only do it if image is too big
  resize = (fill || (imageWidth > divWidth || imageHeight > divHeight));

  if(resize) {
    // don't need to fill the container, center vertically
    if(!fill && imageWidth < divWidth) {
      leftShift = 0;
      topShift = Math.round((imageHeight - divHeight)/2);
    }
    // don't need to fill the container, center horizontally
    else if(!fill && imageHeight < divHeight) {
      topShift = 0;
      leftShift = Math.round((imageWidth - divWidth)/2);
    }
    // image too tall
    else if((divWidth/divHeight) > (imageWidth/imageHeight)) {
      ratio = divWidth / imageWidth;
      imageWidth = divWidth;
      imageHeight = Math.round(imageHeight * ratio);
      leftShift = 0;
      topShift = Math.round((imageHeight - divHeight)/2);
    }
    // image too wide
    else {
      ratio = divHeight / imageHeight;
      imageWidth = Math.round(imageWidth * ratio);
      imageHeight = divHeight;
      topShift = 0;
      leftShift = Math.round((imageWidth - divWidth)/2);
    }
    jQuery(image).css({
      width: imageWidth + "px",
      height: imageHeight + "px",
      "margin-top": "-" + topShift + "px",
      "margin-left": "-" + leftShift + "px",
      'min-width': 0,
      'min-height': 0,
      'max-width': 'none',
      'max-height': 'none'
    });
  }
  return resize;
}

UIHelpers.parseXhrJson = function(jqXHR) {
  // JsLogging showed this function is in use
  if( jqXHR && jqXHR.responseText ) {
    var json = null;
    try { json = jQuery.parseJSON(jqXHR.responseText); } catch(err) {}
    return json;
  }
  return null;
}

UIHelpers.parseXhrErrorMesage;
}

UIHelpers.showUnhandledError = function(options) {
  // JsLogging showed this function is in use
  if( !options ) { options = {}; }
  if( _.isString(options) ) { options = { message: options }; }
  var jqXHR = options.jqXHR || options; // TODO: Track down where we are passing jqXHR as a property and just pass it directly
  var message = UIHelpers.parseXhrErrorMessage(jqXHR) || options.message || "Well, that didn't work as expected. Contact support if this happens again.";
  $UI.growl({ caption:message, type:'error' });
};

(function( $ ) {
  var proto = $.ui.autocomplete.prototype,
    initSource = proto._initSou);
  }
  $.extend( proto, {
    _initSource: function() {
      if ( this.options.html && $.isArray(this.options.source) ) {
        this.so     };
      } else {
        initSource.call( this );
      }
    },
    _rende
    }
  });
})( jQuery );

if (typeof AutoCompleteHelpers === 'undefined') {AutoCompleteHelpers = {}; }

AutoCompleteHelpers.usernameAutocomplete = function(input_id) {
  $input = jQuery('#'+input_id);
  $input.autocomplete({
    source: function(req, add) {
      jQuery.getJSON('/messages/username_auto_complete?', req, function(data) {
        var suggestions = [];
        jQuery.each(data, function(i, val){
          var label_html = "<img src='" + val.image_url + "'><span id='" + val.id + "'class='" + val.kind + "'>" + val.name + "</span>";
          suggestions.push({label : label_html, value : val.name, id : val.id});
        });
        add(suggestions);
      });
    },
    select: function(e, ui){
      jQuery('.form-with-autocomplete input#'+input_id).css({ 'color' : jQuery('span#'+ui.item.id).css('color'), 'font-weight' : 'bold' });
    },
    appendTo: 'div.form-with-autocomplete',
    html: true,
    delay: 100
  });
  jQuery(".ui-autocomplete").css("top", $input.position().top+24);
  jQuery(".ui-autocomplete").css("left", $input.position().left);
}

if (typeof LinkHelpers === 'undefined') {LinkHelpers = {}; }

LinkHelpers.external_link_to = function(body, url, html_options) {
  html_options = (typeof html_options !== 'undefined') ? html_options : {};
  body = body === null ? url : body;
  var tag = jQuery("<a></a>")
          .attr('href', url)
          .attr('target', '_blank')
          .append(body);

  if(!url.match(/^https?:\/\/(?:www\.)?community\.spiceworks\.com/)){
    tag.attr('rel', 'nofollow noreferrer');
  }

  jQuery.each(html_op);
  })

  return tag.prop('outerHTML');
}

LinkHelpers.removeNoreferrerFromChromeAndFF = function(linkSelector) {
  /*
      Hack to remove noreferrer from Chrome and Firefox 52
  */
  var isChrome = navigator.userAgent.indexOf("Chrome") != -1,
      firefoxInfo = navigator.userAgent.match(/Firefox\/(.*)/),
      isFirefox52 = !!firefoxInfo && Number(firefoxInfo[1]) >= 52;
  if (isChrome || isFirefox52) {
    jQuery(linkSelector).each(function(i, el) {
      jQuery(el).attr('rel', function(i, val) {
        if(val) {
          return val.replace('noreferrer', '');
        }
      });
    })
  }
};

function elementIsInView(element) {
  if (!element) { return false; }

  var elementPositionInfo = element.getBoundingClientRect(),
      elementTop = elementPositionInfo.top,
      elementBottom = elementPositionInfo.bottom,
      windowHeight = window.innerHeight;

  return (elementTop >= 0 && elementBottom <= windowHeight);
}

function getShowKey(registrationUrl) {
  if (!registrationUrl) { return ''; }
  // general format of registrationUrl = https://onlinexperiences.com/Launch/QReg/ShowKey=47761&LangLocaleID=1033a&AffiliateData=swcal?AffiliateData=com_learn
  var showKey = registrationUrl.match(/ShowKey=(\d*)/);
  return showKey && showKey[1];
}
;
/*1.0*/

(function($) {
  window.Messaging = {
    PREFIX: 'application_messaging_',
    initialize: function(){
      if ( !this.initialized ){
        this.initialized = true;
        this.expiredMessages = [];
        this.container = $( '#application_messaging' );
        if (!this.container) { return; }
        this.visible = this.container.is(':visible');
        if ( !this.container ) { return; }

        this.list = $('<ol></ol>');
        this.container.append(this.list);

        // Application.messages is built in _bootstrapped_data.html.erb
        _.each( Application.messages || [], _     }, this) );
      }
    },
    push: function( messageID, messageBody, options ){
      if ( !this.initialized ) { this.initialize(); }

      var globalID = this.PREFIX + messageID; // create our element ID, should be unique
      if ( $('#' + globalID).length > 0 ) { return undefined; } // if the element is already on the page, don't do anything

      options = _.extend({
        dismissable:false, // give the message a clickable element to remove it
        ajaxOnDismiss:true, // fire an AJAX call when the dismiss button is clicked
        selfRemoving:false, // make the message remove itself after timeSeconds have lapsed
        timeoutSeconds:5 // when selfRemoving is true, this is time duration the message is displayed
      }, options || {} );

      var message = $('<li id="' + globalID + '" message_id="' + messageID + '">' + messageBody + '</li>');

      if ( options.dismissable ) { this._makeDismissable(message, messageID, options.ajaxOnDismiss); }

      this._hideAll();
      this.list.append( message );

      this.container.show();
      this.visible = true;

      if ( options.selfRemoving ) {
        setTimeout( $.proxy( this.pop, this, messageID ), options.timeoutSeconds );
      }

      return message;
    },
    pop: function( messageID ){
      var message;
      if (messageID) {
        message = this._removeByID(messageID);
      } else {
        message = this._removeLast();
      }

      this._hideAll();
      var last = _.last( this.messages() );
      if (last) {
        $(last).show();
      } else {
        this._noMessages();
      }

      return message;
    },

    dismissMessage: function(messageID, ajaxOnDismiss, event){
      if (event) { event.stopPropagation(); event.preventDefault(); }
      this.pop(messageID);
      if(ajaxOnDismiss){
        $.post( '/launch/dismiss_top_message/' + messageID, { hide: true } );
      }
    },

    mes' ); },

    _noMes
    },

    _makeDismissable: function( message, messageID, ajaxOnDismiss ){
      message.addClass( 'dismissable' );

      var dismisser = $('<a class="sui-alert_close" title="Dismiss this message"></a>');
      // var dismisser = new Element('a', { 'class': 'dismisser', title: 'Dismiss this message' } ).update('<img alt="dismiss" width="10" height="10" src="https://community.spiceworksstatic.com/assets/icons/square_close_white-aa0aab4690d43a7eab894a7d53817da2d1080c48400a4c242e176de02b478a60.png" />');

      dismisser.on( 'click', $.proxy( this.dismissMessage, this, messageID, ajaxOnDismiss ) );

      message.append(document.createTextNode(' '));
      message.append(dismisser);
    },
    _removeByID: function( messageID ){
      return this._remove( this.list.find( '#' + this.PREFIX + messageID ) );
    },
    _remov
    },
    _remove: function( message ){
      if (message) { message.remove(); }
      return message;
    },

    _hie(); }
  };

  $(function() {
    Messaging.initialize(); // Moved here from layouts/_messaging_container.html.erb

    // Mark all inputs with their type as class name
    $('input')
    });

    $('body').on('click', '[data-action=dismiss_calendar_event]', function(event) {
      Cookie.set('hide_event_message', '1', {expires: moment().add('hours', 12).toDate() });
      $('#community_message').slideUp();
    });

    $('body').on('click', '[data-action=dismiss_community_message]', function(event) {
      Cookie.set('hide_community_message', '1', {expires: moment().add('hours', 12).toDate()});
      $('#community_message').slideUp();
    });

    $('body').on('click', '[data-action=dismiss_feed_message]', function(event) {
      Cookie.set('hide_feed_message', '1', {expires: moment().add('hours', 12).toDate()});
      $('#community_message').slideUp();
    });

    $('body').on('click', '[data-action=dismiss_push_mess
    });

    var $eventMessage = $('[data-type=bluebar-event-message]');
    if ($eventMessage.length) {
      var $event = $eventMessage.find('[data-registration-url]'),
          gaCategory = 'Live Events',
          gaLabel = 'com_bluebar | ' + getShowKey($event.data('registration-url'));
      GoogleAnalytics.trackEvent(gaCategory, 'show', gaLabel, 0, true);

      $event.on('c     });
    }
  });

})(jQuery);
/*1.0*/
(function($) {
  window.Flyover = {
    show_modal: function(flyoverContentID, options) {
      options = options || {};
      $.extend({ url: '/login/ajax_form' }, options);

      var flyoverContent = $('#' + flyoverContentID);

      if (flyoverContent.length) {
        flyoverContent.modal('toggle');
      } else {
        $.ajax(options.url, {
          data: {
            overlay: flyoverContentID,
            referer: window.location.pathname
          },
          com     },
          dataType: 'js'
        });
      }
    },
    show: function(flyoverContentID, options) {
      options = options || {}
      $.extend({ url: '/login/ajax_form' }, options);

      var flyoverContent = $('#' + flyoverContentID);
      // Helper function to make the boxes appear and focus form input if there
      var fadeAndFocusFly = function (containingElement) {
        var lightbox = containingElement.closest('.lightbox');
        var darkbox = $('#' + lightbox.attr('id').replace('lightbox', 'darkbox'));

        darkbox.fadeTo(500, 0.4);
        lightbox.fadeTo(500, 1, function() {
          var form = lightbox.find('form').first();
          if(form.length && form.find('input, select, textarea').length) {
            form.find('input, select, textarea').first().focus();
          }
        });

        containingElement.trigger('flyover:shown');
        $(document).trigger('flyover:shown');
      }

      if (flyoverContent.length) {
        fadeAndFocusFly(flyoverContent);
      } else {
        $.ajax(options.url, {
          data: {
            overlay: flyoverContentID,
            referer: window.location.pathname + window.location.search
          },
          com     },
          dataType: 'js'
        });
      }
    },
    hide: function(flyoverContentElem) {
      // TODO: Remove this when certain only elements are passed to this instead of ID strings as well
      var flyoverContent = $(flyoverContentElem).length ? $(flyoverContentElem) : $('#' + flyoverContentElem);

      if(flyoverContent.length) {
        var lightbox = flyoverContent.closest('.lightbox');

        if(lightbox.length) {
          var darkbox = $('#' + lightbox.attr('id').replace('lightbox', 'darkbox'));

          darkbox.fadeTo(500, 0, function () {
            $(this).hide();
          });
          lightbox.fadeTo(5     });

          var ieFixDarkbox = $('#' + darkbox.attr('id') + '_iefix');
          if (ieFixDarkbox.length) {
            ieFixDarkbox.remove();
          }

          $(document).trigger('flyover:hidden');
        }
      }
    }
  };
})(jQuery);
/*1.0*/
var UserImage = {
  action:function(msg){
    jQuery('#user_image_form_upload_button').button('loading');
    if ( jQuery('#user_image_form_clear_button').length ){
      jQuery('#user_image_form_clear_button').button('loading');
    }
    jQuery('#user_image_form_message').html(msg);
  },
  on);
  }
};

(function($) {
  window.CancelProfile = {
    initialize: function () {
      this.setupRadioButtonMessages();
    },
    setupRadioButtonMessages: function () {
      $('.close-account input[type=radio]').on('c     });
    }
  };
})(jQuery);
/*1.0*/
(function($) {
  window.html_ad = {
    edit_html_ad:function(id) {
      $.getJSON('/html_ad/show_edit_form/' + id)
              });
    },
    add_html_ad:function() {
      $.getJSON('/html_ad/show_add_form/')
              });
    },
    delete_ad:function() {
      if(confirm("Are you sure you want to delete this link?")) {
        var id = $('#ad_id').val();

        $.ajax({url: '/html_ad/delete_ad/' + id, type: 'DELETE'})
            .done(function(data) {
                if(data.form) {
                    $('#html_ad_edit').html(data.form);
                }

                if(data.list) {
                    $('#existing_links').html(data.list);
                }

                if(data.message) {
                    $('#html_ad_message').text(data.message);
                }
            });
      }
    },
    row_template: _.template('<tr class="<%= stripe %>"><td><a href="#" onclick="html_ad.edit_html_ad(<%= id %>);; return false;"><%= title %></a></td></tr>')
  };

  // code to build a dynamic table with filtering
  // https://redmine.spice.spiceworks.com/issues/92375

  $(document).ready(function() {
    var debounceBuild = _.debounce(buildTable, 300);

    $('[data-html-ads-filter]').on('input', debounceBuild);

    function buildTable(e) {
      var val = e ? e.target.value : '.',
          regex = new RegExp(val, 'i');

      html_ad.$anchor = $('[data-html-ads-anchor]');

      html_ad.$anchor.empty();

      window.htmlAds.filter(function(ad, i) {
        if(regex.test(ad.title)) {
          ad.stripe = 'stripe' + (i % 2);
          html_ad.$anchor.append( html_ad.row_template(ad) );
        }
      });
    }
  });

})(jQuery);
/*1.0*/
(function($) {
  $(document).on('ajax:success', '#html_ad_form form', function (e, data)
  {
    // our JS logger shows that flashMessage is still being used
    function flashMessage (message)
    {
      var $html_ad_message = $('#html_ad_message');

      $html_ad_message.show().text(message);
      window.setTt('')}, 5000);
    }

    if (data['partial'])
    {
      $('#existing_links').html(data['partial']);
    }

    if (data['message'])
    {
      flashMessage(data['message']);
    }

    if (data['url'])
    {
      $('#click_thru_url').text(data['url']);
      $('#click_thru_info').show();
    }
  });
})(jQuery);
/*1.0*/
var SPICE = window.SPICE || {};

SPICE.ranking = function(data) {

  if(data)
  {
    var dom_id = data.dom_id;
    var html = data.html;

    if(dom_id && html)
    {
      jQuery('#'+dom_id).replaceWith(html);  
    }

    var ga_class = data.ga_class;
    var ga_name = data.ga_name;
    var ga_id = data.ga_id;
    GoogleAnalytics.trackEvent(ga_class, ga_name, ga_id);
  }

};

(function($) {
  window.Ranking = {
    prep:function(ranking_element){
      var $ranking_elem = $(ranking_element);
      $ranking_elem.on('mouseover', this.hover_on);
      $ranking_elem.on('mouseout', this.hover_off);
    },
    hover_on:function(event){
      $(event.target).addClass('ranking_hover');
    },
    hov
    },
    rank: function(klass, id, value, rankable){
      if( rankable ) {
        this.change_value(rankable, value);
        this.disable_buttons(rankable);
      }

      $.post('/ranking/rank', {
        'class': klass,
        id: id,
        value: value,
        show_label: ($('p.spiciness').length > 0)
      })
      .done(      }, this));

    },
    change_value: function(rankable, value){
      var value_node = $('#' + rankable + '_value');

      // assuming that non-digit characters are the minus sign
      var new_value = parseInt(value_node.html().replace(/^\D/, '-'), 10) + value;
      value_node.html(String(new_value).replace('-', '&minus;'));
    },
    disable_buttons: function(rankable){
      var buttons = $('#' + rankable + ' p.action a');
      buttons.addClass('disabled')
             .attr('onclick', 'return false;');
    }
  };
})(jQuery);
/*1.0*/
(function($) {
  window.StarRating = function(node) {
    // removed logging but this is still being used!
    this.node = $(node);
    this.stars = this.node.find('a');
    this.parent = {
      'id': this.node.attr('ratable_id'),
      'class': this.node.attr('ratable_class')
    };
    this.value = this.node.attr('value');
    this._attachHandlers();
    this.updateValue(this.value);
  };

  _.extend(window.StarRating.prototype, {
    updateValue: function(value) {
      var that = this;
      value = Math.round(value * 2) / 2.0;
      var classes = this.node.attr('class').split(' ');
      $.each(classes, function(index, className){
        if(_.startsWith(className, 'rated_at')) {
          that.node.removeClass(className);
        }
      });
      this.node.addClass("rated_at_" + value.toString().gsub(/\./,'_'));
    },
    rate: function(value) {
      $.post('/rating/rate', {
        'class': this.parent['class'],
        'id'   : this.parent.id,
        'value': value
      }).done(function(memo) {
        //var memo = transport.responseText.evalJSON();
        document.fire('star_rating:succeeded', memo);
      }     });
    },
    _attachHandlers: function() {
      var that = this;
      _.each(this.stars, function(star) {
        star = $(star);
        var value = star.attr('value');

        star.on('click', $.proxy(that._click, that));
        star.on('mouseover', $.proxy(that._mouseover, that));
        star.on('mouseout', $.proxy(that._mouseout, that));
      });

      document.observe('star_rating:succeeded', $.proxy(this._succeeded, this));
    },
    _click: function(event) {
      if( CurrentUser.guest() ){
        JoinAndLogin.trackAndShowForm('join', { label: 'Star Rating' });
      } else {
        var value = $(event.target).attr('value');
        this.updateValue(value);
        this.rate(value);
      }
    },
    _mouseover: function(event) {
      this.node.addClass('hover_at_' + $(event.target).attr('value'));
    },
    _mouseout: function(event) {
      this.node.removeClass('hover_at_' + $(event.target).attr('value'));
    },
    _succeeded: function(event) {
      if(event.memo['class'] == this.parent['class'] && event.memo.id == this.parent.id){
        this.updateValue(event.memo.value);
      }
    }
  });

  $(function() {
    this.starRatings = _.map($('span.ra
    });
  });

})(jQuery);
/*1.0*/
(function($) {
  window.Subscription = {
    subscribeToDailyDigest: function() {
      $.post( 'https://community.spiceworks.com/launch/subscribe_to_daily_digest')
      .fail( UIHelpers.showUnhandledError )
      .done( function() {
        Messaging.pop( 'daily_digest_signup' );
        Messaging.push( 'daily_digest_signup_confirmation',
                        'Thanks for subscribing! You can update preferences in <a href="https://community.spiceworks.com/profile/email_settings">your profile</a>.',
                        { dismissable: true, ajaxOnDismiss: false} );
      });
    },
    unsubscribe
    },
    sh
    },

    // Private
    /**
     * Unsubscribe from a resource using a POST request
     * @param  {String} url   The url path for the POST request to unsubscribe
     * @param  {String} $linkEl   The jquery link element for the listing - used for dom manipulation
     */
    unsubscribeResource: function(url, $linkEl) {
      // Show that the request is in progress
      var $unsubscribe = $linkEl.closest('.unsubscribe');
      $unsubscribe.html('<em class="highlight">Unsubscribing...</em>');

      $.post(url)
      .done(function() {
        // Remove the subscription node from the dom on success
        Subscription._removeSubscriptionNode($unsubscribe.closest('.subscription-container'));
      })
      .fail(function() {
        $UI.growl({ caption: 'Uh oh! There was a problem unsubscribing!', type:'error' });
      });
    },
    /**
     * Remove a subscription node from the dom. The tricky thing is that this code has to work for the overall subscription page with multiple groups of 5
     * as well as the specific subscription page
     * @param  {String} $el The jquery element for the subscription node
     */
    _removeSubscriptionNode: function($el) {
      // Remove the node using slideUp and set an attribute of unsubscribed hidden
      $el.slideUp();
      $el.attr('unsubscribed-hidden', 'true');

      // For the overall page, find the subscription wrapper
      var $subscriptionWrap = $el.closest('.subscription_wrap');
      // Adjust the displayed and total counts in the message
      var displayedCount = $subscriptionWrap.find('.displayed-count');
      var totalCount = $subscriptionWrap.find('.total-count');
      if(displayedCount && totalCount) {
        var newDisplayedVal = parseInt(displayedCount.html()) - 1;
        var newTotalVal = parseInt(totalCount.html()) - 1;
        displayedCount.html(newDisplayedVal);
        totalCount.html(newTotalVal);
      }

      // For every page, find the subscriptions class wrapping the items
      var $listWrapper = $el.closest('.subscriptions');
      // If there are no more visible items...
      if(!$listWrapper.find('li:not([unsubscribed-hidden])').length) {
        // If on the total subscriptions page, the data might be paginated
        var search = window.location.search;
        var getPage = /page=(\d*)/;
        var page;
        if(search && getPage.test(search)) {
          page = parseInt(getPage.exec(search)[1]);
        }

        // If on the overall page, and there are no more subscriptions, replace with an empty message
        if(newTotalVal && newTotalVal === 0) {
          // If there are no elements left being shown (AKA all elements have unsubscribed-hidden attribute)
          // Remove the see all message, and append the not subscribed message
          var listType = $subscriptionWrap.data('list-type');
          $subscriptionWrap.find('.see_all').remove();
          $subscriptionWrap.append('<p class="empty">You have not subscribed to any ' + listType + ' yet.</p>');
        } else if(page && page > 1) {
          // On the total subscriptions page, paginate back
          search = search.replace('page='+page, 'page='+(page-1));
          window.location.search = search;
        } else {
          // Otherwise, reload the page. If they don't do anything, the browser will reload to the same place
          window.location.reload();
        }
      }
    }
  };

  window.SignupTypes = window.SignupTypes || {};

  // On document ready, set click listener
  $(document).ready(function() {
    $('[data-action="unsubscribe"]').click(function(ev) {
      ev.preventDefault();

      var $linkEl = $(ev.target);
      var url = $linkEl.attr('href');
      Subscription.unsubscribeResource(url, $linkEl);
    });
  });
})(jQuery);

/*1.0*/
var EmailNotice = {
  initLinks: function() {
    var category = 'Community Email Suspended Notice',
        label = 'click';

    jQuery('#email_suspended_notice [data-action=update]')
    });
    jQuery('#email_suspended_notice [data-action=unsuspend]').click(function(e) {
      GoogleAnalytics.trackEvent(category, label, 'unsuspend email');
      EmailNotice.unsuspendEmail();
    });
  },
  unsuspendEmail: function() {
    jQuery.ajax({
      url: "/user/unsuspend_email",
      success: function() {
        jQuery("#email_suspended_notice").slideUp();
        $UI.growl({
          caption: "Thanks for confirming your email!",
          type: "success"
        });
      },
           }
    });
  }
};
/*1.0*/




















;
/*1.0*/
// script.aculo.us effects.js v1.8.3, Thu Oct 08 11:23:33 +0200 2009

// Copyright (c) 2005-2009 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseCs));
};

/*--------------------------------------------------------------------------*/

Element.collectTextN'');
};

Element.collectTextNodesIgnoreC'');
};

Element.setContentent;
};

Element.getInlineOpa '';
};

Element.forceRerende { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sin
    },
    re
    },
    fl
    },
    w
    },
    
    },
    s
    },
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagif);
  },
  mul);
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  t);
  }
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initil;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
);
  },
  r }
  },
 );
  }
});

Effect.Queues = {
  instances: $H(),
);
  }
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  );
  },
  }
  },
  c';
  },
  );
  },
  in';
  }
});

Effect.Parallel = Class.create(Effect.Base, {
  initi);
  },
  u);
  },
  f);
  }
});

Effect.Tween = Class.create(Effect.Base, {
  initi);
  },
  u);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initi);
  },
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initi);
  },
  u);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initi);
  },
   }
  },
  u);
  }
});

// for backwards compatibility
Effect.Mo}));
};

Effect.Scale = Class.create(Effect.Base, {
  initi);
  },
  ];
  },
  u);
  },
  f);
  },
  setDimen);
  }
});

Effect.Highlight = Class.create(Effect.Base, {
  initi);
  },
  );
  },
  u);
  },
  f);
  }
});

Effect.Scro  );
};

/* ------------- combination effects ------------- */

Effect.ns);
};

Effect.Apns);
};

Effect.  );
};

Effect.Bli  );
};

Effect.Blind}));
};

Effect.Switc}));
};

Effect.Dro}));
};

Effect.S}});
};

Effect.Slide  );
};

Effect.Sli  );
};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Sq });
};

Effect. });
};

Effect.Sh  );
};

Effect.Pul}));
};

Effect.}));
};

Effect.Morph = Class.create(Effect.Base, {
  initi);
  },

  );
  },
  u);
  }
});

Effect.Transform = Class.create({
  initi);
  },
  addTs;
  },
 );
  }
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseSles;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getSt);
  };
} else {
  Element.getSts;
  };
}

Effect.Methods = {
  t;
  },
  visualEt;
  },
  hight;
  }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').e};
  }
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').e[f]; }
);

Element.addMethods(Effect.Methods);
/*1.0*/
// script.aculo.us controls.js v1.8.3, Thu Oct 08 11:23:33 +0200 2009

// Copyright (c) 2005-2009 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2009 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2009 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least,
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most
// useful when one of the tokens is \n (a newline), as it
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { };
Autocompleter.Base = Class.create({
  baseIniti);
  },

 );
  },

  fixIEOverla);
  },

 );
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndi);
  },

  onKey);
  },

  act);
  },

  on);
  },

  on);
  },

  oe;
  },

  r }
  },

  markPre);
  },

  mar);
  },

  get];
  },

  getCurrent);
  },

  select);
  },

  updateEl);
  },

  updateCh }
  },

  addObse);
  },

  onObservere;
  },

  get);
  },

  getTokenB);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initil;
  },

  getUpdatedCh);
  },

  onCom);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector'
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initiy;
  },

  getUpdatedCh);
  },

  setOp);
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActi 1);
};

Ajax.InPlaceEditor = Class.create({
  initi);
  },
  checkForEscapeOrR);
  },
  createCo }
  },
  createEdit);
  },
  creat);
  },
  de);
  },
  enterEdi);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  ge);
  },
  handleAJAXFa }
  },
  handleFormCancell);
  },
  handleFormSubmi);
  },
  leaveEdi);
  },
  leave);
  },
  loadExterna);
  },
  postProcessEdit);
  },
  prepareOp);
  },
  prepareSubmi);
  },
  registerList);
  },
  remov};
  },
  showS);
  },
  triggerCal }
  },
  unregisterList);
  },
  w);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initi);
  },

  createEdit);
  },

  loadColle);
  },

  showLoadin);
  },

  checkForExterna);
  },

  loadExterna);
  },

  buildOptio);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onCom
    },
    onEnterEditMode: null,
    onEnter
    },
    onFa
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeave
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer,
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initi);
  },
  delayedLis);
  },
  onTimer);
  }
});
/*1.0*/
// script.aculo.us builder.js v1.8.3, Thu Oct 08 11:23:33 +0200 2009

// Copyright (c) 2005-2009 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

var Builder = {
  NODEMAP: {
    AREA: 'map',
    CAPTION: 'table',
    COL: 'table',
    COLGROUP: 'table',
    LEGEND: 'fieldset',
    OPTGROUP: 'select',
    OPTION: 'select',
    PARAM: 'object',
    TBODY: 'table',
    TD: 'table',
    TFOOT: 'table',
    TH: 'table',
    THEAD: 'table',
    TR: 'table'
  },
  // note: For Firefox < 1.5, OPTION and OPTGROUP tags are currently broken,
  //       due to a Firefox bug
 );
  },
  );
  },

  ATTR_MAP: {
    'className': 'class',
    'htmlFor': 'for'
  },

  _attri);
  },
  _chi);
  },
  _isStringOrN);
  },
  );
  },
 );
  }
};
/*1.0*/
/*

Extensions to Prototype/Scriptaculous

*/

// For "registering" namespaces
// (automatically call an `initialize` method on window load)

Event.register = function(object) {
  // our JS logger shows that register is still being used
  // manage a stack of events to invoke
  if (!Event.registeredEvents) { Event.registeredEvents = $A(); }
  if (!object.initialize) { return; }

  Event.registeredEvents.push(object);

  // if the observers was already created, don't create another one
  if (Event.domLoadedObserverCreated) { return; }

  var domLoaded = function(){
    // Keen.io shows that this is still hit
    Event.registeredEvents.each(function(object){
      try{ object.initialize(); }
      catch (err){ console.log('Failed invocation because: ' + err); }
    });
  };

  document.observe('dom:loaded', domLoaded);

  Event.domLoadedObserverCreated = true;
};

Element.addMethods({
  isOrphaned: function(element){
    // logging shows that this is still called
    element = $Prototype(element);
    if (element.sourceIndex !== null) { return element.sourceIndex < 1; } // for IE only
    if (element.id) { return !element.ownerDocument.getElementById(element.id); }
    return !element.descendantOf(element.ownerDocument.documentElement);
  },
  scrollTo: function(element, container, options){
    options = Object.extend({
      offsetY:0
    }, options || {});
    if (container){
      element = $Prototype(element);
      container = $Prototype(container);
      container.scrollTop = (element.offsetTop - element.offsetHeight) + options.offsetY;
    } else {
      element = $Prototype(element);
      var pos = element.cumulativeOffset();
      window.scrollTo(pos[0], pos[1]);
    }
    return element;
  },
  text: function(element){
    element = $Prototype(element);
    /*
    Return a node's inner text only, not the HTML.
    IE uses one method (innerText) and all other browsers use a different one (textContent)
    Also checks for a node or empty node, since it *is* possible to have an empty node
    */
    return (element ? (element.innerText ? element.innerText : element.textContent) : '');
  },
  radioClass: function(element, cls){
    element
      .addClassName(cls)
      .siblings()
        .invoke('removeClassName', cls);
  },
  showIf: function(element, condition){
    element[condition ? 'show' : 'hide']();
  },
  toHTML: function(element) {
    // Taken from prototype mailing list
    // This is so you can take an element and pass it somewhere in string form.

    if (typeof element=='string') { element = $Prototype(element); } // IE needs that check with XML
    return Try.these(
      function() {
        var xmlSerializer = new XMLSerializer();
        return  element.nodeType == 4 ? element.nodeValue :
  xmlSerializer.serializeToString(element);
      },
      function() {
        return element.xml || element.outerHTML || $Prototype(element).clone().wrap().up().innerHTML;
      }
    ) || '';
  }
});

Object.extend(Form.Element, {
  clearDefaultText: function(element, defaultText){
    element = $Prototype(element);

    if ($F(element) == defaultText){
      element.removeClassName('init');
      element.value = '';
    }
    return element;
  }
});

Form.Element.enable = Form.Element.enable.wrap(function(){
  var args = $A(arguments), proceed = args.shift();
  var element = proceed.apply(this, args);

  element.removeClassName('disabled');

  if (element.getAttribute('type') == 'image' && element.hasAttribute('key')) {
    // this is a special button that's already been instantiated as a ImageButton object
    element.removeClassName('image_button_disabled');
    ButtonManager.alterStateOfButton(element.getAttribute('key'), 'normal');
  } else {
    if (element.getAttribute('type') == 'image'){
      element.removeClassName('image_button_disabled');

      if( element.getAttribute('data-image-url') ) {
        element.src = element.getAttribute('data-image-url');
      }
      else {
        element.src = element.src.replace('_hover', '').replace('_disabled', '');
      }
    }
  }
  return element;
});

Form.Element.disable = Form.Element.disable.wrap(function(){
  var args = $A(arguments), proceed = args.shift();
  var element = proceed.apply(this, args);

  element.addClassName('disabled');

  if (element.getAttribute('type') == 'image' && element.hasAttribute('key')) {
    // this is a special button that's already been instantiated as a ImageButton object
    element.addClassName('image_button_disabled');
    ButtonManager.alterStateOfButton(element.getAttribute('key'), 'disabled');
  } else {
    if (element.getAttribute('type') == 'image') {
      element.addClassName('image_button_disabled');

      if( element.getAttribute('data-image-disabled-url') ) {
        element.src = element.getAttribute('data-image-disabled-url');
      }
      else {
        element.src = element.src.replace('_hover', '').replace('_disabled', '');
        element.src = element.src.replace(/(-[a-z0-9]*)?\.gif/, '_disabled.gif');
      }
    }
  }
  return element;
});

var SortableTable = Class.create({
  initialize:function(table, manager, options) {
    // Keen.io shows that this is still hit
    this.table = $Prototype(table);
    this.thead = this.table.getElementsByTagName('thead')[0];
    this.tbody = this.table.getElementsByTagName('tbody')[0];
    this.options = Object.extend({
      clickable:       false,
      striped:         true,
      evenStripeClass: "stripe0",
      oddStripeClass:  "stripe1"
    }, options || {});

    this.sort_columns = $A(this.thead.getElementsByTagName('td')).collect(function(elem, index) {
      elem.sort_index = index;
      elem.ascending  = elem.className.include('sorted');

      if (Browser.IE6){
        Element.observe( elem, 'mouseover', function(e){ Event.findElement( e, 'td').addClassName( 'hover' ); } );
        Element.observe( elem, 'mouseout', function(e){ Event.findElement( e, 'td').removeClassName( 'hover' ); } );
      }
      Event.observe(elem, "click", this.sort_column.bindAsEventListener(this));
      return {
        sort_function: manager.sort_function(elem),
        node: elem
      };
    }.bind(this));
    this.current_sort_col = this.sort_columns[0].node;

    var trs = null;
    trs = this.cacheRows();

    if (this.options.clickable) {
      this.tbody.className = "clickable";
      // use event delegation to cut down on looping
      Event.observe(this.tbody, 'click', this.clickRowManager.bindAsEventListener(this));
    }

    if (Browser.IE6){
      // use event delegation to cut down on looping
      this.table.observe('mouseover', this.addHoverManager);
      this.table.observe('mouseout',  this.removeHoverManager);
    }

  },

  // cache all of the rows of the table (initialization primarily)
  cacheRows: function(){
    var trs   = [];
    this.rows = [];
    // raw loop for speed
    var rows = this.tbody.getElementsByTagName('tr');
    for (var i = 0, row; row == rows[i]; i++) {
      trs.push(row);
      var tds = row.getElementsByTagName('td'), cells = [];

      for (var j = 0, cell; cell == tds[j]; j++){
        var sf = null;
        var sort_col = null;

        sort_col = this.sort_columns[j];
        sf = sort_col.sort_function(cell);
        cells.push(sf);
      }

      this.rows.push({ sort_values: cells, node: row });
    }
    return trs;
  },

  // cache a single row.
  cacheRow: function(element, recache) {
    var cells = $A(element.getElementsByTagName("td")).c
    }.bind(this));

    // look for the row in the cached rows
    found = false;
    this.rows.each( function( row ) {
      // if found, replace the sort_values and the element
      if( row.node == element){
        found = true;
        row.sort_values = cells;
      }
    }.bind(this));

    // If the row wasn't found, then it's new and we need to add it.
    // and also add listeners for clicks.
    if( !found ) {
      this.rows[this.rows.length] = {
        sort_values:cells,
        node:element
      };

      if (this.options.clickable) {
        Event.observe(element, 'click', this.clickRow.bindAsEventListener(this));
      }
      if (Browser.IE6){
        Event.observe(element, 'mouseover', this.addHoverManager);
        Event.observe(element, 'mouseout', this.removeHoverManager);
      }
    }
  },
  removeRow:function(row_to_remove){
    element = $Prototype(row_to_remove);
    element_to_select = element.next();

    var cached_row = null;
    this.rows
    }.bind(this));
    this.rows = this.rows.without( cached_row );
    Element.remove(element);
    // if the element was clicked, then select another row
    if( !element_to_select && this.rows.size() > 0){
      element_to_select = this.rows.first().node;
    }

    if( Element.hasClassName(element,'clicked') ){
      this.options.clickHandler( element_to_select );
    }
  },

  clickRow:function(event) {
    var clicked_element = Event.element(event);
    if(this.options.clickHandler && !clicked_element.tagName.toLowerCase().match(/input|a/)) {
      this.options.clickHandler(Event.findElement(event, 'tr'));
    }
  },
  sel);
  },

  clickRowManager: function(e) {
    var tr = e.findElement( 'tr'), element = e.element(), opt = this.options;
    if (!tr || !element) { return; }
    if (opt.clickHandler && !$w('INPUT A TBODY').include(element.tagName.toUpperCase())) { opt.clickHandler(tr); }
  },

  addHoverManager: function(e) {
    var element = e.findElement( 'tr');
    if (element && element.className && !element.className.include('hover')) { Element.addClassName(element, 'hover'); }
  },
  removeHoverManager: function(e) {
    var element = e.findElement( 'tr');
    if (element && element.className && element.className.include('hover')) { Element.removeClassName(element, 'hover'); }
  },
  headerMouseOver: function(e){
    var cell = e.findElement( 'td' );
    cell.addClassName( 'hover' );
  },
  headerMou);
  },

  // Called when someone actually clicks on a column header
  sort_column:function(event) {
    var col = event.element();
    this.setSortDirection(col);
    this.do_sort(col);
  },

  // Method which actually performs the sort on a given column.
  do_sort:function( col ) {
    var result = this.rows.
    });
    if( Element.hasClassName(col, "desc") ){
      result = result.reverse();
    }
    this.drawSortResult(result);
    this.current_sort_col = col;
  },

  // Refresh the sort without changing anything (call after a new row is added to the table)
  refres);
  },

  setSortDirection:function(sorted_column) {
    sorted_column = sorted_column || this.current_sort_col;
    // using traditional loops b/c they're faster
    for (var i = 0, cell; i < this.sort_columns.length; i++) {
      cell = this.sort_columns[i].node;
      Element.extend(cell).removeClassName('sorted').removeClassName('asc').removeClassName('desc');
    }

    if (this.current_sort_col && this.current_sort_col !== sorted_column) {
      // don't toggle the sort direction -- just set the new column
      sorted_column.addClassName("sorted " + (sorted_column.ascending ? "asc" : "desc"));
    } else {
      sorted_column.addClassName("sorted " + (sorted_column.ascending ? "desc" : "asc"));
      sorted_column.ascending = !sorted_column.ascending;
    }
  },

  drawSortResult: function(result) {
    var opt = this.options, row, even;
    // using traditional loops b/c they're faster
    for (var index = 0, len = result.length; index < len; index++) {
      row = result[index].node;
      if (opt.striped) {
        even = (index % 2) === 0;
        if (even && Element.hasClassName(row, opt.oddStripeClass)) {
          row.className = row.className.replace(opt.oddStripeClass, opt.evenStripeClass);
        } else if (!even && Element.hasClassName(row, opt.evenStripeClass)) {
          row.className = row.className.replace(opt.evenStripeClass, opt.oddStripeClass);
        }
      }
      this.tbody.appendChild(row);
    }
  },

  destroy: function(){
    $A(this.thead.getElementsByTagName('td')).each(function(elem, index) {
      if ( Browser.IE6 ){
        Element.stopObserving( elem, 'mouseover', function(e){ e.findElement( 'td').addClassName( 'hover' ); } );
        Element.stopObserving( elem, 'mous' ); } );
      }
      Event.stopObserving(elem, "click", this.sort_column.bindAsEventListener(this));
    }.bind( this ));
    this.sort_columns = null;

    this.rows.each( function( element ){
      if (this.options.clickable) {
        Event.stopObserving(element, 'click', this.clickRow.bindAsEventListener(this));
      }
      if (Browser.IE6){
        Event.stopObserving(element, 'mouseover', this.addHoverManager);
        Event.stopObserving(element, 'mouseout', this.removeHoverManager);
      }
    }.bind( this ));

    if (this.options.clickable) {
      Event.stopObserving(this.tbody, 'click', this.clickRowManager.bindAsEventListener(this));
    }

    if (Browser.IE6){
      // use event delegation to cut down on looping
      this.table.stopObserving('mouseover', this.addHoverManager);
      this.table.stopObserving('mouseout',  this.removeHoverManager);
    }

    this.table = null;
    this.thead = null;
    this.tbody = null;
    this.rows = null;
  },
  isOrpe;
  }
});

var SortableTableManager = {
  initialize: function(){
    // logging shows that this is still called
    document.observe('ajax:completed', this.ajaxOnComplete.bindAsEventListener(this));
    this._attachFresh();
  },
  register_sortables: function(){
    this._attachFresh();
  },
  ajaxOnCom);
  },
  _removeOrphaned: function(){
    // logging shows that this is still called
    SortableTableManager.registered_sortables.each(function(pair){
      if (pair.value.isOrphaned()){
        pair.value.destroy();
        SortableTableManager.registered_sortables.unset(pair.key);
      }
    });
  },
  _attachFresh: function(){
    // Keen.io shows that this is still being hit
    if (!SortableTableManager.registered_tables) { SortableTableManager.registered_tables = []; }
    if (!SortableTableManager.registered_sortables) { SortableTableManager.registered_sortables = $H(); }

    $$('table.sortable').each(function(element) {
      if (!SortableTableManager.registered_tables.include(element)) {
        SortableTableManager.register_sortable(element);
        SortableTableManager.registered_tables.push(element);
      }
    }.bind(SortableTableManager));
  },
  register_sortable: function(element) {
    // our JS logger shows that register_sortable is still being used
    var options = {};
    var click_handler = element.className.match(/clickable:(.*) {0,1}.*/);
    if (click_handler) {
      options = {
        clickable: true,
        clickHandler: this.click_functions[click_handler[1]]
      };
    }
    SortableTableManager.registered_sortables.set(element, new SortableTable(element, this, options));
  },
  sort_function: function(element) {
    // We are expecting the className of the passed element to include a hint in the format
    // sort:(strategy). If we can't find the sort_function, assume string
    var className = null;
      className =  element.className.match(/sort:(\w*) {0,1}\w*/);
      className = className ? className[1] : "string";
      return this.sort_functions[className] || this.sort_functions.stringSort;
  },
  sort_functions: {
    strin
    },

    versionSort: function(element) {
      var value = element.title || ""; // compare against the literal value
      if (value === "")  { return -1; }     // empty strings get sorted at the end

      // catch values like "v3.6.3" or "V 3.6.3"
      if ((/^\s*v\s*\d/i).test(value)) {
        value = value.substring(1, value.length);
      } else if (!(/^\d/).test(value)) {
        return 0;
      }

      // split it into tokens (["3", "6", "3"])
      var tokens = value.split('.').slice(0, 4);
      // pad it (["3", "6", "3", "00000"])
      while (tokens.length < 4) {
        tokens.push('00000');
      }
      tokens = tokens.map(function(token) {
        if (token.length > 5) {
          token = token.substring(0, 5);
        }

        // pad each token (["00003", "00006", "00003", "00000"])
        if (token.length < 5) {
          token = ('0').times(5 - token.length) + token;
        }
        return token;
      });

      // join it and convert it to a number (3000060000300000)
      return parseInt(tokens.join(''), 10);
    },

    full_name: function(element) {
      var sort_value = element.innerHTML.stripTags().toLowerCase();
      return sort_value.replace(/^(.*) (.*)$/, "$2 $1");
    },
    bytes: function(element) {
      var sort_value = element.innerHTML.stripTags().toLowerCase();
      var result = /^(.*) (k|m|g)B/i.exec(sort_value);
      if (result) {
        return parseFloat(result[1]) * (result[2] == "m" ? (1024 * 1024) : (result[2] == "g" ? (1024 * 1024 * 1024) : 1024));
      } else {
        return 0;
      }
    },
    numeric: function(element) {
      var sort_value = element.innerHTML.stripTags().toLowerCase();
      var result = parseFloat(sort_value.gsub(/\$/, '')); /* Strip out dollar sign for currency */
      // NaN values should return -1 so that they can be distinguished from 0
      return isNaN(result) ? -1 : result;
    },
    date: function(element) {
      if (element.getAttribute("millis")) {
        return new Date(parseInt(element.getAttribute("millis"), 10));
      }
      var sort_value = element.innerHTML;
      var date = sort_value.match(/(\d+)\/(\d+)\/(\d+) @ (\d+):(\d+)([ap]m)/);
      if(date){
        /* finder_date_time format */
        var hour = parseInt(date[4], 10);
        if(date[6] == 'pm'){hour += 12;}
        if(hour == 12 || hour == 24){hour -= 12;}
        return Date.UTC(date[3], date[1], date[2], hour, date[5], 0);
      }else{
        return Date.parse(sort_value.stripTags());
      }
    },
    ip_address: function(element) {
      var sort_value = element.innerHTML.stripTags();
      var result = sort_value.match(/(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/);
      if (result !== null) {
        result = result.slice(1).collect(function(elem, idx) {
          switch(elem.length) {
            case 1:
              return "00" + elem;
            case 2:
              return "0" + elem;
            default:
              return elem;
          }
        });
        return result.join(".");
      } else {
        return sort_value;
      }
    }
  },
  click_functions: {}
};

Event.register(SortableTableManager);

var DynamicScriptInclude = {
  load: function( source, nocache ){
    if ( !nocache ) { nocache = true; }
    this._remove( source );
    this._require( source, nocache );
  },
  _remove: function( source ){
    // find our special script and rip it out of the page
    $$( 'script[src]' ).each( function( s ){
      if ( s.src.indexOf( source ) > -1 ) { s.parentNode.removeChild( s ); }
    });
  },
  _require: function( source, nocache ){
    var js = document.createElement( 'script' );
    js.setAttribute( 'language', 'javascript' );
    js.setAttribute( 'type', 'text/javascript' );
    // append a querystring value that is always changing so this script is never cached
    source = ( source.match( /\?/ ) ? source + '&' : source + '?' ) + ( nocache ? 'nocache=' + new Date().getTime() + '&' : '' );
    js.setAttribute( 'src', source );
    $$( 'head' ).first().appendChild( js );
  }
};

Ajax.Responders.register({
  onCreate: function(request){
    // logging shows that this is still called
    document.fire('ajax:started', request); // fire a custom event when an ajax request is started
  },
  onComrs
  }
});
/*1.0*/
//  Date#strftime: http://hacks.bluesmoon.info/strftime/index.html
//  Copyright (c) 2008, Philip S Tellis <philip@bluesmoon.info>
//  All rights reserved.
//  This code is distributed under the terms of the BSD licence
//  
//  Redistribution and use of this software in source and binary forms, with or without modification,
//  are permitted provided that the following conditions are met:
// 
//    * Redistributions of source code must retain the above copyright notice, this list of conditions
//      and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright notice, this list of
//      conditions and the following disclaimer in the documentation and/or other materials provided
//      with the distribution.
//    * The names of the contributors to this file may not be used to endorse or promote products
//      derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
// PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
// ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
// TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
Date.ext={};Date.ext.util={};Date.ext.util.xPad=function(x,pad,r){if(typeof (r)=="undefined"){r=10}for(;parseInt(x,10)<r&&r>1;r/=10){x=pad.toString()+x}return x.toString()};Date.prototype.locale="en-GB";if(document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang){Date.prototype.locale=document.getElementsByTagName("html")[0].lang}Date.ext.locales={};Date.ext.locales.en={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM","PM"],P:["am","pm"],x:"%d/%m/%y",X:"%T"};Date.ext.locales["en-US"]=Date.ext.locales.en;Date.ext.locales["en-US"].c="%a %d %b %Y %r %Z";Date.ext.locales["en-US"].x="%D";Date.ext.locales["en-US"].X="%r";Date.ext.locales["en-GB"]=Date.ext.locales.en;Date.ext.locales["en-AU"]=Date.ext.locales["en-GB"];Date.ext.formats={a:function(d){return Date.ext.locales[d.locale].a[d.getDay()]},A:function(d){return Date.ext.locales[d.locale].A[d.getDay()]},b:function(d){return Date.ext.locales[d.locale].b[d.getMonthth()]},c:"toLocaleStr0),0)},d:["getDate","0"],e:["getDate",0),0)},G:function(d){var y=d.getFullYear();var V=parseInt(Date.ext.formats.V(d),10);var W=parseInt(Date.ext.formats.W(d),10);if(W>V){y++}else{if(W===0&&V>=52){y--}}return y},H:["getHours",:I,1+1,0)},M:["getMinutes","0"],p:function(d){return Date.ext.locales[d.locale].p[d.getHours()>=12?1?1:0]},S:["getSeconds",7:oy,0)},V:function(d){var woy=parseInt(Date.ext.formats.W(d),10);var dow1_1=(new Date(""+d.getFullYear()+"/1/1")).getDay();var idow=woy+(dow1_1>4||dow1_1<=1?0:1);if(idow==53&&(new Date(""+d.getFullYear()+"/12/31")).getDay()<4){idow=1}else{if(idow===0){idow=Date.ext.formats.V(new Date(""+(d.getFullYear()-1)+"/12/31"))}}return Date.ext.util.xPad(idow,0)},w:"get0,00,0)},Y:"getFullY)+"$1"rn"%"}};Date.ext.aggregates={c:"locale",D:"%m/%d/%y",h:"%b",n:"\n",r:"%I:%M:%S %p",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"};Date.ext.aggregates.z=Date.ext.formats.z(new Date());Date.ext.aggregates.Z=Date.ext.formats.Z(new Date());Date.ext.unsupported={};Date.prototype.strftime=function(fmt){if(!(this.locale in Date.ext.locales)){if(this.locale.replace(/-[a-zA-Z]+$/,"") in Date.ext.locales){this.locale=this.locale.replace(/-[a-zA-Z]+$/,"")}else{this.locale="en-GB"}}var d=this;while(fmt.match(/%[cDhnrRtTxXzZ]/)){fmt=fmt.replace(/%([cDhnrRtTxX1]:f)})}var str=fmt.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g,function(m0,m1){var f=Date.ext.formats[m1];if(typeof (f)=="string"){return d[f]()}else{if(typeof (f)=="function"){return f.call(d,d)}else{if(typeof (f)=="object"&&typeof (f[0])=="string"){return Date.ext.util.xPad(d[f[0]](),f[1])}else{return m1}}}});d=null;return str};
/*1.0*/
// https://github.com/mstum/TimeSpan.js
"use strict";(function(){var a=window.TimeSpan=function(g,i,h,j,k){var l="1.2",d=1e3,c=6e4,e=3.6e6,f=8.64e7te(a)};if(b(k))a+=k*f;if(b(j))a+=j*e;if(b(h))a+=h*c;if(b(i))a+=i*d;if(b(g))a+=g;this.addMilliseconds=function(c){if(!b(c))return;a+=c};this.addSeconds=function(c){if(!b(c))return;a+=c*d};this.addMinutes=function(d){if(!b(d))return;a+=d*c};this.addHours=function(c){if(!b(c))return;a+=c*e};this.addDays=function(c){if(!b(c))return;a+=c*f};this.subtractMilliseconds=function(c){if(!b(c))return;a-=c};this.subtractSeconds=function(c){if(!b(c))return;a-=c*d};this.subtractMinutes=function(d){if(!b(d))return;a-=d*c};this.subtractHours=function(c){if(!b(c))return;a-=c*e};this.subtractDays=function(c){if(!b(c))return;a-=c*f};this.isTimeSpan=true;this.add=function(b){if(!b.isTimeSpan)return;a+=b.totalMilliseconds()};this.subtract=function(b){if(!b.isTimeSpan)return;a-=b.totalMilliseconds()};this.equals=function(b){if(!b.isTimeSpan)return;return a===b.totalMilliseconds()};this.totalMilliseconds=function(c){var b=a;if(c===true)b=Math.floor(b);return b};this.totalSeconds=function(c){var b=a/d;if(c===true)b=Math.floor(b);return b};this.totalMinutes=function(d){var b=a/c;if(d===true)b=Math.floor(b);return b};this.totalHours=function(c){var b=a/e;if(c===true)b=Math.floor(b);return b};this.totalDays=function(c){var b=a/f;if(c===true)b=Math.floor(b);return b};this.millisa%1e3};this.seconds=function(){return Math.floor(a/d)%60};this.minutes=function(){return Math.floor(a/c)%60};this.hours=function(){return Math.floor(a/e)%24};thi(a/f)};this.getVurn l}};a.FromS,0,0)};a.FromMinutes=function(b){return new a(0,0,b,0,0)};a.FromHours=function(b){return new a(0,0,0,b,0)};a.FromDays=function(b){return new a(0,0,0,0,b)};a.FromDates=function(e,d,c){var b=d.valueOf()-e.valueOf();if(c===true)b=Math.abs(b);return new a(b,0,0,0,0)}})()

TimeSpan.prototype.prettyPrintTime = function(showSeconds){
	var str = "";
	var unit = "";
	if(this.days() > 0){
		unit = (this.days() > 1) ? " days " : " day ";
		str += this.days() + unit;
	}
	unit = (this.hours() > 1) ? " hours " : " hour ";
	str += this.hours() + unit;
	unit = (this.minutes() > 1) ? " mins" : " min";
	str += this.minutes() + unit;
	if(showSeconds){
		unit = (this.seconds() > 1) ? " secs" : " sec";
		str += " " + this.seconds() + unit;
	}
	return str;
}

TimeSpan.prototype.prettyPrintAbbrTime = function(showSeconds){
	var str = "";
	if(this.days() > 0){
		var dys = (this.days() > 1) ? " days " : " day ";
		str += this.days() + dys;
	}
	str += this.formatValue(this.hours()) + ":";
	str += this.formatValue(this.minutes());
	if(showSeconds){
		str += ":" + this.formatValue(this.seconds());
	}
	return str;
}

TimeSpan.prototype.printTime = function(showSeconds){
	var str = "";
	if(this.days() > 0){
		str += this.days() + ":";
	}
	str += this.formatValue(this.hours()) + ":";
	str += this.formatValue(this.minutes());
	if(showSeconds){
		str += ":" + this.formatValue(this.seconds());
	}
	return str;
}

TimeSpan.prototype.formatV;
	}
}
;
/*1.0*/
// -----------------------------------------------------------------------------------
//
//	Lightbox v2.04
//	by Lokesh Dhakar - http://www.lokeshdhakar.com
//	Last Modification: 2/9/08
//
//	For more information, visit:
//	http://lokeshdhakar.com/projects/lightbox2/
//
//	Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
//  	- Free for use in both personal and commercial projects
//		- Attribution requires leaving author name, author link, and the license info intact.
//
//  Thanks: Scott Upton(uptonic.com), Peter-Paul Koch(quirksmode.com), and Thomas Fuchs(mir.aculo.us) for ideas, libs, and snippets.
//  		Artemy Tregubenko (arty.name) for cleanup and help in updating to latest ver of proto-aculous.
//
// -----------------------------------------------------------------------------------
/*

    Table of Contents
    -----------------
    Configuration

    Lightbox Class Declaration
    - initialize()
    - updateImageList()
    - start()
    - changeImage()
    - resizeImageContainer()
    - showImage()
    - updateDetails()
    - updateNav()
    - enableKeyboardNav()
    - disableKeyboardNav()
    - keyboardAction()
    - preloadNeighborImages()
    - end()

    Function Calls
    - document.observe()

*/
// -----------------------------------------------------------------------------------

//
//  Configurationl
//
LightboxOptions = Object.extend({
    fileLoadingImage:        'https://community.spiceworksstatic.com/assets/community/lightbox/loading-81ea81be1d862d36c34b6dc4f12aefb87b656e319003263d8274974b48ccf869.gif',
    fileBottomNavCloseImage: 'https://community.spiceworksstatic.com/assets/community/lightbox/closelabel-cc3c8f67291b46b0b7c26148f146db5c486d049c5a4996643bcdbfb005917082.gif',

    overlayOpacity: 0.5,   // controls transparency of shadow overlay

    animate: true,         // toggles resizing animations
    resizeSpeed: 10,        // controls the speed of the image resizing animations (1=slowest and 10=fastest)

    borderSize: 10,         //if you adjust the padding in the CSS, you will need to update this variable

	// When grouping images this is used to write: Image # of #.
	// Change it for non-english localization
	labelImage: "Image",
	labelOf: "of"
}, window.LightboxOptions || {});

// -----------------------------------------------------------------------------------

var Lightbox = Class.create({
    imageArray: [],
    activeImage: undefined,

    // initialize()
    // Constructor runs on completion of the DOM loading. Calls updateImageList and then
    // the function inserts html at the bottom of the page which is used to display the shadow
    // overlay and the image container.
    //
    initialize: function() {

        this.updateImageList();

        this.keyboardAction = this.keyboardAction.bindAsEventListener(this);

        if (LightboxOptions.resizeSpeed > 10) LightboxOptions.resizeSpeed = 10;
        if (LightboxOptions.resizeSpeed < 1)  LightboxOptions.resizeSpeed = 1;

	    this.resizeDuration = LightboxOptions.animate ? ((11 - LightboxOptions.resizeSpeed) * 0.15) : 0;
	    this.overlayDuration = LightboxOptions.animate ? 0.2 : 0;  // shadow fade in/out duration

        // When Lightbox starts it will resize itself from 250 by 250 to the current image dimension.
        // If animations are turned off, it will be hidden as to prevent a flicker of a
        // white 250 by 250 box.
        var size = (LightboxOptions.animate ? 250 : 1) + 'px';


        // Code inserts html at the bottom of the page that looks similar to this:
        //
        //  <div id="overlay"></div>
        //  <div id="lightbox">
        //      <div id="outerImageContainer">
        //          <div id="imageContainer">
        //              <img id="lightboxImage">
        //              <div style="" id="hoverNav">
        //                  <a href="#" id="prevLink"></a>
        //                  <a href="#" id="nextLink"></a>
        //              </div>
        //              <div id="loading">
        //                  <a href="#" id="loadingLink">
        //                      <img src="images/loading.gif">
        //                  </a>
        //              </div>
        //          </div>
        //      </div>
        //      <div id="imageDataContainer">
        //          <div id="imageData">
        //              <div id="imageDetails">
        //                  <span id="caption"></span>
        //                  <span id="numberDisplay"></span>
        //              </div>
        //              <div id="bottomNav">
        //                  <a href="#" id="bottomNavClose">
        //                      <img src="images/close.gif">
        //                  </a>
        //              </div>
        //          </div>
        //      </div>
        //  </div>


        var objBody = $$('body')[0];

		objBody.appendChild(Builder.node('div',{id:'overlay'}));

        objBody.appendChild(Builder.node('div',{id:'lightbox'}, [
            Builder.node('div',{id:'outerImageContainer'},
                Builder.node('div',{id:'imageContainer'}, [
                    Builder.node('img',{id:'lightboxImage'}),
                    Builder.node('div',{id:'hoverNav'}, [
                        Builder.node('a',{id:'prevLink', href: '#' }),
                        Builder.node('a',{id:'nextLink', href: '#' })
                    ]),
                    Builder.node('div',{id:'loading'},
                        Builder.node('a',{id:'loadingLink', href: '#' },
                            Builder.node('img', {src: LightboxOptions.fileLoadingImage})
                        )
                    )
                ])
            ),
            Builder.node('div', {id:'imageDataContainer'},
                Builder.node('div',{id:'imageData'}, [
                    Builder.node('div',{id:'imageDetails'}, [
                        Builder.node('span',{id:'caption'}),
                        Builder.node('span',{id:'numberDisplay'})
                    ]),
                    Builder.node('div',{id:'bottomNav'},
                        Builder.node('a',{id:'bottomNavClose', href: '#' },
                            Builder.node('img', { src: LightboxOptions.fileBottomNavCloseImage })
                        )
                    )
                ])
            )
        ]));


		$Prototype('overlay').hide().observe('click', (function() { this.end(); }).bind(this));
		$Prototype('lightbox').hide().observe('click', (function(event) { if (event.element().id == 'lightbox') this.end(); }).bind(this));
		$Prototype('outerImageContainer').setStyle({ width: size, height: size });
		$Prototype('prevLink').observe('click', (function(event) { event.stop(); this.changeImage(this.activeImage - 1); }).bindAsEventListener(this));
		$Prototype('nextLink').observe('click', (function(event) { event.stop(); this.changeImage(this.activeImage + 1); }).bindAsEventListener(this));
		$Prototype('loadingLink').observe('click', (function(event) { event.stop(); this.end(); }).bind(this));
		$Prototype('bottomNavClose').observe('cld(); }).bind(this));

        var th = this;
        (function(){
            var ids =
                'overlay lightbox outerImageContainer imageContainer lightboxImage hoverNav prevLink nextLink loading loadingLink ' +
                'imageDataContainer imageData imageDetails caption numberDisplay bottomNav bottomNavClose';
            $w(idsid); });
        }).defer();
    },

    //
    // updateImageList()
    // Loops through anchor tags looking for 'lightbox' references and applies onclick
    // events to appropriate links. You can rerun after dynamically adding images w/ajax.
    //
    updateImageList: function() {
        this.updateImageList = Prototype.emptyFunction;

        document.observe('click', (function(event){
            var target = event.findElement('a[rel^=lightbox]') || event.findElement('area[rel^=lightbox]');
            if (target) {
                event.stop();
                this.start(target);
            }
        }).bind(this));
    },

    //
    //  start()
    //  Display overlay and lightbox. If image is part of a set, add siblings to imageArray.
    //
    start: function(imageLink) {

        $$('select', 'object', 'embed'den' });

        // stretch overlay to fill page and fade in
        var arrayPageSize = this.getPageSize();
        $Prototype('overlay').setStyle({ width: arrayPageSize[0] + 'px', height: arrayPageSize[1] + 'px' });

        new Effect.Appear(this.overlay, { duration: this.overlayDuration, from: 0.0, to: LightboxOptions.overlayOpacity });

        this.imageArray = [];
        var imageNum = 0;

        if ((imageLink.rel == 'lightbox')){
            // if image is NOT part of a set, add single image to imageArray
            this.imageArray.push([imageLink.href, imageLink.title]);
        } else {
            // if image is part of a set..
            this.imageArray =
                $$(imageLink.tagName + '[href][rel="' + imageLink.rel + '"]').
                cle]; }).
                uniq();

            while (this.imageArray[imageNum][0] != imageLink.href) { imageNum++; }
        }

        // calculate top and left offset for the lightbox
        var arrayPageScroll = document.viewport.getScrollOffsets();
        var lightboxTop = arrayPageScroll[1] + (document.viewport.getHeight() / 10);
        var lightboxLeft = arrayPageScroll[0];
        this.lightbox.setStyle({ top: lightboxTop + 'px', left: lightboxLeft + 'px' }).show();

        this.changeImage(imageNum);
    },

    //
    //  changeImage()
    //  Hide most elements and preload image in preparation for resizing image container.
    //
    changeImage: function(imageNum) {

        this.activeImage = imageNum; // update global var

        // hide elements during transition
        if (LightboxOptions.animate) this.loading.show();
        this.lightboxImage.hide();
        this.hoverNav.hide();
        this.prevLink.hide();
        this.nextLink.hide();
		// HACK: Opera9 does not currently support scriptaculous opacity and appear fx
        this.imageDataContainer.setStyle({opacity: .0001});
        this.numberDisplay.hide();

        var imgPreloader = new Image();

        // once image is preloaded, resize image container


        imgPreloader.onload = (function(){
            this.lightboxImage.src = this.imageArray[this.activeImage][0];
            this.resizeImageContainer(imgPreloader.width, imgPreloader.height);
        }).bind(this);
        imgPreloader.src = this.imageArray[this.activeImage][0];
    },

    //
    //  resizeImageContainer()
    //
    resizeImageContainer: function(imgWidth, imgHeight) {

        // get current width and height
        var widthCurrent  = this.outerImageContainer.getWidth();
        var heightCurrent = this.outerImageContainer.getHeight();

        // get new width and height
        var widthNew  = (imgWidth  + LightboxOptions.borderSize * 2);
        var heightNew = (imgHeight + LightboxOptions.borderSize * 2);

        // scalars based on change from old to new
        var xScale = (widthNew  / widthCurrent)  * 100;
        var yScale = (heightNew / heightCurrent) * 100;

        // calculate size difference between new and old image, and resize if necessary
        var wDiff = widthCurrent - widthNew;
        var hDiff = heightCurrent - heightNew;

        if (hDiff != 0) new Effect.Scale(this.outerImageContainer, yScale, {scaleX: false, duration: this.resizeDuration, queue: 'front'});
        if (wDiff != 0) new Effect.Scale(this.outerImageContainer, xScale, {scaleY: false, duration: this.resizeDuration, delay: this.resizeDuration});

        // if new and old image are same size and no scaling transition is necessary,
        // do a quick pause to prevent image flicker.
        var timeout = 0;
        if ((hDiff == 0) && (wDiff == 0)){
            timeout = 100;
            if (Prototype.Browser.IE) timeout = 250;
        }

        (function(){
            this.prevLink.setStyle({ height: imgHeight + 'px' });
            this.nextLink.setStyle({ height: imgHeight + 'px' });
            this.imageDataContainer.setStyle({ width: widthNew + 'px' });

            this.showImage();
        }).bind(this).delay(timeout / 1000);
    },

    //
    //  showImage()
    //  Display image and begin preloading neighbors.
    //
    showImage: function(){
        this.loading.hide();
        new Effect.Appear(this.lightboxImage, {
            duration: this.resizeDuration,
            queue: 'end',
            afterFis(); }).bind(this)
        });
        this.preloadNeighborImages();
    },

    //
    //  updateDetails()
    //  Display caption, image number, and bottom nav.
    //
    updateDetails: function() {

        // if caption is not null
        if (this.imageArray[this.activeImage][1] != ""){
            this.caption.update(this.imageArray[this.activeImage][1]).show();
        }

        // if image is part of set display 'Image x of x'
        if (this.imageArray.length > 1){
            this.numberDisplay.update( LightboxOptions.labelImage + ' ' + (this.activeImage + 1) + ' ' + LightboxOptions.labelOf + '  ' + this.imageArray.length).show();
        }

        new Effect.Parallel(
            [
                new Effect.SlideDown(this.imageDataContainer, { sync: true, duration: this.resizeDuration, from: 0.0, to: 1.0 }),
                new Effect.Appear(this.imageDataContainer, { sync: true, duration: this.resizeDuration })
            ],
            {
                duration: this.resizeDuration,
                afterFinish: (function() {
	                // update overlay size and update nav
	                var arrayPageSize = this.getPageSize();
	                this.overlay.setStyle({ height: arrayPageSize[1] + 'px' });
	                this.updateNav();
                }).bind(this)
            }
        );
    },

    //
    //  updateNav()
    //  Display appropriate previous and next hover navigation.
    //
    updateNav: function() {

        this.hoverNav.show();

        // if not first image in set, display prev image button
        if (this.activeImage > 0) this.prevLink.show();

        // if not last image in set, display next image button
        if (this.activeImage < (this.imageArray.length - 1)) this.nextLink.show();

        this.enableKeyboardNav();
    },

    //
    //  enableKeyboardNav()
    //
    enableKeyboa
    },

    //
    //  disableKeyboardNav()
    //
    disableKeyboardNav: function() {
        document.stopObserving('keydown', this.keyboardAction);
    },

    //
    //  keyboardAction()
    //
    keyboardAction: function(event) {
        var keycode = event.keyCode;

        var escapeKey;
        if (event.DOM_VK_ESCAPE) {  // mozilla
            escapeKey = event.DOM_VK_ESCAPE;
        } else { // ie
            escapeKey = 27;
        }

        var key = String.fromCharCode(keycode).toLowerCase();

        if (key.match(/x|o|c/) || (keycode == escapeKey)){ // close lightbox
            this.end();
        } else if ((key == 'p') || (keycode == 37)){ // display previous image
            if (this.activeImage != 0){
                this.disableKeyboardNav();
                this.changeImage(this.activeImage - 1);
            }
        } else if ((key == 'n') || (keycode == 39)){ // display next image
            if (this.activeImage != (this.imageArray.length - 1)){
                this.disableKeyboardNav();
                this.changeImage(this.activeImage + 1);
            }
        }
    },

    //
    //  preloadNeighborImages()
    //  Preload previous and next images.
    //
    preloadNeighborImages: function(){
        var preloadNextImage, preloadPrevImage;
        if (this.imageArray.length > this.activeImage + 1){
            preloadNextImage = new Image();
            preloadNextImage.src = this.imageArray[this.activeImage + 1][0];
        }
        if (this.activeImage > 0){
            preloadPrevImage = new Image();
            preloadPrevImage.src = this.imageArray[this.activeImage - 1][0];
        }

    },

    //
    //  end()
    //
    end: function() {
        this.disableKeyboardNav();
        this.lightbox.hide();
        new Effect.Fade(this.overlay, { duration: this.overlayDuration });
        $$('select', 'object', 'embed').each(function(node){ node.style.visibility = 'visible' });
    },

    //
    //  getPageSize()
    //
    getPageSize: function() {

	     var xScroll, yScroll;

		if (window.innerHeight && window.scrollMaxY) {
			xScroll = window.innerWidth + window.scrollMaxX;
			yScroll = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
			xScroll = document.body.scrollWidth;
			yScroll = document.body.scrollHeight;
		} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
			xScroll = document.body.offsetWidth;
			yScroll = document.body.offsetHeight;
		}

		var windowWidth, windowHeight;

		if (self.innerHeight) {	// all except Explorer
			if(document.documentElement.clientWidth){
				windowWidth = document.documentElement.clientWidth;
			} else {
				windowWidth = self.innerWidth;
			}
			windowHeight = self.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		} else if (document.body) { // other Explorers
			windowWidth = document.body.clientWidth;
			windowHeight = document.body.clientHeight;
		}

		// for small pages with total height less then height of the viewport
		if(yScroll < windowHeight){
			pageHeight = windowHeight;
		} else {
			pageHeight = yScroll;
		}

		// for small pages with total width less then width of the viewport
		if(xScroll < windowWidth){
			pageWidth = xScroll;
		} else {
			pageWidth = windowWidth;
		}

		return [pageWidth,pageHeight];
	}
});

document.observe('dom:lox(); });
/*1.0*/
/* ============================================================
 * loadmask.js v1.4.0 (moved from ui-toolkit since it has been deprecated)
 * ============================================================
 * Copyright (c) 2006-15 Spiceworks, Inc.  All Rights Reserved.  http://www.spiceworks.com
 * ============================================================ */


!function( $ ) {

  "use strict"

 /* LOADMASK PUBLIC CLASS DEFINITION
  * =============================== */

  var LoadMask = function ( element, options ) {
    this.init('loadmask', element, options)
  };

  LoadMask.prototype = {

    constructor: LoadMask, 

    init: function ( type, element, options ) {

      this.type = type;
      this.$element = $(element);
      this.options = this.getOptions(options);

      this.maskDiv = $('<div class="loadmask">&nbsp;</div>');
      this.maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>');
			this.maskMsgDiv.append('<div class="loadmask-img">&nbsp;</div>');
    }, 

    getOptions: function ( options ) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())
      return options;
    }, 

    show: function () {
    	this.maskElement();
    }, 

    hide: function () {
    	this.unmaskElement();
    },

    maskElement: function(){
			if(this.isMasked()) {
				this.unmaskElement();
			}

			if(this.$element.css("position") == "static") {
				this.$element.addClass("masked-relative");
			}
			this.$element.addClass("masked");
			
			this.$element.append(this.maskDiv);
			this.$element.append(this.maskMsgDiv);
			this.maskDiv.width(this.$element.width());
			this.maskDiv.height(this.$element.height());

			//calculate center position
			this.maskMsgDiv.css("top", Math.round(this.$element.height() / 2 - (this.maskMsgDiv.height()) / 2)+"px");
			this.maskMsgDiv.css("left", Math.round(this.$element.width() / 2 - (this.maskMsgDiv.width()) / 2)+"px");
			
			this.maskDiv.css('z-index', this.options.mask_z_index);
			this.maskMsgDiv.css('z-index', this.options.img_z_index);
			this.maskDiv.show();			
			this.maskMsgDiv.show();
    },

    unmaskElement: function(){
    	this.maskDiv.detach();
    	this.maskMsgDiv.detach();
			this.$element.removeClass("masked");
			this.$element.removeClass("masked-relative");
    },

    isMasked: function(){
    	return this.$element.hasClass("masked");
    }
  };


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.load})
  };

  $.fn.loadmask.Constructor = LoadMask;

  $.fn.loadmask.defaults = {
  	mask_z_index: 1,
  	img_z_index:2
  };

}( window.jQuery )
;
/*1.0*/


/**************
 * Global Namespace for all spiceworks stuff
 * THIS FILE SHOULD BE LOADED FIRST SINCE WE LOAD IN ALPHA ORDER (ignoring .js)
 */

var SPICEWORKS = {};

if (document.location.toString().match(/logEvents/)) {
  SPICEWORKS.logEvents = true;
}

// JSLINT - The following statement will allow this file to pass the jslint tests by adding a couple of global variables
/*global Element, $, $$, Event, GMap2, Ajax */

// Create a closure, passing in the global namespace (SPICEWORKS) to a local variable (spiceworks)
(function (spiceworks) {

  // Spiceworks Events
  // Register for events that might be occuring
  // Passes through to the browser event code (prototype) for now, but by change in the future
  spiceworks.observe = function (event, func) {
    // This still seems to be called. It can be seen on the /feed page.
    jQuery(document).on('spiceworks:' + event, func);
  };

  spiceworks.stopObserving = function (event, func) {
    jQuery(document).off('spiceworks:' + event, func);
  };

  // catch the loaded event so we'll know that we're ready to go.
  spiceworks.isReady = false;

  // Fire an event within the spiceworks infrastructure.
  // the event name is currently attacted to the DOM.
  // "spiceworks:" will be prepended to all events
  // immediate will force the event to fire even if the page is not "ready" (dom fully loaded).
  // By default, events will be queued up until the document is fully loaded
  // there is (currently) no guarentee on the order that events will be fired once added (FF and IE are different)
  spiceworks.fire = function (event, memo) {
    memo = memo || {};

    if (event == 'ready') {
      spiceworks.isReady = true;
    }

    // if the page is not ready, then try again once the page is ready.
    if (spiceworks.isReady || memo.immediate) {

      if (spiceworks.logEvents){
        console.log(' [Fire] ' + event + '  ' + Object.toJSON(memo));
      }
      jQuery(document).trigger('spiceworks:' + event, memo);
    } else {
      if (spiceworks.logEvents){
        console.log('[Delay] ' + event + '  ' + Object.toJSON(memo));
      }
      spiceworks.ready(function () { spiceworks.fire(event, memo); });
    }
  };

  // This is called once all plugins are given the chance to load.  Use this if you depend on something in another plugin.
  // If this app is already loaded, then the function will be called immediately (unless onLoadOnly is passed as true).
  spiceworks.ready = function (func, loadOnly) {
    if (spiceworks.isReady && !loadOnly) {
      func(); // app already initialized, so let's just call the method.
    } else {
      spiceworks.observe('ready', func);
    }
  };

  // Helper function to define spiceworks observer functions
  spiceworks.ready_};
  };

  // Create an object which derives from another object.
  // See: http://javascript.crockford.com/prototypal.html
  if (typeof Object.create !== 'function') {
    Object.cr
    };
  }

  // == SPICEWORKS.config ==
  // placeholder for configuration options  // see _script_includes.html.erb for more info on how this gets setup.
  spiceworks.config = {};

  jQuery(document).ready(function (e) {
    spiceworks.fire('ready');
  });

})(SPICEWORKS);
/*1.0*/
(function (spiceworks) {

  // == SPICEWORKS.community ==
  // Namespace for several APIs to pull down community content as JSON
  spiceworks.community = function () {
    var that;
    function fireCallback(callback, data){
      if(Object.isFunction(callback)){
        callback(data);
      } else {
        window[callback](data);
      }
    }

    that = {
      loadJSON: function(path, params, callback, identifier){
        jQuery.ajax({
          url: path,
          method: 'get',
          data: params
        })
            })
            });
      },
      url: function(path){
        return path;
      },
      linkTo: function(path, source, campaign){
        return jQuery("<a href='" + path + "'></a>").get(0);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.products ==
  // Get product information and community content by sending up model and manufacturer
  spiceworks.community.products = function () {
    var that;
    that = {
      getProduc     },
      getRecentRatings: function(params, callback, identifier){
        if(identifier){
          identifier += '_getRecentRatings';
        }
        spiceworks.community.loadJSON('/api/reviews/recent_ratings.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.forums ==
  // Get discussions from forums
  spiceworks.community.forums = function () {
    var that;
    that = {
      find: function(id, params, callback, identifier){
        if(identifier){
          identifier += '_community.forums.find/' + id;
        }
        spiceworks.community.loadJSON('/api/forums/' + id + '.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.itNews ==
  // Get the latest links posted to the Shared Links sections
  spiceworks.community.itNews = function () {
    var that;
    that = {
      find: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.itNews.find';
        }
        spiceworks.community.loadJSON('/api/it_news.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.groups ==
  // Get discussions, how-tos, etc. from groups
  // id may be an integer or a case-insensitive name
  spiceworks.community.groups = function () {
    var that;
    that = {
      find: function(id, params, callback, identifier){
        if(identifier){
          identifier += '_community.groups.find/' + id;
        }
        spiceworks.community.loadJSON('/api/groups/' + id + '.json', params, callback, identifier);
      },
      my: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.groups.my';
        }
        spiceworks.community.loadJSON('/api/groups/user.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.plugins ==
  // Get information about plugins that enhance your Spiceworks application
  spiceworks.community.plugins = function () {
    var that;
    that = {
      find: function(guid, params, callback, identifier){
        if(identifier){
          identifier += '_community.plugins.find/' + guid;
        }
        spiceworks.community.loadJSON('/api/plugins/show/' + guid + '.json', params, callback, identifier);
      },
      recent: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.plugins.recent';
        }
        spiceworks.community.loadJSON('/api/plugins/recent.json', params, callback, identifier);
      },
      topRated: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.plugins.topRated';
        }
        spiceworks.community.loadJSON('/api/plugins/top_rated.json', params, callback, identifier);
      },
      topDownloaded: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.plugins.topDownloaded';
        }
        spiceworks.community.loadJSON('/api/plugins/top_downloaded.json', params, callback, identifier);
      },
      featured: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.plugins.featured';
        }
        spiceworks.community.loadJSON('/api/plugins/featured.json', params, callback, identifier);
      },
      my: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.plugins.my';
        }
        spiceworks.community.loadJSON('/api/plugins/user.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.languagePacks ==
  // Get information about language packs for translating the Spiceworks interface.
  spiceworks.community.languagePacks = function () {
    var that;
    that = {
      find: function(guid, params, callback, identifier){
        if(identifier){
          identifier += '_community.languagePacks.find/' + guid;
        }
        spiceworks.community.loadJSON('/api/language_packs/show/' + guid + '.json', params, callback, identifier);
      },
      recent: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.languagePacks.recent';
        }
        spiceworks.community.loadJSON('/api/language_packs/recent.json', params, callback, identifier);
      },
      topRated: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.languagePacks.topRated';
        }
        spiceworks.community.loadJSON('/api/language_packs/top_rated.json', params, callback, identifier);
      },
      topDownloaded: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.languagePacks.topDownloaded';
        }
        spiceworks.community.loadJSON('/api/language_packs/top_downloaded.json', params, callback, identifier);
      },
      featured: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.languagePacks.featured';
        }
        spiceworks.community.loadJSON('/api/language_packs/featured.json', params, callback, identifier);
      },
      my: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.languagePacks.my';
        }
        spiceworks.community.loadJSON('/api/language_packs/user.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.messages ==
  // Retrieve information about a user's private messages from the community.
  spiceworks.community.messages = function () {
    var that;
    that = {
      inbox: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.messages.inbox';
        }
        spiceworks.community.loadJSON('/api/messages/inbox.json', params, callback, identifier);
      },
      unreadCount: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.messages.unreadCount';
        }
        spiceworks.community.loadJSON('/api/messages/unread_count.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.reports ==
  // Get information about shared reports from the Spiceworks Community.
  spiceworks.community.reports = function () {
    var that;
    that = {
      find: function(id, params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.find/' + id;
        }
        spiceworks.community.loadJSON('/api/reports/show/' + id + '.json', params, callback, identifier);
      },
      recent: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.recent';
        }
        spiceworks.community.loadJSON('/api/reports/recent.json', params, callback, identifier);
      },
      topRated: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.topRated';
        }
        spiceworks.community.loadJSON('/api/reports/top_rated.json', params, callback, identifier);
      },
      topDownloaded: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.topDownloaded';
        }
        spiceworks.community.loadJSON('/api/reports/top_downloaded.json', params, callback, identifier);
      },
      featured: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.featured';
        }
        spiceworks.community.loadJSON('/api/reports/featured.json', params, callback, identifier);
      },
      my: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.my';
        }
        spiceworks.community.loadJSON('/api/reports/user.json', params, callback, identifier);
      },
      // type should be one of: device, ticket, software, it_service, sql
      type: function(type, params, callback, identifier){
        if(identifier){
          identifier += '_community.reports.type/' + type;
        }
        spiceworks.community.loadJSON('/api/reports/type/' + type + '.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.search ==
  // Use the community's search engine to find community content
  spiceworks.community.search = function (query, params, callback, identifier) {
    params.query = query;
    if(identifier){
      identifier += '_community.search';
    }
    spiceworks.community.loadJSON('/api/search.json', params, callback, identifier);
  };

  // == SPICEWORKS.community.activity ==
  // Get a personalized live activity stream from the Spiceworks Community.
  spiceworks.community.activity = function () {
    var that;
    that = {
      user: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.activity.user';
        }
        spiceworks.community.loadJSON('/api/activity/user.json', params, callback, identifier);
      },
      userTimestamps: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.activity.userTimestamps';
        }
        spiceworks.community.loadJSON('/api/activity/user_timestamps.json', params, callback, identifier);
      },
      recentlyViewed: function(params, callback, identifier){
        if(identifier){
          identifier += '_community.activity.userTimestamps';
        }
        spiceworks.community.loadJSON('/api/activity/recently_viewed.json', params, callback, identifier);
      }
    };
    return that;
  }();

  // == SPICEWORKS.community.quotes ==
  // Manage requesting quotes from various areas in the navigation
  spiceworks.community.quotes = function() {
    // Deprecated, keeping in case something calls this
  }();

  // == SPICEWORKS.community.dashboard ==
  // Code to support Community dashboard pages, including the vendor dashboard page
  spiceworks.community.dashboard = function () {
    // Deprecated, keeping in case something calls this
  }();

})(SPICEWORKS);
/*1.0*/
(function (spiceworks) {
  // prepare SUI in case it's not initialized
  if (typeof SUI === 'undefined') {
    SPICEWORKS.ui = {};
    window.SUI = SPICEWORKS.ui;
  }

  spiceworks.ui.SimpleMenu = (function() {
      // all of the menu class definition is encapsulated in this closure

      // private, class variable
      var store = [];

      var origSpec = {
        alignment: 'right',
        offsetLeft: 0,
        offsetTop: 0,
        activateOn: 'mouseover',
        activatorZIndex: 500,
        alignToActivator: 'bottom',
        menuZIndex:1450,
        closeButton: [],
        activateDelay: 200,
        deactivateDelay: 100,
        absolutize: false, // Remove the menu from the normal flow of the document and prepend to the body
        afterHide: function(menu) {},
        afterShow: function(menu) {},
        update: function(menu) {},
        autoAdjustable: false // offsets are negatived
      };

      // constructor
      var SimpleMenu = function(activator, menu, spec){

        // change me to an actual error throw
        if ((!menu) || (!activator)) { return; }

        this.menuTimeout = null;
        this.showMenuTimeout = null;
        this.stuckOpen = null; // do i need this yet?
        this.id = menu.id;

        this.activator = $Prototype(activator);
        this.menu = $Prototype(menu);
        Object.extend(this, origSpec);
        Object.extend(this, spec);

        var simpleMenu = this;

        // instance event handlers
        Object.extend(this, {
          activatorOver: function(event) {
            clearTimeout(simpleMenu.showMenuTimeout);
            simpleMenu.showMenuTimeout = setTimeout(jQuery.proxy(simpleMenu, 'showMenu'), simpleMenu.activateDelay);
          },
          activatorOut: function(event) {
            clearTimeout(simpleMenu.showMenuTimeout);
            simpleMenu.showMenuTimeout = setTimeout(jQuery.proxy(simpleMenu, 'hideMenu'), simpleMenu.deactivateDelay);
          },
          men     },
          menuOut: function(event) {
            clearTimeout(simpleMenu.menuTimeout);
            simpleMenu.menuTimeout = setTimeout(jQuery.proxy(simpleMenu, 'hideMenu'), simpleMenu.deactivateDelay);
          },
          menuClicked: function(event) {
            var el = event.element();
            if (simpleMenu.menu.select(simpleMenu.closeButton).include(el)) {
              simpleMenu.hideMenu();
            }
          },
          toggleMenuVisibility: function(event) {
            event.stop();
            simpleMenu.menu.visible() ? simpleMenu.hideMenu() : simpleMenu.showMenu();
          }
        });

        this.attachHandlers();

        store.push(this);
      };

      // instance methods
      SimpleMenu.prototype = {
        align: function() {
          var offsetLeft = jQuery.determine(this.offsetLeft),
              offsetTop = jQuery.determine(this.offsetTop),
              vpSize = document.viewport.getDimensions(),
              vpScrolled = document.viewport.getScrollOffsets(),
              aPosition = this.activator.cumulativeOffset(),
              aSize = {height: this.activator.getHeight(), width: this.activator.getWidth()},
              mSize = {height: this.menu.getHeight(), width: this.menu.getWidth()},
              aligned = this.alignment,
              vAligned = 'bottom';

          var enoughTopRoom = function(){
            var availableSpace = vpSize.height + vpScrolled.top;
            // add 23 to the height for the bottom status bar
            var bottomMostMenuPixel = aPosition.top + mSize.height + offsetTop + 23;
            return bottomMostMenuPixel <= availableSpace;
          };

          var enoughRightRoom = function(){
            var availableSpace = vpSize.width + vpScrolled.left;
            var rightMostMenuPixel = aPosition.left + mSize.width + offsetLeft;
            return rightMostMenuPixel <= availableSpace;
          };

          var alignRight = function(){
            offsetLeft = -(mSize.width - aSize.width) + offsetLeft;
            aligned = 'right';
          };

          var align     };

          var vAlignTop = function(){
            offsetTop = -mSize.height + offsetTop;
            vAligned = 'top';
          };

          var vAlignBottom = function(){
            offsetTop = aSize.height + offsetTop;
            vAligned = 'bottom';
          };

          // horizontal alignment
          if (this.alignment == 'left') {
            if (this.autoAdjustable && !enoughRightRoom()) {
              offsetLeft = -offsetLeft;
              alignRight();
            }
          } else if (this.alignment == "center") {
            // no autoAdjust for centered items
            var menuMiddle = (mSize.width / 2);
            var activatorMiddle = (aSize.width / 2);
            offsetLeft = activatorMiddle - menuMiddle;
          } else {
            // no autoAdjust for right-aligned items
            alignRight();
          }

          // vertical alignment
          // not yet doing vertical viewport adjustment because of variable height popups
          //  if (this.autoAdjustable && !enoughTopRoom()) {
          //    offsetTop = -offsetTop;
          //    vAlignTop();
          //  } else {
          //    vAlignBottom();
          //  }
          vAlignBottom();

          // position it
          this.menu.clonePosition(this.activator, {
            setHeight:false,
            setWidth:false,
            offsetTop: offsetTop,
            offsetLeft: offsetLeft
          });

          // remove classes
          ['center', 'top', 'right', 'bottom', 'left'].each(function(location){
            ['menu-align-', 'menu-valign-', 'menu-at-the-'     }.bind(this));
          }.bind(this));

          // add appropriate positioned classes
          this.menu
            .addClassName("menu-align-" + aligned)
            .addClassName("menu-valign-" + vAligned)
            .addClassName("menu-at-the-" + this.alignToActivator);

          return this;
        },
        unload: function() {
          Event.stopObserving(this.activator);
          Event.stopObserving(this.menu);
          SPICEWORKS.stopObserving("simplemenu:show", this.menuShownEvent);

          this.menu.select(this.closeButton     });
        },
        setActivator: function(newActivator) {
          this.activator.simpleMenu = null;
          this.removeHandlers();

          this.activator = newActivator;
          Object.extend(this.activator, {simplemenu: this});
          this.attachHandlers();
        },
        destroy: function()
        {
          this.unload();
          $Prototype(this.menu).remove();
        },
        hideMenu: function() {
          if (this.stuckOpen) { return; }

          this.menu.hide();

          this.activator.style.zIndex=1;
          this.activator.removeClassName("active");

          if (this.activateOn == "click") { this.activator.blur(); } // or IE7 will freak
          SPICEWORKS.fire("simplemenu:hide", {id: this.id});
          this.afterHide();
        },
        showMenu: function() {
          this.update();
          SPICEWORKS.fire("simplemenu:show", {id: this.id});

          if (this.absolutize) {
            this.placeMenuInBody();
          }

          this.menu.show();

          if ((this.activator.getStyle('position') != "absolute")) {
            this.activator.style.position = "relative";
          }

          // we need to show the menu before aligning it so that offsetWidth is valid
          this.align();
          this.activator.style.zIndex = this.activatorZIndex;
          this.menu.style.zIndex = this.menuZIndex;

          this.activator.addClassName("active");
          this.activator.blur();
          this.afterShow();
        },
        placeMenuInBody: function() {
          if (!this.menu.hasClassName("attached_to_body")) {
            $Prototype(document.body).insert({
              bottom: this.menu
            });
            var dimensions = this.menu.getDimensions();
            this.menu.addClassName('attached_to_body').absolutize();
            this.menu.style.width = dimensions.width+'px';
            this.menu.style.height = dimensions.height+'px';
          }
        },
        setMenu: function(newMenu){
          var oldMenu = this.menu;
          this.removeHandlers();
          this.menu = newMenu;
          oldMenu.remove();
          this.attachHandlers();
          return this.menu;
        },
             },
        un     },
        attachHandlers: function() {
          if (Modernizr.touch || this.activateOn == "click") {
            this.activator.observe('click', this.toggleMenuVisibility);
            this.menu.observe('click', this.menuClicked);

            var self = this;
            var menuActivator = this.activator;
            // Attach any action handlers to trigger action event to bubble up
            jQuery(this.menu).find('[data-action]').on('click', function (event) {
              event.stopPropagation();

              var actionLink = jQuery(this);
              jQuery(menuActivator).trigger(actionLink.data('action'), actionLink.data('action-args'));
              self.hideMenu();
            });
          } else if (this.activateOn == "mouseover") {
            this.activator.observe('mouseover', this.activatorOver);
            this.activator.observe('mouseout', this.activatorOut);
            this.menu.observe('mouseover', this.menuOver);
            this.menu.observe('mouseout', this.menuOut);
            this.menu.observe('click', this.menuClicked);

            var self = this;
            var menuActivator = this.activator;
            // Attach any action handlers to trigger action event to bubble up
            jQuery(this.menu).find('[data-action]').on('click', function (event) {
              event.stopPropagation();

              var actionLink = jQuery(this);
              jQuery(menuActivator).trigger(actionLink.data('action'), actionLink.data('action-args'));
              self.hideMenu();
            });
          }
        },
        removeHandlers: function(){
          Event.stopObserving(this.activator);
          Event.stopObserving(this.menu);
          jQuery(this.menu).find('[data-action]').off();
        }
      };

      // public class methods
      SimpleMenu.all = function(){
        return store;
      };

      SimpleMenu.menuShownEvent = function(event) {
        // This could be from any menu
        jQuery.each(SimpleMenu.all(), function(){
          if (this.id != event.memo.id) { this.hideMenu(); }
        });
      };
      SPICEWORKS.observe("simplemenu:show", SimpleMenu.menuShownEvent);

      // return the entire public class
      return SimpleMenu;
  })();

  // Builds a secondary content box and returns the element ready to be inserted in the DOM
  // SPICEWORKS.ui.secondary.build({
  //    parent: 'some-element-id-to-append-to',
  //    heading:'My Secondary Box',
  //    tabs:[{visible:'Tab 1'}, {visible:'Tab 2', active:true}, {visible:'Tab 4'}],
  //    sheet:'<h3>this is my content</h3><p>content</p>',
  //    sideSections:[{title:'Side Section Title', items:[{classes:'item-class-one item class-two', visible:'some text and/or html'}]}]
  //  })
  spiceworks.ui.secondary = (function(){
    // our JS logger shows that this is still being used
    function build(options){
      options = Object.extend({
        parent:null,
        twoColumn:true,
        heading:'',
        tabs:[],
        sheet:'',
        sideSections:[]
      }, options || {});

      var secondary = new Element('div', {'class':'sui-secondary'});
      var header = new Element('div', {'class':'sui-header'}).update('<h2>' + options.heading + '</h2>');
      var innerClasses = $A(['inner']);
      if (options.twoColumn) { innerClasses.push('two-column'); }
      var inner = new Element('div', {'class':innerClasses.compact().join(' ')});

      if (options.twoColumn && options.sideSections){
        var side = new Element('div', {'class':'sui-overview'});
        options.sideSections.each(function(section){
          var sectionElement = new Element('div', {'class':'section'});
          sectionElement.insert("<h3>" + section.title + "</h3>");
          var list = new Element('ul', {'class':'properties content'});
          list.update(section.items.c     }).join("\n"));
          sectionElement.insert(list);
          side.insert(sectionElement);
        });
        inner.insert(side);
      }

      var tabs = new Element('div', {'class':'sui-tabs'}), list = new Element('ul');
      list.update(options.tabs.collect(function(item){
        item.classes = (item.classes || '') + (item.active ? ' active' : '');
        return '<li class="' + item.classes + '" id="' + item.id + '">' + item.visible + '</li>';
      }).join("\n"));
      tabs.update(list);
      tabs.insert('<div class="sui-tab-more" style="display:none;">&raquo;</div>');

      var sheet = new Element('div', {'class':'sui-sheet'}).update(options.sheet);
      var tabbedBox = new Element('div', {'class':'sui-tabbed-box-inner'}).insert(tabs).insert(sheet);
      var contentInner = new Element('div', {'class':'left drop-shadow sui-tabbed-box'}).update(tabbedBox);
      inner.insert(contentInner);
      secondary.insert(header).insert(inner);

      if (options.parent){
        var parent = $Prototype(options.parent);
        if (parent.down('div.sui-secondary')) { parent.down('div.sui-secondary').remove(); }
        parent.insert(secondary);
      }

      return secondary;
    }

    return {
      build:build
    };
  })();

  /*
    If you're calling this from javascript, or have pretty simple content to put in, use:
    SUI.modalPopup.build(options)

    For rendering content on the server (using rails helpers modal_popup_*)
    SUI.modalPopup.set(content, options)

    options:
      DEFAULTS MARKED WITH ( )

      allowClose: true (false)    default is false
      size:'small' ('medium') 'full'
      positioning: ('fixed') 'scroll'
      effect: 'bounce', (none)

      name: // will add a class to the container
      id: // will add an id to the container
      buttons: // build out buttons with an array of hashes in order of appearance (left to right),
                  i.e. [{name:'Cancel', callback:'cancel'}, {name:'OK', callback: function(container) { // do some stuff }}]
        button options:
        name: // title of button
        callback: // javascript to run when clicked. 'cancel' is a special keyword that will cause the modal to close when clicked
        secondary: // will make the button a link

      buttonSize: 'small' ('medium') 'large'
  */
  spiceworks.ui.modalPopup = (function() {
    var spec, modalWrap, darkbox, footer, lightbox, contentContainer, contentInner, removeTimer
    }

    function setup() {
      var existing = exists();
      if (existing) { existing.remove(); }

      modalWrap = new Element("div", {'id':'modal_container'});
      darkbox = new Element("div", {'id': 'modal_darkbox', 'class': 'darkbox'});
      lightbox = new Element("div", {'id': 'modal_lightbox', 'class': 'lightbox'});

      contentContainer = new Element("div", {'class': 'modal-popup'});
      contentInner = new Element("div", {'class': "modal-inner"});

      contentContainer.insert(contentInner);
      lightbox.insert(contentContainer);
      modalWrap.insert(darkbox);
      modalWrap.insert(lightbox);
    }

    function adjustPosition() {
      if ((spec.positioning == 'scroll') || (spec.size == 'full')) { // default is fixed
        contentContainer.setStyle('top:' + ($Prototype(window).scrollY + 15 + "px;"));
      }
    }

    function show() {
      window.clearTimeout(removeTimer);
      contentContainer.addClassName("no-transition");

      adjustPosition();

      $Prototype(document.body).insert({bottom: modalWrap});
      contentContainer.removeClassName('no-transition');
      contentContainer.addClassName('transition');

      contentContainer.observe('click', function(event) {
        if (event.element().hasClassName('close-modal') || event.element().up('.close-modal')) {
          remove();
        }
      });

      SPICEWORKS.fire('app:modal:created', spec.id);
    }

    function hide(event) {
      if (event && event.memo && event.memo.id) {
        if (event.memo.id == contentContainer.getAttribute('id')) {
          remove();
        }
      }
      else {
        remove();
      }
    }

    function remove(){
      modalWrap.hide();

      removeTimer = window.setTimeout(function() {
        modalWrap.remove();
      }, 1000); // give the popup a second to fire off any ajax requests if needed before yanking it from the document

      SPICEWORKS.fire('app:modal:removed', spec.id);
    }

    function buildDefaults(specs) {
      // Note: spec is global so the show method can have access to it
      spec = Object.extend({size: 'medium', buttonSize: 'medium', allowClose: false, buttons: []}, specs);
      if (spec.allowClose) {
        var close = new Element('a', {'class':'close'}).update("close");
        close.observe('click', hide);
        contentInner.insert(close);
        contentContainer.addClassName("with-close");

        document.observe('keydown', function(e) {
          if (e && e.keyCode == Event.KEY_ESC) { hide(); }
        });
      }
      if (spec.style) {
        modalWrap.addClassName(spec.style);
      }

      if ((spec.positioning == 'scroll') || (spec.size == 'full')) { // default is fixed
        contentContainer.up().addClassName('scroll');
        contentContainer.setStyle('top:' + ($Prototype(window).scrollY + 15 + "px;"));
      }

      if (spec.effect) {
        contentContainer.addClassName(spec.effect);
      }

      if (spec.id) {
        contentContainer.setAttribute('id', spec.id);
      }

      contentContainer.addClassName(spec.size);
      contentContainer.addClassName(spec.name);

      SPICEWORKS.observe('app:ui:modal-popup:close', hide);
    }

    function buildTemplate(specs) {
      // Note: spec is global so the show method can have access to it
      spec = Object.extend({size: 'medium', buttonSize: 'medium', allowClose: false, buttons: []}, specs);

      if (spec.title) {
        contentInner.insert(new Element('div', {'class': 'header'}).update(new Element('h1').update(spec.title)));
      }

      contentInner.insert(new Element('div', {'class':'popup-body'}).update(spec.content));

      if (spec.buttons) {
        var buttons, callback;
        footer = new Element('div', {'class':'footer'});
        var rightSide = new Element('div', {'class': 'right'});

        spec.buttons.each(function(buttonSpec) {
          if (buttonSpec.callback == "cancel") {
            callback = hide;
          }
          else {
            call     };
          }

          if (buttonSpec.secondary) {
            button = new Element('a', {'href':SUI.voidLink}).update(buttonSpec.name);
            button.observe('click', callback);
            if (buttonSpec.callback == 'cancel') { button.addClassName('cancel'); }
          }
          else {
            button = spiceworks.ui.button(buttonSpec.name, callback).addClassName(spec.buttonSize);
            button.addClassName('dark');
          }

          // if this modal has more than one button, make the first button the primary one
          if (spec.buttons.size() > 1 && spec.buttons.first() == buttonSpec) {
            button.addClassName('primary');
          }

          if (buttonSpec.left) {
            footer.insert(button);
          }
          else {
            rightSide.insert({bottom: button});
          }
        });
        footer.insert(rightSide);

        if (spec.buttons.length > 0) {
          contentInner.insert({bottom: footer});
        }
      }
    }

    return {
      e     },
      build: function(options) { // You provide the keys, and this will build the content
        setup();
        buildTemplate(Object.extend({
          size: 'medium', buttonSize: 'medium'
        }, options));

        buildDefaults(options);

        return {
          container: contentContainer,
          footer: footer,
          show: show,
          hide: hide
        };
      },
      set: function(content, options) { // Use set when you're creating the content yourself. Use this when you're using rails helpers to generate content

        setup();
        if (typeof content == "object") {
          // helps to set default title and stuff
          buildTemplate(Object.extend({
            size: 'medium', buttonSize: 'medium'
          }, content));
        }
        buildDefaults(options);
        if (typeof content != "object") {
          // probably a string
          contentInner.insert(content);
        }
        return {
          container: contentContainer,
          show: show,
          hide: hide
        };
      }
    };
  })();

})(SPICEWORKS);
/*1.0*/
/**
  * A collection of specific charts built on top of D3.
  *
  * @requires jQuery
  * @requires d3
  * @requires SVGWeb (for IE support)
  */


(function (spiceworks) {

  spiceworks.ui.d3 = (function(){

    /* -----------------------------------------------------------
     * Private
       =========================================================== */

     /**
      * Builds and displays an area chart.
      *
      * @function
      * @name SPICEWORKS.ui.d3.areaChart
      * @param {data} The data that will be rendered on the chart. TODO: document the format?
      * @param {elem} DOM element that the chart will be rendered inside.
      * @param {width} [Optional] Width in pixels
      * @param {height} [Optional] Height in pixels
      * @returns {null}
      */     }

      /**
       * Builds and displays a grouped bar chart.
       *
       * @function
       * @name SPICEWORKS.ui.d3.groupedBarChart
       * @param {data} The data that will be rendered on the chart.
       *   TODO: document the format?
       * @param {elem} DOM element that the chart will be rendered inside.
       * @param {width} [Optional] Width in pixels
       * @param {height} [Optional] Height in pixels
       * @param {options} [Optional] Options that determine the behavior of the chart
       * @returns {null}
       */
      function groupedBarChart(data, elem, width, height, options) {
        var color = d3.interpolateRgb("#aad", "#556");

        chartData = data.data;

        var p = 20,
            w = width || 600,
            h = (height || 200) - 0.5 - p,
            // x = d3.scale.linear().range([0, w]),
            // y = d3.scale.linear().range([0, h - 40]);
            // mx = m,
            stack_size = chartData.length,
            mx = chartData[0].length,
            my = d3.max(chartData, function(d) {
              return d3.     });
            }),
            mz = d3.max(char     }),
            x = function(d) { return d.x * w / mx; },
            y0 = function(d) { return h - d.y0 * h / my; },
            y1 = function(d) { return h - (d.y + d.y0) * h / my; },
            y2 = function(d) { return d.y * h / mz; }; // or `my` to not rescale

        var vis = d3.select(elem)
          .append("svg:svg")
            .attr("width", w)
            .attr("height", h + p);

        var layers = vis.selectAll("g.layer")
            .data(chartData)
          .enter().append("svg:g")
            .style("fill", function(d, i) { return color(i / (stack_size - 1)); })
            .attr("class", "layer");

        var bars = layers.selectAll("g.bar")
            .data(function(d) { return d; })
          .enter().append("svg:g")
            .attr("class", "bar")
            .attr("trans0)"; });

        bars.append("svg:rect")
            .attr("width", x({x: 0.9}))
            .attr("x", 0)
            .attr("y", h)
            .attr("height", 0)
          .transition()
             10; })
            .attr("y", y1)
            .attr("he(d); });

        var labels = vis.selectAll("text.label")
            .data(chartData[0])
          .enter().append("svg:text")
            .attr("class", "label")
            .attr("x", x)
            .attr("y", h + 6)
            .attr("dx", x({x: 0.45}))
            .attr("dy", ".71em")
            .attr("text-anchor", "right")
            .text(function(d, i) { return data.labels[i]; });

        vis.append("svg:line")
            .attr("x1", 0)
            .attr("x2", w - x({x: 0.1}))
            .attr("y1", h)
            .attr("y2", h);

      }

      /**
       * Builds and displays a stacked bar chart.
       *
       * @function
       * @name SPICEWORKS.ui.d3.stackedBarChart
       * @param {data} The data that will be rendered on the chart.
       *   TODO: document the format?
       * @param {elem} DOM element that the chart will be rendered inside.
       * @param {width} [Optional] Width in pixels
       * @param {height} [Optional] Height in pixels
       * @param {options} [Optional] Options that determine the behavior of the chart
       * @returns {null}
       */     }

      /**
       * Builds and displays a pie chart.
       *
       * @function
       * @name SPICEWORKS.ui.d3.pieChart
       * @param {data} The data that will be rendered on the chart.
       *   TODO: document the format?
       * @param {elem} DOM element that the chart will be rendered inside.
       * @param {width} [Optional] Width in pixels
       * @param {height} [Optional] Height in pixels
       * @param {options} [Optional] Options that determine the behavior of the chart
       * @returns {null}
       */
      function pieChart(data, elem, width, height, options) {
        var w = width || 200,
            h = height || 200,
            r = Math.min(w, h) / 2,
            color = d3.scale.category20(),
            donut = d3.layout.pie().value(function(d) { return d.value; }).sort(d3.descending),
            arc = d3.svg.arc().innerRadius(r * 0).outerRadius(r);

        // Populate defaults (do we need a d3.extend?)
        options = jQuery.extend({
          showLabels: true
        }, options || {});

        var vis = d3.select(elem)
          .append("svg:svg")
            .data([data])
            .attr("width", w)
            .attr("height", h);

        var arcs = vis.selectAll("g.arc")
            .data(donut)
          .enter().append("svg:g")
            .attr("class", "arc")
            .attr("transform", "translate(" + r + "," + r + ")");

        arcs.append("svg:path")
            .attr("(i); })
            .attr("d", arc);

        if (options.showLabels) {
          arcs.append("svg:text")
              .attr("trans")"; })
              .attr("dy", ".35em")
              .attr("text-anchor", "middle")
              .attr("disne"; })
                  });
        }
      }

      /**
       * Builds and displays a map showing data distribution across the US.
       *
       * @function
       * @name SPICEWORKS.ui.d3.usDistributionMap
       * @param {dataUrl} The URL from which data will be fetched that will be rendered on the chart.
       *   TODO: document the format?
       * @param {elem} DOM element that the chart will be rendered inside.
       * @param {width} [Optional] Width in pixels
       * @param {height} [Optional] Height in pixels
       * @param {options} [Optional] Options that determine the behavior of the chart
       * @returns {null}
       */
      function usDistributionMap(dataUrl, elem, width, height, options) {
        var data,
            follower_data,
            stateDataUrl = "/assets/d3/data/us-states.json",
            blues = ['247,251,255', '222,235,247', '198,219,239', '158,202,225',
                     '107,174,214', '66,146,198', '33,113,181', '8,81,156', '8,48,107'];

        // TODO: Make scale and translation relative parameters
        var path = d3.geo.path().projection(d3.geo.albersUsa().scale(500).translate([340,150]));

        var svg = d3.select(elem)
          .append("svg:svg")
          .attr("width", width)
          .attr("height", height);

        var states = svg.append("svg:g")
            .attr("id", "states")
            .attr("style", "stroke: #666666; stroke-width: .25px;");

        // Load raw state data
        d3.json(stateDataUrl, function(json) {
          data = json.features;

          // Load and merge counts
          d3.json(dataUrl, function(json) {
            follower_data = json;

            var domain_values = d3.values(follower_data);
            domain_values.push(0);
            var color = d3.scale.quantile()
              .domain(domain_values)
              .range(blues);

            states.selectAll("path")
                .data(data)
              .enter().append("svg:path")
                .attr("id", function(d) { return d.id; })
                .attr("d", path)
                .attr("style", function(d) {
                  return "fill: rgb(" + color(follower_data[d.id] || 0) + ")";
                })
              .append("svg:title")
                .text(function(d) { return STATE_NAMES[d.id] + " (" + (follower_data[d.id] || 0) + ")"; });
          });

        });
      }

      /**
       * Builds and displays a map showing data distribution across the world.
       *
       * @function
       * @name SPICEWORKS.ui.d3.worldDistributionMap
       * @param {dataUrl} The URL from which data will be fetched that will be rendered on the chart.
       *   TODO: document the format?
       * @param {elem} DOM element that the chart will be rendered inside.
       * @param {width} [Optional] Width in pixels
       * @param {height} [Optional] Height in pixels
       * @param {options} [Optional] Options that determine the behavior of the chart
       * @returns {null}
       */
      function worldDistributionMap(dataUrl, elem, width, height, options) {
        // this is used on vendor dashboards

        var data,
            follower_data,
            countryDataUrl = "/assets/d3/data/world-countries.json",
            blues = ["rgb(255,238,230)", "rgb(254,221,204)", "rgb(254,204,179)",
                     "rgb(253,187,153)", "rgb(253,171,128)", "rgb(253,154,102)",
                     "rgb(252,137,76)", "rgb(252,120,51)", "rgb(251,103,26)"];

        var opts = jQuery.extend(options, {
          scale: 600,
          translate: [300,175]
        });

        var xy = d3.geo.mercator().scale(opts.scale).translate(opts.translate),
            path = d3.geo.path().projection(xy);

        var tooltip = d3.select(elem).append("div").attr("class", "maptooltip").style("visibility", "hidden");
        tooltip.append("div").attr("class", "name").text("name");
        tooltip.append("div").attr("class", "count").text("count");

        var countries = d3.select(elem)
          .append("svg:svg")
            .attr("width", width)
            .attr("height", height)
            .append("svg:g")
              .attr("id", "countries");

        countries.append("svg:rect")
          .attr("width", width)
          .attr("height", height)
          .attr("style", "fill: rgb(255,255,255);")
          .on("mouseover", function(d, i){
            tooltip.select(".name").text("");
            tooltip.select(".count").text("");
            return tooltip.style("visibility", "hidden");
          })
          .on("clse; });

        var equator = d3.select("svg")
          .append("svg:line")
            .attr("x1", "0%")
            .attr("x2", "100%");

        d3.json(countryDataUrl, function(collection) {
          data = collection.features;

          d3.json(dataUrl, function(json) {
            if (json === null) {
              jQuery(elem).prepend("<div style='margin-top: 150px; color: #666; font-style: italic; text-align: center;'>No data to display</div>");
              return;
            }

            follower_data = json;

            var domain_values = d3.values(follower_data);
            domain_values = _.uniq(domain_values);
            var color = d3.scale.quantile()
              .domain(domain_values)
              .range(blues);

            // Build a legend (HTML)
            // Styles are in application.css
            var legend = d3.select(elem)
              .append("div")
                .attr("class", "maplegend");

            var marker = legend.selectAll("div.marker")
                .data(color.range())
              .enter().append("div")
                .attr("class", "marker");

            marker.append("div")
              .attr("class", "swatch")
              .attr("s     });

            marker.append("div")
              .attr("class", "label")
                  });

            // Display the countries with follower counts
            countries
              .selectAll("path")
                .data(data)
              .enter().append("svg:path")
                .attr("d", path)
                .attr("data-ame; })
                .attr("data-count", function(d) { return follower_data[d.properties.name] || 0; })
                .attr("style", function(d) {
                  return "stroke: #AAAAAA; stroke-width: .125px; fill: " + color(follower_data[d.properties.name] || 0, 0.5) + "";
                })
                .on("mouseover", function(d, i){
                  var e = d3.event;
                  e.stopPropagation();

                  tooltip.select(".name").text( d.properties.name );
                  tooltip.select(".count").text( (follower_data[d.properties.name] || 0) + " Followers");
                  return tooltip.style("visibility", "visible");
                })
                .on("mousemove", function(d, i){
                  var e = d3.event;
                  e.stopPropagation();

                  // For   Webkit       Firefox     IE
                  var x = (e.offsetX || e.layerX || e.clientX) - 50;
                  var y = (e.offsetY || e.layerY || e.clientY) - 30;
                  return tooltip.style("top", y + "px").style("left", x + "px").style("visibility", "visible");
                });
          });
        });

        function legend_text(color, idx) {
          var start = (idx === 0) ? color.domain().min() : color.quantiles()[idx - 1];
          var end = (idx == color.quantiles().length) ? color.domain().max() : color.quantiles()[idx];
          return start + " - " + end;
        }
      }

      /* ---------------------------------------
       * Internal (for testing)
       * --------------------------------------- */
      /* Inspired by Lee Byron's test data generator. */
      function stream_layers(n, m, o) {
        if (arguments.length < 3) { o = 0; }
        function bump(a) {
          var x = 1 / (0.1 + Math.random()),
              y = 2 * Math.random() - 0.5,
              z = 10 / (0.1 + Math.random());
          for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
          }
        }
        return d3.range(n).map(function() {
            var a = [], i;
            for (i = 0; i < m; i++) {
              a[i] = o + o * Math.random();
            }
            for (i = 0; i < 5; i++) {
              bump(a);
            }
            return a.map(stream_index);
          });
      }

      /* Another layer generator using gamma distributions. */
      function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
          return d3.range(m).map(function(j) {
              var x = 20 * j / m - i / 3;
              return 2 * x * Math.exp(-0.5 * x);
            }).map(stream_index);
          });
      }

      function stream_index(d, i) {
        return {x: i, y: Math.max(0, d)};
      }

      var STATE_NAMES = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AS': 'America Samoa',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'DC': 'District of Columbia',
        'FM': 'Micronesia1',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MH': 'Islands1',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PW': 'Palau',
        'PA': 'Pennsylvania',
        'PR': 'Puerto Rico',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VI': 'Virgin Island',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
      };

    /* -----------------------------------------------------------
     * Public
       =========================================================== */
    return {
      areaChart: areaChart,
      groupedBarChart: groupedBarChart,
      pieChart: pieChart,
      usDistributionMap: usDistributionMap,
      worldDistributionMap: worldDistributionMap
    };

  })();
})(SPICEWORKS);
/*1.0*/
/**
  * A collection of specific charts built on top of Protovis.
  *
  * @requires Prototype
  * @requires Protovis
  * @requires SVGWeb (for IE support)
  */


(function (spiceworks) {

  spiceworks.ui.protovis = (function(){

    /* -----------------------------------------------------------
     * Private
       =========================================================== */

     /**
      * Builds and displays an area chart.
      *
      * @function
      * @name SPICEWORKS.ui.protovis.areaChart
      * @param {data} The data that will be rendered on the chart. TODO: document the format?
      * @param {elem} DOM element that the chart will be rendered inside.
      * @param {width} [Optional] Width in pixels
      * @param {height} [Optional] Height in pixels
      * @returns {null}
      */
      function areaChart(data, elem, width, height, fillStyle, lineStyle) {
        // this is used on vendor dashboards
        var w = width || 400,
            h = height || 200,
            fill = fillStyle || "rgba(31,119,180,.6)",
            line = lineStyle || "rgba(31,119,180,1)",
            max = pv.max(data, function(d){ return d.value; }),
            segments = data.length -1,
            first = data[0].label,
            last = data[segments].label,
            x = pv.Scale.linear( pv.Format.date(first),  pv.Format.date(last) ).range(0, w),
            y = pv.Scale.linear().domain(0, max * 1.1).range(0, h);

        elem = elem || "body";
        var vis = new pv.Panel()
           .canvas(elem)
           .width(w)
           .height(h)
           .bottom(20)
           .left(0)
           .right(0)
           .top(5)
           .strokeStyle("#ccc");

        // X Axis
        vis.add(pv.Rule)
          .data(data)
          .left(function(d) { return this.index * (w / segments); })
          .strokeStyle("rgba(200, 200, 200, .4)")
        .anchor("bottom").add(pv.Label)
          .textAlign(function(d) {
            if (this.index === 0) {
              return "left";
            } else if (this.index == segments) {
              return "right";
            } else {
              return "center";
            }
          })
          .text(function(d) { return d.label; });

        // Charted data
        vis.add(pv.Area)
          .data(data)
          .left(function(d) { return this.index * (w / segments); })
          .bottom(0)
          .height(function(d) { return y(d.value); })
          .fillStyle(fill)
        .anchor("top")
          .add(pv.Line)
          .strokeStyle(line)
          .lineWidth(3);

        // Y Axis
        vis.add(pv.Rule)
          .data(y.ticks())
          .bottom(y)
          .strokeStyle("rgba(200, 200, 200, .4)")
          .visible(function(d) {
            // Hide the first label and any that
            // aren't whole numbers
            if (this.index === 0) { return false; }
            return (d % 1) === 0;
          })
        .anchor("left").add(pv.Label)
          .textStyle("rgba(120, 120, 120, .8)")
          .textAlign("left")
          .textBaseline("top")
          .text(function(d) { return d; });

        vis.render();
      }

      /**
       * Builds and displays a pie chart.
       *
       * @function
       * @name SPICEWORKS.ui.protovis.areaChart
       * @param {data} The data that will be rendered on the chart. TODO: document the format?
       * @param {elem} DOM element that the chart will be rendered inside.
       * @param {width} [Optional] Width in pixels
       * @param {height} [Optional] Height in pixels
       * @returns {null}
       */
      function pieChart(data, elem, width, height) {
        var w = width || 200,
            h = height || 200,
            r = w / 2,
            max = pv.sum(data, function(d){ return d.value; }),
            a = pv.Scale.linear(0, max).range(0, 2 * Math.PI);

        var vis = new pv.Panel()
            .canvas(elem)
            .width(w)
            .height(h);

        vis.add(pv.Wedge)
            .data(data)
            .outerRadius(r)
            ue); })
            .title(function(d) { return d.value; })
          .add(pv.Wedge) // invisible wedge to offset label
            .v.15; })
            .innerRadius(0.25 * r)
            .outerRadius(0.75 * r)
            .fillStyle(null)
          .anchor("center").add(pv.Label)
            .textAngle(0)
           bel; });

        vis.render();

      }

    /* -----------------------------------------------------------
     * Public
       =========================================================== */
    return {
      areaChart: areaChart,
      pieChart: pieChart
    };

  })();
})(SPICEWORKS);
/*1.0*/
/**
  * A collection of specific charts built on top of Highcharts.
  *
  * @requires Highcharts
  */


(function (spiceworks) {

  spiceworks.ui.highcharts = (function(){

    /* -----------------------------------------------------------
     * Private
       =========================================================== */

     var colors = ["#FF6904", "#808080", "#B3B3B3", "#DEDEDE"];

     /**
      * Builds and displays a market share pie chart.
      *
      * @function
      * @name SPICEWORKS.ui.highcharts.marketShareChart
      * @param {data} The data that will be rendered on the chart. TODO: document the format?
      * @param {elem} DOM element that the chart will be rendered inside.
      * @returns {null}
      */
      function marketShareChart(data, renderElem) {

        new Highcharts.Chart({
          chart: {
            renderTo: renderElem,
            type: 'pie',
            spacingTop: 5,
            spacingRight: 5,
            spacingBottom: 5,
            spacingLeft: 5
          },
          plotOptions: {
            pie: {
              dataLabels: false
            }
          },
          title: { text: '' },
          tooltip: {
            formatter: function() {
              return '<b>' + formatLabel(this.point.name) + '</b><br/>' + this.point.value + '%';
            },
            positioner: function (labelWidth, labelHeight, point) {
              return { x: (55 - labelWidth/2), y: (55 - labelHeight/2) };
            },
            style: {
              fontWeight: 'normal',
              fontSize: '11px'
            }
          },
          series: [{
            name: 'Market Share',
            data: formatForHighcharts(data),
            size: '100%',
            innerSize: '60%'
          }]
        });
      }

      function formatForHighcharts(data) {
        var idx = 0;
        return _.collect(data, function(datum) {
          return _.extend({name: datum.label, y: parseFloat(datum.value), color: colors[idx++]}, datum);
        });
      }

      // There's a rails helper in market_share_helper.rb that needs
      // to be kept in sync with this code
      function formatLabel(name) {
        labels = {
          "3com": "3Com",
          "d_link": "D-Link",
          "hp": "HP",
          "ibm": "IBM",
          "mcafee_virusscan": "McAfee Virusscan",
          "on site": "On&nbsp;Site",
          "sonicwall": "SonicWALL",
          "vmware": "VMware",
          "watchguard": "WatchGuard"
        };
        label = labels[name] || _.titleize(name);
        return label.replace(" ", "<br>").replace("Office2", "Office 2").replace("&nbsp;", " ");
      }
     }

    /* -----------------------------------------------------------
     * Public
       =========================================================== */
    return {
      marketShareChart: marketShareChart
    };

  })();
})(SPICEWORKS);
/*1.0*/
(function (spiceworks) {

  // == SPICEWORKS.utils ==
  // A namespace for things that don't fit anywhere else currently.  These are mostly related to integration
  // with external services and the like.
  spiceworks.utils = {};

  // Include an external script
  // EX:
  //   SPICEWORKS.utils.include('http://myserver/my.js');
  spiceworks.utils.include = function (script_filename, callback) {
    var head = document.getElementsByTagName('head')[0],
        script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = script_filename;

    if (callback){
      var done = false;
      script.onload = script.onreadystatechange = function(){
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
          done = true;
          callback();

          // Handle memory leak in IE
          script.onload = script.onreadystatechange = null;
          script.parentNode.removeChild(script);
        }
      };
    }

    head.appendChild(script);
  };

  // Load external JSONP and pass it into a supplied callback function.
  // Any query parameters should be passed in as a Javascript object.
  // EX:
  //   SPICEWORKS.utils.jsonp('http://example.com/foo.js', {'foo':'bar'}, function(response){
  //   });
  spiceworks.utils.jsonpCallbacks = {}; // Container for callback functions
  spiceworks.utils.jsonp = function(url, params, callback, identifier) {
    if(!identifier){
      identifier = Math.floor(Math.random()*10000000);
    }
    spiceworks.utils.jsonpCallbacks[identifier] = callback;
    url = url + '?' + Object.toQueryString(Object.extend(params, {
      'callback':'SPICEWORKS.utils.jsonpCallbacks[' + identifier.toJSON() + ']'
    }));
    spiceworks.utils.includ
    });
  };

  // Quickly add some style to the document.  Any valid Stylesheet style string works here.
  // EX:  SPICEWORKS.utils.addStyle("body { background-color: red }");
  spiceworks.utils.addS);
  };

  spiceworks.utils.includeStyle = function (cssUrl) {
    // <link href="/stylesheets/print.css?1251735325" media="print" rel="stylesheet" type="text/css">
    var styleNode = document.createElement('link');
    styleNode.setAttribute("type", "text/css");
    styleNode.setAttribute("href", cssUrl);
    styleNode.setAttribute("rel", "stylesheet");
    jQuery('head')[0].appendChild(styleNode);
  };

  // == SPICEWORKS.utils.google ==
  // Namespace for all sorts of nice google goodies
  // Users will need to set their own "key" by setting
  //    SPICEWORKS.utils.google.key = 'mykey';
  spiceworks.utils.google = function () {
    var googleLoaded = false,
        google = null,
        that;

    that = {
      key: 'ABQIAAAAXU7eNwZ9M4Sc9cn16StyDBRFChKT55K5FMfS9iKz1mkixBESPBSb4vJEgLxDzIfGJkiGB3x3myIrcQ',

      withGoogle: function (callback) {
        if (!googleLoaded) {
          spiceworks.utils.include("//www.google.com/jsapi?key=" + that.key, function () {
            google = window.google; // google is global, just grab for now.
            googleLoaded = true;

            callback(google);
          });
        } else {
          callback(google);
        }
      },

      withMaps: function (callback) {
        that.withGoogle(function (google) {
          google.load('maps', '2.x', {callback: function () {
            callback(GMap2);
          }});
        });
      },

      withVisualizations: function (packages, callback) {
        that.withGoogle(function (google) {
          google.load("visualization", "1", {packages: packages, cal     }});
        });
      }
    };

    return that;
  }();

})(SPICEWORKS);
/*1.0*/
(function($) {
  $(document).ready(function() {
    var $notice = $("[data-unverified-notice]");
    if($notice.length > 0) {
      $notice.each(function() {
        $(this).data("noticeHandler", new UnverifiedNotice($(this)));
      });
    }
  });

  TopicType = function($selectField) {
    this.init($selectField);
  }

  TopicType.prototype = {
    init: function($selectField) {
      this.$topicTypeSelect = $selectField;
      this.$topicTypeData = $("[data-topic-type='boombox']");
      this.setupTopicTypeData();
    },
    setupTopicTypeData: function() {
      if(this.$topicTypeSelect.length > 0) {
        var _this = this;
        this.$topicTypeSelect.change(function() {
          if(_this.$topicTypeSelect.val() === "boombox") {
            _this.$topicTypeData.slideDown();
          }
          else {
            _this.$topicTypeData.slideUp();
          }
        });
      }
    },
    checkTopicTypeData: function() {
      if(this.$topicTypeData.length > 0) {
        this.clearErrors();
        if(this.$topicTypeSelect.val() === "boombox" && this.$topicTypeData.find("input[name='boombox_quiz_id']").val().length <= 0) {
          this.$topicTypeData.addClass("input-error");
          this.$topicTypeData.append("<span class='help-inline'>Quiz ID can't be blank</span>");
          return false;
        }
      }
      return true;
    },
    clearE
    }
  }
})(jQuery);
/*1.0*/
/* ======================================================================== */
/*                                                                          */
/*   Topic data validation                                                  */
/*                                                                          */
/* ======================================================================== */


window.TopicValidation = function(tabView, groupTagging) {
  this.init(tabView, groupTagging);
};

TopicValidation.prototype = {
  init: function(tabView, groupTagging) {
    this.topicTabView = tabView;
    this.groupTagging = groupTagging;
    this.topicTypeControl = new TopicType($("[data-field='topic-type']"));

    this.$subject = $("[data-post-subject]");
    this.$subjectStatus = $("[data-subject-error]");

    this.$postText = $('[data-post-text]');
    this.$textStatus = $("[data-text-error]");

    this.$hasPoll = $("[data-has-poll]");
    this.$pollStatus = $("[data-poll-error]");

    this.$groupTagging = $("[data-topic-group-tagging]");
    this.$groupStatus = $("[data-group-error]");

    this.$submitBttn = $("[data-topic-submit]");
    this.$submitBttn.prepend("<span class='disabled-overlay'></span>");
    this.$submitError = $("[data-forum-submit-error]");

    this.subjectValid = !this.$subject.length || this.$subject.val().length;
    this.textValid = this.$postText.val().length;
    this.topicTypeValid = this.validateTopicType(false);
    this.pollValid = this.validatePoll(false);
    this.groupValid = this.validateGroup(false);

    this.bindValidationEvents();

    $('.topic-form-error').each(function(index, element) {
      if($(element).text().length) {
        $(element).show();
      }
    });
  },

  bindValidationEvents: function() {
    var _this = this,
        debounceTime = 500;

    //--------------- Validate subject events ---------------//

    this.$subject.on('keyup change', _.debounce(function(event) {
      _this.validateSubject(true);
    }, debounceTime));

    //--------------- Validate text events ---------------//

    if($UI.useMobile){
      this.$postText.on('keyup change', _.debounce(function(){
        _this.validateText(true);
      }, debounceTime));
    }
    else {
      $(document).on('editor_ready.wysihtml5', function() {
        this.$postText = $('[data-post-text]');

        var $editor = this.$postText.data('wysihtml5').editor;
        $editor.on('change', _.debounce(function() {
          _this.validateText(true);
        }, debounceTime));

        // this looks weird but it's the documented way to go about it
        $('.wysihtml5-sandbox').contents().find('body').on('keyup',  _.debounce(function() {
          if(_this.$postText.data('wysihtml5').editor.getValue().length) {
            _this.validateText(true);
          }
        }, 1000)); // Allow longer debounce time than other fields
      });
    }

    //--------------- Validate group events ---------------//

    this.$groupTagging.on('change', function(){
      _this.validateGroup(true);
    });

    //--------------- Validate topic types events ---------------//

    $("[data-field='topic-type'], [data-field='topic-type-data']").change(function() {
      _this.validateTopicType(true);
    });

    //--------------- Validate poll events ---------------//

    $('.topic-type-tabs a').click(function (e) {
      _this.validatePoll(false);
    });

    $(document).on('focus', ".poll-choice-add:last-child input[type='text']", _.once(function () {
      $(document).on('change keyup', ".poll-choice-add input[type='text']", _.debounce(function(){
        _this.validatePoll(true);
      }, debounceTime));
    }));

    //--------------- Validate everything ---------------//

    $(document).ready(function() {
      $("[data-topic-submit] .disabled-overlay").click(_.throttle(function() {
        _this.validateAll(false);
      }, 3000, {trailing: false}));

      $("[data-topic-submit], [data-topic-submit] .disabled-overlay")     });
    });
  },

  isNotBlank: function(string) {
    return (typeof(string) === "string" && string && string.trim().length > 0);
  },

  validateAll: function(scrollToError) {
    this.subjectValid = this.validateSubject(true);
    this.textValid = this.validateText(true);
    this.topicTypeValid = this.validateTopicType(true);
    this.pollValid = this.validatePoll(true);
    this.groupValid = this.validateGroup(true);

    if(scrollToError) {
      var $firstError = $(".topic-form-error:visible:first");
      if($firstError.length) {
        $('html, body').animate({
            scrollTop: $firstError.offset().top - 60
        }, 500);
      }
    }

    return this.formValid();
  },

  validateSubject: function(showErrors) {
    if(!this.$subject.length) {
      var error = false;
    }
    else {
      var value = this.$subject.val(),
          lettersOnly = value.replace(/[^a-zA-Z]/g, ""),
          message = "",
          errors = false;

      if (value.length && value.length < 3) {
        message += 'Subject must be at least 3 characters.';
        errors = true;
      }
      if(value.length > 80) {
        message += 'Subject must be fewer than 80 characters.';
        errors = true;
      }
      if(!this.isNotBlank(value)) {
        message += ' Subject cannot be blank.';
        errors = true;
      }
      if(this.isNotBlank(lettersOnly) && lettersOnly === lettersOnly.toUpperCase()) {
        message += " Using all caps is considered bad form. For the best results, please try posting in normal case.";
        errors = true;
      }
      // The unicode in the following RegEx is for the Cyrillic alphabet
      if(value.length && !value.match(/[a-z0-9\u0430-\u044f]/ig)) {
        message += ' Subject cannot only contain special characters.';
        errors = true;
      }
    }

    if(this.topicTabView) {
      this.topicTabView.toggleSubjectTopicTip(value.trim().split(' ').length);
    }

    this.subjectValid = !errors;
    this.toggleErrorsAndValidate(this.$subjectStatus, showErrors, errors, message);
    return this.subjectValid;
  },

  validateText: function(showErrors) {
    var message = "",
        errors = false,
        text = "",
        length = 3;

    if ($UI.useMobile) {
      text = this.$postText.val();
    }
    else {
      text = this.$postText.data('wysihtml5').editor.getValue();

      // Strip all HTML tags
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = text;
      text = tempDiv.textContent || tempDiv.innerText || "";
    }

    if (text === "") {
      message += "Post text cannot be blank.";
      errors = true;
    }
    if (text.length < length) {
      message += " Post text must contain at least 3 characters.";
      errors = true;
    }

    if (!$UI.useMobile && this.topicTabView) {
      this.topicTabView.toggleBodyTopicTip(text.trim().split(' ').length);
    }

    this.textValid = !errors;
    this.toggleErrorsAndValidate(this.$textStatus, showErrors, errors, message);
    return this.textValid;
  },

  validatePoll: function(showErrors) {
    if (this.$hasPoll.val() !== "true"){
      var error = false;
    }
    else {
      var _this = this;
      var message = "",
          errors = false,
          blankInputCount = $(".poll-choice-add input[type='text']").filter(function() {
            return !_this.isNotBlank($(this).val());
          }).length;

      if(blankInputCount) {
        message += ' Poll choices cannot be blank.';
        errors = true;
      }
    }

    this.pollValid = !errors;
    this.toggleErrorsAndValidate(this.$pollStatus, showErrors, errors, message);
    return this.pollValid;
  },

  validateGroup: function(showErrors){
    var message = this.groupTagging.groupErrors(),
        errors = message.length;

    this.groupValid = !errors;
    this.toggleErrorsAndValidate(this.$groupStatus, showErrors, errors, message);
    return this.groupValid;
  },

  toggleErrorsAndValidate: function($status, showErrors, errors, message) {
    if (showErrors && errors) {
      $status.html(message).show();
    }
    if (!errors){
      $status.hide().empty();
    }
    this.validateForm(showErrors);
  },

  validateTopid;
  },

  formd;
  },

  validat);
  },

  setButtonState: function(enabled, showErrors) {
    this.$submitBttn.prop('disabled', !enabled);

    if(showErrors) {
      if(enabled || !$(".topic-form-error:visible").length) {
        this.$submitError.text("");
      }
      else {
        this.$submitError.text("We need you to fix some things. Please check your post!");
      }
    }
  },
};
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["discussions-form/topic_tips_template"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="sui-alert sui-alert--info">\n  <div class="sui-alert_body">\n    <div class="topic-tips__header">\n      <div class="topic-tips__header--icon"></div>\n      <div class="topic-tips__header--title sui-alert_title">',(''+ tipTitle ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</div>\n    </div>\n    <div class="sui-alert_text">\n      <div class="topic-tips">\n        ');  for(var i=0; i < tipsList.length; i++) { ; __p.push('\n          <div class="topic-tip">\n            <div class="topic-tip-status ',  tipsList[i]['checked'] ? 'checked' : '' ,'" data-status-id="',(''+ i ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n              <div class="checked-outline"></div>\n              <div class="checkmark-stem"></div>\n              <div class="checkmark-kick"></div>\n            </div>\n            <div class="topic-tip-content">\n              <div class="topic-tip-header" data-header-id="',(''+ i ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n                ',(''+ tipsList[i]["header"] ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n              </div>\n\n              <div class="topic-tip-body" data-body-id="',(''+ i ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n                ',(''+ tipsList[i]["body"] ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n              </div>\n            </div>\n          </div>\n        ');  } ; __p.push('\n      </div>\n    </div>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/


/* ======================================================================== */
/*                                                                          */
/*   Handle topic tips display                                              */
/*                                                                          */
/* ======================================================================== */


window.TopicTips = function(currentTab) {
  this.init(currentTab);
};

TopicTips.prototype = {
  init: function(currentTab) {
    this.$wrapper = $("[data-target='tips-wrapper']");
    if(this.$wrapper.length) {
      this.currentTab = currentTab;
      this.values = {};
      this.setTips();
      for(var i=0; i < this.values.tipsList.length; i++) {
        this.values.tipsList[i]["checked"] = false;
      }
      this.tipsTemplate = JST['discussions-form/topic_tips_template'];
      this.renderTemplate();
    }
  },

  setTips: function() {
    switch(this.currentTab) {
      case "Question":
        this.values.tipsList = [
          { "header": "Start with a good question title", "body": "Don’t just type “Help!”, give important details right away so experts can quickly find your question." },
          { "header": "Be descriptive", "body": "The more information you can give, especially technical details, the better answers you can get from the Community." },
          { "header": "Don't forget to tag!", "body": "Tagging people notifies them and tagging products help readers learn more about the tech you're talking about." },
        ];
        break;
      case "Discussion":
        this.values.tipsList = [
          { "header": "Start with a good title", "body": "Your title helps people find your post and know what it's about." },
          { "header": "Share your thought", "body": "Instead of just linking out, give some context to your post." },
          { "header": "Don't forget to tag!", "body": "Tagging people notifies them and tagging products help readers learn more about the tech you're talking about." },
        ];
        break;
      case "Poll":
        this.values.tipsList = [
          { "header": "Start with a good title", "body": "Your title helps people find your poll and know what it's about." },
          { "header": "Add context", "body": "Tell the community why you're making a poll." },
          { "header": "Don't forget to tag!", "body": "Tagging people notifies them and tagging products help readers learn more about the tech you're talking about." },
        ];
        break;
      case "Recommendation":
        this.values.tipsList = [
          { "header": "Start with a good title", "body": "Topics with descriptive titles are more likely to get views than those without." },
          { "header": "Be descriptive", "body": "Topics that provide lot of details upfront are more likely to receive helpful responses. Include info like industry, company size, and region (which could affect recommendations)." },
          { "header": "Don't forget to tag!", "body": "Topics that include product and vendors tags get more views than those that don’t tag anything." },
        ];
        break;
      default:
        this.values.tipsList = [];
    }
    this.values.tipTitle = this.currentTab + " tips";
  },

  r.values));
  },

  changeTipsTab: function(newTab) {
    if(this.values) {
      this.currentTab = newTab;
      this.setTips();
      this.renderTemplate();
    }
  },

  changeTipsChecked: function(index, value) {
    if(this.values) {
      if(this.values.tipsList[index]) {
        this.values.tipsList[index]["checked"] = value;
      }
      this.renderTemplate();
    }
  },
};
/*1.0*/
/* ======================================================================== */
/*                                                                          */
/*   Subject placeholder and title for new and edit pages                   */
/*                                                                          */
/* ======================================================================== */




window.SubjectPlaceholderAndTitle = function(tab){
  this.init(tab);
}

SubjectPlaceholderAndTitle.prototype = {
  init: function(tab){
    this.$subject = $("[data-post-subject]");
    this.$subjectTitle = $("[data-post-subject-title]");
    this.updatePlaceHolderTextAndTitle(tab)
  }, 

  updatePlaceHolderTextAndTitle: function(tab) {
    var placeHolderTextandTitle = (function(tab) {
      switch(tab) {
        case "Question":
          return ["In one sentence, describe the issue...",
                  "What is your tech question?"];
        case "Discussion":
          return ["In one sentence, describe the topic of discussion...",
                  "What is your discussion about?"];
        case "Poll":
          return ["In one sentence, describe your poll...",
                  "What are you polling your fellow IT pros about?"];
        case "Recommendation":
          return ["In one sentence, what kind of tech are you looking for?",
                  "What kind of recommendations are you looking for?"];
      }
    })(tab);

    this.$subject.attr("placeholder", placeHolderTextandTitle[0]);
    this.$subjectTitle.text(placeHolderTextandTitle[1]);
  },
}
;
/*1.0*/



/* ======================================================================== */
/*                                                                          */
/*   Handle changing of topic type tab                                      */
/*                                                                          */
/* ======================================================================== */


window.TopicTabView = function() {
  this.init();
};

TopicTabView.prototype = {
  init: function() {
    this.currentTab = $('.topic-type-tabs .active').text();
    this.topicTips = new TopicTips(this.currentTab);
    this.$needAnswer = $("[data-need-answer]");
    this.$hasPoll = $("[data-has-poll]");
    this.$pollLocked = $("[data-poll-locked]");
    this.$postForm = $("[data-new-post-form]");
    this.$pollControls = $("[data-poll-controls]");
    this.$isRecommendation = $("[data-is-recommendation]");
    this.$recommendationInfo = $("[data-recommendation-info]");

    var _this = this;
    $(document).on("dynamicTagListChanged", function() {
      _this.toggleTaggingTopicTip($('.tag-editor li').length > 1);
    });

    $('.topic-type-tabs a').click(function (e) {
      _this.changeTab($(this).text());
      $('.topic-form-error').each(function(index, element) {
        if($(element).text().length) {
          $(element).hide();
        }
      });
      $('.topic-submit_error').each(function(index, element) {
        if($(element).text().length) {
          $(element).hide();
        }
      });
    });

    // Force tab change on init, so active tab is automatically selected
    this.changeTab(this.currentTab);
  },

  updateTabContents: function() {
    this.updateNeedsAnswer();
    this.updatePollForm();
    this.updateTopicTips();
    this.updateRecommendationForm();
    new SubjectPlaceholderAndTitle(this.currentTab);
  },

  updateNeedsAnswer: function() {
    if(this.currentTab === "Question" || this.currentTab === "Recommendation") {
      this.$needAnswer.val("yes");
    } else {
      this.$needAnswer.val("no");
    }
  },

  updatePollForm: function() {
    if(this.currentTab === "Poll"){
      if(this.$pollLocked.length){
        this.$postForm.hide();
        this.$pollLocked.show();
      } else {
        this.$pollControls.show();
        this.$hasPoll.val("true");
      }
    } else {
      this.$hasPoll.val("false");
      this.$pollControls.hide();
      this.$postForm.show();
      this.$pollLocked.hide();
    }
  },

  updateRecommendationForm: function() {
    var isReco = this.currentTab === "Recommendation";

    this.$isRecommendation.val(isReco);
    this.$recommendationInfo.toggle(isReco);
  },

  uprrentTab);
  },

  changeTab: function(newTab) {
    this.currentTab = newTab;
    this.updateTabContents();
  },

  toggleSubjectTopicTip: function(wordsCount) {
    this.topicTips.changeTipsChecked(0, wordsCount >= 10);
  },

  toggleBodyTopicTip: function(wordsCount) {
   
      }
    })(this.currentTab);
    this.topicTips.changeTipsChecked(1, wordsCount >= cutoff);
  },

  toggleTaggingTopicTip: function(hasTags) {
    this.topicTips.changeTipsChecked(2, hasTags);
  },
};
/*1.0*/
/* ======================================================================== */
/*                                                                          */
/*   Handle group tagging selection and errors                              */
/*                                                                          */
/* ======================================================================== */


window.TopiclistingApi);
};

TopicGroupTagging.prototype = {
  init: function($element, listingApi) {
    this.$groupTagging = $element;

    if(this.$groupTagging.length) {
      $.get(listingApi)
      .done( $.proxy( this.processTaggingGroups, this ) );
    }
  },

  processTaggingGroups: function(groupsJson) {
    var groupings = {};
    for(var i=0; i < groupsJson.length; i++) {
      var groupType = groupsJson[i].type_for_tagging;
      groupings[groupType] = groupings[groupType] || [];
      groupings[groupType].push(groupsJson[i]);
    }

    var groupingPriority = ["Special", "Technology", "Industry", "Beta", "SpiceCorps", "Location", "User Group", "Vendor Page", "Other"];
    this.taggingGroups = [];
    for(var i=0; i < groupingPriority.length; i++) {
      var groupsForType = groupings[groupingPriority[i]];
      if(groupsForType && groupsForType.length) {
        this.taggingGroups.push({
          text: groupingPriority[i],
          children: groupsForType.map(function (group) {
            if(group.name) {
              group.text = group.name;
            }
            else {
              group.text = group.display_name;
            }
            if(group['private?']) {
              group.private = true;
            }
            return group;
          })
        });
      }
    }

    this.renderGroupsSelect();
  },

  renderGroupsSelect: function() {
    this.$groupTagging.select2({
      data: this.taggingGroups,
      multiple: this.$groupTagging.data('can-multi-tag'),
      maximumSelectionSize: 3,
      width: 'resolve',
      formatSelection: function(group) {
        if(group.private) {
          return group.text + "<span class='private-group'> (Private)</span>";
        }
        else {
          return group.text;
        }
      },
      formatResult: function(group) {
        if(group.private) {
          return group.text + "<span class='private-group'> - Private</span>";
        }
        else {
          return group.text;
        }
      },
      escapeMarkup: function(m) { return m; }
    });

    if(this.$groupTagging.data('default-group-id')) {
      this.$groupTagging.select2("val", this.$groupTagging.data('default-group-id'));
    }
  },

  groupErrors: function() {
    if (this.$groupTagging.length && !this.$groupTagging.val().length){
      return "A topic must have at least 1 group.";
    }

    var taggedGroups = this.$groupTagging.select2("data");

    if(taggedGroups.length > 1) {
      for(var i=0; i < taggedGroups.length; i++) {
        if(taggedGroups[i].private) {
          return "Sorry, you can't multi-tag to a private group.";
        }
      }
    }

    return "";
  },

  getSelectData: function() {
    return this.$groupTagging.select2("data");
  },

 ("close");
  },
};
/*1.0*/
(function($) {
  window.flexLabel = function() {
    var flexLabel = {
      init: function($inputs) {
        $inpue');
        });

        $inputs.on('blur', function (event) {
          if($(event.target).val() !== '') {
            return;
          }
          $(event.target).prev().removeClass('control-group--with-flex-labels__label--active');
        })
      }
    };
    return flexLabel;
  }();
})(jQuery);
/*1.0*/
/* ======================================================================== */
/*                                                                          */
/*   Topic recommendation info field behaviour                              */
/*                                                                          */
/* ======================================================================== */



window.TOPIC_RECOMMENDATION_SELECTOR = '[data-recommendation-info]';

window.TopicRecommendationInfo = function() {
  this.init();
};

TopicRecommendationInfo.prototype = {
  init: function() {
    this.setupJobExperienceActions();
  },

  setupJobExperienceActions: function () {
    var _this = this,
      $jobExperienceCheck = $('[data-check-job-experience]'),
      $jobExperienceSelects = $('[data-job-experience]');

    window.flexLabel.init($jobExperienceSelects);

    $jobExperienceSelects.each(function () {
      _this.toggleFlexLabelClass($(this));
    });

    $jobExperienceCheck.change(function () {
      if (this.checked) {
        $jobExperienceSelects.each(function () {
          var profileValue = $(this).data('jobExperience');

          $(this).val(profileValue);
          _this.toggleFlexLabelClass($(this));
        });
      } else {
        $jobExperienceSelects.each(function () {
          this.selectedIndex = 0;
          _this.toggleFlexLabelClass($(this));
        })
      }
    });

    $jobExperienceSelects.on('change', function () {
      $jobExperienceCheck.prop('checked', false);
    });
  },

  toggleFlexLabelClass: function (jobExperienceSelect) {
    $(jobExperienceSelect).prev().toggleClass('control-group--with-flex-labels__label--active', $(jobExperienceSelect).val() !== '');
  },
};
/*1.0*/







+(function($) {
  'use strict';

  window.AskQuestion = {
    // our JsLogger shows that the initialize is still being used
    initialize: function(formIsOpen, forum_id, topicTypeLabel) {
      this.forumID = forum_id;
      this.subject = "";
      this.resultsTimerOn = false;
      this.$subject = $("[data-post-subject]");
      this.$searchResults = $("[data-search-results]");
      this.setupSearchResults();
      this.groupTagging = new TopicGroupTagging($("[data-topic-group-tagging]"), "/topic/group_autocomplete");
      this.topicTabView = $(".topic-type-tabs").length ? new TopicTabView() : false;
      !this.topicTabView && new SubjectPlaceholderAndTitle(topicTypeLabel);
      this.validator = new TopicValidation(this.topicTabView, this.groupTagging);
      this.recommendationInfo = $(TOPIC_RECOMMENDATION_SELECTOR).length ? new TopicRecommendationInfo() : false;
    },

    setupSearchResults: function() {
      var _this = this;

      if(this.$searchResults.length) {
        this.$subject.keyup(function(e) {
          // if space
          if(e.keyCode === 32) {
            AskQuestion.findResults();
          }
          // set timeout to check if they stop typing
          _this.lastKeyPress = new Date().getTime();
          if(_this.resultsTimerOn) {
            clearTimeout(_this.resultsTimer);
          }
          else {
            _this.resultsTimerOn = true;
          }
          AskQuestion.setResultsTimer();

          return undefined;
        });

        wins();
        }, 100);

        // when tab is pressed, focus the rich text editor!
        this.$subject.keydown(function(event) {
          if(event.keyCode === 9) {
            event.preventDefault();
            RichTextEditor.focus('post_text');
            _this.$searchResults.hide();
            jQuery("[data-search-result-topics]").empty();
          }
        });
      }

      $(document).mouseup(function (e){
        if (!_this.$searchResults.is(e.target) // if the target of the click isn't the container...
          && !_this.$searchResults.has(e.target).length) // ... nor a descendant of the container
        {
          _this.$searchResults.hide();
          jQuery("[data-search-result-topics]").empty();
        }
      });
    },

    findResults: function() {
      var _this = this;
      if(this.$subject.val() != this.subject) {
        this.subject = this.$subject.val();
        var url = "/topic/find_results_for_subject?question=" + this.subject + "&forum_id=" + this.forumID;
        $.ajax({
          url: url,
          success: function(data) {
            if (data.num_topics && _this.$subject.is(':focus')){
              $("[data-search-result-topics]").html(data.partial);
              $("[data-search-results]").fadeIn( 500 )
            }
            else {
              $("[data-search-results]").hide();
            }
          }
        });
      }
    },

    setResultsTimer: function() {
      var _this = this;
      this.resultsTimer = setTimeout(function() {
        var currentTime = new Date().getTime();
        if(currentTime - _this.lastKeyPress > 250) {
          AskQuestion.findResults();
        }
        AskQuestion.setResultsTimer();
      }, 1000);
    },
  };

  if( window.AskQuestionSetup ) {
    var setup = window.AskQuestionSetup;
    AskQuestion.initialize( setup.formIsOpen, setup.forum_id, setup.topicTypeLabel);
  }

})(window.jQuery);
/*1.0*/

(function($) {

  $(document).on('ready', function() {

    /////////////////////
    // Navbar Init
    var navConfig = $('[data-menu-config="suiMainNavbarConfig"]');
    var navDomesticConfig = $('[data-menu-config="suiDomesticNavbarConfig"]');
    var footerConfig = $('[data-menu-config="suiFooterConfig"]');

    if( navConfig.length ) {
      
        $UI.Navbar.create( $.extend({
         g;
          },
          onJoin: function() {
            JoinAndLogin.trackAndShowForm('join', {label: 'Global Nav Join Button'}, {fromNavbar: true});
          },
          onLogin: function() {
            JoinAndLogin.trackAndShowForm('login', {label: 'Global Nav Login Link'}, {fromNavbar: true});
          }
        }, JSON.parse( navConfig.text() )) );
      
    }
    if ( navDomesticConfig.length ) {
      $UI.DomesticNavbar.create(JSON.parse(navDomesticConfig.text())).render();
    }
    if( footerConfig.length) {
      $UI.Footer.create(JSON.parse(footerConfig.text()));
    }
    /////////////////////
  });

})(jQuery);
/*1.0*/

var SPICE = window.SPICE || {};

(function($) {

  $(document).on('ready', function() {

    if( window.jstz && window.Cookie ) {
      var timezone = jstz.determine().name();
      Cookie.set('timezone_name', timezone);
    }

    jQuery('body').on('focus', '[data-init="datepicker"]', function(){
      jQuery(this).datepicker();
    })

  });

})(jQuery);

!function($) {
  $(document).on("spiced.spicebutton.sui", '.votable[data-toggle="spicebttn"]', function(event, btn) {
      var httpMethod =  btn.options.spicedstate == SpicedState.unspiced ? "DELETE" : "POST",
          url = ["/votes", btn.options.spiceable_class, btn.options.spiceable_id].join('/');
      $.ajax(url, {type: httpMethod, data: btn.options});
    }).on("count_click.spicebutton.sui", '.votable[data-toggle="spicebttn"]', function(event, btn) {
      // our JS logger shows that this is still being used
      var url = ["/votes", btn.options.spiceable_class, btn.options.spiceable_id].join('/');
  ta).modal(); });
    });
}(jQuery);

jQuery( function($) {
  $('[data-toggle="followbttn"]').each(function() {
    // being used on Recommended Groups card on /start page
    var $this = $(this),
        klass = $this.data("followableClass"),
        id = $this.data("followableId");
    if(User.following && _(User.following[klass]).contains(id)) {
      $this.data("followbutton").setOptions({following: true});
    }
  });

  /* Clear notification unread count on navbar 'read' message */
  $(document).on( 'community_notifications:read', '[data-navbar="global"]', function() {
    GoogleAnalytics.trackEvent('Notifications', 'Unread Opened');
  });
  $('nav.navbar .community-notifications a''Opened');
  });
});

// Mix underscore.string functions into underscore namespace so
// that we can use _.method instead of _.str.method
_.mixin(_.str.exports());
/*1.0*/
var AdHelper = {
  checkResolutionAndRenderAds: function(){
    var screenWidth = screen.width;
    var resolution = 'normal';
    if (screenWidth && parseInt(screenWidth, 10) < 1200){
      resolution = 'narrow';
      Application.narrowLayout();
    }

    Cookie.set('screen_resolution', resolution);
  }
};

/* Manage the ad refreshing for the app
 * Reload when user comes back to the app from another tab/application
 * Watches for window focus to do the reloading.
 * (Wrapped to keep this all out of the global NS)
 */
(function () {
  var timeout = null,
  allowSwap = false,
  swapDelay = 3000, // 3 Seconds before swapping
  showAtLeast = 60000; // 60 Seconds per ad (at least)

  // Set Allow Swap to true aftewAap = true;
  }

  function onTabFocus () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (allowSwap) {
        startCountdownToSwap();
        Application.refreshAd();
      }
    }, swapDelay);
  }

  // if we leave, just clear the timeout so we (timeout);
  }

  jQuery(window).bind('focus', onTabFocus);
  jQuery(window).bind('blur', onTabBlur);
  startCountdownToSwap();

  // Duplicate old in-page call in engines/discussions/app/views/topic/sidebar/_generic.html.erb
  if( window.AdHelperConfig && window.AdHelperConfig.checkResolutionAndRenderAds ) {
    AdHelper.checkResolutionAndRenderAds();
  }
})();
/*1.0*/
// these are used on both /how_to and /moderation
// need to figure out a better way to do this...
var SharedModerationModals = {
  bindOnForm: function(modal_id) {
    jQuery(modal_id + ' form').on('ajax:success', function() {
      location.reload();
    });
    jQuery(modal_id + ' form').on('ajax:error', function(data, xhr) {
      jQuery(modal_id + ' .sui-bttn--primary').button('reset');
      if(xhr.status == 400 && JSON.parse(xhr.responseText).error) {
        jQuery(modal_id + ' .highlight').html(JSON.parse(xhr.responseText).error);
      }
      else {
        jQuery(modal_id + ' .higlight').html("Sorry, something went wrong. We couldn't do the action you requested.");
      }
    });
  },
  bindOnSubmit: function(modal_id) {
    jQuery(modal_id + ' form').on('submit', function(e) {
      jQuery(modal_id + ' .sui-bttn--primary').button('loading');
      jQuery(modal_id + ' .highlight').html('');
    });
  },
  resetModal: function(comment_id, modal_id, type) {
    jQuery(modal_id + ' textarea').val('');
    jQuery(modal_id + ' .sui-bttn--primary').button('reset');
    jQuery(modal_id + ' .highlight').html('');
    jQuery(modal_id + ' .hidden-id').val(comment_id);
    jQuery(modal_id + ' form').unbind('ajax:success');
    jQuery(modal_id + ' form').unbind('ajax:error');

    if(type == 'delete' || type == 'unpublish') {
      jQuery(modal_id + ' input[type=checkbox]').attr('checked', false);
      jQuery(modal_id + ' select').val('');
    }
  },
  // object_class = how_to, how_to_comment, project_comment
  // type = delete, unpublish, reassign, or approve
  showModerationModal: function(object_id, object_class, type) {
    var id = '#' + type + '_' + object_class + '_modal';
    if(jQuery(id).length == 0) {
      SharedModerationModals.insertModerationModal(jQuery('#content'), object_class, type);
    }
    SharedModerationModals.resetModerationModal(object_id, object_class, type);
    SharedModerationModals.bindOnForm(id);
    jQuery(id).sui_modal('show');
  },
  insertModerationModal: function(wrapper, object_class, type, options) {
    var id = '#' + type + '_' + object_class + '_modal',
        this_options = options || {};
    jQuery(id).remove();

    var url = "";
    if(object_class === 'how_to') {
      if(type === 'approve') {
        url = '/how_to/approve_modal';
      } else if(type === 'reassign') {
        url = '/how_to/reassign_modal';
        if(this_options.id) {
          url += '?id=' + this_options.id;
        }
      } else {
        url = '/how_to/moderation_modal';
      }
    } else if(object_class === 'how_to_comment') {
      url = '/how_to_comment/' + type + '_modal';
    } else if(object_class === 'project_comment') {
      url = '/people/project_comments/' + type + '_modal';
    } else {
      $UI.growl({
        type: 'error', caption: 'Error loading moderation modal. Please contact support.'
      });
      return;
    }
    jQuery.get(url, {type: type}).success(function(data) {
      wrapper.append(data.partial);
      SharedModerationModals.bindOnSubmit(id);

      if(type != 'approve') {
        jQuery(id + ' .delete-reasons select').on('change', function(e) {
          jQuery(id + ' textarea').val(jQuery(e.target).val());
        });
      }
    });
  },
  resetModerationModal: function(object_id, object_class, type) {
    SharedModerationModals.resetModal(object_id, "#" + type + "_" + object_class + "_modal", type);
  },
  approveComment: function(id, object_class) {
    if(object_class === 'how_to_comment') {
      var url = '/how_to_comment/approve';
    } else if(object_class === 'project_comment') {
      var url = '/people/project_comments/approve';
    }
    jQuery.ajax({
      url: url,
      data: {id: id},
      type: 'post',
      success: function() {
        location.reload();
      },
      error: function() {
        $UI.growl({
          type: 'error', caption: 'Something went wrong. Couldn\'t approve this comment.'
        });
      }
    });
  }

};

var NewProfile = {
  showModal: function() {
    jQuery("#new_profile_migration_alert [data-dismiss=modal]").on('click', function() {
      jQuery.post('/profile/dismiss_new_profile_alert');
    });
    jQuery('#new_profile_migration_alert').modal('show');
  }
};

// From _bottom_includes
jQuery(function($) {
  if( window.NewProfileModalConfig && window.NewProfileModalConfig.show ) {
    NewProfile.showModal();
  }
});
/*1.0*/
var ImageButton = Class.create({
  initialize: function( button, buttonKey ){
    this.button = button;
    this.buttonKey = buttonKey;
    this.button.setAttribute( 'key', this.buttonKey );

    this.activeState = 'normal';
    if ( this.button.disabled ) { this.activeState = 'disabled'; }

    this.buttonStates = {
      normal: new Image(),
      hover: new Image(),
      disabled: new Image()
    };

    if( this.button.getAttribute('data-image-url') ) {
          this.buttonStates.normal.src = this.button.getAttribute('data-image-url');
    }
    else {
        this.buttonStates.normal.src = this.button.src.replace( '_hover', '' ).replace( '_disabled', '' );
    }

    if( this.button.getAttribute('data-image-hover-url') ) {
      this.buttonStates.hover.src = this.button.getAttribute('data-image-hover-url');
    }
    else {
      this.buttonStates.hover.src = this.buttonStates.normal.src.replace( /(-[a-z0-9]*)?\.gif/, '_hover.gif' );
    }

    if( this.button.getAttribute('data-image-disabled-url') ) {
              this.buttonStates.disabled.src = this.button.getAttribute('data-image-disabled-url');
    }
    else {
        this.buttonStates.disabled.src = this.buttonStates.normal.src.replace( /(-[a-z0-9]*)?\.gif/, '_disabled.gif' );
    }

    this.events = {
      mouseOver: this.mouseOver.bindAsEventListener( this ),
      mouseOut: this.mouseOut.bindAsEventListener( this )
    };
    this._addObservers();
  },
  setActiveState: function( state ){
    // set to default if an invalid state is passed in...
    if ( ![ 'normal', 'hover', 'disabled' ].include( state ) ) { state = 'normal'; }

    this.activeState = state;
    this.button.disabled = this.disabled();
    this.button.src = this.buttonStates[ this.activeState ].src;
  },

  mouseOver: function(){ this.setActiveState( 'hover' ); },
  mouseOut: function(){ this.setActiveState( 'normal' );disabled' ); },

  normal: function(){ return this.activeState == 'normal'; },
  hover: function(){ return this.activeState == 'hover'; },
  disabled: function(){ return this.activeState == 'disabled'; },

  isOrphaned: function(){ return this.button.isOrphaned(); },

  destroy: function(){
    this._removeObservers();
    this.button = null;
    this.buttonKey = null;
    this.activeState = null;
    this.buttonStates.normal = null;
    this.buttonStates.hover = null;
    this.buttonStates.disabled = null;
    this.events.mouseOver = null;
    this.events.mouseOut = null;
  },
  _addObservers: function(){
    this.button.observe( 'mouseover', this.events.mouseOver );
    this.button.observe( 'mouseout', this.events.mouseOut );
  },
  _reouseOut );
  }
});

var ButtonManager = {
  buttons:$H(),
  initialize: function(){
    var that = this;
    $$('input[type=image]').each( function( button ){
      that._attachButton( button );
    });

    document.observe('ajax:completed', this.ajaxOnComplete.bindAsEventListener(this));
  },

  ajaxOnComplete: function(){
    this._removeOrphaned();
    this._attachFreshButtons();
  },

  alterS(state); }
  },

  _removeOrphaned: function(){
    var that = this;
    this.buttons.each( function( pair ){
      if (pair.value.isOrphaned()){
        pair.value.destroy();
        that.buttons.unset(pair.key);
      }
    });
  },

  _attachFreshButtons: function(){
    var that = this;
    var buttons = $$('input[type=image]');
    if (buttons) {
      buttons.each( function( button ){
        if (!button.getAttribute('key')) { that._attachButton(button); }
      });
    }
  },

  _attachButton: function(button){
    if (button.src.indexOf('_active.gif') > -1) { return; }
    // attach a button to the collection, keyed by either the button ID or a random number
    var buttonKey = button.id ? button.id : ( Math.random() * 100 ).toString();
    this.buttons.set(buttonKey, new ImageButton( button, buttonKey ));
  }
};

Event.register(ButtonManager);
/*1.0*/
var Pivot, PivotManager;

Pivot = Class.create({
  initialize: function(activator, menu, options) {
    this.activator = activator;
    this.menu = menu;

    this.options = Object.extend({
      scrollingParent:false,
      onShowCallback: Prototype.emptyFunction,
      onHideCallback: Prototype.emptyFunction
    }, options || {});

    // the options are passed in as eval'd JSON, and therefore if a callback is provided then it will likely be a string instead of a function
    if (typeof this.options.onShowCallback != 'function') {
      this.options.onShowCallback = eval(this.options.onShowCallback);
    }

    if (typeof this.options.onHideCallback != 'function') {
      this.options.onHideCallback = eval(this.options.onHideCallback);
    }

    var that = this;
    // add hooks so that we can refer to the menu from the activator and vice-versa, as well as the pivot instance itself
    Object.extend(this.activator, {
      menu: function(){ return that.menu; },
      pivot: function(){ return that; }
    });
    Object.extend(this.menu, {
  t.activator; },
      pivot: function(){ return that; }
    });

    this.events = {
      mouseOver: this.mouseOver.bindAsEventListener(this),
      mouseOut:  this.mouseOut.bindAsEventListener(this),
      hasFocus:  this.hasFocus.bindAsEventListener(this),
      lostFocus: this.lostFocus.bindAsEventListener(this),
      menuMouseOver: this.menuMouseOver.bindAsEventListener(this),
      itemMouseOver: this.itemMouseOver.bindAsEventListener(this),
      itemMouseOut: this.itemMouseOut.bindAsEventListener(this)
    };
    this._addObservers();
  },
  mouseOver: function(e) {
    this.clearMenuTimeout();
    this.setActivatorTimeout();
  Timeout();
  },
  Timeout();
  },
  itemMouseOver: function(e) {
    this.clearMenuTimeout();
    var element = e.element();
  },
 ction(e) {
  },
  show: function() {
    this.clearActivatorTimeout();
    this.clearMenuTimeout();

    var dimensions = this.activator.getDimensions(), position;

    // if this pivot is in a scrolling parent, then it is imperative that we
    // use the viewportOffset in conjunction with the scrollOffset of the body element

    // this technique will also work fine for pivots NOT in scrolling parents, but
    // since it requires an additional offset lookup, it's more expensive so we shouldn't
    // do it unless it is mandatory
    if (this.options.scrollingParent){
      position = this.activator.viewportOffset();
      var bodyScroll = document.body.cumulativeScrollOffset();
      position.top = position.top + bodyScroll.top;
      position.left = position.left + bodyScroll.left;
    } else {
      position = this.activator.cumulativeOffset();
    }

    var menuLeft   = position.left + parseInt(this.activator.getStyle('padding-left'), 10);
    var menuTop    = position.top + dimensions.height;

    // if another pivot menu is active, hide it and show this one instead
    if (PivotManager.active && PivotManager.active !== this) {
      PivotManager.active.hide();
    }
    PivotManager.active = this;

    if (this.menu && !this.menu.hasClassName('moved_pivot')) {
      document.body.insertBefore(this.menu, $Prototype('container'));
      this.menu.addClassName('moved_pivot').setStyle({zIndex:500}).absolutize();
    }

    this.menu.setStyle({top: menuTop  + 'px', left: menuLeft + 'px'});

    this.menu.show();

    this.menu.observe('mouseover', this.events.hasFocus);
    this.menu.observe('mouseout',  this.events.lostFocus);

    if (this.options.onShowCallback) {
      this.options.onShowCallback(this);
    }
    document.fire("pivot:shown", this.menu);
  },

  hide: function() {
    if (!this.menu) { return; } // for cases when the pivot menu is no longer on the page due to an ajax process altering the page content
    this.menu.hide();
    this._destroyZIndexFix();

    this.clearActivatorTimeout();
    this.clearMenuTimeout();

    this.menu.stopObserving('mouseover', this.events.hasFocus);
    this.menu.stopObserving('mouseout',  this.events.lostFocus);

    if (this.options.onHideCallback) { this.options.onHideCallback(this); }
    document.fire("pivot:hidden", this.menu);
  },

  setActivatorTimeout: function () {
    var timeout  = this.activator.getAttribute('pivot_timeout') || 100;
    this.clearActivatorTimeout();
    this.activatorTimeout = window.setTimeout(this.show.bind(this), timeout);
  },

  clearActivatorTimeout: function() {
    if (this.activatorTimeout) { window.clearTimeout(this.activatorTimeout); }
    this.activatorTimeout = null;
  },

  s ), 250 );
  },

  clearMenuTimeout: function() {
    if (this.menuTimeout) { window.clearTimeout(this.menuTimeout); }
    this.menuTimeout = null;
  },

  hasFocus: function(e) {
    document.fire('pivot:hasFocus', this.activator.id);
    var element = e.element();
    if ( element.hasClassName( 'pivotable' ) || element.up( 'div.pivotable' ) ) { this.clearMenuTimeout(); }
  },
  lostFocus: function(e) {
    if (this.ignoreMouseOut) { return; }
    var element = e.element();
    if ( !element.hasClassName( 'pivotable' ) || !element.up( 'div.pivotable' ) ) { this.setMenuTimeout(); }
  },
  destroy: function(){
    // if the currently active menu is about to be destroyed, we need to clear/hide it first
    if (PivotManager.active && PivotManager.active == this) { PivotManager.clearActive(); }

    this._removeObservers();
    this.activator.menu = null;
    this.activator.pivot = null;
    this.menu.activator = null;
    this.menu.pivot = null;
    this.activator = null;

    if ( this.menu.parentNode ) { this.menu.parentNode.removeChild(this.menu); }
    this.menu = null;
  },rphaned();
  },
  _addObservers: function() {
    this.activator.observe('mouseover', this.events.mouseOver);
    this.activator.observe('mouseout',  this.events.mouseOut);

    this.menu.observe('mouseover', this.events.menuMouseOver);

    var that = this;
    this.menu.select('a').each( function(element) {
      element.observe('mouseover', that.events.itemMouseOver);
      element.observe('mouseout', that.events.itemMouseOut);
    });
  },
  _removeObservers: function(){
    this.activator.stopObserving('mouseover', this.events.mouseOver);
    this.activator.stopObserving('mouseout',  this.events.mouseOut);

    this.menu.stopObserving('mouseover', this.events.menuMouseOver);
    var that = this;
    this.menu.select('a').each( function(element) {
      element.stopObserving('mouseover', that.events.itemMouseOver);
      element.stopObserving('mouseout', that.events.itemMouseOut);
    });
  },
  _destroyZIndexFix: function(){
    if ( this.zIndexFix && this.zIndexFix.parentNode ){
      this.zIndexFix.parentNode.removeChild( this.zIndexFix );
      this.zIndexFix = null;
    }
  }
});

PivotManager = {
  active: null,
  initialize: function(){
    if (this.initialized) { return; }
    if (!this.pivots) { this.pivots = $H(); }
    this._addNew();

    this.listeners = {
      ajaxOnComplete:this.ajaxOnComplete.bindAsEventListener(this),
      clearActive:this.clearActive.bindAsEventListener(this)
    };

    document.observe('ajax:completed', this.listeners.ajaxOnComplete);

    // each instance of a pivot has a circular reference that MUST be cleaned up when pages are unloaded
    Event.observe(window, 'unload', this.pageUnload.bindAsEventListener(this));
    this.initialized = true;
  },
  ajaxOnComplete: function(){
    this._removeOrphaned();
    this._addNew();
  },
ve = null;
  },
  _removeOrphaned: function(){
    this.pivots.each( function( pair ){
      if ( pair.value.isOrphaned() ){
        pair.value.destroy();
        this.pivots.unset( pair.key );
      }
    }.bind( this ));
  },
  _addNew: function(){
    // pivot elements are usualy anchors, but can be spans as well, so with the selector we don't want to specify the tag name
    $$( '.pivot' ).each( function( pivot ){
      if ( !this.pivots.get( pivot.id ) ){
        var menu = $Prototype("menu_" + pivot.id);
        if ( menu ) {
          this.pivots.set( pivot.id, new Pivot( pivot, menu, (pivot.getAttribute('pivot_options') || '{}').evalJSON() ) );
        }
      }
    }.bind( this ));
  },
  pageUnload: function(){
    throy(); }
    });
  }
};
Event.register(PivotManager);
/*1.0*/
var RelatedSubjects = {
  params: "",
  init: function() {
    RelatedSubjects.params = "";
    if (narrow || taggingType) {
      RelatedSubjects.params += "?";
      if (narrow) {
        RelatedSubjects.params += "narrow=true";
      }
      if (taggingType) {
        RelatedSubjects.params += (narrow ? "&" : "")+"object_type="+taggingType;
      }
    }
    var sa = jQuery('#subject_autocomplete');

    jQuery(function()
    {
      jQuery(document).on('click', '#tagged-subjects .tag-remove', function (e)
      {
        var id = jQuery(this).data('id'),
                type = jQuery(this).data('type');

        RelatedSubjects.removeSubject(id, type);

        e.preventDefault();
      });
    });

    // only set up autocomplete if the element exists
    if(sa.length > 0) {
      if(removeText) {
  '');
        });
        sa.blur(function() {
          var input = jQuery('#subject_autocomplete');
          input.css('color', 'grey');
          input.val(narrow ? 'Add product or vendor...' : 'Add related product or vendor...');
          jQuery('#subject_autocomplete_loading').hide();
          jQuery('#subject_autocomplete_no_results').hide();
        });
      }

      sa.autocomplete({
        source: function(request, response) {
          var path;
          if(taggingAssetId !== 0)
            path = '/' + taggingAssetPath + '/' + taggingAssetId + '/subject_autocomplete' + RelatedSubjects.params;
          else
            path = '/' + taggingAssetPath + '/subject_autocomplete' + RelatedSubjects.params;
          jQuery.getJSON(
            path,
            { term: request.term },
            function(data) {
              if(data.length === 0) {
                jQuery('#subject_autocomplete_loading').hide();
                jQuery('#subject_autocomplete_no_results').css('display', 'block');
              }
              response(jQ { return i; }));
            }
          );
        },
        select: function(event, ui) {
          jQuery('#subject_autocomplete').val(ui.item.label);
          if (taggingProducts)
            RelatedSubjects.selectSubjectTag(event, ui);
          else
            jQuery('#subject_autocomplete_id').val(ui.item.id);
          return false;
        },
lse;
        },
        search: RelatedSubjects.setAutocompleteLoading,
        open:   RelatedSubjects.setAutocompleteLoaded,
        close:  RelatedSubjects.setAutocompleteLoaded,
        appendTo: inTable ? '.ui-front' : ''
      }).data('autocomplete')._renderItem = function(ul, item) {
        var li = jQuery('<li>');
        li.data('item.autocomplete', item);
        if(inTable)
          li.append('<a>' + _.escape(item.value) + '</a>');
        else
          // the function below takes in a string such as "ProductType" and yields "Product Type" and "Product" to yield "Product"
          var itemType = (function(type){
            type = jQuery.trim(type);
            var wordOne = type;
            var wordTwo = '';
            for(i=1;i<type.length;i++){
              if(type[i]==type[i].toUpperCase()){
              wordOne = type.slice(0,i);
              wordTwo = type.slice(i);
            }
          };
          return wordOne + " " + wordTwo;
          })(item.type);
          li.append('<a>' + _.escape(item.value) + '<br><span class="type">' + itemType + '</span></a>');
        return li.appendTo(ul);
      };
    }

    // Set up tooltips for related products and vendors
    jQuery('.related-product-text-container a:first').tooltip();
  },
  setAutoco').hide();
  },
  setAutocompleteLoaded: function() {
    jQuery('#subject_autocomplete_loading').hide();
  },
  selectSubjectTag: function(event, ui) {
    var id = ui.item.id;
    var type = ui.item.type;
    jQuery.ajax({
      type: 'POST',
      url: '/' + taggingAssetPath + '/' + taggingAssetId + '/tag_subject' + RelatedSubjects.params,
      data: { 'subject_id': id, 'type': type },
      success: function(data) {
        jQuery('#tagged-subjects').html(data.partial);
      }
    });
  },
  removeSubject: function(id, type) {
    jQuery('#tagged-' + type.toLowerCase() + '-' + id).slideUp(1000);
    jQuery.ajax({
      type: 'DELETE',
      url: '/' + taggingAssetPath + '/' + taggingAssetId + '/delete_subject_tag' + RelatedSubjects.params,
      data: { 'subject_id': id, 'type': type },
tial);
      }
    });
  }
};
setTimeout(function() {
  jQuery(function($) {
    if( $('script[data-init="RelatedSubjects"]').length ) {
      RelatedSubjects.init();
    }
  });
}, 2000);
/*1.0*/
var Follow = (function(){

  var popupFollow = function(el){
    var type = el.readAttribute('data-type'),
        id = el.readAttribute('data-id'),
        url = el.readAttribute('data-url'),
        memo = {type: type, id: id};

    el.up('.popup').addClassName('following').removeClassName('not_following');

    jQuery.get(url, { no_response: true });
    SPICEWORKS.fire("connection:followed", memo);
    SPICEWORKS.fire("popup:followed", memo);
  };

  var popupUnfollow = function(el){
    var type = el.readAttribute('data-type'),
        id = el.readAttribute('data-id'),
        url = el.readAttribute('data-url'),
        memo = {type: type, id: id};

    el.up('.popup').addClassName('not_following').removeClassName('following');

    jQuery.get(url, { no_response: true });
    SPICEWORKS.fire("connection:unfollowed", memo);
    SPICEWORKS.fire("popup:unfollowed", memo);
  };

  var followManager = {
    initialize: function(){
      Event.observe(document.body,'click',function(ev){
        var link = ev.findElement('a');
        var input = ev.findElement('input');
        var el = (link && link != document) ? link : input;
        if(!el || el == document) { return; }
        el = $Prototype(el);

        var is_follow = el.hasClassName('follow'),
            is_unfollow = el.hasClassName('unfollow');

        if(is_follow || is_unfollow){
          if(el.up('.suggestion')) { return; }
          if(is_follow){
            popupFollow(el);
          } else if(is_unfollow) {
            popupUnfollow(el);
          }
        }
      });
    }
  };

  Event.register(followManager);

  return {};
})();
/*1.0*/
var AccountSetupTimeout;
var AccountSetup = {
  checkBlank: function(event) {
    // JsLogger showed this was not in use, but could still be called by the welcome flow
    var field = jQuery("#display_name");
    if(field.val().blank()) {
      event.preventDefault();
      field.next("span.error").html("cannot be blank");
    }
  },
  delayedCheckName: function(element) {
    // JsLogger showed this was not in use, but could still be called by the welcome flow
    if(AccountSetupTimeout !== undefined){
      clearTimeout(AccountSetupTimeout);
    }
    AccountSetupTimeout = setTimeout(function(){AccountSetup.checkName(element);}, 300);
  },
pdate("");
  }
};
/*1.0*/
var ProductComments ={
  showForm: function(review_id, type, page, sort) {
    var postId = '#' + type + '_post_overlay';
    if(jQuery('#' + type + '_' + review_id).html() === '') {
      jQuery.get("/product_comments/" + review_id + "/show_" + type + "_form?page=" + page + '&sort=' + sort, function(result) {
        if(result.div_to_replace){
          jQuery(result.div_to_replace).html(result.partial);
          jQuery(postId).sui_modal('show');
          jQuery('#s2id_product_id').css("width", 'auto');
          ProductComments.initSelect2();
        } else {
          jQuery(postId).sui_modal('show');
        }
      });
    } else {
      jQuery(postId).sui_modal('show');
    }
  },
  initDeleteForm: function(id) {
    jQuery("#delete_form_" + id).on('ajax:success', function(event, data){
      if(data.redirect){
        window.location.href = data.redirect;
      } else if (data.div_to_replace && data.partial){
        jQuery(data.div_to_replace).html(data.partial);
      }
    });
  },
  confirmMove: function(id, other_id, product_id, message) {
    confirmation_check = false;
    if(message == 'confirm') {
      confirmation_check = confirm("Are you sure want to move this review?");
    } else if (message == 'overwrite') {
      confirmation_check = confirm("Are you sure want to move this review? This will overwrite an existing review by the user.");
    } else {
      confirmation_check = confirm("Are you sure want to move this review? This review will be deleted.");
    }

    if(confirmation_check) {
      jQuery.ajax({
        url: "/product_comments/move",
        data: JSON.stringify({ "product_id":  product_id, "id": id, "other_id": other_id}),
        type: "POST",
        dataType: "JSON",
        contentType: 'application/json',
        success: function(data) {
          window.location.href = data.location;
        }
      });
    }
  },
  initSelect2: function() {
    jQuery( "input#product_id" ).select2({
      placeholder: "Search for product",
      minimumInputLength: 2,
      allowClear: true,
      ajax: {
        url: "/api/products/product_autocomplete",
        dataType: "json",e"};
        },
        results: function(data) {
          jQul;
          });
          return {results: data};
        }
      }
    });
  }
};
var Review = null;
(function($) {
  Review     });
    },
    error: function(id, msg) {
      $('#' + id).html(msg).addClass('error');
    },
    init: function(options) {
      jQuery(function (){
        var box_id = options.box_id + '_content';
        jQuery('#' + box_id).elastic();

        window.has_rating = options.has_rating;
        window.has_error = false;
        //since we are using options.disabled to tell if the form has enough words, we can set the window variable here.
        window.has_enough_words = !options.disabled;

        var target_id = jQuery('.word_counter').data('target-id');
        var counter_id = jQuery('#'+target_id).data('counter-id');
        Review.validate();
        jQuery('#' + target_id).keyup(function () {
          var matches = jQuery(this).val().match(/\b/g);
          var len = (matches === null ? 0 : matches.length/2);
          var count = options.min_comment_length - len;
          var message = '';
          //reordered the else statements so that they execute in the correct order
          if(count == options.min_comment_length ) {
            message = options.min_comment_length + ' word minimum.';
          } else if(count == 1) {
            message = 'So close! 1 word left.';
          } else if(count > 0 && count <= 5) {
            message = "You're almost there! " + count + ' words left.';
          } else if(count > 0 && count <= 15) {
            message = "You're off to a great start! " + count + ' more words.';
          } else if(count <= -15) {
            message = window.has_rating ? 'This is gonna be a good one!' : "Don't forget your rating!";
          } else if(count > 0) {
            message = (count + ' words to go.');
          } else {
            message = window.has_rating ? 'Good to go!' : "Don't forget your rating!";
          }

          if(count > 0) {
            jQuery('#'+jQuery(this).data('counter-id')).removeClass('error');
            //remove the error checking because the server will do that if they find a way to submit.
            window.has_error = false;
            window.has_enough_words = false;
          } else {
            window.has_enough_words = true;
          }

          Review.validate();
          jQuery('#' + jQuery(this).data('counter-id')).html(message);
        });

        jQuery('#product_comment_form_save_button').click(function(evt){
          var $this = $(this);

          if($this.hasClass('disabled')) {
            return false;
          }

          //a work around to get the keyup to fire
          var keyup = jQuery.Event('keyup');
          jQuery('#'+target_id).trigger(keyup);

          if(!window.has_enough_words) {
            jQuery('#'+counter_id).addClass('error');
          }

          $this.addClass('disabled');
          return undefined;
        });
      });
    },
    validate: function() {
      if(!has_enough_words || !has_rating) {
        $('#product_comment_form_save_button').addClass('disabled');
      } else {
        $('#product_comment_form_save_button').removeClass('disabled');
      }
    },
    activate: function(id, _options, func) {
      if($('#' + id + '.editing').length > 0) {
        return;
      }

      $('#' + id + ' .opened').css('opacity', 0);
      $('#' + id + ' .opened').slideDown('fast', function() {
        var $id = $('#' + id);

        $(this).animate({opacity:'1'}, 250);
        $id.addClass('editing');
        $id.find('textarea').elastic();
        $id.find('textarea').focus();
      });

      $('#' + id + ' .closed').fadeOut();
      $('.review-tooltip').show();

      $(document).scrollTop($('#' + id).offset().top - 75);

      if(CurrentUser.guest()) {
        GoogleAnalytics.trackEvent('Join', 'Guest Started Review', _options.productName);
      }

      if(func !== undefined && jQuery.isFunction(func)) {
        func($('#' + id));
      }
    },
    deactivate: function(id, func) {
      $('#' + id + ' .opened').animate({opacity:'0'}, 100, function() {
        $(this).slideUp(250);
        $('#' + id).removeClass('editing');
        $('.review-tooltip').hide();
        $('#' + id + ' .closed').fadeIn();
      });

      if(func !== undefined && $.isFunction(func)) {
        func('#' + id);
      }
    },
    populateGuestState: function(review_form) {
      var prod_id = jQuery(review_form).find('input[name="product_comment[products_id]"]').val();

      if (prod_id === '') {
        prod_id = jQuery(review_form).find('input[name="product_comment[catalog_product_id]"]').val();
      }

      Join.guestState({
        text: escape(jQuery(review_form).find('textarea[name="product_comment[content]"]').val()),
        product_id: prod_id,
        from_contest: jQuery(review_form).find('input[name="product_comment[from_contest]"]').val(),
        content_type: 'ProductReview',
      });
    },
    setupGuestState: function(review_form, productName) {
      var rating = Join.guestState().rating;

      if(rating !== null && rating !== undefined) {
        this.populateGuestState(review_form);
        jQuery('#' + jQuery(review_form).find('input[name="product_comment[products_id]"]').val() + '_Product_counter').removeClass('error');
        jQuery('#product_comment_status').hide();

        JoinAndLogin.trackAndShowForm('join', { label: 'Review Form Submit' }, { message: 'Sign up for free to publish your review!' });
      } else {
        // here we find the form id and use that to find the word counter to set its text and color
        jQuery('#' + jQuery(review_form).find('input[name="product_comment[products_id]"]').val() + '_Product_counter').html("Don't forget your rating!");
        jQuery('#' + jQuery(review_form).find('input[name="product_comment[products_id]"]').val() + '_Product_counter').addClass('error');
      }

      return false;
    }
  };
})(jQuery);

SPICE.PremiumBannerTable = function(bannerTable) {

  this.table = bannerTable;
  this.tableRows = this.table.find('tbody tr');

  //Initialize the module
  this.initialize();

}

SPICE.PremiumBannerTable.prototype = {

  initialize: function() {

    //Set first row to active
    this.tableRows.eq(0).addClass('active');

    //When the slideshow changes
    jQuery(document).on("change.slideshow", jQuery.proxy(function(e, index){

      this.tableRows.removeClass('active');
      this.tableRows.eq(index).addClass('active');

    },this));

    //When the row is clicked
    var that = this;
    this.tableRows.on("click", function(e){

      jQuery(document).trigger("banner-table-update.slideshow", [jQuery(this).index()]);

    });

  }
}

jQuery( function($) {
  var bannerTable = jQuery('.banner-table');
  bannerTable.length > 0 ? new SPICE.PremiumBannerTable(bannerTable) : null ;
});

var Guide = {
  loadDialog: function(selector, modal_id, title, url, dfp_options){
    var dialog;
    // if we plan to use a modal, the layout should already be there
    jQuery.get(url, {no_layout : true})
          .done( function(res) {
            dialog =  '<div id="' + modal_id + '" data-keyboard="true"' +
                        'data-isdraggable="false" data-backdrop="true" class="modal hide in sui-opt-in">'+
                        '<div class="modal-header">' +
                          '<button data-dismiss="modal" class="close">×</button>' +
                          '<h3>'+ title +'</h3>' +
                        '</div>' +
                        '<div class="modal-body" id="guide_body">' + res +
                        '</div>' +
                      '</div>';
            jQuery(selector).html(dialog);
            jQuery('#'+modal_id).on('shown', function(e){
              if (e.target === this) {
                jQuery('#guide_body .nav-tabs li:eq(0) a').tab('show');
              }

              if(dfp_options){
                jQuery('#'+modal_id).css('top',  dfp_options.top);
              }

            });

            // Options given by the EMSG Guide
            if(dfp_options){

              if(!!dfp_options.show){
                jQuery('#'+modal_id).sui_modal('show');
              }

              if(dfp_options.close_callback && typeof dfp_options.close_callback === "function"){
                jQuery('#'+modal_id).on('hidden', dfp_options.close_callback);
              }

            }

          });
  },
};

(function(){
  va).toFixed(2));};
  var isOem = function(variant) { return variantue == "OEM"); }).length > 0; };
  var withHeader = function(header, content) {
    var t = new Element('div');
    if (content) {
      t.insert(new Element('h3').update(header));
      t.insert(content);
    }
    return t.innerHTML;
  };
  var readAttr = function(product, attr) {
    var match = product.prreturn true; }});

    if (match) { return match.value; }
    else { return ""; }
  };
})();
/*1.0*/
var Advisor = {
  show: function(title, width, height, url,_from) {
    $Prototype('advisor_overlay').setStyle({'width':(width + 'px')});
    $Prototype('advisor_overlay').setStyle({'background':('#666')});
    $Prototype('advisor_overlay').down('.advisor-title').update(title);

    if (url.match(/^\/app\/frames\/advisor\/(printing|care_pack)/)) {
      jQuery('#advisor_overlay').addClass('blue');
    } else {
      jQuery('#advisor_overlay').removeClass('blue');
    }
    var from = _from ? "ViewedFrom"+_from : "ViewedForm";

    var iframe_code = '<iframe src="' + url + '" width="' + width + '" height="' + height + '" frameborder="0"></iframe>';
    $Prototype('advisor_overlay').down('div.content_container').update(iframe_code);
    Flyover.show('advisor_overlay');
  }
};
/*1.0*/
var ShareLink = (function(){
  var init = function(){
    jQuery('#post_url').on('change', checkURL);
    jQuery('#post_subject').on('keyup', checkSubjectLength);
    jQuery('#share_link_form').submit(checkForm);
    checkSubjectLength({target: function(){ return jQuery('#post_subject'); }});
  };

  var initForPopup = function() {
    if(jQuery('#post_subject') && jQuery('#post_subject').up('.link_input_wrapper')) {
      jQuery('#post_subject').on('keyup', checkSubjectLength);
      checkSubjectst_subject'); }});
    }
  };

  var checkURL = function(ev) {
    var input = jQuery('#post_url');
    validateURL(input.val());

    setLoading(true);

    jQuery.getJSON('/info/check_link', { url: input.val() })
    .done(function(response) {
      var link_status_el = jQuery('#link_status');
      if(response.exists){
        link_status_el.html(response.message);
        if(!link_status_el.is(':visible')){
          link_status_el.slideDown();
          jQuery('#text_next_step').addClass('disabled')
        }
      } else {
        if(response.title && response.title !== ""){
          jQuery("#post_subject").val(response.title);
        }
        if(link_status_el.is(':visible')){
          link_status_el.slideUp();
          jQuery('#text_next_step').removeClass('disabled')
        }
      }
      input.removeClass('error');
      setLinkExists(response.exists);
      setLoading(false);
    });
  };

  var checkSubjectLength = function(ev){
    var el = ev.target;
    if(!el.value){ return; }
    jQuery(el).closest('.link_input_wrapper').find('.character_counter').html(80 - el.value.length);
  };

  var validateURL = function(value){
    var checkUnique = jQuery("#link_exists"),
        unique = !checkUnique ? true : checkUnique.val() == 'false';
    return value !== "" && value != "http://" && unique;
  };

  var checkForm = function(){
    var input = jQuery('#post_url'),
        valid = validateURL(input.val());
    input[valid ? 'removeClass' : 'addClass']('error');
    return valid;
  };

  var val(value);
  };

  var setLoading = function(loading){
    jQuery("#checking_link_busy")[loading ? 'show' : 'hide']();
  };

  return {
    init: init,
    initForPopup: initForPopup,
    setLinkExists: setLinkExists,
    checkForm: checkForm,
    validateURL: validateURL
  };

})();
/*1.0*/
var Sidebar = {
  requestForSidebarContent: function(url, params) {
    var self = this;
    jQuery.ajax({
      url: url,
      data: params,
      dataType: 'json'
    })
    .done(function(data) {
      jQuery('#sidebar_content_box').replaceWith(data.partial);
      self.callSidebarLinkHelpers(params.app_url, params.redirect_via_app_url);
    });
  },
  callSidebarLinkHelpers: function(app_url, redirect_via_app_url) {
    if(app_url) {
      SidebarContentUrls.setAppUrl(params.app_url);
      SidebarContentUrls.fixLinks();
      if(redirect_via_app_url) {
        SidebarContentUrls.fixAppRedirects()
      }
    }
  }
};

jQuery(function($) {
  var ajaxConfig = $('[data-sidebar-config="ajax"]').text();
  if( ajaxConfig ) {
    ajaxConfig = JSON.parse(ajaxConfig);
    Sidebar.requestForSidebarContent( ajaxConfig.url, ajaxConfig.params );
  }
});
/*1.0*/
var VendorGuide = {
  ui: {},
  changeTab : function (vendorName, index) {
    // zero indexed
    this.ui[vendorName][index].tab('show');
  },
  hiddenSubtab : function (vendorName, tab, subtab) {
    jQuery('#' + tab + ' .hidden-subtab').hide();
    jQuery('#' + tab + ' .hidden-subtab#' + subtab).show();
    if(typeof GoolgleAnalytics !== 'undefined' && typeof GoolgleAnalytics.trackEvent === 'function'){
      GoolgleAnalytics.trackEvent('AdvisorBranding', vendorName + '=>' + tab + '/' + subtab, 'Spiceworks');
    } else if (window._gaq){
      _gaq.push(['_trackEvent', 'AdvisorBranding', vendorName + '=>' + tab + '/' + subtab, 'Spiceworks']);
    }
  },
  initialize: function (vendorName, selector) {
    var $tab,  i = 1;
    selector = selector || ('#' + vendorName);
    $tab = jQuery(selector + ' .nav-tabs li:first-child a');

    // store the jQuery objects corresponding to each tab
    this.ui[vendorName] = [];
    while ($tab.length) {
      this.ui[vendorName][i - 1] = $tab;
      $tab = jQuery(selector + ' .nav-tabs li:eq(' + (i++) + ') a');
    }

    // add selector on show to reset to first tab
    jQuery(selector).closest(".modal").on('show', function(e){
      if(this == e.target){
        VendorGuide.changeTab(vendorName, 0);
      }
    });

    // add listener to the link click for resetting subtabs.
    jQuery(selector + ' .nav li a').click(function () {
      var tabId, subtabs, subtabId, $this = jQuery(this);

      if ($this.parent().hasClass('active')) {
        tabId = jQuery(jQuery(this).attr('data-target') + ' > div').attr('id');
        subtabs = jQuery('#' + tabId + ' .hidden-subtab');

        if (subtabs.length) {
          subtabId = subtabs.first().attr('id');
          subtabs.hide().first().show();
          if(typeof GoolgleAnalytics !== 'undefined' && typeof GoolgleAnalytics.trackEvent === 'function'){
            GoolgleAnalytics.trackEvent('AdvisorBranding', vendorName + '=>' + tabId + '/' + subtabId, 'Spiceworks');
          } else if (window._gaq){
            _gaq.push(['_trackEvent', 'AdvisorBranding', vendorName + '=>' + tabId + '/' + subtabId, 'Spiceworks']);
          }
        }
      }
    });
    // add listener to the tabs for GA and resetting subtabs.
    jQuery(selector + ' .nav li a').on('shown', function () {
      var tabId = jQuery(jQuery(this).attr('data-target') + ' > div').attr('id'),
        subtabs = jQuery('#' + tabId + ' .hidden-subtab'),
        subtabId = subtabs.length ? subtabs.first().attr('id') : tabId;

      subtabs.hide().first().show();

      if(typeof GoolgleAnalytics !== 'undefined' && typeof GoolgleAnalytics.trackEvent === 'function'){
        GoolgleAnalytics.trackEvent('AdvisorBranding', vendorName + '=>' + tabId + '/' + subtabId, 'Spiceworks');
      } else if (window._gaq){
        _gaq.push(['_trackEvent', 'AdvisorBranding', vendorName + '=>' + tabId + '/' + subtabId, 'Spiceworks']);
      }
    });
  }
};
/*1.0*/
var Rater = Class.create({
  initialize: function(element, options){
    this.options = Object.extend({ rated: false }, options || {});

    this.rater = $Prototype(element);
    this.stars = this.rater.select('a.star');

    this.stars.invoke('observe', 'mouseover', this.starMouseOver.bindAsEventListener(this));
    this.stars.invoke('observe', 'mouseout', this.starMouseOut.bindAsEventListener(this));
  },
  starMouseOver: function(event){
    var hovered_star = Event.element(event);
    this.rater.addClassName('hover_at_' + hovered_star.getAttribute('rating'));
  },
  starMouseOut: function(event){
    var hovered_star = Event.element(event);
    this.rater.removeClassName('hover_at_' + hovered_star.getAttribute('rating'));
  }
});

jQuery.widget( 'spiceworks.starRater', {
  _create: function() {
    var self = this;

    this.element.find(Query(this)); } );
    this.element.find('.star').mouseover( jQuery.proxy( this._highlightStar, this ) );
    this.element.find('.star').mouseout( jQuery.proxy( this._unhighlightStar, this ) );
  },

  _starClicked: function(star) {
    this.element.trigger('starclicked');
    this._postRating(star);
  },

  _postRating: function(star) {
     this.element.find('.star').removeClass('hover');
     this.element.find('.star').removeClass('active_hovering');

     star.prevAll().addClass('active');
     star.addClass("active");

     var rating = star.data('rating');
     var ratableId = this.options.rated_object_id || this.options.ratable_id;

     if( CurrentUser.guest() ) {
       // This functionality relies on Review.setupGuestState to fill in the product_id and to show the join overlay.
       Join.guestState({ 'rating': rating, 'content_type': (this.options.ratable_class ? 'MspReview' : 'ProductReview') });

       //set the global has_rating to true
       window.has_rating = true;
       Review.validate();
       //From here we need to update the text below in case they have enough words.
       // We cannot get the word count without a lot of coupling so we just display "Rating Saved"
       jQuery('#interaction_box_counter').removeClass('error').html("Rating Saved!");
     }
     else {
       if( this.options.post_url && ratableId !== null && ratableId !== undefined) {
         var postData = {"rating":rating};
         if (this.options.ratable_class !== undefined) {
            postData.ratable_class = this.options.ratable_class;
            postData.ratable_id = this.options.ratable_id;
         }
         else {
            postData.id = this.options.rated_object_id;
         }
         jQuery.post( this.options.post_url, postData );
       }
     }
  },

  _highlightStar: function(event) {
    var star = jQuery( event.target );
    this.element.find('.active').addClass('active_hovering').removeClass('active');
    star.prevAll().addClass('hover');
    star.addClass("hover");
  },

  _unhighlightStar: function(event) {
    var star = jQuery( event.target );
    this.element.find('.active_hovering').addClass('active').removeClass('active_hovering');
    this.element.find('.star').removeClass('hover');
  }
});
/*1.0*/
var PrivateMessageForm = {
  resetToFieldStyles:function(event) {
    switch(event.keyCode) {
     case Event.KEY_TAB:
     case Event.KEY_RETURN:
     case Event.KEY_ESC:
     case Event.KEY_LEFT:
     case Event.KEY_RIGHT:
     case Event.KEY_UP:
     case Event.KEY_DOWN:
       return;
     default:
       break;
    }
    $Prototype('topic_to_name').setStyle({
      color:'#000',
      fontWeight:'normal'
    });
  }
};

var PrivateMessageTopic = {
  reply:function(){
    jQuery('html, body').stop().animate({ scrollTop: jQuery("#topic-reply").offset().top - 50 }, 50);
    jQuery("#topic-reply #message_text").focus();
  },
  initElastic: function() {
    jQuery('#message_text').elastic();
  }
};

var RecordEvent = {
  showPMForm: function(){
    if(jQuery('#record_event').is(":checked")){
      jQuery('#pm_record').show();
    }
    else {
      jQuery('#pm_record').hide();
    }

    jQuery('#new_message_modal').sui_modal('position');
  }
};
/*1.0*/
RichTextEditor = {
  originalContent: '',

  replaceTextarea: function(id, options) {
    var elem = jQuery('#' + id),
        config = {
          stylesheets: [options.stylesheet],
          toolbar: id + '-wysihtml5-toolbar',
          parserRules: wysihtml5ParserRules,
          pasteParserRulesets: wysihtml5ParserPasteRulesets,
          maxImages: options.maxImages,
          imageModel: options.imageModel,
          quotable: options.quotable,
          formId: options.formId,
          useLineBreaks: false
        };

    this.originalContent = elem.val();

    var editor = elem.wysihtml(config);
    if (editor === null){
      return;
    }

    // Adjust editor width to match the rest of the form
    elem.css('box-sizing', 'border-box');

    if(options.focus) {
      RichTextEditor.focus(id);
    }
  },

  insertAtCursor: function(id, text) {
    var editor = jQuery('#' + id).data('wysihtml5').editor;
    editor.composer.commands.exec('insertHTML', text);
  },

  reset: function(id){
    var editor = jQuery('#' + id).data('wysihtml5').editor;
    editor.clear();
  },

  isDirty: function(id){
    var $textArea = jQuery('#' + id);

    if ($textArea.data('wysihtml5') && window.Draft) {
      return $textArea.data('wysihtml5').editor.getValue() != Draft.latestValue;
    } else {
      return $textArea.val() != this.originalContent;
    }
  },

  resetDirty: function(id){
    if ( window.Draft ) {
      Draft.latestValue = jQuery('#' + id).data('wysihtml5').editor.getValue();
    } else {
      this.originalContent = jQuery('#' + id).val();
    }
  },

  focus: function(id){
    var editorEl = jQuery('#' + id);
    var editorData = jQuery('#' + id).data('wysihtml5')

    if( !editorData || !editorData.editor ) {
      return;
    }

    editorData.editor.currentView.element.focus();

    $('.wysihtml5-sandbox').contents().find('body').one('keydown', function(event) {
      if(CurrentUser.guest()) {
        var date = new Date();
        date.setFullYear( date.getFullYear() + 10 );
        Cookie.set('began_reply', true, { expires: date });
      }
    });
  },

  destroy: function(id){
    var editor = jQuery('#' + id).data('wysihtml5').editor;

    if(!editor) {
      return;
    }

    editor.destroy();
    jQuery('#' + id + '-wysiwyg-modals').remove();
  }
};
/*1.0*/
/*
 * Word counter for use with text boxes
 * Options:
 *  - container: the container to display the word count in
 *  - submit: (optional) button to enable/disable
 *  - words: the target number of words
 */

!function($) {
  "use strict";

  var WordCounter = function(element, options) {
    var field = $(element);
    var container = $(options.container);
    var submit = $(options.submit);

    // prime the field by display the number of words needed
    var initial = options.words + ' word minimum.';
    container.text(initial);
    field.on('keyup.wordCounter keydown.wordCounter', function(event) {
      var text = $(field).val();
      var wordcount = text.split(/\w+/).length;
      var delta = options.words - wordcount + 1;
      if(delta === options.words) {
        // reset the initial text since the field is empty
        container.text(initial);
        submit.attr('disabled', 'disabled');
      } else if(delta <= 0) {
        // the user has entered enough words, stop bothering them
        container.text('');
        submit.removeAttr('disabled');
      } else {
        // display the remaining word count, disable the submit button
        submit.attr('disabled', 'disabled');
        container.text(delta + ' words to go.');
      }
    });
  };

  $.fn.wordCounter = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data('wordCounter'),
        options = typeof option === 'object' && option;
      if(!data) $this.data('wordCounter', (data = new WordCounter(this, options)));
    });
  };
}(window.jQuery);

/*
 * Determine if an element is overflowing
 * returns a really cool boolean: true = overflowing false = !overflowing
 */
jQuery.fn.isOverflown = function() {
  var e = this[0];
  return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
}
;
/*1.0*/
// can we get rid of all of this??? Almost...

var SharePlugin = {
  acceptTerms:function(){
    var accept = !!jQuery('#accept_terms').val()

    jQuery.post('/plugin/accept_terms', { accept: accept }).done(function() {
      if(accept){
        Form.Element.enable('share_button');
      } else {
        Form.Element.disable('share_button');
      }
    });
  }
};
/*1.0*/
var HelpCategory;

var HelpNavigation = {
  toggleNavi:function() {
    navi = $Prototype('help_navigation');
    button = $Prototype('help_navigation_drop');
    if(!navi.visible()) {
      Cookie.set('help_navigation', 'open', {});
      button.addClassName('selected');
      new Effect.BlindDown(navi, {duration:0.25});
    }
    else {
      Cookie.set('help_navigation', 'close', {});
      button.removeClassName('selected');
      new Effect.BlindUp(navi, {duration:0.25});
    }
  }
};

var HelpColumn = Class.create({
  initialize:function(items, parent_column) {
    this.child = null;
    this.parent_column = parent_column;
    this.column = new Element('div', {'class': 'category_column'});
    this.items = items;
  },
  draw:function() {
    var list = new Element('ul');
    $Prototype('help_category_wrapper').insert(this.column.insert(list));
    this.drawItems(this.items);
  },
  drawDefault:function() {
    this.column.addClassName('default_message');
    this.column.insert('<span class="message">Select A Category</span>');
    $Prototype('help_category_wrapper').insert(this.column);
  },
  kill:function() {
    if(this.child) {
      this.child.kill();
    }
    this.column.replace("");
    this.child = null;
    this.parent_column = null;
  },
  setChild:function(child_column) {
    if(this.child) {
      this.child.kill();
    }
    this.child = child_column;
  },
  selectItem:function(item) {
    this.column.selected');
    });
    item.addClassName("selected");
  },
  drawItems:function(list_items) {
    var that = this;
    var list = this.column.down('ul');
    if(!this.parent_column) {
      list.addClassName('root_categories');
    }
    list_items.each(function(item) {
      var list_item = new Element('li', {id:'node_' + item.id});
      var link_tag;

      if(item.url || item.page_id) {
        list_item.addClassName("page");
        var path = "";
        if(item.url) {
          path = item.url;
        }
        else if(item.page_id && item.page) {
          path = escape("/help/" + item.page.name);
        }
        if(item.anchor) {
          path += "#" + item.anchor;
        }
        link_tag = new Element('a', {href: path}).update(item.name.escapeHTML());
      }
      else {
        if(!this.parent_column) {
          list_item.addClassName(item.name.toLowerCase().replace(/\s/g, "_"));
        }
        link_tag = new Element('a').update(item.name.escapeHTML());
        link_tag.observe('click', that.observeItem.curry(list_item, item).bindAsEventListener(that));
      }
      list_item.insert(link_tag);
      list.insert(list_item);
    });
  },
  observeItem:function(list_item, item) {
    this.selectItem(list_item);
    HelpCategory.initialize('/help_category/show/' + item.id + '.json', this);
  }
});

HelpCategory = {
  initialize:function(url, parent_column) {
    new Ajax.Request(url, {
      method:"get",
      onSuccess:function(transport) {
        var roots = transport.responseJSON;
        if(roots && roots.size() > 0) {
          var column = new HelpColumn(roots, parent_column);
          if(parent_column) {
            parent_column.setChild(column);
          }
          column.draw();
          if(!parent_column) {
            var default_column = new HelpColumn(null, column);
            column.setChild(default_column);
            default_column.drawDefault();
            var cookie = Cookie.get('help_navigation');
            if($Prototype('help_navigation_drop')) {
              if(!(cookie && cookie == 'close')) {
                $Prototype('help_navigation').show();
                $Prototype('help_navigation_drop').addClassName('selected');
              }
              $Prototype('help_navigation_drop').show();
            }
            else {
              $Prototype('help_navigation').show();
            }
          }
        }
        else if(parent_column && parent_column.child) {
          parent_column.setChild(null);
        }
      }
    });
  },
  initializeFromNode:function(url) {
    var current_column = null;
    new Ajax.Request(url, {
      method:"get",
      onSuccess:function(transport) {
        var node = transport.responseJSON;
        var parent_column = null;
        if(node) {
          if(node.parent_node) {
            parent_column = HelpCategory.initializeFromNode('/help_category/siblings/' + node.parent_node.id + '.json');
            current_column = new HelpColumn(node.siblings, parent_column);
            current_column.draw();
            $Prototype('node_' + node.self_node.id).addClassName('selected');
            parent_column.setChild(current_column);
          }
          else {
            current_column = new HelpColumn(node.siblings, null);
            current_column.draw();
            $Prototype('node_' + node.self_node.id).addClassName('selected');
            var cookie = Cookie.get('help_navigation');
            if($Prototype('help_navigation_drop')) {
              if(!(cookie && cookie == 'close')) {
                $Prototype('help_navigation').show();
                $Prototype('help_navigation_drop').addClassName('selected');
              }
              $Prototype('help_navigation_drop').show();
            }
            else {
              $Prototype('help_navigation').show();
            }
          }
        }
      },
      asynchronous: false
    });
    return current_column;
  },
  initializeFromPage:function(page_id) {
    var anchor = unescape(self.document.location.hash.substring(1));
    new Ajax.Request('/help_category/node_for_page/' + page_id + ".json?anchor=" + anchor, {
      method:"get",
      onSuccess:function(transport) {
        var node = transport.responseJSON;
        if(node) {
          HelpCategory.initializeFromNode('/help_category/siblings/' + node.id + '.json');
        }
        else {
          HelpCategory.initialize('/help_category/root.json', null);
        }
      }
    });
  }
};
/*1.0*/
var Carousel;
Carousel = Class.create({
  initialize: function(dom_id, num_per_page, width) {
    this.currentPage = 0;
    this.container = $Prototype(dom_id);
    this.children = this.container.select("li");
    this.lastPage = Math.ceil(this.children.length/num_per_page) - 1;
    this.drawButtons(dom_id);
    this.updateButtons();
    this.width = width;
  },
  drawButtons: function(dom_id) {
    var that = this;
    if(this.currentPage != this.lastPage) {
      this.nextButton = new Element('a', {'id': dom_id + '_next', 'class': 'next_link'});
      this.nextButton.update('<img alt="Next" src="https://community.spiceworksstatic.com/assets/controls/light_orange_right-90b7a75c9a39d4a453485d346a8f84fd37e59f10a5474cd18f6052f95952417c.png" />');
      this.nextButton.observe("click", that.nextPage.bindAsEventListener(that));
      this.container.up('div.carousel_wrapper').insert(this.nextButton, {position:'after'});
      this.prevButton = new Element('a', {'id': dom_id + '_previous', 'class':'previous_link'});
      this.prevButton.update('<img alt="Previous" src="https://community.spiceworksstatic.com/assets/controls/light_orange_left-edc11e25e8553ccb5b557e48cf6c7e3158eee24b5f73422484efe192d2dbed11.png" />');
      this.prevButton.observe("click", that.prevPage.bindAsEventListener(that));
      this.container.up('div.carousel_wrapper').insert(this.prevButton, {position:'after'});
    }
  },
  updateButtons: function() {
    if(this.nextButton) {
      if(this.currentPage < this.lastPage) {
        this.nextButton.show();
      }
      else {
        this.nextButton.hide();
      }
    }
    if(this.prevButton) {
      if(this.currentPage > 0) {
        this.prevButton.show();
      }
      else {
        this.prevButton.hide();
      }
    }
  },
  scrollTo:function(page) {
    var newLeft = this.width * page;
    new Effect.Morph(this.container, {
      style:{left: -newLeft + 'px'},
      duration: 0.5
    });
    this.currentPage = page;
    this.updateButtons();
  },
  nextPage:function() {
    if(this.currentPage < this.lastPage) {
      this.scrollTo(this.currentPage + 1);
    }
  },
  prevPage:function() {
    if(this.currentPage > 0) {
      this.scrollTo(this.currentPage - 1);
    }
  }
});

/* Slideshow with paging
   wrapper_id = id of the containing element
   item_width = width of each item in the slideshow
   random = true if you want to start on a random slide
   Slideshow automatically plays until a page is clicked, then the timer stops.
   Use class="slideshow-container" for the outermost container.
   Use class="slideshow-item" for each item.
   Use class="slideshow-item-wrapper" for the item wrapper.
*/
var PagedSlideshow = Class.create({
  initialize: function(wrapper_id, default_item_width, random) {
    var that = this;
    this.wrapper = jQuery("#" + wrapper_id);

    this.current_index = 0;

    this.max_index = this.wrapper.find(".slideshow-item").length;
    this.item_wrapper = this.wrapper.find(".slideshow-item-wrapper").first();

    this.default_item_width = default_item_width;
    this.original_item_height = parseInt(this.item_wrapper.find('.slideshow-item').first().css('height'), 10);
    this.resize(this);

    if(random) {
      this.current_index = Math.floor(Math.random()*this.max_index);
      this.item_wrapper.css("left", -(this.current_index * this.item_width));
    }

    this.timer = setInterval(function() {that.nextItem();}, 10000);

    jQuery(window).bind( 'orientationchange', function() { that.resize(that); } );
    jQuery(document).bind( 'banner-table-update.slideshow', function(e, index)
    {
      clearInterval( that.timer );
      that.switchTo(index);
    });

    this.wrapper.bind( 'swipeleft', function()  {
      clearInterval( that.timer );
      if( (that.current_index + 1) < that.max_index ) {
        that.nextItem();
      }
    });
    this.wrapper.bind( 'swiperight', function() {
      clearInterval( that.timer );
      if( that.current_index > 0 ) {
        that.previousItem();
      }
    });
  },
  resize: function(that) {
    that.item_width = that.wrapper.outerWidth();

    that.item_wrapper.css("width", (that.max_index * that.item_width));

    var newHeight = null;
    that.item_wrapper.find('.slideshow-item').each( function(index,item) {
      item = jQuery(item);

      item.css('width', that.item_width + 'px');

      if( that.item_width != that.default_item_width ) {
        if( !newHeight ) {
          newHeight = (that.item_width / that.default_item_width) * that.original_item_height;
        }
        item.css('height', newHeight + 'px' );
      }
    });

    if( newHeight ) {
      that.item_wrapper.css('height', newHeight + 'px' );
      // Make sure to get the wrapper on the item wrapper if there is one
      that.wrapper.find('> *').css('height', newHeight + 'px' );
      that.item_wrapper.find('.slideshow-item').css('height', newHeight + 'px' );
    }

    this.removePager();
    this.buildPager(this.wrapper);
    this.switchTo(0, false); // Jump to the beginning on a resize to prevent artifacts
  },).remove();
  },
  buildPager: function(wrapper) {
    // only build the pager if there's more than one
    if(this.max_index > 1) {
      var code = '<div class="slideshow-pager"><ul style="width:' + (this.max_index*18)  + 'px;">';
      for(var i = 0; i < this.max_index; ++i) {
        code += '<li data-page="' + i + '"><a href="#">' + i + '</a></li>';
      }
      code += "</ul></div>";
      wrapper.append(code);

      this.pages = wrapper.find(".slideshow-pager li");
      var that = this;
      this.pages.each(function(i, e) {
        e = jQuery(e);
        var page = parseInt(e.attr("data-page"), 10);
        if(page == that.current_index) {
          e.addClass("selected");
        }
        e.(page, true); });
      });
    }
  },
  switchTo: function(new_page, clearTimer) {
    // stop timer
    if(clearTimer) {
      clearTimeout(this.timer);
    }

    if(new_page != this.current_index) {
      // switch to the right page
      this.pages.each(function(i, e) {
        e = jQuery(e);
        var page = parseInt(e.attr("data-page"), 10);
        if(page == new_page) {
          e.addClass("selected");
        }
        else {
          e.removeClass("selected");
        }
      });
      this.current_index = new_page;

      // animation
      var that = this;
      if( Modernizr.touch ) {
        this.item_wrapper.animate({
          left: -(that.current_index * that.item_width)
        }, 250);
      }
      else {
        this.item_wrapper.fadeOut(500, function() {
          that.item_wrapper.
            css("left", -(that.current_index * that.item_width)).
            fadeIn(500).
            find('.slideshow-item').eq(that.current_index).trigger("selected.PagedSlideshow");
        });
      }
    }

    jQuery(document).trigger("change.slideshow", [this.current_index]);

  },
  nextItem: function() {
    var new_index = (this.current_index + 1) % this.max_index;
    this.switchTo(new_index, false);
  },
  previousItem: function() {
    var new_index = (this.current_index - 1) % this.max_index;
    this.switchTo(new_index, false);
  }
});
/*1.0*/
!(function ($) {

  var ShowAll = function(container) {
    this.showAllInit(container);
  };

  ShowAll.prototype = {

    constructor: ShowAll,

 alText();
    },

    setUpInitialText: function() {
      var elements = this.$container.data('show-all');
      var maxDisplayedElements = this.$container.data('show-all-max');
      var separator = this.$container.data('show-all-separator');
      if (elements.length > maxDisplayedElements) {
        var shortMessage = elements.slice(0, maxDisplayedElements).join(separator) + separator + this.buildShowMoreLink(elements.length);
        this.$container.html(shortMessage);
        var _this = this;
        this.$container.find('[data-show-all-action]').click(function (e) {
          e.stopPropagation();
          _this.$container.html(elements.join(separator));
        }) 
      } else {
        this.$container.html(elements.join(separator));
      }
    },

    bui+ '</a>';
    },
  };

  $.fn.showAll = function() {
    r$(this));
    })
  }

})(jQuery);
/*1.0*/

!(function ($) {

  var idCounter = 1;
  var currentlyOpenPopover = null;
  var POPOVER_BOTTOM = '<div class="is-shown sui-popover_content sui-popover_content--bottom sui-popover_content--align-left"><div class="sui-popover_content-body"></div></div>';
  var POPOVER_TOP = '<div class="is-shown sui-popover_content sui-popover_content--top sui-popover_content--align-left"><div class="sui-popover_content-body"></div></div>';

  $(document).on('click', function(event) {
    if( currentlyOpenPopover ) {
      if( currentlyOpenPopover.isEventOutsidePopover(event) ) {
        currentlyOpenPopover.hidePjaxPopover();
      }
    }
  });

  va options );
  };

  PjaxPopover.prototype = $.extend({}, $.fn.sui_popover.Constructor.prototype, {

    constructor: PjaxPopover,

    pjaxPopoverInit: function(type, triggerElement, options) {
      this.init( type, triggerElement, options );

      this.$triggerElement = this.$element; // this.$element set by tooltip init
      this.$element.on( 'mouseenter', $.proxy( this.loadCardAndShow, this ) );
      this.id = (idCounter += 1);
    },

    loadCardAndShow: function() {
      if( !this.showing ) {
        if( !this.htmlContent ) {
          $.get( this.$triggerElement.attr('data-popup-url') )
          .done( $.proxy( this.showPopoverAfterTimeout, this ) );
        }
        else {
          this.showPopoverAfterTimeout(this.htmlContent);
        }
      }
    },

    setContent: function() {
      var $tip = this.tip(),
          content = this.getContent();

      $tip.find('.sui-popover_content-body')[this.options.html ? 'html' : 'text'](content)
    },

lContent;
    },

    showPopoverAfterTimeout: function(data) {
      this.htmlContent = data;
      $(document).on( 'mousemove.pjaxPopover.' + this.id, $.proxy( this.closePopover, this ) );
      this.openTimer = setTimeout( $.proxy( this.showPopover, this), 300 );
    },

    showPopover: function() {
      this.showing = true;

      if( currentlyOpenPopover ) {
        currentlyOpenPopover.hidePjaxPopover();
      }
      currentlyOpenPopover = this;
      var elementToTop = this.$element[0].getBoundingClientRect().top;
      var elementToBottom = window.innerHeight - this.$element[0].getBoundingClientRect().bottom;
      // The tip doesn't get created until the popover is shown for the first time
      if (!this.$tip) {
        this.$tip = this.tip();
      }
      // If the parent element is 200 pixels closer to the bottom than it is to the top,
      // render topwise, otherwise render popover to the bottom.
      if (elementToTop - 200 > elementToBottom) {
        this.options.placement = 'top';
        this.$tip.removeClass('sui-popover_content--bottom').addClass('sui-popover_content--top');
        this.options.template = POPOVER_TOP;
      } else {
        this.options.placement = 'bottom';
        this.$tip.removeClass('sui-popover_content--top').addClass('sui-popover_content--bottom');
        this.options.template = POPOVER_BOTTOM;
      }
      this.show();

      // Init generic follow buttons (user, group, blog, etc)
      this.tip().find('[data-followpath][data-unfollowpath]').sui_follow_button()
      .on('sui-follow-button:followed',   $.proxy(this.genericFollow, this) )
      .on('sui-follow-button:unfollowed', $.proxy(this.genericUnfollow, this) );

      // Looks like vendor popup has special logic around its follow button so treat
      // it specially
      this.$tip.find('.sui-followlink[data-followable-class="VendorPage"]').followbutton()
      .on('follow',   $.proxy(this.followVendor, this) )
      .on('unfollow', $.proxy(this.unfollowVendor, this) );

      // [data-action] handler (eg 'mute')
      this.$tip.find('[data-action]').on( 'click', $.proxy( this.handleGenericAction, this ) );
      this.$element.trigger('sui-pjax-popover:shown', this.$tip);

      // Init Show all link
      this.$tip.find('[data-show-all]').showAll();

      var type;

      if(this.$tip.find('.sui-followlink[data-followable-class="VendorPage"]').length) {
        type = 'vendor';
      } else if(this.$element.hasClass('author')) {
        type = 'user';
      }

      GoogleAnalytics.trackEvent('Topic', 'hover', type + ' popover', 0, true);
    },

    handleGenericAction: function(event) {
      var $target = $(event.target);
      var action = $target.data('action');

      if( action ) {
        // Simulates code from the old spiceworks.ui.js (simple menus)
        this.$element.trigger( action, $target.data('action-args') );

        if( action === 'mute_author' || action === 'unmute_author' ) {
          $target.text( action === 'mute_author' ? 'Unmute' : 'Mute' );
          $target.data( 'action', action === 'mute_author' ? 'unmute_author' : 'mute_author' );
          this.hidePjaxPopover();
        }

        this.htmlContent = null; // Reload from server on hide & re-show
      }
    },

    genericFollow: function(event, followButton) {
      $.post( followButton.options.followpath );
      this.htmlContent = null; // Reload from server on hide & re-show
    },

    genericUnfollow: function(event, followButton) {
      $.post( followButton.options.unfollowpath );
      this.htmlContent = null; // Reload from server on hide & re-show
    },

    followVendor: function(event, followLink) {
      $.post(followLink.options.uri);
      this.htmlContent = null; // Reload from server on hide & re-show
    },

    unfollowVendor: function(event, followLink) {
      $.post(followLink.options.uri);
      this.htmlContent = null; // Reload from server on hide & re-show
    },

    isEventOutsidePopover: function(event) {
      var closestFollowToggle = $(event.target).closest('[data-action="follow-toggle"]');
      var closestBody = $(event.target).closest('body');

      // Special case for clicking on our sui-follow-button when inside the popup.
      // The spice button gets the event first and orphans the element that was
      // clicked so when we check if it's in the popup we get a false false.
      // This _will_ result in the popup staying open if the user happens to
      // close it by clicking a follow button _outside_ the popup o_O
      if( closestBody.length === 0 && closestFollowToggle.length !== 0 ) {
        return false;
      }

      var closestTrigger = $(event.target).closest('[data-popup-url]');
      var closestPopover = $(event.target).closest('.sui-popover_content');

      return (closestTrigger.length === 0 || closestTrigger[0] !== this.$element[0] ) &&
             (closestPopover.length === 0 || closestPopover[0] !== this.$tip[0] );
    },

    closePopover: function(event) {
      if( this.isEventOutsidePopover(event) ) {
        if( this.openTimer ) {
          clearTimeout( this.openTimer );
          this.openTimer = null;
        }
        this.scheduleHide();
      }
      else {
        if( this.hideTimer ) {
          this.cancelHideSchedule();
        }
      }
    },

    scheduleHide: function() {
      if( this.showing ) {
        if( !this.hideTimer ) {
          this.hideTimer = setTimeout( $.proxy( this.hidePjaxPopover, this ), 100 );
        }
      }
      else {
        $(document).off( 'mousemove.pjaxPopover.' + this.id );
      }
    },

    hidePjaxPopover: function() {
      this.hide();
      this.showing = false;
      this.cancelHideSchedule();
      $(document).off( 'mousemove.pjaxPopover.' + this.id );
      currentlyOpenPopover = null;
    },

    cancr = null;
    },

    // Copied this directly from bootstrap-tooltip.js in the Toolkit & changed it a bit
    // because we need to change the placement to left-align w/ the trigger
    applyPlacement: function(offset, placement){
      var $tip = this.tip(),
          actualWidth,
          candidateLeft,
          browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth

      // Left align w/ trigger
      candidateLeft = offset.left + (actualWidth / 2) - (this.$element[0].offsetWidth / 2);
      if (candidateLeft + actualWidth > browserWidth) {
        candidateLeft = candidateLeft + this.$element[0].offsetWidth - actualWidth;
        this.$tip.removeClass('sui-popover_content--align-left').addClass('sui-popover_content--align-right');
      } else {
        this.$tip.removeClass('sui-popover_content--align-right').addClass('sui-popover_content--align-left');
      }
      offset.left = candidateLeft;

      // Push down to make room for arrow
      if (placement === 'top') {
        offset.top = this.$triggerElement.offset().top - $tip.height() - 40;
      } else if (placement === 'bottom') {
        offset.top = offset.top + 9;
      }

      $tip.offset(offset);
    },

  });

  $.f]();
    })
  }

  $.fn.pjaxPopover.defaults = $.extend({} , $.fn.sui_popover.defaults, {
    placement: 'bottom',
    trigger: 'manual',
    template: POPOVER_BOxPopover();
  });

})(jQuery);
/*1.0*/
var Suggestions = (function($){

  var requests = {};

  vas(params)];
  };

  var+params.id;
  };

  var init = function(el){
    el
      .delegate('a.follow', 'click', function(){ follow(this); })
      .delegate('a.cloismiss(this); });
  };

  var follow = function(linkEl){
    var followedEl = grabSuggestionEl(linkEl);
    var params = suggestionParams(followedEl);
    if (findRequest(params)) { return; }

    followedEl.addClass('load_mask');
    requests[requestClass(params)] = $.ajax({
      url: '/suggestions/follow',
      data: params,
      type: 'POST',
      success: function(data){
        SPICEWORKS.fire("suggestion:followed", {suggestion: {type: params.type, id: params.id}, response: data, followedEl: followedEl});
        SPICEWORKS.fire("connection:followed", {type: params.type, id: params.id});
      },
      failure: function(data){
        // remove the suggestion from the page in the odd event this fails
        replaceSuggestion(followedEl,"");
      }
    });
  };

  // response for following via the homepage
  var replaceWithNext = function(ev, memo){
    replaceSuggestion(memo.followedEl, memo.response.suggestion);
    GoogleAnalytics.trackEvent("NewFeed", "Followed "+memo.suggestion.type, memo.suggestion.id);
  };

  // response for following most everywhere else
  var updateAsFollowed = function(ev, memo){
    updateSuggestion(memo.followedEl, memo.response.suggestion);
    GoogleAnalytics.trackEvent("GroupWelcomeSuggestion", "Followed "+memo.suggestion.type, memo.suggestion.id);
  };

  var updighlight');
  };

  var dismiss = function(linkEl){
    var dismissedEl = grabSuggestionEl(linkEl);
    var params = suggestionParams(dismissedEl);
    if (findRequest(params)) { return; }

    dismissedEl.addClass('load_mask');
    requests[requestClass(params)] = $.ajax({
      url: 'suggestions/dismiss',
      data: params,
      type: 'POST',stion);
      },El,"");
      }
    });
  };

  var graggestion');
  };

  var suggestionParams = function(suggestionEl){
    return {
      id: suggestionEl.attr('data-id'),
      type: suggestionEl.attr('data-type'),
      from_url: suggestionEl.attr('data-from-url'),
      stm_source: "recommendation",
      stm_medium: "organic",
      stm_campaign: "home_page"
    };
  };
  var replh(newHtml);
  };

  return {
    replaceSuggestion: replaceSuggestion,
    suggestionParams: suggestionParams,
    grabSuggestionEl: grabSuggestionEl,
    init: init,
    replaceWithNext: replaceWithNext,
    updateAsFollowed: updateAsFollowed
  };
})(jQuery);
/*1.0*/
window.SUI = window.SUI || {};

(function($) {
  var Helpers = {
    icon: function(icon, options) {
      var availableColors = ["gray", "white", "blue"];
      var availableIcons = ["alert-bell", "all-selected", "bookmark", "calculator", "calendar", "cart", "certificate", "check", "clock", "close-circular", "close", "collect", "compare", "copy", "down-chevron", "down", "download", "drag", "edit", "email", "exclamation-triangle", "exclamation", "eye-closed", "file", "flag", "gear", "globe", "group", "hourglass", "info", "laptop", "left-chevron", "left", "location", "lock", "message", "minus", "next-circular", "no-selection", "paperclip", "partial-selection", "plus", "previous-circular", "printer", "question", "refresh", "reply-bubble", "reply", "right-chevron", "right", "scan", "screwdriver", "search", "server", "share", "stats", "trash", "up-chevron", "up", "user-portal", "viewcolumns", "viewicons", "viewlist", "viewtiles", "visible", "event-badge", "event-best-answer", "event-follow", "event-helpful-post", "event-message", "event-reply", "event-tag", "alert-error", "alert-info", "alert-neutral", "alert-success", "alert-warning", "error-circular", "error", "event-spice", "info-circular", "pepper", "ribbon", "star-empty", "star-filled", "star-half", "success-circular", "success", "topic-flag", "warning-filled"];
      var availableSizes = [16, 24, 32];
      _.defaults(options || (options = {}), {
        color: _.first(availableColors),
        size: 16,
        html: false
      });
      if(_(availableColors).include(options.color) && _(availableIcons).include(icon)) {
        var $icon = $("<i></i>").addClass('sui-icon sui-icon-' + icon + ' sui-icon--' + options.color + ' sui-icon--' + options.size);
        return options.html ? $icon.wrap("<p>").parent().html() : $icon;
      } else { throw "ArgumentError"; }
    },
    rating: function(rating, options) {
      _.defaults(options || (options = {}), {
        max: 5,
        html: false,
        title: undefined,
        totalRatings: undefined
      });
      if(rating < 0) { rating = 0; }
      if(rating > options.max) { rating = options.max; }
      var full = Math.floor(rating),
        decimal = rating - full,
        empty = options.max - full - 1,
        stars = $("<span></span>").addClass("stars"),
        suiRating = $("<span></span>").addClass("sui-rating").append(stars);

      _(full).times(function() {
        stars.append(SUI.icon("star-filled"));
      });
      if(full < options.max) {
        if(decimal >= 0 && decimal < 0.25) { stars.append(SUI.icon("star-empty")); }
        else if(decimal >= 0.25 && decimal < 0.75) { stars.append(SUI.icon("star-half")); }
        else { stars.append(SUI.icon("star-filled")); }
       y"));
        });
      }

      if(typeof options.totalRatings !== 'undefined') {
        $("<span></span>")
          .addClass("total-ratings")
          .text("(" + options.totalRatings + ")")
          .appendTo(suiRating);
      }

      if(typeof options.title !== 'undefined') {
        suiRating.attr("title", options.title);
      }

      return options.html ? suiRating.wrap("<p>").parent().html() : suiRating;
    }
  };

  _.extend(SUI, Helpers);
})(jQuery);
/*1.0*/
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var SpiceworksAnalytics = (function($){

  var STATS_AJAX_URL = "/api/community_stats.json";

  function addEvent(controller, action, params) {
    try {
      if (controller == null || action == null) {
        return false;
      }
      params = params || {};

      $.post( STATS_AJAX_URL, $.extend(params, { c: controller, a: action }) );
    } catch (e) {
      // We don't want recording analytics to ever interfere with the
      // functioning of the application, so if an error occurs, just
      if (console && console.log) {
        console.log(e);
      }
    }
  }

  return {
    addEvent: addEvent
  };

})(jQuery);
/*1.0*/
/*************************************************************************************************/
/*  MobileCollapsedLinkLists */
/*************************************************************************************************/

!(function($) {

  window.MobileCollapsedLinkLists = {
    findAndCollapse: function() {
      if(!$UI.useMobile) { return; }

      jQuery("[data-mobile-collapse]").each(function(index, section) {
        var min = 3
        if(jQuery(section).find("li").length > min) {
          var name = jQuery(section).attr("data-mobile-collapse");
          var additional = jQuery('<ul class="collapsed-more-links" style="display: none;" id="' + name  + '_more_links"></ul>');
          jQuery(section).after(additional);
          jQuery(section).find("li").each(function(index, item) {
            if(index >= min) {
              additional.append(item);
            }
          });
          jQuery(section).after('<a href="#" class="collapsed-see-more" id="' + name + '_see_more">+ See More</a>');
          jQuery("#" + name + "_see_more").click(function(e) {
            e.preventDefault();
            jQuery("#" + name + "_see_more").hide();
            jQuery("#" + name + "_more_links").slideDown();
          });
        }
      });
    }
  };

  $(window).load(function() { MobileCollapsedLinkLists.findAndCollapse(); });
  $(document).ajaxComplete( MobileCollapsedLinkLists.findAndCollapse );

}(jQuery));


/*************************************************************************************************/
/*  MovingSecitons */
/*************************************************************************************************/
!(function($) {

  window.MobileMovingSections = {
    findAndMove: function(event) {
      if(!$UI.useMobile) { return; }
      var ajaxEvent = typeof event !== "undefined" && event.type === "ajaxComplete";

      $("[data-mobile-target]").each(function(index, section) {
        var $section = $(section);
        var value = $section.attr("data-mobile-target");
        if(!ajaxEvent || !$section.attr("data-mobile-no-ajax")) {
          var $destination = $("[data-mobile-destination='" + value  + "']");
          if($destination.length > 0) {
            $destination.append($section.clone());
          }
        }
      });
    }
  };

  $(window).load(function() { MobileMovingSections.findAndMove(); });
  $(document).ajaxComplete( MobileMovingSections.findAndMove );

}(jQuery));


/*************************************************************************************************/
/*  MobileTabs - Convert tabs to sui-droplist if they are too wide to fit on the display         */
/*************************************************************************************************/

!(function($) {

  window.MobileTabs = {
    findAndConvert: function() {
      if(!$UI.useMobile) { return; }

      $(".tabbed_menu ul, .nav-tabs, .rounded_tabs ul, .local_nav ul.sui-side-navigation, .section-navbar").not(".nav-roll-up").each( function( index, tabs ) {
        if( MobileTabs.tabsNeedDropdown( $(tabs) ) && ! $(tabs).hasClass('sui-dropdown-menu') && ! MobileTabs.dropdownBreaksStuff( $(tabs) ) ) {
          MobileTabs.convert( $(tabs) );
        }
      });
    },
    convert: function(tabs) {
      var dropdown = $('<div class="sui-dropdown mobile-tabs sui-opt-in"></div>');

      dropdown.insertBefore( tabs );
      dropdown.html( tabs );
      tabs.addClass('sui-dropdown-menu');

      tabs.removeClass('nav').removeClass('nav-tabs');

      dropdown.prepend( $('<a href="#" class="sui-dropdown-toggle sui-bttn" data-toggle="dropdown" onclick="return false;"></a>') );
      MobileTabs.updateActive( dropdown, tabs.find('li.active a, li a.active') );

      tabs.find('a').on( 'click', function() {
        MobileTabs.updateActive( dropdown, $(this) );
      });

      tabs.parents('.local_nav').on( 'change', function(event) {
        MobileTabs.updateActive( dropdown, $(event.target).find('li.active a, li a.active') );
      });
    },
    tabsNeedDropdown: function(tabs) {
      var total_width = 0;
      tabs.(true);
      });

      //If the tabs are hidden, they will have width zero and we don't want to convert in that case
      if(total_width == 0){
        return false;
      }
      // Check list and it's container...tabs need replaced if they run into two lines
      return total_width >= $(tabs).parent().width() || total_width >= $(tabs).width();
    },
    dropdownBreaksStuff: function(tabs) {
      return tabs.hasClass('section-navbar') && tabs.find('ul.nav li .sui-dropdown-toggle').size() > 0;
    },
    updateActive: function(dropdown, activeItem ) {
      dropdown.find('.sui-dropdown-toggle').html( activeItem.text() + ' <span class="caret"></span>' );
    }
  };
  $(window).load(function() { MobileTabs.findAndConvert(); });
  $(document).ajaxComplete( MobileTabs.findAndConvert );

}(jQuery));

/*************************************************************************************************/
/*  MobilePagination - Convert pagination to next/prev button and sui-droplist for page numbers  */
/*************************************************************************************************/

!(function($) {

  window.MobilePagination = {
    findAndConvert: function() {
      if(!$UI.useMobile) { return; }

      $('.sui-pagination, .pages, .pagination').each( function(index,pages) {
        if( ! $(pages).find('ul').hasClass('sui-dropdown_content') ) {
          MobilePagination.convert( $(pages) );
        }
      });
    },
    convert: function($pagination) {
      $pagination.addClass('mobile-page-numbers');
      var nextLink = $pagination.find('.sui-next, .next, .next_page').addClass('mobile-page-bttn');
      var prevLink = $pagination.find('.sui-previous, .prev, .previous_page').addClass('mobile-page-bttn');
      var pageLinks = $pagination.find('.sui-pagination_entry').toggleClass('sui-dropdown_entry sui-pagination_entry');

      if( pageLinks.length > 0 ) {
        var currentPage = pageLinks.find('.active').html();
        var dropdown = $('<div class="sui-dropdown is-closed"><a href="#" class="sui-dropdown_trigger" data-toggle="sui_dropdown" onclick="return false;">Page ' + currentPage + '<span class="sui-caret"></span></a></div>');

        // first and last entries are prev/next buttons
        pageLinks = pageLinks.slice(1, -1);

        dropdown.append($('<ul class="sui-dropdown_content is-hidden">').html(pageLinks));

        pageLinks.find('.sui-pagination_ellipses').parent().html('').toggleClass('sui-dropdown_divider sui-dropdown_entry');
        pageLinks.find('.sui-pagination_page-link').each( function(index, el) { $(el).html( 'Page ' + $(el).html() ); });

        $pagination.html('').append(prevLink, dropdown, nextLink);

        pageLinks.find('as) );
        });

        $pagination.trigger('mobilePagination:converted');
      }
    },
    updateActive: function(dropdown, activeItem) {
      dropdown.find('.sui-dropdown-toggle').html( activeItem.text() + ' <span class="caret"></span>' );
    }
  };
  $(window).load(function() {
    MobilePagination.findAndConvert();
    $('.mobile-page-bttn.disableefault();
    });
  });

  $(document).ajaxComplete( MobilePagination.findAndConvert );

}(jQuery));
/*1.0*/
(function($) {
  var SPICE = window.SPICE || {};
  SPICE.DynamicTaggingUtils = {
    getTextNodes: getTextNodes,
    storeCaretLocation: storeCaretLocation,
    restoreCaretLocation: restoreCaretLocation,
    diffTagLists: diffTagLists,
  };

  function diffTagLists(newInventory, oldInventory) {
    var removed = getTagListDiff(oldInventory, newInventory),
      added = getTagListDiff(newInventory, oldInventory),
      changed = Boolean(removed.length || added.length);

    return {
      removed: removed,
      added: added,
      changed:changed
    }
  }

  function getTagListDiff(deltaTags, controlTags) {
    if(!controlTags.length) { return deltaTags; }

    return deltaTags.filter(function(dTag) {
      return !_.sog.type;
      });
    });
  }


  function combDom(parent, skipSelectors, callback) {
    skipSelectors = skipSelectors || '';
    _.each(parent.childNodes, function(node) {
      if( !$(node).is(skipSelectors)) {
        combDom(node, skipSelectors, callback);
      }
    });

    callback(parent, skipSelectors);
  }

  function getTextNodes(parent, skipSelectors) {
    var textNodes = [],
      skipSelectors = skipSelectors || 'blockquote';
    combDom(parent[0],;
      }
    });
    return textNodes;
  }


  function storeCaretLocation(doc, elem) {
    // This function stores the caret's location for operations where the text content
    // may not change, but DOM will.
    var caretOffset = 0,
      nwsCount = 0,
      sel = doc.getSelection(),
      elem = elem || $(doc.body),
      node,
      nwsMatch;

    if(!sel.isCollapsed) return false;

    this.selection = sel;
    if(sel.type !== 'Caret') { return sel.baseOffset; }
    var textNodes = SPICE.DynamicTaggingUtils.getTextNodes(elem);

    // Iterate through the text nodes, counting up the number of characters until we
    // get to our currently selected node.
    for(var i=0; i<textNodes.length; i++) {
      node = textNodes[i];
      nwsMatch = node.textContent.match(/\u200B/);
      nwsCount +=  nwsMatch ? nwsMatch.length : 0;
      if( node !== sel.baseNode ) {
        caretOffset += node.length;
      } else {
        caretOffset += sel.baseOffset;
        caretOffset -= nwsCount;
        return caretOffset;
      }
    }
  }

  function restoreCaretLocation(doc, caretOffset, exitSelector, elem) {
    // This restores the caret after the DOM has changed.
    // exitSelector checks for a container node where the caret should be outside of if the caret
    // would end there.
    var contextOffset = caretOffset, // Used to translate the caret offset to its coresponding offset within the correct node
      elem = elem || $(doc).find('body'),
      textNodes = SPICE.DynamicTaggingUtils.getTextNodes(elem, ''),
      range = doc.createRange(),
      node;

    // caretOffset could be 0 so we have to expressly check for false
    if (caretOffset === false) return false;

    for(var i=0; i<textNodes.length; i++) {
      node = textNodes[i];
      if(contextOffset === node.textContent.length && $(node.parentNode).is(exitSelector)) {
        var $autodetectSpan = $(node.parentNode);
        $autodetectSpan.after('&#8203;');
        node = $autodetectSpan[0].nextSibling;
        range.selectNode(node);
        contextOffset = 1;
      } else if(contextOffset - node.length <= 0) {
        range.selectNode(node);
      } else {
        contextOffset -= node.textContent.length;
        continue;
      }

      this.selection.removeAllRanges();
      this.selection.addRange(range);
      this.selection.collapse(node, contextOffset);
      break;
    }
  }
})(jQuery);
/*1.0*/
var SPICE = window.SPICE || {};

(function($) {
  var getTextNodes = SPICE.DynamicTaggingUtils.getTextNodes,
      CARET = CARET,
      NWS_ENTITY = '&#8203;',
      NWS_RE = /\u200B|(&#8203;)/g,
      BR = BR;

  SPICE.DynamicTaggingCursor = DynamicTaggingCursor;

  function DynamicTaggingCursor(editor, options) {
    this.doc = editor.composer.doc;
    this.stayIn = options.stayIn || '';
    this.initialize();
  }

  DynamicTaggingCursor.prototype = {
    initialize: initialize,
    saveSelection: saveSelection,
    restoreSelection: restoreSelection,
    setCursorAfterElem: setCursorAfterElem,
    collapseAtNode: collapseAtNode,
    cursorIn: cursorIn,
    exitElem: exitElem,
    
    _getRangeInfo: _getRangeInfo,
    _getCaretInfo: _getCaretInfo,
    _getRangeSelectionInfo: _getRangeSelectionInfo,
    _restoreRange: _restoreRange,
    _restoreCaret: _restoreCaret,
    _isSelectAll: _isSelectAll,
    _getNodeAtOffset: _getNodeAtOffset,
    _getTextOffset: _getTextOffset
  };

  function initialize() {
    $(this.doc.body).keydown(function(e) {
      var sel = rangy.getSelection(this.doc),
          text = sel.anchorNode.textContent,
          nwsFound = text.match(/\u200B/),
          isPreviousReadOnly = (
            sel.anchorNode.previousSibling
            && sel.anchorNode.previousSibling.contentEditable !== "false"
          ),
          shouldClearNWS = Boolean(
            sel.isCollapsed
            && sel.anchorNode.nodeType === 3
            && isPreviousReadOnly
            && nwsFound 
            && nwsFound.length
            && text.length > 1
          );

      if (shouldClearNWS) {
        this.saveSelection();
        this.selectionInfo.offset -= nwsFound.length;
        sel.anchorNode.textContent = text.replace(/\u200B/, '');
        this.restoreSelection();
      }
    }.bind(this));
  }

  function cursorIn(selector) {
    // Returns the jquery object of the parent node that the cursor 
    // is inside of based on the selector.
    // Otherwise return false
    if(!this.selectionInfo) {
      this.saveSelection();
    }

    if (this.selectionInfo.type !== CARET) return false;

    var node = $(this._selection.anchorNode);
    if (node.is(selector)) {
      return node;
    }
    node = node.parents(selector);
    return node.length > 0 && node;
  }

  function exitElem(elem) {
    var nextSibling;
    this.saveSelection();
    if (this.selectionInfo.type !== CARET) {
      return;
    }
    nextSibling = _setupExit(elem);
    this.collapseAtNode(nextSibling, 0);
  }

  function setCursorAfterElem($elem) {
    var selection = rangy.getSelection(this.doc),
        range = rangy.createRange(this.doc),
        sibling = $elem.get(-1).nextSibling;

    if (!sibling || !sibling.textContent) {
      $elem.after(NWS_ENTITY);
      sibling = $elem.get(-1).nextSibling;
    }
    this.collapseAtNode(sibling, 1);
  }

  function saveSelection() {
    this._selection = rangy.getSelection(this.doc);
    this.selectionInfo = {
      type: this._selection.isCollapsed ? CARET : "Range"
    }

    if (this._selection.isCollapsed) {
      this._getCaretInfo();
    } else {
      this._getRangeInfo();
    }
  }

  function collapseAtNode(node, offset) {
    var range = rangy.createRange(this.doc),
        selection = rangy.getSelection(this.doc);

    range.selectNode(node);
    selection.removeAllRanges();
    selection.addRange(range);
    selection.collapse(node, offset);
  }
  
  function restoreSelection(exitSelector) {
    if (this._selection.isCollapsed) {
      this._restoreCaret(exitSelector);
    } else {
      this._restoreRange(exitSelector);
    }

    this._selection = null;
    this.selectionInfo = null;
  }

  function _getNoLengthPrevSiblings(elem, count) {
    if (elem.textContent.length > 0 || !elem.previousSibling) {
      return count;
    }
    
    return _getNoLengthPrevSiblings(elem.previousSibling, count + 1)
  }

  function _getCaretInfo() {
    this._selection = rangy.getSelection(this.doc);

    var anchorNode = this._selection.anchorNode,
        anchorOffset = this._selection.anchorOffset,
        textOffset = this._getTextOffset(anchorNode, anchorOffset),
        isNoLength = anchorNode.textContent.length === 0,
        noLengthSiblings;

    this.selectionInfo.textOffset = textOffset;
    this.selectionInfo.originalNode = anchorNode;
    this.selectionInfo.originalOffset = anchorOffset;

    if (!anchorNode.textContent) {
      this.selectionInfo.noLengthSiblings = _getNoLengthPrevSiblings(anchorNode, 0);
    }
  }
  
  function _getRangeSelectionInfo(selection) {
    var anchorNode = selection.anchorNode,
        focusNode = selection.focusNode,
        anchorNodeOffset = this._getTextOffset(anchorNode, selection.anchorOffset),
        focusNodeOffset = this._getTextOffset(focusNode, selection.focusOffset),
        isBackward = focusNodeOffset < anchorNodeOffset;

    return {
      anchorNode: anchorNode,
      focusNode: focusNode,
      anchorNodeOffset: anchorNodeOffset,
      focusNodeOffset: focusNodeOffset,
      isBackward: isBackward,
      startNode: isBackward ? focusNode : anchorNode,
      endNode: isBackward ? anchorNode : focusNode,
      startNodeOffset: isBackward ? focusNodeOffset : anchorNodeOffset,
      endNodeOffset: isBackward ? anchorNodeOffset : focusNodeOffset
    }
  }

  function _getRangeInfo() {
    this._selection = rangy.getSelection(this.doc);
    var selectionInfo = this._getRangeSelectionInfo(this._selection),
        isSelectAll = this._isSelectAll(selectionInfo);

    if (isSelectAll) {
      this.selectionInfo = _.extend(this.selectionInfo, {
        isBackward: selectionInfo.isBackward,
        startNodeOffset: 0,
        endNodeOffset: $(this.doc.body).text().replace(NWS_RE, '').length
      });
    } else {
      this.selectionInfo = _.extend(this.selectionInfo, selectionInfo);
    }
  }

  function _restoreCaret(exitSelector) {
    var nodeInfo = this._getNodeAtOffset(this.selectionInfo.textOffset),
        $parentNode = nodeInfo.node ? $(nodeInfo.node.parentNode) : false,
        shouldExit = (
          $parentNode.length
          && !this.cursorIn(this.stayIn)
          && $parentNode.is(exitSelector)
          && nodeInfo.node.textContent.length === nodeInfo.offset
        ),
        _nextSibling,
        _emptyNode;

    if (shouldExit) {
      _nextSibling = _setupExit($parentNode);

      nodeInfo.node = _nextSibling;
      nodeInfo.offset = nodeInfo.node && +(nodeInfo.node.nodeType === 3);
    } 

    if (nodeInfo.node.nodeType === 3) {
      nodeInfo.offset = Math.floor(
        nodeInfo.node.textContent.length,
        nodeInfo.offset);
    }

    if ($(this.doc.body).find(this.selectionInfo.originalNode).length) {
      nodeInfo.node = this.selectionInfo.originalNode;
      nodeInfo.offset = this.selectionInfo.originalOffset;
    } else if (this.selectionInfo.noLengthSiblings) {
      _emptyNode = _stepToEmptyNode(
        nodeInfo.node.nextSibling,
        this.selectionInfo.noLengthSiblings
      );

      if (_emptyNode) {
        nodeInfo.node = _emptyNode;
        nodeInfo.offset = 0;
      }
    }

    this.collapseAtNode(nodeInfo.node, nodeInfo.offset);
    this.selectionInfo = null;
  }

  function _stepToEmptyNode(node, count) {
    if (count <= 0 || !node || !node.nextSibling) {
      return node;
    }
    return _stepToEmptyNode(node.nextSibling, count - 1);
  }

  function _setupExit($parentNode) {
    var _nextSibling = $parentNode.get(0).nextSibling,
        alreadySetup = _nextSibling && (
          _nextSibling.textContent.match(/^\u200B/) ||
          _nextSibling.nodeName === 'BR'
        );

    if (!alreadySetup) {
      $parentNode.after(NWS_ENTITY);
    } 

    return $parentNode.get(0).nextSibling;
  }

  function _restoreRange(exitSelector) {
    var range = rangy.createRange(this.doc),
        selection = rangy.getSelection(this.doc),
        startInfo = this._getNodeAtOffset(this.selectionInfo.startNodeOffset),
        endInfo = this._getNodeAtOffset(this.selectionInfo.endNodeOffset),
        startExitNode = exitNode($(startInfo.node), exitSelector, 'previousSibling'),
        endExitNode = exitNode($(endInfo.node), exitSelector, 'nextSibling');

    startInfo.node = startExitNode || startInfo.node;
    endInfo.node = endExitNode || endInfo.node;
    range.setStart(startInfo.node, startInfo.offset);
    range.setEnd(endInfo.node, endInfo.offset);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function exitNode(node, exitSelector, siblingString) {
    var directionString = siblingString === 'previousSibling' ? 'before' : 'after';

    if ($(node).is(exitSelector)) {
      if (!node[siblingString]) {
        $(node)[directionString](NWS_ENTITY);
      }

      return node[siblingString];
    }
    return false;
  } 

  function convertToTextNodeOffset(node, offset) {
    var textNodes, newNode, newOffset;

    if (offset >= node.childNodes.length) {
      textNodes = _.toArray(getTextNodes($(node), ''));
      newNode = textNodes[textNodes.length - 1];
      newOffset = node.textContent.length;
    } else if (node.childNodes[offset].nodeName === BR) {
      newNode = node.childNodes[offset];
      newOffset = 0;
    } else {
      textNodes = _.toArray(getTextNodes($(node.childNodes[offset]), ''));
      newNode = textNodes[0];
      newOffset = 0;
    }

    return {
      node: newNode,
      offset: newOffset
    }

  }

  function _getTextOffset(referenceNode, nodeOffset, nodeList, caretOffset, nwsCount) {
    nodeList = nodeList || _.toArray(getTextNodes($(this.doc.body), ''));
     
    var node = nodeList.shift(),
        nwsSearch = node ? node.textContent.match(/\u200B/) : [],
        _convertedNode;

    if (referenceNode && referenceNode.nodeType !== 3 && referenceNode.nodeName !== BR) {
      _convertedNode = convertToTextNodeOffset(referenceNode, nodeOffset);
      referenceNode = _convertedNode.node;
      nodeOffset = _convertedNode.offset;
    }

    caretOffset = caretOffset || 0;
    nwsCount = (nwsCount || 0) + (nwsSearch ? nwsSearch.length : 0);

    if (nodeList.length === 0 || node === referenceNode) {
      return caretOffset + nodeOffset - nwsCount;
    } else {
      return this._getTextOffset(
        referenceNode,
        nodeOffset,
        nodeList,
        caretOffset + node.textContent.length,
        nwsCount
      )
    }
  }

  function _getNodeAtOffset(textOffset, currentOffset, nodeList) {
    nodeList = nodeList || _.toArray(getTextNodes($(this.doc.body), ''));

    var node = nodeList.shift(),
        currentOffset = currentOffset || 0,
        nodeExtent = currentOffset + (node ? node.textContent.length : 0);

    if (nodeList.length === 0 || nodeExtent >= textOffset) {
      return {node: node || this.doc.body, offset: textOffset - currentOffset};
    }

    return this._getNodeAtOffset(textOffset, nodeExtent, nodeList);
  }

  function _isSelectAll(selectionInfo) {
    return (
      $(selectionInfo.startNode).is('body')
      && selectionInfo.startOffset === 0
      && $(selectionInfo.endNode).is('body')
      && selectionInfo.endOffset === selectionInfo.endNode.childNodes.length
    )
  }

})(jQuery);

/*1.0*/
/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
        };
    }
}());
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["dynamic_tags/templates/dropdown_tag__user"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li class="autolist-tag autolist-tag--user" data-id="',(''+ id ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n  <div class="autolist-tag--icon">\n    <img src="',(''+ thumbnail_url ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n  </div>\n  <span class="autolist-tag--user-name\n               autolist-tag--',(''+ type ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n               profile_link\n               profile_link--',(''+ user_type ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">',(''+ name ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</span>\n</li>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["dynamic_tags/templates/dropdown_tag__research"] = function(obj){v_p,arguments);};with(obj||{}){__p.push('<li class="autolist-tag" data-id="',(''+ id ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n  <div class="autolist-tag--icon">\n    <img src="',(''+ thumbnail_url ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n  </div>\n  <div class="autolist-tag--name">',(''+ label ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</div>\n  <div class="autolist-tag--type">(',(''+ tagName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),')</div>\n</li>\n');}return __p.join('');};
}).call(this);
/*1.0*/




/*global $ document*/

var SPICE = window.SPICE || {};

(function($) {

  var MESSAGE_NO_TAGS_USER = "We can't find any people with that name.",
      MESSAGE_NO_TAGS_RESEARCH = "We can't find any products or vendors with that name.",
      MESSAGE_NO_TAGS_ALL = "We can't find any users, products or vendors with that name.",
      MESSAGES = {
        user: MESSAGE_NO_TAGS_USER,
        research: MESSAGE_NO_TAGS_RESEARCH,
        all: MESSAGE_NO_TAGS_ALL
      },

      TEMPLATES = {
        User: JST['dynamic_tags/templates/dropdown_tag__user'],
        VendorPage: JST['dynamic_tags/templates/dropdown_tag__research'],
        Product: JST['dynamic_tags/templates/dropdown_tag__research'],
      },

      TAG_TYPE_MAP = {
        VendorPage: 'VendorPage',
        User: 'User',
        Product: 'Product'
      },

      TAG_NAME_MAP = {
        VendorPage: 'Vendor',
        User: 'User',
        Product: 'Product'
      },

      KEY_ENTER = 13,
      KEY_ARROW_UP = 38,
      KEY_ARROW_DOWN = 40;

  // DYNAMIC TAGGING AUTOLIST /////////////////////

  SPICE.DynamicTaggingAutolist = DynamicTaggingAutolist;
  
  function DynamicTaggingAutolist(options) {
    // Reference to the tag that is currently being edited
    this.$autoList = $('<div class="autolist"></div>');
    this.$body = $('body');
    this.tags = [];
    this.isVisible = false;
    this.skippable = false;

    this.onSelectedTag = options.onSelectedTag;
    this.skipSelection = options.onSkipSelection;
  }

  DynamicTaggingAutolist.prototype = {
    update: update,
    render: render,
    highlightTag: highlightTag,
    positionList: positionList,
    onKeydown: onKeydown,
    isRemoved: isRemoved,
    tagGenerator: tagGenerator
  };

  // DOCUMENT READY ///////////////////////////////////

  function tagGenerator(tag, tagIndex) {
    tag.type = TAG_TYPE_MAP[tag.type];
    tag.tagName = TAG_NAME_MAP[tag.type];
    tag.$elem = $(TEMPLATES[tag.type](tag));
    tag.$elem
      .click({context: this}, onClickListItem)
      .data('tag', tag);
    if( tagIndex === 0 ) { this.highlightTag(tag); }
    return tag;
  }

  function update(display, refresh, queryData) {
    if(!display) {
      this.$autoList.remove();
      this.currentSelection = null;
      return;
    }
    if(!refresh) { return }

    this.count = queryData.count;
    this.type = queryData.type;
    this.coords = queryData.coords;
    this.skippable = queryData.skippable;
    this.message = MESSAGES[this.type];
    if (this.type !== 'all') {
      this.tags = queryData.tags.map(function(tag, i) {
        return this.tagGenerator(tag, i);
      }.bind(this));
    } else {
      this.tags = queryData.users_group.concat(queryData.reseag, i);
      }.bind(this));
    }

    if(typeof this.tags !== 'undefined') {
      this.render();
    } else {
      this.$autoList.remove();
    }
  }

  function render() {
    var $accumulator = $('<ul class="container"></ul>');

    this.$autoList.html('');
    if (this.tags.length === 0) {
      this.$autoList.html("<div class=\"error-message\">" + this.message + "</div>");
      if(this.skippable) {
        this.$autoList.one('click', this.skipSelection);
      }
      this.currentSelection = null;
    } else {
      _.d(tag.$elem); });

      if(this.skippable) {
        $accumulator.append([
          '<li class="autolist-tag" data-skip>',
          '<div class="autolist-tag--icon autolist-tag--borderless-icon">',
            '<i class="sui-icon sui-icon-close sui-icon--16"> </i>',
          '</div>',
          '<div class="autolist-tag--name">Don\'t tag this item</div>',
          '</li>'
        ].join(''));
        $accumulator.find('[data-skip]').click(this.skipSelection);
      }
      this.$autoList.html($accumulator);
    }

    this.$body.append(this.$autoList);

    // call $.off here to prevent stacking bindings
    $(document).off('keydown.tagging_autolist', $.proxy(onKeydown, this));
    // We need to bind this to document because of some wonkiness with triggering
    // events on the iframe vs on the root document
    $(document).on('keydown.tagging_autolist', $.proxy(onKeydown, this));

    this.positionList();
  }

  function positionList() {
    if(!this.$autoList || !this.coords) {
      return true;
    }

    // Position the new autolist
    this.$autoList.css({
      top: this.coords.yPos + 'px',
      left: this.coords.xPos + 'px'
    });
  }

  function highlightTag(tag) {
    if(!tag) return true;
    this.currentSelection = tag;

    // Update DOM
    this.$autoList.find('li').removeClass('cursor');
    this.currentSelection.$elem.addClass('cursor');
  }

  // EVENT BINDINGS ////////
  function onClickListItem (e) {
    // Prevent the default action
    e.preventDefault();
    e.stopPropagation();

    var ctx = e.data.context,
        selectedTag = $(this).data('tag');

    ctx.currentSelection = selectedTag;
    ctx.onSelectedTag(_.clone(ctx.currentSelection) || false);
  }

  function isRemoved() {
    return !this.$autoList.parent().length;
  }

  function onKeydown(e, extKeyCode) {
    // Iframes don't trigger this event, so we have ext code passed in 
    // to not have to bind and event on this module specifically for those
    var keyCode = e.keyCode || e.which || extKeyCode,
        index = this.tags.indexOf(this.currentSelection),
        isHotKey = _.contains([KEY_ENTER, KEY_ARROW_UP, KEY_ARROW_DOWN], keyCode);

    if(!isHotKey || this.isRemoved()) {
      return true;
    }

    e.preventDefault();
    e.stopPropagation();

    switch (keyCode) {
      case KEY_ENTER:
        this.onSelectedTag(this.currentSelection || false);
        break;
      case KEY_ARROW_UP: 
        index = Math.max(index - 1, 0);
        this.highlightTag(this.tags[index]);
        break;
      case KEY_ARROW_DOWN: 
        index = Math.min(index + 1, this.tags.length - 1);
        this.highlightTag(this.tags[index]);
        break;
    }
  }
})(jQuery);
/*1.0*/


/*global $ document*/

var SPICE = window.SPICE || {};

(function($) {

  // for the keypress event it uses the character number, rather than the key code
  var CHAR_HASH = 35;
  var CHAR_PLUS = 43;
  var CHAR_AT = 64;

  var KEY_BACKSPACE = 8;
  var KEY_ENTER = 13;
  var KEY_ESCAPE = 27;
  var KEY_SPACE = 32;
  var KEY_ARROW_LEFT = 37;
  var KEY_ARROW_UP = 38;
  var KEY_ARROW_RIGHT = 39;
  var KEY_ARROW_DOWN = 40;
  var KEY_DELETE = 46;

  var diffTagLists = SPICE.DynamicTaggingUtils.diffTagLists;

  // DYNAMIC TAGGING INLINE EDITOR /////////////////////

  SPICE.DynamicTaggingInlineEditor = function(editor, options) {
    this.maxQueryLength = 30;
    this.inlineTagInventory = [];

    //Inline Elements - Delay initialization until signal is sent from editor
    this.editor = editor;
    this.$iframeDoc = $(this.editor.composer.doc);
    this.$body = this.$iframeDoc.find('body');
    this.composer = this.editor.composer;

    // Keep the class selector for old post editing
    this.NEW_TAG_SELECTOR = '.inline-tag.new, [data-inline-tag="new"]';
    this.ACTIVE_TAG_SELECTOR = '.inline-tag.active, [data-inline-tag="active"]';
    this.INACTIVE_TAG_SELECTOR = '[data-inline-tag="inactive"]';
    this.INLINE_TAG_SELECTOR = '.inline-tag, [data-inline-tag]'; 
    this.INCOMPLETE_TAG_SELECTOR = '.inline-tag.new, [data-inline-tag="new"], [data-autodetect]';
    this.EDIT_PREFIXES = [CHAR_PLUS];

    if (options.atUsers) this.EDIT_PREFIXES.push(CHAR_AT, CHAR_HASH);

    // Callbacks
    this.query = options.query;
    this.hideResults = options.hideResults;
    this.removeTaglistFocus = options.removeTaglistFocus;
    this.removeTags = options.removeTags;
    this.addTags = options.addTags;
    this.cursor = options.cursor;
    this.keydownAction = options.keydown;

    this.newTag;
    this.selectedTag;
    this.defaultTextSpan;
    this.focusedTagSpan;            //Hack for FF deletion - Remove when possible
    this.preBackspaceTagWidths;     //Hack for FF deletion - Remove when possible

    //Initialize the module
    this.initialize();
  };

  SPICE.DynamicTaggingInlineEditor.prototype = {
    initialize: initialize,
    onEditorAction: onEditorAction,
    onMainEditorFocus: onMainEditorFocus,
    onClickSubmit: onClickSubmit,
    initializeTags: initializeTags,
    addTag: addTag,
    selectTag: selectTag,
    removeTag: removeTag,
    tagIsEmpty: tagIsEmpty,
    refreshTagInventory: refreshTagInventory,
    deselectAllTags: deselectAllTags,
    checkForNewTag: checkForNewTag,
    createTag: createTag,
    isPreviousCharacter: isPreviousCharacter,

    escapeQueryMode: escapeQueryMode,
    convertTagToText: convertTagToText
  };

  function initialize() {
    //Get the references to the editor
    //If there is still an active tag from a previous reload, get rid of it
    if( this.$body.find(this.NEW_TAG_SELECTOR).length > 0 ) {
      this.newTag = this.$body.find(this.NEW_TAG_SELECTOR);
      this.escapeQueryMode();
    }

    //Initialize the tags
    this.initializeTags();

    this.$body.on('click', $.proxy(onTextareaClick, this));

    //When a key is pressed in the editor
    this.$body.on('keydown.dynamic_tagging', $.proxy(onTextareaKeydown, this));
    this.$body.on('keypress.dynamic_tagging', $.proxy(onEditorAction, this));
    this.$body.on('input.dynamic_tagging', $.proxy(onEditorInput, this));
    this.$body.on('keyup.dynamic_tagging', $.proxy(onTextareaKeyup, this));

    //Sets up a space after the last tag
    this.$body.on('blur', $.proxy(onTextareaBlur, this));

    //Special case for when the user pastes content into the window
    this.$body.on('cut paste', $.proxy(onTextareaCutPaste,this));

    //Initialize the tags when the user performs an undo
    this.editor.on('undo:composer', function(){
      this.initializeTags();
    }.bind(this));

    //Initialize the tags when the user performs an undo
    this.editor.on('redo:composer', function(){
      this.initializeTags();
    }.bind(this));

    // Prevent the backspace key from navigating back.
    $(document).on('keydown.dynamic_tagging', this.$body, preventBackspace);
  }

  function addTag(tag, selection) {
    this.newTag = tag || this.$body.find(this.NEW_TAG_SELECTOR);

    if(!this.newTag || !this.newTag.length || !selection) {
      this.escapeQueryMode();
      return true;
    }

    this.newTag = resetTag(this.newTag, selection);
    //Make sure that the tag is no longer selected
    bindSelectionEvents.call(this);
    this.deselectAllTags();

    this.cursor.setCursorAfterElem(this.newTag);
    this.$body.focus();
    this.newTag = null;

    this.hideResults();
    this.refreshTagInventory();
  }

  function resetTag(tag, selection) {
    var label = selection.label,
      id = selection.id,
      type = selection.type,
      $newTag = $(
        '<span class="inline-tag completed" ' + 
        'readonly contenteditable="false" ' +
        'data-id="' + id + '" ' +
        'data-type="' + type +'" ' +
        'data-inline-tag="inactive">' +
        label + '</span>'
      );


    $newTag.data('selection', selection);
    if( selection.user_type ) {
      $newTag.addClass('profile_link profile_link--' + selection.user_type);
    }

    tag.replaceWith($newTag);
    return $newTag;
  }

  function bindSelectionEvents() {
    var _this = this;

    //Check for users clicking on a tag
    this.newTag.off('focus click mousedown');
    this.newTag.on('focus cl$(this));
    });

    this.newTag.find('span').on('focus', function(e){
      _this.focusedTagSpan = $(this);
    });
  }


  function onMainEditorFocus(mainEditorTag){
    // Hack for IE to deselect the tag (otherwise, if you added a tag 
    // to the main editor, it would show up inline)
    if(this.newTag && this.newTag.length) {
      //Escape out of query mode
      this.escapeQueryMode();

      //Reactivate the main editor tag
 lick();
      }, 50);
    }

  }

  function removeTag(id, type) {
    //Get all of the inline tags that have the same id as the tag that was 
    //removed from the main editor
    var _this = this,
      inlineTags = this.$body.find('.inline-tag').filter(function() {
        return $(this).data("id") === id && $(this).data("type") === type;
      });

    inlineTags.each(function() { _this.convertTagToText($(this)); });
    this.refreshTagInventory();
  }

  function onEditorInput(e) {
    var isNewTag = this.checkForNewTag();
    if(isNewTag && e.keyCode === KEY_BACKSPACE && this.tagIsEmpty()) {
      e.preventDefault();
      this.escapeQueryMode();
    }
  }

  function onEditorAction(e) {
    //Get a reference to the main object
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode,
      isTag = this.checkForNewTag();

    //When the + or @ button is pressed
    if(!isTag && _.contains(this.EDIT_PREFIXES, charCode)) {
      //Prevent default
      enterEditMode.call(this, isTag, e.key);
    }
    return true;
  }

  function enterEditMode(isTag, initChar) {
    var _this = this;

    //If it isn't in a tag, create a new one
    if(isTag) { return; }

    //Create the new inline span
    wysihtml5.commands.formatInline.exec(this.composer, null, {
      nodeName: "span",
      attribute: {
        "data-inline-tag": "new"
      }
    });

    // Process the new tag
    this.newTag = this.$body.find(this.NEW_TAG_SELECTOR);
    this.newTag
      .addClass('mode-research inline-tag new');

    this.$boesults();
    }.bind(this));

    //If there is a previous character, break out of query mode
    if(this.isPreviousCharacter()) {
      // Because IE is atrocious, we have to delay the escape of the query mode or 
      // the textarea will lose focus in IE and the user will become stuck
      setTimeout( _this.escapeQueryMode, 50);
    }
  }

  function initializeTags() {
    //Get all tags in the new window
    var _this = this,
      inlineTags = this.$body.find(this.INLINE_TAG_SELECTOR);

    //Refresh the tag inventory
    this.refreshTagInventory(true);

    $(this));
    });
  }

  function createTag(tag) {
    //Check for users clicking on a tag
    var _this = this;

    //Make sure the text area maintains focus
    this.$body.focus();

    tag.attr({
      'readonly': 'true', 'contenteditable': 'false'
    }).addClass('completed');

    tag.off('focus click mousedown')
      .on('focus click mousedown', function(e){

      e.stopPropagation();
      e.preventDefault();

      //Remove the focus from the main editor
      _this.removeTaglistFocus();

      _this.selectTag($(this));
      _this.$body.focus();
    });

    //Special hack for FF deletion
    tag.find('spa $(this);
    });

    //Make sure that the tag is no longer selected
    this.deselectAllTags();
  }

  function selectTag(tag) {
    //Deselect all existing active tags
    this.deselectAllTags();

    //Activate the tag
    tag.addClass('active');
    this.selectedTag = tag;
  }

  function refreshTagInventory () {
    //Get all of the inline tags in the textarea
    var inlineTags = this.$body.find(this.INLINE_TAG_SELECTOR);

    //Convert them all into an array of objects
    var convertedTags = _.unique(_.map(inlineTags, function(tag) {
      return {
        id: $(tag).data('id'),
        type: $(tag).data('type'),
        label: $(tag).html(),
        selection: $(tag).data('selection') // Sometimes returns undefined for some reason
      };
    }), function(sel) {
        if(!sel) {
          return false;
        }
        return '' + sel.id + sel.type;
      });
    var diff = diffTagLists(convertedTags, this.inlineTagInventory);

    if(diff.changed) {
      this.inlineTagInventory = convertedTags;
      this.removeTags(diff.removed, true);
      this.addTags(diff.added, true);
    }
  }

  function deselectAllTags() {
    this.$body.find(this.ACTIVE_TAG_SELECTOR)
      .removeClass('active')
      .data('inline-tag', 'inactive');

    this.selectedTag = null;
  }

  function checkForNewTag() {
    this.newTag = this.$body.find(this.NEW_TAG_SELECTOR);
    return this.newTag.length;
  }

  function isPreviousCharacter() {
    if(!this.checkForNewTag()) {
      return false;
    }
    var newTag = this.$body.find(this.NEW_TAG_SELECTOR);
    var range = rangy.createRangyRange();
    range.setStart(this.$body.get(0), 0);
    range.setEnd(newTag.get(0), 0);
    var precedingChar = range.toString().slice(-1);
    var precedingTwoChar = range.toString().slice(-2);
    var rangeLength = range.toString().length;
    var isFirstChild = newTag.parent().children().first().is(this.NEW_TAG_SELECTOR) && $.trim(newTag.parent().text()).length == 0;

    return Boolean(
      (!precedingChar.match(new RegExp("\\s")) || precedingTwoChar.indexOf('+') || precedingTwoChar.indexOf('#') || precedingTwoChar.indexOf('@') > -1)
      && rangeLength !== 0 
      && !isFirstChild
    );
  }

  function escapeQueryMode() {
    if(!this.newTag || !this.newTag.length) {
      return;
    }

    this.hideResults();
    this.cursor.saveSelection();
    this.newTag.replaceWith(this.newTag.text());
    this.cursor.restoreSelection();
  }

  function convertTagToText(tag) {
    if(!tag || !tag.length) { return; }

    this.cursor.saveSelection();
    tag.replaceWith(tag.text());
    this.cursor.restoreSelection();
  }

  function onTextareaClick(e) {
    this.removeTaglistFocus();

    //If there is a selected tag, deselect it
    if(this.selectedTag) {
      this.deselectAllTags();
    }

    if(this.newTag) {
      this.hideResults();
      this.convertTagToText(this.newTag);
      this.newTag = null;
    }
  }

  function onTextareaKeydown(e) {
    var isNewTag = this.checkForNewTag(),
        keyCode = (typeof e.which === "number") ? e.which : e.keyCode,
        sel = this.composer.doc.getSelection(),
        shouldRemoveFinishedTag = (
          sel.isCollapsed &&
          sel.anchorNode.nodeType === 3 &&
          sel.anchorOffset === 1 &&
          sel.anchorNode.textContent.match(/^\u200B/) &&
          sel.anchorNode.previousSibling.contentEditable === "false"
        );

    doMozHackKeydown.call(this);

    //If backspace is pressed and there is a selected tag
    if(_.contains([KEY_BACKSPACE, KEY_DELETE, KEY_ESCAPE], keyCode)) {
      if(this.selectedTag) {
        e.preventDefault();
        //Remove the actual tag
        this.hideResults();
        this.convertTagToText(this.selectedTag);
        this.deselectAllTags();

        //Refresh the tag inventory
        this.refreshTagInventory();
      } else if (isNewTag && (keyCode === KEY_ESCAPE || this.tagIsEmpty())) {
        e.preventDefault();
        this.escapeQueryMode();
      } else if (keyCode === KEY_BACKSPACE && shouldRemoveFinishedTag) {
        sel.anchorNode.previousSibling.remove();
      }

    }

    this.keydownAction(e);
  }

  function tagIsEmpty() {
    if (!this.newTag) return true;
    var match = this.newTag.text().replace(/^[\s\u200B]/, '');
    return match.length === 0;
  }

  function onTextareaKeypress(e) {
    // In IE, the tag loses focus due to the resize handles...
    // You have to fake the input into the tag
    if(this.checkForNewTag()) {
      var key = (typeof e.which == "number") ? e.which : e.keyCode,
        rawTag = this.newTag ? this.newTag.get(0) : undefined,
        current = this.$body.find(this.NEW_TAG_SELECTOR).html();

      e.preventDefault();

      // Set the cursor
      if(current.length != 1) {
        if(rawTag) {
          if(!doMozHackKeypress.call(this)) {
            if(!this.newTag.get(0).parentNode) {
              this.newTag.replaceWith('<p>' + rawTag.outerHTML + '</p>');
            }
            var range = rangy.createRange();
            range.selectNode(this.newTag.get(0));
            range.collapse(false);
            var sel = rangy.getSelection();
            sel.setSingleRange(range);
          }
        }
      }
    }

    //Standard editor actions
    this.onEditorAction(e);
  }

  function onTextareaKeyup(e){
    var keyCode = e.keyCode || e.which;

    //Check to see if the user is creating a new tag
    if(this.checkForNewTag()) {
      var query = this.$iframeDoc.find(this.NEW_TAG_SELECTOR).text();

      //Special case to allow "+1" agreement
      if(query === '+1') {
        this.escapeQueryMode();
      } else {
        //As long as the ESC button isn't pressed
        if(!_.contains([KEY_ESCAPE, KEY_ARROW_LEFT, KEY_ARROW_UP, KEY_ARROW_RIGHT, KEY_ARROW_DOWN, KEY_ENTER], keyCode) 
          && this.newTag && this.newTag.html() !== "") {
            //If the query has exceeded the max number of characters, break out of query mode
            if(query.length > this.maxQueryLength) {
              if(this.newTag) {
                this.escapeQueryMode();
              }
            } else {
              //Send the query
              this.query({
                query: query,
                sourceObj: this, 
                activeTag: this.newTag, 
                skippable: false,
                isExternalProductSelector: false
              });
            }
          }
      }
      // Same as onEditorInput but that event isn't supported in IE
      if(e.keyCode === KEY_BACKSPACE && this.tagIsEmpty()) {
        e.preventDefault();
        this.escapeQueryMode();
      }
    } else {
      if(!doMozHackKeyup.call(this) ) {
        //Update the list - Only on delete or backspace
        if(_.contains([KEY_BACKSPACE, KEY_DELETE], keyCode)) {
          this.refreshTagInventory();
        }
      }
      $(document).trigger('hide-results.dynamic_tagging')tAllTags();
  }

  function onTextareaCutPaste(e){
    //Get a reference to the main object
    var mainObj = this;
    //Do a full refresh on the tag inventory and reinitialize the tagstFocus();
    }.bind(this), 100);
  }

  function preventBackspace (event) {
    var d = event.srcElement || event.target,
      keyCode = event.keyCode || event.which;

    if (_.contains([KEY_BACKSPACE, KEY_DELETE, KEY_SPACE], keyCode) && $(d) == this.module) {
      event.preventDefault();
    }
  }

  function onClickSubmit(e){
    var _this = this;

    _this.$body.find(this.INCOMPLETE_TAG_SELECTOR).each(function(){
      _this.convertTagToText($(this));
    });

    if(_this.$body.find('p').length === 0) {
      //Wrap content in a p tag
      _this.$body.wrapInner('<p></p>');
    }
    _this.$body.find('span[contenteditable]').removeAttr('contenteditable');
  }


  /**********************************************
   * Firefox Hacks
   **********************************************/
  // doMozHackKeydown and doMozHackKeyup are a terrible hack to get around a Firefox specific 
  // issue with deleting non-contenteditable elements within a content editable block.
  // Jquery disables $.browser in version 1.9, so if we upgrade to Jquery 1.9+, we will need 
  // to add the Jquery migrate plugin as well.  Hopefully Firefox will fix the issue before then. 
  // See the following Mozilla bug for more details: https://bugzilla.mozilla.org/show_bug.cgi?id=454191
  function doMozHackKeydown() {
    if ($.browser.mozilla) {
      var inlineTags = this.$body.find('.inline-tag.completed');
      this.preBackspaceTagWidths = new Array();
      for (var i = 0; i < inlineTags.length; i++) {
        this.preBackspaceTagWidths.push($(inlineTags[i]).width());
      }
    }
  }

  function doMozHackKeyup() {
    if (!$.browser.mozilla) { 
      return false; 
    }

    if(this.preBackspaceTagWidths.length > 0) {
      var postBackspaceTags = this.$body.find('.inline-tag.completed');
      if(this.preBackspaceTagWidths.length === postBackspaceTags.length) {
        if(this.focusedTagSpan) {
          this.focusedTagSpan.remove();
          this.focusedTagSpan = null;
        } else {
          for(var i = 0; i < this.preBackspaceTagWidths.length; i++) {
            if(this.preBackspaceTagWidths[i] !== $(postBackspaceTags[i]).width()) {
              $(postBackspaceTags[i]).remove();
            }
          }
        }
      }
    }
    this.refreshTagInventory();
    return true;
  }

  function doMozHackKeypress() {
    // This is another hack to get around limitations in firefox...
    // The caret implementation for content editable is unstable in FF and it doesn't
    // respond to Rangy commands.  The only way to mimic the correct cursor position
    // is to create a temporary node (which absorbs the cursor), and then remove the temporary
    // node to set the cursor to the correct position.  Not sure if there is another way
    // to handle this or if Firefox has plans to fix it in the future.
    // If we upgrade to Jquery 1.9+, we will need to add the jquery migrate plugin to support the browser detection.
    if (!$.browser.mozilla) return false;

    var range = rangy.createRange();
    range.selectNode(this.newTag.get(0));
    var contents = range.cloneContents();
    range.insertNode(contents);
    this.newTag.remove();
    this.newTag = this.$body.find(this.NEW_TAG_SELECTOR);
    return true;
  }
})(jQuery);


/*1.0*/
/*global $ document*/

var SPICE = window.SPICE || {};

(function($) {
  var diffTagLists = SPICE.DynamicTaggingUtils.diffTagLists,

      defaultTextSingular = 'Use @ to tag people or # to tag products and vendors...',
      oldDefaultTextSingular = 'Use + to tag people and products and vendors...',
      defaultTextPlural = 'Tag more resources in the community',
      externalText = 'Click and type a product name',
      noUserTextPlural = 'Tag more resources in the community',

      KEY_BACKSPACE = 8,
      KEY_ENTER = 13,
      KEY_ESCAPE = 27,
      KEY_ARROW_UP = 38,
      KEY_ARROW_DOWN = 40,
      KEY_DELETE = 46,

      TAG_PREFIXES = {
        "ProductSelectorConfigFamily": "Family - ",
        "ProductSelectorConfigSelector": "Selector - ",
        "HowToArticle": "Article - ",
        "Plugin": 'Plugin - ',
        "LanguagePack": 'Language Pack - ',
        "SharedReport": 'Report - ',
        "Extension": 'Extension - ',
        "ExtensionCenterFeature": 'App Feature - ',
        "UserEmployee": "Employee - ",
        "User": "User - ",
        "MspProfile": "MSP - ",
        "Project": "Project - "
      };

  // DYNAMIC TAGGING MAIN EDITOR /////////////////////
  SPICE.DynamicTaggingMainEditor = function($element, $tagListField, options) {
    // Taglist Elements
    this.$element = $element;
    this.$tagListField = $tagListField;

    this.NEW_TAG_SELECTOR = '.add';
    this.SINGLE_LINE_HEIGHT = 50;
    this.SANDBOX_SELECTOR = '.ask_question_flow .wysihtml5-sandbox';
    this.isExternalProductSelector = this.$element.is('.external-product');
    this.activeTag = undefined;
    this.isFocus = false;
    this.regExp = /^[\w ]+$/;
    this.defaultTextSingular = options.atUsers ? defaultTextSingular : oldDefaultTextSingular;

    this.hideResults = options.hideResults;
    this.mainEditorFocus = options.mainEditorFocus;
    this.removeTags = options.removeTags;
    this.query = options.query;
    this.tags =[];

    this.initialize();
  };

  SPICE.DynamicTaggingMainEditor.prototype = {
    initialize: initialize,
    removeTag: removeTag,
    addTag: addTag,
    isDuplicate: isDuplicate,
    undoSelection: undoSelection,
    getDefaultText: getDefaultText,
    updateTagListField: updateTagListField,
    refreshTags: refreshTags,
    getPreviousTag: getPreviousTag,
    isLastTag: isLastTag,
    isFirstTag: isFirstTag,
    getFocus: getFocus,
    returnFocus: returnFocus,
    createAddButton: createAddButton,
    editMode: editMode,
    normalMode: normalMode,
    getListPosition: getListPosition,
  };

  // DOCUMENT READY ///////////////////////////////////

  function initialize() {
    //When you click outside of the tag area, switch back to normal mode
    $(document).on("click", $.proxy(clickOutsideTagEditor, this));

    //Get the focus when you click on the main list
    this.$element.on("click", $.proxy(clickTagList, this));

    //Enable the tag clicking
    this.$element.on("click", "li", $.proxy(clickTagListItem, this));

    //Special keys
    $(document).on('keydown.dynamic_tagging', $.proxy(onKeydown, this));

    //Get the query results
    this.$element.keyup($.proxy(getQueryResults, this));

    //Create the add button
    this.createAddButton();

  }

  function addTag(selection, tags) {
    var optionalPrefix = prefixSelectionLabel(selection),
        type = selection.type,
        label = optionalPrefix + selection.label,
        id = selection.id,
        mode = selection.mode,
        isDuplicate = this.isDuplicate(id, type),
        diff = diffTagLists(tags || [], this.tags || []);

    if(diff.changed) {
      this.refreshTags(tags);
    }

    this.activeTag = this.$element.find(this.NEW_TAG_SELECTOR);
    this.activeTag
      .html(label)
      .removeClass("add active")
      .data({ id: id, type: type, selection: selection });

    this.normalMode();

    if(isDuplicate) {
      this.activeTag
        .addClass('duplicate')
        .html('Duplicate')
        .stop()
        .delay(1000)
        .animate({ opacity: 0 }, 500, function() {
          $(this).remove();
        });
    } else {
      this.tags.push(selection);
      //Update the taglist
      this.updateTagListField();
    }

    this.createAddButton();

    //Get the next focus
    if(this.isFocus) {
      this.getFocus();
    }
  }

  function returnFocus(tag) {
    if(!tag) { return; }
    tag.focus();

    if(!tag.is('.active')) { return; }
    this.activeTag.html(this.text().trim());
    tag = this.activeTag.get(0);

    if(window.getSelection && document.createRange) {
      var range = document.createRange();
      range.selectNodeContents(tag);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if(document.body.createTextRange) {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(tag);
      textRange.collapse(false);
      textRange.select();
    }
  }

  function onFocusReturned(e) {
    var $this = $(this);
    if (!$this.is('.active')) { return; }

    // Remove whitespace
    $this.html(jqueryFocusObj.html().split('&nbsp;').join(''))

    if(typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(this);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if(typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(this);
      textRange.collapse(false);
      textRange.select();
    }
  }

  function undoSelection () {
    //Unset the focus on the taglist
    this.isFocus = false;

    //If there is an active tag
    if(!this.activeTag) {
      return;
    }

    //If this is the add button
    if(this.activeTag.hasClass("add")) {
      //Set the label back to the default text
      this.activeTag.html(this.getDefaultText());

      //Remove the primarytag flag
      this.activeTag.removeAttr("data-primarytag");
    }

    //Switch back to normal mode
    this.normalMode();
  }

  function getDefaultText (isTagAdded) {
    var tagList = this.$element.find('li'),
        totalTags = isTagAdded ? tagList.length + 1 : tagList.length;

    if(this.isExternalProductSelector) {
      return externalText;
    } else {
      return totalTags <= 1 ? this.defaultTextSingular : defaultTextPlural ;
    }
  }

  function getTagCount() {
    return this.$element.find('li').length;
  }

  function getListPosition() {
    return {
      xPos: this.activeTag.offset().left,
      yPos: this.activeTag.offset().top + this.activeTag.outerHeight()
    };
  }

  function refreshTags(tags) {
    this.tags = tags;
    this.$element.html('');
    tags.forEach(function(tag) {
      var newElem = $('<li class="mode-research"></li>')
        .html(tag.label)
        .data({
          id: tag.id,
          type: tag.type,
          primarytag: tag.isPrimary,
          selection: tag
        })
        .attr('contenteditable', false);

      this.$element.append(newElem);
    }.bind(this));
    this.createAddButton();

    if(this.$element.outerHeight() > this.SINGLE_LINE_HEIGHT) {
      $(this.SANDBOX_SELECTOR).addClass('two-tag-lines')
    } else {
      $(this.SANDBOX_SELECTOR).removeClass('two-tag-lines')
    }
  }

  function updateTagListField () {
    // bound by app/assets/javascript/ask_questions.js.erb
    $.event.trigger("dynamicTagListChanged");

    //Update the tag list
    var tagList = this.$element.find('li'),
      tagListArray = _.map(tagList, function(tagNode) {
        var currentTag = $(tagNode),
          currentTagID = currentTag.data('id'),
          currentTagType = currentTag.data('type');

        if(currentTagID) {
          return "" + currentTagID + "&" + currentTagType;
        }
 n(tagString); } );
    this.$tagListField.val(tagListArray.join(','));
  }

  function getPreviousTag () {
    //Click the previous tag
    if(!this.isFirstTag() && this.activeTag) {
      this.normalMode();
      this.activeTag.prev('li').click();
    }
  }

  function getNextTag () {
    //Click the next tag
    if(!this.isLastTag() && this.activeTag) {
      this.normalMode();
      this.activeTag.next('li').click();
    }
  }

  function isLastTag (tag) {
    return tag && this.activeTag.is(':last-child');
  }

  function isFirstTag (tag) {
    return tag && this.activeTag.is(':first-child');
  }

  function getFocus () {
    this.isFocus = true;
    this.mainEditorFocus(this.$element.find(this.NEW_TAG_SELECTOR));
    this.$element.find(this.NEW_TAG_SELECTOR).click();
  }

  function createAddButton () {
    //Create a new add button
    this.$element.append('<li class="add">'+ this.getDefaultText(true) +'</li>');
  }

  function editMode (e) {
    //Undo the current selection
    this.hideResults();
    this.undoSelection();

    //Get the new target
    this.activeTag = $(e.target);
    var width = this.activeTag.width();

    this.activeTag.addClass("active");

    //If the active tag is the add button
    if(this.activeTag.hasClass('add')) {
      this.activeTag
        .attr({
          "contenteditable": true, //Make the new section editable
          "data-primarytag": "true" //If they click on it, it is a primary tag
        })
        .html("&nbsp;") //Clear out the text of the tag
        .css({"min-width": width});
    }

    //Let the other modules know that the main editor has focus
    this.mainEditorFocus(this.activeTag);

    //Give the active tag the focus
    this.activeTag.focus();
    this.isFocus = true;
  }

  function normalMode () {
    if(!this.activeTag) {
      return;
    }

    //Unset the active status
    this.activeTag
      .removeClass("active")
      .attr("contenteditable", false)
      .css({"min-width": "inherit"})
      .blur();
  }

  function clickOutsideTagEditor(e){
    var target = $(e.target).parent()[0],
        taglist = this.$element[0],
        autolistSections = $('.autolist .section, .autolist .container'),
        targetIsAutolist = $.inArray(target, autolistSections) !== -1;
    if (target !== taglist && !targetIsAutolist) {
      this.hideResults();
      this.undoSelection();
    } else if (targetIsAutolist) {
      this.returnFocus(this.activeTag);
    }
  }

  function clickTagList (e) {
    //Stop the bubbling of the event
    e.preventDefault();
    e.stopPropagation();

    //Get the focus of the taglist
    this.getFocus();
  }

  function clickTagListItem (e) {
    this.isFocus = true;
    this.activeTag = $(e.target);

    //Stop the bubbling of the event
    e.preventDefault();
    e.stopPropagation();

    //Shift to edit mode
    this.editMode(e);
  }

  function onKeydown(e){
    var keyCode = e.keyCode || e.which,
        isAutoListActive = $('.autolist').length > 0;

    // Skip if Not a special key
    if( !this.isFocus || !_.contains(
      [ KEY_DELETE, KEY_BACKSPACE, KEY_ESCAPE ], keyCode
    )) { return true; }
    switch(keyCode) {
      case KEY_ESCAPE:
        //Undo the selection
        e.preventDefault();
        this.hideResults();
        this.undoSelection();
        break;
      case KEY_DELETE, KEY_BACKSPACE:
        deleteKeyPressed.call(this, e);
        break;
    }
  }

  function deleteKeyPressed(e) {
    if(!(this.activeTag && this.activeTag.length) || !this.isFocus) {
      return true;
    }
    if(!this.activeTag.hasClass('add')) {
      e.preventDefault();
      if(this.activeTag.data('selection')) {
        this.removeTags([this.activeTag.data('selection')]);
        this.updateTagListField();
      }

      //Get the focus on the last new tag
      this.getFocus();
    } else if (this.activeTag.html() === "&nbsp;" || this.activeTag.html() === "") {
      e.preventDefault();

      //Get the previous tag
      this.getPreviousTag();
    }
  }

  function getQueryResults (e) {
    //As long as the ESC button isn't pressed
    var keyCode = e.keyCode || e.which,
        query = $(e.target).text(),
        debounceTrigger = _.debounce(this.query, 300);

    if(_.contains([ KEY_ESCAPE, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ENTER ], keyCode)) {
      return true;
    }

    this.activeTag
      .removeClass('mode-research mode-user mode-help')
      .addClass('mode-research');

    debounceTrigger({
      query: query,
      activeTag: this.activeTag
    });
  }

  function removeTag (tag) {
    //Remove the tag
    tag.blur();
    tag.remove();

    //Update the default text for the add button
    this.$element.find(this.NEW_TAG_SELECTOR).html(this.getDefaultText());

    //Update the tag list
    this.removeTags([tag.data.selection]);
  }

  function prefixSelectionLabel(selection) {
    var type = selection.type;
    // Set optional prefix
    if (type === "ProductSelectorConfig") {
      type += selection.isFamily ? "Family" : "Selector";
    } else if (type === "User" && selection.isEmployee) {
      type += "Employee";
    }
    return TAG_PREFIXES[type] || "";
  }

  function isDuplicate (tagID, tagType) {
    var tagListItems = this.$element.find('li');

    similarItems = tagListItems.filter(function() {
      return tagID === $(this).data('id') && tagType === $(this).data('type');
    });

    return tagListItems.length > 1 && similarItems.length > 0;
  }

})(jQuery);
/*1.0*/

  // Utility functions

  // Cursor manipulation object

  // Tag pop down

  // Inline editor

  // External tag editor

/*global $ document*/

var SPICE = window.SPICE || {};

(function($) {
  /*
   * The dynamic tagging engine listens for signals querying for various tag types,
   * requests those queries from the server, and emits an event when queries are returned
   */
  SPICE.DynamicTaggingEngine = DynamicTaggingEngine;

  $(document).ready(function() {
    var component =  $('[data-component="DynamicTagging"]');
    new DynamicTaggingEngine(
      component,
      { autodetect: component.data('enableAutodetect') }
    );
  });

  function DynamicTaggingEngine($element, options) {
    this.$element = $element;
    this.options = options || {};
    this.isNewPost = $element.is('[data-new-post-form]');
    this.$tagListField = $element.find('[data-tag-list-field]');
    this.$tagList = $element.find('[data-tagging-list]');
    this.$taggingControls = $element.find('[data-tagging-controls]');
    // Can't bind on the form's submit event for some reason,
    // so bind submit events to the submit button's click event
    this.FORM_SUBMIT_SELECTOR = '#ask_question_submit, #post_form_submit'; 
    this.IFRAME_SELECTOR = '.wysihtml5-sandbox';
    this.VISIBLE_TEXT_HEIGHT = 200;

    this.savedTags = [];

    // default to checking dom elements if we haven't specified the options
    this.options.showInlineEditor = this.$element.length > 0;
    this.options.showMainEditor = this.$tagList.length > 0;

    this.autolist = new SPICE.DynamicTaggingAutolist({
      onSelectedTag: this.onSelectedTag.bind(this),
      onSkipSelection: this.onSkipSelection.bind(this)
    });

    if(this.options.showMainEditor) {
      this.mainEditor = new SPICE.DynamicTaggingMainEditor(this.$tagList, this.$tagListField, {
        atUsers: this.options.autodetect,
        hideResults: this.onHideResults.bind(this),
        mainEditorFocus: function() {}, // Do nothing until the wysiwyg editor is initialized
        query: this.onQuery.bind(this),
        removeTags: this.onRemovedTags.bind(this),
        addTags: this.onAddTags.bind(this)
      });
    }

    this.initialize(this.options);
  }

  DynamicTaggingEngine.prototype = {
    initialize: initialize,
    getResults: getResults,
    abortRequest: abortRequest,
    getQueryInfo: getQueryInfo,
    getListPosition: getListPosition,
    formatQuery: formatQuery,
    updateFormSize: updateFormSize,
    addExistingTags: addExistingTags,

    // actions
    onQuery: onQuery,
    onSelectedTag: onSelectedTag,
    onSkipSelection: onSkipSelection,
    onHideResults: onHideResults,
    onRemovedTags: onRemovedTags,
    onAddTags: onAddTags,
    onAutodetectFound: onAutodetectFound,
  };

  // The actions that get passed in to child objects need to be
  // explicitly bound to the engine object because otherwise they
  // will assume the child object as their `this` instead.
  function initialize() {
    $(document).on('editor_ready.wysihtml5', function(e, editor) {
      this.wysiwygEditor = editor;
      this.wysiwygEditor.on("load", onEditorLoad.bind(this));
    }.bind(this));
    // When the form is submitted with the tags - EXTREMELY IMPORTANT,
    // if the content isn't wrapped in a <p> tag,
    // the inline tags won't show bubbles due to a bug in the editor
    this.$element.find(this.FORM_SUBMIT_SELECTOR).click(onClickSubmit.bind(this));
    if(this.mainEditor) {
      this.addExistingTags(this.mainEditor.$element.find('[data-existing]'));
    }
  }

  function onClickSubmit(e) {

    if(this.inlineEditor) {
      this.inlineEditor.onClickSubmit(e);
    }

    //Sync textarea before submit
    this.wysiwygEditor.synchronizer.sync(true);
  }

  function onEditorLoad() {
    // Initializes components that require the the wysiwyg editor to be done loading first
    this.$iframe = $(this.IFRAME_SELECTOR); // This selector is generated by the wysiwyg library
    this.$iframeDoc = $(this.wysiwygEditor.composer.doc);
    this.cursor = new SPICE.DynamicTaggingCursor(this.wysiwygEditor, {
      stayIn: '[data-inline-tag="new"]'
    });

    this.updateFormSize();

    // override the wysiwyg editor's built in styling procedure
    // so that we can keep the padding at the bottom of the new 
    // post form
    this.wysiwygEditor.on('focus:composer', $.proxy(this.updateFormSize, this));
    this.wysiwygEditor.on('blur:composer', $.proxy(this.updateFormSize, this));
    //Create main objects - Disable for IE8

    if(User.can_see_inline_tagging && this.options.showInlineEditor) {
      this.inlineEditor = new SPICE.DynamicTaggingInlineEditor( this.wysiwygEditor, { 
        cursor: this.cursor,
        atUsers: this.options.autodetect,
        query: this.onQuery.bind(this),
        hideResults: this.onHideResults.bind(this),
        remots();
        }.bind(this),
        removeTags: onRemovedTags.bind(this),
        addTags: onAddTags.bind(this),
        keydown: this.autolist.onKeydown.bind(this.autolist)
      });

      this.mainEditor.mainEditorFocus = this.inlineEditor.onMainEditorFocus
        .bind(this.inlineEditor);

      $(this.wysiwygEditor.composer.doc.body).focus(function() {
        this.mainEditor.undoSelection();
      }.bind(this));
    }
  }

  function addExistingTags (tags) {
    var existingTagData = [];
    var _this = this;
    tags.each(function(index, tag) {
      var currentTagData = $(tag).data('selection');
      existingTagData.push(currentTagData);
      _this.savedTags.push(currentTagData);
    });
    this.onAddTags(existingTagData);
  }

  /*************
   * CALLBACKS *
   *************/
  function onAutodetectFound ($detected) {
    this.$detected = $detected;
    this.autodetect.update(this.$detected);
    $(this.wysiwygEditor.composer.doc.body).focus();
  }

  function onHideResults() {
    this.queryData = {};
    this.autolist.update(false, false, this.queryData);
  }

  function onQuery(info) {
    // Store a reference to the activeTag
    this.activeTag = info.activeTag;

    this.abortRequest();
    this.getResults(this.formatQuery(infyData);
      }.bind(this))
      .fail(function (msg) {});
  }

  function onSelectedTag(selectedTag) {
    var tags = _.clone(this.savedTags),
        selection = _.clone(selectedTag), // just an object, not a DOM element
        isDuplicate = isDuplicateTag(selectedTag, this.savedTags),
        activeTag;

    selection.isPrimarytag = this.inlineEditor ? !this.inlineEditor.activeTag : null;

    this.autolist.update(false, true, []);

    if(!isDuplicate && selection) {
      this.savedTags.push(selection);
    }

    if(selection) {
      this.mainEditor.addTag(selection, tags);
      this.updateFormSize();
    }

    if (this.inlineEditor) {
      this.inlineEditor.addTag(activeTag, selection);
    }

    $(document).trigger('update.dynamic_tagging', [selectedTag]);
  }

  function onSkipSelection() {
    this.onHideResults();
    if(this.inlineEditor) {
      this.inlineEditor.convertTagToText(this.activeTag);
    }
  }

  function onMainEditorFocus(tag) {
    // It's possible that this function gets called before the inline editor gets initialized
    if(this.inlineEditor) {
      this.inlineEditor.onMainEditorFocus();
    }
  }

  function onRemovedTags(removedTags) {
    var _this = this;

    this.savedTags = this.savedTags.filter(function(sTag) {
      return !_.some(removedTags, function(rTag) {
        return rTag.id === sTag.id && rTag.type === sTag.type;
      });
    });

    removedTags.forEach(function(rTag) {
      if(_this.inlineEditor) {
        _this.inlineEditor.removeTag(rTag.id, rTag.type);
      }
      // Trigger event for inline product reviews
      $(document).trigger('remove_tag.dynamic_tagging', [rTag]);
    });

    this.mainEditor.refreshTags(this.savedTags);
  }

  function onAddTags(addedTags) {
    var _this = this;
    addedTags.forEach(function(aTag) {
      if(!isDuplicateTag(aTag, _this.savedTags)) {
        _this.savedTags.push(aTag);
      }
    });

    this.mainEditor.refreshTags(this.savedTags);
  }

  function onRemoveAutolistFocus() {
    this.onHideResults();
    this.mainEditor.undoSelection();
  }

  function formatQuery(args) {
    var query = args.query.replace(/^[\s\u200B]/, '');
    this.queryInfo = this.getQueryInfo(query);
    query = query.trim().replace(/^[\#\@\+]/, '');

    // sanity check
    if( !this.queryInfo || !query || query.constructor !== String) {
      return;
    }

    return query;
  }

  function getQueryInfo(query) {
    var firstChar = query[0],
        urls = {
          '@': { type: 'user', url: '/tagging/autocomplete/users' },
          '#': { type: 'research', url: '/tagging/autocomplete/research' },
          all: { type: 'all', url: '/tagging/subject_autocomplete' }
        };
    return (this.options.autodetect && firstChar in urls) ? urls[firstChar] : urls.all;
  }

  function getResults(query) {
    if(!query) { 
      var dummy = $.Deferred();
      dummy.reject('No valid query'); 
      this.onHideResults();
      return dummy;
    }
    // Get reference to main object
    var _this = this;

    // Load the search results
    this.ajaxRequest = $.ajax({
      url: _this.queryInfo.url,
      data: {
        object_type: "Post",
        term: query,
        external: _this.queryInfo.isExternalProductSelector || false
      },
      success: function(data) {
        _this.showAutolist = true;
        _this.refreshAutolist = true;

        data.tags = data.results || data.research_group.concat(data.users_group.slice(4));
        data.type = _this.queryInfo.type;
        data.coords = _this.getListPosition(_this.activeTag);
        data.skippable = _this.activeTag.is('[data-autodetect]') || !data.tags.length;
        _this.queryData = data;
      }
    });
    return this.ajaxRequest;
  }

  function getListPosition(node) {
    var inIframe = this.$iframe[0].contentDocument === node.context;
        leftOffset = inIframe ? this.$iframe.offset().left : 0,
        topOffset = inIframe ? this.$iframe.offset().top : 0,
        textareaScroll = inIframe ? this.$iframeDoc.scroll().scrollTop() : 0;

    return {
      xPos: parseInt(leftOffset + node.offset().left) + 10,
      yPos: parseInt(topOffset + node.offset().top + 30 - textareaScroll)
    };
  }

  function abortRequest() {
    if( this.ajaxRequest ) {
      this.ajaxRequest.abort();
    }
  } 

  function isDuplicateTag(tag, collection) {
    if(!tag || !collection.length) { return false; }

    // in some browsers, the tag.label can include HTML so we
    // want to make sure we're only getting the text of the label.
    // Needs to be wrapped in an extra div tag because text-only 
    // labels with parentheses throw an error in jQuery.
    var labelText = $('<div>' + tag.label + '</div>').text();

    return collection.filter(function(cTag) {
      var cLabelText = $('<div>' + cTag.label + '</div>').text();
      return parseInt(cTag.id) === parseInt(cTag.id) && cLabelText === labelText;
    }).length > 0;
  }

  function updateFormSize() {
    if (!this.isNewPost || !this.$iframe) return;

    var newPadding = this.mainEditor.$element.outerHeight() + 18;

    this.$iframe
      .css({
        'padding-bottom': newPadding + 'px',
      })
      .height(this.VISIBLE_TEXT_HEIGHT + newPadding);
  }
})(jQuery);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/external-product"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="',  id ,'" class="product" data-default="',  link_safe ,'">\n  <h5>',  label ,'</h5>\n  <div class="content">\n    <div class="module">\n      ',  link ,'\n    </div>\n    <div class="info">\n      <div class="label">Copy the code below to use on your site:</div>\n      <div class="display-link">\n        ',  link_safe ,'\n      </div>\n    </div>\n    <button class="sui-bttn" data-clipboard-text="',  link ,'">Copy to Clipboard</button>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_app"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-app">\n\t\n\t<div class="top">\n\n\t\t<div class="product-image-wrapper">\n\t\t\t<a href="',  tag_link ,'" data-tag-link="Image link"><img class="product-image" src="',  UrlHelpers.avatar_path(tag_image) ,'" /></a>\n\t\t</div>\n\t\t\n\t\t<div class="product-info">\n\t\t\t<h5><span>',  tag_subtype ,': </span><a href=',  tag_link ,'>',  tag_title ,'</a></h5>\n\n\t\t\t');  if (tag_categories.length > 0) { ; __p.push('\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_categories.length && i < 5; i++) { ; __p.push('\n\t\t\t\t\t<li>',  tag_categories[i].display_name ,'</li>\n\t\t\t\t');  } ; __p.push('\t\n\t\t\t\t</ul>\n\t\t\t');  } ; __p.push('\n\n\t\t\t<div class="secondary-info">\n\t\t\t\t\n\t\t\t\t',  SUI.rating(tag_rating).html() ,'\n\n\t\t\t\t<a class="reviews" href=',  tag_link ,' data-tag-link="Reviews link">',  tag_times_rated ,' ');  if(tag_num_reviews == 1) { ; __p.push(' review ');  } else { ; __p.push(' reviews ');  } ; __p.push('</a> <span class="downloads">',  tag_downloads ,'</span>\n\n\t\t\t\t<p>by <a href="',  tag_author_link ,'">',  tag_author ,'</a></p>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class="intro">\n\t\t<div class="description">',  tag_intro ,'</div>\n\t\t<a href="',  tag_link ,'" class="read-more" data-tag-link="Read more link">Read more</a>\n\t</div>\n\n\t',  tag_content_block ,'\n\n\t<a href="#" class="modal-close"></a>\n\n\t<div class="context-controls">\n\t\t<a href=',  tag_link ,' class="sui-bttn sui-bttn--primary" data-tag-link="Get app link">Get the App</a>\n\t</div>\n\n</div>\t\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_howto"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-howto">\n\n\t<div class="top">\n\n\t\t<div class="product-info">\n\t\t\t<h5><span>How-to Article: </span><a target="_blank" href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\n\t\t\t');  if (tag_categories.length > 0) { ; __p.push('\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_categories.length && i < 5; i++) { ; __p.push('\n\t\t\t\t\t<li><a target="_blank" href="',  tag_categories[i].link ,'" data-tag-link="Category link">',  tag_categories[i].display_name ,'</a></li>\n\t\t\t\t');  } ; __p.push('\n\t\t\t\t</ul>\n\t\t\t');  } ; __p.push('\n\n\t\t\t<p class="intro">\n\t\t\t\t',  tag_intro ,'\n\n\t\t\t\t');  if(tag_intro_full == false) { ; __p.push('\n\t\t\t\t\t<a target="_blank" href=',  tag_link ,' data-tag-link="Read more link">Read More</a>\n\t\t\t\t');  } ; __p.push('\n\t\t\t</p>\n\n\t\t\t');  if (tag_sections.length > 0) { ; __p.push('\n\n\t\t\t\t<h5>Steps Include:</h5>\n\t\t\t\t<div class="sections">\n\t\t\t\t\t');  for(var i=0; i < tag_sections.length && i < 6; i++) { ; __p.push('\n\t\t\t\t\t\t<li><span>',  tag_sections[i].index + 1 ,'.</span>',  tag_sections[i].step.title ,'</li>\n\t\t\t\t\t');  } ; __p.push('\n\t\t\t\t</div>\n\n\t\t\t\t');  if(tag_sections.length > 6) { ; __p.push('\n\t\t\t\t\t<a target="_blank" class="more-text" href=',  tag_link ,' data-tag-link="Steps and more link">and more...</a>\n\t\t\t\t');  } ; __p.push('\n\n\t\t\t');  } ; __p.push('\n\n\t\t</div>\n\n\t</div>\n\n\t',  tag_content_block ,'\n\n\t<a href="#" class="modal-close"></a>\n\n\t<div class="context-controls">\n\t\t<a href=',  tag_link ,' class="sui-bttn sui-bttn--primary">Open How To Article</a>\n\t</div>\n\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_marketplaceproduct"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-marketplace-product">\n  <div class="product-focus__header">\n    <img class="product-focus__header-image" src="',  tag_image ,'"></img>\n    <div class="product-focus__header-about">\n      <h5><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n      <div class="product-focus__header-detail">\n        ',  SUI.rating(tag_rating).html() ,'\n        <a href=',  tag_link ,' data-tag-link="Title link">',  tag_num_reviews ,' Reviews </a>\n        ');  if (tag_badge) { ; __p.push('\n          <img class="product-focus__header-premium" src=',  tag_badge ,' />\n        ');  } ; __p.push('\n      </div>\n    </div>\n  </div>\n  <div class="product-focus__description">\n    ',  tag_short_description ,'\n  </div>\n  <a class="more-info" href=',  tag_link ,' data-tag-link="More info link">More info</a>\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_msp"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-msp">\n\t\n\t<div class="msp-info">\n\t\t<h5><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\t\t<div class="category"><a href="/service-providers" data-tag-link="Service providers link">MANAGED SERVICE PROVIDER</a></div>\n\n\t\t');  if (tag_services.length > 0) { ; __p.push('\n\t\t\t<div class="services">\t\n\t\t\t\t<h5>Services');  if (tag_service_type) { ; __p.push('<span> - Available ',  tag_service_type ,'</span> ');  } ; __p.push('</h5>\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_services.length; i++) { ; __p.push('\n\n\t\t\t\t\t<li>',  tag_services[i] ,'</li>\n\n\t\t\t\t');  } ; __p.push('\t\n\t\t\t\t</ul>\n\t\t\t</div>\t\n\t\t');  } ; __p.push('\n\n\t\t');  if (tag_certificates.length > 0) { ; __p.push('\n\t\t\t<div class="certificates">\t\n\t\t\t\t<h5>Certifications</h5>\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_certificates.length; i++) { ; __p.push('\n\n\t\t\t\t\t<li>',  tag_certificates[i] ,'</li>\n\n\t\t\t\t');  } ; __p.push('\t\n\t\t\t\t</ul>\n\t\t\t</div>\t\n\t\t');  } ; __p.push('\n\n\t\t<div class="activity">\t\n\t\t\t<h5>Activity <span>in Spiceworks</span></h5>\n\t\t\t<ul>\n\t\t\t\t<li><span>',  tag_num_answers ,'</span> Best Answers</li>\n\t\t\t\t<li><span>',  tag_num_helpful ,'</span> Helpful Posts</li>\n\t\t\t\t<li><span>',  tag_num_reviews ,'</span> Product Reviews</li>\t\t\t\t\t\t\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\t\n\n\t</div>\n\n\t');  if (tag_top_employees.length > 0) { ; __p.push('\n\n\t<div class="context-list">\n\t\t<h5>',  tag_title ,' Employees in Spiceworks</h5>\n\t\t<ul>\n\t\t\t');  for(var i=0; i < tag_top_employees.length && i < 3; i++) { ; __p.push('\n\t\t\t\n\t\t\t\t<li ');  if(i == 2) { ; __p.push(' class="last" ');  } ; __p.push('>\n\t\t\t\t\t<a href=',  tag_top_employees[i].link ,' data-tag-link="Top employee image link"><img src=',  tag_top_employees[i].image ,' /></a>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a href=',  tag_top_employees[i].link ,' data-tag-link="Top employee link">',  tag_top_employees[i].display_name ,'</a>\n\t\t\t\t\t\t<span>',  tag_top_employees[i].years ,'</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\n\t\t\t');  } ; __p.push('\t\n\t\t</ul>\n\t</div>\n\n\t');  } else { ; __p.push('\n\n\t\t<div class="context-controls empty"></div>\n\n\t');  } ; __p.push('\t\n\n\t<a href="#" class="modal-close"></a>\n\n\t',  tag_content_block ,'\n\n</div>\t\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_product"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-product">\n\t\n\t<div class="top">\n\n\t\t<div class="product-image-wrapper">\n\t\t\t<a href="',  tag_link ,'" data-tag-link="Image link"><img class="product-image" src="',  tag_image ,'" /></a>\n\t\t</div>\n\t\t\n\t\t<div class="product-info">\n\t\t\t<h5><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\n\t\t\t');  if (tag_categories.length > 0) { ; __p.push('\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_categories.length && i < 5; i++) { ; __p.push('\n\t\t\t\t\t<li><a href="',  tag_categories[i].link ,'" data-tag-link="Category link">',  tag_categories[i].display_name ,'</a></li>\n\t\t\t\t');  } ; __p.push('\t\n\t\t\t\t</ul>\n\t\t\t');  } ; __p.push('\n\n\t\t\t<div class="secondary-info">\n\t\t\t\t\n\t\t\t\t',  SUI.rating(tag_rating).html() ,'\n\n\t\t\t\t<a class="reviews" href=',  tag_reviews_link ,' data-tag-link="Reviews link">',  tag_num_reviews ,' ');  if(tag_num_reviews == 1) { ; __p.push(' review ');  } else { ; __p.push(' reviews ');  } ; __p.push('</a>\n\t\t\t\n\t\t\t\t');  if (tag_badge) { ; __p.push('\n\t\t\t\t\t<img src=',  tag_badge ,' />\n\t\t\t\t');  } ; __p.push('\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t');  if (tag_review_text) { ; __p.push('\n\t\t\n\t\t');  var tag_read_more = tag_link + "&target=product_comment_" +tag_review_id; ; __p.push('\n\n\t\t<div class="testimonial">\n\n\t\t\t');  if (tag_review_is_spicy) { ; __p.push('\n\t\t\t\t<span class="review-label">Spicy Review</span>\n\t\t\t');  } ; __p.push('\n\n\t\t\t');  if (tag_review_rating != 0) { ; __p.push(' ',  SUI.rating(tag_review_rating).html() ,' - ');  } ; __p.push('<span class="testimonial-text" data-link="',  tag_read_more ,'">"',  tag_review_text ,'"</span>\n\n\t\t</div>\n\n\t\t<a class="username" href=',  tag_review_user_link ,' data-tag-link="Review user link"><img src=',  tag_review_icon ,' /><span>',  tag_review_name ,'</span></a>\n\n\t');  } else { ; __p.push('\n\n\t\t');  if (tag_is_guest === "false" && User.verified) { ; __p.push('\n\t\t\t<div class="first-review">Be the first to <a href=',  tag_reviews_link ,' data-tag-link="Write review link">write a review</a>.</div>\n\t\t');  } else { ; __p.push('\n\t\t\t');  if(tag_is_guest !== "false") { ; __p.push('\n\t\t\t\t<div class="first-review">Please log in to write a review.</div>\n\t\t\t');  } ; __p.push('\n\t\t');  } ; __p.push('\n\n\t');  } ; __p.push('\n\n\t',  tag_content_block ,'\n\n\t<a class="more-info" href=',  tag_link ,' data-tag-link="More info link">More info</a>\n\t<a class="modal-close" href="#"></a>\n\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_project"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-project">\n\t\n\t<div class="project-info">\n\t\t<h5><span>Project: </span><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\t\t<div class="author">by <a href="',  tag_author_link ,'" data-tag-link="Author link">',  tag_author ,'</a></div>\n\t\t\n\t\t');  if (tag_intro) { ; __p.push('\n\t\t\t<p>',  tag_intro ,'</p>\n\t\t');  } ; __p.push('\n\n\t\t');  if (tag_technologies.length > 0) { ; __p.push('\n\t\t\t<div class="technologies">\t\n\t\t\t\t<h5>Technologies Used</h5>\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_technologies.length && i < 4; i++) { ; __p.push('\n\t\t\t\t\t<li><div class="image-wrapper"><a rel="tooltip" title="',  tag_technologies[i].display_name ,'" href="',  tag_technologies[i].link ,'" data-tag-link="Technology link"><img src=',  tag_technologies[i].image ,' /></a></div></li>\n\t\t\t\t');  } ; __p.push('\t\n\t\t\t\t</ul>\n\t\t\t</div>\t\n\t\t');  } ; __p.push('\n\t</div>\n\n\t<a href="#" class="modal-close"></a>\n\n\t',  tag_content_block ,'\n\n\t<div class="context-controls empty"></div>\n\n</div>\t\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_selector"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-selector">\n\t\n\t<div class="top">\n\n\t\t');  if (tag_image != "") { ; __p.push('\n\n\t\t<div class="product-image-wrapper">\n\t\t\t<a href="',  tag_link ,'" data-tag-link="Image link"><img class="product-image" src="',  tag_image ,'" /></a>\n\t\t</div>\n\t\t\n\t\t');  } ; __p.push('\n\n\t\t<div class="product-info">\n\t\t\t<h5><span>Reviews: </span><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\n\t\t\t');  if (tag_categories.length > 0) { ; __p.push('\n\t\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_categories.length && i < 5; i++) { ; __p.push('\n\t\t\t\t\t<li><a href="',  tag_categories[i].link ,'" data-tag-link="Category link">',  tag_categories[i].display_name ,'</a></li>\n\t\t\t\t');  } ; __p.push('\t\n\t\t\t\t</ul>\n\t\t\t');  } ; __p.push('\n\n\t\t\t<div class="secondary-info">\n\t\t\t\t\n\t\t\t\t<span class="num-products">',  tag_num_products ,'</span>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t');  if (tag_top_products.length > 0) { ; __p.push('\n\n\t<div class="context-list selectors">\n      <h5>Top ',  tag_title ,' <a href=',  tag_link ,' data-tag-link="See all link">See all</a></h5>\n      <ul>\n        ');  for(var i=0; i < tag_top_products.length && i < 3; i++) { ; __p.push('\n\n          <li ');  if(i == 2) { ; __p.push(' class="last" ');  } ; __p.push('>\n            <a href=',  tag_top_products[i].link ,' data-tag-link="Top product icon link"><img src=',  tag_top_products[i].icon ,' /></a>\n            <div>\n              <a href=',  tag_top_products[i].link ,' data-tag-link="Top product link"><span>',  i+1 ,'.</span>',  tag_top_products[i].display_name ,'</a>\n\t\t\t  <span class="rating">',  SUI.rating(tag_top_products[i].rating).html() ,' (',  tag_top_products[i].num_reviews ,')</span>\n\t\t\t<div>  \n          </li>\n\n        ');  } ; __p.push(' \n      </ul>\n    </div>\n\n    ');  } ; __p.push('\n\n\t',  tag_content_block ,'\n\n\t<div class="context-controls">\n\t\t<a href=',  tag_link ,' class="sui-bttn sui-bttn--primary" data-tag-link="See all products link">See all Products</a>\n\t</div>\n\n\t<a class="modal-close" href="#"></a>\n\n</div>\t\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_user"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-user">\n\n\t<div class="top">\n\n\t\t');  if (tag_image != "") { ; __p.push('\n\n\t\t\t<div class="product-image-wrapper">\n\t\t\t\t<a href="',  tag_link ,'" data-tag-link="Image link"><img class="product-image" src="',  tag_image ,'" /></a>\n\t\t\t</div>\n\n\t\t');  } ; __p.push('\n\n\t\t<div class="product-info">\n\n\t\t\t');  if (tag_username != "" && tag_title != "") { ; __p.push('\n\t\t\t\t<h5><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\t\t\t\t<div class="username ',  tag_user_role_class ,'">',  tag_username ,'</div>\n\t\t\t');  } else if (tag_title != "") { ; __p.push('\n\t\t\t\t<h5><a class="',  tag_user_role_class ,'" href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\t\t\t');  } else { ; __p.push('\n\t\t\t\t<h5><a class="',  tag_user_role_class ,'" href=',  tag_link ,' data-tag-link="Title link">',  tag_username ,'</a></h5>\n\t\t\t');  } ; __p.push('\n\n\t\t\t<div>\n\t\t\t\t<span class="followers">',  tag_followers ,'</span>\n\n\t\t\t\t<div class="user-actions">\n\t\t\t\t\t');  if(!tag_is_followed) { ; __p.push('\n\n\t\t\t\t\t\t<a class="sui-followbutton sui-bttn sui-followbttn" data-toggle="followbttn" href="#" data-original-title="" data-following="false" title=""><span class="button-text">Follow</span></a>\n\n\t\t\t\t\t');  } else { ; __p.push('\n\n\t\t\t\t\t\t<a class="sui-followbutton sui-bttn sui-followbttn following" data-toggle="followbttn" href="#" title="" data-following="true" data-original-title="Unfollow"><span class="button-text">Following</span></a>\n\n\t\t\t\t\t');  } ; __p.push('\n\n\t\t\t\t\t');  message_url = "/messages/new_message?redirect=/profile/show/"+ encodeURIComponent(tag_username) +"?tab=activity&amp;to="+ encodeURIComponent(tag_username) ; __p.push('\n\t\t\t\t\t');  message_alt = "Send a private message to "+tag_username ; __p.push('\n\t\t\t\t\t<a href=',  message_url ,' class="sui-bttn send-message" title=',  message_alt ,' data-tag-link="Message link"><i class="sui-icon sui-icon-email sui-icon--16"></i></a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class="badges shared-badges-div">\n\t\t\t\t');  for(var i=0; i < tag_badges.length; i++) { ; __p.push('\n\t\t\t\t\t',  tag_badges[i] ,'\n\t\t\t\t');  } ; __p.push('\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<ul class="user-stats">\n\t\t\t<li>\n\t\t\t\t<a href=',  tag_contributions_url ,' data-tag-link="Contributions link">',  tag_contributions ,'</a>\n\t\t\t\t');  if (tag_contributions == 1) { ; __p.push(' <span>Contribution</span>');  } else { ; __p.push('<span>Contributions</span>');  } ; __p.push('\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=',  tag_best_answers_url ,' data-tag-link="Best answers link">',  tag_best_answers ,'</a>\n\t\t\t\t');  if (tag_best_answers == 1) { ; __p.push(' <span>Best Answer</span>');  } else { ; __p.push('<span>Best Answers</span>');  } ; __p.push('\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=',  tag_helpful_votes_url ,' data-tag-link="Helpful votes link">',  tag_helpful_votes ,'</a>\n\t\t\t\t');  if (tag_helpful_votes == 1) { ; __p.push(' <span>Helpful Vote</span>');  } else { ; __p.push('<span>Helpful Votes</span>');  } ; __p.push('\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=',  tag_projects_url ,' data-tag-link="Projects link">',  tag_projects ,'</a>\n\t\t\t\t');  if (tag_projects == 1) { ; __p.push(' <span>Project</span>');  } else { ; __p.push('<span>Projects</span>');  } ; __p.push('\n\t\t\t</li>\n\t\t</ul>\n\n\t\t');  if (tag_contributions > 0) { ; __p.push('\n\t\t<div class="user-contributions">\n\n\t\t\t<h5>Main Areas of Contribution</h5>\n\n\t\t\t');  if (tag_contribution_areas.length > 0) { ; __p.push('\n\t\t\t<ul>\n\t\t\t\t');  for(var i=0; i < tag_contribution_areas.length; i++) { ; __p.push('\n\t\t\t\t\t<li>',  tag_contribution_areas[i] ,'</li>\n\t\t\t\t');  } ; __p.push('\n\t\t\t</ul>\n\t\t\t');  } ; __p.push('\n\n\t\t</div>\n\t\t');  } ; __p.push('\n\n\t</div>\n\n\t',  tag_content_block ,'\n\n\t<a href="#" class="modal-close"></a>\n\n\t<div class="context-controls">\n\t\t<a href=',  tag_link ,' class="sui-bttn sui-bttn--primary" data-tag-link="View profile link">View User Profile</a>\n\t</div>\n\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/flyout_vendor"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-focus flyout-vendor">\n  <div class="top">\n    <div class="product-image-wrapper">\n      <a href="',  tag_link ,'" data-tag-link="Image link"><img class="product-image" src="',  tag_image ,'" /></a>\n    </div>\n\n    <div class="vendor-header">\n      <h5><a href=',  tag_link ,' data-tag-link="Title link">',  tag_title ,'</a></h5>\n\n      <ul class="vendor-categories">\n        ');  for(var i=0; i < tag_categories.length && i < 2; i++) { ; __p.push('\n          <li>\n            <a href="',  tag_categories[i].link ,'" data-tag-link="Category link">',  tag_categories[i].display_name ,'</a>\n          </li>\n        ');  } ; __p.push('\n      </ul>\n\n      <div class="vendor-badges">\n        <ul class="vendor-badge-list">\n          ');  for (var i=0; i < tag_badges.length; i ++) { ; __p.push('\n            <li class="badge-item">\n              <img src="',  tag_badges[i].image_url ,'" title="',  tag_badges[i].title ,'" alt="Badge ',  tag_badges[i].title ,'"/>\n            </li>\n          ');  } ; __p.push('\n        </ul>\n      </div>\n    </div>\n\n    <div class="follower-info">\n      ');  if(!tag_is_followed) { ; __p.push('\n        <a href="#" class="follow-button sui-bttn sui-followbttn" data-display-name=',  tag_title ,' data-followable-class="VendorPage" data-followable-id=',  tag_id ,' data-following="false" data-id=',  tag_id ,' data-name="Spiceworks" data-show-followup="true" data-similar-path=',  tag_link+"/similar" ,' data-status-only="false" data-toggle="followbttn" data-uri=',  "/api/vendor_pages/toggle?vendor_page_id="+tag_id ,' rel="tooltip" title="" data-original-title="Follow"><span class="button-text">Follow</span></a>\n      ');  } else { ; __p.push('\n        <a href="#" class="follow-button sui-bttn sui-followbttn following" data-display-name=',  tag_title ,' data-followable-class="VendorPage" data-followable-id=',  tag_id ,' data-following="true" data-id=',  tag_id ,' data-name="Spiceworks" data-show-followup="true" data-similar-path=',  tag_link+"/similar" ,' data-status-only="false" data-toggle="followbttn" data-uri=',  "/api/vendor_pages/toggle?vendor_page_id="+tag_id ,' rel="tooltip" title="" data-original-title="Unfollow"><span class="button-text">Following</span></a>\n      ');  } ; __p.push('\n      <span class="followers">',  tag_followers ,'</span>\n    </div>\n  </div>\n\n  <div class="vendor-description">\n    ',  tag_description ,'\n  </div>\n\n  ');  if((tag_email && tag_email.trim()) || (tag_phone && tag_phone.trim())) { ; __p.push('\n    <div class="vendor-contact vendor-section">\n      ');  if(tag_email && tag_email.trim()) { ; __p.push('\n        <div class="vendor-email">\n          <span class="vendor-label">Email</span>\n          <span class="vendor-value">\n            <a href="mailto:',  tag_email ,'">',  tag_email ,'</a>\n          </span>\n        </div>\n      ');  } ; __p.push('\n\n      ');  if(tag_phone && tag_phone.trim()) { ; __p.push('\n        <div class="vendor-phone">\n          <span class="vendor-label">Phone</span>\n          <span class="vendor-value">',  tag_phone ,'</span>\n        </div>\n      ');  } ; __p.push('\n    </div>\n  ');  } ; __p.push('\n\n  ');  if (tag_featured_post) { ; __p.push('\n    '); 
        var authorClass = "";
        if(tag_featured_post.is_partner) {
          authorClass = "partner";
        } else if(tag_featured_post.is_admin) {
          authorClass = "admin";
        }
      ; __p.push('\n    <div class="vendor-post vendor-section">\n      <span class="vendor-label">Featured Post</span>\n      <a class="more-link" href=',  tag_featured_post.tab_url ,' data-tag-link="Feature posts see all link">See all</a>\n      <div class="vendor-item-info">\n        <a class="item-name post-name" href="',  tag_featured_post.url ,'" data-tag-link="Featured post link">',  tag_featured_post.title ,'</a>\n        ',  tag_featured_post.content ,'\n        <a href="',  tag_featured_post.author_url ,'" class=',  authorClass ,'>\n          ',  tag_featured_post.author ,'\n        </a>\n        <span class="post-timestamp" data-js-postprocess="timestamp" data-timestamp-format="from_now" datetime="',  tag_featured_post.created_at ,'"></span>\n      </div>\n    </div>\n  ');  } else if (tag_featured_product) { ; __p.push('\n    <div class="vendor-product vendor-section">\n      <span class="vendor-label">Featured Product</span>\n      <a class="more-link" href=',  tag_featured_product.tab_url ,' data-tag-link="Featured products see all link">See all</a>\n      <div class="vendor-item-info">\n        <img src=',  tag_featured_product.image_url ,' />\n        <div class="vendor-product-description">\n          <a class="item-name" href="',  tag_featured_product.product_url ,'" data-tag-link="Featured product link">',  tag_featured_product.display_name ,'</a>\n          <p>',  tag_featured_product.description ,'</p>\n          <div class="vendor-product-rating">\n            ',  SUI.rating(tag_featured_product.rating).html() ,'\n            <a class="reviews" href=',  tag_featured_product.reviews_url ,' data-tag-link="Featured product reviews link">\n              (',  tag_featured_product.num_ratings ,')\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  ');  } ; __p.push('\n\n  ');  if (tag_vendor_reps.length > 0) { ; __p.push('\n    <div class="vendor-contacts vendor-section">\n      <span class="vendor-label">People</span>\n      <a class="more-link" href=',  tag_link+"&employees=true" ,' data-tag-link="Contacts see all link">See all</a>\n      <ul>\n        ');  for(var i=0; i < tag_vendor_reps.length; i++) { ; __p.push('\n          '); 
              var contact = tag_vendor_reps[i],
                  contactClass = "";
              if(contact.is_partner) {
                contactClass = "partner";
              } else if(contact.is_admin) {
                contactClass = "admin";
              }
            ; __p.push('\n\n          <li title="',  contact.display_name,'&#013;',  contact.comp_title ,'">\n            <div class="contact-avatar">\n              <a href=',  contact.link ,' data-tag-link="Contact image link">\n                <img src=',  contact.icon ,' />\n              </a>\n              <div class="rank_title align-center" title="',  contact.level_name ,'">\n                <span class="',  contact.level_class ,'">',  contact.level_name ,'</span>\n              </div>\n            </div>\n            <div class="contact-details">\n              <a class=',  contactClass ,' href=',  contact.link ,' data-tag-link="Contact link">\n                ',  contact.display_name ,'\n              </a>\n              <span class="vendor-label">',  contact.comp_title ,'</span>\n            </div>\n          </li>\n        ');  } ; __p.push('\n      </ul>\n    </div>\n  ');  } ; __p.push('\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["backbone/tags/templates/modal-review"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div data-ID="',  product_id ,'" class="modal-review">\n\t<div class="modal-review-content">\n\t\t<h3>How did you use this technology? Was it good?</h3>\n\t\t<p>Let everyone know what you think about the <strong>',  product_name ,'</strong></p>\n\t\t\n\t\t<div class="container">\n\t\t\t<textarea>',  product_review ,'</textarea>\n\t\t\t<span class="product-rating"><span class="stars ',  product_rating ,'"></span></span>\n\t\t\t<span class="notice">20 word minimum</span>\n\t\t</div>\t\n\n\t\t<div class="controls">\n\t\t\t<button class="cancel">No thanks</button>\n\t\t\t<button class="confirm">Save</button>\n\t\t</div>\n\t</div>\n\t<div class="modal-review-backdrop"></div>\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/

//


/*global $ document*/

var SPICE = window.SPICE || {};
SPICE.ProductViewUtilities = SPICE.ProductViewUtilities || {};

(function($) {

    // UTILITIES //////////////////////////////////////////

    // Source the URLs
    SPICE.ProductViewUtilities.sourceURL = function(url, identifier, optionalIdentifier) {

      // If there is an optional identifier, include it
      optionalIdentifier = optionalIdentifier ? "_"+String(optionalIdentifier) : "";

      // Parse the url
      if(url)
      {
        if(url.indexOf('?') > -1)
        {
          var tempArray = url.split('?');
          var baseURL = tempArray[0];
          var queryParamArray = tempArray[1].split('&');

          for(var i = 0; i < queryParamArray.length; i++)
          {
            if(queryParamArray[i].indexOf('source=') > -1)
            {
              // Remove the existing source param if there is one
              queryParamArray.splice(i, 1);
            }
          }

          // If there was a source param, get rid of the old one and add the new one
          return baseURL +"?"+ queryParamArray.join('&') + "&source=dynamic_tagging_" + String(identifier) + optionalIdentifier;

        }
        else
        {
          return url +"?"+ "source=dynamic_tagging_" + String(identifier) + optionalIdentifier;
        }
      }

    }

    // Convert the rating class into an integer
    SPICE.ProductViewUtilities.getRatingInteger = function(ratingClass) {

      switch(ratingClass)
      {
        case "one":
          return 1;
          break;
        case "two":
          return 2;
          break;
        case "three":
          return 3;
          break;
        case "four":
          return 4;
          break;
        case "five":
          return 5;
          break;
        default:
          return 0;
          break;
      }

    }

    // Convert the rating integer into a class
    SPICE.ProductViewUtilities.getRatingClass = function(ratingInteger) {

      switch(ratingInteger)
      {
        case 1:
          return "one";
          break;
        case 2:
          return "two";
          break;
        case 3:
          return "three";
          break;
        case 4:
          return "four";
          break;
        case 5:
          return "five";
          break;
        default:
          return "";
          break;
      }

    }

    SPICE.ProductViewUtilities.isFollowed = function(tagType, ID, isFollowed) {

      if(User.following){

        switch(tagType.toUpperCase())
        {
          case "VENDORPAGE":
            return User.following.VendorPage && User.following.VendorPage.includes(ID);
            break;
          case "USER":
            return isFollowed ? true : false ;
            break;
          default:
            return false;
            break;
        }

      } else {
        return false;
      }

      /*
      if((tagType.toUpperCase() === 'VENDORPAGE' || tagType.toUpperCase() === 'USER') && User.following){
        var idx = User.following.VendorPage.indexOf(vpID);
        return (idx > -1);
      } else {
        return false;
      }
      */
    };

    // DATA OBJECTS //////////////////////////////////////////

    SPICE.ProductDataObject = function(module) {

      // Set data type
      this.tagType = "PRODUCT";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagLink = json.taglink;
      this.image = json.tagimage;
      this.title = json.tagtitle;
      this.categories = json.categories;
      this.tagRating = json.productrating;
      this.numReviews = json.numreviews;
      this.reviewsLink = json.reviewslink;
      this.badge = json.badge;
      this.isUserReview = json.isuserreview ? true : false;
      this.isUserRating = json.isuserrating ? true : false;
      this.isReviewSpicy = json.isreviewspicy ? true : false;
      this.reviewID = json.reviewid;
      this.reviewUserLink = json.reviewuserlink;
      this.reviewRating = json.reviewrating;
      this.userRating = json.userrating;
      this.ratingClass = SPICE.ProductViewUtilities.getRatingClass(this.userRating);
      this.reviewText = json.reviewtext;
      this.reviewIcon = json.reviewicon;
      this.reviewName = json.reviewname;
      this.contentBlock = json.contentblock;
      this.userName = json.username;
      this.userIcon = json.usericon;
      this.userLink = json.userlink;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }

    // MARKETPLACE PRODUCT

    SPICE.MarketplaceProductDataObject = function(module) {

      // Set data type
      this.tagType = "MARKETPLACEPRODUCT";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagClass = json.tagclass.toUpperCase();
      this.tagLink = json.taglink;
      this.image = json.tagimage;
      this.title = json.tagtitle;
      this.description = json.description;
      this.tagRating = json.productrating;
      this.numReviews = json.numreviews;
      this.reviewsLink = json.reviewslink;
      this.badge = json.badge;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }
    }

    SPICE.VendorDataObject = function(module) {

      // Set data type
      this.tagType = "VENDORPAGE";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagLink = json.taglink;
      this.image = json.tagimage;
      this.title = json.tagtitle;
      this.categories = json.tagcategories;
      this.description = json.tagdescription;
      this.email = json.tagemail;
      this.phone = json.tagphone;
      this.featured_product = json.tagfeaturedproduct;
      this.featured_post = json.tagfeaturedpost;
      this.vendorReps = json.tagvendorreps;
      this.followers = json.tagfollowers;
      this.badges = json.tagbadges;
      this.contentBlock = json.contentblock;

      if (this.featured_post){
        this.featured_post.created_at = new Date(this.featured_post.created_at);
      }

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }

    SPICE.ApplicationObject = function(module) {

      // Set data type
      this.tagType = "APP";
      var json = module.data('tagdata');



      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagLink = json.taglink;
      this.categories = json.categories;
      this.tagRating = json.tagrating;
      this.tagDownloads = json.tagdownloads;
      this.tagTimesRated = json.tagtimesrated;
      this.author = json.tagauthor;
      this.authorLink = json.tagauthorlink;
      this.tagSubtype = json.tagsubtype.toUpperCase();
      this.tagClass = json.tagclass.toUpperCase();
      this.image = json.tagimage;
      this.title = json.tagtitle;
      this.intro = json.intro;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }

    SPICE.HowToArticleObject = function(module) {

      // Set data type
      this.tagType = "HOWTOARTICLE";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagLink = json.taglink;
      this.title = json.tagtitle;
      this.categories = json.tagcategories;
      this.intro = json.intro;
      this.introFull = json.introfull;
      this.sections = json.sections;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }


    SPICE.UserObject = function(module) {

      // Set data type
      this.tagType = "USER";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagLink = json.taglink;
      this.image = json.tagimage;
      this.title = json.tagtitle;
      this.username = json.tagusername;
      this.urlName = json.tagurlname;
      this.contributionAreas = json.tagcontributionareas;
      this.contributions = json.tagcontributions;
      this.contributionsURL = json.tagcontributionsurl;
      this.bestAnswers = json.tagbestanswers;
      this.bestAnswersURL = json.tagbestanswersurl;
      this.helpfulVotes = json.taghelpfulvotes;
      this.userRoleClass = json.taguserroleclass;
      this.helpfulVotesURL = json.taghelpfulvotesurl;
      this.projects = json.tagprojects;
      this.projectsURL = json.tagprojectsurl;
      this.badges = json.tagbadges;
      this.followers = json.tagfollowers;
      this.isFollowed = json.tagisfollowed;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }

    SPICE.ProjectObject = function(module) {

      // Set data type
      this.tagType = "PROJECT";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.tagLink = json.taglink;
      this.title = json.tagtitle;
      this.author = json.tagauthor;
      this.authorLink = json.tagauthorlink;
      this.intro = json.intro;
      this.technologies = json.tagtechnologies;
      this.contentBlock = json.contentblock;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }

    SPICE.MSPObject = function(module) {

      // Set data type
      this.tagType = "MSPPROFILE";
      var json = module.data('tagdata');

      // Set data
      this.userID = json.userid;
      this.postID = json.postid;
      this.tagID = json.tagid;
      this.image = json.tagimage;
      this.tagLink = json.taglink;
      this.title = json.tagtitle;
      this.tagServices = json.tagservices;
      this.tagServiceType = json.tagservicetype;
      this.tagCertificates = json.tagcertificates;
      this.tagNumAnswers = json.tagnumanswers;
      this.tagNumHelpful = json.tagnumhelpful;
      this.numReviews = json.tagnumreviews;
      this.tagTopEmployees = json.tagtopemployees;
      this.contentBlock = json.contentblock;

      // Remove all data attributes
      var data = module.data();
      for(var name in data){
          module.removeAttr("data-"+name);
      }

    }

    // TAGS //////////////////////////////////////////

    SPICE.ProductViewTag = function(tag) {

      // The tag module
      this.tag = tag;

      // The tag elements
      this.trigger = this.tag.find('.js-focus');
      this.reviews = this.tag.find('.tag-review');
      this.message = this.reviews.find('.rating-message');

      // The tag data
      this.model;
      this.tagType = this.tag.data("tagdata").type;

      switch(this.tagType.toUpperCase())
      {
        case "MARKETPLACEPRODUCT":
          this.model = new SPICE.MarketplaceProductDataObject(tag);
          break;
        case "PRODUCT":
          this.model = new SPICE.ProductDataObject(tag);
          break;
        case "APP":
          this.model = new SPICE.ApplicationObject(tag);
          break;
        case "VENDORPAGE":
          this.model = new SPICE.VendorDataObject(tag);
          break;
        case "HOWTOARTICLE":
          this.model = new SPICE.HowToArticleObject(tag);
          break;
        case "USER":
          this.model = new SPICE.UserObject(tag);
          break;
        case "MSPPROFILE":
          this.model = new SPICE.MSPObject(tag);
          break;
        case "PROJECT":
          this.model = new SPICE.ProjectObject(tag);
          break;
      }

      // Get the related inline tags
      var mainObj = this;
      this.inlineTags = this.tag.closest('.post_content, #root_post, .blog-entry-wrapper, .best-answer-under-root-post').find('.inline-tag').filter(function() {

        var currentTag = $(this);
        if(currentTag.attr("data-id") && currentTag.attr("data-type"))
        {
          return currentTag.attr("data-id") == mainObj.model.tagID && (currentTag.attr("data-type").toUpperCase() == mainObj.tagType.toUpperCase() || currentTag.attr("data-type").toUpperCase() == mainObj.model.tagClass.toUpperCase());
        }

      });

      // Modules
      this.modalModule;
      this.focusModule;
      this.ratingModule = new SPICE.ProductViewRatings(this.tag, this.model);

      // Initialize the module
      this.initialize();

    }

    SPICE.ProductViewTag.prototype = {

        initialize: function() {

          // Reference to main object
          var mainObj = this;

          // When the review is cancelled, set it back to the previous rating
          $(document).on('review-confirmed.product', $.proxy(function(e, reviewModel, isUpdatedReview){

            // If this is a clone post by the same user
            if(this.isUsersTag(reviewModel))
            {
              // Update all similar tags with current information
              this.cloneUpdate(reviewModel.ratingClass, reviewModel.reviewText, isUpdatedReview);
            }

          }, this));

          // When the review is cancelled, set it back to the previous rating
          $(document).on('review-cancelled.product', $.proxy(function(e, reviewModel){

            if(this.isSourceTag(reviewModel))
            {
              this.ratingModule.resetRating();
            }

          }, this));

          // When a rating has been made
          $(document).on('rating.product', $.proxy(function(e, ratingModel){

            if(this.isSourceTag(ratingModel))
            {
              // Show the modal
              new SPICE.ProductViewReviewModal(this.tag, this.model, ratingModel.ratingClass);
            }

          }, this));

          // Focus trigger events
          this.focusModule = new SPICE.ProductViewFocus(this.tag, this.model);

          this.trigger.on('click', function(e){
            mainObj.clickTag(e, mainObj.tag, 'Show Detail Bubble - From Main Tag');
          });

          this.inlineTags.on('click', function(e){
            mainObj.clickTag(e, $(this), 'Show Detail Bubble - From Inline Tag');
          });

          thi');
          }, function(){
            mainObj.unhoverTag();
          });

          this.inlineTags.hover(function(e){
            mainObj.hoverTag(e, $(this), 'Show Detail Bubble - From Inline Tag Hover');
          }, function(){
            mainObj.unhoverTag();
          });

          // Setup the initial rating and review
          this.setRatingClass();
          this.setReviewText();

          this.debouncedShowCheck = _.debounce(this.showCheck, 500);
          $(window).scroll($.proxy(this.debouncedShowCheck, this));
          this.showCheck();
        },

        tagIsOnScreen: function() {
          if(this.tag.is('.tag-hidden')) {
            return false;
          }

          var win = $(window);

          var viewport = {
            top : win.scrollTop(),
          };
          viewport.bottom = viewport.top + win.height();

          var bounds = this.tag.offset();
          bounds.bottom = bounds.top + this.tag.outerHeight();

          return (viewport.bottom > bounds.bottom && viewport.top < bounds.top);
        },

        showCheck: function() {
          if(this.tagIsOnScreen()) {
            this.recordEvent('show', '', true)
            $(window).off('scroll', this.debouncedShowCheck);
          }
        },

        recordEvent: function(action, label, nonInteractive) {
          var labelSuffix = this.model.tagType + ' | ' + this.model.tagID;
          GoogleAnalytics.trackEvent('Dynamic Tag', action, label + labelSuffix, 0, nonInteractive);
        },

        isUsersTag: function(model)
        {
          return this.model.userID === model.userID && this.model.tagID === model.tagID && this.model.tagType === model.tagType ? true : false ;
        },

     lse ;
        },

        cloneUpdate: function(ratingClass, reviewText, isUpdatedReview) {

          if(isUpdatedReview || this.model.isUserReview)
          {
            this.model.reviewName = this.model.userName;
            this.model.reviewUserLink = this.model.userLink;
            this.model.reviewIcon = this.model.userIcon;

            this.model.isUserReview = true;
            this.model.isReviewSpicy = false;

            // Set the new user review
            if(reviewText)
            {
              this.setReviewText(reviewText);
            }
          }

          // Set the new user rating
          if(ratingClass)
          {
            this.model.isUserRating = true;
            this.model.userRating = SPICE.ProductViewUtilities.getRatingInteger(ratingClass);
            this.setRatingClass(ratingClass, true);
          }

        },

        clickTag: function(e, target, eventText) {
          e.preventDefault();

          clearTimeout(this.focusModule.hoverTimer);
          clearTimeout(this.focusModule.unhoverTimer);

          if(!this.focusModule.flyout) {
            this.recordEvent('click', 'Tag popup show | ', false);
            $(document).trigger('show-focus.product', [this.model, target, true]);
          }
        },

        hoverTag: function(e, target, eventText) {
          var tag = this;

          e.preventDefault();

          clearTimeout(this.focusModule.unhoverTimer);

          if(!this.focusModule.flyout) {
            this.focusModule.hoverTimer = setTimeout(function(){
              tag.recordEvent('hover', 'Tag popup show | ', true);
              $(document).trigger('show-focus.product', [tag.model, target]);
            }, 250);
          }
        },

        unhoverTag: function() {
          var tag = this;

          clearTimeout(this.focusModule.hoverTimer);

          if(this.focusModule.fromClick !== true) {
            this.focusModule.unhoverTimer = setTimeout(function(){
              tag.recordEvent('hide', 'Tag popup hide | ', true);
              $(document).trigger('hide-focus.product', [tag.model]);
            }, 450);
          }
        },

        setRatingClass: function(ratingClass, isNewModel) {

          // If there is new ratingClass, store it in the object
          if(ratingClass)
          {
            this.model.ratingClass = ratingClass;
          }

          // Enable the rating
          this.ratingModule.setRatingClass(this.model.ratingClass, isNewModel);
          this.ratingModule.enableRating();

        },
        setReviewText: function(reviewText) {

          // If there is new reviewText, store it in the object
          if(reviewText)
          {
            this.model.reviewText = reviewText;
          }

          // Change the message and the number
          this.model.isUserReview ? this.message.html('My Review:') : this.message.html('Review it:');

          // Enable the rating
          this.ratingModule.enableRating();

        }

    };


    SPICE.ProductViewFollowBtn = function(followBtn) {

      // The tag model
      this.followBtn = followBtn;
      this.followIcon = this.followBtn.find('i');
      this.followBtnLabel = this.followBtn.find('span');
      this.assetType = this.followBtn.attr('data-followable-class');
      this.assetID = this.followBtn.attr('data-followable-id');

      // Initialize the module
      this.initialize();

    }

    SPICE.ProductViewFollowBtn.prototype = {

        initialize: function() {

          this.events();

        },

        events: function() {

          this.followBtn.on("follow unfollow", $.proxy(function(e, btn){

            var options = btn.options,
                following = options.following;

            $.post('/api/vendor_pages/toggle?vendor_page_id='+this.assetID, $.proxy(function(data)
            {
              // Toggle the followed state
              if(data.following===true){
                User.following.VendorPage.push(data.vendor_page_id);
              }
              else{
                User.following.VendorPage = _.without(User.following.VendorPage, data.vendor_page_id);
              }

              $(document).trigger('sync.follow_button', [this.assetType, this.assetID, data.following])

            }, this));

          }, this));

          $(document).on("sync.follow_button", $.proxy(function(e, type, ID, following){

            if(this.assetType.toUpperCase() === type.toUpperCase() && Number(this.assetID) === Number(ID))
            {
              this.followBtn.followbutton({ following: following })
            }

          }, this));

        }

    };


    // RATINGS //////////////////////////////////////////

    SPICE.ProductViewRatings = function(container, model, isModalRating) {

      // The tag model
      this.container = container;
      this.model = model;
      this.isModalRating = isModalRating ? isModalRating : false;

      this.tempRating = "";
      this.storedRatingClass = this.model.ratingClass;

      // The elements for the rating module
      this.rating = this.container.find('.product-rating');
      this.stars = this.container.find('.stars');

      // Initialize the module
      this.initialize();

    }

    SPICE.ProductViewRatings.prototype = {

    ss);

        },
        mouseMove: function(e) {

          // Clear the previous classes
          this.clearStars();

          // Get the XPosition
          var xPos = parseInt(e.pageX) - parseInt(this.stars.offset().left);

          // Determine how many stars to show
          if(xPos <= 14)
          {
            this.tempRating = 'one';
          }
          else if(xPos > 14 && xPos <= 28)
          {
            this.tempRating = 'two';
          }
          else if(xPos > 28 && xPos <= 42)
          {
            this.tempRating = 'three';
          }
          else if(xPos > 42 && xPos <= 56)
          {
            this.tempRating = 'four';
          }
          else
          {
            this.tempRating = 'five';
          }

          this.stars.addClass(this.tempRating);

        },
        mouseLeave: function(e) {

          // Clear the previous rating class
          this.resetRating();

        },
        ratingClick: function(e) {

          // Prevent the default
          e.preventDefault();

          // Disable the ratings
          this.disableRating();

          // Set the model to the temp rating
          this.model.ratingClass = this.tempRating;

          // Broadcast an event to show the modal
          if(!this.isModalRating)
          {
            $(document).trigger('rating.product', this.model);
            this.setRatingClass(this.model.ratingClass);
          }
          else
          {
            // If multiple ratings are allowed, set the rating class
            this.setRatingClass(this.model.ratingClass, true);
          }

        },
        enableRating: function() {

          // Get rid of the old handlers
          this.disableRating();

          // Create new handlers
          this.rating.on('mouseleave', $.proxy(this.mouseLeave, this));
          this.rating.on('mousemove', $.proxy(this.mouseMove, this));
          this.rating.on('click', $.proxy(this.ratingClick, this));

        },
       s));

        },
     g();

        },
        setRatingClass: function(ratingClass, isNewModel) {

          // Clear the old handlers
          this.disableRating();

          // Clear the previous rating class
          this.clearStars();

          // If there is new reviewText, store it in the object
          if(ratingClass)
          {
            this.model.ratingClass = ratingClass;
          }

          // Clear the stored value if a new model has been set
          if(isNewModel)
          {
            this.storedRatingClass = this.model.ratingClass;
          }

          // Set the rating class
          this.stars.addClass(this.model.ratingClass);

          // Enable the rating system
          this.enableRating();

        },
        ass;

        },
        clearStars: function() {

          // Remove the star class
          this.stars.removeClass('one two three four five half');

        }
    };

    // MODAL ////////////////////////////////////////////

    SPICE.ProductViewReviewModal = function(tag, model) {

      // The modal
      this.modal;
      this.model = model;
      this.body = $('body');
      this.template = JST["backbone/tags/templates/modal-review"];
      this.tag = tag;
      this.ratingModule;
      this.minReviewNumWords = 20;

      // The elements of the modal
      this.backdrop;
      this.textarea;
      this.cancelBtn;
      this.confirmBtn;
      this.stars;
      this.productNameField;

      // Initialize the module
      this.initialize();
    }

    SPICE.ProductViewReviewModal.prototype = {

      initialize: function() {

        // Show the modal
        this.showModal();

      },

      showModal: function() {

        // Create the review modal
        this.body.append(this.template({
          product_id: this.model.tagID,
          product_name: this.model.title,
          product_rating: this.model.ratingClass,
          product_review: this.model.isUserReview ?
            _.escape(this.model.reviewText) : ""
        }));

        this.modal = this.body.find('.modal-review');
        this.content = this.modal.find('.modal-review-content');

        // The elements of the modal
        this.backdrop = this.modal.find('.modal-review-backdrop');
        this.textarea = this.modal.find('textarea');
        this.cancelBtn = this.modal.find('.cancel');
        this.container = this.modal.find('.container');
        this.confirmBtn = this.modal.find('.confirm');
        this.stars = this.modal.find('.stars');
        this.notice = this.modal.find('.notice');
        this.productNameField = this.modal.find('.modal-review-content strong');
        this.noticeMessage;

        // Setup the rating module
        this.ratingModule = new SPICE.ProductViewRatings(this.modal, this.model, true);

        // Setup the events for the modal
        this.setupEvents();

        // Show the modal
        this.modal.show().hide().fadeIn('slow');

        // Broadcast an event and record metrics
        $(document).trigger('show-review-modal.product', []);

      },

      hideModal: function() {

        if(this.modal)
        {
          // Hide the spinner
          this.hideSpinner();

          // Remove the modal
          $('.modal-review').remove();
        }

      },

      showSpinner: function() {

        this.content.addClass('masked-relative masked');
        this.content.suiLoadMask('show');

      },

   ide');

      },

      setupEvents: function() {

        // Special keys
        $(document).keydown($.proxy(function(e){

          // Escape to normal mode
          if(e.which == 27)
          {
            // Prevent the default action
            e.preventDefault();

            // Hide the modal
            this.hideModal();

            // Broadcast an event
            $(document).trigger('review-cancelled.product', [this.model]);
          }

        }, this));

        // When there is a keypress in the text area
        this.textarea.keyup($.proxy(function(e){

          // Count the words
          this.countWords();

        }, this));

        // If the modal is cancelled
        this.cancelBtn.on('click', $.proxy(function(e){

          // Hide the modal
          this.hideModal();

          // Broadcast an event
          $(document).trigger('review-cancelled.product', [this.model]);

        }, this));

        // If the modal is cancelled
        this.backdrop.on('click', $.proxy(function(e){

          // Hide the modal
          this.hideModal();

          // Broadcast an event
          $(document).trigger('review-cancelled.product', [this.model]);

        }, this));

        // If the modal review is saved
        this.confirmBtn.on('click', $.proxy(function(e){

          if(!this.model.ratingClass)
          {
            this.showNotice(this.countWords(), "You must rate the product to submit a review.");
            return false;
          }

          var mainObj = this;

          // If the number of words is greater than or equal to 20
          if(this.countWords() >= this.minReviewNumWords || this.countWords() == 0)
          {
            // Show the spinner
            this.showSpinner();

            // Send the review data
            var reviewData = {id:this.model.tagID, rating: SPICE.ProductViewUtilities.getRatingInteger(this.ratingModule.getRatingClass()), comment: this.textarea.val(), postId: this.model.postID}
            var reviewPromise = $.ajax({
              type: "POST",
              url: "/reviews/review",
              data: reviewData
            });

            // When the request has completed
            $.when(reviewPromise).done( $.proxy(function(reviewXHRObject) {

              // Hide the modal
              mainObj.hideModal();

              var isUpdatedReview = false;

              // Set the new review text
              if(this.textarea.val() != "")
              {
                mainObj.model.reviewText = mainObj.textarea.val();
                isUpdatedReview = true
              }

              // Broadcast an event
              $(document).trigger('review-confirmed.product', [mainObj.model, isUpdatedReview]);

            }, this));

          }
          else
          {
            this.showNotice(this.countWords(), "Please continue your review!");
          }

        }, this));

      },

      countWords: function() {

        // Trim off the beginning and trailing whitespace
        var input = $.trim(this.textarea.val());

        // Return the number of words
        if(input == "")
        {
          // If they haven't entered anything at all
          numWords = 0;
          this.showNotice(numWords);
        }
        else
        {
          // Count the number of words
          var numWords = input.replace(/\s+/gi, ' ').split(" ").length;

          // Check the number of words
          if(numWords > 0 && numWords < this.minReviewNumWords)
          {
            // If the number of words is greater than 0 but less than the minimum
            this.showNotice(numWords);
          }
          else if(numWords >= this.minReviewNumWords)
          {
            // If the number of words is greater than the minimum
            this.showNotice(numWords, "Thank you for the review!");
          }
          else
          {
            // If there is only one word
            numWords = 1;
            this.showNotice(numWords);
          }
        }

        // Return the number of words
        return numWords;

      },

      showNotice: function(numWords, notice) {

        // If there is an existing error
        this.noticeMessage ? this.noticeMessage.remove() : null ;

        // Give them an error message
        if(notice && numWords >= this.minReviewNumWords)
        {
          this.notice.append('<span class="notice-message"> - '+ notice +'</span>');
        }
        else if(notice)
        {
          this.notice.append('<span class="notice-message"> ('+ numWords +' of '+this.minReviewNumWords+') - '+ notice +'</span>');
        }
        else
        {
          this.notice.append('<span class="notice-message"> ('+ numWords +' of '+this.minReviewNumWords+')</span>');
        }

        this.noticeMessage = this.notice.find('.notice-message');

      },

 lural;

      }

    };

    // FOCUS ////////////////////////////////////////////

    SPICE.ProductViewFocus = function(tag, model) {

      // Elements
      this.body = $('body');
      this.tag = tag;
      this.trigger;
      this.model = model;
      this.isFocus = false;
      this.flyout;
      this.flyoutHeight;
      this.flyoutWidth;
      this.followBtn;
      this.closeBtn;

      // Determine the template file
      this.template;
      switch(this.model.tagType.toUpperCase())
      {
        case "PRODUCT":
          this.template = JST["backbone/tags/templates/flyout_product"];
          break;
        case "MARKETPLACEPRODUCT":
          this.template = JST["backbone/tags/templates/flyout_marketplaceproduct"];
          break;
        case "VENDORPAGE":
          this.template = JST["backbone/tags/templates/flyout_vendor"];
          break;
        case "APP":
          this.template = JST["backbone/tags/templates/flyout_app"];
          break;
        case "PRODUCTSELECTORCONFIG":
          this.template = JST["backbone/tags/templates/flyout_selector"];
          break;
        case "HOWTOARTICLE":
          this.template = JST["backbone/tags/templates/flyout_howto"];
          break;
        case "USER":
          this.template = JST["backbone/tags/templates/flyout_user"];
          break;
        case "MSPPROFILE":
          this.template = JST["backbone/tags/templates/flyout_msp"];
          break;
        case "PROJECT":
          this.template = JST["backbone/tags/templates/flyout_project"];
          break;
      }

      // Initialize the module
      this.initialize();

    }

    SPICE.ProductViewFocus.prototype = {

        initialize: function() {
          //Get a reference to the main object
          var mainObj = this;

          this.hoverTimer = null;
          this.unhoverTimer = null;
          this.fromClick = false;

          //Special keys
          $(document).keydown($.proxy(function(e){

            // Escape to normal mode
            if(e.which == 27)
            {
              // Prevent the default action
              e.preventDefault();

              // Hide the flyout
              this.hideFocus();
            }

          }, this));

          // When the show focus event occurs
          $(document).on('show-review-modal.product', $.proxy(function(e){

              this.hideFocus();

          }, this));

          // When the show focus event occurs
          $(document).on('show-focus.product', $.proxy(function(e, model, trigger, fromClick){
            // If this flyout has been triggered
            if(this.model === model) {
              this.trigger = trigger;
              this.fromClick = fromClick === true;

              this.showFocus();
            } else {
              this.hideFocus();
            }
          }, this));

          // When the hide focus event occurs
          $(document).on('hide-focus.product', $.proxy(function(e, model){
            if(this.model === model && this.flyout) {
              this.hideFocus();
            }
          }, this));

          // When the rate product event occurs
          $(document).on('rating.product', $.proxy(function(e){

            this.hideFocus();

          }, this));

          // When the rate product event occurs
          $(document).on('hideall.product', $.proxy(function(e){

            this.hideFocus();

          }, this));

          // When the read more link is clicked
          $(document).on('read-more.product', $.proxy(function(e){

            this.positionFocus();

          }, this));

          // When the user clicks outside of the flyout
          $(document).on('mouseup', $.proxy(function(e){

            // If the target of the click isn't the flyout (or a descendant of the flyout)
            if(this.flyout)
            {
              if(!this.flyout.is(e.target) && this.flyout.has(e.target).length === 0)
              {
                  this.hideFocus();
              }
            }


          },this));


          // When the resize event occurs
          var timeout;
          $(window).resize($.proxy(function(){

            // putting this in a timeout because the landscape<->portrait transition
            // fires this event at somewhat random times (not always at the very end)
            // and screws up the math on redraw
            clearTimeout(timeout);
            timeout = setTimeout(this.positionFocus.bind(this), 150);

          }, this));

        },
        showFocus: function() {

          // Reference to main object
          var mainObj = this,
              existingFocusWindows,
              sourceIdentifier,
              categoryArray,
              categoryData,
              featuredProduct,
              featuredPost,
              sourceIdentifier;

          // Remove any unwanted focus windows from the view
          existingFocusWindows = $('body').find('.product-focus');
          if(existingFocusWindows.length > 0)
          {
            existingFocusWindows.remove();
          }

          // Flag the focus modal as active
          this.isFocus = true;

          // Process the categories
          categoryArray = new Array();
          categoryData = this.model.categories;
          featuredProduct = this.model.featured_product;
          featuredPost = this.model.featured_post;

          // If this is an inline tag, add an "inline" identifier
          sourceIdentifier = this.trigger.is('.inline-tag') ? "inline" : "main";

          // Replace the existing link with a new sourced link
          if(categoryData)
          {
            for(var i = 0; i < categoryData.length; i++)
            {
              categoryData[i].link = SPICE.ProductViewUtilities.sourceURL(categoryData[i].link, this.model.postID, sourceIdentifier);
              categoryArray.push(categoryData[i]);
            }
          }

          if(featuredPost) {
            featuredPost.tab_url = SPICE.ProductViewUtilities.sourceURL(featuredPost.tab_url, this.model.postID, sourceIdentifier);
            featuredPost.author_url = SPICE.ProductViewUtilities.sourceURL(featuredPost.author_url, this.model.postID, sourceIdentifier);
            featuredPost.url = SPICE.ProductViewUtilities.sourceURL(featuredPost.url, this.model.postID, sourceIdentifier);
          }

          if(featuredProduct) {
            featuredProduct.reviews_url = SPICE.ProductViewUtilities.sourceURL(featuredProduct.reviews_url, this.model.postID, sourceIdentifier);
            featuredProduct.product_url = SPICE.ProductViewUtilities.sourceURL(featuredProduct.product_url, this.model.postID, sourceIdentifier);
            featuredProduct.tab_url = SPICE.ProductViewUtilities.sourceURL(featuredProduct.tab_url, this.model.postID, sourceIdentifier);
          }

          if(this.model.vendorReps) {
            _.each(this.model.vendorReps, function(vendorRep){
              vendorRep.link = SPICE.ProductViewUtilities.sourceURL(vendorRep.link, this.model.postID, sourceIdentifier);
            }, this);
          }

          var displayRating = this.model.isUserReview ? this.model.userRating : this.model.reviewRating,
              shortDescriptionLength = 200,
              showShortDescription = this.model.description && this.model.description.length > shortDescriptionLength;

          // Create the new flyout window
          this.flyout = $(this.template({
            tag_author: this.model.author,
            tag_author_link: this.model.authorLink,
            tag_type: this.model.tagType,
            tag_subtype: this.model.tagSubtype,
            tag_technologies: this.model.technologies,
            tag_id: this.model.tagID,
            tag_link: SPICE.ProductViewUtilities.sourceURL(this.model.tagLink, this.model.postID, sourceIdentifier),
            tag_image: this.model.image,
            tag_title: this.model.title,
            tag_username: this.model.username,
            tag_url_name: this.model.urlName,
            tag_categories: categoryArray,
            tag_reviews_link: SPICE.ProductViewUtilities.sourceURL(this.model.reviewsLink, this.model.postID, sourceIdentifier),
            tag_num_reviews: this.model.numReviews,
            tag_badge: this.model.badge,
            tag_badges: this.model.badges,
            tag_rating: this.model.tagRating,
            tag_downloads: this.model.tagDownloads,
            tag_times_rated: this.model.tagTimesRated,
            tag_review_user_id: this.model.reviewUserID,
            tag_review_user_link: SPICE.ProductViewUtilities.sourceURL(this.model.reviewUserLink, this.model.postID, sourceIdentifier),
            tag_review_is_spicy: this.model.isReviewSpicy,
            tag_review_rating: displayRating,
            tag_review_id: this.model.reviewID,
            tag_review_text: _.escape(this.model.reviewText),
            tag_review_icon: this.model.reviewIcon,
            tag_review_name: this.model.reviewName,
            tag_is_guest: String(CurrentUser.guest()),
            tag_vendor_reps: this.model.vendorReps,
            tag_is_followed: SPICE.ProductViewUtilities.isFollowed(this.model.tagType, this.model.tagID, this.model.isFollowed),
            tag_user_role_class: this.model.userRoleClass,
            tag_followers: this.model.followers,
            tag_contribution_areas: this.model.contributionAreas,
            tag_contributions: this.model.contributions,
            tag_contributions_url: this.model.contributionsURL,
            tag_best_answers: this.model.bestAnswers,
            tag_best_answers_url: this.model.bestAnswersURL,
            tag_helpful_votes: this.model.helpfulVotes,
            tag_helpful_votes_url: this.model.helpfulVotesURL,
            tag_description: this.model.description,
            tag_short_description: showShortDescription ? this.model.description.substring(0, shortDescriptionLength) + ' ...' : this.model.description,
            tag_email: this.model.email,
            tag_phone: this.model.phone,
            tag_table_of_contents: this.model.tableOfContents,
            tag_featured_product: this.model.featured_product,
            tag_featured_post: this.model.featured_post,
            tag_projects: this.model.projects,
            tag_projects_url: this.model.projectsURL,
            tag_num_products: this.model.numProducts,
            tag_top_products: this.model.topProducts,
            tag_services: this.model.tagServices,
            tag_service_type: this.model.tagServiceType,
            tag_certificates: this.model.tagCertificates,
            tag_num_answers: this.model.tagNumAnswers,
            tag_num_helpful: this.model.tagNumHelpful,
            tag_top_employees: this.model.tagTopEmployees,
            tag_intro: this.model.intro,
            tag_intro_full: this.model.introFull,
            tag_sections: this.model.sections,
            tag_content_block: _.unescape(this.model.contentBlock)
          })).appendTo(this.body);

          this.flyout.find('[data-js-postprocess="timestamp"]').timestamp();

          // If there is testimonial text, set up an ellipsis
          if(this.flyout.find('.testimonial-text').length > 0)
          {
            new SPICE.ProductViewEllipsis(this.flyout.find('.testimonial-text'));
          }

          // Setup the follow button (VENDORS ONLY)
          this.followBtn = this.flyout.find('.sui-followbttn');
          if(this.followBtn)
          {
            var cls = this.followBtn.data("followableClass");
            var id = this.followBtn.data("followableId");

            this.followBtn.on("click", $.proxy(function(e){

              if(CurrentUser.guest())
              {
                e.preventDefault();
                e.stopPropagation();
                JoinAndLogin.trackAndShowForm('login', { label: this.model.tagType + ' Tag Popup Follow Button' });
              }

            }, this));

            // When it is followed/unfollowed
            this.followBtn.on("follow unfollow", $.proxy(function(e, btn){

              // Prevent the default
              e.preventDefault();

              // If the user is logged in
              if(!CurrentUser.guest())
              {

                switch(this.model.tagType.toUpperCase())
                {
                  case "VENDORPAGE":

                    var options = btn.options,
                        uri = options.uri,
                        following = options.following;

                    $.post(uri, $.proxy(function(data)
                    {
                      // Toggle the followed state

                      this.model.isFollowed = data.following;
                      if(data.following===true){
                        User.following.VendorPage.push(data.vendor_page_id);
                      }
                      else{
                        User.following.VendorPage = _.without(User.following.VendorPage, data.vendor_page_id);
                      }

                      $(document).trigger('sync.follow_button', [this.model.tagType, this.model.tagID, data.following])

                    }, this));

                    break;
                  case "USER":

                    if(this.model.isFollowed)
                    {
                      $.post( "/users/" + encodeURIComponent(this.model.username) + "/unfollow" );
                      this.model.isFollowed = false;
                    }
                    else
                    {
                      $.post( "/users/" + encodeURIComponent(this.model.username) + "/follow" );
                      this.model.isFollowed = true;
                    }

                    break;
                }

              }

            }, this));

          }


          // Get the height of the flyout
          this.flyoutHeight = this.flyout.height();

          // Get the default width of the flyout to judge whether we want
          // the responsive view or not
          this.flyoutWidth = this.flyout.width();

          //Fade in the focus
          this.flyout.addClass('opened');

          // When the close button is clicked
          this.closeBtn = this.flyout.find('.modal-close, .modal-close-button');
          this.closeBtn.on(');

          }, this));

          // Position the focus
          this.positionFocus();

          this.flyout.find('a[data-tag-link]').click($.proxy(this.trackClickEvent, this));

          // Keep on showing flyout on hover, hide on unhover
          this.flyout.hover(function(e){
            clearTimeout(mainObj.unhoverTimer);
          }, function(){
            if(mainObj.fromClick !== true) {
              mainObj.unhoverTimer = setTimeout(function(){
                mainObj.hideFocus();
              }, 500);
            }
          });
        },

        trackClickEvent: function(event) {
          var linkLabel = $(event.currentTarget).attr('data-tag-link') + ' click | ',
              labelSuffix = this.model.tagType + ' | ' + this.model.tagID;

          GoogleAnalytics.trackEvent('Dynamic Tag', 'click', linkLabel + labelSuffix);
        },

        isResponsive: function() {
          return $(window).width() <= (this.flyoutWidth + 40);
        },
        positionFocus: function() {

          var topAdjustment;     // Magic offset to get the focus modal in the right place
          var bottomAdjustment;  // Magic offset to get the focus modal in the right place
          var leftAdjustment;    // Magic offset to get the focus modal in the right place
          var isUnderFlipLimit;
          var isOverScreenTop;
          var isRootPost;
          var responsiveOffset = 20;

          if(this.flyout)
          {

            if (this.isResponsive()) {
              this.flyout.addClass('responsive');
            } else {
              this.flyout.removeClass('responsive');
            }
            this.flyoutHeight = this.flyout.height();

            isUnderFlipLimit = (this.trigger.offset().top - this.flyoutHeight - (document.body.scrollTop + 86)) < 0    // This is a special check to flip the modal if it would be under the floating nav at the top of the page
            isOverScreenTop = this.flyoutHeight > (this.trigger.offset().top - 90)                                     // This is a special check to flip the modal if it would be above the top of the page
            isRootPost = this.trigger.closest('#root_post').length > 0;

            // If this is an inline tag, treat it differently than the normal tags
            if(this.trigger.is('.inline-tag'))
            {
              topAdjustment = 50;     // Magic offset to get the focus modal in the right place
              bottomAdjustment = 30;  // Magic offset to get the focus modal in the right place
              leftAdjustment = 47;    // Magic offset to get the focus modal in the right place

              // Special conditional to flip the flyout when it is in the root post or when it is under the floating nav
              if(isOverScreenTop || isUnderFlipLimit || isRootPost)
              {
                // Calculate Position based on trigger
                var xPos = this.isResponsive() ? responsiveOffset : this.trigger.offset().left - leftAdjustment;
                var yPos = this.trigger.offset().top + bottomAdjustment;

                // Position the modal
                this.flyout.addClass('flip');
              }
              else
              {
                // Calculate Position based on trigger
                var xPos = this.isResponsive() ? responsiveOffset : this.trigger.offset().left - leftAdjustment;
                var yPos = this.trigger.offset().top - this.flyoutHeight - topAdjustment;
              }

            }
            else
            {
              topAdjustment = 41;     // Magic offset to get the focus modal in the right place
              bottomAdjustment = 56;  // Magic offset to get the focus modal in the right place
              leftAdjustment = 0;     // Magic offset to get the focus modal in the right place

              // Special conditional to flip the flyout when it is in the root post or when it is under the floating nav
              if(isOverScreenTop || isUnderFlipLimit || isRootPost)
              {
                // Calculate Position based on trigger
                var xPos = this.isResponsive() ? responsiveOffset : this.trigger.offset().left - leftAdjustment;
                var yPos = this.trigger.offset().top + bottomAdjustment;

                // Position the modal
                this.flyout.addClass('flip');
              }
              else
              {
                var triggerTopOffset = this.trigger.offset().top;
                // Calculate Position based on trigger
                var xPos = this.isResponsive() ? responsiveOffset : this.trigger.offset().left - leftAdjustment;
                var yPos = triggerTopOffset - this.flyoutHeight - topAdjustment;
                this.flyout.removeClass('flip');
              }
            }

            // Position the modal
            this.flyout.offset({left: xPos, top: yPos });
          }

        },
        hideFocus: function() {
          if(this.flyout)
          {
            var flyout = this.flyout;

            //Hide the focus
            flyout.addClass('closed');


            // Flag the focus modal as inactive
            this.isFocus = false;
            this.flyout = null;

            flyout.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
              flyout.remove();
            });
          }
        }

    };

    // ELLIPSIS ////////////////////////////////////////

    SPICE.ProductViewEllipsis = function(textarea) {

      // Elements
      this.textarea = textarea;
      this.moreBtn = $('<a class="read-more" target="_blank" href="#">Read More</a>');
      this.charLimit = 300;
      this.originalText = this.textarea.html();
      this.shortText;

      // Initialize the module
      this.initialize();

    }

    SPICE.ProductViewEllipsis.prototype = {

      initialize: function() {

        // If the string is already within the limit
        if(this.originalText.length < this.charLimit)
        {
          this.showMore();
        }
        else
        {
          this.showLess();
        }

      },
      showMore: function() {

        // Show all of the text
        this.textarea.html(this.originalText);

        // Remove the show more button if there is one
        this.textarea.parent().find('.read-more').remove();

      },
      showLess: function() {

        // If it is the end of a word or sentence
        if(this.originalText.charAt(this.charLimit) == " ")
        {
          // Get the string at that point
          this.shortText = this.originalText.substr(0, this.charLimit) + " ...\" ";
        }
        else
        {
          // Set a temp char limit
          var tempCharLimit = this.charLimit;

          // Roll back one word
          while (tempCharLimit > 0)
          {
            // If the current character is the end of a word or a sentence
            if(this.originalText.charAt(tempCharLimit) == " ")
            {
              this.shortText = this.originalText.substr(0, tempCharLimit) + "...\" ";
              break;
            }

            // Decrement the loop
            tempCharLimit--;
          }
        }

        // Show short text
        this.textarea.html(this.shortText);

        // Append the read more button
        this.createReadMore();

      },

      createReadMore: function() {

        // Add the show more button
        this.moreBtn.attr('href', this.textarea.data('link'));
        this.textarea.after(this.moreBtn);

        // DISABLING THE READ MORE FUNCTIONALITY BECAUSE IN SOME CASES, IT CAUSES THE MODAL TO EXTEND BEYOND THE VIEWABLE SCREEN - LINKING TO THE PRODUCT COMMENT PAGE INSTEAD

        // When the more button is clicked
        // this.moreBtn.on('click', $.proxy(function(e){

        // Prevent Default
        // e.preventDefault();

        // Show more
        // this.showMore();

        // Broadcast that the focus modal will need to reposition
        // $(document).trigger('read-more.product');

        // }, this));


      }

    };

    // SHOW ALL ////////////////////////////////////////

    SPICE.ProductViewTagShowAll = function(module) {

      // Elements
      this.tagShowAllLink = module;
      this.tagCount = this.tagShowAllLink.data('tagcount');
      this.tagViewport = this.tagShowAllLink.closest('.post_content, #root_post, .blog-entry-tags, .comment-content-container, .best-answer-under-root-post').find('.tag-viewport');
      this.isOpen = false;
      this.originalHeight = this.tagViewport.height();

      // Initialize the module
      this.initialize();

    }

    SPICE.ProductViewTagShowAll.prototype = {

      initialize: function() {

        // Get reference to main object
        var mainObj = this;

        // When a show all tags link is clicked
        this.tagShowAllLink.on("click", function(e){

          // Prevent the default action
          e.preventDefault();

          // Toggle the show more
          mainObj.isOpen ? mainObj.showLess() : mainObj.showMore();

          // Broadcast and event to close all of the focus windows
          $(document).trigger('hideall.product');

        });

      },

      showMore: function() {

        // Get reference to main object
        var mainObj = this;

        // Set the flag
        this.isOpen = true;

        // Get the original height
        this.originalHeight = this.tagViewport.height();

        // Remove the truncated class and show the tags
        mainObj.tagViewport.stop().animate({

          height: mainObj.tagViewport.find('.tags').height()

        }, 500, "easeInOutCubic", function() {

          // Animation complete
          mainObj.tagViewport.removeClass('truncated');

        });

        // Set the text for the link
        this.tagShowAllLink.html('Show less tags');

        GoogleAnalytics.trackEvent('Dynamic Tag', 'click', 'Show all tags link click');

        mainObj.tagViewport.find('.tags li.tag-hidden').each(function() {
          var $tag = $(this),
              label = $tag.data('tagdata').type + ' | ' + $tag.data('tagdata').tagid;

          $tag.removeClass('tag-hidden');

          GoogleAnalytics.trackEvent('Dynamic Tag', 'show', label + ' | from show all link', 0, true);
        });
      },

      showLess: function() {

        // Get reference to main object
        var mainObj = this;

        // Set the flag
        this.isOpen = false;

        // Remove the truncated class and show the tags
        mainObj.tagViewport.stop().animate({

          height: mainObj.originalHeight

        }, 500, "easeInOutCubic", function() {

          // Animation complete
          mainObj.tagViewport.addClass('truncated');

        });

        // Set the text for the link
        var label = 'Show all '+ String(this.tagCount) +' tags';
        this.tagShowAllLink.html(label);

      }

    };


    // DOCUMENT READY ///////////////////////////////////

    $(document).ready(function() {

      $('#topic .post, #topic .original-post, #topic .blog_entry, .blog-entry-tags, .comment-container, .blog-entry-wrapper .post').each(function(){
        var post = $(this);
        var my_post = (post.data('user-name') === User.name)
        post.addClass(my_post ? 'my-post' : 'their-post');
      });

      // Activate the tags
      $('ul.tags li').each(function(){
        // Create a new product tag
        var ProductViewTag = new SPICE.ProductViewTag($(this));
      });

      // Setup follow btns to stay in sync
      $('.sui-followlink').each(function(){
        var followBtn = new SPICE.ProductViewFollowBtn($(this));
      });

      // Activate the show more / show less for tags
      $('.tags-show-all').each(function(){
        // Create a new product show all
        var ProductViewTagShowAll = new SPICE.ProductViewTagShowAll($(this));
      });

    });
})(jQuery);
/*1.0*/
!function ($) {
    $(function () {
      $('#suggest_tip_content_toggler').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('#suggest_tip_content')
          .show()
          .find('form input:visible')
            .first().focus();
      });

      $('#suggest_tip_content'+
        ' .sui-bttn[data-button-type=cancel]').click(function (e) {
          e.preventDefault();
          $('#suggest_tip_content')
            .hide()
            .find('form')
            // unfortunately, clearFormErrors is not public on the JsonForm
            // jQuery plugin
              .find('.control-group')
                .removeClass('error')
              .end()
              .find('.generic-error')
                .hide()
              .end()
              .find('.control-group .help-inline')
                .remove()
              .end()
              .resetForm();
          $('#suggest_tip_content_toggler').show();
      });

      $('#suggest_tip_content form').onForm();
      });
    });
}(jQuktoForms2=e()}}(function(){var define,module,r[o]);return s})({1:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN|| undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.se return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      console.trace();
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.p return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.r return this;
};

EventEmitter.prototype.remov return this;
};

EventEmitter.protot  return ret;
};

EventEmitter.  return ret;
};

function isFunction(arg) {
  return typeof arg ====ag === void 0;
}

},{}],2:[function(_dereq_,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/*! http://mths.be/punycode v1.2.3 by @mathias */
;(function(root) {

  /** Detect free variables */
  var freeExports = typeof exports == 'object' && exports;
  var freeModule = typeof module == 'object' && module &&
    module.exports == freeExports && module;
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }

  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */
  var punycode,

  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
  tMin = 1,
  tMax = 26,
  skew = 38,
  damp = 700,
  initialBias = 72,
  initialN = 128, // 0x80
  delimiter = '-', // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
  regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },

  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
  floor = Math.floor,
  stringFromCharCode = String.fromCharCode,

  /** Temporary variable */
  key;

  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error mors[type]);
  }

  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback futurn array;
  }

  /**
   * A simple `Array#map`-like wrapper to work with domain name strings.
   * @private
   * @param {String} domain The domain name.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * fu.join('.');
  }

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <http://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code urn output;
  }

  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string ().join('');
  }

  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent aeturn base;
  }

  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercas= 0) << 5);
  }

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * http://tools.ietf.org/html/rfc3492#section-3.4
   * @a + skew));
  }

  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,
        length,
        /** Cached calculation results */
        baseMinusT;

    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }
      output.push(input.charCodeAt(j));
    }

    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.

    for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;

      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);

      // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:
      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out;

      // Insert `n` at position `i` of the output
      output.splice(i++, 0, n);

    }

    return ucs2encode(output);
  }

  /**
   * Converts a string of Unicode symbols to a Punycode string of ASCII-only
   * symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only st.join('');
  }

  /**
   * Converts a Punycode string representing a domain name to Unicode. Only the
   * Punycoded parts of the domain name will be converted, i.e. it doesn't
   * matter if you call it on a string that has already been converted to
   * Unicode.
   * @memberOf punycode
   * @param {String} domain The Punycode domain name to convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * ng;
    });
  }

  /**
   * Converts a Unicode string representing a domain name to Punycode. Only the
   * non-ASCII parts of the domain name will be converted, i.e. it doesn't
   * matter if you call it with a domain that's already in ASCII.
   * @memberOf punycode
   * @param {String} domain The domain name to convert, as a Unicode string.
   * @returns {String} The Punycode representation of the given domaing;
    });
  }

  /*--------------------------------------------------------------------------*/

  /** Define the public API */
  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.2.3',
    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <http://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };

  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if (
    typeof define == 'function' &&
    typeof define.amd == 'object' &&
    define.amd
  ) {
    define(function() {
      return punycode;
    });
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) { // in Node.js or RingoJS v0.8.0+
      freeModule.exports = punycode;
    } else { // in Narwhal or RingoJS v0.7.0-
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else { // in Rhino or a web browser
    root.punycode = punycode;
  }

}(th Array]';
};

},{}],4:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var strineturn '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        re(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Aje  return res;
}

var objectKeys =  return re'./encode');

},{"./decode":3,"./encode":4}],6:[function(_dereq_,module,exports){
/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
(function () {
  "use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var punycode = _dereq_('punycode');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '~', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(delims),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#']
      .concat(unwise).concat(autoEscape),
    nonAuthChars = ['/', '@', '?', '#'].concat(delims),
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,
    hostnamePartStart = /^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always have a path component.
    pathedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = _dereq_('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && typeof(url) === 'object' && url.href) return url;

  if (typeof url !== 'string') {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var out = {},
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    out.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      out.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    // don't enforce full RFC correctness, just be unstupid about it.

    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the first @ sign, unless some non-auth character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    var atSign = rest.indexOf('@');
    if (atSign !== -1) {
      var auth = rest.slice(0, atSign);

      // there *may be* an auth
      var hasAuth = true;
      for (var i = 0, l = nonAuthChars.length; i < l; i++) {
        if (auth.indexOf(nonAuthChars[i]) !== -1) {
          // not a valid auth.  Something like http://foo.com/bar@baz/
          hasAuth = false;
          break;
        }
      }

      if (hasAuth) {
        // pluck off the auth portion.
        out.auth = decodeURIComponent(auth);
        rest = rest.substr(atSign + 1);
      }
    }

    var firstNonHost = -1;
    for (var i = 0, l = nonHostChars.length; i < l; i++) {
      var index = rest.indexOf(nonHostChars[i]);
      if (index !== -1 &&
          (firstNonHost < 0 || index < firstNonHost)) firstNonHost = index;
    }

    if (firstNonHost !== -1) {
      out.host = rest.substr(0, firstNonHost);
      rest = rest.substr(firstNonHost);
    } else {
      out.host = rest;
      rest = '';
    }

    // pull out port.
    var p = parseHost(out.host);
    var keys = Object.keys(p);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      out[key] = p[key];
    }

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    out.hostname = out.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = out.hostname[0] === '[' &&
        out.hostname[out.hostname.length - 1] === ']';

    // validate a little.
    if (out.hostname.length > hostnameMaxLen) {
      out.hostname = '';
    } else if (!ipv6Hostname) {
      var hostparts = out.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            out.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    // hostnames are always lower case.
    out.hostname = out.hostname.toLowerCase();

    if (!ipv6Hostname) {
      // IDNA Support: Returns a puny coded representation of "domain".
      // It only converts the part of the domain name that
      // has non ASCII characters. I.e. it dosent matter if
      // you call it with a domain that already is in ASCII.
      var domainArray = out.hostname.split('.');
      var newOut = [];
      for (var i = 0; i < domainArray.length; ++i) {
        var s = domainArray[i];
        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
            'xn--' + punycode.encode(s) : s);
      }
      out.hostname = newOut.join('.');
    }

    out.host = (out.hostname || '') +
        ((out.port) ? ':' + out.port : '');
    out.href += out.host;

    // strip [ and ] from the hostname
    if (ipv6Hostname) {
      out.hostname = out.hostname.substr(1, out.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    out.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    out.search = rest.substr(qm);
    out.query = rest.substr(qm + 1);
    if (parseQueryString) {
      out.query = querystring.parse(out.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    out.search = '';
    out.query = {};
  }
  if (rest) out.pathname = rest;
  if (slashedProtocol[proto] &&
      out.hostname && !out.pathname) {
    out.pathname = '/';
  }

  //to support http.request
  if (out.pathname || out.search) {
    out.path = (out.pathname ? out.pathname : '') +
               (out.search ? out.search : '');
  }

  // finally, reconstruct the href based on what has been validated.
  out.href = urlFormat(out);
  return out;
}

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (typeof(obj) === 'string') obj = urlParse(obj);

  var auth = obj.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = obj.protocol || '',
      pathname = obj.pathname || '',
      hash = obj.hash || '',
      host = false,
      query = '';

  if (obj.host !== undefined) {
    host = auth + obj.host;
  } else if (obj.hostname !== undefined) {
    host = auth + (obj.hostname.indexOf(':') === -1 ?
        obj.hostname :
        '[' + obj.hostname + ']');
    if (obj.port) {
      host += ':' + obj.port;
    }
  }

  if (obj.query && typeof obj.query === 'object' &&
      Object.keys(obj.query).length) {
    query = querystring.stringify(obj.query);
  }

  var search = obj.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (obj.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  return protocol + host + pathname + se, relative));
}

function urlResolveObject(source, relative) {
  if (!source) return relative;

  source = urlParse(urlFormat(source), false, true);
  relative = urlParse(urlFormat(relative), false, true);

  // hash is always overridden, no matter what.
  source.hash = relative.hash;

  if (relative.href === '') {
    source.href = urlFormat(source);
    return source;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    relative.protocol = source.protocol;
    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[relative.protocol] &&
        relative.hostname && !relative.pathname) {
      relative.path = relative.pathname = '/';
    }
    relative.href = urlFormat(relative);
    return relative;
  }

  if (relative.protocol && relative.protocol !== source.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      relative.href = urlFormat(relative);
      return relative;
    }
    source.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      relative.pathname = relPath.join('/');
    }
    source.pathname = relative.pathname;
    source.search = relative.search;
    source.query = relative.query;
    source.host = relative.host || '';
    source.auth = relative.auth;
    source.hostname = relative.hostname || relative.host;
    source.port = relative.port;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.slashes = source.slashes || relative.slashes;
    source.href = urlFormat(source);
    return source;
  }

  var isSourceAbs = (source.pathname && source.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host !== undefined ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (source.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = source.pathname && source.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = source.protocol &&
          !slashedProtocol[source.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // source.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {

    delete source.hostname;
    delete source.port;
    if (source.host) {
      if (srcPath[0] === '') srcPath[0] = source.host;
      else srcPath.unshift(source.host);
    }
    delete source.host;
    if (relative.protocol) {
      delete relative.hostname;
      delete relative.port;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      delete relative.host;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    source.host = (relative.host || relative.host === '') ?
                      relative.host : source.host;
    source.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : source.hostname;
    source.search = relative.search;
    source.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    source.search = relative.search;
    source.query = relative.query;
  } else if ('search' in relative) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      source.hostname = source.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = source.host && source.host.indexOf('@') > 0 ?
                       source.host.split('@') : false;
      if (authInHost) {
        source.auth = authInHost.shift();
        source.host = source.hostname = authInHost.shift();
      }
    }
    source.search = relative.search;
    source.query = relative.query;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.href = urlFormat(source);
    return source;
  }
  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    delete source.pathname;
    //to support http.request
    if (!source.search) {
      source.path = '/' + source.search;
    } else {
      delete source.path;
    }
    source.href = urlFormat(source);
    return source;
  }
  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (source.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    source.hostname = source.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = source.host && source.host.indexOf('@') > 0 ?
                     source.host.split('@') : false;
    if (authInHost) {
      source.auth = authInHost.shift();
      source.host = source.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (source.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  source.pathname = srcPath.join('/');
  //to support request.http
  if (source.pathname !== undefined || source.search !== undefined) {
    source.path = (source.pathname ? source.pathname : '') +
                  (source.search ? source.search : '');
  }
  source.auth = relative.auth || source.auth;
  source.slashes = source.slashes || relative.slashes;
  source.href = urlFormat(source);
  return source;
}

function parseHost(host) {
  var out = {};
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      out.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) out.hostname = host;
  return out;
}

}());

},{"punycode":2,"querrse = parse;

},{}],8:[function(_dereq_,module,exports){
module.exports = _dereq_("./jquery.build.js");
},{"./jquery.b   }
}
)();


},{}],10:[function(_dereq_,module,exports){
var $ = _dereq_("./jquery.js");
var comparators = _dereq_("./comparators.js");
var fh = _dereq_("./fields/fieldhelpers.js");
//Deals with visiblity rules, dependency management

module.exports = {
  getChangeMap:getChangeMap,  
  fieldChangeChecker:fieldChangeChecker,
  applyPicklistAlterations:applyPicklistAlterations
}

function getChangeMap(fields, formDescriptor){
  var changeMap ={};
  $.each(fields, function(i, field){
    if(field.Datatype == "hidden" || field.Datatype == "profiling"){
      //Don't evaluate visibility rules on hidden or profiling fields.
      return;
    }
    var vr = field.VisibilityRule;
    if(vr){
      //Every field in a fieldset is dependent on the fieldset.
      if(field.Datatype == "fieldset"){
        var childFields = fh.flatten(formDescriptor.fieldsetRows[""+field.Id]);
        var deps = changeMap[field.Name];
        if(!deps){
          deps = [];
        }
        deps = deps.concat($.map(childFields, function (f){return f.Name;}));
        changeMap[field.Name] = deps;
      }
      //New format has more than one rule.
      var rules = vr.rules || [vr];
    ndents;
      });
    }
  });
  returrriveRule};
  }
}

},{"./comparators.js":12,"./fields/fieldhelpers.js":16,"./jqueeturn true;
}
},{}],12:[function(_dereq_,module,exports){
;            
}


var comparators = {
  //tests if any elements from array are equal to any elements in alength > 0;
  },
  //returns true if all values in array a are not in arrangth === 0;
  },
  //returns true if there is no vngth === 0;
  },
  //returns true if there is a value
  notEmpty: function(a,b){
    return a.length > 0;
  },
  //returns true if there islength > 0;
  },
  //returns true if any value begins with any supplied valulength > 0;
  },
  //returns true if no value begins with any supplied value
 ngth === 0;
  },
   //returns true if any value begins with any supplied value
  endsWith: function(a,b){
    var fn = function(x,y){
      return x.lastIndexOf(y) === (x.length - y.length); 
    };
    return intersect(a, b, fn).length > 0;
  },
  //returns true if no value begins with any supplied value
  notEndsWith: function(a,blength); 
    };
    return intersect(a, b, fn).length === 0;
  },
  //returns true if any value contains any supplied valength > 0;
  },
  //returns true if no value contains any supplied valuength === 0;
  },
  //returns true if value is greater or equal to supplied v0] >= b[0];
  },
  //returns true if value is less than or equal to supplied 0] <= b[0];
  },
  //returns true if number is greater than supplied value[0] > b[0];
  },
  //returns true if number is less than supplied va[0] < b[0];
  },
  //returns true if number is between two given va[0] < b[1];
  },
  //returns true if number is not between two given value[0] > b[1];
  },
  //returns true if value is between two supplied datespVals[1]));
  },
  //returns true if value is not between two supplied dates
  pVals[1]));
  },
  //returns true if value is beforew Date());
  },
  //returns true if value is now or in the futuew Date());
  },
  //returns true if value is before givenpVals[0]));
  },
  //returns true if value is after givepVals[0]));
  },
  //returns true if value is equal to or before the given datepVals[0]));
  },
  //returns true if value is equal to or after the given datpVals[0]));
  }
};
module.exports = comparatieAllDomains;
},{"
    }
  }
}

},{"../jquery.js":31,"./fieldHelpers.js":15}],15:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;



var fieldHelpers = {};

fieldHelpet(/\s?;\s?/);
};

fieldHelpers.cap = function (s){
  return s.charAt(0).toUpperCase() + s.slice(1);
};

field return null;
};

fieldHelpers.formatStandardField = function(fieldElem, field, formData){
  var first = fieldHelpers.first;
  var fieldWrap;
  var elems = $b.docFrag([
    $b(".mktoOffset").css({width:first(field.OffsetWidth, formData.OffsetWidth, 0)}),
    fieldWrap = $b(".mktoFieldWrap",[
        $b("label.mktoLabel.mktoHasWidth", {"for":field.Name}, [
          $b(".mktoAsterix", "*"),
          $b.html(field.InputLabel)
        ]).css({
          width: first(field.LabelWidth, formData.LabelWidth, 0)
        }),
        $b(".mktoGutter.mktoHasWidth").css({width:first(field.GutterWidth,formData.GutterWidth,0)}),
        fieldElem.addClass("mktoHasWidth").css({width:first(field.FieldWidth, formData.FieldWidth, 0 )}),
        $b(".mktoClear")
      ]
    ),
    $b(".mktoClear")
  ]);
  if(field.IsRequired){
    fieldWrap.addClass("mktoRequiredField");
  }
  return elems;
}
fieldHelpers.renderInput = function (type, field, formData){
  var e = $b("input[type="+type+"].mktoField.mkto"+fieldHelpers.cap(type)+"Field", {
    id:field.Name,
    name:field.Name,
    placeholder:field.PlaceholderText,
    maxlength:field.Maxlength || 2000,
    title:field.Description
  })
  return e;
}
field= undefined; 
}
fieldHereturn accum;
}
fieleturn val;});
}

fieldHelpers.getFleturn fields;
};
/** 
* returns an object with a key with value = true for each Datatype in a list of fields 
* eg: {textarea:true, range:true, date:true} 
* see: getFlatenenedFields() for how to get a list of fields to pass to this.
*/
fieldHelpers.n fieldTypes;
};
/** 
* returns true if any field in fields list has a set property named propertyName 
* see: getFlatenenedFields() for how to get a list of fields to pass to this.
*/
fieldHelpers.anyFiereturn false;
};

fieldHelpers.gefieldsByName;
};


module.exports = fieldHelpers;
},{"../jques=_dereq_(15)
},{"../jquery.js":31}],17:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;
var fh = _dereq_("./fieldHelpers.js");

var checkbox = {};
module.exports = checkbox;
checkbox.fieldType = "checkbox";

var singletonValuePairs = {
  "true":"false",
  "1":"0",
  "Yes":"No",
  "yes":"no"
}
   
    }
  }
}
checkbox.newField = function (field, formData){
  var plVals = field.PicklistValues || [];

  var e = $b(".mktoLogicalField.mktoCheckboxList", {title:field.Description}, [
    $.map(plVals, function (val, i){
      var id = "mktoCheckbox_" + field.Id + "_" +i;
      return $b.docFrag([
        $b("input.mktoField", {
            name:field.Name,
            id:id,
            type:"checkbox",
            value:val.value
        }),
        $b("label", {"for":id}, [
          val.label || val.name
        ])
      ])
    })
  ]);
  if(field.IsLabelToLeft){
    e.addClass("mktoLabelToLeft");
  }
  var singletonValue = "";
  if(plVals.length === 1){
    if($.inArray(plVals[0].value, Object.keys(singletonValuePairs)) !== -1){
      singletonValue = plVals[0].value;
    }
  }
  return {
    name:field.Name,
    elem:fh.formatStandardField(e, field, formData),
    val:makeValFn(e, singletonValue),
    required:field.IsRequired,
  turn !!v;
    },
    validatorElem:e,
    validatorFocusElem:e.find("input:eq(0)"),
    onChange:function (fn){
      e.on("change", fn);
    }
  }
}
},{"../jquery.js":31,"./fieldHelpe
    }
  }
};
},{"../jquery.js":31,"./fieldHelpers.js":15}],19:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;
var fh = _dereq_("./fieldHelpers.js");
//pattern from http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
var emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var email = {};
module.exports = email;
email.fieldType = "email";
var checkEmail = function (e){
  var val = e.val() || "";
  if(!val){
    return true;
  }
  return val.match(emailPattern);
}
  
email.newField = function (field, formData){
  var e = fh.renderInput("email", field, formData);

  return {
    name:field.Name,
    elem:fh.formatStandardField(e, field, formData),
    val:$.proxy(e.val, e),
    required:field.IsRequired,
    validator:function (){
      return checkEmail(e);
    },
    validatorElem:e,
    onChange:function (fn){
      e.on("change", fn);
    }
  }
}
},{"../jquery.js":31,"./fieldHelpe
    }
  }
}

},{"../jquery.js":31,"./fieldHelpers.js":15}],21:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;
var fh = _dereq_("./fieldHelpers.js");

var radio = {};
module.exports = radio;
radio.fieldType = "radio";

   
    }
  }
}

radio.newField = function (field, formData){
  var e = $b(".mktoRadioList", {title:field.Description}, [
    $.map(field.PicklistValues || [], function (val, i){
      var id = "mktoRadio_" + field.Id + "_" +i;
      if(!i){
        firstVal = val.value;
      }
      return $b.docFrag([
        $b("input[type=radio].mktoField", {
            name:field.Name,
            id:id,
            value:val.value
        }),
        $b("label", {"for":id}, [
          val.label || val.name
        ])
      ])
    })
  ]);
  if(field.IsLabelToLeft){
    e.addClass("mktoLabelToLeft");
  }
  var valFn = makeValFn(e);
  return {
    name:field.Name,
    elem:fh.formatStandardField(e, field, formData),
    val:valFn,
    required:field.IsRequired,
    validatorElem:e,
    validatorFocusElem:e.find("input:eq(0)"),
    onChange:function (fn){
      e.on("change", fn);
    }
   }
}

},{"../jquery.js":31,"./fieldHelpers.js":15}],22:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;
var fh = _dereq_("./fieldHelpers.js");
var Modernizr = _dereq_("../modernizr.js");

var range = {};
module.exports = range;
range.fieldType = "range";

vv, min, max);
}

va return true;
}

  }
    }
  }
}

range.newField = function (field, formData){

  var e, valueText, rangeValue, arrowWrap;

  var min = field.MinimumNumber || 0;
  var max = field.MaximumNumber || 100;
  var wrap = $b(".mktoLogicalField.mktoRangeField", [
    rangeValue = $b(".mktoRangeValue", [
      arrowWrap = $b(".mktoRangeValueArrowWrap", $b(".mktoRangeValueArrow")),
      valueText = $b(".mktoRangeValueText", "" + field.MinimumNumber || 0 )
    ]),
    e = $b("input[type=range].mktoField", {
      id:field.Name,
      name:field.Name,
      min:min,
      max:max,
      step:field.StepNumber || 1,
      title:field.Description
    }).addClass("mktoHasWidth").css({width:fh.first(field.FieldWidth, formData.FieldWidth, 0alueText();
  },function (){
    wrap.removeClass("mktoHover");
  });
  if(!Modernizr.csstransforms){
    arrowWrap.addClass("mktoArrowImage");
  }
  
  var uprowOffset);
  }
  e.on('change', updateValueText);
  e.on('input', updateValueText);
  e.data("mktoRangeUpdate", updateValueText);
  //TODO: should probably be on mktoFormRender event instead.
  $("body").on("mktoRender", updateValueText);
  return {
    name:field.Name,
    val:makeValFn(e, field.MinimumNumber, field.MaximumNumber),
    elem:fh.formatStandardField(wrap, field, formData),
    required:field.IsRequired,
    validator:function (){
      return checkValid(e, min, max);
    },
    validatorElem:e,
    onChange:function (fn){
      e.on("change", fn);
    }
  }
}

},{"../jquery.js":31,"../modernizr.js":34,"./fieldHelpe;
    }
  }
}
},{"../jquery.js":31,"./fieldHelpe
    }
  }
}

},{"../jquery.js":31,"./fieldHelpe
    }
  }
}

},{"../jquery.js":31,"./fieldHelpers.js":15}],26:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;
var fh = _dereq_("./fieldHelpers.js");

   
    }
  }
};

var select = {};
module.exports = select;
select.fieldType = "picklist";
select.newField = function (field, formData){
  var e = 
    $b("select.mktoField", {id:field.Name, name:field.Name, title:field.Description}, [
      $.map(field.Pickli      }
      })
    ]);
  if(field.IsMultiselect){
    e.attr("multiple", "multiple");
    e.attr("size", field.VisibleRows || 5);
  }

  return {
    name:field.Name,
    elem:fh.formatStandardField(e, field, formData),
    val:makeValFn(e, field.IsMultiselect),
    required:field.IsRequired,
    validatorElem:e,
    onChange:function (fn){
      e.on("change", fn);
    }
  }
}
},{"../jquery.js":31,"./fieldHelpers.js":15}],27:[function(_dereq_,module,exports){
var $ = _dereq_("../jquery.js");
var $b = $.build;
var fh = _dereq_("./fieldHelpers.js");

var textarea = {};
module.exports = textarea;
textarea.fieldType = "textarea";
  
textarea.newField = function (field, formData){
  var maxlen = field.Maxlength || 2000;
  var e = $b("textarea.mktoField", {
      id:field.Name,
      name:field.Name,
      placeholder:field.PlaceholderText,
      rows: Math.max(2, field.VisibleRows || 2),
      title:field.Description
  });
  try{
    e.attr("maxlength", maxlen);
  }catch(ex){
    // broken IE compatibility mode attributes http://bugs.jquery.com/ticket/12577
    e.get(0).setAttribute("maxlength", "" + maxlen);
  }

  return {
    name:field.Name,
    elem:fh.formatStandardField(e, field, for;
      }
    },
    required:field.IsRequired,
    validatorElem:e,
    onChange:function (fn){
      e.on("change", fn);
    }
  }
}
},{"../jquery.js":31,"./fieldHelpers.js":15}],28:[function(_dereq_,module,exports){
var $ = _dereq_("./jquery.js");
var $b = $.build;
var Validation = _dereq_("./validation.js");
var measure = _dereq_("./measure.js");
var fh = _dereq_("./fields/fieldhelpers.js");
var cap = fh.cap;
var isSet = fh.isSet;
var first = fh.first;
var querystring = _dereq_("querystring");
var url = _dereq_("url");
var cookie = _dereq_("cookie");
var cookieHelper = _dereq_("./cookiehelper.js");
var tokenTemplate = _dereq_("./tokenTemplate.js");
var changeManager = _dereq_("./changeManager.js");
var urlHelper = _dereq_("./urlhelper.js");
var prefillCoercer = _dereq_("./prefillcoercer.js");
var iframeProxy = _dereq_("./iframeproxy.js");
var log = _dereq_('./safelog.js');

var fieldTypes = [
  _dereq_("./fields/inputRadio.js"),
  _dereq_("./fields/inputDate.js"),
  _dereq_("./fields/inputEmail.js"),
  _dereq_("./fields/inputCheckbox.js"),
  _dereq_("./fields/select.js"),
  _dereq_("./fields/inputRange.js"),
  _dereq_("./fields/inputText.js"),
  _dereq_("./fields/inputUrl.js"),
  _dereq_("./fields/inputTel.js"),
  _dereq_("./fields/inputNumber.js"),
  _dereq_("./fields/textarea.js"),
  _dereq_("./fields/currency.js")
];

var fieldTypeMap = {};
$.eType] = type;
});
//Add int and double as aliases for number
fieldTypeMap["int"] = fieldTypeMap.number;
fieldTypeMap["double"] = fieldTypeMap.number;
fieldTypeMap.single_checkbox = fieldTypeMap.checkbox;



var comparators = _dereq_("./comparators.js");

//Browser detection... All conditional JS code should NOT use these,
//and should instead use Modernizr to detect support for individual features.
//However, for ease of use when styling we will add .ie6 .ie7 and .ie8 classes into 
//the dom to minizimze stylesheet hacks for these three historic bad-boys.
var oldIeMatch =navigator.userAgent.match(/msie ([678])/i);
var oldIe = oldIeMatch? "ie"+oldIeMatch[1] : "";

var Form = function (formData, modernizr, opts){
  var pub = {};
  var priv = {};
  priv.hiddenFields = {
    formid:formData.Id
  };
  priv.values = {};
  priv.fieldsByName = fh.getFieldsByName(fh.getFlattenedFields(formData));
  priv.changeMap = changeManager.getChangeMap(priv.fieldsByName, formData);
  priv.fieldElemsByName = {};
  priv.canSubmit = formData.Status != "draft";

  var updateDependentFields = function (subjectField){
    var dependentFields = priv.changeMap[subjectField] || [];
    var fireRender = false;
    var renderCtx = {
      defaultValuesToSet:{},
      fieldsToCheck:[]
    }
    $.each(dependentFields, function (i, fieldName){
      var currentElem = priv.fieldElemsByName[fieldName];
      if(!currentElem || !currentElem[0] || !$.contains(priv.formElem[0], currentElem[0])){
        //element is in a nested fieldset, or progressive profiling block and fieldset is hidden, so currentElem is not in the DOM tree.
        //We can just bail out here, this field will be processed when the fieldset is re-shown.
        return; 
      }
      var currentlyShown = !currentElem.hasClass("mktoPlaceholder");
      var currentField = priv.fieldsByName[fieldName];

      var fieldChangeInfo = changeManager.fieldChangeChecker(currentField.VisibilityRule, pub.getValues());
      var shouldBeShown = fieldChangeInfo.show;

      var updateField = function (field, currentElem){
        var e = renderField(field, renderCtx);
        var colObj = wrapColField(e);
        var newElem = colObj.elem;
        newElem.hide();
        currentElem.replaceWith(newElem);
        if(isSmallViewport()){
          removeFixedWidthContents(newElem);
        }
        return newElem;
      };

      ewElem;
      };

      //If the field is aready shown and set to show...
      //  1. if it is a picklist, filter its picklist values based on the rule.
      //If the field is already shown and set to hide...
      //  1. hide the field
      //If the field is hidden and set to show...
      //  1. filter its picklist values based on the rule.
      //  2. show the field
      //If the field is hidden and set to hide
      //  1. do nothing.

      var f, newElem;
      if(currentlyShown && shouldBeShown){
        f = changeManager.applyPicklistAlterations(currentField, fieldChangeInfo.rule);
        if(f !== currentField){ //only alter the field if the rule change the field object.
          newElem = updateField(f, currentElem);
          newElem.show(); //no need to fade in, just show updated field.
          fireRender = true;
        }
      }
      if(currentlyShown && !shouldBeShown){
        newElem = hideField(currentField, currentElem);
        priv.fieldElemsByName[fieldName] = newElem;
        renderCtx.fieldsToCheck.push(currentField);
      }
      if(!currentlyShown && shouldBeShown){
        f = changeManager.applyPicklistAlterations(currentField, fieldChangeInfo.rule);
        newElem = updateField(f, currentElem);
        newElem.show();
        renderCtx.fieldsToCheck.push(currentField);
        fireRender = true;
      }
      if(newElem){
        priv.fieldElemsByName[fieldName] = newElem; 
      }

      if(currentField.Datatype == 'fieldset'){
        //if the fieldset was the subject of a show hide, we need to evaluate all its children
        updateDependentFields(currentField.Name);
      }
      if(fireRender && newElem && priv.validation){
        priv.validation.initScoped(newElem);
      }
    });
    pub.setValues(renderCtx.defaultValuesToSet);
    $.each(renderCtxeld.Name)
    });

    if(fireRender && $("body").data("mktoRendered")){
      //Fire this only it's happening after the initial render.
      $("body").trigger("mktoRender", pub);
    }
  }

  var renderField = function (field, renderCtx){
    var defaultValue = priv.values[field.Name] || field.DefaultValue || field.InputInitialValue;

    if(fieldTypeMap[field.Datatype]){
      var fieldData = fieldTypeMap[field.Datatype].newField(field, formData);
      fieldData.validationMessage = fieldData.validationMessage || field.ValidationMessage;
      fieldData.requiredMessage = fieldData.requiredMessage || field.RequiredMessage;
      if(fieldData.required){
        if(!fieldData.validatorElem){
          throw new Error("Required fields must have a validatorElem");
        }
        fieldData.validatorElem.addClass("mktoRequired");
      }
      if(priv.changeMap[field.Name]){
        fieldData.onChange(function (e){
          updateDependentFields(field.Name);
        })
      }
      if(isSet(defaultValue)){
        //Defer setting default values until form has all fields rendered, so that
        //dependendent fields for conditional display will be set.
        renderCtx.defaultValuesToSet[field.Name] = defaultValue;
      }
      var descriptor = $b(".mktoFieldDescriptor", fieldData.elem);
      descriptor.data("mktoFieldDescriptor", fieldData);
      return descriptor;
    }else if (field.Datatype == "htmltext" || field.Datatype == "richtext"){
      return $b.docFrag([
        $b(".mktoOffset.mktoHasWidth").css({width:first(field.OffsetWidth, formData.OffsetWidth, 0)}),
        $b(".mktoFieldWrap",[
          $b(".mktoHtmlText.mktoHasWidth", [$b.html(field.Htmltext || field.InputLabel)])
            .css({
              width: first(field.LabelWidth, formData.LabelWidth, 0)
            }),
          $b(".mktoClear")
        ]),
        $b(".mktoClear")
      ]);
    }else if (field.Datatype == "hidden"){
      var ch = field.InputSourceChannel;
      var sel = field.InputSourceSelector;
      var name = field.Name;
      var value = "";
      if(ch == "url" && sel){
        var qsObj = querystring.parse(location.search.replace("?", ""));
        value = qsObj[sel] || ""
      }else if (ch == "cookie" && sel){
        var cook = cookie.parse(document.cookie);
        value = cook[sel];
      }else if (ch == "referrer" && sel){
        var urlObj = url.parse(document.referrer, true);
        value = urlObj.query[sel];
      }
      if(!value && defaultValue){
        value = defaultValue;
      }
      renderCtx.defaultValuesToSet[name] = value;
      return makeHiddenField(value, name);
    }
    else if (field.Datatype == "fieldset"){
      var fieldsetRows = formData.fieldsetRows[field.Id.toString()] || [];
      if(!fieldsetRows.length){
        return null;
      }
      var fieldElem = $b("fieldset",[
        $b("legend", $b.html(field.InputLabel)),
        $.map(fieldsetRows, function (row, i){
          return renderRow(row, i, renderCtx);
        })
      ]);
      if(fieldsetRows.length && fieldsetRows[0].length){
        fieldElem.css({"padding-right":first(fieldsetRows[0][0].OffsetWidth,formData.OffsetWidth,0)})
      }
      return fieldElem;
    }
    else if(field.Datatype=="profiling"){
      return;
    }else {
      log("invalid data type: "+ field.Datatype);
    }
  }

  var renderProfiling = function (field, renderCtx){
    //see if we have values for any of the fieldset rows. 
    //Evict all fields that don't have a value set.
    //Evict all fieldset rows that have no fields, up until you hit the profiling Field Number
    //then render the resulting data as normal rows.

    var po = formData.ProcessOptions;
    var profilingNum = 0;
    if(po && po.profiling && po.profiling.numberOfProfilingFields){
      profilingNum = po.profiling.numberOfProfilingFields;
    }
    var maxFields = field.ProfilingFieldNumber || profilingNum;
    var fieldsetRows = formData.fieldsetRows[field.Id.toString()] || [];
    var cleanfieldsetRows = [];
    var fieldCount = 0;
    $.each(fieldsetRows, function (i, row){
      var cleanFields = [];
      var filledFields = [];
      if(formData.knownLead && formData.knownLead.filledFields){
        filledFields = formData.knownLead.filledFields;
      }
         
      });
      if(cleanFields.length > 0){
        cleanfieldsetRows.push(cleanFields);
      }
    });
    return $b.docFrag($.map(cleanfieldsetRows, function (row, i){
      return renderRow(row, i, renderCtx)
    }));
  }

  var wrapColField = function (fieldElem){
    var fieldWidth = 0; 
    if(fieldElem.nodeType == 11){
      colElem = $b(".mktoFormCol", fieldElem);
    }else{
      colElem = fieldElem.addClass("mktoFormCol"); 
    }
    fieldWidth += measure.measure(colElem).w;
    colElem.css("margin-bottom", formData.LineMargin || 0);
    return {elem:colElem, width:fieldWidth}
  }

  var renderRow = function (row,i,renderCtx){
    var rowWidth = 0;
    //special case for profiling
    //it is always the only field in its row
    //and will end up rendering child rows, but without any wrappers.
    if(row.length == 1 && row[0].Datatype == "profiling"){
      return renderProfiling(row[0], renderCtx);
    }
    var childRows = $.map(row, function (field, j){
        var fieldElem = renderField(field, renderCtx);
        if(!fieldElem){
          return null;
        } 
        var colObj = wrapColField(fieldElem);
        rowWidth += colObj.width;

        if(field.VisibilityRule && field.Datatype != "hidden"){
          renderCtx.fieldsToCheck.push(field);
        }

        priv.fieldElemsByName[field.Name] = colObj.elem;
        return colElem;                    
      });
    if(childRows.length === 0){
      return null;
    }

    var rowElem = $b(".mktoFormRow", [
      childRows,
      $b(".mktoClear")
    ]);
    if(rowWidth > priv.formWidth){
      priv.formWidth = rowWidth;
    }
    return rowElem;
  };

  var ma  return e;
  }

  var adues(obj);  
  };
   
  var isth() <= 480
  }

  var removeFixed        });
  };

      
    }
  };

  var buildButtonElem = function (formElem){
    var buttonStyle = formData.ButtonStyle || {className:""}
    var buttonText = formData.ButtonText || formData.SubmitLabel || "Submit";
    var buttonLocation = formData.ButtonLocation || "";
    var blInt = parseInt(buttonLocation, 10) || 0;
    btn = $b("span.mktoButtonWrap", [
            $b("button.mktoButton", {type:"submit"}, [
              buttonText
            ])
          ]).addClass(buttonStyle.className).css({"margin-left":blInt+"px"});
    return btn;
  };

  var rendelem
    ]);
  };

  var adIe);
    }
  }

  var onSuccess = function (values, followup){
    if(priv.onSuccess){
      return priv.onSuccess(values, followup);
    }
    return true;
  };


  eturn null;
  };

  //The form submission code expects array objects to have "[]" in their parameter name.
  //So with the object {foo:["bar", "baz"]} instead of the natural form encoding
  //foo=bar&foo=baz
  //it expects
  //foo[]=bar&foo[]=baz
  var funkiurn newObj;
  }

  var isFBTab = function (){
    var l = location;
    return l.hostname.indexOf(opts.fbTabDomain) != -1 && l.search.indexOf("fbTab=1") != -1
  }


  var findCorrectFollowUpUrl = function (data){
    var fbTab = isFBTab();
   
    var u = "";
    if(data){
      if(typeof formData.FormFollowup == "string"){
        u = formData.FormFollowup;
        if(fbTab && u.indexOf("https://") !== 0){
          //If you're on a FB tab and you've specified a landing page defined url and you didn't use https,
          //then we're assuming that you're using a landing page follow up page url.
          u = urlHelper.remapLandingPageUrl(u, location.href);
          u = urlHelper.addQueryParams(u, {fbTab:"1"});
        }
      }else{
        if(data.followUpUrl && typeof data.followUpUrl == "string"){
          u = data.followUpUrl;
        }else if(data.followUpUrl.url){
          if(fbTab && data.followUpUrl.isLandingPage){
            u = urlHelper.remapLandingPageUrl(data.followUpUrl.url, location.href);
            u = urlHelper.addQueryParams(u, {fbTab:"1"});
          }else{
            u = data.followUpUrl.url;
          }
        }
      }
    }    
    u = u || location.href;
    u = urlHelper.addQueryParams(u, {aliId:data.aliId});
    return u;
  }

  var doAjaxSubmit = function (){
    var values = pub.getValues();
    if(window.Munchkin){
      try{
        window.Munchkin.createTrackingCookie(true);
      }catch(e){
        //For IE 7
      }
    }
    var currPageQS = url.parse(location.href, true).query;

    var cook = cookie.parse(document.cookie);
    var hostname = url.parse(formData.action).hostname;
    var submitUrl = "//" + hostname + opts.formSubmitPath;
    var l = window.location;
    if(isFBTab()){
      //FB tabs use local urls to submit.
      submitUrl = opts.formSubmitPath;
      hostname = location.hostname;
    }
    var dataType = "json";
    var type = "POST";
    if(values._mkt_trk === undefined){
      values._mkt_trk = cook._mkto_trk;
    }
    values.formVid = formData.Vid;
    if(currPageQS.mkt_tok && values.mkt_tok === undefined){
      values.mkt_tok= currPageQS.mkt_tok;
    }
    var syndId = getSyndId(cook);
    if(syndId){
      values.MarketoSocialSyndicationId = syndId;
    } 
    values._mktoReferrer = location.href;
    var valueString = querystring.stringify(funkifyArrayParams(values));
    var success = function (data){
      if(data.error){
        onError(data);
      }else if(data.formId){
        var u = findCorrectFollowUpUrl(data);
        if(false === onSuccess(values, u)){
          return;  
        }
        cookieHelper.removeCookieAllDomains("_mkto_purl");
        location.href = u;
      }
    }
    var onError = function (){
      //TODO: What should happen if the form submission fails?
      log(arguments);
      if(priv.submitButton){
        var btn = priv.submitButton.find("button");
        btn.removeAttr('disabled');
        btn.html(formData.ButtonText || formData.SubmitLabel || "Submit")  
      }      
    }
    
    var ajaxParams = {
        type:type, data:valueString, dataType:dataType,
        url:submitUrl, success:success, error:onError
      };

    if(hostname != location.hostname){
      if(!modernizr.postmessage || !modernizr.json){
        ajaxParams.dataType = "jsonp";
        ajaxParams.submitUrl+="?callback=?";
        ajaxParams.type = "GET";
        $.ajax(ajaxParams);
      }
      else{
        iframeProxy.send(ajaxParams);
      }
    }else{
      $.ajax(ajaxParams);
    }
  };

  var onSubmit = function (e){
    var valid = pub.validate();
    if(priv.canSubmit && valid && priv.onSubmit){
      priv.onSubmit(pub);
    }
    e.preventDefault();
    if(!priv.canSubmit || !valid){
      e.stopPropagation();
      return false;    
    }else{
      //disable submit button elem.
      var btn = priv.submitButton.find("button");
      btn.attr('disabled','disabled');
      if(formData.ButtonSubmissionText){
        btn.html(formData.ButtonSubmissionText);
      }
      doAjaxSubmit();
      return false;
    }
  };

  var renderTemplateButton = function (attrs){
    var buttonStyle = formData.ButtonStyle || {className:""};
    var btn = $b("span.mktoButtonWrap", [
      $b("button.mktoButton", {type:"submit"}, [
        attrs["default"] || ""
      ])
    ]).addClass(buttonStyle.classNameSubmit();
    });
    return btn; 
  };

  var rende]);
    });
  };

  var renderTokenizedTemplate = function (){
    var templ = formData.ProcessOptions.knownLead.template;
    //The token parsing code in MLM eats its own tokens.  To get around this, we alter the token format
    //The real format is {{tag}}, but we change it to {[(tag)]}
    templ = templ.replace(/\{\[\((.*?)\)\]\}/g, "{{$1}}");
    var swaps = {};
    var count = 0;
    var swapForHt;
      }
    }
    
    var model = {
      lead:formData.knownLead,
      form:{
        Button:swapForHtmlPlaceholder(renderTemplateButton),
        NotYou:swapForHtmlPlaceholder(renderNotYouButton)
      }
    };
    var template = $b("div.mktoTemplateBox", $b.html(tokenTemplate(templ, model)));
  eWith(v);
    });
    return template;
  }

 .formElem);
  }

  pub.render = function (formElem){
    priv.id = formData.Vid || formData.Id || 1;
    if(!formElem){
      formElem = $("form#mktoForm_"+ (formData.Vid || formData.Id));
    }
    if(!formElem.length){
      formElem = $b("form#mktoForm_"+(formData.Vid || formData.Id));
    }
    priv.formElem = formElem;

    //Firefox and Webkit don't agree on how to style form validation messages
    //And IE < 9 don't support them at all.  Sadly, it's easier to just turn
    //off HTML5 form validation and do it all manually with JS.  Maybe in another
    //year, that won't be the case any more.
    formElem.attr({
      "novalidate":"novalidate"
    });
    formElem.css({
      "font-family":formData.FontFamily || "",
      "font-size":formData.FontSize || "",
      "color":formData.FontColor || ""
    });
    //Set up all the styles before initing the measuring element that we'll use to capture column widths.
    addFormClasses(formElem);
    measure.init(priv.formElem);

    priv.formWidth = 0;
    var renderCtx = {
      defaultValuesToSet: {},
      fieldsToCheck: []
    }
    var rowElems = $.mapnderCtx);
    });

    var socialSignOn = renderSocialSignOn();

    $.each(renderCtx}
      }
    });
   

    var buttonCss = "";
    var bs = formData.ButtonStyle;
    if(bs){
      if(bs.css){
        buttonCss += bs.css
      }
      if(bs.buttonColor){
        //This background color support is lame.  It should really come prebaked in the ButtonStyle.css
        buttonCss += "\n.mktoForm .mktoButtonWrap."+bs.className+" button.mktoButton {background:"+bs.buttonColor + ";}\n";
      }
    }
    formElem.append($b("style", {type:"text/css"}, buttonCss));
    if(formData.knownLead && formData.ProcessOptions && formData.ProcessOptions.knownLead && formData.ProcessOptions.knownLead.type == "custom"){
      formElem.append(renderTokenizedTemplate());
    }else{
      formElem.append($b.docFrag([
        socialSignOn,
        rowElems,
        $b(".mktoButtonRow", [
          priv.submitButton = buildButtonElem(formElem)
        ])
      ]));
    }

    addHiddenFields(formElem, priv.hiddenFields);

    pub.setValues(renderCtx.defaultValuesToSet);
  
    formElem.css({
      "width": Math.max(priv.submitButton ? priv.submitButton.outerWidth(): 0, priv.formWidth + 1)  //TODO: Figure out why things wrap wrong without adding 1 extra px.
    });

    formElem.on("submit", onSubmit);
    priv.validation = Validation(formElem);
    priv.validation.init();", true);
    },0);
    
    $(window).on("resize", onResize);
    onResize();

    if(oldIe == "ie7"){
      fixIEZIndex(formElem);
    }
    
    return formElem;
  };

  //Todo: move this to a polyfill that is dynamically loaded for only the chumps who use IE7 
  //or IE in "compatibility mode".
  vaength + 1);
  };

  pub.getId = function (){
    return priv.id;
  };

  pub.getFormElem = function (){
    return priv.formElem;
  };
  //less verbose;
  pub.getElem = pub.getFormElem();
    
  pub.validate = function (){
    var ok = priv.validation.check();
    if(priv.onValidate){
      priv.onValidate(ok);
    }
    return ok;
  };

  pub.onValidate = function (callback){
    priv.onValidate = callback;
    return pub;
  };
return pub;
  };

  pub.onSubmit = function (callback){
    priv.onSubmit = callback;
    return pub;
  };

  return pub;
  };

  p pub;
    }
  };
  //Fix spelling
  pub.submittable = pub.submitable;

  pub.al return ok;
  };

  var getFielrn nameMap;
  };

  pub.sets(coerced);
  }

  return pub;
  };

  pub.adobj);
    }
  };

  vals;
    }
  }arguments);
  };

  pub.shoreturn pub;
  };


  return pub;
}

module.exports = Form;

},{"./changeManager.js":10,"./comparators.js":12,"./cookiehelper.js":13,"./fields/currency.js":14,"./fields/fieldhelpers.js":16,"./fields/inputCheckbox.js":17,"./fields/inputDate.js":18,"./fields/inputEmail.js":19,"./fields/inputNumber.js":20,"./fields/inputRadio.js":21,"./fields/inputRange.js":22,"./fields/inputTel.js":23,"./fields/inputText.js":24,"./fields/inputUrl.js":25,"./fields/select.js":26,"./fields/textarea.js":27,"./iframeproxy.js":30,"./jquery.js":31,"./measure.js":32,"./prefillcoercer.js":35,"./safelog.js":36,"./tokenTemplate.js":38,"./urlhelper.js":39,"./validation.js":40,"cookie":7,"querystring":5,"url":6}],29:[function(_dereq_,module,exports){
if(typeof window !== 'undefined' && window.MktoForms2){
  //This prevents re-executing the script if the customer has inserted the script block twice;
  module.exports = window.MktoForms2;
  return;
}
var $ = _dereq_("./jquery.js");
var $b = _dereq_("jquery.build")($, document);
var Form = _dereq_("./form.js");
_dereq_("./shimsham.js");
var forms2 ={};
forms2.$ = $;
forms2.$b = $b;
forms2.Modernizr = _dereq_("./modernizr.js");
var modernizr = forms2.Modernizr;
var qs = _dereq_("querystring");
var fh = _dereq_("./fields/fieldhelpers.js");
var cookie = _dereq_("cookie");
var events = _dereq_("events");
var emitter = new events.EventEmitter();
var urlApi = _dereq_("url");
var iframeProxy = _dereq_("./iframeproxy.js");
var color = _dereq_("./color.js");
var log = _dereq_("./safelog.js");

var opts = {
  rootUrl:"",
  baseUrl:"/js/forms2/",
  skipPolyfills:false,
  formSubmitPath:"/index.php/leadCapture/save2",
  formXDPath:"/index.php/form/XDFrame",
  fbTabDomain:"marketo.com"
}
var forms = [];

formopts, _opts);
};

/* 
 * We test to see if both the theme style and base style have been loaded
 * We do this by checking to see if the border color and color on an 
 * element with id=mktoStyleLoaded are equal to #123456.
 */

var w checkLoad();
}
eet(url);
  }
}

//Generic error handler... logs to console and calls an optional callback.
vak(null); 
  }
};

//Tells you if an url is relative or not.
//so "/foo/bar/foo.bar" is relative
//but //host.name/foo.bar is not.
var ("//") !== 0;
}

va;
    }
  });
}

forms2.loadForm = function (rootUrl,munchkinId,formId,callback){
  forms2.setOptions({
    rootUrl:rootUrl,
    baseUrl:rootUrl + "/js/forms2/"
  });
  var success = function (data){
    data.action = (rootUrl.indexOf("http") === 0 ? rootUrl : location.protocol + rootUrl) + opts.formSubmitPath;
    forms2.newForm(data, function (form){
      form.addHiddenFields({
        "munchkinId":munchkinId
      });
      if(typeof forms2.getForm(formId) != 'undefined'){
        console.log("Form "+formId+" has already been rendered. Canceling render");
        form = forms2.getForm(formId);
      }
      else {
        form.render();
      }
      if(callback){
        callback(form);
      }
    });
  }
  var pageUrl = location.href.split("?")[0].split("#")[0];
  if(pageUrl.length > 255){
    pageUrl = pageUrl.substring(0, 255);
  }
  var url = rootUrl + "/index.php/form/getForm?munchkinId="+munchkinId+"&form="+formId+"&url="+encodeURIComponent(pageUrl);
  aata);
    }
  });
  return forms2;
};

foreturn modal;
};

var defer = function (fn){
  setTimeout(fn, 0);
}

/**
 * Checks to see if the lead is known.  callback will be called either with lead info or null if unknown lead.
 */
var getKnownLead = function (formId, munchkinId, filledFields, callback){
  if(window.mktoPreFillFields && mktoPreFillFields.FirstName && mktoPreFillFields.LastName){
    defer(function (){
      callback(mktoPreFillFields);
    });
    return;
  }
  var cooks = cookie.parse(document.cookie);
  if(cooks._mkto_trk){
    var url = opts.rootUrl + "/index.php/form/getKnownLead?_mkt_trk="+encodeURIComponent(cooks._mkto_trk)+"&form="+formId+"&munchkinId="+munchkinId+"&filledFields="+filledFields;
    ajaxRequest(url, function (data){
      if(data && data.error){
        handleError(data, callback);
      }else{
        callback(data);
      }
    });
    return; 
  }
  defer(callback);
};



forms2.newForm = function (formData, callback){
  if($("#mktoForms2BaseStyle").length === 0){
    var href = opts.baseUrl + "css/forms2.css";
    addStyle("mktoForms2BaseStyle", href); 
  }
  if($("#mktoForms2ThemeStyle").length === 0 && formData.ThemeStyle && formData.ThemeStyle.href){
    addStyle("mktoForms2ThemeStyle", opts.baseUrl + formData.ThemeStyle.href);
  }else{
    $("head").append($b("style", "#mktoStyleLoaded {color:#123456;}"));
  }
  if(formData.FontUrl){
    addStyle("mktoFontUrl", formData.FontUrl);
  }
  if(formData.ThemeStyleOverride){
    $("head").append($b("style", formData.ThemeStyleOverride));
  }
  if(!forms2._polyfillsLoaded){
    loadPolyfills(formData);
    forms2._polyfillsLoaded = true;
  }
  var po = formData.ProcessOptions;
  var waitCount = 0;
  
b=1") != -1
  }

  var waitFn = function (){
    waitCount--;
    if (waitCount <= 0){
      var form = Form(formData, modernizr, opts); 
      forms.push(form);
      if(callback){
        callback(form);
     form);
      });
      defer(function (){ 
        if(formData.action && !isFBTab()){
          //init the iframe proxy, but only if we're going to use it.
          var submitHost = urlApi.parse(formData.action).hostname;
          if(submitHost != location.hostname && modernizr.postmessage && modernizr.json){
            iframeProxy.init('//' + submitHost + opts.formXDPath);
          }  
        } 
      });     
    }
  };

  //We have to fetch the known lead info if progressive profiling is enabled and 
  //If we have a "custom" type knownLead, we'll end up rendering a template instead of a form.
  var hasProfiling = po && po.profiling && po.profiling.isEnabled;
  var isCustomKnowLeadTypeAndHasMunchkin = po && po.knownLead && po.knownLead.type == "custom" && formData.munchkinId;
  if(isCustomKnowLeadTypeAndHasMunchkin || hasProfiling){
    waitCount++;
    getKnownLead(formData.Vid, formData.munchkinId, hasProfiling, function (knownLead){
      if(knownLead){
        formData.knownLead = knownLead;
      }
      waitFn();
    });
  }
  
  waitCount++;
  waitForCssLoad(waitFn);
};

fi];
    }
  }
};

forms2.s.q || ""
  }
};

forms2.allForms = function (){
  return forms;
};


var    });
  });
};

/** Adds a callback that will be called exactly once for each form on the page that becomes "ready".
  * Readyness means that the form exists, has been initially rendered and had its initial callbacks called.
  * Generally, this will mean that a "ready" form is currently visible to the lead.
  * The callback is passed a single argument, a form object.
  * If there is already a form that is ready at the time this function is called,
  * the passed callback will be called immediately.
  */
foreturn forms2;
};

/*
 * Adds a callback that will be called every time any form renders.
 * Forms are rendered when initially created, then again every time that
 * visibility rules alter the structure of the form.
 * The callback will be passed a single argument, the form object of the form
 * that was rendered.
 */
forms2eturn forms2;
};

/**
 * Like onFormRender, this adds a callback that will be called every time a form is rendered.
 * Additionally, this will also call the callback immediately for all forms that have already been rendered.
 * The callback will be passed a single argument, the form object of the form
 * that was rendered.
 */
forms2eturn forms2;
};

var loadPolyfills = function (formData){
  //Load polyfills for browsers that need them.
  defer(function (){
    var fields = fh.getFlattenedFields(formData);
    var fieldTypes = fh.getFieldTypes(fields);
    var hasMask = fh.anyFieldHasProperty(fields, "FieldMask");

    if(!opts.skipPolyfills){
      var baseUrl = opts.baseUrl;
      var load = modernizr.load;
      load({
        test: (modernizr.input.placeholder),
        nope:[baseUrl+"polyfills/placeholder/placeholder.js", baseUrl+"polyfills/placeholder/placeholder.css"]
      });
      load({
        test:fieldTypes.date && !modernizr.inputtypes.date,
        yep:[baseUrl+"polyfills/datepicker/datepicker.js", baseUrl+"polyfills/datepicker/datepicker.css" ]
      });
      load({
        test:fieldTypes.range && !modernizr.inputtypes.range,
        yep:[baseUrl+"polyfills/range/range.js", baseUrl+"polyfills/range/range.css"]
      });
      load({
        test:fieldTypes.textarea && !modernizr.textareamaxlength,
        yep:[baseUrl+"polyfills/maxlength/maxlength.js"]
      });  
      load({
        test:hasMask,
        yep:[baseUrl+"polyfills/inputmask/inputmask.js"]
      });
    }  
  });
}

module.exports = forms2;
},{"./color.js":11,"./fields/fieldhelpers.js":16,"./form.js":28,"./iframeproxy.js":30,"./jquery.js":31,"./modal.js":33,"./modernizr.js":34,"./safelog.js":36,"./shimsham.js":37,"cookie":7,"events":1,"jquery.build":8,"querystring":5,"url":6}],30:[function(_dereq_,module,exports){
var $ = _dereq_("./jquery.js");
var urlApi = _dereq_("url");
var $b = $.build;

var pub = {};

var iframe = null;
var iframeWindow = null; 
var i = 0;
var ready = false;
var frameName = "mktoFormsXDIframe" + Math.random();
var inflight = {}
var q = [];
var iframeUrl;


function normalizeUrl(url){
  if(url.indexOf("//") === 0){
    return location.protocol + url;
  }else if (url.indexOf("/") ===  0){
    return location.protocol + "//" + location.hostname + url;
  }
  return url;
}

pub.init = function (_iframeUrl){
  if(!iframe){
    iframeUrl = normalizeUrl(_iframeUrl);
    $("body").append(iframe = 
      $b("iframe#MktoForms2XDIframe", {
        name:frameName
      }).css({display:"none"})
    );
    iframe.get(0).src = iframeUrl;
    iframeWindow = window.frames[frameName];
    $(window).on("message", onMessage);
  }
}

function onMessage (e){
  if(e.originalEvent && e.originalEvent.data){
    var d;
    try {
      d = $.parseJSON(e.originalEvent.data);
    }catch(ex){
      return;
    }
    if(d.mktoReady){
      onReady();
    }else if(d.mktoResponse){
      onResponse(d.mktoResponse) t exParams);
  }
}

pub.send = function (ajaxParams){
  if(!iframe){
    throw new Error("You must call init before calling send");
  }
  enqueue(ajaxParams);
}

module.exports = pub;


},{"./jquery.js":31,"url":6}],31:[function(_dereq_,module,exports){
/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07; } );
  }
}

})( windports = that;
},{"./jquery.js":31}],33:[function(_dereq_,module,exports){
var $ = _dereq_("./jquery.js");
var $b = $.build;
var measure = _dereq_("./measure.js");

var create = function (elem, opts){
  var that = {};
  opts = $.extend({closeBtn:true}, opts);

  var modalElem, maskElem, contentElem, mainElem, closeElem, winResizeEvt;

   modalElem;
  };
  that.modalCloseClicked = function (){
    that.hide();
  };
  var podocHeight);
  };
 eturn that;
  };

  that.hide = function (){
    maskElem.fadeOut();
    contentElem.fadeOut(function (){
 odal");
      },10);
    });
    return that;
  };
  return that;
}
module.exports = create;
},{"./jquery.js":31,"./measure.js":32}],34:[function(_dereq_,module,exports){
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-input-inputtypes-localstorage-postmessage-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_boxsizing-forms_validation-load
 * 
 * Modified by itaylor to simplify form validation checking and to make it browerserifyable. 
 */
;



var Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},


    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),


    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElemn !!ret;

    },



    isEvupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
   perty);
      };
    }
    else {
   ned'));
      };
    }


    if (!Function.prototype.bind) {
      Function.p bound;
    xt = || ''=== t(subsrn farn fa        }
    }    tests['tMessage;
    };



    tests['l        '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modeernizr; 
     };


    setCss('');
    modElem = inputElem = null;


    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.;
      }
    };

    return Modernizr;

})(window, window.document);
var yepnope = _dereq_("./yepnope.js");arguments,0));};

// developer.mozilla.org/en/CSS/box-sizing
// github.com/Modernizr/Modernizr/issues/248

Modernizr.addTentMode > 7);
});

Modernizr.addTest("borderradius", function (){
  return Modernizr.testAllProps('borderRadius');    
});

Modernizr.addTest('formvalidation', function(){
  var form = document.createElement('form');
  return ('checkValidity' in form);
});

Modernizr.tpRequest());
});

Modernizr.addTest('textngth' in ta);
});

Modernizr.addTest(''transform');
});

Modernizr.addTes 200;
   });
 });

Modernizr. JSON.parse);
});

module.exports = Modernizr;

},{"./yepnocoerceTypes;

},{"./fields/fieldHelpers.js":15,"./jqueon over
   );
    }
}
},{"./jqueokenTemplate;
},{"./jqueingPageUrl
};
},{"./jquery.js":31,"url":6}],40:[function(_dereq_,module,exports){
var $ = _dereq_("./jquery.js");
var $b = $.build;
var measure = _dereq_("./measure.js");
var modernizr = _dereq_("./modernizr.js");

var Validation = function (formElem){
  var that = {};
  that.currentErrorElem = null;
  that.currentErrorMsg = null;
  var selector = ".mktoFieldDescriptor";

  that.checkOne = function(elem){
    var okRequired = true;
    var okValidator = true;
    var desc = elem.data("mktoFieldDescriptor"); 
    var val = desc.val();
    if(desc.required){
      if(desc.requiredValFn){
        okRequired = desc.requiredValFn(val);
      }else{
        okRequired = !! $.trim(val);
      }
    }
    if(desc.validator){
      okValidator = desc.validator(desc.val());
    }
    if(okRequired && okValidator && desc.validatorElem){
      desc.validatorElem.removeClass("mktoInvalid");
      desc.validatorElem.addClass("mktoValid");
    }
    else if(desc.validatorElem){
      desc.validatorElem.removeClass("mktoValid");
      desc.validatorElem.addClass("mktoInvalid");
    }
    if(!okRequired){
      return desc.requiredMessage || desc.validationMessage || "This field is required";
    }
    if(!okValidator){
      return desc.validationMessage || "Validation failed";
    }
    return null;
  };

  that.ch    }      
  }

  that.ch     
    }
  }

  that.initScoped = function (scope){
    var initFn = function (i, e){
      e = $(e);
      e.data("mktoErrorShowBlocked", true);
    (this);
      }
      e.on("focusin", that.checkOneAndShow)
        .on("focusout", unblock)
        .on("keyup", unblock)
        .on("click", that.checkOneAndHide);
    };
    scope.find(selector).each(initFn);
    if(scope.is(selector)){
      var e = scope.get(0); 
      initFn.call(e, 0, e);
    }
  }(formElem);
  }

  that.showError = function (elem, errorMsg){
    if(that.currentErrorMsg){
      that.currentErrorMsg.remove();
    }
    var arrowWrap;
    var errorBox = $b(".mktoError", [
      arrowWrap = $b(".mktoErrorArrowWrap",[$b(".mktoErrorArrow")]),
      $b(".mktoErrorMsg", $b.html(errorMsg))
    ]).hide();

    if(!modernizr.csstransforms){
      arrowWrap.addClass("mktoArrowImage");
    }

    elem.after(errorBox);
    that.currentErrorElem = elem;
    that.currentErrorMsg = errorBox;
    var dims = measure.measure(errorBox);
    var right;
    var ow = elem.outerWidth();
    if( ow < dims.w){
      right = -1 * (dims.w - ow); 
    }else{
      right = (ow - dims.w) / 2;
    }
    errorBox.css({
      right: right,
      bottom: -1 * dims.h
    })
    errorBox.fadeIn();    
  };

  that.check = function (){
    that.clear();
    var firstError = null;
    formElem.find;
      }
    })
    if(firstError){
      var desc = firstError.data("mktoFieldDescriptor");
      var errorElem = desc.validatorFocusElem || desc.validatorElem;
      if(errorElem){
        setTimeout(function (){
          errorElem.focus();
        }, 10);
      }
      return false;
    }
    return true;
  };
.remove(); 
  };
  return that;
}

module.exports = Validation
},{"./jquery.js":31,"./measure.js":32,"./moderni, document );
},{}]},{},[29])
(29)
});
/*1.0*/
/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */

!function(e,t){typeof module!="undefined"&&module.exports?module.exports.browser=t():typeof define=="function"?define(t):this[e]=t()}("bowser",function(th>1&&n[1]||""}var r=n(/(ipod|iphone|ipad)/i).toLowerCase(),i=/like android/i.test(t),s=!i&&/android/i.test(t),o=n(/version\/(\d+(\.\d+)?)/i),u=/tablet/i.test(t),a=!u&&/[^-]mobi/i.test(t),f;/opera|opr/i.test(t)?f={name:"Opera",opera:e,version:o||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?f={name:"Windows Phone",windowsphone:e,msie:e,version:n(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(t)?f={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(t)?f={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(f={name:r=="iphone"?"iPhone":r=="ipad"?"iPad":"iPod"},o&&(f.version=o)):/sailfish/i.test(t)?f={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?f={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(f={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(f.firefoxos=e)):/silk/i.test(t)?f={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:s?f={name:"Android",version:o}:/phantom/i.test(t)?f={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?f={name:"BlackBerry",blackberry:e,version:o||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(f={name:"WebOS",webos:e,version:o||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(f.touchpad=e)):/bada/i.test(t)?f={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?f={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||o}:/safari/i.test(t)?f={name:"Safari",safari:e,version:o}:f={},/(apple)?webkit/i.test(t)?(f.name=f.name||"Webkit",f.webkit=e,!f.version&&o&&(f.version=o)):!f.opera&&/gecko\//i.test(t)&&(f.name=f.name||"Gecko",f.gecko=e,f.version=f.version||n(/gecko\/(\d+(\.\d+)?)/i)),s||f.silk?f.android=e:r&&(f[r]=e,f.ios=e);var l="";r?(l=n(/os (\d+([_\s]\d+)*) like mac os x/i),l=l.replace(/[_\s]/g,".")):s?l=n(/android[ \/-](\d+(\.\d+)*)/i):f.windowsphone?l=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):f.webos?l=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):f.blackberry?l=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):f.bada?l=n(/bada\/(\d+(\.\d+)*)/i):f.tizen&&(l=n(/tizen[\/\s](\d+(\.\d+)*)/i)),l&&(f.osversion=l);var c=l.split(".")[0];if(u||r=="ipad"||s&&(c==3||c==4&&!a)||f.silk)f.tablet=e;else if(a||r=="iphone"||r=="ipod"||s||f.blackberry||f.webos||f.bada)f.mobile=e;return f.msie&&f.version>=10||f.chrome&&f.version>=20||f.firefox&&f.version>=20||f.safari&&f.version>=6||f.opera&&f.version>=10||f.ios&&f.osversion&&f.osversion.split(".")[0]>=6?f.a=e:f.msie&&f.version<10||f.chrome&&f.version<20||f.firefox&&f.version<20||f.safari&&f.version<6||f.opera&&f.version<10||f.ios&&f.osversion&&f.osversion.split(".")[0]<6?f.c=e:f.x=e,f}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n._detect=t,n})
;
/*1.0*/
/*! jstz - v1.0.4 - 2012-12-12 */

(function(e){var t=function(){"use strin .setMonth(t),r},i=function(e){returnrnre",.timezones[e])};return{determine:a,date_is_dst:o}}();t.TimeZone=function(e){"use strict";var n=null,r=functio){]!="undefined"};return n=e,s()&&i(),{name:r}},t.olson={},t.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"Etc/GMT+2","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"},t.olson.10,1,1,0,0,0)}}(),t.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Beirut","Europe/Helsinki","Europe/Istanbul","Asia/Damascus","Asia/Jerusalem","Asia/Gaza"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"],"Asia/Baghdad":["Europe/Minsk"]},typeof exports!="undefined"?exports.jstz=t:e.jstz=t})(this);
/*1.0*/
var PasswordDialog = {
  tests: function(){
    return {
      "length-requirement":{
        regex: /./g,
        requirement: 8,
        message: "more characters"
      },
      "capital-letter":{
        regex: /[A-Z]/g,
        requirement: 1,
        message: "more capital letter"
      }
    }
  },

  lastValue: "",
  lastConfirmValue: "",

  updatePasswordRequirements: function(event){
    val = jQuery(this).val();
    if( val != PasswordDialog.lastValue ){
      PasswordDialog.lastValue = val;
      tests = PasswordDialog.tests();
      for(t in tests){
        test = tests[t];
        temp_val = val.match(test.regex);
        current = (temp_val == null) ? 0 : temp_val.length;
        update = (test.requirement - current >= 0) ? test.requirement - current : 0;
        jQuery('.' + t + '-num').html( update );
        if(update == 0){
          jQuery('.' + t).removeClass('requirement-unmet').addClass('requirement-met');
        }
        else{
          jQuery('.' + t).removeClass('requirement-met').addClass('requirement-unmet');
        }
      }

      if(event.data){
        if(event.data.button){
          if(jQuery('.requirement-unmet').length == 0){
            jQuery(event.data.button).addClass('sui-bttn--primary');  
          }
          else{
            jQuery(event.data.button).removeClass('sui-bttn--primary'); 
          }
        }
      }
    }
  },

  changeButtonColor: function(event){
      
    if( event.data && event.data.pw && event.data.button && event.data.confirm_field ){
      // password and confirm match && requirement is met && if there's an old pw field, it's filled in
      if( jQuery(event.data.confirm_field).val() == jQuery(event.data.pw).val() && jQuery('.requirement-unmet').length == 0 && (!event.data.old_field || !jQuery(event.data.old_field).is(':visible') || jQuery(event.data.old_field).val().length > 0) ) {
        jQuery(event.data.button).addClass(event.data.toggle_class);  
      }
      else {
        jQuery(event.data.button).removeClass(event.data.toggle_class); 
      }
    }
  
  },

  initPasswordDialog: function(pw_field, bttn, confirm_field, toggle_class, old_field){
    //if there is a confirm field, wait until it matches to change button, otherwise change when req met
    if(typeof(confirm_field) != 'undefined'){
      jQuery(confirm_field).on('change paste keyup', {button: bttn, pw: pw_field, confirm_field: confirm_field, toggle_class: toggle_class, old_field: old_field}, PasswordDialog.changeButtonColor);
      jQuery(pw_field).on('change paste keyup', PasswordDialog.updatePasswordRequirements);
      if(typeof(old_field) != 'undefined') {
        jQuery(old_field).on('change paste keyup', {button: bttn, pw: pw_field, confirm_field: confirm_field, toggle_class: toggle_class, old_field: old_field}, PasswordDialog.changeButtonColor);
      }
    }
    else{
      jQuery(pw_field).on('change paste keyup', {button: bttn}, PasswordDialog.updatePasswordRequirements);
    }
  }

}
;
/*1.0*/
/*
 * Backbone QueryParams Plugin v0.3.0  
 * https://github.com/jhudson8/backbone-query-parameters
 */

(function(e,f){"object"===typeof exports&&e.require?module.exports=f(require("underscore"),require("backbone")):"function"===typeof define&&define.amd?define(["underscok||e.Backbone)}):f(_,Backbone)})(this,function(e,f){IComponent(c))}var c=f.Router.arrayValueSplit;if(!a)return"";d=d||"";var h=[];e.each(a,function(a,f){f=d+f;if(e.isString(a)||e.isNumber(a)||e.isBoolean(a)||e.isDate(a))null!=
a&&h.push(f+"="+b(encodeURIComponent(a)));else if(e.isArray(a)){for(var g="",k=0;k<a.length;k++){var n=a[k];null!=n&&(g+=c+b(n))}g&&h.push(f+"="+g)}else(g=l(a,f+"."))&&h.push(g)});reth(d){return a}}function p(a,d){var b=a.split("&");e.each(b,function(a){a=a.split("=");d(a.shift(),a.join("="))})}var q=/^\?(.*)/,s=/\((.*?)\)/g,m=/(\(\?)?:\w+/g,r=/\*\w+/g,t=/[\-{}\[\]+?.,\\\^$|#\s]/g,u=/^([^\?]*)/,v=/[\:\*]([^\:\?\/]+)/g,
w=/^[#\/]|\s+$/g,x=/\/$/;f.Router.arrayValueSplit="|";e.extend(f.History.prototype,{getFragment:function(a,d){if(null==a)if(this._hasPushState||!this._wantsHashChange||d){a=this.location.pathname;var b=this.root.replace(x,""),c=this.location.search;a.indexOf(b)||(a=a.substr(b.length));c&&this._hasPushState&&(a+=c)}else a=this.getHash();return a.replace(w,"")},getQueryParameters:function(a,d){a=this.getFragment(a,d);var b=a.replace(u,"");if(b=b.match(q)){var b=b[1],c={};p(b,function(a,b){b=k(b);c[a]?
e.isString(c[a])?c[a]=[c[a],b]:c[a].push(b):c[a]=b});return c}return{}}});e.extend(f.Router.prototodedSplatParts},_routeToRegExp:function(a){var d=r.exec(a)||{index:-1},b=m.exec(a)||{index:-1},c=a.match(v)||[];a=a.replace(t,"\\$&").replace(s,"(?:$"([^\\/\\?]+)"}).replace(r,"([^??]*?)");a=new RegExp("^"+(a+"(\\?.*)?")+"$");0<=d.index&&(a.splatMatch=0<=b?d.index-b.index:-1);a.para.substring(1)});
a.namedParameters=this.namedParameters;return a},_extractParameters:function(a,d){var b=a.exec(d).slice(1),c={};0<b.length&&e.isUndefined(b[b.length-1])&&b.splice(b.length-1,1);var h=b.length&&b[b.length-1]&&b[b.length-1].match(q);if(h){var h=h[1],l={};if(h)amValue(a,b,l)})}b[b.length-1]=l;e.extend(c,l)}h=b.length;if(a.splatMatch&&this.encodedSplatParts){if(0>a.splatMatch)return b;h-=1}for(var g=0;g<h;g++)e.isString(b[g])&&(b[g]=k(b[g]),a.paramNames&&a.paramNames.length>=
g-1&&(c[a.paramNames[g]]=b[g]));return f.Router.namedParameters||a.namedParameters?[c]:b},_setParamValue:function(a,d,b){a=a.replace("[]","");a=a.replace("%5B%5D","");a=a.split(".");for(var c=0;c<a.length;c++){var e=a[c];c===a.length-1?b[e]=this._decodeParamValue(d,b[e]):b=b[e]=b[e]||{}}},_decodeParamValue:function(a,d){var b=f.Router.arrayValueSplit;if(b&&0<=a.indexOf(b)){for(var b=a.split(b),c=b.length-1;0<=c;c--)b[c]?b[c]=k(b[c]):b.splice(c,1);return b}a=k(a);return d?e.isArray(d)?(d.push(a),d):
[d,a]:a},toFragment:function(a,d){d&&(e.isString(d)||(d=l(d)),d&&(a+="?"+d));return a}})});
/*1.0*/
/*
  Required attributes on buttons:
  * data-init="auto" - tells the JS to auto initialize it
  * data-followable-class or data-subscribe-class - set to Group, Forum, VendorPage, User, or Blog
  * data-followable-id or data-subscribe-id - ID of item being followed or subscribed to

  Example follow button:

    HTML:
    <a class="sui-bttn sui-followbttn" data-followable-id="ID HERE" data-toggle="followbttn" data-followable-class="Group" data-init="auto" href="#" onclick="return false;" rel="tooltip" title=" "><span class="button-text">Follow</span></a>

    Ruby:
    followbutton(group, {"data-init" => "auto"})

  Example subscribe button:

    HTML:
    <a class="sui-bttn" href="#" data-init="auto" data-subscribe-class="Forum" data-subscribe-id="ID HERE">Subscribe</a>

    Ruby:
    button('Subscribe', '#', {"data-init" => "auto", "data-subscribe-class" => "Forum", "data-subscribe-id" => forum.id})
*/


(function($) {
  $(window).load(function() {
    if($('[data-init=auto][data-followable-class=Group]').length > 0) {
      UserFollows.initFollowGroupBttns();
    }
    if($('[data-init=auto][data-subscribe-class=Forum]').length > 0) {
      UserFollows.initSubscribeForumBttns();
    }
    if($('[data-init=auto][data-followable-class=VendorPage]').length > 0) {
      UserFollows.initFollowVendorPageBttns();
    }
    if($('[data-init=auto][data-followable-class=User]').length > 0) {
      UserFollows.initFollowUserBttns();
    }
    if($('[data-init=auto][data-followable-class=Blog]').length > 0) {
      UserFollows.initFollowBlogBttns();
    }
    if($('[data-init=auto][data-subscribe-class=Blog]').length > 0) {
      UserFollows.initSubscribeBlogBttns();
    }
  });

  window.UserFollows = {

    /* Generic call for all follow buttons. Needs the following:
      api_url - url it should call to get ids of what the user follows
      class - what is the user following? (group, vendor_page, etc)
      follow_url
      unfollow_url
    */
    initFollowBttns: function(data) {
      var bttns = '[data-init=auto][data-followable-class=' + data['class'] + ']';

      if(User.kind == 'guest') {
        $(bttns).on('follow', function(e) {
          e.preventDefault();
          JoinAndLogin.trackAndShowForm('join', { label: data['class'] + ' follow button' });
        });
        $(bttns).on('unfollow', function(e) {
          e.preventDefault();
          JoinAndLogin.trackAndShowForm('join', { label: data['class'] + ' unfollow button' });
        });
        return;
      }

      $.get(data['api_url']).success(function(ids) {
        var followed_ids = ids;

        $(bttns).each(function(index, bttn) {
          var id = $(bttn).attr('data-followable-id');
          id = id ? parseInt(id) : 0;
          var following;
          if(followed_ids.indexOf(id) != -1) {
            $(bttn).addClass('following');
            $(bttn).attr('data-following', true);
            following = true;
          }
          else {
            $(bttn).removeClass('following');
            $(bttn).attr('data-following', false);
            following = false;
          }
          $(bttn).followbutton({following: following});
          var follow_url = data['follow_url'].replace('ID', id);
          var unfollow_url = data['unfollow_url'].replace('ID', id);
          $(bttn).on('follow', function() {
            $.post(follow_url).error(function() {
              UIHelpers.showUnhandledError("Could not follow");
            });
          });
          $(bttn).on('unfollow', function() {
            $.post(unfollow_url).error(function() {
              UIHelpers.showUnhandledError("Could not unfollow");
            });
          });
        });
      });

    },

    /* Generic call for all subscribe buttons. Needs the following:
      api_url - url it should call to get ids of what the user is subscribed to
      class - what is the user subscribing to? (forum, blog, etc)
      subscribe_url
      unsubscribe_url
    */
    initSubscribeBttns: function(data) {
      var bttns = '[data-init=auto][data-subscribe-class=' + data['class'] + ']';

      if(User.kind == 'guest') {
        $(bttns).on('click', function(e) {
          e.preventDefault();
          JoinAndLogin.trackAndShowForm('join', { label: data['class'] + ' subscribe button' });
        });
        return;
      }

      $.get(data['api_url']).success(function(ids) {

        var subscribed_ids = ids;
        $(bttns).each(function(index, bttn) {
          var id = $(bttn).attr('data-subscribe-id');
          id = id ? parseInt(id) : 0;

          if(subscribed_ids.indexOf(id) != -1) {
            UserFollows.updateSubscribeButtonText($(bttn), 'Unsubscribe');
            $(bttn).attr('data-subscribed', true);
          } else {
            UserFollows.updateSubscribeButtonText($(bttn), 'Subscribe');
            $(bttn).attr('data-subscribed', false);
          }

          $(bttn).off('click');
          $(bttn).on('click', function(e) {
            e.preventDefault();
            var subscribe_url = data['subscribe_url'].replace('ID', id);
            var unsubscribe_url = data['unsubscribe_url'].replace('ID', id);


            if($(bttn).attr('data-subscribed') == 'true') {
              UserFollows.updateSubscribeButtonText($(bttn), 'Subscribe');
              $(bttn).attr('data-subscribed', false);
              $.post(unsubscribe_url).error(function() {
                UIHelpers.showUnhandledError("Could not unsubscribe");
              });
            } else {
              UserFollows.updateSubscribeButtonText($(bttn), 'Unsubscribe');
              $(bttn).attr('data-subscribed', true);
              $.post(subscribe_url).error(function() {
                UIHelpers.showUnhandledError("Could not subscribe");
              });
            }
          });

        });

      });
    },

    updateSubscribeButtonText: function($el, text){
      if($el.find('.sui-icon-email').length){
        $el.find('span').html(text);
      } else {
        $el.html(text);
      }
    },

    initFollowGroupBttns: function() {
      UserFollows.initFollowBttns({
        api_url: '/api/user_follows/followed_group_ids',
        'class': 'Group',
        follow_url: '/group/ID/join?no_response=true',
        unfollow_url: '/group/ID/leave?no_response=true'
      });
    },

    initFollowVendorPageBttns: function() {
      UserFollows.initFollowBttns({
        api_url: '/api/user_follows/followed_vendor_page_ids',
        'class': 'VendorPage',
        follow_url: '/api/vendor_pages/toggle/?vendor_page_id=ID',
        unfollow_url: '/api/vendor_pages/toggle/?vendor_page_id=ID'
      });
    },

    initSubscribeForumBttns: function() {
      UserFollows.initSubscribeBttns({
        api_url: '/api/user_follows/subscribed_forum_ids',
        'class': 'Forum',
        subscribe_url: '/forum/subscribe/ID',
        unsubscribe_url: '/forum/unsubscribe/ID'
      });
    },

    initFollowUserBttns: function() {
      UserFollows.initFollowBttns({
        api_url: '/api/user_follows/followed_user_ids',
        'class': 'User',
        follow_url: '/users/ID/follow_with_id',
        unfollow_url: '/users/ID/unfollow_with_id'
      });
    },

    initFollowBlogBttns: function() {
      UserFollows.initFollowBttns({
        api_url: '/api/user_follows/followed_blog_ids',
        'class': 'Blog',
        follow_url: '/blogs/ID/follow_with_id',
        unfollow_url: '/blogs/ID/unfollow_with_id'
      });
    },

    initSubscribeBlogBttns: function() {
      UserFollows.initSubscribeBttns({
        api_url: '/api/user_follows/subscribed_blog_ids',
        'class': 'Blog',
        subscribe_url: '/blogs/ID/subscribe_with_id',
        unsubscribe_url: '/blogs/ID/unsubscribe_with_id'
      });
    }
  };
})(jQuery);
/*1.0*/
/**
  # ReadTheseNext

  ## Params:
    url {String} is the URL it will use to load more items
    itemId {Number} is the id of the curated item to leave out
      (to be used if you are on a curent item's page)
    limit {Number} is the amount of items to load next
    source {String} is the name of the page to be referenced in GA
    height {Number} is the pixels before the end of container it will
      fire the infinite scroll
    throttleTime {Number} is the amount of milliseconds to throttle the scroll

  ## Standard Usage:

  ```html.erb
  <%= render partial: 'shared/read_these_next', locals: { items: {your_items_variable} } %>
  ```

  ```css
  <% content_for :styles do %>
    <%= stylesheet_link_tag 'read_these_next' %>
  <% end %>
  ```

  ```js
  jQuery('.js-read-next-footer').read_this_next({
    itemId: {topicId},
    source: 'topic',
  });
  ```
**/


(function($) {
  "use strict";

  var defaultOptions = {
    url: '/api/curated_items/more_for_read_these_next',
    limit: 6,
    source: '',
    height: 400,
    throttleTime: 750,
    loadOnScroll: true,
    loadingCards: false,
    GACategory: 'read these next',
    initialLimit: false,
  };

  var ReadTheseNext = function(element, options) {
    this.$el = $(element);
    this.init( options );
  };

  ReadTheseNext.prototype = {

    init: function(options) {
      this.options = _.extend(defaultOptions, options);

      // Set initial card amount
      this.updateCardCount();

      this.columnContainer = this.$el.find('.card-columns');
      this.columns = this.columnContainer.find('.card-column');

      // Setup initial layout and items
      this.setItemPositionParams();

      // Initialize and setup infinite scroll
      this.scrollProcessing = false;
      this.setupInfiniteScroll();
      this.setupButton();

      this.shownAd = false;
    },
    setupButton: function(){
      var _readTheseNext = this;
      $('[data-read-more-load]').on('click', function(){
        $(this).button('loading');
        _readTheseNext.loadMoreCards();
        GoogleAnalytics.trackEvent(_readTheseNext.options.GACategory, 'click', 'read next load more', $(this).data().clickNum);
        $(this).data().clickNum++;
      });
    },
    u).length;
    },
    setItemPositionParams: function() {
      var _readTheseNext = this;

      var updateUrls = function(el, source, position) {
        // Strip away and overwrite previous query params
        var url = el.attr('href').split('?')[0];
        var newUrl = url + '?source=' + source + '&pos=' + position;

        el.attr('href', newUrl);
      };

      // Card column groups
      var num_columns = this.columns.length;

      this.columns.each(function (column_index) {
        column_index++;

        $(this).find('.card').each(function (row_index) {
          row_index++;

          var el = $(this); // .card $ object
          var position = ((row_index -1) * num_columns) + column_index;

          if (el.attr('href')) {
            updateUrls(el, _readTheseNext.options.source, position);
          }

          el.find('a').each(function () {
            updateUrls($(this), _readTheseNext.options.source, position);
          });
        });
      });
    },
    ajaxParams: function() {
      // Set all the params available now...add the offset at each call
      if (this.numCards === 0 && this.options.initialLimit){
        var params = { limit: this.options.initialLimit };
      } else {
        var params = { limit: this.options.limit };
      }

      if(!_.isNull(this.options.itemId) && !_.isUndefined(this.options.itemId)) {
        params.item_id = this.options.itemId;
      }
      return params;
    },
    setupInfiniteScroll: function () {
      var _readTheseNext = this;
      if (!_readTheseNext.options.loadOnScroll && _readTheseNext.numCards > 0){
        return;
      }

      $(window).on('scroll.read_these_next', _.throttle(function() {
        if (_readTheseNext.loadingCards) return;

        var win = $(window);
        var winBottom = win.scrollTop() + win.height();

        var cardColumnsBottom = _readTheseNext.columnContainer.offset().top + _readTheseNext.columnContainer.outerHeight();

        if (winBottom >= (cardColumnsBottom - _readTheseNext.options.height)) {
          _readTheseNext.loadMoreCards();
        }

      }, _readTheseNext.options.throttleTime, { trailing: false }));
    },
    loadMoreCards: function(){
      var _readTheseNext = this;
      if (_readTheseNext.loadingCards){
        return;
      }
      _readTheseNext.loadingCards = true
      // Add the current card offset to our static ajax params
      var params = _.extend(_readTheseNext.ajaxParams(), { offset: _readTheseNext.numCards });

      $.get(_readTheseNext.options.url, params,
        function(response_data, success, jqxhr) {
          var html;
          if (jqxhr.getResponseHeader('Content-Type').indexOf('application/json') !== -1 ) {
            html = response_data.cards_html
          } else {
            html = response_data;
          }

          var inserted = [],
            gekkoSacrifice,
            carryOverCard = false;

          // disperse new cards into their respective columns
          $(html).find('.card-column').each(function(i) {
            var el = $(this);
            if (carryOverCard){
              el.append(carryOverCard)
              carryOverCard = false;
            }
            var cards = el.find('.card');
            cards.addClass('faded-out');

            // the corresponding column to append the cards to!
            var col = $(_readTheseNext.columns[i]);

            // adjust the heights of the parent cols...
            col.css('height', 'auto');

            // Create a div for the ad if it's the first call
            // We want to put this in the middle column
            if (!_readTheseNext.shownAd && i === Math.floor(_readTheseNext.columns.length / 2)) {
              gekkoSacrifice = document.createElement('div');
              gekkoSacrifice.id = 'read_more';
              gekkoSacrifice.className = 'card generic-card sui-opt-in';
              gekkoSacrifice.style.display = 'none';

              carryOverCard = el.find('.card:last').detach();
              col.append(gekkoSacrifice);
            }

            // throw 'em in!
            col.append(el.html());

            // we have to re-select the cards since their HTML was inserted...
            var finalCards = col.find('.card');
            inserted = $.merge(inserted, finalCards.slice(finalCards.length - cards.length));
          });
          $('.sui-custom-footer .read-next-footer')
            .append('<div data-optimize-trigger="read-these-next"></div>');

          $('.card.faded-out').removeClass('faded-out');
          if (!_readTheseNext.shownAd && gekkoSacrifice) {
           ;
            });

            _readTheseNext.shownAd = true;
          }

          // Update URLs on the new cards to have source and pos query parameters
          _readTheseNext.setItemPositionParams();
          _readTheseNext.updateCardCount();
          if (!_readTheseNext.options.loadOnScroll && _readTheseNext.numCards > 0){
            // stop loading on scroll after loading first set of cards
            $(window).off('scroll.read_these_next');
          }
          _readTheseNext.loadingCards = false;
        })
        .always(function(){
          $('[data-read-more-load]').button('reset');
        });
    }

  };

  $.fn.read_these_next = function(option) {
    return this.each(function() {
      var options = (typeof option == 'object') && option;
      var data = $(this).data("read_these_next");

      if( !data ) {
        $(this).data('read_these_next', new ReadTheseNext( this, options) );
      }
      else {
        data.init(options);
      }
    });
  };

})(jQuery);
/*1.0*/
(function($) {
  'use strict';

  window.AuthorCard = {
    init: function() {
      $('[data-shared-author-card]').find('[data-followpath][data-unfollowpath]')
          .sui_follow_button({ template: 'outline' })
          .on('sui-follow-button:followed',   $.proxy(this.markFollow, this) )
          .on('sui-follow-button:unfollowed', $.proxy(this.markUnfollow, this) );
    },

    markFollow: function(event, followButton) {
      $.post(followButton.options.followpath);
    },

  lowpath);
    }
  };

  $(function() {
    window.AuthorCard.init();
  });
})(jQuery);
/*1.0*/
/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.4 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
,i())},0)}function i(){for(var a=H.length-1;a),a.mode=-1}function n(){for(var a=H.length-1;a)},500)}function w(){ce(b,1))}var F,G,H=[],I=!1,J=a.documentElement,K=function(){},L="hidden",M="visibilitychange";void 0!==a.webkitHidden&&(L="webkitHidden",M="webkitvisibilitychange"),b.getComputedStyle||c();for(var N=["","-webkit-","-moz-","-ms-"],O=document.createElement("div"),P=N.length-1;P>=0;P--){try{O.style.position=N[P]+"sticky"}catch(Q){}""!=O.style.position&&c()}f(),b.Stickyfill={stickies:H,add:D,remove:E,init:y,rebuild:z,pause:A,stop:B,kill:C}}(document,window),(this)}),this}}(window.jQuery);
/*1.0*/

(function($){
  'use strict';

  window.authorSidebar = {
    init: function() {
      $('[data-sidebar-actions]').Stickyfill();
    }
  };

  $(function() {
    window.authorSidebar.init();
  });

})(jQuery);
/*1.0*/
(function($){
  // Numeric Constants
  var MIN_WINDOW_VERTICAL_SCROLL_POSITION = 250,
    SCROLL_HANDLER_THROTTLE_DELAY = 250,
    BASE_WINDOW_VERTICAL_SCROLL_POSITION = 0,
    SMOOTH_SCROLL_TO_TOP_DURATION = 800,

    // General use variables
    $backToTopButton,

    // Callback functions
    backToTopShow = function () {
      var snapSlideIn = $('.snap-slidein');

      $backToTopButton.toggleClass('back-to-top_button--animated',
        !(snapSlideIn && snapSlideIn.hasClass('snap-slidein--visible')));

      if ($(window).scrollTop() < MIN_WINDOW_VERTICAL_SCROLL_POSITION) {
        $backToTopButton.removeClass('back-to-top_button--shown');

      } else if (!$backToTopButton.hasClass('back-to-top_button--shown')) {
        $backToTopButton.addClass('back-to-top_button--shown');
      }
    },

    backToTopClick = function (e) {
      e.stopImmediatePropagation();

      $('html, body').animate(
        {scrollTop: BASE_WINDOW_VERTICAL_SCROLL_POSITION},
        SMOOTH_SCROLL_TO_TOP_DURATION,
        'easeOutQuint');

      return false;
    };

  window.BackToTopButton = {
    insert : function () {
      var $parent = $('[data-back-to-top-container]');

      $backToTopButton = $parent.find('[data-back-to-top-button]');

      // Only insert the button if the parent is present, and it doesn't
      // already have a button, and never when mobile is enabled
      if ($UI.useMobile || !$parent.length || $backToTopButton.length) {
        return;
      }

      // Append the button to the parent element
      $backToTopButton = $parent
        .append('<a class="sui-bttn back-to-top_button" data-back-to-top-button href="#"><span class="sui-caret-inverted"></span>Back to Top</a>')
        .find('[data-back-to-top-button]');

      // Add a throttled function to the window scroll to show or hide
      // the button at the MIN_WINDOW_VERTICAL_SCROLL_POSITION
      $(window).scroll(_.throttle(backToTopShow, SCROLL_HANDLER_THROTTLE_DELAY));

      // Add the click handler to the button that smooth scrolls back to top
      $backToTopButton.click(backToTopClick);

    } // end insert()
  };

  $(function() {
    BackToTopButton.insert();
  });
}(jQuery));
/*1.0*/
(function(jQuery) {
  window.bigSearch = bigSearch;
  function bigSearch(gaEventCategory) {
    jQuery(function($) {
      //--------------------------------------------------
      // Search initialization
      //--------------------------------------------------

      window.GlobalSearch = new $UI.GlobalSearch($('[data-menu-type="homepage-search"]'));
      window.GlobalSearch.ahing...
      };
      window.GlobalSearch.activate();
      window.noDefaultGA = true;
      var $searchInput = $(".homepage-search form input[type='text']");
      $searchInput.after("<a href='#' class='search-submit' data-action='search-submit'></a>");
      if ($('[data-mobile-view]').attr('data-mobile-view') === 'true') {
        $searchInput.attr("placeholder", "Search...");
      } else {
        $searchInput.attr("placeholder", "Search for answers, technology, and vendors...");
      }
      $searchInput.focus();
      $searchInput.hbar');
      });
      $("[data-action='search-submit']").on("click", function(event) {
        event.preventDefault();
        $(".homepage-search form ").submit();
      });

      $("[data-action='show-search']").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(".search-section").offset().top
        }, 500, function() {
          $(".search-section .search-box-wrapper input[type='text']").focus();
        });
      });

      /**   Search   **/

      $(".homepage-search form").on("submit", function(event) {
        GoogleAnalytics.trackEvent(gaEventCategory, "Search Query Submit", "Query: " + $(this).find("input[type='text']").val());
      });

      $(document).on("click", ".homepage-search .global-search_results a", function(event) {
        var $group = $(this).closest(".global-search_group");
        if($group.length > 0) {
          var typeText = $group.find(".global-search_group-name").text();
        }
        GoogleAnalytics.trackEvent(gaEventCategory, "Search Autocomplete Clicked", "Query: " + $(".homepage-search form input[type='text']").val() + " | Result Link: " + typeText + " - [" + $(this).text() + "] " + $(this).attr("href"));

      });
    });
  }
})(jQuery);
/*1.0*/
(function($) {

  "use strict";

  $(document).on('click', '[data-learn-trigger-join]', function() {
    JoinAndLogin.trackAndShowForm('join', { label: 'Sign Up Button Top' });
  });

  $(document).on('click', '[data-action="hix").hide();
  });

})(jQuery);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["components/learn/templates/learn_card"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class=\'sidebar-learn-card\'>\n\n  ');  if( success ){ ; __p.push('\n      <div class="sidebar-learn-card_success-message">\n         Congrats! You earned 1 credit.\n      </div>\n  ');  } ; __p.push('\n\n  <!-- Show recommended links for guest view or non-visitor view after difficulty level determined -->\n  ');  if( numRecommended >= 0 ) { ; __p.push('\n\n    ');  if (numRecommended > 0 ) { ; __p.push('\n\n      ');  if( User.kind === 'guest' ) { ; __p.push('\n        <div class=\'sidebar-learn-card_registration\'>\n          <div class=\'sidebar-learn-card_registration-text\'>\n            Sign up to track progress and receive recommendations on what to learn next.\n          </div>\n          ',  $UI.button('Sign Up', 'javascript:void(0);', {class: 'sui-bttn--primary sidebar-learn-card_registration-button'}).outerHTML ,'\n        </div>\n        <div class=\'sidebar-learn-card_heading\'>\n          Continue diving into ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n        </div>\n      ');  } else if( recommendedSectionId !== sectionId ) { ; __p.push('\n        <div class=\'sidebar-learn-card_heading\'>\n          Looks like you\'ve read everything in ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'!\n        </div>\n\n        <div class=\'sidebar-learn-card_sub-heading\'>\n          Why not beef up your IT knowledge in another area? Check out these related resources:\n        </div>\n      ');  } else { ; __p.push('\n        <div class=\'sidebar-learn-card_heading\'>\n          Read these next ...\n        </div>\n      ');  } ; __p.push('\n\n      ',  relatedLinks ,'\n\n    ');  } else { ; __p.push('\n      <div class=\'sidebar-learn-card_heading\'>\n        You\'ve read everything in ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),', but we\'re always adding new resources so check back regularly.\n      </div>\n      <div class=\'sidebar-learn-card_sub-heading\'>\n        In the meantime, why not help your fellow IT pro out (and earn points!) by answering questions in the\n        <a href=\'',  categoryPath ,'\'>',(''+ categoryName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</a> forum?\n      </div>\n    ');  } ; __p.push('\n\n    <!-- Non-visitor view, prevoke engagement to determine level of difficulty -->\n  ');  } else if( User.kind !== 'guest' ) { ; __p.push('\n      <div class=\'sidebar-learn-card_heading\'>\n        Read these next ...\n      </div>\n\n      ',  relatedLinks ,'\n\n  ');  } ; __p.push('\n\n  <!-- Progress box shows at all times in non-visitor view -->\n  ');  if ( User.kind !== 'guest') { ; __p.push('\n    <hr class=\'sidebar-learn-card_divider\'>\n    <div class=\'sidebar-learn-card_progress\'>\n      <div class=\'sidebar-learn-card_progress-header\'>\n        ');  if (numRecommended === 0 || (recommendedSectionId && recommendedSectionId !== sectionId) ) { ; __p.push('\n          You\'ve earned ',(''+ levelInfo.credits ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ levelInfo.credits === 1 ? 'credit' : 'credits' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' in this section! Check back later, we\'re always adding more resources.\n        ');  } else { ; __p.push('\n\n          ');  if(levelInfo.credits === 5) { ; __p.push('\n            Congrats! You reached level ',(''+ (levelInfo.level + 1) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' for ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'! Keep going to reach level ',(''+ (levelInfo.level + 2) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'.\n          ');  } else { ; __p.push('\n            Earn more credits by reading more pages.\n            Only ',(''+ (5 - levelInfo.credits) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ (5-levelInfo.credits) === 1 ? 'credit' : 'credits' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' to reach level ',(''+ (levelInfo.level + 1) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' for ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'.\n          ');  } ; __p.push('\n\n        ');  } ; __p.push('\n      </div>\n\n      <div class=\'learn-progress_bubbles\'>\n         ');  _(5).times(function(n){  ; __p.push('\n          <div class="learn-progress_bubble learn-progress_bubble--sidebar ',(''+ n < levelInfo.credits ? 'is-filled' : '' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ Learn.animateBubbles && n === (levelInfo.credits - 1) ? 'animated' : '' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'"></div>\n        ');  }); ; __p.push('\n      </div>\n    </div>\n  ');  } ; __p.push('\n\n  ');  if( User.kind === 'guest' ) { ; __p.push('\n    <a href=\'',  sectionPath ,'\' class=\'learn-see-more_link\'>\n      Check out more &raquo;\n    </a>\n  ');  } ; __p.push('\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["components/learn/templates/learn_footer"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class=\'learn-footer\'>\n\n  <!-- Show recommended links for guest view or non-visitor view after difficulty level determined -->\n  ');  if( numRecommended >= 0 ) { ; __p.push('\n\n    ');  if (numRecommended > 0 ) { ; __p.push('\n\n      ');  if( User.kind === 'guest' ) { ; __p.push('\n        <div class=\'learn-footer_heading\'>\n          Continue diving into ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n        </div>\n        <br>\n      ');  } else if( recommendedSectionId !== sectionId ) { ; __p.push('\n        <div class=\'learn-footer_heading\'>\n          Looks like you\'ve read everything in ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'!\n        </div>\n\n        <div class=\'learn-footer_sub-heading\'>\n          Why not beef up your IT knowledge in another area? Check out these related resources:\n        </div>\n\n      ');  } else { ; __p.push('\n        <div class=\'learn-footer_heading\'>\n          Continue diving into ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n        </div>\n\n        <div class=\'learn-footer_sub-heading\'>\n          ');  if( increasedDifficulty ) { ; __p.push('\n            Here\'s some more advanced content...\n          ');  } else { ; __p.push('\n            Awesome! Read ',(''+ numRecommended === 1 ? 'this' : 'these' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' next...\n          ');  } ; __p.push('\n        </div>\n      ');  } ; __p.push('\n\n      ',  relatedCards ,'\n\n    ');  } else { ; __p.push('\n\n      <div class=\'learn-footer_heading\'>\n        You\'ve read everything in ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),', but we\'re always adding new resources so check back regularly.\n      </div>\n      <div class=\'learn-footer_sub-heading\'>\n        In the meantime, why not help your fellow IT pro out (and earn points!) by answering questions in the\n        <a href=\'',  categoryPath ,'\'>',(''+ categoryName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</a> forum?\n      </div>\n\n    ');  } ; __p.push('\n\n  <!-- Non-visitor view, prevoke engagement to determine level of difficulty -->\n  ');  } else if( User.kind !== 'guest' ) { ; __p.push('\n    <div class=\'learn-footer_heading\'>\n      Continue diving into ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n    </div>\n\n    <div class=\'learn-footer_sub-heading\'>\n       Mark this ',(''+ contentType ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' as "complete" and get recommendations on what to read next!\n    </div>\n\n    <div class=\'learn-actions--footer\'>\n      ',  $UI.button('I learned something!', 'javascript:void(0)',
                       {'more-similar-content': true, class: 'learn-action learn-action--button learn-action--footer sui-bttn--primary'}).outerHTML ,'\n      ',  $UI.button('I already knew this...', 'javascript:void(0)',
                       {'more-difficult-content': true, class: 'learn-action learn-action--button learn-action--footer'}).outerHTML ,'\n    </div>\n  ');  } ; __p.push('\n\n  <!-- Progress box shows at all times in non-visitor view -->\n  ');  if( User.kind !== 'guest' ) { ; __p.push('\n    <div class=\'learn-progress\'>\n      <div class=\'learn-progress_header\'>\n        ');  if( numRecommended === 0 || (recommendedSectionId && recommendedSectionId !== sectionId) ) { ; __p.push('\n          You\'ve earned ',(''+ levelInfo.credits ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ levelInfo.credits === 1 ? 'credit' : 'credits' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' in this section! Check back later, we\'re always adding more resources.\n        ');  } else { ; __p.push('\n\n          ');  if(levelInfo.credits === 5) { ; __p.push('\n            Congrats! You reached level ',(''+ (levelInfo.level + 1) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' for ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'! Keep going to reach level ',(''+ (levelInfo.level + 2) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'.\n          ');  } else { ; __p.push('\n            Read more pages. Earn more credits. Know more stuff.\n            Only ',(''+ (5 - levelInfo.credits) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ (5-levelInfo.credits) === 1 ? 'credit' : 'credits' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' to reach level ',(''+ (levelInfo.level + 1) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' for ',(''+ sectionName ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'.\n          ');  } ; __p.push('\n\n        ');  } ; __p.push('\n      </div>\n\n      <div class=\'learn-progress_bubbles\'>\n        ');  _(5).times(function(n){  ; __p.push('\n          <div class="learn-progress_bubble ',(''+ n < levelInfo.credits ? 'is-filled' : '' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ Learn.animateBubbles && n === (levelInfo.credits - 1) ? 'animated' : '' ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'"></div>\n        ');  }); ; __p.push('\n      </div>\n    </div>\n  ');  } ; __p.push('\n\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/

(function($) {

  "use strict";

  window.Learn = {
    dataSelector: '[data-learn-data]',
    v2WidgetSelector: '[data-learn-widget]',
    init: function() {
      if( !Learn.enabled() ) { return; }

      this.data = JSON.parse($(this.dataSelector).text());
      Learn.data.success = false;

      Learn.renderFooter();
      Learn.renderCard();
      Learn.setupEvents();
      Learn.getRecommended();

      // only animate after first render
      Learn.data.animateBubbles = true;
    },

    enabled: function() {
      return $(this.dataSelector).length && !$(this.v2WidgetSelector).length;
    },

    terminate: function(){
      if( Learn.enabled() ) {
        $(this.dataSelector).parent().hide();
      }
    },

    recommended_api_v2_learn_content_path: function(id){
      var params = {more_difficult: Learn.data.increasedDifficulty };
      return '/api/v2/learn_contents/' + id + '/recommended?' + $.param(params);
    },

    mark_as_read_api_v2_learn_content: function(id){
      return '/api/v2/learn_contents/' + id + '/mark_as_read';
    },

    getRecommended: function(){
      $.get(Learn.recommended_api_v2_learn_content_path(Learn.data.contentId))
      .done(function(resp){
        Learn.data.relatedCards = resp.cards;
        Learn.data.relatedLinks = resp.links;
        Learn.data.numRecommended = resp.numRecommended;
        Learn.data.recommendedSectionId = resp.recommendedSectionId;
        Learn.renderFooter();
        Learn.renderCard();
      });
    },

    renderFooter: function(){
      if( !Learn.enabled() ) {
        return;
      }
      var $footer = $('[data-learn-footer]');
      if( $footer.length ){
        var html = JST['components/learn/templates/learn_footer'](Learn.data);
        $footer.html(html);
      }
    },

    renderCard: function(){
      if( !Learn.enabled() ) {
        return;
      }
      var $cardWrapper = $('[data-learn-card]');
      $cardWrapper.find('.sidebar-learn-card').remove();
      if( $cardWrapper.length ){
        var html = JST['components/learn/templates/learn_card'](Learn.data);
        $cardWrapper.prepend(html);
      }
    },

    markAsRead: function(){
      if ( User.kind === 'guest' ){
        return;
      }

      $.post(Learn.mark_as_read_api_v2_learn_content(Learn.data.contentId))
        .success(function() {
          Learn.data.levelInfo.credits += 1;
          Learn.data.success = true;
          Learn.renderCard();
          Learn.renderFooter();
        });
    },

    setupEvents: function(){
      var $body = $('body');

      $body.on('click', '[more-similar-content]', function(){
        GoogleAnalytics.trackEvent('Learn Progress Box', 'click', ($(this).hasClass('learn-action--sidebar') ? 'Right' : 'Bottom') + ' - Continue');
        Learn.markAsRead();
      });

      $body.on('click', '[more-difficult-content]', function(){
        GoogleAnalytics.trackEvent('Learn Progress Box', 'click', ($(this).hasClass('learn-action--sidebar') ? 'Right' : 'Bottom') + ' - Advance');
        Learn.data.increasedDifficulty = true;
        Learn.markAsRead();
      });

      $body.on('click', '[data-learn-card] .learn-links_learn-link', function(){
        var actionLabel = Learn.data.increasedDifficulty ? 'Advance' : 'Continue';
        GoogleAnalytics.trackEvent('Learn ' + actionLabel + ' Box', 'click', 'Right - ' + actionLabel);
      });

      $body.on('click', '[data-learn-footer] .learn-card--content-title-link', function(){
        var actionLabel = Learn.data.increasedDifficulty ? 'Advance' : 'Continue';
        GoogleAnalytics.trackEvent('Learn ' + actionLabel + ' Box', 'click', 'Bottom - ' + actionLabel);
      });

      $body.on('click', '.sidebar-learn-card_registton'});
      });

      $(window).on('scroll.learnGA', function() {
        if (Learn.sidebarProgressBoxLogged && Learn.footerProgressBoxLogged
            && Learn.sidebarLearnLinksLogged && Learn.footerLearnCardsLogged) {
          $(window).off('scroll.learnGA')
        }

        var sidebar = $('.learn-actions--sidebar'),
            footer = $('.learn-actions--footer'),
            learnLinks = $('.learn-links'),
            learnCards = $('.learn-cards'),
            actionLabel = Learn.data.increasedDifficulty ? 'Advance' : 'Continue',
            loggedInState = User.kind === 'guest' ? 'Logged-out' : 'Logged-in';

        if (!Learn.sidebarProgressBoxLogged && elementIsInView(sidebar[0])) {
          GoogleAnalytics.trackEvent('Learn Progress Box', 'show', 'Right ' + loggedInState);
          Learn.sidebarProgressBoxLogged = true;
        }

        if (!Learn.footerProgressBoxLogged && elementIsInView(footer[0])) {
          GoogleAnalytics.trackEvent('Learn Progress Box', 'show', 'Bottom ' + loggedInState);
          Learn.footerProgressBoxLogged = true;
        }

        if (!Learn.sidebarLearnLinksLogged && elementIsInView(learnLinks[0])) {
          GoogleAnalytics.trackEvent('Learn ' + actionLabel + ' Box', 'show', 'Right - ' + actionLabel);
          Learn.sidebarLearnLinksLogged = true;
        }

        if (!Learn.footerLearnCardsLogged && elementIsInView(learnCards[0])) {
          GoogleAnalytics.trackEvent('Learn ' + actionLabel + ' Box', 'show', 'Bottom - ' + actionLabel);
          Learn.footerLearnCardsLogged = true;
        }
      });

      $(window).on('scroll.endofLearn', function() {
        var authorCard = $('.author-card');
        var offset = authorCard.offset();
        if ((offset && ($(window).scrollTop() + $(window).height()) >= (offset.top))) {
          Learn.markAsRead();
          $(window).off('scroll.endofLearn');
        }
      });
    }
  };

  $(function(){
    Learn.init();
  });

  function elementIsInView(element) {
    if (!element) { return false; }

    var elementPositionInfo = element.getBoundingClientRect();
    var elementTop = elementPositionInfo.top;
    var elementBottom = elementPositionInfo.bottom;
    var windowHeight = $(window).height();

    return (elementTop >= 0 && elementBottom <= windowHeight);
  }

})(jQuery);
/*1.0*/
/**
  # SuiFollowButton
  
  ## Params:
    following {Boolean} is the user following the object (default=false)
    alternateActions {Array, Function} objects with link text and event names if you want a droplist when
                                       the user is already following the object (default=null)

  ## Standard Usage:

  ```html
  <div data-component="my-follow-button"></div>
  ```

  ```js
  jQuery('[data-component="my-follow-button"]').sui_follow_button({ following: true })
  .on( 'sui-follow-button:followed', function() { ... } )
  .on( 'sui-follow-button:unfollowed', function() { ... } );
  ```

  ## Extended Usage:

  Notes: `alternateActions` can also be just a literal array.

  ```html
  <div data-component="another-follow-button"></div>
  ```

  ```js
  jQuery('[data-component="another-follow-button"]').sui_follow_button({
    following: true,
    alternateActions: function() { return [
      { text: 'Do Something', action: 'foo' },
      { text: 'Another Thing', action: 'bar:thing' }
    ]; }
  })
  .on( 'sui-follow-button:followed', function() { ... } )
  .on( 'sui-follow-button:unfollowed', function() { ... } );
  .on( 'foo', function() { ... } )
  .on( 'bar:thing', function() { ... } );
  ```

**/

(function($) {

  "use strict";

  var normalTemplate = _.template('<div class="sui-bttn sui-bttn--small" data-action="follow-toggle"><span><%= text %></span></div>');
  var outlineTemplate = _.template('<div class="sui-bttn sui-bttn--outline" data-action="follow-toggle"><span><%= text %></span></div>');
  var primaryTemplate = _.template('<div class="sui-bttn sui-bttn--small sui-bttn--primary" data-action="follow-toggle"><span><%= text %></span></div>');
  var templateWithDropdown = _.template('<div class="sui-dropdown"><a class="sui-dropdown-toggle sui-bttn sui-bttn--small" data-toggle="dropdown" href="#" onclick="return false;"><%= text %> <span class="caret"></span></a><div class="sui-dropdown_content-caret"></div><ul class="sui-dropdown-menu" data-menu="alternate-actions"></ul></div>');
  var alternateActionTemplate = _.template('<li><a href="#"><%= text %></a></li>');

  var followEvent = 'sui-follow-button:followed';
  var unfollowEvent = 'sui-follow-button:unfollowed';

  var Su options );
  };

  SuiFollowButton.prototype = {

    init: function(options) {
      this.options = options;
      this.options = _.extend(this.options || {}, options, this.$el.data());

      if( !_.isNull(this.options.following) && !_.isUndefined(this.options.following) ) {
        this.following = this.options.following;
      }

      this.render();
    },

    render: function() {
      this.$el.addClass('sui-follow-button');

      if( this.following && this.alternateActions() ) {
        this.$el.html( templateWithDropdown( this.templateData() ) );

        var actionsMenu = this.$el.find('[data-menu="alternate-actions"]');

        _.each( this.alternateActions(), function(action) {
          var actionEl = $( alternateActionTemplate(action) );
          actionEl.on( 'click', $.proxy( this.fireAlternateAction, this, action.action ) );
          actionsMenu.append( actionEl );
        }, this );
      }
      else {
        if(this.options.template && this.options.template == 'outline') {
          this.$el.html( outlineTemplate( this.templateData() ) );
        }
        else if (this.options.template && this.options.template == 'primary') {
          this.$el.html( primaryTemplate( this.templateData() ) );
        }
        else {
          this.$el.html( normalTemplate( this.templateData() ) );
        }

        this.$el.find('[data-action="follow-toggle"]').on( 'click', $.proxy( this.toggle, this ) );
      }
    },

    templateData: function() {
      var text = this.following ? 'Following' : 'Follow';
      if (this.options.followers) {
        text += ' (' + this.options.followers + ')';
      }
      return {
        icon: this.following ? 'following' : 'follow',
        text: text
      };
    },

    alternateActions: function() {
      if( !this.options.alternateActions ) {
        return;
      }

      var alternateActions = this.options.alternateActions;
      if( typeof alternateActions === 'function' ) {
        alternateActions = alternateActions();
      }

      alternateActions = alternateActions.slice();
      alternateActions.push({ text: 'Unfollow', action: unfollowEvent });

      return alternateActions;
    },

    fireAlternateAction: function(action, event) {
      if( action === unfollowEvent ) {
        if (this.options.disableUnfollow){
          $UI.growl({
            type: 'error',
            caption: this.options.disableUnfollow.reason
          })
        }
        else{
          this.toggle(event);
        }
      }
      else {
        event.preventDefault();
        this.$el.trigger(action);
      }
    },

    toggle: function(event) {
      event.preventDefault();

      // If user is a guest, prompt to login
      // TODO: Find more elegant way to hook in besides relying on User global object
      if (User.kind === 'guest') {
        JoinAndLogin.trackAndShowForm('join', { label: 'Follow Button - ' + this.$el.data('followable-class') });
        return;
      }

      this.$el.trigger( this.following ? unfollowEvent : followEvent, this);
      this.following = !this.following;
      this.render();
    }

  };

  $.fn.sui_follow_button = function(option) {
    return this.each(function() {
      var options = (typeof option == 'object') && option;
      var data = $(this).data("follow_button");

      if( !data ) {
        $(this).data('follow_button', new SuiFollowButton( this, options) );
      }
      else {
        data.init(options);
      }

      if (typeof option == 'string') {
        data[option]();
      }
    });
  };

})(jQuery);
/*1.0*/
// This [jQuery](https://jquery.com/) plugin implements an `<iframe>`
// [transport](https://api.jquery.com/jQuery.ajax/#extending-ajax) so that
// `$.ajax()` calls support the uploading of files using standard HTML file
// input fields. This is done by switching the exchange from `XMLHttpRequest`
// to a hidden `iframe` element containing a form that is submitted.

// The [source for the plugin](https://github.com/cmlenz/jquery-iframe-transport)
// is available on [Github](https://github.com/) and licensed under the [MIT
// license](https://github.com/cmlenz/jquery-iframe-transport/blob/master/LICENSE).

// ## Usage

// To use this plugin, you simply add an `iframe` option with the value `true`
// to the Ajax settings an `$.ajax()` call, and specify the file fields to
// include in the submssion using the `files` option, which can be a selector,
// jQuery object, or a list of DOM elements containing one or more
// `<input type="file">` elements:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             files: $(":file", this),
//             iframe: true
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// The plugin will construct hidden `<iframe>` and `<form>` elements, add the
// file field(s) to that form, submit the form, and process the response.

// If you want to include other form fields in the form submission, include
// them in the `data` option, and set the `processData` option to `false`:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             data: $(":text", this).serializeArray(),
//             files: $(":file", this),
//             iframe: true,
//             processData: false
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// ### Response Data Types

// As the transport does not have access to the HTTP headers of the server
// response, it is not as simple to make use of the automatic content type
// detection provided by jQuery as with regular XHR. If you can't set the
// expected response data type (for example because it may vary depending on
// the outcome of processing by the server), you will need to employ a
// workaround on the server side: Send back an HTML document containing just a
// `<textarea>` element with a `data-type` attribute that specifies the MIME
// type, and put the actual payload in the textarea:

//     <textarea data-type="application/json">
//       {"ok": true, "message": "Thanks so much"}
//     </textarea>

// The iframe transport plugin will detect this and pass the value of the
// `data-type` attribute on to jQuery as if it was the "Content-Type" response
// header, thereby enabling the same kind of conversions that jQuery applies
// to regular responses. For the example above you should get a Javascript
// object as the `data` parameter of the `complete` callback, with the
// properties `ok: true` and `message: "Thanks so much"`.

// ### Handling Server Errors

// Another problem with using an `iframe` for file uploads is that it is
// impossible for the javascript code to determine the HTTP status code of the
// servers response. Effectively, all of the calls you make will look like they
// are getting successful responses, and thus invoke the `done()` or
// `complete()` callbacks. You can only communicate problems using the content
// of the response payload. For example, consider using a JSON response such as
// the following to indicate a problem with an uploaded file:

//     <textarea data-type="application/json">
//       {"ok": false, "message": "Please only upload reasonably sized files."}
//     </textarea>

// ### Compatibility

// This plugin has primarily been tested on Safari 5 (or later), Firefox 4 (or
// later), and Internet Explorer (all the way back to version 6). While I
// haven't found any issues with it so far, I'm fairly sure it still doesn't
// work around all the quirks in all different browsers. But the code is still
// pretty simple overall, so you should be able to fix it and contribute a
// patch :)

// ## Annotated Source

(function($, undefined) {
  "use strict";

  // Register a prefilter that checks whether the `iframe` option is set, and
  // switches to the "iframe" data type if it is `true`.
  $.ajaxPrefilter(function(options, origOptions, jqXHR) {
    if (options.iframe) {
      options.originalURL = options.url;
      return "iframe";
    }
  });

  // Register a transport for the "iframe" data type. It will only activate
  // when the "files" option has been set to a non-empty list of enabled file
  // inputs.
  $.ajaxTransport("iframe", function(options, origOptions, jqXHR) {
    var form = null,
        iframe = null,
        name = "iframe-" + $.now(),
        files = $(options.files).filter(":file:enabled"),
        markers = null,
        accepts = null;

    // This function gets called after a successful submission or an abortion
    // and should revert all changes made to the page to enable the
    // submission via this transport.
    function cleanUp() {
 $file);
      });
      form.remove();
      iframe.one("load", function() { iframe.remove(); });
      iframe.attr("src", "about:blank");
    }

    // Remove "iframe" from the data types list so that further processing is
    // based on the content type returned by the server, without attempting an
    // (unsupported) conversion from "iframe" to the actual type.
    options.dataTypes.shift();

    // Use the data from the original AJAX options, as it doesn't seem to be 
    // copied over since jQuery 1.7.
    // See https://github.com/cmlenz/jquery-iframe-transport/issues/6
    options.data = origOptions.data;

    if (files.length) {
      form = $("<form enctype='multipart/form-data' method='post'></form>").
        hide().attr({action: options.originalURL, target: name});

      // If there is any additional data specified via the `data` option,
      // we add it as hidden fields to the form. This (currently) requires
      // the `processData` option to be set to false so that the data doesn't
      // get serialized to a string.
      if (typeof(options.data) === "string" && options.data.length > 0) {
        $.error("data must not be serialized");
      }
      $.each(options.data || {}, function(name, value) {
        if ($.isPlainObject(value)) {
          name = value.name;
          value = value.value;
        }
        $("<input type='hidden' />").attr({name:  name, value: value}).
          appendTo(form);
      });

      // Add a hidden `X-Requested-With` field with the value `IFrame` to the
      // field, to help server-side code to determine that the upload happened
      // through this transport.
      $("<input type='hidden' value='IFrame' name='X-Requested-With' />").
        appendTo(form);

      // Borrowed straight from the JQuery source.
      // Provides a way of specifying the accepted data type similar to the
      // HTTP "Accept" header
      if (options.dataTypes[0] && options.accepts[options.dataTypes[0]]) {
        accepts = options.accepts[options.dataTypes[0]] +
                  (options.dataTypes[0] !== "*" ? ", */*; q=0.01" : "");
      } else {
        accepts = options.accepts["*"];
      }
      $("<input type='hidden' name='X-HTTP-Accept'>").
        attr("value", accepts).appendTo(form);

      // Move the file fields into the hidden form, but first remember their
      // original locations in the document by replacing them with disabled
      // clones. This should also avoid introducing unwanted changes to the
      // page layout during submission.
      markers = files.after(function(idx) {
        var $this = $(this),
            $clone = $this.clone().prop("disabled", true);
        $this.data("clone", $clone);
        return $clone;
      }).next();
      files.appendTo(form);

      return {

        // The `send` function is called by jQuery when the request should be
        // sent.
        send: function(headers, completeCallback) {
          iframe = $("<iframe src='about:blank' name='" + name +
            "' id='" + name + "' style='display:none'></iframe>");

          // The first load event gets fired after the iframe has been injected
          // into the DOM, and is used to prepare the actual submission.
          iframe.one("load", function() {

            // The second load event gets fired when the response to the form
            // submission is received. The implementation detects whether the
            // actual payload is embedded in a `<textarea>` element, and
            // prepares the required conversions to be made in that case.
            iframe.one("load", function() {
              var doc = this.contentWindow ? this.contentWindow.document :
                (this.contentDocument ? this.contentDocument : this.document),
                root = doc.documentElement ? doc.documentElement : doc.body,
                textarea = root.getElementsByTagName("textarea")[0],
                type = textarea && textarea.getAttribute("data-type") || null,
                status = textarea && textarea.getAttribute("data-status") || 200,
                statusText = textarea && textarea.getAttribute("data-statusText") || "OK",
                content = {
                  html: root.innerHTML,
                  text: type ?
                    textarea.value :
                    root ? (root.textContent || root.innerText) : null
                };
              cleanUp();
              completeCallback(status, statusText, content, type ?
                ("Content-Type: " + type) :
                null);
            });

            // Now that the load handler has been set up, submit the form.
            form[0].submit();
          });

          // After everything has been set up correctly, the form and iframe
          // get injected into the DOM so that the submission can be
          // initiated.
          $("body").append(form, iframe);
        },

        // The `abort` function is called by jQuery when the request should be
        // aborted.
        abort: function() {
          if (iframe !== null) {
            iframe.unbind("load").attr("src", "about:blank");
            cleanUp();
          }
        }

      };
    }
  });

})(jQuery);
/*1.0*/



(function($) {

  var remotipart;

  $.remotipart = remotipart = {

    setup: function(form) {
      // Preserve form.data('ujs:submit-button') before it gets nulled by $.ajax.handleRemote
      var button = form.data('ujs:submit-button'),
          csrfParam = $('meta[name="csrf-param"]').attr('content'),
          csrfToken = $('meta[name="csrf-token"]').attr('content'),
          csrfInput = form.find('input[name="' + csrfParam + '"]').length;

      form
        // Allow setup part of $.rails.handleRemote to setup remote settings before canceling default remote handler
        // This is required in order to change the remote settings using the form details
        .one('ajax:beforeSend.remotipart', function(e, xhr, settings){
          // Delete the beforeSend bindings, since we're about to re-submit via ajaxSubmit with the beforeSubmit
          // hook that was just setup and triggered via the default `$.rails.handleRemote`
          // delete settings.beforeSend;
          delete settings.beforeSend;

          settings.iframe      = true;
          settings.files       = $($.rails.fileInputSelector, form);
          settings.data        = form.serializeArray();

          // Insert the name/value of the clicked submit button, if any
          if (button)
            settings.data.push(button);

          // jQuery 1.9 serializeArray() contains input:file entries
          // so exclude them from settings.data, otherwise files will not be sent
          settings.files.each(function(i, file){
            for (var j = settings.data.length - 1; j >= 0; j--)
              if (settings.data[j].name == file.name)
                settings.data.splice(j, 1);
          })

          settings.processData = false;

          // Modify some settings to integrate JS request with rails helpers and middleware
          if (settings.dataType === undefined) { settings.dataType = 'script *'; }
          settings.data.push({name: 'remotipart_submitted', value: true});
          if (csrfToken && csrfParam && !csrfInput) {
            settings.data.push({name: csrfParam, value: csrfToken});
          }

          // Allow remotipartSubmit to be cancelled if needed
          if ($.rails.fire(form, 'ajax:remotipartSubmit', [xhr, settings])) {
            // Second verse, same as the first
            $.rails.ajax(s;
            });
            setTimeout(function(){ $.rails.disableFormElements(form); }, 20);
          }

          //Run cleanup
          remotipart.teardown(form);

          // Cancel the jQuery UJS request
          return false;
        })

        // Keep track that we just set this particular form with Remotipart bindings
        // Note: The `true` value will get over-written with the `settings.dataType` from the `ajax:beforeSend` handler
        .data('remotipartSubmitted', true);
    },

    teardown: function(form) {
      form
        .unbind('ajax:beforeSend.remotipart')
        .removeData('remotipartSubmitted')
    }
  };

  $(document).on('ajax:aborted:file', 'form', function(){
    var form = $(this);

    remotipart.setup(form);

    // Manually call jquery-ujs remote call so that it can setup form and settings as usual,
    // and trigger the `ajax:beforeSend` callback to which remotipart binds functionality.
    $.rails.handleRemote(form);
    return false;
  });

})(jQuery);
/*1.0*/
(function($) {

  window.ContentBlock = {
    showEditForm: function(id){
      var contentBlock = $('#' + id);
      contentBlock.find('div.content_block_wrapper').hide();
      contentBlock.find('div.content_block_form').show();
    },
    cancelEdit: function(id){
      var contentBlock = $('#' + id);
      contentBlock.find('div.content_block_wrapper').show();
      contentBlock.find('div.content_block_form').hide();
      contentBlock.find('div.content_block_form form')[0].reset();
    },
    deleteBlock: function(id) {
      if(confirm("Are you sure you want to delete this content block?")) {
        $.ajax({
          url: '/content_blocks/' + id,
          type: 'delete',
          dataType: 'json'
        }).done(function(data) {
          $('#' + data.dom_id).replaceWith(data.partial);
          $UI.growl({
            type: 'success',
            caption: 'Content block deleted'
          });
        }).fail(UIHelpers.showUnhandledError);
      }
    },
    initForm: function(dom_id) {
      $('body').on('click', '#' + dom_id + ' form [data-button-type=submit]', function(e) {
        var form_content = $('#' + dom_id + ' form textarea');
        if( UrlHelpers.has_insecure_link(form_content.val()) ) {
          $('#' + dom_id + '_http_warning').modal('show');

          if( $('#edit_css_modal').length > 0 && $('#edit_css_modal').is(':visible') ) {
            $('#edit_css_modal').modal('hide');
            $('#' + dom_id + '_http_warning').attr('data-type', 'warning_for_modal');
          }
          return false;
        }
        return true;
      });

      $('body').on('ajax:success', '#'+ dom_id + ' form[data-type=content_block]', function(e, data) {
        $('#' + data.dom_id).replaceWith(data.partial);
        // calling json_form from here because
        // there's weird partial replacement stuff from the controller
        $('#' + dom_id + ' form[data-type=content_block]').json_form();
      });

      $('body').on('click', '#' + dom_id + '_http_warning [data-action=save_form]', function(e) {
        ContentBlock.sendFormData(dom_id); 
      });

      // special case for http warnings off of content in a modal
      $('body').on('click', '#' + dom_id + '_http_warning[data-type=warning_for_mo.modal('show');
        }
      });
    },
    sendFormData: function(dom_id) {
      var $form = $('#' + dom_id + ' form');

      $('#' + dom_id + '_http_warning').modal('hide').remove();
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: $form.attr('action'),
        dataeplaceWith(data.partial);
      }).fail(UIHelpers.showUnhandledError);
    }
  };

})(jQuery);
/*1.0*/
 // Used for the android feed mobile app banner, block banner on every page except '/my-feed/' and '/topic/'
 window.addEventListener('beforeinstallprompt', function(e) {
  if (!window.location.pathname.includes('/my-feed/') && !window.location.pathname.includes('/topic/')) {
    e.preventDefault();
  }
  return false;
});
/*1.0*/
(function($) {
  $(document).ready(function() {
    var $notice = $("[data-unverified-notice]");
    if($notice.length > 0) {
      $notice.each(function() {
        $(this).data("noticeHandler", new UnverifiedNotice($(this)));
      });
    }
  });

  UnverifiedNotice = function($element) {
    this.init($element);
  }

  UnverifiedNotice.prototype = {
    init: function($element) {
      this.$noticeWrapper = $element;
      this.noticeType = this.$noticeWrapper.data("unverified-notice");
      this.$resendEmail = this.$noticeWrapper.find("[data-action='resend-email']");
      this.$noticeDismiss = this.$noticeWrapper.find("[data-notice-dismiss]");

      this.handleEmailResend();
      this.handlePopupDismiss();

      if(this.noticeType === "reply-form") {
        this.$replyField = $("[data-field='reply-text']");
        this.handlePopupShow();
      }
    },
    handleEmailResend: function() {
      this.$resendEmail.off("click");
      this.$resendEmail.click(function(event) {
        event.preventDefault();
        var resendUrl = event.currentTarget.href;
        $.get(resendUrl)
        .success(function(data) {
          if(data.verified) {
            $UI.growl({
              caption: "Your email address has been verified",
              type: "success"
            });
            setTimeout(function() {
              window.location = "/";
            }, 2000);
          }
          else {
            $UI.growl({
              caption: "New verification email has sent",
              type: "success"
            });
          }
        })
        .fail(function(data, status, jqXHR) {
          try {
            var errorData = JSON.parse(data.responseText);
            window.location = errorData.redirect_to;
          }
          catch(e) {
            window.location = resendUrl;
          }
        });
    _this.showPopup();
      })
    },
    handlePopupDismiss: function() {
      var _this = this;
      this.$noticeDismiss.click(function(event) {
        event.preventDefault();
        _this.hidePopup()
      });
    },
    showPopup: function() {
      var $notice = this.$noticeWrapper;
      if($notice.is(".hidden")) {
        $notice.css("top", "").css("bottom", "");
        $notice.removeClass("hidden");
        $nte({top: "+=20"}, 150);
        });
      }
    },
    hidePopup: function() {
      if(this.noticeType === "reply-form") {
        this.$noticeWrapper.addClass("hidden");
      }
      else {
        this.$noticeWrapper.fadeOut(300);
      }
    }
  }
})(jQuery);
/*1.0*/
!(function ($) {

  var DropdownTabs = function(container) {
    this.dropdownTabsInit(container);
  };

  DropdownTabs.prototype = {

    constructor: DropdownTabs,

    dropdownTabsInit: function(container) {
      this.$container = container;
      this.bindTabs();
    },

    bindTabs: function() {
      var tabs = this.$container.parents('.sui-dropdown').find('.sui-dropdown_entry [data-toggle="tab"]');
      var _this = this;
      tabs.click(function() {
        _this.$container.html($(this).text() + ' <span class="sui-caret"></span>');
      });
DropdownTabs($(this));
    })
  });

})(jQuery);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["reviews-domestic-nav/templates/categories-list"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-categories__menu">\n  <div class="product-categories__top-level">\n    <ul>\n      ');  categories.forEach(function(category) { ; __p.push('\n\n      <li><a class="product-categories__top-level__category"\n          data-component="ProductCategory"\n          href="/products/category/',(''+ category.attributes.route ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n          ',(''+ category.attributes.label ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n      </a></li>\n\n      ');  }); ; __p.push('\n    </ul>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/

(function($){
  var SPICE = window.SPICE || {};
  SPICE.ProductDomesticNav = SPICE.ProductDomesticNav || {};
  SPICE.ProductDomesticNav.ProductCategories = ProductCategories;

  function ProductCategories($element) {
    this.template = JST['reviews-domestic-nav/templates/categories-list'];
    this.$element = $element;
    this.$button = $element.find('[data-categories-button]')
    this.categoriesUrl = $element.data('categoriesUrl');
    this.categories = [];
    this.init();
  }

  ProductCategories.prototype = {
    init: function() {
      this.request = $.get(this.categoriesUrl)
        .done(function(data) {
          this.categories = data.data;
          this.$menu = $(this.template({categories: this.categories}));
          $('body').on('click', 'a.product-categories__top-level__category', function(){
            GoogleAnalytics.trackEvent('ProductsNav', 'click', 'Browse Categories - ' + this.text.trim());
          });
        }.bind(this));

      this.$button.click(this.recordBrowseCategoriesMenuEvents.bind(this));
      this.$element.click(this.toggleMenu.bind(this));
    },

    recordBrowseCategoriesMenuEvents: function() {
      if(this.$element.find(this.$menu).length) {
        GoogleAnalytics.trackEvent('ProductsNav', 'hide', 'Browse Categories');
      } else {
        GoogleAnalytics.trackEvent('ProductsNav', 'show', 'Browse Categories');
      }
    },

    toggleMenu: function() {
      if(this.$element.find(this.$menu).length) {
        this.$menu.remove();
      } else {
        this.$element.append(this.$menu);
      }
    }

  }
})(jQuery);
/*1.0*/
(function() { this.JST || (this.JST = {}); this.JST["reviews-domestic-nav/templates/search-results"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="product-search__results">\n  <ul class="product-search__results__list">\n    ');  results.forEach(function(result) {  ; __p.push('\n    <li class="product-search__result">\n      <a class="product-search__result__link" href="',(''+ productUrl(result) ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'" data-name="',(''+ result.attributes.name || result.attributes.model).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n        <div class="product-search__image">\n          ',  renderThumbnail(result.attributes.images) ,'\n        </div>\n        <div class="product-search__result__info">\n          <span class="product-search__product-name">\n            ',(''+ result.attributes.name || result.attributes.model ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n          </span>\n          <span class="product-search__product-model">\n            Model Number: ',(''+ result.attributes.model).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\n          </span>\n          <div class="product-search__product-rating">\n            ');  var ratingCount = result.attributes['rating-count'] ; __p.push('\n            ',  renderRating(result.attributes['rating-average']),'\n            (',(''+ ratingCount || 0).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),' ',(''+ ratingCount === 1 ? 'Rating' : 'Ratings').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),')\n          </div>\n        </div>\n      </a>\n    </li>\n    ');  }); ; __p.push('\n    <li class="product-search__see-all">\n      <a class="product-search__see-all--href" href="/products/search/products/all?product_keyword=',(''+ query ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'">\n        See all results for \'',(''+ query ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'\' &raquo;\n      </a>\n    </li>\n  </ul>\n</div>\n');}return __p.join('');};
}).call(this);
/*1.0*/

(function($){
  var SPICE = window.SPICE || {};
  SPICE.ProductDomesticNav = SPICE.ProductDomesticNav || {};
  SPICE.ProductDomesticNav.ProductSearch = ProductSearch;

  function ProductSearch($element) {
    this.template = JST['reviews-domestic-nav/templates/search-results'];
    this.$element = $element;
    this.$field = this.$element.find('[data-search-field]');
    this.searchUrl = this.$element.data('searchUrl');
    this.KEY_ENTER = 13;
    this.init();
  }

  ProductSearch.prototype = {
    init: function() {
      this.$element.keyup(this.onChange.bind(this));

      $('body').on('click', 'a.product-search__see-all--href', function(){
        var query = $('.product-search__field').val();
        GoogleAnalytics.trackEvent('ProductsNav', 'click', 'Full Search - ' + query);
      });

      $('body').on('click', 'a.product-search__result__link', function(event){
        var target = $(event.target),
            name = target.closest('.product-search__result__link').data('name'),
            query = $('.product-search__field').val();
        GoogleAnalytics.trackEvent('ProductsNav', 'click', 'Search Item Selected - ' + query + ' - Product - ' + name);
      });

      $('body').on('click', function(event){
        var target = $(event.target),
            results = $('.product-search__results');
        if(!target.closest('.product-search__field').length && results.length) {
          results.remove();
        }
      });

      this.$field.keydown(function(e) {
        if(e.which === this.KEY_ENTER) {
          e.preventDefault();
          window.location = '/products/search/products/all?' +
            'product_keyword=' + this.$field.val();
          GoogleAnalytics.trackEvent('ProductsNav', 'click', 'Full Search - ' + this.$field.val());
        }
      }.bind(this));

      this.$field.focus(function() {
        var resultsHidden = !this.$element.find(this.$results).length;
        if(this.$field.val() !== '' && this.$results && resultsHidden) {
          this.$element.append(this.$results);
        }
      }.bind(this));
    },

    onChange: function(e) {
      var requestData = {
        url: this.searchUrl + '?q=' + this.$field.val() +
          '&cancelableRequest=true&page[size]=3',
        type: 'GET'
      }
      if (this.request) {
        this.request.abort();
      }
      this.request = $.ajax(requestData)
        .done(function(data) {
          if(this.$results) {
            this.$results.remove();
          }
          if (data.data.length) {
            this.$results = $(this.template({
              results: data.data,
              query: this.$field.val(),
              renderRating: renderRating,
              renderThumbnail: renderThumbnail,
              productUrl: productUrl
            }));
            this.$element.append(this.$results);
          }
        }.bind(this));
    }
  }

  function productUrl(product) {
    var url = '/products/' + product.id + '-',
      manufacturerName = product.attributes.manufacturer.name,
      model = product.attributes.model.toLowerCase(),
      name = product.attributes.name;

    if (name) {
      url += name.toLowerCase().replace(/\s+/g, '-');
    } else if (!manufacturerName
      || model.indexOf(manufacturerName) === 0
      || product.attributes['is-it-service-type']
    ) {
      url += model;
    } else {
      url += manufacturerName.toLowerCase() + '-' + model.replace(/\s+/g, '-');
    }
    return url;
  }

  function renderRating(rating) {
    var $container = $('<span class="medium_rating product-search__stars"></span>'),
      MAX = 5,
      i, $star;

    for(i = 1;i <= MAX; i++ ) {
      $star = $('<span class="star"></span>');
      if(i <= Math.floor(rating)) {
        $star.addClass('orange');
      } else if (i > Math.floor(rating) && i < Math.ceil(rating)) {
        $star.addClass('half');
      } else {
        $star.addClass('gray');
      }
      $container.append($star);
    }
    return $container.get(0).outerHTML;
  }

  function renderThumbnail(images) {
    var image = images[0];
    var imageUrl = image && image.thumbnailUrl ? image.thumbnailUrl : '';
    return '<img src="' + imageUrl + '">';
  }
})(jQuery);
/*1.0*/




(function($) {
  $(document).ready(function() {
    $('[data-component="ProductNavbarCategories"]').each(function() {
      var categories = new SPICE.ProductDomesticNav.ProductCategories($(this));
    });

    $('[data-component="ProductNavbarSearch"]').each(function() {
      var search = new SPICE.ProductDomesticNav.ProductSearch($(this));
    })
  });
})(jQuery);
/*1.0*/
/* Fix for SUI timestamp plugin with Prototype AJAX calls */
/* Don't want Prototype code in SUI */

document.observe('ajax:completed', function() { jQuery('[data-js-postprocess="timestamp"]').timestamp(); } );

// From responsive.js so it can be jQuery-only now
document.observe( 'ajax:completed', MobileCollapsedLinkLists.findAndCollapse );
document.observe( 'ajax:completed', MobileMovingSections.findAndMove );
document.observe( 'ajax:completed', MobileTabs.findAndConvert );
document.observe( 'ajax:completed', MobilePagination.findAndConvert );
/*1.0*/



















//////////  OLD require 'self' /////////////////////




















////////////////  END  ///////////////////////






      // Inline tag editor code has to be included before wysihtml5 or things
      // don't boot up properly :/






















// Has to go at the bottom b/c it relies on some things being defined

;
