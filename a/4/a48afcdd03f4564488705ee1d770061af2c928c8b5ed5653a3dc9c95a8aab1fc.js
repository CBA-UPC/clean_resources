function deml(matched) {
  domain_match = 0;
  referrer_match = 0;
  try {
    domain_match = window.location.host.includes(
      matched[0].toLowerCase().split('@')[1].split('.')[0]
    );
  } catch (e) {}
  try {
    referrer_match = localStorage
      .getItem('sjrn_referrer')
      .includes(matched[0].toLowerCase().split('@')[1].split('.')[0]);
  } catch (e) {}
  return (
    !matched[0]
      .toLowerCase()
      .match(
        'book.|hotel|test@gmail|booking@|info@|reception@|reserv|recepcion@|support@|@[0-9.]*$'
      ) &&
    !domain_match &&
    !referrer_match
  );
}

function sjrn_cipher(str) {
  try {
    return encodeURIComponent(btoa(str.toLowerCase().trim()));
  } catch (e) {
    return '';
  }
}

function sjrn_lfe(sjrn_elt) {
  for (let i of document.getElementsByTagName('input')) {
    if (i.outerHTML.match(/e[-]*mail/i) && !sjrn_elt.has(i)) {
      sjrn_elt.set(i, true);
      i.addEventListener('blur', ;
    }
  }
  return sjrn_elt;
}

function sjrn_wfe(sjrn_elt) {
  return new Promise((resolve) => {
    sjrn_elt = sjrn_lfe(sjrn_elt);

    const observer = new MutationObserver(;

    function setObserver() {
      if (document.body) {
        sjrn_elt = sjrn_lfe(sjrn_elt);
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      } else {
        window.setTimeout(setObserver, 500);
        return;
      }
    }
    setObserver();
  });
}

function sjrn_e() {
  sjrn_elt = sjrn_lfe(sjrn_elt);
  sjrn_wfe(sjrn_elt);
}

if (typeof sjrn_elt === 'undefined') {
  sjrn_elt = new Map();
  sjrn_e();
}

function feml() {
  function textNodesUnder(node) {
    var all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
      if (node.nodeType == 3) all.push(node);
      else all = all.concat(textNodesUnder(node));
    }
    return all;
  }

  matched_set = new Set();
  first_matched = null;
  for (let node of document.getElementsByTagName('*')) {
    matched = node.innerHTML.match(
      /(?:[a-z0-9!#$%&*+/?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );
    if (matched && node.tagName != 'A' && deml(matched)) {
      matched_set.add(matched[0].toLowerCase());
      if (!first_matched) {
        first_matched = matched[0].toLowerCase();
      }
    }
  }
  try {
    auto_eml_domain = first_matched.split('@')[1];
  } catch (e) {
    auto_eml_domain = 'Not an email';
  }
  return {
    auto_eml_domain: auto_eml_domain,
    auto_eml: first_matched,
    auto_eml_count: matched_set.size,
    auto_eml_list: matched_set,
  };
}

function sjrn_heml() {
  sjrn_eml = feml();
  if (sjrn_eml.auto_eml) {
    return {
      auto_eml: sjrn_cipher(sjrn_eml.auto_eml),
      auto_eml_count: sjrn_eml.auto_eml_count,
      auto_eml_domain: sjrn_cipher(sjrn_eml.auto_eml_domain),
      // auto_eml_list: sjrn_cipher([...sjrn_eml.auto_eml_list].join('|')),
    };
  } else {
    return {
      auto_eml: '',
      auto_eml_count: 0,
      auto_eml_domain: '',
      // auto_eml_list: '',
    };
  }
}

function sjrn_ccid() {
  try {
    function ranString() {
      return ((Math.random() + 1).toString(36) + '000000').slice(2, 7);
    }
    if (!localStorage.getItem('sjrn_ccid')) {
      localStorage.setItem(
        'sjrn_ccid',
        Array.apply(null, {
          length: 5,
        })
          .map(Function.call, ranString)
          .join('-')
      );
    }
    return localStorage.getItem('sjrn_ccid');
  } catch (e) {
    return '';
  }
}

function sjrn_ga() {
  value = '; ' + document.cookie;
  parts = value.split('; _ga=');
  ga_ids = [];
  if (parts.length >= 2) {
    for (i = 1; i < parts.length; i++) {
      ga_id = parts[i].split(';').shift();
      try {
        ga_id_split = ga_id.split('.');
        ga_ids.push(
          ga_id_split[ga_id_split.length - 2] +
            '.' +
            ga_id_split[ga_id_split.length - 1]
        );
      } catch (e) {}
    }
    return ga_ids.join('|');
  } else {
    return '';
  }
}

function sjrn_tz() {
  try {
    tz_date = new Date();
    return tz_date.getTimezoneOffset();
  } catch (e) {
    return '';
  }
}

function sjrn_dclid() {
  try {
    dclid = window.location.href.split(/[?|&]dclid=/)[1].split('&')[0];
  } catch (e) {
    dclid = '';
  }
  if (dclid) {
    localStorage.setItem('sjrn_dclid', dclid);
  }
  return localStorage.getItem('sjrn_dclid');
}

function sjrn_wh_token() {
  try {
    wh_token = window.location.href.split(/[?|&]wh_token=/)[1].split('&')[0];
  } catch (e) {
    wh_token = '';
  }
  if (wh_token) {
    localStorage.setItem('sjrn_wh_token', wh_token);
  }
  return localStorage.getItem('sjrn_wh_token');
}

function sjrn_ft() {
  function gf() {
    let values = [];
    try {
      values.push(navigator.connection.effectiveType);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.connection.downlink);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.connection.rtt);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.deviceMemory);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.hardwareConcurrency);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.language);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.languages);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.platform);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.userAgentData.mobile);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.userAgentData.platform);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.devicePixelRatio);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.pixelDepth);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.colorDepth);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.availWidth);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.availHeight);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.performance.memory.jsHeapSizeLimit);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    } catch (e) {
      values.push(null);
    }
    return values.join('|');
  }

  
  return eB(gf());
}

