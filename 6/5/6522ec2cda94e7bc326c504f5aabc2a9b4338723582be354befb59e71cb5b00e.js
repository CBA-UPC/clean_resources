importScripts('https://www.rmfclassic.pl/work/push/client/js/sw-rmf-push.js?aasasaaas'); design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);

var lib_elements = {
	get_doc_height : function() {
		var D = document;
		return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight,D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
	},
	init : function() {
		if ($('.show-onload').length) $('.show-onload').show();
		if ($('[data-toggle="popover"]').length) $('[data-toggle="popover"]').popover()

		//if ($('#psidebar').length > 0 && window.innerWidth > 1355 && lib_elements.get_doc_height() > 1400) $("#psidebar").sticky({topSpacing:10,className:"sticky",bottomSpacing:630});


		if ($('.gallery').length > 0) lib_gallery.init();
		if ($('img.rmap[usemap]').length > 0) $('img.rmap[usemap]').rwdImageMaps();
		lib_upload.init();
		if($("a[rel^='zoom-img-gallery'],a[rel^='zoom-img-photo']").length > 0) {
			$.each($("a[rel^='zoom-img-gallery'],a[rel^='zoom-img-photo']"), function() {
				if ($(this).attr('href').substr(0,1) == '#') {
					$(this).attr('rel', '');
					$(this).addClass('zoom-text').on('click', function() {
						lib_modal.open_modal('normal', $(this).attr('title'), '<div class="modal-inner-content">'+$($(this).attr('href')).html()+'</div>'); 
						return false;
					});
				}
			});
			

		}
		if ($('.more-area').length > 0) {
			$('.more-area a').on('click',function() { $('.hide-element',$($(this).parents('.more-container'))).show(); $($(this).parents('.more-area')).hide(); return false;});
		}
		lib_abp.init();
	}
};



var lib_abp = {
	init: function() {
		setTimeout(function() { lib_abp.check() }, 17000);
	},
	check: function() {
		
		var code_adp = '<a href="/aplikacje-mobilne#utm_source=maxxx_page&utm_medium=page_'+_c+'&utm_campaign=ln_abd_maxxx" onclick="lib_stat.event_register(\'Inne\', \'Akcja\', \'AdBlockSpaceClick\');"><img src="/assets-22/images/banner-app.jpg" onload="lib_stat.event_register(\'Inne\', \'Akcja\', \'AdBlockSpace\');"></a>';
		
		if (parseInt($('#RMF_MAXXX_podstrony_prawy_half').height()) == 0) {
			$('#RMF_MAXXX_podstrony_prawy_half').append(code_adp);	
		}
		if (parseInt($('#RMF_MAXXX_sg_prawy_half').height()) == 0) {
			$('#RMF_MAXXX_sg_prawy_half').append(code_adp);	
		}
		if(parseInt($('#RMF_MAXXX_sg_bill').height()) == 0 || parseInt($('#RMF_MAXXX_sg_top_bill').height()) == 0 || parseInt($('#RMF_MAXXX_podstrony_top_bill').height()) == 0) {
			//$('.medium-billboard, .header-billboard').hide();
		}
	}
};


var lib_stat = {
	event_register: function(group, action, value) {
		if (typeof(_gaq) == 'undefined') { } else { _gaq.push(['b._trackEvent', group, action, value]); }
	}
};

