// For license information, see `https://assets.adobedtm.com/31ba12aaaf5b/3f9fafe0f01a/57ef051d03b0/RC9a6df602b6eb4abfa35b0801515d0815-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/31ba12aaaf5b/3f9fafe0f01a/57ef051d03b0/RC9a6df602b6eb4abfa35b0801515d0815-source.min.js', "function getWinHeight(){return win?std?document.documentElement.clientHeight:document.body.clientHeight:window.innerHeight}function getWinWidth(){return win?std?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth}function getScrHeight(){return Math.max.apply(null,[document.documentElement.clientHeight,document.body.clientHeight,document.documentElement.scrollHeight,document.body.scrollHeight])}function getScrTop(){return ofs?pageYOffset:std?document.documentElement.scrollTop:document.body.scrollTop}var wh,dw,dh,dt,db,idv,mdv,wdt,wdb,wdv,loc,dev,mh,win=void 0===window.innerHeight,ofs=\"number\"==typeof pageYOffset,std=\"CSS1Compat\"===document.compatMode,addListener=window.addEventListener?function(d,e){window.addEventListener(d,e,!1)}:window.attachEvent?function(d,e){var t=function(){e.call(window,window.event)};window.attachEvent(\"on\"+d,t)}:function(d,e){window[\"on\"+d]=e};addListener(\"load\",(function(){wh=getWinHeight(),(dw=getWinWidth())<640?(dev=\"sp\",mh=237):(dev=\"pc\",mh=41),dh=getScrHeight()-mh,loc=location.href.replace(/^http:\\/\\/[^\\/]+/,\"\").replace(/[#\\?].*$/,\"\").replace(/\\/$/,\"/index.html\"),dt=getScrTop(),db=wh+dt,idv=5*Math.round(wh/dh*20),mdv=(mdv=isNaN(idv)?0:idv)>100?100:mdv,console.log(\"per-pv:\"+loc+\":\"+dev+\":\"+mdv+\"%\")})),addListener(\"scroll\",(function(){(wdt=getScrTop())<dt&&(dt=wdt),(wdb=wdt+wh)>db&&(db=wdb),(wdv=5*Math.round((db-dt)/dh*20))>mdv&&mdv<100&&(mdv=wdv>100?100:wdv,console.log(\"per-pv:\"+loc+\":\"+dev+\":\"+mdv+\"%\"))})),addListener(\"resize\",(function(){wh=getWinHeight(),dw=getWinWidth(),wdt=getScrTop(),(wdb=wdt+wh)>db&&(db=wdb),dw<640?(dev=\"sp\",mh=237):(dev=\"pc\",mh=41),dh=getScrHeight()-mh,(wdv=5*Math.round((db-dt)/dh*20))>mdv&&mdv<100&&(mdv=wdv>100?100:wdv,console.log(\"per-pv:\"+loc+\":\"+dev+\":\"+mdv+\"%\"))})),addListener(\"beforeunload\",(function(){mdv>0&&(s.tl(!0,\"o\",\"per-pv:\"+loc+\":\"+dev+\":\"+(\"00\"+mdv).slice(-3)+\"%\",null,\"navigate\"),console.log(\"per-pv:\"+loc+\":\"+dev+\":\"+mdv+\"%\"))}));");