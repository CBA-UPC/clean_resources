(function(d,c){var a="1079f85a6f7f7d83640b17a26d3394d5";c.reviveAsync=c.reviveAsync||{};(function(e){if(typeof e.CustomEvent==="function"){return false}function g(i,j){j=j||{bubbles:false,cancelable:false,detail:undefined};var h=document.createEvent("CustomEvent");h.initCustomEvent(i,j.bubbles,j.cancelable,j.detail);return h}g.prototype=e.Event.prototype;e.CustomEvent=g})(c);try{if(!c.reviveAsync.hasOwnProperty(a)){var f=c.reviveAsync[a]={id:Object.keys(c.reviveAsync).length,name:"revive",seq:0,main:function(){var e=function(){var g=false;try{if(!g){g=true;d.removeEventListener("DOMContentLoaded",e,false);c.removeEventListener("load",e,false);f.addEventListener("start",f.start);f.addEventListener("refresh",f.refresh);f.dispatchEvent("start",{start:true})}}catch(h){console.log(h)}};f.dispatchEvent("init");if(d.readyState==="complete"){setTimeout(e)}else{d.addEventListener("DOMContentLoaded",e,false);c.addEventListener("load",e,false)}},start:function(g){if(g.detail&&g.detail.hasOwnProperty("start")&&!g.detail.start){return}f.removeEventListener("start",f.start);f.dispatchEvent("refresh")},refresh:function(g){f.apply(f.detect())},ajax:function(e,g){var h=new XMLHttpRequest();h.onreadystatechange=function(){if(4===this.readyState){if(200===this.status){f.spc(JSON.parse(this.responseText))}}};this.dispatchEvent("send",g);h.open("GET",e+"?"+f.encode(g).join("&"),true);h.withCredentials=true;h.send()},encode:function(m,n){var e=[],h,i;for(h in m){if(m.hasOwnProperty(h)){var l=n?n+"["+h+"]":h;if((/^(string|number|boolean)$/).test(typeof m[h])){e.push(encodeURIComponent(l)+"="+encodeURIComponent(m[h]))}else{var g=f.encode(m[h],l);for(i in g){e.push(g[i])}}}}return e},apply:function(g){if(g.zones.length){var e="http:"===d.location.protocol?"http://ads.alfasense.net/adserver/www/delivery/asyncspc.php":"https://ads.alfasense.net/adserver/www/delivery/asyncspc.php";g.zones=g.zones.join("|");g.loc=d.location.href;if(d.referrer){g.referer=d.referrer}f.ajax(e,g)}},detect:function(){var e=d.querySelectorAll("ins["+f.getDataAttr("id")+"='"+a+"']");var l={zones:[],prefix:f.name+"-"+f.id+"-"};for(var r=0;r<e.length;r++){var p=f.getDataAttr("zoneid"),k=f.getDataAttr("seq"),n=e[r],s;if(n.hasAttribute(k)){s=n.getAttribute(k)}else{s=f.seq++;n.setAttribute(k,s);n.id=l.prefix+s}if(n.hasAttribute(p)){var o=f.getDataAttr("loaded"),q=new RegExp("^"+f.getDataAttr("(.*)")+"$"),g;if(n.hasAttribute(o)&&n.getAttribute(o)){continue}n.setAttribute(f.getDataAttr("loaded"),"1");for(var h=0;h<n.attributes.length;h++){if(g=n.attributes[h].name.match(q)){if("zoneid"===g[1]){l.zones[s]=n.attributes[h].value}else{if(!(/^(id|seq|loaded)$/).test(g[1])){l[g[1]]=n.attributes[h].value}}}}}}return l},createFrame:function(h){var e=d.createElement("IFRAME"),g=e.style;e.scrolling="no";e.frameBorder=0;e.allow="autoplay";e.width=h.width>0?h.width:0;e.height=h.height>0?h.height:0;g.border=0;g.overflow="hidden";return e},loadFrame:function(g,e){var h="<!DOCTYPE html>";h+="<html>";h+='<head><base target="_top"><meta charset="UTF-8"></head>';h+='<body border="0" margin="0" style="margin: 0;padding: 0;">';h+=e;h+="<body>";h+="</html>";if("srcdoc" in g&&"1"===g.parentElement.getAttribute(this.getDataAttr("srcdoc"))){g.srcdoc=h}else{var i=g.contentWindow.document||g.contentDocument;i.open();i.write(h);i.close()}},spc:function(l){this.dispatchEvent("receive",l);for(var e in l){if(l.hasOwnProperty(e)){var p=l[e];var o=d.getElementById(e);if(o){var n=o.cloneNode(false);if(p.iframeFriendly){var k=f.createFrame(p);n.appendChild(k);o.parentNode.replaceChild(n,o);f.loadFrame(k,p.html)}else{n.style.textDecoration="none";n.innerHTML=p.html;var g=n.getElementsByTagName("SCRIPT");for(var m=0;m<g.length;m++){var r=document.createElement("SCRIPT");var q=g[m].attributes;for(var h=0;h<q.length;h++){r[q[h].nodeName]=q[h].value}if(g[m].innerHTML){r.text=g[m].innerHTML}g[m].parentNode.replaceChild(r,g[m])}o.parentNode.replaceChild(n,o)}this.dispatchEvent("loaded",{id:e,data:p})}}}this.dispatchEvent("completed",l)},getDataAttr:function(e){return"data-"+f.name+"-"+e},getEventName:function(e){return this.name+"-"+a+"-"+e},addEventListener:function(e,g){d.addEventListener(this.getEventName(e),g)},removeEventListener:function(e,g){d.removeEventListener(this.getEventName(e),g,true)},dispatchEvent:function(e,g){d.dispatchEvent(new CustomEvent(this.getEventName(e),{detail:g||{}}))}};f.main()}}catch(b){if(console.log){console.log(b)}}})(document,window); d-sm-none">
            <a href="/search" class="">
              <i class="fa fa-lg fa-search"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="header-right">
        <div class="account-menu">
          
            
<script>
  window.current_user_country_code = 'ES';
  window.is_bot = rm_h.utils.isBot();
</script>


  <div id="accountMenu" class="dropdown-menu keep-open-on-click" role="menu">
    <div class="dropdown-menu">
      <a class='null' href='https://grouple.co/internal/auth/register?siteId=1'  target='_blank'>
        <div class="dropdown-item">Регистрация</div>
      </a>
      <a class='null' href='/internal/auth'  >
        <div class="dropdown-item">Вход</div>
      </a>

      <div class="dropdown-divider"></div>

      <a href="/internal/add" title="Добавить мангу и все остальное на сайт">
    <div class="dropdown-item">Добавить мангу на сайт</div>
</a>

<a href="/search/advanced">
    <div class="dropdown-item">Подбор для Вас</div>
</a>

      <div class="dropdown-divider"></div>

      <div class="dropdown-item">
        <div class="theme-controller">
  
    <div class="theme-toggle"></div>
  
  
    
      <button onclick="rm_h.settings.changeTheme('sk1');" class="skinButton skin1"><!----></button>
    
      <button onclick="rm_h.settings.changeTheme('sk2');" class="skinButton skin2"><!----></button>
    
      <button onclick="rm_h.settings.changeTheme('sk3');" class="skinButton skin3"><!----></button>
    
      <button onclick="rm_h.settings.changeTheme('sk4');" class="skinButton skin4"><!----></button>
    
      <button onclick="rm_h.settings.changeTheme('sk5');" class="skinButton skin5"><!----></button>
    
      <button onclick="rm_h.settings.changeTheme('sk8');" class="skinButton skin8"><!----></button>
    
      <button onclick="rm_h.settings.changeTheme('sk9');" class="skinButton skin9"><!----></button>
    
  
  
</div>

      </div>
    </div>
  </div>

  <div class="header-item disable-mobile">
    <a class='strong nav-link' href='https://grouple.co/internal/auth/register?siteId=1'  target='_blank'>Регистрация</a>
  </div>
  <div class="header-item disable-mobile">
    <a class='strong nav-link login-link' href='/internal/auth'  >Вход</a>
  </div>
   


<script>
  
  
</script>
          
        </div>

        <div class="header-right-desktop">
          <form action="/search" method="post" class="searcher ml-sm-2" >
  <div id="fast-search" class="fast-search input-group">
    <select id="q" placeholder="Название манги или автор" class="form-control head-suggestion" maxlength="50"></select>
    <span class="input-group-append">
      <button type="submit" title="Поиск" class="btn btn-secondary">
        <span class="fa fa-search"></span>
      </button>
    </span>
    <a href="/search/advanced" class="fast-search__advanced">
      <i class="far fa-sliders-h"></i>
    </a>
    

<div class="pills">
  <label class="pill">
    <input checked type="checkbox" name="fast-filter" value="CREATION">
    <div class="pill-text">манга</div>
  </label>
  <label class="pill">
    <input type="checkbox" name="fast-filter" value="PERSON">
    <div class="pill-text">персоны</div>
  </label>
  
    <label class="pill">
      <input checked type="checkbox" name="fast-filter" value="FEDERATION_MANGA_SUBJECT">
      <div class="pill-text">другие сайты</div>
    </label>
  




  <label class="pill">
    <input type="checkbox" name="fast-filter" value="COLLECTION">
    <div class="pill-text">коллекции</div>
  </label>
  <label class="pill">
    <input type="checkbox" name="fast-filter" value="ANOTHER">
    <div class="pill-text">прочее</div>
  </label>
</div>
  </div>
