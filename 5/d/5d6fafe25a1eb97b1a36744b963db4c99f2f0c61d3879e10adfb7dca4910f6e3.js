var googleSearch=true;function doSearch(form){if(googleSearch)
doGoogleSearch(form);else
doExaleadSearch(level2ID,level3ID,level3N,form);return false;}
function doGoogleSearch(form){if(!form)
return false;var term=form['q'].value;if(!term||term=='')
return false;var searchSection=form.action;var sep=(searchSection.indexOf('?')!=-1)?'&':'?';searchSection=searchSection+sep+'q='+term+'&cx=012432601748511391518:xzeadub0b0a&cof=FORID:11&ie=UTF-8';document.location.href=searchSection;}
function getTerm(){var url=document.location.href;var idx1=url.indexOf('q=');if(idx1>0){var idx2=url.indexOf('&',idx1);var term=url.substring(idx1+2,idx2);return decodeURIComponent(term);}
return '';}
window.onload=function(){var today=new Date();var dd=today.getDate();var mm=today.getMonth()+1;var yyyy=today.getFullYear();if(dd<10){dd='0'+dd;}
if(mm<10){mm='0'+mm;}
today=yyyy+''+mm+''+dd;var msgStartDate='20140808';var msgEndDate='20140810';msgLang='EN';if(document.getElementsByClassName("toolLine")[0]){if(document.getElementsByClassName("toolLine")[0].getElementsByTagName("a")[0]){if(document.getElementsByClassName("toolLine")[0].getElementsByTagName("a")[0].innerHTML=='English'){msgLang='FR';}}}
var msgBody="This site will be undergoing maintenance on 9 and 10 August.  We apologise for any temporary inconvenience this may cause.";if(msgLang=='FR'){msgBody="Une maintenance du site aura lieu du 9 au 10 août. Veuillez nous excuser pour la gêne occasionnée.";}
if(!document.getElementById("dialog-message")){var inserting=document.createElement("div");inserting.id='dialog-message';inserting.className='dialog-msg-cst';inserting.style.display='none';var insertAt=document.getElementsByTagName('body')[0].firstChild;insertAt.parentNode.insertBefore(inserting,insertAt);}
var dialog=document.getElementById("dialog-message")
dialog.innerHTML=('<div class="msg-body">'.concat(msgBody)).concat('</div > ');if(msgStartDate<=today&&today<=msgEndDate){document.getElementById("dialog-message").style.display='inline-block';}
var a=document.getElementsByClassName("dialog-msg-cst")[0];a.style.background='#ededed ';a.style.position='relative';a.style.width='100%';a.style.borderBottom='2px solid #428bca';a.style.color='#555';a.style.fontSize='14px';a.style.fontFamily='"Helvetica Neue",Arial,Helvetica ,sans-serif';a.style.textAlign='center';var b=document.getElementsByClassName("msg-body")[0];b.style.padding='10px 20px';};