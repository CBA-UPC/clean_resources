var visitDate = new Date();
var visitTime = String(Math.floor(visitDate.getTime() / 1000));
var visitCode = visitTime.concat(String(Math.floor(Math.random() * 10 + 1) - 1)).concat(String(Math.floor(Math.random() * 10 + 1) - 1)).concat(String(Math.floor(Math.random() * 10 + 1) - 1)).concat(String(Math.floor(Math.random() * 10 + 1) - 1));

var parser = document.createElement('a');
parser.href = window.location.href.replace("s3.amazonaws.com/", "");

var urlHost = parser.host && parser.host.toLowerCase();
var visitUrl = parser.pathname && parser.pathname;

var visitUrls = visitUrl.split("/");
function loadFile(file, callback) {
	var elem = document.createElement("script");
	elem.setAttribute("src", file);
	elem.setAttribute("async", "true");
	elem.setAttribute("defer", "defer");
	// async="true" defer
	elem.onload = 
	document.head.appendChild(elem);
}

//ad-banner
setTimeout(function() {
	if (visitUrls.length >= 4) {
		if (urlHost == 'online.fliphtml5.com') {
			$.getScript("../getuserinfo.js")
				.done(function (script, textStatus) {
					if (typeof userInfo != 'undefined') {
						var uType = userInfo.user_type;
						var ad_flag = userInfo.disable_ad
					} else {
						var uType = user_type
						var ad_flag = disable_ad
					}
					if (uType == 0) {
						// 广告配置参数
						var ads = [
							{
								name: 'fh_small',
								width: 320,
								height: 50,
								googleAd: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:320px;height:50px" data-ad-client="ca-pub-9840740068404348" data-ad-slot="2711178962"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
							},
							{
								name: 'fh_middle',
								width: 468,
								height: 60,
								googleAd: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-9840740068404348" data-ad-slot="3498836391"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
							},
							{
								name: 'fh_large',
								width: 728,
								height: 90,
								googleAd: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-9840740068404348" data-ad-slot="8863807747"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>'
							}
						];
	
						// 根据窗口宽度，确定要加载的广告尺寸
						var ad;
						var windowWidth = $(window).width();
						if (windowWidth >= 1000) {
							ad = ads[2];
						} else if (windowWidth < 1000 && windowWidth >= 600) {
							ad = ads[1];
						} else {
							ad = ads[0];
						}
	
						var barHeight = 0;
						var hasBar = false;
						var bottom = 25;
						var other = 8;
						var old_buttonMargin = 0;
						var old_topMargin = 0;
						if (typeof toolBar == 'object' && typeof toolBar.getBottomHeight == 'function') {
							var new_topMargin = 0
							var barHeight = toolBar.getBottomHeight(true)
							if(typeof isPhone === 'undefined' || typeof isPad === 'undefined') {
									
							} else {
								if (isPhone() || isPad()) {
									// barHeight = barHeight == 0 ? 40 : barHeight
									new_topMargin = toolBar.getTopHeight(true)
								}
							}
							hasBar = true;
							bottom = barHeight + other / 2;
	
							var h1 = bottom + other / 2 + ad.height
							var h2 = old_buttonMargin + ad.height + other
	
							old_buttonMargin = bookConfig.bottomMargin || 0;
							old_topMargin = bookConfig.topMargin || 0;
							bookConfig.bottomMargin = Math.max(h1,h2);//old_buttonMargin + ad.height + other;
							bookConfig.topMargin = Math.max(old_topMargin, new_topMargin)
							onStageResize()
						}
	
						// 构造广告的url
						var iframeSrc, imgSrc;
						if (location.host == 'localhost') {
							imgSrc = "/visit/" + ad.name + ".png";
							// iframeSrc = "/visit/banner_" + ad.width + "_" + ad.height + ".html";  // 已停用
						} else {
							imgSrc = "//static.fliphtml5.com/book/banner/" + ad.name + ".png";
							// iframeSrc = "//static.fliphtml5.com/book/banner/banner_" + ad.width + "_" + ad.height + ".html"; // 已停用
						}
	
						var $body = $("body");
						var $container = $("<div class='fh5---banner---container'></div>").css({
							display: 'none',
							zIndex: 99999,
							position: "fixed",
							width: ad.width + 'px',
							height: ad.height + 'px',
							left: "50%",
							marginLeft: -ad.width / 2,
							bottom: bottom,
							border: "1px solid #181818",
							background: "white"
						});
	
						var $adsText = $("<div>Ads</div>").css({
							position: "absolute",
							left: "0",
							bottom: "100%",
							background: "white",
							border: "1px solid gray",
							color: "gray",
							padding: "2px 6px",
							fontSize: "13px",
							lineHeight: "13px",
							marginBottom: "2px"
						});
	
						var $closeBtn = $("<div style=''></div>").css({
							cursor: "pointer",
							position: "absolute",
							// border: "1px solid #181818",
							width: 22,
							height: 22,
							cursor: "pointer",
							background: "url(//static.fliphtml5.com/book/banner/Vector.svg) 1px 1px no-repeat",
							left: "95%",
							top: "-6px",
							marginLeft: "2px",
							zIndex: 999999,
						});
	
						$container
							.append($closeBtn)
							.append($adsText);
	
						var $fh_banner = $("<a href='//fliphtml5.com?gad' target='_blank'><img src='" + imgSrc + "' alt='' /></a>").css({
							position: "absolute",
							width: "100%",
							height: "100%"
						});
	
						// 手机禁用谷歌广告时，添加我们的广告。电脑始终加载我们的广告，没禁用谷歌的话，再加载谷歌广告挡住我们的广告
						if (ad_flag == 1) {
							addFH5Ad()
						} else {
							if(typeof isPhone === 'undefined' || typeof isPad === 'undefined') {
								addPCGoogleAd()
							} else {
								if (isPhone() || isPad()) {
									// addMobileGoogleAd()
									ad = ads[0];
									$container
										.append			
						}
	
						// 广告容器延迟2s才出现
						setTimeout(function () {
							// 用了fadeIn, 会导致容器高度丢了，这里重新设置一下高度。
							$container.height(ad.height).fadeIn(400);
						}, 2000);
	
						$closeBtn.on("click"uttonMargin;
								bookConfig.topMargin = old_topMargin
								onStageResize()
							}
							return
						});
	
						functub-9840740068404348",enable_page_level_ads: trclient="ca-pub-9840740068404348" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
						}
							// ads end
					}
				})
				.fail(function (jqxhr, settings, exception) {
					//加载失败
				});
		}
	}
}, 2000)

function sendvisitinfo(type, page) {
	var type = type;
	var page = page;
	if (type == null) {
		var type = '';
	}
	if (page == null) {
		var page = '';
	}

	var isAdd = false;
	if (visitUrls.length >= 4) {
		var uLink = visitUrls[1];
		var bLink = visitUrls[2];
		if (urlHost == 'online.fliphtml5.com') {
			isAdd = true;
		} else if ((urlHost == 'fliphtml5.com') && (visitUrls[1] == 'read')) {
			var uLink = visitUrls[2];
			var bLink = visitUrls[3];
			isAdd = true;
		} 
			}
		}
	}
}


$(document).ready(function () {
	var t = new Date().getTime();
	loadFile('https://static.fliphtml5.com/book/js/statistic.js?' + t, function () {
		loadFile('https://static.fliphtml5.com/book/js/writeLog.js?' + t);
	});
})