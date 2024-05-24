if(!Adition_Environment){var Adition_Environment=function(){var _this={};var env={ref:false,os:false,browser:false,screen_res:false,flash:false,prf:false,iframe:false,cb_initialized:false,location:false,user_agent:false};var brs=navigator.userAgent.toLowerCase();var fallback_json_parse=function(){'use strict';var at,ch,escapee={'"':'"','\\':'\\','/':'/',b:'\b',f:'\f',n:'\n',r:'\r',t:'\t'},text,error=next=function(c){if(c&&c!==ch)error("Expected '"+
c+"' instead of '"+ch+"'");ch=text.charAt(at);at+=1;return ch},number=function(){var number,string='';if(ch==='-'){string='-';next('-')}while(ch>='0'&&ch<='9'){string+=ch;next()}if(ch==='.'){string+='.';while(next()&&ch>='0'&&ch<='9')string+=ch}if(ch==='e'||ch==='E'){string+=ch;next();if(ch==='-'||ch==='+'){string+=ch;next()}while(ch>='0'&&ch<='9'){string+=ch;next()}}number=+string;if(!isFinite(number))error('Bad number');else return number},string=function(){var hex,i,string='',uffff;if(ch==='"')while(next())if(ch===
'"'){next();return string}else if(ch==='\\'){next();if(ch==='u'){uffff=0;for(i=0;i<4;i+=1){hex=parseInt(next(),16);if(!isFinite(hex))break;uffff=uffff*16+hex}string+=String.fromCharCode(uffff)}else if(typeof escapee[ch]==='string')string+=escapee[ch];else break}else string+=ch;error('Bad string')},white=word=value,array=object=function(){var key,object={};if(ch==='{'){next('{');white();if(ch==='}'){next('}');return object}while(ch){key=string();white();next(':');if(Object.hasOwnProperty.call(object,key))error('Duplicate key "'+
key+'"');object[key]=value();white();if(ch==='}'){next('}');return object}next(',');white()}}error('Bad object')};value=return function(source,reviver){var result;text=source;at=0;ch=' ';result=value();white();if(ch)error('Syntax error');return typeof reviver==='function'?function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==='object')for(k in value)if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined)value[k]=v;else delete value[k]}return reviver.call(holder,key,value)}({'':result},''):result}}();_this.parseJSON=function(data){if(typeof data!=='string'||!data)return null;data=data.replace(/^\s+/,'');for(var i=data.length-1;i>=0;i--)if(/\S/.test(data.charAt(i))){data=data.substring(0,i+1);break}if(window.JSON&&window.JSON.parse)return window.JSON.parse(data);return fallback_json_parse(data)};
_this.getVersion=_this.getRef=function(){if(window.adition_overwrite_location&&_this.getIframe()===1)return escape(window.adition_overwrite_location);if(env.ref===false)env.ref=escape(document.referrer);return env.ref};_this.getOS=function(){if(env.os===false){var os=-1;if(brs.search(/xbox\sseries/)!=-1){os=31}else if(brs.search(/xbox\sone/)!=-1){os=30}else if(brs.search(/playstation\s5/)!=-1){os=29}else if(brs.search(/playstation\s4/)!=-1){os=28}else if(brs.search(/windows\sphone\s10\.0/)!=-1){os=25}else if(brs.search(/windows\sphone\s8\.1/)!=-1){os=24}else if(brs.search(/windows\sphone\s8\.0/)!=-1){os=23}else if(brs.search(/xbox/)!=-1){os=22}else if(brs.search(/symbian/)!=-1){os=13}else if(brs.search(/windows\snt\s6\.2;\sarm/)!=-1){os=18}else if(brs.search(/cros/)!=-1){os=19}else if(brs.search(/windows\snt\s6\.3/)!=-1){os=16}else if(brs.search(/windows\snt\s6\.2/)!=-1){os=15}else if(brs.search(/iphone|ipad|cfnetwork/)!=-1){os=14}else if(brs.search(/android/)!=-1){os=12}else if(brs.search(/windows\sce/)!=-1){os=11}else if(brs.search(/windows\snt\s10\.0/)!=-1){os=17}else if(brs.search(/playstation/)!=-1){os=20}else if(brs.search(/nintendo/)!=-1){os=21}else if(brs.search(/blackberry/)!=-1){os=26}else if(brs.search(/nokia/)!=-1){os=27}else if(brs.search(/windows\snt\s6\.1/)!=-1){os=10}else if(brs.search(/unix/)!=-1){os=7}else if(brs.search(/linux/)!=-1){os=6}else if(brs.search(/mac\sos\sx|macintosh|mac\x5fpowerpc/)!=-1){os=5}else if(brs.search(/windows\snt\s6\.0/)!=-1){os=9}else if(brs.search(/windows\snt\s5\.2/)!=-1){os=8}else if(brs.search(/windows\snt\s5\.1/)!=-1){os=3}else if(brs.search(/windows\snt\s5\.0/)!=-1){os=2}else if(brs.search(/windows\snt\s4\.0/)!=-1){os=4}else if(brs.search(/windows\s95|windows\sme|win98|windows\s98/)!=-1){os=1};env.os=os}return env.os};_this.getBrowser=function(){if(env.browser===false){var browser=-1;if(brs.search(/ucbrowser|ucweb/)!=-1){browser=16}else if(brs.search(/spotify/)!=-1){browser=31}else if(brs.search(/fban|fb_iab/)!=-1){browser=30}else if(brs.search(/silk/)!=-1){browser=28}else if(brs.search(/qqbrowser/)!=-1){browser=26}else if(brs.search(/vivaldi/)!=-1){browser=23}else if(brs.search(/yabrowser/)!=-1){browser=20}else if(brs.search(/edge|edg/)!=-1){browser=15}else if(brs.search(/chromium/)!=-1){browser=17}else if(brs.search(/metasr/)!=-1){browser=27}else if(brs.search(/360se|360ee/)!=-1){browser=25}else if(brs.search(/maxthon|myie/)!=-1){browser=24}else if(brs.search(/palemoon/)!=-1){browser=22}else if(brs.search(/iron/)!=-1){browser=21}else if(brs.search(/trident\/(7\.0)/)!=-1){browser=14}else if(brs.search(/iceweasel/)!=-1){browser=19}else if(brs.search(/seamonkey/)!=-1){browser=18}else if(brs.search(/nokia/)!=-1){browser=29}else if(brs.search(/msie\s10/)!=-1){browser=13}else if(brs.search(/msie\s9/)!=-1){browser=12}else if(brs.search(/chrome\//)!=-1){browser=11}else if(brs.search(/msie\s8/)!=-1){browser=10}else if(brs.search(/opera|OPR/)!=-1){browser=7}else if(brs.search(/gecko\//)!=-1){browser=6}else if(brs.search(/msie\s7/)!=-1){browser=9}else if(brs.search(/konqueror|safari/)!=-1){browser=8}else if(brs.search(/msie\s6/)!=-1){browser=3}else if(brs.search(/netscape4/)!=-1){browser=4}else if(brs.search(/msie\s5/)!=-1){browser=2}else if(brs.search(/msie\s4/)!=-1){browser=1}else if(brs.search(/netscape6|netscape\/(7\.\d*)/)!=-1){browser=5};env.browser=browser}return env.browser};_this.getScreenRes=
function(){if(env.screen_res===false){var width,height,screen_res=-1;var resList={"360":{"740":464},"640":{"480":1},"720":{"400":153},"768":{"1024":199},"800":{"240":465,"352":466,"480":154,"600":2},"832":{"624":159},"848":{"480":155},"852":{"480":156},"854":{"480":467},"858":{"484":158},"864":{"480":157},"960":{"540":160,"544":468,"640":162,"720":163},"964":{"544":161},"1024":{"576":164,"600":165,"640":469,"768":3,"800":472,"1024":476},"1072":{"600":166},"1080":{"1200":477},"1120":{"832":474},"1136":{"640":470},"1138":{"640":471},"1152":{"720":473,"768":167,"864":4,"870":168,"900":169},"1200":{"800":170,"900":171},"1280":{"720":172,"768":9,"800":10,"854":173,"960":7,"1024":5},"1334":{"750":475},"1360":{"768":174,"1024":179},"1366":{"768":175,"1024":180},"1376":{"768":176},"1400":{"900":177,"1050":8},"1440":{"900":11,"960":178,"1024":478,"1080":479,"1440":482},"1600":{"768":181,"900":182,"1024":183,"1200":6,"1280":481},"1680":{"1050":12},"1776":{"1000":480},"1792":{"1344":483},"1800":{"1440":487},"1856":{"1392":486},"1920":{"1080":184,"1200":13,"1280":484,"1400":185,"1440":186},"2048":{"1152":187,"1280":490,"1536":188},"2160":{"1200":489,"1440":494},"2256":{"1504":496},"2280":{"1080":485},"2304":{"1440":495,"1728":497},"2436":{"1125":491},"2538":{"1080":492},"2560":{"1080":493,"1440":190,"1600":191,"1700":500,"1800":501,"1920":503,"2048":192},"2732":{"2048":507},"2736":{"1824":505},"2800":{"2100":193},"2880":{"900":488,"1440":498,"1620":502,"1800":506},"2960":{"1440":499},"3000":{"2000":509},"3200":{"1800":508,"2048":511,"2400":513},"3240":{"2160":512},"3440":{"1440":504},"3840":{"1600":510,"2160":514,"2400":515},"4096":{"2304":516,"3072":519},"4480":{"2520":518},"4500":{"3000":520},"5120":{"2160":517,"2880":521,"3200":522,"4096":523},"6016":{"3384":524},"6400":{"4096":525,"4800":526},"6480":{"3240":527},"7680":{"4320":528,"4800":529},"8192":{"4320":530,"4608":531,"8192":533},"10240":{"4320":532},"15360":{"8640":534}};for(width in resList){if(width<screen.width)continue;for(height in resList[width]){if(height<screen.height)continue;screen_res=resList[width][height];break}break}env.screen_res=screen_res}return env.screen_res};_this.getLocation=function(){if(window.adition_overwrite_location)return escape(window.adition_overwrite_location);if(env.location==false)env.location=escape(document.location);return env.location};
_this.getFlashVersion=function(){if(env.flash===false){var flash='';var n=navigator;var plugin=null;if(n.plugins&&n.plugins.length)for(var ii=0;ii<n.plugins.length;ii++){if(n.plugins[ii].name.indexOf('Shockwave Flash')!=-1){plugin=n.plugins[ii];flash=plugin.description.split('Shockwave Flash ')[1];i=flash.indexOf('.');flash=flash.substr(0,i);break}}else if(window.ActiveXObject)for(var ii=20;ii>=2;ii--)try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");if(fl){flash=ii;break}}catch(e){}env.flash=
flash}return env.flash};_this.isFlashBlocked=function(){var blocked=false;var is_firefox=navigator.userAgent.toLowerCase().indexOf('firefox')>-1;if(is_firefox){var plugin=navigator.plugins['Shockwave Flash'];if(!plugin)return false;var flash_version=plugin.version.split('.');if(flash_version.length===4){var mj=parseInt(flash_version[0],10),mn=parseInt(flash_version[1],10),rmj=parseInt(flash_version[2],10),rmn=parseInt(flash_version[3],10);if(mj<18||mj===18&&mn===0&&rmj===0&&rmn<=203)blocked=true}}return blocked};
_this.getPrf=function(cuId){var prf='';try{prf=Adition_Prfstr(cuId)}catch(e){}return prf};_this.getIframe=function(){if(env.iframe===false){var iframe=0;try{if(window.top!==window)iframe=1}catch(e){iframe=1}env.iframe=iframe}return env.iframe};_this.getUserAgent=function(){if(env.user_agent===false)env.user_agent=escape(navigator.userAgent);return env.user_agent};_this.getAllAsQueryString=function(wpId){var url=_this.getPrf(wpId);url+='&os='+_this.getBrowser();url+='&screen_res='+_this.getScreenRes();
url+='&ref='+_this.getRef();url+='&fvers='+_this.getFlashVersion();url+='&iframe='+_this.getIframe();url+='&ro='+_this.getLocation();url+='&uao='+_this.getUserAgent();return url};_this.initCB=_this.getYieldProbe=function(cuId){var mapped_result=adition_yieldlab[cuId];var yl_result=yl.YpResult.get(mapped_result.adslotId);yl_result.checkId=mapped_result.checkId;return yl_result};try{_this.getUserID=Adition_Delivery.getUserID}catch(e){}return _this}();function Adition_OSId(){return Adition_Environment.getOS()}
function Adition_BrowserId(){return Adition_Environment.getBrowser()}function Adition_ResId(){return Adition_Environment.getScreenRes()}function Adition_Referrer(){return[Adition_Environment.getIframe(),Adition_Environment.getRef()]}function Adition_UserAgent(){return Adition_Environment.getUserAgent()}function Adition_Location(){return Adition_Environment.getLocation()}function Adition_Flash(){return Adition_Environment.getFlashVersion()}}
if(!Adition_Jsonp_Manager)var Adition_Jsonp_Manager=function(){var _this={};var store={};var createStoreObject=function(adUrl,callBack,params){try{var wpId=(new RegExp(/(?:sid=)([0-9]+)/)).exec(adUrl)[1]}catch(e){throw new Error('Could not match Contentunit ID');}if(typeof callBack!='function')throw new Error('Callback has to be a function');adUrl=adUrl.match(/wpt=X/i)!=null?adUrl:adUrl+'&wpt=X';if(typeof params=='object'){if(typeof params.keyword=='string')adUrl+='&keyword='+params.keyword;if(typeof params.profile=='object')for(var key in params.profile)adUrl+=
'&p['+key+']='+params.profile[key];if(typeof params.data=='object')for(var key in params.data)adUrl+='&data['+key+']='+params.data[key]}if(Adition_Environment)adUrl+=Adition_Environment.getAllAsQueryString(wpId);return{'wpId':wpId,'adUrl':adUrl,'params':params,'callBack':callBack}};_this.get=function(adUrl,callBack,params){var obj=createStoreObject(adUrl,callBack,params);store[obj.wpId]=obj;var scr=document.createElement('script');scr.setAttribute('type','text/javascript');scr.setAttribute('src',
obj.adUrl);document.getElementsByTagName('head')[0].appendChild(scr)};_this.insert=function(wpId,obj){try{store[wpId].callBack(obj)}catch(e){}};return _this}();
if(window.Adition_VT_Area===undefined){window.Adition_VT_Area=new Object;(function(exports){exports.getWindowViewportSize=function(){if(window.document.compatMode){var body=window.document.compatMode=='BackCompat'?window.document.body:window.document.documentElement;return function(){return{width:body.clientWidth,height:body.clientHeight}}}else return ();exports.measureVisibleAreaPercentage=function(htmlElement){var viewportSize=
exports.getWindowViewportSize();var elementRect=htmlElement.getBoundingClientRect();var elementWidth=elementRect.right-elementRect.left;var elementHeight=elementRect.bottom-elementRect.top;var visibleWidth=Math.min(Math.max(elementRect.right,0),viewportSize.width)-Math.min(Math.max(elementRect.left,0),viewportSize.width);var visibleHeight=Math.min(Math.max(elementRect.bottom,0),viewportSize.height)-Math.min(Math.max(elementRect.top,0),viewportSize.height);var elementArea=elementWidth*elementHeight;
var visibleArea=visibleWidth*visibleHeight;var percentage=100*visibleArea/elementArea;return Math.round(percentage)}})(window.Adition_VT_Area)}if(!Adition_VT_API)var Adition_VT_API={trackViewtime:;
if(!Adition_VT_Manager){var Adition_VT_Manager=function(){var _this={};var _protocolVersion=6;var _postmessageProtocolHeadVersion=parseInt('2');var _serverProtocolPrefix=(window.location.protocol.match(/http/i)?window.location.protocol:'https:')+'//';var _vtCustomKey='vt_cust';var _fallbackServerAddress='vt.adition.com/d';var STATE={'MEASUREMENT_POSSIBLE':0,'MEASUREMENT_NOT_POSSIBLE':1,'MEASUREMENT_ELEMENT_HIDDEN':2,'MEASUREMENT_ELEMENT_OUT_OF_BOUNDS':3,'ELEMENT_INVISIBLE':1,'ELEMENT_VISIBLE':2};
var userActionMaxAge=6E4;var elements=[];_this.interval=false;_this.tabActiveState=true;_this.tabActiveStateDate=new Date;_this.lastUserAction=new Date;_this.userIsActive=function(){if(!_isTopWindow(window))return true;var actionOccured=new Date-_this.lastUserAction<userActionMaxAge;if(actionOccured&&_this.tabActiveState)return true;return false};_this.setMeasureInterval=function(){if(_this.interval){window.clearInterval(_this.interval);_this.interval=false}_this.interval=window.setInterval(_this.measure,
1E3)};_this.getViewportDimension=function(){if(document.compatMode){var docBody=document.compatMode=='BackCompat'?window.document.body:window.document.documentElement;var w=docBody.clientWidth;var h=docBody.clientHeight}else{var w=window.innerWidth;var h=window.innerHeight}return{width:w,height:h}};_this.measure=function(){window.clearInterval(_this.interval);_this.interval=false;for(var i=0;i<elements.length;i++)try{elements[i].periodicMeasure()}catch(e){console.log(e)}_this.setMeasureInterval()};
_this.trackAll=_this.checkVisibility=function(obj){if(obj.currentStyle){if(obj.currentStyle.visibility=='hidden'||obj.currentStyle.display=='none'||(obj.currentStyle.overflowY=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&obj.currentStyle.height=='0px'||(obj.currentStyle.overflowX=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&obj.currentStyle.width=='0px')return false}else if(window.getComputedStyle(obj,null).getPropertyValue('visibility')==
'hidden'||window.getComputedStyle(obj,null).getPropertyValue('display')=='none'||(window.getComputedStyle(obj,null).getPropertyValue('overflow-y')=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&window.getComputedStyle(obj,null).getPropertyValue('height')=='0px'||(window.getComputedStyle(obj,null).getPropertyValue('overflow-x')=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&window.getComputedStyle(obj,null).getPropertyValue('width')=='0px')return false;return true};_this.addObservedElement=function(config){var domElement=
config.nodeId;var logId=config.logId;var networkId=config.networkId;var maxViewtime=config.maxViewtime;var minChange=config.minChange;var maxTrack=config.maxTrans;var serverAddress=config.serverURI;var preFactor=config.preFactor||100;var customSurface=config.userArea;var customTime=config.userTime;var campaignId=config.campaignId;var bannerId=config.bannerId;var contentunitId=config.contentunitId;var useObserver='IntersectionObserver'in window&&(config.useObserver===undefined?true:config.useObserver);
customSurface=customSurface||0;customTime=customTime||0;serverAddress=serverAddress||_fallbackServerAddress;for(var i=0;i<elements.length;i++)if(elements[i].lid==logId)return;if(typeof domElement=='string')domElement=document.getElementById(domElement);if(domElement&&domElement.nodeName){var flStr=Adition_Environment.getBrowser()==11||Adition_Environment.getBrowser()==6?'embed':'object';if(domElement.getElementsByTagName(flStr).length==1)domElement=domElement.getElementsByTagName(flStr)[0];if(!domElement.id)domElement.id=
Math.random();var measurementObject={useObserver:useObserver,observer:null,serverAddress:serverAddress,lid:logId,n:networkId?networkId:0,campaignId:campaignId,bannerId:bannerId,contentunitId:contentunitId,config:config,currentArea:0,customTime:customTime,isTracking:false,initInterval:null,initCount:0,maxvt:maxViewtime?maxViewtime:60,minc:minChange?minChange:5,maxt:maxTrack?maxTrack:5,measurementState:STATE.MEASUREMENT_POSSIBLE,dom:domElement,state:0,initTime:false,lastMeasureTime:new Date,vt:0,vtContainer:createVTMeasurementContainer(customSurface),
ma:0,suvt:0,hpos:0,vpos:0,sfac:preFactor?preFactor/100:1,surface:0,actualSurface:null,lastTrack:{vt:0,ma:0,suvt:0,hpos:0,vpos:0,time:new Date,count:0},periodicMeasure:function(){if(this.initTime==false)return;if(document.getElementById(this.dom.id)===null){_this.removeElement(this);return}this.measure();var now=new Date;if(now-this.initTime>=28E4&&this.vt>this.lastTrack.vt){this.track();_this.removeElement(this)}else if(this.isTrackable()&&this.isTracking==false){this.isTracking=true;this.track()}},
closeMeasure:getElementSurface:function(){var element=document.getElementById(this.dom.id);return Adition_VT_Area.measureVisibleAreaPercentage(element)},updateCurrentArea:measure:function(){var surface,state;if(this.useObserver)surface=this.dom.clientHeight>0?this.actualSurface:this.surface;else surface=Math.max(0,Math.min(100,this.getElementSurface()));state=surface>0?STATE.ELEMENT_VISIBLE:STATE.ELEMENT_INVISIBLE;this.update(state,
surface*this.sfac)},measureIO:function(observer,event){var surface=Math.round(Math.max(0,Math.min(100,event.intersectionRatio.toString()*100)));this.actualSurface=surface;if(this.dom.clientHeight<1)surface=0;var state=observer.trackVisibility?event.isVisible:surface>0;this.update(state?STATE.ELEMENT_VISIBLE:STATE.ELEMENT_INVISIBLE,surface*this.sfac)},update:function(state,surface){var lastMeasureTime=this.lastMeasureTime;var currentTime=new Date;var timeDeltaMilliSeconds=(currentTime-lastMeasureTime)/
1E3;this.lastMeasureTime=currentTime;if(this.state===STATE.ELEMENT_VISIBLE&&_this.userIsActive()){this.vt+=timeDeltaMilliSeconds;this.vtContainer.update(surface,timeDeltaMilliSeconds);this.suvt+=timeDeltaMilliSeconds*(this.surface/100)}this.state=state;this.surface=Math.round(surface);if(this.surface>this.ma)this.ma=this.surface},getSecondsSinceInit:function(){return Math.round((new Date-this.initTime)/1E3)},isTrackable:function(){if(this.lastTrack.count==0)return true;else if(this.vt==0||this.lastTrack.count>=
this.maxt||this.lastTrack.vt>this.maxvt)return false;else if(this.lastTrack.count>1&&this.lastTrack.vt+this.minc>this.vt)return false;else if(this.vt-this.lastTrack.vt<(this.maxvt-this.lastTrack.vt)/(this.maxt-this.lastTrack.count))return false;return true},track:function(){var trackCount=this.lastTrack.count+1;this.lastTrack={vt:this.vt,ma:this.ma,suvt:Math.round(this.suvt),hpos:this.hpos,vpos:this.vpos,time:new Date,count:trackCount};_this.doTrack(this.lid,this.n,this.measurementState,this);this.isTracking=
false},getUrl:function(){var params,vtData;params=this.getUrlParams({vt:Math.ceil(this.vt),elapsed:this.getSecondsSinceInit(),ma:this.ma,suvt:Math.round(this.suvt),h:this.hpos,v:this.vpos});vtData=this.vtContainer.getData();vtData[_vtCustomKey]=this.customTime>0&&vtData[_vtCustomKey]>=this.customTime?1:0;this.copyProperties(params,vtData);return this.getUrlByParams(params)},getUrlForFailure:function(errorCode){var params;if(errorCode===undefined)errorCode=this.measurementState;params=this.getUrlParams({f:errorCode});
return this.getUrlByParams(params)},getUrlByParams:getUrlParams:function(additionalParams){var params;params={lid:this.lid,n:this.n,c:this.campaignId,b:this.bannerId,cu:this.contentunitId};this.copyProperties(params,additionalParams);return params},copyProperties:function(targetObject,sourceObject){var key;for(key in sourceObject){if(!sourceObject.hasOwnProperty(key))continue;targetObject[key]=sourceObject[key]}},
createRequestStringByParameters:function(params){var value,requestKeyValuePairs,loopKey;requestKeyValuePairs=[];for(loopKey in params){if(!params.hasOwnProperty(loopKey))continue;value=params[loopKey];if(value===undefined)continue;requestKeyValuePairs.push(loopKey+'='+value)}return requestKeyValuePairs.join('&')},init:function(){this.measurementState=STATE.MEASUREMENT_POSSIBLE;this.initCount++;if(this.dom.id!=null&&this.dom!=document.getElementById(this.dom.id))this.dom=document.getElementById(this.dom.id);
if(Adition_BrowserId()==1||Adition_BrowserId()==2){_urlRequest(this.getUrlForFailure(STATE.MEASUREMENT_NOT_POSSIBLE));_this.removeElement(this);return true}if(this.useObserver)return this.initObserver();else return this.initPoll()},initPoll:function(){var x=0;var y=0;if(this.dom.offsetParent){var obj=this.dom;while(obj){x+=obj.offsetLeft;y+=obj.offsetTop;obj=obj.offsetParent}}if(this.dom.parentElement){var obj=this.dom;while(obj.parentElement){if(!_this.checkVisibility(obj))this.measurementState=
STATE.MEASUREMENT_ELEMENT_HIDDEN;obj=obj.parentElement}}var viewport=_this.getViewportDimension();this.hpos=Math.round(x/viewport.width*100)>9999?9999:Math.round(x/viewport.width*100);this.vpos=Math.round(y/viewport.height*100)>9999?9999:Math.round(y/viewport.height*100);if(this.hpos<0||this.vpos<0){var viewportPosition=document.getElementById(this.dom.id).getBoundingClientRect();var elementHeight=viewportPosition.bottom-viewportPosition.top;var elementWidth=viewportPosition.right-viewportPosition.left;
if(x<0)if(x+elementWidth<=0)this.measurementState=STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS;else this.hpos=0;if(y<0)if(y+elementHeight<=0)this.measurementState=STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS;else this.vpos=0;if(this.measurementState==STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS){this.hpos='';this.vpos=''}}if(this.measurementState!=STATE.MEASUREMENT_POSSIBLE)return false;this.measure();this.initTime=new Date;return true},initObserver:function(){var _this=this;var options={threshold:[],delay:100,
trackVisibility:true};for(var i=0;i<=1;i+=0.01)options.threshold.push(i);this.observer=new IntersectionObserver(function(events,observer){_this.measureIO(observer,events[0])},options);this.observer.observe(this.dom);this.initTime=new Date;return true}};elements.push(measurementObject);if(!measurementObject.init())measurementObject.initInterval=window.setInterval(function(){if(measurementObject.init()||measurementObject.initCount>50){window.clearInterval(measurementObject.initInterval);if(measurementObject.initCount>
50){_this.doTrack(measurementObject.lid,measurementObject.n,measurementObject.measurementState,measurementObject);_this.removeElement(measurementObject)}}},100)}else _this.trackErrorByViewtimeConfig(config,STATE.MEASUREMENT_NOT_POSSIBLE)};_this.removeElement=function(measurementObject){for(var i=0;i<elements.length;i++)if(measurementObject==elements[i])elements.splice(i,1)};_this.doTrack=function(logId,networkId,state,measurementObject){switch(state){case STATE.MEASUREMENT_ELEMENT_HIDDEN:case STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS:case STATE.MEASUREMENT_NOT_POSSIBLE:_urlRequest(measurementObject.getUrlForFailure());
break;case STATE.MEASUREMENT_POSSIBLE:_urlRequest(measurementObject.getUrl());break}};_this.trackErrorByViewtimeConfig=function(viewtimeConfig,errorState){var url;var logId=viewtimeConfig.logId;var networkId=viewtimeConfig.networkId;var serverAddress=viewtimeConfig.serverURI;var campaignId=viewtimeConfig.campaignId;var bannerId=viewtimeConfig.bannerId;var contentunitId=viewtimeConfig.contentunitId;url=serverAddress+'?lid='+logId+'&f='+errorState+'&n='+networkId;if(campaignId!==undefined)url+='&c='+
campaignId;if(bannerId!==undefined)url+='&b='+bannerId;if(contentunitId!==undefined)url+='&cu='+contentunitId;_urlRequest(url)};function _urlRequest(url){var img=new Image;img.src=_serverProtocolPrefix+url+'&version='+_protocolVersion}_this.postMessageHandler=function(event){var viewtimeConfig,iframes,domElement,contentWin,json,iframeListIndex;if(event.source===window||event.source===undefined)return;try{json=Adition_Environment.parseJSON(event.data)}catch(e){json=null}if(json&&json.service&&json.service==
'Adition_VT_Manager'&&json.networkId){contentWin=_findContentWindow(event.source);if(contentWin===undefined)return;domElement=null;iframes=document.getElementsByTagName('iframe');for(iframeListIndex=0;iframeListIndex<iframes.length;iframeListIndex++)if(iframes[iframeListIndex].contentWindow===contentWin){domElement=iframes[iframeListIndex];break}viewtimeConfig=_createViewtimeConfigFromPostMessage(json);if(!viewtimeConfig.preFactor||viewtimeConfig.preFactor<=0)_this.trackErrorByViewtimeConfig(viewtimeConfig,
STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS);else{json.nodeId=domElement;Adition_VT_API.trackViewtime(json)}event.source.postMessage('{"service":"Adition_VT_Manager","state":"ok","logId":"'+json.logId+'"}','*')}};function _createViewtimeConfigFromPostMessage(postMessage){var config;if(postMessage.version&&postMessage.version==_postmessageProtocolHeadVersion){config=postMessage;delete config.version}else{config={};config.service=postMessage.service;config.networkId=postMessage.networkId;config.logId=postMessage.logId;
config.maxViewtime=postMessage.maxViewtime;config.minChange=postMessage.minChange;config.maxTrans=postMessage.maxTrack;config.preFactor=postMessage.max_surface;config.serverURI=_fallbackServerAddress}return config}function _findContentWindow(currentWindow){if(_isTopWindow(currentWindow))throw'Top window passed';while(!_isTopWindow(currentWindow.parent))currentWindow=currentWindow.parent;return currentWindow}unction installEventListener(event,
func,eventTarget){eventTarget=eventTarget||window;if(navigator.appVersion.indexOf('MSIE')!=-1)eventTarget.attachEvent('on'+event,func);else eventTarget.addEventListener(event,func,false)}function createVTMeasurementContainer(customSurface){var container=new Adition_VT_MeasurementContainer;container.registerItem(new Adition_VT_MeasurementItem('vt_50',50));container.registerItem(new Adition_VT_MeasurementItem('vt_60',60));container.registerItem(new Adition_VT_MeasurementItem('vt_100',100));if(customSurface>
0)container.registerItem(new Adition_VT_MeasurementItem(_vtCustomKey,customSurface));return container}function initTopWindowListeners(){var ua=installEventListener('mousemove',ua,document);installEventListener('mousedown',ua,document);installEventListener('scroll',ua);installEventListener('resize',ua);installEventListener('scroll',_this.measure);installEventListener('resize',_this.measure);if(window.postMessage)installEventListener('message',_this.postMessageHandler);
var tabActivityEventMap={hidden:'visibilitychange',mozHidden:'mozvisibilitychange',webkitHidden:'webkitvisibilitychange',msHidden:'msvisibilitychange'};var tabEvent=function(){for(ev in tabActivityEventMap)if(tabActivityEventMap.hasOwnProperty(ev)&&ev in document)return[ev,tabActivityEventMap[ev]];return false}();var tabActivityEvents=['focus','blur','focusin','focusout'];if(tabEvent)tabActivityEvents.push(tabEvent[1]);for(var i=0;i<tabActivityEvents.length;i++)installEventListener(tabActivityEvents[i],
function(event){_this.tabActiveStateDate=new Date;if(event.type=='focus'||event.type=='focusin')_this.tabActiveState=true;else if(event.type=='blur'||event.type=='focusout')_this.tabActiveState=false;else _this.tabActiveState=document[tabEvent[0]]?false:true})}function init(){if(_isTopWindow(window))initTopWindowListeners();installEventListener('unload',_this.trackAll);_this.setMeasureInterval()}init();return _this}();Adition_VT_MeasurementContainer=Adition_VT_MeasurementContainer.prototype.registerItem=
Adition_VT_MeasurementContainer.prototype.update=function(surface,timeDelta){for(var i=0,item,len=this.items.length;i<len;i++){item=this.items[i];if(item.minSurface<0)continue;if(surface>=item.minSurface)item.time+=timeDelta}};Adition_VT_MeasurementContainer.prototype.getData=function(){var params={};for(var i=0,item,len=this.items.length;i<len;i++){item=this.items[i];params[item.name]=Math.ceil(item.time)}return params};Adition_VT_MeasurementItem=
if(typeof window.Adition_Prfstr=='undefined')window.Adition_Prfstr=function(ADITION_CONTENTUNIT_ID){var yprf;try{var ypParams=Adition_Environment.getYieldProbe(ADITION_CONTENTUNIT_ID);yprf='&p[_yl_adslotId:'+ypParams.id+',_yl_checkId:'+ypParams.checkId+',_yl_price:'+ypParams.price+',_yl_advertiser:'+escape(ypParams.advertiser)+',_yl_curl:'+escape(ypParams.curl);if(ypParams.pid!==undefined)yprf+=',_yl_pid:'+escape(ypParams.pid);if(ypParams.prio!==undefined)yprf+=',_yl_prio:'+escape(ypParams.prio);
yprf+=']'}catch(e){yprf=''}return yprf};
if(!Adition_PostMessageService)var Adition_PostMessageService=function(){var _this={};_this.handleRequest=function(requestString){try{var requestObject=JSON.parse(requestString)}catch(exception){return null}if(typeof requestObject.method=='string')if(typeof _this.serviceMethods[requestObject.method]=='function'){var resultObject=_this.serviceMethods[requestObject.method]();if(requestObject['response']){for(var i in requestObject['response'])if(requestObject['response'][i]=='#result#'){requestObject['response'][i]=
resultObject;break}var answerString=JSON.stringify(requestObject['response']);return answerString}}return null};_this.serviceMethods={getLocation:function(){var object={location:window.location.href,referrer:document.referrer};return object},turnOff:;_this.serviceListener=function(event){var whiteList=[/^http[s]?:\/\/[\w\.]*t4ft\.de$/i,/^http[s]?:\/\/[\w\.]*adition\.com$/i,/^http[s]?:\/\/dmp\.theadex\.com$/i];var validOrigin=false;if(window==event.source)return null;
for(var i=0;i<whiteList.length;i++)if(whiteList[i].test(event.origin)){validOrigin=true;break}if(validOrigin){var requestString=event.data;var answerString=_this.handleRequest(requestString);if(answerString)event.source.postMessage(answerString,event.origin)}};_this.turnOn=function(){if(window.addEventListener)window.addEventListener('message',_this.serviceListener,false);else if(window.attachEvent)window.attachEvent('onmessage',_this.serviceListener)};_this.turnOff=function(){if(window.removeEventListener)window.removeEventListener('message',
_this.serviceListener);else window.detachEvent('onmessage',_this.serviceListener)};if(window!=top)_this.turnOff();else _this.turnOn();return _this}();