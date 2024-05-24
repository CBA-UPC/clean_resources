// Tracking Filesal tag - utag.119 ut4.0.202401081357, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasOwn=u.isEmptyObject=u.toBoolean=u.hasgtagjs=u.scriptrequested=u.hasgtagjs();u.o=window[window.gtagRename];u.map_func=u.map={"dcm_advertiser_id":"advertiser_id","dcm_activity_group":"activity_group","dcm_activity":"activity","dcm_counting_method":"counting_method","cp.aam_aud":"custom.u33","cp.aam_aud2":"custom.u34","cp.utag_tt_mktid_gclid":"custom.u35","cp.utag_tt_mktid_dcm_id":"custom.u36","cp.utag_tt_mktid_bing_id":"custom.u37","cp.utag_tt_mktid_fbp":"custom.u38","cp.utag_tt_mktid_fbc":"custom.u39","pseudonymID":"custom.u40","cp.ivid":"custom.u43","cp.utag_tt_mktid_vmcid":"custom.u44","is_prod":"custom.u57","dom.pathname":"custom.u85","cp.utag_tt_mktid_ecid":"custom.u94","cp.utag_tt_mktid_s_ecid":"custom.u95","_sm_119_19:conversion":"conversion","cp.utag_main_ses_id":"session_id"};u.extend=[function(a,b){try{if(1){var advertiser_id=[],activity_group=[],activity=[],counting_method=[];if(utag.cond["50"]===1){advertiser_id.push("DC-1984865");activity_group.push("ttcom362");activity.push("ttus_001");counting_method.push("unique");}
if(utag.cond["51"]===1){advertiser_id.push("DC-1984865");activity_group.push("ttcom362");activity.push("ttus_002");counting_method.push("unique");}
b["dcm_advertiser_id"]=advertiser_id.join(",");b["dcm_activity_group"]=activity_group.join(",");b["dcm_activity"]=activity.join(",");b["dcm_counting_method"]=counting_method.join(",");}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:119");utag.DB(b);var c,d,e,f,h,i,j,k,_event,p,key;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js","advertiser_id":"DC-1984865","activity_group":"","activity":"","counting_method":"","fire_purchase":"false","custom_scripts":"false","data_layer_name":"","session_id":"","product_id":[],"product_quantity":[],"product_unit_price":[],"dc_custom_params":{},"event_name":"","event":[],"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:119:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:119:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"&&u.data.advertiser_id!==""){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(u.data.gtag_enable_tcf_support){window["gtag_enable_tcf_support"]=u.toBoolean(u.data.gtag_enable_tcf_support);}
u.o("set",{"developer_id.dYmQxMT":true});for(i=0;i<u.data.advertiser_id.length;i++){if(!/^[a-zA-Z]{2}-/.test(u.data.advertiser_id[i])){u.data.advertiser_id[i]="DC-"+u.data.advertiser_id[i];}}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);if(u.data.data_layer_name){u.data.base_url=u.data.base_url+"&l="+u.data.data_layer_name;}
for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="purchase"){p=true;}}
if(!p&&u.toBoolean(u.data.fire_purchase)){u.data.event.push("purchase");if(u.data.counting_method[0]===""){u.data.counting_method[0]="transactions";}}}
var total_qty=0;if(typeof(u.data.product_quantity)==="number"){total_qty=u.data.product_quantity;}else if(u.data.product_quantity.length===1){total_qty=u.data.product_quantity[0];}else if(u.data.product_quantity.length>1){for(i=0;i<u.data.product_quantity.length;i++){total_qty+=parseInt(u.data.product_quantity[i],10);}}else{total_qty=1;}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];for(j=0;j<u.data.advertiser_id.length;j++){var eventIdData={};if(u.data.custom_scripts==="true"||u.data.custom_scripts){eventIdData.allow_custom_scripts=true;}else if(u.data.custom_scripts==="false"||!u.data.custom_scripts){eventIdData.allow_custom_scripts=false;}
if(u.data.session_id.length===1&&u.data.session_id[0]!==""){eventIdData.session_id=u.data.session_id[0];}else if(u.data.session_id[j]!==""){eventIdData.session_id=u.data.session_id[j];}
if(u.data.order_total){eventIdData.value=u.data.order_total;eventIdData.transaction_id=u.data.order_id;}
if(u.data.product_quantity){eventIdData.quantity=total_qty;}
eventIdData.items=[];for(k=0;k<u.data.product_id.length;k++){if(typeof(u.data.product_unit_price[k])==="undefined"||typeof(u.data.product_quantity[k])==="undefined"){utag.DB("No matching unit price or quantity for product ID "+u.data.product_id[k]);}else{eventIdData.items.push({"id":u.data.product_id[k],"price":u.data.product_unit_price[k],"quantity":u.data.product_quantity[k]});}}
for(key in u.data.custom){eventIdData[key]=u.data.custom[key];}
if(!u.isEmptyObject(u.data.dc_custom_params)){eventIdData.dc_custom_params={};for(key in u.data.dc_custom_params){eventIdData.dc_custom_params[key]=u.data.dc_custom_params[key];}}
if(u.data.counting_method[j]&&u.data.counting_method[j]!==u.data.counting_method[j].toLowerCase()){u.data.counting_method[j]=u.data.counting_method[j].toLowerCase();utag.DB("Counting Method not supplied in proper case - converted to lower case");}
eventIdData.send_to=u.data.advertiser_id[j]+
"/"+(u.data.activity_group[j]||u.data.activity_group[0])+
"/"+(u.data.activity[j]||u.data.activity[0])+
"+"+(u.data.counting_method[j]||u.data.counting_method[0]);if(_event==="purchase"){u.o("event","purchase",eventIdData);}
if(_event==="conversion"){u.o("event","conversion",eventIdData);}}}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_119","attrs":{}});}
utag.DB("send:119:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("119","intuit.cg-turbotax"));}catch(error){utag.DB(error);}
