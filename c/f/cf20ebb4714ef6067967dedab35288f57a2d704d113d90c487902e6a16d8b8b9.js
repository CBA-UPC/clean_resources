No default param for events{ var xhttp = new XMLHttpRequest(); xhttp.open('POST', 'https:\/\/tags\.h12-media\.com' + '\/pingback\/default.asp?run=true', true); xhttp.setRequestHeader('Content-type', 'application\/x-www-form-urlencoded'); xhttp.send('platform=wrapper&mes=' + encodeURIComponent(ma_mess)); }
function setStyle(elem, propertyObject) {
	/* var el = document.getElementById(elId); */
	for (var property in propertyObject) {
		try {
			elem.style[property] = propertyObject[property];
		} catch (e) { ma_err('elem_style ' + e.message); }
	}
}
var sticky_smart_align = '';
var branding_left = 0;
var h12_auction = '8ph6nz0rzg';
var h12_vars = {"mtoken":"","adtype":"sticky","adformat":"stickybottom","pubid":"220ea9294d14f52b23bddd1aacfcef6b","adunitid":"32575","topurl":"https://asuratoon.com/9260952888-steel-eating-player-chapter-23/","docref":"","auction":"8ph6nz0rzg","pubsubid":null,"index":"1","ishidden":false,"istopwindow":true,"isscrollable":true,"dayofweek":5,"hourofday":11,"clang":"es-ES","docdir":"LTR","cdims":[1267,898],"ddims":[1267,194045],"sbars":[0,0],"endpoint":"https://tags.h12-media.com","coords":[634,117],"pwidth":[100,1,1267],"pheight":[null,0,194045],"maxwidth":1267,"maxheight":898};
window.ws_refupdayspercent=0;

window.doNotChange = 'H12_Media_16489_32575';
window.doNotChangeNEW = 'H12-16489-32575-ES-DESK-BNR';
window.doNotChangeVDO = 'H12-16489-32575-ES-DESK-VDO';
window.doNotChangeNTV = 'H12-16489-32575-ES-DESK-NTV';
var potential_adunitnames = [window.doNotChange,window.doNotChangeNEW,window.doNotChangeVDO,window.doNotChangeNTV];

var h12_sizes_obj = {};

try {
	var my_frame = document.getElementById('postbid_container');
	if (!my_frame) {
			var i = document.createElement('iframe');
			i.id = 'postbid_container';
			i.scrolling = 'no';
			i.frameBorder = 0;
			i.style.zIndex = '10';
			i.style.margin = 0;
			i.style.padding = 0;
			i.style.border = '0';
			i.style.clear = 'both';
			i.style.overflow = 'hidden';
			/*i.style.position = 'absolute';*/
			i.style.left = '0px';
			i.style.top = '0px';
			/**/
			
			try {
				i.marginHeight = 0;
				i.marginWidth = 0;
				i.topMargin = 0;
				i.leftMargin = 0;
			} catch(e) { }
			document.getElementsByTagName('body')[0].appendChild(i);
		}

} catch(e) { ma_err('container ' + e.message); }

window.h12_consent_int = 1;

var tagWidth = 1267;
var tagHeight = 134.7;
var tagWidth_v = 0;
var tagHeight_v = 0;
var tagori = 'h';

var bids = [ {bidder: "criteo", params: { networkId: "7846" , bidFloor: 0.04 , bidFloorCur: "USD"}},{bidder: "eplanning", params: { ci: "2d2a6", size:"970x90"}},{bidder: "eplanning", params: { ci: "2d2a6", size:"728x90"}},{bidder: "eplanning", params: { ci: "2d2a6", size:"468x60"}},{bidder: "eplanning", params: { ci: "2d2a6", size:"320x50"}},{bidder: "adtelligent", params: { aid: 519590} },{bidder: "h12media", params: { pubid: "220ea9294d14f52b23bddd1aacfcef6b", placementid: "32575", endpointdom:"https://bidder.h12-media.com/prebid/default.asp?payload=57dAz3_qKWHet0VvlJ76h2RrpMlRFvwNqM4k10-5QCRUUoFUuUnY8BnOEanlM8srbQcJH5N-wtIT3krmJxCZePeIqyLWxLVHnmlCUvSYt8EhlQNRcwfzSK4QNZMtfi9hkY0QXpt5Zwsxn4Prk1aT-3QOjo8js9HP4-7Drulj86XyQtAiXkJqS0Y0XPfVWT5-SZej1d3bxkEUxPN40FCYFMGma7niwIYshdRZUopmvTLppHu1eTioNU-9OQVPo4tWelkTOO8OGxX8HFsaQPWmjoNfreSVQxgkzV82m0MnNkjWSHgDFHGczhlGxVlLNxc1DV8Voxf-ADbBzVvfsD_HAG6b5GLHCcyaSQushfx_ZstIQOt2MaHa-IMJlM6HFvtcjzUxLAtwfioImPOfKq3gS1El6ZS2bqunI8TQATPlZjdNzS528s6QvHpUyHykgCpXmIuVd2zuZSVyOH-DTSoGzdQ82"} },{bidder: "amx", params: {tagId: "aDEyLmNvbS1yb24" , floor: 0.06}}];
var bids_two = [{bidder: "amx", params: {tagId: "aDEyLmNvbS1yb24" , floor: 0.13}}];
var bidsVDO = [];
var bidsNTV = [ {bidder: "criteo", params: { networkId: "7846" , bidFloor: 0.04 , bidFloorCur: "USD"}}]

var bidTimeOut = 4000;
var FAILSAFE_TIMEOUT = 5000;

var h12_nobids_bidders = [];
var nobidrepo = {};
try {
	if (sessionStorage.nobidrepo) {
		nobidrepo = JSON.parse(sessionStorage.nobidrepo);
		/*nobidrepo = {};*/
	}
	var objrepo_keys = Object.keys(nobidrepo);
	for (var i=0; i < objrepo_keys.length; i++) {
		var repo_bidder = objrepo_keys[i];
		if (nobidrepo[repo_bidder] >= 50) {
			
			var new_bids = [];
			for (var ix=0; ix < bids.length; ix++) { if (bids[ix].bidder !== repo_bidder) { new_bids.push(bids[ix]); } }
			bids = new_bids;
			
			var new_bids = [];
			for (var ix=0; ix < bids_two.length; ix++) { if (bids_two[ix].bidder !== repo_bidder) { new_bids.push(bids_two[ix]); } }
			bids_two = new_bids;
			
			var new_bids = [];
			for (var ix=0; ix < bidsVDO.length; ix++) { if (bidsVDO[ix].bidder !== repo_bidder) { new_bids.push(bidsVDO[ix]); } }
			bidsVDO = new_bids;

			var new_bids = [];
			for (var ix=0; ix < bidsNTV.length; ix++) { if (bidsNTV[ix].bidder !== repo_bidder) { new_bids.push(bidsNTV[ix]); } }
			bidsNTV = new_bids;
		}
	}
} catch(e) {}



