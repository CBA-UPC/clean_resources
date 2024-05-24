//tealium universal tag - utag.sync ut4.0.202401291739, Copyright 2024 Tealium.com Inc. All Rights Reserved.
window._dl=window._dl||{};window.utag_data=window.utag_data||{};window._dl["dbg_scope"]=window._dl["dbg_scope"]||"qcm";window._dl["dbg_utag_sync"]=window._dl["dbg_utag_sync"]="true";window.utag_data["dbg_scope"]=window.utag_data["dbg_scope"]||"qcm";window.utag_data["dbg_utag_sync"]=window.utag_data["dbg_utag_sync"]="true";window.utag_data["dbg"]=window.utag_data["dbg"]||{"scope":"qcm","utag_sync":"true"};window.utag_data["adobe_org_id"]=window.utag_data["adobe_org_id"]||"14DFEF2E54411B460A4C98A6@AdobeOrg";window.utag_data.six_s_api_key=window.utag_data.six_s_api_key||"c8e6c8cd82d0fe6be3522d5506369e0608025b38"
try{try{utag_data.AT_PreHiderValues=[];}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{preHiddenPages=utag_data.AT_PreHiderValues;var pageElements='';var timeOut=1E3;var targetedAudience='';try{preHiddenPages.forEach(parseElements);}
catch(e){console.log('Error in parsing prehidden page array',e.message,e);}
if(pageElements.length>0){preHide(pageElements,timeOut,targetedAudience);}
function preHide(pageElements,timeout,targetedAudience){!function(o,e,t){var n,i,d,r,l,a="at-body-style";unction c(e,t){var n;!e||(n=(n=o.getElementById(t))||o.getElementById("at-body-style-u"))&&e.removeChild(n)}n=g(),i=a,d=e,n&&((r=o.createElement("style")).id=i,r.innerHTML=d,0<targetedAudience.length&&((l=o.createAttribute("audience")).value=targetedAudience,r.setAttributeNode(l)),n.appendChild(r));try{document.addEventListener("at-content-rendering-start",function(e){console.log("CONTENT_RENDERING_START - Remove prehide now"),setTimeout(t)}),document.addEventListener("at-request-failed",function(e){console.log("REQUEST_FAILED - Remove prehide now"),c(g(),a)}),document.addEventListener("at-content-rendering-failed",function(e){console.log("CONTENT_RENDERING_FAILED - Remove prehide now"),c(g(),a)}),document.addEventListener("at-content-rendering-no-offers",function(e){console.log("CONTENT_RENDERING_NO_OFFERS - Remove prehide now"),c(g(),a)}),setTimeout(function(){console.log("TIMEOUT - Remove prehide now"),c(g(),a)},5e3)}catch(e){console.log("From catch - Remove prehide now"),c(g(),a)}}((window,document),pageElements+" {opacity: 0 !important}",timeout);}
function parseElements(obj){console.log('Entered parseElements function');var elements=obj.elements;var timeout=obj.timeout;var val=obj.value;var exclude=obj.exclude;if(Array.isArray(val)){for(i=0;i<val.length;i++){var eachValue=val[i];evalOperation(eachValue,exclude,elements,timeout,obj);}}
else{evalOperation(val,exclude,elements,timeout,obj);}
if(val==='global'&&elements.length>0){checkExclude(exclude,elements);if(timeOut===1E3&&timeout!==undefined&&timeout.length>0){timeOut=timeout;}}}
function evalOperation(val,exclude,elements,timeout,obj){var pathName=document.location.pathname;var type=obj.type;var audience=obj.audience;switch(type){case"endsWith":if(pathName.endsWith(val)){parseExcludeAndTimeOut(exclude,elements,timeout,audience);}
break;case"startsWith":if(pathName.startsWith(val)){parseExcludeAndTimeOut(exclude,elements,timeout,audience);}
break;case"match":if(pathName.match(val)||pathName===val){parseExcludeAndTimeOut(exclude,elements,timeout,audience);}
break;default:if(pathName.match(val)||pathName===val){parseExcludeAndTimeOut(exclude,elements,timeout,audience);}}}
function parseExcludeAndTimeOut(exclude,elements,timeout,audience){checkExclude(exclude,elements,audience);if(timeout!==undefined&&timeout.length>0){timeOut=timeout;}}
function checkExclude(exclude,elements,audience){if(exclude!==undefined){if(Array.isArray(exclude)&&exclude.every(isCurrentUrlExcluded)){pageElements=pageElements.length>0?pageElements+','+elements:elements;assignAudience(audience);}}
else{pageElements=pageElements.length>0?pageElements+','+elements:elements;assignAudience(audience);}}
function isCurrentUrlExcluded(url){return!(document.location.pathname.match(url)||document.location.pathname===url);}
function assignAudience(audience){if(audience!==undefined){targetedAudience=JSON.stringify(audience);}}
window.preHideForTargetedProfile=function _preHideForTargetedProfile(param){try{if(param!==null&&typeof param!=='undefined'&&param!=='undefined'){var opa=' {opacity: 0 !important}';var atStyle=document.getElementById('at-body-style');if(atStyle!==null&&typeof atStyle!=="undefined"&&atStyle!=="undefined"){var isAudience=atStyle.hasAttribute('audience');if(isAudience){var audienceAttr=atStyle.getAttribute('audience');var atStyleHtml=atStyle.innerText;var opaIndex=atStyleHtml.indexOf(opa);var lhsStyle=atStyleHtml.substring(0,opaIndex);var lhsStyleArr=lhsStyle.split(',');var audiencAttrObj=JSON.parse(audienceAttr);var isExecuted=false;if(Array.isArray(audiencAttrObj)){audiencAttrObj.forEach(parseAudience);}
else{parseAudience(audiencAttrObj);}
function parseAudience(item){if(!eval(item.segment)){if(item.selector.length>0){var targetedStyleArr=item.selector.split(',');lhsStyleArr=lhsStyleArr.filter(;}
isExecuted=true;}}
if(isExecuted){var uHtml=lhsStyleArr.join()+opa;var parent=document.getElementsByTagName('head')[0];var uStyle=document.createElement('style');uStyle.id='at-body-style-u';uStyle.innerHTML=uHtml;parent.appendChild(uStyle);parent.removeChild(atStyle);}
else{}}}}}catch(e){throw new Error(e)}}}catch(e){console.log(e)}}catch(e){console.log(e);}
try{try{(function(a,b,c,d,e){e=a="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js";b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;d.setAttribute("data-domain-script","33091090-ea72-45dd-9f1c-b3a98d577c98");a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);})();}catch(e){console.log(e)}}catch(e){console.log(e);}