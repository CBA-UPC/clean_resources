function dexTag(f){"use strict";const a="v20231212";const o=6;const d="https://";if(frameElement)frameElement.style.display="none";var g=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function l(e,t,i){if(!e.hasOwnProperty(t)){e[t]=i}else if(typeof i==="object"&&typeof i!==typeof e[t]){e[t]=i}}l(f,"debug",false);l(f,"timeout",300);l(f,"preBid",{});l(f,"equalTimeout",true);l(f,"autoAlternate",true);l(f,"gptAsync",true);l(f,"refresh",{});l(f.refresh,"enabled",false);l(f.refresh,"focus",true);l(f.refresh,"time",30);l(f.preBid,"enabled",true);l(f.preBid,"timeOut",1250);l(f.preBid,"bidders",{});l(f.preBid.bidders,"adf",true);l(f.preBid.bidders,"appnexus",true);l(f.preBid.bidders,"criteo",true);l(f.preBid.bidders,"ias",true);l(f.preBid.bidders,"improvedigital",true);l(f.preBid.bidders,"ix",true);l(f.preBid.bidders,"onetag",true);l(f.preBid.bidders,"openx",true);l(f.preBid.bidders,"pubmatic",true);l(f.preBid.bidders,"rubicon",true);l(f.preBid.bidders,"smartadserver",true);l(f.preBid.bidders,"triplelift",true);l(f,"aps",{});l(f.aps,"enabled",true);l(f.aps,"pubId",3748);l(f.aps,"timeOut",750);l(f.aps,"displayTimeOut",200);var p=f.noTop?frameElement.parentElement.ownerDocument:top.document;var u=f.noTop?window.parent:top.window;try{var i=u.location.search;let e=new URLSearchParams(i);let t=parseInt(e.get("4sdbg"));if(t){f.debug=true}}catch(e){}if(f.equalTimeout){let e=Math.max(f.timeout,f.preBid.timeOut,f.aps.timeOut,f.aps.displayTimeOut);f.timeout=e;f.preBid.timeOut=e;f.aps.timeOut=e;f.aps.displayTimeOut=e}onst m={name:"%c _4SDex_ ",get gptcolor:{base:e("111","FFF"),aps:e("FFA724","FFF"),gpt:e("222","ccc"),refresh:e("282","ccc"),preBid:e("333","bada55"),show:e("222","bada55")}};function v(){if(arguments.length>1){const e=new Date;arguments[0]+=" "+e.toLocaleString()+"."+e.getMilliseconds()}f.debug&&console.log.apply(null,arguments)}if(f.adUnit.indexOf("/316816995/milannews")===0){f.autoAlternate=true}function b(e,t,i){const r=e.createElement("script");r.src=t;r.async=i;r.type="text/javascript";return r}function t(n,e){const t=n._4SDex;if(t!==null&&typeof t==="object"){l(t,"version",0);if(t.version>=o){v(m.name,m.color.base,"library v"+t.version+" found and used\nBase code "+a);return t}}var c=this;n._4SDex=c;c.version=o;v(m.name,m.color.base,"library v"+o+" loaded");c.win=n;c.doc=e;c.lazy=false;c.refresh=[];c.tabVisible=e.visibilityState==="visible";c.gpt=false;c.configuredGpt=false;c.gptLoaded=function(){return c.gpt||c.win.googletag&&c.win.googletag.apiReady};c.gptConfigured=c.configureGpt=function(){if(c.configuredGpt){return}c.configuredGpt=true;if(f.gptAsync){c.gptAsync=true;c.win.googletag.cmd.push(function(){const e=c.win.googletag.pubads();e.disableInitialLoad();c.win.googletag.enableServices();e.addEventListener("slotRenderEnded",function(e){const t=e.slot;Y(t,e.size,e.isEmpty)});e.addEventListener("slotVisibilityChanged",function(e){var t=e.slot;var i=e.inViewPercentage;ie(t,i)});e.addEventListener("impressionViewable",;if(f.debug){e.addEventListener("slotRequested",function(e){const t=e.slot;const i=t.getTargetingMap();const r=i&&i.adt?true:false;v(m.name,m.color.gpt,"Slot",t.getSlotElementId(),"has been requested [trgt].\n",i,"\n","IAS PET present:",r)})}})}};c.loadGpt=function(){if(c.gptLoaded()){try{f.gptAsync=c.win.googletag.pubads().isInitialLoadDisabled()}catch(e){f.gptAsync=c.gptAsync||false}v(m.name,m.color.gpt,"gpt async: "+f.gptAsync);c.configureGpt();return}const e=b(c.doc,d+"securepubads.g.doubleclick.net/tag/js/gpt.js",true);c.doc.head.appendChild(e);c.win.googletag=c.win.googletag||{cmd:[]};c.win.googletag.cmd=c.win.googletag.cmd||[];c.gpt=true;c.configureGpt()};c.sizePresent=function(t,i){try{for(let e=0;e<i.length;e++){if(i[e].length!==2)continue;if(t[0]===i[e][0]&&t[1]===i[e][1])return true}}catch(e){}return false};c.criteoToLoad=c.lazyLoading=function(e){if(!c.lazy)return;e.pubads().enableLazyLoad({fetchMarginPercent:100,renderMarginPercent:100})};var i=false;function r(){if(i){return}i=true;(function(){let e=window;let s;const o={};while(e){try{if(e.frames["__tcfapiLocator"]){s=e;break}}catch(e){}if(e===window.top){break}e=e.parent}window.__tcfapi=indow.addEventListener("message",t,false)})();__tcfapi("ping",2,}r();function s(){var e=null;if(typeof _4sPId!=="undefined"&&_4sPId){e={validation:"strict",config:{ver:"1.0",complete:1,nodes:[{asi:"4strokemedia.com",sid:_4sPId,hp:1}]}}}return e}c.preBid={doc:c.doc,win:c.win,bannerPosition:function(i){var r=true;if(i&&i.length){for(let t=0;t<i.length;t++){const e=i[t];if(e.hasOwnProperty("k")&&e.hasOwnProperty("v")&&e.k==="pos"&&e.v==="BTF"){r=false;break}}}return r?"atf":"btf"},loaded:load:function(){if(c.preBid.loaded()){return}const e=d+"cdnb.4strokemedia.com/prebid"+(f.preBid.debug?"-dev-":"")+"8.17.0.js";const t=b(c.preBid.doc,e,true);c.preBid.doc.head.appendChild(t);c.preBid.win.pbjs=c.preBid.win.pbjs||{};c.preBid.win.pbjs.que=c.preBid.win.pbjs.que||[];var i=c.preBid.priceGranularity();var r=[];for(let e in f.preBid.bidders){if(e==="appnexus"||!f.preBid.bidders.hasOwnProperty(e))continue;if(f.preBid.bidders[e]){r.push(e)}}var n={useBidCache:true,priceGranularity:i,userSync:{syncDelay:8500,filterSettings:{all:{bidders:r,filter:"include"}}},rubicon:{singleRequest:true},improvedigital:{singleRequest:true,usePrebidSizes:true},targetingControls:{allowTargetingKeys:["BIDDER","AD_ID","PRICE_BUCKET","SIZE","FORMAT","UUID","CACHE_ID","CACHE_HOST","ADOMAIN"]},consentManagement:{gdpr:{cmpApi:"iab"}},enableTIDs:true};if(f.debug){n.debug=true}if(f.preBid.bidders.ias){n.realTimeData={auctionDelay:200,dataProviders:[{name:"ias",waitForIt:true,params:{pubId:"929966"}}]}}const a=s();if(a){n.schain=a}c.preBid.win.pbjs.que.push(function(){c.preBid.win.pbjs.setConfig(n);c.preBid.win.pbjs.bidderSettings={pubmatic:{bidCpmAdjustment:function(e,t){return e*.87}},adf:{bidCpmAdjustment:,criteo:{storageAllowed:true},appnexus:{storageAllowed:true},onetag:{storageAllowed:true},triplelift:{storageAllowed:true}}})},priceGranularity:function(){return{buckets:[{min:0,max:3,increment:.01},{min:3,max:6,increment:.05},{min:6,max:10,increment:.1},{min:10,max:20,increment:.5},{min:20,max:40,increment:1}]}},getBidsArray:function(e,t,i){ar n=t.indexOf("/316816995/tiscali.it")===0;var a=M();var s=[];if(e.adf){let e=a?1069140:1069144;s.push({bidder:"adf",params:{mid:e}})}if(e.reload){s.push({bidder:"reload",params:{plcmID:t.replace(/\//,"").split("/").slice(1,2).join("_").replace(".","_")+(g?"-mob":""),partID:"part_0",opdomID:1,bsrvID:0}})}if(e.appnexus){var o=t.match(/^(\/[0-9]+),?[0-9]*(\/.*)/);o=o.length===3?o[1]+o[2]:t;s.push({bidder:"appnexus",params:{member:10487,invCode:o.replace(/\//,"").replace(/\//g,"_")}})}if(e.criteo){s.push({bidder:"criteo",params:{networkId:3937}})}if(e.ix){let e=a?673020:684467;s.push({bidder:"ix",params:{siteId:e}})}if(e.openx){var d=n?540865960:540865947;s.push({bidder:"openx",params:{delDomain:"skyitalia-d.openx.net",unit:d}})}if(e.pubmatic){var l=n?"Tiscali":"DexRon";for(let e=0;e<i.length;e++){s.push({bidder:"pubmatic",params:{publisherId:"73111",adSlot:l+"@"+r(i[e])}})}}if(e.rubicon){var p=c.preBid.bannerPosition(f.target);let e=n?283874:283876;let t=n?1420334:1420340;s.push({bidder:"rubicon",params:{accountId:"16534",siteId:e,zoneId:t,position:p}})}if(e.onetag){s.push({bidder:"onetag",params:{pubId:"5e6c4e63cfd8200"}})}if(e.improvedigital){var u=n?22132263:22132262;s.push({bidder:"improvedigital",params:{placementId:u}})}if(e.smartadserver){let e=a?397346:397347;let t=a?1356511:1356512;s.push({bidder:"smartadserver",params:{siteId:e,pageId:t,formatId:98909}})}if(e.triplelift){s.push({bidder:"triplelift",params:{inventoryCode:n?"Sky_Tiscali_display":"Dex_RON_display"}})}return s},createAdUnits:function(e,t,i,r){return[{code:i,mediaTypes:{banner:{sizes:r}},bids:c.preBid.getBidsArray(e,t,r)}]},bidsHandler:function(e,t){v(m.name,m.color.preBid,"Prebid set targeting: "+e[0].code);c.preBid.win.pbjs.setTargetingForGPTAsync(e[0].code);t&&t()},validSizes:[[120,600],[160,600],[300,50],[300,100],[300,250],[300,600],[320,50],[320,100],[728,90],[970,90],[970,250]],clearSizes:function(t,i){i=i||c.preBid.validSizes;var r=[];for(let e=0;e<t.length;e++){if(c.sizePresent(t[e],i)){r.push(t[e])}}if(!f.noResponsive&&top.window===u&&u.innerWidth>100){var e=G(r);if(e.desktopSizes.limit<u.innerWidth){r=e.desktopSizes.sizes}else if(e.tabletSizes.limit<u.innerWidth){r=e.tabletSizes.sizes}else{r=e.mobileSizes.sizes}for(let e=r.length-1;e>=0;e--){if(r[e][0]>u.innerWidth){r.splice(e,1)}}}return r},makeRequest:function(e,t,i,r,n,a){if(!e||!c.preBid.loaded()){v(m.name,m.color.preBid,"Prebid disabled, calling callback");return true}var s=c.preBid.clearSizes(n);if(!s.length){return true}if(c.preBid.win!==u&&typeof googletag==="undefined"){c.preBid.win.googletag=u.googletag}var o=c.preBid.createAdUnits(t,i,r,s);v(m.name,m.color.preBid,"PreBid asked for bid: "+r);c.preBid.win.pbjs.que.push(function(){c.preBid.win.pbjs.removeAdUnit(r);c.preBid.win.pbjs.addAdUnits(o);c.preBid.win.pbjs.requestBids({adUnits:o,bidsBackHandler:function(e){v(m.name,m.color.preBid,"bids for "+r+": ",e);c.preBid.bidsHandler(o,a)},timeout:f.preBid.timeout})});return false}};c.aps={loaded:false,load:function(e,t){if(c.aps.loaded){return}c.aps.loaded=true;!function(i,r,e,t,n,a,s){if(r[i])return;[i]={init:function(){o("i",arguments)},fetchBids:setDisplayBids:targetingKeys:_Q:[]};a=e.createElement(t);a.async=true;a.src=n;s=e.getElementsByTagName(t)[0];s.parentNode.insertBefore(a,s)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");var i={pubID:e,adServer:"googletag",videoAdServer:"DFP",bidTimeout:t};var r=s();if(r){i.schain=r.config}window.apstag.init(i);n._4SDexApstag={renderImp:},validSizes:[[160,600],[300,250],[300,600],[728,90],[970,250]],getBid:function(e,t,i,r,n,a){if(!e||!c.aps.loaded){return true}var s=c.preBid.clearSizes(r,c.aps.validSizes);if(!s.length){return true}if(typeof window.googletag==="undefined"){window.googletag=n}var o=new Date;window.apstag.fetchBids({slots:[{slotID:t,slotName:i,sizes:s}],timeout:f.aps.displayTimeOut},function(e){v(m.name,m.color.aps,"APS Bids ("+(new Date-o)+"ms):",e);n.cmd.push(});return false}}}function r(e,i,t){try{if(t.dmpLoaded||R()){return}t.dmpLoaded=true;e._adftrack=Array.isArray(e._adftrack)?e._adftrack:e._adftrack?[e._adftrack]:[];e._adftrack.push({pm:1488575,divider:encodeURIComponent("|"),pagename:encodeURIComponent("Generico Visits"),order:{sv8:"4stroke",sv9:e.location.hostname,sv10:e.location.href,sv11:i.title,sv18:i.referrer}});(function(){var e=b(i,d+"track.adform.net/serving/scripts/trackpoint/async/",true);var t=i.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()}catch(e){}}function n(e){return e.replace(/[\/_\+=\?&#]/g," ").trim()}unction c(e,t,i){var r=e+t.replace(/,/g,"_").replace(/[\[\]'" ]+/g,"")+"-";var n=0;while(i.getElementById(r+n)){n++}return r+n}var h=p.createElement("div");var w=p.createElement("div");var y=new t(u,p);y.loadGpt();var B=new function(){var r;var n={aps:!f.aps.enabled,preBid:!f.preBid.enabled,timeout:false,showed:false,canShow:function(){return!n.showed&&(n.timeout||n.aps&&n.preBid)},resetByConfig:function(e){clearTimeout(r);n.aps=e.aps.enabled;n.preBid=!e.preBid.enabled;n.timeout=false;n.showed=false},startTimeout:function(e,t,i){r=setTimeout(function(){v(m.name,m.color.show,"External requests timed out, forcing show "+t);n.timeout=true;n.show(e,t,i)},f.preBid.timeOut+250)},show:function(e,t,i){if(!n.canShow()){return}n.showed=true;clearTimeout(r);if(f.alternateGpt){e.pubads().refresh([i]);v(m.name,m.color.show,"gpt refresh: "+i.getSlotElementId()+" [trgt]\n",i.getTargetingMap(),"\n",n)}else{e.display(t);v(m.name,m.color.show,"gpt display: "+t,n)}}};return n};if(f.lazy){y.lazy=true}if(f.preBid.enabled){y.preBid.load()}if(f.aps.enabled){y.aps.load(f.aps.pubId,f.aps.timeOut)}function S(e,n){e.pubads().addEventListener("slotRenderEnded",function(e){if(!e.slot===n||e.isEmpty){return}var t=e.size[0]+"x"+e.size[1];var i=(e.slot.getAdUnitPath().split("/").slice(2).join("_")||"dex")+"_"+t;var r=b(document,d+"sb.voicefive.com/c2/6034891/rs.js#c1=3&amp;c3=sky_test&amp;c4="+t+"&amp;c5="+i+"&amp;c6=&amp;c10=1&amp;c11=&amp;c13=&amp;c16=gen&amp;ax_nf=1&amp;",true);w.appendChild(r)})}function z(e){try{var t=JSON.parse(e.replace(/'/g,'"'));return typeof t==="object"?t:[]}catch(e){return[]}}f.sizes=z(f.size);var E=s(top.location.pathname.replace(/'/g,"\\'"));var k=n(top.location.search.replace(/'/g,"\\'"));var I=n(top.location.hash.replace(/'/g,"\\'"));var x=top.location.hostname;var T=top.location.protocol;if(f.dmp){r(u,p,y)}var _="div-gpt-ad-4sdex-";var D=c(_,f.size,p);w.id=D;var A=_+"oop-"+Math.floor(Math.random()*1e9);function P(e,r){if(f.hide){if(f.hideSize&&f.hideSize.length){e.pubads().addEventListener("slotRenderEnded",function(t){if(!t.slot===r||t.isEmpty){return}var i=false;for(let e=0;e<f.hideSize.length;e++){if(t.size[0]===f.hideSize[e][0]&&t.size[1]===f.hideSize[e][1]){i=true;break}}if(i){h.style.display="none"}})}else{h.style.display="none"}}}function C(t,i){t.setTargeting("dom",x);if(E){t.setTargeting("url",E)}if(k){t.setTargeting("que",k)}if(I){t.setTargeting("has",I)}if(T){t.setTargeting("pro",T)}if(i&&i.length){for(let e=0;e<i.length;e++){var r=i[e];if(r.hasOwnProperty("k")&&r.hasOwnProperty("v")){t.setTargeting(r.k,r.v)}}}}function O(e){var t=[];if(f.outOfPage){var i=p.createElement("div");i.id=A;h.appendChild(i);var r=p.createElement("div");var n=A+"-1x1";r.id=n;h.appendChild(r);var a=e.defineOutOfPageSlot(f.adUnit,A);C(a,f.target);a.addService(e.pubads());var s=e.defineSlot(f.adUnit,[1,1],n);C(s,f.target);s.addService(e.pubads());t.push({id:A,slot:a});t.push({id:n,slot:s})}return t}function L(t,i){for(let e=0;e<i.length;e++){t.display(i[e].id);if(f.alternateGpt){t.pubads().refresh([i[e].slot])}}}function j(e,t){var i=[];for(var r=0;r<e.length;r++){if(y.sizePresent(e[r],t))i.push(e[r])}return i}function R(){var e=x.toLowerCase().split(".");if(e.length<=1)return false;e=e[e.length-2]+"."+e[e.length-1];var t=["sky.it","tv8.it","cielotv.it","gianlucadimarzio.com","generaliskyfantagame.it","italiasgottalent.it","skyacademy.it","skypubblicita.it","skysg.it","superscudetto.it","ultimouomo.com","xfactorswatchthis.it"];for(var i=0;i<t.length;i++){if(e===t[i])return true}return false}function M(){var t=x.toLowerCase().split(".");if(t.length<=1)return false;t=t[t.length-2]+"."+t[t.length-1];var i=["sky.it","tv8.it","cielotv.it","floptv.tv","foxanimation.it","foxcomedy.it","foxcrime.it","foxlife.it","foxsports.it","foxtv.it","mondofox.it","gianlucadimarzio.com","italiasgottalent.it"];for(let e=0;e<i.length;e++){if(t===i[e])return true}return false}function q(e,t){if(f.iab){S(e,t)}}function G(e){if(!f.noResponsive){var t=1e3;var i=[[728,90],[970,250],[970,90]];if(M()){i=i.concat([[1800,1e3]]);t=1025}var r=[[728,90]];var n=[[320,50],[320,100],[300,50],[300,100]];var a=n.concat(i.concat(r));var s=[];for(var o=0;o<e.length;o++){if(!y.sizePresent(e[o],a)){s.push(e[o])}}i=j(e,i).concat(s);r=j(e,r).concat(s);n=j(e,n).concat(s);return{desktopSizes:{limit:t,sizes:i},tabletSizes:{limit:740,sizes:r},mobileSizes:{limit:0,sizes:n}}}return{}}function U(e,t){if(!f.noResponsive){var i=G(f.sizes);var r=e.sizeMapping().addSize([i.desktopSizes.limit,100],i.desktopSizes.sizes).addSize([i.tabletSizes.limit,100],i.tabletSizes.sizes).addSize([i.mobileSizes.limit,0],i.mobileSizes.sizes).build();t.defineSizeMapping(r)}}function F(e,t,i,r){B.resetByConfig(r);B.preBid=y.preBid.makeRequest(r.preBid.enabled,r.preBid.bidders,r.adUnit,t,r.sizes,function(){B.preBid=true;B.show(e,t,i)});B.aps=y.aps.getBid(r.aps.enabled,t,r.adUnit,r.sizes,e,;B.startTimeout(e,t,i);B.show(e,t,i)}function V(){u.googletag=u.googletag||{};var r=u.googletag;r.cmd=r.cmd||[];r.cmd.push(function(){if(f.autoAlternate){var e=r.pubads();f.alternateGpt=e.isSRA()||e.isInitialLoadDisabled()}y.lazyLoading(r);var t=r.defineSlot(f.adUnit,f.sizes,D);if(f.refresh.enabled){y.refresh.push({cleared:false,id:D,cfg:f,slot:t,sized:false,target:f.target,time:f.refresh.time*1e3,skin:false,status:{empty:false,requested:false,time:Date.now(),timer:null,viewed:false,viewPart:0}})}C(t,f.target);t.addService(r.pubads());t.setCollapseEmptyDiv(true,true);U(r,t);var i=O(r);if(!f.alternateGpt){r.enableServices()}P(r,t);if(f.alternateGpt&&f.gptAsync){r.display(D)}F(r,D,t,f);q(r,t);L(r,i)})}var N=false;var H=function(){var t,i,e={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(t in e){if(Object.prototype.hasOwnProperty.call(e,t)){if(t in p){i=e[t];break}}}return ();function W(e){if(!H()){return false}var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(u.innerHeight||p.documentElement.clientHeight)&&t.right<=(u.innerWidth||p.documentElement.clientWidth)}unction J(){if(!N&&W(h)){K();u.removeEventListener("scroll",J,false);p.removeEventListener("DOMContentLoaded",J)}}if(f.appendTo){if(f.appendElement){p.getElementById(f.appendElement).appendChild(h)}else{if(frameElement){frameElement.parentElement.parentElement.insertBefore(h,frameElement.parentElement)}else{if(document.currentScript){document.currentScript.parentElement.insertBefore(h,document.currentScript)}else{console.log("IE not supported from synchronous tag")}}}}else{p.body.appendChild(h)}h.appendChild(w);f.inView=g?f.inViewMobile:f.inViewDesktop;if(f.inView){if(W(h)){K()}else{u.addEventListener("scroll",J,false);p.addEventListener("DOMContentLoaded",J)}}else{K()}function Q(t){var i=null;y.refresh.some(function(e){if(t!==e.slot){return false}i=e;return true});return i}function Z(i){var r=-1;y.refresh.some(function(e,t){if(e===i){r=t;return true}return false});if(r!==-1){y.refresh.splice(r,1)}}function X(e){if(e.time){clearTimeout(e.status.timer);e.status.timer=setTimeout(function(){v(m.gpt,m.color.gpt,"Start slot timer",e);ee(e)},e.time)}}function Y(e,t,i){v(m.gpt,m.color.gpt,"Slot rendered",e,t,i);const r=Q(e);if(!r){return}if(!r.cleared){r.slot.clearTargeting();C(r.slot,r.target);r.cleared=true}if(t){if(t[0]===1800&&t[1]===1e3){if(!i&&!u.clearDexSkin){v(m.gpt,m.color.gpt,"Skin slot unsupported, removing",r);Z(r);return}r.skin=true}if(!r.sized){v(m.gpt,m.color.gpt,"Setting slot size",r,t);r.sized=true;const n=u.googletag.sizeMapping().addSize([0,0],[t[0],t[1]]).build();r.cfg.sizes=[[t[0],t[1]]];r.slot.defineSizeMapping(n)}}r.status.empty=i;r.status.requested=false;r.status.time=Date.now();r.status.viewed=false;r.status.viewPart=0;clearTimeout(r.status.timer);if(i||r.skin){X(r)}}function $(e){if(!y.tabVisible){v(m.gpt,m.color.gpt,"No refresh: tab not active",e);return false}if(!e.skin&&!e.status.empty&&(!e.status.viewed||e.status.viewPart<=0)){v(m.gpt,m.color.gpt,"No refresh: Slot not visible",e);return false}if(Date.now()-e.status.time<e.time){v(m.gpt,m.color.gpt,"No refresh: too early",e);return false}v(m.gpt,m.color.gpt,"Refresh ack",e);return true}function ee(e){if($(e)){ne(e)}}function te(e){const t=Q(e);if(!t){return}v(m.gpt,m.color.gpt,"Slot viewed",t);t.status.viewed=true;t.status.time=Date.now();X(t);ee(t)}function ie(e,t){const i=Q(e);if(!i){return}v(m.gpt,m.color.gpt,"Slot view part",i,t);i.status.viewPart=t;if(t>0){ee(i)}}.addEventListener("visibilitychange",function(){y.tabVisible=p.visibilityState==="visible";if(y.tabVisible){re()}},false);function ne(e){if(e.status.requested){v(m.gpt,m.color.gpt,"Already requested",e);return}e.status.requested=true;clearTimeout(e.status.timer);v(m.gpt,m.color.refresh,"Slot refresh",e);if(e.skin){u.clearDexSkin&&u.clearDexSkin()}const t=u.googletag;F(t,e.id,e.slot,e.cfg)}}dexTag(tagConfig);