var ADREFRESH_TIMEOUT = 45000;
var winners_obj = [];
window.hb_win_notice_url = 'https:\/\/tags\.h12-media\.com\/rtb\/default\.asp\?pname=hb_result_v3&impdata=57dAz3_qKWHet0VvlJ76h2RrpMlRFvwNqM4k10-5QCRUUoFUuUnY8BnOEanlM8srbQcJH5N-wtIT3krmJxCZePeIqyLWxLVHnmlCUvSYt8EhlQNRcwfzSK4QNZMtfi9hkY0QXpt5Zwsxn4Prk1aT-3QOjo8js9HP4-7Drulj86XyQtAiXkJqS0Y0XPfVWT5-SZej1d3bxkEUxPN40FCYFMGma7niwIYshdRZUopmvTLppHu1eTioNU-9OQVPo4tWelkTOO8OGxX8HFsaQPWmjoNfreSVQxgkzV82m0MnNkjWSHgDFHGczhlGxVlLNxc1DV8Voxf-ADbBzVvfsD_HAG6b5GLHCcyaSQushfx_ZstIQOt2MaHa-IMJlM6HFvtcjzUxLAtwfioImPOfKq3gS1El6ZS2bqunI8TQATPlZjdNzS528s6QvHpUyHykgCpXmIuVd2zuZSVyOH-DTSoGzdQ82';
function JSPBack() {
	try {
		window.parent.h12slave.noadsprocess(window.h12_vars);
		setTimeout(function() { window.parent.h12slave.adrefreshprocess(window.h12_vars); }, ADREFRESH_TIMEOUT);		
		/*ma_err('JSPBack ' + JSON.stringify(window.h12_vars));*/
	} catch(e) { ma_err('JSPBack ERR' + e.message); }
}
function addscrtopage(src_uri) { var scriptK = document.createElement('script'); scriptK.src = src_uri; scriptK.async = true; document.getElementsByTagName('head')[0].appendChild(scriptK); }
function addimgtopage(src_uri) { var imgK = document.createElement('img'); imgK.src = src_uri; imgK.setAttribute('style', 'width: 1px; height: 1px; display: none;'); document.getElementsByTagName('body')[0].appendChild(imgK); }


var ntvbasesrc = 'https:\/\/tags\.h12-media\.com\/ntv\/default\.asp\?size=970x90&endpoint=https%3A%2F%2Ftags%2Eh12%2Dmedia%2Ecom&1=1';
var ntvw = '970';
var ntvh = '90';
window.hb_data = {};

var pbjs = pbjs || {};
/*pbjs = [];*/

pbjs.que = pbjs.que || [];
pbjs_debug=true;
window.vast_width = 0;
window.vast_height = 0;

var adUnits = [
				{code: window.doNotChange, mediaTypes: { banner: {sizes: [[970,90],[728,90],[468,60],[320,50]]} }, bids: bids},
				{code: window.doNotChangeNEW, mediaTypes: { banner: {sizes: [[970,90],[728,90],[468,60],[320,50]]} }, bids: bids_two},
				{code: window.doNotChangeVDO, mediaTypes: { video: { playerSize: [[1267, 135]], context: 'instream', mimes: ["video/mp4"], maxduration: 30, api: [1, 2], protocols: [2, 3] } }, bids: bidsVDO},
				{
					code: window.doNotChangeNTV, 
					mediaTypes: { 
						native: {
						  image: {
							required: true,
							sizes: [300, 250],
							wmin: 50,
						  },
						  title: {
							required: true,
							len: 140
						  },
						  sponsoredBy: {
							required: true
						  }						  
						}
					}, 
					bids: bidsNTV
				}
			];