var DEFAULT_PREVIEW = '<img src="/assets-22/images/place-300x300.jpg" class="img-circle" width="100%">';
var lib_upload = {
	init: function() {

		if (document.querySelectorAll('.file-input').length > 0) {
			var s = document.getElementsByTagName('script')[0];
			var fi = document.createElement('script');
			fi.type = 'text/javascript';
			fi.async = true;
			fi.src = '/assets-22/scripts/other/fileinput.pack.js';
			fi.onload = lib_upload.render_elements;
			
			s.parentNode.insertBefore(fi, s);

			var cs = document.createElement('link');
			cs.rel = 'stylesheet';
			cs.href = '/assets-22/css/plugins/fileinput.css';
			s.parentNode.insertBefore(cs, s);
		}

	},
	render_elements: function() {
		$.each($('.file-input'), function(index) {

			element_id = ($(this).attr('id') != undefined) ? (this).attr('id') : 'upload_'+index;
			element_name = $(this).attr('name');

			$(this).attr('name', 'uploader_'+element_name);
			
			cl = $(this).clone();
			cl.attr('name', element_name).attr('type', 'text').attr('tabindex', '-100000').attr('style', 'width: 1px; height: 1px; overflow: hidden;background: transparent; border: 0px solid transparent;')
			cl.insertAfter($(this));

			$(this).removeAttr('required');
			
			var uploaderOptions = {
					uploadUrl: '/pliki/dodaj',
					uploadExtraData: {'send': 'true', 'input_key': 'uploader_'+element_name, 'container_id': element_id, 'meta[initTime]':  $(this).attr('data-meta-initTime'), 'meta[rules]':  $(this).data('meta-rules'), 'meta[token]':  $(this).data('meta-token') },
			        uploadAsync: true,
			        showPreview: false,
					showCaption: true,
			        elErrorContainer: '#cf-'+element_id+' .c-info',
			        fileActionSettings: {'showZoom': false, 'showDrag': false, 'showUpload': true, 'showRemove': false},
					language: 'pl',
					maxFileCount: 1, 
					autoReplace: true,
					maxFileSize: 100200,
					fileSizeGetter: function(bytes) {
						var i = Math.floor(Math.log(bytes) / Math.log(1024)),
				        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
						return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
					},
					
					initialPreviewAsData: true,
					initialCaption: '<span class="opacity-50">Wybierz plik z dysku</span>',
					defaultPreviewContent: '<div class="img-fit br-2 opacity-50 shl"><img src="/assets-22/images/place-350x200.gif" width="100%"></div>',
					layoutTemplates: {
						    main1: '<div class="row" id="cf-'+element_id+'"><div class="col-12">\n' +
					        '\n' +
					        '<div class="input-group {class}">\n' +
					        '   {caption}\n' +
					        '   <div class="input-group-btn">\n' +
					        '       {browse}\n' +
					        '   </div>\n' +
					        '</div><div class="kv-upload-progress hide"></div><div class="c-info form-text small cc"></div><div class="c-success form-text cc"></div></div></div>',
					    
					    preview: 
					        '    <div class="file-preview-thumbnails">\n' +
					        '    </div>\n',

					    icon: '<span class="icon-file"></span>',
					    caption: '<input readonly class="file-caption-name form-control {class}">',
					    btnDefault: '<button type="{type}" tabindex="500" title="{title}" class="{css}"{status}>{icon}{label}</button>',
					    btnLink: '<a href="{href}" tabindex="500" title="{title}" class="{css}"{status}>{icon}{label}</a>',
					    btnBrowse: '<div tabindex="500" class="{css}"{status}><span class="icon-attachment icon-before">{label}</span></div>',
					    modalMain: '',
					    modal: '',
					    progress: '<div class="progress file-progress-form">\n' +
					        '    <div class="progress-bar progress-bar-success progress-bar-striped text-center" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n' +
					        '        {percent}%\n' +
					        '     </div>\n' +
					        '</div>',
					    footer: '<div class="file-thumbnail-footer">\n' +
					        '</div>',
					    actions: '<div class="file-actions">\n' +
					        '    <div class="file-footer-buttons">\n' +
					        '        {upload} {delete} {zoom} {other}' +
					        '    </div>\n' +
					        '    {drag}\n' +
					        '    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n' +
					        '    <div class="clearfix"></div>\n' +
					        '</div>',
					    actionDelete: '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}"{dataUrl}{dataKey}>{removeIcon}</button>\n',
					    actionUpload: '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>\n',
					    actionZoom: '',
					    actionDrag: ''
					 
					},
					previewTemplates: {
					    generic: '<div class="file-preview-frame" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}">\n' +
					        '   {content}\n' +
					        '   {footer}\n' +
					        '</div>\n',
					    image: '<div class="th-prev img-fit br-2 shl"><img src="{data}" class="kv-preview-data file-preview-image" title="{caption}" alt="{caption}" width="100%" style="height: auto;" ></div>\n',
					    text: '',
					    html: '',
					    video: '<div class="th-prev img-fit br-2 shl"><video class="kv-preview-data" width="100%" controls><source src="{data}" type="{type}"></video></div>',
					    audio: '',
					    other: ''
					}

				};
			

			
			if ($(this).data('exts') != undefined) {
				var arrAllowedExts = $(this).data('exts');
				if (arrAllowedExts && arrAllowedExts.length) {
					uploaderOptions.allowedFileExtensions = arrAllowedExts;
				}
			}
			
			if ($(this).data('types') != undefined) {
				var arrAllowedTypes = $(this).data('types');
				if (arrAllowedTypes && arrAllowedTypes.length) {
					uploaderOptions.allowedFileTypes = arrAllowedTypes;
				}
			}

			$(this).attr('id', element_id).fileinput(uploaderOptions).on('fileselect', function(event, numFiles, label) {
				$('.c-success', $($(this).parents('.file-input'))).hide();


				setTimeout(function() {
					$(event.target).fileinput('upload').fileinput('disable');
				},1000)
			    
			}).on('fileuploaderror', function(event) {
				$('.c-info', $($(this).parents('.file-input'))).addClass('text-danger').removeClass('text-success');

				$('input[name='+element_name+']').val('').focus();
				$('.kv-upload-progress', $($(this).parents('.file-input'))).addClass('d-none');
			}).on('fileuploaded', function(event, data, previewId, index) {
				$('.c-info', $($(this).parents('.file-input'))).removeClass('text-danger').addClass('text-success');

			    var form = data.form, files = data.files, extra = data.extra,
		        response = data.response, reader = data.reader;
			    element_name = response.field;
			    $('.kv-upload-progress', $($(this).parents('.file-input'))).addClass('d-none');
			    //$('.c-success', $($(this).parents('.file-input'))).show().html('<ul class="rul"><li>'+response.msg+'</li></ul>');
			    $('input[name='+element_name+']').val(response.fileData.url);
			    //$($('input[name='+element_name+']').parents('.service-form')).bootstrapValidator('revalidateField', element_name);
			    $('input[name='+element_name+']').trigger('change');

				setTimeout(function() {
					$(event.target).fileinput('enable');
				},1000)
			});
		});
	}
};

var lib_gallery = {
	init : function() {
		$('.gallery').lightGallery({download: false,hash: false,selector: '.zoom-photo',exThumbImage: 'data-exthumbimage'});
	}
};


var mph_options = {
	ready: function () {
		lib_player.bind_elements();
	},
	timeupdate: function(event) {
		if (parseInt(event.jPlayer.status.currentPercentAbsolute, 10) > 99.99) {
			$('.snd-play.snd-playing').removeClass('snd-playing');
		}
	},
	ended: function(event) {
		if (snd_play_on_finish != false) {
			$('#mph').jPlayer("setMedia", { mp3: snd_play_on_finish });
			$('#mph').jPlayer("play", 0);
			$('.ad-pel').removeClass('ad-pel').attr('title', 'Posłuchaj').attr('data-original-title', 'Posłuchaj').tooltip('show');
			snd_play_on_finish = false;
		} else {
			$('.snd-play.playing').removeClass('playing');
		}
	},
	setmedia: function(event) {
	},
	loadstart: function(event) {
		$('.snd-play.snd-playing').removeClass('snd-playing').addClass('wait');
	},
	play: function(event) {
		//$(this).parents()
		setTimeout(function(){
			$('.snd-play.wait').removeClass('wait').addClass('playing');
			if ($('.jp-playlist-current').attr('id').match('snd-item')) {
				snd_id = $('.jp-playlist-current').attr('id').replace('snd-item-', '');
				$.getJSON('/dzwieki/dane/' + snd_id, function( data ) {
					lib_stat.event_register('Podcasty', 'Odtwarzanie', data.grupa_nazwa + ' ('+data.grupa_id+'): '+data.dzwiek_nazwa+ ' ('+data.dzwiek_id+')' );
				});
			}
		}, 100);
	},
	swfPath: '/assets-16/swf/',
	supplied: "mp3",
	wmode: "window",
	smoothPlayBar: true,
	keyEnabled: true,
	remainingDuration: true,
	toggleDuration: true
};


var bumperAdsManager;
var bumperAdsLoader;
var bumperAdDisplayContainer;
var bumperVideoContent;
var bumperRemainingTimeInterval;
var bumperFinishCallback;
var bumperIsActive = false;
var bumperPlayingElement;

