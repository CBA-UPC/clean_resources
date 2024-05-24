![},function(e,t,n){var r=n(21),i=n(2),o=n(1),a=n(4),s=n(0),c=n(3),d=n(32),l=n(63),u={},f={prebid:{configKey:"prebidConfig"},aps:{configKey:"apsConfig"}},},},},v=function(e){i.isEmpty(e.bidderSettings)&&(e.bidderSettings={standard:{allowZeroCpmBids:!0,alwaysUseBid:!1,adserverTargeting:[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(e){return e.pbHg}},{key:"hb_pb_rounded",va}},{key:"hb_w",val:function(e){return e.width}},{key:"hb_h",val:function(e){return e.height}},{key:"hb_deal",va}},{key:"hb_cache_id",val:function(e){return e.videoCacheKey}},{key:"hb_uuid",val:function(e){return e.videoCacheKey}},{key:"hb_src",val:function(e){return e.source}},{key:"hb_format",va}}]}})},},},},},},};e.exports={ini},fetchPrebidSlot},setTargetin}}},function(e,t,n){"use strict";n.r(t),n.d(t,"EventsApi"}));var r,i,o,a,s,c,d,l,u,f,p,h,g,v,m,y,w=Object.defineProperty,b=Object.defineProperties,A=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,n,),I={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",encod},decod},_utf8_encod},_utf8_decod}},k="v2",O=window,D=document,e,},P={send:new Map},R=[],L="true"===N("lensDebug"),},),},M=Date.now(),},},),),},q=1,},},),J=["treatment_1.1","fake_treatment_1.1","treatment_1.2","fake_treatment_1.2","treatment_1.3","fake_treatment_1.3","control_2","fake_control_2"],G=Boolean(D.hasStorageAccess)&&Boolean(D.requestStorageAccess)&&Boolean(D.requestStorageAccessFor),Y=()=>G,X=e=>{r=e},Q=e=>{i=e},ee=()=>C(void 0,null,(function*(){try{const e=yield navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:"https://events.ocdn.eu"});"granted"===e.state?(X(!0),yield D.requestStorageAccessFor("https://events.ocdn.eu")):"prompt"===e.state&&(X(!1),D.body.addEventListener("click}))}catch(e){}})),te=()=>C(void 0,null,(function*(){if("requestStorageAccessFor"in D)try{yield D.requestStorageAccessFor("https://events.ocdn.eu"),Q(!0)}catch(e){Q(!1)}})),ne=["PageView","PaidEvent"],re=["PageView","ClkEvent","VidEvent","UserAction","KeepAlive","EmissionEvent","ErrEvent"],ie=["ClkEvent","ErrEvent","KeepAlive","PageView","PaidEvent","PerfEvent","UserAction","VidEvent"],oe=({account:e,event:t,fields:n,type:o,version:a},s)=>{var c,d,l,u,f,p,h,g,v,m,y,w;const b={_et:t,_ac:e,_rt:o,_lu:$e(),_tcfv2:null==(c=et())?void 0:c.tcfv2Consent,_it:Ue()};"local"!==Ce()&&(b._gu=Pe());try{b._fv=null==(d=JSON.parse(decodeURIComponent(N("acc_variant"))))?void 0:d.current}catch(e){try{b._fv=atob(null==(f=null==(u=null==(l=O.ringDataLayer)?void 0:l.context)?void 0:u.variant)?void 0:f.accelerator)}catch(e){}}_e()&&(b._af="1"),Me()&&(b._ie="1");const A=null==(p=O.ringDataLayer)?void 0:p.ads,E=null!=(h=null==A?void 0:A.grid)?h:void 0,T=null==(g=null==A?void 0:A.supported)?void 0:g.grids,_=null!=(m=null==(v=O.dlApi)?void 0:v.kropka)?m:{};let S;try{const e=null==(y=O.ringDataLayer)?void 0:y.user;if(x(Object,e)&&(S=JSON.parse(JSON.stringify(e)),"PageView"===t)){const e=JSON.parse(decodeURIComponent(localStorage.getItem("id5"))).universal_uid;null!=e&&(H(S).id.external.id5=e)}}catch(e){}if("PageView"===t){b.CDL=Xe(),b.RWSF=parseInt([i,r,Y()].map(e=>""+ +(null!=e&&e)).join(""),2);for(const e in _)"DV"!==e&&"DO"!==e&&(b[e]=_[e])}const C=null!=E||null!=T?W({grid:E,supported:null!=T?{grids:T}:void 0}):void 0,I=W(null==(w=O.ringDataLayer)?void 0:w.context),k=W(S),D={ip:e=>e.pgid,iz:e=>{const t=parseInt(e.kropka&&e.kropka.IZ,10);return isNaN(t)?void 0:t},i},d),du:e=>e.du&&decodeURIComponent(e.du),d),iv,ti)};x(Array,n)&&n.forEac}),Object.assign(b,ne.indexOf(t)>=0?{RDLA:C}:{},re.indexOf(t)>=0?{RDLC:I}:{},ie.indexOf(t)>=0?{RDLU:k}:{},s);for(const e in b){const t=b[e];void 0===t?delete b[e]:2!==a&&(x(Number,t)||x(Boolean,t))&&(b[e]=""+t)}return b},ae=[],se=!1,c},d},l},u},fe=!1,pe=()=>{var e,t,n,r,i,o,a;const s=Date.now(),c=null!=(a=null==(n=null==(t=null==(e=O.simetra)?void 0:e.config)?void 0:t.tracking)?void 0:n.url)?a:null==(o=null==(i=null==(r=O.ringDataLayer)?void 0:r.context)?void 0:i.tracking)?void 0:o.url;Me()||x(String,c)&&""!==c&&Ve(c),C(void 0,null,(function*(){let e="";const{cookieDeprecationLabel:t}=navigator;null!=t&&(e=yield t.getValue()),Y()&&J.includes(e)&&O.top===O.self&&ee()})),ze(N("ea_uuid")),be({url:Be()+"/me"},{_ac:"events",_ts:Date.now()})},h},ge=[],ve=!1,m},y),w},b},Ae=[],Ee=0,T},_e=()=>o,Se=e=>{o=e},Ce=()=>a,Ie=e=>{a=e},ke=[],Oe=()=>ke,D},xe=()=>s,Ne=e=>{s=e},Pe=()=>c,Re=e=>{c=e},Le="https://events.ocdn.eu",Fe=()=>Le,Ve=e=>{Le=e},B},Me=()=>l,je=e=>{l=e},Ue=()=>u,Ke=e=>{u=e},$e=()=>f,ze=e=>{f=e},q},Ze=()=>p,W},He=()=>h,Je=e=>{h=e},G},Ye="ea_notfound",Xe,Qe=e=>{Ye=e},e},t},n),{cookieDeprecationLabel:rt}=navigator;null!=rt&&(Qe("ea_timeout"),null==(y=null==(m=null==(v=null==rt?void 0:rt.getValue)?void 0:v.call(rt))?void 0:m.then)||y.call()));var it={addEventListene},getConsent:et,getOptOutInf},getTenant:Be,getTrackingI},getTukanID:()=>V("getTukanID"),isThirdPartyBlocked:_e,pus},removeEventListene},send:nt,sendMetri),setConsen},setInitialConsen),setTenan},start:he,track:tt,version:"5.8.1"},ot=N("_fbp");null!=ot&&(H(O).ringDataLayer.user.id.external.fbp=ot);var at,st,ct=N("_fbc");null!=ct&&(H(O).ringDataLayer.user.id.external.fbc=ct),null==(null==(st=null==(at=O.ringDataLayer)?void 0:at.user)?void 0:st.type)&&"1"===N("prm_sub")&&(H(O).ringDataLayer.user.type="subscriber"),H(O).ringDataLayer.context.version.library.tracking=it.version;var dt,lt,ut,ft,pt=O.EventsApi;O.Base64Url=I,null==pt?O.EventsApi=it:x(Array,pt)&&(O.EventsApi=it,pt.forEac))),O.addEventListener("pagehide",Te,!1),(null==(ft=null==(ut=null==(lt=null==(dt=O.ringDataLayer)?void 0:dt.context)?void 0:lt.tracking)?void 0:ut.autostart)||ft)&&(H(O).ringDataLayer.context.tracking.autostart=!0,he())},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n.r(t),n.d(t,"keepalive",(function(){return o}));var },},)},function(e,t,n){var r=n(12),i=n(2),o=n(1),a=n(0),s=n(4),c=n(3),d=n(19),l=n(23).sendActivity;dlApiRequire.isError("pixel")||(l=dlApiRequire("pixel").sendActivity);var },},},h=function(e,t,n,l,u){var f,h,y=this,w=this;if(l=l||"external",!(f=t.originalSlotId&&w.div2slot&&w.div2slot[t.originalSlotId]?w.div2slot[t.originalSlotId]:s.getClosestSlot(t.name)||void 0)){if(!u&&"adtpl"!=w.mode)return;f=w.defineSlot(u,t.name),h=!0,w.toFetch=w.toFetch.filter}))}if(a.debug("RENDER_AD",e),t==top&&w.async&&"adtpl"!=w.mode)return a.error("Ads can't be render on sync way on async ad request"),!1;var b=t.frameElement;if(d.setContainerSize(e,f,b),b){if(e.meta.isfluid&&(f&&window.setTimeout}),0),b.resizeInFrame)){var A=b.resizeInFrame.bind(b,t);if(A(),b.addEventListener("load",A),t.addEventListener("resize",A),void 0!==t.ResizeObserver)new t.ResizeObserver((function(){A()})).observe(t.document.body)}}else(e.meta.isfluid||1==e.meta.autoscale)&&a.warn("Creative in safeframe cannot use isfluid or autoscale")}(w,e,f,t);var E=e.tplCode;E in w._tpls||(w._tpls[E]={deferRender:{}}),e.meta.$startRender=+new Date;var },},},},I=w.getRandom();w._tpls[E].deferRender[I};var k=e.tplPath?"/".concat(e.tplPath):"/tpl.min.js?"+c.getNetworkConfig("tplVer","v1"),O=w.tplRoot+e.tplCode+k,D=c.getNetworkConfig("includedTpls",[]);if(_().sideService||-1!==D.indexOf(E))a.debug("Write adtpl from Service side render function"),S(),t.inDapIF?(T(),setTimeout}),0)):setTimeout((function(){g(w,e)}),0);else if(t.$sf||!w.async||t.inDapIF){if(h){var x=Date.now(),N=t.document.createElement("script");return N.src=O,N.setAttribute("type","text/javascript"),N.charset="UTF-8",N.async=1,N.onloa},N.onerro},void t.document.body.appendChild(N)}t.document.write("<script type='text/javascript'> var fetchTplStartTime=Date.now(); <\/script><script src='"+O+"' onerror=\"parent.onetAds.fire('fetchTplError',this.src,Date.now()-fetchTplStartTime,"+(t.originalSlotId?"parent.onetAds.div2slot?parent.onetAds.div2slot['"+t.originalSlotId+"']:undefined":"undefined")+')"><\/script>');var P="parent.onetAds._tpls['"+E+"'].deferRender['"+I+"']();";o.isOldIE(9)&&"external"==l&&(P="setTimeout(function () { "+P+" },1);"),t.document.write("<script type='text/javascript'> "+P+" <\/script>")}else s.doCreateFriendlyIFrame(document.body,0,0}));var R,L=w.keyvalues&&w.keyvalues.showInformationIconDsa;if(e.meta.dsaurl&&e.meta.inIFrame&&L&&!f.getProperty("disableDsaIcon",!1)){var F=((R=t.document.createElement("a")).classList.add("information_icon_dsa"),R.href=e.meta.dsaurl,R.target="_blank",R.innerHTML="&#x24D8;",R.setAttribute("style","position: absolute; top: 0px; right: 0px; background-color: #eee; width: 16px; height: 16px; z-index: 9020; display: flex; justify-content: center; align-items: center; color: #00aecd; font-size: 14px;text-decoration: none;"),R);t.document.body.appendChild(F)}w.fire("beforeRenderAd",e,f,t)},},},},},};e.exports={ini)}fault=i}]);