</form>
          <div class="theme-toggle ml-2"></div>
        </div>

        <div class="header-right-mobile">
        </div>

        <button class="navbar-toggler collapsed" onclick="rm_h.mobileUserMenu.toggle()" aria-expanded="false" aria-label="Меню">
          <i class="fa fa-user-circle fa-lg"></i>
        </button>
      </div>
    </div>

    <div class="header-other">
      
        <div class="federation-nav" style="display: none">
          <div class="container">
            

  <a href="https://grouple.co" title="Закладки, активности, общение" rel="nofollow">GroupLe</a>

  
    
      <a href="https://readmanga.live" title="Читай мангу">ReadManga</a>
    
  
    
      <a href="/internal/redirect?type=site&amp;id=2" title="Читай мангу по-взрослому">MintManga</a>
    
  
    
      <a href="https://doramatv.live" title="Смотри и обсуждай Дораму онлайн">DoramaTV</a>
    
  
    
      <a href="https://librebook.me" title="Читай книги онлайн">LibreBook</a>
    
  
    
      <a href="https://findanime.net" title="Смотри и обсуждай аниме онлайн">FindAnime</a>
    
  
    
      <a href="https://selfmanga.live" title="Создавай и читай мангу">SelfManga</a>
    
  
    
      <a href="https://selflib.me" title="Пиши и читай самиздат">SelfLib</a>
    
  
    
      <a href="https://rumix.me" title="Читай лицензионную мангу">RuMix</a>
    
  
    
      <a href="/internal/redirect?type=site&amp;id=9" title="Смотри сериалы">Mose</a>
    
  
    
      <a href="https://mult.koro.life" title="Смотри мультфильмы">Mult</a>
    
  

          </div>
        </div>
      

      <div class="second-nav hide">
        <div class="container">
          
<div class="nav-sub-menu">
  <div class="row">


    <div class="col-md-3 col-6">
      <ul>
        <li><a href="/review/list">Рецензии</a></li>
        <li><a href="/collection">Коллекции</a></li>
        <li><a href="/news/allnews">Новости</a></li>
        <li><a href="/quote">Цитаты</a></li>
      </ul>
    </div>
    <div class="col-md-3 col-6">
      <ul>
        <li><strong><a href="/list?sortType=updated">Каталог</a></strong></li>
        <li><a href="/list?sortType=created">Новинки</a></li>
        <li><a href="/list?sortType=votes">По рейтингу</a></li>
        

        <li><a href="/internal/random">Случайная манга</a></li>

      </ul>
    </div>
    <div class="col-md-3 col-6">
      <ul>

        <li>
          
            <a href="/list/authors/sort_name">Авторы</a>
          
        </li>
        <li><a href="/list/genres/sort_name">Жанры</a></li>
        <li><a href="/list/tags/sort_name">Теги</a></li>
      </ul>
    </div>
    <div class="col-md-3 col-6" >
      <ul>
        <li><a href="/news/calendar/month">Календарь</a></li>
        
          <li><a href="/recommendations/index" title="Персональные рекомендации" class="strong">Рекомендации</a></li>
        
        <li><a href="/list?sortType=rate&filter=sale" title="Купить мангу онлайн">Лицензия</a></li> <li><a href="https://librebook.me" title="Читай и обсуждай книги онлайн">Книги</a><li>
      </ul>
    </div>
  </div>
</div>

<script type="text/javascript">
  rm_h.navMenu.process();
</script>
        </div>
      </div>

      <div id="navbar-menu" class="collapse navbar-collapse"></div>
    </div>
  </div>
</header>
<script>
  rm_h.layout.initEverything();
</script>

  

  

  <div class="pageBlock container " id="mangaBox">
    
      
    

    <div class="co_ba top_ba">
  <noindex>
    
    <script>
      decodeBaBlocks(
        'PHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIC5jb19iYS50b3BfYmEge21heC1oZWlnaHQ6IDEyMHB4O21pbi1oZWlnaHQ6IDEyMHB4O30NCjwvc3R5bGU+DQoNCjxkaXYgaWQ9ImFkZm94XzE2NjM5MTkxMjE4ODAxMzAwNyI+PC9kaXY+DQo=',
        'PHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIC5jb19iYS50b3BfYmEge21heC1oZWlnaHQ6IDEyMHB4O21pbi1oZWlnaHQ6IDEyMHB4O30NCjwvc3R5bGU+DQoNCg0KPGRpdiBpZD0iYWRmb3hfMTY2MzkxOTA4MTczNjk2NDY5Ij48L2Rpdj4NCg==',
        '',
        ''
      );
    </script>





  </noindex>
</div>
    
    
      <div class="leftContent">
        

  <h1>Самое популярное на сайте</h1>
  <p class="alert alert-info">Для получения персональных рекомендаций <a href="/recommendations/explorations" title="Обучение">расскажите нам о себе</a></p>

  
    

<div class="tiles row">
  
    

<div class="tile col-sm-6   manga-psm el_9049">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.79">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.82300186157227%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/19_dnei___odnajdy__A5a77" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/79/477_p.jpg' title='19 дней — Однажды' alt='19 дней — Однажды' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/19_dnei___odnajdy__A5a77" title="19 дней — Однажды">19 дней — Однажды</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-9049-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="9049" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">405</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="19 дней — Однажды">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>повседневность</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>драма</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Юноши</span>

    <br>
  

<div class="manga-description">
  Стрипы про четырех школьников, сперва в виде комедийных зарисовок, позже перерастающие в маньхуа с полноценным сюжетом. Нулевая глава маньхуа является ваншотом, который вошел в сборник историй разных авторов «19 Дней».
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/old_xian" hidePic="true" class="person-link">Олд Сянь</a>, <a href="/list/person/mosspaca_studio" hidePic="true" class="person-link">Студия Мосспака</a>
      
      
      
        <br/>

        <a href="/list/genre/school" class="badge badge-light element-link">школа</a> <a href="/list/genre/romance" class="badge badge-light element-link">романтика</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--9049 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 9049, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 9049, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_16132">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.77">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.32389640808105%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/podniatie_urovnia_v_odinochku__A35c96" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/76/482_p.jpg' title='Поднятие уровня в одиночку (Solo Leveling: Na Honjaman Lebel-eob)' alt='Поднятие уровня в одиночку (Solo Leveling: Na Honjaman Lebel-eob)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/podniatie_urovnia_v_odinochku__A35c96" title="Поднятие уровня в одиночку">Поднятие уровня в одиночку</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-16132-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="16132" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">201</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Поднятие уровня в одиночку">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Solo Leveling">Solo Leveling</h5>
  
  
    
  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>игра</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>приключения</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Городское фэнтези</span>

  <span class='badge badge-secondary '>Современное фэнтези</span>

  <span class='badge badge-secondary '>По мотивам романа</span>

  <span class='badge badge-secondary '>Призраки</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Артефакты</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Гильдии</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Драконы</span>

  <span class='badge badge-secondary '>Сокрытие личности</span>

  <span class='badge badge-secondary '>Животные-компаньоны</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Квесты</span>

  <span class='badge badge-secondary '>Легендарное оружие</span>

  <span class='badge badge-secondary '>Выживание</span>

  <span class='badge badge-secondary '>Брат и сестра</span>

  <span class='badge badge-secondary '>Нежить</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Насилие</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Подземелья</span>

  <span class='badge badge-secondary '>Жестокий мир</span>

  <span class='badge badge-secondary '>Эльфы</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Игровые элементы</span>

  <span class='badge badge-secondary '>Монстры</span>

  <span class='badge badge-secondary '>Спасение мира</span>

  <span class='badge badge-secondary '>Война</span>

  <span class='badge badge-secondary '>Волшебники</span>

    <br>
  

<div class="manga-description">
  10 лет назад, после того как распахнулись Врата, связавшие наш мир с миром монстров, некоторые люди приобрели способности, позволяющие им охотиться на монстров внутри Врат. Их стали именовать Охотниками. Однако не все Охотники были сильны. Моё имя — Сун Джин-У, я охотник ранга Е. Мне приходится рисковать своей жизнью в самых низкоуровневых подземельях. Не имея необходимых навыков, я едва мог зарабатывать деньги, сражаясь со слабейшими монстрами... По крайней мере это длилось до того, пока я не нашёл скрытое подземелье, сложнейшее из всех подземелий ранга D! Находясь на грани жизни и смерти, я внезапно получил странную силу — «Систему», содержащую секреты и особенности поднятия уровня, о которых&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/adventure" class="badge badge-light element-link">приключения</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--16132 TRUE-->
    <span onclick="rm_h.recommendations.sendLike(this, 16132, true)" title="Нравится" class="selected">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 16132, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
        
          <span class='mangaEmpty'>Без глав</span>
        
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6  manga-mtr  el_5530">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.8">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.99570274353027%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/vanpanchmen" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/04/997_p.jpg' title='Ванпанчмен (One Punch-Man)' alt='Ванпанчмен (One Punch-Man)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/vanpanchmen" title="Ванпанчмен">Ванпанчмен</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-5530-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="5530" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">283</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Ванпанчмен">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="One Punch-Man">One Punch-Man</h5>
  
  
    
  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>сэйнэн</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>сверхъестественное</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Монстродевушки</span>

  <span class='badge badge-secondary '>Пародия</span>

  <span class='badge badge-secondary '>Спасение мира</span>

  <span class='badge badge-secondary '>Апокалипсис</span>

  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Самураи</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Ниндзя</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Роботы</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Насилие</span>

  <span class='badge badge-secondary '>Философия</span>

  <span class='badge badge-secondary '>Супергерои</span>

  <span class='badge badge-secondary '>Преступники</span>

  <span class='badge badge-secondary '>Учитель-ученик</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Монстры</span>

    <br>
  

