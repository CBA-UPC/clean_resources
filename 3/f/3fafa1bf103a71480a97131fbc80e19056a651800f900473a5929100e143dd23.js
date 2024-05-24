// treasure
!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(argumenfunction(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.calleview","trackClicks","ready"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="/oo/ismtd.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("ISMTreasure",this);
// ism
var ISMLIB=ISMLIB||{};ISMLIB.queue=ISMLIB.queue||[];
// ismua
ISMLIB.mwskip = (function(){try{return document.getElementById('ism-collector').getAttribute('data-mwskip')||'';}catch(err){return '';}})();
if (ISMLIB.mwskip=='') {
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.type='text/javascript';js.async=true;js.src='//mediaweaver.jp/oo/uu/ua.cgi?qua='+(function(){try{var r=(document.cookie.match(new RegExp("ismua=(.*?)(?:;|$)"))||['',''])[1];if (r==''){var u=(document.cookie.match(new RegExp("ismuu=(.*?)(?:;|$)"))||['',''])[1];u+=u;u=u.toLowerCase();u=u.replace(/-/g,'-');u=u.substr(0,8)+'-'+u.substr(8,4)+'-'+u.substr(12,4)+'-'+u.substr(16,4)+'-'+u.substr(20,12);r=u;} return r;}catch(err){return ''}})();fjs.parentNode.insertBefore(js,fjs);}}(document,"script","imsua-js");
}
ISMLIB.wCookie = function(_c){
 var d = new Date(); d.setTime(d.getTime()+ (60*60*24*365*2*1000) );
 var expires = '; expires=' + d.toGMTString();
 document.cookie = 'ismub=' + _c.replace(/[^\d\.)]/g,'') + expires + '; path=/';
};
ISMLIB.rCookie = function(_c){
 var neq = _c + '=';
 var ca = document.cookie.split(';');
 for(var i=0; i<ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') { c = c.substring(1,c.length); }
  if (c.indexOf(neq) == 0) {
   var rc = c.substring(neq.length,c.length);
   if (rc.match(/^[a-zA-Z0-9\.\-_]+$/g)){
    return rc;
   } else {
    return '';
   }
  }
 }
 return '';
};
if (ISMLIB.rCookie('ismub')=='' ) {
 if (ISMLIB.mwskip=='') {
  setTimeout(function(){ !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async=true;js.src="//mediaweaver.jp/oo/uu/cl.cgi?rd="+parseInt( new Date() /1000 );fjs.parentNode.insertBefore(js,fjs);}}(document,"script","js-ismub");},500);
 }
} else {
 ISMLIB.cookie=ISMLIB.rCookie('ismub');
};

ISMLIB.qWords = function(_c) {
 var qwords = [];
 try{
  if(document.referrer.indexOf('?') != -1){
   var params = document.referrer.split('?')[1].split('&');
   for(var i = 0; i<params.length; i++){
    var pair = params[i];
    param = pair.split('=');
    if (param[0] == 'fulltext' || param[0] == 'select' || param[0] == 'q' || param[0] == 'as_q' || param[0] == 'p' || param[0] == 'MT') {
     qwords = (decodeURIComponent((param[1].replace('+',' ').replace("'","")))).split(' ');
    }
   }
  }
 }catch(err){}
 return qwords;
};
ISMLIB.sWords = function(_key){
 var queries={};
 var r=''
 try{
  if(1< window.location.search.length){
   var query = window.location.search.substring(1);
   var parameters = query.split('&');
   for(var i=0; i< parameters.length;i++){
    var element=parameters[i].split('=');
    var paramName=decodeURIComponent(element[0]);
    var paramValue = decodeURIComponent(element[1] );
    queries[paramName]=decodeURIComponent(paramValue);
   }
   r=queries[_key]||'';
  }
 }catch(err){};
 return r;
};

ISMLIB.td_create_image = function(url) {
 var img = document.createElement('img');
 img.src = (('https:' == document.location.protocol) ? 'https://' : 'http://') + url;
 img.width=1;img.height=1;img.style.display='none';
 document.body.appendChild(img);
};
ISMLIB.td_sync_callback = function() {
 var td_client_id = ISMLIB.td.client.track.uuid;
 var region = ISMLIB.td.client.host.split('.')[0];
 var account = (region === 'in' ? 'aws-':(region === 'tokyo' ? 'aws-tokyo-':'idcf-')) + ISMLIB.td.client.writeKey.split('/')[0];
 var dbm_url = 'cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id' + '&td_client_id=' + td_client_id + '&account=' + account;
 ISMLIB.td_create_image(dbm_url);
 var ttd_url = 'match.adsrvr.org/track/cmf/generic?ttd_pid=vbyog0i&ttd_tpi=1&ttd_puid='+account;
 ISMLIB.td_create_image(ttd_url);
};
ISMLIB.td_success = function(opt){
 ISMLIB.td_sync_callback();
 ISMLIB.td.fetchUserSegments({
  audienceToken: ['2e9fd8c7-21f8-4c84-8d7f-bc019c52dba0','7f86d87f-a2b1-4c30-abeb-c75ca48f48c4','80ddd5d3-c3e9-4fe9-a95c-4b84d7540830','880fd3c6-19da-4fdc-acb7-e9904b622f7d'],
  keys: {'ism_ua':ISMLIB.rCookie('ismua'),'hash_ip':(ISMLIB.mdip||'')}
  },
  function(key, values){
   var d = new Date(); d.setTime(d.getTime()+ (60*60*24*365*2*1000) );
   var expires = '; expires=' + d.toGMTString();
   document.cookie = 'ismtdsegs=' + values.join(',') + expires + '; path=/';
  },
  function(){}
 );
};
ISMLIB.td_failure = function(opt){};
ISMLIB.count = 5;
ISMLIB.fire = function(_obj) {
 ISMLIB.custom=_obj;
 (function() {
  if (ISMLIB.rCookie('ismua')=='') {
   ISMLIB.count -= 1;
   if (ISMLIB.count != 0) {
    setTimeout(arguments.callee, 500);
   }
  } else {
   ISMLIB.count = 0;
  }
  if (ISMLIB.count == 0) {
   ISMLIB.td = new ISMTreasure({host:'in.treasuredata.com',writeKey: '5085/bbdacba68731486bf665742aade0d17df165ad14',database: 'media_db'});
   ISMLIB.td.set('$global','td_global_id','td_global_id');
   ISMLIB.custom.ism_ss = ISMLIB.rCookie('ismss');
   ISMLIB.custom.ism_ua = ISMLIB.rCookie('ismua');
   ISMLIB.custom.ism_ub = ISMLIB.rCookie('ismub');
   ISMLIB.custom.ism_uu = ISMLIB.rCookie('ismuu');
   ISMLIB.custom.ism_qwords = ISMLIB.qWords();
   ISMLIB.custom.ism_search = ISMLIB.sWords('fulltext');
   ISMLIB.custom.ism_dummy = '20180411';
   if (ISMLIB.custom.ism_title==undefined || ISMLIB.custom.ism_title == '' ) ISMLIB.custom.ism_title = document.title;
   ISMLIB.td.trackEvent('site_access',ISMLIB.custom,ISMLIB.td_success,ISMLIB.td_failure);
  }
 })();
};
ISMLIB.go = function(){try{var current=null;while(current=ISMLIB.queue.shift()){try {current();}catch(err){}}}catch(err){}};
ISMLIB.queue.push=function(){Array.prototype.push.apply(this,arguments);setTimeout(ISMLIB.go,1);return this.length;};
setTimeout(ISMLIB.go,20);
xt/javascript" src="https://apis.google.com/js/plusone.js">
  {lang: 'ja'}
</script>

<!-- 本文スライド -->
<script src="/js/lib/swiper.min.js"></script>
<link rel="stylesheet" href="/js/lib/swiper.min.css">
<link rel="stylesheet" href="/css/common/entryslide.css">
<script src="/js/common/entryslide.js"></script>
<!-- /本文スライド -->


<!-- =========================================================
コピーガード 
=========================================================-->

<style>
.cp-block .entryDetailHeadline,
.cp-block .entryImage,
.cp-block .entryDetailBodyCopy{
 -webkit-touch-callout:none;
 -webkit-user-select:none;
 -moz-user-select:none;
 -ms-user-select:none;
 user-select:none
} 
</style>


<script>
$(function() {
 $('.cp-block .entryImage,.cp-block .entryDetailBodyCopy,.cp-block .entryDetailHeadline').on('contextmenu oncopy', function() {
  return false;
 });
 $('.cp-block .entryImage,.cp-block .entryDetailBodyCopy,.cp-block .entryDetailHeadline').on('dragstart', function (e) {
  e.stopPropagation();
  e.preventDefault();
 });
});
</script>

<!-- =========================================================
/コピーガード 
=========================================================-->

<!-- PC広告配信用headタグ 20211007-->
<script type="application/javascript" src="//anymind360.com/js/6103/ats.js"></script>
<!-- DFP PC head -->
<script async="" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1754096402499979" crossorigin="anonymous"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
</script>
<script>
    googletag.cmd.push(function() {
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_underarticle_left', [300, 250], 'div-gpt-ad-1541150926942-0').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_underarticle_right', [300, 250], 'div-gpt-ad-1541151040794-0').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_footer_left', [300, 250], 'div-gpt-ad-1533261948834-2').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_footer_right', [300, 250], 'div-gpt-ad-1533261948834-3').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_right_1st', [[300, 250], [300, 600]], 'div-gpt-ad-1533261948834-4').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_right_2nd', [300, 250], 'div-gpt-ad-1533261948834-5').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_1x1_footeroverlay', [1, 1], 'div-gpt-ad-1542878264349-0').addService(googletag.pubads());
    googletag.defineSlot('/117786882/Newsweek/NW_PC_300x250_right_3rd', [[300, 250], [300, 600]], 'div-gpt-ad-1664344945820-0').addService(googletag.pubads());
    googletag.pubads().setTargeting("test", "honban");
    googletag.pubads().enableSingleRequest();
    if(document.cookie.indexOf("gtm_offerwall_thanks") != -1) {
    googletag.pubads().setTargeting('offerwall_thanks', ['1']);
    }
    googletag.pubads().addEventListener('rewardedSlotGranted',
    function (evt) {
    var owCookieName = "gtm_offerwall_thanks";
    var owCookieValue = "1";
    var owCookiePath = "/";
    var owExpirationTime = 24 * 60 * 60 * 1000;
    var owDateObj = new Date();
    var owDateTimeNow = owDateObj.getTime();
    owDateObj.setTime(owDateTimeNow + owExpirationTime);
    var owExpirationTime = owDateObj.toUTCString();
    document.cookie = owCookieName+"="+owCookieValue+"; expires="+owExpirationTime+"; path="+owCookiePath;
    });
    googletag.pubads().disableInitialLoad();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
  });
</script>
<!-- /DFP PC head -->
<!-- /PC広告配信用headタグ -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8662315226639749" crossorigin="anonymous"></script>
<!-- CharBeat head -->
<script type='text/javascript'>var _sf_startpt=(new Date()).getTime()</script>
<!-- /CharBeat head -->
<!-- taboola remcommend 20210927-->
<!-- taboola remcommend 20210927-->
<script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({article:'auto'});
  !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/cccmediahouse-newsweek/loader.js',
  'tb_loader_script');
  if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
</script>
<!-- taboola remcommend 20210927-->

<!-- taboola remcommend 20210927-->


<!-- Cxense Module: クライアントリンク 20231113-->
<div id="cx_aa462371e924281a37ddbbf29c582c7140f5fa2a"></div>
<script type="text/javascript">
    var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
    cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
    cX.CCE.callQueue.push(['run',{
        widgetId: 'aa462371e924281a37ddbbf29c582c7140f5fa2a',
        targetElementId: 'cx_aa462371e924281a37ddbbf29c582c7140f5fa2a'
    }]);
</script>
<!-- Cxense Module End --><script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-8386350-2']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

<script type="text/javascript">
$(function(){
  var _related = document.querySelectorAll(".related");
  if (_related && _related.length > 0) {
    _gaq.push(['_setAccount','UA-8386350-4']);
    _gaq.push(['_trackEvent','related','view',location.href]);
  }
});
</script>





<script type="text/javascript" src="//csm.cxpublic.com/CCCMediaHouse.js"></script>


<!-- 170616-->

<script type="text/javascript">(function(d,u){var b=d.getElementsByTagName("script")[0],j=d.createElement("script");j.async=true;j.src=u;b.parentNode.insertBefore(j,b);})(document,"//img.ak.impact-ad.jp/ut/f8fa0c7841881b53_3309.js");</script><noscript><iframe src="//nspt.unitag.jp/f8fa0c7841881b53_3309.php" width="0" height="0" frameborder="0"></iframe></noscript>

<!-- /170616-->




















<!-- /page_setting_nw -->


	<link rel="stylesheet" href="/css/print.css" type="text/css" media="print"/>


<!-- HeatMapTag -->

<!-- fb-pixel -->

<!-- head_end -->

</head>

<body id="voices" class=" ">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QVKT8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=296332717129354";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- container -->
<div id="container" class="blog">
<!-- ad_interstitial_profitx 20230619 -->
<script src="https://fam.adingo.jp/fluct-one/newsweekjapan/o.js"></script>

<!-- 20230407 dmp -->
<script type="text/javascript">
!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","blockEvents","fetchServerCookie","fetchGlobalID","fetchUserSegments","resetUUID","ready","setSignedMode","setAnonymousMode","set","trackEvent","trackPageview","trackClicks","unblockEvents"],n=0;n<s.length;n++){var c=s[n];e[t].prototype[c]=r(c)}var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/2.5/td.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}("Treasure",this);
</script>
<script type="text/javascript">
var td = new Treasure({
  host: 'tokyo.in.treasuredata.com',
  database:'db_011',
  writeKey: '178/245bab4b6c8f11dac9fcbd757ac3ce281855b325',
  startInSignedMode: true
});

var createImage = function(url) {
  var img = document.createElement('img');
  img.src = 'https://' + url;
  img.width=1;img.height=1;img.style.display='none';
  document.body.appendChild(img);
};

var syncGoogle = function() {
  var tdClientId = td.client.track.uuid;
  var region = td.client.host.split('.')[0];
  var account = (region === 'in' ? 'aws-us-':(region === 'tokyo' ? 'aws-tokyo-':'idcf-')) + td.client.writeKey.split('/')[0];
  var dbmUrl = 'cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id&td_client_id=' + tdClientId + '&account=' + account + '&td_host=' + document.location.host;
  createImage(dbmUrl);
};

td.set('$global', 'td_global_id', 'td_global_id');
td.trackPageview('tbl_nw_web_logs', syncGoogle);
</script>
<!-- /20230407 dmp -->

<!-- bnrHead -->
<div id="bnrHead" class="imgOver">
<!-- スーパーバナー_全ページ -->
<!-- 20230725 -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8662315226639749"
     crossorigin="anonymous"></script>
<!-- NW_PC_header_direct(728x90) -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-8662315226639749"
     data-ad-slot="5330521871"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<!-- /20230725 -->
</div>
<!-- /bnrHead -->

<div id="head">
	<div class="header_inner">
		<!-- naviWrap -->
		<div id="naviWrap" class="clearfix">
			<ul id="navi" class="rollover clearfix">
			    <li class="nav_global"><a href="http://www.newsweek.com/" target="_blank"><span class="icon"></span>Newsweek.com</a></li> 
			    <li class="nav_search">
			    	<span class="icon"></span>
					<form id="cse-search-box" action="/search/" method="get">
					    <input type="text" name="q" class="l-search__text" id="searchinput" placeholder="サイト内検索"/>
				  　</form>
					<script type="text/javascript" src="//www.google.com/cse/brand?form=cse-search-box&lang=ja"></script>
				</li>

			    <li class="nav_magazine"><a href="/magazine/">本誌紹介<span class="arrow_left_w"></span></a></li>
			    <li class="nav_subscription"><a href="https://fujisan.co.jp/pc/web-nwj" target="_blank">お得な定期購読<span class="arrow_left_w"></span></a></li>
			</ul>
		</div>
		<!-- /naviWrap -->


		<!-- categoryNaviWrap -->
		<ul id="categoryNaviWrap" class="rollover clearfix">

		    <script src="/js/login_status.js"></script>
		    <li class="js-login" style="display:none">
		      <a href="__%url%__" onClick="return login_save_url();">ログイン</a>
		    </li>
		    <li class="js-mypage nav_paywall member" style="display:none">
		      <a href="javascript:void(0)">会員情報</a>
	 			<div>
	 				<ul>
	 				<li><a href="__%url%__">マイページ</a></li>
	 				<li> <a href="__%logout_url%__" onClick="return login_save_url('logout');">ログアウト</a></li> 		
	 				</ul>
	 			</div>		                
		    </li>

			<li class="nav_stories"><a class="txt_col_rd" href="/stories/">最新記事</a></li>
			<li class="nav_column"><a class="txt_col_gr" href="/column/">コラム一覧</a></li>
			<li class="nav_headlines"><a class="txt_col_bl" href="/headlines/">ニュース速報</a></li>
			<li class="nav_ranking"><a class="txt_col_rd" href="#sideRankingPanel">ランキング</a></li>
			<li class="nav_worldvoice"><a class="txt_col_rd" href="/worldvoice/">WorldVoice</a></li>
			<li class="nav_asteion"><a class="txt_col_rd" href="/asteion/">WEBアステイオン</a></li>
		</ul>
		<!-- /categoryNaviWrap -->
		
		<!-- logoWrap -->
		<div id="logo"><a href="/"><img src="/images/header/logo.gif" width="382" height="57" alt="Newsweek" title="Newsweek" /></a></div>
		<!-- /logoWrap -->
		
		<!-- pageNaviWrap -->
		<div id="pageNaviWrap" class="clearfix">
			<ul class="rollover clearfix">
				<li><a href="/stories/world/">ワールド</a></li>
				<li><a href="/stories/business/">ビジネス</a></li>
				<li><a href="/stories/technology/">テクノロジー</a></li>
				<li><a href="/stories/culture/">カルチャー</a></li>
				<li><a href="/stories/lifestyle/">ライフスタイル</a></li>
				<li><a href="/stories/carrier/">キャリア</a></li>
				<li class="v2 nav-woman"><a href="/woman/">for WOMAN</a></li>

			</ul>
		</div>
		<!-- pageNaviWrap -->
	</div>
</div>
<!-- /head -->


<script>
/*==================================================================
//
//  paywall ナビ
//
==================================================================*/

$(function() {

	if($(".paywall")[0]){
		checkLoginStatus()
	}

	function checkLoginStatus(){
		var body = $("body")
     	var checkTimer = setInterval(function(){

     		if(gLoginStatus.vars.login_status != null){
     			if(gLoginStatus.vars.login_status){
     				setLogin()
     			}else{
     				setLogout()
     			}
     			clearInterval(checkTimer)
     		}

     		function setLogin(){
     			body.addClass("mode-login")
     			$(".indexNavi").css({display:"block"})
     			$(".nextPageTitle").css({display:"block"})
     		}
     		function setLogout(){
     			body.addClass("mode-logout")
     			$(".indexNavi").css({display:"none"})
     			$(".nextPageTitle").css({display:"none"})
     		}	
     	},1000)
	}

})


$(function(){

	var target = $(".nav_paywall.member").find("div")

	$(".nav_paywall").on({
		"mouseenter":function(){

			var _div = $(this).find("div")
			_div.addClass("set")
			setTimeout(function(){
				_div.addClass("on")			
			},5)

		},
		"mouseleave":function(){

			var _div = $(this).find("div")
			_div.removeClass("on")
			setTimeout(function(){
				_div.removeClass("set")			
			},305)

		}

	})


})

</script>
<div id="interstitial-banner-wrap">
<div id="interstitial-banner">
<!-- Newsweek_InterstitialBanner_640x480_Test -->
<div id='div-gpt-ad-1379412289589-0' style='width:640px;height:480px;'>
<script type='text/javascript'>
googletag.display('div-gpt-ad-1380528081115-0');
</script>
</div>
</div>
</div>
<script type="text/javascript" src="/js/interstitial.js"></script>
<!-- contentWrap -->
<div id="contentWrap" class="clearfix">
<!-- contentHead -->
<div id="contentHead" class="clearfix"><dl id="keyWord">
<dt>注目のキーワード</dt>





	
	<dd class="clearfix">
		
			

<a href="/tagsearch/%E3%83%AD%E3%82%B7%E3%82%A2" rel="tag" title="ロシアのタグ一覧へ">
<span id="first-keyword">ロシア</span>
<span id="tag-thumbnail">

</span>
</a>

<script type="text/javascript" src="/js/keyword.js?20221226"></script>

<script type="text/javascript" src="/keyword/keyword-images.js"></script>


			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
				<a href="/tagsearch/%E4%B8%AD%E5%9B%BD" rel="tag" title="中国のタグ一覧へ">中国</a>
			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
				<a href="/tagsearch/%E7%B1%B3%E5%A4%A7%E7%B5%B1%E9%A0%98%E9%81%B8" rel="tag" title="米大統領選のタグ一覧へ">米大統領選</a>
			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
				<a href="/tagsearch/EU" rel="tag" title="EUのタグ一覧へ">EU</a>
			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
				<a href="/tagsearch/%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A" rel="tag" title="ウクライナのタグ一覧へ">ウクライナ</a>
			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
				<a href="/tagsearch/%E3%83%97%E3%83%BC%E3%83%81%E3%83%B3" rel="tag" title="プーチンのタグ一覧へ">プーチン</a>
			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
				<a href="/tagsearch/%E4%B8%AD%E6%9D%B1" rel="tag" title="中東のタグ一覧へ">中東</a>
			
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
            <a href="/invest/">投資</a>
            
	</dd>
	


	
	<dd>
        <span class="dot-line"></span>
		
			
				
					<a href="/tagsearch/%E8%82%B2%E5%85%90" rel="tag" title="育児のタグ一覧へ">育児</a>
	                                
            
	</dd>
	

	
	<dd>
        <span class="dot-line"></span>
		
			
            <a href="/stories/sdgs/">SDGs</a>
            
	</dd>
	





</dl>

 </div>

<!--head -->

<!-- teads pc 20230523 -->
<script type="text/javascript" class="teads" src="//a.teads.tv/page/172296/tag" async="true"></script>

<style>

.ad-teads-nw-box{
    position: relative;
    height: 430px;
}

/*.ad-teads-nw{
    position: relative;
    width: 100%;
    height: 430px;
}
*/
.ad-teads-nw{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
}

