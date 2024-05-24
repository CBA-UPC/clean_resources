try { 
	webengage.onReady(function () {
  webengage.notification.onOpen(function (data) {
    setTimeout(function () {
      if (data.notificationId === 'b8a541c0' || data.notificationId === '~10cb5931a'  ) {
          var eleMobile = document.querySelector("#webklipper-publisher-widget-container-notification-frame");
          var custom_styleMobile = {
            zIndex: "9999999999",
            width: "100%"
        };
        Object.assign(eleMobile.style, custom_styleMobile);
       }

    }, 10);
  });

});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d54j');
	 }
 }
