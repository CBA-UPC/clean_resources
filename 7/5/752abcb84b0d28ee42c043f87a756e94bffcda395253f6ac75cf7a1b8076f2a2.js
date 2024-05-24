/*
x- から始まるものは x_ で保持、送信時に x- に置換する
*/

var itmdp = {};

/* CONFIG
-------------------------------*/
itmdp.posall;
itmdp.t = 'js';
itmdp.x_ver = '1'; // バージョン
itmdp.oe = 'shift_jis'; // 文字コード
itmdp.apibase = 'https://dlv.itmedia.jp/adsv/v1?';
itmdp.newApibase = 'https://aclog.itmedia.co.jp/v1.js?'; // 新エンドポイント
itmdp.linkInternalFilters = 'javascript:,itmedia.co.jp,atmarkit.co.jp,bizmakoto.jp,eetimes.jp,itmedia.jp,cancom-j.com,ednjapan.com,keyman.or.jp';
itmdp.linkApiPutFilters = 'posall,nurl,ref,word,rnd,oe,fp,id,cn,pn,t,x_pn,x_dp,x_swd,x_vid,x_ubid,tt,x_ver,x_lt,x_al,x_ch,x_sch,x_p11,x_p14,x_p17,x_p18,x_p22,x_ke,x_p29,x_p30,x_p31,x_p32,x_p33,x_rref,x_p35,x_af,x_p42,x_p43,x_p44,x_p45,x_p46,x_p47,x_p57,x_p58,x_e,composite'; // 送信フィルタ
itmdp.newLinkApiPutFilters = 'et,url,ref,words,rnd,oe,fp,id,cn,pn,t,pn,dp,swd,vid,x_ubid,tt,ver,lt,ln,ch,sch,x_p11,x_p14,x_p17,x_p18,x_p22,ke,x_p29,x_p30,x_p31,x_p32,x_p33,rref,x_p35,x_af,x_p42,x_p43,x_p44,x_p45,x_p46,x_p47,x_p57,x_p58,x_e,composite'; // 新エンドポイント送信フィルタ

/* UTILS
-------------------------------*/
// ADD EVENT
itmdp.a_e_l = function(elem,type,func,capture){
	var ret = null;
	if(elem.addEventListener){
		ret = func;
		elem.addEventListener(type,func,capture);
	}else if(elem.attachEvent){
		ret = func;
		elem.attachEvent('on' + type,ret);
	}
	return ret;
};

// REMOVE EVENT
itmdp.d_e_l = function(element,type,func,capture){
	if(element.removeEventListener){
		element.removeEventListener(type,func,capture);
	}else if(element.detachEvent){
		element.detachEvent('on' + type,func);
	}
};

// GET COOKIE
// cn = cookie 名
itmdp.g_c = function(cn){
	var d = document;
	var str = '';
	var val = '';
	var cookies = '';
	try{
		if(cn){
			cookies = d.cookie.split('; ');
			for(var i = 0; i < cookies.length; i++){
				val = cookies[i].split('=');
				if(val[0] != cn) continue;
				str = unescape(val[1]);
			}
		}
	}catch(e){
		console.log(e);
	}
	return str;
};

// SET COOKIE
// param {'name':COOKIE名,'value':値,'domain':HOST,'path':PATH,'expires':有効期限,'secure':0 or 1（0 = 無効、1 = 有効）}
itmdp.s_c = function(param){
	if(!param['name']) return false;
	var str = param['name'] + '=' + escape(param['value']);
	if(param['domain']){
		if(param['domain'] == 1) param['domain'] = location.hostname;
		str += '; domain=' + param['domain'];
	}
	if(param['path']){
		if(param['path'] == 1) param['path'] = location.pathname;
		str += '; path=' + param['path'];
	}
	if(param['expires']){
		var nowtime = new Date().getTime();
		param['expires'] = new Date(nowtime + (60 * 60 * 24 * 1000 * param['expires']));
		param['expires'] = param['expires'].toGMTString();
		str += '; expires=' + param['expires'];
	}
	if(param['secure'] && location.protocol == 'https:'){
		str += '; secure';
	}
	document.cookie = str;
	return true;
};

// GET META
// mn = meta name
itmdp.g_m = function(mn){
	var str = '';
	try{
		var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta');
		for(var i = 0; i < m.length; i++){
			if(mn === m[i].name){
				str = m[i].content;
				break;
			}
		}
	}catch(e){
		console.log(e);
	}
	return str;
};

