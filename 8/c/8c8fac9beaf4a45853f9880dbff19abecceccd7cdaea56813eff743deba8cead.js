/**
 * @package Adman System
 * @author  DSerov <dserov@gmail.com>
 * @version 0.0.4
 *
 *
 * Создает куки: __ref_sub_id, __device_info, __page_meta
 *
 * История версий:
 * 0.0.1 - 2022-02-21 Начнем, пожалуй
 * 0.0.2 - 2022-05-18 Добавлены билиотеки и функции, для автономной работы инклюда
 */

/**
 * Функции доступные в любом из модулей
 * 
 * @package Adman System
 * @author  Fred Melnichuk <fredeveloper@gmail.com>
 * @author  Sergey Gorban <serg.ck.ua@gmail.com>ypeof define&&define.amd?defintion(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@lnctioe.existy=r,e.isFunction=n,e.each=o,e.eachKey=i,e.defaults=a,e.toArray=s,e.last=u,e.isTag=c,e.isScript=l,e.isStyle=p}])});
/*!
  * $script.eof module!="undefinednload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=h?n+(n.indexOf("?")===-1?"?":"&")+h:n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("u={},a={},f={},l={},c,h;return v.gtion(e,ton(e){uion(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),v},v.done=function(e){v([null],e)},v})


/**
 * Функции доступные в любом из модулей
 * 
 * @package Adman System
 * @author  Fred Melnichuk <fredeveloper@gmail.com>
 * @author  Sergey Gorban <serg.ck.ua@gmail.com>
 * @author  DSerov <dserov@gmail.com>
 * @version 0.1.35
 */

/**
 * Разбивает query-строку url в объект. Возвращает либо значение конкретного параметра, либо объект со всеми параметрами.
 * Внимание! Не поддерживает массивы в url!
 *
 * @param url - url для парсинга. Если не задан, то берется location.href
 * @param name - если задано, то возвращает его значение, если не задано, то возвращается объект со всеми параметрами
 * @param decode - если true, то строка декодируется, иначе - возвращается, как есть
 * @return {{}}
 */
function getUrlParameters(url, name, decode) {
  let search = location.search.substr(1);
  if (url) {
    if (url.indexOf('?') === -1) {
      search = '';
    } else {
      search = url.substr(url.indexOf('?') + 1);
    }
  }

  const queryParams = search.split('&').reduce(function(obj, keyVal) {
    if (keyVal === '') {
      return {};
    }
    let value = keyVal.split('=');
    if (value[1] === undefined) {
      value[1] = '';
    }
    obj[value[0]] = decode ? decodeURIComponent(value[1].replace(/\+/g, ' ')) : value[1];
    return obj;
  }, {});

  return name ? queryParams[name] : queryParams;
}

//--- установка куков
function setAdmanCookie(name, value, options)
{
  //--- Защита от ошибки 400 (переполнение кук)
  if (document.cookie.length > 8000) {
    debug_log('Cookie error, name: ' + name);
    return;
  }

  options = Object.assign({
    SameSite : 'Lax',
  }, options || {});

  let expires = options.expires;

  if (typeof expires == "number" && expires)
  {
    let d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }

  if (expires && expires.toUTCString)
    options.expires = expires.toUTCString();

  if (options.domain) {
    options.domain = options.domain.replace(/^www\./i, '');
  }

  value = encodeURIComponent(value);

  let updatedCookie = name + "=" + value;

  for (let propName in options)
  {
    updatedCookie += "; " + propName;
    let propValue = options[propName];

    if (propValue !== true)
      updatedCookie += "=" + propValue;
  }

  document.cookie = updatedCookie;
}

//--- чтение куков
function getAdmanCookie(name)
{
  var result = 0;
  
  try {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    
    if (matches)
      result = decodeURIComponent(matches[1]);
  } catch (e){}
  
  return result;
} 

//--- чтение куков
function getAdmanCookieNullDefault(name)
{
	var result = null;
	
	try {
		var matches = document.cookie.match(new RegExp(
				"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		
		if (matches)
			result = decodeURIComponent(matches[1]);
	} catch (e){}
	
	return result;
} 

//--- удаление куков
function clearAdmanCookie(name)
{
	setAdmanCookie(name, '', {
		expires : -1,
		path : '/',
		domain : location.hostname
	});
}

// удаление кук по регулярном�es[i].trim();
    if (cookie) {
      let cookieName = cookie.split('=')[0];
      if (cookieName && regexPattern.test(cookieName)) {
        clearAdmanCookie(cookieName);
      }
    }
  }
}

