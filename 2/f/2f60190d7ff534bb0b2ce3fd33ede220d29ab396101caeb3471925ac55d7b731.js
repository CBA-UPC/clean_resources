try { 
	webengage.onReady(function () {
  //  console.log('WEBENGAGE ONREADY TRIGGRED');
  
  //(Banks page (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/industry/banks/')) {
  webengage.notification.render({forcedRender: ['~gifpbq']});
  } 
  
  //(Opinions page (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/opinion/')) {
  webengage.notification.render({forcedRender: ['~13srprk']});
  } 
  
  //(Entrepreneurship view (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/entrepreneurship/')) {
  webengage.notification.render({forcedRender: ['~daj7q4']});
  } 
  
  //Personal-finance page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/personal-finance/')) {
  webengage.notification.render({forcedRender: ['~n592cc']});
  } 
  
  //Technology page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/tech')) {
  webengage.notification.render({forcedRender: ['~jqcdqj']});
  } 
  
  //Markets page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/markets/')) {
  webengage.notification.render({forcedRender: ['~3g0dap']});
  } 
    
  //(Magazine page (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/magazine/')) {
  webengage.notification.render({forcedRender: ['~83op3']});
  } 
  
 // Industry page (Footer)
 if(window.location.href.startsWith('https://www.businesstoday.in/industry/')) {
    webengage.notification.render({forcedRender: ['20hm08g']});
  } 
  
  //Latest page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/latest/')) {
  webengage.notification.render({forcedRender: ['19sdan9']});
  } 
  
   //Company page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/stocks/')) {
  webengage.notification.render({forcedRender: ['20hls9o']});
  } 
   
  
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'd8h613f');
	 }
 }
