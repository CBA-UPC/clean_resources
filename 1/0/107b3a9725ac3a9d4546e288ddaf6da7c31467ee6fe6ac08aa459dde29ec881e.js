var host_clone = window.location.host; 
var path = window.location.pathname;
var search = window.location.search;
var my_host = 'simontokx.info'; 
var prot = 'https://'; 
if (host_clone != my_host) { 
window.location.replace( prot + my_host + path + search ); //hanya replace root url 
}