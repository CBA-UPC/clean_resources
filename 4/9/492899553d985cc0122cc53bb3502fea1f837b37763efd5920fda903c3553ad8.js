<!doctype html><html lang="en"><head><title>HTTP Status 405 – Method Not Allowed</title><style type="text/css">body {font-family:Tahoma,Arial,sans-serif;} h1, h2, h3, b {color:white;background-color:#525D76;} h1 {font-size:22px;} h2 {font-size:16px;} h3 {font-size:14px;} p {font-size:12px;} a {color:black;} .line {height:1px;background-color:#525D76;border:none;}</style></head><body><h1>HTTP Status 405 – Method Not Allowed</h1></body></html>m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(utag.ut.gtagScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
window.dataLayer=window.dataLayer||[];if(typeof window[window.gtagRename]!=="function"){window[window.gtagRename]=function(){dataLayer.push(arguments);};window[window.gtagRename]("js",new Date());}
return false;};u.scriptrequested=u.hasgtagjs();u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.map={"dcfl_advertiser_id":"advertiser_id","dcfl_activity_group":"activity_group","dcfl_activity":"activity","dcfl_counting_method":"counting_method","dcfl_event:conversion":"conversion","guid":"dc_custom_params.u","lob.domain":"custom.u1","qp.destination":"custom.u2","numberOfRooms":"custom.u6","u7":"custom.u7","hotelName":"custom.u9","hotelId":"custom.u13","currencyCode":"custom.u16","pricePerPerson":"custom.u14","lengthOfStay":"custom.u5","entity.checkout.hotel.bedTypeName":"custom.u17","pickUpandDropOffDate":"custom.u4","checkout.trl":"custom.u19","offeredAmenities":"custom.u12","random":"order_id","tuid":"custom.u25","rlt_channel_subchannel":"custom.u22","lt_channel_subchannel":"custom.u23","context.user.expUserProfileId":"custom.u24","originAirportCode":"custom.u3","carrierCodes":"custom.u10","cabinClass":"custom.u11","flightTripType":"custom.u20","carDropOffLocationCode":"custom.u2","destinationAirportCode":"custom.u2","carPickUpLocationCode":"custom.u3","carVendor":"custom.u10","starRating":"custom.u11","carTypeName":"custom.u11","searchedAmenities":"custom.u12","packageType":"custom.u20","quantityField":"product_quantity","pricePerDay":"custom.u14"};u.extend=[function(a,b){try{if(1){if(b['siteId']&&(utag.isHSR()||utag.isPSR()||utag.isCarSR()||utag.isPCarSearch()||utag.isFSR()||b["isPackageFlightSearchResult"]||isCruise())){if(b.siteId==28){b['dcfl_advertiser_id']="DC-2589209";b['dcfl_activity_group']="apacj240";b['dcfl_activity']="apacj913";b['dcfl_counting_method']="standard";b['dc_order_id']=b['random'];b['dcfl_event']="conversion";}else{switch(b['siteId']){case 1:b['dcfl_advertiser_id']="DC-2588783";b['dcfl_activity_group']="nausc547";b['dcfl_activity']="nauss482";break;case 3:b['dcfl_advertiser_id']="DC-2588791";b['dcfl_activity_group']="emeau111";b['dcfl_activity']="emeau344";break;case 4:b['dcfl_advertiser_id']="DC-2588785";b['dcfl_activity_group']="nacan212";b['dcfl_activity']="nacan723";break;case 6:b['dcfl_advertiser_id']="DC-2589196";b['dcfl_activity_group']="emeag857";b['dcfl_activity']="emeag550";break;case 8:b['dcfl_advertiser_id']="DC-2589197";b['dcfl_activity_group']="emeai699";b['dcfl_activity']="emeai762";break;case 9:b['dcfl_advertiser_id']="DC-2589198";b['dcfl_activity_group']="emeas940";b['dcfl_activity']="emeas052";break;case 11:b['dcfl_advertiser_id']="DC-2589205";b['dcfl_activity_group']="emean493";b['dcfl_activity']="emean225";break;case 12:b['dcfl_advertiser_id']="DC-2589193";b['dcfl_activity_group']="namex113";b['dcfl_activity']="namex297";break;case 14:b['dcfl_advertiser_id']="DC-2945316";b['dcfl_activity_group']="apacs971";b['dcfl_activity']="apacs024";break;case 15:b['dcfl_advertiser_id']="DC-2997500";b['dcfl_activity_group']="apacm103";b['dcfl_activity']="apaca760";break;case 16:b['dcfl_advertiser_id']="DC-2997587";b['dcfl_activity_group']="apack568";b['dcfl_activity']="apack718";break;case 17:b['dcfl_advertiser_id']="DC-2997550";b['dcfl_activity_group']="apact438";b['dcfl_activity']="apact852";break;case 18:b['dcfl_advertiser_id']="DC-3012675";b['dcfl_activity_group']="apach256";b['dcfl_activity']="apach208";break;case 20:b['dcfl_advertiser_id']="DC-2589195";b['dcfl_activity_group']="emeaf419";b['dcfl_activity']="emeaf041";break;case 25:b['dcfl_advertiser_id']="DC-2589206";b['dcfl_activity_group']="apaca499";b['dcfl_activity']="apaca630";break;case 27:b['dcfl_advertiser_id']="DC-2589208";b['dcfl_activity_group']="apaci060";b['dcfl_activity']="apaci890";break;case 29:b['dcfl_advertiser_id']="DC-2589207";b['dcfl_activity_group']="apacn043";b['dcfl_activity']="apacn193";break;case 61:b['dcfl_advertiser_id']="DC-3193419";b['dcfl_activity_group']="apaci419";b['dcfl_activity']="apaci684";break;case 62:b['dcfl_advertiser_id']="DC-2997604";b['dcfl_activity_group']="apact361";b['dcfl_activity']="apact160";break;case 63:b['dcfl_advertiser_id']="DC-2589199";b['dcfl_activity_group']="emeai191";b['dcfl_activity']="emeai326";break;case 64:b['dcfl_advertiser_id']="DC-2589204";b['dcfl_activity_group']="emeab264";b['dcfl_activity']="emeab179";break;case 65:b['dcfl_advertiser_id']="DC-2589201";b['dcfl_activity_group']="emeas325";b['dcfl_activity']="emeas352";break;case 66:b['dcfl_advertiser_id']="DC-2589200";b['dcfl_activity_group']="emean433";b['dcfl_activity']="emean510";break;case 67:b['dcfl_advertiser_id']="DC-2589202";b['dcfl_activity_group']="emead466";b['dcfl_activity']="emead765";break;case 68:b['dcfl_advertiser_id']="DC-2997741";b['dcfl_activity_group']="apacp656";b['dcfl_activity']="apacp852";break;case 69:b['dcfl_advertiser_id']="DC-3224677";b['dcfl_activity_group']="latam050";b['dcfl_activity']="latam484";break;case 70:b['dcfl_advertiser_id']="DC-3291249";b['dcfl_activity_group']="latam881";b['dcfl_activity']="latam754";break;case 71:b['dcfl_advertiser_id']="DC-3291279";b['dcfl_activity_group']="apacv307";b['dcfl_activity']="apacv195";break;case 72:b['dcfl_advertiser_id']="DC-3847545";b['dcfl_activity_group']="emeac614";b['dcfl_activity']="emeac393";break;case 73:b['dcfl_advertiser_id']="DC-3847494";b['dcfl_activity_group']="emeaf270";b['dcfl_activity']="emeaf318";break;case 74:b['dcfl_advertiser_id']="DC-2588791";b['dcfl_activity_group']="emeau111";b['dcfl_activity']="emeau344";break;case 75:b['dcfl_advertiser_id']="DC-3012675";b['dcfl_activity_group']="apach256";b['dcfl_activity']="apach208";break;case 1146:b['dcfl_advertiser_id']="DC-3645995";b['dcfl_activity_group']="nausa900";b['dcfl_activity']="nausa136";break;case 1255:b['dcfl_advertiser_id']="DC-3899497";b['dcfl_activity_group']="airas701";b['dcfl_activity']="AirAs0";break;case 1256:b['dcfl_advertiser_id']="DC-3899600";b['dcfl_activity_group']="airas348";b['dcfl_activity']="AirAs001";break;case 1257:b['dcfl_advertiser_id']="DC-3899565";b['dcfl_activity_group']="airas723";b['dcfl_activity']="AirAs001";break;case 2000:b['dcfl_advertiser_id']="DC-3899617";b['dcfl_activity_group']="airas972";b['dcfl_activity']="AirAs001";break;case 2001:b['dcfl_advertiser_id']="DC-3899597";b['dcfl_activity_group']="airas809";b['dcfl_activity']="AirAs001";break;case 2002:b['dcfl_advertiser_id']="DC-3899621";b['dcfl_activity_group']="airas649";b['dcfl_activity']="AirAs001";break;case 2004:b['dcfl_advertiser_id']="DC-3901108";b['dcfl_activity_group']="airas756";b['dcfl_activity']="airas001";break;case 70201:b['dcfl_advertiser_id']="DC-5179340";b['dcfl_activity_group']="nauso00";b['dcfl_activity']="orb04";break;case 70301:b['dcfl_advertiser_id']="DC-5192003";b['dcfl_activity_group']="nausc0";b['dcfl_activity']="ctix02";break;case 80001:b['dcfl_advertiser_id']="DC-5439637";b['dcfl_activity_group']="natra00";b['dcfl_activity']="natra000";break;case 3140309:b['dcfl_advertiser_id']="DC-2589201";b['dcfl_activity_group']="emeas325";b['dcfl_activity']="emeas352";break;case 3920336:b['dcfl_advertiser_id']="DC-2589202";b['dcfl_activity_group']="emead466";b['dcfl_activity']="emead765";break;case 7110307:b['dcfl_advertiser_id']="DC-2589199";b['dcfl_activity_group']="emeai191";b['dcfl_activity']="emeai326";break;case 10122006:b['dcfl_advertiser_id']="DC-2589203";b['dcfl_activity_group']="emeaa616";b['dcfl_activity']="emeaa059";break;case 70125:b['dcfl_advertiser_id']="DC-4598511";b['dcfl_activity_group']="apaca0";b['dcfl_activity']="apaca00";break;case 70129:b['dcfl_advertiser_id']="DC-4600929";b['dcfl_activity_group']="apacn00";b['dcfl_activity']="apacn00";break;default:break;}
b['dcfl_counting_method']="standard";b['dc_order_id']=b['random'];b['dcfl_event']="conversion";}
if(b['siteId']&&(utag.isHSR()||utag.isPSR()||utag.isCarSR()||utag.isPCarSearch()||utag.isLXS())){switch(b['siteId']){case 70150:b['dcfl_advertiser_id']="DC-4693435";b['dcfl_activity_group']="apaca00";b['dcfl_activity']="apaca001";break;case 70151:b['dcfl_advertiser_id']="DC-4692458";b['dcfl_activity_group']="apacn00";b['dcfl_activity']="apacn001";break;case 80004:b['dcfl_advertiser_id']="DC-4259444";b['dcfl_activity_group']="Canad--";b['dcfl_activity']="Canad-";break;case 3270335:b['dcfl_advertiser_id']="DC-2589200";b['dcfl_activity_group']="emean433";b['dcfl_activity']="emean510";break;case 70403:b['dcfl_advertiser_id']="DC-5472717";b['dcfl_activity_group']="emeau00";b['dcfl_activity']="emeau001";break;case 70406:b['dcfl_advertiser_id']="DC-5484924";b['dcfl_activity_group']="emead00";b['dcfl_activity']="emead00";break;case 70420:b['dcfl_advertiser_id']="DC-5472721";b['dcfl_activity_group']="emeaf000";b['dcfl_activity']="emeaf000";break;case 70463:b['dcfl_advertiser_id']="DC-5488524";b['dcfl_activity_group']="emeai00";b['dcfl_activity']="emeai001";break;case 70472:b['dcfl_advertiser_id']="DC-5469129";b['dcfl_activity_group']="emeac00";b['dcfl_activity']="emeac001";break;case 70473:b['dcfl_advertiser_id']="DC-5470592";b['dcfl_activity_group']="emeaf00";b['dcfl_activity']="emeaf001";break;case 70465:b['dcfl_advertiser_id']="DC-5522838";b['dcfl_activity_group']="emeas00";b['dcfl_activity']="emeas001";break;}
b['dcfl_counting_method']="standard";b['dc_order_id']=b['random'];b['dcfl_event']="conversion";}
if(b['siteId']&&(utag.isFSR()||b["isPackageFlightSearchResult"])){switch(b['siteId']){case 60:b['dcfl_advertiser_id']="DC-2588783";b['dcfl_activity_group']="nausc547";b['dcfl_activity']="nauss482";break;case 101:b['dcfl_advertiser_id']="DC-2588783";b['dcfl_activity_group']="nausc547";b['dcfl_activity']="nauss482";break;case 1170:b['dcfl_advertiser_id']="DC-2588783";b['dcfl_activity_group']="nausc547";b['dcfl_activity']="nauss482";break;case 2023:b['dcfl_advertiser_id']="DC-3901108";b['dcfl_activity_group']="airas756";b['dcfl_activity']="airas001";break;case 80004:b['dcfl_advertiser_id']="DC-4259444";b['dcfl_activity_group']="Canad0";b['dcfl_activity']="Canad-";break;default:break;}
b['dcfl_counting_method']="standard";b['dc_order_id']=b['random'];b['dcfl_event']="conversion";}
if(b['siteId']&&utag.isLXS()){switch(b['siteId']){case 80001:b['dcfl_advertiser_id']="DC-5439637";b['dcfl_activity_group']="natra00";b['dcfl_activity']="natra000";b['dcfl_counting_method']="standard";b['dc_order_id']=b['random'];b['dcfl_event']="conversion";break;}}}
function isCruise(){if(utag.isCruiseSR()&&(b['siteId']==1||b['siteId']==4||b['siteId']==25)){return true;}
return false;}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:188");utag.DB(b);var d,e,f,h,i,j,_event,p,key;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js","advertiser_id":"","activity_group":"","activity":"","counting_method":"","custom_scripts":"true","session_id":"","product_quantity":[],"dc_custom_params":{},"event_name":"","event":[],"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:188:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:188:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
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
}}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_188","attrs":{}});}
utag.DB("send:188:COMPLETE");}
if(u.data.advertiser_id!=''){omg.pixel.fireTagPixel({id:id,name:'dcfl_Hotel_Flight_Car_Package_SearchResults',label:'dcflHotelFlightCarPackageSearchResults',context:{u:u,b:b}});}
};utag.o[loader].loader.LOAD(id);}("188","hotwire.whitelabel"));}catch(error){utag.DB(error);}
