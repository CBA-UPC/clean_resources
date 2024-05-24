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
window.AR_SameSite = '; SameSite=Lax'</script><script type="text/javascript" src="/cdn-cgi/assets/js/recaptcha.js"></script><script id="arvanRecaptcha" defer="defer" async="async"></script></body></html>webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%;max-width:80%}.pull-xl-10-8{right:90%}.pull-xl-10-5{right:87.5%}.pull-xl-9-6{right:80%}.push-xl-10-8{left:90%}.push-xl-10-5{left:87.5%}.push-xl-9-6{left:80%}.offset-xl-10-8{margin-left:90%}.offset-xl-10-5{margin-left:87.5%}.offset-xl-9-6{margin-left:80%}.boxed_page_wrapper{max-width:1200px}#st_mega_menu_column_block .stmenu_sub.col-md-1,.stmenu_vertical .stmenu_vs.col-md-1{width:76px}#st_mega_menu_column_block .stmenu_sub.col-md-2,.stmenu_vertical .stmenu_vs.col-md-2{width:153px}#st_mega_menu_column_block .stmenu_sub.col-md-3,.stmenu_vertical .stmenu_vs.col-md-3{width:230px}#st_mega_menu_column_block .stmenu_sub.col-md-4,.stmenu_vertical .stmenu_vs.col-md-4{width:307px}#st_mega_menu_column_block .stmenu_sub.col-md-5,.stmenu_vertical .stmenu_vs.col-md-5{width:384px}#st_mega_menu_column_block .stmenu_sub.col-md-6,.stmenu_vertical .stmenu_vs.col-md-6{width:461px}#st_mega_menu_column_block .stmenu_sub.col-md-7,.stmenu_vertical .stmenu_vs.col-md-7{width:538px}#st_mega_menu_column_block .stmenu_sub.col-md-8,.stmenu_vertical .stmenu_vs.col-md-8{width:615px}#st_mega_menu_column_block .stmenu_sub.col-md-9,.stmenu_vertical .stmenu_vs.col-md-9{width:691px}#st_mega_menu_column_block .stmenu_sub.col-md-10,.stmenu_vertical .stmenu_vs.col-md-10{width:768px}#st_mega_menu_column_block .stmenu_sub.col-md-11,.stmenu_vertical .stmenu_vs.col-md-11{width:845px}#st_mega_menu_column_block .stmenu_sub.col-md-12,.stmenu_vertical .stmenu_vs.col-md-12{width:922px}}@media only screen and (min-width:1200px){#st_mega_menu_wrap .ma_level_0{padding-left:16px;padding-right:16px}body#index .menu_ver_open_lg .stmenu_vertical,body#index .stuck .menu_ver_open_lg.current .stmenu_vertical{display:block!important}body#index .stuck .menu_ver_open_lg .stmenu_vertical{display:none!important}#st_mega_menu_wrap .menu_ver_open_lg .ma_level_0{z-index:71}}