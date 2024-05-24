(function(){var a=function(i,t){return function(){return i&&(t=i(i=0)),t}};var y=function(i,t){return function(){return t||i((t={exports:{}}).exports,t),t.exports}};var c=a(function(){});var s=a(function(){});var u=a(function(){});var p=a(function(){});var l=a(function(){});var h=a(function(){});var f=a(function(){});var I=y(function(v){c();s();u();p();l();h();f();Object.defineProperty(v,"__esModule",{value:!0});v.AdditionalWidget=v.ScriptUrlType=void 0;var w;(function(i){i.es5="es5",i.es6="es6"})(w||(v.ScriptUrlType=w={}));var G=function(){function i(t,e){var n=this;if(this.additionalWidgets=t,this.urlType=e,this.additionalWidgets.length)for(var r=function(m){setTimeout(function(){n.init(n.additionalWidgets[m])},0)},o=0;o<this.additionalWidgets.length;o++)r(o)}return i.prototype.init=function(t){var e=this,n=t.widgetDivId?this.createWidgetDiv(t.id,t.widgetDivId):null,r=this.createWidgetScript(t.urls[this.urlType]),o=t.insertTo||"before";this.waitForElement(t.searchSelector).then(function(m){t.widgetDivId&&e.insertWidgetBlock(m,n,o),e.insertWidgetScript(r)})},i.prototype.createWidgetDiv=function(t,e){var n=document.createElement("div"),r=document.createElement("div"),o=e;return n.classList.add("".concat(o,"-additional")),r.id=o,n.appendChild(r),n},i.prototype.createWidgetScript=function(t){var e=document.createElement("script");return e.src=t,e.async=!0,e.crossOrigin="anonymous",e},i.prototype.insertWidgetBlock=function(t,e,n){switch(n){case"into":t.appendChild(e);break;case"before":var r=t.parentElement;r.insertBefore(e,t);break;case"after":t.insertAdjacentElement("afterend",e);break}},i.prototype.insertWidgetScript=function(t){document.head?document.head.appendChild(t):document.body.appendChild(t)},i.prototype.waitForElement=function(t){return new Promise(function(e){if(document.querySelector(t))return e(document.querySelector(t));var n=new MutationObserver(function(){document.querySelector(t)&&(e(document.querySelector(t)),n.disconnect())});n.observe(document,{childList:!0,subtree:!0})})},i}();v.AdditionalWidget=G});var _=y(function(W){c();s();u();p();l();h();f();Object.defineProperty(W,"__esModule",{value:!0});W.ReadMoreButton=void 0;var R=function(){function i(){var t;this.options=JSON.parse("{}"),!((t=this.options)===null||t===void 0)&&t.abTest?this.initWithAbTest():this.init()}return i.prototype.init=function(){typeof window.rmbOpts=="undefined"&&(window.rmbOpts=this.options,this.addReadMoreButton())},i.prototype.initWithAbTest=function(){var t=Number(this.options.abTest),e=Math.random(),n=(100-t)/2/100;e>n&&e<1-n&&(window["_mgRMB"+770935]=!0,this.init())},i.prototype.addReadMoreButton=function(){var t=document.getElementsByTagName("head")[0],e=document.createElement("script"),n="//".concat("cdn.mgid.com","/js/read-more/btn.js");e.async=!0,e.src=n,e.setAttribute("fetchpriority","high"),t.insertAdjacentElement("afterbegin",e)},i}();W.ReadMoreButton=R});var k=y(function(A){c();s();u();p();l();h();f();Object.defineProperty(A,"__esModule",{value:!0});var $=I(),tt=_();(function(){var i=r(),t=i?"https://jsc.mgid.com/t/a/tasik.ayoindonesia.com.1244606.es6.js":"https://jsc.mgid.com/t/a/tasik.ayoindonesia.com.1244606.es5.js";O(t),m();for(var e=["https://servicer.mgid.com"],n=0;n<e.length;n++)o(e[n]);function r(){try{return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"),!0}catch(g){return!1}}function o(g){var d=document.createElement("link");d.rel="preconnect",d.href=g,document.head?document.head.appendChild(d):document.body.appendChild(d)}function m(){var g=JSON.parse("[]")}function C(){}function O(g){var d=document.createElement("script");d.async="async",d.src=g,d.crossOrigin="anonymous",document.head?document.head.appendChild(d):document.body.appendChild(d)}})()});k();})();(function() { googletag.display('div-gpt-ad-multibanner3'); });";
dv_m3.appendChild(sc_m3);

var ft_sticky = document.createElement("div");
ft_sticky.id = "footer_sticky";
ft_sticky.className = "footer_sticky";
ft_sticky.innerHTML = '<a onclick="closeAds()" class="close_sticky">X</a>';

var cls_sticky = document.createElement("script");
cls_sticky.innerHTML = 'function closeAds(){document.getElementById("footer_sticky").style.display = "none";}';

var dv_sticky = document.createElement("div");
dv_sticky.id="div-gpt-ad-sticky";
dv_sticky.style="margin: 15px 0;";

var sc_sticky = document.createElement("script");
sc_sticky.innerHTML= 
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-sticky\'); });'+
'        setTimeout(function(){ '+
'          var a = document.getElementById(\'footer_sticky\').clientHeight;'+
'          if(a < 40)'+
'          document.getElementById(\'close_button\').style.display = "none";'+
'        }, 2500);';
dv_sticky.appendChild(sc_sticky);
ft_sticky.appendChild(cls_sticky);
ft_sticky.appendChild(dv_sticky);

var ft_stickyexp = document.createElement("div");
ft_stickyexp.id = "footer_stickyexp";
ft_stickyexp.className = "footer_stickyexp";
ft_stickyexp.innerHTML = '<a onclick="closeAdsExp()" class="close_stickyexp">V</a>';

var closeAdsExp = false;
var cls_stickyexp = document.createElement("script");
cls_stickyexp.innerHTML = `function closeAdsExp(){
      document.getElementById("footer_stickyexp").style.display = "none"; 
      var locsticky = document.getElementsByClassName("header")[0];
      var mapping2 = googletag.sizeMapping()
                              .addSize([1024, 0], [[970, 90]])
                              .addSize([800, 0], [[728, 90]])
                              .addSize([0, 0], [[320, 50]])
                              .build();
      propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/sticky', [[300,250],[320,50]], 'div-gpt-ad-sticky')
                 .defineSizeMapping(mapping2)
                 .setForceSafeFrame(false)
                 .addService(googletag.pubads()));
      locsticky.after(ft_sticky);
    }
  `;

var dv_stickyexp = document.createElement("div");
dv_stickyexp.id="div-gpt-ad-stickyexp";
dv_stickyexp.style="margin: 15px 0;";

var sc_stickyexp = document.createElement("script");
sc_stickyexp.innerHTML= 
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-stickyexp\'); });'+
'        setTimeout(function(){ '+
'          var a = document.getElementById(\'footer_stickyexp\').clientHeight;'+
'          if(a < 40)'+
'          document.getElementById(\'close_stickyexp\').style.display = "none";'+
'        }, 2500);';
dv_stickyexp.appendChild(sc_stickyexp);
ft_stickyexp.appendChild(cls_stickyexp);
ft_stickyexp.appendChild(dv_stickyexp);

var dv_oop = document.createElement("div");
dv_oop.id="div-gpt-ad-oop";

var sc_oop = document.createElement("script");
sc_oop.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-oop'); });";
dv_oop.appendChild(sc_oop);

setTimeout(() => {
  document.body.appendChild(script_gtm);
  document.head.appendChild(stylesticky);
}, 1000)

var cVisitorId = document.cookie.split(';').find(v => {
  return v.match('cProps');
});  

var cookieName = "cProps";
var cookieValue = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
var expirationTime = 2592000;
expirationTime = expirationTime * 1000;
var date = new Date(); 
var dateTimeNow = date.getTime(); 
date.setTime(dateTimeNow + expirationTime);
var date = date.toUTCString();
if(!cVisitorId){
  document.cookie = cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, "");
}

setTimeout(function() {
	if (!this._mgPubmaticExists) {
	  var purl = window.location.href;
	  var url = '//ads.pubmatic.com/AdServer/js/pwt/160902/8463';
	  var profileVersionId = '';
	  if(purl.indexOf('pwtv=')>0){
	    var regexp = /pwtv=(.*?)(&|$)/g;
	    var matches = regexp.exec(purl);
	    if(matches.length >= 2 && matches[1].length > 0){
	      profileVersionId = '/'+matches[1];
	    }
	  }
	  var wtads = document.createElement('script');
	  wtads.async = true;
	  wtads.type = 'text/javascript';
	  wtads.src = url+profileVersionId+'/pwt.js';
	  var node = document.getElementsByTagName('script')[0];
	  node.parentNode.insertBefore(wtads, node);
	}
}, 500);

//INITIALIZE PROPS SCRIPT
var isBlocked = false;
setTimeout(() => {
  if (!isBlocked) {
    propsInitAds();
  }
}, 2000)
setTimeout(() => {
  try {
    var http = new XMLHttpRequest();
    let lochref = window.location.href.match(/^.+?[^\/:](?=[?\/]|$)/)[0].replace("http://", "").replace("https://", "");
    var url_check_props = `https://propsid.b-cdn.net/json/${lochref}/blocklist.json`;
    http.responseType = 'json';
    http.open('GET', url_check_props, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    http.timeout = 1500;
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && (http.status == 200 || http.status == 201)) {
          try {
              isBlocked = true;
              let parsed = http.response;
              let x = window.location.href.replace(/https:\/\//, "");
              let find = parsed.find((e) => {return e == x});
  
              if (!find) {
                  propsInitAds();
              }
              
          } catch (e) {
              console.log("props-parsing error");
              console.log(e);
              propsInitAds();
          }
        } else if (http.readyState == 4){
          propsInitAds();
          throw new Error("Timeout");
        }
    }
    http.send();
} catch (e) {
    console.log("ERROR");
    console.log(e);
    propsInitAds();
}
}, 500)

let getLCountProps = 0;

function propsInitAds() {
  var wv = navigator.userAgent.toLowerCase();
  if(wv.includes('topbuzz') || wv.includes('babe') || wv.includes('bacaberita') || wv.includes('kurio') || wv.includes('ucbrowser') || wv.includes('line')) {
    ;
  } else{
        // console.log("SCRIPT SMS IS RUNNING");
        if (props_sms_script_is_running) {
            return;
        }
        if (googletag && googletag.apiReady) {
            if (!googletag.pubadsReady && !forcePubadsReady) {

              if (props_sms_gtm_is_init) {
                    setTimeout(() => {
                        getLCountProps++;
                        if (getLCountProps > 5) {
                            forcePubadsReady = true;
                        }
                        propsInitAds();
                    }, 250);
                    return;
                }
                props_sms_gtm_is_init = true;
                addDocumentToWebsite();
                    
                setTimeout(() => {
                    propsInitAds();
                }, 250);
                return;
            } else {
                props_sms_script_is_running = true;
                window.googletag = window.googletag || {cmd: []};
                let tagsTarget = "";
                let allCurrentlyRunningAds = googletag.pubads().getSlots();
                if (Array.isArray(allCurrentlyRunningAds)) {
                    for (let row of allCurrentlyRunningAds) {
                        let adUnitIds = '160553881'; //GANTI INI KALO MA
                        let checkCurrentlyRunningAds = row.getAdUnitPath();
                        let checkIsPropsAds = checkCurrentlyRunningAds.match(adUnitIds);
              
                        if (!checkIsPropsAds) {
                            listGptDirect.push(row.getSlotElementId());
                        }
                    }
                }
                for (let i = 0 ; i < propsCollectTags.length ; i++) {
                  if (i == propsCollectTags.length - 1) {
                    tagsTarget += propsCollectTags[i];
                  } else {
                    tagsTarget += propsCollectTags[i] + ", ";
                  }
                }
                console.log("add " + tagsTarget + " to segmentation");

                if (tagsTarget != "") {
                    googletag.pubads().setTargeting("props_tags_targeting", tagsTarget);
                }
                var mapping1 = googletag.sizeMapping()
                                    .addSize([1024, 0], [[970, 250], [970, 90], [728, 250], [728, 90]])
                                    .addSize([800, 0], [[728, 250], [728, 90]])
                                    .addSize([0, 0], [[336, 280], [300, 250]])
                                    .build();
                var mapping2 = googletag.sizeMapping()
                                          .addSize([1024, 0], [[970, 90]])
                                          .addSize([800, 0], [[728, 90]])
                                          .addSize([0, 0], [[320, 50]])
                                          .build();
                var mapping3 = googletag.sizeMapping()
                                          .addSize([1024, 0], [[970, 250]])
                                          .addSize([800, 0], [[728, 250]])
                                          .addSize([0, 0], [[300, 250]])
                                          .build();
                googletag.cmd.push(function() {
                    propsSlot.push(googletag.defineOutOfPageSlot('160553881,21847396155/ayocirebon.com/Interstitial', 
                        googletag.enums.OutOfPageFormat.INTERSTITIAL)
                        .addService(googletag.pubads()));
            
                    var cVisitorId = (visId = document.cookie.split("cProps")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
                    if (cVisitorId) {
                            googletag.pubads().setPublisherProvidedId(cVisitorId + 'props');
                    }
                    googletag.pubads().setCentering(true);
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().collapseEmptyDivs();
                    googletag.enableServices();
                });
                if (window.innerWidth <= 1024){
                  var locslot1 = document.getElementById("div-gpt-ad-mobileTopDetail");
// var script_tagadsense4 = document.createElement('script');
// script_tagadsense4.async = true;
// script_tagadsense4.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense4.setAttribute("crossorigin", "anonymous");

// var contins4 = document.createElement('ins');
// contins4.className = "adsbygoogle";
// contins4.style = "display:inline-block;width:300px;height:250px";
// contins4.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins4.setAttribute("data-ad-slot", "6740478258");

// var adsense_push4 = document.createElement('script');
// adsense_push4.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot4 = document.getElementById("div-gpt-ad-mobileTopDetail");
// if (adsense_slot4 != null) {
//  adsense_slot4.after(script_tagadsense4);
//  adsense_slot4.after(contins4);
//  adsense_slot4.after(adsense_push4);
// }


                  let checklocslot1 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileTopDetail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot1 != null && !checklocslot1) {

                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Leaderboard', [[300,250],[336,280]], 'div-gpt-ad-mobileTopDetail')
                                .setTargeting('pti', ['Leaderboard'])
                                .addService(googletag.pubads()));
                  }

                  var locslot2 = document.getElementById("div-gpt-ad-mobileBottomBannerDetail10");
                  // var script_tagadsense3 = document.createElement('script');
//                     script_tagadsense3.async = true;
//                     script_tagadsense3.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
//                     script_tagadsense3.setAttribute("crossorigin", "anonymous");

//                     var contins3 = document.createElement('ins');
//                     contins3.className = "adsbygoogle";
//                     contins3.style = "display:inline-block;width:300px;height:600px";
//                     contins3.setAttribute("data-ad-client", "ca-pub-2186101008500724");
//                     contins3.setAttribute("data-ad-slot", "6835655795");

//                     var adsense_push3 = document.createElement('script');
//                     adsense_push3.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

//                     var adsense_slot3 = document.getElementById("div-gpt-ad-mobileBottomBannerDetail");
//                   if (adsense_slot3 != null) {
//                     adsense_slot3.after(script_tagadsense3);
//                     adsense_slot3.after(contins3);
//                     adsense_slot3.after(adsense_push3);
//                   }

                  if (locslot2 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/MR2', [[320,480],[300,600]], 'div-gpt-ad-mobileBottomBannerDetail10')
                                .addService(googletag.pubads()));
                  }

                  var locslot3 = document.getElementById("div-gpt-ad-mobileBottomFrameDetail");
                  let checklocslot3 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileBottomFrameDetail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot3 != null && !checklocslot3) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[300,250],[320,50]], 'div-gpt-ad-mobileBottomFrameDetail')
                                .setTargeting('pti', ['StickyExpand'])
                                .addService(googletag.pubads()));
                  }

                  var locslot4 = document.getElementById("div-gpt-ad-mobileInArticle");
                  let checklocslot4 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileInArticle"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot4 != null && !checklocslot4) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-mobileInArticle')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot5 = document.getElementById("div-gpt-ad-mobileRB1Detail");
                  let checklocslot5 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB1Detail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot5 != null && !checklocslot5) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-mobileRB1Detail')
                                .addService(googletag.pubads()));
                  }

                  var locslot6 = document.getElementById("div-gpt-ad-mobileRB2Detail10");
                  // var script_tagadsense = document.createElement('script');
//                     script_tagadsense.async = true;
//                     script_tagadsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
//                     script_tagadsense.setAttribute("crossorigin", "anonymous");

//                     var contins = document.createElement('ins');
//                     contins.className = "adsbygoogle";
//                     contins.style = "display:inline-block;width:300px;height:250px";
//                     contins.setAttribute("data-ad-client", "ca-pub-2186101008500724");
//                     contins.setAttribute("data-ad-slot", "8090556398");

//                     var adsense_push = document.createElement('script');
//                     adsense_push.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

//                     var adsense_slot1 = document.getElementById("div-gpt-ad-mobileRB2Detail");
//                   if (adsense_slot1 != null) {
//                     adsense_slot1.after(script_tagadsense);
//                     adsense_slot1.after(contins);
//                     adsense_slot1.after(adsense_push);
//                   }

                  if (locslot6 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner3', [[336,280],[300,250]], 'div-gpt-ad-mobileRB2Detail10')
                                .addService(googletag.pubads()));
                  }

                  var locslot7 = document.getElementById("div-gpt-ad-mobileRB3Detail10");
                  // var script_tagadsense2 = document.createElement('script');
//                     script_tagadsense2.async = true;
//                     script_tagadsense2.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
//                     script_tagadsense2.setAttribute("crossorigin", "anonymous");

//                     var contins2 = document.createElement('ins');
//                     contins2.className = "adsbygoogle";
//                     contins2.style = "display:inline-block;width:300px;height:250px";
//                     contins2.setAttribute("data-ad-client", "ca-pub-2186101008500724");
//                     contins2.setAttribute("data-ad-slot", "8090556398");

//                     var adsense_push2 = document.createElement('script');
//                     adsense_push2.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

//                     var adsense_slot2 = document.getElementById("div-gpt-ad-mobileRB3Detail");
//                   if (adsense_slot2 != null) {
//                     adsense_slot2.after(script_tagadsense2);
//                     adsense_slot2.after(contins2);
//                     adsense_slot2.after(adsense_push2);
//                   }

                  if (locslot7 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner4', [[336,280],[300,250]], 'div-gpt-ad-mobileRB3Detail10')
                                .addService(googletag.pubads()));
                  }

                  var locslot8 = document.getElementById("div-gpt-ad-mobileUnderImage");
