(function(b){typeof define=="function"&&define.amd?define(b):b()})(function(){"use strict";const b=new URL(location.href).searchParams.getAll("croshdebug").includes("true"),T=()=>{};T.toString=()=>(new Date().getTime()/1e3).toFixed(3);const t=b?console.log.bind(console,"%s %ccrosh",T,"color:white; background-color:purple; padding:2px; border-radius:4px;"):(...c)=>{},U=c=>{const f={};for(const l of c.getTargetingKeys())f[l]=c.getTargeting(l);return f},V=(c,f)=>{const l=window.pbjs,a=window.apstag,o=c.getSlotElementId();let u=!1,e=!1,I=!1;const v=()=>{if(I){t("already kicked");return}u&&e&&(I=!0,t("slotElementId:",o,"before targeting:",U(c)),l&&l.setTargetingForGPTAsync([o]),a&&a.setDisplayBids(),f?c.setTargeting("x-refresh",[f]):c.setTargeting("x-refresh",["true"]),t("slotElementId:",o,"after targeting:",U(c)),t("slotElementId:",o,"call refresh()"),googletag.pubads().refresh([c]))},m=()=>{u=!0,v()},p=()=>{e=!0,v()},w=async()=>{if(!l){t("slotElementId:",o,"| pbjs | not loaded"),m();return}let h=null;for(const y of l.adUnits)if(y.code===o){h=y;break}if(t("slotElementId:",o,"| pbjs | targetAdUnit:",h),!h){t("slotElementId:",o,"| pbjs | excluded slot"),m();return}t("slotElementId:",o,"| pbjs | request"),l.requestBids({adUnits:[h],bidsBackHandler:function(){t("slotElementId:",o,"| pbjs | response"),m()}})},$=async()=>{if(!a){t("slotElementId:",o,"| apstag | not loaded"),p();return}if(!Object.keys(a._getSlotIdToNameMapping()).includes(o)){t("slotElementId:",o,"| apstag | excluded slot"),p();return}const S=c.getSizes().map(n=>[n.width,n.height]);t("slotElementId:",o,"| apstag | request"),a.fetchBids({slots:[{slotID:c.getSlotElementId(),slotName:c.getAdUnitPath(),sizes:S}],timeout:2500},()=>{t("slotElementId:",o,"| apstag | response"),p()})};w(),$()},P=(c,f,l)=>{if(!f)return null;const a=f[c];if(!a)return null;const o=a[l];return typeof o!="number"?null:[o,`adUnit (${c})`]},q=(c,f,l)=>{if(!f)return null;const a=f[c];if(!a)return null;const o=a[l];return typeof o!="number"?null:[o,`order (${c})`]},M=(c,f,l)=>{if(!f)return null;const a=f[c];if(!a)return null;const o=a[l];return typeof o!="number"?null:[o,`lineItem (${c})`]},C=(c,f,l)=>{if(!c)return[0,"lineItemId: falsy"];if(!f)return[0,"adUnitCode: falsy"];if(!l)return[0,"state: falsy"];if(!l.configReady)return[null,"config: waiting"];if(!l.config)return[0,"config: falsy"];if(!l.config.refresh_time)return[0,"refresh_time: falsy"];let a="d";const o=f.split("/")[0];try{o.endsWith("_pc")||o.includes("_pc_")?a="d":(o.endsWith("_sp")||o.includes("_sp_"))&&(a="m")}catch{}const u=P(f,l.config.refresh_time.ad_units,a);if(u&&u[0]===0)return u;const e=l.lineItemInfos[c];if(e===void 0)return[null,"lineItemInfo: waiting"];if(e===null)return[0,"lineItemInfo: null"];const I=e.line_item_type,v=l.config.target_line_item_types;if(!I)return[0,"lineItemType: falsy"];if(!v)return[0,"lineItemTypes: falsy"];if(!Array.isArray(v))return[0,"lineItemTypes: invalid"];if(!v.includes(I))return[0,`lineItemType: excluded (${I})`];const m=q(e.order_id,l.config.refresh_time.orders,a);if(m&&m[0]===0)return m;const p=M(c,l.config.refresh_time.line_items,a);if(p&&p[0]===0||p)return p;if(m)return m;if(u)return u;const w=l.config.refresh_time.default[a];return w&&typeof w=="number"?[w,"default"]:[0,"unexpected"]};t("main.ts"),(async()=>{if(!window.__croshdata__){t("error: __croshdata__ does not exist.");return}const l=n=>{for(const i of window.__croshdata__)if(n in i)return i[n];return""},a=new URL(location.href).hostname,o=l("mid"),u=l("nc");if(t("domain",a),t("mediaId",o),t("networkCode",u),!o){t("error: mediaId does not exist.");return}if(!u){t("error: networkCode does not exist.");return}const e={config:null,configReady:!1,detectedSlots:[],lineItemQueue:new Set,lineItemInfos:{},slotViewables:{},slotMonitoringIntervalIds:{},userIsActive:!0,userSleepTime:0,windowIsActive:!0};let I=new URL(location.href).searchParams.get("croshab");I===null&&a==="news.goo.ne.jp"&&Math.random()>.5&&(I="test_2"),I===null&&(I=""),(async()=>{t("getConfig");const i={method:"POST",body:JSON.stringify({media_id:o,domain:a,network_code:u,test:I}),headers:{"Content-type":"application/json; charset=UTF-8"}};t("getConfig","requestData",i),fetch("https://crosh-tag.xlisting.jp/api/v1/config",i).then(s=>s.json()).then(s=>{t("getConfig","responseData",s),e.config=s.result,e.configReady=!0,t("getConfig","config",s.result)}).catch(s=>console.error(s.message))})(),await(async(n,i=100)=>new Promise(s=>{n()&&s();const r=setInterval(()=>{n()&&(clearInterval(r),s())},i)}))(()=>window.googletag&&googletag.apiReady&&googletag.pubadsReady,100);const w=(n,i,s,r,d)=>{clearInterval(n),delete e.slotMonitoringIntervalIds[i],t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${r}`,`| stopped intervalId: ${n}`,`| duplicateImp: ${d}`)};googletag.pubads().addEventListener("impressionViewable",n=>{var k,R,L,x;const i=n.slot.getSlotElementId(),s=n.slot.getAdUnitPath().replace(/^\/[^/]+\//,""),r=((k=n.slot.getResponseInformation())==null?void 0:k.lineItemId)||((R=n.slot.getResponseInformation())==null?void 0:R.sourceAgnosticLineItemId),d=typeof r=="number"?r.toString():r;if(t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${d}`,"| impressionViewable"),Object.keys(e.slotMonitoringIntervalIds).includes(i)){const j=e.slotMonitoringIntervalIds[i];w(j,i,s,d,!0)}if(!d)return;let[g,A]=C(d,s,e);if(t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${d}`,`| refreshSec: ${g}`,`| reason: ${A}`,`| lineItemType: ${(L=e.lineItemInfos[d])==null?void 0:L.line_item_type}`,`| orderId: ${(x=e.lineItemInfos[d])==null?void 0:x.order_id}`),g===0)return;e.lineItemQueue.add(d);let E=1;e.slotViewables[i]=e.slotViewables[i]||{};const _=window.setInterval(()=>{var F,D;if(g===null&&([g,A]=C(d,s,e),t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${d}`,`| refreshSec: ${g}`,`| reason: ${A}`,`| lineItemType: ${(F=e.lineItemInfos[d])==null?void 0:F.line_item_type}`,`| orderId: ${(D=e.lineItemInfos[d])==null?void 0:D.order_id}`)),g===0){w(_,i,s,d,!1);return}if(e.slotViewables[i].viewable&&e.userIsActive&&e.windowIsActive){if(E+=.5,t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${d}`,`| ★★activeSec/refreshSec★★: ${E.toFixed(1)}/${g}`),g===null)return;E>=g&&(t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${d}`,"| ★★★refresh★★★"),w(_,i,s,d,!1),V(n.slot,I))}},.5*1e3);t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| lineItemId: ${d}`,`| started intervalId: ${_}`),e.slotMonitoringIntervalIds[i]=_}),googletag.pubads().addEventListener("slotVisibilityChanged",n=>{const i=n.slot.getSlotElementId(),s=n.slot.getAdUnitPath().replace(/^\/[^/]+\//,"");t(`slotElementId: ${i}`,`| adUnitCode: ${s}`,`| slotVisibilityChanged: ${n.inViewPercentage}%`);const r=n.slot.getSlotElementId(),d=n.inViewPercentage>=51;e.slotViewables[r]=e.slotViewables[r]||{},e.slotViewables[r].viewable=d}),setInterval(()=>{const n=e.userSleepTime.toFixed(1),i=e.userIsActive;e.userSleepTime+=.5,e.userIsActive=e.userSleepTime<=10;const s=e.userSleepTime.toFixed(1),r=e.userIsActive;t("[userCheck]",`| userSleepTime: ${n} -> ${s}`,`| userIsActive: ${i} -> ${r}`)},.5*1e3);const $="mousemove mousedown scroll keyup keypress keydown touchstart touchmove touchend".split(" ");for(const n of $)window.addEventListener(n,i=>{const s=e.userSleepTime.toFixed(1),r=e.userIsActive;e.userSleepTime=0,e.userIsActive=!0,t(`[userEvent] ${n}`,`| userSleepTime: ${s} -> 0.0`,`| userIsActive: ${r} -> true`)});for(const n of["focus","focusin"])window.addEventListener(n,i=>{const s=e.windowIsActive;e.windowIsActive=!0;const r=e.windowIsActive;t(`[userEvent] ${n}`,`| windowIsActive: ${s} -> ${r}`)});const h=()=>navigator.userAgent.match(/MyMagazine/),y=()=>h()?window.document.visibilityState==="visible":window.document.hasFocus();for(const n of["blur","focusout"])window.addEventListener(n,i=>{const s=e.windowIsActive;e.windowIsActive=y();const r=e.windowIsActive;t(`[userEvent] ${n}`,`| windowIsActive: ${s} -> ${r}`)});h()&&window.document.addEventListener("visibilitychange",n=>{const i=e.windowIsActive;e.windowIsActive=y();const s=e.windowIsActive;t("[userEvent] visibilitychange",`| windowIsActive: ${i} -> ${s}`)}),e.windowIsActive=y();const S=async n=>{if(!n||n.length===0)return;t("getLineItems");const s={method:"POST",body:JSON.stringify({line_item_ids:n,network_code:u}),headers:{"Content-type":"application/json; charset=UTF-8"}};t("getLineItems","requestData",s),fetch("https://crosh-tag.xlisting.jp/api/v1/line_items",s).then(r=>r.json()).then(r=>{t("getLineItems","responseData",r),t("getLineItems","lineItems",r.result);const d=r.result;for(const g in d)e.lineItemInfos[g]=d[g];t("getLineItems","state.lineItems",e.lineItemInfos)}).catch(r=>console.error(r.message))};setInterval(()=>{const n=e.lineItemQueue;e.lineItemQueue=new Set;const i=[],s=Object.keys(e.lineItemInfos);for(const r of n)s.includes(r)||i.push(r);S(i)},1e3)})()});