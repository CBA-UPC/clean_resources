(f};function k(){var a="iframe";this.executeVisit=function(e){if(h(b.ignoreSpotIDs,e))return;if(d.SPDemographic.requestedVisit==c)return;else d.SPDemographic.requestedVisit=c;f(function(){if(!g(b.visitPageUrl))return;var c=document.createElement(a);c.src=b.visitPageUrl+"?asid="+e;c.name="gdm_visitFrame";i(c);document.body.appendChild(c)})};this.executeConv=function(d,c){if(h(b.ignoreSiteIDs,d))return;f(function(){if(!g(b.convPageUrl))return;var e=document.createElement(a);e.src=b.convPageUrl+"?sid="+d;if(c)e.src+="&rid="+c;e.name="gdm_convFrame";i(e);document.body.appendChild(e)})};this.executeAdVisit=function(d,e,j){if(h(b.ignoreAdvSiteIDs,d))return;var c=function(){if(!g(b.advPageUrl))return;var c=document.createElement(a);c.src=b.advPageUrl+"?sid="+d;if(e)c.src+="&cq="+e;c.name="gdm_advFrame";i(c);document.body.appendChild(c)};if(j)f(function(){setTimeout(c,j)});else f(c)}}function f(e){var b="DOMContentLoaded";if(document.addEventListener){if(document.readyState=="complete"){e();return}var c=function(){d.removeEventListener("load",c,a);document.removeEventListener(b,c,a);e()};document.addEventListener(b,c,a);d.addEventListener("load",c,a)}else if(document.attachEvent){var f=a;try{f=window.frameElement==null}catch(g){}if(document.documentElement.doScroll&&f)j(e);else d.attachEvent("onload",e)}}function j(a){try{document.documentElement.doScroll("left")}catch(b){setTimeout(function(){j(a)},64);return}a()}function h(d,f){for(var e=d.length,b=0;b<e;b++)if(d[b]==f)return c;return a}function i(b){var a="0";if(b.style){b.style.visibility="hidden";b.style.padding=a;b.style.display="none"}b.setAttribute("frameBorder",a);b.setAttribute("scrolling","no");b.setAttribute("width",a);b.setAttribute("height",a);b.setAttribute("marginwidth",a);b.setAttribute("marginheight",a);b.setAttribute("vspace",a);b.setAttribute("hspace",a)}d.SPDemographic.createGateway=function(){return new k}})(window)="192x192" href="https://gvs.weathernews.jp/onebox/img/homeicon-192x192.png" />
    <link rel="stylesheet" href="https://gvs.weathernews.jp/top/css/sanitize.css">
    <link rel="stylesheet" href="https://gvs.weathernews.jp/top/css/app.css?5">
	<link rel="stylesheet" href="https://weathernews.jp/onebox/css/header.css?230329">
	<link rel="stylesheet" href="https://weathernews.jp/s/css/app_dl.css" />
	<link rel="stylesheet" href="https://special.infoseek.co.jp/css/rc-f-standard.css">
	<link rel="stylesheet" href="https://infoseek.weathernews.jp/css/infoseek.css?1">
    <link rel="shortcut icon" type="image/x-icon" href="//gvs.weathernews.jp/s/img/favicon.ico">
<!--<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-5VZLLNX':true});</script>-->
<script src="//weathernews.jp/s/js/ads_prebid_async.js?14"></script>
<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script>
	var webid;
	var ck_webid = (String(document.cookie).match(/web_id=(.+?)(;|$)/) || [])[1];

	var webidurl = 'https://weathernews.jp/api/webid';
	if (ck_webid) {
		webid = ck_webid;
		// webid cookie update
		fetch(webidurl + "?webid=" + webid);
	} else {
		// webid create & cookie write	
		var xhr = new XMLHttpRequest();
		xhr.open('GET', webidurl, false);
		xhr.send();
		if (xhr.status == 200){
		  var jsonObj = JSON.parse(xhr.responseText);
		  if(jsonObj.uuid) webid = jsonObj.uuid;	
		}
	}

	if (webid) {
		var wnum = parseInt(webid.slice(-1), 16);
		// PPID 50%
		if (wnum % 2 === 0) {
			googletag.cmd.push(function () {
				googletag.pubads().setPublisherProvidedId(webid);
			});
		}
	}
</script>
<script>
	/* Setting Path for GA */
	var sendParamList = ["fm"]; /* set this param for manual */
	var sendParamStr  = "";
	var p = location.search.split("?");
	if (p[1]) {
		var q = p[1].split("&").sort(function(a,b){if(a>b) return 1;else return -1});
		var l = q.length;
		for (var i = 0; i < l; i++) {
			var kv = q[i].split("=");
			for(var j = 0; j < sendParamList.length;j++){
				if(kv[0] === sendParamList[j]){
					sendParamStr += q[i] + "&";
					break;
				}
			}
		}
	};
	var Path = location.pathname;
	var c = (Path.match(/\?/)) ? "&" : "?";
	Path += c + sendParamStr.slice(0,-1);
	/* Setting IS WNIAPP or not for GA */
	var wniapp_for_custom_dimension = (navigator.userAgent.match(/weathernews/)) ? 1 : 0;
