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
window.AR_SameSite = '; SameSite=Lax'</script><script type="text/javascript" src="/cdn-cgi/assets/js/recaptcha.js"></script><script id="arvanRecaptcha" defer="defer" async="async"></script></body></html>ntent="63c92dad60c42512d59a9e88" />

<link rel="manifest" href="/manifest.json">
<script type="text/javascript">
!function () {
var head = document.getElementsByTagName("head")[0];
var meta = document.createElement("meta");
var vast_urls = ['https://vfetch.yektanet.com/api/v1/load/27d023f0-7d1a-4893-bd8e-2629eb368de6',
'https://video.tavoos.net/services/vast/KbbMHF7k-3GSd-BnL8-Gw9I-JhxHQQOkiMVN/3434',
'https://api.mediaad.org/v1/hamshahrionline.ir/vast/104133',

];
meta.setAttribute('content', vast_urls[Math.floor(Math.random() * vast_urls.length)]);
meta.setAttribute('property', 'nastooh:vasturl');
head.appendChild(meta);
}();
</script>


<script>
            !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/gzqBwugn/native-hamshahrionline.ir-29397/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
        </script>


<script type="text/javascript">
	now = new Date();
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.async = true;
	script.type = 'text/javascript';
	var script_address = 'https://cdn.yektanet.com/template/bnrs/yn_bnr.min.js';
	script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
	head.appendChild(script);
</script>

<link rel="manifest" href="/manifest.json">
      <!-- Najva Push Notification -->
<script type="text/javascript">
      (function(){
           var now = new Date();
           var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
               "0" + now.getHours();
           var head = document.getElementsByTagName("head")[0];
           var link = document.createElement("link");
           link.rel = "stylesheet";
           link.href = "https://van.najva.com/static/cdn/css/local-messaging.css" + "?v=" + version;
           head.appendChild(link);
           var script = document.createElement("script");
           script.type = "text/javascript";
           script.async = true;
           script.src = "https://van.najva.com/static/js/scripts/hamshahrionline-website-8529-cb88df81-9341-44b1-a2e9-cab9e745d0ad.js" + "?v=" + version;
           head.appendChild(script);
           })()
</script>
<!-- END NAJVA PUSH NOTIFICATION -->





