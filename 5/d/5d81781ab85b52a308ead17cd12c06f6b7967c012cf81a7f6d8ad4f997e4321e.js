function AdFox_SetLayerVis(e,t){document.getElementById(e).style.visibility=t}function AdFox_Open(e){AdFox_SetLayerVis("AdFox_DivBaseFlash_"+e,"hidden"),AdFox_SetLayerVis("AdFox_DivOverFlash_"+e,"visible")}function AdFox_Close(e){AdFox_SetLayerVis("AdFox_DivOverFlash_"+e,"hidden"),AdFox_SetLayerVis("AdFox_DivBaseFlash_"+e,"visible")}function adfoxSdvigContent(e,t,n){var o=document.getElementById("adfoxBanner"+e).style;o.width="100%"==t?t:t+"px",o.height="100%"==n?n:n+"px"}function adfoxVisibilityFlash(e,t,n){var o=document.getElementById(e).style;o.width="100%"==t?t:t+"px",o.height="100%"==n?n:n+"px"}function adfoxStart(e,t,n,o,i,r,a,d){1==t?adfoxVisibilityFlash("adfoxFlash1"+e,i,r):2==t&&(adfoxVisibilityFlash("adfoxFlash2"+e,a,d),"yes"==n&&adfoxVisibilityFlash("adfoxFlash1"+e,i,r),"yes"==o?adfoxSdvigContent(e,a,d):adfoxSdvigContent(e,i,r))}function adfoxOpen(e,t,n,o,i){var r=new Image,a=document.getElementById("aEventOpen"+e);a&&(r.src=a.title+"&rand="+1e6*Math.random()+"&prb="+1e6*Math.random()),adfoxVisibilityFlash("adfoxFlash2"+e,o,i),"yes"!=t&&adfoxVisibilityFlash("adfoxFlash1"+e,1,1),"yes"==n&&adfoxSdvigContent(e,o,i)}function adfoxClose(e,t,n,o,i){var r=new Image,a=document.getElementById("aEventClose"+e);a&&(r.src=a.title+"&rand="+1e6*Math.random()+"&prb="+1e6*Math.random()),adfoxVisibilityFlash("adfoxFlash2"+e,1,1),"yes"!=t&&adfoxVisibilityFlash("adfoxFlash1"+e,o,i),"yes"==n&&adfoxSdvigContent(e,o,i)}!function(){if("undefined"!=typeof _montblanc)var e=!0;else{var e=!1;console.log("_montblanc doesnt included")}var t={};t.dom={},t.counter=1,t.util={debugBase:-1!==window.location.search.indexOf("adfox_debug=1"),debugExtend:-1!==window.location.search.indexOf("adfox_debug=2"),DOC_READY:!1,CRTG_CONTENT:"",getBodyScrollTop:function(e){var t=e||window;return t.pageYOffset||t.document.documentElement&&t.document.documentElement.scrollTop||t.document.body&&t.document.body.scrollTop},getBodyScrollLeft:function(e){var t=e||window;return t.pageXOffset||t.document.documentElement&&t.document.documentElement.scrollLeft||t.document.body&&t.document.body.scrollLeft},trackPixel:function(e){var t=e,n=new Image;""!=t&&(n.src=t,t="")},getElementPosition:function(e,t){var n=t||document,o=n.getElementById(e),i={};if(o){for(i.width=o.offsetWidth,i.height=o.offsetHeight,i.left=0,i.top=0;o;)i.left+=o.offsetLeft,i.top+=o.offsetTop,o=o.offsetParent;return i}return!1},createScript:function(e,t,n){var o=n||document,i=o.createElement("script");return i.src=e,i.type="text/javascript",i.async=!!t,i},insertScript:function(e,t){var n=t||document,o=n.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)},getProtocol:function(e){var t=e||document;return"https:"==t.location.protocol?"https:":"http:"},getScreenSize:function(){var e="",t="";if(self.screen)t=screen.width,e=screen.height;else if(self.java){var n=java.awt.Toolkit.getDefaultToolkit(),o=n.getScreenSize();t=o.width,e=o.height}return t&&e?[t,e]:["",""]},getWindowSize:function(e){var t,n,o=e||window;return"number"==typeof o.innerWidth?(t=o.innerWidth,n=o.innerHeight):o.document.documentElement&&(o.document.documentElement.clientWidth||o.document.documentElement.clientHeight)?(t=o.document.documentElement.clientWidth,n=o.document.documentElement.clientHeight):o.document.body&&(o.document.body.clientWidth||o.document.body.clientHeight)&&(t=o.document.body.clientWidth,n=o.document.body.clientHeight),{width:t,height:n}},getDate:function(){var e=new Date;return{date:e.getDate(),day:e.getDay(),hour:e.getHours()}},wrapScript:function(e){return'<script type="text/javascript">'+e+"</script>"},createElement:function(e,t,n,o){var i=o||document,r=i.createElement(e);return"string"==typeof t&&r.setAttribute("id",t),"string"==typeof n&&(r.className+=n),r},getCodeScript:function(e,n,o,i,r){var a;if(10>e){try{document.all&&!window.opera?a=window.frames[o].document:document.getElementById&&(a=document.getElementById(o).contentDocument)}catch(d){}a?(a.write('<script type="text/javascript" src="'+n+'"></script>'),t.inner.checkBannerLoaded(i,r,!0)):setTimeout(function(){t.util.getCodeScript(++e,n,o)},100)}else 10==e&&(window.console.log("Can not access to frameDocument && frameWindow; id = "+o),t.inner.checkBannerLoaded(i,r,!1))},createAdIframe:function(e,t){var n=t||document,o=n.createElement("iframe");return o.setAttribute("id",e),o.setAttribute("marginwidth","0"),o.setAttribute("marginheight","0"),o.setAttribute("scrolling","no"),o.setAttribute("frameBorder","0"),o.setAttribute("width","1"),o.setAttribute("height","1"),o.style.position="absolute",o},getReferrer:function(){if("undefined"!=typeof document.referrer){if("undefined"==typeof e)var e=escape(document.referrer)}else var e="";return e},ajaxLoad:function(e,t){var n;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),n.onreadystatechange=function(){4==xmlhttp.readyState&&200==xmlhttp.status&&t(n.responseText)},n.open("GET",e,!0),n.send()}},t.init={criteo:function(e){function n(e){var t,n,o,i=document.cookie.split(";");for(t=0;t<i.length;t++)if(n=i[t].substr(0,i[t].indexOf("=")),o=i[t].substr(i[t].indexOf("=")+1),n=n.replace(/^\s+|\s+$/g,""),n==e)return unescape(o);return""}var o=e,i="crtg_rta",r="crtg_content";!function(){var e=t.util.getProtocol()+"//rtax.criteo.com/delivery/rta/rta.js?netId="+escape(o)+"&amp;cookieName="+escape(i)+"&amp;rnd="+Math.floor(99999999999*Math.random())+"&amp;varName="+escape(r);t.util.insertScript(t.util.createScript(e,!0))}(),(t.util.debugBase||t.util.debugExtend)&&console.log("Criteo is initialized. Crtg_nid = "+o),t.util.CRTG_CONTENT=n(i)},begun:function(){var e=t.util.getProtocol()+"//autocontext.begun.ru/autocontext2_async.js";t.util.insertScript(t.util.createScript(e,!1)),(t.util.debugBase||t.util.debugExtend)&&console.log("Begun is initialized")}},t.inner={getBegunLevel:function(e){var t=0,n=0;for(var o in e.banners)for(i=0;i<e.banners[o].length;i++)banner=e.banners[o][i],n++,banner.priority&&banner.priority>t&&(t=banner.priority);return n>0?t+1:0},show_b:function(e,n,o,i,r,a,d,l,c,u){if("begun_test"==a){var s=Math.floor(1e13*Math.random()),f="renderBegunResponse"+s;window[f]=function(o){d.puid52=t.inner.getBegunLevel(o),d.puid53=o.params.impression_id;var i=new Date,r=i-n;e&&t.util.trackPixel("http://rcounter.rambler.ru/count?v=0.1&id=124&pid=1&path="+l["begun-block-id"]+".d"+t.inner.returnTimeInterval(r)),t.banner.show(a,d,c)};var b="http://autocontext.begun.ru/context.jsp?pad_id="+l["begun-auto-pad"]+"&block_id="+l["begun-block-id"]+"&json=1&callback="+f+"&first=1&rq_sess="+s+"&secure="+("https:"==document.location.protocol?"1":"0")+"&real_refer="+document.location.href,g=typeof a;if("string"==g)var m=document.getElementById(a);else if("object"==g)var m=a;var p=t.util.createScript(b,!0);m?m.appendChild(p):(console.log("adfox can not insert Begun auction request. Start ordinary adfox adcall"),t.banner.show(a,d,c))}else t.util.debugExtend&&console.log("before_begun_check_call: adCall = "+i+"; bid = "+l["begun-block-id"]+"; div_id = "+a+"; unic_id = "+o),20>r?u.Begun&&u.Begun.Autocontext&&u.Begun.Autocontext.addBlock?Begun.Autocontext.addBlock(l,function(r,u){d.puid52=r,d.puid53=u,t.util.debugExtend&&console.log("before_ban_call: adCall = "+i+"; bid = "+l["begun-block-id"]+"; div_id = "+a+"; unic_id = "+o);var s=new Date,f=s-n;t.util.debugExtend&&console.log("begun_callback_time : "+f+"; adCall = "+i+"; bid = "+l["begun-block-id"]+"; div_id = "+a+"; unic_id = "+o),e&&(t.util.trackPixel("//rcounter.rambler.ru/count?v=0.1&id=124&pid=1&path="+l["begun-block-id"]+".d"+t.inner.returnTimeInterval(f)),t.util.trackPixel("//rcounter.rambler.ru/count?v=0.1&id=125&pid=1&path="+l["begun-block-id"]+".d_yes"),t.util.trackPixel("//rcounter.rambler.ru/count?v=0.1&id=127&pid=1&path="+l["begun-block-id"]+".d"+r)),t.banner.show(a,d,c,function(o,i){var r=new Date,a=r-n,d=r-s;e&&(t.util.trackPixel("//rcounter.rambler.ru/count?v=0.1&id=126&pid=1&path="+l["begun-block-id"]+".d"+t.inner.returnTimeInterval(a)+".d"+t.inner.returnTimeInterval(d)),t.util.trackPixel("//rcounter.rambler.ru/count?v=0.1&id=126&pid=1&path="+i))}),t.util.debugExtend&&console.log("after_ban_call: adCall = "+i+"; bid = "+l["begun-block-id"]+"; div_id = "+a+"; unic_id = "+o)}):setTimeout(function(){t.inner.show_b(e,n,o,i,++r,a,d,l,c,u)},100):(t.util.debugExtend&&console.log("win.Begun.Autocontext.addBlock is not defined.; div_id = "+a),e&&t.util.trackPixel("//rcounter.rambler.ru/count?v=0.1&id=125&pid=1&path="+l["begun-block-id"]+".d_no"),t.banner.show(a,d,c)),t.util.debugExtend&&console.log("after_begun_check_call: adCall = "+i+"; bid = "+l["begun-block-id"]+"; div_id = "+a+"; unic_id = "+o)},checkBannerLoaded:function(e,t,n){"function"==typeof t&&t(e,n)},getMonblanc:function(t){return e?_montblanc.get(t,""):""},returnTimeInterval:function(e){return 500>e?"05":e>=500&&1e3>e?"0510":e>=1e3&&1500>e?"1015":e>=1500&&2e3>e?"1520":e>=2e3&&2500>e?"2025":e>=2500&&3e3>e?"2530":e>=3e3&&4e3>e?"3040":e>=4e3&&5e3>e?"4050":e>=5e3?"50":void 0}},t.banner={needReload:!1,account_id:171817,pr:Math.floor(1e6*Math.random()),dl:escape(document.location),montblanc:{puid3:t.inner.getMonblanc("4i"),puid4:t.inner.getMonblanc("c6"),puid11:t.inner.getMonblanc("dd"),puid22:t.inner.getMonblanc("y1"),puid33:t.inner.getMonblanc("bj"),puid37:t.inner.getMonblanc("k4"),puid38:t.inner.getMonblanc("x3")},show:function(e,n,o,i){var r=typeof e;if("function"==typeof o&&(i=o),"string"==r)var a=document.getElementById(e);else if("object"==r)var a=e;var d=Math.floor(1e6*Math.random()),l=Math.floor(1e6*Math.random()),c=0,u=t.util.createElement("div","AdFox_banner_"+d,o),s=t.util.createAdIframe("AdFox_iframe_"+d),f=t.banner.needReload?Math.floor(1e6*Math.random()):t.banner.pr,b=t.util.getProtocol()+"//ads.adfox.ru/"+(n.account_id?n.account_id:t.banner.account_id)+"/prepareCode?pfc="+(n.pfc?n.pfc:"a")+"&amp;pfb="+(n.pfb?n.pfb:"a")+"&amp;pt=b&amp;pd="+t.util.getDate().date+"&amp;pw="+t.util.getDate().day+"&amp;pv="+t.util.getDate().hour+"&amp;prr="+t.util.getReferrer()+"&amp;pdw="+t.util.getScreenSize()[0]+"&amp;pdh="+t.util.getScreenSize()[1]+"&amp;dl="+t.banner.dl+"&amp;pr1="+d+"&amp;random="+l+"&amp;pr="+f;for(var g in t.banner.montblanc)b+="&amp;"+g+"="+t.banner.montblanc[g];if("object"==typeof n)for(var g in n)"criteo"==g?(t.util.CRTG_CONTENT&&(c=-1!=t.util.CRTG_CONTENT.indexOf(n[g])?n[g]:"0"),b+="&amp;puid23="+c):b+="&amp;"+g+"="+n[g];else console.log("options ="+typeof n);a?(a.appendChild(u),a.appendChild(s)):console.log("adfox can not access banner_place"),(t.util.debugBase||t.util.debugExtend)&&console.log("div_id = "+e),(t.util.debugBase||t.util.debugExtend)&&console.log(n),t.util.getCodeScript(1,b,"AdFox_iframe_"+d,a,i)},reload:function(e,n,o,i){t.banner.needReload=!0,document.getElementById(e).innerHTML="",t.banner.show(e,n,o,i),t.banner.needReload=!1},showScroll:function(e,n,o,i){var r=t.util.getWindowSize(),a=r.width,d=r.height,l=t.util.getBodyScrollTop(),c=t.util.getBodyScrollLeft(),u=t.util.getElementPosition(e),s=u?u.left:20*a,f=u?u.top:20*d;t.util.debugExtend&&console.log("div_id = "+e+"; elementPosition = "+u),l+d+5>=f&&c+a+5>=s?t.banner.show(e,n,o,i):setTimeout(function(){t.banner.showScroll(e,n,o,i)},100)},showRich:function(e,n,o,i){var r=t.util.getWindowSize(),a=r.height,d=t.util.getBodyScrollTop();d+5>=a?t.banner.show(e,n,o,i):setTimeout(function(){t.banner.showRich(e,n,o,i)},100)},showScroll_b:function(e,n,o,i,r){var a=t.util.getWindowSize(),d=a.width,l=a.height,c=t.util.getBodyScrollTop(),u=t.util.getBodyScrollLeft(),s=t.util.getElementPosition(e),f=s?s.left:20*d,b=s?s.top:20*l;t.util.debugExtend&&console.log("div_id = "+e+"; elementPosition = "+s),c+l+5>=b&&u+d+5>=f?t.banner.show_b(e,n,o,i,r):setTimeout(function(){t.banner.showScroll_b(e,n,o,i,r)},100)},show_b:function(e,n,o,i,r){t.util.debugExtend&&console.log("show_b start; div_id = "+e+"; adCall = "+t.counter);var a=r||window,d=new Date,l=Math.floor(1e8*Math.random()),c=Math.floor(1e3*Math.random()),u=c>=5&&55>c?!0:!1;t.inner.show_b(u,d,l,t.counter,1,e,n,o,i,a),t.util.debugExtend&&console.log("show_b end; div_id = "+e+"; adCall = "+t.counter),t.counter=t.counter+1},reload_b:function(e,n,o){t.banner.needReload=!0,document.getElementById(e).innerHTML="",t.banner.show_b(e,n,o),t.banner.needReload=!1}},window.Adf={},window.Adf.util=t.util,window.Adf.init=t.init,window.Adf.banner=t.banner}();bnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA2LTIwVDE3OjQ5OjI0KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YTAyODdlYmItMmExMS00YmE2LTk1YWMtNjdjZGY3ZWJlZDBjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA2LTIwVDE3OjQ5OjI0KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGY0Nzk4MTMtZWMwZS0xMWU1LTk5ZDktODNlYzBhZDkwNzY4PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQyZDNjZDllLWY3ZTktMTFlNS1iYjhlLWI2NjYwOGE4YjE1ZTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOTAwNTA1MC1lYjQ4LTExZTUtYmJkYy04NGE1NWMyMDk2NWM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjgzOTcyMjEtZWQwMi0xMWU1LWE1YTMtZmRiODMzOTA1ZGE0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxNmU0MGJlOS1iYTgyLTlhNGQtODA4Ni04ZjAzMTEyZDZkNjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI5RDZEMDNGRkM5NjExRTU4RDlBRjk4NTBDNTAyQzRFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0MWFkNzM1OC02Y2U4LTY4NDktOTNiNi02MGIyZmUzMzcyNGI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZmOTM0NzMwLWEzMjUtY2Q0OC04MDgyLTIwOTlmZGNmYWFkMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OWUyNWFmNGUtMjE2Ny1jOTQxLTk1NzMtYjJmNjg1NGVkMjU0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpkYWRlZmE2MS03ZGQwLWEzNGItYWMwMS0xZWZkMzA2MzI4Yzg8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvZB5VsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAShJREFUeNrUmcsSgyAMRdXpfwM/3nTTLKpSQ7h5kA1TZ7T3nALFyU5ERLR1qpbT57YtVYL8LOB3rIVui6/37ssyyvOfbmyNRJVVRA+8n38QPKsIKfg1//FdCG/dGiv1fq15r3HOMVq0g0x6z4jZnKV29oDsInDgDwKyicCDCwVEi7ADHxTgLcIeXCnAWoQf+KQAtAh/cJAAHjmAd+nBwQK8RcyDGwmwFoEDNxaAFoEH5/GwPavvlOs5d68DKY+sfkdsMLj2tTpOxGLgeBHB4Ly5zW6WehHB4Oh/jXERScDjRCQD9xeRFNxPRHJwexGLgNuJWAwcL2KyL8C9tlZj+gL8vdqe5aUvIDUa9YujZsRjX6D3oKzg+vyv/1NLej1byfN/AAAA//8DAKCGMldF/dgkAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain!important;
    z-index: 10005;
}

