//tealium universal tag - utag.131 ut4.0.202401190319, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=else{u.loader=utag.ut.loader;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g,i;u.data={"base_url":(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js","qacct":"p-7bhLrd63bC8jI","orderid":"","revenue":"","order_id":"","order_subtotal":""};window._qevents=[];c=[];g={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data[e[f]]!==undefined){u.data[e[f]]=b[d];}else if(e[f].indexOf("_fp.")===0){c.push(e[f]+"."+b[d]);}else{c.push(b[d]);}}}}
u.data.order_id=u.data.orderid||u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.revenue||u.data.order_subtotal||b._csubtotal||"";u.loader_cb=function(a,b,c){u.initialized=true;g.qacct=u.data.qacct;if(c.length>0){u.data.labels=c.join(",");g.labels=c.join(",");}
if(u.data.order_id){g.orderid=u.data.order_id;}
if(u.data.order_subtotal){g.revenue=u.data.order_subtotal;}
_qevents.push(g);};u.callBack=if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_131"});}}
}};utag.o[loader].loader.LOAD(id);}("131","politico.main"));}catch(error){utag.DB(error);}
