(function(){var a=function(i,t){return function(){return i&&(t=i(i=0)),t}};var y=function(i,t){return function(){return t||i((t={exports:{}}).exports,t),t.exports}};var c=a(function(){});var s=a(function(){});var u=a(function(){});var p=a(function(){});var l=a(function(){});var h=a(function(){});var f=a(function(){});var I=y(function(v){c();s();u();p();l();h();f();Object.defineProperty(v,"__esModule",{value:!0});v.AdditionalWidget=v.ScriptUrlType=void 0;var w;(function(i){i.es5="es5",i.es6="es6"})(w||(v.ScriptUrlType=w={}));var G=function(){function i(t,e){var n=this;if(this.additionalWidgets=t,this.urlType=e,this.additionalWidgets.length)for(var r=function(m){setTimeout(function(){n.init(n.additionalWidgets[m])},0)},o=0;o<this.additionalWidgets.length;o++)r(o)}return i.prototype.init=function(t){var e=this,n=t.widgetDivId?this.createWidgetDiv(t.id,t.widgetDivId):null,r=this.createWidgetScript(t.urls[this.urlType]),o=t.insertTo||"before";this.waitForElement(t.searchSelector).then(function(m){t.widgetDivId&&e.insertWidgetBlock(m,n,o),e.insertWidgetScript(r)})},i.prototype.createWidgetDiv=function(t,e){var n=document.createElement("div"),r=document.createElement("div"),o=e;return n.classList.add("".concat(o,"-additional")),r.id=o,n.appendChild(r),n},i.prototype.createWidgetScript=function(t){var e=document.createElement("script");return e.src=t,e.async=!0,e.crossOrigin="anonymous",e},i.prototype.insertWidgetBlock=function(t,e,n){switch(n){case"into":t.appendChild(e);break;case"before":var r=t.parentElement;r.insertBefore(e,t);break;case"after":t.insertAdjacentElement("afterend",e);break}},i.prototype.insertWidgetScript=function(t){document.head?document.head.appendChild(t):document.body.appendChild(t)},i.prototype.waitForElement=function(t){return new Promise(function(e){if(document.querySelector(t))return e(document.querySelector(t));var n=new MutationObserver(function(){document.querySelector(t)&&(e(document.querySelector(t)),n.disconnect())});n.observe(document,{childList:!0,subtree:!0})})},i}();v.AdditionalWidget=G});var _=y(function(W){c();s();u();p();l();h();f();Object.defineProperty(W,"__esModule",{value:!0});W.ReadMoreButton=void 0;var R=function(){function i(){var t;this.options=JSON.parse("{}"),!((t=this.options)===null||t===void 0)&&t.abTest?this.initWithAbTest():this.init()}return i.prototype.init=function(){typeof window.rmbOpts=="undefined"&&(window.rmbOpts=this.options,this.addReadMoreButton())},i.prototype.initWithAbTest=function(){var t=Number(this.options.abTest),e=Math.random(),n=(100-t)/2/100;e>n&&e<1-n&&(window["_mgRMB"+473218]=!0,this.init())},i.prototype.addReadMoreButton=function(){var t=document.getElementsByTagName("head")[0],e=document.createElement("script"),n="//".concat("cdn.idealmedia.io","/js/read-more/btn.js");e.async=!0,e.src=n,e.setAttribute("fetchpriority","high"),t.insertAdjacentElement("afterbegin",e)},i}();W.ReadMoreButton=R});var k=y(function(A){c();s();u();p();l();h();f();Object.defineProperty(A,"__esModule",{value:!0});var $=I(),tt=_();(function(){var i=r(),t=i?"https://jsc.idealmedia.io/i/d/idealmedia.io.1386580.es6.js":"https://jsc.idealmedia.io/i/d/idealmedia.io.1386580.es5.js";O(t),m();for(var e=["https://servicer.idealmedia.io"],n=0;n<e.length;n++)o(e[n]);function r(){try{return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"),!0}catch(g){return!1}}function o(g){var d=document.createElement("link");d.rel="preconnect",d.href=g,document.head?document.head.appendChild(d):document.body.appendChild(d)}function m(){var g=JSON.parse("[]")}function C(){}function O(g){var d=document.createElement("script");d.async="async",d.src=g,d.crossOrigin="anonymous",document.head?document.head.appendChild(d):document.body.appendChild(d)}})()});k();})();
regat-51151/weekly/"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="METEOFOR.COM.UA"/>

<link rel="image_src" href="https://mf-static.meteofor.st/misc/meteofor/og-main.png">
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image" content="https://mf-static.meteofor.st/misc/meteofor/og-main.png"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:image" content="https://mf-static.meteofor.st/misc/meteofor/og-twtg.png"/>
<meta property="vk:image" content="https://mf-static.meteofor.st/misc/meteofor/og-vk.png"/>

<link rel="alternate" href="https://meteofor.com.ua/weather-esplugues-de-llobregat-51151/weekly/" hreflang="uk">
<link rel="alternate" href="https://meteofor.com.ua/ru/weather-esplugues-de-llobregat-51151/weekly/" hreflang="ru-UA">


    <meta name="viewport" content="width=1000"/>
    <meta name="MobileOptimized" content="1000"/>

    <script>
    window.M = window.M || {}
    M.fn = {}
    M.state = {
        app: {
            lang: 'ua',
            domain: 'ua',
            subdomain: 'meteofor',
            layout: 'desktop',
            project: 'weather',
            version: 'master-meteofor',
            build: '1.0.162',
            host: '',
            api: 'v3',
            timestamps: {
                now: new Date('2024/02/10 21:10:59'),
                local: Date.now()
            },
            dc: 'pl',
            uniq: '254c1aaddb6e684f6aa7178b58223d09',
            day: '1',
            section: 'weekly',
            counters: {
                ym: [],
                ga: [],
                gtag: [],
            },
            X: +'0',
            device: {
                type: 'desktop',
                origin: 'desktop'
            },
            cacheDate: '10.02.2024 21:10:59 (UTC)'
        },
        advert: {
            puids: {},
            pubads: [],
            slots: []
        },
        abtests: {
            group: +'51',
            cookie: 'ab_audience_2',
            current: null
        },
        city: null,
        news: {},
        weather: {
            cw: null
        },
        maps: {},
        info: {}
    }
    try {
        M.state.city = {"source":"redis","id":51151,"url":"/weather-esplugues-de-llobregat-51151/","slug":"esplugues-de-llobregat","kind":"T","coordinates":{"latitude":41.377499,"longitude":2.0881},"obsStationId":4035,"timeZone":60,"country":{"id":74,"url":"/catalog/spain/","code":"ES"},"district":{"id":625,"url":"/catalog/spain/catalonia/"},"subdistrict":null,"translations":{"ru":{"city":{"name":"Эсплугес-де-Льобрегат","nameP":"в Эсплугес-де-Льобрегате","nameR":""},"country":{"name":"Испания","nameP":"в Испании","nameR":"Испании"},"district":{"name":"Каталония","nameP":"в Каталонии","nameR":"Каталонии"},"subdistrict":null},"ua":{"city":{"name":"Асплугас-да-Любрагат","nameP":"в Асплугас-да-Любрагаті","nameR":""},"country":{"name":"Іспанія","nameP":"в Іспанії","nameR":"Іспанії"},"district":{"name":"Каталонія","nameP":"у Каталонії","nameR":"Каталонії"},"subdistrict":null}},"visitCount":0,"lang":"ua","originUrl":"/weather-esplugues-de-llobregat-51151/","dates":{"local":"2024-02-10T22:10:59.426Z","utc":"2024-02-10T21:10:59.426Z"}}
        M.state.weather.cw = {"source":"redis","date":["2024-02-10T21:00:00.000Z"],"kind":["ObsCor"],"iconWeather":["n_c1"],"description":["Слабка хмарність, без опадів"],"precipitation":[0],"roadConditionIcon":[null],"roadConditionCode":[null],"radiation":[null],"pollenGrass":[null],"pollenBirch":[null],"pollenRagweed":[null],"snowFall":[null],"snowHeight":[0],"snowIcon":[null],"temperatureAir":[12],"temperatureWater":[12],"temperatureHeatIndex":[12],"iconBg":[],"visibility":[null],"humidity":[44],"pressure":[740],"windDirection":[320],"windSpeed":[2],"windGust":[null],"stormPrediction":[],"precipitationType":[0],"cloudiness":[25],"dewPoint":[0],"importTime":["2024-02-10T21:00:00.000Z"],"forecastDate":[],"type":"current","cityid":51151,"version":"v3","range":[0,1]}
    } catch (e) {
        console.error(e)
    }

    M.state.info.articlePollenLink = null

    
    
    
        M.state.app.isNowcast = false
    
    M.state.app.dictionary = {"actions":{"loading":"Загрузка...","feedback":"Залишити відгук","moreNews":"Ще новини","readMore":"Читайте також","clear":"Очистити","fullversion":"Для великих екранів","mobileVersion":"Перейти на мобільну версію","search":"Пошук місця розташування","searchPlaceholder":"Пошук місця розташування","geoConfirm":"Дозвольте визначити ваше місце розташування","print":"Роздрукувати","changeLocation":"Змінити пункт","searchGeoProcess":"Визначення місця розташування","cancel":"Скасувати"},"error":{"400":{"message":"Вибачте, сайт тимчасово недоступний &mdash; заходьте пізніше.","title":"Помилка 400"},"403":{"message":"Доступ заборонено.","title":"Помилка 403"},"404":{"message":"Неправильно набрано адресу, або&nbsp;такої сторінки на сайті більше не існує.","searchMessage":"Скористайтеся пошуком або перейдіть на <a href=\"/\">головну</a>.","title":"Помилка 404"},"500":{"message":"Вибачте, сайт тимчасово недоступний &mdash; заходьте пізніше.","title":"Помилка 500"},"timeup":"Збільшити час?","geo":{"0":"Виникла помилка","1":"Ви заборонили визначення місця розташування","2":"Не працює мережа або немає зв'язку з супутниками","3":"Визначення координат займає надто багато часу"},"common":"Виникла помилка","timeout":"Немає мережі. Перевірте з'єднання з Інтернетом","error":"Помилка","mainPageLinkMobile":"Перейти на головну","mainPageLink":"Перейдіть на <a href=\"/\">{DOMAIN}</a>","userEcho":"Якщо впевнені, що за цією адресою має бути сторінка, <a href=\"javascript:void(0);\" class='js-ue-feedback'>напишіть нам</a>."},"city_examples":{"0":"дубно рокитнівський","1":"стебник дрогобич","2":"одесса техас","3":"люблін білорусь","4":"прилуки білорусь","5":"прилуки україна","6":"балаклава австралія","7":"лівадія крим","8":"лівадія ларнака","9":"краків польща","10":"со франція","11":"затока львівська","12":"е нормандія","13":"сідней канада","14":"ватерлоо канада","15":"сан-хосе мексика"},"date":{"format":{"polar":"j M, G:i","full":"D, j F, G:i","header":"D, j M, G:i","menu_calendar":"D, j F","weather_link":"D, j F","tab":"D, j M","time":"G:i","weather_title":"j F","tab_next":"D, j","from_now":"j F, G:i","from_now_with_year":"j F Y, G:i"},"month_short":{"0":"січ","1":"лют","2":"бер","3":"кві","4":"тра","5":"чер","6":"лип","7":"сер","8":"вер","9":"жов","10":"лис","11":"гру"},"month_short_r":{"0":"січ","1":"лют","2":"бер","3":"кві","4":"тра","5":"чер","6":"лип","7":"сер","8":"вер","9":"жов","10":"лис","11":"гру"},"month":{"0":"січень","1":"лютий","2":"березень","3":"квітень","4":"травень","5":"червень","6":"липень","7":"серпень","8":"вересень","9":"жовтень","10":"листопад","11":"грудень"},"day_short":{"0":"Нд","1":"Пн","2":"Вт","3":"Ср","4":"Чт","5":"Пт","6":"Сб"},"today":"сьогодні","month_r":{"0":"січня","1":"лютого","2":"березня","3":"квітня","4":"травня","5":"червня","6":"липня","7":"серпня","8":"вересня","9":"жовтня","10":"листопада","11":"грудня"},"year":"Рік","now":"зараз","tomorrow":"завтра","day":{"0":"Неділя","1":"Понеділок","2":"Вівторок","3":"Середа","4":"Четвер","5":"П'ятниця","6":"Субота"}},"words":{"settlements":"Населений пункт, район, область, країна, аеропорт","weather":"Погода","close":"Закрити","nearestams":"Найближчі метеостанції","nearesttime":"на&nbsp;найближчий час","more":"ще","nowcast":"Опади на карті","now":"Зараз","no_data":"Немає даних","example":"Наприклад","last_news":"Последние новости","readMore":"Читайте також","aggregator":"Дайджест","company":"Компанія","others":"Другие","airports":"Аеропорти","expand":"Розгорнути","collapse":"Згорнути","fact":"Фактичні дані від:","forecast":"Прогноз від:","next_day":"Наступний день","prev_day":"Попередній день"},"search":{"notFound":"Нічого не знайдено","lastViewed":"Ви недавно дивилися","findAll":"Знайти всі пункти","nearest":"Поблизу","favoritesTitle":"Вибрані пункти","viewedTitle":"Ви недавно дивилися","ipTitle":"Найближчі пункти за IP-адресою","countries":"Країни","allWorld":"Весь світ","citiesTitle":"Пункти","settlements":"Пункти","onQuery":"По запиту &laquo;{QUERY}&raquo; знайдено {TOTAL} {PLACES}","myCities":"Мої пункти","saved":"Збережені"},"widgetsParams":{"title":"Набір даних у прогнозі","settings":"Набір даних","add":"Додати у прогноз","remove":"Прибрати із прогнозу","dismiss":"Залишити","teaser":"<b>Що нового:</b> тепер можна налаштовувати прогноз","tips":{"0":"Тут можна прибрати або додати параметри для прогнозу","1":"Налаштуйте прогноз за вашими інтересами","2":"Геомагнітне поле, вологість, УФ-індекс та інші параметри","3":"Виберіть параметри, які бажаєте бачити у прогнозі"},"description":"Виберіть параметри, які бажаєте бачити у прогнозі","accent":{"snow-add":"Дивіться як змінюється висота снігового покриву","snow-remove":"Схоже, що сніг не лежить і найближчим часом не випаде","pollen-birch-add":"Йде сезон цвітіння берези. Слідкуйте за алергеном","pollen-grass-add":"Йде сезон цвітіння злаків. Слідкуйте за алергеном","pollen-ragweed-add":"Йде сезон цвітіння амброзії. Слідкуйте за алергеном","pollen-remove":"Знизилася концентрація пилку в повітрі","pollen-map":"Дивіться за активністю алергенів на карті"},"info":{"more":"Докладніше про параметр","toggle":"Відображати у прогнозі"},"ariaLabels":{"dataset":"Набір даних у прогнозі","info":"Як налаштувати прогноз","back":"Назад","hide-teaser":"Сховати підказку"},"groups":{"temperature":"Температура","wind":"Вітер","precipitation":"Опади","allergy":"Алергія","more":"Ще"},"IconWeather":{"title":"Погодная иконка","description":""},"TemperatureAir":{"title":"Температура повітря","description":""},"TemperatureHeatIndex":{"title":"Відчувається як","description":""},"TemperatureAvg":{"title":"Середньодобова температура","description":"Відображається лише у&nbsp;прогнозі по&nbsp;дням"},"WindSpeed":{"title":"Середня швидкість вітру","description":""},"WindGust":{"title":"Пориви вітру","description":""},"WindDirection":{"title":"Напрямок вітру","description":""},"Birch":{"title":"Пилок берези","description":""},"Ragweed":{"title":"Пилок амброзії","description":""},"Grass":{"title":"Пилок злакових трав","description":""},"Precipitation":{"title":"Опади в рідкому еквіваленті","description":""},"RoadCondition":{"title":"Погода на дорогах","description":""},"Pressure":{"title":"Тиск","description":""},"Humidity":{"title":"Відносна вологість","description":""},"Radiation":{"title":"УФ-індекс","description":""},"Gm":{"title":"Геомагнітна активність","description":""},"SnowFall":{"title":"Сніг, що випадає","description":""},"SnowHeight":{"title":"Висота снігового покриву","description":""}},"interactive_map":{"toggle":{"birch":"Береза","grass":"Злаки","ragweed":"Амброзія"},"title":{"birch":"Концентрація пилку берези","grass":"Концентрація пилку злаків","ragweed":"Концентрація пилку амброзії"}},"measureUnits":{"n_a":"н/д","mm_hg_atm":"мм рт. ст.","hg_atm":"рт. ст.","h_pa":"гПа","C":"°C","F":"F","percent":"%","min":"хв","hour":"год","mm":"мм","m":"м","km_h":"км/год","km":"км","point":"бал","points":"бали","m_s":"м/c","kp_index":"Кп-індекс","point_m3":"од./м<sup>3</sup>"}}

</script>

    <script>(()=>{"use strict";var t,e;!function(t){t.favorite="favorite",t.viewed="viewed"}(t||(t={})),function(t){t.weatherParameters="weather-parameters",t.teaserWeatherParameters="teaser-weather-parameters",t.teaserMapsPollen="teaser-maps-pollen",t.weatherParametersDesktopTip="tip-weather-parameters",t.weatherParametersTeaser="teaser-weather-parameters",t.weatherParametersTip="tip-weather-parameters",t.timestamp="weather-timestamp",t.accentWeatherParameters="accent-weather-parameters",t.lastViewedCities="cities-viewed"}(e||(e={}));class s{static setItem(t,e){localStorage.setItem(t,e)}static getItem(t){return localStorage.getItem(t)}static setObject(t,e){s.setItem(t,JSON.stringify(e))}static getObject(t){let e={};try{e=JSON.parse(s.getItem(t))}catch(t){console.error(t)}return e instanceof Object?e:{}}static getArray(t){let e=[];try{e=JSON.parse(s.getItem(t))}catch(t){console.error(t)}return Array.isArray(e)?e:[]}static removeItem(t){localStorage.removeItem(t)}static clear(){localStorage.clear()}static hoursToExpireDate(t){const e=new Date;return e.setTime(e.getTime()+36e5*t),e.toUTCString()}static _setItem(t,e,i=7){const r=[t+"="+e];r.push("expires="+s.hoursToExpireDate(i)),r.push("path=/"),r.push("domain="+location.hostname),document.cookie=r.join(";")}static _getItem(t){const e=new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"),s=document.cookie.match(e);return s?decodeURIComponent(s[1]):""}static _removeItem(t){s._getItem(t)&&s._setItem(t,"",-1)}}window.M.Storage=s,window.M.fn.getSectionName=()=>window.M.state.app.page,window.M.fn.getWindowWidth=()=>window.innerWidth,window.M.fn.getABGroup=()=>"default";(()=>{const i=window.M.state.city;let r=s.getArray(e.lastViewedCities);if(i.id&&window.M.state.weather.cw){const{iconWeather:a,iconBg:n,description:o,temperatureAir:c,windSpeed:h}=window.M.state.weather.cw;r=r.filter((t=>t.id!==i.id)),r.forEach((t=>t.isActive=!1)),i.cw={iconWeather:a,iconBg:n,description:o,temperatureAir:c,windSpeed:h},i.type=t.viewed,i.isActive=!0,r.unshift(i),r=r.slice(0,4),s.setObject(e.lastViewedCities,r)}})();class i{constructor(t){this.state=window.M.state,this.test=t,this.ymName="AB_Tests",this.ymEvent="inGroup",this.name=this.test.name,this.version=this.test.version,this.group="default",this.init()}setGroup(){const t=this.state.abtests.group;if(t)for(const e in this.test.audience)if(this.test.audience.hasOwnProperty(e)&&this.test.audience[e][0]<=t&&t<=this.test.audience[e][1]){this.group=e;break}}runTestFn(){this.test.fn&&"function"==typeof this.test.fn&&this.test.fn({group:this.group})}setAbGroupFn(){window.M.fn.getABGroup=()=>"default"===this.group?"default":`${this.name.toLowerCase()}-${this.group}`}getInfo(){return{groupName:this.group,test:this.test,ymName:this.ymName,ymEvent:this.ymEvent}}init(){this.setGroup(),this.runTestFn(),this.setAbGroupFn()}}const r=new class{constructor(t){this.tests=t,this.initTests=[],this.init()}updateCookieLifetime(){s._getItem("ab_audience_2")&&s._setItem("ab_audience_2",s._getItem("ab_audience_2"),2160)}getCurrent(){var t,e;return null!==(e=null===(t=this.initTests[0])||void 0===t?void 0:t.getInfo())&&void 0!==e?e:null}init(){this.tests.length&&(this.updateCookieLifetime(),this.tests.forEach((t=>{t.disabled||this.initTests.push(new i(t))})))}}([{disabled:!1,version:"V1",audience:{test:[1,14],control:[50,64]},name:"ADV-2582"}]);window.M.state.abtests.current=r.getCurrent()})();</script>



    
    
    <link rel="preconnect" href="//fonts.googleapis.com">
<link rel="preconnect" href="//www.google.com">
<link rel="preconnect" href="//tpc.googlesyndication.com">
<link rel="dns-prefetch" href="//adservice.google.com">
<link rel="preconnect" href="//adservice.google.com">
<link rel="dns-prefetch" href="//adservice.google.com.ua">
<link rel="preconnect" href="//adservice.google.com.ua">
<link rel="dns-prefetch" href="//www.googletagmanager.com">
<link rel="dns-prefetch" href="//pagead2.googlesyndication.com">
<link rel="preconnect" href="//googleads.g.doubleclick.net">
<link rel="dns-prefetch" href="//googleads.g.doubleclick.net">
<link rel="dns-prefetch" href="//cdn.admixer.net">
<link rel="dns-prefetch" href="//inv-nets.admixer.net">
<link rel="dns-prefetch" href="//securepubads.g.doubleclick.net">
<link rel="preconnect" href="//securepubads.g.doubleclick.net" crossorigin>
<link rel="dns-prefetch" href="//cm.g.doubleclick.net">
<link rel="preconnect" href="//cm.g.doubleclick.net" crossorigin>
<link rel="dns-prefetch" href="//stpd.cloud">
<link rel="preconnect" href="//stpd.cloud" crossorigin>
<link rel="preload" href="https://securepubads.g.doubleclick.net/tag/js/gpt.js" as="script">
<script async src="https://cdn.admixer.net/scripts3/loader2.js" data-inv="//inv-nets.admixer.net/" data-r="single" data-sender="admixer" data-bundle="desktop"></script>
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
        for(let i = 0; i < M.state.advert.pubads.length; i++) {
          googletag.pubads().setTargeting(M.state.advert.pubads[i][0], M.state.advert.pubads[i][1]);
        }
        for(let i = 0; i < M.state.advert.slots.length; i++) {
            googletag
                .defineSlot(M.state.advert.slots[i][0], M.state.advert.slots[i][1], M.state.advert.slots[i][2])
                .addService(googletag.pubads())
        }
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });
</script>
<script async src="https://stpd.cloud/assets/hb/meteoforua.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SFCJL27BKY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SFCJL27BKY');
</script>


    

    

    <script>
        M.state.advert.pubads.push(['g_temp', '10-15'])
        M.state.advert.pubads.push(['g_lang', 'ua'])
        M.state.advert.pubads.push(['g_page', M.fn.getSectionName()])
        M.state.advert.pubads.push(['g_city', '51151'])
        M.state.advert.pubads.push(['g_country', '74'])
        M.state.advert.pubads.push(['g_region', '625'])
        M.state.advert.pubads.push(['g_weather', 'sun'])
        
    </script>


    <script>
    M.state.advert.slots = [["/21802255954/meteofor.ua_640x250_middle",[[640,250],[300,250],[250,250]],"div-gpt-ad-645cf41edb847c8786cbd546"],["/21802255954/meteofor.ua_300x250_top",[[300,250],[300,600],[300,300],[300,450]],"div-gpt-ad-645cf2a4573c1845fa7b03b2"],["/21802255954/meteofor.ua_branding",[[1,1]],"div-gpt-ad-645cf5d8db847c8786cbd54c"],["/21802255954/meteofor.ua_300x250_bottom",[[300,250],[300,600],[300,300],[300,450]],"div-gpt-ad-645cf558db847c8786cbd54a"]]
    </script>



    <link rel="stylesheet" href="/ngamg/assets/bundles/desktop-weather-5d78da82c8fbf3c2b115.bundle.min.css">
<script src="/ngamg/assets/desktop-weather-a0254218aeb26ea7fae8.js" defer></script>


                    <style>
                .unit {display: none !important;}
                .unit_temperature_c,
                .unit_wind_m_s,
                .unit_pressure_mm_hg,
                .unit_visibility_m,
                .display-inherit {
                    display: inline !important;
                }
                .page[data-temperature="c"] .unit_temperature_f,
                .page[data-temperature="f"] .unit_temperature_c {
                    display: none !important;
                }
                .page[data-temperature="c"] .unit_temperature_c,
                .page[data-temperature="f"] .unit_temperature_f {
                    display: inline !important;
                }
             </style>
            

</head>


    


<body class="project-weather page page-columns-2 page-ua page-ua-ua page-weekly subdomain-meteofor">
<script>
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        document.body.className += ' ie11'
        M.state.app.isIE = true
    }
</script>
<div class="overlay js-overlay"></div>

    <div class="mobile-switch-notify js-platform-switcher" data-platform="mobile">
        <div class="mobile-switch-notify-wrap">
            <div class="mobile-switch-notify-actions">
                <div class="notify-action notify-btn mobile-version js-mobile-version">Перейти на мобільну версію</div>
                <div class="notify-action notify-btn close js-notify-close">
                    <i>
                        <svg viewBox="0 0 20 20">
                            <use href="#close"/>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    </div>
    <script>
        const el = document.querySelector('.js-platform-switcher')
        if (el !== null && M.Storage._getItem('mobile') === 'no' && M.state.app.device.origin === 'mobile') {
            el.style.display = 'flex'
        }
    </script>




    
        
        
    
        
        
            


    


    


<header class="header wrap js-header">

    <div class="header-top">
    <div class="top-left">
        
        
        <a class="header-logo"
           href="/"
           aria-label="Meteofor"
           data-stat-type="logo"
           data-stat-value="Meteofor"
           title="Погода"
        >
        
            <svg viewBox="0 0 139 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.0238 30.3573L27.445 2.15112L18.8884 13.9827L10.1201 2.15112L6 9.33449L18.8884 24.8639L26.4944 14.6166L41.0728 30.9912L42.0238 30.3573Z" fill="#FF2C02"/>
    <path d="M5.45836 24.8641C7.99393 24.8641 10.1065 22.7511 10.1065 20.2159C10.1065 17.5749 7.99355 15.4619 5.45836 15.4619C2.81732 15.4619 0.704346 17.5749 0.704346 20.2159C0.704346 22.7511 2.81732 24.8641 5.45836 24.8641Z" fill="#FFAA00"/>
    <path d="M120.318 8.49255C115.986 8.49255 112.5 11.3449 112.5 16.3102C112.5 21.2755 115.986 24.1278 120.318 24.1278C124.649 24.1278 128.241 21.2755 128.241 16.3102C128.241 11.3449 124.649 8.49255 120.318 8.49255ZM120.318 20.7471C117.993 20.7471 116.092 19.3738 116.092 16.3102C116.092 13.2466 117.994 11.7675 120.318 11.7675C122.642 11.7675 124.543 13.2466 124.543 16.3102C124.543 19.3738 122.642 20.7471 120.318 20.7471Z" fill="black"/>
    <path d="M136.582 8.6H135.328C131.88 8.6 130 10.6485 130 13.8482V24H133.461V13.9587C133.461 12.8552 134.283 11.9724 135.328 11.9724H137L136.582 8.6Z" fill="black"/>
    <path d="M111.048 4.62029H112L111.577 1H111.048C106.183 1 103.856 4.72697 103.856 9.19918V9.30548L101 9.51846V12.3935H103.856V24H107.452V12.3935H112V8.56024L107.452 8.9862C107.452 6.64342 108.298 4.62029 111.048 4.62029Z" fill="black"/>
    <path d="M75.5924 8.49255C71.1555 8.49255 67.9861 11.3449 67.9861 16.3102C67.9861 21.2755 71.261 24.1278 75.5924 24.1278C78.6561 24.1278 81.0858 22.7546 82.7762 20.1136L80.4519 18.529C79.1841 20.0081 77.8109 20.7474 75.5924 20.7474C73.738 20.7474 72.1795 19.7877 71.7176 17.6838H83.1988C83.3042 17.3671 83.3042 16.7332 83.3042 16.3106C83.3042 11.3449 80.0293 8.49255 75.5924 8.49255ZM75.5924 11.7675C77.392 11.7675 78.8443 12.6713 79.3281 14.7045L71.639 15.3452C71.9713 12.8603 73.6136 11.7675 75.5924 11.7675Z" fill="black"/>
    <path d="M61.8382 5H58.4578L58.2465 9.11681L55.5 9.32793V12.178H58.2465V18.4057C58.2465 21.4668 60.3595 24 63.8453 24C64.5847 24 65.6412 23.8946 66.2751 23.6835L65.8525 20.2001C65.3244 20.3055 64.796 20.4112 63.8453 20.4112C62.7888 20.4112 61.8382 19.5667 61.8382 18.5111V12.1776H66.4863V8.37767L61.8382 8.79992V5Z" fill="black"/>
    <path d="M92.5828 8.49255C88.2514 8.49255 84.7651 11.3449 84.7651 16.3102C84.7651 21.2755 88.2514 24.1278 92.5828 24.1278C96.9142 24.1278 100.506 21.2755 100.506 16.3102C100.506 11.3449 96.9142 8.49255 92.5828 8.49255ZM92.5828 20.7471C90.2585 20.7471 88.3572 19.3738 88.3572 16.3102C88.3572 13.2466 90.2589 11.7675 92.5828 11.7675C94.9067 11.7675 96.8083 13.2466 96.8083 16.3102C96.8083 19.3738 94.9071 20.7471 92.5828 20.7471Z" fill="black"/>
    <path d="M46.6063 8.49255C42.1695 8.49255 39 11.3449 39 16.3102C39 21.2755 42.2749 24.1278 46.6063 24.1278C49.67 24.1278 52.0997 22.7546 53.7901 20.1136L51.4658 18.529C50.198 20.0081 48.8248 20.7474 46.6063 20.7474C44.7519 20.7474 43.1934 19.7877 42.7315 17.6838H54.2127C54.3181 17.3671 54.3181 16.7332 54.3181 16.3106C54.3181 11.3449 51.0432 8.49255 46.6063 8.49255ZM46.6063 11.7675C48.406 11.7675 49.8582 12.6713 50.342 14.7045L42.6533 15.3452C42.9852 12.8603 44.6276 11.7675 46.6063 11.7675Z" fill="black"/>
</svg>

        
        </a>
        
    </div>
    <div class="top-middle">
        <div class="search js-search">
    <div class="transparent-city js-transparent-city">Пошук місця розташування</div>
    <div class="search-form js-search-form">
        <div class="search-label">
            <input
                type="search"
                class="input js-input"
                placeholder="Пошук місця розташування"
                autocomplete="off"
            >
            <i class="icon icon-spinner icon-spinner-black js-search-spinner"></i>
            <i class="icon icon-cross js-clear-input"></i>
            <i class="icon icon-location js-geo-search"></i>
        </div>
    </div>
</div>

        <div class="header-viewed js-header-viewed"></div>
<script>
    (() => {
        const cities = window.M.Storage.getArray('cities-viewed')
        const container = document.querySelector('.js-header-viewed')
        const lang = window.M.state.app.lang
        const domain = window.M.state.app.domain
        let prefix = ''
        if (domain !== lang && !(domain === 'com' && lang === 'en')) {
            prefix = `/${lang}`
        }
        if (cities.length > 1) {
            let currentPage = ''
            if (window.M.state.app.project === 'weather' && window.M.state.app.section !== 'index') {
                switch (window.M.state.app.section) {
                    case 'today':
                        break
                    case '1-day':
                        currentPage = `${window.M.state.app.day}-day/`
                        break
                    default:
                        currentPage = `${window.M.state.app.section}/`
                }
            }
            cities.forEach(item => {
                let classNames = 'header-viewed-city'
                if (window.M.state.city.id === item.id) {
                    classNames += ' is-active'
                    container.insertAdjacentHTML('afterbegin',
                        `<a class="${classNames}">${item.translations[ window.M.state.app.lang ].city.name}</a>`)
                } else {
                    container.insertAdjacentHTML('beforeend',
                        `<a class="${classNames}" href="${prefix}${item.originUrl}${currentPage}">${item.translations[ window.M.state.app.lang ].city.name}</a>`)
                }
            })
        }
    })()
</script>

    </div>
    <div class="top-right">
        <div class="lang-selector">
            <div class="dropdown-handle js-lang-handle" aria-expanded="false" role="button">
                <div class="current-lang">
                    UA
                </div>
                <i class="chevron">
                    <svg viewBox="0 0 26 16">
                        <use href="#chevron"></use>
                    </svg>
                </i>
            </div>
            <div class="dropdown-menu">
                
                    
                        <div class="dropdown-menu-item is-active">Українською</div>
                    
                
                    
                        <a class="dropdown-menu-item menu-item js-lang-selector" href="/ru/weather-esplugues-de-llobregat-51151/weekly/"
                           hreflang="ru"
                           data-lang="ru"
                           rel="alternate"
                           title="Погода в Эсплугес-де-Льобрегате на неделю">По-русски</a>
                    
                
            </div>
        </div>
    </div>

</div>


    
        <div class="header-subnav n-c1" style="background-image: url(https://mf-static.meteofor.st/assets/bg-desktop-wide/n_c1.jpg); background-position-x: 20%;">
            <div class="header-container">
                <div class="header-current">
                    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            
                {
                    "@type": "ListItem",
                    "position": "1",
                    "name": "Іспанія",
                    "item": "https://meteofor.com.ua/catalog/spain/"
                },
                
            
                {
                    "@type": "ListItem",
                    "position": "2",
                    "name": "Каталонія",
                    "item": "https://meteofor.com.ua/catalog/spain/catalonia/"
                },
                
                {
                    "@type": "ListItem",
                    "position": "3",
                    "name": "Погода у Каталонії"
                }
                
            
        ]
    }
</script>
<div class="breadcrumbs">
    <div class="breadcrumbs-links">
        
            <a class="breadcrumbs-link"
               href="/catalog/spain/"
               title="Погода в Іспанії"
            >Іспанія</a> / 
        
            <a class="breadcrumbs-link"
               href="/catalog/spain/catalonia/"
               title="Погода у Каталонії"
            >Каталонія</a>
        
    </div>
    
</div>



                    <div class="place">
                        в Асплугас-да-Любрагаті слабка хмарність, без опадів,
                        
        <span class="unit unit_temperature_c"><span class="sign">+</span>12&nbsp;°C</span>
        <span class="unit unit_temperature_f" data-nosnippet>54&nbsp;F</span>
    
                    </div>
                </div>
                <div class="subnav-container">
                    
                        <div class="subnav">
    <div class="subnav-menu header-subnav-menu">
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/now/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті зараз">Зараз</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті">Сьогодні</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/tomorrow/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті на завтра">Завтра</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/3-days/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті на 3 дні">3&nbsp;дні</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/weekend/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті на вихідні">Вихідні</a>
            
        
            
                <div class="subnav-menu-item header-subnav-link is-active">Тиждень</div>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/10-days/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті на 10 днів">10&nbsp;днів</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/2-weeks/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті на два тижні">2&nbsp;тижні</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/month/" class="subnav-menu-item header-subnav-link" title="Погода в Асплугас-да-Любрагаті на місяць">Місяць</a>
            
        
            
                
                <a href="/weather-esplugues-de-llobregat-51151/gm/" class="subnav-menu-item header-subnav-link" title="Геомагнітна активність в Асплугас-да-Любрагаті">Г/м активність</a>
            
        
        
    </div>
</div>

                    

                    

                    
                </div>
            </div>
        </div>
    
</header>

        
    


<section class="content wrap">
    
    
        
            <div class="content-column column1" data-column="C1">
                
                
                    
                    
                    <section
                        class="section section-content "
                        data-column-place="C1P1">
                        
                        

                        

                        

                        

                        

                        
                            

<div class="page-title-wrap">
    
    <div class="page-title">
        
            <h1>Погода в Асплугас-да-Любрагаті на тиждень</h1>
        
    </div>
    
</div>

                        
                    </section>
                
                    
                    
                    <section
                        class="section section-content "
                        data-column-place="C1P2">
                        
                        

                        

                        

                        

                        

                        
                            

    
        <div class="widget widget-weather-parameters widget-days"
             data-widget="weather-parameters"
             data-stat-type="widget"
             data-stat-value="weather-parameters"
             data-nosnippet
        >
            
            <div class="widget-body widget-columns-7 ">
                <div class="widget-items">
                    
                    
                        
                            <div class="widget-row widget-row-days-date">
    
        
        
        
        
        
        <a class="row-item item-day-6"
           href="/weather-esplugues-de-llobregat-51151/">
            <div class="day">Сб</div>
            <div class="date">
                10
                лют
            </div>
        </a>
    
        
        
        
        
        
            
        
        <a class="row-item item-day-7"
           href="/weather-esplugues-de-llobregat-51151/tomorrow/">
            <div class="day">Нд</div>
            <div class="date">
                11
                
            </div>
        </a>
    
        
        
        
        
        
            
        
        <a class="row-item item-day-1"
           href="/weather-esplugues-de-llobregat-51151/3-day/">
            <div class="day">Пн</div>
            <div class="date">
                12
                
            </div>
        </a>
    
        
        
        
        
        
            
        
        <a class="row-item item-day-2"
           href="/weather-esplugues-de-llobregat-51151/4-day/">
            <div class="day">Вт</div>
            <div class="date">
                13
                
            </div>
        </a>
    
        
        
        
        
        
            
        
        <a class="row-item item-day-3"
           href="/weather-esplugues-de-llobregat-51151/5-day/">
            <div class="day">Ср</div>
            <div class="date">
                14
                
            </div>
        </a>
    
        
        
        
        
        
            
        
        <a class="row-item item-day-4"
           href="/weather-esplugues-de-llobregat-51151/6-day/">
            <div class="day">Чт</div>
            <div class="date">
                15
                
            </div>
        </a>
    
        
        
        
        
        
            
        
        <a class="row-item item-day-5"
           href="/weather-esplugues-de-llobregat-51151/7-day/">
            <div class="day">Пт</div>
            <div class="date">
                16
                
            </div>
        </a>
    
</div>

                        
                    
                        
                            <div class="widget-row widget-row-icon" data-row="icon-tooltip">
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Хмарно, невеликий  дощ" data-kind="Frc">
                <svg viewBox="0 0 55 46"><use href="#d_c2_r1"/></svg>
            </div>
        </div>
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Слабка хмарність, без опадів" data-kind="Frc">
                <svg viewBox="0 0 55 37"><use href="#d_c1"/></svg>
            </div>
        </div>
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Слабка хмарність, невеликий  дощ" data-kind="Frc">
                <svg viewBox="0 0 55 46"><use href="#d_c1_r1"/></svg>
            </div>
        </div>
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Хмарно, без опадів" data-kind="Frc">
                <svg viewBox="0 0 55 37"><use href="#d_c2"/></svg>
            </div>
        </div>
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Слабка хмарність, без опадів" data-kind="Frc">
                <svg viewBox="0 0 55 37"><use href="#d_c1"/></svg>
            </div>
        </div>
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Слабка хмарність, невеликий  дощ" data-kind="Frc">
                <svg viewBox="0 0 55 46"><use href="#d_c1_r1"/></svg>
            </div>
        </div>
    
        <div class="row-item">
            <div class="weather-icon tooltip" data-text="Хмарно, без опадів" data-kind="Frc">
                <svg viewBox="0 0 55 37"><use href="#d_c2"/></svg>
            </div>
        </div>
    
</div>

                        
                    
                        
                            <div
    class="widget-row-chart widget-row-chart-temperature row-with-caption"
    data-row="temperature-air"
    
    
>
    
        <p class="widget-row-caption" data-key="temperature-air-legend">
            <span>
                
                Температура повітря, <span class="unit unit_temperature_c">°C</span><span class="unit unit_temperature_f">F</span>
            </span>
        </p>
    
    <div class="chart ten-days"><svg class="svg-temperature" viewBox="0 0 525 32" preserveAspectRatio="none" width="100%" height="32px"><defs><linearGradient id='fill-1-uniq65252' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(179, 214, 8, 1)'></stop><stop offset='1' stop-color='rgba(179, 214, 8, 1)'></stop></linearGradient><linearGradient id='fill-3-uniq65252' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(179, 214, 8, 1)'></stop><stop offset='1' stop-color='rgba(194, 213, 6, 1)'></stop></linearGradient><linearGradient id='fill-5-uniq65252' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(179, 214, 8, 1)'></stop><stop offset='1' stop-color='rgba(209, 212, 4, 1)'></stop></linearGradient><linearGradient id='fill-7-uniq65252' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(194, 213, 6, 1)'></stop><stop offset='1' stop-color='rgba(209, 212, 4, 1)'></stop></linearGradient><linearGradient id='fill-9-uniq65252' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(209, 212, 4, 1)'></stop><stop offset='1' stop-color='rgba(194, 213, 6, 1)'></stop></linearGradient><linearGradient id='fill-11-uniq65252' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(209, 212, 4, 1)'></stop><stop offset='1' stop-color='rgba(194, 213, 6, 1)'></stop></linearGradient><linearGradient id='fill-1-uniq79461' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(134, 215, 12, 1)'></stop><stop offset='1' stop-color='rgba(136, 224, 66, 1)'></stop></linearGradient><linearGradient id='fill-3-uniq79461' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(125, 221, 49, 1)'></stop><stop offset='1' stop-color='rgba(125, 221, 49, 1)'></stop></linearGradient><linearGradient id='fill-5-uniq79461' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(136, 224, 66, 1)'></stop><stop offset='1' stop-color='rgba(136, 224, 66, 1)'></stop></linearGradient><linearGradient id='fill-7-uniq79461' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(125, 221, 49, 1)'></stop><stop offset='1' stop-color='rgba(104, 217, 16, 1)'></stop></linearGradient><linearGradient id='fill-9-uniq79461' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(136, 224, 66, 1)'></stop><stop offset='1' stop-color='rgba(119, 216, 14, 1)'></stop></linearGradient><linearGradient id='fill-11-uniq79461' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(104, 217, 16, 1)'></stop><stop offset='1' stop-color='rgba(119, 216, 14, 1)'></stop></linearGradient></defs><g transform='translate(0, 0)' id='gFillPath-uniq13414'><path d='M0,6l75,0l0,9l-75,0' stroke='none' fill='rgba(164, 214, 9, 0.25)'></path><path d='M75,6l75,0l0,21l-75,0' stroke='none' fill='rgba(134, 215, 12, 0.25)'></path><path d='M150,6l75,0l0,24l-75,0' stroke='none' fill='rgba(119, 216, 14, 0.25)'></path><path d='M225,3l75,0l0,24l-75,0' stroke='none' fill='rgba(134, 215, 12, 0.25)'></path><path d='M300,0l75,0l0,30l-75,0' stroke='none' fill='rgba(134, 215, 12, 0.25)'></path><path d='M375,0l75,0l0,21l-75,0' stroke='none' fill='rgba(164, 214, 9, 0.25)'></path><path d='M450,3l75,0l0,15l-75,0' stroke='none' fill='rgba(164, 214, 9, 0.25)'></path></g><g transform='translate(0, 0)' id='gPath-uniq65252'><path d='M0,6l75,0l0,1l-75,0' stroke='none' fill='rgba(179, 214, 8, 1)'></path><path d='M75,6l0,0' stroke='none' fill='url(#fill-1-uniq65252)'></path><path d='M75,6l75,0l0,1l-75,0' stroke='none' fill='rgba(179, 214, 8, 1)'></path><path d='M150,6l0,0' stroke='none' fill='url(#fill-3-uniq65252)'></path><path d='M150,6l75,0l0,1l-75,0' stroke='none' fill='rgba(179, 214, 8, 1)'></path><path d='M225,7l0,-4l1,0l0,4' stroke='none' fill='url(#fill-5-uniq65252)'></path><path d='M225,3l75,0l0,1l-75,0' stroke='none' fill='rgba(194, 213, 6, 1)'></path><path d='M300,4l0,-4l1,0l0,4' stroke='none' fill='url(#fill-7-uniq65252)'></path><path d='M300,0l75,0l0,1l-75,0' stroke='none' fill='rgba(209, 212, 4, 1)'></path><path d='M375,0l0,0' stroke='none' fill='url(#fill-9-uniq65252)'></path><path d='M375,0l75,0l0,1l-75,0' stroke='none' fill='rgba(209, 212, 4, 1)'></path><path d='M450,0l0,3l1,0l0,-3' stroke='none' fill='url(#fill-11-uniq65252)'></path><path d='M450,3l75,0l0,1l-75,0' stroke='none' fill='rgba(194, 213, 6, 1)'></path></g><g transform='translate(0, 0)' id='gPath-uniq79461'><path d='M0,15l75,0l0,1l-75,0' stroke='none' fill='rgba(134, 215, 12, 1)'></path><path d='M75,15l0,12l1,0l0,-12' stroke='none' fill='url(#fill-1-uniq79461)'></path><path d='M75,27l75,0l0,1l-75,0' stroke='none' fill='rgba(125, 221, 49, 1)'></path><path d='M150,27l0,3l1,0l0,-3' stroke='none' fill='url(#fill-3-uniq79461)'></path><path d='M150,30l75,0l0,1l-75,0' stroke='none' fill='rgba(136, 224, 66, 1)'></path><path d='M225,31l0,-4l1,0l0,4' stroke='none' fill='url(#fill-5-uniq79461)'></path><path d='M225,27l75,0l0,1l-75,0' stroke='none' fill='rgba(125, 221, 49, 1)'></path><path d='M300,27l0,3l1,0l0,-3' stroke='none' fill='url(#fill-7-uniq79461)'></path><path d='M300,30l75,0l0,1l-75,0' stroke='none' fill='rgba(136, 224, 66, 1)'></path><path d='M375,31l0,-10l1,0l0,10' stroke='none' fill='url(#fill-9-uniq79461)'></path><path d='M375,21l75,0l0,1l-75,0' stroke='none' fill='rgba(104, 217, 16, 1)'></path><path d='M450,22l0,-4l1,0l0,4' stroke='none' fill='url(#fill-11-uniq79461)'></path><path d='M450,18l75,0l0,1l-75,0' stroke='none' fill='rgba(119, 216, 14, 1)'></path></g></svg><div class="values"><div class="value style_size_m" style="top: 6px; width: 14.285714285714286%;height: 24px;"><div class='maxt'><span class="unit unit_temperature_c">+15</span><span class="unit unit_temperature_f" data-nosnippet>59</span></div><div class='mint'><span class="unit unit_temperature_c">+12</span><span class="unit unit_temperature_f" data-nosnippet>54</span></div></div><div class="value style_size_m" style="top: 6px; width: 14.285714285714286%;height: 36px;"><div class='maxt'><span class="unit unit_temperature_c">+15</span><span class="unit unit_temperature_f" data-nosnippet>59</span></div><div class='mint'><span class="unit unit_temperature_c">+8</span><span class="unit unit_temperature_f" data-nosnippet>46</span></div></div><div class="value style_size_m" style="top: 6px; width: 14.285714285714286%;height: 39px;"><div class='maxt'><span class="unit unit_temperature_c">+15</span><span class="unit unit_temperature_f" data-nosnippet>59</span></div><div class='mint'><span class="unit unit_temperature_c">+7</span><span class="unit unit_temperature_f" data-nosnippet>45</span></div></div><div class="value style_size_m" style="top: 3px; width: 14.285714285714286%;height: 39px;"><div class='maxt'><span class="unit unit_temperature_c">+16</span><span class="unit unit_temperature_f" data-nosnippet>61</span></div><div class='mint'><span class="unit unit_temperature_c">+8</span><span class="unit unit_temperature_f" data-nosnippet>46</span></div></div><div class="value style_size_m" style="top: 0px; width: 14.285714285714286%;height: 45px;"><div class='maxt'><span class="unit unit_temperature_c">+17</span><span class="unit unit_temperature_f" data-nosnippet>63</span></div><div class='mint'><span class="unit unit_temperature_c">+7</span><span class="unit unit_temperature_f" data-nosnippet>45</span></div></div><div class="value style_size_m" style="top: 0px; width: 14.285714285714286%;height: 36px;"><div class='maxt'><span class="unit unit_temperature_c">+17</span><span class="unit unit_temperature_f" data-nosnippet>63</span></div><div class='mint'><span class="unit unit_temperature_c">+10</span><span class="unit unit_temperature_f" data-nosnippet>50</span></div></div><div class="value style_size_m" style="top: 3px; width: 14.285714285714286%;height: 30px;"><div class='maxt'><span class="unit unit_temperature_c">+16</span><span class="unit unit_temperature_f" data-nosnippet>61</span></div><div class='mint'><span class="unit unit_temperature_c">+11</span><span class="unit unit_temperature_f" data-nosnippet>52</span></div></div></div></div>
</div>


                        
                    
                        
                            <div
    class="widget-row-chart widget-row-chart-temperature row-with-caption"
    data-row="temperature-heat-index"
    
    
>
    
        <p class="widget-row-caption" data-key="temperature-heat-index-legend">
            <span>
                
                Відчувається як, <span class="unit unit_temperature_c">°C</span><span class="unit unit_temperature_f">F</span>
            </span>
        </p>
    
    <div class="chart ten-days"><svg class="svg-temperature" viewBox="0 0 525 32" preserveAspectRatio="none" width="100%" height="32px"><defs><linearGradient id='fill-1-uniq86942' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(179, 214, 8, 1)'></stop><stop offset='1' stop-color='rgba(179, 214, 8, 1)'></stop></linearGradient><linearGradient id='fill-3-uniq86942' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(179, 214, 8, 1)'></stop><stop offset='1' stop-color='rgba(194, 213, 6, 1)'></stop></linearGradient><linearGradient id='fill-5-uniq86942' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(179, 214, 8, 1)'></stop><stop offset='1' stop-color='rgba(209, 212, 4, 1)'></stop></linearGradient><linearGradient id='fill-7-uniq86942' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(194, 213, 6, 1)'></stop><stop offset='1' stop-color='rgba(209, 212, 4, 1)'></stop></linearGradient><linearGradient id='fill-9-uniq86942' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(209, 212, 4, 1)'></stop><stop offset='1' stop-color='rgba(194, 213, 6, 1)'></stop></linearGradient><linearGradient id='fill-11-uniq86942' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(209, 212, 4, 1)'></stop><stop offset='1' stop-color='rgba(194, 213, 6, 1)'></stop></linearGradient><linearGradient id='fill-1-uniq18689' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(119, 216, 14, 1)'></stop><stop offset='1' stop-color='rgba(157, 229, 99, 1)'></stop></linearGradient><linearGradient id='fill-3-uniq18689' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(157, 229, 99, 1)'></stop><stop offset='1' stop-color='rgba(146, 226, 83, 1)'></stop></linearGradient><linearGradient id='fill-5-uniq18689' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(157, 229, 99, 1)'></stop><stop offset='1' stop-color='rgba(146, 226, 83, 1)'></stop></linearGradient><linearGradient id='fill-7-uniq18689' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(146, 226, 83, 1)'></stop><stop offset='1' stop-color='rgba(114, 219, 32, 1)'></stop></linearGradient><linearGradient id='fill-9-uniq18689' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(146, 226, 83, 1)'></stop><stop offset='1' stop-color='rgba(104, 217, 16, 1)'></stop></linearGradient><linearGradient id='fill-11-uniq18689' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(114, 219, 32, 1)'></stop><stop offset='1' stop-color='rgba(104, 217, 16, 1)'></stop></linearGradient></defs><g transform='translate(0, 0)' id='gFillPath-uniq98658'><path d='M0,5l75,0l0,10l-75,0' stroke='none' fill='rgba(149, 215, 11, 0.25)'></path><path d='M75,5l75,0l0,25l-75,0' stroke='none' fill='rgba(104, 217, 16, 0.25)'></path><path d='M150,5l75,0l0,25l-75,0' stroke='none' fill='rgba(104, 217, 16, 0.25)'></path><path d='M225,2.5l75,0l0,25l-75,0' stroke='none' fill='rgba(119, 216, 14, 0.25)'></path><path d='M300,0l75,0l0,27.5l-75,0' stroke='none' fill='rgba(134, 215, 12, 0.25)'></path><path d='M375,0l75,0l0,20l-75,0' stroke='none' fill='rgba(149, 215, 11, 0.25)'></path><path d='M450,2.5l75,0l0,15l-75,0' stroke='none' fill='rgba(149, 215, 11, 0.25)'></path></g><g transform='translate(0, 0)' id='gPath-uniq86942'><path d='M0,5l75,0l0,1l-75,0' stroke='none' fill='rgba(179, 214, 8, 1)'></path><path d='M75,5l0,0' stroke='none' fill='url(#fill-1-uniq86942)'></path><path d='M75,5l75,0l0,1l-75,0' stroke='none' fill='rgba(179, 214, 8, 1)'></path><path d='M150,5l0,0' stroke='none' fill='url(#fill-3-uniq86942)'></path><path d='M150,5l75,0l0,1l-75,0' stroke='none' fill='rgba(179, 214, 8, 1)'></path><path d='M225,6l0,-3.5l1,0l0,3.5' stroke='none' fill='url(#fill-5-uniq86942)'></path><path d='M225,2.5l75,0l0,1l-75,0' stroke='none' fill='rgba(194, 213, 6, 1)'></path><path d='M300,3.5l0,-3.5l1,0l0,3.5' stroke='none' fill='url(#fill-7-uniq86942)'></path><path d='M300,0l75,0l0,1l-75,0' stroke='none' fill='rgba(209, 212, 4, 1)'></path><path d='M375,0l0,0' stroke='none' fill='url(#fill-9-uniq86942)'></path><path d='M375,0l75,0l0,1l-75,0' stroke='none' fill='rgba(209, 212, 4, 1)'></path><path d='M450,0l0,2.5l1,0l0,-2.5' stroke='none' fill='url(#fill-11-uniq86942)'></path><path d='M450,2.5l75,0l0,1l-75,0' stroke='none' fill='rgba(194, 213, 6, 1)'></path></g><g transform='translate(0, 0)' id='gPath-uniq18689'><path d='M0,15l75,0l0,1l-75,0' stroke='none' fill='rgba(119, 216, 14, 1)'></path><path d='M75,15l0,15l1,0l0,-15' stroke='none' fill='url(#fill-1-uniq18689)'></path><path d='M75,30l75,0l0,1l-75,0' stroke='none' fill='rgba(157, 229, 99, 1)'></path><path d='M150,30l0,0' stroke='none' fill='url(#fill-3-uniq18689)'></path><path d='M150,30l75,0l0,1l-75,0' stroke='none' fill='rgba(157, 229, 99, 1)'></path><path d='M225,31l0,-3.5l1,0l0,3.5' stroke='none' fill='url(#fill-5-uniq18689)'></path><path d='M225,27.5l75,0l0,1l-75,0' stroke='none' fill='rgba(146, 226, 83, 1)'></path><path d='M300,27.5l0,0' stroke='none' fill='url(#fill-7-uniq18689)'></path><path d='M300,27.5l75,0l0,1l-75,0' stroke='none' fill='rgba(146, 226, 83, 1)'></path><path d='M375,28.5l0,-8.5l1,0l0,8.5' stroke='none' fill='url(#fill-9-uniq18689)'></path><path d='M375,20l75,0l0,1l-75,0' stroke='none' fill='rgba(114, 219, 32, 1)'></path><path d='M450,21l0,-3.5l1,0l0,3.5' stroke='none' fill='url(#fill-11-uniq18689)'></path><path d='M450,17.5l75,0l0,1l-75,0' stroke='none' fill='rgba(104, 217, 16, 1)'></path></g></svg><div class="values"><div class="value style_size_m" style="top: 5px; width: 14.285714285714286%;height: 25px;"><div class='maxt'><span class="unit unit_temperature_c">+15</span><span class="unit unit_temperature_f" data-nosnippet>59</span></div><div class='mint'><span class="unit unit_temperature_c">+11</span><span class="unit unit_temperature_f" data-nosnippet>52</span></div></div><div class="value style_size_m" style="top: 5px; width: 14.285714285714286%;height: 40px;"><div class='maxt'><span class="unit unit_temperature_c">+15</span><span class="unit unit_temperature_f" data-nosnippet>59</span></div><div class='mint'><span class="unit unit_temperature_c">+5</span><span class="unit unit_temperature_f" data-nosnippet>41</span></div></div><div class="value style_size_m" style="top: 5px; width: 14.285714285714286%;height: 40px;"><div class='maxt'><span class="unit unit_temperature_c">+15</span><span class="unit unit_temperature_f" data-nosnippet>59</span></div><div class='mint'><span class="unit unit_temperature_c">+5</span><span class="unit unit_temperature_f" data-nosnippet>41</span></div></div><div class="value style_size_m" style="top: 2.5px; width: 14.285714285714286%;height: 40px;"><div class='maxt'><span class="unit unit_temperature_c">+16</span><span class="unit unit_temperature_f" data-nosnippet>61</span></div><div class='mint'><span class="unit unit_temperature_c">+6</span><span class="unit unit_temperature_f" data-nosnippet>43</span></div></div><div class="value style_size_m" style="top: 0px; width: 14.285714285714286%;height: 42.5px;"><div class='maxt'><span class="unit unit_temperature_c">+17</span><span class="unit unit_temperature_f" data-nosnippet>63</span></div><div class='mint'><span class="unit unit_temperature_c">+6</span><span class="unit unit_temperature_f" data-nosnippet>43</span></div></div><div class="value style_size_m" style="top: 0px; width: 14.285714285714286%;height: 35px;"><div class='maxt'><span class="unit unit_temperature_c">+17</span><span class="unit unit_temperature_f" data-nosnippet>63</span></div><div class='mint'><span class="unit unit_temperature_c">+9</span><span class="unit unit_temperature_f" data-nosnippet>48</span></div></div><div class="value style_size_m" style="top: 2.5px; width: 14.285714285714286%;height: 30px;"><div class='maxt'><span class="unit unit_temperature_c">+16</span><span class="unit unit_temperature_f" data-nosnippet>61</span></div><div class='mint'><span class="unit unit_temperature_c">+10</span><span class="unit unit_temperature_f" data-nosnippet>50</span></div></div></div></div>
</div>


                        
                    
                        
                            <div
    class="widget-row-chart widget-row-chart-temperature row-with-caption"
    data-row="temperature-avg"
    
    
>
    
        <p class="widget-row-caption" data-key="temperature-avg-legend">
            <span>
                
                Середньодобова температура, <span class="unit unit_temperature_c">°C</span><span class="unit unit_temperature_f">F</span>
            </span>
        </p>
    
    <div class="chart" style="height: 40px"><div class='values' style="height: 40px"><div class='value' style='top: 0px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+13</span><span class="unit unit_temperature_f" data-nosnippet>55</span></div><div class='value' style='top: 9px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+10</span><span class="unit unit_temperature_f" data-nosnippet>50</span></div><div class='value' style='top: 6px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+11</span><span class="unit unit_temperature_f" data-nosnippet>52</span></div><div class='value' style='top: 6px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+11</span><span class="unit unit_temperature_f" data-nosnippet>52</span></div><div class='value' style='top: 3px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+12</span><span class="unit unit_temperature_f" data-nosnippet>54</span></div><div class='value' style='top: 0px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+13</span><span class="unit unit_temperature_f" data-nosnippet>55</span></div><div class='value' style='top: 0px;width: 14.285714285714286%;'><span class="unit unit_temperature_c">+13</span><span class="unit unit_temperature_f" data-nosnippet>55</span></div></div><svg class='svg-temperature' viewBox='0 0 525 40' preserveAspectRatio='none' width='100%' height='40px'><defs><linearGradient id='fill-1-uniq53996' x1='0%' x2='0%' y1='0%' y2='100%'><stop offset='0' stop-color='rgba(149, 215, 11, 1)'></stop><stop offset='1' stop-color='rgba(119, 216, 14, 1)'></stop></linearGradient><linearGradient id='fill-3-uniq53996' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(104, 217, 16, 1)'></stop><stop offset='1' stop-color='rgba(119, 216, 14, 1)'></stop></linearGradient><linearGradient id='fill-5-uniq53996' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(119, 216, 14, 1)'></stop><stop offset='1' stop-color='rgba(134, 215, 12, 1)'></stop></linearGradient><linearGradient id='fill-7-uniq53996' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(119, 216, 14, 1)'></stop><stop offset='1' stop-color='rgba(149, 215, 11, 1)'></stop></linearGradient><linearGradient id='fill-9-uniq53996' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(134, 215, 12, 1)'></stop><stop offset='1' stop-color='rgba(149, 215, 11, 1)'></stop></linearGradient><linearGradient id='fill-11-uniq53996' x1='0%' x2='0%' y1='100%' y2='0%'><stop offset='0' stop-color='rgba(149, 215, 11, 1)'></stop><stop offset='1' stop-color='rgba(149, 215, 11, 1)'></stop></linearGradient></defs><g transform='translate(0, 30)' id='gPath-uniq53996'><path d='M0,0l75,0l0,1l-75,0' stroke='none' fill='rgba(149, 215, 11, 1)'></path><path d='M75,0l0,9l1,0l0,-9' stroke='none' fill='url(#fill-1-uniq53996)'></path><path d='M75,9l75,0l0,1l-75,0' stroke='none' fill='rgba(104, 217, 16, 1)'></path><path d='M150,10l0,-4l1,0l0,4' stroke='none' fill='url(#fill-3-uniq53996)'></path><path d='M150,6l75,0l0,1l-75,0' stroke='none' fill='rgba(119, 216, 14, 1)'></path><path d='M225,6l0,0' stroke='none' fill='url(#fill-5-uniq53996)'></path><path d='M225,6l75,0l0,1l-75,0' stroke='none' fill='rgba(119, 216, 14, 1)'></path><path d='M300,7l0,-4l1,0l0,4' stroke='none' fill='url(#fill-7-uniq53996)'></path><path d='M300,3l75,0l0,1l-75,0' stroke='none' fill='rgba(134, 215, 12, 1)'></path><path d='M375,4l0,-4l1,0l0,4' stroke='none' fill='url(#fill-9-uniq53996)'></path><path d='M375,0l75,0l0,1l-75,0' stroke='none' fill='rgba(149, 215, 11, 1)'></path><path d='M450,0l0,0' stroke='none' fill='url(#fill-11-uniq53996)'></path><path d='M450,0l75,0l0,1l-75,0' stroke='none' fill='rgba(149, 215, 11, 1)'></path></g><g transform='translate(0, 0)' id='gFillPath-uniq29281'><path d='M0,0l75,0l0,30l-75,0' stroke='none' fill='rgba(149, 215, 11, 0.25)'></path><path d='M75,9l75,0l0,30l-75,0' stroke='none' fill='rgba(104, 217, 16, 0.25)'></path><path d='M150,6l75,0l0,30l-75,0' stroke='none' fill='rgba(119, 216, 14, 0.25)'></path><path d='M225,6l75,0l0,30l-75,0' stroke='none' fill='rgba(119, 216, 14, 0.25)'></path><path d='M300,3l75,0l0,30l-75,0' stroke='none' fill='rgba(134, 215, 12, 0.25)'></path><path d='M375,0l75,0l0,30l-75,0' stroke='none' fill='rgba(149, 215, 11, 0.25)'></path><path d='M450,0l75,0l0,30l-75,0' stroke='none' fill='rgba(149, 215, 11, 0.25)'></path></g></svg></div>
</div>


                        
                    
                        
                            <div class="widget-row widget-row-wind-speed row-with-caption" data-row="wind-speed">
    
        <p class="widget-row-caption" data-key=wind-speed>
            <span>Середня швидкість вітру, <span class="unit unit_wind_m_s">м/c</span><span class="unit unit_wind_km_h">км/год</span></span>
        </p>
    
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                9
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                32
            </span>
        </div>
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                6
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                22
            </span>
        </div>
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                3
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                11
            </span>
        </div>
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                3
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                11
            </span>
        </div>
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                5
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                18
            </span>
        </div>
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                5
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                18
            </span>
        </div>
    
        <div class="row-item">
            <div class="item-bg" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
            <span class="wind-unit unit unit_wind_m_s">
                4
            </span>
            <span class="wind-unit unit unit_wind_km_h">
                14
            </span>
        </div>
    
</div>

                        
                    
                        
                            <div class="widget-row widget-row-wind-gust row-with-caption" data-row="wind-gust">
    
        <p class="widget-row-caption" data-key=wind-gust>
            <span>Пориви вітру, <span class="unit unit_wind_m_s">м/c</span><span class="unit unit_wind_km_h">км/год</span></span>
        </p>
    
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    13
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    47
                </span>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 170, 170, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    16
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    58
                </span>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    9
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    32
                </span>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(235, 236, 237, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    7
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    25
                </span>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    10
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    36
                </span>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    11
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    40
                </span>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-bg"
                     style="background-image: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 235, 170, 1) 30%)"></div>
                <span class="wind-unit unit unit_wind_m_s">
                    9
                </span>
                <span class="wind-unit unit unit_wind_km_h">
                    32
                </span>
            
        </div>
    
</div>

                        
                    
                        
                            <div class="widget-row widget-row-wind-direction row-with-caption" data-row="wind-direction">
    
        <p class="widget-row-caption" data-key=wind-direction>
            <span>Напрямок вітру</span>
        </p>
    
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-8">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">ПнЗ</div>
            
        </div>
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-1">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">Пн</div>
            
        </div>
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-8">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">ПнЗ</div>
            
        </div>
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-1">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">Пн</div>
            
        </div>
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-1">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">Пн</div>
            
        </div>
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-8">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">ПнЗ</div>
            
        </div>
    
        
        
        <div class="row-item">
            
                <div class="img-wrap wind-direction-degree-1">
                    <svg viewBox="0 0 20 20"><use href="#wind_arrow"/></svg>
                </div>
                <div class="direction">Пн</div>
            
        </div>
    
</div>

                        
                    
                        
                            <div class="widget-row widget-row-pollen-birch row-with-caption"
     data-row="pollen-birch"
     
         data-empty="true"
     
>
    
        <p class="widget-row-caption with-legend" data-key="pollen-birch-legend">
            <span>
                
                    <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                
                Пилок берези, бали
            </span>
        </p>
    
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
</div>


                        
                    
                        
                            <div class="widget-row widget-row-pollen-grass row-with-caption"
     data-row="pollen-grass"
     
         data-empty="true"
     
>
    
        <p class="widget-row-caption with-legend" data-key="pollen-grass-legend">
            <span>
                
                    <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                
                Пилок злакових трав, бали
            </span>
        </p>
    
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
</div>


                        
                    
                        
                            <div class="widget-row widget-row-pollen-ragweed row-with-caption"
     data-row="pollen-ragweed"
     
         data-empty="true"
     
>
    
        <p class="widget-row-caption with-legend" data-key="pollen-ragweed-legend">
            <span>
                
                    <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                
                Пилок амброзії, бали
            </span>
        </p>
    
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item item-nodata">&ndash;</div>
            
        </div>
    
</div>


                        
                    
                        
                            <div class="widget-row widget-row-precipitation-bars row-with-caption" data-row="precipitation-bars">
    
        <p class="widget-row-caption" data-key=precipitation-bars>
            <span>Опади в рідкому еквіваленті, мм</span>
        </p>
    
    
        <div class="row-item">
            
                <div class="item-unit unit-blue">2,1</div>
                <div class="item-bar" style="height: 26px"></div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-unit">0</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-unit unit-blue">0,3</div>
                <div class="item-bar" style="height: 4px"></div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-unit">0</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-unit">0</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-unit unit-blue">0,3</div>
                <div class="item-bar" style="height: 4px"></div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-unit">0</div>
            
        </div>
    
</div>

                        
                    
                        
                            <div
    class="widget-row widget-row-icon-snow row-with-caption"
    data-row="icon-snow"
    
    data-empty="true"
>
    
        <p class="widget-row-caption with-legend" data-key="icon-snow-legend">
            <span>
                <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                Сніг, що випадає, см
            </span>
        </p>
    
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
        <div class="row-item">
            
                <div class="item-nodata">&ndash;</div>
            
        </div>
    
</div>

                        
                    
                        
                            <div
    class="widget-row-chart widget-row-chart-snow row-with-caption"
    data-row="snow-height"
    
    data-empty="true"
>
    
        <p class="widget-row-caption with-legend" data-key="snow-height-legend">
            <span>
                
                    <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                
                Висота снігового покриву, см
            </span>
        </p>
    
    
            <div class="chart chart-snow js-chart-snow" data-snow="[0,0,0,0,0,0,0]">
                <div class="values"><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div><div class="value  zero" style="top: -11px; width: calc(100% / 7);">
                0
            </div></div>
                
            </div>
        
</div>


                        
                    
                        
                            <div class="widget-row widget-row-roadcondition row-with-caption" data-row="roadcondition">
    
        <p class="widget-row-caption" data-key=roadcondition>
            <span>Погода на дорогах</span>
        </p>
    
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
        <div class="row-item">
            <div class="item-icon">
                <svg><use href="#rd_new_0"/></svg>
            </div>
            
                <div class="item-description item-nodata">
                    Немає даних
                </div>
            
        </div>
    
</div>

                        
                    
                        
                            <div
    class="widget-row-chart widget-row-chart-pressure row-with-caption"
    data-row="pressure"
    
    
>
    
        <p class="widget-row-caption" data-key="pressure-legend">
            <span>
                
                Тиск, <span class='unit unit_pressure_mm_hg'>мм рт. ст.</span><span class='unit unit_pressure_h_pa'>гПа</span>
            </span>
        </p>
    
    <div class="chart ten-days"><svg class="svg-pressure" viewBox="0 0 525 32" preserveAspectRatio="none" width="100%" height="32px"><defs></defs><g transform='translate(0, 0)' id='gFillPath-uniq92420'><path d='M0,20.322580645161292l75,0l0,9.677l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path><path d='M75,13.548387096774194l75,0l0,5.806l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path><path d='M150,5.806451612903226l75,0l0,8.71l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path><path d='M225,1.935483870967742l75,0l0,2.903l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path><path d='M300,0l75,0l0,2.903l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path><path d='M375,2.903225806451613l75,0l0,4.839l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path><path d='M450,3.870967741935484l75,0l0,2.903l-75,0' stroke='none' fill='rgba(204, 102, 204, 0.2)'></path></g><g transform='translate(0, 0)' id='gPath-uniq45113'><path d='M0,20.322580645161292l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M75,21.322580645161292l0,-7.774l1,0l0,7.774' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M75,13.548387096774194l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M150,14.548387096774194l0,-8.742l1,0l0,8.742' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M150,5.806451612903226l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M225,6.806451612903226l0,-4.871l1,0l0,4.871' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M225,1.935483870967742l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M300,2.935483870967742l0,-2.935l1,0l0,2.935' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M300,0l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M375,0l0,2.903l1,0l0,-2.903' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M375,2.903225806451613l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M450,2.903225806451613l0,0.968l1,0l0,-0.968' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M450,3.870967741935484l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path></g><g transform='translate(0, 0)' id='gPath-uniq95056'><path d='M0,30l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M75,31l0,-11.645l1,0l0,11.645' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M75,19.35483870967742l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M150,20.35483870967742l0,-5.839l1,0l0,5.839' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M150,14.516129032258064l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M225,15.516129032258064l0,-10.677l1,0l0,10.677' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M225,4.838709677419355l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M300,5.838709677419355l0,-2.935l1,0l0,2.935' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M300,2.903225806451613l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M375,2.903225806451613l0,4.839l1,0l0,-4.839' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M375,7.741935483870968l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M450,8.741935483870968l0,-1.968l1,0l0,1.968' stroke='none' fill='rgb(204, 102, 204)'></path><path d='M450,6.774193548387097l75,0l0,1l-75,0' stroke='none' fill='rgb(204, 102, 204)'></path></g></svg><div class="values"><div class="value style_size_m" style="top: 20.322580645161292px; width: 14.285714285714286%;height: 24.677419354838708px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">740</span><span class="unit unit_pressure_h_pa" data-nosnippet>986</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">730</span><span class="unit unit_pressure_h_pa" data-nosnippet>973</span></div></div><div class="value style_size_m" style="top: 13.548387096774194px; width: 14.285714285714286%;height: 20.806451612903224px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">747</span><span class="unit unit_pressure_h_pa" data-nosnippet>996</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">741</span><span class="unit unit_pressure_h_pa" data-nosnippet>988</span></div></div><div class="value style_size_m" style="top: 5.806451612903226px; width: 14.285714285714286%;height: 23.70967741935484px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">755</span><span class="unit unit_pressure_h_pa" data-nosnippet>1006</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">746</span><span class="unit unit_pressure_h_pa" data-nosnippet>994</span></div></div><div class="value style_size_m" style="top: 1.935483870967742px; width: 14.285714285714286%;height: 17.903225806451612px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">759</span><span class="unit unit_pressure_h_pa" data-nosnippet>1012</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">756</span><span class="unit unit_pressure_h_pa" data-nosnippet>1008</span></div></div><div class="value style_size_m" style="top: 0px; width: 14.285714285714286%;height: 17.903225806451612px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">761</span><span class="unit unit_pressure_h_pa" data-nosnippet>1014</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">758</span><span class="unit unit_pressure_h_pa" data-nosnippet>1010</span></div></div><div class="value style_size_m" style="top: 2.903225806451613px; width: 14.285714285714286%;height: 19.838709677419356px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">758</span><span class="unit unit_pressure_h_pa" data-nosnippet>1010</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">753</span><span class="unit unit_pressure_h_pa" data-nosnippet>1004</span></div></div><div class="value style_size_m" style="top: 3.870967741935484px; width: 14.285714285714286%;height: 17.903225806451612px;"><div class='maxt'><span class="unit unit_pressure_mm_hg">757</span><span class="unit unit_pressure_h_pa" data-nosnippet>1009</span></div><div class='mint'><span class="unit unit_pressure_mm_hg">754</span><span class="unit unit_pressure_h_pa" data-nosnippet>1005</span></div></div></div></div>
</div>


                        
                    
                        
                            <div class="widget-row widget-row-humidity row-with-caption" data-row="humidity">
    
        <p class="widget-row-caption" data-key=humidity>
            <span>Відносна вологість, <span>%</span></span>
        </p>
    
    
        <div class="row-item item-7">
            68
        </div>
    
        <div class="row-item item-6">
            55
        </div>
    
        <div class="row-item item-7">
            65
        </div>
    
        <div class="row-item item-8">
            80
        </div>
    
        <div class="row-item item-8">
            79
        </div>
    
        <div class="row-item item-8">
            81
        </div>
    
        <div class="row-item item-8">
            82
        </div>
    
</div>

                        
                    
                        
                            <div class="widget-row widget-row-radiation row-with-caption" data-row="radiation">
    
        <p class="widget-row-caption with-legend" data-key="radiation-legend">
            <span>
                <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                УФ-індекс, <span>бали</span>
            </span>
        </p>
    
    
        
            
                <div class="row-item item-2">
                    2
                </div>
            
        
    
        
            
                <div class="row-item item-3">
                    3
                </div>
            
        
    
        
            
                <div class="row-item item-3">
                    3
                </div>
            
        
    
        
            
                <div class="row-item item-3">
                    3
                </div>
            
        
    
        
            
                <div class="row-item item-2">
                    2
                </div>
            
        
    
        
            
                <div class="row-item item-3">
                    3
                </div>
            
        
    
        
            
                <div class="row-item item-1">
                    1
                </div>
            
        
    
</div>

                        
                    
                        
                            <div class="widget-row widget-row-geomagnetic row-with-caption" data-row="geomagnetic">
    
        <p class="widget-row-caption with-legend" data-key=geomagnetic>
            <span>
                <svg width="16" height="16" viewBox="0 0 18 18"><use href="#info"></use></svg>
                Геомагнітна активність, <span>Кп-індекс</span>
            </span>
        </p>
    
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_3"/></svg>
            <div class="item item-3">
                3
            </div>
        </div>
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_2"/></svg>
            <div class="item item-2">
                2
            </div>
        </div>
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_3"/></svg>
            <div class="item item-3">
                3
            </div>
        </div>
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_2"/></svg>
            <div class="item item-2">
                2
            </div>
        </div>
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_2"/></svg>
            <div class="item item-2">
                2
            </div>
        </div>
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_2"/></svg>
            <div class="item item-2">
                2
            </div>
        </div>
    
        <div class="row-item">
            <svg width="54" height="54" viewBox="0 0 54 54"><use href="#gm_2"/></svg>
            <div class="item item-2">
                2
            </div>
        </div>
    
</div>

                        
                    
                </div>
                
                <script>
                    (() => {
                        const isEqualArray = (a, b) => {
                            return a.length === b.length && a.every((element, index) => element === b[index])
                        }

                        let parameters = []

                        // Не забыть удалить удалить .filter когда появить roadcondition
                        const lsParams = window.M.Storage.getArray('weather-parameters').filter(item => item !== 'roadcondition')
                        const defaultParams = [ 'icon-tooltip', 'temperature-air', 'wind-speed', 'precipitation-bars' ]

                        if (!lsParams.length) {
                            defaultParams[2] = 'wind-gust'
                            parameters = defaultParams
                        } else if (isEqualArray(lsParams, defaultParams) && window.M.Storage.getItem('weather-parameters-updated') !== '1') {
                            defaultParams[2] = 'wind-gust'
                            window.M.Storage.setObject('weather-parameters', defaultParams)
                            window.M.Storage.setItem('weather-parameters-updated', '1')
                            parameters = defaultParams
                        } else {
                            window.M.Storage.setObject('weather-parameters', lsParams)
                            parameters = lsParams
                        }

                        const rows = [].slice.call(document.querySelectorAll('.widget-weather-parameters .widget-items [data-row]'))

                        rows.forEach(item => {
                            if (!parameters.includes(item.getAttribute('data-row'))) {
                                item.classList.add('is-hide')
                            }
                        })
                    })()
                </script>
            </div>
        </div>
        <div class="weather-parameters js-weather-parameters">
    
    <div class="choose-button-wrap">
    
        <button class="choose-button js-choose-button"
                data-stat-type="button"
                data-stat-value="weather-parameters"
                aria-label="Набір даних у прогнозі"
        >
            <svg viewBox="0 0 16 16" width="16" height="16">
                <use href="#weather_settings"/>
            </svg>
            Набір даних
        </button>

    
            <div class="choose-tip js-choose-tip" style="display: none;">
                widgetsParams.tip
                <button class="close-tip" data-stat-value="weatherParametersTeaser" aria-label="Набір даних у прогнозі">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <use href="#round-close"></use>
                    </svg>
                </button>
            </div>
        </div>
    

    
        <div class="print">
    <div class="print-content" id="print-content">
        <svg><use xlink:href="#printer"/></svg>
        <span>Роздрукувати</span>
    </div>
</div>

    

    <div class="modal-menu-parameters">
        
            <button class="button back-button js-back" aria-label="Назад">
                <svg viewBox="0 0 20 20" width="20" height="20">
                    <use xlink:href="#arrow_close"/>
                </svg>
            </button>
            <div class="modal-wrap">
        
        <div class="modal-header">
            

            <div class="modal-title">
                Набір даних у прогнозі
                
                    <div class="modal-description">
                        Виберіть параметри, які бажаєте бачити у прогнозі
                    </div>
                
            </div>
        </div>
        <div class="modal-content js-modal-content">
            <div class="parameters-group js-list-parameters"></div>
        </div>
        
            </div>
        
    </div>
</div>

    


                        
                    </section>
                
                    
                    
                    <section
                        class="section section-media "
                        data-column-place="C1P3">
                        
                            
    <div class="placeholder h250"
         data-stat-type="media"
         data-stat-value="645cf41edb847c8786cbd546">
        
            <div id="div-gpt-ad-645cf41edb847c8786cbd546">
    <script>
        if (window.googletag) {
            window.googletag.cmd.push(function () {
                googletag.display('div-gpt-ad-645cf41edb847c8786cbd546')
            })
        }
    </script>
</div>

        
    </div>

                        
                        

                        

                        

                        

                        

                        
                    </section>
                
                    
                    
                    <section
                        class="section section-rss section-rss-by-column"
                        data-column-place="C1P4">
                        
                        
                            
    
    
    
        <!-- noindex -->
        
    
        
            <div class="feed-title feed-partner-title js-feed-title">
                РБК-Україна
            </div>
        
    

        <div class="feed feed-partner"
             data-stat-type="rss"
             data-widget-name="Новости"
             data-stat-value="6142fda537fac200143f0a10">
            
    
        
            <div class="feed-title feed-partner-title js-feed-title">
                РБК-Україна
            </div>
        
    

            
    
    

    

    
    

    
        
        
        
        <a href="https://c.meteofor.com.ua/feed/?click=MzM5MTUxNHwwMzg0Zjk5NjQzYTU1N2YyYzA1OGNiZWNjNWE4ZjY5Yg%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="2.45"
           data-pub-date="2024-02-10T16:55:15"
           data-ctr="64|2614|255|"
           data-news-id="65c7ad28d7b1a3bc4156bfd8">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/2fffa92bd222e31cadd49ae545e3c19b_66x44.jpg"
                 style="background-color: rgb(8, 8, 8)"
            ></div>
        </div>
        <div class="feed-text">Президент Угорщини подала у відставку</div>
    

            
        </a>
    
        
        
        
        <a href="https://c.meteofor.com.ua/feed/?click=MzM5MTQ5MnxhMjk5ZDliNDE5YTBhY2VmZDUyYWFmOTcwN2JiMWZiYQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="2.07"
           data-pub-date="2024-02-10T11:55:14"
           data-ctr="47|2266|555|"
           data-news-id="65c766dad7b1a3bc41566d65">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/17ad7485db1e41bdefecde0cb6306c91_66x44.jpg"
                 style="background-color: rgb(24, 8, 8)"
            ></div>
        </div>
        <div class="feed-text">Поліція показала перші хвилини після удару по нафтобазі у Харкові</div>
    

            
        </a>
    
        
        
        
        <a href="https://c.meteofor.com.ua/feed/?click=MzM5MTUwOXxhZWFlNzQzMzExMjBlMjgzMGM4ZmU2YThmNGNjNWM4NQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="1.54"
           data-pub-date="2024-02-10T15:50:13"
           data-ctr="56|3647|320|"
           data-news-id="65c79b91d7b1a3bc4156ad64">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/7a8ba94b42915465458a363fe2d8d96b_66x44.jpg"
                 style="background-color: rgb(40, 40, 40)"
            ></div>
        </div>
        <div class="feed-text">Незабаром з'явиться "геополітична можливість" вирішити питання Придністров'я, - Санду</div>
    

            
        </a>
    
        
        
        
        <a href="https://c.meteofor.com.ua/feed/?click=MzM5MTQ5MXxiMzY0NzdmMDM4ZGQ1MjY5MTEwMmM1ZDRmMDUwNTg1Nw%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="1.48"
           data-pub-date="2024-02-10T11:45:13"
           data-ctr="33|2225|565|"
           data-news-id="65c76356d7b1a3bc415669a9">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/ba79b94b81905af11b19dc2c251eb5c0_66x44.jpg"
                 style="background-color: rgb(152, 104, 56)"
            ></div>
        </div>
        <div class="feed-text">Мінус 75% від суми у квитанції. Кому з українців можуть дати знижку на комуналку</div>
    

            
        </a>
    
        
        
        
        <a href="https://c.meteofor.com.ua/feed/?click=MzM5MTQ4OHwyM2VmMWI4MjJiMzJkMmI5N2YxMjRmNzkyNmRkOWVmNg%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="1.27"
           data-pub-date="2024-02-10T10:55:14"
           data-ctr="33|2603|615|"
           data-news-id="65c758ced7b1a3bc41565cfa">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/69db5b28b77a501fe4a66280c75fd691_66x44.jpg"
                 style="background-color: rgb(216, 216, 216)"
            ></div>
        </div>
        <div class="feed-text">Український захисник за день знищив вісім одиниць техніки РФ (відео)</div>
    

            
        </a>
    
        
        
        
        <a href="https://c.meteofor.com.ua/feed/?click=MzM5MTUxMnw5ZThiMGI1N2VjMTFhZmRlZDczZTdkMjA3NjE2ZWI4Mw%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="1.01"
           data-pub-date="2024-02-10T16:35:15"
           data-ctr="30|2983|275|"
           data-news-id="65c7a621d7b1a3bc4156b975">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/3bc65497f820d04c7679e72e9b6095ec_66x44.jpg"
                 style="background-color: rgb(248, 248, 248)"
            ></div>
        </div>
        <div class="feed-text">Дружина була прокурором. З'явилися подробиці про сім'ю, загиблу від удару по Харкову</div>
    

            
        </a>
    

            
    

        </div>
        <!-- /noindex -->
    

                        

                        

                        

                        

                        

                        
                    </section>
                
                    
                    
                    <section
                        class="section section-content "
                        data-column-place="C1P5">
                        
                        

                        

                        

                        

                        

                        
                            <div class="widget widget-cities">
    
    <div class="cities-popular">
        
        <div class="list">
            
                <div class="list-item">
                    <a href="/weather-sant-just-desvern-51075/">
                        Сан-Жюс-Дасберн
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-lhospitalet-de-llobregat-1927/">
                        Л&#39;Успіталет-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-cornella-de-llobregat-51013/">
                        Курналя-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-joan-despi-51074/">
                        Сан-Жуан-Даспі
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-feliu-de-llobregat-51087/">
                        Сан-Фаліу-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-boi-de-llobregat-51093/">
                        Сан-Бой-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-el-prat-de-llobregat-51148/">
                        Ал-Прат-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-santa-coloma-de-cervello-51109/">
                        Санта-Кулома-да-Сарбальо
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-vicenc-dels-horts-51071/">
                        Сан-Бісенс-далс-Орс
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-barcelona-1948/">
                        Барселона
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-molins-de-rei-51038/">
                        Мулінс-да-Рей
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-barcelona-el-prat-airport-14256/">
                        Барселона Ель-Прат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-viladecans-50974/">
                        Біладаканс
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-climent-de-llobregat-51076/">
                        Сан-Клімен-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-palleja-51055/">
                        Паляжа
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-el-papiol-51145/">
                        Ал-Папіол
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-torrelles-de-llobregat-51135/">
                        Турреляс-да-Любрагат
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-cugat-del-valles-51100/">
                        Сан-Кугат-дал-Бальєс
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-la-palma-de-cervello-51019/">
                        Ла-Палма-да-Сарбальо
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-gava-50983/">
                        Габа
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-cervello-51122/">
                        Сарбальо
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-sant-andreu-de-la-barca-51068/">
                        Сант-Андреу-да-ла-Барка
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-santa-coloma-de-gramenet-1912/">
                        Санта-Кулома-да-Граманет
                    </a>
                </div>
            
                <div class="list-item">
                    <a href="/weather-vallirana-50970/">
                        Балірана
                    </a>
                </div>
            
        </div>
    </div>
</div>

                        
                    </section>
                
            </div>
        
            <div class="content-column column2" data-column="C2">
                
                
                    
                    
                    <section
                        class="section section-media "
                        data-column-place="C2P1">
                        
                            
    <div class="placeholder h250"
         data-stat-type="media"
         data-stat-value="645cf2a4573c1845fa7b03b2">
        
            <div id="div-gpt-ad-645cf2a4573c1845fa7b03b2">
    <script>
        if (window.googletag) {
            window.googletag.cmd.push(function () {
                googletag.display('div-gpt-ad-645cf2a4573c1845fa7b03b2')
            })
        }
    </script>
</div>

        
    </div>

                        
                        

                        

                        

                        

                        

                        
                    </section>
                
                    
                    
                    <section
                        class="section section-rss "
                        data-column-place="C2P2">
                        
                        
                            
    
    
    
        <!-- noindex -->
        
    
        
            <div class="feed-title feed-partner-title js-feed-title">
                Новини України та світу
            </div>
        
    

        <div class="feed feed-partner"
             data-stat-type="rss"
             data-widget-name="RSS Лента"
             data-stat-value="6142fead37fac200143f0dfe">
            
    
        
            <div class="feed-title feed-partner-title js-feed-title">
                Новини України та світу
            </div>
        
    

            
    
    

    

    
    

    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDUwNXw0NzkzN2JiZjZmNTIyYzM2MWMxMGJjNTNhMDIzOGUxYQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Главные новости"
           data-c="4.03"
           data-pub-date="2024-02-10T12:40:06"
           data-ctr="1849|45901|510|"
           data-news-id="65c7981ad7b1a3bc4156aac1">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/b72435de73d7886066d4277f86509edb_66x44.webp"
                 style="background-color: rgb(8, 8, 8)"
            ></div>
        </div>
        <div class="feed-text">Українців почнуть посилено штрафувати з 15 лютого: ось за що</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDY1M3wyZjdjY2ZhMmY2YzMwODFiMWEzMDg2MzRiODVkZWYyNQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Главные новости"
           data-c="3.21"
           data-pub-date="2024-02-10T20:05:05"
           data-ctr="110|3422|65|"
           data-news-id="65c7d759d7b1a3bc4156ead1">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/2c83113c41887364442fb1717d6a04bb_66x44.jpg"
                 style="background-color: rgb(248, 248, 248)"
            ></div>
        </div>
        <div class="feed-text">Як виглядає військовий після 20 місяців у російському полоні. Ці фото має побачити увесь світ</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ4OTE5MnwzMmFmMDJmYjRhY2Q0NmI4YTU5YjJmYmY1YWNkNTk1ZQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Главные новости"
           data-c="3.16"
           data-pub-date="2024-02-09T22:57:39"
           data-ctr="7527|238511|1333|"
           data-news-id="65c54cf9e1e5ab71d455f698">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/4/8d0930b13134d810d28006f73af21dac_66x44.webp"
                 style="background-color: rgb(88, 104, 152)"
            ></div>
        </div>
        <div class="feed-text">Вже з 1 березня українцям міцно закрутять гайки</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDU0OXxhNzk1YWQ2MWJjZDUxZjFiZGNiZWQ2MmU5MWVmN2NjYQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="3.06"
           data-pub-date="2024-02-10T15:58:09"
           data-ctr="863|28207|312|"
           data-news-id="65c7981ad7b1a3bc4156aabb">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/b1a6d6c4a820b7bcc77c88aace3b5b90_66x44.webp"
                 style="background-color: rgb(168, 104, 104)"
            ></div>
        </div>
        <div class="feed-text">Дзідзьо висловився про мобілізацію в Україні</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDQ2OHxhMGI1MWU0NWQxNzNlMDUyZGJkNTE0Mzc0MTdhZWVjMg%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="3.06"
           data-pub-date="2024-02-10T10:10:04"
           data-ctr="1217|39755|660|"
           data-news-id="65c75c56d7b1a3bc415661ec">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/0b07ceaf35d526e0dd148ed1ec7d8963_66x44.webp"
                 style="background-color: rgb(24, 24, 24)"
            ></div>
        </div>
        <div class="feed-text">Українці мають сплатити податок за володіння автомобілем</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDQ3OHxjODZlYTk1OWI4NGI1MTNkY2ZhN2UyN2U3ZDJmNjYzMw%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="3.05"
           data-pub-date="2024-02-10T16:30:02"
           data-ctr="914|29951|280|"
           data-news-id="65c75c56d7b1a3bc415661ee">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/74311401288336d61e345b2961386d54_66x44.webp"
                 style="background-color: rgb(8, 40, 72)"
            ></div>
        </div>
        <div class="feed-text">В Україні змінять тривалість відпустки для всіх</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDQzMnw2YzEwNDIxZjE1OGMxMzNiNDJjMGMwZGYyZjczMGZjYw%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="3.01"
           data-pub-date="2024-02-10T08:40:04"
           data-ctr="682|22633|750|"
           data-news-id="65c73927d7b1a3bc415637e8">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/9d2fb0250b88d1c3ee325f52d92e9a64_66x44.jpg"
                 style="background-color: rgb(248, 248, 248)"
            ></div>
        </div>
        <div class="feed-text">Маму української співачки посадили до в’язниці: "не могла витримати цей біль"</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDY0OHxhN2JkNDQwODQ2Mzk1NjhmMjgxZTYwNjEzYTBiNGM2Zg%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="3"
           data-pub-date="2024-02-10T19:30:05"
           data-ctr="57|1901|100|"
           data-news-id="65c7d054d7b1a3bc4156e512">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/5fea726fe7dc2e88ba4f2be1accf9a18_66x44.jpg"
                 style="background-color: rgb(120, 136, 168)"
            ></div>
        </div>
        <div class="feed-text">Попередження для сучасних людей. Вчені знайшли причину краху загадкової цивілізації майя</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDU3NHxmZWQzNjIzNDg0MjVjZWY5YjBlNTdhOWVlMmU3MWUwYQ%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="2.98"
           data-pub-date="2024-02-10T15:40:04"
           data-ctr="378|12698|330|"
           data-news-id="65c79f19d7b1a3bc4156b145">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/3b732dae62edb5b8be3ca5f73ceea613_66x44.webp"
                 style="background-color: rgb(8, 8, 8)"
            ></div>
        </div>
        <div class="feed-text">Путін не зміг приховати судому під час інтерв'ю Карлсону (відео)</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDYyNXw4NjNiODA4YTI3YjI1ZWNjYTg1Y2Q5YTE3OGQ2NzUxMw%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="2.43"
           data-pub-date="2024-02-10T18:25:04"
           data-ctr="43|1773|165|"
           data-news-id="65c7c241d7b1a3bc4156d639">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/ad9ac14836716239d217411afdc10f96_66x44.jpg"
                 style="background-color: rgb(40, 40, 40)"
            ></div>
        </div>
        <div class="feed-text">Першим відкрив вогонь у 2014 році. Хто такий Сухаревський, який став заступником головкома ЗСУ</div>
    

            
        </a>
    
        
        
        
        <a href="https://a.meteofor.com.ua/feed/?click=MzQ5MDYxMnxhNWRkNThkZjdlMzU1ZDgxMzg3OTAwNjk2MTBiYzg4Yw%3D%3D"
           class="feed-item"
           target="_blank"
           rel="nofollow"
           data-tag="Политика"
           data-c="1.37"
           data-pub-date="2024-02-10T17:30:04"
           data-ctr="20|1460|220|"
           data-news-id="65c7dae3d7b1a3bc4156ee6b">
            
                
    
    
        <div class="feed-img">
            <div class="img-bg js-lazy-image" data-src="https://mf-rss-images.meteofor.st/2024/1/6/3867305b8fc77f80b35e2dfcbed1232d_66x44.webp"
                 style="background-color: rgb(8, 8, 8)"
            ></div>
        </div>
        <div class="feed-text">"Діти вбиті через божевілля РФ": Зеленський відреагував</div>
    

            
        </a>
    

            
    

        </div>
        <!-- /noindex -->
    

                        

                        

                        

                        

                        

                        
                    </section>
                
            </div>
        
    

</section>




    
        
        
            <footer class="footer">
    
    <div class="footer-staticlinks">
        
        
    <div class="footer-item footer-item-mobile-link js-platform-switcher js-platform-switcher-footer"
         data-platform="mobile">
        <a class="link js-mobile-version" href="javascript:;">Мобільний сайт</a>
    </div>
    <script>
        if (M.state.app.device.origin === 'mobile') {
            const el = document.querySelector('.js-platform-switcher-footer')
            el.style.display = 'block'
        }
    </script>


    </div>
    
    
    <div class="footer-text">
        
            <a href='/weather-esplugues-de-llobregat-51151/' title='Погода в Асплугас-да-Любрагаті'>Погода в Асплугас-да-Любрагаті</a> на тиждень: дані призначені лише для приватного некомерційного використання.
        

        
    </div>
    <div class="footer-copy">
        © Meteofor
    </div>
</footer>

        
    
        
            
    <div class="placeholder h1"
         data-stat-type="media"
         data-stat-value="645cf5d8db847c8786cbd54c">
        
            <div id="div-gpt-ad-645cf5d8db847c8786cbd54c">
    <script>
        if (window.googletag) {
            window.googletag.cmd.push(function () {
                googletag.display('div-gpt-ad-645cf5d8db847c8786cbd54c')
            })
        }
    </script>
</div>

        
    </div>

        
        
    
        
            
    <div class="placeholder h0"
         data-stat-type="media"
         data-stat-value="645cf667573c1845fa7b03b4">
        
            <iframe name="n05171007" style="display:none"></iframe><script>(function(Ir,Lr,_r,r){"use strict";function t(r){function u(){var r=I(hn);return G[Rn](r,Gn,Jr+":"+Zr),r}function t(){var r,r=u();return q[Rn](ur,r),(r=D[Rn](r))[Qr]=pr,r}function g(){return(sr&&!It?jn:_n)+Nt+Bt+Vt}function O(r){var t;try{return Z[Rn](Or,r)<0&&(t=$[Rn](r,yr),rr[Rn](Or,r),rr[Rn](Er,t)),Er[Z[Rn](Or,r)]}catch(r){return Ar(r),0}}function a(){function r(r){for(var t,n,o="",t=0;t<r[ot];t++)o+=1==(n=e[er[Rn](r,t)-32])[ot]?n:ar(i+n);return o}function p(){function r(r,t){function l(r){return r?(y[r]=y[r]||gr(),y[r]):gr()}function o(r){for(var t=0;t<r[ot];t++)r[t]=l(r[t]);for(;t<2;t++)rr[Rn](r,gr());return tr[Rn](r," ")}function i(r,t){var n,o,e=f();if(t=t||r,r)for(o=br(t)+1,n=0;n<o;n++)q[Rn](e,i(br(r),t));return e}function p(r,t){return"<"+Hr+" "+to+'="'+o(r)+'">'+(t||"")+"</"+Hr+">"}function f(r,t){var n=I(Hr);return G[Rn](n,to,o([r])),t&&V[Rn](n,t),n}function h(){for(var r,t=arguments,r=0;r<t[ot];r++)t[r]="."+l(t[r]);return tr[Rn](t,",")}function n(r,t,n){function o(r){function t(r,t){return x[l(St+r)]=D+_r[2][r],p([St,Mt+t,St+r],p([xt],_r[0][r])+p([yt],_r[1][r]))}for(var n,o="",e=br(),i=r[2]*r[3],n=0;n<i;n++)o+=t((e+n)%_r[0][ot],(e+n)%5);return o}for(var e,i,f,a="",c=t[3],u=t[1],s=t[0],d=u[3]&&u[1]?p([on]):"",e=0;e<c[ot];e++)C[c[e]][3]||(a+=p([kt,kt+c[e]],o(C[c[e]][1])));for(a=p([mt+n],p([gt],a)),i=xr(),e=0;e<4;e++)i[Cr[e]]=s[e];for(e in u[2]&&(i[Cr[3]]=L(i[Cr[3]])+B[Rn](r)),f=h(mt+n)+"{"+(t[4]||""),i)i[e]&&(f+="margin-"+e+":"+(" "==i[e]?"auto":i[e]+"px")+";");f+=Pn+Dr[u[0]],w+=f+="}",v[u[3]?1:0]+=d+a}function e(r){function t(r){return function(){Ir[pt][ht]=r}}var n,o,e;for(n in x)for(o=W[Rn](r,"."+n),e=0;e<o[ot];e++)_[Rn](o[e],qt,t(x[n]))}var a,c,u,v,s,d,b,g,m,x,y,w,A,k,S,z,M,R;try{if(j(r)[Jr]==tn)return}catch(r){}for(v=["",""],s=f(),d=f(),b=I(fo),g=I(Gn),m=f(),x=xr(),y=xr(),w=h(At)+"{all:initial;display:block}"+h(gt)+"{z-index:99;overflow:hidden}"+h(on)+"{clear:both}"+h(on,fo,kt)+"{display:block}"+h(St)+"{overflow:hidden;font-family:sans-serif;float:left;border:1px solid transparent;border-left:none;border-top:none;background-clip:padding-box;box-sizing:border-box;text-decoration:none;display:block;color:#fff;padding:4px;cursor:pointer}"+h(St)+":"+zt+" "+h(xt)+"{text-decoration:underline;}"+h(yt,wt,xt)+"{margin:1%;text-overflow:ellipsis;font-weight:700;font-size:14px;display:block}"+h(xt)+"{font-size:17px}"+h(yt)+"{font-weight:400;white-space:normal}",a=0;a<5;a++)w+=h(Mt+a)+"{background-color: #"+Tr[2*a]+"}"+h(Mt+a)+" "+h(yt)+"{color: #"+Tr[2*a+1]+"}";for(a=0;a<C[ot];a++)w+=h(kt+a)+C[a][4]+h(kt+a)+">"+h(St)+C[a][5];for(a=0;a<t[ot];a++)n(r,t[a],a);if(H[Rn](g,w),q[Rn](d,g),A=O(r)){for(a=0;a<br(5)+4;a++)k=f(),q[Rn](k,b),b=k;for(S=[f(At,v[0]),m,f(At,v[1]),d],a=0;a<S[ot];a++)for(q[Rn](s,S[a]),c=0;c<br(5)+2;c++)X[Rn](s,i(T),S[a]);for(e(s),z=E[Rn](A,fo),M=[],a=0;a<z[ot];a++)M[a]=z[a];for(a=0;a<M[ot];a++)R=M[a],N[Rn](R)==A&&F[Rn](A,R);q[Rn](m,b),q[Rn](A,i(T)),q[Rn](A,s)}}var t,n,o,e,i,f,a,c,u,s,d,l;for(x(p,Ht),t=[],n=[],o=0,e=[],i=[],s=m(),a=0;a<h[ot];a++){for(i=y(Lr[3][h[a]]),c=0;c<i[ot];c++)f=i[c],Z[Rn](b,f)<0&&(rr[Rn](b,f),G[Rn](f,Gn,Jr+":"+Zr));i[ot]&&(h=[])}for(a=0;a<s[ot];a++)for(d=[],l=Rr[a],v[a]=v[a]||[],c=0;c<s[a][ot];c++)if(f=s[a][c],rr[Rn](d,f),Z[Rn](v[a],f)<0){rr[Rn](v[a],f),Z[Rn](t,f)<0&&rr[Rn](t,f),n[o=Z[Rn](t,f)]=n[o]||[],rr[Rn](n[o],l);break}for(a=0;a<t[ot];a++)r(t[a],n[a])}var t,h,v,n,b,T,C,o,e,i,D,f,a,c,u,s,u,s,d,l;if(Mr){if(h=mr(Mr[2],","),v=[],n=xr(),b=[],T=8,C=Lr[2],o=Lr[1],e=mr(nr[Rn](_r),"~"),i="0x0",D=Pt+"://"+nn+g()+"/c/"+Ft+"?"+Jt+"=",_r[0]=mr(r(_r[0])),_r[1]=mr(r(_r[1])),_r[2]=mr(_r[2]),!Rr)return Ar(_no+" "+fo);for(t=0;t<C[ot];t++){for(f=mr(C[t]),a=nr[Rn](f),c=mr(o[a]),u=L(f[6]),s=L(f[7]),u=!!(u&&u>P()||s&&s<P()),s="{width:"+100/c[2]+"%;height:"+100/c[3]+"%}",d="{width:"+c[0]+"px;height:"+c[1]+"px;border:0;",l=0;l<4;l++)f[l]&&(d+="margin-"+Cr[l]+":"+(" "==f[l]?"auto":f[l]+"px")+";");f[4]?d+="float:"+Cr[f[4]]:d+="clear:both",d+="}",C[t]=[a,c,f[5],u,d,s]}p()}}function n(){for(var r,t,n=mr(Mr[1],"$"),r=0;r<n[ot];r++)for(n[r]=mr(n[r]),t=0;t<4;t++)n[r][t]=mr(n[r][t],".");return n}function m(r){for(var t,n,o,e,i,f,a,c,u,s=[],d=s,t=0;t<Rr[ot];t++)if(r||(s[t]=[],d=s[t]),Rr[t])for(f=(i=Rr[t])[2],o=y(Lr[3][f[0]]),n=0;n<o[ot];n++){if(e=o[n],a=f[1],c=f[2],a)for(;N[Rn](e)&&a--;)e=N[Rn](e);if(c)for(u=T,c<0&&(u=R,c=0-c);u[Rn](e)&&c--;)e=u[Rn](e);rr[Rn](d,e)}return s}function o(){Lr=mr(Lr,"`"),Lr=[mr(Lr[0],"&"),mr(Lr[1],"&"),mr(Lr[2],"&"),mr(Lr[3],"|")],Mr=e(),Rr=n(),Ir[wr]=[t,0],p&&(Ar=r[Ur][lt][Mn](r[Ur])),x(s,_t)}function e(){for(var r,t,n,o,e,i,f=[],a=Ir[pt][Wt],c=a[ot],n=0;n<Lr[0][ot];n++)for(Lr[0][n]=mr(Lr[0][n],Br),r=mr(Lr[0][n][0]),o=0;o<r[ot];o++)if(i=(e=r[o])[ot],rr[Rn](f,e),e==Bt||e==a||ir[Rn](a,c-i)==e&&a[c-i-1]==Bt)return Lr[0][n];t||Ar("no",f)}function s(){function r(){var r=v[Rn](e);if(b[Rn](e)==f&&r[ot]>Ht)return t(r);i=l(),n()}function t(r){try{var t=I(Tn);return rr[Rn](Ir[wr],[g(),ro,"/"+sn,0]),H[Rn](t,Sr[Rn](r,vn,wr)),C(t)}catch(r){}}function n(r){if(r&&!sr++)return x(s,an);if(l()-i<an){if(sr++<3)return x(s,8*an);cr||a()}}function o(){for(var r,t,n,o,e,o,n,i=m(1)[0],f=y(Ut+" :"+Qt+"(a)"),a=f[ot],c=br(jt),r=c;r<c+a&&(t=f[r%a],-1<Z[Rn](i,f)||!(pr=O(t)));r++);n=u(),o=I(fo),e=I(Hr),q[Rn](pr,o),q[Rn](e,n),q[Rn](pr,e),n=(o=D[Rn](n))[Ur],h=o[Hn],ur=e,p&&(Ar=n[lt][Mn](n)),x(s,_t)}var e=new h,i=l(),f=Pt+"s://"+ro+g()+"/"+sn;k[Rn](e,vt,f),_[Rn](e,ut,r),_[Rn](e,lt,n);try{S[Rn](e,Ir[pt][ht])}catch(r){o()}}var i,f,x,c,d,y,E,I,l,p,h,i,v,b,w,A,L,k,S,_,z,j,M,i,H,N,i,R,T,B,P,X,q,F,C,W,d,D,d,J,U,$,G,K,Q,V,Y,i,Z,rr,tr,nr,f,or,er,ir,fr,ar,cr,ur,sr,dr,lr,pr,hr,vr,i,br,gr,mr,xr,yr,c,wr,Ar,kr,Sr,zr,Mr,Rr,Tr,Cr,Dr,Or,Er;r&&(i=r[bt],f=r[kn][yn],x=r[Kn][Mn](Ir),c=f(r[$r][dn],Ut)[Dn].call(Lt),d=f(r[$r][dn],Cn)[Dn][Rn](Lt),y=i[xn][Mn](Lt),E=r[Wn][dn][xn],I=i[bn][Mn](Lt),l=r[Nn][Bn],p=-1<i[Ln][In](cn),i=(h=r[Hn])[dn],v=f(i,Xn)[Dn],b=f(i,qn)[Dn],w=i[Zn],A=i[Yn],L=r[Rt],k=i[Fn],S=i[$n],_=r[oo],z=r[eo],j=r[rn],M=r[at][ct],i=r[Jn][dn],H=f(i,ft)[On],N=f(i,it)[Dn],i=r[un][dn],R=f(i,tt+Tt)[Dn],T=f(i,rt+Tt)[Dn],B=f(r[st][dn],Yr)[Dn],P=f(Ir,Kr)[Dn],X=i[Zt],q=i[gn],F=i[mn],C=q[Mn](d),W=i[xn],d=r[dt][dn],D=f(d,Vr)[Dn],J=f(d=r[Nr][dn],ln)[Dn],U=f(d,pn)[Dn],$=i[Qr],G=i[Qn],K=i[Vn],Q=i[An],V=f(i,Gr)[On],Y=f(r[Wn][dn],Gr)[On],i=r[no][dn],Z=i[In],rr=i[nt],tr=i[Pr],nr=i[et],f=r[Ct][dn],or=f[Ot],er=f[Sn],ir=f[Xt],fr=f[Xr],ar=r[Ct][zn],cr=Et&&!!r[Kt][Gt][$t](fn),ur=c,sr=0,dr=r[qr][Fr],lr=r[qr][Wr],vr=(hr=r[kn])[wn][Dt](),i=function(){},br=function(r){return dr(lr()*(r||Ht))},gr=function(){return"c"+(jt*jt*jt+br(Ht*Ht*Ht))},mr=function(r,t){return or[Rn](r,t||"|")},yr=(xr=function(){return new hr})(),c=Yt+br(),wr=c+Bn,Ar=i,kr=r[Un],f=r[Ct][dn],Sr=f[En],zr=f[Xt],Tr=mr("5d0a0a|fcc|"+"06522b|cdffd6|"+"06526d|b7d5e6|"+"a4510b|ffdfcc|"+"500a5d|fcc"),Cr=mr("top|right|bottom|left"),Dr=mr("absolute|static|relative"),yr[jr]=io,i[Dt]=function(){return str},hr[wn]=i,hr[en](hr[dn]),Or=[],Er=[],Lt&&o())}var jr,Hr,Nr,Br,n,o,e,Pr,Xr,i,qr,Fr,Wr,Jr,Ur,$r,f,a,c,Gr,Kr,Qr,f,Vr,Yr,u,s,Zr,rt,tt,nt,d,l,ot,et,p,it,ft,at,ct,ut,h,st,dt,v,b,lt,pt,ht,vt,bt,gt,mt,xt,yt,wt,At,g,kt,St,zt,Mt,m,Rt,Tt,Ct,Dt,Ot,x,Et,It,y,w,Lt,A,_t=10,jt=_t*_t,Ht=3*jt,Nt="track",k="0x0",Bt=".",S="argon_",Pt="http",Xt="substr",qt="click",Ft="redirect",Wt="host",Jt="hash",Ut="body",z="top",$t="match",c="src",M=c+"doc",Gt="userAgent",R="message",Kt="navigator",Qt="not",Vt="net",T="debug",Yt="name",C="javascript",Zt="insertBefore",D="insertAdjacentHTML",rn="getComputedStyle",tn="flex",nn=qt+Bt,on="clear",en="freeze",fn="OPR/",an=Ht,cn=S+T+"=1",un="Element",sn="z",O=sn+"mc",E="this",dn="prototype",a="Message",I="post"+a,ln="data",pn="source",L="frame",hn="i"+L,vn=Yt+"274625294",bn="create"+un,f="Child",gn="append"+f,mn="remove"+f,_="beforeend",j=L+un,c,xn=(c="querySelector")+"All",S,yn="getOwn"+(S="Property")+"Descriptor",wn="define"+S,An="getBoundingClientRect",kn="Object",Sn="charCodeAt",zn="fromCharCode",Mn="bind",Rn="call",Tn="script",Cn="head",Dn="get",On="set",En="replace",In="indexOf",Ln="cookie",T,_n=sn+"nc",jn=sn+"hc",Hn="XMLHttp"+(T="Request"),f,Nn="Date",Bn="now",Pn="position:",L,c,Xn=(L="response")+"Text",qn=L+"URL",Fn="open",Wn="ShadowRoot",Jn="Node",Un="atob",$n="send",Gn="style",S,Kn=On+"Timeout",L,Qn=On+"Attribute",Vn=(S="remove")+(L="Attribute"),Yn=On+T+(f="Header"),Zn=Dn+(c="Response")+f,ro="s.",H="Status",to="class",no="Array",c,N="parent",f,oo="add"+(f=(c="Event")+"Listener"),eo=S+f,B="chrome",io="closed",fo="slot",Xt="substr",jr="mode",Hr="div",Nr=a+c,Br="*",n="type",o="Meta",e="X",Pr="join",Xr="slice",i="eval",qr="Math",Fr="floor",Wr="random",Jr="display",Ur="console",$r="Document",f,a,c,Gr=(f="inner")+(c="HTML"),Kr=f+(a="Width"),Qr="attachShadow",f,Vr=(f="content")+"Window",Yr="offset"+a,u=",",s,Zr="none",rt="next",tt="previous",nt="push",d="span",l="p",ot="length",et="shift",p,it="parentNode",ft="textContent",Zt="insertBefore",at="JSON",ct="parse",ut="load",h="re"+ut,st=c+un,dt=c+"IFrame"+un,v="mousedown",b=f+"-"+"language",lt="error",pt="location",ht="href",vt="POST",bt="document",gt="msl",mt="sl",xt="kt",yt="kd",wt="kp",At="czv",g,kt="z",St="i",zt="hover",Mt="c",Wn="ShadowRoot",m="height",Rt="parseInt",Tt=un+"Sibling",Ct="String",Dt="to"+Ct,Ot="split",x="moz"+"Inner"+"Screen"+"X",Et=!0,It=!0,y=0;try{Et=Ir[B],void 0===Ir[x]&&(Ir[x]=1,It=!Ir[x],delete Ir[x])}catch(r){}(w=!(!Et&&!It))&&(Lt=Ir[bt],(A=t)(Ir[r]))})(this,"meteofor.com.ua*0..0.20|0..1..|0.|0.1||1@display:none;<2@display:none;<3@min-height:1450px;<4@overflow:initial;$1490..0.20|0..1..2:6:96|5.|2||3@height:1760px;$20..0.|2...1.|7..-1|3||7@display:none;***51586`300|600|1|7&300|809|1|10&300|250|1|3&650|250|2|3`0|| |20| ||01&1|| || ||02&2|| |20| ||03&3|| || ||04`body.page-columns-2 [data-column-place=\"C1P1\"]|header+.content > [data-column=\"C2\"] > section|[data-column=\"C2\"] .section.section-rss|[data-column=\"C2\"]|.page-3-days .section[data-column-place=\"C1P1\"]|body.page-columns-2:not(.page-index):not(.page-gm):not(.page-month) [data-column-place=\"C1P1\"]|body .content.wrap|.section-media[data-column-place^=\"C1P\"]",["41d~430~431~43e~440~ ~434~43b~44f~43a~442~435~439~|~421~43c~-~447~441~44b~43f~443~44c~412~43d~438~446~41a~436~42d~433~41e~432~448~411~P~o~w~e~r~b~a~n~k~2~0~m~A~h~41b~c~41c~44e~437~7~p~F~V~424~M~O~L~E~D~449~.~418~,~445~427~444~414~l~u~t~44a~44d"," !\"#$%&'(%)#)*+,'+,-.\/!$*01!23%2%45'62#\/+*$#\/-7#&#8+4$#89:!+\/!(%25\/)!-;#<!8!(%25\/)!-='+>!8*83+%2*$+'#183+%1!23-?*'9183+%\"+24$#@#&83+%8!5A89)9-B'#)8#*%2%*@+$&#,%#\"'#<)#,-CDEFGHIJK%LMMMM%NOP-Q3<8!(%\/!2)!-B+R4$#@#&8!(%)#'#8)!-S!89)T$83,%8!\"#$-S5<2)!(%@(U!8!(%A!4)!-S989%&$#8%2%VLMW%XCY-Z9*8+20\"$!2'+*%2%O[\\]^_"," +$<!@+T`!(%2*!'6a%b&+!'68#%&'(%@+1+$98#)a-.*9'683+%4#@2+&8+@83+%1!23%9%#*'9183,%4#\/#`89)%&'(%*$+89$#@#)-B!5'%&'(%45*+A+2*@9,c%24'!@#@%9%#*&3d!%8!%4$9$#&+a-='+>!8*8!(%25\/)!%9U%)#<9%@3>'(&9*%8+@+$#(*8#%2*9'68#a-;@!$:+@3+%1!23%@3>'(&(*%)$5*#%9%$!\"#*!T*%>#&!\/9-;!1+2*@+88!(%U@5)#9U#'(:9(%9%192*3,%U@5)%@##\"`+%\"+U%4$#@#&#@a-e*#%\/#<+*%\"3*6%4$9(*8++%8!2*#(`+>#%\"5\/!<8#>#%\"'#)8#*!%2%d#$#A+,%#*&+')#,-Q+>)!(%U!4!28!(%\"!*!$+(c%#*%)#*#$#,%\/#<8#%\/8#>#%$!U%U!$(&9*6%2\/!$*f#8-g@#,8#+%2*+)'#%8+%U!4#*+@!+*c%!8*9\"'9)%9%#*'9183,%&9U!,8-;#\/4!)*8!(%HhiFjDDjP%)#'#8)!%2%529'+883\/%\"!2#\/-7%8!\"#$+%+2*6%@2+%8+#\"d#&9\/#+%&'(%5d#&!%U!%8#>*(\/9%9%1+d#'-.*9'683,%9%*+4'3,%>#'#@8#,%5\"#$%&'(%U9\/3%9%\/+<2+U#86(-;#\/4!)*83,%)@!&$#)#4*+$%&'(%2k+\/#)%2%#1+86%4$#2*3\/%54$!@'+89+\/-Q+>)9,%\"$!2'+*%2%#1+86%)$!2#183\/%l)$!8#\/%&'(%24#$*!","17976f38e171c420|f172a2621d4ddd42|ed5dd082210b67a6|8eae1fb2603b88ce|7a75d296ee804f6b|96e8144ad1621263|234d42aa507a01b9|d35963d328cb5692|589b1e642668079e|ae40fb3da5ad73b8|8bcc369f8ce39f92|40e10f16c370c858|0fc9eec73d1594de|051fbad98a4ef5b7",""],"n05171007");</script>
        
    </div>

        
        
    


</body>
</html>