#p4s-popup .p4s-popup-logo {
    border-radius: 3px;
    overflow: hidden;
    margin: 0 auto;
    width: 72px;
    height: 72px;
}

#p4s-popup .p4s-popup-img {
    background-color: #E5E5E5;
    border-radius: 3px;
    overflow: hidden;
    width: 72px!important;
    height: 72px!important;
    max-width: 72px!important;
    max-height: 72px!important;
    outline: 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 7px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
}

#p4s-popup .p4s-popup-title {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

#p4s-popup .p4s-popup-text {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 30px;
}

#p4s-popup .p4s-popup-button {
    box-sizing: border-box;
    display: inline-block;
    border: 2px solid #212121;
    border-radius: 2px;
    padding: 0 35px;
    height: 56px;
    line-height: 52px;
    font-size: 16px;
    color: #212121;
    text-transform: uppercase;
    cursor: pointer;
}

#p4s-popup .p4s-popup-fade {
    background-color: rgba(33,33,33,.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9100;
}

#p4s-confirm-widget {
    width: 322px;
    position: fixed;
    z-index: 999999999;
    top: 10px;
    background-color: #eeeeef;
    border-radius: 1px;
    box-shadow: 0 0 6px 1px rgba(0,0,0,0.57);
    color: #000 !important;
    text-align: left !important;
    padding-bottom: 7px !important;
}

