// For license information, see `https://assets.adobedtm.com/0681c221600c/a809aa50e68e/9a7b48775db0/RCc5033f112815411a86ecc92b11c4a44e-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/0681c221600c/a809aa50e68e/9a7b48775db0/RCc5033f112815411a86ecc92b11c4a44e-source.min.js', "DTM.tools.dogtrack={dl:{id:\"PREP_934_619_047\",src:\"prep.spxl.socy.es\"},trackedPV:!1,init:function(){window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push((function(){Didomi.getUserStatus().vendors.consent.enabled.indexOf(\"c:besocy-mFUEaZBM\")>-1&&_satellite.getVar(\"validPage\")&&(DTM.tools.list.push(\"dogtrack\"),DTM.tools.dogtrack.trackPV()),window.didomiEventListeners=window.didomiEventListeners||[],window.didomiEventListeners.push({event:\"consent.changed\",listener:function(){Didomi.getUserStatus().vendors.consent.enabled.indexOf(\"c:besocy-mFUEaZBM\")>-1&&_satellite.getVar(\"validPage\")&&(DTM.tools.list.push(\"dogtrack\"),DTM.tools.dogtrack.trackPV())}})}))},trackPV:function(){return!0!==this.trackedPV&&(e=document,t=\"script\",i=\"dogtrack-pixel\",d=this.dl.src,o=this.dl.id,a=e.getElementsByTagName(t)[0],e.getElementById(i)||((n=e.createElement(\"script\")).id=i,n.async=1,n.h=d,n.t=o,s=encodeURI(btoa(e.referrer)),n.src=\"//\"+d+\"/pixel/js/\"+o+\"/\"+s,a.parentNode.insertBefore(n,a)),this.trackedPV=!0,DTM.notify(\"PV tracked in tool <dogtrack> (Data Layer)\"),!0);var e,t,i,d,o,n,s,a}},DTM.tools.dogtrack.init();");