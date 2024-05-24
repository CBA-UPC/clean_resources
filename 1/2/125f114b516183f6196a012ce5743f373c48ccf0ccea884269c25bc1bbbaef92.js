"use strict";(self.function*(){return d.geo||(d.geo=yield l()),d.geo}))}}const l=()=>a(void 0,null,(function*(){const e=`${window.$adManagementConfig.web.model.launcherUrl}/flooring/countryLookup`;let t;try{t=yield o.Z.fetchJson(e)}catch(e){return{country_code:"US",state:r.y.CA}}return t.geo}));var c=i(6091),h=i(9860),u=i(3583);const p=window.$adManagementConfig.web.model.offering.id,b={1:1.25,2:1.15},m=.01,g=b[p]||b[1],f=window.$adManagementConfig.web.model,v={[n.D.banner]:f.bannerDiscrepancies,[n.D.native]:f.bannerDiscrepancies,[n.D.outstream]:f.outstreamDiscrepancies,[n.D.video]:f.videoDiscrepancies},_={rubicon:.865};var y,w;function B(e,t,i,n){const r=k[s.A.deviceType]||"other",o=function(){const e=window.$adManagementConfig.web.tpc;return e&&!e.timedOut?e.supported?"enabled":"disabled":"Chrome"===s.A.browser?"enabled":"disabled"}(),a=i&&i.country_code||"other",d=e.topLevelCategory&&e.topLevelCategory.slug,l=function({device:e,category:t,country:i,mediaType:s,adUnitId:n,thirdPartyCookieStatus:r}){return{device:C[e]||1.00001,country:E[i]||E.default,category:F[t]||1.29,mediaType:x[s],adUnit:D[n]||1,cookies:P[r]}}({device:r,country:a,category:A[d]||A.None,mediaType:t,adUnitId:n||"other",thirdPartyCookieStatus:o}),h=(0,c.RR)(l).reduce(((e,t)=>e*l[t]),g);return parseFloat(h.toFixed(2))}(w=y||(y={})).getBidderFloor=function(e,t,i,s){const n=w.getFloor(e,i,s),r=(v[i]||{})[t]||1,o=_[a=t]?_[a]:1;var a;return(0,h.Mn)(n/o/r,u.bZ)},w.getDisplayFloor=(e,t)=>{if(["3","4"].includes(e.offering.id))return m;const i=B(e,n.D.banner,d.geo,t);return Math.max(.1,i)},w.getVideoFloor=e=>{if(["3","4"].includes(e.offering.id))return m;const t=B(e,n.D.video,d.geo);return Math.max(2,t)},w.getSkinFloor=(e,t)=>{if(["3","4"].includes(e.offering.id))return m;const i=B(e,n.D.banner,d.geo,t);return Math.max(8.15,i)},w.getOutstreamFloor=(e,t)=>{if(["3","4"].includes(e.offering.id))return m;const i=B(e,n.D.outstream,d.geo,t);return Math.max(1,i)},w.getFloor=(e,t,i)=>(null==i?void 0:i.includes("skin_"))?w.getSkinFloor(e,i):t===n.D.video?w.getVideoFloor(e):t===n.D.outstream?w.getOutstreamFloor(e,i):w.getDisplayFloor(e,i);const D={interstitial_desktop:4,interstitial_mobile:4,adhesion_desktop:1,adhesion_mobile:1,adhesion_tablet:1,comments_btf:1,comments_mobile:1,content_btf:1,content_mobile:1,feed_btf:1,feed_mobile:1,leaderboard_atf:1,leaderboard_btf:1,recipe_btf:1,recipe_mobile:1,sidebar_atf:1,sidebar_btf:1,skin_desktop:8,universalPlayer:1,other:1},C={desktop:.9,other:.27,phone:1,tablet:1.06},x={[n.D.video]:1.3,[n.D.banner]:.4,[n.D.outstream]:1.25,[n.D.native]:.4},P={enabled:1.63,disabled:.9},F={None:1.29,"Arts & Entertainment":.81,Education:.78,"Family & Parenting":1.11,"Food & Drink":1.28,"Health & Fitness":1.02,"Hobbies & Interests":1,"Home & Garden":1.38,"Personal Finance":1.38,Pets:1.33,Politics:.63,"Style & Fashion":1.17,Travel:1.11};var k=(e=>(e.mobile="phone",e.tablet="tablet",e.desktop="desktop",e))(k||{}),A=(e=>(e.None="None",e["arts-and-entertainment"]="Arts & Entertainment",e.education="Education",e["family-and-parenting"]="Family & Parenting",e["food-and-drink"]="Food & Drink",e["health-and-fitness"]="Health & Fitness",e["hobbies-and-interests"]="Hobbies & Interests",e["home-and-garden"]="Home & Garden",e["personal-finance"]="Personal Finance",e.pets="Pets",e.politics="Politics",e["style-and-fashion"]="Style & Fashion",e.travel="Travel",e))(A||{});const E={US:1.94,GB:1.23,CA:1.41,AU:1.31,IN:.23,DE:1.07,ZA:.73,SG:1.21,PH:.29,NZ:1.23,NL:.88,MY:.48,IE:.85,FR:1,MX:.64,ES:.48,AE:1.03,NG:.29,SE:.71,BE:1.01,ID:.14,CH:1.3,AT:1.04,IT:.42,BR:.13,HK:1.21,NO:.68,JP:.81,AR:.13,PK:.16,default:.24}},8387:(e,t,i)=>{i.d(t,{Z:()=>r});const s=e=>Boolean(e&&e.href),n=e=>{const t=window.$adManagementConfig.web.model.domain.split("/")[0];return Boolean(e.href.includes(t))},r=(()=>{const e=document.querySelector('link[rel="canonical"]');return s(e)&&n(e)?e.href:window.location.href})()},9860:(e,t,i)=>{i.d(t,{B5:()=>n,Mn:()=>s});function s(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}function n(e){if("string"==typeof e)return n(parseFloat(e));if(void 0===e)return"-1";if(e>10)return"10+";const t=e.toFixed(2);let[i,s]=t.split(".");for(i=i||"",s=s||"";i.length<1;)i=`0${i}`;for(;s.length<2;)s+="0";return`${i}.${s}`}},6057:(e,t,i)=>{i.d(t,{d:()=>r});var s=i(7606);const n=function(){const e={};return(t,i)=>(e[t]||(e[t]={},i.forEach((i=>{const s=Array.isArray(i)?i.join("x"):i;e[t][s]=!0}))),e)}();class r{constructor(e,t,i){this.slot=t,this.bidResponses=this.filterBidResponses(this.getBidResponses(i)),this.targeting=s.Z.getTargeting(t.id)||{},this.hbCount=s.Z.countBiddersAboveFloor(t.id,e)}getPrebidBidderTargeting(){const e={};return this.bidResponses.forEach((t=>{if(t.cpm>0){const i=(Math.floor(100*t.cpm)/100).toFixed(2),s=t.s2sBidder?`hb_pb_${t.s2sBidder.substring(0,10)}_s2s`:`hb_pb_${t.bidderCode}`;e[s]=i}})),e}getBidResponses(e){return e&&e[this.slot.id]&&e[this.slot.id].bids||[]}filterBidResponses(e){if(e.length>0){const{adUnitId:t,sizes:i}=this.slot,s=n(t,i);return e.filter((({width:e,height:i,isOutstream:n})=>n||s[t][`${e}x${i}`]))}return e}}},7606:(e,t,i)=>{i.d(t,{Z:()=>F});var s=i(2321),n=i(9225),r=i(5595),o=(e=>(e.hb_advertiser="hb_advertiser",e.hb_bidder="hb_bidder",e.hb_adid="hb_adid",e.hb_pb="hb_pb",e.hb_s2sBidder="hb_s2sBidder",e.hb_safeframe="hb_safeframe",e.hb_liv="hb_liv",e.hb_bid="hb_bid",e.hb_bsbid="hb_bsbid",e.hb_ub="hb_ub",e.hb_size="hb_size",e.hb_count="hb_count",e.hb_pmp="hb_pmp",e.hb_pool="hb_pool",e.hb_pb_amazon="hb_pb_amazon",e.hb_pb_appnexus="hb_pb_appnexus",e.hb_pb_appnexusAst="hb_pb_appnexusAst",e.hb_pb_indexExchange="hb_pb_indexExchange",e.hb_pb_rubicon="hb_pb_rubicon",e.hb_pb_triplelift="hb_pb_triplelift",e.hb_sdef_set="hb_sdef_set",e.hb_sdef_val="hb_sdef_val",e))(o||{}),a=i(3528),d=i(5077),l=i(3583),c=i(7457);class h{constructor(e,t,i,s,n=1){this.bannerDiscrepancies=e,this.videoDiscrepancies=t,this.outstreamDiscrepancies=i,this.displayBidShield=s,this.sdef=n,this.standard={adserverTargeting:[{key:o.hb_bidder,val:e=>e.s2sBidder?`${e.s2sBidder}_s2s`:e.bidderCode},{key:o.hb_adid,val:e=>e.adId},{key:o.hb_pb,val:e=>(0,c.u9)((0,c.WS)(e,this.displayBidShield))},{key:o.hb_sdef_val,val:e=>(0,c.rw)(e,this.sdef)},{key:o.hb_sdef_set,val:()=>this.sdef},{key:o.hb_bid,val:e=>Number(e.cpm).toFixed(2)},{key:o.hb_bsbid,val:e=>(0,c.WS)(e,this.displayBidShield)},{key:o.hb_safeframe,val:c.BI},{key:o.hb_s2sBidder,val:e=>e.s2sBidder},{key:o.hb_liv,val:e=>(0,c.qh)(e)?l.DY:(0,c.bU)(e)?l.LD:(0,c.tY)(e)?l.ol:l.nr},{key:o.hb_ub,val:e=>(0,c.u9)(e.cpm)},{key:o.hb_size,val:e=>e.size||e.width&&e.height&&`${e.width}x${e.height}`||"unknown"}],bidCpmAdjustment:this.applyDiscrepancies.bind(this)},this.triplelift={get storageAllowed(){return!0}},this.ix={storageAllowed:!0}}applyDiscrepancies(e,t){const i=(0,c.bU)(t),s=t.s2sBidder?`${t.s2sBidder}_s2s`:t.bidder,n=i&&"pubmatic"===s&&(0,r.DY)("test","outstream");if((0,r.DY)("forceBidder",s)||n){const e=20;return a.ZP.debug(`Forcing ${s} to win auction!`),e}let o;o=i?this.outstreamDiscrepancies||{}:t.mediaType===d.D.video?this.videoDiscrepancies||{}:this.bannerDiscrepancies||{};const l=e*((null==o?void 0:o[t.bidder])||1);return(0,c.DX)(l,this.sdef)}}var u=i(7475),p=i(2845);class b{constructor(e,t,i){this.model=e,this.adUnitId=t,this.houseFloor=i}adjustBids(e){return e.map(this.adjust.bind(this))}adjust(e){if(this[e.bidder]){this[e.bidder].bind(this)(e)}return e}[p.tO.uam](e){}[p.tO.indexExchange](e){e.params.bidFloor=this.calculateFloor(e),e.params.bidFloorCur="USD"}[p.tO.gumgum](e){e.params.bidfloor=this.calculateFloor(e)}[p.tO.google](e){}[p.tO.pubmatic](e){e.params.kadfloor=this.calculateFloor(e).toString()}[p.tO.rubicon](e){e.params.floor=this.calculateFloor(e)}[p.tO.triplelift](e){e.params.floor=this.calculateFloor(e)}[p.tO.S2S](e){e.params.floor=this.calculateFloor(e),e.params.iabOptouts=this.model.iabOptouts,(0,r.DY)("test","nativeS2S")&&e.isNative&&(e.params.floor=.01)}calculateFloor(e){if(this.houseFloor)return this.houseFloor;const t=e.isOutstream?d.D.outstream:d.D.banner;return u.CP.getBidderFloor(this.model,e.bidder,t,this.adUnitId)}}var m=(e=>(e.fixed="fixed",e.random="random",e))(m||{}),g=i(9909),f=i(8622),v=i(7609),_=i(6600),y=i(8387);class w{constructor(e){this.gppAdapter=e,this.usp=this.getUspConfig(),this.gpp=this.getGppConfig(),this.gdpr=this.getGdprConfig()}getUspConfig(){return{cmpApi:"iab",timeout:0}}getGppConfig(){return{cmpApi:"iab",timeout:0}}getGdprConfig(){if(this.gppAdapter.enableGdpr)return{cmpApi:"iab",timeout:8e3,allowAuctionWithoutConsent:!0}}}class B{constructor(e,t){var i,s;this.bidderSequence=m.fixed,this.enableSendAllBids=!1,this.maxRequestsPerOrigin=6,this.timeoutBuffer=500,this.cache={url:"https://prebid.adnxs.com/pbc/v1/cache"},this.enableTIDs=!1,this.minBidCacheTTL=0,this.eventHistoryTTL=30,this.auctionOptions={secondaryBidders:[p.tO.uam]},this.pageUrl=y.Z,this.userSync=this.getUserSync(e),"BR"!==(null==(i=null==e?void 0:e.geoLoc)?void 0:i.country_code)&&"CN"!==(null==(s=null==e?void 0:e.geoLoc)?void 0:s.country_code)||(this.userSync.syncEnabled=!1),this.consentManagement=new w(t),this.schain={validation:"strict",config:new f.Z(e)};const n=window.$adManagementConfig.web.keywords,r=e.categories.map((e=>e.iabCode)).filter((e=>e)),o=n&&n.sales_cat?n.sales_cat.split(",").map((e=>({id:e}))):[];this.ortb2={site:{name:e.title,domain:e.domain,cat:r,sectioncat:r,pagecat:r,page:y.Z,ref:document.referrer,keywords:null==n?void 0:n.sales_kw,privacypolicy:e.privacy_policy_link?1:0,search:void 0,mobile:1,content:{language:document.documentElement.lang.split("-")[0],cat:r,data:[{name:"gumgum.com",ext:{segtax:2},segment:o}]},ext:{}},user:{id:_.Wu.id,geo:{region:e.geoLoc.state,country:e.geoLoc.country_code},ext:{eids:(0,v.r)(_.Wu.id)}}},this.cache.url=`${e.videoCacheUrl}/c`||this.cache.url}getUserSync(e){return{auctionDelay:100,syncEnabled:!0,syncsPerBidder:3,enableOverride:!!g.Z.willGrowLoad(),filterSettings:{all:{bidders:"*",filter:"include"}},userIds:[{name:"unifiedId",params:{partner:"prebid",url:"//match.adsrvr.org/track/rid?ttd_pid=sne7dew&fmt=json"},storage:{type:"html5",name:"_unifiedId",expires:60}},{name:"pubCommonId",storage:{type:"cookie",name:"_pubCommonId",expires:1825}},{name:"identityLink",params:{pid:"2"},storage:{type:"html5",name:"_lr_env",expires:30}},{name:"pairId",params:{liveramp:{}},storage:{type:"html5",name:"_lr_pairId",expires:30}},{name:"sharedId",params:{syncTime:300},storage:{name:"sharedid",type:"html5",expires:28}},{name:"criteo",storage:{type:"html5",name:"criteo",expires:365}}]}}}var D=i(6057),C=i(953),x=i(8152),P=(e,t,i)=>new Promise(((s,n)=>{var r=e=>{try{a(i.next(e))}catch(e){n(e)}},o=e=>{try{a(i.throw(e))}catch(e){n(e)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,o);a((i=i.apply(e,t)).next())}));class F{constructor(e,t,i,s=window.pbjs){this.model=e,this.gpp=t,this.auctionHouse=i,this.pbjs=s,this.aliasBidders(s),s.setConfig(new B(e,t)),this.registerAdapters(e,t),this.addEventListeners(s),this.initBidTie(),s.bidderSettings=new h(e.discrepancies,e.videoDiscrepancies,e.outstreamDiscrepancies,e.displayBidShield,e.sdef),this.gpp.triggerLoadedStatus()}static loadPrebidImports(){return P(this,null,(function*(){const{default:e}=yield Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,942));return Promise.all([Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,5544)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,6568)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,6962)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,5416)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,851)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,6714)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,9379)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,8071)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,2859)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,9304)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,7280)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,1667)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,6664)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,6345)),Promise.all([i.e(3248),i.e(9598)]).then(i.bind(i,6673))]).then((()=>{e.processQueue()}))}))}requestBids(e,t){return P(this,null,(function*(){return new Promise(((i,o)=>{if(0===e.length)return i();const a=e.filter((e=>!e.isAuctionBlocked));if(a.forEach((e=>{s.Z.trigger(s.Z.events.slotBidRequested,e)})),(0,r.DY)("test","placeholders")||this.model.testSite)return i(this.emitBidReadyEvent(a,{}));const l=(0,n.r)((e=>{i(this.emitBidReadyEvent(a,e))}));this.getAdUnits(a).then((e=>{this.pbjs.requestBids({adUnits:e,auctionId:d.D.banner,timeout:t,bidsBackHandler:l})}))}))}))}getAdUnits(e){return P(this,null,(function*(){const t=[],i=e.map((e=>P(this,null,(function*(){var i;const s=yield e.adunits();s.forEach((t=>{t.ortb2Imp={ext:{data:{pbadslot:e.adUnitPath||"",adserver:{name:"gam",adslot:e.adUnitPath||""}}}}}));const n=s.map((t=>function(e,{sizes:t}){return e.bids=e.bids.filter((i=>!(!i.isOutstream&&!i.isIBV)||(!!e.mediaTypes.native||(e.mediaTypes.banner?!i.size||t.find((e=>!!i.size&&e[0]===i.size[0]&&e[1]===i.size[1])):void 0)))),e}(t,e))),r=new b(this.model,e.adUnitId,null==(i=this.auctionHouse.getHighestBidForSlot(e))?void 0:i.cpm);n.forEach((e=>{e.bids=r.adjustBids(e.bids),t.push(e)}))}))));return yield Promise.all(i),t}))}static countBiddersAboveFloor(e,t){const i=window.pbjs.getBidResponsesForAdUnitCode(e).bids;let s=0;for(const e of i){const i=e.isOutstream||e.isIBV?"outstream":e.mediaType;e.cpm>=u.CP.getFloor(t,d.D[i],(0,x.BL)(e.adUnitCode))&&s++}return s.toString()}emitBidReadyEvent(e,t){const i=e.map((e=>new D.d(this.model,e,t)));s.Z.trigger(s.Z.events.bidReady,i)}registerAdapter(e){this.pbjs.registerBidAdapter((()=>e),e.code)}addEventListeners(e){return e.onEvent(s.Z.events.bidRequested,(e=>{s.Z.trigger(s.Z.events.bidRequested,e)})),e.onEvent(s.Z.events.bidResponse,(e=>{const t=C.Z.getSlotById(e.adUnitCode);s.Z.trigger(s.Z.events.bidResponse,e,t)})),e.onEvent(s.Z.events.bidWon,(e=>{const t=C.Z.getSlotById(e.adUnitCode);s.Z.trigger(s.Z.events.bidWon,e,t)})),e.onEvent(s.Z.events.bidTimeout,(e=>{s.Z.trigger(s.Z.events.bidTimeout,e)})),e.onEvent(s.Z.events.auctionEnd,(e=>{s.Z.trigger(s.Z.events.auctionEnd,e)})),!0}initBidTie(){s.Z.on(s.Z.events.auctionEnd,(e=>{const t={};e.bidderRequests.forEach((e=>{e.bids.forEach((e=>{t[e.bidId]=e}))})),e.bidsReceived.forEach((e=>{const i=t[e.requestId];e.bidRequest=i})),this.auctionHouse.addBids(e.bidsReceived)}))}aliasBidders(e){return e.aliasBidder("ix","indexExchange"),!0}registerAdapters(e,t){return P(this,null,(function*(){if(e.uam&&["1","2"].includes(e.offering.id)){const{AmazonAdapter:s}=yield i.e(3322).then(i.bind(i,3322));this.registerAdapter(new s(e,t))}return!0}))}static getTargeting(e){return window.pbjs.getAdserverTargetingForAdUnitCode(e)}}},8622:(e,t,i)=>{i.d(t,{Z:()=>n});class s{constructor({asi:e,sid:t,hp:i}){this.asi=e,this.sid=t,this.hp=i}}class n{constructor({sellerId:e,offering:t}){if(this.ver="1.0",this.complete=1,this.nodes=[],!e)return;const i=new s({asi:`${t.offering_domain}`,sid:e,hp:1});this.nodes.push(i)}}},7609:(e,t,i)=>{i.d(t,{r:()=>n});var s=(e=>(e[e.browserBased=1]="browserBased",e[e.inAppID=2]="inAppID",e[e.personBased=3]="personBased",e))(s||{});function n(e){var t;const i=window.pbjs.getUserIdsAsEids()||[];window.$adManagementConfig.uid2&&i.unshift(new o(window.$adManagementConfig.uid2)),window.$adManagementConfig.publinkId&&i.push(new a(window.$adManagementConfig.publinkId));for(const s of i)e&&"pubcid.org"===s.source&&(null==(t=s.uids)?void 0:t.length)&&(s.uids[0].id=e);return i}class r{constructor(e,t){this.source=e,this.uids=t}}class o extends r{constructor(e){super("uidapi.com",[{id:e,atype:s.personBased,ext:{rtiPartner:"UID2"}}])}}class a extends r{constructor(e){super("epsilon.com",[{id:e,atype:s.personBased}])}}},8152:(e,t,i)=>{i.d(t,{Ay:()=>l,BL:()=>c,fC:()=>a});var s=i(5077),n=i(8490),r=i(953);const o={};function a(e){e.forEach((e=>{var t;if(!e.adUnitCode)return;const i=window.$adManagementConfig.web.model;n.f.addSlotLevelData(e,i);let a=o[e.adUnitCode]||l(e.adUnitCode);o[e.adUnitCode]=a,"instream"===(null==(t=e.mediaTypes.video)?void 0:t.context)&&(a=s.D.video);const d=r.Z.getSlotById(a);e.isInView=Boolean(null==d?void 0:d.onRail),e.refreshCount=null==d?void 0:d.refreshes,e.adunitPath=null==d?void 0:d.adUnitPath}))}const d=new RegExp(/_outstream_desktop|_outstream_mobile|_ibv_desktop|_ibv_mobile/);function l(e){let t=e.replace(d,"");return-1===t.indexOf("adhesion")&&(t=t.replace("desktop","btf")),t}function c(e){let t=e.replace(d,"");return t=t.replace(/_[0-9]_+/g,"_"),t}}}]);00%);
  color: #eb3649;
}
.menu ul ul li a:hover:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: -1px;
  width: 5px;
  background: #eb3649;
}
.menu ul li:hover > ul {
  display: block;
}
.body {
  padding-top: 26px;
}

