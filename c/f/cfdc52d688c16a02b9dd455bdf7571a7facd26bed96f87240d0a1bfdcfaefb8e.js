var thirstyFunctions;jQuery(document).ready(function($){thirstyFunctions={recordLinkStatEvents:function(){if(thirsty_global_vars.enable_record_stats=='yes')
$('body').on('click','a',thirstyFunctions.recordLinkStat);},recordLinkStat:function(e){var $link=$(this),href=$link.attr('href'),linkID=$link.data('linkid'),keyword=$link[0].innerText,qs=href?href.split('?')[1]:'',imgsrc,newWindow,monsterInsightsOnBeforeUnload;if(!keyword)keyword=$link.text();if(!thirstyFunctions.isThirstyLink(href)&&!linkID)return;if($link.data('thirstypay')){return;}
if($link.data("clicked")){e.preventDefault();return;}
$link.data("clicked",true);if(!keyword&&$link.find('img').length){imgsrc=$link.find('img').prop('src').split('/');keyword=imgsrc[imgsrc.length-1];}
if(thirsty_global_vars.enable_js_redirect==='yes'&&$link.data('nojs')!=true){e.preventDefault();if($link.prop('target')=='_blank'&&!thirstyFunctions.disableNewWindow()){newWindow=window.open('','_blank');}else if(window.MonsterInsightsObject){setTimeout(function(){if(typeof window.onbeforeunload==='function'){monsterInsightsOnBeforeUnload=window.onbeforeunload;}},50);}}
$.post(thirsty_global_vars.ajax_url,{action:'ta_click_data_redirect',href:href,page:window.location.href,link_id:linkID,keyword:keyword,qs:qs},function(redirect_url){$link.data("clicked",false);if(thirsty_global_vars.enable_js_redirect!=='yes'||$link.data('nojs')==true)
return;if(newWindow){newWindow.location.href=redirect_url?redirect_url:href;}else{if(typeof monsterInsightsOnBeforeUnload==='function'&&window.onbeforeunload===null){window.onbeforeunload=monsterInsightsOnBeforeUnload;}
window.location.href=redirect_url?redirect_url:href;}}).fail(function(){$link.data("clicked",false);if(thirsty_global_vars.enable_js_redirect!=='yes'||$link.data('nojs')==true)
return;if(newWindow){newWindow.location.href=href;}else{if(typeof monsterInsightsOnBeforeUnload==='function'&&window.onbeforeunload===null){window.onbeforeunload=monsterInsightsOnBeforeUnload;}
window.location.href=href;}});},disableNewWindow:isThirstyLink:linkFixer:function(){if(thirsty_global_vars.link_fixer_enabled!=='yes')
return;var $allLinks=$('body a'),hrefs=[],href,linkClass,isShortcode,isImage,key;for(key=0;key<$allLinks.length;key++){href=$($allLinks[key]).attr('href');linkClass=$($allLinks[key]).attr('class');isShortcode=$($allLinks[key]).data('shortcode');isImage=$($allLinks[key]).has('img').length;href=thirstyFunctions.isThirstyLink(href);if(href&&!isShortcode)
hrefs.push({key:key,class:linkClass,href:href,is_image:isImage});$($allLinks[key]).removeAttr('data-shortcode');}
if(hrefs.length<1)
return;$.post(thirsty_global_vars.ajax_url,{action:'ta_link_fixer',hrefs:hrefs,post_id:thirsty_global_vars.post_id},function(response){if(response.status=='success'){for(var x in response.data){if(typeof response.data[x]!='object')continue;var key=response.data[x]['key'],hrefProp=$($allLinks[key]).prop('href'),qs=hrefProp?hrefProp.split('?')[1]:'',href=response.data[x]['href'],title=response.data[x]['title'],className=response.data[x]['class'],thirstypay=response.data[x]['thirstypay'],connector;if(qs&&response.data[x]['pass_qs']){connector=href.indexOf('?')<0?'?':'&';href=href+connector+qs;}
href=href.replace('http:',window.location.protocol).replace('https:',window.location.protocol);if(title)
$($allLinks[key]).prop('title',title);else
$($allLinks[key]).removeAttr('title');if(thirsty_global_vars.disable_thirstylink_class=='yes')
className=className.replace('thirstylinkimg','').replace('thirstylink','').trim();if(className)
$($allLinks[key]).prop('class',className);else
$($allLinks[key]).removeAttr('class');$($allLinks[key]).prop('href',href).prop('rel',response.data[x]['rel']).prop('target',response.data[x]['target']).attr('data-linkid',response.data[x]['link_id']);if(thirstypay){$($allLinks[key]).attr('data-thirstypay',true);}
if(thirsty_global_vars.enable_js_redirect==='yes')
$($allLinks[key]).attr('data-nojs',response.data[x]['nojs']);}}},'json');}}
var link_prefixes=$.map(thirsty_global_vars.link_prefixes,;thirstyFunctions.recordLinkStatEvents();thirstyFunctions.linkFixer();});