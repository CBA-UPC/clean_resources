!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[9995],{59790:(e,t,r)=>{r.r(t),r.d(t,{initializeDevFeatureFlags:()=>f,saveFeatures:()=>d,uninstallTools:()=>w});var o=r(54138),n=r.n(o),a=r(33970),i=r.n(a),l=r(71581),s="redpop-ff";function u(e){if(!e){var t=new Date(0).toUTCString();return`${s}=; Path=/; SameSite=Strict; Expires=${t}`}return`${s}=${encodeURIComponent(JSON.stringify(e))}; Path=/; SameSite=Strict`}var c=()=>{var e,t=null===(e=document.cookie.split(";").find()||void 0===e?void 0:e.trim();if(!t)return{};try{var r=JSON.parse(decodeURIComponent(t.slice(`${s}=`.length)));if(!r||"[object Object]"!==Object.prototype.toString.call(r))return{};var o=new Set(Object.values(l.T)),n=Object.entries(r).flatMap(e=>{var t=i()(e,2),r=t[0],n=t[1];return o.has(r)&&"boolean"==typeof n?[[r,n]]:[]});return n.length?Object.fromEntries(n):{}}catch(e){return{}}},d=f=(e,t)=>{if(console.log("Want to change a feature flag?\n> %cwindow.setFeature('featureName', true);%c /* or */ %cwindow.setFeature.featureName = true","font-weight: bold","font-weight: normal","font-weight: bold"),console.log("Inspect current feature set with:\n> %cwindow.redpopFeatures","font-weight: bold"),console.log("Reset stored feature set with:\n> %cwindow.resetFeatures()","font-weight: bold"),console.log("Copy the feature flag URL with current overrides with:\n> %ccopy(window.getFeaturesUrl())","font-weight: bold"),!window.redpopFeatures){var r=n()({},e),o=c(),a=new URL(window.location.href);a.searchParams.has("_features")&&(a.searchParams.delete("_features"),window.history.replaceState(null,"",a),console.log("The `_features` query parameter has been cleared. Feature overrides are stored in a cookie.")),Object.keys(o).length>0&&(console.log("Overwritten feature flags:"),console.table(o));for(var s=(e,a)=>{var i=new Set(Object.values(l.T));return"string"==typeof e&&i.has(e)?"boolean"!=typeof a?console.error("Bad flag value: %o. Flags must be set to true or false",a):(console.log("setting %o to %o",e,a),o[e]=a,r[e]=a,d(o),t(t=>n()(n()({},t),{},{[e]:a})),a):console.error("Bad feature flag provided: %o. To list available features try:\n> %cwindow.redpopFeatures",e,"font-weight: bold")},f=0,w=Object.values(l.T);f<w.length;f++)!function(){var e=w[f];Object.defineProperty(s,e,{configurable:!1,enumerable:!1,get:set:)}();Object.defineProperties(window,{getFeaturesUrl:{configurable:!0,value:()=>{var e=Object.entries(o);if(!e.length)return window.location.href;var t=new URL(window.location.href),r=e.map(e=>{var t=i()(e,2),r=t[0],o=t[1];return`${o?"":"-"}${r}`}).join(",");return t.searchParams.set("_features",r),t.toString()}},redpopFeatures:{configurable:!0,get:,resetFeatures:{configurable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];document.cookie=u(null),Object.keys(o).length&&(e||confirm("This will refresh the page in order to clear feature flag overrides. Continue?\n\n(You can call `resetFeatures(true)` to skip this confirmation)"))&&window.location.reload()}},setFeature:{configurable:!0,value:s}})}},w=()=>{delete window.getFeaturesUrl,delete window.redpopFeatures,delete window.resetFeatures,delete window.setFeature}}}]);