// For license information, see `https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RCc9539a645c504eaab0c8805743f8ce7a-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RCc9539a645c504eaab0c8805743f8ce7a-source.min.js', "function Custom_Order(e,t,a){window._paq=window._paq||[],window._paq.push([\"setCustomVariable\",\"1\",\"Event\",\"Order\",\"page\"]),window._paq.push([\"setCustomVariable\",\"2\",\"Revenue\",e,\"page\"]),window._paq.push([\"setCustomVariable\",\"3\",\"OrderID\",t,\"page\"]),window._paq.push([\"setCustomVariable\",\"4\",\"ProductType\",a,\"page\"]),window._paq.push([\"trackPageView\"])}if(_satellite.getVar(\"cjs_marketing_tag4arm_trigger\")){var eventType,IdsArr=_satellite.getVar(\"cjs_marketing_tag4arm_ids\")(eventType)||[];IdsArr.forEach((function(e){(e.events.standard||[]).forEach((function(t){if(/pageview$/i.test(t.event)){var a=(\"https:\"==document.location.protocol?\"https\":\"http\")+\"://www.tag4arm.com/tags4arm/\";window._paq=window._paq||[],window._paq.push([\"trackPageView\"]),window._paq.push([\"enableLinkTracking\"]),window._paq.push([\"setTrackerUrl\",a+\"tag4arm.php\"]),window._paq.push([\"setSiteId\",e.id]),r=document,n=r.createElement(\"script\"),s=r.getElementsByTagName(\"script\")[0],n.type=\"text/javascript\",n.defer=!0,n.async=!0,n.src=a+\"tag4arm.js\",s.parentNode.insertBefore(n,s)}else\"Order\"==t.event&&Custom_Order(e.ecommerce.Revenue,e.ecommerce.OrderID,e.ecommerce.ProductType.join(\",\"));var r,n,s})),(e.events.custom||[]).forEach((function(){}))}))}");