(function () {
	"use strict";

	var _current_page;
	var _ajax_loading;
	var item_template;
	var data;
	var content_div;

	// Save current page
	if (typeof __madara_query_vars !== 'undefined') {
		_current_page = (typeof __madara_query_vars.paged !== 'undefined' ? __madara_query_vars.paged : 0);
	} else {
		_current_page = -1;
	}
	if (_current_page == 0) _current_page = 1;

	// flag to check if an ajax is executing
	_ajax_loading = false;

	jQuery(document).ready(function () {
		if (jQuery('#navigation-ajax').length > 0) {
			jQuery(document).on('click', '#navigation-ajax', function (e) {
				e.preventDefault();

				if (_current_page > -1 && !_ajax_loading) {
					item_template = jQuery(this).attr('data-template');

					data = {
						action: 'madara_load_more',
						page: _current_page,
						template: item_template,
						vars: __madara_query_vars
					};

					content_div = jQuery(this).attr('data-target');

					_ajax_loading = true;

					// show the animation
					jQuery('#navigation-ajax').addClass('show-loading');

					jQuery.ajax({
						type: 'POST',
						url: madara.ajaxurl,
						cache: false,
						data: data,
						success: function (data, textStatus, XMLHttpRequest) {
							if (data != '') {
								// do something fancy before appending data?

								// then append data
								jQuery(content_div).append(data);

								// increase current page
								_current_page = _current_page + 1;

								if (jQuery('.no-posts', jQuery(content_div)).length > 0) {
									jQuery('.navigation-ajax').hide();
									jQuery('.invi.no-posts').remove();
								}
                                
                                jQuery(document).trigger('wp_manga_after_paginated');
							} else {
								_current_page = -1;
								jQuery('.navigation-ajax').hide();
								jQuery('.invi.no-posts').remove();
							}

							// hide animation
							jQuery('#navigation-ajax').removeClass("show-loading");

							_ajax_loading = false;
						},
						error: function (MLHttpRequest, textStatus, errorThrown) {
							alert(errorThrown);
							_ajax_loading = false;
						}
					});
				}

			});
		}

	});
})(jQuery);
