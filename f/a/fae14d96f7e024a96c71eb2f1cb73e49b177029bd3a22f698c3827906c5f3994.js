/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7812:
/***/ (,

/***/ 9971:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone-utils.js
//! version : 0.5.43
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(this, function (moment) {
	"use strict";

	if (!moment.tz) {
		throw new Error("moment-timezone-utils.js must be loaded after moment-timezone.js");
	}

	/************************************
		Pack Base 60
	************************************/

	var BASE60 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX',
		EPSILON = 0.000001; // Used to fix floating point rounding errors

	function packBase60Fraction(fraction, precision) {
		var buffer = '.',
			output = '',
			current;

		while (precision > 0) {
			precision  -= 1;
			fraction   *= 60;
			current     = Math.floor(fraction + EPSILON);
			buffer     += BASE60[current];
			fraction   -= current;

			// Only add buffer to output once we have a non-zero value.
			// This makes '.000' output '', and '.100' output '.1'
			if (current) {
				output += buffer;
				buffer  = '';
			}
		}

		return output;
	}

	function packBase60(number, precision) {
		var output = '',
			absolute = Math.abs(number),
			whole = Math.floor(absolute),
			fraction = packBase60Fraction(absolute - whole, Math.min(~~precision, 10));

		while (whole > 0) {
			output = BASE60[whole % 60] + output;
			whole = Math.floor(whole / 60);
		}

		if (number < 0) {
			output = '-' + output;
		}

		if (output && fraction) {
			return output + fraction;
		}

		if (!fraction && output === '-') {
			return '0';
		}

		return output || fraction || '0';
	}

	/************************************
		Pack
	************************************/

	function packUntils(untils) {
		var out = [],
			last = 0,
			i;

		for (i = 0; i < untils.length - 1; i++) {
			out[i] = packBase60(Math.round((untils[i] - last) / 1000) / 60, 1);
			last = untils[i];
		}

		return out.join(' ');
	}

	function packAbbrsAndOffsets(source) {
		var index = 0,
			abbrs = [],
			offsets = [],
			indices = [],
			map = {},
			i, key;

		for (i = 0; i < source.abbrs.length; i++) {
			key = source.abbrs[i] + '|' + source.offsets[i];
			if (map[key] === undefined) {
				map[key] = index;
				abbrs[index] = source.abbrs[i];
				offsets[index] = packBase60(Math.round(source.offsets[i] * 60) / 60, 1);
				index++;
			}
			indices[i] = packBase60(map[key], 0);
		}

		return abbrs.join(' ') + '|' + offsets.join(' ') + '|' + indices.join('');
	}

	function packPopulation (number) {
		if (!number) {
			return '';
		}
		if (number < 1000) {
			return number;
		}
		var exponent = String(number | 0).length - 2;
		var precision = Math.round(number / Math.pow(10, exponent));
		return precision + 'e' + exponent;
	}

	function packCountries (countries) {
		if (!countries) {
			return '';
		}
		return countries.join(' ');
	}

	function validatePackData (source) {
		if (!source.name)    { throw new Error("Missing name"); }
		if (!source.abbrs)   { throw new Error("Missing abbrs"); }
		if (!source.untils)  { throw new Error("Missing untils"); }
		if (!source.offsets) { throw new Error("Missing offsets"); }
		if (
			source.offsets.length !== source.untils.length ||
			source.offsets.length !== source.abbrs.length
		) {
			throw new Error("Mismatched array lengths");
		}
	}

	function pack (source) {
		validatePackData(source);
		return [
			source.name, // 0 - timezone name
			packAbbrsAndOffsets(source), // 1 - abbrs, 2 - offsets, 3 - indices
			packUntils(source.untils), // 4 - untils
			packPopulation(source.population) // 5 - population
		].join('|');
	}

	function packCountry (source) {
		return [
			source.name,
			source.zones.join(' '),
		].join('|');
	}

	/************************************
		Create Links
	************************************/

	function arraysAreEqual(a, b) {
		var i;

		if (a.length !== b.length) { return false; }

		for (i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
				return false;
			}
		}
		return true;
	}

	
	function findAndCreateLinks (input, output, links, groupLeaders) {
		var i, j, a, b, group, foundGroup, groups = [];

		for (i = 0; i < input.length; i++) {
			foundGroup = false;
			a = input[i];

			for (j = 0; j < groups.length; j++) {
				group = groups[j];
				b = group[0];
				if (zonesAreEqual(a, b)) {
					if (a.population > b.population) {
						group.unshift(a);
					} else if (a.population === b.population && groupLeaders && groupLeaders[a.name]) {
                        group.unshift(a);
                    } else {
						group.push(a);
					}
					foundGroup = true;
				}
			}

			if (!foundGroup) {
				groups.push([a]);
			}
		}

		for (i = 0; i < groups.length; i++) {
			group = groups[i];
			output.push(group[0]);
			for (j = 1; j < group.length; j++) {
				links.push(group[0].name + '|' + group[j].name);
			}
		}
	}

	function createLinks (source, groupLeaders) {
		var zones = [],
			links = [];

		if (source.links) {
			links = source.links.slice();
		}

		findAndCreateLinks(source.zones, zones, links, groupLeaders);

		return {
			version 	: source.version,
			zones   	: zones,
			links   	: links.sort()
		};
	}

	/************************************
		Filter Years
	************************************/

	function findStartAndEndIndex (untils, start, end) {
		var startI = 0,
			endI = untils.length + 1,
			untilYear,
			i;

		if (!end) {
			end = start;
		}

		if (start > end) {
			i = start;
			start = end;
			end = i;
		}

		for (i = 0; i < untils.length; i++) {
			if (untils[i] == null) {
				continue;
			}
			untilYear = new Date(untils[i]).getUTCFullYear();
			if (untilYear < start) {
				startI = i + 1;
			}
			if (untilYear > end) {
				endI = Math.min(endI, i + 1);
			}
		}

		return [startI, endI];
	}

	function filterYears (source, start, end) {
		var slice     = Array.prototype.slice,
			indices   = findStartAndEndIndex(source.untils, start, end),
			untils    = slice.apply(source.untils, indices);

		untils[untils.length - 1] = null;

		return {
			name       : source.name,
			abbrs      : slice.apply(source.abbrs, indices),
			untils     : untils,
			offsets    : slice.apply(source.offsets, indices),
			population : source.population,
			countries  : source.countries
		};
	}

	/************************************
		Filter, Link, and Pack
	************************************/

	function filterLinkPack (input, start, end, groupLeaders) {
		var i,
			inputZones = input.zones,
			outputZones = [],
			output;

		for (i = 0; i < inputZones.length; i++) {
			outputZones[i] = filterYears(inputZones[i], start, end);
		}

		output = createLinks({
			zones : outputZones,
			links : input.links.slice(),
			version : input.version
		}, groupLeaders);

		for (i = 0; i < output.zones.length; i++) {
			output.zones[i] = pack(output.zones[i]);
		}

		output.countries = input.countries ? input.countries.map( : [];

		return output;
	}

	/************************************
		Exports
	************************************/

	moment.tz.pack           = pack;
	moment.tz.packBase60     = packBase60;
	moment.tz.createLinks    = createLinks;
	moment.tz.filterYears    = filterYears;
	moment.tz.filterLinkPack = filterLinkPack;
	moment.tz.packCountry	 = packCountry;

	return moment;
}));