<div class="manga-description">
  Во вселенной комиксов никто не удивляется монстрам, злодеям и безумным ученым. Они как явления природы — неприятно, конечно, но что поделаешь? Главное, чтобы хватало героев для защиты простых людей, а дальше — как повезет. И надо же такому случиться, что Сайтама — сильнейший из героев Зет-Сити — на борца за мир и справедливость вообще не похож: лысый, невысокий, лицо невыразительное, одежда тем более, даже встать в позу и выразиться пафосно не умеет! Дело в том, что Сайтама — не тайный пришелец, мутант или миллиардер, а всего лишь безработный, однажды решивший стать сильнее и жить своим умом. За три года нетипичный герой вырос настолько, что одним ударом отправляет в аут хоть Супермена, хоть&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a> <a href="/list/genre/supernatural" class="badge badge-light element-link">сверхъестественное</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--5530 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 5530, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 5530, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_1370">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.69">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 93.77289772033691%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/dvorianstvo__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/80/778_p.jpg' title='Дворянство (Noblesse)' alt='Дворянство (Noblesse)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/dvorianstvo__A5664" title="Дворянство">Дворянство</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-1370-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="1370" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">552</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Дворянство">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Noblesse">Noblesse</h5>
  
  
    
  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>трагедия</span>

  <span class='badge badge-dark '>сэйнэн</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>сверхъестественное</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Сокрытие личности</span>

  <span class='badge badge-secondary '>Легендарное оружие</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Зверолюди</span>

  <span class='badge badge-secondary '>Роботы</span>

  <span class='badge badge-secondary '>Война</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Вампиры</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Борьба за власть</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Ранги силы</span>

    <br>
  

<div class="manga-description">
  Действия разворачиваются в «наше время». Кроме людей в мире существуют еще две расы: ноблесс или благородные и оборотни. История начинается с пробуждения после 820-летнего сна ноблесс — Кадиса Этрама Д. Рейзела (сокращенно Рей) на территории современной Южной Кореи. Выйдя из сна и ничего не зная о мире, он попадает в старшую школу «Е-Ран», где встречается с директором этой школы, являющимся его старым знакомым — Франкенштейном. Впоследствии он начинает дружить с несколькими учениками из этой школы. Всем вместе им приходится столкнуться с могущественной и агрессивной организацией «Союз», которая «закулисно» правит всем миром. # Ogami-kun
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/school" class="badge badge-light element-link">школа</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--1370 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 1370, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 1370, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_5377">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.75">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.02969741821289%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/horimiia__A5327" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/78/951_p.jpg' title='Хоримия (Horimiya)' alt='Хоримия (Horimiya)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaCompleted'>завершён</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/horimiia__A5327" title="Хоримия">Хоримия</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-5377-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="5377" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">145</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Хоримия">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Horimiya">Horimiya</h5>
  
  
    
  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>повседневность</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>комедия</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>ГГ женщина</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Глупый ГГ</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

    <br>
  

<div class="manga-description">
  Хори пытается казаться обычной старшеклассницей, тогда как на самом деле уделяет все свое время уходу за домом. Из-за постоянного отсутствия родителей-трудоголиков девушке приходится заменять младшему брату семью, заниматься уборкой, стиркой и прочими домашними делами. Однажды она встречает человека, который, так же как и она, старается не открывать свою настоящую сторону личности в школе: Миямура – молчаливый парень в очках. Теперь им двоим есть с кем поделиться и раскрыть настоящих себя, не боясь, что об этом узнают в школе.
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a> <a href="/list/genre/school" class="badge badge-light element-link">школа</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--5377 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 5377, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 5377, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_10353">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.7">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 94.06330108642578%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/skazaniia_o_demonah_i_bogah__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/28/772_crp_1_p.jpg' title='Сказания о демонах и богах (Tales of Demons and Gods: Yaoshenji)' alt='Сказания о демонах и богах (Tales of Demons and Gods: Yaoshenji)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/skazaniia_o_demonah_i_bogah__A5664" title="Сказания о демонах и богах">Сказания о демонах и богах</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-10353-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="10353" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">454</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Сказания о демонах и богах">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Tales of Demons and Gods">Tales of Demons and Gods</h5>
  
  
    
  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>героическое фэнтези</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>сянься</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>боевые искусства</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>Спасение мира</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary element-spoiler'>Месть</span>

  <span class='badge badge-secondary '>Культивация</span>

  <span class='badge badge-secondary '>Артефакты</span>

  <span class='badge badge-secondary '>Гильдии</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>Завоевание мира</span>

  <span class='badge badge-secondary '>Медицина</span>

  <span class='badge badge-secondary '>Боги</span>

    <br>
  

<div class="manga-description">
  Сильнейший в мире заклинатель демонов Не Ли погиб в битве с Мудрецом-Императором. Но его душа воплотилась вновь, вернувшись на десятилетия назад, в нём самом, тринадцатилетнем подростке. Теперь у него есть шанс исправить все ошибки, совершённые в прошлом: спасти от монстров родной город, защитить любимую, друзей и семью. В детстве Не Ли был самым слабым учеником в классе, имея духовную силу на уровне простых людей. Он и мечтать не смел стать воином, не говоря уже о заклинателе демонов, но опыт и знания, накопленные в предыдущей жизни, помогут ему стать сильнее. Ведь сейчас он знает то, что неведомо профессорам в их боевой академии.
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/heroic_fantasy" class="badge badge-light element-link">героическое фэнтези</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--10353 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 10353, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 10353, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_1819">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.72">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 94.4456958770752%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/bashnia_boga__A35c96" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/99/917_p.jpg' title='Башня Бога (Tower of God: Sin-ui Tab)' alt='Башня Бога (Tower of God: Sin-ui Tab)' width='130' height='180'/>
      
    </a>

    
      
        <div class='manga-updated  ribbon' title="16:02 21.01">обновлено</div>
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/bashnia_boga__A35c96" title="Башня Бога">Башня Бога</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-1819-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="1819" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">597</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Башня Бога">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>сверхъестественное</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Легендарное оружие</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Артефакты</span>

  <span class='badge badge-secondary '>Зверолюди</span>

  <span class='badge badge-secondary '>Игры разума</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Жестокий мир</span>

  <span class='badge badge-secondary '>Учитель-ученик</span>

  <span class='badge badge-secondary '>Монстры</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Борьба за власть</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

    <br>
  

<div class="manga-description">
  Башня — место, в котором испытывается воля и где исполняются самые невероятные желания. Если Башня избрала тебя, то всё, что надо сделать, — покорить её, и тогда у тебя будут и богатство, и власть, и сила — что бы ты ни пожелал, оно станет твоим. Однако покорение может занять годы, если не века. А ты готов покорить Башню?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/siu" hidePic="true" class="person-link">Siu</a>
      
      
      
        <br/>

        <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a> <a href="/list/genre/shounen" class="badge badge-light element-link">сёнэн</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--1819 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 1819, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 1819, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_68">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.55">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 91.07379913330078%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/fairytail__A1b916d" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/75/243_p.jpg' title='Фейри Тейл (Fairy Tail)' alt='Фейри Тейл (Fairy Tail)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/fairytail__A1b916d" title="Фейри Тейл">Фейри Тейл</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-68-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="68" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">579</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Фейри Тейл">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Fairy Tail">Fairy Tail</h5>
  
  
    
  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>этти</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>приключения</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Гильдии</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Драконы</span>

    <br>
  

<div class="manga-description">
  В королевстве Фиоре признанные маги объединены в множество гильдий, но для молодой «небесной волшебницы» Люси Хартфилии существует только одна — легендарная Фейри Тейл, куда она стремится попасть с начала сознательной жизни. Эта гильдия славится как силой и способностями своих магов, так и их экстравагантностью и бесконечным соперничеством между собой. В итоге магическое лекарство иногда оказывается хуже болезни, но такова жизнь! Вот только все знают, что Фейри Тейл — гильдия закрытая и малочисленная, для вступления нужно поручительство кого-то из членов, так что Люси, дочь лорда, оставляет семью и пускается в долгое путешествие. Многое пришлось вынести девушке в своих поисках, но в портовом&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/mashima_hiro" hidePic="true" class="person-link">Масима Хиро</a>
      
      
      
        <br/>

        <a href="/list/genre/supernatural" class="badge badge-light element-link">сверхъестественное</a> <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--68 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 68, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 68, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
        
          <span class='mangaEmpty'>Без глав</span>
        
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_6934">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.62">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 92.4368953704834%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/igrok_2013" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/03/915_p.jpg' title='Игрок (The Gamer)' alt='Игрок (The Gamer)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/igrok_2013" title="Игрок">Игрок</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-6934-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="6934" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">491</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Игрок">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="The Gamer">The Gamer</h5>
  
  
    
  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>игра</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>боевик</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Игровые элементы</span>

  <span class='badge badge-secondary '>Жестокий мир</span>

  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Учитель-ученик</span>

  <span class='badge badge-secondary '>Артефакты</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Война</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Подземелья</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Алхимия</span>

  <span class='badge badge-secondary '>Выживание</span>

  <span class='badge badge-secondary '>Квесты</span>

  <span class='badge badge-secondary '>Геймеры</span>

    <br>
  

