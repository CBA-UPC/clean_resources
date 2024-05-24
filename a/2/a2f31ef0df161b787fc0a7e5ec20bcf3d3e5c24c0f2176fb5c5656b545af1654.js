var afpfChildLogger=!1,innoCall=0,spiceMCall=0,partnerCount=0,splashCount=0,forLoopcount=0,splashPara="",innoPara="",twoPartner=(p1=adg_getURLParam1("p1")).split(","),partnerArr=["1"],refUrl=adg_getURLParam1("refUrl"),refUrl1=window.location.href,spiceposition=0,blockedUrlinno=0,blockedUrlnative=0,blockedUrl=0,burl1=0,negword=0;if(2==twoPartner.length){partnerArr=["1","2"];for(var i=0;i<twoPartner.length;i++)190==twoPartner[i]?partnerArr[1]=twoPartner[i]:partnerArr[0]=twoPartner[i]}else 1==twoPartner.length&&(partnerArr[0]=p1);for(var val=0;val<partnerArr.length;val++){var doublePixelpartnerId=partnerArr[val];forLoopcount++;var scr=document.createElement("script");scr.fetchPriority="high",scr.text='var siteConfigJson={}; var adgebraBidderObj={"Dc_1":[],"Dc_2":[],"Dc_3":[],"Dc_7":[]}; var dspDetailsObj={}; var master_bidId=""; var BidIdDetails=""; var bidderCampDetails=""; ',document.head.appendChild(scr);var demoFlag=!1,demoDomain=window.location!=window.parent.location?document.referrer:document.location.href;if(-1!=demoDomain.indexOf("adgebrademo=true")){demoFlag=!0;var DemodomainArray=demoDomain.substring(demoDomain.indexOf("adgebrademo")),tempDemodomainArray=DemodomainArray.toLowerCase();-1!=tempDemodomainArray.indexOf("dcid")&&(DemodomainArray=tempDemodomainArray.replace("dcid","dcId")),-1!=tempDemodomainArray.indexOf("bannerid")&&(DemodomainArray=DemodomainArray.replace("bannerid","bannerId"));var subDemoDomainArray=DemodomainArray.split("&")}var PREBID_TIMEOUT=400,adg_pbjs=adg_pbjs||{};adg_pbjs.que=adg_pbjs.que||[];var adUnits1=[],adgebraAdworld={findParams:function(e,t,n){for(var a in n){var r=n[a];if(r.accountId==e&&r.advertiserId==t)return JSON.parse(r.dspParams)}},buildFloorPriceJson:function(e,t,n,a,r){var i={};for(var o in i.code=a,i.sizes=n,i.bids=[],e[r].CampaignDetails){var d=e[r].CampaignDetails[o],l=d.accountId,s=d.advertiserId;e[r].CampaignDetails[o].dspparams=this.findParams(l,s,t),i.bids.push(this.findParams(l,s,t)),afpfChildLogger&&console.log(e[r].CampaignDetails[o])}return i},getAccountAdvertiser:function(e,t,n){for(var a in e){var r=e[a];if("undefined"!=r){var i=JSON.parse(r.dspParams);if("undefined"!=i&&i.bidder==t){for(var o in bidderCampDetails[n].CampaignDetails)if(bidderCampDetails[n].CampaignDetails[o].accountId==r.accountId&&bidderCampDetails[n].CampaignDetails[o].advertiserId==r.advertiserId)return{accountId:r.accountId,advertiserId:r.advertiserId,campaignId:bidderCampDetails[n].CampaignDetails[o].campaignId};return}}}}};function update_comscore_flag(e){var t,n,a,r=e.split("#")[2];"undefined"!=typeof adg_comscore_flag&&null!=adg_comscore_flag&&0==adg_comscore_flag&&("1"==r?(adg_comscore_flag=!0,(t=t||[]).push({c1:"8",c2:"19888642",c3:"2"}),n=document.createElement("script"),a=document.getElementsByTagName("script")[0],n.async=!0,n.fetchPriority="high",n.src=("https:"==document.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js",a.parentNode.insertBefore(n,a)):(adg_comscore_flag=!0,(t=t||[]).push({c1:"8",c2:"19888642"}),function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.fetchPriority="high",e.src=("https:"==document.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js",t.parentNode.insertBefore(e,t)}()))}function getAfpadgCurrentDayId(){var e=new Date,t=(e.getFullYear()+"").substring(2),n=e.getMonth()+1;n<10&&(n="0"+n);var a=e.getDate();a<10&&(a="0"+a);var r=e.getHours();return r<10&&(r="0"+r),parseInt(t+""+n+a+r)}function adg_getMetaContentkeys(){for(var e=document.getElementsByTagName("meta"),t="",n=0;n<e.length;n++){var a=e[n].name;if(-1!=a.indexOf("news_keywords")){t=e[n].getAttribute("content");break}null!=t&&""!=t||-1!=a.indexOf("keyword")&&(t=t+","+e[n].getAttribute("content"))}return null!=t?t.substring(1):""}function screenSize(){var e="";try{e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}catch(e){return afpfChildLogger&&console.log("Screen size not available"),""}return e}function getMetaTitleContentkeys(){for(var e=document.getElementsByTagName("meta"),t="",n="",a="",r="",i=0;i<e.length;i++){var o=e[i].name;e[i].getAttribute("property");-1!=o.indexOf("news_keywords")&&""==t&&(t=e[i].getAttribute("content")),""!=t&&null!=t||-1!=o.indexOf(siteConfigJson.keyword)&&(t=e[i].getAttribute("content")),-1!=o.indexOf(siteConfigJson.description)&&(r=e[i].getAttribute("content"))}var d="undefined";return document.getElementsByTagName(siteConfigJson.title).length>0&&(d=document.getElementsByTagName(siteConfigJson.title)[0].innerHTML),void 0!==d&&(n=d),a=(a=null!=r&&""!=r?t+"!"+n+" "+r:t+"!"+n).replace(/[?\/_|&\/_|#\/_]/g," "),a=encodeURIComponent(a)}var adg_slider=new Object;adg_slider.template="<div><iframe style ='position:left;'id='adgSpotIframe'></div>",adg_slider.banner="<html><h1>this is test banner</h1></html>";var deliveryChannel="",adNotSeved=adg_getURLParam1("p4");function callback_spot(e){try{var t=e;for(i=0;i<t.length;i++){var n=t[i].templateHtml,a=decodeURIComponent(t[i].bannerHtml);if(a.length>0){document.body.appendChild(create(n));var r=document.getElementById("adgSpotIframe_"+t[i].position);"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&r.setAttribute("data-criteoCookie",encodeURIComponent(adg_crtg_content)),r.srcdoc=a}}}catch(e){}}3==(adNotSeved=adNotSeved.split("~"))[0]&&(deliveryChannel=adNotSeved[1]);var adgsrvrUrl="",isDfpAppFlag=adg_getURLParam1("isDfpApp");adgsrvrUrl=(void 0!==isDfpAppFlag&&null!=isDfpAppFlag&&1==isDfpAppFlag||window.location.protocol,"https://adgebra.co.in");var RTB_LOG={c1x:!1},SiteDomain="",splashDC="",neg_keyword="",splashNotServed=!0,spotNotServed=!0,p1=adg_getURLParam1("p1"),p3=adg_getURLParam1("p3"),ADEp3Param="",ECGActiveFlag=!0,SegmentaionActiveFlag=!0,AdservingActiveFlag=!0,ADEActiveFlag=!0,PiggibackingActiveFlag=!0,splsKywrdDivs="",splsfle="spot",imgPosition="",adg_deviceType="",impulseResFalse=!1,isAdgebraValidIp=!1,ForkDetailsJson="",AdgDynamicDetails="",DynamicTrgDetails="",isHomePage=document.getElementById("wrapper"),notToServeFlag=!1;function checkDynamicTarget(){if("undefined"!=typeof adg_imagedetails&&"NA"!=adg_imagedetails&&0!=Object.keys(adg_imagedetails).length&&void 0!==adg_imagedetails.is_safe&&void 0!==adg_imagedetails.flags&&void 0!==adg_imagedetails.cSafe){var e="is_safe="+adg_imagedetails.is_safe+"@_#flags="+adg_imagedetails.flags+"@_#cSafe="+adg_imagedetails.cSafe;null!=adg_imagedetails.dynamicTrg&&(e=e+"@_#"+adg_imagedetails.dynamicTrg),DynamicTrgDetails=encodeURIComponent(e)}else AdgDynamicDetails=siteConfigJson.forkApiParameters.replace(new RegExp(",","g"),"@_#"),DynamicTrgDetails=encodeURIComponent(AdgDynamicDetails)}function nativeAdsCall(e,t,n,a,r,i,o,d,l,s,p,g){var c="";""!=e&&(e="&lang="+e),""==a&&null==a&&void 0===a||(a="&slotId="+a),""==o&&null==o&&void 0===o||(o="&dfpGeoId="+o),""==d&&null==d&&void 0===d||(d="&isDfpApp="+d),""!=n&&null!=n&&void 0!==n||(n=getMetaTitleContentkeys()),""==i&&null==i&&void 0===i||(i="&templateId="+i),""==r&&null==r&&void 0===r||(r="&isIBN="+r);var m="callback_NativeAds";if((_=document.getElementsByClassName("adg_native_home")).length>0){for(var u=0;u<_.length;u++){var f=_[u].getAttribute("data-nanoNativeFlag");if("1"==f){var h=_[u].getAttribute("data-templateId_slotId");""!=h&&null!=h&&null!=h&&(null==v?(v=h,m="callback_NanoNativeAds"):v=v+","+h)}}null!=v&&null!=f||(v="",f="");var v="&templateId_slotId="+v+"&nanoNativeFlag="+f}var _,y=window.parent.location.href;if(p.includes(y)&&(blockedUrlnative=1),(_=document.getElementsByClassName("adg_native_home")).length>0){var b=document.createElement("script");document.body.appendChild(b),b.async=!0,1!=blockedUrlnative?c=adgsrvrUrl+"/AdServing/AdserveServlet?p2="+t+"&p3="+n+"&p5=9&p6="+_.length+"&p4="+getAfpadgCurrentDayId()+"&callback="+m+e+"&catche="+Math.floor(20*Math.random())+a+r+i+o+d+v+"&referurl="+window.parent.location.href:AdNotServe(doublePixelpartnerId,t,909,g,9),""==l&&null==l&&void 0===l||""==s&&null==s&&void 0===s||(c=c+(l="&demoFlagIBN="+l)+(s="&bannerId="+s)),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&(c=c+"&p7="+encodeURIComponent(adg_crtg_content)),b.src=c}}null!=isHomePage&&"undefined"!=isHomePage&&"homepage"==isHomePage.getAttribute("data-page_type")?(isHomePage=!0,AdservingActiveFlag=!1):isHomePage=!1,"undefined"!=window.AFPFPresent&&null!=window.AFPFPresent&&1==window.AFPFPresent?SegmentaionActiveFlag=!1:window.AFPFPresent=!0;var loadChannel=function(e,t,n){setTimeout((function(){var t=document.createElement("script");t.id="splashScript",t.fetchPriority="high",document.body.appendChild(t),t.onload=function(){},t.setAttribute("data-cfasync","false"),t.src=e}),1e3)};function create(e){var t=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)t.appendChild(n.firstChild);return t}function adgInnovation_callback(e){var t=decodeURIComponent(e.banner);if("1"==adg_deviceType&&"8"==e.dcId)(a=document.createElement("iframe")).id="sparkFrame",a.setAttribute("style","position: fixed;bottom:120px;z-index: 9999999;cursor: pointer;left: 0px;width:100%;list-style-type:none;"),a.frameBorder=0,a.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},document.body.appendChild(a),a.srcdoc=t;else if("2"==adg_deviceType&&"3"==e.dcId){var n,a,r;if(siteConfigJson.spiceDTop>0)(n=document.createElement("div")).setAttribute("style","top: 0px;z-index:9999999;position: fixed;width:100%;height:auto;"),n.setAttribute("align","center"),document.body.appendChild(n),(a=document.createElement("iframe")).id="spiceIframe",a.setAttribute("style","height:90px;width:728px; margin: 0px auto;"),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&a.setAttribute("data-criteoCookie",encodeURIComponent(adg_crtg_content)),a.frameBorder=0,a.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},n.appendChild(a),(r=a.contentWindow).document.open(),r.document.write(t),r.document.close();else(n=document.createElement("div")).setAttribute("style","bottom: -4px;z-index:9999999;position: fixed;width:100%;height:auto;"),n.setAttribute("align","center"),document.body.appendChild(n),(a=document.createElement("iframe")).id="spiceIframe",a.setAttribute("style","height:90px;width:728px; margin: 0px auto;"),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&a.setAttribute("data-criteoCookie",encodeURIComponent(adg_crtg_content)),a.frameBorder=0,a.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},n.appendChild(a),(r=a.contentWindow).document.open(),r.document.write(t),r.document.close()}"1"==adg_deviceType&&"13"==e.dcId&&(siteConfigJson.spiceMTop>0?((a=document.createElement("iframe")).id="spiceMFrame",a.setAttribute("style","position: fixed;top:0px;z-index: 9999999;cursor: pointer;left: 0px;width:100%;list-style-type:none;"),a.frameBorder=0,a.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},document.body.appendChild(a),(r=a.contentWindow).document.open(),r.document.write(t),r.document.close()):((a=document.createElement("iframe")).id="spiceMFrame",a.setAttribute("style","position: fixed;bottom:0px;z-index: 9999999;cursor: pointer;left: 0px;width:100%;list-style-type:none;"),a.frameBorder=0,a.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},document.body.appendChild(a),(r=a.contentWindow).document.open(),r.document.write(t),r.document.close()))}function innovationAdserve(e){try{var t=e.split("#");if(e.split("#")[8].includes(window.location.href)&&(blockedUrlinno=1),t.length>0)if(void 0!==t[1]&&t[1].length>0){for(var n=t[1].split(","),a=0;a<n.length;a++)if(DcInnov=n[a].split("_"),"undefined"!=typeof DcInnov&&DcInnov.length>0){if(1==DcInnov[2]&&3==DcInnov[0]){var r="";2==partnerArr.length&&(doublePixelpartnerId=partnerArr[0]);var i=JSON.parse(e.split("#")[6]);2==partnerArr.length&&190!=doublePixelpartnerId&&i==doublePixelpartnerId&&(r=r+"p1="+doublePixelpartnerId+"&p2="+e.split("_")[0]+"&p3="+DcInnov[1]+"&p4="+getAfpadgCurrentDayId()+"&p6="+getMetaTitleContentkeys(),innoPara=r),1==partnerArr.length&&(r=r+"p1="+doublePixelpartnerId+"&p2="+e.split("_")[0]+"&p3="+DcInnov[1]+"&p4="+getAfpadgCurrentDayId()+"&p6="+getMetaTitleContentkeys()),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&adg_crtg_content&&(r=r+"&p7="+encodeURIComponent(adg_crtg_content)),demoFlag&&-1!=subDemoDomainArray[0].indexOf("adgebrademo=true")&&-1!=subDemoDomainArray[1].indexOf("dcId=3")&&(r=r+"&"+subDemoDomainArray[1]+"&"+subDemoDomainArray[2]),(o=document.createElement("script")).fetchPriority="high",document.body.appendChild(o),o.setAttribute("data-cfasync","false"),demoFlag?demoFlag&&-1!=subDemoDomainArray[1].indexOf("dcId=3")&&(o.src=adgsrvrUrl+"/AdServing/DemoServlet?"+r):(null!=r&&""!=r||(r=innoPara),spiceposition="2"==adg_deviceType?siteConfigJson.spiceDTop:"1"==adg_deviceType?siteConfigJson.spiceMTop:0,2==partnerArr.length&&0==innoCall&&190!=doublePixelpartnerId?(innoCall++,1==blockedUrlinno?AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],3):o.src=adgsrvrUrl+"/AdServing/InnovationAdserving?"+r+"&referurl="+document.URL+"&spiceposition="+spiceposition):1==partnerArr.length&&(1==blockedUrlinno?AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],3):o.src=adgsrvrUrl+"/AdServing/InnovationAdserving?"+r+"&referurl="+document.URL+"&spiceposition="+spiceposition))}else if(1==DcInnov[2]&&8==DcInnov[0]&&0==document.querySelectorAll('[data-adgebraoff="true"]').length){r="";2==partnerArr.length&&(doublePixelpartnerId=partnerArr[0]);i=JSON.parse(e.split("#")[6]);2==partnerArr.length&&190!=doublePixelpartnerId&&i==doublePixelpartnerId&&(r=r+"p1="+doublePixelpartnerId+"&p2="+e.split("_")[0]+"&p3="+DcInnov[1]+"&p4="+getAfpadgCurrentDayId()+"&p6="+getMetaTitleContentkeys(),innoPara=r),1==partnerArr.length&&(r=r+"p1="+doublePixelpartnerId+"&p2="+e.split("_")[0]+"&p3="+DcInnov[1]+"&p4="+getAfpadgCurrentDayId()+"&p6="+getMetaTitleContentkeys()),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&adg_crtg_content&&(r=r+"&p7="+encodeURIComponent(adg_crtg_content)),demoFlag&&demoFlag&&-1!=subDemoDomainArray[1].indexOf("dcId=8")&&(r=r+"&"+subDemoDomainArray[1]+"&"+subDemoDomainArray[2]),void 0!==isAdgebraValidIp&&0!=isAdgebraValidIp||(r+="&p5=326"),(o=document.createElement("script")).fetchPriority="high",document.body.appendChild(o),demoFlag?demoFlag&&-1!=subDemoDomainArray[1].indexOf("dcId=8")&&(o.src=adgsrvrUrl+"/AdServing/DemoServlet?"+r):(null!=r&&""!=r||(r=innoPara),r=r+"&dynamic_trg="+DynamicTrgDetails,2==partnerArr.length&&0==innoCall&&190!=doublePixelpartnerId?(innoCall++,1==blockedUrlinno?AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],8):o.src=adgsrvrUrl+"/AdServing/InnovationMobileServlet?"+r+"&referurl="+document.URL):1==partnerArr.length&&(1==blockedUrlinno?AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],8):o.src=adgsrvrUrl+"/AdServing/InnovationMobileServlet?"+r+"&referurl="+document.URL))}else 1!=DcInnov[2]||2!=DcInnov[0]&&7!=DcInnov[0]||(splashDC=DcInnov[0]);if(1==DcInnov[2]&&13==DcInnov[0]){r="";2==partnerArr.length&&(doublePixelpartnerId=partnerArr[0]);var o;i=JSON.parse(e.split("#")[6]);2==partnerArr.length&&190!=doublePixelpartnerId&&i==doublePixelpartnerId&&(r=r+"p1="+doublePixelpartnerId+"&p2="+e.split("_")[0]+"&p3="+DcInnov[1]+"&p4="+getAfpadgCurrentDayId()+"&p6="+getMetaTitleContentkeys(),innoPara=r),1==partnerArr.length&&(r=r+"p1="+doublePixelpartnerId+"&p2="+e.split("_")[0]+"&p3="+DcInnov[1]+"&p4="+getAfpadgCurrentDayId()+"&p6="+getMetaTitleContentkeys()),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&adg_crtg_content&&(r=r+"&p7="+encodeURIComponent(adg_crtg_content)),demoFlag&&demoFlag&&-1!=subDemoDomainArray[1].indexOf("dcId=13")&&(r=r+"&"+subDemoDomainArray[1]+"&"+subDemoDomainArray[2]),void 0!==isAdgebraValidIp&&0!=isAdgebraValidIp||(r+="&p5=326"),(o=document.createElement("script")).fetchPriority="high",document.body.appendChild(o),demoFlag?demoFlag&&-1!=subDemoDomainArray[1].indexOf("dcId=13")&&(o.src=adgsrvrUrl+"/AdServing/DemoServlet?"+r):(null!=r&&""!=r||(r=innoPara),2==partnerArr.length&&0==spiceMCall&&190!=doublePixelpartnerId?(spiceMCall++,1==blockedUrlinno?AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],13):o.src=adgsrvrUrl+"/AdServing/InnovationSpiceMobileAdserving?"+r+"&referurl="+document.URL):1==partnerArr.length&&(1==blockedUrlinno?AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],13):o.src=adgsrvrUrl+"/AdServing/InnovationSpiceMobileAdserving?"+r+"&referurl="+document.URL))}}}else AdNotServe(doublePixelpartnerId,e.split("#")[0].split("_")[0],223,0,2)}catch(e){}}function spotAdserve(e){var t=document.createElement("script");t.fetchPriority="high",document.body.appendChild(t),t.setAttribute("data-cfasync","false"),t.src=adgsrvrUrl+"/AdServing/SpotAdserve?"+e}function getExpireDate(e){if(e){var t=new Date;return t.setTime(t.getTime()+24*e*60*60*1e3),"; expires="+t.toGMTString()}}if(adg_getURLParam1("p2").length>0)try{var customDataArray=adg_getURLParam1("p2").split("~"),customData=customDataArray[0];2==customData&&(ADEActiveFlag=customDataArray.length>1&&customDataArray[1].trim().length>0,ECGActiveFlag=!1,AdservingActiveFlag=!1,SegmentaionActiveFlag=!1,PiggibackingActiveFlag=!1,ADEp3Param="1~"+customDataArray[1])}catch(e){}function callsiteservlet(){if(adg_getURLParam1("p6").length>0&&1!=adg_getURLParam1("p6"))AFPCall(adg_getURLParam1("p8")+"_");else if(0===adg_getURLParam1("p6").length){if(190==doublePixelpartnerId){if(2==(t=(t=adg_getURLParam1("p4")).split("~"))[0]){var e=t[1].split("!");SiteDomain="&p4="+e[1]+"&pixel="+doublePixelpartnerId}}else if(1==adg_getURLParam1("isIBN")){if(2==(t=(t=adg_getURLParam1("p4")).split("~"))[0]){e=t[1].split("!");SiteDomain="&p4="+e[1]+"&pixel="+doublePixelpartnerId}}else if(adg_getURLParam1("p4").length>0&&1==twoPartner.length){var t;if(2==(t=(t=adg_getURLParam1("p4")).split("~"))[0]){e=t[1].split("!");SiteDomain="&p4="+e[1]+"&pixel="+doublePixelpartnerId}}else SiteDomain="&pixel="+doublePixelpartnerId;lodUrl(adgsrvrUrl+"/afpf/site?p1="+doublePixelpartnerId+"&p2="+getAfpadgCurrentDayId()+"&p3="+encodeURIComponent(adg_getMetaContentkeys())+SiteDomain,AFPCall)}}function adg_isIE(){return!!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))}function lodUrl(e,t){param="";var n="",a={x:function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],n=0;n<t.length;n++)try{e=new ActiveXObject(t[n]);break}catch(e){}return e},send:function(e,t,r,i,o){var d=a.x();if("withCredentials"in d)try{d.withCredentials=!0}catch(e){}d.open(r,e,o),d.onreadystatechange=function(){4==d.readyState&&200==d.status&&(n=d.responseText,t(n))},"POST"==r&&d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.send(i)},get:function(e,n,r,i){var o=adg_isIE();a.send(e,t,"GET",null,!o)}};return a.get(e,param,(function(){})),n}function mobileTest(){return(-1!=useragent.indexOf("iPhone")||-1!=useragent.indexOf("Android")||-1!=useragent.indexOf("Blackberry")||-1!=useragent.indexOf("Mobile"))&&-1!=useragent.indexOf("iPad")}function getBidIdByDC(e,t){var n="";return e.forEach((function(e,a){e.DcId==t&&(n=e.BidId)})),master_bidId="M_"+n.split("_")[1],n}"undefined"!=typeof adg_imagedetails&&"NA"!=adg_imagedetails&&0!=Object.keys(adg_imagedetails).length&&"undefined"!=adg_crtg_content&&""!=adg_crtg_content?callsiteservlet():setTimeout(callsiteservlet(),2e3);var criteoAdserveFlag=0,criteoCampIds={2:"ix728in",1:"ix320m"};function findEndPointUrl(e,t){for(var n=0;n<e.length;n++)if(e[n].advertiserId==t)return e[n].endPoint}function AFPCall(e){if(null!=e&&""!=e)if("GDPR"!=e){var t=!1,n="";if(siteConfigJson=JSON.parse(e.split("#")[4]),1==siteConfigJson.isHomepage&&(AdservingActiveFlag=!0),(void 0===(_=adg_getURLParam1("isIBN"))||null==_||""==_)&&1==siteConfigJson.iframeRemoval)for(var a=document.getElementsByClassName("adgsplash"),r=0;r<a.length;r++)null==a[r]&&null==a[r]||a[r].parentNode.removeChild(a[r]);impulseResFalse&&("safe"!=ForkDetailsJson.is_safe?AdNotServe(p1,e.split("_")[0],80,e.split("#")[3].split("=")[1],2):"yes"!=ForkDetailsJson.flags?AdNotServe(p1,e.split("_")[0],79,e.split("#")[3].split("=")[1],2):"false"!=ForkDetailsJson.c_blocking&&AdNotServe(p1,e.split("_")[0],78,e.split("#")[3].split("=")[1],2));try{var i,o=e.split("#")[2],d=e.split("#")[3].split("=")[1];if("1"==o)(i=new i(siteConfigJson.Splash_M_imageHeight,siteConfigJson.Splash_M_imageWidth,d)).call_adg_analytics();else(i=new i(siteConfigJson.Splash_imageHeight,siteConfigJson.Splash_imageWidth,d)).call_adg_analytics()}catch(e){afpfChildLogger&&console.log("unable to call analytics")}"1861"==e.split("_")[0]&&"1"==e.split("#")[2]&&adgCommonCanvasScript(378);var l,s,p,g="";g=e.split("#")[1].split(",");for(var c=0;c<g.length;c++)if(9==g[c].split("_")[0]&&1==g[c].split("_")[2]){var m="",u=adg_getURLParam1("p4");if(2==(u=u.split("~"))[0])m=u[1].split("!")[0];var f=adg_getURLParam1("IBNkeyword"),h=adg_getURLParam1("slotId");void 0!==h&&null!=h&&""!=h||(h=0);var v=adg_getURLParam1("templateId"),_=adg_getURLParam1("isIBN"),y=adg_getURLParam1("adgebrademoFlagIBN"),b=adg_getURLParam1("bannerId"),A=adg_getURLParam1("geoId");void 0!==A&&null!=A&&""!=A||(A=0);var I=adg_getURLParam1("isDfpApp");void 0!==I&&null!=I&&""!=I||(I=0),nativeAdsCall(m,e.split("_")[0],f,h,_,v,A,I,y,b,e.split("#")[8],e.split("#")[3].split("=")[1])}if("1"==adg_getURLParam1("isIBN"))return!1;if(siteConfigJson=JSON.parse(e.split("#")[4]),"undefined"!=typeof adg_imagedetails&&"NA"!=adg_imagedetails&&0!=Object.keys(adg_imagedetails).length){dspDetailsObj=JSON.parse(e.split("#")[5]);e.split("#")[1];dspDetailsObj.forEach((function(e,t){n+=","+e.accountId+"_"+e.advertiserId})),n.length>0&&(n=n.substring(1));var C=e.split("#")[2],x={1:"7_12",2:"2_7"},D={1:"7",2:"2"};if(""!=n&&splashNotServed&&"undefined"!=typeof adg_imagedetails&&-1!=e.split("#")[1].indexOf(x[C])){if(-1!=(p1+="").indexOf(",")){var P=p1.split(",");for(c=0;c<P.length;c++)190==P[c]&&(p1=190)}var S='{"p1":"'+p1+'","p2":"'+e.split("_")[0]+'","p3":"'+getMetaTitleContentkeys()+'","p4":"'+getAfpadgCurrentDayId()+'","p5":"","p6":"'+adg_imagedetails.imageWidth+"_"+adg_imagedetails.imageHeight+'","p11":"'+{1:12,2:7}[C]+'","p15":"0"}';n+="!!"+x[C];var w=(l="GET",s=adgsrvrUrl+"/AdServing/GetFloorPriceDetails?rtbparam="+encodeURIComponent(n)+"&dcParameters="+encodeURIComponent(S),"withCredentials"in(p=new XMLHttpRequest)?p.open(l,s,!0):"undefined"!=typeof XDomainRequest?(p=new XDomainRequest).open(l,s):p=null,p);w&&(w.onload=function(){if(afpfChildLogger&&console.log(this.responseText),""==this.responseText)return!1;if(!t){t=!0,bidderCampDetails=JSON.parse(this.responseText),BidIdDetails=bidderCampDetails.BidIdDetails,delete bidderCampDetails.BidIdDetails;var n={1:"838697",2:"838696"};adg_pbjs.que.push((function(){var e=[{code:"Dc_"+D[C]+"_div-gpt-ad-1438287399331-0",sizes:[[728,90]],bids:[{bidder:"criteo",params:{zoneId:n[C]}},{bidder:"headbidding",params:{zoneId:"42148",host:"exchange.nativeads.com"}},{bidder:"c1x"}]}];adg_pbjs.bidderSettings={c1x:{pixelId:99999,siteId:10090,endpoint:"https://ht.c1exchange.com/ht",adserverTargeting:[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(e){return e.pbLg}}]}},adg_pbjs.addAdUnits(e),adg_pbjs.requestBids({bidsBackHandler:function(e){for(var t in e){var n=t.split("_")[1];for(var a in e[t].bids){var r=e[t].bids[a],i=adgebraAdworld.getAccountAdvertiser(dspDetailsObj,r.bidder,"Dc_"+n);void 0!==i&&(r.accountId=i.accountId,r.advertiserId=i.advertiserId,r.campaignId=i.campaignId,void 0!==r.campaignId?r.bid=!0:r.bid=!1,adgebraBidderObj["Dc_"+n].push(r))}master_bidId="M_"+BidIdDetails["Dc_"+n]}}})})),setTimeout((function(){AdserveCalls(e,!0)}),200)}},w.send())}setTimeout((function(){t||(t=!0,AdserveCalls(e,!1))}),200)}else AdserveCalls(e,!1);pubCompetitorCheck(siteConfigJson,e.split("_")[0])}else AdNotServe(0,0,71,0,2);function i(t,n,a){this.neg_keyFlag=a,this.docurl=window.location.href,this.isHidden=function(e){return"none"===window.getComputedStyle(e).display},this.imgdetails=function(){for(var e=document.getElementsByTagName("img"),a=0;a<e.length;a++){var r=e[a].src;if(e[a].clientHeight>=t&&e[a].clientWidth>=n&&1!=this.isHidden(e[a])&&-1==r.indexOf("googlesyndication.com")&&-1==r.indexOf("zedo.com")&&-1==r.indexOf("ais1.in")&&-1==r.indexOf("ventunoads.edgesuite.net")&&-1==r.indexOf("newsmonthan-moving-logo2-1.gif")&&-1==r.indexOf("cdn.adgebra.net"))return{imgurl:e[a].src,imgheight:e[a].clientHeight,imgwidth:e[a].clientWidth}}},this.metaKeywords=function(){for(var e=document.getElementsByTagName("meta"),t="",n=0;n<e.length;n++){-1!=e[n].name.indexOf("keyword")&&(t=t+","+e[n].getAttribute("content"))}return t.substring(1)},this.categoryKeywords=function(){var e="";try{for(var t=siteConfigJson.categoryPriority.split(","),n=siteConfigJson.breadCrumbStructure.split(","),a=(window.location!=window.parent.location?document.referrer:document.location.href).split("/"),r=0;r<t.length;r++)switch(t[r]){case"r1":e+=a[3]+",";break;case"r2":e+=a[4]+",";break;case"r3":e+=a[5]+",";break;case"b1":if((l=document.getElementsByClassName(n[0])).length>0)for(var i=l[0].getElementsByTagName(n[1]),o=0,d=0;d<i.length;d++){if(null!=(s=i[d].getAttribute(n[2]))&&o++,2==o&&null!=s){e+=i[d].innerHTML+",";break}}break;case"b2":if((l=document.getElementsByClassName(n[0])).length>0)for(i=l[0].getElementsByTagName(n[1]),o=0,d=0;d<i.length;d++){if(null!=(s=i[d].getAttribute(n[2]))&&o++,3==o&&null!=s){e+=i[d].innerHTML+",";break}}break;case"b3":var l;if((l=document.getElementsByClassName(n[0])).length>0)for(i=l[0].getElementsByTagName(n[1]),o=0,d=0;d<i.length;d++){var s;if(null!=(s=i[d].getAttribute(n[2]))&&o++,4==o&&null!=s){e+=i[d].innerHTML+",";break}}}}catch(e){}return 0==(e=e.substr(0,e.length-1)).length&&(e="other"),encodeURIComponent(encodeURIComponent(e))},this.getContentLanguage=function(){for(var e=document.getElementsByTagName("meta"),t="",n=0;n<e.length;n++){-1!=e[n].name.indexOf("Content-Language")&&(t=e[n].getAttribute("content"))}return t},this.apiurl=adgsrvrUrl+"/Adg_Analytics/api",this.apimethod="POST",this.website=window.location.hostname,this.pageCaption=document.title,this.title=document.title,this.textContainer=".full-details",this.userAgentString=navigator.userAgent,this.pubID="IMPL-INUXU-INUXU-SPLASH-TEST",this.zoneId=1504,this.pubCat="",this.deviceWidth=window.screen.width,this.lang=document.getElementsByTagName("html")[0].getAttribute("lang"),this.adg_lang=e.split("#")[7],this.getJSON=function(){var e=this.imgdetails(),t=null,n=null,a=null,r=0;return void 0!==e?(t=e.imgurl,n=e.imgwidth,a=e.imgheight,r=0):r=1,{imgurl:t,website:this.website,docurl:this.docurl,caption:this.pageCaption,meta:this.metaKeywords(),title:this.title,pubcat:this.pubCat,lang:this.lang,textContainer:this.textContainer,deviceWidth:this.deviceWidth,userAgentString:this.userAgentString,imageWidth:n,imageHeight:a,pubID:this.pubID,zoneId:this.zoneId,neg_keyFlag:this.neg_keyFlag,img_not_found:r,categoryKeyword:this.categoryKeywords(),content_lang:this.getContentLanguage(),adg_lang:this.adg_lang}},this.call_adg_analytics=function(){afpfChildLogger&&console.log("sending ajax call");var e=this.getJSON();if(void 0!==e.imgurl&&"null"!=e.imgurl&&null!=e.imgurl){var t=new XMLHttpRequest;t.open(this.apimethod,this.apiurl,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onload=function(){afpfChildLogger&&console.log(this.responseText)};var n="imgurl="+e.imgurl+"&website="+e.website+"&docurl="+e.docurl+"&caption="+e.caption+"&meta="+e.meta+"&title="+e.title+"&pubcat="+e.pubcat+"&lang="+e.lang+"&textContainer="+e.textContainer+"&deviceWidth="+e.deviceWidth+"&userAgentString="+e.userAgentString+"&imageWidth="+e.imageWidth+"&imageHeight="+e.imageHeight+"&pubID="+e.pubID+"&zoneId="+e.zoneId+"&neg_keyFlag="+e.neg_keyFlag+"&img_not_found="+e.img_not_found+"&categoryKeyword="+e.categoryKeyword+"&content_lang="+e.content_lang+"&adg_lang="+e.adg_lang;t.send(n)}}}}function _RTB_DataLogger(){if("undefined"==master_bidId||null==master_bidId||""==master_bidId)return!1;if(0==RTB_LOG.c1x){RTB_LOG.c1x=!0;var e={bidid:master_bidId,jsonResponse:adgebraBidderObj};e=JSON.stringify(e);var t=new XMLHttpRequest;t.open("POST",adgsrvrUrl+"/Adg_Analytics/RTBLogProcessing?data="+encodeURIComponent(e)+"&bidid="+master_bidId,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onload=function(){afpfChildLogger&&console.info("ADG_RTB_DATA_LOGGED")},t.send()}}function AdserveCalls(e,t){var n=e.split("#");e.split("#")[8].includes(window.location.href)&&(blockedUrl=1),setTimeout((function(){}),1e3);var a="";a=e.split("#")[1].split(","),void 0!==(n=e.split("#"))[2]&&n[2].length>0&&(adg_deviceType=n[2]),Splash_TP(p1,e.split("_")[0],adg_deviceType,getMetaTitleContentkeys(),adgsrvrUrl,getSiteSizeBySiteResponse(e,"splash"));var r=!1;if(0==adg_getURLParam1("p6").length)try{var i=document.querySelectorAll(siteConfigJson.slider);void 0!==i&&i.length>0&&(r=!0)}catch(e){}if(checkDynamicTarget(),"undefined"!=typeof adg_hou_spl&&afpfChildLogger&&console.log("adg_hou_spl = "+adg_hou_spl),!r&&"undefined"!=typeof adg_hou_spl&&1==adg_hou_spl&&AdservingActiveFlag)criteoAdserveFlag=1,function(e,t){if(1==getNegativeKeyword(e))splashNotServed=!0,AdNotServe(doublePixelpartnerId,e.split("_")[0],907,e.split("#")[3].split("=")[1],splashDC);else if(1==blockedUrl)splashNotServed=!0,AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],splashDC);else{var n="p1="+adg_getURLParam1("p1")+"&p2="+e.split("_")[0]+"&p3=&p4="+getAfpadgCurrentDayId()+"&p5=108_7@&p11="+getSiteSizeBySiteResponse(e,"splash");t(adgsrvrUrl+"/AdServing/"+splsfle+".js?"+n,"inu_channel",n)}}(e,loadChannel);else if(0===adg_getURLParam1("p6").length&&AdservingActiveFlag){innovationAdserve(e);try{for(var o=0;o<a.length;o++)2!=a[o].split("_")[0]&&7!=a[o].split("_")[0]||1!=a[o].split("_")[2]||!0,1==a[o].split("_")[0]&&1==a[o].split("_")[2]&&!0}catch(e){}}setTimeout((function(){var t=e,n="",a="",i={15122512:{n:"1_2_3_4_5",s:"1_2_3_4"}};JSON.stringify(i),getAfpadgCurrentDayId(),ADEp3Param.length;try{var o=window.addEventListener?"addEventListener":"attachEvent";(0,window[o])("attachEvent"==o?"onmessage":"message",(function(t){var n=t.data;try{"object"==typeof n&&(n=JSON.stringify(n));n.split("#");if(t.origin!=d+n.split("#")[2])return!1;if(-1!=n.indexOf("inu_channel")&&1==AdservingActiveFlag){""!=a&&null!=a||(a=splashPara),parameter=a+n.split("#")[1];var i=!0;if(""==typeof deliveryChannel)i=!0;else for(var o=deliveryChannel.split(","),l=0;l<o.length;l++)"2"!=o[l]&&"7"!=o[l]||(i=!1);if(splashNotServed&&(-1!=parameter.indexOf("&p5=")||-1!=n.indexOf("inu_channel_keyword"))&&!r&&i){var s=getSiteSizeBySiteResponse(e,"splash");if(null!=s&&s.length>0){-1==parameter.indexOf("p11")&&(parameter=parameter+"&p11="+s),-1==parameter.indexOf("preferurl")&&(parameter=parameter+"&preferurl="+encodeURIComponent(window.location.href)),parameter=parameter+"&DC="+splashDC+"&p15="+getNegativeKeyword(e)+"&p16="+imagePosition(),parameter=parameter+"&dynamic_trg="+DynamicTrgDetails,splashNotServed=!1;var p=siteConfigJson.pageSliderName.replace("@!","#"),g=document.querySelectorAll(p);1==getNegativeKeyword(e)?(splashNotServed=!0,AdNotServe(doublePixelpartnerId,e.split("_")[0],907,e.split("#")[3].split("=")[1],splashDC)):1==blockedUrl?(splashNotServed=!0,AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],splashDC)):(1==siteConfigJson.SkipMultipleSplashAds&&null!=g&&null!=g&&0!=g.length?splsfle="spot":1==siteConfigJson.Multiple_Splash_Ads&&(splsfle="splash"),parameter.includes("p1=")||(parameter=splashPara+parameter),1==getNegativeKeyword(e)?(splashNotServed=!0,AdNotServe(doublePixelpartnerId,e.split("_")[0],907,e.split("#")[3].split("=")[1],splashDC)):1==blockedUrl?(splashNotServed=!0,AdNotServe(doublePixelpartnerId,e.split("_")[0],909,e.split("#")[3].split("=")[1],splashDC)):2==partnerArr.length&&190==doublePixelpartnerId&&0==splashCount?(splashCount++,y(adgsrvrUrl+"/AdServing/"+splsfle+".js?"+parameter,n.split("#")[0])):1==partnerArr.length&&y(adgsrvrUrl+"/AdServing/"+splsfle+".js?"+parameter,n.split("#")[0]))}else{190==(f=JSON.parse(e.split("#")[6]))&&AdNotServe(f,e.split("_")[0],73,e.split("#")[3].split("=")[1],2),afpfChildLogger&&console.info("splash DC is not active for this site"+s)}}if(spotNotServed&&-1!=parameter.indexOf("&p8=")){var c=getSiteSizeBySiteResponse(e,"spot");if(null!=c&&c.length>0){-1==parameter.indexOf("p14")&&(parameter=parameter+"&p14="+c+"&p17="+screenSize());var m=parameter.split(/[&;]/g);for(l=m.length;l-- >0;)-1!==m[l].lastIndexOf("p5",0)&&m.splice(l,1),-1!==m[l].lastIndexOf("p6",0)&&m.splice(l,1),-1!==m[l].lastIndexOf("p10",0)&&m.splice(l,1),-1!==m[l].lastIndexOf("p15",0)&&m.splice(l,1),-1!==m[l].lastIndexOf("p11",0)&&m.splice(l,1),-1!==m[l].lastIndexOf("p16",0)&&m.splice(l,1);parameter=m.join("&"),spotAdserve(parameter),spotNotServed=!1}else afpfChildLogger&&console.info("Spot DC is not active for this site"+c)}}else{var u,f=JSON.parse(e.split("#")[6]),h=e.split("#")[1].split(",");for(l=0;l<h.length;l++)2==h[l].split("_")[0]&&(u=2),7==h[l].split("_")[0]&&(u=7);2==u&&AdNotServe(f,e.split("_")[0],72,e.split("#")[3].split("=")[1],2),7==u&&AdNotServe(f,e.split("_")[0],72,e.split("#")[3].split("=")[1],7)}if(-1!=n.indexOf("spin")&&1==AdservingActiveFlag){var v=n.split("#")[3].replace("spin","");document.cookie="PECG="+v+"; expires="+getExpireDate(1830)+"; path=/"}else if(1==PiggibackingActiveFlag){var _=document.createElement("iframe");_.width="0px",_.height="0px",_.style.border="0em solid black",_.style.display="none",document.body.appendChild(_),_.srcdoc=n}}catch(e){}}),!1)}catch(e){}var d="https://",l=0==adg_getURLParam1("p6").length?"1":adg_getURLParam1("p6");n=n+"p1="+adg_getURLParam1("p1")+"&p2="+adg_getURLParam1("p2")+"&p3="+p3+"&p4="+adg_getURLParam1("p4")+"&p5="+adg_getURLParam1("p5")+"&p6="+l+"&p7="+function(){var e,n=window.location.href.split(window.location.host)[1];return void 0===(n=n.substring(n.indexOf("/")+1,n.indexOf(".")))?"-1":(e=function(e){for(var t=document.getElementsByTagName("meta"),n="",a=0;a<t.length;a++){t[a].name;if(t[a].getAttribute("name")==e){n=t[a].getAttribute("content");break}}return n}(t.substr(t.indexOf("_")+1,t.length))+" "+n.replace(/[&\/_]/g," "),e)}()+"&p8="+t.split("_")[0]+"&p9="+getAfpadgCurrentDayId()+"&p10="+encodeURIComponent(document.location.href),2==forLoopcount&&(doublePixelpartnerId=partnerArr[1]);var s=JSON.parse(e.split("#")[6]);2==partnerArr.length&&190==doublePixelpartnerId?s==doublePixelpartnerId&&""==splashPara&&(a=a+"p1="+doublePixelpartnerId+"&p2="+t.split("_")[0]+"&p3="+getMetaTitleContentkeys()+"&p4="+getAfpadgCurrentDayId(),splashPara=a):1==partnerArr.length&&(a=a+"p1="+doublePixelpartnerId+"&p2="+t.split("_")[0]+"&p3="+getMetaTitleContentkeys()+"&p4="+getAfpadgCurrentDayId());""==a&&""!=splashPara&&(a=splashPara);if(1==SegmentaionActiveFlag){(_=document.createElement("iframe")).width="0px",_.height="0px",_.style.border="0em solid black",_.style.display="none",_.src=adgsrvrUrl+"/afpf/segment.html?"+n,document.body.appendChild(_);_.contentWindow;_.onLoad=function(){}}if(0==adg_getURLParam1("p6").length&&1==ECGActiveFlag){try{var p=document.querySelectorAll(siteConfigJson.slider);if(void 0!==p&&p.length>0){a+="&p13=1"}}catch(e){}if((splsKywrdDivs=document.getElementsByClassName("C9565656549496")).length>0){var g=splsKywrdDivs[0].getAttribute("data-adg_keywords");a=a+"&p9="+g;var c=e.split("#");if(c.length>0&&void 0!==c[1]&&c[1].length>0){for(var m=c[1].split(","),u="",f="",h=0;h<m.length;h++){var v=m[h].split("_");2==v[0]||7==v[0]?u=u+"_"+v[1]:1==v[0]&&(f=f+"_"+v[1])}a=a+"&p11="+u.substring(1)+"&p14="+f.substring(1)}}var _;void 0!==isAdgebraValidIp&&0!=isAdgebraValidIp||""==a&&""!=splashPara&&(a=splashPara),a=(a+="&flytxt=313")+"&preferurl="+encodeURIComponent(window.location.href)+"&neg="+getNegativeKeyword(e),(_=document.createElement("iframe")).width="0px",_.height="0px",_.style.border="0em solid black",_.src=adgsrvrUrl+"/AdServing/EcgProcess.html?"+a,_.style.display="none",document.body.appendChild(_);_.contentWindow;_.onLoad=function(){}}function y(e,t){var n=document.getElementById("splashScript");try{n.parentNode.removeChild(n)}catch(e){}var a=document.createElement("script");a.id="splashScript",a.fetchPriority="high",document.body.appendChild(a),a.onload=function(){},a.setAttribute("data-cfasync","false"),a.src=e}if(i=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}("PBS")){var b=JSON.parse(i);for(key in b)var A=key}if(1==ADEActiveFlag&&(null==A||void 0===A||A<getAfpadgCurrentDayId())&&1==adg_getURLParam1("p6")||" "!=i);}),1e3)}function AdNotServe(e,t,n,a,r){if(!notToServeFlag){notToServeFlag=!0;var i=document.createElement("script");document.body.appendChild(i),i.src=adgsrvrUrl+"/AdServing/NotToServe?p1="+e+"&p2="+t+"&p3="+n+"&p4="+encodeURIComponent(window.location.href)+"&p5="+a+"&p6="+r}}function getSiteSizeBySiteResponse(e,t){var n="";try{var a=e.split("#")[1].split(","),r={splash:[2,7],spot:[1]}[t];if(a.length>0)for(var i in a)if(a[i].length>0)for(var o in r)a[i].split("_")[0]==r[o]&&(n=n+"_"+a[i].split("_")[1])}catch(e){}return n.length>0?n.substring(1):n}function imagePosition(){if(adg_getURLParam1("p4").length>0){try{var e=adg_getURLParam1("p4").split("~");1==e[0]&&e.length>1&&e[1].trim().length>0&&(imgPosition=e[1])}catch(e){}return imgPosition}return imgPosition}function reloadAdgebraPixel(){var e=document.getElementsByClassName("adgsplash");null==e[0]&&null==e[0]||e[0].parentNode.removeChild(e[0]),reloadAdgPixel("adg_pixel_header_script"),setTimeout((function(){reloadAdgPixel("adg_pixel_footer_script")}),100)}function reloadAdgPixel(e){var t=document.getElementById(e);if(null==t)return 0;var n=t.src;t.parentNode.removeChild(t);var a=document.createElement("script");a.src=n,a.fetchPriority="high",a.id=e,afpfChildLogger&&console.log(n),document.body.appendChild(a)}function getNegativeKeyword(e){return neg_keyword=e.split("#")[3].split("=")[1]}function geIframeStatus(){var e=adg_getURLParam1("p4").split("!");e=e[1];var t={isIframe:!1,referurl:""};return self!=top?(t.isIframe=!0,t.referurl=window.location!=window.parent.location?document.referrer:document.location.href,""==t.referurl&&(t.referurl=e)):t.isIframe=!1,t}function callback_NativeAds(e){var t=document.getElementsByClassName("adg_native_home"),n=e.ibnAds;if(t.length>0)for(var a=0;a<n.length;a++){if(n[a].banner){var r=document.createElement("iframe");r.frameBorder=0,r.id="nativeAdcodeBanner"+a,r.style.zIndex="2",r.style.position="relative",r.height=siteConfigJson.native_height+"px",r.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},r.scrolling="no",t[a].innerHTML="",t[a].appendChild(r);var i=n[a].banner;r.srcdoc=i}else{var o=n[a],d=t[a].getElementsByTagName("a"),l=geIframeStatus(),s=decodeURIComponent(o.trackerUrl),p=t[a].getElementsByClassName("adg_Native_Img_heading"),g=t[a].getElementsByClassName("ad_icon_img"),c=t[a].getElementsByClassName("ad_icon_text"),m=t[a].getElementsByClassName("ctaDiv");afpfChildLogger&&console.log("referurl"+l.referurl),s=1==l.isIframe&&refUrl.length<=0&&(null==refUrl||""==refUrl)?s+"&isIframe="+l.isIframe+"&referurl="+l.referurl:s+"&isIframe="+l.isIframe+"&referurl="+refUrl;for(var u=0;u<d.length;u++){if(d[u].href=s,d[u].getElementsByTagName("img").length>0&&o.imageUrl){var f=d[u].getElementsByTagName("img")[0],h=f.alt;if(f.src="adg_Native_HD_Img"==h?o.img990x505:"adg_43_200x150"==h?o.size_43_200x150:"adg_43_100x75"==h?o.size_43_100x75:"adg_169_400x225"==h?o.size_169_400x225:"adg_169_200x113"==h?o.size_169_200x113:"adg_169_100x56"==h?o.size_169_100x56:"adg_21_400x200"==h?o.size_21_400x200:"adg_21_200x100"==h?o.size_21_200x100:"adg_21_100x50"==h?o.size_21_100x50:"adg_65_600x500"==h?o.size_65_600x500:"adg_65_300x250"==h?o.size_65_300x250:"adg_65_100x83"==h?o.size_65_100x83:o.imageUrl,f.removeAttribute("alt"),f.removeAttribute("title"),0==p.length){if(1==d.length){var v=d[u].innerHTML.split(">")[0]+">"+decodeURIComponent(o.title.replace(/\+/g," "));d[u].innerHTML=v}}else{var _=decodeURIComponent(o.title.replace(/\+/g," "));p[0].innerHTML=_}}else{if(0==p.length){if(1==d.length){v=d[0].innerHTML.split(">")[0]+">"+decodeURIComponent(o.title.replace(/\+/g," "));d[0].innerHTML=v}}else{_=decodeURIComponent(o.title.replace(/\+/g," "));p[0].innerHTML=_}var y={videoSize_640x360:o.videoSize_640x360,videoSize_320x180:o.videoSize_320x180,fallback_image:o.fallback_image,srtPath:o.srtPath,videoImpressionTrackerUrl:o.videoImpressionTrackerUrl,trackerUrl:o.trackerUrl,timeInMiliSecond:e.timeInMiliSecond},b=e.videoTemplate;b=b.replace("###VIDEO_OBJECT####",JSON.stringify(y));var A=document.createElement("iframe");A.id="IbnIframe_"+a,A.setAttribute("scrolling","no"),A.style.border="0px",A.style.overflow="hidden",d[0].replaceChild(A,d[0].childNodes[1]),document.getElementById("IbnIframe_"+a).className="adg_Ibn_ad_Iframe";var I=A.contentWindow;I.document.open(),I.document.write(b),I.document.close(),d[0].setAttribute("target","_blank")}d[u].setAttribute("target","_blank"),g.length>0&&c.length>0&&(g[0].src=o.iconImageUrl,c[0].innerHTML=decodeURIComponent(o.pnTilte.replace(/\+/g," ")));try{if(m.length>0&&o.ctaMessage){var C=document.createElement("button");C.type="button",C.innerHTML=decodeURIComponent(o.ctaMessage.replace(/\+/g," ")),C.className="ctaButton",m[0].appendChild(C)}}catch(e){console.log(e.message)}}if(o.spikeImpressionTrackerUrl){var x=document.createElement("div");x.id="imp_tracker_native",t[a].appendChild(x),x.style.display="none",x.innerHTML=o.spikeImpressionTrackerUrl}if(o.thirdPartyTrackerUrl)for(var D=o.thirdPartyTrackerUrl.split(","),P=0;P<D.length;P++){(w=document.createElement("iframe")).id=Date.now(),t[a].appendChild(w),w.src=D[P],w.width="0px",w.height="0px",w.style.border="0px"}if(o.impUrl){D=o.impUrl.split(",");for(var S=0;S<D.length;S++){var w;(w=document.createElement("iframe")).id=Date.now(),t[a].appendChild(w),w.src=D[S],w.width="0px",w.height="0px",w.style.border="0px"}}}t[a].style.display="block"}try{if(inIframe()){var U=window.frameElement.id;window.parent.document.getElementById(U).style.display="block"}}catch(e){afpfChildLogger&&console.log("parent iframe not found !")}}function callback_NanoNativeAds(e){var t=e,n=document.getElementsByClassName("adg_native_home");if(t.length>0){var a;if(n.length>0)for(var r=0;r<n.length;r++){if("1"==n[r].getAttribute("data-nanoNativeFlag")){var i=n[r].getAttribute("data-templateId_slotId");""!=i&&null!=i&&null!=i&&(a=null==a?i:a+","+i)}}var o=a.split(",")}if(n.length>0)for(var d=0;d<o.length;d++){var l=o[d],s=t[0][l];if(null!=s){for(var p=0,g=0;g<n.length;g++)if("none"==n[g].style.display||""==n[g].style.display){var c=n[g].getAttribute("data-templateId_slotId");if(o[d]==c){p=g;break}}var m=n[p].getElementsByTagName("a"),u=geIframeStatus(),f=decodeURIComponent(s.trackerUrl);afpfChildLogger&&console.log("referurl"+u.referurl),f=1==u.isIframe&&refUrl.length<=0&&(null==refUrl||""==refUrl)?f+"&isIframe="+u.isIframe+"&referurl="+u.referurl:f+"&referurl="+refUrl1;for(var h=0;h<m.length;h++){if(m[h].href=f,m[h].getElementsByTagName("img").length>0){var v=m[h].getElementsByTagName("img")[0],_=v.alt;if(v.src="adg_Native_HD_Img"==_?s.img990x505:"adg_43_200x150"==_?s.size_43_200x150:"adg_43_100x75"==_?s.size_43_100x75:"adg_169_400x225"==_?s.size_169_400x225:"adg_169_200x113"==_?s.size_169_200x113:"adg_169_100x56"==_?s.size_169_100x56:"adg_21_400x200"==_?s.size_21_400x200:"adg_21_200x100"==_?s.size_21_200x100:"adg_21_100x50"==_?s.size_21_100x50:"adg_65_600x500"==_?s.size_65_600x500:"adg_65_300x250"==_?s.size_65_300x250:"adg_65_100x83"==_?s.size_65_100x83:s.imageUrl,v.removeAttribute("alt"),v.removeAttribute("title"),1==m.length){var y=m[h].innerHTML.split(">")[0]+">"+decodeURIComponent(s.title.replace(/\+/g," "));m[h].innerHTML=y}}else m[h].innerHTML=decodeURIComponent(s.title.replace(/\+/g," "));m[h].setAttribute("target","_blank");var b=document.createElement("div");b.style.float="right";var A=document.createElement("img");A.setAttribute("src","https://cdn.adgebra.net/custom/generic/nano_native_gray.png"),A.setAttribute("onmouseover","this.src='https://cdn.adgebra.net/custom/generic/nano_native_colour.png'"),A.setAttribute("onmouseout","this.src='https://cdn.adgebra.net/custom/generic/nano_native_gray.png'"),A.setAttribute("onclick",'iconImgClick("https://bit.ly/2WsrP6r")'),b.appendChild(A),m[h].parentNode.parentNode.appendChild(b)}if(s.spikeImpressionTrackerUrl){var I=document.createElement("div");I.id="imp_tracker_native",I.style.display="none",n[p].appendChild(impTracker),I.innerHTML=s.spikeImpressionTrackerUrl}if(s.thirdPartyTrackerUrl)for(var C=s.thirdPartyTrackerUrl.split(","),x=0;x<C.length;x++){(P=document.createElement("iframe")).id=Date.now(),n[p].appendChild(P),P.src=C[x],P.width="0px",P.height="0px",P.style.border="0px"}if(s.impUrl){C=s.impUrl.split(",");for(var D=0;D<C.length;D++){var P;(P=document.createElement("iframe")).id=Date.now(),n[p].appendChild(P),P.src=C[D],P.width="0px",P.height="0px",P.style.border="0px"}}n[p].style.display="block"}}try{if(inIframe()){var S=window.frameElement.id;window.parent.document.getElementById(S).style.display="block"}}catch(e){afpfChildLogger&&console.log("parent iframe not found !")}}function iconImgClick(e){window.open(e,"_blank")}function inIframe(){try{return window.self!==window.top}catch(e){return!0}}var JSONP=function(){var e,t=0,n=this;return{get:function(a,r,i){;"?";var o="json"+ ++t;return n[o]=function(e){i(e);try{delete n[o]}catch(e){}n[o]=null},function(t){var n=document.createElement("script"),a=!1;n.src=t,n.fetchPriority="high",n.async=!0,n.onload=n.onreadystatechange=function(){a||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(a=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},e||(e=document.getElementsByTagName("head")[0]),e.appendChild(n)}(a+"?"+r+"&nocache="),o}}}();function adgCommonCanvasScript(e){!function(){var t,n={pk:"sot08",aduid:e},a=top.document,r=a.createElement("script"),i=[];for(t in n.u=a.location.href,n.ref=a.referrer,n.phR=Math.random()+"_"+(new Date).getTime(),n)n.hasOwnProperty(t)&&i.push(t+"="+encodeURIComponent(n[t]));r.src="//ic.ph.affinity.com/init.js?"+i.join("&"),r.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(r)}()}function Splash_TP(e,t,n,a,r,i){var o="p1="+e+"&p2="+t+"&p3="+a+"&callback=splash_tp_Callback&p4="+getAfpadgCurrentDayId()+"&p5=&p6=600_450&p11="+i+"&preferurl="+SiteDomain+"&neg=0&DC="+n;"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&(o=o+"&p7="+encodeURIComponent(adg_crtg_content));var d="/AdServing/splashAdserve",l="/AdServing/SplashMobileAdServlet";document.getElementsByClassName("adg_splash_tp").length>0&&(2==n?JSONP.get(r+d,o,(function(e){})):JSONP.get(r+l,o,(function(e){})))}function splash_tp_Callback(e){var t=document.getElementsByClassName("adg_splash_tp"),n=document.createElement("iframe");t[0].appendChild(n),n.setAttribute("id","dtext"),"undefined"!=typeof adg_crtg_content&&"null"!=adg_crtg_content&&n.setAttribute("data-criteoCookie",encodeURIComponent(adg_crtg_content)),2==adg_deviceType?(n.style.height=siteConfigJson.Splash_TP_Height+"px",n.style.width=siteConfigJson.Splash_TP_Width+"px"):(n.style.height=siteConfigJson.Splash_M_TP_Height+"px",n.style.width=siteConfigJson.Splash_M_TP_Width+"px"),n.style.border="0px",n.setAttribute("scrolling","no"),n.srcdoc=decodeURIComponent(e.ad1),document.getElementsByClassName("adg_splash_tp")[0].style.display="block"}}function adg_getURLParam1(e){for(var t=document.getElementById("adg_pixel_footer_script").src.split("?")[1].split("&"),n=0;n<t.length;){var a=t[n].split("=");if(a[0]==e)return a[1];n++}return""}function pubCompetitorCheck(e,t){var n="";if(1==e.pubCompetitorCheckFlag){var a=e.pubCompetitorDomain;if(void 0!==a)for(var r=a.split(","),i=0;i<r.length;i++){var o=document.querySelector('script[src*="'+r[i]+'"]');null!=o&&null!=o&&""!=o.src&&(n+=r[i]+"|")}n.length>1&&(n=n.substring(0,n.length-1))}if(1!=demoFlag&&""!=n){var d=new XMLHttpRequest;d.open("GET",adgsrvrUrl+"/AdServing/PubCompetitorServlet?siteId="+t+"&url="+demoDomain.split("#")[0]+"&detectDomain="+n+"&tempId="+Math.floor(30*Math.random()+1),!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.onload=function(){},d.send()}},0H4.1c-0.4,0-0.8-0.3-0.8-0.8l0,0V10.1c0-0.4,0.3-0.8,0.8-0.8h21.7
      c0.4,0,0.8,0.3,0.8,0.8L26.6,26.5z"></path>
                            <path class="st7-gn" d="M22.4,15.9H16v-1.7h6.5c0.2,0,0.3,0.2,0.3,0.3v1C22.8,15.7,22.6,15.9,22.4,15.9C22.4,15.9,22.4,15.9,22.4,15.9z
      M22.4,22.4H16v-1.7h6.5c0.2,0,0.3,0.2,0.3,0.3v1C22.8,22.2,22.6,22.4,22.4,22.4z M23.5,19.1H16v-1.7h7.5c0.2,0,0.3,0.2,0.3,0.3v1
      C23.8,19,23.7,19.1,23.5,19.1L23.5,19.1z"></path>
                            <path class="st8-gn" d="M25.8,27.1H4.1c-0.4,0-0.8-0.3-0.8-0.8v0.2c0,0.4,0.3,0.8,0.8,0.8h21.7c0.4,0,0.8-0.3,0.8-0.8v-0.2
      C26.6,26.8,26.2,27.1,25.8,27.1z"></path>
                            <path class="st2-gn" d="M4.1,9.5h21.7c0.4,0,0.8,0.3,0.8,0.8v-0.2c0-0.4-0.3-0.8-0.8-0.8H4.1c-0.4,0-0.8,0.3-0.8,0.8v0.2
      C3.4,9.9,3.7,9.5,4.1,9.5z"></path>
                            <path class="st7-gn" d="M10.1,17.6v1.5h2.2c-0.2,0.9-1,1.6-2.2,1.6c-1.3,0-2.4-1.1-2.4-2.5c0-1.3,1.1-2.5,2.4-2.5
      c0.6,0,1.1,0.2,1.6,0.6l0,0l1.2-1.2c-0.7-0.7-1.7-1.1-2.7-1.1c-2.3,0-4.1,1.8-4.1,4s1.8,4.1,4,4.1c0,0,0.1,0,0.1,0
      c2.4,0,3.9-1.7,3.9-4c0-0.3,0-0.5-0.1-0.8H10.1z"></path>
                            <g class="st9-gn">
                              <path class="st10-gn" d="M10.2,19.1v0.2h2.2c0-0.1,0-0.1,0-0.2H10.2z"></path>
                              <path class="st10-gn" d="M10.2,22.4c-2.2,0-4.1-1.8-4.1-4c0,0,0,0.1,0,0.1c0,2.3,1.8,4.1,4.1,4.1h0c2.4,0,3.9-1.7,3.9-4c0,0,0,0,0-0.1
        C14.1,20.7,12.5,22.4,10.2,22.4z M11.8,16.4c-0.4-0.4-1-0.6-1.6-0.6c-1.3,0-2.4,1.1-2.4,2.5c0,0,0,0.1,0,0.1c0-1.3,1.1-2.4,2.4-2.4
        c0.6,0,1.1,0.2,1.6,0.6l0,0l1.3-1.3c0,0-0.1-0.1-0.1-0.1L11.8,16.4L11.8,16.4z"></path>
                            </g>
                            <path class="st8-gn" d="M22.8,15.7v-0.2c0,0.2-0.2,0.3-0.3,0.3H16V16h6.5C22.6,16,22.8,15.9,22.8,15.7C22.8,15.7,22.8,15.7,22.8,15.7
      L22.8,15.7z M22.4,22.4H16v0.2h6.5c0.2,0,0.3-0.2,0.3-0.3V22C22.8,22.2,22.6,22.4,22.4,22.4L22.4,22.4z M23.5,19.1H16v0.2h7.5
      c0.2,0,0.3-0.2,0.3-0.3v-0.2C23.8,19,23.7,19.1,23.5,19.1L23.5,19.1z"></path>
                            <radialGradient id="SVGID_1_gn" cx="6.7195" cy="-391.7035" r="29.2271" gradientTransform="matrix(1 0 0 1 0 396.41)" gradientUnits="userSpaceOnUse">
                              <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"></stop>
                              <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"></stop>
                            </radialGradient>
                            <path class="st11-gn" d="M29.5,9.2l-5.6-1.5V3.5c0-0.4-0.3-0.8-0.8-0.8H6.9c-0.4,0-0.8,0.3-0.8,0.8v4.2L0.4,9.7C0,9.8-0.2,10.3,0,10.7
      l3.4,9.2v6.6c0,0.4,0.3,0.8,0.8,0.8h21.7c0.4,0,0.8-0.3,0.8-0.8l0,0v-3.8L30,10.1C30.1,9.7,29.9,9.3,29.5,9.2L29.5,9.2z"></path>
                          </svg>
                          Follow Us </a> </div>
                    				        <div class="search">
                  <span class="search-triger">
                    <svg version="1.1" x="0px" y="0px"
                      viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                      <path d="M23.7,22l-4.5-4.4c3.7-4.7,3-11.5-1.7-15.2S6.1-0.7,2.3,4s-3,11.5,1.7,15.2c4,3.2,9.6,3.2,13.5,0l4.4,4.4
                        c0.5,0.5,1.2,0.5,1.7,0c0,0,0,0,0,0C24.1,23.2,24.1,22.4,23.7,22z M2.4,10.8c0-4.6,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4
                        s-3.8,8.4-8.4,8.4S2.4,15.5,2.4,10.8z"/>
                    </svg>
                  </span>
	                   <form id="form_search" name="frmsrch" class="frmsrch eventtracker" data-event-cat="Header" data-event-sub-cat="Search" action="https://www.india.com/searchresult/" onSubmit="return chkVal('t2')">
                  <div class="search-field">
                    <input type="hidden" name="cx" value="partner-pub-6717584324019958:4408969895" />
                    <input type="hidden" name="cof" value="FORID:10" />
                    <input type="hidden" name="ie" value="UTF-8" />
                    <input type="text" name="q" id="t2" id="srchtxt" placeholder="Search here...">
                    <input type="submit"  name="sa" id="btnggsrch" value="telangana" class="search-btn">
                  </div>
                </form>
	              </div>
		            <!--search scricpt-->
                <script>
                  window.addEventListener("scroll", function(event) {
                  $('.header').on('click', '.search-toggle', function(e) {
                    var selector = $(this).data('selector');
                    $(selector).toggleClass('show').find('.search-input').focus();
                    $(this).toggleClass('active');
                    e.preventDefault();
                    var el = document.getElementById('searchform');
                    if(el.style.display == 'block')
                    el.style.display = 'none';
                    else
                    el.style.display = 'block';
                  });
                  });
                </script>
                <!--search ends-->
              </div>
              <!--secondary nav wrap ends--> 
              
            </div>
            <!--top right ends--> 
          </div>
        </div>
      </div>
      <!--logo wrap ends--> 
    </section>
  </section>
</header>

<!--header ends--> 
      <!-- photo gallery popup -->
<div class="telegram-popup-sometime close" id='popup'>
      <div class="white-box">    <h3>We are on Telegram now</h3>
          <p>click this icon for latest updates</p>
          <p><a href="https://t.me/IndiadotcomEnglish" aria-label="Telegram india.com" onclick='gtag("event", "Click", { "event_category": "Telegram","event_label": "PopUp"});' target="_blank">
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 49 49" style="enable-background:new 0 0 49 49;" xml:space="preserve">
              <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="-1629.1918" y1="31.7052" x2="-1629.3878" y2="32.1626" gradientTransform="matrix(62.5 0 0 62.5 101856.1719 -1973.8334)">
                <stop  offset="0" style="stop-color:#37AEE2"/>
                <stop  offset="1" style="stop-color:#1E96C8"/>
              </linearGradient>
              <path class="tel-pop-st0-3" d="M49,24.5C49,38,38,49,24.5,49S0,38,0,24.5S11,0,24.5,0S49,11,49,24.5z"/>
              <path class="tel-pop-st1-3" d="M20,35.7c-0.8,0-0.7-0.3-0.9-1.1L16.7,27l14.5-9l1.7,0.4l-1.4,3.8L20,35.7z"/>
              <path class="tel-pop-st2-3" d="M20,35.7c0.6,0,0.9-0.3,1.2-0.6c0.5-0.5,7.4-7.1,7.4-7.1l-4.2-1l-3.9,2.4L20,35.5V35.7z"/>
              <linearGradient id="3SVGID_00000158709142453131182760000017889503864187844542_" gradientUnits="userSpaceOnUse" x1="-843.1635" y1="374.4134" x2="-842.6735" y2="375.1974" gradientTransform="matrix(10.4167 0 0 10.4167 8809.292 -3874.875)">
                <stop  offset="0" style="stop-color:#EFF7FC"/>
                <stop  offset="1" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path style="fill:url(#3SVGID_00000158709142453131182760000017889503864187844542_);" d="M20.4,29.5l9.9,7.3c1.1,0.6,1.9,0.3,2.2-1
  l4-18.9c0.4-1.7-0.6-2.4-1.7-1.9L11.2,24c-1.6,0.7-1.6,1.6-0.3,1.9l6.1,1.9L31,19c0.7-0.4,1.3-0.2,0.8,0.3L20.4,29.5z"/>
            </svg>
            </a></p>
          <i onClick='closeDialog1();' class="telegram-close-som"></i> </div>
     </div>
              
<!--all details starts-->
<main class="common-all-content">
  <div class="container">
	<!--cre starts-->
    <div style="display:none;">
        <div class="cre-setion">
          <h2 class="border-heading">Top Recommended Stories</h2>
            <div class="black-boxes">
         <div class="cre-carousel-height">
        <div class="all-data">
            <div class="splide" id="top-recommended-splide">
              <div class="splide__track">
                <ul class="splide__list" id="topStoriesList-list">
                              
                </ul>
              </div>
            </div>
          </div>
            </div>
            </div>
        </div>
        </div>
        <!--cre ends-->     <div class="two-cols-aside"> 
      <!--listing lhs starts-->
      <section class="lhs-col"> 
        <!--breadcrumb starts-->
        <div class="breadcrumb">
          <ul>
            <li ><span><span ><a  href="https://www.india.com"><span >Home</span></a>  >  </span><span><span><span>Telangana</span></span><script type="application/ld+json">
                    {
                      "@context": "https://schema.org",
                      "@type": "BreadcrumbList",
                      "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                        "@id": "https://www.india.com",
                        "name": "Home"
                                      
                       }
                    },{
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                        "@id": "https://www.india.com/telangana/",
                        "name": "Telangana"
                                      
                       }
                    }]
                     }
                </script></li>
     
          </ul>
        </div>
        <!--breadcrumb ends--> 
        
        <!--news listing starts-->
        <div class="news-boxes listing">
          
          <div class="heading-page-no">
            <h1>Telangana</h1>
            <span class="page-of">Page - 1</span>
          </div>
          
          <ul class="social-icon">
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.india.com/telangana/"target="_blank" aria-label="facebook india.com">
              <svg version="1.1" x="0px" y="0px" width="30" height="30" viewBox="0 0 31 31" enable-background="new 0 0 31 31" xml:space="preserve">
                <g>
                  <path fill="#4367B1" d="M15.373,1.381L15.373,1.381c7.787-0.01,14.109,6.295,14.12,14.081c0,0.013,0,0.026,0,0.04l0,0
			c0.01,7.788-6.295,14.11-14.082,14.118c-0.013,0-0.025,0-0.038,0l0,0C7.587,29.631,1.264,23.324,1.254,15.539
			c0-0.013,0-0.024,0-0.037l0,0C1.244,7.714,7.549,1.392,15.335,1.381C15.349,1.381,15.361,1.381,15.373,1.381z"></path>
                </g>
                <path fill="#FAFAFA" d="M20.737,13.806h-3.389v-2.729c0-0.752,0.565-0.658,1.32-0.658h1.315V7.029h-2.728
		c-2.26,0-4.049,1.789-4.049,4.047v2.729h-2.541v3.39h2.73v7.438h4.046v-7.438h1.979L20.737,13.806L20.737,13.806z"></path>
              </svg>
              </a></li>
            <li><a href="https://www.twitter.com/share?url=https://www.india.com/telangana/" target="_blank" aria-label="twitter india.com">
              <svg version="1.1"  x="0px" y="0px" width="30" height="30" viewBox="0 0 31 31" enable-background="new 0 0 31 31" xml:space="preserve">
                <g>
                  <path fill="#5FA9DD" d="M15.292, 0.991L15.292, 0.991c8.003-0.01, 14.5, 6.469, 14.508, 14.473c0, 0.012, 0, 0.025, 0, 0.037l0, 0
