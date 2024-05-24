/*! content-views 05-2022 */
/*!
 * Bootstrap v3.4.1 (http://getbootstrap.com)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+jQuery),+jQuery),+jQuery),+jQuery),+jQuery),/*!
 * Bootstrap paginator v0.5
 * Copyright 2013 Yun Lai <lyonlai1984@gmail.com>
 * Licensed http://www.apache.org/licenses/LICENSE-2.0
 */
window.jQuery),/**
 * CV JS
 * @author    PT Guy <http://www.contentviewspro.com/>
 * @license   GPL-2.0+
 */
function(a){"use strict";a.PT_CV_Public=a.PT_CV_Public||{},PT_CV_PUBLIC=PT_CV_PUBLIC||{};var b=PT_CV_PUBLIC._prefix;a.PT_CV_Public=a.PT_CV_Public.prototype={pagination:_setup_pagination:_get_page:function(c,d,e,f,g){var h=this;d=parseInt(d);var i=h._active_page(d,f,g);if(i)return g&&"function"==typeof g&&g(),void a("body").trigger(b+"pagination-finished-simple");a("body").trigger(b+"before-pagination");var j={action:"pagination_request",sid:c.attr("data-sid"),unid:c.attr("data-unid"),page:d,lang:PT_CV_PUBLIC.lang,ajax_nonce:PT_CV_PUBLIC._nonce,custom_data:window.cvdata};a.ajax({type:"POST",url:PT_CV_PUBLIC.ajaxurl,data:j,beforeSend:).done(},_active_page:function(c,d){var e=!1,f='[data-id="'+b+"page-"+c+'"]';return d.children(f).length&&(e=!0,d.children().hide(),d.children(f).show(),this._update_url(c),window.cvp_pagination_no_scroll||a("html, body").animate({scrollTop:d.children(f).offset().top-160},1e3)),e},_get_paginated_url:_update_url:some_fixes:,a(}(jQuery);