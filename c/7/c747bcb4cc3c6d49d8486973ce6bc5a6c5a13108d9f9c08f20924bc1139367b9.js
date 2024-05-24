// For license information, see `https://assets.adobedtm.com/0681c221600c/a809aa50e68e/deedfa021d8f/RC33f789ae041246019fd12b7c0c3c53e6-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/0681c221600c/a809aa50e68e/deedfa021d8f/RC33f789ae041246019fd12b7c0c3c53e6-source.min.js', "DTM.tools.gfk={dl:{mediaID:_satellite.getVar(\"publisherID\"),regionID:\"ES\",hosts:{staging:\"ES-config-preproduction.sensic.net\",production:\"ES-config.sensic.net\"},environment:\"production\"!=_satellite.environment.stage||!_satellite.getVar(\"validPage\")||_satellite.getVar(\"translatePage\")?\"staging\":\"production\",libs:{page:\"s2s-web.js\",html5:\"html5vodextension.js\",html5live:\"html5liveextension.js\",youtube:\"youtubevodextension.js\"},url:\"\",type:\"WEB\",optin:!0,logLevel:\"none\"},trackedPV:!1,map:{events:{photogallery:\"photogallery\",videoReady:\"videoReady\",videoPlay:\"videoPlay\",audioReady:\"audioReady\",audioPlay:\"audioPlay\",audioResumed:\"audioResumed\",audioPaused:\"audioPaused\",audioEnd:\"audioEnd\",audioSeekInit:\"audioSeekInit\",audioSeekComplete:\"audioSeekComplete\"}},init:function(){DTM.tools.list.push(\"gfk\"),this.trackPV()},trackPV:function(){if(!0===this.trackedPV)return!1;this.loadCoreLib();var e=gfkS2s.getAgent(),t={c1:_satellite.getVar(\"server\"),c2:this.getPrimaryCategory()};return e.impression(\"default\",t),this.trackedPV=!0,0==DTM.dataLayer.asyncPV&&DTM.notify(\"PV tracked in tool <gfk> (Data Layer)\"),!0},trackAsyncPV:function(){this.trackedPV=!1;var e=gfkS2s.getAgent(),t={c1:_satellite.getVar(\"server\"),c2:this.getPrimaryCategory()};return e.impression(\"default\",t),this.trackedPV=!0,DTM.notify(\"Async PV tracked in tool <gfk>\"),this.trackedPV},trackEvent:function(e){if(void 0===_satellite.getVar(\"event\")[e])return DTM.notify(\"GFK event past not valid <\"+t+\">\",\"warn\"),!1;var t=_satellite.getVar(\"event\")[e].eventInfo.eventName,a=_satellite.getVar(\"event\")[e].attributes;if(!this.map.events.hasOwnProperty(t))return DTM.events.setEffect(e,\"gfk\",!1),!1;var i=!1;switch(t){case\"photogallery\":let e=gfkS2s.getAgent(),r={c1:_satellite.getVar(\"server\"),c2:this.getPrimaryCategory()};e.impression(\"default\",r),i=!0;break;case\"videoReady\":case\"audioReady\":if(!a.hasOwnProperty(\"player\")||!a.hasOwnProperty(\"mediaID\")||this.streaming.myStreamingAnalytics.hasOwnProperty(a.mediaID))return!1;i=this.streaming.init(t,a);break;case\"audioPlay\":case\"audioResumed\":case\"videoPlay\":if(!a.hasOwnProperty(\"mediaID\")||!this.streaming.myStreamingAnalytics.hasOwnProperty(a.mediaID))return!1;i=this.streaming.play(t,a);break;case\"audioPaused\":case\"audioEnd\":if(!a.hasOwnProperty(\"mediaID\")||!this.streaming.myStreamingAnalytics.hasOwnProperty(a.mediaID))return!1;i=this.streaming.pause(t,a);break;case\"audioSeekInit\":case\"audioSeekComplete\":if(!a.hasOwnProperty(\"mediaID\")||!this.streaming.myStreamingAnalytics.hasOwnProperty(a.mediaID))return!1;i=this.streaming.seek(t,a);break;default:i=!1}return!0===i&&DTM.notify(\"Event <\"+t+\"> tracked in tool <gfk>\"),DTM.events.setEffect(e,\"gfk\",i),i},getLibURL:function(e){var t=!1,a=this.dl,i=a.hosts[a.environment];return a.libs.hasOwnProperty(e)&&(t=\"https://\"+i+\"/\"+a.libs[e]),t},getPrimaryCategory:function(){var e=\"\";if(\"\"!=_satellite.getVar(\"primaryCategory\"))e=\"home\"==_satellite.getVar(\"primaryCategory\")?\"homepage\":_satellite.getVar(\"primaryCategory\");else{var t=/http.?:\\/\\/([^\\/]*)\\/([^\\/]*)\\//i.exec(_satellite.getVar(\"destinationURL\"));e=t?t[2]:\"homepage\"}return e},loadCoreLib:function(){window.gfkS2sConf={media:this.dl.mediaID,url:this.getLibURL(\"page\"),type:this.dl.type};var e=window,t=document,a=gfkS2sConf,i=\"script\",r=\"gfkS2s\",n=\"gfkS2s\";if(!t.getElementById(r)){e.gfkS2sConf=a,e[r]={},e[r].agents=[];var s=[\"playStreamLive\",\"playStreamOnDemand\",\"stop\",\"skip\",\"screen\",\"volume\",\"impression\"];e.gfks=function(){function e(e,t,a){return function(){e.p=a(),e.queue.push({f:t,a:arguments})}}function t(t,a,i){for(var r={queue:[],config:t,cb:i,pId:a},n=0;n<s.length;n++){var o=s[n];r[o]=e(r,o,i)}return r}return t}(),e[r].getAgent=function(t,i){function n(e,t){return function(){return e.a[t].apply(e.a,arguments)}}for(var o={a:new e.gfks(a,i||\"\",t||function(){return 0})},l=0;l<s.length;l++){var d=s[l];o[d]=n(o,d)}return e[r].agents.push(o),o};var o=function(e,a){var r=t.createElement(i),n=t.getElementsByTagName(i)[0];r.id=e,r.async=!0,r.type=\"text/javascript\",r.src=a,n.parentNode.insertBefore(r,n)};a.hasOwnProperty(n)&&o(r+n,a[n]),o(r,a.url)}},streaming:{myStreamingAnalytics:[],libsLoaded:{html5:!1,html5live:!1,youtube:!1},loadLib:function(e,t,a){if(_satellite.getVar(\"platform\")!=DTM.PLATFORM.WEB)return!1;if(this.libsLoaded.hasOwnProperty(e)&&!1===this.libsLoaded[e]){var i=DTM.tools.gfk.getLibURL(e);DTM.utils.loadScript(i,t,a)}else this.libsLoaded.hasOwnProperty(e)&&!0===this.libsLoaded[e]&&t.call(this,a)},init:function(e,t){var a=!1,i=t.player,r=t.hasOwnProperty(\"mediaName\")?t.mediaName:i.hasOwnProperty(\"title\")?i.title:\"\",n=t.hasOwnProperty(\"mediaDuration\")?t.mediaDuration:i.hasOwnProperty(\"duration\")?parseInt(i.duration):\"\",s=t.hasOwnProperty(\"playerType\")?DTM.utils.getPlayerType(t.playerType):\"html5\",o=t.hasOwnProperty(\"mediaRepType\")?t.mediaRepType:\"vod\";switch(s){case\"html5\":case\"realhls\":\"streaming\"==o?(this.loadLib(\"html5live\",(function(e){DTM.tools.gfk.streaming.libsLoaded.html5live=!0,DTM.tools.gfk.streaming.myStreamingAnalytics[e.mediaID]={gfkObject:new window.gfkS2sExtension.HTML5LiveExtension(e.player,window.gfkS2sConf,\"default\",{programmname:e.mediaName,channelname:_satellite.getVar(\"publisher\"),c1:_satellite.getVar(\"server\"),c2:DTM.tools.gfk.getPrimaryCategory()}),player:i}}),{mediaID:t.mediaID,player:i,mediaName:r,mediaDuration:n}),a=!0):(this.loadLib(\"html5\",(function(e){DTM.tools.gfk.streaming.libsLoaded.html5=!0,DTM.tools.gfk.streaming.myStreamingAnalytics[e.mediaID]={gfkObject:new window.gfkS2sExtension.HTML5VODExtension(e.player,window.gfkS2sConf,\"default\",{programmname:e.mediaName,channelname:_satellite.getVar(\"publisher\"),streamlength:e.mediaDuration,c1:_satellite.getVar(\"server\"),c2:DTM.tools.gfk.getPrimaryCategory()}),player:i}}),{mediaID:t.mediaID,player:i,mediaName:r,mediaDuration:n}),a=!0);break;case\"youtube\":\"vod\"==o&&(this.loadLib(\"youtube\",(function(e){DTM.tools.gfk.streaming.libsLoaded.youtube=!0,DTM.tools.gfk.streaming.myStreamingAnalytics[e.mediaID]={gfkObject:new window.gfkS2sExtension.YoutubeVODExtension(e.player,window.gfkS2sConf,\"default\",{programmname:e.mediaName,channelname:_satellite.getVar(\"publisher\"),streamlength:e.mediaDuration,c1:_satellite.getVar(\"server\"),c2:DTM.tools.gfk.getPrimaryCategory()}),player:e.player}}),{mediaID:t.mediaID,player:i,mediaName:r,mediaDuration:n}),a=!0);break;default:a=!1}return a},play:function(e,t){var a=!1;if(\"youtube\"==(t.hasOwnProperty(\"playerType\")?DTM.utils.getPlayerType(t.playerType):\"html5\")&&\"videoPlay\"==e){let e=this.myStreamingAnalytics[t.mediaID].gfkObject,a=this.myStreamingAnalytics[t.mediaID].player,i=t.hasOwnProperty(\"mediaName\")?t.mediaName:a.hasOwnProperty(\"videoTitle\")?a.videoTitle:\"\",r=t.hasOwnProperty(\"mediaDuration\")?t.mediaDuration:\"function\"==typeof a.getDuration?parseInt(a.getDuration()):\"\";e.setParameter(\"default\",{programmname:i,channelname:_satellite.getVar(\"publisher\"),streamlength:r,c1:_satellite.getVar(\"server\"),c2:DTM.tools.gfk.getPrimaryCategory()})}return a}}},DTM.tools.gfk.init();");