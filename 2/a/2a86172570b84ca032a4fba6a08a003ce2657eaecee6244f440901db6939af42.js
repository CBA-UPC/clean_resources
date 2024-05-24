try { 
	webengage.onReady(function() {
    webengage.webPersonalization.onOpen(function(data) {
      
      //console.log("Timer notification on open.");
      console.log("Timer notification on open.", data.webPersonalizationId);
        if (data.webPersonalizationId ==="3hc3amb"||"~1ni7893") {
          webengage.util.withWeJquery(function(){
        
           // var span = $weJQuery("body > div:nth-child(9) > div > div.content-area > div.stroy-870 > div > div.str_ftr_wrp").prevObject[0].contents().find("span.mainMenu1");
           
            var span= document.querySelector("body > div:nth-child(9) > div > div.content-area > div.stroy-870 > div > div:nth-child(5) > div > div > a:nth-child(1) > div > span.mainMenu1");
            console.log("into web-p",46);   
           console.log("span ==>", span);                                                       
                var notifications = webengage_fs_configurationMap.webPersonalizationRuleList.id["body > div:nth-child(9) > div > div.content-area > div.stroy-870 > div > div.str_ftr_wrp"];
            console.log("notifications ==>", notifications);         
            var _ls;
                for (var i in notifications) {
                    if (notifications[i].experimentEncId === data.webPersonalizationId) {
                        _ls = notifications[i].endTimestamp;
                        break;
                    }
                }
           // console.log("_ls ==>", _ls);
             if (typeof _ls != 'undefined') {
                    setInterval(function() {
                        var _cs = (new Date()).getTime();

                        if (!span) return;
                        _cs += 1000;
                        var delta = Math.floor((_ls - _cs) / 1000);
                        var days = Math.floor(delta / 24 / 60 / 60);
                        delta = delta - days * 86400;
                        var hours = Math.floor(delta / 3600) % 24;
                        delta = delta - hours * 3600;
                        //delta = delta - hours * 86400;
                        var minutes = Math.floor(delta / 60) % 60;
                        delta = delta - minutes * 60;
                        var remainingSeconds = delta % 60;
                        if (remainingSeconds < 10) {
                            remainingSeconds = "0" + remainingSeconds;
                        }


                        var displayHour = hours;
                        var daylabel = " day";
                        if (days > 1) {
                           daylabel = " days";
                        }

                        $weJQuery(".we-day", span).html(days + daylabel);
                        $weJQuery(".we-day-0", span).html(Math.floor(days / 10) + "");
                        $weJQuery(".we-day-1", span).html((days % 10) + "");
                        $weJQuery(".we-hr-0", span).html(Math.floor(displayHour / 10) + "");
                        $weJQuery(".we-hr-1", span).html((displayHour % 10) + "");
                        $weJQuery(".we-min-0", span).html(Math.floor(minutes / 10) + "");
                        $weJQuery(".we-min-1", span).html((minutes % 10) + "");
                        $weJQuery(".we-sec-0", span).html(Math.floor(remainingSeconds / 10) + "");
                        $weJQuery(".we-sec-1", span).html((remainingSeconds % 10) + "");
                    }, 1000);
                }
            });
        }
    });
});

//onsite timer
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~a61h7id');
	 }
 }
