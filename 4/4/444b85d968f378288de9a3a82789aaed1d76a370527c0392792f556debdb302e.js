!function(){"use strict";!function(){window.urlScriptsPub={prebid:"https://media.ouest-france.fr/v1/javascripts/9548b847c300d9db15794e95cd33da79-prebid-20230921143527-650c388ff22b5.js",googletag:0==window.location.hostname.indexOf("qual.ouest-france.fr")?"https://media.ouest-france.fr/v1/javascripts/35d23ae43f83b96089f53aab0ec69de6-googletag.js":"https://media.ouest-france.fr/v1/javascripts/79aab543a00f0368873cff895e0eea31-googletag.js"};var a=null;["pave_article","banniere_haute","native_web_mtf1","native_web_atf1"].forEach(function(e){var t;(!window.dfp_is_mobile||window.dfp_is_mobile&&document.getElementById("mobile_pub_"+e))&&((a=document.getElementById((window.dfp_is_mobile?"":"mobile_")+"pub_"+e))&&a.parentNode.removeChild(a),!window.dfp_is_mobile||(t=document.getElementById("mobile_pub_"+e))&&t.setAttribute("id","pub_"+e))}),window.thirdparty.push({family:"advertising",name:"dfp",fn:function(e){if(-1!==window.location.href.indexOf("dfp_test=noads")||void 0===window.getDfpVars)return window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"DFPprebidFin"}),void document.dispatchEvent(new Event("DFPprebidFin"));var a,n,t,i=document.getElementsByTagName("script")[0],o=document.createElement("script");.type="text/javascript",o.src=window.urlScriptsPub.prebid,i.parentNode.insertBefore(o,i),a="apstag",n=window,t=document,o="script",n[a]||(n[a]={init:function(){r("i",arguments)},fetchBids:setDisplayBids:targetingKeys:_Q:[]},(d=t.createElement(o)).async=!0,d.src="//c.amazon-adsystem.com/aax2/apstag.js",(c=t.getElementsByTagName(o)[0]).parentNode.insertBefore(d,c));var s=getDfpVars(),d="ouestfrance",c=s.slotName.match(/\/49926454\/([a-z]+)>site\//);c&&1<c.length&&(d=c[1]),window.dfp_is_mobile||((p=document.createElement("script")).type="text/javascript",p.src="https://sac.ayads.co/sublime/"+("mainelibre"==d?"30917":"courrierdelouest"==d?"30912":"presseocean"==d?"30914":0==window.location.hostname.indexOf("qual.ouest-france.fr")?"36069":"30910")+"/prebid",i.parentNode.insertBefore(p,i));var p=document.createElement("script");p.type="text/javascript",p.src=window.urlScriptsPub.googletag,i.parentNode.insertBefore(p,i),Didomi.getUserConsentStatusForPurpose(Didomi.Purposes.Cookies)&&((p=document.createElement("script")).type="text/javascript",p.async=!0,p.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",i.parentNode.insertBefore(p,i));var f=setInterval(function(){void 0!==window.isDfpInTest&&(clearTimeout(f),window.Drupal={settings:{dfp_vars:s}},s instanceof Object&&!0===s.usedfp&&(isDfpInTest(s),setGoogleTag(googletag,advSizes,getDeviceDfp(s),s,e.advertising)))},50)},err:function(e){Array.prototype.slice.call(document.querySelectorAll("#pub_"+["banniere_haute","ban_mtf","banniere_basse","pave1","pave1_2","pave2","pave3","brique","nativ2","nativ3","pave_entreprises","wallpaper","floorad","native_web_atf1","native_web_atf2","native_web_mtf1","native_web_mtf2","native_web_btf1"].join(", #pub_"))).forEach(,window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"DFPprebidFin"}),document.dispatchEvent(new Event("DFPprebidFin"))}})}()}();