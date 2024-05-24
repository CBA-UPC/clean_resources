/**
 * Cookies manager to deal with them similar to JS cookies packages.
 */
const jsCookie = {
  /**
   * Gets the value of a cookie.
   *
   * @param {string} key - The key of the cookie to be retrieved
   * @returns {*}
   */
  getCookie(key) {
    if (typeof document === 'undefined' || !key) {
      return undefined;
    }

    for (const cookie of document.cookie.split('; ')) {
      if (cookie) {
        const dividerPos = cookie.indexOf('=');
        const name = cookie.substring(0, dividerPos);
        const value = jsCookie.decode(cookie.substring(dividerPos + 1));

        if (typeof value === 'undefined') {
          continue;
        }

        if (key === name) {
          try {
            return JSON.parse(value);
          } catch (_) {
            return value;
          }
        }
      }
    }

    return undefined;
  },

  /**
   * Sets the value of a cookie.
   *
   * @param {string} key - The key (name) of the cookie
   * @param {*} value - The value of the cookie
   * @param {object} attributes - Attributes of the cookie with the following options:
   * @param {number} attributes.expirationDays - The number of days until the cookie should expire
   * @param {string} attributes.domain - The number of days until the cookie should expire
   * @param {string} attributes.path - The number of days until the cookie should expire
   * @returns {void}
   */
  setCookie(key, value, attributes = {}) {
    const DEFAULT_ATTRIBUTES = { path: '/' };
    const finalAttributes = Object.assign({}, DEFAULT_ATTRIBUTES, attributes);

    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + finalAttributes.expirationDays * 24 * 60 * 60 * 1000);

    const stringifiedValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
    const encodedValue = jsCookie.encode(stringifiedValue);

    document.cookie = `${key}=${encodedValue}; path=${finalAttributes.path}; expires=${expirationTime.toUTCString()}; ${
      finalAttributes.domain && `domain=${finalAttributes.domain}`
    }`;
  },

  /**
   * @param {string} value
   * @returns {string|undefined}
   */
  decode

  /**
   * @param {string} value
   * @returns {string}
   */
  encode};

/**
 * Determines whether two plain objects are deeply equal or not.
 *
 * Extracted from: https://javascript.plainenglish.io/4-ways-to-compare-objects-in-javascript-97fe9b2a949c
 *
 * @param {object} obj1
 * @param {object} obj2
 * @returns {boolean}
 */
const isEqual = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length !== props2.length) {
    return false;
  }
  for (let i = 0; i < props1.length; i++) {
    const prop = props1[i];
    const bothAreObjects = typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object';
    if ((!bothAreObjects && obj1[prop] !== obj2[prop]) || (bothAreObjects && !isEqual(obj1[prop], obj2[prop]))) {
      return false;
    }
  }
  return true;
};

function storeUtmParams() {
  const UTM_PARAMS_COOKIE_KEY = 'utm_params';
  const BASIC_UTM_PARAM_NAMES = ['utm_source', 'utm_campaign', 'utm_medium'];
  const ALL_UTM_PARAM_NAMES = [
    ...BASIC_UTM_PARAM_NAMES,
    'utm_term',
    'utm_content',
    'adgroupid',
    'keyword',
    'matchtype',
    'device',
    'gclid',
    'wbraid',
    'gbraid'
  ];

  const searchParams = new URLSearchParams(window.location.search);
  const utmParams = ALL_UTM_PARAM_NAMES.reduce((acc, paramName) => {
    const paramValue = searchParams.get(paramName);
    if (paramValue) {
      acc[paramName] = paramValue;
    }
    return acc;
  }, {});

  const hasSomeBasicParam = BASIC_UTM_PARAM_NAMES.some(;
  const isSameValue = isEqual(jsCookie.getCookie(UTM_PARAMS_COOKIE_KEY), utmParams);

  if (hasSomeBasicParam && !isSameValue) {
    const cookieAttrs = {
      domain: 'hotjar.com',
      path: '/',
      expirationDays: 30
    };
    jsCookie.setCookie(UTM_PARAMS_COOKIE_KEY, { ...utmParams, timestamp: new Date().getTime() }, cookieAttrs);
  }
}

// init UTM params storing
storeUtmParams();
