//tealium universal tag - utag.2 ut4.0.202401181234, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var ns_=ns_||{};var ns_p=ns_p||{};ns_=window.ns_||{},ns_.batch=ns_.order_sent=ns_.order_sent||{}
/*@cc_on@if(@_jscript_version<5.6)ns_={Form:function(){}};ns_.Form.onFailure=function(){};ns_.Form.prototype.onFailure=function(){};@else@*/
if(typeof(ns_)=="undefined"){ns_=new Object()}ns_.extend=ns_.encode=self.encodeURIComponent?self.encodeURIComponent:ns_.b={};ns_.b.ie=/*@cc_on!@*/
false;ns_.b.ie9=ns_.b.ie&&document.addEventListener;ns_.b.sf=navigator.vendor?/apple/i.test(navigator.vendor):false;ns_.b.ch=window.chrome?true:false;ns_.b.ff=/firefox/i.test(navigator.userAgent);ns_.b.op=window.opera?true:false;if(typeof(ns_)=="undefined"){ns_=new Object()}ns_.dt={initDate:new Date().getTime(),lastRun:new Date().getTime(),delta:0,intervalID:null,intervalTime:1000,intervalRuns:0,timedObserver:getTime:;ns_.dt.timedObserver();ns_.extend(Function.prototype,(());ns_.Class={extend:inherit:;if(typeof(ns_.ar)=="undefined"){ns_.ar={push:splice:shift:}ns_.ar.create=ns_.ar.indexOf=ns_.ar.merge=ns_.ar.pair=ns_.ar.each=ns_.st={camel:;if(typeof(ns_.dom)=="undefined"){ns_.dom={cache:{},getElementsByTagName:addEvent:(document.addEventListener)?(:(document.attachEvent)?(:(,removeEvent:}ns_.dom.cache={_events:ns_.ar.create(),add:del:detach:flush:;ns_.dom.addEvent(window,"unload",ns_.dom.cache.flush.STbind(ns_.dom.cache));ns_.Error={};ns_.Class.extend((());ns_.Lifecycle=ns_.Class.extend(function(){},{log:ns_.Error.error,current:null,states:null,params:null,initialize:property:doChecks:creation:transition:);ns_.Form=ns_.Class.extend(function(){},{VERSION:"2.1204.27",conf:{DEBUG:false,TIMER_DELAY:500,LABEL_NS:"ns_fo_",INIT_TIMER:30000,SUBMIT_TIMER:1000,FAILURE_TIMER:1000,pixelUrl:"",labels:{}},init:null,start:null,id:null,tag:null,fields:null,settings:null,lastField:null,validations:null,lastValidated:null,lastValidation:null,sequence:null,state:null,wasSubmitted:null,watcher:null,fix:null,fail:null,button:null,pixelUrl:initialize:parseFields:watch:unwatch:defaults:shallTransmit:form:element:field:fetchID:registerField:values:onUnload:countDown:onFailure:style:isVisible:beat:);ns_.Form.SUBMIT="submit";ns_.Form.ABANDON="submitabandon";ns_.Form.FAILURE="submitvalfail";ns_.Form.start=typeof(ns_loadingtime1)!="undefined"?ns_loadingtime1:ns_.dt.getTime();ns_.Form.rx={TypeLb:/type/i,AllForms:/\*/,FormElm:/^(input|select|textarea|a|button)$/i,InputElm:/^(input|select|textarea)$/i,InputElmTy:/[^(submit|reset|button)]/i,Input:/^input$/i,Hidden:/^inputhidden$/i,Password:/^inputpassword$/i,Radio:/^inputradio$/i,Checkbox:/^inputcheckbox$/i,TextArea:/^textarea$/i,SelectBox:/^select$/i,Failure:/^submitvalfail$/i,TLDrx:/^(https?\:)?(\/\/)?[^\/\?]+[\/\?]/i};ns_.Form.store=ns_.ar.create();ns_.Form.cache=ns_.ar.create();ns_.Form.loaded=false;ns_.Form.get=ns_.Form.beat=if(ns_.b.ff||ns_.b.sf){ns_.dom.addEvent(document,"DOMSubtreeModified",}ns_.dom.addEvent(document,"mousedown",ns_.Form.beat);ns_.Form.onFailure=ns_.Form.onLoad=ns_.Form.onUnload=ns_.dom.addEvent(window,"beforeunload",ns_.Form.onUnload);ns_.dom.addEvent(window,"load",ns_.Form.onLoad);ns_.dom.addEvent(window,"unload",ns_.Form.onUnload);ns_.Form.wfocus=true;ns_.dom.addEvent(window,ns_.ie?"focusout":"blur",function(a){ns_.Form.wfocus=false;ns_.ar.each(ns_.Form.store,function(b){b.unwatch()})});ns_.dom.addEvent(window,ns_.ie?"focusin":"focus",;ns_.Form.sitestat=ns_.Form.Element=ns_.Class.extend(function(){},{form:null,id:null,tag:null,settings:null,cache:null,throttle:null,skipKeys:ns_.ar.create(),initialize:setup:fetchID:value:getType:onUserAction:onDispatch:);ns_.Form.Element.NORMAL="f";ns_.Form.Element.PASSWD="p";ns_.Form.Element.HIDDEN="h";ns_.Form.Measurement=ns_.Class.extend({form:null,type:ns_.Form.SUBMIT,labels:null,initialize:setType:resetLabels:setLabels:dispatch:);/*@end @*/
if("false"==="true"){ns_=ns_||{};ns_.StreamSense=ns_.StreamSense||);}
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;u.ev={'view':1};u.map={};u.extend=[function(a,b){try{if(1){if(a&&a==="view"){if(b.page_type&&b.page_type.toLowerCase()==="image"){return false;}}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var d,e,f,g;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"http"+(document.location.href.charAt(4)==="s"?"s://sb":"://b")+".scorecardresearch.com/c2/##utag_account##/cs.js","c1":"2","c2":"6035523","form":"","form_settings":{},"form_normal":[],"form_hidden":[],"form_submit":true,"form_abandon":false,"form_failure":false,"form_preferences":{},"ns_type":"hidden","order_id":"","order_shipping":"","customer_id":"","product_id":[],"product_brand":[],"product_category":[],"product_subcategory":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};g=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){g.push(e[f]+u.data.kvp_delim+encodeURIComponent(b[d]));}
u.data[e[f]]=b[d];}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_subcategory.length===0&&b._ccat2!==undefined){u.data.product_subcategory=b._ccat2.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
g.push(["c1",u.data.c1].join(u.data.kvp_delim));g.push(["c2",u.data.c2].join(u.data.kvp_delim));if(a==="link"){g.push(["ns_type",u.data.ns_type].join(u.data.kvp_delim));}
udm_("http"+(document.location.href.charAt(4)==="s"?"s://sb":"://b")+".scorecardresearch.com/b?"+g.join(u.data.qsp_delim));if(u.data.order_id!==undefined&&u.data.order_id!==""){var counterURL="http"+(document.location.href.charAt(4)==="s"?"s://sb":"://b")+".scorecardresearch.com/b?";u.order=new ns_order(counterURL,((u.data.customer_id)?u.data.customer_id:u.data.order_id),u.data.order_id);for(f=0;f<u.data.product_id.length;f++){u.order.addLine(u.data.product_id[f],u.data.product_brand[f],u.data.product_category[f],u.data.product_subcategory[f],parseInt(u.data.product_quantity[f]),parseFloat(u.data.product_unit_price[f]));}
if(u.data.order_shipping){u.order.addLine("shipping","none","shipping_handling","none",1,parseFloat(u.data.order_shipping));}
u.order.sendOrder();}
if(u.data.form){u.data.form_preferences={submit:(u.data.form_submit==="true"||u.data.form_submit===true),abandon:(u.data.form_abandon==="true"||u.data.form_abandon===true),failure:(u.data.form_failure==="true"||u.data.form_failure===true)};if(u.data.form_normal.length){for(f=0;f<u.data.form_normal.length;f++){u.data.form_settings[u.data.form_normal[f]]=u.data.form_preferences;}}else{u.data.form_settings["*"]=u.data.form_preferences;}
for(f=0;f<u.data.form_hidden.length;f++){u.data.form_settings[u.data.form_hidden[f]]={hidden:u.data.form_preferences};}
new ns_.Form(u.data.form,u.data.form_settings);}
(();}};utag.o[loader].loader.LOAD(id);}('2','newsinternational.thesun.com.web.2019'));}catch(error){utag.DB(error);}