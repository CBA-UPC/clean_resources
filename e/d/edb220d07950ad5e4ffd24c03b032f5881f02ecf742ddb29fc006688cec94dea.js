// For license information, see `https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RC2615fbccccb64a0b960d804a463f44f0-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RC2615fbccccb64a0b960d804a463f44f0-source.min.js', "function fbqInstanceLoaded(e,t){return!!(e.instance&&e.instance.configsLoaded&&e.instance.configsLoaded[t])}function loadFacebookData(){var e;(_satellite.getVar(\"cjs_marketing_facebook_ids\")()||[]).forEach((function(t){fbqInstanceLoaded(window.fbq,t.id)||fbq(\"init\",t.id,t.customer),e=t})),e&&(e.events.standard.forEach((function(t){\"PageView\"==t.event?window.fbq(\"track\",t.event,{},{eventID:t.eventID}):window.fbq(\"track\",t.event,e.ecommerce,{eventID:t.eventID})})),e.events.custom.forEach((function(t){window.fbq(\"trackCustom\",t.event,e.ecommerce,{eventID:t.eventID})})))}if(_satellite.getVar(\"cjs_marketing_facebook_trigger\")&&(window.fbq||function(e,t,n,a,o,c,i){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version=\"2.0\",o.queue=[],(c=t.createElement(n)).async=!0,c.src=a,(i=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,i))}(window,document,\"script\",\"https://connect.facebook.net/en_US/fbevents.js\"),window.fbq)){var fbIds=_satellite.getVar(\"cjs_marketing_facebook_ids\")()||[];/creationpath/i.test(window.location.pathname)||loadFacebookData()}");