if (window.owpbjs && window.PWT) {     console.log('DEBUG - for identity only profile, detected duplicate owpbjs and pwt namespaces. Exiting Identity Hub'); } else {/* prebid.js v6.18.0Updated : 2023-02-22*//*! For license information please see prebid-core.js.LICENSE.txt */!);"use strict";(self.owpbjsChunk=self.owpbjsChunk||[]).push([[8554],{4909:,function(e){e(e.s=4909)}]);"use strict";(self.owpbjsChunk=self.owpbjsChunk||[]).push([[1266],{1654:,function(n){n(n.s=1654)}]);"use strict";(self.owpbjsChunk=self.owpbjsChunk||[]).push([[5160],{1366:,function(n){n(n.s=1366)}]);"use strict";(self.owpbjsChunk=self.owpbjsChunk||[]).push([[9073],{8253:,function(o){o(o.s=8253)}]);"use strict";(self.owpbjsChunk=self.owpbjsChunk||[]).push([[5455],{8435:function(t,e,i){var o=i(9853),a=i(5755),r=i(3494),n=(0,i(5849).df)(),d="__im_uid",c="_im_vid",u="https://audiencedata.im-apps.net/imuid/get",s=972e8;unction l(t){return function(e){(0,a.h)(t,function(t){return{success:function(e){var i,a,r={};if(e)try{(i=r=JSON.parse(e))&&(i.uid?(a=i.uid,n.setDataInLocalStorage(d,a),n.setDataInLocalStorage("".concat(d,"_mt"),new Date((0,o.timestamp)()).toUTCString()),i.vid&&m(i.vid)):(n.removeDataFromLocalStorage(d),n.removeDataFromLocalStorage("".concat(d,"_mt"))))}catch(t){(0,o.logError)("User ID - imuid submodule: "+t)}t&&r.uid&&t(r.uid)},error:}(e),void 0,{method:"GET",withCredentials:!0})}}function f(t,e){return e?"".concat(e,"?cid=").concat(t):"".concat(u,"?cid=").concat(t)}var g={name:"imuid",decode:function(t){if(t&&"string"==typeof t)return{imuid:t}},getId:function(t){var e=t&&t.params||{};if(e&&"number"==typeof e.cid){var i,a,r=f(e.cid,e.url),u=(i=n.getDataFromLocalStorage("".concat(d,"_mt")),a=!0,Date.parse(i)&&Date.now()-new Date(i).getTime()<18e5&&(a=!1),{id:n.getDataFromLocalStorage(d),vid:n.getCookie(c),expired:a});return u.vid&&(r+="&vid=".concat(u.vid),m(u.vid)),u.id?(u.expired&&l(r)(),{id:u.id}):{callback:l(r)}}(0,o.logError)("User ID - imuid submodule requires a valid cid to be defined")}};(0,r.Bx)("userId",g),window.owpbjs.installedModules.push("imuIdSystem")}},function(t){t(t.s=8435)}]);"use strict";(self.owpbjsChunk=self.owpbjsChunk||[]).push([[4579],{6343:,);(self.owpbjsChunk=self.owpbjsChunk||[]).push([[9215],{2224:9999:8249:8214:2783:2153:,function(e){e(e.s=9999)}]);owpbjs.processQueue();!(([(,(,(,(function(e,t){t.pwt={identityOnly:"1",pid:"2779",gcv:"199",pdvid:"8",pubid:"157377",dataURL:"t.pubmatic.com/wl?",winURL:"t.pubmatic.com/wt?",owv:"v26.0.0",pbv:"v6.18.0",usePBSAdapter:"0",reduceCodeSize:"1",metaDataPattern:0,sendAllBids:"0",adserver:"IDHUB",gdpr:"1",cmp:"iab",gdprTimeout:"500",awc:0,platform:"display",refreshInterval:0,priceGranularity:0,adServerCurrency:0,singleImpression:"0",identityEnabled:"1",identityConsumers:"Prebid",ccpa:"1",ccpaCmpApi:"iab",ccpaTimeout:"500",sChain:"0",sChainObj:0,auTimeout:"1000",t:"1000",ssTimeout:0,prebidObjName:"pbjs",pubAnalyticsAdapter:"0",usePBJSKeys:"0",abTestEnabled:"0",testGroupSize:0,testType:0,granularityMultiplier:0,floorPriceModuleEnabled:"0",floorSource:0,floorAuctionDelay:0,jsonUrl:0,ssoEnabled:"0",autoRefreshAdslots:0,videoAdDuration:0,videoAdDurationMatching:0,adPodConfiguration:0,customPriceGranularityConfig:0,marketplaceBidders:0,owRedirectURL:0,topicsFPDModule:"0"},t.adapters={},t.identityPartners={"33acrossId":{name:"33acrossId","storage.type":"html5","storage.expires":"90","storage.name":"33acrossId","storage.refreshInSeconds":"28800","params.pid":"0015a00003DJYt7AAH",display:0,rev_share:"0.0",throttle:"100"},criteo:{name:"criteo",rev_share:"0.0",timeout:0,throttle:"100",display:0},unifiedId:{name:"unifiedId","storage.type":"cookie","storage.name":"pubmatic-unifiedid","storage.expires":"60","params.url":"//match.adsrvr.org/track/rid?ttd_pid=pubmatic&fmt=json",rev_share:"0.0",timeout:0,throttle:"100",display:0},imuid:{name:"imuid","params.cid":"1011099","params.url":0,display:0,rev_share:"0.0",throttle:"100"}},t.testConfigDetails={},t.test_pwt={},t.identityPartners={}}),(,(]);}if(typeof window.PWT === "object" && typeof window.PWT.jsLoaded === "function"){
    window.PWT.jsLoaded();
}