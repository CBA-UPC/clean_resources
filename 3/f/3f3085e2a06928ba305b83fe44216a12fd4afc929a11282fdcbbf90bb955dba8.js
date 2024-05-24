try { 
	webengage.onReady(function () {
  //  console.log('WEBENGAGE ONREADY TRIGGRED');
  
  //(Banks page (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/industry/banks/')) {
  webengage.notification.render({forcedRender: ['~jqcflj']});
  } 
  
  //(Opinions page (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/opinion/')) {
  webengage.notification.render({forcedRender: ['2dk8ada ']});
  } 
  
  //(Entrepreneurship view (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/entrepreneurship/')) {
  webengage.notification.render({forcedRender: ['~n5947c']});
  } 
  
  //Personal-finance page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/personal-finance/')) {
  webengage.notification.render({forcedRender: ['3hc3bhc']});
  } 
  
  //Technology page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/tech')) {
  webengage.notification.render({forcedRender: ['2k71gfa']});
  } 
  
  //Markets page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/markets/')) {
  webengage.notification.render({forcedRender: ['~1afl4n0']});
  } 
    
  //(Magazine page (Footer))
  if(window.location.href.startsWith('https://www.businesstoday.in/magazine/')) {
  webengage.notification.render({forcedRender: ['~27kmsp3']});
  } 
  
 // Industry page (Footer)
 if(window.location.href.startsWith('https://www.businesstoday.in/industry/')) {
    webengage.notification.render({forcedRender: ['~2asjhap']});
  } 
  
  //Latest page (Footer)
  if(window.location.href.startsWith('https://www.businesstoday.in/latest/')) {
  webengage.notification.render({forcedRender: ['~2kn9brj']});
  } 
  
 
   
  
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~5bjla9a');
	 }
 }