var lib_ad_bumper = {
	init: function(playingElement, finishCallback) {
		var b = document.getElementsByTagName("script")[0]; 
		
		var bd = document.createElement("div"); 
		bd.innerHTML = '<video id="bumperAdElement"><source src="//gruul.rmf.pl/mp4/2sek.mp4"></source></video><div id="bumperAdContainer"></div>';
		bd.setAttribute('style', 'width: 1px; height: 1px; overflow: hidden;position: absolute; left: -1px;top: -1px;');
		b.parentNode.insertBefore(bd, b);
	
		var a = document.createElement("script"); 
		a.type = "text/javascript"; 
		a.async = !0; 
		a.src='//imasdk.googleapis.com/js/sdkloader/ima3.js';
		a.onload = function () { lib_ad_bumper.setup_ima(); }
		a.onerror = function() { lib_ad_bumper.complete_ad(); }
		
		b.parentNode.insertBefore(a, b);

		bumperFinishCallback = finishCallback;
		bumperPlayingElement = playingElement;
	},
	setup_ima: function() {
		bumperVideoContent = document.getElementById('bumperAdElement');

		bumperAdDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById('bumperAdContainer'), bumperVideoContent);
		
		bumperAdsLoader = new google.ima.AdsLoader(bumperAdDisplayContainer);
		bumperAdsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, lib_ad_bumper.on_ads_manager_loaded, false);
		bumperAdsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, lib_ad_bumper.on_ad_error, false);

		var contentEndedListener = function() {bumperAdsLoader.contentComplete();};
		bumperVideoContent.onended = contentEndedListener;


		var adsRequest = new google.ima.AdsRequest();
		adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/119818256/RMF_MAXXX_audio_bumper&description_url=%5bplaceholder%5d&tfcd=0&npa=0&ad_type=audio&sz=1x1&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=xxx ';

		adsRequest.linearAdSlotWidth = 1;
		adsRequest.linearAdSlotHeight = 1;

		adsRequest.nonLinearAdSlotWidth = 1;
		adsRequest.nonLinearAdSlotHeight = 1;

		bumperAdsLoader.requestAds(adsRequest);
	},
	on_ads_manager_loaded: function(adsManagerLoadedEvent) {
	
		var adsRenderingSettings = new google.ima.AdsRenderingSettings();
		adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

		bumperAdsManager = adsManagerLoadedEvent.getAdsManager(bumperVideoContent, adsRenderingSettings);

		bumperAdsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, lib_ad_bumper.on_ad_error);
		bumperAdsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, lib_ad_bumper.on_ad_event);

		bumperAdsManager.addEventListener(google.ima.AdEvent.Type.LOADED, lib_ad_bumper.on_ad_event);
		bumperAdsManager.addEventListener(google.ima.AdEvent.Type.STARTED, lib_ad_bumper.on_ad_event);
		bumperAdsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, lib_ad_bumper.on_ad_event);
		  
		lib_ad_bumper.play_ads();
	},
	play_ads: function() {
	  bumperVideoContent.load();
	  bumperAdDisplayContainer.initialize();

	  try {
		bumperAdsManager.init(1, 1, google.ima.ViewMode.NORMAL);
		bumperAdsManager.start();
	  } catch (adError) {
		bumperVideoContent.play();
	  }
	},
	on_ad_event: function(adEvent) {
	  var ad = adEvent.getAd();
	  switch (adEvent.type) {
		case google.ima.AdEvent.Type.LOADED:
		  if (!ad.isLinear()) {
			bumperVideoContent.play();
		  }
		  break;
		case google.ima.AdEvent.Type.STARTED:
		  break;
		case google.ima.AdEvent.Type.COMPLETE:
		  break;
	  }

	  clearInterval(bumperRemainingTimeInterval);

	  if (adEvent.type == 'start') {
		lib_ad_bumper.set_remain_time(parseInt(bumperAdsManager.getRemainingTime()));
		bumperRemainingTimeInterval = setInterval(function() { lib_ad_bumper.set_remain_time(parseInt(bumperAdsManager.getRemainingTime())); }, 300);
		bumperIsActive = true;

		bumperPlayingElement.addClass('ad-pel').attr('data-original-title', 'Reklama <span class="bumperRemainTime"></span>').tooltip('show');

	  }
	  if (adEvent.type == 'allAdsCompleted') { 
		clearTimeout(bumperRemainingTimeInterval);
		lib_ad_bumper.complete_ad();
		bumperIsActive = false;
	  }
	},
	set_remain_time: function(ls) {
		$('.bumperRemainTime').html(' <span style="color: silver;">- '+ls+' s.</span> ');
	},
	stop_ad: function() {
		clearInterval(bumperRemainingTimeInterval);
		lib_ad_bumper.destroy_ad_player();
		$('ad-pel').attr('data-original-title', 'Posłuchaj').tooltip('show');
	},
	on_ad_error: function(adErrorEvent) {
		clearInterval(bumperRemainingTimeInterval);
		lib_ad_bumper.destroy_ad_player();
		lib_ad_bumper.complete_ad();
	},
	complete_ad: function() {
		bumperFinishCallback();
	},
	destroy_ad_player: function() {
		if (typeof bumperAdsManager != "undefined") bumperAdsManager.destroy();
	}
};


