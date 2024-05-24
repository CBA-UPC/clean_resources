!this,(function(){"use strict";class GoogleAnalyticsPlugin{constructor(e){this.muted=!1,this.ga_extensions=[],this.quartiles=[0,0,0],this.ad_type="preroll",this.preroll_counter=0,this.midroll_counter=0,this.postroll_counter=0,this.event_categories={live:"Live",videos:"Videos"},this.event_actions={fullscreen_enter:"fullscreen_enter",fullscreen_exit:"fullscreen_exit",video_player_load:"video_player_load",video_start:"video_start",video_click_play:"video_click_play",video_pause:"video_pause",video_resume:"video_resume",video_mute:"video_mute",video_unmute:"video_unmute",video_25_percent:"video_25_percent",video_50_percent:"video_50_percent",video_75_percent:"video_75_percent",video_complete:"video_complete",live_start:"live_start",live_click_play:"live_click_play",live_pause:"live_pause",live_resume:"live_resume",live_mute:"live_mute",live_unmute:"live_unmute",live_complete:"live_complete",ad_start_preroll:"ad_start_preroll",ad_start_midroll:"ad_start_midroll",ad_start_postroll:"ad_start_postroll",ad_completed_preroll:"ad_completed_preroll",ad_completed_midroll:"ad_completed_midroll",ad_completed_postroll:"ad_completed_postroll",ad_skipped_preroll:"ad_skipped_preroll",ad_skipped_midroll:"ad_skipped_midroll",ad_skipped_postroll:"ad_skipped_postroll",ad_break_completed:"ad_break_completed"},console.warn("universal analytics by Google has been sunset, please use the ga4 plugin"),this.flowplayer=e}init(e,t,i){var s;this.config=e,this.video=i,this.muted=i.muted,i.on(["mount","timeupdate","play","ended","pause","playing","volumechange","ad-started","ad-completed","ad-skipped","ad-break-completed","config","play","fullscreenenter","fullscreenexit"],(s=t=>{switch(t.type){case"playing":this.track(e.live?this.event_actions.live_resume:this.event_actions.video_resume);break;case"pause":if(Math.abs(i.duration-i.currentTime)<1)break;this.track(e.live?this.event_actions.live_pause:this.event_actions.video_pause);break;case"play":(i.hasState("is-starting")||i.hasState("is-ended"))&&this.track(e.live?this.event_actions.live_start:this.event_actions.video_start),this.track(e.live?this.event_actions.live_click_play:this.event_actions.video_click_play);break;case"mount":this.track(this.event_actions.video_player_load);break;case"timeupdate":this.progress(i);break;case"ended":this.track(e.live?this.event_actions.live_complete:this.event_actions.video_complete),this.reset();break;case"volumechange":this.volumechange(i);break;case"ad-started":this.adstarted(t);break;case"ad-completed":this.adcompleted(t);break;case"ad-break-completed":this.adbreakcompleted();break;case"config":this.configured(t.detail);break;case"fullscreenenter":this.track(this.event_actions.fullscreen_enter);break;case"fullscreenexit":this.track(this.event_actions.fullscreen_exit);break;case"ad-skipped":this.adskipped()}},e=>{setTimeout((function(){if(!e.defaultPrevented)return s(e)}),0)}))}setup_ga(e){window.ga&&!this.ga_extensions.length&&e.forEach((e,t)=>{var i;window.ga("create",e,"auto","ext"+(t+1)),(null===(i=this.config)||void 0===i?void 0:i.ga.custom_data)&&window.ga("ext"+(t+1)+".set",this.config.ga.custom_data),this.ga_extensions.push("ext"+(t+1))})}progress(e){e.opts.live||(e.currentTime/e.duration>.25&&0===this.quartiles[0]?(this.quartiles[0]=1,this.track(this.event_actions.video_25_percent)):e.currentTime/e.duration>.5&&0===this.quartiles[1]?(this.quartiles[1]=1,this.track(this.event_actions.video_50_percent)):e.currentTime/e.duration>.75&&0===this.quartiles[2]&&(this.quartiles[2]=1,this.track(this.event_actions.video_75_percent)))}volumechange(e){this.muted!==e.muted&&(this.muted=e.muted,e.muted?this.track(e.opts.live?this.event_actions.live_mute:this.event_actions.video_mute):this.track(e.opts.live?this.event_actions.live_unmute:this.event_actions.video_unmute))}reset(){this.quartiles=[0,0,0],this.preroll_counter=0,this.midroll_counter=0,this.postroll_counter=0}configured(e){var t,i;(null===(t=null==e?void 0:e.ga)||void 0===t?void 0:t.event_actions)&&(this.event_actions=e.ga.event_actions),(null===(i=null==e?void 0:e.ga)||void 0===i?void 0:i.event_categories)&&(this.event_categories=e.ga.event_categories)}checkForAdCounterdstarted(e){var t;switch((null===(t=e.data)||void 0===t?void 0:t.ad_type)||"preroll"){case"midroll":this.ad_type="midroll",this.midroll_counter++,this.track(this.checkForAdCounter(this.event_actions.ad_start_midroll,this.midroll_counter));break;case"postroll":this.ad_type="postroll",this.postroll_counter++,this.track(this.checkForAdCounter(this.event_actions.ad_start_postroll,this.postroll_counter));break;default:this.ad_type="preroll",this.preroll_counter++,this.track(this.checkForAdCounter(this.event_actions.ad_start_preroll,this.preroll_counter))}}adcompleted(e){var t;switch((null===(t=e.data)||void 0===t?void 0:t.ad_type)||"preroll"){case"midroll":this.track(this.event_actions.ad_completed_midroll);break;case"postroll":this.track(this.event_actions.ad_completed_postroll);break;default:this.track(this.event_actions.ad_completed_preroll)}}adskipped(){if(this.ad_type)switch(this.ad_type){case"midroll":this.track(this.event_actions.ad_skipped_midroll);break;case"postroll":this.track(this.event_actions.ad_skipped_postroll);break;default:this.track(this.event_actions.ad_skipped_preroll)}else this.track(this.event_actions.ad_skipped_preroll)}ushToDataLayer(e,t,i){var s;if(window.dataLayer)try{window.dataLayer.push({event:"Flowplayer",video_name:i,action:e,category:t,duration:null===(s=this.video)||void 0===s?void 0:s.duration})}catch(e){}}track(e){var t,i,s,o,a;if(!this.config||!this.config.ga||!e||(null===(t=null==this?void 0:this.video)||void 0===t?void 0:t.hasState("consent-no-tracking")))return;const l=(null===(i=this.video)||void 0===i?void 0:i.opts.live)?this.event_categories.live:this.event_categories.videos,r=null===(s=this.config.ga)||void 0===s?void 0:s.ga_instances,n=(null===(o=null==this?void 0:this.config)||void 0===o?void 0:o.title)||(null===(a=this.config.metadata)||void 0===a?void 0:a.title)||"unknown video";return this.config.ga.data_layer_tracking?this.pushToDataLayer(e,l,n):(this.setup_ga(r),this.ga_extensions.length&&void 0!==window.ga&&null!==window.ga?void this.ga_extensions.forEach(t=>{window.ga(t+".send","event",l,e,n)}):console.debug("ga console.send","event",l,e,n))}}return function(e,t){if("object"==typeof exports&&"undefined"!=typeof module)return t;if(null===document.currentScript)return t;"flowplayer"in e||(e.flowplayer={extensions:[]});const i=e.flowplayer;"function"==typeof i?i(t):(Array.isArray(i.extensions)||(i.extensions=[]),~i.extensions.indexOf(t)||i.extensions.push(t))}(window,GoogleAnalyticsPlugin),GoogleAnalyticsPlugin}));