// var script_tagadsense10 = document.createElement('script');
// script_tagadsense10.async = true;
// script_tagadsense10.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense10.setAttribute("crossorigin", "anonymous");

// var contins10 = document.createElement('ins');
// contins10.className = "adsbygoogle";
// contins10.style = "display:inline-block;width:970px;height:250px";
// contins10.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins10.setAttribute("data-ad-slot", "9938321383");

// var adsense_push10 = document.createElement('script');
// adsense_push10.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot10 = document.getElementById("div-gpt-ad-mobileUnderImage");
// if (adsense_slot10 != null) {
//  adsense_slot10.after(script_tagadsense10);
//  adsense_slot10.after(contins10);
//  adsense_slot10.after(adsense_push10);
// }

                  let checklocslot8 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileUnderImage"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot8 != null && !checklocslot8) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Inimage', [[300,250],[336,280]], 'div-gpt-ad-mobileUnderImage')
                                .setTargeting('pti', ['Inimage'])
                                .addService(googletag.pubads()));
                  }
                  var locslot9 = document.getElementById("div-gpt-ad-mobileTopHome");
// var script_tagadsense5 = document.createElement('script');
// script_tagadsense5.async = true;
// script_tagadsense5.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense5.setAttribute("crossorigin", "anonymous");

