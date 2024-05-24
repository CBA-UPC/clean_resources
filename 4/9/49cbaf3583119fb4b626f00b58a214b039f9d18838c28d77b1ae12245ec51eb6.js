(function(win,err,$){"use strict";$(function(){if(!$("body").hasClass("single-linksdossier")){return;}
if(!win.EA||!win.EA.collapsible){return err("win.EA.collapsible not loaded");}
$(".ea-article-custom-item.ea-linksdossier").each(function(){var handle=win.EA.collapsible.create(this,">h4",">div");win.EA.collapsible.collapse(handle);});});}(window,window.console.error,jQuery));function ea_pb_drop(el){var childs=el.childNodes;var brother=el.nextSibling;if(childs[0].classList.contains('fa-angle-down')){brother.style.display='block';childs[0].classList.remove('fa-angle-down');childs[0].classList.add('fa-angle-up');}else{brother.style.display='none';childs[0].classList.remove('fa-angle-up');childs[0].classList.add('fa-angle-down');}}
jQuery(document).ready(function(){jQuery(".step").click(function(){var div=$(this).first('div');var description=div.html();alert(description);});});jQuery(document).ready(function($){var $timeline_block=$('.cd-timeline-block');$timeline_block.each(function(){if($(this).offset().top>$(window).scrollTop()+$(window).height()*0.75){$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');}});$(window).on('scroll',function(){$timeline_block.each(function(){if($(this).offset().top<=$(window).scrollTop()+$(window).height()*0.75&&$(this).find('.cd-timeline-img').hasClass('is-hidden')){$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');}});});});(function(win,err,$){"use strict";win.EA=win.EA||{};$(function(){if(!win.EA.collapsible){return err("win.EA.collapsible not defined");}
var fn=win.EA.collapsible.breakpoint;fn(".ea-tagcloud",">h3",">ul",true);});}(window,window.console.error,jQuery));(function(win,err,$){"use strict";win.googletag=win.googletag||{};win.googletag.cmd=win.googletag.cmd||[];win.googletag.slots=win.googletag.slots||{};win.ea_dfp_bsm=win.ea_dfp_bsm||{};$(function(){var slots=$(".ea-gat-slot");slots.each(function(){var el=$(this);var opt_div=el.attr("id");var ad_unit_path=el.data("adunitpath");var size=el.data("size").split(",");var size2=el.data("size2").split(",");var pos=$(this).data("pos");var sr_value=$(this).data("value");size[0]=parseInt(size[0],10);size[1]=parseInt(size[1],10);size2[0]=parseInt(size2[0],10);size2[1]=parseInt(size2[1],10);win.googletag.cmd.push(function(){var slot=win.googletag.defineSlot(ad_unit_path,[size,size2],opt_div);slot.setTargeting("pos",pos);slot.setTargeting("specialreport",sr_value);slot.addService(win.googletag.pubads());win.googletag.slots[opt_div]=slot;});});win.googletag.cmd.push(function(){if(Object.keys(win.ea_dfp_bsm).length>0){if(win.ea_dfp_bsm.tags.length===1){win.googletag.pubads().setTargeting('Tags',win.ea_dfp_bsm.tags[0]);}
if(win.ea_dfp_bsm.tags.length>1){win.googletag.pubads().setTargeting('Tags',win.ea_dfp_bsm.tags);}
if(win.ea_dfp_bsm.sections.length===1){win.googletag.pubads().setTargeting('Section',win.ea_dfp_bsm.sections[0]);}
if(win.ea_dfp_bsm.sections.length>1){win.googletag.pubads().setTargeting('Section',win.ea_dfp_bsm.sections);}
if(win.ea_dfp_bsm.url.length>0){win.googletag.pubads().setTargeting('URL',win.ea_dfp_bsm.url);}}
win.googletag.pubads().enableAsyncRendering();win.googletag.pubads().enableSingleRequest();win.googletag.pubads().collapseEmptyDivs();win.googletag.enableServices();});slots.each(function(){var opt_div=$(this).attr("id");win.googletag.cmd.push(;});});}(window,window.console.error,jQuery));(function(win,doc,$){"use strict";win.EA=win.EA||{};win.EA.rss_formatters=win.EA.rss_formatters||{};function create(tag,classes){var el=$(doc.createElement(tag));if(classes){el.addClass(classes);}
return el;}
function blogactiv_avatar(url,classes){var proto="http:";if(win.location.protocol==="https:"){proto="https:";}
var img=doc.createElement("IMG");var a=doc.createElement("A");a.href=url;img.src=url;if(win.EA.lazy_load){img=win.EA.lazy_load.convert(img);}
img=$(img);img.addClass(classes);return img;}
function blogactiv_formatter(item){var outer=create("LI","media");var avatar_wrap=create("DIV","media-left");var link_avatar=item.enclosure;var avatar=blogactiv_avatar(link_avatar,"media-object");var body_wrap=create("DIV","media-body");var title=create("H4","media-heading");var link=create("A");avatar.css({height:64,width:64});title.text(item.title);link.attr("href",item.link);link.attr("target","_blank");outer.append(avatar_wrap);avatar_wrap.append(avatar);outer.append(body_wrap);body_wrap.append(title);title.wrapInner(link);avatar.wrap(link);return outer;}
win.EA.rss_formatters=win.EA.rss_formatters||{};win.EA.rss_formatters.blogactiv=blogactiv_formatter;}(window,document,jQuery));(function(win,err,$){"use strict";win.EA=win.EA||{};$(function(){if(!win.EA.collapsible){return err("win.EA.collapsible not defined");}
var fn=win.EA.collapsible.breakpoint;fn("aside.ea-content-hint-popular",">h3",">ul",true);fn("aside.ea-content-hint-related",">h3",">ul",true);});}(window,window.console.error,jQuery));(function(win,err,$){"use strict";$(function(){if(!win.EA||!win.EA.data||!win.EA.data("euractory.profile")){return;}
if(!win.EA||!win.EA.euractory){err("Euractory script not loaded");return;}
function localize(icon,str){icon="<i class=\"fa fa-"+icon+"\"></i>";str=win.EA.data("euractory.i18n."+str)||str;return icon+" "+str;}
var e=win.EA.euractory;e.localize({"Latest tweets":localize("twitter","latest_tweets"),"Expert at:":localize("bookmark-o","expert_at"),"Latest news":localize("newspaper-o","latest_news")});e.profile(win.EA.data("euractory.profile"),"#euractory-profile-embed");var interval;function bootstrap(){if(!$("#euractory-profile-embed").length){clearInterval(interval);return;}
if($(".euractory-profile").length){clearInterval(interval);$(".euractory-card h2").hide();$(".euractory-card h4").css("margin-top",0);$(".euractory-accordion-title a").first().trigger("click");$(".euractory-profile").closest("aside").css("margin-top",0);}}
interval=setInterval(bootstrap,500);});}(window,window.console.error,jQuery));(function(win,doc,$){"use strict";var queue=[];var wrap=$(doc.createElement("DIV")).attr("id","ea-breakpoint-measure");var spans={};var state={previous:"",current:""};var debug_enabled=false;function debug_message(){if(debug_enabled){console.error("Breakpoint debug message",arguments);}}
function add_span(bp){var span=$(doc.createElement("SPAN"));span.addClass("visible-"+bp+"-inline").text(bp);spans[bp]=span;wrap.append(span);}
function is_function_or(obj,fallback){if(obj&&obj.constructor&&obj.call&&obj.apply){return obj;}
return fallback;}
function normalize(xs,sm,md,lg){var callbacks={};callbacks.xs=is_function_or(xs,noop);callbacks.sm=is_function_or(sm,callbacks.xs);callbacks.md=is_function_or(md,callbacks.sm);callbacks.lg=is_function_or(lg,callbacks.md);return callbacks;}
function do_call(callbacks){debug_message("Running callback",state,callbacks);callbacks[state.current].call(undefined,state);}
function update(){state.previous=state.current;if(spans.lg.is(":visible")){state.current="lg";}else if(spans.md.is(":visible")){state.current="md";}else if(spans.sm.is(":visible")){state.current="sm";}else{state.current="xs";}
if(state.previous!==state.current){debug_message("State changed",state);$.each(queue,function(){do_call(this);});state.previous=state.current;}}
function watch(xs,sm,md,lg){var callbacks=normalize(xs,sm,md,lg);if(state.current){debug_message("immediate call");do_call(callbacks);}
debug_message("enqueuing",callbacks);queue.push(callbacks);}
function debug(enable){if(enable!==true&&enable!==false){enable=!debug_enabled;}
debug_enabled=enable;if(debug_enabled){wrap.css({color:"white",background:"red"});return"enabled";}
wrap.css({color:"transparent",background:"none"});return"disabled";}
function bootstrap(){add_span("xs");add_span("sm");add_span("md");add_span("lg");wrap.css({position:"fixed",zIndex:5,bottom:0,right:0,color:"transparent"}).appendTo($("body"));debug(debug_enabled);update();var timeout;$(win).on("resize",;}
win.EA=win.EA||{};win.EA.breakpoint={watch:watch,debug:debug};$(bootstrap);}(window,document,jQuery));(function(win,doc,err,$){"use strict";win.EA=win.EA||{};win.EA.clickable=function(block_selector,link_selector){$(block_selector).each(function(){var block_element=$(this);var link=block_element.find(link_selector);if(!link.length){err("Could not find link element",{block_element:block_element,block_selector:block_selector,link_selector:link_selector});return;}
block_element.data("eaclickable",link.prop("href"));block_element.css({cursor:"pointer"});block_element.on("click",function(e){if(e.target.nodeName.toUpperCase()==="A"){return;}
var href=$(this).data("eaclickable");if(href){link.css("text-decoration","underline");doc.location.href=href;}});});};}(window,document,window.console.error,jQuery));(function(win,doc,err,$){"use strict";var collapsibles={};var get_handle=(function(){var count=0;return function(){count+=1;return"collapsible_"+count;};}());function handle_to_collapsible(callback){return function(handle){var collapsible=collapsibles[handle];if(collapsible){callback.call(undefined,collapsible);}else{err("Handle does not reference an existing collapsible");}};}
function collapsible_to_handle(callback){return function(){var collapsible=callback.apply(undefined,arguments);if(collapsible){return collapsible.handle;}
return undefined;};}
function collapse(collapsible){collapsible.icon.removeClass("fa-angle-up").addClass("fa-angle-down");collapsible.panel.hide();}
function expand(collapsible){collapsible.icon.removeClass("fa-angle-down").addClass("fa-angle-up");collapsible.panel.show();}
function toggle(collapsible){if(collapsible.panel.is(":visible")){collapse(collapsible);}else{expand(collapsible);}}
function destroy(collapsible){expand(collapsible);collapsible.title.html(collapsible.link.html());collapsible.title.off("click");collapsible.wrap.data("collapsible-handle","");if(collapsibles[collapsible.handle]){delete collapsibles[collapsible.handle];}}
function find(wrap_selector){var wrap=$(wrap_selector).first();if(!wrap.length){return undefined;}
var handle=wrap.data("collapsible-handle");if(handle&&collapsibles[handle]){return collapsibles[handle];}
return undefined;}
function create(wrap_selector,title_selector,panel_selector){var wrap=$(wrap_selector).first();var title=wrap.find(title_selector);var panel=wrap.find(panel_selector);if(!wrap.length||!title.length||!panel.length){return;}
if(wrap.data("collapsible-handle")){return err("Element is already collapsible",wrap);}
var handle=get_handle();var link=$(doc.createElement("A")).attr("href","#").css("color","inherit").html(title.html());var icon=$(doc.createElement("I")).addClass("fa fa-angle-up").css("margin-right","1em");title.html("").append(icon).append(link);wrap.data("collapsible-handle",handle);var collapsible={wrap:wrap,title:title,panel:panel,icon:icon,link:link,handle:handle};title.on("click",;collapsibles[handle]=collapsible;return collapsible;}
function breakpoint(wrap_selector,title_selector,panel_selector,xs,sm,md,lg){if(!win.EA||!win.EA.breakpoint){return err("window.EA.breakpoint not loaded");}
var check={xs:xs,sm:sm,md:md,lg:lg};win.EA.breakpoint.watch(function(state){var collapsible=find(wrap_selector);var show=check[state.current];if(show!==undefined){if(!collapsible){collapsible=create(wrap_selector,title_selector,panel_selector);}
if(show&&collapsible){collapse(collapsible);}}else{if(collapsible){destroy(collapsible);}}});}
win.EA=window.EA||{};win.EA.collapsible={create:collapsible_to_handle(create),find:collapsible_to_handle(find),destroy:handle_to_collapsible(destroy),toggle:handle_to_collapsible(toggle),expand:handle_to_collapsible(expand),collapse:handle_to_collapsible(collapse),breakpoint:breakpoint};}(window,document,window.console.error,jQuery));!}}}(jQuery),jQuery(document).re})}),jQuery(window).on("lo")});(function(win,err,$){"use strict";var $win=$(win);var viewport={top:0,bottom:0};var queue=[];var timeouts={};function delayed_action(milliseconds,handle,callback){if(timeouts[handle]){clearTimeout(timeouts[handle]);}
timeouts[handle]=setTimeout(callback,milliseconds);}
function refresh_viewport(){viewport.top=$win.scrollTop();viewport.bottom=viewport.top+$win.height();}
function calculate_obj_offsets(obj){obj.top=obj.jq_element.offset().top;obj.bottom=obj.top+obj.jq_element.height();}
function refresh_queue(){$.each(qu);});}
function fire_if_visible(obj){if(obj.top>viewport.bottom){return false;}
if(obj.bottom<viewport.top){return false;}
if(!obj.jq_element.is(":visible")){return false;}
setTime);},10);return true;}
function process_queue(){var requeue=[];var obj;while(queue.length){obj=queue.pop();if(!fire_if_visible(obj)){requeue.push(obj);}}
queue=requeue;}
function attach(element,callback){if(!element||element.nodeType!==1){err("Invalid element for onvisible");}
var obj={element:element,callback:callback,jq_element:$(element)};calculate_obj_offsets(obj);if(!fire_if_visible(obj)){queue.push(obj);}}
function resize_event(){delayed_action(250,"viewport",refresh_viewport);delayed_action(260,"queue",refresh_queue);delayed_action(300,"process",process_queue);}
function scroll_event(){delayed_action(250,"viewport",refresh_viewport);delayed_action(300,"process",process_queue);}
$win.on("resize",resize_event);$win.on("scroll",scroll_event);$(resize_event);setInterval(resize_event,5000);win.EA=win.EA||{};win.EA.onvisible=attach;}(window,window.console.error,jQuery));