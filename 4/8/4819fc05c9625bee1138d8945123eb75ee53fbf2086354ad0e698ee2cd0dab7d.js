@charset "UTF-8";.vcounter,.vcounter-vid{font-family:"Montserrat",Montserrat-FF,Arial,Tahoma,sans-serif}@font-face{font-family:"icomoon";src:url("../fonts/icomoon.eot?cpuci3");src:url("../fonts/icomoon.eot?cpuci3#iefix") format("embedded-opentype"),url("../fonts/icomoon.ttf?cpuci3") format("truetype"),url("../fonts/icomoon.woff?cpuci3") format("woff"),url("../fonts/icomoon.svg?cpuci3#icomoon") format("svg");font-weight:normal;font-style:normal;font-display:block}[class^="icon-"],[class*=" icon-"]{font-family:"icomoon"!important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-eye:before{content:""}.ratiobox{position:relative;display:block;height:0;overflow:hidden;padding-bottom:100%;-webkit-transition:all 0.4s ease-in-out 0s;-moz-transition:all 0.4s ease-in-out 0s;-ms-transition:all 0.4s ease-in-out 0s;-o-transition:all 0.4s ease-in-out 0s;transition:all 0.4s ease-in-out 0s;background:#000}.ratiobox.ratiobox--16--9{padding-bottom:56.25%}.ratiobox.ratiobox--counter{padding-bottom:calc(56.25% - 38px)}@media screen and (max-width:400px){.ratiobox.ratiobox--counter{padding-bottom:calc(56.25% - 36px)}}.ratiobox.ratiobox--counter .vivid{height:calc(56.25vw - 38px);max-width:162.78vh;max-height:100vh;position:relative;width:100vw;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0}@media screen and (min-width:900px){.ratiobox.ratiobox--counter .vivid{max-width:166.78vh}}@media screen and (max-width:550px){.ratiobox.ratiobox--counter .vivid{max-width:155.78vh}}@media screen and (max-width:400px){.ratiobox.ratiobox--counter .vivid{max-width:147.78vh}}@media screen and (max-width:360px){.ratiobox.ratiobox--counter .vivid{max-width:142.88vh}}@media screen and (max-width:330px){.ratiobox.ratiobox--counter .vivid{max-width:133.88vh}}.ratiobox iframe{position:absolute;width:100%;height:100%}.block-link:hover .media__image .ratiobox{-webkit-transform:scale(1.15);-moz-transform:scale(1.15);-ms-transform:scale(1.15);-o-transform:scale(1.15);transform:scale(1.15)}.ratiobox--16-9{padding-bottom:56.25%}.ratiobox--4-3{padding-bottom:75%}body{margin:0;padding:0}.vcounter{display:flex;justify-content:space-between;background:#333;padding:0 10px;color:#fff;height:38px;font-size:14px}@media only screen and (max-width:576px){.vcounter{justify-content:normal;font-size:13px;height:35px}}.vcounter-vid{color:#494949;display:flex;font-size:14px}@media only screen and (max-width:576px){.vcounter-vid{font-size:13px}}.vcounter__l{display:flex;align-items:center}.vcounter__l .icon{margin-right:5px}.vcounter__r{display:flex;align-items:center}.vcounter__r .icon{margin-right:5px}.vcounter__live{padding-left:10px;position:relative;padding-right:10px;margin-right:10px;border-right:1px solid #fff}.vcounter__live:before{content:"";width:6px;height:6px;position:absolute;margin-top:-3px;top:50%;left:0;border-radius:50%;overflow:hidden;animation:live 1s;-moz-animation:live 1s infinite;-webkit-animation:live 1s infinite;background:#fcc43f}@media only screen and (max-width:576px){.vcounter__title{display:none}}@keyframes live{0%{background:#fcc43f}50%{background:#FF0000}100%{background:#fcc43f}}om metadata -
				an instance object is attached to the affected element(s) containing all the necessary data.</li>
			<li>Handles option retrieval and update - options can be set through default values,
				through inline metadata, or through instantiation settings.<br>
				Metadata is specified as an attribute on the element:
				<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
				Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.</li>
			<li>Handles method calling - inner functions starting with '_'are inaccessible,
				whereas others can be called via <code>$(selector).pluginName('functionName')</code>.</li>
			<li>Handles plugin destruction - removing all trace of the plugin.</li>
		</ul>
		@module JQPlugin
		@abstract */
	JQClass.classes.JQPlugin = JQClass.extend({

		/** Name to identify this plugin.
			@example name: 'tabs' */
		name: 'plugin',

		/** Default options for instances of this plugin (default: {}).
			@example defaultOptions: {
  selectedClass: 'selected',
  triggers: 'click'
} */
		defaultOptions: {},

		/** Options dependent on the locale.
			Indexed by language and (optional) country code, with '' denoting the default language (English/US).
			Normally additional languages would be provided as separate files to all them to be included as needed.
			@example regionalOptions: {
  '': {
    greeting: 'Hi'
  }
} */
		regionalOptions: {},

		/** Whether or not a deep merge should be performed when accumulating options.
			The default is <code>true</code> but can be overridden in a sub-class. */
		deepMerge: true,

		/** Retrieve a marker class for affected elements.
			In the format: <code>is-&lt;pluginName&gt;</code>.
			@protected
			@return {string} The marker class. */
		_getMarker: function() {
			return 'is-' + this.name;
		},

		/** Initialise the plugin.
			Create the jQuery bridge - plugin name <code>xyz</code>
			produces singleton <code>$.xyz</code> and collection function <code>$.fn.xyz</code>.
			@protected */
		_init: function() {
			// Apply default localisations
			$.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
			// Camel-case the name
			var jqName = camelCase(this.name);
			// Expose jQuery singleton manager
			$[jqName] = this;
			// Expose jQuery collection plugin
			$.fn[jqName] = function(options) {
				var otherArgs = Array.prototype.slice.call(arguments, 1);
				var inst = this;
				var returnValue = this;
				this.each(function () {
					if (typeof options === 'string') {
						if (options[0] === '_' || !$[jqName][options]) {
							throw 'Unknown method: ' + options;
						}
						var methodValue = $[jqName][options].apply($[jqName], [this].concat(otherArgs));
						if (methodValue !== inst && methodValue !== undefined) {
							returnValue = methodValue;
							return false;
						}
					} else {
						$[jqName]._attach(this, options);
					}
				});
				return returnValue;
			};
		},

		/** Set default options for all subsequent instances.
			@param {object} options The new default options.
			@example $.pluginName.setDefaults({name: value, ...}) */
		setDefaults: function(options) {
			$.extend(this.defaultOptions, options || {});
		},

		/** Initialise an element. Called internally only.
			Adds an instance object as data named for the plugin.
			Override {@linkcode module:JQPlugin~_postAttach|_postAttach} for plugin-specific processing.
			@private
			@param {Element} elem The element to enhance.
			@param {object} options Overriding settings. */
		_attach: function(elem, options) {
			elem = $(elem);
			if (elem.hasClass(this._getMarker())) {
				return;
			}
			elem.addClass(this._getMarker());
			options = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(elem), options || {});
			var inst = $.extend({name: this.name, elem: elem, options: options}, this._instSettings(elem, options));
			elem.data(this.name, inst); // Save instance against element
			this._postAttach(elem, inst);
			this.option(elem, options);
		},

		/** Retrieve additional instance settings.
			Override this in a sub-class to provide extra settings.
			These are added directly to the instance object.
			Default attributes of an instance object are shown as properties below:
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} options The instance options.
			@return {object} Any extra instance values.
			@property {Element} elem The element to which this instance applies.
			@property {string} name The name of this plugin.
			@property {object} options The accumulated options for this instance.
			@example _instSettings: function(elem, options) {
  return {nav: elem.find(options.navSelector)};
} */
		_instSettings: function(elem, options) { // jshint unused:false
			return {};
		},

		/** Plugin specific post initialisation.
			Override this in a sub-class to perform extra activities.
			This is where you would implement your plugin's main functionality.
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} inst The instance settings.
			@example _postAttach: function(elem, inst) {
  elem.on('click.' + this.name, function() {
    ...
  });
} */
		_postAttach: function(elem, inst) { // jshint unused:false
		},

		/** Retrieve metadata configuration from the element.
			Metadata is specified as an attribute:
			<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
			Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.
			@private
			@param {jQuery} elem The source element.
			@return {object} The inline configuration or {}. */
		_getMetadata: function(elem) {
			try {
				var data = elem.data(this.name.toLowerCase()) || '';
				data = data.replace(/(\\?)'/g, function(e, t) {
					return t ? '\'' : '"';
				}).replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {
					var count = data.substring(0, i).match(/"/g); // Handle embedded ':'
					return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');
				}).replace(/\\:/g, ':');
				data = $.parseJSON('{' + data + '}');
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						var value = data[key];
						if (typeof value === 'string' && value.match(/^new Date\(([-0-9,\s]*)\)$/)) { // Convert dates
							data[key] = eval(value); // jshint ignore:line
						}
					}
				}
				return data;
			}
			catch (e) {
				return {};
			}
		},

		/** Retrieve the instance data for element.
			@protected
			@param {Element} elem The source element.
			@return {object} The instance data or <code>{}</code> if none. */
		_getInst: function(elem) {
			return $(elem).data(this.name) || {};
		},

		/** Retrieve or reconfigure the settings for a plugin.
			If new settings are provided they are applied to the instance options.
			If an option name only is provided the value of that option is returned.
			If no name or value is provided, all options are returned.
			Override {@linkcode module:JQPlugin~_optionsChanged|_optionsChanged}
			for plugin-specific processing when option values change.
			@param {Element} elem The source element.
			@param {object|string} [name] The collection of new option values or the name of a single option.
			@param {any} [value] The value for a single named option.
			@return {any|object} If retrieving a single value or all options.
			@example $(selector).plugin('option', 'name', value) // Set one option
$(selector).plugin('option', {name: value, ...}) // Set multiple options
var value = $(selector).plugin('option', 'name') // Get one option
var options = $(selector).plugin('option') // Get all options */
		option: function(elem, name, value) {
			elem = $(elem);
			var inst = elem.data(this.name);
			var options = name || {};
			if  (!name || (typeof name === 'string' && typeof value === 'undefined')) {
				options = (inst || {}).options;
				return (options && name ? options[name] : options);
			}
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			if (typeof name === 'string') {
				options = {};
				options[name] = value;
			}
			this._optionsChanged(elem, inst, options);
			$.extend(inst.options, options);
		},

		/** Plugin specific options processing.
			Old value available in <code>inst.options[name]</code>, new value in <code>options[name]</code>.
			Override this in a sub-class to perform extra activities.
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} inst The instance settings.
			@param {object} options The new options.
			@example _optionsChanged: function(elem, inst, options) {
  if (options.name != inst.options.name) {
    elem.removeClass(inst.options.name).addClass(options.name);
  }
} */
		_optionsChanged: function(elem, inst, options) { // jshint unused:false
		},

		/** Remove all trace of the plugin.
			Override {@linkcode module:JQPlugin~_preDestroy|_preDestroy} for plugin-specific processing.
			@param {Element} elem The source element.
			@example $(selector).plugin('destroy') */
		destroy: function(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			this._preDestroy(elem, this._getInst(elem));
			elem.removeData(this.name).removeClass(this._getMarker());
		},

		/** Plugin specific pre destruction.
			It is invoked as part of the {@linkcode module:JQPlugin~destroy|destroy} processing.
			Override this in a sub-class to perform extra activities and undo everything that was
			done in the {@linkcode module:JQPlugin~_postAttach|_postAttach} or
			{@linkcode module:JQPlugin~_optionsChanged|_optionsChanged} functions.
			@protected
			@param {jQuery} elem The current jQuery element.
			@param {object} inst The instance settings.
			@example _preDestroy: function(elem, inst) {
  elem.off('.' + this.name);
} */
		_preDestroy: function(elem, inst) { // jshint unused:false
		}
	});

	/** Convert names from hyphenated to camel-case.
		@private
		@param {string} value The original hyphenated name.
		@return {string} The camel-case version. */
	function camelCase(name) {
		return name.replace(/-([a-z])/g, function(match, group) {
			return group.toUpperCase();
		});
	}

	/** Expose the plugin base.
		@namespace $.JQPlugin */
	$.JQPlugin = {

		/** Create a new collection plugin.
			@memberof $.JQPlugin
			@param {string} [superClass='JQPlugin'] The name of the parent class to inherit from.
			@param {object} overrides The property/function overrides for the new class.
				See {@link module:JQPlugin|JQPlugin} for the base functionality.
			@example $.JQPlugin.createPlugin({ // Define the plugin
  name: 'tabs',
  defaultOptions: {selectedClass: 'selected'},
  _initSettings: function(elem, options) { return {...}; },
  _postAttach: function(elem, inst) { ... }
});
$('selector').tabs(); // And instantiate it */
		createPlugin: function(superClass, overrides) {
			if (typeof superClass === 'object') {
				overrides = superClass;
				superClass = 'JQPlugin';
			}
			superClass = camelCase(superClass);
			var className = camelCase(overrides.name);
			JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
			new JQClass.classes[className](); // jshint ignore:line
		}
	};

})(jQuery);
 h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:xe,monthsShort:Oe,week:{dow:0,doy:6},weekdays:He,weekdaysMin:Be,weekdaysShort:Ve,meridiemParse:/[ap]\.?m?\.?/i},Ze={},et={};function tt(e,t){var n,a=Math.min(e.length,t.length);for(n=0;n<a;n+=1)if(e[n]!==t[n])return n;return a}function nt(e){return e?e.toLowerCase().replace("_","-"):e}function at(t){var a=null;if(void 0===Ze[t]&&void 0!==e&&e&&e.exports&&function(e){return null!=e.match("^[^/\\\\]*$")}(t))try{a=$e._abbr,n(768)("./"+t),rt(a)}catch(e){Ze[t]=null}return Ze[t]}function rt(e,t){var n;return e&&((n=c(t)?ot(e):it(e,t))?$e=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),$e._abbr}function it(e,t){if(null!==t){var n,a=Qe;if(t.abbr=e,null!=Ze[e])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=Ze[e]._config;else if(null!=t.parentLocale)if(null!=Ze[t.parentLocale])a=Ze[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return et[t.parentLocale]||(et[t.parentLocale]=[]),et[t.parentLocale].push({name:e,config:t}),null;a=n._config}return Ze[e]=new T(L(a,t)),et[e]&&et[e].forEach((function(e){it(e.name,e.config)})),rt(e),Ze[e]}return delete Ze[e],null}function ot(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return $e;if(!i(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,a,r,i=0;i<e.length;){for(t=(r=nt(e[i]).split("-")).length,n=(n=nt(e[i+1]))?n.split("-"):null;t>0;){if(a=at(r.slice(0,t).join("-")))return a;if(n&&n.length>=t&&tt(r,n)>=t-1)break;t--}i++}return $e}(e)}function lt(e){var t,n=e._a;return n&&-2===y(e).overflow&&(t=n[1]<0||n[1]>11?1:n[2]<1||n[2]>ke(n[0],n[1])?2:n[3]<0||n[3]>24||24===n[3]&&(0!==n[4]||0!==n[5]||0!==n[6])?3:n[4]<0||n[4]>59?4:n[5]<0||n[5]>59?5:n[6]<0||n[6]>999?6:-1,y(e)._overflowDayOfYear&&(t<0||t>2)&&(t=2),y(e)._overflowWeeks&&-1===t&&(t=7),y(e)._overflowWeekday&&-1===t&&(t=8),y(e).overflow=t),e}var st=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ut=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ct=/Z|[+-]\d\d(?::?\d\d)?/,dt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ft=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((-?\d+)/i,mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ht={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function yt(e){var t,n,a,r,i,o,l=e._i,s=st.exec(l)||ut.exec(l),u=dt.length,c=ft.length;if(s){for(y(e).iso=!0,t=0,n=u;t<n;t++)if(dt[t][1].exec(s[1])){r=dt[t][0],a=!1!==dt[t][2];break}if(null==r)return void(e._isValid=!1);if(s[3]){for(t=0,n=c;t<n;t++)if(ft[t][1].exec(s[3])){i=(s[2]||" ")+ft[t][0];break}if(null==i)return void(e._isValid=!1)}if(!a&&null!=i)return void(e._isValid=!1);if(s[4]){if(!ct.exec(s[4]))return void(e._isValid=!1);o="Z"}e._f=r+(i||"")+(o||""),gt(e)}else e._isValid=!1}function _t(e){var t,n=mt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(n){if(t=function(e,t,n,a,r,i){var o=[function(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}(e),Oe.indexOf(t),parseInt(n,10),parseInt(a,10),parseInt(r,10)];return i&&o.push(parseInt(i,10)),o}(n[4],n[3],n[2],n[5],n[6],n[7]),!function(e,t,n){return!e||Ve.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(y(n).weekdayMismatch=!0,n._isValid=!1,!1)}(n[1],t,e))return;e._a=t,e._tzm=function(e,t,n){if(e)return ht[e];if(t)return 0;var a=parseInt(n,10),r=a%100;return(a-r)/100*60+r}(n[8],n[9],n[10]),e._d=Ce.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function bt(e,t,n){return null!=e?e:null!=t?t:n}function vt(e){var t,n,a,i,o,l=[];if(!e._d){for(a=function(e){var t=new Date(r.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}(e),e._w&&null==e._a[2]&&null==e._a[1]&&function(e){var t,n,a,r,i,o,l,s,u;null!=(t=e._w).GG||null!=t.W||null!=t.E?(i=1,o=4,n=bt(t.GG,e._a[0],Fe(kt(),1,4).year),a=bt(t.W,1),((r=bt(t.E,1))<1||r>7)&&(s=!0)):(i=e._locale._week.dow,o=e._locale._week.doy,u=Fe(kt(),i,o),n=bt(t.gg,e._a[0],u.year),a=bt(t.w,u.week),null!=t.d?((r=t.d)<0||r>6)&&(s=!0):null!=t.e?(r=t.e+i,(t.e<0||t.e>6)&&(s=!0)):r=i),a<1||a>Ie(n,i,o)?y(e)._overflowWeeks=!0:null!=s?y(e)._overflowWeekday=!0:(l=Ae(n,a,r,i,o),e._a[0]=l.year,e._dayOfYear=l.dayOfYear)}(e),null!=e._dayOfYear&&(o=bt(e._a[0],a[0]),(e._dayOfYear>Pe(o)||0===e._dayOfYear)&&(y(e)._overflowDayOfYear=!0),n=Ce(o,0,e._dayOfYear),e._a[1]=n.getUTCMonth(),e._a[2]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=l[t]=a[t];for(;t<7;t++)e._a[t]=l[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,e._a[3]=0),e._d=(e._useUTC?Ce:function(e,t,n,a,r,i,o){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,a,r,i,o),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,a,r,i,o),l}).apply(null,l),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[3]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function gt(e){if(e._f!==r.ISO_8601)if(e._f!==r.RFC_2822){e._a=[],y(e).empty=!0;var t,n,a,i,o,l,s,u=""+e._i,c=u.length,d=0;for(s=(a=R(e._f,e._locale).match(D)||[]).length,t=0;t<s;t++)i=a[t],(n=(u.match(ye(i,e))||[])[0])&&((o=u.substr(0,u.indexOf(n))).length>0&&y(e).unusedInput.push(o),u=u.slice(u.indexOf(n)+n.length),d+=n.length),A[i]?(n?y(e).empty=!1:y(e).unusedTokens.push(i),Ee(i,n,e)):e._strict&&!n&&y(e).unusedTokens.push(i);y(e).charsLeftOver=c-d,u.length>0&&y(e).unusedInput.push(u),e._a[3]<=12&&!0===y(e).bigHour&&e._a[3]>0&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[3]=function(e,t,n){var a;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((a=e.isPM(n))&&t<12n");$(".capzoom").remove();$(".wrap-zoom").parent(".ratiobox, .lqd_block").css({"overflow":""});$(".wrap-zoom").siblings(".lqd_img").css({"opacity":""});setTimeout(function(){$("body").removeClass("overflow-x-hidden");$(".zoom-overlay").remove();imgZoomed.unwrap().addClass("img-zoomin").removeClass("img-zoomout");},300);imgZoomed.removeAttr("style");imgZoomed.parent(".wrap-zoom").css({"-webkit-transform":"","-ms-transform":"","transform":""});}
let unPinchTarget=document.querySelector('.p_img_zoomin');if(unPinchTarget){hammerIt(unPinchTarget,true);}}
function zoomIn(){$("body").addClass("overflow-x-hidden");$("body").append("<div class='zoom-overlay'></div>");img.wrap(wrap).removeClass("img-zoomin").addClass("img-zoomout");$(".wrap-zoom").parent(".ratiobox, .lqd_block").css({"overflow":"visible"});$(".wrap-zoom").siblings(".lqd_img").css({"opacity":0});setTimeout(function(){$("body").addClass("zoom-overlay-open")
img.css({"transform":"scale("+img_scale+")",});img.parent(".wrap-zoom").css({"-webkit-transform":imageWrapTransform,"-ms-transform":imageWrapTransform,"transform":imageWrapTransform})},5);if(caption.length){caption.clone().addClass("capzoom").wrapInner("<span></span>").appendTo("body");caption.css({})}
if(caption2.length){caption2.clone().addClass("capzoom").wrapInner("<span></span>").appendTo("body");caption2.css({})}
let pinchTarget=document.querySelector('.p_img_zoomin');if(pinchTarget){hammerIt(pinchTarget);}}
if(img.hasClass("img-zoomout")){zoomOut();}
else{zoomIn();}
$(".zoom-overlay, .wrap-zoom").click(function(){zoomOut();});$(document).keydown(function(e){if(e.keyCode==27){zoomOut();}});window.addEventListener("scroll",zoomOut);});}}(jQuery));function hammerIt(elm,des){if(des!==true){hammertime=new Hammer(elm,{});hammertime.get('pinch').set({enable:true});let posX=0,posY=0,scale=1,last_scale=1,last_posX=0,last_posY=0,max_pos_x=0,max_pos_y=0,transform="",el=elm;hammertime.on('doubletap pan pinch panend pinchend press',function(ev){if(ev.type=="doubletap"){transform="translate3d(0, 0, 0) "+"scale3d(2, 2, 1) ";scale=2;last_scale=2;try{if(window.getComputedStyle(el,null).getPropertyValue('-webkit-transform').toString()!="matrix(1, 0, 0, 1, 0, 0)"){transform="translate3d(0, 0, 0) "+"scale3d(1, 1, 1) ";scale=1;last_scale=1;}}catch(err){}
el.style.webkitTransform=transform;transform="";}
if(scale!=1){posX=last_posX+ev.deltaX;posY=last_posY+ev.deltaY;max_pos_x=Math.ceil((scale-1)*el.clientWidth/2);max_pos_y=Math.ceil((scale-1)*el.clientHeight/2);if(posX>max_pos_x){posX=max_pos_x;}
if(posX<-max_pos_x){posX=-max_pos_x;}
if(posY>max_pos_y){posY=max_pos_y;}
if(posY<-max_pos_y){posY=-max_pos_y;}}
if(ev.type=="pinch"){scale=Math.max(.999,Math.min(last_scale*(ev.scale),4));}
if(ev.type=="pinchend"){last_scale=scale;}
if(ev.type=="panend"){last_posX=posX<max_pos_x?posX:max_pos_x;last_posY=posY<max_pos_y?posY:max_pos_y;}
if(scale!=1){transform="translate3d("+posX+"px,"+posY+"px, 0) "+"scale3d("+scale+", "+scale+", 1)";}
if(transform){el.style.webkitTransform=transform;}});}else{hammertime.destroy();}}
function zoom_img(opt){$(".p_img_zoomin").zoomer(opt);}
zoom_img();