.teads-inread{
    margin-bottom: 2em;
}
.ad-teads-nw-box .adsbygoogle,
.ad-teads-nw-box ins{
    display: block !important;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>

<!-- /15 -->

<!-- 17 -->
<!-- DFP/9929866/Newsweek_display_Footeroverlay_1st_1x1_all_movie -->
 <div id='div-gpt-ad-1542878264349-0' style='height:1px; width:1px;'>
 <script>
 googletag.cmd.push(function() { googletag.display('div-gpt-ad-1542878264349-0'); });
 </script>
 </div>
<!-- /DFP/9929866/Newsweek_display_Footeroverlay_1st_1x1_all_movie -->
<!-- /17 -->



<!-- content --> 
<div id="content"> 




<!-- pankuzu -->
<div id="topicPath" class="clearfix"> 
<ol id="breadCrumbs"> 
<li><a href="/">HOME</a></li> 
<li><a href="/column/">コラム</a></li>
<li><a href="/reizei/">プリンストン発　日本／アメリカ 新時代</a></li>
<li>

「No, thank you.」の消滅......…
</li>
</ol> 
</div> 
<!-- /pankuzu -->


<!-- contentPanel --> 
<!-- entryHead -->



<!-- headTitle --> 
<div class="contentPanelTitle clearfix">
<div id="contentTitle" class="content-title-nw">
<div class="nw-label-title bg_col_gr">
  <div class="nw-label-title-inner">
    <span class="arrow_d"></span><i>コラム</i>
  </div>
</div>
</div>
<!-- ページャー -->

<ul class="indexNavi clearfix">


<li>
<span class="current_page">1</span></li><li><a href="no-thank-you_$i.php">&nbsp;2&nbsp;</a>
</li>

  
  <li class="next"><a href="no-thank-you_2.php" title="Next&gt;&gt;"><span class="arrow_btn_link arrow_red_next"></span>Next</a></li>

</ul>

<!-- ページャー -->

<div id="entryHead" onclick="clickLink('https://www.newsweekjapan.jp/reizei/', '');" onkeydown="clickLink('https://www.newsweekjapan.jp/reizei/', '')">

<div class="txt_col_gr">
<span><img   src="https://img-newsweekjapan.jp/reizei//img/blogThum.jpg" width="90"></span>
<div class="entryAuthor">
<p>
冷泉彰彦
<span class="blogName">プリンストン発　日本／アメリカ 新時代</span>
</p>
</div>
</div>
</div>
</div>
<!-- headTitle --> 


<div class="contentPanel clickableArea containTitleTxt_RR"> 
<div class="panelNoShadow entryDetail clearfix">
  <!-- entry -->
  <div class="clearfix"> 
    <div class="entryDetailHeadline border_btm clearfix">
    <h1>「No, thank you.」の消滅......アメリカは日本化しているのか?</h1>

<div class="entryDataWrap clearfix">
<div class="entryDetailData">
<div class="date">2024年01月31日（水）15時00分</div>
</div> 

<!-- ブックマーク -->
<div class="tackBlock clearfix">
<div class="bookmark clearfix">
<div id = "shareTool">
</div>
</div>
<script type="text/javascript" src="/js/sns.js"></script>
<script type="text/javascript">

var postName  = "「No, thank you.」の消滅......アメリカは日本化しているのか?"
var parmaLink = "https://www.newsweekjapan.jp/reizei/2024/01/no-thank-you.php"
var author    = "冷泉彰彦"

shareTool(postName, parmaLink, author)
  
</script>
</div>
</div>


<!-- ブックマーク -->
</div>
    <!-- entryImageNoCap -->
    <!-- ブログ追加時は以下のカスタムフィールド名を変更してください -->

    

      <div class="entryImage">

          
    <img   src="https://img-newsweekjapan.jp/reizei/assets_c/2024/01/rei240131-pic-thumb-720xauto-1048149.jpg" alt="スマホ"title="スマホ" />
          

<p class="cap">デバイスがコミュニケーションを変化させる　Tero Vesalainen/Shutterstock</p>

      </div>


    <!-- ここまで -->
    <!-- /entryImageNoCap -->
    <!-- entryDetailBodyCopy -->
    <div class="entryDetailBodyCopy">
<p><strong>＜日本でもアメリカでも、ネットを介した短いコミュニケーションで関係性を悪化させないための知恵が必要に＞</strong></p>

<p>日本の若者がLINEなどのメッセージで「句点（。）」を一切使わないということが、話題になっています。句点無しの短い文章を区切りながら繰り出すことで、リアルタイムのコミュニケーションを取るためのようです。それが完全に定着する中で、句点を使うことが「威圧感、怒りの感情」の表現として受け取られるようにもなっているようです。</p>

<p>若い人たちに指摘されて気付いたのですが、実はこれはアメリカでも全く同じです。短いメッセージをどんどん繰り出してリアルタイムの交信をする場合には、ピリオド（フル・ストップとも言います）を使いません。反対に、あえてピリオドで切るとそこには「納得していない」という拒絶や怒りのニュアンスが感じられるといいます。</p>

<div class="ad-teads-nw-box"><div class="ad-teads-nw"></div></div><br>

<p>英語の場合は、少しバリエーションがあり。二人称の you について、いつもは「Y」などの略語で書いているのを「You」とフルのスペリングで書くと、同じように怒っているというニュアンスをつけることができます。絵文字もそうで、普段なら略語や絵文字を使う局面をキチンとした英語で書くと「かなり怒っているな」という感じになるわけです。</p>

<p>余りに一致した現象ということで、偶然とは思えません。ですが、句点やピリオドを省略して、クイックでソフトな印象を与えるということは、こうした「ショートメッセージ」に「ニュアンスをつける方法」としては自然で理にかなっています。ですから、日本語、英語の双方で自然発生的に生まれたのかもしれません。</p>

<h4>日本語の「大丈夫です」に似たニュアンス</h4>

<p>日本語と英語の表現が似通ってきたということでは、「No, thank you.」の消滅ということがあります。アメリカに限った話かもしれませんが、90年代からこの傾向はあり、どうしても言いたい場合は、「No, thank you very much.」という感じに丁寧表現を足して何とかするというような感覚がありました。</p>

<p>近年では、それもかなり消滅気味で、その代わりに断りの表現として、「I'm fine.」とか「I'm good.」が定着しています。この現象ですが、日本の若者言葉で同じように断りの表現が「いいえ、結構です」から「大丈夫です」に変化したのと、かなり似通っています。</p>

<p>違いと言えば、日本の場合は、若者の「大丈夫」が「イエス」なのか「ノー」なのか中高年には判別が難解と言われるように、この「No, thnak you.」の意味の「大丈夫です」は、年齢的に若い世代が中心です。今回のコロナ明けぐらいから、それが中高年にも徐々に浸透しつつあるという感じかもしれません。</p>

<p>ですが、アメリカの場合の「No, thank you.」から「I'm fine.」への変化は、既にかなり広範な世代に普及しています。そうではあるのですが、明確な「No」を嫌うという変化の仕方がソックリで、全く別の言語における現象と考えると驚きです。</p>

<p><!-- SET_ASSOCIATE --></p>





<div class="entryPagenate">

<!-- ページャータイトル -->

<div class='related-link-elm'><p>【関連記事】<br />
<a href="https://www.newsweekjapan.jp/stories/business/2024/01/810-2.php"target="_blank">もう車が買えなくなったアメリカ人──年収10万ドルの壁</a><br />
<a href="https://www.newsweekjapan.jp/kimura/2024/01/post-243.php"target="_blank">「トランプ大統領」の復活で「狂気の米国」が出現する...ネオリベラリズムが生んだディストピアのアメリカ</a><br />
<a href="https://www.newsweekjapan.jp/satire_usa/2023/12/post-92.php"target="_blank">アメリカで急速に広まった言葉「Meh」の背景にある国民の気分とは？</a></p></div>







<div class='nextPageTitle'><a href='/reizei/2024/01/no-thank-you_2.php'><span><em>次のページ</em><em>余計な衝突を避けたい<br /></em></span></a></div>
<ul class="indexNavi clearfix">


<li>
<span class="current_page">1</span></li><li><a href="no-thank-you_$i.php">&nbsp;2&nbsp;</a>
</li>

  
  <li class="next"><a href="no-thank-you_2.php" title="次のページ &gt;&gt;"><span class="arrow_btn_link arrow_red_next"></span>次のページ</a></li>

</ul>
</div>

    </div>
    <!-- /entryDetailBodyCopy -->
  </div>
  <!-- /entry -->

<div id="NewsPanel">
<div class="nw-label-title bg_col_gr">
	<div class="nw-label-title-inner">
		<span class="arrow_d"></span><i>この筆者のコラム</i>
	</div>
</div>
<div class="latestEntryWrap border_btm">
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2024/01/no-thank-you.php">
			
			
			「No, thank you.」の消滅......アメリカは日本化しているのか?
			
			</a>
			<span class="time">2024.01.31</span></p>
    </div>
    <!-- /entry -->
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2024/01/post-1340.php">
			
			
			ニューハンプシャー州予備選敗北で、ヘイリーが仕掛ける一発逆転策とは?
			
			</a>
			<span class="time">2024.01.24</span></p>
    </div>
    <!-- /entry -->
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2024/01/post-1339.php">
			
			
			大統領選でも引きずる米政治の「コロナ禍後遺症」
			
			</a>
			<span class="time">2024.01.17</span></p>
    </div>
    <!-- /entry -->
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2024/01/post-1338.php">
			
			
			共和党予備選本番、ヘイリーの急浮上はあるか?
			
			</a>
			<span class="time">2024.01.10</span></p>
    </div>
    <!-- /entry -->
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2023/12/2024-2.php">
			
			
			2024年、円安の出口と日本経済のバランスをどう取るか?
			
			</a>
			<span class="time">2023.12.27</span></p>
    </div>
    <!-- /entry -->
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2023/12/post-1337.php">
			
			
			先輩後輩カルチャーは「キャンセル」するだけでいいのか？
			
			</a>
			<span class="time">2023.12.20</span></p>
    </div>
    <!-- /entry -->
  
    <!-- entry -->
    <div class="latestEntry">
			<p><a href="/reizei/2023/12/107.php">
			
			
			大谷翔平、ドジャースと「10年、7億ドル」契約の背景
			
			</a>
			<span class="time">2023.12.15</span></p>
    </div>
    <!-- /entry -->
  
</div>
<div class="btmLink txt_col_gr rollover"><a href="https://www.newsweekjapan.jp/reizei/"><span class="arrow_btm_link"></span>記事一覧へ</a></div>

</div><div id="profileWrap" class="border_btm">

<div class="nw-label-title bg_col_gr">
	<div class="nw-label-title-inner">
		<span class="arrow_d"></span><i>プロフィール</i>
	</div>
</div>
<div id="authorProfile" class="clearfix">
<div class="profileImg"><img   src="https://img-newsweekjapan.jp/reizei//img/blogThum.jpg" width="90">
</div> 
<div class="profileTxt">

	<h3>冷泉彰彦</h3>
	<p><p>（れいぜい　あきひこ）ニュージャージー州在住。作家・ジャーナリスト。プリンストン日本語学校高等部主任。1959年東京生まれ。東京大学文学部卒業。コロンビア大学大学院修士（日本語教授法）。福武書店（現ベネッセコーポレーション）勤務を経て93年に渡米。</p>

<p>最新刊<a href="https://publications.asahi.com/ecs/detail/?item_id=20198">『自動運転「戦場」ルポ　ウーバー、グーグル、日本勢――クルマの近未来』（朝日新書）</a>が7月13日に発売。近著に<a href="http://books.cccmh.co.jp/list/detail/1470/">『アイビーリーグの入り方　アメリカ大学入試の知られざる実態と名門大学の合格基準』（CCCメディアハウス）</a>など。メールマガジンＪMM（村上龍編集長）で「ＦＲＯＭ９１１、ＵＳＡレポート」(www.jmm.co.jp/)を連載中。週刊メルマガ（有料）「冷泉彰彦のプリンストン通信」配信中。</p></p> 
	<div class="link"><a href="http://www.mag2.com/m/0001628903.html" target="_blank">冷泉彰彦のプリンストン通信</a></div> 
 
</div> 
</div> 
</div> 
<div id="btm-contents">
<!-- latest panel -->

<div class="underrecWrap clearfix" style="margin: 0 auto 30px; width:630px; ">


<!-- 記事下レクタングル_OK -->
<!-- 5 -->
<!-- DFP_20180802_/9929866/Newsweek_display_Belowarticle(left)_1st_300x250_article_image -->
 <div id='div-gpt-ad-1541150926942-0' style='height:250px; width:300px; float: left;'>
 <script>
 googletag.cmd.push(function() { googletag.display('div-gpt-ad-1541150926942-0'); });
 </script>
 </div>
 <!-- /DFP_20180802_/9929866/Newsweek_display_Belowarticle(left)_1st_300x250_article_image -->
<!-- /5 -->

<!-- 6 -->
<!-- DFP_20180802_/9929866/Newsweek_display_Belowarticle(right)_1st_300x250_article_image -->
 <div id='div-gpt-ad-1541151040794-0' style='height:250px; width:300px; float:right;'>
 <script>
 googletag.cmd.push(function() { googletag.display('div-gpt-ad-1541151040794-0'); });
 </script>
 </div>
 <!-- /DFP_20180802_/9929866/Newsweek_display_Belowarticle(right)_1st_300x250_article_image -->
<!-- /6 -->

</div>

<!-- インサイトサーチエンジン -->
<!-- /インサイトサーチエンジン -->


<!-- outbrain -->

<!-- taboola remcommend 20210927 -->

<div class="topPanelTitle clearfix">
  <div class="nw-label-title bg_col_rd">
    <div class="nw-label-title-inner">
      <span class="arrow_d"></span><i>今、あなたにオススメ</i>
    </div>
  </div>
</div>

<!-- taboola 20210927 -->
<div id="taboola-below-article-thumbnails-desktop-1"></div>
<script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({
    mode: 'thumbs-feed-01',
    container: 'taboola-below-article-thumbnails-desktop-1',
    placement: 'Below Article Thumbnails Desktop 1',
    target_type: 'mix'
  });
</script>
<!-- taboola 20210927 -->


<!-- /taboola remcommend 20210927 -->



<!-- インサイトサーチエンジン -->
<!-- /インサイトサーチエンジン -->








<!--関連記事-->


<!-- Cxense Module: PC用リコメンデーション -->
<!-- <div id="cx_4e2235ee9193b49bf3ad0a4f4491d54cea627cfe"></div>
<script type="text/javascript">
    var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
    cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
    cX.CCE.callQueue.push(['run',{
        widgetId: '4e2235ee9193b49bf3ad0a4f4491d54cea627cfe',
        targetElementId: 'cx_4e2235ee9193b49bf3ad0a4f4491d54cea627cfe'
    }]);
</script> -->
<!-- Cxense Module End -->


<!-- 190911 -->


<!-- Cxense Module: ニューズウィーク日本版PC関連記事 -->
<!-- <div id="cx_73d95fe35540f8d6ae072a9675f52c88a7b66345"></div>
<script type="text/javascript">
    var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
    cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
    cX.CCE.callQueue.push(['run',{
        widgetId: '73d95fe35540f8d6ae072a9675f52c88a7b66345',
        targetElementId: 'cx_73d95fe35540f8d6ae072a9675f52c88a7b66345'
    }]);
</script> -->
<!-- Cxense Module End -->


<!--/関連記事-->

<!-- 関連ワード -->
 <div id="related-words" class="border_btm">
<!--   <h4 class="bg_col_bk"><span class="arrow_btm_ttl"></span>関連ワード</h4>
 --> <div class="nw-label-title bg_col_bk">
 		<div class="nw-label-title-inner">
	 		<span class="arrow_d"></span><i>関連ワード</i>
 		</div>
 	</div>
  <ul>
<li><a href="/tagsearch/アメリカ社会" rel="tag" title="アメリカ社会のタグ一覧へ">アメリカ社会</a></li><li><a href="/tagsearch/コミュニケーション" rel="tag" title="コミュニケーションのタグ一覧へ">コミュニケーション</a></li><li><a href="/tagsearch/ネット" rel="tag" title="ネットのタグ一覧へ">ネット</a></li><li><a href="/tagsearch/日本社会" rel="tag" title="日本社会のタグ一覧へ">日本社会</a></li><li><a href="/tagsearch/英語" rel="tag" title="英語のタグ一覧へ">英語</a></li> </ul>
</div>


<style>

#btm-contents{
	padding: 30px 0 0;
}
#related-words ul{
	display: flex;
	margin: 20px 0 0;
	padding: 0 0 35px;
}
#related-words li + li{
	margin-left: 15px;
}
#related-words li a{
	display: block;
	padding: 0 10px;
	height: 26px;
	line-height: 26px;
	font-size: 15px;
	color: #000;
	text-align: center;
	background: #e6e6e6;
}
#taboola-below-article-thumbnails-desktop-1{
  height: 6400px;
}
.comment-box{
  min-height: 236px;
}

</style>



<!-- comment -->
<div class="comment-box">
     



<div class="comment-box-inner">
<div id="ulCommentWidget" style="clear:both;"></div>
</div>
<script>




var _ul_comment_config = _ul_comment_config||{};
_ul_comment_config['id'] = 'CM-CJxXQeot';
_ul_comment_config['article_id'] = '482974';
_ul_comment_config['author'] = '冷泉彰彦</MTIf>';
_ul_comment_config['published_at'] = '2024-01-31 15:00:00';

_ul_comment_config['url'] = 'https://www.newsweekjapan.jp/reizei/2024/01/no-thank-you.php';
_ul_comment_config['number_of_comments'] = 5;

(function (c, n, s) {if (c[n] === void 0) {c['ULObject'] = n;
c[n] = c[n] || function () {(c[n].q = c[n].q || []).push(arguments)};
c[n].l = 1 * new Date();var e = document.createElement('script');e.async = 1;
e.src = s + "/comment.js";var t = document.getElementsByTagName('script')[0];
t.parentNode.insertBefore(e, t);}})
(window, 'ul_comment_widget', 'https://cm-widget.nakanohito.jp/cm');
ul_comment_widget('init', _ul_comment_config);
</script>



   
</div> 
<!-- comment -->

<style>
.contentPanel + .comment-box{
	display: none;
}
</style>



<div id="latestheadlineslist" class="pageDetail mt20">
  <a href="/headlines/">
  <div class="nw-label-title bg_col_bl">
 		<div class="nw-label-title-inner">
	 		<span class="arrow_d"></span><i>ニュース速報</i>
 		</div>
  </div> 
  
  </a>

<div class="list_wrap border_btm clearfix">

<div class="list-content"><a href="/headlines/world/2024/02/483076.php"></a><div class="entryImg"><img   src="https://img-newsweekjapan.jp/headlines/assets_c/2024/02/2024-01-31T160645Z_1_LYNXMPEK0U0NH_RTROPTP_2_RUSSIA-ELECTION-PUTIN-thumb-186x186-1048686.jpg" width="186" height="186"></div><div class="content-txt"><div class="entry clearfix"><p class="label">ワールド</p><div class="entryTxt"><div class="title">プーチン氏、2月12日にトルコへ　ウクライナ侵攻後</div><div class="entryDate">2024.02.01</div></div></div></div></div><div class="list-content"><a href="/headlines/business/2024/02/483075.php"></a><div class="entryImg"><img   src="https://img-newsweekjapan.jp/headlines/assets_c/2024/02/2024-01-31T160633Z_1_LYNXMPEK0U0NN_RTROPTP_2_UNITED-ARLNS-AIRBUS-thumb-186x186-1048685.jpg" width="186" height="186"></div><div class="content-txt"><div class="entry clearfix"><p class="label">ビジネス</p><div class="entryTxt"><div class="title">ボーイング、第4四半期は赤字　予想ほど膨らまず　2</div><div class="entryDate">2024.02.01</div></div></div></div></div><div class="list-content"><a href="/headlines/world/2024/02/483074.php"></a><div class="entryImg"><img   src="https://img-newsweekjapan.jp/headlines/assets_c/2024/02/2024-01-31T160122Z_1_LYNXMPEK0U0N5_RTROPTP_2_RUSSIA-ELECTION-PUTIN-thumb-186x186-1048683.jpg" width="186" height="186"></div><div class="content-txt"><div class="entry clearfix"><p class="label">ワールド</p><div class="entryTxt"><div class="title">ウクライナ、米国製ミサイル使用　捕虜搭乗機撃墜＝プ</div><div class="entryDate">2024.02.01</div></div></div></div></div><div class="list-content"><a href="/headlines/business/2024/02/483073.php"></a><div class="entryImg"><img   src="https://img-newsweekjapan.jp/headlines/assets_c/2024/02/2024-01-31T160021Z_1_LYNXMPEK0U0N4_RTROPTP_2_GERMANY-ELECTION-thumb-186x186-1048679.jpg" width="186" height="186"></div><div class="content-txt"><div class="entry clearfix"><p class="label">ビジネス</p><div class="entryTxt"><div class="title">独ＣＰＩ、1月は前年同月比3.1％上昇に鈍化 </div><div class="entryDate">2024.02.01</div></div></div></div></div>
</div>
<div class="txt_col_bl btmLink"><a href=""><span class="arrow_btm_link"></span>ニュース速報一覧</a></div>
</div><section id="wv-popular-posts" class="wv-popular-posts-lower">
<article>
<div class="topPanelTitle clearfix">
<div class="nw-label-title bg_col_rd">
	<div class="nw-label-title-inner">
		<span class="arrow_d"></span><i>WorldVoice</i>
	</div>
</div>
</div>

<div class="wv-entrylist-box-nw2 wv-entrylist-box">
<ul>








<li><a href="/worldvoice/rikamama/2023/11/cdg.php">

<figure>
<img   src="https://img-newsweekjapan.jp/worldvoice/rikamama/assets_c/2023/11/IMG20231114155636-thumb-autox193-951533.jpg">
</figure>

<div class="list-text">
<span class="wv-author">RIKAママ｜フランス</span>


   

<p>シャルル・ド・ゴール空港からの車を狙う狂暴な強盗の…</p>
<time class="entry-date">2023/11/16</time>

</div>
</a></li>



































<li><a href="/worldvoice/hirano/2023/11/post-93.php">

<figure>
<img   src="https://img-newsweekjapan.jp/worldvoice/hirano/assets_c/2023/11/QF01-thumb-autox193-949644.jpg">
</figure>

<div class="list-text">
<span class="wv-author">平野美紀｜オーストラリア</span>


   

<p>マイケルが愛した飛行機と70年代ファーストクラスに…</p>
<time class="entry-date">2023/11/14</time>

</div>
</a></li>

























































































<li><a href="/worldvoice/shimmachi/2023/11/3-1.php">

<figure>
<img   src="https://img-newsweekjapan.jp/worldvoice/shimmachi/assets_c/2023/11/9abd9e5f518c0264c1f3f14b469987911037dc25-thumb-autox193-943986.jpg">
</figure>

<div class="list-text">
<span class="wv-author">新町智哉｜ミャンマー</span>


   

