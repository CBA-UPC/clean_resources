(function(undef){var
version="2.1.7",author="Vova Feldman",global=this,is_migrating=false;if(typeof(RW_Advanced_Options)==="undefined"){RW_Advanced_Options={};}
if(typeof(String.prototype.isEmpty)!=="function")
String.prototype.isEmpty=if(typeof(String.prototype.ltrim)!=="function")
String.prototype.ltrim=function(str)
{if(typeof(str)=="undefined")
str="\\s";return this.replace(new RegExp("^("+str+")+"),"");};if(typeof(String.prototype.rtrim)!=="function")
String.prototype.rtrim=function(str)
{if(typeof(str)=="undefined")
str="\\s";return this.replace(new RegExp("("+str+")+$"),"");};if(typeof(String.prototype.trim)!=="function")
String.prototype.trim=if(typeof(String.prototype.left)!=="function")
String.prototype.left=if(typeof(String.prototype.right)!=="function")
String.prototype.right=if(typeof(String.prototype.contains)!=="function")
String.prototype.contains=if(typeof(String.prototype.startsWith)!=="function")
String.prototype.startsWith=if(typeof(String.prototype.endsWith)!=="function")
String.prototype.endsWith=function(s){return((this.length-s.length)===this.lastIndexOf(s));};if(typeof(String.prototype.ucfirst)!=="function")
String.prototype.ucfirst=function(){return(this.length==0?this:this.charAt(0).toUpperCase()+this.slice(1));};if(typeof(String.prototype.toInt)!=="function")
String.prototype.toInt=if(typeof(Array.prototype.indexOf)!=="function")
Array.prototype.indexOf=var emptyFunc=if(!window.console)console={};console.log=console.log||emptyFunc;console.warn=console.warn||emptyFunc;console.error=console.error||emptyFunc;console.info=console.info||emptyFunc;var doc=document,body=document.body,docElem=doc.documentElement,win=window,nav=navigator;var DUMMY_STR="DUMMY",UNDEF="undefined",EMPTY_PCID="00000000-0000-0000-0000-000000000000",svgXmlns='http://www.w3.org/2000/svg',EMPTY_OPTIONS={},HTTPS=location.href.match(/^https/i),LOCALHOST=false,DOMAIN='rating-widget.com',WWW=(HTTPS?'https://rating-widget.com/':'http://rating-widget.com/'),WWW_IMG=(HTTPS?'https://rating-widget.com/img/':'//img.rating-widget.com/'),WWW_JS=(HTTPS?'https://rating-widget.com/js/':'//js.rating-widget.com/'),WWW_CSS=(HTTPS?'https://rating-widget.com/css/':'//css.rating-widget.com/'),WWW_TMB=(HTTPS?'https://rating-widget.com/apps/thumb/':'http://tmb.rating-widget.com/'),_DOMAIN_REGEX=/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i;var is_IE=false,is_FF=false,is_CH=false,is_SF=false,is_OP=false;if(nav.userAgent)
{is_IE=(-1!=nav.userAgent.indexOf("MSIE"));is_FF=(-1!=nav.userAgent.indexOf("Firefox"));is_CH=(-1!=nav.userAgent.indexOf("Chrome"));is_SF=(-1!=nav.userAgent.indexOf("Safari"));is_OP=(-1!=nav.userAgent.indexOf("Opera"));}
global.RW=function()
{var goptions=null,ratings={},elements={},options={},coptions={},langs={en:true},themes={},render_options={},_isPremium=false,_plan='free',_isMobile=false,_showRecommendations=false,_showSponsoredRecommendations=false,_ratings={},_count=0,_recommendations=[],_resourceMonitor={data:false,resources:false,css:false,dcss:false},_timestamp=new Date(),_cookie,_identified=false,_initialized=false;var ratings_data=[];var load_call_num=0;var
_initTooltip=function()
{RW._tooltip=doc.createElement("span");RW._tooltip.style.display="none";RW._tooltip.className="rw-ui-tooltip";body.appendChild(RW._tooltip);},_isFlashInstalled=function()
{var SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash";var version=[0,0,0],d=null;if(RW._is(nav.plugins)&&typeof(nav.plugins[SHOCKWAVE_FLASH])=="object")
{d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(RW._is(nav.mimeTypes)&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin))
{d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");version[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);version[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);version[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;return version;}}
else if(RW._is(win.ActiveXObject))
{try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a)
{d=a.GetVariable("$version");if(d)
{d=d.split(" ")[1].split(",");return[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}}
catch(e){}}
return false;},_rateCallback=function(res,urid)
{var rating=_ratings[urid];if(!RW._isNumeric(urid)||!RW._is(rating))
{RW._clearJS();return;}
if(!res.success)
RW._error(res.msg);rating.voteCompleted(res.success,res.data,res.msg);RW._clearJS();},_syncRatings=function()
{var chunk=[],chunks=[chunk],len=0,rlen,rating,img,flush_sync=(window.location.toString().indexOf('DBG=')>-1);for(var urid in _ratings)
{if(!flush_sync&&_ratings[urid].isSynced())
continue;if(false===_ratings[urid].getOption('forceSync')&&(_ratings[urid].getOption('readOnly')||false===_ratings[urid].getOption('sync')))
continue;rating={rid:_ratings[urid].rid.toString(),type:_ratings[urid].type,rclass:_ratings[urid].rclass.substring(0,64),title:_ratings[urid].title.substring(0,256),url:_ratings[urid].url.substring(0,512),img:_ratings[urid].img.substring(0,512)};rlen=rating.rid.length+
rating.type.length+
rating.rclass.length+
rating.title.length+
rating.url.length+
rating.img.length+'{rid:type:rclass:title:url:img:}'.length;if(len+rlen>RW.CALL_RATINGS_MAX_LEN)
{chunk=[];chunks.push(chunk);len=0;}
len+=rlen;chunk.push(rating);}
for(var i=0,len=chunks.length;i<len;i++)
if(chunks[i].length>0)
RW.Com.jsonp(RW._jsUrl('api/v2/rating/update.php'),{data:[{name:'ratings',value:encodeURIComponent(RW.JSON.stringify(chunks[i]))}],callback:RW._updateCallback});},_prefillMissing=function()
{for(var urid in _ratings)
if(''===_ratings[urid].title)
if(RW._isNotEmptyString(_ratings[urid].turid)&&(!_ratings[urid].turid.startsWith('t')||!RW._isNumeric(_ratings[urid].turid.substring(1))))
_ratings[urid].title=_ratings[urid].turid;var primary_rating=RW.getPrimaryRating();if(false!==primary_rating)
{if(''===primary_rating.title)
primary_rating.title=doc.title;if(''===primary_rating.img)
{var og_image=RW._getFirstByAttr('property','og:image','','meta',doc.head);if(RW._is(og_image))
primary_rating.img=og_image.getAttribute('content');}}},_renderRatings=function()
{for(var urid in _ratings)
_ratings[urid].render();if(RW._isFun(render_options.callback))
render_options.callback(_ratings);RW._clearJS();RW._invokeHook("RW_HOOK_READY");_prefillMissing();_syncRatings();},_isCssLoaded=function(id,z)
{var d=doc.createElement("div");d.id=id;d.style.position="relative";body.appendChild(d);var zIndex=parseFloat(RW._getStyle(d,'zIndex'));RW.remove(d);return(zIndex==z);},_isStaticCssLoaded=function()
{return _isCssLoaded('rw-css-loaded-flag',12358);},_isDynamicCssLoaded=return{MAX:5,MIN:1,LIKE_RATE:5,DISLIKE_RATE:0,MIN_STARS:1,MAX_STARS:20,CALL_RATINGS_MAX_LEN:1000,PREFIX:"rw",CUSTOM:"custom",_TYPE:{STRING:"string",BOOL:"boolean",NUM:"numeric",SIZE:"size",DIR:"dir",ALIGN_HOR:"hor",ALIGN_VER:"ver",RTYPE:"rating_type"},_DEF_STYLES:{STAR:"oxygen",NERO:"thumbs"},_DEF_FONT_SIZE:{TINY:"10px",SMALL:"12px",MEDIUM:"16px",LARGE:"20px"},_DEF_LINE_HEIGHT:{TINY:"12px",SMALL:"16px",MEDIUM:"20px",LARGE:"30px"},_TEXT_MAP:{STAR:['rateAwful','ratePoor','rateAverage','rateGood','rateExcellent'],NERO:['dislike','like']},TYPE:{STAR:"star",NERO:"nero"},SIZE:{TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large"},STYLE:{YELLOW:"yellow",RED:"red",GREEN:"green",BLUE:"blue",CUSTOM:"custom"},FREQUENCY:{ONCE:-1,UNLIMITED:0,DAILY:1,WEEKLY:7,MONTHLY:30,YEARLY:365},DIR:{LTR:"ltr",RTL:"rtl"},ID_LOCATION:{LSO:"lso",COOKIE:"cookie",STORAGE:"storage"},IDENTIFICATION:{DEVICE:"device",IP:"ip",ACCOUNT:"account",LOCAL_ACOUNT:"laccount"},ALIGN:{HOR:{LEFT:"left",CENTER:"center",RIGHT:"right"},VER:{TOP:"top",MIDDLE:"middle",BOTTOM:"bottom"}},site:{id:null,key:null,token:null,type:"website",category:"unknown",page:{url:window.location.toString()}},visitor:{id:null,gid:null,device:{id:EMPTY_PCID,type:'desktop',os:'other',browser:'other'},country:null,isFromEUCountry:null,identifyBy:"laccount",mobile:false},Ad:null,Sponsored:null,_tooltip:null,_defaultOptions:{lng:"en",url:'',img:'',title:'',type:"star",rclass:"",size:"small",theme:"",style:"",imgUrl:{ltr:"",rtl:""},isDummy:false,readOnly:false,sync:true,forceSync:false,reVote:true,frequency:-1,showInfo:true,showTooltip:true,showAverage:true,showReport:true,showRecommendations:false,hideRecommendations:false,showSponsored:false,showLoader:true,boost:{votes:0,rate:5},uarid:'0',mobile:{optimized:true,showTrigger:true},label:{background:'#FFFFFF',text:{star:{empty:'{{text.rateThis}}',normal:'{{text.rateThis}} ({{rating.votes}} {{text.votes}})',rated:'{{rating.votes}} {{text.votes}}'},nero:{empty:'{{text.rateThis}}',normal:'{{text.rateThis}}',rated:'{{rating.votes}} {{text.votes}}'}}},advanced:{star:{stars:5},nero:{showDislike:true,showLike:true,text:{like:{empty:'{{rating.likes}}',rated:'{{rating.likes}}'},dislike:{empty:'{{rating.dislikes}}',rated:'{{rating.dislikes}}'}}},font:{bold:false,italic:false,color:'#000000',size:"12px",type:'inherit',hover:{color:"#000000"}},layout:{dir:'ltr',align:{hor:'right',ver:"middle"},lineHeight:"16px"},text:{rateAwful:'Awful',ratePoor:'Poor',rateAverage:'Average',rateGood:'Good',rateExcellent:'Excellent',rateThis:'Rate this',like:'Like',dislike:'Dislike',vote:'Vote',votes:'Votes',thanks:'Thank You',outOf:'out of',weRecommend:'We Recommend'},css:{container:""}},beforeRate:null,afterRate:null},getClassOptions:getGlobalOptions:getDefaultOptions:_parseClassProperty:function(e,property,def)
{var className=e.className,prefix="rw-"+property+"-",start=className.indexOf(prefix);if(start<0)
return def;if(start>0)
{start=className.indexOf(" "+prefix);if(start<0)
return def;start++;}
var ret='';for(var i=start+prefix.length,len=className.length;i<len&&className.charAt(i)!=' ';i++)
ret+=className.charAt(i);return ret;},_parseAtrProperty:function(e,property,def)
{return e.hasAttribute('data-'+property)?e.getAttribute('data-'+property):def;},_getRatingId:function(pRating)
{var urid=RW._parseClassProperty(pRating,"urid",false);if(false===urid)
urid=RW._parseAtrProperty(pRating,"urid",false);if(false===urid)
urid=RW._parseClassProperty(pRating,"title",false);if(false===urid)
urid=RW._parseAtrProperty(pRating,"title",false);return RW._isNotEmptyString(urid)?urid.toLowerCase().trim():false;},init:function(pKey,pOptions,pVid,pToken)
{if(typeof(pKey)!=="object")
{pKey={uid:pKey,vid:pVid,token:pToken,options:pOptions,source:this.site.type,url:this.site.page.url,identifyBy:this.visitor.identifyBy};}
this._identify(pKey);goptions=this._isUndefinedOrNull(pKey.options)?{}:pKey.options;},_cookie:function()
{if(undef===_cookie)
_cookie=new RW.Cookie();return _cookie;},_identifyVisitor:function()
{if(RW.visitor.country)
{var country=(RW.visitor.country||'us').toUpperCase();if('UK'===country)
country='GB';RW.visitor.isFromEUCountry=(['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IC','IE','IT','LV','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB'].indexOf(country)>=0);}
if(RW._isNumeric(RW.visitor.device.id))
_identified=true;},_generateDeviceID:function()
{return(new Date().getTime()-1389650400000).toString()+Math.random().toString().substr(2,6);},_startInit:function()
{if(_initialized)
return;_initialized=true;RW._invokeHook("RW_HOOK_INIT");if(typeof(RW_Async_Init)!==UNDEF&&RW._isFun(RW_Async_Init))
RW_Async_Init();},initRating:function(pURid,pOptions)
{if(this._is(options[pURid]))
delete options[pURid];options[pURid]=pOptions;},initClass:function(pClass,pOptions)
{if(this._is(coptions[pClass])){delete coptions[pClass];}
coptions[pClass]=pOptions;},render:function(pCallback,pOptimized,pContainer)
{if(is_migrating)
return;if(undef===pCallback)
pCallback={};var callback,unsafeCallback,optimized,container;if(!this._isNull(pCallback)&&typeof(pCallback)=="object")
{unsafeCallback=this._def(pCallback.callback,null);optimized=this._def(pCallback.optimized,true);container=this._def(pCallback.container,undef);}
else
{unsafeCallback=this._def(pCallback,null);optimized=this._def(pOptimized,true);container=this._def(pContainer,undef);}
callback=this._isFun(unsafeCallback)?function(){try{unsafeCallback.apply(this,Array.prototype.slice.call(arguments,0));}catch(e){debugger;console.error('ratingwidget: '+'Error during callback: '+e.message);}}:null;render_options.optimized=optimized;render_options.callback=callback;render_options.container=container;if(typeof(_rwq)!==typeof(undef))
{for(var i=0;i<_rwq.length;i++)
{if(!RW._isNotEmptyArray(_rwq[i]))
continue;if(undef===RW[_rwq[i][0]])
continue;if('_setRecommendations'===_rwq[i][0])
RW[_rwq[i][0]].apply(this,_rwq[i].slice(1));}}
var ratingElements=RW._getByClassName("rw-ui-container","*",container);if(optimized&&ratingElements.length===0)
{if(this._isFun(callback))
callback([]);return;}
var user={uid:RW.Uid,huid:RW.site.id},turid=0;_ratings={};_count=0;_resourceMonitor={data:false,resources:false,css:false,dcss:_isStaticCssLoaded()};if(ratingElements.length>0)
{_initTooltip();RW.RatingReport.init();if(!_resourceMonitor.css)
RW.Com.asyncCss(RW._cssUrl('widget/style.'+(LOCALHOST?'':(HTTPS?'secure.':'min.'))+'css'),{isLoaded:_isStaticCssLoaded,callback:function(){RW._resourceLoaded('css');}});}
var urids={},unique_encoded_urids=[];RW._foreach(ratingElements,function(rating){if(RW._Class.has(rating,'rw-no-render'))
return;var urid=RW._getRatingId(rating);if(!urid)
{urid='t'+turid;turid++;}
rating.setAttribute('data-urid',urid);urids[urid]=true;});for(var urid in urids)
{_ratings[urid]=new RW.Rating(urid,user,options[urid]);unique_encoded_urids.push(encodeURIComponent(urid));_count++;}
var data=[{name:'ids',value:RW.JSON.stringify(unique_encoded_urids)}];if(0<turid)
data.push({name:'url',value:encodeURIComponent(RW.site.page.url)});RW.Com.jsonp(RW._jsUrl('api/rating/get.php'),{data:data});},_isEqualImg:function(pImg1,pImg2)
{return(this._is(pImg1)&&this._is(pImg2)&&pImg1.ltr==pImg2.ltr&&pImg1.rtl==pImg2.rtl);},_keys:_clearJS:function()
{RW._foreach(RW._getByClassName("rw-js-container","div"),function(js){if(js.hasChildNodes())
{while(js.childNodes.length>0){js.removeChild(js.firstChild);}}});},_distroyRatings:function()
{for(var urid in _ratings)
{_ratings[urid].distroy();delete _ratings[urid];}},_resourceLoaded:function(r)
{_resourceMonitor[r]=true;if(_resourceMonitor.data&&_resourceMonitor.resources&&_resourceMonitor.css&&_resourceMonitor.dcss)
{_renderRatings();}},_getCallback:function(res)
{if(!res.success)
{this._distroyRatings();if(res.msg.indexOf('MAINTENANCE')==0)
console.warn('ratingwidget: '+res.msg)
else
RW._error(res.msg);return;}
_isPremium=!res.data.basic;_plan=res.data.plan;if(res.data.basic)
this.site.token=null;if(RW.IDENTIFICATION.IP===this.visitor.identifyBy&&!RW._isTrial()&&!RW._isProfessional())
{this.visitor.identifyBy=RW.IDENTIFICATION.LOCAL_ACOUNT;console.warn('ratingwidget: '+'IP visitor identification is not supported in your plan. Please upgrade to Professional (http://rating-widget.com/pricing/).');}
this.site.id=res.data.user.huid;this.Ad=new RW.Ads(res.data.ads);_showRecommendations=res.data.recommendations;_showSponsoredRecommendations=res.data.showSponsored;this.site.category=res.data.site.category;this.visitor.device.id=res.data.visitor.device.id;this.visitor.country=res.data.visitor.country;if(RW._is(res.data.visitor.id))
this.visitor.gid=res.data.visitor.id;RW._identifyVisitor();this.Sponsored=new RW.Rec();this.Sponsored.preload();this._foreach(_recommendations,function(widget){widget.postRender();});var ratings=res.data.ratings;for(var i=0,len=ratings.length;i<len;i++)
{if(undef!==ratings[i].turid)
{_ratings[ratings[i].urid]=_ratings[ratings[i].turid];delete _ratings[ratings[i].turid];_ratings[ratings[i].urid].turid=ratings[i].turid;}
_ratings[ratings[i].urid].initData(ratings[i]);}
if(RW._is(res.data.settings.site))
goptions=RW._extandObj(RW.getGlobalOptions(),res.data.settings.site);this._resourceLoaded('data');var resources={};var themes={};if(render_options.optimized)
{for(var urid in _ratings)
{resources=RW._extandObj(resources,_ratings[urid].getRequiredResources());}
for(var type in RW.TYPE)
if(resources[RW.TYPE[type]])
for(var size in resources[RW.TYPE[type]].theme)
for(var theme in resources[RW.TYPE[type]].theme[size])
themes[theme]=true;}
RW.Com.jsonp(RW._jsUrl('api/resources.js'),{data:(render_options.optimized?[{name:'lngs',value:RW._keys(resources.lng).join(',')},{name:'themes',value:RW._keys(themes).join(',')}]:[{name:"all",value:""}]),isStatic:true});if(render_options.optimized)
delete resources.lng;RW.Com.asyncCss(RW._cssUrl('widget/theme.css'),{data:[(!render_options.optimized?{name:'all',value:''}:{name:'data',value:encodeURIComponent(RW.JSON.stringify(resources))}),{name:'huid',value:RW.site.id}],isLoaded:_isDynamicCssLoaded,callback:function(){RW._resourceLoaded('dcss');}});},_updateCallback:_resourceCallback:function(options)
{for(var c in coptions)
if(RW._is(coptions[c].imgUrl))
RW._addCustomImgStyle(coptions[c].imgUrl,[coptions[c].type],"class",c);for(var t in RWT)
if(RW._is(RWT[t].options.imgUrl))
RW._addCustomImgStyle(RWT[t].options.imgUrl,[RWT[t].options.type],"theme",t);_isMobile=(undef!==options&&true===options.isMobile);this.visitor.mobile=_isMobile;if(undef!==options&&undef!==options.device)
{this.visitor.device.type=options.device;this.visitor.device.os=options.os;this.visitor.device.browser=options.browser;}
this._resourceLoaded('resources');},_visitorLoadCallback:function(res)
{if(!res.success)
return;this.visitor.gid=res.data.visitor.id;},_rateCallback:function(res,urid)
{_rateCallback(res,urid);},_likeCallback:_identify:function(options)
{if(!this._isString(options.uid)||options.uid.length!==32)
this._error("Invalid site public-key.");else
this.site.key=options.uid.toLowerCase();if(this._is(options.vid))
{this._setVisitorID(options.vid);}
if(this._is(options.token))
{if(this._is(options.token.token)&&this._isString(options.token.token)&&options.token.token.length==32&&this._is(options.token.timestamp)&&this._isNumeric(options.token.timestamp))
{this.site.token={timestamp:options.token.timestamp,token:options.token.token};}}
if(this._is(options.huid))
{if(!this._isNumeric(options.huid)||parseInt(options.huid,10)<0)
this._error("Invalid site id.");else
this.site.id=parseInt(options.huid,10);}
this.site.type=(options.source||this.site.type).toLowerCase();this.site.page.url=this._def(options.url,this.site.page.url).toString();this.visitor.identifyBy=options.identifyBy||this.visitor.identifyBy;},_extandObj:function(obj,enricher)
{if(null==obj)
return this._cloneObj(enricher);if(null==enricher||"object"!=typeof(enricher))
return obj;for(var attr in enricher)
{if(enricher.hasOwnProperty(attr))
{if(!obj.hasOwnProperty(attr)){obj[attr]=this._cloneObj(enricher[attr]);}else{if('object'==typeof(obj[attr]))
{this._extandObj(obj[attr],enricher[attr]);}}}}
return obj;},_cloneObj:function(obj)
{if(null==obj||"object"!=typeof(obj))
return obj;var copy;if(RW._isArray(obj))
{copy=[];for(var i=0;i<obj.length;i++)
copy.push(obj[i]);}
else
{copy={};for(var attr in obj)
if(obj.hasOwnProperty(attr))
copy[attr]=this._cloneObj(obj[attr]);}
return copy;},obj2Uri:function(obj)
{return encodeURIComponent(JSON.stringify(obj)).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');},uri2obj:function(uri)
{return JSON.parse(decodeURIComponent(uri.replace(/\%21/g,'!').replace(/\%27/g,"'").replace(/\%28/g,'(').replace(/\%29/g,')').replace(/\%2A/g,'*').replace(/\+/g,'%20')));},getPrimaryRating:function()
{if(0==_count)
return false;if(1==_count)
return _ratings[RW._keys(_ratings)[0]];var primaryCount=0,rclass,primary=false;for(var urid in _ratings)
{var rating=_ratings[urid];if(rating.getOption('readOnly')){continue;}
rclass=rating.getOption('rclass');if('page'===rclass||'blog-post'===rclass||'front-post'===rclass||'product'===rclass)
{primary=rating;primaryCount++;}
if(primaryCount>1)
return false;}
return primary;},getRating:function(pURid)
{return(!RW._isNumeric(pURid)||!RW._is(_ratings[pURid]))?undef:_ratings[pURid];},getRatings:function()
{return _ratings;},getTopRatedWidgets:function()
{return _recommendations;},_getClassOptions:function(pClass)
{if(this._is(coptions[pClass])){return coptions[pClass];}else{return false;}},_getThemeOptions:function(pTheme)
{if(this._is(RWT[pTheme])&&this._is(RWT[pTheme])){return RWT[pTheme].options;}else{return false;}},_addCustomImgStyle:function(pImgUrl,pTypes,pProperty,pPropertyValue)
{var style_identifier="rw_"+pProperty+"_"+pPropertyValue+"_custom_style",identifier_class=".rw-"+pProperty+"-"+pPropertyValue;var stylesheet=RW._getById(style_identifier);if(RW._is(stylesheet)){stylesheet.parentNode.removeChild(stylesheet);}
stylesheet=doc.createElement("style");stylesheet.type="text/css";stylesheet.rel="stylesheet";stylesheet.id=style_identifier;doc.getElementsByTagName("head")[0].appendChild(stylesheet);var style_text="";for(var i=0,len=pTypes.length;i<len;i++)
{style_text+=(pTypes[i]==RW.TYPE.STAR)?(identifier_class+".rw-ui-star.rw-ui-container.rw-style-custom .rw-ui-stars li { background-image: url('"+pImgUrl.ltr+"'); }\n"+
identifier_class+".rw-rtl.rw-ui-star.rw-ui-container.rw-style-custom .rw-ui-stars li { background-image: url('"+pImgUrl.rtl+"'); }\n"):(identifier_class+".rw-ui-nero.rw-ui-container.rw-style-custom .rw-ui-like-icon,\n"+
identifier_class+".rw-ui-nero.rw-ui-container.rw-style-custom .rw-ui-dislike-icon\n"+"{ background-image: url('"+pImgUrl.ltr+"'); }"+
identifier_class+".rw-rtl.rw-ui-nero.rw-ui-container.rw-style-custom .rw-ui-like-icon,\n"+
identifier_class+".rw-rtl.rw-ui-nero.rw-ui-container.rw-style-custom .rw-ui-dislike-icon\n"+"{ background-image: url('"+pImgUrl.rtl+"'); }");}
if(stylesheet.styleSheet){stylesheet.styleSheet.cssText=style_text;}else{var cssTextNode=doc.createTextNode(style_text);stylesheet.appendChild(cssTextNode);}},_def:function(pValue,pDefault,pType,pNull)
{if(!this._is(pValue)||(this._is(pNull)&&pValue===pNull)||(this._is(pType)&&((pType==this._TYPE.BOOL&&!this._isBoolean(pValue))||(pType==this._TYPE.NUM&&!this._isNumeric(pValue))||(pType==this._TYPE.STRING&&!this._isString(pValue))||(pType==this._TYPE.SIZE&&!this._isSize(pValue))||(pType==this._TYPE.DIR&&!this._isDir(pValue))||(pType==this._TYPE.ALIGN_HOR&&!this._isHorAlign(pValue))||(pType==this._TYPE.ALIGN_VER&&!this._isVerAlign(pValue))||(pType==this._TYPE.RTYPE&&!this._isRatingType(pValue)))))
{return pDefault;}
return pValue;},_get:function(s,containers)
{var ss=s.split(' ');if(!RW._isArray(containers))
containers=[containers];for(var i=0,len=ss.length;i<len;i++)
{containers=this._getSimple(ss[i],containers);if(null==containers)
return null;}
return containers;},_getSimple:function(s,containers)
{var
special='.#',id=false,classes=[],tag='*',token='',cur_type='tag',prev_type=false,new_token=false;if(!RW._isArray(containers))
containers=[containers];for(var i=0,len_i=s.length;i<len_i+1;i++)
{if(len_i===i)
{prev_type=cur_type;new_token=true;}
else
{switch(s[i])
{case'#':prev_type=cur_type;cur_type='id';new_token=true;break;case'.':prev_type=cur_type;cur_type='class';new_token=true;break;default:token+=s[i];new_token=false;break;}}
if(new_token&&!token.isEmpty())
{switch(prev_type)
{case'id':id=token;break;case'class':classes.push(token);break;case'tag':tag=token;break;}
token='';}}
var elements=[];if(false!==id)
{var item=RW._getById(id);if(item)
elements=[item];}
else if(0<classes.length)
for(var j=0,len=containers.length;j<len;j++)
elements=elements.concat(this._getByClassName(classes,tag,containers[j]));else
for(var j=0,len=containers.length;j<len;j++)
elements=elements.concat(this._getByTagName(tag,containers));return(0<elements.length)?elements:null;},_getFirst:function(selector,container)
{var elements=this._get(selector,container);return(elements&&elements.length>0?elements[0]:null);},_getById:function(id)
{return doc.getElementById(id);},_getByTagName:_getFirstByTagName:_getFirstByClassName:function(pClassName,pTag,pContainer)
{var elements=this._getByClassName(pClassName,pTag,pContainer);return(elements.length>0?elements[0]:null);},_getByClassName:function(pClassName,pTag,pContainer)
{if(RW._isString(pClassName))
pClassName=[pClassName];var filtered=[];for(var i=0,len=pClassName.length;i<len;i++)
{pClassName[i]=pClassName[i].trim();if(!pClassName[i].isEmpty())
filtered.push(pClassName[i]);}
var elm=pContainer||doc,tag=pTag||"*",elements=(tag=="*"&&elm.all)?elm.all:elm.getElementsByTagName(tag);if(0===filtered.length)
return elements;return this._filterElements(elements,;},_getFirstByAttr:function(pAttrName,pAttrVal,pClassName,pTag,pContainer)
{var elements=this._getByAttr(pAttrName,pAttrVal,pClassName,pTag,pContainer);return(elements.length>0?elements[0]:null);},_getByAttr:function(pAttrName,pAttrVal,pClassName,pTag,pContainer)
{pClassName=pClassName||'';var elements=this._getByClassName(pClassName,pTag,pContainer);return this._filterElements(elements,function(e){return(RW._hasAttr(e,pAttrName)&&(''===pAttrVal||pAttrVal==e.getAttribute(pAttrName)));});},_hasAttr:function(e,name)
{if(e.hasAttribute)
return e.hasAttribute(name);var a=e.getAttribute(name);return!(null===a||''===a);},_typeOf:function(value)
{var s=typeof(value);if(s=='object')
{if(value)
{if(value instanceof Array||(!(value instanceof Object)&&(Object.prototype.toString.call((value))=='[object Array]')||typeof(value.length)=='number'&&typeof(value.splice)!=UNDEF&&typeof(value.propertyIsEnumerable)!=UNDEF&&!value.propertyIsEnumerable('splice')))
{return'array';}
if(!(value instanceof Object)&&(Object.prototype.toString.call((value))=='[object Function]'||typeof(value.call)!=UNDEF&&typeof(value.propertyIsEnumerable)!=UNDEF&&!value.propertyIsEnumerable('call')))
{return'function';}}
else
{return'null';}}else if(s=='function'&&typeof(value.call)==UNDEF){return'object';}
return s;},_isDefined:function(p)
{return(typeof(p)!=UNDEF);},_isNull:_is:_isUndefinedOrNull:_isString:function(p)
{return(typeof(p)=="string");},_isBoolean:function(p)
{return(typeof(p)=="boolean");},_isNumber:_isNumeric:_isRatingType:function(p)
{return(this._isString(p)&&(p==this.TYPE.STAR||p==this.TYPE.NERO));},_isSize:function(p)
{return(this._isString(p)&&(p==this.SIZE.SMALL||p==this.SIZE.MEDIUM||p==this.SIZE.LARGE));},_isDir:function(p)
{return(this._isString(p)&&(p==this.DIR.LTR||p==this.DIR.RTL));},_isHorAlign:function(p)
{return(this._isString(p)&&(p==this.ALIGN.HOR.LEFT||p==this.ALIGN.HOR.CENTER||p==this.ALIGN.HOR.RIGHT));},_isVerAlign:function(p)
{return(this._isString(p)&&(p==this.ALIGN.VER.TOP||p==this.ALIGN.VER.MIDDLE||p==this.ALIGN.VER.BOTTOM));},_isArray:function(p)
{return(this._is(p)&&this._typeOf(p)=="array");},_isNotEmptyArray:_isNotEmptyString:_isFun:_error:function(pMessage)
{debugger;console.error('ratingwidget: '+pMessage);throw('ratingwidget: '+pMessage);},_guid:_getStyle:function(pElement,pProperty)
{var s=undef;if(RW._is(pElement.currentStyle))
{pProperty=pProperty.replace(/\-(\w)/g,;s=pElement.currentStyle;}
else if(window.getComputedStyle)
{s=doc.defaultView.getComputedStyle(pElement,null);}
return(s!==undef)?s[pProperty]:s;},_filterElements:function(pItems,pPredicate,pCallback)
{var has_callback=this._isFun(pCallback);var filtered=[];for(var i=0,length=pItems.length;i<length;i++)
{if(pPredicate(pItems[i]))
{if(has_callback){filtered.push(pCallback(pItems[i]));}else{filtered.push(pItems[i]);}}}
return filtered;},_foreach:function(enumerable,callback)
{if(!RW._is(enumerable))
return;for(var i=0,l=enumerable.length;i<l;i++){callback(enumerable[i],i);}},_isTrial:_isFree:_isPaid:function()
{return _isPremium;},_isProfessional:_isPremium:function()
{return _isPremium;},_isMobile:function()
{return _isMobile;},_showRecommendations:function()
{return _showRecommendations;},_showSponsoredRecommendations:function()
{return _showSponsoredRecommendations;},_monetizeTopRated:function()
{return(LOCALHOST||RW.getDomain().endsWith('pravda-tv.ru'));},_invokeHook:function(pHook)
{if(eval('typeof('+pHook+') !== UNDEF')){eval('pHook = '+pHook);if(RW._isArray(pHook))
{for(var h=0,h_len=pHook.length;h<h_len;h++)
{if(typeof(pHook[h])!==UNDEF&&RW._isFun(pHook[h]))
{try
{pHook[h]();}
catch(err)
{RW._error(err);}}}}}},_sum:_url:function(path)
{return WWW+path.ltrim('/');},_tmbUrl:function(src,width,height)
{return WWW_TMB+'?zc=1&w='+width+'&h='+height+'&src='+encodeURIComponent(src);},_imgUrl:function(path)
{return WWW_IMG+path.ltrim('/');},_jsUrl:function(path)
{return WWW_JS+path.ltrim('/');},_cssUrl:_setAttr:function(e,a,v)
{if(this._isString(a))
{e.setAttribute(a,v);}
else
{for(var p in a)
e.setAttribute(p,a[p]);}
return e;},_setVisitorID:function(id,global)
{global=global||false;if(!this._isNumeric(id)||parseInt(id,10)<0)
this._error("Invalid visitor id.");else
this.visitor[global?'gid':'id']=parseInt(id,10);},iterate:function(callback,object,params)
{if(!RW._isArray(object))
return callback.apply(RW._Class,[object].concat(params));var res;for(var i=0,len=object.length;i<len;i++)
res=callback.apply(RW._Class,[object[i]].concat(params));return res;},width:function(e)
{return e.getBoundingClientRect().width;},height:docOffset:browserWidth:function()
{return Math.max(this.width(body),this.width(doc.documentElement));},offset:function(e)
{var rec=e.getBoundingClientRect(),docOffset=this.docOffset(),clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,margin={top:0,left:0};var bodyPosition=RW._getStyle(body,'position')||'',htmlPosition=RW._getStyle(docElem,'position')||'',isRelativeBody=('absolute'===bodyPosition||'fixed'===bodyPosition||'relative'===bodyPosition),isRelativeHtml=('absolute'===htmlPosition||'fixed'===htmlPosition||'relative'===htmlPosition),bodyMargin={top:(parseFloat(RW._getStyle(body,'marginTop'))||0),left:(parseFloat(RW._getStyle(body,'marginLeft'))||0)},htmlMargin={top:(parseFloat(RW._getStyle(docElem,'marginTop'))||0),left:(parseFloat(RW._getStyle(docElem,'marginLeft'))||0)};if(isRelativeBody||isRelativeHtml)
{if(isRelativeBody)
{margin.top+=bodyMargin.top;margin.left+=bodyMargin.left;}
if(isRelativeBody||isRelativeHtml)
{margin.top+=htmlMargin.top;margin.left+=htmlMargin.left;}}
return{top:rec.top+docOffset.top-clientTop-margin.top,left:rec.left+docOffset.left-clientLeft-margin.left};},hide:show:function(e,show)
{show=RW._is(show)?show:true;if(false===show)
RW.hide(e);else
e.style.display='';},remove:isVisible:function(e)
{if(!RW._is(e)||RW._getStyle(e,'display')=='none')
return false;var rect=e.getBoundingClientRect();return(rect.top!==0||rect.left!==0||rect.bottom!==0||rect.right!==0);},getDomain:function(url)
{var matches=(url||window.location.toString()).match(_DOMAIN_REGEX);return matches&&matches[1];},attachEvent:_setRecommendations:function(data)
{var widgets=RW._getByAttr('data-id',data.id,'rw-ui-recommendations');if(0===widgets.length)
return;var toprated=new RW.TopRated.Widget(widgets,data);_recommendations.push(toprated);toprated.render();},prependChild:function(parent,node)
{if(0===parent.children.length)
parent.appendChild(node);return RW.insertBefore(node,parent.firstChild);},insertBefore:insertAfter:function(newNode,existingNode)
{if(null!==existingNode.nextSibling)
existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling);else
existingNode.parentNode.appendChild(newNode);},getFirstNode:function(parent)
{var n=parent.firstChild;while(n.nodeType!=1)
n=n.nextSibling;return n;},mouseOut:function(element,f)
{RW.attachEvent(element,'mouseout',function(event){var e=event.toElement||event.relatedTarget;if(!RW._is(e)||e==this||e.parentNode==this)
return;f.apply(element,[event]);});},_renderPoweredBy:executeWhen:function(predicate,callback,iteration)
{if(predicate())
return callback();setTimeout(iteration);},isConnected:optIn:function()
{RW.Com.jsonp(RW._jsUrl('api/cookies.php'),{data:[{name:'optin',value:true}]});},_optInCallback:optOut:function(expirationDays)
{RW.Com.jsonp(RW._jsUrl('api/cookies.php'),{data:[{name:'days',value:expirationDays},{name:'optin',value:false}]});},shouldConnect:function()
{return((RW.IDENTIFICATION.ACCOUNT===RW.visitor.identifyBy)&&!RW.isConnected());},connectUrl:isLocalhost:function()
{return LOCALHOST;},elapsedTime:function()
{return Math.round((new Date().getTime()-_timestamp.getTime())/1000);},isLocalizedNumbers:localizeNumber:function(n,lng)
{if(!this.isLocalizedNumbers(lng))
return n;var loc='';n=n.toString();for(var i=0;i<n.length;i++)
loc+=isNaN(n[i])?n[i]:RWL[lng].numbers[n[i]];return loc;}};}();RW.Com=function()
{var
_getStylesheetElement=function(url)
{var s=doc.createElement("link");s.type="text/css";s.rel="stylesheet";s.href=url;s.media="screen";return s;},_fingerprint='',_callbacks={},_getCallbackName=if(RW._isNotEmptyString(window.navigator.platform))
_fingerprint+=window.navigator.platform[0];if(RW._isNotEmptyString(window.navigator.appCodeName))
_fingerprint+=window.navigator.appCodeName[0];if(RW._isNotEmptyString(window.navigator.appName))
_fingerprint+=window.navigator.appName[0];if(RW._isNotEmptyString(window.navigator.product))
_fingerprint+=window.navigator.product[0];if(RW._isNotEmptyString(window.navigator.vendor))
_fingerprint+=window.navigator.vendor[0];if(RW._isNotEmptyString(window.navigator.userAgent))
_fingerprint+=window.navigator.userAgent[0]+window.navigator.userAgent[window.navigator.userAgent.length-1];return{toQueryString:function(data)
{var q='';for(var i=0,len=data.length;i<len;i++)
q+=((i>0)?"&":"")+data[i].name+"="+data[i].value;return q;},toNameValue:fromNameValue:function(arr)
{var data={};for(var idx in arr){if(arr.hasOwnProperty(idx)){var nameValuePair=arr[idx];data[nameValuePair.name]=nameValuePair.value;}}
return data;},getUrl:function(url,data)
{if(data.length>0)
url+=((url.indexOf("?")+1)?"&":"?");return url+this.toQueryString(data);},asyncCss:function(url,options)
{options=RW._extandObj(options,{cycle:50,timeout:5000,data:[],callback:null,success:null,failure:null,isLoaded:null});if(null!==options.isLoaded&&options.isLoaded())
{if(null!==options.success)
options.success();if(null!==options.callback)
options.callback();return;}
options.data.push({name:"v",value:version});var head=RW._getFirstByTagName("head"),stylesheet=_getStylesheetElement(this.getUrl(url,options.data));head.appendChild(stylesheet);var con=doc.createElement("div");body.appendChild(con);con.innerHTML='<i class="rw-action-loader" style="position: fixed; top: -1000px;"></i>';if(null===options.isLoaded)
return;if(null===options.callback&&null===options.success&&null===options.failure)
return;var checkIfCssReady=function()
{options.timeout-=options.cycle;if(options.isLoaded())
{if(null!==options.success)
options.success();if(null!==options.callback)
options.callback();}
else
{if(options.timeout>0)
{setTimeout(checkIfCssReady,options.cycle);}
else
{console.warn('Async stylesheet include timeouted.');if(null!==options.failure)
options.failure();if(null!==options.callback)
options.callback();}}};setTimeout(checkIfCssReady,options.cycle);},enrichRequest:function(data,isStatic)
{data.push({name:"v",value:version});data.push({name:"sw",value:screen.width});data.push({name:"sh",value:screen.height});data.push({name:"sd",value:screen.pixelDepth});data.push({name:"uid",value:RW.site.key});if(RW._is(RW.site.id))
data.push({name:"huid",value:RW.site.id});if(isStatic)
{data.push({name:"fp",value:_fingerprint});}
else
{if(RW.visitor.device.id!==EMPTY_PCID)
data.push({name:"pcid",value:RW.visitor.device.id});data.push({name:"by",value:RW.visitor.identifyBy});data.push({name:"et",value:RW.elapsedTime()});if(RW._is(RW.visitor.id))
{var vid_exist=false;for(i=0,len=data.length;i<len;i++){if(data[i].name=="vid"){vid_exist=true;break;}}
if(!vid_exist){data.push({name:"vid",value:RW.visitor.id});}}
if(RW._is(RW.visitor.gid))
data.push({name:"vgid",value:RW.visitor.gid});if(RW._is(RW.site.token))
{data.push({name:"token",value:RW.site.token.token});data.push({name:"timestamp",value:RW.site.token.timestamp});}
data.push({name:"source",value:encodeURIComponent(RW.site.type)});data.push({name:"url",value:encodeURIComponent(RW.site.page.url)});data.push({name:"cguid",value:RW._guid()});}},addDailyCache:function(data)
{var d=new Date();data.push({name:'ck',value:"Y"+d.getFullYear()+"M"+d.getMonth()+"D"+d.getDate()});},appendJS:function(url,data)
{var s=doc.createElement("script");s.charset="utf-8";s.src=this.getUrl(url,data);var c=RW._getFirstByClassName("rw-js-container","div");if(null===c)
c=RW._getFirstByTagName("head");c.appendChild(s);},asyncJS:function(url,options)
{options=RW._extandObj(options,{data:[],isStatic:false,dailyCache:false});this.enrichRequest(options.data,options.isStatic);if(options.dailyCache)
this.addDailyCache(options.data);this.appendJS(url,options.data);},jsonp:function(url,options)
{options=RW._extandObj(options,{data:[],isStatic:false,dailyCache:false,callback:null,success:null,failure:null});if(null!=options.callback)
{var name=_getCallbackName();RW.Com[name]=function()
{options.callback.apply(this,arguments);setTimeout(50)};options.data.push({name:'callback',value:'RW.Com.'+name});}
this.enrichRequest(options.data,options.isStatic);if(options.dailyCache)
this.addDailyCache(options.data);this.appendJS(url,options.data);}};}();RW.JSON=function(){var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;var quote=function(string)
{escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,+'"':'"'+string+'"';};var str=function(key,holder)
{var i,k,v,length,mind=gap,partial,value=holder[key];switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]')
{length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}};return{stringify:;}();RW.Cookie=function(domain,undef)
{var
_test,_expireDate=new Date(),_optionsString='; path=/'+(RW._isString(domain)?'; domain='+domain:'');_expireDate.setTime(_expireDate.getTime()+(2*365*24*60*60*1000));var
_neverExpire='; expires='+_expireDate.toGMTString(),_deleteExpire='; expires=Thu, 01 Jan 1970 00:00:01 GMT';var
_parseCookies=function()
{var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1)
{pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
{value=decodeURIComponent(pair[1]);}
catch(e1)
{value=pair[1];}
try
{unparsedValue=value;value=JSON.parse(value);}
catch(e2)
{value=unparsedValue;}
cookies[name]=value;}
return cookies;},_get=function(key,def)
{var cookies=_parseCookies();return(cookies[key]!==undef)?cookies[key]:def;},_set=function(key,val,expirationDays)
{var expiration=_neverExpire;if(undef!==expirationDays)
{var expirationDate=new Date();expirationDate.setTime(expirationDate.getTime()+(expirationDays*24*60*60*1000));expiration='; expires='+expirationDate.toGMTString();}
document.cookie=key+'='+encodeURIComponent(RW._isString(val)?val:JSON.stringify(val))+_optionsString+expiration;},_del=function(key)
{document.cookie=key+'='+_optionsString+_deleteExpire;};return{test:function()
{if(undef===_test)
{var key='test',val='data';_set(key,val);if(val!==_get(key))
{_test=false;}
else
{_del(key);_test=true;}}
return _test;},get:function(key,def)
{if(!this.test())
return def;return _get(key,def);},set:function(key,val,expirationDays)
{if(!this.test())
return;_set(key,val,expirationDays);},del:function(key)
{if(!this.test())
return;_del(key);},contains:function(key)
{if(!this.test())
return false;var cookies=_parseCookies();return(cookies[key]!==undef);}};};var hasStorage=());if(undef!==hasStorage)
{RW.Storage=function(undef)
{return{get:function(key,def)
{if(null==localStorage.getItem(key))
return def;try
{return JSON.parse(localStorage.getItem(key));}
catch(e)
{this.removeItem(key);return def;}},set:del:function(key)
{localStorage.removeItem(key);},contains:;}();}
else
{RW.Storage=new RW.Cookie();if(!RW.Storage.test())
{RW.Storage=function(undef)
{var _s={};return{get:function(key,def)
{return this.contains(key)?_s[key]:def;},set:del:contains:;}();}}
RW.Ads=function(options,undef)
{if(RW.Ads.prototype._singletonInstance)
return RW.Ads.prototype._singletonInstance;RW.Ads.prototype._singletonInstance=this;var
$=this,_rwCookie=new RW.Cookie(DOMAIN),_SHOW_ADS_COOKIE='ads',_EXCLUDE_PAGE_ADS='rw-ads-pages',_options=RW._extandObj(options,{width:468,height:60,html:'',tag:''});var _getCache,_cache=true,_cleanCache=function()
{_getCache=undef;};$.stopCaching=$.get=function()
{if(undef===_getCache||!_cache)
{if(_options.tag.isEmpty())
_getCache=false;else if(RW._isPremium())
_getCache=false;else if(!this.isShowOnPage())
_getCache=false;else
_getCache=_options;}
return _getCache;};$.isShowOnPage=function()
{var pages=RW.Storage.get(_EXCLUDE_PAGE_ADS,[]),url=RW.site.page.url.toLowerCase();for(var i=0,len=pages.length;i<len;i++)
{if(pages[i]===url)
return false;}
return true;};$.setHideOnPage=function()
{var pages=RW.Storage.get(_EXCLUDE_PAGE_ADS,[]);pages.push(RW.site.page.url.toLowerCase());RW.Storage.set(_EXCLUDE_PAGE_ADS,pages);_cleanCache();};$.setShowOnPage=function()
{var pages=RW.Storage.get(_EXCLUDE_PAGE_ADS,[]),url=RW.site.page.url.toLowerCase(),filtered=[];for(var i=0,len=pages.length;i<len;i++)
{if(pages[i]!==url)
filtered.push(pages[i]);}
RW.Storage.set(_EXCLUDE_PAGE_ADS,filtered);_cleanCache();};$.toggleShowOnPage=function(show)
{if(undef===show)
show=!$.isShowOnPage();if(show)
$.setShowOnPage();else
$.setHideOnPage();return show;};$.isOptIn=$.optOut=function()
{_rwCookie.set(_SHOW_ADS_COOKIE,false);};$.optIn=};RW.Rec=function(options,undef)
{if(RW.Rec.prototype._singletonInstance)
return RW.Rec.prototype._singletonInstance;RW.Rec.prototype._singletonInstance=this;var
$=this;var
_dataCache,_inProcess=false,_requestOptionsCache,_cleanCache=function()
{_dataCache=undef;},_pickRndItemsSlice=function(limit)
{if(!RW._is(_dataCache)||!RW._isArray(_dataCache.recs)||0===_dataCache.recs.length)
return false;if(limit>=_dataCache.recs.length)
return _dataCache.recs;var start=Math.floor(Math.random()*(_dataCache.recs.length-(limit-1))),end=start+limit;return _dataCache.recs.slice(start,end);},_pickUnclicked=function(limit)
{if(!RW._is(_dataCache)||!RW._isArray(_dataCache.recs)||0===_dataCache.recs.length)
return false;if(limit>=_dataCache.recs.length)
return _dataCache.recs;if(!RW.Storage.contains('sponsored_clicks'))
return _dataCache.recs.slice(0,limit);var clicked=RW.Storage.get('sponsored_clicks'),ordered=[];for(var i=0,len=_dataCache.recs.length;i<len;i++)
if(true!==clicked[_dataCache.recs[i].id])
ordered.push(_dataCache.recs[i]);for(var i=0,len=_dataCache.recs.length;i<len;i++)
if(true===clicked[_dataCache.recs[i].id])
ordered.push(_dataCache.recs[i]);return ordered.slice(0,limit);},_isLoaded=function()
{return(undef!==_dataCache&&!_inProcess);},_enrichDomain=function(data)
{if(!RW._is(data)||!RW._isArray(data.recs)||0===data.recs.length)
return data;for(var i=0;i<data.recs.length;i++)
data.recs[i].domain=RW.getDomain(data.recs[i].url);},_toTopRatedItems=function(data)
{var items=[];RW._foreach(data,function(item,i){items.push({site:{id:item.partner_id,domain:item.domain,category:item.category_id},page:{externalID:Math.abs(item.id||item.postId),url:item.url,trackUrl:item.clickUrl,title:item.title,description:item.description,img:RW._tmbUrl((RW._isNotEmptyString(item.thumbnail_path)?item.thumbnail_path:item.url),50,40),sponsored:true}});});return items;},_addSponsored2TopRated=function()
{var widgets=RW.getTopRatedWidgets(),items=_toTopRatedItems($.get(3));RW._foreach(items,;RW._foreach(widgets,function(w,i){w.addItems({itemGroups:[{type:"posts",items:items}]});});};$.preload=function()
{if(_isLoaded())
return true;if(_inProcess)
return false;if(!RW._showSponsoredRecommendations()&&!RW._monetizeTopRated())
{_dataCache=false;}
else
{_inProcess=true;var widgetID=((!RW._monetizeTopRated()||LOCALHOST)?29538:42821),webID=((!RW._monetizeTopRated()||LOCALHOST)?33518:46896);RW.Com.jsonp('http://api.grazeit.com:8080/rec-api/getrecs.json',{isStatic:true,data:[{name:'cb',value:encodeURIComponent('RW.Rec()._sponsoredCallback')},{name:'pubid',value:84869},{name:'webid',value:webID},{name:'wid',value:widgetID},{name:'recsnum',value:3},{name:"url",value:encodeURIComponent(RW.site.page.url)},{name:"cguid",value:RW._guid()}]});}
return false;};$.get=function(limit)
{limt=limit||1;return _pickUnclicked(limit);};$.count=function()
{return _isLoaded()?((false!==_dataCache&&RW._isArray(_dataCache.recs))?_dataCache.recs.length:0):0;};$.set=$.append=function(data)
{if(!RW._is(_dataCache)||!RW._isArray(_dataCache.recs))
{$.set(data);return;}
if(RW._is(data)&&RW._isArray(data.recs)&&0<data.recs.length)
{_enrichDomain(data);_dataCache.recs=_dataCache.recs.concat(data.recs);}};$.clicked=function(id)
{var clicked=RW.Storage.get('sponsored_clicks',{});clicked[id]=true;RW.Storage.set('sponsored_clicks',clicked);};$._sponsoredCallback=function(data)
{$.set(data);_inProcess=false;if(0<$.count()&&RW._monetizeTopRated())
_addSponsored2TopRated();};};RW._Set=function()
{var
_extend=function(options)
{options=RW._def(options,{});options.imgUrl=RW._def(options.imgUrl,{});options.mobile=RW._def(options.mobile,{});options.boost=RW._def(options.boost,{});options.label=RW._def(options.label,{});options.label.text=RW._def(options.label.text,{});options.label.text.star=RW._def(options.label.text.star,{});options.label.text.nero=RW._def(options.label.text.nero,{});options.advanced=RW._def(options.advanced,{});options.advanced.star=RW._def(options.advanced.star,{});options.advanced.nero=RW._def(options.advanced.nero,{});options.advanced.nero.text=RW._def(options.advanced.nero.text,{});options.advanced.nero.text.like=RW._def(options.advanced.nero.text.like,{});options.advanced.nero.text.dislike=RW._def(options.advanced.nero.text.dislike,{});options.advanced.font=RW._def(options.advanced.font,{});options.advanced.font.hover=RW._def(options.advanced.font.hover,{});options.advanced.layout=RW._def(options.advanced.layout,{});options.advanced.layout.align=RW._def(options.advanced.layout.align,{});options.advanced.text=RW._def(options.advanced.text,{});options.advanced.css=RW._def(options.advanced.css,{});return options;},_enrichOptionsByLanguage=function(pOptions)
{if(!RW._is(pOptions)||!RW._is(pOptions.lng))
return;var lng=pOptions.lng,layout=pOptions.advanced.layout;layout.dir=RW._def(layout.dir,RWL[lng].dir);layout.align.hor=RW._def(layout.align.hor,RWL[lng].align.hor);for(var p in RW._defaultOptions.advanced.text)
pOptions.advanced.text[p]=RW._def(pOptions.advanced.text[p],RWL[lng].text[p],RW._TYPE.STRING,DUMMY_STR);},_enrichOptionsBySize=function(pOptions)
{if(!RW._is(pOptions)||!RW._is(pOptions.size))
return;var size=pOptions.size.toUpperCase(),advanced=pOptions.advanced;advanced.font.size=RW._def(advanced.font.size,RW._DEF_FONT_SIZE[size]);advanced.layout.lineHeight=RW._def(advanced.layout.lineHeight,RW._DEF_LINE_HEIGHT[size]);},_getFullHex=function(h)
{var fh='#';for(var i=1,len=h.length;i<len;i++)
fh+=h[i]+h[i];return fh;};return{merge:function(pOptionsArray,pDefaults)
{if(!RW._isNotEmptyArray(pOptionsArray))
return;var merged=RW._cloneObj(pOptionsArray[0]);for(var i=1,len=pOptionsArray.length;i<len;i++)
merged=RW._extandObj(merged,pOptionsArray[i]);_extend(merged);_enrichOptionsBySize(merged);_enrichOptionsByLanguage(merged);merged=RW._extandObj(merged,pDefaults);return merged;},getOption:function(optionsArray,key,def)
{for(var i=0,len=optionsArray.length;i<len;i++)
if(RW._is(optionsArray[i])&&RW._isNotEmptyString(optionsArray[i][key]))
return optionsArray[i][key];return def;},enrichedCopy:function(pOptions,pDefaults)
{pOptions=_extend(pOptions);_enrichOptionsBySize(pOptions);_enrichOptionsByLanguage(pOptions);var settings=_extend(),advanced=settings.advanced,oadvanced=pOptions.advanced,dadvanced=pDefaults.advanced,layout=advanced.layout,font=advanced.font,ofont=oadvanced.font,dfont=dadvanced.font,text=advanced.text,otext=oadvanced.text,dtext=dadvanced.text;settings.afterRate=RW._def(pOptions.afterRate,pDefaults.afterRate);settings.beforeRate=RW._def(pOptions.beforeRate,pDefaults.beforeRate);settings.uarid=RW._def(pOptions.uarid,pDefaults.uarid,RW._TYPE.NUM);settings.lng=RW._def(pOptions.lng,pDefaults.lng,RW._TYPE.STRING);settings.url=RW._def(pOptions.url,pDefaults.url,RW._TYPE.STRING);settings.img=RW._def(pOptions.img,pDefaults.img,RW._TYPE.STRING);settings.title=RW._def(pOptions.title,pDefaults.title,RW._TYPE.STRING);settings.type=RW._def(pOptions.type,pDefaults.type,RW._TYPE.RTYPE);settings.rclass=RW._def(pOptions.rclass,pDefaults.rclass,RW._TYPE.STRING);settings.size=RW._def(pOptions.size,pDefaults.size,RW._TYPE.SIZE);settings.theme=RW._def(pOptions.theme,pDefaults.theme,RW._TYPE.STRING);settings.style=RW._def(pOptions.style,pDefaults.style,RW._TYPE.STRING);settings.readOnly=RW._def(pOptions.readOnly,pDefaults.readOnly,RW._TYPE.BOOL);settings.sync=RW._def(pOptions.sync,pDefaults.sync,RW._TYPE.BOOL);settings.forceSync=RW._def(pOptions.forceSync,pDefaults.forceSync,RW._TYPE.BOOL);settings.reVote=RW._def(pOptions.reVote,pDefaults.reVote,RW._TYPE.BOOL);settings.frequency=RW._def(pOptions.frequency,pDefaults.frequency,RW._TYPE.NUM);settings.showInfo=RW._def(pOptions.showInfo,pDefaults.showInfo,RW._TYPE.BOOL);settings.showTooltip=RW._def(pOptions.showTooltip,pDefaults.showTooltip,RW._TYPE.BOOL);settings.showAverage=RW._def(pOptions.showAverage,pDefaults.showAverage,RW._TYPE.BOOL);settings.showReport=RW._def(pOptions.showReport,pDefaults.showReport,RW._TYPE.BOOL);settings.showLoader=RW._def(pOptions.showLoader,pDefaults.showLoader,RW._TYPE.BOOL);settings.showRecommendations=RW._def(pOptions.showRecommendations,pDefaults.showRecommendations,RW._TYPE.BOOL);settings.hideRecommendations=RW._def(pOptions.hideRecommendations,pDefaults.hideRecommendations,RW._TYPE.BOOL);settings.showSponsored=RW._def(pOptions.showSponsored,pDefaults.showSponsored,RW._TYPE.BOOL);if(RW._isString(pOptions.imgUrl))
{pOptions.imgUrl={ltr:pOptions.imgUrl,rtl:pOptions.imgUrl};}
settings.imgUrl.ltr=RW._def(pOptions.imgUrl.ltr,pDefaults.imgUrl.ltr,RW._TYPE.STRING);settings.imgUrl.rtl=RW._def(pOptions.imgUrl.rtl,pDefaults.imgUrl.rtl,RW._TYPE.STRING);settings.mobile.optimized=RW._def(pOptions.mobile.optimized,pDefaults.mobile.optimized,RW._TYPE.BOOL);settings.mobile.showTrigger=RW._def(pOptions.mobile.showTrigger,pDefaults.mobile.showTrigger,RW._TYPE.BOOL);settings.boost.votes=RW._def(pOptions.boost.votes,pDefaults.boost.votes,RW._TYPE.NUM);settings.boost.rate=RW._def(pOptions.boost.rate,pDefaults.boost.rate,RW._TYPE.NUM);if(settings.boost.votes<0){settings.boost.votes=0;}
settings.label.background=RW._def(pOptions.label.background,pDefaults.label.background,RW._TYPE.STRING);settings.label.text.star.empty=RW._def(pOptions.label.text.star.empty,pDefaults.label.text.star.empty,RW._TYPE.STRING);settings.label.text.star.normal=RW._def(pOptions.label.text.star.normal,pDefaults.label.text.star.normal,RW._TYPE.STRING);settings.label.text.star.rated=RW._def(pOptions.label.text.star.rated,pDefaults.label.text.star.rated,RW._TYPE.STRING);settings.label.text.nero.empty=RW._def(pOptions.label.text.nero.empty,pDefaults.label.text.nero.empty,RW._TYPE.STRING);settings.label.text.nero.normal=RW._def(pOptions.label.text.nero.normal,pDefaults.label.text.nero.normal,RW._TYPE.STRING);settings.label.text.nero.rated=RW._def(pOptions.label.text.nero.rated,pDefaults.label.text.nero.rated,RW._TYPE.STRING);advanced.star.stars=RW._def(oadvanced.star.stars,dadvanced.star.stars,RW._TYPE.NUM);advanced.nero.showDislike=RW._def(oadvanced.nero.showDislike,dadvanced.nero.showDislike,RW._TYPE.BOOL);advanced.nero.showLike=RW._def(oadvanced.nero.showLike,dadvanced.nero.showLike,RW._TYPE.BOOL);advanced.nero.text.like.empty=RW._def(oadvanced.nero.text.like.empty,dadvanced.nero.text.like.empty,RW._TYPE.STRING);advanced.nero.text.like.rated=RW._def(oadvanced.nero.text.like.rated,dadvanced.nero.text.like.rated,RW._TYPE.STRING);advanced.nero.text.dislike.empty=RW._def(oadvanced.nero.text.dislike.empty,dadvanced.nero.text.dislike.empty,RW._TYPE.STRING);advanced.nero.text.dislike.rated=RW._def(oadvanced.nero.text.dislike.rated,dadvanced.nero.text.dislike.rated,RW._TYPE.STRING);font.bold=RW._def(ofont.bold,dfont.bold,RW._TYPE.BOOL);font.italic=RW._def(ofont.italic,dfont.italic,RW._TYPE.BOOL);font.color=RW._def(ofont.color,dfont.color,RW._TYPE.STRING);font.type=RW._def(ofont.type,dfont.type,RW._TYPE.STRING);font.size=RW._def(ofont.size,dfont.size,RW._TYPE.STRING);font.hover.color=RW._def(ofont.hover.color,dfont.hover.color,RW._TYPE.STRING);if(settings.label.background.startsWith('#')&&settings.label.background.length==4)
settings.label.background=_getFullHex(settings.label.background);if(font.color.startsWith('#')&&font.color.length==4)
font.color=_getFullHex(font.color);if(font.hover.color.startsWith('#')&&font.hover.color.length==4)
font.hover.color=_getFullHex(font.hover.color);layout.dir=RW._def(oadvanced.layout.dir,dadvanced.layout.dir,RW._TYPE.DIR);layout.align.hor=RW._def(oadvanced.layout.align.hor,dadvanced.layout.align.hor,RW._TYPE.ALIGN_HOR);layout.align.ver=RW._def(oadvanced.layout.align.ver,dadvanced.layout.align.ver,RW._TYPE.ALIGN_VER);layout.lineHeight=RW._def(oadvanced.layout.lineHeight,dadvanced.layout.lineHeight,RW._TYPE.STRING);for(var key in dtext)
text[key]=RW._def(otext[key],dtext[key],RW._TYPE.STRING);advanced.css.container=RW._def(pOptions.advanced.css.container,pDefaults.advanced.css.container,RW._TYPE.STRING);return settings;}};}();RW._Class=function()
{var
CLASS_NAMES_REGEX_CACHE=[];var get_class_regex=function(pClassName)
{pClassName=pClassName.trim();if(RW._isUndefinedOrNull(CLASS_NAMES_REGEX_CACHE[pClassName])){CLASS_NAMES_REGEX_CACHE[pClassName]=new RegExp("(\\s|^)"+pClassName+"(\\s|$)");}
return CLASS_NAMES_REGEX_CACHE[pClassName];};var $={_set:function(pObject,pClassName)
{if(!RW._is(pObject))
return;pObject.className=pClassName;},set:function(pObject,pClassName)
{RW.iterate($._set,pObject,[pClassName]);},_clear:clear:function(pObject,pClassName)
{RW.iterate($._clear,pObject,[pClassName]);},_has:function(pObject,pClassNames)
{if(!RW._is(pObject)||!RW._is(pClassNames))
return false;if(RW._isString(pClassNames))
pClassNames=[pClassNames];var c;for(var i=0,len=pClassNames.length;i<len;i++)
{c=pClassNames[i].trim();if(c.isEmpty())
continue;if(!get_class_regex(c).test(pObject.className))
return false;}
return true;},has:function(pObject,pClassNames)
{return RW.iterate($._has,pObject,[pClassNames]);},_add:function(pObject,pClassNames,pPrefix)
{if(!RW._is(pObject))
return;if(RW._isString(pClassNames))
pClassNames=[pClassNames];var c;if(!RW._is(pPrefix))
pPrefix='';for(var i=0,len=pClassNames.length;i<len;i++)
{c=pClassNames[i].trim();if(c.isEmpty())
continue;c=pPrefix+c;if(!$.has(pObject,c)){pObject.className+=(pObject.className.isEmpty()?"":" ")+c;pObject.className.trim();}}},add:function(pObject,pClassNames,pPrefix)
{RW.iterate($._add,pObject,[pClassNames,pPrefix]);},_remove:function(pObject,pClassName)
{if($.has(pObject,pClassName)){pObject.className=pObject.className.replace(get_class_regex(pClassName)," ").trim();}},remove:function(pObject,pClassName)
{RW.iterate($._remove,pObject,[pClassName]);},_toggle:function(pObject,pClassName,pAdd)
{if(false===pAdd||(true!==pAdd&&$.has(pObject,pClassName))){$.remove(pObject,pClassName);}else{$.add(pObject,pClassName);}},toggle:function(pObject,pClassName,pAdd)
{RW.iterate($._toggle,pObject,[pClassName,pAdd]);},_replace:function(pObject,pFromClassName,pToClassName)
{if($.has(pObject,pFromClassName)){$.remove(pObject,pFromClassName);$.add(pObject,pToClassName);}},replace:function(pObject,pFromClassName,pToClassName)
{RW.iterate($._replace,pObject,[pFromClassName,pToClassName]);},_override:override:function(pObject,pRemoveClassName,pAddClassName)
{RW.iterate($._override,pObject,[pRemoveClassName,pAddClassName]);}};return $;}();RW.Svg=function()
{return{createElement:move:function(point)
{return'M'+point.x+','+point.y;},line:arc:function(r,point,isLargeArc,isClockwise,xAxisRotation)
{if(undef===xAxisRotation)
xAxisRotation=0;if(undef===isLargeArc)
isLargeArc=false;if(undef===isClockwise)
isClockwise=true;return'A'+r.x+','+r.y+' '+xAxisRotation+' '+(isLargeArc?'1':'0')+','+(isClockwise?'1':'0')+' '+point.x+','+point.y;},circleArc:function(r,point,isLargeArc,isClockwise,xAxisRotation)
{return this.arc({x:r,y:r},point,isLargeArc,isClockwise,xAxisRotation);},getRadialPos:function(center,r,angle)
{return{x:center.x+r*Math.cos(Math.PI*angle/180),y:center.y+r*Math.sin(Math.PI*angle/180)};},getArcPath:function(center,outerRadius,startAngle,endEngle,innerRadius)
{var isLargeArc=(((endEngle-startAngle)%360)>180);var d=RW.Svg.move(this.getRadialPos(center,innerRadius,startAngle))+' '+
RW.Svg.line(this.getRadialPos(center,outerRadius,startAngle))+' '+
RW.Svg.circleArc(outerRadius,this.getRadialPos(center,outerRadius,endEngle),isLargeArc)+' '+
RW.Svg.line(this.getRadialPos(center,innerRadius,endEngle))+' '+
RW.Svg.circleArc(innerRadius,this.getRadialPos(center,innerRadius,startAngle),isLargeArc,false)+' '+'z';var arc=this.createElement("path");RW._setAttr(arc,{d:d});return arc;}};}();RW.Rating=function(urid,user,options)
{var
$=this,_elements=RW._getByAttr('data-urid',urid,'rw-ui-container'),_instances=[],_voteTimeout=null,_callState='ready',_refreshUI=true,_refreshCount,_serverHash,_o=options,_defaultOptions=RW.getDefaultOptions(),_globalOptions=RW.getGlobalOptions();$.huid=user.huid;$.uid=user.uid;$.urid=urid;$.turid=null;$.rid=null;$.rate=null;$.votes=null;$.votesData=null;$.isRated=false;$.lastVote=null;$.lastVoteRate=null;$.report=null;$.options=_o;$.title='';$.img='';$.url='';$.rclass='';$.type=RW.TYPE.STAR;var
_getRequiredResources=function()
{var resources={lng:{},star:{theme:{},style:{}},nero:{theme:{},style:{}}},classOptions,lng,type,style,theme,size,optionsArray,optionsArrayWithoutDefaults;RW._foreach(_instances,function(i){classOptions=i.getClassOptions();optionsArray=[i.options,classOptions,_globalOptions,_defaultOptions];optionsArrayWithoutDefaults=[i.options,classOptions,_globalOptions];lng=RW._Set.getOption(optionsArrayWithoutDefaults,'lng',false);if(false!==lng)
resources.lng[lng]=true;type=RW._Set.getOption(optionsArray,'type');size=RW._Set.getOption(optionsArray,'size');style=RW._Set.getOption(optionsArray,'style',false);if(false!==style&&RW.CUSTOM===style.toLowerCase()&&!RW._isTrial()&&!RW._isProfessional())
{style=RW._DEF_STYLES[type.toUpperCase()];console.warn('Custom ratings image is not supported in your plan. Please upgrade to Professional (http://rating-widget.com/pricing/).');}
if(false!==style)
{if(!RW._is(resources[type].style[size]))
resources[type].style[size]={};resources[type].style[size][style]=true;}
theme=RW._Set.getOption(optionsArray,'theme',false);if(false!==theme)
{if(!RW._is(resources[type].theme[size]))
resources[type].theme[size]={};resources[type].theme[size][theme]=(true===resources[type].theme[size][theme])||(false===style);}
if(false===style)
{if(!RW._is(resources[type].style[size]))
resources[type].style[size]={};resources[type].style[size][RW._DEF_STYLES[type.toUpperCase()]]=true;}});return resources;},_getUniqueHash=function()
{return $.type[0]+'-'+
(RW._isNotEmptyString($.title)?'1':'0')+'-'+
(RW._isNotEmptyString($.rclass)?'1':'0')+'-'+
(RW._isNotEmptyString($.url)?'1':'0')+
(RW._isNotEmptyString($.img)?'-'+$.img.length:'');};$.distroy=function()
{RW._foreach(_elements,;_instances=null;};$.initData=function(d)
{$.urid=d.urid;$.rid=d.rid;$.rate=parseFloat(d.rate);$.votes=Math.max(0,parseInt(d.votes,10));$.rate=Math.max(0,Math.min(RW.MAX*d.votes,d.rate));$.votesData=RW._isArray(d.votesData)?d.votesData:[];$.isRated=($.votesData.length>0);$.lastVote=($.isRated?$.votesData[0]:null);$.lastVoteRate=($.isRated?$.lastVote.rate:0);$.report=null;_serverHash=d.hash;};$.getRequiredResources=function()
{return _getRequiredResources();};$.render=function()
{var p=['title','img','url','rclass','type'];for(var i=0,len=p.length;i<len;i++)
$[p[i]]='';RW._foreach(_instances,function(i){i.render();for(var j=0,len=p.length;j<len;j++)
if($[p[j]]==''&&RW._isNotEmptyString(i.options[p[j]]))
$[p[j]]=i.options[p[j]];});if($.url.isEmpty())
$.url=RW.site.page.url;};$.hideTooltip=function()
{if(RW._is(RW._tooltip))
RW._tooltip.style.display='none';};$.hideReport=function()
{RW.RatingReport.close(true);};$.isSynced=function()
{return(_serverHash==_getUniqueHash());};$.canRefresh=function()
{return _refreshUI;};$.refresh=$.getOption=function(option,i)
{if(undef===i)
i=0;return $.getInstances(i).options[option];};$.getInstances=$.getFirstInstance=$.getBoostedValues=$.getState=function()
{return _callState;};$.setState=$.setReady=function()
{$.setState('ready');};$.setCalling=$.voteBegin=function()
{$.setCalling();_refreshUI=false;};$.voteEnd=$.addReportVotes=function(f,val)
{var found=false;for(var i=0,len=$.report.length;i<len;i++)
{if(f===$.report[i].rate)
{$.report[i].votes+=val;found=true;break;}}
if(!found)
$.report.push({rate:f,votes:val});};var _getOptionsProperty=function(prop,instanceID)
{if(undef===instanceID)
instanceID=0;if(_o&&_o[prop])
return _o[prop];if(_instances[instanceID]&&_instances[instanceID].options&&_instances[instanceID].options[prop])
return _instances[instanceID].options[prop];return null;},_syncRating=function(rating)
{var flush_sync=(window.location.toString().indexOf('DBG=')>-1);if(!flush_sync&&rating.isSynced())
return;var
ratingData={rid:rating.rid.toString(),type:rating.type,rclass:rating.rclass.substring(0,64),title:rating.title.substring(0,256),url:rating.url.substring(0,512),img:rating.img.substring(0,512)},chunk=[ratingData];RW.Com.jsonp(RW._jsUrl('api/v2/rating/update.php'),{data:[{name:'ratings',value:encodeURIComponent(RW.JSON.stringify(chunk))}],callback:RW._updateCallback});};$.afterRate=function(instanceID)
{return _getOptionsProperty('afterRate');};$.beforeRate=$.voteCompleted=function(success,ratingData,msg,is_accumulator)
{var isFirstVote=(!$.isRated);is_accumulator=RW._def(is_accumulator,false);if(success)
{var prevVotesNumber=$.votes,prevLastVoteRate=$.lastVoteRate;if(0===$.rid&&(!$.getFirstInstance().isDummy())){$.rid=ratingData.rid;_syncRating($);}
$.rate=parseFloat(ratingData.rate);$.votes=Math.max(0,parseInt(ratingData.votes,10));$.rate=Math.max(0,Math.min(RW.MAX*$.votes,$.rate));$.votesData=ratingData.votesData;$.lastVote=$.votesData[0];$.lastVoteRate=$.lastVote.rate;if(!RW._isNull($.report))
{$.addReportVotes($.lastVoteRate,1);if(prevVotesNumber==$.votes)
$.addReportVotes(prevLastVoteRate,-1);}
$.isRated=true;if(undef!==ratingData.accumulator)
{var accumulator=RW.getRating(ratingData.accumulator.urid);if(RW._is(accumulator))
{ratingData.accumulator.votesData=ratingData.votesData;accumulator.voteCompleted(success,ratingData.accumulator,msg,true);}}}
if(!is_accumulator)
{var afterRate=$.afterRate();if(afterRate)
afterRate(success,($.getFirstInstance().isThumb()?($.lastVoteRate===RW.LIKE_RATE):$.lastVoteRate),$,isFirstVote,msg);}
$.voteEnd();$.refresh();if(success&&!is_accumulator)
_instances[ratingData.riid].showReport();};RW._foreach(_elements,function(e,i){_instances.push(new RW.RatingInstance(e,$,i));});};RW.RatingInstance=function(element,rating,id)
{var
$=this,_options,_mouseOutTimeout=null,PREFIX=RW.PREFIX+'-',P=PREFIX,_r=$.rating=rating,_e=element,_label,_labelContainer,_labelInnerContainer,_stars,_mobileDropdown,_o,_advanced,_a,_font,_f,_hover,_text,_t,_l,_layout,_align,_type,_ostyle,_defaultOptions=RW.getDefaultOptions(),_globalOptions;var
_initOptions=function(o)
{_options=RW._extandObj(_getOptions(element),o);return _options;},_getLoaderHtml=_renderLoading=function()
{_globalOptions=RW.getGlobalOptions();_ostyle=element.getAttribute('style');if(element.style.display==='')
element.style.display='inline-table';var showLoader=true;if(undef!==_options&&undef!==_options.showLoader)
showLoader=_options.showLoader;else if(undef!==_globalOptions&&undef!==_globalOptions.showLoader)
showLoader=_globalOptions.showLoader;else if(undef!==_defaultOptions&&undef!==_defaultOptions.showLoader)
showLoader=_defaultOptions.showLoader;element.innerHTML=(showLoader?_getLoaderHtml():'');},_atrrToProperty=function(name)
{var words=name.toLowerCase().split('-'),propertyName=words[0];for(var i=1,len=words.length;i<len;i++)
propertyName+=words[i].ucfirst();return propertyName;},_getPropertyValue=function(value)
{if(!RW._isString(value))
return value;switch(value)
{case'false':return false;case'true':return true;default:return value;}},_getAttributeOptions=function(e)
{var d={},dataAttr=/^data\-(.+)$/;for(var i=0,len=e.attributes.length;i<len;i++)
if(dataAttr.test(e.attributes[i].nodeName))
d[_atrrToProperty(e.attributes[i].nodeName.match(dataAttr)[1])]=_getPropertyValue(e.attributes[i].value);return d;},_getClassOptionsLegacy=function(e)
{var o=['class','uarid','size','lng','theme','style','readOnly','valign','halign','forceSync','sync'],d={advanced:{layout:{align:{}}}},p,key;for(var i=0,len=o.length;i<len;i++)
{p=RW._parseClassProperty(e,o[i],false);if(false!==p)
{p=_getPropertyValue(p);switch(o[i])
{case'class':d['rclass']=p;break;case'valign':d.advanced.layout.align.ver=p;break;case'halign':d.advanced.layout.align.hor=p;break;default:d[o[i]]=p;}}}
if(RW._Class.has(e,'rw-ui-star'))
d.type='star';if(RW._Class.has(e,'rw-ui-nero'))
d.type='nero';return d;},_getClassOptions=function(e)
{var d={},prefix='rw-prop-',classNames=RW._is(e.className)?e.className.split(' '):[],className,delimiterIndex,val,valLower,key;for(var i=0,len=classNames.length;i<len;i++)
if(classNames[i].startsWith(prefix))
{className=classNames[i].substring(prefix.length);delimiterIndex=className.indexOf('-');key=className.substring(0,delimiterIndex);val=className.substring(delimiterIndex+1);valLower=val.toLowerCase();d[key]=('true'===valLower)?true:(('false'===valLower)?false:val);}
return RW._extandObj(d,_getClassOptionsLegacy(e));},_getOptions=_normalizeOptions=function()
{_a.star.stars=Math.max(RW.MIN_STARS,Math.min(RW.MAX_STARS,_a.star.stars));if($.isStar())
_o.boost.rate=Math.max(1,Math.min(_a.star.stars,_o.boost.rate));},_setOptionAlias=function()
{_o=_options;_a=_advanced=_o.advanced;_f=_font=_advanced.font;_hover=_font.hover;_t=_text=_advanced.text;_l=_o.label;_layout=_advanced.layout;_align=_layout.align;_type=_o.type;},_exposeOptions=_prepareOptions=function()
{_options=$.getCalculatedOptions();_setOptionAlias();_normalizeOptions();_exposeOptions();},_getThumb=function(t)
{return RW._getFirstByClassName('rw-ui-'+t+'-icon','i',_e);},_getLike=function()
{return _getThumb('like');},_getDislike=function()
{return _getThumb('dislike');},_getThumbLabel=function(t)
{return RW._getFirstByClassName('rw-ui-'+t+'-label','span',_e);},_getLikeLabel=function()
{return _getThumbLabel('like');},_getDislikeLabel=function()
{return _getThumbLabel('dislike');},_getActionsContainer=_showReport=_attachReportEvents=function()
{if(!_showReport())
return;var trigger=RW._getFirstByClassName("rw-ui-info-container","span",_e);if(RW._is(trigger))
{trigger.onmouseover=function(e)
{if(!$.isReady())
return;RW.RatingReport.open($,trigger);};RW.mouseOut(trigger,function(e){if(!$.isReady())
return;RW.RatingReport.close();});}},_buttonMouseOut=function(e)
{if(!$.isActive())
return;if(_r.canRefresh()&&!RW._is(_mouseOutTimeout))
{_mouseOutTimeout=setTimeout(function(){$.refresh();},200);}},_getStarLabel=function(i)
{return(_a.star.stars>RW.MAX)?$.localizeNumber((i+1))+" / "+$.localizeNumber(_a.star.stars):_t[RW._TEXT_MAP.STAR[i]];},_attachStarEvents=function()
{var triggers=_stars;RW._foreach(triggers,function(star,i){star.onmouseover=function(e)
{if(!$.isActiveAndReady())
return;clearTimeout(_mouseOutTimeout);_mouseOutTimeout=null;var lastVote=_r.isRated?(_r.lastVoteRate-1):-1;for(var j=0,len=_stars.length;j<len;j++){if(j<=i)
RW._Class.set(_stars[j],'rw-ui-star-'+j+' rw-ui-star-over');else
{RW._Class.set(_stars[j],'rw-ui-star-'+j+' rw-ui-star-'+(lastVote<j?'preview':'selected'));}}
if($.setTooltip(_getStarLabel(i)))
_placeTooltip(star);};star.onmouseout=_buttonMouseOut;star.onclick=function(e)
{e=e||window.event;e.preventDefault();if(!$.isActiveAndReady())
return;$.doRate(i+1,star,e);};});if(_showMobileUX())
{_mobileDropdown.onchange=function(e)
{if('Powered By'===_mobileDropdown.options[_mobileDropdown.selectedIndex].parentNode.label)
window.location=WWW+'?type=star&device=mobile';else
_stars[_stars.length-1-_mobileDropdown.selectedIndex].onclick(e);};}},_thumbMouseOver=function(item,type)
{if(!$.isActiveAndReady())
return;clearTimeout(_mouseOutTimeout);_mouseOutTimeout=null;if($.setTooltip(_t[type]))
_placeTooltip(item);},_thumbClick=function(item,otherItem,action,e)
{if(!$.isActiveAndReady())
return;RW._Class.add(item.parentNode,"rw-selected");if(RW._is(otherItem))
RW._Class.remove(otherItem.parentNode,"rw-selected");action(item,e);},_attachThumbEvents=function(thumbName,otherThumbName)
{if(!_isThumbVisible(thumbName))
return;var t=_getThumb(thumbName),ot=_getThumb(otherThumbName),trigger=t;trigger.onclick=function(e)
{e=e||window.event;e.preventDefault();_thumbClick(t,ot,$[thumbName],e);};trigger.onmouseover=trigger.onmouseout=_buttonMouseOut;},_attachThumbsEvents=function()
{_attachThumbEvents('like','dislike');_attachThumbEvents('dislike','like');if(_showMobileUX())
{_mobileDropdown.onchange=function(e)
{if('Powered By'===_mobileDropdown.options[_mobileDropdown.selectedIndex].parentNode.label)
window.location=WWW+'?type=star&device=mobile';else
_getThumb(_mobileDropdown.options[_mobileDropdown.selectedIndex].value).onclick(e);};}},_attachEvents=function()
{_attachReportEvents();_e.onmouseover=function(e)
{if(!$.isReady())
return;$.setLabelColor(_hover.color);$.setLabelBorderColor(_f.color);};_e.onmouseout=function(e)
{if(!$.isReady())
return;$.setLabelColor(_f.color);$.setLabelBorderColor(RW.Color.toRgba(_f.color,0.5));};if($.isStar())
_attachStarEvents();else if($.isThumb())
_attachThumbsEvents();},_isThumbVisible=function(t)
{return _a.nero['show'+t[0].toUpperCase()+t.substring(1)];},_getThumbTotal=function(t)
{return _r[t+'s']+(RW[t.toUpperCase()+'_RATE']==_o.boost.rate?_o.boost.votes:0);},_refreshStar=function()
{var b=$.getBoostedValues();var twiceAverage=(b.votes>0)?Math.round((b.rate/b.votes)*2):0;var len=(twiceAverage-(twiceAverage%2))/2;for(var i=0;i<len;i++)
RW._Class.set(_stars[i],'rw-ui-star-'+i+' rw-ui-star-selected');if((twiceAverage%2)==1)
{RW._Class.set(_stars[len],'rw-ui-star-'+len+' rw-ui-star-half-selected');len++;}
for(var j=len;j<_a.star.stars;j++)
RW._Class.set(_stars[j],'rw-ui-star-'+j);},_refreshNero=function()
{var thumbs=['like','dislike'];RW._foreach(thumbs,function(t){if(_isThumbVisible(t))
_getThumbLabel(t).innerHTML=$.formatLabel(_a.nero.text[t][_r.isRated?'rated':'empty']);});if(_r.isRated)
{thumbs=(_r.lastVoteRate>0)?thumbs:thumbs.reverse();var sel=thumbs[0],unsel=thumbs[1];if(_isThumbVisible(sel))
RW._Class.add(_getThumb(sel).parentNode,"rw-selected");if(_isThumbVisible(unsel))
RW._Class.remove(_getThumb(unsel).parentNode,"rw-selected");}},_renderFontColor=function()
{return(_f.color===RW._defaultOptions.advanced.font.color)?'':'color: '+_f.color+';';},_renderFontFamily=function()
{return(_f.type===RW._defaultOptions.advanced.font.type)?'':'font-family: '+_f.type+';';},_renderFontSize=function()
{return(_f.size===RW._DEF_FONT_SIZE[_o.size.toUpperCase()])?'':'font-size: '+_f.size+';';},_renderLineHeight=function()
{return(_layout.lineHeight===RW._DEF_LINE_HEIGHT[_o.size.toUpperCase()])?'':'line-height: '+_layout.lineHeight+';';},_getReportUrl=function()
{return RW._url('my-rating-report/'+
_type+'/'+_o.style.replace(/\_/g,'-')+'/rating-'+_r.rid+
($.isStar()?'-'+_a.star.stars:'')+'/');},_renderReportLink=function()
{return'<a class="rw-report-link" target="_blank"'+(_o.showReport?'':' title="Rating-Widget Report"')+' href="'+_getReportUrl()+'" rel="nofollow"></a>';},_renderInfo=function()
{return(!_o.showInfo)?'':'<span class="rw-ui-info-container">'+
$.renderNub()+'<span class="rw-ui-info-inner-container">'+'<span class="rw-ui-info" style="'+
_renderFontColor()+_renderFontFamily()+_renderFontSize()+_renderLineHeight()+'"></span></span></span>';},_showMobileUX=function()
{return(RW._isMobile()&&!_o.readOnly&&_o.mobile.optimized);},_renderStars=function()
{var html='';if(_showMobileUX())
html+=$.renderMobileDropdown();html+='<ul class="rw-ui-stars">';var a='';for(var i=0,len=_a.star.stars;i<len;i++)
    html+='<li class="rw-ui-star-'+i+'">'+a+'</li>';return html+'</ul>';},_renderStarsActionArea=function()
{return'<div class="rw-action-area">'+_renderStars()+(!RW._isPremium()?_renderReportLink():'')+'</div>';},_renderStarRating=function()
{_e.innerHTML=(_align.ver==RW.ALIGN.VER.TOP)?_renderInfo()+_renderStarsActionArea():_renderStarsActionArea()+_renderInfo();_stars=RW._getByTagName("li",_e);},_renderLikeButton=function(like)
{var action=(like?"like":"dislike"),a='';return'<span class="rw-ui-'+action+'"><i aria-label="'+_t[action]+'" class="rw-ui-'+action+'-icon">'+a+'</i><span class="rw-ui-'+action+'-label" style="'+_renderFontFamily()+_renderFontSize()+_renderLineHeight()+'"></span></span>';},_renderThumbRating=function()
{var innerHtml='<div class="rw-action-area">';if(_showMobileUX())
    {var disableSelection=$.isActive()?'':' disabled="disabled"',lastVote=(_r.isRated?_r.lastVoteRate:-1);innerHtml+='<div class="rw-mobile-action-area"><select class="rw-ui-mobile-stars"><optgroup label="'+_t.rateThis+'">';if(_a.nero.showLike)
                innerHtml+='<option'+((5==lastVote)?' selected="selected"':disableSelection)+' value="like">'+_t.like+'</option>';if(_a.nero.showDislike)
                innerHtml+='<option'+((5!=lastVote)?' selected="selected"':disableSelection)+' value="dislike">'+_t.dislike+'</option>';innerHtml+='</optgroup>'+(!RW._isPremium()?'<optgroup label="Powered By"><option><a href="'+WWW+'" target="_blank">RatingWidget.com</a></option></optgroup>':'')+'</select></div>';}
    if(_a.nero.showLike)
    innerHtml+=_renderLikeButton(true);if(_a.nero.showDislike)
    innerHtml+=_renderLikeButton(false);if(!RW._isPremium())
    innerHtml+=_renderReportLink();innerHtml+='</div>';_e.innerHTML=(_align.ver==RW.ALIGN.VER.TOP)?_renderInfo()+innerHtml:innerHtml+_renderInfo();},_setRatingClassNames=function()
{RW._Class.set(_e,P+'ui-container '+
P+'urid-'+_r.urid+' '+
P+'ui-'+_type+' '+
P+'size-'+_o.size+' '+
P+'dir-'+((_layout.dir==RW.DIR.RTL)?RW.DIR.RTL:RW.DIR.LTR)+' '+
P+'halign-'+_align.hor+' '+
P+'valign-'+_align.ver+' '+
P+'style-'+_o.style);if(null!=_o.theme&&!_o.theme.isEmpty())
RW._Class.add(_e,'theme-'+_o.theme,P);if(!_o.readOnly)
RW._Class.add(_e,'active',P);if(_f.bold)
RW._Class.add(_e,'bold',P);if(_f.italic)
RW._Class.add(_e,'italic',P);if(!(_o.rclass.trim().isEmpty()))
RW._Class.add(_e,"class-"+_o.rclass,P);if(RW.visitor.mobile)
RW._Class.add(_e,'mobile',P);},_addCustomImageCss=function()
{if(_o.style.toLowerCase()!==RW.CUSTOM)
return;var classOptions=$.getClassOptions(),themeOptions=$.getThemeOptions(classOptions);if((classOptions.style!==RW.CUSTOM||!RW._isEqualImg(_o.imgUrl,classOptions.imgUrl))&&(themeOptions.style!==RW.CUSTOM||!RW._isEqualImg(_o.imgUrl,themeOptions.imgUrl)))
{RW._addCustomImgStyle(_o.imgUrl,[_type],"urid",_r.urid);}},_placeTooltip=function(target,flush)
{flush=false||flush;if(!flush&&!$.isReady())
return;if(!_o.showTooltip)
return;var a=RW._getFirstByTagName('a',target);target=RW._is(a)?a:target;RW._tooltip.style.left='';RW._tooltip.style.top='';target.appendChild(RW._tooltip);RW._tooltip.style.display="block";RW._tooltip.style.left="-"+Math.ceil((RW.width(RW._tooltip)-$.getIconWidth())/2)+"px";var offset=RW.offset(RW._tooltip),doc_offset=RW.docOffset();doc.body.appendChild(RW._tooltip);RW._tooltip.style.left=offset.left+"px";var height=RW.height(RW._tooltip);if((offset.top-height-4)>doc_offset.top){RW._Class.set(RW._tooltip,"rw-ui-tooltip rw-valign-top");RW._tooltip.style.top=(offset.top-height-3)+"px";}else{RW._Class.set(RW._tooltip,"rw-ui-tooltip rw-valign-bottom");RW._tooltip.style.top=(offset.top+$.getIconWidth()+4)+"px";}},_render=function()
{_prepareOptions();_e.innerHTML='';_e.setAttribute('style',(RW._is(_ostyle)?_ostyle+';':'')+_a.css.container);_addCustomImageCss();_setRatingClassNames();if($.isStar())
_renderStarRating();else if($.isThumb())
_renderThumbRating();if(_o.isDummy){_e.innerHTML+='<input type="hidden" class="rw-vote-data" name="rw-vote-data"/>';}
if(_o.showInfo)
{_label=RW._getFirstByClassName("rw-ui-info","span",_e);_labelInnerContainer=_label.parentNode;_labelContainer=_labelInnerContainer.parentNode;}
if(_showMobileUX())
{_mobileDropdown=RW._getFirstByClassName("rw-ui-mobile-stars","select",_e);if(!_r.isRated)
_mobileDropdown.selectedIndex=-1;}
$.refresh();_attachEvents();},_isTimePassed=function(utcDateTime,days)
{var now=new Date(),utc=new Date(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate(),now.getUTCHours(),now.getUTCMinutes(),now.getUTCSeconds()),next=Date.parse(utcDateTime.replace(/-/g,"/"))+days*(1000*60*60*24);return(utc.getTime()>=next)?true:next;},_overridenVoteID=function()
{var voteID=false;if(!_r.isRated)
voteID=false;else if(!_o.reVote)
voteID=false;else if(_o.frequency==RW.FREQUENCY.UNLIMITED)
voteID=false;else if(_o.frequency==RW.FREQUENCY.ONCE)
voteID=_r.lastVote.id;else
voteID=(true===_isTimePassed(_r.lastVote.created,_o.frequency))?false:_r.lastVote.id;return voteID;},_cancelRate=_completeRate=function(element,score,e)
{$.setTooltip('<i class="rw-action-loader"></i>',true);_placeTooltip(element,true);var beforeRate=_r.beforeRate(),voterID=(beforeRate?beforeRate(rating,score):true);if(false===voterID)
{_cancelRate();return;}
if(true===voterID&&RW._is(RW.visitor.id))
voterID=RW.visitor.id;$.setLabel(_t.thanks);var voteID=_overridenVoteID();var data=[{name:"urid",value:_r.urid},{name:"riid",value:$.id}];data.push(((RW.TYPE.STAR===_type)?{name:"rate",value:score*(RW.MAX/_a.star.stars)}:{name:"like",value:score}));if(voteID!==false)
data.push({name:"voteID",value:voteID});if(voterID!==true)
data.push({name:"vid",value:voterID});if(_o.uarid>0)
data.push({name:"uarid",value:_o.uarid});if(!_o.isDummy){RW.Com.jsonp(RW._jsUrl('api/rating/rate.php'),{data:data});}else{RW.Com.enrichRequest(data,false);var requestData=RW.Com.fromNameValue(data);if(requestData.voteID){delete requestData.voteID;}
var fakeResponse={success:true,msg:""};var fakeResponseRateData={riid:requestData.riid,votes:1};if(undef!==requestData.like){fakeResponseRateData.rate=requestData.like?5:0;}else{fakeResponseRateData.rate=requestData.rate;}
var fakeResponseVoteData=[{rate:fakeResponseRateData.rate}];fakeResponseRateData.votesData=fakeResponseVoteData;fakeResponse.data=fakeResponseRateData;var rwVote=RW._getFirstByClassName("rw-vote-data",'input',_e);rwVote.value=JSON.stringify(requestData);RW._rateCallback(fakeResponse,_r.urid);}
if(typeof(undef)!==typeof(_gaq))
{_gaq.push(['_setCustomVar',1,'urid',_r.urid,3]);_gaq.push(['_setCustomVar',2,'title',_o.title,3]);_gaq.push(['_setCustomVar',3,'rate',((RW.TYPE.STAR===_type)?score.toString():(score?'like':'dislike')),1]);_gaq.push(['_trackEvent','Rating','Vote',_o.title,score]);}
else if(typeof(undef)!==typeof(window.ga))
{ga('send','event','Rating','Vote',_o.title,score);}},_rate=function(element,score,e)
{if(!$.isReady())
return;_r.voteBegin();$.hideReport();$.hideTooltip();if(!RW.shouldConnect())
{_completeRate(element,score,e);}
else
{var
sign_win=doc.createElement('iframe'),modal=doc.createElement('div');modal.id='rw_modal';sign_win.className='rw-ui-signup-window';sign_win.src=RW._url(RW.Com.getUrl('/signup/visitor/',[{name:'site_id',value:RW.site.id},{name:'type',value:_type},{name:'style',value:_o.style},{name:'rate',value:(RW.TYPE.STAR===_type)?score:(score?5:0)},{name:'label',value:encodeURIComponent((RW.TYPE.STAR===_type)?_getStarLabel(score-1):_t[(score?'like':'dislike')])},{name:'stars',value:(RW.TYPE.STAR===_type)?_a.star.stars:0},{name:"cguid",value:RW._guid()}]));sign_win.onload=function()
{this.style.visibility='visible';RW.remove(RW._getFirstByTagName('img',modal));};body.appendChild(modal);modal.innerHTML=_getLoaderHtml();modal.appendChild(sign_win);window.addEventListener("message",function(evt){evt=evt||window.event;if(!evt.data.startsWith('rw:'))
return;var
data=evt.data.split(':'),msg=data[1];switch(msg)
{case'rw_visitor_id':RW._setVisitorID(data[2],true);_completeRate(element,score,e);break;default:_cancelRate();break;}
RW.remove(modal);},false);}};$.distroy=$.getClass=function()
{_globalOptions=RW.getGlobalOptions();return RW._Set.getOption([_options,_globalOptions],'rclass');};$.getClassOptions=$.getThemeOptions=function(classOptions)
{_globalOptions=RW.getGlobalOptions();return RW._getThemeOptions(RW._Set.getOption([_options,classOptions,_globalOptions],'theme',false));};$.getCalculatedOptions=function()
{var classOptions=$.getClassOptions();_globalOptions=RW.getGlobalOptions();var o=RW._Set.merge([_options,classOptions,$.getThemeOptions(classOptions),_globalOptions],_defaultOptions);if(!RW._isNotEmptyString(o.style))
o.style=RW._DEF_STYLES[o.type.toUpperCase()];if(o.style.toLowerCase()===RW.CUSTOM&&!RW._isTrial()&&!RW._isProfessional())
o.style=RW._DEF_STYLES[o.type.toUpperCase()];return o;};$.getIconWidth=function()
{return(_o.size==RW.SIZE.SMALL)?16:((_o.size==RW.SIZE.MEDIUM)?20:((_o.size==RW.SIZE.TINY)?13:30));};$.isStar=function()
{return(_type==RW.TYPE.STAR);};$.isThumb=function()
{return(_type==RW.TYPE.NERO);};$.isDummy=function()
{return _o.isDummy;};$.getTotalLikes=function()
{return _getThumbTotal('like');};$.getTotalDislikes=$.getBoostedVotes=function()
{var b=$.getBoostedValues();return $.isStar()?b.votes:((_a.nero.showLike?b.likes:0)+(_a.nero.showDislike?b.dislikes:0));};$.getBoostedValues=function()
{var votes=(_o.showAverage?_r.votes+_o.boost.votes:(_r.isRated?1:0)),rate=(_o.showAverage?$.getNormalizedRate(_r.rate)+(_o.boost.rate*_o.boost.votes):$.getNormalizedRate(_r.lastVoteRate)),likes=Math.floor(rate/RW.MAX),dislikes=Math.max(0,votes-likes);return $.isStar()?{votes:votes,rate:rate}:{likes:likes,dislikes:dislikes};};$.localizeNumber=$.lastVoteTooltip=function(){return(_r.rate>0&&_r.votes>0)?($.isThumb()?(_t[(RW.LIKE_RATE===_r.rate)?'like':'dislike']):_getStarLabel(Math.ceil((_r.rate/_r.votes))-1)):_t.rateThis;},$.formatLabel=function(label)
{if(label.indexOf('/%')===-1&&label.indexOf('{{')===-1)
return label;var b=$.getBoostedValues(),votes=b.votes;if($.isThumb())
{votes=0;if(_a.nero.showLike)
votes+=b.likes;if(_a.nero.showDislike)
votes+=b.dislikes;}
var
map={'text.rateThis':_t.rateThis,'text.outOf':_t.outOf,'text.votes':((votes==1)?_t.vote:_t.votes),'rating.lastVote':$.lastVoteTooltip()},nmap={'rating.votes':votes,'rating.likes':b.likes,'rating.dislikes':b.dislikes,'rating.max_rate':_a.star.stars,'rating.avg_rate':((votes>0)?((b.rate/votes)*(_a.star.stars/RW.MAX)).toFixed(2):0),'rating.rate_percent':((votes>0)?Math.ceil((b.rate/votes)*100/RW.MAX):0)},localized=RW.isLocalizedNumbers(_o.lng),i=0;do
{for(var key in map)
{label=label.replace('/%'+key+'%/',map[key]);label=label.replace('{{'+key+'}}',map[key]);}
for(var key in nmap)
{if(label.indexOf('/%'+key+'%/')>-1)
label=label.replace('/%'+key+'%/',localized?$.localizeNumber(nmap[key]):nmap[key]);if(label.indexOf('{{'+key+'}}')>-1)
label=label.replace('{{'+key+'}}',localized?$.localizeNumber(nmap[key]):nmap[key]);}
i++;}
while(i<10&&(label.indexOf('/%')>-1||label.indexOf('{{')>-1));label=label.trim();return label;};$.getLabelValue=function()
{var b=$.getBoostedValues();var label="";if($.isStar())
{if(!_o.readOnly&&(0===b.votes||(!_o.showAverage&&!_r.isRated)))
{label=_l.text.star.empty;}
else
{if(!_o.showAverage)
{label=_t.thanks;}
else
{label=_l.text.star.rated;if(!_o.readOnly&&!_r.isRated)
label=_l.text.star.normal;}}}
else
{if(!_o.readOnly&&!_r.isRated)
label=_l.text.nero.empty;else if(!_a.nero.showLike||!_a.nero.showDislike)
label='';else
label=_l.text.nero.rated;}
return label;};$.getNormalizedRate=function(rate,round)
{if($.isThumb())
return rate;var n=rate*(_a.star.stars/RW.MAX);return(true===round)?Math.round(n):n;};$.isReady=$.isActive=function()
{var res=false;if(_o.readOnly)
res=false;else if(!_r.isRated)
res=true;else if(_o.reVote&&(($.isStar()&&_a.star.stars>1)||($.isThumb()&&_a.nero.showLike&&_a.nero.showDislike)))
res=true;else if(_o.frequency==RW.FREQUENCY.ONCE)
res=false;else if(_o.frequency==RW.FREQUENCY.UNLIMITED)
res=true;else
res=(true===_isTimePassed(_r.lastVote.created,_o.frequency));RW._Class.toggle(_e,PREFIX+"active",(true===res));return res;};$.isActiveAndReady=$.setOptions=function(o)
{_options=RW._Set.merge([o],_defaultOptions);$.render();};$.setSize=function(s)
{if(s==_o.size)
return;RW._Class.override(_e,PREFIX+"size-"+_o.size,PREFIX+"size-"+s);_o.size=s;};$.setStyle=function(pStyle,pUrl)
{pUrl=RW._def(pUrl,{ltr:"",rtl:""});pStyle=pStyle.toLowerCase();if(pStyle==_o.style&&(pStyle!=RW.CUSTOM||RW._isEqualImg(pUrl,_o.imgUrl)))
return;if(_o.style==RW.CUSTOM&&pStyle!==RW.CUSTOM)
{RW._Class.remove(_e,PREFIX+"theme-"+_o.theme);RW._Class.remove(_e,PREFIX+"class-"+_o.rclass);var stylesheet=RW._getById("rw_urid_"+_r.urid+"_custom_style");if(RW._is(stylesheet))
RW.remove(stylesheet);}
RW._Class.override(_e,PREFIX+"style-"+_o.style,PREFIX+"style-"+pStyle);_o.style=pStyle;_o.imgUrl=pUrl;if(_o.style.toLowerCase()==RW.CUSTOM)
RW._addCustomImgStyle(_o.imgUrl,[_type],"urid",_r.urid);};$.toggleBold=function()
{RW._Class.toggle(_e,PREFIX+'bold');_f.bold=!_f.bold;};$.toggleLike=function(show)
{if(!$.isThumb())
return;_a.nero.showLike=(RW._is(show)?show:!_a.nero.showLike);$.render();};$.toggleDislike=function(show)
{if(!$.isThumb())
return;_a.nero.showDislike=(RW._is(show)?show:!_a.nero.showDislike);$.render();};$.setReadOnly=function(readOnly)
{if(readOnly==_o.readOnly)
return;RW._Class.toggle(_e,PREFIX+'active');_o.readOnly=readOnly;};$.setShowInfo=function(show)
{if(show==_o.showInfo)
return;_o.showInfo=show;$.render();};$.toggleItalic=function()
{RW._Class.toggle(_e,PREFIX+'italic');_f.italic=!_f.italic;};$.setFontType=function(family)
{if(family==_f.type)
return;RW._foreach(RW._getByTagName('span',_e),;_f.type=family;};$.setLabelBackground=function(color,flush)
{color=RW.Color.canonize(color);if(!(flush||false)&&color==RW.Color.canonize(_o.label.background))
return;if(_o.showInfo)
_labelContainer.style.backgroundColor=color;$.setLabelNubColor(color,'inner');_o.label.background=color;};$.setFontColor=function(color,flush)
{color=RW.Color.canonize(color);if(!(flush||false)&&color==RW.Color.canonize(_f.color))
return;$.setLabelColor(color);_f.color=color;};$.setFontHOverColor=function(color)
{color=RW.Color.canonize(color);if(color==RW.Color.canonize(_hover.color))
return;_hover.color=color;};$.setFontSize=function(size)
{if(size==_f.size)
return;if(_o.showInfo)
_label.style.fontSize=size;if($.isThumb())
{if(_a.nero.showLike)
_getLikeLabel().style.fontSize=size;if(_a.nero.showDislike)
_getDislikeLabel().style.fontSize=size;}
_f.size=size;};$.setDirection=function(dir)
{if(dir==_layout.dir)
return;RW._Class.override(_e,PREFIX+"dir-"+_layout.dir,PREFIX+"dir-"+dir);_layout.dir=dir;};$.setAlignment=function(ver,hor)
{if(ver==_align.ver&&hor==_align.hor)
return;if(ver!=_align.ver)
RW._Class.replace(_e,PREFIX+"valign-"+_align.ver,PREFIX+"valign-"+ver);if(hor!=_align.hor)
RW._Class.replace(_e,PREFIX+"halign-"+_align.hor,PREFIX+"halign-"+hor);if(_o.showInfo)
{if(ver!=_align.ver)
{if(ver==RW.ALIGN.VER.TOP)
{_e.appendChild(_labelContainer);_e.appendChild(_getActionsContainer());}
else
{_e.appendChild(_getActionsContainer());_e.appendChild(_labelContainer);}}}
_align.ver=ver;_align.hor=hor;$.setLabelBackground(_o.label.background,true);$.setFontColor(_f.color,true);};$.setLineHeight=function(height)
{if(height==_layout.lineHeight)
return;if(_o.showInfo)
_label.style.lineHeight=height;if($.isThumb())
{if(_a.nero.showLike)
_getLikeLabel().style.lineHeight=height;if(_a.nero.showDislike)
_getDislikeLabel().style.lineHeight=height;}
_layout.lineHeight=height;};$.setLanguage=function(lng)
{if(lng==_o.lng||!RW._is(RWL[lng]))
return;for(var p in _text){_t[p]=RWL[lng].text[p];}
$.setDirection(RWL[lng].dir);if(RW.ALIGN.VER.MIDDLE===_align.ver)
$.setAlignment(RWL[lng].align.ver,RWL[lng].align.hor);_o.lng=lng;$.refresh();};$.setStarsNum=function(n)
{n=Math.max(RW.MIN_STARS,Math.min(RW.MAX_STARS,parseInt(n,10)));if(_type!==RW.TYPE.STAR||_a.star.stars===n)
return;_a.star.stars=n;$.render();};$.setCSS=function(item,style)
{if(!RW._is(_a.css[item])||_a.css[item]===style)
return;_a.css[item]=style;var display=_e.style.display;_e.setAttribute('style',style);_e.style.display=display;};$.setLabel=function(label)
{if(!$.isReady())
return;if(!_o.showInfo)
return;if(''==label)
RW._getFirstByClassName('rw-ui-info-container','span',_e).style.display='none';else if(_o.showInfo)
_label.innerHTML=$.formatLabel(label);};$.setLabelColor=function(color)
{if(!$.isReady())
return;if(!_o.showInfo)
return;if(_o.showInfo)
_label.style.color=color;$.setLabelBorderColor(RW.Color.toRgba(color,0.5));};$.setLabelBorderColor=function(color)
{if(_o.showInfo)
_labelInnerContainer.style.borderColor=color;$.setLabelNubColor(color,'outer');};$.setLabelNubColor=function(color,nub)
{if(!_o.showInfo)
return;var nub=RW._getFirstByClassName('rw-ui-info-'+nub+'-nub','*',_labelContainer),nubDir=(RW.ALIGN.VER.MIDDLE===_align.ver)?_align.hor:_align.ver;nub.style.borderTopColor=nub.style.borderRightColor=nub.style.borderBottomColor=nub.style.borderLeftColor='';nub.style['border'+nubDir.ucfirst()+'Color']=color;};$.setTooltip=function(tip,flush)
{flush=false||flush;if(!flush&&!$.isReady())
return;if(!_o.showTooltip)
return;RW._tooltip.innerHTML='<b></b><span class="rw-ui-tooltip-label"><nobr>'+tip+'</nobr></span>';return!tip.isEmpty();};$.rate=function(i,e)
{i=(_stars.length+i)%_stars.length;_stars[i].onclick(e);if(_showMobileUX())
_mobileDropdown.selectedIndex=(_stars.length-1-i);};$.doRate=function(i,star,e)
{i=Math.min(_a.star.stars,Math.max(RW.MIN,i));return _rate(star,i,e);};$.like=function(thumb,e,like)
{return _rate(thumb,RW._def(like,true),e);};$.dislike=$.hideTooltip=$.hideReport=$.showReport=function()
{if(_showReport())
{var trigger=RW._getFirstByClassName("rw-ui-info-container","span",_e);if(!RW._is(trigger))
trigger=_e;RW.RatingReport.open($,trigger);}};$.refresh=function()
{if($.isStar())
_refreshStar();else if($.isThumb())
_refreshNero();if(RW._isPremium())
RW._Class.add(_e,'premium',P);$.setFontColor(_f.color,true);$.setLabelBackground(_o.label.background,true);$.setLabel($.getLabelValue());$.hideTooltip();};$.renderNub=function()
{return'<i aria-hidden="true" class="rw-ui-info-nub rw-ui-info-outer-nub"></i><i aria-hidden="true" class="rw-ui-info-nub rw-ui-info-inner-nub"></i>';};$.renderMobileDropdown=function()
{var html='<div class="rw-mobile-action-area"><select class="rw-ui-mobile-stars"><optgroup label="'+_t.rateThis+'">';var disableSelection=$.isActive()?'':' disabled="disabled"',lastVote=_r.isRated?(_r.lastVoteRate-1):-1;for(var j=_a.star.stars-1;j>=0;j--)
            html+='<option'+(j===lastVote?' selected="selected"':disableSelection)+'>'+_getStarLabel(j)+'</option>';html+='</optgroup>'+(!RW._isPremium()?'<optgroup label="Powered By"><option><a href="'+WWW+'" target="_blank">RatingWidget.com</a></option></optgroup>':'')+'</select></div>';return html;};$.render=function()
{_render();};$.getRating=$.getStar=function(i)
{return _stars[(_stars.length+i)%_stars.length];};$.showMobileUX=$.hasRecommendations=$.recommendationsCount=$.getRecommendations=function()
{return _r.recommendations;};$.getReport=function()
{var data={};for(var i=1,len=_a.star.stars;i<=len;i++)
data[i]=0;for(var j=0,len=_r.report.length;j<len;j++)
data[$.getNormalizedRate(_r.report[j].rate,true)]+=parseInt(_r.report[j].votes,10);return data;};$.isVisible=$.id=id;$.rating=_r;$.element=_e;$.options=_initOptions(_r.options);_renderLoading();};RW.RatingReport=function(instance)
{var
_e=null,_timeout=null,_trigger=null,_ri=null;var
_setReport=function(ri,trigger)
{if(!ri.isReady()||!ri.options.showReport||(ri.isThumb()&&(!ri.advanced.nero.showLike||!ri.advanced.nero.showDislike)))
return;if(RW._isPremium()&&((ri.isStar()&&ri.advanced.star.stars<2)||(ri.isThumb()&&0===ri.getBoostedVotes())))
return;_trigger=trigger;_ri=ri;RW._Class.set(_e,'rw-ui-report rw-meta-rating-'+_ri.rating.rid);var show_recommendations=_showRecommendations();if(RW._is(_ri.rating.report)||(_ri.isThumb()&&!show_recommendations))
{_renderReport();}
else if(_ri.isStar()||show_recommendations)
{var data=[{name:'rid',value:_ri.rating.rid},{name:'urid',value:_ri.rating.urid}];if(show_recommendations)
{data.push({name:'type',value:_ri.type});data.push({name:'recommendations',value:true});data.push({name:'category',value:RW.site.category});data.push({name:'sponsored',value:(((RW._showSponsoredRecommendations()||ri.options.showSponsored)&&RW.Sponsored.preload())?RW.Sponsored.count():0)});data.push({name:'show_sponsored',value:(RW._showSponsoredRecommendations()||ri.options.showSponsored)});data.push({name:'country',value:RW.visitor.country});}
_ri.getRating().setCalling();RW.Com.jsonp(RW._jsUrl('api/v2/rating/report.php'),{data:data});}},_drawPieChart=function(canvas,data,colorArr)
{var
pieGroup=RW.Svg.createElement('g'),defs=RW.Svg.createElement('defs'),rg=null,stop=null;for(var i=0;i<colorArr.length;i++)
{rg=RW.Svg.createElement('radialGradient');RW._setAttr(rg,{id:'grad_'+colorArr[i].id,r:'50%',cx:'50%',cy:'50%',gradientUnits:'userSpaceOnUse'});for(var j=0;j<colorArr[i].stops.length;j++)
{stop=RW.Svg.createElement('stop');RW._setAttr(stop,{offset:colorArr[i].stops[j][0],'stop-color':colorArr[i].stops[j][1]});rg.appendChild(stop);}
defs.appendChild(rg);}
canvas.appendChild(pieGroup);pieGroup.appendChild(defs);var
showAd=(false!==RW.Ad.get()||_hasRecommendations()),canvasSize={width:RW.width(canvas),height:RW.height(canvas)},canvasCenter={x:canvasSize.width/2,y:(!showAd?canvasSize.height/2:canvasSize.height)},radius=(!showAd?Math.min(canvasSize.width,canvasSize.height)/2:canvasSize.width/2-50),innerRadius=(!showAd?radius-30:radius-80),total=(!showAd?RW._sum(data):RW._sum(data)*2),arc=null,startAngle=(!showAd?270:180),endAngle=0;for(var i=0;i<data.length;i++)
{part=data[i]/total;if(1==Math.floor(part))
part=0.999999;endAngle=startAngle+(360*part);arc=RW.Svg.getArcPath(canvasCenter,radius,startAngle,endAngle,innerRadius);RW._setAttr(arc,{fill:'url(#'+'grad_'+colorArr[i].id+')'});pieGroup.appendChild(arc);startAngle=endAngle;}},_placeReport=function(target)
{if(!_ri.isVisible())
return;_e.style.display="block";var targetWidth=RW.width(target),targetHeight=RW.height(target),reportWidth=RW.width(_e),adDetails=RW.Ad.get(),className='rw-ui-report rw-size-large rw-halign-center gradient '+'rw-dir-'+_ri.advanced.layout.dir+
(_ri.isStar()?' rw-type-star':' rw-type-nero')+' rw-meta-rating-'+_ri.rating.rid+
(_ri.getBoostedVotes()>0?'':' rw-no-votes')+
(RW._isPremium()?' rw-premium':'')+
((_showRecommendations()&&_hasRecommendations())?' rw-ui-ad-468x60':((!RW._isPremium()&&false!==adDetails)?' rw-ui-ad-'+adDetails.width+'x'+adDetails.height:''));RW._Class.set(_e,className);_e.style.left="0";_e.style.top="0";target.appendChild(_e);_e.style.left="-"+Math.ceil((reportWidth-targetWidth)/2)+"px";var offset=RW.offset(_e),doc_offset=RW.docOffset();doc.body.appendChild(_e);_e.style.left=offset.left+"px";var reportHeight=RW.height(_e);var topPosition=(offset.top-reportHeight-10),bottomPosition=(offset.top+targetHeight+10);if(topPosition>doc_offset.top){className+=' rw-valign-top';_e.style.top=topPosition+"px";}else{className+=' rw-valign-bottom';_e.style.top=bottomPosition+"px";}
RW._Class.set(_e,className);},_renderReportClose=_renderRecommendation=function(data,i)
{var domain=RW.getDomain(data.url);return'\
<a href="'+data.url+'" title="Read More" onclick="RW.Trc.linkClick(this, {cell: '+i+', siteCategory: \''+RW.site.category+'\'}); return false;">\
    <img src="'+RW._tmbUrl((RW._isNotEmptyString(data.img)?data.img:data.url),152,110)+'" alt="" />\
    <span class="rw-ui-title">'+data.title+(RW._isString(domain)?(' <b>'+domain+'</b>'):'')+'</span>\
</a>';},_renderSponsoredRecommendation=function(data,i,label)
{label=label||'&#10064; Sponsored';return'\
<a class="rw-ui-external" href="'+data.url+'" target="_blank" title="Read More" onclick="RW.Sponsored.clicked(\''+data.postId+'\'); RW.Trc.adClick(\''+data.clickUrl+'\'); return false;">\
    <img src="'+RW._tmbUrl((RW._isNotEmptyString(data.thumbnail_path)?data.thumbnail_path:data.url),152,110)+'" alt="" />\
    <span class="rw-ui-title">'+data.title+' <b>'+(RW._isString(data.domain)?data.domain:'Sponsored')+'</b></span>\
    <b class="rw-ui-label">'+label+'</b>\
</a>';},_renderRecommendations=function()
{var rec=_ri.getRecommendations(),sponsored=RW.Sponsored.get(Math.max(1,3-(RW._isNotEmptyArray(rec)?rec.length:0))),isSponsored=false,html='<div class="rw-ui-recommendations">\
    <span class="rw-ui-recommendations-title">'+_ri.advanced.text.weRecommend+':</span>\
    <ul>';if(sponsored.length>0)
        RW.Trc.load('sponsored_link');if(3===sponsored.length){var first=sponsored[0];sponsored[0]=sponsored[1];sponsored[1]=first;}
        for(var i=0,j=0,k=0;i<3;i++)
        {isSponsored=(3===sponsored.length||(1===i&&sponsored.length>0)||(2===i&&sponsored.length>1));html+='<li>'+
            (isSponsored?_renderSponsoredRecommendation(sponsored[j],i):_renderRecommendation(rec[k],i))+'</li>';if(isSponsored)
        j++;else
        k++;}
        html+='\
    </ul>\
</div>';return html;},_hasRecommendations=function()
{return(3<=(_ri.recommendationsCount()+(RW._is(RW.Sponsored)?RW.Sponsored.count():0)));},_showRecommendations=function()
{if(_ri.options.hideRecommendations)
return false;return((RW._isFree()&&RW._showRecommendations())||(RW._isPaid()&&_ri.options.showRecommendations));},_renderPoweredBy=function()
{return'Powered by '+'<a href="http://rating-widget.com/?s='+RW.site.type.toLowerCase()+'&w=report" target="_blank" rel="nofollow"><em></em> <b>Rating</b><i>Widget</i></a>';},_renderFooter=function()
{var html='';if(_showRecommendations()&&_hasRecommendations())
html+=_renderRecommendations();if(!RW._isPaid())
html+=_renderPoweredBy();return html.isEmpty()?'':'<div class="rw-ui-poweredby">'+html+'</div>';},_renderSharing=_renderStarReport=function()
{var b=_ri.getBoostedValues(),innerHtml='<div class="rw-ui-report-header">'+_ri.localizeNumber(b.votes>0?(Math.round(b.rate/b.votes*100)/100):0)+' '+_ri.advanced.text.outOf+' '+_ri.localizeNumber(_ri.advanced.star.stars)+'</div>'+_renderReportClose()+'<table>',data=_ri.getReport();for(var i=_ri.advanced.star.stars;i>=1;i--)
    {var starVotes=((RW._is(data)&&RW._is(data[i]))?parseInt(data[i],10):0)+
    (((i+1)==_ri.options.boost.rate)?_ri.options.boost.votes:0),percents=(b.votes>0)?Math.floor((starVotes/b.votes)*10000)/100:0;innerHtml+='<tr><td><em>'+
                ((_ri.advanced.star.stars>RW.MAX)?_ri.localizeNumber('['+i+'/'+_ri.advanced.star.stars+']'):_ri.advanced.text[RW._TEXT_MAP.STAR[i-1]])+'</em></td><td><b><i style="width: '+percents+'%;"></i></b></td><td><var>('+
                _ri.localizeNumber(starVotes)+')</var></td></tr>';}
    innerHtml+='</table>';innerHtml+=_renderFooter();innerHtml+=_ri.renderNub();return innerHtml;},_renderNeroReport=function()
{var b=_ri.getBoostedValues(),moreLikes=(b.likes>=b.dislikes),percents=Math.ceil(((moreLikes?b.likes:b.dislikes)/(b.likes+b.dislikes))*100),votes=b.likes+b.dislikes;var innerHtml='<div class="rw-ui-report-header">'+votes+' '+_ri.advanced.text.votes+'</div>'+_renderReportClose()+'<div class="rw-ui-svg-container rw-ui-nero rw-ui-'+(moreLikes?'like':'dislike')+' rw-size-large rw-style-'+_ri.options.style+'"><svg version="1.2" xmlns="'+svgXmlns+'" xmlns:xlink="http://www.w3.org/1999/xlink"></svg><div class="rw-data"><span><b>'+percents+'</b><i>%</i></span><i class="rw-icon rw-ui-'+(moreLikes?'like':'dislike')+'-icon rw-hover"></i></div></div>';innerHtml+=_renderFooter();innerHtml+=_ri.renderNub();RW.Com.jsonp(RW._jsUrl('api/track.php'),{data:[{name:'event',value:'nero_report'}]});return innerHtml;},_renderReport=function()
{_e.innerHTML=_ri.isStar()?_renderStarReport():_renderNeroReport();_placeReport(_trigger);if(_ri.isThumb())
{var b=_ri.getBoostedValues();if(0===b.likes+b.dislikes)
return;_drawPieChart(RW._getFirstByTagName('svg',_e),[b.likes,b.dislikes],[{id:'green',stops:[['0%','#9AF87B'],['100%','#54d547']]},{id:'red',stops:[['0%','#FF7351'],['100%','#FF3200']]}]);}
_ri.getRating().setReady();},_close=function()
{if(RW._is(_e))
RW.hide(_e);},_closeTimer=function(e)
{if(RW._is(_timeout)||!RW.isVisible(_e))
return;_timeout=setTimeout(500);};var $={init:function()
{_e=doc.createElement('div');_e.style.display='none';_e.className='rw-ui-report';body.appendChild(_e);_e.onmouseover=function(e)
{if(null===_timeout)
return;clearTimeout(_timeout);_timeout=null;};RW.mouseOut(_e,_closeTimer);},open:function(ratingInstance,trigger)
{_e.onmouseover();if(!RW.isVisible(_e))
_setReport(ratingInstance,trigger);},close:function(rightNow)
{if(true===rightNow)
_close();else
_closeTimer();},_getCallback:function(result)
{var rating=RW.getRating(result.rating.urid);if(!RW._is(rating))
return;if(RW._isArray(rating.report))
return;rating.recommendations=result.recommendations;RW.Sponsored.append(result.sponsored);rating.report=[];if(_ri.isStar())
{for(var i=0,len=result.rating.report.length;i<len;i++)
rating.report.push({rate:parseFloat(result.rating.report[i].rate),votes:parseInt(result.rating.report[i].votes,10)});}
_renderReport();}};return $;}();RW.Trc=function()
{return{linkClick:function(a,data)
{data=RW._extandObj(data,{refUrl:encodeURIComponent(RW._isString(a)?a:a.href)});RW.Com.jsonp(RW._jsUrl('api/tracking/click.php'),{data:RW.Com.toNameValue(data)});},adClick:function(url)
{window.open(RW._url('/ad/click/')+'?url='+encodeURIComponent(url));},load:function(category,label,val)
{var data={category:category};if(undef!==label)
data.label=label;if(undef!==val)
data.val=val;RW.Com.jsonp(RW._jsUrl('api/tracking/load.php'),{data:RW.Com.toNameValue(data)});}};}();RW.TopRated={};RW.TopRated.Widget=function(elements,data)
{var
$=this,_groups=data.itemGroups,data=RW._extandObj(data,{title:{label:'',show:true,before:'',after:''},options:{align:'vertical',dir:'ltr',html:{before:'',after:''}},site:{id:0,domain:'',type:'NOT_SET'},itemGroups:[]}),_renderHeader=function()
{if(!data.title.show)
return'';var html='<div class="rw-ui-header">';before=(!data.title.before.isEmpty()?data.title.before:'<h3 class="rw-ui-content-recommendations-title">'),after=(!data.title.after.isEmpty()?data.title.after:(data.title.before.isEmpty()?'</h3>':''));html+=before+data.title.label+after+'</div>';return html;},_renderFooter=function(url)
{if(RW._isPremium())
return'';return'<div class="rw-ui-footer">'+_renderPoweredBy(url)+'</div>';},_renderPoweredBy=_render=function()
{var html=data.options.html.before+'<div class="rw-ui-content-recommendations rw-ui-control rw-dir-'+data.options.direction+'">\
    <div class="rw-ui-header">'+_renderHeader()+'</div>\
    <div class="rw-ui-content-recommendation-groups">';for(var i=0,len=_groups.length;i<len;i++)
        html+=(new RW.TopRated.Group(_groups[i],i)).render();html+='\
    </div>\
    '+_renderFooter('http://rating-widget.com/?s='+RW.site.type.toLowerCase()+'&w=toprated')+'\
</div>'+data.options.html.after;return html;};$.render=function()
{var html=_render(),rendered;for(var i=0;i<elements.length;i++)
{elements[i].innerHTML=html;rendered=RW._getFirstByClassName('rw-ui-content-recommendations','*',elements[i]);while(RW._is(elements[i].firstChild))
RW.insertBefore(elements[i].firstChild,elements[i]);RW.remove(elements[i]);elements[i]=rendered;RW.hide(rendered);}};$.postRender=function()
{RW.Trc.load('toprated',data.itemGroups[0].style);RW._foreach(elements,function(e){RW.show(e);if(RW._isPremium())
RW.remove(RW._getFirstByClassName('rw-ui-poweredby','*',e));});};var
_alternateInject=function(groupContainer,newGroup)
{var groupItems=RW._getByClassName('rw-ui-group-item','li',groupContainer),min_len=Math.min(groupItems.length,newGroup.count());for(var i=0;i<min_len;i++)
RW.insertAfter(newGroup.renderItem(i),groupItems[i]);},_extendGroup=function(group)
{var items=RW._cloneObj(group.items);for(var j=0,len_j=_groups.length;j<len_j;j++)
{if(_groups[j].type===group.type)
{group=RW._extandObj(group,_groups[j]);break;}}
for(var i=0,len_i=items.length;i<len_i;i++)
delete items[i].rating;group.items=items;return group;},_injectToExistingGroups=function(data)
{for(var i=0,len_i=data.itemGroups.length;i<len_i;i++)
{var groupContainer=RW._getFirstByAttr('data-type',data.itemGroups[i].type,'rw-ui-group');if(!RW._is(groupContainer))
continue;_extendGroup(data.itemGroups[i]);_alternateInject(groupContainer,new RW.TopRated.Group(data.itemGroups[i]));}};$.addItems=};RW.TopRated.Group=function(data,pos)
{var
$=this,_items=data.items,_renderAnchor=function(item,cell,className,elementType)
{return'<a class="'+className+'" href="'+item.page.url+'" title="'+item.page.title+'" onclick="RW.Trc.linkClick('+(RW._is(item.page.trackUrl)?'\''+item.page.trackUrl+'\'':'this')+', {category: \'toprated\', label: \''+data.type+'\', cell: '+cell+', elementType: \''+elementType+'\'}); return false;"'+((true===item.page.sponsored)?' target="_blank"':'')+'>';},_renderRating=function(item,extra)
{if(undef===item.rating)
return'';var c='rw-ui-container rw-class-'+item.rating.options.rclass+' rw-urid-'+item.rating.localID+' rw-prop-showLoader-false'+(undef===extra?'':' '+extra.join(' '));return'<div class="'+c+'" data-read-only="true" data-sync="false" data-size="small" data-show-loader="false"></div>';},_renderAdLabel=_renderThumb=function(item,withRating)
{var style='width: '+data.options.thumb.width+'px; height: '+data.options.thumb.height+'px;',html='<div class="rw-ui-thumb" style="'+style+'"><img src="'+item.page.img+'" style="'+style+'" alt="">';if(withRating&&undef!==item.rating)
    html+='<div class="rw-ui-rating" style="width: '+(data.options.thumb.width-4)+'px;">'+_renderRating(item,['rw-prop-showReport-false','rw-valign-bottom','rw-halign-center'])+'</div>';if(true===item.page.sponsored)
    html+=_renderAdLabel();html+='</div>';return html;},_renderItem=function(item,cell)
{var
s=item.page.title,html;html='<div class="rw-ui-content-recommendation">';switch(data.style)
    {case'compact_thumbs':html+=_renderAnchor(item,cell,'rw-ui-thumb-link','thumb')+_renderThumb(item)+'</a><div style="margin-left: '+(data.options.thumb.width+20)+'px; min-height: '+(data.options.thumb.height+8)+'px; display: inline-block; vertical-align: middle;">'+
        _renderAnchor(item,cell,'rw-ui-title','text')+s+'</a>'+_renderRating(item,['rw-prop-showInfo-false'])+'</div>';break;case'thumbs':html+=_renderAnchor(item,cell,'rw-ui-thumb-link','thumb')+_renderThumb(item,true)+'</a>'+
    _renderAnchor(item,cell,'rw-ui-title','text')+s+'</a>';break;case'legacy':default:html+=_renderAnchor(item,cell,'rw-ui-title','text')+s+'</a>'+_renderRating(item);break;}
    html+='</div>';return html;},_renderHeader=function()
{if(!data.showTitle)
return'';return'<div class="rw-ui-header">\
    <span class="rw-ui-group-title">'+data.title+':</span>\
</div>';},_renderFooter=_render=function()
{var html='<div class="rw-ui-group rw-style-'+data.style+'" data-type="'+data.type+'">\
    '+_renderHeader()+'\
    <ul class="rw-ui-group-items">';for(var i=0,len=_items.length;i<len;i++)
        html+='<li class="rw-ui-group-item">'+_renderItem(_items[i],i)+'</li>';html+='\
    </ul>\
    '+_renderFooter()+'\
</div>';return html;};$.count=$.renderItem=function(i)
{var li=document.createElement('li');RW._Class.set(li,'rw-ui-group-item');li.innerHTML=_renderItem(_items[i],i);return li;};$.render=_render;};RW.Color=function(undef)
{var
$=this,_breakHexRegex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;var _getCache,_cache=true,_rgba,_isRgbaSupported=function()
{if(undef===_rgba)
{var s=RW._getFirstByTagName('script'),c=s.style.color;try
{s.style.color='rgba(3,7,17,0.5)';}
catch(e){}
_rgba=(c!=s.style.color);s=c;}
return _rgba;},_cleanCache=var
_componentToHex=function(rgb)
{var hex=parseInt(rgb,10).toString(16);return hex.length==1?"0"+hex:hex;},_canonizeHex=function(hex)
{return((hex.length>4)?hex:'#'+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3]).toUpperCase();},_rgb2Hex=_hex2Rgb=function(hex)
{var result=_breakHexRegex.exec(hex);return result?[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)]:false;},_parseRgb=$.toRgba=function(color,alpha)
{if(!_isRgbaSupported())
return $.canonize(color);var rgb;color=color.toLowerCase();if(color.startsWith('rgb'))
{rgb=_parseRgb(color);}
else
{if(!color.startsWith('#'))
color='#'+color;rgb=_hex2Rgb(color);}
return'rgba('+rgb[0]+', '+rgb[1]+', '+rgb[2]+', '+alpha+')';};$.toHex=function(color)
{if(!color.startsWith('rgb'))
return color.toUpperCase();var rgb=_parseRgb(color);return _rgb2Hex(rgb[0],rgb[1],rgb[2]).toUpperCase();};$.canonize=function(color)
{return color.startsWith('#')?_canonizeHex(color):$.toHex(color);};return $;}();})();RW._startInit();var RW_HOOK_READY=RW_HOOK_READY||[];RW_HOOK_READY.push(function(){if(RW.isLocalhost())
return;if(!RW.isLocalhost())
{if(!RW._isMobile())
return;if(RW.visitor.device.os!=='android'||(RW.visitor.device.browser!=='chrome'&&RW.visitor.device.browser!=='safari'))
return;if(RW._is(RW._getById('browsi-js')))
return;}
var rating=RW.getPrimaryRating();if(false===rating)
return;var instance=rating.getFirstInstance();if(!instance.isStar())
return;if(!instance.options.mobile.showTrigger)
return;if(!RW.isLocalhost())
{if(!instance.showMobileUX())
return;if(rating.isRated)
return;}
RW.Com.asyncJS(RW._jsUrl('external/mobile.js'),{dailyCache:true});});var RW_HOOK_READY=RW_HOOK_READY||[];RW_HOOK_READY.push(function(){if(RW._is(window.vglnk))
return;if(RW._isPremium())
return;if('safe'!==RW.site.category)
return;window.vglnk={api_url:'//api.viglink.com/api',key:'f6c9fb1ffe086e69e7ff5c6a722caf4c'};var d=document,s=d.createElement('script'),r=d.getElementsByTagName('script')[0];s.type='text/javascript';s.async=true;s.src=(location.href.match(/^https/i)?window.vglnk.api_url:'//cdn.viglink.com/api')+'/vglnk.js';r.parentNode.insertBefore(s,r);});var RW_HOOK_READY=RW_HOOK_READY||[];RW_HOOK_READY.push(function(){if(!RW.isLocalhost())
{if('shopify'!==RW.site.type.toLowerCase())
return;}
var forms=RW._getByTagName('form'),cartForm,addToCart;for(var i=0,len=forms.length;i<len;i++)
{if('/cart/add'==forms[i].getAttribute("action"))
{cartForm=forms[i];break;}}
if(!RW._is(cartForm))
return;var inputs=RW._getByTagName('input',forms[i]);for(var j=0,len=inputs.length;j<len;j++)
{if('submit'===inputs[j].getAttribute("type"))
{addToCart=inputs[j];break;}}
if(!RW._is(addToCart))
return;RW.attachEvent(addToCart,'click',function(){var rated=false,ratings=RW.getRatings();for(var id in ratings)
{if(ratings[id].isRated)
{rated=true;break;}}
RW.Trc.load('shopify_add2cart',(rated?'true':'false'));});});