// GET URL PARAM
// 主に検索ワード
itmdp.g_p = function(url,key){
	var str = '';
	try{
		if(url.indexOf('?') != -1){
			var q = url.split('?')[1];
			var ps = q.split('&');
			var k = '';
			for(var i = 0; i < ps.length; i++){
				k = ps[i].split('=');
				if(key === k[0]){
					str = decodeURIComponent(k[1]);
					break;
				}
			}
		}
	}catch(e){
		console.log(e);
	}
	return str;
};

// URL PARAM CUT
itmdp.u_p_c = function(url){
	var str = url.replace(/(\?|#).*$/,'');
	return str;
};

// HTML TAG CUT
itmdp.h_t_c = function(str){
	return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
};

// GET VID
// js fpcookie?site_id=itm_ 内の変数取得
itmdp.g_vid = function(){
	var str = '';
	var cookie_vid = itmdp.g_c('s_vid');
	if(typeof sc_visitor_id !== 'undefined'){
		str = sc_visitor_id;
	}else if(cookie_vid != ''){
		str = cookie_vid;
	}
	return str;
};

// GET COMPOSITE
itmdp.g_adcomposite = function(){
	var str = '';
	if(typeof adcomposite !== 'undefined'){
		str = adcomposite;
	}
	return str;
};

// GET DOMAINPATH
itmdp.g_dp = function(){
	var d = document;
	var str = '';
	if(d.getElementById('domainpath')){
		str = d.getElementById('domainpath').content;
	}else if(d.getElementById('adpath')){
		str = d.getElementById('adpath').content.replace(/\//g,',').replace('ITmedia','itm');
	}else{
		str = itmdp.g_m('adpath').replace(/\//g,',').replace('ITmedia','itm');
	}
	return str;
};

// x_ replace
itmdp.r_x = function(str){
	return str.replace('x_','x-');
};

// SC 2 ITMDP
itmdp.sc2itmdp = function(){
	if(typeof s !== 'undefined'){
		if(s.pageName) itmdp.x_pn = s.pageName;
		if(s.prop2) itmdp.x_dp = s.prop2;
		if(s.prop5) itmdp.x_al = s.prop5;
		if(s.prop6) itmdp.x_ch = s.prop6;
		if(s.prop7) itmdp.x_sch = s.prop7;
		if(s.prop11) itmdp.x_p11 = s.prop11;
		if(s.prop14) itmdp.x_p14 = s.prop14;
		if(s.prop17) itmdp.x_p17 = s.prop17;
		if(s.prop18) itmdp.x_p18 = s.prop18;
		if(s.prop22) itmdp.x_p22 = s.prop22;
		if(s.prop28) itmdp.x_ke = s.prop28;
		if(s.prop29) itmdp.x_p29 = s.prop29;
		if(s.prop30) itmdp.x_p30 = s.prop30;
		if(s.prop31) itmdp.x_p31 = s.prop31;
		if(s.prop32) itmdp.x_p32 = s.prop32;
		if(s.prop33) itmdp.x_p33 = s.prop33;
		if(s.prop34) itmdp.x_rref = s.prop34;
		if(s.prop35) itmdp.x_p35 = s.prop35;
		if(s.prop41) itmdp.x_af = s.prop41;
		if(s.prop42) itmdp.x_p42 = s.prop42;
		if(s.prop43) itmdp.x_p43 = s.prop43;
		if(s.prop44) itmdp.x_p44 = s.prop44;
		if(s.prop45) itmdp.x_p45 = s.prop45;
		if(s.prop46) itmdp.x_p46 = s.prop46;
		if(s.prop47) itmdp.x_p47 = s.prop47;
		if(s.prop57) itmdp.x_p57 = s.prop57;
		if(s.prop58) itmdp.x_p58 = s.prop58;
		if(s.events) itmdp.x_e = s.events;
	}
};

// fpcookie 代替
itmdp.g_ubid = function(){
	var w = window;
	var key = 's_ubid';
	var str = itmdp.g_c(key); // cookie 値取得
	var flag_l = (('localStorage' in w) && (w.localStorage !== null))?1:0; // localStorage 使用可否チェック
	var str_l = (flag_l)?localStorage.getItem(key):0; // localStorage 値取得
	var no_cookie = function(str){
		var filter = itmdp.linkInternalFilters.split(',');
		var my_host = location.hostname;
		var cookie_host = false;
		var cookie_params = {};
		for(var i = 0; i < filter.length; i++){
			if(my_host.match(filter[i])){
				cookie_host = '.' + filter[i];
				break;
			}
		}
		cookie_params = {'name':key,'value':str,'path':'/','expires':365 * 5};
		if(cookie_host) cookie_params['domain'] = cookie_host;
		itmdp.s_c(cookie_params);
	};
	if(flag_l){
		// cookie localStorage どちらもない場合ランダム値を新たに生成
		if((!str || str == '') && !str_l){
			str = itmdp.g_r_s('20');
			no_cookie(str);
			localStorage.setItem(key,str);
	
		// cookie なし locaStorage あり
		}else if((!str || str == '') && str_l){
			str = str_l;
			no_cookie(str);
	
		// cookie あり locaStorage なし
		}else if(str && !str_l){
			localStorage.setItem(key,str);
		}
	// localStorage 使用不可
	}else{
		if(!str || str == ''){
			str = itmdp.g_r_s('20');
			no_cookie(str);
		}
	}
	return str;
};

// random str
itmdp.g_r_s = function(l){
	for(var o = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',s = '', re=/^([0-9A-Z]+|[0-9a-z]+|[A-Za-z]+)$/, j, i = 0;i < 62; i++){
		s += o.charAt(j = Math.floor((62 - i) * Math.random()));
		o = o.substring(0,j) + o.substring(j + 1)
	}
	do{
		for(var p = '', i = 0; i < l; i++) p += s.charAt(Math.floor(62 * Math.random()))
	}while(re.test(p));
	return p;
};

/* CODE
-------------------------------*/
// PV
// JS REQUEST
itmdp.pageview = function(){
	var d = document;
	var filter = itmdp.linkApiPutFilters.split(',');
	var apiquery = [];
	var apiurl = '';
	var js = d.createElement('script');
	// 新エンドポイント変数宣言 ここから
	var newFilter = itmdp.newLinkApiPutFilters.split(',');
	var newApiquery = [];
	var newApiurl = '';
	var newJs = d.createElement('script');
	// 新エンドポイント変数宣言 ここまで
	var load_js = function(e){
		d.body.removeChild(e.target); // 読込完了後削除
	};
	itmdp.posall = 'N'; // 新エンドポイントでは 'PV' に変更
	for(var i = 0; i < filter.length; i++){
		if(itmdp[filter[i]]){
			apiquery.push(itmdp.r_x(filter[i]) + '=' + encodeURIComponent(itmdp[filter[i]]));
			// 新エンドポイント用URLパラメーター作成 ここから
			if(filter[i] == "posall" && itmdp[filter[i]] == "N"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent("PV"));
			} else if(filter[i] != "pn"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent(itmdp[filter[i]]));
			}
			// 新エンドポイント用URLパラメーター作成 ここまで
		}
	}
	apiurl = itmdp.apibase + apiquery.join('&');
	js.src = apiurl;
	js.id = 'itmdp_N_beacon';
	d.body.appendChild(js);
	js.addEventListener('load',load_js,false);
	// 新エンドポイント用データ送信 ここから
	newApiurl = itmdp.newApibase + newApiquery.join('&');
	newJs.src = newApiurl;
	newJs.id = 'new_itmdp_N_beacon';
	d.body.appendChild(newJs);
	newJs.addEventListener('load',load_js,false);
	// 新エンドポイント用データ送信 ここまで
};

// HTML REQUEST
itmdp.pageview_html = function(){
	var d = document;
	var filter = itmdp.linkApiPutFilters.split(',');
	var apiquery = [];
	var apiurl = '';
	var elem = d.createElement('iframe');
	// 新エンドポイント変数宣言 ここから
	var newFilter = itmdp.newLinkApiPutFilters.split(',');
	var newApiquery = [];
	var newApiurl = '';
	var newElem = d.createElement('iframe');
	// 新エンドポイント変数宣言 ここまで
	var load_elem = function(e){
		d.body.removeChild(e.target);
	};
	itmdp.t = 'html';
	itmdp.posall = 'N'; // 新エンドポイントでは 'PV' に変更
	for(var i = 0; i < filter.length; i++){
		if(itmdp[filter[i]]){
			apiquery.push(itmdp.r_x(filter[i]) + '=' + encodeURIComponent(itmdp[filter[i]]));
			// 新エンドポイント用URLパラメーター作成 ここから
			if(filter[i] == "posall" && itmdp[filter[i]] == "N"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent("PV"));
			} else if(filter[i] != "pn"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent(itmdp[filter[i]]));
			}
			// 新エンドポイント用URLパラメーター作成 ここまで
		}
	}
	apiurl = itmdp.apibase + apiquery.join('&');
	elem.src = apiurl;
	elem.id = 'itmdp_N_beacon';
	elem.style.display = 'none';
	elem.style.width = '0px';
	elem.style.height = '0px';
	d.body.appendChild(elem);
	elem.addEventListener('load',load_elem,false);
	// 新エンドポイント用データ送信 ここから
	newApiurl = itmdp.newApibase + newApiquery.join('&');
	newElem.src = newApiurl;
	newElem.id = 'new_itmdp_N_beacon';
	newElem.style.display = 'none';
	newElem.style.width = '0px';
	newElem.style.height = '0px';
	d.body.appendChild(newElem);
	newElem.addEventListener('load',load_elem,false);
	// 新エンドポイント用データ送信 ここまで
};

