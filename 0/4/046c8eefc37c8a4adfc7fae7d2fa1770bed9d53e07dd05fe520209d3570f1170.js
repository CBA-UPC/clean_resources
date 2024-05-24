/*! 20240121-21-RELEASE */

(()=>{let t=!1;classm.injectStyle(`.tbl-loading-spinner.tbl-loading-cards-placeholder { background: transparent; background-size: 100%; height: auto; margin-top: 40px; }.tbl-placeholder-card { background: #f6f7f9; height: 125px; overflow: hidden; position: relative; margin-bottom: 48px; }.tbl-placeholder-card:before { background-color: #f6f7f9; background-image: url(//cdn.taboola.com/static/91/9117a6d9-cbf1-4ea6-8caa-7461ce6554bc.gif); background-repeat: repeat-y; background-size: 100% 1px; content: ' '; display: block; height: 100%; }.tbl-masker { position: absolute; width: calc(100% - 190px - 24px); background-color: #fff; box-sizing: content-box; border-color: #fff; border-style: solid; border-left-width: 24px; }.tbl-first-row-pl, .tbl-second-row-pl, .tbl-third-row-pl { background: transparent; z-index: 1; }.tbl-first-row-pl { top: 0; height: 18px; left: 190px; border-top-width: 11px; border-bottom-width: 18px; }.tbl-second-row-pl { top: 47px; height: 18px; left: 190px; border-top-width: 0; border-bottom-width: 18px; }.tbl-third-row-pl { top: 83px; height: 15px; left: 190px; border-top-width: 0; border-bottom-width: 35px; }.tbl-last-row-right-padding { top: 83px; left: calc(30% + 130px); width: 100%; height: 15px; border-width: 0; }.tbl-img-top-padding, .tbl-img-bottom-padding, .tbl-first-col-padding { display: none; }.tbl-second-col-padding { display: block; width: 24px; height: 100%; border-width: 0; top: 0; right: 0; }.render-late-effect.tbl-feed-container .thumbBlock { opacity: 0; transition: opacity 0.75s; }.render-late-effect.tbl-feed-container .thumbBlock[style*="background-image"] { opacity: 1; }.tbl-loading-placeholder-dir-rtl .tbl-masker { border-right-width: 24px; }.tbl-loading-placeholder-dir-rtl .tbl-first-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-second-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-third-row-pl { right: 190px; left: auto; }.tbl-loading-placeholder-dir-rtl .tbl-last-row-right-padding { right: calc(30% + 130px); left: auto; }.tbl-loading-placeholder-dir-rtl .tbl-second-col-padding { right: auto; left: 0; }@media screen and (max-width: 480px) and (min-width: 0px) { .tbl-loading-spinner.tbl-loading-cards-placeholder { margin-top: 8px; } .tbl-placeholder-card { height: 87px; margin-bottom: 8px; } .tbl-masker { width: calc(100% - 114px - 12px); border-left-width: 12px; } .tbl-loading-placeholder-dir-rtl .tbl-masker { border-right-width: 12px; } .tbl-first-row-pl { top: 0; height: 10px; left: 114px; border-top-width: 16px; border-bottom-width: 10px; } .tbl-second-row-pl { top: 36px; height: 10px; left: 114px; border-top-width: 0; border-bottom-width: 11px; } .tbl-third-row-pl { top: 57px; height: 8px; left: 114px; border-top-width: 0; border-bottom-width: 22px; } .tbl-last-row-right-padding { top: 57px; height: 8px; } .block-no-border, .tbl-img-top-padding, .tbl-img-bottom-padding, .tbl-first-col-padding { display: block; border-width: 0; } .tbl-img-top-padding { height: 10px; width: 100%; top: 0; } .tbl-img-bottom-padding { height: 10px; width: 100%; bottom: 0; } .tbl-first-col-padding { height: 100%; width: 8px; top: 0; left: 0; } .tbl-second-col-padding { display: none; } .tbl-loading-placeholder-dir-rtl .tbl-first-col-padding { right: 0; left: auto; } .tbl-loading-placeholder-dir-rtl .tbl-first-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-second-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-third-row-pl { right: 114px; left: auto; } }`,null),t=!0}static createLoadingCardPlaceholder({direction:d,container:r,cardPlaceholder:o,numPlaceholderItems:e}){t||l.injectCardPlacholderStyle();const i="rtl"===d?"tbl-loading-placeholder-dir-rtl":"";o.className+=`tbl-loading-spinner tbl-loading-cards-placeholder tbl-hidden ${i}`;for(let t=0;t<e;t++)o.innerHTML+=l.createPlaceholderNode();r.appendChild(o),r.className+=" render-late-effect"}static createPlaceholderNode(){const t=`\n                <div class="tbl-placeholder-card">\n                    <div class="tbl-first-row-pl tbl-masker"></div>\n                    <div class="tbl-second-row-pl tbl-masker"></div>\n                    <div class="tbl-third-row-pl tbl-masker"></div>\n                    <div class="tbl-last-row-right-padding tbl-masker"></div>\n                    <div class="tbl-img-top-padding tbl-masker"></div>\n                    <div class="tbl-img-bottom-padding tbl-masker"></div>\n                    <div class="tbl-first-col-padding tbl-masker"></div>\n                    <div class="tbl-second-col-padding tbl-masker"></div>\n                </div>\n            `;return t}}TRC.FeedCardPlaceHolder=l})();nst userProperties = {};
  userProperties.is_login = '0';
  
  gtag("set", "user_properties", userProperties);