var arr_playlist_instance = arr_playlist_instance || [];
var snd_play_on_finish = ad_audio_status = false;
var lib_player = {
	init: function() {
		if ($('.snd-play,.multiplayer-container').length) lib_player.rebuild();
		if ($('.multiplayer-container').length) lib_player.rebuild_playlist();
	},	
	rebuild_playlist: function() {
		$.each($('.multiplayer-container'), function() {
			lib_player.init_playlist($(this));
		});
		$('.snd-category-load').on('click', function() {
			$('a.active', $(this).parents('ul')).removeClass('active');
			$(this).addClass('active');
			lib_player.load_sound_list($(this));
			return false;
		});
	},
	load_sound_list: function(el) {
		var playlist_id = $(el).data('playlist-id');
		$('#playlist-'+playlist_id+' .jp-playlist ul').html('<li class="wait-box-li"><div class="wait-box">Pobieranie danych...</div></li><li class="hidden-lg hidden-md hidden-sm hidden-xs">&nbsp;</li>');
		$.getJSON("/dzwieki/grupa-json/" + $(el).attr('data-category-id')+"/v/2", function( jsonData ) {
			$('#playlist-'+playlist_id+' .wait-box-li').remove();
			arr_playlist_instance['playlist-'+playlist_id+''].setPlaylist(jsonData);
      
      if (jsonData && jsonData.length > 0) {
        var mh = jsonData.length*49;
        if (mh > 299) mh = 299;
        $('#playlist-'+playlist_id+' .mp-snd-list').css('height', mh);
        
      }
      
      
      if (autoplay_onload && autoplay_onload == true) {
        setTimeout(function() {
          $('#playlist-'+playlist_id+' .jp-play').trigger('click');
        }, 800);
        
        autoplay_onload = false;
      }

      
		});
	},
	init_playlist: function(el) {
		var playlist_id = $(el).attr('id');
    $( "#mph-" + playlist_id).jPlayer();
		arr_playlist_instance[''+playlist_id+''] = new jPlayerPlaylist({
			jPlayer: "#mph-" + $(el).attr('id'),
			cssSelectorAncestor: "#" + $(el).attr('id')
		}, arr_playlist[$(el).data('playlist-id')], mph_options);
    

    
		if ($(el).data('autoplay-id') && parseInt($(el).data('autoplay-id')) > 0) {
			setTimeout(function() {
				$('#snd-item-'+parseInt($(el).data('autoplay-id'))+' a.pitem').trigger('click');
			}, 500);
		}
	},
	rebuild: function() {
		$('#mph').jPlayer("destroy");
		$('#mph').jPlayer(mph_options);
	},
	bind_elements: function() {
		$('.snd-play').on('click', function() {
			lib_player.play_sound($(this).attr('data-sound'), $(this));
			if ($(this).hasClass('snd-extend')) {
				extend_player_id = 'sss';
				if ($('.snd-area.active-snd').length > 0) {
					$.each($('.snd-area.active-snd'), function() {
						$(this).removeClass('active-snd');
						$('.extend-player-element', $(this)).remove();
					});
				}
				if ($('.snd-control', $(this).parents('.snd-area')).length == 0) {
					$($(this).parents('.snd-area')).append('<div class="col-md-1 col-xs-1 extend-player-element">&nbsp;</div><div class="col-md-11 col-xs-11 extend-player-element"><div class="snd-control" id="'+extend_player_id+'"><span class="jp-seek-bar"><span class="jp-play-bar"></span></span></div></div>');
				}
				$($(this).parents('.snd-area')).addClass('active-snd');
				$('#mph').jPlayer({ cssSelectorAncestor: '#' + extend_player_id }); 
			}
			
			return false;
		});
		if ($('.snd-autoplay').length > 0) {
			$('.snd-autoplay').click();
		}
	},
	check_ad: function() {
		if (Cookies.get('_bumper_maxxx') == undefined) {
			Cookies.set('_bumper_maxxx', 'yes', {expires: (1/24/60)*15, path: '/'});
			return true;
		} else {
			return false;
		}
		/*
		return true;
		if (typeof window.adAudioBeforeHook != "undefined") {
			if (Cookies.set('snd_ad_' + window.adAudioBeforeHook.ad_snd_id) != 'yes') {
				if (document.location.href.match('google_preview')) {
				} else { Cookies.set('snd_ad_' + window.adAudioBeforeHook.ad_snd_id, 'yes', {expires: 1, path: '/'}); }
				return {
					'ad_snd': window.adAudioBeforeHook.ad_snd,
					'ad_snd_id': window.adAudioBeforeHook.ad_snd_id,
					'ad_snd_impression': window.adAudioBeforeHook.ad_snd_impression,
          'ad_snd_impression_external': window.adAudioBeforeHook.ad_snd_impression_external
				};
			} else {
				return false;
			}
		} else {
			return false;
		}
		*/
	},
	play_sound: function(path, el) {
		o_path = path;
		if (path.substr(0,1) == '/') {}
		else if (!path.match('http:') && !path.match('https:')) { path = 'https://doc.rmf.pl/media/hooki/' + path; }

		if ($(el).hasClass('playing') || $(el).hasClass('wait')) {

			if (bumperIsActive == true) {
				lib_ad_bumper.stop_ad();
			} else {
				$('#mph').jPlayer("stop", 0);
			}

			
			$(el).removeClass('playing').removeClass('wait');
		} else {
			ad_audio_status = lib_player.check_ad();
			if (ad_audio_status != false) {
				/*
				$('#mph').jPlayer("setMedia", { mp3: ad_audio_status.ad_snd });
				$('#mph').jPlayer("play", 0);
				
				
				
				
				
				
				// Track impression ad
				var i = new Image(1,1);
				i.src = ad_audio_status.ad_snd_impression;  
				
				if (typeof ad_audio_status.ad_snd_impression_external != 'undefined' && ad_audio_status.ad_snd_impression_external.length > 1) {
						var ie = new Image(1,1);
				ie.src = ad_audio_status.ad_snd_impression_external;  
				}
						
				snd_play_on_finish = path;
				*/
				$('#mph').jPlayer("stop", 0);
				

				lib_ad_bumper.init($(el), function() {
					lib_stat.event_register('ReklamaDzwiekowa', 'Odtwarzanie', 'Tak');
					$(el).removeClass('ad-pel').attr('title', 'Posłuchaj').attr('data-original-title', 'Posłuchaj').tooltip('show');
					$('#mph').jPlayer("setMedia", { mp3: path });
					$('#mph').jPlayer("play", 0);
				});
				
			} else {
				$(el).removeClass('ad-pel').attr('title', 'Posłuchaj').attr('data-original-title', 'Posłuchaj').tooltip('show');
				$('#mph').jPlayer("setMedia", { mp3: path });
				$('#mph').jPlayer("play", 0);
			}
			
			$('.snd-play.playing,.snd-play.wait').removeClass('playing').removeClass('wait');
			$(el).addClass('wait');
			
			lib_stat.event_register('Dzwieki', 'Odtwarzanie', o_path);
		}
	}
};

