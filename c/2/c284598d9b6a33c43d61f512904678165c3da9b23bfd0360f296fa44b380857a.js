var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:decode:_utf8_encode:_utf8_decode:;!this);var biads={ipp_group_id:0,original_domain:'bigclick.me',url:'http://15.xcvgdf.party',history_key:'bc_t_history',teaser_class:'vpstsr',ipp_class:'vpsipp',synced_teasers:{},view_interval:-1,update_interval:-1,is_wap:!1,is_wap_alt:!1,is_cli_cap_created:!1,is_cli_function_created:!1,is_cli_update_allowed:!0,last_cli_url_init:'',last_cli_bid_init:0,fingerprint_hash:'',fingerprint_json:'',storage:null,data_last:[],cnt_cf:'XX',initTeasers:function()
{if(typeof Fingerprint2!=='undefined')
{biads.initFingerprint()}
else{if(window.requestIdleCallback){requestIdleCallback(biads.initTeasers)}else{setTimeout(biads.initTeasers,333)}
return}
biads.initStorage();biads.initHistory();clearInterval(biads.view_interval);clearInterval(biads.update_interval);biads.view_interval=setInterval(biads.syncTeaserViews,1000);biads.update_interval=setInterval(biads.loadTeasers,90*1000);biads.loadTeasers();biads.rememberYandexVisit();window.addEventListener('resize',},initFingerprint:function()
{Fingerprint2.get({excludes:{deviceMemory:!0}},function(components)
{biads.fingerprint_hash=Fingerprint2.x64hash128(components.map(.join(),31);var fingerprint_object={};for(var i=0;i<components.length;i++)
{var key=components[i].key;if(key!=='canvas'&&key!=='webgl')
{fingerprint_object[key]=components[i].value}}
biads.fingerprint_json=JSON.stringify(fingerprint_object)})},rememberYandexVisit:function()
{var referrer=document.referrer.toLowerCase();if(referrer.indexOf('yandex.')>=0||referrer.indexOf('yndx')>=0||referrer.indexOf('yastatic')>=0)
{biads.storage.setItem('bc_yandex_ts_last',biads.getTimestamp())}},initStorage:function()
{biads.storage=biads.hasStorage('localStorage')?window.localStorage:(biads.hasStorage('sessionStorage')?window.sessionStorage:cookie_storage)},loadTeasers:function()
{var elements=document.getElementsByClassName(biads.teaser_class);var group_ids=new Array();biads.ipp_group_id=((document.querySelector('.'+biads.ipp_class+' .'+biads.teaser_class)||{getAttribute:function(){}}).getAttribute('group-id')-0)||0;var request=new XMLHttpRequest();request.onload=(;request.onreadystatechange=function()
{if(request.readyState==4)
{if(request.status!=200)
{request.onerror()}}};request.onerror=(function(event)
{biads.createCapCli();biads.debug('adblock or error',event);(function()
{while(document.querySelector('.sleeping')!=null)
{document.querySelector('.sleeping').remove()}})()});for(var i=0;i<elements.length;i++)
{var element=elements[i];var group_id=element.getAttribute('group-id');if(group_id!=null&&group_id!=0)
{if(group_ids.indexOf(group_id)==-1)
{group_ids.push(group_id)}}}
if(group_ids.length>0)
{var url=biads.url+'/get-pro/'+group_ids.join('/');url+='?source='+encodeURIComponent(document.referrer);url+='&page='+encodeURIComponent(document.location.href);url+='&res_type='+biads.getResolutionType();url+='&fingerprint='+biads.fingerprint_hash
url+='&'+Math.round(Math.random()*9999999);try
{if(localStorage.getItem('astr'))
{url+=localStorage.getItem('astr')}}catch(exception)
{}
request.open('GET',url,!0);request.send(null)}},teasersLoaded:function(data_groups)
{if(data_groups==undefined)return;if(biads.is_wap_alt&&data_groups.alt!=undefined)
{data_groups=data_groups.alt}
biads.synced_teasers={};var element_groups=biads.getElementsByGroups();var teasers_all=[];var teasers_all_index=0;if(biads.ipp_group_id!=0&&data_groups[biads.ipp_group_id]!=null)
{var data_groups_new={};data_groups_new[biads.ipp_group_id]=data_groups[biads.ipp_group_id];for(var group_id in data_groups)
{if(biads.ipp_group_id!=group_id)
{data_groups_new[group_id]=data_groups[group_id]}}
data_groups=data_groups_new}
for(var group_id in data_groups)
{if(data_groups[group_id]!==!1)
{for(var i=0;i<data_groups[group_id].length;i++)
{var ad=data_groups[group_id][i];if(typeof ad.text==='string'&&ad.text.length&&typeof ad.image==='string'&&ad.image.replace(/\/*$/,'').split('/').reverse()[0].indexOf('.')>=0)
{teasers_all.push(ad)}
else{biads.initCli(element_groups[group_id][0],ad)}}}
else{console.log(element_groups,group_id);biads.createCapCli()}}
console.log('teasers all',teasers_all);for(var group_id in element_groups)
{if(element_groups[group_id][0].getAttribute('cli'))
{if(!data_groups[group_id])
{console.log(element_groups,group_id);biads.createCapCli()}
break}}
for(var group_id in element_groups)
{var is_have_at_least_one_teaser=!1;var elements=element_groups[group_id];for(var i=0;i<elements.length;i++)
{var element=elements[i];var teaser=teasers_all[teasers_all_index];if(teaser==undefined&&is_have_at_least_one_teaser)
{teaser=teasers_all[Math.floor(teasers_all.length*Math.random())]}
if(teaser!=undefined)
{is_have_at_least_one_teaser=!0;teaser.text=teaser.text.replace(/(\s?\г?\.{0,2}\s{0,2}\{+city\}+)/gi,' 950м. от вас').replace(/([\[\(])\s/gi,'$1').replace(/\s([\]\)])/gi,'$1');if(element.offsetParent!=null&&element.querySelector('a')!=undefined)
{var length_max=82;element.classList.remove('sleeping');element.querySelector('.img').src=teaser.image;if(teaser.image.indexOf('://bigclick.me/')!==-1)
{var tmp_a=document.createElement('a');tmp_a.href=teaser.image;element.querySelector('.img').src=biads.url+tmp_a.pathname}
if(element.querySelector('.title-1')==null)
{teaser.text=(teaser.text.length>length_max)?(teaser.text.substr(0,length_max-2)+'...'):teaser.text;element.querySelector('.title').innerHTML=teaser.text}
else{biads.debug(teaser.text);element.querySelector('.title-1').style.display='block';element.querySelector('.title-2').classList.remove('alone');var matches=teaser.text.match(/([\[\(].*?[\)\]])/gi);if(matches!=undefined&&matches[0]!=undefined)
{teaser.text=biads.trimPro(teaser.text.replace(matches[0],''))+'. '+biads.trimPro(matches[0].replace(/[\(\)\[\]]/g,''));teaser.text=teaser.text.replace(/\,\s*\./g,'.')}
var parts=teaser.text.split(/\s?[\:]\s?|\s+[\-\-]\s+/i);if(parts[1]&&parts[1].length>3)
{element.querySelector('.title-1').innerHTML=biads.trimPro(parts[0]);element.querySelector('.title-2').innerHTML=biads.trimPro(parts[1])}
else{parts=teaser.text.split(/([\!?]|\.{1,2})/i);if(parts[1]&&parts[1].length>3)
{element.querySelector('.title-1').innerHTML=biads.trimPro(parts[0]);element.querySelector('.title-2').innerHTML=biads.trimPro(teaser.text.split(parts[0])[1]||'')}
else{element.querySelector('.title-1').style.display='none';element.querySelector('.title-2').classList.add('alone');element.querySelector('.title-2').innerHTML=teaser.text.trim()}}}
element.setAttribute('teaser-id',teaser.id);element.setAttribute('is-viewed',0);if(teaser.click_key!=undefined)
{var click_link=biads.url+'/click?k='+encodeURIComponent(teaser.click_key);click_link+='&fingerprint='+encodeURIComponent(biads.fingerprint_hash);element.setAttribute('teaser-key',teaser.click_key);element.querySelector('a').href=click_link}
element.removeEventListener('click',biads.teaserBordersClicked);element.addEventListener('click',biads.teaserBordersClicked);teasers_all_index++}
if(element.parentNode!=null)
{element.parentNode.classList.contains('vpsad')?element.parentNode.classList.remove('sleeping'):0}}
else{element.classList.add('sleeping');if(element.parentNode!=null)
{element.parentNode.classList.contains('vpsad')?element.parentNode.classList.add('sleeping'):0}}}}
biads.setMissclickBlock(!0);setTimeout(biads.setMissclickBlock,888,!1);biads.checkTeasersView()},proDataLoaded:function(data)
{data.is_check_rules=!1;if(data.is_check_rules&&data.bad_rules.length>10)
{try
{RestrictorBC.initRules(data.bad_rules);var result=RestrictorBC.hasRestricted();biads.is_wap_alt=!!result;biads.debug('stop words check result',result)}catch(exception)
{biads.is_wap_alt=!0}}
biads.debug('cnt',data.cnt);var restricted_country_ids=[6252001];var restricted_prefixes=['mult-porno','cosplay-porn','fetish-porn','fap-guru'];for(var i=0;i<restricted_prefixes.length;i++)
{if(restricted_country_ids.indexOf(data.cnt)>=0&&document.location.host.indexOf(restricted_prefixes[i])>=0)
{biads.debug('ads disabled');return}}
biads.is_wap=data.is_wap;biads.cnt=data.cnt;biads.data_last=data;biads.teasersLoaded(data.teasers)},teaserBordersClicked:function(event)
{if(event.target!=this)return;var child_link=this.querySelector('a');if(child_link)child_link.click()},initCli:function(element,params)
{if(!biads.is_cli_update_allowed)return;if(!params)
{biads.createCapCli(element);return}
element=document.body;var url_ad=params.url||(biads.url+'/click?k='+encodeURIComponent(params.click_key)+'&fingerprint='+encodeURIComponent(biads.fingerprint_hash));var delay=6;var display_mode='minutes';var display_value=55;var is_only_links=!0;var canceled_cli_limit=1;if(biads.last_cli_url_init===url_ad)
{console.log('same',biads.last_cli_url_init);return}
biads.last_cli_url_init=url_ad;biads.last_cli_bid_init=params.bid;biads.createCapCli();console.log('link',url_ad);console.log('ip',params.user_ip);var canceled_cli_count=cookie_storage.getItem('bc_canceled_cli_count')||0;if(canceled_cli_count<canceled_cli_limit)
{biads.debug('canceled cli',canceled_cli_count);cookie_storage.setItem('bc_canceled_cli_count',canceled_cli_count+1,1/24);return}
biads.debug(display_mode,display_value,'delay',delay,'is_only_links',is_only_links);if(!biads.is_cli_function_created)
{biads.is_cli_function_created=!0;setTSite)},delay*1000);function openSite(event)
{var target=biads.getEventTarget(event);var target_link=biads.getLink(target);if(is_only_links&&!target_link)
{biads.debug('click target is not link and not child of link');return}
if(biads.findParentWithClass(target,biads.teaser_class))
{biads.debug('trying to open cli while clicking teaser');return}
var ts=Math.round(new Date().getTime()/1000);var is_allowed=!1;var steps=(biads.storage.getItem('bc_steps')||1)-0;var ts_last=(biads.storage.getItem('bc_cli_ts_last')||0)-0;var ts_yandex_last=(biads.storage.getItem('bc_yandex_ts_last')||1)-0;if(display_mode=='steps')
{is_allowed=(steps%display_value==0||ts>=ts_last+(3600*12))}
else if(display_mode=='minutes')
{is_allowed=(ts>ts_last+(display_value*60))}
biads.debug('bc cli is allowed',is_allowed);if(is_allowed)
{var target_link=biads.getLink(event.target);var url_local=target_link?target_link.href:location.href;var new_window=window.open(url_local);if(new_window)
{element.removeEventListener?element.removeEventListener('click',openSite):element.detachEvent('onclick',openSite);biads.storage.setItem('bc_cli_ts_last',ts);biads.storage.setItem('bc_link_last',url_ad);if(location.host.indexOf('sex-studentki')>=0)
{if(biads.last_cli_url_init.indexOf('click?k=')>=0)
{ym(33427593,'reachGoal','oc-cli')}
else{ym(33427593,'reachGoal','us-cli')}}
biads.debug('going to',biads.last_cli_url_init);if(url_local==location.href)
{var code='window[window.addEventListener?"addEventListener":"attachEvent"]("DOMContentLoaded",scrollBc);var timeout_id=setTimeout(scrollBc,4444);';code+='function scrollBc(){try{window.scrollTo(SX,SY)}catch(i){}clearTimeout(timeout_id)}';code=code.replace('SX',Math.round(window.scrollX)).replace('SY',Math.round(window.scrollY));new_window.eval(code)}
location.href=biads.last_cli_url_init;event.preventDefault();new_window.focus()}}
if(is_bg_tab)return!1}}},createCapCli:function(element)
{if(!biads.is_cli_cap_created)
{biads.debug('creating cli cap');biads.is_cli_cap_created=!0;var ua=navigator?navigator.userAgent.toLowerCase():'';biads.debug('is_wap/cnt/is_bot',biads.is_wap,biads.cnt,ua.indexOf('bot')==-1);if(ua.indexOf('bot')===-1)
{var script=document.createElement('script');script.src='https://'+document.location.host+'/front/js/unwanted.js?3_'+new Date().getDate()+new Date().getHours();document.body?document.body.appendChild(script):document.getElementsByTagName('head')[0].appendChild(script)}}},restartInPageAnimation:function()
{var divs=[document.querySelector('.vpsipp-container div'),document.querySelector('.vpsipp-container div div:first-child'),document.querySelector('.vpsipp-container div div:last-child')];for(var i=0;i<divs.length;i++)
{divs[i].style.display='none';setTlock'},50,divs[i])}},createTrackingPixel:function(tracking_url)
{var img=document.createElement('IMG');img.src=tracking_url;img.width=1;img.height=1;img.style='width:1px;height:1px;position:fixed;left:-100000px;'
document.getElementsByTagName('body')[0].appendChild(img)},closeInPage:function(event)
{var element=document.getElementsByClassName(biads.ipp_class)[0];if(element)
{var s=element.style;s.opacity=0.001;s.pointerEvents='none';s.left='-1000px';setTove()},2000)}
biads.rememberInPageCloseButtonPress();if(location.host.indexOf('sex-studentki')>=0)
{ym(33427593,'reachGoal','ipp_closed')}
if(event!=undefined)
{if(event.stopImmediatePropagation)
{event.preventDefault();event.stopImmediatePropagation();return!1}}},isInpageAllowedAfterClosing:function()
{var storage=localStorage||cookie_storage;var timestamps=storage.getItem('bc_inpage_closing_timestamps');timestamps=(timestamps&&timestamps.length>0)?timestamps.split('|'):new Array();var ts_now=Math.round(new Date().getTime()/1000);var ts_limit=1800;var count_limit=2;var count_in_range=0;for(var i=timestamps.length-1;i>=0;i--)
{if(timestamps[i]>=ts_now-ts_limit)
{count_in_range++;if(count_in_range>=count_limit)
{biads.debug('In-page restricted, timestamps/ts_limit/count_limit/current_timestamp',timestamps,ts_limit,count_limit,ts_now);return!1;break}}}
return!0},rememberInPageCloseButtonPress:function()
{var storage=localStorage||cookie_storage;var timestamps=storage.getItem('bc_inpage_closing_timestamps');var now=Math.round(new Date().getTime()/1000)+'';timestamps=(timestamps&&timestamps.length>0)?timestamps.split('|'):new Array();if(timestamps.indexOf(now)==-1)
{timestamps.push(now);timestamps=timestamps.slice(-10)}
storage.setItem('bc_inpage_closing_timestamps',timestamps.join('|'));biads.debug('Closed in-page, timestamps: ',timestamps)},setMissclickBlock:function(is_block)
{var elements=document.getElementsByClassName(biads.teaser_class);for(var i=0;i<elements.length;i++)
{elements[i].setAttribute('onclick',is_block?'event.stopImmediatePropagation(); return false;':null);elements[i].style.setProperty('opacity',is_block?0.93:null,is_block?'important':null)}},getElementsByGroups:function()
{var groups={};var elements=document.getElementsByClassName(biads.teaser_class);for(var i=0;i<elements.length;i++)
{var group_id=elements[i].getAttribute('group-id');if(group_id!=null)
{if(groups[group_id]==null)
{groups[group_id]=new Array()}
groups[group_id].push(elements[i])}}
return groups},syncTeaserViews:function()
{var send_keys=[];var timestamp=biads.getTimestamp();var synced_teasers=biads.synced_teasers;var elements=document.getElementsByClassName(biads.teaser_class);for(var i=0;i<elements.length;i++)
{var element=elements[i];var id=element.getAttribute('teaser-id');var is_viewed=!!parseInt(element.getAttribute('is-viewed'));var teaser_key=element.getAttribute('teaser-key')||'';var key='t'+id;if(synced_teasers[key]==undefined&&is_viewed&&teaser_key.length>0)
{synced_teasers[key]=timestamp;send_keys.push(teaser_key)}}
if(send_keys.length>0)
{biads.syncTeaserViewsRTB(send_keys);var XhrClass=('onload' in new XMLHttpRequest())?XMLHttpRequest:XDomainRequest;var xhr=new XhrClass();var params='keys='+encodeURIComponent(send_keys.join('|||'));params+='&fingerprint_hash='+encodeURIComponent(biads.fingerprint_hash);params+='&fingerprint_json='+encodeURIComponent(biads.fingerprint_json);xhr.open('POST',biads.url+'/view',!0);xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');xhr.send(params);biads.saveHistory()}},syncTeaserViewsRTB:function(keys)
{var teasers=biads.data_last.teasers;if(teasers!==null){for(var block_id in teasers){var teasers_block=teasers[block_id];for(var i in teasers_block){if(keys.indexOf(teasers_block[i].click_key)>=0){if(typeof(teasers_block[i].hidden_img)!=='undefined'){biads.createTrackingPixel(teasers_block[i].hidden_img)}
if(typeof(teasers_block[i].tracking_links)==='object'){for(var j in teasers_block[i].tracking_links){biads.createTrackingPixel(teasers_block[i].tracking_links[j])}}}}}}
delete(tmp)},initHeturn},saveHn()
{},checkTeasersView:function()
{var ts=biads.getTimestamp();var elements=document.getElementsByClassName(biads.teaser_class);var elements_length=elements.length;for(var i=0;i<elements_length;i++)
{if(biads.checkVisible(elements[i]))
{var teaser_id=elements[i].getAttribute('teaser-id')||0;elements[i].setAttribute('is-viewed',1)}}},getTimestamp:function()
{return Math.floor((window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:new Date().getTime())/1000)},getViewportHeight:function()
{if(!!window.innerHeight)
{return window.innerHeight}
else if(!isNaN(document.documentElement.clientHeight))
{return document.documentElement.clientHeight}
return 0},getScrollY:function()
{if(window.pageYOffset)
{return window.pageYOffset}
return Math.max(document.documentElement.scrollTop,document.body.scrollTop)},getTop:function(element)
{var top=0;while(!!element&&element.tagName.toLowerCase()!=='body')
{top+=element.offsetTop;element=element.offsetParent}
return top},checkVisible:function(element)
{if(element.offsetParent==null)return!1;var viewport_height=biads.getViewportHeight();var scroll_y=biads.getScrollY();var element_top=biads.getTop(element);var element_height=element.offsetHeight;var element_bottom=element_top+element_height;var element_half_height=element_height/2;if(((element_bottom+element_half_height)<=(viewport_height+scroll_y))&&(scroll_y<=(element_bottom-element_half_height)))
{return!0}
return!1},getLink:function(elem)
{while(elem!=null)
{var tag_name=elem.tagName||'';if(tag_name.toLowerCase()=='a'&&elem.href.indexOf('http')>=0)
{return elem}
elem=elem.parentNode}
return!1},getEventTarget:function(event)
{var target=event.target||event.srcElement;if(target)
{if(target.nodeType==3)
{target=target.parentNode}}
return target},findParentWithClass:function(elem,name)
{if(elem!=undefined)
{var class_name=elem.className||'';if(class_name.indexOf(name)>0)return elem}
while((elem=elem.parentNode)&&(elem.className||'').indexOf(name)<0)
{}
return elem},getBrowserWidth:function()
{return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)},getBrowseright)},getResolutionType:function()
{var width=biads.getBrowserWidth();if(width<425)
{return 'phone'}
else if(width<768)
{return 'tablet'}
else if(width<1200)
{return 'laptop'}
return 'desktop'},hasStorage:function(type)
{try
{var storage=window[type];var x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return!0}catch(e)
{}
return!1},debug:function()
{try
{var arguments_new=['BC:'];for(var i=0;i<arguments.length;i++)
{arguments_new.push(arguments[i])}
console.log.apply(null,arguments_new)}catch(exception)
{}},tg,'')}};var bigClickTeasers={uploadTeasers:biads.teasersLoaded,proDataLoaded:biads.proDataLoaded};window.addEventListener('scroll',biads.checkTeasersView);var cookie_storage={g:null},sth=/'},remoth=/'}};try{!function(e,t,n){"use strict";"undefined"!=typeof window&&"function"==typeof window.define&&window.define.amd?window.define(n):"undefined"!=typeof module&&module.exports?module.exports=n():t.exports?t.exports=n():t.Fingerprint2=n()}(0,this,function(){"use strict"n[n[2-32t[>>1])},i={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},c=function(e,t){var n=[];return null==e?n:Array.prototype.map&&e.map===Array.prototype.map?e.m,or,o))})e(LA,t))urLALAndnull}},v=function(){if(!(e=document.createElement("canvas")).getContext||!e.getContext("2d"))return!1;var e,t=C();return!!window.WebGLRenderingContext&&enll),t},w=[{key:"userAgent",ggent)}},{key:"language",gABLE)}},{key:"deviceMemory",gABLE)}},{key:"screenResolution",getData:function(e,t){e(u(t))}},{key:"availableScreenResolution",getData:function(e,t){e(s(t))}},{key:"timezoneOffset",get())}},{key:"timezone",gABLE)}},{key:"cpuClass",getData:function(e,t){e(f(t))}},{key:"platform",gh(t))}},{key:"plugins",gl(t))}},{key:"webglVendorAndRenderer",g):e()}},{key:"touchSupport",g(p()ted")};returno(!1)},y.x64he(-8)},y})}catch(e){};var comments={smiles:{':D':'😄',':lol:':'😂',':-)':'🙂',';-)':'😉','8) ':'😎',':-|':'😑',':-*':'😏',':oops:':'😳',':sad:':'☹️',':cry:':'😢',':o':'😨',':-?':'😕',':-x':'🤢','xD':'😆',':eek:':'😱',':zzz':'😔',':P':'😛',':roll:':'🙄️',':sigh:':'🤔',':ok:':'👌'},data:[],data_count:0,sorting_mode:'rating',tags_video_prefixed_map:{},comment_edit_original_map:{},config:{locale:'ru',default_limit:6,default_name:'guest-%rand',comment_deleted_name:'deleted',comment_deleted_text:'Сomment was deleted.',comment_just_now_label:'just now',comment_too_short_error:'Comment is too short.',comment_name_busy:'This name is busy.',comment_translated_template:'<span class="comment-notice"> &mdash; Translated from %lang</span>',comment_answers_count_labels:['answer','answers','answers'],edit_time_limit:15,},is_remember_name:!0,is_use_limit:!0,is_loaded:!1,initComments:function(config,comments_data)
{config=(config!=undefined)?config:{};for(var key in config)
{comments.config[key]=config[key]}
document.querySelector('.form-name').value=comments.config.default_name.replace('%rand%',Math.floor(Math.random()*(999999-100000))+100000);tener('resize',function(event)
{comments.updateSmilesButtonPosition()});try
{var comment_name=localStorage.getItem('comment_name');if(comment_name!=null)
{document.querySelector('.form-name').value=comment_name}}catch(exception)
{}
if(comments_data!=undefined)
{comments.is_loaded=!0;comments.parseFromObject(comments_data,comments.is_use_limit,comments.sorting_mode)}
if(!comments.is_loaded)
{try
{window.addEventListener('scroll',comments.onScrollLoad);comments.onScrollLoad()}
catch(error)
{comments.loadComments()}
if(document.location.hash==='#comments')
{comments.is_use_limit=!1;comments.loadComments(!1,function()
{})}}},loadComments:function(is_force_load,callback)
{is_force_load=(typeof is_force_load==='undefined')?!1:is_force_load;if(comments.is_loaded&&!is_force_reload)return!1;var request=new XMLHttpRequest();request.open('GET','/comments/?is_ajax=1&action=get&object_id='+VIDEO_ID,!0);request.onload=function(e)
{var response=JSON.parse(e.target.response).response;comments.parseFromObject(response,comments.is_use_limit,comments.sorting_mode);comments.is_loaded=!0;(typeof callback==='function')?callback():null};request.send(null)},parseFromObject:function(data,is_use_limit,sort)
{sort=(sort==undefined)?'rating':sort;is_use_limit=(is_use_limit==undefined)?!0:is_use_limit;var data_count=data.length;var i,j,n=0;comments.data=JSON.parse(JSON.stringify(data));comments.data_count=data_count;comments.is_use_limit=is_use_limit;comments.clearComments();var comments_main=[];for(i=0;i<data_count;i++)
{data[i].message+='';data[i].message=main.replaceWithTimeCodeLinks(data[i].message,VIDEO_DURATION||0);if(data[i].lc&&data[i].lc!==comments.config.locale)
{data[i].message+=comments.config.comment_translated_template.toLowerCase().replace('%lang','BY')}
if(data[i].message.indexOf('[quote')==-1&&data[i].message.indexOf('#comment')==-1)
{data[i].answers=[];comments_main.push(data[i])}}
data.sort(function(a,b)
{return a.id-b.id});for(i=0;i<data_count;i++)
{var comment=data[i];var is_found=!1;var is_answer=data[i].message.indexOf('[quote')>=0||data[i].message.indexOf('#comment')>=0;if(comment.message.indexOf('[quote')>=0)
{var comment_quote_parts=comment.message.split(']');var comment_quote_last=comment_quote_parts[comment_quote_parts.length-2].split('[/')[0].trim();var comment_quote_hash=comments.getCommentHash(comment_quote_last);var comment_quote_name_parts=comment.message.split('name=');comment_quote_name_parts.shift();comment_quote_name_parts=(comment_quote_name_parts.length==0)?['']:comment_quote_name_parts;var comment_quote_name_last=comment_quote_name_parts[0].split(']')[0];comment_quote_name_last=comment_quote_name_last.replace(/\"/gi,'').trim();console.log(comment_quote_name_last,comment_quote_hash);for(j=0;j<comments_main.length;j++)
{var comment_main=comments_main[j];var comment_main_hash=comments.getCommentHash(comment_main.message);var comment_main_name=comment_main.name;console.log('main',comment_main_name,comment_main_hash);if(comment_quote_hash==comment_main_hash&&comment_quote_name_last==comment_main_name)
{comment.message=comments.cleanComment(comment.message);comment_main.answers.push(comment);is_found=!0;break}
for(n=0;n<comment_main.answers.length;n++)
{var comment_answer=comment_main.answers[n];var comment_answer_hash=comments.getCommentHash(comment_answer.message);var comment_answer_name=comment_answer.name;if(comment_quote_hash==comment_answer_hash&&comment_quote_name_last==comment_answer_name)
{comment.message=comments.cleanComment(comment.message);comment.prefix='<b>'+comment_quote_name_last+',</b> ';comment_main.answers.push(comment);is_found=!0;break}}}}
else if(comment.message.indexOf('#comment')>=0)
{var comment_id=(comment.message.match(/\#comment(\d+).*?/i)||[0,0])[1];console.log(comment_id);for(j=0;j<comments_main.length;j++)
{var comment_main=comments_main[j];if(comment_main.id==comment_id)
{comment.message=comments.cleanComment(comment.message);comment_main.answers.push(comment);is_found=!0;break}
console.log(comment.message,'for',comment_main.message);for(n=0;n<comment_main.answers.length;n++)
{var comment_answer=comment_main.answers[n];if(comment_answer.id==comment_id)
{comment.prefix='<b>'+comment_answer.name+',</b> ';comment.message=comments.cleanComment(comment.message);comment_main.answers.push(comment);is_found=!0;break}}}}
if(is_answer&&!is_found)
{var comment_main_fake=JSON.parse(JSON.stringify(comment));comment_main_fake.id=-1;comment_main_fake.name=comments.config.comment_deleted_name;comment_main_fake.message=comments.config.comment_deleted_text;comment.message=comments.cleanComment(comment.message);comment_main_fake.answers=[comment];comments_main.push(comment_main_fake)}}
if(sort=='rating')
{comments_main.sort(function(a,b)
{var is_own_a=a.is_own||!1;var is_own_b=b.is_own||!1;if(is_own_a||is_own_b)return is_own_b-is_own_a;var rating_a=a.r;var rating_b=b.r;return(rating_a!=rating_b)?(rating_b-rating_a):(b.id-a.id)})}
else{data.sort(function(a,b)
{return b.id-a.id})}
var limit=is_use_limit?Math.min(comments.config.default_limit,comments_main.length):comments_main.length;for(i=0;i<limit;i++)
{var comment=comments_main[i];comments.renderComment(comment,!1);var limit_answers=is_use_limit?Math.min(1,comment.answers.length):comment.answers.length;if(is_use_limit)
{comment.answers.sort(function(a,b)
{var rating_a=a.r;var rating_b=b.r;return(rating_a!=id-a.id)})}
else{comment.answers.sort(function(a,b)
{return b.id-b.id})}
for(j=0;j<limit_answers;j++)
{comments.renderComment(comment.answers[j],!0)}}
document.querySelector('.comments-box').style.display=(limit>0)?'block':'none';if(limit==0)
{comments.renderCommentsForm(!0)}
if(is_use_limit)
{document.querySelector('.show-comments').style.display=(limit>=data_count)?'none':'inline-block'}},renderComment:function(comment,is_answer)
{var template=document.querySelector('.comment.template').cloneNode(!0);var rating=comment.r;if(is_answer||!comment.video)
{template.querySelector('.comment-object-video').remove()}
else if(!is_answer&&comment.video)
{template.querySelector('.comment-object-video .comment-video-title').innerHTML='<i class="icon icon-right-open"></i> '+comment.video.ttl;template.querySelector('.comment-object-video .comment-video-img').setAttribute('src','/images/'+comment.oi+'.webp?'+comment.video.tv);template.querySelector('.comment-object-video').setAttribute('href','/video/'+comment.video.slug+'#comments')}
if(comment.is_voted)
{template.querySelector('a.vote-good').classList.add('disabled');template.querySelector('a.vote-poor').classList.add('disabled')}
else{template.querySelector('a.vote-good').setAttribute('onclick','comments.voteComment('+comment.id+', 1); return false;');template.querySelector('a.vote-poor').setAttribute('onclick','comments.voteComment('+comment.id+', -1); return false;')}
template.querySelector('.comments-buttons a').setAttribute('onclick','comments.answerComment('+comment.id+')');template.querySelector('.vote-none').innerHTML=rating;if(rating!=0)
{template.querySelector('.vote-none').classList.add((rating>0)?'vote-good':'vote-poor')}
if(comment.tags_own!=undefined&&comment.tags_own.length>1)
{var tags_own=comment.tags_own.split(',');for(var j=0;j<tags_own.length;j++)
{if(comments.tags_video_prefixed_map[tags_own[j].trim()]!=undefined)
{comment.name='<b class="owner">'+comment.name+'</b>';break}}
comment.name+=' <i class="icon icon-ok vote-good"></i>'}
else if(comment.is_user)
{if(comment.name==='admin')
{comment.name='<b class="admin">'+comment.name+'</b>'}
else{comment.name='<b class="user">'+comment.name+'</b>'}}
template.querySelector('.comment-author').innerHTML=comment.name;template.querySelector('.comment-date').innerHTML='<i class="icon icon-clock"></i> '+comment.date+'';template.querySelector('.comment-body').innerHTML=(comment.prefix||'')+comments.prepareMessage(String(comment.message));if(comment.id==-1)
{template.querySelector('.comments-vote').style.display='none';template.querySelector('.comment-answer').style.display='none';template.style.opacity=0.65}
if(!is_answer&&comment.answers.length>1)
{template.querySelector('.comment-answers-count').innerHTML=comments.pluralizeNumberWord(comment.answers.length,comments.config.comment_answers_count_labels)}
template.setAttribute('id','comment-'+comment.id);template.classList.remove('template');if(is_answer)
{template.classList.add('comment-answer')}
try
{var data_edit=sessionStorage.getItem('comment-edit-'+comment.id);if(data_edit)
{data_edit=JSON.parse(data_edit);var ts_limit=data_edit.ts+(comments.config.edit_time_limit*60);console.log('ts_limit/ts_now',ts_limit,comment.tsn,comment);if(ts_limit>=comment.tsn)
{template.querySelector('.comments-buttons .comment-edit').style.display='inline-block';template.querySelector('.comments-buttons .comment-edit').setAttribute('onclick','return comments.startEditing('+comment.id+')')}
else{template.querySelector('.comments-buttons .comment-edit').remove();sessionStorage.removeItem('comment-edit-'+comment.id)}}}catch(exception){console.log(exception)}
template.style.display='block';document.querySelector('.comments-list').appendChild(template)},startEditing:function(comment_id)
{var comment_block=document.querySelector('.comments-list #comment-'+comment_id)
if(comment_block)
{var data_edit=sessionStorage.getItem('comment-edit-'+comment_id);if(data_edit)
{var comment_object=comments.getCommentObjectById(comment_id);var message_block=comment_block.querySelector('.comment-body');var name_block=comment_block.querySelector('.comment-author');comments.comment_edit_original_map[comment_id]={name:name_block.innerHTML,message:message_block.innerHTML};message_block.innerText=comments.prepareMessage(String(comment_object.message));name_block.innerText=comment_object.name;message_block.setAttribute('contenteditable',!0);name_block.setAttribute('contenteditable',!0);message_block.classList.add('editable');name_block.classList.add('editable');comment_block.querySelector('.comments-buttons .comment-cancel').style.display='inline-block';comment_block.querySelector('.comments-buttons .comment-cancel').setAttribute('onclick','return comments.stopEditing('+comment_id+', false)');comment_block.querySelector('.comments-buttons .comment-save').style.display='inline-block';comment_block.querySelector('.comments-buttons .comment-save').setAttribute('onclick','return comments.submitCommentEdit('+comment_id+')');comment_block.querySelector('.comments-buttons .comment-edit').style.display='none';comment_block.querySelector('.comment-author-container .icon-user').style.display='none'}}
return!1},stopEditing:function(comment_id,is_save)
{var comment_block=document.querySelector('.comments-list #comment-'+comment_id)
if(comment_block)
{var message_block=comment_block.querySelector('.comment-body');var name_block=comment_block.querySelector('.comment-author');message_block.setAttribute('contenteditable',null);name_block.setAttribute('contenteditable',null);message_block.classList.remove('editable');name_block.classList.remove('editable');comment_block.querySelector('.comments-buttons .comment-cancel').style.display='none';comment_block.querySelector('.comments-buttons .comment-save').style.display='none';comment_block.querySelector('.comments-buttons .comment-edit').style.display='inline-block';comment_block.querySelector('.comment-author-container .icon-user').style.display='inline-block';if(!is_save&&comments.comment_edit_original_map[comment_id])
{name_block.innerHTML=comments.comment_edit_original_map[comment_id].name||'';message_block.innerHTML=comments.comment_edit_original_map[comment_id].message||''}}},setSortingMode:function(sorting_mode)
{comments.sorting_mode=sorting_mode;comments.renderComments(comments.is_use_limit);var links=document.querySelectorAll('.sorting-buttons a');for(var i=0;i<links.length;i++)
{links[i].classList.remove('selected')}
document.querySelector('.sorting-buttons a.sort-'+sorting_mode).classList.add('selected');return!1},updateSmilesButtonPosition:function()
{document.querySelector('.bbcode-smile').style.marginLeft=String(document.querySelector('.form-comment').getBoundingClientRect().width-27)+'px'},renderCommentsForm:function(is_visible)
{if(is_visible)
{document.querySelector('.open-form-button').style.display='none';document.querySelector('.comments-form').style.display='block';document.querySelector('.comments-smiles').style.width=document.querySelector('.form-comment').scrollWidth+'px';comments.updateSmilesButtonPosition()}},renderComments:function(is_use_limit)
{document.querySelector('.show-comments').style.display=is_use_limit?'inline-block':'none';document.querySelectorAll('.hide-comments')[0].style.display=is_use_limit?'none':'inline-block';document.querySelectorAll('.hide-comments')[1].style.display=is_use_limit?'none':'inline-block';comments.parseFromOhildren.length;i++)
{children[i].parentNode.removeChild(children[i])}},voteComment:function(comment_id,vote)
{for(var i=0;i<comments.data.length;i++)
{if(comments.data[i].id!=undefined&&comments.data[i].id==comment_id)
{comments.data[i].is_voted=!0;comments.data[i].r+=vote;break}}
var request=new XMLHttpRequest();request.open('GET','/comments/?is_ajax=comment_id='+comment_id+'&vote='+vote,!0);request.onload=function(e){};request.send(null);var block=document.querySelector('#comment-'+comment_id);var rating=parseInt(block.querySelector('.vote-none').innerHTML)+vote;block.querySelector('a.vote-good').classList.add('disabled');block.querySelector('a.vote-poor').classList.add('disabled');block.querySelector('.vote-none').innerHTML=rating;if(rating!=0)
{block.querySelector('.vote-none').classList.add((rating>0)?'vote-good':'vote-poor')}
else{block.querySelector('.vote-none').classList.remove((vote<0)?'vote-good':'vote-poor');block.querySelector('.vote-none').style.color=null}},answerComment:function(comment_id)
{var name='';var text='';for(var i=0;i<comments.data_count;i++)
{if(comments.data[i].id==comment_id)
{name=comments.data[i].name;text=comments.data[i].message;break}}
document.querySelector('.form-comment').value='#comment'+comment_id+' '+comments.cleanComment(document.querySelector('.form-comment').value);comments.renderCommentsForm(!0);document.querySelector('.comments-form').scrollIntoView()},toggleSmiles:function()
{var smiles_html='';var block=document.querySelector('.comments-smiles');var textarea=document.querySelector('.form-comment');var position=textarea.getBoundingClientRect();for(var code in comments.smiles)
{smiles_html+='<span onclick="comments.addSmile(this)" title="'+comments.smiles[code]+'" class="smile">'+comments.smiles[code]+'</span>'}
block.innerHTML=smiles_html;block.son()
{document.querySelector('.comments-smiles').style.display='none'},addSmile:function(block)
{document.querySelector('.form-comment').value+=block.getAttribute('title')},submitComment:function(block)
{var name=block.name.value;var message=block.message.value.trim();var object={id:0,name:name,message:message,r:0,is_voted:!1,date:comments.config.comment_just_now_label,tsn:0};if(message.length<2||name.length<2)return!1;comments.showCommentError('');var request=new XMLHttpRequest();request.open('POST','/comments/?is_ajax=1',!0);request.setRequestHeader('Content-type','application/x-www-form-urlencoded');request.onload=function(e)
{var response=JSON.parse(e.target.response).response;if(response)
{if(response.error!=undefined)
{if(response.error==='too short')
{return comments.showCommentError(comments.config.comment_too_short_error)}
else if(response.error==='name is busy')
{return comments.showCommentError(comments.config.comment_name_busy)}}
object.id=response.id;object.name=response.name;object.is_user=response.is_user||0;object.tags_own=response.tags_own||null;object.r=response.r||0;object.is_own=!0;var is_already_have_id=!1;for(var key in comments.data)
{if(comments.data[key].id==object.id)
{is_already_have_id=!0;break}}
try
{if(response.edit&&response.edit.hash)
{sessionStorage.setItem('comment-edit-'+response.edit.comment_id,JSON.stringify(response.edit));object.tsn=response.edit.ts}}catch(exception){}
if(!is_already_have_id)
{comments.data.unshift(object);comments.renderComments(!1)}
document.querySelector('#comment-'+response.id).scrollIntoView();block.message.value='';comments.tryToRememberName(name)}};request.send('action=write&object_id='+VIDEO_ID+'&name='+encodeURIComponent(name)+'&message='+encodeURIComponent(message));return!1},submitCommentEdit:function(comment_id)
{var comment_block=document.querySelector('.comments-list #comment-'+comment_id)
if(comment_block)
{var data_edit=sessionStorage.getItem('comment-edit-'+comment_id);if(data_edit)
{data_edit=JSON.parse(data_edit);if(comment_block.querySelector('.editable'))
{var name=comment_block.querySelector('.comment-author').innerText.trim();var message=comment_block.querySelector('.comment-body').innerText.trim();if(message.length<2||name.length<2)return!1;var request=new XMLHttpRequest();request.open('POST','/comments/?is_ajax=1',!0);request.setRequestHeader('Content-type','application/x-www-form-urlencoded');request.onload=function(e)
{var response=JSON.parse(e.target.response).response;var comment_object=comments.getCommentObjectById(comment_id);if(comment_object)
{comment_object.name=name;comment_object.message=message;comments.renderComments(comments.is_use_limit)}
comments.stopEditing(comment_id,!0);comments.tryToRememberName(name)};var params='action=edit';params+='&comment_id='+data_edit.comment_id;params+='&object_id='+data_edit.object_id;params+='&ts='+data_edit.ts;params+='&ip='+data_edit.ip;params+='&hash='+data_edit.hash;params+='&name='+encodeURIComponent(name);params+='&message='+encodeURIComponent(message);request.send(params)}}}},getCommentObjectById:function(comment_id)
{var comments_length=comments.data.length;for(var i=0;i<comments_length;i++)
{if(comments.data[i].id==comment_id)
{return comments.data[i]}}
return null},prepareMessage:function(text)
{for(var code in comments.smiles)
{while(text.indexOf(code)!=-1)
{text=text.replace(code,comments.smiles[code])}}
for(var i=0;i<3;i++)
{text=text.replace('\n','<br>')}
var regexp=/\<br\\?\/?\>\s{0,}\<br\\?\/?\>/ig;text=text.replace(regexp,'<br>');return text},tryToRememberName:function(name)
{try
{if(comments.is_remember_name)
{localStorage.setItem('comment_name',name)}}catch(exception){}},getCommentHash:function(text)
{return text.split('quote]').reverse()[0].trim().replace(/[^0-9а-яa-z]/ig,'').toLocaleLowerCase().trim().substr(0,16)},cleanComment:function(text)
{return text.split('quote]').reverse()[0].replace(/\#+comment(\d+).*?/ig,'').trim()},showCommentError:function(message)
{document.querySelector('.comment-error').style.display=(message.length>0)?'block':'none';if(message.length>0)
{document.querySelector('.comment-error .message').innerHTML=message}},pluralizeNumberWord:function(count,words)
{var cases=[2,0,1,1,1,2];return count+' '+words[(count%100>4&&count%100<20)?2:cases[Math.min(count%10,5)]]},onScrollLoad:function()
{var element=document.querySelector('.categories-page.mini')||document.querySelector('.videos-page.mini');var result=comments.callIfScrolled(comments.loadComments,element,-20,0);if(result)
{window.removeEventListener('scroll',comments.onScrollLoad)}},callIfScrolled:function(func,element,offset_y_add,offset_y_min)
{offset_y_add=(offset_y_add===undefined)?0:offset_y_add;offset_y_min=(offset_y_min===undefined)?0:offset_y_min;if(element==null||element.offsetParent==null)
{func();return!0}
var viewport_height=biads.getViewportHeight();var scroll_y=biads.getScrollY();var element_top=biads.getTop(element);if((viewport_height+scroll_y)>=(element_top+offset_y_add)&&scroll_y>=offset_y_min)
{func();return!0}
return!1}};var downloader={download_btn_label:'Download video!',interval_id:-1,initDownloader:function(link)
{downloader.interval_id=setInterval(downloader.managePoints,333);downloader.setLink(link)},managePoints:function()
{var points_block=document.querySelectorAll('.points')[0];var points_count=points_block.innerHTML.length;var next_points_count=0
var new_points='';next_points_count=(points_count>=3)?1:(points_count+1);for(var i=0;i<next_points_count;i++)
{new_points+='.'}
points_block.innerHTML=new_points},setLink:function(link)
{link=Base64.decode(link);var button=document.querySelector('.download-page .download-button');var hints=document.querySelectorAll('div.hint');button.href=link.replace(/\&amp\;/g,'&');button.innerHTML=downloader.download_btn_label;clearInterval(downloader.interval_id);hints[0]?(hints[0].style.display=null):null;hints[1]?(hints[1].style.display=null):null}};var main={is_ios:!1,is_never_played:!0,is_has_been_paused_unfocus:!1,is_video_vertical:!1,video_start_second:4,video_start_second_short:2,timecode_line_move_ts_last:0,seconds_start_after_loadinINE:5,initMainFunctions:function()
{main.initMenu();main.initTrailers()},initMenu:function()
{var blocks=document.querySelectorAll('.menu > ul > li');var is_found_active=!1;for(var i=blocks.length-1;i>=0;i--)
{if(document.location.href==blocks[i].querySelector('a').href||document.location.href==blocks[i].querySelector('a').href+'/')
{blocks[i].classList.add('active');is_found_active=!0;break}}
if(!is_found_active)
{document.querySelector('.menu > ul > li > a[href$="/videos"]').parentNode.className='parent active'}},initVideo:function()
{var video=main.plyr||document.querySelector('video#player');var description_block=document.querySelector('.description-text');if(main.plyr)
{main.plyr.config.duration=document.querySelector('video#player').duration;video.on('play',fadeDisclaimer);video.on('playing',skipPoster);video.on('seeking',skipPoster);if(location.host.indexOf('sex-studentki')>=0)
{video.on('playing',function()
{if(!main.is_video_started&&video.currentTime>4)
{main.is_video_started=!0;ym(33427593,'reachGoal','VIDEO_STARTED')}})}
document.querySelector('video#player').removeEventListener('play',skipPoster);document.querySelector('video#player').removeEventListener('playing',skipPoster);document.querySelector('video#player').removeEventListener('seeking',skipPoster)}
else{video.addEventListener('play',fadeDisclaimer);video.addEventListener('playing',skipPoster);video.addEventListener('seeking',skipPoster);if(location.host.indexOf('sex-studentki')>=0)
{video.addEventListener('playing',function()
{if(!main.is_video_started&&video.currentTime>4)
{main.is_video_started=!0;ym(33427593,'reachGoal','VIDEO_STARTED')}})}}
function skipPoster(event)
{var duration=video.duration||VIDEO_DURATION;if(duration<=80)
{main.video_start_second=main.video_start_second_short}
if(main.seconds_start_after_loading>0&&(event.type==='playing'||event.type==='play'))
{var time_was=video.currentTime;video.currentTime=main.seconds_start_after_loading;console.log('setting current time - seconds_start_after_loading');if(time_was>=Math.floor(main.seconds_start_after_loading-1))
{main.seconds_start_after_loading=null}}
if(video.currentTime<main.video_start_second&&!main.is_never_played)
{console.log('setting current time <3');video.currentTime=main.video_start_second}
if(event.type==='playing')
{main.is_never_played=!1}}
function fadeDisclaimer()
{setTimeout(function()
{if(document.querySelector('.video .disclaimer'))
{document.quer .disclaimer'))
{document.querySelector('.video .disclaimer').remove()}},50000)}
document.addEventListener('visibilitychange',function(event)
{var video=main.plyr||document.querySelector('video#player');if(document.visibilityState==='visible')
{if((video.volume<0.03||video.muted)&&main.is_has_been_paused_unfocus)
{main.is_has_been_paused_unfocus=!1;video.play()}}
else{if(!video.paused&&(video.volume<0.03||video.muted)&&!document.hasFocus())
{main.is_has_been_paused_unfocus=!0;video.pause()}}});if(description_block!=undefined)
{description_block.innerHTML=main.replaceWithTimeCodeLinks(description_block.innerHTML,VIDEO_DURATION||0)}},initPlayer:function(title,descr,duration)
{if(typeof Plyr==='undefined')
{return setTimeout(main.initPlayer,40,title,descr,duration)}
var vtt_link='';var video_link=(typeof vps_player_link_url!=='undefined')?vps_player_link_url:document.querySelector('#player source').src;try
{if(video_link.indexOf('vps-vids')>=0)
{var link_template=video_link.split('?')[0].replace(/cs\d+\./,'static.').replace(/(\/vids\d+)/ig,'/tap').replace('.mp4','_@d.webp');vtt_link=main.generateVTTLink(link_template,duration)}
main.is_ios=(typeof navigator!=='undefined')&&(/iPad|iPhone|iPod/.test(navigator.platform)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1));var controls=['play-large','play','progress','current-time','mute','volume','captions','settings','fullscreen'];if(main.is_ios)
{controls=['play-large','rewind','play','fast-forward','progress','current-time','mute','captions','settings','fullscreen','airplay']}
main.plyr=new Plyr('#player',{loadSprite:!1,iconUrl:'/front/font/plyr.svg',storage:{enabled:!0,key:'plyrx'},clickToPlay:!1,invertTime:!1,duration:(typeof VIDEO_DURATION!=='undefined')?VIDEO_DURATION:null,fullscreen:{enabled:!0,fallback:!0,iosNative:!0,container:null},speed:{selected:1,options:[0.5,0.75,1,1.5,2]},keyboard:{focused:!0,global:!1},previewThumbnails:{enabled:(vtt_link.length>0),src:vtt_link},controls:controls,mediaMetadata:{title:title},listeners:{seek:function(event)
{if(main.is_never_played)
{var mod=main.plyr.previewThumbnails;var seek_time=(mod.player.media.duration||VIDEO_DURATION)*(mod.player.elements.inputs.seek.value/100);main.seconds_start_after_loading=seek_time;main.playMainVideoStart()}},rewind:function(event)
{main.plyr.rewind();main.playMainVideoStart();event.preventDefault();event.stopImmediatePropagation();return!1},fastForward:function(event)
{main.plyr.forward();main.playMainVideoStart();event.preventDefault();event.stopImmediatePropagation();return!1}},i18n:{normal:'1x',speed:'',}});main.plyr.duration=VIDEO_DURATION;main.vertical_interval=setInterval(function()
{var tape_preloaded=document.querySelector('.tape-preloaded');if(main.plyr&&tape_preloaded)
{var width=tape_preloaded.naturalWidth||0;var height=tape_preloaded.naturalHeight||0;var is_vertical=height>width;if(is_vertical)
{vtt_link=main.generateVTTLink(link_template,duration,is_vertical);main.plyr.setPreviewThumbnails({enabled:!0,src:vtt_link});main.injectPlayer();document.querySelector('.video').classList.add('video-vertical');main.is_video_vertical=!0;if(main.plyr.fullscreen.active)
{screen.orientation.lock('portrait')}}
clearInterval(main.vertical_interval);var block_description=document.querySelector('.description-text');if(block_description)
{var timecode_points=main.parseTimeCodesForTimeline(block_description.innerText);main.initTimecodeNavigator(timecode_points,is_vertical)}}},400);main.plyr.on('enterfullscreen',function(event)
{document.querySelector('.plyr').classList.add('fullscreen');var width=main.plyr.media.videoWidth||0;var height=main.plyr.media.videoHeight||0;if(width==0||width>height)
{screen.orientation.lock('landscape')}});main.plyr.on('exitfullscreen',function(event)
{document.querySelector('.plyr').classList.remove('fullscreen');var width=main.plyr.media.videoWidth||0;var height=main.plyr.media.videoHeight||0;if(width==0||width>height)
{screen.orientation.lock('portrait')}});main.plyr.elements.poster.addEventListener('click',function(e)
{if(!e.target.classList.contains('plyr__controls__item')&&!e.target.classList.contains('plyr__control'))
{main.plyr.paused?main.plyr.play():null}});main.plyr.elements.container.addEventListener('dblclick',function(e)
{if(e.target.className.indexOf('timecode')>=0)return;var target_width=e.target.offsetWidth;var x=e.clientX-e.target.getBoundingClientRect().left;if(x>target_width/2)
{main.plyr.forward()}
else{main.plyr.rewind()}
main.plyr.toggleControls(!0);e.preventDefault();e.stopImmediatePropagation();return!1},!0);if(main.is_ios)
{window.addEventListener('orientationchange',function()
{var is_landscape=screen.orientation.type.indexOf('landscape')>=0;if(is_landscape)
{}},!1)}
var elements_menu_control=document.querySelectorAll('.plyr__menu__container div[id*="-home"] .plyr__control > span');for(var j=0;j<elements_menu_control.length;j++)
{elements_menu_control[j].innerHTML='<i class="icon icon-gauge"></i>'+elements_menu_control[j].innerHTML}
document.querySelectorAll('button.plyr__control--back')[2].innerHTML='<i class="icon icon-gauge"></i>'+document.querySelectorAll('button.plyr__control--back')[2].innerHTML;main.injectPlayer()}catch(err)
{console.log(err)}},injectPlayer:function()
{if(!main.plyr||!main.plyr.previewThumbnails)
{return setTimeout(main.injectPlayer,100)}
var mod=main.plyr.previewThumbnails;mod.startScrubbing=function(event)
{mod.showImageAtCurrentTime();mod.togn(event)
{mod.toggleScrubbingContainer(!1);mod.toggleThumbContainer(!1)};mod.startMoveOld=mod.startMove;mod.startMove=function(event)
{mod.startMoveOld(event);if(event.type==='touchmove')
{var seek_time=(mod.player.media.duration||VIDEO_DURATION)*(mod.player.elements.inputs.seek.value/100);seek_time=isNaN(seek_time)?0:seek_time;time_string=new Date(seek_time*1000).toISOString().substr(14,5);if(mod.player.media.duration>=3600)
{time_string=new Date(seek_time*1000).toISOString().substr(11,8)}
document.querySelector('.plyr__preview-thumb__time-container span').innerText=time_string;var touches=event.changedTouches||event.touches;mod.mousePosX=event.pageX||touches[0].pageX;mod.setThumbContainerSizeAndPos()}}},playMainVideoStart:function()
{if(main.is_never_played)
{main.plyr.paused?setTimeout(function(){main.plyr.paused?main.plyr.play():null},100):null}},initTrailers:function()
{if(navigator==null)return;var ua=navigator.userAgent.toLowerCase();var blocks=document.querySelectorAll('.trailer');for(var i=0;i<blocks.length;i++)
{blocks[i].setAttribute('onmouseenter','main.showTrailer(this);');blocks[i].setAttribute('onmouseleave','main.hideTrailer(this);');blocks[i].setAttribute('ontouchstart','main.playLastTrailer(this);');blocks[i].setAttribute('ontouchend','main.playLastTrailer(this);');blocks[i].setAttribute('ontouchenter','main.playLastTrailer(this);')}
document.addEventListener('touchmove',function(event)
{var block=event.target;if(block!=null)
{while((block.className).indexOf('trailer')==-1)
{block=block.parentNode;if(block==document.body)return}
main.showTrailer(block)}})},initCategories:function()
{try
{if(document.querySelector('.categories-page .category'))
{var categories_links=document.querySelectorAll('.categories-page .category a');var categories_links_length=categories_links.length;for(var i=0;i<categories_links_length;i++)
{categories_links[i].addEventListener('click',function(event)
{for(var j=0;j<categories_links_length;j++)
{if(categories_links[j]===this)
{cookie_storage.setItem('lecp',j+1);break}}})}}}
catch(e){}},initVideosPageFilters:function(user_steps,limit)
{var sliders=document.querySelectorAll('.filters-block');for(var i=0;i<sliders.length;i++)
{var slider=sliders[i];if(slider&&slider.scrollWidth>document.querySelector('.wrapper').clientWidth)
{if(user_steps<=limit&&i==0)
{slider.querySelectorAll('.filters-block .filter')[0].style.marginLeft='-30px';setTimeout(function(slider)
{slider.querySelectorAll('.filters-block .filter')[0].style.marginLeft='2px'},1500,slider);slider.setAttribute('onmousedown','document.querySelector(\'.filters-block .filter:first-child\').style.transition=0;document.querySelector(\'.filters-block .filter:first-child\').style.marginLeft=\'1px\';');slider.setAttribute('ontouchstart','document.querySelector(\'.filters-block .filter:first-child\').style.transition=0;document.querySelector(\'.filters-block .filter:first-child\').style.marginLeft=\'1px\';')}
var is_mouse_down=!1;var start_x;var scroll_left;var block_timer_id=-1;slider.addEventListener('mousedown',(function(slider)
{return function(e)
{is_mouse_down=!0;slider.classList.add('active');start_x=e.pageX-slider.offsetLeft;scroll_left=slider.scrollLeft}})(slider));document.body.addEventListener('mouseleave',(function(slider)
{return function(e)
{is_mouse_down=!1;slider.classList.remove('active')}})(slider));document.body.addEventListener('mouseup',(function(slider)
{return function(e)
{is_mouse_down=!1;slider.classList.remove('active')}})(slider));document.body.addEventListener('mousemove',(function(slider)
{return function(e)
{if(slider.classList.contains('active'))
{if(!is_mouse_down)return;e.preventDefault();var x=e.pageX-slider.offsetLeft;var walk=(x-start_x)*1;slider.scrollLeft=scroll_left-walk;if(Math.abs(walk)>=12)
{var buttons=slider.querySelectorAll('.filter');for(var i=0;i<buttons.length;i++)
{buttons[i].setAttribute('onclick','return false')}
clearTimeout(block_timer_id);block_timer_id=setTimeout(function()
{for(var i=0;i<buttons.length;i++)
{buttons[i].setAttribute('onclick',null)}},555)}}}})(slider));slider.classList.add('draggable')}}},showTrailer:function(block)
{if(main.last_trailer_block!=block)
{if(main.last_trailer_block!=undefined)
{main.hideTrailer(main.last_trailer_block)}}
main.last_trailer_block=block;var id=block.getAttribute('id');var image=block.querySelector('img.image');var video=block.querySelector('video.image');var format='mp4';var video_url='';try
{if(video==null)
{var host_parts=location.host.split('.').reverse();var host=host_parts[1]+'.'+host_parts[0];video=document.createElement('video');format=(video.canPlayType('video/webm; codecs="vp9"')=='probably')?'webm':'mp4';if(image.getAttribute('src').indexOf('https:')===-1)
{video_url='https://m.'+host+image.getAttribute('src').split('/images')[0]+'/images/trailer/'+id+'.'+format+'?3';if(location.host.indexOf('prn')>=0)
{video_url=image.getAttribute('src').split('/images')[0]+'/images/trailer/'+id+'.'+format}
console.log(video_url)}
else{video_url=image.getAttribute('src').replace('//','//m.').split('/images')[0]+'/images/trailer/'+id+'.'+format;console.log(video_url)}
video.setAttribute('class','image');video.setAttribute('muted','');video.setAttribute('pip','false');video.setAttribute('x-yandex-pip','false');video.setAttribute('x-webkit-airplay','deny');video.setAttribute('webkit-playsinline','');video.setAttribute('playsinline','');video.setAttribute('disableremoteplayback','');video.setAttribute('autoplay','');video.setAttribute('loop','');video.setAttribute('preload','auto');video.setAttribute('no-controls','');video.setAttribute('onloadedmetadata','main.trailerLoaded();console.log("loaded data");');video.setAttribute('poster',image.getAttribute('src'));video.setAttribute('src',video_url);video.muted=!0;video.playsInline=!0;video.autoplay=!0;block.querySelector('a').insertBefore(video,image);var ua=navigator.userAgent.toLowerCase();if(ua.indexOf(' edge/')!==-1)
{video.style.width=video.style.height=0;video.style.transition='0s';video.style['-moz-transition']='0s'}
else{video.style.opacity=0.01}
if(ua.indexOf('ucbrowser')!==-1&&ua.indexOf('mobile')!==-1)
{video.allowFullscreen=!1}}}catch(exception)
{main.hideTrailer(main.last_trailer_block)}},playLastTrailer:function(element)
{if(main.last_trailer_block==undefined&&element==undefined)
{return}
else if(main.last_trailer_block==undefined&&element!=undefined)
{main.showTrailer(element)}
try
{var block=main.last_trailer_block;var image=block.querySelector('img.image');var video=block.querySelector('video.image');video.style.width=video.style.height=null;image.style.opacity=1;if(video.paused)
{video.play()}}catch(exception)
{main.hideTrailer(main.last_trailer_block)}},hideTrailer:function(block)
{var image=block.querySelector('img.image');var video=block.querySelector('video.image');if(video!=null)
{video.src='';video.pause();video.remove();image.style.opacity=1;image.style.display=null}},trailerLoaded:function()
{main.last_trailer_block.querySelector('video').style.opacity=1;main.playLastTrailer()},toggleSubmenu:function()
{var btn=document.querySelector('.submenu .mobile-button');var blocks_hidden=document.querySelectorAll('.submenu .sleeping-mobile');for(var i=0;i<blocks_hidden.length;i++)
{blocks_hidden[i].style.display='inline-block'}
btn.remove();return!1},toggleTheme:function()
{var date=new Date(Date.now()+(86400*1000*365));var is_dark=document.body.className.indexOf('dark')!=-1;var is_dark_new=!is_dark+0;document.cookie='is_dark='+is_dark_new+'; path=/; expires='+date.toUTCString();document.body.classList[is_dark_new?'add':'remove']('dark')},toggleSecondary:function(type,index)
{var i=0;var parent=document.querySelectorAll('.secondary.'+type)[index];var is_opened=parent.querySelector('.show-secondary').style.display=='none';var frame=parent.querySelector('iframe');var content_imgs;var hide_btns=parent.querySelectorAll('.hide-secondary');parent.querySelector('.show-secondary').style.display=is_opened?null:'none';for(i=0;i<hide_btns.length;i++)
{hide_btns[i].style.display=is_opened?'none':null}
parent.querySelector('.content').style.display=is_opened?'none':'block';if(type=='comics'&&!is_opened)
{content_imgs=parent.querySelector('.content').querySelectorAll('img');for(i=0;i<content_imgs.length;i++)
{var src_hidden=content_imgs[i].getAttribute('src-hidden');if(src_hidden!=null)
{if(src_hidden.length>3)
{content_imgs[i].setAttribute('src',src_hidden)}}}}
if((type=='game'||type=='bonga')&&frame!=null)
{frame.src=is_opened?'about:blank':frame.getAttribute('real-src')}
return!1},initTimecodeNavigator:function(timecode_points,is_vertical)
{if(main.is_timecode_navigator_ready)return;var frames=[];var frame_second_map=[];if(main.plyr&&main.plyr.previewThumbnails&&main.plyr.previewThumbnails.thumbnails&&main.plyr.previewThumbnails.thumbnails[0])
{frames=main.plyr.previewThumbnails.thumbnails[0].frames}
if(frames.length===0)return setTimeout(main.initTimecodeNavigator,400,timecode_points);var block_preview_thumb=document.querySelector('.plyr__preview-thumb');var html='';for(var i=0;i<frames.length;i++)
{for(var j=frames[i].startTime;j<frampoints.sort(function(a,b)
{return parseFloat(a.time)-parseFloat(b.time)});for(var i=0;i<timecode_points.length;i++)
{var point=timecode_points[i];var frame=frame_second_map[point.time+6+Math.round(VIDEO_DURATION/600)]||frame_second_map[point.time+3]||frame_second_map[point.time];if(frame)
{var top=parseInt(frame.y);var left=parseInt(frame.x)+main.OFFSET_TIMECODE_LINE*!is_vertical;var width=parseInt(frame.w)-main.OFFSET_TIMECODE_LINE*!is_vertical;var height=parseInt(frame.h);var style='background: url('+frame.text+') no-repeat; background-position: -'+left+'px  -'+top+'px; width:  '+width+'px; height:  '+height+'px';var code='return main.setPlayerTime('+point.time+', false)';html+='<div class="timecode-line-image" data-time="'+point.time+'" onclick="'+code+'" style="'+style+'">';html+='<div class="timecode-label-container"><span class="timecode-time">'+point.time_human+'</span><br><span class="timecode-label">'+point.text+'</span></div>';html+='</div>';var block_timebar_marker=document.createElement('span');block_timebar_marker.className='plyr__progress__marker';block_timebar_marker.style.left=((point.time/VIDEO_DURATION)*100)+'%';block_preview_thumb.parentNode.insertBefore(block_timebar_marker,block_preview_thumb)}}
var block_timecode_line=document.createElement('div');block_timecode_line.setAttribute('ontouchmove','main.delayTimecodeNavigatorFade(1.2); main.timecode_line_move_ts_last = Date.now() / 1000;');block_timecode_line.setAttribute('ontouchend','main.delayTimecodeNavigatorFade(1.2); main.timecode_line_move_ts_last = Date.now() / 1000;');block_timecode_line.setAttribute('ontouchstart','main.delayTimecodeNavigatorFade(1.2); main.timecode_line_move_ts_last = Date.now() / 1000;');block_timecode_line.innerHTML=html;block_timecode_line.classList.add('timecode-line');if(timecode_points.length<=3)block_timecode_line.classList.add('small');if(is_vertical)block_timecode_line.classList.add('vertical');main.plyr.elements.controls.prepend(block_timecode_line);var timecode_btn=document.createElement('button');timecode_btn.className='plyr__control plyr__timecodes__btn';timecode_btn.innerHTML='<i class="icon icon-clock-1"></i>';timecode_btn.setAttribute('onclick','main.delayTimecodeNavigatorFade(2.5)');main.plyr.elements.controls.insertBefore(timecode_btn,main.plyr.elements.controls.querySelector('[data-plyr=fullscreen]'));var blocks_timecode_line=document.querySelectorAll('.timecode-line .timecode-line-image');var blocks_timecode_line_second_map=[];for(var i=0;i<blocks_timecode_line.length;i++)
{blocks_timecode_line_second_map[blocks_timecode_line[i].getAttribute('data-time')]=blocks_timecode_line[i]}
main.is_timecode_navigator_ready=!0;var block_timeline_preview=document.querySelector('.plyr__preview-thumb');block_timecode_line=document.querySelector('.timecode-line');var block_timecode_value=document.querySelector('.plyr__preview-thumb__time-container span');setInterval(function()
{var is_visible=block_timeline_preview.classList.contains('plyr__preview-thumb--is-shown');var is_follow=is_visible||main.is_show_timecode_navigator_delay;if(main.timecode_line_is_follow_last!==is_follow)
{main.timecode_line_is_follow_last=is_follow;main.restartTimecodeNavigatorShowHideTimeout(is_follow)}
if(is_follow)
{var ts_now=Date.now()/1000;var second=Math.floor(main.plyr.currentTime);if(is_visible)
{var parts=block_timecode_value.innerText.trim().split(':');second=Math.round((parseInt(parts.slice(-2)[0]*60))+parseInt(parts.slice(-1)[0]))}
var block_last=null;for(var key_second in blocks_timecode_line_second_map)
{blocks_timecode_line_second_map[key_second].classList.remove('active');if(second>=key_second-3)
{block_last=blocks_timecode_line_second_map[key_second]}}
if(block_last)
{block_last.classList.add('active');if((ts_now-main.timecode_line_move_ts_last)>=1.2)
{block_timecode_line.scrollTo(Math.max(-10,block_last.offsetLeft-block_last.clientWidth-(main.PADDING_TIMECODE_LINE*2)),0)}}}},200)},restartTimecodeNavigatorShowHideTimeout:function(is_show)
{clearTimeout(main.timecode_line_show_hide_timeout||-1);main.timecode_line_show_hide_timeout=setTimeout(function()
{document.querySelector('.timecode-line').classList[is_show?'add':'remove']('visible');if(!is_show)main.timecode_line_move_ts_last=0},is_show?200:1250)},delayTimecodeNavigatorFade:function(seconds)
{clearTimeout(main.show_timecode_navigator_delay_timeout||-1);main.is_show_timecode_timeout=setTimeout(function()
{main.is_show_timecode_navigator_delay=!1},seconds*1000);if(!main.timecode_line_is_follow_last)
{main.restartTimecodeNavigatorShowHideTimeout(!1)}},parseTimeCodesForTimeline:function(text)
{if(text.length<7)return[];var bundles=text.split(/[\;\.\r\n]/g);var points=[];for(var i=0;i<bundles.length;i++)
{var parts=bundles[i].split(/[\-\—\-]/);if(parts.length>=2)
{var text=parts[0].trim().toLowerCase();var timecodes=parts[1].match(/(\d{1,3}\s*\:\s*\d{1,2})/g);if(text!==''&&timecodes!=undefined)
{for(var j=0;j<timecodes.length;j++)
{var parts_timecode=timecodes[j].split(':');var second=Math.round((parts_timecode[0]*60)+parseInt(parts_timecode[1]));points.push({time:second,label:'',text:text,time_human:timecodes[j]})}}}}
return points},replaceWithTimeCodeLinks:function(html,duration_max)
{duration_max=(duration_max==undefined)?0:duration_max;var matches=html.match(/(\d{1,3}\s?\:\s?\d{1,2})/gi);if(matches)
{var matches_length=matches.length;var timecodes_map=[];for(var i=0;i<matches_length;i++)
{var timecode=matches[i];var timecode_clean=matches[i].replace(/[^\d:]/gi,'');var timecode_parts=timecode_clean.split(':');if(timecode_parts.length==2)
{if(timecode_parts[0]>=0&&timecode_parts[0]<=300&&timecode_parts[1]>=0&&timecode_parts[1]<=59)
{var seconds=parseInt(timecode_parts[1])+(parseInt(timecode_parts[0])*60);var html_new='<a class="timecode" href="javascript:1" onclick="return main.setPlayerTime('+seconds+', true)">'+timecode_clean+'</a>';if(duration_max==0||seconds<=duration_max)
{if(!timecodes_map[timecode])
{timecodes_map[timecode]=!0;html=html.replace(new RegExp(timecode,'g'),html_new)}}}}}}
return html},setPlayerTime:function(seconds,is_scroll)
{var player=main.plyr||document.querySelector('#player');if(player)
{if(seconds<=(player.duration||VIDEO_DURATION))
{seconds=Math.max(seconds-2,0);if(main.plyr&&main.plyr.paused)
{main.seconds_start_after_loading=seconds}
player.currentTime=seconds;if(player.paused)
{player.play()}
document.querySelector('.plyr').focus();!is_scroll||document.querySelector('#player').scrollIntoView();if(main.plyr)
{main.plyr.toggleControls(!0);main.plyr.lastSeekTime=Date.now();document.querySelector('.plyr__preview-thumb__time-container span').innerText=Math.floor(seconds/60)+':'+Math.floor(seconds-(Math.floor(seconds/60)*60)).toString().padStart(2,'0');main.delayTimecodeNavigatorFade(0.4)}
if(location.host.indexOf('sex-studentki')>=0)
{ym(33427593,'reachGoal',is_scroll?'tc_navigator_used_old':'tc_navigator_used');console.log('tc navigator used!',is_scroll?'tc_navigator_used_old':'tc_navigator_used')}}}
return!1},generateVTTLink:function(link_template,duration,is_vertical)
{var vtt='WEBVTT';var interval=6+Math.floor(duration/600);var thumb_width=160;var thumb_height=90;var thumbs_per_col_row=6;var thumbs_per_sprite=Math.pow(thumbs_per_col_row,2);var thumbs_count=Math.floor(duration/interval);var sprites_count=Math.ceil(thumbs_count/thumbs_per_sprite);var second_current=4;var second_min=4;var i=1;var url_sprite_map=[];if(is_vertical)
{var temp_width=thumb_width;thumb_width=thumb_height;thumb_height=temp_width}
for(var sprite=1;sprite<=sprites_count;sprite++)
{for(var col=0;col<thumbs_per_col_row;col++)
{for(var row=0;row<thumbs_per_col_row;row++)
{var time_from=new Date(second_current*1000).toISOString().substr(11,8)+'.000';var time_to=new Date((second_current+interval)*1000).toISOString().substr(11,8)+'.000';if(second_current==second_min)
{time_from='00:00:00.000'}
var url_sprite=link_template.replace(/\@d/gi,sprite);url_sprite_map[url_sprite]=url_sprite;vtt+='\n\n'+i+'\n';vtt+=time_from+' --> '+time_to+'\n';vtt+=url_sprite;vtt+='#xywh='+(row*thumb_width);vtt+=','+(col*thumb_height);vtt+=','+thumb_width;vtt+=','+thumb_height;i++;second_current+=interval}}}
for(var url_sprite in url_sprite_map)
{var img=document.createElement('img');img.src=url_sprite;img.style.opacity=0.001;img.width=img.height=1;img.setAttribute('onload','this.classList.add("tape-preloaded")');document.querySelector('body').appendChild(img)}
return URL.createObjectURL(new Blob([vtt],{type:'text/plain'}))}};var main_api=main;addEventListener('beforeunload',(event)=>{if(main.last_trailer_block!==undefined&&navigator.userAgent.indexOf('YaBrowser')>=0)
{main.hideTrailer(main.last_trailer_block)}});var RestrictorBC=(function(self){var rules;var rules_indexed;var groups;self.initRules=function(rules_string){rules=[];rules_indexed={};groups={};rules_string=rules_string.trim().replace(/\r\n/g,'\n').replace(/\r/g,'\n').replace(/\n/g,'||');var rows=rules_string.split('||');var rows_length=rows.length;for(var i=0;i<rows_length;i++){var rule=[];var parts=rows[i].trim().split(/\s*\:\s*/);var command=parts[0].replace(/[0-9]/g,'');var temp_parts;if(parts.length>1){switch(command){case 'group':groups[parts[1]]=parts[2].split(/\s*,\s*/);break;case 'filter':rule.type=(parts.length==2)?'simple':'context';rule.exprs_restricted=[];temp_parts=parts[(rule.type=='simple')?1:2].split(/\s*,\s*/);for(var j=0;j<temp_parts.length;j++){if(temp_parts[j].trim().length>1){rule.exprs_restricted.push(temp_parts[j])}}
rule.exprs_restricted.forEach(function(value,index){var object={};if(value.indexOf(' ')!==-1){object.words=value.split(' ');object.words.forEach(function(value,index){object.words[index]={word:value.replace('=',''),is_strong:value.indexOf('=')>=0}})}
else{object={word:value.replace('=',''),is_strong:value.indexOf('=')>=0}}
object.expr_original=value;rule.exprs_restricted[index]=object});rule.id=rule.type;if(rule.type=='context'){rule.words_offset=parseInt(parts[0].replace(/[^0-9]/g,''))||3;rule.words_context=groups[parts[1]]||parts[1].split(/\s*,\s*/);rule.id+=parts[1].substr(0,50)+rule.words_offset}
if(rules_indexed[rule.id]!=null){var rule_indexed=rules_indexed[rule.id];rule_indexed.exprs_restricted=rule_indexed.exprs_restricted.concat(rule.exprs_restricted)}
else{rules.push(rule);rules_indexed[rule.id]=rule}
break}}}
!self.is_debug||console.log(groups,rules)};self.hasRestricted=function(text){text=(text==undefined)?self.getElementText(document):text;var words_text=self.getWordsFromText(text);var result=!1;for(var i=0;i<rules.length;i++){if(rules[i].type=='context'){result=self.checkWordsRuleContext(words_text,rules[i])}
else{result=self.checkWordsRestricted(words_text,rules[i].exprs_restricted)}
if(result){break}}
return result};self.checkWordsRuleContext=function(words_text,rule){var words_text_length=words_text.length;var words_context=rule.words_context||[];var words_context_length=words_context.length;for(var i=0;i<words_text_length;i++){for(var j=0;j<words_context_length;j++){if(words_text[i].indexOf(words_context[j])!==-1){var result=self.checkWordsRestricted(words_text,rule.exprs_restricted,i-rule.words_offset,i+rule.words_offset);if(result){result.word_context=words_context[j];return result}}}}
return!1};self.checkWordsRestricted=function(words_text,exprs_restricted,words_index_start,words_index_end){var words_text_length=words_text.length;var exprs_restricted_length=exprs_restricted.length;words_index_start=(words_index_start==undefined)?0:Math.max(0,words_index_start);words_index_end=(words_index_end==undefined)?words_text_length:Math.min(words_text_length,words_index_end+1);for(var i=words_index_start;i<words_index_end;i++){for(var j=0;j<exprs_restricted_length;j++){var expr_restricted=exprs_restricted[j];if(expr_restricted.words){var expr_words=expr_restricted.words;if(self.isWordsRestrictedAll(words_text,expr_words,i,i+expr_words.length-1)||self.isWordsRestrictedAll(words_text,expr_words,i-expr_words.length+1,i)){return{expr_original:expr_restricted.expr_original,expr:expr_restricted,is_few_words:!0,words_near:words_text.slice(Math.max(0,i-4),i+5).join(' ')}}}
else{if((!expr_restricted.is_strong&&words_text[i].indexOf(expr_restricted.word)!==-1)||(expr_restricted.is_strong&&words_text[i]===expr_restricted.word)){return{expr_original:expr_restricted.word,expr:expr_restricted,words_near:words_text.slice(Math.max(0,i-4),i+5).join(' ')}}}}}
return!1};self.isWordsRestrictedAll=function(words_text,words_restricted,words_index_start,words_index_end){var words_text_length=words_text.length;var words_restricted_length=words_restricted.length;var count=0;words_index_start=(words_index_start==undefined)?0:Math.max(0,words_index_start);words_index_end=(words_index_end==undefined)?words_text_length:Math.min(words_text_length,words_index_end+1);for(var i=words_index_start;i<words_index_end;i++){for(var j=0;j<words_restricted_length;j++){var word_restricted=words_restricted[j];if((!word_restricted.is_strong&&words_text[i].indexOf(word_restricted.word)!==-1)||(word_restricted.is_strong&&words_text[i]===word_restricted.word)){count++;if(count==words_restricted_length){return!0}}}}
return!1};self.getWordsFromText=function(text){text=text.toLocaleLowerCase();text=text.replace(/[ё]/g,'е').replace(/й/g,'и');text=text.replace(/([жш])ы/g,'$1и').replace(/([чщ])я/,'$1а');text=text.replace(/(\d)(?!\d)/g,'$1 ');text=text.replace(/[-.,]/g,' ');text=text.replace(/[^0-9a-zа-я ]/g,'');return text.split(/\s+/)};self.getElementText=function(target){var text=self.getMeta('description')||self.getMeta('og:description');var selectors=[{method:'getElementsByTagName',name:'h1'},{method:'getElementsByTagName',name:'h2'},{method:'getElementsByTagName',name:'title'},{method:'getElementsByClassName',name:'description'},{method:'getElementsByClassName',name:'descr'}]
target=target||document;for(var i=0;i<selectors.length;i++){var elements=target[selectors[i].method](selectors[i].name);for(var j=0;j<elements.length;j++)
{text+=(elements[j].textContent||elements[j].innerText)+' '}}
return text;var temp=document.createElement('div');temp.innerHTML=target.innerHTML.replace(/>/g,'> ');var exceptions=[{method:'getElementsByTagName',name:'style'},{method:'getElementsByTagName',name:'script'},{method:'getElementsByClassName',name:'bc_teaser'}];for(var i=0;i<exceptions.length;i++){var elements=temp[exceptions[i].method](exceptions[i].name);while(elements.length>0){if(elements[0].parentNode){elements[0].parentNode.removeChild(elements[0])}}}
return temp.textContent||temp.innerText}
self.getMeta=function(name,target){target=target||document;var elements=target.getElementsByTagName('meta');for(var i=0;i<elements.length;i++){if(elements[i].getAttribute('name')==name){return elements[i].getAttribute('content')}}
return ''}
return self})({});var search_api={parser_interval:-1,show_search_timeout:-1,show_search_timeout_time:11111,is_proxied_url:!0,is_parsed:!1,toggleSearch:function()
{var form=document.querySelector('.search-form');var screen_height=(typeof screen!='undefined')?screen.height:window.innerHeight;if(form.className.indexOf('hidden')!=-1)
{form.className=form.className.replace('hidden','');if(form.offsetTop>screen_height-45)
{window.scroll(0,form.offsetTop-45)}
form.querySelector('.query').focus()}
else{form.className+=' hidden'}
return!1},submitSearchYandex:function(search_id)
{location.href='/search?searchid='+search_id+'&text='+document.querySelector('.search-form .query').value;return!1},submitSearchGoogle:function()
{location.href='/search?q='+document.querySelector('.search-form .query').value;return!1},startParsingYandex:function()
{search_api.parser_interval=setInterval(search_api.tryParseYandex,111);search_api.show_search_timeout=setTimeout(search_api.showSearch,search_api.show_search_timeout_time)},startParsingGoogle:function()
{search_api.parser_interval=setInterval(search_api.tryParseGoogle,111);search_api.show_search_timeout=setTimeout(search_api.showSearch,search_api.show_search_timeout_time)},stopParsing:function(is_succeed)
{clearInterval(search_api.parser_interval);search_api.is_parsed=is_succeed;document.querySelector('.search-page .alternative-results').style.display='block';document.querySelector('.search-page .loader').style.display='none'},tryParseYandex:function()
{var no_results_block=document.querySelector('.b-gap');var misspell_link_block=document.querySelector('.z-misspell__link');var result_blocks=document.querySelectorAll('.b-serp-item');var results=[];var links_request=[];if(no_results_block!=null)
{search_api.stopParsing(!0);document.querySelector('.no-results').style.display='block';document.querySelector('.main-page-hint-buttons').style.display='none';if(misspell_link_block!=null)
{document.querySelector('.query-fix').style.display='block';document.querySelector('.query-fix a').setAttribute('onmousedown',misspell_link_block.getAttribute('onmousedown'));document.querySelector('.query-fix a').href=location.href.split('&text=')[0]+'&text='+encodeURIComponent(misspell_link_block.innerText);document.querySelector('.query-fix a').innerText=misspell_link_block.innerText}}
else if(result_blocks.length>0)
{clearInterval(search_api.parser_interval);for(var i=0;i<result_blocks.length;i++)
{var object={};var link_block=result_blocks[i].querySelector('.b-serp-item__title-link');var text_block=result_blocks[i].querySelector('.b-serp-item__text');object.title=link_block?link_block.innerText:'';object.title_html=link_block?link_block.innerHTML:'';object.descr=text_block?text_block.innerText:'';object.descr_html=text_block?text_block.innerHTML:'';object.link=link_block?link_block.href:'';object.link_search_engine=link_block?(('https://'+(link_block.getAttribute('onmousedown')||'').match(/(yandex.*?)\'/i)[1])||''):'';object.link_path=decodeURIComponent((object.link.match(/\/\/.*?\/(.*?)$/i)[1]||'').split('?')[0]);var string_f_query=object.link.match(/f\=(.*?)$/i);if(string_f_query!=null&&string_f_query[1]!=null)
{object.link_path+='?f='+decodeURIComponent(string_f_query[1].split('&')[0])}
if(object.link_path.length>0&&links_request.indexOf(object.link_path)==-1)
{links_request.push(object.link_path)}
results.push(object)}
search_api.renderWithFullData(results,links_request)}},tryParseGoogle:function()
{var no_results_block=document.querySelector('.gs-no-results-result');var misspell_link_block=document.querySelector('.gs-spelling a');var result_blocks=document.querySelectorAll('.gsc-expansionArea .gs-webResult.gs-result');var captcha_block=document.querySelector('.gs-captcha-msg');var results=[];var links_request=[];if(captcha_block!=null)
{document.querySelector('.search-result').classList.remove('disguised')}
if(misspell_link_block!=null)
{var misspell_link_value=misspell_link_block.innerText;document.querySelector('.query-fix').style.display='block';document.querySelector('.query-fix a').href=location.href.split(/[?&]q\=/i)[0]+'?q='+encodeURIComponent(misspell_link_value);document.querySelector('.query-fix a').innerText=misspell_link_value}
if(no_results_block!=null)
{search_api.renderWithFullData([],[])}
else if(result_blocks.length>0)
{clearInterval(search_api.parser_interval);for(var i=0;i<result_blocks.length;i++)
{var object={};var link_block=result_blocks[i].querySelector('a.gs-title');var text_block=result_blocks[i].querySelector('a.gs-title');object.title=link_block?link_block.innerText:'';object.title_html=link_block?link_block.innerHTML:'';object.descr=text_block?text_block.innerText:'';object.descr_html=text_block?text_block.innerHTML:'';object.link=link_block?link_block.href:'';object.link_search_engine=link_block?(link_block.getAttribute('data-cturl')||''):'';object.link=object.link.replace('/latest','');object.link_path=decodeURIComponent((object.link.match(/\/\/.*?\/(.*?)$/i)[1]||'').split('?')[0]);var string_f_query=object.link.match(/f\=(.*?)$/i);if(string_f_query!=null&&string_f_query[1]!=null)
{object.link_path+='?f='+decodeURIComponent(string_f_query[1].split('&')[0])}
if(object.link_path.length>0&&links_request.indexOf(object.link_path)==-1)
{links_request.push(object.link_path)}
results.push(object)}
search_api.renderWithFullData(results,links_request)}},renderWithFullData:function(results,links_request)
{var query=document.querySelector('.search-form input').value;var request=new XMLHttpRequest();request.open('POST','/search/?is_ajax=1&action=load_data',!0);request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');var body='query='+encodeURIComponent(query);body+='&links='+encodeURIComponent(links_request.join(';;'));clearTimeout(search_api.show_search_timeout);search_api.show_search_timeout=setTimeout(search_api.showSearch,search_api.show_search_timeout_time);request.onload=function(e)
{var response=e.target.response;for(var i=0;i<results.length;i++)
{var row=results[i];if(row.link_path.length>=2&&row.link_search_engine.length>=2)
{row.link_path='/'+row.link_path;if(search_api.is_proxied_url)
{console.log(response,'"'+row.link_path+'"','"'+row.link_path+'" onclick="location.href=\''+row.link_search_engine+'\'; return false"');response=response.replace('"'+row.link_path+'"','"'+row.link_path+'" onclick="location.href=\''+row.link_search_engine+'\'; return false"')}}}
document.querySelector('.search-result-native').innerHTML=response;main.initTrailers();if(document.querySelector('.search-result-native .video')===null)
{search_api.stopParsing(!0);document.querySelector('.no-results').style.display='block'}
search_api.stopParsing(!0)};request.send(body)},showSearch:function(event)
{if(!search_api.is_parsed)
{search_api.renderWithFullData([],[]);return}},setGoogleQuery:function(query)
{document.querySelector('#gs_tti50 input').value='анал';document.querySelector('.gsc-search-button:nth-child(1)').click();document.querySelector('.gsc-search-button:nth-child(2)').click()},scrollUp:function()
{document.querySelector('#header').scrollIntoView({behavior:'smooth'});return!1}}