pbjs.que.push(function() {
	
	if (window.__consHAS() != '') {
		pbjs.setConfig({
			consentManagement: {
				gdpr: {
					cmpApi: 'static',
					timeout: 1000,
					allowAuctionWithoutConsent: true,
					consentData: {
						getTCData: {
							gdprApplies: window.__gaprHAS(),
							hasGlobalScope: true,
							tcString: window.__consHAS()
						}
					}
				}
			}
		});
	}	
	
	function h12_init_vast(winnershere) {
		try { 
			var myvar = '<html><head>'+
			'<link rel="stylesheet" href="https://f.h12-media.com/v3/vmin.css"><script src="https://f.h12-media.com/v3/v/rpm-vast-bundle2.js"></script></head>'+
			'<body>'+
			'<div class="rmp-container" id="rmpPlayer"><div class="rmp-content"><video class="rmp-video" stylexxx="width: 0px; height: 0px;"></video></div></div>'+
			'<script>'+
			'var adTag = window.parent.vast_url;'+
			'var id = "rmpPlayer";'+
			'var container = document.getElementById(id);'+
			'var video = document.querySelector(".rmp-video");'+
			'video.defaultMuted = true;'+
			'video.muted = true;'+			
			'container.style.width = "0px";'+
			'container.style.height = "0px";'+
			'var params = {'+
			'  ajaxTimeout: 8000,'+
			'  outstream: true,'+
			'  debug: true,'+
			'  showControlsForVastPlayer: true,'+
			'  viewMode: "normal",'+
			'};'+
			'var mayplay = new RmpVastApp.default(id, params);'+
			'mayplay.setMute(true);'+
			'mayplay.loadAds(adTag);'+
			'container.addEventListener("adinitialplayrequestfailed", function() { console.log("adinitialplayrequestfailed event"); mayplay.loadAds(adTag); });'+
			'container.addEventListener("adloaded", function() { console.log("adloaded event"); var video_ad = document.querySelector(".rmp-ad-vast-video-player"); video_ad.defaultMuted = true; video_ad.muted = true; video_ad.controls = true; /*video_ad.loop = true;*/ });'+
			'container.addEventListener("adclosed", function() { console.log("adclosed event");} );'+
			'container.addEventListener("adimpression", function() { console.log("adimpression event"); var hb_res_uri = "https:\/\/tags\.h12-media\.com\/rtb\/default\.asp\?pname=hb_result_v3&impdata=57dAz3_qKWHet0VvlJ76h2RrpMlRFvwNqM4k10-5QCRUUoFUuUnY8BnOEanlM8srbQcJH5N-wtIT3krmJxCZePeIqyLWxLVHnmlCUvSYt8EhlQNRcwfzSK4QNZMtfi9hkY0QXpt5Zwsxn4Prk1aT-3QOjo8js9HP4-7Drulj86XyQtAiXkJqS0Y0XPfVWT5-SZej1d3bxkEUxPN40FCYFMGma7niwIYshdRZUopmvTLppHu1eTioNU-9OQVPo4tWelkTOO8OGxX8HFsaQPWmjoNfreSVQxgkzV82m0MnNkjWSHgDFHGczhlGxVlLNxc1DV8Voxf-ADbBzVvfsD_HAG6b5GLHCcyaSQushfx_ZstIQOt2MaHa-IMJlM6HFvtcjzUxLAtwfioImPOfKq3gS1El6ZS2bqunI8TQATPlZjdNzS528s6QvHpUyHykgCpXmIuVd2zuZSVyOH-DTSoGzdQ82&size=" + "video" + "&sizex=" + window.parent.winners_obj[0].size + "&wp=" + window.parent.winners_obj[0].cpm + "&bd=" + window.parent.winners_obj[0].bidderCode + "&d=videowrapper"; if ((window.parent.winners_obj[0].bidderCode != "h12media") && (window.parent.winners_obj[0].bidderCode != "h12")) {setTimeout(function() { window.parent.addscrtopage(hb_res_uri); },1000);} });'+
			'container.addEventListener("adcollapse", function() { console.log("adcollapse event");} );'+
			'container.addEventListener("adstarted", function() { console.log("adstarted event");} );'+
			'container.addEventListener("adcomplete", function() { console.log("adcomplete event");} );'+
			'container.addEventListener("adfirstquartile", function() { console.log("adfirstquartile event");} );'+
			'container.addEventListener("admidpoint", function() { console.log("admidpoint event");} );'+
			'container.addEventListener("addestroyed", function() { console.log("addestroyed event"); mayplay.loadAds(adTag); } );'+
			'</script>'+
			'</body></html>';
			
			var iframe = document.getElementById('postbid_container');
			var iframeDoc = document.getElementById('postbid_container').contentWindow.document;
			iframeDoc.open();
			iframeDoc.write(myvar);
			iframeDoc.close();
			iframe.sandbox = 'allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation';
			
			
			/*win_width = winners_obj[0].width; 
			win_height = winners_obj[0].height;*/
			win_width = 0;
			win_height = 0;
			
			try { 
				iframe.width = win_width;
				iframe.style.display='block';
				iframe.style.width=win_width+'px';
				iframe.style.height=win_height+'px';
				iframe.height = win_height;
			} catch(e) { ma_err('ad_render_vid_ifr ' + e.message); }
			
			
			/*scale me please, or if you cant, just fuck me please*/
			/*FREEDOM AND INDEPENDENCE FORM MY CHARACTER. - ATATURK.*/
			/*get max dimensions*/
			var _0x2e86=['840119pjtczE','adformat','marginLeft','balign','auction','7829QXEBuN','sticky','stickybottom','adtype','innerWidth','body','h12_vars','hidden','bottom','overflow','24601ERohtf','111IIolhM','h12slave','14860SHlXzi','19QgIyyS','scale(','document','win_width_new','adrefreshprocess','clientWidth','parent','adunitprocess','top\x20left','793194oZftYn','1060301LOTdea','40gLmuOS','2278716EjrASW','win_height_new','align'];var _0x56f6=function(_0x5d79ef,_0x6a2fd){_0x5d79ef=_0x5d79ef-0x92;var _0x2e86d1=_0x2e86[_0x5d79ef];return _0x2e86d1;};var _0x5918b9=_0x56f6;(function(_0x2b6085,_0x59e690){var _0x1e4c00=_0x56f6;while(!![]){try{var _0x16b463=-parseInt(_0x1e4c00(0x95))+-parseInt(_0x1e4c00(0xb1))+-parseInt(_0x1e4c00(0xb2))+-parseInt(_0x1e4c00(0xa5))*-parseInt(_0x1e4c00(0x9a))+-parseInt(_0x1e4c00(0xa4))*parseInt(_0x1e4c00(0xa8))+parseInt(_0x1e4c00(0xa7))*parseInt(_0x1e4c00(0xb3))+parseInt(_0x1e4c00(0x92));if(_0x16b463===_0x59e690)break;else _0x2b6085['push'](_0x2b6085['shift']());}catch(_0x10d36e){_0x2b6085['push'](_0x2b6085['shift']());}}}(_0x2e86,0x8ddee));h12_sizes_obj[win_width+'x'+win_height]=='v'&&(tagWidth=tagWidth_v,tagHeight=tagHeight_v);var adScl=tagWidth/win_width;adScl>0x2&&(adScl=0x2);adScl<0.75&&(adScl=0.75);adScl*win_height>tagHeight&&(adScl=tagHeight/win_height,adScl>0x2&&(adScl=0x2),adScl<0.75&&(adScl=0.75));var win_width_new=adScl*win_width,win_height_new=adScl*win_height,adSclStyle={'-moz-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-webkit-transform':'scale('+adScl+',\x20'+adScl+')','-o-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-ms-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-moz-transform-origin':'top\x20left','-webkit-transform-origin':_0x5918b9(0xb0),'-o-transform-origin':_0x5918b9(0xb0),'-ms-transform-origin':_0x5918b9(0xb0),'transform-origin':_0x5918b9(0xb0)};setStyle(iframe,adSclStyle);switch(h12_vars['adtype']){case'responsive':var tagWidth_fin=window[_0x5918b9(0x9e)]||window['document']['documentElement']['clientWidth']||window[_0x5918b9(0xaa)][_0x5918b9(0x9f)][_0x5918b9(0xad)];window['document'][_0x5918b9(0x9f)]['style'][_0x5918b9(0x97)]=(tagWidth_fin-win_width_new)/0x2+'px',window[_0x5918b9(0xaa)]['body']['style'][_0x5918b9(0xa3)]=_0x5918b9(0xa1);var cm_data={};cm_data[_0x5918b9(0xab)]=win_width_new,cm_data[_0x5918b9(0x93)]=win_height_new,window[_0x5918b9(0xae)][_0x5918b9(0xa6)][_0x5918b9(0xaf)](h12_vars,cm_data),setTimeout(function(){var _0x2a7c07=_0x5918b9;window[_0x2a7c07(0xae)]['h12slave'][_0x2a7c07(0xac)](window[_0x2a7c07(0xa0)]);},ADREFRESH_TIMEOUT),branding_left=win_width_new+(tagWidth_fin-win_width_new)/0x2-0x12;break;case _0x5918b9(0x9b):var cm_data={};cm_data['win_width_new']=win_width_new,cm_data[_0x5918b9(0x93)]=win_height_new,cm_data[_0x5918b9(0x9d)]=h12_vars[_0x5918b9(0x9d)],cm_data['auction']=h12_vars[_0x5918b9(0x99)];h12_vars[_0x5918b9(0x96)]=='stickysmart'&&(cm_data[_0x5918b9(0x94)]=sticky_smart_align,cm_data[_0x5918b9(0x98)]=h12_sizes_obj[win_width+'x'+win_height]);h12_vars['adformat']==_0x5918b9(0x9c)&&(cm_data[_0x5918b9(0x94)]=_0x5918b9(0xa2),cm_data['balign']='h');window['parent'][_0x5918b9(0xa6)][_0x5918b9(0xaf)](h12_vars,cm_data),setTimeout(function(){var _0x212202=_0x5918b9;window[_0x212202(0xae)]['h12slave'][_0x212202(0xac)](window[_0x212202(0xa0)]);},ADREFRESH_TIMEOUT),branding_left=win_width_new-0x12;break;}
			/*scale me please, or if you cant, just fuck me please*/
			
			try {
				document.getElementById('WVibDovP4b').style.left = branding_left + 'px';
				document.getElementById('WVibDovP4b').style.visibility = 'visible';
			} catch(ex) {}
		} catch(e) { ma_err('h12_init_vast_1 ' + e.message); }
	}
	
	pbjs.setConfig(
		{
			userSync:{
				userIds:[
					{name:'criteo'},
					{name:'sharedId',storage:{type:'cookie',name:'_sharedid',expires:990}},
					{name:'quantcastId'},
					{name:'amxId',storage:{type:'html5',name:'amxId',expires:29}},
					{name:'adtelligent'},
					{name:'uid2'},
					{name:'uid'},
					{name:'pubCommonId',storage:{type:'cookie',name:'_pubcid',expires:990}}
					],
					syncDelay:1500
			}
		}
	);
	
	pbjs.setConfig({
	  "schain": {
		"validation": "relaxed",
		"config": {
		  "ver":"1.0",
		  "complete": 1,
		  "nodes": [
			{
			  "asi":"h12-media.com",
			  "sid":"16489",
			  "hp":1
			}
		  ]
		}
	  }
	});	
        
	pbjs.addAdUnits(adUnits);
	pbjs.bidderSettings = {
			  standard: {storageAllowed: true},
			  criteo: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.99; }},
			  adtelligent: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.60; }},
			  eplanning: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.70; }},
			  oftmedia: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.80; }},
			  amx: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.85; }},
			  smilewanted: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.01; }},
			  connectad: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 0.01; }},
			  medianet: {bidCpmAdjustment : function(bidCpm, bid){ return bidCpm * 1; }}
	};
	pbjs.setConfig({useBidCache: true, bidderTimeout: 4000});
	pbjs.setBidderConfig({bidders: ['bizzclick','adkernel'],config: {timeout: 500,bidderTimeout:500}});

	pbjs.requestBids({
		timeout: 4000,
		bidsBackHandler: function(h12_bidresponses) {
							var iframe = document.getElementById('postbid_container');
							var iframeDoc = document.getElementById('postbid_container').contentWindow.document;
							/*var params = pbjs.getAdserverTargetingForAdUnitCode(window.doNotChange);*/
							var params = pbjs.getHighestCpmBids();
							/*console.log('P:',params);*/
							/*console.log('P2:',pbjs.getBidResponses());*/
							
							
							/*get bidders with no bids*/
							try {
								var h12_nobids = pbjs.getNoBids();
								for (var ix = 0; ix < potential_adunitnames.length; ix++) {
										if (h12_nobids.hasOwnProperty(potential_adunitnames[ix])) {
											var bids = h12_nobids[potential_adunitnames[ix]].bids;
											for (var i = 0; i < bids.length; i++) {
												var b = bids[i].bidder;
												if (!h12_nobids_bidders.includes(b)) { h12_nobids_bidders.push(b); }
											}
										}
								}
								/*console.log('output h12_nobids_bidders:',h12_nobids_bidders);*/
							} catch(ex) { console.log('no bids arr error ' + ex.message); }
							
							
							/*get bids from bidding adaptors for all ad units*/
							try {
								var responses = pbjs.getBidResponses();
								var output = [];
								for (var ix = 0; ix < potential_adunitnames.length; ix++) {
										if (responses.hasOwnProperty(potential_adunitnames[ix])) {
											var bids = responses[potential_adunitnames[ix]].bids;
											for (var i = 0; i < bids.length; i++) {
												var b = bids[i];
												output.push(b);
												
												/*ek, nobids section icin*/
												try {
													if (h12_nobids_bidders.includes(b.bidder)) { h12_nobids_bidders.splice(h12_nobids_bidders.indexOf(b.bidder),1); }
													if (nobidrepo.hasOwnProperty(b.bidder)) { 
														nobidrepo[b.bidder] = 0;
													}													
												} catch(ex) { console.log('err arr bidder nobids section'); }
											}
										}
								}
								params = output;
								console.log('output:',output);
							} catch(exi) { ma_err('bid_order ' + e.message); }
							
							
							/* update no bidders object at storage */
							try {
								for (var i = 0; i < h12_nobids_bidders.length; i++) {
									var bd_adaptor = h12_nobids_bidders[i];
									if (nobidrepo.hasOwnProperty(bd_adaptor)) { 
										nobidrepo[bd_adaptor] = Number(nobidrepo[bd_adaptor])+1;
									} else {
										nobidrepo[bd_adaptor] = 1;
									}
								}
								/*console.log('nobidrepo',nobidrepo);*/
								sessionStorage.nobidrepo = JSON.stringify(nobidrepo);
							} catch(ex) { console.log('no bids arr error 2 ' + ex.message); }


							if (params){
								try {
									
									var h12_adId = ''; var h12_ad_cpm = -1.01; window.adunitbids = []; 
									/*window.adunitbids = h12_bidresponses[window.doNotChange].bids; */
									window.adunitbids = params;
									window.adunitbids.sort(function(a, b) { return parseFloat(b.cpm) - parseFloat(a.cpm); }); 
									
									if (window.adunitbids.length > 0) { window.winners_obj = window.adunitbids; h12_adId = window.adunitbids[0].adId; h12_ad_cpm = window.adunitbids[0].cpm; h12_ad_width = window.adunitbids[0].width; h12_ad_height = window.adunitbids[0].height; } else { h12_ad_cpm = -1.01; console.log('NO BID ABEEEYY'); /*no bid*/ }
									var render_ad_id = h12_adId;
									var render_ad_cpm = h12_ad_cpm;

									
									
									if (render_ad_cpm >= 0.00) {
										try { console.log('w:',render_ad_cpm,'s:','0.00',window.adunitbids[0].mediaType,window.winners_obj[0].bidderCode); } catch(e) {}
										
										if (window.adunitbids[0].mediaType == 'video') {
											try {
												ma_err('v_bid_rec ' + window.adunitbids[0].bidderCode + ' ' + window.adunitbids[0].cpm);
												/*try { iframe.style.display='none'; } catch(e) { ma_err('ad_render_video_none ' + e.message); }*/
											
												window.vast_tag = window.winners_obj[0].vastXml;
												window.vast_url = window.winners_obj[0].vastUrl;
												if (typeof window.vast_tag === 'undefined' || window.vast_tag === null) { window.vast_tag = ''; }										
												if (typeof window.vast_url === 'undefined' || window.vast_url === null) { window.vast_url = ''; }
												
												if (window.vast_tag != '') {
													/*we need a url*/
													var xhr = new XMLHttpRequest();
													xhr.open('POST', 'https://tags.h12-media.com/v3/vast.asp?cm=xmltourl&b='+window.winners_obj[0].bidderCode+'&p='+window.winners_obj[0].cpm, true);
													xhr.setRequestHeader('Content-type', 'application\/x-www-form-urlencoded');												
													xhr.responseType = 'json';
													xhr.timeout = 4000;
													xhr.onreadystatechange = function() {
														var status = xhr.status;
														if (xhr.readyState === 4) {
															try {
																var resp = xhr.response;
																window.vast_url = resp.vasturl;
																h12_init_vast(window.winners_obj);
															} catch(e) {
																window.vast_url = '';
																ma_err('err_vast_xhr ' + e.message);
															}
														}
													}
													xhr.send('x='+encodeURIComponent(window.vast_tag));
												} else {
													h12_init_vast(window.winners_obj);
												}
											} catch(e) {
												ma_err('err_video_ren ' + e.message);
											}
											
										} else if (window.adunitbids[0].mediaType == 'native') {
										
											try {
											
												/*
												try {
													if (window.winners_obj[0].bidderCode == 'medianet') {
														ma_err('native_4 ' + window.adunitbids[0].cpm + ' ' + window.adunitbids[0].bidder + ' ' + JSON.stringify(window.adunitbids[0]));
													}
												} catch(e) {}
												*/
												window.hb_data = window.adunitbids[0].adserverTargeting;
												window.hb_data.hb_native_linkurl = window.rtb_clk_trk + window.winners_obj[0].bidderCode + '&redir=' + encodeURIComponent(window.hb_data.hb_native_linkurl);
												
												window.win_width = ntvw
												window.win_height = ntvh
												
												var return_html = window.rendermaAd();

												iframeDoc.open();
												iframeDoc.write(return_html);
												iframeDoc.close();

												try { 
													iframe.width = win_width;
													iframe.style.display='block';
													iframe.style.width=win_width+'px';
													iframe.style.height=win_height+'px';
													iframe.height = win_height;
												} catch(e) { ma_err('ad_render_ntv_ifr ' + e.message); }

												window.hb_imptrackers = [];
												window.hb_imptrackers = window.adunitbids[0].native.impressionTrackers;
												var hb_imptrklen = window.hb_imptrackers.length;
												for (var i = 0; i < hb_imptrklen; i++) {
													addimgtopage(window.hb_imptrackers[i]);
												}

												var hb_res_uri = window.hb_win_notice_url + '&size=' + win_width + 'x' + win_height + '&sizex=' + window.winners_obj[0].size + '&wp=' + window.winners_obj[0].cpm + '&bd=' + window.winners_obj[0].bidderCode + '&d=nativewrapper';
												if ((window.winners_obj[0].bidderCode != 'h12media') && (window.winners_obj[0].bidderCode != 'h12')) {setTimeout(function() { addscrtopage(hb_res_uri); },3000);}

												/*scale me please*/
												var _0x2e86=['840119pjtczE','adformat','marginLeft','balign','auction','7829QXEBuN','sticky','stickybottom','adtype','innerWidth','body','h12_vars','hidden','bottom','overflow','24601ERohtf','111IIolhM','h12slave','14860SHlXzi','19QgIyyS','scale(','document','win_width_new','adrefreshprocess','clientWidth','parent','adunitprocess','top\x20left','793194oZftYn','1060301LOTdea','40gLmuOS','2278716EjrASW','win_height_new','align'];var _0x56f6=function(_0x5d79ef,_0x6a2fd){_0x5d79ef=_0x5d79ef-0x92;var _0x2e86d1=_0x2e86[_0x5d79ef];return _0x2e86d1;};var _0x5918b9=_0x56f6;(function(_0x2b6085,_0x59e690){var _0x1e4c00=_0x56f6;while(!![]){try{var _0x16b463=-parseInt(_0x1e4c00(0x95))+-parseInt(_0x1e4c00(0xb1))+-parseInt(_0x1e4c00(0xb2))+-parseInt(_0x1e4c00(0xa5))*-parseInt(_0x1e4c00(0x9a))+-parseInt(_0x1e4c00(0xa4))*parseInt(_0x1e4c00(0xa8))+parseInt(_0x1e4c00(0xa7))*parseInt(_0x1e4c00(0xb3))+parseInt(_0x1e4c00(0x92));if(_0x16b463===_0x59e690)break;else _0x2b6085['push'](_0x2b6085['shift']());}catch(_0x10d36e){_0x2b6085['push'](_0x2b6085['shift']());}}}(_0x2e86,0x8ddee));h12_sizes_obj[win_width+'x'+win_height]=='v'&&(tagWidth=tagWidth_v,tagHeight=tagHeight_v);var adScl=tagWidth/win_width;adScl>0x2&&(adScl=0x2);adScl<0.75&&(adScl=0.75);adScl*win_height>tagHeight&&(adScl=tagHeight/win_height,adScl>0x2&&(adScl=0x2),adScl<0.75&&(adScl=0.75));var win_width_new=adScl*win_width,win_height_new=adScl*win_height,adSclStyle={'-moz-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-webkit-transform':'scale('+adScl+',\x20'+adScl+')','-o-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-ms-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-moz-transform-origin':'top\x20left','-webkit-transform-origin':_0x5918b9(0xb0),'-o-transform-origin':_0x5918b9(0xb0),'-ms-transform-origin':_0x5918b9(0xb0),'transform-origin':_0x5918b9(0xb0)};setStyle(iframe,adSclStyle);switch(h12_vars['adtype']){case'responsive':var tagWidth_fin=window[_0x5918b9(0x9e)]||window['document']['documentElement']['clientWidth']||window[_0x5918b9(0xaa)][_0x5918b9(0x9f)][_0x5918b9(0xad)];window['document'][_0x5918b9(0x9f)]['style'][_0x5918b9(0x97)]=(tagWidth_fin-win_width_new)/0x2+'px',window[_0x5918b9(0xaa)]['body']['style'][_0x5918b9(0xa3)]=_0x5918b9(0xa1);var cm_data={};cm_data[_0x5918b9(0xab)]=win_width_new,cm_data[_0x5918b9(0x93)]=win_height_new,window[_0x5918b9(0xae)][_0x5918b9(0xa6)][_0x5918b9(0xaf)](h12_vars,cm_data),setTimeout(function(){var _0x2a7c07=_0x5918b9;window[_0x2a7c07(0xae)]['h12slave'][_0x2a7c07(0xac)](window[_0x2a7c07(0xa0)]);},ADREFRESH_TIMEOUT),branding_left=win_width_new+(tagWidth_fin-win_width_new)/0x2-0x12;break;case _0x5918b9(0x9b):var cm_data={};cm_data['win_width_new']=win_width_new,cm_data[_0x5918b9(0x93)]=win_height_new,cm_data[_0x5918b9(0x9d)]=h12_vars[_0x5918b9(0x9d)],cm_data['auction']=h12_vars[_0x5918b9(0x99)];h12_vars[_0x5918b9(0x96)]=='stickysmart'&&(cm_data[_0x5918b9(0x94)]=sticky_smart_align,cm_data[_0x5918b9(0x98)]=h12_sizes_obj[win_width+'x'+win_height]);h12_vars['adformat']==_0x5918b9(0x9c)&&(cm_data[_0x5918b9(0x94)]=_0x5918b9(0xa2),cm_data['balign']='h');window['parent'][_0x5918b9(0xa6)][_0x5918b9(0xaf)](h12_vars,cm_data),setTimeout(function(){var _0x212202=_0x5918b9;window[_0x212202(0xae)]['h12slave'][_0x212202(0xac)](window[_0x212202(0xa0)]);},ADREFRESH_TIMEOUT),branding_left=win_width_new-0x12;break;}
												/*scale me please end*/												

												try {
													document.getElementById('WVibDovP4b').style.left = branding_left + 'px';
													document.getElementById('WVibDovP4b').style.visibility = 'visible';	
												} catch(ex) {}
												/*ma_err('ntv_rendered ' + window.adunitbids[0].cpm + ' ' + window.adunitbids[0].bidder + ' ' + JSON.stringify(window.adunitbids[0]));*/
												
											} catch(e) { ma_err('ad_render_native ' + e.message + ' ' + JSON.stringify(window.adunitbids[0])) }
											
										} else {
										
											/*
											try {
												if (window.winners_obj[0].bidderCode == 'medianet') {
													if (window.winners_obj[0].width < 10) {
														ma_err('banner_m_net ' + window.adunitbids[0].cpm + ' ' + window.adunitbids[0].bidder + ' ' + JSON.stringify(window.adunitbids[0]));
													}
												}
											} catch(e) {}
											*/
											
											try {
												/*ma_err(JSON.stringify(h12_bidresponses));*/ /*not rendered bids*/
												pbjs.renderAd(iframeDoc, render_ad_id);
												
												try {
													if (window.winners_obj[0].bidderCode != 'h12media') {
														/*ma_err(window.winners_obj[0].bidderCode + ' ' + window.winners_obj[0].ad);*/
													}
													
													if (window.winners_obj[0].bidderCode == 'adkernel') {
														iframe.sandbox = 'allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation';
													} else {
														iframe.sandbox = 'allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-same-origin';
													}
												} catch(e) {}
												
												
												
												/*var winners_obj = pbjs.getAllWinningBids();*/ /*fresh data with correct size*/
												/*var winners_obj = window.adunitbids;*/ /*fresh data with correct size*/
												/*console.log('WO:',winners_obj);*/
												
												/* ----------------- */
												/*if (params['hb_size'] == '1x1') { win_width = '0'; win_height = '0'; } else { win_width = winners_obj[0].width; win_height = winners_obj[0].height; }*/
												win_width = window.winners_obj[0].width; 
												win_height = window.winners_obj[0].height;
												
												try { 
													iframe.width = win_width;
													iframe.style.display='block';
													iframe.style.width=win_width+'px';
													iframe.style.height=win_height+'px';
													iframe.height = win_height;
												} catch(e) { ma_err('ad_render_ban_ifr ' + e.message); }
												
												var hb_res_uri = 'https:\/\/tags\.h12-media\.com\/rtb\/default\.asp\?pname=hb_result_v3&impdata=57dAz3_qKWHet0VvlJ76h2RrpMlRFvwNqM4k10-5QCRUUoFUuUnY8BnOEanlM8srbQcJH5N-wtIT3krmJxCZePeIqyLWxLVHnmlCUvSYt8EhlQNRcwfzSK4QNZMtfi9hkY0QXpt5Zwsxn4Prk1aT-3QOjo8js9HP4-7Drulj86XyQtAiXkJqS0Y0XPfVWT5-SZej1d3bxkEUxPN40FCYFMGma7niwIYshdRZUopmvTLppHu1eTioNU-9OQVPo4tWelkTOO8OGxX8HFsaQPWmjoNfreSVQxgkzV82m0MnNkjWSHgDFHGczhlGxVlLNxc1DV8Voxf-ADbBzVvfsD_HAG6b5GLHCcyaSQushfx_ZstIQOt2MaHa-IMJlM6HFvtcjzUxLAtwfioImPOfKq3gS1El6ZS2bqunI8TQATPlZjdNzS528s6QvHpUyHykgCpXmIuVd2zuZSVyOH-DTSoGzdQ82&size=' + win_width + 'x' + win_height + '&sizex=' + window.winners_obj[0].size + '&wp=' + window.winners_obj[0].cpm + '&bd=' + window.winners_obj[0].bidderCode + '&d=jswrapper';
												
												if ((window.winners_obj[0].bidderCode != 'h12media') && (window.winners_obj[0].bidderCode != 'h12')) {setTimeout(function() { addscrtopage(hb_res_uri); },3000);}
												
												/*scale me please, or if you cant, just fuck me please*/
												/*FREEDOM AND INDEPENDENCE FORM MY CHARACTER. - ATATURK.*/
												/*get max dimensions*/
												var _0x2e86=['840119pjtczE','adformat','marginLeft','balign','auction','7829QXEBuN','sticky','stickybottom','adtype','innerWidth','body','h12_vars','hidden','bottom','overflow','24601ERohtf','111IIolhM','h12slave','14860SHlXzi','19QgIyyS','scale(','document','win_width_new','adrefreshprocess','clientWidth','parent','adunitprocess','top\x20left','793194oZftYn','1060301LOTdea','40gLmuOS','2278716EjrASW','win_height_new','align'];var _0x56f6=function(_0x5d79ef,_0x6a2fd){_0x5d79ef=_0x5d79ef-0x92;var _0x2e86d1=_0x2e86[_0x5d79ef];return _0x2e86d1;};var _0x5918b9=_0x56f6;(function(_0x2b6085,_0x59e690){var _0x1e4c00=_0x56f6;while(!![]){try{var _0x16b463=-parseInt(_0x1e4c00(0x95))+-parseInt(_0x1e4c00(0xb1))+-parseInt(_0x1e4c00(0xb2))+-parseInt(_0x1e4c00(0xa5))*-parseInt(_0x1e4c00(0x9a))+-parseInt(_0x1e4c00(0xa4))*parseInt(_0x1e4c00(0xa8))+parseInt(_0x1e4c00(0xa7))*parseInt(_0x1e4c00(0xb3))+parseInt(_0x1e4c00(0x92));if(_0x16b463===_0x59e690)break;else _0x2b6085['push'](_0x2b6085['shift']());}catch(_0x10d36e){_0x2b6085['push'](_0x2b6085['shift']());}}}(_0x2e86,0x8ddee));h12_sizes_obj[win_width+'x'+win_height]=='v'&&(tagWidth=tagWidth_v,tagHeight=tagHeight_v);var adScl=tagWidth/win_width;adScl>0x2&&(adScl=0x2);adScl<0.75&&(adScl=0.75);adScl*win_height>tagHeight&&(adScl=tagHeight/win_height,adScl>0x2&&(adScl=0x2),adScl<0.75&&(adScl=0.75));var win_width_new=adScl*win_width,win_height_new=adScl*win_height,adSclStyle={'-moz-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-webkit-transform':'scale('+adScl+',\x20'+adScl+')','-o-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-ms-transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','transform':_0x5918b9(0xa9)+adScl+',\x20'+adScl+')','-moz-transform-origin':'top\x20left','-webkit-transform-origin':_0x5918b9(0xb0),'-o-transform-origin':_0x5918b9(0xb0),'-ms-transform-origin':_0x5918b9(0xb0),'transform-origin':_0x5918b9(0xb0)};setStyle(iframe,adSclStyle);switch(h12_vars['adtype']){case'responsive':var tagWidth_fin=window[_0x5918b9(0x9e)]||window['document']['documentElement']['clientWidth']||window[_0x5918b9(0xaa)][_0x5918b9(0x9f)][_0x5918b9(0xad)];window['document'][_0x5918b9(0x9f)]['style'][_0x5918b9(0x97)]=(tagWidth_fin-win_width_new)/0x2+'px',window[_0x5918b9(0xaa)]['body']['style'][_0x5918b9(0xa3)]=_0x5918b9(0xa1);var cm_data={};cm_data[_0x5918b9(0xab)]=win_width_new,cm_data[_0x5918b9(0x93)]=win_height_new,window[_0x5918b9(0xae)][_0x5918b9(0xa6)][_0x5918b9(0xaf)](h12_vars,cm_data),setTimeout(function(){var _0x2a7c07=_0x5918b9;window[_0x2a7c07(0xae)]['h12slave'][_0x2a7c07(0xac)](window[_0x2a7c07(0xa0)]);},ADREFRESH_TIMEOUT),branding_left=win_width_new+(tagWidth_fin-win_width_new)/0x2-0x12;break;case _0x5918b9(0x9b):var cm_data={};cm_data['win_width_new']=win_width_new,cm_data[_0x5918b9(0x93)]=win_height_new,cm_data[_0x5918b9(0x9d)]=h12_vars[_0x5918b9(0x9d)],cm_data['auction']=h12_vars[_0x5918b9(0x99)];h12_vars[_0x5918b9(0x96)]=='stickysmart'&&(cm_data[_0x5918b9(0x94)]=sticky_smart_align,cm_data[_0x5918b9(0x98)]=h12_sizes_obj[win_width+'x'+win_height]);h12_vars['adformat']==_0x5918b9(0x9c)&&(cm_data[_0x5918b9(0x94)]=_0x5918b9(0xa2),cm_data['balign']='h');window['parent'][_0x5918b9(0xa6)][_0x5918b9(0xaf)](h12_vars,cm_data),setTimeout(function(){var _0x212202=_0x5918b9;window[_0x212202(0xae)]['h12slave'][_0x212202(0xac)](window[_0x212202(0xa0)]);},ADREFRESH_TIMEOUT),branding_left=win_width_new-0x12;break;}
												/*scale me please, or if you cant, just fuck me please*/
												
												try {
													document.getElementById('WVibDovP4b').style.left = branding_left + 'px';
													document.getElementById('WVibDovP4b').style.visibility = 'visible';
												} catch(ex) {}
												
											} catch(e) { ma_err('ad_render_banner ' + e.message) }
											 
										}
									} else {
										JSPBack();
										console.log('pbid:',render_ad_cpm,'srv:','0.00','lost auction');
									}
								} catch(e) { JSPBack(); ma_err('ad_render ' + e.message); console.log(e.message); }
							} else {
								JSPBack();
								console.log('no-bid');
							}
		}
	});
	pbjs.initAdserverSet=true;																	
});



