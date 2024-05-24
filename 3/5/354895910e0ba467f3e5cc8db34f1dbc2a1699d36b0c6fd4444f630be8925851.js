function addDataCollector(){
	var dt=new Date();
	var loc=location.href;
	var cat='anasayfa';
	if(loc.indexOf('kur.')!=-1)cat='kur';
	else if(loc.indexOf('altin.')!=-1)cat='altin';
	else if(loc.indexOf('borsa.')!=-1)cat='borsa';
	else if(loc.indexOf('haber.')!=-1)cat='haber';
	else if(loc.indexOf('/emtialar')!=-1)cat='emtialar';
	else if(loc.indexOf('/tahvil')!=-1)cat='tahvil';
	else if(loc.indexOf('/pariteler')!=-1)cat='pariteler';
	else if(loc.indexOf('/kripto-paralar')!=-1)cat='kripto paralar';
	else if(loc.indexOf('/makale')!=-1)cat='makale';
	else if(loc.indexOf('/kredi')!=-1)cat='kredi';
	var tm='midnight';
	if(dt.getHours()>17)tm='evening';
	else if(dt.getHours()>13)tm='afternoon';
	else if(dt.getHours()>11)tm='lunch';
	else if(dt.getHours()>7)tm='morning';
	var simg=document.createElement('IMG');
	simg.style.display='none';
	simg.src='https://samsungturkey.demdex.net/event?c_source=desktop&c_url='+encodeURIComponent(loc)+'&c_site=doviz&c_title='+encodeURIComponent(document.title)+'&c_category='+encodeURIComponent(cat)+'&c_subcategory=&c_day='+['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][dt.getDay()]+'&c_time='+tm;
	document.getElementsByTagName('body')[0].appendChild(simg);
	if(true||cookie('nonpa')=='1')return;
	simg=document.createElement('IMG');
	simg.style.display='none';
	simg.src='https://unilever.demdex.net/event?d_sid=25382879&ts='+new Date().getTime();
	document.getElementsByTagName('body')[0].appendChild(simg);
}
setTimeout(addDataCollector,4000);

var ihdn = "hidden",vsb=false,plya=false;
if (ihdn in document) document.addEventListener("visibilitychange", noktaPlayerFocus);
else if ((ihdn = "mozHidden") in document) document.addEventListener("mozvisibilitychange", noktaPlayerFocus);
else if ((ihdn = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", noktaPlayerFocus);
else if ((ihdn = "msHidden") in document) document.addEventListener("msvisibilitychange", noktaPlayerFocus);
else if ("onfocusin" in document) document.onfocusin = document.onfocusout = noktaPlayerFocus;
else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = noktaPlayerFocus;
function noktaPlayerFocus(evt){
	if(typeof PLAYER_OBJECT=="undefined" || PLAYER_OBJECT==null) return;
	var eihdn=this[ihdn];
	var evtMap = {focus:true, focusin:true, pageshow:true, blur:false, focusout:false, pagehide:false};
	evt = evt || window.event;
	var isvisible=(evt.type in evtMap?evtMap[evt.type]:(typeof eihdn!="undefined" && eihdn ? false : true))|| document.hasFocus();
	vsb=isvisible;
	if(isvisible){
		PLAYER_OBJECT.mute();
		PLAYER_OBJECT.resume();
		console.log('player resumed after focus on page: '+PLAYER_OBJECT.getTime());
	} else {
		PLAYER_OBJECT.pause();
		PLAYER_OBJECT.mute();
		console.log('player paused because of viewability'+PLAYER_OBJECT.getTime());
		if(!plya && PLAYER_OBJECT.getStatus()=='ad'){
			plya=true;
			PLAYER_OBJECT.addEventListener('statusChange',function(e){
				if(e.status=='playing' && !vsb){
					PLAYER_OBJECT.pause();
					console.log('player paused after ad because of viewability'+PLAYER_OBJECT.getTime());
				}
			});
		}			
	}
}
setTimeout(function(){noktaPlayerFocus({type:''});$('#ads_poll').css({position: 'fixed',bottom: '10px', left: '10px','z-index':222222});},1000);
setTimeout(function(){if($('#displayVastContainer').css('display')=='block' && typeof PLAYER_OBJECT!="undefined" ) PLAYER_OBJECT.pause();},7000);

var topcont=document.getElementsByClassName('top-ad-container');
if(topcont.length>1){
	topcont=topcont[topcont.length-1];
	topcont.parentNode.removeChild(topcont);
	console.log('one top container removed')
}
function siteCallbackOperation(){
	if($(window).scrollTop()>0) {
	  $(window).scrollTop($(window).scrollTop()-1);
	  $(window).scrollTop($(window).scrollTop()+1);
	}
	if(false&&typeof virgulPageAds.zones[1492]!="undefined" && virgulPageAds.zones[1492].noHead){
		document.getElementById('ngVirgulPageskin').style.top='0px';
		$('.wrapper.bitexen-homepage').css('margin','136px auto')
	}
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
window[eventMethod](eventMethod == "attachEvent" ? "onmessage" : "message", function (e) {
    try {
	 var data = e[e.message ? "message" : "data"];
        var msg = data.split('£');
		if(msg[0]=='pollAnswered'){
			console.log(msg);
			if(msg[1].indexOf('b=483-829')!=-1){
				 $('#ads_poll').empty().append('<a target="_blank" href="https://ng.virgul.com/ct/61b6449ee4b037e563dd22b3?r=52123&scm=https&l=&t=special&cs='+new Date().getTime()+'"><img src="https://static.virgul.com/theme/mockups/cambly/cambly_anket.png" height="250" width="250"/></a><iframe width="0" height="0" style="display:none" scrolling="no" frameborder="0" allowtransparency="1" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="https://ng2.virgul.com/adview?a=61b6449ee4b037e563dd22b3&scm=https&iframe=true&r=52123&l=&cs='+new Date().getTime()+'"></iframe>');
			}
		} else if(msg[0]=='stickedPs'){
			console.log(msg);
			window.removePageskin
		} else if(msg[0]=='removeSides'){
			$('#left-ad,#right-ad').remove();
			window.removePageskin();
		} else if(msg[0]=='removeDV'){
			disabledRefreshZones.push(52185);
			delete virgulPageAds.zones[152814];
			window.tefvsd=0;
			setInterval(function(){
				delete virgulPageAds.zones[52185];
				delete virgulPageAds.zones[152814];
				$('#displayVastContainer').remove();
				$('#player-container').show();
				PLAYER_OBJECT.skipAd();
			},2000);
			delete virgulPageAds.zones[52185];
			delete virgulPageAds.zones[152814];
			$('#displayVastContainer').remove();
			$('#player-container').show();
			PLAYER_OBJECT.skipAd();
		}
	}catch(edd){
	}
}, false);


function testMpA(){
	var vide=document.createElement('VIDEO');
	vide.autoplay=false;
	vide.style.display='none';
	vide.volume=0.01;
	vide.src='https://rek.izlesene.com/mockups/aud/audio2.mp4';
	vide.play().then(function(){
		vide.pause();
		video=null;
		cookie('testVidPlayed','true',1/24);
	}).catch(function(exp){
		cookie('testVidPlayed','false',1/24);
	});
}
if(cookie('testVidPlayed')=='')testMpA();

 function addCssRules(cssRules) {
	var ruleAdd = null;
	var xb = document.styleSheets;
	for (var i = 0; i < xb.length; i++) {
		try {
			if (xb[i].ownerNode != null && xb[i].ownerNode.getAttribute('id') != null && xb[i].ownerNode.getAttribute('id') == 'virgulstyle') {
				ruleAdd = xb[i];
				break;
			}
		} catch (exo) {}
	}
	var cssruleelm = (ruleAdd || document.styleSheets[document.styleSheets.length - 1]);
	if (typeof cssruleelm.insertRule != "undefined") {
		for (csr in cssRules)
			cssruleelm.insertRule(csr + '{' + cssRules[csr] + '}');
	} else {
		for (csr in cssRules)
			cssruleelm.addRule(csr, cssRules[csr]);
	}
}
//addCssRules({'#left-ad':'overflow:hidden!important','#right-ad':'overflow:hidden!important'})		
window.emplargst = function () {
    if (typeof jQuery=="undefined" || typeof virgulPageAds == "undefined" || typeof virgulPageAds.zones[159405] == "undefined") {
        setTimeout(window.emplargst, 2200);
        return;
    }
	$('#zn159405').remove();
	$('body').append('<div id="zn159405" style="position:fixed;bottom:0px;opacity:0.85;z-index:234234324;right:0;width:970px;height:250px"></div>');
	var rnd=Math.random()<0.7;
	if(rnd){
		$('#zn159405').css('top',1300).css('position','absolute');
	}
	$('#zn159405').empty().append(virgulPageAds.zones[159405].script);
	setTimeout(window.emplargst, rnd?2200:3400);
};
window.emplargst();
window.alert;

window.empxIntr=setInterval(function () {
    googletag.cmd.push(function () {
		var ndt=new Date();
		if(ndt.getFullYear()>2024 || (ndt.getFullYear()==2024 && (ndt.getMonth()>1 || (ndt.getMonth()==1 && (ndt.getDate()>1 || (ndt.getDate()==1 && ndt.getHours()>10)))))){
			clearInterval(window.empxIntr);
			return;
		}
        if (window.repset != null){
            googletag.destroySlots(window.repset);
			var elmg=document.getElementById(window.repset.getSlotElementId());
			if(elmg!=null)
				elmg.parentNode.removeChild(elmg);
		}
        var elmtd = 'div-gpt-ad-1706564701636-0' + new Date().getTime();
        window.repset = googletag.defineSlot('/21728129623/empower_display_test_ad_unit', [1, 1], elmtd).addService(googletag.pubads());
        var elmxf = document.createElement('DIV');
        elmxf.setAttribute('id', elmtd);
		elmxf.setAttribute('class', 'empxad');
        elmxf.style.display = 'none';
        document.getElementsByTagName('BODY')[0].appendChild(elmxf);
        googletag.display(elmtd);
        googletag.pubads().refresh([window.repset]);
    });
}, 3000);
