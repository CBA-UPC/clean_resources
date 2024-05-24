// prettier-ignore
(function(window, document, dataLayerName, id) {
  window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
    var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
  var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
  tags.async=!0,tags.src="//stats.proxad.net/containers/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
  !window,"ppms",["tm","cm"]);
})(window, document, 'dataLayer', 'c4548f17-1edc-4de5-9976-403645275238');
