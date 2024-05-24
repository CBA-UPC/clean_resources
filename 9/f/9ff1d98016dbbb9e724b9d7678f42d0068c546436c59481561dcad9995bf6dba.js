(function(window) {
	try {
		window.BAMX = window.BAMX || {};
		window.BAMX.GLOBALS = window.BAMX.GLOBALS || {
			LOADED: {},
			PROMISE: {},
			AUCTION_MAP: {},
			BAM_BOX: {}
		};

		var CONTAINED_BAMX_OBJ = {
			IS_IFRAME: window.BAMX.IS_IFRAME,
			DEBUG_MODE: false,
			ENV: 'release',
			GITHASH: '35cd98142e2c663878526255e7604ff507591eb3',
			CORE_CONFIG: {
				isPreview: false
			}
		};

		/* Preview mode can be turned on if isPreview is set to true
		 * in the BAMX window object.
		 */
		if (window.BAMX.CORE_CONFIG && window.BAMX.CORE_CONFIG.isPreview) {
			CONTAINED_BAMX_OBJ.CORE_CONFIG.isPreview = window.BAMX.CORE_CONFIG.isPreview;
		}
		window.BAMX.CORE_CONFIG = CONTAINED_BAMX_OBJ.CORE_CONFIG;

		// Prevent amd from causing Bluebird to try and load using amd
		if (typeof(window.define) === 'function' && window.define.amd) {
			window._bamDefine = window.define;
			window.define = null;
		}

		"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}unction _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _get=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(r)},_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();!,"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise),Array.from||(Array.from=)),"function"!=typeof Object.assign&&(Object.assign=,String.prototype.contains=String.prototype.contains||String.prototype.includes||(String.prototype.includes=,String.prototype.startsWith=String.prototype.startsWith||String.prototype.endsWith=String.prototype.endsWith||Array.prototype.find||(Array.prototype.find=,Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.some||(Array.prototype.some=,window,document,CONTAINED_BAMX_OBJ),window,CONTAINED_BAMX_OBJ),window,CONTAINED_BAMX_OBJ),window,document,CONTAINED_BAMX_OBJ),window,document,CONTAINED_BAMX_OBJ),window,CONTAINED_BAMX_OBJ),window,CONTAINED_BAMX_OBJ),window,CONTAINED_BAMX_OBJ),window,document,CONTAINED_BAMX_OBJ);!);"use strict";_slicedToArray=),_get=_createClass=);!window,CONTAINED_BAMX_OBJ),(window,document,CONTAINED_BAMX_OBJ)(window,document,CONTAINED_BAMX_OBJ)(window,CONTAINED_BAMX_OBJ)(window,CONTAINED_BAMX_OBJ)(window,CONTAINED_BAMX_OBJ)(window,CONTAINED_BAMX_OBJ)(window,CONTAINED_BAMX_OBJ);"use strict";!function(t,i){var a={merchant:null,publisher:{short_name:"Android Authority",slug:"androidauthority",pub_id:1366,full_name:"Android Authority",publisher_type:1,billing_platform:3,url:"https://www.androidauthority.com/",show_in_dashboard:!0,instant_pay_access:1,is_pilot:!1,reserve_cpc:"0.01",widget_options:{amp:!1,domains:["dev.androidauthority.com/"],linkmate:!0,jstag_disabled:!1,enable_external_script:!1,enable_verbose_logging:!1,record_external_clicks:!0},logo_url:"https://static.bam-x.com/assets/logos/publishers/androidauthority.jpeg"},slug:"androidauthority"};new(i.lib.getClass("JsTagLib"))(a).run()}(window,CONTAINED_BAMX_OBJ);

		if (window._bamDefine) {
			window.define = window._bamDefine;
		}

		window.BAMX.VERSION = window.BAMX.VERSION || {};
		window.BAMX.VERSION['35cd98142e2c663878526255e7604ff507591eb3'] = CONTAINED_BAMX_OBJ;
		window.BAMX.GITHASH = '35cd98142e2c663878526255e7604ff507591eb3';
		window.BAMX.get =;
	} catch (e) {
		try {
			if (CONTAINED_BAMX_OBJ.DEBUG) {
				console.error(e);
			}

		} catch (e2) {}
	}

})(window);