.banner-full {
  padding-bottom: 20px;
}

.title {
  text-align: center;
  padding: 12px 0 12px;
}
.title.left {
  text-align: left;
  overflow: hidden;
  padding: 8px 0 31px;
}
.title.left h1 {
  float: left;
  padding-right: 20px;
}
.title.left .social-share {
  float: right;
  padding: 4px 0 0 30px;
}
.title h1 {
  margin: 0;
  line-height: normal;
  color: #000;
  font-size: 25px;
  font-weight: 700;
}

.row {
  font-size: 0;
  margin-left: -25px;
}
.row:after {
  content: "";
  display: block;
  clear: both;
}
.row > div {
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  line-height: 1.5em;
  padding-left: 25px;
  padding-bottom: 25px;
}
.row.nop {
  margin-left: 0;
}
.row.nop > div {
  padding-left: 0;
}
.row .col-56 {
  width: 50%;
}
.row .col-66 {
  width: 50%;
}
.row .col-6 {
  width: 50%;
}
.row .col-4 {
  width: 25%;
}
.row .col-3 {
  width: 33.3%;
}
.row .col-23 {
  width: 70.7%;
}
.row .col-13 {
  width: 29.3%;
  padding-left: 12px;
}
.row .col-2 {
  width: 44.5%;
}
.row .row > div {
  padding-bottom: 0;
}

.add-clock {
  text-align: center;
  padding: 20px 15px 24px;
}
.add-clock h4 {
  color: #313435;
  font-size: 21px;
  line-height: normal;
  padding: 8px 0 13px;
}

.box-shadow {
  background: #fff;
  border: 1px solid #d3d3d3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
.box-shadow .grey-head {
  margin: -1px;
}
.box-shadow + .box-shadow {
  margin-top: 20px;
}
.box-shadow + .banner-full {
  padding-bottom: 22px;
  margin-top: 20px;
}

.col-13 .arrows-links {
  padding-top: 17px;
  padding-bottom: 11px;
  margin-left: 2px;
}
.col-13 .box-shadow + .box-shadow {
  margin-top: 15px;
}

.head-icon {
  padding: 15px 15px 12px 57px;
  line-height: normal;
  position: relative;
  border-bottom: 1px solid #d3d3d3;
  color: #313435;
  font-size: 18px;
}
.head-icon.white {
  padding-left: 40px;
}
.head-icon .fa {
  position: absolute;
  left: 0;
  padding: 14px 0 0 20px;
  top: 0;
  color: #eb3649;
  font-size: 21px;
}
.head-icon .ico {
  position: absolute;
  left: 19px;
  top: 10px;
}

.icon-head {
  height: 35px;
  background: #eaeaea;
  color: #5f5f5f;
  line-height: 35px;
  padding: 0 17px;
  font-size: 15px;
  font-weight: 700;
  position: relative;
}
.icon-head.full:before {
  display: none;
}
.icon-head.full:after {
  display: none;
}
.icon-head:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 31px;
  background: #fff;
  right: 0;
}
.icon-head:before {
  content: "";
  position: absolute;
  top: 0;
  right: 31px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 35px 35px;
  border-color: transparent transparent #fff transparent;
}
.icon-head .ico {
  position: absolute;
  top: 8px;
  right: 6px;
  z-index: 9;
}

.grey-head {
  height: 35px;
  background: #eaeaea;
  color: #5f5f5f;
  line-height: 35px;
  padding: 0 17px;
  font-size: 15px;
  font-weight: 700;
}
.grey-head.red {
  background: #eb3649;
  color: #fff;
}
.grey-head.blue {
  background: #32c1c9;
  color: #fff;
}
.grey-head.dark {
  background: #a6a4a4;
  color: #fff;
}

.receive {
  border-top: 1px solid #d3d3d3;
  padding: 16px 18px 13px;
}
.receive label {
  padding: 0 0 10px;
  display: block;
}
.receive .box-form {
  padding: 0 2px 0 0;
}
.receive .box-form .with-btn input {
  padding-right: 60px;
}
.receive .ico {
  float: left;
  margin: 0 0 0 2px;
}
.receive fieldset {
  overflow: hidden;
  display: block;
  padding-left: 13px;
  margin-top: 5px;
  position: relative;
}

.daytime {
  text-align: center;
  padding: 20px 10px 4px 20px;
  background: #fff;
}
.daytime h3 {
  font-size: 22px;
  color: #313435;
  line-height: normal;
  padding: 3px 0 24px;
}
.daytime .ico {
  margin-bottom: 15px;
}
.daytime p {
  font-size: 13px;
  line-height: 15px;
  padding-bottom: 17px;
  color: #313435;
}
.daytime p strong {
  font-weight: bold;
  color: #eb3649;
}

.entry {
  padding: 13px 15px 16px 21px;
}
.entry:after {
  content: "";
  display: block;
  clear: both;
}
.entry .links {
  padding-top: 5px;
}
.entry .ico {
  float: left;
  margin-bottom: 1px;
  margin-right: 32px;
}
.entry h5 {
  color: #313435;
  font-size: 22px;
  line-height: normal;
  margin: 0 0 1px;
}
.entry .image {
  float: left;
  margin: -4px 25px 0 1px;
}
.entry.sm p {
  line-height: 16px;
  padding-bottom: 2px;
}
.entry.sm p + p {
  padding-top: 13px;
}

.inline-form {
  text-align: center;
  font-size: 0;
  padding: 25px 15px 25px 0;
}
.inline-form .btn {
  vertical-align: top;
  display: inline-block;
  margin: 0 5px;
}
.inline-form .crf-s {
  vertical-align: top;
  display: inline-block;
  margin: 0 5px;
}
.inline-form label {
  vertical-align: top;
  display: inline-block;
  font-size: 14px;
  margin: 0 5px;
  color: #5f5f5f;
  line-height: 35px;
}

.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}

.drop-holder {
  display: inline;
}
.drop-holder .trigger {
  display: none;
}

.arrows-links {
  padding: 14px 19px;
}
.arrows-links li {
  padding-top: 2px;
  padding-bottom: 8px;
  line-height: 20px;
}
.arrows-links a {
  padding-left: 18px;
  display: block;
  position: relative;
  line-height: 20px;
}
.arrows-links a:before {
  content: "\f0a9";
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  position: absolute;
  line-height: 14px;
  font-size: 14px;
  left: 0;
  top: 0;
  color: #eb3649;
}

.local-time {
  text-align: center;
  padding: 16px 5px 26px;
}
.local-time h4 {
  color: #313435;
  padding: 25px 0 0;
  margin-bottom: -2px;
  line-height: normal;
  font-size: 22px;
}
.local-time p {
  font-size: 14px;
}
.local-time .big-clock {
  width: 243px;
  height: 244px;
  margin: auto;
  margin-bottom: 17px;
}
.local-time .big-clock img {
  width: 100%;
  height: auto;
}
.local-time .big-clock + h4 + p {
  padding: 4px 0 43px;
}

.fast-links {
  border-top: 1px solid #d3d3d3;
  padding: 21px 30px 19px 20px;
  position: relative;
  z-index: 9;
  background: #fff;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
}
.fast-links li {
  padding-bottom: 2px;
}

.not-your {
  border-top: 1px solid #d3d3d3;
  line-height: 16px;
  padding: 13px 14px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
}

.banner {
  padding: 15px 0;
  text-align: center;
}

.hr {
  height: 4px;
  display: block;
  margin: 26px 0 49px;
  background: #4e5253;
}

.inline-links {
  padding: 0 15px 2px;
}
.inline-links h6 {
  font-weight: bold;
  color: #5f5f5f;
  font-size: 14px;
}
.inline-links ul {
  padding-bottom: 17px;
}
.inline-links:last-child {
  padding-bottom: 1px;
}

.tabs {
  height: 36px;
  border-bottom: 1px solid #cacaca;
  background-color: #f8f8f8;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
}
.tabs li {
  float: left;
  line-height: 37px;
}
.tabs li:first-child a {
  padding-left: 17px;
  padding-right: 15px;
}
.tabs a {
  padding: 0 12px 0 11px;
  text-decoration: none;
  float: left;
  color: #5f5f5f;
  font-size: 13px;
  height: 35px;
  font-weight: 700;
  border-right: 1px solid #cacaca;
  box-shadow: inset -1px 0 #fff;
}
.tabs .current a {
  height: 36px;
  background: #fff;
}

.localion-list {
  position: relative;
  overflow: hidden;
}
.localion-list:before {
  content: "";
  position: absolute;
  height: 10px;
  background: #fff;
  bottom: 0;
  left: 0;
  right: 30px;
}
.localion-list ul {
  padding: 7px 20px;
  max-height: 296px;
  overflow: auto;
}
.localion-list li {
  padding-bottom: 2px;
}

.banner-sidebar {
  text-align: center;
  padding: 20px 0 15px;
}

.box-form {
  padding: 15px 12px 2px 15px;
}
.box-form.sidebar {
  padding: 15px 18px 8px 20px;
}
.box-form.sidebar fieldset {
  margin-bottom: 10px;
}
.box-form.sidebar .crf-s {
  padding-left: 7px;
}
.box-form.sidebar input {
  padding-left: 7px;
}
.box-form label {
  color: #5f5f5f;
  font-size: 14px;
  display: block;
  font-weight: 700;
  padding-bottom: 7px;
}
.box-form fieldset {
  margin-bottom: 16px;
  position: relative;
}
.box-form input[type=text], input[type=password] {
  color: #5f5f5f;
  font-size: 14px;
  font-weight: 400;
  height: 35px;
  padding: 0 11px;
  line-height: 33px;
  width: 100%;
  background: #fff;
  border: 1px solid #b7b7b7;
}
.box-form .with-btn .btn {
  position: absolute;
  bottom: 0;
  height: 33px;
  right: 0;
  margin: 1px;
}
.box-form .with-btn input {
  padding-right: 80px;
}

.crf-s {
  height: 35px;
  background: #fff;
  color: #5f5f5f;
  position: relative;
  font-size: 14px;
  padding: 0 11px;
  line-height: 33px;
  border: 1px solid #b7b7b7;
  display: block;
  cursor: pointer;
  padding-right: 51px;
}
.crf-s:after {
  content: "\f107";
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  position: absolute;
  width: 35px;
  text-align: center;
  line-height: 33px;
  height: 33px;
  font-size: 30px;
  right: 0;
  top: 0;
  color: #5f5f5f;
  background-color: #eaeaea;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
}

.crf-sm {
  position: absolute;
  display: none;
  overflow: auto;
  max-height: 300px;
  z-index: 9999;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  margin-top: -1px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
.crf-sm li {
  cursor: pointer;
  color: #525252;
  line-height: 24px;
  padding: 5px 10px;
  font-size: 14px;
  border-bottom: 1px solid #d3d3d3;
}
.crf-sm li.hide-li {
  display: none;
}
.crf-sm li:last-child {
  border-bottom: 0;
}
.crf-sm li.selected {
  color: #176db3;
  font-weight: 700;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
}
.crf-sm li:hover {
  color: #176db3;
  font-weight: 700;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
}

.dropdown {
  display: none;
  position: absolute;
  top: 59px;
  left: -17px;
  width: 186px;
  background: #fff;
  border: 1px solid #d3d3d3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 999;
}
.dropdown:before {
  content: "";
  position: absolute;
  left: 28px;
  top: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #e5e5e5 transparent;
}
.dropdown:after {
  content: "";
  position: absolute;
  left: 30px;
  top: -8px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #fff transparent;
}

.footer {
  color: #929292;
  font-size: 14px;
  clear: both;
  line-height: 45px;
  padding: 22px 0 0;
}
.footer .containerfooter {
    margin-top:20px;
  padding: 27px 0;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
}
.footer .logo {
  float: right;
}

.col-56 .local-time {
  /*border-right: 1px solid #d3d3d3;*/
  padding-bottom: 100px;
  margin-bottom: -100px;
  margin-top: 1px;
  padding-top: 52px;
}

.box-links ul {
  padding-bottom: 0;
  margin-bottom: -6px;
}

.col-66 .tabs {
  margin-top: 1px;
  height: 35px;
}
.col-66 .tabs a {
  height: 34px;
}
.col-66 .tabs .current a {
  height: 35px;
}

.item:hover .dropdown {
  display: block;
}

.dropdown-lang li {
  border-bottom: 1px solid #d3d3d3;
  box-shadow: 0 1px 0 #fff;
  padding-top: 1px;
}
.dropdown-lang li a {
  padding: 15px 0 0 73px;
  position: relative;
  height: 58px;
  background: #f2f2f2;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
  display: block;
  line-height: 15px;
}
.dropdown-lang li a:hover {
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0, rgba(0, 0, 0, 0.06) 100%);
}
.dropdown-lang li a strong {
  margin-top: -1px;
}
.dropdown-lang li:last-child {
  border-bottom: 0;
  box-shadow: none;
}
.dropdown-lang li.current a {
  background: #fff;
}

.lang .dropdown-lang li span.ico {
  left: 17px;
  top: 16px;
}

body {
  overflow-x: hidden;
}

.mobile-only-inline {
  display: none;
}

.mobile-only {
  display: none;
}

.small-only {
  display: none !important;
}
.small-only.desktop-only {
  display: inline-block !important;
}
.small-onlyspan.desktop-only {
  display: inline !important;
}

span.small-only.desktop-only {
  display: inline !important;
}

@media screen and (min-width: 801px) and (max-width: 1070px) {
  .container {
    width: auto;
    padding: 0 15px;
  }

  .menu ul {
    margin: 0 -10px;
  }
  .menu a {
    font-size: 13px;
    padding: 0 11px 0 10px;
  }

  .user-right {
    margin-left: -20px;
  }
  .user-right .item {
    margin-left: 10px;
  }
  .user-right .item.lang {
    margin-left: 10px;
  }
}
@media screen and (max-width: 1070px) {
  .banner-full {
    padding-bottom: 17px;
  }

  .local-time .big-clock {
    width: 161px;
    margin: 11px auto -14px;
    height: 163px;
  }
  .local-time .big-clock + h4 + p {
    padding: 4px 20px;
  }
  .local-time h4 {
    font-size: 17px;
    padding: 31px 0 2px;
  }

  .row {
    margin-left: -20px;
  }
  .row .col-23 {
    width: 66.66%;
  }
  .row .col-13 {
    padding-left: 20px;
    width: 33.33%;
  }
  .row > div {
    padding-left: 20px;
  }
  .row .col-2 {
    width: 100%;
  }

  .container {
    width: auto;
    padding: 0 15px;
  }

  .desktop-only {
    display: none !important;
  }

  .footer {
    padding: 20px;
  }
  .footer .container {
    padding: 18px 0 0;
  }
  .footer .logo {
    margin-top: 3px;
    background-position: 0 -107px;
    height: 37px;
    width: 229px;
  }
}
@media screen and (max-width: 1070px) and (-webkit-min-device-pixel-ratio: 2), screen and (max-width: 1070px) and (min-resolution: 2dppx) {
  .footer .logo {
    background-size: 264.5px 448px;
    background-position: 0 -163px;
  }
}

