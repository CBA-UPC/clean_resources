try { 
	webengage.notification.onOpen(function(data) {
   if (data.notificationId === "17304a3c0" || data.notificationId === "~19714c01a" || data.notificationId === "17304a387") {
     var timeleft = 30;
      var cTimer = setInterval(function() {
            timeleft--;
            if (timeleft <= 0) {
                clearInterval(cTimer);
                webengage.notification.clear();
            }
        }, 1000);
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '8eda3gc');
	 }
 }