.p4s-confirm-left {
    left: 105px;
}

.p4s-confirm-right {
    right: 105px;
}

.p4s-confirm-center {
    left: 50%;
    margin-left: -200px;
}

.p4s-ru-block {
    width: 400px !important;
}

#site-logo-popup {
    float: left;
    position: relative;
    margin: 0px 9px 0px 4px !important;
    padding: 0 !important;
    display: inline-block;
}

#site-logo-popup img {
    height: 65px !important;
    width: 65px !important;
    margin-top: 8px;
}

#p4s-confirm-title {
    margin-left: 12px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif !important;
    font-weight: bold;
    padding-top: 11px;
    line-height: 20px !important;
}

#p4s-confirm-text {
    font-size: 12px !important;
    line-height: 1.4em !important;
    margin: 5px 0 5px 78px!important;
    padding: 0 !important;
    text-align: left !important;
    font-family: 'Open Sans', sans-serif !important;
    color: #7c7c7c !important;
}


#p4s-powered {
    float: left;
    font-size: 10px;
    margin-top: 10px;
    font-family: Arial !important;
    line-height: 1.2em !important;
    margin-left: 11px !important;
}

#p4s-powered span {
    vertical-align: 3px;
}

#p4s-powered span>a {
    text-decoration: none !important;
    color: black !important;
    font-size: 10px !important;
    line-height: 19px !important;
    font-weight: normal !important;
}

    #p4s-powered span > a:hover,
    #p4s-powered span > a:focus {
        text-decoration: none !important;
        background-color: transparent !important;
        color: black !important;

    }
    #p4s-powered a:hover,
    #p4s-powered a:focus {
        text-decoration: none !important;
        background-color: transparent !important;
        color: black !important;
    }

#p4s-powered img {
    vertical-align: bottom !important;
    width: 61px !important;
    height: 19px !important;
    padding-right: 2px !important;
    display: inline-block !important;
    margin: 0px !important;
}

#p4s-confirm-buttons {
    margin-top: 6px;
    position: relative;
    width: 164px;
    float: right;
    font-family: Arial;
    font-size: 12px;
}
.p4s-confirm-buttons-ru {
    width: 230px !important;
}

#p4s-confirm-block-button {
    margin-left: 10px;
    position: relative;
    float: left;
}
.p4s-confirm-button {
    background-color: white;
    border: 1px solid #a09797;
    border-radius: 3px;
    padding: 3px 16px 3px 16px;
    background-color: #f7f7f7;
    cursor: pointer;
    line-height: 23px;
}

#p4s-confirm-allow-button {
    position: relative;
    float: left;
    margin-left: 11px;
    cursor: pointer;
    background-color: #ffd500;
}
.p4s-confirm-button {
    background-color: white;
    border: 1px solid #a09797;
    border-radius: 3px;
    padding: 3px 16px 3px 16px;
    background-color: #f7f7f7;
    cursor: pointer;
}


@-webkit-keyframes p4s-tada {
    0%,100% {
        -webkit-transform: scale3d(1,1,1);
        transform: scale3d(1,1,1)
    }

    10%,20% {
        -webkit-transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);
        transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)
    }

    30%,50%,70%,90% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)
    }

    40%,60%,80% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)
    }
}

@keyframes p4s-tada {
    0%,100% {
        -webkit-transform: scale3d(1,1,1);
        transform: scale3d(1,1,1)
    }

    10%,20% {
        -webkit-transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);
        transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)
    }

    30%,50%,70%,90% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)
    }

    40%,60%,80% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)
    }
}


#p4s-label.p4s-label {
    margin: -0 0 0;
    border: 0;
    background-color: transparent;
    transition: background-color,color .2s ease-in;
    box-shadow: 0 1px 3px 0 rgba(34,28,5,.4);
    /*position: fixed;
    top: 50%;*/
    height: 56px;
    width: 56px;
    line-height: 56px;
    text-align: center;
}

#p4s-label.p4s-label {
    font-family: Arial,Helvetica,sans-serif;
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
}