<p>ミャStartTs=0}},{key:"_createHitGenerator",value:function(e){return new Ce(this._logger,this._hitProcessor,this._config,this._media,e)}},{key:"_processRule",value:function(e,t){return this._ruleEngine.processRule(e,t).success}},{key:"_setupRules",value:function(){this._ruleEngine=new ye(this._logger),this._ruleEngine.setEnterAction(this._cmdEnterAction.bind(this)),this._ruleEngine.setExitAction(this._cmdExitAction.bind(this));var e=this._isInMedia.bind(this),t=this._isInAdBreak.bind(this),n=this._isInAd.bind(this),r=this._isInChapter.bind(this),a=this._isInTrackedState.bind(this),i=this._isValidMediaInfo.bind(this),o=this._isValidAdBreakInfo.bind(this),s=this._isValidAdInfo.bind(this),c=this._isValidChapterInfo.bind(this),u=this._isValidQoEInfo.bind(this),l=this._isValidStateInfo.bind(this),d=this._isValidErrorInfo.bind(this),p=this._isDifferentAdBreakInfo.bind(this),f=this._isDifferentAdInfo.bind(this),h=this._isDifferentChapterInfo.bind(this),m=this._allowPlayerStateChange.bind(this),g=this._allowStateTrack.bind(this),_=this._isInBuffering.bind(this),v=this._isInSeeking.bind(this),y=this._cmdMediaStart.bind(this),b=this._cmdMediaSkip.bind(this),k=this._cmdMediaComplete.bind(this),S=this._cmdError.bind(this),C=this._cmdPlay.bind(this),I=this._cmdPause.bind(this),A=this._cmdBufferStart.bind(this),E=this._cmdBufferComplete.bind(this),w=this._cmdSeekStart.bind(this),T=this._cmdSeekComplete.bind(this),P=this._cmdAdStart.bind(this),M=this._cmdAdComplete.bind(this),O=this._cmdAdSkip.bind(this),D=this._cmdAdBreakStart.bind(this),j=this._cmdAdBreakComplete.bind(this),x=this._cmdAdBreakSkip.bind(this),V=this._cmdChapterStart.bind(this),N=this._cmdChapterComplete.bind(this),R=this._cmdChapterSkip.bind(this),L=this._cmdStateStart.bind(this),F=this._cmdStateEnd.bind(this),U=this._cmdBitrateChange.bind(this),B=this._cmdQoEUpdate.bind(this),H=this._cmdPlayheadUpdate.bind(this),z=new ve(_e.SessionStart,"API:trackSessionStart");z.addPredicate(e,!1,we).addPredicate(i,!0,Ve).addAction(y),this._ruleEngine.addRule(z);var G=new ve(_e.SessionComplete,"API:trackComplete");G.addPredicate(e,!0,Ee).addAction(O).addAction(x).addAction(R).addAction(k),this._ruleEngine.addRule(G);var q=new ve(_e.SessionEnd,"API:trackSessionEnd");q.addPredicate(e,!0,Ee).addAction(O).addAction(x).addAction(R).addAction(b),this._ruleEngine.addRule(q);var W=new ve(_e.Error,"API:trackError");W.addPredicate(e,!0,Ee).addPredicate(d,!0,Ue).addAction(S),this._ruleEngine.addRule(W);var $=new ve(_e.Play,"API:trackPlay");$.addPredicate(e,!0,Ee).addPredicate(m,!0,qe).addAction(T).addAction(E).addAction(C),this._ruleEngine.addRule($);var Q=new ve(_e.Pause,"API:trackPause");Q.addPredicate(e,!0,Ee).addPredicate(m,!0,qe).addPredicate(_,!1,Te).addPredicate(v,!1,Me).addAction(I),this._ruleEngine.addRule(Q);var Y=new ve(_e.BufferStart,"API:trackEvent(BufferStart)");Y.addPredicate(e,!0,Ee).addPredicate(m,!0,qe).addPredicate(_,!1,Te).addPredicate(v,!1,Me).addAction(A),this._ruleEngine.addRule(Y);var K=new ve(_e.BufferComplete,"API:trackEvent(BufferComplete)");K.addPredicate(e,!0,Ee).addPredicate(m,!0,qe).addPredicate(_,!0,Pe).addAction(E),this._ruleEngine.addRule(K);var J=new ve(_e.SeekStart,"API:trackEvent(SeekStart)");J.addPredicate(e,!0,Ee).addPredicate(m,!0,qe).addPredicate(v,!1,Me).addPredicate(_,!1,Te).addAction(w),this._ruleEngine.addRule(J);var X=new ve(_e.SeekComplete,"API:trackEvent(SeekComplete)");X.addPredicate(e,!0,Ee).addPredicate(m,!0,qe).addPredicate(v,!0,Oe).addAction(T),this._ruleEngine.addRule(X);var Z=new ve(_e.AdBreakStart,"API:trackEvent(AdBreakStart)");Z.addPredicate(e,!0,Ee).addPredicate(o,!0,Ne).addPredicate(p,!0,Re).addAction(O).addAction(x).addAction(D),this._ruleEngine.addRule(Z);var ee=new ve(_e.AdBreakComplete,"API:trackEvent(AdBreakComplete)");ee.addPredicate(e,!0,Ee).addPredicate(t,!0,De).addAction(O).addAction(j),this._ruleEngine.addRule(ee);var te=new ve(_e.AdStart,"API:trackEvent(AdStart)");te.addPredicate(e,!0,Ee).addPredicate(t,!0,De).addPredicate(s,!0,Le).addPredicate(f,!0,Be).addAction(O).addAction(P),this._ruleEngine.addRule(te);var ne=new ve(_e.AdComplete,"API:trackEvent(AdComplete)");ne.addPredicate(e,!0,Ee).addPredicate(t,!0,De).addPredicate(n,!0,je).addAction(M),this._ruleEngine.addRule(ne);var re=new ve(_e.AdSkip,"API:trackEvent(AdSkip)");re.addPredicate(e,!0,Ee).addPredicate(t,!0,De).addPredicate(n,!0,je).addAction(O),this._ruleEngine.addRule(re);var ae=new ve(_e.ChapterStart,"API::trackEvent(chapterStart)");ae.addPredicate(e,!0,Ee).addPredicate(c,!0,He).addPredicate(h,!0,ze).addAction(R).addAction(V),this._ruleEngine.addRule(ae);var ie=new ve(_e.ChapterComplete,"API::trackEvent(chapterComplete)");ie.addPredicate(e,!0,Ee).addPredicate(r,!0,xe).addAction(N),this._ruleEngine.addRule(ie);var oe=new ve(_e.ChapterSkip,"API:trackEvent(chapterSkip)");oe.addPredicate(e,!0,Ee).addPredicate(r,!0,xe).addAction(R),this._ruleEngine.addRule(oe);var se=new ve(_e.BitrateChange,"API:trackEvent(BitrateChange)");se.addPredicate(e,!0,Ee).addAction(U),this._ruleEngine.addRule(se);var ce=new ve(_e.QoEUpdate,"API:trackEvent(QoEUpdate)");ce.addPredicate(e,!0,Ee).addPredicate(u,!0,Ge).addAction(B),this._ruleEngine.addRule(ce);var ue=new ve(_e.PlayheadUpdate,"API:trackEvent(PlayheadUpdate)");ue.addPredicate(e,!0,Ee).addAction(H),this._ruleEngine.addRule(ue);var le=new ve(_e.StateStart,"API:trackEvent(StateStart)");le.addPredicate(e,!0,Ee).addPredicate(l,!0,Fe).addPredicate(a,!1,We).addPredicate(g,!0,Qe).addAction(L),this._ruleEngine.addRule(le);var de=new ve(_e.StateEnd,"API:trackEvent(StateEnd)");de.addPredicate(e,!0,Ee).addPredicate(l,!0,Fe).addPredicate(a,!0,$e).addAction(F),this._ruleEngine.addRule(de)}},{key:"_isInMedia",value:function(){return!M(this._media)}},{key:"_isInAdBreak",value:function(){return this._media.isInAdBreak}},{key:"_isInAd",value:function(){return this._media.isInAd}},{key:"_isInChapter",value:function(){return this._media.isInChapter}},{key:"_isInBuffering",value:function(){return this._media.isInPlaybackState(be.Buffer)}},{key:"_isInSeeking",value:function(){return this._media.isInPlaybackState(be.Seek)}},{key:"_isInTrackedState",value:function(e){var t=de.deserialize(e[ge.Params]);return this._media.isCustomStateActive(t)}},{key:"_isValidMediaInfo",value:function(e){return null!=pe.deserialize(e[ge.Params])}},{key:"_isValidAdBreakInfo",value:function(e){return null!=ce.deserialize(e[ge.Params])}},{key:"_isValidAdInfo",value:function(e){return null!=se.deserialize(e[ge.Params])}},{key:"_isValidStateInfo",value:function(e){return null!=de.deserialize(e[ge.Params])}},{key:"_isValidChapterInfo",value:function(e){return null!=ue.deserialize(e[ge.Params])}},{key:"_isValidQoEInfo",value:function(e){return null!=fe.deserialize(e[ge.Params])}},{key:"_isValidErrorInfo",value:function(e){var t=e[ge.Params];if(!V(t))return!1;var n=t[ge.ErrorId];return x(n)}},{key:"_isDifferentAdBreakInfo",value:function(e){return!ce.deserialize(e[ge.Params]).equal(this._media.adBreakInfo)}},{key:"_isDifferentAdInfo",value:function(e){return!se.deserialize(e[ge.Params]).equal(this._media.adInfo)}},{key:"_isDifferentChapterInfo",value:function(e){return!ue.deserialize(e[ge.Params]).equal(this._media.chapterInfo)}},{key:"_allowPlayerStateChange",value:function(){return!this._media.isInAdBreak||this._media.isInAd}},{key:"_allowStateTrack",value:function(e){var t=de.deserialize(e[ge.Params]);return this._media.hasTrackedCustomState(t)||this._media.numTrackedCustomStates()<10}},{key:"_cmdEnterAction",value:function(e,t){var n=this._getRefTs(t);return M(this._hitGenerator)||this._hitGenerator.setRefTS(n),!0}},{key:"_cmdExitAction",value:function(e,t){if(M(this._media))return!1;e.id===_e.AdStart&&(!this._media.isInPlaybackState(be.Init)||this._media.isInPlaybackState(be.Buffer)||this._media.isInPlaybackState(be.Seek)||this._media.enterPlaybackState(be.Play)),e.id!==_e.BufferComplete&&e.id!==_e.SeekComplete||this._media.isInPlaybackState(be.Init)&&this._media.enterPlaybackState(be.Pause),this._cmdIdleDetection(t),this._cmdSessionTimeoutDetection(t),this._cmdContentStartDetection(t);var n=e.id===_e.AdStart||e.id===_e.AdBreakComplete;return this._hitGenerator.processPlayback(n),!0}},{key:"_cmdMediaStart",value:function(e){var t=pe.deserialize(e[ge.Params]),n=e[ge.Metadata],r=this._getRefTs(e);return this._media=new ke(t,n),this._hitGenerator=this._createHitGenerator(r),this._hitGenerator.processMediaStart(),this._sessionRefTs=r,this._inPrerollInterval=0!==t.prerollWaitTime,this._prerollRefTs=r,!0}},{key:"_cmdMediaComplete",value:function(){return this._hitGenerator.processMediaComplete(),this._resetStates(),!0}},{key:"_cmdMediaSkip",value:function(){return this._hitGenerator.processMediaSkip(),this._resetStates(),!0}},{key:"_cmdAdBreakStart",value:function(e){var t=ce.deserialize(e[ge.Params]);return this._media.setAdBreakInfo(t),this._hitGenerator.processAdBreakStart(),!0}},{key:"_cmdAdBreakComplete",value:function(){return this._hitGenerator.processAdBreakComplete(),this._media.clearAdBreakInfo(),!0}},{key:"_cmdAdBreakSkip",value:function(){return this._media.isInAdBreak&&(this._hitGenerator.processAdBreakSkip(),this._media.clearAdBreakInfo()),!0}},{key:"_cmdAdStart",value:function(e){var t=se.deserialize(e[ge.Params]),n=e[ge.Metadata];return this._media.setAdInfo(t,n),this._hitGenerator.processAdStart(),!0}},{key:"_cmdAdComplete",value:function(){return this._hitGenerator.processAdComplete(),this._media.clearAdInfo(),!0}},{key:"_cmdAdSkip",value:function(){return this._media.isInAd&&(this._hitGenerator.processAdSkip(),this._media.clearAdInfo()),!0}},{key:"_cmdChapterStart",value:function(e){var t=ue.deserialize(e[ge.Params]),n=e[ge.Metadata];return this._media.setChapterInfo(t,n),this._hitGenerator.processChapterStart(),!0}},{key:"_cmdChapterComplete",value:function(){return this._hitGenerator.processChapterComplete(),this._media.clearChapterInfo(),!0}},{key:"_cmdChapterSkip",value:function(){return this._media.isInChapter&&(this._hitGenerator.processChapterSkip(),this._media.clearChapterInfo()),!0}},{key:"_cmdError",value:function(e){var t=e[ge.Params][ge.ErrorId];return this._hitGenerator.processError(t),!0}},{key:"_cmdBitrateChange",value:function(){return this._hitGenerator.processBitrateChange(),!0}},{key:"_cmdPlay",value:function(){return this._media.enterPlaybackState(be.Play),!0}},{key:"_cmdPause",value:function(){return this._media.enterPlaybackState(be.Pause),!0}},{key:"_cmdBufferStart",value:function(){return this._media.enterPlaybackState(be.Buffer),!0}},{key:"_cmdBufferComplete",value:function(){return this._media.isInPlaybackState(be.Buffer)&&this._media.exitPlaybackState(be.Buffer),!0}},{key:"_cmdSeekStart",value:function(){return this._media.enterPlaybackState(be.Seek),!0}},{key:"_cmdSeekComplete",value:function(){return this._media.isInPlaybackState(be.Seek)&&this._media.exitPlaybackState(be.Seek),!0}},{key:"_cmdQoEUpdate",value:function(e){var t=fe.deserialize(e[ge.Params]);return this._media.qoeInfo=t,!0}},{key:"_cmdPlayheadUpdate",value:function(e){var t=e[ge.Params];if(V(t)){var n=t[ge.Playhead];Z(n)&&n>=0&&(this._media.playhead=n)}return!0}},{key:"_cmdIdleDetection",value:function(e){var t=this._getRefTs(e);this._media.isIdle()?this._mediaIdle?!this._trackerIdle&&t-this._mediaIdleStartTs>=18e5&&(this._hitGenerator.processSessionAbort(),this._trackerIdle=!0):(this._mediaIdle=!0,this._mediaIdleStartTs=t):(this._trackerIdle&&(this._hitGenerator.processSessionRestart(),this._trackerIdle=!1,this._sessionRefTs=t,this._contentStarted=!1,this._contentStartRefTs=null),this._mediaIdle=!1)}},{key:"_cmdSessionTimeoutDetection",value:function(e){var t=this._getRefTs(e);!this._trackerIdle&&t-this._sessionRefTs>=864e5&&(this._hitGenerator.processSessionAbort(),this._hitGenerator.processSessionRestart(),this._sessionRefTs=t,this._contentStarted=!1,this._contentStartRefTs=null)}},{key:"_cmdContentStartDetection",value:function(e){return!(!this._media.isIdle()&&!this._contentStarted&&(this._media.isInAdBreak?(this._contentStartRefTs=null,0):(null==this._contentStartRefTs&&(this._contentStartRefTs=this._getRefTs(e)),this._getRefTs(e)-this._contentStartRefTs>=1e3&&(this._hitGenerator.processPlayback(!0),this._contentStarted=!0),0)))}},{key:"_cmdStateStart",value:function(e){var t=de.deserialize(e[ge.Params]);return this._media.startCustomState(t),this._hitGenerator.processCustomStateStart(t),!0}},{key:"_cmdStateEnd",value:function(e){var t=de.deserialize(e[ge.Params]);return this._media.endCustomState(t),this._hitGenerator.processCustomStateEnd(t),!0}},{key:"_getRefTs",value:function(e){var t=e[ge.TimeStamp];return ee(t)?t:null}},{key:"_prerollDeferRule",value:function(e,t){if(this._inPrerollInterval&&null!=this._media){var n=this._media.mediaInfo.prerollWaitTime;if(this._prerollQueuedRules.push({eventName:e,context:t}),this._getRefTs(t)-this._prerollRefTs>=n||e===_e.AdBreakStart||e===_e.MediaComplete||e===_e.MediaSkip){for(var r=this._prerollReorderRules(this._prerollQueuedRules),a=0;a<r.length;a++){var i=r[a];this._processRule(i.eventName,i.context)}this._prerollQueuedRules=[],this._inPrerollInterval=!1}return!0}return!1}},{key:"_prerollReorderRules",value:function(e){for(var t=[],n=!1,r=0;r<e.length;++r)if(e[r].eventName===_e.AdBreakStart){n=!0;break}for(var a=n,i=0;i<e.length;i++){var o=e[i];o.eventName===_e.Play&&a||(o.eventName===_e.AdBreakStart&&(a=!1),t.push(o))}return t}},{key:"_cleanMetadata",value:function(e){var t=this,n={};return V(e)&&Object.keys(e).forEach((function(r){var a=e[r];Ye.test(r)&&!M(a)?n[r]=String(a):t._logger.log("#_cleanMetadata - Dropping metadata item "+r+": "+a)})),n}}]),e}(),Je=function(){function e(n,r,a){t(this,e),this._logger=_("MediaTracker ("+r+")"),this._tracker=new Ke(n,this._logger,a),this._timer=null,this._lastEventTS=null,this._lastPlayheadParams=null}return r(e,[{key:"trackSessionStart",value:function(e,t){this._logger.log("trackSessionStart(info:"+me(e)+" metadata:"+me(t)+")"),this._trackInternal(_e.SessionStart,e,t)}},{key:"trackSessionEnd",value:function(){this._logger.log("trackSessionEnd"),this._trackInternal(_e.SessionEnd)}},{key:"trackComplete",value:function(){this._logger.log("trackComplete"),this._trackInternal(_e.SessionComplete)}},{key:"trackPlay",value:function(){this._logger.log("trackPlay"),this._trackInternal(_e.Play)}},{key:"trackPause",value:function(){this._logger.log("trackPause"),this._trackInternal(_e.Pause)}},{key:"trackEvent",value:function(e,t,n){this._logger.log("trackEvent("+e+" info:"+me(t)+" metadata:"+me(n)+")"),this._trackInternal(e,t,n)}},{key:"trackError",value:function(e){this._logger.log("trackError("+e+")");var t=a({},ge.ErrorId,e);this._trackInternal(_e.Error,t)}},{key:"updatePlayhead",value:function(e){var t=a({},ge.Playhead,e);this._trackInternal(_e.PlayheadUpdate,t)}},{key:"updateQoEObject",value:function(e){this._logger.log("updateQoEObject("+me(e)+")"),this._trackInternal(_e.QoEUpdate,e)}},{key:"destroy",value:function(){this._logger.log("destroy()"),this._stopTimer(),this._tracker=null}},{key:"_trackInternal",value:function(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this._tracker){var o=p(),s=(a(r={},ge.Name,e),a(r,ge.Params,t),a(r,ge.Metadata,n),a(r,ge.TimeStamp,o),a(r,ge.InternalEvent,i),r),c=this._tracker.track(s);this._lastEventTS=o,e===_e.PlayheadUpdate&&(this._lastPlayheadParams=t),e===_e.SessionStart&&c?this._startTimer():e!==_e.SessionComplete&&e!==_e.SessionEnd||this._stopTimer()}else this._logger.warn("Dropping the call as the tracker instance is already destroyed")}},{key:"_startTimer",value:function(){var e=this;this._timer||(this._timer=h((function(){e._onTick()}),500))}},{key:"_stopTimer",value:function(){var e;this._timer&&(e=this._timer,clearInterval(e),this._timer=null)}},{key:"_onTick",value:function(){p()-this._lastEventTS>750&&this._trackInternal(_e.PlayheadUpdate,this._lastPlayheadParams,null,!0)}}]),e}(),Xe=new oe,Ze=d(),et={configure:function(e){Xe.configure(e)},getInstance:function(e){var t="tracker"+Ze.getUniqueId();return new Je(Xe,t,e)},createMediaObject:function(e,t,n,r,a){var i=null;try{i=new pe({id:t,name:e,streamType:r,mediaType:a,length:n}).serialize()}catch(e){he.error("Error creating MediaObject ("+e.message+")")}return i},createAdBreakObject:function(e,t,n){var r=null;try{r=new ce({name:e,position:t,startTime:n}).serialize()}catch(e){he.error("Error creating AdBreakObject ("+e.message+")")}return r},createAdObject:function(e,t,n,r){var a=null;try{a=new se({id:t,name:e,position:n,length:r}).serialize()}catch(e){he.error("Error creating AdObject ("+e.message+")")}return a},createChapterObject:function(e,t,n,r){var a=null;try{a=new ue({name:e,position:t,length:n,startTime:r}).serialize()}catch(e){he.error("Error creating ChapterObject ("+e.message+")")}return a},createQoEObject:function(e,t,n,r){var a=null;try{a=new fe({bitrate:e,droppedFrames:r,fps:n,startupTime:t}).serialize()}catch(e){he.error("Error creating QoEObject ("+e.message+")")}return a},createStateObject:function(e){var t=null;try{t=new de({name:e}).serialize()}catch(e){he.error("Error creating StateObject ("+e.message+")")}return t},version:"js-extn-3.0.2",Event:k,MediaType:C,PlayerState:I,StreamType:T,MediaObjectKey:S,VideoMetadataKeys:A,AudioMetadataKeys:E,AdMetadataKeys:w},tt="ecid",nt="analytics",rt="mediaanalytics",at=function(e){function n(e,r){var a;if(t(this,n),a=o.call(this),!e)throw new Error("Valid appmeasurement instance is required");if(!e.visitor)throw new Error("Valid visitor instance is required");return a._mediaConfig=r,a._appMeasurement=e,a._appMeasurementReady=!1,a._privacyResolved=!1,a._logger=_("WebECResolver"),a._fetchECParams(),a._fetchPrivacyStatus(),a._setupResolver(),a}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,e);var i,o=(i=n,function(){var e,t=s(i);if(u()){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});return r(n,[{key:"resolveKeys",value:function(e){if(!e||0===e.length)return{};for(var t={},n=0;n<e.length;n++){var r=e[n],a=Object.prototype.hasOwnProperty.call(this._fnMap,r)?this._fnMap[r].call(this):null;M(a)||(t[r]=a)}return t}},{key:"getPrivacyStatus",value:function(){return this._privacyStatus[rt]}},{key:"notifyPrivacyChange",value:function(e){this._mediaPrivacyClb.push(e)}},{key:"isReady",value:function(){return!!this._privacyResolved&&this._privacyStatus[rt]===P.OptIn&&(this._privacyStatus[nt]!==P.OptIn||this._appMeasurementReady)}},{key:"_setupResolver",value:function(){var e=this,t={};t[R.Rsid]=function(){return e._appMeasurement.account},t[R.AnalyticsTrackingServer]=function(){return e._appMeasurement.ssl&&e._appMeasurement.trackingServerSecure?e._appMeasurement.trackingServerSecure:e._appMeasurement.trackingServer},t[R.AnalyticsSsl]=function(){return e._appMeasurement.ssl},t[R.Vid]=function(){return e._appMeasurement.visitorID},t[R.Aid]=function(){var t=e._appMeasurement.analyticsVisitorID;if(""!==t)return t},t[R.Mcid]=function(){return e._appMeasurement.marketingCloudVisitorID},t[R.McOrgId]=function(){return e._appMeasurement.visitor.marketingCloudOrgID},t[R.AamLocHint]=function(){var t=parseInt(e._appMeasurement.audienceManagerLocationHint,10)
;return isNaN(t)?void 0:t},t[R.CustomerIds]=function(){return e._appMeasurement.visitor.getCustomerIDs()},t[R.MediaTrackingServer]=function(){return e._mediaConfig.trackingServer},t[R.MediaChannel]=function(){return e._mediaConfig.channel},t[R.MediaAppVersion]=function(){return e._mediaConfig.appVersion},t[R.MediaPlayerName]=function(){return e._mediaConfig.playerName},t[R.MediaSsl]=function(){return e._mediaConfig.ssl},this._fnMap=t}},{key:"_fetchECParams",value:function(){this._appMeasurement.isReadyToTrack()?this._onAppMeasurementReady():this._appMeasurement.callbackWhenReadyToTrack(this,this._onAppMeasurementReady,[])}},{key:"_onAppMeasurementReady",value:function(){this._logger.log("AppMeasurement ready"),this._appMeasurementReady=!0}},{key:"_fetchPrivacyStatus",value:function(){var e,t=this;this._mediaPrivacyClb=[],this._optIn=window.adobe&&window.adobe.optIn?window.adobe.optIn:void 0;var n=this._optIn&&this._optIn.doesOptInApply,r=n?P.OptUnknown:P.OptIn;this._privacyStatus=(a(e={},tt,r),a(e,nt,r),a(e,rt,r),e),n?this._optIn.fetchPermissions((function(){t._privacyResolved=!0,t._privacyStatus[tt]=t._optIn.isApproved(t._optIn.Categories.ECID)?P.OptIn:P.OptOut,t._privacyStatus[nt]=t._optIn.isApproved(t._optIn.Categories.ANALYTICS)?P.OptIn:P.OptOut,t._privacyStatus[rt]=t._optIn.isApproved(t._optIn.Categories.MEDIA_ANALYTICS)?P.OptIn:P.OptOut,t._mediaPrivacyClb.forEach((function(e){e(t._privacyStatus[rt])})),t._logger.log("Privacy Status "+me(t._privacyStatus))}),!0):(this._privacyResolved=!0,this._logger.log("OptIn service not used, defaulting privacy status to "+me(this._privacyStatus)))}}]),n}(function(){function e(){t(this,e)}return r(e,[{key:"resolveKeys",value:function(){throw new Error("Implementation error: Method must be overridden.")}},{key:"isReady",value:function(){}},{key:"getPrivacyStatus",value:function(){}},{key:"notifyPrivacyChange",value:function(){}}]),e}()),it=_("Media"),ot=!1;return{Media:o({},et,{configure:function(e,t){if(m(e||{}),ot)it.error("MediaSDK is already configured");else{it.log("configure("+me(e)+")");try{!function(e){if(!V(e))throw new Error("mediaConfig is not a valid object");var t=e.trackingServer;if(!x(t))throw new Error("trackingServer is empty");if(-1!==t.indexOf("hb.omtrdc.net"))throw new Error("trackingServer should be set to Media collection endpoint and not heartbeat endpoint. Contact your Adobe representative for more information.")}(e);var n=new at(t,e);et.configure(n),ot=!0}catch(e){it.error("Error configuring MediaSDK : "+e.message),m({debugLogging:!1})}}},getInstance:function(e){return et.getInstance(e)}}),MediaConfig:function e(){t(this,e),this.trackingServer=void 0,this.channel=void 0,this.appVersion=void 0,this.playerName=void 0,this.ssl=!0,this.debugLogging=!1}}},"object"==typeof t&&void 0!==e?e.exports=r():"function"==typeof define&&define.amd?define(r):(n=n||self).ADB=r()}}}},"adobe-mcid":{displayName:"Experience Cloud ID Service",hostedLibFilesBaseUrl:"https://apps.nhk.or.jp/assets/dtm//f085c0790456/610bd2b69f10/5b9f2d6a97ed/hostedLibFiles/EP31a59fd25d824db7be52972a70e94c1c/",settings:{orgId:"02C51F6A550AFE4E0A4C98A7@AdobeOrg",variables:[{name:"trackingServer",value:"mtc.nhk.or.jp"},{name:"trackingServerSecure",value:"mtcs.nhk.or.jp"},{name:"marketingCloudServer",value:"mtc.nhk.or.jp"},{name:"marketingCloudServerSecure",value:"mtcs.nhk.or.jp"},{name:"disableIdSyncs",value:"true"},{name:"cookieDomain",value:"%cookieDomain%"},{name:"disableThirdPartyCalls",value:"true"},{name:"secureCookie",value:"true"},{name:"sameSiteCookie",value:"None"}],doesOptInApply:!0},modules:{"adobe-mcid/src/lib/sharedModules/mcidInstance.js":{script:function(e,t,n,r){"use strict";var a=n("@adobe/reactor-document"),i=n("../codeLibrary/VisitorAPI"),o=n("../../view/utils/timeUnits"),s=function(e){return e.reduce((function(e,t){var n=/^(true|false)$/i.test(t.value)?JSON.parse(t.value):t.value;return e[t.name]=n,e}),{})},c=function(e){var t=r.getExtensionSettings();if("string"!=typeof t.orgId)throw new TypeError("Org ID is not a string.");var n=s(t.variables||[]),a=t.doesOptInApply;a&&("boolean"==typeof a?n.doesOptInApply=a:t.optInCallback&&(n.doesOptInApply=t.optInCallback));var i=t.isOptInStorageEnabled;i&&(n.isOptInStorageEnabled=i);var c=t.optInCookieDomain;c&&(n.optInCookieDomain=c);var u=t.optInStorageExpiry;if(u){var l=t.timeUnit;if(l&&o[l]){var d=u*o[l];n.optInStorageExpiry=d}}else!0===i&&(n.optInStorageExpiry=33696e3);var p=t.previousPermissions;p&&(n.previousPermissions=p);var f=t.preOptInApprovals;if(f)n.preOptInApprovals=f;else{var h=t.preOptInApprovalInput;h&&(n.preOptInApprovals=h)}var m=t.isIabContext;m&&(n.isIabContext=m);var g=e.getInstance(t.orgId,n);return r.logger.info('Created instance using orgId: "'+t.orgId+'"'),r.logger.info("Set variables: "+JSON.stringify(n)),g.getMarketingCloudVisitorID((function(e){r.logger.info("Obtained Marketing Cloud Visitor Id: "+e)}),!0),g},u=function(e){return(r.getExtensionSettings().pathExclusions||[]).some((function(t){return t.valueIsRegex?new RegExp(t.value,"i").test(e):t.value===e}))},l=null;_satellite.getVisitorId=function(){return l},u(a.location.pathname)?r.logger.warn("MCID library not loaded. One of the path exclusions matches the current path."):l=c(i),e.exports=l},name:"mcid-instance",shared:!0},"adobe-mcid/src/lib/codeLibrary/VisitorAPI.js":{script:function(e){e.exports=(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,r=this;return function(){r.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=(t=void 0===t?[]:t)instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!M.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach((function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)}),this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function r(e,t,n){var r=null==e?void 0:e[t];return void 0===r?n:r}function a(e){for(var t=/^\d+$/,n=0,r=e.length;n<r;n++)if(!t.test(e[n]))return!1;return!0}function i(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var r=parseInt(e[n],10),a=parseInt(t[n],10);if(r>a)return 1;if(a>r)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),r=t.toString().split(".");return a(n.concat(r))?(i(n,r),o(n,r)):NaN}function c(e){return e===Object(e)&&0===Object.keys(e).length}function u(e){return"function"==typeof e||e instanceof Array&&e.length}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=le("log",e,t),this.warn=le("warn",e,t),this.error=le("error",e,t)}function d(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).cookieName,t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).cookies;if(!e||!t)return{get:Ae,set:Ae,remove:Ae};var n={remove:function(){t.remove(e)},get:function(){var n=t.get(e),r={};try{r=JSON.parse(n)}catch(n){r={}}return r},set:function(r,a){a=a||{};var i=n.get(),o=Object.assign(i,r);t.set(e,JSON.stringify(o),{domain:a.optInCookieDomain||"",cookieLifetime:a.optInStorageExpiry||3419e4,secure:a.secure,sameSite:a.sameSite,expires:!0})}};return n}function p(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function f(){function e(e,t){var n=me(e);return n.length?n.every((function(e){return!!t[e]})):ge(t)}function t(){T(E),w(te.COMPLETE),v(_.status,_.permissions),s&&g.set(_.permissions,{optInCookieDomain:c,optInStorageExpiry:u,secure:p,sameSite:f}),y.execute(Oe)}function n(e){return function(n,r){if(!_e(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return w(te.CHANGED),Object.assign(E,ve(me(n),e)),r||t(),_}}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r.doesOptInApply,i=r.previousPermissions,o=r.preOptInApprovals,s=r.isOptInStorageEnabled,c=r.optInCookieDomain,u=r.optInStorageExpiry,l=r.isIabContext,p=r.secureCookie,f=r.sameSiteCookie,h=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).cookies,m=Ee(i);we(m,"Invalid `previousPermissions`!"),we(o,"Invalid `preOptInApprovals`!");var g=d({cookieName:"adobeujs-optin"},{cookies:h}),_=this,v=ee(_),y=se(),b=ke(m),k=ke(o),S=s?g.get():{},C={},I=function(e,t){return Se(e)||t&&Se(t)?te.COMPLETE:te.PENDING}(b,S),A=function(e,t,n){var r=ve(oe,!a);return a?Object.assign({},r,e,t,n):r}(k,b,S),E=ye(A),w=function(e){return I=e},T=function(e){return A=e};_.deny=n(!1),_.approve=n(!0),_.denyAll=_.deny.bind(_,oe),_.approveAll=_.approve.bind(_,oe),_.isApproved=function(t){return e(t,_.permissions)},_.isPreApproved=function(t){return e(t,k)},_.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?_.on(te.COMPLETE,e):Ae;return!a||a&&_.isComplete||o?e(_.permissions):t||y.add(Oe,(function(){return e(_.permissions)})),n},_.complete=function(){_.status===te.CHANGED&&t()},_.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(De);C[e.name]||(C[e.name]=e,e.onRegister.call(e,_))},_.execute=Me(C),_.memoizeContent=function(e){Ie(e)&&g.set(e,{optInCookieDomain:c,optInStorageExpiry:u,secure:p,sameSite:f})},_.getMemoizedContent=function(e){var t=g.get();if(t)return t[e]},Object.defineProperties(_,{permissions:{get:function(){return A}},status:{get:function(){return I}},Categories:{get:function(){return ne}},doesOptInApply:{get:function(){return!!a}},isPending:{get:function(){return _.status===te.PENDING}},isComplete:{get:function(){return _.status===te.COMPLETE}},__plugins:{get:function(){return Object.keys(C)}},isIabContext:{get:function(){return l}}})}function h(e,t){function n(){a=null,e.call(e,new p("The call took longer than you wanted!"))}function r(){a&&(clearTimeout(a),e.apply(e,arguments))}if(void 0===t)return e;var a=setTimeout(n,t);return r}function m(){if(window.__tcfapi)return window.__tcfapi;var e=window;if(e!==window.top){for(var t;!t;){e=e.parent;try{e.frames.__tcfapiLocator&&(t=e)}catch(e){}if(e===window.top)break}if(t){var n={};return window.__tcfapi=function(e,r,a,i){var o=Math.random()+"",s={__tcfapiCall:{command:e,parameter:i,version:r,callId:o}};n[o]=a,t.postMessage(s,"*")},window.addEventListener("message",(function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__tcfapiReturn){var r=t.__tcfapiReturn;"function"==typeof n[r.callId]&&(n[r.callId](r.returnValue,r.success),delete n[r.callId])}}),!1),window.__tcfapi}fe.error("__tcfapi not found")}else fe.error("__tcfapi not found")}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=!0===e.vendor.consents[t],a=n.every((function(t){return!0===e.purpose.consents[t]}));return r&&a}function _(){var e=this;e.name="iabPlugin",e.version="0.0.2";var t,n=se(),r={transparencyAndConsentData:null},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r[e]=t};e.fetchConsentData=function(e){var t=h(e.callback,e.timeout);i({callback:t})},e.isApproved=function(e){var t=e.callback,n=e.category,a=e.timeout;if(r.transparencyAndConsentData)return t(null,g(r.transparencyAndConsentData,re[n],ae[n]));var o=h((function(e,r){t(e,g(r,re[n],ae[n]))}),a);i({category:n,callback:o})},e.onRegister=function(n){t=n;var r=Object.keys(re),a=function(e,t){!e&&t&&(r.forEach((function(e){var r=g(t,re[e],ae[e]);n[r?"approve":"deny"](e,!0)})),n.complete())};e.fetchConsentData({callback:a})};var i=function(e){var i=e.callback;if(r.transparencyAndConsentData)return i(null,r.transparencyAndConsentData);n.add("FETCH_CONSENT_DATA",i),o((function(e,i){if(i){var o=ye(e),s=t.getMemoizedContent("iabConsentHash"),c=pe(o.tcString).toString(32);o.consentString=e.tcString,o.hasConsentChangedSinceLastCmpPull=s!==c,a("transparencyAndConsentData",o),t.memoizeContent({iabConsentHash:c})}n.execute("FETCH_CONSENT_DATA",[null,r.transparencyAndConsentData])}))},o=function(e){var t=Pe(re),n=m();"function"==typeof n&&n("getTCData",2,e,t)}}var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,r=1;r<arguments.length;++r)for(t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e};var y,b,k={MESSAGES:{HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},STATE_KEYS_MAP:{MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},ASYNC_API_MAP:{MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},SYNC_API_MAP:{CUSTOMERIDS:"getCustomerIDs"},ALL_APIS:{MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},FIELDGROUP_TO_FIELD:{MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},FIELDS:{MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},AUTH_STATE:{UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},OPT_OUT:{GLOBAL:"global"},SAME_SITE_VALUES:{LAX:"Lax",STRICT:"Strict",NONE:"None"}},S=k.STATE_KEYS_MAP,C=function(e){function t(){}function n(t,n){var r=this;return function(){var a=e(0,t),i={};return i[t]=a,r.setStateAndPublish(i),n(a),a}}this.getMarketingCloudVisitorID=function(e){e=e||t;var r=this.findField(S.MCMID,e),a=n.call(this,S.MCMID,e);return void 0!==r?r:a()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID((function(t){e({MCMID:t})}))}},I=k.MESSAGES,A=k.ASYNC_API_MAP,E=k.SYNC_API_MAP,w=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(I.GETSTATE),""}}function n(n){this[A[n]]=function(r){r=r||e;var a=this.findField(n,r),i=t.call(this,n,r);return void 0!==a?a:i()}}function r(t){this[E[t]]=function(){return this.findField(t,e)||{}}}Object.keys(A).forEach(n,this),Object.keys(E).forEach(r,this)},T=k.ASYNC_API_MAP,P=function(){Object.keys(T).forEach((function(e){this[T[e]]=function(t){this.callbackRegistry.add(e,t)}}),this)},M=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)};var r=function(){var e=navigator.appName,t=navigator.userAgent;return"Microsoft Internet Explorer"===e||t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0&&t.indexOf("Windows NT 6")>=0};n.getIeVersion=function(){return document.documentMode?document.documentMode:r()?7:null},n.isFirefox=function(e){return!!/Firefox\/([0-9\.]+)(?:\s|$)/.test(e||window.navigator.userAgent)},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce((function(t,n){return e[n]&&(t[n]=e[n]),t}),Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var r=parseInt(e.d_ottl,10);return isNaN(r)&&(r=7200),{optOut:t,d_ottl:r}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}})),O=(M.isObjectEmpty,M.isValueEmpty,M.getIeVersion,M.isFirefox,M.encodeAndBuildRequest,M.isObject,M.defineGlobalNamespace,M.pluck,M.parseOptOut,M.normalizeBoolean,n),D=k.MESSAGES,j={0:"prefix",1:"orgID",2:"state"},x=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach((function(e,n){void 0!==e&&(t[j[n]]=2!==n?e:JSON.parse(e))})),t}catch(e){}},this.isInvalid=function(n){var r=this.parse(n);if(!r||Object.keys(r).length<2)return!0;var a=e!==r.orgID,i=!t||n.origin!==t,o=-1===Object.keys(D).indexOf(r.prefix);return a||i||o},this.send=function(n,r,a){var i=r+"|"+e;a&&a===Object(a)&&(i+="|"+JSON.stringify(a));try{n.postMessage(i,t)}catch(e){}}},V=k.MESSAGES,N=function(e,t,n,r){function a(e){Object.assign(f,e)}function i(e){Object.assign(f.state,e),Object.assign(f.state.ALLFIELDS,e),f.callbackRegistry.executeAll(f.state)}function o(e){if(!g.isInvalid(e)){m=!1;var t=g.parse(e);f.setStateAndPublish(t.state)}}function s(e){!m&&h&&(m=!0,g.send(r,e))}function c(){a(new C(n._generateID)),f.getMarketingCloudVisitorID(),f.callbackRegistry.executeAll(f.state,!0),v.removeEventListener("message",u)}function u(e){if(!g.isInvalid(e)){var t=g.parse(e);m=!1,v.clearTimeout(f._handshakeTimeout),v.removeEventListener("message",u),a(new w(f)),v.addEventListener("message",o),f.setStateAndPublish(t.state),f.callbackRegistry.hasCallbacks()&&s(V.GETSTATE)}}function l(){h&&postMessage?(v.addEventListener("message",u),s(V.HANDSHAKE),f._handshakeTimeout=setTimeout(c,250)):c()}function d(){v.s_c_in||(v.s_c_il=[],v.s_c_in=0),f._c="Visitor",f._il=v.s_c_il,f._in=v.s_c_in,f._il[f._in]=f,v.s_c_in++}function p(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(f[e]=function(){})}Object.keys(n).forEach(e),f.getSupplementalDataID=n.getSupplementalDataID,f.isAllowed=function(){return!0}}var f=this,h=t.whitelistParentDomain;f.state={ALLFIELDS:{}},f.version=n.version,f.marketingCloudOrgID=e,f.cookieDomain=n.cookieDomain||"",f._instanceType="child";var m=!1,g=new x(e,h);f.callbackRegistry=O(),f.init=function(){d(),p(),a(new P(f)),l()},f.findField=function(e,t){if(void 0!==f.state[e])return t(f.state[e]),f.state[e]},f.messageParent=s,f.setStateAndPublish=i},R=k.MESSAGES,L=k.ALL_APIS,F=k.ASYNC_API_MAP,U=k.FIELDGROUP_TO_FIELD,B=function(e,t){function n(){var t={};return Object.keys(L).forEach((function(n){var r=L[n],a=e[r]();M.isValueEmpty(a)||(t[n]=a)})),t}function r(){var t=[];return e._loading&&Object.keys(e._loading).forEach((function(n){if(e._loading[n]){var r=U[n];t.push(r)}})),t.length?t:null}function a(t){return function n(){var a=r();if(a){var i=F[a[0]];e[i](n,!0)}else t()}}function i(e,r){var a=n();t.send(e,r,a)}function o(e){c(e),i(e,R.HANDSHAKE)}function s(e){a((function(){i(e,R.PARENTSTATE)}))()}function c(n){function r(r){a.call(e,r),t.send(n,R.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var a=e.setCustomerIDs;e.setCustomerIDs=r}return function(e){t.isInvalid(e)||(t.parse(e).prefix===R.HANDSHAKE?o:s)(e.source)}},H=function(e,t){function n(e){return function(n){r[e]=n,++a===i&&t(r)}}var r={},a=0,i=Object.keys(e).length;Object.keys(e).forEach((function(t){var r=e[t];if(r.fn){var a=r.args||[];a.unshift(n(t)),r.fn.apply(r.context||null,a)}}))},z={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),r=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,r<0?t.length:r))},set:function(e,t,n){var a=r(n,"cookieLifetime"),i=r(n,"expires"),o=r(n,"domain"),s=r(n,"secure"),c=r(n,"sameSite"),u=s?"Secure":"",l=c?"SameSite="+c+";":"";if(i&&"SESSION"!==a&&"NONE"!==a){var d=""!==t?parseInt(a||0,10):-60;if(d)(i=new Date).setTime(i.getTime()+1e3*d);else if(1===i){var p=(i=new Date).getYear();i.setYear(p+2+(p<1900?1900:0))}}else i=0;return e&&"NONE"!==a?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(o?" domain="+o+";":"")+l+u,this.get(e)===t):0},remove:function(e,t){var n=r(t,"domain");n=n?" domain="+n+";":"";var a=r(t,"secure"),i=r(t,"sameSite"),o=a?"Secure":"",s=i?"SameSite="+i+";":"";document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n+s+o}},G=function(e,t){!e&&v.location&&(e=v.location.hostname);var n,r=e.split("."),a=t||{};for(n=r.length-2;n>=0;n--)if(a.domain=r.slice(n).join("."),z.set("TEST_AMCV_COOKIE_WRITE","cookie",a))return z.remove("TEST_AMCV_COOKIE_WRITE",a),a.domain;return""},q={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},W=!!v.postMessage,$={postMessage:function(e,t,n){var r=1;t&&(W?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+r+++"&"+e))},receiveMessage:function(e,t){var n;try{W&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),v.addEventListener?v[e?"addEventListener":"removeEventListener"]("message",n):v[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},Q=function(e){var t,n,r="0123456789",a="",i="",o=8,s=10,c=10,u=(""+Date.now()).substr(-6).split("").reverse("").join("");if(1==e){for(r+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),4>t&&u[t]<o&&(n=+u[t]),a+=r.substring(n,n+1),n=Math.floor(Math.random()*o),i+=r.substring(n,n+1),o=16;return a+"-"+i}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),6>t&&u[t]<s?(a+=u[t],n=u[t]):a+=r.substring(n,n+1),0===t&&9==n?s=3:((1==t||2==t)&&10!=s&&2>n||2<t)&&(s=10),n=Math.floor(Math.random()*c),i+=r.substring(n,n+1),0===t&&9==n?c=3:((1==t||2==t)&&10!=c&&2>n||2<t)&&(c=10);return a+i},Y=function(e){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(v.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new v[this.corsMetadata.corsType]},fireCORS:function(t,n){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var r=t.callback,i=v,o=0;o<r.length;o++)i=i[r[o]];i(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var i=this.getCORSInstance();i.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(i.withCredentials=!0,i.timeout=e.loadTimeout,i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),i.onerror=function(e){a.handleCORSError(t,e,"onerror")},i.ontimeout=function(e){a.handleCORSError(t,e,"ontimeout")},i.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,r){e.CORSErrors.push({corsData:t,error:n,description:r}),t.loadErrorHandler&&("ontimeout"===r?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},K={POST_MESSAGE_ENABLED:!!v.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},J=function(e,t){var n=v.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,r="http://fast.",a="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(r=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=r+this.subdomain+".demdex.net/dest5.html"+a,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:K.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){(a=n.createElement("iframe")).sandbox="allow-scripts allow-same-origin",a.title="Adobe ID Syncing iFrame",a.id=r.id,a.name=r.id+"_name",a.style.cssText="display: none; width: 0; height: 0;",a.src=r.url,r.newIframeCreated=!0,t(),n.body.appendChild(a)}function t(e){a.addEventListener("load",(function(){a.className="aamIframeLoaded",r.iframeHasLoaded=!0,r.fireIframeLoadedCallbacks(e),r.requestToProcess()}))}this.startedAttachingIframe=!0;var r=this,a=n.getElementById(this.id);a?"IFRAME"!==a.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==a.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=a,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=a},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach((function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})})),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){a.jsonForComparison.push(t),a.jsonWaiting.push(t),a.processSyncOnPage(t)}var r,a=this;if(t===Object(t)&&t.ibs)if(r=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var i,o,s,c=!1;for(i=0,o=this.jsonForComparison.length;i<o;i++)if(s=this.jsonForComparison[i],r===JSON.stringify(s.ibs||[])){c=!0;break}c?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!K.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout((function(){a.messageSendingInterval=K.POST_MESSAGE_ENABLED?null:150}),this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var r=e._getField("MCAAMLH"),a=t.d_region||t.dcs_region;return r?a&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",a),parseInt(r,10)!==a&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),r=a)):(r=a)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r)),r||(r=""),r},processSyncOnPage:function(e){var t,n,r,a;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(r=0;r<n;r++)(a=t[r]).syncOnPage&&this.checkFirstPartyCookie(a,"","syncOnPage")},process:function(e){var t,n,r,a,i,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,r=0;r<n;r++)a=t[r],i=[o("ibs"),o(a.id||""),o(a.tag||""),M.encodeAndBuildRequest(a.url||[],","),o(a.ttl||""),"","",a.fireURLSync?"true":"false"],a.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(i.join("|")):a.fireURLSync&&this.checkFirstPartyCookie(a,i.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,r){var a="syncOnPage"===r,i=a?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,c=e._getField(i),u=!1,l=!1,d=Math.ceil((new Date).getTime()/K.MILLIS_PER_DAY);c?(o=c.split("*"),u=(s=this.pruneSyncData(o,t.id,d)).dataPresent,l=s.dataValid,u&&l||this.fireSync(a,t,n,o,i,d)):(o=[],this.fireSync(a,t,n,o,i,d))},pruneSyncData:function(e,t,n){var r,a,i,o=!1,s=!1;for(a=0;a<e.length;a++)r=e[a],i=parseInt(r.split("-")[1],10),r.match("^"+t+"-")?(o=!0,n<i?s=!0:(e.splice(a,1),a--)):n>=i&&(e.splice(a,1),a--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort((function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)}));e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,r,a,i,o){var s=this;if(t){if("img"===n.tag){var c,u,l,d,p=n.url,f=e.loadSSL?"https:":"http:";for(c=0,u=p.length;c<u;c++){l=p[c],d=/^\/\//.test(l);var h=new Image;h.addEventListener("load",function(t,n,r,a){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,c,u,l,d=e._getField(i),p=[];if(d)for(c=0,u=(o=d.split("*")).length;c<u;c++)(l=o[c]).match("^"+n.id+"-")||p.push(l);s.setSyncTrackingData(p,n,r,a)}}(this.onPagePixels.length,n,i,o)),h.src=(d?f:"")+l,this.onPagePixels.push(h)}}}else this.addMessage(r),this.setSyncTrackingData(a,n,i,o)},addMessage:function(t){var n=encodeURIComponent(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((K.POST_MESSAGE_ENABLED?"":n)+t)},setSyncTrackingData:function(t,n,r,a){t.push(n.id+"-"+(a+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(r,t.join("*"))},sendMessages:function(){var e,t=this,n="",r=encodeURIComponent;this.regionChanged&&(n=r("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?K.POST_MESSAGE_ENABLED?(e=n+r("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout((function(){t.sendMessages()}),this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){$.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&("canSetThirdPartyCookies"===(t=e.replace(n,"").split("|"))[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(r){(null==this.url||r.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=r.subdomain||"",this.url=this.getUrl()),r.ibs instanceof Array&&r.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(r):this.requestToProcess(r),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(r)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>K.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},X={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{type:"boolean"},disableThirdPartyCalls:{type:"boolean"},discardTrackingServerECID:{type:"boolean"},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{type:"boolean"},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{type:"boolean"},disableThirdPartyCookies:{type:"boolean"},idSyncDisableSyncs:{type:"boolean"},disableIdSyncs:{
type:"boolean"},idSyncIDCallResult:{},idSyncSSLUseAkamai:{type:"boolean"},isCoopSafe:{type:"boolean"},isIabContext:{type:"boolean"},isOptInStorageEnabled:{type:"boolean"},loadSSL:{type:"boolean"},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{type:"boolean"},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{type:"boolean"},sameSiteCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},useLocalStorage:{type:"boolean"},whitelistIframeDomains:{},whitelistParentDomain:{}},Z={getConfigNames:function(){return Object.keys(X)},getConfigs:function(){return X},normalizeConfig:function(e,t){return X[e]&&"boolean"===X[e].type?"function"!=typeof t?t:t():t}},ee=function(e){var t={};return e.on=function(e,n,r){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var a=t[e].push({callback:n,context:r})-1;return function(){t[e].splice(a,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter((function(e){if(e.callback!==n)return e})))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach((function(e){e.callback.apply(e.context,n)}))}},e.publish},te={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},ne={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",MEDIA_ANALYTICS:"mediaaa"},re=(t(y={},ne.AAM,565),t(y,ne.ECID,565),y),ae=(t(b={},ne.AAM,[1,10]),t(b,ne.ECID,[1,10]),b),ie=["videoaa","iabConsentHash"],oe=function(e){return Object.keys(e).map((function(t){return e[t]}))}(ne),se=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!u(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var r=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(r,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=(n=void 0===n?[]:n)instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var r=e.callbacks[t].shift();"function"==typeof r?r.apply(null,n):r instanceof Array&&r[1].apply(r[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!c(t))&&Object.keys(e.callbacks).forEach((function(n){var r=void 0!==t[n]?t[n]:"";e.execute(n,r)}),e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},ce=function(){},ue=function(e){var t=window.console;return!!t&&"function"==typeof t[e]},le=function(e,t,n){return n()?function(){if(ue(e)){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];console[e].apply(console,[t].concat(r))}}:ce},de=l,pe=function(){for(var e=[],t=0;t<256;t++){for(var n=t,r=0;r<8;r++)n=1&n?3988292384^n>>>1:n>>>1;e.push(n)}return function(t,n){t=unescape(encodeURIComponent(t)),n||(n=0),n^=-1;for(var r=0;r<t.length;r++){var a=255&(n^t.charCodeAt(r));n=n>>>8^e[a]}return(n^=-1)>>>0}}(),fe=new de("[ADOBE OPT-IN]"),he=function(t,n){return e(t)===n},me=function(e,t){return e instanceof Array?e:he(e,"string")?[e]:t||[]},ge=function(e){var t=Object.keys(e);return!!t.length&&t.every((function(t){return!0===e[t]}))},_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!e||be(e))&&me(e).every((function(e){return oe.indexOf(e)>-1||t&&ie.indexOf(e)>-1}))},ve=function(e,t){return e.reduce((function(e,n){return e[n]=t,e}),{})},ye=function(e){return JSON.parse(JSON.stringify(e))},be=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},ke=function(e){if(Ie(e))return e;try{return JSON.parse(e)}catch(e){return{}}},Se=function(e){return void 0===e||(Ie(e)?_e(Object.keys(e),!0):Ce(e))},Ce=function(e){try{var t=JSON.parse(e);return!!e&&he(e,"string")&&_e(Object.keys(t),!0)}catch(e){return!1}},Ie=function(e){return null!==e&&he(e,"object")&&!1===Array.isArray(e)},Ae=function(){},Ee=function(e){return he(e,"function")?e():e},we=function(e,t){Se(e)||fe.error("".concat(t))},Te=function(e){return Object.keys(e).map((function(t){return e[t]}))},Pe=function(e){return Te(e).filter((function(e,t,n){return n.indexOf(e)===t}))},Me=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,r=t.params,a=void 0===r?{}:r,i=t.callback,o=void 0===i?Ae:i;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),c=e[s[0]],u=s[1];if(!c||"function"!=typeof c[u])throw new Error("Make sure the plugin and API name exist.");var l=Object.assign(a,{callback:o});c[u].call(c,l)}catch(e){fe.error("[execute] Something went wrong: "+e.message)}}};p.prototype=Object.create(Error.prototype),p.prototype.constructor=p;var Oe="fetchPermissions",De="[OptIn#registerPlugin] Plugin is invalid.";f.Categories=ne,f.TimeoutError=p;var je=Object.freeze({OptIn:f,IabPlugin:_}),xe=function(e,t){e.publishDestinations=function(n){var r=arguments[1],a=arguments[2];try{a="function"==typeof a?a:n.callback}catch(e){a=function(){}}var i=t;if(i.readyToAttachIframePreliminary()){if("string"==typeof n){if(!n.length)return void a({error:"subdomain is not a populated string."});if(!(r instanceof Array&&r.length))return void a({error:"messages is not a populated array."});var o=!1;if(r.forEach((function(e){"string"==typeof e&&e.length&&(i.addMessage(e),o=!0)})),!o)return void a({error:"None of the messages are populated strings."})}else{if(!M.isObject(n))return void a({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void a({error:"config.subdomain is not a populated string."});var c=s.urlDestinations;if(!(c instanceof Array&&c.length))return void a({error:"config.urlDestinations is not a populated array."});var u=[];c.forEach((function(e){M.isObject(e)&&(e.hideReferrer?e.message&&i.addMessage(e.message):u.push(e))})),function e(){u.length&&setTimeout((function(){var t=new Image,n=u.shift();t.src=n.url,i.onPageDestinationsFired.push(n),e()}),100)}()}i.iframe?(a({message:"The destination publishing iframe is already attached and loaded."}),i.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(i.subdomain=n,i.doAttachIframe=!0,i.url=i.getUrl(),i.readyToAttachIframe()?(i.iframeLoadedCallbacks.push((function(e){a({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})})),i.attachIframe()):a({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):i.iframeLoadedCallbacks.push((function(e){a({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})}))}else a({error:"The destination publishing iframe is disabled in the Visitor library."})}},Ve=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var r,a,i=Math.pow,o=i(2,32),s="",c=[],u=8*t.length,l=e.h=e.h||[],d=e.k=e.k||[],p=d.length,f={},h=2;p<64;h++)if(!f[h]){for(r=0;r<313;r+=h)f[r]=h;l[p]=i(h,.5)*o|0,d[p++]=i(h,1/3)*o|0}for(t+="\x80";t.length%64-56;)t+="\0";for(r=0;r<t.length;r++){if((a=t.charCodeAt(r))>>8)return;c[r>>2]|=a<<(3-r)%4*8}for(c[c.length]=u/o|0,c[c.length]=u,a=0;a<c.length;){var m=c.slice(a,a+=16),g=l;for(l=l.slice(0,8),r=0;r<64;r++){var _=m[r-15],v=m[r-2],y=l[0],b=l[4],k=l[7]+(n(b,6)^n(b,11)^n(b,25))+(b&l[5]^~b&l[6])+d[r]+(m[r]=r<16?m[r]:m[r-16]+(n(_,7)^n(_,18)^_>>>3)+m[r-7]+(n(v,17)^n(v,19)^v>>>10)|0);(l=[k+((n(y,2)^n(y,13)^n(y,22))+(y&l[1]^y&l[2]^l[1]&l[2]))|0].concat(l))[4]=l[4]+k|0}for(r=0;r<8;r++)l[r]=l[r]+g[r]|0}for(r=0;r<8;r++)for(a=3;a+1;a--){var S=l[r]>>8*a&255;s+=(S<16?0:"")+S.toString(16)}return s},Ne=function(e,t){return"SHA-256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=Ve(e)),e},Re=function(e){return String(e).trim().toLowerCase()},Le=je.OptIn;M.defineGlobalNamespace(),window.adobe.OptInCategories=Le.Categories;var Fe=function(t,n,r){function a(){y._customerIDsHashChanged=!1}function i(e){var t=e;return function(e){var n=e||E.location.href;try{var r=y._extractParamFromUri(n,t);if(r)return te.parsePipeDelimetedKeyValues(r)}catch(e){}}}function o(e){function t(e,t,n){e&&e.match(K.VALID_VISITOR_ID_REGEX)&&(n===D&&(A=!0),t(e))}t(e[D],y.setMarketingCloudVisitorID,D),y._setFieldExpire(L,-1),t(e[N],y.setAnalyticsVisitorID)}function s(e){e=e||{},y._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",y._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},y._supplementalDataIDLast=e.supplementalDataIDLast||"",y._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function c(e){function t(e,t,n){return(n=n?n+="|":n)+(e+"=")+encodeURIComponent(t)}function n(e,n){var r=n[0],a=n[1];return null!=a&&a!==F&&(e=t(r,a,e)),e}return function(e){return(e=e?e+="|":e)+"TS="+te.getTimestampInSeconds()}(e.reduce(n,""))}function u(e){var t=e.minutesToLive,n="";return(y.idSyncDisableSyncs||y.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function l(){return!(!y.configs.doesOptInApply||b.optIn.isComplete&&d())}function d(){return y.configs.doesOptInApply&&y.configs.isIabContext?b.optIn.isApproved(b.optIn.Categories.ECID)&&I:b.optIn.isApproved(b.optIn.Categories.ECID)}function p(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["syncIdentity",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach((function(e){var t=e[0],n=2===e.length?e[1]:"",r=y[t];y[t]=function(e){return d()&&y.isAllowed()?r.apply(y,arguments):("function"==typeof e&&y._callCallback(e,[n]),n)}}))}function f(){var e=y._getAudienceManagerURLData(),t=e.url;return y._loadData(O,t,null,e)}function h(e,t){if(I=!0,e)throw new Error("[IAB plugin] : "+e);t&&t.gdprApplies&&(S=t.consentString,C=t.hasConsentChangedSinceLastCmpPull?1:0),f(),_()}function m(e,t){if(I=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(S=t.consentString,C=t.hasConsentChangedSinceLastCmpPull?1:0),y.init(),_()}function g(){b.optIn.isComplete&&(b.optIn.isApproved(b.optIn.Categories.ECID)?y.configs.isIabContext?b.optIn.execute({command:"iabPlugin.fetchConsentData",callback:m}):(y.init(),_()):y.configs.isIabContext?b.optIn.execute({command:"iabPlugin.fetchConsentData",callback:h}):(p(),_()))}function _(){b.optIn.off("complete",g)}if(!r||r.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var y=this,b=window.adobe,S="",C=0,I=!1,A=!1;y.version="5.5.0";var E=v,w=E.Visitor;w.version=y.version,w.AuthState=k.AUTH_STATE,w.OptOut=k.OPT_OUT,E.s_c_in||(E.s_c_il=[],E.s_c_in=0),y._c="Visitor",y._il=E.s_c_il,y._in=E.s_c_in,y._il[y._in]=y,E.s_c_in++,y._instanceType="regular",y._log={requests:[]},y.marketingCloudOrgID=t,y.cookieName="AMCV_"+t,y.sessionCookieName="AMCVS_"+t;var T={};n&&n.secureCookie&&n.sameSiteCookie&&(T={sameSite:n.sameSiteCookie,secure:n.secureCookie}),y.cookieDomain=y.useLocalStorage?"":G(null,T),y.loadSSL=!0,y.loadTimeout=3e4,y.CORSErrors=[],y.marketingCloudServer=y.audienceManagerServer="dpm.demdex.net",y.sdidParamExpiry=30;var P=null,O="MC",D="MCMID",j="MCIDTS",V="A",N="MCAID",R="AAM",L="MCAAMB",F="NONE",U=function(e){return!Object.prototype[e]},W=Y(y);y.FIELDS=k.FIELDS,y.cookieRead=function(e){return y.useLocalStorage?e===y.sessionCookieName?sessionStorage.getItem(e):localStorage.getItem(e):z.get(e)},y.cookieWrite=function(e,t,n){var r=""+t;if(y.useLocalStorage)return e===y.sessionCookieName?sessionStorage.setItem(e,r):localStorage.setItem(e,r);var a=y.cookieLifetime?(""+y.cookieLifetime).toUpperCase():"",i={expires:n,domain:y.cookieDomain,cookieLifetime:a};return y.configs&&y.configs.secureCookie&&"https:"===location.protocol&&(i.secure=!0),y.configs&&y.configs.sameSiteCookie&&"https:"===location.protocol&&(i.sameSite=k.SAME_SITE_VALUES[y.configs.sameSiteCookie.toUpperCase()]||"Lax"),z.set(e,r,i)},y.removeCookie=function(e){if(y.useLocalStorage)return e===y.sessionCookieName?sessionStorage.removeItem(e):localStorage.removeItem(e);var t={domain:y.cookieDomain};return y.configs&&y.configs.secureCookie&&"https:"===location.protocol&&(t.secure=!0),y.configs&&y.configs.sameSiteCookie&&"https:"===location.protocol&&(t.sameSite=k.SAME_SITE_VALUES[y.configs.sameSiteCookie.toUpperCase()]||"Lax"),z.remove(e,t)},y.resetState=function(e){e?y._mergeServerState(e):s()},y._isAllowedDone=!1,y._isAllowedFlag=!1,y.isAllowed=function(){return y._isAllowedDone||(y._isAllowedDone=!0,(y.cookieRead(y.cookieName)||y.cookieWrite(y.cookieName,"T",1))&&(y._isAllowedFlag=!0)),"T"===y.cookieRead(y.cookieName)&&y.removeCookie(y.cookieName),y._isAllowedFlag},y.setMarketingCloudVisitorID=function(e){y._setMarketingCloudFields(e)},y._use1stPartyMarketingCloudServer=!1,y.getMarketingCloudVisitorID=function(e,t){y.marketingCloudServer&&y.marketingCloudServer.indexOf(".demdex.net")<0&&(y._use1stPartyMarketingCloudServer=!0);var n=y._getAudienceManagerURLData("_setMarketingCloudFields"),r=n.url;return y._getRemoteField(D,r,e,t,n)};var X=function(e,t){var n={};y.getMarketingCloudVisitorID((function(){t.forEach((function(e){n[e]=y._getField(e,!0)})),-1!==t.indexOf("MCOPTOUT")?y.isOptedOut((function(t){n.MCOPTOUT=t,e(n)}),null,!0):e(n)}),!0)};y.getVisitorValues=function(e,t){var n={MCMID:{fn:y.getMarketingCloudVisitorID,args:[!0],context:y},MCOPTOUT:{fn:y.isOptedOut,args:[void 0,!0],context:y},MCAID:{fn:y.getAnalyticsVisitorID,args:[!0],context:y},MCAAMLH:{fn:y.getAudienceManagerLocationHint,args:[!0],context:y},MCAAMB:{fn:y.getAudienceManagerBlob,args:[!0],context:y}},r=t&&t.length?M.pluck(n,t):n;t&&-1===t.indexOf("MCAID")?X(e,t):H(r,e)},y._currentCustomerIDs={},y._customerIDsHashChanged=!1,y._newCustomerIDsHash="",y.setCustomerIDs=function(t,n){if(!y.isOptedOut()&&t){if(!M.isObject(t)||M.isObjectEmpty(t))return!1;var r,i,o,s;for(r in y._readVisitor(),t)if(U(r)&&(y._currentCustomerIDs.dataSources=y._currentCustomerIDs.dataSources||{},n=(i=t[r]).hasOwnProperty("hashType")?i.hashType:n,i))if("object"===e(i)){var c={};if(i.id){if(n){if(!(s=Ne(Re(i.id),n)))return;i.id=s,c.hashType=n}c.id=i.id}null!=i.authState&&(c.authState=i.authState),y._currentCustomerIDs.dataSources[r]=c}else if(n){if(!(s=Ne(Re(i),n)))return;y._currentCustomerIDs.dataSources[r]={id:s,hashType:n}}else y._currentCustomerIDs.dataSources[r]={id:i};var u=y.getCustomerIDs(!0),l=y._getField("MCCIDH"),d="";for(o in l||(l=0),u){var p=u[o];if(!M.isObjectEmpty(p))for(r in p)U(r)&&(d+=(d?"|":"")+r+"|"+((i=p[r]).id?i.id:"")+(i.authState?i.authState:""))}y._newCustomerIDsHash=String(y._hash(d)),y._newCustomerIDsHash!==l&&(y._customerIDsHashChanged=!0,y._mapCustomerIDs(a))}},y.syncIdentity=function(t,n){if(!y.isOptedOut()&&t){if(!M.isObject(t)||M.isObjectEmpty(t))return!1;var r,i,o,s,c;for(r in y._readVisitor(),t)if(U(r)&&(y._currentCustomerIDs.nameSpaces=y._currentCustomerIDs.nameSpaces||{},n=(i=t[r]).hasOwnProperty("hashType")?i.hashType:n,i&&"object"===e(i))){var u={};if(i.id){if(n){if(!(o=Ne(Re(i.id),n)))return;i.id=o,u.hashType=n}u.id=i.id}null!=i.authState&&(u.authState=i.authState),i.dataSource&&(y._currentCustomerIDs.dataSources=y._currentCustomerIDs.dataSources||{},s=i.dataSource,y._currentCustomerIDs.dataSources[s]=u),y._currentCustomerIDs.nameSpaces[r]=u}var l=y.getCustomerIDs(!0),d=y._getField("MCCIDH"),p="";for(c in d||(d="0"),l){var f=l[c];if(!M.isObjectEmpty(f))for(r in f)U(r)&&(p+=(p?"|":"")+r+"|"+((i=f[r]).id?i.id:"")+(i.authState?i.authState:""))}y._newCustomerIDsHash=String(y._hash(p)),y._newCustomerIDsHash!==d&&(y._customerIDsHashChanged=!0,y._mapCustomerIDs(a))}},y.getCustomerIDs=function(e){y._readVisitor();var t,n,r={dataSources:{},nameSpaces:{}},a=y._currentCustomerIDs.dataSources;for(t in a)U(t)&&(n=a[t]).id&&(r.dataSources[t]||(r.dataSources[t]={}),r.dataSources[t].id=n.id,null!=n.authState?r.dataSources[t].authState=n.authState:r.dataSources[t].authState=w.AuthState.UNKNOWN,n.hashType&&(r.dataSources[t].hashType=n.hashType));var i=y._currentCustomerIDs.nameSpaces;for(t in i)U(t)&&(n=i[t]).id&&(r.nameSpaces[t]||(r.nameSpaces[t]={}),r.nameSpaces[t].id=n.id,null!=n.authState?r.nameSpaces[t].authState=n.authState:r.nameSpaces[t].authState=w.AuthState.UNKNOWN,n.hashType&&(r.nameSpaces[t].hashType=n.hashType));return e?r:r.dataSources},y.setAnalyticsVisitorID=function(e){y._setAnalyticsFields(e)},y.getAnalyticsVisitorID=function(e,t,n){if(!te.isTrackingServerPopulated()&&!n)return y._callCallback(e,[""]),"";var r="";if(n||(r=y.getMarketingCloudVisitorID((function(){y.getAnalyticsVisitorID(e,!0)}))),r||n){var a=n?y.marketingCloudServer:y.trackingServer,i="";y.loadSSL&&(n?y.marketingCloudServerSecure&&(a=y.marketingCloudServerSecure):y.trackingServerSecure&&(a=y.trackingServerSecure));var o={};if(a){var s="http"+(y.loadSSL?"s":"")+"://"+a+"/id",c=y.configs.cookieLifetime,u="d_visid_ver="+y.version+"&mcorgid="+encodeURIComponent(y.marketingCloudOrgID)+(r?"&mid="+encodeURIComponent(r):"")+(c?"&cl="+encodeURIComponent(c):"")+(y.idSyncDisable3rdPartySyncing||y.disableThirdPartyCookies?"&d_coppa=true":""),l=["s_c_il",y._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];i=s+"?"+u+"&callback=s_c_il%5B"+y._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+u,o.callback=l}return o.url=i,y._getRemoteField(n?D:N,i,e,t,o)}return""},y.getAudienceManagerLocationHint=function(e,t){if(y.getMarketingCloudVisitorID((function(){y.getAudienceManagerLocationHint(e,!0)}))){var n=y._getField(N);if(!n&&te.isTrackingServerPopulated()&&(n=y.getAnalyticsVisitorID((function(){y.getAudienceManagerLocationHint(e,!0)}))),n||!te.isTrackingServerPopulated()){var r=y._getAudienceManagerURLData(),a=r.url;return y._getRemoteField("MCAAMLH",a,e,t,r)}}return""},y.getLocationHint=y.getAudienceManagerLocationHint,y.getAudienceManagerBlob=function(e,t){if(y.getMarketingCloudVisitorID((function(){y.getAudienceManagerBlob(e,!0)}))){var n=y._getField(N);if(!n&&te.isTrackingServerPopulated()&&(n=y.getAnalyticsVisitorID((function(){y.getAudienceManagerBlob(e,!0)}))),n||!te.isTrackingServerPopulated()){var r=y._getAudienceManagerURLData(),a=r.url;return y._customerIDsHashChanged&&y._setFieldExpire(L,-1),y._getRemoteField(L,a,e,t,r)}}return""},y._supplementalDataIDCurrent="",y._supplementalDataIDCurrentConsumed={},y._supplementalDataIDLast="",y._supplementalDataIDLastConsumed={},y.getSupplementalDataID=function(e,t){y._supplementalDataIDCurrent||t||(y._supplementalDataIDCurrent=y._generateID(1));var n=y._supplementalDataIDCurrent;return y._supplementalDataIDLast&&!y._supplementalDataIDLastConsumed[e]?(n=y._supplementalDataIDLast,y._supplementalDataIDLastConsumed[e]=!0):n&&(y._supplementalDataIDCurrentConsumed[e]&&(y._supplementalDataIDLast=y._supplementalDataIDCurrent,y._supplementalDataIDLastConsumed=y._supplementalDataIDCurrentConsumed,y._supplementalDataIDCurrent=n=t?"":y._generateID(1),y._supplementalDataIDCurrentConsumed={}),n&&(y._supplementalDataIDCurrentConsumed[e]=!0)),n};var Z=!1;y._liberatedOptOut=null,y.getOptOut=function(e,t){var n=y._getAudienceManagerURLData("_setMarketingCloudFields"),r=n.url;if(d())return y._getRemoteField("MCOPTOUT",r,e,t,n);if(y._registerCallback("liberatedOptOut",e),null!==y._liberatedOptOut)return y._callAllCallbacks("liberatedOptOut",[y._liberatedOptOut]),Z=!1,y._liberatedOptOut;if(Z)return null;Z=!0;var a="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/\.demdex\.net\/id\?/,".demdex.net/optOutStatus?"),n.callback=[a],v[a]=function(e){if(e===Object(e)){var t,n,r=M.parseOptOut(e,t,F);t=r.optOut,n=1e3*r.d_ottl,y._liberatedOptOut=t,setTimeout((function(){y._liberatedOptOut=null}),n)}y._callAllCallbacks("liberatedOptOut",[t]),Z=!1},W.fireCORS(n),null},y.isOptedOut=function(e,t,n){t||(t=w.OptOut.GLOBAL);var r=y.getOptOut((function(n){var r=n===w.OptOut.GLOBAL||n.indexOf(t)>=0;y._callCallback(e,[r])}),n);return r?r===w.OptOut.GLOBAL||r.indexOf(t)>=0:null};var ee={subscribed:!1,callbacks:[]};y.onReceiveEcid=function(e){if(d())return y.getMarketingCloudVisitorID(e,!0);ee.subscribed=!0,e&&"function"==typeof e&&ee.callbacks.push(e)},y._fields=null,y._fieldsExpired=null,y._hash=function(e){var t,n=0;if(e)for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n&=n;return n},y._generateID=Q,y._generateLocalMID=function(){var e=y._generateID(0);return ae.isClientSideMarketingCloudVisitorID=!0,e},y._callbackList=null,y._callCallback=function(e,t){try{"function"==typeof e?e.apply(E,t):e[1].apply(e[0],t)}catch(e){}},y._registerCallback=function(e,t){t&&(null==y._callbackList&&(y._callbackList={}),null==y._callbackList[e]&&(y._callbackList[e]=[]),y._callbackList[e].push(t))},y._callAllCallbacks=function(e,t){if(null!=y._callbackList){var n=y._callbackList[e];if(n)for(;n.length>0;)y._callCallback(n.shift(),t)}},y._addQuerystringParam=function(e,t,n,r){var a=encodeURIComponent(t)+"="+encodeURIComponent(n),i=te.parseHash(e),o=te.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+a+i;var s=o.split("?"),c=s[0]+"?",u=s[1];return c+te.addQueryParamAtLocation(u,a,r)+i},y._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)").exec(e);if(n&&n.length)return decodeURIComponent(n[1])},y._parseAdobeMcFromUrl=i(K.ADOBE_MC),y._parseAdobeMcSdidFromUrl=i(K.ADOBE_MC_SDID),y._attemptToPopulateSdidFromUrl=function(e){var n=y._parseAdobeMcSdidFromUrl(e),r=1e9;n&&n.TS&&(r=te.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&r<y.sdidParamExpiry&&(y._supplementalDataIDCurrent=n.SDID,y._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},y._attemptToPopulateIdsFromUrl=function(){var e=y._parseAdobeMcFromUrl();if(e&&e.TS){var n=te.getTimestampInSeconds()-e.TS;if(Math.floor(n/60)>K.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;o(e)}},y._mergeServerState=function(e){if(e)try{if((e=function(e){return te.isObject(e)?e:JSON.parse(e)}(e))[y.marketingCloudOrgID]){var t=e[y.marketingCloudOrgID];!function(e){te.isObject(e)&&y.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},y._timeout=null,y._loadData=function(e,t,n,r){t=y._addQuerystringParam(t,"d_fieldgroup",e,1),r.url=y._addQuerystringParam(r.url,"d_fieldgroup",e,1),r.corsUrl=y._addQuerystringParam(r.corsUrl,"d_fieldgroup",e,1),ae.fieldGroupObj[e]=!0,r===Object(r)&&r.corsUrl&&"XMLHttpRequest"===W.corsMetadata.corsType&&W.fireCORS(r,n,e)},y._clearTimeout=function(e){null!=y._timeout&&y._timeout[e]&&(clearTimeout(y._timeout[e]),y._timeout[e]=0)},y._settingsDigest=0,y._getSettingsDigest=function(){if(!y._settingsDigest){var e=y.version;y.audienceManagerServer&&(e+="|"+y.audienceManagerServer),y.audienceManagerServerSecure&&(e+="|"+y.audienceManagerServerSecure),y._settingsDigest=y._hash(e)}return y._settingsDigest},y._readVisitorDone=!1,y._readVisitor=function(){if(!y._readVisitorDone){y._readVisitorDone=!0;var e,t,n,r,a,i,o=y._getSettingsDigest(),s=!1,c=y.cookieRead(y.cookieName),u=new Date;if(c||A||y.discardTrackingServerECID||(c=y.cookieRead(K.FIRST_PARTY_SERVER_COOKIE)),null==y._fields&&(y._fields={}),c&&"T"!==c)for((c=c.split("|"))[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!==o&&(s=!0),c.shift()),c.length%2==1&&c.pop(),e=0;e<c.length;e+=2)n=(t=c[e].split("-"))[0],r=c[e+1],t.length>1?(a=parseInt(t[1],10),i=t[1].indexOf("s")>0):(a=0,i=!1),s&&("MCCIDH"===n&&(r=""),a>0&&(a=u.getTime()/1e3-60)),n&&r&&(y._setField(n,r,1),a>0&&(y._fields["expire"+n]=a+(i?"s":""),(u.getTime()>=1e3*a||i&&!y.cookieRead(y.sessionCookieName))&&(y._fieldsExpired||(y._fieldsExpired={}),y._fieldsExpired[n]=!0)));!y._getField(N)&&te.isTrackingServerPopulated()&&(c=y.cookieRead("s_vi"))&&(c=c.split("|")).length>1&&c[0].indexOf("v1")>=0&&((e=(r=c[1]).indexOf("["))>=0&&(r=r.substring(0,e)),r&&r.match(K.VALID_VISITOR_ID_REGEX)&&y._setField(N,r))}},y._appendVersionTo=function(e){var t="vVersion|"+y.version,n=e?y._getCookieVersion(e):null;return n?q.areVersionsDifferent(n,y.version)&&(e=e.replace(K.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},y._writeVisitor=function(){var e,t,n=y._getSettingsDigest();for(e in y._fields)U(e)&&y._fields[e]&&"expire"!==e.substring(0,6)&&(t=y._fields[e],n+=(n?"|":"")+e+(y._fields["expire"+e]?"-"+y._fields["expire"+e]:"")+"|"+t);n=y._appendVersionTo(n),y.cookieWrite(y.cookieName,n,1)},y._getField=function(e,t){return null==y._fields||!t&&y._fieldsExpired&&y._fieldsExpired[e]?null:y._fields[e]},y._setField=function(e,t,n){null==y._fields&&(y._fields={}),y._fields[e]=t,n||y._writeVisitor()},y._getFieldList=function(e,t){var n=y._getField(e,t);return n?n.split("*"):null},y._setFieldList=function(e,t,n){y._setField(e,t?t.join("*"):"",n)},y._getFieldMap=function(e,t){var n=y._getFieldList(e,t);if(n){var r,a={};for(r=0;r<n.length;r+=2)a[n[r]]=n[r+1];return a}return null},y._setFieldMap=function(e,t,n){var r,a=null;if(t)for(r in a=[],t)U(r)&&(a.push(r),a.push(t[r]));y._setFieldList(e,a,n)},y._setFieldExpire=function(e,t,n){var r=new Date;r.setTime(r.getTime()+1e3*t),null==y._fields&&(y._fields={}),y._fields["expire"+e]=Math.floor(r.getTime()/1e3)+(n?"s":""),t<0?(y._fieldsExpired||(y._fieldsExpired={}),y._fieldsExpired[e]=!0):y._fieldsExpired&&(y._fieldsExpired[e]=!1),n&&(y.cookieRead(y.sessionCookieName)||y.cookieWrite(y.sessionCookieName,"1"))},y._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=F),t&&(t===F||t.match(K.VALID_VISITOR_ID_REGEX))||(t="")),t},y._setFields=function(t,n){if(y._clearTimeout(t),null!=y._loading&&(y._loading[t]=!1),ae.fieldGroupObj[t]&&ae.setState(t,!1),t===O){!0!==ae.isClientSideMarketingCloudVisitorID&&(ae.isClientSideMarketingCloudVisitorID=!1);var r=y._getField(D);if(!r||y.overwriteCrossDomainMCIDAndAID){if(!(r="object"===e(n)&&n.mid?n.mid:y._findVisitorID(n))){if(y._use1stPartyMarketingCloudServer&&!y.tried1stPartyMarketingCloudServer)return y.tried1stPartyMarketingCloudServer=!0,void y.getAnalyticsVisitorID(null,!1,!0);r=y._generateLocalMID()}y._setField(D,r)}r&&r!==F||(r=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&y._setFields(R,n),y._use1stPartyMarketingCloudServer&&n.mid&&y._setFields(V,{id:n.id})),y._callAllCallbacks(D,[r])}if(t===R&&"object"===e(n)){var a=604800;null!=n.id_sync_ttl&&n.id_sync_ttl&&(a=parseInt(n.id_sync_ttl,10));var i=ne.getRegionAndCheckIfChanged(n,a);y._callAllCallbacks("MCAAMLH",[i]);var o=y._getField(L);(n.d_blob||n.blob)&&((o=n.d_blob)||(o=n.blob),y._setFieldExpire(L,a),y._setField(L,o)),o||(o=""),y._callAllCallbacks(L,[o]),!n.error_msg&&y._newCustomerIDsHash&&y._setField("MCCIDH",y._newCustomerIDsHash)}if(t===V){var s=y._getField(N);s&&!y.overwriteCrossDomainMCIDAndAID||((s=y._findVisitorID(n))?s!==F&&y._setFieldExpire(L,-1):s=F,y._setField(N,s)),s&&s!==F||(s=""),y._callAllCallbacks(N,[s])}if(y.idSyncDisableSyncs||y.disableIdSyncs)ne.idCallNotProcesssed=!0;else{ne.idCallNotProcesssed=!1;var c={};c.ibs=n.ibs,c.subdomain=n.subdomain,ne.processIDCallData(c)}if(n===Object(n)){var u,l;d()&&y.isAllowed()&&(u=y._getField("MCOPTOUT"));var p=M.parseOptOut(n,u,F);u=p.optOut,l=p.d_ottl,y._setFieldExpire("MCOPTOUT",l,!0),y._setField("MCOPTOUT",u),y._callAllCallbacks("MCOPTOUT",[u])}},y._loading=null,y._getRemoteField=function(e,t,n,r,a){var i,o="",s=te.isFirstPartyAnalyticsVisitorIDCall(e),c={MCAAMLH:!0,MCAAMB:!0};if(d()&&y.isAllowed())if(y._readVisitor(),!(!(o=y._getField(e,!0===c[e]))||y._fieldsExpired&&y._fieldsExpired[e])||y.disableThirdPartyCalls&&!s)o||(e===D?(y._registerCallback(e,n),o=y._generateLocalMID(),y.setMarketingCloudVisitorID(o)):e===N?(y._registerCallback(e,n),o="",y.setAnalyticsVisitorID(o)):(o="",r=!0));else if(e===D||"MCOPTOUT"===e?i=O:"MCAAMLH"===e||e===L?i=R:e===N&&(i=V),i)return!t||null!=y._loading&&y._loading[i]||(null==y._loading&&(y._loading={}),y._loading[i]=!0,i===R&&(C=0),y._loadData(i,t,(function(t){if(!y._getField(e)){t&&ae.setState(i,!0);var n="";e===D?n=y._generateLocalMID():i===R&&(n={error_msg:"timeout"}),y._setFields(i,n)}}),a)),y._registerCallback(e,n),o||(t||y._setFields(i,{id:F}),"");return e!==D&&e!==N||o!==F||(o="",r=!0),n&&r&&y._callCallback(n,[o]),e===D&&ee.subscribed&&(ee.callbacks&&ee.callbacks.length&&ee.callbacks.forEach((function(e){y._callCallback(e,[o])})),ee.subscribed=!1,ee.callbacks.length=0),o},y._setMarketingCloudFields=function(e){y._readVisitor(),y._setFields(O,e)},y._mapCustomerIDs=function(e){y.getAudienceManagerBlob(e,!0)},y._setAnalyticsFields=function(e){y._readVisitor(),y._setFields(V,e)},y._setAudienceManagerFields=function(e){y._readVisitor(),y._setFields(R,e)},y._getAudienceManagerURLData=function(e){var t=y.audienceManagerServer,n="",r=y._getField(D),a=y._getField(L,!0),i=y._getField(N),o=i&&i!==F?"&d_cid_ic=AVID%01"+encodeURIComponent(i):"";if(y.loadSSL&&y.audienceManagerServerSecure&&(t=y.audienceManagerServerSecure),t){var s,c,u,l=y.getCustomerIDs(!0);if(l)for(c in l){var d=l[c];if(!M.isObjectEmpty(d)){var p="nameSpaces"===c?"&d_cid_ns=":"&d_cid_ic=";for(s in d)U(s)&&(u=d[s],o+=p+encodeURIComponent(s)+"%01"+encodeURIComponent(u.id?u.id:"")+(u.authState?"%01"+u.authState:""))}}e||(e="_setAudienceManagerFields");var f="http"+(y.loadSSL?"s":"")+"://"+t+"/id",h="d_visid_ver="+y.version+(S&&-1!==f.indexOf("demdex.net")?"&gdpr=1&gdpr_consent="+S:"")+(C&&-1!==f.indexOf("demdex.net")?"&d_cf="+C:"")+"&d_rtbd=json&d_ver=2"+(!r&&y._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(y.marketingCloudOrgID)+"&d_nsid="+(y.idSyncContainerID||0)+(r?"&d_mid="+encodeURIComponent(r):"")+(y.idSyncDisable3rdPartySyncing||y.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===P?"&d_coop_safe=1":!1===P?"&d_coop_unsafe=1":"")+(a?"&d_blob="+encodeURIComponent(a):"")+o,m=["s_c_il",y._in,e];return{url:n=f+"?"+h+"&d_cb=s_c_il%5B"+y._in+"%5D."+e,corsUrl:f+"?"+h,callback:m}}return{url:n}},y.appendVisitorIDsTo=function(e){try{var t=[[D,y._getField(D)],[N,y._getField(N)],["MCORGID",y.marketingCloudOrgID]];return y._addQuerystringParam(e,K.ADOBE_MC,c(t))}catch(t){return e}},y.appendSupplementalDataIDTo=function(e,t){if(!(t=t||y.getSupplementalDataID(te.generateRandomString(),!0)))return e;try{var n=c([["SDID",t],["MCORGID",y.marketingCloudOrgID]]);return y._addQuerystringParam(e,K.ADOBE_MC_SDID,n)}catch(t){return e}};var te={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var r=e.split("&");return n=null!=n?n:r.length,r.splice(n,0,t),r.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){return e===N&&(t||(t=y.trackingServer),n||(n=y.trackingServerSecure),!("string"!=typeof(r=y.loadSSL?n:t)||!r.length)&&r.indexOf("2o7.net")<0&&r.indexOf("omtrdc.net")<0);var r},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){z.remove(e,{domain:y.cookieDomain})},isTrackingServerPopulated:function(){return!!y.trackingServer||!!y.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};y._helpers=te;var ne=J(y,w);y._destinationPublishing=ne,y.timeoutMetricsLog=[];var re,ae={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case O:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case V:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case R:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};y.isClientSideMarketingCloudVisitorID=function(){return ae.isClientSideMarketingCloudVisitorID},y.MCIDCallTimedOut=function(){return ae.MCIDCallTimedOut},y.AnalyticsIDCallTimedOut=function(){return ae.AnalyticsIDCallTimedOut},y.AAMIDCallTimedOut=function(){return ae.AAMIDCallTimedOut},
y.idSyncGetOnPageSyncInfo=function(){return y._readVisitor(),y._getField("MCSYNCSOP")},y.idSyncByURL=function(e){if(!y.isOptedOut()){var t=u(e||{});if(t.error)return t.error;var n,r,a=e.url,i=encodeURIComponent,o=ne;return a=a.replace(/^https:/,"").replace(/^http:/,""),n=M.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),r=["ibs",i(e.dpid),"img",i(a),t.ttl,"",n],o.addMessage(r.join("|")),o.requestToProcess(),"Successfully queued"}},y.idSyncByDataSource=function(e){if(!y.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,y.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},xe(y,ne),y._getCookieVersion=function(e){e=e||y.cookieRead(y.cookieName);var t=K.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},y._resetAmcvCookie=function(e){var t=y._getCookieVersion();t&&!q.isLessThan(t,e)||y.removeCookie(y.cookieName)},y.setAsCoopSafe=function(){P=!0},y.setAsCoopUnsafe=function(){P=!1},function(){if(y.configs=Object.create(null),te.isObject(n))for(var e in n)U(e)&&(y[e]=n[e],y.configs[e]=n[e])}(),p(),y.init=function(){l()&&(b.optIn.fetchPermissions(g,!0),!b.optIn.isApproved(b.optIn.Categories.ECID))||re||(re=!0,function(){if(te.isObject(n)){y.idSyncContainerID=y.idSyncContainerID||0,P="boolean"==typeof y.isCoopSafe?y.isCoopSafe:te.parseBoolean(y.isCoopSafe),y.resetBeforeVersion&&y._resetAmcvCookie(y.resetBeforeVersion),y._attemptToPopulateIdsFromUrl(),y._attemptToPopulateSdidFromUrl(),y._readVisitor();var e=y._getField(j),t=Math.ceil((new Date).getTime()/K.MILLIS_PER_DAY);y.idSyncDisableSyncs||y.disableIdSyncs||!ne.canMakeSyncIDCall(e,t)||(y._setFieldExpire(L,-1),y._setField(j,t)),y.getMarketingCloudVisitorID(),y.getAudienceManagerLocationHint(),y.getAudienceManagerBlob(),y._mergeServerState(y.serverState)}else y._attemptToPopulateIdsFromUrl(),y._attemptToPopulateSdidFromUrl()}(),function(){if(!y.idSyncDisableSyncs&&!y.disableIdSyncs){ne.checkDPIframeSrc();var e=function(){var e=ne;e.readyToAttachIframe()&&e.attachIframe()};E.addEventListener("load",(function(){w.windowLoaded=!0,e()}));try{$.receiveMessage((function(e){ne.receiveMessage(e.data)}),ne.iframeHost)}catch(e){}}}(),y.whitelistIframeDomains&&K.POST_MESSAGE_ENABLED&&(y.whitelistIframeDomains=y.whitelistIframeDomains instanceof Array?y.whitelistIframeDomains:[y.whitelistIframeDomains],y.whitelistIframeDomains.forEach((function(e){var n=new x(t,e),r=B(y,n);$.receiveMessage(r,e)}))))}};Fe.config=Z,v.Visitor=Fe;var Ue=Fe,Be=function(e){if(M.isObject(e))return Object.keys(e).filter((function(t){return""!==e[t]&&Z.getConfigs()[t]})).reduce((function(t,n){var r=Z.normalizeConfig(n,e[n]),a=M.normalizeBoolean(r);return t[n]=a,t}),Object.create(null))},He=je.OptIn,ze=je.IabPlugin;Ue.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=v.s_c_il;if(t)for(var n=0;n<t.length;n++){var r=t[n];if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e)return r}}();if(n)return n;var r=Be(t)||{};!function(e){v.adobe.optIn=v.adobe.optIn||function(){var t=M.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext","sameSiteCookie","secureCookie"]),n=e.optInCookieDomain||e.cookieDomain;n=(n=n||G())===window.location.hostname?"":n,t.optInCookieDomain=n;var r=new He(t,{cookies:z});if(t.isIabContext&&t.doesOptInApply){var a=new ze;r.registerPlugin(a)}return r}()}(r||{});var a=e.split("").reverse().join(""),i=new Ue(e,null,a);r.cookieDomain&&(i.cookieDomain=r.cookieDomain),r.sameSiteCookie&&r.secureCookie&&(i.configs={sameSiteCookie:r.sameSiteCookie,secureCookie:r.secureCookie}),v.s_c_il.splice(--v.s_c_in,1);var o=M.getIeVersion();if("number"==typeof o&&o<10)return i._helpers.replaceMethodsWithFunction(i,(function(){}));var s=function(){try{return v.self!==v.parent}catch(e){return!0}}()&&(!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e.removeCookie("TEST_AMCV_COOKIE"),!0)}(i)||M.isFirefox()&&!function(t){var n="AMCV_"+e;return!!t.cookieRead(n)}(i)&&r.whitelistParentDomain)&&v.parent?new N(e,r,i,v.parent):new Ue(e,r,a);return i=null,s.init(),s},function(){function e(){Ue.windowLoaded=!0}v.addEventListener?v.addEventListener("load",e):v.attachEvent&&v.attachEvent("onload",e),Ue.codeLoadEnd=(new Date).getTime()}()}(),Visitor)}},"adobe-mcid/src/view/utils/timeUnits.js":{script:function(e){var t={Hours:3600,Days:86400,Weeks:604800,Months:2592e3,Years:31536e3};e.exports=t}}}},"adobe-analytics":{displayName:"Adobe Analytics",hostedLibFilesBaseUrl:"https://apps.nhk.or.jp/assets/dtm//f085c0790456/610bd2b69f10/5b9f2d6a97ed/hostedLibFiles/EPef068a8d6dd34a43866d9a80cc98baab/",settings:{orgId:"02C51F6A550AFE4E0A4C98A7@AdobeOrg",customSetup:{source:function(e){e.linkTrackVars="",e.linkTrackEvents="None",e.ssl=!0,e.useForcedLinkTracking=!0,e.useragent_lower=window.navigator.userAgent.toLowerCase(),-1!=e.useragent_lower.indexOf("firefox")&&(e.useForcedLinkTracking=!1),e.forcedLinkTrackingTimeout=500,e.usePlugins=!0,e.doPlugins=function(e){if(_satellite.getVar("_tc_isFirst")&&_satellite.getVar("_tc_allowTracking")){var t=function(){try{return top.location.href}catch(e){}}();if(/(^|\?|&)oout=.{4}1(&|$)/.test(location.search)||_satellite.cookie.get("AAoptout")||/(^|\?|&)oout=.{4}1(&|$)/.test(document.referrer)||/(^|\?|&)oout=.{4}1(&|$)/.test(t))e.abort=!0;else{if("video"!=e.pev3||e.contextData["a.media.segment"]||e.contextData["a.media.segmentNum"]||void 0===e.contextData["a.media.friendlyName"]||!e.contextData["a.media.friendlyName"]||(e.linkTrackVars=""),e._tc_sc_preFunc(),"function"==typeof _tc_sc_preFunc&&_tc_sc_preFunc(e),"undefined"!=typeof _tc_sc_preFuncs)for(var n=0,r=_tc_sc_preFuncs.length;n<r;n++)try{_tc_sc_preFuncs[n](e)}catch(e){}if(e.campaign=e.Util.getQueryParam("cid"),e.pageName=e.getPageName(),e.pageName=e.getStrInMaxBytes(e.pageName,100),e.channel=location.hostname.split(".")[0],e.eVar39=e.channel,e.server=location.hostname,e.eVar40=e.server,window===window.parent&&(e.getPercentPageViewed_nol(e.pageName),e._ppvPreviousPage?e.prop2=e._ppvPreviousPage+","+e._ppvHighestPercentViewed:e.prop2=""),e.prop3=e.getLoadTime(),e.pageName&&(e.pageName.split(":")[0]&&(e.prop4=e.eVar4=e.pageName.split(":")[0]),e.pageName.split(":")[1]?e.prop5=e.eVar5=e.pageName.split(":")[0]+":"+e.pageName.split(":")[1]:e.prop5=e.eVar5=e.eVar4,e.pageName.split(":")[1]&&e.pageName.split(":")[2]?e.prop6=e.eVar6=e.pageName.split(":")[0]+":"+e.pageName.split(":")[1]+":"+e.pageName.split(":")[2]:e.pageName.split(":")[1]?e.prop6=e.eVar6=e.eVar5:e.prop6=e.eVar6=e.eVar4,e.pageName.split(":")[1]&&e.pageName.split(":")[2]&&e.pageName.split(":")[3]?e.prop15=e.eVar15=e.pageName.split(":")[0]+":"+e.pageName.split(":")[1]+":"+e.pageName.split(":")[2]+":"+e.pageName.split(":")[3]:e.pageName.split(":")[1]&&e.pageName.split(":")[2]?e.prop15=e.eVar15=e.eVar6:e.pageName.split(":")[1]?e.prop15=e.eVar15=e.eVar5:e.prop15=e.eVar15=e.eVar4),e.prop4){var a=new Object;e.categoryViewed(e.prop4,"s_catvwd_nol",365,a),0!=a.cats&&(e.eVar7=a.cats,e.eVar8=a.catList)}e.eVar76=document.title,e.prop7=e.eVar76,e.events=e.apl(e.events,"event3",",",2),e.eVar1=e.Util.getQueryParam("qt"),e.eVar1&&(e.eVar1=e.eVar1.replace(/[\s|\r|\n]+/g," "),e.prop1="D=v1",e.events=e.apl(e.events,"event1",",",2)),e.eVar13=e.getNewRepeat(365,"s_nr_nol"),e.eVar14=e.getTimeParting("s","+9"),"12:"==e.eVar14.slice(0,3)&&e.eVar14.match(/ AM\|| PM\|/)&&(e.eVar14="0"+e.eVar14.slice(2)),e.eVar77=location.href,e.prop31=e.eVar77,e.eVar78=location.protocol+"//"+location.host+location.pathname,e.prop32=e.eVar78,e.prop33=document.referrer,e.prop36=e.version,e.prop37=e.n_version=_satellite.getVar("am.js_ver")||"v5.0.1.0";var i=e.previous_dir1();if(i&&"index"!=e.prop4&&e.prop4!=i&&(e.eVar10=i,e.events=e.apl(e.events,"event5",",",2)),0===("/"==location.pathname.slice(0,1)?location.pathname:"/"+location.pathname).indexOf("/news/"))try{!e.prop56&&document.body.className&&(e.prop56=e.eVar56=document.body.className)}catch(e){}if(/:\/\/[^/]+\.nhk\.or\.jp\//.test(document.referrer)&&(e.eVar80=document.referrer),"e"===e.linkType&&(e.linkTrackVars="prop36,prop37",e.linkTrackEvents="None",(e.linkURL.match(/\.nhk-ondemand\.jp\//)||e.linkURL.match(/:\/\/nhk\.jp\/(P2067|nod)/))&&(e.events="event6",e.linkTrackVars+=",events",e.linkTrackEvents="event6"),/(:\/\/plus\.nhk\.jp)|(:\/\/nhk.jp\/P6310)/.test(e.linkURL)&&(e.events="event10",e.linkTrackVars+=",events",e.linkTrackEvents="event10"),e.set_evars_for_exitlink()),e._tc_sc_postFunc(),"function"==typeof _tc_sc_postFunc&&_tc_sc_postFunc(e),"undefined"!=typeof _tc_sc_postFuncs)for(n=0,r=_tc_sc_postFuncs.length;n<r;n++)try{_tc_sc_postFuncs[n](e)}catch(e){}for(var o=1;o<=75;o++)void 0!==e["prop"+o]&&""!=e["prop"+o]&&null!=e["prop"+o]&&"N/A"!=e["prop"+o]&&(e["prop"+o]=e.getStrInMaxBytes(e["prop"+o],100));for(var s=1;s<=75;s++)void 0!==e["eVar"+s]&&""!=e["eVar"+s]&&null!=e["eVar"+s]&&"N/A"!=e["eVar"+s]&&(e["eVar"+s]=e.getStrInMaxBytes(e["eVar"+s],255));"o"!==e.linkType&&"e"!==e.linkType&&"d"!==e.linkType||e.setRealValue_eVar(e,"D")}}else e.abort=!0},e.set_evars_for_exitlink=function(){var e=this,t=["eVar4","eVar5","eVar6","eVar7","eVar8","eVar9","eVar13","eVar14","eVar15","eVar39","eVar40","eVar41","eVar42","eVar43","eVar44","eVar45","eVar46","eVar47","eVar48"];e.eVar9||(e.eVar9="D=pageName");for(var n=t.length,r=0;r<n;r++)void 0!==e[t[r]]&&(e[t[r]]=e.convert_dynamic_to_value(e[t[r]]),e.linkTrackVars&&"None"!=e.linkTrackVars?e.linkTrackVars=e.apl(e.linkTrackVars,t[r],",",1):e.linkTrackVars=t[r])},e.convert_dynamic_to_value=function(e){var t=typeof e||"";if("undefined"==t||"null"===t||!t)return"";var n=this,r={v0:"campaign",ch:"channel",vid:"visitorID",g:"pageURL"};if(e.match(/D=([^=]+)/)){var a=RegExp.$1,i="";if(void 0!==r[a])i=r[a];else if(a.match(/^(c|v|l|h)([0-9]+)$/)){switch(RegExp.$1){case"c":i="prop";break;case"v":i="eVar";break;case"l":i="list";break;case"h":i="hier"}i+=RegExp.$2}else i=a;return i&&void 0!==n[i]&&n[i]?n[i]:""}return e},e.categoryViewed=function(t,n,r,a){var i=!1,o=new Date,s=0,c=o.getTime();o.setTime(c+24*r*60*60*1e3);var u=e.c_r(n);if(0==u.length)u=t,s=1;else{for(var l=u.split(">"),d=0;d<l.length;d++)t==l[d]&&(i=!0);var p=30;if(0==i){l.push(t);var f=l.length;if(f>p)for(f-=p,d=0;d<f;d++)l.shift();u=l.join(">"),s=l.length}}e.c_w(n,u,o),a.catList=u,a.cats=s},e.getHourTimePer15min=function(){var e=new Date,t=("0"+e.getHours()).slice(-2),n=e.getMinutes();return t+":"+(0<=n&&n<15?"00":15<=n&&n<30?"15":30<=n&&n<45?"30":"45")},e.loadModule("Media"),e.Media.onLoad=function(e){e.Media.autoTrack=!1,e.Media.trackVars="contextData",e.Media.trackEvents="",e.Media.segmentByMilestones=!1,e.Media.trackMilestones="25,50,75",e.Media.trackSeconds=10,e.Media.trackUsingContextData=!0},e.wd=window,e.fl=new Function("x","l","return x?(''+x).substring(0,l):x"),e.pt=new Function("x","d","f","a","var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.substring(z,x[l]);t=z<x[l]?t:''}return''"),e.rep=new Function("x","o","n","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x"),e.ape=new Function("x","var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x"),e.epa=new Function("x","var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y"),e.parseUri=new Function("u","if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.createElement('a'),l=['href','protocol','host','hostname','port','pathname','search','hash'],p,r={href:u,toString:function(){return this.href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathname='/'+p;return r"),e.gtfs=new Function("var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.protocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?d.referrer:d.location;return{location:s.parseUri(u)}"),e.getLoadTime=function(){if(!window.s_loadT){var e=(new Date).getTime(),t=window.performance?performance.timing:0,n=t?t.requestStart:window.inHeadTS||0;s_loadT=n?Math.round((e-n)/100)/10:""}return s_loadT},e.getPageName=new Function("u","siteID","pathConcatDelim","pathExcludeDelim","pathExcludeList","defaultPage","var pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);var x1=t.indexOf('=');if(a.toLowerCase()==t.substring(0,x1<0?t.length:x1).toLowerCase()){r=t;}else{r=0;}if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:'';}return'';};var s=this,pathExcludeList=pathExcludeList||'cgi-bin',v=u?u:''+location.href,x=v.indexOf(':'),y=v.indexOf('/',x+4),z=v.indexOf('?'),c=pathConcatDelim||':',e=pathExcludeDelim||'.',g='',d=siteID?siteID:'',dp=defaultPage||'index',n=d?d:'',q=z<0?'':v.substring(z+1),p=v.substring(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:(p?(''+p).substring(0,z):p);x=e?p.indexOf(e):-1;p=x<0?p:(p?(''+p).substring(0,x):p);p+=!p||p.charAt(p.length-1)=='/'?dp:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=(p?(''+p).substring(0,x):p);if(!pt(pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p.substring(x+1);}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x;z=(g?(''+g).substring(0,x):g);z=pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.substring(x+1)}return n"),e.getPercentPageViewed_nol=function(e,t){var n=this,r=n.c_r("s_ppv_nol");if((r=-1<r.indexOf(",")?r.split(","):[])[0]=n.unescape(r[0]),10==r.length){var a=r[1],i=Math.floor(r[3]/r[5]),o=Math.floor(r[3]/r[2]*100/r[5]);r[1]=r[2],r[2]=a,r[4]=i,r[5]=o}e=e||(n.pageName?n.pageName:document.location.href),n.ppvChange=void 0===t||1==t,void 0!==n.linkType&&"o"===n.linkType||(n.ppvID&&n.ppvID===e||(n.ppvID=e,n.c_w("s_ppv_nol",""),n.handlePPVevents_nol()),n.p_fo("s_gppvLoad")&&window.addEventListener&&(window.addEventListener("load",n.handlePPVevents_nol,!1),window.addEventListener("click",n.handlePPVevents_nol,!1),window.addEventListener("scroll",n.handlePPVevents_nol,!1)),n._ppvPreviousPage=r[0]?r[0]:"",n._ppvHighestPercentViewed=r[1]?r[1]:"",n._ppvInitialPercentViewed=r[2]?r[2]:"",n._ppvHighestPixelsSeen=r[3]?r[3]:"",n._ppvFoldsSeen=r[4]?r[4]:"",n._ppvFoldsAvailable=r[5]?r[5]:"")},e.handlePPVevents_nol=function(){if("undefined"!=typeof s_c_il){for(var e=0,t=s_c_il.length;e<t;e++)if(s_c_il[e]&&(s_c_il[e].getPercentPageViewed_nol||s_c_il[e].getPreviousPageActivity)){var n=s_c_il[e];break}if(n&&n.ppvID){var r=Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight)),a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e=(window.pageYOffset||window.document.documentElement.scrollTop||window.document.body.scrollTop)+a,t=Math.min(Math.round(e/r*100),100);var i=Math.floor(e/a);a=Math.floor(r/a);var o="";if(!n.c_r("s_tp_nol")||n.unescape(n.c_r("s_ppv_nol").split(",")[0])!==n.ppvID||n.p_fo(n.ppvID)||1==n.ppvChange&&n.c_r("s_tp_nol")&&r!=n.c_r("s_tp_nol")){if((n.unescape(n.c_r("s_ppv_nol").split(",")[0])!==n.ppvID||n.p_fo(n.ppvID+"1"))&&n.c_w("s_ips_nol",e),n.c_r("s_tp_nol")&&n.unescape(n.c_r("s_ppv_nol").split(",")[0])===n.ppvID){n.c_r("s_tp_nol");var s=-1<(o=n.c_r("s_ppv_nol")).indexOf(",")?o.split(","):[];o=s[0]?s[0]:"",s=s[3]?s[3]:"";var c=n.c_r("s_ips_nol");o=o+","+Math.round(s/r*100)+","+Math.round(c/r*100)+","+s+","+i}n.c_w("s_tp_nol",r)}else o=n.c_r("s_ppv_nol");var u=o&&-1<o.indexOf(",")?o.split(",",6):[];r=0<u.length?u[0]:escape(n.ppvID),s=1<u.length?parseInt(u[1]):t,c=2<u.length?parseInt(u[2]):t;var l=3<u.length?parseInt(u[3]):e,d=4<u.length?parseInt(u[4]):i;u=5<u.length?parseInt(u[5]):a,0<t&&(o=r+","+(t>s?t:s)+","+c+","+(e>l?e:l)+","+(i>d?i:d)+","+(a>u?a:u)),n.c_w("s_ppv_nol",o)}}},e.p_fo=function(e){var t=this;return t.__fo||(t.__fo={}),!t.__fo[e]&&(t.__fo[e]={},!0)},e.getNewRepeat=new Function("d","cn","var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"),e.getTimeParting=new Function("h","z","var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"),e.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"),e.apl=new Function("l","v","d","u","var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"),e.join=new Function("v","p","var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;"),e.rfl=new Function("l","v","d1","d2","ku","var s=this,R=new Array(),C='',d1=!d1?',':d1,d2=!d2?',':d2,ku=!ku?0:1;if(!l)return'';L=l.split(d1);for(i=0;i<L.length;i++){if(L[i].indexOf(':')>-1){C=L[i].split(':');C[1]=C[0]+':'+C[1];L[i]=C[0];}if(L[i].indexOf('=')>-1){C=L[i].split('=');C[1]=C[0]+'='+C[1];L[i]=C[0];}if(L[i]!=v&&C)R.push(C[1]);else if(L[i]!=v)R.push(L[i]);else if(L[i]==v&&ku){ku=0;if(C)R.push(C[1]);else R.push(L[i]);}C='';}return s.join(R,{delim:d2})"),e.previous_dir1=function(){return document.referrer?document.referrer.match(/\.nhk\.or\.jp\/([^\/]+)\//)?RegExp.$1:document.referrer.match(/\.nhk\.or\.jp\/([^\/]*)$/)?"index":"":""},e.getStrInMaxBytes=function(e,t){try{var n="";if(void 0===e||null==e||""==e)return n;t&&isFinite(t)||(t=100);var r=";,/?:@&=+$ ",a=[0,1,1,1,2,3,2,3,4,3],i=0;e=String(e);for(var o=0;o<e.length;o++){var s=e.charAt(o);if(r.indexOf(s)>=0?i++:i+=a[encodeURI(s).length],i>t)break;n+=s}return n}catch(t){return e}},e.setRealValue_eVar=function(e,t){var n="eVar",r="c",a="prop",o="v",s=t+"=",c="",u="",l=(t="",""),d="";for(i=1;i<=250;i++)if((c=e[n+i])&&0==c.indexOf(s)&&!((u=c.substr(2)).length<2)){if(t=u.substr(0,1),l=u.substr(1),t==r)d=e[a+l];else{if(t!=o)continue;d=e[n+l]}e[n+i]=d}},e._tc_sc_preFunc=function(){var e=this;"object"==typeof _tc_eventVars&&void 0!==_tc_eventVars.events&&(e.events=_tc_eventVars.events),e.eVar29=_satellite.getVar("getParentURL"),e.prop35=_satellite.getVar("_tc_ver"),e.prop38=_satellite.getVar("_tc_aa_ver"),e.prop8=_satellite.getVar("getCanonicalURL"),e.prop42=_satellite.getVar("getSDRver");try{for(var t=window._tc_notval?window._tc_notval:"not set",n=window._TC_CUSTOM_VARIABLE_COUNT?window._TC_CUSTOM_VARIABLE_COUNT:10,r=window._tc_aa_notval?window._tc_aa_notval:"N/A",a=window._tc_con?window._tc_con:null,i=1;i<n+1;i++){var o="eVar"+(55+i),s="c"+i,c="ce"+i;e["prop"+(55+i)]=a[s]==t?null:a[s],e[o]=a[c]==t?r:a[c]}}catch(e){}},e._tc_sc_postFunc=function(){var e=this;try{if(void 0===e.pageName||!e.pageName)return;var t;"undefined"!=typeof _tc_identifier?t=_tc_identifier:"undefined"!=typeof _ga_identifier&&(t=_ga_identifier);for(var n=location.search.substring(1).split("&"),r=0;n[r];r++){var a=n[r].split("=");if("aa_ref"==a[0]){a[1]=decodeURIComponent(a[1]);var i=a[1];if(null!=i&&""!=(i=i.replace(/[ \u3000]+/g,""))){e.referrer=a[1];break}}}if("N/A"!=_satellite.getVar("getParentURL")&&"ERR"!=_satellite.getVar("getParentURL")){var o=_satellite.getVar("getParentURL").replace(/\?.*/g,"");if(null!=(o=(o=(o=o.replace(/.*:\/\/.*?\//g,"")).replace(/#.*/g,"")).replace(/(?=[^/]+$)\..*/g,"").replace(/\/$/g,"/index").replace(/\//g,":"))){/^(.+):amp(:.+)$/.test(o)&&(o=RegExp.$1+RegExp.$2+"-amp"),e.pageName=o;var s=o.split(":"),c=s.length;if(c>0){var u="D=c4",l="D=c5",d="D=c6",p="D=c15";switch(c){case 1:e.prop4=s[0],e.prop5=u,e.prop6=u,e.prop15=u,e.eVar4=u,e.eVar5=u,e.eVar6=u,e.eVar15=u;break;case 2:e.prop4=s[0],e.prop5=s[0]+":"+s[1],e.prop6=l,e.prop15=l,e.eVar4=u,e.eVar5=l,e.eVar6=l,e.eVar15=l;break;case 3:e.prop4=s[0],e.prop5=s[0]+":"+s[1],e.prop6=s[0]+":"+s[1]+":"+s[2],e.prop15=d,e.eVar4=u,e.eVar5=l,e.eVar6=d,e.eVar15=d;break;default:e.prop4=s[0],e.prop5=s[0]+":"+s[1],e.prop6=s[0]+":"+s[1]+":"+s[2],e.prop15=s[0]+":"+s[1]+":"+s[2]+":"+s[3],e.eVar4=u,e.eVar5=l,e.eVar6=d,e.eVar15=p}}}}void 0!==t&&t&&(e.pageName=e.pageName+"#"+t)}catch(e){}},_satellite.getVar("_tc_isFirst")&&_satellite.getVar("_tc_allowTracking")?(window.s_omni=e,window.visitor=e.visitor):window.s_omni||(window.s_omni=e),_satellite.getVar("_tc_isPageTracking")||(e.abort=!0),setTimeout((function(){"function"==typeof _tc_sc_ready&&_tc_sc_ready(e)}))}},libraryCode:{type:"custom",source:"https://apps.nhk.or.jp/assets/dtm/f085c0790456/610bd2b69f10/5b9f2d6a97ed/EX735e86113bb944e8ae5ef52cf73bba5f-libraryCode_source.min.js",accounts:{staging:["nhkonlinenewdev"],production:["%rsid%"],development:["nhkonlinenewdev"]},trackerVariableName:"s_omni2"},trackerProperties:{charSet:"UTF-8",currencyCode:"JPY",trackingServer:"mtc.nhk.or.jp",trackInlineStats:!0,visitorNamespace:"nhkonline",trackDownloadLinks:!0,trackExternalLinks:!0,cookieDomainPeriods:"3",linkInternalFilters:["%s.linkInternalFilters%"],trackingServerSecure:"mtcs.nhk.or.jp",fpCookieDomainPeriods:"3",linkDownloadFileTypes:["doc","docx","eps","jpg","png","svg","xls","ppt","pptx","pdf","xlsx","tab","csv","zip","txt","vsd","vxd","xml","js","css","rar","exe","wma","mov","avi","wmv","mp3","wav","m4v"],collectHighEntropyUserAgentHints:!0}},modules:{"adobe-analytics/src/lib/actions/setVariables.js":{name:"set-variables",displayName:"Set Variables",script:function(e,t,n,r){"use strict";var a=n("../sharedModules/getTracker"),i=n("../helpers/applyTrackerVariables");e.exports=function(e,t){return a().then((function(n){r.logger.info("Set variables on the tracker."),i(n,e.trackerProperties),e.customSetup&&e.customSetup.source&&e.customSetup.source.call(t.element,t,n)}),(function(e){r.logger.error("Cannot set variables: "+e)}))}}},"adobe-analytics/src/lib/actions/sendBeacon.js":{name:"send-beacon",displayName:"Send Beacon",script:function(e,t,n,r){"use strict";var a=n("../sharedModules/getTracker"),i=n("../helpers/getNodeLinkText"),o=function(e){return e&&e.nodeName&&"a"===e.nodeName.toLowerCase()},s=function(e){return o(e)?i(e):"link clicked"},c=function(e,t,n){if("page"===t.type)r.logger.info("Firing page view beacon."),e.t();else{var a={linkType:t.linkType||"o",linkName:t.linkName||s(n)};r.logger.info("Firing link track beacon using the values: "+JSON.stringify(a)+"."),e.tl(o(n)?n:"true",a.linkType,a.linkName)}};e.exports=function(e,t){return a().then((function(n){c(n,e,t.element)}),(function(e){r.logger.error("Cannot send beacon: "+e)}))}}},"adobe-analytics/src/lib/sharedModules/getTracker.js":{script:function(e,t,n,r){"use strict";var a,i=n("@adobe/reactor-cookie"),o=n("@adobe/reactor-promise"),s=n("@adobe/reactor-window"),c=n("../helpers/settingsHelper"),u=n("../helpers/augmenters"),l=n("../helpers/applyTrackerVariables"),d=n("../helpers/loadLibrary"),p=n("../helpers/generateVersion")(r.buildInfo.turbineBuildDate),f="beforeSettings",h=r.getSharedModule("adobe-mcid","mcid-instance"),m=function(e){return!e||"true"===i.get(e)},g=function(e){return o.all(u.map((function(t){var n;try{n=t(e)}catch(e){setTimeout((function(){throw e}))}return o.resolve(n)}))).then((function(){return e}))},_=function(e){return h&&(r.logger.info("Setting MCID instance on the tracker."),e.visitor=h),e},v=function(e){return r.logger.info('Setting version on tracker: "'+p+'".'),void 0!==e.tagContainerMarker?e.tagContainerMarker=p:"string"==typeof e.version&&e.version.substring(e.version.length-5)!=="-"+p&&(e.version+="-"+p),e},y=function(e,t,n){return t.loadPhase===f&&t.source&&(r.logger.info("Calling custom script before settings."),t.source.call(s,n)),l(n,e||{}),t.loadPhase!==f&&t.source&&(r.logger.info("Calling custom script after settings."),t.source.call(s,n)),n},b=function(e,t){return c.isAudienceManagementEnabled(e)&&(t.loadModule("AudienceManagement"),r.logger.info("Initializing AudienceManagement module"),t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),t},k=(a=r.getExtensionSettings(),m(a.trackingCookieName)?d(a).then(g).then(_).then(v).then(y.bind(null,a.trackerProperties,a.customSetup||{})).then(b.bind(null,a)):o.reject("EU compliance was not acknowledged by the user."));e.exports=function(){return k}},name:"get-tracker",shared:!0},"adobe-analytics/src/lib/sharedModules/augmentTracker.js":{name:"augment-tracker",shared:!0,script:function(e,t,n){"use strict";var r=n("../helpers/augmenters");e.exports=function(e){r.push(e)}}},"adobe-analytics/src/lib/helpers/applyTrackerVariables.js":{script:function(e,t,n,r){"use strict";var a=n("@adobe/reactor-query-string"),i=n("@adobe/reactor-window"),o=/eVar([0-9]+)/,s=/prop([0-9]+)/,c=new RegExp("^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$"),u=function(e,t,n){return n.indexOf(e)===t},l=function(e,t,n){var r=Object.keys(t).filter(c.test.bind(c));return n&&r.push("events"),(r=r.concat((e.linkTrackVars||"").split(","))).filter((function(e,t){return"None"!==e&&e&&u(e,t,r)})).join(",")},d=function(e,t){var n=t.map((function(e){return e.name}));return(n=n.concat((e.linkTrackEvents||"").split(","))).filter((function(e,t){return"None"!==e&&u(e,t,n)})).join(",")},p=function(e,t,n){e[t]=n[t].join(",")},f=function(e,t,n){var r=n.dynamicVariablePrefix||"D=";n[t].forEach((function(t){var n;if("value"===t.type)n=t.value;else{var a=o.exec(t.value);if(a)n=r+"v"+a[1];else{var i=s.exec(t.value);i&&(n=r+"c"+i[1])}}e[t.name]=n}))},h={linkDownloadFileTypes:p,linkExternalFilters:p,linkInternalFilters:p,hierarchies:function(e,t,n){n[t].forEach((function(t){e[t.name]=t.sections.join(t.delimiter)}))},props:f,eVars:f,campaign:function(e,t,n){if("queryParam"===n[t].type){var r=a.parse(i.location.search);e[t]=r[n[t].value]}else e[t]=n[t].value},events:function(e,t,n){var r=n[t].map((function(e){var t=e.name;return e.id&&(t=[t,e.id].join(":")),e.value&&(t=[t,e.value].join("=")),t}));e[t]=r.join(",")}};e.exports=function(e,t){var n={};t=t||{},Object.keys(t).forEach((function(e){var r=h[e],a=t[e];r?r(n,e,t):n[e]=a})),n.events&&e.events&&e.events.length>0&&(n.events=e.events+","+n.events);var a=t&&t.events&&t.events.length>0,i=l(e,n,a);i&&(n.linkTrackVars=i);var o=d(e,t.events||[]);o&&(n.linkTrackEvents=o),r.logger.info('Applying the following properties on tracker: "'+JSON.stringify(n)+'".'),Object.keys(n).forEach((function(t){e[t]=n[t]}))}}},"adobe-analytics/src/lib/helpers/settingsHelper.js":{script:function(e,t,n,r){"use strict";var a=n("@adobe/reactor-window"),i={LIB_TYPES:{MANAGED:"managed",PREINSTALLED:"preinstalled",REMOTE:"remote",CUSTOM:"custom"},MANAGED_LIB_PATHS:{APP_MEASUREMENT:"AppMeasurement.js",ACTIVITY_MAP:"AppMeasurement_Module_ActivityMap.js",AUDIENCE_MANAGEMENT:"AppMeasurement_Module_AudienceManagement.js"},getReportSuites:function(e){var t=e.production;return e[r.environment.stage]&&(t=e[r.environment.stage]),t.join(",")},isActivityMapEnabled:function(e){return!(e.libraryCode&&!e.libraryCode.useActivityMap&&!1===e.libraryCode.useActivityMap)},isAudienceManagementEnabled:function(e){var t=!1;return e&&e.moduleProperties&&e.moduleProperties.audienceManager&&e.moduleProperties.audienceManager.config&&a&&a._satellite&&a._satellite.company&&a._satellite.company.orgId&&(t=!0),t}};e.exports=i}},"adobe-analytics/src/lib/helpers/augmenters.js":{script:function(e){"use strict";e.exports=[]}},"adobe-analytics/src/lib/helpers/loadLibrary.js":{script:function(e,t,n,r){"use strict";var a=n("@adobe/reactor-load-script"),i=n("@adobe/reactor-window"),o=n("@adobe/reactor-promise"),s=n("./settingsHelper"),c=n("./pollHelper"),u=function(e,t){if(!i.s_gi)throw new Error("Unable to create AppMeasurement tracker, `s_gi` function not found."+i.AppMeasurement);r.logger.info('Creating AppMeasurement tracker with these report suites: "'+t+'"');var n=i.s_gi(t);return e.libraryCode.scopeTrackerGlobally&&(r.logger.info("Setting the tracker as window.s"),i.s=n),n},l=function(e){var t=[];switch(e.libraryCode.type){case s.LIB_TYPES.MANAGED:t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.APP_MEASUREMENT)),s.isActivityMapEnabled(e)&&t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.ACTIVITY_MAP));break;case s.LIB_TYPES.CUSTOM:t.push(e.libraryCode.source);break;case s.LIB_TYPES.REMOTE:t.push("https:"===i.location.protocol?e.libraryCode.httpsUrl:e.libraryCode.httpUrl)}if(s.isAudienceManagementEnabled(e)){var n={namespace:i._satellite.company.orgId};e.moduleProperties.audienceManager.config.visitorService=n,t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT))}return t},d=function(e){return o.all(l(e).map((function(e){return r.logger.info("Loading script: "+e),a(e)})))},p=function(e,t){if(e.libraryCode.accounts)if(t.sa){var n=s.getReportSuites(e.libraryCode.accounts);r.logger.info('Setting the following report suites on the tracker: "'+n+'"'),t.sa(n)}else r.logger.warn("Cannot set report suites on tracker. `sa` method not available.");return t},f=function(e){if(i[e])return r.logger.info('Found tracker located at: "'+e+'".'),i[e];throw new Error('Cannot find the global variable name: "'+e+'".')};e.exports=function(e){var t=d(e);switch(e.libraryCode.type){case s.LIB_TYPES.MANAGED:var n=s.getReportSuites(e.libraryCode.accounts);return t.then(u.bind(null,e,n));case s.LIB_TYPES.PREINSTALLED:return t.then(c.poll.bind(null,i,e.libraryCode.trackerVariableName)).then(p.bind(null,e));case s.LIB_TYPES.CUSTOM:case s.LIB_TYPES.REMOTE:return t.then(f.bind(null,e.libraryCode.trackerVariableName)).then(p.bind(null,e));default:throw new Error("Cannot load library. Type not supported.")}}}},"adobe-analytics/src/lib/helpers/generateVersion.js":{script:function(e){"use strict";var t=8,n=function(e){return e.getUTCDate().toString(36)},r=function(e){return e.substr(e.length-1)},a=function(e){return Math.floor(e.getUTCHours()/t)},i=function(e){var t=(e.getUTCMonth()+1+12*a(e)).toString(36);return r(t)},o=function(e){return(e.getUTCFullYear()-2010).toString(36)};e.exports=function(e){var t=new Date(e);if(isNaN(t))throw new Error("Invalid date provided");return("L"+o(t)+i(t)+n(t)).toUpperCase()}}},"adobe-analytics/src/lib/helpers/pollHelper.js":{script:function(e,t,n,r){"use strict";var a=n("@adobe/reactor-promise"),i=40,o=250,s=function(e,t,n){r.logger.info('Found property located at: "'+t+'"].'),e(n)},c=function(e,t){return new a((function(n,r){if(e[t])return s(n,t,e[t]);var a=1,c=setInterval((function(){e[t]&&(s(n,t,e[t]),clearInterval(c)),a>=i&&(clearInterval(c),r(new Error('Bailing out. Cannot find the variable name: "'+t+'"].'))),a++}),o)}))};e.exports={poll:function(e,t){return r.logger.info('Waiting for the property to become accessible at: "'+t+'"].'),c(e,t)}}}},"adobe-analytics/src/lib/helpers/getNodeLinkText.js":{script:function(e){
"use strict";var t=function(e){return e&&e.replace(/\s+/g," ").trim()},n=/^(SCRIPT|STYLE|LINK|CANVAS|NOSCRIPT|#COMMENT)$/i,r=function(e){return!(e&&e.nodeName&&e.nodeName.match(n))},a=function(e){var t=[],n=!1;return r(e)?(t.push(e),e.childNodes&&Array.prototype.slice.call(e.childNodes).forEach((function(e){var r=a(e);t=t.concat(r.supportedNodes),n=n||r.includesUnsupportedNodes}))):n=!0,{supportedNodes:t,includesUnsupportedNodes:n}},i=function(e,t,n){var r;return n&&n!==e.nodeName.toUpperCase()||(r=e.getAttribute(t)),r};e.exports=function(e){var n=t(e.innerText||e.textContent),r=a(e);if(!n||r.includesUnsupportedNodes){var o,s,c,u,l=[];r.supportedNodes.forEach((function(e){e.getAttribute&&(o=o||t(e.getAttribute("alt")),s=s||t(e.getAttribute("title")),c=c||t(i(e,"value","INPUT")),u=u||t(i(e,"src","IMG"))),e.nodeValue&&l.push(e.nodeValue)})),(n=t(l.join("")))||(n=t(o||s||c||u||""))}return n}}}}},core:{displayName:"Core",hostedLibFilesBaseUrl:"https://apps.nhk.or.jp/assets/dtm//f085c0790456/610bd2b69f10/5b9f2d6a97ed/hostedLibFiles/EP1fdd2a6ec2ae468fb1d2cac08df65f83/",modules:{"core/src/lib/dataElements/customCode.js":{name:"custom-code",displayName:"Custom Code",script:function(e){"use strict";e.exports=function(e,t){return e.source(t)}}},"core/src/lib/dataElements/javascriptVariable.js":{name:"javascript-variable",displayName:"JavaScript Variable",script:function(e,t,n){"use strict";var r=n("../helpers/getObjectProperty.js");e.exports=function(e){return r(window,e.path)}}},"core/src/lib/events/domReady.js":{name:"dom-ready",displayName:"DOM Ready",script:function(e,t,n){"use strict";var r=n("./helpers/pageLifecycleEvents");e.exports=function(e,t){r.registerDomReadyTrigger(t)}}},"core/src/lib/conditions/cookie.js":{name:"cookie",displayName:"Cookie",script:function(e,t,n){"use strict";var r=n("@adobe/reactor-cookie"),a=n("../helpers/textMatch");e.exports=function(e){var t=r.get(e.name);return!!t&&(Array.isArray(e.cookieValues)?e.cookieValues:[{value:e.value,valueIsRegex:Boolean(e.valueIsRegex)}]).some((function(e){var n=e.valueIsRegex?new RegExp(e.value,"i"):e.value;return a(t,n)}))}}},"core/src/lib/actions/customCode.js":{name:"custom-code",displayName:"Custom Code",script:function(e,t,n,r){"use strict";var a,i,o,s,c=n("@adobe/reactor-document"),u=n("@adobe/reactor-promise"),l=n("./helpers/decorateCode"),d=n("./helpers/loadCodeSequentially"),p=n("../../../node_modules/postscribe/dist/postscribe"),f=n("./helpers/unescapeHtmlCode"),h=n("../helpers/findPageScript").getTurbine,m=(i=function(e){p(c.body,e,{beforeWriteToken:function(e){var t=e.tagName&&e.tagName.toLowerCase();return a&&"script"===t&&(e.attrs.nonce=a),"script"!==t&&"style"!==t||(Object.keys(e.attrs||{}).forEach((function(t){e.attrs[t]=f(e.attrs[t])})),e.src&&(e.src=f(e.src))),e},error:function(e){r.logger.error(e.msg)}})},o=[],s=function(){if(c.body)for(;o.length;)i(o.shift());else setTimeout(s,20)},function(e){o.push(e),s()}),g=function(){if(c.currentScript)return c.currentScript.async;var e=h();return!e||e.async}();e.exports=function(e,t){var n;a=r.getExtensionSettings().cspNonce;var i={settings:e,event:t},o=i.settings.source;if(o)return i.settings.isExternal?d(o).then((function(e){return e?(n=l(i,e),m(n.code),n.promise):u.resolve()})):(n=l(i,o),g||"loading"!==c.readyState?m(n.code):c.write&&!1===r.propertySettings.ruleComponentSequencingEnabled?c.write(n.code):m(n.code),n.promise)}}},"core/src/lib/events/libraryLoaded.js":{name:"library-loaded",displayName:"Library Loaded (Page Top)",script:function(e,t,n){"use strict";var r=n("./helpers/pageLifecycleEvents");e.exports=function(e,t){r.registerLibraryLoadedTrigger(t)}}},"core/src/lib/helpers/getObjectProperty.js":{script:function(e){"use strict";e.exports=function(e,t){for(var n=t.split("."),r=e,a=0,i=n.length;a<i;a++){if(null==r)return;r=r[n[a]]}return r}}},"core/src/lib/events/helpers/pageLifecycleEvents.js":{script:function(e,t,n){"use strict";var r=n("@adobe/reactor-window"),a=n("@adobe/reactor-document"),i=-1!==r.navigator.appVersion.indexOf("MSIE 10"),o="WINDOW_LOADED",s="DOM_READY",c="PAGE_BOTTOM",u=[c,s,o],l=function(e,t){return{element:e,target:e,nativeEvent:t}},d={};u.forEach((function(e){d[e]=[]}));var p=function(e,t){u.slice(0,h(e)+1).forEach((function(e){m(t,e)}))},f=function(){return"complete"===a.readyState?o:"interactive"===a.readyState?i?null:s:void 0},h=function(e){return u.indexOf(e)},m=function(e,t){d[t].forEach((function(t){g(e,t)})),d[t]=[]},g=function(e,t){var n=t.trigger,r=t.syntheticEventFn;n(r?r(e):null)};r._satellite=r._satellite||{},r._satellite.pageBottom=p.bind(null,c),a.addEventListener("DOMContentLoaded",p.bind(null,s),!0),r.addEventListener("load",p.bind(null,o),!0),r.setTimeout((function(){var e=f();e&&p(e)}),0),e.exports={registerLibraryLoadedTrigger:function(e){e()},registerPageBottomTrigger:function(e){d[c].push({trigger:e})},registerDomReadyTrigger:function(e){d[s].push({trigger:e,syntheticEventFn:l.bind(null,a)})},registerWindowLoadedTrigger:function(e){d[o].push({trigger:e,syntheticEventFn:l.bind(null,r)})}}}},"core/src/lib/helpers/textMatch.js":{script:function(e){"use strict";e.exports=function(e,t){if(null==t)throw new Error("Illegal Argument: Pattern is not present");return null!=e&&("string"==typeof t?e===t:t instanceof RegExp&&t.test(e))}}},"core/src/lib/actions/helpers/decorateCode.js":{script:function(e,t,n){"use strict";var r=n("./decorators/decorateGlobalJavaScriptCode"),a=n("./decorators/decorateNonGlobalJavaScriptCode"),i={javascript:function(e,t){return e.settings.global?r(e,t):a(e,t)},html:n("./decorators/decorateHtmlCode")};e.exports=function(e,t){return i[e.settings.language](e,t)}}},"core/src/lib/actions/helpers/loadCodeSequentially.js":{script:function(e,t,n){"use strict";var r=n("@adobe/reactor-promise"),a=n("./getSourceByUrl"),i=r.resolve();e.exports=function(e){var t=new r((function(t){var n=a(e);r.all([n,i]).then((function(e){var n=e[0];t(n)}))}));return i=t,t}}},"core/node_modules/postscribe/dist/postscribe.js":{script:function(e,t){var n,r;n=this,r=function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=r(n(1));e.exports=a.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function i(){}function o(){var e=h.shift();if(e){var t=d.last(e);t.afterDequeue(),e.stream=s.apply(void 0,e),t.afterStreamStart()}}function s(e,t,n){function r(e){e=n.beforeWrite(e),m.write(e),n.afterWrite(e)}(m=new l.default(e,n)).id=f++,m.name=n.name||m.id,c.streams[m.name]=m;var a=e.ownerDocument,s={close:a.close,open:a.open,write:a.write,writeln:a.writeln};u(a,{close:i,open:i,write:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t.join(""))},writeln:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t.join("")+"\n")}});var d=m.win.onerror||i;return m.win.onerror=function(e,t,r){n.error({msg:e+" - "+t+": "+r}),d.apply(m.win,[e,t,r])},m.write(t,(function(){u(a,s),m.win.onerror=d,n.done(),m=null,o()})),m}function c(e,t,n){if(d.isFunction(n))n={done:n};else if("clear"===n)return h=[],m=null,void(f=0);n=d.defaults(n,p);var r=[e=/^#/.test(e)?window.document.getElementById(e.substr(1)):e.jquery?e[0]:e,t,n];return e.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=i}},n.beforeEnqueue(r),h.push(r),m||o(),e.postscribe}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=c;var l=a(n(2)),d=r(n(4)),p={afterAsync:i,afterDequeue:i,afterStreamStart:i,afterWrite:i,autoFix:!0,beforeEnqueue:i,beforeWriteToken:function(e){return e},beforeWrite:function(e){return e},done:i,error:function(e){throw new Error(e.msg)},releaseAsync:!1},f=0,h=[],m=null;u(c,{streams:{},queue:h,WriteStream:l.default})},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){var n=p+t,r=e.getAttribute(n);return l.existy(r)?String(r):r}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=p+t;l.existy(n)&&""!==n?e.setAttribute(r,n):e.removeAttribute(r)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=a(n(3)),l=r(n(4)),d=!1,p="data-ps-",f="ps-style",h="ps-script",m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.root=t,this.options=n,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new u.default("",{autoFix:n.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],s(this.proxyRoot,"proxyof",0)}return e.prototype.write=function(){var e;for((e=this.writeQueue).push.apply(e,arguments);!this.deferredRemote&&this.writeQueue.length;){var t=this.writeQueue.shift();l.isFunction(t)?this._callFunction(t):this._writeImpl(t)}},e.prototype._callFunction=function(e){var t={type:"function",value:e.name||e.toString()};this._onScriptStart(t),e.call(this.win,this.doc),this._onScriptDone(t)},e.prototype._writeImpl=function(e){this.parser.append(e);for(var t=void 0,n=void 0,r=void 0,a=[];(t=this.parser.readToken())&&!(n=l.isScript(t))&&!(r=l.isStyle(t));)(t=this.options.beforeWriteToken(t))&&a.push(t);a.length>0&&this._writeStaticTokens(a),n&&this._handleScriptToken(t),r&&this._handleStyleToken(t)},e.prototype._writeStaticTokens=function(e){var t=this._buildChunk(e);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,d&&(t.proxyInnerHTML=this.proxyRoot.innerHTML),this._walkChunk(),d&&(t.actualInnerHTML=this.root.innerHTML),t):null},e.prototype._buildChunk=function(e){for(var t=this.actuals.length,n=[],r=[],a=[],i=e.length,o=0;o<i;o++){var s=e[o],c=s.toString();if(n.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var u=t++;r.push(c.replace(/(\/?>)/," "+p+"id="+u+" $1")),s.attrs.id!==h&&s.attrs.id!==f&&a.push("atomicTag"===s.type?"":"<"+s.tagName+" "+p+"proxyof="+u+(s.unary?" />":">"))}}else r.push(c),a.push("endTag"===s.type?c:"")}return{tokens:e,raw:n.join(""),actual:r.join(""),proxy:a.join("")}},e.prototype._walkChunk=function(){for(var e=void 0,t=[this.proxyRoot];l.existy(e=t.shift());){var n=1===e.nodeType;if(!n||!o(e,"proxyof")){n&&(this.actuals[o(e,"id")]=e,s(e,"id"));var r=e.parentNode&&o(e.parentNode,"proxyof");r&&this.actuals[r].appendChild(e)}t.unshift.apply(t,l.toArray(e.childNodes))}},e.prototype._handleScriptToken=function(e){var t=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),e.src=e.attrs.src||e.attrs.SRC,(e=this.options.beforeWriteToken(e))&&(e.src&&this.scriptStack.length?this.deferredRemote=e:this._onScriptStart(e),this._writeScriptToken(e,(function(){t._onScriptDone(e)})))},e.prototype._handleStyleToken=function(e){var t=this.parser.clear();t&&this.writeQueue.unshift(t),e.type=e.attrs.type||e.attrs.TYPE||"text/css",(e=this.options.beforeWriteToken(e))&&this._writeStyleToken(e),t&&this.write()},e.prototype._writeStyleToken=function(e){var t=this._buildStyle(e);this._insertCursor(t,f),e.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=e.content:t.appendChild(this.doc.createTextNode(e.content)))},e.prototype._buildStyle=function(e){var t=this.doc.createElement(e.tagName);return t.setAttribute("type",e.type),l.each   <div class="ui-contextMenu-btn entry-comment-menu-more-btn" tabindex="0" role="button"><span>その他</span></div>
            <div class="ui-contextMenu-list entry-comment-menu-more-list">
              <ul tabindex="-1">
                <li>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-followuser js-entry-comment-followuser">お気に入りに追加</button>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-unfollowuser js-entry-comment-unfollowuser is-hidden">お気に入りを解除</button>
                </li>
                <li>
                <button type="button" class="ui-contextMenu-listItem entry-comment-ignoreuser js-entry-comment-ignoreuser">ユーザーを非表示</button>
                <button type="button" class="ui-contextMenu-listItem entry-comment-unignoreuser js-entry-comment-unignoreuser is-hidden" data-unignore-msg-hover="ユーザーを表示" data-unignore-msg="非表示に設定済み"><span class="is-hidden">ユーザーを表示</span></button>
              </li>
              <li><button type="button" class="ui-contextMenu-listItem entry-comment-reportViolation js-bookmark-report-violation-button">通報する</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="entry-comment-contents  js-ignorable-user-content js-bookmark-item js-user-bookmark-comment" data-user-name="y-wood" data-url="https://anond.hatelabo.jp/20240128201444">
  <div class="entry-comment-contents-main">
    <a href="/y-wood/" class="entry-user-icon" data-gtm-label="entry-recent-icon"><img src="https://cdn.profile-image.st-hatena.com/users/y-wood/profile.png"/ alt="y-wood" title="y-wood"></a>
    <div class="entry-comments-contents-body">
        <span class="entry-comment-username"><a href="/y-wood/" data-gtm-label="entry-recent-username">y-wood</a></span>
      <span class="entry-comment-text js-bookmark-comment">バブル弾けた以降、30年は「団塊世代」だけを守ることになってた(そのとばっちりが氷河期世代)。団塊は年金受給額が全て、それに寄り添う自民と立憲。/ 後期医療改革が遅れたのも痛い、立憲党が「諸悪の根源」である</span>
      <ul class="entry-comment-tags">
      </ul>
      <div class="entry-comment-contents-foot">
        <p class="entry-comment-meta">
          <span class="entry-comment-timestamp"><a class="js-bookmark-anchor-path" data-gtm-label="entry-recent-timestamp" href="https://b.hatena.ne.jp/y-wood/20240201#bookmark-4748627046902934255">2024/02/01</a></span>
            <span class="entry-comment-permalink">
            <a data-gtm-label="entry-recent-permalink" href="/entry/4748627046902934255/comment/y-wood" rel="">リンク</a>
            </span>
          <span class="list-star-container js-list-star-container"></span>
          <span class="twitter-click js-short-url-clicks"></span>
        </p>
        <div class="entry-comment-menus">
          <div class="js-add-star-container add-star-container"></div>
          <div data-location-id="4748627046902934255" data-user-name="y-wood" class="is-hidden js-bookmark-downvote-container entry-comment-menu-minusvote">
            <input type="checkbox" class="js-bookmark-downvote-checkbox entry-comment-menu-minusvote-checkbox" title="マイナス評価">
          </div>
          <div class="ui-contextMenu entry-comment-menu-more js-bookmark-menu-button" onclick>
            <div class="ui-contextMenu-btn entry-comment-menu-more-btn" tabindex="0" role="button"><span>その他</span></div>
            <div class="ui-contextMenu-list entry-comment-menu-more-list">
              <ul tabindex="-1">
                <li>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-followuser js-entry-comment-followuser">お気に入りに追加</button>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-unfollowuser js-entry-comment-unfollowuser is-hidden">お気に入りを解除</button>
                </li>
                <li>
                <button type="button" class="ui-contextMenu-listItem entry-comment-ignoreuser js-entry-comment-ignoreuser">ユーザーを非表示</button>
                <button type="button" class="ui-contextMenu-listItem entry-comment-unignoreuser js-entry-comment-unignoreuser is-hidden" data-unignore-msg-hover="ユーザーを表示" data-unignore-msg="非表示に設定済み"><span class="is-hidden">ユーザーを表示</span></button>
              </li>
              <li><button type="button" class="ui-contextMenu-listItem entry-comment-reportViolation js-bookmark-report-violation-button">通報する</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="entry-comment-contents  js-ignorable-user-content js-bookmark-item js-user-bookmark-comment" data-user-name="airstation" data-url="https://anond.hatelabo.jp/20240128201444">
  <div class="entry-comment-contents-main">
    <a href="/airstation/" class="entry-user-icon" data-gtm-label="entry-recent-icon"><img src="https://cdn.profile-image.st-hatena.com/users/airstation/profile.png"/ alt="airstation" title="airstation"></a>
    <div class="entry-comments-contents-body">
        <span class="entry-comment-username"><a href="/airstation/" data-gtm-label="entry-recent-username">airstation</a></span>
      <span class="entry-comment-text js-bookmark-comment">万年ビリ争いをしている野球チームの監督はとりあえず変えた方が良いのでは？</span>
      <ul class="entry-comment-tags">
      </ul>
      <div class="entry-comment-contents-foot">
        <p class="entry-comment-meta">
          <span class="entry-comment-timestamp"><a class="js-bookmark-anchor-path" data-gtm-label="entry-recent-timestamp" href="https://b.hatena.ne.jp/airstation/20240201#bookmark-4748627046902934255">2024/02/01</a></span>
            <span class="entry-comment-permalink">
            <a data-gtm-label="entry-recent-permalink" href="/entry/4748627046902934255/comment/airstation" rel="">リンク</a>
            </span>
          <span class="list-star-container js-list-star-container"></span>
          <span class="twitter-click js-short-url-clicks"></span>
        </p>
        <div class="entry-comment-menus">
          <div class="js-add-star-container add-star-container"></div>
          <div data-location-id="4748627046902934255" data-user-name="airstation" class="is-hidden js-bookmark-downvote-container entry-comment-menu-minusvote">
            <input type="checkbox" class="js-bookmark-downvote-checkbox entry-comment-menu-minusvote-checkbox" title="マイナス評価">
          </div>
          <div class="ui-contextMenu entry-comment-menu-more js-bookmark-menu-button" onclick>
            <div class="ui-contextMenu-btn entry-comment-menu-more-btn" tabindex="0" role="button"><span>その他</span></div>
            <div class="ui-contextMenu-list entry-comment-menu-more-list">
              <ul tabindex="-1">
                <li>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-followuser js-entry-comment-followuser">お気に入りに追加</button>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-unfollowuser js-entry-comment-unfollowuser is-hidden">お気に入りを解除</button>
                </li>
                <li>
                <button type="button" class="ui-contextMenu-listItem entry-comment-ignoreuser js-entry-comment-ignoreuser">ユーザーを非表示</button>
                <button type="button" class="ui-contextMenu-listItem entry-comment-unignoreuser js-entry-comment-unignoreuser is-hidden" data-unignore-msg-hover="ユーザーを表示" data-unignore-msg="非表示に設定済み"><span class="is-hidden">ユーザーを表示</span></button>
              </li>
              <li><button type="button" class="ui-contextMenu-listItem entry-comment-reportViolation js-bookmark-report-violation-button">通報する</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="entry-comment-contents  js-ignorable-user-content js-bookmark-item js-user-bookmark-comment" data-user-name="hasiduki" data-url="https://anond.hatelabo.jp/20240128201444">
  <div class="entry-comment-contents-main">
    <a href="/hasiduki/" class="entry-user-icon" data-gtm-label="entry-recent-icon"><img src="https://cdn.profile-image.st-hatena.com/users/hasiduki/profile.png"/ alt="hasiduki" title="hasiduki"></a>
    <div class="entry-comments-contents-body">
        <span class="entry-comment-username"><a href="/hasiduki/" data-gtm-label="entry-recent-username">hasiduki</a></span>
      <span class="entry-comment-text js-bookmark-comment">選挙ってのは革命のシステム化なのねん！！！！！</span>
      <ul class="entry-comment-tags">
      </ul>
      <div class="entry-comment-contents-foot">
        <p class="entry-comment-meta">
          <span class="entry-comment-timestamp"><a class="js-bookmark-anchor-path" data-gtm-label="entry-recent-timestamp" href="https://b.hatena.ne.jp/hasiduki/20240201#bookmark-4748627046902934255">2024/02/01</a></span>
            <span class="entry-comment-permalink">
            <a data-gtm-label="entry-recent-permalink" href="/entry/4748627046902934255/comment/hasiduki" rel="">リンク</a>
            </span>
          <span class="list-star-container js-list-star-container"></span>
          <span class="twitter-click js-short-url-clicks"></span>
        </p>
        <div class="entry-comment-menus">
          <div class="js-add-star-container add-star-container"></div>
          <div data-location-id="4748627046902934255" data-user-name="hasiduki" class="is-hidden js-bookmark-downvote-container entry-comment-menu-minusvote">
            <input type="checkbox" class="js-bookmark-downvote-checkbox entry-comment-menu-minusvote-checkbox" title="マイナス評価">
          </div>
          <div class="ui-contextMenu entry-comment-menu-more js-bookmark-menu-button" onclick>
            <div class="ui-contextMenu-btn entry-comment-menu-more-btn" tabindex="0" role="button"><span>その他</span></div>
            <div class="ui-contextMenu-list entry-comment-menu-more-list">
              <ul tabindex="-1">
                <li>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-followuser js-entry-comment-followuser">お気に入りに追加</button>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-unfollowuser js-entry-comment-unfollowuser is-hidden">お気に入りを解除</button>
                </li>
                <li>
                <button type="button" class="ui-contextMenu-listItem entry-comment-ignoreuser js-entry-comment-ignoreuser">ユーザーを非表示</button>
                <button type="button" class="ui-contextMenu-listItem entry-comment-unignoreuser js-entry-comment-unignoreuser is-hidden" data-unignore-msg-hover="ユーザーを表示" data-unignore-msg="非表示に設定済み"><span class="is-hidden">ユーザーを表示</span></button>
              </li>
              <li><button type="button" class="ui-contextMenu-listItem entry-comment-reportViolation js-bookmark-report-violation-button">通報する</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="entry-comment-contents  js-ignorable-user-content js-bookmark-item js-user-bookmark-comment" data-user-name="musmusculus" data-url="https://anond.hatelabo.jp/20240128201444">
  <div class="entry-comment-contents-main">
    <a href="/musmusculus/" class="entry-user-icon" data-gtm-label="entry-recent-icon"><img src="https://cdn.profile-image.st-hatena.com/users/musmusculus/profile.png"/ alt="musmusculus" title="musmusculus"></a>
    <div class="entry-comments-contents-body">
        <span class="entry-comment-username"><a href="/musmusculus/" data-gtm-label="entry-recent-username">musmusculus</a></span>
      <span class="entry-comment-text js-bookmark-comment">現状に対する責任は自民党にある（責任と原因は必ずしも同値ではない）。「野党でも上手く行く根拠がない」は仮定や未来の話であって別問題。自民が支持を落としても野党支持に繋がらないとか、そちらの問題。</span>
      <ul class="entry-comment-tags">
      </ul>
      <div class="entry-comment-contents-foot">
        <p class="entry-comment-meta">
          <span class="entry-comment-timestamp"><a class="js-bookmark-anchor-path" data-gtm-label="entry-recent-timestamp" href="https://b.hatena.ne.jp/musmusculus/20240131#bookmark-4748627046902934255">2024/01/31</a></span>
            <span class="entry-comment-permalink">
            <a data-gtm-label="entry-recent-permalink" href="/entry/4748627046902934255/comment/musmusculus" rel="">リンク</a>
            </span>
          <span class="list-star-container js-list-star-container"></span>
          <span class="twitter-click js-short-url-clicks"></span>
        </p>
        <div class="entry-comment-menus">
          <div class="js-add-star-container add-star-container"></div>
          <div data-location-id="4748627046902934255" data-user-name="musmusculus" class="is-hidden js-bookmark-downvote-container entry-comment-menu-minusvote">
            <input type="checkbox" class="js-bookmark-downvote-checkbox entry-comment-menu-minusvote-checkbox" title="マイナス評価">
          </div>
          <div class="ui-contextMenu entry-comment-menu-more js-bookmark-menu-button" onclick>
            <div class="ui-contextMenu-btn entry-comment-menu-more-btn" tabindex="0" role="button"><span>その他</span></div>
            <div class="ui-contextMenu-list entry-comment-menu-more-list">
              <ul tabindex="-1">
                <li>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-followuser js-entry-comment-followuser">お気に入りに追加</button>
                  <button type="button" class="ui-contextMenu-listItem entry-comment-unfollowuser js-entry-comment-unfollowuser is-hidden">お気に入りを解除</button>
                </li>
                <li>
                <button type="button" class="ui-contextMenu-listItem entry-comment-ignoreuser js-entry-comment-ignoreuser">ユーザーを非表示</button>
                <button type="button" class="ui-contextMenu-listItem entry-comment-unignoreuser js-entry-comment-unignoreuser is-hidden" data-unignore-msg-hover="ユーザーを表示" data-unignore-msg="非表示に設定済み"><span class="is-hidden">ユーザーを表示</span></button>
              </li>
              <li><button type="button" class="ui-contextMenu-listItem entry-comment-reportViolation js-bookmark-report-violation-button">通報する</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
                </div>
                <div class="comment-list-collaplse-box js-comment-list-collaplse is-hidden">
                  <div class="comment-list-collaplse">
                    <button class="js-comment-list-expand-button">コメントの続きを表示</button>
                  </div>
                </div>
              <div class="entry-comment-readmore js-read-more">
                <button id="new-bookmarks-readmore" class="js-read-more-button entry-comment-readmore-btn">
                  <span class="js-read-more-label js-read-more-ready">Readmore</span>
                  <span class="js-read-more-label js-read-more-waiting is-hidden">残りのブックマークを読み込んでいます..</span>
                  <span class="js-read-more-label js-read-more-error is-hidden">残りのブックマークを読み込めませんでした</span>
                </button>
              </div>
              </div>
            </div>
            <div class="entry-comment-box-guest js-entry-comment-guest is-hidden">
              <a href="https://www.hatena.ne.jp/register?location=https%3A%2F%2Fb.hatena.ne.jp%2Fmy%2Fadd.confirm%3Furl%3Dhttps%253A%252F%252Fanond.hatelabo.jp%252F20240128201444%26registered_from%3Dentry-comment-user-icon&amp;via=201038" class="entry-comment-user-icon js-register-modal-link" data-gtm-label="entry-comment-user-icon"><img src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/profile.gif" alt="ゲスト" title="ゲスト"></a>
              <div class="entry-comment-main">
                <a href="https://www.hatena.ne.jp/register?location=https%3A%2F%2Fb.hatena.ne.jp%2Fmy%2Fadd.confirm%3Furl%3Dhttps%253A%252F%252Fanond.hatelabo.jp%252F20240128201444%26registered_from%3Dentry-comment-form&amp;via=201038" class="entry-comment-form js-register-modal-link" data-gtm-label="entry-comment-form">コメントするにはログインが必要です</a>
                <a href="https://www.hatena.ne.jp/register?location=https%3A%2F%2Fb.hatena.ne.jp%2Fmy%2Fadd.confirm%3Furl%3Dhttps%253A%252F%252Fanond.hatelabo.jp%252F20240128201444%26registered_from%3Dentry-comment-button&amp;via=201038" class="entry-comment-button js-register-modal-link" data-gtm-label="entry-comment-button"><span>ログインしてコメント</span></a>
              </div>
            </div>
            <div class="entry-comment-box-login js-entry-myBookmark-form-button is-hidden">
              <button type="button" class="entry-myBookmark-form-button"><span>コメントを追加</span></button>
            </div>
            <div class="entry-comment-note-wrapper">
              <p class="entry-comment-note">注目コメント算出アルゴリズムの一部にヤフー株式会社の「建設的コメント順位付けモデルAPI」を使用しています</p>
            </div>
          </div>
        </div>
        <div class="entry-subMenu">
          <button type="button" class="js-entry-subMenu-embed entry-subMenu-embed" data-gtm-label="entry-subMenu-embed">リンクを埋め込む</button>
          <div class="entry-embedModal js-entry-embed-modal is-hidden">
            <div class="entry-embedModal-window js-entry-embed-modal-window">
              <h3 class="entry-embedModal-title">リンクを埋め込む</h3>
              <p class="entry-embedModal-description">以下のコードをコピーしてサイトに埋め込むことができます</p>
              <textarea name="" id="" class="entry-embedModal-textarea js-entry-embed-textarea" readonly>
<iframe marginwidth="0" marginheight="0" src="https://b.hatena.ne.jp/entry.parts?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240128201444" scrolling="no" frameborder="0" height="230" width="500"><div class="hatena-bookmark-detail-info"><a href="https://anond.hatelabo.jp/20240128201444">本当に自民党のせいなの？</a><a href="https://b.hatena.ne.jp/entry/s/anond.hatelabo.jp/20240128201444">はてなブックマーク - 本当に自民党のせいなの？</a></div></iframe>
</textarea>
              <h5 class="entry-embedModal-preview">プレビュー</h5>
              <div class="js-entry-embed-modal-preview" data-src-url="https://b.hatena.ne.jp/entry.parts?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240128201444">
<iframe marginwidth="0" marginheight="0" src="" scrolling="no" frameborder="0" height="230" width="500"><div class="hatena-bookmark-detail-info"><a href="https://anond.hatelabo.jp/20240128201444">本当に自民党のせいなの？</a><a href="https://b.hatena.ne.jp/entry/s/anond.hatelabo.jp/20240128201444">はてなブックマーク - 本当に自民党のせいなの？</a></div></iframe>
              </div>
              <div class="entry-embedModal-menu">
                <div class="entry-embedModal-others">
                  <p class="entry-embedModal-item"><a href="/guide/bbutton?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240128201444">はてなブックマークボタンを作成して埋め込むこともできます</a></p>
                </div>
              </div>
              <button type="button" class="entry-embedModal-close js-entry-embed-modal-close"><img src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/entry/overlay-close-gray.svg" alt="閉じる"></button>
            </div>
          </div>
          <div class="js-entry-submenu-only-logged-in is-hidden" data-url="https://anond.hatelabo.jp/20240128201444">
            <aside id="owner-bookmark-visibility" class="js-entry-owners-data entry-subMenu-owners" data-entry-url="https://anond.hatelabo.jp/20240128201444">
              <script type="text/x-template" id="owner-bookmark-visibility-template">
                <span class="entry-subMenu-owners-help">このページのオーナーなので<br>コメントを非表示にできます</span>
                <a href="/my/site/https%3A%2F%2Fanond.hatelabo.jp%2F20240128201444/visibility">コメント表示の設定</a>
              </script>
            </aside>
            <span class="entry-subMenu-report js-entry-submenu-report" data-gtm-label="entry-subMenu-report"><a href="#">規約違反を報告</a></span>
          </div>
        </div>
        <div class="entry-app-link">
          <img class="entry-app-link-image" src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/entry/app-screenshot.png" alt="アプリのスクリーンショット">
          <div class="entry-app-link-description">
            <div class="entry-app-link-description-innner">
              いまの話題をアプリでチェック！
              <ul class="entry-app-link-list">
                <li class="entry-app-link-item">バナー広告なし</li>
                <li class="entry-app-link-item">ミュート機能あり</li>
                <li class="entry-app-link-item">ダークモード搭載</li>
              </ul>
              <a class="entry-app-link-btn styleguide-btn-primary" href="https://hatenabookmark.page.link/app">アプリをダウンロード</a>
            </div>
          </div>
        </div>
        <div class="entry-ad-pc-rectangle-double">
          <div id="entry-double-rectangle-left"></div>
          <div id="entry-double-rectangle-right"></div>
        </div>
        <div class="entry-ad-sp-rectangle">
          <div id="entry-ad-sp-below-comments"></div>
        </div>
        <section class="entry-relationContents">
          <h3 class="entry-relationContents-sectionTitle">関連記事</h3>
          <ul class="entry-relationContents-list js-entry-relationContents-list" data-entry-url="https://anond.hatelabo.jp/20240128201444">
            <script type="text/x-template" id="entry-relationContents-template">
              <li>
                <div class="entry-relationContents-text">
                  <img src="{{ favicon_url }}" alt="" width="16px" height="16px" class="entry-relationContents-favicon">
                  <h4 class="entry-relationContents-title"><a href="{{ entry_url }}" title="{{ title }}" data-gtm-label="entry-relationContents-title">{{ truncated_title }}</a></h4>
                  <p><span class="entry-relationContents-users"><a href="{{ entry_url }}" data-gtm-label="entry-relationContents-users">{{ total_bookmarks_with_user_postfix }}</a></span><span class="entry-relationContents-domain"><a href="{{ site_search_url }}" data-gtm-label="entry-relationContents-domain">{{ root_title }}</a></span></p>
                </div>
              </li>
            </script>
          </ul>
        </section>
        <div class="entry-notificationModal js-first-bookmark-modal is-hidden" >
          <div class="entry-notificationModal-window js-modal-content">
            <div class="entry-notificationModal-image js-first-bookmark-animation"></div>
            <h3 class="entry-notificationModal-title"><span class="js-first-bookmark-count"></span>usersに達しました！</h3>
            <p class="entry-notificationModal-text"><span class="js-first-bookmarker-name"></span>さんが1番目にブックマークした記事「本当に自民党のせ...」が注目されています。</p>
            <p class="entry-notificationModal-share-text">気持ちをシェアしよう</p>
            <a href="" target="_blank" rel="noopener" class="entry-notificationModal-share-button js-entry-notificationModal-share-button"
               data-gtm-click-label="first-bookmark-share-twitter">
               ツイートする
            </a>
            <button type="button" class="entry-notificationModal-close js-modal-close-button">
              <img class="entry-notificationModal-closeImage-pc" src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/entry/overlay-close-gray.svg" alt="閉じる">
              <img class="entry-notificationModal-closeImage-sp" src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/entry/overlay-close.svg" alt="閉じる">
            </button>
          </div>
        </div>
      </div>
      <div class="entry-aside">
        <div class="entry-ad-pc-rectangle">
          <div id="entry-rectangle-top-right"></div>
        </div>
        <section class="entry-about js-entry-about">
          <h2 class="entry-about-title"><span class="js-entry-title">本当に自民党のせいなの？</span></h2>
          <a rel="nofollow" href="https://anond.hatelabo.jp/20240128201444" class="js-entry-link is-hidden"></a>
          <p class="entry-about-description js-entry-about-description">
            <span class="js-entry-description-short"><a data-gtm-click-label="entry-summary-keyword" href="/q/%E8%87%AA%E6%B0%91%E5%85%9A">自民党</a>のせいだって言われても全然しっくりこないんだけど 例えば、経済が良くなりません <a data-gtm-click-label="entry-summary-keyword" href="/q/%E8%87%AA%E6%B0%91%E5%85%9A">自民党</a>のせい...<button type="button" class="js-entry-about-description-readmore entry-about-description-readmore" data-gtm-label="entry-about-readMore">概要を表示</button></span>
            <span class="js-entry-description-all is-hidden"><a data-gtm-click-label="entry-summary-keyword" href="/q/%E8%87%AA%E6%B0%91%E5%85%9A">自民党</a>のせいだって言われても全然しっくりこないんだけど 例えば、経済が良くなりません <a data-gtm-click-label="entry-summary-keyword" href="/q/%E8%87%AA%E6%B0%91%E5%85%9A">自民党</a>のせいです って言われてもさ 野党だったら経済が良くなるって根拠がないじゃん 仮に野党側のどっかの政党が政権担当してたとして、それなら経済良くなってたってどうして思えるの？ 野党がなにかひた隠しにしてるスーパー経済政策でもあるのか？</span>
          </p>
          <div class="entry-about-star">
            <div class="js-list-star-container"></div>
            <div class="js-add-star-container add-star-container"></div>
          </div>
          <ul class="entry-tags">
              <li><a href="/q/%E8%87%AA%E6%B0%91%E5%85%9A" class="entry-tags-contents" data-gtm-label="entry-about-tags">自民党</a></li>
              <li><a href="/q/%E5%A2%97%E7%94%B0" class="entry-tags-contents" data-gtm-label="entry-about-tags">増田</a></li>
              <li><a href="/q/%E7%B5%8C%E6%B8%88" class="entry-tags-contents" data-gtm-label="entry-about-tags">経済</a></li>
              <li><a href="/q/%E6%94%BF%E6%B2%BB" class="entry-tags-contents" data-gtm-label="entry-about-tags">政治</a></li>
              <li><a href="/q/%E8%A1%8C%E6%94%BF" class="entry-tags-contents" data-gtm-label="entry-about-tags">行政</a></li>
              <li><a href="/q/%E3%81%82%E3%81%A8%E3%81%A7%E8%AA%AD%E3%82%80" class="entry-tags-contents" data-gtm-label="entry-about-tags">あとで読む</a></li>
              <li><a href="/q/%E3%83%8D%E3%82%BF" class="entry-tags-contents" data-gtm-label="entry-about-tags">ネタ</a></li>
          </ul>
        </section>
        <section class="entry-bookmarkUsers js-bookmarker-icons">
          <h3 class="entry-bookmarkUsers-title">ブックマークしたユーザー</h3>
          <ul class="entry-bookmarkUsers-list js-bookmarkers">
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="chocolatedisco1053" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">chocolatedisco1053</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/chocolatedisco1053/profile.png" alt="chocolatedisco1053" title="chocolatedisco1053"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="mag4n" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">mag4n</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/mag4n/profile.png" alt="mag4n" title="mag4n"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="aox" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">aox</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/aox/profile.png" alt="aox" title="aox"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="death_yasude" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">death_yasude</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/death_yasude/profile.png" alt="death_yasude" title="death_yasude"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="kuzudokuzu" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">kuzudokuzu</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/kuzudokuzu/profile.png" alt="kuzudokuzu" title="kuzudokuzu"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="ht_s" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">ht_s</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/ht_s/profile.png" alt="ht_s" title="ht_s"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="shoot_c_na" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">shoot_c_na</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/shoot_c_na/profile.png" alt="shoot_c_na" title="shoot_c_na"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="kk255" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">kk255</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/kk255/profile.png" alt="kk255" title="kk255"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="soyokazeZZ" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">soyokazeZZ</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/soyokazeZZ/profile.png" alt="soyokazeZZ" title="soyokazeZZ"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="mohno" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">mohno</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/mohno/profile.png" alt="mohno" title="mohno"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="junkfoodboy01" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">junkfoodboy01</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/junkfoodboy01/profile.png" alt="junkfoodboy01" title="junkfoodboy01"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="dorje2009" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">dorje2009</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/dorje2009/profile.png" alt="dorje2009" title="dorje2009"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="lbtmplz" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">lbtmplz</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/lbtmplz/profile.png" alt="lbtmplz" title="lbtmplz"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="vamos02" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">vamos02</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/vamos02/profile.png" alt="vamos02" title="vamos02"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="yoiIT" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">yoiIT</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/yoiIT/profile.png" alt="yoiIT" title="yoiIT"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="nimroder" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">nimroder</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/nimroder/profile.png" alt="nimroder" title="nimroder"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="ssssschang" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">ssssschang</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/ssssschang/profile.png" alt="ssssschang" title="ssssschang"/>
</li>
<li role="link" tabIndex="0" class="bookmarker js-bookmarker js-ignorable-user-content" data-gtm-label="entry-bookmarkUsers-icon" data-user-name="hoshitamotsu" data-created="20240201" data-location-id="4748627046902934255">
  <span class="entry-bookmarkUsers-meta">
    <span class="entry-bookmarkUsers-userName">hoshitamotsu</span><span class="entry-bookmarkUsers-timestamp">2024/02/01</span>
  </span>
  <img src="https://cdn.profile-image.st-hatena.com/users/hoshitamotsu/profile.png" alt="hoshitamotsu" title="hoshitamotsu"/>
</li>
          </ul>
          <div class="entry-bookmarkUsers-readMore">
            <span class="entry-bookmarkUsers-readMore-wrapper">
              <button class="entry-bookmarkUsers-readMore-btn js-all-bookmarkers-modal-open" data-gtm-label="entry-bookmarkUsers-readMore">すべてのユーザーを見る</button>
              <span class="entry-bookmarkUsers-readMore-popup">すべてのユーザーの<br>詳細を表示します</span>
            </span>
          </div>
          <div class="entry-usersModal js-all-bookmarkers-modal is-hidden">
            <div class="is-active entry-usersModal-window js-all-bookmarkers-modal-window js-bookmark-autoloader-all" data-sort="all" data-autoload-url="https://anond.hatelabo.jp/20240128201444" data-next-cursor="MTcwNjcxNTg3MSw3MTA0MDg4ODQ1NzI4NjU2Mg==">
              <button type="button" class="entry-usersModal-close js-all-bookmarkers-modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="5748.793 -620.207 21.414 21.414">
                  <defs><style>.cls-1 { fill: none; stroke-width: 2px; }</style></defs>
                  <g>
                    <title>閉じる</title>
                    <desc>モーダルを閉じます</desc>
                    <path id="line1" d="M5769.5-619.5l-20 20"/><path id="line2" d="M5769.5-599.5l-20-20"/>
                  </g>
                </svg>
              </button>
              <h4 class="entry-usersModal-title">ブックマークしたすべてのユーザー</h4>
              <div class="entry-usersModal-contents js-scrollable">
                <div class="js-bookmarks js-bookmarks-all">
                </div>
              <div class="entry-comment-readmore js-read-more">
                <button id="all-bookmarks-readmore" class="js-read-more-button entry-comment-readmore-btn">
                  <span class="js-read-more-label js-read-more-ready">Readmore</span>
                  <span class="js-read-more-label js-read-more-waiting is-hidden">残りのブックマークを読み込んでいます..</span>
                  <span class="js-read-more-label js-read-more-error is-hidden">残りのブックマークを読み込めませんでした</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </section>
        <div class="entry-ad-pc-rectangle">
          <div id="entry-rectangle-bottom-right"></div>
        </div>
      </div>
    </div>
    <div class="entry-ad-sp-rectangle">
      <div id="entry-touch-a-rectangle"></div>
    </div>
    <section class="entry-group">
        <h2 class="entry-group-sectionTitle"><a href="/site/anond.hatelabo.jp/?sort=eid" data-gtm-label="entry-entrylistSameDomain-sectionTitle">同じサイトの新着</a></h2>
        <ul class="entry-group-list">
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/anond.hatelabo.jp/20240201014021" title="書き換え増田に全面的に同意する。ブコメもTwitterも最悪だった。 そしてここ.." data-gtm-label="entry-entrylistSameDomain-title">書き換え増田に全面的に同意する。ブコメもTwitterも最悪だった。 そしてここ..</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/anond.hatelabo.jp/20240201014021" data-gtm-label="entry-entrylistSameDomain-users">1 user</a></span><span class="entry-group-domain"><a href="/site/anond.hatelabo.jp/" data-gtm-label="entry-entrylistSameDomain-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240201014021" alt="">anond.hatelabo.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/anond.hatelabo.jp/20240201015821" title="逆算ゼロの人生を送ってきて現在" data-gtm-label="entry-entrylistSameDomain-title">逆算ゼロの人生を送ってきて現在</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/anond.hatelabo.jp/20240201015821" data-gtm-label="entry-entrylistSameDomain-users">1 user</a></span><span class="entry-group-domain"><a href="/site/anond.hatelabo.jp/" data-gtm-label="entry-entrylistSameDomain-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240201015821" alt="">anond.hatelabo.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/anond.hatelabo.jp/20240201015432" title="いつか自衛隊の弱さが露呈した未来で自衛隊TUEEEEものを読みたい" data-gtm-label="entry-entrylistSameDomain-title">いつか自衛隊の弱さが露呈した未来で自衛隊TUEEEEものを読みたい</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/anond.hatelabo.jp/20240201015432" data-gtm-label="entry-entrylistSameDomain-users">1 user</a></span><span class="entry-group-domain"><a href="/site/anond.hatelabo.jp/" data-gtm-label="entry-entrylistSameDomain-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240201015432" alt="">anond.hatelabo.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/anond.hatelabo.jp/20240201014306" title="セクシー田中さんの脚本家は善意の第三者だったのか？" data-gtm-label="entry-entrylistSameDomain-title">セクシー田中さんの脚本家は善意の第三者だったのか？</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/anond.hatelabo.jp/20240201014306" data-gtm-label="entry-entrylistSameDomain-users">3 users</a></span><span class="entry-group-domain"><a href="/site/anond.hatelabo.jp/" data-gtm-label="entry-entrylistSameDomain-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240201014306" alt="">anond.hatelabo.jp</a></span></p>
    </div>
  </div>
</li>
        </ul>
        <p class="entry-group-readmore">
          <a href="/site/anond.hatelabo.jp/?sort=eid" data-gtm-label="entry-entrylistSameDomain-readMore">同じサイトの新着をもっと読む</a>
        </p>
    </section>
    <section class="entry-group">
        <h2 class="entry-group-sectionTitle"><a href="/hotentry" data-gtm-label="entry-hotentry-sectionTitle">いま人気の記事</a></h2>
        <ul class="entry-group-list">
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/ongakudaisukiclub.hateblo.jp/entry/2024/01/31/190000" title="ネットの音楽オタクが選んだ2023年のベストアルバム 50→1 - 音楽だいすきクラブ" data-gtm-label="entry-hotentry-title">ネットの音楽オタクが選んだ2023年のベストアルバム 50→1 - 音楽だいすきクラブ</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/ongakudaisukiclub.hateblo.jp/entry/2024/01/31/190000" data-gtm-label="entry-hotentry-users">239 users</a></span><span class="entry-group-domain"><a href="/site/ongakudaisukiclub.hateblo.jp/" data-gtm-label="entry-hotentry-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fongakudaisukiclub.hateblo.jp%2Fentry%2F2024%2F01%2F31%2F190000" alt="">ongakudaisukiclub.hateblo.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/anond.hatelabo.jp/20240131140400" title="妻に合わせると旅行がめちゃくちゃつまらない" data-gtm-label="entry-hotentry-title">妻に合わせると旅行がめちゃくちゃつまらない</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/anond.hatelabo.jp/20240131140400" data-gtm-label="entry-hotentry-users">458 users</a></span><span class="entry-group-domain"><a href="/site/anond.hatelabo.jp/" data-gtm-label="entry-hotentry-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fanond.hatelabo.jp%2F20240131140400" alt="">anond.hatelabo.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/blog.livedoor.jp/nwknews/archives/6107616.html" title="泉谷しげるさん、松本人志さんの騒動の意見が的確過ぎて誰もコメントできない : 哲学ニュースnwk" data-gtm-label="entry-hotentry-title">泉谷しげるさん、松本人志さんの騒動の意見が的確過ぎて誰もコメントできない : 哲学ニュースnwk</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/blog.livedoor.jp/nwknews/archives/6107616.html" data-gtm-label="entry-hotentry-users">184 users</a></span><span class="entry-group-domain"><a href="/site/blog.livedoor.jp/nwknews/" data-gtm-label="entry-hotentry-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=http%3A%2F%2Fblog.livedoor.jp%2Fnwknews%2Farchives%2F6107616.html" alt="">blog.livedoor.jp/nwknews</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/scrapbox.io/yuiseki/%E3%82%AB%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%E9%9D%A2%E8%AB%87_%E9%80%86%E8%B3%AA%E5%95%8F%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC" title="カジュアル面談 逆質問テンプレ - yuiseki" data-gtm-label="entry-hotentry-title">カジュアル面談 逆質問テンプレ - yuiseki</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/scrapbox.io/yuiseki/%E3%82%AB%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%E9%9D%A2%E8%AB%87_%E9%80%86%E8%B3%AA%E5%95%8F%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC" data-gtm-label="entry-hotentry-users">849 users</a></span><span class="entry-group-domain"><a href="/site/scrapbox.io/yuiseki/" data-gtm-label="entry-hotentry-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fscrapbox.io%2Fyuiseki%2F%25E3%2582%25AB%25E3%2582%25B8%25E3%2583%25A5%25E3%2582%25A2%25E3%2583%25AB%25E9%259D%25A2%25E8%25AB%2587_%25E9%2580%2586%25E8%25B3%25AA%25E5%2595%258F%25E3%2583%2586%25E3%2583%25B3%25E3%2583%2597%25E3%2583%25AC" alt="">scrapbox.io/yuiseki</a></span></p>
    </div>
  </div>
</li>
        </ul>
        <p class="entry-group-readmore">
          <a href="/hotentry" data-gtm-label="entry-hotentry-readMore">いま人気の記事をもっと読む</a>
        </p>
    </section>
    <section class="entry-group">
        <h2 class="entry-group-sectionTitle"><a href="/hotentry/economics" data-gtm-label="entry-hotentryCategory-sectionTitle">いま人気の記事 - 政治と経済</a></h2>
        <ul class="entry-group-list js-entry-hotentry-list-category" data-category="economics" data-section-type="hotentryCategory">
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/newswitch.jp/p/40257" title="核融合発電「原型炉」開発着手へ、量研機構が主体に ニュースイッチ by 日刊工業新聞社" data-gtm-label="entry-hotentryCategory-title">核融合発電「原型炉」開発着手へ、量研機構が主体に ニュースイッチ by 日刊工業新聞社</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/newswitch.jp/p/40257" data-gtm-label="entry-hotentryCategory-users">111 users</a></span><span class="entry-group-domain"><a href="/site/newswitch.jp/" data-gtm-label="entry-hotentryCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fnewswitch.jp%2Fp%2F40257" alt="">newswitch.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.jcp.or.jp/akahata/aik23/2024-01-31/2024013104_01_0.html" title="京都市長選　市民と共産党が手つなぎ自民党政治と対決/三つの争点　田村委員長の訴え（詳報）" data-gtm-label="entry-hotentryCategory-title">京都市長選　市民と共産党が手つなぎ自民党政治と対決/三つの争点　田村委員長の訴え（詳報）</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.jcp.or.jp/akahata/aik23/2024-01-31/2024013104_01_0.html" data-gtm-label="entry-hotentryCategory-users">12 users</a></span><span class="entry-group-domain"><a href="/site/www.jcp.or.jp/" data-gtm-label="entry-hotentryCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.jcp.or.jp%2Fakahata%2Faik23%2F2024-01-31%2F2024013104_01_0.html" alt="">www.jcp.or.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.cnn.co.jp/world/35214611.html" title="イスラエル軍、ハマスのトンネルと疑われる施設に「大量の水」注入" data-gtm-label="entry-hotentryCategory-title">イスラエル軍、ハマスのトンネルと疑われる施設に「大量の水」注入</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.cnn.co.jp/world/35214611.html" data-gtm-label="entry-hotentryCategory-users">19 users</a></span><span class="entry-group-domain"><a href="/site/www.cnn.co.jp/" data-gtm-label="entry-hotentryCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.cnn.co.jp%2Fworld%2F35214611.html" alt="">www.cnn.co.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.jiji.com/jc/article?k=2024013100743&amp;g=int" title="スウィフトさん、トランプ氏の脅威に？　歌姫に右派の中傷激化―米大統領選：時事ドットコム" data-gtm-label="entry-hotentryCategory-title">スウィフトさん、トランプ氏の脅威に？　歌姫に右派の中傷激化―米大統領選：時事ドットコム</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.jiji.com/jc/article?k=2024013100743&amp;g=int" data-gtm-label="entry-hotentryCategory-users">12 users</a></span><span class="entry-group-domain"><a href="/site/www.jiji.com/" data-gtm-label="entry-hotentryCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.jiji.com%2Fjc%2Farticle%3Fk%3D2024013100743%26g%3Dint" alt="">www.jiji.com</a></span></p>
    </div>
  </div>
</li>
        </ul>
        <p class="entry-group-readmore">
          <a href="/hotentry/economics" data-gtm-label="entry-hotentryCategory-readMore">いま人気の記事 - 政治と経済をもっと読む</a>
        </p>
    </section>
    <section class="entry-group">
        <h2 class="entry-group-sectionTitle"><a href="/entrylist/economics" data-gtm-label="entry-entrylistCategory-sectionTitle">新着記事 - 政治と経済</a></h2>
        <ul class="entry-group-list">
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.jiji.com/jc/article?k=2024013100743&amp;g=int" title="スウィフトさん、トランプ氏の脅威に？　歌姫に右派の中傷激化―米大統領選：時事ドットコム" data-gtm-label="entry-entrylistCategory-title">スウィフトさん、トランプ氏の脅威に？　歌姫に右派の中傷激化―米大統領選：時事ドットコム</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.jiji.com/jc/article?k=2024013100743&amp;g=int" data-gtm-label="entry-entrylistCategory-users">12 users</a></span><span class="entry-group-domain"><a href="/site/www.jiji.com/" data-gtm-label="entry-entrylistCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.jiji.com%2Fjc%2Farticle%3Fk%3D2024013100743%26g%3Dint" alt="">www.jiji.com</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.jcp.or.jp/akahata/aik23/2024-01-31/2024013104_01_0.html" title="京都市長選　市民と共産党が手つなぎ自民党政治と対決/三つの争点　田村委員長の訴え（詳報）" data-gtm-label="entry-entrylistCategory-title">京都市長選　市民と共産党が手つなぎ自民党政治と対決/三つの争点　田村委員長の訴え（詳報）</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.jcp.or.jp/akahata/aik23/2024-01-31/2024013104_01_0.html" data-gtm-label="entry-entrylistCategory-users">12 users</a></span><span class="entry-group-domain"><a href="/site/www.jcp.or.jp/" data-gtm-label="entry-entrylistCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.jcp.or.jp%2Fakahata%2Faik23%2F2024-01-31%2F2024013104_01_0.html" alt="">www.jcp.or.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/nordot.app/1125361109430124690" title="自民・下村氏、不記載476万円　元事務総長、議員辞職は否定 ｜ 共同通信" data-gtm-label="entry-entrylistCategory-title">自民・下村氏、不記載476万円　元事務総長、議員辞職は否定 ｜ 共同通信</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/nordot.app/1125361109430124690" data-gtm-label="entry-entrylistCategory-users">8 users</a></span><span class="entry-group-domain"><a href="/site/nordot.app/" data-gtm-label="entry-entrylistCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fnordot.app%2F1125361109430124690" alt="">nordot.app</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.itmedia.co.jp/news/articles/2401/31/news163.html" title="パナソニック、シフトール全株式を譲渡　クリーク・アンド・リバーに" data-gtm-label="entry-entrylistCategory-title">パナソニック、シフトール全株式を譲渡　クリーク・アンド・リバーに</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.itmedia.co.jp/news/articles/2401/31/news163.html" data-gtm-label="entry-entrylistCategory-users">11 users</a></span><span class="entry-group-domain"><a href="/site/www.itmedia.co.jp/" data-gtm-label="entry-entrylistCategory-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.itmedia.co.jp%2Fnews%2Farticles%2F2401%2F31%2Fnews163.html" alt="">www.itmedia.co.jp</a></span></p>
    </div>
  </div>
</li>
        </ul>
        <p class="entry-group-readmore">
          <a href="/entrylist/economics" data-gtm-label="entry-entrylistCategory-readMore">新着記事 - 政治と経済をもっと読む</a>
        </p>
    </section>
    <div class="entry-ad-sp-rectangle">
      <div id="entry-touch-rectangle"></div>
    </div>
    <section class="entry-group">
      <div class="entry-pager-container">
        <h2 class="entry-group-sectionTitle">同時期にブックマークされた記事</h2>
        <ul class="entry-group-list">
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/lovelybook.blog.fc2.com/" title="トップページ - いくつになってもキレイでいられる秘密の美容" data-gtm-label="entry-entrylistSameperiod-title">トップページ - いくつになってもキレイでいられる秘密の美容</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/lovelybook.blog.fc2.com/" data-gtm-label="entry-entrylistSameperiod-users">1 user</a></span><span class="entry-group-domain"><a href="/site/lovelybook.blog.fc2.com/" data-gtm-label="entry-entrylistSameperiod-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Flovelybook.blog.fc2.com%2F" alt="">lovelybook.blog.fc2.com</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/togetter.com/li/2305432" title="育ちのいい友人が「最近悪いこと覚えちゃって…」って言うから、何！？って身構えたら内容がかわいすぎて倒れそうになった" data-gtm-label="entry-entrylistSameperiod-title">育ちのいい友人が「最近悪いこと覚えちゃって…」って言うから、何！？って身構えたら内容がかわいすぎて倒れそうになった</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/togetter.com/li/2305432" data-gtm-label="entry-entrylistSameperiod-users">36 users</a></span><span class="entry-group-domain"><a href="/site/togetter.com/" data-gtm-label="entry-entrylistSameperiod-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Ftogetter.com%2Fli%2F2305432" alt="">togetter.com</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/scan.netsecurity.ne.jp/article/2024/01/31/50533.html" title="LINE キャンペーンで個人情報閲覧可能に、デジタルギフト配信登録作業時のミスが原因 | ScanNetSecurity" data-gtm-label="entry-entrylistSameperiod-title">LINE キャンペーンで個人情報閲覧可能に、デジタルギフト配信登録作業時のミスが原因 | ScanNetSecurity</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/scan.netsecurity.ne.jp/article/2024/01/31/50533.html" data-gtm-label="entry-entrylistSameperiod-users">1 user</a></span><span class="entry-group-domain"><a href="/site/scan.netsecurity.ne.jp/" data-gtm-label="entry-entrylistSameperiod-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fscan.netsecurity.ne.jp%2Farticle%2F2024%2F01%2F31%2F50533.html" alt="">scan.netsecurity.ne.jp</a></span></p>
    </div>
  </div>
</li>
<li>
  <div class="entry-group-list-inner">
    <div class="entry-group-text">
      <h3 class="entry-group-title"><a href="/entry/s/www.johndunning.com/fireworks/about/DynamicSymbols" title="Dynamic Symbols" data-gtm-label="entry-entrylistSameperiod-title">Dynamic Symbols</a></h3>
      <p class="entry-group-meta"><span class="entry-group-users"><a href="/entry/s/www.johndunning.com/fireworks/about/DynamicSymbols" data-gtm-label="entry-entrylistSameperiod-users">2 users</a></span><span class="entry-group-domain"><a href="/site/www.johndunning.com/" data-gtm-label="entry-entrylistSameperiod-domain"><img src="https://cdn-ak2.favicon.st-hatena.com/64?url=https%3A%2F%2Fwww.johndunning.com%2Ffireworks%2Fabout%2FDynamicSymbols" alt="">www.johndunning.com</a></span></p>
    </div>
  </div>
</li>
        </ul>
      </div>
    </section>
  </div>
</div>
<div class="drawer-menu js-drawer-menu">
  <button class="drawer-menu-button js-drawer-menu-button" data-gtm-click-label="drawer-open">
    <span class="drawer-notify-count js-notify-count"></span>
  </button>
  <ul class="drawer-menu-body js-drawer-body-container">
  </ul>
  <script type="text/x-template" id="template-drawer-body">
  {{ #is_login_user }}
  <li class="drawer-loginMenu">
    <a href="/{{ user_name }}/bookmark" class="drawer-loginMenu-username" data-gtm-click-label="drawer-header-username"><img src="{{ profile_image }}" alt="{{ user_name }}" /><span>{{ user_name }}</span></a>
    <button type="button" class="drawer-loginMenu-button js-notify-list-button notify" data-gtm-click-label="drawer-header-notify">
      <span class="drawer-notify-count js-notify-count"></span>
      <span class="hide-text">通知</span>
    </button>
    <span role="link" class="drawer-loginMenu-button config">
      <a href="/{{ user_name }}/config" data-gtm-click-label="drawer-header-config"><span class="hide-text">設定</span></a>
    </span>
  </li>
  {{ /is_login_user }}
  {{ #is_guest_user }}
  <li class="drawer-menu-item">
    <a href="{{ login_url }}" rel="nofollow" data-gtm-click-label="drawer-guest-login"><span>ログイン</span></a>
  </li>
  <li class="drawer-menu-item">
    <a href="/guide" rel="nofollow" data-gtm-click-label="drawer-guest-guide">
      <span>はてなブックマークとは</span>
    </a>
  </li>
  {{ /is_guest_user }}
  <li class="drawer-notify-list js-drawer-notify-list is-loading">
    <img src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/common/loading@2x.gif" class="notify-list-loading-image" alt="読み込み中" />
    <iframe class="notify-list js-notify-list"></iframe>
  </li>
  <li class="drawer-menu-item">
    <a href="/hotentry" data-gtm-click-label="drawer-menu-hotentry">人気エントリー</a>
  </li>
  <li class="drawer-menu-item">
    <a href="/entrylist" data-gtm-click-label="drawer-menu-entrylist">新着エントリー</a>
  </li>
  {{ #is_login_user }}
  <li class="drawer-menu-item">
    <a href="/add" data-gtm-click-label="drawer-menu-bookmarkadd">ブックマークを追加</a>
  </li>
  <li class="drawer-toggleMenu js-drawer-submenu is-open">
    <button type="button" class="drawer-toggleMenu-label js-drawer-submenu-label">マイページ</button>
    <ul class="service-submenu">
      <li class="service-submenu-item">
        <a href="/{{ user_name }}/bookmark" data-gtm-click-label="drawer-mypage-mybookmark">マイブックマーク</a>
      </li>
      <li class="service-submenu-item">
        <a href="/{{ user_name}}/unread_bookmark" data-gtm-click-label="drawer-mypage-unread">あとで読む</a>
      </li>
      <li class="service-submenu-item">
        <a href="/{{ user_name }}/hotentry" data-gtm-click-label="drawer-mypage-myhotentry">マイホットエントリー</a>
      </li>
      <li class="service-submenu-item">
        <a href="/{{ user_name }}/interest" data-gtm-click-label="drawer-mypage-interest">関心ワード</a>
      </li>
      <li class="service-submenu-item">
        <a href="/{{ user_name }}/favorite" data-gtm-click-label="drawer-mypage-favorite">お気に入り</a>
      </li>
    </ul>
  </li>
  {{ /is_login_user }}
  <li class="drawer-toggleMenu js-drawer-submenu is-open">
    <button type="button" class="drawer-toggleMenu-label js-drawer-submenu-label">カテゴリー</button>
    <ul class="service-submenu">
      <li class="service-submenu-item">
        <a href="/hotentry/general" data-gtm-click-label="drawer-category-general">一般</a>
        <a href="/hotentry/social" data-gtm-click-label="drawer-category-social">世の中</a>
        <a href="/hotentry/economics" data-gtm-click-label="drawer-category-economics">政治と経済</a>
        <a href="/hotentry/life" data-gtm-click-label="drawer-category-life">暮らし</a>
        <a href="/hotentry/knowledge" data-gtm-click-label="drawer-category-knowledge">学び</a>
        <a href="/hotentry/it" data-gtm-click-label="drawer-category-it">テクノロジー</a>
        <a href="/hotentry/fun" data-gtm-click-label="drawer-category-fun">おもしろ</a>
        <a href="/hotentry/entertainment" data-gtm-click-label="drawer-category-entertainment">エンタメ</a>
        <a href="/hotentry/game" data-gtm-click-label="drawer-category-game">アニメとゲーム</a>
      </li>
    </ul>
  </li>
  {{ #is_app_target }}
  <li class="drawer-toggleMenu js-drawer-submenu is-open">
    <button type="button" class="drawer-toggleMenu-label js-drawer-submenu-label">アプリをダウンロード</button>
    <ul class="service-submenu">
      {{ #is_ios }}
      <li class="service-submenu-item device-ios app-bookmark">
        <a href="https://apps.apple.com/jp/app/hatenabukkumaku/id354976659?mt=8" data-gtm-click-label="drawer-app-ios">はてなブックマーク</a>
      </li>
      {{ /is_ios }}
      {{ #is_android }}
      <li class="service-submenu-item device-android app-bookmark">
        <a href="https://play.google.com/store/apps/details?id=com.hatena.android.bookmark&amp;referrer=utm_source%3Dbookmark_sp%26utm_campaign%3Dbookmark_sp_drawer&hl=ja" data-gtm-click-label="drawer-app-android">はてなブックマーク</a>
      </li>
      {{ /is_android }}
    </ul>
  </li>
  {{ /is_app_target }}
  </script>
</div>
<script id="valve-dmp" data-service="bookmark" src="//cdn.pool.st-hatena.com/valve/dmp.js" async></script>
<div class="message-modal js-message-modal is-hidden auto-hide">
  <div class="message-modal-message">
    <p class="message-modal-message-text js-message-modal-message-text"></p>
    <button class="message-modal-btn js-message-modal-close-button">閉じる</button>
  </div>
</div>
      <div class="footer">
  <div class="footer-inner">
    <div class="footer-inner-group footer-bookmark">
      <h2 class="footer-title"><a href="/" data-gtm-label="footer-btop">はてなブックマーク</a></h2>
      <div class="footer-list-wrapper">
        <ul class="footer-list footer-list--pc">
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/all" class="hotentry js-keyboard-openable" data-gtm-label="footerCategories-hotentry">総合</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/general" class="general js-keyboard-openable" data-gtm-label="footerCategories-general">一般</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/social" class="cat-social js-keyboard-openable" data-gtm-label="footerCategories-social">世の中</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/economics" class="cat-economics js-keyboard-openable" data-gtm-label="footerCategories-economics">政治と経済</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/life" class="cat-life js-keyboard-openable" data-gtm-label="footerCategories-life">暮らし</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/knowledge" class="cat-knowledge js-keyboard-openable" data-gtm-label="footerCategories-knowledge">学び</a></li>
        </ul>
        <ul class="footer-list footer-list--pc">
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/it" class="cat-it js-keyboard-openable" data-gtm-label="footerCategories-it">テクノロジー</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/entertainment" class="cat-entertainment js-keyboard-openable" data-gtm-label="footerCategories-entertainment">エンタメ</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/game" class="cat-game js-keyboard-openable" data-gtm-label="footerCategories-game">アニメとゲーム</a></li>
          <li class="footer-list-item js-keyboard-selectable-item"><a href="/hotentry/fun" class="cat-fun js-keyboard-openable" data-gtm-label="footerCategories-fun">おもしろ</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-list-item"><a href="/guide/tools">アプリ・拡張機能</a></li>
          <li class="footer-list-item"><a href="https://bookmark.hatenastaff.com/">開発ブログ</a></li>
          <li class="footer-list-item"><a href="/help/">ヘルプ</a></li>
          <li class="footer-list-item"><a href="https://hatena.zendesk.com/hc/ja/categories/900000153166">お問い合わせ</a></li>
          <li class="footer-list-item footer-list-item--sp"><a href="/guide/guideline">ガイドライン</a></li>
          <li class="footer-list-item footer-list-item--sp"><a href="https://policies.hatena.ne.jp/rule">利用規約</a></li>
          <li class="footer-list-item footer-list-item--sp"><a href="https://policies.hatena.ne.jp/privacypolicy-ja">プライバシーポリシー</a></li>
          <li class="footer-list-item footer-list-item--sp"><a href="https://policies.hatena.ne.jp/cookie-policy">利用者情報の外部送信について</a></li>
        </ul>
        <ul class="footer-list footer-list--pc">
          <li class="footer-list-item footer-list-item--pc"><a href="/guide/guideline">ガイドライン</a></li>
          <li class="footer-list-item footer-list-item--pc"><a href="https://policies.hatena.ne.jp/rule">利用規約</a></li>
          <li class="footer-list-item footer-list-item--pc"><a href="https://policies.hatena.ne.jp/privacypolicy-ja">プライバシーポリシー</a></li>
          <li class="footer-list-item footer-list-item--pc"><a href="https://policies.hatena.ne.jp/cookie-policy">利用者情報の外部送信について</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-inner-group footer-bookmark-sns">
      <h2 class="footer-title">公式Twitter</h2>
      <div class="footer-bookmark-list">
        <ul class="footer-list">
          <li class="footer-list-item"><a href="https://twitter.com/HatenaBookmark" target="_blank" rel="noopener" data-gtm-click-label="footer-officialTwitter-name">公式アカウント</a></li>
          <li class="footer-list-item"><a href="https://twitter.com/hatebu" target="_blank" rel="noopener" data-gtm-click-label="footer-hotentryTwitter-name">ホットエントリー</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-inner-group footer-hatena">
      <h2 class="footer-title">はてなのサービス</h2>
      <ul class="footer-list">
        <li class="footer-list-item"><a href="https://hatenablog.com/" data-gtm-label="footerServices-blog">はてなブログ</a></li>
        <li class="footer-list-item"><a href="https://hatenablog.com/guide/pro?plus_via=hatenabookmark_footer&utm_source=hatenabookmark&utm_medium=referral&utm_campaign=hatenabookmark_to_hatenablog_pro&utm_content=hatenabookmark_footer" data-gtm-label="footerServices-blog-pro">はてなブログPro</a></li>
        <li class="footer-list-item"><a href="https://q.hatena.ne.jp/" data-gtm-label="footerServices-question">人力検索はてな</a></li>
        <li class="footer-list-item"><a href="http://d.hatena.ne.jp/" data-gtm-label="footerServices-keyword">はてなブログ タグ</a></li>
        <li class="footer-list-item"><a href="http://hatenanews.com/" data-gtm-label="footerServices-hatenanews">はてなニュース</a></li>
        <li class="footer-list-item"><a href="https://soredoko.jp/" data-gtm-label="footerServices-soredoko">ソレドコ</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-app">
      <ul>
        <li class="footer-list-item"><a href="https://apps.apple.com/jp/app/hatenabukkumaku/id354976659?mt=8" target="_blank" rel="noopener" data-gtm-click-label="footer-app-ios"><img src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/common/dl-button/appstore@2x.png" alt="App Storeからダウンロード"></a></li>
        <li class="footer-list-item"><a href="https://play.google.com/store/apps/details?id=com.hatena.android.bookmark&amp;referrer=utm_source%3Dbookmark_sp%26utm_campaign%3Dbookmark_sp_user&hl=ja" target="_blank" rel="noopener" data-gtm-click-label="footer-app-android"><img src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/images/v4/public/common/dl-button/googleplay@2x.png" alt="Google Playで手に入れよう"></a></li>
      </ul>
    </div>
    <div class="copyright">Copyright &copy; 2005-2024 <a href="http://www.hatena.ne.jp/">Hatena</a>. All Rights Reserved.</div>
  </div>
</div>
        <div id="touch-footer-ad"></div>
        <div id="touch-footer-ad-placeholder"></div>
    <div class="modal-overlay"></div>
    <script type="text/javascript" src="https://b.st-hatena.com/84fdd1a6a56049798313195c1c65fd7fac93021e/js/v4/bookmark.star.js" async></script>
    <div class="js-head-notify is-hidden">設定を変更しました<span class="js-head-notify-close-button">x</span></div>
  </body>
</html>