@media screen and (max-width: 1070px) {
  .banner {
    padding: 4px 0 0;
  }

  .hr {
    margin: 30px 0;
  }

  .fast-links {
    padding: 12px 14px;
  }

  .inline-form {
    padding: 17px 20px 20px 10px;
  }
  .inline-form label {
    display: block;
    margin: -3px 0 -2px;
  }

  .banner-sidebar {
    padding: 15px 0;
  }

  .entry .ico {
    margin-right: 30px;
  }
  .entry .links {
    line-height: 21px;
    padding-top: 0;
  }

  .receive {
    padding: 10px 14px 3px;
    line-height: 16px;
  }
  .receive .ico {
    display: none;
  }
  .receive label {
    padding-bottom: 1px;
  }
  .receive fieldset {
    padding-left: 0;
  }

  .daytime {
    padding: 14px 10px 2px 20px;
  }
  .daytime h3 {
    font-size: 18px;
  }
  .daytime .ico {
    margin-bottom: 8px;
  }
  .daytime p {
    font-size: 12px;
    line-height: 15px;
    margin: 0 -2px;
    padding-bottom: 13px;
  }
  .daytime p br {
    display: none;
  }
  .daytime p + p {
    margin: 0 -10px;
  }
  .daytime p + p br {
    display: block;
  }

  .title.left {
    padding: 0;
  }
  .title.left .social-share {
    float: left;
    padding: 17px 0;
    clear: both;
    margin: 0;
  }

  .col-66 .tabs ul li {
    float: left;
  }
  .col-66 .tabs ul li:last-child a {
    border-right: 1px solid #cacaca;
    box-shadow: inset -1px 0 #fff;
  }

  span.small-only.desktop-only,
  .small-only.desktop-only {
    display: none !important;
  }

  .tabs ul {
    display: table;
    width: 100%;
  }
  .tabs ul li {
    float: none;
    display: table-cell;
    width: auto;
  }
  .tabs ul li a {
    display: block;
    float: none;
  }
  .tabs ul li:last-child a {
    border: 0;
    box-shadow: none;
  }

  .box-form .with-btn input {
    padding-right: 50px;
  }

  .nop .arrows-links a {
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 0;
  }
}
.show-tablet-only {
  display: none !important;
}

@media screen and (min-width: 600px) and (max-width: 800px) {
  .hide-tablet-only {
    display: none !important;
  }

  .show-tablet-only {
    display: inline !important;
  }
}
.mob-only {
  display: none;
}

@media screen and (max-width: 800px) {
  .col-66 .tabs {
    margin-top: 0;
    border-top: 1px solid #cacaca;
  }

  .hide-mob-only {
    display: none;
  }

  .mob-only {
    display: inline-block;
  }

  .title {
    padding: 0 0 20px;
  }
  .title.left {
    text-align: center;
    margin: -2px 0;
  }
  .title.left h1 {
    float: none;
  }
  .title.left .social-share {
    float: none;
    text-align: center;
    padding: 13px 0 20px;
  }

  .row .col-23 {
    width: 100%;
    margin-top: -7px;
  }
  .row .col-56 {
    width: 100%;
    float: none;
  }
  .row .col-66 {
    width: 100%;
    float: none;
  }
  .row .col-13 {
    width: 100%;
    padding-bottom: 20px;
  }
  .row .col-4 {
    width: 50%;
  }
  .row.nop > div.col-6 {
    width: 100%;
    padding-bottom: 0;
  }
  .row.nop > div.col-6 .arrows-links {
    padding-bottom: 0;
    margin-left: -2px;
    min-height: 0;
  }
  .row.nop > div.col-6 + div.col-6 .arrows-links {
    padding-top: 0;
    padding-bottom: 12px;
  }

  .entry {
    padding-left: 17px;
    padding-right: 17px;
  }
  .entry.sp {
    padding-left: 14px;
    padding-right: 14px;
  }
  .entry h5 {
    font-size: 18px;
    line-height: 21px;
    max-width: 125px;
    overflow: hidden;
    padding: 2px 0 0;
  }
  .entry .ico {
    margin-left: 6px;
    margin-right: 21px;
  }
  .entry p {
    line-height: 17px;
  }
  .entry .links {
    overflow: hidden;
    padding: 0;
    line-height: 17px;
  }

  .inline-form {
    padding: 18px 0 14px;
    margin: 0 -10px;
  }
  .inline-form .crf-s {
    padding-left: 10px;
    text-align: left;
    padding-right: 49px;
  }
  .inline-form .crf-s.noon {
    width: 165px;
  }
  .inline-form .crf-s.time {
    width: 95px;
  }
  .inline-form .btn {
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    max-width: 270px;
  }

  .fast-links {
    padding-top: 10px;
    padding-bottom: 14px;
  }

  .receive {
    padding: 13px 13px 0;
  }
  .receive .box-form {
    margin: 11px 0;
  }

  .daytime {
    padding: 25px 10px 14px;
  }
  .daytime .ico {
    margin-bottom: 11px;
  }
  .daytime h3 {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .mobile-only-inline {
    display: inline;
  }

  .container {
    width: auto;
    padding: 0 20px;
  }

  .header {
    padding: 14px 0 13px;
  }
  .header .logo {
    background-position: 0 -79px;
    height: 28px;
    width: 200px;
    height: 28px;
    width: 200px;
    float: none;
    margin: auto;
    display: block;
  }
}
@media screen and (max-width: 800px) and (-webkit-min-device-pixel-ratio: 2), screen and (max-width: 800px) and (min-resolution: 2dppx) {
  .header .logo {
    background-size: 264.5px 448px;
    background-position: 0 -74px;
  }
}

@media screen and (max-width: 800px) {
  .drop-holder {
    position: absolute;
    top: 3px;
    right: 16px;
    float: right;
    display: block;
  }
  .drop-holder .trigger {
    display: block;
    cursor: pointer;
  }

  .user-right {
    position: absolute;
    top: 38px;
    right: -5px;
    z-index: 99;
    width: 300px;
    padding: 17px 0 0;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    box-shadow: 1px 1.7px 5px rgba(0, 0, 0, 0.15);
    display: none;
  }
  .user-right:before {
    content: "";
    position: absolute;
    right: 8px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #e5e5e5 transparent;
  }
  .user-right:after {
    content: "";
    position: absolute;
    right: 10px;
    top: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
  }
  .user-right .dropdown {
    display: block;
    position: static;
    width: auto;
    height: auto;
    border: 0;
    background: none;
    box-shadow: inset 0 1px #fff;
    border-top: 1px solid #d3d3d3;
  }
  .user-right .dropdown:before {
    display: none;
  }
  .user-right .dropdown:after {
    display: none;
  }
  .user-right .item {
    border-bottom: 1px solid #d3d3d3;
    display: block;
    float: none;
    margin-left: 0;
    padding: 0 0 14px 52px;
    margin-bottom: 15px;
  }
  .user-right .item strong {
    margin-top: -1px;
  }
  .user-right .item .ico {
    top: 0;
    left: 15px;
  }
  .user-right .item .ico.ico-fa {
    top: -4px;
    width: 60px;
    left: 0;
  }
  .user-right .item.lang {
    height: auto;
    border-bottom: 0;
    padding: 0;
    margin: -16px 0 0;
  }
  .user-right .item.lang li {
    width: 25%;
    float: left;
    overflow: hidden;
    border: 0;
    padding-left: 1px;
    padding-top: 1px;
    background: none;
    box-shadow: inset 1px 0 #fff, inset 0 1px #fff;
    border-left: 1px solid #d3d3d3;
  }
  .user-right .item.lang li:first-child {
    border: 0;
    box-shadow: none;
  }
  .user-right .item.lang li span.ico {
    left: 16px;
  }
  .user-right .item.lang a {
    text-indent: -999em;
  }
  .user-right .item.lang > p {
    display: none;
  }
  .user-right .item.lang > .ico {
    display: none;
  }

  .social {
    clear: both;
    float: none;
    height: 60px;
    padding: 0;
    margin: 0;
    font-size: 0;
    box-shadow: inset 0 1px #fff;
    background: #f2f2f2;
    border-top: 1px solid #d3d3d3;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
    text-align: center;
  }
  .social a {
    float: none;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 14px 5px 0;
    font-size: 18px;
    line-height: 30px;
  }

  .menu {
    background: none;
    padding: 0;
    margin: 0;
    height: auto;
  }
  .menu .container {
    width: auto;
    position: static;
  }
  .menu .trigger {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    color: #525252;
    font-size: 21px;
    padding: 7px 20px;
    cursor: pointer;
  }
  .menu ul {
    display: none;
    position: absolute;
    top: 55px;
    left: 6px;
    width: 300px;
    background: #fff;
    border: 1px solid #d3d3d3;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    z-index: 999;
  }
  .menu ul:before {
    content: "";
    position: absolute;
    left: 8px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #e5e5e5 transparent;
  }
  .menu ul:after {
    content: "";
    position: absolute;
    left: 10px;
    top: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
  }
  .menu ul li {
    display: block;
    box-shadow: none;
    border: 0;
    border-bottom: 1px solid #d3d3d3;
  }
  .menu ul li:first-child {
    display: block;
    box-shadow: none;
    border: 0;
    border-bottom: 1px solid #d3d3d3;
  }
  .menu ul li:first-child:last-child {
    border-bottom: 0;
  }
  .menu ul li:last-child {
    border-bottom: 0;
  }
  .menu ul li.current a {
    background: #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
    color: #eb3649;
  }
  .menu ul li.current a:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    width: 5px;
    background: #eb3649;
  }
  .menu ul li:hover a {
    background: #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
    color: #eb3649;
  }
  .menu ul li:hover a:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    width: 5px;
    background: #eb3649;
  }
  .menu ul a {
    box-shadow: none;
    border: 0;
    display: block;
    background: none;
    font-size: 15px;
    text-align: left;
    box-shadow: inset 4px 0 #ededed;
    padding: 11px 17px 9px;
    height: auto;
    line-height: 19px;
    page-break-before: left;
    position: relative;
    font-weight: 700;
    color: #5f5f5f;
  }
  .menu ul a:hover {
    background: #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.06) 0, rgba(255, 255, 255, 0) 100%);
    color: #eb3649;
  }
  .menu ul a:hover:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    width: 5px;
    background: #eb3649;
  }

  .body {
    padding-top: 22px;
  }

  .footer p {
    font-size: 11px;
    line-height: 13px;
    border-top: 1px solid #d3d3d3;
    text-align: center;
    padding: 15px 0 0;
  }
  .footer .logo {
    float: none;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }

  .box-shadow + .banner-full {
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .box-shadow + .box-shadow {
    margin-top: 10px;
  }

  .col-56 .local-time {
    padding: 5px 0 13px !important;
    margin-bottom: -2px !important;
    margin: 0;
    border: 0;
    border-bottom: 1px solid #d3d3d3;
  }
  .col-56 .local-time .big-clock {
    margin-bottom: 6px;
  }

  .current-time label {
    margin-left: 2px;
  }

  .right-active .user-right {
    display: block;
  }

  .dropdown-lang li.current a {
    background: #f2f2f2;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0, rgba(0, 0, 0, 0.06) 100%);
  }
  .dropdown-lang li.current a:before {
    content: "\f00c";
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    position: absolute;
    text-align: center;
    right: 0;
    top: 0;
    width: 18px;
    font-size: 14px;
    color: #090;
    line-height: 18px;
    border-radius: 50%;
    margin: 7px 11px;
    text-indent: 0;
    height: 18px;
    z-index: 99;
    background-color: #fff;
    box-shadow: 0.5px 0.9px 3px rgba(0, 0, 0, 0.25);
  }

  .menu-active .menu ul {
    display: block;
  }
}
@media screen and (min-width: 600px) and (max-width: 767px) {
  .box-shadow {
    height: auto !important;
  }

  .title h1 {
    font-size: 20px;
  }

  .row .col-3 {
    width: 100%;
  }

  .current-time input {
    width: 250px;
  }
}
@media screen and (max-width: 599px) {
  .box-shadow {
    height: auto !important;
  }
  .box-shadow.min {
    min-height: 185px;
  }

  .row .col-3 {
    width: 100%;
  }
  .row .col-2.desktop-only..col-2 {
    width: 50%;
    display: inline-block !important;
  }
  .row > div {
    padding-bottom: 15px;
  }

  .grey-head {
    padding: 0 18px;
  }
  .grey-head.red {
    padding: 0 10px;
  }

  .footer {
    padding: 0 10px;
  }
  .footer .container {
    padding: 20px 0 0;
  }
  .footer p {
    padding: 18px 30px;
    font-size: 11px;
  }
  .footer .logo {
    margin-bottom: 24px;
    background-position: 0 -187px;
    height: 43px;
    width: 265px;
  }
}
@media screen and (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2), screen and (max-width: 599px) and (min-resolution: 2dppx) {
  .footer .logo {
    background-size: 264.5px 448px;
    background-position: 0 -243px;
  }
}

@media screen and (max-width: 599px) {
  .banner {
    padding: 0;
  }

  .box-links {
    padding-bottom: 5px;
  }
  .box-links .arrows-links {
    min-height: 0;
  }

  .hr {
    margin: 15px 0;
  }

  .arrows-links {
    min-height: 83px;
  }

  .local-time {
    padding: 23px 5px 20px;
  }
  .local-time img {
    width: 169px;
    height: auto;
  }
  .local-time h4 {
    font-size: 22px;
    padding-top: 15px;
  }

  .body {
    padding-top: 17px;
  }

  .title {
    padding: 0 15px 14px;
  }
  .title h1 {
    font-size: 21px;
  }

  .not-small {
    display: none !important;
  }

  .container {
    padding: 0 10px;
  }

  .current-time label {
    display: none;
  }
  .current-time button {
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
  }
  .current-time input {
    margin: 0;
    width: 100%;
    padding-right: 50px;
  }
  /*.current-time form > input {
    display: none;
  }*/
  .current-time #TopLocation {
    display: none;
  }
  .small-only {
    display: block !important;
  }

  .desktop-only.small-only {
    display: inherit !important;
  }

  .tabs ul {
    display: block;
  }
  .tabs ul li {
    float: left;
  }
  .tabs ul li:last-child a {
    border-right: 1px solid #cacaca;
    box-shadow: inset -1px 0 #fff;
  }

  .header .logo-wrap {
    /*overflow: hidden;
    width: 167px;
    margin: auto;*/
        overflow: hidden;
    width: 220px;
    margin: 0 auto;
    text-align: center;
  }
  .header .logo-wrap .logo {
    /*margin-left: -33px;*/
  }
}