var prebid_script = document.createElement('script');
prebid_script.src = 'https:\/\/f\.h12-media\.com\/v3\/prebid3_2\.1\.js\?v=14102023-2';
prebid_script.async = true;
document.getElementsByTagName('head')[0].appendChild(prebid_script);

setTimeout(function() { if (pbjs.initAdserverSet != true) {
	/*try { pbjs.processQueue(); } catch(e) {ma_err('prebid '+e.message);}*/
	/*pbjs = {}; pbjs.initAdserverSet = true;*/	JSPBack();

}}, FAILSAFE_TIMEOUT);

window.rtb_clk_trk = 'https:\/\/bidder\.h12-media\.com\/rtb\/default\.asp\?pname=pb_clk&impdata=57dAz3%5FqKWHet0VvlJ76h2RrpMlRFvwNqM4k10%2D5QCRUUoFUuUnY8BnOEanlM8srbQcJH5N%2DwtIT3krmJxCZePeIqyLWxLVHnmlCUvSYt8EhlQNRcwfzSK4QNZMtfi9hkY0QXpt5Zwsxn4Prk1aT%2D3QOjo8js9HP4%2D7Drulj86XyQtAiXkJqS0Y0XPfVWT5%2DSZej1d3bxkEUxPN40FCYFMGma7niwIYshdRZUopmvTLppHu1eTioNU%2D9OQVPo4tWelkTOO8OGxX8HFsaQPWmjoNfreSVQxgkzV82m0MnNkjWSHgDFHGczhlGxVlLNxc1DV8Voxf%2DADbBzVvfsD%5FHAG6b5GLHCcyaSQushfx%5FZstIQOt2MaHa%2DIMJlM6HFvtcjzUxLAtwfioImPOfKq3gS1El6ZS2bqunI8TQATPlZjdNzS528s6QvHpUyHykgCpXmIuVd2zuZSVyOH%2DDTSoGzdQ82&bd=';