<div class="manga-description">
  Обычным дням школьной жизни пришёл конец с тех пор, как из-за сильных пристрастий к MMORPG и другим компьютерным играм обычный геймер и посредственный ученик Хан Чжихан был одарён «богиней Геей» сверхъестественным даром под ироничным названием «Игрок». Теперь он стал игровым персонажем в реальной жизни и может прокачивать уровень, тем самым повышая свои навыки так, как сам того желает. Только из-за этого «дара свыше» он оказался втянут в Бездну — мир, полный сверхъестественных созданий и опасностей, которые будут преследовать по пятам главного героя. По этой причине Чихан должен как можно быстрее качать свой уровень и изучать новые способности, чтобы противостоять тем, кто попытается ему навредить,&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/school" class="badge badge-light element-link">школа</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--6934 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 6934, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 6934, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_93">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.82">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 96.39769554138184%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/temnyi_dvoreckii" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/97/785_p.jpg' title='Тёмный дворецкий (Black Butler: Kuroshitsuji)' alt='Тёмный дворецкий (Black Butler: Kuroshitsuji)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/temnyi_dvoreckii" title="Тёмный дворецкий">Тёмный дворецкий</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-93-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="93" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">211</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Тёмный дворецкий">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>психология</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>трагедия</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>история</span>

  <span class='badge badge-dark '>триллер</span>

  <span class='badge badge-dark '>детектив</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Дворянство</span>

  <span class='badge badge-secondary '>Дворецкий</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Сделка с демоном</span>

    <br>
  

<div class="manga-description">
  Альтернативная Англия конца XIX-го века, роскошное поместье графа Фантомхайв, дружная компания нерасторопных слуг, над которыми возвышается во всех смыслах этого слова безупречный Себастьян. Юный граф Сиэль любит разные игры, и многочисленные способности дворецкого то и дело находят себе применение. Какая же тайна между дворецким и Графом? Ведь эти двое заключили важный контракт, который касается не только кулинарных талантов Себастьяна. Секреты правильного чая, жестокость итальянской мафии, неуклюжесть слуги-новичка и даже привычки родственников графа — всё по плечу Себастьяну, недаром его любимая присказка переводится и как «Я просто дьявольски хороший дворецкий», и как «Я и демон, и дворецкий».
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/toboso_yana" hidePic="true" class="person-link">Тобосо Яна</a>
      
      
      
        <br/>

        <a href="/list/genre/thriller" class="badge badge-light element-link">триллер</a> <a href="/list/genre/tragedy" class="badge badge-light element-link">трагедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--93 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 93, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 93, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_16210">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.78">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.5270004272461%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/odnajdy_ia_stala_princessoi__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/47/695_p.jpg' title='Однажды я стала принцессой (Suddenly Became A Princess One Day: Eoneunal gongjuga doeeobeolyeossda)' alt='Однажды я стала принцессой (Suddenly Became A Princess One Day: Eoneunal gongjuga doeeobeolyeossda)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/odnajdy_ia_stala_princessoi__A5664" title="Однажды я стала принцессой">Однажды я стала принцессой</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-16210-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="16210" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">126</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Однажды я стала принцессой">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Suddenly Became A Princess One Day">Suddenly Became A Princess One Day</h5>
  
  
    
  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>исэкай</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>фэнтези</span>

    <br>
  

  
    
  <span class='badge badge-secondary element-spoiler'>Вдовцы</span>

  <span class='badge badge-secondary '>Отец и дочь</span>

  <span class='badge badge-secondary '>По мотивам романа</span>

  <span class='badge badge-secondary '>Сделка с демоном</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>Сокрытие личности</span>

  <span class='badge badge-secondary '>Империи</span>

  <span class='badge badge-secondary '>Животные-компаньоны</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Любовный треугольник</span>

  <span class='badge badge-secondary '>ГГ женщина</span>

  <span class='badge badge-secondary '>Горничные</span>

  <span class='badge badge-secondary '>Семейные ценности</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>Злые духи</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Дворянство</span>

  <span class='badge badge-secondary '>Обратный гарем</span>

  <span class='badge badge-secondary '>Борьба за власть</span>

  <span class='badge badge-secondary '>Семья</span>

  <span class='badge badge-secondary '>Воспоминания из другого мира</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Средневековье</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Амнезия</span>

  <span class='badge badge-secondary '>Рыцари</span>

    <br>
  

<div class="manga-description">
  Когда я открыла глаза, то стала принцессой. Но почему из всех персонажей этой истории именно принцессой, судьба которой тесно переплетена с кровавым Императором? Если я хочу выжить, то должна быть неприметной для его глаз. «Когда это в моём дворце начали жить ничтожные людишки?». Человек, у которого нет ни капли сочувствия, ни слезинки — этот холодный император Клод! Неужели Атанасия, пойманная императором, сможет выжить? «Что… Что мне делать?..»
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--16210 TRUE-->
    <span onclick="rm_h.recommendations.sendLike(this, 16210, true)" title="Нравится" class="selected">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 16210, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6   manga-psm el_8857">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.78">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.6544017791748%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/ih_istoriia" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/17/331_p.jpg' title='Их история (Their Story: Tamen De Gushi)' alt='Их история (Their Story: Tamen De Gushi)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/ih_istoriia" title="Их история">Их история</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-8857-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="8857" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">203</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Их история">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Their Story">Their Story</h5>
  
  
    
  <span class='badge badge-dark '>повседневность</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>школа</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Девочки</span>

  <span class='badge badge-secondary '>ГГ женщина</span>

    <br>
  

<div class="manga-description">
  Вы когда-нибудь влюблялись в того, кто стоял на автобусной остановке, такого чудесного... и милого?.. С той самой остановки и началась эта чудесная, интересная и очень романтичная история о двух девушках, их друзьях, их одноклассниках и об их школе...
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/tan_jiu" hidePic="true" class="person-link">Тан Цзю</a>, <a href="/list/person/mosspaca_studio" hidePic="true" class="person-link">Студия Мосспака</a>
      
      
      
        <br/>

        <a href="/list/genre/school" class="badge badge-light element-link">школа</a> <a href="/list/genre/romance" class="badge badge-light element-link">романтика</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--8857 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 8857, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 8857, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_758">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.8">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 96.08650207519531%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/nice_to_meet_you__kami_sama" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/15/296_p.jpg' title='Очень приятно, Бог (Nice to Meet You, Kami-sama: Kamisama Hajimemashita)' alt='Очень приятно, Бог (Nice to Meet You, Kami-sama: Kamisama Hajimemashita)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/nice_to_meet_you__kami_sama" title="Очень приятно, Бог">Очень приятно, Бог</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-758-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="758" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">157</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Очень приятно, Бог">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>гарем</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Обратный гарем</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>ГГ женщина</span>

    <br>
  

<div class="manga-description">
  Достаточно сделать лишь шаг в тень, и ты увидишь иной мир. Вперед же, в мир сумрака кустов и колодцев, в мир духов и демонов! Обычная девушка-школьница Момодзоно Нанами, оказавшись на улице и без гроша, вовсе не думала о богах и ёкаях. Но в храме бога земли, где она находит пристанище и друзей, ее ждут загадки времени и одинокий лис-хранитель. Просто ли человеку стать богом? И чем обернется любовь смертной девушки и бессмертного оборотня-кицунэ, однажды уже потерявшего возлюбленную? История эта – совсем не простая. Здесь в канву романтики, школы, гарема и прочих популярных жанров манги вплетены события драматические и неоднозначные. Вместе с героями, Нанами и Томоэ, читатели видят свет бессмертной&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/suzuki_julietta" hidePic="true" class="person-link">Судзуки Джульетта</a>
      
      
      
        <br/>

        <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a> <a href="/list/genre/supernatural" class="badge badge-light element-link">сверхъестественное</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--758 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 758, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 758, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
        
          <span class='mangaEmpty'>Без глав</span>
        
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_3261">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.64">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 92.72580146789551%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/shalnye_devchonki__A201945" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/41/663_p.jpg' title='Шальные девчонки (Girl the Wild&#39;s: Sonyeo Deo Wailjeu)' alt='Шальные девчонки (Girl the Wild&#39;s: Sonyeo Deo Wailjeu)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/shalnye_devchonki__A201945" title="Шальные девчонки">Шальные девчонки</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-3261-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="3261" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">262</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Шальные девчонки">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Girl the Wild&#39;s">Girl the Wild&#39;s</h5>
  
  
    
  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>повседневность</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>боевые искусства</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Учитель-ученик</span>

  <span class='badge badge-secondary '>Современный мир</span>

  <span class='badge badge-secondary '>Спортивное тело</span>

  <span class='badge badge-secondary '>Боевые искусства</span>

  <span class='badge badge-secondary '>Брат и сестра</span>

  <span class='badge badge-secondary '>Дружба</span>

    <br>
  