var share_title = share_description = '';
var lib_share = {
	action: function(element_url) {
		lib_stat.event_register('Share', _c, element_url);
		element_url = 'http://www.rmfmaxxx.pl'+element_url;
    /*<div class="arrow-box cl-f db mb-0">Udostępniany element</div><div class=" shl share-details br-2 mb-1 pd-1"><div class="wait-box">Pobieranie danych ...</div></div><br /> */
		share_code = '<div class="arrow-box cl-e db ">Wybierz serwis</div><br /><div class="socials-bar"><div class="container-fluid"><div class="row">' +
			'<div class="col-xs-3 col-md-3" align="center"><a href="#" onclick="return lib_share.fb(\''+element_url+'\');" target="_blank" class="si" style="margin: auto;float: none;"><span class="spr-icons-sprite spr-icons-facebook" style="margin: auto;">&nbsp;</span></a></div>' +
			'<div class="col-xs-3 col-md-3" align="center"><a href="#" onclick="return lib_share.twitter(\''+element_url+'\');" target="_blank" class="si" style="margin: auto;float: none;"><span class="spr-icons-sprite spr-icons-twitter" style="margin: auto;">&nbsp;</span></a></div>' +
			'<div class="col-xs-3 col-md-3" align="center"><a href="#" onclick="return lib_share.gplus(\''+element_url+'\');" target="_blank" class="si" style="margin: auto;float: none;"><span class="spr-icons-sprite spr-icons-gplus" style="margin: auto;">&nbsp;</span></a></div>' +
			'<div class="col-xs-3 col-md-3" align="center"><a href="#"  onclick="return lib_share.wykop(\''+element_url+'\');" target="_blank" class="si" style="margin: auto;float: none;"><span class="spr-icons-sprite spr-icons-wykop" style="margin: auto;">&nbsp;</span></a></div>' +
			'</div></div></div>';
		lib_modal.open_modal('normal', 'Udostępnij', share_code);
		FB.api('/v2.1/?id='+element_url, function(info) {
			share_title = info.og_object.title; share_description = info.og_object.description;
			$('.share-details .wait-box').hide();
			$('.share-details').html('<b>'+info.og_object.title+'</b><div color="gray" class="fw-300 tov">'+info.og_object.description+'</div>');
		});
		return false;
	},
	open_window: function(window_url) {
		window.open(window_url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	},
	fb: function(element_url) {
		FB.ui({method: 'share',href: element_url,}, function(response){});
		return false;
	},
	twitter: function(element_url) {
		share_url = 'http://twitter.com/share?url=' + escape(element_url);
		lib_share.open_window(share_url);
		return false;
	},
	gplus: function(element_url) {
		share_url = 'https://plus.google.com/share?url=' + escape(element_url)
		lib_share.open_window(share_url);
		return false;
	},
	blogger: function(element_url) {
		share_url = 'https://www.blogger.com/blog-this.g?t='+escape(share_description)+'&n='+escape(share_title)+'&u=' + escape(element_url)
		lib_share.open_window(share_url);
		return false;
	},
	wykop: function(element_url) {
		share_url = 'http://www.wykop.pl/dodaj/link/?url=' + escape(element_url)+'&title='+escape(share_title)+'&desc='+escape(share_description);
		lib_share.open_window(share_url);
		return false;
	}
};

var lib_pm = {
	init: function() {
		if ($('.e-plusminus').length > 0) {
			$('.e-plusminus').show();
			$('.e-plusminus a').on('click', function() {
				k = $(this).hasClass('icon-thumb') ? 'plus' : 'minus';
			
				$(this).addClass('plmn').addClass('wait');
	          	lib_pm.vote(k, $(this).parents('.e-plusminus').attr('id'), $(this).parents('.e-plusminus').attr('data-id'), $(this).parents('.e-plusminus').attr('data-type'));  
				return false;      
        	});
		}
    },
    vote: function(m, cid, id, et) {
		$('#'+cid).animate({opacity: .7}, 10);      
		$.post('/plus-minus/glosuj', { t: m, eid: id, et: et }, function(r) {
	      	json = $.parseJSON(r);
	      	$('#pm-'+json.et+'-'+json.ei).animate({opacity: 1}, 400);
	       	$('#pm-'+json.et+'-'+json.ei+' .pbar .in').animate({width: json.pr+'%'}, 400);
	       	$('#pm-'+json.et+'-'+json.ei+' .v-plus').html(json.gp);
	       	$('#pm-'+json.et+'-'+json.ei+' .v-minus').html(json.gm);
	       	$('.plmn.wait').removeClass('plmn').removeClass('wait');
	       	
	       	if (parseInt(json.st) == 1) {
				lib_toast.show('success', 'Głos został poprawnie oddany.<br />Dziękujemy!');
	       	}
	       	if (parseInt(json.st) == -2) {
				lib_toast.show('warning', 'Wcześniej już głosowano na ten element.');
	       	}
		});
	}
};  

var lib_toast = {
	show: function(t, body) {
		toastElement = document.createElement('div');
		toastElement.setAttribute('class', 'toast-container position-fixed bottom-0 end-0 p-3');
		toastId = 'toast-'+Math.floor(Math.random() * 1000000);

		toastElement.innerHTML = `
			<div id="toast-${toastId}" class="toast align-items-center text-bg-${t} border-0" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="d-flex">
					<div class="toast-body">
						${body}
					</div>
					<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
			</div>
		`;
		document.getElementsByTagName('body')[0].appendChild(toastElement);
		const toast = new bootstrap.Toast(document.getElementById('toast-' + toastId))
		toast.show()
	}
};

/*
var lib_form = {
	init: function() {
		if ($('form.service-form').length > 0){
			lib_form.bind_elements();
		}
	},
	bind_elements: function() {
                                              
    $('form.service-form').on('focus click hover', function() {
       $('.show-on-focus-form.hidden', $(this)).removeClass('hidden').addClass('visible');
    });
    
		$.each($('form.service-form'), function(el) {
			$(this).bootstrapValidator({
		        message: 'This value is not valid',
		        container: 'popover',
		        feedbackIcons: {
		            valid: 'glyphicon valid-ok',
		            invalid: 'glyphicon valid-err',
		            validating: 'glyphicon glyphicon-refresh'
		        }
		    }).on('success.form.bv', function(e) {
            e.preventDefault();
			$('.info-form-general', $(e.target)).remove();
			$('.form-options', $(e.target)).removeClass('has-error');
			$('.form-options', $(e.target)).prepend('<small class="help-block info-form-general">Trwa przesyłanie danych. Proszę czekać ...</small>');

            var $form = $(e.target);
            var bv = $form.data('bootstrapValidator');

            $('.form-group.has-error').removeClass('has-error');
            $.post($form.attr('action'), $form.serialize(), function(result) {
            	$('.info-form-general', $(e.target)).remove();
                if (result.status == false) {
                	if (result.generalInformations && result.generalInformations.length > 0) {
                		$('.form-options', $(e.target)).addClass('has-error').prepend('<small class="help-block info-form-general">'+result.generalInformations+'</small>');
                	}
                	if (result.invalidItems && result.invalidItems.length > 0) {
                		$.each(result.invalidItems, function(p) {
                			$($('input[name="'+this.item+'"],textarea[name="'+this.item+'"],select[name="'+this.item+'"]', $(e.target)).parents('.form-group')).addClass('has-error');
                		});
                	}
                }
                
                if (result.status == true) {
                	if (result.statusText && result.statusText.length > 0) {
                		$(e.target).html('<div class="form-success">'+result.statusText+'</div>');
                	} else {
                		$(e.target).html('<div class="form-success">Formularz został poprawnie wysłany.<br />Dziękujemy.</div>');
                	}
                }
                

                if (result.callback && result.callback.length > 0) {
                	eval(result.callback);
                }
                
				if ($(e.target).attr('data-callback') && $(e.target).attr('data-callback') != undefined) {
					eval($(e.target).attr('data-callback')+'()');
				}

            }, 'json') .fail(function() {
            	$('.info-form-general', $(e.target)).remove();
				$('.form-options', $(e.target)).addClass('has-error').prepend('<small class="help-block info-form-general">Wystąpił nieznany błąd - powtórz operację.</small>');
			});
        });
		});
	}
};
*/

var lib_form = {
	init: function() {
		if ($('form.service-form').length > 0){
			lib_form.bind_forms();

			$('form.service-form').on('focus click hover', function() {
				$('.show-on-focus-form.hidden', $(this)).removeClass('hidden').addClass('visible');
			 });

			 $('form.service-form input, form.service-form texarea, form.service-form select').on('focus click hover', function() {
				$('.show-on-focus-form.hidden', $(this).parents('.service-form')).removeClass('hidden').addClass('visible');
			 });
		}
	},
	bind_forms: function() {
		
		Array.from(document.querySelectorAll('form.service-form')).map(function(f) {
			lib_form.bind_form(f);
		});

	},
	bind_form: function (form) {
		form.onsubmit = function(event) {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
				
				errorText = 'Sprawdź poprawność wypełnienia poszczególnych pól formularza.';
				if (form.querySelector('input.file-input:invalid') && form.querySelectorAll(':invalid').length == 1) {
					errorText = 'Dodaj w formularzu wymagany plik.'
				}

				$('.info-form-general', form).remove();
				$('.form-options', form).prepend('<small class="help-block info-form-general text-danger">'+errorText+'</small>');
		

			} else {
				lib_form.submit_form(form, event);
			}

			form.classList.add('was-validated')
			return false;
		};
	},
	submit_form: function(form, e) {
		e.preventDefault();
		$('.info-form-general', $(e.target)).remove();
		$('.form-options', $(e.target)).removeClass('has-error');
		$('.form-options', $(e.target)).prepend('<small class="help-block info-form-general text-muted">Trwa przesyłanie danych. Proszę czekać ...</small>');

		var $form = $(e.target);

		$('.form-group.has-error').removeClass('has-error');
		$.post($form.attr('action'), $form.serialize(), function(result) {
			$('.info-form-general', $(e.target)).remove();
			if (result.status == false) {
				if (result.generalInformations && result.generalInformations.length > 0) {
					$('.form-options', $(e.target)).addClass('text-danger').prepend('<small class="help-block info-form-general">'+result.generalInformations+'</small>');
				}
				if (result.invalidItems && result.invalidItems.length > 0) {
					Array.from(result.invalidItems).map(function(iv) { 
						if ((ive = e.target.querySelector('*[name="' + iv.item + '"]')) != null) {
							ive.setCustomValidity("Wartość jest nieprawidłowa lub niedozwolona.");
							ive.onchange = function(ivec) {
								this.setCustomValidity("");
							}
						}
					});
					e.target.reportValidity();
				}
			}
			
			if (result.status == true) {
				if (result.statusText && result.statusText.length > 0) {
					$(e.target).html('<div class="form-success">'+result.statusText+'</div>');
				} else {
					$(e.target).html('<div class="form-success">Formularz został poprawnie wysłany.<br />Dziękujemy.</div>');
				}
			}
			

			if (result.callback && result.callback.length > 0) {
				eval(result.callback);
			}
			
			if ($(e.target).attr('data-callback') && $(e.target).attr('data-callback') != undefined) {
				eval($(e.target).attr('data-callback')+'()');
			}

		}, 'json') .fail(function() {
			$('.info-form-general', $(e.target)).remove();
			$('.form-options', $(e.target)).addClass('has-error').prepend('<small class="help-block info-form-general text-danger">Wystąpił nieznany błąd - powtórz operację.</small>');
		});
	}
};


