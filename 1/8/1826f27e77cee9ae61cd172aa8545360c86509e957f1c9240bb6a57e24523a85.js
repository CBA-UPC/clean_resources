// For license information, see `https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/3835a1ac9994/RC719fca38d7b34d53b47cd51f8087572e-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/3835a1ac9994/RC719fca38d7b34d53b47cd51f8087572e-source.min.js', "null!=window.wdgtagging&&null!=window.wdgtagging.facebook&&function(t,a,e,n){var r=function(){function r(t){var n=a.getProductInfo(t),r={content_name:i.content_name||\"\",content_id:n.id||t.attr(\"data-bi-prodid\")||t.attr(\"data-bi-product\")||\"\",content_type:\"product\",lang_locale:i.lang_locale||\"\",partner:n.retailer||t.attr(\"data-bi-prtnm\"),cta:n.cta||jQuery.trim(t.text())||t.attr(\"data-bi-name\")||\"\"};e.trackEvent(\"trackSingle\",e.globalpixelId,\"AddToCart\",r)}jQuery(\"meta[name='MscomContentLocale']\").attr(\"content\");e.globalpixelId=\"1770559986549030\",e.init(e.globalpixelId);var i={content_name:t.getData(\"gpn\")||\"\",market_name:t.getData(\"loc\")||\"\",lang_locale:t.getData(\"langLoc\")||\"\"};fbq(\"trackSingle\",e.globalpixelId,\"PageView\"),fbq(\"trackSingle\",e.globalpixelId,\"ViewContent\",i),n(document).on(\"click\",\"button[data-bi-bhvr], a[data-bi-bhvr], [data-js-href][data-bi-bhvr]:not(.f-precise-click)\",(function(t){if(\"PARTNERREFERRAL\"==n(this).attr(\"data-bi-bhvr\")||\"220\"==n(this).attr(\"data-bi-bhvr\")){if(n(t.target).closest(\"[href]\").length&&n(this).is(\"[data-js-href]\"))return;if(n(this).is(\"button\")&&n(this).parent(\"[href].retailer-link\").length)return;r(n(this))}})),n(document).on(\"click\",\"[data-js-href][data-m], [href][data-m]\",(function(t){var r=JSON.parse(n(this).attr(\"data-m\")||\"{}\");if(\"220\"===r.bhvr||\"PARTNERREFERRAL\"===r.bhvr){if(n(t.target).closest(\"[href]\").length&&n(this).is(\"[data-js-href]\"))return;try{var o=a.getProductInfo(this),l=r.prtnm,c={content_name:i.content_name||\"\",content_type:\"product\",lang_locale:i.lang_locale,partner:l,cta:o.cta||jQuery.trim(jQuery(this).text())};e.trackEvent(\"trackSingle\",e.globalpixelId,\"AddToCart\",c)}catch(t){a.debugLog(\"Facebook Tagging for the Redtiger pages Error:\"+t)}}}))};t.catCheckAllExecuteOrPush(r)}(window.wdgtagging,window.wdgtagging.util,window.wdgtagging.facebook,window.jQuery);");