// var contins5 = document.createElement('ins');
// contins5.className = "adsbygoogle";
// contins5.style = "display:inline-block;width:320px;height:50px";
// contins5.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins5.setAttribute("data-ad-slot", "5235824896");

// var adsense_push5 = document.createElement('script');
// adsense_push5.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot5 = document.getElementById("div-gpt-ad-mobileTopHome");
// if (adsense_slot5 != null) {
//  adsense_slot5.after(script_tagadsense5);
//  adsense_slot5.after(contins5);
//  adsense_slot5.after(adsense_push5);
// }

                  let checklocslot9 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileTopHome"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot9 != null && !checklocslot9) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Leaderboard', [[320, 100]], 'div-gpt-ad-mobileTopHome')
                                .setTargeting('pti', ['Leaderboard'])
                                .addService(googletag.pubads()));
                  }
                  var locslot10 = document.getElementById("div-gpt-ad-mobileBottomBannerHome");
                  let checklocslot10 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileBottomBannerHome"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot10 != null && !checklocslot10) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/MR1', [[320,480],[300,600],[300,250]], 'div-gpt-ad-mobileBottomBannerHome')
                                .addService(googletag.pubads()));
                  }
                  var locslot11 = document.getElementById("div-gpt-ad-mobileBottomFrameHome");
                  let checklocslot11 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileBottomFrameHome"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot11 != null && !checklocslot11) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[300,250],[320,50]], 'div-gpt-ad-mobileBottomFrameHome')
                                .setTargeting('pti', ['StickyExpand'])
                                .addService(googletag.pubads()));
                  }
                  var locslot12 = document.getElementById("div-gpt-ad-mobileRB1Home");
                  let checklocslot12 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB1Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot12 != null && !checklocslot12) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-mobileRB1Home')
                                .addService(googletag.pubads()));
                  }

                  var locslot13 = document.getElementById("div-gpt-ad-mobileRB2Home");
                  let checklocslot13 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB2Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot13 != null && !checklocslot13) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-mobileRB2Home')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot14 = document.getElementById("div-gpt-ad-mobileRB3Home");
                  let checklocslot14 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB3Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot14 != null && !checklocslot14) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250],[300,600]], 'div-gpt-ad-mobileRB3Home')
                                .addService(googletag.pubads()));
                  }
                  var locslot15 = document.getElementById("div-gpt-ad-mobileRB4Home");
                  let checklocslot15 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB4Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot15 != null && !checklocslot15) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-mobileRB4Home')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }
                  var locslot16 = document.getElementById("div-gpt-ad-mobileTopSection");
