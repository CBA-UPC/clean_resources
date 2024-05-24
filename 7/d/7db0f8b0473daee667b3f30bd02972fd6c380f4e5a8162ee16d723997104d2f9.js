gotie_resources={sessions:{create:{endpoint:'/sessions/',method:'POST',params:{}}},events:{track:{endpoint:'/events/',method:'POST',params:{sessionId:{type:'sessionId',required:true},event:{type:'string',required:true},meta:{type:'jsonObj',required:false},openMatch:{type:'bool',required:false}}}}}
var Gotie=function Gotie(debug){'use strict';this.initialized=false;this.api={};this.utils={};this.utils.console=function(s){if(debug&&console){console.error(s);}
return false;};this.utils.readSession=this.utils.session=function(){var session_id='';if(sessionStorage.getItem('gotie_session')){session_id=this.readSession().id;}
return session_id;};this.utils.mergeObjects=function(obj_1,obj_2){var fin={};for(var attr in obj_1){if(obj_1.hasOwnProperty(attr)){fin[attr]=obj_1[attr];}}
for(attr in obj_2){if(obj_2.hasOwnProperty(attr)){fin[attr]=obj_2[attr];}}
return fin;};this.utils.queue=function(){var self=this;self.free=true;self.chain=[];self.next=function(){if(self.chain.length>0){self.free=true;self.chain[0].call();self.chain.shift();}
else{self.free=true;}};self.route=function(pass,queue){if(self.free){pass();self.free=false;}
else{queue();}};};function serializeUrl(data){var query=[];for(var key in data){if(data.hasOwnProperty(key)){query.push(encodeURIComponent(key)+'='+(data[key]?encodeURIComponent(data[key]):''));}}
return query.join('&');}
this.api.makeRequest=function(resource,data,callback,error){if(typeof(callback)!=='function'){callback=}
if(typeof(error)!=='function'){error=}
var r,xdomain=false;if(window.XDomainRequest){xdomain=true;r=new XDomainRequest();r.onload=function(){try{var data=JSON.parse(r.responseText);if(data.message){error(data.message);}
else{callback(data);}}
catch(e){error('unknown error');}};}
else if(window.XMLHttpRequest){r=new XMLHttpRequest();r.withCredentials=true;}
else{r=new ActiveXObject("Microsoft.XMLHTTP");}
r.onreadystatechange=function(){if(r.readyState===4){if(r.status===200){callback(JSON.parse(r.responseText));}
else{try{var err=JSON.parse(r.responseText);error(err.message||err);}
catch(e){error(r.status||'unknown error');}}}};var query='';if(resource.rest){for(var rp=0;rp<resource.rest.length;rp++){resource.endpoint=resource.endpoint.replace(':'+resource.rest[rp],data[resource.rest[rp]]);delete data[resource.rest[rp]];}}
var api_base_url=config.api.url;if(resource.api!==undefined&&resource.api===false){api_base_url='';}
else{if(resource.method==='GET'){query='?'+serializeUrl(data);}}
r.open(resource.method,api_base_url+resource.endpoint+query.substring(0,query.length-1),true);if(!xdomain){r.setRequestHeader('Content-Type','application/json');r.setRequestHeader('Accept','application/json');}
if(resource.ref){data=self.utils.mergeMeta(data,data[resource.ref]);delete data[resource.ref];}
r.send(JSON.stringify(data));};this.init=function(callback){if(self.utils.readSession()===null){var request=function(cb){self.api.makeRequest(config.resources.sessions.create,{},function(data){sessionStorage.setItem('gotie_session',JSON.stringify(data.session));self.initialized=true;if(typeof cb=='function'){cb(data);}});};self.q.route(function(){request(function(data){self.q.next();if(typeof callback=='function'){callback(data);}});},function(){self.q.chain.push(;});}else{self.initialized=true;if(typeof callback=='function'){callback(self.utils.readSession());}}};this.track=function(event,eventMeta,openMatch,callback){if(!self.initialized){return self.utils.console("not initialized");}
if(typeof eventMeta=='function'){callback=eventMeta;eventMeta={};}
if(openMatch){openMatch=true;}else{openMatch=false;}
var meta={url:document.URL};var attrs={userAgent:navigator.userAgent,language:navigator.language,deviceScreenWidth:window.screen.width,deviceScreenHeight:window.screen.height,timezone:new Date().getTimezoneOffset()*-60};if(eventMeta){meta=self.utils.mergeObjects(meta,eventMeta);}
var request=function(cb){self.api.makeRequest(config.resources.events.track,{sessionId:self.utils.session(),event:event,attrs:attrs,meta:meta,openMatch:openMatch},;};self.q.route(function(){request(function(data){self.q.next();if(callback){callback(data);}});},function(){self.q.chain.push(function(){self.track.apply(null,[event,eventMeta,callback]);});});};debug=typeof debug!=='undefined'?debug:false;var self=this;var baseUrl="https://gotie.tunein.com";if(typeof(window.GOTIE_API)==='string'){baseUrl=window.GOTIE_API;}
var config={api:{url:baseUrl},resources:gotie_resources};self.q=new self.utils.queue();}
var queue=window.gotie.queued;var _gotie=new Gotie(true);_gotie.init(function(){if(queue){for(i=0;i<queue.length;i++){var item=queue[i];_gotie[item[0]].apply(_gotie,item[1]);}}});window&&(window.gotie=_gotie);