/*autocomplete*/
.autocomplete-suggestions { border: 0px solid #999; background: #FFF; cursor: default; overflow: auto; -webkit-box-shadow: 1px 4px 3px rgba(50, 50, 50, 0.64); -moz-box-shadow: 1px 4px 3px rgba(50, 50, 50, 0.64); box-shadow: 1px 4px 3px rgba(50, 50, 50, 0.64); }
.autocomplete-suggestion { padding: 2px 5px; white-space: nowrap; overflow: hidden; font-size:1.2em }
.autocomplete-no-suggestion { padding: 2px 5px;}
.autocomplete-selected { /*background: #F0F0F0;*/ background:#CCFFCC }
.autocomplete-suggestions strong { font-weight: bold; color: #000; }
.autocomplete-group { padding: 2px 5px; color: rgb(255, 153, 0) ; }
.autocomplete-group strong { font-weight: bold; font-size: 16px; color: #000; display: block; border-bottom: 1px solid #000; color: #3B5998 ;}

@media (min-width:300px) {
    .autocomplete-suggestion { font-size:1.3em }
}

.searcherror::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            color:    #ff0000;
}

.searcherror:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
           color:    #ff0000;
           opacity:  1;
}
.searcherror::-moz-placeholder { /* Mozilla Firefox 19+ */
           color:    #ff0000;
           opacity:  1;
}
.searcherror:-ms-input-placeholder { /* Internet Explorer 10-11 */
           color:    #ff0000;
}

.fontTS {
    font-size: 3em;
}

.h2 {
    font-size:1.5em;
    margin-top: 5px;
    margin-bottom: 10px;
    border-bottom: solid 2px #a8a8a8;
    color: black
}

.p {
        /*margin-top:.4em;
    margin-bottom:.4em*/
}

p {
    margin-bottom:1em;
    margin-top:1em
}

.mediumtxt {
    font-size:12pt
}
.largertxt {
    font-size:14pt
}

.hdrwl {
    margin-top: 5px;
    border-bottom: 2px solid #848484;
    font-weight: Bold;
}

.padtbl td {
    padding:5px
}

.hdrwc {
    background-color: #EC364A;
    color: #f2f2f2;
    padding: 5px;
}

.hc {
    margin-top:5px; 
    margin-bottom:5px
}

td.plannerday {
    text-align: center;
    color: #000000;
    background-color: #CCFFCC;
}

td.plannerevening {
    text-align: center;
    color: #000000;
    background-color: #FFFFCC;
}

td.plannernight {
    text-align: center;
    color: #000000;
       background-color: #FFCCCC;
}/*!
 *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-display: fallback;font-family:'FontAwesome';src:url('/fonts/fontawesome-webfont.eot?v=4.6.3');src:url('/fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'),url('/fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'),url('/fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'),url('/fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'),url('/fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\f000"}.fa-music:before{content:"\f001"}.fa-search:before{content:"\f002"}.fa-envelope-o:before{content:"\f003"}.fa-heart:before{content:"\f004"}.fa-star:before{content:"\f005"}.fa-star-o:before{content:"\f006"}.fa-user:before{content:"\f007"}.fa-film:before{content:"\f008"}.fa-th-large:before{content:"\f009"}.fa-th:before{content:"\f00a"}.fa-th-list:before{content:"\f00b"}.fa-check:before{content:"\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\f00d"}.fa-search-plus:before{content:"\f00e"}.fa-search-minus:before{content:"\f010"}.fa-power-off:before{content:"\f011"}.fa-signal:before{content:"\f012"}.fa-gear:before,.fa-cog:before{content:"\f013"}.fa-trash-o:before{content:"\f014"}.fa-home:before{content:"\f015"}.fa-file-o:before{content:"\f016"}.fa-clock-o:before{content:"\f017"}.fa-road:before{content:"\f018"}.fa-download:before{content:"\f019"}.fa-arrow-circle-o-down:before{content:"\f01a"}.fa-arrow-circle-o-up:before{content:"\f01b"}.fa-inbox:before{content:"\f01c"}.fa-play-circle-o:before{content:"\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\f01e"}.fa-refresh:before{content:"\f021"}.fa-list-alt:before{content:"\f022"}.fa-lock:before{content:"\f023"}.fa-flag:before{content:"\f024"}.fa-headphones:before{content:"\f025"}.fa-volume-off:before{content:"\f026"}.fa-volume-down:before{content:"\f027"}.fa-volume-up:before{content:"\f028"}.fa-qrcode:before{content:"\f029"}.fa-barcode:before{content:"\f02a"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-book:before{content:"\f02d"}.fa-bookmark:before{content:"\f02e"}.fa-print:before{content:"\f02f"}.fa-camera:before{content:"\f030"}.fa-font:before{content:"\f031"}.fa-bold:before{content:"\f032"}.fa-italic:before{content:"\f033"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-align-left:before{content:"\f036"}.fa-align-center:before{content:"\f037"}.fa-align-right:before{content:"\f038"}.fa-align-justify:before{content:"\f039"}.fa-list:before{content:"\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\f03b"}.fa-indent:before{content:"\f03c"}.fa-video-camera:before{content:"\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\f03e"}.fa-pencil:before{content:"\f040"}.fa-map-marker:before{content:"\f041"}.fa-adjust:before{content:"\f042"}.fa-tint:before{content:"\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\f044"}.fa-share-square-o:before{content:"\f045"}.fa-check-square-o:before{content:"\f046"}.fa-arrows:before{content:"\f047"}.fa-step-backward:before{content:"\f048"}.fa-fast-backward:before{content:"\f049"}.fa-backward:before{content:"\f04a"}.fa-play:before{content:"\f04b"}.fa-pause:before{content:"\f04c"}.fa-stop:before{content:"\f04d"}.fa-forward:before{content:"\f04e"}.fa-fast-forward:before{content:"\f050"}.fa-step-forward:before{content:"\f051"}.fa-eject:before{content:"\f052"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-plus-circle:before{content:"\f055"}.fa-minus-circle:before{content:"\f056"}.fa-times-circle:before{content:"\f057"}.fa-check-circle:before{content:"\f058"}.fa-question-circle:before{content:"\f059"}.fa-info-circle:before{content:"\f05a"}.fa-crosshairs:before{content:"\f05b"}.fa-times-circle-o:before{content:"\f05c"}.fa-check-circle-o:before{content:"\f05d"}.fa-ban:before{content:"\f05e"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrow-down:before{content:"\f063"}.fa-mail-forward:before,.fa-share:before{content:"\f064"}.fa-expand:before{content:"\f065"}.fa-compress:before{content:"\f066"}.fa-plus:before{content:"\f067"}.fa-minus:before{content:"\f068"}.fa-asterisk:before{content:"\f069"}.fa-exclamation-circle:before{content:"\f06a"}.fa-gift:before{content:"\f06b"}.fa-leaf:before{content:"\f06c"}.fa-fire:before{content:"\f06d"}.fa-eye:before{content:"\f06e"}.fa-eye-slash:before{content:"\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\f071"}.fa-plane:before{content:"\f072"}.fa-calendar:before{content:"\f073"}.fa-random:before{content:"\f074"}.fa-comment:before{content:"\f075"}.fa-magnet:before{content:"\f076"}.fa-chevron-up:before{content:"\f077"}.fa-chevron-down:before{content:"\f078"}.fa-retweet:before{content:"\f079"}.fa-shopping-cart:before{content:"\f07a"}.fa-folder:before{content:"\f07b"}.fa-folder-open:before{content:"\f07c"}.fa-arrows-v:before{content:"\f07d"}.fa-arrows-h:before{content:"\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\f080"}.fa-twitter-square:before{content:"\f081"}.fa-facebook-square:before{content:"\f082"}.fa-camera-retro:before{content:"\f083"}.fa-key:before{content:"\f084"}.fa-gears:before,.fa-cogs:before{content:"\f085"}.fa-comments:before{content:"\f086"}.fa-thumbs-o-up:before{content:"\f087"}.fa-thumbs-o-down:before{content:"\f088"}.fa-star-half:before{content:"\f089"}.fa-heart-o:before{content:"\f08a"}.fa-sign-out:before{content:"\f08b"}.fa-linkedin-square:before{content:"\f08c"}.fa-thumb-tack:before{content:"\f08d"}.fa-external-link:before{content:"\f08e"}.fa-sign-in:before{content:"\f090"}.fa-trophy:before{content:"\f091"}.fa-github-square:before{content:"\f092"}.fa-upload:before{content:"\f093"}.fa-lemon-o:before{content:"\f094"}.fa-phone:before{content:"\f095"}.fa-square-o:before{content:"\f096"}.fa-bookmark-o:before{content:"\f097"}.fa-phone-square:before{content:"\f098"}.fa-twitter:before{content:"\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\f09a"}.fa-github:before{content:"\f09b"}.fa-unlock:before{content:"\f09c"}.fa-credit-card:before{content:"\f09d"}.fa-feed:before,.fa-rss:before{content:"\f09e"}.fa-hdd-o:before{content:"\f0a0"}.fa-bullhorn:before{content:"\f0a1"}.fa-bell:before{content:"\f0f3"}.fa-certificate:before{content:"\f0a3"}.fa-hand-o-right:before{content:"\f0a4"}.fa-hand-o-left:before{content:"\f0a5"}.fa-hand-o-up:before{content:"\f0a6"}.fa-hand-o-down:before{content:"\f0a7"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-globe:before{content:"\f0ac"}.fa-wrench:before{content:"\f0ad"}.fa-tasks:before{content:"\f0ae"}.fa-filter:before{content:"\f0b0"}.fa-briefcase:before{content:"\f0b1"}.fa-arrows-alt:before{content:"\f0b2"}.fa-group:before,.fa-users:before{content:"\f0c0"}.fa-chain:before,.fa-link:before{content:"\f0c1"}.fa-cloud:before{content:"\f0c2"}.fa-flask:before{content:"\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\f0c5"}.fa-paperclip:before{content:"\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\f0c7"}.fa-square:before{content:"\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\f0c9"}.fa-list-ul:before{content:"\f0ca"}.fa-list-ol:before{content:"\f0cb"}.fa-strikethrough:before{content:"\f0cc"}.fa-underline:before{content:"\f0cd"}.fa-table:before{content:"\f0ce"}.fa-magic:before{content:"\f0d0"}.fa-truck:before{content:"\f0d1"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-square:before{content:"\f0d3"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-plus:before{content:"\f0d5"}.fa-money:before{content:"\f0d6"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-up:before{content:"\f0d8"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-columns:before{content:"\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\f0de"}.fa-envelope:before{content:"\f0e0"}.fa-linkedin:before{content:"\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\f0e4"}.fa-comment-o:before{content:"\f0e5"}.fa-comments-o:before{content:"\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\f0e7"}.fa-sitemap:before{content:"\f0e8"}.fa-umbrella:before{content:"\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\f0ea"}.fa-lightbulb-o:before{content:"\f0eb"}.fa-exchange:before{content:"\f0ec"}.fa-cloud-download:before{content:"\f0ed"}.fa-cloud-upload:before{content:"\f0ee"}.fa-user-md:before{content:"\f0f0"}.fa-stethoscope:before{content:"\f0f1"}.fa-suitcase:before{content:"\f0f2"}.fa-bell-o:before{content:"\f0a2"}.fa-coffee:before{content:"\f0f4"}.fa-cutlery:before{content:"\f0f5"}.fa-file-text-o:before{content:"\f0f6"}.fa-building-o:before{content:"\f0f7"}.fa-hospital-o:before{content:"\f0f8"}.fa-ambulance:before{content:"\f0f9"}.fa-medkit:before{content:"\f0fa"}.fa-fighter-jet:before{content:"\f0fb"}.fa-beer:before{content:"\f0fc"}.fa-h-square:before{content:"\f0fd"}.fa-plus-square:before{content:"\f0fe"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angle-down:before{content:"\f107"}.fa-desktop:before{content:"\f108"}.fa-laptop:before{content:"\f109"}.fa-tablet:before{content:"\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\f10b"}.fa-circle-o:before{content:"\f10c"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-spinner:before{content:"\f110"}.fa-circle:before{content:"\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\f112"}.fa-github-alt:before{content:"\f113"}.fa-folder-o:before{content:"\f114"}.fa-folder-open-o:before{content:"\f115"}.fa-smile-o:before{content:"\f118"}.fa-frown-o:before{content:"\f119"}.fa-meh-o:before{content:"\f11a"}.fa-gamepad:before{content:"\f11b"}.fa-keyboard-o:before{content:"\f11c"}.fa-flag-o:before{content:"\f11d"}.fa-flag-checkered:before{content:"\f11e"}.fa-terminal:before{content:"\f120"}.fa-code:before{content:"\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\f123"}.fa-location-arrow:before{content:"\f124"}.fa-crop:before{content:"\f125"}.fa-code-fork:before{content:"\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\f127"}.fa-question:before{content:"\f128"}.fa-info:before{content:"\f129"}.fa-exclamation:before{content:"\f12a"}.fa-superscript:before{content:"\f12b"}.fa-subscript:before{content:"\f12c"}.fa-eraser:before{content:"\f12d"}.fa-puzzle-piece:before{content:"\f12e"}.fa-microphone:before{content:"\f130"}.fa-microphone-slash:before{content:"\f131"}.fa-shield:before{content:"\f132"}.fa-calendar-o:before{content:"\f133"}.fa-fire-extinguisher:before{content:"\f134"}.fa-rocket:before{content:"\f135"}.fa-maxcdn:before{content:"\f136"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-html5:before{content:"\f13b"}.fa-css3:before{content:"\f13c"}.fa-anchor:before{content:"\f13d"}.fa-unlock-alt:before{content:"\f13e"}.fa-bullseye:before{content:"\f140"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-rss-square:before{content:"\f143"}.fa-play-circle:before{content:"\f144"}.fa-ticket:before{content:"\f145"}.fa-minus-square:before{content:"\f146"}.fa-minus-square-o:before{content:"\f147"}.fa-level-up:before{content:"\f148"}.fa-level-down:before{content:"\f149"}.fa-check-square:before{content:"\f14a"}.fa-pencil-square:before{content:"\f14b"}.fa-external-link-square:before{content:"\f14c"}.fa-share-square:before{content:"\f14d"}.fa-compass:before{content:"\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\f152"}.fa-euro:before,.fa-eur:before{content:"\f153"}.fa-gbp:before{content:"\f154"}.fa-dollar:before,.fa-usd:before{content:"\f155"}.fa-rupee:before,.fa-inr:before{content:"\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\f158"}.fa-won:before,.fa-krw:before{content:"\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\f15a"}.fa-file:before{content:"\f15b"}.fa-file-text:before{content:"\f15c"}.fa-sort-alpha-asc:before{content:"\f15d"}.fa-sort-alpha-desc:before{content:"\f15e"}.fa-sort-amount-asc:before{content:"\f160"}.fa-sort-amount-desc:before{content:"\f161"}.fa-sort-numeric-asc:before{content:"\f162"}.fa-sort-numeric-desc:before{content:"\f163"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbs-down:before{content:"\f165"}.fa-youtube-square:before{content:"\f166"}.fa-youtube:before{content:"\f167"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-youtube-play:before{content:"\f16a"}.fa-dropbox:before{content:"\f16b"}.fa-stack-overflow:before{content:"\f16c"}.fa-instagram:before{content:"\f16d"}.fa-flickr:before{content:"\f16e"}.fa-adn:before{content:"\f170"}.fa-bitbucket:before{content:"\f171"}.fa-bitbucket-square:before{content:"\f172"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-long-arrow-down:before{content:"\f175"}.fa-long-arrow-up:before{content:"\f176"}.fa-long-arrow-left:before{content:"\f177"}.fa-long-arrow-right:before{content:"\f178"}.fa-apple:before{content:"\f179"}.fa-windows:before{content:"\f17a"}.fa-android:before{content:"\f17b"}.fa-linux:before{content:"\f17c"}.fa-dribbble:before{content:"\f17d"}.fa-skype:before{content:"\f17e"}.fa-foursquare:before{content:"\f180"}.fa-trello:before{content:"\f181"}.fa-female:before{content:"\f182"}.fa-male:before{content:"\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\f184"}.fa-sun-o:before{content:"\f185"}.fa-moon-o:before{content:"\f186"}.fa-archive:before{content:"\f187"}.fa-bug:before{content:"\f188"}.fa-vk:before{content:"\f189"}.fa-weibo:before{content:"\f18a"}.fa-renren:before{content:"\f18b"}.fa-pagelines:before{content:"\f18c"}.fa-stack-exchange:before{content:"\f18d"}.fa-arrow-circle-o-right:before{content:"\f18e"}.fa-arrow-circle-o-left:before{content:"\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\f191"}.fa-dot-circle-o:before{content:"\f192"}.fa-wheelchair:before{content:"\f193"}.fa-vimeo-square:before{content:"\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\f195"}.fa-plus-square-o:before{content:"\f196"}.fa-space-shuttle:before{content:"\f197"}.fa-slack:before{content:"\f198"}.fa-envelope-square:before{content:"\f199"}.fa-wordpress:before{content:"\f19a"}.fa-openid:before{content:"\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\f19d"}.fa-yahoo:before{content:"\f19e"}.fa-google:before{content:"\f1a0"}.fa-reddit:before{content:"\f1a1"}.fa-reddit-square:before{content:"\f1a2"}.fa-stumbleupon-circle:before{content:"\f1a3"}.fa-stumbleupon:before{content:"\f1a4"}.fa-delicious:before{content:"\f1a5"}.fa-digg:before{content:"\f1a6"}.fa-pied-piper-pp:before{content:"\f1a7"}.fa-pied-piper-alt:before{content:"\f1a8"}.fa-drupal:before{content:"\f1a9"}.fa-joomla:before{content:"\f1aa"}.fa-language:before{content:"\f1ab"}.fa-fax:before{content:"\f1ac"}.fa-building:before{content:"\f1ad"}.fa-child:before{content:"\f1ae"}.fa-paw:before{content:"\f1b0"}.fa-spoon:before{content:"\f1b1"}.fa-cube:before{content:"\f1b2"}.fa-cubes:before{content:"\f1b3"}.fa-behance:before{content:"\f1b4"}.fa-behance-square:before{content:"\f1b5"}.fa-steam:before{content:"\f1b6"}.fa-steam-square:before{content:"\f1b7"}.fa-recycle:before{content:"\f1b8"}.fa-automobile:before,.fa-car:before{content:"\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\f1ba"}.fa-tree:before{content:"\f1bb"}.fa-spotify:before{content:"\f1bc"}.fa-deviantart:before{content:"\f1bd"}.fa-soundcloud:before{content:"\f1be"}.fa-database:before{content:"\f1c0"}.fa-file-pdf-o:before{content:"\f1c1"}.fa-file-word-o:before{content:"\f1c2"}.fa-file-excel-o:before{content:"\f1c3"}.fa-file-powerpoint-o:before{content:"\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\f1c8"}.fa-file-code-o:before{content:"\f1c9"}.fa-vine:before{content:"\f1ca"}.fa-codepen:before{content:"\f1cb"}.fa-jsfiddle:before{content:"\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\f1cd"}.fa-circle-o-notch:before{content:"\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\f1d0"}.fa-ge:before,.fa-empire:before{content:"\f1d1"}.fa-git-square:before{content:"\f1d2"}.fa-git:before{content:"\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\f1d4"}.fa-tencent-weibo:before{content:"\f1d5"}.fa-qq:before{content:"\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\f1d9"}.fa-history:before{content:"\f1da"}.fa-circle-thin:before{content:"\f1db"}.fa-header:before{content:"\f1dc"}.fa-paragraph:before{content:"\f1dd"}.fa-sliders:before{content:"\f1de"}.fa-share-alt:before{content:"\f1e0"}.fa-share-alt-square:before{content:"\f1e1"}.fa-bomb:before{content:"\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\f1e3"}.fa-tty:before{content:"\f1e4"}.fa-binoculars:before{content:"\f1e5"}.fa-plug:before{content:"\f1e6"}.fa-slideshare:before{content:"\f1e7"}.fa-twitch:before{content:"\f1e8"}.fa-yelp:before{content:"\f1e9"}.fa-newspaper-o:before{content:"\f1ea"}.fa-wifi:before{content:"\f1eb"}.fa-calculator:before{content:"\f1ec"}.fa-paypal:before{content:"\f1ed"}.fa-google-wallet:before{content:"\f1ee"}.fa-cc-visa:before{content:"\f1f0"}.fa-cc-mastercard:before{content:"\f1f1"}.fa-cc-discover:before{content:"\f1f2"}.fa-cc-amex:before{content:"\f1f3"}.fa-cc-paypal:before{content:"\f1f4"}.fa-cc-stripe:before{content:"\f1f5"}.fa-bell-slash:before{content:"\f1f6"}.fa-bell-slash-o:before{content:"\f1f7"}.fa-trash:before{content:"\f1f8"}.fa-copyright:before{content:"\f1f9"}.fa-at:before{content:"\f1fa"}.fa-eyedropper:before{content:"\f1fb"}.fa-paint-brush:before{content:"\f1fc"}.fa-birthday-cake:before{content:"\f1fd"}.fa-area-chart:before{content:"\f1fe"}.fa-pie-chart:before{content:"\f200"}.fa-line-chart:before{content:"\f201"}.fa-lastfm:before{content:"\f202"}.fa-lastfm-square:before{content:"\f203"}.fa-toggle-off:before{content:"\f204"}.fa-toggle-on:before{content:"\f205"}.fa-bicycle:before{content:"\f206"}.fa-bus:before{content:"\f207"}.fa-ioxhost:before{content:"\f208"}.fa-angellist:before{content:"\f209"}.fa-cc:before{content:"\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\f20b"}.fa-meanpath:before{content:"\f20c"}.fa-buysellads:before{content:"\f20d"}.fa-connectdevelop:before{content:"\f20e"}.fa-dashcube:before{content:"\f210"}.fa-forumbee:before{content:"\f211"}.fa-leanpub:before{content:"\f212"}.fa-sellsy:before{content:"\f213"}.fa-shirtsinbulk:before{content:"\f214"}.fa-simplybuilt:before{content:"\f215"}.fa-skyatlas:before{content:"\f216"}.fa-cart-plus:before{content:"\f217"}.fa-cart-arrow-down:before{content:"\f218"}.fa-diamond:before{content:"\f219"}.fa-ship:before{content:"\f21a"}.fa-user-secret:before{content:"\f21b"}.fa-motorcycle:before{content:"\f21c"}.fa-street-view:before{content:"\f21d"}.fa-heartbeat:before{content:"\f21e"}.fa-venus:before{content:"\f221"}.fa-mars:before{content:"\f222"}.fa-mercury:before{content:"\f223"}.fa-intersex:before,.fa-transgender:before{content:"\f224"}.fa-transgender-alt:before{content:"\f225"}.fa-venus-double:before{content:"\f226"}.fa-mars-double:before{content:"\f227"}.fa-venus-mars:before{content:"\f228"}.fa-mars-stroke:before{content:"\f229"}.fa-mars-stroke-v:before{content:"\f22a"}.fa-mars-stroke-h:before{content:"\f22b"}.fa-neuter:before{content:"\f22c"}.fa-genderless:before{content:"\f22d"}.fa-facebook-official:before{content:"\f230"}.fa-pinterest-p:before{content:"\f231"}.fa-whatsapp:before{content:"\f232"}.fa-server:before{content:"\f233"}.fa-user-plus:before{content:"\f234"}.fa-user-times:before{content:"\f235"}.fa-hotel:before,.fa-bed:before{content:"\f236"}.fa-viacoin:before{content:"\f237"}.fa-train:before{content:"\f238"}.fa-subway:before{content:"\f239"}.fa-medium:before{content:"\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\f23b"}.fa-optin-monster:before{content:"\f23c"}.fa-opencart:before{content:"\f23d"}.fa-expeditedssl:before{content:"\f23e"}.fa-battery-4:before,.fa-battery-full:before{content:"\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\f244"}.fa-mouse-pointer:before{content:"\f245"}.fa-i-cursor:before{content:"\f246"}.fa-object-group:before{content:"\f247"}.fa-object-ungroup:before{content:"\f248"}.fa-sticky-note:before{content:"\f249"}.fa-sticky-note-o:before{content:"\f24a"}.fa-cc-jcb:before{content:"\f24b"}.fa-cc-diners-club:before{content:"\f24c"}.fa-clone:before{content:"\f24d"}.fa-balance-scale:before{content:"\f24e"}.fa-hourglass-o:before{content:"\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\f253"}.fa-hourglass:before{content:"\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\f256"}.fa-hand-scissors-o:before{content:"\f257"}.fa-hand-lizard-o:before{content:"\f258"}.fa-hand-spock-o:before{content:"\f259"}.fa-hand-pointer-o:before{content:"\f25a"}.fa-hand-peace-o:before{content:"\f25b"}.fa-trademark:before{content:"\f25c"}.fa-registered:before{content:"\f25d"}.fa-creative-commons:before{content:"\f25e"}.fa-gg:before{content:"\f260"}.fa-gg-circle:before{content:"\f261"}.fa-tripadvisor:before{content:"\f262"}.fa-odnoklassniki:before{content:"\f263"}.fa-odnoklassniki-square:before{content:"\f264"}.fa-get-pocket:before{content:"\f265"}.fa-wikipedia-w:before{content:"\f266"}.fa-safari:before{content:"\f267"}.fa-chrome:before{content:"\f268"}.fa-firefox:before{content:"\f269"}.fa-opera:before{content:"\f26a"}.fa-internet-explorer:before{content:"\f26b"}.fa-tv:before,.fa-television:before{content:"\f26c"}.fa-contao:before{content:"\f26d"}.fa-500px:before{content:"\f26e"}.fa-amazon:before{content:"\f270"}.fa-calendar-plus-o:before{content:"\f271"}.fa-calendar-minus-o:before{content:"\f272"}.fa-calendar-times-o:before{content:"\f273"}.fa-calendar-check-o:before{content:"\f274"}.fa-industry:before{content:"\f275"}.fa-map-pin:before{content:"\f276"}.fa-map-signs:before{content:"\f277"}.fa-map-o:before{content:"\f278"}.fa-map:before{content:"\f279"}.fa-commenting:before{content:"\f27a"}.fa-commenting-o:before{content:"\f27b"}.fa-houzz:before{content:"\f27c"}.fa-vimeo:before{content:"\f27d"}.fa-black-tie:before{content:"\f27e"}.fa-fonticons:before{content:"\f280"}.fa-reddit-alien:before{content:"\f281"}.fa-edge:before{content:"\f282"}.fa-credit-card-alt:before{content:"\f283"}.fa-codiepie:before{content:"\f284"}.fa-modx:before{content:"\f285"}.fa-fort-awesome:before{content:"\f286"}.fa-usb:before{content:"\f287"}.fa-product-hunt:before{content:"\f288"}.fa-mixcloud:before{content:"\f289"}.fa-scribd:before{content:"\f28a"}.fa-pause-circle:before{content:"\f28b"}.fa-pause-circle-o:before{content:"\f28c"}.fa-stop-circle:before{content:"\f28d"}.fa-stop-circle-o:before{content:"\f28e"}.fa-shopping-bag:before{content:"\f290"}.fa-shopping-basket:before{content:"\f291"}.fa-hashtag:before{content:"\f292"}.fa-bluetooth:before{content:"\f293"}.fa-bluetooth-b:before{content:"\f294"}.fa-percent:before{content:"\f295"}.fa-gitlab:before{content:"\f296"}.fa-wpbeginner:before{content:"\f297"}.fa-wpforms:before{content:"\f298"}.fa-envira:before{content:"\f299"}.fa-universal-access:before{content:"\f29a"}.fa-wheelchair-alt:before{content:"\f29b"}.fa-question-circle-o:before{content:"\f29c"}.fa-blind:before{content:"\f29d"}.fa-audio-description:before{content:"\f29e"}.fa-volume-control-phone:before{content:"\f2a0"}.fa-braille:before{content:"\f2a1"}.fa-assistive-listening-systems:before{content:"\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\f2a4"}.fa-glide:before{content:"\f2a5"}.fa-glide-g:before{content:"\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\f2a7"}.fa-low-vision:before{content:"\f2a8"}.fa-viadeo:before{content:"\f2a9"}.fa-viadeo-square:before{content:"\f2aa"}.fa-snapchat:before{content:"\f2ab"}.fa-snapchat-ghost:before{content:"\f2ac"}.fa-snapchat-square:before{content:"\f2ad"}.fa-pied-piper:before{content:"\f2ae"}.fa-first-order:before{content:"\f2b0"}.fa-yoast:before{content:"\f2b1"}.fa-themeisle:before{content:"\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\f2b4"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}
/*! jQuery UI - v1.11.4 - 2016-05-23
* http://jqueryui.com
* Includes: core.css, draggable.css, resizable.css, accordion.css, autocomplete.css, button.css, datepicker.css, dialog.css, menu.css, progressbar.css, selectmenu.css, slider.css, spinner.css, tabs.css, tooltip.css, theme.css
* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Trebuchet%20MS%2CTahoma%2CVerdana%2CArial%2Csans-serif&fsDefault=1.1em&fwDefault=bold&cornerRadius=4px&bgColorHeader=%2332c1c9&bgTextureHeader=gloss_wave&borderColorHeader=%2328949a&fcHeader=%23ffffff&iconColorHeader=%23ffffff&bgColorContent=%23eeeeee&bgTextureContent=highlight_soft&borderColorContent=%23dddddd&fcContent=%23333333&iconColorContent=%23222222&bgColorDefault=%23f6f6f6&bgTextureDefault=glass&borderColorDefault=%23cccccc&fcDefault=%231c94c4&iconColorDefault=%2332c1c9&bgColorHover=%23fdf5ce&bgTextureHover=glass&borderColorHover=%2328949a&fcHover=%232ea7ae&iconColorHover=%2332c1c9&bgColorActive=%23ffffff&bgTextureActive=glass&borderColorActive=%232aa6ac&fcActive=%232fabb2&iconColorActive=%2332c1c9&bgColorHighlight=%23ffe45c&bgTextureHighlight=highlight_soft&borderColorHighlight=%23fed22f&fcHighlight=%23363636&iconColorHighlight=%23228ef1&bgColorError=%23b81900&bgTextureError=diagonals_thick&borderColorError=%23cd0a0a&fcError=%23ffffff&iconColorError=%23ffd27a&bgColorOverlay=%23666666&bgTextureOverlay=diagonals_thick&bgImgOpacityOverlay=20&opacityOverlay=50&bgColorShadow=%23000000&bgTextureShadow=flat&bgImgOpacityShadow=10&opacityShadow=20&thicknessShadow=5px&offsetTopShadow=-5px&offsetLeftShadow=-5px&cornerRadiusShadow=5px&bgImgOpacityHeader=35&bgImgOpacityContent=100&bgImgOpacityDefault=100&bgImgOpacityHover=100&bgImgOpacityActive=65&bgImgOpacityHighlight=75&bgImgOpacityError=18
* Copyright jQuery Foundation and other contributors; Licensed MIT */

.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:"";display:table;border-collapse:collapse}.ui-helper-clearfix:after{clear:both}.ui-helper-clearfix{min-height:0}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabled{cursor:default!important}.ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ui-draggable-handle{-ms-touch-action:none;touch-action:none}.ui-resizable{position:relative}.ui-resizable-handle{position:absolute;font-size:0.1px;display:block;-ms-touch-action:none;touch-action:none}.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;width:100%;top:-5px;left:0}.ui-resizable-s{cursor:s-resize;height:7px;width:100%;bottom:-5px;left:0}.ui-resizable-e{cursor:e-resize;width:7px;right:-5px;top:0;height:100%}.ui-resizable-w{cursor:w-resize;width:7px;left:-5px;top:0;height:100%}.ui-resizable-se{cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.ui-resizable-sw{cursor:sw-resize;width:9px;height:9px;left:-5px;bottom:-5px}.ui-resizable-nw{cursor:nw-resize;width:9px;height:9px;left:-5px;top:-5px}.ui-resizable-ne{cursor:ne-resize;width:9px;height:9px;right:-5px;top:-5px}.ui-accordion .ui-accordion-header{display:block;cursor:pointer;position:relative;margin:2px 0 0 0;padding:.5em .5em .5em .7em;min-height:0;font-size:100%}.ui-accordion .ui-accordion-icons{padding-left:2.2em}.ui-accordion .ui-accordion-icons .ui-accordion-icons{padding-left:2.2em}.ui-accordion .ui-accordion-header .ui-accordion-header-icon{position:absolute;left:.5em;top:50%;margin-top:-8px}.ui-accordion .ui-accordion-content{padding:1em 2.2em;border-top:0;overflow:auto}.ui-autocomplete{position:absolute;top:0;left:0;cursor:default}.ui-button{display:inline-block;position:relative;padding:0;line-height:normal;margin-right:.1em;cursor:pointer;vertical-align:middle;text-align:center;overflow:visible}.ui-button,.ui-button:link,.ui-button:visited,.ui-button:hover,.ui-button:active{text-decoration:none}.ui-button-icon-only{width:2.2em}button.ui-button-icon-only{width:2.4em}.ui-button-icons-only{width:3.4em}button.ui-button-icons-only{width:3.7em}.ui-button .ui-button-text{display:block;line-height:normal}.ui-button-text-only .ui-button-text{padding:.4em 1em}.ui-button-icon-only .ui-button-text,.ui-button-icons-only .ui-button-text{padding:.4em;text-indent:-9999999px}.ui-button-text-icon-primary .ui-button-text,.ui-button-text-icons .ui-button-text{padding:.4em 1em .4em 2.1em}.ui-button-text-icon-secondary .ui-button-text,.ui-button-text-icons .ui-button-text{padding:.4em 2.1em .4em 1em}.ui-button-text-icons .ui-button-text{padding-left:2.1em;padding-right:2.1em}input.ui-button{padding:.4em 1em}.ui-button-icon-only .ui-icon,.ui-button-text-icon-primary .ui-icon,.ui-button-text-icon-secondary .ui-icon,.ui-button-text-icons .ui-icon,.ui-button-icons-only .ui-icon{position:absolute;top:50%;margin-top:-8px}.ui-button-icon-only .ui-icon{left:50%;margin-left:-8px}.ui-button-text-icon-primary .ui-button-icon-primary,.ui-button-text-icons .ui-button-icon-primary,.ui-button-icons-only .ui-button-icon-primary{left:.5em}.ui-button-text-icon-secondary .ui-button-icon-secondary,.ui-button-text-icons .ui-button-icon-secondary,.ui-button-icons-only .ui-button-icon-secondary{right:.5em}.ui-buttonset{margin-right:7px}.ui-buttonset .ui-button{margin-left:0;margin-right:-.3em}input.ui-button::-moz-focus-inner,button.ui-button::-moz-focus-inner{border:0;padding:0}.ui-datepicker{width:17em;padding:.2em .2em 0;display:none}.ui-datepicker .ui-datepicker-header{position:relative;padding:.2em 0}.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next{position:absolute;top:2px;width:1.8em;height:1.8em}.ui-datepicker .ui-datepicker-prev-hover,.ui-datepicker .ui-datepicker-next-hover{top:1px}.ui-datepicker .ui-datepicker-prev{left:2px}.ui-datepicker .ui-datepicker-next{right:2px}.ui-datepicker .ui-datepicker-prev-hover{left:1px}.ui-datepicker .ui-datepicker-next-hover{right:1px}.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span{display:block;position:absolute;left:50%;margin-left:-8px;top:50%;margin-top:-8px}.ui-datepicker .ui-datepicker-title{margin:0 2.3em;line-height:1.8em;text-align:center}.ui-datepicker .ui-datepicker-title select{font-size:1em;margin:1px 0}.ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year{width:45%}.ui-datepicker table{width:100%;font-size:.9em;border-collapse:collapse;margin:0 0 .4em}.ui-datepicker th{padding:.7em .3em;text-align:center;font-weight:bold;border:0}.ui-datepicker td{border:0;padding:1px}.ui-datepicker td span,.ui-datepicker td a{display:block;padding:.2em;text-align:right;text-decoration:none}.ui-datepicker .ui-datepicker-buttonpane{background-image:none;margin:.7em 0 0 0;padding:0 .2em;border-left:0;border-right:0;border-bottom:0}.ui-datepicker .ui-datepicker-buttonpane button{float:right;margin:.5em .2em .4em;cursor:pointer;padding:.2em .6em .3em .6em;width:auto;overflow:visible}.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current{float:left}.ui-datepicker.ui-datepicker-multi{width:auto}.ui-datepicker-multi .ui-datepicker-group{float:left}.ui-datepicker-multi .ui-datepicker-group table{width:95%;margin:0 auto .4em}.ui-datepicker-multi-2 .ui-datepicker-group{width:50%}.ui-datepicker-multi-3 .ui-datepicker-group{width:33.3%}.ui-datepicker-multi-4 .ui-datepicker-group{width:25%}.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:0}.ui-datepicker-multi .ui-datepicker-buttonpane{clear:left}.ui-datepicker-row-break{clear:both;width:100%;font-size:0}.ui-datepicker-rtl{direction:rtl}.ui-datepicker-rtl .ui-datepicker-prev{right:2px;left:auto}.ui-datepicker-rtl .ui-datepicker-next{left:2px;right:auto}.ui-datepicker-rtl .ui-datepicker-prev:hover{right:1px;left:auto}.ui-datepicker-rtl .ui-datepicker-next:hover{left:1px;right:auto}.ui-datepicker-rtl .ui-datepicker-buttonpane{clear:right}.ui-datepicker-rtl .ui-datepicker-buttonpane button{float:left}.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,.ui-datepicker-rtl .ui-datepicker-group{float:right}.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header{border-right-width:0;border-left-width:1px}.ui-dialog{overflow:hidden;position:absolute;top:0;left:0;padding:.2em;outline:0}.ui-dialog .ui-dialog-titlebar{padding:.4em 1em;position:relative}.ui-dialog .ui-dialog-title{float:left;margin:.1em 0;white-space:nowrap;width:90%;overflow:hidden;text-overflow:ellipsis}.ui-dialog .ui-dialog-titlebar-close{position:absolute;right:.3em;top:50%;width:20px;margin:-10px 0 0 0;padding:1px;height:20px}.ui-dialog .ui-dialog-content{position:relative;border:0;padding:.5em 1em;background:none;overflow:auto}.ui-dialog .ui-dialog-buttonpane{text-align:left;border-width:1px 0 0 0;background-image:none;margin-top:.5em;padding:.3em 1em .5em .4em}.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset{float:right}.ui-dialog .ui-dialog-buttonpane button{margin:.5em .4em .5em 0;cursor:pointer}.ui-dialog .ui-resizable-se{width:12px;height:12px;right:-5px;bottom:-5px;background-position:16px 16px}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-menu{list-style:none;padding:0;margin:0;display:block;outline:none}.ui-menu .ui-menu{position:absolute}.ui-menu .ui-menu-item{position:relative;margin:0;padding:3px 1em 3px .4em;cursor:pointer;min-height:0;list-style-image:url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}.ui-menu .ui-menu-divider{margin:5px 0;height:0;font-size:0;line-height:0;border-width:1px 0 0 0}.ui-menu .ui-state-focus,.ui-menu .ui-state-active{margin:-1px}.ui-menu-icons{position:relative}.ui-menu-icons .ui-menu-item{padding-left:2em}.ui-menu .ui-icon{position:absolute;top:0;bottom:0;left:.2em;margin:auto 0}.ui-menu .ui-menu-icon{left:auto;right:0}.ui-progressbar{height:2em;text-align:left;overflow:hidden}.ui-progressbar .ui-progressbar-value{margin:-1px;height:100%}.ui-progressbar .ui-progressbar-overlay{background:url("data:image/gif;base64,R0lGODlhKAAoAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQABACwAAAAAKAAoAAACkYwNqXrdC52DS06a7MFZI+4FHBCKoDeWKXqymPqGqxvJrXZbMx7Ttc+w9XgU2FB3lOyQRWET2IFGiU9m1frDVpxZZc6bfHwv4c1YXP6k1Vdy292Fb6UkuvFtXpvWSzA+HycXJHUXiGYIiMg2R6W459gnWGfHNdjIqDWVqemH2ekpObkpOlppWUqZiqr6edqqWQAAIfkECQEAAQAsAAAAACgAKAAAApSMgZnGfaqcg1E2uuzDmmHUBR8Qil95hiPKqWn3aqtLsS18y7G1SzNeowWBENtQd+T1JktP05nzPTdJZlR6vUxNWWjV+vUWhWNkWFwxl9VpZRedYcflIOLafaa28XdsH/ynlcc1uPVDZxQIR0K25+cICCmoqCe5mGhZOfeYSUh5yJcJyrkZWWpaR8doJ2o4NYq62lAAACH5BAkBAAEALAAAAAAoACgAAAKVDI4Yy22ZnINRNqosw0Bv7i1gyHUkFj7oSaWlu3ovC8GxNso5fluz3qLVhBVeT/Lz7ZTHyxL5dDalQWPVOsQWtRnuwXaFTj9jVVh8pma9JjZ4zYSj5ZOyma7uuolffh+IR5aW97cHuBUXKGKXlKjn+DiHWMcYJah4N0lYCMlJOXipGRr5qdgoSTrqWSq6WFl2ypoaUAAAIfkECQEAAQAsAAAAACgAKAAAApaEb6HLgd/iO7FNWtcFWe+ufODGjRfoiJ2akShbueb0wtI50zm02pbvwfWEMWBQ1zKGlLIhskiEPm9R6vRXxV4ZzWT2yHOGpWMyorblKlNp8HmHEb/lCXjcW7bmtXP8Xt229OVWR1fod2eWqNfHuMjXCPkIGNileOiImVmCOEmoSfn3yXlJWmoHGhqp6ilYuWYpmTqKUgAAIfkECQEAAQAsAAAAACgAKAAAApiEH6kb58biQ3FNWtMFWW3eNVcojuFGfqnZqSebuS06w5V80/X02pKe8zFwP6EFWOT1lDFk8rGERh1TTNOocQ61Hm4Xm2VexUHpzjymViHrFbiELsefVrn6XKfnt2Q9G/+Xdie499XHd2g4h7ioOGhXGJboGAnXSBnoBwKYyfioubZJ2Hn0RuRZaflZOil56Zp6iioKSXpUAAAh+QQJAQABACwAAAAAKAAoAAACkoQRqRvnxuI7kU1a1UU5bd5tnSeOZXhmn5lWK3qNTWvRdQxP8qvaC+/yaYQzXO7BMvaUEmJRd3TsiMAgswmNYrSgZdYrTX6tSHGZO73ezuAw2uxuQ+BbeZfMxsexY35+/Qe4J1inV0g4x3WHuMhIl2jXOKT2Q+VU5fgoSUI52VfZyfkJGkha6jmY+aaYdirq+lQAACH5BAkBAAEALAAAAAAoACgAAAKWBIKpYe0L3YNKToqswUlvznigd4wiR4KhZrKt9Upqip61i9E3vMvxRdHlbEFiEXfk9YARYxOZZD6VQ2pUunBmtRXo1Lf8hMVVcNl8JafV38aM2/Fu5V16Bn63r6xt97j09+MXSFi4BniGFae3hzbH9+hYBzkpuUh5aZmHuanZOZgIuvbGiNeomCnaxxap2upaCZsq+1kAACH5BAkBAAEALAAAAAAoACgAAAKXjI8By5zf4kOxTVrXNVlv1X0d8IGZGKLnNpYtm8Lr9cqVeuOSvfOW79D9aDHizNhDJidFZhNydEahOaDH6nomtJjp1tutKoNWkvA6JqfRVLHU/QUfau9l2x7G54d1fl995xcIGAdXqMfBNadoYrhH+Mg2KBlpVpbluCiXmMnZ2Sh4GBqJ+ckIOqqJ6LmKSllZmsoq6wpQAAAh+QQJAQABACwAAAAAKAAoAAAClYx/oLvoxuJDkU1a1YUZbJ59nSd2ZXhWqbRa2/gF8Gu2DY3iqs7yrq+xBYEkYvFSM8aSSObE+ZgRl1BHFZNr7pRCavZ5BW2142hY3AN/zWtsmf12p9XxxFl2lpLn1rseztfXZjdIWIf2s5dItwjYKBgo9yg5pHgzJXTEeGlZuenpyPmpGQoKOWkYmSpaSnqKileI2FAAACH5BAkBAAEALAAAAAAoACgAAAKVjB+gu+jG4kORTVrVhRlsnn2dJ3ZleFaptFrb+CXmO9OozeL5VfP99HvAWhpiUdcwkpBH3825AwYdU8xTqlLGhtCosArKMpvfa1mMRae9VvWZfeB2XfPkeLmm18lUcBj+p5dnN8jXZ3YIGEhYuOUn45aoCDkp16hl5IjYJvjWKcnoGQpqyPlpOhr3aElaqrq56Bq7VAAAOw==");height:100%;filter:alpha(opacity=25);opacity:0.25}.ui-progressbar-indeterminate .ui-progressbar-value{background-image:none}.ui-selectmenu-menu{padding:0;margin:0;position:absolute;top:0;left:0;display:none}.ui-selectmenu-menu .ui-menu{overflow:auto;overflow-x:hidden;padding-bottom:1px}.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup{font-size:1em;font-weight:bold;line-height:1.5;padding:2px 0.4em;margin:0.5em 0 0 0;height:auto;border:0}.ui-selectmenu-open{display:block}.ui-selectmenu-button{display:inline-block;overflow:hidden;position:relative;text-decoration:none;cursor:pointer}.ui-selectmenu-button span.ui-icon{right:0.5em;left:auto;margin-top:-8px;position:absolute;top:50%}.ui-selectmenu-button span.ui-selectmenu-text{text-align:left;padding:0.4em 2.1em 0.4em 1em;display:block;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:1.2em;height:1.2em;cursor:default;-ms-touch-action:none;touch-action:none}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider.ui-state-disabled .ui-slider-handle,.ui-slider.ui-state-disabled .ui-slider-range{filter:inherit}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-spinner{position:relative;display:inline-block;overflow:hidden;padding:0;vertical-align:middle}.ui-spinner-input{border:none;background:none;color:inherit;padding:0;margin:.2em 0;vertical-align:middle;margin-left:.4em;margin-right:22px}.ui-spinner-button{width:16px;height:50%;font-size:.5em;padding:0;margin:0;text-align:center;position:absolute;cursor:default;display:block;overflow:hidden;right:0}.ui-spinner a.ui-spinner-button{border-top:none;border-bottom:none;border-right:none}.ui-spinner .ui-icon{position:absolute;margin-top:-8px;top:50%;left:0}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-spinner .ui-icon-triangle-1-s{background-position:-65px -16px}.ui-tabs{position:relative;padding:.2em}.ui-tabs .ui-tabs-nav{margin:0;padding:.2em .2em 0}.ui-tabs .ui-tabs-nav li{list-style:none;float:left;position:relative;top:0;margin:1px .2em 0 0;border-bottom-width:0;padding:0;white-space:nowrap}.ui-tabs .ui-tabs-nav .ui-tabs-anchor{float:left;padding:.5em 1em;text-decoration:none}.ui-tabs .ui-tabs-nav li.ui-tabs-active{margin-bottom:-1px;padding-bottom:1px}.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor{cursor:text}.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor{cursor:pointer}.ui-tabs .ui-tabs-panel{display:block;border-width:0;padding:1em 1.4em;background:none}.ui-tooltip{padding:8px;position:absolute;z-index:9999;max-width:300px;-webkit-box-shadow:0 0 5px #aaa;box-shadow:0 0 5px #aaa}body .ui-tooltip{border-width:2px}.ui-widget{font-family:Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size:1.1em}.ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button{font-family:Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size:1em}.ui-widget-content{border:1px solid #ddd;background:#eee url("images/ui-bg_highlight-soft_100_eeeeee_1x100.png") 50% top repeat-x;color:#333}.ui-widget-content a{color:#333}.ui-widget-header{border:1px solid #28949a;background:#32c1c9 url("images/ui-bg_gloss-wave_35_32c1c9_500x100.png") 50% 50% repeat-x;color:#fff;font-weight:bold}.ui-widget-header a{color:#fff}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default{border:1px solid #ccc;background:#f6f6f6 url("images/ui-bg_glass_100_f6f6f6_1x400.png") 50% 50% repeat-x;font-weight:bold;color:#1c94c4}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited{color:#1c94c4;text-decoration:none}.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,.ui-widget-header .ui-state-focus{border:1px solid #28949a;background:#fdf5ce url("images/ui-bg_glass_100_fdf5ce_1x400.png") 50% 50% repeat-x;font-weight:bold;color:#2ea7ae}.ui-state-hover a,.ui-state-hover a:hover,.ui-state-hover a:link,.ui-state-hover a:visited,.ui-state-focus a,.ui-state-focus a:hover,.ui-state-focus a:link,.ui-state-focus a:visited{color:#2ea7ae;text-decoration:none}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:1px solid #2aa6ac;background:#fff url("images/ui-bg_glass_65_ffffff_1x400.png") 50% 50% repeat-x;font-weight:bold;color:#2fabb2}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#2fabb2;text-decoration:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight{border:1px solid #fed22f;background:#ffe45c url("images/ui-bg_highlight-soft_75_ffe45c_1x100.png") 50% top repeat-x;color:#363636}.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#363636}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error{border:1px solid #cd0a0a;background:#b81900 url("images/ui-bg_diagonals-thick_18_b81900_40x40.png") 50% 50% repeat;color:#fff}.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a{color:#fff}.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#fff}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary{font-weight:bold}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:normal}.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-icon,.ui-widget-content .ui-icon{background-image:url("images/ui-icons_222222_256x240.png")}.ui-widget-header .ui-icon{background-image:url("images/ui-icons_ffffff_256x240.png")}.ui-state-default .ui-icon{background-image:url("images/ui-icons_32c1c9_256x240.png")}.ui-state-hover .ui-icon,.ui-state-focus .ui-icon{background-image:url("images/ui-icons_32c1c9_256x240.png")}.ui-state-active .ui-icon{background-image:url("images/ui-icons_32c1c9_256x240.png")}.ui-state-highlight .ui-icon{background-image:url("images/ui-icons_228ef1_256x240.png")}.ui-state-error .ui-icon,.ui-state-error-text .ui-icon{background-image:url("images/ui-icons_ffd27a_256x240.png")}.ui-icon-blank{background-position:16px 16px}.ui-icon-carat-1-n{background-position:0 0}.ui-icon-carat-1-ne{background-position:-16px 0}.ui-icon-carat-1-e{background-position:-32px 0}.ui-icon-carat-1-se{background-position:-48px 0}.ui-icon-carat-1-s{background-position:-64px 0}.ui-icon-carat-1-sw{background-position:-80px 0}.ui-icon-carat-1-w{background-position:-96px 0}.ui-icon-carat-1-nw{background-position:-112px 0}.ui-icon-carat-2-n-s{background-position:-128px 0}.ui-icon-carat-2-e-w{background-position:-144px 0}.ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}.ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}.ui-icon-triangle-1-s{background-position:-64px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}.ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}.ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}.ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{background-position:-64px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{background-position:0 -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}.ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px -64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}.ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}.ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}.ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}.ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}.ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}.ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}.ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}.ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position:-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}.ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}.ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-on{background-position:-96px -144px}.ui-icon-radio-off{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-seek-start{background-position:-80px -160px}.ui-icon-seek-first{background-position:-80px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{border-top-left-radius:4px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{border-top-right-radius:4px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{border-bottom-left-radius:4px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{border-bottom-right-radius:4px}.ui-widget-overlay{background:#666 url("images/ui-bg_diagonals-thick_20_666666_40x40.png") 50% 50% repeat;opacity:.5;filter:Alpha(Opacity=50)}.ui-widget-shadow{margin:-5px 0 0 -5px;padding:5px;background:#000;opacity:.2;filter:Alpha(Opacity=20);border-radius:5px}/* WTS override */.ui-dialog .ui-dialog-content{position: relative;border: 0;padding: .5em .1em;background: none;overflow: hidden;}
		  @media only screen and (max-width: 500px) {
         #RightContentDiv
         {
                display:none
         }
		 .local-time .banner {display:none}
		   .col-56 .local-time {
                border-bottom: 0px solid #d3d3d3;
                margin-top:10px;
            }
            .fontTS {
                font-size:2em; 
            }
        }
         @media screen and (min-width: 800px) {
             #yl_mob {
                 display: none;
             }
         }
    </style>
    

        <link rel="canonical" href="https://www.worldtimeserver.com/current_time_in_EC.aspx" />
    <meta content="Current local time and date in Ecuador from a trusted independent resource" name="description" /> 
    <meta content="travel, call, Ecuador, time, current, date, correct, local, zone, daylight saving, clock, phone, savings, international, map, DST, summer, discount, cheap, guide, fare, air, guide" name="keywords" />
    
    <link rel="alternate" hreflang="en" href="https://www.worldtimeserver.com/current_time_in_EC.aspx" />
    <link rel="alternate" hreflang="fr" href="https://www.worldtimeserver.com/heure-exacte-EC.aspx" />
    <link rel="alternate" hreflang="es" href="https://www.worldtimeserver.com/hora-exacta-EC.aspx" />
    <link rel="alternate" hreflang="de" href="https://www.worldtimeserver.com/aktuelle-Zeit-in-EC.aspx" />
    <meta name="apple-mobile-web-app-title" content="Ecuador current time" />
    <meta name="application-name" content="Ecuador current time" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />

	<style>
     /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
	  font-display: fallback;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
	  font-display: fallback;
      src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
	  font-display: fallback;
      src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
	  font-display: fallback;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    