// var script_tagadsense6 = document.createElement('script');
// script_tagadsense6.async = true;
// script_tagadsense6.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense6.setAttribute("crossorigin", "anonymous");

// var contins6 = document.createElement('ins');
// contins6.className = "adsbygoogle";
// contins6.style = "display:inline-block;width:320px;height:50px";
// contins6.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins6.setAttribute("data-ad-slot", "5235824896");

// var adsense_push6 = document.createElement('script');
// adsense_push6.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot6 = document.getElementById("div-gpt-ad-mobileTopSection");
// if (adsense_slot6 != null) {
//  adsense_slot6.after(script_tagadsense6);
//  adsense_slot6.after(contins6);
//  adsense_slot6.after(adsense_push6);
// }

                  let checklocslot16 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileTopSection"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot16 != null && !checklocslot16) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Leaderboard', [[320, 100]], 'div-gpt-ad-mobileTopSection')
                                .setTargeting('pti', ['Leaderboard'])
                                .addService(googletag.pubads()));
                  }
                  var locslot17 = document.getElementById("div-gpt-ad-mobileBottomBannerSection");
                  let checklocslot17 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileBottomBannerSection"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot17 != null && !checklocslot17) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/MR1', [[320,480],[300,600],[300,250]], 'div-gpt-ad-mobileBottomBannerSection')
                                .addService(googletag.pubads()));
                  }
                  var locslot18 = document.getElementById("div-gpt-ad-mobileBottomFrameSection");
                  let checklocslot18 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileBottomFrameSection"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot18 != null && !checklocslot18) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[300,250],[320,50]], 'div-gpt-ad-mobileBottomFrameSection')
                                .setTargeting('pti', ['StickyExpand'])
                                .addService(googletag.pubads()));
                  }
                  var locslot19 = document.getElementById("div-gpt-ad-mobileRB1Section");
                  let checklocslot19 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB1Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot19 != null && !checklocslot19) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-mobileRB1Section')
                                .addService(googletag.pubads()));
                  }

                  var locslot20 = document.getElementById("div-gpt-ad-mobileRB2Section");
                  let checklocslot20 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB2Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot20 != null && !checklocslot20) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-mobileRB2Section')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot21 = document.getElementById("div-gpt-ad-mobileRB3Section");
                  let checklocslot21 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB3Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot21 != null && !checklocslot21) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250],[300,600]], 'div-gpt-ad-mobileRB3Section')
                                .addService(googletag.pubads()));
                  }
                  var locslot22 = document.getElementById("div-gpt-ad-mobileRB4Section");
                  let checklocslot22 = listGptDirect.find((e) => {return e == "div-gpt-ad-mobileRB4Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot22 != null && !checklocslot22) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-mobileRB4Section')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }
                }
                if (window.innerWidth >= 1024){
                  var locslot1 = document.getElementById("div-gpt-ad-desktopTopDetail");
// var script_tagadsense9 = document.createElement('script');
// script_tagadsense9.async = true;
// script_tagadsense9.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense9.setAttribute("crossorigin", "anonymous");

// var contins9 = document.createElement('ins');
// contins9.className = "adsbygoogle";
// contins9.style = "display:inline-block;width:970px;height:250px";
// contins9.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins9.setAttribute("data-ad-slot", "4532337069");

// var adsense_push9 = document.createElement('script');
// adsense_push9.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot9 = document.getElementById("div-gpt-ad-desktopTopDetail");
// if (adsense_slot9 != null) {
//     adsense_slot9.after(script_tagadsense9);
//     adsense_slot9.after(contins9);
//     adsense_slot9.after(adsense_push9);
// }

                  let checklocslot1 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopTopDetail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot1 != null && !checklocslot1) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Leaderboard', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-desktopTopDetail')
                                .setTargeting('pti', ['Leaderboard'])
                                .addService(googletag.pubads()));
                  }

                  var locslot2 = document.getElementById("div-gpt-ad-desktopGiantDetail");
                  let checklocslot2 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopGiantDetail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot2 != null && !checklocslot2) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/MR2', [300,600], 'div-gpt-ad-desktopGiantDetail')
                                .addService(googletag.pubads()));
                  }

                  var locslot3 = document.getElementById("div-gpt-ad-desktopSkinAdsLeftDetail1010");
                  if (locslot3 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper1', [[160,600],[120,600]], 'div-gpt-ad-desktopSkinAdsLeftDetail1010')
                                .addService(googletag.pubads()));
                  }

                  var locslot4 = document.getElementById("div-gpt-ad-desktopSkinAdsRightDetail10");
                  if (locslot4 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper2', [[160,600],[120,600]], 'div-gpt-ad-desktopSkinAdsRightDetail10')
                                .addService(googletag.pubads()));
                  }

                  var locslot5 = document.getElementById("div-gpt-ad-desktopBottomFrameDetail");
                  let checklocslot5 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopBottomFrameDetail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot5 != null && !checklocslot5) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-desktopBottomFrameDetail')
                                .setTargeting('pti', ['StickyExpand'])
                                .addService(googletag.pubads()));
                  }

                  var locslot6 = document.getElementById("div-gpt-ad-desktopInArticle");
                  let checklocslot6 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopInArticle"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot6 != null && !checklocslot6) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-desktopInArticle')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot7 = document.getElementById("div-gpt-ad-desktopSkycrapper10");
                  if (locslot7 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper2', [[160,600],[120,600]], 'div-gpt-ad-desktopSkycrapper10')
                                .addService(googletag.pubads()));
                  }

                  var locslot8 = document.getElementById("div-gpt-ad-desktopRB1Detail");
                  let checklocslot8 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB1Detail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot8 != null && !checklocslot8) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-desktopRB1Detail')
                                .addService(googletag.pubads()));
                  }

                  var locslot9 = document.getElementById("div-gpt-ad-desktopRB2Detail");
                  let checklocslot9 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB2Detail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot9 != null && !checklocslot9) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-desktopRB2Detail')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot10 = document.getElementById("div-gpt-ad-desktopRB3Detail");
                  let checklocslot10 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB3Detail"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot10 != null && !checklocslot10) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-desktopRB3Detail')
                                .addService(googletag.pubads()));
                  }

                  var locslot11 = document.getElementById("div-gpt-ad-desktopUnderImage");
                  let checklocslot11 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopUnderImage"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot11 != null && !checklocslot11) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Inimage', [[468, 60],[728, 90]], 'div-gpt-ad-desktopUnderImage')
                                .setTargeting('pti', ['Inimage'])
                                .addService(googletag.pubads()));
                  }
                  var locslot12 = document.getElementById("div-gpt-ad-desktopTopHome");
