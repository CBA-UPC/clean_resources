!function(){"use strict";const e=}`:s.sendMax&&q.includes(e)?t.reduce(((e,t)=>Math.max(e,t)),-1/0):void 0}(s,e[s],i);void 0!==a&&(e[s]=[a])}))},Z=function(e,t,s,i){const a=F(e,t);if(!a.length)return s;const n=K(a);if(!n)return s;Y(n,i);const r=function(e){if(!e)return;const t=[];for(const s in e)S(e,s)&&e[s].length&&t.push(`${s}=${e[s]}`);return t.join("&")}(n),o=new URL(s),l=o.searchParams,d=l.getAll("cust_params").filter((e=>e)).join("&");return d&&d.length>0?l.set("cust_params",`${d}&${r}`):l.set("cust_params",r),o.toString()},ee=e=>{if("true"===e)return!0;if("false"===e)return!1;const t=parseFloat(e);return isNaN(t)?e:t},te=(e,t=!1)=>{const s=t?0===e.getPosition()&&"idle"===e.getState():0===e.getPosition();return e.isBeforePlay()||s?"pre":e.isBeforeComplete()||e.getPosition()===e.getDuration()?"post":"mid"};var se=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)};const ie=/^((https?:)?\/\/)?(secure)?pubads\.g\.doubleclick\.net\/gampad\/ads\?[\S]*$/,ae=function(e,t,s){return e.replace(t,s)},ne=function(e,t){const s=Math.pow(10,t);return Math.round(e*s)/s},re=function(i,a,n,r,o,l={}){var h,u,c,p,g,m,y;if(!i)return i;const f=function(e,t){const s=e.getConfig(),i=e.getPlaylistItem()===t,a={playerHeight:e.getHeight()||s.height||"",playerWidth:e.getWidth()||s.width||"",itemDuration:i&&ne(e.getDuration(),3)||"",integerDuration:i&&ne(t.duration,0)||"",item:t,jwpseg:F(e,t),placement:W(s),userAgent:navigator.userAgent},n=s.advertising?s.advertising.ampMacros:{};return Object.assign(a,n)}(a,n),A=X();let v=null;null!=n&&n.jwpseg&&(v=K(n.jwpseg));const P={viewability:(null==(h=v)||null==(u=h.hb_jwvb)?void 0:u.map((e=>encodeURIComponent(e))).join(","))||"",completion:(null==(c=v)||null==(p=c.hb_jwcr)?void 0:p.map((e=>encodeURIComponent(e))).join(","))||"",brandSafety:1===(null==(g=v)?void 0:g.hb_jwbs[0])?encodeURIComponent("Yes"):encodeURIComponent("No"),contextual:(null==(m=v)||null==(y=m.hb_jwiab)?void 0:y.map((e=>encodeURIComponent(e))).join(","))||""};-1!==i.indexOf(d)&&(l.jwpseg=f.jwpseg),i=ae(i,"__random-number__",Math.random()*Math.pow(10,18)),i=ae(i,"__timestamp__",(new Date).getTime()),i=ae(i,"__page-url__",encodeURIComponent(f.pageUrl||A.url)),i=ae(i,"__referrer__",encodeURIComponent(f.referrer||A.referrer)),i=ae(i,"__player-height__",f.playerHeight),i=ae(i,"__player-width__",f.playerWidth),i=ae(i,"__item-duration__",f.itemDuration),i=ae(i,"__integer-duration__",f.integerDuration),i=ae(i,d,f.jwpseg),i=ae(i,"__domain__",encodeURIComponent(f.domain||A.domain)),i=ae(i,"__placement__",f.placement),i=ae(i,"__device-ua__",encodeURIComponent(f.userAgent)),i=ae(i,"__jw-viewability__",P.viewability),i=ae(i,"__jw-completion__",P.completion),i=ae(i,"__jw-brand-safety__",P.brandSafety),i=ae(i,"__jw-contextual__",P.contextual),i=o.companion?ae(i,"__companion-div__",o.companion.id):ae(i,"__companion-div__","");const w=Object.keys(f).filter((e=>-1!==e.indexOf("item"))),b=w.map((e=>{const t=e.match(/item([\w]+?)(List)?$/);let s;return t&&(s=t[1].toLowerCase()),s}));let k=null;const E=/__item-([\w-]+?)(-list)?__/g,_=i;for(;null!==(k=E.exec(_));){const e=k[0],t=k[1],s=w[b.indexOf(t)];let a="";if(se(n,t)&&"string"==typeof n[t]||s){a=s?f[s]:n[t];const e=!1===o.truncateMacros?4096:1e3;a.length>e&&(a=a.substring(0,e));const i=k[2]?",":null;a=a.split(i).map(encodeURIComponent)}i=ae(i,e,a)}if(r===s)return i;if(r===e){const e=a.getConfig().autostart?1:0,t=a.getMute()?1:0;i=function(e,t,s){return ie.test(e)&&(e=`${e}&vpa=${t}&vpmute=${s}`),e}(i,e,t)}if(r===t&&n.title&&-1===i.indexOf("vid_t=")){const e=n.title.substring(0,100).replace(/[^\x00-\x7F]/g,"");i+=`${function(e){return-1!==e.indexOf("?")?"&":"?"}(i)}vid_t=${encodeURIComponent(e)}`}return-1!==i.indexOf("__gdpr__")||-1!==i.indexOf("__gdpr_consent__")||-1!==i.indexOf("__addtl_consent__")?Q().then((({gdprApplies:e,consentData:t,addtlConsent:s})=>(i=ae(i,"__gdpr__",e?1:0),i=ae(i,"__addtl_consent__",s||""),ae(i,"__gdpr_consent__",t||"")))).catch((()=>i)):Promise.resolve(i)},oe=function(){},le=function(e,t,s){let i=[];return e&&(i=e.getElementsByTagName(t),s&&i&&0===i.length&&(i=e.getElementsByTagName(`${s}:${t}`))),i},de=function(e,t){return e?e.getAttribute(t):null},he=function(e,t,s){e.push({message:t,code:1002,adErrorCode:70001,id:s})},ue=function(){const e=new Error("No AdBreaks in VMAP");throw e.adErrorCode=60005,e},ce=function(e){if(e){const t=e.textContent||e.text;if(t)return t.trim()}return""},pe=function(e,t,s,i){let a=[];return e||t?(a=t.getElementsByTagNameNS?t.getElementsByTagNameNS(e,s):t.getElementsByTagName(`${i}:${s}`),a):a},ge=function(e,t){if(e){const s=e.getElementsByTagName(t);if(s)return s[0]}return null};let me=function(e){(e.indexOf("[REGULATIONS]")>=0||e.indexOf("[GDPRCONSENT]")>=0)&&(Q().catch(oe),me=oe)};const ye=function(e,t){let s=de(t,"event");if("progress"===s){s=`${s}_${de(t,"offset")}`}!function(e,t,s){e[t]||(e[t]=[]),s&&(e[t].push(s),me(s))}(e,s,ce(t))},fe=function(e,t){if(!e)return null;const s=e.getElementsByTagName("Ad");if(!s.length)return null;const i={_offSet:t};if(1===s.length)i._adQueue=[s[0].textContent.trim()];else{i._pod=[];for(let e=0;e<s.length;e++)i._pod.push(s[e].textContent.trim())}return i},Ae=function(e,t,s){if(le(e,"VMAP",P).length)return function(e,t,s){const i=[],a=le(e,"VMAP",P);de(a[0],"version")||he(i,"VMAP Schema Error: version missing from VMAP tag",v);const n=le(e,"AdBreak",P);n.length||ue();const r=e.lookupNamespaceURI(P),o={};for(let e=0;e<n.length;e++){const t={},s={},a=n[e],d=de(a,"timeOffset")||0,h=de(a,"breakId"),u=de(a,"breakType"),c=le(a,"AdSource",P)[0],p=de(c,"id"),g=le(a,"AdTagURI",P)[0],m=le(a,"VASTData",P)[0]||le(a,"VASTAdData",P)[0],y=de(g,"templateType"),f=ce(g),A=pe(r,a,"Tracking",P);if(u||he(i,"VMAP Schema Error: missing breakType on AdBreak",h),m||y||he(i,"VMAP Schema Error: missing templateType on AdBreak",h),d||he(i,"VMAP Schema Error: missing timeOffset on AdBreak",h),t._type=u,t._vmap={id:p,breakid:h,timeoffset:d},m)t._adXML=(l=ge(m,"VAST")).ownerDocument instanceof Document?l.outerHTML||(new XMLSerializer).serializeToString(l):null;else{if("vast2"!==y&&"vast3"!==y&&"vast4"!==y)continue;t._adQueue=[f],t._waterfallIndex=0}const v=[];if(A)for(let e=0;e<A.length;e++){ye(s,A[e]);const t=de(A[e],"event");v.push(t)}(v.indexOf("breakStart")<0||v.indexOf("breakEnd")<0||v.indexOf("error")<0)&&he(i,"Tracking events are missing breakStart, breakEnd, or error for AdBreak",h),t._trackers=s,t._type=u;const w="number"==typeof d||"string"==typeof d;w&&!o[d]?(o[d]=t,o[d]._pod=t._adQueue?[...t._adQueue]:[]):w&&o[d]&&t._adQueue&&o[d]._pod.push(...t._adQueue)}var l;return Object.keys(o).forEach((e=>{const i=o[e];switch(i._pod&&i._pod.length<=1&&delete i._pod,e){case"start":i._offSet="pre",t.setPreRoll(i);break;case"100%":case"end":i._offSet="post",t.setPostRoll(i);break;default:if(/^#/.test(e))break;/^\d\d?(?:\.\d+)?%$/.test(e)?i._offSet=e:i._offSet=s.seconds(e),t.addMidRoll(i)}})),t.preRoll||t.midRolls.length||t.postRoll||ue(),t.sort(null,!0),i}(e,t,s);if(le(e,"Playlist",P).length)return function(e,t,s){const i=le(e,"Playlist",P)[0],a=i.getElementsByTagName("Preroll")[0],n=i.getElementsByTagName("Postroll")[0],r=fe(a,"pre"),o=fe(n,"post");r&&t.setPreRoll(r),o&&t.setPostRoll(o);const l=i.getElementsByTagName("Midroll");for(let e=0;e<l.length;e++){const i=l[e],a=s.seconds(i.getAttribute("timeOffset")),n=fe(i,a);t.addMidRoll(n)}return[]}(e,t,s);throw new Error("No VMAP tag in response")},ve=function(e){e.onload=e.onreadystatechange=e.onerror=null,"abort"in e&&e.abort()},Pe=function(e,t,s){if(null===e)return;let i;return Object.keys(e).forEach((t=>{const s=e[t];i=i||{},i[t]="_adQueue"===t||"_pod"===t?s.slice():s})),i?(i.requestTimeout=t,i.creativeTimeout=s,i._errors=[],i._waterfallIndex=0,i._adPodIndex=0,i):void 0},we=function(e,t){return"%"===e.toString().slice(-1)?t*parseFloat(e.slice(0,-1))/100:parseFloat(e)};class be{constructor(e,t){this.adRules=e,this.utils=t,this.preRoll=null,this.vmap=null,this.postRoll=null,this.midRolls=[],this.playedMidRolls=[],this.duration=0,this._vmapPromise=null,this._vmapXHR=null}load(e,s,i,a){if(this._vmapPromise)return this._vmapPromise;null!==this._vmapXHR&&(ve(this._vmapXHR),this._vmapXHR=null);const n=re(this.getVMAP(),e,s,i,a);return i===t?(this._vmapPromise=n.then((e=>{this.setPreRoll({_adQueue:[e]})})),this._vmapPromise):(this._vmapPromise=n.then((t=>new Promise(((s,i)=>{this._vmapXHR=e.utils.ajax({url:t,withCredentials:a.withCredentials,retryWithoutCredentials:!0,requireValidXML:!0,timeout:this.requestTimeout},s,((e,t,s,a)=>i(a)))})).then((s=>{this._vmapXHR=null,e.trigger("adLoadedXML",{client:i,tag:t,xml:s.responseXML});return Ae(s.responseXML,this,e.utils).map((e=>Object.assign(e,{vmap:t})))})).catch((s=>{this._vmapXHR=null;const i={id:v,vmap:t};if(s.message)Object.assign(i,{message:`VMAP Schema Error: ${s.message}`,code:1002,adErrorCode:s.adErrorCode||11002});else{const t={1:{code:1007,message:"Timeout"},602:{code:1e3,message:"Invalid XML"},default:{code:1008,message:e.getConfig().localization.errors[s.key]}},a=t[s.code]||t.default;e.utils.log(a.message),Object.assign(i,{message:"Error Loading VMAP Schedule",code:a.code,adErrorCode:a.code+1e4})}throw i})))),this._vmapPromise)}canWaterfall(e){return e._adQueue&&e._waterfallIndex+1<e._adQueue.length}getPreRoll(e){return e&&"none"===this.adRules.startOnSeek?null:Pe(this.preRoll,this.requestTimeout,this.creativeTimeout)}getPostRoll(e){const t=Pe(this.postRoll,this.requestTimeout,this.creativeTimeout);return this.adRules.timeBetweenAdsAllowsAdPlayback(t,e)?t:null}getMidRollAtIndex(e){const t=this.midRolls[e];return Pe(t,this.requestTimeout,this.creativeTimeout)}getLastMidRollIndexBetweenTime(e,t,s){if(e>t)return null;this.sort(s);let i=this.midRolls.length;for(;i--;){const a=this.midRolls[i],n=we(this.midRolls[i]._offSet,s);if(e>=n)return null;if(t>=n){const e=Pe(a,this.requestTimeout,this.creativeTimeout);if(!this.adRules.timeBetweenAdsAllowsAdPlayback(e))return null;if(!this.adRules.timeBetweenAds){if(this.playedMidRolls.indexOf(i)>=0)return null;this.playedMidRolls.push(i)}return i}}return null}peek(e,t,s){if(this.midRolls.length>this.playedMidRolls.length){this.sort(s);let i=0;for(;this.midRolls[i];){const a=this.midRolls[i],n=we(a._offSet,s);if(n>=e&&-1===this.playedMidRolls.indexOf(i)){const s=N()+1e3*(n-e);return n<=t&&this.adRules.timeBetweenAdsAllowsAdPlayback(null,s)?i:null}i+=1}}const i=N()+1e3*(s-e);return this.postRoll&&t>=s&&this.adRules.timeBetweenAdsAllowsAdPlayback(null,i)?-1:null}getNextMidrollIndex(e,t,s){if(this.adRules.timeBetweenAds||this.adRules.startOnSeek)return this.getLastMidRollIndexBetweenTime(e,t,s);if(this.midRolls.length>this.playedMidRolls.length){const e=this.getClosestIndex(t,s);if(e>=0&&this.playedMidRolls.indexOf(e)<0)return this.playedMidRolls.push(e),e}return null}getMidRolls(){return this.midRolls.map((e=>Pe(e,this.requestTimeout,this.creativeTimeout)))}reset(){null!==this._vmapXHR&&(ve(this._vmapXHR),this._vmapXHR=null),this.playedMidRolls=[],this.duration=0}setPreRoll(e){e&&this.resetBreakId(e),this.preRoll=e}addMidRoll(e){this.resetBreakId(e),this.midRolls.push(e),this.duration=0}setPostRoll(e){e&&this.resetBreakId(e),this.postRoll=e}sort(e,t){(!e||e<1)&&(e=1),(this.duration!==e||t)&&(this.duration=e,this.midRolls.forEach((t=>{t._offsetSeconds=we(t._offSet,e)})),this.midRolls.sort(((e,t)=>e._offsetSeconds-t._offsetSeconds)),function(e,t){for(let s=0;s<e.length;s++){const i=e[s];t?i._vmap.item=s+1:(i._adbreak={item:s+1,breakid:i._breakId},i._pod?i._adbreak.pod=i._pod:i._adbreak.tags=i._adQueue)}}(this.getAllAds(),t))}getAllAds(){const e=this.preRoll?[this.preRoll]:[],t=this.postRoll?[this.postRoll]:[];return e.concat(this.midRolls,t)}setVMAP(e){this.vmap=e}isVMAP(){return Boolean(this.vmap)}getVMAP(){return this.vmap}getClosestIndex(e,t){this.sort(t);let s=this.midRolls.length;for(;s--;)if(e>=we(this.midRolls[s]._offSet,t))return s;return-1}clearAds(){this.preRoll=null,this.midRolls.length=0,this.postRoll=null}resetBreakId(e){e.adBreakId=this.utils.genId(12)}resetAllBreakIds(){this.getAllAds().forEach((e=>{this.resetBreakId(e)}))}destroy(){this.reset(),this.adRules.destroy()}}const ke=function(e){return Array.isArray(e)?e.slice(0):[e]},Ee=function(e,t){return 0===e?1/0:e||t};class _e{constructor(e){this.utils=e}getSchedule(e,t){const s=new be(t,this.utils);if(s.requestTimeout=Ee(e.requestTimeout,5e3),s.creativeTimeout=Ee(e.creativeTimeout,5e3),e.tag)s.setPreRoll({_offSet:"pre",_adQueue:ke(e.tag),_waterfallIndex:0});else if("string"==typeof e.vastxml)s.setPreRoll({_offSet:"pre",_adXML:e.vastxml});else{if("string"==typeof e.schedule)return s.setVMAP(e.schedule),s;if("string"==typeof e.adschedule)return s.setVMAP(e.adschedule),s;!function(e,t,s){const i=t.schedule||t.adschedule;if(!i)return;const a={};Object.keys(i).forEach((e=>{const t=i[e];t.ad&&(Object.assign(t,t.ad),delete t.ad);const n=G(t.offset,s),r=Ee(t.requestTimeout,5e3),o=Ee(t.creativeTimeout,5e3);let l=a[n];if(l){if("nonlinear"===t.type)return;"nonlinear"===l._type&&(l=null)}const d=a[n]=l||{_offSet:n,_type:t.type,_breakId:e,adBreakId:s.genId(12),requestTimeout:r,creativeTimeout:o};!1===n&&s.log("Error: ad offset format not supported",n);const h=t.skipoffset;if(void 0!==h&&void 0===d.skipoffset&&(d.skipoffset=h),"string"==typeof t.adm)d.adm=t.adm;else if(t.pod){const e=d._pod||[];d._pod=e.concat(t.pod)}else if(t.tag){const e=L(t.tag,t.custParams);d._adQueue&&(d._pod=[d._adQueue[0]],delete d._adQueue),d._pod?d._pod.push(ke(e)[0]):d._adQueue=ke(e)}else"string"==typeof t.vastxml?d._adXML=t.vastxml:s.log("Error: no ad tag provided")})),Object.keys(a).forEach((s=>{const i=a[s];switch(i.skipoffset=void 0!==i.skipoffset?i.skipoffset:t.skipoffset,s){case"pre":e.setPreRoll(i);break;case"post":e.setPostRoll(i);break;default:e.addMidRoll(i)}}))}(s,e,this.utils)}return s.sort(),s}getOptParams(e,t){const s={cuetext:t.cuetext,dynamicMessage:t.admessage,loadingAd:t.loadingAd,podMessage:t.podmessage,skipoffset:e.skipoffset,skipmessage:t.skipmessage,skiptext:t.skiptext,omidAccessMode:e.omidAccessMode||"full",omidSupport:e.omidSupport||"auto",allowedOmidVendors:e.allowedOmidVendors||[],vpaidcontrols:e.vpaidcontrols||!1,conditionaladoptout:e.conditionaladoptout||!1,requestFilter:e.requestFilter,trackingFilter:e.trackingFilter,withCredentials:void 0===e.withCredentials||e.withCredentials,extensions:"[object Object]"===Object.prototype.toString.call(e.extensions)?e.extensions:{}},i=e.companiondiv;return i&&(s.companion={id:i.id,height:i.height,width:i.width}),s}getAdRules(e){const t=e.rules||{},s=parseInt(t.frequency,10);return{startOn:t.startOn||1,frequency:isNaN(s)?1:s,timeBetweenAds:t.timeBetweenAds||0,startOnSeek:t.startOnSeek||null,deferAds:t.deferAds||null}}}const Me=function(e,t=null,s={}){const i={client:e.client},{bidding:a,item:n,player:r}=e;if(e.isDestroyed()||Object.assign(i,{placement:W(r.getConfig()),viewable:r.getViewable()}),s.jwpseg&&(i.jwpseg=s.jwpseg),t){const{adBreakId:n,adPlayId:r}=e.getAdIds(t,s);if(Object.assign(i,{adBreakId:n,adPlayId:r,offset:t._offSet}),a){const e=a.getBid(r);e&&Object.assign(i,e.getEventObject())}}return i.item=n,i},Ce=function(e,t,s,i){return{client:i,message:e,adErrorCode:t,id:v,placement:W(s),tag:""}};class Ie{constructor(e,t){this.player=e,this.options=t,this.client=t.client,this.ignoreStartOnSeek=!1,this.reset(),t.timeBetweenAds&&e.on({adBreakStart:this.handleAdBreakStart,adSkipped:this.handleAdSkipped,adComplete:this.handleAdComplete,adBreakEnd:this.handleAdBreakEnd,destroyPlugin:this.destroy},this)}get timeBetweenAds(){return this.options.timeBetweenAds}get startOnSeek(){return this.ignoreStartOnSeek?null:this.options.startOnSeek}shouldDeferAds(){return this.options.deferAds&&!this.player.getConfig().activeTab}clearStartOnSeek(){this.ignoreStartOnSeek=!0}sendAdBreakIgnored(e,t){e&&this.player.trigger(l,function(e,t){let s={};return e&&(s={id:e._breakId,tag:e._adQueue&&e._adQueue.length>0?e._adQueue[0]:e._adXML,offset:e._offSet}),Object.assign(s,{timeSinceLastAd:t,type:l})}(e,t,this.client))}rulesAllowAdPlayback(e){const t=this.options,s=0===t.frequency&&1===e,i=e>=t.startOn&&(e-t.startOn)%t.frequency==0;return s||i}handleAdBreakStart(){this.adSkipped=!1,this.adComplete=!1}handleAdComplete(){this.adComplete=!0}handleAdSkipped(){this.adSkipped=!0}handleAdBreakEnd(){!this.adSkipped&&this.adComplete&&(this.recentCompletedAdTime=N(),this.player.trigger("previousAdCompleteTime",{time:this.recentCompletedAdTime}))}timeBetweenAdsAllowsAdPlayback(e,t=N()){if(this.options.timeBetweenAds){const s=(t-this.recentCompletedAdTime)/1e3;if(s<this.options.timeBetweenAds)return this.sendAdBreakIgnored(e,s),!1}return!0}reset(){this.ignoreStartOnSeek=!1,this.recentCompletedAdTime=0}destroy(){this.player.off(null,null,this)}}const Re=()=>{};class Se{constructor(e,t,s){this.player=e,this.pluginConfig=t,this.adClient=s;const i=this.configParser=new _e(e.utils),a=this.adRules=new Ie(e,i.getAdRules(t),s);this.emptySchedule=new be(a,e.utils)}getAdRules(){return this.adRules}resetDefaultSchedule(e){const t=void 0===this.pluginConfig.withCredentials||this.pluginConfig.withCredentials,s=this.defaultSchedule=this.configParser.getSchedule(this.pluginConfig,this.adRules);s.isVMAP()&&s.load(this.player,e,this.adClient,{withCredentials:t}).catch(Re)}getSchedule(e,t){return t>0&&!this.adRules.rulesAllowAdPlayback(t)?this.emptySchedule:null!=e&&e.adschedule?this.configParser.getSchedule(e,this.adRules):(this.resetDefaultSchedule(e),this.defaultSchedule)}getOptParams(e,t){return this.configParser.getOptParams(e,t)}reset(){this.adRules.reset()}destroy(){this.emptySchedule&&this.emptySchedule.destroy(),this.defaultSchedule&&this.defaultSchedule.destroy()}}var je=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)};class Le{constructor(e,t,s){this.config=e,this.setOptions(s),this.setLocalizationOptions(t)}setLocalizationOptions(e){for(const t in e)t&&"string"==typeof t&&(this[t]=e[t])}setOptions(e,t=!1){for(const s in e)if(je(e,s)){let i=t?this.config[s]||this.config[s.toLowerCase()]:this.config[s];const a=e[s],n=typeof a;if(void 0!==i){if("boolean"!==n&&"number"!==n||(i=ee(i)),typeof i!==n)throw new Error(`invalid parameter: ${s} should be a ${n}`);this[s]=i}else this[s]=a}}}const Te={adPosition:"",autoplayadsmuted:!1,companiondiv:null,companionResourceType:"",customUi:null,debug:!1,omidSupport:"disabled",omidAccessModeRules:{},enablePreloading:!1,loadVideoTimeout:15e3,locale:"",maxRedirects:-1,ppid:"",preloadAds:!1,requestTimeout:1e4,truncateMacros:!0,vastLoadTimeout:1e4,vpaidcontrols:!1,vpaidmode:"insecure"};class xe extends Le{constructor(e,t,s){var i;const a=null==t||null==(i=t.localization)?void 0:i.advertising,{admessage:n,cuetext:r,podmessage:o,loadingAd:l,skipmessage:d,skiptext:h}=a;super(e,{admessage:n,cuetext:r,podmessage:o,loadingAd:l,skipmessage:d,skiptext:h},Te),this.utils=s,this.bidsResponse={}}}class Be{constructor(e,t,s){s.addClass(e,"jw-plugin-googima");const i=document.createElement("div");i.id=`${t}_ad`,i.className="jw-ads-view",this.visible=!1,this.utils=s,this.div=e,this.adDiv=i,e.appendChild(i)}resizeNonLinear(e){this.resize(!1,e)}resizeLinear(){this.resize(!0)}resize(e,t){const s=this.utils;s.toggleClass(this.div,"jw-ad-non-linear",!e),s.toggleClass(this.div,"jw-ad-linear",e),s.style(this.div,{height:t?`${t}px`:""})}getAdDiv(){return this.adDiv}adSetup(){this.visible=!0,this.utils.addClass(this.div,"jw-ad-instream"),this.resize(!0)}adTakeDown(){this.visible=!1,this.utils.removeClass(this.div,"jw-ad-instream"),this.resize(!0)}}const De={};let Oe=null;function qe(e){var t,s,i;return!Oe&&null!=(t=window)&&null!=(s=t.google)&&null!=(i=s.ima)&&i.AdDisplayContainer&&(Oe=Promise.resolve()),Oe||(Oe=function(e,t){if(De[t])return De[t];"file:"===document.location.protocol&&0===t.indexOf("//")&&(t=`https:${t}`);const s=new(0,e.scriptloader)(t);return De[t]=s.load(),De[t]}(e,"//imasdk.googleapis.com/js/sdkloader/ima3.js"),Oe)}class Ue{constructor(e,t,s){e.extend(this,t),this.vol=0,this.imaProxy=null,this.view=s}setProxy(e){this.imaProxy=e,"boolean"==typeof this.muted&&this.mute(this.muted)}attachMedia(){}detachMedia(){}mute(e){this.muted=e,this.imaProxy&&(e?this.imaProxy.setVolume(0):this.vol>=0&&this.imaProxy.setVolume(this.vol)),this.muteAllAdContainerVideo(e)}muteAllAdContainerVideo(e){const t=this.view.getAdDiv().getElementsByTagName("video");for(let s=0;s<t.length;s++)t[s].muted=e}volume(e){this.vol=e/100,this.imaProxy&&this.imaProxy.setVolume(this.vol)}}const Ve=function(){};class Ne{constructor(e,t,s,i,a){Object.assign(this,e.Events),this.client="shared",this.player=e,this.item=s,this.config=i,this.casting=a;const n=e.utils,r=new _e(n);this.adRules=new Ie(e,r.getAdRules(i)),"string"==typeof t?(this.schedule=new be(this.adRules,n),this.schedule.setPreRoll({tag:t})):(this.schedule=t,t.resetAllBreakIds()),this.vmapPromise=null,this.lastTimeEvent=null,this.prerollPromise=null,this.midrollPromise={},this.postrollPromise=null,this.next=null,this.nextPlaylistItemPromise=null,this.relatedNextUp=null,this.bidding=e.getPlugin("bidding"),this.bids=[],this.bidsPromises=[],this.bidsPromise=null,this._events=[]}attachListeners(){this.player.on({all:this.onAll,beforePlay:this.checkPreroll,relatedReady:this.relatedReady,cast:this.onCast,destroyBidding:this.destroyBids},this)}onAll(e,t){e===o?this.checkMidrolls(t):"beforeComplete"===e?this.checkPostrolls(t):"meta"===e&&this.schedule.sort(this.player.getDuration()),"complete"===e&&(this.player.videoHasCompleted=!0)}relatedReady(){if(this.config.preloadAds){const e=this.player.getPlugin("related");e&&e.on("nextUp",(e=>{e&&"discovery"===e.mode&&(this.relatedNextUp=e)}))}}onCast(e){this.casting=Boolean(e.active)}init(e,t){if(this.config.clearAdsOnComplete&&this.player.videoHasCompleted&&this.schedule.clearAds(),e=e||null,this.schedule.isVMAP()&&(t.requestTimeout=this.schedule.requestTimeout,t.creativeTimeout=this.schedule.creativeTimeout,this.vmapPromise=this.schedule.load(this.player,this.item,this.client,t)),this.bidsPromise=this.vmapPromise||Promise.resolve(),this.bidsPromise=null!==e?this.bidsPromise.then((()=>{if(this.isDestroyed())return;if(this.bidding)return this.createBidsPromise(e,t);const s=function(e,t,s){const i=Me(e,t,s);return Object.assign(i,{message:"Ad Error: bidding plugin unavailable",code:900,adErrorCode:60008}),i}(this,null,t);this.player.trigger(p,s)})).catch(Ve):this.bidsPromise.catch(Ve),this.config.preloadAds)if(1===t.playlistItemEventCount){const e=this.player.getConfig().autostart;!1===e||"viewable"===e&&0===this.player.getViewable()?this.loadPreroll(t).catch((e=>this.isDestroyed()?null:this.enqueueAdEvent(p,e,{preload:!0}))):this.player.once("autostartNotAllowed",(()=>{this.loadPreroll(t).catch((e=>this.isDestroyed()?null:this.enqueueAdEvent(p,e,{preload:!0})))}))}else t.preloadPreroll&&this.loadPreroll(t).catch((e=>this.isDestroyed()?null:this.enqueueAdEvent(p,e,{preload:!0})));return this.bidsPromise}createBidsPromise(t,s){const i=this.player;let a=parseInt(t.bidOnBreaks,10);return a=a>0?a:1/0,this.bids=this.schedule.getAllAds().slice(0,a).map((a=>{const{adPlayId:n}=this.getAdIds(a),r=i.getConfig(),{skipoffset:o}=this.config,l=null!=o&&o>=0,d=F(i,this.item),h={id:n,offset:t.offset,jwpseg:d,placement:W(r),tag:a._adQueue?a._adQueue[0]:a._currentTag,adClient:this.client};this.client===e&&(h.skipoffset=l?o:-1);const u=this.bidding.createNewBid(h,{getURLParts:X});this.player.trigger("adBidRequest",Me(this,a,Object.assign({jwpseg:d},s))),u.init();const c=u.start().then((({result:t})=>{if(this.isDestroyed())return;let i=Promise.resolve();var n;t&&!t.error&&(a.jwpseg=d,t.adm?(a._adXML=t.adm,null!=a&&null!=(n=a._adQueue)&&n.length&&a._adQueue.unshift(t.adm)):t.tag&&(i=re(t.tag,this.player,this.item,this.client,{},a).then((t=>{this.client===e?(a._adQueue=a._adQueue||[],a._adQueue.unshift(t)):a._adQueue=[t]}))));return this.player.trigger("adBidResponse",Me(this,a,s)),i}));return this.bidsPromises.push(c),u})),Promise.all(this.bidsPromises)}checkPreroll(e){if(this.bidTimeoutStarted||(this.bidTimeoutStarted=!0,this.bids.forEach((e=>e.timeout()))),this.casting||this.preRollPlayed||this.adRules.shouldDeferAds())return;this.preRollPlayed=!0;const t=(null==e?void 0:e.startTime)||this.player.getPosition();this.lastTimeEvent=t||this.lastTimeEvent;const s=this.schedule.getPreRoll(t);if(!s&&!this.vmapPromise)return;(null!==this.vmapPromise||s&&"nonlinear"!==s._type)&&this.startBlocking(),this.bidsPromise.then((()=>{if(this.isDestroyed())return;const e=this.schedule.getPreRoll(t);e&&"nonlinear"!==e._type&&this.triggerAdBreakEvents(e,"pre")})),t?"none"===this.adRules.startOnSeek&&(this.prerollPromise=null):this.adRules.clearStartOnSeek();const i=null!=e&&e.playReason?e.playReason:n;this.playPreroll({adBlock:this.adBlockErrorDetected,startTime:t,reason:i})}checkMidrolls(e){if(this.casting||0===e.duration||this.adRules.shouldDeferAds())return;const t=this.schedule.getNextMidrollIndex(this.lastTimeEvent,e.position,e.duration);if(this.lastTimeEvent=e.position,null!==t){const e=this.schedule.getMidRollAtIndex(t);"nonlinear"!==e._type&&(this.startBlocking(),this.triggerAdBreakEvents(e,"mid")),this.playMidrollAtIndex(t,{adBlock:this.adBlockErrorDetected})}else if(!this.preRollPlayed&&this.schedule.getClosestIndex(e.position,e.duration)<0)this.checkPreroll(e);else if(this.config.preloadAds){const t=e.position+5,s=this.schedule.peek(e.position,t,e.duration);if(null!==s&&s>=0)this.loadMidrollAtIndex(s,{adBlock:this.adBlockErrorDetected,preload:!0}).catch(Ve);else if(-1===s){const t=N()+1e3*(e.duration-e.position);this.loadPostroll({adBlock:this.adBlockErrorDetected,preload:!0,startTime:t}).catch(Ve)}else if(null===this.next&&null===this.nextPlaylistItemPromise&&t>e.duration){const e=this.player.getPlaylistIndex()+1,t=this.player.getPlaylistItem(e);if(this.nextPlaylistRelated=Boolean(this.relatedNextUp),t||this.relatedNextUp){const t=this.relatedNextUp?-1:e;this.nextPlaylistItemPromise=Promise.resolve(this.player.getPlaylistItemPromise(t)).then((()=>{this.isDestroyed()||(this.trigger("preloadNext",{item:this.player.getPlaylistItem(e)||this.relatedNextUp,index:t}),this.relatedNextUp=null,this.nextPlaylistItemPromise=null)})).catch(Ve)}}}}checkPostrolls(e){if(this.casting||this.adRules.shouldDeferAds()||this.isDestroyed())return;const t=this.schedule.getPostRoll();t&&("nonlinear"!==t._type&&(this.startBlocking(),this.triggerAdBreakEvents(t,"post")),this.playPostroll(e))}getAdIds(e,{tagIndex:t,podIndex:s}={}){let i=e.adRequestIds&&void 0!==t?e.adRequestIds[t]:null;if(!i){const t=`p${s||e._adPodIndex||0}w${e._waterfallIndex||0}`;"p0w0"===t?i=e.adBreakId:(e.adPlayIds=e.adPlayIds||{},i=e.adPlayIds[t]=e.adPlayIds[t]||this.player.utils.genId(12))}return{adBreakId:e.adBreakId,adPlayId:i}}loadPreroll(e={}){return this.prerollPromise||(this.prerollPromise=this.bidsPromise.then((()=>{if(this.isDestroyed())return;const t=this.schedule.getPreRoll(e.startTime);return t?(t._position="pre",t._preload=!0,this.loadAd(t,e)):void 0}))),this.prerollPromise}loadMidrollAtIndex(e,t){return this.midrollPromise[e]||(this.midrollPromise[e]=this.bidsPromise.then((()=>{if(this.isDestroyed())return;const s=this.schedule.getMidRollAtIndex(e);return s?(s._position="mid",s._preload=!0,this.loadAd(s,t)):void 0}))),this.midrollPromise[e]}loadPostroll(e={}){return this.postrollPromise||(this.postrollPromise=this.bidsPromise.then((()=>{if(this.isDestroyed())return;const t=this.schedule.getPostRoll(e.startTime);return t?(t._position="post",t._preload=!0,this.loadAd(t,e)):void 0}))),this.postrollPromise}playPreroll(e){this.prerollPromise?this.playPreloadedPromise(this.prerollPromise,e):this.bidsPromise.then((()=>{if(this.isDestroyed())return;const t=this.schedule.getPreRoll(e.startTime);t?(t._position="pre",this.startAdBreak(t,e)):this.stopBlocking()}))}playMidrollAtIndex(e){this.midrollPromise[e]?this.playPreloadedPromise(this.midrollPromise[e]):this.bidsPromise.then((()=>{const t=this.schedule.getMidRollAtIndex(e);t&&(t._position="mid",this.startAdBreak(t))}))}playPostroll(e){this.postrollPromise?this.playPreloadedPromise(this.postrollPromise):this.bidsPromise.then((()=>{const t=this.schedule.getPostRoll();t&&(t._position="post",this.startAdBreak(t,e))}))}isDestroyed(){return null===this.player}destroy(){this.destroyBids(),this.player.off(null,null,this),this.player=null}destroyBids(){this.bids.forEach((e=>e.stop())),this.bidsPromises=[],this.bids=[]}enqueueAdEvent(e,t,s){this._events.push({type:e,event:t}),s.preload||this.dequeueAdEvents()}dequeueAdEvents(){}triggerAdBreakEvents(){}startBlocking(){}stopBlocking(){}loadAd(){}playPreloadedPromise(){}startAdBreak(){}}const He=(e,t,...s)=>{if(null!=e&&e[t]&&"function"==typeof e[t])try{return e[t](...s)}catch(e){return null}return null},$e=(e,s,i,a={})=>{s=s||null;const n={client:t};if(!e)return n;const{bidding:r,config:o,player:l}=e;Object.assign(n,{placement:W(l.getConfig()),viewable:l.getViewable()}),a.jwpseg&&(n.jwpseg=a.jwpseg),o.preloadAds&&(n.preloadAds=a.preload||(null==i?void 0:i._preload)||!1);const d=He(s,"getAdPodInfo");if(d){const e=He(d,"getTotalAds");if(e>1){const t=He(d,"getAdPosition");Object.assign(n,{sequence:t,podcount:e}),a.podIndex="number"==typeof t?t-1:0}if(void 0===n.adposition){const e=He(d,"getTimeOffset");n.adposition=0===e?"pre":-1===e?"post":"mid"}}if(i){const{adBreakId:t,adPlayId:s}=e.getAdIds(i,a);if(Object.assign(n,{tag:i._adQueue&&i._adQueue.length>0?i._adQueue[0]:i._adXML||i.adm,adBreakId:t,adPlayId:s,id:t,adposition:i._position}),i.jwpseg&&(n.jwpseg=i.jwpseg),r){const e=r.getBid(s);e&&Object.assign(n,e.getEventObject())}}const h=e.adsLoaderManager||a.loader;if(s){if(h){const e=n.mediationLayerAdServer;if("dfp"===e||"jwpdfp"===e){-1!==(He(s,"getWrapperAdSystem")||[]).concat(He(s,"getAdSystem")||[]).indexOf("SpotXJW")&&n.bidders.forEach((e=>{e.winner="SpotX"===e.name}))}const t=h.userRequestContext;Object.assign(n,{tag:n.tag||h.getTag(s),ima:{ad:s,userRequestContext:t}})}Object.assign(n,{adtitle:s.getTitle(),adsystem:s.getAdSystem(),creativetype:s.getContentType(),duration:s.getDuration(),linear:s.isLinear()?"linear":"nonlinear",description:s.getDescription(),creativeAdId:s.getCreativeAdId(),adId:s.getAdId(),universalAdId:s.getUniversalAdIds().map((e=>({universalAdIdRegistry:e.g,universalAdIdValue:e.h}))),advertiser:s.getAdvertiserName(),dealId:s.getDealId()});const e=s.getMediaUrl();e&&(n.mediaFile={file:e})}return void 0!==a.offset&&Object.assign(n,{adposition:n.adposition||a.offset,offset:a.offset}),n},ze=(e,t,s,i,a)=>{const n=$e(e,s,i,a),r=t.getVastErrorCode?t.getVastErrorCode():t.code;let o=t.getErrorCode?t.getErrorCode():t.adErrorCode;return o=o<1e4?o+2e4:o||60900,Object.assign(n,{message:`Ad Error: ${t.getMessage?t.getMessage():t.message}`,code:r>=100&&r<=1008?r:900,adErrorCode:o}),e&&(20402===o?n.timeout=e.options.loadVideoTimeout:21009===o?n.timeout=e.options.vastLoadTimeout:60004===o&&(n.timeout=e.options.requestTimeout)),void 0!==t.placement&&(n.placement=t.placement),void 0!==t.id&&(n.id=t.id),t.getInnerError&&(n.sourceError=t.getInnerError()),void 0!==t.tag&&(n.tag=t.tag),n},Qe=()=>null;class We{constructor(e,t){const{player:s,options:i,instreamProvider:a,view:n,adsLoaderManager:r,video:o,item:l,client:d}=e;if(s.utils.extend(this,s.Events),this.playlistItemManager=e,this.player=s,this.options=i,this.instreamProvider=a,this.view=n,this.adsLoaderManager=r,this.video=o,this.item=l,this.client=d,this.reason=t,this.env=s.getEnvironment(),this.utils=s.utils,this._qoe=new s.utils.Timer,i.customUi){const e=i.customUi;this.mainContainer=s.getContainer(),this.customUiDiv=document.getElementById(e.customUiDivId),this.adClickButton=document.getElementById(e.adClickButtonId),this.customCountDownDiv=document.getElementById(e.customCountDownId),this.customSkipButton=document.getElementById(e.customSkipButtonId),this.timeTillSkip=Number.POSITIVE_INFINITY}this.initAdsManagerPromise=null,this.blockingInstreamPlayer=null,this.currentAd=null,this.progressIntervalId=-1,this.viewablePlayedTime=0,this.lastPosition=null,this.adViewableImpressionHandler=Qe,this.paused=!1,this.playbackProxy={currentTime:this.player.getPosition(),duration:this.player.getDuration()},s.on("time",this.time,this),this.debugConsoleLog=Qe,i.debug&&(this.debugConsoleLog=function(...e){console.log(e)})}time(e){this.playbackProxy.currentTime=e.position,e.duration>=e.position?this.playbackProxy.duration=e.duration:this.playbackProxy.duration=1/0}init(e,t,s){this.requestType=e,this.requestOptions=t,this.scheduledAd=s,this.offset=s._offset;const i=this.adsLoaderManager;return this.initAdsManagerPromise=this.initAdsManagerPromise||qe(this.utils).then((()=>this.destroyed()?null:(this.debugConsoleLog("[JW DEBUG] Open adsLoaderManager"),i.open(e,t,this.video)))).then((e=>{if(this.destroyed())return null;const s=i.getAdsManager(e,this.playbackProxy,this.options);if(this.instreamProvider.setProxy(s),i.bindEvents({AD_ERROR:this.adError.bind(this),LOADED:this.adLoaded.bind(this),CONTENT_PAUSE_REQUESTED:this.pauseRequested.bind(this),CONTENT_RESUME_REQUESTED:this.resumeRequested.bind(this),LOG:this.adLog.bind(this),STARTED:this.adStarted.bind(this),IMPRESSION:this.adImpression.bind(this),LINEAR_CHANGED:this.resize.bind(this),CLICK:this.adClick.bind(this),PAUSED:this.adPaused.bind(this),RESUMED:this.adResumed.bind(this),SKIPPED:this.adSkipped.bind(this),USER_CLOSE:this.adUserClose.bind(this),ALL_ADS_COMPLETED:this.allAdsCompleted.bind(this)},this),t.preloadAds)clearTimeout(this.timeoutAdStart);else{const{width:e,height:t}=this.player.getSafeRegion(!1),s=this.getViewMode();this.debugConsoleLog("[JW DEBUG] adsManager init with",e,t,s),i.init(e,t,s)}const a=s.getCuePoints();if(a.length){const e=a.filter((e=>e>0)).map((e=>({begin:e,text:this.options.cuetext,cueType:"ads"})));this.player.addCues(e)}return s})).catch((e=>{if(clearTimeout(this.timeoutAdStart),this.asyncError&&!s._preload&&this.asyncError(e),null!=e&&e.getError){const t=e.getError();throw this.getAdErrorEventObject(t,e)}throw e})),this.initAdsManagerPromise}getViewMode(){const e=google.ima.ViewMode;return this.player.getFullscreen()?e.FULLSCREEN:e.NORMAL}beforeComplete(){const e=this.adsLoaderManager.adsManager;e&&e.getCuePoints().indexOf(-1)>-1&&this.playlistItemManager.startBlocking(),this.adsLoaderManager.unbindEvents(["CONTENT_RESUME_REQUESTED"]),this.debugConsoleLog("[JW DEBUG] Call contentComplete on IMA SDK"),this.adsLoaderManager.contentComplete()}requestAds(){var e,t;if(this.destroyed())return;this.debugConsoleLog("[JW DEBUG] Request ads to IMA SDK");let s=Promise.resolve();if(null!=this&&null!=(e=this.scheduledAd)&&null!=(t=e._adQueue)&&t.length){const e=this.scheduledAd._adQueue.map(((e,t)=>re(e,this.player,this.item,this.client,this.options,this.scheduledAd).then((e=>{e=Z(this.player,this.item,e,this.options.config.targeting),this.scheduledAd._adQueue[t]=e}))));s=Promise.all(e)}return s.then((()=>{this.startRequestTimeout(),this.trigger("adRequest",$e(this.playlistItemManager,null,this.scheduledAd)),this.adsLoaderManager.requestAds(this.requestType,this.requestOptions,this.options,this.scheduledAd)}))}muteInstreamProvider(){const e=this.video.muted||this.player.getMute();this.debugConsoleLog("[JW DEBUG] Setting mute on instreamProvider",e),this.instreamProvider.mute(e)}pauseRequested(e){const t=this.playlistItemManager.schedule.isVMAP();t&&this.playlistItemManager.startBlocking();const s=null==e?void 0:e.getAd();if(t){const e=He(s,"getAdPodInfo"),t=He(e,"getTimeOffset");if(t){const e=-1===t?"post":"mid";this.scheduledAd._position=e,this.playlistItemManager.triggerAdBreakEvents(this.scheduledAd,e)}}const i=$e(this.playlistItemManager,s,this.scheduledAd);this.trigger(g,i)}resumeRequested(){var e;this.debugConsoleLog("[JW DEBUG] ResumeRequest from IMA SDK"),null!=this&&null!=(e=this.currentAd)&&e.isLinear()&&this.finishAd(),this.blockingInstreamPlayer&&this.view.adTakeDown(),this.trigger("stopBlocking"),this.blockingInstreamPlayer=null}finishAd(){this.currentAd&&(this.hideCustomUi(),clearInterval(this.progressIntervalId),this.viewablePlayedTime=0,this.currentAd=null)}discardAdBreak(e){!e&&this.adsLoaderManager&&(e=this.adsLoaderManager.adsManager),!this.destroyed()&&e&&(this.trigger(y,$e(this.playlistItemManager,this.currentAd,this.scheduledAd)),0===e.getCuePoints().length?this.destroy():(e.discardAdBreak(),e.stop()))}asyncDiscardAdBreak(){this.initAdsManagerPromise&&this.initAdsManagerPromise.then((e=>this.discardAdBreak(e))).catch(Qe)}pause({reason:e}){if(this.destroyed())return;const t=this.adsLoaderManager.adsManager;t&&(this.viewablePlayedTime=0,this.debugConsoleLog("[JW DEBUG] JW Player pause ad"),this.reason=e||n,t.pause())}resume({reason:e}){if(this.destroyed())return;const t=this.adsLoaderManager.adsManager;t&&(this.debugConsoleLog("[JW DEBUG] JW Player resume ad"),this.reason=e||n,t.resume())}startRequestTimeout(){clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout((()=>{this.debugConsoleLog("[JW DEBUG] Ad request timeout"),this.destroyed()||(this.asyncError=null,this.handleAdError({message:`Ad Request timeout after ${this.options.requestTimeout} milliseconds`,getErrorCode:()=>60004}),this.asyncDiscardAdBreak())}),this.options.requestTimeout)}startAdsLoader(e){if(this.destroyed()||!this.initAdsManagerPromise)return Promise.reject();this.player.off("beforePlay",null,this),e&&(this.blockingInstreamPlayer=e,e.setText(this.options.loadingAd)),this.muteInstreamProvider(),this._qoe.tick("adBeforePlay"),this.startRequestTimeout(),this.initAdsManagerPromise.then((()=>{if(this.destroyed())return;const e=this.adsLoaderManager;if(!e.initialized){const{width:t,height:s}=this.player.getSafeRegion(!1),i=this.getViewMode();this.debugConsoleLog("[JW DEBUG] adsManager init with",t,s,i),e.init(t,s,i)}this.debugConsoleLog("[JW DEBUG] Start adsManager"),e.start()})).catch(Qe)}resize(){const e=this.currentAd,t=this.adsLoaderManager.adsManager;if(!t)return;const s=e&&!e.isLinear(),i=this.player.getSafeRegion(s);if(s){let s=e.getHeight();s=this.player.getFullscreen()?i.height/2:Math.max(100,s+10),this.debugConsoleLog("[JW DEBUG] Resize adsManager",i.width,s,this.getViewMode()),t.resize(i.width,s,this.getViewMode()),this.view.resizeNonLinear(s)}else this.debugConsoleLog("[JW DEBUG] Resize adsManager",i.width,i.height,this.getViewMode()),t.resize(i.width,i.height,this.getViewMode()),this.view.resizeLinear()}setState(e,t,s){if(!e.isLinear())return;const a=$e(this.playlistItemManager,e,this.scheduledAd);if(a.newstate=t,s&&(a.oldstate=s),null!==this.reason){a[t===i?"playReason":"pauseReason"]=this.reason,this.reason=null}this.instreamProvider.trigger("state",a)}customMainClickHandler(){this.adsLoaderManager.adsManager.resume()}customSkipHandler(e){if(e.stopPropagation(),this.timeTillSkip<=0){this.adsLoaderManager.adsManager.skip()}}customClickHandler(e){e.stopPropagation(),this.adsLoaderManager.adsManager.clicked()}addCustomEventHandlers(){this.mainClick=this.customMainClickHandler.bind(this),this.customSkip=this.customSkipHandler.bind(this),this.customClick=this.customClickHandler.bind(this),this.mainContainer.addEventListener("click",this.mainClick),this.adClickButton&&this.adClickButton.addEventListener("click",this.customClick),this.customSkipButton&&this.customSkipButton.addEventListener("click",this.customSkip)}removeCustomEventHandlers(){this.mainContainer.removeEventListener("click",this.mainClick),this.adClickButton&&this.adClickButton.removeEventListener("click",this.customClick),this.customSkipButton&&this.customSkipButton.removeEventListener("click",this.customSkip)}showCustomUi(){this.customUiDiv&&(this.customUiDiv.style.display="block",this.addCustomEventHandlers())}hideCustomUi(){this.customUiDiv&&(this.customUiDiv.style.display="none",this.removeCustomEventHandlers())}adLoaded(e){clearTimeout(this.timeoutAdStart);const t=e.getAd();if(this.playlistItemManager.schedule.isVMAP()){const e=He(t,"getAdPodInfo"),s=He(e,"getTimeOffset");s&&(this.scheduledAd._position=-1===s?"post":"mid")}const s=$e(this.playlistItemManager,t,this.scheduledAd);this.trigger("adLoaded",s)}adStarted(e){this.player.getPip()&&this.player.requestPip(this.view.getAdDiv().querySelector("video"));const t=e.getAd();this.currentAd=t,this.paused=!1,t.isUiDisabled()&&this.showCustomUi();const s=$e(this.playlistItemManager,t,this.scheduledAd);this.trigger(m,s)}adImpression(e){this.view.adSetup();const t=e.getAd(),s=t.isLinear(),a=s&&(t.getContentType().indexOf("image")>=0||-1===t.getDuration()),n=this.isVpaidAd(t),r=s&&n&&this.options.vpaidcontrols;this.currentAd=t,this.blockingInstreamPlayer&&this.blockingInstreamPlayer.setSkipOffset(t.getSkipTimeOffset()),this.adsLoaderManager.bindEvents({COMPLETE:this.adComplete.bind(this)}),n&&this.env.OS.mobile&&this.options.autoplayadsmuted&&this.adsLoaderManager.bindEvents({VOLUME_CHANGED:()=>{this.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"]),this.player.setMute(0===this.adsLoaderManager.adsManager.getVolume())}}),s||this.trigger("stopBlocking",{isNonlinear:!0}),this.utils.toggleClass(this.player.getContainer(),f,s&&(a||n)),this.utils.toggleClass(this.player.getContainer(),A,r),this.resize(),this.muteInstreamProvider(),clearTimeout(this.timeoutAdStart);const o=this.adsLoaderManager.adsManager;this.progressInterval(t,o);const l=$e(this.playlistItemManager,t,this.scheduledAd),d=void 0===l.podcount||1===l.sequence;"pre"===l.adposition&&d&&(this._qoe.tick("adImpression"),l.timeLoading=this._qoe.between("adBeforePlay","adImpression")),s&&!d&&this.trigger(g,l),this.trigger("adImpression",l,t),this.setupViewableListener(),this.setState(t,i,"buffering")}progressInterval(e,t){if(clearInterval(this.progressIntervalId),!t)return;const s=e.getAdId(),i=e.isSkippable()&&this.customSkipButton;let a=-1;const n=this.options.admessage||"",r=this.options.podmessage||"",l=this.options.skipmessage||"",d=this.options.skiptext||"",h=new RegExp("__AD_POD_CURRENT__","g"),u=new RegExp("__AD_POD_LENGTH__","g");this.progressIntervalId=setInterval((()=>{if(!this.currentAd||this.currentAd.getAdId()!==s)return void clearInterval(this.progressIntervalId);const c=t.getRemainingTime();if(isNaN(c)||c<=0)return;if(a===c)return;a=c;const p=this.currentAd.getDuration(),g=p-c,m=Math.round(p-g);if(i){const t=this.timeTillSkip=Math.ceil(e.getSkipTimeOffset()-g);t>0?(this.customSkipButton.innerText=l.replace(/(\b)xx(s?\b)/g,`$1${t}$2`),this.customSkipButton.style.cursor="default"):(this.customSkipButton.innerText=d,this.customSkipButton.style.cursor="pointer")}if(this.blockingInstreamPlayer){let e=n.replace(/(\b)xx(s?\b)/g,`$1${m}$2`);const t=He(this.currentAd,"getAdPodInfo");if(t){const s=He(t,"getTotalAds");if(s>1){const i=He(t,"getAdPosition");e=`${r.replace(h,i).replace(u,s)}  ${e}`}}this.blockingInstreamPlayer.setText(e),this.customCountDownDiv&&(this.customCountDownDiv.innerText=e),this.instreamProvider.trigger(o,{duration:p,position:g})}if(p>0){const t=$e(this.playlistItemManager,e,this.scheduledAd);t.position=g,t.duration=p,this.adViewableImpressionHandler(t),this.trigger("adTime",t)}}),250)}setupViewableListener(){this.player.off(a,this.viewableHandler,this),this.player.on(a,this.viewableHandler,this),this.viewableHandler({viewable:this.player.getViewable()})}adViewableHandler(e){const{position:t}=e;null===this.lastPosition&&(this.lastPosition=t);let s=t-this.lastPosition;if(this.lastPosition=t,s=Math.min(Math.max(0,s),4),this.viewablePlayedTime+=s,this.viewablePlayedTime>=2){this.player.off(a,this.viewableHandler,this),this.adViewableImpressionHandler=Qe;const e=$e(this.playlistItemManager,this.currentAd,this.scheduledAd);this.trigger("adViewableImpression",e)}}viewableHandler(e){e.viewable?(this.viewablePlayedTime=0,this.lastPosition=null,this.adViewableImpressionHandler=this.adViewableHandler):this.adViewableImpressionHandler=Qe}adComplete(e){const t=e.getAd();this.finishAd();const s=$e(this.playlistItemManager,t,this.scheduledAd);this.trigger("adComplete",s),this.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"])}adClick(e){const t=this.adsLoaderManager.adsManager,s=e.getAd();this.reason="clickthrough",this.isVpaidAd(s)||(this.debugConsoleLog("[JW DEBUG] Ad paused due to ad click"),t.pause());const i=$e(this.playlistItemManager,s,this.scheduledAd);this.trigger("adClick",i)}adPaused(e){if(!this.paused){this.paused=!0;const t=e.getAd();null===this.reason&&this.isVpaidAd(t)&&(this.reason=r),this.setState(t,"paused")}}adResumed(e){if(this.paused){this.paused=!1;const t=e.getAd();null===this.reason&&this.isVpaidAd(t)&&(this.reason=r),this.setState(t,i)}}adSkipped(e){const t=e.getAd();this.debugConsoleLog("[JW DEBUG] AdSkipped"),this.adsLoaderManager.unbindEvents(["COMPLETE","VOLUME_CHANGED"]),this.finishAd();const s=$e(this.playlistItemManager,t,this.scheduledAd);this.trigger(y,s)}adUserClose(e){var t;this.debugConsoleLog("[JW DEBUG] AdUserClose"),null!=this&&null!=(t=this.currentAd)&&t.isLinear()&&-1===this.currentAd.getDuration()?this.adSkipped(e):(this.adsLoaderManager.unbindEvents(["COMPLETE","VOLUME_CHANGED"]),this.finishAd())}allAdsCompleted(){this.stopAdsManager(),this.trigger("allAdsComplete",{})}stopAdsManager(){this.initAdsManagerPromise.then((e=>{this.destroyed()||(this.debugConsoleLog("[JW DEBUG] Stop IMA SDK adsManager"),e.stop(),e.destroy(),this.initAdsManagerPromise=null)})).catch(Qe)}adLog(e){this.debugConsoleLog("[JW DEBUG]",e.type,e);const t=He(e,"getAdData"),s=null==t?void 0:t.adError;if(s&&402===s.getVastErrorCode())this.handleAdError(s,e);else if(s){const t=He(e,"getAd");this.trigger(p,ze(this.playlistItemManager,s,t,this.scheduledAd,{jwpseg:this.adsLoaderManager.getJwpSeg(t)}))}}adError(e){const t=e.getError();this.handleAdError(t,e)}asyncError(e){var t;if(!this.destroyed())if(clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout((()=>this.destroy()),0),null!=e&&e.getError){const t=e.getError();this.handleAdError(t,e,!0)}else null!=e&&null!=(t=e.target)&&t.src?console.error(`Failed to load ${e.target.src}`):console.error(e)}getAdErrorEventObject(e,t){const s=He(t,"getUserRequestContext"),i=s?s.offset:void 0;return ze(this.playlistItemManager,e,null,this.scheduledAd,{offset:i})}handleAdError(e,t,s){this.options.debug&&console.error(e);const i=this.getAdErrorEventObject(e,t);this.player&&0===this.player.getPosition()&&(this._qoe.tick("adError"),i.timeLoading=this._qoe.between("adBeforePlay","adError")),this.trigger(p,i),this.destroyed()||(900===e.getErrorCode()||s?(clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout((()=>this.destroy()),0)):this.destroy())}isVpaidAd(e){const t=e.getContentType();return"application/javascript"===t||"application/x-shockwave-flash"===t}destroy(){this.debugConsoleLog("[JW DEBUG] JW Player destroy AdsPlayer"),this.trigger("stopBlocking",{isDestroyed:!0}),this.off(),this.destroyed()||(this.player.off(null,null,this),clearTimeout(this.timeoutAdStart),clearInterval(this.progressIntervalId),this.currentAd=null,this.options=null,this.adsLoaderManager.reset(null,!0),this.view.adTakeDown(),this.video=null,this.initAdsManagerPromise=null,this.instreamProvider.off(),this.instreamProvider.setProxy(null),this.instreamProvider=null,this.view=null,this.player=null)}destroyed(){return!this.player}}let Xe=null;const Ge=function(e,t){e.getContainer().querySelectorAll(".jw-icon-fullscreen").forEach((s=>{e.utils.style(s,{display:t})}))};class Je extends Ne{constructor(e,s,i,a,n,r,o,l,d,h){super(e,s,i,a,h),e.utils.extend(this,e.Events),this.client=t,this.config=a,this.options=n,this.player=e,this.utils=e.utils,this.adsLoaderManager=l,this.view=o,this.qoe=new e.utils.Timer,this.instreamProvider=r,this.vmapPromise=Promise.resolve(),this.fullscreenIcon=e.getContainer().querySelector(".jw-icon-fullscreen"),this.video=d,this.hasPreroll=!0,this.reason=null}checkPreroll(e){this.adsLoaderManager.initializeDisplay({restrict:!0}),this.reason=null!=e&&e.playReason?e.playReason:n,super.checkPreroll(e)}checkPostrolls(e){this.schedule.isVMAP()&&this.adsPlayer?this.adsPlayer.beforeComplete():super.checkPostrolls(e)}createAdsPlayer(e){this.adsPlayer&&!this.adsPlayer.destroyed()||(this.adsPlayer=new We(this,this.reason),this.adsPlayer.on("all",((t,s)=>"allAdsComplete"===t?(this.adsPlayer.destroy(),void(this.adsPlayer=null)):"stopBlocking"===t?(this.stopBlocking(null==s?void 0:s.isNonlinear),void(!e&&s&&s.isDestroyed&&(this.adsPlayer=null))):void("adError"!==t?(this.dequeueAdEvents(),this.trigger(t,s)):this.enqueueAdEvent(t,s,{preload:e})))))}initAdsPlayer(e,t,s){return e===w&&(this.reason=n),this.createAdsPlayer(s._preload),this.player.on("resize",(()=>this.adsPlayer.resize()),this.adsPlayer).on("fullscreen",(()=>this.adsPlayer.resize()),this.adsPlayer),this.adsPlayer.init(e,t,s).then((e=>{this.trigger("adsManager",{adsManager:e,videoElement:this.video})}))}adLoadRequest(e,t){const s=this.utils.extend({},this.config);s.ad=e,this.offset=e.offset||this.offset,s.adPosition=te(this.player);const i=new xe(s,this.player.getConfig(),this.utils),a=t?b:w,n=this.initAdsPlayer(a,i,e);return qe(this.utils).then((()=>(this.adsPlayer.requestAds(),n)))}pause(e){this.adsPlayer&&this.adsPlayer.pause(e||{})}resume(e){this.adsPlayer&&this.adsPlayer.resume(e||{})}skipAd(){this.adsLoaderManager&&this.adsLoaderManager.skipAd()}skipAdBreak(){this.adsPlayer&&this.adsPlayer.asyncDiscardAdBreak()}dequeueAdEvents(){this._events.forEach((({type:e,event:t})=>{this.trigger(e,t)})),this._events.splice(0)}triggerAdBreakEvents(e,t){var s;e._position=e._position||t,this.blockingInstreamPlayer.once("destroyed",(()=>{this.dequeueAdEvents(),this.trigger("adBreakEnd",$e(this,null,e))}));const i=$e(this,null,e);this.trigger("adBreakStart",i),this.dequeueAdEvents(),null!=this&&null!=(s=this.adsPlayer)&&s.destroyed()&&this.stopBlocking()}startBlocking(e){if(this.blockingInstreamPlayer||this.destroyed())return;!function(e){if(Xe=e.getEnvironment(),!Xe.OS.iOS||Xe.Browser.version.major<10)return;const t=e.getContainer();t.requestFullscreen||t.webkitRequestFullscreen||(e.getFullscreen()&&e.setFullscreen(!1),Ge(e,"none"))}(this.player),this.qoe.tick("adLoading"),this.utils.addClass(this.player.getContainer(),k),this.blockingInstreamPlayer=this.player.createInstream().init();const t=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(t),this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider),this.adsPlayer&&!this.adsPlayer.destroyed()&&(this.adsPlayer.blockingInstreamPlayer=this.blockingInstreamPlayer),this.view.adSetup()}stopBlocking(e){var t;this.destroyed()||(this.player.off("viewable",null,this),t=this.player,Ge(t,""),this.utils.removeClass(this.player.getContainer(),[f,A,k]),this.blockingInstreamPlayer&&(this.instreamProvider.off(),this.blockingInstreamPlayer.destroy(),this.blockingInstreamPlayer=null,this.player.trigger("adRequestedContentResume")),e||this.view.adTakeDown())}loadAd(e,t){if(e)return this.adsPlayer&&this.adsPlayer.scheduledAd!==e&&this.adsPlayer.destroy(),e._preload=!0,this.adLoadRequest(e,t)}playPreloadedPromise(e){e.then((()=>this.adsPlayer.startAdsLoader(this.blockingInstreamPlayer))).catch((()=>{this.stopBlocking()}))}startAdBreak(e,t){e&&(((e,t)=>{let s;try{s=new URL(e._adQueue[0],window.location).protocol}catch(e){}"https:"!==s&&"https:"===window.location.protocol&&t.trigger(p,{message:"VPAID insecure request was blocked.",code:901,adErrorCode:50005})})(e,this.player),this.adsPlayer&&this.adsPlayer.scheduledAd!==e&&this.adsPlayer.destroy(),this.startBlocking(),this.dequeueAdEvents(),this.adLoadRequest(e,t).then((()=>{this.adsPlayer.startAdsLoader(this.blockingInstreamPlayer)})).catch((()=>{this.stopBlocking()})))}destroy(){this.stopBlocking();const e=this.adsLoaderManager;e&&(e.reset(),this.adsLoaderManager=null),this.adsPlayer&&this.adsPlayer.destroy(),this.adsPlayer=null,super.destroy()}destroyed(){return null===this.adsLoaderManager}}class Fe{constructor(e,t){this.adsLoader=null,this.adDisplayContainer=null,this.displayInitialized=!1,this.initialized=!1,this.started=!1,this.adsRequest=null,this.userRequestContext=null,this.adsManager=null,this.adsLoaderEvents={},this.adsManagerEvents={},this.container=t,this.schedule=null,this.breakMap={},this.player=e,this.environment=e.getEnvironment()}getVpaidMode(e){const t=google.ima.ImaSdkSettings.VpaidMode;return"disabled"===e||"none"===e?t.DISABLED:"enabled"===e?t.ENABLED:t.INSECURE}initializeDisplay(e){this.adDisplayContainer&&!this.displayInitialized&&(this.adDisplayContainer.initialize(),null!=e&&e.restrict&&(this.displayInitialized=!0))}contentComplete(){this.adsLoader&&this.adsLoader.contentComplete()}reset(e,t){if(t){this.adsRequest=null,this.userRequestContext=null;const e=this.adsManager;e&&(e.destroy(),this.adsManager=null),this.adsManagerEvents={},Object.keys(this.adsLoaderEvents).forEach((e=>{this.adsLoader.removeEventListener(e,this.adsLoaderEvents[e])})),this.adsLoaderEvents={}}else this.contentComplete();e&&(this.schedule=null,this.breakMap={}),this.initialized=this.started=!1}prepare(e,t){const s=google.ima.settings;s.setDisableCustomPlaybackForIOS10Plus(!0);const i=t.locale||this.player.getConfig().language;s.setLocale(i);const a=t.ppid;return a&&s.setPpid(a),"enabled"===t.omidSupport&&s.setFeatureFlags({enableOmidBeta:!0}),t.maxRedirects>=0&&s.setNumRedirects(t.maxRedirects),null===this.adsLoader&&(this.adDisplayContainer=new google.ima.AdDisplayContainer(this.container,e),this.adsLoader=new google.ima.AdsLoader(this.adDisplayContainer)),this.adsLoader}open(e,t,s){const i=this.prepare(s,t);return new Promise(((e,t)=>{i.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,t,!1),i.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,e,!1),this.adsLoaderEvents[google.ima.AdErrorEvent.Type.AD_ERROR]=t,this.adsLoaderEvents[google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED]=e}))}requestAds(e,t,s,i){if(null!==this.adsRequest)return;if(!i)return;const a=this.player,n=this.adsRequest=new google.ima.AdsRequest,r=this.userRequestContext={requestType:e,vpaidMode:t.vpaidmode,playerVersion:a.version.split("+")[0],adPosition:t.adPosition};n.setAdWillAutoPlay(!1!==a.getConfig().autostart),n.setAdWillPlayMuted(a.getMute());const o=a.getSafeRegion(!1);n.linearAdSlotWidth=o.width,n.linearAdSlotHeight=o.height;const l=a.getSafeRegion(!0);n.nonLinearAdSlotWidth=l.width,n.nonLinearAdSlotHeight=l.height,n.forceNonLinearFullSlot=s.forceNonLinearFullSlot,n.vastLoadTimeout=s.vastLoadTimeout,"enabled"===t.omidSupport&&(n.omidAccessModeRules=t.omidAccessModeRules);const d=this.adsLoader.getSettings(),h=this.getVpaidMode(r.vpaidMode);if(d.setPlayerType("jwplayer"),d.setPlayerVersion(r.playerVersion),d.setVpaidMode(h),i._pod)n.adsResponse=r.adsResponse=((e,t)=>{const s=document.implementation.createDocument("http://www.iab.net/videosuite/vmap","vmap:VMAP",null),i=s.documentElement;return i.setAttribute("version","1.0"),e.forEach((e=>{const a=s.createElement("vmap:AdTagURI");a.appendChild(s.createCDATASection(e));const n=i.appendChild(s.createElement("vmap:AdBreak")),r=`${t}`.replace("pre","start").replace("post","end");n.setAttribute("timeOffset",r);const o=n.appendChild(s.createElement("vmap:AdSource"));o.setAttribute("allowMultipleAds","true"),o.setAttribute("followRedirects","true"),o.appendChild(a)})),i.outerHTML||(new XMLSerializer).serializeToString(i)})(i._pod,i._offSet);else if(i.adm||i._adXML)n.adsResponse=r.adsResponse=i.adm||i._adXML;else if(i.tag||i._adQueue&&1===i._adQueue.length){const e=i.tag||i._adQueue[0];n.adTagUrl=r.adTagUrl=e.trim()}else{var u;const e=null!=i&&null!=(u=i._adQueue)&&u.length?(e=>{const t=document.implementation.createDocument("http://www.w3.org/2001/XMLSchema-instance","VAST",null),s=t.documentElement;return s.setAttribute("version","2.0"),e.forEach(((e,i)=>{const a=t.createElement("Ad");a.setAttribute("id",i);const n=t.createElement("Wrapper"),r=t.createElement("Extensions"),o=t.createElement("Extension");o.setAttribute("type","waterfall"),o.setAttribute("fallback_index",i);const l=t.createElement("VASTAdTagURI");l.appendChild(t.createCDATASection(e)),a.appendChild(n),n.appendChild(l),n.appendChild(r),r.appendChild(o),s.appendChild(a)})),s.outerHTML||(new XMLSerializer).serializeToString(s)})(i._adQueue):i.xml;n.adsResponse=r.adsResponse=e}this.adsLoader.requestAds(n,r)}getAdsManager(e,t,s){const i=new google.ima.AdsRenderingSettings;i.enablePreloading=s.enablePreloading||s.preloadAds,i.loadVideoTimeout=s.loadVideoTimeout,i.uiElements=null,i.useStyledNonLinearAds=!0,this.environment.OS.android&&this.environment.Browser.chrome&&this.environment.Browser.version.major>=84&&(i.mimeTypes=["video/mp4","video/webm","audio/mp4","audio/webm"]);const a=this.player.getConfig().bandwidthEstimate;if(i.bitrate=a?a/1e3:-1,s.customUi){s.customUi.disableUi&&(i.disableUi=!0)}return this.adsManager=e.getAdsManager(t,i),this.userRequestContext=e.getUserRequestContext(),this.adsManager}init(e,t,s){null!==this.adsManager&&!1===this.initialized&&(this.adsManager.init(e,t,s),this.initialized=!0)}start(){null!==this.adsManager&&!1===this.started&&(this.initializeDisplay({restrict:!0}),this.adsManager.start(),this.started=!0)}bindEvents(e){const t=google.ima.AdEvent.Type,s=google.ima.AdErrorEvent.Type;Object.keys(e).forEach((i=>{const a=t[i]||s[i],n=this.adsManagerEvents[a];n&&this.adsManager.removeEventListener(a,n),this.adsManager.addEventListener(a,e[i],!1),this.adsManagerEvents[a]=e[i]}))}unbindEvents(e){const t=google.ima.AdEvent.Type,s=google.ima.AdErrorEvent.Type;e.forEach((e=>{const i=t[e]||s[e],a=this.adsManagerEvents[i];a&&(this.adsManager.removeEventListener(i,a),delete this.adsManagerEvents[i])}))}getTag(e){if("string"==typeof this.schedule)return this.schedule;const t=He(e,"getAdPodInfo");if(t){const e=this.breakMap[He(t,"getTimeOffset")]||{};if(e.tag)return e.tag}return this.userRequestContext?this.userRequestContext.adTagUrl||this.userRequestContext.adsResponse||"":(console.error("invalid request context",this.userRequestContext),"")}getJwpSeg(e){const t=He(e,"getAdPodInfo");if(t){var s,i;const e=He(t,"getTimeOffset");return null==this||null==(s=this.breakMap)||null==(i=s[e])?void 0:i.jwpseg}return null}_getTimeoffsetFromPosition(){const e=this.player.getPosition();let t,s=1/0;return Object.keys(this.breakMap).forEach((i=>{const a=e-i;a>=0&&a<s&&(t=i,s=a)})),s===1/0?-1:t}skipAd(){this.adsManager&&this.adsManager.skip()}getBid(e){const t=J(e,this.player.utils);return this.breakMap[t]?this.breakMap[t].bid:null}setBid(e,t){const s=J(e,this.player.utils);this.breakMap[s]=this.breakMap[s]||{},this.breakMap[s].bid=t}}const Ke={},Ye={},Ze={},et=(e,t)=>{const s=Ke[t];return s||(Ke[t]=new Promise(((s,i)=>{const a=new e.key(t);if("unlimited"===a.edition())return i();const n=["//","entitlements.jwplayer.com","/",a.token(),".json"];"file:"===window.location.protocol&&n.unshift("https:"),e.ajax(n.join(""),(function(e){const t=null==e?void 0:e.response;t?s(t):i()}),(function(){i()}),{timeout:1e4,responseType:"json"})})))},tt=(e,t)=>{const s=Ye[t];return s||(Ye[t]=et(e,t).catch((()=>({}))).then((e=>{if(!1===e.canUseVPB)throw new Error("Not entitled for Player Bidding")})))},st=(e,t,s)=>{const i=Ze[t];return i||(Ze[t]=et(e,t).catch((()=>({}))).then((e=>{let t,i;if(!0===s.outstream?(t=!1!==e.canPlayOutstreamAds,i="Outstream Ad Limit Reached"):(t=!1!==e.canPlayAds,i="Ad Limit Reached"),!1===t)throw new Error(i);return{message:"Can Play Ads"}})))},it=function(){};var at="8.10.0";!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}}(".jw-plugin-googima{overflow:hidden;width:100%;height:100%;display:block;visibility:hidden;pointer-events:none;opacity:0}.jw-plugin-googima.jw-ad-instream{visibility:visible;display:block;pointer-events:all;opacity:1}.jw-plugin-googima.jw-ad-instream .jw-ads-view>:not(div),.jw-plugin-googima.jw-ad-instream .jw-ads-view>div:not(:empty){width:100%;height:100%}.jw-plugin-googima.jw-ad-linear{top:0;left:0;bottom:0}.jw-plugin-googima.jw-ad-non-linear{top:auto}.jw-plugin-googima .jw-ads-view{position:absolute;width:100%;height:100%}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display,.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display .jw-icon-display{pointer-events:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{background:0 0!important;pointer-events:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-horizontal-volume-container{pointer-events:auto}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-icon{pointer-events:all}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-icon-fullscreen:not(.jw-fullscreen-ima){display:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-fullscreen-ima{display:flex}.jwplayer.jw-flag-ads-googleima .jw-controls-backdrop{display:none}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume,.jwplayer.jw-flag-ads-googleima.jw-ie .jw-svg-icon{background:rgba(0,0,0,.25);border-radius:3px}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume{margin:0 10px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume,.jwplayer.jw-flag-ads-googleima.jw-ie .jw-svg-icon{background:0 0;border-radius:0}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume{margin:0}}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-svg-icon{fill:#fff;filter:drop-shadow(0 0 3px #000)}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-text{text-shadow:0 0 3px #000}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar{pointer-events:none}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-controlbar{flex-flow:column-reverse nowrap;height:100%;max-height:none}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-button-container{align-items:flex-end;flex-wrap:wrap;margin-bottom:7px}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-controlbar .jw-icon{height:30px}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-text{align-self:flex-start;margin:16px 0 0 16px;order:-1;width:100%}"),function(e,t,s){try{(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)(e,t,s)}catch(e){}}(t,"8.1",class extends _{constructor(e,s,i,a){super(e,s,i,t),this.player.utils.extend(this,this.player.Events),this.configScheduleParser=new Se(this.player,this.pluginConfig,t),this.options=new xe(this.pluginConfig||{},this.player.getConfig(),this.player.utils),this.adRules=this.configScheduleParser.getAdRules(),this.videoElement=null,this.playlistItemEventCount=0,this.nextPlaylistItemManager=null,this.nextPlaylistRelated=!1,this.bidsBlock=this.pluginConfig.bids,a&&a.sdkPromise&&a.checkEntitlements?(a.checkEntitlements(),a.sdkPromise()):(!function(e,t,s,i){const a=t.key,n=e.utils,r=st(n,a,s);let o;r.catch(it),s.bids&&(o=tt(n,a),o.catch(it)),e.on("ready",(()=>{o&&o.catch((s=>{e.trigger("destroyBidding"),e.trigger(p,Ce(s.message,60009,t,i))})),r.catch((s=>{e.trigger("destroyPlugin",s),e.trigger(p,Ce(s.message,60002,t,i))}))}))}(this.player,this.playerConfig,this.pluginConfig,t),qe(this.player.utils).catch(this.player.utils.noop)),this.view=new Be(this.div,this.player.id,this.player.utils),this.instreamProvider=new Ue(this.player.utils,this.player.Events,this.view),this.adsLoader=new Fe(this.player,this.view.getAdDiv()),this.version=at,this.player.loadAdTag=this.loadAdTag.bind(this),this.player.loadAdXml=this.loadAdXml.bind(this),this.player.playAd=this.loadAdTag.bind(this),this.player.on("ready",this.onReadyCallback,this),this.player.on("playlistItem",this.onPlaylistItemCallback,this),this.player.on("playlistComplete",this.onPlaylistCompleteCallback,this),this.player.on("cast",this.onCastCallback,this),this.player.on("mute",this.onMuteCallback,this),this.player.on("destroyPlugin",this.onDestroyPlugin,this),this.player.on("destroyBidding",this.onDestroyBidding,this)}adsDebugMode(){this.options.debug=!0,this.playlistItemManager&&(this.playlistItemManager.debugConsoleLog=function(...e){console.log(e)})}getCompanions(e,t,s,i){try{return e.getCompanionAds(t,s,i)}catch(e){return[]}}addCompanionsToDOM(e){if(!e||!e.length)return;const t=document.getElementById(this.options.companiondiv.id);if(!t)return;const s=e[0];s&&("function"==typeof s.getContent?t.innerHTML=s.getContent():t.innerHTML=s.resource||s.content)}convertCompanions(e){const t=[];for(let s=0;s<e.length;s++){const i=e[s];t.push({width:i.getWidth(),height:i.getHeight(),type:"html",resource:i.getContent()})}return t}manageCompanionAd(e){const t=e.currentAd;let s=new google.ima.CompanionAdSelectionSettings;s.sizeCriteria=google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE;const i=this.options.companiondiv||{width:300,height:250},a=this.convertCompanions(this.getCompanions(t,i.width,i.height,s));let n=a.length;if(n){const s=$e(this.playlistItemManager,t,e.scheduledAd);s.companions=a,this.player.trigger("adCompanions",s)}if(this.options.companiondiv){s=new google.ima.CompanionAdSelectionSettings,this.options.companionResourceType&&(s.resourceType=google.ima.CompanionAdSelectionSettings.ResourceType[this.options.companionResourceType]);const e=this.getCompanions(t,this.options.companiondiv.width,this.options.companiondiv.height,s);n=Math.max(n,e.length),this.addCompanionsToDOM(e)}return n>0}destroyPlugin(){var e;this.destroy(),null!=this&&null!=(e=this.adsLoader)&&e.adDisplayContainer&&this.adsLoader.adDisplayContainer.destroy(),this.player.off(null,null,this),this.player.playAd=this.player.utils.noop,this.player.loadAdTag=this.player.utils.noop,this.player.loadAdXml=this.player.utils.noop,this.player.pauseAd=this.player.utils.noop}resetSchedule(e){var t;null!=this&&null!=(t=this.playlistItemManager)&&t.adsPlayer&&this.playlistItemManager.adsPlayer.discardAdBreak(),this.adsLoader.contentComplete(),this.destroy(e),function(e){const t=e.getCues();if(Array.isArray(t)&&t.length){const s=t.filter((e=>"ads"!==e.cueType));e.setCues(s)}}(this.player)}createPlaylistItemManager(e,t,s,i){const a=e.item||{},n=this.configScheduleParser.getSchedule(a,s.playlistItemEventCount),r=new(null!=i&&i.PlaylistItemManager?i.PlaylistItemManager:Je)(this.player,n,a,this.pluginConfig,this.options,this.instreamProvider,this.view,this.adsLoader,this.videoElement,this.casting);return r.on("all",((e,t)=>{if("preloadNext"!==e)this.player.trigger(e,t);else{const e=Object.assign({},s,{preloadPreroll:!0,playlistItemEventCount:this.playlistItemEventCount+1});r.next=this.createPlaylistItemManager(t,b,e)}})),r.init(this.bidsBlock,s),r.on(m,(()=>this.manageCompanionAd(r.adsPlayer))),r}handlePlaylistItem(e,t,s,i){null!=i&&i.sdkPromise?i.sdkPromise():qe(this.player.utils).then((()=>{this.adsLoader.prepare(this.videoElement,s)}));const a=e.item||this.player.getPlaylistItem(e.index);this.resetSchedule(!0);const n=this.configScheduleParser.getSchedule(a,this.playlistItemEventCount);!(t===b&&!this.adRules.rulesAllowAdPlayback(this.playlistItemEventCount))&&n&&(n.getAllAds().length||n.isVMAP())&&(this.nextPlaylistItemManager&&a!==this.nextPlaylistItemManager.item&&!1===this.nextPlaylistRelated&&(this.nextPlaylistItemManager.off(null,null,this),this.nextPlaylistItemManager.destroy(),this.nextPlaylistItemManager=null),this.adsLoader.reset(!0),this.playlistItemManager=this.nextPlaylistItemManager||this.createPlaylistItemManager(e,t,s),this.playlistItemManager.attachListeners(),this.nextPlaylistItemManager=null,this.nextPlaylistRelated=!1)}loadAdTag(e,t){let s;s=this.player._.isArray(e)?e.slice(0):[e],this.buildAndLoadAdObj({_adQueue:s},t)}loadAdXml(e,t){this.buildAndLoadAdObj({_adXML:e},t)}buildAndLoadAdObj(e,t){const s={_position:te(this.player),adBreakId:this.player.utils.genId(12)},i=Object.assign(s,e);this.loadAdObj(i,t)}loadAdObj(e,t){const s=this.player.utils.extend({},this.pluginConfig),i=new(null!=t&&t.Options?t.Options:xe)(s,this.player.getConfig(),this.player.utils),a=this.playlistItemManager?this.playlistItemManager.blockingInstreamPlayer:null;a&&(a.noResume=!0),this.destroy(),this.playlistItemManager=this.createPlaylistItemManager({item:this.player.getPlaylistItem()},w,i),this.playlistItemManager&&!this.playlistItemManager.destroyed()&&(this.playlistItemManager.startAdBreak(e),this.playlistItemManager.triggerAdBreakEvents(e))}handleDependencyError(e,t){this.destroyPlugin(),this.player.trigger(p,ze(null,{message:e,adErrorCode:t,id:v,placement:W(this.playerConfig),tag:""}))}onReadyCallback(e){this.videoElement||(this.videoElement=this.player.createInstream().getMediaElement()),null!=e&&e.sdkPromise?e.sdkPromise():qe(this.player.utils).catch((e=>{e.message.match(/Failed to load/)&&this.handleDependencyError("Ad playback blocked by an ad blocker",2e4)}));const t=document.body;this.primeAdDisplay=()=>{t.removeEventListener("mouseup",this.primeAdDisplay),t.removeEventListener("touchend",this.primeAdDisplay),this.adsLoader.initializeDisplay(),this.primeAdDisplay=null},t.addEventListener("mouseup",this.primeAdDisplay,!1),t.addEventListener("touchend",this.primeAdDisplay,!1)}onPlaylistItemCallback(e){this.playlistItemEventCount++;const t=Object.assign({playlistItemEventCount:this.playlistItemEventCount},this.options);this.handlePlaylistItem(e,b,t),this.playlistItemManager&&!this.playlistItemManager.schedule.isVMAP()&&this.sendCues(this.playlistItemManager.schedule,this.options.cuetext)}onPlaylistCompleteCallback(){this.resetSchedule(!0)}onCastCallback(e){this.casting=Boolean(e.active),e.active&&this.resetSchedule()}onMuteCallback(e){this.instreamProvider.mute(e)}onDestroyPlugin(){this.destroy()}onDestroyBidding(){this.bidsBlock=null}destroy(e){this.playlistItemManager&&(e&&(this.nextPlaylistItemManager=this.playlistItemManager.next,this.nextPlaylistRelated=this.playlistItemManager.nextPlaylistRelated),this.playlistItemManager.off(null,null,this),this.playlistItemManager.destroy(),this.playlistItemManager=null),this.primeAdDisplay&&(document.body.removeEventListener("mouseup",this.primeAdDisplay),document.body.removeEventListener("touchend",this.primeAdDisplay)),this.configScheduleParser.reset()}})}();
nd: url('data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTk3IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMTk3IDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTk3IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xOTM1XzE1NDQyNikiPgo8cGF0aCBkPSJNMjUuMzcwNCAzMS44Njc3TDI2LjAyNjcgMjcuNzc5OEMyNi4wNjI2IDI3LjU2MzIgMjYuMTg1NyAyNy4zNDY3IDI2LjQ3MTUgMjcuMzQ2N0gzMC4xMzU5QzMwLjgzMjkgMjcuMzUyOCAzMS41NjcyIDI3LjQxNDQgMzIuMTA5OCAyNy42OTQ1QzMyLjEwNjggMjcuODQ4OCAzMi4wOTMgMjguMDk3OCAzMi4wNjggMjguMjU1N0MzMS43MzcxIDMwLjMzMzcgMjkuOTI0OCAzMS44NjczIDI3Ljc4OTkgMzEuODY3M0gyNS4zNzAxTDI1LjM3MDQgMzEuODY3N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMy4wMDMxIDI4LjE4NjVDMzIuOTk0OCAyOC4zNzIgMzIuOTg0MyAyOC41MzgzIDMyLjk1NTYgMjguNzE3MkMzMi41ODA5IDMxLjA2OTQgMzAuNTAxMyAzMi44MDU3IDI4LjA4NDUgMzIuODA1N0gyNS42ODY1QzI1LjQxOTggMzIuODA1NCAyNS4xOTEzIDMyLjk5NzMgMjUuMTQ5OCAzMy4yNTc2TDIzLjk4MzYgNDAuNDk3OEMyMy45NDExIDQwLjc2MTcgMjQuMTQ4NSA0MS4wMDAzIDI0LjQxOTggNDEuMDAwM0gyNi45ODgxQzI3LjI2NSA0MS4wMDAzIDI3LjQ3OTMgNDAuODAwNiAyNy41MjM1IDQwLjU1NzhMMjguMTU5MyAzNi42MzNDMjguMTk3NSAzNi4zOTQxIDI4LjQwNjkgMzYuMjE4IDI4LjY1MjUgMzYuMjE4SDMwLjE4QzMyLjU5NjcgMzYuMjE4IDM0LjY3NjQgMzQuNDgxNyAzNS4wNTExIDMyLjEyOTVDMzUuMzE3MSAzMC40NTk3IDM0LjQ2MzMgMjguOTQwMiAzMy4wMDM0IDI4LjE4NjhMMzMuMDAzMSAyOC4xODY1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI1LjIxMzUgMjYuODIyOEMyNS4yNTE3IDI2LjU4NDIgMjUuNDYwOCAyNi40MDgxIDI1LjcwNjQgMjYuNDA4MUgzMC4wNTA0QzMwLjgzOTMgMjYuNDA5OCAzMS41OTMzIDI2LjQ2MiAzMi4xNzc3IDI2Ljc1ODlDMzIuMTg1MyAyNC41OTE1IDMwLjIyNzggMjIuOTg4NyAyNy45NTYyIDIzLjAwMDFIMjIuNzAxOUMyMi40NTk1IDIzLjAxMDggMjIuMjM1NiAyMy4xODc4IDIyLjE5NTUgMjMuNDUxTDIwLjAwODggMzcuMDczOUMxOS45NTI5IDM3LjM1MjEgMjAuMTcxMiAzNy41ODg3IDIwLjQzNTIgMzcuNTg4N0gyMy40ODM1TDI1LjIxMzUgMjYuODIyOFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPHBhdGggZD0iTTQ1LjU1MSAzMi44NDc3QzQ3LjY1MTEgMzIuODQ3NyA0OS40MzM5IDMxLjMzOTEgNDkuNzU5OSAyOS4yOTQzQzUwLjA4ODEgMjcuMjMyNCA0OC40NTI4IDI1LjQzNSA0Ni4xMzQxIDI1LjQzMDdINDIuMzk4N0M0Mi4yNTQ5IDI1LjQzMDcgNDIuMTMyMiAyNS41MzM2IDQyLjEwOTcgMjUuNjczOEw0MC40NDI0IDM2LjA4MjFDNDAuNDE2MiAzNi4yNDM3IDQwLjU0MzMgMzYuMzkwMyA0MC43MDk2IDM2LjM5MDNINDIuNjg3QzQyLjgzMDggMzYuMzkwMyA0Mi45NTM1IDM2LjI4NzMgNDIuOTc2IDM2LjE0NzJMNDMuNDY1NCAzMy4wOTA3QzQzLjQ4OCAzMi45NTA2IDQzLjYxMDcgMzIuODQ3NyA0My43NTQ1IDMyLjg0NzdINDUuNTUxN0g0NS41NTFaTTQ3LjIwNTIgMjkuMjAyOEM0Ny4wODMyIDI5Ljk2NDkgNDYuNDg0OSAzMC41MjYyIDQ1LjMzOTcgMzAuNTI2Mkg0My44NzU3TDQ0LjMxOTQgMjcuNzU0M0g0NS43NTczQzQ2Ljk0MTYgMjcuNzU0MyA0Ny4zMjY1IDI4LjQ0MjEgNDcuMjA1MiAyOS4yMDI4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU4LjMyNTIgMjguNzExNkg1Ni40NDg4QzU2LjMwNSAyOC43MTE2IDU2LjE4MjMgMjguODE0NSA1Ni4xNTk4IDI4Ljk1NDZMNTYuMDk4IDI5LjMzNzlDNTYuMDk4IDI5LjMzNzkgNTQuNjQxMyAyNy43NzA3IDUyLjA2MiAyOC44Mjg4QzUwLjU4MjggMjkuNDM1OCA0OS44NzI2IDMwLjY5MDYgNDkuNTcwNSAzMS42MDVDNDkuNTcwNSAzMS42MDUgNDguNjEwNSAzNC4zOTU1IDUwLjc4MDMgMzUuOTI5MUM1MC43ODAzIDM1LjkyOTEgNTIuNzkxOCAzNy40MDQ4IDU1LjA1NjcgMzUuODM3Nkw1NS4wMTc1IDM2LjA4MjFDNTQuOTkxNCAzNi4yNDM3IDU1LjExODQgMzYuMzkwMiA1NS4yODQ3IDM2LjM5MDJINTcuMTYxMkM1Ny4zMDQ5IDM2LjM5MDIgNTcuNDI3NyAzNi4yODczIDU3LjQ1MDIgMzYuMTQ3MUw1OC41OTE3IDI5LjAxOUM1OC42MTc5IDI4Ljg1NzQgNTguNDkwOCAyOC43MTA4IDU4LjMyNDUgMjguNzEwOEw1OC4zMjUyIDI4LjcxMTZaTTU1LjU2NzIgMzIuNjUxQzU1LjQwMzEgMzMuNjczNCA1NC41NTIgMzQuNDI2MiA1My40NTk5IDM0LjQyNjJDNTMuMjQ0MiAzNC40MjYyIDUzLjA0NjcgMzQuMzk2OSA1Mi44NzAyIDM0LjM0MTFDNTIuMDYwNSAzNC4wODUyIDUxLjU5ODcgMzMuMzE5NSA1MS43MzE2IDMyLjQ4OTRDNTEuODk1NyAzMS40NjcgNTIuNzQ5NyAzMC43MTQyIDUzLjg0MTEgMzAuNzE0MkM1NC4wNTY4IDMwLjcxNDIgNTQuMjU0MyAzMC43NDM1IDU0LjQzMDcgMzAuNzk5MkM1NS4yNDA0IDMxLjA1NTIgNTUuNjk5NCAzMS44MjA5IDU1LjU2NjUgMzIuNjUxSDU1LjU2NzJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzIuNTc4OCAzMi44NDc3Qzc0LjY3ODkgMzIuODQ3NyA3Ni40NjE3IDMxLjMzOTEgNzYuNzg3OCAyOS4yOTQzQzc3LjExNiAyNy4yMzI0IDc1LjQ4MDYgMjUuNDM1IDczLjE2MiAyNS40MzA3SDY5LjQyNjVDNjkuMjgyNyAyNS40MzA3IDY5LjE2IDI1LjUzMzYgNjkuMTM3NSAyNS42NzM4TDY3LjQ3MDIgMzYuMDgyMUM2Ny40NDQxIDM2LjI0MzcgNjcuNTcxMiAzNi4zOTAzIDY3LjczNzQgMzYuMzkwM0g2OS43MTQ4QzY5Ljg1ODYgMzYuMzkwMyA2OS45ODEzIDM2LjI4NzMgNzAuMDAzOCAzNi4xNDcyTDcwLjQ5MzMgMzMuMDkwN0M3MC41MTU4IDMyLjk1MDYgNzAuNjM4NSAzMi44NDc3IDcwLjc4MjMgMzIuODQ3N0g3Mi41Nzk2SDcyLjU3ODhaTTc0LjIzMzEgMjkuMjAyOEM3NC4xMTExIDI5Ljk2NDkgNzMuNTEyNyAzMC41MjYyIDcyLjM2NzUgMzAuNTI2Mkg3MC45MDM2TDcxLjM0NzMgMjcuNzU0M0g3Mi43ODUxQzczLjk2OTUgMjcuNzU0MyA3NC4zNTQzIDI4LjQ0MjEgNzQuMjMzMSAyOS4yMDI4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTg1LjM1MjYgMjguNzExNkg4My40NzYxQzgzLjMzMjMgMjguNzExNiA4My4yMDk2IDI4LjgxNDUgODMuMTg3MSAyOC45NTQ2TDgzLjEyNTQgMjkuMzM3OUM4My4xMjU0IDI5LjMzNzkgODEuNjY4NyAyNy43NzA3IDc5LjA4OTMgMjguODI4OEM3Ny42MTAxIDI5LjQzNTggNzYuODk5OSAzMC42OTA2IDc2LjU5NzggMzEuNjA1Qzc2LjU5NzggMzEuNjA1IDc1LjYzNzggMzQuMzk1NSA3Ny44MDc2IDM1LjkyOTFDNzcuODA3NiAzNS45MjkxIDc5LjgxOTEgMzcuNDA0OCA4Mi4wODQgMzUuODM3Nkw4Mi4wNDQ4IDM2LjA4MjFDODIuMDE4NyAzNi4yNDM3IDgyLjE0NTggMzYuMzkwMiA4Mi4zMTIxIDM2LjM5MDJIODQuMTg4NUM4NC4zMzIzIDM2LjM5MDIgODQuNDU1IDM2LjI4NzMgODQuNDc3NSAzNi4xNDcxTDg1LjYxOTEgMjkuMDE5Qzg1LjY0NTIgMjguODU3NCA4NS41MTgxIDI4LjcxMDggODUuMzUxOCAyOC43MTA4TDg1LjM1MjYgMjguNzExNlpNODIuNTk0NSAzMi42NTFDODIuNDMwNCAzMy42NzM0IDgxLjU3OTQgMzQuNDI2MiA4MC40ODcyIDM0LjQyNjJDODAuMjcxNSAzNC40MjYyIDgwLjA3NCAzNC4zOTY5IDc5Ljg5NzUgMzQuMzQxMUM3OS4wODc5IDM0LjA4NTIgNzguNjI2IDMzLjMxOTUgNzguNzU4OSAzMi40ODk0Qzc4LjkyMyAzMS40NjcgNzkuNzc3IDMwLjcxNDIgODAuODY4NCAzMC43MTQyQzgxLjA4NDEgMzAuNzE0MiA4MS4yODE2IDMwLjc0MzUgODEuNDU4MSAzMC43OTkyQzgyLjI2NzggMzEuMDU1MiA4Mi43MjY3IDMxLjgyMDkgODIuNTkzOCAzMi42NTFIODIuNTk0NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02NS4yMTQzIDI4Ljg4ODVMNjIuOTUyMyAzMi42NDg1TDYxLjgwNDIgMjguOTE2NEM2MS43NjcyIDI4Ljc5NDggNjEuNjUzMiAyOC43MTE5IDYxLjUyNDYgMjguNzExOUg1OS40ODM0QzU5LjMzNDUgMjguNzExOSA1OS4yMjkyIDI4Ljg1NDkgNTkuMjc1IDI4Ljk5NDNMNjEuMzMyMiAzNS4yODFMNTkuNDcxOCAzOC4yNDM4QzU5LjM4MTcgMzguMzg3NSA1OS40ODYzIDM4LjU3MzQgNTkuNjU4NCAzOC41NzM0SDYxLjg1NzJDNjEuOTg1IDM4LjU3MzQgNjIuMTA0MSAzOC41MDc2IDYyLjE3MDIgMzguMzk5Nkw2Ny45MTY0IDI5LjA0MDFDNjguMDA1IDI4Ljg5NjQgNjcuODk5NyAyOC43MTI2IDY3LjcyOTEgMjguNzEyNkg2NS41MzAyQzY1LjQwMSAyOC43MTI2IDY1LjI4MTkgMjguNzc5OCA2NS4yMTU4IDI4Ljg4OTJMNjUuMjE0MyAyOC44ODg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTg3LjQ2MzcgMjUuNjczOEw4NS43OTY0IDM2LjA4MjFDODUuNzcwMiAzNi4yNDM3IDg1Ljg5NzMgMzYuMzkwMyA4Ni4wNjM2IDM2LjM5MDNIODguMDQwM0M4OC4xODQgMzYuMzkwMyA4OC4zMDY4IDM2LjI4NzMgODguMzI5MyAzNi4xNDcyTDg5Ljk5NjYgMjUuNzM4OEM5MC4wMjI3IDI1LjU3NzIgODkuODk1NiAyNS40MzA3IDg5LjcyOTMgMjUuNDMwN0g4Ny43NTI3Qzg3LjYwODkgMjUuNDMwNyA4Ny40ODYyIDI1LjUzMzYgODcuNDYzNyAyNS42NzM4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTk5Ljc1NSAzMUgxMDAuNzYzVjI2LjY3MUgxMDIuMjg0VjI1Ljc3MUg5OC4yMzRWMjYuNjcxSDk5Ljc1NVYzMVpNMTAzLjE5MyAzMUgxMDQuMjAxVjI4LjkzSDEwNi41ODZWMzFIMTA3LjU5NFYyNS43NzFIMTA2LjU4NlYyOC4wM0gxMDQuMjAxVjI1Ljc3MUgxMDMuMTkzVjMxWk0xMDguOTIzIDMxSDExMi42MTNWMzAuMUgxMDkuOTMxVjI4LjkwM0gxMTEuOTY1VjI4LjAwM0gxMDkuOTMxVjI2LjY3MUgxMTIuNDUxVjI1Ljc3MUgxMDguOTIzVjMxWk0xMTYuMDg2IDMxSDExNy4wOTRWMjkuMkgxMTguMDIxQzExOS4yMzYgMjkuMiAxMjAuMDM3IDI4LjY1MSAxMjAuMDM3IDI3LjQ5OUMxMjAuMDM3IDI2LjUwOSAxMTkuNDcgMjUuNzcxIDExOC4xMjkgMjUuNzcxSDExNi4wODZWMzFaTTExNy4wOTQgMjguM1YyNi42NzFIMTE4LjA2NkMxMTguNjk2IDI2LjY3MSAxMTguOTc1IDI2Ljk4NiAxMTguOTc1IDI3LjQ3MkMxMTguOTc1IDI3Ljk3NiAxMTguNjk2IDI4LjMgMTE4LjAxMiAyOC4zSDExNy4wOTRaTTEyMS4wMDggMzFIMTIyLjAxNlYyOS4ySDEyMi42ODJMMTIzLjk2OSAzMUgxMjUuMjExTDEyMy44MjUgMjkuMTAxQzEyNC42MDggMjguODU4IDEyNS4wMTMgMjguMzA5IDEyNS4wMTMgMjcuNDk5QzEyNS4wMTMgMjYuNTA5IDEyNC40MjggMjUuNzcxIDEyMy4wOTYgMjUuNzcxSDEyMS4wMDhWMzFaTTEyMi4wMTYgMjguM1YyNi42NzFIMTIzLjAxNUMxMjMuNjQ1IDI2LjY3MSAxMjMuOTUxIDI2Ljk4NiAxMjMuOTUxIDI3LjQ3MkMxMjMuOTUxIDI3Ljk3NiAxMjMuNjU0IDI4LjMgMTIyLjk2MSAyOC4zSDEyMi4wMTZaTTEyNi4xMzIgMzFIMTI5LjgyMlYzMC4xSDEyNy4xNFYyOC45MDNIMTI5LjE3NFYyOC4wMDNIMTI3LjE0VjI2LjY3MUgxMjkuNjZWMjUuNzcxSDEyNi4xMzJWMzFaTTEzMC44ODcgMzFIMTMxLjg5NVYyOC45OTNIMTM0LjA5MVYyOC4wOTNIMTMxLjg5NVYyNi42NzFIMTM0LjUyM1YyNS43NzFIMTMwLjg4N1YzMVpNMTM1LjQ1NyAzMUgxMzkuMTQ3VjMwLjFIMTM2LjQ2NVYyOC45MDNIMTM4LjQ5OVYyOC4wMDNIMTM2LjQ2NVYyNi42NzFIMTM4Ljk4NVYyNS43NzFIMTM1LjQ1N1YzMVpNMTQwLjIxMiAzMUgxNDEuMjJWMjkuMkgxNDEuODg2TDE0My4xNzMgMzFIMTQ0LjQxNUwxNDMuMDI5IDI5LjEwMUMxNDMuODEyIDI4Ljg1OCAxNDQuMjE3IDI4LjMwOSAxNDQuMjE3IDI3LjQ5OUMxNDQuMjE3IDI2LjUwOSAxNDMuNjMyIDI1Ljc3MSAxNDIuMyAyNS43NzFIMTQwLjIxMlYzMVpNMTQxLjIyIDI4LjNWMjYuNjcxSDE0Mi4yMTlDMTQyLjg0OSAyNi42NzEgMTQzLjE1NSAyNi45ODYgMTQzLjE1NSAyNy40NzJDMTQzLjE1NSAyNy45NzYgMTQyLjg1OCAyOC4zIDE0Mi4xNjUgMjguM0gxNDEuMjJaTTE0NS4zNTQgMzFIMTQ2LjM2MlYyOS4ySDE0Ny4wMjhMMTQ4LjMxNSAzMUgxNDkuNTU3TDE0OC4xNzEgMjkuMTAxQzE0OC45NTQgMjguODU4IDE0OS4zNTkgMjguMzA5IDE0OS4zNTkgMjcuNDk5QzE0OS4zNTkgMjYuNTA5IDE0OC43NzQgMjUuNzcxIDE0Ny40NDIgMjUuNzcxSDE0NS4zNTRWMzFaTTE0Ni4zNjIgMjguM1YyNi42NzFIMTQ3LjM2MUMxNDcuOTkxIDI2LjY3MSAxNDguMjk3IDI2Ljk4NiAxNDguMjk3IDI3LjQ3MkMxNDguMjk3IDI3Ljk3NiAxNDggMjguMyAxNDcuMzA3IDI4LjNIMTQ2LjM2MlpNMTUwLjQ3NyAzMUgxNTQuMTY3VjMwLjFIMTUxLjQ4NVYyOC45MDNIMTUzLjUxOVYyOC4wMDNIMTUxLjQ4NVYyNi42NzFIMTU0LjAwNVYyNS43NzFIMTUwLjQ3N1YzMVpNMTU1LjIzMyAzMUgxNTcuMDMzQzE1OC44MDYgMzEgMTU5Ljg2OCAyOS45MjkgMTU5Ljg2OCAyOC4zOUMxNTkuODY4IDI2Ljg1MSAxNTguNzYxIDI1Ljc3MSAxNTcuMDE1IDI1Ljc3MUgxNTUuMjMzVjMxWk0xNTYuMjQxIDMwLjFWMjYuNjcxSDE1Ny4wMzNDMTU4LjA3NyAyNi42NzEgMTU4LjgxNSAyNy40IDE1OC44MTUgMjguMzlDMTU4LjgxNSAyOS4zNjIgMTU4LjA4NiAzMC4xIDE1Ni45NyAzMC4xSDE1Ni4yNDFaTTk4LjY3NSA0MEg5OS42ODNWMzguMkgxMDAuNjFDMTAxLjgyNSAzOC4yIDEwMi42MjYgMzcuNjUxIDEwMi42MjYgMzYuNDk5QzEwMi42MjYgMzUuNTA5IDEwMi4wNTkgMzQuNzcxIDEwMC43MTggMzQuNzcxSDk4LjY3NVY0MFpNOTkuNjgzIDM3LjNWMzUuNjcxSDEwMC42NTVDMTAxLjI4NSAzNS42NzEgMTAxLjU2NCAzNS45ODYgMTAxLjU2NCAzNi40NzJDMTAxLjU2NCAzNi45NzYgMTAxLjI4NSAzNy4zIDEwMC42MDEgMzcuM0g5OS42ODNaTTEwMi42NDQgNDBIMTAzLjcwNkwxMDQuMDc1IDM4Ljk5MkgxMDYuMjhMMTA2LjY0OSA0MEgxMDcuNzJMMTA1LjY1OSAzNC43NzFIMTA0LjY4N0wxMDIuNjQ0IDQwWk0xMDQuMzk5IDM4LjExTDEwNS4xNjQgMzYuMDIySDEwNS4xODJMMTA1Ljk1NiAzOC4xMUgxMDQuMzk5Wk0xMDkuMTE4IDQwSDExMC4xMjZWMzcuNjk2TDExMS45NTMgMzQuNzcxSDExMC43NjVMMTA5LjY0IDM2LjY3OUgxMDkuNjIyTDEwOC40ODggMzQuNzcxSDEwNy4zMDlMMTA5LjExOCAzNy42OTZWNDBaTTExMi41MTggNDBIMTEzLjUyNlYzNi42MzRIMTEzLjU0NEwxMTQuOTg0IDM4Ljk4M0gxMTUuNjQxTDExNy4wOSAzNi42MTZMMTE3LjA5OSAzNi42MjVWNDBIMTE4LjEwN1YzNC43NzFIMTE3LjA2M0wxMTUuMzE3IDM3Ljc2OEgxMTUuMjk5TDExMy41NTMgMzQuNzcxSDExMi41MThWNDBaTTExOS40NDMgNDBIMTIzLjEzM1YzOS4xSDEyMC40NTFWMzcuOTAzSDEyMi40ODVWMzcuMDAzSDEyMC40NTFWMzUuNjcxSDEyMi45NzFWMzQuNzcxSDExOS40NDNWNDBaTTEyNC4xNTMgNDBIMTI1LjE2MVYzNi41MDhMMTI1LjE4OCAzNi40OTlMMTI3LjcxNyA0MEgxMjguNzYxVjM0Ljc3MUgxMjcuNzUzVjM4LjM0NEwxMjcuNzM1IDM4LjM2MkwxMjUuMTcgMzQuNzcxSDEyNC4xNTNWNDBaTTEzMS4xNSA0MEgxMzIuMTU4VjM1LjY3MUgxMzMuNjc5VjM0Ljc3MUgxMjkuNjI5VjM1LjY3MUgxMzEuMTVWNDBaTTEzNi4xODkgNDAuMDYzQzEzNy4xMzQgNDAuMDcyIDEzOC4xMjQgMzkuNjEzIDEzOC4xMjQgMzguNDdDMTM4LjEzMyAzNy40NzEgMTM3LjM2OCAzNy4yMjggMTM2LjQ0MSAzNi44ODZDMTM1LjgxMSAzNi42NTIgMTM1LjQ3OCAzNi40OSAxMzUuNDc4IDM2LjEzOUMxMzUuNDg3IDM1LjgwNiAxMzUuNzkzIDM1LjYxNyAxMzYuMTg5IDM1LjYxN0MxMzYuNTQgMzUuNjE3IDEzNi45NDUgMzUuNzUyIDEzNy40MDQgMzYuMDk0TDEzNy45OCAzNS4zNTZDMTM3LjQ3NiAzNC45NDIgMTM2LjgxOSAzNC42OTkgMTM2LjE1MyAzNC42OTlDMTM1LjIwOCAzNC43MDggMTM0LjQxNiAzNS4yOTMgMTM0LjQxNiAzNi4xODRDMTM0LjQxNiAzNy4xODMgMTM1LjI0NCAzNy41NDMgMTM2LjA3MiAzNy44MjJDMTM2LjczOCAzOC4wNDcgMTM3LjA3MSAzOC4xODIgMTM3LjA2MiAzOC41NjlDMTM3LjA2MiAzOC45MTEgMTM2Ljc0NyAzOS4xNDUgMTM2LjIxNiAzOS4xNDVDMTM1Ljc4NCAzOS4xMzYgMTM1LjIzNSAzOC45NDcgMTM0LjgyMSAzOC41MDZMMTM0LjIyNyAzOS4yMzVDMTM0Ljc4NSAzOS44MDIgMTM1LjQ5NiA0MC4wNjMgMTM2LjE4OSA0MC4wNjNaTTE0MS41NTcgNDBIMTQyLjU2NVYzOC4ySDE0My40OTJDMTQ0LjcwNyAzOC4yIDE0NS41MDggMzcuNjUxIDE0NS41MDggMzYuNDk5QzE0NS41MDggMzUuNTA5IDE0NC45NDEgMzQuNzcxIDE0My42IDM0Ljc3MUgxNDEuNTU3VjQwWk0xNDIuNTY1IDM3LjNWMzUuNjcxSDE0My41MzdDMTQ0LjE2NyAzNS42NzEgMTQ0LjQ0NiAzNS45ODYgMTQ0LjQ0NiAzNi40NzJDMTQ0LjQ0NiAzNi45NzYgMTQ0LjE2NyAzNy4zIDE0My40ODMgMzcuM0gxNDIuNTY1Wk0xNDUuNTI1IDQwSDE0Ni41ODdMMTQ2Ljk1NiAzOC45OTJIMTQ5LjE2MUwxNDkuNTMgNDBIMTUwLjYwMUwxNDguNTQgMzQuNzcxSDE0Ny41NjhMMTQ1LjUyNSA0MFpNMTQ3LjI4IDM4LjExTDE0OC4wNDUgMzYuMDIySDE0OC4wNjNMMTQ4LjgzNyAzOC4xMUgxNDcuMjhaTTE1MS4zOTIgNDBIMTUyLjRWMzguMkgxNTMuMDY2TDE1NC4zNTMgNDBIMTU1LjU5NUwxNTQuMjA5IDM4LjEwMUMxNTQuOTkyIDM3Ljg1OCAxNTUuMzk3IDM3LjMwOSAxNTUuMzk3IDM2LjQ5OUMxNTUuMzk3IDM1LjUwOSAxNTQuODEyIDM0Ljc3MSAxNTMuNDggMzQuNzcxSDE1MS4zOTJWNDBaTTE1Mi40IDM3LjNWMzUuNjcxSDE1My4zOTlDMTU0LjAyOSAzNS42NzEgMTU0LjMzNSAzNS45ODYgMTU0LjMzNSAzNi40NzJDMTU0LjMzNSAzNi45NzYgMTU0LjAzOCAzNy4zIDE1My4zNDUgMzcuM0gxNTIuNFpNMTU3LjQ5IDQwSDE1OC40OThWMzUuNjcxSDE2MC4wMTlWMzQuNzcxSDE1NS45NjlWMzUuNjcxSDE1Ny40OVY0MFpNMTYwLjg4MyA0MEgxNjEuODkxVjM2LjUwOEwxNjEuOTE4IDM2LjQ5OUwxNjQuNDQ3IDQwSDE2NS40OTFWMzQuNzcxSDE2NC40ODNWMzguMzQ0TDE2NC40NjUgMzguMzYyTDE2MS45IDM0Ljc3MUgxNjAuODgzVjQwWk0xNjYuNzgxIDQwSDE3MC40NzFWMzkuMUgxNjcuNzg5VjM3LjkwM0gxNjkuODIzVjM3LjAwM0gxNjcuNzg5VjM1LjY3MUgxNzAuMzA5VjM0Ljc3MUgxNjYuNzgxVjQwWk0xNzEuNTM2IDQwSDE3Mi41NDRWMzguMkgxNzMuMjFMMTc0LjQ5NyA0MEgxNzUuNzM5TDE3NC4zNTMgMzguMTAxQzE3NS4xMzYgMzcuODU4IDE3NS41NDEgMzcuMzA5IDE3NS41NDEgMzYuNDk5QzE3NS41NDEgMzUuNTA5IDE3NC45NTYgMzQuNzcxIDE3My42MjQgMzQuNzcxSDE3MS41MzZWNDBaTTE3Mi41NDQgMzcuM1YzNS42NzFIMTczLjU0M0MxNzQuMTczIDM1LjY3MSAxNzQuNDc5IDM1Ljk4NiAxNzQuNDc5IDM2LjQ3MkMxNzQuNDc5IDM2Ljk3NiAxNzQuMTgyIDM3LjMgMTczLjQ4OSAzNy4zSDE3Mi41NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xOTM1XzE1NDQyNiI+CjxyZWN0IHdpZHRoPSIxNS4wOTkzIiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+')
}

/* Header */
.header {
    background: url('https://s1.ticketm.net/en-us/img/static/broadway/1440x432.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    padding: 260px 0 30px;
    position: relative;
}

.header:before {
    background: linear-gradient(190deg, rgba(0,0,0,0), rgba(0,0,0,.75));
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.header a {
    color: #fff;
}

.header .breadcrumbs {
    display: inline;
    list-style: none;
    margin: 0;
    padding: 0;
}

.header .breadcrumbs li {
    display: inline;
}

.header .breadcrumbs li:before {
    content: ' / ';
    display: inline;
    font-size: 12px;
}

.header .breadcrumbs li:first-child:before {
    display: none;
}

.header .breadcrumbs a {
    font-size: 12px;
    text-decoration: none;
}

.header .breadcrumbs a:hover,
.header .breadcrumbs a:focus {
    text-decoration: underline;
}

.header .star-rating {
    border: 1px solid #fff;
    border-radius: 2px;
    display: inline;
    font-size: 12px;
    margin-left: 10px;
    padding: 1px 5px 2px 3px;
}

.header .star-rating .icon {
    font-size: 28px;
    line-height: 0;
    vertical-align: -4px;
}

.header .breadcrumbs,
.header .heading,
.header .star-rating,
.header .page-links {
    position: relative;
}

.header .heading {
    display: inline-block;
    font-size: 46px;
    font-weight: 300;
    margin: 10px 0;
}

.header .heading strong {
    font-weight: 800;
}

.header .page-links {
    list-style: none;
    margin: 0;
    padding: 0;
}

.header .page-links li {
    display: inline;
    margin-right: 20px;
}

.header .page-links .btn {
    background: none;
    border: 0 none;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    outline: none;
    padding: 0;
    padding-bottom: 5px;
}

.header .page-links .btn:hover,
.header .page-links .btn:focus,
.header .page-links .btn.active {
    border-bottom: 4px solid #fff;
}


/* Footer */
.footer {
    background: #1f262d;
    padding: 40px 0;
}

.footer .container {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.footer-div {
    box-sizing: border-box;
    color: #fff;
    padding-right: 20px;
    width: 20%;
}

.footer-div .heading {
    font-size: 16px;
}

.footer-div .app-links {
    margin-top: 30px;
}

.footer-div .app-links ul {
    display: inline;
}

.footer-div .app-links li {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
}

.footer-div .app-links img {
    height: 18px;
}

.footer-div .sub-heading {
    display: inline;
    font-size: 16px;
}

.footer-div ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.footer-div li {
    margin: 16px 0;
}

.footer-div a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
}

.footer-div p {
    font-size: 14px;
    margin: 5px 0px 0px 0px;
}

.footer-div a:hover {
    color: #026cdf;
    text-decoration: none;
}

.footer-footer {
    border-top: 2px solid #4b5157;
    color: #fff;
    display: inline-flex;
    font-size: 12px;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 20px;
    width: 100%;
}

.footer-footer .logo-tm {
    width: 120px;
}

.footer-footer p {
    display: inline;
    margin-left: 20px;
}

.footer-footer p a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
}

.footer-footer p a:hover,
.footer-footer p a:focus {
    text-decoration: none;
}

.footer-footer .copyright,
.footer-footer .location,
.footer-footer .social-links {
    display: inline-block;
    margin-left: 20px;
}

.footer-footer .location:before {
    background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon_us-flag.png') no-repeat center center;
    content: '';
    display: inline-block;
    height: 16px;
    margin-right: 5px;
    width: 22px;
    vertical-align: bottom;
}

.footer-footer .social-links {
    list-style: none;
    margin: 0;
    margin-left: 20px;
    padding: 0;
    vertical-align: middle;
}

.footer-footer .social-links li {
    display: inline;
    margin-left: 10px;
}

.footer-footer .social-links li:first-child {
    margin: 0;
}

.footer-footer .social-links a {
    display: inline-block;
}

.footer-footer .social-links img {
    height: 14px;
}


.overlay {
    background: rgba(0, 0, 0, .75);
    bottom: 0;
    display: none;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 105;
}


/*#overview {
    display: none;
}*/
#schedule {
    display: none;
}


@media (max-width: 1023px) {

    .main-nav {
        background: transparent;
        padding: 10px 20px;
    }

    .main-nav.scrolled {
        padding: 10px 20px;
    }

    .main-nav.open {
        background: #026cdf;
    }

    .main-links,
    .sub-links {
        background: #132554;
        display: none;
        position: absolute;
    }

    .main-nav.open .main-links {
        display: block;
        left: 0;
        padding: 10px 0;
        top: 50px;
        width: 100%;
    }

    .main-nav.open .sub-links {
        display: block;
        left: 0;
        padding: 10px 0;
        top: 238px;
        width: 100%;
    }

    .main-links li,
    .sub-links li {
        display: block;
        margin: 0;
        padding: 5px 20px;
    }

    .main-links li:nth-child(1) {
        display: none;
    }

    .main-links a,
    .sub-links a {
        display: block;
    }

    .main-nav.scrolled .main-links a,
    .main-nav.scrolled .sub-links a {
        color: #fff;
    }

    .main-nav.scrolled #link-sign-in:before {
        filter: invert(0%);
    }

    .mobile-nav {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .mobile-nav .logo-tm {
        max-width: 140px;
    }

    .mobile-nav .menu {
        background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon_menu.png') no-repeat center center transparent;
        border: 0 none;
        height: 30px;
        outline: none;
        padding: 0;
        width: 30px;
        -webkit-appearance: none;
    }

    .mobile-links {
        align-items: center;
        display: flex;
    }

    .mobile-links a {
        margin-right: 40px;
    }

    .mobile-links .icon-sign-in {
        height: 24px;
        width: 24px;
    }

    .main-nav .paypal-nav-partner-container {
        display: none;
    }
}

@media (max-width: 768px) {

    .btn-primary,
    .btn-secondary,
    .btn-tertiary {
        font-size: 14px;
    }

    .container {
        padding: 0 25px;
    }

    .header .heading {
        font-size: 32px;
        line-height: 1.6;
    }

    .header .page-links a {
        font-size: 16px;
    }

    .section {
        padding: 40px 0;
    }
	
	.section-1 {
	  padding: 40px 0 20px 0;
	}
	
	.section-players {
        padding: 40px 0;
    }
}

@media (max-width: 460px) {

    .mobile-links a {
        margin-right: 20px;
    }

    .container {
        padding: 0 20px;
    }

    .header {
        background-image: url('https://s1.ticketm.net/en-us/img/static/broadway/750x354.jpg');
        padding: 150px 0 0 0;
        position: relative;
    }

    .header .heading {
        font-size: 26px;
        margin: 0;
        padding: 0;
    }

    .header .page-links {
        position: relative;
    }

    .footer {
        padding: 20px 0;
    }

    .footer-footer {
        flex-direction: column;
    }

    .footer-div {
        width: 100%;
    }
	
	.footer-div li {
        margin: 6px 0;
        }

    .footer-footer p {
        display: block;
        margin: 15px 0 0;
    }

    .footer-footer .copyright,
    .footer-footer .location,
    .footer-footer .social-links {
        display: block;
        margin: 15px 0 0;
    }
}





<!-- end common.css -->



<!-- overview.css -->
.section-1 {
    background: linear-gradient(to bottom, #2c4fce, #2c4fce, #02235b);
    border-bottom: 4px solid #ffd400;
    color: #fff;
}

.section-1 .content {
    align-items: start;
    display: flex;
    justify-content: space-between;
}

.section-1 .content:last-child {
    align-items: stretch;
  */  border-top: 1px solid rgba(0, 0, 0, .18); */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  */ margin-top: 40px; */
  */ padding-top: 40px; */
}

.section-1 .content-part {
    width: 63%;
}

.section-1 .content-part:last-child {
    width: 32%;
}

.section-1 .content-part .main-heading {
    margin: 0px 0 6px;
}

.section-1 .logo {
    width: 400px;
}

.section-1 .main-heading {
    font-size: 24px;
    margin: 0 0 24px;
    width: 100%;
}

.section-1 .sub-heading {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
}

.section-1 .desc {
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 18px;
}

.section-1 .btn-sign-up {
    background: rgba(0, 0, 0, .1);
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
}

.section-1 .btn-sign-up strong {
    font-weight: 600;
}

.section-1 .btn-sign-up img {
    margin-right: 10px;
    width: 16px;
}

.section-1 .btn-sign-up:after {
    border-color: transparent #fff #fff transparent;
    border-style: solid;
    border-width: 1px;
    content: '';
    display: inline-block;
    height: 7px;
    margin-left: 5px;
    transform: rotate(-45deg);
    width: 7px;
}

.section-1 .card {
    color: #262626;
    /*position: relative;*/
    width: calc(100% / 3 - 24px * 2 / 3);
}

.section-1 .card .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.section-1 .card .heading {
    font-size: 20px;
    margin: 30px 0 10px;
    position: relative;
}

.section-1 .card .btn {
    align-self: flex-end;
    margin-top: auto;
}

.section-1 .card .onsale-heading {
    font-size: 14px;
}

.section-1 .card .date {
    color: #026cdf;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
    text-transform: uppercase;
}

.section-1 .card .icon-info {
    cursor: pointer;
    margin-left: 5px;
    vertical-align: -3px;
    width: 22px;
}


.section-1 .card .info-hover {
    background: #fff;
    border: 1px solid #979797;
    border-radius: 4px;
    right: 0;
    opacity: 0;
    padding: 15px;
    position: absolute;
    transition: opacity .25s;
    top: 0;
    width: 300px;
}

.section-1 .card .info-hover:after {
    background: #fff;
    border-color: transparent transparent #979797 #979797;
    border-style: solid;
    border-width: 1px;
    bottom: -7px;
    content: '';
    display: inline-block;
    height: 12px;
    position: absolute;
    right: 40px;
    transform: rotate(-45deg);
    width: 12px;
}

.section-1 .card .info-hover .heading {
    font-size: 14px;
    margin: 0;
}

.section-1 .card .info-hover .desc {
    font-size: 14px;
    line-height: 1.3;
    margin: 5px 0 0;
}

.section-featuredartists {

}

.section-featuredartists .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
}

.section-featuredartists .grid li {
    padding: 0;
    position: relative;
	transition: transform .2s;
}

.section-featuredartists .grid li:hover {
    transform: scale(1.02); 
}

.section-featuredartists .grid img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
}

.section-featuredartists .grid .headings {
    background: rgba(32, 32, 32, .7);
    border-radius: 4px;
    bottom: 10px;
    left: 10px;
    padding: 6px 8px;
    position: absolute;
}

.section-featuredartists .grid .artist-name {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
}

.section-featuredartists .grid .event-name {
    color: rgba(255, 255, 255, .7);
    font-size: 13px;
    font-weight: 400;
}

.section-featuredartists .grid .link {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}



/* every 10th item starting with 1st and 8th */
.section-featuredartists .grid li:nth-child(10n + 1),
.section-featuredartists .grid li:nth-child(10n + 8) {
    grid-column-end: span 2;
    grid-row-end: span 2;
}

.section-featuredartists .grid li:nth-child(10n + 1) .artist-name,
.section-featuredartists .grid li:nth-child(10n + 8) .artist-name {
    font-size: 20px;
}

.section-featuredartists .grid li:nth-child(10n + 1) .event-name,
.section-featuredartists .grid li:nth-child(10n + 8) .event-name {
    font-size: 16px;
}



.section-guarantee .container {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
}

.section-guarantee .headings {
    font-size: 24px;
    font-weight: 600;
    width: calc(100% / 4);
}

.section-guarantee .heading {
    color: #026cdf;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.section-guarantee .desc {
    font-size: 20px;
    margin-top: 40px;
    width: calc(100% / 3 * 2 - 20px / 3);
}

.section-guarantee .card {
    align-items: stretch;
    display: flex;
    list-style: none;
    margin-top: 80px;
    padding: 0;
    width: 100%;
}

.section-guarantee .card li {
    border-left: 1px solid #ebebeb;
    padding: 50px 20px;
    width: 25%;
}

.section-guarantee .card li:first-child {
    border: 0 none;
}

.section-guarantee .card img {
    background: #f4f4f4;
    border-radius: 50%;
    display: block;
    height: 80px;
    width: 80px;
}

.section-guarantee .card .heading {
    color: #0150a7;
    font-size: 20px;
    margin-top: 20px;
    text-transform: none;
}

.section-guarantee .card .desc {
    font-size: 16px;
    margin: 0;
    width: 100%;
}

.section-guarantee .card .desc span {
    color: #026cdf;
    font-weight: 600;
}


.section-quotes {
    background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/bg_section-quotes.jpg') no-repeat top left #ebebeb;
    background-size: calc((100vw - 1440px) / 2 + 1440px / 3) 670px;
    height: 580px;
    padding: 0;
}

.section-quotes .slides {
    list-style: none;
    margin: 0;
    padding: 0;
}

.section-quotes .slide {
    align-items: center;
    display: flex;
}

.section-quotes .container {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
}

.section-quotes .container img {
    box-shadow: 0 16px 24px 0 rgba(0, 0, 0, .3);
	width: 100%;
}

.section-quotes .content {
    margin-left: 30px;
    padding-left: 30px;
    position: relative;
	padding-top: 70px;
}

.section-quotes .content:before {
    color: #026cdf;
  /*  content: '"'; */
    font-size: 140px;
    font-weight: 800;
    left: 0;
    opacity: .1;
    position: absolute;
    top: -15px;
}

.section-quotes .heading {
    font-size: 20px;
 /*   text-transform: uppercase; */
}

.section-quotes .quote {
    color: #262626;
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0 10px;
}

.venue-guide-btn {
  position: relative;
  top: 10px;
}

.section-quotes .attribution {
    font-size: 20px;
}

.section-quotes .attribution .name {
    font-weight: 600;
}

.section-quotes .swiper-nav-container {
    align-items: center;
    bottom: 80px;
    height: 32px;
    justify-content: flex-end;
    position: absolute;
    right: calc((100vw - 1440px) / 2);
}

.section-quotes .swiper-button-prev,
.section-quotes .swiper-button-next {
    background: #026cdf;
    border-radius: 2px;
    height: 32px;
    left: auto;
    margin: 0;
    outline: 0;
    position: relative;
    right: auto;
    top: auto;
    width: 32px;
}

.section-quotes .swiper-button-prev:hover,
.section-quotes .swiper-button-next:hover {
    background: #004da1;
}

.section-quotes .swiper-button-prev:before,
.section-quotes .swiper-button-next:before {
    border-color: transparent transparent #fff #fff;
    border-style: solid;
    border-width: 1px;
    content: '';
    height: 10px;
    position: absolute;
    top: 50%;
    width: 10px;
}

.section-quotes .swiper-button-prev:before {
    left: 58%;
    transform: translate(-50%, -50%) rotate(45deg);
}

.section-quotes .swiper-button-next:before {
    left: 42%;
    transform: translate(-50%, -50%) rotate(225deg);
}

.section-quotes .swiper-pagination {
    margin: 0 8px;
    padding: 0;
    position: static;
}

.section-quotes .swiper-pagination-bullet {
    height: 16px;
    margin: 0 8px;
    width: 16px;
}


.section-venuesnearyou {

}

.section-venuesnearyou .nav-areas {
  /*  border-bottom: 1px solid #ebebeb; */
    margin-bottom: 20px;
}

.section-venuesnearyou .nav-areas ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.section-venuesnearyou .nav-areas li {
    display: inline;
    margin-left: 30px;
}

.section-venuesnearyou .nav-areas li:first-child {
    margin: 0;
}

.section-venuesnearyou .area-btn {
    background: none;
    border: 0 none;
    border-bottom: 4px solid transparent;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: -1px;
    outline: none;
    padding: 10px 0;
}

.section-venuesnearyou .area-btn.active {
    border-bottom-color: #026cdf;
}

.section-venuesnearyou .area-btn:not(.active):hover,
.section-venuesnearyou .area-btn:not(.active):focus {
    border-bottom-color: #999;
}

.section-venuesnearyou .grid {
    display: none;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
}

.section-venuesnearyou .grid.active {
    display: grid;
}

.section-venuesnearyou .grid li {
    padding: 0;
    position: relative;
}

.section-venuesnearyou .grid img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
}

.section-venuesnearyou .grid .headings {
    background: rgba(32, 32, 32, .7);
    border-radius: 4px;
    bottom: 10px;
    left: 10px;
    padding: 6px 8px;
    position: absolute;
}

.section-venuesnearyou .grid .venue-name {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
}

.section-venuesnearyou .grid .location-name {
    color: rgba(255, 255, 255, .7);
    font-size: 13px;
    font-weight: 400;
}

.section-venuesnearyou .grid .link {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}


.section-2 .main-heading {
    margin: 0 0 20px;
    width: 100%;
}

.section-2 .multi-sessions {
    margin-bottom: 60px;
}

.section-2 .multi-sessions .card {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.section-2 .multi-sessions .card .img {
    margin: -20px;
    margin-right: 20px;
    width: 400px;
}

.section-2 .multi-sessions .card > div:first-of-type {
    align-self: flex-start;
    width: 50%;
}

.section-2 .multi-sessions .card > div:last-of-type {
    align-self: flex-end;
    text-align: right;
}

.section-2 .multi-sessions .heading {
    margin: 0 0 10px;
}

.section-2 .multi-sessions .sessions-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.section-2 .multi-sessions .sessions-list li {
    line-height: 1.5;
    width: 50%;
}

.section-2 .multi-sessions .sessions-list li:before {
    color: #026cdf;
    content: '\2022';
    font-size: 24px;
    font-weight: 800;
    line-height: 0;
    margin-right: 12px;
    vertical-align: -2px;
}

.section-2 .multi-sessions .note {
    font-size: 12px;
    margin-top: 5px;
    opacity: .65;
}

.section-2 .single-sessions .cards {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.section-2 .single-sessions .card {
    padding: 15px;
    width: calc(100% / 4 - 24px * 3 / 4); /* 4 wide */
}

.section-2 .single-sessions .card .img {
    margin: -15px -15px 15px;
}

.section-2 .single-sessions .date {
    color: #904eba;
    text-transform: uppercase;
}

.section-2 .single-sessions .desc {
    line-height: 1.25;
    margin-top: 10px;
}

.section-2 .single-sessions .card > .desc {
    min-height: 100px;
}

.section-2 .single-sessions .session {
    border-top: 1px solid #dfe4e7;
    margin-top: 20px;
    padding-top: 30px;
}

.section-2 .single-sessions .evening {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 250px;
}

.section-2 .single-sessions .session .desc {
    margin-top: 20px;
}

.section-2 .single-sessions .evening .desc {
    min-height: 60px;
}

.section-2 .single-sessions .session-heading,
.section-2 .single-sessions .pricing {
    display: inline;
    font-size: 12px;
}

.section-2 .single-sessions .session-heading {
    background: #fcd400;
    border-radius: 2px;
    padding: 4px 8px;
    text-transform: uppercase;
}

.section-2 .single-sessions .day .session-heading {
    background: #fcd400;
}

.section-2 .single-sessions .evening .session-heading {
    background: #0d288c;
    color: #fff;
}

.section-2 .single-sessions .pricing {
    float: right;
    margin: 0;
    opacity: .65;
}

.section-2 .single-sessions .sub-desc {
    font-size: 14px;
    margin-top: 15px;
}

.section-2 .single-sessions .day .sub-desc {
    min-height: 63px;
}

.section-2 .single-sessions .day .sub-sub-desc {
    font-size: 12px;
    font-weight: 600;
    min-height: 0;
    opacity: .65;
}

.section-2 .single-sessions .evening .sub-desc {
    margin-bottom: 20px;
}

.section-2 .single-sessions .stadium-list {
    font-size: 14px;
    line-height: 1.7;
    list-style: none;
    margin: 15px 0;
    min-height: 70px;
    padding: 0;
}

.section-2 .single-sessions .stadium-list li:before {
    background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon-check-green@2x.png') no-repeat center center;
    background-size: contain;
    content: '';
    display: inline-block;
    height: 11px;
    margin-right: 10px;
    width: 14px;
}

.section-2 .single-sessions .session .btn {
    margin-top: auto;
    width: 100%;
}

.section-2 .single-sessions .session .avail-message {
    font-size: 14px;
    font-weight: 600;
    margin: auto;
    opacity: .65;
    text-align: center;
    width: 70%;
}


.section-3 {
    padding-top: 0;
}

.section-3 .main-heading {
    margin: 0 0 20px;
}

.section-3 .map-img {
    border-radius: 4px;
    width: 100%;
}

.section-3 .map-img img {
    width: 100%;
}


.section-4 .card {
    align-items: center;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
}

.section-4 .img {
    margin: -1px;
    width: 50%;
}

.section-4 .content {
    padding: 0 50px;
    width: 50%;
}

.section-4 .heading {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 12px;
	margin-top: 0px;
}

.section-4 .desc {
    font-size: 16px;
    margin: 0 0 30px;
}

.section-4 .btn-primary {
    margin-bottom: 0px;
}

.section-4 .sub-heading {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 12px;
}

.section-4 .swiper-container {

}

.section-4 .swiper-wrapper {

}

.section-4 .swiper-button-prev,
.section-4 .swiper-button-next {
    background: rgba(0, 0, 0, .5);
    border: 0 none;
    color: #fff;
    font-size: 40px;
    line-height: 0;
    padding: 16px 0 23px;
	outline: none;
}

.section-4 .swiper-button-prev {
    left: 0;
}

.section-4 .swiper-button-next {
    right: 0;
}

.section-4 .swiper-slide {
    border-radius: 4px;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, .1);
    overflow: hidden;
    position: relative;
}

.section-4 .swiper-slide img {
    display: block;
    width: 100%;
}

.section-4 .swiper-content {
    background: rgba(0, 0, 0, .5);
    border-radius: 4px;
    bottom: 10px;
    left: 10px;
    min-width: 30%;
    padding: 5px 10px;
    position: absolute;
}

.section-4 .swiper-heading {
    color: #fff;
    font-size: 14px;
}

.section-4 .swiper-desc {
    color: #ddd;
    font-size: 14px;
}

.section-4 .swiper-desc-purple-upper {
    color: #904eba;
    font-size: 14px;
	text-transform: uppercase;
}



.section-4 .swiper-slide a {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}


.section-5 {
    background: #1f262d;
    color: #fff;
}

.section-5 .main-heading {
    margin: 0 0 20px;
    width: 100%;
}

.section-5 .videos {
    align-items: stretch;
    display: flex;
    justify-content: space-between;
}

.section-5 .main-video {
    border-radius: 4px;
    height: 100%;
    overflow: hidden;
    width: 66%;
}

.section-5 .videos-list {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
    width: calc(34% - 24px);
}

.section-5 .videos-list li {
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
}

.section-5 .videos-list li:first-child {
    margin-top: 0;
}

.section-5 .videos-list .thumb {
    border-radius: 4px;
    float: left;
    margin-right: 16px;
    overflow: hidden;
    position: relative;
    width: calc(50% - 16px);
}

.section-5 .videos-list .thumb img {
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.section-5 .videos-list .thumb .label,
.section-5 .videos-list .thumb .time {
    background: rgba(31, 38, 45, .8);
    border-radius: 2px;
    color: #fff;
    font-size: 10px;
    padding: 2px 6px;
    position: absolute;
}

.section-5 .videos-list .thumb .label {
    display: none;
    left: 10px;
    text-transform: uppercase;
    top: 10px;
}

.section-5 .videos-list .thumb .time {
    bottom: 10px;
    right: 10px;
}

.section-5 .videos-list .thumb:after {
    background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon-play-btn@2x.png') no-repeat center center;
    background-size: cover;
    content: '';
    height: 46px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 46px;
}

.section-5 .videos-list .active .thumb .label,
.section-5 .videos-list .active + li .thumb .label {
    display: block;
}

.section-5 .videos-list .active .thumb .label {
    background: #026cdf;
}

.section-5 .videos-list .active .thumb .label:before {
    content: 'Now Playing';
}

.section-5 .videos-list .active + li .thumb .label:before {
    content: 'Next';
}

.section-5 .videos-list .active .thumb .time {
    display: none;
}

.section-5 .videos-list .active .thumb:after {
    display: none;
}

.section-5 .videos-list .heading,
.section-5 .videos-list .desc {
    font-size: 14px;
}


.section-6 .main-heading {
    margin: 0 0 20px;
    width: 100%;
}

.section-6 .main-heading img {
    width: 106px;
}

.section-6 .cards {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.section-6 .card {
    position: relative;
    width: calc(100% / 3 - 24px * 2 / 3); /* 3 wide */
    /*width: calc(100% / 4 - 24px * 3 / 4); /* 4 wide */
    /*width: calc(100% / 5 - 24px * 4 / 5); /* 5 wide */
}

.section-6 .card .heading {
    font-size: 20px;
    margin: 30px 0 10px;
}

.section-6 .card .pseudo-link {
    color: #026cdf;
    font-size: 14px;
    margin-top: 5px;
    text-align: right;
    transition: all .5s;
}

.section-6 .card a:hover ~ .pseudo-link,
.section-6 .card a:focus ~ .pseudo-link {
    color: #004da1;
}


.section-7 {
    background: linear-gradient(141deg, #feec00, #fcd400);
}

.section-7 .card,
.section-8 .card {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0;
}

.section-8 .card {
  margin-bottom: 24px;
}

.section-8 .main-heading {
    margin: 0 0 20px;
    width: 100%;
}

.section-7 .img,
.section-8 .img {
    margin: 0;
    width: 50%;
}

.section-7 .content,
.section-8 .content {
    padding: 20px 50px;
    width: 50%;
}

.section-7 .heading,
.section-8 .heading {
    font-size: 24px;
    margin: 0 0 12px;
}

.section-7 .desc,
.section-8 .desc {
    font-size: 16px;
}

.section-players {
    background: #f5f5f5;
	background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/img-afc-bg.svg') no-repeat;
	background-size: cover;}

.nfc-background {
    background: #f5f5f5;
	background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/img-nfc-bg.svg') no-repeat;
	background-size: cover;
}

.section-players .main-heading {
    margin: 0 0 20px;
    width: 100%;
	color: #fff;
}

.section-players .cards {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: -24px;
}

.section-players .card {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;
    padding: 16px;
    position: relative;
    width: calc(100% / 3 - 24px * 2 / 3); /* 3 wide */
}

.section-players .card .img {
    margin: 0;
    margin-right: 16px;
    width: 110px;
}

.section-players .card > div {
    width: calc(100% - 110px - 16px);
}

.section-players .card .heading {
    font-size: 14px;
    margin: 0;
    margin-bottom: 5px;
}

.section-players .card .desc {
    font-size: 14px;
    opacity: .65;
}

.section-players .card .links {
    font-size: 14px;
}

.section-players .card .links a {
    color: #026cdf;
    display: block;
    text-decoration: none;
}

.section-players .card .links a:hover,
.section-players .card .links a:focus {
    text-decoration: underline;
}

.section-players .card .btn {
    bottom: 16px;
    font-size: 12px;
    margin-top: 16px;
    padding: 3px 10px;
    position: absolute;
    right: 16px;
}

.section-players .conference-logo {
    margin: -50px auto auto 46%;
    width: 100px;
}


.section-faq {
    background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/bg_section-faq.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    position: relative;
}

.section-faq:before {
    background: #026cdf;
    bottom: 0;
    content: '';
    left: 0;
    opacity: .95;
    position: absolute;
    right: 0;
    top: 0;
}

.section-faq .container {
    position: relative;
    text-align: center;
}

.section-faq .main-heading {
    margin-bottom: 60px;
}

.section-faq .faq-list {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
}

.section-faq .faq-list li {
    width: calc(50% - 28px);
}

.section-faq .question {

}

.section-faq .answer p {
    margin-top: 24px;
}

.section-faq .read-more {
    display: none;
}

.section-faq .logo-verified {
    margin: 60px auto 0;
    width: 177px;
}

@supports not (display: grid) {

    .section-featuredartists .grid {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .section-featuredartists .grid li {
        margin-bottom: 20px;
        width: calc(100% / 4 - 60px / 4);
    }


    .section-venuesnearyou .grid {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .section-venuesnearyou .grid li {
        margin-bottom: 20px;
        width: calc(100% / 4 - 60px / 4);
    }
}

@media (max-width: 1440px) {


    .section-quotes {
        background-size: 35% 670px;
    }

    .section-quotes .swiper-nav-container {
        right: 40px;
    }
}





@media (max-width: 1439px) {

    .section-2 .multi-sessions .card .img {
        align-self: flex-start;
        border-radius: 4px;
        margin: 0;
        margin-right: 25px;
        width: calc(30% - 25px);
    }

    .section-2 .single-sessions .cards {
        display: block;
        margin: 0 -100px;
        padding: 0 100px 15px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        width: 100vw;
        -webkit-overflow-scrolling: touch;
    }

    .section-2 .single-sessions .card {
        display: inline-block;
        margin-left: 20px;
        vertical-align: top;
        white-space: normal;
        width: 320px;
    }

    .section-2 .single-sessions .card:first-child {
        margin: 0;
    }


    .section-4 .content {
        padding-left: 100px;
    }


    .section-7 .card,
    .section-8 .card {
        align-items: flex-start;
        padding: 25px;
    }

    .section-7 .img,
    .section-8 .img {
        border-radius: 4px;
        margin: 0;
        margin-right: 25px;
    }

    .section-7 .content,
    .section-8 .content {
        padding: 0;
    }
}

@media (max-width: 1280px) {

    .section-2 .multi-sessions .card {
        flex-wrap: wrap;
    }

    .section-2 .multi-sessions .card .img {
        align-self: flex-start;
        border-radius: 4px;
        margin: 0;
        margin-right: 25px;
        width: calc(30% - 25px);
    }

    .section-2 .multi-sessions .card > div:first-of-type {
        width: 70%;
    }

    .section-2 .multi-sessions .card > div:last-of-type {
        margin-top: 20px;
        width: 100%;
    }
}



@media (max-width: 1024px) {

    .section-5 .videos-list .heading,
    .section-5 .videos-list .desc {
        font-size: 12px;
    }

    .section-players .card {
        width: calc(100% / 2 - 24px * 1 / 2); /* 2 wide */
    }
	
	    .section-quotes .container img {
        width: 40%;
    }


    @supports (display: grid) {

        .section-fanrights .cards {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 40vw) 1px;
            grid-template-rows: auto;
        }

        .section-fanrights .cards:after {
            content: '';
            height: 1px;
            width: 1px;
        }

        .section-fanrights .card-container {
            margin: 0;
            width: 100%;
        }
    }
}

@media (max-width: 768px) {

    .section-1 .content {
        flex-direction: column;
    }

    .section-1 .content-part {
        width: 100%;
    }

    .section-1 .content-part:last-child {
        margin-top: 20px;
        width: 100%;
    }

    .section-1 .content:last-child {
        border: 0 none;
        flex-direction: column;
        padding: 0;
    }

    .section-1 .card {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        padding: 15px;
        width: 100%;
    }

    .section-1 .card:first-of-type {
        margin: 0;
    }

    .section-1 .card img {
        display: inline;
        height: auto;
        margin: 0;
        width: 33%;
    }

    .section-1 .card .info {
        display: flex;
        width: calc(67% - 24px);
    }

    .section-1 .card .heading {
        font-size: 14px;
        margin: 5px 0;
        order: 2;
    }

    .section-1 .desc {
        font-size: 14px;
        margin-bottom: 10px;
        order: 3;
    }

    .section-1 .card .onsale-heading {
        display: none;
    }

    .section-1 .card .date {
        font-size: 14px;
        margin: 0;
        order: 1;
    }

    .section-1 .card .btn {
        order: 4;
    }

    .section-1 .card .icon-info {
        width: 16px;
    }
	
	.section-1 .logo {
    width: 710px;
     }
	 
	  .section-featuredartists .grid {
        grid-template-columns: repeat(3, 1fr);
    }

    /* reset every 10th item */
    .section-featuredartists .grid li:nth-child(10n + 1),
    .section-featuredartists .grid li:nth-child(10n + 8) {
        grid-column-end: span 1;
        grid-row-end: span 1;
    }

    .section-featuredartists .grid li:nth-child(10n + 1) .artist-name,
    .section-featuredartists .grid li:nth-child(10n + 8) .artist-name {
        font-size: 14px;
    }

    .section-featuredartists .grid li:nth-child(10n + 1) .event-name,
    .section-featuredartists .grid li:nth-child(10n + 8) .event-name {
        font-size: 13px;
    }

    /* every 12th item starting with 1st and 8th */
    .section-featuredartists .grid li:nth-child(12n + 1),
    .section-featuredartists .grid li:nth-child(12n + 8) {
        grid-column-end: span 2;
        grid-row-end: span 2;
    }

    .section-featuredartists .grid li:nth-child(12n + 1) .artist-name,
    .section-featuredartists .grid li:nth-child(12n + 8) .artist-name {
        font-size: 20px;
    }

    .section-featuredartists .grid li:nth-child(12n + 1) .event-name,
    .section-featuredartists .grid li:nth-child(12n + 8) .event-name {
        font-size: 16px;
    }


    .section-venuesnearyou .grid {
        grid-template-columns: repeat(3, 1fr);
    }

    @supports not (display: grid) {

        .section-featuredartists .grid li,
        .section-venuesnearyou .grid li {
            margin-bottom: 20px;
            width: calc(100% / 3 - 40px / 3);
        }
    }
	
	
	.section-guarantee .container {
        flex-direction: column;
    }

    .section-guarantee .headings,
    .section-guarantee .desc {
        width: 100%;
    }

    .section-guarantee .heading {
        font-size: 20px;
    }

    .section-guarantee .desc {
        font-size: 16px;
        margin-top: 20px;
    }


    .section-quotes {
        background-color: #fafafa;
        background-position: top center;
        background-size: 100% 70vw;
        height: auto;
    }

    .section-quotes .slides {
        padding-bottom: 80px;
    }

    .section-quotes .container {
        flex-direction: column;
        position: relative;
    }

    .section-quotes .container img {
        left: 65px;
        margin-top: 10px;
        position: absolute;
        top: 60px;
        width: calc(90% - 50px);
    }

    .section-quotes .content {
        display: flex;
        flex-direction: column;
        margin: 30px 0 0;
        padding: 0;
    }

    .section-quotes .content:before {
        display: none;
    }

    .section-quotes .heading {
        color: #fff;
        font-size: 18px;
        margin-bottom: 70%;
        order: 1;
    }

    .section-quotes .quote {
        font-size: 14px;
        order: 3;
    }
	
	.venue-guide-btn {
  display: none;
}

    .section-quotes .attribution {
        font-size: 16px;
        order: 2;
    }

    .section-quotes .swiper-nav-container {
        bottom: 30px;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        right: auto;
    }

    .section-quotes .swiper-pagination-bullet {
        height: 14px;
        width: 14px;
    }


    .section-2 .multi-sessions {
        margin-bottom: 40px;
    }

    .section-2 .multi-sessions .card {
        padding: 15px;
    }

    .section-2 .multi-sessions .card .img {
        margin-right: 15px;
        width: calc(25% - 15px);
    }

    .section-2 .multi-sessions .card > div:first-of-type {
        width: 75%;
    }

    .section-2 .single-sessions .cards {
        margin: 0 -25px;
        padding: 0 25px 15px;
    }

    .section-2 .single-sessions .card {
        width: 300px;
    }
    



  /*  .section-4 .content {
        background: linear-gradient(to bottom, rgba(38, 38, 38, .8) 0%, rgba(214, 38, 38, .8) 100%);
        padding: 40px 25px;
        width: 100%;
    } */

    .section-4 .swiper-content {
    display: none;
}
    .section-5 .videos {
        flex-direction: column;
    }

    .section-5 .main-video {
        width: 100%;
    }

    .section-5 .videos-list {
        display: block;
        margin: 15px 0 0;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 15px;
        white-space: nowrap;
        width: 100%;
        -webkit-overflow-scrolling: touch;
    }

    .section-5 .videos-list li {
        display: inline-block;
        margin: 0;
        margin-left: 15px;
        vertical-align: top;
        white-space: normal;
        width: 30%;
    }

    .section-5 .videos-list li:first-child {
        margin: 0;
    }

    .section-5 .videos-list .thumb {
        margin: 0 0 10px;
        width: 100%;
    }

    .section-5 .videos-list .heading,
    .section-5 .videos-list .desc {
        font-size: 14px;
    }


    .section-faq .main-heading {
        margin-bottom: 40px;
    }

    .section-faq .logo-verified {
        margin-top: 40px;
    }
	
	.section-players .conference-logo {
        margin: 45px auto auto 46%;
		width: 59px;
    }
	.section-players {
    background: #f5f5f5;
	background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/img-afc-bg.svg') no-repeat;
	background-size: auto;}

.nfc-background {
    background: #f5f5f5;
	background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/img-nfc-bg.svg') no-repeat;
	background-size: auto;
}


}

@media (max-width: 460px) {

    .section-1 .logo {
        width: 145px;
		display: none;
    }

    .section-1 .content-part .main-heading {
        font-size: 16px;
        margin-top: 12px;
    }

    .section-1 .btn-sign-up {
        display: none;
    }

    .section-1 .content:last-child {
        margin-top: -30px;
    }

    .section-1 .main-heading {
        font-size: 16px;
        margin-bottom: 15px;
    }

    .section-1 .card {
        margin-top: 20px;
    }

    .section-1 .card .info {
        width: calc(67% - 15px);
    }

    .section-1 .card .btn {
        width: 100%;
    }

    .section-1 .card .info-hover:after {
        right: 15px;
    }


    .section-2 .main-heading {
        font-size: 16px;
        margin-bottom: 15px;
    }

    .section-2 .multi-sessions .card {
        flex-direction: column;
        justify-content: flex-start;
    }

    .section-2 .multi-sessions .card .img {
        border-radius: 0;
        margin: -15px -15px 20px;
        width: calc(100% + 30px);
    }

    .section-2 .multi-sessions .card > div:first-of-type {
        width: 100%;
    }

    .section-2 .multi-sessions .heading {
        font-size: 14px;
    }

    .section-2 .multi-sessions .sessions-list {
        flex-direction: column;
        font-size: 14px;
    }

    .section-2 .multi-sessions .sessions-list li {
        width: 100%;
    }

    .section-2 .multi-sessions .card > div:last-of-type {
        align-self: center;
    }

    .section-2 .multi-sessions .btn {
        width: 100%;
    }

    .section-2 .multi-sessions .note {
        text-align: center;
    }

    .section-2 .single-sessions .card > .desc {
        min-height: 130px;
    }
	
	.section-featuredartists .grid {
        grid-gap: 10px;
        grid-template-columns: repeat(2, 1fr);
    }

    .section-featuredartists .grid li,
    .section-featuredartists .grid li:nth-child(12n + 1),
    .section-featuredartists .grid li:nth-child(12n + 8) {
        grid-column-end: span 1;
        grid-row-end: span 1;
    }

    .section-featuredartists .grid .headings,
    .section-featuredartists .grid li:nth-child(12n + 1) .headings,
    .section-featuredartists .grid li:nth-child(12n + 8) .headings {
        bottom: 4px;
        left: 4px;
        padding: 4px 6px;
    }

    .section-featuredartists .grid .artist-name,
    .section-featuredartists .grid li:nth-child(12n + 1) .artist-name,
    .section-featuredartists .grid li:nth-child(12n + 8) .artist-name {
        font-size: 13px;
    }

    .section-featuredartists .grid .event-name,
    .section-featuredartists .grid li:nth-child(12n + 1) .event-name,
    .section-featuredartists .grid li:nth-child(12n + 8) .event-name {
        font-size: 12px;
    }


    .section-venuesnearyou .nav-areas {
        margin-bottom: 15px;
    }

    .section-venuesnearyou .nav-areas ul {
        display: flex;
        justify-content: space-between;
    }

    .section-venuesnearyou .nav-areas li {
        margin: 0;
    }

    .section-venuesnearyou .area-btn {
        font-size: 14px;
        padding: 6px 0;
    }

    .section-venuesnearyou .grid {
        grid-gap: 10px;
        grid-template-columns: repeat(2, 1fr);
    }

    .section-venuesnearyou .grid .headings {
        bottom: 4px;
        left: 4px;
        padding: 4px 6px;
    }

    .section-venuesnearyou .grid .venue-name {
        font-size: 13px;
    }

    .section-venuesnearyou .grid .location-name {
        font-size: 12px;
    }

    @supports not (display: grid) {

        .section-featuredartists .grid li,
        .section-venuesnearyou .grid li {
            margin-bottom: 10px;
            width: calc(100% / 2 - 10px);
        }
    }
    
	.section-guarantee .container:nth-child(2) {
        display: block;
        overflow-x: scroll;
        white-space: nowrap;
    }

    .section-guarantee .card {
        display: inline-flex;
        margin-top: 40px;
        width: 320vw;
    }

    .section-guarantee .card li {
        font-size: 16px;
        white-space: normal;
        width: 90%;
    }


    .section-3 .main-heading {
        font-size: 16px;
        margin-bottom: 15px;
    }


    .section-4 .card {
        flex-direction: column;
        margin-bottom: 40px;
    }

    .section-4 .img {
        width: 100%;
    }

    .section-4 .content {
        box-sizing: border-box;
        padding: 20px 15px;
        width: 100%;
    }

    .section-4 .desc {
        margin-bottom: 20px;
    }

    .section-4 .btn-primary {
        display: block;
		margin-bottom :0px;
    }

    .section-4 .swiper-container {
        margin: 0 -25px;
    }

    .section-4 .swiper-wrapper {
        padding: 0 25px;
    }

    .section-4 .swiper-button-prev,
    .section-4 .swiper-button-next {
        display: none;
    }


    .section-5 .main-heading {
        font-size: 16px;
        margin-bottom: 15px;
    }
	
	.section-quotes .container img {
        left: 55px;
        margin-top: 15px;
        position: absolute;
        top: 60px;
        width: calc(80% - 40px);
    }
	
	.section-quotes .heading {
        color: #fff;
        font-size: 16px;
        margin-bottom: 65%;
        order: 1;
    }

    .section-5 .videos-list li {
        /*width: 40%;*/
        width: calc(50% - 15px / 2);
    }


    .section-6 .cards {
        flex-direction: column;
    }

    .section-6 .card {
        margin-top: 20px;
        width: 100%;
    }

    .section-6 .card:first-of-type {
        margin: 0;
    }

    .section-6 .card .heading {
        margin-top: 20px;
    }

    .section-6 .card .desc {
        font-size: 14px;
    }


    .section-7 .card,
    .section-8 .card {
        flex-direction: column;
        padding: 20px 20px 25px;
    }

    .section-7 .img,
    .section-8 .img {
        margin: -20px -20px 25px;
        width: calc(100% + 40px);
    }

    .section-7 .content,
    .section-8 .content {
        padding: 0;
        width: 100%;
    }

    .section-7 .heading,
    .section-8 .heading {
        font-size: 20px;
    }

    .section-7 .desc,
    .section-8 .desc {
        font-size: 14px;
    }


    .section-players .main-heading {
        font-size: 16px;
        margin-bottom: 15px;
    }

    .section-players .cards {
        border-radius: 4px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06),
            0 0 4px 0 rgba(0, 0, 0, 0.12);
        margin: 0;
        overflow: hidden;
    }

    .section-players .card {
        border-radius: 0;
        border-top: 1px solid #e0e0e0;
        box-shadow: none;
        margin: 0;
        padding: 10px;
        position: relative;
        width: 100%;
    }

    .section-players .card:after {
        border-color: transparent transparent #262626 #262626;
        border-style: solid;
        border-width: 1px;
        content: '';
        height: 10px;
        right: 16px;
        position: absolute;
        top: 28px;
        transform: translateY(-50%) rotate(225deg);
        transition: transform .25s;
        width: 10px;
    }

    .section-players .card.open:after {
        transform: translateY(-75%) rotate(315deg);
    }

    .section-players .card .img {
        margin-right: 10px;
        width: 50px;
    }

    .section-players .card > div {
        width: calc(100% - 60px - 16px);
    }

    .section-players .card .heading {
        margin-top: 8px;
    }

    .section-players .card .links {
        display: none;
    }

    .section-players .card.open .links {
        display: block;
    }

    .section-players .card .btn {
        position: static;
        width: 100%;
    }
	
	.section-players .conference-logo {
        display: none;
    }


    .section-faq .main-heading {
        font-size: 20px;
        margin-bottom: 20px;
    }

    .section-faq .faq-list {
        flex-direction: column;
        font-size: 14px;
    }

    .section-faq .faq-list li {
        margin-top: 40px;
        width: 100%;
    }

    .section-faq .faq-list li:first-child {
        margin: 0;
    }

    .section-faq .answer {
        max-height: calc(90px + 16px);
        overflow: hidden;
        position: relative;
    }

    .section-faq .answer:after {
        background: linear-gradient(to bottom, rgba(2,108,223,0) 0%, rgba(2,108,223,1) 90%, rgba(2,108,223,0) 100%);
        bottom: 0;
        content: '';
        height: 50px;
        left: 0;
        position: absolute;
        right: 0;
    }

    .section-faq .faq-list li.open .answer {
        max-height: none;
    }

    .section-faq .faq-list li.open .answer:after {
        display: none;
    }

    .section-faq .answer p {
        margin-top: 16px;
    }

    .section-faq .read-more {
        background: 0;
        border: 0;
        color: #fff;
        display: block;
        float: right;
        font-size: 13px;
        font-weight: 600;
        outline: none;
        padding: 0;
    }

    .section-faq .faq-list li.open .read-more {
        display: none;
    }
}

@media (max-width: 375px) {

    .section-1 .card .icon-info {
        margin-left: 0;
        position: absolute;
        right: -10px;
        top: -5px;
        vertical-align: 0;
        width: 16px;
    }


    .section-2 .single-sessions .card {
        margin-left: 15px;
        width: 255px;
    }

    .section-2 .single-sessions .card:first-child {
        margin: 0;
    }
	
	.section-quotes .heading {
        color: #fff;
        font-size: 14px;
        margin-bottom: 65%;
        order: 1;
    }
}

@media (max-width: 320px) {

    .section-featuredartists .grid {
        grid-gap: 15px;
        grid-template-columns: 1fr;
    }


    .section-venuesnearyou .grid {
        grid-gap: 15px;
        grid-template-columns: 1fr;
    }

    .section-venuesnearyou .area-btn {
        font-size: 13px;
    }

    @supports not (display: grid) {

        .section-featuredartists .grid li,
        .section-venuesnearyou .grid li {
            margin-bottom: 15px;
            width: 100%;
        }
    }
}

@media (min-width: 900px) and (max-width: 1168px) {
	.section-4 .heading {  margin-top: 24px; }
	.section-4 .btn-primary { margin-bottom: 24px; }
	
}


<!-- overview.css -->


<!-- schedule.css -->
.section-9 {
    padding-top: 48px;
}

.section-9 .container {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.back-btn {
    color: #026cdf;
    display: inline-block;
    margin-bottom: 16px;
    margin-top: -32px;
    text-decoration: none;
    transition: all .5s;
}

.back-btn:hover,
.back-btn:focus {
    color: #004da1;
}

.event-schedule {
    width: 66%;
}

.sale-dates {
    width: calc(34% - 24px);
}

.sale-dates .main-heading {
    font-size: 16px;
}

.sale-dates-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.sale-dates-list li {
    display: flex;
    justify-content: space-between;
    margin: 16px 0 24px;
    position: relative;
}

.sale-dates-list img {
    border-radius: 4px;
    height: 100%;
    width: 40%;
}

.sale-dates-list .info {
    font-size: 14px;
    width: calc(60% - 12px);
}

.sale-dates-list .date {
    color: #026cdf;
    text-transform: uppercase;
}

.sale-dates-list .heading {
    font-size: 14px;
}


.dates {
    background: #f6f6f6;
    border-radius: 4px;
    display: flex;
    flex-wrap: nowrap;
    /*justify-content: space-between; */
    justify-content: flex-start;
    list-style: none;
    margin: 0 0 24px;
    padding: 16px;
    width: 100%;
}

.dates li {
    margin-left: 12px;
    text-align: center;
}

.dates li:first-child {
    margin: 0;
}

.dates li > div:first-child {
    font-size: 10px;
    margin-bottom: 6px;
    text-transform: uppercase;
}

.dates .date-box {
    background: #fff;
    border: 1px solid #c7c7c7;
    border-radius: 2px;
    color: #904eba;
    cursor: pointer;
    padding: 6px;
}

.dates .date-box.active {
    background: #904eba;
    border-color: #904eba;
    color: #fff;
}

.dates .date-box:not(.active):hover {
    border-color: #026cdf;
    box-shadow: 0 0 0 1px #026cdf inset;
}

.dates .month {
    font-size: 12px;
    line-height: 1;
    text-transform: uppercase;
}

.dates .day {
    font-size: 24px;
    line-height: 1;
}


.filters {
    margin: 0 0 24px;
}

.filters .select-container {
    background: #fff;
    cursor: pointer;
    display: inline-block;
    margin-left: 24px;
    position: relative;
}

.filters .select-container:before {
    border-radius: 2px;
    box-shadow: 0 0 0 1px #c7c7c7 inset;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 15;
}

.filters .select-container:hover:before {
    box-shadow: 0 0 0 2px #026cdf inset;
}

.filters .select-container:after {
    border-color: transparent transparent #9c9c9c #9c9c9c;
    border-style: solid;
    border-width: 1px;
    content: '';
    height: 7px;
    right: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-75%) rotate(315deg);
    width: 7px;
}

.filters .select-container.select-mobile:before,
.filters .select-container.select-mobile:after,
.filters .select-container.select-mobile img {
    pointer-events: none;
}

.filters .select-container:first-child {
    margin: 0;
}

.filters .select-container.select-mobile {
    display: none;
}

.filters select {
    background: none;
    border: 0 none;
    font-size: 16px;
    line-height: calc(100% + 4px);
    outline: none;
    padding: 10px 16px;
    padding-right: 30px;
    pointer-events: none;
    width: 180px;
    -webkit-appearance: none;
}

.filters .select-container.select-mobile select {
    pointer-events: auto;
}

.filters .select-list {
    background: #fff;
    border-radius: 0 0 2px 2px;
    left: 0;
    list-style: none;
    margin: 0;
    max-height: 0;
    min-width: 100%;
    overflow: hidden;
    padding: 0;
    position: absolute;
    transition: max-height .5s;
    top: 39px;
    z-index: 10;
}

.filters .select-container.closing .select-list {
    border: solid 1px #c7c7c7;
    padding: 8px;
}

.filters .select-container.open .select-list {
    border: solid 1px #c7c7c7;
    border-radius: 2px 2px 0 0;
    max-height: 1000px;
    padding: 8px;
}

.filters .select-list li {
    border-radius: 2px;
    cursor: pointer;
    margin-top: 4px;
    opacity: 0;
    padding: 8px;
    transition: opacity 1s;
    white-space: nowrap;
}

.filters .select-container.open li {
    opacity: 1;
}

.filters .select-list li:first-child {
    margin: 0;
}

.filters .select-list li:hover {
    background: #026cdf;
    color: #fff;
}

.filters .btn-link {
    cursor: pointer;
    font-size: 14px;
    margin-left: 14px;
}

.filters .btn-link:hover,
.filters .btn-link:focus {
    text-decoration: underline;
}


.events {
    list-style: none;
    margin: 0;
    padding: 0;
}

.event {
    border-top: 1px solid #ccc;
}

.event .main-info {
    align-items: start;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    cursor: pointer;
    display: flex;
    padding: 16px;
    position: relative;
}

.event .main-info:before {
    border-color: transparent transparent #262626 #262626;
    border-style: solid;
    border-width: 1px;
    content: '';
    height: 8px;
    left: 16px;
    position: absolute;
    top: 36px;
    transform: translateY(-75%) rotate(315deg);
    transition: transform .25s;
    width: 8px;
}

.event.open .main-info:before {
    transform: translateY(-25%) rotate(135deg);
}

.event.open {
    background: #fff;
    border: solid 1px #e0e0e0;
    border-radius: 4px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .06), 0 0 4px 0 rgba(0, 0, 0, .12);
    margin-bottom: 4px;
}

.event.open .main-info {
    border: 0 none;
}

.event.open .addl-info {
    display: flex;
}

.event .date {
    padding-left: 50px;
    width: 30%;
}

.event .date .month-date {
    color: #904eba;
    font-size: 16px;
    font-weight: 400;
}

.event .date .day-time {
    font-size: 14px;
    opacity: .6;
}

.event .info {
    width: 60%;
}

.event .info .name {
    font-size: 16px;
}

.event .info .venue {
    font-size: 14px;
    opacity: .6;
}

.event .info .onsale {
    color: #1bab1e;
    font-size: 12px;
    text-transform: uppercase;
}

.event .buttons {
    text-align: right;
    width: 20%;
}

.event .btn {
    font-size: 14px;
    white-space: nowrap;
}

.event .mobile-dots {
    display: none;
}

.event .addl-info {
    align-items: flex-start;
    display: none;
    justify-content: space-between;
    padding: 30px 16px 60px;
    position: relative;
}

.event .addl-info:before {
    border-top: 1px solid #e0e0e0;
    content: '';
    height: 0;
    left: 16px;
    position: absolute;
    top: 0;
    width: calc(100% - 32px);
}

.event .addl-info > div {
    width: calc(100% / 3);
}

.event .addl-info .heading {
    font-size: 12px;
    margin-bottom: 16px;
    opacity: .6;
    text-transform: uppercase;
}

.event .addl-info .stadium-list {
    font-size: 14px;
    line-height: 1.7;
    list-style: none;
    margin: 0;
    padding: 0;
}

.event .addl-info .stadium-list li:before {
    background: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon-check-green@2x.png') no-repeat center center;
    background-size: contain;
    content: '';
    display: inline-block;
    height: 11px;
    margin-right: 10px;
    width: 14px;
}

.event .addl-info .venue-info a,
.event .addl-info .more-info a {
    color: #262626;
    display: block;
    font-size: 14px;
    padding-left: 34px;
    position: relative;
    text-decoration: none;
}

.event .addl-info .venue-info a:before,
.event .addl-info .more-info a:before {
    background: no-repeat center center;
    background-size: cover;
    content: '';
    height: 26px;
    left: 0;
    position: absolute;
    top: -3px;
    width: 26px;
}

.event .addl-info .venue-info a:before {
    background-image: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon_venue-info@2x.png');
}

.event .addl-info .more-info a:before {
    background-image: url('https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon_sell@2x.png');
}

.event .addl-info .venue-info a span,
.event .addl-info .more-info a span {
    color: #026cdf;
    display: block;
}

.event .addl-info .venue-info a:hover span,
.event .addl-info .venue-info a:focus span,
.event .addl-info .more-info a:hover span,
.event .addl-info .more-info a:focus span {
    text-decoration: underline;
}

.event .addl-info .btn-close {
    display: none;
}

.event .addl-info .btn {
    display: none;
}

@media (max-width: 1024px) {

    .section-9 .container {
        flex-direction: column;
    }

    .event-schedule {
        margin-bottom: 48px;
    }

    .event-schedule,
    .sale-dates {
        width: 100%;
    }

    .sale-dates-list img {
        width: 25%;
    }

    .sale-dates-list .info {
        width: calc(75% - 24px);
    }
}

@media (max-width: 460px) {

    .section-9 {
        padding-top: 24px;
    }

    .back-btn {
        margin-top: 0;
    }

    .dates {
        display: none;
    }

    .filters .select-container.select-desktop {
        display: none;
    }

    .filters .select-container.select-mobile {
        display: block;
        margin: 0;
        width: 100%;
    }

    .filters .select-mobile select {
        padding-left: 40px;
        width: 100%;
    }

    .filters .select-mobile img {
        height: 20px;
        left: 12px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 19px;
    }

    .filters .btn-link {
        display: none;
    }

    .event.open {
        border: 0 none;
        border-top: 1px solid #ccc;
        border-radius: 0;
        box-shadow: none;
        margin: 0;
    }

    .event .main-info {
        border: 0 none;
        padding: 12px 0;
        position: relative;
    }

    .event .main-info:before {
        display: none;
    }

    .event .date {
        padding: 0;
    }

    .event .info {
        width: calc(70% - 36px);
    }

    .event .info .name,
    .event .info .venue {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .event .buttons {
        width: 36px;
    }

    .event .buttons .btn {
        background: none;
        border: 0 none;
        bottom: 12px;
        font-size: 0;
        left: 0;
        position: absolute;
        right: 36px;
        top: 12px;
    }

    .event .mobile-dots {
        background: none;
        border: 0 none;
        display: block;
        margin: 0;
        outline: none;
        padding: 0;
        text-align: right;
        width: 36px;
    }

    .event .mobile-dots img {
        width: 5px;
    }

    .event .addl-info {
        background: #fff;
        border-radius: 4px 4px 0 0;
        bottom: calc(-100% - 14px);
        display: flex;
        flex-direction: column;
        left: 0;
        padding: 12px 0 0;
        position: fixed;
        right: 0;
        transition: bottom .5s;
        z-index: 110;
    }

    .event .addl-info:before {
        display: none;
    }

    .event .addl-info > div {
        border-bottom: 1px solid #e0e0e0;
        padding: 16px;
        width: 100%;
    }

    .event .addl-info > div:first-child {
        margin: 0;
    }

    .event .addl-info .btn {
        display: block;
        margin: 16px;
        width: calc(100% - 32px);
    }

    .event.open .addl-info {
        bottom: 0;
    }

    .event.open .addl-info .btn-close {
        background: none;
        border: 0 none;
        display: block;
        outline: none;
        padding: 0;
        position: absolute;
        right: 16px;
        top: 16px;
    }

    .event.open .addl-info .btn-close img {
        height: 13px;
        width: 14px;
    }
	
	.section-1 .purple-small {
   color: #904eba;
   font-size: 14px !important;
   font-weight: 600;
}
}

.section-1 {
    background: #fff;
    border-top: 8px solid #2c9ae0; 
    color: #000;
}

.section-1 .purple-small {
   color: #904eba;
   font-size: 16px;
   font-weight: 600;
}

.purple-upper {
  color: #904eba;
  text-transform: uppercase;
}
<!-- end schedule.css -->

</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css">
</head>



<body>

    <div class="frame" style="width: 100%;">

        <nav class="main-nav" id="main-nav">
            <div class="mobile-nav">
                <a href="https://www.ticketmaster.com"><img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/logo_tm.png" alt="Ticketmaster" class="logo-tm" /></a>
                <div class="mobile-links">
                    <a href="https://my.ticketmaster.com/account"><img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/icon_sign-in.png" alt="Sign In" class="icon-sign-in" /></a>
                    <a href="http://help.ticketmaster.com/">Help</a>
                    <button type="button" class="menu" id="btn-menu"></button>
                </div>
            </div>
            <ul class="main-links">
                <li><a href="https://www.ticketmaster.com/"><img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/logo_tm.png" alt="Ticketmaster" class="logo-tm" id="tm-logo-transition" /></a></li>
                <li><a href="https://www.ticketmaster.com/discover/concerts">Concerts</a></li>
                <li><a href="https://www.ticketmaster.com/discover/sports">Sports</a></li>
                <li><a href="https://www.ticketmaster.com/discover/arts-theater">Arts &amp; Theater</a></li>
                <li><a href="https://www.ticketmaster.com/discover/family">Family</a></li>
                <li><a href="https://www.ticketmaster.com/microsite/premium">VIP</a></li>
                <li><a href="https://www.ticketmaster.com/ticketdeals">Deals</a></li>
            </ul>
            <div class="nav-links-section">
                <ul class="sub-links">
                    <!-- <li><a href="https://www.ticketmaster.com/feed">For You</a></li> -->
                    <li><a href="https://www.ticketmaster.com/sell">Sell</a></li>
                    <li><a href="https://my.ticketmaster.com/account" id="link-sign-in">Sign In</a></li>
                    <li><a href="http://help.ticketmaster.com/">Help</a></li>
                </ul>
	            <div class="paypal-nav-partner-container"></div>
            </div>
        </nav>

        <header class="header">
            <div class="container">
                <div>
                    <ul class="breadcrumbs">
					    <li><a href="https://www.ticketmaster.com/">Home</a></li>
                        <li><a href="https://www.ticketmaster.com/discover/arts-theater">Arts & Theatre</a></li>
                        <li><a href="https://www.ticketmaster.com/broadway">Broadway</a></li>
                    </ul>
                   <!-- <p class="star-rating"><span class="icon">&sstarf;</span> 4.8</p>  -->
                </div>
                <h1 class="heading"><strong>2023-24 Broadway Tickets</strong></h1>
                <ul class="page-links">
				<li>&nbsp;</li>
				<li>&nbsp;</li>
				
                    <!--<li><button type="button" class="btn active" data-page="overview">Overview</button></li>
                    <li><button type="button" class="btn" data-page="schedule">Event Schedule</button></li> -->
                </ul>
            </div>
        </header>

        <div id="overview">

            <section class="section section-1"> 
                <div class="container">
                    <div class="content">
					     <div class="content-part">
						 <!-- <h2 class="main-heading text-upper purple-small">Broadway</h2> -->
						 <h2 class="main-heading">Broadway</h2>
                            <p class="desc">From Broadway&rsquo;s newest blockbuster musicals to iconic long-running hits, Ticketmaster has you covered with tickets to the hottest shows on Broadway and on tour!</p>
							<!-- <p class="desc">With Tony Awards&reg; season in full swing, join Ticketmaster in celebrating the magic of Broadway in the Big Apple and on tour. Don&rsquo;t miss your chance to experience Broadway's best live on stage including past &amp; present Tony&reg; award winners and make sure to catch Broadway Week, which is September 4–17 2023.</p>
							<a href="https://in.ticketmaster.com/broadway-week/" class="btn-primary" target="_blank">See Deals Here</a> -->
							
                            <!-- <p class="desc">The swell of the orchestra, the rising curtain, and the legendary performers all take you to places near and far.  Whether you&rsquo;re looking to see a new musical, a long-running hit or a gripping drama, Ticketmaster has you covered with tickets to the hottest shows on Broadway and on the road. To make things even better, it&rsquo;s Tony Awards&reg; season! Ticketmaster invites you to join us in celebrating the magic of Broadway&rsquo;s best live on stage near you! Whether in the Big Apple or on tour across the globe, don&rsquo;t miss your chance at tickets to see past &amp; present Tony&reg; award winners and be sure to catch the 76th Annual Tony Awards&reg; on Sunday, June 11!</p> -->
							<!-- <a href="#" class="btn-primary">See Tickets</a> --> 
   
                        </div>
                        <div class="content-part">
                            <img src="https://s1.ticketm.net/en-us/img/static/broadway/1024x576.jpg" alt="Broadway" class="logo" />
            
                        </div> 
                       
                    </div>
                  
                </div>
            </section>

           
            
         
			
			<!-- Artist Cards -->
			


		
		
		
		
			
		<!-- Venues Near You -->
		
		<section class="section section-venuesnearyou" >
            <div class="container">
                <h2 class="main-heading">Broadway Shows in New York</h2>
                <!-- <h3 class="sub-heading">Must-visit amphitheatres for every concert goer's summer bucket list.</h3> -->
                <nav class="nav-areas" id="nav-venue-areas">
                    <!-- <ul>
                        <li><button type="button" class="area-btn active" data-id="venues-west">West</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-southwest">Southwest</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-midwest">Midwest</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-northeast">Northeast</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-southeast">Southeast</button></li>
                    </ul> -->
                </nav>
                <ul class="grid active" id="venues-west">
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/01-Aladdin-Broadyway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Disney's Aladdin</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/aladdin-tickets/artist/1858715?ac_link=broadway_tony_bway_aladdin" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/02-Hamilton-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Hamilton</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/hamilton-ny-tickets/artist/2095830?ac_link=broadway_tony_bway_hamilton" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/03-MJ-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">MJ</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/mj-ny-tickets/artist/2714992?ac_link=broadway_tony_bway_mj" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/The-Wiz.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">The Wiz</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/the-wiz-ny-tickets/artist/3077759" class="link"></a>
                    </li>
                    <!-- <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/04-One-More-Time-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Once Upon a One More Time</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/once-upon-a-one-more-time-tickets/artist/2953891?ac_link=broadway_tony_bway_OMT" class="link"></a>
                    </li> -->
                    <!-- <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/05-Shucked-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Shucked</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/shucked-ny-tickets/artist/2943155?ac_link=broadway_tony_bway_shucked" class="link"></a>
                    </li> -->
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/06-Six-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Six</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/six-new-york-ny-tickets/artist/2677195?ac_link=broadway_tony_bway_six" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/06-Sweeney-Todd-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Sweeney Todd</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/sweeney-todd-ny-tickets/artist/2921987?ac_link=broadway_tony_bway_sweeny" class="link"></a>
                    </li> 

                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/Tommy.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">The Who’s Tommy</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/the-whos-tommy-tickets/artist/2521758" class="link"></a>
                    </li>

                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/07-Lion-King-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Disney Presents The Lion King</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/the-lion-king-new-york-ny-tickets/artist/1039581?ac_link=broadway_tony_bway_tlk" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/08-Wicked-Broadway.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Wicked</h3>
                            <h4 class="location-name">New York, <abbr title="New York">NY</abbr></h4>
                        </div>
                        <a href="https://www.ticketmaster.com/wicked-ny-tickets/artist/965961?ac_link=broadway_tony_bway_wicked" class="link"></a>
                    </li>
                </ul>
				
				
                
            </div>
        </section>
		
		<section class="section section-venuesnearyou" >
            <div class="container">
                <h2 class="main-heading">Broadway Touring Shows</h2>
                <!-- <h3 class="sub-heading">Must-visit amphitheatres for every concert goer's summer bucket list.</h3> -->
                <nav class="nav-areas" id="nav-venue-areas">
                    <!-- <ul>
                        <li><button type="button" class="area-btn active" data-id="venues-west">West</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-southwest">Southwest</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-midwest">Midwest</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-northeast">Northeast</button></li>
                        <li><button type="button" class="area-btn" data-id="venues-southeast">Southeast</button></li>
                    </ul> -->
                </nav>
                <ul class="grid active" id="venues-west">
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/01-Aladdin-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Disney's Aladdin</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/promo/rpzi07?ac_link=broadway_tony_touring_aladdin" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/02-Beetlejuice-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Beetlejuice</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/beetlejuice-touring-tickets/artist/2867362?ac_link=broadway_tony_touring_beetlejuice" class="link"></a>
                    </li>
                   
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/03-Frozen-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Frozen</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/frozen-touring-tickets/artist/2559508?ac_link=broadway_tony_touring_frozen" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/04-Hadestown-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Hadestown</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/promo/c4nsfu?ac_link=broadway_tony_touring_hadestown" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/05-Hamilton-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Hamilton</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/promo/bu63gp?ac_link=broadway_tony_touring_hamilton" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/06-Jagged-Little-Pill-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Jagged Little Pill</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/jagged-little-pill-touring-tickets/artist/2867226?ac_link=broadway_tony_touring_jagged" class="link"></a>
                    </li>
                    <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/07-Les-Miserable-Touring.png" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Les Miserables</h3>
                            <h4 class="location-name">Various Markets</h4> 
                        </div>
                        <a href="https://www.ticketmaster.com/les-miserables-touring-tickets/artist/34216?ac_link=broadway_tony_touring_lesmiz" class="link"></a>
                    </li>
					 <li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/08-MJ-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">MJ</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/mj-touring-tickets/artist/3007828?list_view=1" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/09-Moulin-Rouge-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Moulin Rouge</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/moulin-rouge-touring-tickets/artist/835426?ac_link=broadway_tony_touring_moulin" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/10-Six-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Six</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/six-touring-tickets/artist/2725025?ac_link=broadway_tony_touring_six" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/11-Lion-King-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Disney Presents The Lion King</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/disney-presents-the-lion-king-touring-tickets/artist/820969?ac_link=broadway_tony_touring_tlk" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/12-Tina-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">TINA - The Tina Turner Musical</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/tina-the-tina-turner-musical-tickets/artist/2383230?ac_link=broadway_tony_touring_tina" class="link"></a>
                    </li>
					<li class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/broadway/13-Wicked-Touring.jpg" alt="" />
                        <div class="headings">
                            <h3 class="venue-name">Wicked</h3>
                            <h4 class="location-name">Various Markets</h4>
                        </div>
                        <a href="https://www.ticketmaster.com/wicked-touring-tickets/artist/864373?ac_link=broadway_tony_touring_wicked" class="link"></a>
                    </li>
                </ul>
				
				
                
            </div>
        </section>
		
		
			
			
        
			<!-- Video -->
        
			 
			
	
			
			 <!-- Blog -->
            <section class="section section-6">
                <div class="container">
                    <h2 class="main-heading"><img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/logo_blog@2x.png" alt="Ticketmaster / Blog" /></h2>
                    <div class="cards">
                        <div class="card">
                            <img src="https://blog.ticketmaster.com/wp-content/uploads/iStock_000011675169_broadway-1024x583.jpg" alt="" class="img" />
                            <h3 class="heading">How to Avoid Buying Counterfeit Broadway Theater Tickets</h3>
                            <p class="desc">We've put together a few simple tips you can follow to ensure you get in to your show without any trouble.</p>
                            <a href="https://blog.ticketmaster.com/avoid-buying-counterfeit-broadway-theater-tickets/" target="_blank" class="link-full"></a>
                            <p class="pseudo-link">Read More</p>
                        </div>
                        <div class="card">
                            <img src="https://blog.ticketmaster.com/wp-content/uploads/Mobile_Ticket_Blog_Header.jpg" alt="" class="img" />
                            <h3 class="heading">Mobile Ticketing: An Essential for Safe Entry</h3>
                            <p class="desc">Here's everything you need to know about mobile ticketing, and how it'll make your next event day a whole lot easier.</p>
                            <a href="https://blog.ticketmaster.com/mobile-ticketing-an-essential-for-safe-entry/" target="_blank" class="link-full"></a>
                            <p class="pseudo-link">Read More</p>
                        </div>
                        <div class="card">
                            <img src="https://blog.ticketmaster.com/wp-content/uploads/Sell_Tickets_Blog-1024x576.png" alt="" class="img" />
                            <h3 class="heading">How to Sell Your Tickets: Always Safe, Always Secure</h3>
                            <p class="desc">Read on to learn everything you need to know about selling your tickets with total peace of mind.</p>
                            <a href="https://blog.ticketmaster.com/how-to-sell-tickets-safe-ticketmaster/" target="_blank" class="link-full"></a>
                            <p class="pseudo-link">Read More</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SEO -->
        <!--    <section class="section section-8">
                <div class="container">
				 <h2 class="main-heading">SEO Header</h2>
                    <div class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/image_section-08.jpg" alt="" class="img" />
                        <div class="content">
                            <h2 class="heading">SEO Header</h2>
                            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo risus in viverra. Maecenas a suscipit ligula, eu fringilla sem. Nunc vitae nibh nunc. Vivamus porta a felis quis sodales. Phasellus quam lacus, scelerisque nec ultrices sit amet, semper in quam. In hac habitasse platea dictumst. Morbi ex erat, euismod vel imperdiet a, venenatis eu sem. Nam enim massa, tempus vitae suscipit id, laoreet quis turpis. Suspendisse eu velit nibh. Donec lobortis diam eget finibus malesuada. Sed elementum accumsan leo, ac feugiat nisl fermentum nec. </p>
                        </div>
                    </div>
                </div>
				<div class="container">
                    <div class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/image_section-08-2.jpg" alt="" class="img" />
                        <div class="content">
                            <h2 class="heading">SEO Header</h2>
                            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo risus in viverra. Maecenas a suscipit ligula, eu fringilla sem. Nunc vitae nibh nunc. Vivamus porta a felis quis sodales. Phasellus quam lacus, scelerisque nec ultrices sit amet, semper in quam. In hac habitasse platea dictumst. Morbi ex erat, euismod vel imperdiet a, venenatis eu sem. Nam enim massa, tempus vitae suscipit id, laoreet quis turpis. Suspendisse eu velit nibh. Donec lobortis diam eget finibus malesuada. Sed elementum accumsan leo, ac feugiat nisl fermentum nec. </p>
                        </div>
                    </div>
                </div>
				<div class="container">
                    <div class="card">
                        <img src="https://s1.ticketm.net/en-us/img/static/summeroflive/19/image_section-08-3.jpg" alt="" class="img" />
                        <div class="content">
                            <h2 class="heading">SEO Header</h2>
                            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan commodo risus in viverra. Maecenas a suscipit ligula, eu fringilla sem. Nunc vitae nibh nunc. Vivamus porta a felis quis sodales. Phasellus quam lacus, scelerisque nec ultrices sit amet, semper in quam. In hac habitasse platea dictumst. Morbi ex erat, euismod vel imperdiet a, venenatis eu sem. Nam enim massa, tempus vitae suscipit id, laoreet quis turpis. Suspendisse eu velit nibh. Donec lobortis diam eget finibus malesuada. Sed elementum accumsan leo, ac feugiat nisl fermentum nec. </p>
                        </div>
                    </div>
                </div>
            </section> -->


        </div>


        
        <footer class="footer">
                <div class="container">
                    <div class="footer-div">
                        <h2 class="heading">Helpful Links</h2>
                        <ul>
						    <li><a href="https://help.ticketmaster.com/s/">Help/FAQ</a></li>
							<li><a href="https://www.ticketmaster.com/sell">Sell</a></li>
                            <li><a href="https://www.ticketmaster.com/member">My Account</a></li>
                            <li><a href="https://help.ticketmaster.com/s/article/How-do-I-contact-Customer-Service">Contact Us</a></li>
                            <li><a href="https://www.ticketmaster.com/giftcards">Gift Cards</a></li>
                            <li><a href="https://help.ticketmaster.com/hc/en-us/articles/10465798887953-Purchase-Policy">Refunds and Exchanges</a></li>
                            
                            <li><a href="https://privacyportal.onetrust.com/webform/ba6f9c5b-dda5-43bd-bac4-4e06afccd928/bfde11af-3096-44ce-9a34-1832f9d60912">Do Not Sell or Share My Personal Information</a></li>
                            
                        </ul>
                    </div>
                    <div class="footer-div">
                        <h2 class="heading">Our Network</h2>
                        <ul>
                            <li><a href="https://www.livenation.com/">Live Nation</a></li>
                            <li><a href="http://www.houseofblues.com/">House of Blues</a></li>
                            <li><a href="http://www.frontgatetickets.com/">Front Gate Tickets</a></li>
                            <li><a href="https://www.ticketweb.com/">TicketWeb</a></li>
                            <li><a href="https://www.universe.com/">universe</a></li>                                       
                            <li><a href="https://www.ticketmaster.com/nfl">NFL</a></li>
                            <li><a href="https://nbatickets.nba.com/">NBA</a></li>
                            <li><a href="http://www.ticketsnow.com/nhl/">NHL</a></li>
                        </ul>
                    </div>
                    <div class="footer-div">
                        <h2 class="heading">About Us</h2>
                        <ul>
                            <li><a href="https://www.ticketmaster.com/about/about-us.html">Who We Are</a></li>
                            <li><a href="https://blog.ticketmaster.com/">Ticketmaster Blog</a></li>
                            <li><a href="https://www.ticketmaster.com/ticketingtruths">Ticketing Truths</a></li>
                            <li><a href="https://privacy.ticketmaster.com/privacy-policy">Privacy Policy</a></li>
                            <li><a href="https://help.ticketmaster.com/s/article/AdChoices?language=en_US">Ad Choices</a></li>
                            <li><a href="https://lnejobs.com/">Careers</a></li>
                            <li><a href="https://business.ticketmaster.com/contact/">Ticket Your Event</a></li>
                            <!--<li><a href="http://www.ticketmaster.com/international">Across the Globe</a></li>-->
                            <li><a href="https://business.ticketmaster.com/business-solutions/future-focused">Innovation</a></li>
                        </ul>
                    </div>
                    <div class="footer-div">
                        <h2 class="heading">Friends &amp; Partners</h2>
                        <ul>
                            <li><p>PayPal</p></li>
                            <li><a href="https://www.eventticketprotection.com/tm/">Allianz</a></li>
                            <li><a href="https://aws.amazon.com/">AWS</a></li>
                        </ul>
                        <div class="app-links">
                            <h3 class="sub-heading">Get Our App</h3>
                            <ul>
                                <li><a href="https://itunes.apple.com/us/app/ticketmaster/id500003565?mt=8"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_app-apple.png" alt="Apple" /></a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.ticketmaster.mobile.android.na"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_app-google.png" alt="Google" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-footer">
                        <div>
                            <img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/logo_tm.png" alt="Ticketmaster" class="logo-tm" />
                            <p>By continuing past this page, you agree to our <a href="https://help.ticketmaster.com/hc/en-us/articles/10468830739345-Terms-of-Use">Terms of Use</a>.</p>
                        </div>
                        <div>
                            <span class="copyright">&copy; Ticketmaster 2023</span>
                            <span class="location">United States</span>
                            <ul class="social-links">
                                <li><a href="https://www.facebook.com/Ticketmaster"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_social-fb.png" alt="Facebook" /></a></li>
                                <li><a href="https://www.instagram.com/ticketmaster/?hl=en"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_social-ig.png" alt="Instagram" /></a></li>
                                <li><a href="https://twitter.com/ticketmaster"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_social-tw.png" alt="Twitter" /></a></li>
                                <li><a href="https://www.youtube.com/ticketmaster"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_social-yt.png" alt="YouTube" /></a></li>
                                <li><a href="https://www.linkedin.com/company/ticketmaster/"><img src="https://s1.ticketm.net/tm/en-us/img/static/nfl/19/icon_social-li.png" alt="LinkedIn" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

    </div>

    <div class="overlay"></div>

    <!-- Swiper script -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script> 

    <script type="text/javascript">

        // Page toggle
        $('.page-links .btn').click(function() {
            if (!$(this).hasClass('active')) {
                var pageToShow = $(this).data('page');
                var pageToHide = $('.page-links .btn.active').data('page');
                $('.page-links .btn.active').removeClass('active');
                $(this).addClass('active');
                $('#'+pageToShow).show();
                $('#'+pageToHide).hide();
            }
        });

        // Back button
        $('.back-btn').click(function(e) {
            e.preventDefault();
            $('.page-links .btn.active').removeClass('active');
            $('.page-links [data-page=overview]').addClass('active');
            $('#overview').show();
            $('#schedule').hide();
            $('#clear-filters').click();
        })

        // Nav scroll
        $(window).on('scroll load', function() {
            var scrollTop = window.pageYOffset;
            if (scrollTop > 100) {
                $('#main-nav').addClass('scrolled');
            } else {
                $('#main-nav').removeClass('scrolled');
            }
        });

        // Mobile nav
        if (window.outerWidth <= 1023) {
            $('#btn-menu').click(function() {
                $('#main-nav').toggleClass('open');
            });
        }

        // Videos
        var $mainVideo = document.getElementById('main-video');
        $('.videos-list li').click(function() {
            $('.videos-list .active').removeClass('active');
            $(this).addClass('active');
            var videoUrl = $(this).data('video');
            $('#main-video source').attr('src', videoUrl);
            $mainVideo.load();
            $mainVideo.play();
        });

        // Info Hover
        $('.section-1 .icon-info').mouseenter(function() {
            var $card = $(this).closest('.card');
            var $tooltip = $card.find('.info-hover');
            var leftAdj = (window.outerWidth > 460) ? 25 : 0;
            var posLeft = $(this).offset().left - $tooltip.width() + leftAdj;
            var posTop = $(this).offset().top - $tooltip.height() - 50;
            $tooltip.css({
                'left': posLeft + 'px',
                'top': posTop + 'px',
                'opacity': '1'
            });
        }).mouseleave(function() {
            var $card = $(this).closest('.card');
            var $tooltip = $card.find('.info-hover');
            $tooltip.css({
                'opacity': '0'
            });
        });
        $('body').on('touchstart', function(e) {
            if (!e.target.classList.contains('icon-info')) {
                $('.info-hover').css({
                    'opacity': '0'
                });
            }
        });



		
		// Swiper
        if (window.outerWidth > 375) {
            var mySwiper = new Swiper ('.section-quotes.swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
			  preloadImages: true,
			  updateOnImagesReady: true,
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              spaceBetween: 30,
              slidesPerView: 1,
              slidesPerGroup: 4,
            });
        } else {
            var mySwiper = new Swiper ('.section-quotes.swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: false,
			  preloadImages: true,
			  updateOnImagesReady: true,
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              spaceBetween: 15,
              slidesPerView: 1.3,
              slidesPerGroup: 1,
            });
        }
		
		// Swiper
        if (window.outerWidth > 375) {
            var mySwiper = new Swiper ('.section-4 .swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
			  preloadImages: true,
			  updateOnImagesReady: true,
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              spaceBetween: 30,
              slidesPerView: 4,
              slidesPerGroup: 4,
            });
        } else {
            var mySwiper = new Swiper ('.section-4 .swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: false,
			  preloadImages: true,
			  updateOnImagesReady: true,
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              spaceBetween: 15,
              slidesPerView: 1.3,
              slidesPerGroup: 1,
            });
        }

        // Player cards
        $('.section-players .card:not(a)').click(function(e) {
            var $thisCard = $(this);
            if ($thisCard.hasClass('open')) {
                $thisCard.removeClass('open');
            } else {
                $('.section-players .card.open').removeClass('open');
                $thisCard.addClass('open');
            }
        });
		
		// Venues nav
            $('#nav-venue-areas .area-btn').click(function(e) {
                var venuesArea = $(this).data('id');
                if (!$(this).hasClass('active')) {
                    $('.area-btn.active, .section-venuesnearyou .grid.active').removeClass('active');
                    $(this).addClass('active');
                    $('#'+venuesArea).addClass('active');
                }
            });
		
		// Quotes swiper
            var quotesSwiper = new Swiper('.section-quotes.swiper-container', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.section-quotes .swiper-pagination',
                    type: 'bullets',
                    bulletElement: 'li',
                    clickable: true,
                },
            });

        // FAQs
        $('.section-faq .read-more').click(function(e) {
            $(this).closest('li').addClass('open');
        });


       


    </script>
	
		<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4QMLG');</script>
<!-- End Google Tag Manager -->	

</body>

</html>
