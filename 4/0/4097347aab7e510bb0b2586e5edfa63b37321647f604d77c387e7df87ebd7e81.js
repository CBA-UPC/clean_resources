if(typeof adn_health_flag=="undefined") var adn_health_flag="";
if(typeof adn_proc_flag=="undefined") var adn_proc_flag = false;

try{
	var across_adn_ref=document.referrer;
	var across_adn_loc=document.location;
	var across_adn_loc_qry=document.location.search;
	var acorss_adn_hstnm=document.location.hostname;
	var across_adn_init_ss="";
	var across_adn_session_sec="";
	var across_adn_session_status=false;
	var across_adn_session_infos="";
	var across_adn_cookie_status=false;
	var across_rb_adn_uid="";
	var across_adn_utm_ui="";
	var across_adn_utm_pi="";
	var across_adn_utm_ci="";
	var across_adn_utm_gi="";
	var across_adn_utm_ii="";
	var across_adn_id="";
	var across_adn_cinfo="";
	var across_adn_uid="";
	var across_adn_ucode="";
	var across_adn_items="";
	var across_adn_infons=[];
	var across_adn_cart_items_info="";
	var is_across_adn_cartbtn=false;
	var is_across_adn_wishbtn=false;
	var across_adn_chk_todays=new Date();
	across_adn_chk_todays.setHours(across_adn_chk_todays.getHours()+9); 
	var across_adn_chk_full_date=across_adn_chk_todays.toISOString().replace('T', '').substring(0, 18);
	across_adn_chk_full_date=across_adn_chk_full_date.replace(/:/g, '');
	across_adn_chk_full_date=across_adn_chk_full_date.replace(/-/g, '');
}catch(e){}

try{
	across_adn_infons.push({"dt":across_adn_chk_full_date});
	across_adn_infons.push({"loc":across_adn_loc.href});
	across_adn_infons.push({"ref":across_adn_ref});

	across_rb_adn_uid=localStorage.getItem('rb_adn_uid');
	if(typeof(across_rb_adn_uid)==="undefined" || across_rb_adn_uid===null){
		across_rb_adn_uid="";
	}
}catch(e){}

/* 세션 storage UV용 Start */
window.across_adn_Storage=window.sessionStorage || (function(){
	// window.across_adn_Storage=(function(){
	var winObj=opener || window; //opener가 있으면 팝업창으로 열렸으므로 부모 창을 사용
	var data=JSON.parse(winObj.top.name || '{}');
	var fn={
		length : Object.keys(data).length,
		setItem : function(key, value){
			data[key]=value+'';
			winObj.top.name=JSON.strinction(ke) 는 IE9 이상을 지원하므로 IE8 이하 브라우저 환경에선 수정되어야함
		},
		removeItem : function(key(data);
			fn.length--;
		},
		clear : function(){
			winObj.top.name='{}';
			fn.length=0;
		}
	};
	return fn;
})();