/***/ }),

/***/ 2828:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone.js
//! version : 0.5.43
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if ( true && module.exports) {
		module.exports = factory(__webpack_require__(6292)); // Node
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6292)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));                 // AMD
	} else {}
}(this, n moment;
}));


/***/ }),

/***/ 6];

/***/ }),

/***/ 1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require functio/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export *//******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters *//******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand *//******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object *//******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__experimentalGetSettings": function() { return /* binding */ __experimentalGetSettings; },
  "date": function() { return /* binding */ date; },
  "dateI18n": function() { return /* binding */ dateI18n; },
  "format": function() { return /* binding */ format; },
  "getDate": function() { return /* binding */ getDate; },
  "getSettings": function() { return /* binding */ getSettings; },
  "gmdate": function() { return /* binding */ gmdate; },
  "gmdateI18n": function() { return /* binding */ gmdateI18n; },
  "humanTimeDiff": function() { return /* binding */ humanTimeDiff; },
  "isInTheFuture": function() { return /* binding */ isInTheFuture; },
  "seSettings; }
});

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(6292);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./node_modules/moment-timezone/moment-timezone.js
var moment_timezone = __webpack_require__(2828);
// EXTERNAL MODULE: ./node_modules/moment-timezone/moment-timezone-utils.js
var moment_timezone_utils = __webpack_require__(9971);
;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/date/build-module/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/** @typedef {import('moment').Moment} Moment */

