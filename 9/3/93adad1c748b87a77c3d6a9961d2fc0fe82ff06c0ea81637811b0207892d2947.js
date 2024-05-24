!this);((typeof window==="object"?window:this);!this,;/*!
* $script.js JS loader & dependency manager
* https://github.com/ded/script.js
* (c) Dustin Diaz 2014 | License MIT
*/(("$script",function(){e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=v.path=function(e){c=e},v.urlArgs=v.ready=v.done=v})
function getUrlParameters(url,name,decode){let search=location.search.substr(1);if(url){if(url.indexOf('?')===-1){search='';}else{search=url.substr(url.indexOf('?')+1);}}
const queryParams=search.split('&').reduce(function(obj,keyVal){if(keyVal===''){return{};}
let value=keyVal.split('=');if(value[1]===undefined){value[1]='';}
obj[value[0]]=decode?decodeURIComponent(value[1].replace(/\+/g,' ')):value[1];return obj;},{});return name?queryParams[name]:queryParams;}
function setAdmanCookie(name,value,options)
{if(document.cookie.length>8000){debug_log('Cookie error, name: '+name);return;}
options=Object.assign({SameSite:'Lax',},options||{});let expires=options.expires;if(typeof expires=="number"&&expires)
{let d=new Date();d.setTime(d.getTime()+expires*1000);expires=options.expires=d;}
if(expires&&expires.toUTCString)
options.expires=expires.toUTCString();if(options.domain){options.domain=options.domain.replace(/^www\./i,'');}
value=encodeURIComponent(value);let updatedCookie=name+"="+value;for(let propName in options)
{updatedCookie+="; "+propName;let propValue=options[propName];if(propValue!==true)
updatedCookie+="="+propValue;}
document.cookie=updatedCookie;}
function getAdmanCookie(name)
{var result=0;try{var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));if(matches)
result=decodeURIComponent(matches[1]);}catch(e){}
return result;}
function getAdmanCookieNullDefault(name)
{var result=null;try{var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));if(matches)
result=decodeURIComponent(matches[1]);}catch(e){}
return result;}
function clearAdmanCookie(name)
{setAdmanCookie(name,'',{expires:-1,path:'/',domain:location.hostname});}
function clearAdmanCookiesByRegexName(regexPattern){if(typeof regexPattern==='undefined'||typeof regexPattern.test!=='function'){return;}
let cookies=document.cookie.split(';');for(let i=0;i<cookies.length;i++){let cookie=cookies[i].trim();if(cookie){let cookieName=cookie.split('=')[0];if(cookieName&&regexPattern.test(cookieName)){clearAdmanCookie(cookieName);}}}}
function getDomainFromURL(url)
{var host_parser=document.createElement('a'),result='';try{if(url.match(/(http[s]*:)*\/\//)==null)
url='//'+url;}catch(e){}
try{host_parser.href=url;result=host_parser.hostname.replace(/^www./,'').toLowerCase();}catch(e){}
return result;}
function prepareUrlToFull(url)
{url=new URL(url,window.location.href);url=url.href;return prepareUrl(url);}
function is_debug_mode(){var e=!1;try{e="1"==getAdmanCookie("_debug")||"1"==getAdmanCookie("d")||window.location.href.indexOf("/ai-tst/")!=-1||'9000000000'=='9000000000'}catch(e){}return e}
function is_debug_mode_extended(){var e=!1;try{e="1"==getAdmanCookie("_debug_extended")||"1"==getAdmanCookie("de")}catch(e){}return e}
if(typeof debug_log!=='function'){if(is_debug_mode_extended()){let button_id='btn-log-id';let div_id='div-log-id';let cmd_id='cmd-id';if(!document.getElementById(div_id)){document.body.insertAdjacentHTML('afterbegin','<div id="'+div_id+'" style="height: calc(100vh - 27px); display: none; overflow: scroll;"></div>');}
if(!document.getElementById(button_id)){document.body.insertAdjacentHTML('afterbegin','<button id="'+button_id+'" style="font-size: 20px;">show log</button>');document.getElementById(button_id).addEventListener('click',function(){let div=document.getElementById(div_id);if(div.style.display==='none'){div.style.display='block';}else{div.style.display='none';}})}
if(!document.getElementById(cmd_id)){document.body.insertAdjacentHTML('afterbegin','<button id="'+cmd_id+'" style="font-size: 20px;">Run command</button>');document.getElementById(cmd_id).addEventListener('click',function(){let cmd=prompt();debug_log('cmd: '+cmd);let result;try{result=eval(cmd);}catch(e){result=e;}
debug_log(result);alert(result);});}
debug_log=function(e){try{let this_line=thisLine();document.getElementById(div_id).insertAdjacentHTML('afterbegin',`<pre style="white-space:pre-wrap;font-size:20px;
          border-bottom:2px solid black;"><span style="color:#009900;">${this_line}</span><br>${JSON.stringify(e,null,2)}</pre>`);console.debug('%c %s','color:#009900;',this_line,e);}catch(e){}}}else{debug_log=function(e,prefix){try{if(!is_debug_mode()){return;}
const consolePrepend=function(prefix){const CLASSIC_LOG_PATTERN=/(edge|xbox|msie|trident)/i;if(navigator&&navigator.userAgent&&CLASSIC_LOG_PATTERN.test(navigator.userAgent)){return prefix+':';}
return '%c'+prefix+'%c';};const consoleStyle='color: white; background-color: #00ACC1; padding:1px 3px; border-radius: 3px';prefix=(prefix||'');if(typeof e==='string'){console.log(`${consolePrepend(prefix)} %s\n   %c %s`,consoleStyle,'color:#009900',thisLine(),'font-weight:700',e);}else{console.log(`${consolePrepend(prefix)} %s\n   %c %o`,consoleStyle,'color:#009900',thisLine(),'font-weight:700',e);}}catch(e){}};}}
String.prototype.stripSlashes=document.currentScript=document.currentScript||(();function thisLine(){try{throw new Error();}catch(e){let line=e.stack.split("\n")[3];if(typeof line==='string'){line=line.trim();}
return line;}}
function checkForceIgnoreClassForNode(node,force_class_list,ignore_class_list){try{if(force_class_list.length>0&&isParentsContainsClass(node,force_class_list)){return true;}
if(ignore_class_list.length===0){return true;}
return!isParentsContainsClass(node,ignore_class_list);}catch(e){}
return false;}
function isParentsContainsClass(node,class_list)
{if(!node||!class_list){debug_log({title:'isParentsContainsClass error!',node:node,class_list:class_list});return false;}
else{let classes=class_list.split(' ').filter(class_name=>class_name.length>0&&node.closest('.'+class_name));return classes.length>0;}}
function in_referrer_websites(site,data,window_location_href)
{if(window_location_href.length==0)
window_location_href=window.location.href;var result=false;var current_domain=getDomainFromURL(window_location_href);site=getDomainFromURL(site);if(site.length==0)
return false;try{for(var i in data)
{if(data[i].source_domains.indexOf(current_domain)==-1)
continue;if(data[i].referrer_domains.indexOf(site)!==-1)
{result=true;break;}}}catch(e){}
return result;}
function adblockUrlWrapper(url)
{if(isAdblock())
url=url.replace(/\&d\=0/,'&d=1');return url;}
function isAdblock()
{if(window.adblock_detected==undefined)
{var adblock_detected=false;try{var testDomEl=document.createElement('iframe'),randomNum=Math.floor(Math.random()*(10000-123+1))+123,protocol=window.location.protocol,id='adsbox_ex_'+randomNum;testDomEl.setAttribute('height',"1px");testDomEl.setAttribute('width',"1px");testDomEl.setAttribute('id',id);testDomEl.setAttribute('class','adsBox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links banner ad-footer ad ads');testDomEl.setAttribute('style',"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; box-sizing: content-box !important; border-width: 0px !important;");var testScript=document.createElement('script');testScript.src=protocol+"//ads.exoclick.com/ads.js";document.body.appendChild(testDomEl);document.head.appendChild(testScript);if(testDomEl.style.display==="none"||testDomEl.style.display==="hidden"||testDomEl.style.visibility==="hidden"||testDomEl.offsetParent===null||testDomEl.offsetHeight===0||testDomEl.offsetLeft===0||testDomEl.offsetTop===0||testDomEl.offsetWidth===0||testDomEl.clientHeight===0||testDomEl.clientWidth===0){adblock_detected=true;}
document.body.removeChild(testDomEl);document.head.removeChild(testScript);window.adblock_detected=adblock_detected;}catch(c){}}
return window.adblock_detected?true:false;}
function intersectArrays(array1,array2){return array1.filter(;}
(function(window,undefined){"use strict";var RefDetector=function(identy,cookie_caption,referrer_capped){if(!(this instanceof RefDetector)){return new RefDetector(identy,cookie_caption,referrer_capped);}
this.clearPageCounterCookie=function(){clearAdmanCookie('__ctr_'+this.identy+'_pgs');clearAdmanCookie('__ctr_'+this.identy+'_mrk');clearAdmanCookie('__ctr_'+this.identy+'_mrk_shifted');clearAdmanCookie(this.identy+'_nc');clearAdmanCookie('__ctrp_'+this.identy+'_page_clicked');clearAdmanCookie('__ctrp_'+this.identy+'_pages_potential');};this.set_params=this.check_by_cookie=function(referral_data){return getAdmanCookie(this.cookie_key)!=null&&getAdmanCookie(this.cookie_key)!=0&&(referral_data.referral_key==getAdmanCookie(this.cookie_key)||this.in_referrer_domains(getAdmanCookie(this.cookie_key),referral_data.referral_domains_data,this.window_location_href))};this.check_by_url=function(referral_data){var ref_dom_data=this.get_ref_data_for_current_domain(referral_data.referral_domains_data);var count_from_list_only=0;if(ref_dom_data!==null){count_from_list_only=ref_dom_data.count_from_list_only;}
return this.referrer_site.length>0&&referral_data.referral_key!=''&&this.window_location_href.indexOf(referral_data.referral_key)!==-1&&(count_from_list_only===0||ref_dom_data.default_domains.indexOf(this.referrer_site)!==-1);};this.check_by_site=function(referral_data){return this.referrer_site.length>0&&this.in_referrer_domains(this.referrer_site,referral_data.referral_domains_data);};this.in_referrer_domains=function(site,data){var result=false;if(site.length===0)
return false;try{for(var i in data)
{if(data[i].source_domains.indexOf(this.current_domain)===-1){continue;}
if(data[i].referral_websites_use_defaults){if(data[i].default_domains.indexOf(site)!==-1)
{result=true;break;}}else{if(data[i].referrer_domains.indexOf(site)!==-1)
{result=true;break;}}}}catch(e){}
return result;};this.get_ref_data_for_current_domain=function(data){var result=null;try{for(var i in data){if(data[i].source_domains.indexOf(this.current_domain)!==-1){result=data[i];break;}}}catch(e){}
return result;};this.save_cookie=function(referral_key){var cookie_value=getAdmanCookieNullDefault(this.cookie_key);if(cookie_value===null||cookie_value.length==0){if(this.referrer_site&&!(referral_key!=''&&this.window_location_href.indexOf(referral_key)!==-1)){setAdmanCookie(this.cookie_key,this.referrer_site,{expires:this.referrer_capped,path:'/',domain:location.hostname});}
else{setAdmanCookie(this.cookie_key,referral_key,{expires:this.referrer_capped,path:'/',domain:location.hostname});}}};this.check_reset_clicks_counter=function(){let referrer_site=getDomainFromURL(document.referrer);if((referrer_site!=''&&referrer_site!=this.current_domain)){this.clearPageCounterCookie();}};this.apply_one_key=function(VR_PARAMS_VR,key,referral_data){VR_PARAMS_VR[key.replace('VAR_','VR_').replace('_VAR','_VR')]=referral_data[key];};this.check_referral=function(VR_PARAMS_VR,VR_REFERRALS_PARAMS_VR){for(var i=0;i<VR_REFERRALS_PARAMS_VR.length;i++){try{var referral_data=VR_REFERRALS_PARAMS_VR[i];var referrer_applied_by_cookie=false,referrer_applied_by_url=false,referrer_applied_by_site=false;if((referrer_applied_by_cookie=this.check_by_cookie(referral_data))||(referrer_applied_by_url=this.check_by_url(referral_data))||(referrer_applied_by_site=this.check_by_site(referral_data))){if(referral_data.referral_sites.indexOf(this.current_domain)==-1){continue;}
else{if(referral_data.referral_sites_version[this.current_domain]&&referral_data.referral_sites_version[this.current_domain]!=='all'){if((this.ignore_site_version_check_cookie||!getAdmanCookie('__force_sv'))&&((referral_data.referral_sites_version[this.current_domain]=='desktop'&&!this.is_desktop)||(referral_data.referral_sites_version[this.current_domain]=='mobile'&&this.is_desktop)))
{continue;}}}
if(referral_data.enable_mobile!==undefined&&referral_data.enable_desktop!==undefined&&referral_data.enable_tablet!==undefined)
{if(!(referral_data.enable_mobile=='1'&&referral_data.enable_desktop=='1'&&referral_data.enable_tablet=='1')){if((this.device_type=='desktop'&&referral_data.enable_desktop!='1')||(this.device_type=='mobile'&&referral_data.enable_mobile!='1')||(this.device_type=='tablet'&&referral_data.enable_tablet!='1'))
{debug_log(this.cookie_caption+', REF: '+referral_data.referral_key+' decline by device policy. ('+device_type+')');continue;}}}
if(referral_data.referral_enabled==1){for(var key in referral_data)
{try{if(referral_data.hasOwnProperty(key)){this.apply_one_key(VR_PARAMS_VR,key,referral_data);if(key.substr(-11)==='_CAPPED_VAR'&&!isNaN(parseInt(referral_data[key]))){this.referrer_capped=parseInt(referral_data[key]);}}}catch(e){}}}
else{this.referrer_enabled=false;}
this.save_cookie(referral_data.referral_key);if(Boolean(referral_data.reset_clicks_counter)===true){this.check_reset_clicks_counter();}
this.referrer_applied=true;debug_log({title:this.cookie_caption+' выбран реферал',by:{cookie:referrer_applied_by_cookie,url:referrer_applied_by_url,site:referrer_applied_by_site},data:referral_data},this.identy.toUpperCase());break;}}catch(e){}}
debug_log({title:this.cookie_caption+' результат определения реферала',referrer_applied:this.referrer_applied,final_data:VR_PARAMS_VR});};this.readSystemCookie=function(){try{if(getAdmanCookie('_ref_main')==1&&md5(prepareUrl(window.location.href))!=getAdmanCookie('_ref_main-current_href_md5'))
{this.window_location_href=getAdmanCookie('_ref_main-current_href');this.referrer_site=getDomainFromURL(getAdmanCookie('_ref_main-referrer_site'));}else{if((this.referrer_site=getDomainFromURL(this.referrer_site)).length>0)
{if(isEqualDomains(this.referrer_site,window.location.href))
this.referrer_site='';}}}catch(e){}};this.setIgnoreSiteVersionCheckCookie=function(ignore_site_version_check_cookie){this.ignore_site_version_check_cookie=ignore_site_version_check_cookie;};this.referrer_applied=false;this.referrer_enabled=true;this.identy=identy;this.cookie_key='__ref-'+identy;this.cookie_caption=cookie_caption;this.referrer_capped=referrer_capped;this.is_desktop=true;this.device_type='desktop';this.referrer_site=document.referrer;this.window_location_href=window.location.href;this.readSystemCookie();this.current_domain=getDomainFromURL(this.window_location_href);this.ignore_site_version_check_cookie=true;return this;};if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=RefDetector;}
exports.ReferralDetector=RefDetector;}else{if(typeof define==='function'&&define.amd){define("ref-detector-js",[],function(){return RefDetector;})}else{window.RefDetector=RefDetector;}}})(typeof window==="object"?window:this);(function(window,undefined){"use strict";var PageCounter=function(identy,capp_seconds){if(!(this instanceof PageCounter)){return new PageCounter(identy,capp_seconds);}
this.identy=identy;this.capp_seconds=capp_seconds;this.clicks='';this.fire_on_marked=false;this.init=function(){try{let current_page_hashe;if(this.getInitiedPages().indexOf((current_page_hashe=this.getUrlHashe(this.getCurrentPage())))===-1)
{this.addInitiedPage(current_page_hashe);}}catch(e){}};this.setCappSeconds=function(seconds){this.capp_seconds=parseInt(seconds);return this;};this.setClicks=function(clicks_string){this.clicks=clicks_string;return this;};this.setFireOnMarked=function(bool){this.fire_on_marked=bool;return this;};this.resetPgsToMarked=function(){let value='',val;if((val=getAdmanCookie('__ctr_'+this.identy+'_mrk'))!=0&&val.length>0)
value=val;setAdmanCookie('__ctr_'+this.identy+'_pgs',value,{expires:this.capp_seconds,path:'/',domain:location.hdPages().indexOf(this.getUrlHashe(url))};this.isAllowFireOnThisPage=function(){let allow_fire=true;try{let clicks=this.clicks.replace(/\s/g,'').split(',');if(clicks.length)
{if(clicks.indexOf((this.getCurrentPageIndex()+1).toString())===-1)
allow_fire=false;}}catch(e){}
try{if(this.fire_on_marked==false&&this.isMarkedCurrentPage())
allow_fire=false;}catch(e){}
return allow_fire;};this.isMarkedPage=function(url){return this.getMarkedPages().indexOf(this.getUrlHashe(this.prepareUrl(url)))!==-1;};this.isMarkedCurrentPage=function(){return this.isMarkedPage(this.getChis.getUrlIndex(this this.prepareUrl);url=url.replace(/\/$/,'');return url;};this.getUrlHashe=function(url){return md5(url);};this.getMarkedPages=function(){let pages=new Array(),data;try{if((data=getAdmanCookie('__ctr_'+this.identy+'_mrk')).length>0)
pages=data.split(',');}catch(e){}
return pages;};this.getMarkedPagesShifted=function(){let pages=new Array();try{pages=getAdmanCookie('__ctr_'+this.identy+'_mrk_shifted').split(',');}catch(e){}
return pages;};this.getInitiedPages=function(){let pages=new Array(),data;try{if((data=getAdmanCookie('__ctr_'+this.identy+'_pgs')).length>0)
pages=data.split(',');}catch(e){}
return pages;};this.markCurrentPage=function(){this.markPage(this.getUrlHashe(this.getCurreis.getUrlHashe(this.getCurrentPage()));};this.markPage=function(hash){if(getAdmanCookie(this.identy+'_nc'))
return this;let pages=this.getMarkedPages(),last_page=Math.max.apply(Math,this.clicks.replace(/\s/g,'').split(','));if(pages.indexOf(hash)==-1)
{pages.push(hash);setAdmanCookie('__ctr_'+this.identy+'_mrk',pages.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});if(pages.length>=last_page){setAdmanCookie(this.identy+'_nc',1,{expires:this.capp_seconds,path:'/',domain:location.hostname});}}
return this;};this.markPageShifted=function(hash){let pages=this.getMarkedPagesShifted();pages.push(hash);setAdmanCookie('__ctr_'+this.identy+'_mrk_shifted',pages.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});return this;};this.addInitiedPage=function(hash){if(getAdmanCookie(this.identy+'_nc'))
return this;let pages=this.getInitiedPages();pages.push(hash);setAdmanCookie('__ctr_'+this.identy+'_pgs',pages.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});return this;};this.init();return this;};if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=PageCounter;}
exports.PageCounter=PageCounter;}else{if(typeof define==='function'&&define.amd){define("page-counter-js",[],function(){return PageCounter;})}else{window.PageCounter=PageCounter;}}})(typeof window==="object"?window:this);(function(window,undefined){"use strict";var PageClickCounter=function(identy,capp_seconds){if(!(this instanceof PageClickCounter)){return new PageClickCounter(identy,capp_seconds);}
this.identy=identy;this.capp_seconds=capp_seconds;this.clickit=function(identy){_seconds=parseI{this.clicks=clicks_string;return this;};this.addPageToPotential=function(url){let full_url=prepareUrlToFull(url);let hash=this.getUrlHashe(full_url);if(full_url==prepareUrlToFull(window.location.href))
{debug_log({title:this.identy+'. Не можем добавить в потенциальные, так как ссылка совпадает с текущей страницей.',url:full_url,hash:hash});return this;}
debug_log({title:this.identy+'. Добавляем в потенциальные страницы.',url:full_url,hash:hash});let pages=this.getPotentialPages();if(pages.indexOf(hash)===-1)
{pages.push(hash);pages=pages.slice(Math.max(pages.length-64,0));setAdmanCookie('__ctrp_'+this.identy+'_pages_potential',pages.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});}
return this;};this.addPageToClicked=function(url){let full_url=prepareUrlToFull(url);let hash=this.getUrlHashe(full_url);if(full_url==prepareUrlToFull(window.location.href))
{debug_log({title:this.identy+'. Не можем добавить в кликнутые, так как ссылка совпадает с текущей страницей.',url:full_url,hash:hash});return this;}
debug_log({title:this.identy+'. Добавляем в кликнутые страницы.',url:full_url,hash:hash});let pages=this.getClickedPages();if(pages.indexOf(hash)===-1)
{pages.push(hash);pages=pages.slice(Math.max(pages.length-64,0));setAdmanCookie('__ctrp_'+this.identy+'_pages_clicked',pages.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});}
return this;};this.removePageFromPotential=function(url){let full_url=prepareUrlToFull(url);let hash=this.getUrlHashe(full_url);debug_log({title:this.identy+'. Удаляем из потенциальных страницы.',url:full_url,hash:hash});let pages=this.getPotentialPages();if(pages.indexOf(hash)!==-1)
{pages[pages.indexOf(hash)]='0';setAdmanCookie('__ctrp_'+this.identy+'_pages_potential',pages.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});}
return this;};this.getPotentialPages=function(){let pages=new Array();try{pages=getAdmanCoes_potential').split=function(){let pages=new Array();try{pages=getAdmanCookie('__ctrp_'+this.identy+'_pages_clicked').split(',');}catch(e){}
return pages;};this.getUrlHashe=function(url){return md5(url);};this.getCurrentPage=function(){return prepareUrl(window.location.href);};this.isPotentialPage=function(url){return-1!==this.getPotentialPages().indexOf(this.getUrlHashe(prepareUrlToFull(url)));};this.isClickedPage=function(url){return-1!==this.getClickedPages().indexOf(this.getUrlHashe(prepareUrlToFull(url)));};this.getClickedIndexes=function(){let pages=new Array();try{pages=getAdmanCookie('__ctrp_'+this.identy+'_page_clicked').split(',');}catch(e){}
return pages;};this.addClickedIndex=function(){debug_log({title:this.identy+'. Добавляем +1 ClickedIndex.'});let indexes=this.getClickedIndexes();let current_index=this.getCurrentClickIndex();if(current_index<=64)
{indexes.push(current_index);setAdmanCookie('__ctrp_'+this.identy+'_page_clicked',indexes.join(','),{expires:this.capp_seconds,path:'/',domain:location.hostname});}
return this;};this.getCurrentClickIndex=function(){let indexes=this.getClickedIndexes();return parseInt((indexes.length?indexes[indexes.length-1]:0))+1;};this.isClickActive=function(index){if(index==undefined)
index=this.getCurrentClickIndex();let is_active=true;try{let clicks=this.clicks.replace(/\s/g,'').split(',');if(clicks.length)
{if(clicks.indexOf((index).toString())===-1)
is_active=false;}}catch(e){}
return is_act!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=Pagefine==='function'&&define.amd){define("page-click-counter-js",[],function(){return PageClickCounter;})}else{window.PageClickCounter=PageClickCounter;}}})(typeof window==="object"?window:this);function is_secure_protocol(){return window.location.protocol==='https:';}
function getIsDesktop(){if(ADMAN_INFO&&ADMAN_INFO.device&&ADMAN_INFO.device.is_mobile){return!ADMAN_INFO.device.is_mobile;}
if(typeof is_desktop!=='undefined'){return is_desktop;}
window.is_desktop=true;try{let parser_result=UAParser();window.is_desktop=!(parser_result.device.type=='mobile'||parser_result.device.type=='tablet');}catch(e){}
if(ADMAN_INFO.device){ADMAN_INFO.device.is_mobile=!is_desktop;}else{ADMAN_INFO.device={is_mobile:!is_desktop};}
return is_desktop;}
function getDeviceType(){if(ADMAN_INFO&&ADMAN_INFO.device&&ADMAN_INFO.device.type){return ADMAN_INFO.device.type;}
if(typeof device_type!=='undefined'){return device_type;}
window.device_type='desktop';try{let parser_result=UAParser();if(parser_result.device.type){if(parser_result.device.type=='mobile'){window.device_type='mobile';}else if(parser_result.device.type=='tablet'){window.device_type='tablet';}}}catch(e){}
if(ADMAN_INFO.device){ADMAN_INFO.device.type=window.device_type;}else{ADMAN_INFO.device={type:window.device_type};}
return window.device_type;}
function getBrowserName(){if(ADMAN_INFO&&ADMAN_INFO.device&&ADMAN_INFO.device.browser){return ADMAN_INFO.device.browser;}
if(typeof browser_name!=='undefined'){return browser_name;}
window.browser_name='other';try{let parser_result=UAParser();let parser_browser=parser_result.browser.name;if(/Chrome/.test(parser_browser)){window.browser_name='chrome';}else if(/Safari/.test(parser_browser)){window.browser_name='safari';}}catch(e){}
if(ADMAN_INFO.device){ADMAN_INFO.device.browser=window.browser_name;}else{ADMAN_INFO.device={browser:window.browser_name};}
return window.browser_name;}
function getSpotCodeBySpotGroupName(allSpots,spotGroupName,needIsMobile){if(!spotGroupName){return null;}
if(!allSpots||allSpots.length===0){return null;}
let parts;if((parts=spotGroupName.match(/^([A-Z0-9_]+)(m?)-(.+)$/))===null){return null;}
const desktopName=parts[1]+'-'+parts[3],mobileName=parts[1]+'m-'+parts[3];let name;if(allSpots.hasOwnProperty((name=(needIsMobile?mobileName:desktopName)))){return name;}else if(allSpots.hasOwnProperty((name=(needIsMobile?desktopName:mobileName)))){return name;}
return null;}
function ajax(option)
{if(typeof(option.url)=='undefined'){try{option.url=location.href;}catch(e){var ajaxLocation;ajaxLocation=document.createElement('a');ajaxLocation.href='';option.url=ajaxLocation.href;}}
if(typeof(option.type)=='undefined'){option.type='GET';}
if(typeof(option.data)=='undefined'){option.data='';}else{var data='';for(var x in option.data){if(data!=''){data+='&';}
data+=encodeURIComponent(x)+'='+encodeURIComponent(option.data[x]);};option.data=data;}
if(typeof(option.statusCode)=='undefined'){option.statusCode={};}
ion.beforeSend)=='undefined'){option.beforeSend=function(){};}
if(typeof(option.success)=='undefined'){option.success=function(){};}
if(typeof(option.error)=='undefined'){option.error=function(){};}
if(typeof(option.complete)=='undefined'){option.complete=function(){};}
typeof(option.statusCode['404']);var xhr=null;if(window.XMLHttpRequest||window.ActiveXObject){if(window.ActiveXObject){try{xhr=new ActiveXObject('Msxml2.XMLHTTP');}catch(e){xhr=new ActiveXObject('Microsoft.XMLHTTP');}}
else{xhr=new XMLHttpRequest();}}else{try{console.debug('ajax error');}catch(e){}return null;}
xhr.onreadystatechange=function(){if(xhr.readyState==1){option.beforeSend();}
if(xhr.readyState==4){option.complete(xhr,xhr.status);if(xhr.status==200||xhr.status==0){option.success(xhr.responseText);}else{option.error(xhr.status);if(typeof(option.statusCode[xhr.status])!='undefined'){option.statusCode[xhr.status]();}}}};if(option.type=='POST'){xhr.open(option.type,option.url,true);xhr.setRequestHeader('Content-Type','application/x-www-form-urlencodedata,true);xhr.send(null);}}
(function(window,undefined){"use strict";window.AdmanSubIdDetector=function(){if(!(this instanceof AdmanSubIdDetector)){return new AdmanSubIdDetector();}
function prepareReferrerCode(code){return code.replace(/[^\w\d\-\(\)@\.\%\*]+/i,'');}
function detectSubId(){let _current_href=window.location.href;let _referrer_site=getDomainFromURL(document.referrer);if(_referrer_site.length===0||(_referrer_site===getDomainFromURL(_current_href))){return getSubId();}
let _custom_href=getAdmanCookieNullDefault(SUB_ID.CUSTOM_REF_COOKIE);if(_custom_href){_current_href=_custom_href;}
const _sub_id_identifier_value=getUrlParameters(_current_href,sub_id_identifier,true);let _sub_id_source=(_sub_id_identifier_value&&_sub_id_identifier_value!==''&&(SUB_ID.COUNT_FROM_LIST_ONLY===false||SUB_ID.DOMAINS.indexOf(_referrer_site)!==-1))?_sub_id_identifier_value:NOREF;let _sub_id_source_illegal_domain='';if(_sub_id_source===NOREF&&_referrer_site.length){if(SUB_ID.DOMAINS.indexOf(_referrer_site)!==-1){_sub_id_source=_referrer_site;}else{_sub_id_source_illegal_domain=_referrer_site;}}
_sub_id_source=prepareReferrerCode(_sub_id_source);_sub_id_source_illegal_domain=prepareReferrerCode(_sub_id_source_illegal_domain);let _changeSubId=(sub_id_source!==_sub_id_source||sub_id_source_illegal_domain!==_sub_id_source_illegal_domain);if(_changeSubId||referrer_site!==_referrer_site||current_href!==_current_href){sub_id_source=_sub_id_source;sub_id_source_illegal_domain=_sub_id_source_illegal_domain;referrer_site=_referrer_site;current_href=_current_href;updateSubIdCookie();updateSystemCookie();if(_changeSubId){fireChangeSubIdEvent(getSubId());}}
return getSubId();}
function updateSubIdCookie(){if((SUB_ID.EXCLUSIONS[sub_id_source]===undefined||SUB_ID.EXCLUSIONS[sub_id_source]==='1')){setAdmanCookie(SUBID_COOKIE_NAME,sub_id_source,{expires:SUB_ID.CAPPED,path:'/',domain:location.hostKIE_NAME,sub_id_source_illegal_domain,{expires:SUB_ID.CAPPED,path:'/',domain:location.hostname});}else{clearAdmanCookie(ILLEGAL_SUBID_COOKIE_NAME);}}}
function getSubId(){return{sub_id_source:sub_id_source,sub_id_source_illegal_domain:sub_id_source_illegal_domain,};}
function updateSystemCookie(){setAdmanCookie('_ref_main-current_href',current_href,{expires:SUB_ID.CAPPED,path:'/',domain:location.hostname});setAdmanCookie('_ref_main-current_href_md5',md5(prepareUrl(current_href)),{expires:SUB_ID.CAPPED,path:'/',domain:location.hostname});setAdmanCookie('_ref_main-referrer_site',referrer_site,{expires:SUB_ID.CAPPED,path:'/',domain:location.hostname});setAdmanCookie('_ref_main',1,{expires:SUB_ID.CAPPEtname});debug_log({title:'Централизированная система детекта рефов, обновление данных.',current_href:current_href,referrer_site:referrer_site,})}
function fireChangeSubIdEvent(data){const callbacks=callbackList.slice(0);callbacks.forEach((callback)=>{callback(data);});}
const NOREF='noref';const SUBID_COOKIE_NAME='__ref_sub_id';const ILLEGAL_SUBID_COOKIE_NAME='__ref_sub_id_illegal';const sub_id_identifier=SUB_ID.IDENTIFIER?SUB_ID.IDENTIFIER:SUB_ID.IDENTIFIER_IN_SITE;let current_href='';let referrer_site='';let sub_id_source=NOREF;let sub_id_source_illegal_domain='';const callbackList=[];sub_id_source=getAdmanCookieNullDefault(SUBID_COOKIE_NAME);if(sub_id_source===null){sub_id_source=NOREF;}
sub_id_source_illegal_domain=getAdmanCookieNullDefault(ILLEGAL_SUBID_COOKIE_NAME);if(sub_id_source_illegal_domain===null){sub_id_source_illegal_domain='';}
referrer_site=getAdmanCookieNullDefault('_ref_main-referrer_site');if(referrer_site===null){referrer_site=getDomainFromURL(document.referrer);current_href=window.location.href;if(referrer_site.length&&(referrer_site===getDoetectSubId,addChangeSubIdEventListener:function(handler){if(typeof handler!=='function'){return;}
const index=callbackList.indexOf(handler);if(index===-1){callbackList.push(handler);}},removeChangeSubIdEventListener:function(handler){const index=callbackList.indexOf(handler);if(index>-1){callbackList.splice(index,1);}},}};})(typeof window==="object"?window:this);var SUB_ID=SUB_ID||{CAPPED:+'86400',IDENTIFIER:'',IDENTIFIER_IN_SITE:'utm_source',CUSTOM_REF_COOKIE:'',EXCLUSIONS:JSON.parse('[]'),DOMAINS:JSON.parse('[]'),COUNT_FROM_LIST_ONLY:(parseInt('0',10)===1),};if(typeof ADMAN_INFO==='undefined'){var ADMAN_INFO={spots:{}};}
ADMAN_INFO.script_add_folder='/ai/';try{if(ADMAN_INFO.SubIdDetector===undefined){ADMAN_INFO.SubIdDetector=new AdmanSubIdDetector();ADMAN_INFO.SubIdDetector.addChangeSubIdEventListener(function(data){ADMAN_INFO.changedSubId=true;clearAdmanCookiesByRegexName(/^__ctr_.+_closed$/);clearAdmanCookiesByRegexName(/^__ctr_.+_mrk$/);clearAdmanCookiesByRegexName(/^__ctr_.+_pgs$/);clearAdmanCookiesByRegexName(/^__ctr_.+_mrk_shifted$/);clearAdmanCookiesByRegexName(/_nc$/);clearAdmanCookiesByRegexName(/^__ctrp_.+_page_clicked$/);clearAdmanCookiesByRegexName(/^__ctrp_.+_pages_clicked$/);clearAdmanCookiesByRegexName(/^__ctrp_.+_pages_potential$/);clearAdmanCookiesByRegexName(new RegExp('^__clfltd-'));let prerollCode=getAdmanCookieNullDefault('preroll-code');if(prerollCode){clearAdmanCookie(prerollCode.toLowerCase()+'-capped');clearAdmanCookie(prerollCode.toLowerCase()+'-allow');}
let postrollCode=getAdmanCookieNullDefault('postroll-code');if(postrollCode){clearAdmanCookie(postrollCode.toLowerCase()+'-capped');clearAdmanCookie(postrollCode.toLowerCase()+'-allow');}
let interstitialCode=getAdmanCookieNullDefault('intt-code');if(interstitialCode){clearAdmanCookie(interstitialCode.toLowerCase()+'-capped');clearAdmanCookie(interstitialCode.toLowerCase()+'-allow');}
let poststtCode=getAdmanCookieNullDefault('__spot_code-poststitial');if(poststtCode){poststtCode=poststtCode.replace('--IMAG-SBID','');clearAdmanCookie(poststtCode.toLowerCase()+'-capped');clearAdmanCookie(poststtCode.toLowerCase()+'-allow');}
clearAdmanCookiesByRegexName(/^__spot_code-/);clearAdmanCookiesByRegexName(/^__capped_/);clearAdmanCookiesByRegexName(/^__ccid_/);clearAdmanCookiesByRegexName(/^__ref-/);['force_popunder_is_fired','pop_click_counter','__pup','__temp_ref_sub_id','__referrer_only','__ctr_poststt_disabled','__play_preroll','__preroll_disabled','preroll-clicks','preroll-last-click','preroll-current-click','preroll-code','__postroll_disabled','postroll-clicks','postroll-last-click','postroll-current-click','postroll-code','__adheID',].forEach(clearAdmanCookie);['pTMp0',].forEach(function(name){let secure=(location.protocol.startsWith('https')?'secure=1':'');document.cookie=`${name}=; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; `+secure;});if(localStorage&&localStorage['pTMpLastPopAt']){localStorage.removeItem('pTMpLastPopAt');}
if(localStorage&&localStorage['pTMpCount']){localStorage.removeItem('pTMpCount');}});ADMAN_INFO.sub_id=ADMAN_INFO.SubIdDetector.detect();}}catch(e){debug_log(e)}
function escapeKeywordsString(inputString,isUrl){isUrl=isUrl||0;if(isUrl){return encodeURIComponent(inputString).replace(/'/g,'%27').replace(/%2C/g,',');}
return inputString.replace(/\\/g,"%5C").replace(/'/g,"%27").replace(/"/g,"%22").replace(/`/g,"%60").replace(/&/g,"%26");}
var ADMAN_INFO=ADMAN_INFO||{};var SUB_ID=SUB_ID||{CAPPED:+'86400'};try{const parser_result=UAParser();let browser_name='other';if(parser_result.browser.name){if(/Chrome/i.test(parser_result.browser.name)){browser_name='chrome';}else if(/Safari/i.test(parser_result.browser.name)){browser_name='safari';}}
let os_name='other';if(parser_result.os.name){if(/Mac/i.test(parser_result.os.name)){os_name='mac';}else if(/Windows/i.test(parser_result.os.name)){os_name='windows';}else if(/Android/i.test(parser_result.os.name)){os_name='android';}else if(/iOS/i.test(parser_result.os.name)){os_name='ios';}}
let device_type='desktop';if(parser_result.device.type){if(parser_result.device.type=='mobile'){device_type='mobile';}else if(parser_result.device.type=='tablet'){device_type='tablet';}}
let network_type='other';if(navigator.connection&&navigator.connection.effectiveType){network_type=navigator.connection.effectiveType;}
ADMAN_INFO.device={browser:browser_name,os:os_name,type:device_type,is_mobile:(device_type=='mobile'||device_type=='tablet'),network:network_type,};setAdmanCookie('__device_info',JSON.stringify(ADMAN_INFO.device),{expires:SUB_ID.CAPPED,path:'/',domain:location.hostname});}catch(e){debug_log(e)}
try{let page_meta={};page_meta.domain=location.host;page_meta.title=parent.document.title;let metas=parent.document.getElementsByTagName('meta');for(let i=0;i<metas.length;i++)
{if(metas[i].name&&metas[i].getAttribute('content'))
{page_meta[metas[i].name.toLowerCase()]=metas[i].getAttribute('content');}
if(metas[i].getAttribute('property')&&metas[i].getAttribute('content'))
{page_meta[metas[i].getAttribute('property')]=metas[i].getAttribute('content');}}
setAdmanCookie('__page_meta',JSON.stringify(page_meta),{expires:SUB_ID.CAPPED,path:'/',domain:location.hostname});ADMAN_INFO.page_meta=parent.window.page_meta=page_meta;}catch(e){debug_log(e)}