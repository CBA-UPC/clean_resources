//tealium universal tag - utag.172 ut4.0.202007132205, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(typeof window[window.gtagRename]==="function"){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
window.dataLayer=window.dataLayer||[];window[window.gtagRename]=window[window.gtagRename]("js",new Date());};u.initialized=u.hasgtagjs();u.scriptrequested=false;u.queue=[];u.o=window[window.gtagRename];u.map_func=u.hasOwn=u.isEmptyObject=u.map={"dom.title":"custom.u1","dom.url":"custom.u2","dc_fire:true":"conversion"};u.extend=[;u.loader_cb=function(a,b){utag.DB("send:172:CALLBACK");u.initialized=true;var i,j,_event,p,key;for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="purchase"){p=true;}}
if(!p){u.data.event.push("purchase");}}
var total_qty=1;if(typeof(u.data.product_quantity)==="number"){total_qty=u.data.product_quantity;}else if(u.data.product_quantity.length===1){total_qty=u.data.product_quantity[0];}else if(u.data.product_quantity.length>1){for(i=0;i<u.data.product_quantity.length;i++){total_qty+=parseInt(u.data.product_quantity[i],10);}}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];for(j=0;j<u.data.advertiser_id.length;j++){var eventIdData={};if(u.data.custom_scripts==="true"||u.data.custom_scripts){eventIdData.allow_custom_scripts=true;}else if(u.data.custom_scripts==="false"||!u.data.custom_scripts){eventIdData.allow_custom_scripts=false;}
if(u.data.session_id.length===1&&u.data.session_id[0]!==""){eventIdData.session_id=u.data.session_id[0];}else if(u.data.session_id[j]!==""){eventIdData.session_id=u.data.session_id[j];}
if(u.data.order_total){eventIdData.value=u.data.order_total;eventIdData.transaction_id=u.data.order_id;}
if(u.data.product_quantity){eventIdData.quantity=total_qty;}
for(key in u.data.custom){eventIdData[key]=u.data.custom[key];}
if(!u.isEmptyObject(u.data.dc_custom_params)){eventIdData.dc_custom_params={};for(key in u.data.dc_custom_params){eventIdData.dc_custom_params[key]=u.data.dc_custom_params[key];}}
eventIdData.send_to=u.data.advertiser_id[j]+"/"+u.data.activity_group[j]+"/"+u.data.activity[j]+"+"+u.data.counting_method[j];if(_event==="purchase"){u.o("event","purchase",eventIdData);}
if(_event==="conversion"){u.o("event","conversion",eventIdData);}}}
utag.DB("send:172:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b);}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:172");utag.DB(b);var d,e,f,h;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js","advertiser_id":"DC-8758559","activity_group":"allun0","activity":"allpa0","counting_method":"unique","custom_scripts":"true","session_id":"","product_quantity":[],"dc_custom_params":{},"event_name":"","event":[],"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:172:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:172:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);if(u.initialized){u.loader_cb(a,b);}else{u.queue.push({"data":u.data,"a":a,"b":b});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_172","attrs":{}});}}
utag.DB("send:172:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("172","fox.delta"));}catch(error){utag.DB(error);}