#p4s-label.p4s-label {
    position: relative;
}

#p4s-label.p4s-label--left {
    float: left;
}

#p4s-label.p4s-label--yellow {
    color: #212121;
    background-color: #fdd95b;
}

#p4s-label.p4s-label::after, #p4s-label.p4s-label::before {
    position: absolute;
    content: '';
}

#p4s-label.p4s-label::before {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-tada;
    animation-name: p4s-tada;
    top: 18px;
    left: 18px;
    width: 20px;
    height: 20px;
    background-size: contain!important;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAC5ElEQVRYhe3YT4hVZRjH8c89d0Zb2MjNf5nTYigqhLSyBtMyMFRq06polRAoIiWI0sZVZYvMVi5ESNokaLsWIhaUGxGNatXCikia2eSmwIWhM7Z479h7njn33pxzZ2wxv93zvM95z/e87/P+OU9jZGREDzUx0SsILWzFLZzFX//hmZ59F13aGjiAi1jS40Wj+BkncQo/YU2PZ5bhEvbPBLCJ4ziIdfgay7v0c1T5I5a3fZ20AufwFD5qxzaqAhsVU9zAJ3gz+H/AM6qn5FaF7wYWVPib+A5rg/8I9sTgqhF8rwLuCnZ0gLunwgeDWFjhn2j39Xvwv429vQC3SXmX6zKek74612Yp5/7oAKjddgIvBP+3eB6/Bv+h9rtuK5/iIfyI4ax9HOsxlvlW4FO81AWsSl9gp/IHDUuL8IHMd1ma/r8pj+CBAHcTrwa4J6Svv1M4eAXfY3XmG8NryqnzqGxlTwEuwe7Q4SFcyOxH8CUenAHclFZJe2Q+EOdxOMTtw7054FtYlAWM4/3MHsTn0t5VV8NS7ubbykHlqW9J6aBoB8ZV+yGuZ/Zu07eFOtqINzL7Gj4OMdtJi2RUStQpXcf9/j2qFuA3rOwjIPwipc3UHrpMmrnBLGZ1gU3hwdPK5+i2WYCDh8O7r+KrELO5wIbgPBfsF/vLVdLLwf4m2OsLaZhzXQr2s31FCgDBvhjsxwvlTZKUb7ke6idR0GPBvhLsVQPYEpz5cm/gvn5TZYo3pHE8ndmTA6afsbmGdLgGzZImBJ5uF9b/heYB62oesK7mAetqHrCuelUWPpgDhsO6nFbNVqtV5S9wDLtmCSrXBizFmarGKsCm9FsZfwNmU6PSreq0UKUYCIEFPsPrc8NV0g6pErE9d8bazGL8OYdQVSrlYxzBadedu60IeE35wnjXFQHvVAWe7NI+KZXtZqy6gJNScXOoQ/uYeqWSvpwkJ7u0narbeT8A35EqXlHn8W7dzv8ByUh4HH0FJD0AAAAASUVORK5CYII=) no-repeat;
    z-index: 5;
}

#p4s-label.p4s-label--white::before {
    top: 16px;
    left: 16px;
}

#p4s-label.p4s-label--white {
    color: #212121;
    background-color: #fff;
    border: 2px solid #212121;
    line-height: 52px;
}

#p4s-label.p4s-label--black {
    color: #fff;
    background-color: #212121;
}

#p4s-label.p4s-label--black:before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAACk0lEQVRYhe2YTWsUQRCG35n166AJEmJQIx6UoIISCQajohDBgH/CXyAiipccPEhAwVMQhIBCDmK8eVEQD3qIB4PxC4SACIlZBT8QowdBTR4Pu4MzlZ6e3cxsctkXGra6qrqe7p3pbiYAlKGSpPmsIEkbJZ2QhKQHkuZqyMkeG0hrATAIPAPaPHECeoGv/NcnYF9GTjswCZz3xaU5SsDNWMFXwCbPQJMs1hNPfAfwJhZ7vbogNQEGwA1HwedVcFeOS789k3/piB+uFfCSI3ka6EkpuC4FEGBtSs4B4L0j/mwW4ACwYJKmgE5HkX5gDPjhAZwDbgHHHPnbgXcm/g9wJA2wBZg1CWUHXAdw3wOVprssfo47gQ8mborYyseDrzhm02cG7Mb919SqMrDHjHkY+GviBi1gG/DTBA2ZgbqAzzngIs2y+F+5bGK+ARvigBdNQJnKwx/5V+N+85aqcZLbynoqe2dc5yLAAJgxztMkZ3imQLhIp0yNC8b/OgLsNY5fQGsscQ3wsQGAb0muYjuVvTOu3aGko+b0u2fO0QFJm2s4V+vVTlP7i6SHJqY/lHTIdD429vFiuRI6aexHxj4YSuoynRPG7isUyQAY+6mx94aStpjOaWPvKJLIaJexZ4y9NQB6TOdk7Hegyn0tKJrM1IhUktQdsxcC8F5YWyV9bwRVTN7Jhw0unltNwLxqAuZVEzCvmoB55QMMJA0tA8NV+U4TkrfaqIXASAMuqWm6Rh1fFkrA6DLCRRqhsjBewBC4vQJwkUYNj+xtZjluL1lKPI+rjHNeyfvgiivrPrjisitYr0JJ+z3+BUkv8hQoYgXnJLWk+MqStuUZvIiTZMzju5N7dPtaL6G1AhOOLWOc6gegPO0fbkF7oEJXxP8AAAAASUVORK5CYII=) no-repeat;
}


#p4s-label.p4s-label--right {
    float: right;
}

#p4s-confirm-widget a {
    display: inline !important;
}

.p4s-label:hover::before {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-tada;
    animation-name: p4s-tada;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}