</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YSDTFKD1VJ"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-YSDTFKD1VJ', { page_path: Path, app_flag: wniapp_for_custom_dimension, user_id: webid});
</script>
<script>
var use_prebid = true;
(function() {
    var s = document.createElement('script');
    if(navigator.userAgent.search(/iphone|ipad|ipod|android/i)) s.src = "https://flux-cdn.com/client/weathernews/flux_weathernews_PC_AS_TM.min.js";
    else s.src = "https://flux-cdn.com/client/weathernews/flux_weathernews_SP_AS_TM.min.js"
    s.async = 'async';
    var t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
})();
</script>
</head>

<body id="body">
	<header id="header">
		<section class="headerTop">
			<div class="inner">
				<figure class="wniLogo"><a href="https://infoseek.co.jp/"><img src="https://infoseek.weathernews.jp/img/infoseek_header_logo.png" alt="インフォシーク"></a></figure>
				<div class="headerWeatherList">
					<div class="headerWeatherList__inner"></div>
				</div> 
				<div class="headerSearchArea">
					<form onsubmit="search_city_input('search_pc');return false;">
						<label for="" class="headerInputText pc">
							<input id="search_pc" type="text" placeholder="都市名,郵便番号,市外局番など" class="form-txt">
							<button type="submit">
								<img src="https://weathernews.jp/onebox/img/icon/icon_mushimegane.svg" width="30px"
									height="30px" class="icon" alt="">
							</button>
						</label>
						<section class="search_pc_block" style="display:none" id="search_result1"></section>
					</form>
					<button id="headerOverlayBtn__search" class="headerForm-submit sp">
						<img src="https://weathernews.jp/onebox/img/icon/icon_mushimegane--blue.svg" width="20px"
							height="20px" class="headerForm-submit__icon">
						<span class="headerForm-submit__text">検索</span>
					</button>
					<button class="headerForm-submit"
						onclick="ga_and_go('https://weathernews.jp/onebox/gps.html?fm=header','gps_link_btn'); return false;">
						<img src="//weathernews.jp/onebox/img/icon/icon_search.svg" width="20px" height="20px"
							class="headerForm-submit__icon">
						<span class="headerForm-submit__text">現在地</span>
					</button>
				</div>
			</div>
			<section id="headerOverlay" class="headerOverlay">
				<section class="headerOverlay__content">
					<div id="overlayCloseBtn" class="closeButton"><span></span></div>
					<div class="headerOverlay__wrap">
						<section id="headerOverlayContent__search">
							<p class="search_tit" style="margin-bottom: 10px;">天気予報を検索</p>
							<form onsubmit="search_city_input('search_sp');return false;">
								<label for="" class="headerInputText">
									<input id="search_sp" type="text" placeholder="都市名,郵便番号,市外局番など" class="form-txt">
									<button type="submit">
										<img src="https://weathernews.jp/onebox/img/icon/icon_mushimegane.svg" width="30px"
											height="30px" class="icon" alt="">
									</button>
								</label>
							</form>
						</section>
						<div class="sp" style="display:none" id="search_result2"></div>
						<section id="headerOverlayContent__menu">
							<section class="headerListMenu__group">
								<p class="headerListMenu__title">天気</p>
								<ul class="headerListMenu even">
									<li class="headerListMenu__item"><a
											href="/onebox/tenki/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_tenki&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_forecast.svg"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_forecast.svg"
													style=""></i>天気予報</a></li>
									<li class="headerListMenu__item"><a href="https://weathernews.jp/s/topics/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_topics&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/icon_topics@2x.png"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/icon_topics@2x.png"
													style=""></i>お天気ニュース</a></li>
									<li class="headerListMenu__item"><a href="//weathernews.jp/s/obs/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_obs&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_obsdata.svg"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_obsdata.svg"
													style=""></i>実況天気(アメダス)</a></li>
									<li class="headerListMenu__item"><a href="//weathernews.jp/onebox/radar/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_radar&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_radar.svg"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_radar.svg"
													style=""></i>雨雲レーダー</a></li>
									<li class="headerListMenu__item"><a href="//weathernews.jp/s/livecam/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_livecam&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_livecam.svg"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_livecam.svg"
													style=""></i>ライブカメラ</a></li>
									<li class="headerListMenu__item"><a href="//weathernews.jp/s/thunder/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_thunder&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_thunder.svg"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_thunder.svg"
													style=""></i>落雷情報</a></li>
									<li class="headerListMenu__item"><a href="//weathernews.jp/s/satellite/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_satellite&quot;)"><i class="ico"><img
													class="lazy"
													src="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_satellite.svg"
													data-original="https://gvs.weathernews.jp/onebox/img/icon/list-menu_icon_satellite.svg"
													style=""></i>衛星雲画像</a></li>
									<li class="headerListMenu__item"><a href="//weathernews.jp/s/story/?fm=header"
											onclick="ga_and_go(this.href,&quot;link_story&quot;)"><i class="ico"><img
													class="lazy"
			