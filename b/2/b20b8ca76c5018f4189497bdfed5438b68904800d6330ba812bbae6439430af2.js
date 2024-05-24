(self.webpackChunk_N_E=self.webpackChunk_e strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(94184),a=n.n(r),o=n(67294),i=n(56310),d=n(53122),u=n(95083),l=n(15905),c=n.n(l),s=o.createElement,p=function(e){return s("svg",e,s("path",{d:"M46.014 31.105L25.197 20.697a1.003 1.003 0 0 0-1.447.895v20.816a1 1 0 0 0 1.447.895l20.817-10.408a1 1 0 0 0 0-1.79zM25.75 40.79V23.21L43.33 32l-17.58 8.79z"}),s("path",{d:"M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z"}))};p.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"};var f=function(e){var t=(0,o.useRef)(),n=e.title,r=e.playing,l=void 0===r||r,f=e.muted,v=void 0===f||f,y=e.src,h=e.className,_=e.index,P=e.stream,m=e.onSwitchPiP,w=void 0===m?function(){}:m,g=e.withAds,S=void 0!==g&&g,b=(0,o.useState)(!1),A=b[0],N=b[1],W=(0,o.useState)(!1),x=W[0],k=W[1],V=(0,o.useState)(0),E=V[0],C=V[1],M=(0,o.useState)(0),z=M[0],B=M[1],I=(0,o.useState)(!0),L=I[0],R=I[1],D=(0,o.useState)(l&&v),O=D[0],Z=D[1],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.view,r=void 0===n?1:n,a=e.progress,o=void 0===a?Math.round(t.current.getCurrentTime()):a;L||(0,u.Pp)(window.location.href,{index:_,progress:Math.round(o),view:r,type:P?1:2})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){N(e),w(e)}};return function(e,t,n){var r=(0,o.useRef)(),a=(0,o.useRef)();(0,o.useEffect)((function(){r.current=e,a.current=n}),[e,n]),(0,o.useEffect)((function(){if(null!==t||n!==a.current){var e=setInterval((function(){r.current()}),t);return function(){clearInterval(e)}}}),[t,n])}((function(){return q({view:2})}),x?3e4:null,E),s("div",{className:a()(c().root,h)},n&&!A&&s("header",{className:c().header},s(d.Z,{className:c().title,color:"white",size:"medium",fontWeight:"medium"},n)),s("div",{className:a()(c().playerWrapper,S&&c().playerWrapperWithAds)},s(i.Z,{id:"videoParent-".concat(_),style:{position:"relative"},config:{file:{attributes:{id:"video-".concat(_)}}},ref:t,url:y,muted:!!S||v,controls:l&&v||!L||!S,playsinline:!0,playing:O,width:"100%",height:"100%",onEnded:function(){q({view:0})},onPlay:function(){k(!0),q()},onProgress:function(e){var t=e.playedSeconds;B(t)},onPause:function(){k(!1),C((function(e){return e+1})),q({view:3,progress:z})},onEnablePIP:T(!0),onDisablePIP:T(!1)}),S&&s("div",{className:a()(c().playOverlay,(l&&v||!L)&&c().hidden),onClick:function(e){if((!l||!v)&&L&&S){e.preventDefault(),e.stopPropagation(),R(!1);var t={partnerId:398731,category:0};ya.videoAd.loadModule("AdLoader").then((function(e){return e.AdLoader.create(t)})).then((function(e){return e.loadAd()})).then((function(e){var t=e.createPlaybackController(document.querySelector("#video-".concat(_)),document.querySelector("#videoParent-".concat(_)));t.subscribe("AdStarted",(function(){R(!1)})),t.subscribe("AdStopped",(function(){Z(!0)})),t.subscribe("AdPodSkipped",(function(){Z(!0)})),t.playAd()})).catch((function(e){console.error(e)}))}}},s(p,{className:c().playButton}))))};f.defaultProps={stream:!1,playing:!1,muted:!0,title:"",className:"",src:"",index:null};var v=f},15905:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",root:"VideoPlayer_root__uotTN",title:"VideoPlayer_title__1W_bL",header:"VideoPlayer_header__aYB0Y",playerWrapper:"VideoPlayer_playerWrapper__21_h2",playerWrapperWithAds:"VideoPlayer_playerWrapperWithAds__ftgZX",playOverlay:"VideoPlayer_playOverlay__3Ea2c",hidden:"VideoPlayer_hidden__1Dypd",playButton:"VideoPlayer_playButton__kR5po"}}}]);"footer__top-link" href="https://progorod58.ru/" target="_blank" rel="noreferrer">Pro Город Пенза</a>
                </li>
                                <li class="footer__top-item">
                    <a class="footer__top-link" href="http://prochepetsk.ru/" target="_blank" rel="noreferrer">Pro Город Кирово-Чепецк</a>
                </li>
                                <li class="footer__top-item">
                    <a class="footer__top-link" href="http://progoroduhta.ru/" target="_blank" rel="noreferrer">Pro Город Ухта</a>
                </li>
                            </ul>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="container">
                                    <ul class="footer__bottom-list">
                                                    <li>
                                <a class="footer__bottom-link" href="/auto" target="_blank" rel="noreferrer">
                                    Авто                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="/companies" target="_blank" rel="noreferrer">
                                    Компании                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="/news" target="_blank" rel="noreferrer">
                                    Новостная лента                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="http://progorod43.ru/price" target="_blank" rel="noreferrer">
                                    Технические требования к баннерным позициям                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="https://drive.google.com/file/d/1hpFdvLIy9MokHa5UINmixaSO3POo_WRw/view?usp=sharing" target="_blank" rel="noreferrer">
                                    Технические требования к макетам в газете                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="https://progorod43.ru/oferta" target="_blank" rel="noreferrer">
                                    Договор оферты                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="https://progorod43.ru/pages/article_review" target="_blank" rel="noreferrer">
                                    Обзорные статьи и пресс-релизы                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="https://progorod43.ru/specials/72219" target="_blank" rel="noreferrer">
                                    ProГород рекомендует                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="https://progorod43.ru/page169" target="_blank" rel="noreferrer">
                                    Доставка листовок                                </a>
                            </li>
                                                    <li>
                                <a class="footer__bottom-link" href="https://progorod43.ru/page385" target="_blank" rel="noreferrer">
                                    Работа в ProГороде                                </a>
                            </li>
                                            </ul>
                
                <div class="footer__info">
                    <button class="footer__info-button" type="button">Дополнительная информация</button>
                    <div class="footer__info-wrap ">
                        <div>
                            <p>Сетевое издание "WWW.PROGOROD43.RU"</p>

<p>Учредитель: ИП Карелина Е. А.</p>

<p>Редакция: ИП Карелина Е. А.</p>

<p>Главный редактор: Коротаева Виктория Анатольевна</p>

<p>Адрес редакции: 610017, Кировская обл., Киров, ул. Молодой Гвардии, 82, офис 407.</p>

<p>&laquo;На информационном ресурсе применяются рекомендательные технологии (информационные технологии предоставления информации на основе сбора, систематизации и анализа сведений, относящихся к предпочтениям пользователей сети "Интернет", находящихся на территории Российской Федерации)&raquo;. &nbsp;<a href="https://progorod43.ru/userfiles/files/%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4_%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8_%D0%A1%D0%9C%D0%982.pdf">Подробнее</a></p>

<p>Адрес электронной почты редакции: progorod43@gmail.com</p>

<p>Номер телефона редакции: 8 (8332) 43-34-43. Номер телефона для размещения рекламы на сайте progorod43.ru: 8-964-251-34-43. Номер телефона для размещения рекламы в газете "Мой Pro Город": 8-922-923-82-09 Марина.</p>

<p>Регистрационный номер ЭЛ №ФС 77-77201 от 05.12.2019 года зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций.</p>

<p>Возрастная категория сайта 16+</p>

<p>При использовании в Интернет-изданиях прямая гиперссылка на ресурс обязательна, в противном случае будут применены нормы законодательства РФ об авторских и смежных правах.<br />
<br />
Редакция портала не несет ответственности за комментарии и материалы пользователей, размещенные на сайте progorod43.ru и его субдоменах. Мнение редакции и пользователей сайта может не совпадать.</p>

<p><a href="/sout.pdf" style="text-decoration: underline;" target="_blank">Спец. оценка по условиям труда</a></p>

<p><a href="https://progorod43.ru/oferta" rel="nofollow" style="text-decoration: underline;" target="_blank">Договор оферты</a></p>

<p><a href="https://drive.google.com/file/d/1X1Ii3jIIUV1kEIIN9VvI_T1Jy-U_c3_Q/view" rel="nofollow" style="text-decoration: underline;" target="_blank">Технические требования к макетам в газете</a></p>

<p><a href="https://progorod43.ru/price" rel="nofollow" style="text-decoration: underline;" target="_blank">Размещение рекламы</a></p>
                        </div>
                        <div>
                            Администрация портала оставляет за собой право модерировать комментарии, исходя из соображений сохранения конструктивности обсуждения тем и соблюдения законодательства РФ и РТ. На сайте не допускаются комментарии, содержащие нецензурную брань, разжигающие межнациональную рознь, возбуждающие ненависть или вражду, а равно унижение человеческого достоинства, размещение ссылок не по теме. IP-адреса пользователей, не соблюдающих эти требования, могут быть переданы по запросу в надзорные и правоохранительные органы.                        </div>
                    </div>
                </div>


            <div class="footer__censor">
                16+            </div>
        </div>
    </div>

    <div class="metrics">
        <div class="metrics__container">
           <!--Новый счетчик Яндекс Метрика 2018 год -->
<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=15533329&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/15533329/3_0_5C8CBCFF_3C6C9CFF_1_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" /></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(15533329, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/15533329" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<!-- Top.Mail.Ru counter -->
<script type="text/javascript">
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "1462564", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
</script>
<noscript><div><img src="https://top-fwz1.mail.ru/counter?id=1462564;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div></noscript>
<!-- /Top.Mail.Ru counter -->

<!-- Top.Mail.Ru logo -->
<a href="https://top-fwz1.mail.ru/jump?from=1462564">
<img src="https://top-fwz1.mail.ru/counter?id=1462564;t=479;l=1" height="31" width="88" alt="Top.Mail.Ru" style="border:0;" /></a>
<!-- /Top.Mail.Ru logo -->


<!--LiveInternet logo--><a href="//www.liveinternet.ru/stat/progorod43.ru/"
target="_blank"><img src="//counter.yadro.ru/logo?14.1"
title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
alt="" border="0" width="88" height="31"/></a><!--/LiveInternet-->

<!--LiveInternet counter--><a href="https://www.liveinternet.ru/click;progorod"
target="_blank"><img id="licnt452B" width="88" height="31" style="border:0" 
title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
alt=""/></a><script>(function(d,s){d.getElementById("licnt452B").src=
"https://counter.yadro.ru/hit;progorod?t14.6;r"+escape(d.referrer)+
((typeof(s)=="undefined")?"":";s"+s.width+"*"+s.height+"*"+
(s.colorDepth?s.colorDepth:s.pixelDepth))+";u"+escape(d.URL)+
";h"+escape(d.title.substring(0,150))+";"+Math.random()})
(document,screen);</script><!--/LiveInternet-->



  <!-- GoogleAnalytics -->            <script type="text/javascript">              var _gaq = _gaq || [];              _gaq.push(['_setAccount', 'UA-34622427-1']);              _gaq.push(['_setDomainName', 'progorod43.ru']);              _gaq.push(['_trackPageview']);              (function() {                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);              })();            </script>            <!-- /GoogleAnalytics -->     

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119776604-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-119776604-1');
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9B81XYQM6E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9B81XYQM6E');
</script>
        </div>
    </div>

</footer>

<script src="/assets/409478df/jquery.js?v=1698056834"></script>
<script src="/assets/cb57bc84/js/main.js?v=1698058957"></script></body>
</html>
