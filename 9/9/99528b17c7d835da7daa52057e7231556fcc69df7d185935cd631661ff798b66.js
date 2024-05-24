(function(){

	function track_host() {
		var track_host="http://d-track.send.microad.jp";
		if(document.location.protocol=="https:"){
			track_host="https://d-track.send.microad.jp";
		}
		return track_host;
	}

	function create_cache_buster(){
		var randomValue = Math.floor(Math.random() * Math.pow(10, 18)).toString(16);
		var date = new Date().getTime().toString(16);
		return randomValue + date;
	}

	function get_enc_aid_from_url_param(){
		var param = 'microad_enc_aid';
		var urlParamArr = location.search.substring(1).split('&');
		for (var i = 0; i < urlParamArr.length; i++) {
			if (urlParamArr[i].split('=')[0] === param){
				return urlParamArr[i].split('=')[1];
			}
		}
		return '';
	}

	function get_enc_aid_from_cookie(){
		var res = '';
		var key = 'microad_enc_aid';
		var cookieArr = document.cookie.split( '; ' );
		for (var i = 0; i < cookieArr.length; i++){
			if (cookieArr[i].split('=')[0] === key){
				res = cookieArr[i].split('=')[1];
				set_first_party_cookie(res);
				break;
			}
		}
		return res;
	}

	function set_first_party_cookie(microad_enc_aid_value){
		var period = 365;
		if(microad_enc_aid_value !== ''){
			document.cookie = 'microad_enc_aid='+microad_enc_aid_value+'; domain='+document.domain+'; path=/; max-age='+60*60*24*period;
		}
	}

	function pc_track(co_account_id, group_id, country_id, version, tag_url) {
		var encode_url=escape(document.referrer);
		var blade_query="co_account_id="+co_account_id+"&group="+group_id+"&country_id="+country_id+"&ver="+version+"&referrer="+encode_url;
		if (tag_url) {
			var encode_tag_url = escape(tag_url);
			blade_query = blade_query + "&url=" + encode_tag_url;
		}

		blade_query = blade_query + "&cbt=" + create_cache_buster();

		var microad_enc_aid =  get_enc_aid_from_cookie();
		microad_enc_aid = (microad_enc_aid=='') ? get_enc_aid_from_url_param() : microad_enc_aid;
		blade_query = (microad_enc_aid !== '') ? blade_query + "&enc_aid=" + microad_enc_aid : blade_query;

		var blade_url=track_host()+"/bl_track.cgi?"+blade_query;
		var blade_target=new Image();
		blade_target.src=blade_url;
	}

	function sp_track(co_account_id, group_id, tag_url) {

		var init = function () {
			var microadDevice = new MicroadBladeDevice(navigator.userAgent);
			if (microadDevice) {
				var country_id = "";
				var version = "";
				var custom = "";
				var microad_enc_aid =  get_enc_aid_from_cookie();
				microad_enc_aid = (microad_enc_aid=='') ? get_enc_aid_from_url_param() : microad_enc_aid;
				new BladeSponsorAccess(co_account_id, group_id, microadDevice, track_host(), country_id, version, custom, tag_url, create_cache_buster() ,microad_enc_aid);
			}
		};

		var jsList=[];
		var loader = function () {
			var o = jsList.length;
			for (var i = 0; i < jsList.length; i++) {
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.charset = 'utf-8';
				s.src = jsList[i];
				s.onload = function () {
					o--;
					if(o == 0) init();
				};
				document.body.appendChild(s);
			}
		};
		var jsURI="http://d-cache.microad.jp";
		if(document.location.protocol=="https:"){
			jsURI="https://d-cache.microad.jp";
		}
		jsList.push(jsURI+"/js/device.js");
		jsList.push(jsURI+"/js/sponsor.js");
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', loader, true);
		} else {
			loader();
		}
	}

	function bl_track(co_account_id, group_id, country_id, version, tag_url) {
		if(/(iPhone|iPod|iPad|Android)/.test(navigator.userAgent)){
			sp_track(co_account_id, group_id, tag_url);
		} else {
			pc_track(co_account_id, group_id, country_id, version, tag_url);
		}
	}

	function parse_blade_script() {
		var scripts = document.getElementsByTagName('script');

		var target_params = new Array();

		for (var i = 0; i < scripts.length; i++) {
			if (document.getElementsByTagName('script')[i].innerHTML.indexOf('blade_',0)>-1 && document.getElementsByTagName('script')[i].innerHTML.match(/.*blade_co_account_id[ |\t]*=[ |\t]*[\'|\"](\d+)[\'|\"].*[\s|.]*.*blade_group_id[ |\t]*=[ |\t]*[\'|\"](\w*)[\'|\"].*/)) {
				var target_param = new Object();
				target_param['blade_co_account_id'] = RegExp.$1;
				target_param['blade_group_id'] = RegExp.$2;
				target_param['blade_url'] = "";
				if (document.getElementsByTagName('script')[i].innerHTML.match(/.*blade_url[ |\t]*=[ |\t]*[\'|\"](.*)[\'|\"].*/)) {
					target_param['blade_url'] = RegExp.$1;
				}
				target_params.push(target_param);
			}
		}

		if (typeof blade_complete_params == 'undefined') {
			blade_complete_params = new Object();
		}

		for (var i = 0; i < target_params.length; i++) {
			var target_blade_co_account_id = target_params[i].blade_co_account_id;
			var target_blade_group_id = target_params[i].blade_group_id;
			var country_id = '1';
			var version = '';
			var tag_url = target_params[i].blade_url;

			var key = target_blade_co_account_id + '_' + target_blade_group_id;
			if (key in blade_complete_params) {
				continue;
			}

			bl_track(target_blade_co_account_id, target_blade_group_id, country_id, version, tag_url);

			blade_complete_params[key] = target_params[i];
			break;
		}
	}

	set_first_party_cookie(get_enc_aid_from_url_param());
	parse_blade_script();

})();