<div class="manga-description">
  Как вы думаете, какая самая главная проблема в романтике нашего времени? Конечно же, нехватка женственности и мужества. Зная творения писателей &quot;Золотого века&quot; литературы, мы можем с лёгкостью сказать, какими милыми и воспитанными девушки были в те времена. Но годы идут, и всё меняется... И об этих изменениях и расскажет эта манхва. Давайте представим обычную школу для девушек, в которой главную роль при обучении отводят боевым искусствам. Однажды управляющий этой школы призадумался и решил, что его ученицам не хватает женственности. В итоге школа переходит на совместное обучение. И, вроде, всё идёт как по маслу, но... Только один ученик мужского пола подал заявку на поступление. Без отца и матери&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/school" class="badge badge-light element-link">школа</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--3261 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 3261, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 3261, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_9856">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.75">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 94.91999626159668%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/o_moem_pererojdenii_v_sliz__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/00/969_p.jpg' title='О моём перерождении в слизь (Regarding Reincarnated to Slime: Tensei Shitara Slime Datta Ken)' alt='О моём перерождении в слизь (Regarding Reincarnated to Slime: Tensei Shitara Slime Datta Ken)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/o_moem_pererojdenii_v_sliz__A5664" title="О моём перерождении в слизь">О моём перерождении в слизь</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-9856-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="9856" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">121</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="О моём перерождении в слизь">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Regarding Reincarnated to Slime">Regarding Reincarnated to Slime</h5>
  
  
    
  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>исэкай</span>

  <span class='badge badge-dark '>гендерная интрига</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>героическое фэнтези</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>игра</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>драма</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Наёмники</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Ангелы</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Драконы</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Офисные работники</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>Воспоминания из другого мира</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Зверолюди</span>

  <span class='badge badge-secondary '>Владыка демонов</span>

  <span class='badge badge-secondary '>Игровые элементы</span>

  <span class='badge badge-secondary '>Учитель-ученик</span>

  <span class='badge badge-secondary '>По мотивам романа</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Средневековье</span>

  <span class='badge badge-secondary '>Насилие</span>

  <span class='badge badge-secondary '>Подземелья</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Призраки</span>

  <span class='badge badge-secondary '>Эльфы</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Магическая академия</span>

  <span class='badge badge-secondary '>Борьба за власть</span>

  <span class='badge badge-secondary '>Животные-компаньоны</span>

  <span class='badge badge-secondary '>Монстры</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Гоблины</span>

  <span class='badge badge-secondary '>Демоны</span>

    <br>
  

<div class="manga-description">
  37-летний японец-холостяк был зарезан на улице каким-то мерзавцем-грабителем. Тут бы и истории конец, да всё обернулось иначе: неожиданно он переродился слизью в фэнтезийном мире. Однако что может сделать, пускай и разумная, но слизь?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/heroic_fantasy" class="badge badge-light element-link">героическое фэнтези</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--9856 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 9856, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 9856, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6  manga-mtr  el_8286">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.71">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 94.15160179138184%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/idealnaia_parochka" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/00/025_p.jpg' title='Идеальная парочка (His Cheekiness is in Full Bloom: Namaikizakari.)' alt='Идеальная парочка (His Cheekiness is in Full Bloom: Namaikizakari.)' width='130' height='180'/>
      
    </a>

    
      
        <div class='manga-updated  ribbon' title="19:47 21.01">обновлено</div>
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/idealnaia_parochka" title="Идеальная парочка">Идеальная парочка</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-8286-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="8286" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">153</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Идеальная парочка">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="His Cheekiness is in Full Bloom">His Cheekiness is in Full Bloom</h5>
  
  
    
  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>спорт</span>

  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>комедия</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Друзья детства</span>

  <span class='badge badge-secondary '>Студенты</span>

  <span class='badge badge-secondary '>Семья</span>

  <span class='badge badge-secondary '>Спортивное тело</span>

  <span class='badge badge-secondary '>Двойники/близнецы</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Брат и сестра</span>

  <span class='badge badge-secondary '>Любовный треугольник</span>

  <span class='badge badge-secondary '>Современный мир</span>

  <span class='badge badge-secondary '>Цундэрэ</span>

  <span class='badge badge-secondary '>Баскетбол</span>

    <br>
  

