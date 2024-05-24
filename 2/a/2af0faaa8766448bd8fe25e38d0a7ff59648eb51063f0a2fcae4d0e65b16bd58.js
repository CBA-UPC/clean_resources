try { 
	webengage.onReady(function () {
  webengage.notification.onOpen(function (data) {

  var NewsLetter='NO';
    var Email;
    
   //console.log('NewsLetter',NewsLetter);
    
    if (data.notificationId === 'b8a55a8c') {
      
      //console.log('if block');
      var iframe = document.getElementById('webklipper-publisher-widget-container-notification-frame');
      var b = iframe.contentWindow.document;
      var c = b.getElementById('~96c71481');
      
      c.addEventListener('click', function() {
        
         //  console.log('you clicked btn');
        
         
        if (
            webengage &&
            webengage.state &&
            typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null ||
                webengage.state.getForever().cuid === undefined) &&
            Email !== null
        ) {
          
            NewsLetter="YES";
            webengage.user.setAttribute({               
              "NewsLetter": NewsLetter
            });
         
          
        webengage.user.setAttribute('NewsLetter', NewsLetter);
         //  console.log('YES');
          
            webengage.track('is_subscribe', {
              "NewsLetter": NewsLetter
               });
          
        }
       
      });
    }
});
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~5bjlac6');
	 }
 }