.p4s-button--circle::after, .p4s-button--text::after, .p4s-button::before {
    content: '';
}
.p4s-button {
    margin: 0;
    border: 0;
    background-color: transparent;
    box-sizing: border-box;
    -webkit-transition: background-color,color .2s ease-in;
    transition: background-color,color .2s ease-in;
    position: relative;
    height: 56px;
    line-height: 56px;
}
.p4s-button, .p4s-button--circle.p4s-button--active, .p4s-button--circle:hover {
    box-shadow: 0 1px 3px 0 rgba(34,28,5,.4);
}
.p4s-button {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.p4s-button {
    font-family: Arial,Helvetica,sans-serif;
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
}

.p4s-button--text {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p4s-button--yellow {
    color: #212121;
    background-color: #fdd95b;
}

.p4s-button--text {
    display: inline-block;
    padding-left: 53px;
    padding-right: 18px;
}

.p4s-button--text, .p4s-button--text::after {
    border-radius: 3px;
}

.p4s-button::before {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    animation-fill-mode: both;
    animation-name: p4s-tada;
    position: absolute;
    top: 18px;
    left: 18px;
    width: 20px;
    height: 20px;
    background-size: contain!important;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAC5ElEQVRYhe3YT4hVZRjH8c89d0Zb2MjNf5nTYigqhLSyBtMyMFRq06polRAoIiWI0sZVZYvMVi5ESNokaLsWIhaUGxGNatXCikia2eSmwIWhM7Z479h7njn33pxzZ2wxv93zvM95z/e87/P+OU9jZGREDzUx0SsILWzFLZzFX//hmZ59F13aGjiAi1jS40Wj+BkncQo/YU2PZ5bhEvbPBLCJ4ziIdfgay7v0c1T5I5a3fZ20AufwFD5qxzaqAhsVU9zAJ3gz+H/AM6qn5FaF7wYWVPib+A5rg/8I9sTgqhF8rwLuCnZ0gLunwgeDWFjhn2j39Xvwv429vQC3SXmX6zKek74612Yp5/7oAKjddgIvBP+3eB6/Bv+h9rtuK5/iIfyI4ax9HOsxlvlW4FO81AWsSl9gp/IHDUuL8IHMd1ma/r8pj+CBAHcTrwa4J6Svv1M4eAXfY3XmG8NryqnzqGxlTwEuwe7Q4SFcyOxH8CUenAHclFZJe2Q+EOdxOMTtw7054FtYlAWM4/3MHsTn0t5VV8NS7ubbykHlqW9J6aBoB8ZV+yGuZ/Zu07eFOtqINzL7Gj4OMdtJi2RUStQpXcf9/j2qFuA3rOwjIPwipc3UHrpMmrnBLGZ1gU3hwdPK5+i2WYCDh8O7r+KrELO5wIbgPBfsF/vLVdLLwf4m2OsLaZhzXQr2s31FCgDBvhjsxwvlTZKUb7ke6idR0GPBvhLsVQPYEpz5cm/gvn5TZYo3pHE8ndmTA6afsbmGdLgGzZImBJ5uF9b/heYB62oesK7mAetqHrCuelUWPpgDhsO6nFbNVqtV5S9wDLtmCSrXBizFmarGKsCm9FsZfwNmU6PSreq0UKUYCIEFPsPrc8NV0g6pErE9d8bazGL8OYdQVSrlYxzBadedu60IeE35wnjXFQHvVAWe7NI+KZXtZqy6gJNScXOoQ/uYeqWSvpwkJ7u0narbeT8A35EqXlHn8W7dzv8ByUh4HH0FJD0AAAAASUVORK5CYII=) no-repeat;
    z-index: 5;
}

.p4s-button--black:before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAACk0lEQVRYhe2YTWsUQRCG35n166AJEmJQIx6UoIISCQajohDBgH/CXyAiipccPEhAwVMQhIBCDmK8eVEQD3qIB4PxC4SACIlZBT8QowdBTR4Pu4MzlZ6e3cxsctkXGra6qrqe7p3pbiYAlKGSpPmsIEkbJZ2QhKQHkuZqyMkeG0hrATAIPAPaPHECeoGv/NcnYF9GTjswCZz3xaU5SsDNWMFXwCbPQJMs1hNPfAfwJhZ7vbogNQEGwA1HwedVcFeOS789k3/piB+uFfCSI3ka6EkpuC4FEGBtSs4B4L0j/mwW4ACwYJKmgE5HkX5gDPjhAZwDbgHHHPnbgXcm/g9wJA2wBZg1CWUHXAdw3wOVprssfo47gQ8mborYyseDrzhm02cG7Mb919SqMrDHjHkY+GviBi1gG/DTBA2ZgbqAzzngIs2y+F+5bGK+ARvigBdNQJnKwx/5V+N+85aqcZLbynoqe2dc5yLAAJgxztMkZ3imQLhIp0yNC8b/OgLsNY5fQGsscQ3wsQGAb0muYjuVvTOu3aGko+b0u2fO0QFJm2s4V+vVTlP7i6SHJqY/lHTIdD429vFiuRI6aexHxj4YSuoynRPG7isUyQAY+6mx94aStpjOaWPvKJLIaJexZ4y9NQB6TOdk7Hegyn0tKJrM1IhUktQdsxcC8F5YWyV9bwRVTN7Jhw0unltNwLxqAuZVEzCvmoB55QMMJA0tA8NV+U4TkrfaqIXASAMuqWm6Rh1fFkrA6DLCRRqhsjBewBC4vQJwkUYNj+xtZjluL1lKPI+rjHNeyfvgiivrPrjisitYr0JJ+z3+BUkv8hQoYgXnJLWk+MqStuUZvIiTZMzju5N7dPtaL6G1AhOOLWOc6gegPO0fbkF7oEJXxP8AAAAASUVORK5CYII=) no-repeat;
}

.p4s-button::before {
    -webkit-animation-fill-mode: both;
    -webkit-animation-name: p4s-tada
}

.p4s-button:hover::before {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-tada;
    animation-name: p4s-tada;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}

.p4s-button--black {
    color: #fff;
    background-color: #212121;
}

.p4s-button--white {
    color: #212121;
    background-color: #fff;
    border: 2px solid #212121;
    line-height: 52px;
}

.p4s-button--white::before {
    top: 16px;
    left: 16px;
}

.p4s-button--circle {
    width: 56px;
    text-align: center;
    text-indent: -9999px;
}

.p4s-button--circle, .p4s-button--circle::after {
    border-radius: 100%;
}
/*Контейнер для вывода кнопок подписки*/
.push_notification_popup
{

}
.push_notification_popup--left
{
    position: absolute;
    float: left;
    top: 16px;
    left: 16px;
}
.push_notification_popup--right
{
    position: absolute;
    float: right;
    top: 16px;
    right: 16px;

}
.push_notification_popup--bottom-left{
    position: absolute;
    float: left;
    bottom: 16px;
    left: 16px;
}
.push_notification_popup--bottom-right{
    position: absolute;
    float: right;
    bottom: 16px;
    right: 16px;
}
.p4s-button
{   display: none;
}

@media (max-width: 530px) {
    .p4s-confirm-left {
        left: 3px;
    }
    .p4s-confirm-right {
        right: 3px;
    }
}

@media(max-width:450px) {
    #p4s-confirm-widget {
        width: 98% !important;
    }
    #p4s-confirm-widget #p4s-powered span {
        display: none;
    }
}

.v2-p4s-popup-overlay {
    display: block !important;
    position: fixed !important;
    z-index: 1000000 !important;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
	background: rgba(0, 0, 0, 0.5) !important;
}
.v2-p4s-popup-content {
    font-family: 'arial',arial !important;
    font-weight: 400 !important;
    color: #000000 !important;
    font-size: 14px !important;
    display: block !important;
    width: 720px !important;
    height: 360px !important;
    left: 50% !important;
    top: 50% !important;
    position: fixed !important;
    z-index: 1000001 !important;
    text-align: left !important;
    box-shadow: 0px 5px 20px -2px #202020 !important;
    transform: translate(-50%, -50%) scale(1) !important;
    background-color: #ffffff !important;
}

.v2-p4s-popup-img {
    float: left !important;
    width: 50% !important;
    height: 100% !important;
}

.v2-p4s-popup-img img{
    text-align: left !important;
    font-family: 'arial',arial !important;
    font-weight: 400 !important;
    color: #000000 !important;
    font-size: 14px !important;
    width: 100%!important;
    margin: 0!important;
    padding: 0!important;
    border: none!important;
    height: 100% !important;
    vertical-align: bottom !important;
}
.v2-p4s-popup-title {
    border-radius: 0px !important;
    z-index: 1000004 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 32px !important;
    margin: 45px 15px 15px 390px !important;
    line-height: 1.22857143 !important;
}
.v2-p4s-popup-text {
    border-radius: 0px !important;
    z-index: 1000005 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 400 !important;
    color: #000000 !important;
    font-size: 14px !important;
    margin: 15px 15px 15px 390px !important;
    line-height: 1.42857143 !important;
}
.v2-p4s-popup__button {
    background: #000000 !important;
    border: 1px solid #000000 !important;
    right: 20px !important;
    top: 290px !important;
    border-radius: 0px !important;
    z-index: 1000007 !important;
    text-align: center !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 700 !important;
    color: #FFF !important;
    font-size: 16px !important;
    width: 145px !important;
    height: 35px !important;
    position: absolute !important;
    line-height: 35px !important;
    cursor: pointer !important
}
.v2-p4s-popup-close {
    right: 15px !important;
    top: -10px !important;
    border-radius: 0px !important;
    z-index: 1000008 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 100 !important;
    color: #000000 !important;
    font-size: 56px !important;
    position: absolute !important;
    line-height: 1.42857143 !important;
}
a.v2-p4s-popup__close {
    cursor: pointer !important;
    line-height: 1.42857143 !important;
}

@media (max-width: 760px) {
    .v2-p4s-popup-content {
        width: 95% !important;
    }
    .v2-p4s-popup-img {
        display: none !important;
    }
    .v2-p4s-popup-title {
        margin-left: 15px !important;
        text-align: center !important;
    }
    .v2-p4s-popup-text {
        margin-left: 15px !important;
        text-align: center !important;
    }
}


