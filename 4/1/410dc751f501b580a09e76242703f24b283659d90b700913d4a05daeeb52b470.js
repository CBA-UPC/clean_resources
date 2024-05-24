/** 
 * HubSpot Analytics Tracking Code Build Number 1.590
 * Copyright 2024 HubSpot, Inc.  http://www.hubspot.com
 */
var _hsq = _hsq || [];
var _paq = _paq || [];
_hsq.push(['setPortalId', 2405078]);
_hsq.push(['trackPageView']);
_hsq.push(["trackClick", "input[name='LEGAL_CONSENT.subscription_type_1168242']", "000007404368"]);
_hsq.push(["trackClick", "#id=\"hs-cta-wrapper-83344400-52c2-45b4-bfd2-243118e30214\"", "000007472076", {"url":"https://digital.gfk.com/the_future_of_black_friday"}]);
_hsq.push(["trackClick", "#Whiteboard-Try_now", "000010361958"]);
_hsq.push(["trackClick", "#Whiteboard-Request_a_demo", "000010361962"]);
_hsq.push(["trackClick", "#aboutgfkvideo", "000010399813"]);
_hsq.push(["trackClick", "#video-home-2", "000010406462", {"url":"https://www.gfk.com/home"}]);
_hsq.push(["trackClick", "#video-home-1", "000010406491", {"url":"https://www.gfk.com/home"}]);
_hsq.push(["trackClick", "#aboutgfkvideode", "000010468487"]);
_hsq.push(["trackClick", "#aboutgfkvideous", "000010468488"]);
_hsq.push(["trackClick", "#aboutgfkvideoes", "000010468489"]);
_hsq.push(["trackClick", "#aboutgfkvideofr", "000010468490"]);
_hsq.push(["trackClick", "#aboutgfkvideopl", "000010468491"]);
_hsq.push(["trackClick", "#aboutgfkvideoja", "000010468492"]);
_hsq.push(["trackClick", "#aboutgfkvideouk", "000010469029"]);
_hsq.push(["trackClick", "#aboutgfkvideozh", "000010469030"]);
_hsq.push(["trackClick", "#aboutgfkvideoit", "000010469031"]);
_hsq.push(["trackClick", "#aboutgfkvideoru", "000010469032"]);
_hsq.push(["trackClick", "#aboutgfkvideoko", "000010469033"]);
try {
window.addEventListener('message', event => {
	if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
		let val = document.querySelector("input[name='LEGAL_CONSENT.subscription_type_1168242']").checked
		if(val) {
         	_hsq.push(["trackEvent", {id: "000007404368"}]); 
        }
	}
});
} catch (e) { _hsq.push(['log', 'customJsError', e]); }
_hsq.push(["trackClick", "#gfknewron-request_demo-1", "pe2405078_gfknewron___request_demo___1", {"url":"https://www.gfk.com/products/gfknewron","trackingConfigId":15097319}]);
_hsq.push(["trackClick", "#gfknewron-request_demo-2", "pe2405078_gfknewron___request_demo___2", {"url":"https://www.gfk.com/products/gfknewron","trackingConfigId":15107268}]);
try {
let trackingItems = document.querySelectorAll('[amp-modulename]');
for (let i = 0; i < trackingItems.length; i++) {
  trackingItems[i].onclick = function () {
    let element_name = trackingItems[i].getAttribute('amp-elementName');
    let module_name = trackingItems[i].getAttribute('amp-moduleName');
    if (element_name && module_name) {
      console.log('hb_tracking', element_name, module_name);
      _hsq.push([
        'trackCustomBehavioralEvent',
        {
          name: 'pe2405078_page_element_clicked',
          properties: {
            element_name: element_name,
            module_name: module_name,
          },
        },
      ]);
    }
  };
}
document.querySelectorAll('a').forEach(item => {
  if (!item.getAttribute('amp-elementname')) {
    item.addEventListener('click', function () {
      if (item.innerText) {
         console.log('hb_tracking', item.innerText);
        _hsq.push([
          'trackCustomBehavioralEvent',
          {
            name: 'pe2405078_page_element_clicked',
            properties: {
              element_name: item.innerText,
              module_name: 'Page Link',
            },
          },
        ]);
      }
    });
  }
});
let audios = document.querySelectorAll("audio")
for(let i = 0; i <= audios.length; i++){
  if(audios[i]){
    audios[i].addEventListener('playing', function(){
      console.log("audio tracking")
       _hsq.push([
          'trackCustomBehavioralEvent',
          {
            name: 'pe2405078_page_element_clicked',
            properties: {
              element_name: audios[i].getAttribute("trackName"),
              module_name: 'Text Reader',
            },
          },
        ]);
    });
  }

}
		
} catch (e) { _hsq.push(['log', 'customJsError', e]); }
_hsq.push(['setLegacy', false]);
_hsq.push(['addCookieDomain', '.hs-sites.com']);
_hsq.push(['addCookieDomain', '.gfk.com']);
_hsq.push(['addCookieDomain', '.mrisimmons.com']);
_hsq.push(['addCookieDomain', '.hubspotpagebuilder.com']);
_hsq.push(['addCookieDomain', '.gfknewron.com']);
_hsq.push(['addCookieDomain', '.etilize.com']);
_hsq.push(['addCookieDomain', '.gfk-cps.com']);
_hsq.push(['addCookieDomain', '.hubspot.com']);
_hsq.push(['addCookieDomain', '.hsforms.com']);
_hsq.push(['enableAutomaticLinker', true]);
_hsq.push(['embedHubSpotScript', 'https://js-na1.hs-scripts.com/2405078.js', 'hs-script-loader']);
_hsq.push(['initEventVisualizerScript']);
_hsq.push(['setTrackingDomain', 'track.hubspot.com']);
/** _anon_wrapper_ **/ ((); /** _anon_wrapper_ **/