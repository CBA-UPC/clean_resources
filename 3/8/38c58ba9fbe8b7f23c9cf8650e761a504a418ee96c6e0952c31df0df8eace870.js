var TWAGORAINARTICLE=TWAGORAINARTICLE||function(){var getHTScriptElement=function(){var hTClass='pa-ht-class';if(document.currentScript)
return document.currentScript;else{var scripts=document.getElementsByTagName('script');var currentHTag='agorahtag.tech/c/gandul.ro.js';var sl=scripts.length;for(var s=0;s<sl;s++){if((scripts[s].src.indexOf(currentHTag)!==-1)&&!scripts[s].classList.contains(hTClass)){scripts[s].classList.add(hTClass);break;}}
return scripts[s];}}
var getQueryString=function(script){var queryString=script.src.replace(/^[^\?]+\??/,'');return'?'+queryString;}
var getParameterByName=function(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,'$&');var regex=new RegExp('[?&]'+name+'(=([^&#]*)|&|#|$)'),results=regex.exec(url);if(!results)return null;if(!results[2])return'';try{return decodeURIComponent(results[2].replace(/\+/g,' '));}catch(err){return null;}}
var getPartnerSCOfromHTUrl=function(currentScript){var schain=null;var currentHTScript=currentScript;var qS=getQueryString(currentHTScript);if(qS)schain=getParameterByName('schain',qS);return schain;}
var config={"sco":{"paSellerId":"103844","paOwns":"Owned & Operated"},"site_name":"gandul.ro","rules":[{"name":"Custom script - Taboola CSS - desktop","priority":3,"type":"CustomScript","product":{"CustomScript":{"scripts":[{"code":"<script>var addcss = function(css){    var head = document.getElementsByTagName('head')[0];    var s = document.createElement('style');    s.setAttribute('type', 'text/css');    if (s.styleSheet) {           s.styleSheet.cssText = css;    } else {                        s.appendChild(document.createTextNode(css));    }    head.appendChild(s); }; addcss('#taboola-alternating-below-article-pl5 {overflow:initial!important;}'); </script>"}]}}}],"externalTags":[{"url":"https://cdn.pamoctaga.com/sites/gandulro-1pfju/tags/pamoc_loader"}]};var currentHTScript=getHTScriptElement();return{getConfig:getPartnersSCO:}();(function(){try{var externalTags=[{"url":"https://cdn.pamoctaga.com/sites/gandulro-1pfju/tags/pamoc_loader"}];for(var i=0;i<externalTags.length;i++){if(externalTags[i].enabled===false){continue;}
var tag=externalTags[i];var script=document.createElement('script');script.src=tag.url;if(tag.asyncLoad){script.async=true;}
document.head.prepend(script);}}catch(ignore){};})();!function(e,t,a){var n,r=e.getElementsByTagName(t)[0];e.getElementById("pa-tag")||((n=e.createElement(t)).id="pa-tag",n.src="//palibzh.tech/libs/projectagora.min.js",r.parentNode.insertBefore(n,r))}(document,"script");