//--- парсит ссылку и возвращает domain
function isEqualDomains(domain1, domain2)
{
  //console.debug('getDomainFromURL('+domain1+') == getDomainFromURL('+domain2+') : '+getDomainFromURL(domain1)+' == '= '';
  
  try{
    if (url.match(/(http[s]*:)*\/\//) == null)
      url = '//'+url;
  }catch(e){}
  
  try{
    host_parser.href = url;
    result = host_parser.hostname.replace(/^www./, '').toLowerCase();
  }catch(e){}
  
  return result;
}

//--- возвращает URL текущей страницы
function prepareUrl(url){

  //- автоплейные штуки подчищаем
  url = url.replace(/[&]*play=true/ig, '');

  //- в конце разные символы технические подчищаем
  url = url.replace(/[\/?#&]+$/, '');

  //- все якоря
  url = url.replace(/#.*/, '');

  //- в конце убираем слеш
  url = url.replace(/\/$/, '');

  return url;
}	

//--- возвращает ссылку в полном формате 
function prepareUrlToFull(url)
{
	url = new URL(url, window.location.href);
	url = url.href;
	
	return prepareUrl(url);
}

//--- дебаг режим
function is_debug_mode(){var e=!1;try{e="1"==getAdmanCookie("_debug")||"1"==getAdmanCookie("d")||window.location.href.indexOf("/ai-tst/")!=-1||'9000000000'=='9000000000'}catch(e){}return e}
function is_debug_mode_extended(){var e=!1;try{e="1"==getAdmanCookie("_debug_extended")||"1"==getAdmanCookie("de")}catch(e){}return e}
if (typeof debug_log !== 'function') {
  if (is_debug_mode_extended()) {
    // add log interface
    let button_id = 'btn-log-id';
    let div_id = 'div-log-id';
    let cmd_id = 'cmd-id';

    if (!document.getElementById(div_id)) {
      document.body.insertAdjacentHTML('afterbegin', '<div id="' + div_id + '" style="height: calc(100vh - 27px); display: none; overflow: scroll;"></div>');
    }

    if (!document.getElementById(button_id)) {
      document.body.insertAdjacentHTML('afterbegin', '<button id="' + button_id + '" style="font-size: 20px;">show log</button>');
      document.getElementById(button_id).addEventListener('click', function () {
        let div = document.getElementById(div_id);
        if (div.style.display === 'none') {
          div.style.display = 'block';
        } else {
          div.style.display = 'none';
        }
      })
    }

    if (!document.getElementById(cmd_id)) {
      document.body.insertAdjacentHTML('afterbegin', '<button id="' + cmd_id + '" style="font-size: 20px;">Run command</button>');
      document.getElementById(cmd_id).addEventListener('click', function () {
        let cmd = prompt();
        debug_log('cmd: ' + cmd);
        let result;
        try {
          result = eval(cmd);
        } catch (e) {
          result = e;
        }
        debug_log(result);
        alert(result);
      });
    }

    debug_log = function (e) {
      try {
        let this_line = thisLine();
        document.getElementById(div_id).insertAdjacentHTML('afterbegin', `<pre style="white-space:pre-wrap;font-size:20px;
          border-bottom:2px solid black;"><span style="color:#009900;">${this_line}</span><br>${JSON.stringify(e, null, 2)}</pre>`);
        console.debug('%c %s', 'color:#009900;', this_line, e);
      } catch (e) {}
    }
  } else {
    debug_log = function (e, prefix) {
      try {
        if (!is_debug_mode()) {
          return;
        }
        const consolePrepend = function(prefix) {
          const CLASSIC_LOG_PATTERN = /(edge|xbox|msie|trident)/i;
          if (navigator && navigaor.userAgent)) {
            // browsers with no console log styling cap const consoleStyle = 'color: white; background-color: #00ACC1; padding:1px 3px; border-radius: 3px';
        prefix = (prefix || '');
        if (typeof e === 'string') {
          console.log(`${consolePrepend(prefix)} %s\n   %c %s`, consoleStyle, 'color:#009900', thisLine(), 'font-weight:700', e);
        } else {
          console.log(`${consolePrepend(prefix)} %s\n   %c %o`, consoleStyle, 'color:#009900', thisLine(), 'font-weight:700', e);
        }
      } catch (e) {}
    };
  }
}

String.prototype.stripSlashes=function(){return this.replace(/\\(.)/mg, "$1")};

// Current Script
document.currentScript = document.currentScript || (function() {
  const scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1];
})();

function thisLine() {
  try {
    throw new Error();
  } catch (e) {
    let line = e.stack.split("\n")[3];
    if (typeof line === 'string') {
      line = line.trim();
    }
    return line;
  }
}

/**
 * Проверка, стрелять ли на объекте, в зависимости от классов форса и игнора.
 * Используется в попандере, мастерстишеле и постишеле.
 * true - можно стрелять (форс класс приоритетнее игнора)
 *
 * @param node
 * @param force_class_list строка значений, разделенных пробелами
 * @param ignore_class_list строка значений, разделенных пробелами
 * @return {boolean}
 */
function checkForceIgnoreClassForNode(node, force_class_list, ignore_class_list) {
  try{
    //--- если нет форс класса у самого елемента или его предков (родителей)
    if (force_class_list.length > 0 && isParentsContainsClass(node, force_class_list)) {
      return true;
    }

    if (ignore_class_�) - стреляем
    return !isParentsContainsClass(node, ignore_class_list);
  }catch(e){}

  // при ошибке вернем false
  return false;
}

/**
 * Проверка, что узел, или его родитель содержат хотя бы один из классов из списка классов,
 * представляющих из себя строку значений, разделенных пробелами
 *
 * @param node
 * @param class_list
 * @return {boolean}
 */
function isParentsContainsClass(node, class_list)
{
  if (!node || !class_list) {
    debug_log({
      title: 'isParentsContainsClass error!',
      node: node,
      class_list: class_list
    });

    return false;
  }
  else {
    let classes = class_list.split(' ').filter(class_name => class_name.length > 0 && node.closest('.' + class_name));
    return classes.length > 0;
  }
}

/**
 * Превращает последовательность вызовов некоторой функции в один-единственный вызов
 *
 * @param func
 * @param timeout
 * @return {Function}
 */
function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

//--- проверка находится ли указанный сайт в реферных доменах
function in_referrer_websites(site, data, window_location_href)
{
	if (window_location_href.length == 0)
		window_location_href = window.location.href;
	
	var result = false;
	var current_domain = getDomainFromURL(window_location_href);
	
	site = getDomainFromURL(site);
	
	if (site.length == 0)
		return false;
	
	try{
		
		for (var i in data)
		{
			if (data[i].source_domains.indexOf(current_domain) == -1)
				continue;
			
			if (data[i].referrer_domains.indexOf(site) !== -1)
			{
				result = true;
				break;
			}
		}
		
	}catch(e){}
	
	return result;			
}

//--- функция подставляет директиву эдблока в ссылку, в случае, если эдблок включен
function adblockUrlWrapper(url)
{
	if (isAdblock())
		url = url.replace(/\&d\=0/, '&d=1');
	
	return url;		
}

//--- детектор эдблок
function isAdblock()
{
  if (window.adblock_detected == undefined)
  {
    var adblock_detected = false;
    
    try {
      var testDomEl = document.createElement('iframe'),
          randomNum = Math.floor(Math.random() * (10000 - 123 + 1)) + 123,
          protocol = window.location.protocol,
          id = 'adsbox_ex_' + randomNum;

      testDomEl.setAttribute('height', "1px");
      testDomEl.setAttribute('width', "1px");
      testDomEl.setAttribute('id', id);
      testDomEl.setAttribute('class', 'adsBox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links banner ad-footer ad ads');
      testDomEl.setAttribute('style', "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; box-sizing: content-box !important; border-width: 0px !important;");

      var testScript = document.createElement('script');
      testScript.src = protocol + "//ads.exoclick.com/ads.js";

      /*
      testScript.onerror = function () {
        adblock_detected = true;
      };
      */

      document.body.appendChild(testDomEl);
      document.head.appendChild(testScript);

      if (testDomEl.style.display === "none" || testDomEl.style.display === "hidden" || testDomEl.style.visibility === "hidden" || testDomEl.offsetParent === null || testDomEl.offsetHeight === 0 || testDomEl.offsetLeft === 0 || testDomEl.offsetTop === 0 || testDomEl.offsetWidth === 0 || testDomEl.clientHei = true;
      }

      /*
      try {
        console.log('------------');
        console.log('timeout = ', timeout);
        console.log('testDomEl.style.display = ', testDomEl.style.display);
        console.log('testDomEl.style.visibility = ', testDomEl.style.visibility);
        console.log('testDomEl.offsetParent = ', testDomEl.offsetParent);
        console.log('testDomEl.offsetHeight = ', testDomEl.offsetHeight);
        console.log('testDomEl.offsetLeft = ', testDomEl.offsetLeft);
        console.log('testDomEl.offsetTop = ', testDomEl.offsetTop);
        console.log('testDomEl.offsetWidth = ', testDomEl.offsetWidth);
        console.log('testDomEl.clientHeight = ', testDomEl.clientHeight);
        console.log('testDomEl.clientWidth = ', testDomEl.clientWidth);
        console.log('------------');
      }catch (c){}
      */   document.head.removeChild(testScript);

      //--- сохраняем для других
      window.adblock_detected = adblock_detected;

      /*
      try {
        console.log('adblock_detected timeout '+timeout+' = ', adblock_detected);
      }catch (c){}
      */
    }catch (c){}
  }

  return window.adblock_detected ? true : false;
}

// пересечение массивов
function intersectArrays(array1, array2) {
  return array1.filter(function (item) {
    return item && array2.indexOf(item) > -1;
  });
}

// referral-detector-class
(function (window, undefined) {
  "use strict";
  var RefDetector = function (identy, cookie_caption, referrer_capped) {
    if (!(this instanceof RefDetector)) {
      return new RefDetector(identy, cookie_caption, referrer_capped);
    }

    this.clearPageCounterCookie = function () {
      // PageCounter
      clearAdmanCookie('__ctr_' + this.identy + '_pgs'); // счетчики страниц
      clearAdmanCookie('__ctr_' + this.identy + '_mrk'); // счетчик кликов
      clearAdmanCookie('__ctr_' + this.identy + '_mrk_shifted'); // счетчик кликов
      clearAdmanCookie(this.identy + '_nc'); // запрет на подсчет страниц и кликов

      // PageClickCounter
      clearAdmanCookie('__ctrp_'+this.identy+'_page_clicked');
      clearAdmanCookie('__ctrp_'+this.identy+'_pages_potential');
    };

    this.set_params = function (is_desktop, device_type) {
      this.is_desktop = is_desktop;
      this.device_type = device_type;
    };

    this.check_by_cookie = function (referral_data) {
      return getAdmanCookie(this.cookie_key) != null &&
        getAdmanCookie(this.cookie_key) != 0 &&
        (
          referral_data.referral_key == getAdmanCookie(this.cookie_key) ||
          this.in_referrer_domains(getAdmanCookie(this.cookie_key), referral_data.referral_domains_data, this.window_location_href)
        )
    };

    this.check_by_url = function (referral_data) {
      //--- ищем настройку для текущего сайта
      var ref_dom_data = this.get_ref_data_for_current_domain(referral_data.referral_domains_data);
      var count_from_list_only = 0;
      if (ref_dom_data !== null) {
        count_from_list_only = ref_dom_data.count_from_list_only;
      }

      return this.referrer_site.length > 0 &&
        referral_data.referral_key != '' &&
        this.window_location_href.indexOf(referral_data.referral_key) !== -1 &&
        (
          count_from_list_only === 0
          ||
          ref_dom_data.default_domains.indexOf(this.referrer_site) !== -1
        );
    };

    this.check_by_site = function (referral_data) {
      return this.referrer_site.length > 0 && this.in_referrer_domains(this.referrer_site, referral_data.referral_domains_data);
    };

    //--- проверка находится ли указанный сайт в реферных доменах
    this.in_referrer_domains = function (site, data) {
      var result = false;

      if (site.length === 0)
        return false;

      try{
        for (var i in data)
        {
          if (data[i].source_domains.indexOf(this.current_domain) === -1) {
            continue;
          }

          if(data[i].referral_websites_use_defaults) {
            if (data[i].default_domains.indexOf(site) !== -1)
            {
              result = true;
              break;
            }
          } else {
            if (data[i].referrer_domains.indexOf(site) !== -1)
            {
              result = true;
              break;
            }
          }
        }
      }catch(e){}
      return result;
    };

    //--- проверка находится ли указанный сайт в дефолтном списке
    this.get_ref_data_for_current_domain = function (data) {
      var result = null;

      try{

        for (var i in data) {
          if (data[i].source_domains.indexOf(this.current_domain) !== -1) {
            result = data[i];
            break;
          }
        }

      }catch(e){}

      return result;
    };

    this.save_cookie = function (referral_key) {
      //--- сохраняем результат если его нет
      var cookie_value = getAdmanCookieNullDefault(this.cookie_key);
      if (cookie_value === null || cookie_value.length == 0) {
        if (this.referrer_site && ! (referral_key != '' && this.window_location_href.indexOf(referral_key) !== -1)) {
          setAdmanCookie(this.cookie_key, this.referrer_site, {
            expires : this.referrer_capped,
            path : '/',
            domain : location.hostname
          });
        }
        else {
          setAdmanCookie(this.cookie_key, referral_key, {
            expires : this.referrer_capped,
            path : '/',
            domain : location.hostname
          });
        }
      }
    };

    this.check_reset_clicks_counter = function() {
      let referrer_site = getDomainFromURL(document.referrer);
      if ((referrer_site != '' && referrer_site != this.current_domain)) {
        //--- должен совпадать с counter_identy в counter (счетчик посещенных страниц)
        this.clearPageCounterCookie();
      }
    };

    this.apply_one_key = function (VR_PARAMS_VR, key, referral_data) {
        VR_PARAMS_VR[key.replace('VAR_', 'VR_').replace('_VAR', '_VR')] = referral_data[key];
    };

    this.check_referral = function (VR_PARAMS_VR, VR_REFERRALS_PARAMS_VR) {
      for (var i = 0; i < VR_REFERRALS_PARAMS_VR.length; i++) {
        try{
          var referral_data = VR_REFERRALS_PARAMS_VR[i];
          var referrer_applied_by_cookie = false, referrer_applied_by_url = false, referrer_applied_by_site = false;
          if (
            (referrer_applied_by_cookie = this.check_by_cookie(referral_data))
            ||
            (referrer_applied_by_url = this.check_by_url(referral_data))
            ||
            (referrer_applied_by_site = this.check_by_site(referral_data))
          ) {
            //--- проверяем, чтоб сайт совпадал с разрешенными сайтами для этого реферала
            if (referral_data.referral_sites.indexOf(this.current_domain) == -1) {
              continue;
            }

            //--- проверяем, если сайт разделен чтобы версия сайта совпадала с девайсом
            else {
              if (referral_data.referral_sites_version[this.current_domain] && referral_data.referral_sites_version[this.current_domain] !== 'all') {
                if (
                  (this.ignore_site_version_check_cookie || !getAdmanCookie('__force_sv'))
                  &&
                  (
                    (referral_data.referral_sites_version[this.current_domain] == 'desktop' && !this.is_desktop) ||
                    (referral_data.referral_sites_version[this.current_domain] == 'mobile' && this.is_desktop)
                  )
                )
                {
                  continue;
                }
              }
            }

            //--- проверяем device detect
            if (referral_data.enable_mobile !== undefined && referral_data.enable_desktop !== undefined && referral_data.enable_tablet !== undefined)
            {
              //--- если все девайсы разрешены - пропускаем проверку
              if (!(referral_data.enable_mobile == '1' && referral_data.enable_desktop == '1' && referral_data.enable_tablet == '1')) {
                if (
                  (this.device_type == 'desktop' && referral_data.enable_desktop != '1') ||
                  (this.device_type == 'mobile' && referral_data.enable_mobile != '1') ||
                  (this.device_type == 'tablet' && referral_data.enable_tablet != '1')
                )
                {
                  debug_log(this.cookie_caption + ', REF: '+referral_data.referral_key+' decline by device policy. ('+device_type+')');
                  continue;
                }
              }
            }

            //--- проверка на активность реферала
            if (referral_data.referral_enabled == 1) {
              for (var key in referral_data)
              {
                try {
                  if (referral_data.hasOwnProperty(key)) {
                    this.apply_one_key(VR_PARAMS_VR, key, referral_data);

                    // update capped
                    if (key.substr(-11) === '_CAPPED_VAR' && !isNaN(parseInt(referral_data[key]))) {
                      this.referrer_capped = parseInt(referral_data[key]);
                    }
                  }
                } catch (e) {}
              }
            }
            else {
              this.referrer_enabled = false;
            }

            //--- сохраняем результат если его нет
            this.save_cookie(referral_data.referral_key);

            if (Boolean(referral_data.reset_clicks_counter) === true) {
              this.check_reset_clicks_counter();
            }

            this.referrer_applied = true;

            debug_log({
              title: this.cookie_caption + ' выбран реферал',
              by: {
                cookie: referrer_applied_by_cookie,
                url: referrer_applied_by_url,
                site: referrer_applied_by_site
              },
              data: referral_data
            }, this.identy.toUpperCase());

            break;
          }
        }catch(e){}
      }

      debug_log({
        title: this.cookie_caption + ' результат определения реферала',
        referrer_applied: this.referrer_applied,
        final_data: VR_PARAMS_VR
      });
    };

    this.readSystemCookie = function() {
      //--- используем сохраненные данные системным инклудом
      try {
        if (getAdmanCookie('_ref_main') == 1 && md5(prepareUrl(window.location.href)) != getAdmanCookie('_ref_main-current_href_md5'))
        {
          this.window_location_href = getAdmanCookie('_ref_main-current_href');
          this.referrer_site = getDomainFromURL(getAdmanCookie('_ref_main-referrer_site'));
        } else {
          if ((this.referrer_site = getDomainFromURL(this.referrer_site)).length > 0)
          {
            if (isEqualDomains(this.referrer_site, window.location.href))
              this.referrer_site = '';
          }
        }
      } catch (e) {}
    };

    // true, если если надо проигнорировать куку __force_sv (используется в попандере и преролле)
    this.setIgnoreSiteVersionCheckCookie = function(ignore_site_version_check_cookie) {
      this.ignore_site_version_check_cookie = ignore_site_version_check_cookie;
    };

    this.referrer_applied = false;
    this.referrer_enabled = true;
    this.identy = identy;
    this.cookie_key = '__ref-' + identy;
    this.cookie_caption = cookie_caption;
    this.referrer_capped = referrer_capped;
    this.is_desktop = true;
    this.device_type = 'desktop';
    this.referrer_site = document.referrer;
    this.window_location_href = window.location.href;
    this.readSystemCookie();
    this.current_domain = getDomainFromURL(this.window_location_href);
    this.ignore_site_version_check_cookie = true;

    return this;
  };
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = RefDetector;
    }
    exportse.amd) {
      define("ref-detector-js", [], function () {
        return RefDetector;
      })
    } else {
      window.RefDetector = RefDetector;
    }
  }
})(typeof window === "object" ? window : this);

// page-counter-class
(function (window, undefined) {
  "use strict";
  var PageCounter = function (identy, capp_seconds) {
    if (!(this instanceof PageCounter)) {
      return new PageCounter(identy, capp_seconds);
    }

    this.identy = identy;
    this.capp_seconds = capp_seconds;	  	      //- величина каппа
    this.clicks = ''; 						      //- цепочка разрешенных кликов
    this.fire_on_marked = false; 	      //- позволять стрелять на помеченных страницах

    //--- инициализация текущей страницы
    this.init = function() {
      try{
        let current_page_hashe;
        if (this.getInitiedPages().indexOf((current_page_hashe = this.getUrlHashe(this.getCurrentPage()))) === -1)
        {
          this.addInitiedPage(current_page_hashe);
        }
      }catch(e){}
    };

    //--- задает величину каппа
    this.setCappSeconds = function(seconds) {
      t- задает цепочку индексов страниц, на кicks_string) {
      this.clicks = clicks_string;
      return thiстояние просмотренных страниц до отмеченных страниц
      let value = '', val;

      if ((val = getAdmanCookie('__ctr_'+this.identy+'_mrk')) != 0 && val.length > 0)
        value = val;

      setAdmanCookie('__ctr_'+this.identy+'_pgs', value, {
        expires : this.capp_seconds,
        path : '/',
        domain : location.hostname
      });
      return this;
    };

    //--- возвращает index текущей страницы в
    this.getUrlIndex = function(url) {
      return this.getInitiedPages().indexOf(this.getUrlHashe(url))
    };

    //--- возвращает true, если можно выстрелить на текущей странице
    this.isAllowFireOnThisPage = function() {
      let allow_fire = true;

      //--- смотрим на директиву по кликам
      try{
        let clicks = this.clicks.replace(/\s/g,'').split(',');

        //--- если директива задана, следуем ей
        if (clicks.length)
        {
          //--- если есть разрешение выстрелить на текущей странице
          if (clicks.indexOf((this.getCurrentPageInd

      try{
        //--- запрещаем выстрел на помеченной странице
        if (this.fire_on_marked == false && this.isMarkedCurrentPage())
          allow_fire = false;
      }catch(e){}

      return allow_fire;
    };

    //--- возвращает true, если страница помечена
    this.isMarkedPage = function(url) {
      return this.getMarkedPages().indexOf(this.getUrlHashe(this.prepareUrl(url))) !== -1;
    };

    //--- возвращает true, если текущая страница помечена
    this.isMarkedCurrentPage = function() {
      return this.isMarkedPage(this.getCurrentPage());
    };

    //--- возвращает index текущей страницы в
    this.getCurrentPageIndex = function() {
      return this.getUrlIndex(this.getCurrentPage());
    };

    //--- возвращает URL текущей страницы
    this.getCurrentPage = function() {
      return this.prepareUrl(window.location.href);
    };

    //--- возвращает URL текущей страницы
    this.prepareUrl = function(url) {

      //- автоплейные штуки подчищаем
      url = url.replace(/[&]*play=true/, '');

      //- в конце разные символы технические подчищаем
      url = url.replace(/[\/?#&]+$/, '');

      //- все якоря
      url = url.replace(/#.*/, '');

      //- в конце убираем слеш
      url = url.replace(/\/$/, '');

      return url;
    };

    //--- возвращает хеш страницы
    this.getUrlHashe = function(url) {
      return md5(url);
    };

    //--- возвращает список отмеченных страниц
    this.getMarkedPages = function() {
      let pages = new Array(), data;

      try{
        if ((data = getAdmanCookie('__ctr_'+this.identy+'_mrk')).length > 0)
          pages = data.split(',');
      }catch(e){}

      return pages;
    };

    //--- возвращает список смещенных отмеченных страниц
    this.getMarkedPagesShifted = function(){
      let pages = new Array();

      try{
        pages = getAdmanCookie('__ctr_'+this.identy+'_mrk_shifted').split(',');
      }catch(e){}

      return pages;
    };

    //--- возвращает список посещенных страниц
    this.getInitiedPages = function() {
      let pages = new Array(), data;

      try{
        if ((data = getAdmanCookie('__ctr_'+this.identy+'_pgs')).length > 0)
          pages = data.split(',');
      }catch(e){}

      return pages;
    };

    //--- добавляет в стек инициализированную страницу
    this.markCurrentPage = function() {
      this.markPage(this.getUrlHashe(this.getCurrentPage()));
    };

    //--- добавляеттраницу
    this.markCurrentPageShifted = function(){�обавляет в стек инициализированную страницу
    thiключаем подсчет отмеченных страниц
      if (getAdmanCookie(this.identy+'_nc'))
        return this;

      let pages = this.getMarkedPages(),
          last_page = Math.max.apply(Math, this.clicks.replace(/\s/g,'').split(','));

      if (pages.indexOf(hash) == -1)
      {
        pages.push(hash);

        setAdmanCookie('__ctr_'+this.identy+'_mrk', pages.join(','), {
          expires : this.capp_seconds,
          path : '/',
          domain : location.hostname
        });

        //--- отмечаем флаг остановки подсчета страниц
        if (pages.length >= last_page) {
          setAdmanCookie(this.identy+'_nc', 1, {
            expires : this.capp_seconds,
            path : '/',
            domain : location.hostname
          });
        }
      }

      return this;
    };

    //--- добавляет в стек инициализированную страницу
    this.markPageShifted = function(hash){
      let pages = this.getMarkedPagesShifted();
      pages.push(hash);

      setAdmanCookie('__ctr_'+this.identy+'_mrk_shifted', pages.join(','), {
        expires : this.capp_seconds,
        path : '/',
        domain : location.hostname
      });

      return this;
    };

    //--- добавляет в стек инициализированную страницу
    this.addInitiedPage = function(hash) {
      //--- когда спот отстрелял отключаем подсчет инициализированных страниц
      if (getAdmanCookie(this.identy+'_nc'))
        return this;

      let pages = this.getInitiedPages();
      pages.push(hash);

      setAdmanCookie('__ctr_'+this.identy+'_pgs', pages.join(','), {
        expires : this.capp_seconds,
        path : '/',
        domain : location.hostname
      });

      return this;
    };

    this.init();

    return this;
  };
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = PageCounter;
    }
    exports.PageCounter = PageCounter;
  } else {
    if (typeof define === 'function' && define.amd) {
      define("page-counter-js", [], function () {
        return PageCounter;
      })
    } else {
      window.PageCounter = PageCounter;
    }
  }
})(typeof window === "object" ? window : this);

// счетчик кликов внутри страницы
// page-click-counter-class
(function (window, undefined) {
  "use strict";
  var PageClickCounter = function (identy, capp_seconds) {
    if (!(this instanceof PageClickCounter)) {
      return new PageClickCounter(identy, capp_seconds);
    }

    this.identy = identy;
    this.capp_seconds = capp_seconds;	  //- величина каппа
    this.clicks = ''; 						      //- цепочка разрешенных кликов
    this.fire_on_marked = false; 	      //- позволять стрелять на помеченных страницах


    //--- инициализация текущей страницы
    this.init = function(identy){
      this.identy = identy;
    };

    //--- задает величину каппа
    this.setCappSeconds = function(seconds){
      this.capp_seconds = parseInt(seconds);
      return this;
    };

    //--- задает цепочку инде�можно кликать
    this.setClicks = function(clicks_string)   //--- добавляет в стек просмотренных страниц текщую страницу
    this.addPageToPotential = function(url){
      let full_url = prepareUrlToFull(url);
      let hash = this.getUrlHashe(full_url);

      if (full_url == prepareUrlToFull(window.location.href))
      {
        debug_log({
          title: this.identy+'. Не можем добавить в потенциальные, так как ссылка совпадает с текущей страницей.',
          url: full_url,
          hash: hash
        });

        return this;
      }

      debug_log({
        title: this.identy+'. Добавляем в потенциальные страницы.',
        url: full_url,
        hash: hash
      });

      let pages = this.getPotentialPages();

      if (pages.indexOf(hash) === -1)
      {
        pages.push(hash);

        pages = pages.slice(Math.max(pages.length - 64, 0));

        setAdmanCookie('__ctrp_'+this.identy+'_pages_potential', pages.join(','), {
          expires : this.capp_seconds,
          path : '/',
          domain : location.hostname
        });
      }

      return this;
    };

    //--- добавляет в стек кликнутых страниц текщую страницу
    this.addPageToClicked = function(url){
      let full_url = prepareUrlToFull(url);
      let hash = this.getUrlHashe(full_url);

      if (full_url == prepareUrlToFull(window.location.href))
      {
        debug_log({
          title: this.identy+'. Не можем добавить в кликнутые, так как ссылка совпадает с текущей страницей.',
          url: full_url,
          hash: hash
        });

        return this;
      }

      debug_log({
        title: this.identy+'. Добавляем в кликнутые страницы.',
        url: full_url,
        hash: hash
      });

      let pages = this.getClickedPages();

      if (pages.indexOf(hash) === -1)
      {
        pages.push(hash);

        pages = pages.slice(Math.max(pages.length - 64, 0));

        setAdmanCookie('__ctrp_'+this.identy+'_pages_clicked', pages.join(','), {
          expires : this.capp_seconds,
          path : '/',
          domain : location.hostname
        });
      }

      return this;
    };

    //--- удаляет из стека просмотренных страниц текщую страницу
    this.removePageFromPotential = funct     let hash = this.getUrlHashe(full_url);

      debug_log({
        title: this.identy+'. Удаляем из потен   });

      let pages = this.getPotentialPages();

      if (pages.indexOf(hash) !== -1)
      {
        pages[pages.indexOf(hash)] = '0';

        setAdmanCookie('__ctrp_'+this.identy+'_pages_potential', pages.join(','), {
          expires : this.capp_seconds,
          path : '/',
          domain : location.hostname
        });
      }

      return this;
    };

    //--- возвращает список посещенных страниц
    this.getPotentialPages = function(){
      let pages = new Array();

      try{
        pages = getAdmanCookie('__ctrp_'+this.identy+'_pages_potential').split(',');
      }catch(e){}

      return pages;
    };

    //--- возвращает список кликнутых страниц
    this.getClickedPages = function(){
      let pages = new Array();

      try{
        pages = getAdmanCookie('__ctrp_'+this.identy+'_pages_clicked').split(',');
      }catch(e){}

      return pages;
    };

    //--- возвращает хеш страницы
    this.getUrlHashe = function(url){
      return md5(url);
    };

    //--- возвращает URL текущей страницы
    this.getCurrentPage = function(){
      return prepareUrl(window.location.href);
    };

    //--- возвращает true, если страница помечена
    this.isPotentialPage = function(url){
      return -1 !== this.getPotentialPages().indexOf(
        this.getUrlHashe(
          prepareUrlToFull(url)
        )
      );
    };

    //--- возвращает true, если страница помечена как кликнута
    this.isClickedPage = function(url){
      return -1 !== this.getClickedPages().indexOf(
        this.getUrlHashe(
          prepareUrlToFull(url)
        )
      );
    };

    //--- возвращает список сделанных кликов
    this.getClickedIndexes = function(){
      let pages = new Array();

      try{
        pages = getAdmanCookie('__ctrp_'+this.identy+'_page_clicked').split(',');
      }catch(e){}

      return pages;
    };

    //--- добавляет в стек проделанных кликов +1
    this.addClickedIndex = function(){
      debug_log({
        title: this.identy+'. Добавляем +1 ClickedIndex.'
      });

      let indexes = this.getClickedIndexes();
      let current_index = this.getCurrentClickIndex();

      if (current_index <= 64)
      {
        indexes.push(current_index);

        setAdmanCookie('__ctrp_'+this.identy+'_page_clicked', indexes.join(','), {
          expires : this.capp_seconds,
          path : '/',
          domain : location.hostname
        });
      }

      return this;
    };

    //--- возвращает текущий индекс клика
    this.getCurrentClickIndex = function(){
      let indexes = this.getClickedIndexes();
      return parseInt((indexes.length ? indexes[indexes.length - 1] : 0)) + 1;
    };

    //--- возвращает true, если разрешено стрелять на указанный клик
    this.isClickActive = function(index){
      if (index == undefined)
        index = this.getCurrentClickIndex();

      let is_active = true;

      //--- смотрим на директиву по кликам
      try{
        let clicks = this.clicks.replace(/\s/g,'').split(',');

        //--- если директива задана, следуем ей
        if (clicks.length)
        {
          //--- если есть разрешение выстрелить на текущем клике
          if (clicks.indexOf((index).toString()) === -1)
            is_active = false;
        }
      }catch(e){}

      return is_active;
    };

    return this;
  };
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = PageClickCounter;
    }
    exports.PageClickCounter = PageClickCounter;
  } else {
    if (typeof define === 'function' && define.amd) {
      define("page-click-counter-js", [], function () {
        return PageClickCounter;
      })
    } else {
      window.PageClickCounter = PageClickCounter;
    }
  }
})(typeof window === "object" ? window : this);

function is_secure_protocol() {
  return window.location.protocol === 'https:';
}

function getIsDesktop() {
  // достанем из топинклюда
  if (ADMAN_INFO && ADMAN_INFO.device && ADMAN_INFO.device.is_mobile) {
    return !ADMAN_INFO.device.is_mobile;
  }

  // уже определена
  if (typeof is_desktop !== 'undefined') {
    return is_desktop;
  }

  // детектим самостоятельно
  window.is_desktop = true;
  try{
    let parser_result = UAParser();
    window.is_desktop = !(parser_result.device.type == 'mobile' || parser_result.device.type == 'tablet');
  }catch (e){}

  // запишем в топ-инклюд
  if (ADMAN_INFO.device) {
    ADMAN_INFO.device.is_mobile = !is_desktop;
  } else {
    ADMAN_INFO.device = {is_mobile: !is_desktop};
  }

  return is_desktop;
}

function getDeviceType() {
  // достанем из топинклюда
  if (ADMAN_INFO && ADMAN_INFO.device && ADMAN_INFO.device.type) {
    return ADMAN_INFO.device.type;
  }

  // уже определена
  if (typeof device_type !== 'undefined') {
    return device_type;
  }

  // детектим самостоятельно
  window.device_type = 'desktop';
  try{
    let parser_result = UAParser();
    if (parser_result.device.type) {
      if (parser_result.device.type == 'mobile') {
        window.device_type = 'mobile';
      } else if (parser_result.deow.device_type = 'tablet';
      }
    }
  }catch (e){}

  // запишем
  if (ADMAN_INFO.device) {
    ADMAN_INFO.device.type = window.device_type;
  } else {
    ADMAN_INFO.device = {type: window.device_type};
  }

  return window.device_type;
}

function getBrowserName() {
  // достанем из топинклюда
  if (ADMAN_INFO && ADMAN_INFO.device && ADMAN_INFO.device.browser) {
    return ADMAN_INFO.device.browser;
  }

  // уже определена
  if (typeof browser_name !== 'undefined') {
    return browser_name;
  }

  // детектим самостоятельно
  window.browser_name = 'other';
  try{
    let parser_result = UAParser();
   wser = parser_result.browser.name;

    //--- normalize browser name
    if (/Chrome/.test(parser_browser)) {
      window.browser_name = 'chrome';
    } else if (/Safari/.test(parser_browser)) {
      window.browser_name = 'safari';
    }
  }catch (e){}

  // запишем
  if (ADMAN_INFO.device) {
    ADMAN_INFO.device.browser = window.browser_name;
  } else {
    ADMAN_INFO.device = {browser: window.browser_name};
  }

  return window.browser_name;
}

/**
 * Функция по наименованию группы спотов и заданного устройства, находит нужное имя спота
 *
 * @param {Array} allSpots
 * @param {String} spotGroupName
 * @param {Boolean} needIsMobile
 * @return {*}
 */
function getSpotCodeBySpotGroupName(allSpots, spotGroupName, needIsMobile) {
  if (!spotGroupName) {
    // имя группы спота не задано
    return null;
  }

  if (!allSpots || allSpots.length === 0) {
    // список спотов пуст
    return null;
  }

  // распарсим текущее имя
  let parts;идное
    return null;
  }

  const desktopName = parts[1] + '-' + parts[3], mobileName = parts[1] + 'm-' + parts[3];

  // ищем по девайсу
  let name;
  if (allSpots.hasOwnProperty((name = (needIsMobile ? mobileName : desktopName)))) {
    // найден нужный
    return name;
  } else if (allSpots.hasOwnProperty((name = (needIsMobile ? desktopName : mobileName)))) {
    // найден соответствующий, но с другого девайса
    return name;
  }
  return null;
}

//--- Native Ajax
function ajax(option)
{
  if (typeof(option.url) == 'undefined') {
    try {
      option.url = location.href;
    } catch(e) {
      var ajaxLocation;
      ajaxLocation = document.createElement('a');
      ajaxLocation.href = '';
      option.url = ajaxLocation.href;
    }
  }
  if (typeof(option.type) == 'undefined') {
    option.type = 'GET';
  }
  if (typeof(option.data) == 'undefined') {
    option.data = '';
  } else {
    var data = '';
    for (var x in option.data) {
      if (data != '') {
        data += '&';
      }
      data += encodeURIComponent(x)+'='+encodeURIComponent(option.data[x]);
    };
    option.data = data;
  }
  if (typeof(option.statusCode) == 'undefined') {
    option.statusCode = {};
  }
  if (typeof(option.beforeSend) == 'undefined') {
    option.beforeSend = function () {};
  }
  if (typeof(option.success) == 'undefined') {
    option.success = function () {};
  }
  if (typeof(option.error) == 'undefined') {
    option.error = function () {};
  }
  if (typeof(option.complete) == 'undefined') {
    option.complete = function () {};
  }
  typeof(option.statusCode['404']);

  var xhr = null;

  if (window.XMLHttpRequest || window.ActiveXObject) {
    if (window.ActiveXObject) { try { xhr = new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) { xhr = new ActiveXObject('Microsoft.XMLHTTP'); } }
    else { xhr = new XMLHttpRequest(); }
  } else { try{console.debug('ajax error');}catch(e){} return null; }

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 1) {
      option.beforeSend();
    }
    if (xhr.readyState == 4) {
      option.complete(xhr, xhr.status);
      if (xhr.status >= 200 && xhr.status < 300) {
        option.success(xhr.responseText);
      } else {
        option.error(xhr.status);
        if (typeof(option.statusCode[xhr.status]) != 'undefined') {
          option.statusCode[xhr.status]();
        }
      }
    }
  };

  if (typeof(option.signal) !== 'undefined') {
    if (option.signal.aborted) {
      option.complete(xhr, xhr.status);
      option.error(xhr.status);
      if (typeof(option.statusCode[xhr.status]) !== 'undefined') {
        option.statusCode[xhr.status]();
      }
      return;
    } else {
      option.signal.addEventListener('abort', () => {
        xhr.abort();
      });
    }
  }

  if (option.type == 'POST') {
    xhr.open(option.type, option.url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send(option.data);
  } else {
    xhr.open(option.type, option.url+option.data, true);
    xhr.send(null);
  }
}

/**
 * AdmanAbortController
 */
(function (window, undefined) {
  "use strict";
  window.AdmanAbortController = function () {
    if (!(this instanceof AdmanAbortController)) {
      return new Adable: false
    });

    function abort(reason) {
      Object.defineProperty(signal, "reason", {
        writable: true
      });
      Object.defineProperty(signal, "aborted", {
        writable: true
      });
      signal.aborted = true;
      signal.reason = reason;
      Object.defineProperty(signal, "reason", {
        writable: false
      });
      Object.defineProperty(signal, "aborted", {
        writable: false
      });

      signal.dispatchEvent(new Event(EVENT_NAME));
      try {(typeof signal.onabort === 'function') ? signal.onabort(reason) : null} catch (e) {}
    }

    return {
      signal: signal,
      abort: abort,
    }
  };
})(typeof window === "object" ? window : this);

/**
 * Централизированная система детекта реф сайта
 */
(function (window, undefined) {
  "use strict";
  window.AdmanSubIdDetector = function () {
    if (!(this instanceof AdmanSubIdDetector)) {
      return new AdmanSubIdDetector();
    }

    function prepareReferrerCode(code) {
      return code.replace(/[^\w\d\-\(\)@\.\%\*]+/i, '');
    }

    function detectSubId() {
      // рассчитываем значения для теку� window.location.href;
      let _referrer_site = getDomainFromURL(document.referrer);
      if (_referrer_site.length === 0 || (_referrer_site === getDomainFromURL(_current_href))) {
        // переход по сайту (related) либо заход из закладок
        // возвращаем старую информацию
        return getSubId();
      }

      // поиск реферала по ссылке
      // кастомная кука имеет приоритет
      let _custom_href = getAdmanCookieNullDefault(SUB_ID.CUSTOM_REF_COOKIE);
      if (_custom_href) {
        _current_href = _custom_href;
      }
      const _sub_id_identifier_value = getUrlParameters(_current_href, sub_id_identifier, true);
      let _sub_id_source = (
        _sub_id_identifier_value
        && _sub_id_identifier_value !== ''
        &&
        (
          SUB_ID.COUNT_FROM_LIST_ONLY === false
          ||
          SUB_ID.DOMAINS.indexOf(_referrer_site) !== -1
        )
      ) ? _sub_id_identifier_value
        : NOREF;

      // поиск реферала по домену, только ЕСЛИ не определен рефер по ссылке
      let _sub_id_source_illegal_domain = '';
      if (_sub_id_source === NOREF && _referrer_site.length) {
        if (SUB_ID.DOMAINS.indexOf(_referrer_site) !== -1) {
          _sub_id_source = _referrer_site;
        } else {
          // будем использовать для ограничения в кампаниях
          _sub_id_source_illegal_domain = _referrer_site;
        }
      }

      //--- подчищаем реф-код
      _sub_id_source = pre�нился ли SUBID или реферальный сайт
      let _changeSubId = (sub_id_source !== _sub_id_source || sub_id_source_illegal_domain !== _sub_id_source_illegal_domain);
      if (
        _changeSubId ||
        referrer_site !== _referrer_site ||
        current_href !== _current_href
      ) {
        // определен новый sub_id!
        sub_id_source = _sub_id_source;
        sub_id_source_illegal_domain = _sub_id_source_illegal_domain;
        referrer_site = _referrer_site;
        current_href = _current_href;

        // сохраним новый sub_id
        updateSubIdCookie();

        // сохраним системные куки
        updateSystemCookie();

        if (_changeSubId) {
          fireChangeSubIdEvent(getSubId());
        }
      }

      return getSubId();
    }

    function updateSubIdCookie() {
      if ((SUB_ID.EXCLUSIONS[sub_id_source] === undefined || SUB_ID.EXCLUSIONS[sub_id_source] === '1')) {
        //--- сохраняем для дальнейшего использования реферальный код
        setAdmanCookie(SUBID_COOKIE_NAME, sub_id_source, {
          expires: SUB_ID.CAPPED,
          path: '/',
          domain: location.hostname
        });

        //--- сохраняем для дальнейшего использования реферальный код (ДЛЯ ОГРАНИЧЕНИЯ В КАМПАНИЯХ)
        if (sub_id_source_illegal_domain.length && sub_id_source_illegal_domain !== NOREF) {
          setAdmanCookie(ILLEGAL_SUBID_COOKIE_NAME, sub_id_source_illegal_domain, {
            expires: SUB_ID.CAPPED,
            path: '/',
            domain: location.hostname
          });
        } else {
          clearAdmanCookie(ILLEGAL_SUBID_COOKIE_NAME);
        }
      }
    }

    function getSubId() {
      return {
        // current_href: current_href,
        // referrer_site: referrer_site,
        sub_id_source: sub_id_source,
        sub_id_source_illegal_domain: sub_id_source_illegal_domain,
        // referral: (detected_by.length ? 'detected by ' + detected_by : 'NOT detected'),
      };
    }

    function updateSystemCookie() {
      setAdmanCookie('_ref_main-current_href', current_href, {
        expires: SUB_ID.CAPPED,
        path: '/',
        domain: location.hostname
      });

      setAdmanCookie('_ref_main-current_href_md5', md5(prepareUrl(current_href)), {
        expires: SUB_ID.CAPPED,
        path: '/',
        domain: location.hostname
      });

      // эта кука нужна обязательно, поскольку при переходе с https-сайта на сайт с http по умолчанию браузер не шлет заголовок REFERER
      // и получить сайт, откуда сделан переход из пхп не представляется возможным
      setAdmanCookie('_ref_main-referrer_site', referrer_site, {
        expires: SUB_ID.CAPPED,
        path: '/',
        domain: location.hostname
      });

      setAdmanCookie('_ref_main', 1, {
        expires: SUB_ID.CAPPED,
        path: '/',
        domain: location.hostname
      });

      debug_log({
        title: 'Централизированная система детекта рефов, обновление данных.',
        current_href: current_href,
        referrer_site: referrer_site,
      })
    }

    function fireChangeSubIdEvent(data) {
      const callbacks = callbackList.slice(0);
      callbacks.forEach((callback) => {
        callback(data);
      });
    }

    const NOREF = 'noref'; // 'noref'
    const SUBID_COOKIE_NAME = '__ref_sub_id'; // '__ref_sub_id' тут значение sub_id
    const ILLEGAL_SUBID_COOKIE_NAME = '__ref_sub_id_illegal'; // '__ref_sub_id_illegal' - используется для лимитов
    const sub_id_identifier = SUB_ID.IDENTIFIER ? SUB_ID.IDENTIFIER : SUB_ID.IDENTIFIER_IN_SITE;
    let current_href = ''; // полная ссылка страницы
    let referrer_site = ''; // реф.сайт
    let sub_id_source = NOREF;
    let sub_id_source_illegal_domain = '';
    const callbackList = [];

    // прочитаем куки
    sub_id_source = getAdmanCookieNullDefault(SUBID_COOKIE_NAME);
    if (sub_id_source === null) {
      sub_id_source = NOREF;
    }
    sub_id_source_illegal_domain = getAdmanCookieNullDefault(ILLEGAL_SUBID_COOKIE_NAME);
    if (sub_id_source_illegal_domain === null) {
      sub_id_source_illegal_domain = '';
    }
    referrer_site = getAdmanCookieNullDefault('_ref_main-referrer_site');
    if (referrer_site === null) {
      // нет сохраненых системных данных
      referrer_site = getDomainFromURL(document.referrer);
      current_href = window.location.href;
      if (referrer_site.length && (referrer_site === getDomainFromURL(current_href))) {
        referrer_site = '';
      }

      updateSystemCookie();
      updateSubIdCookie();
    }

    return {
      detect: detectSubId,
      addChangeSubIdEventListener: function (handler) {
        if (typeof handler !== 'function') {
          return;
        }
        const index = callbackList.indexOf(handler);
        if (index === -1) {
          callbackList.push(handler);
        }
      },
      removeChangeSubIdEventListener: function (handler) {
        const index = callbackList.indexOf(handler);
        if (index > -1) {
          callbackList.splice(index, 1);
        }
      },
    }
  };
})(typeof window === "object" ? window : this);

var SUB_ID = SUB_ID || {
  CAPPED: +'86400',
  IDENTIFIER: 'site_id',
  IDENTIFIER_IN_SITE: 'site_id',
  CUSTOM_REF_COOKIE: '',
  EXCLUSIONS: JSON.parse('[]'),
  DOMAINS: JSON.parse('["3vids.com","00192-pbweb.com","pentest-tools.com","assoass.com","coqnu.com","dinotube.com","ebonygalore.com","el-ladies.com","findtubes.com","forhertube.com","fucd.com","fuq.com","fuqpremium.com","gaymaletube.com","hdporzo.com","ixxx.com","lobstertube.com","lupoporno.com","maturetube.com","melonstube.com","porzo.com","qorno.com","sambaporno.com","stocking-tease.com","tgtube.com","tiava.com","toroporno.com","tubebdsm.com","tubegalore.com","tubemales.com","tubeporn.com","tubepornstars.com","tubeshemales.com","vrporzo.com","asiangalore.com","animegalore.com","homemadegalore.com","lesbiangalore.com","latingalore.com","analgalore.com","pornrox.com","pinflix.com","metaporn.com","gotporn.com","pornhd.com","cartoonpornvideos.com","ghettotube.com","porntv.com","lesbianpornvideos.com","vrxxx.com","002022-AlexZ.com","ipuss.tv","iwank.tv","tonicmovies.com","4porn.com","tastyblacks.com","pornspan.com","maturealbum.com","tubepleasure.com","bigtitszone.com","bestandfree.com","largehdtube.com","sweetshow.com","fapvid.com","rulertube.com","largepornfilms.com","bigboobsfilm.com","spicybigbutt.com","tubespin.tv","fapvidhd.com","titshits.com","spicytranny.com","jetboobs.com","grannycinema.com","afrosex.com","jizzex.com","goldpornfilms.com","hqhole.com","shemales-time.com","cooch.tv","hdsexdino.com","caramelbbw.com","hqbutt.com","ebonypulse.tv","spicytrannyhd.com","polarpornhd.com","dirtyhomeclips.com","fatmomtube.com","tubent.com","hometubeporn.com","newshemaletube.com","myretrotube.com","spicybigtits.com","freshpornclips.com","goldhdtube.com","sexpulse.tv","caramelmature.com","newmaturetube.com","tubepornfilm.com","newmatures.com","hqboobs.com","tube4ace.com","porn24.tv","maturezilla.com","fatgrannytube.com","severalmovies.com","tubexxxx.com","xmomsmovies.com","fattyvideos.com","sexmole.com","vivagals.com","tubesplash.com","tastymovie.com","tubezaur.com","infinitetube.com","1trannytube.com","mylovedtube.com","xgrannytube.com","maturepie.com","iliketubes.com","tubeadultmovies.com","neattube.com","tubecharm.com","tubevector.com","lordoftube.com","carameltube.com","ass-time.com","desiredtube.com","prehistorictube.com","my1tube.com","hqmaturetube.com","newbigtube.com","bangedtranny.com","hdpornochief.com","spicyplumpers.com","wankerlab.com","mymaturegranny.com","hqvintagetube.com","maturetubelust.com","erosexus.com","hotvoyeurtube.com","xgap.tv","kisspornmovies.com","thematureladies.com","sexo24.com","tubeporncity.com","hqbigboobs.com","charmingtranny.com","heavycuties.com","agedlust.com","grannyflash.com","trytits.com","cutiesover30.com","vataa.com","tubedessert.com","grandmammamovies.com","porngur.com","newcooltube.com","attractivetube.com","porntiki.com","sexwithmature.com","bonusvid.com","eroro.com","wildhole.com","jerkvilla.com","ripemom.com","tubeforwork.com","wifesfilmed.com","zztube.com","ardentmums.com","vipmaturetube.com","tuberr.com","tgirlsmovies.com","hqmaturemilf.com","ma-ture.com","1freetube.com","tubeshere.com","faptip.com","retrotubeclips.com","agedmaids.com","tubereserve.com","boobsa.com","bigtitsnow.com","melonsclips.com","jizzoid.com","grannyporn.tv","cumingtube.com","spectraltube.com","perpetualtube.com","sextubehere.com","hqmaturepussy.com","myboner.com","tsfap.com","hardpole.com","daily-bbw-porn.com","sex4pal.com","xdump.tv","deepmuff.com","tendermom.com","dickpal.com","largehole.com","stalemoms.com","nymphasmovies.com","touchmymelons.com","00973-Xdiver.com","hdpornfree.xxx","hdpornmax.com","hdpornmax.xxx","fuckhdtube.com","tophqporn.com","herexxxtube.com","herexxxtube.porn","hdsexmovies.xxx","hdxnxx.xxx","bestfreetube.xxx","redhdtube.xxx","pornxo.xxx","bestfreetube.porn","easyporn.xxx","hqtube.xxx","hqsextube.xxx","00214-TCJ.com","amieporn.com","asscj.com","aweporn.com","besterpornos.com","bestesexvideos.com","clipslujuriosos.com","culonudo.com","demiporn.com","ehporn.com","elitesexyvideos.com","epichardcore.net","excelenteporno.com","fgtube.com","gigantclips.com","gogomovs.com","grantubodesexo.com","hotknock.com","ihrepornos.com","itsass.com","jizz24.com","jizzez.net","jonnyxxx.com","just.porn","kostenlospornofilm.com","lepornochaud.com","marporno.com","neuerporno.com","nurxxx.mobi","nurxxx.net","ozeex.com","peneporno.com","pornbalcony.com","porndavid.com","porndeva.com","porneva.com","pornmia.com","pornobonito.com","pornoingenieux.com","pornokrol.com","pornorc.net","pornpoly.net","porntap.com","pornzoe.com","ruenu.com","rule34pornvids.com","sexlew.com","sexorc.net","sitedesex.com","sitopornoxxx.com","sunnyboobs.com","teatroporno.com","tiaporn.com","tollepornovideo.com","tollesextube.com","tomodachinpo.com","toppornoduro.com","topxxxpornvids.com","vastsextube.com","xecce.com","xxxcj.com","xxxjojo.com","001977-TCJ2.com","playmeporn.com","drivemeporn.com","queduporno.com","pornobombe.com","pornoculo.com","pornoamor.com","pornozentrum.com","pornoplek.com","pornoouf.com","002110-Oblekomorale.com","porn.biz","foxporns.com","tube3.com","dirtypornvids.com","bigporn.com","tubefree.com","ourhappyhardcore.com","freesexavenue.com","htube.com","002319-Pornsos.com","pornsos.com","qqqporn.com","xneon.com","00184-Nightshift.com","ibizababes.com","fantasticnudes.com","realitymadness.com","00181-Nudevista.com","nudevista.com","nudevista.at","nudevista.be","nudevista.com.pl","nudevista.es","nudevista.it","nudevista.jp","nudevista.nl","nudevista.com.br","nudevista.se","nudevista.tv","nudevista.tw","nudevista.net","002583-IvanIvanov.com","azfuck.com","xxxpapa.com","lesbify.com","goldtits.com","sos.xxx","sex-video.tv","her.porn","tubehall.com","maturehole.com","goldporn.xxx","xxxpill.com","pop.xxx","onlybestporn.com","hereporn.com","lezbomovies.com","pornyork.com","spicymature.com","wellporn.com","00193-Paradisenudes.com","paradisenudes.com","topless-babes.com","002352-Serhio.com","sexmotors.com","pornmotors.com","motorsxxx.com","tubexmotors.com","eromotors.com","0052-Fooxy.com","fooxy.com","bigtitsaction.com","teentubesearch.com","teensexwanted.com","teenpornisland.com","sexbloom.com","pornvideosdb.com","hdv.tv","0000-Other.com","theporndude.com","porn.com","porn247.info","100porn.info","theporndude.me","xxxynetwork.com","lasmejoreswebsporno.com","thebestfreepornsites.com","toppornsites.com","bestxxxsites.com","002748-Alex-likevklike.com","freeindianporn.pro","freelesbiansex.pro","darkporn.pro","russkoe-video.com","002737-kapa.com","xxnxcom.mobi","orntube.mobi","xxx-selfies.com","porn24.pro","fuckporn24x7.com","002836-alexz2.com","amamilf.com","youcanfaptothis.com","7mmtv.tv","xtits.com","x-videos.club","the-sexy-tube.com","pornitro.com","xxxvogue.net","amateurvoyeurforum.com","analdin.com","xnxxbest.pro","hellporno.net","hothomefuck.com","hellporno.com","vulvavision.com","pornhol.com","xporn.host","sex4porn.net","xbabe.com","xsexvideos.pro","lxax.com","pornvideo.rodeo","jetsex.pro","xcum.com","pornus.pro","hairyteencunt.com","its.porn","hdpussy.xxx","justnudepic.com","porncoin.pro","zedporn.com","alphaporno.com","porngem.com","www.tubewolf.com","cuteasiangirl.net","crocotube.com","hothdsex.xxx","babes34.pro","porn-video.name","teenpornm.com","xxxsuperporn.com","xxxpussysex.pro","hellmoms.com","gayxboy.pro","tubematik.com","yohapornvideos.com","nylonx.net","porntubez.com","analxxx.club","undernylon.com","erofus.com","japanese6.club","pornn.me","xvideosteenporn.com","teensxvideos.com","txxxa.com","porn2019.pro","sexu.pro","eachporn.com","porn0.me","tube-bunny.com","xvideostube.pro","youporntube.cc","lubed.webcam","eporn.pro","porntv.pro","myslut.pro","pornfilms.cc","telugupornvids.com","bhabhixvideos.com","malluporntube.com"]'),
  COUNT_FROM_LIST_ONLY: (parseInt('1', 10) === 1),
};

//--- объект, где будет вся инфа
if (typeof ADMAN_INFO === 'undefined') {
  var ADMAN_INFO = {spots: {}};
}
ADMAN_INFO.script_add_folder = '/2ff/';

//--- детектор реф и установка куки в соответствии с общими правилами детекта рефа,
try {
  // detect referal
  if (ADMAN_INFO.SubIdDetector === undefined) {
    ADMAN_INFO.SubIdDetector = new AdmanSubIdDetector();

    // reset behavior cookies
    ADMAN_INFO.SubIdDetector.addChangeSubIdEventListener(function(data) {
      // флаг, что поменялся реферал
      ADMAN_INFO.changedSubId = true;

      // счетчики
      clearAdmanCookiesByRegexName(/^__ctr_.+_closed$/);
      clearAdmanCookiesByRegexName(/^__ctr_.+_mrk$/);
      clearAdmanCookiesByRegexName(/^__ctr_.+_pgs$/);
      clearAdmanCookiesByRegexName(/^__ctr_.+_mrk_shifted$/);
      clearAdmanCookiesByRegexName(/_nc$/);
      clearAdmanCookiesByRegexName(/^__ctrp_.+_page_clicked$/);
      clearAdmanCookiesByRegexName(/^__ctrp_.+_pages_clicked$/);
      clearAdmanCookiesByRegexName(/^__ctrp_.+_pages_potential$/);

      // adhes
      clearAdmanCookiesByRegexName(new RegExp('^__clel-b4a-a-'));

      // preroll
      let prerollCode = getAdmanCookieNullDefault('preroll-code');
      if (prerollCode) {
        clearAdmanCookie(prerollCode.toLowerCase()+'-capped');
        clearAdmanCookie(prerollCode.toLowerCase()+'-allow');
      }

      // postroll
      let postrollCode = getAdmanCookieNullDefault('postroll-code');
      if (postrollCode) {
        clearAdmanCookie(postrollCode.toLowerCase()+'-capped');
        clearAdmanCookie(postrollCode.toLowerCase()+'-allow');
      }

      // interstitial
      let interstitialCode = getAdmanCookieNullDefault('intt-code');
      if (interstitialCode) {
        clearAdmanCookie(interstitialCode.toLowerCase()+'-capped');
        clearAdmanCookie(interstitialCode.toLowerCase()+'-allow');
      }

      // poststitial
      let poststtCode = getAdmanCookieNullDefault('__spot_code-poststitial');
      if (poststtCode) {
        poststtCode = poststtCode.replace('--IMAG-SBID', '');
        clearAdmanCookie(poststtCode.toLowerCase()+'-capped');
        clearAdmanCookie(poststtCode.toLowerCase()+'-allow');
      }

      // специфические флаги
      clearAdmanCookiesByRegexName(/^__spot_code-/);
      clearAdmanCookiesByRegexName(/^__capped_/);
      clearAdmanCookiesByRegexName(/^__ccid_/);
      clearAdmanCookiesByRegexName(/^__ref-/);

      [
        'force_popunder_is_fired',
        'pop_click_counter',
        '__pup',
        '__temp_ref_sub_id',
        '__referrer_only',
        '__ctr_poststt_disabled',
        '__play_preroll',
        '__preroll_disabled',
        'preroll-clicks',
        'preroll-last-click',
        'preroll-current-click',
        'preroll-code',
        '__postroll_disabled',
        'postroll-clicks',
        'postroll-last-click',
        'postroll-current-click',
        'postroll-code',
        '__adheID',
      ].forEach(clearAdmanCookie);


      // секция нужна для удаления кук, созданных попандерной библиотекой pTMpcfdeddcedefde
      [
        'pTMpcfdeddcedefde0',
      ].forEach(function (name) {
        let secure = (location.protocol.startsWith('https') ? 'secure=1' : '');
        document.cookie = `${name}=; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ` + secure;
      });

      // clear localStorage
      if (localStorage && localStorage['pTMpcfdeddcedefdeLastPopAt']) {
        localStorage.removeItem('pTMpcfdeddcedefdeLastPopAt');
      }
      if (localStorage && localStorage['pTMpcfdeddcedefdeCount']) {
        localStorage.removeItem('pTMpcfdeddcedefdeCount');
      }
    });
    ADMAN_INFO.sub_id = ADMAN_INFO.SubIdDetector.detect();
  }
} catch (e) {debug_log(e)}

/**
 * Экранирование строки для безопасной вставки в код или урл
 * 3 vids, Mad"dy&O'Reilly\ => 3%20vids%2C%20Mad%22dy%26O%27Reilly%5C для урл
 * 3 vids, Mad"dy&O'Reilly\ => 3 vids, Mad%22dy%26O%27Reilly%5C для кода
 *
 * @param inputString
 * @param isUrl неизвестно, почему так сделано в replaceKeywords. взял оттуда
 * @return {string}
 */
function escapeKeywordsString(inputString, isUrl) {
  isUrl = isUrl || 0;
  if (isUrl) {
    return encodeURIComponent(inputString)
      .replace(/'/g, '%27')
      .replace(/%2C/g, ',');
  }

  return inputString
    .replace(/\\/g, "%5C")
    .replace(/'/g, "%27")
    .replace(/"/g, "%22")
    .replace(/`/g, "%60")
    .replace(/&/g, "%26");
}


//--- объект, где будет вся инфа
var ADMAN_INFO = ADMAN_INFO || {};
var SUB_ID = SUB_ID || {CAPPED: +'86400'};

//--- детектор девайса
try{
  const parser_result = UAParser();

  //--- get browser name
  let browser_name = 'other';
  if (parser_result.browser.name) {
    if (/Chrome/i.test(parser_result.browser.name)) {
      browser_name = 'chrome';
    } else if (/Safari/i.test(parser_result.browser.name)) {
      browser_name = 'safari';
    }
  }

  //--- get OS name
  let os_name = 'other';
  if (parser_result.os.name) {
    if (/Mac/i.test(parser_result.os.name)) {
      os_name = 'mac';
    } else if (/Windows/i.test(parser_result.os.name)) {
      os_name = 'windows';
    } else if (/Android/i.test(parser_result.os.name)) {
      os_name = 'android';
    } else if (/iOS/i.test(parser_result.os.name)) {
      os_name = 'ios';
    }
  }

  //--- get device type
  let device_type = 'desktop';
  if (parser_result.device.type) {
    if (parser_result.device.type == 'mobile') {
      device_type = 'mobile';
    } else if (parser_result.device.type == 'tablet') {
      device_type = 'tablet';
    }
  }

  //--- get network connection
  let network_type ='other';
  if (navigator.connection && navigator.connection.effectiveType) {
    network_type = navigator.connection.effectiveType;
  }

  ADMAN_INFO.device = {
    browser: browser_name,
    os: os_name,
    type: device_type,
    is_mobile: (device_type == 'mobile' || device_type == 'tablet'),
    network: network_type,
  };

  setAdmanCookie('__device_info', JSON.stringify(ADMAN_INFO.device), {expires: SUB_ID.CAPPED, path: '/', domain: location.hostname});
}catch (e){debug_log(e)}

//--- детектор метаданных страницы
try{
  let page_meta = {};
  page_meta.domain = location.host;
  page_meta.title = parent.document.title;

  let metas = parent.document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++)
  {
    if (metas[i].name && metas[i].getAttribute('content'))
    {
      page_meta[metas[i].name.toLowerCase()] = metas[i].getAttribute('content');
    }

    if (metas[i].getAttribute('property') && metas[i].getAttribute('content'))
    {
      page_meta[metas[i].getAttribute('property')] = metas[i].getAttribute('content');
    }
  }

  setAdmanCookie('__page_meta', JSON.stringify(page_meta), {expires: SUB_ID.CAPPED, path: '/', domain: location.hostname});

  ADMAN_INFO.page_meta = parent.window.page_meta = page_meta;
}catch(e){debug_log(e)}
