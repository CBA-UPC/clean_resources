// For license information, see `https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RC4baeed36d24c465cab1cacc7d61ab236-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RC4baeed36d24c465cab1cacc7d61ab236-source.min.js', "function sendProductInfo(e){\"home\"==_satellite.getVar(\"dl_page_pageInfo_pageType\")?e.push({eventType:\"home\"}):/(category|thumbnail|subcategory)\\spages/.test(_satellite.getVar(\"dl_page_pageInfo_pageType\"))?e.push({eventType:\"category\",categoryId:_satellite.getVar(\"dl_page_pageDetails_categoryCode\")}):/(product\\s(details|detail))\\spages/.test(_satellite.getVar(\"dl_page_pageInfo_pageType\"))&&e.push({eventType:\"offer\",offerId:_satellite.getVar(\"dl_page_productDetails_productCode\")}),e.push({eventType:\"uid\",id:_satellite.getVar(\"dl_session_visitorDetails_customerId\")?_satellite.getVar(\"dl_session_visitorDetails_customerId\"):\"unknown\"})}if(_satellite.getVar(\"cjs_marketing_rtb_trigger\")){var rtbArrIds=_satellite.getVar(\"cjs_marketing_rtb_ids\")||[];rtbArrIds.forEach((function(e){window.rtbhEvents||(function(t,s,a,r){t[a]=t[a]||[],t[a].push({eventType:\"init\",value:r,dc:\"us\"});var n=s.getElementsByTagName(\"script\")[0],i=s.createElement(\"script\");i.async=!0,i.src=\"https://tags.creativecdn.com/\"+e+\".js\",n.parentNode.insertBefore(i,n)}(window,document,\"rtbhEvents\",e),window.rtbhEvents=window.rtbhEvents||[]),sendProductInfo(window.rtbhEvents)}))}");