try{
	var across_adn_s_storage =across_adn_Storage.getItem("across_adn_visit_check");
	var is_acorss_adn_visit=false;
	if( across_adn_s_storage=="" || across_adn_s_storage==null ||  typeof  across_adn_s_storage==undefined){
		across_adn_s_storage=0;
		is_acorss_adn_visit=true;
	}
	//console.log("across_adn_s_storage=>"+across_adn_s_storage);
	/* 세션 storage UV용 End */

	var across_adn_order_cnt=localStorage.getItem('adn_order_cnt');
	if( across_adn_order_cnt=="" || across_adn_order_cnt==null || typeof  across_adn_order_cnt==undefined ){
		across_adn_order_cnt =0;
	}

	var across_adn_order_dates=localStorage.getItem('adn_order_dates');
	if( across_adn_order_dates=="" || across_adn_order_dates==null || typeof  across_adn_order_dates==undefined ){
		across_adn_order_dates ="";
	}

	var adn_messaging_visit_val=localStorage.getItem('adn_messaging_visit');
	if(typeof(adn_messaging_visit_val)!="undefined" && adn_messaging_visit_val!=null)
	{
		if(is_acorss_adn_visit)
		{
			var save_visit_val=parseInt(adn_messaging_visit_val)+1;
			localStorage.setItem('adn_messaging_visit', save_visit_val);
		}
	}
	else
	{
		if(is_acorss_adn_visit)
		{
			var sa=eturn null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function fn_across_adn_getCookie(a){
    var b=a+"=";
    var x=0;
    while(x <= document.cookie.length)
    {
        var y=(x+b.length);
        if(document.cookie.substring(x, y)==b){
            if((endOfCookie=document.cookie.indexOf(";", y))==-1){
                endOfCookie=document.cookie.length;
            }
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x=document.cookie.indexOf(" ", x)+1;
        if(x==0){
            break;
        }
    }
    return "";
}

function fn_across_adn_setCookie(a, b, c){
    var d=new Date();
    d.setTime(d.getTime()+(1000 * 60 * 60 * 24 * c));
    document.cookie=a+"="+b+";path=/;expires="+d.toGMTString()+";";
}

function fn_across_adn_h_setCookie(a, b, c){
    var d=new Date();
    d.setTime(d.getTime()+(1000 * 60 * 60 * c ));
    document.cookie=a+"="+b+";path=/;expires="+d.toGMTString()+";";
}

function fn_across_adn_frm_send(c, d)
{
	try{
		var a=document.createElement("iframe");
		a.frameBorder="0";
		a.scrolling="no";
		a.width="0px";
		a.height="0px";
		a.setAttribute("src", d);
		document.getElementById(c).appendChild(a);
	}catch (exception){}
}

function fn_across_adn_shop_search(k){
	var across_adn_search_chk=false;
	var across_adn_search_info="";
	var across_last_adn_search="";
	try {
		var across_adn_search_val=localStorage.getItem('adn_shop_search');
		if(typeof(across_adn_search_val)!="undefined" && across_adn_search_val!=null){
			var adn_search_arr=across_adn_search_val.split("^@^");
			for (var i=0; i < adn_search_arr.length; i++){
				if(adn_search_arr[i]!=""){
					if(adn_search_arr[i]==k){
						across_last_adn_search=k;
						across_adn_search_chk=true
					} else across_adn_search_chk=false;
					if(!across_adn_search_chk){
						if(across_adn_search_info!="") across_adn_search_info+="^@^"+adn_search_arr[i];
						else across_adn_search_info+=adn_search_arr[i]
					}
				}
				if(i > 10) break
			}
		}
		if(across_last_adn_search!=""){
			if(across_adn_search_info!="") across_adn_search_info=across_last_adn_search+"^@^"+across_adn_search_info;
			else across_adn_search_info=across_last_adn_search
		} else {
			if(across_adn_search_info!="") across_adn_search_info=k+"^@^"+across_adn_search_info;
			else across_adn_search_info=k
		}
		localStorage.setItem('adn_shop_search', across_adn_search_info)
	} catch (exception){}
}

function fn_across_adn_search_find_txt(){
	if(location.pathname=="/shop/shopbrand.html"){
		try {
			var across_adn_searh_txt="";
			var frm=document.getElementsByName('form_search');
			if(frm.length > 0){
				across_adn_searh_txt=frm[0].prize1.value
			}
			if($(".item-wrap > .item-cont").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
			else if($(".prd-thumb").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
		} catch (exception){}
	} else if(location.pathname=="/m/search.html"){
		try {
			var across_adn_searh_txt="";
			var frm=document.getElementsByName('search');
			if(frm.length > 0){
				across_adn_searh_txt=frm[0].s.value
			}
			if($(".listPic").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
		} catch (exception){}
	} else if(location.pathname=="/product/search.html"){
		try {
			var across_adn_searh_txt="";
			across_adn_searh_txt=fn_across_adn_getParameterByName("keyword", document.location.href);
			if($(".prdImg").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
			if($(".thumbnail").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
		} catch (exception){}
	} else if(location.pathname=="/goods/goods_search.php"){
		try {
			var across_adn_searh_txt="";
			var frm=document.getElementsByName('frmSearch');
			if(frm.length > 0){
				across_adn_searh_txt=fn_across_adn_getParameterByName("keyword", document.location.href)
			}
			if($(".item_cont").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
		} catch (exception){}
	} else if(location.pathname=="/searchResult.do"){
		try {
			var across_adn_searh_txt="";
			var frm=document.getElementsByName('fm');
			if(frm.length > 0){
				across_adn_searh_txt=fn_across_adn_getParameterByName("searchStr", document.location.href)
			}
			if($(".pimg").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}else if($(".img_box1").length > 0){
				fn_across_adn_shop_search(across_adn_searh_txt)
			}
		} catch (exception){}
	} else {
		try {
			if(fn_across_adn_getParameterByName("mod", document.location.href)=="search")
			{
				across_adn_searh_txt=fn_across_adn_getParameterByName("keyword", document.location.href);
				if($(".wrap1").length > 0){
					fn_across_adn_shop_search(across_adn_searh_txt)
				}
			}
		}catch(e){}
	}
}

function fn_across_adn_orders_info(v1, v2)
{
	try{
		v2 = v2.replace(",","");
		v2 = v2.replace("원","");
	}catch(e){}

	var across_adn_order_info=localStorage.getItem('adn_order_info');
	var acorss_adn_order_cnt=localStorage.getItem('adn_order_cnt');
	var acorss_adn_order_price=localStorage.getItem('adn_order_price');
	var order_dates=across_adn_chk_full_date.substring(0, 8);

	try{
		if( across_adn_order_info=="" || across_adn_order_info==null || across_adn_order_info=="null" || typeof  across_adn_order_info==undefined ){
			localStorage.setItem('adn_order_info', v1);
			localStorage.setItem('adn_order_dates', order_dates);
			if( acorss_adn_order_cnt=="" || acorss_adn_order_cnt=="null" || acorss_adn_order_cnt==null || typeof  acorss_adn_order_cnt==undefined){
				localStorage.setItem('adn_order_cnt', 1);
				localStorage.setItem('adn_order_price', v2);
			}else{
				localStorage.setItem('adn_order_cnt', (parseInt(acorss_adn_order_cnt)+1));
				localStorage.setItem('adn_order_price', (parseInt(acorss_adn_order_price)+parseInt(v2)));
			}
		}else{
			if(across_adn_order_info!=v1){
				localStorage.setItem('adn_order_info', v1);
				localStorage.setItem('adn_order_dates', order_dates);
				if( acorss_adn_order_cnt=="" || acorss_adn_order_cnt=="null" || acorss_adn_order_cnt==null || typeof  acorss_adn_order_cnt==undefined ){
					localStorage.setItem('adn_order_cnt', 1);
					localStorage.setItem('adn_order_price', v2);
				}else{
					localStorage.setItem('adn_order_cnt', (parseInt(acorss_adn_order_cnt)+1));
					localStorage.setItem('adn_order_price', (parseInt(acorss_adn_order_price)+parseInt(v2)));
				}
			}
		}
	}catch(e){}
}

function fn_across_adn_order_items_info(v1, v2)
{
	try{
		var arr_ord_items=v2.split("#");
		if(arr_ord_items.length>=1){
			var inum=0;
			var arr_result_ord_items=new Array();
			var str_cart_item="";
			if(across_adn_cart_items_info!=""){
				var arr_cart_items=across_adn_cart_items_info.split("^");
				jQuery.each(arr_cart_items,function(key_cart,value_cart){
					var is_cart_items_diff=false;
					jQuery.each(arr_ord_items,function(key,value){
						if(value){
							var ord_item_detail=value.split("^");
							if(ord_item_detail[0]==value_cart){
								is_cart_items_diff=true;
							}
						}
					});
					if(is_cart_items_diff==false){
						arr_result_ord_items[inum]=value_cart;
						inum++;
					}
				});

				inum=0;
				jQuery.each(arr_result_ord_items,function(key_cart,value_cart){
					if(inum>0) str_cart_item+="^";
					str_cart_item+=value_cart;
					inum++;
				});
			}
			if(str_cart_item){
				localStorage.setItem('adn_cart_items_info', str_cart_item);
			}else{
				localStorage.setItem('adn_cart_items_info', "");
			}
		}
	}catch(e){}
}

function fn_across_adn_items_cookies(items){
	try {
		var items_chk=false;
		var items_info="";
		var last_items="";
		var a=fn_across_adn_getCookie("adn_items");
		var items_arr=a.split("^");
		for (var i=0; i < items_arr.length; i++){
			if(items_arr[i]!=""){
				b=items_arr[i].split("|");
				if(b[0]==items){
					b[1]=parseInt(b[1])+1;
					last_items=b[0]+"|"+b[1];
					items_chk=true
				} else items_chk=false;
				if(!items_chk){
					if(items_info!="") items_info+="^"+b[0]+"|"+b[1];
					else items_info+=b[0]+"|"+b[1]
				}
			}
			if(i > 100) break
		}
		if(last_items!=""){
			if(items_info!="") items_info=last_items+"^"+items_info;
			else items_info=last_items
		} else {
			if(items_info!="") items_info=items+"|"+1+"^"+items_info;
			else items_info=items+ fn_across_adn_replaceAll(str, searchStr, replaceStr){
	return str.split(searchStr).join(replaceStr);
}

function fn_across_adn_getXMLHttpRequest(){
	if(window.ActiveXObject){
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e){
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1){
				return null;
			}
		}
	} else if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	} else {
		return null;
	}
}

function fn_across_adn_handle_cartbtn()
{
	if(across_adn_items!="")
	{
		if(!is_across_adn_cartbtn){
			try{
				var is_cart_opt=true;

				if(is_cart_opt)
				{
					var p_url="https://kn.acrosspf.com/adn_btn.ad?ad_ids="+across_rb_adn_uid+"&ui="+across_adn_ucode+"&t=cart&i="+across_adn_items;
					jQuery.ajax({url: p_url,dataType: 'jsonp',success: function(data){}});

					is_across_adn_cartbtn=true;
				}
			}catch(e){}

		}
	}
}

function fn_across_adn_handle_wishbtn()
{
	if(across_adn_items!="")
	{
		if(!is_across_adn_wishbtn){
			try{
				var p_url="https://kn.acrosspf.com/adn_btn.ad?ad_ids="+across_rb_adn_uid+"&ui="+across_adn_ucode+"&t=wish&i="+across_adn_items;
				jQuery.ajax({url: p_url,dataType: 'jsonp',success: function(data){}});

				is_across_adn_wishbtn=true;
			}catch(e){}
		}
	}
}
function fn_across_adn_obj(){
    if(!document.getElementById("across_adn_container")){

		if(!document.getElementById("across_adn_container2")){
			var _adn_tmp_div=document.createElement("DIV");
			_adn_tmp_div.setAttribute("id", "across_adn_container2");
			_adn_tmp_div.setAttribute("style", "display:none");
			document.getElementsByTagName("body")[0].appendChild(_adn_tmp_div);
		}

		var a="across_adn_wrap_" + Math.floor(Math.random()*99999999999);
		var b=document.createElement("DIV");
		b.setAttribute("id", a);
		b.setAttribute("style", "display:none");
		document.getElementById("across_adn_container2").appendChild(b);

    }else{
	
		var a="across_adn_wrap_" + Math.floor(Math.random()*99999999999);
		var b=document.createElement("DIV");
		b.setAttribute("id", a);
		b.setAttribute("style", "display:none");
		document.getElementById("across_adn_container").appendChild(b);

	}

	return a;
}

function fn_across_adn_contain(){
    this.init=function(p){
		try{
			if(adn_health_flag=="ok"){
				if(typeof p !== 'undefined'){
					
					var across_adn_ad_trk_status = false;
					across_adn_ad_trk_infos=localStorage.getItem('across_adn_ad_trk');
					if(typeof(across_adn_ad_trk_infos)==="undefined" || across_adn_ad_trk_infos===null){
						across_adn_ad_trk_status=false;
					}else{
						across_adn_ad_trk_status=true;
						var across_adn_ad_trk_parse=JSON.parse(across_adn_ad_trk_infos);
					}

					var ut=p["ut"];
					var ui=p["ui"];
					try{
						var u_items=p["items"];
						console.log(p);
					}catch(e){}
					/** npay 테스트 부분 */
					try{
						var hostName=p["mall"] ? p["mall"] : "";
						// console.log(hostName);
					}catch(e){}
					/** npay 테스트 부분 끝*/
					var across_adn_cookie_ck =  "";
					try{
						across_adn_cookie_ck = fn_across_adn_getCookie("_adn_ck_");
					}catch(e){}	

					across_adn_ucode=ui;

					if(ut.toLowerCase()=="home"){
						var across_adn_visit=across_adn_Storage.getItem("across_adn_visit");
						if( across_adn_visit=="" || across_adn_visit==null ||  typeof  across_adn_visit==undefined){
							across_adn_Storage.setItem("across_adn_visit", ui);
							across_adn_Storage.setItem("across_adn_visit_check", parseInt(across_adn_s_storage)+1);

							var p_url="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&t=home&ts="+Math.floor(Math.random()*99999999999);
							var across_obj_id = fn_across_adn_obj();
							fn_across_adn_frm_send(across_obj_id, p_url);
							

                            if(across_rb_adn_uid){
                                var across_adn_dmp_sync =fn_across_adn_obj();
                                document.getElementById(across_adn_dmp_sync).innerHTML = '<img src="https://idm.skplanet.com/pixel?nid=45&uid='+across_rb_adn_uid+'&channel=web&url=https%3A%2F%2Fidm.skplanet.com%2Fgetuid" width="0" height="0"/>';
                            }
							
						}else{
							var tmp_visit_uid=across_adn_visit.split("|");
							var visit_stat=false;
							for(i=0;i<tmp_visit_uid.length;i++){
								if(tmp_visit_uid[i]==ui) visit_stat=true;
							}
							
							if(visit_stat==false){
								across_adn_Storage.setItem("across_adn_visit", across_adn_visit+"|"+ui);
								across_adn_Storage.setItem("across_adn_visit_check", parseInt(across_adn_s_storage)+1);
								var p_url="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&t=home&ts="+Math.floor(Math.random()*99999999999);
								var across_obj_id = fn_across_adn_obj();
								fn_across_adn_frm_send(across_obj_id, p_url);
								

                                if(across_rb_adn_uid){
                                    var across_adn_dmp_sync =fn_across_adn_obj();
                                    document.getElementById(across_adn_dmp_sync).innerHTML = '<img src="https://idm.skplanet.com/pixel?nid=45&uid='+across_rb_adn_uid+'&channel=web&url=https%3A%2F%2Fidm.skplanet.com%2Fgetuid" width="0" height="0"/>';
                                }
							}
						}
					} else if(ut.toLowerCase()=="item"){
						var adn_panel_cnt="0";
						try{
							adn_panel_cnt=adn_panel_param.length;
						} catch (exception){}
						try{
							adn_panel_cnt=adn_mobile_panel_param.length;
						} catch (exception){}
				
						var items_data="";
						try{	
							fn_across_adn_items_cookies(u_items["i"]);
							across_adn_items=u_items["i"];

							var p_url="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&t=item&i="+u_items["i"];
							var across_obj_id = fn_across_adn_obj();
							fn_across_adn_frm_send(across_obj_id, p_url);
							

							/** npay 테스트 부분 */
							var addonUrl = '//kn.acrosspf.com';
							var solutionUrl = '';

							
							if (hostName == 'cafe24') {
								solutionUrl = addonUrl + '/pay/npay_cafe24.ad?ui=' + ui;
							} else if (hostName == 'makeshop') {
								solutionUrl = addonUrl + '/pay/npay_makeshop.ad?ui=' + ui;
							} else if (hostName == 'godomall') {
								solutionUrl = addonUrl + '/pay/npay_godomall.ad?ui=' + ui;
							} else if (hostName == 'sixshop'){
								solutionUrl = addonUrl + '/pay/npay_sixshop.ad?ui=' + ui;
							} else if (hostName == 'imweb'){
								solutionUrl = addonUrl + '/pay/npay_imweb.ad?ui=' + ui;
							} else if(hostName == 'self'){
								solutionUrl = addonUrl + '/pay/npay_self.ad?ui=' + ui;
							}
							if(solutionUrl){
								var scriptType = ut.toLowerCase();
								var c=document.createElement("script");
								c.type="text/javascript";
								c.charset='UTF-8';
								c.defer=true;
								c.src = solutionUrl;
								document.getElementsByTagName("head")[0].appendChild(c);
								c.onload = function(){
									chkPayConversion(false, {
										'ui': ui,
										'ut': scriptType,
										'mall': hostName
									});
								}
							}
							/** npay 테스트 부분 끝 */
							
						}catch(e){}
					} else if(ut.toLowerCase()=="cart"){
						var items_data="";
						
						for(var k in u_items){
							if(u_items.hasOwnProperty(k) ){
								items_data+=u_items[k]["i"];
								if(typeof u_items[k]["s"] !== "undefined") items_data+="^"+u_items[k]["s"];
								else items_data+="^";
								if(typeof u_items[k]["c"] !== "undefined") items_data+="^"+u_items[k]["c"];
								else items_data+="^";
								if(typeof u_items[k]["q"] !== "undefined") items_data+="^"+u_items[k]["q"];
								else items_data+="^";
								if(typeof u_items[k]["p"] !== "undefined") items_data+="^"+u_items[k]["p"];
								else items_data+="^";
								items_data=items_data.replace(/\t/g, '');
							}
							items_data+="@@";
						}
						if(items_data){
							var save_cart_items=fn_across_adn_replaceAll(items_data, "^^@@", '^');
							if(save_cart_items){
								localStorage.setItem('adn_cart_items_info', save_cart_items);
							}
							across_adn_cart_items_info=localStorage.getItem('adn_cart_items_info');
							if( across_adn_cart_items_info=="" || across_adn_cart_items_info==null  ){
								across_adn_cart_items_info ="";
							}
						}

						var p_url="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&t=cart&i="+encodeURIComponent(items_data);
						var across_obj_id = fn_across_adn_obj();
						fn_across_adn_frm_send(across_obj_id, p_url);
						

						/** npay 테스트 부분 */
						var addonUrl = '//kn.acrosspf.com';
						var solutionUrl = '';

						
						if (hostName == 'cafe24') {
							solutionUrl = addonUrl + '/pay/npay_cafe24.ad?ui=' + ui;
						} else if (hostName == 'makeshop') {
							solutionUrl = addonUrl + '/pay/npay_makeshop.ad?ui=' + ui;
						} else if (hostName == 'godomall') {
							solutionUrl = addonUrl + '/pay/npay_godomall.ad?ui=' + ui;
						} else if (hostName == 'sixshop'){
							solutionUrl = addonUrl + '/pay/npay_sixshop.ad?ui=' + ui;
						} else if (hostName == 'imweb'){
							solutionUrl = addonUrl + '/pay/npay_imweb.ad?ui=' + ui;
						} else if(hostName == 'self'){
							solutionUrl = addonUrl + '/pay/npay_self.ad?ui=' + ui;
						}
						if(solutionUrl){
							var scriptType = ut.toLowerCase();
							var c=document.createElement("script");
							c.type="text/javascript";
							c.charset='UTF-8';
							c.defer=true;
							c.src = solutionUrl;
							document.getElementsByTagName("head")[0].appendChild(c);
							c.onload = function(){
								chkPayConversion(false, {
									'ui': ui,
									'ut': scriptType,
									'mall': hostName
								});
							}
						}
						/** npay 테스트 부분 끝 */

					} else if(ut.toLowerCase()=="purchase"){
						var uo=p["uo"];
						var up=p["up"];
						var purchase_items_data="";
						try{
							for(var k in adn_order_items_param){
								if(adn_order_items_param.hasOwnProperty(k)){
									purchase_items_data+=adn_order_items_param[k][0]["items"][0]["i"]+"^"+adn_order_items_param[k][0]["items"][0]["a"]+"^"+adn_order_items_param[k][0]["items"][0]["p"].replace(/,/g, '');
									purchase_items_data=purchase_items_data.replace(/\t/g, '');
								}
								purchase_items_data+="#";
							}
						}catch(e){}

						fn_across_adn_orders_info(uo, up);
						if(purchase_items_data){
							fn_across_adn_order_items_info(uo, purchase_items_data);
						} 

						var p_url="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&t=purchase&o="+uo+"&p="+up;
						var across_obj_id = fn_across_adn_obj();
						fn_across_adn_frm_send(across_obj_id, p_url);
						

						var p_url="https://kn.acrosspf.com/adn_order_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&o="+uo+"&p="+up+"&i="+encodeURIComponent(purchase_items_data)+"&r="+Math.floor(Math.random()*99999999999);
						var across_obj_id = fn_across_adn_obj();
						fn_across_adn_frm_send(across_obj_id, p_url);
						

						if(across_adn_session_status){
							var p_url="https://kn.acrosspf.com/adn_ga_order_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&o="+uo+"&p="+up+"&c="+across_adn_session_infos+"&i="+encodeURIComponent(purchase_items_data)+"&r="+Math.floor(Math.random()*99999999999);
							var across_obj_id = fn_across_adn_obj();
							fn_across_adn_frm_send(across_obj_id, p_url);
							/*jQuery.ajax({url: p_url,dataType: 'jsonp',success: function(data){}}); */
						}
						if(across_adn_ad_trk_status)
						{
							var p_url="https://kn.acrosspf.com/adn_ga_in_order_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&o="+uo+"&p="+up+"&pi="+across_adn_ad_trk_parse[3]["pi"]+"&ci="+across_adn_ad_trk_parse[5]["ci"]+"&gi="+across_adn_ad_trk_parse[6]["gi"]+"&ii="+across_adn_ad_trk_parse[7]["ii"]+"&dt="+across_adn_ad_trk_parse[0]["dt"]+"&i="+encodeURIComponent(purchase_items_data)+"&r="+Math.floor(Math.random()*99999999999);
							var across_obj_id = fn_across_adn_obj();
							fn_across_adn_frm_send(across_obj_id, p_url);
							/*jQuery.ajax({url: p_url,dataType: 'jsonp',success: function(data){}}); */
						}else if(across_adn_cookie_ck){
							var decode_across_adn_cookie_ck = decodeURIComponent(across_adn_cookie_ck);
							var tmp_cookie_ck = decode_across_adn_cookie_ck.split("|");
							var p_url="https://kn.acrosspf.com/adn_ga_in_order_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&o="+uo+"&p="+up+"&pi="+tmp_cookie_ck[4]+"&ci="+tmp_cookie_ck[1]+"&gi="+tmp_cookie_ck[2]+"&ii="+tmp_cookie_ck[3]+"&dt="+tmp_cookie_ck[6]+"&i="+encodeURIComponent(purchase_items_data)+"&r="+Math.floor(Math.random()*99999999999);
							var across_obj_id = fn_across_adn_obj();
							fn_across_adn_frm_send(across_obj_id, p_url);
						}
					} else if(ut.toLowerCase()=="complete"){
						var uo=p["uo"];
						var p_url="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&o="+uo+"&r="+Math.floor(Math.random()*99999999999);
						var across_obj_id = fn_across_adn_obj();
						fn_across_adn_frm_send(across_obj_id, p_url);
						

					} else if(ut.toLowerCase()=="category"){
						var uo=p["uo"];
						var p_url="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+ui+"&o="+uo+"&t=category&ts="+Math.floor(Math.random()*99999999999);
						var across_obj_id = fn_across_adn_obj();
						fn_across_adn_frm_send(across_obj_id, p_url);
						
					}
				}
				adn_proc_flag = true;
			}
		}catch(e){}
    }
}

function fn_across_adn_btn_ok(u, o){
	try{
		var a = fn_across_adn_getCookie("_adn_ck_");
		if(a!=""){
			var p_url="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&g=1&c="+encodeURIComponent(a)+"&r="+Math.floor(Math.random()*99999999999);
		}else{
			var p_url="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&g=0&c=&r="+Math.floor(Math.random()*99999999999);
		}
		if(typeof(p_url)!="undefined" && p_url!=null){
			var httpRequest=fn_across_adn_getXMLHttpRequest();
			httpRequest.open("GET",p_url,true);
			httpRequest.send(null);
		}
	}catch(e){}
}

function fn_across_adn_init()
{
	try{
		var next_ss_sec=parseInt(across_adn_session_sec)-1;
		if(next_ss_sec>0){
			across_adn_session_sec=next_ss_sec;
		}else{
			clearInterval(across_adn_init_ss);
			across_adn_Storage.removeItem("across_adn_sessions");
			across_adn_session_status=false;
		}
	}catch(e){}
}

function fn_across_adn_utm_paser(a){
	try{
		if(a){
			var tmp=[];
			tmp=a.split('|');
			//console.log(tmp);
			if(tmp.length>4){
				across_adn_utm_pi=tmp[0];
				across_adn_utm_ui=tmp[1];
				across_adn_utm_ci=tmp[2];
				across_adn_utm_gi=tmp[3];
				across_adn_utm_ii=tmp[4];
			}
		}
	}catch(e){}
}

try{
	var across_adn_funnels=fn_across_adn_getParameterByName("across_adn_utm");
	var is_across_adn_funnels=true;
	if( across_adn_funnels=="" || across_adn_funnels==null ||  typeof  across_adn_funnels==undefined){
		is_across_adn_funnels=false;
		var across_adn_session_info=across_adn_Storage.getItem("across_adn_sessions");
		if( across_adn_session_info=="" || across_adn_session_info==null ||  typeof  across_adn_session_info==undefined){
			is_across_adn_funnels=false;
		}else{
			var across_adn_session_info_parse=JSON.parse(across_adn_session_info);
			for(i=0;i<across_adn_session_info_parse.length;i++)
			{
				if(typeof across_adn_session_info_parse[i]["loc"] !== 'undefined'){
					var session_loc=across_adn_session_info_parse[i]["loc"];
					var session_loc_key=i;
				}
				else if(typeof across_adn_session_info_parse[i]["ref"] !== 'undefined'){
					var session_ref_key=i;
				}
				else if(typeof across_adn_session_info_parse[i]["dt"] !== 'undefined'){
					var session_dt_key=i;
				}
			}
			if(session_loc!=across_adn_loc.href){
				across_adn_session_info_parse[session_loc_key]["loc"]=across_adn_loc.href;
			}
			across_adn_session_info_parse[session_dt_key]["dt"]=across_adn_chk_full_date;
			across_adn_session_info_parse[session_ref_key]["ref"]=across_adn_ref;

			var across_adn_infons_jsonstr=JSON.stringify(across_adn_session_info_parse);
			across_adn_Storage.setItem("across_adn_sessions", across_adn_infons_jsonstr);
			localStorage.setItem('across_adn_ad_trk', across_adn_infons_jsonstr);

			is_across_adn_funnels=true;

			across_adn_session_status=true;
			across_adn_session_infos=across_adn_session_info_parse[4]["ui"]+"|"+across_adn_session_info_parse[5]["ci"]+"|"+across_adn_session_info_parse[6]["gi"]+"|"+across_adn_session_info_parse[7]["ii"]+"|"+across_adn_session_info_parse[3]["pi"]+"||"+across_adn_chk_full_date.substring(0, 8);
		}
	}else{
		var across_adn_decodedString=atob(across_adn_funnels);

		fn_across_adn_utm_paser(across_adn_decodedString);

		across_adn_infons.push({"pi":across_adn_utm_pi});
		across_adn_infons.push({"ui":across_adn_utm_ui});
		across_adn_infons.push({"ci":across_adn_utm_ci});
		across_adn_infons.push({"gi":across_adn_utm_gi});
		across_adn_infons.push({"ii":across_adn_utm_ii});

		var across_adn_infons_jsonstr=JSON.stringify(across_adn_infons);
		across_adn_Storage.setItem("across_adn_sessions", across_adn_infons_jsonstr);
		localStorage.setItem('across_adn_ad_trk', across_adn_infons_jsonstr);

		across_adn_session_status=true;

		across_adn_session_infos=across_adn_utm_ui+"|"+across_adn_utm_ci+"|"+across_adn_utm_gi+"|"+across_adn_utm_ii+"|"+across_adn_utm_pi+"||"+across_adn_chk_full_date.substring(0, 8);

		var across_adn_inflow=across_adn_Storage.getItem("across_adn_inflow");
		if( across_adn_inflow=="" || across_adn_inflow==null ||  typeof  across_adn_inflow==undefined){

			var inflow_url="https://kn.acrosspf.com/log/inflow.ad?ad_ids="+across_rb_adn_uid+"&pi="+across_adn_utm_pi+"&ui="+across_adn_utm_ui+"&ci="+across_adn_utm_ci+"&gi="+across_adn_utm_gi+"&ii="+across_adn_utm_ii;
			try{
				jQuery.ajax({url: inflow_url,dataType: 'jsonp',success: function(data){}});
			}catch(e){
				try{
					$.ajax({url: inflow_url,dataType: 'jsonp',success: function(data){}});
				}catch(e){
					try {
						var across_adn_inflows=document.createElement("script");
						across_adn_inflows.type="text/javascript";
						across_adn_inflows.charset='UTF-8';
						across_adn_inflows.defer=true;
						across_adn_inflows.src=inflow_url;
						document.getElementsByTagName("head")[0].appendChild(across_adn_inflows);
					}catch(e){}
				}
			}

			across_adn_Storage.setItem("across_adn_inflow",1);
			fn_across_adn_setCookie("_adn_ck_", encodeURIComponent(across_adn_utm_ui+"|"+across_adn_utm_ci+"|"+across_adn_utm_gi+"|"+across_adn_utm_ii+"|"+across_adn_utm_pi+"||"+across_adn_chk_full_date.substring(0, 8)), 31);
		}
	}
}catch(e){}

function fn_across_adn_uids()
{
    try{
        if(typeof(across_rb_adn_uid)==="undefined" || across_rb_adn_uid===null || across_rb_adn_uid==""){
            across_rb_adn_uid=rb_adn_uid;
            localStorage.setItem("rb_adn_uid", rb_adn_uid);
        } else {
            if(rb_adn_uid!=across_rb_adn_uid)
            {
				//console.log("rb_adn_uid=>"+rb_adn_uid);
				//console.log("across_rb_adn_uid=>"+across_rb_adn_uid);
                //across_rb_adn_uid=rb_adn_uid;
                //localStorage.setItem("rb_adn_uid", rb_adn_uid);
            }
        }
    }catch(e){}
}

if(is_across_adn_funnels)
{
    across_adn_session_sec=1800;
    across_adn_init_ss=setInterval(fn_across_adn_init, 1000);
}

function fnc_adn_health_info(callbackFunc)
{
	var _adn_chk_todays=new Date();
	var _adn_chk_dd=_adn_chk_todays.getDate();
	var _adn_chk_mm= (_adn_chk_todays.getMonth()+1);
	var _adn_chk_yyyy=_adn_chk_todays.getFullYear();
	var _adn_chk_hours=_adn_chk_todays.getHours();
	var _adn_chk_mins=_adn_chk_todays.getMinutes();

	var _adn_health_chk_min=parseInt(_adn_chk_mins)+10;
	if(parseInt(_adn_health_chk_min)>=60){
		_adn_health_chk_min=_adn_health_chk_min-60;
		_adn_chk_hours=parseInt(_adn_chk_hours)+1;
	}
	if(parseInt(_adn_chk_hours)>23)
	{
		_adn_chk_hours=0;
		_adn_chk_mm=parseInt(_adn_chk_mm)+1;
	}
	if(parseInt(_adn_chk_dd)<10) _adn_chk_dd='0'+_adn_chk_dd;
	if(parseInt(_adn_chk_mm)<10) _adn_chk_mm='0'+_adn_chk_mm;
	if(parseInt(_adn_chk_hours)<10) _adn_chk_hours='0'+_adn_chk_hours;
	if(parseInt(_adn_chk_mins)<10) _adn_chk_mins='0'+_adn_chk_mins;
	if(parseInt(_adn_health_chk_min)<10) _adn_health_chk_min='0'+_adn_health_chk_min;

	_adn_chk_full_date=_adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd+_adn_chk_hours+_adn_chk_mins;
	_adn_health_chk_full_date=_adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd+_adn_chk_hours+_adn_health_chk_min;

	var adn_health_val=localStorage.getItem('adn_health_chk_time');
	if(typeof(adn_health_val)!="undefined" && adn_health_val!=null)
	{
		if(parseInt(_adn_chk_full_date) < parseInt(adn_health_val)) return null;
	}
	if(window.ActiveXObject){
		try {
			var xhr=new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e){
			try {
				var xhr=new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1){
				var xhr=null;
			}
		}
	} else if(window.XMLHttpRequest){
		var xhr=new XMLHttpRequest();
	} else {
		var xhr=null;
	}
	try{
		if(adn_health_flag!="loading" && adn_health_flag!="ok"){
			if(typeof xhr  !== "null"){
				xhr.open('GET', 'https://kn.acrosspf.com/adn_health_jsonp_chk.ad?g=tags&t='+Math.floor(Math.random()*99999999999));
				xhr.timeout=10000;
				xhr.onload=function (){
					if(xhr.readyState==4){
						if(xhr.status==200){
							adn_health_flag="ok";
							localStorage.removeItem('adn_health_chk_time');
							callbackFunc();
						}
					}
				};
				xhr.onerror=function(){
					adn_health_flag="error";
					localStorage.setItem('adn_health_chk_time', _adn_health_chk_full_date);
					xhr.abort();
				};
				xhr.ontimeout=function (e){
					adn_health_flag="timeout";
					localStorage.setItem('adn_health_chk_time', _adn_health_chk_full_date);
					xhr.abort();
				};
				adn_health_flag="loading";
				xhr.send(null);
			}
		}
		else if(adn_health_flag=="ok"){
			localStorage.removeItem('adn_health_chk_time');
			callbackFunc();
		}
		else if(adn_health_flag=="loading"){
			var adn_health_yet=setInterval(function(){
				if(adn_health_flag=="ok"){
					clearInterval(adn_health_yet);
					callbackFunc()
				}
			}, 100)
		}

	}catch(e){}
}


function across_adn_inflow_sesion_evt()
{
    var across_adn_inflow=across_adn_Storage.getItem("across_adn_inflow");

    if(across_adn_inflow==1){
        var across_adn_session_info=across_adn_Storage.getItem("across_adn_sessions");
		if( across_adn_session_info=="" || across_adn_session_info==null ||  typeof  across_adn_session_info==undefined){

		}else{
			var across_adn_session_info_parse=JSON.parse(across_adn_session_info);

			var across_adn_inflow_evt=across_adn_Storage.getItem("across_adn_inflow_evt");
			if( across_adn_inflow_evt=="" || across_adn_inflow_evt==null ||  typeof  across_adn_inflow_evt==undefined){
				var inflow_evt_url = "https://kn.acrosspf.com/log/inflow_evt.ad?pi="+across_adn_session_info_parse[3]["pi"]+"&ui="+across_adn_session_info_parse[4]["ui"]+"&ci="+across_adn_session_info_parse[5]["ci"]+"&gi="+across_adn_session_info_parse[6]["gi"]+"&ii="+across_adn_session_info_parse[7]["ii"]+"&t="+Math.floor(Math.random()*99999999999);
				//console.log(p_url);

				try{
					jQuery.ajax({url: inflow_evt_url,dataType: 'jsonp',success: function(data){}});
				}catch(e){
					try{
						$.ajax({url: inflow_evt_url,dataType: 'jsonp',success: function(data){}});
					}catch(e){
						try {
							var across_adn_inflows_evt=document.createElement("script");
							across_adn_inflows_evt.type="text/javascript";
							across_adn_inflows_evt.charset='UTF-8';
							across_adn_inflows_evt.defer=true;
							across_adn_inflows_evt.src=inflow_evt_url;
							document.getElementsByTagName("head")[0].appendChild(across_adn_inflows_evt);
						}catch(e){}
					}
				}
				across_adn_Storage.setItem("across_adn_inflow_evt",1);
			}
		}
    }
}   


window.addEventListener('load', function(){
    if(!document.getElementById("across_adn_container")){
        var _adn_tmp_div=document.createElement("DIV");
        _adn_tmp_div.setAttribute("id", "across_adn_container");
        _adn_tmp_div.setAttribute("style", "display:none");
        document.getElementsByTagName("body")[0].appendChild(_adn_tmp_div);
    }

    var across_adn_body_click_stauts = false;
    var across_adn_scroll_stauts = false;
    var across_adn_touch_stauts = false;
    document.body.addEventListener('click', function( event ) {
        if(across_adn_body_click_stauts==false){
            across_adn_body_click_stauts = true;
            across_adn_inflow_sesion_evt();
            //console.log('click');
        }
    } );
    
    document.addEventListener('scroll', function( event ) {
        if(across_adn_scroll_stauts==false){
            across_adn_scroll_stauts = true;
            across_adn_inflow_sesion_evt();
           //console.log('scroll');
        }
    } );

});

fnc_adn_health_info(function(){
    try {

		if(across_rb_adn_uid=="")
		{
			try {
				var across_adn_dc=document.createElement("script");
				acrosacross_adn_dc.readyState=="loaded" || across_adn_dc.readyState=="complete"){ 
							across_adn_dc.onreadystatechange=null; 
							fn_across_adn_uids(); 
						}
					}
				} else { 
					across_adn_dc.onload=function (){ 
						fn_across_adn_uids(); 
					}
				}
				across_adn_dc.src="https://kn.acrosspf.com/across_adn_uids.ad";
				document.getElementsByTagName("head")[0].appendChild(across_adn_dc);
			}catch(e){}
		}


        if(across_adn_ref.indexOf("naver.com")!=-1){
            var q=fn_across_adn_getParameterByName("query", across_adn_ref);
            if(q){
                var _adn_k=function(){try{if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
                $( document ).ready(_adn_k);
            }
            var q2=fn_across_adn_getParameterByName("oquery", across_adn_ref);
            if(q2){
                var _adn_k2=function(){try{if(q2!=''){q2=q2.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q2=encodeURIComponent(q2);if(q2!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q2;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
                $( document ).ready(_adn_k2);
            }

        }else if(across_adn_ref.indexOf("daum.net")!=-1){
            var q=fn_across_adn_getParameterByName("q", across_adn_ref);
            if(q){
                var _adn_k=function(){try{if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
                $( document ).ready(_adn_k);
            }
        }else if(across_adn_ref.indexOf("nate.com")!=-1){
            var q=fn_across_adn_getParameterByName("q", across_adn_ref);
            if(q){
                var _adn_k=function(){try{if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
                $( document ).ready(_adn_k);
            }
        }else if(across_adn_ref.indexOf("google.co.kr")!=-1){
            var q=fn_across_adn_getParameterByName("q", across_adn_ref);
            if(q){
                var _adn_k=function(){try{if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
                $( document ).ready(_adn_k);
            }
        }else if(across_adn_ref.indexOf("zum.com")!=-1){
            var q=fn_across_adn_getParameterByName("query", across_adn_ref);
            if(q){
                var _adn_k=function(){try{if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='httpf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
                $( document ).ready(_adn_k);
            }
        }
    } catch (exception){}


    try{
        jQuery('.cart .cartBtn').click(function(){
            fn_across_adn_handle_cartbtn();
        });
    }catch(e){}
    try{
        jQuery('#cartBtn').click(function(){
            fn_across_adn_handle_cartbtn();
        });
    }catch(e){}
    across_adn_handle_cartbtn();
        });
    }catch(e){}
    try{
        jQuery('.btn_add_cart').click(function(){
            fn_across_adn_handle_cartbtn();
        });
    }catch(e){}


    try{
        document.getElementById('wishBtn').addEventListener('click', fn_across_adn_handle_wishbtn);
    }catch(e){}
    
});

function chkPayConversion(chkReturn, adverParams){
	function nPayConv(params){
		var b="https://kn.acrosspf.com/adn_npay_order_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+params.ui+"&o="+initOrderId()+"&p="+params.ordPrice+"&r="+Math.floor(Math.random()*99999999999);
		var u=fn_across_adn_obj();
		fn_across_adn_frm_send(u, b);
		localStorage.setItem(params.chkDateName, params.chkDate.setMinutes(params.chkDate.getMinutes()+params.limitMinute));
	}

	function chkPrice(hostType){
		var result='0';
		var selectors=[];

		// if(hostType=='cafe24'){
		// } else if(hostType=='makeshop'){
		// } else if(hostType=='godomall'){
		// } else if(hostType=='sixshop'){
		// } else if(hostType=='imweb'){
		// } else if(hostType=='self'){
		// }
		selectors=adn_pay_selectors.price;
		var selectorsCnt=selectors.length;

		for(var i=0; i < selectorsCnt; i++){
			result=document.querySelector(selectors[i])!=null ? document.querySelector(selectors[i]).textContent : '0';
			if(result!='0' && result.replace(/[^0-9]/g, "")!=''){
				break;
			}
		}

		return result;
	}

	function initOrderId()
	{
		var today=new Date();
		var year =today.getFullYear();
		var month=today.getMonth()+1;
		var date =today.getDate();
		var time =today.getTime();
		var order_idxx='';

		if(parseInt(month) < 10){
			month="0"+month;
		}

		if(parseInt(date) < 10){
			date="0"+date;
		}

		return order_idxx="ADN_"+year+""+month+""+date+""+time;
	}

	function addEventProc(payElement, chkReturn){
		payElement.addEventListener('click', function (){
			if(Object.keys(adn_pay_selectors).length > 0){
				var id=payElement.getAttribute('id');
				var ordPrice=chkPrice(hostType).replace(/[^0-9]/g, "");
				var limitMinute=3;
				var chkDate=new Date();
				var prevDate=new Date(parseInt(localStorage.getItem(chkDateName)));

				// console.log(ordPrice);

				if(localStorage.getItem(chkDateName)!=null){
					// console.log('@@@'+(parseInt(prevDate.getDate()) - parseInt(chkDate.getDate())));
					// if((prevDate.getDate()!=chkDate.getDate())){
					// 	localStorage.removeItem(chkDateName);
					// }
					if(prevDate < chkDate){
						console.log('remove Ip.');
						localStorage.removeItem(chkIpName);
					}
				}

				if(ordPrice!='0' && ordPrice!=''){
					console.log('in conv. ' +ordPrice);
					if(localStorage.getItem(chkDateName)==null){
						nPayConv({
							'ui': adverParams['ui'],
							'ordPrice': ordPrice,
							'chkDateName': chkDateName,
							'chkDate': chkDate,
							'limitMinute': limitMinute
						});
					} else {
						if(localStorage.getItem(chkIpName)==null && prevDate < chkDate){
							nPayConv({
								'ui': adverParams['ui'],
								'ordPrice': ordPrice,
								'chkDateName': chkDateName,
								'chkDate': chkDate,
								'limitMinute': limitMinute
							});
						} 
					}

				} else {
					console.log('price is 0.');

					if(adverParams['ut']=='Item'){
						// 카페24 여러버튼 이벤트 추가
						if(typeof adn_pay_selectors.layer!='undefined' && chkReturn==false){
							for (var i=0; i < adn_pay_selectors.layer.length; i++){
								if(document.querySelector(adn_pay_selectors.layer[i])!=null){
									chkPayConversion(true, adverParams);
									break;
								}
							}
						}
					}
				}
			}
		})
	}
	
	console.log('adn npay in process.');
	var hostType=adverParams['mall'] ? adverParams['mall'] : '';
	var chkDateName='adn_time_check';
	// var chkPrdName='adn_product_check';
	var chkIpName='adn_user_ip';

	if(typeof adn_pay_selectors!='undefined'){
		if(chkReturn==false){
			var payElements=['[id^="NPAY_BUY_LINK_IDNC_ID"]'];
			var payElementsCnt=payElements.length;

			if(adn_pay_selectors.button!='undefined'){
				payELements=adn_pay_selectors.button;
			}

			for(var i=0;i < payElementsCnt; i++){
				if(document.querySelectorAll(payElements[i]).length > 0){
					addEventProc(document.querySelector(payElements[i]), chkReturn);
				}
			}
		}else{
			if(adn_pay_selectors.iframe!='undefined'){
				try{
					for(var i=0;i < adn_pay_selectors.iframe.length; i++){
						if(document.querySelector(adn_pay_selectors.iframe[i])!=null){
							document.querySelector(adn_pay_selectors.iframe[i]).addEventListener('load', function(){
								addEventProc(this.contentWindow.document.querySelector('[id^="NPAY_BUY_LINK_IDNC_ID"]'), chkReturn);
							});
						}
					}
				}catch (e){}
			}
		}
	}
}
