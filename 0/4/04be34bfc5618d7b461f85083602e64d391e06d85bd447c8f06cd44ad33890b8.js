try { 
	webengage.onReady(function ()  {
  webengage.notification.onOpen(function(data){
if(data.notificationId === "b8a54339"){
  
  var _body = document.getElementsByTagName('body')[0];
 // console.log("I am in BODY",_body);
  _body.style.height='100%';
  _body.style.overflowY='hidden';
  
}
});
 webengage.notification.onClick(function(data){
if(data.notificationId === "b8a54339"){
  
  var _body = document.getElementsByTagName('body')[0];
//  console.log("I am in BODY",_body);
  _body.style.height='100%';
  _body.style.overflowY='auto';
}
});
 webengage.notification.onClose(function(data){
if(data.notificationId === "b8a54339"){
  
  var _body = document.getElementsByTagName('body')[0];
//  console.log("I am in BODY",_body);
  _body.style.height='100%';
  _body.style.overflowY='auto';
}
});
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~5bjlab9');
	 }
 }
