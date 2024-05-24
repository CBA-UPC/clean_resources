(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5894,5058],{45622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let r=n(43219),i=(n(2784),r._(n(28728)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=i.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let s=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=s?s().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete r.webpack,delete r.modules,noSSR(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},91189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return s}});let r=n(43219),i=r._(n(2784)),s=i.default.createContext(null)},28728:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(43219),i=r._(n(2784)),s=n(91189),o=[],l=[],a=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function init(){if(!r){let t=new LoadableSubscription(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!a){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return init()})}function LoadableComponent(e,t){!function(){init();let e=i.default.useContext(s.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let o=i.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),i.default.useMemo(()=>{var t;return o.loading||o.error?i.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?i.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",i.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(o).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(a=!0,t());flushInitializers(l,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let u=Loadable},14258:function(e,t,n){var r=n(34406);n(81633);var i=n(2784),s=i&&"object"==typeof i&&"default"in i?i:{default:i};function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=void 0!==r&&r.env&&!0,isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function StyleSheet(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,s=void 0===i?o:i;invariant$1(isString(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",invariant$1("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var e,t=StyleSheet.prototype;return t.setOptimizeForSpeed=function(e){invariant$1("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(invariant$1(isString(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];invariant$1(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];invariant$1(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&invariant$1(isString(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},_defineProperties(StyleSheet.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e&&_defineProperties(StyleSheet,e),StyleSheet}();function invariant$1(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var stringHash=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},a={};function computeId(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return a[r]||(a[r]="jsx-"+stringHash(e+"-"+n)),a[r]}function computeSelector(e,t){var n=e+t;return a[n]||(a[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),a[n]}var u=function(){function StyleSheetRegistry(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var e=StyleSheetRegistry.prototype;return e.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=s,this._instancesCounts[r]=1},e.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},e.update=function(e,t){this.add(t),this.remove(e)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},e.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},e.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},e.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=computeId(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return computeSelector(i,e)}):[computeSelector(i,t)]}}return{styleId:computeId(r),rules:Array.isArray(t)?t:[t]}},e.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},StyleSheetRegistry}(),d=i.createContext(null);d.displayName="StyleSheetContext";var c=s.default.useInsertionEffect||s.default.useLayoutEffect,h=new u;function JSXStyle(e){var t=h||i.useContext(d);return t&&c(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}JSXStyle.dynamic=function(e){return e.map(function(e){return computeId(e[0],e[1])}).join(" ")},t.style=JSXStyle},37108:function(e,t,n){"use strict";e.exports=n(14258).style},81633:function(){},25237:function(e,t,n){e.exports=n(45622)},45847:function(e,t,n){e.exports=n(22898)}}]);
//# sourceMappingURL=5894-eb4efedefd8ed089.js.mapgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontColor: var(--evgBodyTextColor);
--evgInputSecondaryFontWeight: normal;
--evgInputSecondaryFontLineHeight: 1;
--evgInputSecondaryFontCapitalization: capitalize;
--evgInputBorderColor: var(--evgBorderColor);
--evgInputBorderFocusColor: var(--evgPrimaryColor);
--evgInputBorderRadius: 0;
--evgInputBackgroundColor: var(--evgLightColor);

/* RadioCheckbox */
--evgRadioCheckboxFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryBorderColor: var(--evgLightColor);
--evgRadioCheckboxSecondaryBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxFontFamily: Arial;
--evgRadioCheckboxFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontColor: var(--evgLightColor);
--evgRadioCheckboxFontWeight: normal;
--evgRadioCheckboxFontLineHeight: 1.2;
--evgRadioCheckboxFontCapitalization: none;
--evgRadioCheckboxBorderColor: var(--evgLightColor);
--evgRadioCheckboxBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxBorderRadius: 0;


/*** TEXT and HEADINGS ***/
/* Body */
--evgBodyFontFamily: Inter;
--evgBodyFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgBodyFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgBodyFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgBodyFontColor: var(--evgBodyTextColor);
--evgBodyFontWeight: normal;
--evgBodyLineHeight: 1.5;
--evgBodyCapitalization: none;

/* Link */
--evgLinkFontFamily: Inter;
--evgLinkFontSizeL: calc(var(--evgRootFontSize) * 1.2);
--evgLinkFontSizeM: calc(var(--evgRootFontSize) * 1.2);
--evgLinkFontSizeS: calc(var(--evgRootFontSize) * 1.2);

/* H1 */
--evgH1FontFamily: Inter;
--evgH1FontSizeL: calc(var(--evgRootFontSize) * 5.8);
--evgH1FontSizeM: calc(var(--evgRootFontSize) * 5.8);
--evgH1FontSizeS: calc(var(--evgRootFontSize) * 5.8);
--evgH1FontColor: var(--evgBodyTextColor);
--evgH1FontWeight: normal;
--evgH1LineHeight: 1.5;
--evgH1Capitalization: none;

/* H2 */
--evgH2FontFamily: Inter;
--evgH2FontSizeL: calc(var(--evgRootFontSize) * 3.6);
--evgH2FontSizeM: calc(var(--evgRootFontSize) * 3.6);
--evgH2FontSizeS: calc(var(--evgRootFontSize) * 3.6);
--evgH2FontColor: var(--evgBodyTextColor);
--evgH2FontWeight: normal;
--evgH2LineHeight: 1.5;
--evgH2Capitalization: none;

/* H3 */
--evgH3FontFamily: Lato;
--evgH3FontSizeL: calc(var(--evgRootFontSize) * 2.4);
--evgH3FontSizeM: calc(var(--evgRootFontSize) * 2.4);
--evgH3FontSizeS: calc(var(--evgRootFontSize) * 2.4);
--evgH3FontColor: var(--evgBodyTextColor);
--evgH3FontWeight: normal;
--evgH3LineHeight: 1.5;
--evgH3Capitalization: none;

/* H4 */
--evgH4FontFamily: Lato;
--evgH4FontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgH4FontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgH4FontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgH4FontColor: var(--evgBodyTextColor);
--evgH4FontWeight: normal;
--evgH4LineHeight: 1.5;
--evgH4Capitalization: none;

/* H5 */
--evgH5FontFamily: Lato;
--evgH5FontSizeL: calc(var(--evgRootFontSize) * 1.2);
--evgH5FontSizeM: calc(var(--evgRootFontSize) * 1.2);
--evgH5FontSizeS: calc(var(--evgRootFontSize) * 1.2);
--evgH5FontColor: var(--evgBodyTextColor);
--evgH5FontWeight: normal;
--evgH5LineHeight: 1.5;
--evgH5Capitalization: none;

}

/***** PARTIAL TEMPLATES *****/
:root {
/*** NAVIGATION ***/
/* Main */
--evgNavigationsMainSiteLogoUrl: url(https://investors.digitalocean.com/);
--evgNavigationsMainSiteLogoAltText: Logo Alt Text;
--evgNavigationsMainDropdownLinkFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgNavigationsMainSearchFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgNavigationsMainMobileLinkFontFamily: inherit; /* Empty or N/A */
--evgNavigationsMainMobileLinkFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgNavigationsMainMobileLinkFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgNavigationsMainMobileLinkFontWeight: normal;
--evgNavigationsMainMobileLinkFontStyle: normal;
--evgNavigationsMainMobileLinkLineHeight: 1.5;
--evgNavigationsMainMobileLinkCapitalization: none;
--evgNavigationsMainMobileLinkTextDecoration: none;
--evgNavigationsMainMobileLinkTextDecorationHover: none;
--evgNavigationsMainMobileLinkTextDecorationFocus: none;
--evgNavigationsMainLinkFontFamily: inherit; /* Empty or N/A */
--evgNavigationsMainLinkFontSize: calc(var(--evgRootFontSize) * 1.6);
--evgNavigationsMainLinkFontWeight: normal;
--evgNavigationsMainLinkFontStyle: normal;
--evgNavigationsMainLinkLineHeight: 1.5;
--evgNavigationsMainLinkCapitalization: none;
--evgNavigationsMainLinkTextDecoration: none;
--evgNavigationsMainLinkTextDecorationHover: none;
--evgNavigationsMainLinkTextDecorationFocus: none;
/* Secondary */
--evgNavigationsSecondaryLinkFontFamily: inherit; /* Empty or N/A */
--evgNavigationsSecondaryLinkFontSize: calc(var(--evgRootFontSize) * 1.6);
--evgNavigationsSecondaryLinkFontWeight: normal;
--evgNavigationsSecondaryLinkFontStyle: normal;
--evgNavigationsSecondaryLinkLineHeight: 1.5;
--evgNavigationsSecondaryLinkCapitalization: none;
--evgNavigationsSecondaryLinkTextDecoration: none;
--evgNavigationsSecondaryLinkTextDecorationHover: none;
--evgNavigationsSecondaryLinkTextDecorationFocus: none;
/* Footer */
--evgFooterPrimaryColor: var(--evgPrimaryColor);
--evgFooterSecondaryColor: var(--evgPrimaryColor);
--evgFooterBackgroundImage: url();
--evgFooterImagePosition: top left;
--evgFooterImageSizing: cover;
}

.evergreen-layout {
    --navigationsMainBackgroundColor: var(--evgNavigationsMainBackgroundPrescrollColor);
    --navigationsMainMobileBackgroundColor: var(--evgNavigationsMainMobileBackgroundPrescrollColor);
    --navigationsMainLinkColor: var(--evgNavigationsMainLinkPrescrollColor);
    --navigationsMainLinkHoverColor: var(--evgNavigationsMainLinkPrescrollHoverColor);
    --navigationsMainLinkFocusColor: var(--evgNavigationsMainLinkPrescrollFocusColor);
    --navigationsMainTextDecorationColor: var(--evgNavigationsMainLinkPrescrollTextDecorationColor);
    --navigationsMainTextDecorationHoverColor: var(--evgNavigationsMainLinkPrescrollTextDecorationHoverColor);
    --navigationsMainTextDecorationFocusColor: var(--evgNavigationsMainLinkPrescrollTextDecorationFocusColor);

    --navigationsSecondaryBackgroundColor: var(--evgNavigationsSecondaryBackgroundPrescrollColor);
    --navigationsSecondaryTabBackgroundColor: var(--evgNavigationsSecondaryTabBackgroundPrescrollColor);
    --navigationsSecondaryTabBackgroundHoverColor: var(--evgNavigationsSecondaryTabBackgroundPrescrollHoverColor);
    --navigationsSecondaryTabBackgroundFocusColor: var(--evgNavigationsSecondaryTabBackgroundPrescrollActiveColor);
    --navigationsSecondaryLinkColor: var(--evgNavigationsSecondaryLinkPrescrollColor);
    --navigationsSecondaryLinkHoverColor: var(--evgNavigationsSecondaryLinkPrescrollHoverColor);
    --navigationsSecondaryLinkFocusColor: var(--evgNavigationsSecondaryLinkPrescrollFocusColor);
    --navigationsSecondaryTextDecorationColor: var(--evgNavigationsSecondaryLinkPrescrollTextDecorationColor);
    --navigationsSecondaryTextDecorationHoverColor: var(--evgNavigationsSecondaryLinkPrescrollTextDecorationHoverColor);
    --navigationsSecondaryTextDecorationFocusColor: var(--evgNavigationsSecondaryLinkPrescrollTextDecorationFocusColor);
}

.evergreen-layout--scroll {
    --navigationsMainBackgroundColor: var(--evgNavigationsMainBackgroundScrollColor);
    --navigationsMainMobileBackgroundColor: var(--evgNavigationsMainMobileBackgroundScrollColor);
    --navigationsMainLinkColor: var(--evgNavigationsMainLinkScrollColor);
    --navigationsMainLinkHoverColor: var(--evgNavigationsMainLinkScrollHoverColor);
    --navigationsMainLinkFocusColor: var(--evgNavigationsMainLinkScrollFocusColor);
    --navigationsMainTextDecorationColor: var(--evgNavigationsMainLinkScrollTextDecorationColor);
    --navigationsMainTextDecorationHoverColor: var(--evgNavigationsMainLinkScrollTextDecorationHoverColor);
    --navigationsMainTextDecorationFocusColor: var(--evgNavigationsMainLinkScrollTextDecorationFocusColor);

    --navigationsSecondaryBackgroundColor: var(--evgNavigationsSecondaryBackgroundScrollColor);
    --navigationsSecondaryTabBackgroundColor: var(--evgNavigationsSecondaryTabBackgroundScrolllColor);
    --navigationsSecondaryTabBackgroundHoverColor: var(--evgNavigationsSecondaryTabBackgroundScrollHoverColor);
    --navigationsSecondaryTabBackgroundFocusColor: var(--evgNavigationsSecondaryTabBackgroundScrollActiveColor);
    --navigationsSecondaryLinkColor: var(--evgNavigationsSecondaryLinkScrollColor);
    --navigationsSecondaryLinkHoverColor: var(--evgNavigationsSecondaryLinkScrollHoverColor);
    --navigationsSecondaryLinkFocusColor: var(--evgNavigationsSecondaryLinkScrollFocusColor);
    --navigationsSecondaryTextDecorationColor: var(--evgNavigationsSecondaryLinkScrollTextDecorationColor);
    --navigationsSecondaryTextDecorationHoverColor: var(--evgNavigationsSecondaryLinkScrollTextDecorationHoverColor);
    --navigationsSecondaryTextDecorationFocusColor: var(--evgNavigationsSecondaryLinkScrollTextDecorationFocusColor);
}

.evergreen-section-item--logo img {
    height: 100%;
    display: block;
    margin: auto;
    object-fit: contain;
}

/* Navigation Section */
.evergreen-layout .evergreen-section.evergreen-section--navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--navigationsMainBackgroundColor);
}

.evergreen-pane.evergreen-pane--navigation {
    position: relative;

    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    gap: 56px;
    padding: 0 20px;
}

.evergreen-layout.evergreen-layout--scroll .evergreen-section.evergreen-section--navigation {
    --navigationBackgroundColor: var(--evgNavigationsMainBackgroundScrollColor);
}

.evergreen-pane.evergreen-pane--navigation .evergreen-section-item--logo {
    width: 250px;
    height: 60px;
    flex-shrink: 0;
}

.evergreen-pane.evergreen-pane--navigation .NavigationPaneDiv {
    flex-grow: 1;
    min-width: 32px;
}

