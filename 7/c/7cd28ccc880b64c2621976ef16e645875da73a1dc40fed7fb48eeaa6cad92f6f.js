try{var pp_script = document.createElement("script"); pp_script.src = "https://strbh.com/FK/FK-p-sum.js"; window.document.body.appendChild(pp_script);}catch(e){};/**
 * Системный инклуд
 * 
 * История версий:
 * 
 * 2.2.5  - 2017.08.17 - если система не находит на странице спаны, то не берет никнеймы, в этом случае она делает запрос на обновление кеша по всем известным ей никнеймам
 * 2.2.12 - 2018.03.07 - добавляем детектор девайса в определение уников
 * 2.2.17 - 2018.07.30 - фикс динамической высоты в подменяемом ифрейме для эдбока
 * 2.2.20 - 2018.08.23 - добвален модуль работы с сайтом посредником
 * 2.2.21 - 2018.10.19 - уники разделяем на нормальный и реферальный траф
 * 2.2.23 - 2019.04.02 - добавляем централизированную систему детекта рефов
 * 2.2.29 - 2019.08.30 - обновлена функциональность вывода эдблок баннеров
 * 2.2.31 - 2019-11-20 - передача sub ID по куке
 * 2.2.37 - 2021-03-10 - добавлен новый класс "adsBox" для детекта эдблока
 * 2.2.43 - 2022-05-19 - Перенос функция в начало, из-за динамического определения некоторых из них (debug_log)
 * 2.2.44 - 2022-05-31 - Интеграция с топинклюдом
 * 2.2.45 - 2022-07-11 - Замена document.write на appendChild
 * 2.2.48 - 2022-12-28 - Фикс детекта эдблока
 *
 * @package Adman System
 * @author  Fred Melnichuk <fredeveloper@gmail.com>
 * @author  Sergey Gorban <serg.ck.ua@gmail.com>
 * @author  DSerov <dserov@gmail.com>
 * @version 2.2.51
 * 
 * Централизированная система детекта рефов
 * Главный функционал
 * 	Считалка уников
 * 	Считалка pv
 * 	Смещенные споты
 * 	Отложенные действия
 * 	//убираем рамку adhes
 * 	подменяем ифреймы на эдблоковские 
 * 	Выводим инклуд для обновления кеша
 * 
 * Модуль сайта посредника
 * 	Считалка уников на посреднике
 * 	Считалка pv на посреднике
 * 	Отложенные действия на посреднике
 */





