//21460_catchall-40 21460 0061ffa
!{1:[function(e,t,n){var r=window.pbjs=window.pbjs||{};r.que=r.que||[],r.que.unshift(();try{e("./lib/dm-web-vitals/trackWebVitals.js")(100)}catch(e){console.log("DM error loading DM Web Vitals",e)}r.que.unshift((function(){var e=function(t,n,r={}){for(var i in t)"object"==typeof t[i]?e(t[i],i,r):r[i]=t[i];return r};r.onEvent("beforeRequestBids",(function(t){t.forEach((function(n,r){t[r].ortb2Imp=n.ortb2Imp||{},t[r].ortb2Imp.ext=n.ortb2Imp.ext||{},t[r].ortb2Imp.ext.data=n.ortb2Imp.ext.data||{},t[r].ortb2Imp.ext.gpid=n.ortb2Imp.ext.data.adUnitPath?n.ortb2Imp.ext.data.adUnitPath+"#"+n.code:n.code,t[r].ortb2Imp.ext.data.pbadslot=n.ortb2Imp.ext.data.adUnitPath?n.ortb2Imp.ext.data.adUnitPath+"#"+n.code:n.code;var i=n.ortb2Imp&&n.ortb2Imp.ext?e(n.ortb2Imp.ext):{};Object.keys(i).length&&n.bids.forEach((function(e,n){switch(e.bidder){case"pubmatic":var a="";for(var o in i)a+=o+"="+i[o]+"|";a=a.slice(0,a.length-1),t[r].bids[n].params.dctr=a;break;case"appnexus":t[r].bids[n].params.keywords=i}}))}))}))})),r.que.unshift((),r.que.unshift((),r.que.unshift((),r.que.unshift((),r.que.unshift((),r.que.unshift((function(){r.rp.mtoConfigMap={8684:{mediaTypes:{banner:{sizes:[[300,250],[300,600],[970,250],[728,90],[320,50]]}}}},r.ppi&&(r.ppi.mtoConfigMap=r.rp.mtoConfigMap)})),r.que.unshift((function(){var e=[{slotPattern:".*",bids:[{bidder:"rubicon",params:{siteId:386702,zoneId:2154278,accountId:21460,bidonmultiformat:!1}}],mtoRevId:8684,aupname:".*"}];r.ppi&&r.ppi.addAdUnitPatterns&&r.ppi.addAdUnitPatterns(e),r.rp.addAdunitPatterns(e)})),r.que.unshift((),r.que.unshift((function(){r.rp.mergeConfig({mediaTypePriceGranularity:{video:{buckets:[{max:5,min:0,increment:.05},{max:10,min:5,increment:.1},{max:20,min:10,increment:.5},{max:60,min:20,increment:1}]},banner:{buckets:[{max:5,min:0,increment:.05},{max:10,min:5,increment:.1},{max:20,min:10,increment:.5},{max:60,min:20,increment:1}]},native:{buckets:[{max:5,min:0,increment:.05},{max:10,min:5,increment:.1},{max:20,min:10,increment:.5},{max:60,min:20,increment:1}]},"video-outstream":{buckets:[{max:5,min:0,increment:.05},{max:10,min:5,increment:.1},{max:20,min:10,increment:.5},{max:60,min:20,increment:1}]}},userSync:{syncDelay:5e3,syncEnabled:!0,filterSettings:{iframe:{filter:"include",bidders:"*"}},syncsPerBidder:3},currency:{defaultRates:{USD:{AUD:1.4948141349242774,BGN:1.7951353832033043,BRL:4.799724644332263,CAD:1.32198256080771,CHF:.8960073428178064,CNY:7.218540614960992,CZK:21.74850849013309,DKK:6.836071592473612,EUR:.9178522257916476,GBP:.7863515374024782,HKD:7.830564479118862,HUF:344.5525470399266,IDR:15013.547498852686,ILS:3.7027076640660854,INR:82.01743919229006,ISK:136.85176686553464,JPY:144.41486920605783,KRW:1298.4029371271226,MXN:17.041119779715466,MYR:4.652042221202386,NOK:10.643230839834787,NZD:1.6157870582836165,PHP:55.22257916475448,PLN:4.05828361633777,RON:4.541991739329968,SEK:10.84167049105094,SGD:1.348692060578247,THB:34.909591555759526,TRY:26.05396971087655,USD:1,ZAR:18.645892611289582}},adServerCurrency:"AUD"},bidderTimeout:1500,enableSendAllBids:!0,useBidCache:!1,coppa:!1,auctionOptions:{secondaryBidders:[]},enableTIDs:!0})})),r.que.unshift((),e("./lib/dmHelpers.js")(r)},{"./lib/dm-web-vitals/trackWebVitals.js":3,"./lib/dmHelpers.js":5,"./lib/hpbv2.js":6}],2:[{}],3:[{"../logUtils.js":7,"./webVitals":4}],4:[{"../logUtils.js":7,"./events":2}],5:[{"./logUtils.js":7}],6:[{"./logUtils.js":7}],7:[{}]},{},[1]);
!);
(self.pbjsChunk=self.pbjsChunk||[]).push([[14861],{64563:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[17968],{52712:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[21266],{55630:26372:function(n,e,t){t.d(e,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return s},Z:function(){return i},f8:function(){return g},fP:function(){return m},gm:function(){return o},md:function(){return l}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],i=o[0],a=o[1],c=o[2],s=o[3],u=r[0],l=r[1],f=new Set(o);var d,p=(d={},{registerOrtbProcessor:function(n){var e=n.type,t=n.name,r=n.fn,i=n.priority,a=void 0===i?0:i,c=n.dialects,s=void 0===c?[u]:c;if(!f.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(n){d.hasOwnProperty(n)||(d[n]={}),d[n].hasOwnProperty(e)||(d[n][e]={}),d[n][e][t]={priority:a,fn:r}}))},getProcessors:function(n){return d[n]||{}}}),g=p.registerOrtbProcessor,m=p.getProcessors}},function(n){n.O(0,[17968],(function(){return e=55630,n(n.s=e);var e}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[69168],{30277:,function(n){n.O(0,[17968],(function(){return t=30277,n(n.s=t);var t}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{9099:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[99226],{72663:26372:function(r,e,n){n.d(e,{DZ:function(){return i},Px:function(){return s},TP:function(){return a},YC:function(){return u},Z:function(){return t},f8:function(){return y},fP:function(){return g},gm:function(){return o},md:function(){return f}});var o=["request","imp","bidResponse","response"],c=["default","pbs"],t=o[0],i=o[1],s=o[2],u=o[3],a=c[0],f=c[1],l=new Set(o);var d,v=(d={},{registerOrtbProcessor:function(r){var e=r.type,n=r.name,c=r.fn,t=r.priority,i=void 0===t?0:t,s=r.dialects,u=void 0===s?[a]:s;if(!l.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));u.forEach((function(r){d.hasOwnProperty(r)||(d[r]={}),d[r].hasOwnProperty(e)||(d[r][e]={}),d[r][e][n]={priority:i,fn:c}}))},getProcessors:function(r){return d[r]||{}}}),y=v.registerOrtbProcessor,g=v.getProcessors}},function(r){var e;e=72663,r(r.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[87083],{31498:,function(n){var e;e=31498,n(n.s=e)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[65296],{96787:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[93157],{20676:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[2903],{43238:,function(e){e.O(0,[14861],(function(){return t=43238,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[85279],{24980:61283:15840:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[70951],{99933:11021:39702:]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[56187],{40060:26372:,);
(self.pbjsChunk=self.pbjsChunk||[]).push([[33402],{85370:]);
window.pbjs = window.pbjs || {};
pbjs.cmd=pbjs.cmd || [];
pbjs.cmd.push(;
pbjs.processQueue();
//EOF