try { 
	webengage.onReady(function () {
  webengage.notification.onOpen(function (data) {
    setTimeout(function () {
    if (data.notificationId === "~19715031b") {
      var iframe = document.querySelector("#webklipper-publisher-widget-container-notification-frame");
      
      iframe.style.width = '120px';
      iframe.style.left = '-960px';
      iframe.style.top = '-1025px';
    
    }
  });
});
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~hg3che');
	 }
 }