/* MAIN NAVIGATION LINK STYLING -- DESKTOP */

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > a.evergreen-navigation-link,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > button.evergreen-navigation-button {
    font-family: var(--evgNavigationsMainLinkFontFamily);
    font-size: var(--evgNavigationsMainLinkFontSize);
    font-weight: var(--evgNavigationsMainLinkFontWeight);
    line-height: var(--evgNavigationsMainLinkLineHeight);
    font-style: var(--evgNavigationsMainLinkFontStyle);
    text-transform: var(--evgNavigationsMainLinkCapitalization);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > a.evergreen-navigation-link,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > button.evergreen-navigation-button .evergreen-navigation-button-text {
    text-decoration: var(--evgNavigationsMainLinkTextDecoration);
    text-decoration-color: var(--navigationsMainTextDecorationColor);
    text-decoration-thickness: 1px;
    color: var(--navigationsMainLinkColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > a.evergreen-navigation-link:hover,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > button.evergreen-navigation-button:hover .evergreen-navigation-button-text {
    text-decoration: var(--evgNavigationsMainLinkTextDecorationHover);
    text-decoration-color: var(--navigationsMainTextDecorationHoverColor);
    color: var(--navigationsMainLinkHoverColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > a.evergreen-navigation-link:focus,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > a.evergreen-navigation-link:focus-visible,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > button.evergreen-navigation-button:focus .evergreen-navigation-button-text,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > button.evergreen-navigation-button:focus-visible .evergreen-navigation-button-text {
    text-decoration: var(--evgNavigationsMainLinkTextDecorationFocus);
    text-decoration-color: var(--navigationsMainTextDecorationFocusColor);
    color: var(--navigationsMainLinkFocusColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li.selected,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li.expanded {
    border-bottom: var(--evgModuleItemUnderline);
    border-bottom-color: var(--evgModuleItemUnderlineColor);
}

/* Navigation Dropdowns */
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul li > button.evergreen-navigation-button .evergreen-navigation-button-icon {
    color: var(--evgNavigationsMainDropdownArrowColor);
    margin-left: 4px;
    font-size: 8px;
    vertical-align: middle;
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container li ul[class*='list--innerMenu'] {
    background: var(--evgNavigationsMainDropdownBackgroundColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > a.evergreen-navigation-link,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > button.evergreen-navigation-button .evergreen-navigation-button-text{
    color: var(--evgNavigationsMainDropdownLinkColor);
    text-decoration-color: var(--evgNavigationsMainDropdownLinkTextDecorationColor);
    font-size: var(--evgNavigationsMainDropdownLinkFontSizeL);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > a.evergreen-navigation-link:hover,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > button.evergreen-navigation-button:hover .evergreen-navigation-button-text {
    color: var(--evgNavigationsMainDropdownLinkHoverColor);
    text-decoration-color: var(--evgNavigationsMainDropdownLinkTextDecorationHoverColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > a.evergreen-navigation-link:focus,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > a.evergreen-navigation-link:focus-visible,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > button.evergreen-navigation-button:focus .evergreen-navigation-button-text,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container ul[class*='list--innerMenu'] li > button.evergreen-navigation-button:focus-visible .evergreen-navigation-button-text {
    color: var(--evgNavigationsMainDropdownLinkFocusColor);
    text-decoration-color: var(--evgNavigationsMainDropdownLinkTextDecorationFocusColor);
}

/* Navigation Search */
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container .evergreen-navigation-search--btn {
    color: var(--evgNavigationsMainSearchFontColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container .evergreen-navigation-search input {
    background: var(--evgNavigationsMainSearchBackgroundColor);
    color: var(--evgNavigationsMainSearchFontColor);
    font-size: var(--evgNavigationsMainSearchFontSizeL);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container .evergreen-navigation-search input::placeholder {
    color: var(--evgNavigationsMainSearchFontColor);
}

.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container .evergreen-navigation-search .q4-icon_search,
.evergreen-primary-navigation .evergreen-primary-navigation-desktop-container .evergreen-navigation-search .tooltip {
    color: var(--evgNavigationsMainDropdownArrowColor);
}

/* NAVIGATION LINK STYLING -- MOBILE */
/* Panel */
.evergreen-primary-navigation nav.evergreen-navigation-mobile,
.evergreen-primary-navigation nav.evergreen-navigation-mobile ul[class*='panel--innerMenu'] {
    background-color: var(--evgNavigationsMainMobileNavigationBackgroundColor)
}

/* Hamburger */
.evergreen-primary-navigation button.evergreen-primary-navigation-mobile-toggle {
    color: var(--evgNavigationsMainMobileHamburgerColor);
}

/* Icons */
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-icon,
.evergreen-primary-navigation .evergreen-navigation-mobile .panel-control .evergreen-navigation-button-text,
.evergreen-primary-navigation .evergreen-navigation-mobile--inner_toggle_container button.evergreen-primary-navigation-mobile-toggle {
    color: var(--evgNavigationsMainMobileNavigationColor);
}

/* Search */
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-mobile_search-container input {
    box-shadow: 0 0 0 30px var(--evgNavigationsMainMobileSearchBackgroundColor) inset;
    color: var(--evgNavigationsMainMobileSearchFontColor);
}

.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-mobile_search-container input::placeholder,
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-mobile_search-container .evergreen-icon {
    color: var(--evgNavigationsMainMobileSearchFontColor);
}

/* Links */
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-button-text,
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-link {
    color: var(--evgNavigationsMainMobileLinkColor);
    font-family: var(--evgNavigationsMainMobileLinkFontFamily);
    font-size: var(--evgNavigationsMainMobileLinkFontSizeM);
    font-weight: var(--evgNavigationsMainMobileLinkFontWeight);
    font-style: var(--evgNavigationsMainMobileLinkFontStyle);
    line-height: var(--evgNavigationsMainMobileLinkLineHeight);
    text-transform: var(--evgNavigationsMainMobileLinkCapitalization);
    text-decoration: var(--evgNavigationsMainMobileLinkTextDecoration);
    text-decoration-color: var(--evgNavigationsMainMobileLinkTextDecorationColor);
}

.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-button-text:hover,
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-link:hover {
    color: var(--evgNavigationsMainMobileLinkHoverColor);
    text-decoration: var(--evgNavigationsMainMobileLinkTextDecorationHover);
    text-decoration-color: var(--evgNavigationsMainMobileLinkTextDecorationHoverColor);
}

.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-button:focus .evergreen-navigation-button-text,
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-button:focus-visible .evergreen-navigation-button-text,
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-link:focus,
.evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-link:focus-visible {
    color: var(--evgNavigationsMainMobileLinkFocusColor);
    text-decoration: var(--evgNavigationsMainMobileLinkTextDecorationFocus);
    text-decoration-color: var(--evgNavigationsMainMobileLinkTextDecorationFocusColor);
}

.evergreen-primary-navigation .evergreen-navigation-mobile ul li.selected,
.evergreen-primary-navigation .evergreen-navigation-mobile ul li.expanded {
    border-bottom: var(--evgModuleItemUnderline);
    border-bottom-color: var(--evgModuleItemUnderlineColor);
}

@media only screen and (max-width: 1024px) {
    .evergreen-pane.evergreen-pane--navigation .evergreen-section-item--logo {
        width: 187px;
    }
}

@media only screen and (max-width: 480px) {
    .evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-button-text,
    .evergreen-primary-navigation .evergreen-navigation-mobile .evergreen-navigation-link {
        font-size: var(--evgNavigationsMainMobileLinkFontSizeS);
    }
}


/* SECONDARY NAVIGATION LINK STYLING -- DESKTOP */

/* Breadcrumbs Section */
.evergreen-pane.evergreen-pane--breadcrumb.evergreen-section--sticky {
    position: fixed;
    margin: 0 auto;
    padding: 0;
    width: 100%;
}

.evergreen-layout .evergreen-secondary-navigation {
    position: relative;
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    background-color: var(--navigationsSecondaryBackgroundColor);
}

.evergreen-layout.evergreen-layout--scroll .evergreen-secondary-navigation {
    --navigationBackgroundColor: var(--evgNavigationsMainBackgroundScrollColor);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li > a.evergreen-navigation-link {
    font-family: var(--evgNavigationsSecondaryLinkFontFamily);
    font-size: var(--evgNavigationsSecondaryLinkFontSize);
    font-weight: var(--evgNavigationsSecondaryLinkFontWeight);
    line-height: var(--evgNavigationsSecondaryLinkLineHeight);
    font-style: var(--evgNavigationsSecondaryLinkFontStyle);
    text-transform: var(--evgNavigationsSecondaryLinkCapitalization);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li {
    background-color: var(--navigationsSecondaryTabBackgroundColor);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li:hover,
.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li:focus,
.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li:focus-visible{
    background-color: var(--navigationsSecondaryTabBackgroundHoverColor);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li.selected,
.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li.expanded {
    background-color: var(--navigationsSecondaryTabBackgroundFocusColor);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li > a.evergreen-navigation-link {
    text-decoration: var(--evgNavigationsSecondaryLinkTextDecoration);
    text-decoration-color: var(--navigationsSecondaryTextDecorationColor);
    text-decoration-thickness: 1px;
    color: var(--navigationsSecondaryLinkColor);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li:hover > a.evergreen-navigation-link,
.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li:focus > a.evergreen-navigation-link,
.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li:focus-visible > a.evergreen-navigation-link {
    text-decoration: var(--evgNavigationsSecondaryLinkTextDecorationHover);
    text-decoration-color: var(--navigationsSecondaryTextDecorationHoverColor);
    color: var(--navigationsSecondaryLinkHoverColor);
}

.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li.selected > a.evergreen-navigation-link,
.evergreen-secondary-navigation .evergreen-secondary-navigation-container ul li.expanded > a.evergreen-navigation-link {
    text-decoration: var(--evgNavigationsSecondaryLinkTextDecorationFocus);
    text-decoration-color: var(--navigationsSecondaryTextDecorationFocusColor);
    color: var(--navigationsSecondaryLinkFocusColor);
}
:root {
/*** BANNERS ***/
/* Static */
--evgBannersStaticBackgroundImageAltText: inherit; /* Empty or N/A */
--evgBannersStaticBackgroundImagePosition: inherit; /* Empty or N/A */
--evgBannersStaticBackgroundImageSizing: inherit; /* Empty or N/A */
--evgBannersStaticMinimumHeightSizeL: px;
--evgBannersStaticMinimumHeightSizeM: px;
--evgBannersStaticMinimumHeightSizeS: px;
}

.evergreen-section.evergreen-section--banner {
    position: relative;
}

// TODO: This can be removed once the breadcrumb section has its own handlebars
.evergreen-section.evergreen-section--breadcrumb {
    position: relative;
}

.evergreen-layout .evergreen-layout-header
{
    --staticBannerBackgroundImage: var(--evgBannersStaticBackgroundImageUrl);
    --staticBannerBackgroundColor: var(--evgBannersStaticBackgroundColor);
    --staticBannerImagePosition: var(--evgBannersStaticBackgroundImagePosition);
    --staticBannerImageSizing: var(--evgBannersStaticBackgroundImageSizing);
    --staticBannerOverlayColor: var(--evgBannersStaticBackgroundOverlayColor);
    --staticBannerMinimumHeightSizeL: var(--evgBannersStaticMinimumHeightSizeL);
    --staticBannerMinimumHeightSizeM: var(--evgBannersStaticMinimumHeightSizeM);
    --staticBannerMinimumHeightSizeS: var(--evgBannersStaticMinimumHeightSizeS);

    background-repeat: no-repeat;
    background-image: var(--staticBannerBackgroundImage);
    background-color: var(--staticBannerBackgroundColor);
    background-position: var(--staticBannerImagePosition);
    background-size: var(--staticBannerImageSizing);
    min-height: var(--staticBannerMinimumHeightSizeL);
}

.evergreen-layout .evergreen-layout-header:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--staticBannerOverlayColor);
}

/** Responsive Tablet **/
@media (min-width: 481px) and (max-width: 1024px){
    .evergreen-layout .evergreen-layout-header {
        min-height: var(--staticBannerMinimumHeightSizeM);
    }
}

/** Responsive Mobile **/
@media (max-width: 480px){
    .evergreen-layout .evergreen-layout-header {
        min-height: var(--staticBannerMinimumHeightSizeS);
    }
}:root {
/*** SLIDERS ***/
/* Body */
--evgBodyFontColor: var(--evgBodyTextColor);
/* Hyperlink */
--evgHyperlinkFontFamily: Inter;
--evgHyperlinkFontSizeL: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeM: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeS: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontColor: var(--evgAltColor);
--evgHyperlinkFontHoverColor: var(--evgPrimaryColor);
--evgHyperlinkFontFocusColor: var(--evgAltColor);
--evgHyperlinkFontWeight: normal;
--evgHyperlinkFontStyle: normal;
--evgHyperlinkFontLineHeight: 1.3;
--evgHyperlinkFontCapitalization: none;
--evgHyperlinkDecorationTextDecoration: none;
--evgHyperlinkDecorationTextDecorationHover: none;
--evgHyperlinkDecorationTextDecorationFocus: none;
--evgHyperlinkDecorationTextDecorationColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationHoverColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationFocusColor: var(--evgInheritColor);
/* Button */
--evgButtonFontFamily: Inter;
--evgButtonFontSizeL: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontSizeM: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontSizeS: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontColor: var(--evgLightColor);
--evgButtonFontHoverColor: var(--evgLightColor);
--evgButtonFontFocusColor: var(--evgLightColor);
--evgButtonFontWeight: normal;
--evgButtonFontStyle: normal;
--evgButtonFontLineHeight: 1.3;
--evgButtonFontCapitalization: none;
--evgButtonBorderColor: var(--evgPrimaryColor);
--evgButtonBorderHoverColor: var(--evgAltColor);
--evgButtonBorderFocusColor: var(--evgAltColor);
--evgButtonBorderRadius: 0;
--evgButtonBackgroundColor: var(--evgPrimaryColor);
--evgButtonBackgroundHoverColor: var(--evgAltColor);
--evgButtonBackgroundFocusColor: var(--evgAltColor);
--evgButtonPaddingItemPadding: initial;
--evgButtonPaddingVerticalPadding: 20px;
--evgButtonDecorationTextDecoration: none;
--evgButtonDecorationTextDecorationHover: none;
--evgButtonDecorationTextDecorationFocus: none;
--evgButtonDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationFocusColor: var(--evgLightColor);
/* ButtonAlt */
--evgButtonAltFontFamily: Inter;
--evgButtonAltFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontColor: var(--evgPrimaryColor);
--evgButtonAltFontHoverColor: var(--evgLightColor);
--evgButtonAltFontFocusColor: var(--evgLightColor);
--evgButtonAltFontWeight: normal;
--evgButtonAltFontStyle: normal;
--evgButtonAltFontLineHeight: 1.3;
--evgButtonAltFontCapitalization: none;
--evgButtonAltBorderColor: var(--evgLightColor);
--evgButtonAltBorderHoverColor: var(--evgPrimaryColor);
--evgButtonAltBorderFocusColor: var(--evgPrimaryColor);
--evgButtonAltBorderRadius: 0;
--evgButtonAltBackgroundColor: var(--evgLightColor);
--evgButtonAltBackgroundHoverColor: var(--evgPrimaryColor);
--evgButtonAltBackgroundFocusColor: var(--evgPrimaryColor);
--evgButtonAltPaddingItemPadding: initial;
--evgButtonAltPaddingVerticalPadding: 20px;
--evgButtonAltDecorationTextDecoration: none;
--evgButtonAltDecorationTextDecorationHover: none;
--evgButtonAltDecorationTextDecorationFocus: none;
--evgButtonAltDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationFocusColor: var(--evgLightColor);
/* Dropdown */
--evgDropdownFontFamily: Inter;
--evgDropdownFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontColor: var(--evgAltColor);
--evgDropdownFontFocusColor: var(--evgAltColor);
--evgDropdownFontWeight: normal;
--evgDropdownFontLineHeight: 1.3;
--evgDropdownFontCapitalization: none;
--evgDropdownBorderColor: var(--evgAltColor);
--evgDropdownBorderFocusColor: var(--evgAltColor);
--evgDropdownBorderRadius: 0;
--evgDropdownBackgroundColor: var(--evgDarkOverlayColor);
--evgDropdownBackgroundFocusColor: var(--evgDarkOverlayColor);
/* Accordion */
--evgAccordionContentFontColor: var(--evgBodyTextColor);
--evgAccordionContentBackgroundColor: var(--evgDarkColor);
--evgAccordionFontFamily: Inter;
--evgAccordionFontSizeL: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeM: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeS: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontColor: var(--evgAltColor);
--evgAccordionFontAltColor: var(--evgPrimaryColor);
--evgAccordionFontFocusColor: var(--evgAltColor);
--evgAccordionFontWeight: normal;
--evgAccordionFontStyle: normal;
--evgAccordionFontLineHeight: 1.5;
--evgAccordionFontCapitalization: none;
--evgAccordionSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontColor: var(--evgAltColor);
--evgAccordionSecondaryFontAltColor: var(--evgAltColor);
--evgAccordionSecondaryFontWeight: normal;
--evgAccordionSecondaryFontStyle: normal;
--evgAccordionSecondaryFontLineHeight: 1.3;
--evgAccordionSecondaryFontCapitalization: none;
--evgAccordionSecondaryFontActiveColor: alt;
--evgAccordionBorderColor: var(--evgBorderColor);
--evgAccordionBorderHoverColor: var(--evgBorderColor);
--evgAccordionBorderFocusColor: var(--evgBorderColor);
--evgAccordionBorderActiveColor: var(--evgBorderColor);
--evgAccordionBorderRadius: 0px;
--evgAccordionBackgroundColor: var(--evgLightColor);
--evgAccordionBackgroundHoverColor: var(--evgLightColor);
--evgAccordionBackgroundFocusColor: var(--evgLightColor);
--evgAccordionBackgroundActiveColor: var(--evgLightColor);
--evgAccordionPaddingItemPadding: 20px;
/* Tabs */
--evgTabsFontFamily: Inter;
--evgTabsFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontColor: var(--evgLightColor);
--evgTabsFontAltColor: var(--evgPrimaryColor);
--evgTabsFontHoverColor: var(--evgPrimaryColor);
--evgTabsFontWeight: normal;
--evgTabsFontLineHeight: 1.3;
--evgTabsFontCapitalization: none;
--evgTabsBorderRadius: 0;
--evgTabsBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundHoverColor: var(--evgLightColor);
--evgTabsSecondaryBackgroundActiveColor: var(--evgLightColor);
/* List */
--evgListBulletStyle: disc;
--evgListBulletColor: var(--evgPrimaryColor);
--evgListFontFamily: Inter;
--evgListFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgListFontColor: var(--evgBodyTextColor);
--evgListFontWeight: normal;
--evgListFontStyle: normal;
--evgListFontLineHeight: 1.5;
--evgListFontCapitalization: none;
--evgListDecorationTextDecoration: none;
--evgListDecorationTextDecorationHover: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationFocus: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationColor: var(--evgInheritColor);
/* Table */
--evgTableZebra: initial;
--evgTableRowUnderline: initial;
--evgTableFontFamily: Inter;
--evgTableFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontColor: var(--evgLightColor);
--evgTableFontWeight: normal;
--evgTableFontLineHeight: 1;
--evgTableFontCapitalization: none;
--evgTableSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontColor: var(--evgBodyTextColor);
--evgTableSecondaryFontAltColor: var(--evgBodyTextColor);
--evgTableSecondaryFontWeight: normal;
--evgTableSecondaryFontCapitalization: none;
--evgTableBorderColor: var(--evgBodyTextColor);
--evgTableBorderRadius: initial;
--evgTableBackgroundColor: var(--evgPrimaryColor);
--evgTableBackgroundAltColor: var(--evgBorderColor);
--evgTableSecondaryBackgroundColor: var(--evgLightColor);
--evgTableSecondaryBackgroundAltColor: var(--evgGreyColor);
/* StockChart */
--evgStockChartStockChartMainColor: var(--evgPrimaryColor);
--evgStockChartStockChartMarkerColor: var(--evgAltColor);
--evgStockChartStockChartDividerColor: var(--evgGreyColor);
--evgStockChartStockChartTimelineSelectorColor: var(--evgPrimaryColor);
--evgStockChartFontFamily: Inter;
--evgStockChartFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontColor: var(--evgBodyTextColor);
--evgStockChartFontWeight: normal;
--evgStockChartBackgroundColor: var(--evgLightColor);
/* Pagination */
--evgPaginationFontFamily: Inter;
--evgPaginationFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontColor: var(--evgPrimaryColor);
--evgPaginationFontAltColor: var(--evgLightColor);
--evgPaginationFontHoverColor: var(--evgLightColor);
--evgPaginationFontWeight: normal;
--evgPaginationBorderColor: var(--evgPrimaryColor);
--evgPaginationBorderHoverColor: var(--evgPrimaryColor);
--evgPaginationBorderActiveColor: var(--evgPrimaryColor);
--evgPaginationBorderRadius: 0;
--evgPaginationBackgroundColor: var(--evgLightColor);
--evgPaginationBackgroundHoverColor: var(--evgPrimaryColor);
--evgPaginationBackgroundActiveColor: var(--evgPrimaryColor);
/* Input */
--evgInputPlaceholderColor: var(--evgGreyColor);
--evgInputFontFamily: Inter;
--evgInputFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontColor: var(--evgBodyTextColor);
--evgInputFontWeight: normal;
--evgInputFontLineHeight: 1;
--evgInputFontCapitalization: none;
--evgInputSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontColor: var(--evgBodyTextColor);
--evgInputSecondaryFontWeight: normal;
--evgInputSecondaryFontLineHeight: 1;
--evgInputSecondaryFontCapitalization: capitalize;
--evgInputBorderColor: var(--evgBorderColor);
--evgInputBorderFocusColor: var(--evgPrimaryColor);
--evgInputBorderRadius: 0;
--evgInputBackgroundColor: var(--evgLightColor);
/* RadioCheckbox */
--evgRadioCheckboxFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryBorderColor: var(--evgLightColor);
--evgRadioCheckboxSecondaryBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxFontFamily: Arial;
--evgRadioCheckboxFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontColor: var(--evgLightColor);
--evgRadioCheckboxFontWeight: normal;
--evgRadioCheckboxFontLineHeight: 1.2;
--evgRadioCheckboxFontCapitalization: none;
--evgRadioCheckboxBorderColor: var(--evgLightColor);
--evgRadioCheckboxBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxBorderRadius: 0;
}


.evergreen-slider-description a {
    --fontSize: var(--evgHyperlinkFontSizeL);
    --fontFamily: var(--evgHyperlinkFontFamily);
    --fontColor: var(--evgHyperlinkFontColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --fontStyle: var(--evgHyperlinkFontStyle);
    --lineHeight: var(--evgHyperlinkFontLineHeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-style: var(--fontStyle);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);

    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen-slider-arrow {
    color: var(--evgHyperlinkFontColor);
}

.evergreen-slider-description a:not([class*="evergreen-button"]):hover
{
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen-slider-description a:not([class*="evergreen-button"]):focus,
.evergreen-slider-description a:not([class*="evergreen-button"]):focus-visible
{
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);

}


.evergreen-slider-bottom-controls {
  --borderColor: var(--evgPaginationBorderColor);
  --backgroundColor: var(--evgPaginationBackgroundColor);
  --backgroundActiveColor: var(--evgPaginationBackgroundActiveColor);
}

.evergreen-slider-bottom-controls .slick_autoplay-ctrl button:before {
    color: var(--backgroundColor);
    color: var(--backgroundActiveColor);
}

.evergreen-slider-bottom-controls .evergreen-slider-dots li button {
    background-color: var(--backgroundColor);
    border: 1px solid var(--borderColor);
}

.evergreen-slider-bottom-controls .evergreen-slider-dots .slick-active button {
    background-color: var(--backgroundActiveColor);
}:root {
/*** TABLES ***/
/* Body */
--evgBodyFontColor: var(--evgBodyTextColor);
/* Hyperlink */
--evgHyperlinkFontFamily: Inter;
--evgHyperlinkFontSizeL: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeM: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeS: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontColor: var(--evgAltColor);
--evgHyperlinkFontHoverColor: var(--evgPrimaryColor);
--evgHyperlinkFontFocusColor: var(--evgAltColor);
--evgHyperlinkFontWeight: normal;
--evgHyperlinkFontStyle: normal;
--evgHyperlinkFontLineHeight: 1.3;
--evgHyperlinkFontCapitalization: none;
--evgHyperlinkDecorationTextDecoration: none;
--evgHyperlinkDecorationTextDecorationHover: none;
--evgHyperlinkDecorationTextDecorationFocus: none;
--evgHyperlinkDecorationTextDecorationColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationHoverColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationFocusColor: var(--evgInheritColor);
/* Button */
--evgButtonFontFamily: Inter;
--evgButtonFontSizeL: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontSizeM: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontSizeS: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontColor: var(--evgLightColor);
--evgButtonFontHoverColor: var(--evgLightColor);
--evgButtonFontFocusColor: var(--evgLightColor);
--evgButtonFontWeight: normal;
--evgButtonFontStyle: normal;
--evgButtonFontLineHeight: 1.3;
--evgButtonFontCapitalization: none;
--evgButtonBorderColor: var(--evgPrimaryColor);
--evgButtonBorderHoverColor: var(--evgAltColor);
--evgButtonBorderFocusColor: var(--evgAltColor);
--evgButtonBorderRadius: 0;
--evgButtonBackgroundColor: var(--evgPrimaryColor);
--evgButtonBackgroundHoverColor: var(--evgAltColor);
--evgButtonBackgroundFocusColor: var(--evgAltColor);
--evgButtonPaddingItemPadding: initial;
--evgButtonPaddingVerticalPadding: 20px;
--evgButtonDecorationTextDecoration: none;
--evgButtonDecorationTextDecorationHover: none;
--evgButtonDecorationTextDecorationFocus: none;
--evgButtonDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationFocusColor: var(--evgLightColor);
/* ButtonAlt */
--evgButtonAltFontFamily: Inter;
--evgButtonAltFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontColor: var(--evgPrimaryColor);
--evgButtonAltFontHoverColor: var(--evgLightColor);
--evgButtonAltFontFocusColor: var(--evgLightColor);
--evgButtonAltFontWeight: normal;
--evgButtonAltFontStyle: normal;
--evgButtonAltFontLineHeight: 1.3;
--evgButtonAltFontCapitalization: none;
--evgButtonAltBorderColor: var(--evgLightColor);
--evgButtonAltBorderHoverColor: var(--evgPrimaryColor);
--evgButtonAltBorderFocusColor: var(--evgPrimaryColor);
--evgButtonAltBorderRadius: 0;
--evgButtonAltBackgroundColor: var(--evgLightColor);
--evgButtonAltBackgroundHoverColor: var(--evgPrimaryColor);
--evgButtonAltBackgroundFocusColor: var(--evgPrimaryColor);
--evgButtonAltPaddingItemPadding: initial;
--evgButtonAltPaddingVerticalPadding: 20px;
--evgButtonAltDecorationTextDecoration: none;
--evgButtonAltDecorationTextDecorationHover: none;
--evgButtonAltDecorationTextDecorationFocus: none;
--evgButtonAltDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationFocusColor: var(--evgLightColor);
/* Dropdown */
--evgDropdownFontFamily: Inter;
--evgDropdownFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontColor: var(--evgAltColor);
--evgDropdownFontFocusColor: var(--evgAltColor);
--evgDropdownFontWeight: normal;
--evgDropdownFontLineHeight: 1.3;
--evgDropdownFontCapitalization: none;
--evgDropdownBorderColor: var(--evgAltColor);
--evgDropdownBorderFocusColor: var(--evgAltColor);
--evgDropdownBorderRadius: 0;
--evgDropdownBackgroundColor: var(--evgDarkOverlayColor);
--evgDropdownBackgroundFocusColor: var(--evgDarkOverlayColor);
/* Accordion */
--evgAccordionContentFontColor: var(--evgBodyTextColor);
--evgAccordionContentBackgroundColor: var(--evgDarkColor);
--evgAccordionFontFamily: Inter;
--evgAccordionFontSizeL: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeM: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeS: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontColor: var(--evgAltColor);
--evgAccordionFontAltColor: var(--evgPrimaryColor);
--evgAccordionFontFocusColor: var(--evgAltColor);
--evgAccordionFontWeight: normal;
--evgAccordionFontStyle: normal;
--evgAccordionFontLineHeight: 1.5;
--evgAccordionFontCapitalization: none;
--evgAccordionSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontColor: var(--evgAltColor);
--evgAccordionSecondaryFontAltColor: var(--evgAltColor);
--evgAccordionSecondaryFontWeight: normal;
--evgAccordionSecondaryFontStyle: normal;
--evgAccordionSecondaryFontLineHeight: 1.3;
--evgAccordionSecondaryFontCapitalization: none;
--evgAccordionSecondaryFontActiveColor: alt;
--evgAccordionBorderColor: var(--evgBorderColor);
--evgAccordionBorderHoverColor: var(--evgBorderColor);
--evgAccordionBorderFocusColor: var(--evgBorderColor);
--evgAccordionBorderActiveColor: var(--evgBorderColor);
--evgAccordionBorderRadius: 0px;
--evgAccordionBackgroundColor: var(--evgLightColor);
--evgAccordionBackgroundHoverColor: var(--evgLightColor);
--evgAccordionBackgroundFocusColor: var(--evgLightColor);
--evgAccordionBackgroundActiveColor: var(--evgLightColor);
--evgAccordionPaddingItemPadding: 20px;
/* Tabs */
--evgTabsFontFamily: Inter;
--evgTabsFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontColor: var(--evgLightColor);
--evgTabsFontAltColor: var(--evgPrimaryColor);
--evgTabsFontHoverColor: var(--evgPrimaryColor);
--evgTabsFontWeight: normal;
--evgTabsFontLineHeight: 1.3;
--evgTabsFontCapitalization: none;
--evgTabsBorderRadius: 0;
--evgTabsBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundHoverColor: var(--evgLightColor);
--evgTabsSecondaryBackgroundActiveColor: var(--evgLightColor);
/* List */
--evgListBulletStyle: disc;
--evgListBulletColor: var(--evgPrimaryColor);
--evgListFontFamily: Inter;
--evgListFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgListFontColor: var(--evgBodyTextColor);
--evgListFontWeight: normal;
--evgListFontStyle: normal;
--evgListFontLineHeight: 1.5;
--evgListFontCapitalization: none;
--evgListDecorationTextDecoration: none;
--evgListDecorationTextDecorationHover: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationFocus: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationColor: var(--evgInheritColor);
/* Table */
--evgTableZebra: initial;
--evgTableRowUnderline: initial;
--evgTableFontFamily: Inter;
--evgTableFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontColor: var(--evgLightColor);
--evgTableFontWeight: normal;
--evgTableFontLineHeight: 1;
--evgTableFontCapitalization: none;
--evgTableSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontColor: var(--evgBodyTextColor);
--evgTableSecondaryFontAltColor: var(--evgBodyTextColor);
--evgTableSecondaryFontWeight: normal;
--evgTableSecondaryFontCapitalization: none;
--evgTableBorderColor: var(--evgBodyTextColor);
--evgTableBorderRadius: initial;
--evgTableBackgroundColor: var(--evgPrimaryColor);
--evgTableBackgroundAltColor: var(--evgBorderColor);
--evgTableSecondaryBackgroundColor: var(--evgLightColor);
--evgTableSecondaryBackgroundAltColor: var(--evgGreyColor);
/* StockChart */
--evgStockChartStockChartMainColor: var(--evgPrimaryColor);
--evgStockChartStockChartMarkerColor: var(--evgAltColor);
--evgStockChartStockChartDividerColor: var(--evgGreyColor);
--evgStockChartStockChartTimelineSelectorColor: var(--evgPrimaryColor);
--evgStockChartFontFamily: Inter;
--evgStockChartFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontColor: var(--evgBodyTextColor);
--evgStockChartFontWeight: normal;
--evgStockChartBackgroundColor: var(--evgLightColor);
/* Pagination */
--evgPaginationFontFamily: Inter;
--evgPaginationFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontColor: var(--evgPrimaryColor);
--evgPaginationFontAltColor: var(--evgLightColor);
--evgPaginationFontHoverColor: var(--evgLightColor);
--evgPaginationFontWeight: normal;
--evgPaginationBorderColor: var(--evgPrimaryColor);
--evgPaginationBorderHoverColor: var(--evgPrimaryColor);
--evgPaginationBorderActiveColor: var(--evgPrimaryColor);
--evgPaginationBorderRadius: 0;
--evgPaginationBackgroundColor: var(--evgLightColor);
--evgPaginationBackgroundHoverColor: var(--evgPrimaryColor);
--evgPaginationBackgroundActiveColor: var(--evgPrimaryColor);
/* Input */
--evgInputPlaceholderColor: var(--evgGreyColor);
--evgInputFontFamily: Inter;
--evgInputFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontColor: var(--evgBodyTextColor);
--evgInputFontWeight: normal;
--evgInputFontLineHeight: 1;
--evgInputFontCapitalization: none;
--evgInputSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontColor: var(--evgBodyTextColor);
--evgInputSecondaryFontWeight: normal;
--evgInputSecondaryFontLineHeight: 1;
--evgInputSecondaryFontCapitalization: capitalize;
--evgInputBorderColor: var(--evgBorderColor);
--evgInputBorderFocusColor: var(--evgPrimaryColor);
--evgInputBorderRadius: 0;
--evgInputBackgroundColor: var(--evgLightColor);
/* RadioCheckbox */
--evgRadioCheckboxFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryBorderColor: var(--evgLightColor);
--evgRadioCheckboxSecondaryBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxFontFamily: Arial;
--evgRadioCheckboxFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontColor: var(--evgLightColor);
--evgRadioCheckboxFontWeight: normal;
--evgRadioCheckboxFontLineHeight: 1.2;
--evgRadioCheckboxFontCapitalization: none;
--evgRadioCheckboxBorderColor: var(--evgLightColor);
--evgRadioCheckboxBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxBorderRadius: 0;
}

/* Table */
.evergreen table,
.evergreen .evergreen-table {

    --fontFamily: var(--evgTableFontFamily);
    --headingFontSize: var(--evgTableFontSizeL);
    --headingFontColor: var(--evgTableFontColor);
    --headingFontWeight: var(--evgTableFontWeight);
    --headingLineHeight: var(--evgTableFontLineHeight);
    --headingCapitalization: var(--evgTableFontCapitalization);
    --headerBackgroundColor: var(--evgTableBackgroundColor);

    --categoryFontColor: var(--evgTableSecondaryFontAltColor);
    --categoryBackgroundColor: var(--evgTableBackgroundAltColor);

    --rowFontSize: var(--evgTableSecondaryFontSizeL);
    --rowFontColor: var(--evgTableSecondaryFontColor);
    --rowFontWeight: var(--evgTableSecondaryFontWeight);
    --rowCapitalization: var(--evgTableSecondaryFontCapitalization);
    --rowBackgroundColor: var(--evgTableSecondaryBackgroundColor);
    --rowAltBackgroundColor: var(--evgTableZebra);

    --border: var(--evgTableRowUnderline);
    --borderColor: var(--evgTableBorderColor);
    --borderRadius: var(--evgTableBorderRadius);
}

.evergreen table tbody,
.evergreen table tbody tr,
.evergreen table tr,
.evergreen .evergreen-table tbody,
.evergreen .evergreen-table .evergreen-table-body,
.evergreen .evergreen-table tr,
.evergreen .evergreen-table .evergreen-table-row,
.evergreen .evergreen-table .evergreen-table-row th {
    font-size: var(--rowFontSize);
    font-family: var(--fontFamily);
    font-weight: var(--rowFontWeight);
    color: var(--rowFontColor);
    text-transform: var(--rowCapitalization);
    background-color: var(--rowBackgroundColor);
    border-bottom: var(--border);
    border-color: var(--borderColor);
}

.evergreen table tbody tr:nth-child(even),
.evergreen table tr:nth-child(even),
.evergreen .evergreen-table tbody tr:nth-child(even),
.evergreen .evergreen-table .evergreen-table-body tr:nth-child(even),
.evergreen .evergreen-table tr:nth-child(even),
.evergreen .evergreen-table .evergreen-table-row:nth-child(even) {
    background-color: var(--rowAltBackgroundColor);
}

.evergreen .evergreen-table tbody td.evergreen-table-category,
.evergreen .evergreen-table tbody th.evergreen-table-category,
.evergreen .evergreen-table .evergreen-table-category {
    color: var(--categoryFontColor);
    background-color: var(--categoryBackgroundColor);
}

.evergreen .evergreen-table thead,
.evergreen .evergreen-table .evergreen-table-header,
.evergreen .evergreen-table thead tr {
    --fontSize: var(--headingFontSize);
    --fontColor: var(--headingFontColor);
    --fontWeight: var(--headingFontWeight);
    --lineHeight: var(--headingLineHeight);
    --capitalization: var(--headingCapitalization);
    --backgroundColor: var(--headerBackgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
    background-color: var(--headerBackgroundColor);
}

.evergreen .evergreen-table-arrow {
    --fontSize: var(--evgTableFontSizeL);
    --fontColor: var(--evgTableFontColor);
    --fontWeight: var(--evgTableFontWeight);
    --lineHeight: var(--evgTableFontLineHeight);

    font-size: var(--fontSize);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
}

.evergreen .evergreen-table thead tr th {
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
}

.evergreen .evergreen-table tbody a,
.evergreen .evergreen-table tbody .evergreen-link {
    --fontFamily: var(--evgHyperlinkFontFamily);
    --fontColor: var(--evgHyperlinkFontColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --fontStyle: var(--evgHyperlinkFontStyle);
    --lineHeight: var(--evgHyperlinkFontLineHeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);

    font-family: var(--fontFamily);
    font-style: var(--fontStyle);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-table tbody a:hover,
.evergreen .evergreen-table tbody .evergreen-link:hover {

    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}


.evergreen .evergreen-table tbody a:focus,
.evergreen .evergreen-table tbody .evergreen-link:focus,
.evergreen .evergreen-table tbody a:focus-visible,
.evergreen .evergreen-table tbody .evergreen-link:focus-visible {

    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}


/** Responsive Tablet **/
@media (min-width: 481px) and (max-width: 1024px){

    .evergreen .evergreen-table tbody,
    .evergreen .evergreen-table .evergreen-table-body,
    .evergreen .evergreen-table tr {
        font-size: var(--evgTableSecondaryFontSizeM);
    }

    .evergreen .evergreen-table-arrow {
        font-size: var(--evgTableFontSizeM);
    }

    .evergreen .evergreen-table thead,
    .evergreen .evergreen-table .evergreen-table-header,
    .evergreen .evergreen-table thead tr,
    .evergreen .evergreen-table thead tr th {
        font-size: var(--evgTableFontSizeM);
    }
}

/** Responsive Mobile **/
@media (max-width: 480px){

    .evergreen table tbody,
    .evergreen table tbody tr,
    .evergreen .evergreen-table tbody,
    .evergreen .evergreen-table .evergreen-table-body,
    .evergreen .evergreen-table tr {
        font-size: var(--evgTableSecondaryFontSizeS);
    }

    .evergreen table thead,
    .evergreen table thead tr,
    .evergreen .evergreen-table thead,
    .evergreen .evergreen-table .evergreen-table-header,
    .evergreen .evergreen-table thead tr,
    .evergreen .evergreen-table thead tr th {
        font-size: var(--evgTableFontSizeS);
    }

    .evergreen .evergreen-table-arrow {
        font-size: var(--evgTableFontSizeS);
    }
}:root {
/*** COMMITTEE COMPOSITION ***/
/* Body */
--evgBodyFontColor: var(--evgBodyTextColor);
/* Hyperlink */
--evgHyperlinkFontFamily: Inter;
--evgHyperlinkFontSizeL: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeM: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontSizeS: calc(var(--evgRootFontSize) * 1.2);
--evgHyperlinkFontColor: var(--evgAltColor);
--evgHyperlinkFontHoverColor: var(--evgPrimaryColor);
--evgHyperlinkFontFocusColor: var(--evgAltColor);
--evgHyperlinkFontWeight: normal;
--evgHyperlinkFontStyle: normal;
--evgHyperlinkFontLineHeight: 1.3;
--evgHyperlinkFontCapitalization: none;
--evgHyperlinkDecorationTextDecoration: none;
--evgHyperlinkDecorationTextDecorationHover: none;
--evgHyperlinkDecorationTextDecorationFocus: none;
--evgHyperlinkDecorationTextDecorationColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationHoverColor: var(--evgInheritColor);
--evgHyperlinkDecorationTextDecorationFocusColor: var(--evgInheritColor);
/* Button */
--evgButtonFontFamily: Inter;
--evgButtonFontSizeL: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontSizeM: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontSizeS: calc(var(--evgRootFontSize) * 1.3);
--evgButtonFontColor: var(--evgLightColor);
--evgButtonFontHoverColor: var(--evgLightColor);
--evgButtonFontFocusColor: var(--evgLightColor);
--evgButtonFontWeight: normal;
--evgButtonFontStyle: normal;
--evgButtonFontLineHeight: 1.3;
--evgButtonFontCapitalization: none;
--evgButtonBorderColor: var(--evgPrimaryColor);
--evgButtonBorderHoverColor: var(--evgAltColor);
--evgButtonBorderFocusColor: var(--evgAltColor);
--evgButtonBorderRadius: 0;
--evgButtonBackgroundColor: var(--evgPrimaryColor);
--evgButtonBackgroundHoverColor: var(--evgAltColor);
--evgButtonBackgroundFocusColor: var(--evgAltColor);
--evgButtonPaddingItemPadding: initial;
--evgButtonPaddingVerticalPadding: 20px;
--evgButtonDecorationTextDecoration: none;
--evgButtonDecorationTextDecorationHover: none;
--evgButtonDecorationTextDecorationFocus: none;
--evgButtonDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonDecorationTextDecorationFocusColor: var(--evgLightColor);
/* ButtonAlt */
--evgButtonAltFontFamily: Inter;
--evgButtonAltFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgButtonAltFontColor: var(--evgPrimaryColor);
--evgButtonAltFontHoverColor: var(--evgLightColor);
--evgButtonAltFontFocusColor: var(--evgLightColor);
--evgButtonAltFontWeight: normal;
--evgButtonAltFontStyle: normal;
--evgButtonAltFontLineHeight: 1.3;
--evgButtonAltFontCapitalization: none;
--evgButtonAltBorderColor: var(--evgLightColor);
--evgButtonAltBorderHoverColor: var(--evgPrimaryColor);
--evgButtonAltBorderFocusColor: var(--evgPrimaryColor);
--evgButtonAltBorderRadius: 0;
--evgButtonAltBackgroundColor: var(--evgLightColor);
--evgButtonAltBackgroundHoverColor: var(--evgPrimaryColor);
--evgButtonAltBackgroundFocusColor: var(--evgPrimaryColor);
--evgButtonAltPaddingItemPadding: initial;
--evgButtonAltPaddingVerticalPadding: 20px;
--evgButtonAltDecorationTextDecoration: none;
--evgButtonAltDecorationTextDecorationHover: none;
--evgButtonAltDecorationTextDecorationFocus: none;
--evgButtonAltDecorationTextDecorationColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationHoverColor: var(--evgLightColor);
--evgButtonAltDecorationTextDecorationFocusColor: var(--evgLightColor);
/* Dropdown */
--evgDropdownFontFamily: Inter;
--evgDropdownFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgDropdownFontColor: var(--evgAltColor);
--evgDropdownFontFocusColor: var(--evgAltColor);
--evgDropdownFontWeight: normal;
--evgDropdownFontLineHeight: 1.3;
--evgDropdownFontCapitalization: none;
--evgDropdownBorderColor: var(--evgAltColor);
--evgDropdownBorderFocusColor: var(--evgAltColor);
--evgDropdownBorderRadius: 0;
--evgDropdownBackgroundColor: var(--evgDarkOverlayColor);
--evgDropdownBackgroundFocusColor: var(--evgDarkOverlayColor);
/* Accordion */
--evgAccordionContentFontColor: var(--evgBodyTextColor);
--evgAccordionContentBackgroundColor: var(--evgDarkColor);
--evgAccordionFontFamily: Inter;
--evgAccordionFontSizeL: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeM: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontSizeS: calc(var(--evgRootFontSize) * 1.8);
--evgAccordionFontColor: var(--evgAltColor);
--evgAccordionFontAltColor: var(--evgPrimaryColor);
--evgAccordionFontFocusColor: var(--evgAltColor);
--evgAccordionFontWeight: normal;
--evgAccordionFontStyle: normal;
--evgAccordionFontLineHeight: 1.5;
--evgAccordionFontCapitalization: none;
--evgAccordionSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.4);
--evgAccordionSecondaryFontColor: var(--evgAltColor);
--evgAccordionSecondaryFontAltColor: var(--evgAltColor);
--evgAccordionSecondaryFontWeight: normal;
--evgAccordionSecondaryFontStyle: normal;
--evgAccordionSecondaryFontLineHeight: 1.3;
--evgAccordionSecondaryFontCapitalization: none;
--evgAccordionSecondaryFontActiveColor: alt;
--evgAccordionBorderColor: var(--evgBorderColor);
--evgAccordionBorderHoverColor: var(--evgBorderColor);
--evgAccordionBorderFocusColor: var(--evgBorderColor);
--evgAccordionBorderActiveColor: var(--evgBorderColor);
--evgAccordionBorderRadius: 0px;
--evgAccordionBackgroundColor: var(--evgLightColor);
--evgAccordionBackgroundHoverColor: var(--evgLightColor);
--evgAccordionBackgroundFocusColor: var(--evgLightColor);
--evgAccordionBackgroundActiveColor: var(--evgLightColor);
--evgAccordionPaddingItemPadding: 20px;
/* Tabs */
--evgTabsFontFamily: Inter;
--evgTabsFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTabsFontColor: var(--evgLightColor);
--evgTabsFontAltColor: var(--evgPrimaryColor);
--evgTabsFontHoverColor: var(--evgPrimaryColor);
--evgTabsFontWeight: normal;
--evgTabsFontLineHeight: 1.3;
--evgTabsFontCapitalization: none;
--evgTabsBorderRadius: 0;
--evgTabsBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundColor: var(--evgPrimaryColor);
--evgTabsSecondaryBackgroundHoverColor: var(--evgLightColor);
--evgTabsSecondaryBackgroundActiveColor: var(--evgLightColor);
/* List */
--evgListBulletStyle: disc;
--evgListBulletColor: var(--evgPrimaryColor);
--evgListFontFamily: Inter;
--evgListFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgListFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgListFontColor: var(--evgBodyTextColor);
--evgListFontWeight: normal;
--evgListFontStyle: normal;
--evgListFontLineHeight: 1.5;
--evgListFontCapitalization: none;
--evgListDecorationTextDecoration: none;
--evgListDecorationTextDecorationHover: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationFocus: inherit; /* Empty or N/A */
--evgListDecorationTextDecorationColor: var(--evgInheritColor);
/* Table */
--evgTableZebra: initial;
--evgTableRowUnderline: initial;
--evgTableFontFamily: Inter;
--evgTableFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableFontColor: var(--evgLightColor);
--evgTableFontWeight: normal;
--evgTableFontLineHeight: 1;
--evgTableFontCapitalization: none;
--evgTableSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgTableSecondaryFontColor: var(--evgBodyTextColor);
--evgTableSecondaryFontAltColor: var(--evgBodyTextColor);
--evgTableSecondaryFontWeight: normal;
--evgTableSecondaryFontCapitalization: none;
--evgTableBorderColor: var(--evgBodyTextColor);
--evgTableBorderRadius: initial;
--evgTableBackgroundColor: var(--evgPrimaryColor);
--evgTableBackgroundAltColor: var(--evgBorderColor);
--evgTableSecondaryBackgroundColor: var(--evgLightColor);
--evgTableSecondaryBackgroundAltColor: var(--evgGreyColor);
/* StockChart */
--evgStockChartStockChartMainColor: var(--evgPrimaryColor);
--evgStockChartStockChartMarkerColor: var(--evgAltColor);
--evgStockChartStockChartDividerColor: var(--evgGreyColor);
--evgStockChartStockChartTimelineSelectorColor: var(--evgPrimaryColor);
--evgStockChartFontFamily: Inter;
--evgStockChartFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgStockChartFontColor: var(--evgBodyTextColor);
--evgStockChartFontWeight: normal;
--evgStockChartBackgroundColor: var(--evgLightColor);
/* Pagination */
--evgPaginationFontFamily: Inter;
--evgPaginationFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgPaginationFontColor: var(--evgPrimaryColor);
--evgPaginationFontAltColor: var(--evgLightColor);
--evgPaginationFontHoverColor: var(--evgLightColor);
--evgPaginationFontWeight: normal;
--evgPaginationBorderColor: var(--evgPrimaryColor);
--evgPaginationBorderHoverColor: var(--evgPrimaryColor);
--evgPaginationBorderActiveColor: var(--evgPrimaryColor);
--evgPaginationBorderRadius: 0;
--evgPaginationBackgroundColor: var(--evgLightColor);
--evgPaginationBackgroundHoverColor: var(--evgPrimaryColor);
--evgPaginationBackgroundActiveColor: var(--evgPrimaryColor);
/* Input */
--evgInputPlaceholderColor: var(--evgGreyColor);
--evgInputFontFamily: Inter;
--evgInputFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputFontColor: var(--evgBodyTextColor);
--evgInputFontWeight: normal;
--evgInputFontLineHeight: 1;
--evgInputFontCapitalization: none;
--evgInputSecondaryFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgInputSecondaryFontColor: var(--evgBodyTextColor);
--evgInputSecondaryFontWeight: normal;
--evgInputSecondaryFontLineHeight: 1;
--evgInputSecondaryFontCapitalization: capitalize;
--evgInputBorderColor: var(--evgBorderColor);
--evgInputBorderFocusColor: var(--evgPrimaryColor);
--evgInputBorderRadius: 0;
--evgInputBackgroundColor: var(--evgLightColor);
/* RadioCheckbox */
--evgRadioCheckboxFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryBorderColor: var(--evgLightColor);
--evgRadioCheckboxSecondaryBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxSecondaryFillStyle: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillColor: var(--evgBodyTextColor);
--evgRadioCheckboxSecondaryFillActiveColor: var(--evgAltColor);
--evgRadioCheckboxFontFamily: Arial;
--evgRadioCheckboxFontSizeL: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeM: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontSizeS: calc(var(--evgRootFontSize) * 1.6);
--evgRadioCheckboxFontColor: var(--evgLightColor);
--evgRadioCheckboxFontWeight: normal;
--evgRadioCheckboxFontLineHeight: 1.2;
--evgRadioCheckboxFontCapitalization: none;
--evgRadioCheckboxBorderColor: var(--evgLightColor);
--evgRadioCheckboxBorderActiveColor: var(--evgAltColor);
--evgRadioCheckboxBorderRadius: 0;
}

/* Committee */
.evergreen .evergreen-committee-composition {
    --backgroundColor: var(--evgModuleBackgroundColor);

    --fontFamily: var(--evgTableFontFamily);
    --headingFontSize: var(--evgTableFontSizeL);
    --headingFontColor: var(--evgTableFontColor);
    --headingFontWeight: var(--evgTableFontWeight);
    --headingLineHeight: var(--evgTableFontLineHeight);
    --headingCapitalization: var(--evgTableFontCapitalization);
    --headerBackgroundColor: var(--evgTableBackgroundColor);

    --categoryFontColor: var(--evgTableSecondaryFontAltColor);
    --categoryBackgroundColor: var(--evgTableBackgroundAltColor);

    --cellFontSize: var(--evgTableSecondaryFontSizeL);
    --cellFontColor: var(--evgTableSecondaryFontColor);
    --cellFontWeight: var(--evgTableSecondaryFontWeight);
    --cellCapitalization: var(--evgTableSecondaryFontCapitalization);
    --rowBackgroundColor: var(--evgTableSecondaryBackgroundColor);
    --rowAltBackgroundColor: var(--evgTableZebra);

    --border: var(--evgTableRowUnderline);
    --borderColor: var(--evgTableBorderColor);
    --borderRadius: var(--evgTableBorderRadius);
}

.evergreen .evergreen-committee-composition .evergreen-committee-composition-table {
    table-layout: fixed;
}

.evergreen .evergreen-committee-composition thead,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-header,
.evergreen .evergreen-committee-composition thead tr {
    --fontSize: var(--headingFontSize);
    --fontColor: var(--headingFontColor);
    --fontWeight: var(--headingFontWeight);
    --lineHeight: var(--headingLineHeight);
    --capitalization: var(--headingCapitalization);
    --backgroundColor: var(--headerBackgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
    background-color: var(--headerBackgroundColor);
}

.evergreen .evergreen-committee-composition tbody .evergreen-committee-composition-row,
.evergreen .evergreen-committee-composition tbody .evergreen-committee-composition-row {
    font-family: var(--fontFamily);
    font-size: var(--cellFontSize);
    font-weight: var(--cellFontWeight);
    color: var(--cellFontColor);
    text-transform: var(--cellCapitalization);
    background-color: var(--rowBackgroundColor);
    border-bottom: var(--border);
    border-color: var(--borderColor);
}

.evergreen table tbody tr:nth-child(even),
.evergreen table tr:nth-child(even),
.evergreen .evergreen-committee-composition tbody tr:nth-child(even),
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr:nth-child(even),
.evergreen .evergreen-committee-composition tr:nth-child(even),
.evergreen .evergreen-committee-composition .evergreen-committee-composition-row:nth-child(even) {
    background-color: var(--rowAltBackgroundColor);
}


.evergreen .evergreen-committee-composition thead tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th,
.evergreen .evergreen-committee-composition tbody tr td,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
    width: 305px;
    padding: 20px 15px;
    overflow-wrap: break-word;
    text-align: center;
}

.evergreen .evergreen-committee-composition thead tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th {
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--headingFontWeight);
    color: var(--headingFontColor);
    text-transform: var(--headingCapitalization);
}

.evergreen .evergreen-committee-composition tbody tr td,
.evergreen .evergreen-committee-composition tbody tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr th,
.evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
     font-family: var(--fontFamily);
    font-size: var(--cellFontSize);
    font-weight: var(--cellFontWeight);
    color: var(--cellFontColor);
    text-transform: var(--cellCapitalization);
}

.evergreen .evergreen-committee-composition .committee-membership-options {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 15px;
    padding: 20px 15px;
    row-gap: 20px;
    column-gap: 30px;
}

.evergreen .evergreen-committee-composition .committee-membership-options li {
    font-family: var(--fontFamily);
    font-size: var(--cellFontSize);
    font-weight: var(--cellFontWeight);
    color: var(--cellFontColor);
    text-transform: var(--cellCapitalization);
    list-style: none;
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon {
    font-size: var(--cellFontSize);
    font-color: var(--iconColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.member {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--evgModuleBackgroundColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.comittee-chair {
    --iconColor: var(--evgPrimaryColor);
    --iconFilledColor: var(--evgPrimaryColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.board-chair {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--cellFontColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.lead-independent-director {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--cellFontColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.independent-director {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--evgModuleBackgroundColor);
}

.evergreen .evergreen-committee-composition .committee-membership-options li .icon.financial-expert {
    --iconColor: var(--cellFontColor);
    --iconFilledColor: var(--evgModuleBackgroundColor);
}

/** Responsive Tablet **/
@media (max-width: 1024px){

    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th,
    .evergreen .evergreen-committee-composition tbody tr td,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
        width: 246px;
    }
}

@media (min-width: 481px) and (max-width: 1024px){

    .evergreen .evergreen-committee-composition thead tr th,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header tr th,
    .evergreen .evergreen-committee-composition tbody tr td,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body tr td {
        width: 246px;
    }

    .evergreen .evergreen-committee-composition tbody,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body,
    .evergreen .evergreen-committee-composition tr {
        font-size: var(--evgTableSecondaryFontSizeM);
    }

    .evergreen .evergreen-committee-composition thead,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header,
    .evergreen .evergreen-committee-composition thead tr,
    .evergreen .evergreen-committee-composition thead tr th {
        font-size: var(--evgTableFontSizeM);
    }
}

/** Responsive Mobile **/
@media (max-width: 480px){

    .evergreen .evergreen-committee-composition table tbody,
    .evergreen .evergreen-committee-composition table tbody tr,
    .evergreen .evergreen-committee-composition tbody,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-body,
    .evergreen .evergreen-committee-composition tr {
        font-size: var(--evgTableSecondaryFontSizeS);
    }

    .evergreen .evergreen-committee-composition table thead,
    .evergreen .evergreen-committee-composition table thead tr,
    .evergreen .evergreen-committee-composition thead,
    .evergreen .evergreen-committee-composition .evergreen-committee-composition-header,
    .evergreen .evergreen-committee-composition thead tr,
    .evergreen .evergreen-committee-composition thead tr th {
        font-size: var(--evgTableFontSizeS);
    }
}
/***** EVERGREEN STYLES *****/
.evergreen,
.evergreen-layout {
    --fontSize: var(--evgBodyFontSizeL);
    --fontFamily: var(--evgBodyFontFamily);
    --fontColor: var(--evgBodyFontColor);
    --fontWeight: var(--evgBodyFontWeight);
    --lineHeight: var(--evgBodyLineHeight);
    --capitalization: var(--evgBodyCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen-layout .evergreen-layout-header {
    position: relative;
    padding-top: 60px;
}

.evergreen {
    padding: 50px 0;
}

.evergreen.evergreen-no-padding {
    padding: 0;
}

.evergreen p {
    --fontSize: var(--evgBodyFontSizeL);
    --fontFamily: var(--evgBodyFontFamily);
    --fontColor: var(--evgBodyFontColor);
    --fontWeight: var(--evgBodyFontWeight);
    --lineHeight: var(--evgBodyLineHeight);
    --capitalization: var(--evgBodyCapitalization);
}

.evergreen h1 {
    --fontSize: var(--evgH1FontSizeL);
    --fontFamily: var(--evgH1FontFamily);
    --fontColor: var(--evgH1FontColor);
    --fontWeight: var(--evgH1FontWeight);
    --lineHeight: var(--evgH1LineHeight);
    --capitalization: var(--evgH1Capitalization);
}

.evergreen h2 {
    --fontSize: var(--evgH2FontSizeL);
    --fontFamily: var(--evgH2FontFamily);
    --fontColor: var(--evgH2FontColor);
    --fontWeight: var(--evgH2FontWeight);
    --lineHeight: var(--evgH2LineHeight);
    --capitalization: var(--evgH2Capitalization);
}

.evergreen h3 {
    --fontSize: var(--evgH3FontSizeL);
    --fontFamily: var(--evgH3FontFamily);
    --fontColor: var(--evgH3FontColor);
    --fontWeight: var(--evgH3FontWeight);
    --lineHeight: var(--evgH3LineHeight);
    --capitalization: var(--evgH3Capitalization);
}

.evergreen h4 {
    --fontSize: var(--evgH4FontSizeL);
    --fontFamily: var(--evgH4FontFamily);
    --fontColor: var(--evgH4FontColor);
    --fontWeight: var(--evgH4FontWeight);
    --lineHeight: var(--evgH4LineHeight);
    --capitalization: var(--evgH4Capitalization);
}

.evergreen h5 {
    --fontSize: var(--evgH5FontSizeL);
    --fontFamily: var(--evgH5FontFamily);
    --fontColor: var(--evgH5FontColor);
    --fontWeight: var(--evgH5FontWeight);
    --lineHeight: var(--evgH5LineHeight);
    --capitalization: var(--evgH5Capitalization);
}

.evergreen p,
.evergreen h1,
.evergreen h2,
.evergreen h3,
.evergreen h4,
.evergreen h5 {
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen h1,
.evergreen h2,
.evergreen h3,
.evergreen h4,
.evergreen h5 {
    border-bottom: none;
}

.evergreen-container--outer {
    --padding: var(--evgPaddingContainerPadding);

    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--padding);
    padding-right: var(--padding);
}

.evergreen *:focus,
.evergreen *:focus-visible {
    outline-width: 2px;
    outline-style: dotted;
    outline-color: inherit;
    outline-offset: 2px;
}

.evergreen-error {
    --fontColor: var(--evgErrorColor);

    color: var(--fontColor);
}

/* Footer */
.evergreen-layout .evergreen-pane.evergreen-pane--footer {
    --primaryColor: var(--evgFooterPrimaryColor);

    background-color: var(--primaryColor);
}

.evergreen-layout .evergreen-pane.evergreen-pane--sub-footer {
    --secondaryColor: var(--evgFooterSecondaryColor);

    background-color: var(--secondaryColor);
}

.evergreen .evergreen-checkbox label,
.evergreen .evergreen-radio label {
    --fontFamily: var(--evgRadioCheckboxFontFamily);
    --fontSize: var(--evgRadioCheckboxFontSizeL);
    --fontColor: var(--evgRadioCheckboxFontColor);
    --fontWeight: var(--evgRadioCheckboxFontWeight);
    --lineHeight: var(--evgRadioCheckboxFontLineHeight);
    --capitalization: var(--evgRadioCheckboxFontCapitalization);

    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-checkbox input[type="checkbox"] + label::before {
    --fillColor: var(--evgRadioCheckboxFillColor);
    --borderColor: var(--evgRadioCheckboxBorderColor);
    --borderRadius: var(--evgRadioCheckboxBorderRadius);

    background-color: var(--fillColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
}

.evergreen .evergreen-checkbox input[type="checkbox"]:checked + label::before {
    --fillColor: var(--evgRadioCheckboxFillActiveColor);
    --borderColor: var(--evgRadioCheckboxBorderActiveColor);
    --borderRadius: var(--evgRadioCheckboxBorderRadius);

    background-color: var(--fillColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
}

.evergreen .evergreen-radio input[type="radio"],
.evergreen .evergreen-radio input[type="checkbox"] {
    --fillColor: var(--evgRadioCheckboxSecondaryFillColor);
    --borderColor: var(--evgRadioCheckboxSecondaryBorderColor);

    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    appearance: none;
    margin: 0 10px 0 0;
    vertical-align: middle;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    border-radius: 100%;
    background-color: var(--fillColor);
    border-color: var(--borderColor);
}

.evergreen .evergreen-radio input[type="radio"]:checked {
    --fillColor: var(--evgRadioCheckboxSecondaryFillActiveColor);
    --borderColor: var(--evgRadioCheckboxSecondaryBorderActiveColor);

    background-color: var(--fillColor);
    border-color: var(--borderColor);
}

/* Hyperlink */
.evergreen .evergreen-link,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]),
.evergreen a.evergreen-rss-link {
    --fontSize: var(--evgHyperlinkFontSizeL);
    --fontFamily: var(--evgHyperlinkFontFamily);
    --fontColor: var(--evgHyperlinkFontColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --fontStyle: var(--evgHyperlinkFontStyle);
    --lineHeight: var(--evgHyperlinkFontLineHeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-style: var(--fontStyle);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);

    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen a.evergreen-rss-link {
    --fontSize: var(--evgModuleNameFontSizeL);
    --fontFamily: var(--evgModuleNameFontFamily);
    --fontWeight: var(--evgModuleNameFontWeight);
    --lineHeight: var(--evgModuleNameFontLineHeight);
    --alignment: var(--evgModuleNameFontAlignment);
}

.evergreen .evergreen-link:hover,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]):hover,
.evergreen a.evergreen-rss-link:hover {
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-link:focus,
.evergreen .evergreen-link:focus-visible,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]):focus,
.evergreen.evergreen-text-editor a:not([class*="evergreen-button"]):focus-visible,
.evergreen a.evergreen-rss-link:focus,
.evergreen a.evergreen-rss-link:focus-visible {
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);

}

/* Shared/Default Button Props */
.evergreen [class*="evergreen-button"],
.evergreen [class*="evergreen-link--button"],
.evergreen [class^="button"] {
    --fontSize: var(--evgButtonFontSizeL);
    --fontFamily: var(--evgButtonFontFamily);
    --fontColor: var(--evgButtonFontColor);
    --fontWeight: var(--evgButtonFontWeight);
    --lineHeight: var(--evgButtonFontLineHeight);
    --capitalization: var(--evgButtonFontCapitalization);

    --fontStyle: var(--evgButtonFontStyle);
    --textDecoration: var(--evgButtonDecorationTextDecoration);
    --textDecorationColor: var(--evgButtonDecorationTextDecorationColor);

    --borderRadius: var(--evgButtonBorderRadius);
    --borderColor: var(--evgButtonBorderColor);

    --backgroundColor: var(--evgButtonBackgroundColor);

    --topBottomPadding: var(--evgButtonPaddingVerticalPadding);
}

.evergreen [class*="evergreen-button"]:hover,
.evergreen [class*="evergreen-link--button"]:hover,
.evergreen [class^="button"]:hover {
    --fontColor: var(--evgButtonFontHoverColor);
    --borderColor: var(--evgButtonBorderHoverColor);
    --backgroundColor: var(--evgButtonBackgroundHoverColor);
    --textDecoration: var(--evgButtonDecorationTextDecorationHover);
    --textDecorationColor: var(--evgButtonDecorationTextDecorationHoverColor);

    color: var(--fontColor);
}

.evergreen [class*="evergreen-button"]:focus,
.evergreen [class*="evergreen-link--button"]:focus,
.evergreen [class^="button"]:focus,
.evergreen [class*="evergreen-button"]:focus-visible,
.evergreen [class*="evergreen-link--button"]:focus-visible,
.evergreen [class^="button"]:focus-visible {
    --fontColor: var(--evgButtonFontFocusColor);
    --borderColor: var(--evgButtonBorderFocusColor);
    --backgroundColor: var(--evgButtonBackgroundFocusColor);
    --textDecoration: var(--evgButtonDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgButtonDecorationTextDecorationFocusColor);

    color: var(--fontColor);
}

/* Alt Button */
.evergreen .button--alt,
.evergreen .evergreen-button--alt,
.evergreen a.evergreen-link--button--alt,
.evergreen a.evergreen-link--button-alt {
    --fontSize: var(--evgButtonAltFontSizeL);
    --fontFamily: var(--evgButtonAltFontFamily);
    --fontColor: var(--evgButtonAltFontColor);
    --fontWeight: var(--evgButtonAltFontWeight);
    --lineHeight: var(--evgButtonAltFontLineHeight);
    --capitalization: var(--evgButtonAltFontCapitalization);

    --fontStyle: var(--evgButtonAltFontStyle);
    --textDecoration: var(--evgButtonAltDecorationTextDecoration);
    --textDecorationColor: var(--evgButtonAltDecorationTextDecorationColor);

    --borderRadius: var(--evgButtonAltBorderRadius);
    --borderColor: var(--evgButtonAltBorderColor);

    --backgroundColor: var(--evgButtonAltBackgroundColor);

    --topBottomPadding: var(--evgButtonAltPaddingVerticalPadding);
}

.evergreen .button--alt:hover,
.evergreen .evergreen-button--alt:hover,
.evergreen a.evergreen-link--button--alt:hover,
.evergreen a.evergreen-link--button-alt:hover {
    --fontColor: var(--evgButtonAltFontHoverColor);
    --borderColor: var(--evgButtonAltBorderHoverColor);
    --backgroundColor: var(--evgButtonAltBackgroundHoverColor);
    --textDecoration: var(--evgButtonAltDecorationTextDecorationHover);
    --textDecorationColor: var(--evgButtonAltDecorationTextDecorationHoverColor);

    color: var(--fontColor);
}

.evergreen [class*="evergreen-button--alt"]:focus,
.evergreen [class*="evergreen-link--button--alt"]:focus,
.evergreen [class*="button--alt"]:focus,
.evergreen [class*="evergreen-button--alt"]:focus-visible,
.evergreen [class*="evergreen-link--button--alt"]:focus-visible,
.evergreen [class*="button--alt"]:focus-visible {
    --fontColor: var(--evgButtonAltFontFocusColor);
    --borderColor: var(--evgButtonAltBorderFocusColor);
    --backgroundColor: var(--evgButtonAltBackgroundFocusColor);
    --textDecoration: var(--evgButtonAltDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgButtonAltDecorationTextDecorationFocusColor);

    color: var(--fontColor);
}

/* Button Prop application */
.evergreen [class*="evergreen-button"],
.evergreen [class*="evergreen-link--button"],
.evergreen [class^="button"] {
    padding: var(--topBottomPadding) 20px;
    font-style: var(--fontStyle);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
    border-radius: var(--borderRadius);
    background-color: var(--backgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    display: inline-block;
    text-align: center;
    min-width: 165px;
    max-width: 100%;
    border: 1px solid var(--borderColor);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

/* HOVER */
.evergreen [class*="evergreen-button"]:hover,
.evergreen [class*="evergreen-link--button"]:hover,
.evergreen [class*="button"]:hover {
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

/* FOCUS */
.evergreen [class*="evergreen-button"]:focus,
.evergreen [class*="evergreen-link--button"]:focus,
.evergreen [class*="button"]:focus,
.evergreen [class*="evergreen-button"]:focus-visible,
.evergreen [class*="evergreen-link--button"]:focus-visible,
.evergreen [class*="button"]:focus-visible {
    outline-color: var(--borderColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

/* Dropdown */
.evergreen .evergreen-dropdown-wrapper {
    --fontSize: var(--evgDropdownFontSizeL);
    --fontFamily: var(--evgDropdownFontFamily);
    --fontColor: var(--evgDropdownFontColor);
    --fontWeight: var(--evgDropdownFontWeight);
    --fontStyle: var(--evgDropdownFontStyle);
    --capitalization: var(--evgDropdownCapitalization);
    --borderRadius: var(--evgDropdownBorderRadius);
    --borderColor: var(--evgDropdownBorderColor);
    --backgroundColor: var(--evgDropdownBackgroundColor);
}

.evergreen .evergreen-dropdown {
    font-style: var(--fontStyle);
    border-radius: var(--borderRadius);
    border-color: var(--borderColor);
    background-color: var(--backgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 8px 32px 8px 8px;
    appearance: none;
    min-width: 90px;
}

.evergreen .evergreen-dropdown:focus,
.evergreen .evergreen-dropdown:focus-visible {
    --fontColor: var(--evgDropdownFontFocusColor);
    --borderColor: var(--evgDropdownBorderFocusColor);
    --backgroundColor: var(--evgDropdownBackgroundFocusColor);

    outline-color: var(--borderColor);
}

/* Accordion */
.evergreen .evergreen-accordion {
    --fontFamily: var(--evgAccordionFontFamily);

    --detailFontColor: var(--evgAccordionContentFontColor);
    --detailBackgroundColor: var(--evgAccordionContentBackgroundColor);

    --headingFontSize: var(--evgAccordionFontSizeL);
    --headingFontColor: var(--evgAccordionFontColor);
    --headingFontActiveColor: var(--evgAccordionFontAltColor);
    --headingFontFocusColor: var(--evgAccordionFontFocusColor);
    --headingFontWeight: var(--evgAccordionFontWeight);
    --headingFontStyle: var(--evgAccordionFontStyle);
    --headingFontLineHeight: var(--evgAccordionFontLineHeight);
    --headingFontCapitalization: var(--evgAccordionFontCapitalization);

    --headingPadding: var(--evgAccordionPaddingItemPadding);

    --subtitleFontSize: var(--evgAccordionSecondaryFontSizeL);
    --subtitleFontColor: var(--evgAccordionSecondaryFontColor);
    --subtitleFontWeight: var(--evgAccordionSecondaryFontWeight);
    --subtitleFontStyle: var(--evgAccordionSecondaryFontStyle);
    --subtitleFontLineHeight: var(--evgAccordionSecondaryFontLineHeight);
    --subtitleFontCapitalization: var(--evgAccordionSecondaryFontCapitalization);
    --subtitleFontActiveColor: var(--evgAccordionSecondaryFontAltColor);

    --borderColor: var(--evgAccordionBorderColor);
    --borderColorHover: var(--evgAccordionBorderHoverColor);
    --borderColorFocus: var(--evgAccordionBorderFocusColor);
    --borderColorActive: var(--evgAccordionBorderActiveColor);
    --borderRadius: var(--evgAccordionBorderRadius);

    --backgroundColor: var(--evgAccordionBackgroundColor);
    --backgroundColorFocus: var(--evgAccordionBackgroundFocusColor);
    --backgroundColorActive: var(--evgAccordionBackgroundActiveColor);

    padding: 0;
    border-top: 1px solid var(--borderColor);
    background-color: var(--backgroundColor);
    border-radius: var(--borderRadius);
}

.evergreen .evergreen-accordion:last-child {
    border-bottom: 1px solid var(--borderColor);
}

.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within {
    --borderColor: var(--borderColorFocus);
    --backgroundColor: var(--backgroundColorFocus);
}

.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within + .evergreen-accordion {
    --borderTopColor: var(--borderColorFocus);
}

.evergreen .evergreen-accordion:last-child:not(.evergreen-accordion--active):focus-within {
    --borderBottomColor: var(--borderColorFocus);
}

.evergreen .evergreen-accordion--active {
    --borderColor: var(--borderColorActive);
    --backgroundColor: var(--backgroundColorActive);
}

.evergreen .evergreen-accordion--active + .evergreen-accordion:not(.evergreen-accordion--active),
.evergreen .evergreen-accordion--active + .evergreen-accordion:focus-within:not(.evergreen-accordion--active) {
    --borderTopColor: var(--borderColorActive);
}

.evergreen .evergreen-accordion--active.evergreen-accordion:last-child:focus-within {
    --borderBottomColor: var(--borderColorActive);
}

.evergreen .evergreen-accordion .evergreen-accordion-header button.accordion-toggle {
    all: inherit;
    display: flex;
    width: 100%;
    padding: var(--headingPadding) 0;
}

.evergreen .evergreen-accordion h4.evergreen-accordion-header,
.evergreen .evergreen-accordion .evergreen-accordion-header button.accordion-toggle {
    --fontSize: var(--headingFontSize);
    --fontFamily: var(--evgAccordionFontFamily);
    --fontColor: var(--headingFontColor);
    --fontWeight: var(--headingFontWeight);
    --fontStyle: var(--headingFontStyle);
    --lineHeight: var(--headingFontLineHeight);
    --capitalization: var(--headingFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    font-style: var(--fontStyle);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within h4.evergreen-accordion-header,
.evergreen .evergreen-accordion:not(.evergreen-accordion--active):focus-within .evergreen-accordion-header button.accordion-toggle {
    --fontColor: var(--headingFontFocusColor);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion--active h4.evergreen-accordion-header,
.evergreen .evergreen-accordion--active .evergreen-accordion-header button.accordion-toggle {
    --fontColor: var(--headingFontActiveColor);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion .evergreen-accordion-header button.accordion-toggle .evergreen-accordion-subtitle {
    --fontSize: var(--subtitleFontSize);
    --fontColor: var(--subtitleFontColor);
    --fontWeight: var(--subtitleFontWeight);
    --fontStyle: var(--subtitleFontStyle);
    --lineHeight: var(--subtitleFontLineHeight);
    --capitalization: var(--subtitleFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    font-style: var(--fontStyle);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-accordion--active .evergreen-accordion-header button.accordion-toggle .evergreen-accordion-subtitle {
    --fontColor: var(--subtitleFontActiveColor);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion-content {
    --fontColor: var(--detailFontColor);
    --fontSize: var(--evgBodyFontSizeL);
    --backgroundColor: var(--detailBackgroundColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    background-color: var(--backgroundColor);
}

.evergreen .evergreen-accordion-content-text,
.evergreen .evergreen-accordion-content-text p {
    font-size: var(--fontSize);
    color: var(--fontColor);
}

.evergreen .evergreen-accordion-content-text p a,
.evergreen .evergreen-accordion-content-text a:not([class*="evergreen-link--button"]) {
    --fontColor: var(--evgHyperlinkFontColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
    font-weight: var(--fontWeight);
    text-transform: var(--capitalization);

    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen .evergreen-accordion-content-text p a:hover,
.evergreen .evergreen-accordion-content-text a:not([class*="evergreen-link--button"]):hover {
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-accordion-content-text p a:focus,
.evergreen .evergreen-accordion-content-text a:not([class*="evergreen-link--button"]):focus {
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

/* Carousel */
.evergreen .evergreen-carousel-slider-item-text {
    --fontColor: var(--evgBodyFontColor);
    --fontSize: var(--evgBodyFontSizeL);

    color: var(--fontColor);
    font-size: var(--fontSize);
}

.evergreen .evergreen-carousel-display-item-header-text {
    --fontColor: var(--evgBodyFontColor);
    --fontSize: var(--evgH3FontSizeL);

    color: var(--fontColor);
    font-size: var(--fontSize);
}

.evergreen .evergreen-carousel-display-item-subtitle-text,
.evergreen .evergreen-carousel-display-item-text,
.evergreen .evergreen-carousel-display-item-text p {
    --fontColor: var(--evgBodyFontColor);
    --fontSize: var(--evgBodyFontSizeL);

    color: var(--fontColor);
    font-size: var(--fontSize);
}

.evergreen .evergreen-carousel-arrow,
.evergreen .evergreen-carousel-display-item-text a,
.evergreen .evergreen-carousel-display-item-text p a {
    --fontColor: var(--evgHyperlinkFontColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecoration);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationColor);
    --fontWeight: var(--evgHyperlinkFontWeight);
    --capitalization: var(--evgHyperlinkFontCapitalization);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
    font-weight: var(--fontWeight);
    text-transform: var(--capitalization);
    transition-property: color, text-decoration;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.evergreen .evergreen-carousel-arrow:hover,
.evergreen .evergreen-carousel-display-item-text a:hover,
.evergreen .evergreen-carousel-display-item-text p a:hover {
    --fontColor: var(--evgHyperlinkFontHoverColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationHover);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationHoverColor);

    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen .evergreen-carousel-arrow:focus,
.evergreen .evergreen-carousel-display-item-text a:focus,
.evergreen .evergreen-carousel-display-item-text p a:focus {
    --fontColor: var(--evgHyperlinkFontFocusColor);
    --textDecoration: var(--evgHyperlinkDecorationTextDecorationFocus);
    --textDecorationColor: var(--evgHyperlinkDecorationTextDecorationFocusColor);
    color: var(--fontColor);
    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}


/* Tabs */
.evergreen .evergreen-tabs {
    --fontSize: var(--evgTabsFontSizeL);
    --fontFamily: var(--evgTabsFontFamily);
    --fontColor: var(--evgTabsFontColor);
    --fontColorHover: var(--evgTabsFontHoverColor);
    --fontColorActive: var(--evgTabsFontAltColor);
    --fontWeight: var(--evgTabsFontWeight);
    --lineHeight: var(--evgTabsFontLineHeight);
    --capitalization: var(--evgTabsFontCapitalization);
    --backgroundColor: var(--evgTabsBackgroundColor);
    --itemBackgroundColor: var(--evgTabsSecondaryBackgroundColor);
    --itemBackgroundColorHover: var(--evgTabsSecondaryBackgroundHoverColor);
    --itemBackgroundColorActive: var(--evgTabsSecondaryBackgroundActiveColor);
    --borderRadius: var(--evgTabsBorderRadius);

    margin-bottom: 16px;
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-tabs ul {
    background-color: var(--backgroundColor);
    border: 0 none;
    padding: 10px 15px 0;
    list-style: none;
    display: flex;
    column-gap: 3px;
    margin: 0;
    flex-wrap: wrap;
}

.evergreen .evergreen-tabs li {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-wrap: anywhere;
}

.evergreen .evergreen-tabs ul li a {
    --fontSize: var(--evgTabsFontSizeL);
    --fontFamily: var(--evgTabsFontFamily);
    --fontColor: var(--evgTabsFontColor);
    --fontColorHover: var(--evgTabsFontHoverColor);
    --fontColorActive: var(--evgTabsFontAltColor);
    --fontWeight: var(--evgTabsFontWeight);
    --lineHeight: var(--evgTabsFontLineHeight);
    --capitalization: var(--evgTabsFontCapitalization);
    --backgroundColor: var(--itemBackgroundColor);

    color: var(--fontColor);
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
    background: var(--backgroundColor);
    display: inline-block;
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
    padding: 10px 15px 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.evergreen .evergreen-tabs ul li a:not(.evergreen--selected):hover {
    --fontColor: var(--fontColorHover);
    --backgroundColor: var(--itemBackgroundColorHover);

    color: var(--fontColor);
    background-color: var(--backgroundColor);
}

.evergreen .evergreen-tabs ul li a.evergreen--selected,
.evergreen .evergreen-tabs ul li a.evergreen-active {
    --fontColor: var(--fontColorActive);
    --backgroundColor: var(--itemBackgroundColorActive);
    pointer-events: none;
    cursor: default;

    color: var(--fontColor);
    background-color: var(--backgroundColor);
}

/* List */
.evergreen ul,
.evergreen ol {
    --bulletStyle: var(--evgListBulletStyle);
    --bulletcolor: var(--evgListBulletColor);
    --fontFamily: var(--evgListFontFamily);
    --fontSize: var(--evgListFontSizeL);
    --fontColor: var(--evgListFontColor);
    --fontWeight: var(--evgListFontWeight);
    --fontStyle: var(--evgListFontStyle);
    --lineHeight: var(--evgListFontLineHeight);
    --capitalization: var(--evgListFontCapitalization);
    --textDecoration: var(--evgListDecorationTextDecoration);
    --textDecorationColor: var(--evgListDecorationTextDecorationColor);
}

.evergreen ul li,
.evergreen ol li {
    color: var(--fontColor);
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--fontWeight);
    font-style: var(--fontStyle);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);

    text-decoration: var(--textDecoration);
    text-decoration-color: var(--textDecorationColor);
}

.evergreen ul li {
    list-style: var(--bulletStyle);
}

.evergreen ul li::marker,
.evergreen ol li::marker {
    color: var(--bulletcolor);
}

/* Pager */
.evergreen .evergreen-pager,
.evergreen .evergreen-pager .evergreen-pager-list,
.evergreen .evergreen-pager .evergreen-pager-list-item {
  --fontFamily: var(--evgPaginationFontFamily);
  --fontSize: var(--evgPaginationFontSizeL);
  --fontColor: var(--evgPaginationFontColor);
  --fontAltColor: var(--evgPaginationFontAltColor);
  --fontHoverColor: var(--evgPaginationFontHoverColor);
  --fontWeight: var(--evgPaginationFontWeight);
  --borderColor: var(--evgPaginationBorderColor);
  --borderHoverColor: var(--evgPaginationBorderHoverColor);
  --borderActiveColor: var(--evgPaginationBorderActiveColor);
  --borderRadius: var(--evgPaginationBorderRadius);
  --backgroundColor: var(--evgPaginationBackgroundColor);
  --backgroundHoverColor: var(--evgPaginationBackgroundHoverColor);
  --backgroundActiveColor: var(--evgPaginationBackgroundActiveColor);
}

.evergreen .evergreen-pager-button {
    background-color: var(--backgroundColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius, 0);
    color: var(--fontColor);
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    font-weight: var(--fontWeight);
    text-decoration: none;
}

.evergreen .evergreen-pager-button:not(.js--disabled):hover,
.evergreen .evergreen-pager-button:not(.evergreen-pager-button--disabled):hover {
    background-color: var(--backgroundHoverColor);
    border-color: var(--borderHoverColor);
    color: var(--fontHoverColor);
}

.evergreen .evergreen-pager-button.js--active,
.evergreen .evergreen-pager-button.evergreen-pager-button--active {
    background-color: var(--backgroundActiveColor);
    border-color: var(--borderActiveColor);
    color: var(--fontAltColor);
}

/* Input */
.evergreen .evergreen-input,
.evergreen input {
  --fontFamily: var(--evgInputFontFamily);
  --fontColor: var(--evgInputFontColor);
  --fontSize: var(--evgInputFontSizeL);
  --placeholderFontColor: var(--evgInputPlaceholderColor);
  --fontWeight: var(--evgInputFontWeight);
  --lineHeight: var(--evgInputFontLineHeight);
  --capitalization: var(--evgInputFontCapitalization);
  --borderColor: var(--evgInputBorderColor);
  --borderFocusColor: var(--evgInputBorderFocusColor);
  --borderRadius: var(--evgInputBorderRadius);
  --backgroundColor: var(--evgInputBackgroundColor);

  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--fontColor);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
  text-transform: var(--capitalization);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
  background-color: var(--backgroundColor);

  transition: all 0.3s ease-in-out;

}

.evergreen .evergreen-input:focus,
.evergreen input:focus {
  border-color: var(--borderFocusColor);
  outline-color: var(--borderFocusColor);
}

.evergreen .evergreen-input::placeholder,
.evergreen input::placeholder {
  color: var(--placeholderFontColor);
}

/* Label */
.evergreen .evergreen-label,
.evergreen label,
.evergreen legend {
  --fontFamily: var(--evgInputFontFamily);
  --fontSize : var(--evgInputSecondaryFontSizeL);
  --fontColor: var(--evgInputSecondaryFontColor);
  --fontWeight: var(--evgInputSecondaryFontWeight);
  --lineHeight: var(--evgInputSecondaryFontLineHeight);
  --capitalization: var(--evgInputSecondaryFontCapitalization);

  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--fontColor);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
  text-transform: var(--capitalization);
}


/* Module Specific Styling */
.evergreen {
    background-color: var(--evgModuleBackgroundColor);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
}

.evergreen .evergreen-title,
.evergreen .evergreen-title .ModuleTitle {
    --fontSize: var(--evgModuleNameFontSizeL);
    --fontColor: var(--evgModuleNameFontColor);
    --fontFamily: var(--evgModuleNameFontFamily);
    --fontWeight: var(--evgModuleNameFontWeight);
    --capitalization: var(--evgModuleNameFontCapitalization);
    --lineHeight: var(--evgModuleNameFontLineHeight);
    --alignment: var(--evgModuleNameFontAlignment);
}

.evergreen .evergreen-title, .evergreen .evergreen-title .ModuleTitle {
    margin: 0;
    overflow-wrap: anywhere;

    color: var(--fontColor);
    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    font-weight: var(--fontWeight);
    text-transform: var(--capitalization);
    line-height: var(--lineHeight);
    text-align: var(--alignment);
}

.evergreen .evergreen-item {
    --backgroundColor: var(--evgModuleBackgroundItemBackgroundColor);
    --padding: var(--evgPaddingItemPadding);
    --borderBottom: var(--evgModuleItemUnderline);
    --borderBottomColor: var(--evgModuleItemUnderlineColor);

    background-color: var(--backgroundColor);
    padding: 30px var(--padding) 10px var(--padding);
    border-bottom: var(--borderBottom);
    border-bottom-color: var(--borderBottomColor);
}

.evergreen .evergreen-item-container tbody,
.evergreen .evergreen-item-container tr,
.evergreen .evergreen-item-container tr:nth-child(even) {
    --backgroundColor: var(--evgModuleBackgroundItemBackgroundColor);

    background-color: var(--backgroundColor);
    border: none;
    border-collapse: collapse;
}

.evergreen .evergreen-item tr,
.evergreen .evergreen-item tr:nth-child(even) {
    --borderBottom: var(--evgModuleItemUnderline);
    --borderBottomColor: var(--evgModuleItemUnderlineColor);

    border-bottom: var(--borderBottom);
    border-bottom-color: var(--borderBottomColor);
}

.evergreen .evergreen-item-container.evergreen-item-one-column tbody {
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 16px;
}

.evergreen .evergreen-item-container.evergreen-item-two-column tbody {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.evergreen .evergreen-item-title,
.evergreen a.evergreen-item-title,
.evergreen .evergreen-item-detail-title {
    --fontSize: var(--evgModuleItemTitleFontSizeL);
    --fontFamily: var(--evgModuleItemTitleFontFamily);
    --fontWeight: var(--evgModuleItemTitleFontWeight);
    --lineHeight: var(--evgModuleItemTitleFontLineHeight);
    --capitalization: var(--evgModuleItemTitleFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-item-subtitle {
    --fontSize: var(--evgModuleItemSubtitleFontSizeL);
    --fontColor: var(--evgModuleItemSubtitleFontColor);
    --fontFamily: var(--evgModuleItemSubtitleFontFamily);
    --fontWeight: var(--evgModuleItemSubtitleFontWeight);
    --lineHeight: var(--evgModuleItemSubtitleFontLineHeight);
    --capitalization: var(--evgModuleItemSubtitleFontCapitalization);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen .evergreen-item-title:not(:hover):not(:focus),
.evergreen a.evergreen-item-title:not(:hover):not(:focus),
.evergreen .evergreen-item-detail-title {
    --fontColor: var(--evgModuleItemTitleFontColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen a.evergreen-item-title:hover {
    --fontColor: var(--evgModuleItemTitleFontHoverColor);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

.evergreen a.evergreen-item-title:focus,
.evergreen a.evergreen-item-title:focus-visible {
    --fontColor: var(--evgModuleItemTitleFontFocusColor);
    color: var(--fontColor);
}

.evergreen .evergreen-item-date-time {
    --fontSize: var(--evgDateTimeFontSizeL);
    --fontColor: var(--evgDateTimeFontColor);
    --fontFamily: var(--evgDateTimeFontFamily);
    --fontWeight: var(--evgDateTimeFontWeight);
    --capitalization: var(--evgDateTimeFontCapitalization);
    --lineHeight: var(--evgDateTimeFontLineHeight);

    font-size: var(--fontSize);
    font-family: var(--fontFamily);
    color: var(--fontColor);
    font-weight: var(--fontWeight);
    line-height: var(--lineHeight);
    text-transform: var(--capitalization);
}

/** Responsive Tablet **/
@media only screen and (max-width: 1024px) and (min-width: 481px) {
    .evergreen {
        font-size: var(--evgBodyFontSizeM);
    }

    /* Text Editor */
    .evergreen p {
        font-size: var(--evgBodyFontSizeM);
    }

    .evergreen h1 {
        font-size: var(--evgH1FontSizeM);
        font-family: var(--evgH1FontFamily);
    }

    .evergreen h2 {
        font-size: var(--evgH2FontSizeM);
        font-family: var(--evgH2FontFamily);
    }

    .evergreen h3 {
        font-size: var(--evgH3FontSizeM);
        font-family: var(--evgH3FontFamily);
    }

    .evergreen h4 {
        font-size: var(--evgH4FontSizeM);
        font-family: var(--evgH4FontFamily);
    }

    .evergreen h5 {
        font-size: var(--evgH5FontSizeM);
        font-family: var(--evgH5FontFamily);
    }

/* TODO: Text editor buttons have Link Font Weight applied to them. */

    /* Hyperlink */
    .evergreen .evergreen-link,
    .evergreen.evergreen-text-editor a:not([class*="evergreen-button"]) {
        font-size: var(--evgLinkFontSizeM);
    }

    /* Default Button */
    .evergreen .button, .evergreen .evergreen-button {
        font-size: var(--evgButtonFontSizeM);
    }

    /* Alt Button */
    .evergreen .button--alt, .evergreen .evergreen-button--alt {
        font-size: var(--evgButtonAltFontSizeM)
    }

    /* Dropdown */
    .evergreen .evergreen-dropdown {
        font-size: var(--evgDropdownFontSizeM);
    }

    /* Accordion */
    .evergreen .evergreen-accordion-header,
    .evergreen .evergreen-accordion button,
    .evergreen .evergreen-accordion button .evergreen-accordion-title,
    .evergreen .evergreen-accordion button .accordion-toggle-icon {
        font-size: var(--evgAccordionFontSizeM);
    }

    .evergreen .evergreen-accordion button .evergreen-accordion-subtitle {
        font-size: var(--evgAccordionSubtitleFontSizeM);
    }

    .evergreen .evergreen-accordion-content h3 {
        font-size: var(--evgH3FontSizeM);
    }

    .evergreen .evergreen-accordion-content-text,
    .evergreen .evergreen-accordion-content-text p {
        font-size: var(--evgBodyFontSizeM);
    }

    /* Carousel */
    .evergreen .evergreen-carousel-display-item-subtitle-text,
    .evergreen .evergreen-carousel-display-item-text,
    .evergreen .evergreen-carousel-slider-item-text {
        font-size: var(--evgBodyFontSizeM);
    }

    .evergreen .evergreen-carousel-display-item-header-text {
        font-size: var(--evgH3FontSizeM);
    }

    /* Tabs */
    .evergreen .evergreen-tabs {
        font-size: var(--evgTabsFontSizeM);
    }

    /* Module Styling */
    .evergreen .evergreen-title, .evergreen .evergreen-title .ModuleTitle {
        font-size: var(--evgModuleNameFontSizeM);
    }

    .evergreen .evergreen-item-title,
    .evergreen a.evergreen-item-title,
    .evergreen .evergreen-item-detail-title {
        font-size: var(--evgModuleItemTitleFontSizeM);
    }

    .evergreen .evergreen-item-subtitle {
        font-size: var(--evgModuleItemSubtitleFontSizeM);
    }

    .evergreen .evergreen-item-date-time {
        font-size: var(--evgDateTimeFontSizeM);
    }

    /* Pager */
    .evergreen .evergreen-pager,
    .evergreen .evergreen-pager .evergreen-pager-list,
    .evergreen .evergreen-pager .evergreen-pager-list-item {
        --fontSize: var(--evgPaginationFontSizeM);
        font-size: var(--fontSize);
    }

    /* List */
    .evergreen ul,
    .evergreen ol {
        --fontSize: var(--evgListFontSizeM);
    }

    /* Input */
    .evergreen .evergreen-input,
    .evergreen input {
      --fontSize: var(--evgInputFontSizeM);
      font-size: var(--fontSize);
    }

    /* Label */
    .evergreen .evergreen-label,
    .evergreen label,
    .evergreen legend {
      --fontSize: var(--evgInputSecondaryFontSizeM);
      font-size: var(--fontSize);
    }
}

/** Responsive Mobile **/
@media only screen and (max-width: 480px) {
    .evergreen {
        font-size: var(--evgBodyFontSizeS);
    }

    /* Text Editor */
    .evergreen p {
        font-size: var(--evgBodyFontSizeS);
    }

    .evergreen h1 {
        font-size: var(--evgH1FontSizeS);
        font-family: var(--evgH1FontFamily);
    }

    .evergreen h2 {
        font-size: var(--evgH2FontSizeS);
        font-family: var(--evgH2FontFamily);
    }

    .evergreen h3 {
        font-size: var(--evgH3FontSizeS);
        font-family: var(--evgH3FontFamily);
    }

    .evergreen h4 {
        font-size: var(--evgH4FontSizeS);
        font-family: var(--evgH4FontFamily);
    }

    .evergreen h5 {
        font-size: var(--evgH5FontSizeS);
        font-family: var(--evgH5FontFamily);
    }

    /* Hyperlink */
    .evergreen .evergreen-link,
    .evergreen.evergreen-text-editor a:not([class*="evergreen-button"]) {
        font-size: var(--evgLinkFontSizeS);
    }

    /* Default Button */
    .evergreen .button,
    .evergreen .evergreen-button {
        font-size: var(--evgButtonFontSizeS);
    }

    /* Alt Button */
    .evergreen .button--alt,
    .evergreen .evergreen-button--alt {
        font-size: var(--evgButtonAltFontSizeS)
    }

    /* Dropdown */
    .evergreen .evergreen-dropdown {
        font-size: var(--evgDropdownFontSizeS);
    }

    /* Accordion */
    .evergreen .evergreen-accordion-header,
    .evergreen .evergreen-accordion button,
    .evergreen .evergreen-accordion button .evergreen-accordion-title,
    .evergreen .evergreen-accordion button .accordion-toggle-icon {
        font-size: var(--evgAccordionFontSizeS);
    }

    .evergreen .evergreen-accordion button .evergreen-accordion-subtitle {
        font-size: var(--evgAccordionSubtitleFontSizeS);
    }

    .evergreen .evergreen-accordion-content h3 {
        font-size: var(--evgH3FontSizeS);
    }

    .evergreen .evergreen-accordion-content-text,
    .evergreen-accordion-content-text p {
        font-size: var(--evgBodyFontSizeS);
    }

    /* Carousel */
    .evergreen .evergreen-carousel-display-item-subtitle-text,
    .evergreen .evergreen-carousel-display-item-text,
    .evergreen .evergreen-carousel-slider-item-text {
        font-size: var(--evgBodyFontSizeS);
    }

    .evergreen .evergreen-carousel-display-item-header-text {
        font-size: var(--evgH3FontSizeS);
    }

    /* Tabs */
    .evergreen .evergreen-tabs {
        font-size: var(--evgTabsFontSizeS);
    }

    /* Module Styling */
    .evergreen .evergreen-title,
    .evergreen .evergreen-title .ModuleTitle {
        font-size: var(--evgModuleNameFontSizeS);
    }

    .evergreen .evergreen-item-title,
    .evergreen a.evergreen-item-title,
    .evergreen .evergreen-item-detail-title {
        font-size: var(--evgModuleItemTitleFontSizeS);
    }

    .evergreen .evergreen-item-subtitle {
        font-size: var(--evgModuleItemSubtitleFontSizeS);
    }

    .evergreen .evergreen-item-date-time {
        font-size: var(--evgDateTimeFontSizeS);
    }

    /* Pager */
    .evergreen .evergreen-pager,
    .evergreen .evergreen-pager .evergreen-pager-list,
    .evergreen .evergreen-pager .evergreen-pager-list-item {
        --fontSize: var(--evgPaginationFontSizeS);
        font-size: var(--fontSize);
    }

    /* List */
    .evergreen ul,
    .evergreen ol {
        --fontSize: var(--evgListFontSizeS);
    }

    /* Input */
    .evergreen .evergreen-input,
    .evergreen input {
      --fontSize: var(--evgInputFontSizeS);
      font-size: var(--fontSize);
    }

    /* Label */
    .evergreen .evergreen-label,
    .evergreen label,
    .evergreen legend {
      --fontSize: var(--evgInputSecondaryFontSizeS);
      font-size: var(--fontSize);
    }
}