.v2-p4s-confirm {
  max-width: 228px;
  padding: 10px 25px;
}
.v2-p4s-confirm:after {
  display: table;
  clear: both;
  content: '';
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm {
    max-width: 400px;
    padding: 10px 10px 10px 146px;
  }
}
.v2-p4s-confirm__aside {
  color: #3c3c3c;
  font-size: 12px !important;
  line-height: 1.2;
  text-align: center;
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__aside {
    float: left;
    width: 136px;
    margin-left: -146px;
  }
}
.v2-p4s-confirm__image {
  display: block;
  max-width: 98px;
  margin: 0 auto 6px;
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__image {
    min-width: 119px !important;
    max-width: 119px !important;
    height: 119px !important;
  }
}
.v2-p4s-confirm__link {
  color: #7d7d7d !important;
  text-decoration: underline !important;
  font-size: 12px !important
}
.v2-p4s-confirm__link:hover {
  text-decoration: none;
}
.v2-p4s-confirm__title {
  clear: initial;
  margin: 0 0 8px;
  padding: 5px 0 0;
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 700;
  font-weight: 900;
  line-height: 1.1;
  font-family: 'Open Sans','Lato', 'Arial', 'sans-serif' !important;
  background-color: transparent !important;
  border: none !important;
  text-transform: none;
}
.v2-p4s-confirm__desc {
  display: block;
  margin: 0 0 10px;
  color: #7d7d7d;
  font-size: 12px;
  line-height: 1.2;
  font-family: 'Lato', 'Arial', 'sans-serif' !important;
  text-transform: none;
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__desc {
    margin: 0 0 30px;
  }
}
.v2-p4s-confirm__controls {
  font-size: 0;
  bottom: 9px;
  position: absolute;
  width: 244px;
}
@media only screen and (max-width: 500px) {
  .v2-p4s-confirm__controls {
  position: inherit;
  width: auto;
}
}
.v2-p4s-confirm__control {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding: 9px 12px !important;
  color: #fff;
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  text-align: center !important;
  text-decoration: none !important;
  border: 0px solid #ababab;
  outline: 0 none;
  background: #ababab;
  -webkit-transition: color 0.2s ease-in, background 0.2s ease-in;
          transition: color 0.2s ease-in, background 0.2s ease-in;
}
.v2-p4s-confirm__control:hover {
  opacity: 0.7;
}
.v2-p4s-confirm__control--width_full {
  width: 100% !important;
}
.v2-p4s-confirm__control--style_primary {
  border-color: #17b9c7;
  background: #17b9c7;
}
.v2-p4s-confirm__control-item {
  padding: 0 0 10px;
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__control-item {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    padding: 0 0 0 4px;
  }
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__control-item:first-child {
    padding: 0 4px 0 0;
  }
}
.v2-p4s-confirm__copyright {
  display: block;
  color: #3c3c3c;
  font-size: 12px;
  line-height: 1.2;
}
.v2-p4s-confirm__copyright--type_mobile {
  display: block;
  text-align: center;
  font-family: inherit !important;
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__copyright--type_mobile {
    display: none;
  }
}
.v2-p4s-confirm__copyright--type_desktop {
  display: none;
    font-family: inherit !important;
}
@media only screen and (min-width: 500px) {
  .v2-p4s-confirm__copyright--type_desktop {
    display: block;
  }
}






.v2-p4s-confirm-left {
    left: 105px;
}

.v2-p4s-confirm-right {
    right: 105px;
}

.v2-p4s-confirm-center {
    left: 50%;
    margin-left: -200px;
}

@media (max-width: 500px) {
    .v2-p4s-confirm-left {
        left: 3px;
    }
    .v2-p4s-confirm-right {
        right: 3px;
    }
}

#p4s-confirm-widget.v2-p4s-confirm__container {
    width: 400px;
    padding-bottom: 0px !important;
    background: #fff !important;
    font-family: 'Open Sans','Lato', 'Arial', 'sans-serif' !important;
    letter-spacing: 0 !important;
}

@media (max-width: 500px) {
    #p4s-confirm-widget.v2-p4s-confirm__container {
    width: 228px !important;
    left: 50%;
    margin-left: -114px;
}
}


.v2-p4s-confirm__control {
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
}
.v2-p4s-confirm__control-item{
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
}

#p4s-confirm-block-button.v2-p4s-confirm__control {
    margin: 0 !important;
    float: none;
    display: block !important;
    font-family: inherit !important;
    border-radius: 0px !important;
    border: none !important;
    text-shadow: none !important;
    height: auto !important;
    -moz-word-break: normal !important;
    -o-word-break: normal !important;
    word-break: normal !important;
}

.v2-p4s-confirm__control.pushsender-btn-close {
    background: #ababab !important;
    color: #fff !important;

}

#p4s-confirm-allow-button.v2-p4s-confirm__control {
    float: none;
    display: block !important;
    font-family: inherit !important;
    -moz-word-break: normal !important;
    -o-word-break: normal !important;
    word-break: normal !important;
    word-wrap: initial !important;
    margin: 0 !important;
}

#p4s-confirm-allow-button.v2-p4s-confirm__control:hover {
    text-decoration: none !important;
}


.p4s-designer__overlay {
    display: block !important;
    position: fixed !important;
    z-index: 1000000 !important;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
	background: rgba(0, 0, 0, 0.5) !important;
}

.p4s-designer {
  width: 228px !important;
  padding: 0 25px 10px !important;
  /*left: 50% !important;*/
    top: 10px !important;
    position: fixed !important;
    z-index: 1000001 !important;
    text-align: left !important;
    /*transform: translate(-50%, -50%) scale(1) !important;*/
    background: #f9f9f9 !important;
    color: #444 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    box-sizing: border-box !important;
}
.p4s-designer__illustration {
  position: relative !important;
  margin: 0 -25px !important;
  background: #195b61 !important;
}
.p4s-designer__illustration-image {
  display: block !important;
  max-width: 100% !important;
  margin: 0 auto !important;
}
.p4s-designer__image {
  position: relative !important;
  display: block !important;
  max-width: 98px !important;
  margin: -49px auto 15px !important;
  border: 2px solid rgba(0,0,0,0) !important;
}
.p4s-designer__title {
  margin: 0 0 5px !important;
  color: #3c3c3c !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
    text-transform: none !important;
    text-align: center !important;
}
.p4s-designer__desc {
  margin: 0 0 20px !important;
  color: #7d7d7d !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
    text-align: center !important;
}
.p4s-designer__controls {
  margin: 0 0 28px !important;
}
.p4s-designer__control {
  position: relative !important;
  display: inline-block !important;
  vertical-align: middle !important;
  padding: 7px 10px !important;
  color: #fff;
  font-size: 12px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  text-align: center !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
  border: 2px solid #17b9c7;
  outline: 0 none !important;
  background: #17b9c7;
  -webkit-transition: color 0.2s ease-in, background 0.2s ease-in !important;
          transition: color 0.2s ease-in, background 0.2s ease-in !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
    box-sizing: border-box !important;
    cursor: pointer; 
}
.p4s-designer__control:hover {
  opacity: 0.7 !important;
    text-decoration: none !important;
    color: #fff !important;
}
.p4s-designer__control--width_full {
  width: 100% !important;
}
.p4s-designer__control--type_light {
  color: #a6a6a6 !important;
  background: transparent !important;
  border-color: #d7d7d7 !important;
}
.p4s-designer__control--type_light:hover {
  color: #a6a6a6 !important;
}

.p4s-designer__control--style_primary {
  border-color: #13ab98 !important;
  background: #13ab98 !important;
}
.p4s-designer__control--style_secondary {
  border-color: #ff036b !important;
  background: #ff036b !important;
}
.p4s-designer__control-item {
  margin: 0 0 8px !important;
}
.p4s-designer__footer {
  margin: 0 -25px !important;
  padding: 13px 0 !important;
  text-align: center !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  border-top: 1px solid #ebebeb !important;
    font-family: 'Open Sans', 'Lato', 'Arial', sans-serif !important
}
.p4s-designer__link {
  color: #7d7d7d !important;
  text-decoration: underline !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
}
.p4s-designer__link:hover {
  text-decoration: none !important;
}


