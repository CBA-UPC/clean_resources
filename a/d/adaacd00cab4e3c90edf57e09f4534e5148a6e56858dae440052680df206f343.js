!function(){"use strict";var e=function(){return function(){try{if(!window.top)throw new Error("window.top is not an object");return window.top.audienzzCheck=Math.random(),!0}catch(e){return!1}}()?window.top:window};var t,n,r,o,a,s,i,c=function(t,n){var r=function(t){try{var n,r,o;return null!==(o=null===(r=e())||void 0===r||null===(n=r.__adnz__)||void 0===n?void 0:n[t])&&void 0!==o?o:null}catch(e){return null}}(t);if(r)return r;var o=n();return function(t,n){var r=e();r.__adnz__=r.__adnz__||{},r.__adnz__[t]=n}(t,o),o};function l(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){l(a,r,o,s,i,"next",e)}function i(e){l(a,r,o,s,i,"throw",e)}s(void 0)}))}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e.BATCH="batch"}(t||(t={})),function(e){e.TEADS="TEADS",e.APPNEXUS="APPNEXUS",e.IX="IX",e.GOOGLE="GOOGLE",e.AMAZON="AMAZON",e.BC="BC",e.BTA="BTA",e.CODE="CODE",e.XANDR_BANNER="XANDR_BANNER",e.ADSENSE="ADSENSE",e.PREBID="PREBID"}(n||(n={})),function(e){e.PageImpression="PAGE_IMPRESSION",e.CampaignImpression="CAMPAIGN_IMPRESSION",e.CampaignClick="CAMPAIGN_CLICK",e.Viewability="VIEWABILITY",e.TagHit="TAG_HIT",e.BidRequest="BID_REQUEST",e.BidWinner="BID_WINNER",e.RecommendationView="RECOMMENDATION_VIEW",e.RecommendationImpression="RECOMMENDATION_IMPRESSION",e.HeaderDomFound="HEADER_DOM_FOUND",e.HeaderCanBePreloaded="HEADER_CAN_BE_PRELOADED",e.HeaderCanBeShown="HEADER_CAN_BE_SHOWN",e.HeaderAuction="HEADER_AUCTION",e.HeaderAllowed="HEADER_ALLOWED",e.HeaderGptInjected="HEADER_GPT_INJECTED",e.HeaderAdImpression="HEADER_AD_IMPRESSION",e.AdBlockerDetectEvent="ADBLOCKER_DETECT_EVENT",e.AdBlockerActionEvent="ADBLOCKER_ACTION_EVENT"}(r||(r={})),function(e){e.Context="context",e.Effects="effects",e.Network="network",e.UID="uid",e.VisitorId="visitorId",e.Hash="hash",e.Publisher="publisher"}(o||(o={})),function(e){e[e.Amazon=793]="Amazon",e[e.Appnexus=32]="Appnexus",e[e.Audienzz=783]="Audienzz",e[e.Google=755]="Google",e[e.Index=10]="Index",e[e.Teads=132]="Teads"}(a||(a={})),function(e){e[e.StoreAndAccessInformation=1]="StoreAndAccessInformation",e[e.SelectBasicAds=2]="SelectBasicAds",e[e.CreatePersonalizedAdsProfile=3]="CreatePersonalizedAdsProfile",e[e.SelectPersonalizedAds=4]="SelectPersonalizedAds",e[e.CreatePersonalizedContentProfile=5]="CreatePersonalizedContentProfile",e[e.SelectPersonalizedContent=6]="SelectPersonalizedContent",e[e.MeasureAdsPerformance=7]="MeasureAdsPerformance",e[e.MeasureContentPerformance=8]="MeasureContentPerformance",e[e.ApplyMarketResearchToInsights=9]="ApplyMarketResearchToInsights",e[e.DevelopAndImproveProducts=10]="DevelopAndImproveProducts"}(s||(s={})),function(e){e.CH="C1",e.DE="C2",e.AG="C3",e.UNKNOWN="C0"}(i||(i={}));function h(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}Object.create;"function"==typeof SuppressedError&&SuppressedError;const g=Symbol(),b=function(e){try{return e(...[].slice.call(arguments,1))}catch(e){return setTimeout((()=>{throw e})),e instanceof Error?e:e=new Error(e)}};function v(e,t){if(e)throw new Error(`Reatom error: ${t}`)}const y=e=>e.subs.size+e.listeners.size>0;function _(e){v("function"!=typeof e,`invalid "${typeof e}", function expected`)}const A=e=>null===e.cause?e:A(e.cause);let E;const w=({callLateEffect:e=b,callNearEffect:t=b}={})=>{let n=new WeakMap,r=e=>n.get(e),o=new Set,a=[],s=[],i=!1,c=null,l=[],u=[],f=[],d=0,p=0,h=!1,m=()=>{for(let e of a)t(e,j);a=[]},w=()=>{if(!h){h=!0,m();for(let t of s)e(t,j),a.length>0&&m();s=[],h=!1}},S=({state:e,proto:t,pubs:n,subs:r,listeners:o},a)=>(t.actual=!1,f.push(t.patch={state:e,proto:t,cause:a,pubs:n,subs:r,listeners:o}),t.patch),O=e=>{for(let t of e.subs.keys()){let n=t.patch??r(t);t.patch&&!t.actual||0===S(n,e).listeners.size&&O(n)}},P=(e,t)=>{if(t.subs.delete(e)&&(u.push((()=>t.subs.add(e))),!y(t))){null!==t.proto.disconnectHooks&&a.push(...t.proto.disconnectHooks);for(let e of t.pubs)P(t.proto,e)}},I=(e,t)=>{if(!t.subs.has(e)){let n=y(t);if(t.subs.add(e),u.push((()=>t.subs.delete(e))),!n){null!==t.proto.connectHooks&&a.push(...t.proto.connectHooks);for(let e of t.pubs)I(t.proto,e)}}},C=(e,t,n)=>{let{patch:o,actual:a}=t,s=void 0!==n;if(a&&!s)return o;let i=o??r(t),c=!i,u=s?e.cause:r(D);if(c)i={state:t.initState(e),proto:t,cause:u,pubs:[],subs:new Set,listeners:new Set};else if(null===t.computer&&!s)return i;o&&!a||(o=S(i,u));let{state:f}=o,d={get:e.get,spy:void 0,schedule:e.schedule,subscribe:e.subscribe,cause:o};try{t.computer&&((e,t)=>{let{proto:n,pubs:o}=t,a=!1;if(0===o.length||o.some((({proto:n,state:r})=>!Object.is(r,(t.cause=C(e,n)).state)))){let s=[];if(e.spy=({__reatom:n},r)=>{if(t.pubs===o){let t=C(e,n),i=s.push(t)<=o.length?o[s.length-1]:void 0,c=i?.proto!==t.proto;a||=c;let l=n.isAction&&!c?t.state.slice(i.state.length):t.state;if(!r||!c&&Object.is(l,i.state))return l;if(n.isAction)for(const e of l)r(e);else r(l,c?void 0:i?.state)}else v(!0,"async spy")},t.state=t.proto.computer(e,t.state),t.pubs=s,(a||o.length>s.length)&&y(t)){for(let{proto:e}of o)s.every((t=>t.proto!==e))&&P(n,e.patch??r(e));for(let{proto:e}of s)o.every((t=>t.proto!==e))&&I(n,e.patch??r(e))}}})(d,o),s&&(o.cause=e.cause,n(d,o)),t.actual=!0}catch(e){throw o.error=e}if(!Object.is(f,o.state)&&(o.subs.size>0&&(s||o.listeners.size>0)&&O(o),t.updateHooks)){let e={get:d.get,spy:void 0,schedule:d.schedule,subscribe:d.subscribe,cause:d.cause};t.updateHooks.forEach((t=>l.push((()=>t(e,o)))))}return o},j={get(e){if(v(E&&A(E.cause)!==r(D),"cause collision"),t=e,void 0!==t?.__reatom){let t=e.__reatom;if(i)return C(this,t).state;let n=r(t);return void 0===n||null!==t.computer&&!y(n)?this.get((()=>C(this,t).state)):n.state}var t;if(v(null!==c,"tr failed"),i)return e(r,C);i=!0,d=a.length,p=s.length;let h=void 0===E;h&&(E=this);try{var m=e(r,C);for(let e=0;e<f.length;e++){let{listeners:t,proto:n}=f[e];if(t.size>0&&C(this,n),l.length>0)for(let e of l.splice(0))e(this)}if(f.length)for(let e of o)e(f);for(let e of f){let{proto:t,state:o}=e;if(t.isAction&&(e.state=[]),e===t.patch)if(t.patch=null,t.actual=!1,n.set(t,e),t.isAction){if(0===o.length)continue;for(let t of e.listeners)a.push((()=>t(o)))}else for(let n of e.listeners)s.push((()=>n(r(t).state)))}}catch(e){c=e=e instanceof Error?e:new Error(String(e));for(let t of o)t(f,e);for(let t of u)b(t,e);for(let{proto:e}of f)e.patch=null,e.actual=!1;throw a.length=d,s.length=p,e}finally{i=!1,c=null,l=[],u=[],f=[],d=0,p=0,h&&(E=void 0)}return w(),m},spy:void 0,schedule(e,t=1){return _(e),v(!this,"missed context"),new Promise(((n,r)=>{-1===t?i&&u.push(e):0===t?i&&l.push((()=>e(this))):((1===t?a:s).push((()=>{try{let t=e(this);return t instanceof Promise?t.then(n,r):n(t),t}catch(e){throw r(e),e}})),i||w())}))},subscribe(e,t=e){if(_(t),e===t)return o.add(t),()=>o.delete(t);let{__reatom:n}=e,s=g,c=e=>Object.is(s,e)||t(s=e),l=r(n);return void 0!==l&&y(l)?l.listeners.add(c):this.get((()=>{l=C(this,n,((e,t)=>{})),l.listeners.add(c),u.push((()=>n.patch.listeners.delete(c))),null!==n.connectHooks&&a.push(...n.connectHooks);for(let e of l.pubs)I(n,e)})),s===g&&c((n.patch??r(n)).state),()=>{if(l.listeners.delete(c)&&!y(l)){n.disconnectHooks&&a.push(...n.disconnectHooks);for(let e of l.pubs)P(n,e);i||(u.length=0,w())}}},cause:void 0};return(j.cause=j.get((()=>C(j,D)))).cause=null,j};let S=0,O=e=>`${e}#${++S}`;function P(){return[].slice.call(arguments).reduce(((e,t)=>t(e)),this)}function I(e){const t=(t,n)=>e(t,n.state);return(this.__reatom.updateHooks??=new Set).add(t),()=>this.__reatom.updateHooks.delete(t)}function C(e){return this.onChange(((t,n)=>{const{params:r,payload:o}=n[n.length-1];e(t,o,r)}))}function j(e,t=O("_atom")){let n=(e,t)=>e.get(((r,o)=>o(e,n.__reatom,((e,n)=>{n.state="function"==typeof t?t(n.state,e):t})).state)),r=null;return"function"==typeof e&&(n={},r=e,e=void 0),n.__reatom={name:t,isAction:!1,patch:null,initState:()=>e,computer:r,connectHooks:null,disconnectHooks:null,updateHooks:null,actual:!1},n.pipe=P,n.onChange=I,n}const k=(e,t)=>{void 0!==e&&"string"!=typeof e||(t=e,e=(e,t)=>t),_(e);let n=j([],t??O("_action"));return n.__reatom.isAction=!0,n.__reatom.unstable_fn=e,Object.assign((function(){var e=[].slice.call(arguments);let t=n(e[0],((t,n)=>(e[0]=n,[...t,{params:e.slice(1),payload:n.cause.proto.unstable_fn(...e)}])));return t[t.length-1].payload}),n,{onCall:C})},D=j(void 0,"root").__reatom,R=()=>{},z=function(e){return void 0===e&&(e=0),new Promise((t=>setTimeout(t,e)))},M=e=>"object"==typeof e&&null!==e,N=function(e,t,n){if(void 0===n&&(n=Object.is),Object.is(e,t))return!0;if(!M(e)||!M(t)||e.__proto__!==t.__proto__||e instanceof Error)return!1;if(Symbol.iterator in e){let r=e instanceof Map?(e,t)=>n(e[0],t[0])&&n(e[1],t[1]):n,o=e[Symbol.iterator](),a=t[Symbol.iterator]();for(;;){let e=o.next(),t=a.next();if(e.done||t.done||!r(e.value,t.value))return e.done&&t.done}}if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return String(e)===String(t);for(let r in e)if(r in t==0||!n(e[r],t[r]))return!1;return Object.keys(e).length===Object.keys(t).length},$=Object.assign,x=function(){return Object.assign({},...[].slice.call(arguments))},{toString:H}=Object.prototype,T=(new WeakMap,e=>{if(e instanceof Error==0||"AbortError"!==e.name){if(e instanceof Error){var t={cause:e};e=e.message}else e=M(e)?H.call(e):String(e);"undefined"==typeof DOMException?(e=new Error(e,t)).name="AbortError":e=$(new DOMException(e,"AbortError"),t)}return e}),L=e=>{if(e?.signal.aborted)throw T(e.signal.reason)},B=e=>e instanceof Error&&"AbortError"===e.name;function F(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}class W extends WeakMap{has(e){return super.has(e)||null!==e.cause&&this.has(e.cause)}get(e){for(;!super.has(e)&&e.cause;)e=e.cause;return super.get(e)}}const G=new W,U=e=>G.get(e)??null,V=(e,t)=>{const n=U(e.cause);if(n){const r=()=>t(T(n.signal.reason)),o=()=>n.signal.removeEventListener("abort",r);if(!n.signal.aborted)return n.signal.addEventListener("abort",r),e.schedule((()=>n.signal.removeEventListener("abort",r)),-1),o;r()}},X=new WeakMap,q=(e,t,n,r)=>{let o=X.get(t);if(!o){const n=t.then((t=>(e.get(((e,n)=>o.then.forEach((r=>r(t,e,n))))),t)),(t=>{throw e.get(((e,n)=>o.catch.forEach((r=>r(t,e,n))))),B(t)&&n.catch(R),t}));X.set(t,o={promise:n,then:[],catch:[]}),X.set(n,o)}return n&&o.then.push(n),r&&o.catch.push(r),o.promise},J=Symbol(),K=function(e,t,n){void 0===n&&(n=(e,t)=>t);const r=[];return new Promise(((o,a)=>{r.push(V(e,a)??R,e.subscribe(t,(function(s){try{if(!r.length)return Promise.resolve();const i=F((function(){return t.__reatom.isAction&&(s=s[0].payload),Promise.resolve(s).then((function(t){const r=n(e,t,J);r!==J&&o(r)}))}),(function(e){a(e)}));return Promise.resolve(i&&i.then?i.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})))})).finally((()=>r.forEach((e=>e()))))},Z=e=>{const{schedule:t}=e;return x(e,{schedule(e,n){const r=this;if(-1===n)return t.call(this,e,n);let o,a;const s=new Promise(((e,t)=>{o=e,a=t})),i=V(this,(e=>{s.catch(R),a(e)}));return t.call(this,(function(t){try{function n(){i?.()}const s=U(r.cause),c=F((function(){return L(s),Promise.resolve(e(t)).then((function(e){L(s),o(e)}))}),(function(e){a(e)}));return Promise.resolve(c&&c.then?c.then(n):n())}catch(l){return Promise.reject(l)}}),n),s}})};Symbol();function Q(e,t){if(e)throw new Error(`Reatom error: ${t}`)}let Y=0,ee=e=>`${e}#${++Y}`;function te(){return[].slice.call(arguments).reduce(((e,t)=>t(e)),this)}function ne(e){const t=(t,n)=>e(t,n.state);return(this.__reatom.updateHooks??=new Set).add(t),()=>this.__reatom.updateHooks.delete(t)}function re(e,t){void 0===t&&(t=ee("_atom"));let n=(e,t)=>e.get(((r,o)=>o(e,n.__reatom,((e,n)=>{n.state="function"==typeof t?t(n.state,e):t})).state)),r=null;return"function"==typeof e&&(n={},r=e,e=void 0),n.__reatom={name:t,isAction:!1,patch:null,initState:()=>e,computer:r,connectHooks:null,disconnectHooks:null,updateHooks:null,actual:!1},n.pipe=te,n.onChange=ne,n}re(void 0,"root").__reatom;const oe=()=>{},ae=e=>"object"==typeof e&&null!==e,se=Object.assign,ie=function(){return Object.assign({},...[].slice.call(arguments))},{toString:ce}=Object.prototype,le=(new WeakMap,e=>{if(e instanceof Error==0||"AbortError"!==e.name){if(e instanceof Error){var t={cause:e};e=e.message}else e=ae(e)?ce.call(e):String(e);"undefined"==typeof DOMException?(e=new Error(e,t)).name="AbortError":e=se(new DOMException(e,"AbortError"),t)}return e});class ue extends WeakMap{has(e){return super.has(e)||null!==e.cause&&this.has(e.cause)}get(e){for(;!super.has(e)&&e.cause;)e=e.cause;return super.get(e)}}const fe=new ue,de=(new WeakMap,Symbol(),e=>null===e.cause?e:de(e.cause)),pe=e=>t=>{const{initState:n,isAction:r}=t.__reatom;return Q(r,"action state is not manageable"),t.__reatom.initState=t=>e(t,n),t},he=(e,t)=>{const n=o=>{const a=ie(o.get((t=>t(e.__reatom))),{cause:de(o.cause)}),s=new AbortController;fe.set(a,s);const i=t(ie(o,{cause:a,controller:s,isConnected:()=>me(o,e)}));i instanceof Promise&&i.catch(oe);const c=t=>{var a;a=t,de(o.cause)===de(a.cause)&&l.delete(c)&&r.has(n)&&(s.abort(le(`${e.__reatom.name} disconnect`)),"function"==typeof i&&i())},l=((e,t)=>(e.__reatom.disconnectHooks??=new Set).add(t))(e,c)},r=((e,t)=>(e.__reatom.connectHooks??=new Set).add(t))(e,n);return()=>r.delete(n)},me=(e,t)=>{let{__reatom:n}=t;return e.get((e=>{const t=n.patch??e(n);return!!t&&t.subs.size+t.listeners.size>0}))},ge=re(null,"isInit._initiatedAtom");ge.__reatom.initState=()=>new WeakSet;const be=(e,t,{shouldPending:n=!0,shouldFulfill:r=!0,shouldReject:o=!0,effect:a=e.__reatom.unstable_fn}={})=>{const s=e.pendingAtom,[i]=t;n&&s(i,(e=>++e));const c=i.schedule((()=>new Promise(((e,n)=>{L(i.controller),a(...t).then(e,n),i.controller.signal.addEventListener("abort",(()=>n(T(i.controller.signal.reason))))}))));return $(q(i,c,(t=>{r&&e.onFulfill(i,t),n&&s(i,(e=>--e))}),(t=>{o&&!B(t)&&e.onReject(i,t),n&&s(i,(e=>--e))})),{controller:i.controller})},ve=e=>t=>{const n=e(t);return N(t,n)?t:n},ye={isPending:!1,isFulfilled:!1,isRejected:!1,isSettled:!1,isFirstPending:!1,isEverPending:!1,isEverSettled:!1},_e=()=>e=>{if(!e.statusesAtom){const t=j(new WeakSet,`${e.__reatom.name}.statusesAtom._relatedPromisesAtom`),n=j(ye,`${e.__reatom.name}.statusesAtom`);n.__reatom.computer=(n,r)=>(n.spy(e,(({payload:o})=>{n.get(t).add(o),r=ve((t=>({isPending:n.get(e.pendingAtom)>0,isFulfilled:!1,isRejected:!1,isSettled:!1,isFirstPending:!t.isEverSettled,isEverPending:!0,isEverSettled:t.isEverSettled})))(r)})),r),e.statusesAtom=Object.assign(n,{reset:k((e=>(t(e,new Set),n(e,ye))))}),e.onCall(((r,o)=>{r.get(n),q(r,o,(()=>{r.get(t).has(o)&&n(r,ve((()=>{const t=r.get(e.pendingAtom)>0;return{isPending:t,isFulfilled:!t,isRejected:!1,isSettled:!t,isFirstPending:!1,isEverPending:!0,isEverSettled:!0}})))}),(()=>{r.get(t).has(o)&&n(r,ve((()=>{const t=r.get(e.pendingAtom)>0;return{isPending:t,isFulfilled:!1,isRejected:!t,isSettled:!t,isFirstPending:!1,isEverPending:!0,isEverSettled:!0}})))}))}))}return e},Ae=new WeakSet,Ee=(e,t=O("asyncAtom"))=>{const n=new W,r=Se((e=>{const t=n.get(e.cause);return v(!t,"reaction manual call"),t}),t),o=j(((t,o)=>{if(o&&!t.cause.pubs.length)return o;const s=[],i=x(t,{spy(e,n){v(n,"spy reactions are unsupported in AsyncReaction");const r=t.spy(e);return s.push(r),r}}),c=new AbortController,l=V(i,(e=>c.abort(e)));l&&c.signal.addEventListener("abort",l),G.set(i.cause,i.controller=c);const u=e(Z(i));u.catch(R),n.set(i.cause,u);const f=i.get(r.pendingAtom),d=i.get(r.onFulfill);let p=r(i,...s);p.controller.signal.addEventListener("abort",(()=>{a.cacheAtom?.options.ignoreAbort||c.abort(p.controller.signal.reason)}));const h=f===i.get(r.pendingAtom),m=i.get(r.onFulfill);return h&&c.abort(T("cached")),h&&d!==m&&(p=Object.assign(Promise.resolve(m[m.length-1].payload),{controller:c})),q(i,p,(()=>Ae.add(p)),(()=>Ae.add(p))).catch(R),o?.controller.abort(T("concurrent")),p}),`${t}._promiseAtom`);he(r,(e=>e.subscribe(o,R))),he(o,(e=>()=>{const t=e.get(o);t.controller.abort(e.controller.signal.reason),Ae.has(t)||we(e,o.__reatom)}));const a=Object.assign((e=>e.get(((t,n)=>{we(e,o.__reatom),n(e,o.__reatom,R);const a=e.get(r),s=a[a.length-1]?.payload;return v(!s,"unexpectedly failed invalidation. Please, report the issue"),s}))),r,{promiseAtom:o,init:e=>e.subscribe(o,R)});return Object.defineProperty(r,"_handleCache",{get:()=>a._handleCache}),a},we=(e,t)=>e.get(((n,r)=>{r(e,t,((e,t)=>{t.pubs=[],t.state=void 0}))})),Se=(e,t={})=>{const{name:n=O("async"),onEffect:r,onFulfill:o,onReject:a,onSettle:s}="string"==typeof t?{name:t}:t,i=j(0,`${n}.pendingAtom`),c=Object.assign((function(){var e=[].slice.call(arguments);return e[0].get(((t,n)=>{const{state:r}=n(e[0],c.__reatom,((t,n)=>{G.set(t.cause,t.controller=new AbortController);const r=V(e[0],(e=>{o?.catch(R),t.controller.abort(e)}));r&&t.controller.signal.addEventListener("abort",r),e[0]=Z(t);var o=c._handleCache?c._handleCache(...e):be(c,e);q(t,o,void 0,(()=>{u.__reatom.updateHooks.size>1&&o.catch(R)})),n.state=[...n.state,{params:e.slice(1),payload:o}]}));return r[r.length-1].payload}))}),k(e,n)),l=k(`${n}.onFulfill`),u=k(`${n}.onReject`),f=k(`${n}._onSettle`);return l.onCall((e=>f(e))),u.onCall((e=>f(e))),r&&c.onCall(((e,t,n)=>r(e,n,t))),o&&l.onCall(o),a&&u.onCall(a),s&&f.onCall(s),he(i,(e=>e.subscribe(c,R))),$(c,{onFulfill:l,onReject:u,onSettle:f,pendingAtom:i})};Se.from=(e,t={})=>(e.name.length>2&&("object"==typeof t?t.name??=e.name:t??=e.name),Se((function(t){return e(...[].slice.call(arguments,1))}),t));const Oe=(e,t)=>n=>{if(!n.dataAtom){const r=n.dataAtom=Object.assign(j(e,`${n.__reatom.name}.dataAtom`),{reset:k((t=>{r(t,e)}),`${n.__reatom.name}.dataAtom.reset`),mapFulfill:t});r.__reatom.computer=(e,r)=>(e.spy(n.onFulfill,(({payload:n})=>{r=t?t(e,n,r):n})),r),n.onFulfill.onCall((e=>{e.get(r)})),he(r,(e=>e.subscribe(n,R)))}return n};var Pe=function(){try{var t;return!!(null===(t=e().audienzz)||void 0===t?void 0:t.header)}catch(e){return!1}};function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ie(e,t,n[t])}))}return e}function je(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ke,De=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"adnz_debug";try{var n=e();try{if(!!n.localStorage.getItem(t))return!0}catch(e){}return!!new URLSearchParams(n.location.search).get(t)}catch(e){return!1}},Re=["background: white","font-weight: bold"],ze=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return je(Re).concat(je(t)).join(";")},Me={Tags:ze("color: black"),Success:ze("color: green"),Failure:ze("color: red"),Common:ze("color: black")};!function(e){e.DEBUG="Debug",e.SUCCESS="Success",e.Log="Log",e.ERROR="Error"}(ke||(ke={}));var Ne=function(e){return"%c".concat((t=e,Array.isArray(t)?t.join(", "):t),": %c%s %o");var t},$e=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e&&"object"==typeof e?Ce({},e):Array.isArray(e)?je(e):e}))},xe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;De()&&(o=console).log.apply(o,[Ne(e),Me.Tags,Me.Failure,ke.ERROR].concat(je($e(n))))},He=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;De()&&(o=console).log.apply(o,[Ne(e),Me.Tags,Me.Common,ke.Log].concat(je($e(n))))};function Te(t){try{var n=e().localStorage.getItem(t);if(null===n)return;return JSON.parse(n)}catch(e){return void He("loadState","Unable to load from local storage",e)}}function Le(t,n){try{var r=e(),o=JSON.stringify(n);r.localStorage.setItem(t,o)}catch(e){He("saveState","Unable to save to local storage",e)}}var Be,Fe="adnzHash",We=c(o.Hash,(function(){var t,n=Se((t=u((function(t){var r;return h(this,(function(o){switch(o.label){case 0:z(15e3).then((function(){return t.controller.abort("Timeout")})),o.label=1;case 1:return t.controller.signal.aborted?[3,3]:(r=function(){try{var t,n,r,o,a,s,i,c;return null!==(c=null===(i=e())||void 0===i||null===(s=i.digitalData)||void 0===s||null===(a=s.user)||void 0===a||null===(o=a[0])||void 0===o||null===(r=o.profile)||void 0===r||null===(n=r[0])||void 0===n||null===(t=n.profileInfo)||void 0===t?void 0:t.userHash)&&void 0!==c?c:null}catch(e){return null}}()||function(){try{var t,n,r,o;return null!==(o=null===(r=e())||void 0===r||null===(n=r.audienzz)||void 0===n||null===(t=n.dmp)||void 0===t?void 0:t.userHash)&&void 0!==o?o:null}catch(e){return null}}())?[2,r]:[4,z(100)];case 2:return o.sent(),[3,1];case 3:return[2,t.get(n.dataAtom)]}}))})),function(e){return t.apply(this,arguments)}),"convey.hash").pipe(Oe(""),_e());return n.dataAtom.pipe(pe((function(e){n(e);try{var t;return p(null!==(t=Te(Fe))&&void 0!==t?t:[""],1)[0]}catch(e){return""}}))),n.dataAtom.onChange((function(e,t){t&&Pe()&&Le(Fe,[t])})),n.onCall((function(e,t){return t.catch(R)})),n})),Ge="ast-tools",Ue=u((function(){var e,t,n;return h(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("https://ib.adnxs.com/getuidj",{credentials:"include"})];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),t=e.uid>0?e.uid:"",xe(Ge,"appnexus returned uid",{uid:t}),[2,t];case 3:return n=r.sent(),xe(Ge,"appnexus returned invalid answer",n),[2,""];case 4:return[2]}}))})),Ve=c(o.UID,(function(){var e=Se.from(Ue,"convey.uid").pipe(Oe(""),_e());return e.dataAtom.pipe(pe((function(t,n){return e(t),n(t)}))),e})),Xe=function(){var t;return null===(t=e().document.querySelector('link[rel="canonical"]'))||void 0===t?void 0:t.href},qe=function(){var t;return null===(t=e().document.querySelector('meta[name="adnz-canonical-url"]'))||void 0===t?void 0:t.content},Je=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=e();if(t){var r=qe(),o=Xe(),a=null!=r?r:o;return null!=a?a:n.location.href}return n.location.href},Ke=(Be=u((function(e,t,n,r){var o,a;return h(this,(function(s){switch(s.label){case 0:return o=new URL("".concat("https://api.adnz.co","/api/ws-convey/visitor-id")),t&&o.searchParams.set("url",t.toString()),n&&o.searchParams.set("profileHash",n.toString()),e&&o.searchParams.set("appnexusId",e.toString()),r&&0!==Number(r)&&!Number.isNaN(Number(r))&&o.searchParams.set("firstPartyVisitorId",r.toString()),[4,fetch(o.toString(),{method:"get",credentials:"include"})];case 1:return(a=s.sent()).status<200||a.status>=300?[2,null]:[2,a.text()]}}))})),function(e,t,n,r){return Be.apply(this,arguments)}),Ze="adnzVisitorId",Qe=c(o.VisitorId,(function(){var e=j("","convey.visitorId").pipe(pe((function(e){setTimeout((function(){t.init(e)}));try{var n;return p(null!==(n=Te(Ze))&&void 0!==n?n:[""],1)[0]}catch(e){return""}})));e.onChange((function(e,t){t&&Pe()&&Le(Ze,[t])}));var t=Ee(function(){var t=u((function(t){var n,r,o,a;return h(this,(function(s){switch(s.label){case 0:return n=t.spy(Ve.dataAtom),r=t.spy(We.dataAtom),o=t.get(e),[4,t.schedule((function(){return Ke(n,Je(),r,o)}))];case 1:return(a=s.sent())&&e(t,a),[2]}}))}));return function(e){return t.apply(this,arguments)}}(),"convey.visitorIdReaction");return e}));function Ye(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function et(){var t=e();try{return t.audienzz=t.audienzz||{},t.audienzz.pageImpressionId=t.audienzz.pageImpressionId||Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),t.audienzz.pageImpressionId}catch(e){return null}}const tt=()=>{},nt=e=>"object"==typeof e&&null!==e,rt=function(e,t,n){if(void 0===n&&(n=Object.is),Object.is(e,t))return!0;if(!nt(e)||!nt(t)||e.__proto__!==t.__proto__||e instanceof Error)return!1;if(Symbol.iterator in e){let r=e instanceof Map?(e,t)=>n(e[0],t[0])&&n(e[1],t[1]):n,o=e[Symbol.iterator](),a=t[Symbol.iterator]();for(;;){let e=o.next(),t=a.next();if(e.done||t.done||!r(e.value,t.value))return e.done&&t.done}}if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return String(e)===String(t);for(let r in e)if(r in t==0||!n(e[r],t[r]))return!1;return Object.keys(e).length===Object.keys(t).length},ot=function(e,t){return void 0===t&&(t=""),null!==e.cause&&e.cause.proto!==D?ot(e.cause,t+" <-- "+e.cause.proto.name??"unnamed"):t||"root"},at=()=>{let e=(new Date).getMilliseconds();return e=e.toString().padStart(3,"0"),`${(new Date).toLocaleTimeString()} ${e}ms`};let st=10**15;const it=function(e){let{debounce:t=500,getTimeStamp:n=at,limit:r=5e3,log:o=console.log,domain:a="",shouldGroup:s=!1,shouldLogGraph:i=!1}=void 0===e?{}:e;a&&(a=`(${a}) `);let c=[],l=!1,u=Date.now();return e=>{0!==Object.keys(e.changes).length&&(l||(l=!0,u=Date.now()),setTimeout((e=>{if(l=c.length!==e&&Date.now()-u<r,l)return;const t=c.length>0;console.groupCollapsed(`Reatom ${a}${e} transaction${e>1?"s":""}`),i&&(e=>{const t=new Set,n=r=>{!r.cause||r.cause.proto===D||r.cause.proto.name.startsWith("_")&&r.cause.proto.name.includes("._")||e.has(r.cause)||t.has(r.cause)||(n(r.cause),t.add(r.cause))};for(const t of e)n(t);const r=[...e],o=r.reduce(((e,t,n)=>Math.max(e,n-((t.cause&&r.indexOf(t.cause))??n))),0),a=20*o,s=Math.floor(o/r.length*a)+20;let i=30,c="",l=s;for(const e of r){const{isAction:t,name:n}=e.proto,r=t?n.endsWith(".onFulfill")?"#E6DC73":"#ffff80":"#151134";c+=`<circle cx="${s}" cy="${i}" r="10" fill="${r}" />`,c+=`<text x="${s+15}" y="${i+5}" font-size="10" fill="gray">${n}</text>`,i+=30,l=Math.max(l,s+10*n.length)}r.forEach(((e,t)=>{let{cause:n}=e;if(!n||n.proto===D||0===t)return;const o=r.indexOf(n);if(o<0)return;const i=30*o+30,l=Math.floor(s-(t-o)/r.length*a-10),u=Math.floor(30*(o+(t-o)/2))+30,f=30*t+30,d=Math.floor(s-10);c+=`<polyline points="${d},${i} ${l},${u} ${d},${f}" stroke="gray" fill="none" />`}));const u=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${i}" style="font-family: monospace;">${c}</svg>`)}`;console.log("%c                         ",`font-size:${i}px; background: url(${u}) no-repeat; font-family: monospace;`)})(new Set(c.flatMap((e=>{let{changes:t}=e;return Object.values(t)})).sort(((e,t)=>e.time-t.time)).map((e=>{let{patch:t}=e;return t}))));for(const{changes:e,time:n,error:r}of c){console.log(`%c ${n}`,`padding-left: calc(50% - ${n.length/2}em); font-size: 0.7rem;`),r&&console.error(r);let a=!1;Object.entries(e).forEach(((e,n,r)=>{let[i,c]=e;const l="payload"in c,u=(l?"background: #ffff80; color: #151134;":"background: #151134; color: white;")+"font-weight: 400; padding: 0.15em;  padding-right: 1ch;",f=i.replace(/(\d)*\./,""),d=f.replace(/\..*/,""),p=r[n+1]?.[0],h=p?.replace(/(\d)*\./,""),m=h?.startsWith(d);s&&!a&&m&&t&&(a=!0,console.groupCollapsed(`%c ${d}`,u));const g=l?c.payload:c.newState;console.groupCollapsed(`%c ${f}`,u),console.log(c),console.groupEnd(),l&&!rt(c.params,[g])&&o(...c.params),o(g),s&&!m&&a&&(a=!1,console.groupEnd())}))}console.log("\n\n","transactions:",c),console.groupEnd(),c=[]}),t,c.push(Object.assign(e,{time:n()}))))}};function ct(){var e=w();return De("adnz_reatom")&&function(e,t){let{devtools:n=!1,historyLength:r=10,domain:o="",log:a=it({domain:o}),showCause:s=!0,skip:i=(()=>!1),skipUnnamed:c=!0}=void 0===t?{}:t;const l=new WeakMap;let u;e.get((e=>u=e));const f=tt,d=e.subscribe(((t,n)=>{let o=-1;try{const f=new WeakMap,d={};for(;++o<t.length;){const e=t[o],{cause:n,proto:a,state:p}=e,{isAction:h}=a;let{name:m}=a;if(i(e))continue;if(!m||m.startsWith("_")||/\._/.test(m)){if(c)continue;m??="unnamed"}const g=u(a),b=f.has(a)?f.get(a):g?.state;if(f.set(a,p),Object.is(p,b)||h&&0===p.length)continue;let v=l.get(a)??[];if(r&&(v=v.slice(0,r-1),v.unshift(h?{...e,state:[...p]}:e),l.set(a,v)),!(g||"root"!==n.proto.name||h&&0!==p.length))continue;const y=d[`${o+1}.${m}`]={patch:e,history:v,time:(globalThis.performance??Date).now()+1/st--};if(h){const e=p.at(-1);y.params=e.params,y.payload=e.payload}else y.newState=p,y.oldState=b;y.patch=e,s&&(y.cause=ot(e))}a({error:n,changes:d,logs:t,ctx:e})}catch(n){console.error("Reatom/logger error with",t[o]),console.log(n)}}))}(e),e}var lt=function(){return c(o.Context,ct)};function ut(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ft=function(e,t){return Ye(Ce({},t),{events:window.btoa(JSON.stringify(e.map((function(e){var t=e.type,n=e.body;return{type:t,eventId:n.eventId,pageImpressionId:n.pageImpressionId,url:n.url,body:ut(e.body,["eventId","pageImpressionId","url"])}}))))})},dt=function(){var e=u((function(e,t){var n,r,o,a,s,i,c,l,u;return h(this,(function(f){n=new URL("".concat(e,"/batch")),r=!0,o=!1,a=void 0;try{for(s=Object.entries(t)[Symbol.iterator]();!(r=(i=s.next()).done);r=!0)c=p(i.value,2),l=c[0],null!=(u=c[1])&&n.searchParams.set(l,u.toString())}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return[2,fetch(n.toString(),{method:"get",credentials:"include"})]}))}));return function(t,n){return e.apply(this,arguments)}}(),pt=function(e){var t=j([],"convey.eventBuffer"),n=j(500,"convey.batchInterval"),r=k((function(e,r){var o,a=p(r,3),s=a[0],i=a[1],c=a[2],l={type:s,body:Ye(Ce({},i),{eventId:Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),pageImpressionId:null!==(o=et())&&void 0!==o?o:void 0,url:Je()}),important:c};t(e,(function(e){return je(e).concat([l])})),c&&n(e,500)}),"convey.addEvent"),o=k((function(e){var n=e.get(t);return t(e,[]),n}),"convey.popEvents"),a=Se(function(){var e=u((function(e){return h(this,(function(t){return[2,Promise.race([z(e.get(n)),K(e,n).then(z)])]}))}));return function(t){return e.apply(this,arguments)}}(),"convey.intervalTracker").pipe((({strategy:e="last-in-win"}={})=>t=>{if(!t.abort){const n=t.abortControllerAtom=j(((n,r=new AbortController)=>(n.spy(t,(({payload:o})=>{if("last-in-win"===e&&r){const e=r;n.schedule((()=>{e.abort(T("concurrent request (last-in-win)"))}))}if("first-in-win"===e&&r&&!r.settled)return void o.controller.abort(T("concurrent request (first-in-win)"));const a=()=>{r.settled=!0,t.onAbort(n,T(r.signal.reason))};(r=o.controller).signal.addEventListener("abort",a);const s=()=>r.signal.removeEventListener("abort",a);q(n,o,s,s)})),r)),`${t.__reatom.name}._abortControllerAtom`);t.onCall((e=>{e.get(n)})),t.abort=k(((e,t)=>{const r=e.get(n);if(r){const n=T(t);e.schedule((()=>r.abort(n)))}}),`${t.__reatom.name}.abort`),t.onAbort=k(`${t.__reatom.name}.onAbort`)}return t})()),s=k(function(){var t=u((function(t){var r;return h(this,(function(s){switch(s.label){case 0:r=function(){var r,s;return h(this,(function(i){switch(i.label){case 0:if(!(null!==(r=e(t))&&void 0!==r?r:{}).visitorId)return[3,4];s=o(t),i.label=1;case 1:return s.length>0?[4,dt("https://api.adnz.co/api/ws-events-sink",ft(s.splice(0,25),e(t)))]:[3,3];case 2:return i.sent(),[3,1];case 3:s.every((function(e){return!e.important}))&&n(t,(function(e){return Math.min(8e3,2*e)})),i.label=4;case 4:return[4,a(t)];case 5:return i.sent(),[2]}}))},s.label=1;case 1:return[5,m(r())];case 2:return s.sent(),[3,1];case 3:return[2]}}))}));return function(e){return t.apply(this,arguments)}}(),"convey.watch");return s(lt()),{event:function(e,t,n){return r(lt(),[e,t,n])},_addEventAction:r}},ht=c(o.Network,(function(){return pt((function(e){return{visitorId:e.get(Qe),hash:e.get(We.dataAtom),uid:e.get(Ve.dataAtom)}}))}));c(o.Publisher,(function(){return e().audienzz=e().audienzz||{},ht.event(r.PageImpression,{}),{}}))}();