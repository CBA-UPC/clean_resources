// 콜백 함수
function adbaySlideBannerCallback300x250()
{
	$("#slideBanner").show();

	_url = adbayAdsContents.redirect.split('?');
        _param = $.base64('decode', _url[1]).split('&');
        _nlogo = true;
        for(i=_param.length; i>0; i--){
                if(_param[i] == 'seller='){
                        _nlogo=false; break;
                }
        }

        if(_nlogo)
                $("#adbay_sl_logo").html('<h1><img src="'+adbayAdsContents.logo+'" width="90" height="28" alt=""/></h1>')
        else
                $("#adbay_sl_logo").html('<h1><a href="'+adbayAdsContents.redirect+'" target="_blank"><img src="'+adbayAdsContents.logo+'" width="90" height="28" alt=""/></a></h1>')

        //$("#adbay_sl_logo").html('<h1><a href="'+adbayAdsContents.redirect+'" target="_blank"><img src="'+adbayAdsContents.logo+'" width="90" height="28" alt=""/></a></h1>');

	if(adbayAdsContents.is_ep)
	{
		$("#slide_banner_iad").show();
		$("#svg_on").text("http://ad.about.co.kr/svg.html");
	}

	var retargetBnr = new slide.install();	
	retargetBnr.Data = {
		json : adbayAdsContents.creatives,	// 상품 DATA
		$obj : $('#slideBanner'),	// 베너 최상위 박스
		Class : 'rb_300x250',		// 추가할 클래스명
		moveType : 'vertical',		// 모션 타입(vertical, horizon선)
		width : 300,				// 박스 가로폭
		height : 250,				// 박스 세로폭
		viewLength : 2, 			// 화면에 보여지는 베너 갯수
		MarginLeft : 4,				// 코딩별 ul 요소의 마진값이 달라서...
		MarginTop : 0, 				// 코딩별 ul 요소의 마진값이 달라서...
		borderClick : 0 			// 보더라인 클릭시 클릭 될 상품(좌측 혹은 상단 부터)
	};
	
	if(adbayAdsContents.is_ep)
	{
		var area = $('.svgArea');
		area.bind('mouseenter',function() { $(this).addClass('svgHover'); }).bind('mouseleave',function(){$(this).removeClass('svgHover');});

		//browser-userAgent
		var ua = window.navigator.userAgent;
		if(ua.indexOf("MSIE") > -1&&ua.substr(30,1)=="8"||ua.substr(30,1)=="7")
		{
			$('.retargetBnr .lowBro8').css("display","block");
			$('.retargetBnr .svgArea').css("display","none");
		}
	}
}
