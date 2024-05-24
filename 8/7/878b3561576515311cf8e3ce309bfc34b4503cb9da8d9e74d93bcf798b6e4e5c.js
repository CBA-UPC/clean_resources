/*! lazysizes - v5.3.2 */
window.lazySizesConfigRWAD=window.lazySizesConfig||{},window.lazySizesConfigRWAD.lazyClass="lazyload-rwad",window.lazySizesConfigRWAD.init=!1,function(e){var t=function(e,t,i){"use strict";if(),!t||!t.getElementsByClassName)return{init:cfg:Y,noSupport:!0};var r,l,o,s,d,n,a,f,c,u,p,g,h,y,A,w,$,b,m,v,U,z,C,_,E,S,x,k,R,I,L,N,T,B,O,P,q,D,M,W,V,F,H,j,Q,X,Y,K=t.documentElement,G=e.HTMLPictureElement,J="addEventListener",Z="getAttribute",ee=e[J].bind(e),et=e.setTimeout,ei=e.requestAnimationFrame||et,er=e.requestIdleCallback,el=/^picture$/i,eo=["load","error","lazyincluded","_lazyloaded"],es={},ed=Array.prototype.forEach,en=ea=ef=ec=eu=ep=eg=eh=ey=(s=[],d=o=[],n=(a=._lsFlush=n,a),eA=ew=e$=eb=(v=/^img$/i,U=/^iframe$/i,z="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),C=0,_=0,E=0,S=-1,x=k=R=L=ew(I=function(){var e,i,r,l,o,s,d,n,a,u,g,v,U=X.elements;if((p=Y.loadMode)&&E<8&&(e=U.length)){for(i=0,S++;i<e;i++)if(U[i]&&!U[i]._lazyRace){if(!z||X.prematureUnveil&&X.prematureUnveil(U[i])){D(U[i]);continue}if((n=U[i][Z]("data-expand"))&&(s=1*n)||(s=_),u||(u=!Y.expand||Y.expand<1?K.clientHeight>500&&K.clientWidth>500?500:370:Y.expand,X._defEx=u,g=u*Y.expFactor,v=Y.hFac,m=null,_<g&&E<1&&S>2&&p>2&&!t.hidden?(_=g,S=0):_=p>1&&S>1&&E<6?u:C),a!==s&&(h=innerWidth+s*v,y=innerHeight+s,d=-1*s,a=s),(b=(r=U[i].getBoundingClientRect()).bottom)>=d&&(A=r.top)<=y&&($=r.right)>=d*v&&(w=r.left)<=h&&(b||$||w||A)&&(Y.loadHidden||k(U[i]))&&(c&&E<3&&!n&&(p<3||S<4)||R(U[i],s))){if(D(U[i]),o=!0,E>9)break}else!o&&c&&!l&&E<4&&S<4&&p>2&&(f[0]||Y.preloadAfterLoad)&&(f[0]||!n&&(b||$||w||A||"auto"!=U[i][Z](Y.sizesAttr)))&&(l=f[0]||U[i])}l&&!o&&D(l)}}),T=eA(N=,B=O=P=q=eA(,D=function(e){if(!e._lazyRace){var t,i=v.test(e.nodeName),r=i&&(e[Z](Y.sizesAttr)||e[Z]("sizes")),l="auto"==r;!((l||!c)&&i&&(e[Z]("src")||e.srcset)&&!e.complete&&!en(e,Y.errorClass)&&en(e,Y.lazyClass))&&(t=eu(e,"lazyunveilread").detail,l&&em.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,E++,q(e,t,l,r,i))}},M=e$(,W=V={_:checkElems:L,unveil:D,_aLSL:W}),em=(H=eA(,j={_:checkElems:Q=e$(,updateElem:j}),ev=return et(,X={cfg:Y,autoSizer:em,loader:eb,init:ev,uP:ep,aC:ea,rC:ef,hC:en,fire:eu,gW:eh,rAF:ey}}(e,e.document,Date);e.lazySizesRWAD=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});var lerp=(e,t,i)=>e*(1-i)+t*i,clamp=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),invlerp=(e,t,i)=>clamp((i-e)/(t-e)),range=(e,t,i,r,l)=>lerp(i,r,invlerp(e,t,l)),wait=retryOperation=function(e,t){return new Promise(function(i,r){if(!e())return wait(t).then(retryOperation.bind(null,e,t)).then(i).catch(r);i()})},is_desktop=void 0===window.is_desktop?!is_mobile:is_desktop,reworldAd=reworldAd||{};reworldAd.que=reworldAd.que||[];var reworldAdUtils=reworldAdUtils||{};reworldAdUtils.que=reworldAdUtils.que||[],reworldAdUtils.lazySlots={},reworldAdUtils.insertAutoAdsInitialized={},reworldAdUtils.autoRefreshStarted=!1,reworldAdUtils.autoRefreshInterval=null,reworldAdUtils.autoRefreshBlocked=!1,reworldAdUtils.autoRefreshBlacklist=[],reworldAdUtils.ads={},document.addEventListener("lazybeforeunveil",function(e){if(e.target.classList.contains("lazyload-rwad")){var t=e.target.id,i=e.target.getAttribute("data-position-desktop"),r=e.target.getAttribute("data-position-mobile"),l=e.target.getAttribute("data-position"),o=e.target.getAttribute("data-sticky")||!1,s=e.target.getAttribute("data-child-adunit")||"",d=e.target.getAttribute("data-placeholder")||!0;d="false"!==d;var n=null;is_mobile&&r?n=r:!is_mobile&&i?n=i:l&&(n=l),n?reworldAdUtils.que.push(function(){d&&reworldAdUtils.addPlaceholder(n,t),reworldAdUtils.displayAd(n,t,{sticky:o,childAdUnit:s})}):console.warn("No position defined for ",t)}});const stickyObserver=e=>new IntersectionObserver(([t])=>{t.intersectionRatio>.5&&t.intersectionRatio<1?window.scrollY+100>reworldAdUtils._getCoords(t.target).top&&reworldAdUtils.setSticky(t.target.childNodes[0],e):1===t.intersectionRatio&&reworldAdUtils.unsetSticky(t.target.childNodes[0]),window.scrollY+100<reworldAdUtils._getCoords(t.target).top&&reworldAdUtils.unsetSticky(t.target.childNodes[0])},{threshold:[1],rootMargin:"-"+e+"px 0px 0px 0px"});var googletag=googletag||{cmd:[]};oogletag.cmd.push(function(){googletag.pubads().addEventListener("slotVisibilityChanged",function(e){if(!e.slot.getOutOfPage()){var t=e.slot.getSlotId().getId(),i=reworldAdUtils.ads[t];e.inViewPercentage>=50&&!i.visibilityStart?i.visibilityStart=new Date:(e.inViewPercentage<50||"hidden"===document.visibilityState)&&i.visibilityStart&&(i.visibilityDuration+=(new Date().getTime()-i.visibilityStart.getTime())/1e3,i.visibilityStart=null),e.inViewPercentage>=50&&i.visibilityDuration>=1&&!i.refreshTimeout&&void 0!==reworldAdUtils.prebidUtilsConfig&&reworldAdUtils.prebidUtilsConfig&&reworldAdUtils.prebidUtilsConfig.autoRefresh&&reworldAdUtils.refreshAdIfVisible(t)}}),googletag.pubads().addEventListener("slotRenderEnded",function(e){var t=e.slot.getSlotElementId(),i=e.slot.getSlotId().getId(),r=document.getElementById(t),l=e.slot.getSlotId().getDomId();let o=reworldAdUtils.ads[i];if(o||(reworldAdUtils.ads[i]={lastRefreshed:new Date,numberOfRefresh:0,refreshInterval:void 0!==reworldAdUtils.prebidUtilsConfig&&reworldAdUtils.prebidUtilsConfig&&reworldAdUtils.prebidUtilsConfig.autoRefresh||1e4,visibilityDuration:0,visibilityStart:null},o=reworldAdUtils.ads[i]),r&&(o.visibilityStart=reworldAdUtils._percentOfElementInViewport(r)>.5?new Date:null),e.isEmpty)o.refreshInterval*=1.5;else{o.refreshInterval/=1.5;var s=document.getElementById(l);s.classList.add("rwad-filled");var d=s.parentElement;d.classList.contains("rwad-with-placeholder")&&d.classList.add("rwad-placeholder-filled")}if(reworldAdUtils.que.push(function(){void 0!==reworldAdUtils.prebidUtilsConfig&&reworldAdUtils.prebidUtilsConfig&&reworldAdUtils.prebidUtilsConfig.autoRefresh&&(o.refreshInterval=clamp(o.refreshInterval,reworldAdUtils.prebidUtilsConfig.autoRefresh,6e4),o.lastRefreshed=new Date,o.numberOfRefresh+=1,reworldAdUtils.log("refresh "+i+" in "+o.refreshInterval/1e3+"s"),o.refreshTimeout=setTimeout(function(){reworldAdUtils.refreshAdIfVisible(i),clearTimeout(o.refreshTimeout),o.refreshTimeout=null},o.refreshInterval))}),"rwad-banner-ad"==t&&(e.isEmpty?document.getElementById("rwad-banner").style.display="none":document.getElementById("rwad-banner").style.display="block"),r&&r.getAttribute("data-sticky")){e.isEmpty?r.parentNode.style.display="none":r.parentNode.style.display="block";var n=r.getAttribute("data-sticky-offset")||0,a=r.querySelector("iframe[id^=google_ads_iframe]");a&&(a.style.margin="auto"),r.parentNode.getBoundingClientRect().bottom<0&&reworldAdUtils.setSticky(r.parentNode,n),stickyObserver(n).observe(r.parentNode.parentNode)}})}),reworldAdUtils.setSticky=function(e,t){e.classList.add("is-pinned"),e.setAttribute("style","position:fixed;top:"+t+"px;left:0;right:0;background-color:white;border-bottom:1px solid #efefef;z-index: 100;");var i=e.querySelector(".rwad-sticky-close");i&&(i.style.display="flex")},reworldAdUtils.unsetSticky=function(e){e.classList.remove("is-pinned"),e.style.removeProperty("top"),e.style.removeProperty("left"),e.style.removeProperty("right"),e.style.removeProperty("background-color"),e.style.removeProperty("border-bottom"),e.style.removeProperty("z-index"),e.setAttribute("style","position:block");var t=e.querySelector(".rwad-sticky-close");t&&(t.style.display="none")},reworldAdUtils._getSizes=function(e){var t=reworldAd.pbjsAdUnits.find(function(t){return reworldAdUtils.prebidUtilsConfig.usePositionName?t.code===e:t.code==="position-"+e});if(!t){console.warn("Can't get size for position "+e);return}if(!t.mediaTypes){console.warn("No mediaTypes for position "+e);return}var i=[];return t.mediaTypes.hasOwnProperty("banner")?i=t.mediaTypes.banner.sizes.slice(0):t.mediaTypes.hasOwnProperty("native")&&(i.includes(["fluid"])||i.push(["fluid"]),i.includes([1,2])||i.push([1,2])),t.mediaTypes.hasOwnProperty("native")&&t.mediaTypes.hasOwnProperty("banner")&&(i.includes("fluid")||i.push("fluid"),i.includes([1,2])||i.push([1,2])),i},reworldAdUtils.displayAd=function(e,t,i){retryOperation(function(){return void 0!==reworldAd.pbjsAdUnits},50).then(function(){i=Object.assign({},{sticky:!1,closeButton:!1,childAdUnit:""},i),reworldAd.que.push(function(){var r=reworldAdUtils._getSizes(e);r&&googletag.cmd.push(function(){let l=i.childAdUnit?reworldAdUtils.prebidUtilsConfig.adUnit+"/"+i.childAdUnit:reworldAdUtils.prebidUtilsConfig.adUnit;for(var o of(reworldAdUtils.lazySlots[t]=googletag.defineSlot(l,r,t).setTargeting("pos",e).addService(googletag.pubads()),Object.keys(reworldAdUtils.prebidUtilsConfig.targeting)))reworldAdUtils.lazySlots[t].setTargeting(o,reworldAdUtils.prebidUtilsConfig.targeting[o]);if(googletag.display(t),reworldAd.refresh([reworldAdUtils.lazySlots[t]]),i.sticky){var s=document.getElementById(t),d=document.createElement("div");if(s.parentNode.insertBefore(d,s),d.appendChild(s),i.closeButton){var n=document.createElement("div");n.className="rwad-sticky-close",n.textContent="X",n.setAttribute("style","display:none;position:absolute;bottom:-20px;right:0px;background-color: white;font-family: sans-serif;float: right;text-align: center;border-bottom: 1px solid gray;border-left: 1px solid gray;border-radius: 0% 0% 0% 50%;padding: 3px;height: 20px;width: 20px;cursor: pointer;line-height: 10px;font-size: 14px;justify-content: center; align-items: center;"),n.addEventListener("click",function(){d.remove()}),d.appendChild(n)}}})})})},reworldAdUtils._getCoords=function(e){var t,i=e.getBoundingClientRect(),r=document.body,l=document.documentElement,o=window.pageYOffset||l.scrollTop||r.scrollTop,s=window.pageXOffset||l.scrollLeft||r.scrollLeft,d=l.clientTop||r.clientTop||0,n=l.clientLeft||r.clientLeft||0;return{top:Math.round(i.top+o-d),left:Math.round(i.left+s-n)}},reworldAdUtils._percentOfElementInViewport=function(e){function t(e){return(e.right-e.left||1)*(e.bottom-e.top||1)}var i,r=e.getBoundingClientRect();return Math.max(0,t({left:Math.max(0,(i=r).left),top:Math.max(0,i.top),right:Math.min(window.innerWidth,i.right),bottom:Math.min(window.innerHeight,i.bottom)})/t(r))},reworldAdUtils.refreshAdIfVisible=function(e){reworldAd.que.push(function(){var t=googletag.pubads().getSlots().find(;if(t){var i=t.getSlotElementId(),r=document.getElementById(i);if(!t.getOutOfPage()&&"visible"===document.visibilityState){if(reworldAdUtils.autoRefreshBlacklist.includes(i)){reworldAdUtils.log("Div "+i+" is blacklisted for refresh");return}r&&r.parentNode.classList.contains("rwad-with-placeholder")&&(r=r.parentNode);var l=!1;r&&reworldAdUtils._percentOfElementInViewport(r)>.5&&(l=!0),l&&(reworldAdUtils.log("refresh OK"+e),reworldAd.refresh([t]))}}})},reworldAdUtils.refreshAdsInViewport=function(){reworldAd.que.push(function(){var e=googletag.pubads().getSlots(),t=[];for(var i of e){var r=i.getSlotElementId(),l=document.getElementById(r);if(!i.getOutOfPage()){if(reworldAdUtils.autoRefreshBlacklist.includes(r)){reworldAdUtils.log("Div "+r+" is blacklisted for refresh");continue}l&&l.parentNode.classList.contains("rwad-with-placeholder")&&(l=l.parentNode),l&&reworldAdUtils._percentOfElementInViewport(l)>=.5&&t.push(i)}}t.length&&reworldAd.refresh(t)})},reworldAdUtils.refreshAllAds=function(){reworldAd.que.push(function(){var e=[];for(var t of googletag.pubads().getSlots()){var i=t.getSlotElementId(),r=document.getElementById(i);!t.getOutOfPage()&&r&&e.push(t)}e.length&&reworldAd.refresh(e)})},reworldAdUtils.refreshAdsUpperThan=function(e){e||console.warn("refreshAdsUpperThan : elem parameters is empty");let t=e.getBoundingClientRect().top;reworldAd.que.push(function(){var e=[];for(var i of googletag.pubads().getSlots())if(!i.getOutOfPage()){var r=i.getSlotElementId(),l=document.getElementById(r);l&&l.getBoundingClientRect().top<t&&e.push(i)}e.length?reworldAd.refresh(e):console.warn("refreshAdsUpperThan : No ads to refresh")})},reworldAdUtils.addPlaceholder=function(e,t){reworldAd.que.push(function(){if(reworldAdUtils.prebidUtilsConfig.insertPlaceholder&&!["habillage"].includes(e)){var i=document.getElementById(t);if(!i.parentNode.classList.contains("rwad-with-placeholder")){var r=document.createElement("div");r.classList.add("rwad-with-placeholder"),i.parentNode.insertBefore(r,i),r.appendChild(i);var l=reworldAdUtils._getSizes(e);l||(l=[300,250]);var o=[0,0];for(var s of l)"fluid"===s[0]&&(s=[300,250]),s[1]>o[1]?o=s:s[1]===o[1]&&s[0]>o[0]&&(o=s);r.style["min-width"]=o[0]+"px",r.style["min-height"]=o[1]+"px",r.style.display="flex",r.style["justify-content"]="center",r.style["align-items"]="center"}}})},reworldAdUtils.insertAutoAds=function(e){e=Object.assign({},{deferLoading:!0,adThreshold:is_mobile?1600:400,position:is_mobile?105:5,selector:null,insertAdStart:!1,insertAdEnd:!1},e),reworldAdUtils.prebidUtilsConfig||console.warn("ReworldAd prebid utils : selector is required."),e.deferLoading||reworldAdUtils._insertAutoAds(),googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",})},reworldAdUtils._insertAutoAds=function(e){if(!this.insertAutoAdsInitialized[e.selector]){this.insertAutoAdsInitialized[e.selector]=!0;var t=[];for(var i of document.querySelectorAll(e.selector)){var r=0;for(elem of(e.insertAdStart&&i.childNodes.length&&t.push(i.childNodes[0]),i.childNodes))elem.offsetHeight&&(r+=elem.offsetHeight)>e.adThreshold&&(r=0,t.push(elem));r<.3*e.dThreshold?e.insertAdEnd?t[t.length-1]=elem:t.pop():e.insertAdEnd&&t.push(elem)}var l=0,o=null;for(var s of t){var d=document.createElement("div"),n="rwad-"+l;d.classList.add("lazyload-rwad"),d.classList.add("rwad"),d.id=n,o=Array.isArray(e.position)?e.position[l%e.position.length]:parseInt(e.position,10),d.setAttribute("data-expand",reworldAdUtils.prebidUtilsConfig.lazyLoadingThreshold),d.setAttribute("data-position",o),l++,s.parentNode.insertBefore(d,s.nextSibling),reworldAdUtils.addPlaceholder(o,d.id)}}},reworldAdUtils.addFixedBannerAd=function(e){if((e=Object.assign({},{position:is_mobile?110:10,area:"bottom",enableDesktop:!1,enableMobile:!0,closeButton:!1,childAdUnit:"",bottomOffset:0},e)).enableMobile&&is_mobile||e.enableDesktop&&is_desktop){if(!is_desktop||!(window.innerWidth<1100)){var t=document.createElement("div");t.id="rwad-banner",t.setAttribute("style","display:none;position:fixed;background-color:white;border-top:1px solid #efefef;z-index:150;"),t.style.left=0,t.style.right=0;var i=parseInt(e.bottomOffset)+"px";"bottom"===e.area?t.style.bottom=i:"top"===e.area?t.style.top=0:"bottom-left"===e.area?(t.style.bottom=i,t.style.left=0,t.style.right="auto"):"bottom-right"===e.area?(t.style.bottom=i,t.style.right=0,t.style.left="auto"):"bottom-center"===e.area&&(t.style.bottom=i,t.style.right="auto",t.style.left="50%",t.style.transform="translateX(-50%)");var r=document.createElement("div");if(r.id="rwad-banner-ad",t.appendChild(r),e.closeButton){var l=document.createElement("div");l.id="rwad-banner-close",l.textContent="X",l.setAttribute("style","position:absolute;background-color: white;font-family: sans-serif;float: right;text-align: center;border-top: 1px solid gray;padding: 3px;height: 20px;width: 20px;cursor: pointer;line-height: 10px;font-size: 14px;display: flex;justify-content: center; align-items: center;"),l.style.top="-20px",l.style.right=0,l.style.borderLeft="1px solid gray",l.style.borderRadius="50% 0% 0% 0%","bottom-left"===e.area&&(l.style.left=0,l.style.borderRight="1px solid gray",l.style.borderRadius="0% 50% 0% 0%"),l.addEventListener("click",function(){t.remove()}),t.appendChild(l)}document.body.appendChild(t),reworldAdUtils.displayAd(e.position,r.id,{childAdUnit:e.childAdUnit})}}},reworldAdUtils.stopAutoRefresh=function(e){if(e)for(var t=0;t<e.length;t++)reworldAdUtils.autoRefreshBlacklist.push(e[t]);else reworldAdUtils.prebidUtilsConfig&&(reworldAdUtils.prebidUtilsConfig.autoRefresh=!1)},reworldAdUtils.setPrebidUtilsConfig=function(e){reworldAdUtils.prebidUtilsConfig=Object.assign({},{adUnit:null,lazyLoadingThreshold:null,insertPlaceholder:!0,targeting:{},usePositionName:!1,autoRefresh:null},e);var t=500;if(is_mobile&&(t=window.innerHeight),navigator.connection&&navigator.connection.downlink&&(t*=range(0,10,2,1,navigator.connection.downlink)),null===reworldAdUtils.prebidUtilsConfig.lazyLoadingThreshold&&(reworldAdUtils.prebidUtilsConfig.lazyLoadingThreshold=parseInt(t,10)),!reworldAdUtils.prebidUtilsConfig.adUnit){console.error("Configuration is missing 'adUnit' param");return}reworldAdUtils.initialized||reworldAdUtils.initPrebidUtils()},reworldAdUtils.initPrebidUtils=function(){if(reworldAdUtils.initCallQueue(),reworldAdUtils.prebidUtilsConfig&&!reworldAdUtils.initialized){for(var e of(reworldAdUtils.initialized=!0,document.querySelectorAll(".lazyload-rwad")))e.getAttribute("data-expand")||e.setAttribute("data-expand",reworldAdUtils.prebidUtilsConfig.lazyLoadingThreshold);retryOperation(50).then(}},reworldAdUtils.initCallQueue=function(){if(!reworldAdUtils.callQueueInitialized){reworldAdUtils.callQueueInitialized=!0,reworldAdUtils.que.push=for(var e=0;e<reworldAdUtils.que.length;e++)reworldAdUtils.que[e]()}},reworldAdUtils.log=domReady(reworldAdUtils.initPrebidUtils);