/* MV CSS */

@media only screen and (min-width: 801px) and (max-width: 1070px){

body:not(.at-custom-layout) form:not(form[action*="time_zone_guide"]) #LeftContentDiv {

max-width: calc(100% - 320px) !important;

}

body:not(.at-custom-layout) form:not(form[action*="time_zone_guide"]) #RightContentDiv {

min-width: 320px !important;

}

}

@media only screen and (min-width: 1071px) {

body:not(.at-custom-layout) form:not(form[action*="time_zone_guide"]) #LeftContentDiv {

max-width: calc(100% - 312px) !important;

}

body:not(.at-custom-layout) form:not(form[action*="time_zone_guide"]) #RightContentDiv {

min-width: 312px !important;

}

}

@media only screen and (max-width: 359px) {

#LeftContentDiv {

max-width: 100% !important;

}

}

/* END OF CSS */


	</style>

	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->



    

            <script type="text/javascript">
                (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date(); a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                ga('create', 'UA-289620-3', 'auto');
                ga('send', 'pageview');
    </script>

    <!-- Facebook Pixel Code -->
<script>
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }; if (!f._fbq) f._fbq = n;
        n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    }(window,
    document, 'script', '//connect.facebook.net/en_US/fbevents.js');

    fbq('init', '310961065725289');
    fbq('track', "PageView");</script>
