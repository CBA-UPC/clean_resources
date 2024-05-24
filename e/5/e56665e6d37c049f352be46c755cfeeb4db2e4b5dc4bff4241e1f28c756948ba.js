(function(){/*

 Perfect Market Widget Platform Library
 Copyright (C) 2011 Perfect Market, Inc.
 All Rights Reserved

 NO PERMISSION IS GRANTED TO COPY OR USE CODE EXCEPT AS IS 
 NECESSARY TO DISPLAY ADS IN THE NORMAL COURSE OF BROWSING A WEB SITE

 CONFIDENTIAL COPYRIGHTED AND PATENTED MATERIAL
 US PATENTS  7,610,279  7,644,072 7,617,200 and 7,627,565
 OTHER PATENTS PENDING

 DO NOT DECOMPILE OR REVERSE ENGINEER
*/
function o(){return function(){}}function s(a){return function(b){this[a]=b}}function u(a){return function(){return this[a]}}TBVideoElem=function(a,b,c){this.cf="none";this.ve=this.lh="video";this.we="player-div";if(null!==a)this.mc=a;if(null!==c)this.cf=c;if(null!==b)this.we=b;this.Aj=u("cf");this.zj=u("mc");this.Gc=u("lh");this.sj=u("ve");this.Oa=u("we");this.Bj=function(){return{}}};
TBVideoEvents=function(a){this.Ya=a;this.cj=function(b){(function(b,a,e,f,g,j,h,k){pmglb.e.Jb({J:g,name:f,type:h,z:a,md:j});a.addEventListener("mousedown",function(){pmglb.e.R({name:f,type:h,url:e,z:a});null!==k&&k&&b.Ef()},!1)})(this,this.Ya.mc,window.location.href,this.Ya.ve,this.Ya.Gc(),{},this.Ya.Oa(),b)};this.Ef=function(){this.Qd(this);this.Pd(this)};this.tj=function(){return{}};this.Qd=function(b){var a=b.Ya.mc;0.5<=pmglb.e.Na(a)?setTimeout(function(){if(0.75<=pmglb.e.Na(a)){var b={name:"video",
type:"vr",url:window.location.href,z:a},e={};null!==e&&(b=pmglb.e.Ba(b,e));pmglb.e.R(b)}},3E4):setTimeout(function(){b.Qd(b)},250)};this.Fd=function(b,a,d){0.3>=pmglb.e.Na(a)?pmglb.e.R({name:"video",type:"vl",url:window.location.href,z:a,md:{sd:(new Date).getTime()-d}}):setTimeout(function(){b.Fd(b,a,d)},250)};this.Pd=function(b){var a=b.Ya.mc;0.5<=pmglb.e.Na(a)?this.Fd(b,a,(new Date).getTime()):setTimeout(function(){b.Pd(b)},250)}};
TBOptimizationAutoPlayInfoFromXPathAndURL=function(){TBOptimizationAutoPlayInfoFromXPathAndURL.prototype.w=function(a){if(typeof window._tb_api_xu!=pmglb.b)for(var b=pmglb.e.Ig(),c=0;c<window._tb_api_xu.length;c++){var d=window._tb_api_xu[c],e=!1,f=!1;typeof d.url!=pmglb.b&&-1<b.indexOf(d.url)?e=!0:typeof d.url===pmglb.b&&(e=!0);if(typeof d.xPath===pmglb.b)f=!0;else for(var g=0;g<a.length;g++){var j=a[g];null!=j&&typeof j.M!=pmglb.b&&j.M.n==d.xPath&&(f=!0)}e&&f&&(window._tb_vautop=d.autoPlay)}}};
window.TBOptimizationAutoPlayInfoFromXPathAndURL=TBOptimizationAutoPlayInfoFromXPathAndURL;var _pmk=_pmk||{};window._pmk=_pmk;
TBWidgetVideoPlayer=function(){this.name=this.J="video";this.Ac=!1;this.O=[];this.V=[];this.wb=this.Va=!1;this.jf=0;this.Rb=!1;this.Q=0;this.ka=22;this.Za=[];TBWidgetVideoPlayer.prototype.w=function(){var a=new TBOtherPlayer;if(typeof window._tb_vpx!=pmglb.b)a.ab(window._tb_vpx),window._tb_vpx="DONE";if(typeof window._tb_vpd!=pmglb.b&&typeof window._tb_vpdi!=pmglb.b)this.ka=window._tb_vpd,a.ka=window._tb_vpdi;if(typeof window._tb_vpmd!=pmglb.b)a.Nd=window._tb_vpmd;this.I=[];-1<pmglb.e.Qa().indexOf("msn.com")?
this.I.push(new TBMSNPlayer):-1<pmglb.e.Qa().indexOf("tmz.com")||-1<pmglb.e.Qa().indexOf("www.nbc")?(typeof window._tb_noKP==pmglb.b&&typeof TBKalturaPlayer!==pmglb.b&&this.I.push(new TBKalturaPlayer),this.I.push(a)):(typeof window._tb_noGP==pmglb.b&&(typeof window.ooyalaplayers==pmglb.b||typeof window._tb_noOP!=pmglb.b)&&this.I.push(a),typeof window._tb_noBC==pmglb.b&&typeof TBBrightcovePlayer!==pmglb.b&&this.I.push(new TBBrightcovePlayer),typeof window._tb_noOP==pmglb.b&&typeof TBOoYalaPlayer!==
pmglb.b&&this.I.push(new TBOoYalaPlayer));for(a=0;a<this.I.length;a++){var b=this.I[a];b.caller=this;b.Ea()}};TBWidgetVideoPlayer.prototype.Yj=function(a){if(typeof pmglb.e.o.rawJsonld!==pmglb.b&&null!==pmglb.e.o.rawJsonld){var b=pmglb.e.o.rawJsonld.video;null!==b&&b instanceof Array&&b.map(function(b){var d=b.videoTag.eltype,e="//"+d+"[contains(";typeof b.videoTag.elclass!==pmglb.b?e+="@class,'"+b.videoTag["class"]+"')]":typeof b.videoTag.elid!==pmglb.b&&(e+="@id,'"+b.videoTag.id+"')]");b=[];b.push({xpath:e,
attr:d});a.ab(b)})}};TBWidgetVideoPlayer.prototype.zb=o();TBWidgetVideoPlayer.prototype.ja=function(){for(var a={iframe:0,object:0,div:0,sb:0},b=0;b<this.I.length;b++){var c=thi false,
				cache: true,
				crossDomain: true,
				type: "get",
				data: {
					location: o,
					affiliate: ARCS.lmg_short
				}
			}).done(function (o, m) {
				//got something, handle with callback
				if (typeof cb === 'function') cb(o, m);
			}).fail(function (o, m) {
				if (typeof cb === 'function' && str) cb(o, m);
			});
		};
		if (loc.search(/undefined/) === -1) {
			geoXHR(loc);
		} else {
			AdvTR.geoCodeError({ message: "Location not determined", code: 3 });
		}
	};
	atr.geoCodeError = function () {
		var msg = ''; // PositionError {message: "User denied Geolocation", code: 1, PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3}
		try {
			msg = arguments[0].message;
		} catch (e) {
			msg = e;
		}
		if (typeof arguments[1] === 'function') arguments[1](arguments[0]); // handle additional error callback
	};
	/* weather functions */
	atr.b_weather = true;
	atr.weatherError = function (e) {
		if (arguments.length > 0 && arguments[0].message) {
			jQuery('#adv_wlocation_form .errorMsg').html(arguments[0].message);
			jQuery('#adv_weather_main').addClass('openErr');
			jQuery('#adv_wlocation_input').focus().attr('aria-invalid', 'true');
		}
	};
	atr.getWeatherGeoData = function (o, m) {
		if ((typeof o === "undefined" ? "undefined" : _typeof(o)) != 'object') {
			AdvTR.geoCodeError({ message: "Location not found", code: 1 }, AdvTR.weatherError);
			return;
		}
		if (o.zip_code != '') {
			o.zip_code = o.zip_code.substr(0, 5);
			weatherUI(o);
		} else if (o.zip != '') {
			// support older local storage naming
			o.zip = o.zip.substr(0, 5);
			weatherUI(o);
		} else {
			//no zip code
			if (o.city != '' && o.state != '') {
				jQuery.ajax({
					url: ARCS.weather.current,
					dataType: 'json',
					jsonp: false,
					cache: true,
					crossDomain: true,
					type: "get",
					data: {
						location: o.city.toLowerCase().replace(/ /g, "-") + '-' + o.state.toLowerCase(),
						affiliate: ARCS.lmg_short
					}
				}).done(function (wo, wm) {
					if (wo.zip_code != '') {
						o.zip = wo.zip_code;
						weatherUI(o);
					}
				}).fail(function () {
					AdvTR.geoCodeError({ message: "Location not found", code: 1 }, AdvTR.weatherError);
				});
			} else {
				// show err
				AdvTR.geoCodeError({ message: "Location not found", code: 1 }, AdvTR.weatherError);
			}
		}
		function weatherUI(co) {
			var i = co.location.indexOf(',');
			var lso = { "city": co.location.substring(0, i), "state": co.location.substring(i + 2), "zip_code": co.zip_code };
			if (AdvTR.b_weather) {
				ARCS.setLocalStorageVal('weather_state', 'phase2');
				ARCS.setLocalStorageVal('location_data', lso);
				cookieHandler.set('gl-weather', co.zip_code, { expires: 365, path: '/', domain: ARCS.cookie_domain });
				jQuery('.advGeoChoosen').html(lso.city + ', ' + lso.state);
				AdvTR.showWeatherData();
				jQuery('#adv_weather_main').addClass('open');
				AdvTR.updateWeather(lso.zip_code);
				jQuery('[name=adv_location_input]').val('');
			} else {
				ARCS.setLocalStorageVal('weather_state', 'phase3');
				ARCS.setLocalStorageVal('location_data', lso);
				AdvTR.b_weather = true;
			}
		}
	};
	atr.updateWeather = function (zc) {
		// writes weather data to dom
		jQuery.ajax({
			url: ARCS.weather.forecast,
			dataType: 'json',
			jsonp: false,
			cache: true,
			crossDomain: true,
			type: "get",
			data: {
				location: zc,
				affiliate: ARCS.lmg_short
			}
		}).done(function (data) {
			var $w = jQuery('.advConditions');
			$w.removeClass().addClass('advConditions ' + data.current.classname + '-' + data.current.icon_code);
			$w.find('.advTemp').html(data.current.temperature).parent().removeClass('advNoTemp');
			jQuery('#adv_mobi_weather .advNoTemp').removeClass('advNoTemp');
			var $wd = jQuery('#adv_weather_data');
			if (ARCS.device == 'phone') {
				jQuery('#adv_mobi_weather .advGeoChoosen').html(data.current.location);
			}
			jQuery('.advABtn', $wd).attr('href', ARCS.weather.link + '?zipcode=' + zc);
			var mk = '';
			jQuery.each(data, function (n, v) {
				mk += '<div class="' + n + '"><div class="inner ' + this.classname + '-' + this.icon_code + '"><span class="day">' + n + '</span><span class="tempHiLo">' + this.temp_hilo + '</span><span class="temp">' + this.temperature + '</span><span>' + this.conditions_short + '</span></div></div>';
			});
			jQuery('.title', $wd).html(data.current.location);
			jQuery('.advWeatherInner', $wd).html(mk);
			jQuery('#adv_wlocation_input').removeAttr('aria-invalid');
		}).fail(function () {
			// could not get weather report
			jQuery('#adv_weather_data .advWeatherInner').html('<span class="errorMsg">An error occured while retrieving weather information. Please update your current location.</span>');
			jQuery('#adv_weather .advTemp, #adv_mobi_weather .advGeoChoosen').html('Set Weather').parent().addClass('advNoTemp');
		});
	};
	atr.showWeatherData = function (s) {
		// handles which state to show in weather pane
		try {
			var tc = ARCS.getLocalStorageVal('weather_state');
			var c = 'phase1';
			if (s) c = s;else if (tc) c = tc;
			if (document.getElementById('adv_wlocation_input') === null) {
				jQuery('#adv_wlocation_form').append('<div class="advFrmInput"><input name="adv_wlocation_input" id="adv_wlocation_input" type="text" value="" placeholder="Enter City and State or Zip Code" /></div><div class="advFrmBtn"><input type="submit" value="Submit" /></div>');
			}
			jQuery('#adv_wlocation_form .errorMsg').html('');
			jQuery('#adv_wlocation_input').attr('value', '');
		} catch (e) {}
		jQuery('#adv_weather_main').removeClass().addClass('advDropdown advLayer ' + c);
	};

	/* for adding and firing custom events */
	atr.attachEventHandler = function (eventName, func) {
		var onEventName = 'on' + eventName;
		var old = window[onEventName];
		if (typeof old != 'function') window[onEventName] = func;else {
			window[onEventName] = function (evt) {
				old(evt);
				return func(evt);
			};
		}
	};
	atr.fireEvent = function (eventName, param) {
		var fn = window['on' + eventName];
		if (typeof fn == 'function') return fn(param);
		return false;
	};

	/* touch detection - ontouchstart works on most browsers, maxTouchPoints is for (IE10/11 and Surface) */
	atr.isTouchDevice = function () {
		return 'ontouchstart' in window || navigator.maxTouchPoints || false;
	};

	/* gigya signin */
	atr.gigya_ready = false;
	atr.gigyaUserUI = function (e) {
		var loggedin = Advance.Gigya.auth.isLogged();
		if (loggedin && (e.type == 'onLogin' || e.type == 'getAccountInfo')) {
			jQuery('#adv_user_dropdown').addClass('signedIn');
			var user_pic = Advance.Gigya.auth.user.profile.thumbnailURL;
			if (typeof user_pic == 'undefined' || user_pic.length < 1) user_pic = '//static' + ARCS.env + '.advance.net/static/common/img/user_default.png';
			jQuery('#adv_account').addClass('signedIn').css({ 'background-image': 'url(' + user_pic + ')', 'background-size': '40px', 'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + user_pic + '\',sizingMethod=\'scale\')' });
			jQuery('#adv_profile_img').attr('src', user_pic);
			jQuery('#adv_profile_nameplate h2').html(Advance.Gigya.auth.user.profile.nickname);
			window.Advance.Gigya.fn.subscribe('ProfileUpdate-onAfterScreenLoad.adi', function () {
				jQuery.each(jQuery('[data-link-stub]'), function (n, t) {
					t.href = ARCS.base_uri + jQuery(t).data('linkStub');
				});
				if (Advance.Gigya.auth.user.loginProvider != "site") {
					jQuery('.gigya-change-password-link').remove();
				}
			});
			jQuery('#adv_profile_edit').click(function (e) {
				e.preventDefault();window.Advance.Gigya.auth.editProfile({ screenSet: 'ADI-Test-NewLogin-ProfileUpdate' });
			});
			jQuery('#adv_profile_view a').attr('href', 'http://connect' + advEnvPrefix + "." + AdvTR.domain + '/user/' + encodeURIComponent(Advance.Gigya.auth.user.profile.username) + '/index.html');
			jQuery('#adv_profile_exit').click(function (e) {
				e.preventDefault();Advance.Gigya.auth.logout();
			});
		} else {
			window.gigya.accounts.hideScreenSet({ screenSet: 'ADI-Toprail-ProfileUpdate', containerID: 'adv_gigya_tr_profile' });
			jQuery('#adv_user_dropdown').removeClass('signedIn');
			jQuery('#adv_account').removeClass('signedIn').css({ 'background': 'none', 'filter': 'none' });
			jQuery('#adv_profile_img').attr('src', '//static' + ARCS.env + '.advance.net/static/common/img/blank.gif');
			jQuery('#adv_profile_nameplate h2').html('');
		}
		jQuery.each(jQuery('[data-link-stub]'), function (n, t) {
			t.href = ARCS.base_uri + jQuery(t).data('linkStub');
		});
	};
	atr.gigyaMaskToggle = function (id) {
		try {
			var p = document.getElementById(id);
			if (p.type == 'password') {
				p.type = 'text';
			} else {
				p.type = 'password';
			}
		} catch (e) {}
	};
	atr.scTracker = function (t, c) {
		// s_code tracker
		try {
			s = s_gi(s_account);
			s.tl(t, 'o', c);
		} catch (e) {
			;
		}
	};
	/* finite state machine */
	atr.states = [[0, [0, 1], 0, 0, [6, 4], [8, 5], [10, 6], [12, 7], [14, 8], [16, 9]], // 0 'default'- default, menu-open->menu, [NA]->subnav, [NA]->subnav2, weather-open->weather, user-open->user, search-open->search, edition-open->edition, -unused-, papers-open->papers
	[0, [1, 0], [2, 2], [4, 3], [6, 4], [8, 5], [10, 6], [12, 7], [14, 8], [16, 9]], // 1 'menu'-    default, menu-close->default, subnav-open->subnav, subnav2-open->subnav2, weather-open->weather, user-open->user, search-open->search, edition-open->edition, -unused-, papers-open->papers
	[0, [1, 0], [3, 1], [4, 3], [6, 4], [8, 5], [10, 6], [12, 7], [14, 8], [16, 9]], // 2 'subnav'-  default, menu-close->default, subnav-close->menu, subnav2-open->subnav2, weather-open->weather, user-open->user, search-open->search, edition-open->edition, -unused-, papers-open->papers
	[0, [1, 0], [3, 1], [5, 2], [6, 4], [8, 5], [10, 6], [12, 7], [14, 8], [16, 9]], // 3 'subnav2'- default, menu-close->default, subnav-close->menu, subnav2-close->subnav, weather-open->weather, user-open->user, search-open->search, edition-open->edition, -unused-, papers-open->papers
	[[7, 0], [0, 1], [6, 4], 0, [7, 0], [8, 5], [10, 6], [12, 7], [14, 8], [16, 9]], // 4 'weather'- weather-close->default, weather-open->weather, [NA]->submenu, [NA]->subnav2, weather-close->default, user-open->user, search-open->search, edition-open->edition, -unused-, papers-open->papers
	[0, [0, 1], 0, 0, [6, 4], [9, 0], [10, 6], [12, 7], [14, 8], [16, 9]], // 5 'user'-    default, menu-open->menu, [NA]->subnav, [NA]->subnav2, weather-open->weather, user-close->default, search-open->search, edition-open->edition, -unused-, papers-open->papers
	[0, [0, 1], 0, 0, [6, 4], [8, 5], [11, 0], [12, 7], [14, 8], [16, 9]], // 6 'search'-  default, menu-open->menu, [NA]->subnav, [NA]->subnav2, weather-open->weather, user-open->user, search-close->default, edition-open->edition, -unused-, papers-open->papers
	[[13, 0], [0, 1], 0, 0, [6, 4], [8, 5], [10, 6], [13, 0], [14, 8], [16, 9]], // 7 'edition'- edition-close->default, menu-open->menu, [NA]->subnav, [NA]->subnav2, weather-open->weather, user-open->user, search-open->search, edition-close->default, -unused-, papers-open->papers
	[0, [1, 0], 0, 0, [6, 4], [8, 5], [10, 6], [12, 7], [15, 0], [16, 9]], // 8 -unused-
	[0, [0, 1], 0, 0, [6, 4], [8, 5], [10, 6], [12, 7], [14, 8], [17, 0]] // 9 'papers'-  default, menu-open->menu, [NA]->subnav, [NA]->subnav2, weather-open->weather, user-open->user, search-open->search, edition-open->edition, -unused-, papers-close->default
	];
	atr.events = [function () {
		// 0 "menu-open",
		AdvTR.resetStates();
		AdvTR.dom_els.menu_items.removeClass('active');
		function openMenuWithContext() {
			if (AdvTR.menu_context != '') {
				AdvTR.SMO.current = AdvTR.SMO.states[2];
				AdvTR.dom_els.menu_sub.removeClass('open');
				if (ARCS.device == 'phone') AdvTR.dom_els.menu_all.addClass('close');
				jQuery('ul.advMenu span[data-key="' + AdvTR.menu_context + '"]').parent('li').addClass('active');
				jQuery('.advMenuSubWrap[data-key="' + AdvTR.menu_context + '"]').addClass('open');
				jQuery('.advMenuSubWrap[data-key="' + AdvTR.menu_context + '"]').attr('aria-hidden', 'false');
			} else {
				if (ARCS.device == 'phone') AdvTR.dom_els.menu_all.removeClass('close');
			}
			try {
				if (window.AdManager.isRevgen) {
					var ad_ar = ['DropDownMenu_Sponsor', 'DropDownMenu_Sponsor'];
					window.AdManager.injectUnit(ad_ar, { refresh: true });
				} else if (AdManager.isDefined('DropDownMenu_Sponsor') == false) {
					AdManager.defineUnit(new AdManager.UnitOptions({
						id: 'DropDownMenu_Sponsor',
						container: 'DropDownMenu_Sponsor'
					}));
					var ad_ar = ['DropDownMenu_Sponsor', 'DropDownMenu_Sponsor'];
					AdManager.injectUnit(ad_ar);
				} else {
					var ad_ar = new Array('DropDownMenu_Sponsor');
					AdManager.refreshUnits(ad_ar);
				}
			} catch (e) {
				;
			}
			AdvTR.dom_els.menu.data('state', 1).addClass('open');
			AdvTR.dom_els.menu.data('state', 1).attr('aria-expanded', 'true');
			AdvTR.dom_els.all_btns.filter('#adv_nav_btn').attr('aria-expanded', 'true');
			AdvTR.dom_els.menu_layer.addClass('open');
			AdvTR.dom_els.menu_layer.attr('aria-hidden', 'false');
		}
		AdvTR.menu_context = AdvTR.menuHelper.menuManagerSelector;
		openMenuWithContext();
	}, function () {
		// 1 "menu-close",
		AdvTR.dom_els.menu.removeClass('open');
		AdvTR.dom_els.menu.attr('aria-expanded', 'false');
		AdvTR.dom_els.all_btns.filter('#adv_nav_btn').attr('aria-expanded', 'false');
		AdvTR.dom_els.menu_layer.removeClass('open');
		AdvTR.dom_els.menu_layer.attr('aria-hidden', 'true');
	}, function (s, t) {
		// 2 "subnav-open",
		AdvTR.cur_menu_state = 2;
		var k = jQuery(t).data('key');
		if (ARCS.device == 'phone') {
			AdvTR.dom_els.menu_all.addClass('close');
			AdvTR.menuScroll();
		} else {
			AdvTR.dom_els.menu_items.removeClass('active');
			AdvTR.dom_els.menu_expandable_items.attr('aria-expanded', 'false');
			jQuery('ul.advMenu button div.aria-hidden').html('open');
			AdvTR.dom_els.menu_sub.removeClass('open');
			AdvTR.dom_els.menu_sub.attr('aria-hidden', 'true');
			jQuery('ul.advMenu button.next[data-key="' + k + '"]').parent('li').addClass('active');
			jQuery('ul.advMenu button.next[data-key="' + k + '"]').attr('aria-expanded', 'true');
			jQuery('ul.advMenu button.next[data-key="' + k + '"] div.aria-hidden').html('close');
		}
		jQuery('.advMenuSubWrap[data-key="' + k + '"]').addClass('open');
		jQuery('.advMenuSubWrap[data-key="' + k + '"]').attr('aria-hidden', 'false');
	}, function (s, t) {
		// 3 "subnav-close",
		AdvTR.dom_els.menu_sub.removeClass('open');
		AdvTR.dom_els.menu_sub.attr('aria-hidden', 'true');
		if (ARCS.device == 'phone') {
			AdvTR.cur_menu_state = 1;
			AdvTR.dom_els.menu_all.removeClass('close');
		} else {
			var k = jQuery(t).data('key');
			AdvTR.dom_els.menu_items.removeClass('active');
			AdvTR.dom_els.menu_expandable_items.attr('aria-expanded', 'false');
			jQuery('ul.advMenu button div.aria-hidden').html('open');
			jQuery('ul.advMenu button.next[data-key="' + k + '"]').parent('li').addClass('active');
			jQuery('ul.advMenu button.next[data-key="' + k + '"]').attr('aria-expanded', 'true');
			jQuery('ul.advMenu button.next[data-key="' + k + '"] div.aria-hidden').html('close');
			jQuery('.advMenuSubWrap[data-key="' + k + '"]').addClass('open');
			jQuery('.advMenuSubWrap[data-key="' + k + '"]').attr('aria-hidden', 'false');
		}
	}, function (s, t) {
		// 4 "subnav2-open",
		AdvTR.cur_menu_state = 3;
		var pk = jQuery(t).data('sub-parent');
		var k = jQuery(t).data('sub-key');
		if (!pk) pk = k;
		if (ARCS.device == 'phone') {
			AdvTR.dom_els.menu_all.addClass('close');
			jQuery('.advMenuSubWrap[data-key="' + pk + '"]').removeClass('open');
			jQuery('.advMenuSubWrap[data-key="' + pk + '"]').attr('aria-hidden', 'true');
			AdvTR.menuScroll();
		} else {
			AdvTR.dom_els.menu_sub2.removeClass('open');
			AdvTR.dom_els.menu_sub.find('li').removeClass('active');
			jQuery('.advMenuSubWrap button[data-sub-key="' + k + '"]').parent('li').addClass('active');
			jQuery('.advMenuSubWrap button[data-sub-key="' + k + '"]').attr('aria-expanded', 'true');
			jQuery('.advMenuSubWrap button[data-sub-key="' + k + '"] div.aria-hidden').html('close');
		}
		jQuery('.advMenuSub2[data-sub-key="' + k + '"]').addClass('open');
		jQuery('.advMenuSub2[data-sub-key="' + k + '"]').attr('aria-hidden', 'false');
	}, function (pmglb.k().createElement("script");c.setAttribute("type","text/javascript");c.setAttribute("src",a);"undefined"!==typeof c&&pmglb.k().getElementsByTagName("head")[0].appendChild(c);break;case "event listener":pmglb.ba.Mi("load",window,function(){var c=b.getElementsByTagName("body")[0],e=pmglb.k().createElement("script");e.setAttribute("src",a);c.insertBefore(e,c.firstChild)})}},Mi:function(a,b,c){if(b.addEventListener)b.addEventListener(a,c,!1);else if(b.attachEvent)return b.attachEvent("on"+a,c)}};