c0.01, 8.003-6.466, 14.501-14.469, 14.509c-0.015, 0-0.027, 0-0.039, 0l0, 0C7.288, 30.021, 0.79, 23.545, 0.78, 15.54
c0-0.013, 0-0.024, 0-0.039l0, 0C0.771, 7.499, 7.249, 1.002, 15.253, 0.991C15.265, 0.991, 15.277, 0.991, 15.292, 0.991z"></path>
                </g>
                <path fill="#FFFFFF" d="M22.516, 12.677V12.14c0.751-0.645, 1.396-1.289, 1.826-2.15l0, 0c-0.645, 0.323-1.396, 0.538-2.148, 0.646
c0.753-0.539, 1.396-1.398, 1.611-2.257c-0.754, 0.43-1.505, 0.859-2.364, 0.967c-0.645-0.859-1.612-1.29-2.687-1.29
c-2.149, 0.108-3.868, 1.934-3.76, 4.191c0, 0.323, 0, 0.646, 0.107, 0.968C11.983, 13, 9.19, 11.388, 7.471, 8.917
c-0.323, 0.643-0.538, 1.396-0.538, 2.148c0, 1.396, 0.646, 2.579, 1.612, 3.438c-0.645, 0-1.182-0.215-1.718-0.537l0, 0
c-0.108, 1.934, 1.182, 3.547, 3.009, 4.083c-0.539, 0.109-1.075, 0.217-1.721, 0.109c0.43, 1.609, 1.827, 2.793, 3.438, 2.902
c-1.288, 1.18-2.899, 1.719-4.621, 1.719H6.074c1.611, 1.182, 3.653, 1.824, 5.694, 1.824C18.754, 24.498, 22.516, 18.158, 22.516, 12.677
L22.516, 12.677z"></path>
              </svg>
              </a></li>
          </ul>
                  <!--news cat listing ends--> 
   <!--testing section featured--> 
                        <!--testing section featured--> 
            