function sjrn_clid() {
  try {
    sjrnclid = window.location.href
      .split(/[?|&]sjrnclid=/)[1]
      .split('&')[0]
      .split('#')[0]
      .split('/')[0];
  } catch (e) {
    sjrnclid = '';
  }
  if (sjrnclid) {
    localStorage.setItem('sjrn_clid', sjrnclid);
  }
  return localStorage.getItem('sjrn_clid');
}

function sjrn_click_campaign_id() {
  try {
    sjrn_click_campaign_id = window.location.href
      .split(/[?|&]sjrncid=/)[1]
      .split('&')[0]
      .split('#')[0]
      .split('/')[0];
  } catch (e) {
    sjrn_click_campaign_id = '';
  }
  if (sjrn_click_campaign_id) {
    localStorage.setItem('sjrn_click_campaign_id', sjrn_click_campaign_id);
  }
  return localStorage.getItem('sjrn_click_campaign_id');
}

function sjrn_run() {
  try {
    var a = document.createElement('a');
    a.href = document.referrer;
    if (a.host != window.location.host) {
      localStorage.setItem('sjrn_referrer', a.host);
    }
  } catch (e) {}
  try {
    sjrn_e();
  } catch (e) {}
  try {
    sjrn_params = {
      version: '5',
      auto_url: window.location.href,
      auto_ccid: sjrn_ccid(),
      auto_ga: sjrn_ga(),
      e_eml: localStorage.getItem('sjrn_e_eml'),
      ...sjrn_heml(),
      ws: window.innerWidth + 'x' + window.innerHeight,
      tz: sjrn_tz(),
    };
    dclid = sjrn_dclid();
    if (dclid) {
      sjrn_params.dclid = dclid;
    }
    sj_wh_token = sjrn_wh_token();
    if (sj_wh_token) {
      sjrn_params.wh_token = sj_wh_token;
    }
    sjrnclid = sjrn_clid();
    if (sjrnclid) {
      sjrn_params.sjrnclid = sjrnclid;
    }
    sjrn_click_campaign_id = sjrn_click_campaign_id();
    if (sjrn_click_campaign_id) {
      sjrn_params.sjrn_click_campaign_id = sjrn_click_campaign_id;
    }
    try {
      sjrn_params.n = 'tf:' + sjrn_ft();
    } catch (e) {}
  } catch (e) {
    sjrn_params = {};
  }
}
sjrn_run();
try {
  let sjrn_url_regex = new RegExp(
    atob(
      'd2luZHN1cmZlcmNycy4qKD0xNjM4Nnw9MTQ0ODR8PTE0NDgxKXx2aWxsYW1vbnRhbmEuY29tfHZidHNyZXN2Lnx2aWxsYXNieXRoZXNlYXJlc29ydHxob3RlbC1tYXNzZW5hfEJlc3QtV2VzdGVybi1QbHVzLUhvdGVsLU1hc3NlbmEtTmljZXx0aGVhbWVzd2VsbGhvdGVsfC1TcGEtQ2hhLUFtLVBldGNoYWJ1cml8dGhlZmlmdGhhdmVudWVob3RlbHxtZW93d29sZi58ZGVsbGFnb3Jlc29ydC4='
    )
  );
  if (window.location.href.match(sjrn_url_regex)) {
    function sjrn_wfa(selector) {
      return new Promise((resolve, reject) => {
        const observer = new MutationObserver((mutations, obs) => {
          const iframe = document.querySelector(selector);
          if (iframe) {
            obs.disconnect();
            resolve(iframe);
          }
        });

        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      });
    }

    async function sjrn_pi() {
      try {
        const iframe = await sjrn_wfa(
          'iframe[src*="https://static.sojern.com/cip"]'
        );
        const url = JSON.parse(JSON.stringify(iframe.src));
        const pixel_details = sjrn_su(url);

        if (pixel_details.type) {
          iframe.src = '';
          const all_params = url.split('?')[1].split('&');

          await new Promise((resolve, reject) => {
            sjrn_lc(
              'https://static.sojern.com/utils/create_params_async.js',
                          );
          });

          const params = await sjrn_create_params(all_params);
          if (pixel_details.type == 'c') {
            sjrn_fc(pixel_details.pixel_id, params);
          } else {
            sjrn_fs(pixel_details.pixel_id, params);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    function sjrn_fs(pixel_id, params) {
      var cid = [];
      var paramsArr = [];
      var cidParams = [];
      var pl = document.createElement('script');
      var defaultParams = {};
      for (key in defaultParams) {
        params[key] = defaultParams[key];
      }
      for (key in cidParams) {
        cid.push(params[cidParams[key]]);
      }
      params.cid = cid.join('|');
      for (key in params) {
        paramsArr.push(key + '=' + encodeURIComponent(params[key]));
      }
      pl.type = 'text/javascript';
      pl.async = true;
      pl.src =
        'https://beacon.sojern.com/pixel/p/' +
        pixel_id +
        '?f_v=v6_js&p_v=2&' +
        paramsArr.join('&');
      if (checkAndFireUrl(pl.src)) {
        (
          document.getElementsByTagName('head')[0] ||
          document.getElementsByTagName('body')[0]
        ).appendChild(pl);
      }
    }

    function sjrn_fc(pixel_id, params) {
      params.et =
        {
          HOME_PAGE: null,
          SEARCH: 'hs',
          PRODUCT: 'hpr',
          SHOPPING_CART: 'hcart',
          CONVERSION: 'hc',
          TRACKING: null,
        }[params.pt] || '';
      var paramsArr = [];
      for (key in params) {
        paramsArr.push(key + '=' + encodeURIComponent(params[key]));
      }

      var pl = document.createElement('script');
      pl.type = 'text/javascript';
      pl.async = true;
      pl.src =
        'https://beacon.sojern.com/pixel/cp/' +
        pixel_id +
        '?f_v=cp_v3_js&p_v=4&' +
        paramsArr.join('&');
      if (checkAndFireUrl(pl.src)) {
        (
          document.getElementsByTagName('head')[0] ||
          document.getElementsByTagName('body')[0]
        ).appendChild(pl);
      }
    }

    function sjrn_su(url) {
      let pixel_id = '';
      let type = '';
      if (url.includes('static.sojern.com/cip/c/')) {
        pixel_id = url.split('static.sojern.com/cip/c/')[1].split('.')[0];
        type = 'c';
      } else if (url.includes('static.sojern.com/cip/w/s')) {
        pixel_id = url.split('id=')[1].split('&')[0];
        type = 's';
      } else if (url.includes('static.sojern.com/cip/a/49304.html')) {
        pixel_id = url.split('id=')[1].split('&')[0];
        if (
          pixel_id == '207646' &&
          url.split('vp=') &&
          url.split('vp=')[1].split('&')[0] == 'undefined'
        ) {
          pixel_id = '207645';
        }
        type = 's';
      }
      return { type: type, pixel_id: pixel_id };
    }

    function sjrn_lc(url, callback) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      script.onload = callback;

      (
        document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]
      ).appendChild(script);
    }

    function sjrn_sue(url) {
      const expiryTime = Date.now() + 30000;
      const urlData = sjrn_gu();
      urlData[url] = expiryTime;
      localStorage.setItem('sjrn_url_data', JSON.stringify(urlData));
    }

    function sjrn_gu() {
      const data = localStorage.getItem('sjrn_url_data');
      return data ? JSON.parse(data) : {};
    }

    function checkAndFireUrl(url) {
      const urlData = sjrn_gu();
      sjrn_ceu();
      if (!urlData[url] || Date.now() > urlData[url]) {
        sjrn_sue(url);
        return true;
      } else {
        return false;
      }
    }

    function sjrn_ceu() {
      const urlData = sjrn_gu();
      const currentTime = Date.now();
      for (const url in urlData) {
        if (urlData[url] < currentTime) {
          delete urlData[url];
        }
      }
      localStorage.setItem('sjrn_url_data', JSON.stringify(urlData));
    }

    sjrn_pi();
  }
} catch (e) {}
