// For license information, see `https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RC891bd2f38d49435480b7907568ca8378-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/528526b3f782/ddfab9399b13/3da937b13c51/RC891bd2f38d49435480b7907568ca8378-source.min.js', "var pageType=_satellite.getVar(\"dl_page_pageInfo_pageType\");if(/quickview\\smodal|product\\sdetail/.test(pageType)){var getReq=function(e,t){var a=new XMLHttpRequest;a.onreadystatechange=function(){4==a.readyState&&t(a)},a.open(\"GET\",e,!0),a.send(null)},flattenObj=function(e,t,a){for(var o in a=a||{},t=t&&t+\".\"||\"\",e){var r=t+o;\"object\"!=typeof e[o]?a[r]=e[o]:flattenObj(e[o],r,a)}return a},manageProps=function(e,t,a,o,r){if(t){var i=a.split(\".\"),n=i[0]+\".\",l=n+o,s=i.slice(-1),d=n+\"all\";e[a]=e[a]||[],e[a].push(o),e[l]=e[l]||{},e[l][s]=r,e[d]=e[d]||{},e[d][o]=e[l]}else e[a]=r;return e},sendMbox=function(e,t,a,o){if(\"function\"==typeof window.alloy||\"function\"==typeof((window.adobe||{}).target||{}).getOffers){var r=window;for(var i in(t||\"\").split(\".\").forEach((function(e){r=r[e]||{}})),r===window?{}:r)o[i]=r[i];if(o[\"entity.event.detailsOnly\"]=!0,window.alloy){var n=_satellite.getVar(\"[MO] - Page View + Product View\")?JSON.parse(JSON.stringify(_satellite.getVar(\"[MO] - Page View + Product View\"))):void 0;n&&(delete n._experience.analytics.event1to100,delete n.web.webPageDetails,delete n.commerce,n._experience.analytics.event901to1000={event999:{value:1}},n.web.webInteraction={linkClicks:{value:1},name:_satellite.getVar(\"[JSV] Page - name\"),URL:window.location.href,type:\"other\"},alloy(\"sendEvent\",{renderDecisions:!0,xdm:n,type:\"proofit-pdp\",data:o,decisionScopes:[\"__view__\"]}))}else if(window.adobe.target){var l=window[a]||{},s={logging:\"server_side\",supplementalDataId:(l.visitor||{})._supplementalDataIDLast,trackingServer:l.trackingServer,trackingServerSecure:l.trackingServerSecure};window.adobe.target.getOffers({request:{execute:{mboxes:[{index:0,name:e,parameters:o}]},experienceCloud:{analytics:s}},experienceCloud:{analytics:s}}).then((function(e){window.adobe.target.applyOffers({response:e})})).catch((function(e){console.log(\"Target Error\",e)}))}}},proofitDomain=\"ifuhzgwwlk\",allowedDomains=[\"www.shutterfly.com\"],siteFilter=\"us\",productArr=_satellite.getVar(\"dl_page_productDetails\")&&!Array.isArray(_satellite.getVar(\"dl_page_productDetails\"))?[_satellite.getVar(\"dl_page_productDetails\")]:_satellite.getVar(\"dl_page_productDetails\")?_satellite.getVar(\"dl_page_productDetails\"):[],prodIds=productArr.length>0?productArr.map((function(e){return e.productCode})):[],apiStage=\"production\"!==_satellite.environment.stage?\"beta\":\"prod\",clientName=\"shutterfly\",mboxName=/quickview\\smodal/.test(pageType)?\"proofit-tn\":\"proofit-pdp\",mboxObject=\"\",mboxMap={\"RTI.productcodexorders1440\":\"RTI.productcodexorders1440\",\"RTI.productcodexadds1440\":\"RTI.productcodexadds1440\",\"RTI.productcodexviews1440\":\"RTI.productcodexviews1440\"},sObject=\"s\";if(clientName&&mboxName&&prodIds.length>0&&-1!==allowedDomains.indexOf(document.location.hostname)){var url=\"https://\"+proofitDomain+\".execute-api.eu-west-2.amazonaws.com/\"+clientName+\"-\"+apiStage+\"/proofit?q=all&skuIds=\"+encodeURIComponent(prodIds.join());getReq(url,(function(e){var t=e.responseText;if(e&&200==e.status&&t){var a=siteFilter||\"none\",o=JSON.parse(t).data||{},r=prodIds.length>1,i={};if(prodIds.forEach((function(e){if(o[e]&&Object.keys(o[e]).length>0)for(var t in o[e])for(var n in o[e][t]){var l=\"RTI.\"+n.replace(/-/g,\"\"),s=o[e][t][n][a]||o[e][t][n].global;if(s)if(\"object\"!=typeof s)i=manageProps(i,r,mboxMap[l]||l,e,s);else{var d=flattenObj(s);for(var c in d){var p=l+\".\"+c;i=manageProps(i,r,mboxMap[p]||p,e,d[c])}}}})),Object.keys(i).length>0){for(var n in i){var l=i[n];\"object\"==typeof l&&(i[n]=Array.isArray(l)?l.join():JSON.stringify(l))}sendMbox(mboxName,mboxObject,sObject,i)}}}))}}");