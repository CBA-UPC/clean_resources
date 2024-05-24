var EDNP_STRING	= location.search;

function pclick(lnk){
        if(lnk == '') return;
        var img = new Image()
        img.src = lnk;
        img.style.display = 'none';
        $('body').append(img);
}


function noImageCheck()
{
	$("img").each(function(){
			$(this).error(;
	});
}
function getParameterByName(key)
{
	key			= key.replace(/[\\[]/, "\\\\[").replace(/[\\]]/, "\\\\]");
	var regex	= new RegExp("[\\\\?&]" + key + "=([^&#]*)");
	var results	= regex.exec(EDNP_STRING);

	return (results == null ? "" : decodeURIComponent(results[1].replace(/\\+/g, " ")));
}
function makeArrayByUrlParams(params)
{	
	var paramHash = new Object();
	
	var splitedArr = params.split('&');
	for(var i = 0 ; i < splitedArr.length ; i++)
	{
		var curParam = splitedArr[i].split('=');
		paramHash[curParam[0]] = curParam[1];
	}
	
	return paramHash;
}
function executeAdbayMediaHouseAds()
{
	// Referrer 정보 전달
	_ref	= '';
	if(adbayAdsContents.creatives[0].src.toLowerCase().indexOf('hotclick.netinsight') < 0){
		_ref    = 'rurl=' + escape(document.referrer)
		if(getParameterByName('rurl') != '')
			_ref = 'rurl=' + escape(getParameterByName('rurl'));
		if (unescape(adbayAdsContents.creatives[0].src).indexOf('?') >= 0)
			_ref	= '&' + _ref;
		else
			_ref	= '?' + _ref;
	}
		
	if(_adbayInventoryData.INV_UIS == "pu")
	{
		if(getParameterByName("pb") != ''){
			if(getParameterByName('pb_type') == 'script')
				$("body").append('<script src="'+unescape(adbayAdsContents.creatives[0].src)+_ref+'"></script> ');
			else
				$("body").append('<iframe src="'+unescape(adbayAdsContents.creatives[0].src)+_ref+'" width="100%" height="'+adbayAdsContents.height+'" border="0" frameborder="0" scrolling="no" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0"></iframe> ');
	    }
	    else {
	    	$("body").append(adbayAdsContents.creatives[0].src);
	    }
	}
	else if(_adbayInventoryData.INV_UIS == "fl")
	{
		if(adbayAdsContents.creatives[0].src != '')
		{
			try {
				adbayFloatingHouseCallback();	
			} catch ( e ) {
			}
		}
	}
	else
	{
		var params		= "";
		var articleId	= "";
		var newsId		= "";
		var pgid		= getParameterByName("pgid");
		var addParams	= "";

		try {
			if(top.sArticleId != undefined) { articleId = top.sArticleId; }
		} catch ( e ) {
		}
		try {
			if(top.news_id != undefined) { newsId = top.news_id; }
		} catch ( e ) {
		}
		
		if(articleId != "") 	addParams = "docId=" + articleId;
		else if(newsId != "") 	addParams = "docId=" + newsId;
		else if(pgid != "") 	addParams = "docId=" + pgid;
		
		if(location.search != "")
			params		= location.search + "&" + addParams;
		else
			params		= "?" + addParams;

		if(adbayAdsContents.ref != '') params		+= "&ref=" + adbayAdsContents.ref;
		if (document.getElementById("adbayHouseContentFrame").width == '100')
			document.getElementById("adbayHouseContentFrame").width = '100%';

		_url	= _adbayInventoryData.JSONP_URL.replace("jsonp", "house");
		if(getParameterByName("pb") == ''){
			_url	= _url.replace('adapi.about.co.kr', 'ad.about.co.kr');
			document.getElementById("adbayHouseContentFrame").src = _url + params;
		}
		else
		{
			var ifrm = document.getElementById('adbayHouseContentFrame');
			ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
			ifrm.document.open();
			if(getParameterByName('pb_type') == 'script')
				ifrm.document.write('<script src="'+unescape(adbayAdsContents.creatives[0].src)+_ref+'"></script> ');
			else
				ifrm.document.write('<iframe src="'+unescape(adbayAdsContents.creatives[0].src)+_ref+'" width="100%" height="'+adbayAdsContents.height+'" border="0" frameborder="0" scrolling="no" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0"></iframe> ');
			ifrm.document.close();
		}
	
		$("#adbayHouseContent").show();
	}
}
var adbayControllerClass = function() {
	this.host			= "";
	this.adsLimit		= 4;
	this.parameter		= "";
	this.endpoint		= "";
	this.isThumbnail	= true;
	this.scheme			= document.location.protocol;
	this.referrer		= '';
	this.setAdbayURL = function(url) {
		if(url != "")
		{
			this.host	= url.split("/")[2];
			this.referrer = url;
		}
	};
	this.getAdbayURL = function() {
		return this.host;
	};
	this.setAdsLimit = function(width, height) {
		try {
			if (typeof trandBox != "undefined")
			{
				trandBox.init(width, height);
				this.adsLimit	= trandBox.length;
			}
			else
			{
				this.isThumbnail = false;
			}
		} catch(e) {
			this.isThumbnail = false;
		}
	};
	this.getAdsLimit = function() {
		return this.adsLimit;
	};
	this.exclusiveAdsUi = function(uis, ui)
	{
		var temp = uis.split(",");
		var rtnUis = new Array();
		for(i = 0 ; i < temp.length ; i++)
		{
			if(temp[i] != ui)
			{
				rtnUis.push(temp[i]);
			}
		}
		return rtnUis;
	};
	this.setParameter = function(uis, media, clickParam, callback, isRefresh, product_idx, category, passback, info, target) {
		if((!this.isThumbnail) || (this.adsLimit == 0))
		{
			uis = this.exclusiveAdsUi(uis, "th");
		}
		if(getParameterByName("limit") != '')
		{
			this.adsLimit	= getParameterByName("limit")
		}

		_campaigns = window.bk_results && window.bk_results.campaigns || [];
		_camIds = [];
		$.each(_camn);
		});

		var referrer = this.referrer != '' ? '&ref='+ escape(this.referrer) : '';
		this.parameter		= $.base64("encode", "host=" + this.host + "&uis=" + uis + "&limit=" + this.adsLimit + "&media=" + media + "&clk_param=" + escape(clickParam) + "&cb=" + escape(callback) + "&isRefresh=" + isRefresh + referrer + "&prd_idx=" + product_idx + "&category=" + category + "&pb=" + escape(passback)  + "&info=" + info + "&plcam="+_camIds.join(',') + "&target="+target + '&protocol=' + location.protocol);
	};
	this.getParater;
	};
	this.setEndint;
	};
	this.getEndint;
	};
	this.run = function() {
		endpoint		= this.endpoint
		this.endpoint 	= this.endpoint + "?" + this.parameter + "&callback=?";
		$.getJSON(this.endpoint, function(data){
			adbayAdsContents = data;
			eval(adbayAdsContents["cb"]+"()");
			
			// info페이지 접근시 shopid 파라미터로 넘기기 위한 부분.
			if(adbayAdsContents['is_ep'])
			{
				var clickUrlParams = makeArrayByUrlParams($.base64('decode', adbayAdsContents.creatives[0].click.split('?')[1]));
				var shop_id = clickUrlP.ednplus.com/info?shopid='+shop_id));
				});
			}
			
			if(adbayAdsContents["cb"] != 'executeAdbayMediaHouseAds' && $('img').length > 0 && adbayAdsContents['ui'] != 'pu')
			{
				me_imp = getParameterByName('me_imp');
				if(me_imp != '') $('body').append('<img src="'+me_imp+'" style="display:none;">');
				$('a').click(function(e){
					_href = $(this).attr('href');
					if(_href.indexOf('adclk.about.co.kr') != -1)
					{
						_x		= e.screenX;
						_y		= e.screenY;
						_evt	= e.handleObj.type;
						_end	= '';
					
						if(_href.indexOf("')") != -1)
						{
							_href	= _href.substr(0, _href.indexOf("')"));
							_end	= "')"
						}
						if(_href.indexOf('")') != -1)
						{
							_href	= _href.substr(0, _href.indexOf('")'));
							_end	= '")'
						}

						if(_href.indexOf('&pos=') != -1)
                                                        _href   = _href.substr(0, _href.indexOf('&pos='));
				
						_href	= _href + "&pos=" + _x + "," + _y + "&evt=" + _evt + _end;
						$(this).attr('href', _href);
					}
					return;
				})
			}
		});
	};
};
function runAdbayNetworkAd(adsUI, isRefresh)
{
	if(typeof(useTemplate) != 'undefined' && useTemplate){
		try{
			eval(adbayAdsContents['cb']+'()');
			pclick(adbayAdsContents['rimp']);
		} catch(e){
			setTimeout(function(){eval(adbayAdsContents['cb']+'()')}, 100);
		}
		return;
	}
/*	
	adbayJsObj	= $('script[src*="ad.about.co.kr/mad"]');
	if(adbayJsObj.length > 0)
	{
		for(i=0; i<adbayJsObj.length; i++)
		{
			_txt	= $(adbayJsObj[i]).attr('src').replace(/.*\?/, '');
			if(_txt != '')
			{
				EDNP_STRING	= $(adbayJsObj[i]).attr('src');
				break;
			}
		}
	}
*/
	adbayJsObj	= $('#EDNPPOP');
	if(adbayJsObj.length > 0)
	{
		_txt	= $(adbayJsObj).attr('src').replace(/.*\?/, '');
		if(_txt != '')
		{
			EDNP_STRING	= $(adbayJsObj).attr('src');
		}
	}

	_referrer = document.referrer;
	if(getParameterByName("rurl") != '')
	{
		_referrer = getParameterByName("rurl");
	}
	
	var adbayController = new adbayControllerClass();
	var inventoryUIs	= adsUI != "" ? adsUI : _adbayInventoryData.INV_UIS;

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent) && /PU/i.test(_adbayInventoryData.INV_UIS)) return;

	adbayController.setAdbayURL(_referrer);
	adbayController.setAdsLimit(_adbayInventoryData.INV_WIDTH, _adbayInventoryData.INV_HEIGHT);
	adbayController.setParameter(inventoryUIs, getParameterByName("media"), getParameterByName("clk_param"), getParameterByName("callback"), isRefresh, getParameterByName("prd_idx"), getParameterByName("category"), getParameterByName("pb"), getParameterByName("info"), getParameterByName("target"));
	adbayController.setEndpoint('https:' + _adbayInventoryData.JSONP_URL);	
	adbayController.run();
}

/*
-- remark function name (reason : conflict at media use)
function setCookie(cname, cvalue, exhour) {
	var d = new Date();
	d.setTime(d.getTime() + (exhour*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
*/

if( $(function () { runAdbayNetworkAd("", ""); });
