;if(location.href.search('flix-logqa')!=-1)
window.logqa=else
window.logqa=window.flixtrackloading=1
if(typeof flixtracking=='undefined'){var flixtracking={tracking:true,trackingcc:0,startModularcc:0,flixconsent:null,site_url:'https://media.flixcar.com/delivery/',trackingDomain:'https://media.flixcar.com/',trackingDomainBeat:'https://rt.flix360.com/beat/',globalTrackingInit:false,noTracking:false,inpageloaded:false,minisitebuttonloaded:false,minisiteloaded:false,hotspotloaded:false,hotspotmobloaded:false,micrositeloaded:false,checkLoaderloaded:false,adjacencyloaded:false,adjacencyhotspotloaded:false,app3ploaded:false,inpageArImpression:false,hsArImpression:false,minisiteCount:0,distributorIdsDE:[171,877,492,12498,546,4904],traffic:[],replacedModulesOutputInpage:[],replacedModulesOutputHs:[],replacedModulesOutputMinisite:[],storeInpageCountdata:0,init:function(){logqa('init flixtracking');flixtracking.setGvid();flixtracking.cookieConsent.initConsent();if(typeof flixJsCallbacks!='undefined'&&typeof flixJsCallbacks.starttime=='undefined')
flixJsCallbacks.starttime=Date.now();flixtracking.startModular();},checkServices:function(opts){logqa('in checkServices');var recheck=false;if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.logging=='undefined'){FlixjQ.fn.logging=
if(typeof FlixjQ=='undefined'){setTimeout(100)}},products:{inpage:function(data){logqa('in inpage log');var opts=JSON.parse(JSON.stringify(data));opts.type='inpage';if(typeof FlixServices.modular_match_data!='undefined'&&((FlixServices.modular_match_data[1]&&FlixServices.modular_match_data[1].product_meta.product_id==opts.product_id&&typeof FlixServices.modular_match_data[1].settings!='undefined'&&typeof FlixServices.modular_match_data[1].settings.adjacent_codes!='undefined'&&flixtracking.adjacencyloaded==false)||(!FlixServices.modular_match_data[1]&&FlixServices.modular_match_data[0].product_meta.product_id==opts.product_id&&typeof FlixServices.modular_match_data[0].settings!='undefined'&&typeof FlixServices.modular_match_data[0].settings.adjacent_codes!='undefined'&&flixtracking.adjacencyloaded==false))&&(opts.event_type&&opts.event_type=='page')){flixtracking.adjacencyloaded=true
flixtracking.products.adjacency(opts);}
flixtracking.inpageloaded=true;flixtracking.log(opts);var targetcontainer='#inpage_container';if(opts.flixcontainer)
targetcontainer=opts.flixcontainer;targetcontainer='[data-flx-p="'+opts.product_id+'"]'
flixtracking.delegate('click',targetcontainer+' a',function(event){logqa('clickety -'+targetcontainer+" a")
const closestElement=FlixjQ(event.target).closest('[data-module]');var moduleValue='',indexedModuleValue='';if(closestElement.length){moduleValue=closestElement.attr('data-module');const similarModules=closestElement.closest('[id^="flixinpage_"]').find('[data-module]');const index=similarModules.index(closestElement);indexedModuleValue=moduleValue+'-'+(index+1);}
if(!this.hasAttribute('data-flix-media')){var href=this.getAttribute('href');opts.type='inpage';if(href.search('</')!=-1&&href.search('//')==-1){value=href.replace(/<[^>]*>?/gm,'');}else{var temp=href.split("?");href=temp[0];var filename=href.split("/");var filename_real=filename[filename.length-1];value=filename_real;}
logqa('a click-'+targetcontainer,value);if(value=='#'){if(this.className&&this.className.search('next')!=-1)
value='Next'
if(this.className&&this.className.search('prev')!=-1)
value='Prev'}
flixtracking.logMedia(opts,value,indexedModuleValue);}});flixtracking.delegate('click','#flixinpage-lightbox a, .inpage_cap_next_photo, .inpage_cap_prev_photo',function(event){const closestElement=FlixjQ(event.target).closest('[data-module]').attr('data-modpos');if(!this.hasAttribute('data-flix-media')){var href=this.getAttribute('href')||'';var opts=FlixjQ.fn.inPage.data
opts.type='inpage';var temp=href.split("?");href=temp[0];var filename=href.split("/");var filename_real=filename[filename.length-1];var value=filename_real;if(value.length==0)
value=this.innerText;logqa('media',value);flixtracking.logMedia(opts,value,closestElement);}});flixtracking.delegate('click',targetcontainer+' *[data-media]',function(event){value=this.dataset.media;value=this.dataset.page;opts.type='inpage';logqa('media',value);});flixtracking.delegate('click',targetcontainer+' *[data-page]',function(event){value=this.dataset.page;opts.type='inpage';logqa('page',value);flixtracking.logPage(opts,value);});flixtracking.logTime(opts,0);if(!flixtracking.inpageArImpression){if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.view3dfm!='undefined'&&FlixServices.modular_match_data[0].modules.view3dfm!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!=""){opts.type='3dfw';opts.event_type='ar_inpage_impression';opts.event_detail='';flixtracking.log(opts,status);}
if(((typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].settings!='undefined'&&typeof FlixServices.modular_match_data[0].settings.distributor_settings!='undefined'&&FlixServices.modular_match_data[0].settings.distributor_settings.qr_only!=1)||(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].settings!='undefined'&&typeof FlixServices.modular_match_data[0].settings.distributor_settings!='undefined'&&FlixServices.modular_match_data[0].settings.distributor_settings.desktop_webar!=1)||(typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data!=null&&FlixServices.modular_hotspot_data.product_webar==null&&typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data!=null&&FlixServices.modular_hotspot_data.desktop_webar==null)||(typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data==null))&&typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.view3dfm!='undefined'&&FlixServices.modular_match_data[0].modules.view3dfm!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!=""){opts.type='3dfw';opts.event_type='ar_impression';opts.event_detail='3dfw';flixtracking.log(opts,status);}
flixtracking.inpageArImpression=true;}},minisitebutton:function(_FFMatcher,p_id){logqa('in minisitebutton log');flixtracking.minisitebuttonloaded=true;var d=new Date(),h='';var opts={};opts.type='minisite';opts['mpn']=_FFMatcher._FFmpn;opts['ean']=_FFMatcher._FFean;opts['language']=_FFMatcher._FFlang;opts['distributor']=_FFMatcher._FFd;opts['product_id']=p_id||_FFMatcher._FFPid;opts['ut']=d.getTime();opts['to']=d.getTimezoneOffset();opts['ss']=screen.width+'x'+screen.height;opts.event_type='matchhit';flixtracking.log(opts);},minisite:function(data){logqa('in minisite log');var opts=JSON.parse(JSON.stringify(data));opts.event_type="asset";opts.asset=1;opts.type='minisite';flixtracking.log(opts);opts.event_type="click";flixtracking.log(opts);if(flixtracking.minisiteloaded==false){flixtracking.logTimeMinisite(opts,0);setTimeout(3000);flixtracking.minisiteloaded=true;flixtracking.delegate('click','*[data-m-typeid]',function(event){value=this.getAttribute('data-m-typeid');opts.event_type="asset";opts.asset=value;opts.event_detail='';opts.vtime=0;opts.view_time=0;opts.type='minisite';logqa('media',value);flixtracking.log(opts,'');});flixtracking.delegate('click','a:not(*[data-m-typeid], *[ data-flix-media])',function(event){var href=this.getAttribute('href');var temp=href.split("?");href=temp[0];opts.type='minisite';var filename=href.split("/");var filename_real=filename[filename.length-1];const closestElement=FlixjQ(event.target).closest('[data-module]');var moduleValue='',indexedModuleValue='';if(closestElement.length){moduleValue=closestElement.attr('data-module');const similarModules=closestElement.closest('#minisite_tabs').find('[data-module]');const index=similarModules.index(closestElement);indexedModuleValue=moduleValue+'-'+(index+1);}
logqa('media',filename_real);flixtracking.logMedia(opts,filename_real,indexedModuleValue);});flixtracking.delegate('click','*[data-media]',function(event){value=this.dataset.media;value=this.dataset.page;opts.type='minisite';logqa('media',value);const closestModule=event.target.closest('[data-module]');moduleValue=closestModule?closestModule.getAttribute('data-module'):null;flixtracking.logMedia(opts,value,moduleValue);});flixtracking.delegate('click','*[data-page]',function(event){value=this.dataset.page;opts.type='minisite';logqa('page',value);flixtracking.logPage(opts,value);});}},hotspot:function(et,ed,status){logqa('in hotspot log--222'+et+"__"+ed+"__"+status);logqa(typeof FlixServices.flixhotspot);if(typeof FlixServices.flixhotspot!='undefined'){logqa('hot flixhotspot')
if(typeof FlixServices!='undefined'&&typeof FlixServices.flixhotspot!='undefined'){if(typeof flixhotspot=='undefined')
flixhotspot=FlixServices.flixhotspot
if(typeof flixhotspot.results=='undefined')
flixhotspot.results=FlixServices.flixhotspot.results;}
if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].product_meta!='undefined'&&typeof FlixServices.modular_match_data[0].product_meta.inpage!='undefined'&&FlixServices.modular_match_data[0].product_meta.inpage.disabled!='undefined'&&FlixServices.modular_match_data[0].product_meta.inpage.disabled!='0'){logqa(Object.values(FlixServices.modular_hotspot_data)[0].productId)
FlixServices.flixhotspot.data.product_id=Object.values(FlixServices.modular_hotspot_data)[0].productId;}
var opts=FlixServices.flixhotspot.data;if(opts.language!=FlixServices.modular_match_data[0].product_meta.language_iso)
opts.language=FlixServices.modular_match_data[0].product_meta.language_iso;if(window.flixJsCallbacks)
window.flixJsCallbacks.pageView=window.flixJsCallbacks.pageView||{log:false,beat:false};if(FlixServices.flixhotspot.data){logqa('hot data')
opts.type='interactive';if(!opts.product_id&&opts.p)
opts.product_id=opts.p
opts.edvalueT=opts.mpn||opts.ean||opts.product_id
if(et||ed){logqa('hot ed et')
opts.event_detail=ed;opts.event_type=et;if(ed=='hotspot_webar'||et=='webar_click'){opts.event_type='webar_click';opts.event_detail=''}else if(opts.event_type=='dwelltime'){logqa('dwelltime log')
opts.event_detail=ed;}else if(opts.event_type=='launch'){logqa('launch log')
opts.event_detail=ed;}
if(ed=='qr_loaded'||ed=='qr_close')
opts.event_detail=ed;flixtracking.log(opts,status);if(opts.event_type=='qr_impression'){if(!flixtracking.hsArImpression&&(typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data!=null&&FlixServices.modular_hotspot_data.product_webar!=null||typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data!=null&&FlixServices.modular_hotspot_data.desktop_webar!=null)&&FlixjQ('.ek-desktop').length&&typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].settings!='undefined'&&typeof FlixServices.modular_match_data[0].settings.distributor_settings!='undefined'&&FlixServices.modular_match_data[0].settings.distributor_settings.desktop_webar!=0){opts.type='3dfw';opts.event_type='ar_impression';opts.event_detail='qr';if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.view3dfm!='undefined'&&FlixServices.modular_match_data[0].modules.view3dfm!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!="")
opts.event_detail='qr|3dfw';flixtracking.log(opts,status);flixtracking.hsArImpression=true;}}}else{logqa('hot page')
opts.event_type='page'
if(flixhotspot.results)
var value='Hotspot_'+opts.edvalueT+'_'
else
var value='Hotspot_'+opts.edvalueT+'_'
opts.event_detail=value;setTimeout(function(){logqa('hotfound--'+FlixjQ('#flix_hotspots').length)
if(FlixjQ('#flix_hotspots')&&FlixjQ('#flix_hotspots:not(.ek_hotspots) .flix_hs:not(#flix_desktop_webar)').length>0){flixtracking.log(opts,status);}
else if(!flixtracking.hsArImpression&&(typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data!=null&&FlixServices.modular_hotspot_data.product_webar!=null||typeof FlixServices.modular_hotspot_data!='undefined'&&FlixServices.modular_hotspot_data!=null&&FlixServices.modular_hotspot_data.desktop_webar!=null)&&FlixjQ('.ek-ios, .ek-android').length>0&&typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].settings!='undefined'&&typeof FlixServices.modular_match_data[0].settings.distributor_settings!='undefined'&&FlixServices.modular_match_data[0].settings.distributor_settings.qr_only!=0){opts.event_type='webar_impressions';opts.event_detail='webar_loaded';flixtracking.log(opts,status);opts.type='3dfw';opts.event_type='ar_impression';opts.event_detail='webar';if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.view3dfm!='undefined'&&FlixServices.modular_match_data[0].modules.view3dfm!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!=null&&FlixServices.modular_match_data[0].modules.view3dfm.webar_provider!="")
opts.event_detail='webar|3dfw';flixtracking.log(opts,status);flixtracking.hsArImpression=true;}else if(typeof flixhotspot.oldresults!='undefined'&&typeof flixhotspot.oldresults.hotspots!='undefined'&&flixhotspot.results.settings[0].no_hotspots&&flixhotspot.results.settings[0].no_hotspots==true){flixtracking.log(opts,status);}
else{logqa('NO HOT LOG')}},1000,opts)
if(FlixServices.modular_match_data[1])
var adjacent_data1=FlixServices.modular_match_data[1]
else
var adjacent_data1=FlixServices.modular_match_data[0]
if(typeof adjacent_data1!='undefined'&&typeof adjacent_data1.settings!='undefined'&&typeof adjacent_data1.settings.adjacent_codes!='undefined'&&!flixtracking.adjacencyhotspotloaded&&(opts.type=='interactive')&&(opts.event_type&&opts.event_type=='page')){opts.event_detail='hotspot'
flixtracking.products.adjacency(opts);flixtracking.adjacencyhotspotloaded=true;}
if((window.comparecheck==undefined||window.comparecheck==false)&&(FlixjQ('#flix_hotspots .flix_hs_product_comparison').length>0||FlixjQ('#flix_hotspotsmob .flix_hsmob_product_comparison').length>0)){flixtracking.delegate('click','.flix_hs_product_comparison',function(event){if(window.comparecheck==undefined||window.comparecheck==false){window.comparecheck=true;flixtracking.products.comparisonv2.init(opts);logqa('Ct v2 init from desk hot')}});}
if(flixtracking.hotspotloaded==false){flixtracking.delegate('click','#flix_hotspots .flix_hs',function(event){var id=''
if(flixhotspot.results){id=this.id.replace(flixhotspot.results.settings[0].prefix,'')
var value='Hotspot_'+opts.edvalueT+'_'+id;}else{id=this.id.replace('flix_','')
var value='Hotspot_'+opts.edvalueT+'_'+id;}
opts.type='interactive';logqa('hotspot click',value);if(flixhotspot.results.hotspots&&flixhotspot.results.hotspots[id]&&flixhotspot.results.hotspots[id].productId)
opts.product_id=flixhotspot.results.hotspots[id].productId
const moduleValue=FlixjQ(this).attr('data-module');const similarModules=FlixjQ(this).closest('#flix_hotspots').find('[data-module]');const index=similarModules.index(FlixjQ(this));indexedModuleValue=moduleValue+'-'+(index+1);flixtracking.logMedia(opts,value,indexedModuleValue);if(id=='product_thirdpartyapp'){flixtracking.products.thirdpartywidget.hotspot();}});flixtracking.delegate('click','#flix_hotspots .ek-desktop',function(event){logqa('desktop flixar click');flixtracking.products.hotspot('qr_click','qr_open');});flixtracking.hotspotloaded=true;}}}}else{setTimeout(function(){logqa('no hotspot data- try AGAIN ------------------------')
flixtracking.products.hotspot(et,ed)},1000)}},hotspotmob:function(et,ed,status){logqa('in hotspotmob log--'+et+"__"+ed+"__"+status);if(typeof FlixServices.flixhotspotmob!='undefined'){logqa('hot FlixServices.')
if(typeof FlixServices!='undefined'&&typeof FlixServices.flixhotspot!='undefined'){if(typeof flixhotspotmob=='undefined')
flixhotspotmob=FlixServices.flixhotspotmob
flixhotspotmob.results=FlixServices.flixhotspot.results;}
if(typeof FlixServices.flixhotspot.data=='undefined'&&typeof flixhotspotmob.data!='undefined')
FlixServices.flixhotspot.data=flixhotspotmob.data
if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].product_meta!='undefined'&&typeof FlixServices.modular_match_data[0].product_meta.inpage!='undefined'&&FlixServices.modular_match_data[0].product_meta.inpage.disabled!='undefined'&&FlixServices.modular_match_data[0].product_meta.inpage.disabled!='0'){logqa(Object.values(FlixServices.modular_hotspot_data)[0].productId)
FlixServices.flixhotspot.data.product_id=Object.values(FlixServices.modular_hotspot_data)[0].productId;}
if(FlixServices.flixhotspotmob.data.product_id==null||FlixServices.flixhotspotmob.data.product_id=="")
FlixServices.flixhotspotmob.data.product_id=FlixServices.flixhotspot.data.product_id;var opts=FlixServices.flixhotspotmob.data;if(opts.language!=FlixServices.modular_match_data[0].product_meta.language_iso)
opts.language=FlixServices.modular_match_data[0].product_meta.language_iso;if(typeof FlixServices!='undefined'&&typeof FlixServices.flixhotspot!='undefined'){if(typeof flixhotspotmob=='undefined')
flixhotspotmob=FlixServices.flixhotspotmob
flixhotspotmob.results=FlixServices.flixhotspot.results;}
if(window.flixJsCallbacks)
window.flixJsCallbacks.pageView=window.flixJsCallbacks.pageView||{log:false,beat:false};if(FlixServices.flixhotspotmob.data){logqa('hotmob data')
opts.type='interactive';if(!opts.product_id&&opts.p)
opts.product_id=opts.p
opts.edvalueT=opts.mpn||opts.ean||opts.product_id
if(et||ed){logqa('hotmob ed et')
opts.event_detail=ed;opts.event_type=et;if(ed=='hotspot_webar'||et=='webar_click'){opts.event_type='webar_click';opts.event_detail=''}else if(opts.event_type=='dwelltime'){logqa('dwelltime log')
opts.event_detail=ed;}else if(opts.event_type=='launch'){logqa('launch log')
opts.event_detail=ed;}
if(ed=='qr_loaded'||ed=='qr_close')
opts.event_detail=ed;flixtracking.log(opts,status);}else{logqa('hotmob page')
opts.event_type='page'
var value='Hotspot_'+opts.edvalueT+'_';opts.event_detail=value;flixtracking.log(opts,status);if(FlixServices.modular_match_data[1])
var adjacent_data1=FlixServices.modular_match_data[1]
else
var adjacent_data1=FlixServices.modular_match_data[0]
if(typeof adjacent_data1!='undefined'&&typeof adjacent_data1.settings!='undefined'&&typeof adjacent_data1.settings.adjacent_codes!='undefined'&&!flixtracking.adjacencyhotspotloaded&&(opts.type=='interactive')&&(opts.event_type&&opts.event_type=='page')){opts.event_detail='hotspot'
flixtracking.products.adjacency(opts);flixtracking.adjacencyhotspotloaded=true;}
if((typeof window.comparecheck=='undefined'||window.comparecheck==false)&&(FlixjQ('#flix_hotspots .flix_hs_product_comparison').length>0||FlixjQ('#flix_hotspotsmob .flix_hsmob_product_comparison').length>0)){flixtracking.delegate('click','.flix_hs_product_comparison',function(event){if(window.comparecheck==undefined||window.comparecheck==false){window.comparecheck=true;flixtracking.products.comparisonv2.init(opts);logqa('Ct v2 init from mob hot')}});}}
if(flixtracking.hotspotmobloaded==false){flixtracking.delegate('click','#flix_hotspotsmob .flix_hsmob',function(event){var id='';if(FlixServices.flixhotspotmob.results){id=this.id.replace(FlixServices.flixhotspotmob.results.settings[0].prefix,'');id=id.replace('mob','');var value='Hotspot_'+opts.edvalueT+'_'+id;}else{id=this.id.replace('flix_','');id=id.replace('mob','');var value='Hotspot_'+opts.edvalueT+'_'+id;}
opts.type='interactive';logqa('hotspotmob click',value);if(FlixServices.flixhotspotmob.results.hotspots&&FlixServices.flixhotspotmob.results.hotspots[id]&&FlixServices.flixhotspotmob.results.hotspots[id].productId)
opts.product_id=FlixServices.flixhotspotmob.results.hotspots[id].productId
const moduleValue=FlixjQ(this).attr('data-module');const similarModules=FlixjQ(this).closest('#flix_hotspotsmob').find('[data-module]');const index=similarModules.index(FlixjQ(this));indexedModuleValue=moduleValue+'-'+(index+1);flixtracking.logMedia(opts,value,indexedModuleValue);if(id=='product_thirdpartyapp'){flixtracking.products.thirdpartywidget.hotspot();}});flixtracking.delegate('click','.flix-mobtab',function(event){id=this.dataset.tabname;tabid=FlixServices.modular_match_data[0].modules.hotspot[id].module_id;var unqtarget=FlixjQ(this).closest('.share-bubblemob').find('[data-module="'+tabid+'"]').attr('[data-modtarget]');var tabClickMod=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],tabid,unqtarget);var value='Hotspot_'+opts.edvalueT+'_'+id;opts.type='interactive';logqa('hotspotmob click',value);if(FlixServices.flixhotspotmob.results.hotspots&&FlixServices.flixhotspotmob.results.hotspots[id]&&FlixServices.flixhotspotmob.results.hotspots[id].productId)
opts.product_id=FlixServices.flixhotspotmob.results.hotspots[id].productId
flixtracking.logMedia(opts,value,tabClickMod);if(id=='product_thirdpartyapp'){flixtracking.products.thirdpartywidget.hotspot();}});flixtracking.hotspotmobloaded=true;}}}else{setTimeout(1000)}},microsite:function(opts){logqa('in microsite log');if(document.querySelector("#flix-intel-inpage")!=null&&typeof FlixjQ.fn.inPage!='undefined')
{var firstSibElement=document.querySelector("#flix-intel-inpage");if(firstSibElement!=null&&typeof firstSibElement!='undefined'){var spanLogElement=firstSibElement.nextElementSibling;var idLogValue=spanLogElement.id;var logNumericValue=idLogValue.replace("inpage-data-","");var numericNumberFlix=parseInt(logNumericValue,10);if(numericNumberFlix!=null){opts.product_id=numericNumberFlix;}}}
else if(document.querySelector("#flix-intel-inpage")!=null&&typeof FlixjQ.fn.minisite!='undefined'){if(FlixjQ.fn.minisite.data.product!=null){opts.product_id=FlixjQ.fn.minisite.data.product;}}
opts.type='sis';flixtracking.log(opts);if(flixtracking.micrositeloaded==false){flixtracking.micrositeloaded=true;flixtracking.logTime(opts,0);flixtracking.logTime(opts)
flixtracking.delegate('click','#'+opts.flixcontainer+' *[data-media]',function(event){value=this.dataset.media;opts.type='sis';const closestModule=event.target.closest('[data-module]');moduleValue=closestModule?closestModule.getAttribute('data-module'):null;logqa('media',value);if(!FlixjQ(event.target).closest('.flix-video-close').length)
flixtracking.logMedia(opts,value,moduleValue);});flixtracking.delegate('click','#'+opts.flixcontainer+' *[data-page]',function(event){value=this.dataset.page;opts.type='sis';logqa('page',value);if(!FlixjQ(event.target).closest('.flix-video-close').length)
flixtracking.logPage(opts,value);});flixtracking.delegate('click','#'+opts.flixcontainer+' *[data-click]',function(event){value=this.dataset.click;opts.type='sis';logqa('click',value);const closestModule=event.target.closest('[data-module]');moduleValue=closestModule?closestModule.getAttribute('data-module'):null;if(!FlixjQ(event.target).closest('.flix-video-close').length)
flixtracking.logClick(opts,value,moduleValue);});flixtracking.delegate('click','#'+opts.flixcontainer+' a',function(event){if(!this.hasAttribute('data-media')&&!this.hasAttribute('data-page')&&!this.hasAttribute('data-click')){const closestModule=event.target.closest('[data-module]');moduleValue=closestModule?closestModule.getAttribute('data-module'):null;var value="";_img=FlixjQ(this).find("img");if(_img&&_img.attr('alt')){value=_img.attr('alt');}else{value=FlixjQ(this).text();}
logqa('click',value);flixtracking.logClick(opts,value,moduleValue);}});}},comparison:{init:function(opts){logqa('comparison init- new')
if(!opts){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}}
delete opts.modtarget
if(typeof opts=='undefined'&&typeof FlixServices!='undefined')
opts=FlixServices.maindata
if(opts.product_id&&FlixjQ('.flix-compare').length>0&&FlixjQ('.flix-compare').closest('[data-flx-p]').length>0&&FlixjQ('.flix-compare').closest('[data-flx-p]').attr('data-flx-p')!=opts.product_id){prodid=FlixjQ('.flix-compare').closest('[data-flx-p]').attr('data-flx-p');if(typeof FlixServices!='undefined'&&typeof FlixServices.inpagedata!='undefined'&&FlixServices.inpagedata[prodid]){opts=FlixServices.inpagedata[prodid];}}
opts.type='compare';if(opts.mpn===undefined){opts.mpn='';}
flixtracking.logging('compare','impression',opts);this.clicks();if(FlixjQ('.ui-tabs-nav li').length){window.addEventListener('scroll',flixtracking.products.comparison.checkViewport);FlixjQ('.ui-tabs-nav li').on('click',function(){var tabno=FlixjQ(this).find('a').attr('href');logqa('Minisite logs-'+tabno);if(FlixjQ(tabno).find('.inpage_selector_comparison').length)
flixtracking.products.comparison.elementInViewport('.inpage_selector_comparison');})}else if(FlixjQ('[data-for="flix-mbl-comparison"]').length){FlixjQ('[data-for="flix-mbl-comparison"]').on('click',function(){setTimeout(function(){window.addEventListener('scroll',flixtracking.products.comparison.checkViewport);},200);});}else{window.addEventListener('scroll',flixtracking.products.comparison.checkViewport);}},clicks:function(){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
if(opts.product_id&&FlixjQ('.flix-compare').length>0&&FlixjQ('.flix-compare').closest('[data-flx-p]').length>0&&FlixjQ('.flix-compare').closest('[data-flx-p]').attr('data-flx-p')!=opts.product_id){prodid=FlixjQ('.flix-compare').closest('[data-flx-p]').attr('data-flx-p');if(typeof FlixServices!='undefined'&&typeof FlixServices.inpagedata!='undefined'&&FlixServices.inpagedata[prodid]){opts=FlixServices.inpagedata[prodid];}}
flixtracking.delegate('click','.flix-comp-clickable',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var attached_mpn2=FlixjQ(this).attr('rel');var price2=FlixjQ(this).attr('price');logqa('comparison clickable '+attached_mpn2,price2)
flixtracking.logging('compare','productpage',opts,attached_mpn2,price2);});FlixjQ('body').on('click','.flix-comp-control-prev',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('compare','media',opts,'prev');});FlixjQ('body').on('click','.flix-comp-control-next',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('compare','media',opts,'next');});FlixjQ('.flix-comp-toggle [data-flix-media]').removeAttr('data-flix-media');FlixjQ('.flix-comp-toggle').on('click',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('compare','media',opts,'flix-arrow-toggle');});},checkViewport:function(element){if(FlixjQ('.inpage_selector_comparison').length>0)
flixtracking.products.comparison.elementInViewport('.inpage_selector_comparison');if(FlixjQ('#inpage_container')!=null&&FlixjQ('#inpage_container').length>0)
flixtracking.products.comparison.elementInViewport('#inpage_container');},visibilitychange:function(state,type){logqa('visibilitychange-'+type)
if(document.visibilityState=='hidden'){flixtracking.products.comparison.dwelltimer('stop','.inpage_selector_comparison')
flixtracking.products.comparison.dwelltimer('stop','#inpage_container')}
else{}},dwelltimer:function(state,element){var lastt=document.querySelector(element).dataset.flixtime2||0;if(lastt&&lastt!=0&&state=='stop'){var lastt=lastt
tdiff=Date.now()-lastt;type='ct'
if(element&&element.search('inpage_container')!=-1)
type='inpage'
var artime=type+'_time_'+tdiff;logqa(type+'-timer stop- '+tdiff);if(tdiff>0){flixtracking.logging('compare','dwelltime',null,artime);}
document.querySelector(element).removeAttribute('data-flixtime2')}
else if(state=='start'&&lastt==0){logqa('dwelltimer timer start- new'+element);document.addEventListener('visibilitychange',flixtracking.products.comparison.visibilitychange);if(FlixjQ('.ui-tabs-nav li').length){FlixjQ('.ui-tabs-nav li').one('click',function(){var tabno=FlixjQ(this).find('a').attr('href')
logqa('Minisite tab click-'+tabno)
if(FlixjQ(tabno).find('.inpage_selector_comparison').length==0)
flixtracking.products.comparison.dwelltimer('stop','.inpage_selector_comparison')})}
document.querySelector(element).dataset.flixtime2=Date.now();}},elementInViewport:function(element){var myElement=document.querySelector(element);if(myElement){var bounding=myElement.getBoundingClientRect();var myElementHeight=myElement.offsetHeight;var myElementWidth=myElement.offsetWidth;var bounding=myElement.getBoundingClientRect();if(bounding.top>=-myElementHeight&&bounding.left>=-myElementWidth&&bounding.right<=(window.innerWidth||document.documentElement.clientWidth)+myElementWidth&&bounding.bottom<=(window.innerHeight||document.documentElement.clientHeight)+myElementHeight){if(!document.querySelector(element).dataset.flixtime2){flixtracking.products.comparison.dwelltimer('start',element)
if(element=='.inpage_selector_comparison'&&FlixjQ(element).is(":visible"))
flixtracking.logging('compare','media',null,'views');}}else{if(document.querySelector(element).dataset.flixtime2)
flixtracking.products.comparison.dwelltimer('stop',element)}}}},comparisonv2:{init:function(opts){logqa('comparison V2 init- new')
if(!opts){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}}
delete opts.modtarget
if(typeof opts=='undefined'&&typeof FlixServices!='undefined')
opts=FlixServices.maindata
opts.type='compare';if(opts.mpn===undefined){opts.mpn='';}
flixtracking.logging('compare','impression',opts);this.clicks();this.pageposition();setTimeout(function(){var v2prodids='';FlixjQ('.flix-compv2-product').each(function(i){v2prodids+=FlixjQ(this).attr('data-compv2-pid')+';'});flixtracking.logging('compare','launch',opts,v2prodids);},2000);var exstock=FlixjQ('[data-compv2-excludedbystock]').attr('data-compv2-excludedbystock')
if(exstock&&exstock.length){exstock=exstock.split('|')
FlixjQ.each(exstock,function(no,id){if(id.length)
flixtracking.logging('compare','ctexclusion',opts,'1;'+id);});}
var exprice=FlixjQ('[data-compv2-excludedbyprice]').attr('data-compv2-excludedbyprice')
if(exprice&&exprice.length){exprice=exprice.split('|')
FlixjQ.each(exprice,function(no,id){if(id.length)
flixtracking.logging('compare','ctexclusion',opts,'2;'+id);});}
if(FlixjQ('.ui-tabs-nav li').length){FlixjQ('.ui-tabs-nav li').on('click',function(){window.addEventListener('scroll',flixtracking.products.comparison.checkViewport);var tabno=FlixjQ(this).find('a').attr('href');logqa('Minisite logs-'+tabno);if(FlixjQ(tabno).find('.inpage_selector_comparison').length)
flixtracking.products.comparisonv2.elementInViewport('.inpage_selector_comparison');})}else if(FlixjQ('[data-for="flix-mbl-comparison"]').length){FlixjQ('[data-for="flix-mbl-comparison"]').on('click',function(){setTimeout(200);});}else{window.addEventListener('scroll',flixtracking.products.comparisonv2.checkViewport);}},clicks:function(){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
flixtracking.delegate('click','.flix-compv2-trac-buy .flix-compv2-clickable, .flix-compv2-linkBtn',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var prodid=''
if(FlixjQ(this).closest('.flix-compv2-product').length&&FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid'))
prodid=FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid');var price=FlixjQ(this).attr('price');flixtracking.logging('compare','productpage',opts,prodid,price);});flixtracking.delegate('click','.flix-compv2-control-prev',function(){logqa('flix-compv2-control-prev')
var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('compare','media',opts,'prev');setTimeout(function(){FlixjQ('.flix-cp-target').each(function(){var pid=FlixjQ(this).attr('data-compv2-pid');if(!FlixjQ(this).hasClass('flix-ct-pos'))
flixtracking.logging('compare','position',opts,pid);FlixjQ(this).addClass('flix-ct-pos')});},1200)});flixtracking.delegate('click','.flix-compv2-control-next',function(){logqa('flix-compv2-control-next')
var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('compare','media',opts,'next');setTimeout(function(){FlixjQ('.flix-cp-target').each(function(){var pid=FlixjQ(this).attr('data-compv2-pid');if(!FlixjQ(this).hasClass('flix-ct-pos'))
flixtracking.logging('compare','position',opts,pid);FlixjQ(this).addClass('flix-ct-pos')});},1200)});flixtracking.delegate('click','.flix-compv2-toggle',function(){logqa('flix-compv2-toggle')
var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var textval=FlixjQ(this).find('.flix-compv2-itemDesc').text()
textval=textval.replace(' ⓘ','')
textval=textval.replace('ⓘ','')
textval=textval.replace('%20%20','')
var toggleval='expand_'
if(!FlixjQ(this).hasClass('flix-compv2-toggleactive'))
var toggleval='collapse_'
flixtracking.logging('compare','media',opts,toggleval+textval);});flixtracking.delegate('click','.flix-has-tooltip',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;if(FlixjQ(this).attr('title')&&FlixjQ(this).attr('title').length>0){logqa('flix-has-tooltip');flixtracking.logging('compare','media',opts,'tooltip');}});flixtracking.delegate('click','.flix-compv2-close',function(){logqa('flix_close')
var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var prodid=FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid')
flixtracking.logging('compare','media',opts,'remove_'+prodid);});flixtracking.delegate('click','.flix-compv2-toggle-movebtn',function(){logqa('flix-toggle-movebtn')
var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_comparison').length>0||FlixjQ('.share-bubblemob .inpage_selector_comparison').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var prodid=FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid')
flixtracking.logging('compare','media',opts,'boost_'+prodid);});},checkViewport:function(element){if(FlixjQ('.inpage_selector_comparison').length>0)
flixtracking.products.comparison.elementInViewport('.inpage_selector_comparison');if(FlixjQ('#inpage_container')!=null&&FlixjQ('#inpage_container').length>0)
flixtracking.products.comparison.elementInViewport('#inpage_container');},visibilitychange:function(state,type){logqa('visibilitychange-'+type)
if(document.visibilityState=='hidden'){flixtracking.products.comparisonv2.dwelltimer('stop','.inpage_selector_comparison')
flixtracking.products.comparisonv2.dwelltimer('stop','#inpage_container')}
else{}},dwelltimer:function(state,element){if(document.querySelector(element))
var lastt=document.querySelector(element).dataset.flixtime2||0;if(lastt&&lastt!=0&&state=='stop'){var lastt=lastt
tdiff=Date.now()-lastt;type='ct'
if(element&&element.search('inpage_container')!=-1)
type='inpage'
var artime=type+'_time_'+tdiff;logqa(type+'-timer stop- '+tdiff);if(tdiff>0){flixtracking.logging('compare','dwelltime',null,artime);}
document.querySelector(element).removeAttribute('data-flixtime2')}
else if(state=='start'&&lastt==0){logqa('dwelltimer timer start- new'+element);document.addEventListener('visibilitychange',flixtracking.products.comparisonv2.visibilitychange);if(FlixjQ('.ui-tabs-nav li').length){FlixjQ('.ui-tabs-nav li').one('click',function(){var tabno=FlixjQ(this).find('a').attr('href')
logqa('Minisite tab click-'+tabno)
if(FlixjQ(tabno).find('.inpage_selector_comparison').length==0)
flixtracking.products.comparisonv2.dwelltimer('stop','.inpage_selector_comparison')})}
document.querySelector(element).dataset.flixtime2=Date.now();}},elementInViewport:function(element){var myElement=document.querySelector(element);if(myElement){var bounding=myElement.getBoundingClientRect();var myElementHeight=myElement.offsetHeight;var myElementWidth=myElement.offsetWidth;var bounding=myElement.getBoundingClientRect();if(bounding.top>=-myElementHeight&&bounding.left>=-myElementWidth&&bounding.right<=(window.innerWidth||document.documentElement.clientWidth)+myElementWidth&&bounding.bottom<=(window.innerHeight||document.documentElement.clientHeight)+myElementHeight){if(!document.querySelector(element).dataset.flixtime2){flixtracking.products.comparisonv2.dwelltimer('start',element)
if(element=='.inpage_selector_comparison'&&FlixjQ(element).is(":visible")){flixtracking.logging('compare','media',null,'views');var v2prodids='';FlixjQ('.flix-compv2-product').each(function(i){if(FlixjQ(this).attr('data-compv2-pid'))
v2prodids+=FlixjQ(this).attr('data-compv2-pid')+';'});if(!flixtracking.ctviewwed)
flixtracking.logging('compare','view',null,v2prodids);flixtracking.ctviewwed=1
function ctposition(){if(FlixjQ('.flix-cp-target').length&&!flixtracking.products.comparisonv2.ctpos){FlixjQ('.flix-cp-target').each(function(){var pid=FlixjQ(this).attr('data-compv2-pid');if(!FlixjQ(this).hasClass('flix-ct-pos'))
flixtracking.logging('compare','position',null,pid);FlixjQ(this).addClass('flix-ct-pos')});flixtracking.products.comparisonv2.ctpos=1}else{setTimeout(function(){ctposition()},2000);}}
ctposition();}}}else{if(document.querySelector(element).dataset.flixtime2)
flixtracking.products.comparisonv2.dwelltimer('stop',element)}}},pageposition:function(){logqa('pageposition')
var toptrac=[];var middletrac=[];var bottomtrac=[];FlixjQ(window).scroll(function(){FlixjQ('[data-flix-embed-meta="features"], .flix-ctv2-wrapper').each(function(inPcount,b){if(FlixjQ(this).find(".inpage_selector_comparison").length>0&&FlixjQ(this).find(".inpage_selector_comparison").offset()){var top_of_element=FlixjQ(this).find(".inpage_selector_comparison").offset().top;var bottom_of_element=FlixjQ(this).find(".inpage_selector_comparison").offset().top+FlixjQ(this).find(".inpage_selector_comparison").outerHeight(false);var middle_of_element=FlixjQ(this).find(".inpage_selector_comparison").offset().top+FlixjQ(this).find(".inpage_selector_comparison").outerHeight(false)/2;var bottom_of_screen=FlixjQ(window).scrollTop()+window.innerHeight;var top_of_screen=FlixjQ(window).scrollTop();var pagepos='1';if(((bottom_of_screen+20)>top_of_element)&&(top_of_screen<bottom_of_element)){if(bottom_of_screen<top_of_element&&FlixjQ.inArray(inPcount,toptrac)==-1){logqa('Top of inPage');pagepos=0;toptrac.push(inPcount);}
if(bottom_of_screen>middle_of_element&&FlixjQ.inArray(inPcount,middletrac)==-1){logqa('Middle of ct');pagepos=50;middletrac.push(inPcount);}
if(bottom_of_screen>bottom_of_element&&FlixjQ.inArray(inPcount,bottomtrac)==-1){logqa('Bottom of ct');pagepos=100;bottomtrac.push(inPcount);}
if(pagepos!='1'){flixtracking.logging('compare','viewpoint',opts,'ct_view_'+pagepos)}}else{}}})});}},thirdpartywidget:{init:function(opts){logqa('3p init- new')
if(!opts){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}}
delete opts.modtarget
if(typeof FlixServices!='undefined'&&typeof FlixServices.modular_match_data!='undefined'){for(var i=0;i<FlixServices.modular_match_data.length;i++){if(typeof FlixServices.modular_match_data[i].modules.reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}
if(typeof FlixServices.modular_match_data[i].modules.complimentary_reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}}}
opts.type='3p';if(opts.mpn===undefined){opts.mpn='';}
var JsoNAppID="",MultiJsoNAppID=[];if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.thirdPartyApp!='undefined'&&typeof FlixServices.modular_match_data[0].modules.thirdPartyApp.thirdpartydata[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules.thirdPartyApp.thirdpartydata[0].thirdparty_app_id!='undefined'){JsoNAppID=FlixServices.modular_match_data[0].modules.thirdPartyApp.thirdpartydata;}else if(typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.modular_match_data.modules!='undefined'&&typeof FlixServices.modular_match_data.modules.thirdPartyApp!='undefined'&&typeof FlixServices.modular_match_data.modules.thirdPartyApp.thirdpartydata[0]!='undefined'&&typeof FlixServices.modular_match_data.modules.thirdPartyApp.thirdpartydata[0].thirdparty_app_id!='undefined'){JsoNAppID=FlixServices.modular_match_data.modules.thirdPartyApp.thirdpartydata;}
if(JsoNAppID&&JsoNAppID.length){for(var l=0;l<JsoNAppID.length;l++){opts.app_id=JsoNAppID[l].thirdparty_app_id;flixtracking.logging('3p','page',opts,'');MultiJsoNAppID.push(JsoNAppID[l].thirdparty_app_id);}}
this.pageposition(opts);flixtracking.delegate('click','.flix-bose-widget-button',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .flix-3rd-widget-multi').length>0||FlixjQ('.share-bubblemob .flix-3rd-widget-multi').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;opts.app_id=FlixjQ(this).closest('.flix-3rd-widget-multi').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');flixtracking.logging('3p','media',opts,'3p_Interactive');flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');});flixtracking.delegate('click','.flix-close-3p',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .flix-3rd-widget-multi').length>0||FlixjQ('.share-bubblemob .flix-3rd-widget-multi').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;opts.app_id=FlixjQ(this).attr('data_app_id');flixtracking.logging('3p','media',opts,'3p_close');flixtracking.products.thirdpartywidget.dwelltimer('stop','.flix-3p-multi-button-control-content-inner.flix-3p-active-frame')});flixtracking.delegate('click','#inpage_container .flix-3p-multi-button-control-title',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .flix-3rd-widget-multi').length>0||FlixjQ('.share-bubblemob .flix-3rd-widget-multi').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;opts.app_id=FlixjQ(this).attr('data-flixmapping_id');FlixjQ(this).closest('.flix-3p-multi-button-control').find(".flix-3p-multi-button-control-content-inner[data_app_id="+opts.app_id+"]");element='#inpage_container .flix-3p-multi-button-control-content-inner.flix-3p-active-frame'
flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');if(FlixjQ(element).is(":visible")&&FlixjQ(element).css('display')!=='none'&&!FlixjQ(element).hasClass("flix-appload-fired")&&!FlixjQ(element).closest('.share-bubble,.share-bubblemob').length){FlixjQ(element).addClass("flix-appload-fired")
opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');flixtracking.logging('3p','appload',opts,'');}});if(FlixjQ('.ui-tabs-nav li').length){if(((FlixjQ('.ui-tabs-nav li').length==1&&FlixjQ('.flix-3rd-widget-multi').length>0)||(FlixjQ('.ui-widget-content .flix-3rd-widget-multi')&&FlixjQ('.ui-widget-content .flix-3rd-widget-multi').is(':visible')))&&FlixjQ('.flix-3p-multi-button-control').css('display')!=='none'){window.addEventListener('scroll',flixtracking.products.thirdpartywidget.checkViewport);}
FlixjQ('.ui-tabs-nav li').on('click',function(){window.addEventListener('scroll',flixtracking.products.thirdpartywidget.checkViewport);var tabno=FlixjQ(this).find('a').attr('href');logqa('Minisite logs-'+tabno);if(FlixjQ(tabno).find('.flix-3rd-widget-multi').length)
flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');})}else{window.addEventListener('scroll',flixtracking.products.thirdpartywidget.checkViewport);}},checkViewport:function(element){if(FlixjQ('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame').css('display')!=='none')
flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');},visibilitychange:function(state,type){logqa('visibilitychange-'+type)
if(document.visibilityState=='hidden'){flixtracking.products.thirdpartywidget.dwelltimer('stop','.flix-3p-multi-button-control-content-inner.flix-3p-active-frame')}
else{}},hotspot:function(state,type){logqa('thirdpartywidget hotspot')
if(typeof FlixServices!='undefined'&&typeof FlixServices.modular_match_data!='undefined'){for(var i=0;i<FlixServices.modular_match_data.length;i++){if(typeof FlixServices.modular_match_data[i].modules.reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}
if(typeof FlixServices.modular_match_data[i].modules.complimentary_reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}}}
var JsoNAppID="",MultiJsoNAppID=[];if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.thirdPartyApp!='undefined'&&typeof FlixServices.modular_match_data[0].modules.thirdPartyApp.thirdpartydata[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules.thirdPartyApp.thirdpartydata[0].thirdparty_app_id!='undefined'){JsoNAppID=FlixServices.modular_match_data[0].modules.thirdPartyApp.thirdpartydata;}else if(typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.modular_match_data.modules!='undefined'&&typeof FlixServices.modular_match_data.modules.thirdPartyApp!='undefined'&&typeof FlixServices.modular_match_data.modules.thirdPartyApp.thirdpartydata[0]!='undefined'&&typeof FlixServices.modular_match_data.modules.thirdPartyApp.thirdpartydata[0].thirdparty_app_id!='undefined'){JsoNAppID=FlixServices.modular_match_data.modules.thirdPartyApp.thirdpartydata;}
if(!FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner,.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner').hasClass('flix-appload-fired')){if(JsoNAppID&&JsoNAppID.length){for(var l=0;l<JsoNAppID.length;l++){opts.app_id=JsoNAppID[l].thirdparty_app_id;flixtracking.logging('3p','page',opts,'hotspot');MultiJsoNAppID.push(JsoNAppID[l].thirdparty_app_id);}}
opts.app_id=MultiJsoNAppID[0];flixtracking.logging('3p','appload',opts,'hotspot');}
FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0),.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0)').addClass('flix-appload-fired');flixtracking.delegate('click','.share-bubble .flix-3p-multi-button-control-title, .share-bubblemob .flix-3p-multi-button-control-title',function(){setTimeout(function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;opts.app_id=FlixjQ(this).attr('data-flixmapping_id');FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0),.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0)').addClass('flix-appload-fired');element='.share-bubble .flix-3p-multi-button-control-content-inner.flix-3p-active-frame,.share-bubblemob .flix-3p-multi-button-control-content-inner.flix-3p-active-frame'
if(FlixjQ(element).is(":visible")&&FlixjQ(element).css('display')!=='none'&&!FlixjQ(element).hasClass("flix-appload-fired")&&FlixjQ(element).closest('.share-bubble,.share-bubblemob').length){FlixjQ(element).addClass("flix-appload-fired")
opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');flixtracking.logging('3p','appload',opts,'hotspot');}},500);});flixtracking.products.thirdpartywidget.dwelltimerhot('start')
setTimeout(function(){var target='.share-bubble .flix-3rd-widget-multi, .share-bubblemob .flix-3rd-widget-multi'
const sections=document.querySelectorAll(target);const config={rootMargin:'50px 0px 50px 0px',threshold:0};let isLeaving=false;let observer=new IntersectionObserver(function(entries,self){var delay=0;entries.forEach(entry=>{if(entry.isIntersecting){isLeaving=true;logqa('thirdpartywidget visible ');FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0),.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0)').addClass('flix-appload-fired');}else if(isLeaving){isLeaving=false;logqa('thirdpartywidget hidden ');flixtracking.products.thirdpartywidget.dwelltimerhot('stop')
self.unobserve(entry.target);}});},config);if('IntersectionObserver'in window){setTime);},1000);}else{}},1000)},visibilitychangehot:function(state,type){logqa('visibilitychangehot-'+type)
if(document.visibilityState=='hidden'){flixtracking.products.thirdpartywidget.dwelltimerhot('stop');}
else{}},dwelltimerhot:function(state){logqa('dwelltimerhot-'+state)
if(state=='stop'){var lastt=flixtracking.threephotdwelltime;var tdiff=Date.now()-lastt;var artime='hot_app_time_'+tdiff;logqa('stop- '+artime);if(tdiff>0){logqa('dwelltime'+artime)
flixtracking.logging('3p','dwelltime',opts,artime);document.removeEventListener('visibilitychange',flixtracking.products.thirdpartywidget.visibilitychangehot);}}
else if(state=='start'){flixtracking.threephotdwelltime=Date.now();document.addEventListener('visibilitychange',flixtracking.products.thirdpartywidget.visibilitychangehot);}},dwelltimer:function(state,element){if(document.querySelector(element))
var lastt=document.querySelector(element).dataset.flixtime2||0;if(lastt&&lastt!=0&&state=='stop'){var lastt=lastt
tdiff=Date.now()-lastt;type='3p'
if(element&&element.search('inpage_container')!=-1)
type='inpage'
var artime='app_time_'+tdiff;opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');logqa(type+'-timer stop- '+tdiff);if(tdiff>0){flixtracking.logging('3p','dwelltime',opts,artime);}
document.querySelector(element).removeAttribute('data-flixtime2')}
else if(state=='start'&&lastt==0){logqa('dwelltimer timer start- new'+element);document.addEventListener('visibilitychange',flixtracking.products.thirdpartywidget.visibilitychange);if(FlixjQ('.ui-tabs-nav li').length){FlixjQ('.ui-tabs-nav li').one('click',function(){var tabno=FlixjQ(this).find('a').attr('href')
logqa('Minisite tab click-'+tabno)
if(FlixjQ(tabno).find('.flix-3rd-widget-multi').length==0)
flixtracking.products.thirdpartywidget.dwelltimer('stop','.flix-3p-multi-button-control-content-inner.flix-3p-active-frame')})}
document.querySelector(element).dataset.flixtime2=Date.now();}},elementInViewport:function(element){var myElement=document.querySelector(element);if(myElement){var bounding=myElement.getBoundingClientRect();var myElementHeight=myElement.offsetHeight;var myElementWidth=myElement.offsetWidth;var bounding=myElement.getBoundingClientRect();if(bounding.top>=-myElementHeight&&bounding.left>=-myElementWidth&&bounding.right<=(window.innerWidth||document.documentElement.clientWidth)+myElementWidth&&bounding.bottom<=(window.innerHeight||document.documentElement.clientHeight)+myElementHeight){if(!document.querySelector(element).dataset.flixtime2){flixtracking.products.thirdpartywidget.dwelltimer('start',element)}
if(element=='.flix-3p-multi-button-control-content-inner.flix-3p-active-frame'&&FlixjQ(element).is(":visible")&&FlixjQ(element).css('display')!=='none'&&!FlixjQ(element).hasClass("flix-appload-fired")&&!FlixjQ(element).closest('.share-bubble,.share-bubblemob').length){FlixjQ(element).addClass("flix-appload-fired")
opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');flixtracking.logging('3p','appload',opts,'');}}else{if(document.querySelector(element).dataset.flixtime2)
flixtracking.products.thirdpartywidget.dwelltimer('stop',element)}}},pageposition:function(opts){logqa('pageposition')
var toptrac=[];var middletrac=[];var bottomtrac=[];FlixjQ(window).scroll(function(){FlixjQ('.flix-3rd-widget-multi').each(function(inPcount,b){var Viewtab=FlixjQ(this);if(Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").length>0&&Viewtab.find('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame').css('display')!=='none'&&Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset()){var top_of_element=Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset().top;var bottom_of_element=Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset().top+Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").outerHeight(false);var middle_of_element=Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset().top+Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").outerHeight(false)/2;var bottom_of_screen=FlixjQ(window).scrollTop()+window.innerHeight;var top_of_screen=FlixjQ(window).scrollTop();var pagepos='1';opts.app_id=Viewtab.find('.flix-3p-multi-button-control-content').attr('data_active_app_id');if(((bottom_of_screen+20)>top_of_element)&&(top_of_screen<bottom_of_element)){if(!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-top-view-fired")){toptrac=[];}else if(!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-middle-view-fired")){middletrac=[];}else if(!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-bottom-view-fired")){bottomtrac=[];}
if((bottom_of_screen<top_of_element)&&FlixjQ.inArray(inPcount,toptrac)==-1&&!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-top-view-fired")){logqa('Top of 3p');pagepos=0;toptrac.push(inPcount);Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").addClass('flix-top-view-fired')
flixtracking.logging('3p','viewpoint',opts,'3p_view_'+pagepos)}
if(bottom_of_screen>middle_of_element&&FlixjQ.inArray(inPcount,middletrac)==-1&&!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-middle-view-fired")){logqa('Middle of 3p');pagepos=50;middletrac.push(inPcount);Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").addClass('flix-middle-view-fired')
flixtracking.logging('3p','viewpoint',opts,'3p_view_'+pagepos)}
if(bottom_of_screen>bottom_of_element&&FlixjQ.inArray(inPcount,bottomtrac)==-1&&!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-bottom-view-fired")){logqa('Bottom of 3p');pagepos=100;bottomtrac.push(inPcount);Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").addClass('flix-bottom-view-fired')
flixtracking.logging('3p','viewpoint',opts,'3p_view_'+pagepos)}}else{}}})});}},reviews:{reviews_count:0,reviewsContainer:'',init:function(opts){logqa('init review log');if(!opts){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}}
delete opts.modtarget
var reviews_count=0
if(typeof flixtracking.products.reviewsContainer!='undefined'&&flixtracking.products.reviewsContainer.attr('data-rcount')!=undefined)
reviews_count=flixtracking.products.reviewsContainer.attr('data-rcount');if(typeof FlixServices!='undefined'&&typeof FlixServices.modular_match_data!='undefined'){for(var i=0;i<FlixServices.modular_match_data.length;i++){if(typeof FlixServices.modular_match_data[i].modules.reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}
if(typeof FlixServices.modular_match_data[i].modules.complimentary_reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}
if(typeof FlixServices.modular_match_data[i].modules.reviews!='undefined'&&reviews_count==0){opts=FlixServices.maindata;reviews_count=FlixServices.modular_match_data[i].modules.reviews.review_count;}else if(typeof FlixServices.modular_match_data[i].modules.complimentary_reviews!='undefined'&&reviews_count==0){var CompReCont=FlixjQ('[data-module="'+FlixServices.modular_match_data[i].modules.complimentary_reviews.module_id+'"]').find('[data-rcount]').attr('data-rcount')
FlixServices.maindata.product_id=FlixServices.modular_match_data[i].modules.complimentary_reviews.product_id;opts=FlixServices.maindata;reviews_count=FlixServices.modular_match_data[i].modules.complimentary_reviews.review_count;if(reviews_count==undefined&&CompReCont!=null&&CompReCont!='undefined'){reviews_count=CompReCont;}}}}
flixtracking.logging('review','page',opts,'review_'+reviews_count);this.clicks();},clicks:function(){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
if(typeof FlixServices!='undefined'&&typeof FlixServices.modular_match_data!='undefined'){for(var i=0;i<FlixServices.modular_match_data.length;i++){if(typeof FlixServices.modular_match_data[i].modules.reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}
if(typeof FlixServices.modular_match_data[i].modules.complimentary_reviews!='undefined'){opts=FlixServices.inpagedata[FlixServices.modular_match_data[i].product_meta.product_id]}}}
FlixjQ('body').on('click','[class*=-topreviews]',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_reviews').length>0||FlixjQ('.share-bubblemob .inpage_selector_reviews').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('review','media',opts,'review_scrollTo');});FlixjQ('body').on('click','nav[class*=_pagination] ul li [data-href]',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble .inpage_selector_reviews').length>0||FlixjQ('.share-bubblemob .inpage_selector_reviews').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var page=FlixjQ(this).attr("data-href");flixtracking.logging('review','media',opts,'review_page_'+page);});FlixjQ("div#minisite_tabs ul").find("[data-m-typeid='14']").on('click',function(){var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;flixtracking.logging('review','matchhit',opts,'review_tabClick');});}},pagetracking:{init:function(){logqa('start inpage visible tracking')
if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
var toptrac=[];var middletrac=[];var bottomtrac=[];FlixjQ(window).scroll(function(){FlixjQ('[id*=flixinpage_]').each(function(inPcount,b){if(FlixjQ(this).find("#inpage_container").length>0&&FlixjQ(this).find("#inpage_container").offset()){var top_of_element=FlixjQ(this).find("#inpage_container").offset().top;var bottom_of_element=FlixjQ(this).find("#inpage_container").offset().top+FlixjQ(this).find("#inpage_container").outerHeight(false);var middle_of_element=FlixjQ(this).find("#inpage_container").offset().top+FlixjQ(this).find("#inpage_container").outerHeight(false)/2;var bottom_of_screen=FlixjQ(window).scrollTop()+window.innerHeight;var top_of_screen=FlixjQ(window).scrollTop();var pagepos='';if((bottom_of_screen>top_of_element)&&(top_of_screen<bottom_of_element)){if(top_of_screen<top_of_element&&FlixjQ.inArray(inPcount,toptrac)==-1){logqa('Top of inPage');pagepos='Top of inPage'
toptrac.push(inPcount);}
if(top_of_screen>middle_of_element&&FlixjQ.inArray(inPcount,middletrac)==-1){logqa('Middle of inPage');pagepos='Middle of inPage'
middletrac.push(inPcount);}
if(bottom_of_screen>bottom_of_element&&FlixjQ.inArray(inPcount,bottomtrac)==-1){logqa('Bottom of inPage');pagepos='Bottom of inPage'
bottomtrac.push(inPcount);}
if(typeof FlixjQ.fn.inPage=='function'&&pagepos!=''){var opts=FlixjQ.fn.inPage.data;flixtracking.logging('visible','media',opts,pagepos,null,inPcount)}}else{}}})});}},logotracking:{logoclickonce:0,init:function(){logqa('start logo tracking')
if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
flixtracking.logging('logo','page',opts,'logo_page');this.hover();this.click();},hover:function(){FlixjQ('body').on('hover','.flix-logop',function(){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
if(flixtracking.products.logoclickonce==0)
flixtracking.logging('logo','media',opts,'logo_hover');flixtracking.products.logoclickonce++;});},click:function(){FlixjQ('body').on('touchstart','.flix-logop',function(){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
if(flixtracking.products.logoclickonce==0)
flixtracking.logging('logo','media',opts,'logo_click');flixtracking.products.logoclickonce++;});}},ugctracking:{init:function(opts){logqa('start ugc tracking')
if(!opts){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}}
delete opts.modtarget
flixtracking.logging('ugc','page',opts,'ugc_page');this.click();},click:function(){var timerId=null;var lo={"handled":false}
FlixjQ('body').on('click touchstart','[data-flix-ucgmedia]',function(){if(lo.handled===false){lo.handled=true;if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
var unqtarget=FlixjQ(this).closest('[data-module]').attr('data-module'),uniqmodtarget=FlixjQ(this).closest('[data-modtarget]').attr('data-modtarget');if(!FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[opts.prodNo],unqtarget,uniqmodtarget);}else if(FlixjQ('#minisite_tabs').length>0&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget)){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,uniqmodtarget);}else if((FlixjQ('.share-bubble #flix-ugc-galfeatures').length>0||FlixjQ('.share-bubblemob #flix-ugc-galfeatures').length>0)&&flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4))){opts.mid=flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],unqtarget,uniqmodtarget+Math.random().toString(36).substring(2,4));}else{opts.mid=unqtarget;}
opts.modtarget=uniqmodtarget;var opts2=opts;var ucgtarget=FlixjQ(this).attr('data-flix-ucgmedia').toLowerCase()
if(FlixjQ(this).closest('.share-bubble').length)
ucgtarget='hotspot_'+ucgtarget
if(typeof opts=='undefined'&&typeof flixhotspotmob&&typeof flixhotspotmob.data!='undefined')
opts2=flixhotspotmob.data;if(typeof opts=='undefined'&&typeof flixhotspot&&typeof FlixServices.flixhotspot.data!='undefined')
opts2=FlixServices.flixhotspot.data;if(typeof window.flixlightboxclick=='undefined'&&!timerId){logqa('clicked- '+FlixjQ(this).attr('data-flix-ucgmedia'))
timerId=setTimeout(function(){flixtracking.logging('ugc','media',opts2,ucgtarget);timerId=null;},200);}}
setTimeout(function(){lo.handled=false;},500)});}},flctracking:{i()},checkmatch:function(){setTimeout(function(){if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
if(FlixjQ('#flix-location-content').children().length>0){flixtracking.logging("flc","location",opts,"flc_location ");flixtracking.products.flctracking.click();}else{flixtracking.logging("flc","matchmisslocation ",opts,"flc_matchmisslocation  ");}},1500)},click:function(){var lo={"handled":false}
FlixjQ("body").on("click touchstart","[data-flix-flcmedia]",function(){if(lo.handled===false){lo.handled=true;if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}
var opts2=opts;var flctarget=FlixjQ(this).attr("data-flix-flcmedia").toLowerCase();logqa("clicked- "+flctarget);flixtracking.logging("flc","locationmedia",opts2,flctarget)}
setTimee;},500)})}},buttontracking:{init:function(){logqa('init buttontracking log');var type='inpage';if(typeof opts=='undefined'&&typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.inPage!='undefined')
opts=FlixjQ.fn.inPage.data;if(typeof FlixjQ.fn.minisite!='undefined'){type='minisite'
if(typeof opts=='undefined')
opts=FlixjQ.fn.minisite.data;}
if(typeof opts=='undefined'&&typeof FlixServices!='undefined'&&typeof FlixServices.maindata!='undefined')
opts=FlixServices.maindata;var cc=0;var lo={"handled":false}
var medialog=function(mediatext,prodid,modid){var data2=JSON.parse(JSON.stringify(opts));if(typeof FlixServices.inpagedata!='undefined'&&typeof FlixServices.inpagedata[prodid]=='object'){data2=FlixServices.inpagedata[prodid]}
if(prodid&&prodid!='')
data2.product=prodid;if(cc==0){logqa('clicked data-flix-media: '+mediatext+' modid : '+modid)
cc=1;if(modid!=undefined&&modid!=null)
data2.mid=modid;flixtracking.logging(type,'media',data2,mediatext);setTimeout(function(){cc=0},500)}}
flixtracking.delegate('click','[data-flix-media]',function(event){if(FlixjQ(this).hasClass('inpage_cap_next_photo')||FlixjQ(this).hasClass('inpage_cap_prev_photo')||FlixjQ(this).closest('#flixinpage-lightbox').length>0){var indexedModuleValue=FlixjQ(this).closest('[data-module]').attr('data-modpos');var mediatext=FlixjQ(this).attr('data-flix-media');medialog(mediatext,'',indexedModuleValue);}else{const closestElement=FlixjQ(this).closest('[data-module]');var moduleValue='',indexedModuleValue='',similarModules='';if(closestElement.length){moduleValue=closestElement.attr('data-module');if(FlixjQ('#minisite_tabs').length){similarModules=closestElement.closest('#minisite_tabs').find('[data-module]');}else{similarModules=closestElement.closest('[id^="flixinpage_"]').find('[data-module]');}
const index=similarModules.index(closestElement);indexedModuleValue=moduleValue+'-'+(index+1);}
var mediatext=FlixjQ(this).attr('data-flix-media');var targetval=FlixjQ(this).closest('#inpage_container').parent();var targetvalMini=FlixjQ(this).closest('#minisite_tabs').parent();logqa('data-flix-media click-'+targetval+"__"+mediatext);if(FlixjQ(targetval).find('span[id^=inpage-data], span[class^=mobile-data]').length){var prodid=FlixjQ(targetval).find('span[id^=inpage-data]').attr('id')||FlixjQ(targetval).attr('alt');prodid=prodid.toString().replace('inpage-data-','');medialog(mediatext,prodid,indexedModuleValue)}else if(FlixjQ(targetval).find('[data-flx-p]').length){var prodid=FlixjQ(targetval).find('[data-flx-p]').attr('data-flx-p')
medialog(mediatext,prodid,indexedModuleValue)}else if(FlixjQ(targetvalMini).find('[data-flx-p]').length){var prodid=FlixjQ(targetvalMini).find('[data-flx-p]').attr('data-flx-p')
medialog(mediatext,prodid,indexedModuleValue)}else{medialog(mediatext)}
medialog(mediatext,prodid,indexedModuleValue);}});}},jwplayer:function(mediaid_now,type,attr,div_name){logqa('in jwlogs - '+type)
if(type=='mediaload'){var et='mediaload';var ed=mediaid_now;this_position='';}
if(type=='mediatime'){var this_position=attr;var et='mediatime';var ed=mediaid_now;}
if(typeof FlixjQ.fn.inPage!='undefined'||typeof FlixjQ.fn.minisite!='undefined'||(flixtracking.getUrlParameter('p')&&flixtracking.getUrlParameter('l'))||(typeof FlixjQ.fn.hotspot!='undefined')){_base='//media.flixcar.com'
if(flixtracking.getUrlParameter('base')&&flixtracking.getUrlParameter('base').length>0)
_base=flixtracking.getUrlParameter('base')
var opts={type:'inpage',event_type:et||'',event_detail:ed||'',product_id:flixtracking.getUrlParameter('p')||'',distributor:flixtracking.getUrlParameter('d')||'',language:flixtracking.getUrlParameter('l')||'',pn:pnurl,page_name:pnurl,mpn:mpn||flixtracking.getUrlParameter('mpn')||'',ean:flixtracking.getUrlParameter('ean')||'',ver:2,vtime:this_position||'',br:flixtracking.getUrlParameter('br')||'',price:flixtracking.getUrlParameter('pr')||'',currency:flixtracking.getUrlParameter('cur')||'',jwvideo:1,pagedata:{br:flixtracking.getUrlParameter('br')||'',price:flixtracking.getUrlParameter('pr')||'',currency:flixtracking.getUrlParameter('cur')||'',pn:pnurl,page_name:pnurl}}
var d=new Date()
if(pnurl.search('minisite/show')!=-1||(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.minisite!='undefined')){logqa('minisite.log')
opts.type='minisite'}
if(et=='mediatime'&&(this_position==''||this_position<0.11))
opts.vtime=0;d.setMinutes(d.getTimezoneOffset());opts.ut=d.getTime();flixtracking.log(opts);}else{logqa('no video tracking ')}},cgi:function(event_type,edription){logqa('in cgi - '+event_type)
var aaurl=function(sParam){var sPageURL=decodeURI(window.location.search.substring(1)),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){sParameterName[1]=decodeURIComponent(sParameterName[1])
return sParameterName[1]===undefined?true:sParameterName[1];}}}
var data={product_id:flixtracking.getUrlParameter('p')||'',distributor:flixtracking.getUrlParameter('d')||'',language:flixtracking.getUrlParameter('l')||'en',event_type:event_type||'page',event_detail:edription.toLowerCase()||'',mpn:flixtracking.getUrlParameter('mpn')||'',ean:flixtracking.getUrlParameter('ean')||'',type:'3d',pn:aaurl('pn')||location.href,page_name:aaurl('pn')||location.href}
flixtracking.log(data)},threedfw:function(event_type,edription){logqa('in 3dfw - '+event_type)
var pnurl='',mpn='';if(flixtracking.getUrlParameter('pn'))
pnurl=flixtracking.getUrlParameter('pn');pnurl=pnurl.replace(/\|and/g,'&');pnurl=pnurl.replace(/\|for/g,'//');pnurl=pnurl.replace(/\|que/g,'?');pnurl=pnurl.replace(/\|dub/g,':');pnurl=pnurl.replace(/\|is/g,'=');pnurl=pnurl.replace(/\|hash/g,'#');pnurl=pnurl.replace(/\|per/g,'%');if(flixtracking.getUrlParameter('mpn'))
mpn=flixtracking.getUrlParameter('mpn')
mpn=mpn.replace(/\|and/g,'&');mpn=mpn.replace(/\|for/g,'//');mpn=mpn.replace(/\|que/g,'?');mpn=mpn.replace(/\|dub/g,':');mpn=mpn.replace(/\|is/g,'=');mpn=mpn.replace(/\|hash/g,'#');mpn=mpn.replace(/\|per/g,'%');if(!window.flixJsCallbacks){var flixJsCallbacks={_loadCallback:null,_loadInpageCallback:null,_loadMinisiteCallback:null,_loadNoshowCallback:null};var getFlixCallbs;};window.flixJsCallbacks=getFlixCallback();}
if(flixtracking.getUrlParameter('gvid')&&flixtracking.getUrlParameter('gvid').length>0&&window.flixJsCallbacks){window.flixJsCallbacks.gvid=flixtracking.getUrlParameter('gvid')}
var data={arid:flixtracking.getUrlParameter('arid')||'',product_id:flixtracking.getUrlParameter('p')||'',distributor:flixtracking.getUrlParameter('d')||'',language:flixtracking.getUrlParameter('l')||'en',event_type:event_type||'page',event_detail:edription.toLowerCase()||'3dfw',sid:flixtracking.getUrlParameter('sid')||'',br:flixtracking.getUrlParameter('br')||'',price:flixtracking.getUrlParameter('pr')||'',currency:flixtracking.getUrlParameter('cur')||'',ref:'',pn:pnurl||document.referrer||'',ti:'',mpn:flixtracking.getUrlParameter('mpn')||'',ean:flixtracking.getUrlParameter('ean')||'',type:'3dfw'}
if(data.distributor&&data.distributor!='')
flixtracking.log(data)},videoChat:function(data){logqa('in videoChat log');data.type='videochat';flixtracking.log(data);},addtocart:function(data,ab_hotspot_data){logqa('in addtocart');var dist='';var lan='';if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.inPage!='undefined'){dist=FlixjQ.fn.inPage.data.distributor;lan=FlixjQ.fn.inPage.data.language;}
if(!data.d||(data.d&&data.d==''))
data.d=data.distributor||dist;if(!data.l||(data.l&&data.l==''))
data.l=data.language||lan;data.view_time=0;var
d=new Date(),_base='https://media.flixcar.com/inpage/log.gif',encrypt=[],_beatUrlnew=flixtracking.trackingDomainBeat,_beatNotActive=window.beat_disabled_retailers||[],_beatByLanguage=[],beat,fallback,processed=null,once_only=[353,1544,2754,607],userAgents=['symbian','android','ios'],key,flixTag,i,url,flixSource=null,indx=-1;if(!data.session_id){if(typeof window!=='undefined'&&typeof window.sessionStorage==='object')
var guid=sessionStorage.getItem('flixsession');if(guid&&guid.length)
data.session_id=guid;else{data.session_id=flixtracking.setGuid.New();if(typeof window!=='undefined'&&typeof window.sessionStorage==='object')
sessionStorage.setItem('flixsession',data.session_id);}}
data.gvid=(window.flixJsCallbacks&&window.flixJsCallbacks.gvid)?window.flixJsCallbacks.gvid:'';data.pid=(window.flixJsCallbacks&&window.flixJsCallbacks.pid)?window.flixJsCallbacks.pid:(typeof FlixServices.modular_match_data[0]!='undefined'&&FlixServices.modular_match_data[0].product_meta.product_id)?FlixServices.modular_match_data[0].product_meta.product_id:0;data.product_id=data.comppid||data.pid
url=_base+"?newtrackv2&ver=v2&ts=inpage&m=y&et="+data.event_type;url+="&sid="+data.session_id;url+="&gvid="+data.gvid;url+="&p="+data.product_id;url+="&d="+data.d;url+="&l="+data.l;url+="&ed="+encodeURIComponent(data.event_detail);url+="&ut="+d.getTime();if(window.flreq){var fblan=window.flreq
for(var i=0;i<fblan.length;i++){if('inpage'==fblan[i].flreq_service&&url.search('&l1=')==-1){if(fblan[i].flreq_language&&fblan[i].flreq_language!='null'){var origlan=fblan[i].flreq_language
var falllan=fblan[i].language
url+="&l1="+origlan+"&l2="+falllan;if(data.l!=falllan)
url=url.replace("&l="+data.l,"&l="+falllan);}else{var origlan=fblan[i].language
url+="&l1="+origlan}}}}
if(url.search('&l1=')==-1&&data.l){url+="&l1="+data.l}
if(typeof flixtracking.isMobile!='undefined'){url+="&ism="+flixtracking.isMobile();}
if(url.search('ref=&')!=-1||url.search('ref')==-1){if(document.referrer!=null&&document.referrer.length>1){url=url.replace('ref=&','')
url+="&ref="+document.referrer;}}
if(data.app_id&&data.type=='3p'){url+="&app_id="+data.app_id;}
if(typeof FlixjQ!='undefined'&&typeof window.matching_data!='undefined'){var prodid=data.product_id||data.product||data.productid
if(typeof window.matching_data.main!='undefined'){FlixjQ.each(window.matching_data.main.data,function(index,values){if(prodid==index){if(values.match_id)
url+="&mi="+values.match_id
if(values.match_type)
url+="&mt="+values.match_type;if(values['match_type '])
url+="&mt="+values['match_type '];}});}
if(typeof window.matching_data.complimentary!='undefined'){FlixjQ.each(window.matching_data.complimentary.data,function(index,values){if(prodid==index){if(values.match_id)
url+="&mi="+values.match_id
if(values.match_type)
url+="&mt="+values.match_type;if(values['match_type '])
url+="&mt="+values['match_type '];}});}}
indx=window.location.search.indexOf('flxsrc=');if(indx!==-1)
{flixSource=window.location.search.substring(indx);}
if(!!window.flixJsCallbacks.pageCapture){for(key in window.flixJsCallbacks.pageCapture){if(window.flixJsCallbacks.pageCapture.hasOwnProperty(key)){if(key=='pn'&&flixSource)window.flixJsCallbacks.pageCapture[key]+=(window.flixJsCallbacks.pageCapture[key].indexOf('?')!==-1?"&":"?")+flixSource;url+="&"+key+'='+encodeURIComponent(window.flixJsCallbacks.pageCapture[key]);}}}
else{fallback=flixtracking.parsePage();url+="&ti="+fallback.title;if(flixSource){var decoded=decodeURIComponent(fallback.pn);fallback.pn=encodeURIComponent(decoded+(decoded.indexOf('?')!==-1?"&":"?")+flixSource);}
url+="&pn="+fallback.pn;}
if(url.search('&pn=undefined')!=-1||url.search('&pn=&')!=-1){url=url.replace('&pn=undefined','');url=url.replace('&pn=&','&');if(window.parent){var pnurl=(window.location!=window.parent.location)?document.referrer:top.document.URL;}else{var pnurl=document.location.href;}
if(pnurl=='')
var pnurl=document.location.href;url+='&pn='+encodeURIComponent(pnurl);}
flixTag=['mpn','ean','sku'];for(i=0;i<flixTag.length;i++){if(document.querySelector('script[data-flix-'+flixTag[i]+']')&&document.querySelector('script[data-flix-'+flixTag[i]+']').getAttribute('data-flix-'+flixTag[i])){if(url.search(flixTag[i])==-1)
url+="&"+flixTag[i]+"="+document.querySelector('script[data-flix-'+flixTag[i]+']').getAttribute('data-flix-'+flixTag[i]);}else if(url.search('&mpn=')==-1&&typeof FlixServices!='undefined'&&typeof FlixServices.maindata!='undefined'&&typeof FlixServices.maindata.mpn!='undefined'){url+="&mpn="+FlixServices.maindata.mpn}else if(url.search('&ean=')==-1&&typeof FlixServices!='undefined'&&typeof FlixServices.maindata!='undefined'&&typeof FlixServices.maindata.ean!='undefined'){url+="&ean="+FlixServices.maindata.ean}}
if(typeof window.flixJsCallbacks.imgCache==='undefined'){window.flixJsCallbacks.imgCache={};}
var track='img_'+(new Date).getTime();window.flixJsCallbacks.imgCache[track]=new Image();if(data.d&&(encrypt.indexOf(+data.d)!==-1)&&data.event_type==='cart_click'){url=process(url);}
if(url.search('et=undefined')!=-1){logqa('cancel empty complementary alert')
logqa(url)
return false;}
try{if(data.d=='6'||data.d=='75'||data.d=='174'||data.d=='1394'||data.d=='418'){var sessionprod=sessionStorage.getItem('flix');if(sessionprod==null)
var flixprod=[];else
var flixprod=JSON.parse(sessionprod);var idmatch=''
if(sessionprod!=null){var parsedObject=JSON.parse(sessionprod);for(var prod of parsedObject){if(prod.pid===data.product_id){idmatch=1}}}
if(idmatch==''){var fprod={}
fprod.pid=data.product_id;fprod.mpn=FlixServices.maindata.mpn;fprod.ean=FlixServices.maindata.ean;fprod.gvid=data.gvid;fprod.sid=data.session_id;fprod.lan=data.l;fprod.d=data.d;if(window.flixJsCallbacks['ab_'+data.d]!=null&&window.flixJsCallbacks['ab_'+data.d].inpage!=null){fprod.version=window.flixJsCallbacks['ab_'+data.d].ab_version||'';fprod.target=window.flixJsCallbacks['ab_'+data.d].target||'';fprod.visitor_id=window.flixJsCallbacks['ab_'+data.d].ab_visitor_id||'';fprod.groups=window.flixJsCallbacks['ab_'+data.d].ab_groups||'';fprod.ab_id=window.flixJsCallbacks['ab_'+data.d].ab_id||'';fprod.device=window.flixJsCallbacks['ab_'+data.d].device||'';}
if(typeof tc_vars!='undefined'&&typeof tc_vars.product_id!='undefined')
fprod.prodretailerpid=tc_vars.product_id;if(typeof digitalData!='undefined'&&typeof digitalData.product[0].productInfo.sku!='undefined'&&typeof digitalData.product[0].productInfo.sku!='undefined')
fprod.retailersku=digitalData.product[0].productInfo.sku;flixprod.push(fprod);var jsonObject=JSON.stringify(flixprod);sessionStorage.setItem('flix',jsonObject);}}}catch(ignore){}
window.flixJsCallbacks.imgCache[track].src=(!!processed)?processed:url;window.flixJsCallbacks.imgCache[track].event_type=data.event_type;if(_beatNotActive.indexOf(+data.d)<0&&data.event_type==='cart_click'){setTimeout(function(){beat='img_'+(new Date()).getTime();},0);window.flixJsCallbacks.imgCache[beat]=new Image();window.flixJsCallbacks.imgCache[beat].src=_beatUrlnew+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;if(window.flixJsCallbacks['ab_'+data.d]!=null&&window.flixJsCallbacks['ab_'+data.d].inpage!=null){setTimeout(function(){beat='img_'+(new Date()).getTime();},0);window.flixJsCallbacks.imgCache[beat]=new Image();var _beatUrlnew2=_beatUrlnew;_beatUrlnew2='//rt.flix360.io/beat';if(_base.search('dev')!=-1||flixtracking.site_url.search('dev')!=-1||flixtracking.site_url.search('alpha')!=-1||(location.href.search('flix360.io')!=-1&&location.href.search('live=0')!=-1))
_beatUrlnew2='//alpha-rt.flix360.com/beat'
var ab_version=window.flixJsCallbacks['ab_'+data.d].version||'';var target=window.flixJsCallbacks['ab_'+data.d].target||'';var ab_visitor_id=window.flixJsCallbacks['ab_'+data.d].visitor_id||'';var ab_groups=window.flixJsCallbacks['ab_'+data.d].groups||'';var ab_id=window.flixJsCallbacks['ab_'+data.d].ab_id||'';var device=window.flixJsCallbacks['ab_'+data.d].device||'';if(url.search('&visitor_id')==-1)
url=url+"&version="+ab_version+"&target="+target+"&visitor_id="+ab_visitor_id+"&groups="+ab_groups+"&ab_id="+ab_id+"&device="+device;window.flixJsCallbacks.imgCache[beat].src=_beatUrlnew2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}
else if(typeof(ab_hotspot_data)!="undefined"){if(ab_hotspot_data!=null){var ab_visitor_id=ab_hotspot_data.visitor_id;var ab_version=ab_hotspot_data.version
var ab_groups=ab_hotspot_data.groups
if(url.search('&visitor_id')==-1)
url+="&visitor_id="+ab_visitor_id+"&version="+ab_version+"&groups="+ab_groups;}}
if(data.l)
data.language=data.l;},attachFlix:function(data){logqa('attachFlix');data.type='attach'
flixtracking.log(data);},noshow:function(data){logqa('noshow');if(!data.product_id)
data.product_id="0";if(!data.product)
data.product="0";if(data.type!='interactive'||(typeof window.flixContentHolder=='undefined'||typeof window.flixContentHolder.mobileHotspotData=='undefined'||window.flixContentHolder.mobileHotspotData.hotspots==0)){flixtracking.log(data);}},adjacency:function(data){logqa('adjacency');var opts=JSON.parse(JSON.stringify(data));opts.type='adjacency';const adjacenciesElements=document.querySelectorAll('[data-flixadjacencies]');function findClosestModule(element){while(element&&!element.hasAttribute('data-module')){element=element.parentElement;}
return element?element.getAttribute('data-module'):null;}
const moduleNames=Array.from(adjacenciesElements).nt)).fildex);if(FlixServices.modular_match_data[1])
var adjacent_data1=FlixServices.modular_match_data[1]
else
var adjacent_data1=FlixServices.modular_match_data[0]
if(opts.event_detail=='hotspot'){FlixjQ.each(adjacent_data1.product_meta.match_data.adj_match,function(index,values){if(values.match_id){opts.adjacencymatch_id=values.id;opts.match_id=values.match_id;opts.match_type=values.mtadjcnt;if(typeof flixhotspot!='undefined'&&flixhotspot.results){var results=JSON.stringify(flixhotspot.results.hotspots);if(results.search(index)!=-1){logqa('hotspot adjacency page');flixtracking.log(opts);}}else if(typeof flixhotspotmob!='undefined'){var results=JSON.stringify(flixhotspotmob.results.hotspots);if(results.search(index)!=-1){logqa('hotspot adjacency page');flixtracking.log(opts);}}}});}else{flixtracking.checkModuleExists('[data-flixadjacencies]').then((elm)=>{if(FlixjQ('[data-flixadjacencies]').length){var AdjArray=[],uniqueArray=[];FlixjQ('[data-flixadjacencies]').each(function(index,values){var adjvalue=FlixjQ(this).attr('data-flixadjacencies');AdjArray.push(adjvalue);AdjArray.forE;}});});FlixjQ.each(adjacent_data1.product_meta.match_data.adj_match,function(index,values){if(uniqueArray.includes(index)===true){logqa('Adjacency page load - '+uniqueArray+" index - "+index);if(values.match_id){opts.adjacencymatch_id=values.id;opts.match_id=values.match_id;if(values.mtadjcnt)
opts.match_type=values.mtadjcnt;else if(values.match_type)
opts.match_type=values.match_type;flixtracking.log(opts);}}});}
FlixjQ('span[data-flixadjacencies], [data-flixadjacencies][data-flix-media]').each(function(index,values){if(!FlixjQ(this).hasClass('flix-adj')){FlixjQ(this).addClass('flix-adj');var thisadj=FlixjQ(this);var adjvalue=FlixjQ(this).attr('data-flixadjacencies');if(FlixjQ(this).closest('[data-flix-media]').length){FlixjQ(this).closest('[data-flix-media]').on('click',function(event){opts.type='adjacency';logqa('Adjacency click -'+adjvalue);if(FlixServices.modular_match_data[1])
var adjacent_data1=FlixServices.modular_match_data[1]
else
var adjacent_data1=FlixServices.modular_match_data[0]
const closestModule=event.target.closest('[data-module]');moduleValue=closestModule?closestModule.getAttribute('data-module'):null;FlixjQ.each(adjacent_data1.product_meta.match_data.adj_match,function(index,values){if(index==adjvalue){opts.adjacencymatch_id=values.id;opts.match_id=values.match_id;opts.match_type=values.match_type;flixtracking.logMedia(opts,adjvalue,moduleValue);}});});}else{FlixjQ(this).on('click',function(event){opts.type='adjacency';logqa('Adjacency click -'+adjvalue);const closestModule=event.target.closest('[data-module]');moduleValue=closestModule?closestModule.getAttribute('data-module'):null;FlixjQ.each(adjacent_codes,function(index,values){if(index==adjvalue){opts.adjacencymatch_id=values.id;opts.match_id=values.match_id;opts.match_type=values.mtadjcnt;if(thisadj.closest('[id^=flixinpage]').find('span[id^=inpage-data]').length){var prodid=thisadj.closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id');opts.product_id=prodid.toString().replace('inpage-data-','')
flixtracking.logMedia(opts,adjvalue,moduleValue);}}});});}}});});}},viewtimes:{init:function(){logqa('viewtimes init')
var modular_match_data=''
if(typeof FlixServices.modular_match_data[0]!='undefined')
modular_match_data=FlixServices.modular_match_data[0]
else if(typeof FlixServices!='undefined'&&FlixServices.modular_match_data&&typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.minisitePage!='undefined')
modular_match_data=FlixServices.modular_match_data
document.addEventListener("visibilitychange",function(){logqa('inpage/mini dwell init')
if(document.visibilityState==="hidden"){var lastt=flixJsCallbacks.starttime;var type='traffic';var tdiff=Date.now()-lastt;tdiff='page_time_'+tdiff;flixtracking.logging('traffic','page_dwelltime',null,tdiff);flixJsCallbacks.starttime=Date.now();}else if(document.visibilityState=='visible'){}});if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.minisitePage=='undefined'){var intarget='#inpage_container[data-flx-p]'
flixtracking.products.viewtimes.checkModuleExists(intarget).then((elm)=>{FlixjQ(intarget).each(function(no){FlixjQ(this).attr('no',no);var type='inpage'
var eventtype='service'
var prodid=this.getAttribute('data-flx-p');if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});}
if(typeof FlixServices!='undefined'&&FlixServices.modular_match_data&&typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.minisitePage!='undefined'){var minitarget='#minisite_tabs'
flixtracking.products.viewtimes.checkModuleExists(minitarget).then((elm)=>{FlixjQ('#container:eq(0)').each(function(no){FlixjQ(this).attr('no',no);var type='minisite'
var eventtype='service'
var prodid=modular_match_data.product_meta.product_id;FlixjQ('#minisite_tabs').attr('data-flx-p',prodid);data=FlixjQ.fn.minisite.data;data['type']=type;flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});}
var hottarget='#flix_hotspots'
flixtracking.products.viewtimes.checkModuleExists(hottarget).then((elm)=>{if(FlixjQ(hottarget+' .flix_hs').length){FlixjQ(hottarget).each(function(no){var matchhot=modular_match_data;var type='interactive'
var eventtype='service'
var prodid=matchhot.product_meta.hotspot.product_id;var data=window.flixhotspot.data;data.type='interactive'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})}});var hotmobtarget='#flix_hotspotsmob'
flixtracking.products.viewtimes.checkModuleExists(hotmobtarget).then((elm)=>{if(FlixjQ(hotmobtarget+' div').length){FlixjQ(hotmobtarget).each(function(no){var matchhot=modular_match_data;var type='interactive'
var eventtype='service'
var prodid=matchhot.product_meta.hotspot.product_id;var data=window.flixhotspot.data;data.type='interactive'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})}});var ctv1target='#inpage_container #flix-comp'
flixtracking.products.viewtimes.checkModuleExists(ctv1target).then((no)=>{FlixjQ(ctv1target).each(function(no){var type='compare'
var eventtype='service'
if(this.closest('[data-flx-p]')!=null)
var prodid=this.closest('[data-flx-p]').getAttribute('data-flx-p')
else if(modular_match_data.modules.comparison_tables)
var prodid=modular_match_data.modules.comparison_tables.product_id
if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));data.type='compare'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});var ctv2target='#inpage_container #flix-compv2'
flixtracking.products.viewtimes.checkModuleExists(ctv2target).then((no)=>{FlixjQ(ctv2target).each(function(no){var type='compare'
var eventtype='service'
if(this.closest('[data-flx-p]')!=null)
var prodid=this.closest('[data-flx-p]').getAttribute('data-flx-p')
else if(modular_match_data.modules.comparison_tables)
var prodid=modular_match_data.modules.comparison_tables.product_id
if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));data.type='compare'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});var reviewtarget='#inpage_container [flixtemplate-key="reviews"],#inpage_container [flixtemplate-key="complimentary_reviews"]'
flixtracking.products.viewtimes.checkModuleExists(reviewtarget).then((no)=>{FlixjQ(reviewtarget).each(function(no){var type='review'
var eventtype='service'
var prodid=''
if(this.closest('[data-flx-p]')!=null)
prodid=this.closest('[data-flx-p]').getAttribute('data-flx-p')
else if(modular_match_data.modules.reviews)
prodid=modular_match_data.modules.reviews.product_id
if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));data.type='review'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});var threeptarget='[flixtemplate-key="thirdPartyApp"]'
flixtracking.products.viewtimes.checkModuleExists(threeptarget).then((no)=>{FlixjQ(threeptarget).each(function(no){var type='3p'
var eventtype='service'
var prodid=this.closest('[data-flx-p]').getAttribute('data-flx-p')
if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));data.type='3p'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});var ugctarget='[flixtemplate-key="ugcs"]'
if(FlixjQ('#minisite_tabs').length)
ugctarget='#inpage_container [flixtemplate-key="ugcs"]'
flixtracking.products.viewtimes.checkModuleExists(ugctarget).then((no)=>{FlixjQ(ugctarget).each(function(no){const matchhot=modular_match_data;var type='ugc'
var eventtype='service'
var prodid=matchhot.modules.ugcs.product_id;if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));data.type='ugc'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});var threedfwtarget='[flixtemplate-key="view3dfm"]'
flixtracking.products.viewtimes.checkModuleExists(threedfwtarget).then((no)=>{FlixjQ(threedfwtarget).each(function(no){const matchhot=modular_match_data;var type='3dfw'
var eventtype='service'
var prodid=matchhot.modules.view3dfm.product_id;if(typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));data.type='3dfw'
flixtracking.products.viewtimes.checkViewState(this,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});})});var sistarget='[id^="flixmicrosite_"]'
flixtracking.products.viewtimes.checkModuleExists(sistarget).then((no)=>{FlixjQ(sistarget).each(function(no){var target=this
setTimeout(function(){var type='sis'
var eventtype='service'
var data=FlixjQ.fn.microsite.data
data.type='sis'
flixtracking.products.viewtimes.checkViewState(target,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});},1500);})});flixtracking.products.viewtimes.checkModuleExists('[data-module-id]').then((no)=>{FlixjQ('[data-module-id]').each(function(no){var moduleId=FlixjQ(this).attr('data-module-id');FlixjQ(this).attr('data-module',moduleId);FlixjQ(this).removeAttr('data-module-id');})});var modtarget='#inpage_container [data-module], #minisite_tabs [data-module]'
flixtracking.products.viewtimes.checkViewModuleExists(modtarget,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});var modtarget='.share-bubble [data-module], .share-bubblemob [data-module]'
flixtracking.products.viewtimes.checkViewModuleExists(modtarget,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});},visibilitychange:function(){},checkModuleExists:function(target){return new Promise(resolve=>{const observer=new MutationObserver(mutations=>{if(document.querySelector(target)){var thismod=''
var modtarget=document.querySelector(target)
if(modtarget.hasAttribute('data-module')){thismod=modtarget.getAttribute('data-module')+'-'+Math.random().toString(36).slice(2,7);if(modtarget.hasAttribute("data-modtarget")==false)
modtarget.setAttribute('data-modtarget',thismod)
else
thismod=modtarget.getAttribute("data-modtarget")}
else if(modtarget.hasAttribute('data-module-id')){thismod=modtarget.getAttribute('data-module-id')+'-'+Math.random().toString(36).slice(2,7);if(modtarget.hasAttribute("data-modtarget")==false)
modtarget.setAttribute('data-modtarget',thismod)
else
thismod=modtarget.getAttribute("data-modtarget")}
else if(modtarget.querySelectorAll('[data-module]')[0]){thismod=modtarget.querySelectorAll('[data-module]')[0].getAttribute('data-module')+'-'+Math.random().toString(36).slice(2,7);if(modtarget.querySelectorAll('[data-module]')[0].hasAttribute("data-modtarget")==false)
modtarget.querySelectorAll('[data-module]')[0].setAttribute('data-modtarget',thismod)
else
thismod=modtarget.querySelectorAll('[data-module]')[0].getAttribute("data-modtarget")}
resolve(document.querySelector(target));observer.disconnect();}});observer.observe(document.body,{childList:true,subtree:true});});},checkViewModuleExists:function(target){if(document.querySelectorAll(target)){var mods=document.querySelectorAll(target)
for(i=0;i<mods.length;++i){handledTarget(mods[i])}}
function handledTarget(modtarget){if(modtarget.getAttribute('data-modv')==null){modtarget.setAttribute('data-modv',1)
var type='inpage'
if(typeof FlixServices!='undefined'&&FlixServices.modular_match_data&&typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.minisitePage!='undefined')
type='minisite'
else if(target.search('share-bubble')!=-1)
type='interactive'
var eventtype='module'
if(modtarget.closest('[data-flx-p]')!=null)
var prodid=modtarget.closest('[data-flx-p]').getAttribute('data-flx-p')
if(type=='inpage'&&typeof FlixServices.inpagedata!='undefined')
var data=FlixServices.inpagedata[prodid];else if(type=='minisite'&&typeof FlixjQ.fn.minisite.data!='undefined'&&typeof FlixjQ.fn.minisite.data!='undefined')
var data=JSON.parse(JSON.stringify(FlixjQ.fn.minisite.data));else if(type=='interactive'){var data=JSON.parse(JSON.stringify(flixhotspot.data));}
flixtracking.products.viewtimes.checkViewState(modtarget,type,eventtype,data,function(this2,status){if(status=='inside'){}
if(status=='leaving'){}});}}
const observer=new MutationObserver(mutations=>{for(var mutation of mutations){var mods=mutation.target.querySelectorAll(target)
for(i=0;i<mods.length;++i){handledTarget(mods[i])}}});observer.observe(document.body,{childList:true,subtree:true});},checkViewState:function(target,ptype,eventtype,opts,mycallback){const config={rootMargin:'0px 0px 0px 0px',threshold:0};let isLeaving=false;let observer=new IntersectionObserver(function(entries,self){var delay=0;entries.forEach(function(entry){var thismod=''
if(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0){if(target.hasAttribute('data-module')){thismod=target.getAttribute('data-module')+'-'+Math.random().toString(36).slice(2,7);if(target.hasAttribute("data-modtarget")==false)
target.setAttribute('data-modtarget',thismod)
else
thismod=target.getAttribute("data-modtarget")}
else if(target.hasAttribute('data-module-id')){thismod=target.getAttribute('data-module-id')+'-'+Math.random().toString(36).slice(2,7);if(target.hasAttribute("data-modtarget")==false)
target.setAttribute('data-modtarget',thismod)
else
thismod=target.getAttribute("data-modtarget")}
else if(target.querySelectorAll('[data-module]')[0]){thismod=target.querySelectorAll('[data-module]')[0].getAttribute('data-module')+'-'+Math.random().toString(36).slice(2,7);if(target.querySelectorAll('[data-module]')[0].hasAttribute("data-modtarget")==false)
target.querySelectorAll('[data-module]')[0].setAttribute('data-modtarget',thismod)
else
thismod=target.querySelectorAll('[data-module]')[0].getAttribute("data-modtarget")}else if(target.closest('[data-module]')){thismod=target.closest('[data-module]').getAttribute('data-module')+'-'+Math.random().toString(36).slice(2,7);if(target.closest('[data-module]').hasAttribute("data-modtarget")==false)
target.closest('[data-module]').setAttribute('data-modtarget',thismod)}
if(opts)
opts.modtarget=thismod;if(entry.isIntersecting){if(typeof opts!='undefined'){flixtracking.logging(ptype,eventtype+'_view',opts,'');}
target.dataset.flixtime3=Date.now();delay+=100;if(entry.target){}
isLeaving=true}else if(isLeaving){var lastt=target.getAttribute('data-flixtime3');var tdiff=Date.now()-lastt;tdiff=ptype+'_time_'+tdiff;if(typeof opts!='undefined')
flixtracking.logging(ptype,eventtype+'_viewtime',opts,tdiff);target.removeAttribute('data-flixtime3')
isLeaving=false;}}});},config);if('IntersectionObserver'in window){observer.observe(target);}else{}}},getModulePosition:function(moduleString,moduleId,modtarget){if(document.querySelector('[data-modtarget="'+modtarget+'"]')!=null&&document.querySelector('[data-modtarget="'+modtarget+'"]').closest('#inpage_container')&&!document.querySelector('[data-modtarget="'+modtarget+'"]').closest('#minisite_tabs')){var myClass=document.querySelector('[data-modtarget="'+modtarget+'"]').closest('#inpage_container').querySelectorAll('[data-module="'+moduleId+'"]');}else
var myClass=document.querySelectorAll('[data-module="'+moduleId+'"]');var fourth=document.querySelector('[data-modtarget="'+modtarget+'"1;}
var modtargetno=indexInClass(myClass,fourth)
var modlist=moduleString.split(';')
var matchcc=0
for(let i=0;i<modlist.length;i++){if(modlist[i].search(moduleId)!=-1){if(matchcc==modtargetno){return modlist[i]}
if(modtargetno==-1){return modlist[i]}
matchcc++}}
return false;}},checkLoader:function(data){logqa('checkLoader');if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.inPage!='undefined'&&typeof FlixjQ.fn.inPage.urlMain!='undefined')
flixtracking.site_url=FlixjQ.fn.inPage.urlMain;else if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.minisite!='undefined'&&typeof FlixjQ.fn.minisite.urlMain!='undefined')
flixtracking.site_url=FlixjQ.fn.minisite.urlMain;else if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.microsite!='undefined'&&typeof FlixjQ.fn.microsite.urlMain!='undefined')
flixtracking.site_url=FlixjQ.fn.microsite.urlMain;else if(typeof flixmain_api_base_url!='undefined'&&flixmain_api_base_url=='//modular-alpha.flix360.io/')
flixtracking.site_url='//demo.flix360.io/'
flixtracking.trackingDomain='https://media.flixcar.com/';flixtracking.trackingDomainBeat='https://rt.flix360.com/beat/';if(flixtracking.site_url.search('delivery-beta')>0||location.href.search('demo-beta.flix360.io')!=-1||location.href.search('beta=1')!=-1||location.href.search('live=2')!=-1){logqa('beta - beta logs');flixtracking.trackingDomain='https://t-beta.flix360.io/';flixtracking.trackingDomainBeat='https://b-beta.flix360.io/';}
else if(flixtracking.site_url.search('demo.flix360.io')!=-1||flixtracking.site_url.search('delivery-alpha')!=-1||location.href.search('demo-local.flix360.io')!=-1||location.href.search('demo-alpha.flix360.io')!=-1||location.href.search('alpha=1')!=-1||location.href.search('live=3')!=-1||location.href.search('modloader.php?live=0')!=-1){logqa('alpha - alpha logs');flixtracking.trackingDomain='https://t-alpha.flix360.io/';flixtracking.trackingDomainBeat='https://b-alpha.flix360.io/';}
flixtracking.checkLoaderloaded=true},log:function(data,status){logqa('log',data,status);setTimeout(function(){flixtracking.globalTracking(data);},3000);if(!data.distributor_id&&data.distributor)
data.distributor_id=data.distributor;if(!data.distributor&&data.distributor_id)
data.distributor=data.distributor_id;if(!data.distributor&&data.d)
data.distributor=data.d;flixtracking.noTracking=false;if((typeof flixtracking.noTracking!='undefined'&&flixtracking.noTracking==false)){if(flixtracking.checkLoaderloaded==false)
flixtracking.checkLoader(data);var notrackingretailers=[157,178,499,546,877,1590,2694,4212,5227,6069,6543,6558,6791,6792,6900,6971,7148,7417,8598,9253,12498,14209,15237,16260,17538,18122];if(notrackingretailers.indexOf(parseInt(data.distributor))!=-1){logqa('This is NO TRACKING retailer');return false;}
if(flixtracking.trackingDomain=='')
flixtracking.trackingDomain='https://media.flixcar.com/'
if(flixtracking.trackingDomain.search('media.flixcar.com/')==-1&&flixtracking.trackingDomain.search('syndication.flix360.com/')==-1){var baseurl=flixtracking.trackingDomain+'log.gif';}else
var baseurl=flixtracking.trackingDomain+data.type+'/log.gif';if(data.type=='3d'){baseurl='https://media.flixcar.com/interactive/3d/log.gif'}
if(data.type=='3p'){baseurl=flixtracking.trackingDomain+'3p/log.gif'}
if(data.type=='adjacency'){baseurl=flixtracking.trackingDomain+'adjacency/log.gif'}
var d=new Date(),t='',_base=baseurl,_beatUrl=flixtracking.trackingDomainBeat,_beatNotActive=window.beat_disabled_retailers||[],_beatByLanguage=[],beat,processed=null,encrypt=[],userAgents=['symbian','android','ios'];if(!data.session_id){if(typeof window!=='undefined'&&typeof window.sessionStorage==='object')
var guid=sessionStorage.getItem('flixsession');if(guid&&guid.length)
data.session_id=guid
else{data.session_id=flixtracking.setGuid.New();if(typeof window!=='undefined'&&typeof window.sessionStorage==='object')
sessionStorage.setItem('flixsession',data.session_id);}}
if(!data.distributor_id)
data.distributor_id=data.distributor;if(!data.distributor)
data.distributor=data.distributor_id;d.setMinutes(d.getTimezoneOffset());window.flixJsCallbacks.pageViewnew=window.flixJsCallbacks.pageViewnew||{log:false,beat:false};if(!data.page_name){var page=this.getURL();data.page_name=page;}
data.gvid=(window.flixJsCallbacks&&window.flixJsCallbacks.gvid)?window.flixJsCallbacks.gvid:'';if(typeof FlixjQ!='undefined'&&FlixjQ.fn.inPage&&FlixjQ.fn.inPage.hasOwn(data.ab_data)&&data.ab_data.expire!=='expired'){var cookieab=''
if(typeof data.ab_data.cookie!='undefined'&&typeof data.ab_data.cookie.abid!='undefined')
cookieab=data.ab_data.cookie.abid
data.ab="&ab="+data.ab_data.tst_id+"&abr="+data.ab_data.resource_ref+"&abid="+cookieab;if(!FlixjQ.fn.inPage.defaults.sio_ty){FlixjQ.fn.inPage.writeSioTy(window.flixJsCallbacks.gvid,data.ab_data);FlixjQ.fn.inPage.defaults.sio_ty++;}}
if(data.type&&data.type=='minisite'){pn=window.location.search.match(/\bpn\b=([^&]+)/i);if(!window.location.href.search('minisite')==-1)
data.page_name=(!!pn)?pn[1]:'URL not available - Manual http links';}
if(data.type==''||!data.type)
data.type=='inpage'
var url=_base+"?newtrackv2&ver=v2&ts="+data.type+"&d="+data.distributor+"&l="+data.language+"&et="+data.event_type+"&vtime="+(data.view_time||data.vtime||0)+"&gvid="+data.gvid+"&cs="+flixtracking.tracking+"&cp="+flixtracking.cookieConsent.provider+"&cd="+flixtracking.cookieConsent.data+"&sid="+data.session_id;if(data.event_detail&&data.event_detail.length)
url+="&ed="+encodeURIComponent(data.event_detail)
else
url+="&ed="+""
if(typeof FlixjQ!='undefined'&&(FlixjQ('#flix-mbl-page').length||FlixjQ('.main_mot_product_wrapper').length)&&data.type=='inpage'&&data.event_type=='page'){url+="&mot=1";}
if(data.app_id&&data.type=='3p'){url+="&app_id="+data.app_id;}
if(flixtracking.retailercheck&&flixtracking.retailercheck.check==false){flixtracking.retailercheck.init(data);}
if(flixtracking.retailercheck&&flixtracking.retailercheck.cn&&flixtracking.retailercheck.cn.length>1){url+="&cn="+flixtracking.retailercheck.cn+"&cc="+flixtracking.retailercheck.cc;}
if(data.match_id&&data.match_id.length>0){if(data.match_id)
url+="&mi="+data.match_id
if(data.match_type)
url+="&mt="+data.match_type;}else if(typeof FlixjQ!='undefined'&&typeof window.matching_data!='undefined'){var prodid=data.product_id||data.product||data.productid
if(typeof window.matching_data.main!='undefined'){FlixjQ.each(window.matching_data.main.data,function(index,values){if(prodid==index){if(values.match_id)
url+="&mi="+values.match_id
if(values.match_type)
url+="&mt="+values.match_type;if(values['match_type '])
url+="&mt="+values['match_type '];}});}
if(typeof window.matching_data.complimentary!='undefined'){FlixjQ.each(window.matching_data.complimentary.data,function(index,values){if(prodid==index){if(values.match_id)
url+="&mi="+values.match_id
if(values.match_type)
url+="&mt="+values.match_type;if(values['match_type '])
url+="&mt="+values['match_type '];}});}}
if(data.type=='adjacency'){url+="&adjacency_id="+data.adjacencymatch_id;}
if(typeof flixtracking.isMobile!='undefined'){url+="&ism="+flixtracking.isMobile();}
if(data.microsite&&data.microsite!='')
url+="&s="+data.microsite;if(data.variant)
url+="&v="+data.variant;if(window.flreq){var fblan=window.flreq
for(var i=0;i<fblan.length;i++){if(data.type==fblan[i].flreq_service&&url.search('&l1=')==-1){if(fblan[i].flreq_language&&fblan[i].flreq_language!='null'){var origlan=fblan[i].flreq_language
var falllan=fblan[i].language
url+="&l1="+origlan+"&l2="+falllan;}else{var origlan=fblan[i].language
url+="&l1="+origlan}}}}
if(url.search('&l1=')==-1&&data.language){url+="&l1="+data.language}
if(!data.productid)
data.productid=data.product_id||data.product||data.productid||''
url+="&p="+data.productid;if(flixtracking.traffic.indexOf(data.productid)==-1){logqa('no match'+data.productid);var datatraffic=JSON.parse(JSON.stringify(data));datatraffic.type='traffic';datatraffic.event_type='traffic';datatraffic.event_detail='';if(data.productid.length>2){flixtracking.traffic.push(data.productid);flixtracking.log(datatraffic);if(data.distributor==7109){setTimeout(function(){if(typeof flixtracking.test2=='undefined'){datatraffic.type='test';datatraffic.event_type='test2';datatraffic.event_detail='fload';flixtracking.log(datatraffic);flixtracking.test2=1}},1000);window.onunload=function(){datatraffic.type='test';datatraffic.event_type='test2';datatraffic.event_detail='unload';flixtracking.log(datatraffic);};}}else{setTimeout(function(){if(flixtracking.traffic.length==0)
flixtracking.log(datatraffic);flixtracking.traffic.push(data.productid)},1000);}}
if(data.event_type=='matchmiss'||data.event_type=='matchmisshotspot'||data.event_type=='matchmissinpage'){url+="&m=0";}
else if(data.type&&(data.type=='inpage'||data.type=='interactive')){url+="&m=y";}
else if(data.type&&data.type=='minisite'){url+="&m="+(data.minisite_id||data.minisite||data.product_id)}
else if(data.type&&(data.type=='review'||data.type=='compare'||data.type=='3dfw'||data.type=='ugc'||data.type=='logo'||data.type=='visible'||data.type=='flc')){url+="&m=i"}
if(data.type&&data.type=='minisite'&&typeof _FFMatcher!='undefined'&&window.location.href.search('minisite')==-1&&data.event_type!='matchmiss')
url+=this.pageDataMinisite(data);else
url+=this.pageData(data);if(data.type&&data.type=='minisite'&&window.location.href.search('minisite')==-1&&data.event_type!='matchmiss'){}
if(typeof window.flixJsCallbacks.imgCache==='undefined'){window.flixJsCallbacks.imgCache={};}
if(!window.navigator.userAgent.match(/(ios|symbian|android)/i)&&data.distributor_id&&(encrypt.indexOf(+data.distributor_id)>=0)){processed=FlixjQ.fn.inPage.process(url);}
url+="&ut="+d.getTime();url+="&cb="+d.getTime();if(data.type&&data.type=='minisite'){url+="&to="+d.getTimezoneOffset();url+="&ss="+screen.width+'x'+screen.height;url+="&pr="+data.price;url+="&a="+data.asset}
if(data.event_type=='cart_click'||data.event_type=='alert'){url+="&pn="+data.page_name;}
if(url.search('&pn=')==-1&&data.type=="3dfw"){if(data.pn)
var three3url=data.pn;else if(document.referrer)
var three3url=document.referrer;url+="&pn="+encodeURIComponent(three3url);if(data.arid)
url+="&arid="+data.arid;}
if(url.search('=mediaload')!=-1&&(url.search('&pn=')==-1||url.substring(url.length-4)=='&pn=')){url=url.replace('&pn=','');var pnurl=''
if(flixtracking.getUrlParameter('pn'))
pnurl=flixtracking.getUrlParameter('pn');pnurl=pnurl.replace(/\|and/g,'&');pnurl=pnurl.replace(/\|for/g,'//');pnurl=pnurl.replace(/\|que/g,'?');pnurl=pnurl.replace(/\|dub/g,':');pnurl=pnurl.replace(/\|is/g,'=');pnurl=pnurl.replace(/\|hash/g,'#');pnurl=pnurl.replace(/\|per/g,'%');if(pnurl)
url+='&pn='+encodeURIComponent(pnurl);}
if(typeof pnurl!='undefined'&&(data.event_type=='mediatime'||data.event_type=='mediaload')&&url.search('&pn=')==-1){url+="&pn="+encodeURIComponent(data.pn);}
if(url.search('&pn=')==-1&&typeof window.flixJsCallbacks.pageCapture!='undefined'&&typeof window.flixJsCallbacks.pageCapture.pn!='undefined'){url+="&pn="+encodeURIComponent(window.flixJsCallbacks.pageCapture.pn);}
if(url.search('&pn=')==-1&&typeof data.page_name!='undefined'){url+="&pn="+encodeURIComponent(data.page_name);}
if(url.search('ref=&')!=-1||url.search('ref')==-1){if(document.referrer!=null&&document.referrer.length>1){url=url.replace('ref=&','')
url+="&ref="+document.referrer;}}
if(data.ct&&data.type=='compare'){url+="&ct="+data.ct;}
if(url.search('&pn=undefined')!=-1||url.search('&pn=&')!=-1){url=url.replace('&pn=undefined','');url=url.replace('&pn=&','&');if(window.parent){var pnurl=(window.location!=window.parent.location)?document.referrer:top.document.URL;}else{var pnurl=document.location.href;}
if(pnurl=='')
var pnurl=document.location.href;url+='&pn='+encodeURIComponent(pnurl);}
var listingService,lMv;if(typeof FlixServices!='undefined'&&typeof FlixServices.modular_match_data=='object'){listingService=FlixServices.modular_match_data;}
if(data.product_id!='undefined'&&typeof FlixServices!='undefined'&&typeof FlixServices.inpagedata!='undefined'&&FlixServices.inpagedata[data.product_id]){lMv=FlixServices.inpagedata[data.product_id].prodNo;}
if(listingService!=null){function extractNumberFromModuleString(moduleString,moduleId,modtarget){const regex=new RegExp(`${moduleId}-([0-9]+)`);const match=moduleString.match(regex);return match?parseInt(match[1],10):null;}
if(data.type&&data.type=='inpage'&&data.event_type=='page'){let concatenatedValues="";const flixmodules=listingService[lMv];let moduleMapping={};const module_template_wrapper=listingService[lMv].settings.module_template_wrapper;const loadedModules=listingService[lMv].settings.loaded_modules;let correspondingModuleId;let FM0005AModuleId=[];const templateOrder=Array.from(document.createRange().createContextualFragment(module_template_wrapper).querySelectorAll('[flixtemplate-key]')).y'));function extractModuleIds(data){if(data&&typeof data==='object'&&data.hasOwnProperty('module_id')&&data.hasOwnProperty('module_mapper')&&!data.hotspot&&!data.minisite&&!data.module_mapper.includes("module_wrapper")){const templateKey=data.module_mapper;if(!moduleMapping.hasOwnProperty(templateKey)){moduleMapping[templateKey]=[];}
if(data.module_id=='FM0005A'){const targetClass=data.target_item.slice(1);for(const moduleId in loadedModules){if(loadedModules.hasOwnProperty(moduleId)){if(loadedModules[moduleId].includes(targetClass)){correspondingModuleId=moduleId;break;}}}
FM0005AModuleId.push(correspondingModuleId);}
moduleMapping[templateKey].push(data.module_id);}
for(const key in data){if(key!=='hotspot'&&key!=='minisite'&&data[key]&&typeof data[key]==='object'){extractModuleIds(data[key]);}}``}
extractModuleIds(flixmodules);let sortedModuleMappings=[];templateOrder.forEach(templateKey=>{if(moduleMapping.hasOwnProperty(templateKey)){moduleMapping[templateKey].forE);});}});const inpageModulesoutput=sortedModuleMappings.filter((mapping,index,self)=>mapping.module_id!=='FM00015A'||self.findIn_id)===index)._id);let inpageDuplicate=inpageModulesoutput.filId));const replacedModulesOutput=inpageDuplicate.map(moduleId=>{if(moduleId==='FM0005A'){return FM0005AModuleId.shift()||moduleId;}
return moduleId;}).map((value,index)=>`${value}-${index + 1}`).join(';');url+="&mids="+encodeURIComponent('#')+replacedModulesOutput;flixtracking.replacedModulesOutputInpage.push(replacedModulesOutput);}else if(data.type&&FlixjQ('#minisite_tabs').length==0&&data.type=='inpage'&&(data.event_type=='module_viewtime'||data.event_type=='module_view')){var target=data.modtarget.split('-')
var compMod=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}
if(data.type&&data.type=='minisite'&&data.event_type=='click'){var outputOfModules="";var modules=FlixjQ('[data-module]');modules.each(function(index){var currentIndex=index+1;var moduleId=FlixjQ(this).attr('data-module');outputOfModules+=moduleId+"-"+currentIndex+";";});outputOfModules=outputOfModules.slice(0,-1);url+="&mids="+encodeURIComponent('#')+outputOfModules;flixtracking.replacedModulesOutputMinisite.push(outputOfModules);}else if(data.type&&data.type=='minisite'&&(data.event_type=='module_view'||data.event_type=='module_viewtime')){var target=data.modtarget.split('-')
var compMod=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}
if(data.type&&data.type=='interactive'&&data.event_type=='page'){if(typeof listingService[lMv].modules.hotspot=='object'){const jsonData=listingService[lMv].modules;const hotspotModuleIds=[];function processHotspotItem(item){if(item&&item.module_id&&item.module_id!=='FM00035'&&item.module_id!='FM00037'){hotspotModuleIds.push(item.module_id);}else if(item&&item.data&&Array.isArray(item.data)){item.data.forE;}});}}
for(const key in jsonData.hotspot){const item=jsonData.hotspot[key];processHotspotItem(item);}
const hresult=hotspotModuleIds.map((value,index)=>`${value}-${index + 1}`).join(";");url+="&mids="+encodeURIComponent('#')+hresult;flixtracking.replacedModulesOutputHs.push(hresult);}}else if(data.type&&data.type=='interactive'&&(data.event_type=='qr_click'||data.event_type=='webar_click'||data.event_type=='qr_impression'||data.event_type=='webar_impressions'||data.event_type=='ar_impression'||data.event_type=='launch')){url+="&mid="+encodeURIComponent('#')+'FM00035';}else if(data.type&&data.type=='interactive'&&(data.event_type=='module_view'||data.event_type=='module_viewtime')){var target=data.modtarget.split('-')
var compMod=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputHs[0],compMod,compMod);}
if(data.type&&data.type=='review'&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){var revMod='';if(typeof listingService[lMv]=='object'&&typeof listingService[lMv].modules=='object'&&typeof listingService[lMv].modules.reviews=='object'){compMod=listingService[lMv].modules.reviews.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}else if(typeof listingService[lMv]=='object'&&typeof listingService[lMv].modules=='object'&&typeof listingService[lMv].modules.complimentary_reviews=='object'){compMod=listingService[lMv].modules.complimentary_reviews.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}else if(typeof listingService=='object'&&typeof listingService.modules=='object'&&typeof listingService.modules.reviews=='object'){compMod=listingService.modules.reviews.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}else if(typeof listingService=='object'&&typeof listingService.modules=='object'&&typeof listingService.modules.complimentary_reviews=='object'){compMod=listingService.modules.complimentary_reviews.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}else if(FlixjQ('[flixtemplate-key="complimentary_reviews"]').length&&FlixjQ('[flixtemplate-key="complimentary_reviews"]').find('[data-module]').attr('data-module')){compMod=FlixjQ('[flixtemplate-key="complimentary_reviews"]').find('[data-module]').attr('data-module');if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}
if(!FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputInpage.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],unqtarget,data.modtarget);}else if(FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputMinisite.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,data.modtarget);}}
if(data.type&&data.type=='compare'&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(typeof listingService[lMv]=='object'&&typeof listingService[lMv].modules=='object'&&typeof listingService[lMv].modules.comparison_tables=='object'&&listingService[lMv].modules.comparison_tables!=null){var compMod=listingService[lMv].modules.comparison_tables.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}else if(typeof listingService=='object'&&typeof listingService.modules=='object'&&typeof listingService.modules.comparison_tables=='object'){var compMod=listingService.modules.comparison_tables.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}else if(FlixjQ('.inpage_selector_comparison').length>0&&FlixjQ('.inpage_selector_comparison').attr('data-module-id')){var compMod=FlixjQ('.inpage_selector_comparison').attr('data-module-id');if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}else if(FlixjQ('#flix-comp').length>0&&FlixjQ('#flix-comp').attr('data-module-id')){var compMod=FlixjQ('#flix-comp').attr('data-module-id');url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[data.prodNo],compMod,data.modtarget);}
if(!FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputInpage.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[0],unqtarget,data.modtarget);}else if(FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputMinisite.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,data.modtarget);}}
if(data.type&&data.type=='ugc'&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(typeof listingService[lMv]=='object'&&typeof listingService[lMv].modules=='object'&&typeof listingService[lMv].modules.ugcs=='object'){var compMod=listingService[lMv].modules.ugcs.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+compMod+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputInpage[0],compMod);}else if(typeof listingService=='object'&&typeof listingService.modules=='object'&&typeof listingService.modules.ugcs=='object'){var compMod=listingService.modules.ugcs.module_id;data.modtarget=FlixjQ('[data-module="'+compMod+'"]').attr('data-modtarget')
if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}else if(FlixjQ('[flixtemplate-key="ugcs"]').length&&FlixjQ('[flixtemplate-key="ugcs"]').find('[data-module]').attr('data-module')){var compMod=FlixjQ('[flixtemplate-key="ugcs"]').find('[data-module]').attr('data-module');if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}else if(typeof listingService=='object'&&typeof listingService.modules=='object'&&typeof listingService.modules.ugcs=='object'){var compMod=listingService.modules.reviews.module_id;data.modtarget=FlixjQ('[data-module="'+compMod+'"]').attr('data-modtarget')
if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],compMod,data.modtarget);}
if(!FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputInpage.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[0],unqtarget,data.modtarget);}else if(FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputMinisite.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,data.modtarget);}}
if(data.type&&data.type=='3dfw'&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(typeof listingService[lMv]=='object'&&typeof listingService[lMv].modules=='object'&&typeof listingService[lMv].modules.view3dfm=='object'){var Mod3dfw=listingService[lMv].modules.view3dfm.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+Mod3dfw+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputInpage[0],Mod3dfw);}else if(typeof listingService=='object'&&typeof listingService.modules=='object'&&typeof listingService.modules.view3dfm=='object'){var Mod3dfw=listingService.modules.view3dfm.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime')
url+="&mid="+encodeURIComponent('#')+Mod3dfw+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputInpage[0],Mod3dfw);}
if(!FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputInpage.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[0],unqtarget,data.modtarget);}else if(FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputMinisite.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,data.modtarget);}}
if(data.type&&data.type=='3p'&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(typeof listingService[lMv]=='object'&&typeof listingService[lMv].modules=='object'&&typeof listingService[lMv].modules.thirdPartyApp=='object'){var Mod3p=listingService[lMv].modules.thirdPartyApp.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime'&&data.event_detail!='hotspot'&&data.event_detail.match(/^hot_app_time_/)==null)
url+="&mid="+encodeURIComponent('#')+Mod3p+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputInpage[0],Mod3p);}else if(typeof listingService.modules=='object'&&typeof listingService.modules.thirdPartyApp=='object'){var Mod3p=listingService.modules.thirdPartyApp.module_id;if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime'&&data.event_detail!='hotspot'&&data.event_detail.match(/^hot_app_time_/)==null)
url+="&mid="+encodeURIComponent('#')+Mod3p+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputMinisite[0],Mod3p);}else if(FlixjQ('[flixtemplate-key="thirdPartyApp"]').length&&FlixjQ('[flixtemplate-key="thirdPartyApp"]').find('[data-module]').attr('data-module')){var Mod3p=FlixjQ('[flixtemplate-key="thirdPartyApp"]').find('[data-module]').attr('data-module');if(data.event_type!='media'&&data.event_type!='service_view'&&data.event_type!='service_viewtime'&&data.event_detail!='hotspot'&&data.event_detail.match(/^hot_app_time_/)==null)
url+="&mid="+encodeURIComponent('#')+Mod3p+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputInpage[0],Mod3p);}
if((data.event_detail=='hotspot'||data.event_detail.match(/^hot_app_time_/)!==null)&&flixtracking.replacedModulesOutputHs.length>0&&typeof listingService[lMv].modules.hotspot=='object'&&typeof listingService[lMv].modules.hotspot.product_thirdpartyapp=='object'){Mod3p=listingService[lMv].modules.hotspot.product_thirdpartyapp.module_id;url+="&mid="+encodeURIComponent('#')+Mod3p+'-'+extractNumberFromModuleString(flixtracking.replacedModulesOutputHs[0],Mod3p);}
if(!FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputInpage.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputInpage[0],unqtarget,data.modtarget);}else if(FlixjQ('#minisite_tabs').length>0&&(data.event_type=='service_view'||data.event_type=='service_viewtime')&&flixtracking.replacedModulesOutputMinisite.length>0){var target=data.modtarget.split('-')
var unqtarget=target[0]
url+="&mid="+encodeURIComponent('#')+flixtracking.products.getModulePosition(flixtracking.replacedModulesOutputMinisite[0],unqtarget,data.modtarget);}}
if(data.type&&data.type=='adjacency'&&data.event_type=='page'){}
if((data.type&&data.event_type=='media'&&typeof data.mid!='undefined'&&data.mid!=null)||(data.type&&data.event_type=='click'&&typeof data.mid!='undefined'&&data.mid!=null)){url+="&mid="+encodeURIComponent('#')+data.mid;}}
if(data.mpn&&url.search('&mpn=')==-1)
url+="&mpn="+data.mpn
if(data.ean&&url.search('&ean=')==-1)
url+="&ean="+data.ean
if(!window.flixJsCallbacks.pageViewnew.log&&(data.type=='inpage'||data.type=='minisite')&&data.event_type!='mediaload'&&data.event_type!='time'&&data.event_type!='mediatime'){var initBeaconTime=(new Date()).getTime();url+="&pv=1";window.flixJsCallbacks.pageViewnew.log=true;beaconData=url;if(!beaconData)
return false;function getString(objParams,destructure){var params=[],obj={},prop,stem,preObj,str,fireBeaconTime;var req=["m","p","d","l","sid","gvid","ut","ed","et","vtime","ab","abr","abid","pn"];if(!destructure){for(var p in objParams){if(objParams.hasOwnProperty(p)&&(req.indexOf(p)>=0))params.push(p+"="+objParams[p]);}
return"?"+params.join("&");}
else{stem=objParams.split("?");if(stem.length<=1)return false;params=stem[1].split("&");for(var i=0;i<params.length;i++){prop=params[i].split("=");if(req.indexOf(prop[0])>=0){obj[prop[0]]=prop[1];}}
return obj;}}}
if(data.gvid&&data.gvid.length&&data.session_id&&data.session_id.length){if((!status||status!='beatlog')){logqa('Fire log - '-url)
var track='img_'+(new Date()).getTime();window.flixJsCallbacks.imgCache[track]=new Image();window.flixJsCallbacks.imgCache[track].src=url;window.flixJsCallbacks.imgCache[track].event_type=data.event_type;}else{logqa('beat logs ONLY')}}else{logqa('trackingqueue')
flixtracking.trackingqueue(url);}
if(_beatNotActive.indexOf(+data.distributor_id)<0&&data.event_type!='time'){var fireBeat=false,fireLog=true;logqa('beat logs')
if(!!window.flixJsCallbacks&&!!window.flixJsCallbacks.a&&(data.distributor_id===173&&data.mpn==="49UJ630V")){data.service="inpage";window.flixJsCallbacks.a.log(data);return true;}
var ab_res_id='ab_'+data.distributor_id;if(window.flixJsCallbacks['ab_'+data.distributor]!=null&&(data.type=='review'||data.type=='compare'||(data.type=='ugc'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_ugc!='undefined'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_ugc=="boolean")||(data.type=='3dfw'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_3dfw!='undefined'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_3dfw=="boolean")||(data.type=='3p'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_thirdPartyApp!='undefined'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_thirdPartyApp=="boolean"))){fireBeat=true;}
if(window.flixJsCallbacks[ab_res_id]&&typeof window.flixJsCallbacks[ab_res_id].inpage!='undefined'&&data.type=='inpage'&&((typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage=="boolean")||(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template=="boolean")||(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config=="boolean"))){fireBeat=true}
if(!window.flixJsCallbacks.pageViewnew.beat){if(!url.match(/pv\=1/)&&data.type=='inpage')url+="&pv=1";window.flixJsCallbacks.pageViewnew.beat=true;}
var beaturl=_beatUrl+url.replace(_base,'');if(typeof flixtracking.noTracking!='undefined'&&flixtracking.noTracking==false&&fireBeat){logqa('Beat tracking',url)
if(window.flixJsCallbacks[ab_res_id]!=null){var ab_version=window.flixJsCallbacks[ab_res_id].version||'';var target=window.flixJsCallbacks[ab_res_id].target||'';var ab_visitor_id=window.flixJsCallbacks[ab_res_id].visitor_id||'';var ab_groups=window.flixJsCallbacks[ab_res_id].groups||'';var ab_id=window.flixJsCallbacks[ab_res_id].ab_id||'';var device=window.flixJsCallbacks[ab_res_id].device||'';url+="&version="+ab_version+"&target="+target+"&visitor_id="+ab_visitor_id+"&groups="+ab_groups+"&ab_id="+ab_id+"&device="+device;}
if(data.type=='inpage'){url+="&fm_service=1"}else if(data.type=='minisite'){url+="&fm_service=2";}else if(data.type=='compare'){url+="&fm_service=315";}
else if(data.type=='interactive'){url+="&fm_service=301"}
else if(data.type=='review'){url+="&fm_service=334";}
else if(data.type=='3dfw'){url+="&fm_service=405";}
else if(data.type=='ugc'){url+="&fm_service=410";}
else if(data.type=='3d'){url+="&fm_service=313";}
var beat='img_'+(new Date()).getTime();window.flixJsCallbacks.imgCache[beat]=new Image();var _beatUrl2=_beatUrl;_beatUrl2='//rt.flix360.com/beat';if(window.flixJsCallbacks['ab_'+data.distributor]!=null&&window.flixJsCallbacks['ab_'+data.distributor].inpage!=null){if(flixtracking.trackingDomain.search('alpha')!=-1){_beatUrl2='//alpha-rt.flix360.io/beat'}else{_beatUrl2=_beatUrl2.replace('//rt.flix360.com/beat','');_beatUrl2='//rt.flix360.io/beat'}}else{_beatUrl2=flixtracking.trackingDomainBeat+url.replace(_base,'');}
logqa('_beatUrl2',_beatUrl2+"__"+data.type)
if(window.flixJsCallbacks[ab_res_id]&&typeof window.flixJsCallbacks[ab_res_id].inpage!='undefined'&&data.type=='inpage'&&((typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage=="boolean")||(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template=="boolean")||(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config=="boolean"))){logqa('_beatUrl2 inpage',_beatUrl2+"__"+data.type)
if(window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage==true){if(data.event_type=='impression'||data.event_type=='page'){var targetId=window.flixJsCallbacks[ab_res_id].targetId||0;if(targetId==data.product_id){url=url.replace('&p='+data.product_id,'&p='+(window.flixJsCallbacks[ab_res_id].targetId));window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}}else{var targetId=window.flixJsCallbacks[ab_res_id].targetId||0;if(targetId==data.product_id){if(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config=="boolean"){url+='&smart_config='+window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config+'&smart_config_id='+window.flixJsCallbacks[ab_res_id].inpage.inpages.smart_config_id}
url=url.replace('&p='+data.product_id,'&p='+(window.flixJsCallbacks[ab_res_id].targetId));window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}
var beat='img_'+(new Date()).getTime();window.flixJsCallbacks.imgCache[beat]=new Image();window.flixJsCallbacks.imgCache[beat].src=beaturl
window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}
if(window.flixJsCallbacks[ab_res_id]&&window.flixJsCallbacks[ab_res_id].inpage&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&((typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table=="boolean")||(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage=="boolean")||(typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template=="boolean"))&&data.type=='compare'){logqa('comparison _beatUrl2',_beatUrl2)
if(window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table==true){if(data.event_type=='impression'){window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}else{window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}
if(data.type=='review'||data.type=='ugc'||data.type=='3dfw'||data.type=='3p'){if(window.flixJsCallbacks[ab_res_id]&&window.flixJsCallbacks[ab_res_id].inpage&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'&&((data.type=='review'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_reviews!='undefined'&&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_reviews=="boolean")||(data.type=='ugc'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_ugc!='undefined'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_ugc=="boolean")||(data.type=='3dfw'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_3dfw!='undefined'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_3dfw=="boolean")||(data.type=='3p'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_thirdPartyApp!='undefined'&&typeof flixJsCallbacks[ab_res_id].inpage.inpages.disable_thirdPartyApp=="boolean"))){logqa(data.type+' _beatUrl2',_beatUrl2)
if(window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_reviews==true||window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_ugc==true||window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_3dfw==true||window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_thirdPartyApp==true){if(data.type=='3p'||data.event_type=='page'||data.event_type=='ar_inpage_impression'||data.event_type=='ar_impression'){window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}else{window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}else{window.flixJsCallbacks.imgCache[beat].src=_beatUrl+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}
if(_beatNotActive.indexOf(+data.d)<0&&(data.event_type==='page'||data.event_type==='media'||data.event_type==='qr_click'||data.event_type==='webar_click'||data.event_type==='dwelltime'||data.event_type==='launch'||data.event_type==='webar_impressions'||data.event_type==='qr_impression'||data.event_type==='qr_impression')&&(!status||status=='beatlog')&&data.type=='interactive'){logqa('Hotspot _beatUrl2',_beatUrl2)
beat='img_'+(new Date()).getTime();window.flixJsCallbacks.imgCache[beat]=new Image();if(!window.flixJsCallbacks.pageViewnew.beat){if(!url.match(/pv\=1/))
url+="&pv=1";window.flixJsCallbacks.pageViewnew.beat=true;}
if(target==device){if(window.flixJsCallbacks[ab_res_id]&&window.flixJsCallbacks[ab_res_id].hotspot&&(window.flixJsCallbacks[ab_res_id].hotspot.hotspots||window.flixJsCallbacks[ab_res_id].hotspot.settings)){window.flixJsCallbacks.imgCache[beat].src=_beatUrl2+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}else{window.flixJsCallbacks.imgCache[beat].src=_beatUrl+url.replace(_base,'');window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}}}}else{if(data.gvid&&data.gvid.length&&data.session_id&&data.session_id.length){var beat='img_'+(new Date()).getTime();window.flixJsCallbacks.imgCache[beat]=new Image();window.flixJsCallbacks.imgCache[beat].src=beaturl;window.flixJsCallbacks.imgCache[beat].event_type=data.event_type;}else{flixtracking.trackingqueue(beaturl);}}}
try{if(flixtracking.retailercheck.cc&&typeof flixtracking.retailercheck.cc!='undefined'&&flixtracking.retailercheck.cc.search('true')==-1&&typeof flixtracking.retailercheck.rc=='undefined'&&data.type!='minisite'){logqa('retailercheck again');flixtracking.retailercheck.rc=1;data.type="inpage"
data.event_type="recheck";data.event_detail="";data.view_time=0;for(i=1;i<=5;++i){var b=i*5000;setTimeout(function(){logqa('retailercheck again -init');if(typeof flixtracking!='undefined'){flixtracking.retailercheck.init(data);if(flixtracking.retailercheck.cc.search('true')!=-1){logqa('retailercheck again -found it');flixtracking.log(data);}}},b);}}}catch(ignore){}}else{logqa('No tracking - ');}},logging:function(type,event,data,media,price,inPcount){logqa(type+"__"+event+"__"+data+"__"+media+"__"+price+"__"+inPcount)
if((typeof flixtracking.noTracking!='undefined'&&flixtracking.noTracking==false)){if(flixtracking.checkLoaderloaded==false)
flixtracking.checkLoader(data);var fireBeat=false,fireLog=true;if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.data.product!==undefined){opts2=FlixjQ.fn.inPage.data;}else if(FlixjQ.fn.minisite&&FlixjQ.fn.minisite.data.product!==undefined){opts2=FlixjQ.fn.minisite.data;}
if(typeof opts2=='undefined'&&typeof FlixServices!='undefined'&&typeof FlixServices.maindata!='undefined')
opts2=FlixServices.maindata;if(data&&data!=null)
opts2=JSON.parse(JSON.stringify(data));if(!flixtracking.getUrlParameter('pn')){opts2.page_name=window.location.href;}
opts2.event_type=event;opts2.event_detail=media;opts2.price=price;opts2.view_time=0;var prodid=opts2.product||opts2.product_id;if((prodid==0||prodid==null)&&typeof FlixServices!='undefined'&&typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].product_meta.inpage.product_id!='undefined'){prodid=FlixServices.modular_match_data[0].product_meta.inpage.product_id!='undefined'}
if(FlixjQ('inpage_container').length!=0&&(prodid==0||prodid==null)){prodid=FlixjQ('[id^=flixinpage]:eq(0)').find('span[id^=inpage-data]').attr('id')||FlixjQ('[id^=flixinpage]:eq(1)').find('span[id^=inpage-data]').attr('id');prodid=prodid.toString().replace('inpage-data-','')}
if(type=='review'&&typeof FlixServices=='undefined'){var prodid=FlixjQ('#flix-mobile_template-reviews').closest('.main_mot_product_wrapper').attr('alt')||FlixjQ('.inpage_selector_reviews').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id')||opts2.product;prodid=prodid.toString().replace('inpage-data-','')}
if(type=='compare'){if(FlixjQ('.flix-compare').length&&FlixjQ('.flix-compare').html().length)
opts2.ct='v1';if(FlixjQ('.flix-comparev2').length&&FlixjQ('.inpage_selector_comparison').attr('data-compv2-ctid'))
opts2.ct=FlixjQ('.inpage_selector_comparison').attr('data-compv2-ctid');if(typeof FlixServices=='undefined'){var prodid=FlixjQ('.flix-compare, .flix-comparev2').closest('.main_mot_product_wrapper').attr('alt')||FlixjQ('.flix-compare, .flix-comparev2').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id')||opts2.product;prodid=prodid.toString().replace('inpage-data-','')}}
if(type=='visible'&&typeof FlixServices=='undefined'){var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id')||FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt')||opts2.product;prodid=prodid.toString().replace('inpage-data-','');}
if(type=='3dfw'&&typeof FlixServices=='undefined'){var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id')||FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt')||opts2.product;prodid=prodid.toString().replace('inpage-data-','');}
if(type=='inpage'&&event=='media'&&typeof FlixServices=='undefined'){var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id')||FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt')||opts2.product;prodid=prodid.toString().replace('inpage-data-','');}
var d=new Date();var domain=flixtracking.trackingDomain
if(flixtracking.trackingDomain.search('media.flixcar.com/')==-1){var _base=flixtracking.trackingDomain+'log.gif';}else
var _base=flixtracking.trackingDomain+type+'/log.gif';var url=_base+"?newtrackv2&ver=v2&ts="+type+"&loggin&m=i"
if(FlixjQ('#flix-mbl-page').length){url+="&mot=1";}
if(type=="flc"){fireLog=false;fireBeat=true;var prodid=opts2.product||'';url+="&mpn="+opts2.mpn+"&ean="
+opts2.ean+"&location="
+opts2.city}
opts2.product_id=prodid
logqa("Global log - type: "+type+"_ prodid: "+prodid);opts2.type=type;logqa(opts2)
flixtracking.log(opts2);}},logTimer:0,logTime:function(data,newtime){if(typeof newtime=='undefined'){newtime=parseInt(flixtracking.logTimer)+10;flixtracking.logTimer=newtime}
logqa('logTime-'+newtime);data.event_type="time";data.event_detail="";data.view_time=newtime;if(!data.type)
data.type="inpage"
if(newtime>300)return;logTimer=newtime;flixtracking.log(data);},logTimeMinisite:function(data,newtime){logqa('logTime');if(newtime==undefined){newtime=parseInt(logTimer)+10;}
data.event_type="time";data.event_detail="";data.view_time=newtime;data.type="minisite"
if(newtime>300)return;logTimer=newtime;flixtracking.log(data);},logClick:function(data,medianame,moduleid){logqa('logMedia');data.event_type="click";data.event_detail=medianame;data.view_time=0;data.mid=moduleid;flixtracking.log(data);},logMedia:function(data,medianame,moduleid){logqa('logMedia');data.event_type="media";data.event_detail=medianame;data.view_time=0;data.mid=moduleid;flixtracking.log(data);},logPage:function(data,pagename){logqa('logPage');data.event_type="page";data.event_detail=pagename;data.view_time=0;flixtracking.log(data);},logVideoT){},logVideoLoad:function(newvideo){if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.inPage!='undefined'){var data=FlixjQ.fn.inPage.data
data.type='inpage'}
else if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.minisite!='undefined'){var data=FlixjQ.fn.minisite.data
data.type='minisite'}else if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.microsite!='undefined'){var data=FlixjQ.fn.microsite.data
data.type='sis'}
data.event_type="mediaload";data.event_detail=newvideo;data.view_time=0;data.asset=0;flixtracking.log(data);},parsePage:function(pagedata,target){var
found='',h=null,fallback=true,generic={},specific={},p,ignore=[],precedence,hit=false;if(!pagedata){pagedata=window.flixJsCallbacks.pageGeneric||{};}
if(Object.keys(pagedata.pageSpecific).length===0){pagedata.pageSpecific=window.flixJsCallbacks.pageSpecific}
try{for(p in pagedata){if(pagedata.hasOwnProperty(p)){if(p=='pageSpecific'){specific=pagedata.pageSpecific;}
else if(ignore.indexOf(p)===-1){generic[p]=pagedata[p];}}}
precedence=(!!specific[target])?specific[target]:generic[target];if(!specific[target]){fallback=false;}
if(typeof precedence==='function'){found=precedence();if(!found){fallback=true;}}
if(!found&&!!precedence&&!!precedence.terms&&precedence.terms.length){for(var i=0;i<precedence.terms.length;i++){h=document.querySelector(precedence.terms[i]);if(h&&!!h.textContent.trim()){hit=true;break;}
else if(h&&h instanceof HTMLElement){for(var j=0;j<precedence.attr.length;j++){if(h.hasAttribute(precedence.attr[j])){if(precedence.attr[j]!='href'||(precedence.attr[j]=='href'&&h.getAttribute(precedence.attr[j]).search('//')!=-1)){found=h.getAttribute(precedence.attr[j]);hit=true;break;}}}}}}
if(fallback&&!hit){precedence=generic[target];if(typeof precedence==='function'){found=precedence();}
if(!found&&!!precedence&&!!precedence.terms&&precedence.terms.length){for(var i=0;i<precedence.terms.length;i++){h=document.querySelector(precedence.terms[i]);if(h&&!!h.textContent.trim()){hit=true;break;}
else if(h&&h instanceof HTMLElement){for(var j=0;j<precedence.attr.length;j++){if(h.hasAttribute(precedence.attr[j])){found=h.getAttribute(precedence.attr[j]);hit=true;break;}}}}}}
if(!found&&h&&h instanceof HTMLElement){found=h.textContent.trim();}
if(target==='price'&&!!found){var
value=flixtracking.parsePrice(found);if(value){found=value;}}
return found.trim();}catch(e){return'';}},pageData:function(data){if(!data.pagedata){data.pagedata=window.flixJsCallbacks.pageGeneric||{};}
var pData={},s,df,i,p,get='',skip;window.flixJsCallbacks.pageCapture=window.flixJsCallbacks.pageCapture||{};try{PAGEDATALOOP:for(p in data.pagedata){if(data.pagedata.hasOwnProperty(p)){switch(p){case'pageSpecific':continue PAGEDATALOOP;break;case'pn':if(!!window.flixJsCallbacks.pageCapture[p]){pData[p]=window.flixJsCallbacks.pageCapture[p];}
else{pData[p]=flixtracking.getCanonical(data.pagedata);window.flixJsCallbacks.pageCapture[p]=pData[p];}
break;case'br':default:if(!!window.flixJsCallbacks.pageCapture[p]){pData[p]=window.flixJsCallbacks.pageCapture[p];}
else{pData[p]=flixtracking.parsePage(data.pagedata,p);window.flixJsCallbacks.pageCapture[p]=pData[p];}
break;}}}
df=['mpn','ean','sku','price','brand'];skip=['price','brand'];for(i=0;i<df.length;i++){if(document.querySelector('script[data-flix-'+df[i]+']')&&!!document.querySelector('script[data-flix-'+df[i]+']').getAttribute('data-flix-'+df[i])){pData[df[i]]=document.querySelector('script[data-flix-'+df[i]+']').getAttribute('data-flix-'+df[i]);if(skip.indexOf(df[i])<0){window.flixJsCallbacks.pageCapture[df[i]]=pData[df[i]];}
else{if(!!data.pagedata&&!!data.pagedata.pageSpecific&&!data.pagedata.pageSpecific.price){if(df[i]==='price'&&flixtracking.parsePrice(pData[df[i]])){pData[df[i]]=flixtracking.parsePrice(pData[df[i]]);window.flixJsCallbacks.pageCapture[df[i]]=pData[df[i]];}}
if(!!data.pagedata&&!!data.pagedata.pageSpecific&&!data.pagedata.pageSpecific.br){if(df[i]==='brand'){pData['br']=pData[df[i]];window.flixJsCallbacks.pageCapture['br']=pData[df[i]];delete pData['brand'];delete window.flixJsCallbacks.pageCapture['brand'];}}}}}}catch(ignore){}
for(var key in pData){get+="&"+key+'='+encodeURIComponent(pData[key]);}
return get;},pageDataMinisite:function(data){var data={pagedata:_FFMatcher._FFpagedata},pData={},s,df,i,p,get='',p2,skip;window.flixJsCallbacks.pageCapture=window.flixJsCallbacks.pageCapture||{};try{PAGEDATALOOP:for(p in data.pagedata){if(data.pagedata.hasOwnProperty(p)){switch(p){case'pageSpecific':continue PAGEDATALOOP;break;case'pn':if(!!window.flixJsCallbacks.pageCapture[p]){pData[p]=window.flixJsCallbacks.pageCapture[p];}
else{pData[p]=flixtracking.getCanonical(data.pagedata);window.flixJsCallbacks.pageCapture[p]=pData[p];}
break;case'br':default:if(!!window.flixJsCallbacks.pageCapture[p]){pData[p]=window.flixJsCallbacks.pageCapture[p];}
else{pData[p]=flixtracking.parsePage(data.pagedata,p);window.flixJsCallbacks.pageCapture[p]=pData[p];}
break;}}}
df=['mpn','ean','sku','price','brand'];skip=['price','brand'];for(i=0;i<df.length;i++){if(document.querySelector('script[data-flix-'+df[i]+']')&&!!document.querySelector('script[data-flix-'+df[i]+']').getAttribute('data-flix-'+df[i])){pData[df[i]]=document.querySelector('script[data-flix-'+df[i]+']').getAttribute('data-flix-'+df[i]);if(skip.indexOf(df[i])<0){window.flixJsCallbacks.pageCapture[df[i]]=pData[df[i]];}
else{if(!!data.pagedata&&!!data.pagedata.pageSpecific&&!data.pagedata.pageSpecific.price){if(df[i]==='price'&&_FFUtils._FFparsePrice(pData[df[i]])){pData[df[i]]=_FFUtils._FFparsePrice(pData[df[i]]);window.flixJsCallbacks.pageCapture[df[i]]=pData[df[i]];}}
if(!!data.pagedata&&!!data.pagedata.pageSpecific&&!data.pagedata.pageSpecific.br){if(df[i]==='brand'){pData['br']=pData[df[i]];window.flixJsCallbacks.pageCapture['br']=pData[df[i]];delete pData['brand'];delete window.flixJsCallbacks.pageCapture['brand'];}}}}}
for(p2 in pData){if(p2==='pn'&&pData.hasOwnProperty(p2)&&/%/.test(pData[p2])){pData[p2]=decodeURIComponent(pData[p2])}
if(pData.hasOwnProperty(p2)&&!/%/.test(pData[p2])){params[p2]=encodeURIComponent(pData[p2]);}}}catch(ignore){}
for(var key in pData){get+="&"+key+'='+encodeURIComponent(pData[key]);}
return get;},getCanonical:function(data,esc){try{var
ret,canonicalCheck,s;ret=flixtracking.parsePage(data.pagedata,'pn');canonicalCheck=window.location.protocol+'//'+window.location.hostname+'/';if(!ret||ret===canonicalCheck||ret.length+1<=canonicalCheck.length){var url=(window.location!=window.parent.location)?document.referrer:top.document.URL;if(typeof pnurl!='undefined'&&pnurl.length>0)
url=pnurl
ret=url;}
s=ret.indexOf('#');if(s!=-1){ret=ret.substring(0,s);}
return arguments.length>1?escape(ret):ret;}catch(e){}},parsePrice:function(price){try{if(!!price&&!price.trim().match(/[a-z][\.,\u20AC]+/gi)){var
value=price.trim().replace(/[^0-9\.,\u20AC]/gi,''),l=value.length,vl,v='';if(!!window.flixJsCallbacks.priceParser){value=window.flixJsCallbacks.priceParser.regEx(value);l=value.length;}
switch(true){case(!!value.charAt(l-3).match(/[\.,\u20AC]/)):value=value.substr(0,(l-3))+'*'+value.substr((l-2));break;case(!!value.charAt(l-2).match(/[\.,\u20AC]/)):value=value.substr(0,(l-2))+'*'+value.substr((l-1));break;default:value=value.split('.');vl=(value.length-1);if(value.length>1&&value[vl].length>2){value[vl]=value[vl].substr(0,2);}
for(var i=0,vl=value.length;i<vl;i++){(i==(vl-2))?v+=value[i]+'*':v+=value[i];}
value=v;break;}
value=value.replace(/[\.,\u20AC]+/g,'');value=value.replace(/\*/,'.');return value;}}catch(ignore){}
return false;},delegate:function(eventName,elementSelector,handler){if(typeof flixdelegate=='undefined')
window.flixdelegate=[];if(flixdelegate.indexOf(elementSelector)==-1){document.addEventListener(eventName,function(e){for(var target=e.target;target&&target!=this;target=target.parentNode){if(target&&target.matches(elementSelector)){handler.call(target,e);break;}}},true);flixdelegate.push(elementSelector)}else{}},getURL:function(){if(window.parent){var url=(window.location!=window.parent.location)?document.referrer:document.location.href;}else{var url=document.location.href;}
return url;},isMobk;},getCookieVa';},setGvid:function(){logqa('setGvid');try{window.flixJsCallbacks=window.flixJsCallbacks||{};if(sessionStorage.getItem('flixgvid')){window.flixJsCallbacks.gvid=sessionStorage.getItem('flixgvid');}else{var ticks=3;(function threeTicks(){if(window.flixJsCallbacks&&typeof window.flixJsCallbacks.gvid=='undefined'&&ticks){setTime);},100)}
else{logqa('create gvid');if(document.getElementById('data-flix-t-script')&&typeof window.flixJsCallbacks['gvid']!='undefined')return;window['flixgvid']=function(obj){try{delete window['flixgvid'];window.flixJsCallbacks=window.flixJsCallbacks||{};window.flixJsCallbacks['gvid']=obj['gvid'];sessionStorage.setItem('flixgvid',obj['gvid']);}catch(e){}};var _fscript=document.createElement('script');_fscript.setAttribute("type","text/javascript");_fscript.setAttribute("src","https://prod.flixgvid.flix360.io/");_fscript.setAttribute("async","true");_fscript.id="data-flix-t-script";_fscript.onerror=function(){window.flixJsCallbacks=window.flixJsCallbacks||{};window.flixJsCallbacks['gvid']=''
sessionStorage.setItem('flixgvid','');logqa('gvid not loaded')}
document.getElementsByTagName('head')[0].appendChild(_fscript);setTimeout(function(){if(window.flixJsCallbacks&&typeof window.flixJsCallbacks.gvid=='undefined'){window.flixJsCallbacks=window.flixJsCallbacks||{};window.flixJsCallbacks['gvid']=''
sessionStorage.setItem('flixgvid','');}},5000)}})();}}catch(e){}},setGuid:{Set:function(e){var t;if(arguments.length==1){if(this.IsValid(arguments[0])){t=arguments[0];}else{t=this.Empty();}}
this.sessionid(t);return t;},Em";},IsEmpty:function(e){return e==this.Empty()||typeof e=="undefined"||e==null||e=="";},IsValid:function(e){rGx=new RegExp("\\b(?:[A-F0-9]{8})(?:-[A-F0-9]{4}){3}-(?:[A-F0-9]{12})\\b");return rGx.exec(e)!=null;},New:function(){if(arguments.length==1&&this.IsValid(arguments[0])){this.sessionid(arguments[0]);value=arguments[0];return value;}
var e=[],t;var n=new RegExp("[2345]");for(var r=0;r<8;r++){t=((1+Math.random())*65536|0).toString(16).substring(1);if(n.exec(r.toString())!=null){if(r==3){t="6"+t.substr(1,3);}
e.push("-");}
e.push(t.toUpperCase());}
value=e.join("");this.sessionid=value;return value;},Value:function(){if(this.sessionid!=''){return this.sessionid;}
var e=this.New();this.sessionid=e;return e;},sessionid:''},loadComp:function(e,t){logqa('loadComp')
if(-1!=e.search(".js")&&0===FlixjQ("script[src='"+e+"']").length){var c=document.createElement("script");c.type="text/javascript",c.src=e,c.onload=t,document.head.appendChild(c);}
if(-1!=e.search(".css")&&0===FlixjQ("link[href='"+e+"']").length){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.type="text/css",n.onload=t,document.head.appendChild(n);}},queue:[],trackingqueue:function(url){logqa('trackingqueue')
if(url)
flixtracking.queue.push(url);if(window.flixJsCallbacks&&typeof window.flixJsCallbacks.gvid!='undefined'){logqa('trackingqueue - gvid found')
for(var i=0;i<flixtracking.queue.length;i++){var url=flixtracking.queue[i]=flixtracking.queue[i].replace('&gvid=&','&gvid='+window.flixJsCallbacks.gvid+'&')
logqa(url)
var img=new Image();img.src=url;}
flixtracking.queue=[];}else{logqa('trackingqueue - queue more')
setTimeout(function(){flixtracking.trackingqueue()},1000)}},getUrlParame}}},cookieConsent:{provider:'',initConsent:function(){if(typeof Cookiebot!='undefined'){flixtracking.cookieConsent.cookieBot();}
else if(typeof CookieInformation!='undefined'&&typeof CookieInformation.getConsentGivenFor('cookie_cat_statistic')!='undefined'){flixtracking.cookieConsent.cookieInfo();}
else if(typeof __cmp!='undefined'&&typeof __cmp('getCMPData')!='undefined'&&typeof __cmp('getCMPData').vendorConsents!='undefined'){flixtracking.cookieConsent.consentManager();}
else if(typeof window.evidon!='undefined'&&typeof window.evidon.notice!='undefined'&&typeof window.evidon.notice.consentIsGiven!='undefined'){flixtracking.cookieConsent.crownPeak();}
else if(typeof window.didomiState!='undefined'&&typeof window.didomiState.didomiPurposesConsent!='undefined'){flixtracking.cookieConsent.didomi();}
else if(typeof _iub!='undefined'&&typeof _iub.csActivationDone!='undefined'){flixtracking.cookieConsent.iubenda();}
else if(typeof OneTrust!='undefined'){flixtracking.cookieConsent.oneTrust();}
else if(typeof window.cookieconsent!='undefined'){flixtracking.cookieConsent.osano();}
else if(typeof OneTrust=='undefined'&&typeof cact!='undefined'){flixtracking.cookieConsent.trustcommander();}
else if(typeof __cmp=='undefined'&&typeof __tcfapi!='undefined'){flixtracking.cookieConsent.quantcast();}
else{var dnt=flixtracking.cookieConsent.doNotTrack();if(flixtracking.trackingcc<=20&&dnt!=true){setTimeout(function(){if(typeof flixtracking!='undefined'){flixtracking.trackingcc++;flixtracking.cookieConsent.initConsent();}},1000);}}},cookieInfo:function(){var statistic=CookieInformation.getConsentGivenFor('cookie_cat_statistic')||'';logqa('CookieInformation',statistic);flixtracking.cookieConsent.provider='CookieInfo'
if(statistic===false){flixtracking.cookieConsent.stopTracking();}else if(statistic===true){}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=statistic;flixconsent=statistic;},consentManager:function(){var preferences=__cmp('consentStatus').consentExists;logqa('consentManager -'+preferences);flixtracking.cookieConsent.provider='ConsentManager'
var obj=__cmp('getCMPData').vendorConsents;if(Object.keys(obj).length===0){preferences=false;flixtracking.cookieConsent.stopTracking();}else{preferences=true;}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},cookieBot:function(){var preferences=''
if(typeof Cookiebot!='undefined'&&typeof Cookiebot.consent!='undefined'&&typeof Cookiebot.consent.preferences!='undefined')
preferences=Cookiebot.consent.preferences;logqa('cookieBot -'+preferences);flixtracking.cookieConsent.provider='CookieBot'
if(preferences===false){flixtracking.cookieConsent.stopTracking();}else if(preferences===true){}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},crownPeak:function(){var preferences=window.evidon.notice.consentIsGiven;logqa('crownpeak -'+preferences);flixtracking.cookieConsent.provider='CrownPeak'
if(preferences===false){flixtracking.cookieConsent.stopTracking();}else if(preferences===true){}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},didomi:function(){var preferences=false;logqa('didomi -');flixtracking.cookieConsent.provider='Didomi'
if(window.didomiState.didomiPurposesConsentDenied.search('measure_content_performance')!=-1){flixtracking.cookieConsent.stopTracking();}else if(preferences===true){}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},iubenda:function(){var preferences=_iub.csActivationDone;logqa('iubenda -'+preferences);flixtracking.cookieConsent.provider='Iubenda'
if(typeof _iub.cs.consent.purposes!='undefined'&&typeof _iub.cs.consent.purposes[4]!='undefined'&&_iub.cs.consent.purposes[4]===false){flixtracking.cookieConsent.stopTracking();}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},oneTrust:function(){var preferences=''
if(typeof OneTrust!='undefined'&&typeof OneTrust.IsAlertBoxClosed!='undefined')
preferences=OneTrust.IsAlertBoxClosed();logqa('oneTrust -'+preferences);flixtracking.cookieConsent.provider='OneTrust'
if(preferences===false){flixtracking.cookieConsent.stopTracking();}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;if(typeof Optanon!='undefined'&&Optanon.GetDomainData()&&Optanon.GetDomainData().ConsentIntegrationData){var cv=Optanon.GetDomainData().ConsentIntegrationData.consentPayload.purposes
var cv2=JSON.stringify(cv);var onecv='';var third='tp_false|';var func='ft_false|';var target='tt_false';if(cv[2]&&cv[2].TransactionType&&cv[2].TransactionType=='CONFIRMED'){third='tp_true|';}
if(cv[3]&&cv[3].TransactionType&&cv[3].TransactionType=='CONFIRMED'){func='ft_true|';}
if(cv[4]&&cv[4].TransactionType&&cv[4].TransactionType=='CONFIRMED'){target='tt_true';flixtracking.cookieConsent.stopTracking();preferences=true;}
onecv=third+func+target;flixtracking.cookieConsent.data=onecv;}
flixconsent=preferences;},osano:function(){var preferences=false;logqa('osano -');flixtracking.cookieConsent.provider='Osano'
var name='cookieconsent_status';var match=document.cookie.match(new RegExp('(^| )'+name+'=([^;]+)'));if(match){logqa('osano',match[2]);if(match[2]=='allow'){preferences=true;}else{}};if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},quantcast:function(){var preferences=false;logqa('quantcast -');flixtracking.cookieConsent.provider='Quantcast'
__tcfapi('getTCData',2,function(tcData,success){if(typeof tcData!='undefined'&&tcData!==null&&(tcData.eventStatus=='useractioncomplete'||tcData.eventStatus=='tcloaded')){if(tcData.eventStatus=='useractioncomplete'||tcData.eventStatus=='tcloaded'){var obj=tcData.purpose.consents;if(Object.keys(obj).length===0){preferences=false;flixtracking.cookieConsent.stopTracking();}else{preferences=true;}}}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;});},trustcommander:function(){var preferences=false;logqa('trustcommander -');flixtracking.cookieConsent.provider='Trustcommander'
cact('consent.get',function(result){if(result.consent.status==='unset'){}else{if(typeof result.consent!='undefined'&&typeof result.categories!='undefined'&&result.consent.categories[1].status=='on')
preferences=true;else
flixtracking.cookieConsent.stopTracking();}})
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;flixconsent=preferences;},doNotTrack:function(){var preferences=navigator.doNotTrack=="yes"||navigator.doNotTrack=="1"||navigator.msDoNotTrack=="1"||window.doNotTrack==="1";if(preferences===true){flixconsent=false;flixtracking.cookieConsent.stopTracking();flixtracking.cookieConsent.provider='DNT';flixtracking.cookieConsent.data=flixconsent;}else{flixtracking.cookieConsent.provider='';flixtracking.cookieConsent.data='';flixconsent=''}
if(document.querySelector('.consentstatus')&&document.querySelector('.consentstatus').length>0)
document.querySelector('.consentstatus').innerHTML=preferences;return preferences;},stopTracke;}},checkNoTracking:function(){logqa('checkNoTracking');try{if(flixtracking.noTracking==true)
logqa('No tracking retailer');}catch(e){}},globalTracking:function(opts){logqa('globalTracking')
if(typeof FlixjQ=='undefined'){setTimeout(function(){flixtracking.globalTracking(opts);},500)
return false}
if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.on=='undefined')
FlixjQ.fn.on=FlixjQ.fn.live;if(flixtracking.globalTrackingInit===false){logqa('globalTracking --passed')
if(typeof FlixjQ.fn.logging=='undefined'){FlixjQ.fn.logging=function(type,event,data,media,price,inPcount){}}
if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.inPage!='undefined'&&typeof FlixjQ.fn.inPage.data.product!==undefined){opts=FlixjQ.fn.inPage.data;}else if(typeof FlixjQ!='undefined'&&typeof FlixjQ.fn.minisite!='undefined'&&typeof FlixjQ.fn.minisite.data.product!==undefined){opts=FlixjQ.fn.minisite.data;}else if(typeof opts!='object'){return false;}
setTimeout(function(){flixtracking.products.reviewsContainer=FlixjQ('.inpage_selector_reviews');if(FlixjQ.fn.inPage=='undefined'||(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.hasOwn(FlixjQ.fn.inPage.data.ab_data))){if(FlixjQ("#inpage_container").length>0){flixtracking.products.pagetracking.init();}}else{logqa('No time tracking');if(typeof FlixjQ.fn.inPage!='undefined'&&typeof FlixjQ.fn.inPage.logTime!='undefined'){FlixjQ.fn.inPage.logTime=function(){}}
if(typeof FlixjQ.fn.minisite!='undefined'&&typeof FlixjQ.fn.minisite.logTime!='undefined'){FlixjQ.fn.minisite.logTime=function(){}}
if(typeof FlixjQ.fn.compMinisite!='undefined'&&typeof FlixjQ.fn.compMinisite.logTime!='undefined'){FlixjQ.fn.compMinisite.logTime=function(){}}
if(typeof instance!='undefined'&&typeof instance.logTime!='undefined'){instance.logTime=function(){}}}
if(FlixjQ('[skey]').length>0){flixtracking.products.logotracking.init();}
setTimeout(function(){flixtracking.checkModuleExists('[flixtemplate-key="thirdparty_app"], [data-3p]').then((elm)=>{logqa('3rdapp  loaded');if(!flixtracking.thirdPartyApploaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.thirdpartywidget.init();flixtracking.thirdPartyApploaded=true;}});},1000)
setTimeout(function(){if(!window.comparecheck)
window.comparecheck=false;var ctprodlength=FlixjQ('.flix-comp-product').length;var comparisonTable=FlixjQ('.flix-compare');if(comparisonTable&&comparisonTable.length>0&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(window.comparecheck==false){window.comparecheck=true;if(ctprodlength>1||ctprodlength===0){flixtracking.products.comparison.init();}
if(flixtracking.site_url=='//demo.flix360.io/'){flixtracking.loadComp('https://delivery-alpha.flix360.io/static/comparison/standard/js/append.js');flixtracking.loadComp('https://delivery-alpha.flix360.io/static/comparison/standard/css/main.css');}else{flixtracking.loadComp(flixtracking.site_url+'static/comparison/standard/js/append.js');flixtracking.loadComp(flixtracking.site_url+'static/comparison/standard/css/main.css');}}}else{flixtracking.checkModuleExists('.flix-compare').then((elm)=>{logqa('CT v1 loaded');var ctprodlength=FlixjQ('.flix-comp-product').length;if(window.comparecheck==false&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){window.comparecheck=true;if(ctprodlength>1||ctprodlength===0){flixtracking.products.comparison.init();}}});}},1000)
setTimeout(function(){var comparisonTable=FlixjQ('.flix-comparev2');if(comparisonTable&&comparisonTable.length>0&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(window.comparecheck==false){window.comparecheck=true;flixtracking.products.comparisonv2.init();}}else{flixtracking.checkModuleExists('[flixtemplate-key="comparison_tables"]').then((elm)=>{logqa('CT v2 loaded');if(typeof window.comparecheck=='undefined'||window.comparecheck==false&&FlixjQ('.flix-ctv2-wrapper').length>0&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0))
flixtracking.products.comparisonv2.init();if(window.comparecheck==false)
window.comparecheck=true;});}},1000)
setTimeout(function(){if(flixtracking.products.reviewsContainer&&flixtracking.products.reviewsContainer.length>0&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){if(!flixtracking.reviewsloaded){flixtracking.products.reviews.init();flixtracking.reviewsloaded=true}}else{flixtracking.checkModuleExists('[flixtemplate-key="reviews"],[flixtemplate-key="complimentary_reviews"]').then((elm)=>{if(!flixtracking.reviewsloaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.reviews.init();flixtracking.reviewsloaded=true}});}},2000)
setTimeout(function(){if(FlixjQ('#flix-ugc-galfeatures').length>0){if(!flixtracking.ugcloaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.ugctracking.init();flixtracking.ugcloaded=true}}else{flixtracking.checkModuleExists('[flixtemplate-key="ugcs"], #flix_product_ugc, #flix-ugc-galfeatures').then((elm)=>{if(!flixtracking.ugcloaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.ugctracking.init();flixtracking.ugcloaded=true}});}},2000)
flixtracking.products.buttontracking.init();var compcc=0
function checkCompButton(){if(FlixjQ('#inpage-iframe-modal a')&&FlixjQ('#inpage-iframe-modal a').length&&FlixjQ('#inpage-iframe-modal a').attr('onclick').search('scrollToComplimentary')!=-1){var s=FlixjQ('#inpage-iframe-modal a').attr('onclick')
var id=s.split('(\"#link')[1].split('\")')[0]
if(FlixjQ('[id^=flixinpage_'+id+']').length&&FlixjQ('[id^=flixinpage_'+id+']').html().length==0){FlixjQ('#inpage-iframe-modal a').hide();setTimeout(function(){if(compcc<10)
checkCompButton()
compcc++;},2000)}else{FlixjQ('#inpage-iframe-modal a').show()}}}
if(FlixjQ.fn.inPage&&FlixjQ.fn.inPage.hasOwn(FlixjQ.fn.inPage.data.ab_data))
checkCompButton();},500);flixtracking.globalTrackingInit=true;}},retailercheck:{check:false,init:function(data){logqa('retailercheck');flixtracking.retailercheck.check=true;setTimeout(function(){if(typeof flixtracking!='undefined')
flixtracking.retailercheck.check=false;},1000);flixtracking.retailercheck.cn='';flixtracking.retailercheck.cc='';if((document.getElementById('ccs-inline-content')&&document.getElementById('ccs-inline-content')!=null)||(document.getElementById('ccs-logos')&&document.getElementById('ccs-logos')!=null&&document.getElementById('ccs-logos').childNodes.length>0)){if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|';flixtracking.retailercheck.cc+='|'}
flixtracking.retailercheck.cnet(data);}
if(document.querySelectorAll('[class^="__ttl__widget"]').length){if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|';flixtracking.retailercheck.cc+='|'}
flixtracking.retailercheck.twentyfourttl(data);}
if(document.querySelectorAll('.loadbeeTabContent').length){if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|';flixtracking.retailercheck.cc+='|'}
flixtracking.retailercheck.loadbee(data);}
if((document.getElementById('syndi_powerpage')&&document.getElementById('syndi_powerpage')!=null)||(document.getElementById('syndigo-hero-image')&&document.getElementById('syndigo-hero-image')!=null&&document.getElementById('syndigo-hero-image').childNodes.length>0)){if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|';flixtracking.retailercheck.cc+='|'}
flixtracking.retailercheck.syndigo(data);}
if(document.querySelectorAll('*[data-contentdriver]').length){if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|';flixtracking.retailercheck.cc+='|'}
flixtracking.retailercheck.contentdriver(data);}
if(document.querySelectorAll('script[src*="1worldsync"]')&&document.querySelectorAll('script[src*="1worldsync"]').length){if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|';flixtracking.retailercheck.cc+='|'}
flixtracking.retailercheck.oneworld(data);}},cnet:function(data){flixtracking.retailercheck.cn+='cnet';try{if((document.querySelectorAll('.ccs-cc-inline')&&document.querySelectorAll('.ccs-cc-inline').length&&document.querySelectorAll('.ccs-cc-inline')[0].innerText.length>100)||document.getElementById('ccs-logos').innerHTML.length>10){flixtracking.retailercheck.cc+='true';}else{flixtracking.retailercheck.cc+='false';}}catch(e){flixtracking.retailercheck.cc+='false';}},twentyfourttl:function(data){flixtracking.retailercheck.cn+='24ttl';try{if(document.querySelectorAll('[class^="__ttl__widget"]')&&document.querySelectorAll('[class^="__ttl__widget"]').length&&document.querySelectorAll('[class^="__ttl__widget"]')[0].innerText.length>100){flixtracking.retailercheck.cc+='true';}else{flixtracking.retailercheck.cc+='false';}}catch(e){flixtracking.retailercheck.cc+='false';}},loadbee:function(data){flixtracking.retailercheck.cn+='loadbee';try{if(document.querySelectorAll('[class^="loadbeeTabContent"]').childNodes&&document.querySelectorAll('[class^="__ttl__widget"]').childNodes.length>10){flixtracking.retailercheck.cc+='true';}else{flixtracking.retailercheck.cc+='false';}}catch(e){flixtracking.retailercheck.cc+='false';}},syndigo:function(data){flixtracking.retailercheck.cn+='syndigo';try{if((document.getElementById('syndi_powerpage').childNodes.length>0&&document.getElementById('syndi_powerpage').innerHTML.length>10)||(typeof document.querySelector('syndigo-mosaic')!='undefined'&&typeof document.querySelector('syndigo-mosaic').shadowRoot!='undefined'&&typeof document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon')!='undefined'&&document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon')!=null&&typeof document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon').shadowRoot!='undefined'&&typeof document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon').shadowRoot.querySelector('.syndigo-mosaic-content')!='undefined'&&document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon').shadowRoot.querySelector('.syndigo-mosaic-content')!=null)){flixtracking.retailercheck.cc+='true';}else{flixtracking.retailercheck.cc+='false';}}catch(e){flixtracking.retailercheck.cc+='false';}},contentdriver:function(data){flixtracking.retailercheck.cn+='contentdriver';try{if(document.querySelectorAll('*[data-contentdriver]')&&document.querySelectorAll('*[data-contentdriver]').length&&document.querySelectorAll('*[data-contentdriver]')[0].innerText.length>100){flixtracking.retailercheck.cc+='true';}else{flixtracking.retailercheck.cc+='false';}}catch(e){flixtracking.retailercheck.cc+='false';}},oneworld:function(data){flixtracking.retailercheck.cn+='oneworld';try{if(document.querySelectorAll('img[src*="1worldsync"]')&&document.querySelectorAll('img[src*="1worldsync"]').length){flixtracking.retailercheck.cc+='true';}else{flixtracking.retailercheck.cc+='false';}}catch(e){flixtracking.retailercheck.cc+='false';}}},startModular:function(){logqa('startModular tracking');if(typeof FlixServices!='undefined'&&FlixServices.modular_match_data&&FlixServices.modular_match_data&&typeof FlixServices.modular_match_data[0]=='object'&&(FlixServices.modular_updated||flixtracking.startModularcc>10)){logqa('start tracking')
var data={}
data.distributor=flixmain_distributor||main_distributor;var matchdata=FlixServices.modular_match_data
var matchdatacc=0
for(val of matchdata){var match=val;data.mpn=''
if(typeof flixmain_mpn!='undefined'&&flixmain_mpn.length>0)
data.mpn=flixmain_mpn;else if(typeof main_mpn!='undefined'&&main_mpn.length>0)
data.mpn=main_mpn;else if(typeof match.product_meta.product_mpn!='undefined'&&match.product_meta.product_mpn.length>0)
data.mpn=match.product_meta.product_mpn;data.ean=flixmain_ean||match.product_meta.product_ean||'';data.prodNo=matchdatacc;if(match.product_meta.match_data){if(typeof window.matching_data=='undefined'){window.matching_data=[]}
window.matching_data=match.product_meta.match_data
if(match.product_meta.match_data.direct_match){var prodid=match.product_meta.product_id
var directmatch=match.product_meta.match_data.direct_match[prodid]
data.match_id=directmatch.match_id
data.match_type=directmatch.match_type
window.matching_data['main']={"data":{},"matchType":"direct"}
window.matching_data['main']['data']={[prodid]:{}}
window.matching_data['main']['data'][prodid]['match_id']=directmatch.match_id
window.matching_data['main']['data'][prodid]['match_type']=directmatch.match_type}
if(match.product_meta.match_data.dist_match){var prodid=match.product_meta.product_id
var directmatch=match.product_meta.match_data.dist_match[prodid]
data.match_id=directmatch.match_id
data.match_type=directmatch.match_type
window.matching_data['distributor']={"data":{},"matchType":"direct"}
window.matching_data['distributor']['data']={[prodid]:{}}
window.matching_data['distributor']['data'][prodid]['match_id']=directmatch.match_id
window.matching_data['distributor']['data'][prodid]['match_type']=directmatch.match_type}
if(match.product_meta.match_data.comp_match){var prodid=match.product_meta.product_id
var directmatch=match.product_meta.match_data.comp_match[prodid]
data.match_id=directmatch.match_id
data.match_type=directmatch.match_type
window.matching_data['complimentary']={"data":{},"matchType":"complimentary"}
window.matching_data['complimentary']['data']={[prodid]:{}}
window.matching_data['complimentary']['data'][prodid]['match_id']=directmatch.match_id
window.matching_data['complimentary']['data'][prodid]['match_type']=directmatch.match_type}}
if(matchdatacc==0){data.product_id=match.product_meta.product_id;data.language=match.product_meta.language_iso;FlixServices.maindata=data;if(typeof window.flixJsCallbacks!='undefined'&&typeof window.flixJsCallbacks.pid=='undefined')
window.flixJsCallbacks.pid=data.product_id
if(sessionStorage.getItem('flixdist')==null&&data.distributor&&data.distributor.length>0){sessionStorage.setItem('flixdist',data.distributor)}
if(sessionStorage.getItem('flixlan')==null&&data.language&&data.language.length>0){sessionStorage.setItem('flixlan',data.language)}}
if(typeof match.product_meta.inpage=='object'){const indata=JSON.parse(JSON.stringify(data))
if(!FlixServices.inpagedata)
FlixServices.inpagedata=[]
var prodid=match.product_meta.inpage.product_id;FlixServices.inpagedata[prodid]=indata;FlixServices.inpagedata[prodid]['type']='inpage';FlixServices.inpagedata[prodid]['event_type']='page';FlixServices.inpagedata[prodid]['event_detail']='';FlixServices.inpagedata[prodid]['product_id']=prodid;FlixServices.inpagedata[prodid]['product']=prodid;FlixServices.inpagedata[prodid]['language']=match.product_meta.language_iso;FlixServices.inpagedata[prodid]['flixcontainer']='#inpage_container';FlixServices.inpagedata[prodid]['prodNo']=matchdatacc;var autoloadproduct=''
if(document.querySelector('script[data-flix-distributor]')!=null)
autoloadproduct=document.querySelector('script[data-flix-distributor]').getAttribute('data-flix-autoload')
flixtracking.inpcontainername='#flix-inpage';if(typeof FlixServices.inpcontainername!='undefined')
flixtracking.inpcontainername=FlixServices.inpcontainername;if(typeof match!='undefined'&&typeof match.product_meta!='undefined'&&typeof match.product_meta.inpage!='undefined'&&match.product_meta.inpage.disabled!='undefined'&&match.product_meta.inpage.disabled!=1){if(autoloadproduct==null||autoloadproduct==''||autoloadproduct.search('inpage')!=-1){flixtracking.checkModuleExists('div'+flixtracking.inpcontainername).then((elm)=>{if(flixtracking.inpageloaded==false){logqa('inpage log');var matchdata=FlixServices.modular_match_data
var fli=0;for(val2 of matchdata){var prodid=val2.product_meta.product_id
var indata=FlixServices.inpagedata[prodid]
if(FlixjQ('div#inpage_container:eq('+fli+')').length&&FlixjQ('div#inpage_container:eq('+fli+')').attr('data-flx-p'))
indata.flixcontainer='[data-flx-p="'+FlixjQ('div#inpage_container:eq('+fli+')').attr('data-flx-p')+'"]'
if(typeof val2!='undefined'&&typeof val2.product_meta!='undefined'&&typeof val2.product_meta.inpage!='undefined'&&val2.product_meta.inpage.disabled!='undefined'&&val2.product_meta.inpage.disabled!=1){flixtracking.products.inpage(indata);}
fli++;}}});}else{flixtracking.checkModuleExists('div[id^=flixinpage_], div[id^=flixinpageauto]').then((elm)=>{if(flixtracking.inpageloaded==false){logqa('inpage log');var matchdata=FlixServices.modular_match_data
var fli=0;for(val2 of matchdata){var prodid=val2.product_meta.product_id
var indata=FlixServices.inpagedata[prodid]
if(FlixjQ('div#inpage_container:eq('+fli+')').length&&FlixjQ('div#inpage_container:eq('+fli+')').attr('data-flx-p'))
indata.flixcontainer='[data-flx-p="'+FlixjQ('div#inpage_container:eq('+fli+')').attr('data-flx-p')+'"]'
if(typeof val2!='undefined'&&typeof val2.product_meta!='undefined'&&typeof val2.product_meta.inpage!='undefined'&&val2.product_meta.inpage.disabled!='undefined'&&val2.product_meta.inpage.disabled!=1){flixtracking.products.inpage(indata);}
fli++;}}});}}else{var ProLen=FlixServices.modular_match_data.length,CheckIfAnyMatchHit=false;for(var mmC=0;mmC<=ProLen;mmC++){if(typeof FlixServices.modular_match_data[mmC]!='undefined'&&typeof FlixServices.modular_match_data[mmC].product_meta!='undefined'&&typeof FlixServices.modular_match_data[mmC].product_meta.inpage!='undefined'&&FlixServices.modular_match_data[mmC].product_meta.inpage.disabled!='undefined'&&FlixServices.modular_match_data[mmC].product_meta.inpage.disabled==0){logqa("active inpage "+FlixServices.modular_match_data[mmC].product_meta.inpage.product_id);CheckIfAnyMatchHit=true;}
if(mmC==ProLen-1&&!CheckIfAnyMatchHit){logqa("disable inpage "+FlixServices.modular_match_data[mmC].product_meta.inpage.product_id);data.type='inpage';data.event_type='matchmissinpage';flixtracking.log(data);}}}
if(typeof FlixjQ.fn.inPage=='undefined'){FlixjQ.fn.inPage=function(){}
FlixjQ.fn.inPage.data=FlixServices.inpagedata[prodid];FlixjQ.fn.inPage.hase;};}
if(matchdatacc==0)
FlixjQ.fn.inPage.data=FlixServices.inpagedata[prodid];}
FlixjQ.fn.newdata=data
if(typeof match.product_meta.minisite=='object'&&flixtracking.isMobile()==false&&FlixServices.service_lock_minisite==false&&FlixServices.minisite_loaded==true){if(FlixjQ('#flix-minisite').length>0||FlixjQ('.flix-minisite-button').length>0){const minidata=JSON.parse(JSON.stringify(data))
logqa('minisite button log')
flixtracking.minisitebuttonloaded=true;minidata.type='minisite';minidata.language=match.product_meta.language_iso;minidata.product_id=match.product_meta.minisite.product_id;var d=new Date(),h='';minidata.ut=d.getTime();minidata.to=d.getTimezoneOffset();minidata.ss=screen.width+'x'+screen.height;minidata.event_type='matchhit';if(flixtracking.minisiteCount<=FlixServices.modular_match_data.length){minidata.product_id=FlixServices.modular_match_data[flixtracking.minisiteCount].product_meta.minisite.product_id;if(typeof FlixServices.modular_match_data[flixtracking.minisiteCount]!='undefined'&&typeof FlixServices.modular_match_data[flixtracking.minisiteCount].product_meta!='undefined'&&typeof FlixServices.modular_match_data[flixtracking.minisiteCount].product_meta.minisite!='undefined'&&FlixServices.modular_match_data[flixtracking.minisiteCount].product_meta.minisite.disabled!='undefined'&&FlixServices.modular_match_data[flixtracking.minisiteCount].product_meta.minisite.disabled!=1){flixtracking.log(minidata);logqa("minisite active "+minidata.product_id)}else{if(document.querySelector('script[data-flix-distributor]')==null||(document.querySelector('script[data-flix-distributor]')!=null&&document.querySelector('script[data-flix-button]')!=null&&document.querySelector('script[data-flix-distributor]').getAttribute('data-flix-button').length)){minidata.type='minisite';minidata.event_type='matchmiss';flixtracking.log(minidata);logqa("minisite disabled "+minidata.product_id)}}
flixtracking.minisiteCount++}}}
if(typeof FlixServices.modular_match_data[0]!='undefined'&&typeof FlixServices.modular_match_data[0].modules!='undefined'&&typeof FlixServices.modular_match_data[0].modules.hotspot!='undefined'&&FlixServices.modular_match_data[0].modules.hotspot!=null&&matchdatacc==0){const matchhot=FlixServices.modular_match_data[0];matchhot.data=JSON.parse(JSON.stringify(data))
matchhot.data.language=matchhot.product_meta.language_iso
matchhot.data.product_id=matchhot.product_meta.hotspot.product_id;matchhot.data.edvalueT=matchhot.data.mpn||matchhot.data.ean||matchhot.data.product_id,matchhot.data.type='interactive'
if(typeof flixhotspot=='undefined')
window.flixhotspot={}
window.flixhotspot.data=matchhot.data;FlixServices.flixhotspot.data=matchhot.data
flixtracking.checkModuleExists('#flix_hotspots').then((elm)=>{if(!flixtracking.hotspotloaded2){flixtracking.hotspotloaded2=true
logqa('hotspot desktop log');setTime);},1000)}});if(flixtracking.isMobile()==true&&typeof FlixServices.modular_match_data[0].settings.manufacturer_settings!='undefined'){flixtracking.checkModuleExists('#flix_hotspotsmob').then((elm)=>{if(!flixtracking.hotspotloaded3&&FlixjQ('#flix_hotspotsmob').children().length){flixtracking.hotspotloaded3=true
logqa('hotspot mob log');flixtracking.products.hotspotmob();}});}
var ProLenHS=FlixServices.modular_match_data.length,CheckIfAnyMatchHitHS=false;for(var mmC=0;mmC<=ProLenHS;mmC++){if(typeof FlixServices.modular_match_data[mmC]!='undefined'&&typeof FlixServices.modular_match_data[mmC].product_meta!='undefined'&&typeof FlixServices.modular_match_data[mmC].product_meta.inpage!='undefined'&&FlixServices.modular_match_data[mmC].product_meta.inpage.disabled!='undefined'&&FlixServices.modular_match_data[mmC].product_meta.inpage.disabled==0){logqa("fire matchhit HS log")
CheckIfAnyMatchHitHS=true;}
if(mmC==ProLenHS-1&&!CheckIfAnyMatchHitHS){logqa("fire matchmiss HS log");data.type='interactive';data.event_type='matchmisshotspot';flixtracking.log(data)}}}else{if(match.product_meta.hotspot==0&&matchdatacc==0){var data={}
data.type='interactive';data.distributor=flixmain_distributor;data.language=flixmain_language;data.mpn=flixmain_mpn;data.ean=flixmain_ean;data.distributor=flixmain_distributor;data.distributor=flixmain_distributor;data.event_detail='';data.event_type='matchmisshotspot';if(!data.product_id)
data.product_id="0";if(!data.product)
data.product="0";flixtracking.log(data)}}
if(match.modules.ugcs&&match.modules.ugcs.module_id&&match.settings.loaded_modules[match.modules.ugcs.module_id]){setTimeout(function(data2){if(!flixtracking.ugcloaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.ugctracking.init(data2);flixtracking.ugcloaded=true;}},500,data)}
if(!window.comparecheck)
window.comparecheck=false;if(typeof(match.modules.inpageHtml)!=='undefined'){var str=match.modules.inpageHtml[0].fullHtml;var comparecheck=str.search('flix-compare');if(comparecheck!=-1){var ctprodlength=str.split('flix-comp-product').length-1;setTimeout(function(data2){if(window.comparecheck==false&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){window.comparecheck=true;if(ctprodlength>1||ctprodlength===0){flixtracking.products.comparison.init(data2);}}},500,data)}}
if(match.modules.comparison_tables&&typeof match.modules.comparison_tables.store!='undefined'&&typeof match.modules.comparison_tables.store!=''&&match.modules.comparison_tables.module_id&&match.settings.loaded_modules[match.modules.comparison_tables.module_id]){setTimeout(function(data2){if(window.comparecheck==false&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){window.comparecheck=true;flixtracking.products.comparisonv2.init(data2);}},500,data)}
if(match.modules.reviews&&match.modules.reviews.module_id&&match.settings.loaded_modules[match.modules.reviews.module_id]){setTimeout(function(data2){if(!flixtracking.reviewsloaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.reviews.init(data2);flixtracking.reviewsloaded=true;}},500,data)}
flixtracking.checkModuleExists('[flixtemplate-key="reviews"],[flixtemplate-key="complimentary_reviews"]').then((elm)=>{setTimeout(function(data2){if(!flixtracking.reviewsloaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.reviews.init(data2);flixtracking.reviewsloaded=true}},500,data)});if(match.modules.thirdPartyApp&&match.modules.thirdPartyApp.module_id&&match.settings.loaded_modules[match.modules.thirdPartyApp.module_id]){setTimeout(function(data2){if(!flixtracking.thirdPartyApploaded&&(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0)){flixtracking.products.thirdpartywidget.init(data2);flixtracking.thirdPartyApploaded=true;}},500,data)}
matchdatacc++;}
flixtracking.products.viewtimes.init();}else if(typeof FlixServices!='undefined'&&FlixServices.modular_match_data&&typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.minisitePage!='undefined'){var data=FlixjQ.fn.minisite.data
if(flixtracking.replacedModulesOutputInpage.length>0||flixtracking.replacedModulesOutputMinisite.length>0){setTime);},2000)}}else if(typeof FlixServices!='undefined'&&FlixServices.modular_match_data&&typeof FlixServices.modular_match_data!='undefined'&&typeof FlixServices.modular_match_data[0]!='object'){if(typeof FlixServices.modular_match_data.oem!='undefined'&&typeof FlixServices.modular_match_data.oem.not_migrated!='undefined'){logqa('Not migrated log')
function notmigratedfallback(){var data={}
if(typeof window.flixJsCallbacks!='undefined'&&typeof window.flixJsCallbacks.pid!='undefined'&&window.flixJsCallbacks.pid.length>0)
data.product_id=window.flixJsCallbacks.pid
if(data.product_id){logqa('old js loaded- '+window.flixJsCallbacks.pid)
var data={}
data.distributor=flixmain_distributor;data.language=flixmain_language;data.mpn=flixmain_mpn;data.ean=flixmain_ean;data.distributor=flixmain_distributor;data.distributor=flixmain_distributor;data.event_detail=''
if(window.flixJsCallbacks&&window.flixJsCallbacks.pid&window.flixJsCallbacks.pid.length>0){data.product_id=window.flixJsCallbacks.pid
data.pid=window.flixJsCallbacks.pid}
data.type='inpage'
data.event_type='fallback'
flixtracking.log(data)}else{setTime()},1000)}}
notmigratedfallback()}
if(typeof FlixServices.modular_match_data.oem!='undefined'&&((typeof FlixServices.modular_match_data.oem.match_failed!='undefined'&&FlixServices.modular_match_data.oem.match_failed==true)||(typeof FlixServices.modular_match_data.comp.match_failed!='undefined'&&FlixServices.modular_match_data.comp.match_failed==true))){logqa('matchmiss log')
if(typeof main_distributor!='undefined')
flixmain_distributor=main_distributor
if(typeof main_language!='undefined')
flixmain_language=main_language
if(typeof main_mpn!='undefined')
flixmain_mpn=main_mpn
if(typeof main_ean!='undefined')
flixmain_ean=main_ean
var data={}
data.type='inpage'
data.distributor=flixmain_distributor;data.language=flixmain_language
data.mpn=flixmain_mpn;data.ean=flixmain_ean;data.event_detail='';if(!data.product_id)
data.product_id="0";if(!data.product)
data.product="0";if(data.distributor!='2754'){setTime);},2000);}
setTimeout(function(){if(document.querySelector('script[data-flix-distributor]')==null||(document.querySelector('script[data-flix-distributor]')!=null&&document.querySelector('script[data-flix-button]')!=null&&document.querySelector('script[data-flix-distributor]').getAttribute('data-flix-button').length)){data.type='minisite';data.event_type='matchmiss';flixtracking.log(data);}},3000)
data.type='interactive';data.event_type='matchmisshotspot';flixtracking.log(data)}
if(typeof FlixServices.modular_match_data!='undefined'&&FlixServices.modular_match_data=='wildcard_failure'){if(typeof main_distributor!='undefined')
flixmain_distributor=main_distributor
if(typeof main_language!='undefined')
flixmain_language=main_language
if(typeof main_mpn!='undefined')
flixmain_mpn=main_mpn
if(typeof main_ean!='undefined')
flixmain_ean=main_ean
var data={};data.distributor=flixmain_distributor;data.language=flixmain_language;data.mpn=flixmain_mpn;data.ean=flixmain_ean;data.event_detail='';data.product="0";data.type='wildcard'
data.event_type='wildcard_failure'
flixtracking.log(data);}}else{flixtracking.startModularcc++;setTimeout(function(){if(flixtracking.startModularcc<30)
flixtracking.startModular();},500);}},checkModuleExi);},initmoduletracking:function(target){logqa('initmoduletracking: '+target)
const sections=document.querySelectorAll(target);const config={rootMargin:'50px 0px 50px 0px',threshold:0};let isLeaving=false;let observer=new IntersectionObserver(function(entries,self){var delay=0;entries.forEach(entry=>{if(entry.isIntersecting){setTimee;},delay);delay+=100;self.unobserve(entry.target);if(entry.target){}}else if(isLeaving){isLeaving=false;}});},config);if('IntersectionObserver'in window){sections.forE);});}else{}}}
flixtracking.init();}