/* IE 콘솔  ver 2.2.0 */
if(typeof(window.console) == 'undefined') {console = { log: function () { } }; }

window.foin_cookie_setting = {
  html5 : 				true,
  slotNum : 		"",
  cookieName : 		"",
  targetCode :		"",
  cookieVal :			"",
  adServerUrl : 	"",
  refServerUrl	:	'//engine.tend-table.com/cgi-bin/WebLog.dll'
};		

/* 포인정보 모듈 */
(function () {
		/*이미 존재하는지 확인 */
    if (typeof(window.foin_cookie) != 'undefined') return;
    foin_cookie = new Object();

    foin_cookie.obj = function (set) {
        this.setting = set;
    };

		/**************************************************************************/
		/***  Utility                                                          ****/
		/**************************************************************************/
		foin_cookie.obj.prototype.getParam = function(url,name)
		{
			var rtnval="";
			try
			{
			  var parameters = new Array();
			  parameters = (url.slice(url.indexOf("?")+1, url.length)).split("&");
			  for( var i = 0 ; i < parameters.length ; i++ ) 
			  {
			    if(parameters[i].indexOf(name) == 0) 
			    {
			      var l_item=parameters[i].split("=");
			      if(l_item==null || l_item.length!=2) continue;
			      l_item[0] = l_item[0].replace(/^\s+|\s+$/g,"");
			      if(l_item[0]==name)
			      {
			      	rtnval = l_item[1];
			      	break;
			      }
			    }
			  }
			}
			catch(e)
			{
				rtnval = "";
			}
			return rtnval;
		};

		foin_cookie.obj.prototype.getUrl = function(url)
		{
			var rtnVal="";
			try
			{
				url = url.replace(/\\/gi, '/');
				var begin = url.indexOf("//");
				if(begin<0) begin = 0;
				else begin+=2;
				var end = url.indexOf("/",begin);
				if(end<0) end = url.indexOf("?",begin);
				if(end<0) end=url.length;
				rtnVal=url.substring(begin,end);			
				rtnVal=rtnVal.toLowerCase();	
				if(rtnVal.indexOf(".")<0) rtnVal="";
			}
			catch(e)
			{
				rtnVal = "";
			}
			return rtnVal;
		};
		/**************************************************************************/
		/***  html 5                                                           ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.isHtml5 = function () 
    {
			var rtnVal=false;
			try
			{
				if (typeof(Storage) != "undefined") 
				{
				  rtnVal=true;
				} 
				else 
				{
					rtnVal=false;
				}				
			}
			catch(e)
			{
				console.log('isHtml5 error : '+e.message);
				rtnVal=false;
			}
      return rtnVal;
    };

    foin_cookie.obj.prototype.setHtml5 = function (key,val) 
    {
    	var rtnVal=false;
			try
			{
				if(typeof(key)=='undefined' || key.length<1) 
				{
					rtnVal=false;
				}
				else
				{
					localStorage.setItem(key,val);
					rtnVal=true;
				}
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setHtml5 error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.getHtml5 = function (key) 
    {
    	var rtnVal=null;
    	
			try
			{
				if(typeof(key)=='undefined' || key.length<1) 
				{
					rtnVal=null;
				}
				else
				{
					rtnVal = localStorage.getItem(key);
				}
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getHtml5 error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.removeHtml5 = function (key) 
    {
    	var rtnVal=false;
    	
			try
			{
				if(typeof(key)=='undefined' || key.length<1) 
				{
					rtnVal=false;
				}
				else
				{
					localStorage.removeItem(key);
					rtnVal=true;
				}
			}
			catch(e)
			{
				rtnVal=false;
				console.log('clearHtml5 error : '+e.message);
			}
			return rtnVal;
    };

		/**************************************************************************/
		/***  Cookie                                                           ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.setCookie = function (key,val,exdays) 
    {
    	var rtnVal=false;
    	if(typeof(key)=='undefined' || key.length<1) return false;
    	if(typeof(exdays)=='undefined' || exdays.length<1) exdays=365;
    	
			try
			{
	  		var d = new Date();
    		d.setTime(d.getTime() + (exdays*24*60*60*1000));
    		var expires = "expires="+ d.toUTCString();
    		document.cookie = key + "=" + val + "; " + expires+"; path=/; SameSite=None; Secure;";
    		rtnVal=true;
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setCookie error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.getCookie = function (key) 
    {
    	var rtnVal=null;
    	if(typeof(key)=='undefined' || key.length<1) return null;
			try
			{
				var name = key + "=";
		    var ca = document.cookie.split(';');
		    for(var i = 0; rtnVal==null && i <ca.length; i++) 
		    {
		      var c = ca[i];
		      while (c.charAt(0)==' ') 
		      {
		      	c = c.substring(1);
		      }
		      if (c.indexOf(name) == 0) 
		      {
		        rtnVal = c.substring(name.length,c.length);
		        break;
		      }
		    }
		    return rtnVal;
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getCookie error : '+e.message);
			}
			return rtnVal;
    };
    
    foin_cookie.obj.prototype.removeCookie = function (key) 
    {
    	var rtnVal=false;
    	var val="empty";
    	if(typeof(key)=='undefined' || key.length<1) return false;
			try
			{
	  		var d = new Date();
    		d.setTime(d.getTime() - 1000);
    		var expires = "expires="+ d.toUTCString();
    		document.cookie = key + "=" + val + "; " + expires;
    		rtnVal=true;
			}
			catch(e)
			{
				rtnVal=false;
				console.log('removeCookie error : '+e.message);
			}
			return rtnVal;
    };
    
		/**************************************************************************/
		/***  Keyword Procedure                                                ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.getKeyword = function () 
    {
    	var rtnVal=null;
			try
			{
				var preUrl=document.referrer;
				var l_domain = foinCookie.getUrl(preUrl);
				var keyword="";
				if(l_domain.indexOf("naver.com")>=0) keyword=foinCookie.getParam(preUrl,"query");
				else if(l_domain.indexOf("daum.net")>=0) keyword=foinCookie.getParam(preUrl,"q");
				else keyword="";
				keyword=keyword.replace(/,/g,"");
				rtnVal=decodeURIComponent(keyword);
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getKeyword error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.setKeyword_local = function (rtnInfo) 
    {
    	var rtnVal=false;
			var setting=this.setting;
    	try
    	{
				if(typeof(rtnInfo)!='undefined' && rtnInfo!=null && rtnInfo.success==true && rtnInfo.cookieval!=null && rtnInfo.cookieval.length>0)
				{
    			if(foinCookie.isHtml5()==true)
    			{
    				foinCookie.setHtml5("FOIN_KEYWORD",rtnInfo.cookieval);
    			}
   				foinCookie.setCookie("FOIN_KEYWORD1",rtnInfo.cookieval,30);
   				/* 상위에 전잘 */
   				window.parent.postMessage({ keyword: rtnInfo.cookieval }, '*');
				}
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setKeyword_local error : '+e.message);
			}
			return rtnVal;
    };

    foin_cookie.obj.prototype.setKeyword_global = function (keyword)
    {
    	var rtnVal=false;
    	if(typeof(keyword)=='undefined' || keyword==null || keyword.length<1) return;
			var setting=this.setting;
    	try
    	{
    		var l_date = new Date();
				var l_url=setting.refServerUrl+"?servicename=KEYWORD&keyword="+keyword+"&tm="+l_date.getTime()+"&jquerycallback=foinCookie.setKeyword_local";
		    var l_Head = document.getElementsByTagName('HEAD')[0];
		    if(typeof(l_Head)=='undefined') l_Head = document.getElementsByTagName('BODY')[0];
		    var scrObj=document.createElement('SCRIPT');
		    scrObj.type = 'text/javascript';
				scrObj.async = true;
				scrObj.defer = true;
				scrObj.src = l_url;
				l_Head.appendChild(scrObj);  		
				rtnVal=true;
			}
			catch(e)
			{
				rtnVal=false;
				console.log('setKeyword_global error : '+e.message);
			}
			return rtnVal;
    };

		/**************************************************************************/
		/***  Referer  Procedure                                              ****/
		/**************************************************************************/
    foin_cookie.obj.prototype.getRefer = function () 
    {
    	var rtnVal=null;
			try
			{
				var nowUrl=location.href;
				var preUrl=document.referrer;
				/* 만약 무조건 ref 값으로 하라고 되어 있는 도메인이 있다면... */
				if(typeof(foin_where_ref)!="undefined" && foin_where_ref.length!=null)
				{
					var l_host = foinCookie.getUrl(nowUrl);
					if(l_host!=null && l_host.length>0)
					{
						for(var i=0;i<foin_where_ref.length;i++)
						{
							if(foin_where_ref[i]==l_host)
							{
								nowUrl = preUrl;
								break;
							}
						}
					}
				}
				/* 현재의 URL을 사용할지 여부 */
				if( !( nowUrl.indexOf("cgi-bin")>=0
			     || nowUrl.indexOf("//ad.")>=0
			     || nowUrl.indexOf("compass.adop.cc")>=0
			     || nowUrl.indexOf("adex.adux.kr")>=0
			     || nowUrl.indexOf("RealMedia")>=0
			     || nowUrl.indexOf("mtab.clickmon.co.kr")>=0
			     || nowUrl.indexOf(".mrep.kr")>=0
			     || nowUrl.indexOf("adx-exchange")>=0
			     || nowUrl.indexOf("ad89")>=0
			     || nowUrl.indexOf("//adex.")>=0
			     || nowUrl.indexOf(".linkprice.")>=0
			     || nowUrl.indexOf("img.")>=0
			     || nowUrl.indexOf("a.wyzmob.com")>=0
			     || nowUrl.indexOf("ad4989")>=0
				))
				{
					preUrl = nowUrl;
				}
				/* REFFER 이 광고 시스템 호출 URL이면 무시함 */
				if(preUrl.indexOf("cgi-bin")>=0)
				{
					preUrl = "";
				}
				if(typeof(preUrl)=='undefined' || preUrl==null || preUrl.length<1)
				{
					rtnVal=null;						
				}
				else
				{
					preUrl = foinCookie.urlCut(foin_domainCutInfo, preUrl);
					if(preUrl.indexOf("#")>=0) preUrl=preUrl.substring(0,preUrl.indexOf("#"));
					rtnVal=preUrl;
				}
			}
			catch(e)
			{
				rtnVal=null;
				console.log('getRefer error : '+e.message);
			}
			return rtnVal;
    };
     
    foin_cookie.obj.prototype.setReferrer_local = function (rtnInfo) 
    {
    	try
    	{
    		/* 잠정 미사용 */
    		/* return; */
    		
    		if(rtnInfo.success==true)
    		{
    			if(foinCookie.isHtml5()==true)
    			{
    				foinCookie.setHtml5("FOIN_CATEGORY",rtnInfo.cookieval);
    			}
   				foinCookie.setCookie("FOIN_CATEGORY1",rtnInfo.cookieval,30);
   				
   				/* 광고서버 쿠키에 저장 */
		    	try
		    	{
		    		if(typeof(foin_origin_adurl)!='undefined' && foin_origin_adurl.length>5)
		    		{
			    		var l_date = new Date();
			    		var l_url=foin_origin_adurl+"/cgi-bin/pelicanc.dll?adservicename=VLD&name=FOIN_CATEGORY&method=set&data="+rtnInfo.cookieval+"&encode_yn=N&copy_yn=Y&tm="+l_date.getTime();
			    		var l_Body = document.getElementsByTagName('BODY')[0];
					    var l_divObj=document.createElement('DIV');
			        var l_style = {position:"absolute", left:"0px", top:"0px", width:"0px", height:"0px", margin:"0px", padding:"0px", border:"none", overflow:"hidden"};
			        for(var key in l_style){
			        	l_divObj.style[key] = l_style[key];
			        }
							l_Body.appendChild(l_divObj);  		
					    var l_scrObj=document.createElement('IFRAME');
					    l_scrObj.src = l_url;
							l_scrObj.width = "0";
							l_scrObj.height = "0";
							l_scrObj.allowTransparency = "true";
							l_scrObj.marginwidth = "0";
							l_scrObj.marginheight = "0";
							l_scrObj.hspace = "0";
							l_scrObj.vspace = "0";
							l_scrObj.frameborder = "0";
							l_scrObj.scrolling = "no";
			        l_style = {width:"0px", height:"0px", margin:"0px", padding:"0px", border:"none"};
			        for(var key in l_style){
			        	l_scrObj.style[key] = l_style[key];
			        }
							l_divObj.appendChild(l_scrObj);  		
						}
					}
					catch(e)
					{
						console.log('setReferrer_local error : '+e.message);
					}   				
   				
    		}
    	}
    	catch(e)
    	{
				console.log('setReferrer_local error : '+e.message);
    	}
    	return;
		};

    foin_cookie.obj.prototype.setReferrer_global = function (ref,inflow,keyword,lang) 
    {
    	if(typeof(ref)=='undefined' || ref==null || ref.length<1) return;
    	if(typeof(inflow)=='undefined' || inflow==null) inflow="";
    	if(typeof(keyword)=='undefined' || keyword==null) keyword="";
    	if(typeof(lang)=='undefined' || lang==null) lang="";
			var setting=this.setting;
    	try
    	{
    		var l_date = new Date();
    		var l_cookieVal = foinCookie.getHtml5("FOIN_CATEGORY");
    		if(l_cookieVal==null) l_cookieVal ="";
    		var l_url=setting.refServerUrl+"?servicename=REF&ref="+ref+"&inflow="+inflow+"&query="+keyword+"&lang="+lang+"&cookieval="+l_cookieVal+"&tm="+l_date.getTime()+"&jquerycallback=foinCookie.setReferrer_local";
		    var l_Head = document.getElementsByTagName('HEAD')[0];
		    if(typeof(l_Head)=='undefined') l_Head = document.getElementsByTagName('BODY')[0];
		    var scrObj=document.createElement('SCRIPT');
		    scrObj.type = 'text/javascript';
				scrObj.async = true;
				scrObj.defer = true;
				scrObj.src = l_url;
				l_Head.appendChild(scrObj);  		
			}
			catch(e)
			{
				console.log('setReferrer_global error : '+e.message);
			}
		};

})();


try
{
	if(typeof(foin_origin_keyword)!='undefined' && typeof(foin_origin_ref)!='undefined')
	{
		window.foinCookie = new foin_cookie.obj(foin_cookie_setting);
		var Lang = "utf-8";
		
		/* keyword send */
		if(foin_origin_keyword!=null && foin_origin_keyword.length>0)
		{
			foinCookie.setKeyword_global(foin_origin_keyword);
		}
		/* referrer send */
		if(foin_origin_ref!=null && foin_origin_ref.length>0)
		{
			foinCookie.setReferrer_global(foin_origin_ref,foin_origin_inflow,foin_origin_keyword,Lang);
		}
	}
}
catch(e)
{
	console.log(e.message);
};