<!-- End Facebook Pixel Code -->

    
   
<script type="text/javascript" async="async" data-noptimize="1" data-cfasync="false" src="//scripts.pubnation.com/tags/4a35c38e-1d1f-4583-85f9-46f1e206572c.js"></script>
<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content" /><link rel="manifest" href="/manifest.json" />
<script type="text/javascript">
(function(document, window){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.pushnami.com/scripts/v1/pushnami-adv/63fe53bdbe67fd00138e3da4";
    script.onload = function() {
        Pushnami
            .update()
            .prompt();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})(document, window);
</script>
</head>

<body id="body">
    <form method="post" action="/current_time_in_EC.aspx" id="form1">
<div class="aspNetHidden">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJMjU0MTcyNzk2ZGRzJ3DSiyw+y7QdkWUyZPgxKuqKEA==" />
</div>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="1111ACC9" />
</div>

	<header class="header">
		<div class="container">
			<div class="logo-wrap">
				<a href="/" class="ico logo" title="WorldTimeServer.com">WorldTimeServer.com</a>
                <div id="yl_mob" style="margin-top:5px">
                    Your location: <strong><a href="#" id="hlocLink_mob"><span id="hlocLinkTxt_mob"></span></a></strong>
                </div>
			</div>

			<div class="drop-holder">
				<div class="trigger"><div class="ico ico-user"></div><i class="fa fa-angle-down"></i></div>
				<div class="user-right">
					<div class="item">
						<div class="ico ico-fa"><i class="fa fa-map-marker"></i></div>
						<p id="yourloc">Your location <strong><a href="#" id="hlocLink"><span id="hlocLinkTxt"></span></a></strong></p>
					</div>
                    <div class="item">
                        <div class="ico ico-fa"><i class="fa fa-heart"></i></div>
                        <p>
                            <a href="/favorites/">Favorites</a>
                        </p>
                    </div>
					<div class="item">
						<div class="ico ico-user-b"></div>
						
                        <p id="loggedout">
                            Profile <strong><a href="https://www.worldtimeserver.com/profile.aspx">Login</a></strong>
						</p>
					</div>
					<div id="itemlang" class="item lang">
						<div class="ico ico-fl-en"></div>
						<p>language <strong>English <i class="fa fa-angle-down"></i></strong></p>
						<div class="dropdown dropdown-lang">
							<ul>
								<li id="ENLI" class="current"><a href="https://www.worldtimeserver.com/current_time_in_EC.aspx"><span class="ico ico-fl-en" style="background-position: -223px -27px; height: 27px; width: 42px; background-image: url(/img/sprite-s33c612617c.3.png);"></span>Viewing in <strong>English</strong></a></li>
								<li id="DELI"><a href="https://www.worldtimeserver.com/aktuelle-Zeit-in-EC.aspx"><span class="ico ico-fl-ge"></span>View in <strong>German</strong></a></li>
								<li id="FRLI"><a href="https://www.worldtimeserver.com/heure-exacte-EC.aspx"><span class="ico ico-fl-fr"></span>View in <strong>French</strong></a></li>
								<li id="ESLI"><a href="https://www.worldtimeserver.com/hora-exacta-EC.aspx"><span class="ico ico-fl-sp"></span>View in <strong>Spanish</strong></a></li>
							</ul>
						</div>
					</div>
					<div class="social">
						<a href="https://www.facebook.com/worldtimeserver" target="_blank" style="margin-top:7px"><i class="fa fa-facebook"></i></a>
						<a href="https://www.twitter.com/worldtimeserved" target="_blank" style="margin-top:7px"><i class="fa fa-twitter"></i></a>
					</div>
				</div>
			</div>
		</div>
		<!-- / container -->
	</header>
	<!-- / header -->

	<div class="current-time">
		<div class="container">
	
				<label>Current Time In</label>
				    <input name="ctl00$TopLocation" type="text" id="TopLocation" class="TopLocation" Placeholder="Type city to begin" />
				<div class="small-only">
					<input name="ctl00$TopLocationSmall" type="text" id="TopLocationSmall" class="TopLocation" Placeholder="Current time in..." />
				</div>
				<button type="submit" class="btn btn-blue" id="TopSearchSubmit"><span class="not-small">Search</span><span class="small-only">GO</span></button>
		
		</div>
	</div>

	<!-- D2.0 see controls/TopMenu.ascx fir 2.0 version -->
    <nav class="menu">
		<div class="container">
            <a href="#menu" class="trigger"><i class="fa fa-bars"></i></a>
			<ul>
				<li id="home"><a href="https://www.worldtimeserver.com/">Home</a></li>
				<li id="clt" class="current"><a href="https://www.worldtimeserver.com/time.aspx" id="_MenuTimeHL">Current Local Time</a></li>
				<li id="whtmit"><a href="/what-time-is-it/">What Time Is It</a></li>
                <li id="tzc"><a href="/time-zones/">Time Zones</a>
                    <!--<a href="https://www.worldtimeserver.com/time_converter.aspx" id="_MenuTimeZoneConverterHL2">Time Zone Converter</a>-->
                    <ul>
                        <li><a href="/time-zone-converter/">Time Zone Converter</a></li>
                        <li><a href="/news/">Time Zone News</a></li>
                    </ul>
                </li>
                

                <li id="wc"><a href="https://www.worldtimeserver.com/worldclock.aspx">World Clock</a></li>
                <li id="mp"><a href="https://www.worldtimeserver.com/meeting-planner.aspx">Meeting Planner</a></li>
                <li id="learn"><a href="https://www.worldtimeserver.com/learn/">Learn</a></li>
               <li id="wtdb"><a href="https://www.worldtimeserver.com/time_zone_guide/">World Time Database</a></li>
				
			</ul>
		</div>
	</nav>

        <div class="body">
		<div class="container">
            <!-- D2.0 -->
            <div class="row">
                <div id="LeftContentDiv" class="col-23">
                    

    
			
		
                    <!-- WTS - MainIndexResponsiveTop -->
                    <div class="banner" style="padding-bottom: 10px;">
						

					</div>
					<div class="title left" style="padding-bottom:10px">
						<h1>Current Time in Ecuador</h1>
						<div class="social-share" style="display:none">
							<img src="img/social.jpg" alt="">
						</div>
					</div>
					<div class="box-shadow">
						<h3 class="grey-head red"><span class="hide-mob-only">What Time Is It In Ecuador?</span><span class="mob-only">Local Time</span></h3>
						<div class="row nop" style="display:flex">
							<div class="col-56" style="border-right: 1px solid #d3d3d3;">
								<div class="local-time">
                                    <span id="theTime" class="fontTS">
                                      1:54:36 PM
                                   </span>
                                   <br />
                                   <input type="hidden" id="serverTimeStamp" value="1706882076520.65" />
                                   <!-- Server Time:   1:54:36 PM -->
                                    <!-- Server Time with seconds:   13:54:36 -->

									

									<h4> Friday, February 2, 2024</h4>
									<p> <a href='/time-zones/ect/'>Ecuador Time (ECT) -0500 UTC</a></p>
                                    <p>
                                              UTC/GMT is
                                           18:54
                                           on
                                           Friday, February 2, 2024
                                    </p>
                                     <input type="hidden" name="ctl00$ContentPlaceHolderMain$curLocID" id="ContentPlaceHolderMain_curLocID" value="EC" />
                                        <div id="diffDiv" style="display:none;">
                                            <span style="font-size:1.2em;">Difference from your location:<br /><br />
                                           <strong><span id="diffHours"></span> <span id="diffText"></span> <span id="diffType"></span> <span id='ofSpan'>of</span> <span id="curCity"></span> </strong></span></div>
                                    <div class="banner">
									<div class="mv_slot_target" data-slot="content" data-hint-slot-sizes="d300x250,d336x280,d300x50"></div>

								  </div>
								</div>
							</div>
							<div class="col-66">
								<div class="tabs">
									<ul>
										<li class="current"><a href="#tab-1">DST</a></li>
										<li><a href="#tab-2">Time Zone Map</a></li>
									</ul>
								</div>
								<div class="tab-content active" id="tab-1">
									<div class="daytime">
										<h3>Daylight Saving Time</h3>
                                       <!-- Time String: 12:00 AM -->
                                       

									</div>
								</div>
								<div class="tab-content" id="tab-2" style="padding:10px">
 
									    <img style="width: 100%; max-width: 228px; max-height:143px;" 
                                            alt="Ecuador time zone location map borders"
                                            src="img/maps/EC.jpg" />
                                        
								</div>
								<div class="receive">
									
                                    
                                    This location does not observe Daylight Saving Time.

								</div>
							</div>
						</div>
						<div class="fast-links" style="display: none">
							<div class="row">
								<div class="col-4">
									<ul>
										<li><a href="#">Cheap Hotels</a></li>
										<li><a href="#">Cheap Flights</a></li>
										<li><a href="#">Nearby Airports</a></li>
									</ul>
								</div>
								<div class="col-4">
									<ul>
										<li><a href="#">Cheap Hotels</a></li>
										<li><a href="#">Cheap Flights</a></li>
										<li><a href="#">Nearby Airports</a></li>
									</ul>
								</div>
								<div class="col-4">
									<ul>
										<li><a href="#">Cheap Hotels</a></li>
										<li><a href="#">Cheap Flights</a></li>
										<li><a href="#">Nearby Airports</a></li>
									</ul>
								</div>
								<div class="col-4">
									<ul>
										<li><a href="#">Cheap Hotels</a></li>
										<li><a href="#">Cheap Flights</a></li>
										<li><a href="#">Nearby Airports</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

                    

                    <div id="ContentPlaceHolderMain_tzcdiv" class="box-shadow">
                        <h3 class="icon-head">Time Zone Conversions <span class="ico ico-convert"></span></h3>
						<div class="entry">
							<span class="ico ico-convert"></span>
							<div style="display:flex">
                                <div id="ContentPlaceHolderMain_comp1div" style="flex:1">
                                    <a href='/time-zones/ect-to-est/'>ECT to EST</a>
                                </div>
                                <div id="ContentPlaceHolderMain_comp2div" style="flex:1">
                                    <a href='/time-zones/ect-to-cst/'>ECT to CST</a>
                                </div>
                                <div id="ContentPlaceHolderMain_comp3div" style="flex:1">
                                    <a href='/time-zones/ect-to-pst/'>ECT to PST</a>
                                </div>
                                <div id="ContentPlaceHolderMain_comp4div" style="flex:1">
                                    <a href='/time-zones/ect-to-mst/'>ECT to MST</a>
                                </div>
							</div>
						</div>
                    </div>

					<div id="ContentPlaceHolderMain_MajorCities" class="box-shadow">
						<h3 class="icon-head">What are the major cities here? <span class="ico ico-city"></span></h3>
						<div class="entry">
							<span class="ico ico-city-b"></span>
							<p>Major Cities in Ecuador include</p>
							<p class="links">
                                   <a href="current_time_in_EC.aspx?city=Quito">Quito</a>
							</p>
						</div>
					</div>

                    


					<div class="box-shadow">
						<h3 class="icon-head">Current Weather <span class="hide-mob-only">Conditions</span> In Quito <span class="ico ico-weather"></span></h3>
						<div class="entry">
							<div class="image">
								<img id="skyicon" alt="Broken clouds. Mild." src="images/weather/v2_lg/6.gif" />
							</div>
							<h5>
                                Broken clouds. Mild. 68&deg;F / 20&deg;C
							</h5>
							<p><a href="weather_in_EC.aspx?forecastid=gn3652462&city=Quito">click for forecast and more</a></p>
						</div>
					</div>
					<div class="banner" align="center">
						

					</div>
					<div class="box-shadow">
						<h3 class="icon-head">Time Here, Time There <span class="hide-mob-only">(Time Zone Converter)</span> <span class="ico ico-convert"></span></h3>
						<div class="entry sp">
							<p>Want to see the time in Ecuador compared with your home? Choose a date and time then click "Submit" and we'll help you convert it from Ecuador time to your time zone.</p>
							<div class="inline-form">

                                    <select name="ctl00$ContentPlaceHolderMain$y" id="ContentPlaceHolderMain_y" onchange="setDaySelect()">
	<option selected="selected" value="2024">2024</option>
	<option value="2025">2025</option>
	<option value="2026">2026</option>
	<option value="2027">2027</option>
	<option value="2028">2028</option>
	<option value="2029">2029</option>
</select>
                                    <select name="ctl00$ContentPlaceHolderMain$mo" id="ContentPlaceHolderMain_mo" onchange="setDaySelect()">
	<option value="1">Jan</option>
	<option selected="selected" value="2">Feb</option>
	<option value="3">Mar</option>
	<option value="4">Apr</option>
	<option value="5">May</option>
	<option value="6">Jun</option>
	<option value="7">Jul</option>
	<option value="8">Aug</option>
	<option value="9">Sep</option>
	<option value="10">Oct</option>
	<option value="11">Nov</option>
	<option value="12">Dec</option>
</select>
                                    <select name="ctl00$ContentPlaceHolderMain$d" id="ContentPlaceHolderMain_d" onchange="setDayVal(this.value)">
	<option value="1">1</option>
	<option value="2">2</option>
	<option selected="selected" value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	<option value="19">19</option>
	<option value="20">20</option>
	<option value="21">21</option>
	<option value="22">22</option>
	<option value="23">23</option>
	<option value="24">24</option>
	<option value="25">25</option>
	<option value="26">26</option>
	<option value="27">27</option>
	<option value="28">28</option>
	<option value="29">29</option>
	<option value="30">30</option>
	<option value="31">31</option>
</select>
                                    <input name="ctl00$ContentPlaceHolderMain$hiddend" type="hidden" id="ContentPlaceHolderMain_hiddend" value="3" />
                                   <label>at</label>
                                    <select id="h" class="noon">
                                        <option value="0">00  (12 Midnight)</option>
                                        <option value="1">01  (01 AM)</option>
                                        <option value="2">02  (02 AM)</option>
                                        <option value="3">03  (03 AM)</option>
                                        <option value="4">04  (04 AM)</option>
                                        <option value="5">05  (05 AM)</option>
                                        <option value="6">06  (06 AM)</option>
                                        <option value="7">07  (07 AM)</option>
                                        <option value="8">08  (08 AM)</option>
                                        <option value="9">09  (09 AM)</option>
                                        <option value="10">10  (10 AM)</option>
                                        <option value="11">11  (11 AM)</option>
                                        <option value="12" selected="selected">12  (12 Noon)</option>
                                        <option value="13">13  (01 PM)</option>
                                        <option value="14">14  (02 PM)</option>
                                        <option value="15">15  (03 PM)</option>
                                        <option value="16">16  (04 PM)</option>
                                        <option value="17">17  (05 PM)</option>
                                        <option value="18">18  (06 PM)</option>
                                        <option value="19">19  (07 PM)</option>
                                        <option value="20">20  (08 PM)</option>
                                        <option value="21">21  (09 PM)</option>
                                        <option value="22">22  (10 PM)</option>
                                        <option value="23">23  (11 PM)</option>
                                    </select>
                                    <select id="mn" class="time">
                                        <option value="0">00</option>
                                        <option value="15">15</option>
                                        <option value="30">30</option>
                                        <option value="45">45</option>
                                    </select>
                                <button type="submit" class="btn btn-blue" id="convBtn">Submit</button>
                                    
							</div>
                            <p>
                                <a href='/convert_time_in_EC.aspx'>Convert Time From Ecuador to any time zone</a>
                            </p>
							<p>Need to compare more than just two places at once? Try our World Meeting Planner and get a color-coded chart comparing the time of day in Ecuador with all of the other international locations where others will be participating. </p>
						</div>
					</div>
					<div class="banner">
						

					</div>
					
					
                    <div class="box-shadow">
						<h3 class="icon-head full">Put a clock on your blog!</h3>
						<div class="entry sm">
						        <div style="width:125px; display:inline-block; text-align:center">
                                    <img src="images/s12clock.jpg" id="ContentPlaceHolderMain_s12clock" style="width:125px" />
                                    <br />
                                   <span style="font-weight:bold"> Ecuador </span>
                                </div>
                                <div style="max-width:500px; display:inline-block; vertical-align:top; margin-left:22px">
                                    Have your own blog or web site?<br /><br />
                                    <a class="adHeadline" href="/clocks/">Put a free analog web clock for
                                    Ecuador
                                    on your page, customized to match your color scheme!</a>
                              </div>
						</div>
					</div>

                    <div class="box-shadow">
						<h3 class="icon-head full">Thanks For Visiting <span class="hide-mob-only">WorldTimeServer.com</span> <span class="mob-only">us</span></h3>
						<div class="entry sm">
							<p>Are you about to make an International long distance phone call to Ecuador? Are you planning a trip or preparing for a chat or online meeting? Just confirming the current time? We work hard to make certain the time and information presented here on WorldTimeServer.com is accurate and do our best to keep up with Daylight Saving Time rules and Time Zone changes for every country, not just the changes that affect United Kingdom.</p>
							<p>Thanks for visiting and we hope you'll bookmark our site and return again!</p>
						</div>
					</div>
			
			
            <div class="banner">
						

			</div>

		

      <div id="dialog" title="DST Reminders">
        <iframe id="theiframe" src="" style="border:0px; width:100%; height:100%; overflow:scroll"></iframe>
    </div>

                </div>
				<div id="RightContentDiv" class="col-13">
					<div class="box-shadow">
						<h3 class="head-icon white">Select A Location <i class="fa fa-map-marker"></i></h3>
						<div class="box-form sidebar">
							
								<fieldset>
									<select name="ctl00$locationddl" id="locationddl" onchange="gotocurrenttime(this);">
	<option value="" class="hide-li">Select a location</option>
	<option value="UTC">(UTC/GMT)</option>
	<option value="AF">Afghanistan</option>
	<option value="AX">&#197;land Islands</option>
	<option value="AL">Albania</option>
	<option value="DZ">Algeria</option>
	<option value="AS">American Samoa</option>
	<option value="AD">Andorra</option>
	<option value="AO">Angola</option>
	<option value="AI">Anguilla</option>
	<option value="AQ-AD">Antarctica - Adelaide Island</option>
	<option value="AQ-AL">Antarctica - Adelie Land</option>
	<option value="AQ-AI">Antarctica - Anvers Island</option>
	<option value="AQ-BP">Antarctica - Bailey Peninsula</option>
	<option value="AQ-EL">Antarctica - Enderby Land</option>
	<option value="AQ-HB">Antarctica - Holme Bay</option>
	<option value="AQ-LV">Antarctica - Lake Vostok</option>
	<option value="AQ-QM">Antarctica - Queen Maud Land</option>
	<option value="AQ-RK">Antarctica - Russkaya</option>
	<option value="AQ-SP">Antarctica - South Pole</option>
	<option value="AQ-VH">Antarctica - Vestfold Hills</option>
	<option value="AG">Antigua and Barbuda</option>
	<option value="AR-BA">Argentina - Buenos Aires</option>
	<option value="AR-CT">Argentina - Catamarca</option>
	<option value="AR-CC">Argentina - Chaco</option>
	<option value="AR-CH">Argentina - Chubut</option>
	<option value="AR-DF">Argentina - Ciudad de Buenos Aires</option>
	<option value="AR-CB">Argentina - C&#243;rdoba</option>
	<option value="AR-CN">Argentina - Corrientes</option>
	<option value="AR-ER">Argentina - Entre Rios</option>
	<option value="AR-FM">Argentina - Formosa</option>
	<option value="AR-JY">Argentina - Jujuy</option>
	<option value="AR-LP">Argentina - La Pampa</option>
	<option value="AR-LR">Argentina - La Rioja</option>
	<option value="AR-MZ">Argentina - Mendoza</option>
	<option value="AR-MN">Argentina - Misiones</option>
	<option value="AR-NQ">Argentina - Neuqu&#233;n</option>
	<option value="AR-RN">Argentina - Rio Negro</option>
	<option value="AR-SA">Argentina - Salta</option>
	<option value="AR-SJ">Argentina - San Juan</option>
	<option value="AR-SL">Argentina - San Luis</option>
	<option value="AR-SC">Argentina - Santa Cruz</option>
	<option value="AR-SF">Argentina - Santa Fe</option>
	<option value="AR-SE">Argentina - Santiago del Estero</option>
	<option value="AR-TF">Argentina - Tierra del Fuego</option>
	<option value="AR-TM">Argentina - Tucum&#225;n</option>
	<option value="AM">Armenia</option>
	<option value="AW">Aruba</option>
	<option value="AU-ACT">Australia - Australian Capital Territory</option>
	<option value="AU1">Australia - Lord Howe Island</option>
	<option value="AU-NSW">Australia - New South Wales</option>
	<option value="AU3">Australia - New South Wales (exception)</option>
	<option value="AU-NT">Australia - Northern Territory</option>
	<option value="AU-QLD">Australia - Queensland</option>
	<option value="AU-SA">Australia - South Australia</option>
	<option value="AU-TAS">Australia - Tasmania</option>
	<option value="AU-VIC">Australia - Victoria</option>
	<option value="AU-WA">Australia - Western Australia</option>
	<option value="AU-WA1">Australia - Western Australia (Exception)</option>
	<option value="AT">Austria</option>
	<option value="AZ">Azerbaijan</option>
	<option value="BS">Bahamas</option>
	<option value="BH">Bahrain</option>
	<option value="BD">Bangladesh</option>
	<option value="BB">Barbados</option>
	<option value="BY">Belarus</option>
	<option value="BE">Belgium</option>
	<option value="BZ">Belize</option>
	<option value="BJ">Benin</option>
	<option value="BM">Bermuda</option>
	<option value="BT">Bhutan</option>
	<option value="BO">Bolivia, Plurinational State of</option>
	<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
	<option value="BA">Bosnia and Herzegovina</option>
	<option value="BW">Botswana</option>
	<option value="BR-AC">Brazil - Acre</option>
	<option value="BR-AL">Brazil - Alagoas</option>
	<option value="BR-AP">Brazil - Amapa</option>
	<option value="BR-AM">Brazil - Amazonas</option>
	<option value="BR-AM1">Brazil - Amazonas (far west)</option>
	<option value="BR-BA">Brazil - Bahia</option>
	<option value="BR-CE">Brazil - Ceara</option>
	<option value="BR-DF">Brazil - Distrito Federal</option>
	<option value="BR-ES">Brazil - Espirto Santo</option>
	<option value="BR-FN">Brazil - Fernando de Noronha</option>
	<option value="BR-GO">Brazil - Goias</option>
	<option value="BR-MA">Brazil - Maranhao</option>
	<option value="BR-MT">Brazil - Mato Grosso</option>
	<option value="BR-MT1">Brazil - Mato Grosso (Araguaia region)</option>
	<option value="BR-MS">Brazil - Mato Grosso do Sul</option>
	<option value="BR-MG">Brazil - Minas Gerais</option>
	<option value="BR-PA1">Brazil - Para (eastern)</option>
	<option value="BR-PA2">Brazil - Para (western)</option>
	<option value="BR-PB">Brazil - Paraiba</option>
	<option value="BR-PR">Brazil - Parana</option>
	<option value="BR-PE">Brazil - Pernambuco</option>
	<option value="BR-PI">Brazil - Piaui</option>
	<option value="BR-RJ">Brazil - Rio de Janeiro</option>
	<option value="BR-RN">Brazil - Rio Grande do Norte</option>
	<option value="BR-RS">Brazil - Rio Grande do Sul</option>
	<option value="BR-RO">Brazil - Rondonia</option>
	<option value="BR-RR">Brazil - Roraima</option>
	<option value="BR-SC">Brazil - Santa Catarina</option>
	<option value="BR-SP">Brazil - Sao Paulo</option>
	<option value="BR-SE">Brazil - Sergipe</option>
	<option value="BR-TO">Brazil - Tocantins</option>
	<option value="BIOT">British Indian Ocean Territory (BIOT) - Diego Garcia</option>
	<option value="BN">Brunei Darussalam</option>
	<option value="BG">Bulgaria</option>
	<option value="BF">Burkina Faso</option>
	<option value="BI">Burundi</option>
	<option value="CV">Cabo Verde</option>
	<option value="KH">Cambodia</option>
	<option value="CM">Cameroon</option>
	<option value="CA-AB">Canada - Alberta</option>
	<option value="CA-BC">Canada - British Columbia</option>
	<option value="CA-BC1">Canada - British Columbia (exception 1)</option>
	<option value="CA-BC2">Canada - British Columbia (exception 2)</option>
	<option value="CA2">Canada - Labrador</option>
	<option value="CA2A">Canada - Labrador (exception)</option>
	<option value="CA-MB">Canada - Manitoba</option>
	<option value="CA-NB">Canada - New Brunswick</option>
	<option value="CA-NF">Canada - Newfoundland</option>
	<option value="CA-NT">Canada - Northwest Territories</option>
	<option value="CA-NS">Canada - Nova Scotia</option>
	<option value="CA-NT2A">Canada - Nunavut - Southampton Island</option>
	<option value="CA-NT2B">Canada - Nunavut (Central)</option>
	<option value="CA-NT2">Canada - Nunavut (Eastern)</option>
	<option value="CA-NT2C">Canada - Nunavut (Mountain)</option>
	<option value="CA-ON">Canada - Ontario</option>
	<option value="CA-ON1">Canada - Ontario (western)</option>
	<option value="CA-PE">Canada - Prince Edward Island</option>
	<option value="CA-QC">Canada - Quebec</option>
	<option value="CA-QC1">Canada - Quebec (far east)</option>
	<option value="CA-SK">Canada - Saskatchewan</option>
	<option value="CA-SK2">Canada - Saskatchewan (exceptions - east)</option>
	<option value="CA-SK1">Canada - Saskatchewan (exceptions - west)</option>
	<option value="CA-YT">Canada - Yukon</option>
	<option value="KY">Cayman Islands</option>
	<option value="CF">Central African Republic</option>
	<option value="TD">Chad</option>
	<option value="CL">Chile</option>
	<option value="CL2">Chile - Easter Island</option>
	<option value="CL3">Chile - Magallanes</option>
	<option value="CN">China</option>
	<option value="CX">Christmas Island (Indian Ocean)</option>
	<option value="CC">Cocos (Keeling) Islands</option>
	<option value="CO">Colombia</option>
	<option value="KM">Comoros</option>
	<option value="CG">Congo</option>
	<option value="CD2">Congo, Democratic Republic of - (Eastern)</option>
	<option value="CD">Congo, Democratic Republic of - (Western)</option>
	<option value="CK">Cook Islands</option>
	<option value="CR">Costa Rica</option>
	<option value="CI">Cote D&#39;Ivoire</option>
	<option value="HR">Croatia</option>
	<option value="CU">Cuba</option>
	<option value="CW">Cura&#231;ao</option>
	<option value="CY">Cyprus</option>
	<option value="CZ">Czech Republic</option>
	<option value="DK">Denmark</option>
	<option value="DJ">Djibouti</option>
	<option value="DM">Dominica</option>
	<option value="DO">Dominican Republic</option>
	<option value="EC">Ecuador</option>
	<option value="EC2">Ecuador - Galapagos Islands</option>
	<option value="EG">Egypt</option>
	<option value="SV">El Salvador</option>
	<option value="GQ">Equatorial Guinea</option>
	<option value="ER">Eritrea</option>
	<option value="EE">Estonia</option>
	<option value="ET">Ethiopia</option>
	<option value="FK">Falkland Islands (Malvinas)</option>
	<option value="FO">Faroe Islands</option>
	<option value="FJ">Fiji</option>
	<option value="FI">Finland</option>
	<option value="FR">France</option>
	<option value="GF">French Guiana</option>
	<option value="PF2A">French Polynesia - Austral Islands</option>
	<option value="PF3">French Polynesia - Gambier Islands</option>
	<option value="PF1">French Polynesia - Marquesas Islands</option>
	<option value="PF">French Polynesia - Society Islands (including Tahiti)</option>
	<option value="PF2B">French Polynesia - Tuamotu Archipelago</option>
	<option value="GA">Gabon</option>
	<option value="GM">Gambia</option>
	<option value="GE">Georgia</option>
	<option value="DE">Germany</option>
	<option value="GH">Ghana</option>
	<option value="GI">Gibraltar</option>
	<option value="GR">Greece</option>
	<option value="GL4">Greenland - Danmarkshavn</option>
	<option value="GL">Greenland - Greenland</option>
	<option value="GL3">Greenland - Ittoqqortoormiit</option>
	<option value="GL2">Greenland - Pituffik</option>
	<option value="GD">Grenada</option>
	<option value="GP">Guadeloupe</option>
	<option value="GU">Guam</option>
	<option value="GT">Guatemala</option>
	<option value="GG">Guernsey</option>
	<option value="GN">Guinea</option>
	<option value="GW">Guinea-Bissau</option>
	<option value="GY">Guyana</option>
	<option value="HT">Haiti</option>
	<option value="VA">Holy See</option>
	<option value="HN">Honduras</option>
	<option value="HK">Hong Kong</option>
	<option value="HU">Hungary</option>
	<option value="IS">Iceland</option>
	<option value="IN">India</option>
	<option value="ID2">Indonesia - (Central)</option>
	<option value="ID3">Indonesia - (Eastern)</option>
	<option value="ID">Indonesia - (Western)</option>
	<option value="IR">Iran, Islamic Republic of</option>
	<option value="IQ">Iraq</option>
	<option value="IE">Ireland</option>
	<option value="IM">Isle of Man</option>
	<option value="IL">Israel</option>
	<option value="IT">Italy</option>
	<option value="JM">Jamaica</option>
	<option value="JP">Japan</option>
	<option value="JE">Jersey</option>
	<option value="UM1">Johnston Atoll (U.S.)</option>
	<option value="JO">Jordan</option>
	<option value="KZ">Kazakhstan - (Eastern)</option>
	<option value="KZ1">Kazakhstan - (Western)</option>
	<option value="KE">Kenya</option>
	<option value="KI">Kiribati - Gilbert Islands</option>
	<option value="KI2">Kiribati - Line Islands</option>
	<option value="KI3">Kiribati - Phoenix Islands</option>
	<option value="KW">Kuwait</option>
	<option value="KG">Kyrgyzstan</option>
	<option value="LA">Lao People&#39;s Democratic Republic</option>
	<option value="LV">Latvia</option>
	<option value="LB">Lebanon</option>
	<option value="LS">Lesotho</option>
	<option value="LR">Liberia</option>
	<option value="LY">Libya</option>
	<option value="LI">Liechtenstein</option>
	<option value="LT">Lithuania</option>
	<option value="LU">Luxembourg</option>
	<option value="MO">Macao</option>
	<option value="MK">Macedonia, The Former Yugoslav Republic Of</option>
	<option value="MG">Madagascar</option>
	<option value="MW">Malawi</option>
	<option value="MY">Malaysia</option>
	<option value="MV">Maldives</option>
	<option value="ML">Mali</option>
	<option value="MT">Malta</option>
	<option value="MH">Marshall Islands</option>
	<option value="MQ">Martinique</option>
	<option value="MR">Mauritania</option>
	<option value="MU">Mauritius</option>
	<option value="YT">Mayotte</option>
	<option value="MX-AGU">Mexico - Aguascalientes</option>
	<option value="MX-BCN">Mexico - Baja California</option>
	<option value="MX-BCN1">Mexico - Baja California (Border Region)</option>
	<option value="MX-BCS">Mexico - Baja California Sur</option>
	<option value="MX-CAM">Mexico - Campeche</option>
	<option value="MX-CHP">Mexico - Chiapas</option>
	<option value="MX-CHH">Mexico - Chihuahua</option>
	<option value="MX-CHH2">Mexico - Chihuahua (NE Border Region)</option>
	<option value="MX-CHH1">Mexico - Chihuahua (NW Border Region)</option>
	<option value="MX-COA">Mexico - Coahuila</option>
	<option value="MX-COA1">Mexico - Coahuila (Border Region)</option>
	<option value="MX-COL">Mexico - Colima</option>
	<option value="MX-DIF">Mexico - Distrito Federal</option>
	<option value="MX-DUR">Mexico - Durango</option>
	<option value="MX-GUA">Mexico - Guanajuato</option>
	<option value="MX-GRO">Mexico - Guerrero</option>
	<option value="MX-HID">Mexico - Hidalgo</option>
	<option value="MX-JAL">Mexico - Jalisco</option>
	<option value="MX-MEX">Mexico - Mexico State</option>
	<option value="MX-MIC">Mexico - Michoac&#225;n</option>
	<option value="MX-MOR">Mexico - Morelos</option>
	<option value="MX-NAY">Mexico - Nayarit</option>
	<option value="MX-NAY1">Mexico - Nayarit (Exception)</option>
	<option value="MX-NLE">Mexico - Nuevo Le&#243;n</option>
	<option value="MX-NLE1">Mexico - Nuevo Le&#243;n (Border Region)</option>
	<option value="MX-OAX">Mexico - Oaxaca</option>
	<option value="MX-PUE">Mexico - Puebla</option>
	<option value="MX-QUE">Mexico - Quer&#233;taro</option>
	<option value="MX-ROO">Mexico - Quintana Roo</option>
	<option value="MX-SLP">Mexico - San Luis Potos&#237;</option>
	<option value="MX-SIN">Mexico - Sinaloa</option>
	<option value="MX-SON">Mexico - Sonora</option>
	<option value="MX-TAB">Mexico - Tabasco</option>
	<option value="MX-TAM">Mexico - Tamaulipas</option>
	<option value="MX-TAM1">Mexico - Tamaulipas (Border Region)</option>
	<option value="MX-TLA">Mexico - Tlaxcala</option>
	<option value="MX-VER">Mexico - Veracruz</option>
	<option value="MX-YUC">Mexico - Yucatan</option>
	<option value="MX-ZAC">Mexico - Zacatecas</option>
	<option value="FM">Micronesia, Federated States Of - Kosrae, Pohnpei</option>
	<option value="FM1">Micronesia, Federated States Of - Yap, Chuuk</option>
	<option value="UM2">Midway Islands (U.S.)</option>
	<option value="MD">Moldova, Republic of</option>
	<option value="MC">Monaco</option>
	<option value="MN">Mongolia - (Central and Eastern)</option>
	<option value="MN1">Mongolia - (Western)</option>
	<option value="ME">Montenegro</option>
	<option value="MS">Montserrat</option>
	<option value="MA">Morocco</option>
	<option value="MZ">Mozambique</option>
	<option value="MM">Myanmar</option>
	<option value="NA">Namibia</option>
	<option value="NR">Nauru</option>
	<option value="NP">Nepal</option>
	<option value="NL">Netherlands</option>
	<option value="NC">New Caledonia</option>
	<option value="NZ">New Zealand</option>
	<option value="NZ2">New Zealand - Chatham Islands</option>
	<option value="NI">Nicaragua</option>
	<option value="NE">Niger</option>
	<option value="NG">Nigeria</option>
	<option value="NU">Niue</option>
	<option value="NF">Norfolk Island</option>
	<option value="KP">North Korea</option>
	<option value="CY2">Northern Cyprus</option>
	<option value="MP">Northern Mariana Islands</option>
	<option value="NO">Norway</option>
	<option value="OM">Oman</option>
	<option value="PK">Pakistan</option>
	<option value="PW">Palau</option>
	<option value="PS1">Palestine, State of - Gaza Strip</option>
	<option value="PS">Palestine, State of - West Bank</option>
	<option value="UM4">Palmyra Atoll (U.S.)</option>
	<option value="PA">Panama</option>
	<option value="PG">Papua New Guinea</option>
	<option value="PG-NSB">Papua New Guinea - Bougainville</option>
	<option value="PY">Paraguay</option>
	<option value="PE">Peru</option>
	<option value="PH">Philippines</option>
	<option value="PN">Pitcairn</option>
	<option value="PL">Poland</option>
	<option value="PT">Portugal</option>
	<option value="PT2">Portugal - Azores</option>
	<option value="PT1">Portugal - Madeira Islands</option>
	<option value="PR">Puerto Rico</option>
	<option value="QA">Qatar</option>
	<option value="RE">Reunion</option>
	<option value="RO">Romania</option>
	<option value="RU-AD">Russia - Adygea</option>
	<option value="RU-AL">Russia - Altai Republic</option>
	<option value="RU-ALT">Russia - Altaskiy Kray</option>
	<option value="RU-AMU">Russia - Amur</option>
	<option value="RU-ARK">Russia - Arkhangel&#39;</option>
	<option value="RU-AST">Russia - Astrakhan&#39;</option>
	<option value="RU-BA">Russia - Bashkortostan</option>
	<option value="RU-BEL">Russia - Belgorod</option>
	<option value="RU-BRY">Russia - Bryansk</option>
	<option value="RU-BU">Russia - Buryatia</option>
	<option value="RU-CE">Russia - Chechnya</option>
	<option value="RU-CHE">Russia - Chelyabinsk</option>
	<option value="RU-CHU">Russia - Chukot</option>
	<option value="RU-CU">Russia - Chuvashia</option>
	<option value="RU-RC">Russia - Crimea, Republic of</option>
	<option value="RU-DA">Russia - Dagestan</option>
	<option value="RU-IN">Russia - Ingushetia</option>
	<option value="RU-IRK">Russia - Irkutsk</option>
	<option value="RU-IVA">Russia - Ivanovo</option>
	<option value="RU-YEV">Russia - Jewish Autonomous Oblast&#39;</option>
	<option value="RU-KB">Russia - Kabardino-Balkaria</option>
	<option value="RU-KGD">Russia - Kaliningrad</option>
	<option value="RU-KL">Russia - Kalmykia</option>
	<option value="RU-KLU">Russia - Kaluga</option>
	<option value="RU-KAM">Russia - Kamchatka</option>
	<option value="RU-KC">Russia - Karachay-Cherkessia</option>
	<option value="RU-KR">Russia - Karelia</option>
	<option value="RU-KEM">Russia - Kemerovo</option>
	<option value="RU-KHA">Russia - Khabarovsk</option>
	<option value="RU-KK">Russia - Khakassia</option>
	<option value="RU-KHM">Russia - Khanty-Mansi</option>
	<option value="RU-KIR">Russia - Kirov</option>
	<option value="RU-KO">Russia - Komi</option>
	<option value="RU-KOS">Russia - Kostroma</option>
	<option value="RU-KDA">Russia - Krasnodar</option>
	<option value="RU-KYA">Russia - Krasnoyarsk</option>
	<option value="RU-KGN">Russia - Kurgan</option>
	<option value="RU-KRS">Russia - Kursk</option>
	<option value="RU-LEN">Russia - Leningradskaya Oblast&#39;</option>
	<option value="RU-LIP">Russia - Lipetsk</option>
	<option value="RU-MAG">Russia - Magadan</option>
	<option value="RU-ME">Russia - Mari El</option>
	<option value="RU-MO">Russia - Mordovia</option>
	<option value="RU-MOW">Russia - Moscow City</option>
	<option value="RU-MOS">Russia - Moskva</option>
	<option value="RU-MUR">Russia - Murmansk</option>
	<option value="RU-NEN">Russia - Nenets</option>
	<option value="RU-NIZ">Russia - Nizhniy Novgorod</option>
	<option value="RU-SE">Russia - North Ossetia-Alania</option>
	<option value="RU-NGR">Russia - Novgorod</option>
	<option value="RU-NVS">Russia - Novosibirsk</option>
	<option value="RU-OMS">Russia - Omsk</option>
	<option value="RU-ORL">Russia - Orel</option>
	<option value="RU-ORE">Russia - Orenburg</option>
	<option value="RU-PNZ">Russia - Penza</option>
	<option value="RU-PER">Russia - Perm</option>
	<option value="RU-PRI">Russia - Primorskiy</option>
	<option value="RU-PSK">Russia - Pskov</option>
	<option value="RU-ROS">Russia - Rostov</option>
	<option value="RU-RYA">Russia - Ryazan&#39;</option>
	<option value="RU-SA2">Russia - Sakha (Central)</option>
	<option value="RU-SA3">Russia - Sakha (Eastern)</option>
	<option value="RU-SA">Russia - Sakha (Western)</option>
	<option value="RU-SAK">Russia - Sakhalin</option>
	<option value="RU-SAK2">Russia - Sakhalin (Kuril Islands)</option>
	<option value="RU-SAM">Russia - Samara</option>
	<option value="RU-SAR">Russia - Saratov</option>
	<option value="RU-SEV">Russia - Sevastopol</option>
	<option value="RU-SMO">Russia - Smolensk</option>
	<option value="RU-SPE">Russia - St. Petersburg City</option>
	<option value="RU-STA">Russia - Stavropol</option>
	<option value="RU-SVE">Russia - Sverdlovsk</option>
	<option value="RU-TAM">Russia - Tambov</option>
	<option value="RU-TA">Russia - Tatarstan</option>
	<option value="RU-TOM">Russia - Tomsk</option>
	<option value="RU-TUL">Russia - Tula</option>
	<option value="RU-TY">Russia - Tuva</option>
	<option value="RU-TVE">Russia - Tver&#39;</option>
	<option value="RU-TYU">Russia - Tyumen&#39;</option>
	<option value="RU-UD">Russia - Udmurtia</option>
	<option value="RU-ULY">Russia - Ul&#39;yanovsk</option>
	<option value="RU-VLA">Russia - Vladimir</option>
	<option value="RU-VGG">Russia - Volgograd</option>
	<option value="RU-VLG">Russia - Vologda</option>
	<option value="RU-VOR">Russia - Voronezh</option>
	<option value="RU-YAN">Russia - Yamalo-Nenets</option>
	<option value="RU-YAR">Russia - Yaroslavl&#39;</option>
	<option value="RU-ZAB">Russia - Zabaykalsky</option>
	<option value="RW">Rwanda</option>
	<option value="BL">Saint Barthelemy</option>
	<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
	<option value="KN">Saint Kitts and Nevis</option>
	<option value="LC">Saint Lucia</option>
	<option value="MF">Saint Martin</option>
	<option value="PM">Saint Pierre and Miquelon</option>
	<option value="VC">Saint Vincent and The Grenadines</option>
	<option value="WS">Samoa</option>
	<option value="SM">San Marino</option>
	<option value="ST">Sao Tome and Principe</option>
	<option value="SA">Saudi Arabia</option>
	<option value="SN">Senegal</option>
	<option value="RS">Serbia</option>
	<option value="SC">Seychelles</option>
	<option value="SL">Sierra Leone</option>
	<option value="SG">Singapore</option>
	<option value="SX">Sint Maarten (Dutch part)</option>
	<option value="SK">Slovakia</option>
	<option value="SI">Slovenia</option>
	<option value="SB">Solomon Islands</option>
	<option value="SO">Somalia</option>
	<option value="ZA">South Africa</option>
	<option value="GS">South Georgia and the So