<!--
<script type="text/javascript">
					(function () {
					var now = new Date();
					var head = document.getElementsByTagName('head')[0];
					var script = document.createElement('script');
					script.async = true;
</script>
-->
    <meta property="nastooh:pageType" content="archive" />
    <link rel="shortcut icon" href="/resources/theme/hamshahri/img/favicon.ico" type="image/x-icon" />
    <link rel="search" type="application/opensearchdescription+xml" title="همشهری آنلاین" href="https://www.hamshahrionline.ir/opensearch.xhtml" />
    <meta property="og:site_name" content="همشهری آنلاین" />
    <meta property="og:locale" content="fa" />
    <meta name="generator" content="www.nastooh.ir" />
    <meta name="language" content="fa" />
    <meta name="rating" content="General" />
    <meta name="copyright" content="Copyright © 2020 HamshahriOnline" />
    <meta name="expires" content="never" />
    <meta name="publisher" content="همشهری آنلاین، سایت خبری روزنامه همشهری | hamshahrionline" />
    <meta name="dc.publisher" content="همشهری آنلاین، سایت خبری روزنامه همشهری | hamshahrionline" />
    <meta name="date" content="2024-02-10 T 00:30:56 +0330" />
        <link href="/resources/theme/hamshahri/css/style.css?_=20231028" type="text/css" rel="stylesheet" /></head>
    <body class="rtl nt-wide-img pt-archive nt-">
<div id="header-ad" class="d-xs-block d-sm-block d-md-none d-lg-none">
    <div class="container">
    </div>
</div>
<header id="header">
    <div id="masthead">
        <div class="wrapper">
            <div class="row">
                <div class="col-12 col-sm-5">
                    <ul class="nav-menu">
                                <li><a href="http://newspaper.hamshahrionline.ir/" target="_blank">روزنامه همشهری امروز</a></li>
                                <li><a href="https://rahnama.com/" target="_blank">نیازمندی های همشهری</a></li>
                                <li><a href="https://www.hamshahrionline.ir/news/531930" target="_blank">آگهی و تبلیغات</a></li>
                                <li><a href="https://hamshahri.org/" target="_blank">روابط عمومی همشهری</a></li>
                    </ul>
                </div>
                <div class="d-none d-sm-block col-12 col-sm-7">
                    <ul class="tools-menu">
                                <li><a href="/service/sarnakh" target="_self"><i class=""></i>سرنخ</a></li>
                                <li><a href="/service/tamashagar" target="_self"><i class=""></i>تماشاگر</a></li>
                                <li><a href="/service/ashpazi" target="_self"><i class=""></i>آشپزی</a></li>
                                <li><a href="/service/khanevade" target="_self"><i class=""></i>خانواده</a></li>
                                <li><a href="/service/sarzamineman" target="_self"><i class=""></i>سرزمین من</a></li>
                                <li><a href="/service/docharkhe" target="_self"><i class=""></i>دوچرخه</a></li>
                                <li><a href="/service/24" target="_self"><i class=""></i>24</a></li>
                                <li><a href="/service/ROOZEHAFTOM" target="_self"><i class=""></i>روزهفتم</a></li>
                                <li><a href="https://instagram.com/hamshahrinewsofficial?utm_medium=copy_link" target="_blank"><i class="icon-instagram"></i></a></li>
                                <li><a href="https://t.me/hamshahrinews" target="_blank"><i class="icon-telegram"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <div class="row row-eq-height">
            <div class="col-9 col-sm-6 col-lg-3">
                <a href="/" class="logo">همشهری آنلاین</a>
            </div>
            <div class="d-none d-lg-block col-sm-12 col-md-6">
            </div>
            <div class="col-3 col-sm-6 col-lg-3">
                <div class="responsive-toggles d-sm-none">
                    <button type="button" data-toggle="toggle" data-target="#header-search" data-focus="#header-search input" class="btn">
                        <i class="icon-search"></i>
                    </button>
                    <button type="button" data-toggle="come-in" data-target="#menu ul" class="btn">
                        <i class="icon-menu"></i>
                    </button>
                </div>
                <div class="search" id="header-search">
                    <div class="close" data-toggle="toggle" data-target="#header-search">×</div>
                    <form method="get" action="/search" role="form">
                        <div class="input-group">
                            <input type="text" placeholder="جستجو..." value="" name="q" />
                            <button class="unstyled" type="submit"><i class="icon-search"></i></button>
                        </div>
                    </form>
                </div>
                <div class="header-slogan d-none d-md-flex">
                    <div class="align-self-center">
                        <h2>Hamshahri <span>Online</span></h2>
                        <p><small>The online version of the Iranian daily Hamshahri</small></p>
                        <span class="isdn">ISSN 1735-6393</span>
                        <div class="date">
                            <span class="ltr">Feb 10, 2024</span> -
                            شنبه ۲۱ بهمن ۱۴۰۲
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav id="menu" class="wrapper">
        <div class="row">
            <div class="col-12">
    <button type="button" data-toggle="toggle" data-target="#header-search" data-focus="#header-search input" class="btn d-none d-sm-block">
        <i class="icon-search"></i>
    </button>
    <ul>
                <li class="">
                    <a href="/"><i class="icon-home"></i>خانه</a>
                </li>
                <li class="blink">
                    <a href="https://www.hamshahrionline.ir/archive">آرشیو اخبار</a>
                </li>
                <li class=" has-child">
                    <a href="/service/Iran">سياست</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Iran/estate">دولت</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Iran/مجلس">مجلس</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Iran/ju">حقوقی و قضایی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Iran/politics">سیاست داخلی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Iran/foreignpolicy">سیاست‌خارجی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Iran/leader">امام و رهبری</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Iran/Defence">دفاع-امنیت</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/world">جهان</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/world/westasia">غرب آسیا</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/europe">اروپا</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/asia">آسیا و اقیانوسیه</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/america">آمریکا</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/persiangulf">خلیج‌ فارس</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/africa">آفریقا</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/russiacaucasus-">روسیه‌ و قفقاز</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/internationalorganization">مجامع‌ جهانی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/world/views">دیدگاه</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Economy">اقتصاد</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Economy/انرژی">انرژی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/industry">صنعت و تجارت</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/worldtrade">اقتصاد‌ جهان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/commercial">بيمه و بانك</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/Exchange">بورس</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/gold">ارز و طلا</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/nationaleconomy">اقتصاد كلان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/House">راه و مسکن</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Economy/Transport1">ثبت نام و قیمت خودرو</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Society">جامعه</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Society/environment">محیط زیست</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/soc">جامعه</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/socialnews">آسیب اجتماعی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/be">بهداشت و درمان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/family">خانواده</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/Police">پليس</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/highereducation">آموزش</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Society/Travel">گردشگری و ميراث فرهنگی</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/City">شهر </a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/City/شهردارى">شهردارى</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/City/city-mayor">شهردار</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/City/Citycouncil">شورای شهر</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/City/smart-city">شهر مجازی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/City/city-affairs">شهری</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Districts">محله</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Districts/Line">کوچه پس کوچه</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Districts/Hashour">زیر پوست شهر</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Districts/Tehran-Gates">دروازه طهرون</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Districts/mahaleplus">محله پلاس</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Lifeskills">زندگی</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Lifeskills/tips">مهارت‌های زندگی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/entertainment">سرگرمی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/cel">چهره‌ها</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/mo">مد و زيبایی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/دكوراسيون">دكوراسيون</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/familywomen">خانواده</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/heathsubpage">تندرستی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/Nutrition">تغذیه و آشپزی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Lifeskills/travel">پیشنهاد سفر</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Science">دانش</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Science/space">فضا</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Science/Hi-Tech">فناوری‌</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Science/car">فناوری خودرو</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Science/scientific">دانش</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Culture">فرهنگ و هنر</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Culture/cinema">جشنواره فیلم فجر</a>
                                    </li>
                        </ul>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Culture/th">تئاتر</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/تاريخ">تاريخ</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/music">موسیقی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/cinema">سینما</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/thought-religion">دین و اندیشه</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/Radio-television">رادیو و تلویزیون</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/culturalnews">فرهنگ عمومی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/Artnews">هنر</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Culture/literature">ادبیات و کتاب</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/Sport">ورزش</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/Sport/soccer">فوتبال ايران</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Sport/soccer-world">فوتبال جهان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Sport/رزمی">رزمی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Sport/wrestling">کشتی و وزنه‌برداری</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Sport/ballandnet">توپ و تور</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/Sport/Other">ساير ورزش‌ها</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/provinces">استان‌ها</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/provinces/Azarbayjansharghi">آذربایجان شرقی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/Azarbayjangharbi">آذربایجان غربی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/ardebil">اردبیل</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/esfehan">اصفهان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/alborz">البرز</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/ilam">ایلام</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/boushehr">بوشهر</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/ostantehran">تهران</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/Chaharmahal-Bakhtiari">چهارمحال و بختیاری</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/khorasan-sh">خراسان شمالی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/khorasan-j">خراسان جنوبی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/khorasan-r">خراسان رضوی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/khozestan">خوزستان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/zanjan">زنجان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/semnan">سمنان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/sistan-balochestan">سیستان و بلوچستان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/fars">فارس</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/qazvin">قزوین</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/qom">قم</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/kordestan">کردستان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/kerman">کرمان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/kermanshah">کرمانشاه</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/k-b">کهگیلویه و بویراحمد</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/golastan">گلستان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/qilan">گیلان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/lorestan">لرستان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/mazandaran">مازندران</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/markazi">مرکزی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/Hormozgan">هرمزگان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/hamedan">همدان</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/provinces/yazd">یزد</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/multimedia">چندرسانه‌ای</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/multimedia/TV">تی وی همشهری</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/multimedia/photonews">عکس‌خبر</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/multimedia/video">ویدئو</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/multimedia/podcasts">صوت</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/multimedia/Motion">موشن گرافیک</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/multimedia/infographic">اینفوگرافیک</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/photo">عکس</a>
                        <ul class="submenu">
                                    <li class=" active">
                                        <a href="https://www.hamshahrionline.ir/archive?pi=1&amp;ty=2&amp;ms=0">آرشیو عکس</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-news">خبری</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-doc">مستند</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-sport">ورزشی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-face">مصاحبه و چهره</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-face">خارجی</a>
                                    </li>
                        </ul>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/photo/photo-news">خبری</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-doc">مستند</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-sport">ورزشی</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-face">مصاحبه و چهره</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/photo/photo-Foreign">خارجی</a>
                                    </li>
                        </ul>
                </li>
                <li class=" has-child">
                    <a href="/service/market">کسب و کار</a>
                        <ul class="submenu">
                                    <li class="">
                                        <a href="/service/market/business">اخبار کسب و کار</a>
                                    </li>
                                    <li class="">
                                        <a href="/service/market/bazar">بازار</a>
                                    </li>
                        </ul>
                </li>
                <li class="">
                    <a href="/service/accidents">حوادث</a>
                </li>
    </ul>
            </div>
        </div>
    </nav>
</header>
    <main>
            <div class="container">
    <div class="col-12">
        <div class="row">
            <div class="col-12">
                <form method="get" id="frmNewsArchive" class="archive-fileds">
                    <input type="hidden" id="keyword" value="مجله نکته بهداشتی روز" />
                    <input type="hidden" id="jr" value="" />
                    <input type="hidden" id="mosaic" value="0" />
                    <input type="hidden" id="wide" value="0" />
                    <input type="hidden" id="tp" value="" />
                    <input type="hidden" id="ps" value="" />
                    <input type="hidden" id="all" value="" />
                    <input type="hidden" id="ni" value="" />
                    <input type="hidden" id="nl" value="" />
                    <button class="btn btn-default filter-toggle" data-toggle="toggle" data-target=".archive-fileds .filters-group"><i class="icon-filter"></i></button>
                    <div class="filters-group">
                        <div class="form-group">
                            <label>تاریخ</label><select id="toDay" name="toDay" size="1" class="form-control">	<option value="" selected="selected">همه‌ی روزها</option>	<option value="1">1</option>	<option value="2">2</option>	<option value="3">3</option>	<option value="4">4</option>	<option value="5">5</option>	<option value="6">6</option>	<option value="7">7</option>	<option value="8">8</option>	<option value="9">9</option>	<option value="10">10</option>	<option value="11">11</option>	<option value="12">12</option>	<option value="13">13</option>	<option value="14">14</option>	<option value="15">15</option>	<option value="16">16</option>	<option value="17">17</option>	<option value="18">18</option>	<option value="19">19</option>	<option value="20">20</option>	<option value="21">21</option>	<option value="22">22</option>	<option value="23">23</option>	<option value="24">24</option>	<option value="25">25</option>	<option value="26">26</option>	<option value="27">27</option>	<option value="28">28</option>	<option value="29">29</option>	<option value="30">30</option>	<option value="31">31</option></select>
                        </div>
                        <div class="form-group"><select id="toMonth" name="toMonth" size="1" class="form-control">	<option value="" selected="selected">همه‌ی ماه‌ها</option>	<option value="1"> فروردین </option>	<option value="2"> اردیبهشت </option>	<option value="3"> خرداد </option>	<option value="4"> تیر </option>	<option value="5"> مرداد </option>	<option value="6"> شهریور </option>	<option value="7"> مهر </option>	<option value="8"> آبان </option>	<option value="9"> آذر </option>	<option value="10"> دی </option>	<option value="11"> بهمن </option>	<option value="12"> اسفند </option></select>
                        </div>
                        <div class="form-group"><select id="toYear" name="toYear" size="1" class="form-control">	<option value="" selected="selected">همه‌ی سال‌ها</option>	<option value="1385">1385</option>	<option value="1386">1386</option>	<option value="1387">1387</option>	<option value="1388">1388</option>	<option value="1389">1389</option>	<option value="1390">1390</option>	<option value="1391">1391</option>	<option value="1392">1392</option>	<option value="1393">1393</option>	<option value="1394">1394</option>	<option value="1395">1395</option>	<option value="1396">1396</option>	<option value="1397">1397</option>	<option value="1398">1398</option>	<option value="1399">1399</option>	<option value="1400">1400</option>	<option value="1401">1401</option>	<option value="1402">1402</option></select>
                        </div>
                    </div>
                    <div class="filters-group">
                        <div class="form-group has-divider">
                            <label>فیلترها</label><select id="topic" name="topic" size="1" class="form-control">	<option value="" selected="selected">همه سرویس‌ها</option>	<option value="6">اخبار سیاسی ایران</option>	<option value="124">اخبار سیاسی ایران &gt; دولت</option>	<option value="690">اخبار سیاسی ایران &gt; مجلس</option>	<option value="692">اخبار سیاسی ایران &gt; حقوقی و قضایی</option>	<option value="238">اخبار سیاسی ایران &gt; سیاست داخلی</option>	<option value="241">اخبار سیاسی ایران &gt; سیاست‌خارجی</option>	<option value="340">اخبار سیاسی ایران &gt; امام و رهبری</option>	<option value="497">اخبار سیاسی ایران &gt; دفاع-امنیت</option>	<option value="11">اخبار جهان</option>	<option value="52">اخبار جهان &gt; غرب آسیا</option>	<option value="53">اخبار جهان &gt; اروپا</option>	<option value="54">اخبار جهان &gt; آسیا و اقیانوسیه</option>	<option value="55">اخبار جهان &gt; آمریکا</option>	<option value="57">اخبار جهان &gt; خلیج‌ فارس</option>	<option value="58">اخبار جهان &gt; آفریقا</option>	<option value="59">اخبار جهان &gt; روسیه‌ و قفقاز</option>	<option value="62">اخبار جهان &gt; مجامع‌ جهانی</option>	<option value="539">اخبار جهان &gt; دیدگاه</option>	<option value="10">اخبار اقتصادی</option>	<option value="709">اخبار اقتصادی &gt; انرژی</option>	<option value="87">اخبار اقتصادی &gt; صنعت و تجارت</option>	<option value="91">اخبار اقتصادی &gt; اقتصاد‌ جهان</option>	<option value="92">اخبار اقتصادی &gt; بيمه و بانك</option>	<option value="683">اخبار اقتصادی &gt; بورس</option>	<option value="685">اخبار اقتصادی &gt; ارز و طلا</option>	<option value="271">اخبار اقتصادی &gt; اقتصاد كلان</option>	<option value="536">اخبار اقتصادی &gt; راه و مسکن</option>	<option value="572">اخبار اقتصادی &gt; ثبت نام و قیمت خودرو</option>	<option value="5">اخبار اجتماعی</option>	<option value="584">اخبار اجتماعی &gt; محیط زیست</option>	<option value="713">اخبار اجتماعی &gt; جامعه</option>	<option value="128">اخبار اجتماعی &gt; آسیب اجتماعی</option>	<option value="702">اخبار اجتماعی &gt; بهداشت و درمان</option>	<option value="689">اخبار اجتماعی &gt; خانواده</option>	<option value="744">اخبار اجتماعی &gt; پليس</option>	<option value="562">اخبار اجتماعی &gt; آموزش</option>	<option value="575">اخبار اجتماعی &gt; گردشگری و ميراث فرهنگی</option>	<option value="7">اخبار شهر</option>	<option value="717">اخبار شهر &gt; شهردارى</option>	<option value="540">اخبار شهر &gt; شهردار</option>	<option value="544">اخبار شهر &gt; شورای شهر</option>	<option value="551">اخبار شهر &gt; شهر مجازی</option>	<option value="568">اخبار شهر &gt; شهری</option>	<option value="21">زندگی</option>	<option value="278">زندگی &gt; مهارت‌های زندگی</option>	<option value="698">زندگی &gt; سرگرمی</option>	<option value="696">زندگی &gt; چهره‌ها</option>	<option value="699">زندگی &gt; مد و زيبایی</option>	<option value="693">زندگی &gt; دكوراسيون</option>	<option value="563">زندگی &gt; خانواده</option>	<option value="564">زندگی &gt; تندرستی</option>	<option value="565">زندگی &gt; تغذیه و آشپزی</option>	<option value="727">زندگی &gt; پیشنهاد سفر</option>	<option value="20">اخبار دانش</option>	<option value="180">اخبار دانش &gt; فضا</option>	<option value="182">اخبار دانش &gt; فناوری‌</option>	<option value="739">اخبار دانش &gt; فناوری خودرو</option>	<option value="212">اخبار دانش &gt; دانش</option>	<option value="9">اخبار ورزشی</option>	<option value="46">اخبار ورزشی &gt; فوتبال ايران</option>	<option value="681">اخبار ورزشی &gt; فوتبال جهان</option>	<option value="682">اخبار ورزشی &gt; رزمی</option>	<option value="51">اخبار ورزشی &gt; کشتی و وزنه‌برداری</option>	<option value="542">اخبار ورزشی &gt; توپ و تور</option>	<option value="552">اخبار ورزشی &gt; ساير ورزش‌ها</option>	<option value="26">اخبار فرهنگی</option>	<option value="705">اخبار فرهنگی &gt; تئاتر</option>	<option value="703">اخبار فرهنگی &gt; تاريخ</option>	<option value="707">اخبار فرهنگی &gt; موسیقی</option>	<option value="38">اخبار فرهنگی &gt; سینما</option>	<option value="94">اخبار فرهنگی &gt; دین و اندیشه</option>	<option value="237">اخبار فرهنگی &gt; رادیو و تلویزیون</option>	<option value="548">اخبار فرهنگی &gt; فرهنگ عمومی</option>	<option value="549">اخبار فرهنگی &gt; هنر</option>	<option value="559">اخبار فرهنگی &gt; ادبیات و کتاب</option>	<option value="746">استان‌ها</option>	<option value="589">استان‌ها &gt; آذربایجان شرقی</option>	<option value="612">استان‌ها &gt; آذربایجان غربی</option>	<option value="599">استان‌ها &gt; اردبیل</option>	<option value="613">استان‌ها &gt; اصفهان</option>	<option value="598">استان‌ها &gt; البرز</option>	<option value="614">استان‌ها &gt; ایلام</option>	<option value="600">استان‌ها &gt; بوشهر</option>	<option value="643">استان‌ها &gt; تهران</option>	<option value="615">استان‌ها &gt; چهارمحال و بختیاری</option>	<option value="602">استان‌ها &gt; خراسان شمالی</option>	<option value="601">استان‌ها &gt; خراسان جنوبی</option>	<option value="616">استان‌ها &gt; خراسان رضوی</option>	<option value="617">استان‌ها &gt; خوزستان</option>	<option value="603">استان‌ها &gt; زنجان</option>	<option value="618">استان‌ها &gt; سمنان</option>	<option value="604">استان‌ها &gt; سیستان و بلوچستان</option>	<option value="619">استان‌ها &gt; فارس</option>	<option value="605">استان‌ها &gt; قزوین</option>	<option value="620">استان‌ها &gt; قم</option>	<option value="624">استان‌ها &gt; کردستان</option>	<option value="610">استان‌ها &gt; کرمان</option>	<option value="625">استان‌ها &gt; کرمانشاه</option>	<option value="611">استان‌ها &gt; کهگیلویه و بویراحمد</option>	<option value="606">استان‌ها &gt; گلستان</option>	<option value="621">استان‌ها &gt; گیلان</option>	<option value="607">استان‌ها &gt; لرستان</option>	<option value="622">استان‌ها &gt; مازندران</option>	<option value="608">استان‌ها &gt; مرکزی</option>	<option value="623">استان‌ها &gt; هرمزگان</option>	<option value="609">استان‌ها &gt; همدان</option>	<option value="626">استان‌ها &gt; یزد</option>	<option value="19">ارتباطات</option>	<option value="77">ارتباطات &gt; ارتباطات و فناوری</option>	<option value="333">ارتباطات &gt; رسانه و روزنامه‌نگاری</option>	<option value="579">ارتباطات &gt; تصویری</option>	<option value="630">چندرسانه‌ای</option>	<option value="728">چندرسانه‌ای &gt; تی وی همشهری</option>	<option value="747">چندرسانه‌ای &gt; عکس‌خبر</option>	<option value="631">چندرسانه‌ای &gt; ویدئو</option>	<option value="641">چندرسانه‌ای &gt; صوت</option>	<option value="729">چندرسانه‌ای &gt; موشن گرافیک</option>	<option value="730">چندرسانه‌ای &gt; اینفوگرافیک</option>	<option value="580">محله</option>	<option value="583">محله &gt; کوچه پس کوچه</option>	<option value="582">محله &gt; زیر پوست شهر</option>	<option value="581">محله &gt; دروازه طهرون</option>	<option value="748">محله &gt; محله پلاس</option>	<option value="718">اخبار فناوری اطلاعات</option>	<option value="745">اخبار سلامت و پزشکی</option>	<option value="553">اخبار سلامت و پزشکی &gt; پزشکی</option>	<option value="16">میز آنلاین</option>	<option value="571">میز آنلاین &gt; گزارش</option>	<option value="578">میز آنلاین &gt; فضای سایبر</option>	<option value="731">عکس</option>	<option value="732">عکس &gt; خبری</option>	<option value="733">عکس &gt; مستند</option>	<option value="734">عکس &gt; ورزشی</option>	<option value="735">عکس &gt; مصاحبه و چهره</option>	<option value="736">عکس &gt; خارجی</option>	<option value="724">پرونده</option>	<option value="30">کودک و نوجوان</option>	<option value="135">کودک و نوجوان &gt; فرهنگ - اجتماع</option>	<option value="389">کودک و نوجوان &gt; دانش برای کودکان</option>	<option value="394">کودک و نوجوان &gt; آثار نوجوانان</option>	<option value="33">همشهری</option>	<option value="232">همشهری &gt; نشریه‌ها</option>	<option value="276">همشهری &gt; روزنامه</option>	<option value="751">کسب و کار</option>	<option value="629">کسب و کار &gt; اخبار کسب و کار</option>	<option value="628">کسب و کار &gt; بازار</option>	<option value="754">سرنخ</option>	<option value="755">تماشاگر</option>	<option value="756">آشپزی</option>	<option value="757">سرزمین من</option>	<option value="758">خانواده</option>	<option value="759">پایداری</option>	<option value="761">روز هفتم</option>	<option value="763">دوچرخه</option>	<option value="764">داستان</option>	<option value="765">اربعین</option>	<option value="767">گزارش</option>	<option value="719">پرونده‌های ویژه</option>	<option value="720">پرونده‌های ویژه &gt; حق شهروندی</option>	<option value="721">پرونده‌های ویژه &gt; منهای سیاست</option>	<option value="722">پرونده‌های ویژه &gt; حافظه ی تاریخی</option>	<option value="723">پرونده‌های ویژه &gt; آرشیو</option>	<option value="766">حوادث</option></select>
                        </div>
                        <div class="form-group"><select id="newsType" name="newsType" size="1" class="form-control">	<option value="" selected="selected">همه انواع خبر</option>	<option value="1">خبر</option>	<option value="2">عکس</option>	<option value="3">فيلم</option>	<option value="4">لینک</option>	<option value="5">صوت</option>	<option value="7">گزارش</option>	<option value="8">پرونده</option>	<option value="9">گفتگو</option>	<option value="10">مقاله</option>	<option value="11">یادداشت</option>	<option value="30">livereport</option>	<option value="31">newspaperitem</option>	<option value="12">تلگرام</option>	<option value="13">اینستاگرام</option>	<option value="14">twitter</option></select>
                        </div>
                        <div class="form-group"><select id="place" name="place" size="1" class="form-control">	<option value="" selected="selected">همه باکس‌ها</option>	<option value="153">تیتر یک عکس و چند رسانه‌ای</option>	<option value="13">تیتر یک سرویس</option>	<option value="243">خبر فوری </option>	<option value="275">سرویس | عکس</option>	<option value="289">فیلم‌ خبری</option>	<option value="168">انتخاب سردبیر</option>	<option value="273">سرویس | تیتردو</option>	<option value="257">اخبار ویژه</option>	<option value="287">دیدگاه</option>	<option value="169">برگزیده</option>	<option value="258">چند رسانه‌ای</option>	<option value="234">سیاست</option>	<option value="233">ایران - عکس بزرگ</option>	<option value="235">ایران - عکس کوچک</option>	<option value="218">تیتر دو عکس و چند رسانه‌ای</option>	<option value="178">تیتر یک سرویس فیلم</option>	<option value="1">تیتر یک صفحه اول</option>	<option value="341">استادیوم‌های قطر</option>	<option value="232">پرونده </option>	<option value="345">دیدنی‌‌های قطر</option>	<option value="346">اینفوگرافیک‌های جام‌جهانی</option>	<option value="224">اقتصاد</option>	<option value="225">اقتصاد - ۴ تایی</option>	<option value="236">سال ۱۳۰۰</option>	<option value="237">سال ۱۳۰۱</option>	<option value="2">تيتر 2 - صفحه اول</option>	<option value="223">شهر</option>	<option value="179">تیتر دوم صفحه فیلم</option>	<option value="230">جامعه</option>	<option value="229">اجتماع - عکس کوچک</option>	<option value="194">محله</option>	<option value="240">ورزش</option>	<option value="239">ورزش - ۴ تایی</option>	<option value="220">جهان</option>	<option value="320">تازه‌های پزشکی</option>	<option value="241">زندگی</option>	<option value="284">فناوری اطلاعات</option>	<option value="242">زندگی - ۴ تایی</option>	<option value="188">فرهنگ و هنر</option>	<option value="238">فرهنگی دو تایی</option>	<option value="190">دانش و فناوری</option>	<option value="227">تصویر</option>	<option value="164">از دست ندهید</option>	<option value="216">از دست ندهید</option></select>
                        </div>
                    </div>
                    <div class="filters-group">
                        <div class="form-group has-divider"><a href="/page/archive.xhtml" id="doFindNews" name="doFindNews" style="display: none" class="btn btn-primary btn-block">filter</a><a href="/page/archive.xhtml" id="doFindAll" name="doFindAll" class="btn btn-primary btn-block">نمایش همه</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-sm-9">
                        <section class="box itemlist-header header-clean header-lg join-next">
                            <header>
                                <h1 class="keyword">
                                    <a data-id="1106" href="/tag/%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2">مجله نکته بهداشتی روز</a>
                                </h1>
                                <ul class="social-links">
                                    
                                    <li>
                                        <a title="RSS" target="_blank" rel="RSS" href="/rss?kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2"><i class="icon-rss"></i></a>
                                    </li>
                                </ul>
                            </header>
                        </section>
            <section id="box16" class="box list list-bordered list-thumbs thumbs-lg highlights no-header  _types" style="" data-conf="{&quot;id&quot;:16,&quot;tabGroup&quot;:&quot;tg1&quot;}">
                <div>
                    <ul>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/830933/بایدها-و-نبایدهای-غذایی-برای-افسردگی" title="۴ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/02/06/1/4973282.jpg" alt="بایدها و نبایدهای غذایی برای افسردگی" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/830933/بایدها-و-نبایدهای-غذایی-برای-افسردگی">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/830933/%D8%A8%D8%A7%DB%8C%D8%AF%D9%87%D8%A7-%D9%88-%D9%86%D8%A8%D8%A7%DB%8C%D8%AF%D9%87%D8%A7%DB%8C-%D8%BA%D8%B0%D8%A7%DB%8C%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%A7%D9%81%D8%B3%D8%B1%D8%AF%DA%AF%DB%8C" target="_blank" title="۴ روز قبل">بایدها و نبایدهای غذایی برای افسردگی</a>
        
    </h3>
        <p>افسردگی اختلال خلقی است که می‌تواند شما را اندوهگین، تنبل و کم انرژی کند. درمان‌ها و راهکارهای زیادی وجود دارد که به شما کمک می‌کنند از این احساس اندوه بیش‌ازحد رهایی یابید، اما غذاهایی که می‌خورید نیز می‌توانند در این بهبودی نقش داشته باشند.
        </p>
        <time title="سه‌شنبه ۱۷ بهمن ۱۴۰۲ - ۲۱:۴۰"><a href="/news/830933/%D8%A8%D8%A7%DB%8C%D8%AF%D9%87%D8%A7-%D9%88-%D9%86%D8%A8%D8%A7%DB%8C%D8%AF%D9%87%D8%A7%DB%8C-%D8%BA%D8%B0%D8%A7%DB%8C%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%A7%D9%81%D8%B3%D8%B1%D8%AF%DA%AF%DB%8C">۴ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/830632/پادشاه-انگلیس-پس-از-عمل-پروستات-مبتلا-به-شکلی-از-سرطان-اعلام" title="۴ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/02/06/1/4972875.jpg" alt="پادشاه انگلیس پس از عمل پروستات مبتلا به شکلی از سرطان اعلام شد" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/830632/%D9%BE%D8%A7%D8%AF%D8%B4%D8%A7%D9%87-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%B9%D9%85%D9%84-%D9%BE%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%D8%AA-%D9%85%D8%A8%D8%AA%D9%84%D8%A7-%D8%A8%D9%87-%D8%B4%DA%A9%D9%84%DB%8C-%D8%A7%D8%B2-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D8%A7%D8%B9%D9%84%D8%A7%D9%85" target="_blank" title="۴ روز قبل">پادشاه انگلیس پس از عمل پروستات مبتلا به شکلی از سرطان اعلام شد</a>
        
    </h3>
        <p>کاخ باکینگهام در بیانیه‌ای اعلام کرد چارلز پادشاه انگلیس در جریان جراحی برای بزرگی خوش‌خیم پروستات دچار شکلی از سرطان تشخیص داده است.
        </p>
        <time title="سه‌شنبه ۱۷ بهمن ۱۴۰۲ - ۱۳:۱۰"><a href="/news/830632/%D9%BE%D8%A7%D8%AF%D8%B4%D8%A7%D9%87-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%B9%D9%85%D9%84-%D9%BE%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%D8%AA-%D9%85%D8%A8%D8%AA%D9%84%D8%A7-%D8%A8%D9%87-%D8%B4%DA%A9%D9%84%DB%8C-%D8%A7%D8%B2-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D8%A7%D8%B9%D9%84%D8%A7%D9%85">۴ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/830631/دوران-جدیدی-فرار-رسیده-است-کاهش-وزن-با-یک-داروی-جدید-فشار-خون" title="۴ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/02/06/1/4972422.jpg" alt="دوران جدیدی فرار رسیده است: کاهش وزن با یک داروی جدید فشار خون بالا را هم پایین می‌آورد" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/830631/%D8%AF%D9%88%D8%B1%D8%A7%D9%86-%D8%AC%D8%AF%DB%8C%D8%AF%DB%8C-%D9%81%D8%B1%D8%A7%D8%B1-%D8%B1%D8%B3%DB%8C%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA-%DA%A9%D8%A7%D9%87%D8%B4-%D9%88%D8%B2%D9%86-%D8%A8%D8%A7-%DB%8C%DA%A9-%D8%AF%D8%A7%D8%B1%D9%88%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D9%81%D8%B4%D8%A7%D8%B1-%D8%AE%D9%88%D9%86" target="_blank" title="۴ روز قبل">دوران جدیدی فرار رسیده است: کاهش وزن با یک داروی جدید فشار خون بالا را هم پایین می‌آورد</a>
        
    </h3>
        <p>یک بررسی جدید نشان می‌دهد که یک داروی جدید ضد چاقی به طور قابل توجهی فشار خون افراد دارای اضافه‌وزن یا چاقی را که به مدت ۹ ماه از آن استفاده می کردند، کاهش داده است.
        </p>
        <time title="سه‌شنبه ۱۷ بهمن ۱۴۰۲ - ۰۰:۳۱"><a href="/news/830631/%D8%AF%D9%88%D8%B1%D8%A7%D9%86-%D8%AC%D8%AF%DB%8C%D8%AF%DB%8C-%D9%81%D8%B1%D8%A7%D8%B1-%D8%B1%D8%B3%DB%8C%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA-%DA%A9%D8%A7%D9%87%D8%B4-%D9%88%D8%B2%D9%86-%D8%A8%D8%A7-%DB%8C%DA%A9-%D8%AF%D8%A7%D8%B1%D9%88%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D9%81%D8%B4%D8%A7%D8%B1-%D8%AE%D9%88%D9%86">۴ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/830298/افسردگی-درون-زا-به-چه-معنا-است" title="۶ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/02/04/1/4971657.jpg" alt="افسردگی درون‌زا به چه معنا است؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/830298/افسردگی-درون-زا-به-چه-معنا-است">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/830298/%D8%A7%D9%81%D8%B3%D8%B1%D8%AF%DA%AF%DB%8C-%D8%AF%D8%B1%D9%88%D9%86-%D8%B2%D8%A7-%D8%A8%D9%87-%DA%86%D9%87-%D9%85%D8%B9%D9%86%D8%A7-%D8%A7%D8%B3%D8%AA" target="_blank" title="۶ روز قبل">افسردگی درون‌زا به چه معنا است؟</a>
        
    </h3>
        <p>افسردگی درون زا یک اصطلاح قدیمی است که در گذشته زمانی که در تشخیص افسردگی آن را به دو نوع درون‌زا یا برون‌زا (که واکنشی نیز نامیده می‌شود) تقسیم می‌کردند، به کار می‌رفت.
        </p>
        <time title="یکشنبه ۱۵ بهمن ۱۴۰۲ - ۱۹:۳۰"><a href="/news/830298/%D8%A7%D9%81%D8%B3%D8%B1%D8%AF%DA%AF%DB%8C-%D8%AF%D8%B1%D9%88%D9%86-%D8%B2%D8%A7-%D8%A8%D9%87-%DA%86%D9%87-%D9%85%D8%B9%D9%86%D8%A7-%D8%A7%D8%B3%D8%AA">۶ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/829327/اختلال-تعادل-می-تواند-نشانه-ای-از-بیماری-های-وخیم-تر-باشد" title="۱۰ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/31/1/4969565.jpg" alt="اختلال تعادل می‌تواند نشانه‌ای از بیماری‌های وخیم‌تر باشد" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/829327/%D8%A7%D8%AE%D8%AA%D9%84%D8%A7%D9%84-%D8%AA%D8%B9%D8%A7%D8%AF%D9%84-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D8%AF-%D9%86%D8%B4%D8%A7%D9%86%D9%87-%D8%A7%DB%8C-%D8%A7%D8%B2-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C-%D9%88%D8%AE%DB%8C%D9%85-%D8%AA%D8%B1-%D8%A8%D8%A7%D8%B4%D8%AF" target="_blank" title="۱۰ روز قبل">اختلال تعادل می‌تواند نشانه‌ای از بیماری‌های وخیم‌تر باشد</a>
        
    </h3>
        <p>گرچه برخی از افراد به طور معمول نسبت به دیگران به اصطلاح دست‌وپاچلفتی‌تر هستند، اما اگر به طور مرتب تعادلتان را از دست بدهید، ممکن است دچار یک مشکل بهداشتی وخیم‌تر شده باشید.
        </p>
        <time title="چهارشنبه ۱۱ بهمن ۱۴۰۲ - ۱۸:۱۷"><a href="/news/829327/%D8%A7%D8%AE%D8%AA%D9%84%D8%A7%D9%84-%D8%AA%D8%B9%D8%A7%D8%AF%D9%84-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D8%AF-%D9%86%D8%B4%D8%A7%D9%86%D9%87-%D8%A7%DB%8C-%D8%A7%D8%B2-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C-%D9%88%D8%AE%DB%8C%D9%85-%D8%AA%D8%B1-%D8%A8%D8%A7%D8%B4%D8%AF">۱۰ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/828986/ایلان-ماسک-می-گوید-نخستین-بیمار-ایمپلنت-مغزی-نورالینک-را-دریافت" title="۱۱ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/30/1/4968825.jpg" alt="ایلان ماسک می‌گوید نخستین بیمار ایمپلنت مغزی «نورالینک» را دریافت کرده است" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/828986/%D8%A7%DB%8C%D9%84%D8%A7%D9%86-%D9%85%D8%A7%D8%B3%DA%A9-%D9%85%DB%8C-%DA%AF%D9%88%DB%8C%D8%AF-%D9%86%D8%AE%D8%B3%D8%AA%DB%8C%D9%86-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1-%D8%A7%DB%8C%D9%85%D9%BE%D9%84%D9%86%D8%AA-%D9%85%D8%BA%D8%B2%DB%8C-%D9%86%D9%88%D8%B1%D8%A7%D9%84%DB%8C%D9%86%DA%A9-%D8%B1%D8%A7-%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA" target="_blank" title="۱۱ روز قبل">ایلان ماسک می‌گوید نخستین بیمار ایمپلنت مغزی «نورالینک» را دریافت کرده است</a>
        
    </h3>
        <p>ایلان ماسک، کارآفرین صاحب شرکت «نورالینک» ادعا کرده است که نخستین بیمار انسانی ایمپلنت مغزی ساخت این شرکت را دریافت کرده است.
        </p>
        <time title="سه‌شنبه ۱۰ بهمن ۱۴۰۲ - ۱۶:۴۵"><a href="/news/828986/%D8%A7%DB%8C%D9%84%D8%A7%D9%86-%D9%85%D8%A7%D8%B3%DA%A9-%D9%85%DB%8C-%DA%AF%D9%88%DB%8C%D8%AF-%D9%86%D8%AE%D8%B3%D8%AA%DB%8C%D9%86-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1-%D8%A7%DB%8C%D9%85%D9%BE%D9%84%D9%86%D8%AA-%D9%85%D8%BA%D8%B2%DB%8C-%D9%86%D9%88%D8%B1%D8%A7%D9%84%DB%8C%D9%86%DA%A9-%D8%B1%D8%A7-%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA">۱۱ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/828763/بنگلادش-نخستین-مرگ-ناشی-از-ویروس-مغزی-نیپا-را-گزارش-می-کند" title="۱۱ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/30/1/4968388.jpg" alt="بنگلادش نخستین مرگ ناشی از ویروس مغزی نیپا را گزارش می‌کند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/828763/%D8%A8%D9%86%DA%AF%D9%84%D8%A7%D8%AF%D8%B4-%D9%86%D8%AE%D8%B3%D8%AA%DB%8C%D9%86-%D9%85%D8%B1%DA%AF-%D9%86%D8%A7%D8%B4%DB%8C-%D8%A7%D8%B2-%D9%88%DB%8C%D8%B1%D9%88%D8%B3-%D9%85%D8%BA%D8%B2%DB%8C-%D9%86%DB%8C%D9%BE%D8%A7-%D8%B1%D8%A7-%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4-%D9%85%DB%8C-%DA%A9%D9%86%D8%AF" target="_blank" title="۱۱ روز قبل">بنگلادش نخستین مرگ ناشی از ویروس مغزی نیپا را گزارش می‌کند</a>
        
    </h3>
        <p>بنگلادش در روز دوشنبه اولین مرگ و میر خود در سال جدید ناشی از ویروس مخزب مغزی «نیپا» را در مردی پس از نوشیدن عصاره خرمای خام گزارش کرد.
        </p>
        <time title="سه‌شنبه ۱۰ بهمن ۱۴۰۲ - ۰۰:۱۸"><a href="/news/828763/%D8%A8%D9%86%DA%AF%D9%84%D8%A7%D8%AF%D8%B4-%D9%86%D8%AE%D8%B3%D8%AA%DB%8C%D9%86-%D9%85%D8%B1%DA%AF-%D9%86%D8%A7%D8%B4%DB%8C-%D8%A7%D8%B2-%D9%88%DB%8C%D8%B1%D9%88%D8%B3-%D9%85%D8%BA%D8%B2%DB%8C-%D9%86%DB%8C%D9%BE%D8%A7-%D8%B1%D8%A7-%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4-%D9%85%DB%8C-%DA%A9%D9%86%D8%AF">۱۱ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/828394/پزشکان-می-گویند-پیش-آگهی-سرطان-پروستات-وزیر-دفاع-آمریکا-عالی" title="۱۳ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/28/1/4967799.jpg" alt="پزشکان می‌گویند پیش‌آگهی سرطان پروستات وزیر دفاع آمریکا عالی است" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/828394/%D9%BE%D8%B2%D8%B4%DA%A9%D8%A7%D9%86-%D9%85%DB%8C-%DA%AF%D9%88%DB%8C%D9%86%D8%AF-%D9%BE%DB%8C%D8%B4-%D8%A2%DA%AF%D9%87%DB%8C-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%BE%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%D8%AA-%D9%88%D8%B2%DB%8C%D8%B1-%D8%AF%D9%81%D8%A7%D8%B9-%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7-%D8%B9%D8%A7%D9%84%DB%8C" target="_blank" title="۱۳ روز قبل">پزشکان می‌گویند پیش‌آگهی سرطان پروستات وزیر دفاع آمریکا عالی است</a>
        
    </h3>
        <p>پزشکان می‌گویند لوید آستین، وزیر دفاع آمریکا پیش‌آگهی بیماری سرطان پروستات وزیر دفاع لوید آستین عالی است و پس از ویزیت پیگیری او در روز جمعه دیگر نیاز به درمان‌های بیشتر نیست.
        </p>
        <time title="یکشنبه ۸ بهمن ۱۴۰۲ - ۱۸:۳۵"><a href="/news/828394/%D9%BE%D8%B2%D8%B4%DA%A9%D8%A7%D9%86-%D9%85%DB%8C-%DA%AF%D9%88%DB%8C%D9%86%D8%AF-%D9%BE%DB%8C%D8%B4-%D8%A2%DA%AF%D9%87%DB%8C-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%BE%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%D8%AA-%D9%88%D8%B2%DB%8C%D8%B1-%D8%AF%D9%81%D8%A7%D8%B9-%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7-%D8%B9%D8%A7%D9%84%DB%8C">۱۳ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/828050/درباره-اختلال-های-سوماتوفرم-یا-شبه-جسمانی-هنگامی-که-درگیری-های" title="۱۴ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/27/1/4967193.jpg" alt="درباره اختلال‌های سوماتوفرم یا شبه‌جسمانی: هنگامی که درگیری‌های ذهنی شما نمود جسمی پیدا می‌کنند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/828050/درباره-اختلال-های-سوماتوفرم-یا-شبه-جسمانی-هنگامی-که-درگیری-های">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/828050/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%A7%D8%AE%D8%AA%D9%84%D8%A7%D9%84-%D9%87%D8%A7%DB%8C-%D8%B3%D9%88%D9%85%D8%A7%D8%AA%D9%88%D9%81%D8%B1%D9%85-%DB%8C%D8%A7-%D8%B4%D8%A8%D9%87-%D8%AC%D8%B3%D9%85%D8%A7%D9%86%DB%8C-%D9%87%D9%86%DA%AF%D8%A7%D9%85%DB%8C-%DA%A9%D9%87-%D8%AF%D8%B1%DA%AF%DB%8C%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C" target="_blank" title="۱۴ روز قبل">درباره اختلال‌های سوماتوفرم یا شبه‌جسمانی: هنگامی که درگیری‌های ذهنی شما نمود جسمی پیدا می‌کنند</a>
        
    </h3>
        <p>تصور کنید علائم واضحی به شکل نشانه‌های بدنی و ناراحتی‌های جسمی مانند درد، مشکلات گوارشی، مشکل تنفسی، گرفتگی‌های عضلانی یا هر نوع دیگری از علائم جسمانی - را تجربه می‌کنید، اما در مراجعه با درمان شدن به شما گفته می‌شود شما دچار هیچ مشکل پزشکی نیستید.
        </p>
        <time title="شنبه ۷ بهمن ۱۴۰۲ - ۱۷:۵۳"><a href="/news/828050/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%A7%D8%AE%D8%AA%D9%84%D8%A7%D9%84-%D9%87%D8%A7%DB%8C-%D8%B3%D9%88%D9%85%D8%A7%D8%AA%D9%88%D9%81%D8%B1%D9%85-%DB%8C%D8%A7-%D8%B4%D8%A8%D9%87-%D8%AC%D8%B3%D9%85%D8%A7%D9%86%DB%8C-%D9%87%D9%86%DA%AF%D8%A7%D9%85%DB%8C-%DA%A9%D9%87-%D8%AF%D8%B1%DA%AF%DB%8C%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C">۱۴ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/826830/دانشمندان-ممکن-است-علت-علائم-آزارنده-طول-کشنده-پس-از-رفع-عفونت" title="۱۹ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/22/1/4965081.jpg" alt="دانشمندان ممکن است علت علائم آزارنده طول کشنده پس از رفع عفونت کرونا را کشف کرده باشند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/826830/%D8%AF%D8%A7%D9%86%D8%B4%D9%85%D9%86%D8%AF%D8%A7%D9%86-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%D8%B9%D9%84%D8%AA-%D8%B9%D9%84%D8%A7%D8%A6%D9%85-%D8%A2%D8%B2%D8%A7%D8%B1%D9%86%D8%AF%D9%87-%D8%B7%D9%88%D9%84-%DA%A9%D8%B4%D9%86%D8%AF%D9%87-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%B1%D9%81%D8%B9-%D8%B9%D9%81%D9%88%D9%86%D8%AA" target="_blank" title="۱۹ روز قبل">دانشمندان ممکن است علت علائم آزارنده طول کشنده پس از رفع عفونت کرونا را کشف کرده باشند</a>
        
    </h3>
        <p>پژوهشگران می‌گویند پس از شناسایی تغییراتی در پروتئین‌های خونی افرادی که دچار «کووید درازمدت»، علائم آزارنده طول کشنده پس از عفونت کروناویروس، هستند، ممکن است در مسیر شناخت علت این عارضه قرار گرفته باشند.
        </p>
        <time title="دوشنبه ۲ بهمن ۱۴۰۲ - ۲۲:۰۲"><a href="/news/826830/%D8%AF%D8%A7%D9%86%D8%B4%D9%85%D9%86%D8%AF%D8%A7%D9%86-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%D8%B9%D9%84%D8%AA-%D8%B9%D9%84%D8%A7%D8%A6%D9%85-%D8%A2%D8%B2%D8%A7%D8%B1%D9%86%D8%AF%D9%87-%D8%B7%D9%88%D9%84-%DA%A9%D8%B4%D9%86%D8%AF%D9%87-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%B1%D9%81%D8%B9-%D8%B9%D9%81%D9%88%D9%86%D8%AA">۱۹ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/826411/علت-اصلی-شوره-سر-آن-چیزی-نیست-که-فکر-می-کنید" title="۲۰ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/21/1/4964275.jpg" alt="علت اصلی شوره سر آن چیزی نیست که فکر می‌کنید" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/826411/%D8%B9%D9%84%D8%AA-%D8%A7%D8%B5%D9%84%DB%8C-%D8%B4%D9%88%D8%B1%D9%87-%D8%B3%D8%B1-%D8%A2%D9%86-%DA%86%DB%8C%D8%B2%DB%8C-%D9%86%DB%8C%D8%B3%D8%AA-%DA%A9%D9%87-%D9%81%DA%A9%D8%B1-%D9%85%DB%8C-%DA%A9%D9%86%DB%8C%D8%AF" target="_blank" title="۲۰ روز قبل">علت اصلی شوره سر آن چیزی نیست که فکر می‌کنید</a>
        
    </h3>
        <p>هنگامی که خودتان را در آینه برانداز می‌کنید، دیدن پوسته‌های ریز سفید یا خاکستری که در میان موهای تیره شما به چشم می‌خورند، ممکن است شما را ناراحت کند، خصوص اگر دوره‌های متناوب رهایی از شوره سر و بازگشت دوباره آن را تجربه کنید.
        </p>
        <time title="یکشنبه ۱ بهمن ۱۴۰۲ - ۱۸:۵۲"><a href="/news/826411/%D8%B9%D9%84%D8%AA-%D8%A7%D8%B5%D9%84%DB%8C-%D8%B4%D9%88%D8%B1%D9%87-%D8%B3%D8%B1-%D8%A2%D9%86-%DA%86%DB%8C%D8%B2%DB%8C-%D9%86%DB%8C%D8%B3%D8%AA-%DA%A9%D9%87-%D9%81%DA%A9%D8%B1-%D9%85%DB%8C-%DA%A9%D9%86%DB%8C%D8%AF">۲۰ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/826068/یک-واکسن-درمانی-برای-یک-سرطان-پوستی-مرگبار-نتایج-امیدوارکننده-ای" title="۲۱ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/20/1/4963628.jpg" alt="یک واکسن درمانی برای یک سرطان پوستی مرگبار نتایج امیدوارکننده‌ای داشته است" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/826068/%DB%8C%DA%A9-%D9%88%D8%A7%DA%A9%D8%B3%D9%86-%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%DB%8C%DA%A9-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%BE%D9%88%D8%B3%D8%AA%DB%8C-%D9%85%D8%B1%DA%AF%D8%A8%D8%A7%D8%B1-%D9%86%D8%AA%D8%A7%DB%8C%D8%AC-%D8%A7%D9%85%DB%8C%D8%AF%D9%88%D8%A7%D8%B1%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D8%A7%DB%8C" target="_blank" title="۲۱ روز قبل">یک واکسن درمانی برای یک سرطان پوستی مرگبار نتایج امیدوارکننده‌ای داشته است</a>
        
    </h3>
        <p>یک واکسن درمانی سرطان برای اشکال پیشرفته ملانوم، یک سرطان پوستی مرگبار که از سلول‌های رنگدانه‌ای پوست منشأ می‌گیرد، به زودی به مرحله نهایی یا سوم کارآزمایی بالینی آزمایش خواهد شد
        </p>
        <time title="شنبه ۳۰ دی ۱۴۰۲ - ۱۹:۵۴"><a href="/news/826068/%DB%8C%DA%A9-%D9%88%D8%A7%DA%A9%D8%B3%D9%86-%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%DB%8C%DA%A9-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%BE%D9%88%D8%B3%D8%AA%DB%8C-%D9%85%D8%B1%DA%AF%D8%A8%D8%A7%D8%B1-%D9%86%D8%AA%D8%A7%DB%8C%D8%AC-%D8%A7%D9%85%DB%8C%D8%AF%D9%88%D8%A7%D8%B1%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D8%A7%DB%8C">۲۱ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/825082/چطور-قلب-مصنوعی-ساخته-شد" title="۲۵ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/16/1/4961994.jpg" alt="چطور قلب مصنوعی ساخته شد؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/825082/%DA%86%D8%B7%D9%88%D8%B1-%D9%82%D9%84%D8%A8-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D8%B3%D8%A7%D8%AE%D8%AA%D9%87-%D8%B4%D8%AF" target="_blank" title="۲۵ روز قبل">چطور قلب مصنوعی ساخته شد؟</a>
        
    </h3>
        <p>مفهوم قلب مصنوعی قرن‌هاست که مطرح بوده است، اما تا دهه ۱۹۵۰ تحقیقات جدی در این زمینه آغاز نشد.
        </p>
        <time title="سه‌شنبه ۲۶ دی ۱۴۰۲ - ۲۰:۲۱"><a href="/news/825082/%DA%86%D8%B7%D9%88%D8%B1-%D9%82%D9%84%D8%A8-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D8%B3%D8%A7%D8%AE%D8%AA%D9%87-%D8%B4%D8%AF">۲۵ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/824346/یک-کپسول-ارتعاش-کننده-ممکن-است-گام-بزرگ-بعدی-در-مسیر-درمان-چاقی" title="۲۷ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/14/1/4960590.jpg" alt="یک کپسول ارتعاش‌کننده ممکن است  گام بزرگ بعدی در مسیر درمان چاقی باشد" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/824346/%DB%8C%DA%A9-%DA%A9%D9%BE%D8%B3%D9%88%D9%84-%D8%A7%D8%B1%D8%AA%D8%B9%D8%A7%D8%B4-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%DA%AF%D8%A7%D9%85-%D8%A8%D8%B2%D8%B1%DA%AF-%D8%A8%D8%B9%D8%AF%DB%8C-%D8%AF%D8%B1-%D9%85%D8%B3%DB%8C%D8%B1-%D8%AF%D8%B1%D9%85%D8%A7%D9%86-%DA%86%D8%A7%D9%82%DB%8C" target="_blank" title="۲۷ روز قبل">یک کپسول ارتعاش‌کننده ممکن است  گام بزرگ بعدی در مسیر درمان چاقی باشد</a>
        
    </h3>
        <p>پژوهشگران موسسه فناوری ماساچوست (ام‌آی‌تی) در آمریکا یک «کپسول مرتعش‌شونده» - به اندازه یک کپسول معمولی مولتی‌ویتامین، ساخته‌اند که بالقوه می‌تواند مصرف غذا را در افراد تا ۴۰ درصد کاهش دهد.
        </p>
        <time title="یکشنبه ۲۴ دی ۱۴۰۲ - ۱۸:۴۶"><a href="/news/824346/%DB%8C%DA%A9-%DA%A9%D9%BE%D8%B3%D9%88%D9%84-%D8%A7%D8%B1%D8%AA%D8%B9%D8%A7%D8%B4-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%DA%AF%D8%A7%D9%85-%D8%A8%D8%B2%D8%B1%DA%AF-%D8%A8%D8%B9%D8%AF%DB%8C-%D8%AF%D8%B1-%D9%85%D8%B3%DB%8C%D8%B1-%D8%AF%D8%B1%D9%85%D8%A7%D9%86-%DA%86%D8%A7%D9%82%DB%8C">۲۷ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/824042/آیا-دیدن-ماده-لزج-مخاطی-در-ادرار-طبیعی-است" title="۲۸ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/13/1/4960092.jpg" alt="آیا دیدن ماده لزج مخاطی در ادرار طبیعی است؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/824042/آیا-دیدن-ماده-لزج-مخاطی-در-ادرار-طبیعی-است">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/824042/%D8%A2%DB%8C%D8%A7-%D8%AF%DB%8C%D8%AF%D9%86-%D9%85%D8%A7%D8%AF%D9%87-%D9%84%D8%B2%D8%AC-%D9%85%D8%AE%D8%A7%D8%B7%DB%8C-%D8%AF%D8%B1-%D8%A7%D8%AF%D8%B1%D8%A7%D8%B1-%D8%B7%D8%A8%DB%8C%D8%B9%DB%8C-%D8%A7%D8%B3%D8%AA" target="_blank" title="۲۸ روز قبل">آیا دیدن ماده لزج مخاطی در ادرار طبیعی است؟</a>
        
    </h3>
        <p>موکوس یا مخاط ادراری ماده لزجی است که طور مداوم به‌وسیله سلول‌های غشای مخاطی در مجرای ادرار تولید می‌شود تا باکتری‌هایی را که ممکن است موجب عفونت شوند، به بیرون براند.
        </p>
        <time title="شنبه ۲۳ دی ۱۴۰۲ - ۱۹:۰۲"><a href="/news/824042/%D8%A2%DB%8C%D8%A7-%D8%AF%DB%8C%D8%AF%D9%86-%D9%85%D8%A7%D8%AF%D9%87-%D9%84%D8%B2%D8%AC-%D9%85%D8%AE%D8%A7%D8%B7%DB%8C-%D8%AF%D8%B1-%D8%A7%D8%AF%D8%B1%D8%A7%D8%B1-%D8%B7%D8%A8%DB%8C%D8%B9%DB%8C-%D8%A7%D8%B3%D8%AA">۲۸ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/823459/نکته-بهداشتی-روز-آیا-برای-سرطان-پروستات-باید-آزمایش-PSA-بدهید" title="۳۱ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/10/1/4959102.jpg" alt="نکته بهداشتی روز: آیا برای سرطان پروستات باید آزمایش PSA بدهید؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/823459/%D9%86%DA%A9%D8%AA%D9%87-%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C-%D8%B1%D9%88%D8%B2-%D8%A2%DB%8C%D8%A7-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%BE%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%D8%AA-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4-PSA-%D8%A8%D8%AF%D9%87%DB%8C%D8%AF" target="_blank" title="۳۱ روز قبل">نکته بهداشتی روز: آیا برای سرطان پروستات باید آزمایش PSA بدهید؟</a>
        
    </h3>
        <p>آنتی‌ژن اختصاصی پروستات (PSA) یک پروتئین تولید شده توسط غده پروستات است. این پروتئین هم در بافت سالم پروستات و هم در بافت سرطانی آن یافت می‌شود. آزمایش خون PSA میزان این ماده را در خون اندازه‌گیری می‌کند.
        </p>
        <time title="چهارشنبه ۲۰ دی ۱۴۰۲ - ۱۹:۴۳"><a href="/news/823459/%D9%86%DA%A9%D8%AA%D9%87-%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C-%D8%B1%D9%88%D8%B2-%D8%A2%DB%8C%D8%A7-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%BE%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%D8%AA-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4-PSA-%D8%A8%D8%AF%D9%87%DB%8C%D8%AF">۳۱ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/823415/یافته-های-نگران-کننده-یک-بررسی-جدید-میزان-بالای-ذرات-ریز-پلاستیکی" title="۳۱ روز قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/10/1/4959043.jpg" alt="یافته‌های نگران‌کننده یک بررسی جدید: میزان بالای ذرات ریز پلاستیکی در آب‌های بطری‌شده" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/823415/%DB%8C%D8%A7%D9%81%D8%AA%D9%87-%D9%87%D8%A7%DB%8C-%D9%86%DA%AF%D8%B1%D8%A7%D9%86-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%DB%8C%DA%A9-%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D9%85%DB%8C%D8%B2%D8%A7%D9%86-%D8%A8%D8%A7%D9%84%D8%A7%DB%8C-%D8%B0%D8%B1%D8%A7%D8%AA-%D8%B1%DB%8C%D8%B2-%D9%BE%D9%84%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9%DB%8C" target="_blank" title="۳۱ روز قبل">یافته‌های نگران‌کننده یک بررسی جدید: میزان بالای ذرات ریز پلاستیکی در آب‌های بطری‌شده</a>
        
    </h3>
        <p>پژوهشگران آمریکایی در یک بررسی جدید پیشگام کشف کرده‌اند که آب بطری شده فروخته‌شده در فروشگاه‌ها می‌تواند حاوی ۱۰ تا ۱۰۰ برابر بیشتر ذرات پلاستیکی نسبت به برآوردهای قبلی باشد - نانوذراتی که آن‌قدر کوچک هستند که در زیر میکروسکوپ‌های عادی قابل‌مشاهده نیستند.
        </p>
        <time title="چهارشنبه ۲۰ دی ۱۴۰۲ - ۱۷:۰۴"><a href="/news/823415/%DB%8C%D8%A7%D9%81%D8%AA%D9%87-%D9%87%D8%A7%DB%8C-%D9%86%DA%AF%D8%B1%D8%A7%D9%86-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%DB%8C%DA%A9-%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D9%85%DB%8C%D8%B2%D8%A7%D9%86-%D8%A8%D8%A7%D9%84%D8%A7%DB%8C-%D8%B0%D8%B1%D8%A7%D8%AA-%D8%B1%DB%8C%D8%B2-%D9%BE%D9%84%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9%DB%8C">۳۱ روز قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/823145/ماسک-زدن-در-این-کشور-دوباره-اجباری-می-شود-آمریکا-در-میانه-دومین" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/09/1/4958609.jpg" alt="ماسک زدن در این کشور دوباره اجباری می‌شود | آمریکا در میانه دومین موج شیوع کرونا از لحاظ گستردگی است" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/823145/%D9%85%D8%A7%D8%B3%DA%A9-%D8%B2%D8%AF%D9%86-%D8%AF%D8%B1-%D8%A7%DB%8C%D9%86-%DA%A9%D8%B4%D9%88%D8%B1-%D8%AF%D9%88%D8%A8%D8%A7%D8%B1%D9%87-%D8%A7%D8%AC%D8%A8%D8%A7%D8%B1%DB%8C-%D9%85%DB%8C-%D8%B4%D9%88%D8%AF-%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7-%D8%AF%D8%B1-%D9%85%DB%8C%D8%A7%D9%86%D9%87-%D8%AF%D9%88%D9%85%DB%8C%D9%86" target="_blank" title="۱ ماه قبل">ماسک زدن در این کشور دوباره اجباری می‌شود | آمریکا در میانه دومین موج شیوع کرونا از لحاظ گستردگی است</a>
        
    </h3>
        <p>ماسک زدن در بیمارستان‌ها و مراکز مراقبت بهداشتی اسپانیا پس از بالا گرفتن موارد عفونت‌های تنفسی از روز چهارشنبه اجباری خواهد شد ,
        </p>
        <time title="سه‌شنبه ۱۹ دی ۱۴۰۲ - ۱۹:۱۶"><a href="/news/823145/%D9%85%D8%A7%D8%B3%DA%A9-%D8%B2%D8%AF%D9%86-%D8%AF%D8%B1-%D8%A7%DB%8C%D9%86-%DA%A9%D8%B4%D9%88%D8%B1-%D8%AF%D9%88%D8%A8%D8%A7%D8%B1%D9%87-%D8%A7%D8%AC%D8%A8%D8%A7%D8%B1%DB%8C-%D9%85%DB%8C-%D8%B4%D9%88%D8%AF-%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7-%D8%AF%D8%B1-%D9%85%DB%8C%D8%A7%D9%86%D9%87-%D8%AF%D9%88%D9%85%DB%8C%D9%86">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/822864/دیابت-۱-۵-بسیاری-از-بیماران-دیابت-نوع-۲-ممکن-است-درواقع-دچار" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/09/1/4958013.jpg" alt="دیابت ۱.۵: بسیاری از بیماران دیابت نوع ۲ ممکن است درواقع دچار شکل دیگری از دیابت باشند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/822864/دیابت-۱-۵-بسیاری-از-بیماران-دیابت-نوع-۲-ممکن-است-درواقع-دچار">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/822864/%D8%AF%DB%8C%D8%A7%D8%A8%D8%AA-%DB%B1-%DB%B5-%D8%A8%D8%B3%DB%8C%D8%A7%D8%B1%DB%8C-%D8%A7%D8%B2-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%A7%D9%86-%D8%AF%DB%8C%D8%A7%D8%A8%D8%AA-%D9%86%D9%88%D8%B9-%DB%B2-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%D8%AF%D8%B1%D9%88%D8%A7%D9%82%D8%B9-%D8%AF%DA%86%D8%A7%D8%B1" target="_blank" title="۱ ماه قبل">دیابت ۱.۵: بسیاری از بیماران دیابت نوع ۲ ممکن است درواقع دچار شکل دیگری از دیابت باشند</a>
        
    </h3>
        <p>دیابت به‌طورمعمول به دو نوع تقسیم می‌شود:  نوع ۱– یک بیماری خودایمنی که نوجوانان را دچار خود می‌کند و نوع ۲ که با چاقی ارتباط دارد و در سنین بالاتر تشخیص داده می‌شود- اما بسیاری از افرادی که دچار دیابت نوع ۲ تشخیص داده می‌شوند، درواقع ممکن است به شکل متفاوتی از این بیماری مبتلا باشند.
        </p>
        <time title="سه‌شنبه ۱۹ دی ۱۴۰۲ - ۰۰:۰۹"><a href="/news/822864/%D8%AF%DB%8C%D8%A7%D8%A8%D8%AA-%DB%B1-%DB%B5-%D8%A8%D8%B3%DB%8C%D8%A7%D8%B1%DB%8C-%D8%A7%D8%B2-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%A7%D9%86-%D8%AF%DB%8C%D8%A7%D8%A8%D8%AA-%D9%86%D9%88%D8%B9-%DB%B2-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%D8%AF%D8%B1%D9%88%D8%A7%D9%82%D8%B9-%D8%AF%DA%86%D8%A7%D8%B1">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/822488/آیا-ممکن-است-بدون-سابقه-قبلی-بوی-بدنتان-بد-شود" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/07/1/4957247.jpg" alt="آیا ممکن است بدون سابقه قبلی بوی بدنتان بد شود؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/822488/آیا-ممکن-است-بدون-سابقه-قبلی-بوی-بدنتان-بد-شود">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/822488/%D8%A2%DB%8C%D8%A7-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%D8%A8%D8%AF%D9%88%D9%86-%D8%B3%D8%A7%D8%A8%D9%82%D9%87-%D9%82%D8%A8%D9%84%DB%8C-%D8%A8%D9%88%DB%8C-%D8%A8%D8%AF%D9%86%D8%AA%D8%A7%D9%86-%D8%A8%D8%AF-%D8%B4%D9%88%D8%AF" target="_blank" title="۱ ماه قبل">آیا ممکن است بدون سابقه قبلی بوی بدنتان بد شود؟</a>
        
    </h3>
        <p>بوی بد بدن یا به اصطلاح پزشکی «بروموهیدروزیس» ناشی از تجزیه عرق به‌وسیله باکتری‌های روی پوست است که روی بدن همه افراد وجود دارند و بخشی از میکروبیوم طبیعی بدن هستند.
        </p>
        <time title="یکشنبه ۱۷ دی ۱۴۰۲ - ۱۸:۳۸"><a href="/news/822488/%D8%A2%DB%8C%D8%A7-%D9%85%D9%85%DA%A9%D9%86-%D8%A7%D8%B3%D8%AA-%D8%A8%D8%AF%D9%88%D9%86-%D8%B3%D8%A7%D8%A8%D9%82%D9%87-%D9%82%D8%A8%D9%84%DB%8C-%D8%A8%D9%88%DB%8C-%D8%A8%D8%AF%D9%86%D8%AA%D8%A7%D9%86-%D8%A8%D8%AF-%D8%B4%D9%88%D8%AF">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/822186/کشف-رده-جدیدی-از-آنتی-بیوتیک-ها-که-باکتری-های-مقاوم-را-نابود" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/06/1/4956641.jpg" alt="کشف رده جدیدی از آنتی‌بیوتیک‌ها که باکتری‌های مقاوم را نابود می‌کند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/822186/%DA%A9%D8%B4%D9%81-%D8%B1%D8%AF%D9%87-%D8%AC%D8%AF%DB%8C%D8%AF%DB%8C-%D8%A7%D8%B2-%D8%A2%D9%86%D8%AA%DB%8C-%D8%A8%DB%8C%D9%88%D8%AA%DB%8C%DA%A9-%D9%87%D8%A7-%DA%A9%D9%87-%D8%A8%D8%A7%DA%A9%D8%AA%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C-%D9%85%D9%82%D8%A7%D9%88%D9%85-%D8%B1%D8%A7-%D9%86%D8%A7%D8%A8%D9%88%D8%AF" target="_blank" title="۱ ماه قبل">کشف رده جدیدی از آنتی‌بیوتیک‌ها که باکتری‌های مقاوم را نابود می‌کند</a>
        
    </h3>
        <p>دانشمندان سوئیسی اعلام کردند که رده جدیدی از آنتی‌بیوتیک‌ها را کشف کرده‌اند که نشان داده شده است در برابر باکتری‌های مرگبار مقاوم به داروهای فعلی موثر هستند.
        </p>
        <time title="یکشنبه ۱۷ دی ۱۴۰۲ - ۰۰:۵۲"><a href="/news/822186/%DA%A9%D8%B4%D9%81-%D8%B1%D8%AF%D9%87-%D8%AC%D8%AF%DB%8C%D8%AF%DB%8C-%D8%A7%D8%B2-%D8%A2%D9%86%D8%AA%DB%8C-%D8%A8%DB%8C%D9%88%D8%AA%DB%8C%DA%A9-%D9%87%D8%A7-%DA%A9%D9%87-%D8%A8%D8%A7%DA%A9%D8%AA%D8%B1%DB%8C-%D9%87%D8%A7%DB%8C-%D9%85%D9%82%D8%A7%D9%88%D9%85-%D8%B1%D8%A7-%D9%86%D8%A7%D8%A8%D9%88%D8%AF">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/821561/اگر-از-کولونوسکوپی-می-ترسید-آزمایش-های-ساده-تری-برای-غربالگری" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/03/1/4955650.jpg" alt="اگر از کولونوسکوپی می‌ترسید، آزمایش‌های ساده‌تری برای غربالگری سرطان روده بزرگ دارند به بازار می‌آیند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/821561/%D8%A7%DA%AF%D8%B1-%D8%A7%D8%B2-%DA%A9%D9%88%D9%84%D9%88%D9%86%D9%88%D8%B3%DA%A9%D9%88%D9%BE%DB%8C-%D9%85%DB%8C-%D8%AA%D8%B1%D8%B3%DB%8C%D8%AF-%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4-%D9%87%D8%A7%DB%8C-%D8%B3%D8%A7%D8%AF%D9%87-%D8%AA%D8%B1%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%BA%D8%B1%D8%A8%D8%A7%D9%84%DA%AF%D8%B1%DB%8C" target="_blank" title="۱ ماه قبل">اگر از کولونوسکوپی می‌ترسید، آزمایش‌های ساده‌تری برای غربالگری سرطان روده بزرگ دارند به بازار می‌آیند</a>
        
    </h3>
        <p>سرطان روده بزرگ در صورت تشخیص زودهنگام به خوبی قابل‌درمان است، اما هرسال شمار زیادی از افراد به علت تشخیص دیرهنگام این بیماری جان خود را ازدست می‌دهند، اما بسیاری از افراد به دلایل گوناگون آزمایش غربالگری برای این سرطان با کولونوسکوپی را انجام نمی‌دهند.
        </p>
        <time title="چهارشنبه ۱۳ دی ۱۴۰۲ - ۲۲:۵۶"><a href="/news/821561/%D8%A7%DA%AF%D8%B1-%D8%A7%D8%B2-%DA%A9%D9%88%D9%84%D9%88%D9%86%D9%88%D8%B3%DA%A9%D9%88%D9%BE%DB%8C-%D9%85%DB%8C-%D8%AA%D8%B1%D8%B3%DB%8C%D8%AF-%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4-%D9%87%D8%A7%DB%8C-%D8%B3%D8%A7%D8%AF%D9%87-%D8%AA%D8%B1%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%BA%D8%B1%D8%A8%D8%A7%D9%84%DA%AF%D8%B1%DB%8C">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/821518/آیا-شیرین-کننده-های-مصنوعی-می-توانند-میکروبیوم-شما-را-تغییر-دهند" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/03/1/4955607.jpg" alt="آیا شیرین‌کننده‌های مصنوعی می‌توانند میکروبیوم شما را تغییر دهند؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/821518/%D8%A2%DB%8C%D8%A7-%D8%B4%DB%8C%D8%B1%DB%8C%D9%86-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%87%D8%A7%DB%8C-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D9%86%D8%AF-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%A8%DB%8C%D9%88%D9%85-%D8%B4%D9%85%D8%A7-%D8%B1%D8%A7-%D8%AA%D8%BA%DB%8C%DB%8C%D8%B1-%D8%AF%D9%87%D9%86%D8%AF" target="_blank" title="۱ ماه قبل">آیا شیرین‌کننده‌های مصنوعی می‌توانند میکروبیوم شما را تغییر دهند؟</a>
        
    </h3>
        <p>ممکن است فکر کنید که شیرین‌کننده‌های مصنوعی می‌توانند به شما در کاهش وزن کمک کنند، اما یک بررسی جدید نشان می‌دهد که آن‌ها برای میکروبیوم روده شما (مجموعه ارگانیسم‌های زنده                                              سودمند روده شما) خوب نیستند.
        </p>
        <time title="چهارشنبه ۱۳ دی ۱۴۰۲ - ۱۹:۵۱"><a href="/news/821518/%D8%A2%DB%8C%D8%A7-%D8%B4%DB%8C%D8%B1%DB%8C%D9%86-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%87%D8%A7%DB%8C-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D9%86%D8%AF-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%A8%DB%8C%D9%88%D9%85-%D8%B4%D9%85%D8%A7-%D8%B1%D8%A7-%D8%AA%D8%BA%DB%8C%DB%8C%D8%B1-%D8%AF%D9%87%D9%86%D8%AF">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/821475/دانشمندان-بالاخره-علت-رنگ-زرد-ادرار-را-کشف-کردند" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/03/1/4955510.jpg" alt="دانشمندان بالاخره علت رنگ زرد ادرار را کشف کردند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/821475/%D8%AF%D8%A7%D9%86%D8%B4%D9%85%D9%86%D8%AF%D8%A7%D9%86-%D8%A8%D8%A7%D9%84%D8%A7%D8%AE%D8%B1%D9%87-%D8%B9%D9%84%D8%AA-%D8%B1%D9%86%DA%AF-%D8%B2%D8%B1%D8%AF-%D8%A7%D8%AF%D8%B1%D8%A7%D8%B1-%D8%B1%D8%A7-%DA%A9%D8%B4%D9%81-%DA%A9%D8%B1%D8%AF%D9%86%D8%AF" target="_blank" title="۱ ماه قبل">دانشمندان بالاخره علت رنگ زرد ادرار را کشف کردند</a>
        
    </h3>
        <p>دانشمندان برای حدود یک قرن به دنبال یافتن دلایل دقیق رنگ زرد ادرار انسان بوده‌اند، اکنون آنها می‌گویند آنزیمی را یافته‌اند که مسئول زنجیره‌ای از وقایع است که در  نهایت این رنگ ایجاد می‌کند.
        </p>
        <time title="چهارشنبه ۱۳ دی ۱۴۰۲ - ۱۸:۲۵"><a href="/news/821475/%D8%AF%D8%A7%D9%86%D8%B4%D9%85%D9%86%D8%AF%D8%A7%D9%86-%D8%A8%D8%A7%D9%84%D8%A7%D8%AE%D8%B1%D9%87-%D8%B9%D9%84%D8%AA-%D8%B1%D9%86%DA%AF-%D8%B2%D8%B1%D8%AF-%D8%A7%D8%AF%D8%B1%D8%A7%D8%B1-%D8%B1%D8%A7-%DA%A9%D8%B4%D9%81-%DA%A9%D8%B1%D8%AF%D9%86%D8%AF">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/821160/بالا-رفتن-از-پله-ها-می-تواند-جایگزین-پیاده-روی-شود" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/02/1/4954832.jpg" alt="بالا رفتن از پله‌ها می‌تواند جایگزین پیاده‌روی شود" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/821160/%D8%A8%D8%A7%D9%84%D8%A7-%D8%B1%D9%81%D8%AA%D9%86-%D8%A7%D8%B2-%D9%BE%D9%84%D9%87-%D9%87%D8%A7-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D8%AF-%D8%AC%D8%A7%DB%8C%DA%AF%D8%B2%DB%8C%D9%86-%D9%BE%DB%8C%D8%A7%D8%AF%D9%87-%D8%B1%D9%88%DB%8C-%D8%B4%D9%88%D8%AF" target="_blank" title="۱ ماه قبل">بالا رفتن از پله‌ها می‌تواند جایگزین پیاده‌روی شود</a>
        
    </h3>
        <p>شاید شنیده باشید که برای بهبود سلامتتان لازم است دست‌کم ۱۰ هزار قدم در روز پیاده‌روی کنید، اما رسیدن به این هدف برای بسیاری از افراد مشکل است، چراکه این میزان معادل بیش از ۸ کیلومتر پیاده‌روی است.
        </p>
        <time title="سه‌شنبه ۱۲ دی ۱۴۰۲ - ۱۸:۰۷"><a href="/news/821160/%D8%A8%D8%A7%D9%84%D8%A7-%D8%B1%D9%81%D8%AA%D9%86-%D8%A7%D8%B2-%D9%BE%D9%84%D9%87-%D9%87%D8%A7-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D8%AF-%D8%AC%D8%A7%DB%8C%DA%AF%D8%B2%DB%8C%D9%86-%D9%BE%DB%8C%D8%A7%D8%AF%D9%87-%D8%B1%D9%88%DB%8C-%D8%B4%D9%88%D8%AF">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/820905/مهمترین-پیشرفت-های-پزشکی-سال-۲۰۲۳-۴-فناوری-mRNA-و-واکسن-های" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2024/01/01/1/4954199.jpg" alt="مهمترین پیشرفت‌های پزشکی سال ۲۰۲۳(۴)| فناوری mRNA و واکسن‌های سرطان" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/820905/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B4-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-mRNA-%D9%88-%D9%88%D8%A7%DA%A9%D8%B3%D9%86-%D9%87%D8%A7%DB%8C" target="_blank" title="۱ ماه قبل">مهمترین پیشرفت‌های پزشکی سال ۲۰۲۳(۴)| فناوری mRNA و واکسن‌های سرطان</a>
        
    </h3>
        <p>فناوری آران‌ای پیام‌رسان یا ام آران‌ای (mRNA) پس از نشان دادن کارآیی خود در برانگیختن پاسخ ایمنی در واکسن‌های کرونا اکنون برای برانگیختن پاسخ ایمنی بدن بر ضد سلول‌های سرطانی  نیز به کار می‌رود.
        </p>
        <time title="دوشنبه ۱۱ دی ۱۴۰۲ - ۲۳:۴۷"><a href="/news/820905/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B4-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-mRNA-%D9%88-%D9%88%D8%A7%DA%A9%D8%B3%D9%86-%D9%87%D8%A7%DB%8C">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/820572/پیشرفت-های-مهم-پزشکی-سال-۲۰۲۳-۳-هوش-مصنوعی-تشخیص-سرطان-ها" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2023/12/31/1/4953549.jpg" alt="پیشرفت‌های مهم پزشکی سال ۲۰۲۳ (۳): هوش مصنوعی تشخیص سرطان‌ها را متحول می‌کند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/820572/%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%85%D9%87%D9%85-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B3-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D8%AA%D8%B4%D8%AE%DB%8C%D8%B5-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%87%D8%A7" target="_blank" title="۱ ماه قبل">پیشرفت‌های مهم پزشکی سال ۲۰۲۳ (۳): هوش مصنوعی تشخیص سرطان‌ها را متحول می‌کند</a>
        
    </h3>
        <p>ابزارهای متکی بر هوش مصنوعی (AI) پیشرفت قابل توجهی در زمینه کمک به تشخیص زودهنگام و در نتیجه بهبود نتایج درمانی بیماران ایجاد کردند.
        </p>
        <time title="یکشنبه ۱۰ دی ۱۴۰۲ - ۲۲:۵۳"><a href="/news/820572/%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%85%D9%87%D9%85-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B3-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D8%AA%D8%B4%D8%AE%DB%8C%D8%B5-%D8%B3%D8%B1%D8%B7%D8%A7%D9%86-%D9%87%D8%A7">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/820487/مهم-ترین-پیشرفت-های-پزشکی-سال-۲۰۲۳-۲-تأیید-نخستین-دارویی" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2023/12/31/1/4953486.jpg" alt="مهم‌ترین پیشرفت‌های پزشکی سال ۲۰۲۳ (۲) | تأیید نخستین دارویی که پیشرفت بیماری آلزایمر را کند می‌کند" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/820487/%D9%85%D9%87%D9%85-%D8%AA%D8%B1%DB%8C%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B2-%D8%AA%D8%A3%DB%8C%DB%8C%D8%AF-%D9%86%D8%AE%D8%B3%D8%AA%DB%8C%D9%86-%D8%AF%D8%A7%D8%B1%D9%88%DB%8C%DB%8C" target="_blank" title="۱ ماه قبل">مهم‌ترین پیشرفت‌های پزشکی سال ۲۰۲۳ (۲) | تأیید نخستین دارویی که پیشرفت بیماری آلزایمر را کند می‌کند</a>
        
    </h3>
        <p>نخستین دارویی که علت زمینه‌ای بیماری آلزایمر را هدف قرار می‌دهد و پیشرفت این زوال عقل لاعلاج‌ تحلیل‌برنده مغز کُند می‌کند، در سال ۲۰۲۳ به تأیید رسید.
        </p>
        <time title="یکشنبه ۱۰ دی ۱۴۰۲ - ۱۸:۱۶"><a href="/news/820487/%D9%85%D9%87%D9%85-%D8%AA%D8%B1%DB%8C%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B2-%D8%AA%D8%A3%DB%8C%DB%8C%D8%AF-%D9%86%D8%AE%D8%B3%D8%AA%DB%8C%D9%86-%D8%AF%D8%A7%D8%B1%D9%88%DB%8C%DB%8C">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/820153/مهمترین-پیشرفت-های-پزشکی-سال-۲۰۲۳-۱-تایید-دو-روش-ژن-درمانی" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2023/12/30/1/4952816.jpg" alt="مهمترین پیشرفت‌های پزشکی سال ۲۰۲۳ (۱) تایید دو روش ژن‌درمانی برای درمان یک کم‌خونی ارثی مرگبار" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/820153/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B1-%D8%AA%D8%A7%DB%8C%DB%8C%D8%AF-%D8%AF%D9%88-%D8%B1%D9%88%D8%B4-%DA%98%D9%86-%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C" target="_blank" title="۱ ماه قبل">مهمترین پیشرفت‌های پزشکی سال ۲۰۲۳ (۱) تایید دو روش ژن‌درمانی برای درمان یک کم‌خونی ارثی مرگبار</a>
        
    </h3>
        <p>سال ۲۰۲۳ پر از پیشرفت‌های پزشکی بوده است از ساخت واکسن‌های جدید برای بیماری‌ها گرفته تا تولید نخستین داروها برای اختلال‌های قبلا درمان‌ناپذیر
        </p>
        <time title="شنبه ۹ دی ۱۴۰۲ - ۱۹:۴۸"><a href="/news/820153/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%B3%D8%A7%D9%84-%DB%B2%DB%B0%DB%B2%DB%B3-%DB%B1-%D8%AA%D8%A7%DB%8C%DB%8C%D8%AF-%D8%AF%D9%88-%D8%B1%D9%88%D8%B4-%DA%98%D9%86-%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                                <li class="news" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/819511/چرا-بعضی-ها-چاق-نمی-شوند" title="۱ ماه قبل">
                                                <img src="https://media.hamshahrionline.ir/d/2023/12/27/1/4951796.jpg" alt="چرا بعضی‌ها چاق نمی‌شوند؟" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h4><a target="_blank" rel="" href="/news/819511/چرا-بعضی-ها-چاق-نمی-شوند">
        نکته بهداشتی روز:
        
    </a></h4>
    <h3><a href="/news/819511/%DA%86%D8%B1%D8%A7-%D8%A8%D8%B9%D8%B6%DB%8C-%D9%87%D8%A7-%DA%86%D8%A7%D9%82-%D9%86%D9%85%DB%8C-%D8%B4%D9%88%D9%86%D8%AF" target="_blank" title="۱ ماه قبل">چرا بعضی‌ها چاق نمی‌شوند؟</a>
        
    </h3>
        <p>شاید شما هم کسانی را دیده باشید که با وجود اینکه بدون نگرانی از میزان کالری‌های دریافتی‌شان بر اساس اشتهایشان غذا می‌خورند، هیچ وقت چاق نمی‌شوند.
        </p>
        <time title="چهارشنبه ۶ دی ۱۴۰۲ - ۱۸:۱۶"><a href="/news/819511/%DA%86%D8%B1%D8%A7-%D8%A8%D8%B9%D8%B6%DB%8C-%D9%87%D8%A7-%DA%86%D8%A7%D9%82-%D9%86%D9%85%DB%8C-%D8%B4%D9%88%D9%86%D8%AF">۱ ماه قبل</a>
        </time>
</div>
                                </li>
                    </ul>
                </div>
                <footer>
        <div>
            <ul class="pagination justify-content-center">
                    <li class="page-item disabled"><span class="page-link">قبلی</span>
                    </li>
                    <li class="page-item active"><span class="page-link">۱</span>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=2&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۲</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=3&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۳</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=4&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۴</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=5&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۵</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=6&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۶</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=7&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۷</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=8&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۸</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=9&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۹</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=10&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۱۰</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=11&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">۱۱</a>
                    </li>
                    <li class="page-item "><a href="/page/archive.xhtml?wide=0&amp;ms=0&amp;pi=2&amp;kw=%D9%85%D8%AC%D9%84%D9%87+%D9%86%DA%A9%D8%AA%D9%87+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D8%B1%D9%88%D8%B2" rel="noindex next" class="page-link">بعدی</a>
                    </li>
            </ul>
        </div>
                </footer>
                
            </section>
                    </div>
                    <aside id="ads-container" class="d-none d-lg-block col-lg-3">
                    </aside>
                </div>
            </div>
        </div>
    </div>
            </div>
        
    </main>
    <footer id="footer">
        <div id="footer-menu">
            <div class="container">
                <div id="sitemap">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                    <section class="box list header-clean wrap-row col-6 col-md-3" data-conf="{&quot;tabGroup&quot;: &quot;footer-sitemap&quot;}">
                                        
                                        <div>
                                            <ul>
                                                    <li>
                                                        <div class="desc">
                                                            <h3><a href="https://www.hamshahrionline.ir/news/422003/" target="_self">درباره ما</a></h3>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="desc">
                                                            <h3><a href="https://www.hamshahrionline.ir/service/Economy/gold" target="_self">قیمت دلار، طلا و سکه</a></h3>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="desc">
                                                            <h3><a href="/news/531930/" target="_blank">تبلیغات</a></h3>
                                                        </div>
                                                    </li>
                                            </ul>
                                        </div>
                                    </section>
                                    <section class="box list header-clean wrap-row col-6 col-md-3" data-conf="{&quot;tabGroup&quot;: &quot;footer-sitemap&quot;}">
                                        
                                        <div>
                                            <ul>
                                            </ul>
                                        </div>
                                    </section>
                                    <section class="box list header-clean wrap-row col-6 col-md-3" data-conf="{&quot;tabGroup&quot;: &quot;footer-sitemap&quot;}">
                                        
                                        <div>
                                            <ul>
                                            </ul>
                                        </div>
                                    </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="responsive-tools row">
                <div class="col-12">
                    <div class="toggle-versions">
                        <a id="desktop-version" href="#" class="btn btn-info d-inline-block d-md-none">نسخه دسکتاپ</a>
                        <a id="mobile-version" href="#" class="btn btn-info d-none d-md-inline-block">نسخه موبایل</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-12"><p class="copyright-text">حقوق همشهری‌آنلاین متعلق به موسسه همشهری است</p>
<p class="copyright-text ltr">Copyright © 2020 HamshahriOnline, All rights reserved</p>
                        
                        <div class="poweredby">
                            <a title="Nastooh Saba Newsroom" target="_blank" href="http://www.nastooh.ir">
                                <img src="/resources/theme/hamshahri/img/nastooh-logo.png" width="36" alt="نستوه" />
                                طراحی و تولید: نستوه
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <script src="/resources/theme/global/js/vendor/jquery-3.6.1.min.js?_=1"></script>
    <script src="/resources/theme/global/js/vendor/slick.min.js?_=1"></script>
    <script src="/resources/theme/global/js/global-2.1.min.js?_=20220910_4"></script>
    <script src="/resources/theme/hamshahri/js/main.min.js?_=20231029"></script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-118779591-2"></script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-118779591-2');
</script>

<link rel="manifest" href="/manifest.json">
      <!-- Najva Push Notification -->
<script type="text/javascript">
      (function(){
           var now = new Date();
           var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
               "0" + now.getHours();
           var head = document.getElementsByTagName("head")[0];
           var link = document.createElement("link");
           link.rel = "stylesheet";
           link.href = "https://van.najva.com/static/cdn/css/local-messaging.css" + "?v=" + version;
           head.appendChild(link);
           var script = document.createElement("script");
           script.type = "text/javascript";
           script.async = true;
           script.src = "https://van.najva.com/static/js/scripts/hamshahrionline-website-8529-cb88df81-9341-44b1-a2e9-cab9e745d0ad.js" + "?v=" + version;
           head.appendChild(script);
           })()
</script>
<!-- END NAJVA PUSH NOTIFICATION -->
      



<script type="text/javascript">
(function () {
var now = new Date();
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.async = true;
var script_address = 'https://player.tavoos.net/jwplayer-nastooh.js';
script.charset = "utf-8";
script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() ;
script.id = "jwplayer_player_js";
script.setAttribute("meta-vast", "nastooh:vasturl");
head.appendChild(script);
})();
</script>

<div id="div_eRasanehTrustseal_87697"></div>
<script src="https://trustseal.e-rasaneh.ir/trustseal.js"></script>
<script>try{eRasaneh_Trustseal(87697, false);}catch(e){console.log(e);}</script>

    <script src="/resources/theme/global/js/select2/4.0.2/select2.full.min.js"></script>
    </body>
</html>