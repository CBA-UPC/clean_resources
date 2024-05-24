(function(window){window.PbaSiteTracker_GlobalConfigs={url:"https://st.pba.xl.pt/pbasitetracker/a.ashx",useSiteCookie:false,siteID:"site id",suid:"user id",extraArgs:[{name:"cid",value:"COF"}]};window.PbaSiteTracker=new function(){var _configs={url:"",uid:"",useSiteCookie:false,siteID:"",suid:""};var _waitRedirect=false;var _cookie="__PWL";var _initTimeout=100;var _needsInit=true;var _waitingForCallback=false;var _callbackTimeoutID=null;var _documentBodyReady=false;var _self=this;var _dispatchQueue=new Array();function dispatchEvent(){if(_needsInit)
return;while(_dispatchQueue.length>0){var event=_dispatchQueue.shift();event.action.apply(_self,event.args);}}
setInterval(dispatchEvent,300);function concat(o1,o2,overwrite){Object.keys(o2).forEach(function(f){if(overwrite||o1[f]===undefined)
o1[f]=o2[f];});return o1;}
var cutkeys=["DOMpath","href"];function serialize(obj,maxsize){var str="";if(isObject(obj)){if(maxsize){var count=0;var newobj=Object.keys(obj).reduce(function(p,c){var val=encodeURIComponent(c)+"="+encodeURIComponent(obj[c]==undefined?"":obj[c].toString());count+=val.length+1;p[c]=val;return p;},{});if(count>maxsize){var tocut=count-maxsize;var total=cutkeys.reduce(function(p,c){return p+(newobj[c]||"").length;},0);cutkeys.forEach(function(f){if(newobj[f]){var len=newobj[f].length;var idx=Math.ceil(len/total*tocut);newobj[f]=newobj[f].substring(0,len-idx);}});}
str=Object.keys(newobj).map(.join("&");}
else{str=Object.keys(obj).map(function(prop){return encodeURIComponent(prop)+"="+encodeURIComponent(obj[prop]==undefined?"":obj[prop].toString());}).join("&");}}
return str;}
function log(text){var div=document.createElement("div");div.innerHTML=text;document.getElementsByTagName("body")[0].appendChild(div);}
function queueEvent(){if(arguments.length){var args=arguments.length===1?null:Array.apply(null,arguments).slice(1);var event={"action":arguments[0],"args":args};_dispatchQueue.push(event);}}

function getPlatform(){if(navigator){var p;if(p=/iPad|iPhone/.exec(navigator.platform))
return p;else if(p=/ARM/.exec(navigator.platform)){var n=/Windows Phone/.exec(navigator.appVersion);return p+" "+n;}
else if(p=/Win32|Linux/.exec(navigator.platform)){var n;if(n=/Android/.exec(navigator.appVersion))
return n;else if(n=(/Microsoft Internet Explorer/.exec(navigator.appName)||/OPR/.exec(navigator.appVersion)||/Chrome|Safari/.exec(navigator.appVersion)||/Netscape/.exec(navigator.appName)))
return p+" "+n;return p;}}
return"Unknown";}
function isObject(val){if(val===null){return false;}
return(val instanceof Function||(val instanceof Object&&!Array.isArray(val)));}
function getExtra(params){var obj={};if(isObject(params)){Object.keys(params).forEach(function(v){if(v!=undefined)
obj[v]=params[v];});}
else if(Array.isArray(params)){params.forEach(function(ex){if(ex&&ex.name){if(ex.selector){var sel=ex.selector.split(/([\.@#][a-z:=\d]+)/gi).filter(;;var tag="*";if(ex.selector.match(/^\w/)){tag=sel[0];sel.splice(0,1);}
var elems=Array.apply([],document.getElementsByTagName(tag));for(var j=0;j<sel.length&&elems.length>0;j++){var s=sel[j];elems=elems.filter(function(el){switch(s[0]){case'.':var c=el.getAttribute("class");return c.indexOf(s.substr(1))>=0;case'#':var c=el.getAttribute("id");return c.indexOf(s.substr(1))>=0;case'@':var sa=s.split('=');var attr=el.getAttribute(sa[0].substr(1));if(attr)
return sa.length>1?attr==sa[1]:true;else
return false;default:return false;}});}
if(elems.length>0){var value=ex.value;if(ex.value&&ex.value[0]=='@'){value=elems[0].getAttribute(ex.value.substring(1));}
obj[ex.name]=value;}}
else if(ex.value){obj[ex.name]=ex.value;}}});}
return obj;}
function doJSONPRequest(args){var url=_configs.url+"?___hash="+(new Date()).getTime()+"&callback=PbaSiteTracker.OnInitDone&";url+=serialize(args,2048-url.length)
var script=document.createElement('script');script.type='text/javascript';script.async=true;script.src=url;script.onload=script.onreadystatechange=var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(script,d);}
function doJSONRequest(args,callback){var httpRequest;if(window.XMLHttpRequest){httpRequest=new XMLHttpRequest();}else if(window.ActiveXObject){httpRequest=new ActiveXObject("Microsoft.XMLHTTP");}
if(!httpRequest){return false;}
httpRequest.onreadystatechange=function(){if(httpRequest.readyState===XMLHttpRequest.DONE){if(httpRequest.status===200){callback(httpRequest.responseText)}}};var url=+"?___hash="+(new Date()).getTime()+"&callback=PbaSiteTracker.OnInitDone&"+serialize(args);httpRequest.open('POST',_configs.url);httpRequest.send();}
var _regex=/[0-9a-f]{32}/;function getUser(){if(_configs.uid)
return _configs.uid;var index=document.cookie.indexOf(_cookie);if(index>=0){var user=document.cookie.substr(index+_cookie.length+1);var index=user.indexOf(';');if(index>=0)
user=user.substr(0,user.indexOf(';'));return _regex.test(user)?user:false;}
else
return false;}
function setUser(user){var date=new Date();date.setFullYear(date.getFullYear()+100,0,0);document.cookie=_cookie+"="+user+";path=/;expires="+date.toUTCString();}
function getUID(len){var chars='abcdef0123456789';var retval="";for(var i=0;i<len;i++)
retval+=chars[Math.floor(Math.random()*chars.length)];return retval;};function hasClass(element,classname){var c=" "+classname+" ";var ec=" "+element.className+" ";return ec.indexOf(c)>=0;}
function addEvent(object,type,callback){if(object==null||typeof(object)=='undefined')return;if(object.addEventListener){object.addEventListener(type,callback,false);}else if(object.attachEvent){object.attachEvent("on"+type,callback);}else{object["on"+type]=callback;}};function bindObserver(nodeobserved,clickcallback){if(nodeobserved&&!nodeobserved.__pbasitetracker_observer){var observer=new MutationObserver(function(mutations,observer){mutations.forEach(function(m){[].concat.apply([],m.addedNodes).forEach(function(add){if(add.nodeType==1){var links=add.getElementsByTagName("a");var arr=add.nodeName=='A'?[add]:[];[].concat.apply(arr,links).forEach(function(v){if(v.getAttribute("href")&&v.__pbasitetracker_event_set!=true){v.__pbasitetracker_event_set=true;addEvent(v,"click",clickcallback);}});}});});});observer.observe(nodeobserved,{childList:true,subtree:true});nodeobserved.__pbasitetracker_observer=observer;}}
var _lastlinkcount=0;function setupLinkClickEvent(){var tags=document.getElementsByTagName("a");if(_lastlinkcount!==tags.length){_lastlinkcount=tags.length;var links=[].concat.apply([],tags);links.forEach(function(el){if(el.getAttribute("href")&&el.__pbasitetracker_event_set!=true){el.__pbasitetracker_event_set=true;addEvent(el,"click",PbaSiteTracker.linkClicked);}});}
setTimeout(1000);}
function getDOMPath(el){if(el==null)return"";if(el.nodeName.toLowerCase()=="html")
return el.nodeName.toLowerCase();else{var tag=el.nodeName.toLowerCase();if(el.parentNode!=null&&el.parentNode.childNodes.length>0){var pos=0;for(var i=0;el.parentNode.childNodes[i]!=el;i++){if(el.parentNode.childNodes[i].nodeType==1)
pos++;}
tag+='['+pos+']';}
if(el.className!="")
tag+="."+el.className;if(el.id)
tag+="#"+el.id;return getDOMPath(el.parentNode)+">"+tag}};function getElementPosition(el){var pos={x:0,y:0};while(el.offsetParent!=null){pos.x+=el.offsetLeft;pos.y+=el.offsetTop;el=el.offsetParent;}
return pos;}
function getScrollPosition(){var pos={x:document.body.scrollLeft||document.documentElement.scrollLeft||window.pageXOffset||0,y:document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0};return pos;}
var _redirectTimer=0;function redirect(sender,event){var target=((sender.getAttribute?sender.getAttribute("target"):sender.target)||"").toLowerCase();if((target!=='_self'&&target!=="")||event.ctrlKey||event.altKey||event.shiftKey||event.metaKey||event.which==2)return;if(!event.defaultPrevented){setTimeout((function(evt){return function(){if(!evt.defaultPrevented){evt.preventDefault();clearTimeout(_redirectTimer);_redirectTimer=setTimeout(function(){window.location.href=sender.getAttribute?sender.getAttribute("href"):sender.href;},50);}
return null;}})(event),0);}}
function documentBodyReady(){if(document.readyState==="complete"){return setTimeout(Init,1);}
addEvent(document,"DOMContentLoaded",Init);addEvent(document,"readystatechange",Init);addEvent(window,"load",Init);}
function Init(){if(_needsInit&&!_waitingForCallback){_initTimeout+=_initTimeout;var hasDoneRequest=false;var user=getUser();if(_configs.useSiteCookie==true){if(user){setTimeout(0);}
else{hasDoneRequest=true;var args={"a":"_nuid"};doJSONPRequest(args);_configs.uid=null;}}
else{var create=user?false:true;var args={"a":"_cuid","n":create};hasDoneRequest=true;doJSONPRequest(args);}
if(hasDoneRequest){_waitingForCallback=true;_callbackTimeoutID=setTimeout(10000);}}
if(_needsInit)
setTimeout(Init,_initTimeout);}
this.OnInitDone=function(response){if(response.success){if(_configs.useSiteCookie==true){if(response.uid){setUser(response.uid);_configs.uid=response.uid;}}
else{if(response.uid){setUser(response.uid);_configs.uid=response.uid;}
else{var user=getUser();doJSONPRequest({"a":"_suid","uid":user});return;}}}
if(PbaSiteTracker.InitDone)
PbaSiteTracker.InitDone(response);_needsInit=false;};this.InitDone=null;this.callbackReceived=function(obj){obj&&obj.method&&obj.method(obj.arg);clearTimeout(_callbackTimeoutID);_waitingForCallback=false;};this.linkClicked=function(e){var event=e?e:window.event;var sender=e.currentTarget?e.currentTarget:e.srcElement;while(sender.nodeName.toLowerCase()!="a"&&sender!=null)
sender=sender.parentNode;if(sender==null)return;var senderPos=getElementPosition(sender);var scroolPos=getScrollPosition();var date=new Date();var args={"a":"_tl","date":date.getTime(),"siteid":_configs.siteID,"uid":_configs.uid,"text":sender.textContent.trim(),"referrer":document.referrer,"url":document.location,"href":sender.href,"DOMpath":getDOMPath(sender),"browser":getBrowser(),"containsImage":(sender.getElementsByTagName("img").length>0?"true":"false"),"linkPosition":('('+senderPos.x+','+senderPos.y+')'),"scrollPosition":('('+scroolPos.x+','+scroolPos.y+')'),"suid":_configs.suid,"platform":getPlatform()};var ex=getExtra(window.PbaSiteTracker_GlobalConfigs&&window.PbaSiteTracker_GlobalConfigs.extraArgs||[]);args.cookie=_configs.useSiteCookie===false;doJSONPRequest(concat(args,ex,true));_waitRedirect&&redirect(sender,event);};this.setUID=this.getUID=this.track=function(trackType,extraArgs){if(_needsInit)
return queueEvent(arguments.callee,trackType,extraArgs);var date=new Date();var args={"a":trackType,"date":date.getTime(),"siteid":_configs.siteID,"uid":_configs.uid,"url":document.location,"referrer":document.referrer,"browser":getBrowser(),"suid":_configs.suid,"platform":getPlatform(),"cookie":_configs.useSiteCookie===false};extraArgs=(Array.isArray(extraArgs)?extraArgs:[extraArgs]).concat(window.PbaSiteTracker_GlobalConfigs&&window.PbaSiteTracker_GlobalConfigs.extraArgs||[]);var ex=getExtra(extraArgs);doJSONPRequest(concat(args,ex,true));}
this.trackPage=this.trackLinks=function(){if(_needsInit)
return queueEvent(arguments.callee,null);setTimeout(function(){setupLinkClickEvent()
if(window.MutationObserver){bindObserver(document.body,PbaSiteTracker.linkClicked);}},0);};this.trackRecommendation=function(e,extraArgs){if(_needsInit)
return queueEvent(arguments.callee,e,extraArgs);var event=e?e:window.event;var sender=event&&(event.currentTarget?event.currentTarget:event.srcElement);var date=new Date();var args={"a":"_tr","date":date.getTime(),"siteid":_configs.siteID,"uid":_configs.uid,"url":document.location,"href":sender&&sender.href||"","cookie":_configs.useSiteCookie===false};extraArgs=(Array.isArray(extraArgs)?extraArgs:[extraArgs]).concat(window.PbaSiteTracker_GlobalConfigs&&window.PbaSiteTracker_GlobalConfigs.extraArgs||[]);var ex=getExtra(extraArgs);doJSONPRequest(concat(args,ex,true));_waitRedirect&&redirect(sender,event);};this.trackRecommendationViewed=function(e,extraArgs){if(_needsInit)
return queueEvent(arguments.callee,e,extraArgs);var event=e?e:window.event;var sender=event&&(event.currentTarget?event.currentTarget:event.srcElement);var date=new Date();var args={"a":"_tv","date":date.getTime(),"siteid":_configs.siteID,"uid":_configs.uid,"url":document.location,"href":sender&&sender.href||"","cookie":_configs.useSiteCookie===false};extraArgs=(Array.isArray(extraArgs)?extraArgs:[extraArgs]).concat(window.PbaSiteTracker_GlobalConfigs&&window.PbaSiteTracker_GlobalConfigs.extraArgs||[]);var ex=getExtra(extraArgs);doJSONPRequest(concat(args,ex,true));};this.Init=function(options){concat(_configs,window.PbaSiteTracker_GlobalConfigs,true);concat(_configs,options,true);documentBodyReady();}}})(window);