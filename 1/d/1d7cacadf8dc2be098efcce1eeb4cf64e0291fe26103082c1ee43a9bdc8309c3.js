window.addEventListener('DOMContentLoaded', function () {
	var ua = navigator.userAgent;
	if ((localStorage.getItem('aaac_pr_ima') != undefined && localStorage.getItem('aaac_pr_ima') > (new Date().getTime())) || (navigator.userAgent.indexOf('Mobile') != -1 && navigator.userAgent.indexOf('Firefox') != -1)) {
		return;
	}
	var aaa_xhr_success = function (data, link_url, view_url, vt_url, vt_time, hide_logo_data) {
		if (typeof data == 'string') {
			data = JSON.parse(data);
		}
		if (
			!((Math.random() * 100) < data['rate'])
			|| (!data['article']['movie'])
			|| (!data['prop']['movie'])
		) {
			return;
		}
		var link_url_a = data['click'];
		var view_url_a = data['imp'];
		var vt_url_a = data['view'];
		var movie_width = data['prop']['movie'].match(/^\d+/)[0];
		var movie_height = data['prop']['movie'].match(/\d+$/)[0];
		var movie_url = data['article']['movie'];
		var endcard_url = data['article']['endcard'];
		if (typeof endcard_url === 'undefined') {
			endcard_url = false;
		}
		var button_type = data['button_type'];
		var cookie_time = data['cookie'];
		var movie_selector = data['selector'];
		var movie_flag = data['flag'];
		
		if (movie_flag === ""){ return; }

		var hide_logo;

		switch (hide_logo_data) {
			case 0:
				hide_logo = 'false';
				break;
			case 1:
				hide_logo = 'true';
				break;
			default:
				hide_logo = 'false';
				break;
		}
		
		if (movie_flag == 2){
			var wraps = document.querySelectorAll(movie_selector);
			if (wraps.length === 0){ return; }
			
			var maplist = [];
			for (var i = 0; i < wraps.length; i++) {
				(function (wrap) {
					var map = document.createElement('div');
					map.style.setProperty('margin', '0', 'important');
					map.style.setProperty('border', 'none', 'important');
					map.style.setProperty('padding', '0', 'important');
					map.style.setProperty('position', 'absolute', 'important');
					map.style.setProperty('min-width', 'auto', 'important');
					map.style.setProperty('max-width', 'none', 'important');
					map.style.setProperty('min-height', 'auto', 'important');
					map.style.setProperty('max-height', 'none', 'important');
					map.style.setProperty('z-index', '100000000', 'important');
					document.body.appendChild(map);
					
					var watch_wrap_to_map = setInterval(function(){
						if (map === null || map.parentNode === null){
							clearInterval(watch_wrap_to_map);
						}
						var clientRect = wrap.getBoundingClientRect();
						map.style.setProperty('left', (window.pageXOffset + clientRect.left) + 'px');
						map.style.setProperty('top', (window.pageYOffset + clientRect.top) + 'px');
						map.style.setProperty('width', wrap.clientWidth + 'px');
						map.style.setProperty('height', wrap.clientHeight + 'px');
					}, 100);
					
					maplist.push(map);
					map.addEventListener('click', function (e) {
						for (var t = 0; t < maplist.length; t++){
							maplist[t].parentNode.removeChild(maplist[t]);
						}
						
						var iframe = document.createElement('iframe');
						iframe.style.setProperty('margin', '0', 'important');
						iframe.style.setProperty('border', 'none', 'important');
						iframe.style.setProperty('padding', '0', 'important');
						iframe.style.setProperty('position', 'absolute', 'important');
						iframe.style.setProperty('min-width', 'auto', 'important');
						iframe.style.setProperty('max-width', 'none', 'important');
						iframe.style.setProperty('min-height', 'auto', 'important');
						iframe.style.setProperty('max-height', 'none', 'important');
						iframe.style.setProperty('z-index', '100000000', 'important');
						localStorage.setItem('aaac_pr_ima', new Date().getTime() + (cookie_time * 1000));
						iframe.id = 'iframe_movie_pr_ad';
						document.body.appendChild(iframe);
						iframe.contentWindow.document.write(
							'<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"><\/script>' +
							'<script>$.ajax({url: "https://srv1.aaacompany.net/om/pr/a/json.php" ,type: "POST", dataType: "json", "data": {"link_url": "' + link_url + '", "view_url": "' + view_url + '", "link_url_a": "' + link_url_a + '", "view_url_a": "' + view_url_a + '", "movie_url": "' + movie_url + '", "endcard_url": "' + endcard_url + '", "button_type": "' + button_type + '", "width": "' + movie_width + '", "height": "' + movie_height + '", "vt_url": "' + vt_url + '", "vt_url_a" : "' + vt_url_a + '", "vt_time": "' + vt_time + '", "hide_logo": "' + hide_logo + '"}, success: function(data){ document.write(data); document.close();}});<\/script>'
						);
						
						var watch_wrap_to_iframe = setInterval(function(){
							if (iframe === null || iframe.parentNode === null){
								clearInterval(watch_wrap_to_iframe);
							}
							var clientRect = wrap.getBoundingClientRect();
							iframe.style.setProperty('left', (window.pageXOffset + clientRect.left) + 'px');
							iframe.style.setProperty('top', (window.pageYOffset + clientRect.top) + 'px');
							iframe.style.setProperty('width', wrap.clientWidth + 'px');
							iframe.style.setProperty('height', wrap.clientHeight + 'px');
						}, 100);
						
						e.preventDefault();
					});
				})(wraps[i]);
			}
		} else if (movie_flag == 1) {
			var p_click = 'false';
			var p_play = 'false';
			if (movie_selector.indexOf('@click') !== -1){
				p_click = movie_selector.split('@click')[1];
				movie_selector = movie_selector.split('@click')[0];
			} else if (movie_selector.indexOf('@play') !== -1){
				p_play = movie_selector.split('@play')[1];
				movie_selector = movie_selector.split('@play')[0];
			}
			
			var oct_movie_script_input_selectors = movie_selector.split(',');
			for (var i = 0; i < oct_movie_script_input_selectors.length; i++) {
				var selector = oct_movie_script_input_selectors[i];
				wrap = document.querySelector(selector);
				if (wrap !== null) {
					break;
				}
			}
			if (wrap === null){ return; }
			
			var map = document.createElement('div');
			map.style.setProperty('margin', '0', 'important');
			map.style.setProperty('border', 'none', 'important');
			map.style.setProperty('padding', '0', 'important');
			map.style.setProperty('position', 'absolute', 'important');
			map.style.setProperty('min-width', 'auto', 'important');
			map.style.setProperty('max-width', 'none', 'important');
			map.style.setProperty('min-height', 'auto', 'important');
			map.style.setProperty('max-height', 'none', 'important');
			map.style.setProperty('z-index', '100000000', 'important');
			document.body.appendChild(map);
			
			var watch_wrap_to_map = setInterval(function(){
				if (map === null || map.parentNode === null){
					clearInterval(watch_wrap_to_map);
				}
				var clientRect = wrap.getBoundingClientRect();
				map.style.setProperty('left', (window.pageXOffset + clientRect.left) + 'px');
				map.style.setProperty('top', (window.pageYOffset + clientRect.top) + 'px');
				map.style.setProperty('width', wrap.clientWidth + 'px');
				map.style.setProperty('height', wrap.clientHeight + 'px');
			}, 100);
			
			map.addEventListener('click', function (e) {
				document.body.removeChild(map);
				
				var iframe = document.createElement('iframe');
				iframe.style.setProperty('margin', '0', 'important');
				iframe.style.setProperty('border', 'none', 'important');
				iframe.style.setProperty('padding', '0', 'important');
				iframe.style.setProperty('position', 'absolute', 'important');
				iframe.style.setProperty('min-width', 'auto', 'important');
				iframe.style.setProperty('max-width', 'none', 'important');
				iframe.style.setProperty('min-height', 'auto', 'important');
				iframe.style.setProperty('max-height', 'none', 'important');
				iframe.style.setProperty('z-index', '100000000', 'important');
				localStorage.setItem('aaac_pr_ima', new Date().getTime() + (cookie_time * 1000));
				iframe.id = 'iframe_movie_pr_ad';
				document.body.appendChild(iframe);
				iframe.contentWindow.document.write(
					'<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"><\/script>' +
					'<script>$.ajax({url: "https://srv1.aaacompany.net/om/pr/a/json.php" ,type: "POST", dataType: "json", "data": {"link_url": "' + link_url + '", "view_url": "' + view_url + '", "link_url_a": "' + link_url_a + '", "view_url_a": "' + view_url_a + '", "movie_url": "' + movie_url + '", "endcard_url": "' + endcard_url + '", "button_type": "' + button_type + '", "width": "' + movie_width + '", "height": "' + movie_height + '" ,"p_click": "' + p_click + '" ,"p_play": "' + p_play + '", "vt_url": "' + vt_url + '", "vt_url_a" : "' + vt_url_a + '", "vt_time": "' + vt_time + '", "hide_logo": "' + hide_logo + '"}, success: function(data){ document.write(data); document.close();}});<\/script>'
				);
				
				var watch_wrap_to_iframe = setInterval(function(){
					if (iframe === null || iframe.parentNode === null){
						clearInterval(watch_wrap_to_iframe);
					}
					var clientRect = wrap.getBoundingClientRect();
					iframe.style.setProperty('left', (window.pageXOffset + clientRect.left) + 'px');
					iframe.style.setProperty('top', (window.pageYOffset + clientRect.top) + 'px');
					iframe.style.setProperty('width', wrap.clientWidth + 'px');
					iframe.style.setProperty('height', wrap.clientHeight + 'px');
				}, 100);
				
				e.preventDefault();
			});
		} else if (movie_flag == 3){
			var p_click = 'false';
			var p_play = 'false';
			if (movie_selector.indexOf('@click') !== -1){
				p_click = movie_selector.split('@click')[1];
				movie_selector = movie_selector.split('@click')[0];
			} else if (movie_selector.indexOf('@play') !== -1){
				p_play = movie_selector.split('@play')[1];
				movie_selector = movie_selector.split('@play')[0];
			}
			
			var map = document.createElement('div');
			map.style.setProperty('margin', '0', 'important');
			map.style.setProperty('border', 'none', 'important');
			map.style.setProperty('padding', '0', 'important');
			map.style.setProperty('position', 'fixed', 'important');
			map.style.setProperty('min-width', 'auto', 'important');
			map.style.setProperty('max-width', 'none', 'important');
			map.style.setProperty('min-height', 'auto', 'important');
			map.style.setProperty('max-height', 'none', 'important');
			map.style.setProperty('left', '0');
			map.style.setProperty('top', '0');
			map.style.setProperty('width', '100%');
			map.style.setProperty('height', '100%');
			map.style.setProperty('z-index', '100000000', 'important');
			document.body.appendChild(map);
			
			map.addEventListener('click', function (e) {
				document.body.removeChild(map);
				
				var iframe = document.createElement('iframe');
				iframe.style.setProperty('margin', '0', 'important');
				iframe.style.setProperty('border', 'none', 'important');
				iframe.style.setProperty('padding', '0', 'important');
				iframe.style.setProperty('position', 'fixed', 'important');
				iframe.style.setProperty('min-width', 'auto', 'important');
				iframe.style.setProperty('max-width', 'none', 'important');
				iframe.style.setProperty('min-height', 'auto', 'important');
				iframe.style.setProperty('max-height', 'none', 'important');
				iframe.style.setProperty('left', '0');
				iframe.style.setProperty('top', '0');
				iframe.style.setProperty('width', '100%');
				iframe.style.setProperty('height', '100%');
				iframe.style.setProperty('z-index', '100000000', 'important');
				localStorage.setItem('aaac_pr_ima', new Date().getTime() + (cookie_time * 1000));
				iframe.id = 'iframe_movie_pr_ad';
				document.body.appendChild(iframe);
				iframe.contentWindow.document.write(
					'<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"><\/script>' +
					'<script>$.ajax({url: "https://srv1.aaacompany.net/om/pr/a/json.php" ,type: "POST", dataType: "json", "data": {"link_url": "' + link_url + '", "view_url": "' + view_url + '", "link_url_a": "' + link_url_a + '", "view_url_a": "' + view_url_a + '", "movie_url": "' + movie_url + '", "endcard_url": "' + endcard_url + '", "button_type": "' + button_type + '", "width": "' + movie_width + '", "height": "' + movie_height + '", "p_click": "' + p_click + '", "p_play": "' + p_play + '", "vt_url": "' + vt_url + '", "vt_url_a" : "' + vt_url_a + '", "vt_time": "' + vt_time + '", "hide_logo": "' + hide_logo + '"}, success: function(data){ document.write(data); document.close();}});<\/script>'
				);
				
				e.preventDefault();
			});
		}
	};
	
	var oct_xhr_success = function (json_data) {
		if (typeof json_data == 'string') {
			json_data = JSON.parse(json_data);
		}

		if (
			typeof json_data['click_url'] === "undefined"
			|| json_data['click_url'] == ''
			|| typeof json_data['view_url'] === "undefined"
			|| json_data['view_url'] == ''
			|| (!/(\?|&)_article=\d+($|&)/.test(json_data['click_url']))
		) {
			return;
		}
		
		if (
			typeof json_data['vt_url'] !== "undefined"
			&& typeof json_data['vt_time'] !== "undefined"
		){
			var vt_url = json_data['vt_url'];
			var vt_time = json_data['vt_time'];
		} else {
			var vt_url = false;
			var vt_time = false;
		}

		var article_id = json_data['click_url'].match(/(\?|&)_article=(\d+)($|&)/)[2];
		var json_url = 'https://srv1.aaacompany.net/om_res.php?spot=83645&article=' + article_id + '&_=' + new Date().getTime();
		var xhr = new XMLHttpRequest();

		xhr.ontimeout = function () {
			console.error("The aaacompany request timed out.");
		};
		xhr.onload = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					aaa_xhr_success(xhr.response, json_data['click_url'], json_data['view_url'], vt_url, vt_time, json_data['hide_logo']);
				} else {
					console.error(xhr.statusText);
				}
			}
		};
		xhr.open("GET", json_url, true);
		xhr.timeout = 3000;
		xhr.responseType = 'json';
		xhr.send(null);
	};
	
	(function () {
		var isIos = function () {
			var b, c, d;
			b = window.navigator.userAgent.toLowerCase();
			c = 0 <= b.indexOf('iphone');
			d = 0 <= b.indexOf('ipod');
			b = 0 <= b.indexOf('ipad');
			return c || d || b ? !0 : !1
		};

		var iPhoneModels = {
			479: "iphone3",
			480: "iphone4",
			568: "iphone5",
			667: "iphone6",
			736: "iphone6p",
			737: "iphone6"
		};

		var displayMinSize = 479;
		var displayMaxSize = 737;

		var getModelName = function (b) {
			return !1 === isIos() ? '' : iPhoneModels[displayMinSize > b ? displayMinSize : displayMaxSize < b ? displayMaxSize : b]
		};

		var i_type = getModelName(window.screen.height);
		var json_url = 'https://ap.octopuspop.com/deliver/?_spot=83645&_iphone_type=' + i_type + '&_ver=' + new Date().getTime();
		var xhr = new XMLHttpRequest();

		xhr.ontimeout = 
		xhr.onload = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					oct_xhr_success(xhr.response);
				} else {
					console.error(xhr.statusText);
				}
			}
		};
		xhr.open("GET", json_url, true);
		xhr.timeout = 3000;
		xhr.responseType = 'json';
		xhr.send(null);
	})();
});
