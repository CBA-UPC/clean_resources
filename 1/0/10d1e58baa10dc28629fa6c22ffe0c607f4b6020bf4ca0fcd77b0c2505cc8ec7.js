"use strict";(self.mvWrapperJsonp=self.mvWrapperJsonp||[]).push([[1664],{1664:(t,e,i)=>{i.r(e),i.d(e,{default:);var s=i(7562),o=i(4515),r=((r||{}),n=(t=>(t[t.bidAdjustment=.7]="bidAdjustment",t.id="indexExchange",t.testSiteId="199990",t[t.timeout=1e3]="timeout",t))(n||{});const a={[o.l.mediavine]:{desktop:{ctp:"341819",outstream:"502649",stickyOutstream:"1018789"},mobile:{ctp:"341821",outstream:"502650",stickyOutstream:"1018790"}},[o.l.pubnation]:{desktop:{ctp:"872634",outstream:"1018792",stickyOutstream:"872633"},mobile:{ctp:"872636",outstream:"1018791",stickyOutstream:"872632"}},[o.l.journey]:{desktop:{ctp:"",outstream:"",stickyOutstream:""},mobile:{ctp:"",outstream:"",stickyOutstream:""}},[o.l.adsbymediavine]:{desktop:{ctp:"",outstream:"",stickyOutstream:""},mobile:{ctp:"",outstream:"",stickyOutstream:""}}},d={[o.l.mediavine]:{accountId:"17404",categoryLength:40,id:"rubicon",siteId:{desktop:"169104",mobile:"169104"},sizeId:201,outstreamSizeId:203,testAccountId:"7780",testSizeId:87184,testZone:"412394",zoneDesktopCTP:{unsensitive:"891510",sensitive:"891510"},zoneMobileCTP:{unsensitive:"891512",sensitive:"891512"}},[o.l.pubnation]:{accountId:"24214",categoryLength:40,id:"rubicon",siteId:{desktop:"499906",mobile:"499920"},sizeId:201,outstreamSizeId:203,testAccountId:"7780",testSizeId:87184,testZone:"412394",zoneDesktopCTP:{unsensitive:"2979468",sensitive:"3003876"},zoneMobileCTP:{unsensitive:"2979542",sensitive:"3003892"}},[o.l.journey]:{accountId:"",categoryLength:40,id:"rubicon",siteId:{desktop:"",mobile:""},sizeId:201,outstreamSizeId:203,testAccountId:"7780",testSizeId:87184,testZone:"412394",zoneDesktopCTP:{unsensitive:"",sensitive:""},zoneMobileCTP:{unsensitive:"",sensitive:""}},[o.l.adsbymediavine]:{accountId:"",categoryLength:40,id:"rubicon",siteId:{desktop:"",mobile:""},sizeId:201,outstreamSizeId:203,testAccountId:"7780",testSizeId:87184,testZone:"412394",zoneDesktopCTP:{unsensitive:"",sensitive:""},zoneMobileCTP:{unsensitive:"",sensitive:""}}},u={[o.l.mediavine]:{mobile:{unsticky:{unsensitive:"2831370",sensitive:"2787476"},sticky:{unsensitive:"2761118",sensitive:"2787480"}},desktop:{unsticky:{unsensitive:"2831368",sensitive:"2787474"},sticky:{unsensitive:"2761116",sensitive:"2787478"}}},[o.l.pubnation]:{mobile:{unsticky:{unsensitive:"2979538",sensitive:"3003888"},sticky:{unsensitive:"2979540",sensitive:"3003890"}},desktop:{unsticky:{unsensitive:"2979464",sensitive:"3003870"},sticky:{unsensitive:"2979466",sensitive:"3003872"}}},[o.l.journey]:{mobile:{unsticky:{unsensitive:"",sensitive:""},sticky:{unsensitive:"",sensitive:""}},desktop:{unsticky:{unsensitive:"",sensitive:""},sticky:{unsensitive:"",sensitive:""}}},[o.l.adsbymediavine]:{mobile:{unsticky:{unsensitive:"",sensitive:""},sticky:{unsensitive:"",sensitive:""}},desktop:{unsticky:{unsensitive:"",sensitive:""},sticky:{unsensitive:"",sensitive:""}}}},l={[o.l.pubnation]:{stickyOutstreamDesktop:"Pubnation_sticky_desktop_outstream_Prebid",stickyOutstreamMobile:"Pubnation_sticky_mobile_outstream_Prebid",outstreamDesktop:"Pubnation_desktop_outstream_Prebid",outstreamMobile:"Pubnation_mobile_outstream_Prebid"},[o.l.mediavine]:{stickyOutstreamDesktop:"Mediavine_sticky_desktop_outstream_Prebid",stickyOutstreamMobile:"Mediavine_sticky_mobile_outstream_Prebid",outstreamDesktop:"Mediavine_desktop_outstream_Prebid",outstreamMobile:"Mediavine_mobile_outstream_Prebid"},[o.l.journey]:{stickyOutstreamDesktop:"",stickyOutstreamMobile:"",outstreamDesktop:"",outstreamMobile:""},[o.l.adsbymediavine]:{stickyOutstreamDesktop:"",stickyOutstreamMobile:"",outstreamDesktop:"",outstreamMobile:""}};var p=i(8074),c=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(t,e,i)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;const g={adSlotOutstreamDesktop:"desktop_outstream",adSlotOutstreamMobile:"mobile_outstream",adSlotStickyOutstreamDesktop:"sticky_outstream_desktop",adSlotStickyOutstreamMobile:"sticky_outstream_mobile",adSlotAdhesion:"adhesion_video",adSlotDesktop:"desktop_video",adSlotMobile:"mobile_video",adSlotSticky:"sticky_video",id:"pubmatic",publisherId:"157108",testAdSlot:"test_video",testPublisherId:"157593"},_=new Map;var O;_.set("1",g),_.set("2",(O=((t,e)=>{for(var i in e||(e={}))y.call(e,i)&&v(t,i,e[i]);if(h)for(var i of h(e))k.call(e,i)&&v(t,i,e[i]);return t})({},g),m(O,b({publisherId:"162150"}))));var S=i(2845),f=i(7475),I=i(2946),M=i(5595),P=i(8152),B=i(5077),D=i(9860),w=i(3583);class A{constructor(t,e,i={},o){this.options=t,this.overrides=i,this.webModel=e,this.playerHeight=this.options.contentHeight||s.t_,this.playerWidth=this.options.contentWidth||s.UI,this.testBids=o||{},this.isOutstream=!!this.options.isOutstream,this.isSticky=this.options.placement===p.ug.floating,this.minDuration=this.isOutstream?s.Og:s.bM,this.maxDuration=this.isOutstream?s.qA:s.bg,this.skippable=!this.isOutstream}calcFloor(t){const e=(0,P.BL)(this.options.adunitId),i=this.isOutstream?B.D.outstream:B.D.video,s=f.CP.getBidderFloor(this.webModel,t,i,e);return(0,D.Mn)(s+.01,w.bZ)}get amazon(){const t=this.calcFloor(S.SL.uam);let e;return e=this.options.mobile?this.isOutstream?this.isSticky?r.siteIdStickyOutstreamMobile:r.siteIdOutstreamMobile:this.options.autoplay?r.siteIdAutoplayMobile:r.siteIdCTPMobile:this.isOutstream?this.isSticky?r.siteIdStickyOutstreamDesktop:r.siteIdOutstreamDesktop:this.options.autoplay?r.siteIdAutoplayDesktop:r.siteIdCTPDesktop,{bidder:S.SL.uam,isSticky:this.isSticky,params:{bidfloor:t,slotId:e}}}getIndexExchangeBidRequest(t){const e=this.testBids.indexExchange;let i;if(e)i=n.testSiteId;else{const t=this.webModel.offering.offering_code,e=this.options.mobile?"mobile":"desktop",s=this.isOutstream?this.isSticky?"stickyOutstream":"outstream":"ctp";i=a[t][e][s]}return{bidder:S.SL.indexExchange,isSticky:this.isSticky,params:{bidFloor:this.calcFloor(S.SL.indexExchange),bidFloorCur:"USD",debug:e,referrer:(null==top?void 0:top.window.location.href)||"",siteId:i,size:[this.playerWidth,this.playerHeight],timeout:n.timeout}}}get S2S(){const t=I.Rw.new(this.webModel),e=t.bidder,i=t.mediaType;return{bidder:S.tO.S2S,params:{floor:this.calcFloor(S.SL.S2S),autoplay:this.options.autoplay,mobile:this.options.mobile,desktop:!this.options.mobile,placement:this.isOutstream?this.options.placement:p.ug.stream,plcmt:this.isOutstream?this.options.plcmt:p.rI.instream,skip:this.isOutstream?0:1,liftTestBidder:e,liftTestMediaType:i}}}getPubmaticBidRequest(t){var e;const i=(null==(e=this.webModel.offering)?void 0:e.id)||o.l.mediavine,s=_.get(i)||g,r=`${this.playerWidth}x${this.playerHeight}`;let n,a=s.publisherId;const d=this.isOutstream&&(0,M.DY)("test","outstream");return this.testBids.pubmatic||d?(a=s.testPublisherId,n=`${s.testAdSlot}@${r}`):n=this.isOutstream?this.options.placement===p.ug.floating?this.options.mobile?`${s.adSlotStickyOutstreamMobile}@${r}`:`${s.adSlotStickyOutstreamDesktop}@${r}`:this.options.mobile?`${s.adSlotOutstreamMobile}@${r}`:`${s.adSlotOutstreamDesktop}@${r}`:this.isMobileAutoplay()?`${s.adSlotAdhesion}@${r}`:!this.options.mobile&&this.options.sticky||this.isDesktopAutoplay()?`${s.adSlotSticky}@${r}`:this.options.mobile?`${s.adSlotMobile}@${r}`:`${s.adSlotDesktop}@${r}`,{bidder:S.SL.pubmatic,params:{adSlot:n,kadfloor:this.calcFloor(S.SL.pubmatic).toString(),bcat:this.webModel.iabOptouts,outstreamAU:"no thank you",publisherId:a}}}getRubiconBidRequest(t){const e=this.webModel.offering.offering_code,i=d[e],o=u[e],r=this.testBids.rubicon;let n,a=this.calcFloor(S.SL.rubicon);const l=this.isSticky?"sticky":"unsticky",p=this.options.mobile?"mobile":"desktop",c=this.webModel.triplelift_sensitive?"sensitive":"unsensitive";return r?(n=i.testZone,a=s.FW):n=this.isOutstream?o[p][l][c]:this.options.mobile?i.zoneMobileCTP[c]:i.zoneDesktopCTP[c],{bidder:S.SL.rubicon,isSticky:this.isSticky,params:{accountId:r?i.testAccountId:i.accountId,siteId:r?i.testSizeId:i.siteId[p],zoneId:n,floor:r?s.FW:a,inventory:{category:this.webModel.categories.map(()},video:{aeParams:{"p_aso.video.ext.boxingallowed":"1"},language:"en",size_id:this.isOutstream?i.outstreamSizeId:i.sizeId}}}}getTripleliftBidRequest(t){var e;let i="";const{offering_code:s}=this.webModel.offering;return this.isOutstream&&(i=this.isSticky?this.options.mobile?l[s].stickyOutstreamMobile:null==(e=l[s])?void 0:e.stickyOutstreamDesktop:this.options.mobile?l[s].outstreamMobile:l[s].outstreamDesktop),i?{bidder:S.L4.triplelift,isSticky:this.isSticky,params:{floor:this.calcFloor(S.L4.triplelift),inventoryCode:i}}:null}isMobileAutoplaysDesktopAutoplay(){return!this.options.mobile&&!!this.options.manualOptions.isAutoplay}}var T=i(6057),z=i(6091),x=Object.defineProperty,$=Object.defineProperties,C=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,R=q=V=class H{constructor(t,e,i=window.pbjs,s,o,r={}){this.webModel=e,this.auctionHouse=s,this.liftTest=o,this.options=t,this.overrides=r,this.prebid=i,this.isOutstream=!!this.options.isOutstream,this.testBids=H.getTestBids();const n=(0,z.RR)(this.testBids).filter((),a=!!n.length;a&&i.setConfig({debugging:{bidders:n,adUnitCode:"content_2_outstream_desktop",bids:n.map((),enabled:a}})}static getTestBids(){const t=(0,M.Ph)("video_test_bids",window.location.search)||"";return Object.keys(S.SL).reduce(((e,i)=>V(q({},e),{[i]:-1!==t.indexOf(i)})),{})}getFormattedBidFromAuctionHouse(t,e){const i=new T.d(this.webModel,e,{}),{highestBid:s,hbCount:o}=this.auctionHouse.getHighestBidData(e,i,t);return s?{formattedBid:V(q({},this.formatBidAsDFPCustomParams(s)),{hb_count:o}),highBid:s}:this.webModel.google?{formattedBid:{hb_bid:0,hb_count:0}}:{formattedBid:{error:"No bids returned",maxBid:0}}}runVideoAuction(t){return e=this,i=null,o=function*(){return new Promise(((e,i)=>{this.prebid.bidderSettings=q(q({},this.prebid.bidderSettings),this.bidderSettings),this.prebid.que.push((()=>{this.prebid.requestBids({adUnits:[this.getAdUnits(t)],auctionId:B.D.video,bidsBackHandler:timeout:s.r2})}))}))},new Promise(();var e,i,o}getAdUnits(t={}){const e=[this.options.contentWidth,this.options.contentHeight];return{bids:this.getBidRequests(t),code:this.options.adunitId,mediaTypes:{video:{api:[p.bl.VPAID_1_0,p.bl.VPAID_2_0],boxingallowed:1,context:this.isOutstream?"outstream":"instream",delivery:[p.Gl.progressive],linearity:p.cU.linear,maxduration:this.isOutstream?s.qA:s.bg,minduration:this.isOutstream?s.Og:s.bM,maxbitrate:s.uu,mimes:this.options.mimes,placement:this.isOutstream?this.options.placement:p.ug.stream,plcmt:this.isOutstream?this.options.plcmt:p.rI.instream,playbackmethod:this.options.autoplay?[p.ZA.autoplaySoundOff]:[p.ZA.ctp],playerSize:e,protocols:[p.b$.VAST_2_0,p.b$.VAST_3_0,p.b$.VAST_2_0_wrapper,p.b$.VAST_3_0_wrapper,p.b$.VAST_4_0,p.b$.VAST_4_0_wrapper],skip:this.isOutstream?0:1,startdelay:t.startDelay||0,h:this.options.contentHeight,w:this.options.contentWidth}}}}get bidderSettings(){return{[n.id]:{adserverTargeting:[{key:"hb_vpmp_ixVideo",val:]}}}getBidRequests(t){const e=new A(this.options,this.webModel,this.overrides,this.testBids);let i=[];if(this.shouldGetBid("indexExchange")&&i.push(e.getIndexExchangeBidRequest(t)),this.shouldGetBid("uam")&&i.push(e.amazon),this.shouldGetBid("pubmatic")&&i.push(e.getPubmaticBidRequest(t)),this.shouldGetBid("rubicon")){const s=e.getRubiconBidRequest(t);s&&i.push(s)}if(this.shouldGetBid("triplelift")){const s=e.getTripleliftBidRequest(t);s&&i.push(s)}if(this.liftTest.bidder&&this.liftTest.isVideo()&&this.liftTest.isPrebid()){const t=this.liftTest.bidder;i=i.filter(()}return i.unshift(e.S2S),i}sOutstreamBidder(t){return Boolean(this.webModel[t]&&S.L4[t])}isVideoBidder(t){return Boolean(this.webModel[t]&&S.SL[t])}formatBidAsDFPCustomParams(t){let e;if(t&&"number"==typeof t.cpm){const i=200;e=t.cpm<i?t.cpm.toFixed(s.QC):"200.00"}else e="no_bid";let i=t.s2sBidder?`${t.s2sBidder}_s2s`:t.bidderCode;return i=i.substring(0,20),{hb_bid:e,hb_pb:t.adserverTargeting.hb_pb,hb_ub:t.adserverTargeting.hb_ub,hb_uuid:t.videoCacheKey,hb_bidder:i}}}}}]);