var lib_hb = {
	init: function() {
		if ($('.hb-vote').length > 0) {
			$('.hb-vote').on('click', function() {
				lib_stat.event_register('Inne', 'Akcja', 'DialogHB');
				lib_modal.open_frame('normal', 'Głosuj na listę Hop Bęc', '/hopbec/glosowanie/uid/'+$(this).attr('data-uid')+'/nid/'+$(this).attr('data-nid')+'/k/'+$(this).attr('data-type')+'/s/'+$(this).attr('data-source'));
				return false;
			});
		}
	}
};

var lib_modal = {
	set_type: function(type) {
		if (type == 'full') $('#modal-layer .modal-dialog').addClass('modal-xl').removeClass('modal-normal');
		else $('#modal-layer  .modal-dialog').removeClass('modal-xl').addClass('modal-normal');
	},	
	open_frame: function(type, title, url) {
		lib_modal.set_type(type);
		$('#modal-layer').modal('show');
		$('#modal-layer .modal-title').removeClass('animated fadeInLeft').text(title).addClass('animated fadeInLeft');
		$('#modal-layer .modal-body').html('<div class="wait-box" id="frame-wait">Trwa wczytywanie. Proszę czekać...</div><iframe src="'+url+'"  border="0" frameborder="0" scrolling="auto" onload="$(this).show();$(\'#frame-wait\').hide();" style="display: none;" width="100%" height="650" id="modal-frame" class="s-scrollbars"></iframe>');
		$('#modal-frame').onload = function() { };	
	},
	open_modal: function(type, title, content) {
		lib_modal.set_type(type);
		$('#modal-layer').modal('show');
		$('#modal-layer .modal-title').removeClass('animated fadeInLeft').text(title).addClass('animated fadeInLeft');
		$('#modal-layer .modal-body').html(content);
		setTimeout(function() {
			if ($('.modal-inner-content').height() > window.innerHeight-150) {
				$('.modal-inner-content').jScrollPane({autoReinitialise: true}).css('height', window.innerHeight-150).css('paddingRight', '32px');
			}
		}, 500);
		$('#modal-frame').onload = function() {};	
	},
	close: function() {
		$('#modal-layer').modal('hide');
	}
};