<div class="Webstories">
  <h2 class="border-heading"><a target="_blank" href="https://www.india.com/webstories/telangana/" onclick='gtag("event", "Click", { "Category": "ViewAll","event_label": "WebstoryWidgetHomepage"});'>Webstories</a> <span class="view-more"><a onclick='gtag("event", "Click", { "Category": "ViewAll","event_label": "WebstoryWidgetHomepage"});' href="https://www.india.com/webstories/telangana/" aria-label="View More">View all</a> </span></h2>
  <div class="splide splide--slide splide--ltr splide--draggable is-active is-initialized" id="web-stories-slider" role="region" aria-roledescription="carousel" onscroll="movethis();">
    <div class="splide__arrows splide__arrows--ltr"><button class="splide__arrow splide__arrow--prev" type="button" disabled="" aria-label="Previous slide" aria-controls="web-stories-slider-track"></button><button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide" aria-controls="web-stories-slider-track"></button></div><div class="splide__track splide__track--slide splide__track--ltr splide__track--draggable" id="web-stories-slider-track" style="padding-left: 0px; padding-right: 0px;" aria-live="polite" aria-atomic="true">
      <ul class="splide__list" id="web-stories-slider-list" role="presentation" style="transform: translateX(0px);" onscroll="movethis();">
                <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="1 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/telangana-assembly-election-result-most-expensive-things-owned-by-revanth-reddy-gold-jewellery-agricultural-land-investment-6566378/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/12/RevanthReddy13.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Most Expensive Things Owned by Revanth Reddy"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Most Expensive Things Owned by Revanth Reddy</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="2 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/states/telangana-states/telangana-assembly-election-2023-faq-dates-constituencies-seats-key-players-candidates-brs-kcr-revanth-reddy-seethakka-venkata-namapally-narsapur-6443531/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/10/election7-1.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Assembly Election 2023: Dates, Seats, Key Players"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Assembly Election 2023: Dates, Seats, Key Players</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="3 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/news/india/9-best-biryani-places-in-hyderabad-6542000/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/11/biryani1.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="9 Best Biryani Places In Hyderabad"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>9 Best Biryani Places In Hyderabad</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="4 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/rare-photos-of-hyderabad-that-you-have-not-seen-before-railway-station-public-school-mecca-masjid-banknotes-british-residency-6530775/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/11/Mecca-Masjid.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Rare Photos Of Hyderabad That You Have Not Seen Before"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Rare Photos Of Hyderabad That You Have Not Seen Before</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="5 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/telangana-weather-update-today-22-november-2023-heavy-rainfall-predicted-for-hyderabad-waterlogging-flood-in-tamil-nadu-6523075/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/11/heavy-rains-22-11.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Weather Update: Heavy Rainfall in Hyderabad This Week"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Weather Update: Heavy Rainfall in Hyderabad This Week</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="6 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/telangana-weather-update-27-september-imd-predicts-heavy-rains-for-hyderabad-yellow-alert-check-rainfall-alert-in-odisha-andhra-karnataka-6358971/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/09/IMD-weather-Update-6-3.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Rainfall Alert: IMD Predicts Heavy Rains For Hyderabad"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Rainfall Alert: IMD Predicts Heavy Rains For Hyderabad</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="7 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/telangana-weather-update-today-22-september-2023-imd-predicts-heavy-rains-yellow-alert-nizamabad-kamareddy-sangareddy-medak-siddipet-6345528/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/09/Gujarat-Rains-1-3.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Weather Update: Heavy Rain Alert Issued For These Districts"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Weather Update: Heavy Rain Alert Issued For These Districts</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="8 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/states/telangana-states/telangana-weather-update-today-14-september-2023-imd-predicts-heavy-rains-issues-yellow-alert-cyclone-thunderstorm-bay-of-bengal-6320831/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/09/Tamil-Nadu-Weather-9-3.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Weather Update: IMD Predicts Heavy Rains, Issues Yellow Alert"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Weather Update: IMD Predicts Heavy Rains, Issues Yellow Alert</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="9 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/states/telangana-states/telangana-weather-update-today-12-september-2023-imd-predicts-heavy-rainfalls-for-state-from-sept-13-check-rain-forecast-6313830/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/09/Tamil-Nadu-Weather-7-4.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Weather Update: State to Receive Heavy Rains From Sept 13"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Weather Update: State to Receive Heavy Rains From Sept 13</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="10 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/telangana-weather-update-today-1-september-2023-heavy-rains-predicted-till-sept-3-yellow-alert-issued-check-imd-forecast-6278634/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/09/Weather-Update-Daily-2.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Telangana Weather Update: Heavy Rains Predicted For State Till Sept 3"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Telangana Weather Update: Heavy Rains Predicted For State Till Sept 3</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="11 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/telangana/weather-update-today-21-heavy-rains-predicted-for-telangana-yellow-alert-mancherial-jayashankar-bhupalapally-mulugu-6179709/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/07/weather-update-7-8.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Weather Update: Heavy Rains Predicted For Telangana"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Weather Update: Heavy Rains Predicted For Telangana</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
               <li class="splide__slide is-active is-visible" id="web-stories-slider-slide01" role="group" aria-roledescription="slide" aria-label="12 of 12" style="margin-right: 10px; width: calc(((100% + 10px) / 4) - 10px);">
          <article class="repeat-box"><a target="_blank" href="https://www.india.com/webstories/news/india/secunderabad-railway-station-to-be-revedeloped-interesting-facts-telangana-5985303/" aria-label="india.com web stories"  onclick='gtag("event", "Click", { "Category": "Homepage","event_label": "WebstoryWidget"});' >
            <figure>
              <div class="photo">
                <div class="lazy-image shine"> <img class="lazy" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" data-src="https://static.india.com/wp-content/uploads/2023/04/Secunderabad-Railway-Station2-1.jpg?impolicy=Medium_Widthonly&w=350&h=431" width="350" height="431" alt="Secunderabad Railway Station To Be Revedeloped"> 
                    <span class="stories-icon">
                       <svg width="43.087" height="38.762" viewBox="0 0 43.087 38.762">
                    <defs>
                      <filter id="Rectangle_9411" x="6.921" y="0" width="29.246" height="38.762" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                        <feFlood flood-opacity="0.361"></feFlood>
                        <feComposite operator="in" in2="blur"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9412" x="19.897" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-2"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-2"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9413" x="3.46" y="1.73" width="19.73" height="35.302" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-3"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-3"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9414" x="0" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-4"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-4"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                      <filter id="Rectangle_9415" x="23.357" y="3.46" width="19.73" height="30.976" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"></feOffset>
                        <feGaussianBlur stdDeviation="3" result="blur-5"></feGaussianBlur>
                        <feFlood flood-opacity="0.161"></feFlood>
                        <feComposite operator="in" in2="blur-5"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                      </filter>
                    </defs>
                    <g id="Group_5176" data-name="Group 5176" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9411)">
                        <rect id="Rectangle_9411-2" data-name="Rectangle 9411" width="11.246" height="20.762" transform="translate(15.92 6)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9412)">
                        <rect id="Rectangle_9412-2" data-name="Rectangle 9412" width="1.73" height="17.302" transform="translate(28.9 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9413)">
                        <rect id="Rectangle_9413-2" data-name="Rectangle 9413" width="1.73" height="17.302" transform="translate(12.46 7.73)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9414)">
                        <rect id="Rectangle_9414-2" data-name="Rectangle 9414" width="1.73" height="12.976" transform="translate(9 9.46)" fill="#fff"></rect>
                      </g>
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_9415)">
                        <rect id="Rectangle_9415-2" data-name="Rectangle 9415" width="1.73" height="12.976" transform="translate(32.36 9.46)" fill="#fff"></rect>
                      </g>
                    </g>
                    </svg></span>
                  </div>
              </div>
              <figcaption class="text">
                <p>Secunderabad Railway Station To Be Revedeloped</p>
              </figcaption>
            </figure>
            </a> </article>
        </li>
             </ul>
    </div>
  </div>