</script>
<!-- Google tag (gtag.js) ママスタ横断プロパティ -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CSVSM5K04R"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CSVSM5K04R');
</script>
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gxisfofgjt");
</script>
<!-- piano -->
<script>
    tp = window.tp || [];
    var metas = document.getElementsByTagName('meta');
    var i, meta, property, content, contents = [];

    tp = window["tp"] || [];
    (function(src) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.src = src;
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })("https://experience-ap.piano.io/xbuilder/experience/load?aid=QTw4MMuvpj");

    var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
    cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
    cX.callQueue.push(['setSiteId', '1136319632297278415']);
    if (typeof localStorage === "object" && typeof localStorage.getItem === "function") {
        var pId = localStorage.getItem("piano-uid");
        cX.callQueue.push(['addExternalId', { 'id': pId, 'type': 'its'}]);
    }
    cX.CCE.callQueue.push(['sendPageViewEvent']);
    (function(d,s,e,t){e=d.createElement(s);e.type='text/java'+s;e.async='async';e.src='https://cdn.cxense.com/cx.cce.js';t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');
</script>
<!-- End piano -->
<!-- FLUX head -->
<script async="async" src="https://flux-cdn.com/client/interspace/flux_mamastar_AS_TM_AT.min.js"></script>
</script>
<script type="text/javascript">
    var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];
</script>
<!-- /FLUX head -->


 <!-- Define callback function -->
    <script type="text/javascript">
        var readyBids = {
            prebid: false,
            amazon: false,
            google: false
        };
        var　failSafeTimeout = 3e3;
        // when both APS and Prebid have returned, initiate ad request
        var launchAdServer = function () {
            if (!readyBids.amazon || !readyBids.prebid) {
                return;
            }
            requestAdServer();
        };
        // sends adserver request
        var requestAdServer = function () {
            if (!readyBids.google) {
                readyBids.google = true;
                googletag.cmd.push(function () {
                    pbjs.que.push(function () {
                        pbjs.setTargetingForGPTAsync();
                    });
                    apstag.setDisplayBids();
                    googletag.pubads().refresh();
                });
            }
        };
    </script>
 <!-- /Define callback function -->



<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
</script>
<script>
    googletag.cmd.push(function() {

        googletag.pubads().setPublisherProvidedId('3627cf94721c674270d4ccbe8da58a59');

    });
    </script>
<script type='text/javascript'>
googletag.cmd.push(function() {


	googletag.defineSlot('/29341881/mamastar.jp_PC_billboard', [[970, 250], [970, 90]], 'div-gpt-ad-1565056310909-0').addService(googletag.pubads());
	googletag.defineSlot('/29341881/mamastar.jp_PC_supperbanner_compliant_728-90', [[468, 60], [728, 90]], 'div-gpt-ad-1412151447832-6').addService(googletag.pubads());
	googletag.defineSlot('/29341881/mamastar.jp_PC_rectangle-side_compliant_300-250', [[300, 250], [336, 280], [300, 600]], 'div-gpt-ad-1412151447832-0').addService(googletag.pubads());
	
	googletag.defineSlot('/29341881/mamastar.jp_PC_rectangle_footer-left_compliant_300-250', [300, 250], 'div-gpt-ad-1412151447832-2').addService(googletag.pubads());
	googletag.defineSlot('/29341881/mamastar.jp_PC_rectangle_footer-right_compliant_300-250', [300, 250], 'div-gpt-ad-1412151447832-4').addService(googletag.pubads());

    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();
    
     pbjs.que.push(function () {
       pbFlux.prebidBidder();
     });
    
});
</script>
<script>
 !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
 apstag.init({
     pubID: '3590',
     adServer: 'googletag',
     timeout: 2e3
 });
 apstag.fetchBids({
 
 
     slots: [

     {
         slotID: 'div-gpt-ad-1412151447832-6',
         slotName: '/29341881/mamastar.jp_PC_supperbanner_compliant_728-90',
         sizes: [[728, 90]]
     }
     ,{
         slotID: 'div-gpt-ad-1412151447832-0',
         slotName: '/29341881/mamastar.jp_PC_rectangle-side_compliant_300-250',
         sizes: [[300, 250]]
     }

     ,{
         slotID: 'div-gpt-ad-1412151447832-2',
         slotName: '/29341881/mamastar.jp_PC_rectangle_footer-left_compliant_300-250',
         sizes: [[300, 250]]
     }
     ,{
         slotID: 'div-gpt-ad-1412151447832-4',
         slotName: '/29341881/mamastar.jp_PC_rectangle_footer-right_compliant_300-250',
         sizes: [[300, 250]]
     }

     ], 
     timeout: 2e3
 }, function(bids) {
     // Your callback method, in this example it triggers the first DFP request for googletag's disableInitialLoad integration after bids have been set

    googletag.cmd.push(function () {
        readyBids.amazon = true;
        launchAdServer();
    });
 });
</script>



<script type="text/javascript" src="/javascript/jquery.cookie.js"></script>

<script type="text/javascript"><!--
$(function() {
    var form = document.forms["bbs2Update"];
    var el = form.denyUserId;

	
	var handleName = form.handleName;
	if (! handleName.value) {
		handleName.value = $.cookie("handleName");
	}
	
});
//--></script>
<style>
.js_hide {display:none;}
</style>

<script type="text/javascript"><!--
$(function() {

    // jQuery Upload Thumbs
    $('form input:file').uploadThumbs({
        position  : '#preview',    // any: arbitrarily jquery selector
        alternate : '.alt'         // selecter for alternate view input file names
    });
    //$('.pul_select').easySelectBox({speed:200});

    $('textarea').autosize({
//      append: "\n"  // 内部に自動的に付与する
    });
});
//--></script>


<script type="text/javascript">
$(function() {
    $.ajaxSetup({scriptCharset:'Shift_JIS'});
	$('li.commentgood_enabled').click(function(event) {
        event.preventDefault();
        // 操作対象のフォーム要素を取得
        var $li = $(this);
        // 送信
        $.ajax({
            url: "/bbs/good.do",
            type: 'POST',
            data: {type:2, topicId: 4385565, commentId: $li.attr("commentNo") },
            timeout: 10000,
            contentType:"application/x-www-form-urlencoded;charset=Shift_JIS",
            dataType: "json",
            // 送信前
            beforeSend: function(xhr, settings) {
                $li.unbind();
                $li.attr("class", "commentgood_invalid")
                .parent().children(".commentbad_enabled")
                .unbind();
            },
            success: function(data, dataType) {
            	$li.find(".good_count").text(data.goodCount);
            }
        });
    });

});
</script>



<script type="text/javascript" src="/js/autosize.js"></script>
<script type="text/javascript" src="/js/jquery.upload_thumbs.js"></script>


</head>
<body>

<p id="naviSkip"><a href="#main" tabindex="1" title="本文へジャンプ"><img src="/img/pc/common/skip.gif" alt="本文へジャンプ" width="1" height="1" /></a></p>

<div id="container">
<div id="header">

<p class="headerCopy fl_l"><span class="txt_xs">子育てに関する情報満載！ママの情報プラットフォーム ママスタ</span></p>


<ul class="fl_r header_menu">
<li class="mrgntop_5"><a href="/">ホーム</a></li>　

<!-- 非ログイン/ここから-->
<li class="viewNotLogin"><a class="buttonRedMin buttonRegister" href="/signup.do">新規会員登録</a></li>
<li class="viewNotLogin"><a class="buttonMin buttonLogin" href="https://mamastar.jp/NormalLoginAction.do?url=%2Fbbs%2Fcomment.do%3FtopicId%3D4385565">ログイン</a></li>
<!-- 非ログイン/ここまで-->
</ul>



<div class="header_navi_wr">
<p class="logo"><a href="/"><img src="/img/pc/common/logo_mamasta.svg" alt="ママスタ" width="240"/></a></p>
<div class="bnr">

<!-- mamastar.jp_PC_supperbanner_compliant_728-90 -->
<div id='div-gpt-ad-1412151447832-6'>
<script type='text/javascript'>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1412151447832-6'); });
</script>
</div>
</div>
</div>
<style>

ul.globalNavibox li:hover {
    border-bottom: 1px solid #ff4e81;
    padding-bottom: 9px;
}
ul.globalNavibox li:hover a {
    color: #ff4e81 !important;
}

</style>
<!--
<ul class="submenu">
<li><a href="/"><img src="/img/pc/common/btn_home.png" alt="ホーム" width="58" height="15" /></a></li>
<li><a href="/info/mamastar/top_x.do"><img src="/img/pc/common/btn_what.png" alt="ママスタとは" width="103" height="15" /></a></li>
</ul>
-->

<ul id="globalNavi" class="globalNavibox">
<!-- InstanceBeginEditable name="nav" -->
<li id="navSelect"><a href="https://select.mamastar.jp/" target="_blank">セレクト</a></li>
<li id="navBbs"  class="navi_on" >
	<a href="/bbs/">コミュニティ</a></li>
<li id="navColumn">
	<a href="http://column.mamastar.jp/">コラム</a></li>
	<li id="navColumn">
	<a href="https://hokatsu.mamastar.jp/" target="_blank">保活</a></li>
<li id="navManabi"><a href="https://manabi.mamastar.jp/">まなび</a></li>
<li id="navReview" class=""><a href="/wom/">レビュー</a></li>
<!--<li id="navNews" class=""><a href="/news">ニュース</a></li>
<li id="navDiary" class=""><a href="/diary/new_diary.do">みんなの日記帳</a></li>-->

<!-- InstanceEndEditable -->
</ul>

<!-- /header --></div>
<!-- InstanceBeginEditable name="list" -->
<!-- InstanceEndEditable -->

<!-- /29341881/mamastar.jp_PC_billboard -->
<div id='div-gpt-ad-1565056310909-0' style="margin-top:-20px;margin-bottom:10px;text-align:center;">
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1565056310909-0'); });
  </script>
</div>
<ul id="pankuzu">
<li itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb">
  <a href="/" itemprop="url"><span itemprop="title">TOP</span></a></li>
<li itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb"> &gt; <a href="/bbs/" itemprop="url"><span itemprop="title">コミュニティトップ</span></a></li>
<li itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb"> &gt; <a href="/bbs/topic.do?categoryId=2" itemprop="url"><span itemprop="title">なんでも</span></a></li>
<li> &gt; 聖人でもなかったHIKAKIN。</li>
</ul>

<!-- InstanceEndEditable -->
<hr />

<div id="main">
<!-- InstanceBeginEditable name="main" -->
<div class="notification mrgnbtm_15">
  <p><a href="https://mamastar.jp/ranking/topic.do?utm_source=mamasta&utm_medium=info&utm_campaign=communityranking"><i>!</i>今気になる話題はトピックランキングからチェック！</a></p>
</div>
<div class="topic_selection" data-device="pc">
</div>
<script>
(function(){
  var topicSelection = document.querySelector('div.topic_selection');
  var now = new Date();
  $.ajax({
    url: "https://portalstatic.mamastar.jp/setting/community_info.json?"+now.getTime(),
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      topicSelection.style.display = 'none';
      
      for (i = data.length; 1 < i; i--) {
        k = Math.floor(Math.random() * i);
        [data[k], data[i - 1]] = [data[i - 1], data[k]];
      }

      var insertTitleDiv = document.createElement('div');
      var insertTitleInnerP = document.createElement('p');
      insertTitleInnerP.innerText = 'Pickup';
      insertTitleDiv.className = 'pickup__title';
      insertTitleDiv.appendChild(insertTitleInnerP);
      topicSelection.appendChild(insertTitleDiv);


      var insertContentDiv = document.createElement('div');
      insertContentDiv.className = "pickup__content";
      var insertContentCount = 0;
      for (var i=0; i<data.length; i++) {
        var topic = data[i];
        var startAt, endAt;

        try {
          startAt = new Date(topic['startAt']);
        } catch (e) {
          startAt = null;
        }
        try {
          endAt = new Date(topic['endAt']);
        } catch (e) {
          endAt = null;
        }

        if ( ((startAt === null) || (startAt.getTime() <= now.getTime())) &&
             ((endAt === null) || (endAt.getTime() >= now.getTime())) ) {
             ++insertContentCount;
             if (insertContentCount >= 2) {
               if (topicSelection.getAttribute('data-device') === "pc") {
                  var lineDiv = document.createElement('div');
                  lineDiv.className = 'line';
                  insertContentDiv.appendChild(lineDiv);
               }
             }
             var contentP = document.createElement('p');
             var contentLink = document.createElement('a');
             contentLink.href = topic['link'];
             contentLink.innerText = topic['title'];
             contentP.appendChild(contentLink);
             insertContentDiv.appendChild(contentP);
             if ((topicSelection.getAttribute('data-device') === "sp") ||
                 (topicSelection.getAttribute('data-device') === "pc" && insertContentCount >= 2)) {
               break;
             }

        }
      }
      if (insertContentCount >= 1) {
        topicSelection.style.display = null;
        topicSelection.appendChild(insertContentDiv);
      } else {
        topicSelection.remove();
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      topicSelection.remove();
    }
  });
})();

</script><header class="article__title">
  <h1 class="topic_title">
 <dt>&#xe904;</dt>
 <dd>聖人でもなかったHIKAKIN。</dd>
</h1>
 </header>
<article class="article_type--bg_a mrgnbtm_20 topic_catch_line">
<section class="item_box">
<section class="topic_box_top border_dotted">

<ul class="item_box_separate_l">
  <li class="topic_category">なんでも</li>
</ul>

<ul class="item_box_separate_r">
<li class="topic_report"><a href="/inform.do?url=%2Fbbs%2Fcomment.do%3FtopicId%3D4385565">  通報 / 削除依頼</a></li>
<li class="topic_watchlist"><a href="/bbs/watch.do?mode=add&topicId=4385565">
  <span class="icon-star_line"></span> ウォッチリストに追加</a></li>

  </ul>

</section>
<section class="item_box_separate">
<ul class="item_box_separate_l">
  <span class="icon-person_fill txt_color_d"></span> <li class="topic_name">しめ（汁が足りない）</li>
    </li>
</ul>

<ul class="item_box_separate_r">
 <li class="txt_color_d txt_ss"><span class="icon-creat"></span>24/01/22 21:44</li></ul>

</section>

<section class="item_box_separate border_dotted">
<div class="topic_p">

<p>
文春砲おつ。<br />

      <div>
      </div>
</p>



</div>
</section>
<section class="item_box_separate border_dotted topic_keyword_box">

<div class="fl_clr">

 <ul class="keyword_wrap">
 <li class="key"><span class="icon-keyword"></span></li>
<a href="/bbs/keyword.do?keyword=%8E%47%92%6B"><li>雑談</li></a>
<li class="edit"><a href="/bbs/keyword/update.do?topicId=4385565">キーワード編集</a></li></ul>

</div>

</section>
<ul class="item_box_separate_l share_icon_hover">
  <a href="https://twitter.com/intent/tweet?url=https://mamastar.jp%2Fbbs%2Fcomment.do%3FtopicId%3D4385565" target="_blank"><li class="share_icon"><span class="icon-sns_twitter"></span></li></a>
  <a href="https://www.facebook.com/share.php?u=https://mamastar.jp%2Fbbs%2Fcomment.do%3FtopicId%3D4385565" target="_blank"><li class="share_icon"><span class="icon-sns_fb"></span></li></a>
</ul>

<ul class="good_bad_btn fl_r">

    <!-- いいね済み -->
    	<!-- 未いいね -->
    			 	<a href="/bbs/rating.do?topicId=4385565">
             <li class="topicgood_enabled">
    				<span class="good_count">2</span>
             <span class="icon-heart_fill"></span>
             <span class="good_count2"> good</span>
    			 </li></a>
    			 	</ul>
    </section>

</article>
<script>
      var unruly = window.unruly || {};
    unruly.native = unruly.native || {};
    unruly.native.siteId = 1103028;
  </script>
  <script src="//video.unrulymedia.com/native/native-loader.js"></script>
  <div class="caution_wrap">
  <p class="caution_wrap_box caution_txt"><a href="https://mamastar.jp/info/bbs/1_x.do">利用ルール・禁止事項</a>をご確認ください<br />
<span>誹謗中傷、個人情報、プライバシーを侵害する投稿は禁止しています。<br />
また誹謗中傷においては、法改正により投稿者の情報開示について簡易な裁判手続きが導入されております。</span></p>
  </div>
<header class="side--title">
        <h2 class="txt_m txt_color_b">コメントする<span class="txt_xs m_normal">　あなたのご意見をお聞かせください</span></h2>
    </header>

<article class="article_type--bg_b mrgnbtm_20" id="comment">

<section class="item_box">

<div class="errorMessage js_hide">ログインしてください</div>

<form id="bbs2Update" method="post" action="/bbs/update.do;jsessionid=8058CB785E1CD09A146F6115F7240552" enctype="multipart/form-data"><div><input type="hidden" name="org.apache.struts.taglib.html.TOKEN" value="767a618052a28c99ee791558f9646cd1" /></div><input type="hidden" name="topicId" value="4385565" />
  <input type="hidden" name="step" value="complete" />
  <input type="hidden" name="mode" value="comment" />


<div class="comment_box_textarea">

<label>
<textarea name="message" id="textarea" placeholder="コメントを入力" class="form_item__input_comment mrgnbtm_5 resize"></textarea>
</label>
<ul class="nickname_box">

<p><input type="text" name="handleName" value="" placeholder="ニックネーム20文字以内（なしでもOK）" class="form_item__input_nickname "/></p>
  </ul>
<ul class="comment_rule_pr_box">
<li><img src="/img/pc/common/icon_piyo2.png" width="35"></li>
<li><a href="/info/bbs/rule_pr_x.do" onclick="window.open('/info/bbs/rule_pr_x.do', '', 'width=500'); return false;">
 人が傷つく不快になる内容ではないですか？
  </a></li>
  </ul>

<button type="submit" value="投稿する" class="btn_pink btnpd_10 wd40 txt_m">投稿する</button></a>

</div>


<div class="comment_box_photoarea">

<div class="imgupload_wrap">
<div class="preview_wrap">
 <p id="preview"></p>
 </div>
<div class="upload">
                  <label>
                      <input type="file" name="file" accept="image/*" title="画像を追加" />
                      <button><span class="icon-camera_fill txt_m"></span> 画像を追加</button>
                  </label>
</div>
</div>
</div>


</form></section>
</article>

<header class="side--title">
        <h2 class="txt_m">ママ達の声<span class="txt_xs m_normal">　投稿されたコメントを掲載しています</span>
      </h2>

    </header>

<article class="article_type--bg_a mrgnbtm_20">

<section class="item_box">


<ul class="sort_box">
  <li><a href="/bbs/comment.do?topicId=4385565&sort=0" class="on">新着順
  </a></li>
  <li><a href="/bbs/comment.do?topicId=4385565&sort=1" class="">投稿順</a></li>
  <li><a href="/bbs/comment.do?topicId=4385565&sort=2" class="" rel="nofollow">写真最新順</a></li>
  <li><a href="/bbs/comment.do?topicId=4385565&sort=3" class="" rel="nofollow">写真投稿順
  </a></li><li><a href="/bbs/comment.do?topicId=4385565&sort=4" class="">主のみ</a></li>
    </ul>
<div id="unruly-unit"></div>

<div class="align_r"><span class="pager_count">1件～50件 (全 298件)</span>
  <span class="txt_ss txt_color_d">前の50件</span> |
  <span class="pager_box"><a href="?topicId=4385565&page=2&sort=0">次の50件</a></span></div>

</section>

<ul class="comment_box_wrap">
<li>
<div class="comment_box_top">
<ul class="item_box_separate_l">
<span class="icon-number"></span>
<li class="comment_no"><a href="/bbs/comment.do?topicId=4385565&commentNo=298">298</a></li>
 <span class="icon-person_fill"></span>
 <li class="comment_name">
    匿名</li>
    <li></li>
</ul>
    <ul class="item_box_separate_r">
    <li> 24/01/23 10:46</li>
</ul>
</div>
<div class="comment_p">
  <p>
    
        
        
        <a href="/bbs/comment.do?topicId=4385565&amp;commentNo=271">&gt;&gt;271</a>
        それってどういう意味？<br />別れたいのに別れてくれないのっていうマウント？<br /><br />そんな程度の異常な男と付き合ったの？
      <div>
      </div>
</p>
    </div>

  <div class="item_box_separate">
      <ul class="item_box_separate_l">
    <li class="hover_no"><a href="/bbs/comment.do?topicId=4385565&commentNo=298"><span class="icon-reply"></span></a></li>

        </ul>

        <ul class="good_bad_btn align_r">
          <li class="commentgood_enabled" commentNo="298">
      <span class="good_count"></span>
      <span class="icon-heart_fill"></span>
      </li>
        </ul>
      </div>


  </li>
<li>
<div class="comment_box_top">
<ul class="item_box_separate_l">
<span class="icon-number"></span>
<li class="comment_no"><a href="/bbs/comment.do?topicId=4385565&commentNo=297">297</a></li>
 <span class="icon-person_fill"></span>
 <li class="comment_name">
    ひっぱりうどん鍋</li>
    <li></li>
</ul>
    <ul class="item_box_separate_r">
    <li> 24/01/23 10:45</li>
</ul>
</div>
<div class="comment_p">
  <p>
    YouTube辞めたら収入はどうなるんだ？
      <div>
      </div>
</p>
    </div>

  <div class="item_box_separate">
      <ul class="item_box_separate_l">
    <li class="hover_no"><a href="/bbs/comment.do?topicId=4385565&commentNo=297"><span class="icon-reply"></span></a></li>

        </ul>

        <ul class="good_bad_btn align_r">
          <li class="commentgood_enabled" commentNo="297">
      <span class="good_count"></span>
      <span class="icon-heart_fill"></span>
      </li>
        </ul>
      </div>


  </li>
<li>
<div class="comment_box_top">
<ul class="item_box_separate_l">
<span class="icon-number"></span>
<li class="comment_no"><a href="/bbs/comment.do?topicId=4385565&commentNo=296">296</a></li>
 <span class="icon-person_fill"></span>
 <li class="comment_name">
    渦</li>
    <li></li>
</ul>
    <ul class="item_box_separate_r">
    <li> 24/01/23 10:44</li>
</ul>
</div>
<div class="comment_p">
  <p>
    
        
        
        <a href="/bbs/comment.do?topicId=4385565&amp;commentNo=292">&gt;&gt;292</a>
        <br />セイキンの方が良いよね。<br />子育てや主婦業にも協力的でいいなって思う。
      <div>
      </div>
</p>
    </div>

  <div class="item_box_separate">
      <ul class="item_box_separate_l">
    <li class="hover_no"><a href="/bbs/comment.do?topicId=4385565&commentNo=296"><span class="icon-reply"></span></a></li>

        </ul>

        <ul class="good_bad_btn align_r">
          <li class="commentgood_enabled" commentNo="296">
      <span class="good_count">1</span>
      <span class="icon-heart_fill"></span>
      </li>
       