function hawkeye_SHA1(msg){var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=[];for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j);}
switch(msg_len%4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length%16)!=14)word_array.push(0);word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function hawkeye_qualifyURL(url){var el=document.createElement('div');el.innerHTML='<a href="'+hawkeye_escapeHTML(url)+'">x</a>';return el.firstChild.href;}
function hawkeye_getURL(){var url=window.location.href;var element=document.querySelector('meta[name="citation_public_url"]');var public_url=element&&element.getAttribute("content");var element=document.querySelector('link[rel="canonical"]');var canonical_url=element&&element.getAttribute("href");if(public_url!==null){public_url=hawkeye_qualifyURL(public_url);url=public_url;}
else if(canonical_url!==null){canonical_url=hawkeye_qualifyURL(canonical_url);url=canonical_url;}
return url;}
function hawkeye_simplifyURL(url){var parser=document.createElement('a');parser.href=url;var pathname=parser.pathname;if(pathname.substring(0,1)!="/"){pathname="/"+pathname;}
var url=pathname;return url;}
function hawkeye_insertAfter(newNode,referenceNode,campaignname){if(referenceNode==null){}else{referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling);if(typeof ga=="undefined"){return;}else{ga('4d26dc5ee8384d69b29727d52c465f0f.send','event','Hawkeye','Madjex Widget Impression',campaignname,1,{nonInteraction:true});}}
return;}
function hawkeye_insert_madgex_widget(){var ids=hawkeye_target.madgex;if(typeof AAASdataLayer!=='undefined'){if(AAASdataLayer['page']){if(AAASdataLayer['page']['attributes']){if(AAASdataLayer['page']['attributes']['aaasProgram']){if(AAASdataLayer['page']['attributes']['aaasProgram']=='feature-article'){return;}}}}}
var id=-1;if(ids.length==0){return;}
if(ids.length==1){id=ids[0];}else{idcount=ids.length;randomfactor=0;for(var i=0;i<idcount;i++){randomfactor+=ids[i].jobcount;}
rand=Math.floor(Math.random()*randomfactor);cum=0;id=ids[idcount-1];for(var i=0;i<idcount;i++){cum+=ids[i].jobcount;if(cum>rand){id=ids[i];break;}}}
var campaignid=id.campaignid
var campaignname=id.campaignname
var widget=-1;var jobcount=id.jobcount;if(jobcount<1){return;}
widget=Math.floor(Math.random()*(jobcount));var campaignidstr=campaignid.toString();var widgetstr=widget.toString()+".html";var isJournal=false;var url=window.location.href;url=url.toLowerCase();if(url.search('/doi/')>-1)
{isJournal=true;}
if(!isJournal){var newtag=document.createElement("iframe");newtag.setAttribute('src',"//hawkeye4.semetricmedia.com/widgets-v4/"+campaignidstr+"/"+widgetstr);newtag.setAttribute('style','width: 100%; border: none; height:350px; background: 0; overflow: hidden');newtag.setAttribute('frameBorder','0');newtag.setAttribute('id',"mdgxWidgetiFrameNews");var offset=1
var positions=document.querySelectorAll("aside div.mb-2x.sticky-ads");if(positions.length>0){offset=2;}
positions=document.querySelectorAll("aside div.mb-2x");if(positions.length>=offset){var position=positions[positions.length-offset];if(position){hawkeye_insertAfter(newtag,position,campaignname);}}
if(positions.length==0){positions=document.querySelectorAll("div.news-article-content-footer");if(positions){var position=positions[positions.length-1];if(position){hawkeye_insertAfter(newtag,position,campaignname);}}}}
if(isJournal){var wrapperSection=document.createElement("section");var newtag=document.createElement("iframe");newtag.setAttribute('src',"//hawkeye4.semetricmedia.com/widgets-v4/"+campaignidstr+"/"+widgetstr);newtag.setAttribute('style','width: 100%; border: none; height:350px; background: 0; overflow: hidden');newtag.setAttribute('frameBorder','0');newtag.setAttribute('id',"mdgxWidgetiFrameLg");wrapperSection.appendChild(newtag);var selectNode=document.querySelector("aside[data-core-aside='right-rail'] .hawkeye-side-position-node")
if(selectNode){var position=selectNode.parentNode;if(position){hawkeye_insertAfter(wrapperSection,position,campaignname);}}}
return;}
function hawkeye_HttpRequest(){hawk_host_url="https://hawkeye4.semetricmedia.com/targeting-data-v4/";hawk_url=hawkeye_getURL();hawk_url=hawkeye_simplifyURL(hawk_url);hawk_fingerprint=hawkeye_SHA1(hawk_url);hawk_docwritehref=hawk_host_url+hawk_fingerprint.substring(2,0)+"/"+hawk_fingerprint+".js";hawk_request=new XMLHttpRequest();hawk_request.open("GET",hawk_docwritehref,false);hawk_request.onreadystatechange=(e)=>{if(hawk_request.responseText.length>0){eval(hawk_request.responseText);if(hawkeye_target.madgex.length>0){docReady(hawkeye_insert_madgex_widget);}}}
hawk_request.send();}
if(typeof hawkeye_target==='undefined'){hawkeye_target={"content":[],"madgex":[]};if(window.location.href.includes("/doi")||window.location.href.includes("/content")||window.location.href.includes("/job/"))
{hawkeye_HttpRequest();}}