.p4s-designer__left {
    left: 105px !important;
}
.p4s-designer__right {
    right: 105px !important;
}
.p4s-designer__center {
    left: 50% !important;
    margin-left: -114px !important;
}

@media (max-width: 500px) {
    .p4s-designer__left {
        left: 50% !important;
        margin-left: -114px !important;
    }
    .p4s-designer__right {
        left: 50% !important;
        margin-left: -114px !important;
    }
}

.v2-p4s-popup-text-info {
border-radius: 0px !important;
z-index: 1000005 !important;
text-align: center;
padding: 0px 0px !important;
font-family: 'Raleway',arial !important;
font-weight: 400 !important;
color: #f7f7f9 !important;
font-size: 24px !important;
line-height: 1.42857143 !important;
}

.v2-p4s-popup-content-info {
font-family: 'arial',arial !important;
font-weight: 400 !important;
color: #000000 !important;
font-size: 14px !important;
display: block !important;
left: 50% !important;
top: 50% !important;
position: fixed !important;
z-index: 1000001 !important;
transform: translate(-50%, -50%) scale(1) !important;
}

















.logoLetter
{	background: #FFD600;
    padding: 3px 7px 6px 7px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    margin-left: 2px;
    margin-right: 2px;
    display: inline;
}
.p4s-webpush-label .p4s-copyright-link,.p4s-webpush-label .p4s-inner-content {
    font-weight: 700;
/*    text-shadow: -2px 0 rgba(0,0,0,.1),0 2px rgba(0,0,0,.1),2px 0 rgba(0,0,0,.1),0 -2px rgba(0,0,0,.1);*/
    font-family: 'Open Sans',Arial,sans-serif
}

.p4s-webpush-label {
    border-radius: 50%;
    width: 896px;
    height: 216px;
    position: fixed;
    top: -85px;
    left: -190px;
    z-index: 100001;
    font-family: 'Open Sans', Arial, sans-serif;
    margin-left: 22px;
    transition-duration: .25s;
    -webkit-transform: scale(.7);
    transform: scale(.7);
    opacity: 0
}

.p4s-webpush-label.p4s-show {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1
}


.p4sbackInfoDiv:after
{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    -webkit-filter: blur(100px);
	-moz-filter: blur(100px);
       -o-filter: blur(100px);
      -ms-filter: blur(100px);
          filter: blur(100px);
    background-color: rgba(0,0,0,.3);
}
.p4s-webpush-label:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 120%;
    left: 0;
    top: 0;
    -webkit-filter: blur(100px);
	-moz-filter: blur(100px);
       -o-filter: blur(100px);
      -ms-filter: blur(100px);
          filter: blur(100px);
    background-color: rgba(0,0,0,.3);
}

.p4s-yandex .p4s-webpush-label .p4s-webpush-label:after
{    height: 150%!important;
}


.p4s-webpush-label .p4s-inner-content {
    position: absolute;
    right: 80px;
    top: calc(100px);
    white-space: nowrap;
    font-size: 13px;
    color: #000;
    line-height: 15px;
    -webkit-filter: blur(0);
    filter: blur(0);
    z-index: 10;
    width: 165px!important;

}

.p4s-webpush-label .p4s-copyright-link {
    font-size: inherit;
    color: inherit;
    text-decoration: underline;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-left: 0px;
    top: -1px
}

.p4s-webpush-label .p4s-copyright-link:hover {
    text-decoration: none
}

.p4s-webpush-label .p4s-copyright-link:after {
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    margin: -10px 0 0
}

.p4s-webpush-label.p4s-windows.p4s-firefox {
    max-width: 100%;
    width: 100%;
    left: 0px;
}

.p4s-webpush-label.p4s-windows.p4s-firefox:after {
    max-width: 896px
}

.p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
    right: auto;
    left: 654px
}

@media (max-width: 1140px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:645px
    }
}

@media (max-width: 1080px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:calc(23.7% + 384px)
    }
}

@media (max-width: 978px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:calc(25% + 384px)
    }
}

@media (max-width: 860px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:calc(23.5% + 384px)
    }
}

@media (max-width: 768px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox.initialized {
        display:none!important
    }
}

.p4s-webpush-label.p4s-windows.p4s-opera {

    left: auto;
    right: 0
}

.p4s-webpush-label.p4s-windows.p4s-opera .p4s-inner-content {
    right: 16px
}


.p4s-webpush-label.p4s-windows.p4s-opera.p4s-base-lang {
    margin-left: 0;
    right: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.p4s-webpush-label.p4s-windows.p4s-opera.p4s-base-lang .p4s-inner-content {
    right: 0
}


.p4s-webpush-label.p4s-windows.p4s-yandex {
    left: auto;
    right: -160px;
    margin: 0;
}

.p4s-webpush-label.p4s-windows.p4s-yandex .p4s-inner-content {
    right: auto;
    left: 85px
}

.p4s-webpush-label.p4s-linux.p4s-firefox {
    max-width: 100%;
    width: 100%;
    left: -22px;
}

.p4s-webpush-label.p4s-linux.p4s-firefox:after {
    max-width: 896px
}

.p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
    right: auto;
    left: 716px
}

@media (max-width: 1540px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:710px
    }
}

@media (max-width: 1450px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(18% + 450px)
    }
}

@media (max-width: 1270px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(19% + 450px)
    }
}

@media (max-width: 1024px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(20% + 450px)
    }
}

@media (max-width: 940px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(21% + 450px)
    }
}

@media (max-width: 860px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(20% + 450px)
    }
}

@media (max-width: 805px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(14% + 450px)
    }
}

@media (max-width: 768px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox.initialized {
        display:none!important
    }
}

.p4s-webpush-label.p4s-linux.p4s-opera {

    left: auto;
    right: 0
}

.p4s-webpush-label.p4s-linux.p4s-opera .p4s-inner-content {
    right: 16px
}



.p4s-webpush-label.p4s-linux.p4s-opera.p4s-base-lang {
    margin-left: 16px;
    right: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.p4s-webpush-label.p4s-linux.p4s-opera.p4s-base-lang .p4s-inner-content {
    right: 0;
    margin-right: -18px
}

.p4s-webpush-label.p4s-linux.p4s-yandex {
    left: auto;
    right: -160px;
    margin: 0;
}

.p4s-webpush-label.p4s-linux.p4s-yandex .p4s-inner-content {
    right: auto;
    left: 106px
}


.p4s-webpush-label.p4s-macos.p4s-firefox {
    left: 0;
}

.p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
    right: auto;
    left: 616px
}

@media (max-width: 1240px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:611px
    }
}

@media (max-width: 1180px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:602px
    }
}

@media (max-width: 1140px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:596px
    }
}

@media (max-width: 1060px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:585px
    }
}

@media (max-width: 998px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:576px
    }
}

@media (max-width: 896px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:562px
    }
}

@media (max-width: 816px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:552px
    }
}

@media (max-width: 760px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:542px
    }
}



.p4s-webpush-label.p4s-macos.p4s-opera {

    left: auto;
    right: 0
}

.p4s-webpush-label.p4s-macos.p4s-opera .p4s-inner-content {
    right: 16px
}

