(window.webpackJsonpvivocha=window.webpackJsonpvivocha||[]).push([[1],{161:162:166:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VivochaDataProvider=e.VivochaDataEmitter=void 0;const r=o(11),i=o(5),n=o(180),s=r.getLogger("vvc-data");function a(t){let e=new Date;return e.getUTCFullYear()+(e.getUTCMonth()<9?"0":"")+(1+e.getUTCMonth())+(e.getUTCDate()<10?"0":"")+e.getUTCDate()+function(t,e){let o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];if(e=e||o.length,t)for(let i=0;i<t;i++)r[i]=o[0|Math.random()*e];else{let t;r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(let e=0;e<36;e++)r[e]||(t=0|16*Math.random(),r[e]=o[19==e?3&t|8:t])}return r.join("")}(t)}function c(t,e=2){const o=t.split("."),i=o.slice(-e++).join("."),n=a(16);r.cookie("vvctest",n,r.extend({},{domain:i}));return n===r.cookie("vvctest")?(s.log("tld",i),r.cookie("vvctest",null,r.extend({},{domain:i})),i):(s.log("invalid tld",i),e<=o.length?c(t,e):(s.log("no valid domain from",t),null))}let h,u;class l extends i.EventEmitter{e.VivochaDataEmitter=l;e.VivochaDataProvider=class{constructor(t,e){this.config=t,this._proxable=!0,this.id=n.v4(),this.prefix="vvc",this.dataEmitter=new l,this.storage={},e=e||0===location.pathname.indexOf("/a/".concat(this.config.acct_id,"/js/dataframe/")),this.cookieOptions={domain:e?location.hostname.split(".").slice(-2).join("."):c(location.hostname),path:e?location.pathname.substring(0,location.pathname.indexOf("/",3)+1):"/",sameSite:"None",secure:!0},s.log((e?"dataframe":"localpage")+" cookie options",this.cookieOptions),window.addEventListener("storage",t=>{if(0===t.key.indexOf(this.key))try{const e=t.key.replace("".concat(this.key,"-"),""),o=JSON.parse(t.newValue);s.debug("storage event",this.id,o.vvcid,o),o.vvcid&&o.value&&o.vvcid!==this.id?this.dataEmitter.emit("change-".concat(e),o.value[e]):s.debug("ingoring storage event generated by this")}catch(t){s.error(t)}},!1)}tKey(t){return"".concat(this.key,"-").concat(t.split(".")[0])}tOptU(){return r.extend({expires:1095},this.cookieOptions)}tOptVOptT(){return r.extend({expires:new Date(+new Date+18e5)},this.cookieOptions)}ookie(t,e,o){if(void 0===e&&void 0===o){let e=this._cookie(t);try{e&&(e=JSON.parse(e))}catch(t){s.error(t)}return Promise.resolve(e)}return e&&"object"==typeof e&&(e=JSON.stringify(e)),o=r.extend(o,this.cookieOptions),Promise.resolve(r.cookie(t,e,o))}etData(t){return this.getLocalData(t)}etLocalData(t,e){try{return Promise.resolve(this.setDataSync("local",t,e))}catch(t){return Promise.reject(t)}}getLocalData(t){try{return Promise.resolve(this.getDataSync("local",t))}catch(t){return Promise.reject(t)}}unsetLocalData(t){try{return Promise.resolve(this.unsetDataSync("local",t))}catch(t){return Promise.reject(t)}}setSessionData(t,e){try{return Promise.resolve(this.setDataSync("session",t,e))}catch(t){return Promise.reject(t)}}getSessionData(t){try{return Promise.resolve(this.getDataSync("session",t))}catch(t){return Promise.reject(t)}}unsetSessionData(t){try{return Promise.resolve(this.unsetDataSync("session",t))}catch(t){return Promise.reject(t)}}_cookie(t,e,o){return this.config.doNotProfile?(void 0!==e&&(this.storage[t]=e),this.storage[t]):void 0===e&&void 0===o?r.cookie(t):r.cookie(t,e,o)}parse(t){const e=JSON.parse(t);return e&&2===Object.keys(e).length&&e.vvcid&&e.value?e.value:e}stringify(t){const e={vvcid:this.id,value:t};return JSON.stringify(e)}supportsStorages(){try{return!!window.localStorage&&!!window.sessionStorage&&"function"==typeof localStorage.getItem&&"function"==typeof localStorage.setItem&&"function"==typeof localStorage.removeItem&&"function"==typeof sessionStorage.getItem&&"function"==typeof sessionStorage.setItem&&"function"==typeof sessionStorage.removeItem}catch(t){return!1}}setDataSync(t,e,o){try{if(this.supportsStorages()){const i=window["".concat(t,"Storage")];if(i){const t=this.getKey(e),n=this.parse(i.getItem(t)||"{}");return r.dot(n,e,o),i.setItem(t,this.stringify(n)),o}throw new Error("vivochaData not available")}throw new Error("vivochaData not available - Impossible to access to local or session storage this may occure if 3rd-party cookies are disabled")}catch(t){throw s.error(t),new Error("vivochaData error"+t.message)}}getDataSync(t,e){try{const o=window["".concat(t,"Storage")];if(o){const t=this.getKey(e),i=this.parse(o.getItem(t));return r.dot(i,e)}throw new Error("vivochaData not available")}catch(t){throw s.error(t),new Error("vivochaData error"+t.message)}}unsetDataSync(t,e){try{const o=window["".concat(t,"Storage")];if(o){const t=this.getKey(e),i=this.parse(o.getItem(t)||"{}");return r.dot(i,e,void 0,!0),void o.setItem(t,this.stringify(i))}throw new Error("vivochaData not available")}catch(t){throw s.error(t),new Error("vivochaData error"+t.message)}}getVVCUSync(){let t=h;return t||(t=this._cookie("".concat(this.prefix,"u")),t||(t=a(16),this.setData("vvcu",{})),h=t),this._cookie("".concat(this.prefix,"u"),t,this.tOptU()),t}getVVCTSync(){let t;return t=this._cookie("".concat(this.prefix,"t")),t||(t=a(16),this.setData("vvct",{})),u=t,this._cookie("".concat(this.prefix,"t"),t,this.tOptT()),t}resetVVCUSync(){return h="",this._cookie("".concat(this.prefix,"u"),"",Object.assign(this.tOptU(),{expires:new Date(0)})),this.getVVCUSync()}resetVVCTSync(){return u="",this._cookie("".concat(this.prefix,"t"),"",Object.assign(this.tOptT(),{expires:new Date(0)})),this.getVVCTSync()}resetVVCU(){return Promise.resolve(this.resetVVCUSync())}resetVVCT(){return Promise.resolve(this.resetVVCTSync())}etVVCU(){return Promise.resolve(this.getVVCUSync())}etVVC(){const t=(()=>{let t=a(16);return this._cookie("vvctest",t,this.tOptT()),t!==this._cookie("vvctest")?(s.warn("cookie test failed"),!1):(this._cookie("vvctest",null,this.tOptT()),!0)})(),e=(()=>{try{if(!localStorage)throw new Error("localStorage undefined")}catch(t){return s.warn("localStorage test failed"),!1}return!0})();return Promise.resolve({tpcs:t,lstr:e,vvcu:this.getVVCUSync(),vvct:this.getVVCTSync()})}setVVCUDuration(t){return this.tOptU=-1===t?function(){return r.extend({},this.cookieOptions)}:function(){return r.extend({expires:new Date(+new Date+1e3*t)},this.cookieOptions)},Promise.resolve(this.getVVCUSync())}setVVCTDuration(t){return this.tOptT=-1===t?function(){return r.extend({expires:new Date(+new Date+1e3*t)},this.cookieOptions)},Promise.resolve(this.getVVCTSync())}}},180:182:183:]);
//# sourceMappingURL=dataframe.js.map