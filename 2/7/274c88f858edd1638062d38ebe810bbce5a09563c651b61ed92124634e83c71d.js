var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.xstream={pianoLoadCount:0,playlist:[],playListLoading:0,inlinePlayerState:"unset",tags:{},setCapping:function(){const t=ASCDP.pageSet,e=ASCDP.adS,i=e.xstream;if(e.lStorage&&t.storageAccess){var a=t.configs.xstream.capping&&t.configs.xstream.capping.closePerDay||2;let e=t.configs.xstream.capping&&t.configs.xstream.capping.dailyCapDays||1;var n=t.configs.xstream.capping&&t.configs.xstream.capping.closeRepeat||2;i.vrecLs.closeCounter++,t.configs.xstream.capping.closeRepeat&&i.vrecLs.closeCounter>=a*n&&(e=t.configs.xstream.capping.repeatCapDays||7),i.vrecLs.closeCounter%a||(i.vrecLs.cappingValid=(new Date).getTime()+864e5*e),localStorage.setItem("asadTls",JSON.stringify(t.technicalLS))}},destroy:instreamListener:function(e){const t=ASCDP.adS.xstream;"EVENT play"===e.detail?(t.inlinePlayerState="playing",t.player.destroy()):"EVENT pause"===e.detail&&(t.inlinePlayerState="paused")},generatePlaylist:function(){const e=ASCDP.pageSet,t=ASCDP.adS,i=t.xstream;i.config.pianoWidgetId&&e.target.gdpr_p1&&"true"===e.target.gdpr_p1[0]&&(window.cX&&window.cX.getUserId?i.getPianoPlaylist():t.loadModules(["cxsense"],i.getPianoPlaylist)),i.config.feedUrl&&i.getRSSPlaylist(),!i.config.defaultVideos||i.config.feedUrl||i.config.pianoWidgetId||(i.playlist=i.config.defaultVideos)},getRSSPlaylist:function(){const e=ASCDP.adS.xstream;e.playListLoading++;var i=new XMLHttpRequest;i.open("GET",e.config.feedUrl),i.onload=function(){if(200===i.status&&i.responseXML)e.feedToList(i.responseXML.getElementsByTagName("item")),e.playListLoading--;else if(200===i.status&&i.responseText){let t;try{let e=new DOMParser;t=e.parseFromString(i.responseText,"text/xml")}catch(e){}t&&(e.feedToList(t.getElementsByTagName("item")),e.playListLoading--)}},i.send()},getPianoPlaylist:function(){const t=ASCDP.adS.xstream;var i;window.cX&&"function"==typeof window.cX.getUserId?(t.playListLoading++,(i=new XMLHttpRequest).open("POST","https://api.cxense.com/public/widget/data"),i.addEventListener("load",function(){var e;200===i.status&&i.responseText&&(e=JSON.parse(i.responseText),t.feedToList(e.items),t.playListLoading--)}),i.withCredentials=!0,i.send(JSON.stringify({widgetId:t.config.pianoWidgetId,user:{ids:{usi:window.cX.getUserId()}},context:{url:location.href,referrer:location.origin}}))):t.pianoLoadCount<10&&(setTimeout(t.getPianoPlaylist,100),t.pianoLoadCount++)},feedToList:function(r){const e=ASCDP.pageSet,t=ASCDP.adS,i=t.xstream;let c,l="Thu, 01 Jan 1970 00:00:00 +0000",g=i.playlist||[],d="",p=[];t.lStorage&&e.storageAccess&&(i.vrecLs=e.technicalLS.nmt_vrec||{closeCounter:0,cappingValid:0,fullViewList:[],lastPlayed:0},d=i.vrecLs.fullViewList.join("|"));var a=(adSSetup.target.replace(/(branch|netspeed)=(.*?);/gi,"").match(/=(.*?);/g)||[]).join("|").replace(/[=;]/g,"").replace(/,/g,"|"),n=e.target.misc.join("|").replace(/,\|/g,"|"),o=adSSetup.pageName.replace(/_(index|story)/g,"").replace(/\//g,"|"),f=new RegExp((a+"|"+n+"|"+o).toLowerCase(),"i");function u(e){let t="";for(var i of e.children){let e=i.getAttribute("url");e&&e.match(/(m3u8|mp4)$/)?t=i:i.hasChildNodes()&&(t=u(i))}return t}for(let s=r.length-1;0<=s;s--){let e,t,i,a,n,o;if(r[s].getElementsByTagName){if(!(e=[u(r[s])||""])[0])continue;t=e[0].getAttribute("url"),a=i=r[s].getElementsByTagName("link")[0].innerHTML,n=r[s].getElementsByTagName("title")[0].innerHTML,o=(r[s].getElementsByTagName("description")||[{}])[0].innerHTML||"",l=r[s].getElementsByTagName("pubDate")[0].innerHTML}else{if(!r[s]["og-video"]&&!r[s]["og-video-url"])continue;n="string"==typeof r[s].heading?r[s].heading:r[s].heading[0]+" - "+r[s].heading[1],t=r[s]["og-video"]||r[s]["og-video-url"],i=r[s]["og-url"],a=r[s].click_url,o=r[s].description||"",l=r[s]["spr-videoPubDate"]||r[s].publishtime}"object"==typeof i&&(i=i[0]),(n+o).match(/live.?stream/gi)||(c={src:t,clickUrl:a,articleUrl:i,type:-1<t.indexOf("m3u8")?e&&e[0]&&e[0].getAttribute("type")||"application/x-mpegURL":-1<t.indexOf("mp4")?"video/mp4":"video/unknown",title:n.replace(/<!\[CDATA\[|]]>|„|“/gi,""),description:o.replace(/<!\[CDATA\[|]]>/gi,""),pubDate:l,withCredentials:-1<t.indexOf("m3u8")},-1<d.indexOf(t)?p.push(c):r[s].collection||c.title.match(f)||c.description.match(f)?g.unshift(c):g.push(c))}g=g.concat(p),i.playlist=g},loadPlayer:function(e,t){ASCDP.adS.xstream.playListLoading?setTimet)},100):ASCDP.adS.loadModules([e],()=>{ASCDP.adS[e].init(ASCDP.adS.xstream)},"extensions")},init:function(){const e=ASCDP.adS,i=e.xstream,a=ASCDP.pageSet;if(i.config=a.configs.xstream,!i.config.initDone){if(ASCDP.tcf){if("loaded"!==ASCDP.tcf.data.cmpStatus)return void setTimeout(i.init,100);if(a.noDFP)return}if(!e.globalSet||e.v3loading)setTimeout(i.init,100);else if(!i.config.blocked){if(i.config.initDone=!0,i.config.country){let t=!0;if(i.config.country.forEach(function(e){e.toLowerCase()===a.country.toLowerCase()&&(t=!1)}),t)return void("bild"===a.siteName&&window.utag.link({event_action:"blocked",event_label:"geo",event_data:{media_player:"xstream: "+a.branch,cause:a.country},event_name:"video"}))}if(e.lStorage&&a.storageAccess){if(a.technicalLS.nmt_vrec=a.technicalLS.nmt_vrec||{closeCounter:0,cappingValid:0,fullViewList:[],lastPlayed:0},i.vrecLs=a.technicalLS.nmt_vrec,i.vrecLs.fullViewList=i.vrecLs.fullViewList||[],i.vrecLs.cappingValid>(new Date).getTime())return void("bild"===a.siteName&&window.utag.link({event_action:"blocked",event_label:"capped",event_data:{media_player:"xstream: "+a.branch,cause:9<=i.vrecLs.closeCounter?"fc3":"fc"},event_name:"video"}));var t=i.config.capping&&i.config.capping.closePerDay||2,n=i.config.capping&&i.config.capping.dailyCapDays||1,o=i.config.capping&&i.config.capping.closeRepeat||2;(i.vrecLs.closeCounter>=t*o||0<i.vrecLs.closeCounter&&i.vrecLs.cappingValid&&i.vrecLs.cappingValid<(new Date).getTime()-864e5*n)&&(i.vrecLs.closeCounter=0,i.vrecLs.cappingValid=0),localStorage.setItem("asadTls",JSON.stringify(a.technicalLS))}i.wrapperList=document.querySelectorAll(i.config.textWrapper),(!i.wrapperList.length||"m"===a.view||window.innerWidth>parseInt(getComputedStyle(i.wrapperList[0]).width))&&(document.addEventListener("instreamEvent",i.instreamListener,!1),i.generatePlaylist(),i.loadPlayer(i.config.playerTechnology||"vicki",i))}}}};