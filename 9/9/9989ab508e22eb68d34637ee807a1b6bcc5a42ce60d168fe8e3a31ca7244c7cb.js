var dp_tracker_cookie_lifespan=87600;var url=window.location.href;url_arr=url.split('/');domain=url_arr[2];var url_t=url_arr[(url_arr.length-2)].split(".");url_t_val=url_t[0];lang_arr=domain.split('.');lang=(lang_arr[0]=='www'||lang_arr[0]=='www1'||lang_arr[0]=='www2'||lang_arr[0]=='photos'||lang_arr[0]=='gallery'||lang_arr[0]=='wallpapers'||lang_arr[0]=='videos')?"english":lang_arr[0];if(jQuery.trim(url_t).length===0)url_t_val=url_arr[(url_arr.length-2)];var cookie_domain=domain;var site=domain;function setDesipearlTrackerUserCookie(name,value,expires,path,domain,secure){var today=new Date();today.setTime(today.getTime());if(expires){expires=expires*1000*60*60;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+'='+escape(value)+
((expires)?';expires='+expires_date.toGMTString():'')+
((path)?';path='+path:'')+
((domain)?';domain='+domain:'')+
((secure)?';secure':'');}
function checkDesipearlTrackerUserCookie(cookie_name){var location_details=getDesipearlTrackerUserCookie(cookie_name);if(location_details==null||location_details==""){return false;}else if(location_details!=""){return true;}}
if(typeof(Storage)!=="undefined"){console.log('Local storage supported by browser');}else
console.log('Local storage not supported by browser');window.XdUtils=window.XdUtils||(function(){function extend(object,defaultObject){var result=defaultObject||{};var key;for(key in object){if(object.hasOwnProperty(key)){result[key]=object[key];}}
return result;}
return{extend:extend};})();window.xdLocalStorage=window.xdLocalStorage||(function(){var MESSAGE_NAMESPACE='cross-domain-local-message';var options={iframeId:'cross-domain-iframe',iframeUrl:undefined,initCallback:;var requestId=-1;var iframe;var requests={};var wasInit=false;var iframeReady=true;function applyCallback(data){if(requests[data.id]){requests[data.id](data);delete requests[data.id];}}
function receiveMessage(event){var data;try{data=JSON.parse(event.data);}catch(err){}
if(data&&data.namespace===MESSAGE_NAMESPACE){if(data.id==='iframe-ready'){iframeReady=true;options.initCallback();}else{applyCallback(data);}}}
function buildMessage(action,key,value,callback){requestId++;requests[requestId]=callback;var data={namespace:MESSAGE_NAMESPACE,id:requestId,action:action,key:key,value:value};iframe.contentWindow.postMessage(JSON.stringify(data),'*');}
function init(customOptions){options=XdUtils.extend(customOptions,options);var temp=document.createElement('div');if(window.addEventListener){window.addEventListener('message',receiveMessage,false);}else{window.attachEvent('onmessage',receiveMessage);}
temp.innerHTML='<iframe id="'+options.iframeId+'" src='+options.iframeUrl+' style="display: none;"></iframe>';document.body.appendChild(temp);iframe=document.getElementById(options.iframeId);}
function isApiReady(){if(!wasInit){console.log('You must call xdLocalStorage.init() before using it.');return false;}
if(!iframeReady){console.log('You must wait for iframe ready message before using the api.');return false;}else{console.log('Your iframe ready .');}
return true;}
return{init:function(customOptions){if(!customOptions.iframeUrl){throw 'You must specify iframeUrl';}
if(wasInit){console.log('xdLocalStorage was already initialized!');return;}
wasInit=true;if(document.readyState==='complete'){init(customOptions);}else{window.onload=}},setItem:function(key,value,callback){if(!isApiReady()){return;}
buildMessage('set',key,value,callback);},getItem:function(key,callback){if(!isApiReady()){return;}
buildMessage('get',key,null,callback);},removeItem:function(key,callback){if(!isApiReady()){return;}
buildMessage('remove',key,null,callback);},key:function(index,callback){if(!isApiReady()){return;}
buildMessage('key',index,null,callback);},clear:function(callback){if(!isApiReady()){return;}
buildMessage('clear',null,null,callback);},wasInit:;})();xdLocalStorage.init({iframeUrl:'https://www.desipearl.com/tracker/localstorage/cross-domain-local-storage.html',initCallback:function(){console.log('init');console.log('Got iframe ready');if(!checkDesipearlTrackerUserCookie('dp_user_tracker_id')){var user_id='';xdLocalStorage.getItem('dp_user_tracker_id',function(data){user_id=data.value;if(user_id==''||user_id==null){user_id=userIdDesipearlTracker();xdLocalStorage.setItem('dp_user_tracker_id',user_id,function(data1){console.log('setooo'+data1);});console.log('no cookies no local set user_id: '+user_id);setDesipearlTrackerUserCookie('dp_user_tracker_id',user_id,dp_tracker_cookie_lifespan,'/',cookie_domain,'');}else{console.log('localstorage yes, no cookies set user_id: '+user_id);setDesipearlTrackerUserCookie('dp_user_tracker_id',user_id,dp_tracker_cookie_lifespan,'/',cookie_domain,'');}});}else{xdLocalStorage.getItem('dp_user_tracker_id',function(data){loc_user_id=data.value;if(loc_user_id==''||loc_user_id==null){xdLocalStorage.setItem('dp_user_tracker_id',getDesipearlTrackerUserCookie('dp_user_tracker_id'),;}});}}});function userIdDesipearlTracker(){var chars="0123456789";var string_length=26;var randomstring='';for(var i=0;i<string_length;i++){var rnum=Math.floor(Math.random()*chars.length);randomstring+=chars.substring(rnum,rnum+1);}
var ts=Math.round((new Date()).getTime()/1000);return randomstring+'_'+ts;}