var location_redirect = null;
var location_id = null;
var new_locations_map = [[36,[36]],[7,[7]],[3,[3,24]],[35,[35]],[38,[13,38,15,41,42,14]],[2,[2]],[32,[32]],[8,[8,39]],[25,[25,26,27]],[20,[30,20]],[28,[28,34]],[4,[4]],[19,[19]],[29,[29,5]],[9,[9,17,10,23,11,22,31]],[12,[12]],[6,[6]],[18,[18]],[16,[16]],[37,[37]],[21,[21]]];
var lib_location = {
	init: function() {
		$('.select-location,.sl').on('click', function() {
			
			lib_stat.event_register('Inne', 'Akcja', 'DialogLokalizacja');
			
			if ($(this).hasClass('sl') && (Cookies.get('lokalizacja') != undefined || parseInt(Cookies.get('lokalizacja')) > 1)){
				return true;
			}
			lib_location.create_layer();
			$('#location-layer-container a.active').removeClass('active');
			//$('#location-layer-container a[data-location-id=6]').addClass('active');
			lib_modal.open_modal('full', 'Wybierz lokalizację', $('#location-layer-container').html());
			if ($(this).attr('href') != '#') location_redirect = $(this).attr('href');
			else location_redirect = null;
			
			$('a.lms').on('click', function() {
				lib_location.set_location($(this).data('location-id'));
				lib_modal.close();
				$('a.lms').off('click');
				return false;
			});
			return false;
		});
		
		/*
		if (typeof _location == 'string' && _location == 'brak-lokalizacji' && typeof locations == 'object' && _mobile == true && (document.location.pathname == '/' || document.location.pathname == '/konkursy')) {
			
			if (Cookies.get('location_dialog') != 'yes') {
				lib_location.detect_location();
				Cookies.set('location_dialog', 'yes', {expires: 365, path: '/'});
			}
		}*/

		if (Cookies.get('lokalizacja') != undefined) {
			location_id = parseInt(Cookies.get('lokalizacja'));
			nl = lib_location.map_new_location(location_id);

			if (location_id != nl) {
				Cookies.set('lokalizacja', nl, {expires: 365*2, path: '/'});
				location_id = nl;
			}
		} else {
			location_id = 1;
		}

		if ($('#footer-address')) {
			$('#footer-address').attr('data-script', '/js-data/footer-contact?location=' + location_id).removeClass('lazyloaded').addClass('lazyload');
		}
		if ($('#ramowka-content')) {
			$('#ramowka-content').attr('data-script', '/js-data/ramowka?location=' + location_id).removeClass('lazyloaded').addClass('lazyload');
		}
	},
	map_new_location: function(location_id) {
		Array.from(new_locations_map).map(function(l) {
			if (l[1].includes(location_id)) { 
				location_id = l[0];
			}
		});

		return location_id;
	},
	detect_location: function() {
		$('.lmo').html('Pobieranie danych o lokalizacji ...');
		  if(navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
				
		    	location_detect = lib_location.find_near_location(position.coords.latitude, position.coords.longitude);

		    	if (location_detect.i && location_detect.i > 0) {
		    		$('.lmo').html('Wykryto lokalizację: ' + location_detect.n);
		    		$('.dialog-locations .rli.active').removeClass('active');
		    		$('.dialog-locations .lok-' + location_detect.i+' .rli').addClass('active');
		    		lib_location.set_location(location_detect.i);
		    	}
		    }, function() {
		    });
		  } else {
		  }


	},
	find_near_location: function(lat, lon) {
		min_distance = 9999999;
		c_location = k_location = 99999;
		$.each(locations, function(i,l) {
			dst = lib_location.distance(lat,lon, l.g[0], l.g[1]);

			if (dst < min_distance) {
				min_distance = dst;
				c_location = l.id;
				k_location = l;
			}
		});
		return k_location;
	},
	get_location_data: function(location_id) {
		var ans = null;
		if (locations != undefined) {
			$.each(locations, function() {
				if (this.i == location_id) ans = {'i': this.i, 'n': this.n, 'c': this.c, 'g' :this.g};
			});
		}
		return ans;
	},
	set_location: function(l_id) {
		location_id = l_id;
		
		location_data = lib_location.get_location_data(l_id);
		if (location_data != null) {
			//$('.select-location').html('<span class="exist-location"><strong>'+location_data.n+'</strong><span> - '+location_data.c+'</span></span>')
			Cookies.set('lokalizacja', l_id, {expires: 365*2, path: '/'});
			lib_stat.event_register('Inne', 'Lokalizacja', l_id);
			
			
			/*
			$('.location-el').animate({opacity: 0.2}, 200);
			*/
			if (location_redirect != null) { document.location.href = location_redirect; }
			else { /* document.location.reload(); */ }

			if (typeof _fd != undefined) {
				lib_fd.change_location();

				if ($('#footer-address')) {
					var s = document.getElementsByTagName('script')[0];
					var fi = document.createElement('script');
					fi.type = 'text/javascript';
					fi.async = true;
					fi.src = '/js-data/footer-contact?location=' + location_id;
					s.parentNode.insertBefore(fi, s);
				}
				if ($('#ramowka-content')) {
					$('#ramowka-content').attr('data-script', '/js-data/ramowka?location=' + location_id).removeClass('lazyloaded').addClass('lazyload');
				}

			}
		}
	},
	create_layer: function() {
		var layer_code = '';
		if (locations != undefined && $('#location-layer').length == 0) {
			layer_code += '<div id="location-layer-container" style="display: none;"><div class="crp location-layer"><div class="row crp gx-3 gy-2">';
			$.each(locations, function() {
				if (this.i != 1) layer_code += '<div class="col-md-3 col-xs-12"><a href="#" class="lms ea br-2 small btn btn-sm btn-light w-100 my-1 text-start p-2 px-2" data-location-id="'+this.i+'"><span class="float-end opacity-50">'+this.c+'</span><b>'+this.n+'</b></a></div>';
			})
			layer_code += '</div></div></div>';
			$(layer_code).insertBefore('#modal-layer');
		}
	},
	distance: function(lat1,lon1,lat2,lon2) {
		var R = 6371;
		var dLat = lib_location.deg2rad(lat2-lat1);
		var dLon = lib_location.deg2rad(lon2-lon1); 
		var a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(lib_location.deg2rad(lat1)) * Math.cos(lib_location.deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  	var d = R * c; 
	  	var miles = d / 1.609344; 
	  	return d; 
	},
	deg2rad: function(deg) {
		return deg * (Math.PI/180);
	}
};

var lib_search = {
	init: function() {
		$('.init-search').on('click', function() {
			lib_search.show_search();
			return false;
		});
	},
	show_search: function() {
		lib_modal.open_modal('full', 'Wyszukaj w serwisie', '<gcse:search enableAutoComplete="true"></gcse:search>');
		  (function() {
			    var cx = 'partner-pub-2247338764816491:2979912345';
			    var gcse = document.createElement('script');
			    gcse.type = 'text/javascript';
			    gcse.async = true;
			    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
			    var s = document.getElementsByTagName('script')[0];
			    s.parentNode.insertBefore(gcse, s);
			  })();
		  
		 lib_stat.event_register('Inne', 'Akcja', 'DialogSzukaj');
	}
}


var autoplay_onload = false;
var lib_main_podcasts = {
    init: function() {
        $('.lpg').on('click', function() {
            autoplay_onload = true;
            $('.podcast-expand').show();
            $('.podcast-expand .snd-category-load').attr('data-category-id', $(this).data('category-id')).trigger('click');
            return false;
        });
    }
};

