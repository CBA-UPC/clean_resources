
export function initGemius(){this.playerState['prismHitcollector']=this.playerConfig['gemius']['PRISM_HITCOLLECTOR']||this.playerConfig['gemius']['PARTNER_PRISM_HITCOLLECTOR']||'';this.loadGemiusPrism();this.initPPGemius();if(this.playerConfig['gemius']&&this.playerConfig['gemius']['use_prism']==1){if(this.playerConfig['gemius']['PRISM_IDENTIFIER']&&this.playerConfig['gemius']['PRISM_IDENTIFIER'].length>0){this.reInitPrismPlayer(this.playerConfig['gemius']['PRISM_IDENTIFIER']);}
if(this.playerConfig['gemius']['PARTNER_PRISM_IDENTIFIER']&&this.playerConfig['gemius']['PARTNER_PRISM_IDENTIFIER'].length>0){this.reInitPartnerPrismPlayer(this.playerConfig['gemius']['PARTNER_PRISM_IDENTIFIER']);}}}
export function initPPGemius(){if(this.playerConfig['gemius']['pp_gemius_identifier']&&this.playerConfig['gemius']['pp_gemius_identifier'].length>0){window.pp_gemius_identifier=this.playerConfig['gemius']['pp_gemius_identifier'];function gemius_pending(i){window[i]=window[i]||function(){var x=window[i+'_pdata']=window[i+'_pdata']||[];x[x.length]=arguments;};};gemius_pending('gemius_hit');gemius_pending('gemius_event');gemius_pending('pp_gemius_hit');gemius_pending('pp_gemius_event');try{var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0],l='http'+((location.protocol=='https:')?'s':'');gt.setAttribute('async','async');gt.setAttribute('defer','defer');gt.src=l+'://gabg.hit.gemius.pl/xgemius.js';s.parentNode.insertBefore(gt,s);}catch(e){console.log(e);}}}
export function loadGemiusPrism(){function gemius_player_pending(obj,fun){obj[fun]=obj[fun]||function(){var x=window['gemius_player_data']=window['gemius_player_data']||[];x[x.length]=[this,fun,arguments];};};if(this.playerConfig['gemius']&&this.playerConfig['gemius']['use_prism']==1){gemius_player_pending(window,"GemiusPlayer");gemius_player_pending(GemiusPlayer.prototype,"newProgram");gemius_player_pending(GemiusPlayer.prototype,"newAd");gemius_player_pending(GemiusPlayer.prototype,"adEvent");gemius_player_pending(GemiusPlayer.prototype,"programEvent");gemius_player_pending(GemiusPlayer.prototype,"setVideoObject");var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0],l='http'+((location.protocol=='https:')?'s':'');gt.setAttribute('async','async');gt.setAttribute('defer','defer');gt.src=l+'://'+this.playerState['prismHitcollector']+'.hit.gemius.pl/gplayer.js';s.parentNode.insertBefore(gt,s);}}
export function reInitPrismPlayer(PrismId){try{this.prismplayer=new GemiusPlayer("OnNetwork_Player.8.6",PrismId,{"currentDomain":this.playerConfig['wdomain'],volume:this.playerConfig['volume']});this.prismplayer.setVideoObject(this.UI.video);}catch(e){console.log("Prism GemiusPlayer exception");}}
export function reInitPartnerPrismPlayer(PrismId){try{this.partnerprismplayer=new GemiusPlayer("OnNetwork_Player.8.6",PrismId,{"currentDomain":this.playerConfig['wdomain'],volume:this.playerConfig['volume']});this.partnerprismplayer?.setVideoObject(this.UI.video);}catch(e){console.log("Partner Prism GemiusPlayer exception");}}
export function processGemiusQueue(){if(Array.isArray(this.gemiusQueue)&&this.gemiusQueue.length>0){while(this.gemiusQueue.length>0){var gemiusQueueItem=this.gemiusQueue.shift();if(gemiusQueueItem){this.signalGemiusFromQueue(gemiusQueueItem);}}}}
export function signalGemiusFromQueue(gemiusQueueItem){if(!gemiusQueueItem){return;}
if(this.playerConfig['gemius']&&this.playerConfig['gemius']['use_prism']!=1){return;}
if((gemiusQueueItem.event=="videoplay")&&(this.playerState['gemius']['lastevent']=="videoplay")){return;}
if((gemiusQueueItem.event=="videopause")&&(this.playerState['gemius']['lastevent']=="videostopped")){return;}
this.playerState['gemius']['lastevent']=gemiusQueueItem.event;switch(gemiusQueueItem.event){case"adstart":this.playerState['gemius']['cadid']=gemiusQueueItem.cadid;if(gemiusQueueItem.addp.adDuration){this.playerState['gemius']['lastADD']=gemiusQueueItem.addp.adDuration;}else{this.playerState['gemius']['lastADD']=0;}
if(this.prismplayer){try{this.prismplayer.newAd(this.playerState['gemius']['cadid'],gemiusQueueItem.addp);this.prismplayer.adEvent(gemiusQueueItem.programId,this.playerState['gemius']['cadid'],gemiusQueueItem.adoffset,"play",gemiusQueueItem.po);}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.newAd(this.playerState['gemius']['cadid'],gemiusQueueItem.addp);this.partnerprismplayer.adEvent(gemiusQueueItem.programId,this.playerState['gemius']['cadid'],gemiusQueueItem.adoffset,"play",gemiusQueueItem.po);}catch(qwer){console.log(qwer);}}
break;case"adChngVol":if(this.prismplayer){try{this.prismplayer.adEvent(gemiusQueueItem.programId,gemiusQueueItem.cadid,gemiusQueueItem.adoffset,"chngVol",gemiusQueueItem.ao);}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.adEvent(gemiusQueueItem.programId,gemiusQueueItem.cadid,gemiusQueueItem.adoffset,"chngVol",gemiusQueueItem.ao);}catch(qwer){console.log(qwer);}}
break;case"break":case"pause":case"play":case"skip":case"complete":if(this.prismplayer){try{this.prismplayer.adEvent(gemiusQueueItem.programId,gemiusQueueItem.cadid,gemiusQueueItem.adoffset,gemiusQueueItem.event);}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.adEvent(gemiusQueueItem.programId,gemiusQueueItem.cadid,gemiusQueueItem.adoffset,gemiusQueueItem.event);}catch(qwer){console.log(qwer);}}
break;case"videoset":if(gemiusQueueItem.pp.transmissionType==2){this.playerState['gemius']['lastPlayTS']=gemiusQueueItem.lastPlayTS;}
try{this.prismplayer?.newProgram(gemiusQueueItem.programId,gemiusQueueItem.pp);}catch(qwer){console.log(qwer);}
try{this.partnerprismplayer?.newProgram(gemiusQueueItem.programId,gemiusQueueItem.pp);}catch(qwer){console.log(qwer);}
break;case"chngVol":if(this.prismplayer){try{this.prismplayer.programEvent(gemiusQueueItem.programId,gemiusQueueItem.offset,"chngVol",gemiusQueueItem.ao);}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.programEvent(gemiusQueueItem.programId,gemiusQueueItem.offset,"chngVol",gemiusQueueItem.ao);}catch(qwer){console.log(qwer);}}
break;case"videostop":case"videopause":case"videocomplete":case"videoseek":case"videobuffer":if(this.prismplayer){try{this.prismplayer.programEvent(gemiusQueueItem.programId,gemiusQueueItem.offset,gemiusQueueItem.event.substr(5));}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.programEvent(gemiusQueueItem.programId,gemiusQueueItem.offset,gemiusQueueItem.event.substr(5));}catch(qwer){console.log(qwer);}}
break;case"videoplay":if(this.prismplayer){try{this.prismplayer.programEvent(gemiusQueueItem.programId,gemiusQueueItem.offset,gemiusQueueItem.event.substr(5),gemiusQueueItem.ao);}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.programEvent(gemiusQueueItem.programId,gemiusQueueItem.offset,gemiusQueueItem.event.substr(5),gemiusQueueItem.ao);}catch(qwer){console.log(qwer);}}
break;}}
export function signalGemius(event,ad=null){if(this.playerConfig['gemius']&&this.playerConfig['gemius']['use_prism']!=1){return;}
if((event=="videoplay")&&(this.playerState['gemius']['lastevent']=="videoplay")){return;}
if((event=="videopause")&&(this.playerState['gemius']['lastevent']=="videostopped")){return;}
this.playerState['gemius']['lastevent']=event;switch(event){case"adstart":this.playerState['gemius']['cadid']=Date.now();var cadname=this.getCAdName(ad);var addp={'adName':cadname,adType:(this.currentVideo.sponsoredType>1?"sponsor":"spot"),volume:100*this.getVolume(),};this.playerState['gemius']['lastADD']=0;if(ad){try{addp.adDuration=ad.getDuration();this.playerState['gemius']['lastADD']=addp.adDuration;}catch(e){console.log(e);}
if(this.isAudio(ad)){addp.adFormat=2;}}
var po={autoPlay:(this.reportuserinitplay?false:true),volume:100*this.getVolume(),adPosition:this.adsPlayed(),breakSize:this.currentBlockSize()};if(this.prismplayer){try{this.prismplayer.newAd(this.playerState['gemius']['cadid'],addp);this.prismplayer.adEvent(this.currentVideo.programID||this.currentVideo.id,this.playerState['gemius']['cadid'],this.getCurrentOffsetAD(),"play",po);}catch(qwer){console.log(qwer);}}
if(this.partnerprismplayer){try{this.partnerprismplayer.newAd(this.playerState['gemius']['cadid'],addp);this.partnerprismplayer.adEvent(this.currentVideo.programID||this.currentVideo.id,this.playerState['gemius']['cadid'],this.getCurrentOffsetAD(),"play",po);}catch(qwer){console.log(qwer);}}
break;case"videoset":var pp={'programName':this.currentVideo.programName||this.currentVideo.ptitle,'programDuration':this.currentVideo.live?-1:this.videoPlayer.duration||this.currentVideo.duration,'programType':this.currentVideo.programType||(this.currentVideo.audio?"audio":"video"),volume:100*this.getVolume()}
if(this.currentVideo.additionalParameters){pp.additionalParameters=this.currentVideo.additionalParameters;}
if(this.currentVideo.live){pp.transmissionType=2;pp.programGenre=1;pp.transmissionChannel=this.currentVideo.programName||'live '+this.currentVideo.id;this.playerState['gemius']['lastPlayTS']=Math.floor(Date.now()/1000);pp.transmissionStartTime=""+this.playerState['gemius']['lastPlayTS'];}else{pp.transmissionType=1;pp.programGenre=3;}
pp.subsequentVideo=(this.playlistedVideo!=0);if(this.currentVideo.series){pp.series=this.currentVideo.series;}
if(this.currentVideo.typology){pp.typology=this.currentVideo.typology;}
if(this.playerConfig['partnerId']==1019&&this.playerConfig['playerType']==3){if(this.currentVideo.catid==211){pp.programName="c2s_"+this.currentVideo.id;}else{pp.programName=this.currentVideo.pdesc;}}
var greg1=/[^0-9a-ząćęłńóśźż\_\.\!\@\#\*\(\)\-\/\?\:\;\~\$\,]/ig;pp.programName=pp.programName.replaceAll(greg1," ");try{this.prismplayer?.newProgram(this.currentVideo.programID||this.currentVideo.id,pp);}catch(qwer){console.log(qwer);}
try{this.partnerprismplayer?.newProgram(this.currentVideo.programID||this.currentVideo.id,pp);}catch(qwer){console.log(qwer);}
break;case"videopause":this.signalGemiusVideoEvent((this.currentVideo.live&&this.currentVideo.ezev==1)?"stop":"pause");break;case"videostopped":this.signalGemiusVideoEvent((this.currentVideo.live&&this.currentVideo.ezev==1)?"stop":"pause");break;}}-pGsUBG_75N3o7ot8By1utDWEVg\\u003d\\u003d\x22\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxUYo_AoX_ZxGCBWK899PuAbow_Dg2M4T6chr3lO6Y-XW7txqRDdN3D_ksCAdfl3S7-xpddYT8b6w4OSblvOoOWx-HthDAlE9Zq4d45VF37LYkrEd0G603U2F4FeF00Ix0lSJAR_Pg\\u003d\\u003d\x22\x5d\x5d');}xid = '';
		this.bfcache = null;
		this.bfview_waiting = null;
		this.bfview = null;
		this.timeouts = {initto: null, cmpto: null, sto: null, fto: null, tfpto: null, tfplto: null, chto: null};
		this.init_called = 0;
		this.started = 0;
		this.visapi_s = "";
		this.visapi_h = "";
		this.visapi_c = "";
		this.loadinit = 0;
		this.addto = null;
		this.ltime = 0;
		this.lsgetframe = null;
		this.sonar_data = null;
		this.sonar_auto_init = 0;
		this.timerevents = [];
		this.timer_data = {lasttime: 0, tint: null, to: null};
		this.hidetime = null;
		this.hidecnt = 0;
		this.requests = {consent:[], no_consent:[], unknown: []};
		this.images = [];
		this.state = 0;
		this.flashv = "";
		this.inner = [];
		this.mtp_enabled = '';
		this.gde_callbacks = [];
		this.gde_params_ready = false;
		this.is_gde = is_gde;
		this.use_globals = !is_gde;
		this.src = (document.currentScript && document.currentScript.src)?document.currentScript.src:null;
		if (this.use_globals) {
			this.ssl = (typeof gemius_proto === 'string')?((gemius_proto.substr(0,5) == 'https')?1:0):(typeof pp_gemius_proto === 'string')?((pp_gemius_proto.substr(0,5) == 'https')?1:0):(document.location && document.location.protocol && document.location.protocol=='https:')?1:0;
			this.hc = (typeof gemius_hitcollector === 'string')?gemius_hitcollector:(typeof pp_gemius_hitcollector === 'string')?pp_gemius_hitcollector:'adro.hit.gemius.pl';
			this.dnt = (((typeof gemius_dnt != 'undefined') && gemius_dnt) || ((typeof pp_gemius_dnt != 'undefined') && pp_gemius_dnt))?1:0;
			this.use_cmp = (((typeof gemius_use_cmp != 'undefined') && gemius_use_cmp) || ((typeof pp_gemius_use_cmp != 'undefined') && pp_gemius_use_cmp))?1:0;
			this.cmp_purposes_overrides = (typeof gemius_cmp_purposes != 'undefined')?gemius_cmp_purposes:(typeof pp_gemius_cmp_purposes != 'undefined')?pp_gemius_cmp_purposes:null;
			this.cmp_timeout = (typeof gemius_cmp_timeout == 'number')?gemius_cmp_timeout:(typeof pp_gemius_cmp_timeout == 'number')?pp_gemius_cmp_timeout:10000;
			this.dmp_purpose = (typeof gemius_dmp_purpose === 'boolean')?gemius_dmp_purpose:(typeof pp_gemius_dmp_purpose === 'boolean')?pp_gemius_dmp_purpose:false;
			this.gdpr_applies = (typeof gemius_gdpr_applies != 'undefined')?gemius_gdpr_applies:(typeof pp_gemius_gdpr_applies != 'undefined')?pp_gemius_gdpr_applies:null;
			this.gdpr_consent = (typeof gemius_gdpr_consent != 'undefined')?gemius_gdpr_consent:(typeof pp_gemius_gdpr_consent != 'undefined')?pp_gemius_gdpr_consent:null;
			this.explicit_consent = (typeof gemius_consent === 'boolean')?gemius_consent:(typeof pp_gemius_consent === 'boolean')?pp_gemius_consent:null;
			this.bfview_disabled = (typeof gemius_disable_back_cache_hits === 'boolean')?gemius_disable_back_cache_hits:(typeof pp_gemius_disable_back_cache_hits === 'boolean')?pp_gemius_disable_back_cache_hits:false;
		} else {
			this.ssl = (document.location && document.location.protocol && document.location.protocol=='https:')?1:0;
			this.hc = 'adro.hit.gemius.pl';
			this.dnt = 0;
			this.use_cmp = 0;
			this.cmp_purposes_overrides = null;
			this.cmp_timeout = 10000;
			this.dmp_purpose = false;
			this.gdpr_applies = null;
			this.gdpr_consent = null;
			this.explicit_consent = null;
			this.bfview_disabled = false;
		}
		this.warn = function() {
			if (window.console && window.console.warn) {
				console.warn.apply(console, arguments);
			}
		};
// check_same_origin.js 
var URL_HOST_PATTERN = /^(\w+:)\/\/([\w.-]+)(?::(\d+))?\/?/;
var check_same_origin = function(ref, page_location) {
	var url_match = URL_HOST_PATTERN.exec(ref) || [];
	if (url_match) {
		var default_port = function(protocol) {
			return {'http:':'80', 'https:':'443'}[protocol];
		}
		var port_of = function(location) {
			return location.port || default_port(location.protocol||page_location.protocol);
		}
		var urlparts = { protocol: url_match[1], hostname: url_match[2], port: url_match[3] };
		var is_same_origin = !!(urlparts.protocol === page_location.protocol &&
			urlparts.hostname === page_location.hostname && port_of(urlparts) === port_of(page_location)
		);
		if (is_same_origin) return ref;
	}
	return null;
};
		this.referrer_override = function(ref) {
			var has_pending_cmds = 'gemius_cmd_pdata' in window && gemius_cmd_pdata.length;
			var msg = 'Gemius referrer override ignored ';
			if (!this.init_called || has_pending_cmds) {
				return this.warn(msg + 'before init');
			}
			if (this.hidetime !== null && !this.bfview_disabled) {
				return this.warn(msg + 'during pagehide / pageshow');
			}
			ref = check_same_origin(ref, window.location);
			if (ref === null) {
				return this.warn(msg + 'due to a different origin');
			}
			this.ref.override = ref;
		};
		this.init_params = function(p) {
			this.ssl = (typeof p['proto'] === 'string')?((p['proto'].substr(0,5) == 'https')?1:0):this.ssl;
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.hc = (typeof p['hitcollector'] === 'string')?p['hitcollector']:this.hc;
			this.dnt = (typeof p['dnt'] != 'undefined')?(p['dnt']?1:0):this.dnt;
			this.use_cmp = (typeof p['use_cmp'] != 'undefined')?(p['use_cmp']?1:0):this.use_cmp;
			this.cmp_purposes_overrides = (typeof p['cmp_purposes'] != 'undefined')?p['cmp_purposes']:this.cmp_purposes_overrides;
			this.cmp_timeout = (typeof p['cmp_timeout'] === 'number')?p['cmp_timeout']:this.cmp_timeout;
			this.dmp_purpose = (typeof p['dmp_purpose'] === 'boolean')?p['dmp_purpose']:this.dmp_purpose;
			this.gdpr_applies = (typeof p['gdpr_applies'] != 'undefined')?p['gdpr_applies']:this.gdpr_applies;
			this.gdpr_consent = (typeof p['gdpr_consent'] != 'undefined')?p['gdpr_consent']:this.gdpr_consent;
			this.explicit_consent = (typeof p['consent'] === 'boolean')?p['consent']:this.explicit_consent;
		};
		this.bind = function(fn) {
			var that = this;
			var args = Array.prototype.slice.call(arguments,1);
			return function() {
				return fn.apply(that,args.concat(Array.prototype.slice.call(arguments)));
			}
		};
		this.add_event = function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		};
		this.remove_script = function(elementid,url) {
			var el = document.getElementById(elementid);
			if (el) {
				if (url) {
					if (this.use_globals) {
						try {
							if (typeof gemius_notify != 'undefined') {
								gemius_notify(url);
							} else if (typeof pp_gemius_notify != 'undefined') {
								pp_gemius_notify(url);
							}
						} catch (e) {}
					}
				}
				try {
					el.parentNode.removeChild(el);
				} catch(e) {}
			}
		};
		this.append_script = function(url,finishedfn,notify) {
			var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
			try {
				var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0];
				if (finishedfn!=null) {
					this.add_event(gt,'load',finishedfn);
					this.add_event(gt,'error',finishedfn);
					this.add_event(gt,'readystatechange',function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') finishedfn(); });
				}
				this.add_event(gt,'load',this.bind(this.remove_script,rndid,notify?url:null));
				this.add_event(gt,'error',this.bind(this.remove_script,rndid,null));
				this.add_event(gt,'readystatechange',this.bind(function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') this.remove_script(rndid,notify?url:null); }));
				gt.setAttribute('id',rndid);
				gt.setAttribute('defer','defer');
				gt.setAttribute('async','async');
				gt.setAttribute('type','text/javascript');
				gt.setAttribute('src',url);
				if (s) {
					s.parentNode.insertBefore(gt,s);
				} else if (document.body) {
					document.body.appendChild(gt);
				}
			} catch (e) {}
		};
		this.xdot_loaded = function() {
			if (typeof gemius_open=='undefined') {
				this.state = 0;
			}
		};
		this.get_referrer_override = function() {
			var frametype = this.ref.frametype;
			if (frametype == 2) {
				try {
					if ('gemius_hcconn' in top && 'get_referrer_override' in top.gemius_hcconn) {
						return top.gemius_hcconn.get_referrer_override() || null;
					}
				} catch (e) {
					this.tfne = 1;
				}
			}
			return (frametype == 0 || frametype == 1 || (frametype == 3 && !this.has_tfp_answer())) ? this.ref.override : null;
		};
		var _get_referrer = function() {
			return this.get_referrer_override() || this.ref.ref;
		};
		_get_referrer = this.bind(_get_referrer);
		this.sendhit = function(robj,nr,consent,lsadd) {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			var vis = (this.visapi_h=='')?3:(document[this.visapi_h])?2:1;
			var params = '&vis='+vis;
			var sendf = (this.closing?2:0)+(this.onpagehide?16:0);
			params += '&lsdata=' + (consent?this.lsdata:'-NOCONSENT');
			params += '&fpdata=' + (consent?this.getrawfpdata():'-NOCONSENT');
			if (this.tfp.fpdata != '') {
				params += '&tfpdata=' + (consent?this.tfp.fpdata:'-NOCONSENT');
			}
			if (consent && this.hidecnt==0) {
				params += '&ltime='+this.ltime;
			}
			params += this.has_tfp_answer() ? this.ref_params() : robj.refs;
			params += this.inner_params();
			if (this.ssl==0 && consent && lsadd!==null) {
				params += '&lsadd='+lsadd;
			}
			if (consent!==true) {
				params += '&nc=1';
			} else if (robj.explicit===true) {
				params += '&nc=0';
			}
			params += '&exid=' + (consent?this.exid:'-NOCONSENT') + '&brts=' + Math.floor(d/1000);
			if (this.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+robj.req+params;
				if (typeof navigator.sendBeacon == "function") {
					sendf += 1;
					url += '&sendf='+sendf;
					navigator.sendBeacon(url);
				} else {
					url += '&sendf='+sendf;
					var images_l = this.images.length;
					this.images[images_l]=new Image();
					this.images[images_l].src = url;
				}
			} else if (this.state>0 || robj.allowaddscript==0 || !this.use_globals || typeof gemius_open != 'undefined') {
				url += (d+nr)+'/redot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params+this.fpcap_params(consent);
				this.append_script(url,null,1);
			} else {
				sendf += 8;
				url += (d+nr)+'/rexdot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params+this.fpcap_params(consent);
				this.state = 1;
				this.append_script(url,this.bind(this.xdot_loaded),1);
			}
			if (consent && this.tfp.need_sync) {
				this.tfp_add_fix(robj);
			}
		};
		this.sendhits = function(lsadd) {
			if (this.waiting_on_prerender==0) {
				var i;
				for (i=0 ; i<this.requests.no_consent.length ; i++) {
					this.sendhit(this.requests.no_consent[i],i,false,lsadd);
				}
				this.requests.no_consent = [];
				if (this.waiting_for_fpdata==0 && this.waiting_for_lsdata==0) {
					for (i=0 ; i<this.requests.consent.length ; i++) {
						this.sendhit(this.requests.consent[i],i,true,lsadd);
					}
					this.requests.consent = [];
				}
			}
		};
		this.latehits = function() {
			this.tfp_sync();
			if (this.waiting_for_consent==0 && this.requests.unknown.length > 0) {
				var i;
				var requests = this.requests;
				for (i=0 ; i<requests.unknown.length ; i++) {
					var robj = requests.unknown[i];
					robj.explicit = this.explicit_consent;
					if (this.has_consent) {
						requests.consent[requests.consent.length] = robj;
					} else {
						requests.no_consent[requests.no_consent.length] = robj;
					}
				}
				this.requests.unknown = [];
			}
			if ((this.has_consent === false || (this.waiting_for_fpdata==0 && this.waiting_for_lsdata==0)) && this.waiting_on_prerender==0 && this.waiting_for_chints==0 && this.waiting_for_tfp==0) {
				if (this.closing==0 && this.ssl==0 && this.lsdata!='' && this.lsdata[0]!='-' && this.lsgetframe) {
					if (this.addto==null) {
						try {
							this.lsgetframe.contentWindow.postMessage("_xx_gemius_get_add_xx_","http://ls.hit.gemius.pl/");
							this.addto = setTimeout(this.bind(this.lsaddto),250);
						} catch (e) {
							this.sendhits(null);
						}
					}
				} else {
					this.sendhits(null);
				}
			}
		};
		this.lsaddto = function() {
			if (this.addto!=null) {
				this.addto = null;
				this.sendhits(null);
			}
		};
		this.add_fpdata_callback = function(callback,id) {
			if (id == null || !(id in this.fpdata_callback_ids)) {
				if (id != null) {
					this.fpdata_callback_ids[id] = id;
				}
				this.fpdata_callbacks[this.fpdata_callbacks.length] = callback;
				if (this.fpdata_ready_called) {
					try {
						callback(this.getconsentfpdata());
					} catch (e) {}
				}
			}
		};
		this.paramsready = function() {
			this.sync_gde_params();
			if (this.waiting_for_consent==1) {
				return;
			}
			var fpdata_ready = (this.waiting_for_fpdata==0 || this.fpdata == '-DNT');
			var lsdata_ready = (this.waiting_for_lsdata==0 || this.lsdata == '-DNT');
			if (fpdata_ready) {
				this.fpdata_ready_called = 1;
				for (var i=0 ; i<this.fpdata_callbacks.length ; i++) {
					try {
						this.fpdata_callbacks[i](this.getconsentfpdata());
					} catch (e) {}
				}
			}
			if (this.use_globals && this.params_ready_called==0 && fpdata_ready && lsdata_ready) {
				var data = {'lsdata' : this.getconsentlsdata(), 'fpdata' : this.getconsentfpdata()};
				this.params_ready_called = 1;
				try {
					if (typeof gemius_params_ready != 'undefined') {
						gemius_params_ready(data);
					} else if (typeof pp_gemius_params_ready != 'undefined') {
						pp_gemius_params_ready(data);
					}
				} catch (e) {}
			}
		};
		this.visibilitychanged = function() {
			if (document[this.visapi_s]!='prerender' && this.waiting_on_prerender) {
				this.waiting_on_prerender = 0;
				setTimeout(this.bind(this.latehits),100);
			}
		};
		this.unloadhit = function(robj,nr,consent) {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			var vis = (this.visapi_h=='')?3:(document[this.visapi_h])?2:1;
			var params = '&vis='+vis;
			var sendf = 4+(this.closing?2:0)+(this.onpagehide?16:0);
			params += '&fpdata='+((this.waiting_for_fpdata==0 && consent)?this.getrawfpdata():'-UNLOAD');
			if (this.waiting_for_lsdata==0 && consent) {
				params += '&lsdata='+this.lsdata;
				if (this.hidecnt==0) {
					params += '&ltime='+this.ltime;
				}
			} else {
				params += '&lsdata=-UNLOAD';
			}
			if (this.tfp.fpdata != '') {
				params += '&tfpdata=' + (consent?this.tfp.fpdata:'-UNLOAD');
			}
			params += this.has_tfp_answer() ? this.ref_params() : robj.refs;
			params += this.inner_params();
			if (consent!==true) {
				params += '&nc=1';
			} else if (robj.explicit===true) {
				params += '&nc=0';
			}
			params += '&exid=' + (consent?this.exid:'-UNLOAD') + '&brts=' + Math.floor(d/1000);
			if (this.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+robj.req+params;
				if (typeof navigator.sendBeacon == "function") {
					sendf += 1;
					url += '&sendf='+sendf;
					navigator.sendBeacon(url);
				} else {
					url += '&sendf='+sendf;
					var images_l = this.images.length;
					this.images[images_l]=new Image();
					this.images[images_l].src = url;
				}
			} else {
				url += (d+nr)+'/redot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params;
				this.append_script(url,null,1);
			}
			if (consent && this.tfp.need_sync) {
				this.tfp_add_fix(robj);
			}
		};
		this.unload_prepare = function() {
			if (this.require_consent_info) {
				this.has_consent = null;
			} else if (this.dnt || this.explicit_consent===false) {
				this.has_consent = false;
			} else if (this.explicit_consent===null && this.use_cmp) {
				if (this.cmp_timeout==Infinity) {
					this.require_consent_info = 1;
					this.has_consent = null;
				} else {
					this.has_consent = false;
				}
			} else if (this.explicit_consent===null && this.gdpr_params() != '') {
				this.has_consent = false;
			} else {
				this.has_consent = true;
			}
			this.waiting_for_consent = this.require_consent_info;
			if (this.use_globals) {
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i]({});
					}
				}
				this.sendpendingdata();
			}
		};
		this.unload = function(closing) {
			try {
				var i;
				var uhits = 0;
				var last = (!this.closing && closing);
				var requests = this.requests;
				this.closing = (this.closing>0 || closing)?1:0;
				if (!this.init_called) {
					this.unload_prepare();
					this.send_bfview();
				}
				if (this.waiting_on_prerender==0 && (this.require_consent_info==0 || this.waiting_for_consent==0)) {
					uhits += requests.no_consent.length;
					for (i=0 ; i<requests.no_consent.length ; i++) {
						this.unloadhit(requests.no_consent[i],i+10,false);
					}
					uhits += requests.consent.length;
					for (i=0 ; i<requests.consent.length ; i++) {
						this.unloadhit(requests.consent[i],i+10,true);
					}
					uhits += requests.unknown.length;
					for (i=0 ; i<requests.unknown.length ; i++) {
						this.unloadhit(requests.unknown[i],i+10,false);
					}
					this.requests = {consent:[], no_consent:[], unknown: []};
				}
				if (last) {
					if (typeof navigator.sendBeacon != "function" && uhits > 0) {
						var start = (new Date()).getTime();
						while (start+200>(new Date()).getTime()){};
					}
				}
				this.tfp_send_fixes(true);
			} catch (e) {}
		};
		this.mousedown = function() {
			if ((this.cmp_found!=1 || this.waiting_for_consent==0) && this.waiting_for_chints==0) {
				this.unload(false);
			}
		};
		this.set_timeout = function(fn, time) {
			return {to: setTimeout(fn,time), fn: fn, time: time};
		};
		this.hide_timeouts = function() {
			for (var key in this.timeouts) {
				var timeout = this.timeouts[key];
				if (timeout != null) {
					if (timeout.to != null) {
						clearTimeout(timeout.to);
						timeout.to = null;
					}
				}
			}
		};
		this.show_timeouts = function() {
			for (var key in this.timeouts) {
				var timeout = this.timeouts[key];
				if (timeout!=null && timeout.to==null) {
					timeout.to = setTimeout(timeout.fn,timeout.time);
				}
			}
		};
		this.send_bfview = function() {
			var bfview = this.bfview;
			if (bfview!=null) {
				this.internal_hit(0,bfview.vers,bfview.id,bfview.evid,"bfview",bfview.hsrc,0,bfview.extra,bfview.refs,bfview.href);
			}
		};
		this.pagehide = function() {
			this.bfcache = {has_consent:this.has_consent,
					require_consent_info:this.require_consent_info,
					waiting_for_consent:this.waiting_for_consent};
			this.unload(true);
			if (this.hidetime==null) {
				this.hidetime = ((new Date()).getTime());
			}
			this.hide_timeouts();
			if (this.sonar_data!=null) {
				var data = this.sonar_data;
				if (data["sint"]!=null) {
					clearInterval(data["sint"]);
					data["sint"] = null;
				}
			}
			var tdata = this.timer_data;
			if (tdata["tint"]!=null) {
				clearInterval(tdata["tint"]);
				tdata["tint"] = null;
			}
			if (tdata["to"]!=null) {
				clearTimeout(tdata["to"]);
				tdata["to"] = null;
			}
			if (this.bfview_waiting) {
				this.bfview = this.bfview_waiting;
				this.bfview_waiting = null;
			}
			if (this.bfview != null) {
				var init_called = this.init_called;
				this.bfview.refs = init_called ? this.ref_params() : null;
				this.bfview.href = init_called ? new String(document.location.href) : null;
			}
		};
		this.pageshow = function() {
			if (this.hidetime==null) {
				return;
			}
			if (this.bfcache) {
				this.has_consent = this.bfcache.has_consent;
				this.require_consent_info = this.bfcache.require_consent_info;
				this.waiting_for_consent = this.bfcache.waiting_for_consent;
				this.bfcache = null;
			}
			this.tfp_pageshow();
			this.show_timeouts();
			var showtime = ((new Date()).getTime());
			var leap = (showtime>this.hidetime)?showtime-this.hidetime:0;
			if (this.sonar_data!=null) {
				var data = this.sonar_data;
				data["lasttime"] += leap;
				if (data["sint"]==null && data["id"] && data["evid"] && data["freq"]>0) {
					data["sint"] = setInterval(this.bind(this.sonar), 1000);
				}
			}
			if (this.init_called) {
				var data = this.timer_data;
				data["lasttime"] += leap;
				if (data["to"]==null && data["tint"]==null) {
					var t = showtime-data["lasttime"];
					if (t > 0 && t < 60*1000) {
						data["to"] = setTimeout(this.bind(this.timer),60*1000-t);
					} else {
						data["tint"] = setInterval(this.bind(this.timer),60*1000);
					}
				}
			}
			this.hidecnt += 1;
			this.hidetime = null;
			this.closing = 0;
			if (this.init_called) {
				this.send_bfview();
			}
		};
		this.getrawfpdata = function(fpdata) {
			if (fpdata===undefined) {
				fpdata = this.fpdata;
			}
			return fpdata.split('|')[0];
		};
		this.getconsentfpdata = function() {
			return this.has_consent?this.getrawfpdata():'-NOCONSENT';
		};
		this.getconsentlsdata = function() {
			return this.has_consent?this.lsdata:'-NOCONSENT';
		};
		this.get_fpdata_ts = function(fpdata) {
			if (fpdata===undefined) {
				fpdata = this.fpdata;
			}
			var arr = fpdata.split('|');
			return (arr.length >= 2) ? parseInt(arr[1]) * 1000 : 0;
		};
		this.getfpcookie = function() {
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (this.fpdata_sec_state=='unknown') {
				this.fpdata_sec_state = fpcookie.sec_state;
			}
			this.fpdata = fpcookie.primary;
			this.fpdata_secondary = fpcookie.secondary;
		};
		this.getdntcookie = function() {
			if (this.dnt==0) {
				var dntcookie = gemius_cookie.get(this.dntcookie_name);
				this.dnt = parseInt(dntcookie.primary)?1:0;
			}
		};
		this.getfpcap = function() {
			var capcookie = gemius_cookie.get(this.capcookie_name);
			if (capcookie.sec_state=='sec') {
				this.fpcap = {nsec: '-TURNEDOFF', sec: capcookie.primary};
			} else {
				this.fpcap = {nsec: capcookie.primary, sec: capcookie.secondary};
			}
		};
		this.setfpcap = function(fpcap,fpcdomain,fpsec) {
			var fpcap_sec_state = parseInt(fpsec)?'sec':'nsec';
			if (fpcap=='' || fpcdomain=='' || this.fpdata_sec_state!=fpcap_sec_state) {
				return;
			}
			this.fpcap[this.fpdata_sec_state] = fpcap;
			gemius_cookie.set(this.capcookie_name, fpcap, this.cookie_expire, fpcdomain, this.fpdata_sec_state, false);
		};
		this.fpcookie_secondary_needs_reset = function() {
			return (this.gdprforgetts>0 && this.fpdata_secondary!='' && this.fpdata_secondary[0]!='-' && this.get_fpdata_ts(this.fpdata_secondary)<this.gdprforgetts);
		};
		this.setfpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
			if (this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.init_fpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
		};
		this.reset_fpcookie_secondary_if_needed = function() {
			if (this.fpcookie_secondary_needs_reset()) {
				gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, 'sec', true);
			}
		};
		this.fpdata_loaded = function() {
			if (this.timeouts.sto!=null) {
				if (this.timeouts.sto.to!=null) {
					clearTimeout(this.timeouts.sto.to);
				}
				this.timeouts.sto = null;
			}
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (fpcookie.sec_state == 'unknown') {
				this.init_fpcookie();
			}
			this.getfpcookie();
			this.waiting_for_fpdata = 0;
			this.tfp_send_fixes(false);
			this.paramsready();
			this.latehits();
		};
		this.addframe = function(ssl,file,args,rcvfn) {
			if (document.body) {
				this.current_receiver = rcvfn;
				var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/ls'+file+'.html'+args;
				if (rcvfn!=null) {
					this.loadinit = (new Date()).getTime();
					if (this.timeouts.fto==null) {
						this.timeouts.fto = this.set_timeout(this.bind(this.frameto),10000);
					}
				}
				var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
				var f = document.createElement('iframe');
				f.setAttribute('id',rndid);
				f.setAttribute('name','ls'+file+'frame');
				f.setAttribute('width',0);
				f.setAttribute('height',0);
				f.setAttribute('scrolling','no');
				f.style.display="none";
				f.style.visibility="hidden";
				document.body.appendChild(f);
				f.setAttribute('src',url);
				if (file=="get" && ssl==0) {
					this.lsgetframe = f;
				}
			} else {
				setTimeout(this.bind(this.addframe,ssl,file,args,rcvfn), 100);
			}
		};
		this.frameto = function() {
			if (this.timeouts.fto!=null) {
				this.timeouts.fto = null;
				if (this.lsdata=='') {
					this.ltime = 10000;
					this.lsdata = document.prerendering?'-PRERENDER':'-TIMEDOUT';
					this.waiting_for_lsdata = 0;
					this.paramsready();
					this.latehits();
				}
			}
		};
		this.scriptto = function() {
			if (this.timeouts.sto!=null) {
				this.timeouts.sto = null;
				if (this.fpdata!='' && this.fpdata[0]!='-') {
					this.init_fpcookie();
					this.getfpcookie();
				}
				if (this.fpdata=='') {
					this.fpdata = '-TIMEDOUT';
				}
				this.waiting_for_fpdata = 0;
				this.paramsready();
				this.latehits();
			}
		};
		this.last_datareceiver = function(lsdata) {
			this.current_receiver = null;
			this.lsdata = lsdata;
			this.waiting_for_lsdata = 0;
			this.paramsready();
			this.latehits();
		};
		this.second_datareceiver = function(data) {
			if (data.charAt(0)=='-' || data=='') {
				this.addframe(1,'set','',this.last_datareceiver);
			} else {
				this.last_datareceiver(data);
			}
		};
		this.first_datareceiver = function(data) {
			var m = data.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
			var n = (new Date()).getTime();
			if (data.charAt(0)=='-' || data=='' || !m || m[2]<n) {
				this.addframe(1,'get','',this.second_datareceiver);
			} else {
				if (m) {
					data = m[1];
				}
				this.last_datareceiver(data);
			}
		};
		this.msgreceiver = function(e) {
			try {
				var is_event = function(prefix) {
					return typeof e.data == "string" && e.data.substring(0, prefix.length) == prefix;
				}
				if (window.top === window.self && is_event("_xx_gemius_getref_xx_")) {
					var origin = window.location.origin;
					if (origin) {
						e.source.postMessage("_xx_gemius_putref_xx_/" + origin, e.origin);
					}
				}
				if (e.source === window.top) {
					if (is_event("_xx_gemius_putref_xx_/")) {
						this.set_tfp_origin(e.data.substr(22));
						this.latehits();
					}
					if (is_event("_xx_gemius_puttfpdata_xx_")) {
						var arr = e.data.substr(26).split("/");
						var tfpdata = arr[0];
						if (!this.is_gde || (tfpdata.length > 0 && tfpdata[0] != '-')) {
							this.tfp.fpdata = tfpdata;
							this.latehits();
						}
					}
				}
				if (window.top === window.self) {
					if (is_event("_xx_gemius_getfpdata_xx_")) {
						var origin = new String(document.location.origin);
						var sent = false;
						var clbk = function(fpdata) {
							if (this.has_consent && !sent) {
								e.source.postMessage("_xx_gemius_putfpdata_xx_/" + fpdata + '/' + encodeURIComponent(origin), e.origin);
								sent = true;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),null);
					}
					if (is_event("_xx_gemius_gettfpdata_xx_/")) {
						var arr = e.data.substr(26).split("/");
						var sent_tfpdata = '';
						var clbk = function(fpdata) {
							var tfpdata = (this.has_consent?fpdata:'-NOCONSENT');
							if (tfpdata != sent_tfpdata) {
								e.source.postMessage("_xx_gemius_puttfpdata_xx_/" + tfpdata, e.origin);
								sent_tfpdata = tfpdata;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),arr[0]);
					}
				}
				if (!this.init_called) {
					return;
				}
				if (is_event("_xx_gemius_xx_/")) {
					if (this.timeouts.fto!=null) {
						if (this.timeouts.fto.to!=null) {
							clearTimeout(this.timeouts.fto.to);
						}
						this.timeouts.fto = null;
						this.ltime = (new Date()).getTime() - this.loadinit;
					}
					if (this.current_receiver!=null) {
						this.current_receiver(e.data.substr(15));
					}
				}
				if (this.use_globals) {
					if (is_event("_xx_gemius_add_xx_/")) {
						if (this.addto!=null) {
							clearTimeout(this.addto);
							this.addto = null;
						}
						var lsadd = e.data.substr(19);
						this.sendhits((lsadd=="-GETERR")?null:lsadd);
					}
					if (is_event("_xx_gemius_set_fpcap_xx_")) {
						var fpcap = e.data.substr(25).split("/");
						this.setfpcap(fpcap[0], fpcap[1], fpcap[2]);
					}
				}
			} catch (e) {}
		};
		this.getflashv = function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		};
		this.gdpr_params = function(first) {
			var url = '';
			if (this.gdpr_applies != null) url+="&gdpr=" + (this.gdpr_applies?"1":"0");
			if (this.gdpr_consent != null) {
				url+="&gdpr_consent=" + ((typeof this.gdpr_consent == "string")?this.gdpr_consent:'');
			}
			if (first && url != '') url='?' + url.substring(1);
			return url;
		};
		this.cmp_purposes = function() {
			var purposes = {1:[1,5],2:[1,7,8,9,10]};
			try {
// cmp_utils.js 
                var combine_cmp_purposes = function(purposes, cmp_purposes_overrides, add_dmp_purposes) {
					var purposes_v1_to_v2_translation = {1:[1],2:[3,5],3:[2,4,7],4:[6,8],5:[7,8,9]};
					var dmp_purposes = {1:[1,2,3,5],2:[1,2,3,4,5,7,8,9,10]};
					if (typeof cmp_purposes_overrides != 'undefined' && cmp_purposes_overrides != null) {
						if (cmp_purposes_overrides.constructor === Array) {
							purposes[1] = cmp_purposes_overrides;
							purposes[2] = [10];
							for (var i=0; i < purposes[1].length; i++) {
								v2_purposes = purposes_v1_to_v2_translation[purposes[1][i]];
								if (typeof v2_purposes != 'undefined') {
									purposes[2] = purposes[2].concat(v2_purposes);
								}
							}
						} else {
							for (version in cmp_purposes_overrides) {
								purposes[version] = cmp_purposes_overrides[version];
							}
						}
					}
					if (add_dmp_purposes) {
						for (version in dmp_purposes) {
							purposes[version] = purposes[version].concat(dmp_purposes[version]);
						}
					}
				}

				combine_cmp_purposes(purposes, this.cmp_purposes_overrides, this.dmp_purpose);
			} catch (e) {}
			return purposes;
		};
		this.parameters = function(href) {
			var d=document;
			var w=window;
			var href=new String(href || d.location.href);
			var dd;
			var url='&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(this.flashv)+'&href='+encodeURIComponent(href.substring(0,499));
				if (typeof w.gemiusNetpanelID=='string') {
					url+='&npid='+encodeURIComponent(w.gemiusNetpanelID);
				}
			}
			if (this.mtp_enabled && (typeof navigator.maxTouchPoints=='number')) {
				url+='&mtp='+navigator.maxTouchPoints;
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			if (this.cmp_found) {
				url+='&cmpf=1';
			}
			if (this.gdpr_found) {
				url+='&gdprf=1';
			}
			return url;
		};
		this.fpcap_params = function(consent) {
			if (consent && this.fpdata.length>0 && this.fpdata[0]!='-' && this.fpdata_sec_state!='unknown') {
				var fpcap = this.fpcap[this.fpdata_sec_state];
				return '&fpcap=' + ((fpcap.length>0 && fpcap[0]!='-')?fpcap:'') + ((this.fpdata_sec_state=='sec')?'&fpsec=1':'');
			}
			return '';
		};
		this.frametype_init = function() {
			var ref = this.ref;
			var d=document;
			if (typeof Error!='undefined') {
				try { ref.frametype=(d==top.document)?1:2; var r = top.document.referrer; } catch(e) {ref.frametype=3;}
			}
		};
		this.ref_update = function() {
			var ref = this.ref;
			var d=document;
			if (d.referrer) { ref.ref=new String(d.referrer); } else { ref.ref=''; }
			if (typeof Error!='undefined') {
				try { if (typeof top.document.referrer=="string") { ref.ref=top.document.referrer; } } catch(e) {}
			}
			try { if (ref.ref=='' && typeof ia_document != "undefined" && ia_document.referrer) ref.ref="https://" + (new String(ia_document.referrer));} catch(e) {}
		};
		this.ref_params_obj = function() {
			var ref = this.ref;
			if (ref.frametype != 3) {
				this.ref_update();
			}
			var params = {"fr":ref.frametype};
			if (ref.topref) {
				params["tr"] = ref.topref;
			}
			if (typeof encodeURIComponent != 'undefined') {
				params["ref"] = encodeURIComponent(_get_referrer().substring(0,499));
			}
			return params;
		};
		this.ref_params = function() {
			var params = this.ref_params_obj();
			var url = '';
			for (var key in params) {
				url += '&' + key + '=' + params[key];
			}
			return url;
		};
		this.inner_params = function() {
			if (typeof encodeURIComponent != 'undefined') {
				var inner = '_ver=' + this.version;
				if (this.tfne) {
					inner += '|_tfne=' + this.tfne;
				}
				if (GemiusHitcolConnector.min) {
					inner += '|_min=1';
				}
				if (this.hidecnt > 0) {
					inner += '|_hdcnt=' + this.hidecnt;
				}
				if (this.inner.length > 0) {
					inner += '|' + this.array_to_string(this.inner, 0);
				}
				return '&inner='+encodeURIComponent(inner.substring(0,1999));
			}
			return '';
		};
		this.array_to_string = function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		};
		this.internal_hit = function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra,refs,href) {
			var req = "";
			if (this.event_identifier==null && id) {
				this.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+((et=='bfview')?'view':et);
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			var not_gstream = (id && typeof id.indexOf == 'function' && id.indexOf('&sargencoding=') < 0);
			if (sonar && et == 'view' && not_gstream) {
				this.sonar_auto_init = 0;
				req += '&initsonar=1';
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+this.parameters(href);
			refs = refs || this.ref_params();
			var robj = {req:req,id:id,allowaddscript:allowaddscript,vers:vers,explicit:this.explicit_consent,refs:refs};
			if (this.onpagehide && !this.bfview_disabled && (et == 'view' || et == 0) && not_gstream) {
				this.bfview_waiting = {vers: vers, id: id, evid: evid, hsrc: hsrc, extra: extra};
			}
			var requests = this.requests;
			if (this.has_consent === true) {
				requests.consent[requests.consent.length] = robj;
			} else if (this.has_consent === false) {
				requests.no_consent[requests.no_consent.length] = robj;
			} else {
				requests.unknown[requests.unknown.length] = robj;
			}
			this.latehits();
		};
		this.timer = function() {
			var i;
			var data = this.timer_data;
			data["lasttime"] = ((new Date()).getTime());
			for (i=0 ; i<this.timerevents.length ; i++) {
				this.internal_hit(0,103,this.timerevents[i],0,"sonar");
			}
			if (data["to"] != null) {
				clearTimeout(data["to"]);
				data["to"] = null;
			}
			if (data["tint"] == null) {
				data["tint"] = setInterval(this.bind(this.timer),60*1000);
			}
		};
		this.gtimer_add = function(id) {
			this.internal_hit(0,103,id,0,"sonar");
			this.timerevents[this.timerevents.length] = id;
		};
		this.sonar_add = function(identifier,evid,freq,extra) {
			if (this.sonar_data==null) {
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["sint"]=null;
				data["lasttime"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					data["sint"]=setInterval(this.bind(this.sonar), 1000);
				}
				this.sonar_data = data;
			}
		};
		this.sonar = function() {
			if (this.sonar_data!=null) {
				var data, prob, lvstate;
				lvstate=(this.visapi_s?document[this.visapi_s]:"");
				data=this.sonar_data;
				prob=(((new Date()).getTime()) - data["lasttime"])/1000;
				data["lasttime"]=((new Date()).getTime());
				while (prob>0) {
					if (data["sdur"]<24*3600 && prob<=4 && lvstate=="visible" && Math.random() < prob/data["freq"]) {
						this.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
					}
					data["sdur"] += Math.min(prob,data["freq"]);
					prob -= data["freq"];
				}
			}
		};
		this.gdprdata_loaded = function() {
			try {
				if (this.gdprdisabled) {
					this.consent_loaded(true,false);
					return;
				}
				var purposes = this.cmp_purposes()[this.gdprversion];
				if (typeof purposes == "undefined") {
					this.consent_loaded(false,false);
					return;
				}
				for (var i=0; i<purposes.length; ++i) {
					if (!this.gdprdata[purposes[i]-1]) {
						this.consent_loaded(false,false);
						return;
					}
				}
			} catch (e) {
				this.consent_loaded(false,false);
				return;
			}
			this.consent_loaded(true,false);
		};
		this.consent_loaded = function(consent,explicit) {
			if (this.timeouts.cmpto!=null) {
				if (this.timeouts.cmpto.to!=null) {
					clearTimeout(this.timeouts.cmpto.to);
				}
				this.timeouts.cmpto = null;
			}
			if (explicit || this.explicit_consent === null) {
				this.waiting_for_consent = 0;
				this.has_consent = consent?true:false;
				if (explicit) {
					this.explicit_consent = this.has_consent;
				}
				if (this.has_consent) {
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
				this.paramsready();
				this.latehits();
			}
		};
		this.consentto = function() {
			if (this.waiting_for_consent==1) {
				this.timeouts.cmpto = null;
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.latehits();
			}
		};
		this.tfp_add_fix = function(robj) {
			if (robj.id in this.tfp.fixes) {
				return;
			}
			var is_frame = (this.ref.frametype==3);
			var fix = {
				fpdata: (this.is_gde && (this.waiting_for_fpdata==1))?1:0,
				tfpdata: (is_frame && this.tfp.fpdata=='')?1:0,
				ref: (is_frame && this.ref.topref==0)?1:0,
				refs: robj.refs
			}
			if (fix.fpdata || fix.tfpdata || fix.ref) {
				this.tfp.fixes[robj.id] = fix;
				this.tfp.need_fix = 1;
			}
		};
		this.tfp_timeout = function() {
			this.waiting_for_tfp = 0;
			this.latehits();
		};
		this.tfp_sync = function() {
			if (this.tfp.fpdata!='' && this.tfp.origin!='') {
				if (this.timeouts.tfpto!=null) {
					if (this.timeouts.tfpto.to!=null) {
						clearTimeout(this.timeouts.tfpto.to);
					}
					this.timeouts.tfpto = null;
				}
				this.tfp.need_sync = 0;
				this.waiting_for_tfp = 0;
				this.tfp_send_fixes(false);
				this.sync_gde_params();
			}
		};
		this.tfp_fix_url = function() {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			url += d + "/redot.gif?fpdata=" + this.getrawfpdata();
			url += "&lsdata=" + this.lsdata;
			url += "&tfpdata=" + this.tfp.fpdata;
			url += "&roc=1&et=9&w=fpm";
			url += '&exid=' + this.exid + '&brts=' + Math.floor(d/1000);
			if (typeof encodeURIComponent != "undefined") {
				var href = new String(document.location.href);
				url += '&href=' + encodeURIComponent(href.substring(0,499));
			}
			return url;
		};
		this.tfp_send_fixes = function(unload) {
			if (!this.tfp.need_fix || !this.has_consent) {
				return;
			}
			var url = this.tfp_fix_url();
			var tfp = this.tfp;
			var has_fpdata = (this.waiting_for_fpdata==0);
			var has_tfpdata = (tfp.fpdata!='' && tfp.fpdata[0]!='-')?1:0;
			var has_ref = (tfp.origin!='')?1:0;
			this.tfp.need_fix = 0;
			for (var id in this.tfp.fixes) {
				var fix = this.tfp.fixes[id];
				var has_new_ref_fix = fix.ref && has_ref;
				var has_new_fix = ((fix.fpdata && has_fpdata) || (fix.tfpdata && has_tfpdata) || has_new_ref_fix);
				var has_missed_fix = ((fix.fpdata && !has_fpdata) || (fix.tfpdata && !has_tfpdata) || (fix.ref && !has_ref));
				if (has_new_fix && (unload || !has_missed_fix)) {
					var id_url = url + "&id=" + id;
					id_url += has_new_ref_fix ? this.ref_params(): fix.refs;
					if (typeof navigator.sendBeacon == "function") {
						navigator.sendBeacon(id_url);
					} else {
						var images_l = this.images.length;
						this.images[images_l] = new Image();
						this.images[images_l].src = id_url;
					}
					fix.fpdata &= !has_fpdata;
					fix.tfpdata &= !has_tfpdata;
					fix.ref &= !has_ref;
					if (!has_missed_fix) {
						delete this.tfp.fixes[id];
					}
				}
				if (id in this.tfp.fixes) {
					this.tfp.need_fix = 1;
				}
			}
		};
		this.set_tfp_origin = function(origin) {
			if (this.ref.frametype == 3) {
				this.ref.ref = origin;
				this.ref.topref = 1;
			}
			this.tfp.origin = origin;
		};
		this.has_tfp_answer = function() {
			return (this.ref.topref != 0) && (this.tfp.fpdata != "");
		};
		this.tfp_init = function() {
			if (window.self !== window.top && this.ref.frametype != 2) {
				try {
					var origins = document.location.ancestorOrigins;
					if (typeof origins != 'undefined') {
						this.set_tfp_origin(origins[origins.length-1]);
					}
				} catch(e) {};
				this.timeouts.tfpto = this.set_timeout(this.bind(this.tfp_timeout), 1000);
				this.waiting_for_tfp = 1;
				this.tfp.need_sync = 1;
				this.tfp.need_fix = 1;
				this.tfp_loop();
			}
		};
		this.tfp_pageshow = function() {
			if (this.timeouts.tfplto != null) {
				this.tfp.interval = 0.5;
				this.timeouts.tfplto.time = 0.5;
			}
		};
		this.tfp_loop = function() {
			if (this.tfp.need_sync) {
				if (this.tfp.origin=='') {
					window.top.postMessage("_xx_gemius_getref_xx_","*");
				}
				if (this.tfp.fpdata=='') {
					window.top.postMessage("_xx_gemius_gettfpdata_xx_/" + this.exid ,"*");
				}
				this.timeouts.tfplto = this.set_timeout(this.bind(this.tfp_loop), this.tfp.interval * 1000);
				if (this.tfp.interval < 8) {
					this.tfp.interval *= 2;
				}
				return;
			}
			this.timeouts.tfplto = null;
		};
		this.ghit = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				this.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,this.array_to_string(args,1));
			}
		};
		this.gevent = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && this.event_identifier != null) {
					args[pos] = this.event_identifier;
				}
				if (args[pos]) {
					this.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,this.array_to_string(args,pos+1));
				}
			}
		};
		this.addscripthit = function() { this.ghit(1,106,arguments,0,2,this.sonar_auto_init); };
		this.plainhit = function() { this.ghit(0,107,arguments,0,2,this.sonar_auto_init); };
		this.addscriptevent = function() { this.gevent(1,106,arguments,0,3,this.sonar_auto_init); };
		this.plainevent = function() { this.gevent(0,107,arguments,0,3,this.sonar_auto_init); };
		if (this.use_globals) {
			this.pendingdata = function(arr,fn) {
				var i;
				if (typeof window[arr] != 'undefined') {
					for (i=0 ; i<window[arr].length ; i++) {
						fn.apply(this,window[arr][i]);
					}
					window[arr]=[];
				}
			};
			this.sendpendingdata = function() {
				this.pendingdata('pp_gemius_hit_pdata',this.addscripthit);
				this.pendingdata('gemius_hit_pdata',this.plainhit);
				this.pendingdata('pp_gemius_event_pdata',this.addscriptevent);
				this.pendingdata('gemius_event_pdata',this.plainevent);
				this.pendingdata('gemius_shits',this.addscripthit);
				this.pendingdata('gemius_phits',this.plainhit);
				this.pendingdata('gemius_sevents',this.addscriptevent);
				this.pendingdata('gemius_pevents',this.plainevent);
				this.pendingdata('gemius_cmd_pdata',gemius_cmd);
			};
		}
		this.findvisapi = function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				this.visapi_h = 'hidden';
				this.visapi_s = 'visibilityState';
				this.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						this.visapi_h = p[i]+'Hidden';
						this.visapi_s = p[i]+'VisibilityState';
						this.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		};
		this.chints_to_params = function(chints) {
// chints_params.js 
	var params = [];
	var skeys = {'architecture':'arch','platform':'pm','model':'model','platformVersion':'pver','bitness':'bits'};
	var bkeys = {'mobile':'mobile','wow64':'wow64'};
	for (var key in skeys) {
		if (key in chints) {
			var str = new String(chints[key]);
			if (str.length > 0) {
				params[params.length] = '_ch_'+skeys[key]+'='+str.substr(0,50);
			}
		}
	}
	for (var key in bkeys) {
		if (key in chints) {
			params[params.length] = '_ch_'+bkeys[key]+'='+(chints[key]?'1':'0');
		}
	}
	var brands = null;
	if (chints['fullVersionList'] instanceof Array) {
		brands = chints['fullVersionList'];
	} else if (chints['brands'] instanceof Array) {
		brands = chints['brands'];
	}
	if (brands && JSON && typeof JSON.stringify == 'function') {
		var str = JSON.stringify(brands);
		var re = new RegExp('^\\[|\\]$|"brand":|"version":', 'g');
		params[params.length] = '_ch_brands='+str.replace(re,'').substr(0,500);
	}
	return params;

		};
		this.chints_loaded = function(chints) {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			if (this.waiting_for_chints == 0) {
				return;
			}
			try {
				this.inner = this.inner.concat(this.chints_to_params(chints));
			} catch(e) {};
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.chints_failed = function() {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.findchints = function() {
			if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
				try {
					var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
					navigator.userAgentData.getHighEntropyValues(hints).then(this.bind(this.chints_loaded),this.bind(this.chints_failed));
					this.timeouts.chto = this.set_timeout(this.bind(this.chints_failed),10000);
				} catch(e) {
					this.chints_failed();
				};
			} else {
				this.chints_failed();
			}
		};
		this.load_fpdata = function() {
			if (this.waiting_for_consent==0 && this.load_fpdata_started==0) {
				this.load_fpdata_started = 1;
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					this.fpdata = '';
					this.fpcdomain = '';
					this.fpdata_loaded();
				} else {
					var url = (this.hssl?'https://':'http://')+this.hc+'/fpdata.js?href='+domain;
					url += this.is_gde?'&gde=1':'';
					this.timeouts.sto = this.set_timeout(this.bind(this.scriptto),10000);
					this.append_script(url,this.bind(this.fpdata_loaded),0);
				}
			}
		};
		this.load_lsdata = function() {
			if (this.waiting_for_consent==0 && this.load_lsdata_started==0) {
				this.load_lsdata_started = 1;
				if (this.ssl) {
					this.addframe(1,'get','',this.second_datareceiver);
				} else {
					this.addframe(0,'get','',this.first_datareceiver);
				}
			}
		};
		this.getchromever = function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		};
		this.getanticache = function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		};
		this.gsconf_loaded = function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof this.src == 'string') {
				var url = new URL(this.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+this.version+'&v='+this.getanticache();
				this.append_script(url,null,0);
			}
		};
		this.init_timeout = function() {
			if (this.timeouts.initto!=null) {
				this.timeouts.initto = null;
				this.init();
			}
		};
		this.gen_exid = function() {
			var refresh = !(this.exid == '');
			var ts = (new Date()).getTime();
			var exts = Math.floor(ts/1000).toString(16);
			var exrnd = Math.floor(Math.random()*1000000);
			var exuniqueid = ((ts%1000)*1000000 + exrnd).toString(16);
			this.exid = exts + Array(9-exuniqueid.length).join('0') + exuniqueid;
			if (refresh && this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.add_gde_listener = function(callback) {
			this.gde_callbacks[this.gde_callbacks.length] = callback;
			try {
				callback(this.gde_params(), this.gde_params_ready);
			} catch (e) {}
		};
		this.gde_event = function(id) {
			if (this.has_consent && !this.gde_params_ready) {
				if (typeof id == 'string') {
					this.tfp_add_fix({"id":id, "refs":this.ref_params()});
				}
			}
		};
		this.gde_params = function() {
			var params = this.ref_params_obj();
			params.gde = 1;
			if (this.has_consent) {
				params.exid = this.exid;
				if (this.tfp.fpdata != '') {
					params.tfpdata = this.tfp.fpdata;
				}
				if (this.fpdata != '') {
					params.fpdata = this.getrawfpdata();
				}
				if (this.lsdata != '') {
					params.lsdata = this.lsdata;
				}
			}
			return params;
		};
		this.sync_gde_params = function() {
			this.gde_params_ready = (this.has_consent === false) || ((this.tfp.need_sync == 0) && (this.waiting_for_fpdata == 0) && (this.waiting_for_lsdata == 0));
			var params = this.gde_params();
			for (var i=0 ; i<this.gde_callbacks.length ; i++) {
				try {
					this.gde_callbacks[i](params, this.gde_params_ready);
				} catch (e) {}
			}
		};
		this.gde_init = function(params) {
			this.init(params);
		};
		this.init = function(params) {
			if (this.timeouts.initto!=null) {
				if (this.timeouts.initto.to!=null) {
					clearTimeout(this.timeouts.initto.to);
				}
				this.timeouts.initto = null;
			}
			if (this.init_called) {
				return;
			}
			this.init_called = 1;
			if (typeof params == 'object') {
				this.init_params(params);
			} else {
				params = {};
			}
			this.timer_data["lasttime"] = ((new Date()).getTime());
			this.timer_data["tint"] = setInterval(this.bind(this.timer),60*1000);
			if (this.dnt==0 && this.explicit_consent!==false) {
				this.getfpcookie();
				this.waiting_for_fpdata = ((this.fpdata.length>0 && this.fpdata[0]=='-') || this.fpdata=='')?1:0;
			} else {
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			try {
				if (this.dnt==0 && this.explicit_consent!==false) {
					this.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (this.waiting_for_lsdata==0) {
						this.lsdata='-NOTSUP';
					}
				} else {
					this.waiting_for_lsdata = 1;
					this.lsdata = "-DNT";
				}
			} catch (e) {
				this.waiting_for_lsdata = 0;
				this.lsdata='-TURNEDOFF';
			}
			this.require_consent_info = 0;
			if (this.dnt==0 && this.explicit_consent!==false) {
				if (this.explicit_consent===null && this.use_cmp && (typeof gemius_cmpclient == "object") && gemius_cmpclient.find_cmp()) {
					this.cmp_found = 1;
					if (this.cmp_timeout==Infinity) {
						this.require_consent_info = 1;
					} else {
						this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),this.cmp_timeout);
					}
					gemius_cmpclient.get_consent(this.bind(this.consent_loaded),this.cmp_purposes());
				} else if (this.explicit_consent===null && this.gdpr_params() != '') {
					this.gdpr_found = 1;
					this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),10000);
					var url = (this.hssl?'https://':'http://')+this.hc+'/gdprdata.js' + this.gdpr_params(true);
					url += this.is_gde?'&gde=1':'';
					this.append_script(url,this.bind(this.gdprdata_loaded),0);
				} else {
					this.waiting_for_consent = 0;
					this.has_consent = true;
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
			} else {
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			this.paramsready();
			this.latehits();
			this.add_event(document,"mousedown",this.bind(this.mousedown));
			if (this.use_globals) {
				gemius_hit = this.bind(this.plainhit);
				gemius_event = this.bind(this.plainevent);
				pp_gemius_hit = this.bind(this.addscripthit);
				pp_gemius_event = this.bind(this.addscriptevent);
				var p = params;
				if (typeof p['identifier'] == 'undefined' && typeof gemius_identifier == 'undefined' && typeof pp_gemius_identifier == 'undefined') {
					this.sonar_auto_init = (typeof p['sonar_auto_init_disabled'] == 'boolean')?(p['sonar_auto_init_disabled']?0:1):(typeof gemius_sonar_auto_init_disabled == 'boolean')?(gemius_sonar_auto_init_disabled?0:1):(typeof pp_gemius_sonar_auto_init_disabled == 'boolean')?(pp_gemius_sonar_auto_init_disabled?0:1):1;
				}
				try {
					if (typeof gemius_loaded != "undefined") {
						gemius_loaded();
					} else if (typeof pp_gemius_loaded != "undefined") {
						pp_gemius_loaded();
					}
				} catch (e) {}
				this.event_identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined')?gemius_identifier:(typeof pp_gemius_identifier != 'undefined')?pp_gemius_identifier:this.event_identifier;
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i](params);
					}
				}
				this.sendpendingdata();
			}
			this.send_bfview();
		};
		this.start = function() {
			if (this.started) {
				return;
			}
			this.started = true;
			if (this.use_globals) {
				gemius_init = this.bind(this.init);
				pp_gemius_init = this.bind(this.init);
				gemius_close = this.bind(function() { this.closing = 1; });
			}
			this.getdntcookie();
			this.getfpcap();
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.flashv = this.getflashv();
			this.waiting_on_prerender = 0;
			this.findchints();
			this.findvisapi();
			if (this.visapi_s != '') {
				if (document[this.visapi_s] == 'prerender') {
					this.waiting_on_prerender = 1;
				}
				this.add_event(document,this.visapi_c,this.bind(this.visibilitychanged));
			}
			this.gen_exid();
			if ('onpagehide' in window) {
				this.onpagehide = true;
				this.add_event(window,"pagehide",this.bind(this.pagehide));
				this.add_event(window,"pageshow",this.bind(this.pageshow));
			} else {
				this.add_event(window,"unload",this.bind(this.unload, true));
				this.add_event(window,"beforeunload",this.bind(this.unload, true));
			}
			this.add_event(window,'message',this.bind(this.msgreceiver));
			this.frametype_init();
			this.ref_update();
			this.tfp_init();
			if (this.use_globals) {
				this.pendingdata('gemius_init_pdata',this.init);
				this.pendingdata('pp_gemius_init_pdata',this.init);
				if (!this.init_called) {
					var timeout = (typeof gemius_init_timeout == 'number')?gemius_init_timeout:(typeof pp_gemius_init_timeout == 'number')?pp_gemius_init_timeout:null;
					if (typeof timeout == 'number') {
						if (timeout == Infinity) {
							this.require_consent_info = 1;
						} else {
							this.timeouts.initto = this.set_timeout(this.bind(this.init_timeout),timeout);
						}
					} else {
						gemius_init();
					}
				}
			} else {
				this.require_consent_info = 1;
			}
		};
	}
	/** @define {number} */
	GemiusHitcolConnector.min = 0;
}


(function(name, cmds,flag) {
	var exists = name in window;
	if (!exists) {
		window[name] = new GemiusHitcolConnector(flag);
	}
// gcmd.js 
function define_gemius_cmd(conn_name, cmds) {
	var conn = window[conn_name];
	if (typeof gemius_cmd == 'undefined' || !('_' in gemius_cmd)) {
		gemius_cmd = function() {
			if (!arguments.length || typeof arguments[0] != 'string') {
				return;
			}
			var cmd = arguments[0];
			if (cmd in gemius_cmd) {
				var args = [];
				for (var i = 1; i < arguments.length; ++i) {
					args[args.length] = arguments[i];
				}
				return gemius_cmd[cmd].apply({}, args);
			}
		}
		gemius_cmd._ = 1;
	}
	for (var cmd in cmds) {
		gemius_cmd[cmd] = conn.bind(conn[cmds[cmd]]);
	}
	if (typeof pp_gemius_cmd == 'undefined' || !('_' in pp_gemius_cmd)) {
		pp_gemius_cmd = gemius_cmd;
	}
}
	define_gemius_cmd(name,cmds);
	if (!exists) {
		window[name].start();
	}
})('gemius_hcconn', {'referrer_override':'referrer_override'});
