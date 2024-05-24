<!doctype html><html lang=en-US><head><meta charset="UTF-8"></head>
<body style="display:none">
<script>
function getUser(){
	var pid=localStorage.getItem('pId');
	if(pid!=null)
		return pid;
	return 'fetch';
}
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
window[eventMethod](eventMethod == "attachEvent" ? "onmessage" : "message", function (e) {
try{
	 var data = JSON.parse(e[e.message ? "message" : "data"]);
	 if(data.a=='user'){
		e.source.postMessage('userId£'+getUser(),'*');
		if(e.source!=top)
			top.postMessage('userId£'+getUser(),'*');
	 } else if(data.a=='fetch'){
		var u=getUser(e);
		if(u=='fetch')
			localStorage.setItem('pId',data.v);
		e.source.postMessage('userId£'+getUser(),'*');
		if(e.source!=top)
			top.postMessage('userId£'+getUser(),'*');
	 }
 }catch(edsf){
 }
});
</script>
</body>
</html>