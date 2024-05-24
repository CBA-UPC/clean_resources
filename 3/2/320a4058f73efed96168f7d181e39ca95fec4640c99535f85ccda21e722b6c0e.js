/*@license For license information please refer to node_modules~uitk-react-utils.licenses.txt*/
(self.webpackChunkblossom_flex_ui=self.webpackChunkblossom_flex_ui||[]).push([[79419],{70731:32926:function(e,n,t){t.r(n),t.d(n,{Level:function(){return r},MakeEgdsSizingLength:function(){return c},ResolutionStrategy:function(){return u},ScriptLoader:function(){return m},UitkContextProvider:function(){return b},UitkContextWrapper:function(){return y},UitkThemeProvider:function(){return k},analyticsTracker:function(){return o},checkScriptIsLoaded:function(){return v},classNames:function(){return i},documentHead:function(){return s},initGoogleMapsApi:function(){return S},initMapBoxApi:function(){return P},isElementVisible:function(){return A},liveAnnounce:function(){return d},loadScript:function(){return p},useUitkContext:function(){return h},validateChildTypeNames:function(){return M},validateChildTypes:function(){return L},validatePropType:);var o=function(e,n,t){if(e){var o=e.id,i=e.description,r=e.callback;e.localAnalyticsId&&(n=e.localAnalyticsId),o&&"function"==typeof r&&r("string"==typeof n&&""!==n?"".concat(o,".").concat(n):o,i||"",t)}};function i(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var t=[],o=this===window?void 0:this,r=0,a=e;r<a.length;r++){var c=a[r];if(c){var u=typeof c;if("string"===u){var l=c.split(" ");o&&l.length>1?t.push(i.apply(o,l)):t.push((null==o?void 0:o[c])||c)}else if(Array.isArray(c))[].concat.apply([],c).filter(Boolean).length&&t.push(i.apply(null!=o?o:null,c));else if("object"===u)if(c.toString===Object.prototype.toString)for(var d in c)({}).hasOwnProperty.call(c,d)&&c[d]&&t.push((null==o?void 0:o[d])||d);else t.push(c.toString())}}return t.join(" ")}var r,a={step:4,exceptions:[1,2,6,14,18]},c=function(e,n,t){void 0===n&&(n=!0),void 0===t&&(t=a);var o="string"==typeof e?Number(e.replace("px","")):e;if(t.exceptions.includes(o))return n?"".concat(o,"px"):o;var i=Math.round(o/t.step)*t.step;return n?"".concat(i,"px"):i};!r||(r={}));var u,l="uitk-live-announce",d=function(e,n,t,o,i){if(void 0===e&&(e=""),void 0===n&&(n=r.ASSERTIVE),void 0===t&&(t="is-visually-hidden"),"function"==typeof document.querySelector){var a=function(e,n){var t,o,i=document.createElement("div");i.id=e||l;var r=n?null===(t=document.body.querySelector("#".concat(e)))||void 0===t?void 0:t.parentNode:void 0,a=null===(o=document.body.querySelector("#".concat(l)))||void 0===o?void 0:o.parentNode;return r?r.querySelector("#".concat(e)):(null==n?void 0:n.current)?n.current.appendChild(i):a?document.body.querySelector("#".concat(l)):document.body.appendChild(i)}(i,o);a.textContent="",a.setAttribute("aria-live",n),a.setAttribute("class",t),a.textContent=e}},s=function(){return document.querySelector("head")||(e=document.createElement("head"),document.appendChild(e));var e};!u||(u={}));var p=function(e,n,t,o,i){void 0===t&&(t="temp-script"),void 0===o&&(o=u.ON_LOAD_EVENT),void 0===i&&(i=void 0);var r=new Promise((function(i,r){var a=document.getElementById(t);a&&a.remove();var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("id",t),c.setAttribute("src",e),c.async=!0,c.defer=!0,o===u.ON_LOAD_EVENT&&(c.onload=;var l=n?s():document.body;c.addEventListener("error",(function(){l.removeChild(c),o===u.IMMEDIATELY?console.error("Failed to load ".concat(e)):r(new Error("Failed to load ".concat(e)))})),l.appendChild(c),o===u.IMMEDIATELY&&i()}));if(i){var a=new Promise(();return Promise.race([r,a])}return r},v=function(e,n,t,o){return new Promise((function(i,r){var a=o.delay,c=o.maxRetries,u=o.retriesLeft,l=n(),d=t();l&&i(!0),d||r(new Error("".concat(e," is not loaded")));var s=null!=u?u:c;s>0?setTimeout((function(){return v(e,n,t,{delay:a,maxRetries:c,retriesLeft:s-1}).then(i).catch(r)}),a):r(new Error("".concat(e," was not detected as loaded after ").concat(a*c,"ms")))}))},m=function(){eturn e.getScript=function(e,n,t){return void 0===t&&(t=p),t(e,n).then(()},e}(),f=t(67294),g=f.createContext({context:null}),h=y=b=b.displayName="UitkContextProvider";var E=t(70731),w=t.n(E),x=i.bind(w()),k=function(e){var n,t,o,i,r,a,c,u,l=e.config,d=e.children,s=e.isColorThemeContainer,p=void 0!==s&&s,v=x(p&&"uitk-theme-provider-container",(null===(n=l.lightMode)||void 0===n?void 0:n.isThemeBase)&&!(null===(t=l.lightMode)||void 0===t?void 0:t.isGradient)&&"uitk-light-mode-is-base",(null===(o=l.darkMode)||void 0===o?void 0:o.isThemeBase)&&!(null===(i=l.darkMode)||void 0===i?void 0:i.isGradient)&&"uitk-dark-mode-is-base",(null===(r=l.lightMode)||void 0===r?void 0:r.isGradient)&&"uitk-light-mode-is-gradient",(null===(a=l.darkMode)||void 0===a?void 0:a.isGradient)&&"uitk-dark-mode-is-gradient");if(p)return f.createElement("section",{"data-theme-light":null===(c=l.lightMode)||void 0===c?void 0:c.colorTheme,"data-theme-dark":null===(u=l.darkMode)||void 0===u?void 0:u.colorTheme,className:v},d);var m=f.Children.map(d,(function(e){var n,t,o,i=null===(n=null==e?void 0:e.type)||void 0===n?void 0:n.displayName;if("UitkCard"===i||"UitkSheet"===i)return f.cloneElement(e,{className:v,"data-theme-light":null===(t=l.lightMode)||void 0===t?void 0:t.colorTheme,"data-theme-dark":null===(o=l.darkMode)||void 0===o?void 0:o.colorTheme})}));return f.createElement(f.Fragment,null,m)},L=function(e,n,t){if(e){var o=!0,i=n.map((function(e){return e.name})),r=function(e){var n;e&&e.type?i.includes(e.type.name)||(o=!1,console.error((n=e.type.name,"Invalid child type: <".concat(n," />\nExpected children of <").concat(t," />: ").concat(i.join(", "),";")))):o=!1};return f.Children.forEach(e,(),o}},M=T=function(e,n){if(e&&n){var t=Object.keys(n).map(().indexOf(e)>-1;return t||console.error(t,"Expected values: ".concat(Object.keys(n).join(", "))),t}},A=function(e){if(!e)return!1;var n=e.getBoundingClientRect(),t=n.top,o=n.bottom,i=window.innerHeight||document.documentElement.clientHeight;return(t>=0||o>0)&&t<i},C="https://maps.googleapis.com/maps/api/js?libraries=places,geometry",I=N=S=function(e,n,t){return new Promise((function(o,i){if(I()&&!e)o(!1);else if(N())v("google.maps",I,N,{delay:200,maxRetries:100}).then((function(){return o(!1)})).catch((function(e){return i(e)}));else{window.google=void 0,Array.prototype.slice.call(document.getElementsByTagName("script")).filter(().forEach((),window.googleMapsLoading=!0,window.googleMapsLoadedCallback=function(){window.googleMapsLoading=void 0,t||o(!0)};var r=function(e){var n,t,o,i=e.accessToken,r=e.mapId,a=e.version,c=e.locale;c&&(t=(n=/^([a-z]{2})((\-|\_)([A-Z]{2}))?$/.exec(c)||[])[1],o=n[4]);var u={callback:"googleMapsLoadedCallback",key:i,map_ids:r,channel:null,language:"".concat(null==t?void 0:t.toLowerCase()).concat(o?"-".concat(o.toUpperCase()):""),region:null==o?void 0:o.toUpperCase(),v:a||"quarterly"},l=Object.keys(u).filter(().map(().join("&");return"".concat(C).concat(C.indexOf("?")>0?"&":"?").concat(l)}(n),a=u.IMMEDIATELY;p(r,!0,"loading-google-maps",a).then(().catch(()}}))},j=function(){return window.mapboxgl},O=P=function(e,n,t){return new Promise((function(o){var i="load-mapbox";if(j()&&!e)o(!1);else if(O())v("mapboxgl",j,O,{delay:200,maxRetries:100}).then(();else{window.mapboxglLoading=!0,window.mapboxgl=void 0;var r=function(e){var n="2.9.2",t="1.0.0";return e&&e.split(";").forEach((function(e){var o=e.split(":"),i=o[0],r=o[1];switch(void 0===r&&(r=i,i="version"),i){case"version":n=r;break;case"mapbox-gl-language":t=r}})),{mapboxVersion:n,languagePluginVersion:t}}(n.version),a=function(e,n){return{jsUrl:"https://api.mapbox.com/mapbox-gl-js/v".concat(e,"/mapbox-gl.js"),cssUrl:"https://api.mapbox.com/mapbox-gl-js/v".concat(e,"/mapbox-gl.css"),pluginUrls:["https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-language/v".concat(n,"/mapbox-gl-language.js")]}}(r.mapboxVersion,r.languagePluginVersion),c=a.jsUrl,l=a.cssUrl,d=a.pluginUrls,m=s(),f=[],g=t?u.IMMEDIATELY:u.ON_LOAD_EVENT;c&&f.push(p(c,!0,i,g,1e4)),d.forEach((function(e,n){f.push(p(e,!0,"".concat(i,"-plugins-").concat(n),g,1e4))})),l&&f.push(new Promise((function(e){var n="".concat(i,"-style"),t=document.getElementById(n);t&&t.remove();var o=document.createElement("link");o.setAttribute("id",n),o.rel="stylesheet",o.href=l,m.appendChild(o),e()}))),Promise.all(f).then(()}}))},_=function(){document.body.classList.contains("uitk-no-outline")||(document.body.classList.add("uitk-no-outline"),document.body.removeEventListener("mousedown",_),document.body.addEventListener("keydown",U))},U=function(){document.body.classList.contains("uitk-no-outline")&&(document.body.classList.remove("uitk-no-outline"),document.body.removeEventListener("keydown",U),document.body.addEventListener("mousedown",_))};_()}}]);
//# sourceMappingURL=node_modules~uitk-react-utils.1979ca975ffe950bd360.js.map