<div class="manga-description">
  С первого взгляда менеджер школьного баскетбольного клуба Мачида Юки поняла, что у нее нет и не может быть ничего общего с первым красавцем школы и хулиганом Нарусэ Чоу. Но что делать, если этот негодник продолжает за ней ходить, словно хвостик? Дело усложняет то, этот парень играет за школьную баскетбольную команду. Мде-е, похоже, избавиться от него будет не так просто, как кажется на первый взгляд...
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/miyuki_mitsubachi" hidePic="true" class="person-link">Миюки Мицубати</a>
      
      
      
        <br/>

        <a href="/list/genre/school" class="badge badge-light element-link">школа</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--8286 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 8286, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 8286, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_15858">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.77">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.44050216674805%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/nevesta_gercoga_po_kontraktu__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/15/801_p.jpg' title='Невеста герцога по контракту (The Reason Why Raeliana Ended up at the Duke&#39;s Mansion: Geunyeoga gongjagjeolo gaya haessdeon sajeong)' alt='Невеста герцога по контракту (The Reason Why Raeliana Ended up at the Duke&#39;s Mansion: Geunyeoga gongjagjeolo gaya haessdeon sajeong)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/nevesta_gercoga_po_kontraktu__A5664" title="Невеста герцога по контракту">Невеста герцога по контракту</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-15858-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="15858" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">159</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Невеста герцога по контракту">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>исэкай</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>детектив</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>ГГ женщина</span>

  <span class='badge badge-secondary '>Воспоминания из другого мира</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Империи</span>

  <span class='badge badge-secondary '>Политика</span>

  <span class='badge badge-secondary '>Драконы</span>

  <span class='badge badge-secondary '>Огнестрельное оружие</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Средневековье</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Борьба за власть</span>

  <span class='badge badge-secondary '>Рыцари</span>

  <span class='badge badge-secondary '>Брак по расчету</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

    <br>
  

<div class="manga-description">
  После неожиданной гибели Пак Ын Ха попадает в волшебный мир, где всё идёт по знакомому ей сюжету романа. Однако она - не главная героиня этой истории, ей досталась второстепенная роль со скорым трагичным концом! Чтобы избежать своей незавидной судьбы, она заключает контракт с герцогом Ноа Волстео Виннайтом. Но всё не так просто... За добрым и ангельским лицом герцога скрывается настоящий дьявол! Сможет ли она избежать судьбы, некогда прописанной на страницах?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/drama" class="badge badge-light element-link">драма</a> <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--15858 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 15858, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 15858, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
        
          <span class='mangaEmpty'>Без глав</span>
        
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_8330">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.66">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 93.29859733581543%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/voshojdenie_geroia_chita__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/19/209_p.jpg' title='Восхождение Героя Щита (The Rising of the Shield Hero: Tate no Yuusha no Nariagari)' alt='Восхождение Героя Щита (The Rising of the Shield Hero: Tate no Yuusha no Nariagari)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/voshojdenie_geroia_chita__A5664" title="Восхождение Героя Щита">Восхождение Героя Щита</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-8330-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="8330" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">111</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Восхождение Героя Щита">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>игра</span>

  <span class='badge badge-dark '>героическое фэнтези</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>сэйнэн</span>

  <span class='badge badge-dark '>исэкай</span>

  <span class='badge badge-dark '>гарем</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>По мотивам романа</span>

    <br>
  

<div class="manga-description">
  Иватани Наофуми — типичный отаку, которого нагло призывают в другой мир и просят спасти его. Недолго ломаясь, он всё-таки решается согласиться, попутно став одним из четырёх героев — Героем Щита. И все бы ничего, если бы парня не ограбили на третий день, да еще и в изнасиловании обвинили… Ограбленный и униженный перед обществом, Наофуми решает найти обидчиков и задать им жару. Помогать с этим ему будет девушка из расы енотолюдей, которую он выкупил у работорговца…
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/adventure" class="badge badge-light element-link">приключения</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--8330 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 8330, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 8330, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_15890">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.71">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 94.21389579772949%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/nachalo_posle_konca__A3878e" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/49/514_p.jpg' title='Начало после конца' alt='Начало после конца' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/nachalo_posle_konca__A3878e" title="Начало после конца">Начало после конца</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-15890-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="15890" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">153</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Начало после конца">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>исэкай</span>

  <span class='badge badge-dark '>фэнтези</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Артефакты</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Волшебные существа</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Монстры</span>

  <span class='badge badge-secondary '>Гильдии</span>

  <span class='badge badge-secondary '>Воспоминания из другого мира</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Драконы</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>Культивация</span>

  <span class='badge badge-secondary '>Средневековье</span>

  <span class='badge badge-secondary '>По мотивам романа</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Животные-компаньоны</span>

  <span class='badge badge-secondary '>Эльфы</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Магическая академия</span>

  <span class='badge badge-secondary '>Подземелья</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>ГГ имба</span>

  <span class='badge badge-secondary '>Рыцари</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Сокрытие личности</span>

    <br>
  

<div class="manga-description">
  Знакомьтесь, Грей — правитель высокоразвитой страны. У него уже нет тех амбиций и целей, что были когда-то. Однажды заснув, он просыпается в теле младенца… Главы удалены по запросу правообладателя.
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/adventure" class="badge badge-light element-link">приключения</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--15890 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 15890, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 15890, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
        
          <span class='mangaEmpty'>Без глав</span>
        
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_1793">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.63">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 92.65959739685059%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/l_dk__A5327" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/02/732_p.jpg' title='Л-ДК (L-DK)' alt='Л-ДК (L-DK)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/l_dk__A5327" title="Л-ДК">Л-ДК</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-1793-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="1793" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">101</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Л-ДК">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>комедия</span>

    <br>
  

  

<div class="manga-description">
  Кугаяма Сюсэй, школьный «принц», отказывает всем девушкам, которые хотят с ним встречаться. Лучшая подруга Аой не исключение. За то, что парень отверг её подругу Моэ, девушка ненавидит его... До тех пор, пока по стечению обстоятельств им не приходится жить вместе в тесной квартирке, состоящей всего из одной жилой комнаты, известной в Японии под названием LDK.
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/watanabe_ayu" hidePic="true" class="person-link">Ватанабэ Аю</a>
      
      
      
        <br/>

        <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a> <a href="/list/genre/school" class="badge badge-light element-link">школа</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--1793 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 1793, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 1793, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_9836">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.64">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 92.70139694213867%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/raskolotaia_bitvoi_sineva_nebes" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/55/954_p.jpg' title='Расколотая битвой синева небес (Battle Through the Heavens: Dou Po Cangqiong)' alt='Расколотая битвой синева небес (Battle Through the Heavens: Dou Po Cangqiong)' width='130' height='180'/>
      
    </a>

    
      
        <div class='manga-updated today ribbon' title="17:31 22.01">обновлено</div>
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/raskolotaia_bitvoi_sineva_nebes" title="Расколотая битвой синева небес">Расколотая битвой синева небес</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-9836-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="9836" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">427</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Расколотая битвой синева небес">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Battle Through the Heavens">Battle Through the Heavens</h5>
  
  
    
  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>боевые искусства</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>романтика</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Воспоминания из другого мира</span>

  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Алхимия</span>

  <span class='badge badge-secondary '>Ранги силы</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>По мотивам романа</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Культивация</span>

    <br>
  

<div class="manga-description">
  В этом мире нет ни грамма волшебства. Здесь правит сильный, а слабому остаётся лишь повиноваться. Прекрасная земля, где не счесть драгоценных сокровищ, таит множество смертельных опасностей. Сяо Ян, чьим талантам не было равных уже несколько поколений, за три года растерял всё своё могущество, репутацию и, главное, обманул надежды своей матери. Какое чёрное волшебство лишило его всего на свете? И почему именно сейчас ему на голову свалилась его наречённая?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--9836 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 9836, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 9836, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_1">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.57">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 91.3776969909668%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/van_pis__A5664" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/76/146_p.jpg' title='Ван Пис (One Piece)' alt='Ван Пис (One Piece)' width='130' height='180'/>
      
    </a>

    
      
        <div class='manga-updated  ribbon' title="18:17 18.01">обновлено</div>
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/van_pis__A5664" title="Ван Пис">Ван Пис</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-1-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="1" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">1120</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Ван Пис">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>боевые искусства</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>психология</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>комедия</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Охота за головами</span>

  <span class='badge badge-secondary '>Остров</span>

  <span class='badge badge-secondary '>Морской народ</span>

  <span class='badge badge-secondary '>Море</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Странствия</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Пираты</span>

  <span class='badge badge-secondary '>Друзья детства</span>

  <span class='badge badge-secondary '>Монстры</span>

  <span class='badge badge-secondary '>Борьба за власть</span>

    <br>
  

<div class="manga-description">
  Последние слова, произнесённые перед казнью Королем Пиратов, Гол Д. Роджером, вдохновили многих выйти в море: «Мои сокровища? Я завещаю их тому, кто сможет их найти. Ищите! Я всё оставил в одном месте!». Лишённые сна и покоя люди ринулись на Гранд Лайн — самое опасное место в мире. Так началась Великая эра пиратов… Но с каждым годом романтиков становилось всё меньше: их постепенно вытесняли прагматичные пираты-разбойники, которым награбленное добро было куда ближе, чем какие-то «никчёмные мечты». Но вот одним прекрасным днём семнадцатилетний Монки Д. Луффи исполнил заветную мечту детства — отправился в море. Его цель ни много ни мало — стать новым Королём Пиратов. За достаточно короткий срок&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/oda_eiichiro" hidePic="true" class="person-link">Ода Эйитиро</a>
      
      
      
        <br/>

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--1 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 1, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 1, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6   manga-psm el_12469">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.75">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.04429817199707%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/itog__A5327" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/17/949_p.jpg' title='Итог (At the End of the Road: Geu Kkeut-e Issneun Geos)' alt='Итог (At the End of the Road: Geu Kkeut-e Issneun Geos)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/itog__A5327" title="Итог">Итог</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-12469-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="12469" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">68</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Итог">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="At the End of the Road">At the End of the Road</h5>
  
  
    
  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>психология</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>школа</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary element-spoiler'>Месть</span>

  <span class='badge badge-secondary '>Амнезия</span>

  <span class='badge badge-secondary '>Насилие</span>

  <span class='badge badge-secondary '>Юноши</span>

  <span class='badge badge-secondary '>Обмен телами</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

    <br>
  

<div class="manga-description">
  Жизнь — постоянная борьба за существование. Каждый день как белка в колесе. Какая школа? Не до жиру — быть бы живу. Одна отрада — бокс. Закрыть бы глаза и проснуться другим человеком… Но что ты будешь делать, если твое желание сбудется? Кем ты станешь в новой жизни?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/haribo" hidePic="true" class="person-link">Харибо</a>
      
      
      
        <br/>

        <a href="/list/genre/supernatural" class="badge badge-light element-link">сверхъестественное</a> <a href="/list/genre/school" class="badge badge-light element-link">школа</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--12469 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 12469, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 12469, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_2726">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.8">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 95.96940040588379%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/bezdomnyi_bog" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/41/730_p.jpg' title='Бездомный Бог (Noragami)' alt='Бездомный Бог (Noragami)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaCompleted'>завершён</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/bezdomnyi_bog" title="Бездомный Бог">Бездомный Бог</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-2726-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="2726" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">144</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Бездомный Бог">
    
<noindex>
  <div class="html-popover-holder">
    

  
  
    
  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>фэнтези</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Семья</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Призраки</span>

  <span class='badge badge-secondary '>Огнестрельное оружие</span>

  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Монстры</span>

  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Крутой ГГ</span>

  <span class='badge badge-secondary '>ГГ женщина</span>

  <span class='badge badge-secondary '>Выживание</span>

  <span class='badge badge-secondary '>Философия</span>

  <span class='badge badge-secondary '>Злые духи</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>Несколько ГГ</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>Холодное оружие</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

    <br>
  

<div class="manga-description">
  «Бог, который может мечом отменить приговор». В мире людей есть Бог, который может проникнуть в самое сердце человека. Когда вы грустите, когда вы устали, если вы посмотрите наверх, до самого рая, то увидите номер телефона. Но самое важное – не звонить! Если вы позвоните, перед вами появится парень, который с наглым выражением лица скажет: «Возрадуйся, я – Бог». Если это произойдет, то что вы будете делать?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/adachi_toka" hidePic="true" class="person-link">Адати Тока</a>
      
      
      
        <br/>

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--2726 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 2726, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 2726, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_8573">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.61">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 92.18469619750977%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/reinkarnaciia_bezrabotnogo__istoriia_o_prikliucheniiah_v_drugom_mire" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/79/575_p.jpg' title='Реинкарнация безработного: История о приключениях в другом мире (Mushoku Tensei: If I Get to a Parallel Universe I&#39;ll Bring: Mushoku Tensei - Isekai Ittara Honki Dasu)' alt='Реинкарнация безработного: История о приключениях в другом мире (Mushoku Tensei: If I Get to a Parallel Universe I&#39;ll Bring: Mushoku Tensei - Isekai Ittara Honki Dasu)' width='130' height='180'/>
      
    </a>

    
      
        <div class='manga-updated  ribbon' title="17:34 18.01">обновлено</div>
      
    
  </div>

  


  <div class="desc">
    <h3>
      <a href="/reinkarnaciia_bezrabotnogo__istoriia_o_prikliucheniiah_v_drugom_mire" title="Реинкарнация безработного: История о приключениях в другом мире">Реинкарнация безработного: История о приключениях в другом мире</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-8573-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="8573" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">105</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Реинкарнация безработного: История о приключениях в другом мире">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Mushoku Tensei: If I Get to a Parallel Universe I&#39;ll Bring">Mushoku Tensei: If I Get to a Parallel Universe I&#39;ll Bring</h5>
  
  
    
  <span class='badge badge-dark '>гендерная интрига</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>сэйнэн</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>психология</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>трагедия</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>этти</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>исэкай</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Жестокий мир</span>

  <span class='badge badge-secondary '>Разумные расы</span>

  <span class='badge badge-secondary '>Эльфы</span>

  <span class='badge badge-secondary '>Магия</span>

  <span class='badge badge-secondary '>Монстродевушки</span>

  <span class='badge badge-secondary '>Навыки</span>

  <span class='badge badge-secondary '>Политика</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>По мотивам романа</span>

  <span class='badge badge-secondary '>Горничные</span>

  <span class='badge badge-secondary '>Насилие</span>

  <span class='badge badge-secondary '>Волшебники</span>

  <span class='badge badge-secondary '>Выживание</span>

  <span class='badge badge-secondary '>Боги</span>

  <span class='badge badge-secondary '>Рыцари</span>

  <span class='badge badge-secondary '>Бои на мечах</span>

  <span class='badge badge-secondary '>Реинкарнация</span>

  <span class='badge badge-secondary '>Воспоминания из другого мира</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Учитель-ученик</span>

  <span class='badge badge-secondary '>Хикикомори</span>

  <span class='badge badge-secondary '>Зверолюди</span>

  <span class='badge badge-secondary '>Средневековье</span>

  <span class='badge badge-secondary '>Магическая академия</span>

  <span class='badge badge-secondary '>Брат и сестра</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

  <span class='badge badge-secondary '>Монстры</span>

    <br>
  

<div class="manga-description">
  34-летнего отаку-затворника выгнали из дома родственники после похорон его родителей. Этот жирный и уродливый девственник без гроша в кармане осознал, что его жизнь подошла к концу. Затем он понял, что его жизнь вообще могла бы быть намного лучше, если бы тот мог избавиться от тёмных страниц своей жизни. Пребывая в сожалениях, мужчина увидел, как грузовик со спящим водителем быстро надвигается на трёх школьников. Собрав все свои силы, он попытался спасти их и погиб. А открыв глаза, он обнаружил, что переродился в мире меча и магии как Рудеус Грейрат. Получив в этом мире новую жизнь, Рудеус решил, что в этот раз проживёт свою жизнь на полную, безо всяких сожалений! И так началось приключение человека,&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/tragedy" class="badge badge-light element-link">трагедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--8573 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 8573, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 8573, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_393">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.64">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .6
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 92.86040306091309%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/__princ" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/67/978_p.jpg' title='½ Принц (½ Prince: ½ Wangzi)' alt='½ Принц (½ Prince: ½ Wangzi)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/__princ" title="½ Принц">½ Принц</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-393-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="393" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">82</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="½ Принц">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="½ Prince">½ Prince</h5>
  
  
    
  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>гендерная интрига</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>гарем</span>

  <span class='badge badge-dark '>игра</span>

  <span class='badge badge-dark '>научная фантастика</span>

  <span class='badge badge-dark '>героическое фэнтези</span>

  <span class='badge badge-dark '>драма</span>

    <br>
  

  

<div class="manga-description">
  «…Просто мой способ убивать противника слегка напоминает фильмы ужасов, плюс кровавые ванны так хорошо сказываются на коже. И это признак хороших манер – улыбаться людям! Из-за такой ерунды они дали мне ужасное прозвище, какая несправедливость!» — Фэн Лань, главная героиня. «Вторая жизнь» — это не просто очередная компьютерная игра, это действительно «вторая жизнь». Игрок там — не нечто, чем управляешь, а ты сам. И ты можешь быть кем угодно, хоть эльфом, хоть оборотнем. Можешь разгуливать по городам и кладбищам, можешь драться или стать звездой сцены. Можешь даже жениться! Реализм игры просто невероятен, до 99%! Ты не играешь, ты живёшь! И теперь в эту игру вступит Фэн Лань, бойкая девчушка,&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      
      
      
      
        

        <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a> <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--393 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 393, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 393, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_4381">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.74">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .7
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 94.85269546508789%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/dnevnoi_zvezdopad__A5327" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/00/948_p.jpg' title='Дневной звездопад (Daytime Shooting Star: Hirunaka no Ryuusei)' alt='Дневной звездопад (Daytime Shooting Star: Hirunaka no Ryuusei)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/dnevnoi_zvezdopad__A5327" title="Дневной звездопад">Дневной звездопад</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-4381-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="4381" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">85</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Дневной звездопад">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Daytime Shooting Star">Daytime Shooting Star</h5>
  
  
    
  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>повседневность</span>

  <span class='badge badge-dark '>школа</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>сёдзё</span>

  <span class='badge badge-dark '>комедия</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>ГГ женщина</span>

  <span class='badge badge-secondary '>Учитель-ученик</span>

    <br>
  

<div class="manga-description">
  Пятнадцатилетней провинциальной девушке пришлось переехать в Токио к своему дяде в связи с переводом её отца. Прибыв в Токио, она столкнулась с загадочным парнем. Кто он? И почему он оказался в кафе её дяди? Кто её сосед по парте? И что связывает этих троих?
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/yamamori_mika" hidePic="true" class="person-link">Ямамори Мика</a>
      
      
      
        <br/>

        <a href="/list/genre/shoujo" class="badge badge-light element-link">сёдзё</a> <a href="/list/genre/school" class="badge badge-light element-link">школа</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--4381 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 4381, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 4381, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_329">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.83">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .8
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 96.62610054016113%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/serdca_pandory__A5327" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/01/03/279_p.jpg' title='Сердца Пандоры (Pandora Hearts)' alt='Сердца Пандоры (Pandora Hearts)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/serdca_pandory__A5327" title="Сердца Пандоры">Сердца Пандоры</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-329-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="329" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">143</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Сердца Пандоры">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Pandora Hearts">Pandora Hearts</h5>
  
  
    
  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>ужасы</span>

  <span class='badge badge-dark '>трагедия</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>психология</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Демоны</span>

  <span class='badge badge-secondary '>Рыцари</span>

  <span class='badge badge-secondary '>Умный ГГ</span>

  <span class='badge badge-secondary '>Отец и сын</span>

  <span class='badge badge-secondary '>Семейные ценности</span>

  <span class='badge badge-secondary '>Брат и сестра</span>

  <span class='badge badge-secondary '>Дворянство</span>

  <span class='badge badge-secondary '>Сделка с демоном</span>

  <span class='badge badge-secondary '>Амнезия</span>

  <span class='badge badge-secondary '>Спасение мира</span>

    <br>
  

<div class="manga-description">
  Мир, похожий на наше Высокое Средневековье, тесно связан с Бездной — измерением, где не действуют привычные законы природы. Тот, кто владеет Дверью в Бездну и может заключить договор с «цепью» — тамошним обитателем — получает огромную власть. Именно такие люди составляют аристократическую элиту, но при этом не афишируют источник силы и могущества. Все контракты с Бездной контролирует таинственная организация «Пандора», действующие в обход ее сильно рискуют душой и телом. Например, можно провалиться в Бездну на миг и выйти оттуда через пару сотен лет… История начинается с праздника совершеннолетия Оза Безариуса, сына герцога и наследника одного из четырех Великих Домов. Оз — парень неглупый и&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/mochizuki_jun" hidePic="true" class="person-link">Мотидзуки Дзюн</a>
      
      
      
        <br/>

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/horror" class="badge badge-light element-link">ужасы</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--329 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 329, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 329, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_13">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.49">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .5
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 89.87310409545898%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/blich__A5327" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/77/302_p.jpg' title='Блич (Bleach)' alt='Блич (Bleach)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/blich__A5327" title="Блич">Блич</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-13-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="13" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">711</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Блич">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Bleach">Bleach</h5>
  
  
    
  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>сёнэн</span>

  <span class='badge badge-dark '>сверхъестественное</span>

    <br>
  

  

<div class="manga-description">
  Однажды в спальню Ичиго Куросаки, пятнадцатилетнего юноши, способного видеть призраков с самого детства, врывается Шинигами по имени Рукия Кучики. Кучики, удивленная тем, что наш герой способен видеть её, поддаётся на провокацию и рассказывает Куросаки о том, кто такие Шинигами и что входит в обязанности проводников душ, но этот разговор прерывает рёв Пустого — злого духа, пожирающего души людей. Ичиго, пытаясь защитить семью, подставляет Рукию, и она получает серьёзное ранение, мешающее сражаться. Шинигами решает передать часть своих сил юноше, чтобы тот мог постоять за себя, но Куросаки поглощает всю её энергию и одолевает Пустого. В результате Ичиго сам становится Шинигами, а Рукия в тот момент&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/kubo_taito" hidePic="true" class="person-link">Кубо Тайто</a>
      
      
      
        <br/>

        <a href="/list/genre/supernatural" class="badge badge-light element-link">сверхъестественное</a> <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--13 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 13, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 13, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
    

<div class="tile col-sm-6    el_2">
  <div class="img">
    
  
  
  <div class="compact-rate" title="4.47">
    <b class="rate-value ">
      <span class="integer">
        4
      </span>
      <span class="fraction">
        .5
      </span>
    </b>
    <div class="star">
      <div class="star-fill" style="width: 89.48280334472656%">
        <i class="fas fa-star"></i>
      </div>
      <i class="fa fa-star"></i>
    </div>
  </div>

    <a href="/naruto__A35c96" class="non-hover">
      
        <img class='lazy img-fluid hide-alt' src='' data-original='https://staticrm.rmr.rocks/uploads/pics/00/43/888_p.jpg' title='Наруто (Naruto)' alt='Наруто (Naruto)' width='130' height='180'/>
      
    </a>

    
      
    
  </div>

  
    <div class="tags">
      
        <span class='mangaTranslationCompleted'>переведено</span><br/>
      
    </div>
  


  <div class="desc">
    <h3>
      <a href="/naruto__A35c96" title="Наруто">Наруто</a>
    </h3>
    
      

<span class="bookmark-menu bookmark-id-2-1-MANGA favorite-button">
  <span class="js-link nh">
    <i class="bookmark-heart fa fa-heart fa-lgg"></i>
  </span>
  <div class="html-popover-holder">
    <div class="bookmark-body" data-id="2" data-site-id="1" data-type="MANGA" data-vol="" data-num=""> </div>
  </div>
</span>
    

    
  <span class="badge badge-secondary amount-badge">704</span>


    
  <i class="fa fa-info-circle fa-lgg long-description html-popover" title="Наруто">
    
<noindex>
  <div class="html-popover-holder">
    

  
    <h5 title="Naruto">Naruto</h5>
  
  
    
  <span class='badge badge-dark '>боевые искусства</span>

  <span class='badge badge-dark '>сверхъестественное</span>

  <span class='badge badge-dark '>романтика</span>

  <span class='badge badge-dark '>комедия</span>

  <span class='badge badge-dark '>психология</span>

  <span class='badge badge-dark '>боевик</span>

  <span class='badge badge-dark '>фэнтези</span>

  <span class='badge badge-dark '>драма</span>

  <span class='badge badge-dark '>приключения</span>

  <span class='badge badge-dark '>сёнэн</span>

    <br>
  

  
    
  <span class='badge badge-secondary '>Дружба</span>

  <span class='badge badge-secondary '>Ниндзя</span>

  <span class='badge badge-secondary '>ГГ мужчина</span>

    <br>
  

<div class="manga-description">
  Несколько лет тому назад на деревню, скрытую в листве (Коноха), напал Девятихвостый демон-лис. Это была одна из пяти великих деревень, где воспитывались первоклассные ниндзя. Лис появился из ниоткуда, и его никак не ожидали. Он символизировал боль и погибель, и справиться с ним было практически невозможно. Только лидер деревни, лучший ниндзя — Четвертый Хокаге — был способен на это. Но уничтожить Девятихвостого ему не удалось, так как сила демона была поистине ужасающей. Четвертый запечатал его в тело новорожденного мальчика в надежде, что лис навсегда останется в нем. Такая победа стоила Хокаге жизни. Звали этого мальчика Наруто Узумаки. Тут и начинается наша история. Все детство Наруто жил&hellip;
</div>
  </div>
</noindex>
  </i>


    <div class="tile-info">
      <a href="/list/person/kishimoto_masashi" hidePic="true" class="person-link">Кисимото Масаси</a>
      
      
      
        <br/>

        <a href="/list/genre/fantasy" class="badge badge-light element-link">фэнтези</a> <a href="/list/genre/comedy" class="badge badge-light element-link">комедия</a>

      
      
      
      

    </div>
  </div>
  
  
    
<div class="like-control">
    <!--2 NONE-->
    <span onclick="rm_h.recommendations.sendLike(this, 2, true)" title="Нравится" class="">
        <i class="fa fa-lgg fa-thumbs-up"></i>
    </span>
    <span onclick="rm_h.recommendations.sendLike(this, 2, false)" title="НЕ нравится" class="">
        <i class="fa fa-lgg fa-thumbs-down"></i>
    </span>
</div>
  

  <div class="chapters-text">
    
      
      
      
    

  

  </div>

  <div class="clearfix"></div>
</div>

  
</div>
  


      </div>
    
    
      <div class="rightContent">
        

  <p>
    Рекомендации работают на основании ваших оценок и закладок. Чем больше произведений вы оцените, тем более правильные рекомендации вы увидите.
</p>

<p>
    Сейчас рекомендации обновляются раз в день, ночь. Скоро будет чаще
</p>

<p>
    Функционал в самом начале своего развития. Впереди еще очень долгий путь. Но мы надеемся, с вашей помощью мы достигнем успеха
</p>

<p>
    Замечания-пожелания прошу писать <a href="https://grouple.co/forum/posts/list/334483.page#10325895" target="_blank">тут</a>
</p>

  <h5><a href="/recommendations/index">Персональные рекомендации</a></h5>

      </div>
    
    
    <div class="clearfix"><!----></div>
  </div>
  <style type="text/css">
  #mangaBox {
      overflow: visible;
  }
  </style>

  

  
  
    <script>
      rm_h.rightContentMenu = new RmRightContentMenu();
      rm_h.menuManager.add(rm_h.rightContentMenu);
    </script>

    <div class="side-menu" id="side-menu-btn" onclick="rm_h.rightContentMenu.open()">
      <span>Меню</span>
      <i class="fa fa-angle-left"></i>
    </div>
  