</div>
          <h2 class="border-heading">
            News          </h2>
          <!--listing all box starts-->
          <div class="listing-boxes">
           
                                                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana-states/telangana-governors-tamilisai-soundararajan-x-twitter-account-hacked-6661795/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/05/telangana0.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana-states/telangana-governors-tamilisai-soundararajan-x-twitter-account-hacked-6661795/" aria-label="india.com news">Telangana Governor   s 'X' Account Hacked</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana-states">Telangana</a> <a href="https://www.india.com/author/analiza-pathak/">Analiza Pathak</a>  January 18, 2024 6:38 AM IST </p>
                  </div>
                  <p> The police have reportedly contacted the management of the microblogging site about the hacking. They were also trying to identify the culprits.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/viral/ayodhya-ram-mandir-on-wheels-hyderabad-designer-builds-ram-mandir-replica-car-sudha-car-museum-watch-viral-video-6662332/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/MixCollage-17-Jan-2024-08-50-PM-5216.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/viral/ayodhya-ram-mandir-on-wheels-hyderabad-designer-builds-ram-mandir-replica-car-sudha-car-museum-watch-viral-video-6662332/" aria-label="india.com news">Ram Mandir On Wheels: Hyderabad Designer Builds Ram Mandir Replica Car | WATCH</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana">Telangana</a> <a href="https://www.india.com/author/gazi-shahid/">Gazi Abbas Shahid</a>  January 17, 2024 8:52 PM IST </p>
                  </div>
                  <p> Sudhakar Yadav, the owner of Sudha Cars Museum, has crafted this unique masterpiece which is essentially mobile van with a near-perfect replica of the Ayodhya Ram Mandir mounted atop the vehicle.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/viral/watch-hyderabad-caterer-prepares-over-1250-kg-laddu-for-ram-mandir-pran-pratishtha-6662598/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/MixCollage-17-Jan-2024-11-42-PM-5348.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/viral/watch-hyderabad-caterer-prepares-over-1250-kg-laddu-for-ram-mandir-pran-pratishtha-6662598/" aria-label="india.com news">WATCH: Hyderabad Caterer Prepares Over 1,250 KG Laddu For Ram Mandir 'Pran Pratishtha'</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana">Telangana</a> <a href="https://www.india.com/author/gazi-shahid/">Gazi Abbas Shahid</a>  January 17, 2024 11:43 PM IST </p>
                  </div>
                  <p> A Hyderabad caterer has prepared a massive laddu, weighing over 1,250 kilograms, as an offering at the Ayodhya Ram Mandir.</p>
                </figcaption>
              </figure>
              </article>
              <!--Trending Now CRE starts-->
  <div class="cre-setion trending-now-cre gray-bg-cre">
          <h2 class="border-heading">Trending Now</h2>
          <div class="black-boxes">
            <div class="cre-carousel-height">
              <div class="all-data">
                <div class="splide trending-now-cre-splide-multiple" id="cre-article-detail-widget-splide-one">
                  <div class="splide__track">
                    <ul class="splide__list" id="cre-article-listing-widget-one">
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Trending Now CRE ends-->
       	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana-states/breaking-news-1-charred-to-death-in-telangana-as-bus-catches-fire-video-6652432/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/bus-fire.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana-states/breaking-news-1-charred-to-death-in-telangana-as-bus-catches-fire-video-6652432/" aria-label="india.com news">Woman Charred To Death In Telangana As Bus Catches Fire | Video</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana-states">Telangana</a> <a href="https://www.india.com/author/joy-pillai/">Joy Pillai</a>  January 13, 2024 11:07 AM IST </p>
                  </div>
                  <p> A woman charred to death after a bus caught fire in Telangana's Jogulamba Gadwal district early morning.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana-states/telangana-road-accident-26-injured-including-pregnant-woman-hanumakonda-january-8-top-news-6639871/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/telangana-accident-1.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana-states/telangana-road-accident-26-injured-including-pregnant-woman-hanumakonda-january-8-top-news-6639871/" aria-label="india.com news">26, Including Pregnant Woman, Injured As Bus Hits Tree In Telangana's Hanumakonda | Video</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/india">India</a> <a href="https://www.india.com/author/newsdesk/">India.com News Desk</a>  January 8, 2024 7:30 AM IST </p>
                  </div>
                  <p> Twenty-six people sustained injuries after a bus, in which they were traveling, hit a tree in Telangana's Hanumakonda.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/watch-video-telangana-hyderabad-golconda-woman-fareeda-begum-says-trafficked-to-muscat-oman-under-pretext-of-job-appeals-govt-to-rescue-her-6635462/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/MixCollage-05-Jan-2024-10-56-PM-8229.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/watch-video-telangana-hyderabad-golconda-woman-fareeda-begum-says-trafficked-to-muscat-oman-under-pretext-of-job-appeals-govt-to-rescue-her-6635462/" aria-label="india.com news">WATCH: Hyderabad Woman Says 'Trafficked' To Oman On Pretext Of Job, Appeals Govt To Rescue Her</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana">Telangana</a> <a href="https://www.india.com/author/gazi-shahid/">Gazi Abbas Shahid</a>  January 5, 2024 10:58 PM IST </p>
                  </div>
                  <p> Fareeda Begum, a resident of Golconda in Telangana's Hyderabad, revealed she was lured to UAE by a woman named Shehnaz Begum and later "trafficked" to Muscat, Oman.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/telangana-govt-issues-covid-guidelines-covid-status-bulletin-as-8-new-active-jn1-variant-covid-cases-reported-6615229/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/12/8-New-Covid-Cases-Reported-In-Telangana.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/telangana-govt-issues-covid-guidelines-covid-status-bulletin-as-8-new-active-jn1-variant-covid-cases-reported-6615229/" aria-label="india.com news">JN.1 Subvariant: Telangana Reports 8 New Cases, Check State Covid Status Bulletin, Guidelines To Be Followed</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/news">News</a> <a href="https://www.india.com/author/ananya-srivastava/">Ananya Srivastava</a>  December 27, 2023 2:01 PM IST </p>
                  </div>
                  <p> Covid cases are rising in different states of India; eight new cases have been reported in Telangana. Check status of covid cases in the state and its covid status bulletin..</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/jn-1-variant-covid-case-in-telangana-62-year-old-woman-isolated-after-developing-symptoms-in-warangal-covid-cases-in-india-latest-update-6607942/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/12/Representative-Image-17.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/jn-1-variant-covid-case-in-telangana-62-year-old-woman-isolated-after-developing-symptoms-in-warangal-covid-cases-in-india-latest-update-6607942/" aria-label="india.com news">JN.1 Variant Covid Case In Telangana, 62-Year-Old Woman Isolated After Developing Symptoms</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/news">News</a> <a href="https://www.india.com/author/ananya-srivastava/">Ananya Srivastava</a>  December 24, 2023 6:40 AM IST </p>
                  </div>
                  <p> Covid cases have rapidly been rising in the country, in the last few days. A 62-year-old woman has now been isolated in Warangal, Telangana after developing JN.1 Variant symptoms. The variant however is yet to be confirmed after genome sequencing..</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/fire-breaks-out-hyderabad-hospital-fire-tenders-rushed-to-spot-telangana-6607522/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/12/QT-fire-.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/fire-breaks-out-hyderabad-hospital-fire-tenders-rushed-to-spot-telangana-6607522/" aria-label="india.com news">Fire Breaks Out At Hyderabad Hospital, Fire Tenders Rushed To Spot</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana">Telangana</a> <a href="https://www.india.com/author/tahir-qureshi/">Tahir Qureshi</a>  December 23, 2023 7:42 PM IST </p>
                  </div>
                  <p> Fire tenders have rushed to the spot.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/telangana-government-offers-upto-90-discount-on-traffic-challans-details-here-6605992/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/12/revanth-reddy-1.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/telangana-government-offers-upto-90-discount-on-traffic-challans-details-here-6605992/" aria-label="india.com news">New Telangana Government Offers Upto 90% Discount On Traffic Challans; Details Here</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/business">Business</a> <a href="https://www.india.com/author/newsdesk/">India.com News Desk</a>  December 22, 2023 10:38 PM IST </p>
                  </div>
                  <p> For two-wheelers and three-wheelers, 80 percent of the challan amount is waived off. The discount in case of cars and other light motor vehicles and trucks and other heavy motor vehicles is 60 per cent. The Congress, in its election manifesto, had promised to offer a discount on traffic challans to provide relief to vehicle owners.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/traffic-restrictions-imposed-in-hyderabad-for-christmas-check-list-of-routes-to-avoid-6604427/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/12/Bengaluru-Traffic-ANI.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/traffic-restrictions-imposed-in-hyderabad-for-christmas-check-list-of-routes-to-avoid-6604427/" aria-label="india.com news">Hyderabad Police Imposes Traffic Restrictions For Christmas: Check List Of Routes To Avoid</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana">Telangana</a> <a href="https://www.india.com/author/newsdesk/">India.com News Desk</a>  December 22, 2023 11:15 AM IST </p>
                  </div>
                  <p> Hyderabad Traffic Restrictions News: Hyderabad Traffic Police said it will impose restrictions between 5 PM and 9 PM on Friday due to the Christmas celebration event hosted by Telangana Chief Minister Revanth Reddy at LB Stadium.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana-states/traffic-restrictions-imposed-in-hyderabad-ahead-of-president-murmus-visit-check-list-of-routes-to-avoid-6593657/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/12/Delhi-Noida-Traffic-Advisory-For-December-6.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana-states/traffic-restrictions-imposed-in-hyderabad-ahead-of-president-murmus-visit-check-list-of-routes-to-avoid-6593657/" aria-label="india.com news">Traffic Restrictions Imposed in Hyderabad Ahead of President Murmu   s Visit: Check List of Routes to Avoid</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana-states">Telangana</a> <a href="https://www.india.com/author/newsdesk/">India.com News Desk</a>  December 18, 2023 8:48 AM IST </p>
                  </div>
                  <p> President Murmu will arrive in Hyderabad on December 18 for a five-day southern sojourn.</p>
                </figcaption>
              </figure>
              </article>
                     	
                                                         
                    <article class="repeat-box">
                     <figure>
                <div class="photo"><a href="https://www.india.com/telangana/telangana-govt-holiday-list-2024-govt-offices-to-remain-shut-for-27-days-in-general-check-full-list-ugadi-eid-ul-fitr-eid-ul-adha-muharram-6582665/" aria-label="india.com news">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/11/Bihar-Holiday-Calendar-2.jpg?impolicy=Medium_Widthonly&w=320" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="320" height="180" /> </div>
                  </a> </div>
                <figcaption class="text">
                  <h2><a href="https://www.india.com/telangana/telangana-govt-holiday-list-2024-govt-offices-to-remain-shut-for-27-days-in-general-check-full-list-ugadi-eid-ul-fitr-eid-ul-adha-muharram-6582665/" aria-label="india.com news">Telangana Govt Holiday List 2024: Govt Offices to Remain Shut For 27 Days in General, Check Full List</a></h2>
                  <div class="published-by">
                    <p class="date"><i class="date-icon">
                      <svg version="1.1" x="0px" y="0px"
	 width="18" height="18" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
                        <g transform="translate(57.875 26.187)">
                          <path fill="#8B919C" d="M-40.861-23.692h-3.262v-1.985h-1.129v2.108h-7.279v-2.108h-1.128v2.108h-3.265
		c-0.5,0-0.877,0.374-0.877,0.87v12.276c0,0.496,0.377,0.867,0.877,0.867h16.063c0.502,0,0.88-0.371,0.88-0.867V-22.7
		C-39.981-23.321-40.359-23.692-40.861-23.692L-40.861-23.692z M-41.236-10.796h-15.437v-11.78h3.014v1.489h1.128v-1.489h7.152
		v1.489h1.131v-1.489h3.012V-10.796z"/>
                          <path fill="#8B919C" d="M-54.289-18.98h1.131v1.116h-1.131V-18.98z"/>
                          <path fill="#8B919C" d="M-51.025-18.98h1.128v1.116h-1.128V-18.98z"/>
                          <path fill="#8B919C" d="M-48.014-18.98h1.132v1.116h-1.132V-18.98z"/>
                          <path fill="#8B919C" d="M-44.75-18.98h1.129v1.116h-1.129V-18.98z"/>
                          <path fill="#8B919C" d="M-54.289-16.376h1.131v1.116h-1.131V-16.376z"/>
                          <path fill="#8B919C" d="M-51.025-16.376h1.128v1.116h-1.128V-16.376z"/>
                          <path fill="#8B919C" d="M-48.014-16.376h1.132v1.116h-1.132V-16.376z"/>
                          <path fill="#8B919C" d="M-44.75-16.376h1.129v1.116h-1.129V-16.376z"/>
                          <path fill="#8B919C" d="M-54.289-13.649h1.131v1.117h-1.131V-13.649z"/>
                          <path fill="#8B919C" d="M-51.025-13.649h1.128v1.117h-1.128V-13.649z"/>
                          <path fill="#8B919C" d="M-48.014-13.649h1.132v1.117h-1.132V-13.649z"/>
                          <path fill="#8B919C" d="M-44.75-13.649h1.129v1.117h-1.129V-13.649z"/>
                        </g>
                      </svg>
                      </i> <a href="https://www.india.com/telangana">Telangana</a> <a href="https://www.india.com/author/newsdesk/">India.com News Desk</a>  December 13, 2023 1:06 PM IST </p>
                  </div>
                  <p> Telangana Govt Holiday List 2024: All state government offices will be closed on Sundays and second Saturdays throughout 2024, except the second Saturday in February 2024 (February 10), which will be a working day instead of a public holiday declared on January 1, 2024.</p>
                </figcaption>
              </figure>
              </article>
                     	

            <!--pagination and total page-of starts-->
            <div class="pagination" > 
             <span class="prev disabled " >Prev</span><a href="https://www.india.com/telangana/page/2/" > <span class="next" >Next</span></a>          </div>
            <!--pagination and total page-of ends--> 
          </div>
          <!--listing all box ends--> 
        </div>
        <!--news listing ends--> 
 
  <style type="text/css">
  /**************subscribe now in bottom starts*************/