/** @typedef {import('moment').LocaleSpecification} MomentLocaleSpecification */

/**
 * @typedef MeridiemConfig
 * @property {string} am Lowercase AM.
 * @property {string} AM Uppercase AM.
 * @property {string} pm Lowercase PM.
 * @property {string} PM Uppercase PM.
 */

/**
 * @typedef FormatsConfig
 * @property {string} time                Time format.
 * @property {string} date                Date format.
 * @property {string} datetime            Datetime format.
 * @property {string} datetimeAbbreviated Abbreviated datetime format.
 */

/**
 * @typedef TimezoneConfig
 * @property {string} offset Offset setting.
 * @property {string} string The timezone as a string (e.g., `'America/Los_Angeles'`).
 * @property {string} abbr   Abbreviation for the timezone.
 */

/* eslint-disable jsdoc/valid-types */

/**
 * @typedef L10nSettings
 * @property {string}                                     locale        Moment locale.
 * @property {MomentLocaleSpecification['months']}        months        Locale months.
 * @property {MomentLocaleSpecification['monthsShort']}   monthsShort   Locale months short.
 * @property {MomentLocaleSpecification['weekdays']}      weekdays      Locale weekdays.
 * @property {MomentLocaleSpecification['weekdaysShort']} weekdaysShort Locale weekdays short.
 * @property {MeridiemConfig}                             meridiem      Meridiem config.
 * @property {MomentLocaleSpecification['relativeTime']}  relative      Relative time config.
 * @property {0|1|2|3|4|5|6}                              startOfWeek   Day that the week starts on.
 */

/* eslint-enable jsdoc/valid-types */

/**
 * @typedef DateSettings
 * @property {L10nSettings}   l10n     Localization settings.
 * @property {FormatsConfig}  formats  Date/time formats config.
 * @property {TimezoneConfig} timezone Timezone settings.
 */

const WP_ZONE = 'WP'; // This regular expression tests positive for UTC offsets as described in ISO 8601.
// See: https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC

const VALID_UTC_OFFSET = /^[+-][0-1][0-9](:?[0-9][0-9])?$/; // Changes made here will likely need to be made in `lib/client-assets.php` as
// well because it uses the `setSettings()` function to change these settings.

/** @type {DateSettings} */

