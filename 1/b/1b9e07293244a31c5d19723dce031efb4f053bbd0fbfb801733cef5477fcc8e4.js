function setOptIn(){
	createIframe("opt_in");
}


function createIframe(valOpt){
	var elem = document.getElementById("opt-frame");
	
	if(elem != null){
 	     elem.parentElement.removeChild(elem);
	}

	var ifrm = document.createElement("iframe");
	ifrm.src = "https://prof.estat.com/js/html/"+valOpt+"_frame.html";
	ifrm.id = "opt-frame";
	ifrm.style.border = "0px";
	ifrm.style.width = "0px";
	ifrm.style.height = "0px";
	document.body.appendChild(ifrm);
}