.subscribe-now-bottom{display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center;overflow:hidden;border:1px solid var(--color-1);margin-top:15px;border-radius:10px;}
.subscribe-now-bottom .subscribe-logo{width:auto;padding-left:15px;text-align:center}
.subscribe-now-bottom img{display:inline-block}
.subscribe-now-bottom .text{width:auto;padding:5px 10px;border-left:1px solid var(--color-1);margin:5px 0}
.subscribe-popup .thanks-u p,
.subscribe-now-bottom .text p{font-size:16px;line-height:1.3;font-weight:700;color:#ee6721;padding:0}
.subscribe-popup .thanks-u p span,
.subscribe-now-bottom .text p span{color:#136b3c}
.subscribe-now-bottom .btn-col{width:auto;}
.subscribe-popup .thanks-u .subscribe-btn-thanks,
.subscribe-popup .subscribe-btn-popup,
.subscribe-now-bottom .btn-col .btn{min-width:129px;font-size:13px;border:0;border-radius:10px;padding:10px 0;color:var(--white);font-weight:700;text-transform:none;background:#919191;background:-moz-linear-gradient(top,  #919191 0%, #040404 100%);background:-webkit-linear-gradient(top,  #919191 0%,#040404 100%);background:linear-gradient(to bottom,  #919191 0%,#040404 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#919191', endColorstr='#040404',GradientType=0 );}
.subscribe-popup .thanks-u .subscribe-btn-thanks:hover,
.subscribe-popup .subscribe-btn-popup:hover,
.subscribe-now-bottom .btn-col .btn:hover{background:#0784d3;background:-moz-linear-gradient(top,  #0784d3 0%, #195bca 100%);background:-webkit-linear-gradient(top,  #0784d3 0%,#195bca 100%);background:linear-gradient(to bottom,  #0784d3 0%,#195bca 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#0784d3', endColorstr='#195bca',GradientType=0 );}
.subscribe-now-bottom .envelope{width:auto;margin-top:3px;border-radius:0 10px 0 0;}

.subscribe-popup{position:fixed;left:0;top:0;right:0;bottom:0;background-color:var(--color-4);z-index:9999;display:none;padding:10px}
.subscribe-popup.active{display:block!important;opacity:1}
.subscribe-popup .white-box{position:relative;z-index:90;margin:0 auto;max-width:450px;padding:15px;box-shadow:0 0 6px var(--color-1);background-color:var(--gray-bg);border-radius:10px;top: 50%;-ms-transform: translateY(-50%); transform: translateY(-50%);}
.subscribe-popup .subscribe-form{position:relative; z-index: 5}
.subscribe-popup h2.border-heading{margin-top: 0}
.subscribe-popup h2.border-heading:before{top:5px!important}
.subscribe-popup p{font-size:16px;line-height:1.4;padding:5px 0 20px;}
.subscribe-popup .error{font-size:14px;line-height:1;padding:5px 0; color: red; margin-left: 5px;}
.subscribe-popup input[type="text"],
.subscribe-popup input[type="email"]{padding:10px 15px;border-radius:5px;font-size:16px;line-height:1.4;}
.subscribe-popup input + input{margin-top:20px}
.subscribe-popup .envelope{position:absolute;right:0px;bottom:0px; opacity:.2}
.subscribe-close{position:absolute;right:0px;top:0px;cursor:pointer;cursor:pointer;z-index:5;width:30px;height:30px;display:inline-block; background-color:var(--color-05); border-radius:0 0 0 10px}
.subscribe-close:before, 
.subscribe-close:after{content:'';height:2px;width:14px;display:block;background:var(--color-6);position:absolute;top:13px;left:8px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);border:0}
.subscribe-close:after{transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);}
.subscribe-popup .thanks-u{text-align: center;margin: 10px 0;}
.subscribe-popup .thanks-u p, .subscribe-popup .thanks-u p span {font-size: 20px;}
.subscribe-popup .thanks-u .subscribe-btn-thanks{color:#ffc343!important; margin-top: 15px; text-transform: uppercase; padding:10px 15px}
.subscribe-popup .thanks-u .subscribe-btn-thanks img{vertical-align: middle; margin-right: 5px; display: inline-block}
.subscribe-popup .thanks-u .subscribe-btn-thanks:hover{color:var(--white)!important;}
/**************subscribe now in bottom ends*************/
</style>


<!--Subscribe Now in bottom starts-->
        <div class="subscribe-now-bottom">
          <div class="subscribe-logo"> <a href="https://www.india.com" aria-label="india.com logo"><img src="https://static.india.com/wp-content/themes/icommobile/images/India-header-logo.svg" alt="India.com" width="100" height="22.45"> </a> </div>
          <div class="text">
            <p>Don’t Miss Out on the Latest Updates.<br>
              <span>Subscribe to Our Newsletter Today!</span></p>
          </div>
          <div class="btn-col">
            <button class="btn subscribe-btn">Subscribe Now</button>
          </div>
          <div class="envelope"> <img src="https://static.india.com/wp-content/uploads/2023/06/subscribe-now-envelope.png" alt="India.com subscribe now" width="107" height="67"> </div>
        </div>
        <div class="subscribe-popup">
          <div class="white-box">
          <h2 class="border-heading showhide">Subscribe Now</h2>
            <p class='showhide'>Enroll for our free updates</p>
              <div class="subscribe-form showhide" id="subscribe-form">
              <form  class="subscribe-form" name='sub-form' method="post">
              <input type="text" maxlength="50" name="" id="name" autocomplete="off" required  placeholder="Full Name">
              <input type="email" maxlength="100" name="" id="email" required id="email"  autocomplete="off" placeholder="E-mail">
              <input type="hidden" name="site" id="site" value="https://www.india.com/">
              <input type="submit" class="subscribe-btn-popup" id="submitnow" value="Subscribe Now">
              </form>
              </div>
            
            
            <div class="envelope"> <img src="https://static.india.com/wp-content/uploads/2023/06/subscribe-now-envelope.png" alt="India.com subscribe now" width="107" height="67"> </div>
              <div class="thanks-u" style="display: none;">
               <p><span>Thank you</span></p>
              
              </div>
            <i class="subscribe-close"></i>
            </div>
        </div>
        <!--Subscribe Now in bottom ends-->


 <script>    
// Subscribe Now popup
$( document ).ready(function() {
  $("#submitnow").on("click", function() {
    var pattern = /^[a-zA-Z ]+$/;
    var name = $.trim($('#name').val());
    $(".error").remove();
    if(!pattern.test(name)){
        $('#name').focus();
        $('#name').after('<p class="error" >Please enter full name.</p>');
        return false;
    }
    var email = $('#email').val();
    var site = $('#site').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(email))
    {
      $('#email').focus();
      $('#email').after('<p class="error" >Please enter valid email address.</p>');
      return false;
    }
    
    $("#submitnow").prop('disabled', true)
    // Send the data to the controller using Ajax
    $.ajax({
        url: 'https://www.india.com/newsletter/subscribe-data.php',
        method: 'post',
        type: "POST",
         cache: false,
        data: {
            name: name,
            email: email,
            site: site
        },
        success: function(response) {
            $("#submitnow").prop('disabled', false)
            $('.showhide').hide();
            $('.thanks-u').show();
        }
    });
  })
})
</script><!--taboola in bottom starts-->
<div class="taboola-bottom">
          <div class="taboola-code">
          <div id="taboola-below-category-thumbnails"></div>
                 <script type="text/javascript">  
                  function load_taboola_category_script(){  
                  window._taboola = window._taboola || [];  
          dataLayer.push({'event':'taboola_view'}); 
                  _taboola.push({ 
                    mode: 'thumbnails-a', 
                    container: 'taboola-below-category-thumbnails', 
                    placement: 'Below Category Thumbnails', 
                    target_type: 'mix'  
                  }); 
                } 
                </script>

                </div>
        </div> 
                </section>
       
 
        <!--taboola in bottom ends--> 
      </section>
      <!--listing lhs ends--> 
      <!--aside starts-->
      <aside class="aside"> 
        <!--ads box starts-->
        <div class="ads-box">
          <div class="ads-placeholder">
                        <div id='div-gpt-ad-1525434127325-1' style='width:300px; height:auto;'></div>

          

          </div>
        </div>
        <!--ads box ends--> 
       
      <!--Live Scorecard starts-->
              <!--Live Scorecard ends-->  
        <!--weather box starts-->
        <div class="weather-widget">
        <div class="weather-code">
        <div class="tomorrow" data-language="EN" data-unit-system="METRIC" data-skin="light" data-widget-type="aqiMini" >
        <a href="https://www.tomorrow.io/weather/" rel="nofollow noopener noreferrer" target="_blank"	style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%;">
          <img alt="Powered by Tomorrow.io" src="https://weather-website-client.tomorrow.io/img/powered-by-tomorrow.svg" width="140" height="15"/>
        </a>
        </div>
        </div>
        </div>
        <script>
            (function(d, s, id) {
              if (d.getElementById(id)) {
                if (window.__TOMORROW__) {
                  window.__TOMORROW__.renderWidget();
                }
                return;
              }
              const fjs = d.getElementsByTagName(s)[0];
              const js = d.createElement(s);
              js.id = id;
              js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

              fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'tomorrow-sdk');
        </script> 
        <!--weather box ends--> 

      <!--ads box starts-->
        <div class="ads-box">
          <div class="ads-placeholder">
          

                    <div id='div-gpt-ad-1525434127325-2'></div>

          </div>
        </div>
        <!--ads box ends--> 
       

     <!--Editor Pics-->
     <div class="right-widgets">
          <h2 class="border-heading">Editor's Pick</h2>
                    <div class="news-boxes">
                        <article class="repeat-box"><a href="https://www.india.com/entertainment/hanuman-box-office-collection-day-7-teja-sajja-film-hits-masterstroke-thrilling-thursday-hit-rs-90-crore-check-detailed-analysis-6664499/" aria-label="india.com news">
              <figure>
                <div class="photo">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/HanuMan-Box-Office-Collection-Day-7-Early-Estimates-Teja-Sajjas-Film-Hits-Masterstroke-With-Thrilling-Thursday-to-Hit-Rs-90-Crore-Check-Detailed-Analysis.jpg?impolicy=Medium_Widthonly&w=100&h=60" class="lazy" alt="HanuMan Box Office Collection Day 7 (Early Estimates): Teja Sajja's Film Hits Masterstroke With Thrilling Thursday, to Hit Rs 90 Crore - Check Detailed Analysis" title="HanuMan Box Office Collection Day 7 (Early Estimates): Teja Sajja's Film Hits Masterstroke With Thrilling Thursday, to Hit Rs 90 Crore - Check Detailed Analysis" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="100" height="60" /> </div>
                </div>
                <figcaption class="text">
                  <p>HanuMan BOC Day 7 (Early Estimates): Teja's Film Hits Masterstroke With Thrilling Thursday, to Hit Rs 90 Crore</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/technology/attention-whatsapp-users-from-voice-notes-to-multiple-admins-whatsapp-channel-to-get-new-features-6663484/" aria-label="india.com news">
              <figure>
                <div class="photo">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/IDC-Story-52.jpg?impolicy=Medium_Widthonly&w=100&h=60" class="lazy" alt="Attention WhatsApp Users: From Voice Notes to Multiple Admins - WhatsApp Channel to Get New Features" title="Attention WhatsApp Users: From Voice Notes to Multiple Admins - WhatsApp Channel to Get New Features" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="100" height="60" /> </div>
                </div>
                <figcaption class="text">
                  <p>Attention WhatsApp Users: From Voice Notes to Multiple Admins - WhatsApp Channel to Get New Features</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/entertainment/exclusive-24-years-after-dhadkan-shilpa-shetty-reveals-suniel-shettys-dev-dies-6664156/" aria-label="india.com news">
              <figure>
                <div class="photo">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/Exclusive-24-Years-After-Dhadkan-Shilpa-Shetty-Reveals-Suniel-Shettys-Dev-Dies....jpg?impolicy=Medium_Widthonly&w=100&h=60" class="lazy" alt="Exclusive: 24 Years After Dhadkan, Shilpa Shetty Reveals Suniel Shetty's Dev Dies..." title="Exclusive: 24 Years After Dhadkan, Shilpa Shetty Reveals Suniel Shetty's Dev Dies..." src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="100" height="60" /> </div>
                </div>
                <figcaption class="text">
                  <p>Exclusive: 24 Years After Dhadkan, Shilpa Shetty Reveals Suniel Shetty's Dev Dies...</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/news/india/breaking-news-chandigarh-mayor-polls-postponed-after-presiding-officer-hospitalised-6663442/" aria-label="india.com news">
              <figure>
                <div class="photo">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2023/11/Voting-2-1.jpg?impolicy=Medium_Widthonly&w=100&h=60" class="lazy" alt="Chandigarh Mayor Polls Postponed After Presiding Officer Hospitalised; Congress Says BJP Not Ready To Face Defeat" title="Chandigarh Mayor Polls Postponed After Presiding Officer Hospitalised; Congress Says BJP Not Ready To Face Defeat" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="100" height="60" /> </div>
                </div>
                <figcaption class="text">
                  <p>Breaking News: Chandigarh Mayor Polls Postponed After Presiding Officer Hospitalised</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/entertainment/sanjay-leela-bhansali-reunite-shah-rukh-khan-22-years-after-devdas-revive-salman-khan-inshallah-6661373/" aria-label="india.com news">
              <figure>
                <div class="photo">
                  <div class="lazy-image shine"> <img data-src="https://static.india.com/wp-content/uploads/2024/01/Sanjay-Leela-Bhansali-to-Reunite-With-Shah-Rukh-Khan-22-Years-After-Devdas-to-Revive-Salman-Khans-Inshallah.jpg?impolicy=Medium_Widthonly&w=100&h=60" class="lazy" alt="Sanjay Leela Bhansali to Reunite With Shah Rukh Khan 22 Years After Devdas, to Revive Salman Khan's 'Inshallah'?" title="Sanjay Leela Bhansali to Reunite With Shah Rukh Khan 22 Years After Devdas, to Revive Salman Khan's 'Inshallah'?" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="100" height="60" /> </div>
                </div>
                <figcaption class="text">
                  <p>Bhansali to Reunite With SRK 22 Years After Devdas, to Revive Salman's 'Inshallah'?</p>
                </figcaption>
              </figure>
              </a> </article>
                        </div>
        </div>
         <!--Editor Pics-->
        
        <!--news widgets ends--> 
      
          <!--news widgets starts-->
           <div class="right-widgets news-list-widgets">
                <h2 class="border-heading"> <a href="https://www.india.com/">English News</a></h2>
                
                 
                
          
          <ol>
                                 <li><a href="https://www.india.com/news/world/china-offers-to-mediate-between-pakistan-and-iran-6665375/"> China Offers To Mediate Between Islamabad-Tehran Amid Tensions Between Two Countries</a></li>
            
                                     <li><a href="https://www.india.com/webstories/entertainment/ddlj-to-jab-we-met-6-all-time-romantic-movies-to-enjoy-this-cozy-winters-6665133/"> DDLJ to Jab We Met, 6 All Time Romantic Movies to Enjoy This Cozy Winters</a></li>
            
                                     <li><a href="https://www.india.com/news/army-soldier-killed-2-others-injured-in-landmine-blast-in-jammu-kashmir-rajouri-loc-nowshera-6664224/"> Army Soldier Killed, 2 Others Injured In Landmine Blast In Jammu And Kashmir's Nowshera Sector</a></li>
            
                                     <li><a href="https://www.india.com/news/delhi/ram-mandir-pran-pratishtha-whats-open-whats-closed-list-in-delhi-ncr-on-january-22-6665380/"> Ram Mandir Pran Pratishtha: Check What's Open, What's Closed In Delhi NCR On January 22</a></li>
            
                                     <li><a href="https://www.india.com/sports/ms-dhoni-in-attendance-during-india-vs-germany-fih-womens-olympic-qualifiers-in-ranchi-watch-video-6665329/"> MS Dhoni In Attendance During India Vs Germany FIH Women’s Olympic Qualifiers In Ranchi – WATCH VIDEO</a></li>
            
                            </ol>
         <div>
        <!--news widgets ends--> 
      
      <!--ads box starts-->
        <div class="ads-box">
          <div class="ads-placeholder">
                        <div id='div-gpt-ad-1525434127325-3' style='width:300px; height:250px;'></div>

          

          </div>
        </div>
        <!--ads box ends--> 
       
      
        <!--galleries rhs starts-->
                <div class="right-widgets photo-gallery">
          <h2 class="border-heading"><a href="https://www.india.com/photos/">Latest Photo Galleries</a> <span class="view-more"><a href="https://www.india.com/photos/" class="btn" aria-label="View More">View all <i class="arrow"></i></a> </span></h2>
          <div class="two-boxes">
                      <article class="repeat-box"><a href="https://www.india.com/photos/entertainment/bhumi-pednekar-charms-with-vintage-vibes-in-golden-white-lehenga-and-oxidised-jewellery-see-pics-285887/" aria-label="india.com news">
              <figure>
                <div class="photo">
                <div class="lazy-image shine"> <img title="Bhumi Pednekar Charms With Vintage Vibes in Golden-White Lehenga and Oxidised Jewellery - See Pics" alt="Bhumi Pednekar Charms With Vintage Vibes in Golden-White Lehenga and Oxidised Jewellery - See Pics" data-src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/bhumi-pedenkar-looks-khoobsurat-in-stylish-blouse-and-lehenga-202401-1705506678.jpg?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> <span class="photo-icon">

                <svg version="1.1" x="0px" y="0px"
	 width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                      <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
	C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
	C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
	c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
	 M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
	c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                    </svg>
                    </span> </div>
                </div>
                <figcaption class="text">
                <p>Bhumi Pednekar Charms With Vintage Vibes in Golden-White Lehenga and Oxidised Jewellery - See Pics</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/photos/entertainment/janhvi-kapoor-serves-boss-lady-looks-in-white-shirt-and-black-pants-see-stunning-pics-285878/" aria-label="india.com news">
              <figure>
                <div class="photo">
                <div class="lazy-image shine"> <img title="Janhvi Kapoor Serves Boss Lady Looks in White Shirt And Black Pants - See Stunning PICS" alt="Janhvi Kapoor Serves Boss Lady Looks in White Shirt And Black Pants - See Stunning PICS" data-src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/janhvi-kapoor-oozes-elegance-in-latest-photos-202401-1705487102.jpg?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> <span class="photo-icon">

                <svg version="1.1" x="0px" y="0px"
	 width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                      <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
	C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
	C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
	c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
	 M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
	c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                    </svg>
                    </span> </div>
                </div>
                <figcaption class="text">
                <p>Janhvi Kapoor Serves Boss Lady Looks in White Shirt And Black Pants - See Stunning PICS</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/photos/news/pics-pm-modi-offers-prayers-at-triprayar-sree-ramaswamy-temple-in-thrissur-performs-meenoottu-kerala-285867/" aria-label="india.com news">
              <figure>
                <div class="photo">
                <div class="lazy-image shine"> <img title="PICS: PM Modi Offers Prayers At Triprayar Sree Ramaswamy Temple In Thrissur" alt="PICS: PM Modi Offers Prayers At Triprayar Sree Ramaswamy Temple In Thrissur" data-src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/pm-modi-visits-guruvayur-temple-202401-1705473604.jpg?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> <span class="photo-icon">

                <svg version="1.1" x="0px" y="0px"
	 width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                      <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
	C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
	C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
	c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
	 M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
	c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                    </svg>
                    </span> </div>
                </div>
                <figcaption class="text">
                <p>PICS: PM Modi Offers Prayers At Triprayar Sree Ramaswamy Temple In Thrissur</p>
                </figcaption>
              </figure>
              </a> </article>
                          <article class="repeat-box"><a href="https://www.india.com/photos/entertainment/pashmina-roshan-looks-like-a-beautiful-rose-in-red-organza-saree-and-soft-curls-see-pics-285847/" aria-label="india.com news">
              <figure>
                <div class="photo">
                <div class="lazy-image shine"> <img title="Pashmina Roshan Looks Like a Beautiful Rose in Red Organza Saree And Soft Curls - See PICS" alt="Pashmina Roshan Looks Like a Beautiful Rose in Red Organza Saree And Soft Curls - See PICS" data-src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/pashmina-roshan-looks-like-a-vision-to-behold-in-red-organza-saree-202401-1705411083.jpg?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> <span class="photo-icon">

                <svg version="1.1" x="0px" y="0px"
	 width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                      <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
	C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
	C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
	c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
	 M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
	c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                    </svg>
                    </span> </div>
                </div>
                <figcaption class="text">
                <p>Pashmina Roshan Looks Like a Beautiful Rose in Red Organza Saree And Soft Curls - See PICS</p>
                </figcaption>
              </figure>
              </a> </article>
                        </div>
        </div>
        <!--galleries rhs ends--> 
         
              </aside>
      <!--aside ends--> 
     
    </div>
    
  </div>
  
</main>
<!--all details ends--> 

<div class="back-to-top"></div>
<div class="vertical-ads ads-left">  </div>
<div class="vertical-ads ads-right">  </div>
<script type="text/javascript">
  /* cookie popup close */
window.addEventListener("scroll", function(event) {

 function setCookieC(e,t,i){var o=escape(t);if(i){var r=new Date;r.setDate(r.getDate()+i),o+="; expires="+r.toUTCString()}document.cookie=e+"="+o+"; path=/"}
  function getCookieC(e){var t,i,o,r=document.cookie.split(";");for(t=0;t<r.length;t++)if(i=r[t].substr(0,r[t].indexOf("=")),o=r[t].substr(r[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))===e)return unescape(o)}

// check set cookies

cpAcc = getCookieC('cpAcc');
cpRej = getCookieC('cpRej');


if(cpAcc == 'yes' || cpRej == 'yes'){
   //console.log("cookies in if condition ");
   setTimeout(function() { jQuery('#popup2').addClass('close').removeClass('open'); }, 0);
 } 
else {
  setTimeout(function() { jQuery('#popup2').addClass('open').removeClass('close'); }, 0);
}

$(document).ready(function(){$(".cookies-close").on("click",function(n){$(".cookies-popup").remove()})});
jQuery(document).ready(function ($) {
//cookies settings popup
$('a[href="#CookiesSettings"]').on("click",function(e){e.preventDefault(),$("#CookiesSettings").addClass("open"),$('#CookiesSettings .white-box').focus()}),$("#CookiesSettings, #CookiesSettings i.cookie-settings-close").on("click keyup",function(e){(e.target===this||"cookie-settings-close"===e.target.className||27===e.keyCode)&&$(this).removeClass("open")});
});

// reject all
jQuery(".cPbtn-reject-cookiesAll").click(function(){
//function RejectAll(){
  setCookieC('cpRej', 'yes', 1 );
  setTimeout(function() { jQuery('#popup2').addClass('close').removeClass('open'); }, 100);
//}
  });

function privacyPolicyCookies(acceptall){
  var cookieValue = getCookieC('cpAcc');
  if(cookieValue != 'icom'){
      setCookieC('cpAcc', 'yes', 365 );
      setTimeout(function() {
           jQuery('#popup2').removeClass('open').addClass('close');
        }, 100);  }
  }

 
setTimeout(function(){
  jQuery(document).ready(function(){

  // register accept all cookies and close popup
   jQuery(".cPbtn-accept-cookiesAll").click(function(){
    privacyPolicyCookies('all');
     jQuery('#popup2').removeClass('open').addClass('close');
  });
    
    // register setting accept all cookies and close popup
   jQuery(".cPbtn-accept-cookies").click(function(){
    privacyPolicyCookies('settingall');
     jQuery('#popup2').removeClass('open').addClass('close');
  });

});
  },2000)
});
</script>


<!--Cookies popup starts-->
<div class="cookies-popup close" id="popup2">
  <div class="white-box">
    <div class="all-data">
      <div class="text">
       <p>By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts <a href="https://www.india.com/cookie-policy/">Cookies Policy</a>. </p>
      </div>
      <div class="popup-buttons"> 
        <button type="button" class="btn btn-reject cPbtn-reject-cookiesAll" >Reject All</button>
        <button type="button" class="btn btn-accept cPbtn-accept-cookiesAll">Accept All Cookies</button>
      </div>
    </div>
    <i class="cookies-close"></i> </div>
</div>
<!--Cookies popup ends--> 

<div class="back-to-top"><span class="progress-container"><span class="progress-bar" id="progressBar"></span></span></div>


<script type='text/javascript' src='https://www.india.com/wp-content/plugins/iwpl-social-share/v5/js/social-share.min.js?ver=iwpl_20230901-4' defer='defer' id='social-share-js-js'></script>
<script type='text/javascript' src='https://static.india.com/wp-content/themes/icom/js/islide-scrollto_v1.js?ver=iwpl_20230901-4' defer='defer' id='icom-slider-jquery-js'></script>
<script type='text/javascript' src='https://static.india.com/wp-content/themes/icom/js/jquery.bxslider.min.js?ver=iwpl_20230901-4' defer='defer' id='bxslider-js-js'></script>

<script type="text/javascript">
  window.addEventListener("scroll", function(event) {
        jQuery(document).ready(function(){

            jQuery.ajax({
                type : "get",
                url : 'https://www.india.com/wp-admin/admin-ajax.php',
                data : {action: "related_widget", url:'/telangana/', post_id : '0'},
                complete: function(response) {
                    var obj = jQuery.parseJSON(response.responseText);
                    $("#latestInCat").html(obj.latest_from_cat);
                    $("#relatedStories").html(obj.related_arts);
                    $("#recommendedStories").html(obj.recommonded_arts);

                }
            })
        });
      });
    </script>

<!-- taboola scroll function call start -->

          <script>
          var tbl1=0;
         window.addEventListener("scroll", function(event) {
         if(tbl1==0){
         load_taboola_category_script();
         }
         tbl1=1;
         }); 
         </script>

    
<!-- taboola scroll function call end --> 
<script>
 var tbl10=0;
  window.addEventListener("scroll", function(event) {
 if(tbl10==0){
  window._taboola = window._taboola || [];
      _taboola.push({flush: true});
 }
 tbl10=1;
 }); 
 </script>




 <div>                                                   <style>
   @media screen and (max-width: 1350px){
   .skinad , .skinad { display:none !important;}
   }
   .skinad , .skinad { z-index:9998;}
   .adlhs{position: fixed;top: 25px;left: 0;}
   .adrhs{position: fixed;top: 25px;right: 0;}
</style>
                    <div class="skinad left skinadl" style="left: 0px;  position: fixed;  top: 0px;transform: inherit;">
                <!-- /21665149170/india.com/india.com_ros_160x600_lhs -->
                <div id='div-gpt-ad-1525434127325-4' style='width:160px; height:600px;'></div>
            </div>
            <div class="skinad right skinadr" style="right: 0px;  position: fixed;  top: 0px;transform: inherit;">
               <!-- /21665149170/india.com/india.com_ros_160x600_rhs -->
                <div id='div-gpt-ad-1525434127325-5' style='width:160px; height:600px;'></div>
            </div>
                                		</div><div>                        			<div class="execphpwidget"></div>
                        		</div><div>                        			<div class="execphpwidget"></div>
                        		</div><div>                        			<div class="execphpwidget"><style>
@media screen and (max-width:767px){
.fb-tw-gp-com .isocial[id^="issocial"] .ssbxwrp .ssbtnwrp li.btn_wapp{display:block !important;}
.fb-tw-gp-com .btncomment{display:none !important;}
}
</style>

</div>
                        		</div>


 


  <script async src="https://static.india.com/wp-content/themes/icom/js/jquery-3.6.0.min.js?20240108-1"></script> 
<script async src="https://static.india.com/wp-content/themes/icom/js/custom.js?20240108-1"></script>  


  
  <script async src="https://static.india.com/wp-content/themes/icom/js/tab.js?20240108-1"></script>
  <script  src="https://static.india.com/wp-content/themes/icom/js/lazyload.min.js?20240108-1" defer="true"></script>
  <script  src="https://static.india.com/wp-content/themes/icom/js/splide.gallery.min.js?v=20240108-1" defer="true"></script>
  

    <script>
  var clientId;
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-19458284-1', {'cookieDomain': 'none'});

  ga(function(tracker) {
    clientId = tracker.get('clientId');
    $("#cltid").val(clientId);
    $.ajax({
            url: "https://asia-south1-mystical-pod-361609.cloudfunctions.net/india_english_cre_serving",
            type: "POST",
            crossDomain: true,
            data: JSON.stringify({
            "clientid": clientId
            }),
            headers: {"Content-Type": "application/json", "apikey": "YE2Bw9uCnC5tU6cgzKcWSQAbXAmy+JoxtRwDynHmEkk="},

            success: function (response){
             
                var resp = JSON.stringify(response);
               

                         var topStoriesCount = 1;
              response.recs['news'].forEach(function(array_item, i){
                if(array_item['thumbnail_url'].length > 0  && array_item['title'].length > 0 ){
                  $('#cre-article-listing-widget-one').append(
                  `     <li class="splide__slide topStory-item"
              
                            data-count="`+ topStoriesCount +`"
                            data-author="`+ array_item['authorname'] +`"
                            data-clientid="`+ clientId +`"
                            data-postid="`+ array_item['article_id'] +`"
                            data-articlename="`+ array_item['title'] +`"
                            data-pubdate="`+ array_item['pub_date'] +`"
                            data-section="Trending Now"
                            data-pos="Top">
                            <article class="repeat-box"><a title="` + array_item['title'] +`" href="` + array_item['link'] + `" aria-label="india.com news">
                        <figure>
                          <div class="photo">
                            <div class="lazy-image shine"> <img data-src="` + array_item['thumbnail_url'].replace('##image/jpeg','').replace('##image/jpg', '').replace('##image/png','').replace('##image/gif','') + `?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="` + array_item['title'] +`" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> </div>
                          </div>
                          <figcaption class="text">
                            <h3> ` + array_item['title'] +`  </h3>
                          </figcaption>
                        </figure>
                        </a> </article>
                                      
                        </li>`);
                  if(topStoriesCount < 10){
                $('#cre-article-detail-widget-one').append(
                  `     <li class="splide__slide topStory-item"

                            data-count="`+ topStoriesCount +`"
                            data-author="`+ array_item['authorname'] +`"
                            data-clientid="`+ clientId +`"
                            data-postid="`+ array_item['article_id'] +`"
                            data-articlename="`+ array_item['title'] +`"
                            data-pubdate="` + array_item['pub_date'] + `"
                            data-section="Trending Now"
                            data-pos="Top">
                            <article class="repeat-box"><a title = "` + array_item['title'] +`" href="` + array_item['link'] + `" aria-label="india.com news">
                        <figure>
                          <div class="photo">
                            <div class="lazy-image shine"> <img data-src="` + array_item['thumbnail_url'].replace('##image/jpeg','').replace('##image/jpg', '').replace('##image/png','').replace('##image/gif','') + `?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="` + array_item['title'] +`" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> </div>
                          </div>
                          <figcaption class="text">
                            <h3>` + array_item['title'] +`  </h3>
                          </figcaption>
                        </figure>
                        </a> </article>
                                      
                        </li>`);
                       
                            }else{
                              $('#cre-article-detail-widget-two').append(
                  `     <li class="splide__slide topStory-item"
              
                            data-count="`+ topStoriesCount +`"
                            data-author="`+ array_item['authorname'] +`"
                            data-clientid="`+ clientId +`"
                            data-postid="`+ array_item['article_id'] +`"
                            data-articlename="`+ array_item['title'] +`"
                            data-pubdate="`+ array_item['pub_date'] +`"
                            data-section="Recommended Stories"
                            data-pos="Bottom">
                            <article class="repeat-box"><a title="` + array_item['title'] +` " href="` + array_item['link'] + `" aria-label="india.com news">
                        <figure>
                          <div class="photo">
                            <div class="lazy-image shine"> <img data-src="` + array_item['thumbnail_url'].replace('##image/jpeg','').replace('##image/jpg', '').replace('##image/png','').replace('##image/gif','') + `?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="` + array_item['title'] +`" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" /> </div>
                          </div>
                          <figcaption class="text">
                            <h3> ` + array_item['title'] +`  </h3>
                          </figcaption>
                        </figure>
                        </a> </article>
                                      
                        </li>`);
                            }
                            topStoriesCount++;
                    }
                  })


                              
          
            
                
            var topPhotosCount = 0;
                response.recs['photos'].forEach(function(array_item, i){
                    if(array_item['thumbnail_url'].length > 0  && array_item['title'].length > 0 ){
                      $('#cre-photo-listing-widget-one').append(
                      `     <li class="splide__slide topPhoto-item"
                  
                                data-count="`+ topPhotosCount +`"
                                data-author="`+ array_item['authorname'] +`"
                                data-clientid="`+ clientId +`"
                                data-postid="`+ array_item['article_id'] +`"
                                data-articlename="`+ array_item['title'] +`"
                                data-pubdate="`+ array_item['pub_date'] +`"
                                data-section="Trending Now"
                                data-pos="Top">
                                <article class="repeat-box"><a title="` + array_item['title'] +`" href="` + array_item['link'] + `" aria-label="india.com news">
                            <figure>
                              <div class="photo">
                                <div class="lazy-image shine"> <img data-src="` + array_item['thumbnail_url'].replace('##image/jpeg','').replace('##image/jpg', '').replace('##image/png','').replace('##image/gif','') + `?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="` + array_item['title'] +`" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" />
                                  <span class="photo-icon">
                                  <svg version="1.1" x="0px" y="0px"
   width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                                    <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
  C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
  C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
  c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
   M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
  c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                                  </svg>
                                  </span>
                              </div>
                              </div>
                              <figcaption class="text">
                                <h3>` + array_item['title'] +` </h3>
                              </figcaption>
                            </figure>
                            </a> </article>
                                          
                            </li>`);
                      if(topPhotosCount < 4){
                    $('#cre-photo-detail-widget-one').append(
                      `     <li class="splide__slide topPhoto-item"
                  
                                data-count="`+ topPhotosCount +`"
                                data-author="`+ array_item['authorname'] +`"
                                data-clientid="`+ clientId +`"
                                data-postid="`+ array_item['article_id'] +`"
                                data-articlename="`+ array_item['title'] +`"
                                data-pubdate="`+ array_item['pub_date'] +`"
                                data-section="Trending Now"
                                data-pos="Top">
                                <article class="repeat-box"><a title="` + array_item['title'] +`" href="` + array_item['link'] + `" aria-label="india.com news">
                            <figure>
                              <div class="photo">
                                <div class="lazy-image shine"> <img data-src="` + array_item['thumbnail_url'].replace('##image/jpeg','').replace('##image/jpg', '').replace('##image/png','').replace('##image/gif','') + `?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="` + array_item['title'] +`" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" />
                                  <span class="photo-icon">
                                  <svg version="1.1" x="0px" y="0px"
   width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                                    <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
  C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
  C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
  c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
   M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
  c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                                  </svg>
                                  </span>
                              </div>
                              </div>
                              <figcaption class="text">
                                <h3>` + array_item['title'] +` </h3>
                              </figcaption>
                            </figure>
                            </a> </article>
                                          
                            </li>`);
                           
                                }else{
                                  $('#cre-photo-detail-widget-two').append(
                      `     <li class="splide__slide topPhoto-item"
                  
                                data-count="`+ topPhotosCount +`"
                                data-author="`+ array_item['authorname'] +`"
                                data-clientid="`+ clientId +`"
                                data-postid="`+ array_item['article_id'] +`"
                                data-articlename="`+ array_item['title'] +`"
                                data-pubdate="`+ array_item['pub_date'] +`"
                                data-section="Recommended Stories"
                                data-pos="Bottom">
                                <article class="repeat-box"><a title="` + array_item['title'] +`" href="` + array_item['link'] + `" aria-label="india.com news">
                            <figure>
                              <div class="photo">
                                <div class="lazy-image shine"> <img data-src="` + array_item['thumbnail_url'].replace('##image/jpeg','').replace('##image/jpg', '').replace('##image/png','').replace('##image/gif','') + `?impolicy=Medium_Widthonly&w=238&h=134" class="lazy" alt="` + array_item['title'] +`" src="https://static.india.com/wp-content/themes/icom/images/default-big.svg" width="238" height="134" />
                                  <span class="photo-icon">
                                  <svg version="1.1" x="0px" y="0px"
   width="15" height="15" viewBox="7.5 7.5 15.104 15" enable-background="new 7.5 7.5 15.104 15" xml:space="preserve">
                                    <path fill="#FFFFFF" d="M15,13.5c-1.243,0-2.25,1.007-2.25,2.25c0,1.242,1.007,2.25,2.25,2.25c1.242,0,2.25-1.008,2.25-2.25
  C17.25,14.507,16.242,13.5,15,13.5z M21,11.25h-1.8c-0.265-0.012-0.497-0.18-0.592-0.428l-0.466-1.396
  C18.047,9.18,17.814,9.012,17.55,9h-5.1c-0.248,0-0.515,0.192-0.592,0.426l-0.467,1.396c-0.095,0.248-0.327,0.416-0.592,0.428H9
  c-0.825,0-1.5,0.675-1.5,1.5v6.75C7.5,20.325,8.175,21,9,21h12c0.825,0,1.5-0.675,1.5-1.5v-6.75C22.5,11.925,21.825,11.25,21,11.25z
   M15,19.5c-2.071,0-3.75-1.679-3.75-3.75S12.929,12,15,12s3.75,1.679,3.75,3.75S17.071,19.5,15,19.5z M20.625,13.65
  c-0.29,0-0.525-0.235-0.525-0.525s0.235-0.525,0.525-0.525s0.525,0.235,0.525,0.525S20.915,13.65,20.625,13.65z"/>
                                  </svg>
                                  </span>
                                  </div>
                              </div>
                              <figcaption class="text">
                                <h3>` + array_item['title'] +` </h3>
                              </figcaption>
                            </figure>
                            </a> </article>
                                          
                            </li>`);
                                }
                                topPhotosCount++;
                        }
                      });
                     
                      var articleDetailOneName = '#cre-article-detail-widget-splide-one';
                      if($(articleDetailOneName).length != 0) {
                        //it exists
                        articleDetailOne = new Splide(articleDetailOneName, {
                            perPage:3,
                            perMove: 1,
                            gap: 20,
                            autoplay:false,
                            drag:true,
                            keyboard:false,                                    
                            pagination: false
                        }).mount();
                        articleDetailOne.on("moved", function(newIndex, oldIndex, destIndex){
                        if(newIndex > oldIndex) {   var arrow_position = "right"; } else {   var arrow_position = "left"; }
                        $(articleDetailOneName + " .splide__slide").each(function(i){
                        if(i == newIndex){
                        var itemJSON = {};
                        var itemJSON = itemJSONCompile($(this),"scroll", arrow_position);
                        dataLayer.push(itemJSON);
                        //console.log('event fired 11', itemJSON);
                        }
                        });
                        });
                      }

                       var articleVideoOneName = '#cre-video-detail-widget-splide-one';
                      if($(articleVideoOneName).length != 0) {
                        //it exists
                        articleVideoOne = new Splide(articleVideoOneName, {
                            perPage:5,
                            perMove: 1,
                            gap: 20,
                            autoplay:false,
                            drag:true,
                            keyboard:false,
                            pagination: false
                        }).mount();
                        articleVideoOne.on("moved", function(newIndex, oldIndex, destIndex){
                     if(newIndex > oldIndex) {   var arrow_position = "right"; } else {   var arrow_position = "left"; }
                      $(articleVideoOneName + " .splide__slide").each(function(i){
                        if(i == newIndex){
                          var itemJSON = {};
                          var itemJSON = itemJSONCompile($(this),"scroll", arrow_position);
                          dataLayer.push(itemJSON);

                          //console.log('event fired 11', itemJSON);
                        }
                      });
                    });
                      }


                      var splideTwoName = '#cre-article-detail-widget-splide-two';
                      if($(splideTwoName).length != 0) {
                        // it exists
                        splideTwo = new Splide(splideTwoName, {
                          perPage: 3,
                          perMove: 1,
                          gap: 20,
                          autoplay:false,
                          drag:true,
                          keyboard:false,
                          pagination: false
                        }).mount();
                        splideTwo.on("moved", function(newIndex, oldIndex, destIndex){
                        // console.log("scrollingc 11", splideTwoName);
                        $(splideTwoName + " .splide__slide").each(function(i){
                        if(i == newIndex){
                        var itemJSON = {};
                        var itemJSON = itemJSONCompile($(this), "scroll", arrow_position);
                        dataLayer.push(itemJSON);
                        // console.log('event fired 22', itemJSON);
                        }
                        });
                        });
                      }

                      var splideThreeName = '#cre-photo-detail-widget-splide-one';
                      if($(splideThreeName).length != 0) {
                      splideThree = new Splide(splideThreeName, {
                          perPage: 4,
                          perMove: 1,
                          gap: 20,
                          autoplay:false,
                          drag:true,
                          keyboard:false,
                          pagination: false
                      }).mount();
                    
                    splideThree.on("moved", function(newIndex, oldIndex, destIndex){
                     // console.log("scrolling 22", splideThreeName);
                      $(splideThreeName + " .splide__slide").each(function(i){
                        if(i == newIndex){
                          var itemJSON = {};
                          var itemJSON = itemJSONCompile($(this), "scroll", 'CRE');
                          dataLayer.push(itemJSON);
                         //console.log('event fired 33', itemJSON);
                        }
                      });
                    }); 
                    }
                    },
            error: function (xhr, status) {
                console.log('error',xhr);
            }
                 
                  });
                });

function itemJSONCompile(itemBind, eventType, param){
  var itemCount = itemBind.attr("data-count");
  var clientId = itemBind.attr("data-clientid");
  var authorName = itemBind.attr("data-author");
  var postId = itemBind.attr("data-postid");
  var articleName = itemBind.attr("data-articlename");
  var articleCategory = itemBind.attr("data-articleCategory");
  var section = itemBind.attr("data-section");
  var widgetPos = itemBind.attr("data-pos");
  var date = itemBind.attr("data-pubdate");
  var item_class = itemBind.attr("data-class");

  if(articleCategory==''){ articleCategory = 'Article'; }
  var pubDate = dateFormater(date);
  var itemJSON = {};

  if(eventType == "scroll"){
     
      itemJSON = {
                'event':'CRE_Scroll',
                'eventCategory':'CRE-W',
                'eventAction':'CRE_Scroll',
                'eventLabel': itemCount,
                'Client ID': clientId,
                'Creator': authorName,
                'Author': authorName,
                'Section':'',
                'PostID': postId,
                'Topic':'',
                'Editor': authorName,
                'Article Name': articleName,
                'Article ID':postId
                      };
  }
  else if(eventType == "click"){
      if(itemBind.hasClass("topStory-item")){
        itemJSON = {
                  'event':'CRE_Horizontal_Click',
                  'eventCategory':'CRE-W',
                  'eventAction':'CRE_Horizontal_Click',
                  'eventLabel': itemCount,
                  'Client ID': clientId,
                  'Creator': authorName,
                  'Author': authorName,
                  'Section':'',
                  'PostID': postId,
                  'Topic':'',
                  'Editor': authorName,
                  'Article Name': articleName,
                  'Article ID': postId
                        }
      }
      else if(itemBind.hasClass("topVideo-item")){

        itemJSON = {
                  'event': 'Video_click',
                  'eventCategory': 'CRE-W',
                  'eventAction': 'Video_click',
                  'eventLabel': itemCount,
                  'Client ID': clientId,
                  'Creator': authorName,
                  'Author': authorName,
                  'Section':'',
                  'PostID': postId,
                  'Topic': '',
                  'Editor': authorName,
                  'Video Title': articleName,
                  'Video Id': postId
                        };
      }
      else if(itemBind.hasClass("topPhoto-item")){
        itemJSON = {
                  'event':'CRE_Image_Click',
                  'eventCategory':'CRE-M',
                  'eventAction':'CRE_Image_Click',
                  'eventLabel': itemCount,
                  'Client ID': clientId,
                  'Creator': authorName,
                  'Author': authorName,
                  'Section':'',
                  'PostID': postId,
                  'Topic':'',
                  'Editor': authorName,
                  'Article Name': articleName,
                  'Article Id': postId,
                  'Position': itemCount
                        };
      }
  }

  return itemJSON;
}

function dateFormater(date) {
  const d = new Date(date);  // 2009-11-10
  const month = d.toLocaleString('default', { month: 'long' });
  date_new = month+" "+('0' + d.getDate()).slice(-2)+", "+d.getFullYear() ;
  return date_new;
}

// CRE Splide Click
let console_no=0;
window.addEventListener('scroll',()=>{
    ++console_no;
    if(console_no==1){
    $("body").on("click", ".splide__slide", function(){
      var itemJSON = {};
      itemJSON = itemJSONCompile($(this),"click");
      dataLayer.push(itemJSON);
      //console.log('event fired.. ', itemJSON);
    });
    $("body").on("click", ".topStory-item", function(){
  var itemJSON = {};
  var itemJSON = itemDataCompile($(this));
  dataLayer.push({
                  'event':'CRE_Horizontal_Click',
                  'eventCategory':'CRE-W',
                  'eventAction':'CRE_Horizontal_Click',
                  'eventLabel': itemJSON['count'],
                  'Client ID': itemJSON['client_id'],
                  'Creator': itemJSON['author_name'],
                  'Author': itemJSON['author_name'],
                  'Section':'',
                  'PostID': itemJSON['article_id'],
                  'Topic':'',
                  'Editor': itemJSON['author_name'],
                  'Article Name': itemJSON['article_name'],
                  'Article ID':itemJSON['article_id'],
                });
                 // console.log('event fired.. ', itemJSON);
    });

    $("body").on("click", ".topPhoto-item", function(){
      var itemJSON = {};
      var itemJSON = itemDataCompile($(this));
      //console.log('entered topPhoto... ');
      dataLayer.push(itemJSON);
      //console.log('event fired... ', itemJSON);
    });
}
});
    </script>
    <input type="hidden" id="cltid" name="cltid" value="" />
<input type="hidden" id="gaid" name="gaid" value="UA-19458284-1" />
<script>
window.addEventListener("load", function(event) {

$(document).bind('DOMNodeInserted', function(e) {
   (function () {
 function logElementEvent(eventName, element) {
 //console.log(Date.now(), eventName, element.getAttribute("data-src"));
 }
 var callback_enter = function (element) {};
 var callback_exit = function (element) {};
 var callback_loading = function (element) {};
 var callback_loaded = function (element) {};
 var callback_error = function (element) {
 element.src = "https://static.india.com/wp-content/themes/icom/images/default-big.svg";
 };
 var callback_finish = function () {};
 var callback_cancel = function (element) {};
 function supportsNativeLazyVideo() {
 return "loading" in HTMLVideoElement.prototype;
}
 var ll = new LazyLoad({
 threshold: 0,
 elements_selector: "img.lazy, iframe.lazy",
 show_while_loading: true,
 callback_enter: callback_enter,
 callback_exit: callback_exit,
 callback_cancel: callback_cancel,
 callback_loading: callback_loading,
 callback_loaded: callback_loaded,
 callback_error: callback_error,
 callback_finish: callback_finish
 });
   })();
});
});
window.addEventListener("scroll", function(event) {

$(document).on('click', '.thumbClick', function(){
     var myli = $(this); 
     var embedurl = $(this).attr("embedurl");
     $('#liframe').html('<iframe width="100%" height="500" layout="responsive" class="videoframe lazy" sandbox="allow-scripts allow-same-origin" allowfullscreen="" frameborder="0" src="'+embedurl+'"></iframe>'); 
      $( "ul.splide__list li" ).each(function( index ) { 
          $(this).removeClass("is-active"); 
      })
      $(myli).parent().addClass("is-active");
   }); 
});
</script>


<script type="text/javascript" src="https://s.skimresources.com/js/235410X1718619.skimlinks.js" async="true"></script>
 
</body>
</html>