// EVENT
itmdp.pageevent = function(ary){
	var d = document;
	var filter = itmdp.linkApiPutFilters.split(',');
	var apiquery = [];
	var apiurl = '';
	var img = new Image();
	// 新エンドポイント変数宣言 ここから
	var newFilter = itmdp.newLinkApiPutFilters.split(',');
	var newApiquery = [];
	var newApiurl = '';
	var newImg = new Image();
	// 新エンドポイント変数宣言 ここまで
	var new_ary = itmdp;
	new_ary.posall = 'E';
	for(var i in ary){ // 既存 PV パラメータに追加
		new_ary[i] = ary[i];
	}
	for(var i = 0; i < filter.length; i++){
		if(itmdp[filter[i]]){
			apiquery.push(itmdp.r_x(filter[i]) + '=' + encodeURIComponent(new_ary[filter[i]]));
			// 新エンドポイント用URLパラメーター作成 ここから
			if(filter[i] == "posall" && itmdp[filter[i]] == "N"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent("PV"));
			} else if(filter[i] == "posall" && itmdp[filter[i]] == "E"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent("EV"));
			} else if(filter[i] != "pn"){
				newApiquery.push(itmdp.r_x(newFilter[i]) + '=' + encodeURIComponent(new_ary[filter[i]]));
			}
			// 新エンドポイント用URLパラメーター作成 ここまで
		}
	}
	apiurl = itmdp.apibase + apiquery.join('&');
	img.src = apiurl;
	// 新エンドポイント用データ送信 ここから
	newApiurl = itmdp.newApibase + newApiquery.join('&');
	newImg.src = newApiurl;
	// 新エンドポイント用データ送信 ここまで
};

