try{var pixel_key='_pz_clickref';function getUrlParam(name,url){var parameters=new RegExp('[\?&]'+name+'=([^&#]*)').exec(url);return parameters?decodeURI(parameters[1]):null;}
function setCookie(name,value){var date=new Date();date.setFullYear(date.getFullYear()+1);var expires=";expires="+date.toUTCString();var domain=window.location.hostname.match(/^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/)[1];document.cookie=name+"="+(value||"")+expires+";domain=."+domain+";path=/";}
var clickref=getUrlParam('clickref',window.location.href);if(clickref){localStorage[pixel_key]=clickref;setCookie(pixel_key,clickref);}
var pixel_element=document.querySelector("div[data-partnerize]")
if(pixel_element){var pixel_url=pixel_element.getAttribute('data-partnerize')
var stored_clickref=localStorage[pixel_key]||getCookie(pixel_key)
if(stored_clickref){var pixel_clickref=getUrlSection('clickref',pixel_url);if(pixel_clickref)
pixel_url=pixel_url.replace('/clickref:'+pixel_clickref,'');pixel_url+='/clickref:'+stored_clickref;}
var pixel=document.createElement('img');pixel.src=pixel_url;pixel.style.display='none';pixel.onload=document.body.appendChild(pixel);}}
catch(e){}