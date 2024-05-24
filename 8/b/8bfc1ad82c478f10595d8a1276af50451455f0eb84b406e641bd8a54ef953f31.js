var TruexAdClient=function(){"use strict";function C(){}function A(){var e=window.location.protocol||document.location.protocol;return"http:"!==e&&(e="https:"),e}function n(d,e){var o,a="get.truex.com",u={},p={},l=!0===d.handle_clickthrough_manually;u.requestAd=u.requestActivity=function(t){u.requestActivities(function(e){t(e[0])})},u.requestActivities=function(i){var t=!1;n(),truex.loadExelateSegments(function(){if(m&&!t){t=!0;var e=y(d),r=new XMLHttpRequest;r.open("POST",e.substring(0,e.indexOf("?")),!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.onreadystatechange=function(){if(4==r.readyState){if(200==r.status){var e=JSON.parse(r.r&&(f(t[0].partner_id),g(t[0].partner_id),h(t[0].partner_id),w(t[0].partner_id)),v(d.partner_config_hash);for(var n=0;n<t.length;n++)u.prepareAd(t[n]);return void i(t)}e&&e.fillable&&v(d.partner_config_hash)}return x(),void i([])}},r.send(e.substr(e.indexOf("?")+1))}})},u.openAdWindow=u.openActivityWindow=function(n){var e=n&&n.id?"location=no,menubar=no,status=no,toolbar=no,width="+n.window_width+", height="+n.window_height:"";u.trackOptIn(n);var t=truex.xdm.createChannel(function(e,t){switch(e){case"credit":p[n].credit(t);break;case"partialCredit":p[n].partialCredit(t);break;case"start":p[n].start(n);break;case"message":p[n].message(t);break;case"finish":p[n].finish(n);break;case"close":break;case"open":if(!l)break;p[n].clickthrough(t);break;case"error":p[n].error(n)}}),r=l?"&iframed.mraid=1":"";o=window.open(n.window_url+t+r,"truex_client_activity_window",e);var i=setInterval(function(){o.closed&&(clearInterval(i),p[n].close(n))},500)},u.loadAdIntoContainer=u.loadActivityIntoContainer=function(n,e,t){u.trackOptIn(n);var r=t&&void 0!==t.width?t.width:n.window_width,i=t&&void 0!==t.height?t.height:n.window_height,o=t?t.minWidth:void 0,a=t?t.minHeight:void 0;r+=isNaN(Number(r))?"":"px",i+=isNaN(Number(i))?"":"px";var c=truex.xdm.createChannel(function(e,t){switch(e){case"credit":p[n].credit(t);break;case"partialCredit":p[n].partialCredit(t);break;case"start":p[n].start(n);break;case"message":p[n].message(t);break;case"finish":p[n].finish(n);break;case"close":p[n].close(n);break;case"open":if(!l)break;p[n].clickthrough(t);break;case"error":p[n].error(n)}}),s=l?"&iframed.mraid=1":"";k(n.window_url+c+s,e,r,i,o,a)},u.prepareAd=u.prepareActivity=function(e){t(e),r(e),x(),i(e)},u.trackTriggerPointImpression=function(e){void 0===e.trigger_point_impression_tracked&&(e.trigger_point_impression_tracked=!0,I(e,"clientjs","trigger_point_load"))},u.trackOptIn=function(e){void 0===e.opt_in_tracked&&(e.opt_in_tracked=!0,I(e,"clientjs","client_js_select_unit"))},u.trackOptOut=function(e){void 0===e.opt_out_tracked&&(e.opt_out_tracked=!0,I(e,"clientjs","client_js_opt_out"))},u.trackImpression=function(e){};var c=/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB]{1}[0-9A-F]{3}-[0-9A-F]{12}$/,s=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab]{1}[0-9a-f]{3}-[0-9a-f]{12}$/,m=!1,_=[];truex.loadExelateSegments=function(){var e,t,n="//load.exelator.com/load/?p=104&g=700&j=j&t_cb=";/Android/.test(navigator.userAgent)&&(t=d.network_user_id,s.test(t))?n="//loadus.exelator.com/load?p=104&g=701&xl8Id="+encodeURIComponent(d.network_user_id)+"&idtype=AAID&APP=1&j=j&t_cb=":/iPhone|iPad|iPod|iOS/.test(navigator.userAgent)&&(e=d.network_user_id,c.test(e))&&(n="//loadus.exelator.com/load?p=104&g=701&xl8Id="+encodeURIComponent(d.network_user_id.toLowerCase())+"&idtype=IDFA&APP=1&j=j&t_cb=");var r=m=!!{}[d.partner_config_hash],i=[],o="truex_exelate_callback_"+(1e5*Math.random()|0);if(window[o]=function(e){if(e&&e.segments&&e.segments.length)for(var t=0;t<e.segments.length;t++)_.push(e.segments[t]);if(m)b("exelate",_);else{m=!0;for(t=0;t<i.length;t++)i[t]()}},!r){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=A()+n+o,document.getElementsByTagName("head")[0].appendChild(a),setTimeout(function(){if(!m){m=!0;for(var e=0;e<i.length;e++)i[e]()}},500)}return function(e){r||m?e&&e instanceof Function&&e():e&&e instanceof Function&&i.push(e)}}();var n=function(){(new Image).src=A()+"//tags.bluekai.com/site/28311?id="+encodeURIComponent(d.network_user_id)+"%3A"+d.partner_config_hash},f=function(e){(new Image).src=A()+"//dpm.demdex.net/ibs:dpid=66013&dpuuid="+e+"-"+encodeURIComponent(d.network_user_id)},g=function(e){(new Image).src="https://idsync.rlcdn.com/466426.gif?partner_uid="+e+"-"+encodeURIComponent(d.network_user_id)},h=function(e){(new Image).src="https://pixel.tapad.com/idsync/ex/receive?partner_id=3296&partner_device_id="+e+"-"+d.network_user_id},w=function(e){(new Image).src="https://aa.agkn.com/adscores/g.pixel?sid=9212300858&puid="+e+"-"+encodeURIComponent(d.network_user_id)},v=function(e){(new Image).src="https://secure-gl.imrworldwide.com/cgi-bin/m?ca=nlsn273685&cr=creative&ce=truex&pc="+e+"&ci=nlsnci799&am=4&at=view&rt=banner&st=image&r="+(new Date).getTime()},t=function(n){p[n]={start:C,message:C,credit:C,finish:C,clickthrough:C,close:C,error:C,partialCredit:C},n.onStart=function(t){p[n].start=function(){var e=Array.prototype.slice.call(arguments);t.apply(null,e),p[n].start=function(){}}},n.onMessage=function(e){p[n].message=e},n.onCredit=function(e){p[n].credit=e},n.onFinish=function(e){p[n].finish=e},n.onClose=function(e){p[n].close=e},n.onError=function(e){p[n].error=e},n.onClickthrough=function(e){p[n].clickthrough=e},n.onPartialCredit=function(e){p[n].partialCredit=e}},r=function(e){e.trackTriggerPointShown=function(){u.trackTriggerPointImpression(e)},e.trackUserOptedIn=function(){u.trackOptIn(e)},e.trackUserOptedOut=function(){u.trackOptOut(e)}},k=function(e,t,n,r,i,o){var a=document.createElement("IFRAME");a.border=a.frameBorder=0,a.allowTransparency=!0,a.src="javascript:false",a.style.width=n,a.style.height=r,void 0!==i&&(a.style.minWidth=i),void 0!==o&&(a.style.minHeight=o),a.allow="geolocation; microphone; camera; autoplay","string"==typeof t&&(t=document.getElementById(t)),(t=t||document.body).appendChild(a),a.src=e},i=function(e){try{e.partner_id&&delete e.partner_id}catch(e){}},y=function(e){var t=A()+"//"+a+"/v2?";t+="ext.referrer="+encodeURIComponent(window.location.href.substring(0,500)),t+="&env[]=html";var n={partner_config_hash:"placement.key",network_user_id:"user.uid",gender:"user.gender",age:"user.age",dimension_1:"dimension_1",dimension_2:"dimension_2",dimension_3:"dimension_3",dimension_4:"dimension_4",dimension_5:"dimension_5"};for(var r in e)if(e.hasOwnProperty(r)){var i=e[r];n[r]?t+="&"+n[r]+"="+encodeURIComponent(i):!i||i instanceof Function||(t+="&ext."+r+"="+encodeURIComponent(i))}return 0<_.length&&(t+="&exelate_segment_ids="+encodeURIComponent(_.join(","))),t},x=function(e){try{window._qevents=window._qevents||[],function(){var e=document.createElement("script");e.src=("https:"==A()?"https://secure":"http://edge")+".quantserve.com/quant.js",e.async=!0,e.type="text/javascript";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),_qevents.push({qacct:"p-EzVU5HfAMVqEV",labels:"impression"})}catch(e){}try{window._comscore=window._comscore||[],window._comscore.push({c1:"8",c2:"8030913",c3:"1"});var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];t.async=!0,t.src=("https:"==A()?"https://sb":"http://b")+".scorecardresearch.com/beacon.js",n.parentNode.insertBefore(t,n)}catch(e){}},b=function(e,t){if(t&&0<t.length){var n=A()+"//"+a+"/placements/"+d.partner_config_hash+"/users/"+encodeURIComponent(d.network_user_id),r=new XMLHttpRequest;r.open("POST",n,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.send(e+"_segment_ids="+t.join(","))}},I=function(e,t,n,r){var i={"tracking_event[category]":t};if(n&&(i["tracking_event[name]"]=n),r&&(i["tracking_event[value]"]=r),i["tracking_event[placement_hash]"]=d.partner_config_hash||null,i["tracking_event[network_user_id]"]=d.network_user_id,i["tracking_event[campaign_id]"]=e&&e.campaign_id?e.campaign_id:"",i["tracking_event[creative_id]"]=e&&e.id?e.id:"",e.session_id)i["tracking_event[session_id]"]=e.session_id;else{var o=RegExp("[?&]session_id=([^&]*)").exec(e.window_url);o&&(i["tracking_event[session_id]"]=decodeURIComponent(o[1].replace(/\+/g," ")))}var a=[];for(var c in i)a.push(c+"="+encodeURIComponent(i[c]));a=a.join("&");try{var s=new XMLHttpRequest;s.open("POST",A()+"//measure.truex.com/tracking_events",!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),s.setRequestHeader("Accept","application/json"),s.send(a)}catch(e){}};!function(){if(d.partner_config_hash||(d.partner_config_hash=d.placement_key||d.placement_hash),d.network_user_id||(d.network_user_id=d.user_id),!d.partner_config_hash)throw{name:"Error",message:"partner_config_hash is required"};if(!d.network_user_id)throw{name:"Error",message:"network_user_id is required"};d.timezone_offset||(d.timezone_offset=(new Date).getTimezoneOffset()/60),d.initialized&&d.initialized instanceof Function&&d.initialized(),truex.xdm.ready?e(u):truex.xdm.onReady=function(){e(u)}}()}var r=function(n){function e(e){for(p=1;e=r.shift();)e()}var t,r=[],i=document,o=i.documentElement,a=o.doScroll,c="DOMContentLoaded",s="addEventListener",d="onreadystatechange",u="readyState",p=(a?/^loaded|^c/:/^loaded|c/).test(i[u]);return i[s]&&i[s](c,t=function(){i.removeEventListener(c,t,!1),e()},!1),a&&i.attachEvent(d,t=function(){/^c/.test(i[u])&&(i.detachEvent(d,t),e())}),n=a?function(t){self!=top?p?t():r.push(t):function(){try{o.doScroll("left")}catch(e){return setTimeout(function(){n(t)},50)}t()}()}:function(e){p?e():r.push(e)}}(),i={},o=i={timestamp:(new Date).getTime(),ready:!1,logging:!0,messageHandlers:{},init:function(){window.addEventListener?window.addEventListener("message",i.onMessage):window.attachEvent&&window.attachEvent("onmessage",i.onMessage),i.ready=!0,i.onReady&&i.onReady instanceof Function&&i.onReady()},onMessage:function(e){var t=e.data;t&&t.channelName&&i.messageHandlers[t.channelName]&&i.messageHandlers[t.channelName](t)},createChannel:function(t){var e="_truexdm_"+(new Date).getTime();return i.messageHandlers[e]=function(e){t(e.message,e.payload)},"&truexdm_channel="+e}};(function(){var e=r;window.truex=window.truex||{},window.socialvibe=window.truex;var t=window.truex;t.xdm=o,e(function(){t.xdm.init()}),t.client=n})()}();
artsWith("/")) {
            pLabel = pLabel.substr(1);
          }

          debugOut("cmgplaypage: debug redirect check - pCategory="+pCategory +", pAction="+pAction + " " +new Date());

          if(window.top == window.self && document.referrer == "" ) {
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({"gtm.start":
              new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
              "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,"script","dataLayer","GTM-WKRSNN8");
  
            function ga4ObjInit(event) {
              ga4Obj = {};
              var ckeEn = navigator.cookieEnabled;
              //Required
              var event = (typeof event === "undefined" || event === null || event === "") ? "page_load" : event;
              var userType = (!ckeEn || getCookie("cmg_l") == null) ? "AnonymousUser" : "FreeUser";
              if (ckeEn && getCookie("cmg_sx") != null) {
                userType = "PremiumUser";
              }
              var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
              var adBlock = (typeof ad_blocker_detected !== "undefined") ? ad_blocker_detected : false;
              if (typeof gamePage != "undefined" && gamePage && typeof hide_preroll_ads != "undefined" && !hide_preroll_ads && (document.getElementById("randomAdBlockDiv") == null || typeof google == "undefined" || typeof cmgpbjs == "undefined")) {
                adBlock = true;
              }
            
              //DeviceType
              var deviceType = "Desktop"; //Default
              var ua = navigator.userAgent;
              if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(ua) || navigator.maxTouchPoints == 5) {
                deviceType = "Mobile";
              }
              if (/Android/.test(ua) && /Chrome\/[.0-9]* Mobile/.test(ua)) { //Phone pattern: "Android" + "Chrome/[.0-9]* Mobile"
                deviceType = "Mobile";
              } else if (/Android/.test(ua) && /Chrome\/[.0-9]* (?!Mobile)/.test(ua)) { //Tablet pattern: "Android" + "Chrome/[.0-9]* (?!Mobile)"
                deviceType = "Tablet";
              } else if (/iPad/.test(ua) && /Mobile\/[0-9A-Z]* Safari\/[.0-9]*/.test(ua)) {
                deviceType = "Tablet";
              } else if (/iPhone|iPod/.test(ua) && /Mobile\/[0-9A-Z]* Safari\/[.0-9]*/.test(ua)) {
                deviceType = "Mobile";
              }
            
              //dataLayer obj with required params
              var ga4Obj = {
                "event": event,
                "user_type": userType,
                "device_type": deviceType,
                "timezone": timeZone,
                "ad_blocker_detected": adBlock
              };
            
              //Optional - dataLayer params
              if (typeof gameType != "undefined" && gameType != null) {
                gameType = gameType.replace("game_", "");
                ga4Obj.game_type = gameType;
              } else if (typeof quizPage != "undefined" && quizPage != null && typeof quizTitle != "undefined") {
                ga4Obj.game_type = "trivia";
                if (typeof result_page != "undefined" && result_page == "true" && event == "page_load") {
                  ga4Obj.game_type = "trivia_result";
                }
                ga4Obj.game_name = quizTitle;
              }
              if (typeof gameId != "undefined" && gameId != null && typeof window.getGameName == "function") {
                ga4Obj.game_name = formatGameName(window.getGameName());
              }
              const options = {
                month: "short",
                day: "numeric",
                year: "numeric"
              };
              
              var cmgL = ckeEn && getCookie("cmg_l") != null ? getCookie("cmg_l") : "";
              if (cmgL != "") {
                ga4Obj.coolmath_user_id = cmgL;
              }
            
              return ga4Obj;
            }
            function ga4_trackEvent(event, pArr, vArr) {
              if (typeof dataLayer !== "undefined" && typeof dataLayer.push === "function") {
                ga4Obj = ga4ObjInit(event);
                if (typeof pArr != "undefined" && typeof vArr != "undefined") {
                  var aLen = pArr.length;
                  for (var i = 0; i < aLen; i++) {
                    ga4Obj[pArr[i]] = vArr[i];
                  }
                }
                debugOut("CMGga4: track :" + event + " " + JSON.stringify(ga4Obj) + " " + new Date());
                var ga4Response = dataLayer.push(ga4Obj);
                debugOut("CMGga4: track :" + event + " dataLayer.push response = " + JSON.stringify(ga4Response) + " " + new Date());
              } else {
                debugOut("CMGga4: dataLayer does not exist : " + new Date());
              }
            }

            //GA Trackevent and then Redirect the user to game landing page
            //Check if we can use GA

            //GA Loading
          
              (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,"script","//www.google-analytics.com/analytics.js","__gaTracker");
                var ga_dev_host = /(stage|stage2|dev|dev2|dev3|d9\-test)(\-edit)?\.coolmathgames\.(com|local)/.test(window.location.host);
                if(ga_dev_host || window.location.host == "d9-test-coolmathgames.local") {
                 __gaTracker("create", "UA-1192998-21", "auto");
               } else {
                __gaTracker("create", "UA-1192998-2", "auto");
               }

            //End of GA loading
            if(cmg_is_mobile_device()){
              setTimeout(function () {
                //Load and fire GA event
                trackEvent(pCategory, pAction, pLabel);
                var sUsrAg = navigator.userAgent;
                //Exclude iPads, iphone/iPod App and Android App
                if(document.querySelector("link[rel='canonical']").href && !/iPad/.test(sUsrAg) && ( (/iPhone|iPod/.test(sUsrAg) && /Safari/.test(sUsrAg) ) || ( /Android/.test(sUsrAg) && !/wv/.test(sUsrAg) ) ) ) {
                  window.location.href = document.querySelector("link[rel='canonical']").href;
                }
              }, 100);
            }
            var isValidDevice = true;
            var browserInfo = navigator.userAgent;
            if((browserInfo.includes === "iPhone" && browserInfo.includes === "mobile") && (browserInfo.includes === "Chrome" || browserInfo.includes ==="Safari")){
              isValidDevice = false;
            }
            if(isValidDevice){
              trackEvent("gamePlayPage", "userVisit", location.pathname);
              ga4_trackEvent("gamePlayPage", ["action","path"],["userVisit",location.pathname]);
            }
          }
          //GA4 AEG
					setInterval(function() {
            if(!document.hidden) {
              if(typeof window.parent.postMessage == "function") {
                debugOut(new Date()+ " cmgGameHeartbeat: Active tab. parent postMsg");
                window.parent.postMessage({"cmgGameHeartbeat" : document.hasFocus()}, "*");
              } else if(typeof window.top.postMessage == "function" && window.top != window.self) {
                debugOut(new Date()+ " cmgGameHeartbeat: Active tab. top postMsg");
                window.top.postMessage({"cmgGameHeartbeat" : document.hasFocus()}, "*");
              }
            } else {
              debugOut(new Date()+ " cmgGameHeartbeat: Inactive tab. No event");
            }
          }, 60000);
          </script>
        </head>

  <div class="gamecenter-activator"></div>

  <body onload="setTimeout(function(){window.scrollTo(0,1)},1);">
    <div id="ajaxbar">
      <div id="game"><canvas id="canvas"></canvas></div>
      <div id="bg"><canvas id="bgcanvas"></canvas></div>
      <div id="orientate">
        <img src="media/graphics/orientate/landscape.jpg" />
      </div>
      <div id="play" class="play" onclick="">
        <img src="media/graphics/splash/mobile/cover-start.jpg" />
      </div>

      <!-- SECTION GENERATED BY CODE -->
      <!-- END OF SECTION GENERATED BY CODE -->
    </div>
    <!-- APICode2 -->

    <!-- END OF TEST -->
  <script>function fnSendMsg(evt){
          if(typeof window.parent.postMessage == 'function') {
            window.parent.postMessage('keypress-from-game', '*');
          } else if(typeof window.top.postMessage == 'function' && window.top != window.self) {
            window.top.postMessage('keypress-from-game', '*');
          }
        }
        document.body.addEventListener('click', function(event) {
          fnSendMsg(event);
        });
        document.addEventListener('keypress', function(event) {
        	 fnSendMsg(event);
        });
        document.addEventListener('keydown', function (e) {
        	 fnSendMsg(event);
        });
        document.addEventListener('keyup', function (e) {
        	  fnSendMsg(event);
        });
        </script></body>
</html>