</div>

<div class="page-footer">
  <div class="footer-shadow"></div>
  <div class="container">
    <div class="footer-links">
      <a href="/user/settings">
        <i class="fa fa-low-vision text-danger"></i> взрослое
      </a> |
      <a href="/page/user_agreement">Пользовательское соглашение</a> |
      <a href="/internal/feedback/index?type=5" class="bootstrap-modalbox">Жалоба на контент</a> |
      <a href="/page/copyright_holders">Для правообладателей</a> |

      <span class="d-none d-sm-inline-block"><a href="/page/advertising">Реклама на сайте</a> |</span>
      <a href="/about">О нас</a>
      
        |
        <a href="https://grouple.co/forum/posts/list/0/23305.page" data-toggle="tooltip" title="ЧаВо - ответы на частые вопросы" target="_blank" rel="noopener">
          <span class="fa fa-question-circle text-info"></span> ЧаВо
        </a>
      
    </div>
    
      <div class="federation-elements">
        

  <a href="https://grouple.co" title="Закладки, активности, общение" rel="nofollow">GroupLe</a>

  
    
      <a href="https://readmanga.live" title="Читай мангу">ReadManga</a>
    
  
    
      <a href="/internal/redirect?type=site&amp;id=2" title="Читай мангу по-взрослому">MintManga</a>
    
  
    
      <a href="https://doramatv.live" title="Смотри и обсуждай Дораму онлайн">DoramaTV</a>
    
  
    
      <a href="https://librebook.me" title="Читай книги онлайн">LibreBook</a>
    
  
    
      <a href="https://findanime.net" title="Смотри и обсуждай аниме онлайн">FindAnime</a>
    
  
    
      <a href="https://selfmanga.live" title="Создавай и читай мангу">SelfManga</a>
    
  
    
      <a href="https://selflib.me" title="Пиши и читай самиздат">SelfLib</a>
    
  
    
      <a href="https://rumix.me" title="Читай лицензионную мангу">RuMix</a>
    
  
    
      <a href="/internal/redirect?type=site&amp;id=9" title="Смотри сериалы">Mose</a>
    
  
    
      <a href="https://mult.koro.life" title="Смотри мультфильмы">Mult</a>
    
  

      </div>
    

    



  </div>
