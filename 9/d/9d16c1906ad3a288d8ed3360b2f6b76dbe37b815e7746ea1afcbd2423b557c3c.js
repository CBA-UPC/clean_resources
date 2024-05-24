try { 
	 // Live Callout_test  | TID:70151 | S.D

webengage.notification.onOpen(function(data) {
    var _a = null;
    var _b = null;
    window.addEventListener("scroll", function () {
    if (data.notificationId === "~197150751" || data.notificationId === "~55864862"  || data.notificationId === "22a340075"  || data.notificationId === "3175c890") {
      
      var scroll_Y = window.scrollY;
      var scrollTop = window.scrollTop;
      //console.log('scrollTop', scrollTop);
        if (scroll_Y >= 30 && scrollTop !== 0) {
        _a = document.getElementById("webengage-notification-container");
        _a.style.position = "fixed";
        _a.style.top = "0rem";
        _a.style.left = "0rem";
        _a.style.zIndex = 1000;
         _b = document.getElementById("webklipper-publisher-widget-container-notification-frame");
        _b.style.position = "fixed";
        _b.style.top = "-960px";
        
       }
    } 
      
     var c = _a.childNodes[0];
      var xComponent = new DOMMatrixReadOnly(c.style.transform).m41;
      var signInButton = document.getElementById("login-area");
      var buttonTopMargin = signInButton.getBoundingClientRect().top;
      var yComponent = 1000 + buttonTopMargin;
        c.style.transform = "translate(" + xComponent + "px, " + yComponent + "px)";
     
  });
});

 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d54i');
	 }
 }