.p4s-webpush-label.p4s-macos.p4s-opera.p4s-base-lang{
    margin-left: 16px;
    right: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.p4s-webpush-label.p4s-macos.p4s-opera.p4s-base-lang .p4s-inner-content {
    right: 10.5%
}

@media (max-width: 1380px) {
.p4s-webpush-label.p4s-macos.p4s-opera.p4s-base-lang .p4s-inner-content{
        right:10%
    }
}

.p4s-webpush-label.p4s-macos.p4s-yandex {
    left: auto;
    right: -160px;
    margin: 0;
}

.p4s-webpush-label.p4s-macos.p4s-yandex .p4s-inner-content {
    right: auto;
    left: 94px
}

@media (max-width: 860px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox,.p4s-webpush-label.p4s-windows.p4s-firefox {
        max-width:100%;
        left: 0
    }

    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content,.p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        font-size: 0;
        color: transparent;
        letter-spacing: -.36em;
        right: 62px
    }

    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-copyright-link,.p4s-webpush-label.p4s-windows.p4s-firefox .p4s-copyright-link {
        font-size: 11px;
        letter-spacing: normal;
        color: #000
    }

    .p4s-webpush-label.p4s-linux.p4s-opera,.p4s-webpush-label.p4s-windows.p4s-opera {
        max-width: 100%;
        left: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    .p4s-webpush-label.p4s-linux.p4s-opera .p4s-inner-content,.p4s-webpush-label.p4s-windows.p4s-opera .p4s-inner-content {
        font-size: 0;
        color: transparent;
        letter-spacing: -.36em;
        right: 40px
    }

    .p4s-webpush-label.p4s-linux.p4s-opera .p4s-copyright-link,.p4s-webpush-label.p4s-windows.p4s-opera .p4s-copyright-link {
        font-size: 11px;
        letter-spacing: normal;
        color: #000
    }
}

.p4s-bottom-push-label,.p4s-bottom-push-label .p4s-copyright-link {
    font-weight: 700;
/*    text-shadow: -2px 0 rgba(0,0,0,.1),0 2px rgba(0,0,0,.1),2px 0 rgba(0,0,0,.1),0 -2px rgba(0,0,0,.1);*/
    font-size: 13px;
    line-height: 15px;
    font-family: 'Segoe UI','Open Sans',Ubuntu,'Dejavu Sans',Helvetica,'Helvetica Neue',Arial,sans-serif
}

@media (max-width: 768px) {
    .p4s-webpush-label {
        display:none!important;
        z-index: -10!important;
        visibility: hidden!important;
        opacity: 0!important
    }
}

.p4s-bottom-push-label {
    position: absolute;
    left: 50%;
    bottom: 30px;
    white-space: nowrap;
    color: #000;
    -webkit-filter: blur(0);
    filter: blur(0);
    z-index: 10;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.p4s-bottom-push-label .p4s-copyright-link {
    text-decoration: underline;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-left: 24px;
    top: -1px;
    color: #000!important
}

.p4s-bottom-push-label .p4s-copyright-link:hover {
    text-decoration: none
}

.p4s-bottom-push-label .p4s-copyright-link:after {
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    margin: -10px 0 0
}


@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width:1281px) and (max-width:1440px) {
    .p4s-webpush-label.p4s-macos.p4s-chrome .p4s-inner-content {
        right:calc(16% - 65px)
    }
}

@media only screen and (-webkit-min-device-pixel-ratio: 2.5) and (max-width:1280px) {
    .p4s-webpush-label.p4s-windows.p4s-chrome .p4s-inner-content {
        right:calc(16% - 65px)
    }
}

.bottomBrandLink
{
	width: 100%;
    text-align: center;
    bottom: 50px;
    position: absolute;
    z-index: 1000002;
    font-family: 'arial',arial !important;
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 14px !important;
}
.bottomBrandLink .p4s-copyright-link
{
	color: #f7f7f9  !important;	
}
.bottomBrandLink .p4s-copyright-link .logoLetter
{
	color: #000;
	padding: 3px 7px 4px 7px;
}

.page__p4s_sbs-panel {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index:1000000;
}
@media only screen and (min-width: 768px) {
  .page__p4s_sbs-panel {
    right: 60px;
    bottom: 60px;
  }
}
.p4s_sbs-panel {
  box-sizing: border-box;
  position: relative;
  display: block;
  font-family: TTNorms, Arial, sans-serif;
  font-variant: no-common-ligatures;
  font-size: 18px;
  line-height: 1.2;
}
.p4s_sbs-panel__trigger {
  box-sizing: border-box;
  display: block;
  width: 50px;
  height: 50px;
  padding: 15px 0 0;
  font-size: 0;
  line-height: 100px;
  border-radius: 50%;
  background: #090f5a;
  box-shadow: 0px 24px 32px rgba(9,15,90,0.12);
  cursor: pointer;
}
.p4s_sbs-panel__icon {
  box-sizing: border-box;
  display: block;
  width: 19px;
  height: 19px;
  margin: 0 auto;
  fill: #fff;
  stroke: none;
}
.p4s_sbs-panel__tooltip {
  box-sizing: border-box;
  position: absolute;
  bottom: 100%;
  right: 0;
  display: none;
  padding: 0 0 6px;
}
.p4s_sbs-panel__tooltip-tail {
  position: absolute;
  bottom: -6px;
  right: 51px;
  width: 22px;
  height: 16px;
  fill: #fff;
}
.p4s_sbs-panel__content {
  min-width: 237px;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 24px 32px rgba(9,15,90,0.12);
  background: #fff;
}
.p4s_sbs-panel__title {
  margin: 0 0 10px;
  color: #090f5a;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}
.p4s_sbs-panel__illustration {
  max-width: 130px;
  margin: 0 auto 5px;
}
.p4s_sbs-panel__image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
.p4s_sbs-panel__controls {
  padding: 10px 0 0;
  text-align: center;
}
.p4s_sbs-panel__control,
.p4s_sbs-panel button {
  position: relative;
  display: block;
  width: 100%;
  max-width: 120px;
  margin: 0 auto;
  text-decoration: none;
  background: transparent;
  border: 0 none;
  border-radius: 20px;
  outline: 0 none;
  cursor: pointer;
}
.p4s_sbs-panel__control:hover:before,
.p4s_sbs-panel button:hover:before,
.p4s_sbs-panel__control:focus:before,
.p4s_sbs-panel button:focus:before,
.p4s_sbs-panel__control:active:before,
.p4s_sbs-panel button:active:before {
  left: 10px;
  right: 10px;
}
.p4s_sbs-panel__control:hover .p4s_sbs-panel__control-panel,
.p4s_sbs-panel button:hover .p4s_sbs-panel__control-panel,
.p4s_sbs-panel__control:focus .p4s_sbs-panel__control-panel,
.p4s_sbs-panel button:focus .p4s_sbs-panel__control-panel,
.p4s_sbs-panel__control:active .p4s_sbs-panel__control-panel,
.p4s_sbs-panel button:active .p4s_sbs-panel__control-panel {
  transform: translate(0, -8px);
}
.p4s_sbs-panel__control:before,
.p4s_sbs-panel button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: block;
  height: 30px;
  background: transparent;
  background: radial-gradient(ellipse at center, rgba(186,188,211,0.8) 0, rgba(186,188,211,0.7) 21%, rgba(255,255,255,0) 70%);
  border-radius: 20px;
  transition: left 0.3s ease, right 0.3s ease;
}
.p4s_sbs-panel__control-panel,
.p4s_sbs-panel button-panel {
  position: relative;
  z-index: 10;
  display: block;
  margin: 0;
  padding: 10px;
  color: #fff;
  font-size: 10px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  background: #1a217a;
  border-radius: 18px;
  outline: 0 none;
  opacity: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.p4s_sbs-panel_tooltip_hover:hover .p4s_sbs-panel__tooltip {
  display: block;
}
.p4s_sbs-panel_tooltip_open .p4s_sbs-panel__tooltip {
  display: block;
}

.p4s-native-reply__background {
    z-index: 1000 !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    background-color: rgba(0,0,0,0.5) !important;
}

@media only screen and (max-width: 768px) {
    .p4s-native-reply__background {
        display: none;
    }
}

.p4s-native-reply__wrapper {
    position: absolute;
    display: table !important;
    width: 465px !important;
    color: #000 !important;
    background-color: #fff !important;
    padding: 30px !important;
    font-size: 19px !important;
    line-height: 1.2em !important;
    box-shadow: #999 0px 0px 49px -3px !important;
    text-align: center !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%,-50%) !important;
}

.p4s-native-reply__title {
    font-size: 20px !important;
    font-weight: bold !important;
    margin: 0 0 30px !important;
    font-family: 'Open Sans', sans-serif !important !important;
}

.p4s-native-reply__text {
    font-size: 16px !important;
    margin: 0 0 20px !important;
    font-family: 'Open Sans', sans-serif !important;
}

img.p4s-native-reply__image {
    display: inline-block !important;
    max-width: 300px !important;
}

.p4s-native-reply__close {
    position: absolute !important;
    line-height: 1px !important;
    top: 15px !important;
    right: 15px !important;
    cursor: pointer !important;
}