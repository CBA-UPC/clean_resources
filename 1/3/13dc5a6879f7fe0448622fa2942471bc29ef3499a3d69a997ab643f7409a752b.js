function getCurrentHrId(){var e=new Date,t=(e.getFullYear()+"").substring(2),a=e.getMonth()+1;a<10&&(a="0"+a);var n=e.getDate();n<10&&(n="0"+n);var r=e.getHours();return r<10&&(r="0"+r),parseInt(t+""+a+n+r)}function geIframeStatus(){var e={isIframe:!1,referurl:""};return self!=top?(e.isIframe=!0,e.referurl=window.location!=window.parent.location?document.referrer:document.location.href):e.isIframe=!1,e}var adg_domain="";adg_domain=(window.location.protocol,"https://adgebra.co.in");var objectJson="",demoFlagIBN=!1,bannerId="",demoDomain=window.location!=window.parent.location?document.referrer:document.location.href;if(-1!=demoDomain.indexOf("adgebrademo=true")){demoFlagIBN=!0;var DemodomainArray=demoDomain.substring(demoDomain.indexOf("adgebrademo")),tempDemodomainArray=DemodomainArray.toLowerCase();-1!=tempDemodomainArray.indexOf("dcid")&&(DemodomainArray=tempDemodomainArray.replace("dcid","dcId")),-1!=tempDemodomainArray.indexOf("bannerid")&&(DemodomainArray=DemodomainArray.replace("bannerid","bannerId"));var subDemoDomainArray=DemodomainArray.split("&");bannerId=subDemoDomainArray[2]}var ibnkeyword=getMetaTitleContentkeys(),callback="callback_NativeAds";if((NativeAdPos=document.getElementsByClassName("adg_native_nano")).length>0){for(var nanoDiv=0;nanoDiv<NativeAdPos.length;nanoDiv++){var nanoNativeFlag=NativeAdPos[nanoDiv].getAttribute("data-nanoNativeFlag");if("1"==nanoNativeFlag){var tempIdSlotId=NativeAdPos[nanoDiv].getAttribute("data-templateId_slotId");""!=tempIdSlotId&&null!=tempIdSlotId&&null!=tempIdSlotId&&(null==templateId_slotId?(templateId_slotId=tempIdSlotId,callback="callback_NanoNative"):templateId_slotId=templateId_slotId+","+tempIdSlotId)}}null!=templateId_slotId&&null!=nanoNativeFlag||(templateId_slotId="",nanoNativeFlag="");var templateId_slotId="&templateId_slotId="+templateId_slotId+"&nanoNativeFlag="+nanoNativeFlag}if(-1!=(urls=window.location!=window.parent.location?document.referrer:document.location.href).indexOf("adgebrademo=true")&&(urls=urls.split("?")[0]),(NativeAdPos=document.getElementsByClassName("adg_native_nano")).length>0){var AdsScript300x250=document.createElement("script");document.body.appendChild(AdsScript300x250),AdsScript300x250.async=!0,nano_parameter=adg_domain+"/AdServing/AdserveServlet?&p3="+ibnkeyword+"&p5=9&p6="+NativeAdPos.length+"&p4="+getCurrentHrId()+"&callback="+callback+"&catche="+Math.floor(20*Math.random())+"&url="+urls+templateId_slotId;var nanoDemoFlag="",nanobannerId="";""==demoFlagIBN&&null==demoFlagIBN&&void 0===demoFlagIBN||""==bannerId&&null==bannerId&&void 0===bannerId||(nano_parameter=nano_parameter+(nanoDemoFlag="&demoFlagIBN=")+(nanobannerId="&bannerId=")),"undefined"!=typeof adg_crtg_content&&null!=adg_crtg_content&&(nano_parameter=nano_parameter+"&p7="+encodeURIComponent(adg_crtg_content)),AdsScript300x250.src=nano_parameter}function callback_NanoNative(e){var t=document.getElementsByClassName("adg_native_nano");if(e.length>0){var a;if(t.length>0)for(var n=0;n<t.length;n++){if("1"==t[n].getAttribute("data-nanoNativeFlag")){var r=t[n].getAttribute("data-templateId_slotId");""!=r&&null!=r&&null!=r&&(a=null==a?r:a+","+r)}}var i=a.split(",")}if(t.length>0)for(var d=0;d<i.length;d++){var o=i[d],l=e[0][o];if(null!=l){for(var s=0,c=0;c<t.length;c++)if("none"==t[c].style.display||""==t[c].style.display){var m=t[c].getAttribute("data-templateId_slotId");if(i[d]==m){s=c;break}}var g=t[s].getElementsByTagName("a"),p=geIframeStatus(),u=decodeURIComponent(l.trackerUrl);1==p.isIframe&&(u=u+"&isIframe="+p.isIframe+"&referurl="+p.referurl);for(var _=0;_<g.length;_++){if(g[_].href=u,g[_].getElementsByTagName("img").length>0){var v=g[_].getElementsByTagName("img")[0],h=v.alt;if(v.src="adg_Native_HD_Img"==h?l.img990x505:"adg_43_200x150"==h?l.size_43_200x150:"adg_43_100x75"==h?l.size_43_100x75:"adg_169_400x225"==h?l.size_169_400x225:"adg_169_200x113"==h?l.size_169_200x113:"adg_169_100x56"==h?l.size_169_100x56:"adg_21_400x200"==h?l.size_21_400x200:"adg_21_200x100"==h?l.size_21_200x100:"adg_21_100x50"==h?l.size_21_100x50:"adg_65_600x500"==h?l.size_65_600x500:"adg_65_300x250"==h?l.size_65_300x250:"adg_65_100x83"==h?l.size_65_100x83:l.imageUrl,v.removeAttribute("alt"),v.removeAttribute("title"),1==g.length){var y=g[_].innerHTML.split(">")[0]+">"+decodeURIComponent(l.title.replace(/\+/g," "));g[_].innerHTML=y}}else g[_].innerHTML=decodeURIComponent(l.title.replace(/\+/g," "));g[_].setAttribute("target","_blank");var f=document.createElement("div");f.style.float="right";var b=document.createElement("img");b.setAttribute("src","https://cdn.adgebra.net/custom/generic/nano_native_gray.png"),b.setAttribute("onmouseover","this.src='https://cdn.adgebra.net/custom/generic/nano_native_colour.png'"),b.setAttribute("onmouseout","this.src='https://cdn.adgebra.net/custom/generic/nano_native_gray.png'"),b.setAttribute("onclick",'iconImgClick("https://bit.ly/2WsrP6r")'),f.appendChild(b),g[_].parentNode.parentNode.appendChild(f)}var A=document.createElement("iframe");t[s].appendChild(A),A.width="0px",A.height="0px",A.style.border="0px";var I=A.contentWindow;if(I.document.open(),I.document.write(l.spikeImpressionTrackerUrl),I.document.close(),l.thirdPartyTrackerUrl)for(var N=l.thirdPartyTrackerUrl.split(","),x=0;x<N.length;x++){(E=document.createElement("iframe")).id=Date.now(),t[s].appendChild(E),E.src=N[x],E.width="0px",E.height="0px",E.style.border="0px"}if(l.impUrl){N=l.impUrl.split(",");for(var C=0;C<N.length;C++){var E;(E=document.createElement("iframe")).id=Date.now(),t[s].appendChild(E),E.src=N[C],E.width="0px",E.height="0px",E.style.border="0px"}}t[s].style.display="block"}}try{if(inIframe()){var k=window.frameElement.id;window.parent.document.getElementById(k).style.display="block"}}catch(e){}}r totalArticleCount=0,NativeAdPos=[],spikeResponse=!1,homePageNativAds=!1,isMobile=!1,AdgebraSpikeAds={isMobile:!1};if(spikeDiv=document.getElementById("adg_native_spike")){var HPNADivArr=document.getElementsByClassName("adg_spike_native_home"),isHomePage=document.getElementById("wrapper");isHomePage=null!=isHomePage&&"undefined"!=isHomePage&&"homepage"==isHomePage.getAttribute("data-page_type");var NativeSpikeArticles="",urls=window.location!=window.parent.location?document.referrer:document.location.href,urlcheck=void 0;""!=(Fixeddomain=spikeDiv.getAttribute("data-domain"))?(urls=Fixeddomain,urlcheck=Fixeddomain):void 0===(urlcheck=(urls=urls.split("?utm_source")[0]).split("?utm_source")[1])&&(urls=urls.split("&utm_source")[0]);var spikeServletUrl="",device="";"undefined"!=typeof CloudFlare&&"null"!=typeof CloudFlare||(device=spikeDiv.getAttribute("data-device")),""!=device&&1==device?(AdgebraSpikeAds.isMobile=!0,spikeServletUrl=adg_domain+"/Spike/SpikeHitByUrl?Device=1&url="+urls+"&hrId="+getCurrentHrId()):spikeServletUrl=adg_domain+"/Spike/SpikeHitByUrl?Device=2&url="+urls+"&hrId="+getCurrentHrId();var personalizedspikeServletUrl=adg_domain+"/Spike/SpikePersonalizedServlet?";if(0==HPNADivArr.length&&1==isHomePage)console.log("No need to call spike hit");else{var body=document.getElementsByTagName("body").item(0),script=document.createElement("script");script.async=!0,script.setAttribute("data-cfasync","false"),script.setAttribute("type","text/javascript"),script.setAttribute("src",spikeServletUrl),body.appendChild(script)}}function getMetaTitleContentkeys(){for(var e=document.getElementsByTagName("meta"),t="",a="",n="",r=0;r<e.length;r++){var i=e[r].name;e[r].getAttribute("property");-1!=i.indexOf("news_keywords")&&""==t&&(t=e[r].getAttribute("content")),""!=t&&null!=t||-1!=i.indexOf("keyword")&&(t=e[r].getAttribute("content")),-1!=i.indexOf("description")&&(n=e[r].getAttribute("content"))}var d="undefined";return document.getElementsByTagName("title").length>0&&(d=document.getElementsByTagName("title")[0].innerHTML),void 0!==d&&(a=d),(null!=n&&""!=n?t+"!"+a+" "+n:t+"!"+a).replace(/[?\/_|&\/_|#\/_]/g," ")}function reShuffleArticle(e){var t=e.length;if(0==t)return!1;for(;--t;){var a=Math.floor(Math.random()*(t+1)),n=e[t],r=e[a];e[t]=r,e[a]=n}return e}var spikeDiv=document.getElementById("adg_native_spike");function callback_spike(e){if(spikeResponse=!0,NativeSpikeArticles=(u=e).spikeArticles,0==HPNADivArr.length&&0==isHomePage){AdgebraSpikeAds.isMobile?document.getElementById("adg_native_spike").innerHTML=u.mobileHTMLTEMPLATE:document.getElementById("adg_native_spike").innerHTML=u.HTMLTEMPLATE;var t="spike_article",a=spikeDiv.getElementsByClassName(t),i="adg_wrapper",d=(spikeDiv.getElementsByClassName(i),reShuffleArticle(u.spikeArticles)),o=u.spikeExtraArticles;for(totalArticleCount=a.length,j=0;j<a.length&&j<d.length;j++){var l=(_=d[j]).articleURL.split("?utm_source")[0],s=1;if(void 0===_.articleURL.split("?utm_source")[1]&&(s=2,l=_.articleURL.split("&utm_source")[0]),l==urls&&o.length>0)for(r=0;r<o.length;r++){var c=o[r],m=_.articleURL.split("&");if(-1!=c.articleURL.indexOf(m[s])){(v=a[j].getElementsByTagName("a"))[0].href=c.articleURL,(h=a[j].getElementsByClassName("imageSrc"))[0].src=c.imageSrc,h[0].setAttribute("onerror",'imageErrorHandler(this,"'+c.defaultImageSrc+'")'),a[j].getElementsByClassName("articleTitle")[0].innerHTML=c.articleTitle,(y=a[j].getElementsByClassName("pageViewCount")).length>0&&(y[0].innerHTML=c.pageViewCount);break}}else(v=a[j].getElementsByTagName("a"))[0].href=_.articleURL,v[0].setAttribute("target","_parent"),(h=a[j].getElementsByClassName("imageSrc"))[0].src=_.imageSrc,h[0].setAttribute("onerror",'imageErrorHandler(this,"'+_.defaultImageSrc+'")'),a[j].getElementsByClassName("articleTitle")[0].innerHTML=_.articleTitle}var g=u.siteId;(f=document.createElement("script")).async=!0,f.setAttribute("data-cfasync","false"),f.setAttribute("type","text/javascript"),f.setAttribute("src",personalizedspikeServletUrl+"siteId="+g),body.appendChild(f),(b=document.createElement("script")).async=!1,b.setAttribute("data-cfasync","false"),setTimeout((function(){"undefined"!=typeof adg_crtg_content?b.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=12&p4="+getCurrentHrId()+"&p7="+encodeURIComponent(adg_crtg_content)+"&p6=1":b.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=12&p6=1&p4="+getCurrentHrId(),document.body.appendChild(b)}),1500);try{NativeAdPos=u.nativeAdPosition.split("#")[1].split(",");var p=0;for(n=0;n<NativeAdPos.length;n++)NativeAdPos[n]<=totalArticleCount&&(p+=1);(A=document.createElement("script")).setAttribute("data-cfasync","false"),A.async=!0,setTimeout((function(){NativeAdPos[0]>0?"undefined"!=typeof adg_crtg_content?A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+p+"&p4="+getCurrentHrId()+"&p7="+encodeURIComponent(adg_crtg_content):A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+p+"&p4="+getCurrentHrId():A.src=adg_domain+"/AdServing/NotToServe?p1=2&p2="+u.siteId+"&p3=902&p4="+urls.split("?")[0]+"&p5=0&p6=9",document.body.appendChild(A)}),1500),document.getElementById("adg_native_spike").style.display="block"}catch(e){}}else if(HPNADivArr.length>0){var u;if((A=document.createElement("script")).async=!0,A.setAttribute("data-cfasync","false"),setTimeout((function(){"undefined"!=typeof adg_crtg_content?A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+HPNADivArr.length+"&p4="+getCurrentHrId()+"&p7="+encodeURIComponent(adg_crtg_content):A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+HPNADivArr.length+"&p4="+getCurrentHrId(),document.body.appendChild(A)}),1500),NativeSpikeArticles=(u=e).spikeArticles,0==HPNADivArr.length&&0==isHomePage){AdgebraSpikeAds.isMobile?document.getElementById("adg_native_spike").innerHTML=u.mobileHTMLTEMPLATE:document.getElementById("adg_native_spike").innerHTML=u.HTMLTEMPLATE;t="spike_article",a=spikeDiv.getElementsByClassName(t),i="adg_wrapper",spikeDiv.getElementsByClassName(i),d=reShuffleArticle(u.spikeArticles),o=u.spikeExtraArticles;for(totalArticleCount=a.length,j=0;j<a.length&&j<d.length;j++){var _;l=(_=d[j]).articleURL.split("?utm_source")[0],s=1;if(void 0===_.articleURL.split("?utm_source")[1]&&(s=2,l=_.articleURL.split("&utm_source")[0]),l==urls&&o.length>0)for(r=0;r<o.length;r++){c=o[r],m=_.articleURL.split("&");if(-1!=c.articleURL.indexOf(m[s])){var v,h,y;(v=a[j].getElementsByTagName("a"))[0].href=c.articleURL,(h=a[j].getElementsByClassName("imageSrc"))[0].src=c.imageSrc,h[0].setAttribute("onerror",'imageErrorHandler(this,"'+c.defaultImageSrc+'")'),a[j].getElementsByClassName("articleTitle")[0].innerHTML=c.articleTitle,(y=a[j].getElementsByClassName("pageViewCount")).length>0&&(y[0].innerHTML=c.pageViewCount);break}}else(v=a[j].getElementsByTagName("a"))[0].href=_.articleURL,v[0].setAttribute("target","_parent"),(h=a[j].getElementsByClassName("imageSrc"))[0].src=_.imageSrc,h[0].setAttribute("onerror",'imageErrorHandler(this,"'+_.defaultImageSrc+'")'),a[j].getElementsByClassName("articleTitle")[0].innerHTML=_.articleTitle}var f,b;g=u.siteId;(f=document.createElement("script")).async=!0,f.setAttribute("data-cfasync","false"),f.setAttribute("type","text/javascript"),f.setAttribute("src",personalizedspikeServletUrl+"siteId="+g),body.appendChild(f),(b=document.createElement("script")).async=!1,b.setAttribute("data-cfasync","false"),setTimeout((function(){"undefined"!=typeof adg_crtg_content?b.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=12&p4="+getCurrentHrId()+"&p7="+encodeURIComponent(adg_crtg_content)+"&p6=1":b.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=12&p6=1&p4="+getCurrentHrId(),document.body.appendChild(b)}),1500);try{NativeAdPos=u.nativeAdPosition.split("#")[1].split(",");p=0;for(n=0;n<NativeAdPos.length;n++)NativeAdPos[n]<=totalArticleCount&&(p+=1);(A=document.createElement("script")).setAttribute("data-cfasync","false"),A.async=!0,setTimeout((function(){NativeAdPos[0]>0?"undefined"!=typeof adg_crtg_content?A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+p+"&p4="+getCurrentHrId()+"&p7="+encodeURIComponent(adg_crtg_content):A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+p+"&p4="+getCurrentHrId():A.src=adg_domain+"/AdServing/NotToServe?p1=2&p2="+u.siteId+"&p3=902&p4="+urls.split("?")[0]+"&p5=0&p6=9",document.body.appendChild(A)}),1500),document.getElementById("adg_native_spike").style.display="block"}catch(e){}}else if(HPNADivArr.length>0){var A;(A=document.createElement("script")).async=!0,A.setAttribute("data-cfasync","false"),setTimeout((function(){"undefined"!=typeof adg_crtg_content?A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+HPNADivArr.length+"&p4="+getCurrentHrId()+"&p7="+encodeURIComponent(adg_crtg_content):A.src=adg_domain+"/AdServing/AdserveServlet?p2="+u.siteId+"&p3="+ibnkeyword+"&p5=9&p6="+HPNADivArr.length+"&p4="+getCurrentHrId(),document.body.appendChild(A)}),1500)}}}function imageErrorHandler(e,t){window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./)||(e.src=t)}function callback_spike_9(e){if(0==HPNADivArr.length&&0==isHomePage)for(var t=spikeDiv.getElementsByClassName("spike_article"),a=0;a<e.length;a++)if(e[a].banner){var n=0;t[n=NativeAdPos[a]-1].innerHTML="",(g=document.createElement("iframe")).frameBorder=0,g.style.zIndex="2",g.style.position="relative",g.height="80px",g.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},g.scrolling="no",t[n].appendChild(g),(p=g.contentWindow).document.open();var r=e[a].banner;p.document.write(r),p.document.close()}else{var i=e[a],d=t[NativeAdPos[a]-1].getElementsByTagName("a"),o=decodeURIComponent(i.trackerUrl);d[0].href=o,t[NativeAdPos[a]-1].getElementsByClassName("imageSrc")[0].src=i.imageUrl,t[NativeAdPos[a]-1].getElementsByClassName("articleTitle")[0].innerHTML=decodeURIComponent(i.title.replace(/\+/g," ")),d[0].setAttribute("target","_blank");t[NativeAdPos[a]-1].getElementsByClassName("callout");var l=document.createElement("iframe");if(t[NativeAdPos[a]-1].appendChild(l),l.width="0px",l.height="0px",l.style.border="0px",(_=l.contentWindow).document.open(),_.document.write(i.spikeImpressionTrackerUrl),_.document.close(),i.thirdPartyTrackerUrl)for(var s=i.thirdPartyTrackerUrl.split(","),c=0;c<s.length;c++){(v=document.createElement("iframe")).id=Date.now(),v.src=s[c],v.width="0px",v.height="0px",v.style.border="0px",t[NativeAdPos[a]-1].appendChild(v)}if(i.impUrl)for(s=i.impUrl.split(","),c=0;c<s.length;c++){(v=document.createElement("iframe")).id=Date.now(),v.src=s[c],v.width="0px",v.height="0px",v.style.border="0px",t[NativeAdPos[a]-1].appendChild(v)}}else if(HPNADivArr.length>0)for(a=0;a<HPNADivArr.length;a++){if(void 0===e[a]){for(i=NativeSpikeArticles[a],d=HPNADivArr[a].getElementsByTagName("a"),o=decodeURIComponent(i.articleURL),n=0;n<d.length;n++){if(d[n].href=o,d[n].getElementsByTagName("img").length>0){if((u=d[n].getElementsByTagName("img")[0]).removeAttribute("alt"),u.removeAttribute("title"),u.src=i.imageSrc,1==d.length){var m=d[n].innerHTML.split(">")[0]+">"+decodeURIComponent(i.articleTitle.replace(/\+/g," "));d[n].innerHTML=m}}else d[n].innerHTML=decodeURIComponent(i.articleTitle.replace(/\+/g," "))}l=document.createElement("iframe");if(HPNADivArr[a].appendChild(l),l.width="0px",l.height="0px",l.style.border="0px",(_=l.contentWindow).document.open(),_.document.write(i.spikeImpressionTrackerUrl),_.document.close(),i.thirdPartyTrackerUrl)for(s=i.thirdPartyTrackerUrl.split(","),c=0;c<s.length;c++){(v=document.createElement("iframe")).id=Date.now(),v.src=s[c],v.width="0px",v.height="0px",v.style.border="0px",HPNADivArr[a].appendChild(v)}if(i.impUrl)for(s=i.impUrl.split(","),c=0;c<s.length;c++){(v=document.createElement("iframe")).id=Date.now(),v.src=s[c],v.width="0px",v.height="0px",v.style.border="0px",HPNADivArr[a].appendChild(v)}}else if(e[a].banner){var g,p;(g=document.createElement("iframe")).frameBorder=0,g.style.zIndex="2",g.style.position="relative",g.height="80px",g.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},g.scrolling="no",HPNADivArr[a].innerHTML="",HPNADivArr[a].appendChild(g),(p=g.contentWindow).document.open();r=e[a].banner;p.document.write(r),p.document.close()}else{for(i=e[a],d=HPNADivArr[a].getElementsByTagName("a"),o=decodeURIComponent(i.trackerUrl),n=0;n<d.length;n++){var u;if(d[n].href=o,d[n].getElementsByTagName("img").length>0){if((u=d[n].getElementsByTagName("img")[0]).removeAttribute("alt"),u.removeAttribute("title"),u.src=i.imageUrl,1==d.length){m=d[n].innerHTML.split(">")[0]+">"+decodeURIComponent(i.title.replace(/\+/g," "));d[n].innerHTML=m}}else d[n].innerHTML=decodeURIComponent(i.title.replace(/\+/g," "));d[n].setAttribute("target","_blank")}var _;l=document.createElement("iframe");if(HPNADivArr[a].appendChild(l),l.width="0px",l.height="0px",l.style.border="0px",(_=l.contentWindow).document.open(),_.document.write(i.spikeImpressionTrackerUrl),_.document.close(),i.thirdPartyTrackerUrl)for(s=i.thirdPartyTrackerUrl.split(","),c=0;c<s.length;c++){(v=document.createElement("iframe")).id=Date.now(),v.src=s[c],v.width="0px",v.height="0px",v.style.border="0px",HPNADivArr[a].appendChild(v)}if(i.impUrl)for(s=i.impUrl.split(","),c=0;c<s.length;c++){var v;(v=document.createElement("iframe")).id=Date.now(),v.src=s[c],v.width="0px",v.height="0px",v.style.border="0px",HPNADivArr[a].appendChild(v)}}HPNADivArr[a].style.display="block"}}function callback_spike_personalized(e){var t=e.spikeArticles,a=spikeDiv.getElementsByClassName("spike_article");for(j=0;j<a.length&&j<t.length;j++){var n=t[j];a[j].getElementsByTagName("a")[0].href=n.url;var r=a[j].getElementsByClassName("imageSrc");r[0].src=n.imgSrc,r[0].setAttribute("onerror",'imageErrorHandler(this,"'+n.default_image_url+'")'),a[j].getElementsByClassName("articleTitle")[0].innerHTML=n.title}}function callback_spike_12(e){var t=document.createElement("iframe");t.width="300px",t.height="250px",t.id="bnrIframe",t.frameBorder=0,t.style.zIndex="2",t.style.position="relative",t.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},t.scrolling="no","undefined"!=typeof adg_crtg_content?(t.setAttribute("data-criteoresp",adg_crtg_content),t.setAttribute("data-criteoCookie",encodeURIComponent(adg_crtg_content))):t.setAttribute("data-criteoresp",null),document.getElementById("div_BNR1").appendChild(t);var a=t.contentWindow;a.document.open();var n=decodeURIComponent(e[0].banner);a.document.write(n),a.document.close()}setTimeout((function(){if(spikeDiv&&0==spikeResponse){var e=adg_domain+"/AdServing/NotToServe?p1=2&p3=901&p4="+urls.split("?")[0]+"&p5=0&p6=12",t=document.createElement("script");t.async=!0,t.setAttribute("data-cfasync","false"),t.setAttribute("type","text/javascript"),t.setAttribute("src",e),document.body.appendChild(t)}}),2e3);var spikeOceanServletUrl="",spikeOceanDiv=(totalArticleCount=0,document.getElementById("adg_native_ocean"));if(spikeOceanDiv){var Fixeddomain,isOcean=spikeOceanDiv.getAttribute("data-oceanFlag"),adg_slotId=spikeOceanDiv.getAttribute("data-slotId"),adg_templateId=spikeOceanDiv.getAttribute("data-templateId"),divIdMain=spikeOceanDiv.getAttribute("data-divId");urls=window.location!=window.parent.location?document.referrer:document.location.href;null!=(Fixeddomain=spikeOceanDiv.getAttribute("data-domain"))?urls=Fixeddomain:-1!=urls.indexOf("adgebrademo=true")&&(urls=urls.split("?")[0]),spikeOceanServletUrl=adg_domain+"/AdServing/OceanAdserveServlet?&p3="+ibnkeyword+"&p5=9&p4="+getCurrentHrId()+"&url="+urls+"&slotId="+adg_slotId+"&isOcean="+isOcean+"&templateId="+adg_templateId;var batchNo=0,spikeOceanServletUrlFirst=spikeOceanServletUrl+"&batchNo="+batchNo,script1=(body=document.getElementsByTagName("body").item(0),document.createElement("script"));script1.async=!0,script1.setAttribute("data-cfasync","false"),script1.setAttribute("type","text/javascript"),script1.setAttribute("src",spikeOceanServletUrlFirst),body.appendChild(script1);var styleCss=document.createElement("style");styleCss.type="text/css",styleCss.styleSheet?styleCss.styleSheet.cssText="@media screen and (orientation:portrait) {#adg_native_ocean{width:98%!important;}}":styleCss.appendChild(document.createTextNode("@media screen and (orientation:portrait) {#adg_native_ocean{width:98%!important;}}")),document.getElementsByTagName("head")[0].appendChild(styleCss)}var objOcean="",viewPortFlag=!1;function callback_oceanSpike(e){if(objOcean=e,1==viewPortFlag){spikeOceanDiv.innerHTML=objOcean.TEMPLATEHEADER;var t=spikeOceanDiv.getElementsByClassName("adg_ocean_video");if(t.length>0){var a=t[0].getAttribute("data-src"),n=document.createElement("script");n.async=!0,n.setAttribute("data-cfasync","false"),n.setAttribute("type","text/javascript"),n.setAttribute("src",a),t[0].appendChild(n)}spikeOceanDiv.insertAdjacentHTML("beforeend",objOcean.HTMLTEMPLATE);var r=spikeOceanDiv.getElementsByClassName("adg_ocean_article"),i=objOcean.oceanArticles;totalArticleCount=r.length;var d=0;for(j=0;j<r.length;j++){d=j,j>=i.length&&(d=j%i.length);var o=i[d];o.url.split("?utm_source")[0];void 0===o.url.split("?utm_source")[1]&&(2,o.url.split("&utm_source")[0]),(h=r[j].getElementsByTagName("a"))[0].href=o.clickTracker,h[0].setAttribute("target","_blank"),(f=r[j].getElementsByClassName("adg_ocean_article_Img"))[0].src=o.imgurl;var l=r[j].getElementsByClassName("adg_ocean_article_heading"),s=decodeURIComponent(o.title.replace(/\+/g," ")),c=s.slice(0,75)+(s.length>75?"...":"");l[0].innerHTML=c,(N=document.createElement("iframe")).id=j,document.body.appendChild(N),N.width="0px",N.height="0px",N.style.border="0px";var m=o.impressionTracker;N.src=m}var g=spikeOceanDiv.getElementsByClassName("adg_ocean_ad"),p=objOcean.oceanAds,u=0;for(j=0;j<g.length;j++){u=j,j>=p.length&&(u=j%p.length);var _=p[u],v=decodeURIComponent(_.trackerUrl)+"&referurl="+document.URL,h=g[j].getElementsByTagName("a"),y=g[j].getElementsByClassName("adg_ocean_ad_heading"),f=g[j].getElementsByClassName("adg_ocean_ad_Img"),b=g[j].getElementsByClassName("ad_icon_img"),A=g[j].getElementsByClassName("ad_icon_txt"),I=g[j].getElementsByClassName("ctaDiv");h[0].href=v,h[0].setAttribute("target","_blank");var N,x=f[0].alt;if(f[0].src="adg_Native_HD_Img"==x?_.img990x505:"adg_43_200x150"==x?_.size_43_200x150:"adg_43_100x75"==x?_.size_43_100x75:"adg_169_400x225"==x?_.size_169_400x225:"adg_169_200x113"==x?_.size_169_200x113:"adg_169_100x56"==x?_.size_169_100x56:"adg_21_400x200"==x?_.size_21_400x200:"adg_21_200x100"==x?_.size_21_200x100:"adg_21_100x50"==x?_.size_21_100x50:"adg_65_600x500"==x?_.size_65_600x500:"adg_65_300x250"==x?_.size_65_300x250:"adg_65_100x83"==x?_.size_65_100x83:_.imageUrl,b.length>0&&(b[0].src=_.iconImageUrl),f[0].removeAttribute("alt"),(N=document.createElement("iframe")).id=j,document.body.appendChild(N),N.width="0px",N.height="0px",N.style.border="0px",0==j){var C=(m=decodeURIComponent(_.impressionUrlForApi))+"&slotId="+adg_slotId+"&templateId="+adg_templateId;N.src=C}else{C=(m=decodeURIComponent(_.impressionUrlForApi))+"&slotId=0&templateId=0";N.src=C}y[0].innerHTML=decodeURIComponent(_.title.replace(/\+/g," ")),A.length>0&&(A[0].innerHTML=decodeURIComponent(_.pnTilte.replace(/\+/g," ")));try{if(I.length>0&&_.ctaMessage){var E=document.createElement("button");E.type="button",E.innerHTML=decodeURIComponent(_.ctaMessage.replace(/\+/g," ")),E.className="ctaButton",I[0].appendChild(E)}}catch(e){console.log(e.message)}if(_.thirdPartyTrackerUrl)for(var k=_.thirdPartyTrackerUrl.split(","),T=0;T<k.length;T++){(M=document.createElement("iframe")).id=Date.now(),M.src=k[T],M.width="0px",M.height="0px",M.style.border="0px",document.body.appendChild(M)}if(_.impUrl)for(k=_.impUrl.split(","),T=0;T<k.length;T++){var M;(M=document.createElement("iframe")).id=Date.now(),M.src=k[T],M.width="0px",M.height="0px",M.style.border="0px",document.body.appendChild(M)}}var B=document.getElementsByClassName("adg_ocean_native")[0].clientHeight+spikeOceanDiv.clientHeight;spikeOceanDiv.style.height=B+"px",document.getElementById(divIdMain).style.display="block"}else 0==document.getElementsByClassName("adgebra_expand-btn").length&&(objectJson=objOcean,loadReadMoreContent(1))}function yHandler(){var e=document.getElementById(divIdMain);if(inViewportImageOcean(e)&&0==viewPortFlag&&""!=objOcean)viewPortFlag=!0,callback_oceanSpike(objOcean);else if(inViewportImageOcean(e)&&1==viewPortFlag){var t=document.getElementsByClassName("adg_heading")[0].getAttribute("fixed-height");null!=t&&void 0!==t?e.clientHeight<t&&recall():recall()}}function inViewportImageOcean(e){var t,a;return!(!e||1!==e.nodeType)&&(a=document.documentElement,!!(t=e.getBoundingClientRect())&&t.bottom>=0&&t.top<=a.clientHeight+300&&t.bottom<=a.clientHeight+300&&t.left<=a.clientWidth&&t.right<=a.clientWidth)}function recall(){var e=spikeOceanServletUrl+"&batchNo="+(batchNo+=1),t=document.getElementsByTagName("body").item(0),a=document.createElement("script");a.async=!0,a.setAttribute("data-cfasync","false"),a.setAttribute("type","text/javascript"),a.setAttribute("src",e),t.appendChild(a),spikeOceanDiv.insertAdjacentHTML("beforeend",objOcean.HTMLTEMPLATE);var n=spikeOceanDiv.getElementsByClassName("adg_ocean_article"),r=objOcean.oceanArticles;totalArticleCount=n.length;var i=0;for(j=0;j<n.length;j++){i=j,j>=r.length&&(i=j%r.length);var d=r[i],o=(d.url.split("?utm_source")[0],n[j].getElementsByTagName("a")),l=n[j].getElementsByClassName("adg_ocean_article_Img"),s=n[j].getElementsByClassName("adg_ocean_article_heading");if(""==s[0].innerHTML.trim()&&0==s[0].innerHTML.length){o[0].href=d.clickTracker,o[0].setAttribute("target","_blank"),l[0].src=d.imgurl;var c=decodeURIComponent(d.title.replace(/\+/g," ")),m=c.slice(0,75)+(c.length>75?"...":"");s[0].innerHTML=m;var g=document.createElement("iframe");g.id=j,document.body.appendChild(g),g.width="0px",g.height="0px",g.style.border="0px";var p=d.impressionTracker;g.src=p}}var u=document.getElementsByClassName("adg_ocean_native")[0].clientHeight+spikeOceanDiv.clientHeight;spikeOceanDiv.style.height=u+"px"}function callback_oceanSpikeAd(e){var t=spikeOceanDiv.getElementsByClassName("adg_ocean_native")[e.batchNo].getElementsByClassName("adg_ocean_ad"),a=(t.length,e.oceanAds),n=0;for(j=0;j<t.length;j++){n=j,j>=a.length&&(n=j%a.length);var r=a[n],i=decodeURIComponent(r.trackerUrl)+"&referurl="+document.URL,d=t[j].getElementsByTagName("a"),o=t[j].getElementsByClassName("adg_ocean_ad_Img"),l=t[j].getElementsByClassName("adg_ocean_ad_heading"),s=t[j].getElementsByClassName("ad_icon_img"),c=t[j].getElementsByClassName("ad_icon_txt"),m=t[j].getElementsByClassName("ctaDiv");if(""==l[0].innerHTML.trim()&&0==l[0].innerHTML.length){d[0].href=i,d[0].setAttribute("target","_blank");var g=o[0].alt;o[0].src="adg_Native_HD_Img"==g?r.img990x505:"adg_43_200x150"==g?r.size_43_200x150:"adg_43_100x75"==g?r.size_43_100x75:"adg_169_400x225"==g?r.size_169_400x225:"adg_169_200x113"==g?r.size_169_200x113:"adg_169_100x56"==g?r.size_169_100x56:"adg_21_400x200"==g?r.size_21_400x200:"adg_21_200x100"==g?r.size_21_200x100:"adg_21_100x50"==g?r.size_21_100x50:"adg_65_600x500"==g?r.size_65_600x500:"adg_65_300x250"==g?r.size_65_300x250:"adg_65_100x83"==g?r.size_65_100x83:r.imageUrl,s.length>0&&(s[0].src=r.iconImageUrl),o[0].removeAttribute("alt");var p=document.createElement("iframe");if(p.id=j,document.body.appendChild(p),p.width="0px",p.height="0px",p.style.border="0px",0==j){var u=decodeURIComponent(r.impressionUrlForApi)+"&slotId="+adg_slotId+"&templateId="+adg_templateId;p.src=u}else{u=decodeURIComponent(r.impressionUrlForApi)+"&slotId=0&templateId=0";p.src=u}l[0].innerHTML=decodeURIComponent(r.title.replace(/\+/g," ")),c.length>0&&(c[0].innerHTML=decodeURIComponent(r.pnTilte.replace(/\+/g," ")));try{if(m.length>0&&r.ctaMessage){var _=document.createElement("button");_.type="button",_.innerHTML=decodeURIComponent(r.ctaMessage.replace(/\+/g," ")),_.className="ctaButton",m[0].appendChild(_)}}catch(e){console.log(e.message)}if(r.thirdPartyTrackerUrl)for(var v=r.thirdPartyTrackerUrl.split(","),h=0;h<v.length;h++){(y=document.createElement("iframe")).id=Date.now(),y.src=v[h],y.width="0px",y.height="0px",y.style.border="0px",document.body.appendChild(y)}if(r.impUrl)for(v=r.impUrl.split(","),h=0;h<v.length;h++){var y;(y=document.createElement("iframe")).id=Date.now(),y.src=v[h],y.width="0px",y.height="0px",y.style.border="0px",document.body.appendChild(y)}}}}window.addEventListener("scroll",();var adgAdUnitClass="adg_native_ibn",adg_AdUnit=document.getElementsByClassName(adgAdUnitClass);if(adg_AdUnit.length>0)for(var adunitDiv=0;adunitDiv<adg_AdUnit.length;adunitDiv++){var adUnitId=adg_AdUnit[adunitDiv].getAttribute("data-adUnitId"),templateId=adg_AdUnit[adunitDiv].getAttribute("data-templateId"),slotId=adg_AdUnit[adunitDiv].getAttribute("data-slotId"),domain=adg_AdUnit[adunitDiv].getAttribute("data-domain");""==domain&&-1!=(domain=window.location!=window.parent.location?document.referrer:document.location.href).indexOf("adgebrademo=true")&&(domain=domain.split("?")[0]);var ibnNativeServet=adg_domain+"/AdServing/AdserveServlet?&p3="+ibnkeyword+"&p5=9&p6=&p4="+getCurrentHrId()+"&callback=callback_IBNNativeAds&adUnitId="+adUnitId+"&templateId="+templateId+"&slotId="+slotId+"&isIBN=1&domain="+domain,ibnDemoFlag="",ibnbannerId="";""==demoFlagIBN&&null==demoFlagIBN&&void 0===demoFlagIBN||""==bannerId&&null==bannerId&&void 0===bannerId||(1==demoFlagIBN?(ibnDemoFlag="&demoFlagIBN=1",ibnbannerId="&"+bannerId):(ibnDemoFlag="&demoFlagIBN=",ibnbannerId="&bannerId="),ibnNativeServet=ibnNativeServet+ibnDemoFlag+ibnbannerId);var adg_AdunitScript=document.createElement("script");document.body.appendChild(adg_AdunitScript),adg_AdunitScript.async=!0,adg_AdunitScript.src=ibnNativeServet}function callback_IBNNativeAds(e){objIBN=e,0==document.getElementsByClassName("adgebra_expand-btn").length&&(objectJson=objIBN,loadReadMoreContent(1));var t=document.getElementById(objIBN.adUnitId);t.innerHTML+=objIBN.HTMLTEMPLATE;var a=t.getElementsByClassName("adg_native_home"),n=objIBN.ibnAds;if(a.length>0)for(var r=0;r<n.length;r++){if(n[r].banner){var i=document.createElement("iframe");i.frameBorder=0,i.id="nativeAdcodeBanner"+r,i.style.zIndex="2",i.style.position="relative",i.height=siteConfigJson.native_height+"px",i.onload=function(){var e=this.contentDocument.body;e.style.padding=0,e.style.margin=0},i.scrolling="no",a[r].innerHTML="",a[r].appendChild(i);var d=i.contentWindow;d.document.open();var o=n[r].banner;d.document.write(o),d.document.close()}else{var l=n[r],s=a[r].getElementsByTagName("a"),c=geIframeStatus(),m=decodeURIComponent(l.trackerUrl),g=a[r].getElementsByClassName("adg_Native_Img_heading"),p=a[r].getElementsByClassName("ad_icon_img"),u=a[r].getElementsByClassName("ad_icon_text"),_=a[r].getElementsByClassName("ctaDiv");1==c.isIframe&&(m=m+"&isIframe="+c.isIframe+"&referurl="+c.referurl);for(var v=0;v<s.length;v++){if(s[v].href=m,s[v].getElementsByTagName("img").length>0){var h=s[v].getElementsByTagName("img")[0],y=h.alt;if(h.src="adg_Native_HD_Img"==y?l.img990x505:"adg_43_200x150"==y?l.size_43_200x150:"adg_43_100x75"==y?l.size_43_100x75:"adg_169_400x225"==y?l.size_169_400x225:"adg_169_200x113"==y?l.size_169_200x113:"adg_169_100x56"==y?l.size_169_100x56:"adg_21_400x200"==y?l.size_21_400x200:"adg_21_200x100"==y?l.size_21_200x100:"adg_21_100x50"==y?l.size_21_100x50:"adg_65_600x500"==y?l.size_65_600x500:"adg_65_300x250"==y?l.size_65_300x250:"adg_65_100x83"==y?l.size_65_100x83:l.imageUrl,h.removeAttribute("alt"),h.removeAttribute("title"),0==g.length){if(1==s.length){var f=s[v].innerHTML.split(">")[0]+">"+decodeURIComponent(l.title.replace(/\+/g," "));s[v].innerHTML=f}}else{var b=decodeURIComponent(l.title.replace(/\+/g," "));g[0].innerHTML=b}}else if(0==g.length)s[v].innerHTML=decodeURIComponent(l.title.replace(/\+/g," "));else{b=decodeURIComponent(l.title.replace(/\+/g," "));g[0].innerHTML=b}s[v].setAttribute("target","_blank"),p.length>0&&u.length>0&&(p[0].src=l.iconImageUrl,u[0].innerHTML=decodeURIComponent(l.pnTilte.replace(/\+/g," ")));try{if(_.length>0&&l.ctaMessage){var A=document.createElement("button");A.type="button",A.innerHTML=decodeURIComponent(l.ctaMessage.replace(/\+/g," ")),A.className="ctaButton",_[0].appendChild(A)}}catch(e){console.log(e.message)}}var I=document.createElement("iframe");a[r].appendChild(I),I.width="0px",I.height="0px",I.style.border="0px";var N=I.contentWindow;if(N.document.open(),N.document.write(l.spikeImpressionTrackerUrl),N.document.close(),l.thirdPartyTrackerUrl)for(var x=l.thirdPartyTrackerUrl.split(","),C=0;C<x.length;C++){(E=document.createElement("iframe")).id=Date.now(),E.src=x[C],E.width="0px",E.height="0px",E.style.border="0px",a[r].appendChild(E)}if(l.impUrl)for(x=l.impUrl.split(","),C=0;C<x.length;C++){var E;(E=document.createElement("iframe")).id=Date.now(),E.src=x[C],E.width="0px",E.height="0px",E.style.border="0px",a[r].appendChild(E)}}a[r].style.display="block"}try{if(inIframe()){var k=window.frameElement.id;window.parent.document.getElementById(k).style.display="block"}}catch(e){}}function loadReadMoreContent(e){var t=objectJson.siteParameter.split("#")[0],a=JSON.parse(objectJson.siteParameter.split("#")[1]),n="",r="",i="",d="",o="";if(2==t&&("generic"!=a.readMoreParentDClassName&&document.getElementsByClassName(a.readMoreParentDClassName).length>0?n=document.getElementsByClassName(a.readMoreParentDClassName)[0]:"generic"!=a.readMoreParentDTagName&&document.getElementsByTagName(a.readMoreParentDTagName).length>0?n=document.getElementsByTagName(a.readMoreParentDTagName)[0]:"generic"!=a.readMoreParentDIdName&&document.getElementById(a.readMoreParentDIdName)&&(n=document.getElementById(a.readMoreParentDIdName)),i=a.readMoreDParameterHeight,""==n&&a.consoleMessageFlag>=1&&("generic"!=a.readMoreParentDClassName&&console.log("Adgebra Read More:Defined class name not found:-"+a.readMoreParentDClassName),"generic"!=a.readMoreParentDTagName&&console.log("Adgebra Read More:Defined Tag name not found:-"+a.readMoreParentDTagName),"generic"!=a.readMoreParentDIdName&&console.log("Adgebra Read More:Defined Id name not found:-"+a.readMoreParentDIdName)),d=a.readMoreParentDDivCss,o=a.readMoreParentDButtonCss),1==t&&("generic"!=a.readMoreParentMClassName&&document.getElementsByClassName(a.readMoreParentMClassName).length>0?n=document.getElementsByClassName(a.readMoreParentMClassName)[0]:"generic"!=a.readMoreParentMTagName&&document.getElementsByTagName(a.readMoreParentMTagName).length>0?n=document.getElementsByTagName(a.readMoreParentMTagName)[0]:"generic"!=a.readMoreParentMIdName&&document.getElementById(a.readMoreParentMIdName)&&(n=document.getElementById(a.readMoreParentMIdName)),i=a.readMoreMParameterHeight,""==n&&a.consoleMessageFlag>=1&&("generic"!=a.readMoreParentMClassName&&console.log("Adgebra Read More:Defined class name not found:-"+a.readMoreParentMClassName),"generic"!=a.readMoreParentMTagName&&console.log("Adgebra Read More:Defined Tag name not found:-"+a.readMoreParentMTagName),"generic"!=a.readMoreParentMIdName&&console.log("Adgebra Read More:Defined Id name not found:-"+a.readMoreParentMIdName)),d=a.readMoreParentMDivCss,o=a.readMoreParentMButtonCss),1==e&&""!=n){var l=document.createElement("div");l.innerHTML='<button onclick="loadReadMoreContent(0);" class="adgebra_expand-btn" >'+a.readMoreLanguageContent+"</button>",n.insertAdjacentElement("afterbegin",l),n.style.overflow="hidden",n.style.height=i+"px",l.setAttribute("style",d),l.style.marginTop=i-200+"px",l.style.zIndex=a.zIndex,(r=document.getElementsByClassName("adgebra_expand-btn")[0]).setAttribute("style",o)}else 0==e&&""!=n&&(n.style.overflow="visible",n.style.height="auto",r=document.getElementsByClassName("adgebra_expand-btn")[0],n.removeChild(r.parentNode))}