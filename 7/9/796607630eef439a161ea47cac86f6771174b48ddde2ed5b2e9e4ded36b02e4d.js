(function(){function l(b,a,c){var e="undefined"!==typeof opeVisitURL?"\x26visiturl\x3d"+encodeURIComponent(opeVisitURL):"",f="url\x3d"+encodeURIComponent(window.location.href),g="ref\x3d"+encodeURIComponent(document.referrer),d="tz\x3d"+encodeURIComponent((new Date).getTimezoneOffset()/60),k="screen\x3d"+encodeURIComponent(screen.width+"x"+screen.height+"x"+screen.colorDepth);b="cmpstatus\x3d"+b;c="uspstatus\x3d"+c;a="tcString\x3d"+a;try{var h=window.top.document.referrer}catch(q){h="NA"}h="tref\x3d"+
encodeURIComponent(h);e="?"+f+"\x26"+g+e+"\x26"+d+"\x26"+k+"\x26"+h+"\x26"+b+"\x26"+a+"\x26"+c;f="";if("undefined"!==typeof opeCustomEvents&&void 0!==opeCustomEvents.length&&0<opeCustomEvents.length){f=encodeURIComponent;g=opeCustomEvents;d="";if(void 0!==g.length&&0<g.length)for(k=",",b=0;b<g.length;b++)b===g.length-1&&(k=""),h=JSON.stringify(g[b]),d=[d,h,k].join("");f="\x26e\x3d"+f("["+d+"]")}(new Image).src="https://tagger.opecloud.com/nextms/v2/pixel.gif"+e+f}function d(b){if("string"===typeof b){var a=
new XMLHttpRequest;a.open("GET","https://tagger.opecloud.com/nextms/v2/metrics/"+b);a.send()}}function m(b,a){setTimeout(function(){var c=window;for(var e;!e;){try{if(c.frames.__tcfapiLocator){e=c;break}}catch(f){}if(c===window.top)break;c=c.parent}(c=e)?c?c.postMessage({__tcfapiCall:{command:"addEventListener",version:2,callId:n}},"*"):d("cmp-not-found-illegal-state"):0<a?(d("cmp-search-retry"),m(b,a-1)):d("cmp-search-timeout")},b)}var n=Math.random()+"",p=!1;window.addEventListener("message",function(b){var a=
{};try{a="string"===typeof b.data?JSON.parse(b.data):b.data}catch(c){}if((b=a.__tcfapiReturn)&&b.callId===n)if(p=!0,a=b.returnValue,b.success){if("tcloaded"===a.eventStatus||"useractioncomplete"===a.eventStatus)!1===a.gdprApplies?l("gdprdoesnotapply"):a.vendor.consents[92]&&(a.purpose.consents[1]||a.purpose.legitimateInterests[1])&&(a.purpose.consents[3]||a.purpose.legitimateInterests[3])&&(a.purpose.consents[5]||a.purpose.legitimateInterests[5])?l("cmpconsent",a.tcString):d("cmp-request-without-consent")}else d("cmp-get-tc-data-failed")},
!1);m(5,3);setTimeout(function(){p||d("cmp-message-delay")},5E3)})();nction(i){var option=$(this).text();var key=$(this).val();keys.push(option.charAt(0).toLowerCase());if($(this).attr('selected')=='selected'||$(this).attr('selected')==true){opts.defaultText=option;currentIndex=prevIndex=i;}
$newUl.append($('<li><a href="JavaScript:void(0);">'+option+'</a></li>').data('key',key));});$newLi=$newUl.children().children();}else{$input.children('optgroup').each(function(){var optionTitle=$(this).attr('label'),$optGroup=$('<li class="newListOptionTitle">'+optionTitle+'</li>'),$optGroupList=$('<ul></ul>');$optGroup.appendTo($newUl);$optGroupList.appendTo($optGroup);$(this).children().each(function(){++itemIndex;var option=$(this).text();var key=$(this).val();keys.push(option.charAt(0).toLowerCase());if($(this).attr('selected')=='selected'||$(this).attr('selected')==true)
{opts.defaultText=option;currentIndex=prevIndex=itemIndex;}
$optGroupList.append($('<li><a href="JavaScript:void(0);">'+option+'</a></li>').data('key',key));})});$newLi=$newUl.find('ul li a');}
var newUlHeight=$newUl.height(),containerHeight=$containerDiv.height(),newLiLength=$newLi.length;if(currentIndex!=-1){navigateList(currentIndex);}else{$containerDivText.text(opts.defaultText);}
function newUlPos(){var containerPosY=$containerDiv.offset().top,docHeight=$(window).height(),scrollTop=$(window).scrollTop();if(newUlHeight>parseInt(opts.ddMaxHeight)){newUlHeight=parseInt(opts.ddMaxHeight);}
containerPosY=containerPosY-scrollTop;if(containerPosY+newUlHeight>=docHeight){$newUl.css({height:newUlHeight});$containerDivWrapper.css({top:'-'+newUlHeight+'px',height:newUlHeight});$input.onTop=true;}else{$newUl.css({height:newUlHeight});$containerDivWrapper.css({top:containerHeight+'px',height:newUlHeight});$input.onTop=false;}}
newUlPos();$(window).bind('resize.sSelect scroll.sSelect',newUlPos);function positionFix(){$containerDiv.css('position','relative');}
function positionHideFix(){$containerDiv.css({position:'static'});}
$containerDivText.bind('click.sSelect',function(event){event.stopPropagation();if($(this).data('ssReRender')){newUlHeight=$newUl.height('').height();$containerDivWrapper.height('');containerHeight=$containerDiv.height();$(this).data('ssReRender',false);newUlPos();}
$('.SSContainerDivWrapper').not($(this).next()).hide().parent().css('position','static').removeClass('newListSelFocus');$containerDivWrapper.toggle();positionFix();if(currentIndex==-1)currentIndex=0;$newLi.eq(currentIndex).focus();});function closeDropDown(fireChange,resetText){if(fireChange==true){prevIndex=currentIndex;$input.change();}
if(resetText==true){currentIndex=prevIndex;navigateList(currentIndex);}
$containerDivWrapper.hide();positionHideFix();}
$newLi.bind('click.sSelect',function(e){var $clickedLi=$(e.target);currentIndex=$newLi.index($clickedLi);prevented=true;navigateList(currentIndex,true);closeDropDown();});$newLi.bind('mouseenter.sSelect',function(e){var $hoveredLi=$(e.target);$hoveredLi.addClass('newListHover');}).bind('mouseleave.sSelect',function(e){var $hoveredLi=$(e.target);$hoveredLi.removeClass('newListHover');});function navigateList(currentIndex,fireChange){if(currentIndex==-1){$containerDivText.text(opts.defaultText);$newLi.removeClass('hiLite');}else{$newLi.removeClass('hiLite').eq(currentIndex).addClass('hiLite');var text=$newLi.eq(currentIndex).text(),val=$newLi.eq(currentIndex).parent().data('key');try{$input.val(val)}catch(ex){$input[0].selectedIndex=currentIndex;}
$containerDivText.text(text);if(fireChange==true){prevIndex=currentIndex;$input.change();}
if($containerDivWrapper.is(':visible')){$newLi.eq(currentIndex).focus();}}}
$input.bind('change.sSelect',function(event){var $targetInput=$(event.target);if(prevented==true){prevented=false;return false;}
var $currentOpt=$targetInput.find(':selected');currentIndex=$targetInput.find('option').index($currentOpt);navigateList(currentIndex);});function keyPress(element){$(element).unbind('keydown.sSelect').bind('keydown.sSelect',function(e){var keycode=e.which;prevented=true;switch(keycode){case 40:case 39:incrementList();return false;break;case 38:case 37:decrementList();return false;break;case 33:case 36:gotoFirst();return false;break;case 34:case 35:gotoLast();return false;break;case 13:case 27:closeDropDown(true);return false;break;case 9:closeDropDown(true);nextFormElement();return false;break;}
keyPressed=String.fromCharCode(keycode).toLowerCase();var currentKeyIndex=keys.indexOf(keyPressed);if(typeof currentKeyIndex!='undefined'){++currentIndex;currentIndex=keys.indexOf(keyPressed,currentIndex);if(currentIndex==-1||currentIndex==null||prevKey!=keyPressed){currentIndex=keys.indexOf(keyPressed);}
navigateList(currentIndex);prevKey=keyPressed;return false;}});}
function incrementList(){if(currentIndex<(newLiLength-1)){++currentIndex;navigateList(currentIndex);}}
function decrementList(){if(currentIndex>0){--currentIndex;navigateList(currentIndex);}}
function gotoFirst(){currentIndex=0;navigateList(currentIndex);}
function gotoLast(){currentIndex=newLiLength-1;navigateList(currentIndex);}
$containerDiv.bind('click.sSelect',function(e){e.stopPropagation();keyPress(this);});$containerDiv.bind('focus.sSelect',function(){$(this).addClass('newListSelFocus');keyPress(this);});$containerDiv.bind('blur.sSelect',function(){$(this).removeClass('newListSelFocus');});$(document).bind('click.sSelect',function(){$containerDiv.removeClass('newListSelFocus');if($containerDivWrapper.is(':visible')){closeDropDown(false,true);}else{closeDropDown(false);}});function nextFormElement(){var fields=$('body').find('button,input,textarea,select');var index=fields.index($input);if(index>-1&&(index+1)<fields.length){fields.eq(index+1).focus();}
return false;}
$input.focus(function(){$input.next().focus();})
$containerDivText.bind('mouseenter.sSelect',function(e){var $hoveredTxt=$(e.target);$hoveredTxt.parent().addClass('newListSelHover');}).bind('mouseleave.sSelect',function(e){var $hoveredTxt=$(e.target);$hoveredTxt.parent().removeClass('newListSelHover');});$containerDivWrapper.css({left:'0',display:'none',visibility:'visible'});});};})(jQuery);