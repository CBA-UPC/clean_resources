"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[368],{644952:(t,e,r)=>{r.r(e),r.d(e,{default:);var n=r(356088),o=r.n(n),a=r(939964),c=r(152776),i=r(307851);function u(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}var f={[i.aL.Production]:"https://offercards.prd.01.eu-west-1.eu.olx.org",[i.aL.Staging]:"https://offercards.stg.01.eu-west-1.eu.olx.org"},s=function(){var t,e=(t=function*(t,e,r){var n=t.length?"?id=".concat(t.join("&id=")):"",o=yield fetch("".concat(f[r],"/v1/").concat(e,"/offer-cards").concat(n),{method:"GET",headers:{"Content-Type":"application/json"}});if(!o.ok)throw new Error("BTR Response error: ".concat(o.status,", ").concat(o.statusText));var{data:a}=yield o.json();return a},function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){u(a,n,o,c,i,"next",t)}function i(t){u(a,n,o,c,i,"throw",t)}c(void 0)}))});return (),v=r(271548);unction d(t){var{offersToRequest:e,updateOffersState:r,children:i}=t,{apiEnv:u,siteCode:f}=(0,c.MG)(),d=(t,e)=>{var r={};return t.forEach((),r};return(0,n.useEffect)((()=>{if(e.length){var t=e),n=d(e,a.g.LOADING);r(n);var o=function(){var t,e=(t=function*(t){try{var e=yield s(t,f,u),n={};e.forEach((),r(n)}catch(e){var o=d(t,a.g.UNKNOWN);r(o),v.default.captureExceptionNewRelic({exception:e})}},;return ();t.forEach(()}}),[u,f,e,r]),o().createElement(o().Fragment,null,i)}}}]);
//# sourceMappingURL=olxeuweb.btr.context.loader.62549db7a.chunk.js.map