var lib_ads = {
	init: function() {
		if ($('#RMF_MAXXX_podstrony_prawy_half').length && typeof googletag == 'object') {
			var lh = $('#clp').height(); 
			var rh = $('#crp-content').height(); 
			if ($('#RMF_MAXXX_podstrony_navibox_rec').length) rh += 250;
			var dh = lh-rh;
			if (dh>-220 && lh > rh) {
				var adsizes = dh>130 ? [[336, 280], [300, 250], [300, 600]] : [[300, 250]];
				googletag.cmd.push(function() {
					//googletag.defineSlot(adb_get_slot_id(usesABPflag, 'podstrony_prawy_half', '/119818256/RMF_MAXXX_podstrony_prawy_half'), adb_get_sizes(usesABPflag, 'podstrony_prawy_half', adsizes), 'RMF_MAXXX_podstrony_prawy_half').addService(googletag.pubads()).setTargeting("resolution", screen.width);
					googletag.enableServices();
					//googletag.display('RMF_MAXXX_podstrony_prawy_half');
				});
			} else {
				$('#RMF_MAXXX_podstrony_prawy_half').hide();
			}
		}
	},
	ad_label: function() {
		$('#RMF_MAXXX_sg_top_bill, #RMF_MAXXX_sg_prawy_half, #RMF_MAXXX_sg_bill').each(function() {$('<div style="text-align:center;top:0px;left:0px;width:100%;color:#666;font-size:11px;text-transform:uppercase;padding-bottom: 6px;">reklama</div>').insertBefore($(this)); });
	}
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var _fd_actions = [];
var _fd_ci = false;
var _fd_ci_to = 60000;
var lib_fd = {
	init: function() {
		this.execute();

		_fd_ci = setTimeout(lib_fd.get_data, 10);

		Array.from(document.querySelectorAll('.lazyload[data-script]')).map(function(f) {
			sc = document.createElement('script');
			sc.src = f.getAttribute('data-script');
			f.append(sc);
		});
	},
	set_cycle: function() {
		clearTimeout(_fd_ci);
		_fd_ci = setTimeout(lib_fd.get_data, _fd_ci_to);
	},
	get_data: function() {

		r_query = '?s=other';
		if (_section == 'index_index') r_query = '?s=index';

		var date = new Date();
		if (date.getSeconds() > 30) { sec = 1; } else { sec = 0; } 
	
		r_query += "&cb=" + date.getFullYear() + "" + (date.getMonth()+1) + "" + date.getDate() + "-" + date.getHours() + "" + date.getMinutes() + "-" + sec;

		if(Cookies.get('setDate') != "undefined") r_query += '-'+Cookies.get('setDate') ;


		$.ajax({
			type: "GET",
			url : "/js-data/get" + r_query,
			cache: true,
			dataType: 'jsonp',
			jsonpCallback: 'fdData'
		}).done(function(d, status, xhr){
			if (d.datasets && d.datasets.length > 0) {
				d.datasets.forEach(function(v) {
					_fd.push({
						name: v[0],
						data: v[1]
					});
				});
				lib_fd.execute();
			}
		}).always(function() {
			lib_fd.set_cycle();
		});
	},
	receive_data: function() {

	},
	execute: function() {
		if (typeof _fd != "undefined" && _fd.length > 0) {
			_fd.forEach(function(v) {
				if (typeof v.callback == "function") { 
					ccb = v.callback;
				}
				else {
					if (_fd_actions[v.name] && typeof _fd_actions[v.name].callback == "function") {
						ccb = _fd_actions[v.name].callback;
					} else {
						ccb = false;
					}
				}

				if (typeof ccb == "function") {
					//console.info('_fd : ', v.name, v.data);
					ccb(v.data);
					_fd_actions[v.name] = {
						name: v.name,
						data: v.data,
						callback: ccb
					};
				}
			});
			_fd = [];
		}
		this.manipulate_elements();
	},
	manipulate_elements: function() {
		Array.from(document.querySelectorAll('.fd-element[data-locations]')).map(function(f) {
			dl = JSON.parse(f.getAttribute('data-locations'));
			if (dl.includes(location_id) || dl.includes(200)) {
				f.classList.remove('d-none');
			} else {
				f.classList.add('d-none');
			}
		});
	},
	change_location: function() {
		if (typeof _fd_actions != "undefined" && Object.size(_fd_actions) > 0) {
			for (var key in _fd_actions) {
				var v = _fd_actions[key];
				_fd.push(v);
			}
			this.execute();
		}
		//this.manipulate_elements();
	},
	fetch_vars: function(d, l, fr, cb) {
		if (d == null) {
			if (typeof cb == "function") {
				cb(null);
				return;
			} else {
				return;
			}
		}
		l = (typeof l != "undefined" && parseInt(l) > 0) ? parseInt(l) : ((typeof location_id != "undefined" && parseInt(location_id) > 0) ? parseInt(location_id) : 1);
		oro = (typeof fr == "boolean" && fr == true) ? true : false;
		ans = rd = [];
		
		if (d) {
			d.forEach(function(r) {
				if (r.l.indexOf(l) > -1 || r.l.indexOf(200) > -1) {
					ans.push(r);
					if (oro) return;
				}
			});
		}

		if (oro) rd = ans[0];
		else rd = ans;

		if (typeof cb == "function") {
			cb(rd);
		} else {
			return rd;
		}
	}
};

var lib_scrolls = {
    init: function() {
        Array.from(document.querySelectorAll('.scroll-horizontal')).map(function(p) {
            if ((activeElement = p.querySelector('.active')) != null) { 
                p.scrollTo({
                    left: activeElement.offsetLeft-100,
                    behavior: 'smooth'
                });
            }
        })
    }
};

var lib_tabs = {
	init: function() {
		const triggerTabList = document.querySelectorAll('.nav-tab button');
			if (triggerTabList.length > 0) {
				triggerTabList.forEach(triggerEl => {
				const tabTrigger = new bootstrap.Tab(triggerEl)

				triggerEl.addEventListener('click', event => {
					event.preventDefault()
					tabTrigger.show()
				})
			})
		}
	}
};

var lib_sliders = {
	init: function() {
		Array.from(document.querySelectorAll('.mx-slider.nr')).map(function(p) {
			
			p.classList.add('swiper');
			p.classList.remove('nr');
			p.querySelector('.row').classList.add('swiper-wrapper');
			p.querySelector('.row').classList.remove('row');
			
			if (p.hasAttribute('data-nav')) {
				//$('#'+p.getAttribute('id')).append('');
			}

			new Swiper('#'+p.getAttribute('id'), {
				speed: 400,
				spaceBetween: 24,
				slidesPerView: p.hasAttribute('data-items') ? p.getAttribute('data-items') : 4,
				slideClass: 'slide-item',
				navigation: p.hasAttribute('data-nav') ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false,
				breakpoints: {
					0: {
						slidesPerView: p.hasAttribute('data-xs-items') ? p.getAttribute('data-xs-items') : 2,
						spaceBetween: p.hasAttribute('data-xs-space') ? p.getAttribute('data-xs-space') : 24,
					},
					769: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: p.hasAttribute('data-items') ? p.getAttribute('data-items') : 4,
					},
					1380: {
						navigation: p.hasAttribute('data-nav') ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false
					}
				},
				
			});

		});
	}
};


$(document).ready(function() {
	lib_location.init();
	lib_ads.init();
	lib_sliders.init();
  	//lib_main_podcasts.init();
	lib_elements.init();
	lib_player.init();
	
	lib_hb.init();
	lib_form.init();
	lib_search.init();
	lib_pm.init();
	lib_scrolls.init();
	lib_tabs.init();

	if ($('[data-toggle="tooltip"]').length > 0) $('[data-toggle="tooltip"]').tooltip({html: true})

  	lib_fd.init();

	setTimeout(function() { if (typeof gtag != "undefined") gtag('event', 'mk_czas_spedzony_7s'); }, 7000);
});