// var script_tagadsense7 = document.createElement('script');
// script_tagadsense7.async = true;
// script_tagadsense7.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense7.setAttribute("crossorigin", "anonymous");

// var contins7 = document.createElement('ins');
// contins7.className = "adsbygoogle";
// contins7.style = "display:inline-block;width:970px;height:250px";
// contins7.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins7.setAttribute("data-ad-slot", "4532337069");

// var adsense_push7 = document.createElement('script');
// adsense_push7.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot7 = document.getElementById("div-gpt-ad-desktopTopHome");
// if (adsense_slot7 != null) {
//     adsense_slot7.after(script_tagadsense7);
//     adsense_slot7.after(contins7);
//     adsense_slot7.after(adsense_push7);
// }

                  let checklocslot12 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopTopHome"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot12 != null && !checklocslot12) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Leaderboard', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-desktopTopHome')
                                .setTargeting('pti', ['Leaderboard'])
                                .addService(googletag.pubads()));
                  }

                  var locslot13 = document.getElementById("div-gpt-ad-desktopGiantHome");
                  let checklocslot13 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopGiantHome"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot13 != null && !checklocslot13) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/MR2', [300,600], 'div-gpt-ad-desktopGiantHome')
                                .addService(googletag.pubads()));
                  }

                  var locslot14 = document.getElementById("div-gpt-ad-desktopSkinAdsLeftHome10");
                  if (locslot14 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper1', [[160,600],[120,600]], 'div-gpt-ad-desktopSkinAdsLeftHome10')
                                .addService(googletag.pubads()));
                  }

                  var locslot15 = document.getElementById("div-gpt-ad-desktopSkinAdsRightHome10");
                  if (locslot15 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper2', [[160,600],[120,600]], 'div-gpt-ad-desktopSkinAdsRightHome10')
                                .addService(googletag.pubads()));
                  }

                  var locslot16 = document.getElementById("div-gpt-ad-desktopBottomFrameHome");
                  let checklocslot16 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopBottomFrameHome"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot16 != null && !checklocslot16) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-desktopBottomFrameHome')
                                .setTargeting('pti', ['StickyExpand'])
                                .addService(googletag.pubads()));
                  }

                  // var locslot17 = document.getElementById("div-gpt-ad-desktopInArticle");
                  // if (locslot17 != null) {
                  //   propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-desktopInArticle')
                  //                .addService(googletag.pubads()));
                  // }

                  var locslot18 = document.getElementById("div-gpt-ad-desktopRB1Home");
                  let checklocslot18 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB1Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot18 != null && !checklocslot18) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-desktopRB1Home')
                                .addService(googletag.pubads()));
                  }

                  var locslot19 = document.getElementById("div-gpt-ad-desktopRB2Home");
                  let checklocslot19 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB2Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot19 != null && !checklocslot19) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-desktopRB2Home')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot20 = document.getElementById("div-gpt-ad-desktopRB3Home");
                  let checklocslot20 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB3Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot20 != null && !checklocslot20) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-desktopRB3Home')
                                .addService(googletag.pubads()));
                  }

                  var locslot21 = document.getElementById("div-gpt-ad-desktopRB4Home");
                  let checklocslot21 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB4Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot21 != null && !checklocslot21) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-desktopRB4Home')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot22 = document.getElementById("div-gpt-ad-desktopMCB1Home");
                  let checklocslot22 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopMCB1Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot22 != null && !checklocslot22) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[728,90]], 'div-gpt-ad-desktopMCB1Home')
                                .addService(googletag.pubads()));
                  }

                  var locslot23 = document.getElementById("div-gpt-ad-desktopMCB2Home");
                  let checklocslot23 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopMCB2Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot23 != null && !checklocslot23) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[468, 60],[728, 90]], 'div-gpt-ad-desktopMCB2Home')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot24 = document.getElementById("div-gpt-ad-desktopMCB3Home");
                  let checklocslot24 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopMCB3Home"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot24 != null && !checklocslot24) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[468, 60],[728, 90]], 'div-gpt-ad-desktopMCB3Home')
                                .addService(googletag.pubads()));
                  }

                  var locslot25 = document.getElementById("div-gpt-ad-desktopTopSection");
// var script_tagadsense8 = document.createElement('script');
// script_tagadsense8.async = true;
// script_tagadsense8.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
// script_tagadsense8.setAttribute("crossorigin", "anonymous");

