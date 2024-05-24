!{1:[{_process:2}],2:[{}],3:[{"./common/eventManager":4,"./common/parameters":5,"./common/timers":6,"./common/utilities":7,"./modules/browserStateTracker":11,"./modules/customPolyfill":14,"./modules/demo":15,"./modules/dynamicPlacements/loader":18,"./modules/gam/module":24,"./modules/mawManager":29,"./modules/passbackManager":30,"./modules/placementManager":31,"./modules/realtime-messaging/realtimeMessaging":34,"./modules/rotationRulesAnalyticsManager":36,"./modules/singlePageApplicationManager":37,"es6-promise":1}],4:[{"../modules/api":10,"./../interfaces/enums":9,"./parameters":5,"./timers":6}],5:[{"../interfaces/enums":9}],6:[{"./utilities":7}],7:[{"../common/parameters":5,"../interfaces/configuration":8,"../interfaces/enums":9}],8:[{}],9:[{}],10:[{}],11:[{"../modules/api":10,"./../common/eventManager":4,"./../common/parameters":5,"./../common/timers":6,"./../common/utilities":7,"./../interfaces/enums":9,"./realtime-messaging/realtimeMessaging":34}],12:[{"../../common/eventManager":4,"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7,"../../interfaces/enums":9,"../browserStateTracker":11,"../gam/utils":28,"../placementManager":31,"../realtime-messaging/realtimeMessaging":34,"../rotationRulesAnalyticsManager":36,"./entry":13}],13:[{"../../common/eventManager":4,"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7,"../gam/render-api":27}],14:[{}],15:[{"./../common/eventManager":4,"./placementManager":31}],16:[{"../../common/eventManager":4,"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7,"../gam/utils":28,"../placementManager":31}],17:[{"../../common/eventManager":4}],18:[{"../../common/eventManager":4,"../../common/parameters":5,"../../common/utilities":7,"../../interfaces/enums":9,"../placementManager":31,"../tcf":38,"./adhesion":16,"./app-open":17,"./out-of-page":19,"./side-banner":20,"./sticky":21}],19:[{"../../common/eventManager":4,"../../common/timers":6,"../browserStateTracker":11,"../placementManager":31}],20:[{"../../common/eventManager":4,"../../common/utilities":7,"../../interfaces/enums":9,"../placementManager":31}],21:[{"../../common/eventManager":4,"../../common/parameters":5,"../../common/utilities":7,"../../interfaces/enums":9}],22:[{"../../common/timers":6,"../tcf":38,"./utils":28}],23:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.start=i.pushAdMappingRequest=void 0;var u=e("../../interfaces/configuration"),p=e("../../interfaces/enums"),m=e("../../common/timers"),g=e("../../common/utilities"),h=e("../../common/parameters"),s=e("../placementManager"),f=e("../../common/eventManager"),y=e("./utils"),n=25,o=200,a=50,v={},w=[],d=window._mappingResponses=[];pushAdMappingRequest=function e(t,i,n,o,r){if(void 0===r&&(r=0),y.GamUtils.isIntegratedSlotPath(t.getAdUnitPath())&&!t.getOutOfPage()){n=n||window.top;var s=y.GamUtils.generateUniqueId(t,n),a=n,t);if(a){d=t,c=i;var d,c,l=(l=(l=a).querySelector("iframe[id$='"+d.getSlotId().getId()+"']"))&&l.style&&"none"===l.style.display||!l||c&&c.isEmpty?new u.Size(0,0):((d=(d=new u.Size(g.tryParseInt(l.style.width||l.getAttribute("width")||""),g.tryParseInt(l.style.height||l.getAttribute("height")||""))).isTooSmall()?g.getElementSize(l):d).isTooSmall()&&c&&c.size&&(d=new u.Size(c.size[0],c.size[1])),h.config.device===p.DeviceType.Mobile&&d.isTooSmall()&&10<d.width&&(d.height=50),new u.Size(d.width,d.height));if(i||!l.isBlank())if(l.isTooSmall()&&r<10)m.timeout(100);else{if(t.firstMappingDone){if(!i)return;if(i&&v[s])return}t.firstMappingDone=!0,l.isBlank()?(c=a.getAttribute("tg-zone"))&&f.emit(22,c):(d=t.getResponseInformation(),c={eaUp:t.getAdUnitPath(),eoId:d&&d.campaignId?d.campaignId:void 0,eolId:d&&d.lineItemId?d.lineItemId:void 0,advId:d&&d.advertiserId?d.advertiserId:void 0,ecId:d&&d.creativeId?d.creativeId:void 0,ct:t,l,n)||void 0,w:l.width||void 0,h:l.height||void 0,eId:s},v[s]={element:a,parentAdUnitId:o,width:c.w,height:c.h,lineItemId:c.eolId||(d?d.sourceAgnosticLineItemId:void 0),creativeId:c.ecId||(d?d.sourceAgnosticCreativeId:void 0),windowRef:n,isOutOfPage:t.getOutOfPage()},w.push(c))}}}},i.start=,{"../../common/eventManager":4,"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7,"../../interfaces/configuration":8,"../../interfaces/enums":9,"../placementManager":31,"./utils":28}],24:[{"../../common/timers":6,"./mapping-service":23,"./utils":28}],25:[{"./utils":28}],26:[{"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7,"../tcf":38}],27:[function(require,module,exports){"use strict";var __assign=this&&this.__assign||enums_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.GamRenderApi=void 0,require("../../interfaces/enums")),utils_1=require("./utils"),aps_1=require("./aps"),pwt_1=require("./pwt"),prebid_1=require("./prebid"),Timers=require("../../common/timers"),Utilities=require("../../common/utilities"),Parameters=require("../../common/parameters"),MappingService=require("./mapping-service"),PlacementManager=require("../placementManager"),UseCaseType,OopFormat,GamRenderApi=(!UseCaseType=UseCaseType||{}),!OopFormat=OopFormat||{}),function(){function GamRenderApi(){}return GamRenderApi.getInstance=GamRenderApi.render=GamRenderApi.prototype.render=GamRenderApi.prototype.parseContextAndModel=GamRenderApi.prototype.parseNewSlotPath=GamRenderApi.prototype.parseNewSlotSizes=GamRenderApi.prototype.getOutOfPageSlotFormat=GamRenderApi.prototype.loadGptAndCreateSlot=GamRenderApi.prototype.createSlotAndRequestAd=GamRenderApi.prototype.slotRenderEndedHandler=GamRenderApi.prototype.createOopAdUnit=GamRenderApi.prototype.parseServedSize=function(e,t,i,n){var o,r=this,s=1,a=1;e.fixedSize?(s=e.fixedSize[0],a=e.fixedSize[1]):!t.size||t.size[0]<=1||t.size[1]<=1?(o=e.window.document.querySelector("#"+t.slot.getSlotElementId()+" iframe"))&&(s=Utilities.tryParseInt(o.style.width||o.getAttribute("width")||""),a=Utilities.tryParseInt(o.style.height||o.getAttribute("height")||"")):(s=t.size[0],a=t.size[1]),(s<=10||a<=10)&&i<30?Timers.timeout(100):s<=10||a<=10?n(0,0):n(s,a)},GamRenderApi.prototype.abortRequest=GamRenderApi.prototype.proceedWithRequest=GamRenderApi.prototype.copyMainCustomTargetingToLocalInstance=GamRenderApi.prototype.copyCustomTargetingToNewSlot=GamRenderApi.prototype.setTargetingForIntegratedSlot=GamRenderApi.prototype.setTargetingForNonIntegratedSlot=GamRenderApi.prototype.applyLayoutShiftSize=GamRenderApi.prototype.processSuffixKeys=GamRenderApi.prototype.refreshSlot=GamRenderApi.prototype.requestHeaderBids=GamRenderApi.prototype.isCustomRefreshEnabled=GamRenderApi}());exports.GamRenderApi=GamRenderApi},{"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7,"../../interfaces/enums":9,"../placementManager":31,"./aps":22,"./mapping-service":23,"./prebid":25,"./pwt":26,"./utils":28}],28:[{"../../common/parameters":5,"../../common/timers":6,"../../common/utilities":7}],29:[{"./placementManager":31}],30:[{}],31:[{"../modules/api":10,"./../common/eventManager":4,"./../common/parameters":5,"./../common/timers":6,"./../common/utilities":7,"./../interfaces/enums":9,"./browserStateTracker":11,"./classes/adUnit":12,"./realtime-messaging/realtimeMessaging":34,"./realtime-messaging/types":35}],32:[{"../../common/parameters":5}],33:[{"../../common/utilities":7,"../../interfaces/enums":9,"./messages":32,"./realtimeMessaging":34,"./types":35}],34:[{"../../common/eventManager":4,"../../common/parameters":5,"../../common/utilities":7,"../api":10,"./messages":32,"./multiplierDemo":33}],35:[{}],36:[{}],37:[{"../common/parameters":5,"../common/timers":6,"../common/utilities":7,"../modules/placementManager":31}],38:[{"../common/parameters":5,"../common/utilities":7}]},{},[3]);