// リダイレクトのリファラチェック
itmdp.rrefcheck = function(){
	var str = itmdp.g_c('pc2sp_referrer');
	var reflist = ['itmedia.co.jp','itmedia.jp'];
	for(var i = 0; i < reflist.length; i++){
		if(str.indexOf(reflist[i]) != -1){
			str = '';
			break;
		}
	}
	itmdp.s_c({'name':'pc2sp_referrer','value':'','domain':1,'path':'/','expires':-1,'secure':0});
	return str;
};

/* BASE
-------------------------------*/
itmdp.nurl = document.URL; // アクセス URL
itmdp.fp = itmdp.g_m('adpath'); // adpath
itmdp.x_pn = itmdp.u_p_c(document.URL); // アクセス URL
itmdp.x_dp = itmdp.g_dp(); // domainpath
itmdp.ref = document.referrer;
itmdp.word = itmdp.g_m('keywords'); // meta name="keywords" から取得
itmdp.x_swd = itmdp.g_p(document.referrer,'p'); // リファラーパラメータから取得
itmdp.x_vid = itmdp.g_vid(); // //fc.itmedia.co.jp/fpcookie?site_id=itm_
itmdp.x_ubid = itmdp.g_ubid();
itmdp.tt = itmdp.g_c('bpc'); // cookie bpc から取得
itmdp.rnd = Date.now(); // キャッシュ対策
itmdp.composite = itmdp.g_adcomposite();
itmdp.x_rref = itmdp.rrefcheck();