// var contins8 = document.createElement('ins');
// contins8.className = "adsbygoogle";
// contins8.style = "display:inline-block;width:970px;height:250px";
// contins8.setAttribute("data-ad-client", "ca-pub-2186101008500724");
// contins8.setAttribute("data-ad-slot", "4532337069");

// var adsense_push8 = document.createElement('script');
// adsense_push8.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

// var adsense_slot8 = document.getElementById("div-gpt-ad-desktopTopSection");
// if (adsense_slot8 != null) {
//     adsense_slot8.after(script_tagadsense8);
//     adsense_slot8.after(contins8);
//     adsense_slot8.after(adsense_push8);
// }

                  let checklocslot25 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopTopSection"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot25 != null && !checklocslot25) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Leaderboard', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-desktopTopSection')
                                .setTargeting('pti', ['Leaderboard'])
                                .addService(googletag.pubads()));
                  }

                  var locslot26 = document.getElementById("div-gpt-ad-desktopGiantSection");
                  let checklocslot26 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopGiantSection"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot26 != null && !checklocslot26) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/MR2', [300,600], 'div-gpt-ad-desktopGiantSection')
                                .addService(googletag.pubads()));
                  }

                  var locslot27 = document.getElementById("div-gpt-ad-desktopSkinAdsLeftSection10");
                  if (locslot27 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper1', [[160,600],[120,600]], 'div-gpt-ad-desktopSkinAdsLeftSection10')
                                .addService(googletag.pubads()));
                  }

                  var locslot28 = document.getElementById("div-gpt-ad-desktopSkinAdsRightSection10");
                  if (locslot28 != null) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Skyscraper2', [[160,600],[120,600]], 'div-gpt-ad-desktopSkinAdsRightSection10')
                                .addService(googletag.pubads()));
                  }

                  var locslot29 = document.getElementById("div-gpt-ad-desktopBottomFrameSection");
                  let checklocslot29 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopBottomFrameSection"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot29 != null && !checklocslot29) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-desktopBottomFrameSection')
                                .setTargeting('pti', ['StickyExpand'])
                                .addService(googletag.pubads()));
                  }

                  var locslot30 = document.getElementById("div-gpt-ad-desktopRB1Section");
                  let checklocslot30 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopRB1Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot30 != null && !checklocslot30) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-desktopRB1Section')
                                .addService(googletag.pubads()));
                  }

                  var locslot31 = document.getElementById("div-gpt-ad-desktopMCB1Section");
                  let checklocslot31 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopMCB1Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot31 != null && !checklocslot31) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[728,90]], 'div-gpt-ad-desktopMCB1Section')
                                .addService(googletag.pubads()));
                  }

                  var locslot32 = document.getElementById("div-gpt-ad-desktopMCB2Section");
                  let checklocslot32 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopMCB2Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot32 != null && !checklocslot32) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[468, 60],[728, 90]], 'div-gpt-ad-desktopMCB2Section')
                                .setTargeting('pti', ['Multibanner1'])
                                .addService(googletag.pubads()));
                  }

                  var locslot33 = document.getElementById("div-gpt-ad-desktopMCB3Section");
                  let checklocslot33 = listGptDirect.find((e) => {return e == "div-gpt-ad-desktopMCB3Section"});
                  console.log("listGptDirect", listGptDirect);
                  if (locslot33 != null && !checklocslot33) {
                    propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner2', [[468, 60],[728, 90]], 'div-gpt-ad-desktopMCB3Section')
                                .addService(googletag.pubads()));
                  }
                }

                var locmultibanner1 = document.getElementsByClassName("read__content")[0];
                if (locmultibanner1 != null) {
                  var locm = document.getElementsByClassName("read__content")[0].getElementsByTagName("p");
                  var locm1 = Math.round(locm.length*10/100);
                  var locm2 = Math.round(locm.length*70/100);
                  // propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-multibanner1')
                  //              .addService(googletag.pubads()));
                  // locmultibanner1.getElementsByTagName("p")[locm1].after(dv_m1);
                }

                 var locmultibanner2 = document.getElementsByClassName("read__content")[0];
                 if (locmultibanner2 != null) {
                   propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Flying_Carpet', [[300,600]], 'div-gpt-ad-multibanner2')
                               .addService(googletag.pubads()));
                   locmultibanner2.getElementsByTagName("p")[locm2].after(dv_m2);
                 }

                var locoop = document.getElementsByClassName("header")[0];
                if (locoop != null) {
                  propsSlot.push(googletag.defineOutOfPageSlot('160553881,21847396155/ayocirebon.com/OOP', 'div-gpt-ad-oop')
                              .addService(googletag.pubads()));
                  locoop.after(dv_oop);
                }

                // var locsticky = document.getElementsByClassName("header")[0];
                // if (locsticky != null) {
                //   propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/StickyExpand', [[300,250],[320,50]], 'div-gpt-ad-stickyexp')
                //                .defineSizeMapping(mapping3)
                //                .addService(googletag.pubads()));
                //   locsticky.after(ft_stickyexp);
                // }

                if(document.getElementById("cont-megabillboard")!= null){
                    if (window.innerWidth < 1024){
                        var ct = window.parent.document.getElementById("cont-megabillboard");
                        var mbstyle = document.createElement('style');
                        mbstyle.innerHTML = 
                        `.megabillboard_container iframe {
                            border: 0px;
                            vertical-align: bottom;
                            position: fixed !important;
                            z-index: 1 !important;
                            width: 320px;
                            left: 0px;
                            height: 480px;
                            right: 0;
                            margin: auto;
                            top: auto !important;
                        }
                        .megabillboard_container {
                        background-attachment: scroll;
                        background-position: left top;
                        background-size: cover;
                        width: 100%;
                        position: absolute;
                        clip: rect(auto, auto, auto, auto);
                        right: 0px;
                        left: 0px;
                        margin: auto;
                        }
                        .ads-slot > * {
                        flex: 1 100%;
                        }
                        .megabillboard__swipe {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        }
                        .megabillboard__swipe p {
                        display: block;
                        margin: 0px;
                        font-size: 10px;
                        padding: 2px 0px;
                        background: #000;
                        text-align: center !important;
                        color: #fff;
                        }
                        .megabillboard {
                        height: 524px;
                        position: relative;
                        }
                        .ads-slot-mb-container {
                        width: 100%;
                        height: 506px;
                        position: absolute;
                        background-attachment: scroll;
                        background-position: left top;
                        background-size: cover;
                        clip: rect(auto, auto, auto, auto);
                        justify-content: center;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        display: flex;
                        }
                        .ads-slot {
                        position: relative;
                        z-index: 1;
                        margin: 0 auto;
                        background: #f7f7f7;
                        align-items: center;
                        justify-content: center;
                        text-align: center !important;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        display: flex;
                        }
                        .megabillboard-close {
                        cursor: pointer;
                        position: fixed;
                        right: calc(50% - 160px);
                        padding: 5px 0;
                        z-index: 2;
                        font-size: 12px;
                        font-weight: 700;
                        }
                        .stack {
                            z-index: 99;
                            width: 100%;
                            position: fixed;
                        }
                        .removeSmrtBnr {
                            display: block;
                            width: 25px;
                            height: 50px;
                            position: absolute;
                            right: 0;
                            z-index: 28;
                            top: 0;
                        }
                        #billboard {
                            z-index: 0;
                        }
                        .Mb_sticky {
                            animation: movesmaller 0.3s linear forwards;
                            -webkit-animation: movesmaller 0.3s linear forwards;
                        }
                        @keyframes movesmaller {
                            0% {
                                transform: scale(1);
                                opacity: 0;
                            }
                            100% {
                                transform: scale(.5);
                                opacity: 1;
                            }
                        }
                        .Mg_Container {
                            position: fixed;
                            height: 290px !important;
                        }
                        .Mg_Slot {
                            height: 267px !important;
                            background-color: black;
                        }
                        .Mg {
                            z-index: 27 !important;
                        }`;
                        var contMbAll = document.createElement('div');
                        contMbAll.className = "megabillboard";
                        contMbAll.id = "megabillboard";
                        contMbAll.style = "z-index: 3; background-color: #000; height: 524px;";
                        var contAdsMb = document.createElement('div');
                        contAdsMb.className = "ads-slot-mb-container MgContainer";
                        contAdsMb.id = "MgContainer";
                        contAdsMb.style = "width: 100%; height: 524px; background-color: #000;";
                        var contCloseAds = document.createElement('span');
                        contCloseAds.className = "megabillboard-close";
                        contCloseAds.setAttribute("href", "#");
                        contCloseAds.style = "color: #fff;";
                        contCloseAds.innerHTML = "CLOSE AD";
                        var contAdSlot = document.createElement('div');
                        contAdSlot.className = "ads-slot MgSlot";
                        contAdSlot.id = "MgSlot";
                        contAdSlot.style = "width: 100%; height: 510px; top: 25px; background-color: #000;";
                        var contAdSlotMb = document.createElement('div');
                        contAdSlotMb.className = "megabillboard_container MgSticky";
                        contAdSlotMb.id = "MgSticky";
                        contAdSlotMb.style = "height: 510px; background-color: rgb(0, 0, 0);";
                        var mbscgpt = document.createElement("script");
                        mbscgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                        mbscgpt.setAttribute("async","");
                        var mbscgpt2 = document.createElement("script");
                        mbscgpt2.innerHTML = "" +
                        " window.googletag = window.googletag || {cmd: []}; "+
                        " googletag.cmd.push(function() {"+
                        " propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Megabillboard', [300, 600], 'gpt-megabillboard').addService(googletag.pubads()));"+
                        " googletag.enableServices();"+
                        " googletag.display('gpt-megabillboard');"+
                        " });";
                        var mbdivgpt = document.createElement('div');
                        mbdivgpt.id = 'gpt-megabillboard';
                        var contSwipeMb = document.createElement('div');
                        contSwipeMb.className = "megabillboard__swipe";
                        contSwipeMb.style = "z-index: 9999;";
                        contSwipeMb.innerHTML = '<p id="scrollContent">SCROLL TO CONTINUE WITH CONTENT</p>';

                        contAdSlotMb.appendChild(mbdivgpt);
                        contAdSlotMb.appendChild(mbscgpt);
                        contAdSlotMb.appendChild(mbscgpt2);
                        contAdSlot.appendChild(contAdSlotMb);
                        contAdsMb.appendChild(contCloseAds);
                        contAdsMb.appendChild(contAdSlot);
                        contAdsMb.appendChild(contSwipeMb);
                        contMbAll.appendChild(contAdsMb);
                        contMbAll.appendChild(mbstyle);

                        // ct.parentNode.insertBefore(contMbAll, ct);
                        ct.appendChild(contMbAll);

                        function MegaBillSticky() {
                            $(document).ready(function() {
                            function ScaleStickyMg() {
                                var scrollState = 'top';
                                var scrollPos = $(window).scrollTop();
                                if ((scrollPos >= 200) && (scrollState === 'top')) {
                                    $('#megabillboard').addClass('Mg');
                                    $('#MgSticky').addClass('Mb_sticky');
                                    $('#MgContainer').addClass('Mg_Container');
                                    $('#MgSlot').addClass('Mg_Slot');
                                    scrollState = 'scrolled';
                                }
                            }

                            $('.megabillboard-close').click(function() {
                                $('#cont-megabillboard, .megabillboard, .megabillboard iframe').slideUp();
                            });

                            ScaleStickyMg();

                            $(window).scroll(function() {
                                ScaleStickyMg();
                                var scrollPos2 = $(window).scrollTop();
                                if (scrollPos2 <= 200) {
                                    $('.MgSticky').removeClass('Mb_sticky');
                                    $('.MgContainer').removeClass('Mg_Container');
                                    $('.MgSlot').removeClass('Mg_Slot');
                                    $('.MgContainer').css('opocity', 1);
                                }
                            });
                            setTimeout(function() {
                                $('.megabillboard').removeClass('Mg');
                                $('.MgSlot').removeClass('Mg_Slot');
                                $('.MgSticky').removeClass('Mb_sticky');
                                $('.MgContainer').removeClass('Mg_Container');
                                $('.megabillboard').removeAttr('id');
                                $('.MgContainer').removeAttr('id');
                                $('.MgSticky').removeAttr('id');
                                $('.MgSlot').removeAttr('id');
                            }, 5000);
                        });
                        }
                        window.addEventListener('scroll', MegaBillSticky);
                    }
                }
                var test = window.parent.document.getElementsByClassName("photo__img")[0];
                if (!test) {
                    var divinimage = null;
                } else {
                    var divinimage = test.getElementsByTagName("img")[0];
                }
                

                var dvim = document.createElement("div");
                dvim.id="gpt-inimage";
                var styledv = document.createElement("style");
                styledv.innerHTML = '.gpt-inimage iframe{top: 0 !important; width: auto !important; border-radius: 0 !important; opacity: 1 !important;}';
                dvim.appendChild(styledv);
                var sc2 = document.createElement("script");
                sc2.innerHTML = "" +
                " window.googletag = window.googletag || {cmd: []}; "+
                  " googletag.cmd.push(function() {"+
                  " propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Inimage', [320, 50], 'gpt-inimage').addService(googletag.pubads()));"+
                  " googletag.enableServices();"+
                  " googletag.display('gpt-inimage');"+
                  " });";

                  dvim.appendChild(sc2);

                var adsense_inimage = document.createElement('script');
                adsense_inimage.async = true;
                adsense_inimage.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2186101008500724';
                adsense_inimage.setAttribute("crossorigin", "anonymous");

                var continsAd = document.createElement('ins');
                continsAd.className = "adsbygoogle";
                continsAd.style = "display:inline-block;width:320px;height:50px";
                continsAd.setAttribute("data-ad-client", "ca-pub-2186101008500724");
                continsAd.setAttribute("data-ad-slot", "2526320597");

                var adsense_inimagepush = document.createElement('script');
                adsense_inimagepush.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

                var dvP = document.createElement("div");
                dvP.style="width:100%;position:absolute;bottom:0;z-index:1000;background:white;text-align:center;";
                dvP.id="in_image"
                dvP.innerHTML = '<a onclick="closeinImage()" style="display: inline-block;cursor: pointer;color: black;padding: 2px;padding-left: 6px;z-index: 9999;font-family: Arial;font-size: 12px;right: 0px;position: absolute;top: -18px;line-height: 20px;height: 20px;width: 20px;box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;border-radius: 50% 0px 0px;background-color: #fff;">X</a>';
                var closeinImage = document.createElement("script");
                closeinImage.innerHTML = 'function closeinImage(){'+
                '    document.getElementById("in_image").style.display = "none";'+
                '  }';
                dvP.appendChild(closeinImage);
                // dvP.appendChild(dvim);
                // dvP.appendChild(adsense_inimage);
                // dvP.appendChild(continsAd);
                // dvP.appendChild(adsense_inimagepush);
                var inImageContainer = document.createElement("div");
                inImageContainer.style = "position: relative;";
                inImageContainer.appendChild(dvP);
                if (divinimage != null) {
                  divinimage.after(inImageContainer);
                }

                var locfrmfly = document.getElementsByClassName("read__content")[0] ? document.getElementsByClassName("read__content")[0].getElementsByTagName("p") : null;
                var locfrmfly1 = locfrmfly ? Math.round(locfrmfly.length*30/100) : 0;
                var frmfly=window.parent.document.getElementsByClassName("read__content")[0] ? window.parent.document.getElementsByClassName("read__content")[0].getElementsByTagName("p")[locfrmfly1] : null;
                var checkWidth = window.parent.document.getElementsByClassName("read__content")[0] ? window.parent.document.getElementsByClassName("read__content")[0].clientWidth : 0;

                var scgpt = document.createElement("script");
                scgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                scgpt.setAttribute("async","");

                var dvfly = document.createElement("div");
                dvfly.id="gpt-flyingcarpet";
                var stylefly = document.createElement("style");
                stylefly.innerHTML = 
                '.parallax_abs {'+
                '    width: 100%;'+
                '    height: 100%;'+
                '    position: absolute;'+
                '    top: 0;'+
                '    left: 0;'+
                '    clip: rect(auto, auto, auto, auto);'+
                '}'+
                '.parallax_fix {'+
                '    width: 100%;'+
                '    height: 100%;'+
                '    position: fixed;'+
                '    top: 0;'+
                '    -moz-transform: translateZ(0);'+
                '    -webkit-transform: translateZ(0);'+
                '    -ms-transform: translateZ(0);'+
                '    -o-transform: translateZ(0);'+
                '    transform: translateZ(0);'+
                '    margin: 0 auto;'+
                '}'+
                '.parallax_ads {'+
                '    width: 100%;'+
                '    height: 100%;'+
                '    height: auto;'+
                '    border: none;'+
                '    position: absolute;'+
                '    left: 50%;'+
                '    top: 80px;'+
                '    -moz-transform: translateX(-50%);'+
                '    -webkit-transform: translateX(-50%);'+
                '    -ms-transform: translateX(-50%);'+
                '    -o-transform: translateX(-50%);'+
                '    transform: translateX(-50%);'+
                '}';
                var scgpt2 = document.createElement("script");
                scgpt2.innerHTML = "var parallax = null;" +
                " window.googletag = window.googletag || {cmd: []}; "+
                " googletag.cmd.push(function() {"+
                " parallax = propsSlot.push(googletag.defineSlot('160553881,21847396155/ayocirebon.com/Flying_Carpet', [300, 600], 'gpt-flyingcarpet').addService(googletag.pubads()));"+
                " googletag.enableServices();"+
                " googletag.display('gpt-flyingcarpet');"+
                " });";

                dvfly.appendChild(scgpt2);

                var divfly = document.createElement("div");
                divfly.className="flying_carpet_div";
                divfly.style = "width: 100%;height: 400px;position: relative;margin-bottom:10px !important;margin-top:0 !important;";
                var divwrap = document.createElement("div");
                divwrap.className="parallax_abs";
                var divshow = document.createElement("div");
                divshow.className="parallax_fix";
                divshow.style.maxWidth = checkWidth + "px";
                var divshowads = document.createElement("div");
                divshowads.className="parallax_ads";

                divshowads.appendChild(scgpt);
                divshowads.appendChild(dvfly);
                divshow.appendChild(divshowads);
                divwrap.appendChild(divshow);
                divfly.appendChild(divwrap);
                divfly.appendChild(stylefly);

                if (googletag.pubads().isInitialLoadDisabled()) {
                  console.log("REFRESHING");
                  console.log(propsSlot);
                  googletag.pubads().refresh(propsSlot);
                }

                if (frmfly != null) {
                  //frmfly.after(divfly);
                }
                setTimeout(function(){
                  var checkFC = window.parent.document.getElementById('gpt-flyingcarpet');
                  if (checkFC) {
                    checkFC = checkFC.clientHeight;
                    if(checkFC < 40){
                      document.getElementsByClassName('flying_carpet_div')[0].style.display = "none";
                    }
                  }
                }, 2500);
                
            }
        } else {
          if (props_sms_gtm_is_init == false) {
            props_sms_gtm_is_init = true;
            addDocumentToWebsite();
          }
          setTimeout(() => {
              propsInitAds();
          }, 150);
            return;
        }
    }   
}

gptIsRunning = false;

function loadGPT() {
  if (!gptIsRunning) {
    document.head.appendChild(script_tag);
  }
}

function registerTagsTargeting() {
  let locTags = document.getElementsByClassName("tag__list")[0];
  if (locTags != null) {
    let targetTags = document.getElementsByClassName("tag__list");
    targetTags = targetTags[0].childNodes;

    for (let tags of targetTags) {
      if (tags.localName == "li") {
        if (tags.children.length > 0) {
          if (tags.children[0].localName == "h4") {
            propsCollectTags.push(tags.children[0].innerText);
          }
        }
      }
    }
  }
}

function addDocumentToWebsite() {
  try {
    PWT.jsLoaded = function() {
      if (!gptIsRunning) {
        gptIsRunning = true;
        document.head.appendChild(script_tag);
      }
    }
    setTimeout(loadGPT, 500);
  } catch(e) {
    setTimeout(loadGPT, 500);
  } 
}