//tealium universal tag - utag.166 ut4.0.201809191812, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=}else{u.typeOf=utag.ut.typeOf;}
if(utag.ut.merge===undefined){u.merge=}else{u.merge=utag.ut.merge;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.event_lookup={"ViewContent":{obj:"vc","map":["value","currency","content_name","content_ids","content_category"]},"Search":{obj:"search","map":["value","currency","content_category","content_ids"]},"AddToCart":{obj:"cart","map":["value","currency","content_name","content_ids"]},"AddToWishlist":{obj:"wish","map":["value","currency","content_name","content_ids"]},"InitiateCheckout":{obj:"cout","map":["value","currency","content_name","content_ids","num_items"]},"AddPaymentInfo":{obj:"payment","map":["value","currency","content_category","content_ids"]},"Purchase":{obj:"purch","map":["value","currency","content_name","content_ids","num_items"]},"Lead":{obj:"lead","map":["value","currency","content_name","content_category"]},"CompleteRegistration":{obj:"reg","map":["value","currency","content_name"]},"Conversion":{obj:"cnv","map":["value","currency"]},"Custom":{obj:"cust","map":[]},"PageView":{obj:"page","map":[]}};u.std_params={"value":"currency":"content_name":function(g){if(!g.content_name){g.content_name=u.data.ecom.product_name;}
g.content_name=u.val(g.content_name);},"content_ids":"content_category":"num_items":;u.map_func=u.val=u.remove_empty=u.calc_items=u.hasOwn=u.isEmptyObject=u.process_AM_data=u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g,h,evt=[];u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://connect.facebook.net/en_US/fbevents.js","cust_pixel":"291945841263821","conv_pixel":"","page_view":"true","calc_items":"true","default_event":"None","adv_match":"false","custom_data":{},"custom_event":"","product_id":[],"product_name":[],"product_category":[],"product_unit_price":[],"product_quantity":[],"evt_list":[],"ecom":{}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){evt=evt.concat(u.map[d].split(","));}}}}
if(u.data.evt_list&&u.typeOf(u.data.evt_list)!=="array"){u.data.evt_list=u.data.evt_list.split(/\s*,\s*/);}
if(u.data.default_event!=="None"&&u.data.default_event!==""){u.data.evt_list.push(u.data.default_event);}
u.data.evt_list=u.data.evt_list.concat(evt);g=u.data.ecom;g.order_id=u.data.order_id||b._corder||"";g.order_subtotal=u.data.order_subtotal||b._csubtotal||"";g.order_currency=u.data.order_currency||b._ccurrency||"";if(u.data.product_name.length===0&&b._cprodname!==undefined){g.product_name=b._cprodname.slice(0);}else{g.product_name=u.data.product_name;}
if(u.data.product_id.length===0&&b._cprod!==undefined){g.product_id=b._cprod.slice(0);}else{g.product_id=u.data.product_id;}
if(u.data.product_category.length===0&&b._ccat!==undefined){g.product_category=b._ccat.slice(0);}else{g.product_category=u.data.product_category;}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){g.product_unit_price=b._cprice.slice(0);}else{g.product_unit_price=u.data.product_unit_price;}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){g.product_quantity=b._cquan.slice(0);}else{g.product_quantity=u.data.product_quantity;}
u.loader_cb=function(){var g={},i,j,_event,_track="track",p;if(u.data.evt_list.toString().indexOf("Purchase")===-1&&u.data.ecom.order_id){u.data.evt_list.push("Purchase");}
if(u.data.ecom.order_id){for(i=0;i<u.data.evt_list.length;i++){if(u.data.evt_list[i]==="Purchase"){p=true;}}
if(!p){u.data.evt_list.push("Purchase");}}
for(i=0;i<u.data.evt_list.length;i++){_event=u.data.evt_list[i];f=u.event_lookup[_event];c=f?f.map:[];f=f?f.obj:_event;g=u.data[f]=u.data[f]||{};for(j=0;j<c.length;j++){u.std_params[c[j]](g,_event);}
if(_event==="ViewContent"||_event==="AddToCart"){}else if(_event==="Lead"){if(!g.content_category){g.content_category='Quote';}}else if(_event==="Search"){if(!g.content_category){g.content_category='Product Search';}}else if(_event==="Conversion"&&u.data.conv_pixel){_event=u.data.conv_pixel;}else if(_event&&!u.event_lookup[_event]){_track="trackCustom";g=u.data[_event];}
if(g.value!==undefined){if(u.typeOf(g.value)==="array"){for(j=0;j<g.value.length;j++){g.value[j]=parseFloat(g.value[j])||0.00;}}else{g.value=parseFloat(g.value)||0.00;}}
if(_event){fbq(_track,_event,u.remove_empty(g));}}};u.callBack=if(u.initialized){u.loader_cb();}else{u.queue.push({"data":u.data});if(!u.scriptrequested){u.scriptrequested=true;u.loader_config={"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_166"};!window,document,this,u.loader_config);if(u.data.cust_pixel){u.data.cust_pixel=u.data.cust_pixel.split(/\s*,\s*/);for(var i=0;i<u.data.cust_pixel.length;i++){u.data.cust_pixel[i]=u.data.cust_pixel[i].replace(/^\s*/,"").replace(/\s*$/,"");var amObj;if(u.data.adv_match===true||u.data.adv_match==="true"){amObj=u.process_AM_data(u.remove_empty(u.data.am));}
fbq('init',u.data.cust_pixel[i],amObj);}
if(u.data.page_view==="true"){fbq('track','PageView',u.data.page);}}}}
}};utag.o[loader].loader.LOAD(id);}("166","fox.delta"));}catch(error){utag.DB(error);}