let settings = {
  l10n: {
    locale: 'en',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    meridiem: {
      am: 'am',
      pm: 'pm',
      AM: 'AM',
      PM: 'PM'
    },
    relative: {
      future: '%s from now',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    startOfWeek: 0
  },
  formats: {
    time: 'g: i a',
    date: 'F j, Y',
    datetime: 'F j, Y g: i a',
    datetimeAbbreviated: 'M j, Y g: i a'
  },
  timezone: {
    offset: '0',
    string: '',
    abbr: ''
  }
};
/**
 * Adds a locale to moment, using the format supplied by `wp_localize_script()`.
 *
 * @param {DateSettings} dateSettings Settings, including locale data.
 */

function setSettings(dateSettings) {
  settings = dateSettings;
  setupWPTimezone(); // Does moment already have a locale with the right name?

  if (external_moment_default().locales().includes(dateSettings.l10n.locale)) {
    // Is that locale misconfigured, e.g. because we are on a site running
    // WordPress < 6.0?
    if (external_moment_default().localeData(dateSettings.l10n.locale).longDateFormat('LTS') === null) {
      // Delete the misconfigured locale.
      // @ts-ignore Type definitions are incorrect - null is permitted.
      external_moment_default().defineLocale(dateSettings.l10n.locale, null);
    } else {
      // We have a properly configured locale, so no need to create one.
      return;
    }
  } // defineLocale() will modify the current locale, so back it up.


  const currentLocale = external_moment_default().locale(); // Create locale.

  external_moment_default().defineLocale(dateSettings.l10n.locale, {
    // Inherit anything missing from English. We don't load
    // moment-with-locales.js so English is all there is.
    parentLocale: 'en',
    months: dateSettings.l10n.months,
    monthsShort: dateSettings.l10n.monthsShort,
    weekdays: dateSettings.l10n.weekdays,
    weekdaysShort: dateSettings.l10n.weekdaysShort,

    meridiem(hour, minute, isLowercase) {
      if (hour < 12) {
        return isLowercase ? dateSettings.l10n.meridiem.am : dateSettings.l10n.meridiem.AM;
      }

      return isLowercase ? dateSettings.l10n.meridiem.pm : dateSettings.l10n.meridiem.PM;
    },

    longDateFormat: {
      LT: dateSettings.formats.time,
      LTS: external_moment_default().localeData('en').longDateFormat('LTS'),
      L: external_moment_default().localeData('en').longDateFormat('L'),
      LL: dateSettings.formats.date,
      LLL: dateSettings.formats.datetime,
      LLLL: external_moment_default().localeData('en').longDateFormat('LLLL')
    },
    // From human_time_diff?
    // Set to `(number, withoutSuffix, key, isFuture) => {}` instead.
    relativeTime: dateSettings.l10n.relative
  }); // Restore the locale to what it was.

  external_moment_default().locale(currentLocale);
}
/**
 * Returns the currently defined date settings.
 *
 * @return {DateSettings} Settings, including localesettings;
}
/**
 * Returns the currently defined date settings.
 *
 * @deprecated
 * @return {DateSettings} Settings, including locale data.
 */

function __experimentalGetSettings() {
  external_wp_deprecated_default()('wp.date.__experimentalGetSettings', {
    since: '6.1',
    alternative: 'wp.date.getSettings'
  });
  return getSettings();
}

function setupWPTimezone() {
  // Create WP timezone based off dateSettings.
  external_moment_default().tz.add(external_moment_default().tz.pack({
    name: WP_ZONE,
    abbrs: [WP_ZONE],
    untils: [null],
    offsets: [-settings.timezone.offset * 60 || 0]
  }));
} // Date constants.

/**
 * Number of seconds in one minute.
 *
 * @type {number}
 */


const MINUTE_IN_SECONDS = 60;
/**
 * Number of minutes in one hour.
 *
 * @type {number}
 */

const HOUR_IN_MINUTES = 60;
/**
 * Number of seconds in one hour.
 *
 * @type {number}
 */

const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
/**
 * Map of PHP formats to Moment.js formats.
 *
 * These are used internally by {@link wp.date.format}, and are either
 * a string representing the corresponding Moment.js format code, or a
 * function which returns the formatted string.
 *
 * This should only be used through {@link wp.date.format}, not
 * directly.
 */

const formatMap = {
  // Day.
  d: 'DD',
  D: 'ddd',
  j: 'D',
  l: 'dddd',
  N: 'E',

  /**
   * Gets the ordinal suffix.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  S(momentDate) {
    // Do - D.
    const num = momentDate.format('D');
    const withOrdinal = momentDate.format('Do');
    return withOrdinal.replace(num, '');
  },

  w: 'd',

  /**
   * Gets the day of the year (zero-indexed).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  z(momentDate) {
    // DDD - 1.
    return (parseInt(momentDate.format('DDD'), 10) - 1).toString();
  },

  // Week.
  W: 'W',
  // Month.
  F: 'MMMM',
  m: 'MM',
  M: 'MMM',
  n: 'M',

  /**
   * Gets the days in the month.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted datonth();
  },

  // Year.

  /**
   * Gets whether the current year is a leap year.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  L(momentDate) {
    return momentDate.isLeapYear() ? '1' : '0';
  },

  o: 'GGGG',
  Y: 'YYYY',
  y: 'YY',
  // Time.
  a: 'a',
  A: 'A',

  /**
   * Gets the current time in Swatch Internet Time (.beats).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  B(momentDate) {
    const timezoned = external_moment_default()(momentDate).utcOffset(60);
    const seconds = parseInt(timezoned.format('s'), 10),
          minutes = parseInt(timezoned.format('m'), 10),
          hours = parseInt(timezoned.format('H'), 10);
    return parseInt(((seconds + minutes * MINUTE_IN_SECONDS + hours * HOUR_IN_SECONDS) / 86.4).toString(), 10);
  },

  g: 'h',
  G: 'H',
  h: 'hh',
  H: 'HH',
  i: 'mm',
  s: 'ss',
  u: 'SSSSSS',
  v: 'SSS',
  // Timezone.
  e: 'zz',

  /**
   * Gets whether the timezone is in DST currently.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted dat : '0';
  },

  O: 'ZZ',
  P: 'Z',
  T: 'z',

  /**
   * Gets the timezone offset in seconds.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  Z(momentDate) {
    // Timezone offset in seconds.
    const offset = momentDate.format('Z');
    const sign = offset[0] === '-' ? -1 : 1;
    const parts = offset.substring(1).spleInt(n, 10));
    return sign * (parts[0] * HOUR_IN_MINUTES + parts[1]) * MINUTE_IN_SECONDS;
  },

  // Full date/time.
  c: 'YYYY-MM-DDTHH:mm:ssZ',

  // .toISOString.

  /**
   * Formats the date as RFC2822.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted dats ZZ');
  },

  U: 'X'
};
/**
 * Formats a date. Does not alter the date's timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date.
 */

function format(dateFormat, dateValue = new Date()) {
  let i, char;
  const newFormat = [];
  const momentDate = external_moment_default()(dateValue);

  for (i = 0; i < dateFormat.length; i++) {
    char = dateFormat[i]; // Is this an escape?

    if ('\\' === char) {
      // Add next character, then move on.
      i++;
      newFormat.push('[' + dateFormat[i] + ']');
      continue;
    }

    if (char in formatMap) {
      const formatter = formatMap[
      /** @type {keyof formatMap} */
      char];

      if (typeof formatter !== 'string') {
        // If the format is a function, call it.
        newFormat.push('[' + formatter(momentDate) + ']');
      } else {
        // Otherwise, add as a formatting string.
        newFormat.push(formatter);
      }
    } else {
      newFormat.push('[' + char + ']');
    }
  } // Join with [] between to separate characters, and replace
  // unneeded separators with static text.


  return momentDate.format(newFormat.join('[]'));
}
/**
 * Formats a date (like `date()` in PHP).
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string, parsable
 *                                                        by moment.js.
 * @param {string | number | undefined}        timezone   Timezone to output result in or a
 *                                                        UTC offset. Defaults to timezone from
 *                                                        site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date in English.
 */

function date(dateFormat, dateValue = new Date(), timezone) {
  const dateMoment = buildMoment(dateValue, timezone);
  return format(dateFormat, dateMoment);
}
/**
 * Formats a date (like `date()` in PHP), in the UTC timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date in English.
 */

function gmdate(dateFormat, dateValue = new Date()) {
  const dateMoment = external_moment_default()(dateValue).utc();
  return format(dateFormat, dateMoment);
}
/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale.
 *
 * Backward Compatibility Notice: if `timezone` is set to `true`, the function
 * behaves like `gmdateI18n`.
 *
 * @param {string}                                dateFormat PHP-style formatting string.
 *                                                           See php.net/date.
 * @param {Moment | Date | string | undefined}    dateValue  Date object or string, parsable by
 *                                                           moment.js.
 * @param {string | number | boolean | undefined} timezone   Timezone to output result in or a
 *                                                           UTC offset. Defaults to timezone from
 *                                                           site. Notice: `boolean` is effectively
 *                                                           deprecated, but still supported for
 *                                                           backward compatibility reasons.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date.
 */

function dateI18n(dateFormat, dateValue = new Date(), timezone) {
  if (true === timezone) {
    return gmdateI18n(dateFormat, dateValue);
  }

  if (false === timezone) {
    timezone = undefined;
  }

  const dateMoment = buildMoment(dateValue, timezone);
  dateMoment.locale(settings.l10n.locale);
  return format(dateFormat, dateMoment);
}
/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale
 * and using the UTC timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date.
 */

function gmdateI18n(dateFormat, dateValue = new Date()) {
  const dateMoment = external_moment_default()(dateValue).utc();
  dateMoment.locale(settings.l10n.locale);
  return format(dateFormat, dateMoment);
}
/**
 * Check whether a date is considered in the future according to the WordPress settings.
 *
 * @param {string} dateValue Date String or Date object in the Defined WP Timezone.
 *
 * @return {boolean} Is in the future.
 */

function isInTheFuture(dateValue) {
  const now = external_moment_default().tz(WP_ZONE);
  const momentObject = external_moment_default().tz(dateValue, WP_ZONE);
  return momentObject.isAfter(now);
}
/**
 * Create and return a JavaScript Date Object from a date string in the WP timezone.
 *
 * @param {string?} dateString Date formatted in the WP timezone.
 *
 * @return {Date} Date
 */

function getDate(dateString) {
  if (!dateString) {
    return external_moment_default().tz(WP_ZONE).toDate();
  }

  return external_moment_default().tz(dateString, WP_ZONE).toDate();
}
/**
 * Returns a human-readable time difference between two dates, like human_time_diff() in PHP.
 *
 * @param {Moment | Date | string}             from From date, in the WP timezone.
 * @param {Moment | Date | string | undefined} to   To date, formatted in the WP timezone.
 *
 * @return {string} Human-readable time difference.
 */

function humanTimeDiff(from, to) {
  const fromMoment = external_moment_default().tz(from, WP_ZONE);
  const toMoment = to ? external_moment_default().tz(to, WP_ZONE) : external_moment_default().tz(WP_ZONE);
  return fromMoment.from(toMoment);
}
/**
 * Creates a moment instance using the given timezone or, if none is provided, using global settings.
 *
 * @param {Moment | Date | string | undefined} dateValue Date object or string, parsable
 *                                                       by moment.js.
 * @param {string | number | undefined}        timezone  Timezone to output result in or a
 *                                                       UTC offset. Defaults to timezone from
 *                                                       site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {Moment} a moment instance.
 */

function buildMoment(dateValue, timezone = '') {
  const dateMoment = external_moment_default()(dateValue);

  if (timezone && !isUTCOffset(timezone)) {
    // The ! isUTCOffset() check guarantees that timezone is a string.
    return dateMoment.tz(
    /** @type {string} */
    timezone);
  }

  if (timezone && isUTCOffset(timezone)) {
    return dateMoment.utcOffset(timezone);
  }

  if (settings.timezone.string) {
    return dateMoment.tz(settings.timezone.string);
  }

  return dateMoment.utcOffset(+settings.timezone.offset);
}
/**
 * Returns whether a certain UTC offset is valid or not.
 *
 * @param {number|string} offset a UTC offset.
 *
 * @return {boolean} whether a certain UTC offset is valid or not.
 */


function isUTCOffset(offset) {
  if ('number' === typeof offset) {
    return true;
  }

  return VALID_UTC_OFFSET.test(offset);
}

setupWPTimezone();

}();
(window.wp = window.wp || {}).date = __webpack_exports__;
/******/ })()
;