PMPage={Wi:!1,bd:null,data:{},type:"",Sd:{},F:{},ek:null,ej:null,Aa:function(a,b){var c="";pmglb.k().defaultView&&pmglb.k().defaultView.getComputedStyle?c=pmglb.k().defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(b=b.replace(/\-(\w)/g,function(b,a){return a.toUpperCase()}),c=a.currentStyle[b]);return c},nb:function(a,b){return pmglb.empty(b)||pmglb.empty(b.Wh)?pmglb.page.wg(a):b.Wh},wg:function(a){switch(a){case "pageType":return["url"];case "publicationDate":return["url"];
case "headline":return["og:title","dom","document.title"];case "canonicalUrl":return["page url"];case "adsenseForSearch":return["url query param","headline"]}},ya:function(a){pmglb.empty(pmglb.f.g().data[a])&&(pmglb.f.g().data[a]={});return pmglb.f.g().data[a]},nj:function(a){return pmglb.empty(a)||pmglb.empty(a.$a)?null:a.$a},pg:function(){var a=pmglb.page.ya("headline"),b=pmglb.page.nb("headline",a),c=null;if(pmglb.isArray(b)){for(var d=0,e=b.length;d<e;d++){switch(b[d]){case "og:title":c=pmglb.page.la("og:title");
break;case "dom":c=pmglb.page.xa("headline");break;case "document.title":c=pmglb.ca().title}if(!pmglb.empty(c)){a.Bb=b[d];break}}pmglb.empty(c)}return pmglb.Ta(c)?pmglb.trim(c):c},qg:function(){var a=pmglb.page.ya("mainImage"),b=pmglb.page.nb("mainImage",a),c=null;if(pmglb.isArray(b)){for(var d=0,e=b.length;d<e;d++){switch(b[d]){case "og:image":c=pmglb.page.la("og:image");break;case "dom":c=pmglb.page.xa("mainImage");break;case "dom if og:image":c=pmglb.page.sg("mainImage","og:image")}if(!pmglb.empty(c)){a.Bb=
b[d];break}}pmglb.empty(c)}return pmglb.Ta(c)?pmglb.trim(c):c},og:function(){var a=pmglb.page.ya("canonicalUrl"),b=pmglb.page.nb("canonicalUrl",a),c=null;if(pmglb.isArray(b)){for(var d=0,e=b.length;d<e;d++){switch(b[d]){case "page url":c=pmglb.page.fc();break;case "og:url":c=pmglb.page.la("og:url");break;case "page canonical url":c=pmglb.page.tg("canonical")}if(!pmglb.empty(c)){a.Bb=b[d];break}}pmglb.empty(c)}return pmglb.Ta(c)?pmglb.trim(c):c},rg:function(){var a=pmglb.page.ya("publicationDate"),
b=pmglb.page.nb("publicationDate",a),c=null;if(pmglb.isArray(b)){for(var d=0,e=b.length;d<e;d++){switch(b[d]){case "url":pmglb.page.ga();c=pmglb.url().canonical;break;case "date.release":c=pmglb.page.Fc("date.release");break;case "metadata: date":c=pmglb.page.Fc("date");break;case "dom":c=pmglb.page.xa("publicationDate")}if(!pmglb.empty(c)){a.Bb=b[d];break}}pmglb.empty(c)}return pmglb.Ta(c)?pmglb.trim(c):c},uf:function(a,b){var c={canonicalUrl:[["include url params"]],filters:[["escape unsafe characters"]],
headline:[["strip HTML"]],mainImage:[["ensure absolute path"]],publicationDate:[["extract YMD"],["convert to ISO"]]};typeof window._pm_ecd!==pmglb.b&&!pmglb.empty(window._pm_ecd.dcu&&!0===window._pm_ecd.dcu)&&c.canonicalUrl.push(["decode_url"]);for(var c=c[a],d=0,e=c?c.length:0;d<e;d++)c[d]&&!pmglb.page.Bh(c[d][0],b)&&b.push(c[d]);return b},Bh:function(a,b){for(var c in b)if(-1!=pmglb.Pc(a,b[c]))return!0;return!1},ug:function(a){var b=pmglb.empty(pmglb.f.g().data[a].Ch)?pmglb.page.vg(a):pmglb.f.g().data[a].Ch;
return b=pmglb.page.uf(a,b)},vg:function(a){switch(a){case "filters":return[["lowercase"]];default:return[]}},Da:function(a,b){if(pmglb.empty(pmglb.f.g().data[a]))return b;var c=[],d=pmglb.page.ug(a);if(pmglb.isArray(d))for(var e=0,f=d.length;e<f;e++)if(pmglb.isArray(d[e])){var g=pmglb.empty(d[e][0])?null:d[e][0],j=pmglb.empty(d[e][1])?null:d[e][1];c.push(g);switch(g){case "truncate after":pmglb.empty(j[0])||(b=pmglb.Ki(b,j[0]));break;case "exclude":if(!pmglb.empty(j))for(e=0;e<j.length;e++)if(g=
j[e],!pmglb.empty(g)&&b==g){b="";break}break;case "exclude reg exp":pmglb.empty(j)||(b=pmglb.page.fg(b,j));break;case "page url if canonical url in exclude list":pmglb.empty(j)||(b=pmglb.page.Fg(b,j));break;case "lowercase":b=b.toLowerCase();break;case "remove url params":b=pmglb.Ze(b);break;case "include url params":b=pmglb.Tg(b,j);break;case "escape unsafe characters":b=pmglb.page.eg(b);break;case "strip HTML":b=pmglb.page.zi(b);break;case "ensure absolute path":b=pmglb.Ai(b);break;case "convert to ISO":b=
pmglb.page.Uf(b);break;case "extract YMD":b=pmglb.page.hg(a,b);break;case "insert span":pmglb.empty(j[0])||(b=pmglb.page.Wg(b,j[0]),d=pmglb.page.Ih("strip HTML",d));break;case "add trailing slash":b=pmglb.page.wf(b);break;case "search and replace":b=pmglb.page.Vh(b,j);break;case "decode_url":b=pmglb.page.Xf(b)}}return b},wf:function(a){return pmglb.empty(a)||"string"!=typeof a?a:a+"/"},aj:function(a,b){if(pmglb.empty(a))return a;var c="<div> ("+pmglb.page.Hg(b)+")</div>";return 1<a.split(c).length&&
""===a.split(c)[1]?a:a+c},Hg:function(a){var b=[".com",".net",".org",".edu",".gov"];1<a.split("www.").length&&(a=a.split("www.")[1]);1<a.split("://").length&&(a=a.split("://")[1]);for(var c in b)a=a.split(b[c])[0];return a},Ih:function(a,b){for(var c=[],d=0,e=b.length;d<e;++d)b[d][0]!==a&&c.push(b[d]);return c},Wg:function(a,b){var c=a.search(b);return 0<=c?"<span>"+a.slice(0,c)+"</span>"+a.slice(c):a},hg:function(a,b){var c={};if(!pmglb.empty(b)&&!pmglb.empty(a)){var d={};"metadata: date"==pmglb.page.ya(a).Bb?
pmglb.f.g().data.publicationDate&&pmglb.f.g().data.publicationDate["metadata: date"].year&&pmglb.f.g().data.publicationDate["metadata: date"].month&&pmglb.f.g().data.publicationDate["metadata: date"].day&&(d={Lb:pmglb.f.g().data.publicationDate["metadata: date"].year,na:pmglb.f.g().data.publicationDate["metadata: date"].month,va:pmglb.f.g().data.publicationDate["metadata: date"].day}):pmglb.f.g().data.publicationDate&&pmglb.f.g().data.publicationDate.year&&pmglb.f.g().data.publicationDate.month&&
pmglb.f.g().data.publicationDate.day&&(d={Lb:pmglb.f.g().data.publicationDate.year,na:pmglb.f.g().data.publicationDate.month,va:pmglb.f.g().data.publicationDate.day});if(pmglb.empty(d)||pmglb.empty(d.Lb)||pmglb.empty(d.na)||pmglb.empty(d.va))return;var e,f;for(f in d)if(e=RegExp(d[f],"i"),e=e.exec(b),null!=e)c[f]=e[1];else return null}return c},Uf:function(a){if(!pmglb.empty(a)&&!pmglb.empty(a.Lb)&&!pmglb.empty(a.na)&&!pmglb.empty(a.va)){var b=[];/^\d\d\d\d$/.exec(a.Lb)&&b.push(a.Lb);var c=/^\d\d$/,
d=/^\d$/;if(c.exec(a.na))b.push(a.na);else if(d.exec(a.na))b.push("0"+a.na);else{var e=pmglb.page.yf(a.na);e&&b.push(e)}c.exec(a.va)?b.push(a.va):d.exec(a.va)&&b.push("0"+a.va);return 3===b.length?b.join("-"):null}},yf:function(a){var b={jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"},a=a.slice(0,3).toLowerCase();return b[a]?b[a]:null},zi:function(a){return pmglb.empty(a)?a:a.replace(/<(?:.|\n)*?>/gm,"")},Fg:function(a,b){for(var c=0;c<
b.length;c++){var d=b[c];if(!pmglb.empty(d)&&(d=RegExp(d,"i"),!pmglb.empty(a)&&d.test(a))){a="";break}}if(pmglb.empty(a))a=pmglb.k().URL;return a},Vh:function(a,b){if(!pmglb.empty(a)&&!pmglb.empty(b))for(var c=0;c<b.length;c++){var d=b[c],e=[];pmglb.empty(d)||(e=d.split(pmglb.of),2==e.length&&(a=a.replace(e[0],e[1])))}return a},fg:function(a,b){for(var c=0;c<b.length;c++){var d=b[c];if(!pmglb.empty(d)&&(d=RegExp(d,"i"),!pmglb.empty(a)&&d.test(a))){a="";break}}return a},eg:function(a){if(!pmglb.empty(a))for(var b=
["%","^"],c=0;c<b.length;c++)a=a.replace(b[c],encodeURIComponent(b[c]));return a},Xf:function(a){return decodeURIComponent(a)},la:function(a){if(null!==a){var b=pmglb.ca().getElementsByTagName("meta");if(null!=b)for(var c=0;c<b.length;c++)if(b[c]&&b[c].getAttribute("property")&&b[c].getAttribute("property").toLowerCase()==a.toLowerCase())return b[c].content}return null},Fc:function(a){if(!pmglb.empty(a)){var b=pmglb.ca().getElementsByTagName("meta");if(null!=b)for(var c=0;c<b.length;c++)if(b[c]&&
b[c].getAttribute("name")&&b[c].getAttribute("name").toLowerCase()==a.toLowerCase())return b[c].content}return null},tg:function(a){if(!pmglb.empty(a)){var b=pmglb.k().getElementsByTagName("link");if(null!=b)for(var c=0;c<b.length;c++)if(b[c]&&b[c].getAttribute("rel")&&b[c].getAttribute("rel").toLowerCase()==a&&b[c].getAttribute("href"))return b[c].getAttribute("href")}return null},mg:function(a){var b=pmglb.k().getElementsByTagName("meta"),c=[];if(null!=b)for(var d=0;d<b.length;++d)b[d]&&b[d].getAttribute("property")&&
b[d].getAttribute("property").toLowerCase()==a.toLowerCase()&&c.push(b[d].content);return c},sg:function(a,b){var c=null;pmglb.empty(pmglb.page.la(b))||(c=pmglb.page.xa(a));return c},xa:function(a,b){if("function"===typeof PMPublisher.prototype.Eg||"function"===typeof pmglb.D.Eg)return pmglb.D.xa(a);var c=null,d=null,e=!pmglb.empty(b)&&pmglb.isArray(b)?b:!pmglb.empty(pmglb.f.g().data[a])&&!pmglb.empty(pmglb.f.g().data[a].$a)?pmglb.f.g().data[a].$a:null;if(!pmglb.empty(e)&&pmglb.isArray(e))for(var f=
0;f<e.length;f++)if((d=e[f])&&pmglb.ca()&&"function"===typeof pmglb.ca().evaluate){var g;try{g=pmglb.ca().evaluate(d,pmglb.ca(),null,XPathResult.ANY_TYPE,null)}catch(j){}if(g){for(var d=g.iterateNext(),h=null;d;)h=d,d="function"===typeof d.iterateNext?d.iterateNext():null;if(h){switch(a){case "headline":c=h.textContent||h.innerText;c=pmglb.trim(c);break;case "mainImage":if(h.src)c=h.src,c=pmglb.trim(c);break;case "publicationDate":c=h.textContent||h.innerText,c=pmglb.trim(c)}if(c)break}}}return c},
ii:function(){var a=null;if("function"===typeof PMPublisher.prototype.Re||"function"===typeof pmglb.D.Re)a=pmglb.D.Re();pmglb.empty(a)&&(a=pmglb.page.rg());if(!pmglb.empty(a))a=pmglb.page.Da("publicationDate",a),pmglb.page.bd=a},ci:function(){var a=null;if("function"===typeof PMPublisher.prototype.Pe||"function"===typeof pmglb.D.Pe)a=pmglb.D.Pe();pmglb.empty(a)&&(a=pmglb.page.pg());if(!pmglb.empty(a))a=pmglb.page.Da("headline",a),pmglb.page.Rg=pmglb.trim(a)},ei:function(){var a=null;if("function"===
typeof PMPublisher.prototype.Qe||"function"===typeof pmglb.D.Qe)a=pmglb.D.Qe();pmglb.empty(a)&&(a=pmglb.page.qg());if(!pmglb.empty(a)){var a=pmglb.page.Da("mainImage",a),b=pmglb.empty(pmglb.f.g().data.blacklistImageUrls)?null:pmglb.f.g().data.blacklistImageUrls;if(b&&0<b.length)for(var c=0,d=b.length;c<d;c++)if((url=b[c])&&null!=RegExp(url,"i").exec(a))return}if(!pmglb.empty(a))pmglb.page.Sj=pmglb.trim(a)},pi:function(){if("function"===typeof PMPublisher.prototype.Db||"function"===typeof pmglb.D.Db)pmglb.D.Db();
else{var a=pmglb.page.ya("pageType"),b=pmglb.page.nb("pageType",a),c=null;if(pmglb.isArray(b)){for(var d=0,e=b.length;d<e;d++){switch(b[d]){case "raw_url":c=pmglb.page.Mg();break;case "url":c=pmglb.page.Ng();break;case "oas_sitepage":c=pmglb.page.Kg();break;case "pm_pgtp":c=pmglb.page.Lg()}if(!pmglb.empty(c)){a.Bb=b[d];break}}if(!pmglb.empty(c))pmglb.page.type=c}}},Kg:function(){pmglb.page.ga();var a="undefined"!==typeof OAS_sitepage?pmglb.trim(OAS_sitepage):pmglb.url().canonical,b=pmglb.f.g();if(!pmglb.empty(b.oa))for(var c in b.oa)if(RegExp(b.oa[c],
"i").test(a))return c},Ng:function(){pmglb.page.ga();var a=pmglb.url().canonical,b=pmglb.f.g();if(!pmglb.empty(b.oa))for(var c in b.oa)if(RegExp(b.oa[c],"i").test(a))return c;return null},Mg:function(){pmglb.page.ga();var a=pmglb.url().original,b=pmglb.f.g();if(!pmglb.empty(b.oa))for(var c in b.oa)if(RegExp(b.oa[c],"i").test(a))return c;return null},fc:function(){var a;if(typeof pmglb.da!==pmglb.b&&pmglb.da.Eb.le()){if("undefined"!=typeof pm_overrideIframe&&!0==pm_overrideIframe)a=parent.location.href;
typeof pm_page_url!==pmglb.b&&(a=pmglb.empty(pm_page_url)?parent.location.href:pm_page_url)}else a=pmglb.Rc()&&typeof pm_page_url!==pmglb.b?pmglb.empty(pm_page_url)?parent.location.href:pm_page_url:"function"===typeof PMPublisher.prototype.fc?pmglb.D.fc():pmglb.k().URL;return a},kd:function(){var a=null,a="function"===typeof PMPublisher.prototype.kd?pmglb.D.kd():null;pmglb.empty(a)&&(a=pmglb.page.og());pmglb.empty(a)||(a=pmglb.page.Da("canonicalUrl",a));return a},ga:function(){var a=pmglb.f.g();pmglb.K=
{};pmglb.K.original=pmglb.page.fc();pmglb.K.canonical=pmglb.page.kd();pmglb.K.href=function(b){var a=pmglb.k().createElement("a");a.href=b;return a}(pmglb.K.canonical);pmglb.K.Zj=function(b){var a=!1;!pmglb.empty(b)&&pmglb.isArray(b)&&(a=(b[1]?RegExp(b[0],b[1]):RegExp(b[0])).test(pmglb.K.canonical)?!0:!1);return a};var b=pmglb.K.canonical;a&&a.ia&&a.ia.vh&&(b=b.replace(RegExp(a.ia.vh,"i"),""));b=pmglb.empty(b)?"":b.replace(/\/$/,"");pmglb.K.canonical=b},Lg:function(){return typeof pm_pgtp!=pmglb.b?
!pmglb.empty(pm_pgtp)?pm_pgtp:null:null},$h:function(){pmglb.page.data.body=pmglb.empty(pmglb.f.g().data[pmglb.page.type+"Body"])?pmglb.f.g().data.body:pmglb.f.g().data[pmglb.page.type+"Body"]},F:{Jd:"tags",data:[],w:function(){pmglb.page.F.data=pmglb.page.F.getData();pmglb.page.F.Da()},Da:function(){var a=pmglb.page.F.data,b=pmglb.page.F.Jd;if(!pmglb.empty(a)){var c=[],d;for(d in a){var e=pmglb.Ag(a[d]),f;for(f in e){var g=e[f];a[d][g]&&(a[d][g]=pmglb.page.Da(b,a[d][g]),c.push('"'+g+'" : "'+a[d][g]+
'"'))}}}pmglb.page.F.data=a},Pa:function(){return pmglb.page.ya(pmglb.page.F.Jd)},getData:function(){var a=pmglb.page.F.Pa(),a=pmglb.empty(a)||pmglb.empty(a.ti)?[]:a.ti,b=[];if(!pmglb.empty(a)){for(var c=0,d=a.length;c<d;c++){var e={},f="";switch(a[c]){case "domain/page url":f=pmglb.page.F.domain.pb(a[c]);break;case "page type/page url":f=pmglb.page.F.Wa.pb(a[c]);break;case "section/dom":f=pmglb.page.F.gd.yg(a[c]);break;case "section/page url":f=pmglb.page.F.gd.pb(a[c]);break;case "section/metadata":f=
pmglb.page.F.gd.zg(a[c])}e[a[c]]=pmglb.trim(f);b.push(e)}pmglb.empty(b)}return b},domain:{pb:function(){var a=pmglb.K.canonical,b=pmglb.page.F.Pa(),c="",d="";!pmglb.empty(b)&&!pmglb.empty(b.domain)&&!pmglb.empty(b.domain["page url"])&&!pmglb.empty(a)&&(d=b.domain["page url"],pmglb.empty(d)||(a=RegExp(d,"i").exec(a),pmglb.empty(a)||(c=a.slice(1).join(" "))));return!pmglb.empty(c)?c:""}},Wa:{pb:function(){var a=pmglb.K.canonical,b=pmglb.page.F.Pa(),c="",d="";!pmglb.empty(b)&&!pmglb.empty(b["page type"])&&
!pmglb.empty(b["page type"]["page url"])&&!pmglb.empty(a)&&(d=b["page type"]["page url"],pmglb.empty(d)||(a=RegExp(d,"i").exec(a),pmglb.empty(a)||(c=a.slice(1).join(" "))));return!pmglb.empty(c)?c:""}},gd:{pb:function(){var a=pmglb.K.canonical,b=pmglb.page.F.Pa(),c="",d="";!pmglb.empty(b)&&!pmglb.empty(b.section)&&!pmglb.empty(b.section["page url"])&&!pmglb.empty(a)&&(d=b.section["page url"],pmglb.empty(d)||(a=RegExp(d,"i").exec(a),pmglb.empty(a)||(c=a.slice(1).join(" "))));return!pmglb.empty(c)?
c:""},yg:function(){var a=pmglb.page.F.Pa(),b="",c="";if(!pmglb.empty(a)&&!pmglb.empty(a.section)&&!pmglb.empty(a.section.$a))c=a.section.$a,pmglb.empty(c)||(b=pmglb.page.F.xa("text",c));return!pmglb.empty(b)?b:""},zg:function(){var a=pmglb.page.F.Pa(),b="",c="";if(!pmglb.empty(a)&&!pmglb.empty(a.section)&&!pmglb.empty(a.section.metadata))c=a.section.metadata,pmglb.empty(c)||(b=pmglb.page.Fc(c));return!pmglb.empty(b)?b:""}},xa:function(a,b){var c=null,d=null,e=!pmglb.empty(b)?b:null;if(!pmglb.empty(e)&&
pmglb.isArray(e))for(var f=0;f<e.length;f++)if((d=e[f])&&pmglb.k()&&"function"===typeof pmglb.k().evaluate){var g;try{g=pmglb.k().evaluate(d,pmglb.k(),null,XPathResult.ANY_TYPE,null)}catch(j){}if(g){for(var d=g.iterateNext(),h=null;d;)h=d,d="function"===typeof d.iterateNext?d.iterateNext():null;if(h){switch(a){case "text":c=h.textContent||h.innerText;c=pmglb.trim(c);break;case "image src":if(h.src)c=h.src,c=pmglb.trim(c)}if(c)break}}}return c}},jk:function(a){if(!pmglb.empty(a)&&!pmglb.ee(a))for(var b in a){var c=
pmglb.K.canonical;pmglb.empty(c)||(c=RegExp(a[b],"i").exec(c),pmglb.empty(c)?pmglb.page.Sd[b]="":(c=c.slice(1).join(" "),pmglb.page.Sd[b]=pmglb.trim(c.replace(/\s+/g," "))))}},update:function(){pmglb.page.w()},w:function(){pmglb.page.ga();pmglb.page.ci();pmglb.page.ei();pmglb.page.ii();pmglb.page.pi();pmglb.page.$h();pmglb.page.F.w()}};
PMTemplate={Vf:"_tb_t",qk:"pmtn",P:null,qd:null,A:null,w:function(){pmglb.D.Xh();pmglb.page.w();("function"===typeof PMPublisher.prototype.w||"function"===typeof pmglb.D.w)&&pmglb.D.w();pmglb.li();pmglb.oi();pmglb.Yh();pmglb.f.ni();pmglb.f.Se()},ni:function(){pmglb.f.qd=pmglb.f.g().qd},Se:function(){pmglb.f.A=pmglb.f.g().A},ec:function(){pmglb.f.e=pmglb.f.g().e},g:function(){return pmglb.D.dc},lj:function(){return typeof pmglb.f.g().Ad.Tf!==pmglb.b?pmglb.f.g().Ad.Tf:!1},get:function(){if(null!=pmglb.f.P)return pmglb.f.P;
var a="",b,c,d;c=[];b=[];for(var e=d=0;e<pmglb.f.g().rotation.length;e++)d+=parseInt(pmglb.f.g().rotation[e].hf);for(e=0;e<pmglb.f.g().rotation.length;e++)if(!pmglb.tb()&&!pmglb.ub()&&!pmglb.Xb()||(pmglb.tb()||pmglb.ub()||pmglb.Xb())&&-1===pmglb.f.g().rotation[e].name.indexOf("_criteoNOIE")){for(var f=0;f<pmglb.f.g().rotation[e].hf;f++)b.push(pmglb.f.g().rotation[e].name);c.push(pmglb.f.g().rotation[e].name+":"+(Math.floor(100*(parseInt(pmglb.f.g().rotation[e].hf)/d))+"%"))}pmglb.empty(b)||(a=b[Math.floor(Math.random()*
b.length)]);typeof pmglb.A!=pmglb.b&&null!=pmglb.A&&pmglb.A.Ia.update();for(e=0;e<pmglb.f.g().rotation.length;e++)if(pmglb.f.g().rotation[e].name==a)return pmglb.f.P=pmglb.f.g().rotation[e],pmglb.f.fk(a),pmglb.f.P;return null},oj:function(){var a=pmglb.f.g().Si;if(!pmglb.empty(a))for(var b in a){var c=pmglb.page.mg(b),d=a[b];if(!pmglb.empty(c)&&!pmglb.empty(d)&&-1!=pmglb.Pc(d,c))return d}return""}};_pmk=_pmk||{};window._pmk=_pmk;var _gaq=_gaq||[];
PMTracking=function(){this.N=this.product=null;this.Wb=!1;this.ha=[];this.kc={};this.xf=[];this.$i=[];this.Hb=new PMUniversalGA;this.xc=new PMComScore;PMTracking.prototype.w=function(){this.product=pmglb.f.A.product;var a=pmglb.f.A;if("undefined"!==typeof a&&"undefined"!==typeof a.N&&a.N)this.N=pmglb.f.A.N,this.Wb=!0;var a=[],b={};"undefined"!==pmglb.f.get()&&pmglb.f.get()&&(b.dimension1="Template-ad-"+pmglb.f.get().name);b.dimension2="other";-1!=document.location.href.search("fb_ref=socialnews")&&
(b.dimension3="SocialNews");a.push(b);this.Hb.w(a,null,!pmglb.Rc());this.xc.w()};PMTracking.prototype.Oe=function(){var a=_gaq,b=pmglb.f.A.$b["google analytics"];"undefined"!==typeof b&&"undefined"!==typeof b.xd&&!pmglb.empty(b.xd)&&(a=a||[],a.push(["pmpro._setDomainName",b.xd]));return a};PMTracking.prototype.be=function(){switch(this.product){case "google analytics":this.Vg()}};PMTracking.prototype.Vg=function(){if(this.Wb){for(var a=document.getElementsByTagName("script"),b=!1,c=0,d=a.length;c<
d;c++){var e=a[c].src;if(!pmglb.empty(e)&&(-1!=e.indexOf("stats.g.doubleclick.net/dc.js")||-1!=e.indexOf("google-analytics.com/ga.js"))){b=!0;break}}if(!b)a=document.createElement("script"),a.type="text/javascript",a.async=!0,b=!1,c=pmglb.f.A.$b,pmglb.empty(c)||(c=c["google analytics"],b="undefined"!==typeof c&&"undefined"!==typeof c.qf?c.qf:b),a.src=b?("https:"==document.location.protocol?"https://":"http://")+"stats.g.doubleclick.net/dc.js":("https:"==document.location.protocol?"https://ssl":"http://www")+
".google-analytics.com/ga.js",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)}};PMTracking.prototype.Jh=function(){if(this.Wb){if(null==this.N)return;_gaq=_gaq||[];_gaq.push(["pmpro._setAccount",this.N]);_gaq=this.Oe();var a=pmglb.f.get()&&pmglb.f.get().name?pmglb.f.get().name:"no_template";_gaq.push(["pmpro._setCustomVar",1,"Template","Template-ad-"+a,3]);-1!=document.location.href.search("fb_ref=socialnews")&&_gaq.push(["pmpro._setCustomVar",2,"Referral","SocialNews",
3]);a=null;if(!pmglb.empty(pmglb.da)&&pmglb.da.Eb.le()){var b=pmglb.url().original.split(document.domain);1<b.length&&!pmglb.bh(b[1])&&(a=b[1])}pmglb.empty(a)?_gaq.push(["pmpro._trackPageview"]):_gaq.push(["pmpro._trackPageview",a]);this.xf.push(_gaq)}this.be()};PMTracking.prototype.vf=function(a,b,c){var d={};d[a]=b;this.ha.push(d);typeof c!==pmglb.b&&!isNaN(c)&&(this.kc[a+"_"+b]=c)};PMTracking.prototype.addTrackEvent=PMTracking.prototype.vf;PMTracking.prototype.Rh=function(){this.Hb.Di(this.ha,
this.kc);try{if(0<this.ha.length){if(this.Wb){var a=pmglb.f.get()&&pmglb.f.get().name?pmglb.f.get().name:"no_template";_gaq=_gaq||[];_gaq.push(["pmpro._setAccount",this.N]);_gaq=this.Oe();for(var b=0;b<this.ha.length;b++)for(var c in this.ha[b])if(null!=c&&""!=c){var d=this.kc[c+"_"+this.ha[b][c]];typeof d!==pmglb.b?_gaq.push(["pmpro._trackEvent",a,c,this.ha[b][c],d]):_gaq.push(["pmpro._trackEvent",a,c,this.ha[b][c]])}}this.ha=[];this.kc={}}}catch(e){}};PMTracking.prototype.runTrackEvent=PMTracking.prototype.Rh;
PMTracking.prototype.De=function(){switch(this.product){case "google analytics":this.Jh()}this.Hb.Qc();this.Hb.Vb();this.Hb.Fi();this.xc.Vb();this.xc.Qc()};PMTracking.prototype.Ia={kb:function(){return pmglb.gg()},update:function(){var a=pmglb.f.g();!pmglb.empty(a.A.Ia)&&!pmglb.empty(a.A.Ia.kb)&&(1==a.A.Ia.kb||"1"==a.A.Ia.kb)&&pmglb.A.Ia.kb()}}};window.PMTracking=PMTracking;
PMUniversalGA=function(){PMUniversalGA.prototype.w=function(a,b,c){var d=pmglb.f.A.$b,e=null;"undefined"!==typeof d&&(e=d.google_ua);if("undefined"!==typeof e&&e&&"undefined"!==typeof e.N&&e.N)this.Cb(!0),this.zd=e.N,this.Bc=a,this.Tj=b,this.ah=c};PMUniversalGA.prototype.Cb=s("isEnabled");PMUniversalGA.prototype.Qc=function(){if(this.isEnabled){var a="ga";if("undefined"!==typeof ga&&"function"!==typeof ga)a="__tbga",this.Ec=!0;this.Xe(a)}};PMUniversalGA.prototype.Xe=function(a){(function(b,a,d,e,
f,g,j){b.GoogleAnalyticsObject=f;b[f]=b[f]||function(){(b[f].q=b[f].q||[]).push(arguments)};b[f].l=1*new Date;g=a.createElement(d);j=a.getElementsByTagName(d)[0];g.async=1;g.src=e;j.parentNode.insertBefore(g,j)})(window,document,"script","//www.google-analytics.com/analytics.js",a)};PMUniversalGA.prototype.qa=function(){if("undefined"!==typeof ga&&"function"!==typeof ga&&!this.Ec)ugaFunctionName="__tbga",this.Ec=!0,this.Xe(ugaFunctionName);this.Ec?this.Lf.apply(this,arguments):this.Mf.apply(this,
arguments)};PMUniversalGA.prototype.Mf=function(){switch(arguments.length){case 1:ga(arguments[0]);break;case 2:ga(arguments[0],arguments[1]);break;case 3:ga(arguments[0],arguments[1],arguments[2]);break;case 4:ga(arguments[0],arguments[1],arguments[2],arguments[3]);break;case 5:ga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);break;case 6:ga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}};PMUniversalGA.prototype.Lf=function(){switch(arguments.length){case 1:__tbga(arguments[0]);
break;case 2:__tbga(arguments[0],arguments[1]);break;case 3:__tbga(arguments[0],arguments[1],arguments[2]);break;case 4:__tbga(arguments[0],arguments[1],arguments[2],arguments[3]);break;case 5:__tbga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);break;case 6:__tbga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}};PMUniversalGA.prototype.Vb=function(){if(this.isEnabled){this.ah?(this.qa("create",this.zd,"auto",{name:"_pm_ga"}),this.qa("_pm_ga.linker:autoLink",
["taboola.com"],!0)):this.qa("create",this.zd,"auto",{allowLinker:!0,name:"_pm_ga"});for(var a=0;a<this.Bc.length;a++)for(var b in this.Bc[a])null!=b&&""!=b&&this.qa("_pm_ga.set",b,this.Bc[a][b])}};PMUniversalGA.prototype.Fi=function(){var a=pmglb.url().canonical;if(this.isEnabled){var b={};a!==pmglb.b&&!pmglb.empty(a)&&(b.location=a);this.qa("_pm_ga.set","anonymizeIp",!0);this.qa("_pm_ga.send","pageview",b)}};PMUniversalGA.prototype.Di=function(a,b){if(this.isEnabled)try{if(0<a.length)for(var c=
pmglb.f.get()&&pmglb.f.get().name?pmglb.f.get().name:"no_template",d=0;d<a.length;d++)for(var e in a[d])if(null!=e&&""!=e){var f=b[e+"_"+a[d][e]];typeof f!==pmglb.b?this.qa("_pm_ga.send","event",c,e,a[d][e],f):this.qa("_pm_ga.send","event",c,e,a[d][e])}}catch(g){}}};PMMdotLabs=function(){PMMdotLabs.prototype.Cb=s("isEnabled")};
PMComScore=function(){PMComScore.prototype.Cb=s("isEnabled");PMComScore.prototype.Ke=s("gb");PMComScore.prototype.Le=s("hb");PMComScore.prototype.Me=s("ib");PMComScore.prototype.w=function(){var a=pmglb.f.A.$b;if(a&&void 0!==typeof a)a=a.comscore,this.Ke(7),this.Le(13739933),this.Me(1651865320),"undefined"!==typeof a&&a&&(this.Cb(!0),"undefined"!==typeof a.gb&&!pmglb.empty(a.gb)&&this.Ke(a.gb),"undefined"!==typeof a.hb&&!pmglb.empty(a.hb)&&this.Le(a.hb),"undefined"!==typeof a.ib&&!pmglb.empty(a.ib)&&
this.Me(a.ib))};PMComScore.prototype.Qc=function(){if(this.isEnabled){var a=a||[];a.push({gb:""+this.gb,hb:""+this.hb,ib:""+this.ib});var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.async=!0;a.src=("https:"==document.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";b.parentNode.insertBefore(a,b)}};PMComScore.prototype.Vb=function(){this.Cb(!0)}};_pmk=_pmk||{};window._pmk=_pmk;
PMPublisher=function(){var a=this;a.dc=null;a.Of=null;a.Xh=function(){a.dc={name:"Advance-network",ia:{},$j:!0,ak:{type:"dynamic",Fj:!1},data:{headline:{$a:[]},body:" "},ij:{},Ad:{Ri:{Ej:100},N:" ",Yi:"",bj:!0,Of:{dj:""}},rotation:[],pk:{},A:{$b:{},Ia:{kb:0}},Rd:!1,Id:[""],Nc:{xe:!0,ze:!1,af:!1,He:"complete",ue:'["facebook","video-player"]',Ue:""}}}};_pmk=_pmk||{};window._pmk=_pmk;
TBOptimization=function(){this.Je=!1;this.mb=null;this.ld=!1;this.p=[];this.B=[];this.Ha=[];this.cb=this.Wc=this.Q=1;this.Zc=this.Yc=0;this.La=null;this.optevd={done:!1};this.optshd={done:!1};this.uc=0;this.jh=30;this.bb=[];this.ra=[];this.Ib={};this.Tc=!1;if(typeof TBWidgetPersonalization!=pmglb.b&&"function"==typeof TBWidgetPersonalization)this.Uj=new TBWidgetPersonalization;this.Wa=null;this.o={rawJsonLd:null,url:"",headline:"",author:"",section:"",image:""};this.qh=!1;this.Ve=15;this.vi=4;this.wi=
3;this.dk=this.ck=!1;this.j=this.lb=this.Ma="";this.Nb="inline";if(typeof TBWidgetStorage!=pmglb.b&&"function"==typeof TBWidgetStorage)this.Gb=new TBWidgetStorage;if(typeof TBOptimizationTouchAndClickEventTracker!=pmglb.b&&"function"==typeof TBOptimizationTouchAndClickEventTracker)this.sa=new TBOptimizationTouchAndClickEventTracker;this.T={};this.kh={addthis:"stp",facebook:"stp",gigya:"stp",msn:"msntts",pinterest:"stp",reddit:"stp",sharethis:"stp",twitter:"stp",whatsapp:"stp",linkbox:"stp",sc:"sc",
gawker:"gwkcmt",disqus:"disquscmt",facebookcmt:"facebookcmt",weather:"weather",commentbtn:"commentbtn",bingsearch:"msntsb",instantbingsearch:"msntsb",msnsearch:"msntsb",instantmsnsearch:"msntsb",video:"video",button:"video",carousel:"carousel"};TBOptimization.prototype.ab=function(a,b){if("undefined"!=typeof a&&0<a.length&&"undefined"!=typeof a[0]&&"undefined"!=typeof a[0].xpath){if(typeof b.Y==pmglb.b||null==b.Y)b.Y={};if(typeof b.G==pmglb.b||null==b.G)b.G=[];for(var c=0;c<a.length;c++){var d=a[c],
d={n:d.xpath,C:d.attr};"undefined"==typeof d.n||null==d.n||("undefined"==typeof b.Y[d.n]||null==b.Y[d.n])&&b.G.push(d)}}};TBOptimization.prototype.aa=function(a){var b=[],c="",d="",e=[],f="",g="",j;for(j in a){var h=a[j],k=h.type;if("insert_inline_social"==k){var m="A";h.Qi&&-1==this.j.indexOf("w")&&this.vc()&&(0<this.j.length&&(this.j+=","),this.j+="w");h.yh&&-1==this.j.indexOf("p")&&(0<this.j.length&&(this.j+=","),this.j+="p");h.ig&&-1==this.j.indexOf("f")&&(0<this.j.length&&(this.j+=","),this.j+=
"f");h.Li&&-1==this.j.indexOf("t")&&(0<this.j.length&&(this.j+=","),this.j+="t");h.Gh&&-1==this.j.indexOf("r")&&(0<this.j.length&&(this.j+=","),this.j+="r");for(var n in h.Xa)b.push(h.Xa[n].n);c=h.Xa[0].location}else if("hide_social"==k)for(n in m="H",h.Xa)e.push(h.Xa[n].n);else if("insert_dock_social"==k){m="A";this.Nb="dock";h.Qi&&-1==this.j.indexOf("w")&&this.vc()&&(0<this.j.length&&(this.j+=","),this.j+="w");h.yh&&-1==this.j.indexOf("p")&&(0<this.j.length&&(this.j+=","),this.j+="p");h.ig&&-1==
this.j.indexOf("f")&&(0<this.j.length&&(this.j+=","),this.j+="f");h.Li&&-1==this.j.indexOf("t")&&(0<this.j.length&&(this.j+=","),this.j+="t");h.Gh&&-1==this.j.indexOf("r")&&(0<this.j.length&&(this.j+=","),this.j+="r");if(h.lk)this.Nb="sDock";for(n in h.Xa)b.push(h.Xa[n].n);d=h.jj[0].n;f=h.kj[0].n}else if("swap_social"==k){m="S";if(typeof this.gc==pmglb.b&&0==e.length)for(n in h.xi)e.push(h.xi[n].n);if(typeof this.Ga==pmglb.b&&0==b.length)for(n in h.Zf)b.push(h.Zf[n].n)}else"do_nothing"==k&&(m="N");
g+=m}a={};if(typeof b!=pmglb.b&&""!=b)this.Ga=b;if(typeof e!=pmglb.b&&""!=e)this.gc=e;if(typeof c!=pmglb.b&&""!=c)this.We=c;if(typeof d!=pmglb.b&&""!=d)this.Ma=d;if(typeof f!=pmglb.b&&""!=f)this.lb=f;a.bucket=g;return a};TBOptimization.prototype.eh=function(){this.gi();if(typeof pmglb.f.P!=pmglb.b)if(null!=pmglb.f.P&&typeof pmglb.f.P.yb!=pmglb.b){this.j=this.lb=this.Ma="";this.Nb="inline";var a=pmglb.f.g().Nc;typeof window._pm_mcg===pmglb.b&&(window._pm_mcg={});window._pm_mcg.oe=a.xe;window._pm_mcg.pe=
a.ze;window._pm_mcg.v3Model=a.af;window._pm_mcg.rs=a.He;window._pm_mcg.shurl=a.Ue;window._pm_mcg.me=JSON.parse(a.ue);var a={},b;for(b in pmglb.f.P.yb)if(pmglb.f.P.yb.hasOwnProperty(b)){a[pmglb.f.P.yb[b].type]={};var c=pmglb.f.P.yb[b],d=a[c.type];d.s=parseFloat((c.mk/100).toPrecision(2));d.a=parseFloat((c.Zi/100).toPrecision(2));d.bitly=c.gj;d.c="stp"==c.type?{h:c.Xg,m:c.Yg}:{h:(c.Xg/100).toPrecision(2),m:(c.Yg/100).toPrecision(2)};var e={s:"",m:"",l:""},f={hP:"",hN:"",mP:"",mN:"",lP:"",lN:""};f.hP=
this.aa(c.eb.Dj).bucket;f.hN=this.aa(c.eb.Cj).bucket;f.mP=this.aa(c.eb.Rj).bucket;f.mN=this.aa(c.eb.Qj).bucket;f.lP=this.aa(c.eb.Mj).bucket;f.lN=this.aa(c.eb.Lj).bucket;e.s=this.aa(c.Od.bk).bucket;e.m=this.aa(c.Od.Pj).bucket;e.l=this.aa(c.Od.Kj).bucket;d.d=f;d.dm=e;d.pal={};d.pal.paDefault={};if(typeof this.Ga!==pmglb.b)d.pal.paDefault.tl=this.Ga;if(typeof this.gc==pmglb.b)this.gc=["//donothingwiththis"];d.pal.paDefault.sl=this.gc;if(typeof this.We!==pmglb.b)d.pal.paDefault.t=this.We;if(typeof this.j!==
pmglb.b){c={sf:this.Nb,st:this.j};if(typeof this.lb!==pmglb.b&&typeof this.Ma!==pmglb.b&&""!==this.lb&&""!==this.Ma&&(c["in"]=this.Ma,c.out=this.lb,typeof this.Ga==pmglb.b))this.Ga=[this.Ma];d.pal.paDefault.sc=[c]}if(typeof this.Ga==pmglb.b)this.Ga=["//donothingwiththis"]}window._pm_mcg=this.Ba(window._pm_mcg,{modules:a})}else{if(null!=pmglb.f.g().Nc&&(typeof window._pm_mcg==pmglb.b&&(window._pm_mcg={}),typeof window._pm_mcg.me==pmglb.b))a=pmglb.f.g().Nc,window._pm_mcg.oe=a.xe,window._pm_mcg.pe=a.ze,
window._pm_mcg.v3Model=a.af,window._pm_mcg.rs=a.He,window._pm_mcg.shurl=a.Ue,window._pm_mcg.me=JSON.parse(a.ue)}else this.ea(1E3)};TBOptimization.prototype.gi=function(){if(typeof window._pm_mcg!==pmglb.b){var a=window._pm_mcg;if(this.Sa()){if(typeof a.mobile!==pmglb.b){var b=a.mobile;this.Ba(a,b);delete a.mobile}typeof a.desktop!==pmglb.b&&delete a.desktop}else{if(typeof a.desktop!==pmglb.b)b=a.desktop,this.Ba(a,b),delete a.desktop;typeof a.mobile!==pmglb.b&&delete a.mobile}}};TBOptimization.prototype.w=
function(){this.eh();if(this.ke()){this.Fh();pmglb.hc("opt-full");try{if(!(pmglb.tb()||pmglb.ub()||-1!=window.location.host.indexOf("widget.perfectmarket.com"))){this.vb()&&(this.hi(this.Pg),this.L("v",{}));this.Db();this.Je=this.Rf();var a=decodeURIComponent(window.location).indexOf("actualidad.rt.com/mobiledata/v3");!this.Je||-1<a?this.Sh():this.Th();this.Mh();this.Ce();this.Te();this.Pi();this.Nf();typeof window._pm_infs!=pmglb.b&&this.mh()}}catch(b){this.S("FPO - setup failed")}}};TBOptimization.prototype.Fh=
function(){for(var a=document.querySelectorAll('script[type="application/ld+json"]'),b={},c=0;c<a.length;c++){var d=a[c];if(typeof d!==pmglb.b&&null!==d){d=d.innerText.replace(/[\t\r\n]/g,"");d=d.replace("//<![CDATA[","");d=d.replace("//]]\>","");try{var e=JSON.parse(d),b=this.Ba(b,e)}catch(f){}}}if(null!==b&&0!==b.length){this.o.rawJsonld=b;this.o.url=this.pa(b,"url",!1);this.o.headline=this.pa(b,"headline",!1);if(null===this.o.headline||0===this.o.headline.length)this.o.headline=this.fa("headline");
this.o.headline=this.Ld(this.o.headline);this.o.author=this.pa(b,"author",!0);if(null===this.o.author||0===this.o.author.length){if(this.o.author=this.pa(b,"creator",!0),null===this.o.author||0===this.o.author.length)this.o.author=this.fa("author")}else{for(var a=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.ablw!==pmglb.b?window._pm_ecd.ablw:[],e=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.regx!==pmglb.b?window._pm_ecd.regx:"",d=this.o.author,g=[],c=0;c<d.length;c++)g=g.concat(this.Hc(d[c],
a,e));this.o.author=g}c=!1;typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.msec!==pmglb.b&&window._pm_ecd.msec&&(c=!0);this.o.section=this.Ld(this.pa(b,"articleSection",c)).split(",").sort().join(",");this.o.image=this.pa(b,"image",!1);if(null===this.o.image||0===this.o.image.length)if(this.o.image=this.pa(b,"thumbnailUrl",!1),null===this.o.image||0===this.o.image.length)this.o.image=this.fa("image");typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.jl_image!==pmglb.b&&(this.o.image=this.pa(b,
window._pm_ecd.jl_image,!1));typeof window._pm_ecd!==pmglb.b&&!pmglb.empty(window._pm_ecd.opd)&&this.ph();this.o.headline=this.bc(this.o.headline);this.o.section=this.bc(this.o.section);this.o.image=this.bc(this.o.image)}};TBOptimization.prototype.bc=function(a){return a.replace(/[\t\r\n]/g,"").replace(/[\x00-\x1F\x7F-\x9F]/g,"")};TBOptimization.prototype.ph=function(){for(var a=window._pm_ecd.opd,b=0,c=a.length;b<c;b++){var d;switch(a[b]){case "author":d=this.fa("author");!pmglb.empty(d)&&!pmglb.empty(d[0])&&
(this.o.author=d);break;case "headline":d=this.fa("headline");pmglb.empty(d)||(this.o.headline=d);break;case "image":d=this.fa("image");pmglb.empty(d)||(this.o.image=d);break;case "section":d=this.fa("section"),pmglb.empty(d)||(this.o.section=d.split(",").sort().join(","))}}};TBOptimization.prototype.Ld=function(a){if(typeof a!==pmglb.b&&null!==a){var b=document.createElement("textarea");b.innerHTML=a;return b.value}return a};TBOptimization.prototype.pa=function(a,b,c){var d=[];if(typeof a[b]!==pmglb.b)if("string"===
typeof a[b])d[0]=a[b];else if(a[b]instanceof Array)for(var e=0;e<a[b].length;e++)"string"===typeof a[b][e]?d[e]=a[b][e]:typeof a[b][e]!==pmglb.b&&(typeof a[b][e].name!==pmglb.b?d[e]=a[b][e].name:typeof a[b][e].value!==pmglb.b?d[e]=a[b][e].value:typeof a[b][e].url!==pmglb.b&&(d[e]=a[b][e].url));else a[b]&&typeof a[b].name!==pmglb.b?d[0]=a[b].name:a[b]&&typeof a[b].value!==pmglb.b?d[0]=a[b].value:"image"===b&&(d[0]=a[b]&&typeof a[b].url!==pmglb.b?a[b].url:null);return null!==c&&c?d:0<d.length?d[0]:
d};TBOptimization.prototype.zb=function(){this.Uh();this.Sf()};TBOptimization.prototype.mh=function(){this.La=window.location.href;var a=this.La.indexOf("#");if(0<a)this.La=this.La.substring(0,a);this.Qf()};TBOptimization.prototype.Qf=function(){var a=window.location.href,b=a.indexOf("#");0<b&&(a=a.substring(0,b));if(this.La!==a)this.La=a,this.Zh();this.ea(1E3)};TBOptimization.prototype.Zh=function(){this.p=[];this.B=[];this.qh=!1;this.optevd={done:!1};this.optshd={done:!1};this.Zc=this.Yc=0;this.cb=
this.Wc=this.Q=1;this.uc=0;this.Ib={};typeof window.tbopt==pmglb.b&&(window.tbopt={});window.tbopt.widgetsVisible=[];this.vb()&&this.L("v",{});this.Db();this.hk();this.Ce();this.Te();this.zb()};TBOptimization.prototype.L=function(a,b){if(this.vb()){if(void 0!==typeof b.gwkcmt)b.Gwkcmt=b.gwkcmt,delete b.gwkcmt;if(void 0!==typeof b.video)b.Video=b.video,delete b.video;b=JSON.stringify(b);this.fh("opt/tboptevent.html?v=2&a="+a+"&d="+encodeURIComponent(b))}};TBOptimization.prototype.attachEvent=function(a,
b){window.addEventListener?window.addEventListener(a,b,!1):window.attachEvent&&window.attachEvent("on"+a,b)};TBOptimization.prototype.Nf=function(){this.attachEvent("mousedown",this.oh)};TBOptimization.prototype.oh=function(a){var b=pmglb.e;if(!("undefined"==typeof a.pageX||"undefined"==typeof a.pageY))b.Yc=a.pageX,b.Zc=a.pageY};TBOptimization.prototype.Pi=function(){var a=pmglb.e,b=this.ma("rs","complete");if(pmglb.Cc()&&100>=a.cb)a.cb++,a.ea(100);else{var c=["loading","loaded","interactive","complete"];
("body-tag"==b&&0==document.getElementsByTagName("body").length||-1!=c.indexOf(b)&&document.readyState!=b)&&100>=a.cb?(a.cb++,a.ea(100)):this.zb()}};TBOptimization.prototype.Ce=function(){var a=this.ma("me","facebook,twitter,whatsapp,sharethis,addthis,gigya,pinterest,reddit".split(","));(-1!=a.indexOf("taboolasc")||-1!=a.indexOf("sc"))&&typeof TBWidgetSC!=pmglb.b&&this.p.push(new TBWidgetSC);-1!=a.indexOf("facebook")&&this.p.push(new TBWidgetFacebook);-1!=a.indexOf("twitter")&&this.p.push(new TBWidgetTwitter);
-1!=a.indexOf("whatsapp")&&this.p.push(new TBWidgetWhatsApp);-1!=a.indexOf("sharethis")&&this.p.push(new TBWidgetShareThis);-1!=a.indexOf("addthis")&&this.p.push(new TBWidgetAddThis);-1!=a.indexOf("gigya")&&this.p.push(new TBWidgetGigya);-1!=a.indexOf("pinterest")&&this.p.push(new TBWidgetPinterest);-1!=a.indexOf("reddit")&&this.p.push(new TBWidgetReddit);-1!=a.indexOf("linkbox")&&this.p.push(new TBWidgetLinkbox);var b=this.ma("msntsbq",!1);-1!=a.indexOf("msntsb")&&-1!=window.location.hostname.indexOf("www.msn.com")&&
typeof TBWidgetMsnTsb!=pmglb.b&&this.p.push(new TBWidgetMsnTsb(b));-1!=a.indexOf("gawker")&&this.p.push(new TBWidgetGawkerComments);-1!=a.indexOf("disqus")&&this.p.push(new TBWidgetDisqus);-1!=a.indexOf("facebook-comments")&&this.p.push(new TBWidgetFacebookComments);-1!=a.indexOf("weather")&&this.p.push(new TBWidgetWeatherStories);-1!=a.indexOf("comment-button")&&this.p.push(new TBWidgetCommentButton);-1!=a.indexOf("video-player")&&this.p.push(new TBWidgetVideoPlayer);-1!=a.indexOf("video")&&this.p.push(new TBWidgetVideoPersonalization)};
TBOptimization.prototype.Rf=function(){var a=!1,b=this.ma("v3Model",!1);typeof b!==pmglb.b&&!0===b&&(a=!0);return a};TBOptimization.prototype.Sh=function(){this.vb()&&typeof TBV2Personalization!=pmglb.b&&"function"==typeof TBV2Personalization&&(new TBV2Personalization).Qh()};TBOptimization.prototype.Th=function(){this.vb()&&(!this.optevd.done&&this.uc<=this.jh?(this.uc++,this.ea(100)):typeof TBWidgetFPORunner!=pmglb.b&&"function"==typeof TBWidgetFPORunner&&(new TBWidgetFPORunner).Qh())};TBOptimization.prototype.Te=
function(){var a=[],b=[],c;for(c in this.p)if(!isNaN(c)){var d=this.p[c];if("function"==typeof d.w)try{typeof window._tb_ext_xp!=pmglb.b&&typeof window._tb_ext_xp[d.name]!=pmglb.b&&this.ab(window._tb_ext_xp[d.name],d),d.w(),a.push(d.name)}catch(e){b.push(d.name),this.S("FPO - widget "+d.name+" failed to setup")}}};TBOptimization.prototype.Ae=function(){var a=[],b=[],c;for(c in this.p)if(!isNaN(c)){var d=this.p[c];if("function"==typeof d.zb)try{d.zb(),a.push(d.name)}catch(e){b.push(d.name),this.S("FPO - widget "+
d.name+" failed to post setup")}}pmglb.Fb("opt-full");this.Ii()};TBOptimization.prototype.Db=function(){var a=this.ma("pgtp");if(typeof a!==pmglb.b){try{var b,c=decodeURIComponent(window.location),d=!1,e;for(e in a)if(b=RegExp(e),b.test(c)){d=!0;this.Wa=a[e];break}}catch(f){this.Wa=null,this.S("FPO - setup page type failed")}if(!d)this.Wa=null}else this.Wa="paDefault"};TBOptimization.prototype.Oa=function(a){a=this.kh[a];typeof a==pmglb.b&&(a="unknown");return a};TBOptimization.prototype.uh=function(a){var b=
this.Vd(a.z),c=this.Oa(a.name),d={};d.name=a.name;d.type=a.type;d.m=c;d.v=this.vi;if(typeof a.url!==pmglb.b&&0<a.url.length)d.badgeUrl=a.url;if("weather"==a.name)d.v=3,d.slotId=a.nk,d.lType=a.Nj;d.location=b.pc;d.locationX=b.x;d.locationY=b.y;d.timestamp=(new Date).getTime();d.isMobile=this.Sa();d.screenResX=screen.width;d.screenResY=screen.height;d.pubDate=this.Wd();typeof a.md!==pmglb.b&&(d.md=a.md);return d};TBOptimization.prototype.R=function(a){this.ri(this.uh(a))};TBOptimization.prototype.ri=
function(a){var b=a.name,c=a.type;if(!(typeof this.qe!==pmglb.b&&!isNaN(parseInt(a.timestamp))&&250>a.timestamp-this.qe.timestamp)){"undefined"==typeof window.tbopt&&(window.tbopt={});"undefined"==typeof window.tbopt.shareEvents&&(window.tbopt.shareEvents=[]);this.qe=a;window.tbopt.shareEvents.push(a);window._taboola=window._taboola||[];window._taboola.push({"social-share":[a]});for(var d=null,e=0;e<this.B.length;e++)if(this.B[e].J==a.m){d=this.B[e];break}a=null!=d&&null!=d.cc?"_"+d.cc.bl.slice(0,
1)+"_"+d.cc.ovr:"";pmglb.lc("share",b+"_"+c+a);"sc"==b?this.L("u",{sc:{c:1}}):"gawker"==b?this.L("u",{gwkcmt:{c:1}}):"disqus"==b?this.L("u",{disquscmt:{c:1}}):"facebookcmt"==b?this.L("u",{facebookcmt:{c:1}}):"commentbtn"==b?this.L("u",{commentbtn:{c:1}}):"bingsearch"==b?this.L("u",{msntsb:{c:1}}):"msnsearch"==b?this.L("u",{msntsb:{c:1}}):"video"==b&&"vr"!=c||("video"==b&&"vr"==c?this.L("u",{video:{c:1}}):"carousel"==b?this.L("u",{carousel:{c:1}}):this.L("u",{stp:{c:1}}))}};TBOptimization.prototype.Vd=
function(a){var b=0,c=0,d="none";null==a?(b=this.Yc,c=this.Zc):(a=this.Bg(a),b=a.left,c=a.top);if(isNaN(b)||isNaN(c))return{pc:"unknown",x:0,y:0};d=this.Sa()?280>=c?"top":650>=c?"above-fold":1300>=c?"below-fold":"bottom":350>=c?"top":700>=c?"above-fold":1200>=c?"below-fold":"bottom";return{pc:d,x:b,y:c}};TBOptimization.prototype.Uh=function(){var a=[],b=[],c;for(c in this.p)if(!isNaN(c)){var d=this.p[c];if("function"==typeof d.ja)try{pmglb.hc("opt-detect-"+d.name);var e=null;if(typeof window._tb_infscrl_doc_path!==
pmglb.b&&null!==window._tb_infscrl_doc_path)for(var f=document.evaluate(window._tb_infscrl_doc_path,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),g=0;g<f.snapshotLength;g++)pmglb.e.rb(f.snapshotItem(g))&&(e=f.snapshotItem(g));null!==e?d.ja(e):d.ja();a.push(d.name)}catch(j){b.push(d.name),this.S("FPO - widget "+d.name+" failed to run detect")}}};TBOptimization.prototype.Sf=function(){if(window._tb_rms!==pmglb.b&&window._tb_rms)this.Lh(),this.Nh();else{var a=!0,b;for(b in this.p)if(!isNaN(b)&&
"undefined"!=typeof this.p[b].ja)if(this.p[b].Ac)pmglb.Fb("opt-detect-"+this.p[b].name);else{a=!1;break}for(b=0;b<this.B.length;b++)if(!this.B[b].ih){a=!1;break}!a&&50>this.Q?(this.Q++,this.ea(100)):(this.Kh(),this.Ae())}};TBOptimization.prototype.Lh=function(){var a=!0,b;for(b in this.p)if(!isNaN(b)&&"undefined"!=typeof this.p[b].ja)if(this.p[b].Ac)pmglb.Fb("opt-detect-"+this.p[b].name);else{a=!1;break}!a&&50>this.Q?(this.Q++,this.ea(100)):(this.jg(),this.Ae())};TBOptimization.prototype.jg=function(){var a=
[],b={},c;for(c in this.p)if(!isNaN(c)&&typeof this.p[c].ja!==pmglb.b){var d=this.p[c].O,e;for(e in d)!isNaN(e)&&!("w"==d[e].i&&0>=d[e].c)&&(a.push(d[e]),b[this.Oa(d[e].nm)]=1)}"undefined"==typeof window.tbopt&&(window.tbopt={});a.push(this.Jf());window.tbopt.widgetsDetected=a;if(1<a.length){window._taboola=window._taboola||[];window._taboola.push({"social-available":a});a={};c=!1;for(e in b)b.hasOwnProperty(e)&&(a[e]={a:b[e]},c=!0);c&&this.L("u",a)}};TBOptimization.prototype.Nh=function(){for(var a=
!0,b=0;b<this.B.length;b++)if(!this.B[b].ih){a=!1;break}!a&&50>this.Wc?(this.Wc++,this.ea(100)):this.kg()};TBOptimization.prototype.kg=function(){for(var a=[],b=0;b<this.B.length;b++)typeof this.B[b].fd!==pmglb.b?a.push(this.B[b].fd):a.push(this.B[b].cc);if(0<a.length)a.push(this.fb()),window._taboola=window._taboola||[],window._taboola.push({"social-available":a});for(b=0;b<this.B.length;b++)if(a=this.B[b],typeof a.W.bl!==pmglb.b&&null!==a.W.bl){var c=a.W.bl.slice(0,1);pmglb.lc("Final"+a.J+"-"+c,
a.W.bl+"_"+a.W.ac+"_"+a.W.ovr)}};TBOptimization.prototype.Kc=function(a){var b="";return b=this.fa(a)};TBOptimization.prototype.ob=function(a){var b=this.o[a];typeof window._pm_ecd!==pmglb.b&&pmglb.empty(this.o[a])&&(b=this.fa(a));return b};TBOptimization.prototype.fa=function(a){var b="";try{switch(a){case "headline":try{var c=this.za("//meta[@property='og:title']");if(null!=c)b=c.getAttribute("content");else if(c=document.getElementsByTagName("title")[0],typeof c!==pmglb.b)b=c.textContent;typeof window._pm_ecd!==
pmglb.b&&typeof window._pm_ecd.hd!==pmglb.b&&(c=this.za(window._pm_ecd.hd,this.k()),null!==c&&(b=this.Lc(c)));"string"==typeof b&&(b=b.substring(0,200));return null==b?"":b}catch(d){return""}case "section":try{var e;if(typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.sx!==pmglb.b){e=this.Sb(window._pm_ecd.sx,this.k());var f=window._pm_ecd.sblw,g=window._pm_ecd.sregx;if(null!=e){var b=this.Mc(e,f,g),j=1;if(!pmglb.empty(b)&&window._pm_ecd.msec)j=b.length;for(var h="",k=0;k<j;k++)h=h+","+b[k];
b=h.replace(/(^,)|(,$)/g,"").split(",").sort().join(",")}}else if(typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.sp!==pmglb.b)b=this.Gg();else if(typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.se!==pmglb.b)b=window._pm_ecd.se;else if(typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.sr!==pmglb.b){var m=this.Qa(),n=RegExp(window._pm_ecd.sr,"g").exec(m);null!=n&&typeof n[1]!==pmglb.b&&(b=n[1])}else{var j=1,w=this.Sb("//meta[@property='article:section']",this.k());if(typeof window._pm_ecd!==
pmglb.b&&typeof window._pm_ecd.msec!==pmglb.b&&window._pm_ecd.msec)j=w.length;h="";for(k=0;k<j;k++)w[k]&&(h=h+","+w[k].getAttribute("content"));b=h.replace(/(^,)|(,$)/g,"").split(",").sort().join(",")}!0==window._tb_infscrl&&typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.sc!==pmglb.b&&(e=this.za(window._pm_ecd.sc,this.k()),null!=e&&(b=this.Lc(e)));if(null==b||""==b){for(var h="",q=this.Mc(this.Sb("//a[contains(@rel,'category')]",this.k())),k=0;k<q;k++)h=h+","+q[k];b=h.replace(/(^,)|(,$)/g,
"").split(",").sort().join(",")}return null==b?"":b}catch(v){return""}case "author":try{if(typeof _tb_inf_author_dis!==pmglb.b&&_tb_inf_author_dis&&1<pmglb.$c)return[];a="//a[contains(@rel,'author')]";if(typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.ae!==pmglb.b&&(b=window._pm_ecd.ae,typeof b!==pmglb.b))return b.split(",");typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.ax!==pmglb.b&&(a=window._pm_ecd.ax);typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.at!==pmglb.b&&(a=window._pm_ecd.at);
var b=[],r=this.Sb(a,this.k());if(null!=r)var p=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.ablw!==pmglb.b?window._pm_ecd.ablw:[],l=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.regx!==pmglb.b?window._pm_ecd.regx:"",b=this.Mc(r,p,l);if(pmglb.empty(b)&&typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.atex!==pmglb.b)a=window._pm_ecd.atex,r=this.xg(a,this.k()),typeof r===pmglb.pf&&(p=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.ablw!==pmglb.b?window._pm_ecd.ablw:[],
l=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.regx!==pmglb.b?window._pm_ecd.regx:"",b=this.Hc(r,p,l));return b}catch(y){return[]}case "image":try{var t=this.za("//meta[@property='og:image']");null!=t?b=t.getAttribute("content"):(t=this.za("//meta[@property='twitter:image:src']"),null!=t&&(b=t.getAttribute("content")));typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.im!==pmglb.b&&(image=this.za(window._pm_ecd.im,this.k()),null!=image&&(b=this.Lc(image)),null===image&&1==pmglb.$c&&
null!==t&&(b=t.getAttribute("content")));return null==b?"":b}catch(z){return""}case "userType":return b=window._tbl_user_type,null===b?"":b;case "unifiedId":return b=window._tbl_unified_id,null===b?"":b;case "paywall":return b=window._tbl_paywall,null===b||"undefined"===typeof b?!1:!0}return b}catch(A){return this.S("FPO - error while extracting extended data for "+a),""}};TBOptimization.prototype.Lc=function(a){if(typeof a.value!==pmglb.b){var a=a.value,b=a.indexOf("http");if(-1!=b)for(var b=a.substring(b),
c=[".jpg",".jpeg",".png",".gif"],d=0;d<c.length;d++){var e=b.indexOf(c[d]);-1!=e&&(a=b=b.substring(0,e+c[d].length))}}else a=a.textContent.trim();return a};TBOptimization.prototype.Hc=function(a,b,c){var d=[];0<a.indexOf("\n")&&(a=a.replace("/\n/g"," "));0==a.toLowerCase().indexOf("by ")&&(a=a.substring(3));0==a.toLowerCase().indexOf("by: ")&&(a=a.substring(4));-1!=a.toLowerCase().indexOf("published")&&(a=a.substring(0,a.toLowerCase().indexOf("published")));if(null!==b&&!pmglb.empty(b))for(var e=
0;e<b.length;e++){var f=b[e];-1!=a.toLowerCase().indexOf(f.toLowerCase())&&(a=a.replace(f,""))}a=this.Af(a,c);a=a.replace(/(<([^>]+)>)/ig,"");a=a.replace("$","");b=[",","&"," and ","/"];c=typeof window._pm_ecd!==pmglb.b&&typeof window._pm_ecd.atd!==pmglb.b?window._pm_ecd.atd:"";pmglb.empty(c)||(b=b.concat(c));a=d.concat(a.split(RegExp(b.join("|"),"gi")));for(b=0;b<a.length;b++)c=this.bc(a[b].trim()),pmglb.empty(c)||d.push(c);return d};TBOptimization.prototype.Mc=function(a,b,c){for(var d=[],e=0;e<
a.length;e++)if(null!==a[e]){var f=a[e].textContent.trim();""===f&&(f=a[e].getAttribute("alt"));f&&""!==f&&(0<f.indexOf("\n")&&(f=f.replace("/\n/g"," ")),""!=f&&(d=d.concat(this.Hc(f,b,c))))}return d};TBOptimization.prototype.Af=function(a,b){if(!pmglb.empty(b)){var c=RegExp(b,"gi").exec(a);if(null!==c&&1<c.length)for(i=1;i<c.length;i++){if(!pmglb.empty(c[i])){a=c[i];break}}else a=""}return a};TBOptimization.prototype.Gg=function(){var a=window._pm_ecd.sp,b=window.location.pathname.split("/");return a>=
b.length?null:b[a]};TBOptimization.prototype.xg=function(a,b){var c=typeof b==pmglb.b?pmglb.k():b,d,e;if(!this.Uc()){try{d=document.evaluate(a,c,null,XPathResult.ANY_TYPE,null)}catch(f){this.S("FPO - error finding xpath result: "+a)}if("object"===typeof d)e=d.stringValue;return e}};TBOptimization.prototype.Sb=function(a,b){var c=typeof b==pmglb.b?pmglb.k():b,d,e=[];if(this.Uc())return e;try{d=document.evaluate(a,c,null,XPathResult.ANY_TYPE,null)}catch(f){this.S("FPO - error finding all elements for xpath: "+
a)}if(d)for(c=d.iterateNext();c;)e.push(c),c=d.iterateNext();return e};TBOptimization.prototype.Uc=function(){return typeof XPathResult==pmglb.b&&pmglb.ge()?!0:!1};TBOptimization.prototype.Jf=function(){return{i:"ctx",v:this.Ve}};TBOptimization.prototype.fb=function(){var a=typeof this.bf!==pmglb.b&&null!==this.bf?this.bf:typeof pmglb.f.P!=pmglb.b&&null!=pmglb.f.P&&typeof pmglb.f.P.yb!=pmglb.b?pmglb.f.P.name:"",b=this.Qa(),c=this.ob("headline");if(""==pmglb.Zb)pmglb.Zb=c;var d=this.ob("section"),
e=this.ob("author"),f=this.ob("image"),g=this.Qa(!0),j=this.Kc("userType"),h=this.Kc("unifiedId"),k=this.Kc("paywall");g!==b&&(d="",e=[],f="",b=g,c="");return{i:"ctx",ism:this.Sa(),srx:screen.width,sry:screen.height,pd:this.Wd(),tpl:a,url:b,rref:this.Xd(),sref:this.Ic(),hdl:c,sec:d,aut:e,img:f,v:this.Ve,ui:h,ut:j,pw:k}};TBOptimization.prototype.Mh=function(){for(var a=[],b=0;b<this.B.length;b++)typeof this.B[b].Ug!==pmglb.b?a.push(this.B[b].Ug):a.push(this.B[b].W);a.push(this.fb());window._taboola=
window._taboola||[];window._taboola.push({"social-available":a})};TBOptimization.prototype.Kh=function(){var a=[],b={},c;for(c in this.p)if(!isNaN(c)&&typeof this.p[c].ja!==pmglb.b){var d=this.p[c].O,e;for(e in d)!isNaN(e)&&!("w"==d[e].i&&0>=d[e].c)&&(a.push(d[e]),b[this.Oa(d[e].nm)]=1)}for(e=0;e<this.B.length;e++)typeof this.B[e].fd!==pmglb.b?a.push(this.B[e].fd):a.push(this.B[e].cc);"undefined"==typeof window.tbopt&&(window.tbopt={});window.tbopt.widgetsDetected=a;if(0<a.length){a.push(this.fb());
window._taboola=window._taboola||[];window._taboola.push({"social-available":a});a={};c=!1;for(e in b)b.hasOwnProperty(e)&&(a[e]={a:b[e]},c=!0);c&&this.L("u",a)}else typeof window._tb_fsa!==pmglb.b&&window._tb_fsa?(a.push(this.fb()),window._taboola=window._taboola||[],window._taboola.push({"social-available":a}),a={},this.L("u",a)):(a.push(this.fb()),window.tbopt.widgetsDetected=a);for(e=0;e<this.B.length;e++)b=this.B[e],typeof b.W.bl!==pmglb.b&&null!==b.W.bl&&(a=b.W.bl.slice(0,1),pmglb.lc("Final"+
b.J+"-"+a,b.W.bl+"_"+b.W.ac+"_"+b.W.ovr))};TBOptimization.prototype.lg=function(a){if(!this.Tc){this.Tc=!0;"number"!==typeof a&&(a=1E3);var b=this;setTimeout(function(){b.Oh();b.Tc=!1},a)}};TBOptimization.prototype.Oh=function(){if(0!=this.ra.length){typeof window.tbopt==pmglb.b&&(window.tbopt={});typeof window.tbopt.widgetsVisible==pmglb.b&&(window.tbopt.widgetsVisible=[]);var a=[],b=[],c={},d;for(d in this.ra)if(!isNaN(d)){var e=this.ra[d];if(null==e.Fe||!e.Fe){e.Fe=!0;var f=this.Vd(e.z),g=this.sh(e.J,
e.name,e.type,f.pc,f.x,f.y,e.z,e.md);window.tbopt.widgetsVisible.push(g);a.push(g);b.push(e.name+":"+e.type+"@"+f.pc);typeof e.type==pmglb.b||0<e.type.indexOf("btn")||(c[this.Oa(e.name)]=1)}}if(0<a.length)for(d in window._taboola=window._taboola||[],window._taboola.push({"social-visible":a}),c)c.hasOwnProperty(d)&&null==this.Ib[d]&&(a={},a[d]={v:c[d]},this.L("u",a),this.Ib[d]=1)}};TBOptimization.prototype.Na=function(a){try{if(typeof a===pmglb.b||null===a)return 0;var b=a.getBoundingClientRect(),
c=0,d=pmglb.e.rb(a);if(window._tb_vstr_vsbl!==pmglb.b&&window._tb_vstr_vsbl){var e=document.elementFromPoint(b.right-1,b.top+1),f=document.elementFromPoint(b.left+1,b.bottom-1),g=document.elementFromPoint(b.right-1,b.bottom-1),j=document.elementFromPoint((b.left+b.right)/2,(b.top+b.bottom)/2);document.elementFromPoint(b.left+1,b.top+1)!==a&&e!==a&&f!==a&&g!==a&&j!==a&&(d=!1)}if(d){var h=b.top,k=b.bottom,a=k-h,m=window.innerHeight;0<=k&&0<=m-h&&(c=(Math.min(m,k)-Math.max(h,0))/a)}return c}catch(n){return this.S("ERROR while getting visibility decimal "),
0}};TBOptimization.prototype.Dg=function(a){for(var b=0,c=0;a;)b+=parseInt(a.offsetTop),c+=parseInt(a.offsetLeft),a=a.offsetParent;return{top:b,left:c}};TBOptimization.prototype.Jb=function(a){var b=this;this.gf(this.Kd(function(c){if(b.rb(a.z)){var d=!1,e;for(e in b.ra)if(!isNaN(e)&&b.ra[e].z===a.z){d=!0;break}d||(b.ra.push(a),b.lg(c))}}))};TBOptimization.prototype.ff=function(a,b,c){var d=this;this.gf(this.Kd(function(){d.rb(a.z)?null!==b&&b():null!==c&&c()}))};TBOptimization.prototype.Hh=function(a){null!=
a&&-1==this.bb.indexOf(a)&&this.bb.push(a)};TBOptimization.prototype.Qg=function(a){return null==a?!1:-1!=this.bb.indexOf(a)};TBOptimization.prototype.Be=function(a){if(null==a||this.Qg(a))return null;this.Hh(a);return a};TBOptimization.prototype.ea=function(a){var b=this,c=arguments,d=arguments.callee.caller;setTimeout(function(){d.apply(b,c)},a||250)};TBOptimization.prototype.Kd=function(a){var b;return function(){var c=this,d=arguments;clearTimeout(b);b=setTimeout(function(){a.apply(c,d)},250)}};
TBOptimization.prototype.gf=function(a){this.attachEvent("DOMContentLoaded",a);this.attachEvent("load",a);this.attachEvent("scroll",a);this.attachEvent("resize",a);this.attachEvent("mousedown",a);this.attachEvent("_tb_watchEvent",a);this.attachEvent("blur",a);a(0)};TBOptimization.prototype.rb=function(a){try{if(typeof a===pmglb.b||null===a)return!1;var b=a.getBoundingClientRect(),c=this.Aa(a,"opacity"),d=this.Aa(a,"visibility"),e=this.Aa(a,"display"),f=this.Aa(a,"transform");pmglb.Xb()&&(f=this.Aa(a,
"-ms-transform"));""===f&&(f=this.Aa(a,"-webkit-transform"));return-1===f.indexOf("matrix(0, 0, 0, 0, 0, 0)")&&"none"!==e&&"0"!==c&&"hidden"!==d&&0<a.offsetWidth&&0<a.offsetHeight&&0<=b.left&&(0<=b.top&&b.bottom-b.height<=(window.innerHeight||document.documentElement.clientHeight)||0>b.top&&0<b.bottom)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)}catch(g){return this.S("ERROR while checking if element is in viewport"),!1}};TBOptimization.prototype.Aa=function(a,b){return window.getComputedStyle&&
typeof window.getComputedStyle(a,null)[b]!==pmglb.b?window.getComputedStyle(a,null).getPropertyValue(b):""};TBOptimization.prototype.Cg=function(a){var a=a.getBoundingClientRect(),b=document.body,c=document.documentElement;return{top:Math.round(a.top+(window.pageYOffset||c.scrollTop||b.scrollTop)-(c.clientTop||b.clientTop||0)),left:Math.round(a.left+(window.pageXOffset||c.scrollLeft||b.scrollLeft)-(c.clientLeft||b.clientLeft||0))}};TBOptimization.prototype.Bg=function(a){return a.getBoundingClientRect?
this.Cg(a):this.Dg(a)};TBOptimization.prototype.Vc=function(a){this.Ha.push({type:"info",nh:a,hj:void 0});this.Eh()};TBOptimization.prototype.Eh=function(){if(typeof __trcDebug===pmglb.b||typeof __trcInfo===pmglb.b||typeof __trcWarn===pmglb.b||typeof __trcError===pmglb.b)this.ea(250);else{for(var a in this.Ha)if(this.Ha.hasOwnProperty(a)){var b=this.Ha[a],c=b.nh;switch(b.type){case "info":typeof __trcInfo!==pmglb.b&&__trcInfo(c);break;case "warn":typeof __trcInfo!==pmglb.b&&__trcInfo(c);break;case "error":typeof __trcInfo!==
pmglb.b&&__trcInfo(c)}}this.Ha=[]}};TBOptimization.prototype.Ii=function(){this.Vc("FPO completed running")};TBOptimization.prototype.Ji=function(a){this.Vc(a)};TBOptimization.prototype.S=function(a){this.Vc(a)};TBOptimization.prototype.Ig=function(){var a=pmglb.e.la("og:url");if(null==a||typeof a==pmglb.b)a=pmglb.url().canonical;var b=this.ma("shurl");typeof b!==pmglb.b&&null!=b&&""!=b&&(b=pmglb.e.la(b),pmglb.empty(b)||(a=b));return a};TBOptimization.prototype.Qa=function(a){typeof a!==pmglb.b&&
a&&pmglb.page.ga();a=pmglb.url().canonical;if(null==a||typeof a==pmglb.b)a=pmglb.e.la("og:url");return a};TBOptimization.prototype.Wd=function(){var a=pmglb.page.bd;typeof a===pmglb.b&&(a=null);return a};TBOptimization.prototype.ke=function(){return x?!0:this.ma("oe",!0)};TBOptimization.prototype.vb=function(){return this.ma("pe",!1)};TBOptimization.prototype.ma=function(a,b){var c=this.Gc("global","_pm_mcg",a);typeof c===pmglb.b&&(c=b);return c};TBOptimization.prototype.Gc=function(a,b,c){b=window[b];
if("global"==a){if(typeof b!==pmglb.b&&typeof b[c]!==pmglb.b)return b[c]}else if(typeof b!==pmglb.b&&typeof b.modules!==pmglb.b&&typeof b.modules[a]!==pmglb.b&&typeof b.modules[a][c]!==pmglb.b)return b.modules[a][c]};TBOptimization.prototype.hi=function(a){window.postMessage&&this.attachEvent("message",a)};TBOptimization.prototype.Pg=function(a){if(!(null==a||null==a.data)&&!("string"!=typeof a.data||-1==a.data.indexOf("tbopt")))try{var b=JSON.parse(a.data);if(!(typeof b.tbopt===pmglb.b||pmglb.empty(b.tbopt)))pmglb.e.optevd=
b.tbopt,b.tbopt.done=!0}catch(c){pmglb.e.S("FPO - handling tb opt event failed")}};TBOptimization.prototype.fh=function(a){var b=pmglb.k().createElement("iframe");b.setAttribute("width",0);b.setAttribute("height",0);b.setAttribute("tabindex",-1);b.style.display="none";pmglb.k().getElementsByTagName("head")[0].appendChild(b);b.src=_pmep+a};TBOptimization.prototype.Yb=function(a,b){if("js"==b){var c=pmglb.k().createElement("script");c.setAttribute("type","text/javascript");c.setAttribute("src",a)}else"css"==
b&&(c=pmglb.k().createElement("link"),c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",a));"undefined"!==typeof c&&pmglb.k().getElementsByTagName("head")[0].appendChild(c)};TBOptimization.prototype.za=function(a,b){var c=typeof b==pmglb.b?pmglb.k():b,d;if(this.Uc())return null;try{d=document.evaluate(a,c,null,XPathResult.ANY_TYPE,null)}catch(e){this.S("FPO - error finding first element for xpath: "+a)}if(d)return d.iterateNext();this.Ji("FPO - get first element for xpath "+
a+" is returning null");return null};TBOptimization.prototype.la=function(a){if(null!==a){var b=pmglb.k().getElementsByTagName("meta");if(null!=b)for(var c=0;c<b.length;c++)if(b[c]&&b[c].getAttribute("property")&&b[c].getAttribute("property").toLowerCase()==a.toLowerCase())return b[c].content}return null};TBOptimization.prototype.sh=function(a,b,c,d,e,f,g,j){a={i:"w",tp:c,nm:b,c:1,ln:d,lx:e,ly:f,m:a,v:this.wi};typeof g!==pmglb.b&&typeof j!==pmglb.b&&null!=j&&(a=this.Ba(a,j));return a};TBOptimization.prototype.rh=
function(a,b,c){return{i:"w",tp:b,nm:"video",c:c,m:a}};TBOptimization.prototype.Ba=function(a,b){if(typeof a!==pmglb.b&&typeof b!==pmglb.b&&"object"===typeof a)for(var c in b)b.hasOwnProperty(c)&&typeof a[c]!==pmglb.b?this.Ba(a[c],b[c]):a[c]=b[c];return a};TBOptimization.prototype.k=function(){var a=null;if(typeof window._tb_infscrl!==pmglb.b&&window._tb_infscrl&&typeof window._tb_infscrl_doc_path!==pmglb.b&&null!==window._tb_infscrl_doc_path)for(var b=document.evaluate(window._tb_infscrl_doc_path,
document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),c=0;c<b.snapshotLength;c++)0<pmglb.e.Na(b.snapshotItem(c))&&(a=b.snapshotItem(c));null===a&&(a=document);return a};TBOptimization.prototype.Bf=function(a,b,c,d,e,f){this.Jb({J:a,name:b,type:c,z:e,md:f});var g=!1;0<window.location.href.indexOf("emgn.com")&&(g=!0);typeof window._tb_touchevt!=pmglb.b&&!0===window._tb_touchevt?pmglb.e.sa.jc(e,function(a){pmglb.e.R({name:b,type:c,url:d,z:e});g&&typeof e.href!==pmglb.b&&null!==e.href&&(a.preventDefault(),
window.setTimeout(function(){window.location=e.href},75))}):e.addEventListener?e.addEventListener("click",function(a){pmglb.e.R({name:b,type:c,url:d,z:e});g&&typeof e.href!==pmglb.b&&null!==e.href&&(a.preventDefault(),window.setTimeout(function(){window.location=e.href},75))},!1):e.attachEvent&&e.attachEvent("onclick",function(a){pmglb.e.R({name:b,type:c,url:d,z:e});g&&typeof e.href!==pmglb.b&&null!==e.href&&(a.preventDefault(),window.setTimeout(function(){window.location=e.href},75))})};TBOptimization.prototype.di=
function(){if(null===this.mb)this.mb=[],function(a){typeof window._tb_touchevt!=pmglb.b&&!0===window._tb_touchevt&&window.addEventListener("touchend",function(){if(typeof framelist!=pmglb.b)for(var b=0;b<a.length;b++)framelist[b].Ub=!1});window.addEventListener("blur",function(){for(var b=0;b<a.length;b++)!0==a[b].Ub&&a[b].sa()})}(this.mb)};TBOptimization.prototype.Ei=function(a,b){var c={Ub:!1};c.sa=b;if(typeof window._tb_touchevt!=pmglb.b&&!0===window._tb_touchevt)c.element=a;(function(b){typeof window._tb_touchevt!=
pmglb.b&&!0===window._tb_touchevt&&pmglb.e.vc()&&a.addEventListener("mouseenter",function(){b.sa()});a.addEventListener("mouseover",function(){b.Ub=!0});a.addEventListener("mouseout",function(){b.Ub=!1})})(this.mb[this.mb.push(c)-1])};TBOptimization.prototype.Jg=function(){var a=typeof TRC!==pmglb.b?typeof TRC.publisherId!==pmglb.b?!0:!1:!1,b=null;a&&typeof TRC.pageManager!==pmglb.b&&typeof TRC.pageManager.getPublisherValue!==pmglb.b&&(b=TRC.pageManager.getPublisherValue(TRC.publisherId,"session-data"));
if(a&&(null==b||typeof b==pmglb.b))var c=TRC.publisherId+":session-data",b=pmglb.e.Gb.Jc(c);if(null==b||typeof b==pmglb.b)for(c in a=/v[0-9]/,pmglb.e.Gb.od)if(pmglb.e.Gb.od.hasOwnProperty(c)&&-1<c.indexOf(":session-data")&&pmglb.e.Gb.Jc(c).split("_")[0].match(a)){b=pmglb.e.Gb.Jc(c);break}return null==b||typeof b==pmglb.b||2>b.split("_").length?null:b.split("_")[1]};TBOptimization.prototype.Xd=function(){return document.referrer};TBOptimization.prototype.Sa=function(){var a=!1,b=/(Mobi|Android|iPhone|iPad|Windows Phone|Symbian|S40Ovi)/.exec(navigator.userAgent);
null!=b&&null!=b[1]&&(a=!0);return a};TBOptimization.prototype.vc=function(){return this.Sa()};TBOptimization.prototype.Ed=function(){return!1};TBOptimization.prototype.Ic=function(){var a=this.Jg();try{var b=JSON.parse(window.localStorage.getItem("tbx:sref"));if(null!==b)var c=b.s,d=b.r}catch(e){var f=!0}if(null==a)var g="_sessionPending_";else if(f)g="_undefined_";else if(null==b&&typeof c==pmglb.b&&d==pmglb.b||a!==c)try{g=this.Xd()}catch(j){g="_undefined_"}else g=a==c?d:"_undefined_";return g};
this.Wf=function(a,b){var c,d,e;1==pmglb.wa("_tb_u")&&(c=new Date,d=c.getHours(),e=c.getMinutes(),10>e&&(e="0"+e),c=c.getSeconds(),10>c&&(c="0"+c),console.log("["+d+":"+e+":"+c+"]TB ("+(!pmglb.empty(pmdebug_c)&&pmdebug_c[a]?pmdebug_c[a]:a+"").toUpperCase()+"): "+b))}};window.TBOptimization=TBOptimization;_pmk=_pmk||{};window._pmk=_pmk;JSON=window.JSON||{};JSON2=window.Ti||{};if("undefined"===typeof JSON2||null===JSON2||!JSON2)JSON2=JSON;
PMGlobal=function(){function a(b){var b=b||window.event,a=b.origin;try{if(pmglb.Gf==a){var d=JSON.parse(b.data);if(typeof d.ten!==pmglb.Vi&&!pmglb.empty(d.ten)&&"brdy"==d.ten.tnm){pmglb.tracking.addTrackEvent("scBackfillImpression","backfill");pmglb.tracking.runTrackEvent();var e={ten:{tnm:"pdat",pgu:pmglb.K.canonical,pgr:pmglb.ca().referrer,pgh:pmglb.page.Rg}};b.source.postMessage(JSON.stringify(e),"*")}}}catch(f){}}this.tf="20220605.6";this.rf="20000";this.K={};this.Zb="";this.Xi=1;this.f=this.Ja=
null;this.$c=1;this.A=this.ba=this.qd=this.bg=this.page=this.D=null;this.Ab=!1;this.bd=this.Hi=this.ua=null;this.te=this.ld=!1;this.referrer=this.$e=this.geolocation=this.Gi=null;this.ce=this.Sc=!1;this.qc="pmenv";this.nf=null;this.b="undefined";this.pf="string";this.of="#PMD#";this.Ui=":{;{ {.{?{!{,{'{\"{){]{}".split("{");this.Gf="http://widget.perfectmarket.com";this.dd=!1;this.$d=0;if(typeof PMWebservice!==this.b)this.Ja=PMWebservice;if(typeof PMTemplate!==this.b)this.f=PMTemplate;if(typeof PMPage!==
this.b)this.page=PMPage;if(typeof PMDevice!==this.b)this.bg=PMDevice;if(typeof PMFileLoader!==this.b)this.ba=PMFileLoader;this.jd="_tb_sess_r";PMGlobal.prototype.Yb=function(b){pmglb.ba.load(b)};PMGlobal.prototype.loadFile=PMGlobal.prototype.Yb;PMGlobal.prototype.Dh=function(){var b=[];this&&this.te&&b.push("main already started");pmglb.empty(pmglb.f.get())&&(b.push("No Template picked from rotation(s)"),this.Ab||(pmglb.Ee(),pmglb.lc("NoTemplateFound","NoTemplateFound")));return 0<b.length?!0:!1};
PMGlobal.prototype.hh=function(){this.hc("pmglobal-main");if(!this.Dh())this.te=!0,this.Hf(),this.Ja.Kf(),this.Fb("pmglobal-main")};PMGlobal.prototype.main=PMGlobal.prototype.hh;PMGlobal.prototype.w=function(){this.hc("pmglobal-setup");if(!this.ld)null!==this.Ja&&this.Ja.w(),this.bi(),this.ji(),null!==this.Ja&&this.Ja.ik(),pmglb.page.ga(),"undefined"!==typeof _pmoptimization&&_pmoptimization&&this.ec(),this.qi(),this.ki(),this.fi(),this.mi(),this.ag(),this.ld=!0,this.Fb("pmglobal-setup")};PMGlobal.prototype.ag=
function(){var b=this;if(typeof window._tb_infscrl!==pmglb.b&&window._tb_infscrl){window.addEventListener("hashchange",function(){b.Qb(b)},!1);window.addEventListener("popstate",function(){b.Qb(b)},!1);var a=null;if(null!==window.history.state)a=window.history.state.state;this.Md(this,a)}};PMGlobal.prototype.Md=function(b,a){if(null!==window.history.state&&window.history.state.state!==a)a=window.history.state.state,b.Qb(b);else if(pmglb.url().original!==pmglb.k().URL&&window.pageYOffset>this.$d)this.$d=
window.pageYOffset,b.Qb(b);window.setTimeout(function(){b.Md(b,a)},500)};PMGlobal.prototype.Qb=function(b){if(!b.dd){b.dd=!0;var a=b.e.ob("headline");if(b.$f(b,a))b.$c++,pmglb.page.w(),b.Ph(b),"undefined"!==typeof _pmoptimization&&_pmoptimization&&b.ec(),b.Zb=a;b.dd=!1}};PMGlobal.prototype.$f=function(b,a){return a!==b.Zb};PMGlobal.prototype.Ph=function(b){window.tbopt&&window.tbopt.setup&&(window.tbopt.setup=void 0);delete b.e.p;delete b.e.B;delete b.e.Ha;delete b.e.bb;delete b.e.ra;delete b.e.Ib;
b.e.p=[];b.e.B=[];b.e.Ha=[];b.e.bb=[];b.e.ra=[];b.e.Ib={};delete b.e;delete b.optimization;delete window.tbopt;b.e=void 0;b.optimization=void 0;window.tbopt=void 0;if(typeof window.TBWidgetFacebook!==pmglb.b)delete window.TBWidgetFacebook.O,delete window.TBWidgetFacebook.V,window.TBWidgetFacebook.O=[],window.TBWidgetFacebook.V=[];if(typeof window.TBWidgetTwitter!==pmglb.b)delete window.TBWidgetTwitter.O,delete window.TBWidgetTwitter.V,window.TBWidgetTwitter.O=[],window.TBWidgetTwitter.V=[];if(typeof window.TBGenericVideoModule!==
pmglb.b)delete window.TBGenericVideoModule.O,delete window.TBGenericVideoModule.V,delete window.TBGenericVideoModule.I,delete window.TBGenericVideoModule.X,delete window.TBGenericVideoModule.H,window.TBGenericVideoModule.O=[],window.TBGenericVideoModule.V=[],window.TBGenericVideoModule.I=[],window.TBGenericVideoModule.X={iframe:0,object:0,div:0,sb:0},window.TBGenericVideoModule.H=[];if(typeof window.TBWidgetVideoPlayer!==pmglb.b)delete window.TBWidgetVideoPlayer.O,delete window.TBWidgetVideoPlayer.V,
delete window.TBWidgetVideoPlayer.I,delete window.TBWidgetVideoPlayer.X,delete window.TBWidgetVideoPlayer.H,window.TBWidgetVideoPlayer.O=[],window.TBWidgetVideoPlayer.V=[],window.TBWidgetVideoPlayer.I=[],window.TBWidgetVideoPlayer.X={iframe:0,object:0,div:0,sb:0},window.TBWidgetVideoPlayer.H=[];if(typeof window.TBOtherPlayer!==pmglb.b)delete window.TBOtherPlayer.O,delete window.TBOtherPlayer.V,delete window.TBOtherPlayer.I,delete window.TBOtherPlayer.X,delete window.TBOtherPlayer.H,window.TBOtherPlayer.O=
[],window.TBOtherPlayer.V=[],window.TBOtherPlayer.I=[],window.TBOtherPlayer.X={iframe:0,object:0,div:0,sb:0},window.TBOtherPlayer.H=[];if(typeof window.TBKalturaPlayer!==pmglb.b)delete window.TBKalturaPlayer.O,delete window.TBKalturaPlayer.V,delete window.TBKalturaPlayer.I,delete window.TBKalturaPlayer.X,delete window.TBKalturaPlayer.H,window.TBKalturaPlayer.O=[],window.TBKalturaPlayer.V=[],window.TBKalturaPlayer.I=[],window.TBKalturaPlayer.X={iframe:0,object:0,div:0,sb:0},window.TBKalturaPlayer.H=
[]};PMGlobal.prototype.fi=function(){window.postMessage&&(window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a))};PMGlobal.prototype.ki=function(){if(this.Sc)this.referrer=pmglb.ca().referrer};PMGlobal.prototype.qi=function(){if("undefined"!==typeof pmglb.f.g().Rd)this.Sc=pmglb.f.g().Rd;if(this.Sc){var b=pmglb.wa("_tb_ui");if("undefined"===typeof b&&pmglb.empty(b)){pmi=new PMIdentifier;var b=pmi.$e(),a=new Date;a.setMonth(a.getMonth()+
24)}this.$e=b}};PMGlobal.prototype.ji=function(){this.D=new PMPublisher;this.f.w()};PMGlobal.prototype.bi=function(){pmglb.k();var b=["js/javascript-xpath-20120330.js"];if(!pmglb.empty(b)&&(pmglb.$g()||pmglb.Cc()))for(var a=0,d=b.length;a<d;++a)pmglb.Yb(_pmep+"g/"+b[a]);b=["js/javascript-xpath-20120330.js"];if(!pmglb.empty(b)&&pmglb.de()){a=0;for(d=b.length;a<d;++a)pmglb.Yb(_pmep+"g/"+b[a])}};PMGlobal.prototype.Se=function(){var b=""+this.D.dc.name+"PMTracking",b=this.ic(b);null==b&&(b=this.ic("PMTracking"));
if(typeof b!=pmglb.b&&"function"==typeof b){this.A=new b;this.A.w();this.tracking=this.A;b=!1;if(pmglb.f.get()===pmglb.b||!pmglb.empty(pmglb.f.get())&&pmglb.f.get().tc&&0<pmglb.f.get().tc.length)b=!0;!b&&!this.Ab&&pmglb.Ee()}};PMGlobal.prototype.mi=function(){if(!this.ce){var b=!1;if(pmglb.f.get()===pmglb.b||!pmglb.empty(pmglb.f.get())&&pmglb.f.get().tc&&0<pmglb.f.get().tc.length)b=!0;var a="";if(!b){if(pmglb.f.g().Id instanceof Array){a+=pmglb.f.g().Id.join(" ");if(pmglb.tb()||pmglb.ub())pmglb.f.g().Zd&&
pmglb.f.g().Zd instanceof Array&&(a+=pmglb.f.g().Zd.join(" "));pmglb.f.g().Sg instanceof Array&&pmglb.he()&&(a+=pmglb.f.g().Sg.join(" "))}b=pmglb.k().createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:(a=pmglb.k().createTextNode(a),b.appendChild(a));pmglb.k().getElementsByTagName("head")[0].appendChild(b);this.ce=!0}}};PMGlobal.prototype.ec=function(){var b=""+this.D.dc.name+"TBOptimization",b=this.ic(b);null==b&&(b=this.ic("TBOptimization"));this.e=new b;
this.e.ke()?(this.e.w(),this.optimization=this.e):this.e=void 0};PMGlobal.prototype.ai=function(){var b="."+window.location.hostname,a=pmglb.f.g().data.cookieDomain;pmglb.empty(a)||"string"!=typeof a?this.ua="none":(a=b.indexOf(a),trimmedHost=0<a?b.substr(a):b,"."!=trimmedHost[0]&&(trimmedHost="."+trimmedHost),this.ua=trimmedHost)};PMGlobal.prototype.Hf=function(){var b=this.f.A;if(b&&b.N)window.google_analytics_uacct=b.N;if(b&&b.Oc)window.google_analytics_domain_name=b.Oc};PMGlobal.prototype.Ee=
function(){if(!this.Ab){pmglb.Rc()?this.A.be():typeof pmglb.da!==pmglb.b&&pmglb.da.Eb.Jj()?pmglb.da.Eb.external.Ab||(this.A.De(),pmglb.da.Eb.external.gk(!0)):this.A.De();this.Ab=!0;var b=pmglb.wa(pmglb.f.Vf+"_ppg");b&&b===pmglb.k().URL&&(pmglb.tracking.addTrackEvent("pageRefreshed","pageRefreshed"),pmglb.tracking.runTrackEvent());pmglb.Ne(pmglb.k().URL);if((b=this.f.A)&&b.N)window.google_analytics_uacct=b.N;if(b&&b.Oc)window.google_analytics_domain_name=b.Oc}};PMGlobal.prototype.url=u("K");PMGlobal.prototype.url=
PMGlobal.prototype.url;PMGlobal.prototype.li=function(){var b=pmglb.wa(pmglb.jd);pmglb.empty(b)&&""!=b&&pmglb.Ne(pmglb.k().referrer)};PMGlobal.prototype.Ic=function(){return pmglb.wa(pmglb.jd)};PMGlobal.prototype.gh=function(b){var a;if(pmglb.empty(b))return"other";var d=this.f.g();if(this.D&&d&&d.ia&&d.ia.cg&&(a=RegExp(d.ia.cg,"i"),a.test(b)))return"domainHomePage";if(this.D&&d&&d.ia&&d.ia.domainOtherPage&&(a=RegExp(d.ia.domainOtherPage,"i"),a.test(b)))return"domainOtherPage";if(d.referrer&&d.referrer.search){if(a=
RegExp(d.referrer.search[0],"i"),a.test(b))return"search"}else if(null!=b.match(/google\..*/)||null!=b.match(/google\..*\/url/)||null!=b.match(/googlelabs\..*/)||null!=b.match(/yahoo\.com/)||null!=b.match(/msn\.com/)||null!=b.match(/bing\.com/)||null!=b.match(/aol\..*\.com/)||null!=b.match(/ask\.com/))return"search";return"other"};PMGlobal.prototype.oi=function(){var b;b=pmglb.Ic();pmglb.Hi=pmglb.gh(b)};PMGlobal.prototype.Yh=function(){pmglb.Gi="undefined"!=typeof pm_geo&&!pmglb.empty(pm_geo)?pm_geo.toLowerCase():
""};PMGlobal.prototype.lc=function(b,a){typeof pmglb.tracking!=pmglb.b&&(pmglb.tracking.addTrackEvent(b,a,void 0),pmglb.tracking.runTrackEvent())};this.wj=function(){pmglb.page.ga();var b=this.url().href.hostname;this.empty(b)||(b=/.?([^.]+.[^.]+)$/.exec(b),null!=b&&(val=b[1]));return val};this.Ed=function(){return!1};this.Ne=o();this.gg=function(){var b=pmglb.jd;null==pmglb.ua&&pmglb.ai();var a=new Date;a.setTime(a.getTime()+18E5);a="";!pmglb.empty(pmglb.ua)&&"none"!=pmglb.ua&&(a=pmglb.empty(pmglb.ua)?
"":"; domain="+pmglb.ua);return pmglb.k().cookie=b+"=; expires=Mon, 01 Nov 1976 00:00:01 GMT; path=/"+a};this.Ai=function(b){if(pmglb.Zg(b))return b;pmglb.page.ga();var a=pmglb.url().href.protocol+"//",d=pmglb.url().href.host;switch(pmglb.xh(b)){case "home":return a+d+b;case "simple relative":var e=pmglb.url().href.pathname.replace(/\/[^\/]*$/,""),f=b;"."===b[0]&&(f=b.slice(2));return a+d+e+"/"+f;case "relative":return e=pmglb.url().href.pathname.replace(/\/[^\/]*$/,""),f=b.match(/\.\.\//g).length,
e=e.replace(RegExp("(\\/[^\\/]+){"+f+"}$"),""),f=b.slice(3*f),a+d+e+"/"+f}return null};this.Zg=function(b){return/^https?:\/\/.*/.test(b)};this.xh=function(b){return/^\/.*/.test(b)?"home":/^\.\/.*/.test(b)||/^[^\.\/].*/.test(b)?"simple relative":/^\.\.\/.*/.test(b)?"relative":"not a recognized path type"};this.yj=u("tf");this.uj=u("rf");this.Rc=function(){return typeof _pm_backfill!==pmglb.b&&_pm_backfill?_pm_backfill:!1};this.pj=function(b,a){var d,e;d=RegExp("\\b"+b+"\\b");e=pmglb.k().getElementsByTagName(a);
for(var f=0;f<e.length;f++)if(d.test(e[f].className))return e[f];return null};this.za=function(b){return(b=pmglb.k().getElementsByTagName(b))&&b[0]?b[0]:null};this.wa=function(b){var a,d,e,f=pmglb.k().cookie.split(";");for(a=0;a<f.length;a++)if(d=f[a].substr(0,f[a].indexOf("=")),e=f[a].substr(f[a].indexOf("=")+1),d=d.replace(/^\s+|\s+$/g,""),d==b)return unescape(e)};this.fj=o();this.Wf=o();this.Gj=function(b,a,d){b.insertBefore(a,d.nextSibling)};this.ic=function(b){for(var b=b.split("."),a=window||
this,d=0,e=b.length;d<e;d++)a=a[b[d]];return"function"!==typeof a?null:a};this.xj=function(b,a){var b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),d=RegExp("[\\?&]"+b+"=([^&#]*)").exec(a);return null==d?"":d[1]};this.ye=function(b){for(var a=this.ye.options,b=a.ad[a.yi?"strict":"loose"].exec(b),d={},e=14;e--;)d[a.key[e]]=b[e]||"";d[a.cd.name]={};d[a.key[12]].replace(a.cd.ad,function(b,e,j){e&&(d[a.cd.name][e]=j)});return d};this.ye.options={yi:!1,key:"source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","),
cd:{name:"queryKey",ad:/(?:^|&)([^&=]*)=?([^&]*)/g},ad:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};this.Yf=function(b){var a=b instanceof Array?[]:{},d;for(d in b)a[d]=b[d]&&"object"==typeof b[d]?
this.Yf(b[d]):b[d];return a};this.Xj=function(b){return Math.floor(Math.random()*b+1)};this.kk=function(b){for(var a,d,e=b.length;e;a=parseInt(Math.random()*e),d=b[--e],b[e]=b[a],b[a]=d);return b};this.mj=function(){for(var a=document.cookie.split(";"),c={},d=0;d<a.length;d++){var e=a[d].split("=");c[e[0]]=unescape(e[1])}return c};this.Og=function(){var a=pmglb.K.original.split("?")[1],c={};if(!this.empty(a)){a=a.split("&");for(i=0;i<a.length;i++){var d=a[i].split("=");c[d[0]]=d[1]}}return c};PMGlobal.prototype.k=
function(){return document};PMGlobal.prototype.ca=function(){try{return pmglb.page&&typeof pmglb.da!==pmglb.b&&pmglb.da.Eb.le()?(top.document.evaluate="undefined"===typeof top.document.evaluate&&"function"===typeof document.evaluate?document.evaluate:top.document.evaluate,top.document):document}catch(a){return document}};PMGlobal.prototype.Cc=function(){return!pmglb.k()||pmglb.k()&&"undefined"===typeof pmglb.k().evaluate};PMGlobal.prototype.documentEvaluateIsUndefined=PMGlobal.prototype.Cc;PMGlobal.prototype.he=
function(){return pmglb.k()&&7==pmglb.k().documentMode};PMGlobal.prototype.isIE7DocumentMode=PMGlobal.prototype.he;PMGlobal.prototype.tb=function(){var a=this.Tb();return 7<=a&&8>a?!0:!1};PMGlobal.prototype.isIE7=PMGlobal.prototype.tb;PMGlobal.prototype.ub=function(){var a=this.Tb();return 8<=a&&9>a?!0:!1};PMGlobal.prototype.isIE8=PMGlobal.prototype.ub;PMGlobal.prototype.Xb=function(){var a=this.Tb();return 9<=a&&10>a?!0:!1};PMGlobal.prototype.isIE9=PMGlobal.prototype.Xb;PMGlobal.prototype.ge=function(){var a=
navigator.userAgent;return-1!=a.indexOf("Trident")&&-1!=a.indexOf("rv:11")?!0:!1};PMGlobal.prototype.isIE11=PMGlobal.prototype.ge;PMGlobal.prototype.$g=function(){return-1!=this.Tb()?!0:!1};PMGlobal.prototype.Tb=function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var c=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent);null!=c&&null!=c[1]&&(a=parseFloat(c[1]))}else navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(a="11");return a};PMGlobal.prototype.de=function(){var a=
this.ng();return 2<=a&&3>a?!0:!1};PMGlobal.prototype.isAndroid2=PMGlobal.prototype.de;PMGlobal.prototype.dg=o();PMGlobal.prototype.dummyMethod=PMGlobal.prototype.dg;PMGlobal.prototype.ng=function(){var a=-1,c=/Android ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent);null!=c&&null!=c[1]&&(a=parseFloat(c[1]));return a};PMGlobal.prototype.Tg=function(a,c){if(!pmglb.empty(a)){var d=[],e=pmglb.Og();if(!pmglb.ee(e)){pmglb.empty(c)&&(c=[]);!pmglb.empty(e[pmglb.qc])&&-1==pmglb.Pc(pmglb.qc,c)&&c.push(pmglb.qc);
for(i=0;i<c.length;i++)c[i]in e&&(pmglb.empty(e[c[i]])?d.push(c[i]):d.push(c[i]+"="+e[c[i]]))}a=pmglb.Ze(a);pmglb.empty(d)||(a=a+"?"+d.join("&"))}return a};PMGlobal.prototype.Pc=function(a,c){var d,e;e=Array.prototype.indexOf;if(c){if(e)return e.call(c,a,d);e=c.length;for(d=d?0>d?Math.max(0,e+d):d:0;d<e;d++)if(d in c&&c[d]===a)return d}return-1};PMGlobal.prototype.Ki=function(a,c){if(this.Ta(a)){var d=a.split(c,1);if(this.isArray(d)&&d[0])return d[0]}return a};PMGlobal.prototype.empty=function(a){return"undefined"===
typeof a||!a||0===a||void 0==a||null===a||""===a||pmglb.isArray(a)&&0===a.length||pmglb.Ta(a)&&/^\s+$/.test(a)};PMGlobal.prototype.trim=function(a){return a.replace(RegExp("^[\\s]+","g"),"").replace(RegExp("[\\s]+$","g"),"")};PMGlobal.prototype.Ze=function(a){return a.replace(/(\?|#).*$/,"")};PMGlobal.prototype.isArray=function(a){return"[object Array]"===Object.prototype.toString.apply(a)};PMGlobal.prototype.Ta=function(a){return"string"===typeof a};PMGlobal.prototype.fe=function(a){return"[object Object]"===
Object.prototype.toString.apply(a)};PMGlobal.prototype.ee=function(a){if(this.fe(a))for(var c in a)return!1;return!0};PMGlobal.prototype.Ag=function(a){var c=[];if(this.fe(a))for(var d in a)a.hasOwnProperty(d)&&c.push(d);return c};PMGlobal.prototype.ie=function(){return"1"===this.wa("_tb_u")};PMGlobal.prototype.hc=function(a){if(this.ie()){if("undefined"===typeof this.$)this.$={};if("undefined"===typeof this.$[a]||"undefined"===typeof this.$[a].start)this.$[a]={start:this.Yd()}}};PMGlobal.prototype.Fb=
function(a){if(this.ie()){if("undefined"===typeof this.$)this.$={};"undefined"===typeof this.$[a]&&(this.$[a]={});if("undefined"===typeof this.$[a].end)this.$[a].end=this.Yd()}};PMGlobal.prototype.Yd=function(){return"undefined"===typeof window.performance||"undefined"===typeof window.performance.now?(new Date).getTime():Math.round(window.performance.now())};PMGlobal.prototype.je=function(){return pmglb.ba.yd===this.nf?!0:!1};PMGlobal.prototype.bh=function(a){return typeof a===this.b||void 0==a?!0:
!1};PMGlobal.prototype.zh=function(a,c){var d=pmglb.k().getElementById(a);if(d){var e=d.className,e=-1==e.indexOf(c)?e+(" "+c):e.replace(RegExp(" "+c,"i"),"");d.className=e}};PMGlobal.prototype.pmChangeClass=PMGlobal.prototype.zh;window.PMGlobal=PMGlobal};
Object.keys=Object.keys||function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),d=c.length;return function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.keys called on a non-object");var f=[],g;for(g in e)a.call(e,g)&&f.push(g);if(b)for(g=0;g<d;g++)a.call(e,c[g])&&f.push(c[g]);return f}}();
window.pmws_getlocation_done=function(a){pmglb.geolocation=a;pmglb.Ja.Kf()};pmglb=window.Ah||null;pmdebug=window.Wj||null;pmws=window.pmws||null;pmad=window._tb_pmad||null;if(null==pmglb){pmglb=new PMGlobal;window.Ah=pmglb;if(!window.console&&"1"==pmglb.wa("_tb_u"))window.console=new function(){this.log=o();this.dir=o()};pmglb.w()}else if(typeof window._tb_optol!==pmglb.b&&null!==window._tb_optol){var x=window._tb_optol;delete window._tb_optol;x&&pmglb.ec()}var JSON2;JSON2||(JSON2={});
(function(){function a(a){return 10>a?"0"+a:a}function b(a){e.lastIndex=0;return e.test(a)?'"'+a.replace(e,function(a){var b=j[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var e,j,q,v,r=f,p,l=d[a];l&&"object"===typeof l&&"function"===typeof l.td&&(l=l.td());"function"===typeof h&&(l=h.call(d,a,l));switch(typeof l){case "string":return b(l);case "number":return isFinite(l)?""+l:"null";case "boolean":case "null":return""+l;case "object":if(!l)return"null";
f+=g;p=[];if("[object Array]"===Object.prototype.toString.apply(l)){v=l.length;for(e=0;e<v;e+=1)p[e]=c(e,l)||"null";q=0===p.length?"[]":f?"[\n"+f+p.join(",\n"+f)+"\n"+r+"]":"["+p.join(",")+"]";f=r;return q}if(h&&"object"===typeof h){v=h.length;for(e=0;e<v;e+=1)"string"===typeof h[e]&&(j=h[e],(q=c(j,l))&&p.push(b(j)+(f?": ":":")+q))}else for(j in l)Object.prototype.hasOwnProperty.call(l,j)&&(q=c(j,l))&&p.push(b(j)+(f?": ":":")+q);q=0===p.length?"{}":f?"{\n"+f+p.join(",\n"+f)+"\n"+r+"}":"{"+p.join(",")+
"}";f=r;return q}}if("function"!==typeof Date.prototype.td)Date.prototype.td=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null};var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
f,g,j={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;if("function"!==typeof JSON2.stringify)JSON2.stringify=function(a,b,d){var e;g=f="";if("number"===typeof d)for(e=0;e<d;e+=1)g+=" ";else"string"===typeof d&&(g=d);if((h=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON2.stringify");return c("",{"":a})};if("function"!==typeof JSON2.parse)JSON2.parse=function(a,b){function c(a,d){var e,f,g=a[d];if(g&&"object"===
typeof g)for(e in g)Object.prototype.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=f:delete g[e]);return b.call(a,d,g)}var e,a=""+a;d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof b?c({"":e},
""):e;throw new SyntaxError("JSON2.parse");}})();})();
