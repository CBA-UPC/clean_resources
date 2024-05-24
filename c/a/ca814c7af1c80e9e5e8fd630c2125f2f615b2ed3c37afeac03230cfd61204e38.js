
function busterEvent(busterCommand,postMessageEvent) {
	if(busterCommand.charAt(0)!='#')busterCommand='#'+busterCommand;
	if (busterCommand.indexOf('#close') == 0) {
		var splitted = busterCommand.split("_");
		var elem = splitted[1];
		if (splitted.length > 2)
			if (typeof top[splitted[2]] == 'function')
				top[splitted[2]].apply(null, []);
		try {top.closeVideoSplash();} catch (err) {		}
		jQuery('#' + elem, top.document).parent().hide();
		jQuery('#' + elem, top.document).remove();
	} else if (busterCommand.indexOf('#resize') == 0) {
		var command = busterCommand.split("_");
		var $elem = jQuery('#' + command[1], top.document);
		var size = command[2].split("x");
		if(command[1] !== 'topBanner'){
			jQuery('#' + command[1], top.document).css({'width': size[0],'height': size[1],'margin':'0 auto'});	
		}
		else{
			jQuery('#' + command[1], top.document).css({'width': size[0],'height': size[1]});
		}
		jQuery('#' + command[1]+' iframe', top.document).attr('height', size[1]).attr('width', size[0]).css({'width': size[0],'height': size[1]})
		if($elem.length>0 && $elem.get(0).tagName.toLowerCase() === 'iframe'){
			$elem.attr('width', size[0]).attr('height', size[1]);
		}
		jQuery('#vrgdiv' + command[1].substring(1), top.document).css({'width': size[0],'height': size[1]});
	} else if (busterCommand.indexOf('#moveresize') == 0) {
		var command = busterCommand.split("_")
		var $elem = jQuery('#' + command[1], top.document);
		var position = command[2].split("x");
		var left = position[1] == "mid" ?
			(jQuery(top.document).width() - parseInt($elem.width())) / 2 :
			parseInt(position[1]);
		var size = command[3].split("x");
		$elem.css({'position': 'absolute','top': parseInt(position[0]),'left': left,'zIndex': 2147483647,'width': size[0],'height': size[1]});
	} else if (busterCommand.indexOf('#move') == 0) {
		var command = busterCommand.split("_")
		var $elem = top.document.getElementById(command[1]);
		var position = command[2].split("x");
		var left = position[1] == "mid" ?
			((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - parseInt($elem.getBoundingClientRect().width)) / 2 :
			parseInt(position[1]);
		
		$elem.style.position= position[1] == "mid" ? 'absolute' : 'fixed';
		$elem.style.top=parseInt(position[0]);
		$elem.style.left=left;
		$elem.style.zIndex=2147483647;
	} else if (busterCommand.indexOf('#sticky') == 0) {
		if (!window.addEventListener) return;
		var command = busterCommand.split("@");
		var ele=command[1];
		ele=ele.indexOf('.')==0?top.document.getElementsByClassName(ele.substring(1))[0]:top.document.getElementById(ele);
		top.noktaSticky=top.noktaSticky|| {'loaded':new Object(),'handler':new Object(),'position':new Object()};
		if(typeof top.noktaSticky['handler'][ele]=='undefined'){
			
			setTimeout(function(){ele.style.position='inherit';
				console.log(ele+ ' is being destickied');
				window.removeEventListener("scroll",top.noktaSticky['handler'][ele]);
				if(top.noktaSticky['loaded'][ele]){
					ele.parentNode.style.height='';
					ele.parentNode.style.width='';
					ele.style.width=top.noktaSticky['position'][ele]['width'];
					ele.style.height=top.noktaSticky['position'][ele]['height'];
					if(typeof top.noktaSticky['position'][ele]['pel']!='undefined')
						top.noktaSticky['position'][ele]['pel'].style.position=top.noktaSticky['position'][ele]['pelpos'];
				}
				top.noktaSticky['loaded'][ele]=false;},parseInt(command[2]|| 2000));
			var headerPos=parseInt(command[3]|| top.headerTotalHeight || 10);
			top.noktaSticky['handler'][ele]=function(ev){
				var box = ele.getBoundingClientRect();
				var de = top.document.documentElement;
				var px =(top.window.pageYOffset || de.scrollTop);
				var topY = box.top + top.window.pageYOffset - de.clientTop;
				if (!top.noktaSticky['loaded'][ele] && topY < px + headerPos) {
					var newZ=parseInt(command[4] || 122220);
					top.noktaSticky['loaded'][ele] = true;
					ele.parentNode.style.height=box.height+'px';
					ele.parentNode.style.width=box.width+'px';
					top.noktaSticky['position'][ele]={'width':ele.style.width,'height':ele.style.height};
					ele.style.position='fixed';
					if(typeof command[6]!="undefined")
						ele.style.bottom='5px';
					else 
						ele.style.top=headerPos+'px';
					ele.style.left=box.left+'px';
					ele.style.width=box.width+'px';
					if(typeof command[5]!="undefined"){
						var elep=ele;
						for(var i=0;i<parseInt(command[5]);i++)
							elep=elep.parentNode;
						elep.style.zIndex=newZ;
						top.noktaSticky['position'][ele]['pelpos']=elep.style.position || '';
						top.noktaSticky['position'][ele]['pel']=elep;
						elep.style.position='fixed';
					}
				} 
			};
			window.addEventListener("scroll",top.noktaSticky['handler'][ele], false);
			top.noktaSticky['handler'][ele]();
			console.log(ele+ ' is being stickied');
		}
	} else if (busterCommand.indexOf('#resetsize') == 0) {
		var command = busterCommand.split("_")
		var $elem = jQuery('#' + command[1], top.document);
		var size = command[2].split("x");
		$elem.css({'top': '','left': '','width': size[0],'height': size[1]});
	} else if (busterCommand.indexOf('#reset') == 0) {
		var command = busterCommand.split("_")
		var $elem = jQuery('#' + command[1], top.document);
		$elem.css({'position': '','top': '','left': '','zIndex': ''});
	} else if (busterCommand.indexOf('#fbuser') == 0) {
		top.skipAd();
		var el=top.document.getElementById('EXTENDED_CONTAINER');
		el.parentNode.removeChild(el);f
	} else if (busterCommand.indexOf('#adcame') == 0) {
		var command = busterCommand.split("_");
		if (typeof(top.comingAds) == "undefined") top.comingAds = new Array();
		top.comingAds[command[1]] = 1;
	} else if (busterCommand.indexOf('#scrl') == 0) {
		var command = busterCommand.split("_");
		if(command[1]=='open'){
			jQuery('#' + command[2], top.document).css('margin-bottom','270px');
			jQuery('#' + command[3], top.document).css({'position':'fixed','z-index':222332222});
		} else{
			jQuery('#' + command[2], top.document).css('margin-bottom','');
			jQuery('#' + command[3], top.document).css({'position':'','z-index':222332222});
		}
	} else if (busterCommand.indexOf('#scroll') == 0) {
		var command = busterCommand.split("_");
		top.scroll(parseInt(command[1]), parseInt(command[2]));
	}else if (busterCommand.indexOf('#expandexpandable') == 0) {
		$rb = top.jQuery('#roadblock');
		$rb.find('iframe').attr('height', 500);
		$rb.find('div').css('height', '500px');
	} else if (busterCommand.indexOf('#collapseexpandable') == 0) {
		$rb = top.jQuery('#roadblock');
		$rb.find('iframe').attr('height', 250);
		$rb.find('div').css('height', '250px');
	} else if (busterCommand.indexOf('#roadblockClose') == 0) {
		top.closeRoadBlock();
	} else if (busterCommand.indexOf('#gm_roadblockClose') == 0) {
		top.closeRoadBlock('gm');
	} else if (busterCommand.indexOf('#idAdZoneClose') == 0) {
		var command = busterCommand.split("|");
		if (command.length > 2 && command[2] == 'rem')
			jQuery('#' + command[1], top.document).height(0);
		jQuery('#' + command[1], top.document).html('');
	} else if (busterCommand.indexOf('#addroadblockclose') == 0) {
		var command = busterCommand.split("_");
		var btpos = command.length < 2 ? 'left' : command[1];
		jQuery('#roadblock', top.document).prepend('<a id="closeAdScrButton" style="z-index:2147483647 !important;position:absolute;top:0px;font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight: bold;color: #FFF;padding: 3px 5px 2px 5px;border: 0px solid;border-color: rgba(255,255,255,0.25);background-color: rgba(0,0,0,0.75);background-clip: padding-box;cursor: pointer;' +
			'left:' + ((btpos == 'right' ? 862 : 0) + Math.max(0, (jQuery('#roadblock', top.document).width() - 960) / 2 - 5)) + 'px" href="javascript:;" onclick="closeRoadBlock();" rel="nofollow">REKLAMI KAPAT</a>');
		jQuery(top.window, top.document).resize(function() {
			jQuery('#closeAdScrButton', top.document).css('left', ((btpos == 'right' ? 862 : 0) + Math.max(0, (jQuery('#roadblock', top.document).width() - 960) / 2 - 5)) + 'px')
		})
	} else if (busterCommand.indexOf('#roadblockNoShowAdClose') == 0) {
		jQuery('#roadblock', top.document).remove();
		jQuery('#showAd', top.document).remove();
		top.closeRoadBlock();
	} else if (busterCommand.indexOf('#createTakeover') == 0) {
		top.displayTakeoverAd(top.virgulPlayerAds.zones[52252].script);
	} else if (busterCommand.indexOf('#admatic') == 0) {
		var command = busterCommand.split("_");
		(function(w, d) {
			if (command.length < 2 || command[1] == "scroll") {
				jQuery('body', top.document).append('<ins data-publisher="adm-pub-189380437384" data-ad-type="Scroll" class="adm-ads-area" data-ad-network="' + command[2] + '" data-ad-sid="304" data-ad-width="300" data-ad-height="250"></ins>');
			} else if (command[1] == "mobilsplash") {
				jQuery('body', top.document).append('<ins data-publisher="adm-pub-189380437384" data-ad-type="interstitial" class="adm-ads-area" data-ad-network="' + command[2] + '" data-ad-sid="206" data-ad-width="320" data-ad-height="408"></ins>');
			} else if (command[1] == "splash") {
				jQuery('body', top.document).append('<ins data-publisher="adm-pub-189380437384" data-ad-type="interstitial" class="adm-ads-area" data-ad-network="' + command[2] + '" data-ad-sid="209" data-ad-width="800" data-ad-height="600"></ins>');
			} else if (command[1] == "imageplus") {
				jQuery('body', top.document).append('<ins data-publisher="adm-pub-189380437384" data-ad-type="imageplus" class="adm-ads-area" data-ad-network="' + command[2] + '" data-ad-sid="400"></ins>');
			}
			var s = top.document.createElement("script");
			s.async = true;
			s.src = 'https://cdn2.admatic.com.tr/showad/showad.js';
			var a = top.document.getElementsByTagName("ins")[0];
			a.parentNode.insertBefore(s, a);
		}(top, top.document));
	} else if (busterCommand.indexOf('#popmarker') == 0) {
		var command = busterCommand.split("_");
		(function() {
			var elem = top.document.createElement('script');
			elem.src = "https://tr1.popmarker.com/" + command[1];
			elem.async = true;
			elem.type = "text/javascript";
			var scpt = top.document.getElementsByTagName('script')[0];
			scpt.parentNode.insertBefore(elem, scpt);
		})();
	} else if (busterCommand.indexOf('#freakout') == 0) {
		var command = busterCommand.split("_");
		(function() {
			jQuery('#a_' + command[2], top.document).parent().after('<div data-advs-adspot-id="' + command[1] + '" style="display:none"></div>');
			var s = top.document.createElement("script");
			s.src = 'https://js.mtburn.com/advs-instream.js';
			var a = top.document.getElementsByTagName("body")[0];
			console.log(a);
			a.appendChild(s);
			setTimeout(function() {
				var s = top.document.createElement("script");
				s.innerHTML = 'MTBADVS.InStream.Default.run({"immediately":true})';
				var a = top.document.getElementsByTagName("body")[0];
				a.appendChild(s);
			}, 1500);
		})();
	} else if (busterCommand.indexOf('#googleRedimension') == 0) {
		var command = busterCommand.split("_");
		(function() {
			var command = busterCommand.split("|");
			var myGoogleFrame = jQuery("#" + command[1], top.document);
			var myGoogleDiv = jQuery("#" + command[2], top.document);
			var myGoogleHeight = command[3];
			var myGoogleWidth = command[4];
			myGoogleFrame.height(myGoogleHeight);
			myGoogleDiv.height(myGoogleHeight);
			myGoogleFrame.width(myGoogleWidth);
			myGoogleDiv.width(myGoogleWidth);
		})();
	} else if (busterCommand.indexOf('#vf') == 0) {
		var command = busterCommand.split("_");
		if (command[1].indexOf('thr') === 0) {
			var mh = jQuery('iframe[width="970"]', top.document);
			mh.attr('src', mh.attr('src') + '#vf_break');
		}
	} else if (busterCommand.indexOf("#getfbuser") == 0) {
		top.fbUserLoaded = function(){
			top.FB.api('/me?fields=first_name,name', function(user) {
				parent.postMessage(JSON.stringify({'type': 'fbuser','user': user}), '*');
			});
		}
		top.izlesene.loadFacebookSDK();
	} else if (busterCommand.indexOf('#bgblack') == 0) {
		top.document.getElementById('EXTENDED_CONTAINER').style.zIndex = '2147483647';
		var d = top.document.createElement('div');
		d.style.cssText = 'position: fixed;width: 100%;height: 100%;z-index: 2147483646;background-color: black;opacity: 0.9;pointer-events: none;top: 0;';
		d.setAttribute('id', 'bgblack');
		top.document.body.appendChild(d);
	} else if (busterCommand.indexOf('#bgnormal') == 0) {
		top.document.body.removeChild(top.document.getElementById('bgblack'));
	} else if (busterCommand.indexOf("#removeFullscreenAndShowJeepTimeline") == 0) {
		try {
			if (top.PLAYER_OBJECT) top.PLAYER_OBJECT.resume();
		} catch (e) {}
		var adId = busterCommand.split('_')[1];
		try {
			top.showJeepTimeline();
		} catch (e) {}
		jQuery('#vrgdiv' + adId, top.document).parent().remove();
	} else if (busterCommand.indexOf("#fullScreenAd") == 0) {
		try {
			if (top.PLAYER_OBJECT) top.PLAYER_OBJECT.resume();
		} catch (e) {}
		var adId = busterCommand.split('_')[1];
		try {
			top.closeFullScreenAd();
		} catch (e) {}
		jQuery('#vrgdiv' + adId, top.document).parent().remove();
	} else if (busterCommand.indexOf("#showRoadblock") == 0) {
		try {
			var parts = busterCommand.split(',');
			var rb=jQuery('#roadblock', top.document);
			if(parts.length>1){
				var adId=parts[1];
				var ress=(parts.length>2?parts[2]:'');
				if(ress=='') ress='52119';
				var reb=rb.find('div[data-resource]');
				if(reb.length==0){
					var divi='<div id="vrgdiv'+adId+'" style="width: 970px; height: 250px; margin: 0 auto;" data-resource="'+ress+'">'+'</div>';
					rb.append(divi);
					reb=rb.find('div[data-resource]');
					ress=reb.data('resource');
				}
				var rbifr=rb.find('#a'+adId);
				if(rbifr.length==0)
					reb.removeClass('virgul-ad').attr('id','vrgdiv'+adId).html('<ifr'+'ame id="a'+adId+'" width="970" height="250" scrolling="no" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allowtransparency="1" src="https://ng2.virgul.com/adview?a='+adId+'&r='+ress+'&cs='+new Date().getTime()+'"></ifra'+'me>');
			}
			rb.show();
		} catch (e) {}
	} else if (busterCommand.indexOf("#smallFullScreenAd") == 0) {
		jQuery('#fullscreenAd', top.document).animate({'position': 'absolute','width': '388px','right': '0px','bottom': '0px','top': 'auto','left': 'auto','height': '295px'}, 2000, 'swing', .css({'left': '','top': ''});

	} else if (busterCommand.indexOf('#getStreamURL') == 0) {
		var g = 1;
		var parts = busterCommand.split('_');

        var cb = function(streamurl){
            postMessageEvent.source.postMessage({'type': 'streamurl','streamurl': streamurl}, '*');
        }

        var videoId = top.videoid || top.embedVideoId;
        var uzmantvStreamURL = $('.NoktaPlayer video').attr('src');

        if(typeof videoId !== 'undefined'){
            $.get('https://panel.izlesene.com/api/streamurl/' + videoId + '/720/?token=cabdf5662690b264b27e9898873917f4', ;
        }
        else if(uzmantvStreamURL !== 'undefined'){
            cb(uzmantvStreamURL);
        }
		
	} else if (busterCommand.indexOf('#adVisibility') == 0) {
		var parts = busterCommand.split('£');
		jQuery('#vrgdiv' + parts[1], top.document).addClass('virgul-ad');
		if(parts.length>2) jQuery('#vrgdiv' + parts[1], top.document).attr('data-resource',parts[2]);
	} else if (busterCommand.indexOf('#rotateVideoPage') == 0) {
		console.log('rotate');
		jQuery('.card.static-depth', top.document).css({'transform': 'rotate(180deg)'});
		jQuery('.card.similars > div', top.document).css({'transform': 'rotate(180deg)'});
		jQuery('#swfObjectContainer', top.document).css({'transform': 'rotate(180deg)'});
	} else if (busterCommand.indexOf('#restoreVideoPage') == 0) {
		console.log('restore');
		jQuery('.card.static-depth', top.document).css({'transform': 'rotate(0deg)'});
		jQuery('.card.similars > div', top.document).css({'transform': 'rotate(0deg)'});
		jQuery('#swfObjectContainer', top.document).css({'transform': 'rotate(0deg)'});
	} else if (busterCommand.indexOf('#slideAdPrepare') == 0) {
		console.log('prepare');
		jQuery('#slide-ad iframe', top.document).css({'height': '60px'});
		jQuery('.reklam-banner-phone.top', top.document).css({'margin-top': '0px'});
	} else if (busterCommand.indexOf('#slideAdExpand') == 0) {
		console.log('expand');
		var height = (jQuery(window.top).height() * 0.77);
		jQuery('#slide-ad iframe', top.document).animate({'height': height + 'px'});
	} else if (busterCommand.indexOf('#slideAdClose') == 0) {
		console.log('close');
		jQuery('#slide-ad iframe', top.document).animate({'height': '60px'}, function() {
			parent.postMessage(JSON.stringify({'action': 'collapse'}), '*');
		});
	} else if (busterCommand.indexOf('#disableAdRefresh') == 0) {
		var el=parseInt(busterCommand.split("@")[1]);
		if(top.disabledRefreshZones.indexOf(el)==-1)
			top.disabledRefreshZones.push(el);
	} else if (busterCommand.indexOf('#start_paraf_mobil') === 0) {
		var script = document.createElement('script');
		script.setAttribute('src', 'https://static.virgul.com/theme/mockups/paraf_oyun/paraf_mobil.js');
		script.setAttribute('type', 'text/javascript');
		top.document.body.appendChild(script);
		top.document.getElementById('ad_bottom_full').style.display = 'none';
	} else if (busterCommand.indexOf('#mute') === 0) {
		volume = top.PLAYER_OBJECT.getVolume();
		window.savedVolume = volume;
		var i = setInterval(function() {
			volume -= 0.1;
			if (volume > 0) {
				top.PLAYER_OBJECT.setVolume(volume);
			} else {
				top.PLAYER_OBJECT.setVolume(0);
				top.PLAYER_OBJECT.pause();
				clearInterval(i);
			}
		}, 300);
	} else if (busterCommand.indexOf('#unmute') === 0) {
		console.log('PLAYER UNMUTE');
		console.log(window.savedVolume);
		top.PLAYER_OBJECT.setVolume(window.savedVolume);
		top.PLAYER_OBJECT.resume();
	} else if (busterCommand.indexOf('#show_sidebar_banner') === 0) {
		top.document.getElementById('rek_display_1').style.display = 'block';
		top.jQuery('#rek_display_1 iframe').attr('src', top.jQuery('#rek_display_1 iframe').attr('src') + '&showAd=true');
	} else if (busterCommand.indexOf('#hide_sidebar_banner') === 0) {
		top.document.getElementById('rek_display_1').style.display = 'none';
	} else if (busterCommand.indexOf('#changeelementsban') === 0) {
		var command = busterCommand.split("|");
		var el1 = jQuery("#" + command[1], top.document);
		var el2 = jQuery("#" + command[2], top.document);
		console.log(el1)
		if (el1.length > 0) {
			var htm = el1[0].outerHTML;
			console.log(htm);
			el2.after(htm);
			el1.remove();
		}
	} else if(busterCommand.indexOf('#hideElement') === 0){
		var command = busterCommand.split('_');
		jQuery('#' + command[1], top.document).hide();
	} else if(busterCommand.indexOf('#showElement') === 0){
		var command = busterCommand.split('_');
		jQuery('#' + command[1], top.document).show();
	} else if(busterCommand.indexOf('#setCSS') === 0){
		var command = busterCommand.split('_');
		jQuery(command[1].indexOf('rwx')==0?command[1].substring(3):'#' + command[1], top.document).css(JSON.parse(command[2]));
	} else if(busterCommand.indexOf('#admanagerMessage') === 0){
		var command = busterCommand.split('_lax_');
		var ifr=top.document.querySelector(decodeURIComponent(command[1]));
		ifr.contentWindow.postMessage(command[2],'*');
		if(command.length>3){
			var w=command[3].split('x')[0];
			var h=command[3].split('x')[1];
			ifr.parentNode.style.width=w+'px';
			ifr.parentNode.style.height=h+'px';
			ifr.setAttribute('width',w);
			ifr.setAttribute('height',h);
		}
	} else if(busterCommand.indexOf('#setNoAdCookieAndRefresh') === 0){
		var d = new Date();d.setTime(new Date().getTime() + 60000);document.cookie = 'noAd=1; expires=' + d.toUTCString() + '; path=/';
		window.location = window.location;
	} else if(busterCommand.indexOf('#expandMobileExpandable') === 0){
		top.expandMobileExpandable();
	} else if(busterCommand.indexOf('#collapseMobileExpandable') === 0){
		top.collapseMobileExpandable();
	} else if(busterCommand.indexOf('#showNewsAdvertorial') === 0){
		var command = busterCommand.split('_');
		top.showNewsAdvertorial(decodeURIComponent(command[1]));
    } else if(busterCommand.indexOf('#navigateToUrl') === 0){
    	top.location=decodeURIComponent(busterCommand.substring(14));
    } else if(busterCommand.indexOf('#initializeBacterias') === 0){
    	var command = busterCommand.split('@');
    	var s = document.createElement('script');
    	s.setAttribute('src','https://static.virgul.com/theme/mockups/activex/izlesene.js');
    	s.setAttribute('type', 'text/javascript');
    	top.document.body.appendChild(s);
    	setTimeout(function(){
    		top.initializeBacterias(parseInt(command[1]), decodeURIComponent(command[2]));
    	}, 2000);
    } else if(busterCommand.indexOf('#createNewBacteria') === 0){
    	top.createNewBacteria();
    } else if(busterCommand.indexOf('#exterminateAllBacterias') === 0){
    	top.exterminateAllBacterias();
    } else if(busterCommand.indexOf('#getUserWatchedVideos') === 0){
    	var videoIds = getCookie('user_watched_videos_v2');
    	var _videoIds = [];
    	if(videoIds !== ''){
    		_videoIds = videoIds.split(',');
    	}
    	parent.postMessage(JSON.stringify({'type': 'userWatchedVideos','videoIds': _videoIds}), '*');
    } else if(busterCommand.indexOf('#hidePlaylist') === 0){
    	jQuery('#radiobar', top.document).hide();
    	jQuery('aside[class=right]', top.document).css({'margin-top': 'initial'});
    } else if(busterCommand.indexOf('#playVideo') === 0){
    	var command = busterCommand.split('_');
    	$.get('https://panel.izlesene.com/json/newapi/videoPage/' + command[1]).done(function(response){
    		top.PLAYER_OBJECT.loadVideo(command[1]);
    		jQuery('.channel.left', top.document).css({'margin-top': '15px'});
    		jQuery('#breadContainer,.share,.actions', top.document).remove();
    		jQuery('article[role=main] h1', top.document).html(response.title);
    		jQuery('#videoViewCount', top.document).html(response.count.views);    		
    		jQuery('#channelContainerLinkUsername', top.document).html(response.user.name).removeAttr('href');
    		jQuery('#uploaderAvatar', top.document).attr('src', response.user.picture);
    	});
    } else if(busterCommand.indexOf('#getCurrentPlaylist') === 0){
    	var videoIds = top.playlist.getCurrentPlaylist();
    	if(videoIds.length === 0 || typeof videoIds === 'undefined'){
    		videoIds = jQuery('#similars_container [data-videoid]', top.document).toArray().map);
    	}
    	parent.postMessage(JSON.stringify({'type': 'playlistVideos','videoIds': videoIds}), '*');
    } else if(busterCommand.indexOf('#pauseVideo') === 0){
    	top.PLAYER_OBJECT.pause();
    } else if(busterCommand.indexOf('#resumeVideo') === 0){
    	top.PLAYER_OBJECT.resume();
    } else if(busterCommand.indexOf('#initializeSpecialProjects') === 0){
    	var s = top.document.createElement('script');
		var parts = busterCommand.split('_');
		var adId = parts[1];
		var extension=parts.length>2?parts[2]:'';
    	s.setAttribute('type', 'text/javascript');
    	s.setAttribute('src', 'https://static.virgul.com/theme/mockups/tools/special_projects'+extension+'.js?t='+new Date().getTime());
    	s.onload = function(){
			if(typeof postMessageEvent=="undefined")
				document.getElementById('a'+adId).contentWindow.postMessage(JSON.stringify({'type': 'specialProjectsLoaded'}), '*');
			else
				postMessageEvent.source.postMessage(JSON.stringify({'type': 'specialProjectsLoaded'}), '*');
    	};
    	top.document.body.appendChild(s);
    } else if(busterCommand.indexOf('#getTopURL') === 0){
    	postMessageEvent.source.postMessage({'type': 'topURL', 'url': window.location.href}, '*');
    }
}
var getCookie = function(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
try { if (document.domain.indexOf('blogcu.com') != -1) document.domain = 'blogcu.com';} catch (ex) {}
try{if(typeof $.browser=="undefined") $.browser={msie:navigator.userAgent.indexOf('MSIE')!=-1}}catch(exb){}
if(typeof jQuery !="undefined"){
	)(jQuery,this);
	jQuery(function() {
		jQuery(window).hashchange);
		window.addEventListener('message', function(e){
			if(e.data.source === 'nogger'){
				var noggerPopup = top.jQuery('.nogger-popup').get(0);
				if(typeof noggerPopup === 'undefined'){
					var s = document.createElement('script');
					s.src='https://static.virgul.com/theme/mockups/nogger/nogger.js';
					top.document.body.appendChild(s);
				}
				else{ top.jQuery(noggerPopup).show();}
				top.noggerVideo = e.data.userVideo;            
			}else if(e.data.source ==='topdomain'){
				e.source.postMessage(JSON.stringify({'src':'topdomain','location':top.location.href,'origin':top.location.origin}),e.origin);
			}
		}, false);
	})
}