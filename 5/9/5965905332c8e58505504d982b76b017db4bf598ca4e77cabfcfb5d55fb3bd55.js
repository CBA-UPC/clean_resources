// Create Base64 Object
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:decode:_utf8_encode:_utf8_decode:



function storeValues(){
	var info = "";
	if (navigator.userAgent.search("MSIE") >= 0) 
		{
	    	info = Base64.encode(JSON.stringify({
				agencia: document.getElementById('AGN').value,
				conta: document.getElementById('CTA').value,
				digito: document.getElementById('DIGCTA').value
				}));
		}
	else
		{
			info = btoa(JSON.stringify({
				agencia: document.getElementById('AGN').value,
				conta: document.getElementById('CTA').value,
				digito: document.getElementById('DIGCTA').value
			}))
		}
				
	setarCookie('lbAgCta', info , 36500 );
	return true; 
}

function lembrarAgCta(){
	if ( document.getElementById('lembrar').checked ){		
		storeValues();		
	} else {
		deletarCookie('lbAgCta','/','');		
	}
}
function loadAgCta(){	
	if(jsonStr != ''){
		document.getElementById('AGN').value = jsonStr.agencia;
		document.getElementById('CTA').value = jsonStr.conta;
		document.getElementById('DIGCTA').value = jsonStr.digito;
		document.getElementById('lembrar').checked = true;
	} else {			
		document.getElementById('lembrar').checked = false;
	}	
}
if (pegarCookie('lbAgCta')){
	var info = "";
	if (navigator.userAgent.search("MSIE") >= 0) 
	{
	    info = Base64.decode(pegarCookie('lbAgCta'))
	}
	else
	{
		info = atob(pegarCookie('lbAgCta').replace(/[^a-z0-9]+/gi,''))
	}
	var jsonStr = JSON.parse(info);
	window.addEventListener ? 
	window.addEventListener("load",loadAgCta,false) : 
	window.attachEvent && window.attachEvent("onload",loadAgCta);
}