(function(){
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push(['activateGeoDelayedExperiments', {
    'location':{
      'city': "BARCELONA",
      'continent': "EU",
      'country': "ES",
      'region': "CT",
      'dma': ""
    },
    'ip':"147.83.130.27"
  }]);
})
//
()

;
pathname.split("/")[3]},get site_level_2(){return window.location.pathname.split("/")[4]},get site_level_3(){return window.location.pathname.split("/")[5]}};({init:function(){let t=document.createElement("script");t.src="https://js.adsrvr.org/up_loader.1.1.0.js",t.onload=function(){window.ttd_dom_ready&&ttd_dom_ready(function(){typeof TTDUniversalPixelApi=="function"&&new TTDUniversalPixelApi().init("zb7q7fr",["452gq1z"],"https://insight.adsrvr.org/track/up")})},document.head.appendChild(t),this.initEventTracking()},send:function({ct:t}){let n=`//insight.adsrvr.org/track/pxl/?adv=zb7q7fr&ct=0:${t}&fmt=3`;new Image().src=n},trackCnyOffers:function(){i?.site_level_2==="cny-offers-pub9f0732e0"&&this.send({ct:"5atouaa"})},initEventTracking:function(){i?.site_level_1==="campaigns"&&this.trackCnyOffers()}}).init()})();
