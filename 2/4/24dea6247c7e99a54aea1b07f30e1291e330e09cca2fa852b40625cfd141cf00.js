try { 
	_weq["webengage.onReady"] = function () {
  webengage.notification.onOpen(function (data) {
    if (data.notificationId === "~55864531") {
      var iframe = document.querySelector(
        "#webklipper-publisher-widget-container-notification-frame"
      );
      iframe.style.zIndex = "999999999";
    }
  });
};

 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d515');
	 }
 }