</div>


    <script>
      decodeBaBlocks(
        'PHNjcmlwdD4NCiAgICB3aW5kb3cueWFDb250ZXh0Q2IucHVzaCgoKT0+ew0KICAgICAgICBZYS5hZGZveENvZGUuY3JlYXRlQWRhcHRpdmUoew0KICAgICAgICAgICAgb3duZXJJZDogMjYwOTcxLA0KICAgICAgICAgICAgY29udGFpbmVySWQ6ICdhZGZveF8xNjYzOTE5MTIxODgwMTMwMDcnLA0KICAgICAgICAgICAgcGFyYW1zOiB7DQogICAgICAgICAgICAgICAgcDE6ICdjdnZtdicsDQogICAgICAgICAgICAgICAgcDI6ICdneG1yJw0KICAgICAgICAgICAgfQ0KICAgICAgICB9LCBbJ2Rlc2t0b3AnLCAndGFibGV0J10sIHsNCiAgICAgICAgICAgIHRhYmxldFdpZHRoOiA4MzAsDQogICAgICAgICAgICBwaG9uZVdpZHRoOiA0ODAsDQogICAgICAgICAgICBpc0F1dG9SZWxvYWRzOiBmYWxzZQ0KICAgICAgICB9KQ0KICAgIH0pDQo8L3NjcmlwdD4NCjxzY3JpcHQ+DQpzZXRJbnRlcnZhbChmdW5jdGlvbigpeyAgICAgICAgICAgIA0Kd2luZG93LllhLmFkZm94Q29kZS5yZWxvYWQoJ2FkZm94XzE2NjM5MTkxMjE4ODAxMzAwNycsIHtvbmx5SWZXYXNWaXNpYmxlOiB0cnVlfSkNCn0sIDE1MDAwMCk7DQo8L3NjcmlwdD4=',
        'PHNjcmlwdD4NCiAgICB3aW5kb3cueWFDb250ZXh0Q2IucHVzaCgoKT0+ew0KICAgICAgICBZYS5hZGZveENvZGUuY3JlYXRlQWRhcHRpdmUoew0KICAgICAgICAgICAgb3duZXJJZDogMjYwOTcxLA0KICAgICAgICAgICAgY29udGFpbmVySWQ6ICdhZGZveF8xNjYzOTE5MDgxNzM2OTY0NjknLA0KICAgICAgICAgICAgcGFyYW1zOiB7DQogICAgICAgICAgICAgICAgcDE6ICdjdnZtdScsDQogICAgICAgICAgICAgICAgcDI6ICdneG11Jw0KICAgICAgICAgICAgfQ0KICAgICAgICB9LCBbJ3Bob25lJ10sIHsNCiAgICAgICAgICAgIHRhYmxldFdpZHRoOiA4MzAsDQogICAgICAgICAgICBwaG9uZVdpZHRoOiA0ODAsDQogICAgICAgICAgICBpc0F1dG9SZWxvYWRzOiBmYWxzZQ0KICAgICAgICB9KQ0KICAgIH0pDQo8L3NjcmlwdD4NCjxzY3JpcHQ+DQpzZXRJbnRlcnZhbChmdW5jdGlvbigpeyAgICAgICAgICAgIA0Kd2luZG93LllhLmFkZm94Q29kZS5yZWxvYWQoJ2FkZm94XzE2NjM5MTkwODE3MzY5NjQ2OScsIHtvbmx5SWZXYXNWaXNpYmxlOiB0cnVlfSkNCn0sIDIwMDAwMCk7DQo8L3NjcmlwdD4=',
        '',
        ''
      );
    </script>







<script type="text/javascript" src="https://resrml.rmr.rocks/static/application_deferred-a3e97da9d66cdcc45bfe2c03726dbc45.js" ></script>


<script type='text/javascript'>
  rm_sso_h.doRequest('https://grouple.co', 1);
</script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");

   ym(21277900, "init", {
        clickmap:false,
        trackLinks:false,
        accurateTrackBounce:false
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/21277900" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<!--  <script>
$(function () {
    if (typeof hidden_ba_yes === "undefined" ) {
        rm_h.layout.detectBlocking(function(){
            var popup = new MGPopUp('specific_cookie_id_4');
            var bodyStr = '<div style="text-align: center;"><a href="https://readmanga.io/page/ablock_instruction" target="_blank"><img src="https://staticrm.rmr.rocks/uploads/pics/01/34/360_o.png"></a></div> ' +
              '<h3>Отключите Адблок на нашем сайте, пожалуйста. <a href="https://readmanga.io/page/ablock_instruction" target="_blank">Как это сделать?...</a>!</h3>';
            popup.modalHtml('Отключите блокировщик рекламы', bodyStr);
            popup.showIf(null, 1);
        })
    }
    });
</script> -->

<script>(function(){var js = "window['__CF$cv$params']={r:'849c07c9bafd215c',t:'MTcwNTk3MDg5OS43NzQwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js'