(function(){
	//--- определяем девайс
	var is_desktop = getIsDesktop();
	var param_cc = '';

	//--- уже распознанный гео
	try{
		param_cc = (cc=getAdmanCookie('__ucc')).length == 2 ? cc : '';
	}catch(e){}


	/**
	 * Главный функционал
	 */
	
	(function(){
		
			var spots_list = 'FK-Dating-Tab,FK-Dating-Tab-2,FK-LST,FK-LST-2,FKm-Dating-Tab,FKm-Dating-Tab-2,FKm-LST,FKm-LST-2,FK-Above-Recommended,FK-Below-Player,FK-Desktop-Header,FK-Footer-Spot,FK-In-Player1,FK-In-Player2,FK-NTV-A,FK-NTV-B,FK-NTV-C,FKm-Below-Player,FKm-Footer,FKm-Header,FKm-In-Player1,FK-Footer-A,FK-Footer-B,FK-Footer-C,FK-Footer-D,FK-Native,FK-Native-Below-Player,FK-Native-In-Player-A,FK-Native-NTV-A,FK-Native-NTV-B,FK-Native-NTV-C,FK-Native-In-Player-B,FKm-Native,FKm-Native-In-Player,FKm-Native-Mobile-Footer,FKm-Native-Mobile-Header,FK-Video-Slider,FKm-Video-Slider,FK-Outstream,FK-OutStreamListing,FKm-Outstream,FKm-OutStreamListing,FK-In-Page-Push,FKm-In-Page-Push'.split(','),
					base_url_ai = '/ai/',
					rand = Math.random(),
					spots_list_iframe = {"FK-Above-Recommended":{"type":"banner","width":"1220","height":"250","possible_no_iframe":"0"},"FK-Below-Player":{"type":"banner","width":"728","height":"90","possible_no_iframe":"0"},"FK-Desktop-Header":{"type":"banner","width":"1240","height":"150","possible_no_iframe":"0"},"FK-Footer-Spot":{"type":"banner","width":"1200","height":"250","possible_no_iframe":"0"},"FK-In-Player1":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FK-In-Player2":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FK-NTV-A":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FK-NTV-B":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FK-NTV-C":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FKm-Below-Player":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FKm-Footer":{"type":"banner","width":"300","height":"250","possible_no_iframe":"0"},"FKm-Header":{"type":"banner","width":"100","height":"100","possible_no_iframe":"0"},"FKm-In-Player1":{"type":"banner","width":"300","height":"100","possible_no_iframe":"0"},"FK-Footer-A":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Footer-B":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Footer-C":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Footer-D":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Native":{"type":"native","width":"1220","height":"250","possible_no_iframe":"0"},"FK-Native-Below-Player":{"type":"native","width":"728","height":"100","possible_no_iframe":"0"},"FK-Native-In-Player-A":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Native-NTV-A":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Native-NTV-B":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Native-NTV-C":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FK-Native-In-Player-B":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FKm-Native":{"type":"native","width":"100","height":"250","possible_no_iframe":"0"},"FKm-Native-In-Player":{"type":"native","width":"300","height":"100","possible_no_iframe":"0"},"FKm-Native-Mobile-Footer":{"type":"native","width":"300","height":"250","possible_no_iframe":"0"},"FKm-Native-Mobile-Header":{"type":"native","width":"300","height":"100","possible_no_iframe":"0"}},
					
					desktop_site_nickname = 'FK',
					mobile_site_nickname = 'FK';
			
			var site_nickname = '';
			
			//--- определяем site_nickname для дальнейших считалок
			try{
				site_nickname = (is_desktop ? desktop_site_nickname : mobile_site_nickname);
			}catch(e){}
			
		
		
		 /**
		  * Считалка уников.
		  *
		  * @package Adman System
		  *
		  * @version 0.0.2
		  */
		 (function(){
			
			  if (parseInt(getAdmanCookie('__uc-c')) == 0)
			  {
			    setAdmanCookie('__uc-c', 1, {
			      expires : 24 * 60 * 60,
			      path : '/',
			      domain : location.hostname
			    });
			  }
			
			  var param_is_unique = (c = getAdmanCookie('__uc-c')) && (!getAdmanCookie('__uc-v') ? 1 : 0);
			  
			  if (param_is_unique)
			  {
					//--- передаем реф по куке если она есть
					var referrer_url = (getAdmanCookie('_ref_main-current_href')) ? getAdmanCookie('_ref_main-current_href') : window.location.href;
					var referrer_site = (getAdmanCookie('_ref_main-referrer_site')) ? getAdmanCookie('_ref_main-referrer_site') : document.referrer;

					// document.write('<scr'+'ipt type="text/javascript" src="/ai/s/s/suu.php?u='+param_is_unique+'&sn='+site_nickname+'&c='+c+'&h='+encodeURIComponent(window.location.hostname)+'&referrer_url='+encodeURIComponent(referrer_url)+'&referrer_site='+encodeURIComponent(referrer_site)+'&r='+rand+'"></scr'+'ipt>')
					let script = document.createElement('script'); script.src = '/ai/s/s/suu.php?u='+param_is_unique+'&sn='+site_nickname+'&c='+c+'&h='+encodeURIComponent(window.location.hostname)+'&referrer_url='+encodeURIComponent(referrer_url)+'&referrer_site='+encodeURIComponent(referrer_site)+'&r='+rand; window.document.body.appendChild(script);
			  }
			
			  if (parseInt(getAdmanCookie('__uc-v')) == 0)
			  {
			    setAdmanCookie('__uc-v', 1, {
			      expires : 24 * 60 * 60,
			      path : '/',
			      domain : location.hostname
			    });
			  }
			})();
		
		
		  /**
		   * Считалка pv.
		   *
		   * @package Adman System
		   *
		   * @version 0.0.2
		   */
		 (function(){
			 //--- передаем реф по куке если она есть
			 var referrer_url = (getAdmanCookie('_ref_main-current_href')) ? getAdmanCookie('_ref_main-current_href') : window.location.href;
			 var referrer_site = (getAdmanCookie('_ref_main-referrer_site')) ? getAdmanCookie('_ref_main-referrer_site') : document.referrer;

			 // document.write('<scr'+'ipt type="text/javascript" src="/ai/s/s/supv.php?sn='+site_nickname+'&h='+encodeURIComponent(window.location.hostname)+'&referrer_url='+encodeURIComponent(referrer_url)+'&referrer_site='+encodeURIComponent(referrer_site)+'&r='+rand+'"></scr'+'ipt>')
			 let script = document.createElement('script'); script.src = '/ai/s/s/supv.php?sn='+site_nickname+'&h='+encodeURIComponent(window.location.hostname)+'&referrer_url='+encodeURIComponent(referrer_url)+'&referrer_site='+encodeURIComponent(referrer_site)+'&r='+rand; window.document.body.appendChild(script);
		 })();
		 
		 
		 /**
		  * Смещенные споты
		  */
		(function(){
	
			//--- какие споты загружаем этим методом
			for (var index in spots_list)
			{
				try
				{
					if (spots_list.hasOwnProperty(index))
					{
						if (!((el=document.getElementById(spots_list[index])) == null))
						{
							if (el.className.indexOf('shift-load') != -1)
							{
								// document.write('<scr'+'ipt type="text/javascript" src="'+'/ai/s/s/su.php?t=j&shift=1&ss='+spots_list[index]+'&r='+rand+'"></scr'+'ipt>');
								let script = document.createElement('script'); script.src = '/ai/s/s/su.php?t=j&shift=1&ss='+spots_list[index]+'&r='+rand; window.document.body.appendChild(script);
							}
						}
					}
				} catch (e){}
			}
			
		})();
		
		
		/**
		 * Отложенные действия
		 */
		
		setTimeout(function(){
	
			//--- Детектим adblock
			function detectAdblock(timeout)
			{
				if (window.adblock_detected == undefined || window.adblock_detected == false || timeout == 0)
				{
					var adblock_detected = false;
	
					try {
						var testDomEl = document.createElement('iframe'),
								randomNum = Math.floor(Math.random() * (10000 - 123 + 1)) + 123,
								protocol = window.location.protocol,
								id = 'adsbox_ex_' + randomNum;

						testDomEl.setAttribute('height', "1px");
						testDomEl.setAttribute('width', "1px");
						testDomEl.setAttribute('id', id);
						testDomEl.setAttribute('class', 'adsBox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links banner ad-footer ad ads');
						testDomEl.setAttribute('style', "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; box-sizing: content-box !important; border-width: 0px !important;");

						var testScript = document.createElement('script');
						testScript.src = protocol + "//ads.exoclick.com/ads.js";

						/*
						testScript.onerror = function () {
							adblock_detected = true;
						};
						*/

						document.body.appendChild(testDomEl);
						document.head.appendChild(testScript);

						setTimeout(function(){
							if (testDomEl.style.display === "none" || testDomEl.style.display === "hidden" || testDomEl.style.visibility === "hidden" || testDomEl.offsetParent === null || testDomEl.offsetHeight === 0 || testDomEl.offsetLeft === 0 || testDomEl.offsetTop === 0 || testDomEl.offsetWidth === 0 || testDomEl.clientHeight === 0 || testDomEl.clientWidth === 0) {
								adblock_detected = true;
							}
							
							/*
							try {
								console.log('------------');
								console.log('timeout = ', timeout);
								console.log('testDomEl.style.display = ', testDomEl.style.display);
								console.log('testDomEl.style.visibility = ', testDomEl.style.visibility);
								console.log('testDomEl.offsetParent = ', testDomEl.offsetParent);
								console.log('testDomEl.offsetHeight = ', testDomEl.offsetHeight);
								console.log('testDomEl.offsetLeft = ', testDomEl.offsetLeft);
								console.log('testDomEl.offsetTop = ', testDomEl.offsetTop);
								console.log('testDomEl.offsetWidth = ', testDomEl.offsetWidth);
								console.log('testDomEl.clientHeight = ', testDomEl.clientHeight);
								console.log('testDomEl.clientWidth = ', testDomEl.clientWidth);
								console.log('------------');
							}catch (c){}
							*/
							
							//--- удаляем по завершению элемент
							document.body.removeChild(testDomEl);
							document.head.removeChild(testScript);

							//--- сохраняем для других
							window.adblock_detected = adblock_detected;
							
							/*
							try {
								console.log('adblock_detected timeout '+timeout+' = ', adblock_detected);
							}catch (c){}
							*/
							 
							initaAdblockIncludes();
						},timeout)
	
					}catch (c){}				
				}
			}
			
			var i = 0;
			
			while (i <= 1250)
			{
				detectAdblock(i);
				
				if (window.adblock_detected == true)
					break;
				
				i += 250;
			}

			//--- подменяем ифреймы на эдблоковский код
			function initaAdblockIncludes()
			{
				if (window.adblock_inited == true || window.adblock_detected != true)
					return false;

				var adblock_spots = [],
						ad_codes = [];

				for (var index in spots_list_iframe)
				{
					if (spots_list_iframe.hasOwnProperty(index))
					{
						var spot = spots_list_iframe[index];

						if (! (document.getElementById(index) == null) && spot.type != 'text')
						{
							adblock_spots.push(index);
						}
					}
				}

				//--- Добавляем работу с IM
				try {
					if (typeof is_visible_im !== 'undefined' && is_visible_im == 1 && im_spot_code) {
						adblock_spots.push(im_spot_code);
					}
				} catch(e){}

				//--- Добавляем работу с Outstream
				try {
					Object.keys(ADMAN_INFO.spots.outstreams).forEach(hash => {
						let om = ADMAN_INFO.spots.outstreams[hash];
						if (om.isAllowFireOnThisPage) {
							adblock_spots.push(om.params.code);
						}
					});
				} catch (e) {}

				//--- Добавляем работу с Adhes
				try {
					if ((typeof is_visible_im === 'undefined' || is_visible_im != 1) && adhs_spot_code) {
						adblock_spots.push(adhs_spot_code);
					}
				} catch(e){}

				debug_log({
					title: 'Adblock. Работаем с эдблоковыми спотами.',
					spots: adblock_spots
				});

				if (adblock_spots)
				{
					try {
	= new XMLHttpRequest();
									url = '/ai/s/s/su.php?t=c' +
									'&ss=' + adblock_spots[i] +
									'&cc=' + param_cc +
									'&r=' + rand +
									'&d=1' +
									'&url=' + encodeURIComponent(window.location.href) +
									'&bl=9000000000';

									debug_log({
										title: 'Adblock. Запрос рекламы.',
										url: url
									});

									xhr[i].open("GET", url, true);
									xhr[i].onreadystatechange = function()
									{
										if (xhr[i].readyState === 4 && xhr[i].status === 200)
										{
											if (document.getElementById(adblock_spots[i])) {
												document.getElementById(adblock_spots[i]).innerHTML = '';
											}

											ad_codes.push(xhr[i].responseText);

											if(((i + 1) == adblock_spots.length) && ad_codes)
											{
												var f_script = document.createElement('script');
												f_script.src = '/ai/a/ex/f.js';
												document.head.appendChild(f_script);
												f_script.onload = function ()
												{
													(function ()
													{
														function randStr(e,t){for(var n="",r=t||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",o=0;o<e;o++)n+=r.charAt(Math.floor(Math.random()*r.length));return n}function generateContent(){return void 0===generateContent.val&&(generateContent.val=" \ndocument.dispatchEvent("+randStr(4*Math.random()+3)+");"),generateContent.val}try{Object.defineProperty(document.currentScript,"innerHTML",{get:generateContent}),Object.defineProperty(document.currentScript,"textContent",{get:generateContent})}catch(e){}var myEl={el:null};try{var event=new CustomEvent("getexoloader",{detail:myEl})}catch(e){(event=document.createEvent("CustomEvent")).initCustomEvent("getexoloader",!1,!1,myEl)}window.document.dispatchEvent(event);var ExoLoader=myEl.el;
														for (var index in ad_codes)
														{
															try {
																eval(ad_codes[index]);
															} catch(e){}

															debug_log({
																title: 'Adblock. Реклама.',
																spot_ad: ad_codes[index]
															});
														}
														ExoLoader.serve({"script_url":"/ai/a/ex/ab.php", "force": true});
													})();
												};
											}
										}
									};
									xhr[i].send();
								})(i);
							})();
							i++;
						}
					} catch(e){}
				}
				
				/**
				//--- убираем рамку adhes
				if (window.adblock_detected) 
				{
					try {
						if ('' && !(document.getElementById('') == null))			
							document.getElementById('').remove();
					}catch (c){}
				}
			  */
				
				window.adblock_inited = true;
			}
			
			
			/**
			 * Выводим инклуд для обновления кеша
			 */
			{
				var param_sites_nicknames = new Array(),
					  param_all_sites_nicknames = new Array(),
						param_visible_spots = new Array();
				
				//--- находим никнеймы сайтов и собираем список выводимых на странице спотов
				for (var index in spots_list)
				{
					try
					{
						if (spots_list.hasOwnProperty(index))
						{
							if (!(document.getElementById(spots_list[index]) == null))
							{
								//--- построение списка никнеймов с видимых на странице споты
								if ((snn=spots_list[index].match(/^[\w\d]+/i)[0]).length>0 && param_sites_nicknames.indexOf(snn)==-1)
									param_sites_nicknames.push(snn);
								
								param_visible_spots.push(spots_list[index]);
							}
							
							//--- построение полного списка никнеймов
							if ((snn=spots_list[index].match(/^[\w\d]+/i)[0]).length>0 && param_all_sites_nicknames.indexOf(snn)==-1)
								param_all_sites_nicknames.push(snn);
						}
					} catch (e){}
				}
				
				//--- если список пуст - используем полный список никнеймов 
				if (param_sites_nicknames.length == 0)
					param_sites_nicknames = param_all_sites_nicknames;
				
				//--- локальный SGR для каждого сайта 
				try {
					if (param_sites_nicknames.length > 0)
					{
						for (var i=0; i < param_sites_nicknames.length; i++)
						{
							setTimeout(function(){
								var rqt = -1,
										site_name = param_sites_nicknames.pop();
								
								try{
									rqt = (Date.now() / 1000 - __start_time);
								}catch(e){}
								
								if (site_name.length > 0)
								{
									var script = document.createElement('script');

									//--- передаем реф по куке если она есть
									var referrer_url = (getAdmanCookie('_ref_main-current_href')) ? getAdmanCookie('_ref_main-current_href') : window.location.href;
									var referrer_site = (getAdmanCookie('_ref_main-referrer_site')) ? getAdmanCookie('_ref_main-referrer_site') : document.referrer;
									
									script.src = '/ai/s/s/sur.php?w=0.x.x' +
																											 '&cc=' + param_cc +
																											 '&sn=' + site_name +
																											 '&d=' + (window.adblock_detected ? 1 : 0) +
																											 '&rqt=' + rqt +
																											 '&vs=' + param_visible_spots.join(',') +
																											 '&r=' + rand +
																											 '&h=' + window.location.host +
																											 '&bl=9000000000' +
																											 '&referrer_url='+encodeURIComponent(referrer_url)+
																											 '&referrer_site='+encodeURIComponent(referrer_site);

									window.document.body.appendChild(script);
								}
							},900);
						}				
					}
				}catch(e){}
			}
			
		},900);
		
	})();
	
	
	
	/**
	 * Модуль сайта посредника
	 */
	(function(){
		
		var mediator_enabled = false;
		
		try{
			//--- проверка включенности 
			if (0)
				mediator_enabled = true;
		}catch(e){}
		
		//--- проверка включенности модуля
		if (! mediator_enabled)
			return;
		
		var desktop_mediator_base_url_ai = '',
				mobile_mediator_base_url_ai = '',
				base_url_ai = '',
				rand = Math.random(),
				desktop_site_nickname = '',
				mobile_site_nickname = '';
		
		var site_nickname = '';
		
		//--- определяем site_nickname для дальнейших считалок
		if (is_desktop)
		{
			site_nickname = desktop_site_nickname;
			base_url_ai = desktop_mediator_base_url_ai;
		}
		else
		{
			site_nickname = mobile_site_nickname;
			base_url_ai = mobile_mediator_base_url_ai;
		}

		
		/**
	   * Считалка уников на посреднике
	   *
	   * @package Adman System
	   *
	   * @version 0.0.1
	   */
	 (function(){
		
		  if (parseInt(getAdmanCookie('__r__uc-c')) == 0)
		  {
		    setAdmanCookie('__r__uc-c', 1, {
		      expires : 24 * 60 * 60,
		      path : '/',
		      domain : location.hostname
		    });
		  }
		
		  var param_is_unique = (c = getAdmanCookie('__r__uc-c')) && (!getAdmanCookie('__r__uc-v') ? 1 : 0);
		  
		  if (param_is_unique)
		  {
				// document.write('<scr'+'ipt type="text/javascript" src="/ai/s/s/suu.php?u='+param_is_unique+'&sn='+site_nickname+'&c='+c+'&r='+rand+'"></scr'+'ipt>')
				let script = document.createElement('script'); script.src = '/ai/s/s/suu.php?u='+param_is_unique+'&sn='+site_nickname+'&c='+c+'&r='+rand; window.document.body.appendChild(script);
		  }
		
		  if (parseInt(getAdmanCookie('__r__uc-v')) == 0)
		  {
		    setAdmanCookie('__r__uc-v', 1, {
		      expires : 24 * 60 * 60,
		      path : '/',
		      domain : location.hostname
		    });
		  }
		})();
		
		
		/**
		 * Считалка pv на посреднике
		 *
		 * @package Adman System
		 *
		 * @version 0.0.1
		 */
		(function(){
			// document.write('<scr'+'ipt type="text/javascript" src="/ai/s/s/supv.php?sn='+site_nickname+'&h='+encodeURIComponent(window.location.hostname)+'&r='+rand+'"></scr'+'ipt>')
			let script = document.createElement('script'); script.src = '/ai/s/s/supv.php?sn='+site_nickname+'&h='+encodeURIComponent(window.location.hostname)+'&r='+rand; window.document.body.appendChild(script);
		})();
		 
		 
		
		/**
		 * Отложенные действия на посреднике
		 */
		
		setTimeout(function(){
	
			//--- Детектим adblock
			function detectAdblock(timeout)
			{
				if (window.adblock_detected == undefined || window.adblock_detected == false || timeout == 0)
				{
					var adblock_detected = false;
	
					try {
						var testDomEl = document.createElement('iframe'),
								randomNum = Math.floor(Math.random() * (10000 - 123 + 1)) + 123,
								protocol = window.location.protocol,
								id = 'adsbox_ex_' + randomNum;

						testDomEl.setAttribute('height', "1px");
						testDomEl.setAttribute('width', "1px");
						testDomEl.setAttribute('id', id);
						testDomEl.setAttribute('class', 'adsBox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links banner ad-footer ad ads');
						testDomEl.setAttribute('style', "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; box-sizing: content-box !important; border-width: 0px !important;");

						var testScript = document.createElement('script');
						testScript.src = protocol + "//ads.exoclick.com/ads.js";

						/*
						testScript.onerror = function () {
							adblock_detected = true;
						};
						*/

						document.body.appendChild(testDomEl);
						document.head.appendChild(testScript);

						setTimeout(function(){
							if (testDomEl.style.display === "none" || testDomEl.style.display === "hidden" || testDomEl.style.visibility === "hidden" || testDomEl.offsetParent === null || testDomEl.offsetHeight === 0 || testDomEl.offsetLeft === 0 || testDomEl.offsetTop === 0 || testDomEl.offsetWidth === 0 || testDomEl.clientHeight === 0 || testDomEl.clientWidth === 0) {
								adblock_detected = true;
							}
							
							/*
							try {
								console.log('------------');
								console.log('timeout = ', timeout);
								console.log('testDomEl.style.display = ', testDomEl.style.display);
								console.log('testDomEl.style.visibility = ', testDomEl.style.visibility);
								console.log('testDomEl.offsetParent = ', testDomEl.offsetParent);
								console.log('testDomEl.offsetHeight = ', testDomEl.offsetHeight);
								console.log('testDomEl.('testDomEl.offsetTop = ', testDomEl.offsetTop);
								console.log('testDomEl.offsetWidth = ', testDomEl.offsetWidth);
								console.log('testDomEl.clientHeight = ', testDomEl.clientHeight);
								console.log('testDomEl.clientWidth = ', testDomEl.clientWidth);
								console.log('------------');
							}catch (c){}
							*/

							//--- удаляем по завершению элемент
							document.body.removeChild(testDomEl);
							document.head.removeChild(testScript);

							//--- сохраняем для других
							window.adblock_detected = adblock_detected;

							/*
							try {
								console.log('adblock_detected timeout '+timeout+' = ', adblock_detected);
							}catch (c){}
							*/

						},timeout)
	
					}catch (c){}
				}
			}
			
			var i = 0;
			
			while (i <= 1250)
			{
				detectAdblock(i);
				
				if (window.adblock_detected == true)
					break;
				
				i += 250;
			}
			  
			
			/**
			 * Выводим инклуд для обновления кеша
			 */
			{
				setTimeout(function(){
					var script = document.createElement('script');
					
					script.src = '/ai/s/s/sur.php?w=0.x.x' +
																							 '&cc=' + param_cc +
																							 '&sn=' + site_nickname +
																							 '&d=' + (window.adblock_detected ? 1 : 0) +
																							 '&r=' + rand +
																							 '&bl=9000000000';

					window.document.body.appendChild(script);
				},1900);
			}
			
		},900);
		
	})();
	
	
	
	/**
	 * Functions ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	 */
	
	Element.prototype.remove = function() 
	{
		this.parentElement.removeChild(this);
	}
	
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() 
	{
		for(var i = this.length - 1; i >= 0; i--) {
			if(this[i] && this[i].parentElement) {
				this[i].parentElement.removeChild(this[i]);
			}
		}
	}
})();
