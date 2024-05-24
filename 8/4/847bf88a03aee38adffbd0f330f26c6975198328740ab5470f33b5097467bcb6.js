<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link href="/cdn-cgi/assets/css/static-pages-2.6.0.css" rel="stylesheet"><link rel="icon" type="image/x-icon" href="//DOMAIN/favicon.ico"><title></title></head><body><section class="error-section error-section--waiting error-section--ltr error-section--hide" id="en"><div class="container"><div class="error-section__wrapper error-section__wrapper--waiting"><div class="error-section__information"><h1 class="error-section__title"></h1><h1 class="error-section__subtitle error-section__subtitle--waiting">Checking your browser before accessing the website...</h1><div class="error-section__contents"><p class="error-section__content">Please complete the security check before accessing the website.</p></div><div class="redirect__captcha" id="captcha"></div></div></div></div></section><section class="error-section error-section--waiting error-section--hide" id="fa"><div class="container"><div class="error-section__wrapper error-section__wrapper--waiting"><div class="error-section__information"><h1 class="error-section__title"></h1><h1 class="error-section__subtitle error-section__subtitle--waiting">در حال بررسی مرورگر، پیش از انتقال به سایت هستیم ...</h1><div class="error-section__contents"><p class="error-section__content">برای دسترسی به وب‌سایت موردنظر، گزینه زیر را تایید کنید.</p></div><div class="redirect__captcha" id="captcha_element"></div></div></div></div></section><script>"use strict";

var isTehranTimezone = function isTehranTimezone() {
  try {
    var intlName = window.Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (intlName) {
      return intlName.toLowerCase().includes('tehran');
    }
  } catch (e) {}

  var now = new Date();
  return now.toString().toLowerCase().includes('iran');
};

var showPage = function showPage() {
  var errorPage;
  var headTitleElement = document.getElementsByTagName('title');

  if (isTehranTimezone()) {
    errorPage = document.getElementById('fa');
  } else {
    errorPage = document.getElementById('en');
  }

  var lang;
  if (isTehranTimezone()) {
    lang = 'fa';
  } else {
    lang = 'en';
  }

  var pageTitle = errorPage.getElementsByClassName('error-section__title')[0].textContent;
  headTitleElement[0].innerHTML = pageTitle;
  errorPage.classList.remove('error-section--hide');
  afterShowPage(errorPage, lang)
};

window.addEventListener("load", showPage);</script><script type="text/javascript">window.AR_SiteKey = '6Le8dMkUAAAAAEzy7WYOlWbYh0eun-xK0j5aXt6W';
window.AR_Key = '__arcsrc'
window.AR_Domain = 'flightio.com'
window.AR_Age = '3600'
window.AR_SameSite = '; SameSite=Lax'</script><script type="text/javascript" src="/cdn-cgi/assets/js/recaptcha.js"></script><script id="arvanRecaptcha" defer="defer" async="async"></script></body></html>