try {
	window.rendermaAd=function(){
		var data = window.hb_data;	
		var template = '<html dir="ltr"><head><link rel="stylesheet" href="https:\/\/tags\.h12-media\.com\/v3\/s\.css"><title>Native Ad<\/title><\/head><body><div style=\'background-color: white; width: 970px; height: 88px; border: 0px solid #cecbcb; display: table; clear: both; margin: 0px; padding: 0px; overflow: hidden;\'><!-- CONTAINER --><div style=\'cursor: pointer; display: table-cell; vertical-align: top; width: 968px; height: 88px; margin: 0px; padding: 0px; overflow: hidden; border: 1px solid #d3d3d3\' onclick=\'window\.open("##hb_native_linkurl##")\'><!-- ROW CLICK BUNA -->	<div style=\'width: 388px; height: 88px; border-radius: 0px; display: table-cell; text-align: center; background-size: cover; background-image: url("##hb_native_image##"); background-repeat: no-repeat; background-position: 50%; background-size: contain; -webkit-animation: test 4s infinite; animation: test 4s infinite; -webkit-filter: saturate(1\.2); -moz-filter: saturate(1\.2); -o-filter: saturate(1\.2); -ms-filter: saturate(1\.2); filter: saturate(1\.2); \'><\/div>	<div style=\'width: 485px; height: 88px; display: table-cell; padding: 5px;color:black; background-color: white; border-radius: 0px; text-overflow: ellipsis; display: table-cell; overflow: hidden; vertical-align:middle; text-align: left; font-family: -webkit-pictograph, sans-serif, Roboto, Geneva, Verdana; text-shadow: 0px 0px 2px #0000006b;\'><div class=\'ad_title\'>##hb_native_title##<\/div> <div class=\'ad_desc\'>##hb_native_body##<\/div> <div class=\'ad_brand\'>##hb_native_brand##<img id=\'checkmark\' class=\'size20\' src=\'data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC3FBMVEUAAAAcqv8covEdovMdovEcofIdovIdofIdofIdofIdofEeofMcn\/EcoPIcofEdofIeofIbofIkpO0eoPEdovIdofIeofEime4bpPYcofMdofIeofIcovManvYapvIdovIA\/\/8eoPEdofIAgP8aou4dovIdofIeofMeofEgn\/8dofIXougdoPMdofIUnesameYdofIdoPIzmf8eofIcovIdoPIcofEdoPMbofIdofIdofIcofEdofIdofIVquodoPEdofMdovAdofIdofIepPMdofMdofEdoPIdofIdofIcofIcovIcovEcofEdoPAdovIdofMcofIdofIdofIdofMdoPIdofIcofIeoPIcofIdoPAeofIdofIdofIdoPMfo\/IAqv8dofIbn\/EdoPIdoPMdofIcofIcofEcofIdofIdofIdofIdofIbofMrqv8dovIAv\/8dofIeofIbn\/Qfo\/AdofIdoPEkkv8gn\+8dofIcovIdofIeoPEeoPMdofIdofIdofIeovIeo\/AdofMdoPIhpvQdoPEdofIcnPEgn\+8cofMeovIcofIfoPEeovMdofIdofIeofIdofIdovMdovEdoPEeofIdofMcofIdofIdofEdofIcofEdofMdofIdofIdofIgn\/QbofIcovIao\/IdoPMdofIeofEeovIfovAdoPIdo\/IdovEdofMdofIdofIcn\/EdofMdofIdoPIcofYeoPIdovIcofIeofIdovIcofIeovEdovMeofQdovIdofEXovMdofIeoPMfovMdnfUcoPMdofIdovIeoPMdofMdofIdovMdn\/EcovMdo\/Ico\/Efoe8dofIeovIeoPAeofIeofMdofIepfAcoPEeoPIdovMbo\/QfovMdofIeofIdofEdoPMeovEeofIdovIYnvMcofQcofIdofMhpe8doPIcovMgn\/IeovMdofIeofIfo\/UenvAdoPIdofL\/\/\/\+HstLUAAAA8nRSTlMACTdolrPS6u7\+lWcldrz3dyYObsrLbw8ckPHykR0UjgFe7wIev8FUgAiuC7rADQrEwgW1tJxsaTn6\+Tba3AyXkzT9ySpXqOj05b2ZSlxGc7nX3\/jh1ceieVEjo\+fQjzoD2TiMzfzgSauwqt72QQZgBNtfMDKNhAcg7GNygWb71JhNRX10F5SLEhB\/eOlLpJ7zTMNYg6e\+uMXW4uPOpqCFTxgTZSc\+5s88IU49R\/XtsUiltmEbO7dkm\/CIcGtE3bsWnSspGlN6oVZqrSw1flAkMeSsM5qS6xFbiXsvQtPYgnxdioYVLnXMH68\/KFXIxhkishqlyvoAAAABYktHRPOssb7uAAAAB3RJTUUH5QsXFhkh\/4EYIgAACXBJREFUeNrtnflDVEUcwAcV3M10zQRlhXzspoJ4FInCcqTrAaWZB2qmGaCrJGqYKWmJVwqWlh2mRlEqYYeSlRea2Y2VHVbafd9lVt\+\/oCWDiAXfMd\+ZN\/N8nx\+Fnbcf58v3zZv3nRlCbGxsbGxsbGxsbGxsbGy4E9aqdZvwiLYOp9PRNiL8vHatwqxse377Di5ogqtDxwusadvpws7QApFRXSyn2zXaDWehW0yspXQv6u4CFVzdL7KMrhLXFjTgifJaw\/fiHqCRnhdbwbeXAzTj6SV\/OMc7QQ8xkod1Qm\/QSe8EmX0T\+4Bu\+vaT17f\/JWCAS\/vL6pt0GRhiQJKkwslgkGQ5fQeCYQbJ6JuSalzYlyZhgk4HCjIypRO\+HKgYLJvvED\+dsF\+yoPYOBUoiRR1jDhseP2JoRlY2OK5Iv3Jk\+1Fn5i6uAmqG\/9NQv9FXtxkzdpxjvCNnwsRJ10y\+1tzn\+rgpU0Ni8bpp1yu5efTCE7xK\/vQZgab\/PDN5uEnzQbmzCnwtfNecGwCB2YUt\/GDOlLkKd915g3LARNJvLOKqW9TOVN065t\/EMastiAQBmHEzr4e\+hQEQgtRFxVzm5CJBGGbcwt53lAMEYvFo5s98fhCKwBK2vu1BNJy3svS9DQTkGna\+S0FImM2PjCoRUziVUeZakA2C4h7G5CVCBAjLMhaFE8tBYKbh\+64Q2RecK9EDepzQwpCBPaxeBYJzO65v12zRhd2rUYXXgPCUYvqWZYsv3G0tovAdIAF3Ir7oXSeD8BW5aMLrQQrw7sV3ySF8N9qs3QY5hN1YI\+p7QBKwHhNLZRFehCQ8VBbhe3F8M0tkEfbh\/BHngzTgvHyJk0f4PhTh\+\+URXoUivFEe4Ukowg\/II7wJRbizPMKbUYS3yCMcgSL8oDzC41CEy8814Tx5hJehCD8kj\/BQFOFL5RG\+EkX4YXmEK1CEH\+H\+vZ2zH92qbFuZrLumPh5FeDtv3\/L8f69cqfcN7Y0owo9x9q3q2nDpfjv0fTQFRTiR7wSA\/\/FG137CpeejPqRlfDu4Ci\/837Wj\+d\+VqNdr6CPv\/9M0aXo\+G4Mk\/CTPgH6qSRm6nkLWnVgT8bvMCugg1do\/2w2tCuBpswJaXw8XYFX7R3nMCmh9U6aejihZegXHav\/uIVfXlaWhcDe17rZnzMvQddXoLp1NVFDWAQwpNDFDB3lWdyM5\+TS\+rVM5\+jYT0EsMtDL\+OcO6SjzXIVZoQO8xttwgRjHm672b7xh6b8h\/\+D6DTS03ZKxwriYNGXKQ\/YbbOmBkEVcMX9\+8kM0sYmuMt3ZQv\+8hvr4oGboRz\+v1Pcx59RlOhv6Pkqf0\+a6u4uv7QmJIhqYcz07dqithHeEc0I\+jZegGLhN53g4zQzcQp913aw1f33TUDF1P9YuahV\+SO0PX00bzAiXOGXoacoZuyNQvaxS\+ga8vfoauZ4Q231f8lgjoIAFtm8BWWCOg6xipxbfLLosEdJANWvbXG8g3oEOHHJsQm9\+uQXiiyWPo\/ZjN91X3fdVpmYCuCyD1EXVrCwV0EPU9EQosFNBBnlF9TsriGdCZbAM6SJWa8PmWCugganu5vGapgA6yQpxVhhwCOsjrKsL8XiWFjqEZBDRArYpwX4wxe1W5T\/23ohmOoRtxREU4nfoKkUeDA9ji0QNUfm0\+k1mOUCaoCFfTBmrH\+tccr2ULENAAWSrCtI9KbzR6eV9jfkADuFXGHZQP\/282bqxVjekBDZDKVvgtosmYW0ADlKiE9Byq1sc2aa0l42geQ44zdFMRptvxbnbT5tJqzA1ogHVMb0svhbSX5jE1oNVvSz2pWg8nWow5BjRAB6ZDy8W5oS0e85gY0OpDy7fpmn\+HqBpzDWj17Ux60TW\/pb\+qcQzPgAZ4UkX4Xcr2C5orJxniMSugAVSPcKJ99b\+xqJlG32sYovsfw3\/1fTaOq07ivU\+dJZrtY4c5AQ0bVYXpr998Hy\/\+52eFXGY5GqFeBrDaz9CYd0BDQMNRe5sR7n3NRfUHDv4BDQ9oqaDF\+Mtpro8XLOYe0JqWqq11AaM\+vnkv1yFHkA2azrj5EFj1MffyqBOaKgAq\/byMWQd0QONBJ71RrlarWsLLOqDhYY1VPJU4qytV\+5h1QAcqORemqfRxrJuxsObCNLLtJLDvY8ZDDoCsj\/gXl56tjxkPOQA\+1lM\+HA6s\+5h1hobe\+grE1zHuY\+YZurxMX0n8Xh\/bPmadoV26D5lDq09rto\+ZZ2gDy9M\+AXZ9zDxDG9krTklm18esM\/QJYgQlmlUfs87Qgw0uPlQWseljZQxTXeenxpfTxo1nYdyOqe\+co1QLpjOwjP\+L6rk\+lr5jP6NbIt6pFumL9KlfVLOE5W7VzgP05\/juRNoTz12a0iWhcj\/TcuyZnxMEJNpArBbDV6adS8egCH8hj\/AOFOEMeYS\/RBE\+Lo9wDoqwRFu1FqIIn3Ob8Z5z2y2fcxtqS7RlOs7A4yt5hL9GEf5GHuGjKML58gi\/hyKcmSqL73iknUulOZymJ44v\+VYW4a\+QhNfLInwYSTjBLYevA23n0klyCH\+I5UtmySE8F004KUsG3\/JcNGHxD\+OtA\/NA3jIJTj50d0EUJifEF\/4O05fsEb6LPd\+jCpNPRReOwvUlxeli\+25JQhYm650i\+\/o\/J\+i0EVm4FN\+XJESI6\/vQPAbC5AdhM7WnkjBhlqCntqauJIzYLqZwO8KMeBF9OxKG\/Cjczcl5iDDlDb9YviXPEcbsrhbJ9\+RhwpxYgd4m\/vQz4UBYqSC3J99txYQPPwgxNb\/5ZcKN3P3jzNbNu8pLeDJvqanKeTflEt54d45oaR3qTJQjuH5p6aCn7NpfFWIKZR9XhNQ0BWZMz1eK5iM80ucqKdN\/CsmPhSN7dSJm8tupVRt\/T5\+aDY7jeUcuv33nmQ2O4\+iF7zvzrvbwoTX7vnjB4XLkLDtdcec7TxAx8VLfrCO9RCpSKAfd\/jQiGZTrzAfL5ksSqaY5MzKlEyZ7KUpDfMeIhEQJOYfBEsPnJxyQ05ckPWvMN7xIUmGSeNqIb98wIi2JBg6q6pFJJCZM90E3BcVEapR4XUMu50EvkZ1THu2\+1ZOJBfhZ8\+agPWKJJVDi2mrq3igvsQrbFqpu0rXrkzJiJfZMO2vBZs30P4jV6Dewpcld58RBmcSSvPtjn5ANu3dtuvpPYmGKjy1dE37dVIc\/4Kja8deJ7R\/MIzY2NjY2NjY2NjY2NjY23PkbZOBHRJNKytcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTEtMjNUMjI6MjU6MzMrMDA6MDDU1YMEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTExLTIzVDIyOjI1OjMzKzAwOjAwpYg7uAAAAABJRU5ErkJggg==\'><\/img><\/div><\/div>	<div style=\'width: 97px; height: 88px; display: table-cell; text-align: center; vertical-align: middle; padding: 0px; background-color: #ededed;\'><div class=\'arr right\'><\/div><\/div><\/div><\/div><style>\.arr { font-size: 19px; } \.ad_title { font-size: 19px; font-weight: bold; }\.ad_desc { display: none; font-size: 20px; font-weight: normal; }\.ad_brand { font-size: 13px; font-weight: normal; color: gray;}@-webkit-keyframes test {50% {background-size: 125%;} } \r\n@keyframes test {50% {background-size: 125%;}}<\/style><\/body><\/html>';

		for (var key in data) {
		  if (data.hasOwnProperty(key)) {
			var val = data[key];
			template = template.replace("##"+key+"##",val);
		  }
		}
		
		return template;
	}
} catch(e) { ma_err('ad_render_ntv ' + e.message); }