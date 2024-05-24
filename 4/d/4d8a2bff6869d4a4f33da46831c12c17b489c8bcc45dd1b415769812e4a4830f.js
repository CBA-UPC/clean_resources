var _hsp = window['_hsp'] = window['_hsp'] || [];
_hsp.push(['setBannerSettings', {}]);
_hsp.push(['setCustomizationSettings', {}]);
_hsp.push(['addCookieDomain', '.hsforms.com']);
_hsp.push(['addCookieDomain', '.hs-sites.com']);
_hsp.push(['addCookieDomain', '.hubspot.com']);
_hsp.push(['addCookieDomain', '.hubspotpagebuilder.com']);
_hsp.push(['addCookieDomain', '.freepik.com']);
_hsp.push(['setApiBaseUrl', 'https://js.hs-banner.com/v2']);
/**
 * HubSpot Cookie Banner Code Copyright 2024 HubSpot, Inc.  http://www.hubspot.com
 */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};e[o].call(i.exports,i,i.exports,n);i.l=!0;return i.exports}n.m=e;n.c=t;n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})};n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};n.t=function(e,t){1&t&&(e=n(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);n.r(o);Object.defineProperty(o,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o};n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="//static.hsappstatic.net/cookie-banner-js/static-1.1671/";n(n.s=4)}([function(e,t,n){var o;function s(){var e,t;t=arguments[0]||{};this.config={};this.config.elements=t.elements?t.elements:[];this.config.attributes=t.attributes?t.attributes:{};this.config.attributes[s.ALL]=this.config.attributes[s.ALL]?this.config.attributes[s.ALL]:[];this.config.allow_comments=!!t.allow_comments&&t.allow_comments;this.allowed_elements={};this.config.protocols=t.protocols?t.protocols:{};this.config.add_attributes=t.add_attributes?t.add_attributes:{};this.dom=t.dom?t.dom:document;for(e=0;e<this.config.elements.length;e++)this.allowed_elements[this.config.elements[e]]=!0;this.config.remove_element_contents={};this.config.remove_all_contents=!1;if(t.remove_contents)if(t.remove_contents instanceof Array)for(e=0;e<t.remove_contents.length;e++)this.config.remove_element_contents[t.remove_contents[e]]=!0;else this.config.remove_all_contents=!0;this.transformers=t.transformers?t.transformers:[]}s.REGEX_PROTOCOL=/^([A-Za-z0-9\+\-\.\&\;\*\s]*?)(?:\:|&*0*58|&*x0*3a)/i;s.RELATIVE="__RELATIVE__";s.ALL="__ALL__";s.prototype.clean_node=function(e){var t=this.dom.createDocumentFragment();this.current_element=t;this.whitelist_nodes=[];function n(e,t){var n;for(n=0;n<t.length;n++)if(t[n]==e)return n;return-1}function o(){var e,t,n=[],o={};for(e=0;e<arguments.length;e++)if(arguments[e]&&arguments[e].length)for(t=0;t<arguments[e].length;t++)if(!o[arguments[e][t]]){o[arguments[e][t]]=!0;n.push(arguments[e][t])}return n}function r(e){var t;switch(e.nodeType){case 1:a.call(this,e);break;case 3:case 5:t=e.cloneNode(!1);this.current_element.appendChild(t);break;case 8:if(this.config.allow_comments){t=e.cloneNode(!1);this.current_element.appendChild(t)}break;default:console&&console.log&&console.log("unknown node type",e.nodeType)}}function a(e){var t,i,a,l,h,d,u,_,f,g,m=c.call(this,e);a=(e=m.node).nodeName.toLowerCase();i=this.current_element;if(this.allowed_elements[a]||m.whitelist){this.current_element=this.dom.createElement(e.nodeName);i.appendChild(this.current_element);var p=this.config.attributes;l=o(p[a],p[s.ALL],m.attr_whitelist);for(t=0;t<l.length;t++){d=l[t];if(h=e.attributes[d]){g=!0;if(this.config.protocols[a]&&this.config.protocols[a][d]){_=this.config.protocols[a][d];g=(f=h.value.toLowerCase().match(s.REGEX_PROTOCOL))?-1!=n(f[1],_):-1!=n(s.RELATIVE,_)}if(g){(u=document.createAttribute(d)).value=h.value;this.current_element.setAttributeNode(u)}}}if(this.config.add_attributes[a])for(d in this.config.add_attributes[a]){(u=document.createAttribute(d)).value=this.config.add_attributes[a][d];this.current_element.setAttributeNode(u)}}else if(-1!=n(e,this.whitelist_nodes)){this.current_element=e.cloneNode(!0);for(;this.current_element.childNodes.length>0;)this.current_element.removeChild(this.current_element.firstChild);i.appendChild(this.current_element)}if(!this.config.remove_all_contents&&!this.config.remove_element_contents[a])for(t=0;t<e.childNodes.length;t++)r.call(this,e.childNodes[t]);this.current_element.normalize&&this.current_element.normalize();this.current_element=i}function c(e){var t,i,s,r={attr_whitelist:[],node:e,whitelist:!1};for(t=0;t<this.transformers.length;t++)if(null!=(s=this.transformers[t]({allowed_elements:this.allowed_elements,config:this.config,node:e,node_name:e.nodeName.toLowerCase(),whitelist_nodes:this.whitelist_nodes,dom:this.dom}))){if("object"!=typeof s)throw new Error("transformer output must be an object or null");if(s.whitelist_nodes&&s.whitelist_nodes instanceof Array)for(i=0;i<s.whitelist_nodes.length;i++)-1==n(s.whitelist_nodes[i],this.whitelist_nodes)&&this.whitelist_nodes.push(s.whitelist_nodes[i]);r.whitelist=!!s.whitelist;s.attr_whitelist&&(r.attr_whitelist=o(r.attr_whitelist,s.attr_whitelist));r.node=s.node?s.node:r.node}return r}for(i=0;i<e.childNodes.length;i++)r.call(this,e.childNodes[i]);t.normalize&&t.normalize();return t};void 0!==(o=function(){return s}.apply(t,[]))&&(e.exports=o)},function(e,t){e.exports='@font-face{font-family:Lato;font-display:swap;src:local("Lato-Regular"),url(https://api_base_url/fonts/Lato/Lato-Regular.woff2) format("woff2"),url(https://api_base_url/fonts/Lato/Lato-Regular.woff) format("woff")}@font-face{font-family:Lato;font-style:italic;font-display:swap;src:local("Lato-Italic"),url(https://api_base_url/fonts/Lato/Lato-Italic.woff2) format("woff2"),url(https://api_base_url/fonts/Lato/Lato-Italic.woff) format("woff")}@font-face{font-family:Lato;font-weight:800;font-display:swap;src:local("Lato-Bold"),url(https://api_base_url/fonts/Lato/Lato-Bold.woff2) format("woff2"),url(https://api_base_url/fonts/Lato/Lato-Bold.woff) format("woff")}#hs-banner-parent div,#hs-banner-parent p{color:inherit}#hs-banner-parent *{font-size:inherit;font-family:inherit;background:none;border:none;box-shadow:none;box-sizing:border-box;margin:0;padding:0;display:inline-block;line-height:1.75em}#hs-banner-parent .hs-hidden{display:none!important}#hs-banner-parent #hs-banner-gpc{font-size:var(--hs-banner-font-size,14px);font-family:Lato;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0));-webkit-transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0)) translateZ(3000000000px)}#hs-banner-gpc #hs-banner-gpc-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-banner-gpc #hs-banner-gpc-header{display:flex;flex-direction:row;justify-content:flex-end}#hs-banner-gpc #hs-banner-gpc-close-button{cursor:pointer;display:block}#hs-banner-gpc #hs-banner-gpc-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-banner-parent #hs-eu-cookie-confirmation{font-size:var(--hs-banner-font-size,14px);font-family:Lato;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0));-webkit-transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0)) translateZ(3000000000px)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner button:focus{box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px -webkit-focus-ring-color}#hs-eu-cookie-confirmation #hs-eu-header-container{display:var(--hs-banner-close-button-display,none);flex-direction:row;justify-content:flex-end}#hs-eu-cookie-confirmation #hs-eu-close-button{cursor:pointer;display:block}#hs-eu-cookie-confirmation #hs-eu-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-buttons-area{display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:baseline}#hs-eu-cookie-confirmation #hs-eu-confirmation-button-group,#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{flex-grow:1}#hs-eu-cookie-confirmation #hs-eu-confirmation-button,#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button,#hs-eu-cookie-confirmation #hs-eu-decline-button{flex:1;cursor:pointer;border-radius:var(--hs-banner-button-corners,3em);min-width:11em;height:3.3em}#hs-eu-cookie-confirmation #hs-eu-confirmation-button{color:var(--hs-banner-accept-text-color,#fff);background:var(--hs-banner-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-decline-button{color:var(--hs-banner-decline-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-decline-color,#fff);border:1px solid var(--hs-banner-decline-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button{text-decoration:underline;font-weight:800;color:var(--hs-banner-settings-text-color,var(--hs-banner-accentColor,#425b76))}@media print{#hs-banner-gpc,#hs-eu-cookie-confirmation{display:none!important}}'},function(e,t){e.exports="#hs-banner-parent #hs-modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.28);display:flex;justify-content:center;align-items:center;z-index:3000000001;-webkit-transform:translateZ(3000000001px)}@media print{#hs-banner-parent #hs-modal{display:none!important}}#hs-banner-parent #hs-modal-content{position:absolute;display:flex;flex-direction:column;gap:1.1em;padding:var(--hs-banner-modal-padding,2.2em);width:calc(min(var(--hs-banner-modal-width, 50.3em), 100%));max-height:80%;background-color:var(--hs-banner-modal-color,#fafbff);border-radius:var(--hs-banner-modal-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);font-size:var(--hs-banner-modal-font-size,14px);font-family:Lato;font-weight:400;line-height:1.75em;color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-header-container{display:flex;flex-direction:row;justify-content:flex-end}#hs-modal-content #hs-modal-close-button{cursor:pointer;display:block}#hs-modal-content #hs-modal-close-button svg{width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-body{overflow:auto}#hs-modal-content #hs-modal-body-container{position:relative;display:flex;flex-flow:column;gap:1.1em;height:100%;width:100%}#hs-modal-content #hs-modal-introduction{display:inline-block}#hs-modal-content #hs-modal-introduction span{font-weight:800;font-size:1.3em;color:inherit}#hs-modal-content #hs-categories-container{display:flex;flex-direction:column;gap:1.1em}#hs-modal-content #hs-categories-container .hs-category-row{display:flex;flex-direction:column;background:var(--hs-banner-modal-cateogry-color,#fff);border-radius:var(--hs-banner-modal-category-corners,var(--hs-banner-modal-corners,12px));padding:2em}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-input{opacity:0;width:100%;height:100%;cursor:pointer}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch{width:calc(3.4em + 6px);height:calc(1.7em + 6px);position:relative;background-color:var(--hs-banner-modal-toggle-off-color,#f1f1f1);border:3px solid var(--hs-banner-modal-toggle-off-color,#f1f1f1);border-radius:1.7em;transition:background-color .2s ease,border-color .2s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-nob{position:absolute;height:1.7em;width:1.7em;left:0;border-radius:inherit;box-shadow:0 2px 5px rgba(0,0,0,.3);background:var(--hs-banner-modal-cateogry-color,#fff);transition:left .5s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag{background-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76));border-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag .hs-toggle-switch-nob{left:50%}#hs-modal-content #hs-categories-container .description-accordion-arrow{transition:transform .2s;width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .description-accordion-arrow.rotated{transform:rotate(90deg)}#hs-modal-content #hs-categories-container .hs-category-description{transition:max-height .2s;box-sizing:border-box;overflow:hidden;opacity:0}#hs-modal-content #hs-categories-container .hs-category-description.visible{opacity:1;color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .hs-category-row-header{display:flex;justify-content:space-between;align-items:center}#hs-modal-content #hs-categories-container .hs-category-label{display:flex;flex-grow:1;gap:1.1em;align-items:center;justify-content:left;font-weight:800;color:var(--hs-banner-modal-category-text-color,#15295a);cursor:pointer}#hs-modal-content #hs-categories-container .hs-always-active-label{color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-modal-footer{display:flex;justify-content:flex-end}#hs-modal-content #hs-modal-footer-container{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-modal-content #hs-modal-accept-all,#hs-modal-content #hs-modal-save-settings{flex:1;border-radius:var(--hs-banner-modal-button-corners,3em);min-width:11em;height:3.3em;cursor:pointer}#hs-modal-content #hs-modal-accept-all{color:var(--hs-banner-modal-accept-text-color,#fafbff);background:var(--hs-banner-modal-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-modal-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-modal-save-settings{color:var(--hs-banner-modal-save-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-modal-save-color,#fafbff);border:1px solid var(--hs-banner-modal-save-border-color,var(--hs-banner-accentColor,#425b76))}"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="<unknown>";function i(e){return e.split("\n").reduce((function(e,t){var n=a(t)||l(t)||u(t)||m(t)||f(t);n&&e.push(n);return e}),[])}var s=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,r=/\((\S*)(?::(\d+))(?::(\d+))\)/;function a(e){var t=s.exec(e);if(!t)return null;var n=t[2]&&0===t[2].indexOf("native"),i=t[2]&&0===t[2].indexOf("eval"),a=r.exec(t[2]);if(i&&null!=a){t[2]=a[1];t[3]=a[2];t[4]=a[3]}return{file:n?null:t[2],methodName:t[1]||o,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var c=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function l(e){var t=c.exec(e);return t?{file:t[2],methodName:t[1]||o,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var h=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,d=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function u(e){var t=h.exec(e);if(!t)return null;var n=t[3]&&t[3].indexOf(" > eval")>-1,i=d.exec(t[3]);if(n&&null!=i){t[3]=i[1];t[4]=i[2];t[5]=null}return{file:t[3],methodName:t[1]||o,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var _=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function f(e){var t=_.exec(e);return t?{file:t[3],methodName:t[1]||o,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var g=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function m(e){var t=g.exec(e);return t?{file:t[2],methodName:t[1]||o,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}t.parse=i},function(e,t,n){"use strict";n.r(t);const o="_hspb_loaded",i="_hsp",s="_hsq",r="_hsGeoTargetingTest",a="_hsGpcSignal",c="_hsScanningMode",l="_hspb_ran",h="hsdbg",d="_hsPrivacyTest",u="hs-eu-cookie-confirmation",_="hs-banner-gpc",f="hs-banner-parent",g="hs-modal",m="hs-modal-content",p={NECESSARY:"necessary",ANALYTICS:"analytics",ADVERTISEMENT:"advertisement",FUNCTIONALITY:"functionality"},b="hs-hidden",y="hs-banner-style",v="hs-banner-modal-style",C="disabledHsPopups",x="PRIVACY";class S{constructor(e,t){this.win=e;this.doc=t;this.hasLoadedBaseStyle=!1;this.hasLoadedCbcStyle=!1}setHasLoadedBaseStyle(e){this.hasLoadedBaseStyle=e}setHasLoadedCbcStyle(e){this.hasLoadedCbcStyle=e}getWindow(){return this.win}getDocument(){return this.doc}getNavigator(){return this.getWindow().navigator}getLocation(){return this.getWindow().location}getPathname(){return this.getLocation().pathname}getHostname(){try{return this.getLocation().hostname}catch(e){return this.getDocument().domain}}getHasLoadedBaseStyle(){return this.hasLoadedBaseStyle}getHasLoadedCbcStyle(){return this.hasLoadedCbcStyle}}const w=new S(window,document);function T(){return w}class k{constructor(e){this.logPrepend="[HubSpot cookie banner]";this.context=e}info(e){this.isDebugEnabled()&&this.context.getWindow().console.log(`${this.logPrepend} ${e}`)}debug(e){this.isDebugEnabled()&&this.context.getWindow().console.debug(`${this.logPrepend} ${e}`)}error(e){this.isDebugEnabled()&&this.context.getWindow().console.error(`${this.logPrepend} ${e}`)}isDebugEnabled(){return this.context.getDocument().location.search.includes(h)}}var O=new k(T());const E=[0,0,0],I=e=>e.some(e=>e>0),L=(e,t)=>(e.map((e,n)=>e-t[n]).find(e=>0!==e)||0)>=0;class N{constructor(e="",t=[],n=[]){this.targetedPathPrefix=e;this.targetedCountries=t;this.targetedRegions=n}test(e,t,n){const o=this.targetedPathPrefix.length+1;if(!e.startsWith(this.targetedPathPrefix))return E;const i=this.targetedCountries.length>0||this.targetedRegions.length>0,s=void 0!==t&&this.targetedCountries.includes(t),r=t&&n?`${t}-${n}`:void 0,a=void 0!==r&&this.targetedRegions.includes(r);return[i&&a?o:0,i&&s?o:0,i?0:o]}static fromJS(e){const{allUrlsAndLocations:t,path:n,targetedCountries:o,targetedRegions:i}=e;return t?new N:new N(n||"",o||[],i||[])}}class A{constructor(e){this.value=e}getValue(){return this.value}static fromJS(e){if(!e)return this.TOP;switch(e){case 0:return this.TOP;case 1:return this.BOTTOM;case 2:return this.BOTTOM_LEFT;case 3:return this.BOTTOM_RIGHT;case 4:return this.CENTER;default:return this.TOP}}}A.TOP=new A(0);A.BOTTOM=new A(1);A.BOTTOM_LEFT=new A(2);A.BOTTOM_RIGHT=new A(3);A.CENTER=new A(4);class B{constructor(e,t,n){this.position=e;this.accentColor=t;this.showCloseButton=n}static fromJS(e){const{position:t,accentColor:n,showCloseButton:o}=e;return new B(A.fromJS(t),n,o||!1)}}var P=n(0),R=n.n(P);const D=new R.a({attributes:{a:["href","title","target"],blockquote:["cite"],ol:["start","type"],q:["cite"],ul:["type"],span:["class"]},elements:["a","b","blockquote","br","caption","cite","code","dd","dl","dt","em","h1","h2","h3","h4","h5","h6","i","li","ol","p","pre","q","small","strike","strong","sub","sup","u","ul","font","div","span"],protocols:{a:{href:["http","https","mailto",R.a.ALL]},blockquote:{cite:["http","https",R.a.RELATIVE]},q:{cite:["http","https",R.a.RELATIVE]}},remove_contents:["style","script"],add_attributes:{a:{rel:"noopener"}}}),U=e=>{if(!e)return e;const t=document.createElement("div");try{const n=document.createRange().createContextualFragment(e),o=D.clean_node(n);t.appendChild(o.cloneNode(!0))}catch(t){O.error("we had an error sanitizing an html string: "+e)}return t.innerHTML},G=e=>({__html:e||""});class M{constructor(e,t,n){this.description=e;this.label=t;this.toggleLabel=n}static fromJS(e){return new M(e.description,e.label,e.toggleLabel)}getSanitizedText(){return new M(U(this.description),U(this.label),U(this.toggleLabel))}}class Y{constructor(e,t,n,o,i,s,r){this.acceptLabel=e;this.saveSettingsLabel=t;this.introduction=n;this.necessary=o;this.analytics=i;this.advertisement=s;this.functionality=r}static fromJS(e){return new Y(e.acceptAllLabel,e.saveSettingsLabel,M.fromJS(e.introduction),M.fromJS(e.categories.necessary),M.fromJS(e.categories.analytics),M.fromJS(e.categories.advertisement),M.fromJS(e.categories.functionality))}getSanitizedText(){return new Y(U(this.acceptLabel),U(this.saveSettingsLabel),this.introduction.getSanitizedText(),this.necessary.getSanitizedText(),this.analytics.getSanitizedText(),this.advertisement.getSanitizedText(),this.functionality.getSanitizedText())}}class F{constructor(e,t,n,o,i,s){this.notification=e;this.acceptLabel=t;this.declineLabel=n;this.disclaimer=o;this.cookieSettingsLabel=i;this.modalText=s}static fromJS(e){return new F(e.notification,e.acceptLabel,e.declineLabel,e.disclaimer,e.modalText&&e.modalText.cookieSettingsLabel,e.modalText&&Y.fromJS(e.modalText))}getSanitizedText(){return new F(U(this.notification),U(this.acceptLabel),U(this.declineLabel),U(this.disclaimer),this.cookieSettingsLabel&&U(this.cookieSettingsLabel),this.modalText&&this.modalText.getSanitizedText())}}class H{constructor(e,t){this.value=e;this.name=t}getValue(){return this.value}getName(){return this.name}static fromJS(e){switch(e){case 0:return this.COOKIES_WITHOUT_BANNER;case 1:return this.NO_COOKIES;case 2:return this.NOTIFY;case 3:return this.OPT_IN;case 4:return this.COOKIES_BY_CATEGORY;case 5:return this.OPT_OUT;case 6:return this.OPT_OUT_BY_CATEGORY;default:return this.COOKIES_BY_CATEGORY}}}H.COOKIES_WITHOUT_BANNER=new H(0,"COOKIES_WITHOUT_BANNER");H.NO_COOKIES=new H(1,"NO_COOKIES");H.NOTIFY=new H(2,"NOTIFY");H.OPT_IN=new H(3,"OPT_IN");H.COOKIES_BY_CATEGORY=new H(4,"COOKIES_BY_CATEGORY");H.OPT_OUT=new H(5,"OPT_OUT");H.OPT_OUT_BY_CATEGORY=new H(6,"OPT_OUT_BY_CATEGORY");class z{constructor(e,t){this.type=e;this.text=t}static fromJS(e){const{type:t,text:n}=e;return new z(H.fromJS(t),F.fromJS(n))}getSanitizedPolicy(){return new z(this.type,this.text.getSanitizedText())}}class V{constructor(e,t){this.enabled=e;this.notificationText=U(t||"")}static fromJS(e){return new V(e.enabled,e.notificationText)}}class ${constructor(e,t,n,o,i,s,r,a,c){this.id=e;this.portalId=t;this.domain=n;this.label=o;this.enabled=i;this.configuration=s;this.policy=r;this.customizationSettings=a;this.gpcSettings=c}static fromJS(e){const{id:t,portalId:n,domain:o,label:i,enabled:s,configuration:r,policy:a,legacyCustomization:c,gpcSettings:l}=e;return new $(t,n,o,i,s,N.fromJS(r),z.fromJS(a),B.fromJS(c),V.fromJS(l))}withSanitizedPolicy(){return new $(this.id,this.portalId,this.domain,this.label,this.enabled,this.configuration,this.policy.getSanitizedPolicy(),this.customizationSettings,this.gpcSettings)}toLegacyPrivacyPolicy(){let e;switch(this.policy.type){case H.COOKIES_WITHOUT_BANNER:e=0;break;case H.NO_COOKIES:e=2;break;case H.OPT_OUT:case H.NOTIFY:case H.OPT_IN:e=1;break;case H.OPT_OUT_BY_CATEGORY:case H.COOKIES_BY_CATEGORY:default:e=3}return{active:this.enabled,testing:!1,mode:e,policyWording:"not used",acceptWording:"not used",cancelWording:"not used",disclaimerWording:"not used",hideDecline:this.policy.type===H.NOTIFY,accentColor:this.customizationSettings.accentColor,bannerType:"not used",label:this.label,privacyDefault:!1,cookiesByCategory:{},id:this.id,portalId:this.portalId}}}const K=1,W=2,q=3,j={[K]:"analytics",[W]:"advertisement",[q]:"functionality"};class J{constructor(e,t,n){this.allowed=e;this.previousCategories=n||{necessary:!0,analytics:!1,advertisement:!1,functionality:!1};this.categories=t||{necessary:!0,analytics:e,advertisement:e,functionality:e}}hasAnalyticsConsent(){return this.allowed||!0===this.categories.analytics}adsHasChangedToFalse(){return!0===this.previousCategories.advertisement&&!1===this.categories.advertisement}update(e){this.previousCategories=this.categories;this.categories=Object.assign({},this.categories,{analytics:e,advertisement:e,functionality:e});this.allowed=e;return this}updateCategories({analytics:e,advertisement:t,functionality:n}){this.previousCategories=this.categories;this.categories={necessary:!0,analytics:e,advertisement:t,functionality:n};this.allowed=e&&t&&n;return this}allCategoriesSelected(){return this.categories.necessary&&this.categories.analytics&&this.categories.advertisement&&this.categories.functionality}getSafeCopy(){return new J(this.allowed,{necessary:this.categories.necessary,analytics:this.categories.analytics,advertisement:this.categories.advertisement,functionality:this.categories.functionality},{necessary:this.previousCategories.necessary,analytics:this.previousCategories.analytics,advertisement:this.previousCategories.advertisement,functionality:this.previousCategories.functionality})}toCookieString(){return`${K}:${this.categories.analytics}_${W}:${this.categories.advertisement}_${q}:${this.categories.functionality}`}static buildFromCookieString(e){const t=e.includes(",")?e.split(","):e.split("_"),n={necessary:!0,analytics:!1,advertisement:!1,functionality:!1};t.forEach(e=>{const t=e.split(":");if(2!==t.length)return;const o=t[0],i=j[o];i&&(n[i]="true"===t[1])});const o=n.necessary&&n.advertisement&&n.analytics&&n.functionality;return new J(o,n)}static buildInitialConsent(){return new J(!1,{necessary:!0,analytics:!1,advertisement:!1,functionality:!1})}}const Q=e=>encodeURI(e),Z=e=>decodeURI(e),X="_fbp",ee="1970-01-01T00:00:01-00:00";class te{constructor(e){this.context=e;this.cookiesToSubdomain=!1;this.useSecureCookies=!1;this.domains=[];this.currentDomain=""}isEnabled(){return this.context.getNavigator().cookieEnabled||"cookie"in this.context.getDocument()&&this.context.getDocument().cookie.length>0}addDomain(e){("."+this.context.getHostname()).endsWith(e)&&(!this.currentDomain||e.length<this.currentDomain.length)&&(this.currentDomain=e);this.domains.push(e)}getDomains(){return this.domains}get(e){const t=new RegExp(`(^|;)[ ]*${e}=([^;]*)`).exec(this.context.getDocument().cookie);return t?Z(t[2]):""}set(e,t,n){let o,i,s=!1;if((n=n||{}).minsToExpire){o=new Date;o.setTime(o.getTime()+1e3*n.minsToExpire*60)}else if(n.daysToExpire){o=new Date;o.setTime(o.getTime()+1e3*n.daysToExpire*60*60*24)}else n.expiryDate&&n.expiryDate.toGMTString?o=n.expiryDate:n.expiryDate&&(o=new Date(n.expiryDate));if(void 0!==o){i=o.toGMTString();s=!0}this.setCookie(e,Q(t),{expires:s?";expires="+i:"",expiresTime:s?o:null,path:";path="+(n.path?n.path:"/"),domain:!this.cookiesToSubdomain&&this.currentDomain?";domain="+this.currentDomain:"",secure:this.useSecureCookies?";secure":"",sameSite:";SameSite=Lax"})}getDomainAncestry(e){if(""===e||!e)return[];const t=e.split(".");if(2===t.length)return[e];if(""===t[t.length-1]||t.length<2){console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);return[]}const n=[];let o,i=""+t[t.length-1];for(o=t.length-2;o>=0;o--){if(""===t[o]){if(0!==o){console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);return[]}continue}const s=`${t[o]}.${i}`;n.push(s);i=s}return n}removeFBPCookie(){const e=new Date(ee),t=e.toUTCString();this.getDomainAncestry(this.context.getDocument().domain).forEach(n=>{this.setCookie(X,"",{expires:";expires="+t,expiresTime:e,path:";path=/",domain:";domain=."+n,secure:"",sameSite:";SameSite=Lax"})})}getGACookieNames(){const e=this.context.getDocument().cookie;if(!e)return[];const t=e.split(";"),n=new RegExp("^(_ga_[a-zA-Z0-9]+)=[^;]+$"),o=[];t.forEach(e=>{const t=e.trim().match(n);t&&o.push(t[1])});return o}removeGACookie(){this.getGACookieNames().forEach(e=>this.remove(e))}remove(e){this.set(e,"",{expiryDate:ee})}setCookie(e,t,n){const o=n.expires+n.path+n.domain+n.sameSite+n.secure;this.writeCookie(`${e}=${t}${o}`)}writeCookie(e){this.context.getDocument().cookie=e}setCookiesToSubdomain(e){this.cookiesToSubdomain=e}setUseSecureCookies(e){this.useSecureCookies=e}}class ne{constructor(e,t){this.name=e;this.expirationDays=t}getName(){return this.name}getExpirationDays(){return this.expirationDays}}ne.CATEGORY_PREFERENCE_COOKIE=new ne("__hs_cookie_cat_pref",180);ne.GPC_BANNER_DISMISS_COOKIE=new ne("__hs_gpc_banner_dismiss",180);ne.NOTIFY_BANNER_DIMISS_COOKIE=new ne("__hs_notify_banner_dismiss",180);ne.OPT_OUT_COOKIE=new ne("__hs_opt_out",180);ne.INITIAL_OPT_IN=new ne("__hs_initial_opt_in",7);var oe,ie,se,re,ae,ce,le={},he=[],de=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ue(e,t){for(var n in t)e[n]=t[n];return e}function _e(e){var t=e.parentNode;t&&t.removeChild(e)}function fe(e,t,n){var o,i,s,r={};for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:r[s]=t[s];if(arguments.length>2&&(r.children=arguments.length>3?oe.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===r[s]&&(r[s]=e.defaultProps[s]);return ge(e,r,o,i,null)}function ge(e,t,n,o,i){var s={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++se:i};return null==i&&null!=ie.vnode&&ie.vnode(s),s}function me(e){return e.children}function pe(e,t){this.props=e,this.context=t}function be(e,t){if(null==t)return e.__?be(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?be(e):null}function ye(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return ye(e)}}function ve(e){(!e.__d&&(e.__d=!0)&&re.push(e)&&!Ce.__r++||ce!==ie.debounceRendering)&&((ce=ie.debounceRendering)||ae)(Ce)}function Ce(){for(var e;Ce.__r=re.length;)e=re.sort((function(e,t){return e.__v.__b-t.__v.__b})),re=[],e.some((function(e){var t,n,o,i,s,r;e.__d&&(s=(i=(t=e).__v).__e,(r=t.__P)&&(n=[],(o=ue({},i)).__v=i.__v+1,Le(r,i,o,t.__n,void 0!==r.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?be(i):s,i.__h),Ne(n,i),i.__e!=s&&ye(i)))}))}function xe(e,t,n,o,i,s,r,a,c,l){var h,d,u,_,f,g,m,p=o&&o.__k||he,b=p.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(_=n.__k[h]=null==(_=t[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?ge(null,_,null,null,_):Array.isArray(_)?ge(me,{children:_},null,null,null):_.__b>0?ge(_.type,_.props,_.key,null,_.__v):_)){if(_.__=n,_.__b=n.__b+1,null===(u=p[h])||u&&_.key==u.key&&_.type===u.type)p[h]=void 0;else for(d=0;d<b;d++){if((u=p[d])&&_.key==u.key&&_.type===u.type){p[d]=void 0;break}u=null}Le(e,_,u=u||le,i,s,r,a,c,l),f=_.__e,(d=_.ref)&&u.ref!=d&&(m||(m=[]),u.ref&&m.push(u.ref,null,_),m.push(d,_.__c||f,_)),null!=f?(null==g&&(g=f),"function"==typeof _.type&&_.__k===u.__k?_.__d=c=Se(_,c,e):c=we(e,_,u,p,f,c),"function"==typeof n.type&&(n.__d=c)):c&&u.__e==c&&c.parentNode!=e&&(c=be(u))}for(n.__e=g,h=b;h--;)null!=p[h]&&("function"==typeof n.type&&null!=p[h].__e&&p[h].__e==n.__d&&(n.__d=be(o,h+1)),Pe(p[h],p[h]));if(m)for(h=0;h<m.length;h++)Be(m[h],m[++h],m[++h])}function Se(e,t,n){for(var o,i=e.__k,s=0;i&&s<i.length;s++)(o=i[s])&&(o.__=e,t="function"==typeof o.type?Se(o,t,n):we(n,o,o,i,o.__e,t));return t}function we(e,t,n,o,i,s){var r,a,c;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||i!=s||null==i.parentNode)e:if(null==s||s.parentNode!==e)e.appendChild(i),r=null;else{for(a=s,c=0;(a=a.nextSibling)&&c<o.length;c+=2)if(a==i)break e;e.insertBefore(i,s),r=s}return void 0!==r?r:i.nextSibling}function Te(e,t,n,o,i){var s;for(s in n)"children"===s||"key"===s||s in t||Oe(e,s,null,n[s],o);for(s in t)i&&"function"!=typeof t[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===t[s]||Oe(e,s,t[s],n[s],o)}function ke(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||de.test(t)?n:n+"px"}function Oe(e,t,n,o,i){var s;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||ke(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||ke(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?o||e.addEventListener(t,s?Ie:Ee,s):e.removeEventListener(t,s?Ie:Ee,s);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function Ee(e){this.l[e.type+!1](ie.event?ie.event(e):e)}function Ie(e){this.l[e.type+!0](ie.event?ie.event(e):e)}function Le(e,t,n,o,i,s,r,a,c){var l,h,d,u,_,f,g,m,p,b,y,v=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,a=t.__e=n.__e,t.__h=null,s=[a]),(l=ie.__b)&&l(t);try{e:if("function"==typeof v){if(m=t.props,p=(l=v.contextType)&&o[l.__c],b=l?p?p.props.value:l.__:o,n.__c?g=(h=t.__c=n.__c).__=h.__E:("prototype"in v&&v.prototype.render?t.__c=h=new v(m,b):(t.__c=h=new pe(m,b),h.constructor=v,h.render=Re),p&&p.sub(h),h.props=m,h.state||(h.state={}),h.context=b,h.__n=o,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=v.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=ue({},h.__s)),ue(h.__s,v.getDerivedStateFromProps(m,h.__s))),u=h.props,_=h.state,d)null==v.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==v.getDerivedStateFromProps&&m!==u&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,b),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,b)||t.__v===n.__v){h.props=m,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),h.__h.length&&r.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,b),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(u,_,f)}))}h.context=b,h.props=m,h.state=h.__s,(l=ie.__r)&&l(t),h.__d=!1,h.__v=t,h.__P=e,l=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(o=ue(ue({},o),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(f=h.getSnapshotBeforeUpdate(u,_)),y=null!=l&&l.type===me&&null==l.key?l.props.children:l,xe(e,Array.isArray(y)?y:[y],t,n,o,i,s,r,a,c),h.base=t.__e,t.__h=null,h.__h.length&&r.push(h),g&&(h.__E=h.__=null),h.__e=!1}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ae(n.__e,t,n,o,i,s,r,c);(l=ie.diffed)&&l(t)}catch(e){t.__v=null,(c||null!=s)&&(t.__e=a,t.__h=!!c,s[s.indexOf(a)]=null),ie.__e(e,t,n)}}function Ne(e,t){ie.__c&&ie.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){ie.__e(e,t.__v)}}))}function Ae(e,t,n,o,i,s,r,a){var c,l,h,d=n.props,u=t.props,_=t.type,f=0;if("svg"===_&&(i=!0),null!=s)for(;f<s.length;f++)if((c=s[f])&&"setAttribute"in c==!!_&&(_?c.localName===_:3===c.nodeType)){e=c,s[f]=null;break}if(null==e){if(null===_)return document.createTextNode(u);e=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,u.is&&u),s=null,a=!1}if(null===_)d===u||a&&e.data===u||(e.data=u);else{if(s=s&&oe.call(e.childNodes),l=(d=n.props||le).dangerouslySetInnerHTML,h=u.dangerouslySetInnerHTML,!a){if(null!=s)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(h||l)&&(h&&(l&&h.__html==l.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(Te(e,u,d,i,a),h)t.__k=[];else if(f=t.props.children,xe(e,Array.isArray(f)?f:[f],t,n,o,i&&"foreignObject"!==_,s,r,s?s[0]:n.__k&&be(n,0),a),null!=s)for(f=s.length;f--;)null!=s[f]&&_e(s[f]);a||("value"in u&&void 0!==(f=u.value)&&(f!==e.value||"progress"===_&&!f||"option"===_&&f!==d.value)&&Oe(e,"value",f,d.value,!1),"checked"in u&&void 0!==(f=u.checked)&&f!==e.checked&&Oe(e,"checked",f,d.checked,!1))}return e}function Be(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){ie.__e(e,n)}}function Pe(e,t,n){var o,i;if(ie.unmount&&ie.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Be(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){ie.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Pe(o[i],t,"function"!=typeof e.type);n||null==e.__e||_e(e.__e),e.__e=e.__d=void 0}function Re(e,t,n){return this.constructor(e,n)}function De(e,t,n){var o,i,s;ie.__&&ie.__(e,t),i=(o="function"==typeof n)?null:n&&n.__k||t.__k,s=[],Le(t,e=(!o&&n||t).__k=fe(me,null,[e]),i||le,le,void 0!==t.ownerSVGElement,!o&&n?[n]:i?null:t.firstChild?oe.call(t.childNodes):null,s,!o&&n?n:i?i.__e:t.firstChild,o),Ne(s,e)}oe=he.slice,ie={__e:function(e,t){for(var n,o,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),i=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(t){e=t}throw e}},se=0,function(e){return null!=e&&void 0===e.constructor},pe.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=ue({},this.state),"function"==typeof e&&(e=e(ue({},n),this.props)),e&&ue(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),ve(this))},pe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ve(this))},pe.prototype.render=me,re=[],ae="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ce.__r=0,0;var Ue=0;function Ge(e,t,n,o,i){var s,r,a={};for(r in t)"ref"==r?s=t[r]:a[r]=t[r];var c={type:e,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ue,__source:o,__self:i};if("function"==typeof e&&(s=e.defaultProps))for(r in s)void 0===a[r]&&(a[r]=s[r]);return ie.vnode&&ie.vnode(c),c}var Me,Ye,Fe,He=0,ze=[],Ve=ie.__b,$e=ie.__r,Ke=ie.diffed,We=ie.__c,qe=ie.unmount;function je(e,t){ie.__h&&ie.__h(Ye,e,He||t),He=0;var n=Ye.__H||(Ye.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Je(e){return He=1,Qe(rt,e)}function Qe(e,t,n){var o=je(Me++,2);return o.t=e,o.__c||(o.__=[n?n(t):rt(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=Ye),o.__}function Ze(e,t){var n=je(Me++,3);!ie.__s&&st(n.__H,t)&&(n.__=e,n.__H=t,Ye.__H.__h.push(n))}function Xe(e){return He=5,et((function(){return{current:e}}),[])}function et(e,t){var n=je(Me++,7);return st(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function tt(){for(var e;e=ze.shift();)if(e.__P)try{e.__H.__h.forEach(ot),e.__H.__h.forEach(it),e.__H.__h=[]}catch(t){e.__H.__h=[],ie.__e(t,e.__v)}}ie.__b=function(e){Ye=null,Ve&&Ve(e)},ie.__r=function(e){$e&&$e(e),Me=0;var t=(Ye=e.__c).__H;t&&(t.__h.forEach(ot),t.__h.forEach(it),t.__h=[])},ie.diffed=function(e){Ke&&Ke(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==ze.push(t)&&Fe===ie.requestAnimationFrame||((Fe=ie.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),nt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);nt&&(t=requestAnimationFrame(n))})(tt)),Ye=null},ie.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ot),e.__h=e.__h.filter((function(e){return!e.__||it(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],ie.__e(n,e.__v)}})),We&&We(e,t)},ie.unmount=function(e){qe&&qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{ot(e)}catch(e){t=e}})),t&&ie.__e(t,n.__v))};var nt="function"==typeof requestAnimationFrame;function ot(e){var t=Ye,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),Ye=t}function it(e){var t=Ye;e.__c=e.__(),Ye=t}function st(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function rt(e,t){return"function"==typeof t?t(e):t}function at(){return Ge("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32",children:Ge("path",{fill:"currentColor",d:"M4.3,27.7c0.2,0.2,0.6,0.5,1,0.5c0.4,0,0.8-0.2,1-0.5l9.6-9.5l9.6,9.5c0.2,0.2,0.6,0.5,1,0.5 c0.8,0,1.5-0.6,1.5-1.5c0-0.4-0.2-0.8-0.5-1L18.2,16l9.5-9.5c0.2-0.2,0.4-0.6,0.4-1c0-0.8-0.6-1.5-1.5-1.5c-0.4,0-0.7,0.2-1,0.4l0,0 L16,13.8L6.5,4.3C6.2,4,5.8,3.8,5.4,3.8c-0.8,0-1.5,0.6-1.5,1.5c0,0.5,0.2,0.8,0.5,1.1l0,0l9.5,9.5l-9.5,9.6c-0.2,0.2-0.5,0.6-0.5,1 S4.1,27.4,4.3,27.7L4.3,27.7z"})})}function ct(e,t,n,o){n&&o&&t.addEventListener("keydown",t=>{if(!("Tab"===t.key||"Tab"===t.code))return;const i=e.getDocument().activeElement;if(t.shiftKey){if(i===n){o.focus();t.preventDefault()}}else if(i===o){n.focus();t.preventDefault()}})}function lt({context:e,onAcceptAll:t,onCookieSettingsClick:n,onDeclineAll:o,setting:i,onCloseBannerButtonClick:s,isModalDisplayed:r}){const a=Xe(null),c=Xe(null),l=Xe(null),h=Xe(null),d=Xe(null);Ze(()=>{if(!a.current)return;const t=c.current||l.current,n=d.current||h.current;ct(e,a.current,t,n)},[e,a,c,h,d,l]);const _=r?-1:0,f=i.policy,g=i.policy.type,m=g===H.OPT_OUT_BY_CATEGORY||g===H.COOKIES_BY_CATEGORY,p=g===H.OPT_IN||g===H.OPT_OUT||g===H.OPT_OUT_BY_CATEGORY||g===H.COOKIES_BY_CATEGORY;return Ge("div",{id:u,className:i.customizationSettings.position===A.BOTTOM?"hs-cookie-notification-position-bottom":"","data-nosnippet":"true",role:"dialog","aria-describedby":"hs-eu-policy-wording","aria-label":"Cookie banner",ref:a,tabIndex:_,children:Ge("div",{id:"hs-eu-cookie-confirmation-inner",children:[Ge("div",{id:"hs-eu-header-container",children:Ge("button",{id:"hs-eu-close-button",className:"hs-close-button",onClick:()=>s(g),ref:c,"aria-label":"Dismiss cookie banner",tabIndex:_,children:Ge(at,{})})}),Ge("div",{id:"hs-eu-policy-wording",dangerouslySetInnerHTML:G(f.text.notification),ref:l,tabIndex:_}),f.text.disclaimer&&p&&Ge("p",{id:"hs-eu-cookie-disclaimer",dangerouslySetInnerHTML:G(f.text.disclaimer),tabIndex:_}),Ge("div",{id:"hs-eu-cookie-confirmation-buttons-area",children:Ge("div",{id:"hs-eu-confirmation-button-group",children:[m&&Ge("button",{onClick:()=>n(),id:"hs-eu-cookie-settings-button",dangerouslySetInnerHTML:G(f.text.cookieSettingsLabel),"aria-label":f.text.cookieSettingsLabel,tabIndex:_}),Ge("div",{id:"hs-eu-opt-in-buttons",children:[Ge("button",{id:"hs-eu-confirmation-button",onClick:()=>t(g),dangerouslySetInnerHTML:G(f.text.acceptLabel),"aria-label":f.text.acceptLabel,ref:h,tabIndex:_}),p&&Ge("button",{id:"hs-eu-decline-button",onClick:()=>o(),dangerouslySetInnerHTML:G(f.text.declineLabel),ref:d,"aria-label":f.text.declineLabel,tabIndex:_})]})]})})]})})}function ht({category:e,disabled:t,onToggleChange:n,toggleValue:o}){const i="hs-category-toggle-"+e,s=i+"-help-text";return Ge("div",{className:"hs-toggle-switch "+(o?"hs-toggle-selected-flag":""),children:[Ge("div",{className:"hs-toggle-switch-nob"}),Ge("label",{htmlFor:i,children:Ge("span",{className:"hs-hidden",id:s,children:`${e} cookies ${o?"allowed":"disallowed"}`})}),Ge("input",{id:i,className:"hs-toggle-switch-input",type:"checkbox",onChange:e=>n(e.currentTarget.checked),checked:o,disabled:t,"aria-pressed":o,tabIndex:0,"aria-describedby":s,"data-test-id":i})]})}function dt({className:e}){return Ge("svg",{version:"1.1",id:"plus-icon-svg",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32",className:e,children:Ge("path",{fill:"currentColor",d:"M22.6,15.3c-0.1-0.1-0.1-0.2-0.2-0.2l0,0l-0.1-0.2l0,0l0,0l0,0L12.1,4.2c-0.2-0.2-0.6-0.5-1.1-0.5 c-0.9,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.7,0.4,1l0,0l9.3,9.7l-9.3,9.7c-0.3,0.3-0.6,0.7-0.6,1.1c0,0.9,0.7,1.5,1.5,1.5 c0.5,0,1-0.2,1.2-0.6l0,0l10.2-10.7l0,0l0,0l0,0l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.2l0,0c0-0.1,0.1-0.2,0.1-0.2l0,0 c0-0.1,0.1-0.2,0.1-0.3l0,0c0-0.1,0-0.2-0.1-0.3l0,0v-0.1C22.6,15.5,22.6,15.4,22.6,15.3L22.6,15.3L22.6,15.3z"})})}function ut(e,t){if(!t)return!1;const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return n.top>=o.top&&n.left>=o.left&&n.bottom<=o.bottom&&n.right<=o.right}function _t({category:e,onToggleChange:t,sectionText:n,toggleValue:o,modalBodyRef:i}){const[s,r]=Je(!1),a=e===p.NECESSARY,c=Xe(null),l=Xe(null),h=()=>{r(!s)};Ze(()=>{if(s){const e=c.current;e&&e.scrollIntoView&&!ut(e,i.current)&&e.scrollIntoView({behavior:"smooth"})}},[s,i,c]);return Ge("div",{className:"hs-category-row",ref:c,children:[Ge("div",{className:"hs-category-row-header",children:[Ge("button",{id:"hs-category-"+e,className:"hs-category-label",onClick:h,"aria-expanded":s,"aria-controls":"hs-category-description-"+e,tabIndex:0,children:[Ge(dt,{className:"description-accordion-arrow "+(s?"rotated":"")}),Ge("span",{dangerouslySetInnerHTML:G(n.label)})]}),!a&&Ge(ht,{category:e,disabled:e===p.NECESSARY,onToggleChange:e=>t(e),toggleValue:o}),n.toggleLabel&&Ge("span",{className:"hs-always-active-label",dangerouslySetInnerHTML:G(n.toggleLabel),tabIndex:0,"aria-label":n.toggleLabel})]}),Ge("div",{className:"hs-category-description "+(s?"visible":""),ref:l,style:{maxHeight:s&&l.current?2*l.current.scrollHeight:0},id:"hs-category-description-"+e,dangerouslySetInnerHTML:G(n.description),tabIndex:0})]})}var ft=n(1),gt=n.n(ft),mt=n(2),pt=n.n(mt);const bt=(e,t,n,o,i)=>{const s=e.getDocument(),r=s.createElement("style");r.setAttribute("type","text/css");r.setAttribute("id",o);const a=new RegExp("https://api_base_url","g"),c=i?t.replace(a,i):t,l=s.createTextNode(c);r.appendChild(l);const h=s.body.firstChild;s.body.insertBefore(r,h)};function yt(e,t,n){if(!e.getHasLoadedBaseStyle()){bt(e,gt.a,t,y,n);e.setHasLoadedBaseStyle(!0)}}function vt(e,t){if(!e.getHasLoadedCbcStyle()){bt(e,pt.a,t,v);e.setHasLoadedCbcStyle(!0)}}function Ct({accentColor:e,consent:t,context:n,modalText:o,onAcceptCategories:i,onCloseModal:s}){const r=Xe(null),a=Xe(null),c=Xe(null),l=Xe(null);Ze(()=>{r.current&&ct(n,r.current,a.current,c.current)},[n,r,a,c]);const[h,d]=Je(t.categories.analytics),[u,_]=Je(t.categories.advertisement),[f,b]=Je(t.categories.functionality),y=()=>{i({[p.ANALYTICS]:h,[p.ADVERTISEMENT]:u,[p.FUNCTIONALITY]:f})},v=()=>{d(!0);_(!0);b(!0);i({[p.ANALYTICS]:!0,[p.ADVERTISEMENT]:!0,[p.FUNCTIONALITY]:!0})};vt(n,e);return Ge("div",{id:g,"data-nosnippet":"true",children:Ge("div",{id:m,ref:r,role:"alertdialog","aria-modal":"true","aria-labelledby":"hs-modal-introduction","aria-describedby":"hs-modal-introduction-description",tabIndex:0,children:[Ge("div",{id:"hs-modal-header",children:Ge("div",{id:"hs-modal-header-container",children:Ge("button",{id:"hs-modal-close-button",className:"hs-close-button",onClick:()=>s(),ref:a,tabIndex:0,"aria-label":"Close modal",children:Ge(at,{})})})}),Ge("div",{id:"hs-modal-body",ref:l,children:Ge("div",{id:"hs-modal-body-container",children:[Ge("div",{id:"hs-modal-introduction",children:Ge("span",{dangerouslySetInnerHTML:G(o.introduction.label)})}),Ge("div",{id:"hs-modal-introduction-description",children:Ge("p",{dangerouslySetInnerHTML:G(o.introduction.description)})}),Ge("div",{id:"hs-categories-container",children:[Ge(_t,{category:p.NECESSARY,onToggleChange:()=>{},sectionText:o.necessary,toggleValue:!0,modalBodyRef:l}),Ge(_t,{category:p.ANALYTICS,onToggleChange:e=>d(e),sectionText:o.analytics,toggleValue:h,modalBodyRef:l}),Ge(_t,{category:p.ADVERTISEMENT,onToggleChange:e=>_(e),sectionText:o.advertisement,toggleValue:u,modalBodyRef:l}),Ge(_t,{category:p.FUNCTIONALITY,onToggleChange:e=>b(e),sectionText:o.functionality,toggleValue:f,modalBodyRef:l})]})]})}),Ge("div",{id:"hs-modal-footer",children:Ge("div",{id:"hs-modal-footer-container",children:[Ge("button",{id:"hs-modal-accept-all",onClick:()=>v(),tabIndex:0,children:o.acceptLabel}),Ge("button",{id:"hs-modal-save-settings",onClick:y,ref:c,tabIndex:0,children:o.saveSettingsLabel})]})})]})})}function xt({apiBaseUrl:e,consent:t,setting:n,context:o,onConsentChange:i,onCloseBannerWithoutConsent:s,dismissNotifyBanner:r}){const[a,c]=Je(!1),l=e=>{if(e!==H.NOTIFY){t.update(!0);i(t)}else r()},h=()=>{t.update(!1);i(t)},d=({analytics:e,advertisement:n,functionality:o})=>{t.updateCategories({analytics:e,advertisement:n,functionality:o});i(t)},_=e=>{if(e!==H.OPT_IN&&e!==H.COOKIES_BY_CATEGORY)if(e!==H.NOTIFY){t.update(!0);i(t)}else r();else s()},f=()=>{c(!0)},g=()=>{c(!1);const e=o.getDocument().getElementById(u);e&&e.focus()};yt(o,n.customizationSettings.accentColor,e);return Ge(me,{children:[Ge(lt,{context:o,setting:n,onAcceptAll:l,onDeclineAll:h,onCookieSettingsClick:f,onCloseBannerButtonClick:_,isModalDisplayed:a}),a&&Ge(Ct,{accentColor:n.customizationSettings.accentColor,consent:t,context:o,modalText:n.policy.text.modalText,onAcceptCategories:d,onCloseModal:g})]})}function St({apiBaseUrl:e,context:t,setting:n,onCloseBanner:o}){yt(t,n.customizationSettings.accentColor,e);return Ge("div",{id:_,"data-nosnippet":"true",role:"dialog","aria-describedby":"hs-banner-gpc-wording",children:Ge("div",{id:"hs-banner-gpc-inner",children:[Ge("div",{id:"hs-banner-gpc-header",children:Ge("button",{id:"hs-banner-gpc-close-button",className:"hs-close-button",onClick:o,"aria-label":"Dismiss banner",children:Ge(at,{})})}),Ge("div",{id:"hs-banner-gpc-wording",dangerouslySetInnerHTML:G(n.gpcSettings.notificationText)})]})})}const wt=(e,t)=>{const n=e.getDocument().createElement("div");n.setAttribute("id",f);n.setAttribute("style",t);const o=e.getDocument().body;o.insertBefore(n,o.firstChild);return n};function Tt(e,t,n,o,i,s,r,a){const c=wt(i,o);De(Ge(xt,{apiBaseUrl:e,consent:t,setting:n,context:i,onConsentChange:e=>s(e),onCloseBannerWithoutConsent:r,dismissNotifyBanner:a}),c);return c}function kt(e,t,n,o,i){const s=wt(t,o);De(Ge(St,{apiBaseUrl:e,context:t,setting:n,onCloseBanner:i}),s);return s}class Ot{static postActivity(e,t,n){fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(()=>O.info(`Sent a banner ${t} event.`)).catch(()=>O.error(`There was an issue sending a banner ${t} event.`))}static sendView(e,t){Ot.postActivity(e+"/activity/view","VIEW",t)}static sendClick(e,t){Ot.postActivity(e+"/activity/click","CLICK",t)}}let Et;!function(e){e[e.ROUND=0]="ROUND";e[e.SQUARE=1]="SQUARE";e[e.PILL=2]="PILL"}(Et||(Et={}));const It={[Et.ROUND]:"0.5em",[Et.SQUARE]:"0",[Et.PILL]:"3em"},Lt={[Et.ROUND]:"12px",[Et.SQUARE]:"0",[Et.PILL]:"0"},Nt=e=>null==e,At=(e,t)=>t?[{cssVar:e,value:t}]:[],Bt=(e,t)=>t?[{cssVar:e,value:`${t.number}${t.units}`}]:[],Pt=(e,t)=>Nt(t)?[]:[{cssVar:e,value:It[t]}],Rt=(e,t)=>Nt(t)?[]:[{cssVar:e,value:Lt[t]}],Dt=(e,t)=>Nt(t)?[]:[...At(`--hs-banner-${e}-color`,t.color),...At(`--hs-banner-${e}-text-color`,t.textColor),...At(`--hs-banner-${e}-border-color`,t.borderColor)],Ut=e=>Nt(e)?[]:[{cssVar:"--hs-banner-close-button-display",value:e?"flex":"none"}],Gt=e=>{if(Nt(e))return[];switch(A.fromJS(e)){case A.BOTTOM:return[{cssVar:"--hs-banner-inset",value:"auto 50% 32px"},{cssVar:"--hs-banner-translate-x",value:"-50%"},{cssVar:"--hs-banner-translate-y",value:"0"}];case A.BOTTOM_LEFT:return[{cssVar:"--hs-banner-inset",value:"auto auto 32px 32px"},{cssVar:"--hs-banner-translate-x",value:"0"},{cssVar:"--hs-banner-translate-y",value:"0"}];case A.BOTTOM_RIGHT:return[{cssVar:"--hs-banner-inset",value:"auto 32px 32px auto"},{cssVar:"--hs-banner-translate-x",value:"0"},{cssVar:"--hs-banner-translate-y",value:"0"}];case A.CENTER:return[{cssVar:"--hs-banner-inset",value:"50% auto auto 50%"},{cssVar:"--hs-banner-translate-x",value:"-50%"},{cssVar:"--hs-banner-translate-y",value:"-50%"}];default:return[{cssVar:"--hs-banner-inset",value:"32px auto auto 50%"},{cssVar:"--hs-banner-translate-x",value:"-50%"},{cssVar:"--hs-banner-translate-y",value:"0"}]}},Mt=e=>e.map(e=>`${e.cssVar}:${e.value}`).join(";"),Yt=e=>[...At("--hs-banner-color",e.bannerColor),...At("--hs-banner-text-color",e.bannerTextColor),...At("--hs-banner-settings-text-color",e.bannerSettingsButtonTextColor),...Bt("--hs-banner-width",e.bannerWidth),...Bt("--hs-banner-padding",e.bannerPadding),...Rt("--hs-banner-corners",e.bannerCorners),...Pt("--hs-banner-button-corners",e.bannerButtonCorners),...Dt("accept",e.bannerAcceptButtonStyle),...Dt("decline",e.bannerDeclineButtonStyle),...Ut(e.showCloseButton),...Gt(e.position),...At("--hs-banner-modal-color",e.modalColor),...At("--hs-banner-modal-text-color",e.modalTextColor),...Bt("--hs-banner-modal-padding",e.modalContainerPadding),...Bt("--hs-banner-modal-width",e.modalWidth),...Rt("--hs-banner-modal-corners",e.modalCorners),...Pt("--hs-banner-modal-button-corners",e.modalButtonCorners),...Dt("modal-accept",e.modalAcceptButtonStyle),...Dt("modal-save",e.modalSaveSettingsButtonStyle),...Rt("--hs-banner-modal-category-corners",e.modalCategoryCorners),...At("--hs-banner-modal-cateogry-color",e.modalCategoryColor),...At("--hs-banner-modal-category-text-color",e.modalCategoryTextColor),...At("--hs-banner-modal-toggle-on-color",e.modalCategoryToggleOnColor),...At("--hs-banner-modal-toggle-off-color",e.modalCategoryToggleOffColor)],Ft=e=>[...At("--hs-banner-accentColor",e.accentColor),...Gt(e.position.getValue()),...Ut(e.showCloseButton)],Ht=e=>{const t={};if(!e)return t;const n=e.indexOf("-"),[o,i]=-1===n?[e,void 0]:[e.substring(0,n),e.substring(n+1)];o&&(t.countryCode=o);i&&(t.regionCode=i);return t};class zt{constructor(e){this.publicMethods=["showBanner","hideBanner","addPrivacyConsentListener","setApiBaseUrl","setCookiesToSubdomain","setUseSecureCookies","addCookieDomain","addEnabledFeatureGates","setBannerSettings","setCustomizationSettings","setUseGeoLocation","setGeoLocation","addPrivacySettingsListener","revokeCookieConsent"];this.enabledFeatureGates=[];this.context=e;this.bannerSettings=[];this.privacyConsentListeners=[];this.privacySettingsListeners=[];this.useGeoLocation=!1;this.cookie=new te(e);this.isRunningInTestMode=e.getLocation().search.includes(d);this.removeDeprecatedBannerCookies()}removeDeprecatedBannerCookies(){this.cookie.get(ne.OPT_OUT_COOKIE.getName())&&this.cookie.remove(ne.OPT_OUT_COOKIE.getName());this.cookie.get(ne.INITIAL_OPT_IN.getName())&&this.cookie.remove(ne.INITIAL_OPT_IN.getName())}run(){if(this.disableBannerFlagSet()){O.info('"PRIVACY" flag found in disabledHsPopups window queue. Banner script will not run.');return!0}this.findMatchingSetting();this.logGpcSignal();if(!this.matchedSetting){O.debug("we were unable to find the matching settings for this webpages. The banner will not run.");this.setConsent(new J(!0),{reportClick:!1});return!1}if(this.shouldScanningOverride()){this.setConsent(new J(!0),{reportClick:!1,persist:!0,treatAsConsentEvent:!0});return!0}if(this.shouldGpcOverride()){this.setConsent(new J(!1),{persist:!1,reportClick:!1});this.isGpcBannerDismissCookiePresent()||this.renderGpcBanner();return!0}switch(this.matchedSetting.policy.type){case H.NO_COOKIES:this.setConsent(new J(!1),{reportClick:!1});break;case H.OPT_IN:case H.COOKIES_BY_CATEGORY:if(this.useConsentFromExistingCookie())break;this.cookie.removeGACookie();this.setConsent(J.buildInitialConsent(),{persist:!1,reportClick:!1});this.renderBanner();break;case H.OPT_OUT_BY_CATEGORY:case H.OPT_OUT:if(this.useConsentFromExistingCookie())break;this.setConsent(new J(!0),{persist:!1,reportClick:!1});this.renderBanner();break;case H.NOTIFY:this.setConsent(new J(!0),{persist:!1,reportClick:!1});if(this.isNotifyBannerDismissCookiePresent())break;this.renderBanner();break;case H.COOKIES_WITHOUT_BANNER:default:this.setConsent(new J(!0),{reportClick:!1})}return!0}useConsentFromExistingCookie(){const e=this.readConsentCookie();if(e){this.setConsent(e,{persist:!1,reportClick:!1});e.hasAnalyticsConsent()||this.cookie.removeGACookie();return!0}return!1}shouldScanningOverride(){return[H.OPT_OUT,H.OPT_OUT_BY_CATEGORY,H.COOKIES_BY_CATEGORY,H.OPT_IN,H.NOTIFY].includes(this.matchedSetting.policy.type)&&this.context.getWindow()[c]}shouldGpcOverride(){return this.matchedSetting.gpcSettings.enabled&&this.getGpcSignal()}getGpcSignal(){const e=this.context.getLocation().search;if(e.includes(a)){return{TRUE:!0,FALSE:!1}[(new URLSearchParams(e).get(a)||"").toUpperCase()]}return this.context.getNavigator().globalPrivacyControl}logGpcSignal(){O.debug("GPC signal: "+this.getGpcSignal())}findMatchingSetting(){const e=this.context.getPathname(),{countryCode:t,regionCode:n}=Ht(this.geoLocation),o=this.bannerSettings.filter(e=>e.enabled).map(o=>({setting:o,matchResult:o.configuration.test(e,t,n)})).reduce((e,t)=>L(e.matchResult,t.matchResult)?e:t,{setting:null,matchResult:E});I(o.matchResult)&&o.setting&&this.setMatchingSetting(o.setting.withSanitizedPolicy())}setMatchingSetting(e){this.matchedSetting=e;if(0===this.privacySettingsListeners.length)return;const t=e.toLegacyPrivacyPolicy();this.privacySettingsListeners.forEach(e=>this.safeCallListener(e,t))}getMatchingSetting(){return this.matchedSetting}hasEnabledFeatureGate(e){return this.enabledFeatureGates&&this.enabledFeatureGates.includes(e)}setApiBaseUrl(e){/^https:\/\/js-?.{0,3}\.hs-banner(qa)?\.com.*/.test(e)?this.apiBaseUrl=e:O.error("unsupported base Api url provided.")}setBannerSettings(e){(e[this.context.getLocation().hostname]||[]).forEach(e=>this.bannerSettings.push($.fromJS(e)))}setCustomizationSettings(e){const t=e[this.context.getLocation().hostname];this.styleOverrides=t;this.bannerParentElement&&this.bannerParentElement.setAttribute("style",this.getRenderStyles())}getCurrentGeoLocation(){return new Promise(e=>{const t=this.context.getLocation().search;if(t.includes(r)){const n=new URLSearchParams(t).get(r);e(n||"")}else fetch(this.apiBaseUrl+"/cf-location").then(e=>e.text()).then(t=>e(t)).catch(()=>{O.error("We could not fetch the geolocation.");e("")})})}setGeoLocation(e){this.geoLocation=e}addEnabledFeatureGates(e){e.forEach(e=>this.enabledFeatureGates.push(e))}addCookieDomain(e){this.cookie.addDomain(e)}setCookiesToSubdomain(e){this.cookie.setCookiesToSubdomain(e)}setUseSecureCookies(e){this.cookie.setUseSecureCookies(e)}setUseGeoLocation(){this.useGeoLocation=!0}addPrivacyConsentListener(e){this.consent&&this.safeCallListener(e,this.consent.getSafeCopy());this.privacyConsentListeners.push(e)}setConsent(e,t){const n={persist:!0,treatAsConsentEvent:!0,reportClick:!0},{persist:o,treatAsConsentEvent:i,reportClick:s}=Object.assign({},n,{},t);this.consent=e;i&&this.hideBanner();o&&this.setConsentCookie();if(!this.isRunningInTestMode){s&&(this.consent.hasAnalyticsConsent()?this.trackAction("trackApproveCookieConsent"):this.trackAction("trackDeclineCookieConsent"));if(i){this.privacyConsentListeners.forEach(t=>this.safeCallListener(t,e.getSafeCopy()));this.consent.adsHasChangedToFalse()&&this.cookie.removeFBPCookie()}s&&this.sendClickActivity()}}getConsent(){return this.consent.getSafeCopy()}setConsentCookie(){if(!this.matchedSetting||this.isRunningInTestMode)return;const e=this.matchedSetting.policy.type;e!==H.NO_COOKIES&&e!==H.COOKIES_WITHOUT_BANNER&&e!==H.NOTIFY&&this.cookie.set(ne.CATEGORY_PREFERENCE_COOKIE.getName(),this.consent.toCookieString(),{daysToExpire:ne.CATEGORY_PREFERENCE_COOKIE.getExpirationDays(),path:"/"})}readConsentCookie(){const e=this.cookie.get(ne.CATEGORY_PREFERENCE_COOKIE.getName());return e?J.buildFromCookieString(e):null}safeCallListener(e,t){try{e(t)}catch(e){O.error("error calling listener.")}}isGpcBannerDismissCookiePresent(){return!!this.cookie.get(ne.GPC_BANNER_DISMISS_COOKIE.getName())}setGpcBannerDismissCookie(){this.cookie.set(ne.GPC_BANNER_DISMISS_COOKIE.getName(),"true",{daysToExpire:ne.GPC_BANNER_DISMISS_COOKIE.getExpirationDays(),path:"/"})}isNotifyBannerDismissCookiePresent(){return!!this.cookie.get(ne.NOTIFY_BANNER_DIMISS_COOKIE.getName())}setNotifyBannerDismissCookie(){this.cookie.set(ne.NOTIFY_BANNER_DIMISS_COOKIE.getName(),"true",{daysToExpire:ne.NOTIFY_BANNER_DIMISS_COOKIE.getExpirationDays(),path:"/"})}dismissNotifyBanner(){this.hideBanner();this.setNotifyBannerDismissCookie()}dismissGpcBanner(){this.hideBanner();this.setGpcBannerDismissCookie()}getRenderStyles(){try{if(this.styleOverrides){O.debug("using style overrides");return Mt(Yt(this.styleOverrides))}if(this.matchedSetting){O.debug("using legacy customization render styles");return Mt(Ft(this.matchedSetting.customizationSettings))}}catch(e){console.error("unable to utilize style overides",e)}return""}renderGpcBanner(){this.bannerParentElement=kt(this.apiBaseUrl,this.context,this.matchedSetting,this.getRenderStyles(),this.dismissGpcBanner.bind(this));this.sendViewActivity()}renderBanner(){this.bannerParentElement=Tt(this.apiBaseUrl,this.consent,this.matchedSetting,this.getRenderStyles(),this.context,this.setConsent.bind(this),this.hideBanner.bind(this),this.dismissNotifyBanner.bind(this));this.sendViewActivity()}hideBanner(){if(this.bannerParentElement){const e=this.bannerParentElement.children;for(let t=0;t<e.length;t++)e[t].classList.add(b)}}showBanner(){if(this.matchedSetting.policy.type===H.NO_COOKIES||this.matchedSetting.policy.type===H.COOKIES_WITHOUT_BANNER)return;this.bannerParentElement||(this.shouldGpcOverride()?this.renderGpcBanner():this.renderBanner());const e=this.bannerParentElement.children;if(e.length>1){e[1].classList.remove(b)}else e[0].classList.remove(b)}invoke(e,t){if(!this.publicMethods.includes(e)||!Reflect.has(this,e)){O.debug(`failed to invoke method ${e} of the banner.`);throw new Error("Could not invoke banner method.")}Reflect.get(this,e).apply(this,t)}getBaseActivityPayload(){const e=this.context.getWindow().hsVars,t=e&&e.page_id;return{bannerGeoLocation:this.geoLocation||"",bannerPolicyId:this.matchedSetting.id,bannerType:this.matchedSetting.policy.type.getName(),domain:this.matchedSetting.domain,portalId:this.matchedSetting.portalId,contentId:t||""}}sendClickActivity(){if(!this.consent||!this.matchedSetting||this.isRunningInTestMode)return;const e={consentAllowed:this.consent.allowed,consentAnalytics:this.consent.categories.analytics,consentAdvertisement:this.consent.categories.advertisement,consentFunctionality:this.consent.categories.functionality},t=Object.assign({},this.getBaseActivityPayload(),{},e);Ot.sendClick(this.apiBaseUrl,t)}sendViewActivity(){if(!this.matchedSetting||this.isRunningInTestMode)return;const e=this.getBaseActivityPayload();Ot.sendView(this.apiBaseUrl,e)}getAnalyticsQueue(){return this.context.getWindow()[s]=this.context.getWindow()[s]||[]}trackAction(e){try{this.getAnalyticsQueue().push([e])}catch(e){O.error("Unable to send analytics tracking event: "+e)}}disableBannerFlagSet(){const e=this.context.getWindow()[C]||[];return Array.isArray(e)&&e.includes(x)}revokeCookieConsent(){[ne.INITIAL_OPT_IN.getName(),ne.OPT_OUT_COOKIE.getName(),ne.CATEGORY_PREFERENCE_COOKIE.getName(),ne.GPC_BANNER_DISMISS_COOKIE.getName(),ne.NOTIFY_BANNER_DIMISS_COOKIE.getName(),"__hssc","__hssrc","__hstc","__hs_do_not_track","hubspotutk","messagesUtk"].forEach(e=>this.cookie.remove(e));this.trackAction("trackRevokeCookieConsent");this.setConsent(new J(!1),{reportClick:!1})}addPrivacySettingsListener(e){this.matchedSetting&&this.safeCallListener(e,this.matchedSetting.toLegacyPrivacyPolicy());this.privacySettingsListeners.push(e)}}class Vt{constructor(e){this.priorityFunctions=["setApiBaseUrl","setCookiesToSubdomain","setUseSecureCookies","addCookieDomain","addEnabledFeatureGates","setBannerSettings"];const t=e.getWindow();if(Array.isArray(t[i]))this.queue=t[i];else{this.queue=[];t[i]=this.queue}this.banner=new zt(e);this.context=e}queuePushFn(e){try{if(!(e&&Array.isArray(e)&&e.length>0)){O.debug("invalid arguments passed to the banner queue.");return!1}const t=e[0],n=e.slice(1);this.banner.invoke(t,n);return!0}catch(e){O.error("There was an error running banner method.")}return!1}overrideQueuePush(){this.queue.push=this.queuePushFn.bind(this)}dequeueEntries(e){for(let t=0;t<this.queue.length;t++){const n=this.queue[t];if(!Array.isArray(n)||0===n.length)continue;const o=n[0];if(e.includes(o)){this.queuePushFn(n);this.queue.splice(t--,1)}}}dequeueAllEntries(){for(let e=0;e<this.queue.length;e++){const t=this.queue[e];if(Array.isArray(t)&&0!==t.length){this.queuePushFn(t);this.queue.splice(e--,1)}}}run(){const e=this.context.getWindow();if(!e[l]){e[l]=!0;this.dequeueEntries(["setUseGeoLocation"]);this.dequeueEntries(this.priorityFunctions);this.dequeueAllEntries();this.overrideQueuePush();this.banner.useGeoLocation?this.banner.getCurrentGeoLocation().then(e=>{this.banner.setGeoLocation(e);this.banner.run()}):this.banner.run()}}}var $t=n(3);const Kt=e=>e.stack?$t.parse(e.stack).map(e=>({filename:e.file,function:e.methodName,args:e.arguments,lineno:e.lineNumber,colno:e.column})):[],Wt=()=>{if(!document.currentScript)return null;const e=document.currentScript.getAttribute("src");return e?e.toLowerCase().includes("qa")?"qa":"prod":null},qt=()=>{if(!document.currentScript)return null;const e=document.currentScript.getAttribute("src");return e?e.toLowerCase().includes("eu1")?"eu1":"na1":null},jt="https://exceptions{{hublet}}.hs-embed-reporting{{env}}.com/outpost",Jt=()=>"10000000-1000-4000-8000-100000000000".replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)),Qt=()=>"randomUUID"in crypto?crypto.randomUUID():Jt(),Zt=(e,t)=>{const n="na1"!==e?"-"+e:"",o="qa"===t?"qa":"";return jt.replace("{{hublet}}",n).replace("{{env}}",o)},Xt=(e,t,n,o)=>{const i=Date.now()/1e3,s=Kt(e);return{level:"error",environment:t,tags:{region:n},logger:"javascript",platform:"javascript",request:{headers:{"User-Agent":navigator.userAgent},url:window.location.href},event_id:Qt().replace(/-/g,""),transaction:e.message,exception:{values:[{mechanism:{handled:!0,type:"generic"},type:e.name,value:e.message,stacktrace:{frames:s}}]},timestamp:i,extra:o}},en=e=>{(new Image).src=e},tn=e=>{const t=e instanceof Error,n=t?e:new Error(String(e)),o=Wt()||"prod",i=qt()||"na1",s=Xt(n,o,i,{isInstanceOfError:t});en(`${Zt(i,o)}/cookie-banner-v2/raw/error.gif?url=${s.request.url}\n    &report=${encodeURIComponent(JSON.stringify(s))}`)},nn=T();function on(){const e=nn.getWindow();if(e[o]){O.info("the cookie banner has already been loaded via another script.");return}e[o]=!0;new Vt(nn).run()}function sn(e){try{e()}catch(e){console.error(e);tn(e)}}function rn(){sn(on)}const an=nn.getDocument();function cn(){rn();an.removeEventListener("DOMContentLoaded",cn)}"loading"===an.readyState?an.addEventListener("DOMContentLoaded",cn):rn()}]);
/****** Cookie Banner version static-1.1671 *****/                               </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/meeting#rs=menu"
                                                            data-option="create.content_type.meeting"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Meeting</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/newsletter#rs=menu"
                                                            data-option="create.content_type.newsletter"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Newsletter</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/thesis-defense#rs=menu"
                                                            data-option="create.content_type.thesis_defense"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Thesis Defense</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/project-proposal#rs=menu"
                                                            data-option="create.content_type.project_proposal"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Project Proposal</span>
                                                        </a>
                                                                                                        <a
                                                        href="https://slidesgo.com/editor#rs=menu?from_element=main_menu"
                                                        data-option="create.content_type.create_blank_template"
                                                        data-gtm-event="main_menu"
                                                        class="block p-2.5 rounded hover:bg-gray-50 whitespace-nowrap"
                                                    >
                                                        <span>
                                                            Create blank template                                                        </span>
                                                        <span class="px-1 py-0.5 bg-purple-200 rounded-sm text-sm font-semibold uppercase">
                                                            New                                                        </span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="w-1/4 ml-12">
                                                <div class="pl-1.5 pb-2.5 flex items-center border-b border-gray-75">
                                                    <svg class="h-4 w-auto text-gray-400 fill-current" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73171 2.6748H12.1504C13.1691 2.6748 14 3.50569 14 4.52439V6.26755C13.7855 7.01555 13.0043 7.57237 12.0777 7.57237H1.92232C0.99572 7.57237 0.214545 7.01555 0 6.26754V4.52439C0 3.50569 0.830894 2.6748 1.84959 2.6748H4.26829V1.84959C4.26829 0.830894 5.09919 0 6.11789 0H7.88211C8.90081 0 9.73171 0.830894 9.73171 1.84959V2.6748ZM6.11786 1.42277C5.88169 1.42277 5.69103 1.61342 5.69103 1.84959V2.6748H8.30892V1.84959C8.30892 1.61342 8.11827 1.42277 7.88209 1.42277H6.11786Z"/>
    <path d="M0 7.82692V12.1504C0 13.1691 0.830894 14 1.84959 14H12.1504C13.1691 14 14 13.1691 14 12.1504V7.82693C13.7854 8.50778 13.0043 9.01461 12.0777 9.01461H7.68359V9.43003C7.68359 9.80738 7.37734 10.1136 7 10.1136C6.62266 10.1136 6.31641 9.80738 6.31641 9.43003V9.01461H1.92232C0.99572 9.01461 0.214545 8.50777 0 7.82692Z"/>
</svg>

                                                    <span class="ml-2 text-base font-semibold whitespace-nowrap">
                                                        By industry                                                    </span>
                                                </div>
                                                <div class="my-2">
                                                                                                            <a
                                                            href="https://slidesgo.com/business#rs=menu"
                                                            data-option="create.industry.business"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Business</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/marketing#rs=menu"
                                                            data-option="create.industry.marketing"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Marketing</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/technology#rs=menu"
                                                            data-option="create.industry.technology"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Technology</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/medical#rs=menu"
                                                            data-option="create.industry.medical"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Medical</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/education#rs=menu"
                                                            data-option="create.industry.education"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span>Education</span>
                                                        </a>
                                                                                                    </div>
                                            </div>
                                        </div>
                                        <div class="w-1/5 bg-gray-50 relative px-8 py-10 rounded-r">
                                            <div class="overflow-hidden absolute inset-0 z-0">
                                                <svg class="absolute top-0" xmlns="http://www.w3.org/2000/svg" width="121" height="135" viewBox="0 0 121 135" fill="none">
                                                    <path d="M120.856 -37.0473C109.348 -25.4226 98.7742 -23.8219 90.275 -22.535C82.6901 -21.3868 77.2091 -20.5574 70.3755 -13.6544C63.5419 -6.75138 62.7699 -1.26413 61.6965 6.33384C60.4975 14.8438 59.0018 25.435 47.494 37.0598C35.9862 48.6845 25.4125 50.2852 16.9132 51.5721C9.3284 52.7203 3.84734 53.5497 -2.98435 60.4508C-9.81604 67.3519 -10.59 72.8411 -11.6615 80.4371C-12.8605 88.947 -14.3561 99.5383 -25.8639 111.163C-37.3717 122.788 -47.9455 124.388 -56.4428 125.673C-64.0277 126.822 -69.5087 127.651 -76.3404 134.552L-86 124.99C-74.4922 113.365 -63.9184 111.764 -55.4211 110.479C-47.8362 109.331 -42.3552 108.502 -35.5235 101.601C-28.6918 94.6995 -27.9179 89.2104 -26.8464 81.6143C-25.6458 73.1059 -24.1517 62.5131 -12.6439 50.8884C-1.13614 39.2636 9.43762 37.6629 17.9369 36.3761C25.5217 35.2278 31.0028 34.3984 37.8344 27.4973C44.6661 20.5962 45.4401 15.1071 46.5135 7.50911C47.7125 -1.0008 49.2081 -11.5921 60.7159 -23.2168C72.2237 -34.8415 82.7994 -36.4442 91.2967 -37.7291C98.8816 -38.8774 104.363 -39.7068 111.196 -46.6098L120.856 -37.0473Z" fill="#E5E5E5"/>
                                                </svg>
                                                <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="100%" height="220" viewBox="0 0 223 220" fill="none">
                                                    <path d="M244.781 12.9611C229.439 28.4593 215.342 30.5934 204.011 32.309C193.898 33.8399 186.591 34.9456 177.481 44.1487C168.37 53.3519 167.341 60.6675 165.91 70.7971C164.311 82.1426 162.317 96.263 146.975 111.761C131.633 127.259 117.536 129.393 106.204 131.109C96.0923 132.64 88.7849 133.746 79.6769 142.946C70.5688 152.147 69.537 159.465 68.1085 169.592C66.5099 180.937 64.516 195.058 49.1737 210.556C33.8314 226.054 19.7345 228.188 8.40577 229.901C-1.70638 231.432 -9.01375 232.538 -18.1218 241.738L-31 228.99C-15.6578 213.492 -1.56077 211.358 9.76794 209.644C19.8801 208.114 27.1875 207.008 36.2955 197.807C45.4035 188.607 46.4353 181.289 47.8639 171.161C49.4645 159.818 51.4564 145.696 66.7986 130.197C82.1409 114.699 96.2379 112.565 107.569 110.85C117.681 109.319 124.989 108.213 134.097 99.0124C143.205 89.8118 144.237 82.4937 145.668 72.364C147.266 61.0186 149.26 46.8982 164.602 31.4001C179.945 15.9019 194.044 13.7653 205.373 12.0522C215.485 10.5213 222.792 9.4156 231.903 0.212461L244.781 12.9611Z" fill="#E5E5E5"/>
                                                </svg>
                                            </div>
                                            <div class="relative h-full flex flex-col items-center justify-between">
                                                <a href="https://slidesgo.com/ai-presentations#rs=menu"
                                                   data-option="create.ai_presentations"
                                                   data-gtm-event="main_menu"
                                                   class="nav-bounce group/link relative overflow-hidden w-full h-30 p-3 block bg-gradient-to-r from-[#8F00FF] to-[#BC93CA] text-white rounded hover:bg-gray-50">
                                                    <div class="absolute inset-0 bg-black z-5 transition-all duration-500 group-hover/link:opacity-10 opacity-0"></div>
                                                    <span class="block text-nowrap font-semibold text-sm leading-[16px] z-10 group-hover/link:font-medium">
                                                        Create presentations in minutes with AI                                                    </span>
                                                                                                            <svg class="absolute top-[52px] right-12 fill-current h-4 inline-block opacity-0 group-hover/link:opacity-100" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.683594 8.02539H11.6661L9.67485 10.0166C9.40789 10.2836 9.40789 10.7164 9.67485 10.9834C9.9418 11.2503 10.3747 11.2503 10.6416 10.9834L13.7998 7.82515C13.928 7.69696 14 7.52308 14 7.34179C14 7.1605 13.928 6.98663 13.7998 6.85841L10.6416 3.70021C10.3746 3.43328 9.94178 3.43325 9.67485 3.70021C9.40789 3.96716 9.40789 4.39999 9.67485 4.66695L11.6661 6.65817H0.683594C0.306031 6.65817 0 6.96423 0 7.34177C0 7.7193 0.306031 8.02539 0.683594 8.02539Z" fill="white"/>
                                                        </svg>
                                                                                                        <img src="/images/banner/ai-presentation-maker.png" alt="AI presentation maker"
                                                         class="w-32 absolute right-0 bottom-0 transition-all duration-500 group-hover/link:opacity-30">
                                                </a>
                                                <a href="https://slidesgo.com/presentation-maker#rs=menu"
                                                   data-option="create.presentation_maker"
                                                   data-gtm-event="main_menu"
                                                   class="nav-bounce group/link relative overflow-hidden w-full h-30 p-3 block bg-gradient-to-r from-[#356CEA] to-[#8DABF4] text-white rounded hover:bg-gray-50">
                                                    <div class="absolute inset-0 bg-black z-5 transition-all duration-500 group-hover/link:opacity-10 opacity-0"></div>
                                                    <span class="block text-nowrap font-semibold text-sm leading-[16px] z-10 group-hover/link:font-medium">
                                                        Try our online editable templates                                                    </span>
                                                                                                            <svg class="absolute top-[52px] right-20 fill-current h-4 inline-block opacity-0 group-hover/link:opacity-100" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.683594 8.02539H11.6661L9.67485 10.0166C9.40789 10.2836 9.40789 10.7164 9.67485 10.9834C9.9418 11.2503 10.3747 11.2503 10.6416 10.9834L13.7998 7.82515C13.928 7.69696 14 7.52308 14 7.34179C14 7.1605 13.928 6.98663 13.7998 6.85841L10.6416 3.70021C10.3746 3.43328 9.94178 3.43325 9.67485 3.70021C9.40789 3.96716 9.40789 4.39999 9.67485 4.66695L11.6661 6.65817H0.683594C0.306031 6.65817 0 6.96423 0 7.34177C0 7.7193 0.306031 8.02539 0.683594 8.02539Z" fill="white"/>
                                                        </svg>
                                                                                                        <img src="/images/banner/presentation-maker.png" alt="Presentation maker"
                                                         class="w-32 absolute right-0 bottom-0 transition-all duration-500 group-hover/link:opacity-30">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="relative group p-2.5 py-3 rounded text-gray-800 cursor-pointer">
                                <div class="flex items-center">
                                    <span class="text-base font-semibold transition-all duration-500 group-hover:text-gray-900">
                                        Explore                                    </span>
                                    <div class="relative h-4 w-4 ml-1">
                                        <svg class="absolute h-full w-4 inline-block rotate-90 transition-all duration-500 group-hover:translate-y-4 group-hover:opacity-0 fill-current">
                <use xlink:href="#icon-nav-caret-drop"/>
            </svg>
                                        <svg class="absolute h-full w-4 inline-block -rotate-90 -translate-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-gray-900 group-hover:translate-y-0 fill-current">
                <use xlink:href="#icon-nav-caret-drop"/>
            </svg>
                                    </div>
                                </div>

                                <div class="cursor-default opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500">
                                    <svg class="h-3 w-3 absolute right-2.5 mr-0.5 -bottom-1 text-white fill-current">
                <use xlink:href="#icon-nav-caret-dropdown-menu"/>
            </svg>
                                    <div
                                        class="absolute top-10 left-0 -translate-x-52 2xl:-translate-x-20 flex
                                        w-[1060px] lg:w-screen-lg bg-white rounded shadow-md"
                                    >
                                        <div class="w-full flex my-5 mx-7">
                                            <div class="flex-auto">
                                                <div class="pl-1.5 pb-2.5 flex items-center border-b border-gray-75">
                                                    <svg class="h-4 w-auto text-gray-400 fill-current" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.90869 13.9425C5.78466 13.9425 5.65973 13.9295 5.53558 13.9031C3.99148 13.5743 2.5873 12.7169 1.5817 11.489C0.561723 10.2434 0 8.66927 0 7.05667C0 5.18939 0.72647 3.43318 2.04559 2.11158C3.36452 0.790192 5.11898 0.0604141 6.98576 0.056668L6.9999 0.0566406C10.8421 0.0566406 13.9809 3.17801 13.9999 7.02129C14.0001 7.05908 14 7.09684 13.9996 7.13457C13.9898 8.03136 13.6296 8.87232 12.9855 9.50251C12.3448 10.1294 11.4981 10.4747 10.6013 10.4747H8.64064C8.11293 10.4747 7.6836 10.904 7.6836 11.4317V12.1646C7.6836 12.7035 7.44336 13.2071 7.02448 13.5461C6.70415 13.8054 6.31147 13.9425 5.90869 13.9425ZM7.00001 4.1582C6.54769 4.1582 6.1797 3.79021 6.1797 3.33789C6.1797 2.88557 6.54769 2.51758 7.00001 2.51758C7.45233 2.51758 7.82032 2.88557 7.82032 3.33789C7.82032 3.79021 7.45233 4.1582 7.00001 4.1582ZM9.62915 5.24782C9.17683 5.24782 8.80883 4.87983 8.80883 4.42751C8.80883 3.97519 9.17683 3.6072 9.62915 3.6072C10.0815 3.6072 10.4495 3.97519 10.4495 4.42751C10.4495 4.87983 10.0815 5.24782 9.62915 5.24782ZM2.46094 7.05664C2.46094 7.50896 2.82893 7.87695 3.28125 7.87695C3.73358 7.87695 4.10157 7.50896 4.10157 7.05664C4.10157 6.60432 3.73358 6.23633 3.28125 6.23633C2.82893 6.23633 2.46094 6.60432 2.46094 7.05664ZM4.37087 5.24782C3.91855 5.24782 3.55056 4.87983 3.55056 4.42751C3.55056 3.97519 3.91855 3.6072 4.37087 3.6072C4.82319 3.6072 5.19118 3.97519 5.19118 4.42751C5.19118 4.87983 4.82319 5.24782 4.37087 5.24782Z"/>
</svg>

                                                    <span class="ml-2 font-semibold">
                                                        By color                                                    </span>
                                                </div>
                                                <div class="my-2 grid grid-rows-7 grid-flow-col">
                                                                                                            <a href="https://slidesgo.com/purple#rs=menu"
                                                           data-option="explore.color.purple"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #4949e7"
                                                            ></span>
                                                            <span>Purple</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/red#rs=menu"
                                                           data-option="explore.color.red"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #ec3a3b"
                                                            ></span>
                                                            <span>Red</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/blue#rs=menu"
                                                           data-option="explore.color.blue"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #5EB2FC"
                                                            ></span>
                                                            <span>Blue</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/green#rs=menu"
                                                           data-option="explore.color.green"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #69E781"
                                                            ></span>
                                                            <span>Green</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/white#rs=menu"
                                                           data-option="explore.color.white"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-gray-200" style="background: #ffffff"
                                                            ></span>
                                                            <span>White</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/black#rs=menu"
                                                           data-option="explore.color.black"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #1d262d"
                                                            ></span>
                                                            <span>Black</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/yellow#rs=menu"
                                                           data-option="explore.color.yellow"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #fcbd24"
                                                            ></span>
                                                            <span>Yellow</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/pink#rs=menu"
                                                           data-option="explore.color.pink"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #ff7893"
                                                            ></span>
                                                            <span>Pink</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/orange#rs=menu"
                                                           data-option="explore.color.orange"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #eb7d16"
                                                            ></span>
                                                            <span>Orange</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/brown#rs=menu"
                                                           data-option="explore.color.brown"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #60341a"
                                                            ></span>
                                                            <span>Brown</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/cream#rs=menu"
                                                           data-option="explore.color.cream"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #fff8df"
                                                            ></span>
                                                            <span>Cream</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/gray#rs=menu"
                                                           data-option="explore.color.gray"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #869FB2"
                                                            ></span>
                                                            <span>Gray</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/gold#rs=menu"
                                                           data-option="explore.color.gold"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #ccae4e"
                                                            ></span>
                                                            <span>Gold</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/silver#rs=menu"
                                                           data-option="explore.color.silver"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span
                                                                class="w-4 h-4 rounded-full mr-2 span-color border box-content border-transparent" style="background: #c0c0c0"
                                                            ></span>
                                                            <span>Silver</span>
                                                        </a>
                                                                                                    </div>
                                            </div>

                                            <div class="w-1/5 ml-12">
                                                <div class="pl-1.5 pb-2.5 flex items-center border-b border-gray-75">
                                                    <svg class="h-4 w-auto text-gray-400 fill-current" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.043 5.61914C12.6656 5.61914 12.3594 5.92539 12.3594 6.30273V11.4297C12.3594 11.4898 12.3457 11.55 12.3211 11.602L10.2457 9.52656C10.1172 9.39805 9.94492 9.32695 9.76172 9.32695C9.57852 9.32695 9.40625 9.39805 9.27773 9.52656L8.36719 10.4344L5.15977 7.22695C4.8918 6.95898 4.45977 6.95898 4.1918 7.22695L1.64062 9.77813V3.71875C1.64062 3.4918 1.82383 3.30859 2.05078 3.30859H7.82031C8.19766 3.30859 8.50391 3.00234 8.50391 2.625C8.50391 2.24766 8.19766 1.94141 7.82031 1.94141H2.05078C1.07188 1.94141 0.273438 2.73984 0.273438 3.71875V11.4297C0.273438 11.4406 0.273438 11.4516 0.273438 11.4625C0.292578 12.4277 1.08008 13.207 2.05078 13.207H11.9492C12.9281 13.207 13.7266 12.4086 13.7266 11.4297V6.30273C13.7266 5.92539 13.4203 5.61914 13.043 5.61914Z"/>
    <path d="M13.7786 2.38164L12.7751 1.99883C12.6821 1.96328 12.611 1.89219 12.5755 1.79922L12.1927 0.795703C12.0806 0.500391 11.6622 0.500391 11.5501 0.795703L11.1673 1.79922C11.1317 1.89219 11.0606 1.96328 10.9677 1.99883L9.96416 2.38164C9.66885 2.49375 9.66885 2.91211 9.96416 3.02422L10.9677 3.40703C11.0606 3.44258 11.1317 3.51367 11.1673 3.60664L11.5501 4.61016C11.6622 4.90547 12.0806 4.90547 12.1927 4.61016L12.5755 3.60664C12.611 3.51367 12.6821 3.44258 12.7751 3.40703L13.7786 3.02422C14.0739 2.91211 14.0739 2.49375 13.7786 2.38164Z"/>
    <path d="M8.03369 6.45293L8.61885 6.67715C8.70635 6.70996 8.77745 6.78106 8.81026 6.86856L9.03448 7.45372C9.14385 7.73809 9.54854 7.73809 9.65518 7.45372L9.8794 6.86856C9.91221 6.78106 9.98331 6.70996 10.0708 6.67715L10.656 6.45293C10.9403 6.34356 10.9403 5.93887 10.656 5.83223L10.0708 5.60801C9.98331 5.5752 9.91221 5.5041 9.8794 5.4166L9.65518 4.83145C9.54581 4.54707 9.14112 4.54707 9.03448 4.83145L8.81026 5.4166C8.77745 5.5041 8.70635 5.5752 8.61885 5.60801L8.03369 5.83223C7.74658 5.9416 7.74658 6.34629 8.03369 6.45293Z"/>
</svg>

                                                    <span class="ml-2 font-semibold">
                                                        By style                                                    </span>
                                                </div>
                                                <div class="my-2">
                                                                                                            <a href="https://slidesgo.com/creative#rs=menu"
                                                           data-option="explore.style.creative"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Creative</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/simple#rs=menu"
                                                           data-option="explore.style.simple"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Simple</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/illustration#rs=menu"
                                                           data-option="explore.style.illustration"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Illustration</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/minimalist#rs=menu"
                                                           data-option="explore.style.minimalist"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Minimalist</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/vintage#rs=menu"
                                                           data-option="explore.style.vintage"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Vintage</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/aesthetic#rs=menu"
                                                           data-option="explore.style.aesthetic"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Aesthetic</span>
                                                        </a>
                                                                                                            <a href="https://slidesgo.com/cute#rs=menu"
                                                           data-option="explore.style.cute"
                                                           data-gtm-event="main_menu"
                                                           class="block p-2.5 rounded hover:bg-gray-50 flex items-center">
                                                            <span>Cute</span>
                                                        </a>
                                                                                                    </div>
                                            </div>

                                            <div class="w-1/3 ml-12">
                                                <div class="pl-1.5 pb-2.5 flex items-center border-b border-gray-75">
                                                    <svg class="h-4 w-auto text-gray-400 fill-current" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8824 13.3556C10.7738 13.3556 10.6648 13.3297 10.565 13.2772L6.98637 11.3958L3.40772 13.2772C3.17782 13.3981 2.89927 13.3779 2.68921 13.2253C2.4791 13.0726 2.37387 12.814 2.41778 12.558L3.10124 8.5731L0.206055 5.751C0.020098 5.56974 -0.0468455 5.2986 0.0334157 5.05163C0.11365 4.80462 0.327197 4.62464 0.584192 4.58728L4.58524 4.00588L6.37457 0.380292C6.48952 0.147423 6.72667 0 6.98639 0C7.24612 0 7.48327 0.147423 7.59819 0.38032L9.38752 4.00591L13.3886 4.58731C13.6456 4.62464 13.8591 4.80465 13.9393 5.05165C14.0196 5.29863 13.9527 5.56976 13.7667 5.75103L10.8715 8.57313L11.555 12.558C11.5989 12.814 11.4937 13.0727 11.2835 13.2253C11.1647 13.3117 11.0239 13.3556 10.8824 13.3556Z"/>
</svg>

                                                    <span class="ml-2 font-semibold">
                                                        By featured content                                                    </span>
                                                </div>
                                                <div class="my-2">
                                                                                                            <a
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                            data-option="explore.featured.disney"
                                                            data-gtm-event="main_menu"
                                                            href="https://slidesgo.com/disney#rs=menu"
                                                        >
                                                            <span class="block h-6">Disney</span>
                                                            <span class="block text-gray-600">Templates with your favorite Disney and Pixar characters</span>
                                                        </a>
                                                                                                            <a
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                            data-option="explore.featured.slidesclass"
                                                            data-gtm-event="main_menu"
                                                            href="https://slidesgo.com/slidesclass#rs=menu"
                                                        >
                                                            <span class="block h-6">Slidesclass</span>
                                                            <span class="block text-gray-600">Ready-to-go classes on many topics for everyone</span>
                                                        </a>
                                                                                                            <a
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                            data-option="explore.featured.editors_choice"
                                                            data-gtm-event="main_menu"
                                                            href="https://slidesgo.com/editors-choice#rs=menu"
                                                        >
                                                            <span class="block h-6">Editor’s Choice</span>
                                                            <span class="block text-gray-600">Our favorite slides</span>
                                                        </a>
                                                                                                            <a
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                            data-option="explore.featured.teacher_toolkit"
                                                            data-gtm-event="main_menu"
                                                            href="https://slidesgo.com/teacher-toolkit#rs=menu"
                                                        >
                                                            <span class="block h-6">Teacher Toolkit</span>
                                                            <span class="block text-gray-600">Content for teachers</span>
                                                        </a>
                                                                                                            <a
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                            data-option="explore.featured.coloring_page"
                                                            data-gtm-event="main_menu"
                                                            href="https://slidesgo.com/coloring-page#rs=menu"
                                                        >
                                                            <span class="block h-6">Coloring Page</span>
                                                            <span class="block text-gray-600">Kids&#039; favorite color &amp; cut activities</span>
                                                        </a>
                                                                                                            <a
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                            data-option="explore.featured.multi_purpose"
                                                            data-gtm-event="main_menu"
                                                            href="https://slidesgo.com/multi-purpose#rs=menu"
                                                        >
                                                            <span class="block h-6">Multi-purpose</span>
                                                            <span class="block text-gray-600">Presentations that suit any project</span>
                                                        </a>
                                                                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="relative group p-2.5 py-3 rounded text-gray-800 cursor-pointer">
                                <div class="flex items-center">
                                    <span class="text-base font-semibold transition-all duration-500 group-hover:text-gray-900">
                                        Learn                                    </span>
                                    <div class="relative h-4 w-4 ml-1">
                                        <svg class="absolute h-full w-4 inline-block rotate-90 transition-all duration-500 group-hover:translate-y-4 group-hover:opacity-0 fill-current">
                <use xlink:href="#icon-nav-caret-drop"/>
            </svg>
                                        <svg class="absolute h-full w-4 inline-block -rotate-90 -translate-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-gray-900 group-hover:translate-y-0 fill-current">
                <use xlink:href="#icon-nav-caret-drop"/>
            </svg>
                                    </div>
                                </div>
                                <div class="cursor-default opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500">
                                    <svg class="h-3 w-3 absolute right-2.5 mr-0.5 -bottom-1 text-white fill-current">
                <use xlink:href="#icon-nav-caret-dropdown-menu"/>
            </svg>
                                    <div
                                        class="absolute top-10 left-0 -translate-x-52 2xl:-translate-x-40 w-max"
                                    >
                                        <div
                                            class="flex w-full lg:w-screen-lg bg-white rounded shadow-md"
                                        >
                                            <div class="w-full flex my-5 mx-7">
                                                <div class="flex flex-col">
                                                                                                            <a
                                                            href="https://slidesgo.com/slidesgo-school/powerpoint-tutorials#rs=menu"
                                                            data-option="learn.powerpoint_tutorials"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span class="block h-6">PowerPoint Tutorials</span>
                                                            <span class="block text-gray-600">Learn how to work with Microsoft PowerPoint</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/slidesgo-school/google-slides-tutorials#rs=menu"
                                                            data-option="learn.google_slides_tutorials"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span class="block h-6">Google Slides Tutorials</span>
                                                            <span class="block text-gray-600">Discover the secrets of Google Slides</span>
                                                        </a>
                                                                                                            <a
                                                            href="https://slidesgo.com/slidesgo-school/presentation-tips#rs=menu"
                                                            data-option="learn.presentation_tips"
                                                            data-gtm-event="main_menu"
                                                            class="block p-2.5 rounded hover:bg-gray-50"
                                                        >
                                                            <span class="block h-6">Presentation Tips</span>
                                                            <span class="block text-gray-600">The best tips on how to make an excellent presentation</span>
                                                        </a>
                                                                                                        <a
                                                        class="block p-2.5 rounded hover:bg-gray-50"
                                                        data-option="learn.school"
                                                        data-gtm-event="main_menu"
                                                        onclick="gtm.navbarGtm('tutorial', 'https://slidesgo.com/slidesgo-school');"
                                                        href="https://slidesgo.com/slidesgo-school"
                                                    >
                                                        <span class="block h-6">Blog</span>
                                                        <span class="block text-gray-600">Articles and other resources</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="flex sm:flex-1 justify-end items-center">
                
                <div id="home-search"
                     class="absolute top-16 left-0 right-0 max-w-none justify-center px-4 py-2
                            sm:relative sm:shadow-none sm:bg-transparent sm:top-0 sm:left-auto sm:right-auto sm:py-0 sm:pr-0 sm:mr-2.5
                            sm:flex sm:flex-1 sm:max-w-sm lg:max-w-lg 2xl:max-w-md 3xl:max-w-3xl"
                >
                                            <div class="searcher transition-opacity duration-300 flex-1 z-0 pointer-events-none opacity-0">
    <form action="https://slidesgo.com/search#rs=search"
        x-data='searcher("en", "1", "")'
        x-ref="form"
        x-on:submit.prevent="submitSearch()"
        x-on:scroll-over-home-search.window="!isMinimal ? hideSearch() : ''"
        @mousedown.away="hideSearch"
        class="relative w-full mb-0">

        <div
            class="relative group bg-gray-50 sm:bg-white sm:focus-within:bg-white focus-within:placeholder-gray-600 focus-within:text-gray-600 overflow-hidden rounded text-gray-600 hover:text-gray-600"
        >
            <div
                class="hidden"
            >
                <span class="flex items-center justify-center text-gray-200 text-sm font-medium sm:pl-3 sm:border-r sm:border-gray-300 sm:group-hover:text-gray-600 sm:group-focus-within:text-gray-600 lg:hidden xl:flex">
                    <svg class="fill-current w-5 h-5 fill-current shrink-0 sm:w-4 sm:h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.321 10.355c.001.345.28.623.625.623 0 0 1.072 0 1.486-.011 1.532-.027 2.632-1.358 2.632-3.166 0-1.9-1.08-3.178-2.686-3.178H9.935a.627.627 0 0 0-.625.627l.011 5.105Zm2.061-4.483c1.06 0 1.436 1 1.436 1.929 0 .928-.434 1.9-1.405 1.916-.2 0-.538.006-.844.009l-.005-3.853h.818ZM4.121 5.168v5.262a.625.625 0 0 0 1.25 0V8.767h.84a2.11 2.11 0 1 0 0-4.22l-.006-.004H4.74a.644.644 0 0 0-.443.193.642.642 0 0 0-.176.432Zm2.084 2.345h-.832l-.006-1.72h.838a.86.86 0 1 1 0 1.72Z"/><path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.967 4.967 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.122c-.402.401-.91.679-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464l-2.66 2.658Z"/><path d="M16.354 8.603v1.8a.625.625 0 1 1-1.25 0V5.59a.625.625 0 0 1 .625-.625h2.012a.625.625 0 0 1 0 1.25h-1.387v1.138h1.239a.625.625 0 0 1 0 1.25h-1.24Z"/><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>                    <span class="hidden sm:flex mx-2">PDF</span>
                </span>
            </div>
            <input id="search-input"
                x-ref="searchinput"
                @focus="focused"
                @keyup.debounce.500="search($event)"
                @keydown.down.prevent="selectNext($event)"
                @keydown.up.prevent="selectPrev($event)"
                x-model="searchText"
                type="text" name="q"
                data-cy="search"
                                    placeholder="Search a template"
                                autocomplete="off"
                required="required"
                class="focus:ring-0 w-full outline-none appearance-none pl-4 pr-12 h-10 xl:max-w-4xl bg-transparent sm:group-hover:bg-white rounded hover:placeholder-gray-600 focus:placeholder-gray-600 pr-16">
            <label for="search-input"></label>
            <button type="submit" class="absolute top-0 right-0 bottom-0 w-10 flex items-center justify-center focus:outline-none" aria-label="Search button">
                <svg alt="Search" loading="lazy" class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57"><path d="M55.1 51.9L41.6 37.8A23 23 0 0024 0a23 23 0 1013.2 41.8L50.8 56a3 3 0 004.3.1 3 3 0 000-4.2zM24 6a17 17 0 110 34 17 17 0 010-34z"/></svg>            </button>
            <template x-if="searchText.length > 0">
                <button @click="resetSearch"
                        type="button" title="Clear the search query."
                        class="searchbox__reset absolute top-0 right-10 h-full w-8 flex justify-center items-center">
                    <svg alt="Close" class="fill-current h-3 w-3" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg"><path d="M368.7 339.4L35.9 6.6A20.7 20.7 0 006.6 36l332.8 332.8a20.7 20.7 0 1029.3-29.3z"/><path d="M339.4 6.6L6.6 339.4A20.7 20.7 0 1036 368.7L368.7 35.9a20.7 20.7 0 10-29.3-29.3z"/></svg>                </button>
            </template>
        </div>

        <template x-if="showResults">
            <div class="search-bar">
                <template x-if="searchText.length > 0 && results.length">
                    <div class="absolute bg-white shadow-lg left-0 right-0 py-4 rounded-b-lg -ml-4 sm:ml-0 w-screen sm:w-auto sm:-mt-2"
                    >
                        <div>
                            <template x-for="(result, key) in results">
                                <div @mouseover="resetOptionNavigation"
                                    @click="selectOption(result)"
                                    @keyup.enter="selectOption(result)"
                                    :class="key === selectedOption ? 'bg-gray-100' : ''"
                                    class="autocomplete-terms flex items-center text-left py-3 px-4 text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
                                    <span :class="result.fromHistory ? 'highlighted' : ''" x-html="result.highlightResult"></span>
                                </div>
                            </template>
                            <template x-if="templates.length">
                                <div class="hidden sm:block border-t border-gray-100 mt-3 pt-3 px-4">
                                    <h3 class="text-left font-bold text-gray-800 mb-2">Templates</h3>
                                    <div class="grid sm:grid-cols-3 lg:grid-cols-2 gap-4 py-2">
                                        <template x-for="(article, key) in templates">
                                            <div class="last:hidden lg:last:flex flex justify-between">
                                                <div class="w-full lg:w-4/12">
                                                    <a :href="article.url" class="block relative aspect-w-16 aspect-h-9">
                                                        <template x-if="article.premium && !article.xl">
                                                            <span class="h-4 w-4 rounded-sm bg-darkblue-500 bg-opacity-75 flex items-center justify-center z-10 mb-1 absolute top-0 left-0 mt-1 ml-1">
                                                                <img src="/images/icons/premium.svg" class="h-2 w-2">
                                                            </span>
                                                        </template>
                                                        <template x-if="article.xl">
                                                            <span class="h-4 w-4 rounded-sm bg-darkblue-500 bg-opacity-75 flex items-center justify-center z-10 mb-1 absolute top-0 left-0 mt-1 ml-1">
                                                                <img src="/images/icons/premium-xl.svg" class="h-2 w-2">
                                                            </span>
                                                        </template>
                                                        <img :src="article.thumb" class="absolute top-0 left-0 w-full h-full object-contain rounded" alt="related">
                                                    </a>
                                                </div>
                                                <div class="hidden lg:flex pl-2 w-8/12 flex-col justify-center">
                                                    <h3 class="truncate font-bold text-sm text-left">
                                                        <a :href="article.url"
                                                        x-text="article.name"
                                                        class="text-gray-700 no-underline hover:text-purple-700"></a>
                                                    </h3>
                                                    <p x-text="article.total_images +' slides'" class="text-gray-600 text-xs text-left"></p>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
                <template x-if="searchText.length === 0">
                    <div
    class="bg-white shadow-lg w-full p-4 fixed sm:absolute top-28 sm:top-auto left-0 w-screen sm:w-full sm:mt-2 sm:rounded"
>
    <p class="text-left font-semibold mb-2 text-gray-900">Top searches</p>
    <div class="flex items-center mb-4 overflow-auto sm:flex-wrap">
                    <a
                href="https://slidesgo.com/search?q=aesthetic#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                aesthetic
            </a>
                    <a
                href="https://slidesgo.com/search?q=christmas#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                christmas
            </a>
                    <a
                href="https://slidesgo.com/search?q=history#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                history
            </a>
                    <a
                href="https://slidesgo.com/search?q=simple#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                simple
            </a>
                    <a
                href="https://slidesgo.com/search?q=school#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                school
            </a>
                    <a
                href="https://slidesgo.com/search?q=science#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                science
            </a>
                    <a
                href="https://slidesgo.com/search?q=minimalist#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                minimalist
            </a>
                    <a
                href="https://slidesgo.com/search?q=technology#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                technology
            </a>
                    <a
                href="https://slidesgo.com/search?q=winter#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                winter
            </a>
            </div>
    <p class="mb-2 text-left font-semibold text-gray-900">Trending searches</p>
    <div
        class="flex overflow-auto sm:grid gap-x-2 gap-y-6 sm:grid-cols-2 mt-2 pb-2 pt-2 mb-4 mt-2 sm:pb-0 2xl:grid-cols-3">
                                <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=indigenous&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-2/5">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/14254862/native-american-studies-college-major1637315335.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/14254862/native-american-studies-college-major1637315335.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/14254862/native-american-studies-college-major1637315335.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">indigenous</h3>
                    <p class="text-gray-600 text-left text-xs">57 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=hockey&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-2/5">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/39655089/hockey-lovers-newsletter1692875215.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/39655089/hockey-lovers-newsletter1692875215.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/39655089/hockey-lovers-newsletter1692875215.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">hockey</h3>
                    <p class="text-gray-600 text-left text-xs">27 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=qatar&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-2/5">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/42709788/discover-qatar1697532848.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/42709788/discover-qatar1697532848.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/42709788/discover-qatar1697532848.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">qatar</h3>
                    <p class="text-gray-600 text-left text-xs">21 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=buisness&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-2/5">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">buisness</h3>
                    <p class="text-gray-600 text-left text-xs">106 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=monaco&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-2/5">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/22761915/welcome-to-capri-mk-plan1656946731.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/22761915/welcome-to-capri-mk-plan1656946731.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/22761915/welcome-to-capri-mk-plan1656946731.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">monaco</h3>
                    <p class="text-gray-600 text-left text-xs">20 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=sex&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-2/5">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/2389364/sex-education-infographics1612265482.png"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/2389364/sex-education-infographics1612265482.png"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/2389364/sex-education-infographics1612265482.png"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">sex</h3>
                    <p class="text-gray-600 text-left text-xs">36 templates</p>
                </div>
            </a>
                        </div>
</div>
                </template>
            </div>
        </template>
    </form>
</div>
                                    </div>
                <div class="flex justify-end">
                    

                    <div class="hidden xl:flex items-center">
                        <div class="relative group p-2.5 py-3 rounded text-gray-800 cursor-pointer">
                            <div class="flex items-center">
                                <span class="text-base font-semibold transition-all duration-500 group-hover:text-gray-900">
                                    More                                </span>
                                <div class="relative h-4 w-4 ml-1">
                                    <svg class="absolute h-full w-4 inline-block rotate-90 transition-all duration-500 group-hover:translate-y-4 group-hover:opacity-0 fill-current">
                <use xlink:href="#icon-nav-caret-drop"/>
            </svg>
                                    <svg class="absolute h-full w-4 inline-block -rotate-90 -translate-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-gray-900 group-hover:translate-y-0 fill-current">
                <use xlink:href="#icon-nav-caret-drop"/>
            </svg>
                                </div>
                            </div>
                            <div class="cursor-default opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500">
                                <svg class="h-3 w-3 absolute right-2.5 mr-0.5 -bottom-1 text-white fill-current">
                <use xlink:href="#icon-nav-caret-dropdown-menu"/>
            </svg>
                                <div
                                    class="absolute -translate-x-11 top-10 w-max"
                                >
                                    <div
                                        class="flex w-full lg:w-screen-lg bg-white rounded shadow-md"
                                    >
                                        <div class="w-full my-5 mx-7">

                                                                                        <a
                                                class="block p-2.5 rounded hover:bg-gray-50"
                                                href="https://www.freepik.com/"
                                                @click="gtm.navbarGtm('Freepik', 'https://www.freepik.com/')"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span class="block h-6">Freepik</span>
                                                <span class="block text-gray-600">Free vectors, photos and PSD</span>
                                            </a>
                                                                                        <a
                                                class="block p-2.5 rounded hover:bg-gray-50"
                                                href="https://www.flaticon.com/"
                                                @click="gtm.navbarGtm('Flaticon', 'https://www.flaticon.com/')"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span class="block h-6">Flaticon</span>
                                                <span class="block text-gray-600">Free customizable icons</span>
                                            </a>
                                            <a
                                                class="block p-2.5 rounded hover:bg-gray-50"
                                                href="https://wepik.com/"
                                                @click="gtm.navbarGtm('Wepik', 'https://wepik.com/')"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span class="block h-6">Wepik</span>
                                                <span class="block text-gray-600">Free online template editor</span>
                                            </a>
                                            <a
                                                class="block p-2.5 rounded hover:bg-gray-50"
                                                href="https://storyset.com/"
                                                @click="gtm.navbarGtm('Storyset', 'https://storyset.com/')"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span class="block h-6">Storyset</span>
                                                <span class="block text-gray-600">Free editable illustrations</span>
                                            </a>
                                            <a
                                                class="block p-2.5 rounded hover:bg-gray-50"
                                                href="https://www.videvo.net/"
                                                @click="gtm.navbarGtm('Videvo', 'https://www.videvo.net/')"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span class="block h-6">Videvo</span>
                                                <span class="block text-gray-600">Free videos and motion graphics</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://slidesgo.com/pricing"
   onclick="trackAnalytic('premium', 'click', 'prices-individual');
   gtm.microfunnel('', 'Simple plans for you', 'https://slidesgo.com/pricing', 'header_menu')"
   class="mx-2.5 py-2.5 rounded text-yellow-900 hover:text-yellow-800 focus:outline-none flex items-center"
   aria-label="Pricing">
    <span class="text-base font-semibold">
    Premium plans    </span>
</a>
                    </div>
                    
                    <div class="flex items-center">
                        <form method="POST" action="https://slidesgo.com/auth/login"
      id="login"
      class="flex text-gray-200 items-center sm:ml-5">
    <input type="hidden" name="_token" value="" autocomplete="off">    <input type="hidden" value="sign-in-button" name="login-from"/>
    <input type="hidden" value="en" name="language"/>
    <input type="hidden" value="en.home" name="login-route"/>
    <button type="submit"
            data-cy="log-in-button"
            onclick="gtm.login('Log in', 'https://slidesgo.com/auth/login', 'navbar')"
            class="h-8 sm:h-10 px-3 sm:px-4 rounded text-sm sm:text-base text-gray-900 font-semibold border border-gray-900 hover:text-gray-800"
    >
    Log in</button>
</form>

                    </div>
                </div>
            </div>
        </div>
    </header>
</div>
<script>
    const homeHeader = document.querySelector(".header-home");
    const searchContainer = document.querySelector("#home-search");
    let topBarShowedPx = -1;

    function checkScroll(offset) {
        let searcher = homeHeader.getElementsByClassName("searcher")[0];

        // Classes are for sm: to prevent change background for mobile as it is always purple
        // (related to sm:-mt-16 at home)
        if (offset.top < -1) {
            homeHeader.classList.add('scrolled')
        } else {
            homeHeader.classList.remove('scrolled')
        }

        if (searcher) {
            if (offset.top < -230) {
                const event = new CustomEvent("scroll-over-home-search");
                window.dispatchEvent(event);
            }

            // Show header searcher
            if (offset.top < -150) {
                if (searchContainer) {
                    searchContainer.classList.add("bg-white", "shadow-md");
                }

                searcher.classList.remove(
                    "pointer-events-none",
                    "opacity-0"
                );
            } else {
                if (searchContainer) {
                    searchContainer.classList.remove("bg-white", "shadow-md");
                }

                searcher.classList.add("pointer-events-none", "opacity-0");

            }
        }
    }

    // Loaded for the first time
    const offset = document.body.getBoundingClientRect();
    checkScroll(offset);
    homeHeader.classList.add('transition-all', 'duration-200')


    window.addEventListener("scroll", () => {
        const offset = document.body.getBoundingClientRect();
        checkScroll(offset);
    }, { passive: true });
</script>
<div class="hidden">
    <svg id="icon-nav-caret-drop" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><defs/><path d="M226.6 397l-92.3 92.3a25 25 0 0035.4 35.4l110-110a25 25 0 000-35.4l-110-110a25 25 0 00-35.4 35.4l92.3 92.3z"/></svg>
}
    <svg id="icon-nav-caret-dropdown-menu" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0L20 10H0L10 0Z"/>
</svg>
}
</div>
    
    <div>
            </div>

        <div class="flex items-end h-auto box-content sm:h-[350px] bg-purple-100 relative sm:-mt-16 justify-center sm:items-center pb-12 sm:pb-0 pt-8 sm:pt-16 px-0 sm:px-6">
        <div class="overflow-hidden absolute inset-0 z-0">



        </div>
        <div class="container text-center relative sm:max-w-md md:max-w-full">
            <h1 class="text-6xl sm:text-7xl font-title text-gray-900 font-semibold relative mb-4"
                id="home-claim">
                Free templates for Google Slides and PowerPoint
            </h1>
            <h2 class="text-2xl sm:text-3xl font-base text-gray-900 font-normal relative mb-4 sm:mb-0">Create engaging presentations, faster</h2>
            <div class="searcher transition-opacity duration-300 flex-1 z-0 pointer-events-auto opacity-100">
    <form action="https://slidesgo.com/search#rs=search"
        x-data='searcher("en", "", "")'
        x-ref="form"
        x-on:submit.prevent="submitSearch()"
        x-on:scroll-over-home-search.window="!isMinimal ? hideSearch() : ''"
        @mousedown.away="hideSearch"
        class="relative w-full mb-0 md:w-8/12 max-w-2xl mt-6 md:mt-8 mx-auto z-15">

        <div
            class="relative group bg-gray-50 sm:bg-white sm:focus-within:bg-white focus-within:placeholder-gray-600 focus-within:text-gray-600 overflow-hidden rounded-lg"
        >
            <div
                class="hidden"
            >
                <span class="flex items-center justify-center text-gray-200 text-sm font-medium sm:pl-3 sm:border-r sm:border-gray-300 sm:group-hover:text-gray-600 sm:group-focus-within:text-gray-600 lg:hidden xl:flex">
                    <svg class="fill-current w-5 h-5 fill-current shrink-0 sm:w-4 sm:h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.321 10.355c.001.345.28.623.625.623 0 0 1.072 0 1.486-.011 1.532-.027 2.632-1.358 2.632-3.166 0-1.9-1.08-3.178-2.686-3.178H9.935a.627.627 0 0 0-.625.627l.011 5.105Zm2.061-4.483c1.06 0 1.436 1 1.436 1.929 0 .928-.434 1.9-1.405 1.916-.2 0-.538.006-.844.009l-.005-3.853h.818ZM4.121 5.168v5.262a.625.625 0 0 0 1.25 0V8.767h.84a2.11 2.11 0 1 0 0-4.22l-.006-.004H4.74a.644.644 0 0 0-.443.193.642.642 0 0 0-.176.432Zm2.084 2.345h-.832l-.006-1.72h.838a.86.86 0 1 1 0 1.72Z"/><path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.967 4.967 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.122c-.402.401-.91.679-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464l-2.66 2.658Z"/><path d="M16.354 8.603v1.8a.625.625 0 1 1-1.25 0V5.59a.625.625 0 0 1 .625-.625h2.012a.625.625 0 0 1 0 1.25h-1.387v1.138h1.239a.625.625 0 0 1 0 1.25h-1.24Z"/><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>                    <span class="hidden sm:flex mx-2">PDF</span>
                </span>
            </div>
            <input id="search-input"
                x-ref="searchinput"
                @focus="focused"
                @keyup.debounce.500="search($event)"
                @keydown.down.prevent="selectNext($event)"
                @keydown.up.prevent="selectPrev($event)"
                x-model="searchText"
                type="text" name="q"
                data-cy="search"
                                    placeholder="Search a template"
                                autocomplete="off"
                required="required"
                class="focus:ring-0 w-full outline-none appearance-none pl-4 sm:pl-6 pr-16 h-12 sm:h-14 bg-white placeholder-gray-600 rounded-lg">
            <label for="search-input"></label>
            <button type="submit" class="absolute top-0 right-0 bottom-0 w-10 flex items-center justify-center focus:outline-none" aria-label="Search button">
                <svg alt="Search" loading="lazy" class="fill-current h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57"><path d="M55.1 51.9L41.6 37.8A23 23 0 0024 0a23 23 0 1013.2 41.8L50.8 56a3 3 0 004.3.1 3 3 0 000-4.2zM24 6a17 17 0 110 34 17 17 0 010-34z"/></svg>            </button>
            <template x-if="searchText.length > 0">
                <button @click="resetSearch"
                        type="button" title="Clear the search query."
                        class="searchbox__reset absolute top-0 right-10 h-full w-8 flex justify-center items-center">
                    <svg alt="Close" class="fill-current h-3 w-3" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg"><path d="M368.7 339.4L35.9 6.6A20.7 20.7 0 006.6 36l332.8 332.8a20.7 20.7 0 1029.3-29.3z"/><path d="M339.4 6.6L6.6 339.4A20.7 20.7 0 1036 368.7L368.7 35.9a20.7 20.7 0 10-29.3-29.3z"/></svg>                </button>
            </template>
        </div>

        <template x-if="showResults">
            <div class="search-bar">
                <template x-if="searchText.length > 0 && results.length">
                    <div class="absolute bg-white shadow-lg left-0 right-0 py-4 rounded-b-lg -mt-2"
                    >
                        <div>
                            <template x-for="(result, key) in results">
                                <div @mouseover="resetOptionNavigation"
                                    @click="selectOption(result)"
                                    @keyup.enter="selectOption(result)"
                                    :class="key === selectedOption ? 'bg-gray-100' : ''"
                                    class="autocomplete-terms flex items-center text-left py-3 px-4 text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
                                    <span :class="result.fromHistory ? 'highlighted' : ''" x-html="result.highlightResult"></span>
                                </div>
                            </template>
                            <template x-if="templates.length">
                                <div class="hidden sm:block border-t border-gray-100 mt-3 pt-3 px-4">
                                    <h3 class="text-left font-bold text-gray-800 mb-2">Templates</h3>
                                    <div class="grid sm:grid-cols-3 lg:grid-cols-2 gap-4 py-2">
                                        <template x-for="(article, key) in templates">
                                            <div class="last:hidden lg:last:flex flex justify-between">
                                                <div class="w-full lg:w-4/12">
                                                    <a :href="article.url" class="block relative aspect-w-16 aspect-h-9">
                                                        <template x-if="article.premium && !article.xl">
                                                            <span class="h-4 w-4 rounded-sm bg-darkblue-500 bg-opacity-75 flex items-center justify-center z-10 mb-1 absolute top-0 left-0 mt-1 ml-1">
                                                                <img src="/images/icons/premium.svg" class="h-2 w-2">
                                                            </span>
                                                        </template>
                                                        <template x-if="article.xl">
                                                            <span class="h-4 w-4 rounded-sm bg-darkblue-500 bg-opacity-75 flex items-center justify-center z-10 mb-1 absolute top-0 left-0 mt-1 ml-1">
                                                                <img src="/images/icons/premium-xl.svg" class="h-2 w-2">
                                                            </span>
                                                        </template>
                                                        <img :src="article.thumb" class="absolute top-0 left-0 w-full h-full object-contain rounded" alt="related">
                                                    </a>
                                                </div>
                                                <div class="hidden lg:flex pl-2 w-8/12 flex-col justify-center">
                                                    <h3 class="truncate font-bold text-sm text-left">
                                                        <a :href="article.url"
                                                        x-text="article.name"
                                                        class="text-gray-700 no-underline hover:text-purple-700"></a>
                                                    </h3>
                                                    <p x-text="article.total_images +' slides'" class="text-gray-600 text-xs text-left"></p>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
                <template x-if="searchText.length === 0">
                    <div
    class="bg-white shadow-lg w-full p-4 absolute mt-2 rounded-lg"
>
    <p class="text-left font-semibold mb-2 text-gray-900">Top searches</p>
    <div class="flex items-center mb-4 overflow-auto sm:flex-wrap">
                    <a
                href="https://slidesgo.com/search?q=aesthetic#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                aesthetic
            </a>
                    <a
                href="https://slidesgo.com/search?q=christmas#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                christmas
            </a>
                    <a
                href="https://slidesgo.com/search?q=history#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                history
            </a>
                    <a
                href="https://slidesgo.com/search?q=simple#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                simple
            </a>
                    <a
                href="https://slidesgo.com/search?q=school#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                school
            </a>
                    <a
                href="https://slidesgo.com/search?q=science#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                science
            </a>
                    <a
                href="https://slidesgo.com/search?q=minimalist#rs=topsearches"
                class="cursor-pointer text-sm text-gray-900 flex items-center px-3 py-1 mr-2 mb-2 rounded whitespace-nowrap border border-gray-300 hover:border-gray-900 active:bg-gray-100"
            >
                minimalist
            </a>
            </div>
    <p class="mb-2 text-left font-semibold text-gray-900">Trending searches</p>
    <div
        class="flex overflow-auto sm:grid gap-x-2 gap-y-6 sm:grid-cols-2 mt-2 pb-2 pt-2 mb-4 mt-2 sm:pb-0">
                                <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=indigenous&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-1/3">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/14254862/native-american-studies-college-major1637315335.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/14254862/native-american-studies-college-major1637315335.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/14254862/native-american-studies-college-major1637315335.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">indigenous</h3>
                    <p class="text-gray-600 text-left text-xs">57 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=hockey&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-1/3">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/39655089/hockey-lovers-newsletter1692875215.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/39655089/hockey-lovers-newsletter1692875215.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/39655089/hockey-lovers-newsletter1692875215.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">hockey</h3>
                    <p class="text-gray-600 text-left text-xs">27 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=qatar&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-1/3">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/42709788/discover-qatar1697532848.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/42709788/discover-qatar1697532848.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/42709788/discover-qatar1697532848.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">qatar</h3>
                    <p class="text-gray-600 text-left text-xs">21 templates</p>
                </div>
            </a>
                                            <a
                class="shrink-0 w-2/3 sm:w-auto flex items-center group cursor-pointer mr-3 sm:mr-0"
                href="https://slidesgo.com/search?q=buisness&order=recent#rs=collections-trending-searches"
            >
                <div
                    class="w-1/2 pr-2 mr-1 shrink-0 sm:w-1/3">
                    <div class="aspect-w-16 aspect-h-9">
                        <img class="rounded absolute left-0 top-0 z-20"
                                 src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg"/>
                        <div class="absolute -top-1 scale-95 h-full bg-gray-200 rounded z-10 overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                 src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg"/>
                        </div>
                        <div class="absolute -top-2 scale-90 h-full bg-gray-100 rounded overflow-hidden">
                            <img class="absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                 src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 sm:w-auto">
                    <h3 class="font-semibold text-gray-900 mb-1 text-sm text-left group-hover:text-purple-700 capitalize">buisness</h3>
                    <p class="text-gray-600 text-left text-xs">106 templates</p>
                </div>
            </a>
                        </div>
</div>
                </template>
            </div>
        </template>
    </form>
</div>
        </div>
    </div>

        <div class="bg-purple-800 text-white font-semibold text-xl sm:text-2xl sm:text-left w-full py-4 px-4 flex flex-col items-center justify-center sm:flex-row">
    <p class="mb-4 sm:mr-4 sm:mb-0 flex flex-col sm:flex-row">
        <span class="text-purple-400 mr-2 flex justify-center sm:w-auto mb-2 sm:mb-0">
            <svg alt="New, Create AI presentation" class="fill-current h-4.5 sm:h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" width="19" height="18"><path d="M.871 3.29a3.06 3.06 0 0 1 1.91 1.91.528.528 0 0 0 1.01.002 3.06 3.06 0 0 1 1.908-1.91.528.528 0 0 0 .003-1.01A3.06 3.06 0 0 1 3.792.375.527.527 0 0 0 2.781.37a3.06 3.06 0 0 1-1.908 1.91.528.528 0 0 0-.003 1.01ZM18.128 14.71a3.06 3.06 0 0 1-1.91-1.91.527.527 0 0 0-1.008-.002 3.06 3.06 0 0 1-1.91 1.91.527.527 0 0 0-.002 1.01 3.06 3.06 0 0 1 1.91 1.908.528.528 0 0 0 1.01.002 3.06 3.06 0 0 1 1.908-1.91.528.528 0 0 0 .002-1.008ZM11.361 11.889l-.847-.283a5.751 5.751 0 0 1-3.62-3.62L6.61 7.14a.527.527 0 0 0-1 0l-.283.847a5.751 5.751 0 0 1-3.62 3.62l-.848.283a.527.527 0 0 0 0 1l.848.283a5.751 5.751 0 0 1 3.62 3.62l.283.848a.527.527 0 0 0 1 0l.283-.848a5.751 5.751 0 0 1 3.62-3.62l.847-.283a.527.527 0 0 0 0-1ZM14.019 8.962a.528.528 0 0 0 .504-.372 5.751 5.751 0 0 1 3.603-3.604.527.527 0 0 0 .002-1.009A5.752 5.752 0 0 1 14.524.374a.527.527 0 0 0-1.01-.002 5.751 5.751 0 0 1-3.602 3.604.528.528 0 0 0-.002 1.01 5.752 5.752 0 0 1 3.604 3.602.527.527 0 0 0 .505.374Z"/></svg>            <span class="align-items-center">New!</span>
        </span>
        <span class="text-center text-lg sm:text-2xl">
            Make quick presentations with AI        </span>
    </p>
    <a href="https://slidesgo.com/ai-presentations#rs=banner-top" class="text-purple-400 hidden transition duration-100 hover:scale-105 sm:flex">
        <span class="align-items-center">Try now</span>
        <svg class="fill-current fill-current h-5 w-5 inline align-items-center" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
<path d="M2.63236 9.26808H10.8757L9.1343 11.0095C8.73118 11.4126 8.73118 12.0662 9.1343 12.4693C9.53742 12.8724 10.191 12.8724 10.5941 12.4693L14.0977 8.96571C14.2913 8.77218 14.4001 8.50957 14.4001 8.23582C14.4001 7.96207 14.2913 7.6995 14.0977 7.50589L10.5942 4.00232C10.191 3.59925 9.53746 3.59921 9.13434 4.00232C8.73123 4.40544 8.73123 5.05903 9.13434 5.46214L10.8758 7.20356H2.63236C2.06226 7.20356 1.6001 7.66572 1.6001 8.23582C1.60006 8.80592 2.06226 9.26808 2.63236 9.26808Z" />
</svg>    </a>
    
    <a href="https://slidesgo.com/ai-presentations#rs=banner-top"
       class="flex bg-white py-3 px-8 h-12 rounded text-gray-900 text-lg sm:text-2xl items-center justify-center hover:bg-gray-50 active:bg-gray-100 sm:hidden">
        <span class="flex align-items-center justify-center">Try now</span>
    </a>
</div>
    
        <main class="pt-8 sm:pt-16 relative z-0">
                            
        <div class="container mx-auto px-4 pb-10 below-the-fold">
            <h3 class="text-gray-900 text-5xl font-title font-bold mb-2">
                Trending searches            </h3>
            <div class="sm:mb-8 -mx-4 relative">
                <div
    x-data="collection"
    class="relative z-0">
    <div
        x-ref="container"
        class="collections pt-5 overflow-x-scroll relative flex"
    >
        
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/disney?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Disney','https://slidesgo.com/disney?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Disney"
                                                             srcset="https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47341387/responsive-images/stitch-and-angel-valentines1704890424___media_library_original_459_258.jpg 459w"
                                                          src="https://media.slidesgo.com/storage/47341387/stitch-and-angel-valentines1704890424.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47341387/stitch-and-angel-valentines1704890424.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47341387/stitch-and-angel-valentines1704890424.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Disney</h3>
                    <p class="text-gray-700 text-base">16 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/slidesclass?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Slidesclass','https://slidesgo.com/slidesclass?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Slidesclass"
                                                             srcset="https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47158016/responsive-images/laughter-therapy-workshop1704437501___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/47158016/laughter-therapy-workshop1704437501.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47158016/laughter-therapy-workshop1704437501.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47158016/laughter-therapy-workshop1704437501.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Slidesclass</h3>
                    <p class="text-gray-700 text-base">221 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/editors-choice?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Editor’s Choice','https://slidesgo.com/editors-choice?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Editor’s Choice"
                                                             srcset="https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47389866/responsive-images/family-members-vocabulary-french-foreign-language-pre-k1704972285___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/47389866/family-members-vocabulary-french-foreign-language-pre-k1704972285.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47389866/family-members-vocabulary-french-foreign-language-pre-k1704972285.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47389866/family-members-vocabulary-french-foreign-language-pre-k1704972285.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Editor’s Choice</h3>
                    <p class="text-gray-700 text-base">2745 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/color-of-the-year?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Color of the Year','https://slidesgo.com/color-of-the-year?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Color of the Year"
                                                             srcset="https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/46332428/responsive-images/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/46332428/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/46332428/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/46332428/color-of-the-year-2024-peach-fuzz-illustration-theme1702295963.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Color of the Year</h3>
                    <p class="text-gray-700 text-base">18 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/new-year?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'New Year','https://slidesgo.com/new-year?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="New Year"
                                                             srcset="https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47168573/responsive-images/2024-year-of-the-dragon1704461423___media_library_original_459_258.jpg 459w"
                                                          src="https://media.slidesgo.com/storage/47168573/2024-year-of-the-dragon1704461423.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47168573/2024-year-of-the-dragon1704461423.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47168573/2024-year-of-the-dragon1704461423.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">New Year</h3>
                    <p class="text-gray-700 text-base">94 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/presentation-maker?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Presentation Maker','https://slidesgo.com/presentation-maker?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Presentation Maker"
                                                             srcset="https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47389821/responsive-images/bone-marrow-transplantation-case-report1704972260___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/47389821/bone-marrow-transplantation-case-report1704972260.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47389821/bone-marrow-transplantation-case-report1704972260.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47389821/bone-marrow-transplantation-case-report1704972260.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Presentation Maker</h3>
                    <p class="text-gray-700 text-base">201 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/winter?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Winter','https://slidesgo.com/winter?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Winter"
                                                             srcset="https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/46959194/responsive-images/snowy-mountains-minitheme-infographics1703672272___media_library_original_459_258.jpg 459w"
                                                          src="https://media.slidesgo.com/storage/46959194/snowy-mountains-minitheme-infographics1703672272.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/46959194/snowy-mountains-minitheme-infographics1703672272.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/46959194/snowy-mountains-minitheme-infographics1703672272.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Winter</h3>
                    <p class="text-gray-700 text-base">148 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/snow?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Snow','https://slidesgo.com/snow?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Snow"
                                                             srcset="https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_1119_629.jpg 1119w, https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/46395431/responsive-images/back-to-school-from-winter-break-pre-k1702367774___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/46395431/back-to-school-from-winter-break-pre-k1702367774.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/46395431/back-to-school-from-winter-break-pre-k1702367774.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/46395431/back-to-school-from-winter-break-pre-k1702367774.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Snow</h3>
                    <p class="text-gray-700 text-base">94 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/journal?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Journal','https://slidesgo.com/journal?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Journal"
                                                             srcset="https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/45367307/responsive-images/old-newspaper-newsletter1701076185___media_library_original_459_258.jpg 459w"
                                                          src="https://media.slidesgo.com/storage/45367307/old-newspaper-newsletter1701076185.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/45367307/old-newspaper-newsletter1701076185.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/45367307/old-newspaper-newsletter1701076185.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Journal</h3>
                    <p class="text-gray-700 text-base">37 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/party?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Party','https://slidesgo.com/party?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Party"
                                                             srcset="https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47444996/responsive-images/lets-celebrate-shangyuan-festival1705068448___media_library_original_459_258.jpg 459w"
                                                          src="https://media.slidesgo.com/storage/47444996/lets-celebrate-shangyuan-festival1705068448.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47444996/lets-celebrate-shangyuan-festival1705068448.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47444996/lets-celebrate-shangyuan-festival1705068448.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Party</h3>
                    <p class="text-gray-700 text-base">231 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/gym?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Gym','https://slidesgo.com/gym?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Gym"
                                                             srcset="https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47403548/responsive-images/pilates-gym-business-plan1704987867___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/47403548/pilates-gym-business-plan1704987867.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47403548/pilates-gym-business-plan1704987867.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47403548/pilates-gym-business-plan1704987867.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Gym</h3>
                    <p class="text-gray-700 text-base">35 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/goals?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Goals','https://slidesgo.com/goals?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Goals"
                                                             srcset="https://media.slidesgo.com/storage/46692527/responsive-images/indicators-of-success-theme1702889526___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/46692527/responsive-images/indicators-of-success-theme1702889526___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/46692527/responsive-images/indicators-of-success-theme1702889526___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/46692527/responsive-images/indicators-of-success-theme1702889526___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/46692527/responsive-images/indicators-of-success-theme1702889526___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/46692527/responsive-images/indicators-of-success-theme1702889526___media_library_original_655_368.jpg 655w"
                                                          src="https://media.slidesgo.com/storage/46692527/indicators-of-success-theme1702889526.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/46692527/indicators-of-success-theme1702889526.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/46692527/indicators-of-success-theme1702889526.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Goals</h3>
                    <p class="text-gray-700 text-base">21 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/book?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Book','https://slidesgo.com/book?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Book"
                                                             srcset="https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47097456/responsive-images/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/47097456/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47097456/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47097456/advanced-grammar-and-sentence-structure-language-arts-10th-grade1704285398.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Book</h3>
                    <p class="text-gray-700 text-base">346 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/diary?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Diary','https://slidesgo.com/diary?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Diary"
                                                             srcset="https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_1119_629.jpg 1119w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/46956876/responsive-images/february-scrapbook-diary1703667827___media_library_original_459_258.jpg 459w"
                                                          src="https://media.slidesgo.com/storage/46956876/february-scrapbook-diary1703667827.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/46956876/february-scrapbook-diary1703667827.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/46956876/february-scrapbook-diary1703667827.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Diary</h3>
                    <p class="text-gray-700 text-base">46 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/yearly-planner?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Yearly Planner','https://slidesgo.com/yearly-planner?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Yearly Planner"
                                                             srcset="https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/45154419/responsive-images/yearly-calendar-20241700736404___media_library_original_548_308.jpg 548w"
                                                          src="https://media.slidesgo.com/storage/45154419/yearly-calendar-20241700736404.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/45154419/yearly-calendar-20241700736404.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/45154419/yearly-calendar-20241700736404.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Yearly Planner</h3>
                    <p class="text-gray-700 text-base">6 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/teacher-toolkit?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Teacher Toolkit','https://slidesgo.com/teacher-toolkit?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Teacher Toolkit"
                                                             srcset="https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_1132_1600.jpg 1132w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_947_1339.jpg 947w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_792_1119.jpg 792w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_662_936.jpg 662w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_554_783.jpg 554w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_464_656.jpg 464w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_388_548.jpg 388w, https://media.slidesgo.com/storage/38518630/responsive-images/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995___media_library_original_324_458.jpg 324w"
                                                          src="https://media.slidesgo.com/storage/38518630/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/38518630/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/38518630/panno-pastel-scrapbook-style-printable-collection-my-first-day1690276995.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Teacher Toolkit</h3>
                    <p class="text-gray-700 text-base">121 templates</p>
                </a>
            </div>
                                <div
                x-ref="collection"
                class="shrink-0 w-4/6 sm:w-1/3 lg:w-1/4 h-full relative"
                >
                <a
                    href="https://slidesgo.com/event?order=recent#rs=collections-trending-searches"
                    class="text-gray-900 hover:text-purple-700 px-4 flex flex-col"
                    onclick="gtm.clickCollection('home', 'Event','https://slidesgo.com/event?order=recent#rs=collections-trending-searches');"
                >
                    <div class="relative block aspect-w-16 aspect-h-9 mb-4 group">
                        <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded z-15 bg-gray-100" alt="Event"
                                                             srcset="https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_459_258.jpg 459w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_384_216.jpg 384w, https://media.slidesgo.com/storage/47528367/responsive-images/valentines-day-love1705309876___media_library_original_321_181.jpg 321w"
                                                          src="https://media.slidesgo.com/storage/47528367/valentines-day-love1705309876.jpg"
                             loading="lazy"
                             onload="this.onload=null;this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';"
                             sizes="1px"
                        />
                        <div class="absolute -top-1 h-full bg-gray-200 rounded z-10 overflow-hidden transition-all duration-300 group-hover:-top-2 aspect-w-16 aspect-h-9 scale-x-95" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded blur-lg"
                                src="https://media.slidesgo.com/storage/47528367/valentines-day-love1705309876.jpg"
                                loading="lazy" />
                        </div>
                        <div class="absolute -top-2 h-full bg-gray-100 rounded overflow-hidden transition-all duration-300 group-hover:-top-4 aspect-w-16 aspect-h-9 scale-x-90" style="-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);">
                            <img class="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 rounded opacity-50 blur-lg"
                                src="https://media.slidesgo.com/storage/47528367/valentines-day-love1705309876.jpg"
                                loading="lazy" />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-1">Event</h3>
                    <p class="text-gray-700 text-base">2579 templates</p>
                </a>
            </div>
            </div>
            <div class="w-10 absolute top-0 right-0 sm:bottom-20 xl:bottom-16 -mr-1 z-20 hidden sm:flex items-center justify-center">
            <button x-on:click="next()" :class="lastIndex === currentActive ? 'opacity-0' : ''" class="w-10 h-10 rounded-full shadow flex items-center justify-center bg-white transition duration-300 hover:shadow-md focus:outline-none hover:text-gray-800 cursor-pointer">
                <svg alt="Next slide" loading="lazy" class="fill-current h-4 w-4 -mr-1 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18"><path d="M5 9l6.5 6.2c.7.6.7 1.7 0 2.3-.7.7-1.8.7-2.5 0l-7.6-7.3a1.6 1.6 0 010-2.4L9 .5c.7-.7 1.8-.7 2.5 0 .7.6.7 1.7 0 2.3L5 9z"/></svg>            </button>
        </div>
        <div class="w-10 absolute top-0 left-0 sm:bottom-20 xl:bottom-16 -mr-1 z-20 hidden sm:flex items-center justify-center">
            <div x-on:click="previous()" :class="currentActive !== 0 ? 'opacity-100' : ''" class="w-10 h-10 opacity-0 rounded-full shadow flex items-center justify-center bg-white transition duration-300 hover:shadow-md focus:outline-none hover:text-gray-800 cursor-pointer">
                <svg alt="Previous slide" loading="lazy" class="fill-current h-4 w-4 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18"><path d="M5 9l6.5 6.2c.7.6.7 1.7 0 2.3-.7.7-1.8.7-2.5 0l-7.6-7.3a1.6 1.6 0 010-2.4L9 .5c.7-.7 1.8-.7 2.5 0 .7.6.7 1.7 0 2.3L5 9z"/></svg>            </div>
        </div>
    </div>
            </div>
        </div>

        <div class="container mx-auto px-4 below-the-fold">
            <h3 class="text-gray-900 text-5xl font-title font-bold mb-6">
                Latest themes            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div class="theme_post"
     data-id="27852"
     data-slug="love-messages-for-valentines-day-newsletter"
          @toggle-fav-27852.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'love-messages-for-valentines-day-newsletter', [&quot;https:\/\/media.slidesgo.com\/storage\/47403172\/conversions\/0-love-messages-for-valentines-day-newsletter-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47403182\/conversions\/1-love-messages-for-valentines-day-newsletter-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/love-messages-for-valentines-day-newsletter#position-1&amp;rs=home-latest"
                   x-on:click='handleEvents("27852",
                    "Love Messages for Valentine\u0027s Day Newsletter",
                    "Marketing",
                    "",
                    "https://slidesgo.com/theme/love-messages-for-valentines-day-newsletter#position-1&amp;rs=home-latest&amp;rs=home-latest",
                    "home-latest")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Love Messages for Valentine's Day Newsletter presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47403591/responsive-images/love-messages-for-valentines-day-newsletter1704987884___media_library_original_548_308.jpg 548w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErOTlVOFNybzl3WXlNMVVqOGNOSTZxSWlkM2VwOWY4QURpNnBjYjg0K2xQMHZSSUxZS2pJR1plOWVPZlJtNmx5SXJBM01ueWpHYTV6UVBFdzEzVzVZWWtPMVA0cTB2RTV1UDdHbVMyVGMyM0FGY044TG85VDArN25ONWI3QzdIbWx5cHRNNmFjSXlwU2JmdmREMGxlcHFsYW4vVEpLS0tsOURPTzBpL045dzFVdEZBbk9BQlJSVm1YUS8vWiI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47403591/love-messages-for-valentines-day-newsletter1704987884.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Love Messages for Valentine's Day Newsletter presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="pFJ0o5kkO64kT3dJF9TZ" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;pFJ0o5kkO64kT3dJF9TZ&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;197385b0&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Marketing&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27852,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;c45d8e958bc787ad004b6ac76350df2740ae3b4453481be1d8a6898d1c9eee69&quot;}}"
    x-data="favorite([])"
    x-init="article = 'love-messages-for-valentines-day-newsletter', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Marketing', '', 'thumbnail', '27852', 'Love Messages for Valentine&#039;s Day Newsletter');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:pFJ0o5kkO64kT3dJF9TZ -->
                    <div x-data="download(
    27852,
    'love-messages-for-valentines-day-newsletter',
    'Love Messages for Valentine\&#039;s Day Newsletter',
    0,
    'Marketing',
    'en',
    'https://slidesgo.com/theme/love-messages-for-valentines-day-newsletter/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:1,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27852.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
    <div class="hidden">
        <svg id="icon-download" alt="Download icon" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>        <svg id="icon-close" alt="close icon" class="fill-current" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg"><path d="M368.7 339.4L35.9 6.6A20.7 20.7 0 006.6 36l332.8 332.8a20.7 20.7 0 1029.3-29.3z"/><path d="M339.4 6.6L6.6 339.4A20.7 20.7 0 1036 368.7L368.7 35.9a20.7 20.7 0 10-29.3-29.3z"/></svg>        <svg id="icon-googleslides" alt="Google Slides" class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.46145 0H17.1277C18.4872 0 19.5893 1.11669 19.5892 2.49414V17.3545C19.5892 18.7318 18.4872 19.8485 17.1277 19.8485H2.46145C1.10209 19.8485 0 18.7319 0 17.3545V2.49403C0 1.11669 1.10199 0 2.46145 0ZM4 5C3.44772 5 3 5.44772 3 6V14.72C3 15.2723 3.44772 15.72 4 15.72H15.85C16.4023 15.72 16.85 15.2723 16.85 14.72V6C16.85 5.44772 16.4023 5 15.85 5H4Z"/>
</svg>        <svg id="icon-powerpoint" alt="PowerPoint" class="fill-current" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.563 9.55439H18.5627C18.4267 11.7273 17.5072 13.7846 15.9649 15.3382C17.4581 13.8342 18.4242 11.8062 18.563 9.55439ZM15.9175 15.3856C14.2304 17.0599 11.9495 18 9.57167 18C12.047 18 14.2892 17.0016 15.9175 15.3856ZM9.57167 18C7.18243 18 4.89104 17.0509 3.20159 15.3614C2.96626 15.1261 2.74529 14.8791 2.53926 14.6218H2.53887C4.18985 16.6813 6.72676 18 9.57167 18ZM2.53887 3.36094H2.53929C2.73717 3.11378 2.9483 2.87679 3.17195 2.65104C2.94878 2.87629 2.73742 3.11326 2.53887 3.36094ZM4.05502 3.36094H9.00863V1.12891C8.16621 1.18923 7.33769 1.38466 6.55514 1.7088C5.62356 2.09467 4.7749 2.6556 4.05502 3.36094ZM10.1347 1.12891V4.05438L10.1347 4.06094V8.4283L17.4341 8.4283C17.3738 7.58588 17.1784 6.75736 16.8542 5.97481C16.4581 5.01846 15.8775 4.14949 15.1455 3.41752C14.4135 2.68556 13.5446 2.10493 12.5882 1.7088C11.8057 1.38466 10.9771 1.18923 10.1347 1.12891ZM17.4341 9.55439L10.1347 9.55439V13.9218C10.1347 14.3084 9.82134 14.6218 9.43474 14.6218H4.05502C5.52759 16.0646 7.50791 16.8739 9.57167 16.8739C11.6623 16.8739 13.6672 16.0434 15.1455 14.5652C16.4905 13.2202 17.2992 11.4392 17.4341 9.55439ZM18.563 8.42831C18.424 6.17457 17.4564 4.14504 15.9611 2.64065C16.7885 3.47312 17.4453 4.45933 17.8946 5.54388C18.2753 6.46311 18.5007 7.43785 18.5627 8.42831H18.563ZM15.9273 2.60683C14.4224 1.10871 12.3909 0.139132 10.1347 0V0.000302682C11.1252 0.0623264 12.0999 0.287675 13.0191 0.668433C14.1058 1.11855 15.0938 1.7771 15.9273 2.60683ZM9.00863 0C6.7603 0.138647 4.73511 1.10196 3.23181 2.59119C4.062 1.76882 5.04436 1.11572 6.12421 0.668433C7.04344 0.287674 8.01818 0.0623263 9.00863 0.000302659V0ZM0.750533 4.48702H8.25812C8.45717 4.48702 8.64808 4.56609 8.78883 4.70684C8.92958 4.84759 9.00865 5.0385 9.00865 5.23755V12.7451C9.00865 12.9442 8.92958 13.1351 8.78883 13.2758C8.64808 13.4166 8.45717 13.4957 8.25812 13.4957H0.750533C0.55148 13.4957 0.360578 13.4166 0.219826 13.2758C0.0790738 13.1351 0 12.9442 0 12.7451V5.23755C0 5.0385 0.0790738 4.84759 0.219826 4.70684C0.360578 4.56609 0.55148 4.48702 0.750533 4.48702ZM4.50253 6.17605C5.05694 6.13873 5.60661 6.29934 6.0537 6.6293C6.23707 6.79293 6.38082 6.99612 6.47407 7.2235C6.56733 7.45088 6.60764 7.69649 6.59196 7.94175C6.59811 8.2602 6.50504 8.57268 6.32564 8.83586C6.14304 9.12674 5.88026 9.35863 5.56892 9.50363C5.21297 9.66889 4.82394 9.75055 4.43158 9.74236H3.35618V11.8065H2.25206V6.17605H4.50253ZM3.35562 8.81277H4.30546C4.60662 8.83492 4.90547 8.74599 5.14552 8.56279C5.2409 8.50142 5.31773 8.4152 5.36773 8.31341C5.41774 8.21161 5.43902 8.0981 5.42929 7.98511C5.42929 7.36238 5.0665 7.05102 4.34093 7.05102H3.35562V8.81277Z"/>
</svg>        <svg id="icon-pdf" alt="PDF" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.321 10.355c.001.345.28.623.625.623 0 0 1.072 0 1.486-.011 1.532-.027 2.632-1.358 2.632-3.166 0-1.9-1.08-3.178-2.686-3.178H9.935a.627.627 0 0 0-.625.627l.011 5.105Zm2.061-4.483c1.06 0 1.436 1 1.436 1.929 0 .928-.434 1.9-1.405 1.916-.2 0-.538.006-.844.009l-.005-3.853h.818ZM4.121 5.168v5.262a.625.625 0 0 0 1.25 0V8.767h.84a2.11 2.11 0 1 0 0-4.22l-.006-.004H4.74a.644.644 0 0 0-.443.193.642.642 0 0 0-.176.432Zm2.084 2.345h-.832l-.006-1.72h.838a.86.86 0 1 1 0 1.72Z"/><path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.967 4.967 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.122c-.402.401-.91.679-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464l-2.66 2.658Z"/><path d="M16.354 8.603v1.8a.625.625 0 1 1-1.25 0V5.59a.625.625 0 0 1 .625-.625h2.012a.625.625 0 0 1 0 1.25h-1.387v1.138h1.239a.625.625 0 0 1 0 1.25h-1.24Z"/><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>    </div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/love-messages-for-valentines-day-newsletter#position-1&amp;rs=home-latest&amp;rs=home-latest"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Love Messages for Valentine&#039;s Day Newsletter
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Love Messages for Valentine&#039;s Day Newsletter presentation for PowerPoint or Google Slides. Attention all marketers! Are you looking for a way to make your newsletters more creative and eye-catching for your target audience? This amazing template is perfect for creating the perfect newsletter that will capture your audience&#039;s...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/marketing"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#marketing"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Marketing</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
<div class="hidden">
    <svg class="h-3 w-3 text-gray-200 fill-current" id="powerpoint" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.563 9.55439H18.5627C18.4267 11.7273 17.5072 13.7846 15.9649 15.3382C17.4581 13.8342 18.4242 11.8062 18.563 9.55439ZM15.9175 15.3856C14.2304 17.0599 11.9495 18 9.57167 18C12.047 18 14.2892 17.0016 15.9175 15.3856ZM9.57167 18C7.18243 18 4.89104 17.0509 3.20159 15.3614C2.96626 15.1261 2.74529 14.8791 2.53926 14.6218H2.53887C4.18985 16.6813 6.72676 18 9.57167 18ZM2.53887 3.36094H2.53929C2.73717 3.11378 2.9483 2.87679 3.17195 2.65104C2.94878 2.87629 2.73742 3.11326 2.53887 3.36094ZM4.05502 3.36094H9.00863V1.12891C8.16621 1.18923 7.33769 1.38466 6.55514 1.7088C5.62356 2.09467 4.7749 2.6556 4.05502 3.36094ZM10.1347 1.12891V4.05438L10.1347 4.06094V8.4283L17.4341 8.4283C17.3738 7.58588 17.1784 6.75736 16.8542 5.97481C16.4581 5.01846 15.8775 4.14949 15.1455 3.41752C14.4135 2.68556 13.5446 2.10493 12.5882 1.7088C11.8057 1.38466 10.9771 1.18923 10.1347 1.12891ZM17.4341 9.55439L10.1347 9.55439V13.9218C10.1347 14.3084 9.82134 14.6218 9.43474 14.6218H4.05502C5.52759 16.0646 7.50791 16.8739 9.57167 16.8739C11.6623 16.8739 13.6672 16.0434 15.1455 14.5652C16.4905 13.2202 17.2992 11.4392 17.4341 9.55439ZM18.563 8.42831C18.424 6.17457 17.4564 4.14504 15.9611 2.64065C16.7885 3.47312 17.4453 4.45933 17.8946 5.54388C18.2753 6.46311 18.5007 7.43785 18.5627 8.42831H18.563ZM15.9273 2.60683C14.4224 1.10871 12.3909 0.139132 10.1347 0V0.000302682C11.1252 0.0623264 12.0999 0.287675 13.0191 0.668433C14.1058 1.11855 15.0938 1.7771 15.9273 2.60683ZM9.00863 0C6.7603 0.138647 4.73511 1.10196 3.23181 2.59119C4.062 1.76882 5.04436 1.11572 6.12421 0.668433C7.04344 0.287674 8.01818 0.0623263 9.00863 0.000302659V0ZM0.750533 4.48702H8.25812C8.45717 4.48702 8.64808 4.56609 8.78883 4.70684C8.92958 4.84759 9.00865 5.0385 9.00865 5.23755V12.7451C9.00865 12.9442 8.92958 13.1351 8.78883 13.2758C8.64808 13.4166 8.45717 13.4957 8.25812 13.4957H0.750533C0.55148 13.4957 0.360578 13.4166 0.219826 13.2758C0.0790738 13.1351 0 12.9442 0 12.7451V5.23755C0 5.0385 0.0790738 4.84759 0.219826 4.70684C0.360578 4.56609 0.55148 4.48702 0.750533 4.48702ZM4.50253 6.17605C5.05694 6.13873 5.60661 6.29934 6.0537 6.6293C6.23707 6.79293 6.38082 6.99612 6.47407 7.2235C6.56733 7.45088 6.60764 7.69649 6.59196 7.94175C6.59811 8.2602 6.50504 8.57268 6.32564 8.83586C6.14304 9.12674 5.88026 9.35863 5.56892 9.50363C5.21297 9.66889 4.82394 9.75055 4.43158 9.74236H3.35618V11.8065H2.25206V6.17605H4.50253ZM3.35562 8.81277H4.30546C4.60662 8.83492 4.90547 8.74599 5.14552 8.56279C5.2409 8.50142 5.31773 8.4152 5.36773 8.31341C5.41774 8.21161 5.43902 8.0981 5.42929 7.98511C5.42929 7.36238 5.0665 7.05102 4.34093 7.05102H3.35562V8.81277Z"/>
</svg>

    <svg class="h-3 w-3 fill-current" id="infographics" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.7013 24H3.37662C1.51475 24 0 22.4852 0 20.6234V1.2987C0 0.581455 0.581455 0 1.2987 0C2.01595 0 2.5974 0.581455 2.5974 1.2987V20.6234C2.5974 21.053 2.94696 21.4026 3.37662 21.4026H22.7013C23.4185 21.4026 24 21.9841 24 22.7013C24 23.4185 23.4185 24 22.7013 24ZM5.97401 19.3247C5.25676 19.3247 4.67531 18.7432 4.67531 18.026V12C4.67531 11.2828 5.25676 10.7013 5.97401 10.7013C6.69126 10.7013 7.27271 11.2828 7.27271 12V18.026C7.27271 18.7432 6.69126 19.3247 5.97401 19.3247ZM9.35062 18.026C9.35062 18.7432 9.93207 19.3247 10.6493 19.3247C11.3666 19.3247 11.948 18.7432 11.948 18.026V5.97403C11.948 5.25678 11.3666 4.67533 10.6493 4.67533C9.93207 4.67533 9.35062 5.25678 9.35062 5.97403V18.026ZM15.3247 19.3247C14.6075 19.3247 14.026 18.7432 14.026 18.026V12C14.026 11.2828 14.6075 10.7013 15.3247 10.7013C16.042 10.7013 16.6234 11.2828 16.6234 12V18.026C16.6234 18.7432 16.042 19.3247 15.3247 19.3247ZM18.7013 18.026C18.7013 18.7432 19.2828 19.3247 20 19.3247C20.7173 19.3247 21.2987 18.7432 21.2987 18.026V5.97403C21.2987 5.25678 20.7173 4.67533 20 4.67533C19.2828 4.67533 18.7013 5.25678 18.7013 5.97403V18.026Z"/>
</svg>

    <svg class="h-3 w-3 fill-current" id="slidesclass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><path d="M32.166 7.627 21.413 2.504a7.621 7.621 0 0 0-7.705-.066L2.833 7.627a5.383 5.383 0 0 0 0 9.48l3 1.428v7.146a7.302 7.302 0 0 0 5.132 6.968c2.123.614 4.325.915 6.535.892 2.21.025 4.411-.273 6.535-.885a7.302 7.302 0 0 0 5.132-6.968v-7.156l2.916-1.394v12.028a1.458 1.458 0 0 0 2.917 0v-17.5c.01-1.712-1.343-3.294-2.834-4.04ZM26.25 25.688a4.375 4.375 0 0 1-3.063 4.175 19.823 19.823 0 0 1-5.687.762 19.823 19.823 0 0 1-5.688-.762 4.375 4.375 0 0 1-3.062-4.175v-5.763l4.837 2.304a7.688 7.688 0 0 0 3.945 1.078c1.321.01 2.62-.34 3.758-1.012l4.96-2.37v5.763Zm4.666-11.214-10.998 5.25a4.804 4.804 0 0 1-4.944-.066L4.213 14.54a2.467 2.467 0 0 1-.054-4.313l10.93-5.221a4.812 4.812 0 0 1 4.944.065l10.754 5.123a2.52 2.52 0 0 1 1.296 2.174 2.479 2.479 0 0 1-1.166 2.107Z"/></svg>

    <svg class="h-3 w-3 fill-current" id="coloring-page" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M33.688 1.312a4.578 4.578 0 0 0-6.315 0L11.029 17.645a8.095 8.095 0 0 0-1.543-.145 7.958 7.958 0 0 0-5.665 2.346C1.849 21.82.458 27.113.045 29.987a4.375 4.375 0 0 0 4.97 4.967c2.875-.412 8.167-1.804 10.141-3.775a8.013 8.013 0 0 0 2.188-7.206L33.687 7.627a4.474 4.474 0 0 0 0-6.315ZM13.09 29.117c-1.057 1.057-5.104 2.463-8.493 2.95a1.48 1.48 0 0 1-1.253-.413 1.459 1.459 0 0 1-.41-1.253c.485-3.387 1.895-7.437 2.948-8.493a5.104 5.104 0 0 1 7.208 7.209ZM31.628 5.565 16.14 21.055a7.842 7.842 0 0 0-2.187-2.2L29.435 3.372a1.584 1.584 0 0 1 2.188 0 1.55 1.55 0 0 1 .005 2.194Z" /><defs><clipPath id="a"><path d="M0 0h35v35H0z"/></clipPath></defs></svg>

    <svg class="h-3 w-3 fill-current" id="marketing" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M2.504 21.438 8.531 35h3.582a4.014 4.014 0 0 0 3.666-5.64l-3.326-7.485h3.589a7.3 7.3 0 0 1 7.291 7.292h2.917V0h-2.917a7.3 7.3 0 0 1-7.291 7.292H4.375A4.375 4.375 0 0 0 0 11.667V17.5a4.375 4.375 0 0 0 2.504 3.938Zm10.61 9.104a1.095 1.095 0 0 1-1.001 1.541h-1.686L5.89 21.875h3.37l3.853 8.667ZM2.916 11.667a1.458 1.458 0 0 1 1.458-1.459h11.667a10.167 10.167 0 0 0 7.291-3.078v14.907a10.168 10.168 0 0 0-7.291-3.079H4.375A1.458 1.458 0 0 1 2.917 17.5v-5.833ZM32.51 22.906l-3.337-3.337 2.062-2.062 3.337 3.337-2.062 2.062Zm-1.22-11.302L29.23 9.542l3.282-3.281 2.062 2.062-3.282 3.281Zm-.666 1.521H35v2.917h-4.375v-2.917Z" /><clipPath id="a"><path d="M0 0h35v35H0z"/></clipPath></svg>

    <svg class="h-3 w-3 fill-current" id="multi-purpose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><path d="M27.708 0h-8.75a7.3 7.3 0 0 0-7.291 7.292v.146a7.305 7.305 0 0 0-5.834 7.145v.146A7.305 7.305 0 0 0 0 21.875v5.833A7.3 7.3 0 0 0 7.292 35h8.75a7.3 7.3 0 0 0 7.291-7.292v-.145a7.305 7.305 0 0 0 5.834-7.146v-.146A7.305 7.305 0 0 0 35 13.125V7.292A7.3 7.3 0 0 0 27.708 0ZM2.917 21.875A4.375 4.375 0 0 1 7.292 17.5h8.75a4.358 4.358 0 0 1 3.847 2.333l-5.039 5.05-.692-.698a2.905 2.905 0 0 0-3.95-.162L3.47 29.798a4.316 4.316 0 0 1-.552-2.09v-5.833Zm17.5 5.833a4.375 4.375 0 0 1-4.375 4.375h-8.75a4.331 4.331 0 0 1-1.63-.322l6.425-5.511.694.701a2.917 2.917 0 0 0 4.124 0l3.512-3.518v4.275Zm5.833-7.291a4.375 4.375 0 0 1-2.917 4.106v-2.648a7.3 7.3 0 0 0-7.291-7.292H8.75a4.375 4.375 0 0 1 4.375-4.375h8.75a4.375 4.375 0 0 1 4.375 4.375v5.834Zm5.833-7.292a4.375 4.375 0 0 1-2.916 4.107v-2.649a7.3 7.3 0 0 0-7.292-7.291h-7.292a4.375 4.375 0 0 1 4.375-4.375h8.75a4.375 4.375 0 0 1 4.375 4.375v5.833Zm-26.25 8.75a1.458 1.458 0 1 1 2.917 0 1.458 1.458 0 0 1-2.917 0Z"/></svg>

    <svg class="h-3 w-3 fill-current" id="medical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><path d="M27.708 7.291h-4.375V5.833a4.375 4.375 0 0 0-4.375-4.375h-2.916a4.375 4.375 0 0 0-4.375 4.375v1.458H7.292A7.3 7.3 0 0 0 0 14.583V26.25a7.3 7.3 0 0 0 7.292 7.291h20.416A7.3 7.3 0 0 0 35 26.25V14.583a7.3 7.3 0 0 0-7.292-7.292ZM14.583 5.833a1.458 1.458 0 0 1 1.459-1.458h2.916a1.458 1.458 0 0 1 1.459 1.458v1.458h-5.834V5.833Zm17.5 20.417a4.375 4.375 0 0 1-4.375 4.375H7.292a4.375 4.375 0 0 1-4.375-4.375V14.583a4.375 4.375 0 0 1 4.375-4.375h20.416a4.375 4.375 0 0 1 4.375 4.375V26.25Zm-8.75-5.834a1.458 1.458 0 0 1-1.458 1.459h-2.917v2.916a1.458 1.458 0 1 1-2.916 0v-2.916h-2.917a1.458 1.458 0 1 1 0-2.917h2.917v-2.917a1.458 1.458 0 1 1 2.916 0v2.917h2.917a1.458 1.458 0 0 1 1.458 1.458Z" /><clipPath id="a"><path d="M0 0h35v35H0z"/></clipPath></svg>

    <svg class="h-3 w-3 fill-current" id="education" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1853 0H4.039C2.69412 0 1.59998 1.09415 1.59998 2.43902V13.561C1.59998 14.9059 2.69412 16 4.039 16H14.1853C14.6344 16 14.9984 15.636 14.9984 15.187V0.813008C14.9984 0.363968 14.6344 0 14.1853 0ZM13.3723 11.1219H6.15283V1.626H13.3723V11.1219ZM4.03899 1.626H4.52679V11.1219H4.03899C3.75398 11.1219 3.48045 11.1715 3.22598 11.2618V2.43901C3.22598 1.99071 3.5907 1.626 4.03899 1.626ZM4.03899 14.374C3.5907 14.374 3.22598 14.0093 3.22598 13.561C3.22598 13.1127 3.5907 12.748 4.03899 12.748H13.3723V14.374H4.03899Z"/>
</svg>

    <svg class="h-3 w-3 fill-current" id="business" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 3.16667H11.9333C11.7786 2.41428 11.3692 1.73823 10.7742 1.25248C10.1791 0.766727 9.4348 0.50097 8.66667 0.5L7.33333 0.5C6.5652 0.50097 5.82088 0.766727 5.22583 1.25248C4.63079 1.73823 4.2214 2.41428 4.06667 3.16667H3.33333C2.4496 3.16773 1.60237 3.51925 0.97748 4.14415C0.352588 4.76904 0.00105857 5.61627 0 6.5L0 13.1667C0.00105857 14.0504 0.352588 14.8976 0.97748 15.5225C1.60237 16.1474 2.4496 16.4989 3.33333 16.5H12.6667C13.5504 16.4989 14.3976 16.1474 15.0225 15.5225C15.6474 14.8976 15.9989 14.0504 16 13.1667V6.5C15.9989 5.61627 15.6474 4.76904 15.0225 4.14415C14.3976 3.51925 13.5504 3.16773 12.6667 3.16667ZM7.33333 1.83333H8.66667C9.07884 1.83504 9.48042 1.96406 9.81647 2.20273C10.1525 2.44139 10.4066 2.77806 10.544 3.16667H5.456C5.59339 2.77806 5.84749 2.44139 6.18353 2.20273C6.51958 1.96406 6.92116 1.83504 7.33333 1.83333ZM3.33333 4.5H12.6667C13.1971 4.5 13.7058 4.71071 14.0809 5.08579C14.456 5.46086 14.6667 5.96957 14.6667 6.5V8.5H1.33333V6.5C1.33333 5.96957 1.54405 5.46086 1.91912 5.08579C2.29419 4.71071 2.8029 4.5 3.33333 4.5ZM12.6667 15.1667H3.33333C2.8029 15.1667 2.29419 14.956 1.91912 14.5809C1.54405 14.2058 1.33333 13.6971 1.33333 13.1667V9.83333H7.33333V10.5C7.33333 10.6768 7.40357 10.8464 7.5286 10.9714C7.65362 11.0964 7.82319 11.1667 8 11.1667C8.17681 11.1667 8.34638 11.0964 8.47141 10.9714C8.59643 10.8464 8.66667 10.6768 8.66667 10.5V9.83333H14.6667V13.1667C14.6667 13.6971 14.456 14.2058 14.0809 14.5809C13.7058 14.956 13.1971 15.1667 12.6667 15.1667Z"/>
</svg>

    <svg class="h-3 w-3 fill-current" id="multilingual" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs/><path fill-rule="evenodd" d="M13.7 2.3a8 8 0 00-11.4 0 8 8 0 000 11.4 8 8 0 0011.4 0 8 8 0 000-11.4zm.7 5.7c0 1.4-.4 2.8-1.2 3.8l-.7-.4a.8.8 0 00-.4-.1h-1.8v-1c0-1.1-.9-2-2-2H5.7V6h.9c.4 0 .7-.4.7-.8V3.8h2A2 2 0 0011 2.4c2 1 3.3 3.2 3.3 5.6zM1.6 8l.1-1.4 3.8 3.9v1c0 .5.4.8.8.8H8v2.1c-3.5 0-6.3-2.9-6.3-6.4z" clip-rule="evenodd"/></svg>

</div>
                                    <div class="theme_post"
     data-id="27390"
     data-slug="beautiful-hearts-and-love"
          @toggle-fav-27390.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'beautiful-hearts-and-love', [&quot;https:\/\/media.slidesgo.com\/storage\/47439925\/conversions\/0-beautiful-hearts-and-love-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47439931\/conversions\/1-beautiful-hearts-and-love-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/beautiful-hearts-and-love#position-2&amp;rs=home-latest"
                   x-on:click='handleEvents("27390",
                    "Beautiful Hearts and Love",
                    "Multi-purpose",
                    "premium",
                    "https://slidesgo.com/theme/beautiful-hearts-and-love#position-2&amp;rs=home-latest&amp;rs=home-latest",
                    "home-latest")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Beautiful Hearts and Love presentation template " loading="eager" decoding="sync"  srcset="https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47440418/responsive-images/beautiful-hearts-and-love1705061769___media_library_original_548_308.jpg 548w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErZ1BneDRNdHJEd3I1anA1cmptdXlQaUdIUkhHMjJLR3Ryd25vY2ZoeTFGbUR1cXpxZmg2TFVKTXNncnlJUlVVa2ZwT0pyeXJWWlRiM00rMjhhdGM0MlFscytsYXQ5cjhPbldLM1YwM2xKam5OVkxYVExYUm0zT1ZRZjdWZWY4QXh5OFcyTnY0Y01TeUJzLzNEVG5MbFRaR0hvT3RVakJMYzliQUgybk9PMVd3T0tLS3RIS3p6VDR1U3ZIWUhZN0x4Mk9LK2ZQRWtqVGFXM21NWk9mNGptaWl2UHI3bjIyVC9CRS8vOWs9Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47440418/beautiful-hearts-and-love1705061769.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Beautiful Hearts and Love presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="8uaBvl3fvKuZitEbmFE9" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;8uaBvl3fvKuZitEbmFE9&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;215012ed&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Multi-purpose&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27390,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;fbd0bf9e5bf433e1896679d024e55fec61645218521e3d4981156c88c9a17743&quot;}}"
    x-data="favorite([])"
    x-init="article = 'beautiful-hearts-and-love', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Multi-purpose', 'premium', 'thumbnail', '27390', 'Beautiful Hearts and Love');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:8uaBvl3fvKuZitEbmFE9 -->
                    <div x-data="download(
    27390,
    'beautiful-hearts-and-love',
    'Beautiful Hearts and Love',
    1,
    'Multi-purpose',
    'en',
    'https://slidesgo.com/theme/beautiful-hearts-and-love/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:2,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27390.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=beautiful-hearts-and-love&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Beautiful+Hearts+and+Love"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 27390);
                                       gtm.microfunnel('Multi-purpose', 'Go Premium', 'https://slidesgo.com/pricing?slide=beautiful-hearts-and-love&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Beautiful+Hearts+and+Love', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/beautiful-hearts-and-love#position-2&amp;rs=home-latest&amp;rs=home-latest"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Beautiful Hearts and Love
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Beautiful Hearts and Love presentation for PowerPoint or Google Slides and start impressing your audience with a creative and original design. Slidesgo templates like this one here offer the possibility to convey a concept, idea or topic in a clear, concise and visual way, by using different graphic...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/multi-purpose"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#multi-purpose"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Multi-purpose</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="27598"
     data-slug="management-consulting-toolkit-minimalist"
          @toggle-fav-27598.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'management-consulting-toolkit-minimalist', [&quot;https:\/\/media.slidesgo.com\/storage\/47437396\/conversions\/0-management-consulting-toolkit-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47437406\/conversions\/1-management-consulting-toolkit-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/management-consulting-toolkit-minimalist#position-3&amp;rs=home-latest"
                   x-on:click='handleEvents("27598",
                    "Management Consulting Toolkit",
                    "Business",
                    "",
                    "https://slidesgo.com/theme/management-consulting-toolkit-minimalist#position-3&amp;rs=home-latest&amp;rs=home-latest",
                    "home-latest")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Management Consulting Toolkit presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47437699/responsive-images/management-consulting-toolkit1705056715___media_library_original_548_308.jpg 548w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE4dThXV2VqNlo0WVd5dENDNk1DUU8xZmN2N0pmalNMdzM4TWJKU2haU29yNCs4WmFCNFY4T2VLWlB0R3FSelcwcHp0RFpyMFhSdjJydkEzZ3pSWWRJdHlBc0l4a0hyV1ZPbDdHNlR1ZGRXcDdTT3g5MnI4WWJkNUFpeEVtdXE4UGVJMzFvYnZLS0wySnI0SDBIOXVId0pwMjVwMEVqZXBydU5OLzRLUCtCclMwSWpBUUwycXBTVUZkbkk5RDhyL0c5NWNTYWloZWVSajd1VFhJWGNybVVrdXhQdWFLS3Q3bDlDSGUzOTQvblJ2Yis4Znpvb3BNUi8vWiI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47437699/management-consulting-toolkit1705056715.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Management Consulting Toolkit presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="pxpxoFlkdQIV7fwf8K1n" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;pxpxoFlkdQIV7fwf8K1n&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;79a38ebb&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Business&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27598,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;65a05b8977482c6922f7a0e1be75427ca185e07580e842fa0680aa1ae41cfcee&quot;}}"
    x-data="favorite([])"
    x-init="article = 'management-consulting-toolkit-minimalist', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Business', '', 'thumbnail', '27598', 'Management Consulting Toolkit');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:pxpxoFlkdQIV7fwf8K1n -->
                    <div x-data="download(
    27598,
    'management-consulting-toolkit-minimalist',
    'Management Consulting Toolkit',
    0,
    'Business',
    'en',
    'https://slidesgo.com/theme/management-consulting-toolkit-minimalist/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:3,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27598.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/management-consulting-toolkit-minimalist#position-3&amp;rs=home-latest&amp;rs=home-latest"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Management Consulting Toolkit
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Management Consulting Toolkit presentation for PowerPoint or Google Slides. Your business demands smart solutions, and this consulting toolkit template is just that! This versatile and ingenious toolkit will provide you with the essential tools you need to shape your strategies and make informed decisions. Whether you are devising...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/business"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#business"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Business</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="27463"
     data-slug="financial-markets-consulting-services-infographics"
          @toggle-fav-27463.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'financial-markets-consulting-services-infographics', [&quot;https:\/\/media.slidesgo.com\/storage\/47403133\/conversions\/0-financial-markets-consulting-services-infographics-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47403136\/conversions\/1-financial-markets-consulting-services-infographics-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/financial-markets-consulting-services-infographics#position-4&amp;rs=home-latest"
                   x-on:click='handleEvents("27463",
                    "Financial Markets Consulting Services Infographics",
                    "Infographics",
                    "premium",
                    "https://slidesgo.com/theme/financial-markets-consulting-services-infographics#position-4&amp;rs=home-latest&amp;rs=home-latest",
                    "home-latest")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Financial Markets Consulting Services Infographics presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47403400/responsive-images/financial-markets-consulting-services-infographics1704987797___media_library_original_459_258.jpg 459w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE5aytGZncrOE8zWGhpR2U4aURTTlhidy9DN3d2ZEg5MWE3dllWTDhEZEwwUFZQQmNCdXIyT0tRZGkxZXVhRFkrR3RHZmNMNkNUNnNLOUd2T3A3U1ZwTXhveXBxRVU0STg2ZytDZmhhR3pOeGMycFJmZXVIK0wzd3E4TVduZ3VhOTArTGJJdlExN3RyK3ZXVjdPYmFJeHZiZXFtdkp2alRKQTNoV1MxdFpRbWY0YzF5MGNmSkxuYmRrN081VmJES1Rza3J0YUh6UjROdmJpUFRGQ1R5b1BSWElyb1JxTjFuL0FJK1p2Ky9ob29yNmVwOFRQQ2g4S1BVdmg3Y1N5V3dMeXV4OTJKcm52akZLNEtqZTJQclJSWHd0RGZGZXFQcUsyMUQwUC8vWiI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47403400/financial-markets-consulting-services-infographics1704987797.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Financial Markets Consulting Services Infographics presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="vlGmXLtvXHj7ah5g3XWa" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;vlGmXLtvXHj7ah5g3XWa&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;ea1f312e&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Infographics&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27463,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;1949db18ad8adbd5ac7881e24af62daadbad3733fbffe07cf0ba79a58e49737b&quot;}}"
    x-data="favorite([])"
    x-init="article = 'financial-markets-consulting-services-infographics', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Infographics', 'premium', 'thumbnail', '27463', 'Financial Markets Consulting Services Infographics');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:vlGmXLtvXHj7ah5g3XWa -->
                    <div x-data="download(
    27463,
    'financial-markets-consulting-services-infographics',
    'Financial Markets Consulting Services Infographics',
    1,
    'Infographics',
    'en',
    'https://slidesgo.com/theme/financial-markets-consulting-services-infographics/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:4,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27463.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=financial-markets-consulting-services-infographics&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Financial+Markets+Consulting+Services+Infographics"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 27463);
                                       gtm.microfunnel('Infographics', 'Go Premium', 'https://slidesgo.com/pricing?slide=financial-markets-consulting-services-infographics&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Financial+Markets+Consulting+Services+Infographics', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/financial-markets-consulting-services-infographics#position-4&amp;rs=home-latest&amp;rs=home-latest"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Financial Markets Consulting Services Infographics
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Financial Markets Consulting Services Infographics template for PowerPoint or Google Slides and discover the power of infographics. An infographic resource gives you the ability to showcase your content in a more visual way, which will make it easier for your audience to understand your topic. Slidesgo infographics like...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/infographics"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#infographics"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Infographics</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="27633"
     data-slug="debate-and-persuasive-communication-spanish-foreign-language-11th-grade"
          @toggle-fav-27633.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'debate-and-persuasive-communication-spanish-foreign-language-11th-grade', [&quot;https:\/\/media.slidesgo.com\/storage\/47437407\/conversions\/0-debate-and-persuasive-communication-spanish-foreign-language-11th-grade-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47437412\/conversions\/1-debate-and-persuasive-communication-spanish-foreign-language-11th-grade-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/debate-and-persuasive-communication-spanish-foreign-language-11th-grade#position-5&amp;rs=home-latest"
                   x-on:click='handleEvents("27633",
                    "Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade",
                    "Education",
                    "",
                    "https://slidesgo.com/theme/debate-and-persuasive-communication-spanish-foreign-language-11th-grade#position-5&amp;rs=home-latest&amp;rs=home-latest",
                    "home-latest")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47437789/responsive-images/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780___media_library_original_548_308.jpg 548w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErNGZIWGlPLzB2VWRzQklTb3ZDM2pPNmx1Z2Jza0o5SzdIeEI0ZWcxVmdYQTNWU3QvQzBNQ3FxcXVmcFhuWE82ek51WHhCYStTcE1xcVc2QW1vN0c2amFmL1c1SjdWNW40MzBPOVh4RFl5Skt5V3lIbFY3MUxOclUybjZ6YnFoTzBqbXNhbFJRV2g2T0d3a3NUZEk5WWxIelUxUU53NG9vclE0RGwvRndCdUllQjFyZ05lLzVEc0ZGRmVaTDRwZXFQcWNyM1hvei85az0iPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47437789/debate-and-persuasive-communication-spanish-foreign-language-11th-grade1705056780.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="8OTZE0AOcFhpfrbw4hl9" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;8OTZE0AOcFhpfrbw4hl9&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;8681b830&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Education&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27633,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;3fb0b71345ca27ee487dd21121a3b6c103e22ef495962488fdca58c1b1881ef9&quot;}}"
    x-data="favorite([])"
    x-init="article = 'debate-and-persuasive-communication-spanish-foreign-language-11th-grade', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Education', '', 'thumbnail', '27633', 'Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:8OTZE0AOcFhpfrbw4hl9 -->
                    <div x-data="download(
    27633,
    'debate-and-persuasive-communication-spanish-foreign-language-11th-grade',
    'Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade',
    0,
    'Education',
    'en',
    'https://slidesgo.com/theme/debate-and-persuasive-communication-spanish-foreign-language-11th-grade/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:5,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27633.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/debate-and-persuasive-communication-spanish-foreign-language-11th-grade#position-5&amp;rs=home-latest&amp;rs=home-latest"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Debate and Persuasive Communication - Spanish - Foreign Language - 11th Grade presentation for PowerPoint or Google Slides. As university curricula increasingly incorporate digital tools and platforms, this template has been designed to integrate with presentation software, online learning management systems, or referencing software, enhancing the overall efficiency...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/education"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#education"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Education</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="27597"
     data-slug="hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade"
          @toggle-fav-27597.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade', [&quot;https:\/\/media.slidesgo.com\/storage\/47403183\/conversions\/0-hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47403192\/conversions\/1-hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade#position-6&amp;rs=home-latest"
                   x-on:click='handleEvents("27597",
                    "Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade",
                    "Education",
                    "",
                    "https://slidesgo.com/theme/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade#position-6&amp;rs=home-latest&amp;rs=home-latest",
                    "home-latest")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47403739/responsive-images/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974___media_library_original_459_258.jpg 459w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEvU0tDOWdiZTZ1RGpyelhHZUkvaU1MQzVhS0FCd09EV2Y0SjBqVTNlNVM1a2ZZZUJtckZ6OE8vTW1rWm1MRW5xYTZvU2xhOGxxWnlpcjJpeXhvM2o5TlZIa1RFUk0zQXJTdWJDT0lCNTU4cWVSWFBXbnc0TVYwa2djZ3FjMTBtcDZKSmRMRkNXSVZSMXJPcnpTajdpMUNDVVpKeVp0NllvQ25BQXE2NDRORkZibVlpajVhaHVlMUZGTHFQb2YvL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47403739/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade1704987974.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="PMEnKct2ax5bK029C9a9" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;PMEnKct2ax5bK029C9a9&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;cd17dba6&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Education&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27597,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;da82551294580d50f26dd1d4a573eff90d632860b9bd5a6dd229731d6673de95&quot;}}"
    x-data="favorite([])"
    x-init="article = 'hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Education', '', 'thumbnail', '27597', 'Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:PMEnKct2ax5bK029C9a9 -->
                    <div x-data="download(
    27597,
    'hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade',
    'Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade',
    0,
    'Education',
    'en',
    'https://slidesgo.com/theme/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:6,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27597.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/hobbies-interests-and-leisure-activities-german-foreign-language-6th-grade#position-6&amp;rs=home-latest&amp;rs=home-latest"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Hobbies, Interests, and Leisure Activities - German - Foreign Language - 6th Grade presentation for PowerPoint or Google Slides. If you’re looking for a way to motivate and engage students who are undergoing significant physical, social, and emotional development, then you can’t go wrong with an educational template...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/education"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#education"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Education</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                            </div>
            <div class="text-center mt-8">
                <a
                    href="https://slidesgo.com/recent"
                    data-cy="see-more-recent"
                    class="inline-block rounded px-6 py-3 text-lg text-white font-bold bg-gray-900 hover:bg-gray-800 active:bg-gray-700"
                >
                    See more                </a>
            </div>
            <hr class="border-t border-gray-200 my-14">
        </div>

        <div class="container mx-auto px-4 pb-8 sm:pb-10 below-the-fold">
            <h3 class="text-gray-900 text-5xl font-title font-bold mb-6">
                Popular themes            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div class="theme_post"
     data-id="5600"
     data-slug="minimalist-business-slides"
          @toggle-fav-5600.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'minimalist-business-slides', [&quot;https:\/\/media.slidesgo.com\/storage\/39117287\/conversions\/0-minimalist-business-slides-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/39117292\/conversions\/1-minimalist-business-slides-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/minimalist-business-slides#position-1&amp;rs=home-popular"
                   x-on:click='handleEvents("5600",
                    "Minimalist Business Slides",
                    "Business",
                    "",
                    "https://slidesgo.com/theme/minimalist-business-slides#position-1&amp;rs=home-popular&amp;rs=home-popular",
                    "home-popular")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Minimalist Business Slides presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/39117931/responsive-images/minimalist-business-slides1691669242___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/39117931/responsive-images/minimalist-business-slides1691669242___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/39117931/responsive-images/minimalist-business-slides1691669242___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/39117931/responsive-images/minimalist-business-slides1691669242___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/39117931/responsive-images/minimalist-business-slides1691669242___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/39117931/responsive-images/minimalist-business-slides1691669242___media_library_original_655_368.jpg 655w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEvUnVTMGpSUzhtQUJYT1huakd6c2Jrd2xDY2R4WFM2dGFEVUxZeHErd251SzQ2WHdDMGt1NXBpeDk2NXpVdTJualN5dXJwWVFwQlByWFZSUVJTcUdYQkJyaHY4QWhYMytrSklzcFVnOXE3S3dRV0Z1c1pmZVFLQUlkeDlUUnVQcWFLS0FFWmp0UEpxdEd4TXA1TkZGQUgvLzJRPT0iPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/39117931/minimalist-business-slides1691669242.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Minimalist Business Slides presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="IzR0OPGNz1m0VMhNu15W" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;IzR0OPGNz1m0VMhNu15W&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;1d94f1fc&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Business&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:5600,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;d5a1201abb22f4496a90b2835efcd4ae9b8c6ec317bad03749e0cc7b94a028ee&quot;}}"
    x-data="favorite([])"
    x-init="article = 'minimalist-business-slides', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Business', '', 'thumbnail', '5600', 'Minimalist Business Slides');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:IzR0OPGNz1m0VMhNu15W -->
                    <div x-data="download(
    5600,
    'minimalist-business-slides',
    'Minimalist Business Slides',
    0,
    'Business',
    'en',
    'https://slidesgo.com/theme/minimalist-business-slides/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:1,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-5600.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
                    <div x-data="{
        variantId: null,
        availableVariants: []
    }"
     @slide-color-change-5600.window="variantId = $event.detail.variantId"
>
    <template x-if="!variantId || (variantId && availableVariants.includes(variantId))">
                    <button
                type="button"
                                    @click="$dispatch('download-editable-guest-modal')"
                                data-cy="edit-online"
                class="tooltip-group w-7 h-7 rounded text-gray-800 bg-gray-50 flex items-center justify-center hover:bg-gray-100 relative order-last sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1"
            >
                <svg class="h-4 w-4 shrink-0 fill-current" width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3276 0.483897C17.0206 0.231795 16.6371 0.0913809 16.2398 0.085633C15.8426 0.079885 15.4551 0.209144 15.1409 0.452256C13.7206 1.52452 12.0718 3.0714 10.4968 4.80461C9.09756 6.34094 7.89171 7.87375 7.05499 9.17102H6.93194C5.65225 9.17102 4.56592 9.68782 3.69757 10.7038C3.01553 11.5019 2.58663 12.4792 2.27374 13.1929C2.14014 13.4952 2.0171 13.78 1.91514 13.9452C1.26124 15.0421 0.698737 15.2847 0.642487 15.3058C0.476227 15.3532 0.32755 15.4484 0.214919 15.5795C0.102288 15.7107 0.0306654 15.872 0.0089455 16.0436C-0.0127744 16.2151 0.0163652 16.3892 0.0927456 16.5443C0.169126 16.6994 0.289382 16.8286 0.438581 16.916C0.522956 16.9617 2.50928 18.0867 5.87022 18.0867H6.57335C7.74757 18.0867 8.94639 17.6261 9.86397 16.821C10.8483 15.9562 11.3898 14.8206 11.3898 13.6288C11.3892 13.3337 11.3598 13.0393 11.3019 12.7499C13.7276 9.82493 16.4874 5.54992 17.8339 2.61085C18.1784 1.85851 17.9745 1.00421 17.3276 0.483897ZM8.70382 15.4992C8.10264 16.0265 7.32569 16.3288 6.57335 16.3288H5.87022C4.52374 16.3288 3.43741 16.1214 2.66397 15.9034C2.95004 15.576 3.20541 15.2229 3.42686 14.8488C3.58155 14.5886 3.72217 14.2687 3.88389 13.896C4.59757 12.2718 5.31827 10.9288 6.93194 10.9288C7.64774 10.9298 8.33395 11.2145 8.8401 11.7207C9.34625 12.2268 9.63101 12.913 9.63194 13.6288C9.63194 14.3074 9.30147 14.9718 8.70382 15.4992ZM8.87257 9.61399C9.196 9.14289 9.56514 8.64719 9.96241 8.14094C10.3161 8.22782 10.6485 8.38535 10.9398 8.60407C11.231 8.82278 11.4749 9.09814 11.6569 9.4136C11.2667 9.95149 10.8765 10.4683 10.4968 10.9534C10.0684 10.3853 9.5119 9.92633 8.87257 9.61399ZM16.2343 1.8796C15.4608 3.5671 14.153 5.78547 12.7257 7.89133C12.2967 7.38486 11.7613 6.97914 11.1577 6.70305C12.7573 4.86437 14.6171 3.05382 16.1991 1.85499L16.2132 1.84445C16.2239 1.84942 16.2335 1.85661 16.2413 1.86554C16.2378 1.86906 16.2378 1.87257 16.2343 1.8796Z"/>
                </svg>
                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg whitespace-nowrap text-sm">
                    Edit online                    <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
            </template>
</div>

        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                                    <div class="flex absolute left-0 bottom-0 w-full z-10 -mb-3 justify-center preview-variant-selector transition-opacity duration-300 pointer-events-auto">
                                                    <div
                                x-on:click="changeVariant(0, 'Minimalist Business Slides'),
                                $dispatch('slide-color-change-5600', {'variantId': ''})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 0) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Cream"
                                      style="background: #f5f2ee"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(1607, 'Minimalist Business Slides'),
                                $dispatch('slide-color-change-5600', {'variantId': '1607'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 1607) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Blue"
                                      style="background: #e3e7f0"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(1608, 'Minimalist Business Slides'),
                                $dispatch('slide-color-change-5600', {'variantId': '1608'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 1608) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Purple"
                                      style="background: #e9e0f0"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(1609, 'Minimalist Business Slides'),
                                $dispatch('slide-color-change-5600', {'variantId': '1609'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 1609) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Green"
                                      style="background: #e3f1e2"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(1610, 'Minimalist Business Slides'),
                                $dispatch('slide-color-change-5600', {'variantId': '1610'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 1610) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Pink"
                                      style="background: #f3e0ed"></span>
                            </div>
                                            </div>
                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/minimalist-business-slides#position-1&amp;rs=home-popular&amp;rs=home-popular"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Minimalist Business Slides
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Minimalism is an art style that frees the canvas and that lets the content stand out for itself. It’s a way of conveying modernism, simplicity and elegance and can be your best ally in your next presentation. With this new design from Slidesgo, your business presentations will be as professional...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/business"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#business"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Business</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                    <svg class="h-3 w-3 mr-0.5 sm:mr-1 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2224_13585)">
<path d="M11.9992 2.32032C15.1539 2.32032 15.5242 2.33439 16.7711 2.39064C17.9242 2.4422 18.5477 2.63439 18.9648 2.79845C19.518 3.01407 19.9117 3.2672 20.3242 3.6797C20.7367 4.0922 20.9945 4.48595 21.2055 5.03907C21.3648 5.45626 21.5617 6.0797 21.6133 7.23282C21.6695 8.4797 21.6836 8.85001 21.6836 12.0047C21.6836 15.1594 21.6695 15.5297 21.6133 16.7766C21.5617 17.9297 21.3695 18.5531 21.2055 18.9703C20.9898 19.5234 20.7367 19.9172 20.3242 20.3297C19.9117 20.7422 19.518 21 18.9648 21.2109C18.5477 21.3703 17.9242 21.5672 16.7711 21.6188C15.5242 21.675 15.1539 21.6891 11.9992 21.6891C8.84453 21.6891 8.47422 21.675 7.22734 21.6188C6.07422 21.5672 5.45078 21.375 5.03359 21.2109C4.48047 20.9953 4.08672 20.7422 3.67422 20.3297C3.26172 19.9172 3.00391 19.5234 2.79297 18.9703C2.63359 18.5531 2.43672 17.9297 2.38516 16.7766C2.32891 15.5297 2.31484 15.1594 2.31484 12.0047C2.31484 8.85001 2.32891 8.4797 2.38516 7.23282C2.43672 6.0797 2.62891 5.45626 2.79297 5.03907C3.00859 4.48595 3.26172 4.0922 3.67422 3.6797C4.08672 3.2672 4.48047 3.00939 5.03359 2.79845C5.45078 2.63907 6.07422 2.4422 7.22734 2.39064C8.47422 2.3297 8.84453 2.32032 11.9992 2.32032ZM11.9992 0.1922C8.79297 0.1922 8.38985 0.206262 7.12891 0.262512C5.87266 0.318762 5.01484 0.520325 4.26484 0.81095C3.48672 1.11095 2.83047 1.51876 2.17422 2.17501C1.51797 2.83126 1.11484 3.4922 0.810156 4.26564C0.519531 5.01564 0.317969 5.87345 0.261719 7.13439C0.205469 8.39063 0.191406 8.79376 0.191406 12C0.191406 15.2063 0.205469 15.6094 0.261719 16.8703C0.317969 18.1266 0.519531 18.9844 0.810156 19.7391C1.11016 20.5172 1.51797 21.1734 2.17422 21.8297C2.83047 22.4859 3.49141 22.8891 4.26484 23.1938C5.01484 23.4844 5.87266 23.6859 7.13359 23.7422C8.39453 23.7984 8.79297 23.8125 12.0039 23.8125C15.2148 23.8125 15.6133 23.7984 16.8742 23.7422C18.1305 23.6859 18.9883 23.4844 19.743 23.1938C20.5211 22.8938 21.1773 22.4859 21.8336 21.8297C22.4898 21.1734 22.893 20.5125 23.1977 19.7391C23.4883 18.9891 23.6898 18.1313 23.7461 16.8703C23.8023 15.6094 23.8164 15.2109 23.8164 12C23.8164 8.78907 23.8023 8.39064 23.7461 7.1297C23.6898 5.87345 23.4883 5.01564 23.1977 4.26095C22.8977 3.48282 22.4898 2.82657 21.8336 2.17032C21.1773 1.51407 20.5164 1.11095 19.743 0.806262C18.993 0.515637 18.1352 0.314075 16.8742 0.257825C15.6086 0.206262 15.2055 0.1922 11.9992 0.1922Z"/>
<path d="M11.9997 5.93439C8.65283 5.93439 5.93408 8.64845 5.93408 12C5.93408 15.3516 8.65283 18.0656 11.9997 18.0656C15.3466 18.0656 18.0653 15.3469 18.0653 12C18.0653 8.65314 15.3466 5.93439 11.9997 5.93439ZM11.9997 15.9375C9.82471 15.9375 8.06221 14.175 8.06221 12C8.06221 9.82501 9.82471 8.06251 11.9997 8.06251C14.1747 8.06251 15.9372 9.82501 15.9372 12C15.9372 14.175 14.1747 15.9375 11.9997 15.9375Z"/>
<path d="M18.3043 7.11097C19.0861 7.11097 19.7199 6.47718 19.7199 5.69535C19.7199 4.91352 19.0861 4.27972 18.3043 4.27972C17.5225 4.27972 16.8887 4.91352 16.8887 5.69535C16.8887 6.47718 17.5225 7.11097 18.3043 7.11097Z"/>
</g>
<defs>
</defs>
</svg>

                                                Post
                    </span>
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="14240"
     data-slug="winter-party-minitheme"
          @toggle-fav-14240.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'winter-party-minitheme', [&quot;https:\/\/media.slidesgo.com\/storage\/28304272\/conversions\/0-winter-party-minitheme-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/28304275\/conversions\/1-winter-party-minitheme-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/winter-party-minitheme#position-2&amp;rs=home-popular"
                   x-on:click='handleEvents("14240",
                    "Winter Party Minitheme",
                    "Multi-purpose",
                    "premium",
                    "https://slidesgo.com/theme/winter-party-minitheme#position-2&amp;rs=home-popular&amp;rs=home-popular",
                    "home-popular")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Winter Party Minitheme presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/28304397/responsive-images/winter-party-minitheme1669283990___media_library_original_459_258.jpg 459w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE2cncyb3U1MVRkak5lbDJuaGg1TGNZT2NpdVl2ZmgzZitGV0U1NVJlYTN0RThZTUZWR1BJNHI5T1ZWMVkzcE81K1VPa3FVclZWWW9hcjRUa2liZURnam10SFJQaXUvaGFNV3N5N2xYaXJXcjYyczhMRVl5UlhsWGlDTXpUczNxYW1kSDZ4RzFWRjA2MzFhZDZUUG9mNGsvOGdoL3BYaDFnZjlJYi9lb29ya3luNEdkbWIveEVic3Yrb3JrdFgrK2FLSzl2N0o0WFUvL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/28304397/winter-party-minitheme1669283990.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Winter Party Minitheme presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="gFQ7iE2UsVmyjH8wEfdh" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;gFQ7iE2UsVmyjH8wEfdh&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;593c8067&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Multi-purpose&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:14240,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;d414685af76c78efc984101e17e6e4a8a20fc1fb61a0ab58316b2879e5204fe6&quot;}}"
    x-data="favorite([])"
    x-init="article = 'winter-party-minitheme', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Multi-purpose', 'premium', 'thumbnail', '14240', 'Winter Party Minitheme');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:gFQ7iE2UsVmyjH8wEfdh -->
                    <div x-data="download(
    14240,
    'winter-party-minitheme',
    'Winter Party Minitheme',
    1,
    'Multi-purpose',
    'en',
    'https://slidesgo.com/theme/winter-party-minitheme/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:2,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-14240.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=winter-party-minitheme&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Winter+Party+Minitheme"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 14240);
                                       gtm.microfunnel('Multi-purpose', 'Go Premium', 'https://slidesgo.com/pricing?slide=winter-party-minitheme&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Winter+Party+Minitheme', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/winter-party-minitheme#position-2&amp;rs=home-popular&amp;rs=home-popular"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Winter Party Minitheme
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">If you’ve got something to celebrate in Winter, this is the template for you! With beautiful and detailed illustrations of snowflakes over a blue background, it’s the perfect backdrop for information about a party, a celebration or any other good news. The white text completes the overall look. All you...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/multi-purpose"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#multi-purpose"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Multi-purpose</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="271"
     data-slug="papyrus-history-lesson"
          @toggle-fav-271.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'papyrus-history-lesson', [&quot;https:\/\/media.slidesgo.com\/storage\/22539569\/conversions\/0-papyrus-history-lesson-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/22539572\/conversions\/1-papyrus-history-lesson-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/papyrus-history-lesson#position-3&amp;rs=home-popular"
                   x-on:click='handleEvents("271",
                    "Papyrus History Lesson",
                    "Lesson, Education",
                    "",
                    "https://slidesgo.com/theme/papyrus-history-lesson#position-3&amp;rs=home-popular&amp;rs=home-popular",
                    "home-popular")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Papyrus History Lesson presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_459_258.jpg 459w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_384_216.jpg 384w, https://media.slidesgo.com/storage/22539821/responsive-images/papyrus-history-lesson1655999987___media_library_original_321_181.jpg 321w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE5R3Y0ek02d3FEZ25rMXZhVWJmU0kxVmp6N1ZpNlRxZHZkY013eldqSlpKY0FGWHpYeGpXcDlNZEZKcmtIMlZtak9TQjByeDd4dDRzVjd3N28yeUQ2VjZTTEdPQzJMczJNRG1zRFViTFN0UWpaMmhVdU81Rk96WWswbWNEbzBqQzdIekg4NjlMMFZpWWhrazBVVTN1T1JwYXAveDR0WEd5bkVUL0FGb29xbzdrOUQvLzJRPT0iPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/22539821/papyrus-history-lesson1655999987.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Papyrus History Lesson presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="vvg0FCHD5FofU2ifHOW4" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;vvg0FCHD5FofU2ifHOW4&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;174b3456&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Lesson, Education&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:271,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;4629e63be1f2f7d30c1bdfaedaa55b6d5dcf6c3e47316128c01022746010d9d2&quot;}}"
    x-data="favorite([])"
    x-init="article = 'papyrus-history-lesson', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Lesson, Education', '', 'thumbnail', '271', 'Papyrus History Lesson');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:vvg0FCHD5FofU2ifHOW4 -->
                    <div x-data="download(
    271,
    'papyrus-history-lesson',
    'Papyrus History Lesson',
    0,
    'Lesson, Education',
    'en',
    'https://slidesgo.com/theme/papyrus-history-lesson/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:3,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-271.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                                    <div class="flex absolute left-0 bottom-0 w-full z-10 -mb-3 justify-center preview-variant-selector transition-opacity duration-300 pointer-events-auto">
                                                    <div
                                x-on:click="changeVariant(0, 'Papyrus History Lesson'),
                                $dispatch('slide-color-change-271', {'variantId': ''})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 0) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Brown"
                                      style="background: #482400"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(945, 'Papyrus History Lesson'),
                                $dispatch('slide-color-change-271', {'variantId': '945'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 945) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Green"
                                      style="background: #004819"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(946, 'Papyrus History Lesson'),
                                $dispatch('slide-color-change-271', {'variantId': '946'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 946) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Blue"
                                      style="background: #205292"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(947, 'Papyrus History Lesson'),
                                $dispatch('slide-color-change-271', {'variantId': '947'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 947) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Purple"
                                      style="background: #2F185E"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(948, 'Papyrus History Lesson'),
                                $dispatch('slide-color-change-271', {'variantId': '948'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 948) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Orange"
                                      style="background: #A84C05"></span>
                            </div>
                                            </div>
                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/papyrus-history-lesson#position-3&amp;rs=home-popular&amp;rs=home-popular"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Papyrus History Lesson
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">History lessons tend to be boring for students, since they need to remember dates and a bunch of information. Make it entertaining by editing our free presentation template, whose backgrounds based on ancient papyrus rolls take it to the next level.</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/lesson"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#lesson"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Lesson</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="725"
     data-slug="school-assignments"
          @toggle-fav-725.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'school-assignments', [&quot;https:\/\/media.slidesgo.com\/storage\/124631\/conversions\/0-school-assignments-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/124632\/conversions\/1-school-assignments-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/school-assignments#position-4&amp;rs=home-popular"
                   x-on:click='handleEvents("725",
                    "School Assignments",
                    "Multi-purpose, Education, School, Notebook",
                    "premium",
                    "https://slidesgo.com/theme/school-assignments#position-4&amp;rs=home-popular&amp;rs=home-popular",
                    "home-popular")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="School Assignments presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_960_540.jpg 960w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_803_451.jpg 803w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_672_378.jpg 672w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_562_316.jpg 562w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_470_264.jpg 470w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_393_221.jpg 393w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_329_185.jpg 329w, https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_275_154.jpg 275w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgOTYwIDU0MCI+Cgk8aW1hZ2Ugd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQTdRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQnhkV0ZzYVhSNUlEMGdPVEFLLzlzQVF3QURBZ0lEQWdJREF3TURCQU1EQkFVSUJRVUVCQVVLQndjR0NBd0tEQXdMQ2dzTERRNFNFQTBPRVE0TEN4QVdFQkVURkJVVkZRd1BGeGdXRkJnU0ZCVVUvOXNBUXdFREJBUUZCQVVKQlFVSkZBMExEUlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVS84QUFFUWdBRWdBZ0F3RVJBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBKzBicndTMnJhdjhBMmlueUE4a0dsbCtadXBTdTBYbU9GVmFIc3pCOFNmRXE0OE1hbi9ad0htSnQyOFZ4WW5HZS9aSDJ1U2NPUnE0WlZaUFZIaVBpZlhkVW11cnRsQlNDY25OZUZVbkp0bjYvZzhKaDR3Z251anNQaFY4RjlKOFQ2ZWJ1ZWJNaE9XV3VyRFlXRlJYWjh6bi9BQkhpTURVOW5GYUgwZmZYc0NKSmJST0ZtSU9CWHF3akNtdVZINGxERXc5cWxJK2QvRzNoSFdiRy91dFVsQmxpeVNDYThxclNrbTVIN1hsT1o0U3RUalFob3prdkoxSytTSnBMUm1nZHNjQ3VhMG4wUG8zVW9VMjBwYW85ODhGd2FmNFEwaTN6KzVhWmNuZHhYMG1Fb0pSMFB4ck9zVFV4bGRxV3FSWmlZbnhoS0NTUlhtditNZm1pL2pzMVBIaUtmREV1VkI0OUs3S253SDNXUXQvV0VjOTRkdDRtMEsyekVoNTdxS3lnbHlvK2p4azVMRXkxS0h4bi9kYURhbFBrSUhWZUsraHdSODNUMXF1NS85az0iPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/124629/upload.png" width="960" height="540">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="School Assignments presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="8qNIuHNw1jTId5p6Xkxh" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;8qNIuHNw1jTId5p6Xkxh&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;77f6f4cc&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Multi-purpose, Education, School, Notebook&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:725,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;89cbea85b66cf7df2dc79c9250abdf50cf1de21a6951c1b168d9de3d255bfb2a&quot;}}"
    x-data="favorite([])"
    x-init="article = 'school-assignments', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Multi-purpose, Education, School, Notebook', 'premium', 'thumbnail', '725', 'School Assignments');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:8qNIuHNw1jTId5p6Xkxh -->
                    <div x-data="download(
    725,
    'school-assignments',
    'School Assignments',
    1,
    'Multi-purpose, Education, School, Notebook',
    'en',
    'https://slidesgo.com/theme/school-assignments/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:4,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-725.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=school-assignments&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=School+Assignments"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 725);
                                       gtm.microfunnel('Multi-purpose, Education, School, Notebook', 'Go Premium', 'https://slidesgo.com/pricing?slide=school-assignments&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=School+Assignments', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                                    <div class="flex absolute left-0 bottom-0 w-full z-10 -mb-3 justify-center preview-variant-selector transition-opacity duration-300 pointer-events-auto">
                                                    <div
                                x-on:click="changeVariant(0, 'School Assignments'),
                                $dispatch('slide-color-change-725', {'variantId': ''})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 0) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="red"
                                      style="background: #e9545c"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(544, 'School Assignments'),
                                $dispatch('slide-color-change-725', {'variantId': '544'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 544) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="orange"
                                      style="background: #e69138"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(546, 'School Assignments'),
                                $dispatch('slide-color-change-725', {'variantId': '546'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 546) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="pink"
                                      style="background: #e767a2"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(547, 'School Assignments'),
                                $dispatch('slide-color-change-725', {'variantId': '547'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 547) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="green"
                                      style="background: #6aa84f"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(548, 'School Assignments'),
                                $dispatch('slide-color-change-725', {'variantId': '548'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 548) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="blue"
                                      style="background: #3c78d8"></span>
                            </div>
                                            </div>
                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/school-assignments#position-4&amp;rs=home-popular&amp;rs=home-popular"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        School Assignments
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Design some school assignments for your students so they can learn while they are having fun. Download this cool template now and make use of its resources. It looks like a sheet of a notebook and we have added drawings of stationery. Get your pencil!</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/multi-purpose"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#multi-purpose"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Multi-purpose</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="235"
     data-slug="chalkboard-background"
          @toggle-fav-235.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'chalkboard-background', [&quot;https:\/\/media.slidesgo.com\/storage\/24409737\/conversions\/0-chalkboard-background-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/24409740\/conversions\/1-chalkboard-background-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/chalkboard-background#position-5&amp;rs=home-popular"
                   x-on:click='handleEvents("235",
                    "Chalkboard Background",
                    "Multi-purpose, Education, School",
                    "premium",
                    "https://slidesgo.com/theme/chalkboard-background#position-5&amp;rs=home-popular&amp;rs=home-popular",
                    "home-popular")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Chalkboard Background presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_459_258.jpg 459w, https://media.slidesgo.com/storage/24410161/responsive-images/chalkboard-background1662539177___media_library_original_384_216.jpg 384w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErVWZER21RWEZxV2RjeUhwWFoyT2xLOEFWb3R3RmNUNGExUkkxQ09jWXJ2dE0xVXZiczBiQXF0ZWxLNjJQajZhVDNNdlZkQUFqSjhyQU5jTDRnMGhkUFpXVTllMWVqNmxxNzNOc1J1R0s4OThSeXJJZVd5M3BWUnYxSnFLUFF5TFlrUHdjVjFXZ1NOOWxsK1kvblJSVGtUUytJUzZkaEg5NC9uWE02Z1NaZVRtaWltaVpILy8yUT09Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/24410161/chalkboard-background1662539177.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Chalkboard Background presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="BpgeIIMbmU4vldFNhObu" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;BpgeIIMbmU4vldFNhObu&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;ea2c340d&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Multi-purpose, Education, School&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:235,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;5391de46207fe35d2d644dae49ccc81d85c3604ab9f1f297c9d08ff0d112c867&quot;}}"
    x-data="favorite([])"
    x-init="article = 'chalkboard-background', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Multi-purpose, Education, School', 'premium', 'thumbnail', '235', 'Chalkboard Background');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:BpgeIIMbmU4vldFNhObu -->
                    <div x-data="download(
    235,
    'chalkboard-background',
    'Chalkboard Background',
    1,
    'Multi-purpose, Education, School',
    'en',
    'https://slidesgo.com/theme/chalkboard-background/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:5,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-235.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=chalkboard-background&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Chalkboard+Background"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 235);
                                       gtm.microfunnel('Multi-purpose, Education, School', 'Go Premium', 'https://slidesgo.com/pricing?slide=chalkboard-background&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Chalkboard+Background', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/chalkboard-background#position-5&amp;rs=home-popular&amp;rs=home-popular"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Chalkboard Background
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">There’s an object that comes to mind when you think of a classroom. What’s in there, other than the students, the teacher and the desks? A chalkboard! The design of our new  template focuses on this! Since today is Teachers’ Day in Spain, we’re sure you’re going to love it!</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/multi-purpose"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#multi-purpose"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Multi-purpose</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="493"
     data-slug="simple-blackboard-background"
          @toggle-fav-493.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'simple-blackboard-background', [&quot;https:\/\/media.slidesgo.com\/storage\/39157149\/conversions\/0-simple-blackboard-background-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/39157155\/conversions\/1-simple-blackboard-background-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/simple-blackboard-background#position-6&amp;rs=home-popular"
                   x-on:click='handleEvents("493",
                    "Simple Blackboard Background",
                    "Multi-purpose, Education, School",
                    "premium",
                    "https://slidesgo.com/theme/simple-blackboard-background#position-6&amp;rs=home-popular&amp;rs=home-popular",
                    "home-popular")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Simple Blackboard Background presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/39157469/responsive-images/simple-blackboard-background1691753339___media_library_original_548_308.jpg 548w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErU2RIMHdYYzZqR1NUMHIwVFJ2aDArb0xqUGxISEFOY0Y0ZjFkYkM3U1hIS25PRFhxTnA4U2xrQ041YXFWR09LQU1MeEw4UEcwb0tDMjhuMHJnTlFzUHNrcFhIU3ZWTlorSUNYV1daRkp4WG1XdTZpTHE0WndPcDdVclBjTG1URDk0VnN3RWhPcG9vcGdSWGpIQjVOWlVweWFLS0JILy9aIj4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/39157469/simple-blackboard-background1691753339.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Simple Blackboard Background presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="y3fdePnmjciPompTj4w1" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;y3fdePnmjciPompTj4w1&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;c7fd5b2c&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Multi-purpose, Education, School&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:493,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;3cc9653679954d65234b7768095164ef547bceae74a8290ca4c8b4794f4966d8&quot;}}"
    x-data="favorite([])"
    x-init="article = 'simple-blackboard-background', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Multi-purpose, Education, School', 'premium', 'thumbnail', '493', 'Simple Blackboard Background');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:y3fdePnmjciPompTj4w1 -->
                    <div x-data="download(
    493,
    'simple-blackboard-background',
    'Simple Blackboard Background',
    1,
    'Multi-purpose, Education, School',
    'en',
    'https://slidesgo.com/theme/simple-blackboard-background/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:6,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-493.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=simple-blackboard-background&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Simple+Blackboard+Background"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 493);
                                       gtm.microfunnel('Multi-purpose, Education, School', 'Go Premium', 'https://slidesgo.com/pricing?slide=simple-blackboard-background&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Simple+Blackboard+Background', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                                    <div class="flex absolute left-0 bottom-0 w-full z-10 -mb-3 justify-center preview-variant-selector transition-opacity duration-300 pointer-events-auto">
                                                    <div
                                x-on:click="changeVariant(0, 'Simple Blackboard Background'),
                                $dispatch('slide-color-change-493', {'variantId': ''})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 0) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Black"
                                      style="background: #000000"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(392, 'Simple Blackboard Background'),
                                $dispatch('slide-color-change-493', {'variantId': '392'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 392) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Blue"
                                      style="background: #25095c"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(393, 'Simple Blackboard Background'),
                                $dispatch('slide-color-change-493', {'variantId': '393'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 393) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Green"
                                      style="background: #112e17"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(394, 'Simple Blackboard Background'),
                                $dispatch('slide-color-change-493', {'variantId': '394'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 394) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="Bordeaux"
                                      style="background: #4f1717"></span>
                            </div>
                                                    <div
                                x-on:click="changeVariant(395, 'Simple Blackboard Background'),
                                $dispatch('slide-color-change-493', {'variantId': '395'})"
                                class="h-6 w-6 rounded-full mx-1 border-2 border-white shadow flex overflow-hidden bg-white hover:shadow-lg"
                                :class="{'active' : (activeColor === 395) }"
                            >
                                <span class="w-full h-full rounded-full"
                                      title="White"
                                      style="background: #F8F8F8"></span>
                            </div>
                                            </div>
                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/simple-blackboard-background#position-6&amp;rs=home-popular&amp;rs=home-popular"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Simple Blackboard Background
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Wipe off the chalkboard and get ready to prepare your classes! Write your ideas, draw some doodles and put your thinking cap on with this cool template for Google Slides and PowerPoint.</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/multi-purpose"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#multi-purpose"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Multi-purpose</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                            </div>
            <div class="text-center mt-8">
                <a href="https://slidesgo.com/themes"
                   data-cy="see-more-themes"
                   class="inline-block rounded px-6 py-3 text-lg text-white font-bold bg-gray-900 hover:bg-gray-800 active:bg-gray-700">
                    See more                </a>
            </div>

            <hr class="border-t border-gray-200 my-14">
            <h4 class="text-gray-900 text-5xl font-title font-bold mb-6">
                Infographics            </h4>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div class="theme_post"
     data-id="27752"
     data-slug="lead-funnel-infographics"
          @toggle-fav-27752.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'lead-funnel-infographics', [&quot;https:\/\/media.slidesgo.com\/storage\/47532279\/conversions\/0-lead-funnel-infographics-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47532285\/conversions\/1-lead-funnel-infographics-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/lead-funnel-infographics#position-1&amp;rs=home-infographics"
                   x-on:click='handleEvents("27752",
                    "Lead Funnel Infographics",
                    "Infographics",
                    "",
                    "https://slidesgo.com/theme/lead-funnel-infographics#position-1&amp;rs=home-infographics&amp;rs=home-infographics",
                    "home-infographics")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Lead Funnel Infographics presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47532513/responsive-images/lead-funnel-infographics1705316978___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47532513/responsive-images/lead-funnel-infographics1705316978___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47532513/responsive-images/lead-funnel-infographics1705316978___media_library_original_1119_629.jpg 1119w, https://media.slidesgo.com/storage/47532513/responsive-images/lead-funnel-infographics1705316978___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47532513/responsive-images/lead-funnel-infographics1705316978___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47532513/responsive-images/lead-funnel-infographics1705316978___media_library_original_655_368.jpg 655w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErLzhBeHQ0azFMVEwwSmJJeFQxQXJubThhNnNSdFZHSkk5SzlWamp0ZFNHNTQxYys0elNuUnJHUG55RS9Lc0dtbWJKcVMwUEo5T2p2OVVMU3pvUTJmU3ZRdkM4VWtNSVZoV245bnRJK0ZqQzU5QlZ1Q0pFSHlqaXV1V0ljcWZJenpvWU5VNnpxSm1QNGJPWWEzSmVsRkZZMXZqWjA0YitHaW00RzRjVmFqKzZLS0t4T28vL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47532513/lead-funnel-infographics1705316978.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Lead Funnel Infographics presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="KzLxUUfbI2KARY7VhKPS" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;KzLxUUfbI2KARY7VhKPS&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;e72f358a&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Infographics&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27752,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;c4bf4aaa04b663433ca61313a0ca8b4ab05f6c4cf58c25c1ec10c3b5eab9b84f&quot;}}"
    x-data="favorite([])"
    x-init="article = 'lead-funnel-infographics', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Infographics', '', 'thumbnail', '27752', 'Lead Funnel Infographics');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:KzLxUUfbI2KARY7VhKPS -->
                    <div x-data="download(
    27752,
    'lead-funnel-infographics',
    'Lead Funnel Infographics',
    0,
    'Infographics',
    'en',
    'https://slidesgo.com/theme/lead-funnel-infographics/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:1,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27752.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/lead-funnel-infographics#position-1&amp;rs=home-infographics&amp;rs=home-infographics"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Lead Funnel Infographics
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Lead Funnel Infographics template for PowerPoint or Google Slides and discover the power of infographics. An infographic resource gives you the ability to showcase your content in a more visual way, which will make it easier for your audience to understand your topic. Slidesgo infographics like this set...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/infographics"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#infographics"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Infographics</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="27216"
     data-slug="family-tree-activities-for-elementary-infographics"
          @toggle-fav-27216.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'family-tree-activities-for-elementary-infographics', [&quot;https:\/\/media.slidesgo.com\/storage\/47385043\/conversions\/0-family-tree-activities-for-elementary-infographics-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47385047\/conversions\/1-family-tree-activities-for-elementary-infographics-thumb.jpg&quot;], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/family-tree-activities-for-elementary-infographics#position-2&amp;rs=home-infographics"
                   x-on:click='handleEvents("27216",
                    "Family Tree Activities for Elementary Infographics",
                    "School, Infographics",
                    "",
                    "https://slidesgo.com/theme/family-tree-activities-for-elementary-infographics#position-2&amp;rs=home-infographics&amp;rs=home-infographics",
                    "home-infographics")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Family Tree Activities for Elementary Infographics presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_1119_629.jpg 1119w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47385279/responsive-images/family-tree-activities-for-elementary-infographics1704965115___media_library_original_459_258.jpg 459w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEvUUR4ZDQ3ajhQU3JHUmxqV1hvL3hOUy91RmpaZHBQU3NIeHpiVzNpZUlYMXBjSXdVWkl6WE9lQ3RMYlViOE1KVlZZenp6WHpHSnpESExHS05GWGdlREdTbEhtdG9lbWFuNDhPbjNHd3BrSG9hMVBEdmlZNjB4d3VBSzRYeEpvN1hGeVBMY01BT3VhMy9Ba0NhYUdFcnFDZlUxOUpUeFBOVTVXem1UZk51ZUJlSGJtWCt5NVI1cjR4L2VOVy9BMDhvbG54STQrYis4YUtLK0l3bncwenk2UDhGbll0UElUekk1LzRFYUV1SlFlSkhIL0FqUlJYc3I0alBxZi8yUT09Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47385279/family-tree-activities-for-elementary-infographics1704965115.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Family Tree Activities for Elementary Infographics presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="iW6Njfmp6NUwL8BuLS4n" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;iW6Njfmp6NUwL8BuLS4n&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;df8826ca&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;School, Infographics&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27216,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;dfee7d4760d0e4b8f1a3515bff2a11d82092a55cc2900aaa9da5240c74fb48d1&quot;}}"
    x-data="favorite([])"
    x-init="article = 'family-tree-activities-for-elementary-infographics', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('School, Infographics', '', 'thumbnail', '27216', 'Family Tree Activities for Elementary Infographics');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:iW6Njfmp6NUwL8BuLS4n -->
                    <div x-data="download(
    27216,
    'family-tree-activities-for-elementary-infographics',
    'Family Tree Activities for Elementary Infographics',
    0,
    'School, Infographics',
    'en',
    'https://slidesgo.com/theme/family-tree-activities-for-elementary-infographics/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:2,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27216.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                                                            <button @click='downloadSlide("google");'
                                                type="button" aria-label="Google slides"
                                                name="action" value="google"
                                                class="bg-yellow-500 hover:bg-yellow-400 font-semibold text-base text-white h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                            <svg alt="Google Slides" class="h-5 w-5" ><use xlink:href="#icon-googleslides"></use></svg>
                                            <span class="flex-1 text-center pl-2">Google Slides</span>
                                        </button>
                                                                        <button @click='downloadSlide("powerpoint");'
                                            type="button" aria-label="Powerpoint"
                                            name="action" value="powerpoint"
                                            class="bg-powerpoint-500 hover:bg-powerpoint-400 font-semibold text-white text-base h-12 w-52 px-3 rounded text-center relative flex items-center my-3">
                                        <svg alt="Download icon" class="h-5 w-5" ><use xlink:href="#icon-powerpoint"></use></svg>
                                        <span class="flex-1 text-center pl-2">PowerPoint</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/family-tree-activities-for-elementary-infographics#position-2&amp;rs=home-infographics&amp;rs=home-infographics"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Family Tree Activities for Elementary Infographics
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Family Tree Activities for Elementary Infographics template for PowerPoint or Google Slides and discover the power of infographics. An infographic resource gives you the ability to showcase your content in a more visual way, which will make it easier for your audience to understand your topic. Slidesgo infographics...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/school"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#school"/>
            </svg>
                    <span class="text-sm font-bold ml-2">School</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    <div class="theme_post"
     data-id="27505"
     data-slug="islands-and-archipelagos-infographics"
          @toggle-fav-27505.window="isFavorite = !isFavorite"
     data-premium="premium"
     x-data="box(false, 'islands-and-archipelagos-infographics', [&quot;https:\/\/media.slidesgo.com\/storage\/47437385\/conversions\/0-islands-and-archipelagos-infographics-thumb.jpg&quot;,&quot;https:\/\/media.slidesgo.com\/storage\/47437389\/conversions\/1-islands-and-archipelagos-infographics-thumb.jpg&quot;], 0, false, true, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="sixteentonine"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/islands-and-archipelagos-infographics#position-3&amp;rs=home-infographics"
                   x-on:click='handleEvents("27505",
                    "Islands and Archipelagos Infographics",
                    "Infographics",
                    "premium",
                    "https://slidesgo.com/theme/islands-and-archipelagos-infographics#position-3&amp;rs=home-infographics&amp;rs=home-infographics",
                    "home-infographics")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Islands and Archipelagos Infographics presentation template " loading="lazy" decoding="async"  srcset="https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_1600_900.jpg 1600w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_1338_753.jpg 1338w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_1120_630.jpg 1120w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_937_527.jpg 937w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_783_440.jpg 783w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_655_368.jpg 655w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_548_308.jpg 548w, https://media.slidesgo.com/storage/47437604/responsive-images/islands-and-archipelagos-infographics1705056655___media_library_original_459_258.jpg 459w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgoJPGltYWdlIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEEreVBFZml1ZlNicnkwUUZhb1d2eEduUU1TZ0ZIaW5UVzFHNUx4eUtSOWF3b2ZDVnpjbmJ2VUQxelhWVWRaU2RyMlBrb1NwOXowRFFmRVg5cFJOTExnWTVyYnNmSEZ2SEw1S091NFY1MGJpSHdyWU5ITzI0c01aRmVZYXQ0N2swdlVYbXRvMmtHYStiekxPS3VFcXdweFYxMVBid21BblZnNmkrUjJhelNmMzIvT3Ixbksrdy9PMzUwVVYra3lQeTZudVpQaVJpNkx1SmI2ODF4MTVHaGM1VlQrRkZGZmhuRWYrL3lQM25oci9jSW4vL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/47437604/islands-and-archipelagos-infographics1705056655.jpg" width="1600" height="900">

                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Islands and Archipelagos Infographics presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                                    <template x-if="totalSlides > 0">
                        <div class="absolute top-0 left-0 right-0 flex items-center justify-center mt-2">
                            <div class="w-12 relative text-white h-6 py-1 text-xs text-center rounded uppercase opacity-100 bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 xl:-mt-0.5 2xl:mt-auto">
                                <span x-text="currentSlide + 1"></span> / <span x-text="totalSlides"></span>
                            </div>
                        </div>
                    </template>
                    <button
                        x-on:click="next()"
                        :class="{'group-hover:opacity-0': totalSlides !== 0 && currentSlide === (totalSlides - 1)}"
                        class="group-hover:opacity-100 opacity-0 swiper-button-next absolute top-0 right-0 justify-end h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tr"
                    ></button>
                    <button
                        class="group-hover:opacity-100 opacity-0 swiper-button-prev absolute top-0 left-0 justify-start h-full w-20 hidden lg:flex items-center p-2 m-0 focus:outline-none rounded-tl"
                        :class="{'group-hover:opacity-0': currentSlide === 0 }"
                        x-on:click="previous()"
                    ></button>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                            <span class="h-6 px-2 rounded bg-gray-900 bg-opacity-80 flex items-center justify-center">
                            <img src="/images/icons/premium.svg" alt="Premium subscription"
                                 data-cy="premium-resource"
                                 class="h-3 w-3"
                            />
                        </span>
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="f31FKUPUPFpzo2fySUIz" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;f31FKUPUPFpzo2fySUIz&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;3078832c&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Infographics&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:27505,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;3461f1188174e0aa2e4ec0869b8b2bb0c2f3cffca2efd88045a16bea836629b3&quot;}}"
    x-data="favorite([])"
    x-init="article = 'islands-and-archipelagos-infographics', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Infographics', 'premium', 'thumbnail', '27505', 'Islands and Archipelagos Infographics');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:f31FKUPUPFpzo2fySUIz -->
                    <div x-data="download(
    27505,
    'islands-and-archipelagos-infographics',
    'Islands and Archipelagos Infographics',
    1,
    'Infographics',
    'en',
    'https://slidesgo.com/theme/islands-and-archipelagos-infographics/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:3,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-27505.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    <div class="p-0 sm:py-6 sm:px-6 flex-col items-center w-full">
                                <div class="flex-1 w-full">
                                    <h3 class="flex text-white justify-center items-baseline text-lg sm:text-2xl font-bold mb-1">
                                        <img src="/images/icons/premium.svg" alt="Premium subscription" class="h-4 w-4 mr-2"/>
                                        <span class='text-yellow-600 mr-1'>Premium</span> template
                                    </h3>
                                    <p class="text-white text-base mb-3 xl:px-0 text-center leading-snug">Unlock this template and gain unlimited access</p>
                                </div>
                                <div class="flex flex-col items-start sm:w-full">
                                    <a href="https://slidesgo.com/pricing?slide=islands-and-archipelagos-infographics&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Islands+and+Archipelagos+Infographics"
                                       onclick="trackAnalytic('premium', 'click', 'detailp-gopremium', 27505);
                                       gtm.microfunnel('Infographics', 'Go Premium', 'https://slidesgo.com/pricing?slide=islands-and-archipelagos-infographics&amp;utm_source=Premium&amp;utm_medium=template&amp;utm_campaign=premium-slides-microfunnel&amp;utm_term=Go-Premium&amp;utm_content=Islands+and+Archipelagos+Infographics', 'thumbnail');"
                                       class="w-full text-center flex justify-center items-center sm:mb-2 rounded h-10 px-4 text-base bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-700">
                                        Go Premium</a>
                                                                            <p class="hidden sm:block text-sm text-gray-100 sm:mt-2">Are you already Premium?                                            <a href="javascript:document.querySelector('#login').submit()" class="font-semibold hover:underline">Log in</a>
                                                                    </div>
                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/islands-and-archipelagos-infographics#position-3&amp;rs=home-infographics&amp;rs=home-infographics"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Islands and Archipelagos Infographics
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Download the Islands and Archipelagos Infographics template for PowerPoint or Google Slides and discover the power of infographics. An infographic resource gives you the ability to showcase your content in a more visual way, which will make it easier for your audience to understand your topic. Slidesgo infographics like this...</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/infographics"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#infographics"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Infographics</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                16:9
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                            </div>
            <div class="text-center mb-14 mt-6">
                <a href="https://slidesgo.com/infographics"
                   data-cy="see-more-infographics"
                   class="inline-block rounded px-6 py-3 text-lg text-white font-bold bg-gray-900 hover:bg-gray-800 active:bg-gray-700">
                    See more                </a>
            </div>


            <hr class="border-t border-gray-200 my-14">
            <div class="container mx-auto px-4 below-the-fold mb-14">
                <h3 class="text-gray-900 font-title text-5xl font-bold mb-6">
                    Coloring pages                </h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                            <div class="theme_post"
     data-id="21715"
     data-slug="sheep-says-baa"
          @toggle-fav-21715.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'sheep-says-baa', [], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="afour"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/sheep-says-baa#position-1&amp;rs=home-coloring-pages"
                   x-on:click='handleEvents("21715",
                    "Sheep Says Baa!",
                    "Coloring Page",
                    "",
                    "https://slidesgo.com/theme/sheep-says-baa#position-1&amp;rs=home-coloring-pages&amp;rs=home-coloring-pages",
                    "home-coloring-pages")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Sheep Says Baa! presentation template " loading="lazy" decoding="async" src="https://media.slidesgo.com/storage/37300043/Sheep-Says-Baa!-by-Slidesgo.jpg" alt="Sheep Says Baa! by Slidesgo">
                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Sheep Says Baa! presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="ZHwBbCm7x0fBXi1KhiMw" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;ZHwBbCm7x0fBXi1KhiMw&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;d8b04cca&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Coloring Page&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:21715,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;6150e33765b61dbd271025664536095b7fdb1db2ec84c26e8c586cc9593bcabc&quot;}}"
    x-data="favorite([])"
    x-init="article = 'sheep-says-baa', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Coloring Page', '', 'thumbnail', '21715', 'Sheep Says Baa!');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:ZHwBbCm7x0fBXi1KhiMw -->
                    <div x-data="download(
    21715,
    'sheep-says-baa',
    'Sheep Says Baa!',
    0,
    'Coloring Page',
    'en',
    'https://slidesgo.com/theme/sheep-says-baa/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:1,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-21715.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                    <button
                                        @click='downloadSlide("pdf");'
                                        type="button"
                                        aria-label="Powerpoint"
                                        name="action"
                                        value="pdf"
                                        class="bg-youtube hover:bg-red-700 font-semibold text-white text-sm h-12 w-52 px-3 rounded text-center relative flex items-center my-3"
                                    >
                                        <svg alt="Download icon" class="h-5 w-5">
                                            <use xlink:href="#icon-pdf"></use>
                                        </svg>
                                        <span class="flex-1 text-center pl-2 text-sm">PDF</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/sheep-says-baa#position-1&amp;rs=home-coloring-pages&amp;rs=home-coloring-pages"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Sheep Says Baa!
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Printable design A4 format with coloring activities. You can save it in Google Drive and then print it!</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/coloring-page"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#coloring-page"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Coloring Page</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                A4
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                            <div class="theme_post"
     data-id="21713"
     data-slug="sad-donut"
          @toggle-fav-21713.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'sad-donut', [], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="afour"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/sad-donut#position-2&amp;rs=home-coloring-pages"
                   x-on:click='handleEvents("21713",
                    "Sad Donut",
                    "Coloring Page",
                    "",
                    "https://slidesgo.com/theme/sad-donut#position-2&amp;rs=home-coloring-pages&amp;rs=home-coloring-pages",
                    "home-coloring-pages")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Sad Donut presentation template " loading="eager" decoding="sync" src="https://media.slidesgo.com/storage/37299272/Cover-Sad-donut-by-Slidesgo.jpg" alt="Cover Sad donut by Slidesgo">
                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Sad Donut presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="84K5BWe75bZbz5OiOUmW" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;84K5BWe75bZbz5OiOUmW&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;42b6a3d1&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Coloring Page&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:21713,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;2a3be6fff4ff3e21486d9fecc22b0767b28e3942691b1381e1a4b0f0badcad5d&quot;}}"
    x-data="favorite([])"
    x-init="article = 'sad-donut', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Coloring Page', '', 'thumbnail', '21713', 'Sad Donut');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:84K5BWe75bZbz5OiOUmW -->
                    <div x-data="download(
    21713,
    'sad-donut',
    'Sad Donut',
    0,
    'Coloring Page',
    'en',
    'https://slidesgo.com/theme/sad-donut/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:2,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-21713.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                    <button
                                        @click='downloadSlide("pdf");'
                                        type="button"
                                        aria-label="Powerpoint"
                                        name="action"
                                        value="pdf"
                                        class="bg-youtube hover:bg-red-700 font-semibold text-white text-sm h-12 w-52 px-3 rounded text-center relative flex items-center my-3"
                                    >
                                        <svg alt="Download icon" class="h-5 w-5">
                                            <use xlink:href="#icon-pdf"></use>
                                        </svg>
                                        <span class="flex-1 text-center pl-2 text-sm">PDF</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/sad-donut#position-2&amp;rs=home-coloring-pages&amp;rs=home-coloring-pages"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Sad Donut
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Printable design A4 format with coloring activities. You can save it in Google Drive and then print it!</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/coloring-page"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#coloring-page"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Coloring Page</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                A4
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                            <div class="theme_post"
     data-id="21708"
     data-slug="policewoman"
          @toggle-fav-21708.window="isFavorite = !isFavorite"
     data-premium="0"
     x-data="box(false, 'policewoman', [], 0, false, false, false, [])"
>
    <div class="relative border border-gray-100 rounded">
        <div x-ref="article"
             class="article-box aspect-w-16 aspect-h-9 relative bg-gray-100 cursor-pointer group flex"
             data-total="?" data-format="afour"
        >
            <div class="box-image absolute inset-0 overflow-hidden rounded-t">
                <a href="https://slidesgo.com/theme/policewoman#position-3&amp;rs=home-coloring-pages"
                   x-on:click='handleEvents("21708",
                    "Policewoman",
                    "Coloring Page",
                    "",
                    "https://slidesgo.com/theme/policewoman#position-3&amp;rs=home-coloring-pages&amp;rs=home-coloring-pages",
                    "home-coloring-pages")'
                   class="absolute inset-0"
                >
                    <div
                            class="overflow-x-scroll flex"
                            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
                            x-ref="container"
                            x-on:touchstart="touch()"
                            x-on:scroll="scrolls()"
                            
                            @mouseenter="(evt) => {evt.target.querySelectorAll('.slide img')[1]?.removeAttribute('loading')}"
                    >
                        
                        <div x-show="!variantChanged"
                             class="slide overflow-hidden w-full h-full shrink-0 relative bg-gray-100 aspect-w-16 aspect-h-9"
                             style="scroll-snap-stop: always;">
                                                            <img class="absolute w-full h-full object-contain object-center user-select-none" style="" width="368" sizes="1px" x-ref="first" onload="this.onload=null;var size = Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100) || 20;this.sizes=size*0.8+'vw';" alt="Policewoman presentation template " loading="lazy" decoding="async" src="https://media.slidesgo.com/storage/37298906/Cover-Policewoman-by-Slidesgo.jpg" alt="Cover Policewoman by Slidesgo">
                                                        <span class="absolute inset-0 border-b border-black opacity-5 pointer-events-none bg-white z-10">
                            </span>
                        </div>
                        <template x-cloak x-for="(image, index) in activeMedia" :key="index">
                            <div class="slide bg-gray-100 overflow-hidden w-full h-full shrink-0 relative aspect-w-16 aspect-h-9">
                                <div class="absolute w-full h-full object-contain object-center user-select-none"">
                                    <img
                                            x-bind:src="image"
                                            class="h-full m-auto"
                                            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
                                            loading="lazy"
                                            alt="Policewoman presentation template "
                                    />
                                </div>
                            </div>
                        </template>
                    </div>
                </a>
                            </div>

            <div class="flex justify-between absolute inset-0 pointer-events-none items-start p-2">
                <div class="top-0 left-0 flex flex-col items-start pointer-events-none">
                                    </div>

                <div class="flex flex-col justify-center sm:items-center pointer-events-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div wire:id="XYzamtH4Di6V5HLbKyJN" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;XYzamtH4Di6V5HLbKyJN&quot;,&quot;name&quot;:&quot;favorite-button&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;path&quot;:&quot;\/&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;v&quot;:&quot;acj&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;a98d1a6b&quot;,&quot;data&quot;:{&quot;slide&quot;:[],&quot;folders&quot;:[],&quot;foldersInArticle&quot;:[],&quot;favorite&quot;:null,&quot;isOpen&quot;:false,&quot;isFav&quot;:false,&quot;favoriteView&quot;:false,&quot;slideDetailView&quot;:false,&quot;slideNewDetailView&quot;:false,&quot;isGuest&quot;:false,&quot;showTitle&quot;:true,&quot;showGuestModal&quot;:false,&quot;mainCategories&quot;:&quot;Coloring Page&quot;},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;slide&quot;:{&quot;class&quot;:&quot;Domain\\Article\\Article&quot;,&quot;id&quot;:21708,&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;,&quot;collectionClass&quot;:null}},&quot;collections&quot;:[&quot;folders&quot;,&quot;foldersInArticle&quot;]},&quot;checksum&quot;:&quot;989582c88b40a01315bc0a7857569dbdd5250fa8e3d378932405fbcad1f06a00&quot;}}"
    x-data="favorite([])"
    x-init="article = 'policewoman', isFavorite = ''"
>
    <div class="flex items-center z-15">
    <button
        onclick="
                            gtm.addToFavorites('Coloring Page', '', 'thumbnail', '21708', 'Policewoman');
                    "
        wire:click="doFavoriteAndOpenFolderList()"
        type="button"
        aria-label="Favorite button"
        class="tooltip-group bg-white flex items-center justify-center hover:bg-gray-75 w-7 h-7 rounded relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7"
    >
                    <img src="/images/icons/heart.svg" alt="Heart icon" class="h-4 w-4"/>
                            <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-700 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                Like                <svg class="h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg] fill-current" alt="icon caret" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>

            </span>
            </button>
</div>

    
    </div>



<!-- Livewire Component wire-end:XYzamtH4Di6V5HLbKyJN -->
                    <div x-data="download(
    21708,
    'policewoman',
    'Policewoman',
    0,
    'Coloring Page',
    'en',
    'https://slidesgo.com/theme/policewoman/download',
    false,
    {&quot;search&quot;:false,&quot;nextSearchExpression&quot;:false,&quot;position&quot;:3,&quot;results&quot;:false,&quot;variant&quot;:false},
    false,
    false)"
     @slide-color-change-21708.window="colorHasChanged($event.detail)">
    <div x-data="{downloadOpened: false}">
                    <button
                data-cy="download"
                type="button"
                @click="downloadOpened = true;"
                class="tooltip-group w-7 h-7 rounded bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 relative sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 mt-1 text-gray-800">
                <svg class="fill-current h-4 w-4 fill-current sm:h-3.5 sm:w-3.5 2xl:w-4 2xl:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><path d="M438 403c-14 0-25 11-25 25v134c0 19-16 35-35 35H36c-19 0-35-16-35-35V428a25 25 0 00-50 0v134c0 47 38 85 85 85h342c47 0 85-38 85-85V428c0-14-11-25-25-25z"/><path d="M189 531a25 25 0 0036 0l85-85a25 25 0 00-36-36l-42 43V172a25 25 0 00-50 0v281l-42-43a25 25 0 00-36 36l85 85z"/></svg>                <span class="tooltip absolute right-8 top-0 h-7 px-3 bg-white text-gray-800 rounded hidden xl:flex items-center justify-center transition-all duration-300 opacity-0 transform pointer-events-none shadow-lg text-sm whitespace-nowrap">
                                                Download                                            <svg alt="icon caret" class="fill-current h-3 w-3 absolute -right-2 top-2 text-white rotate-[270deg]" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 3L6.5 0L0.5 -5.24537e-07L3.5 3Z" />
</svg>                </span>
            </button>
        
        
        <form
            x-ref="download_form"
            method="post"
            target="_blank"
            class="h-full"
            action=""
        >
            <input type="hidden" name="_token" value="" autocomplete="off">
                        <div
                x-cloak
                x-show="downloadOpened"
                @click.outside="downloadOpened = false"
                class="absolute left-0 top-0 w-full aspect-w-16 aspect-h-9 bg-purple-900 bg-opacity-90 rounded backdrop-blur-lg firefoxblur"
            >
                <div class="absolute flex flex-col inset-0 items-center rounded">
                    <button type="button" @click="downloadOpened = false" class="close flex items-center justify-center absolute right-0 top-0 p-3 text-white">
                        <svg class="fill-current w-4 h-4">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <div
                        class="h-full flex flex-col justify-center">
                                                    
                            <div class="flex flex-col justify-center w-full h-full relative">
                                                                    <button
                                        @click='downloadSlide("pdf");'
                                        type="button"
                                        aria-label="Powerpoint"
                                        name="action"
                                        value="pdf"
                                        class="bg-youtube hover:bg-red-700 font-semibold text-white text-sm h-12 w-52 px-3 rounded text-center relative flex items-center my-3"
                                    >
                                        <svg alt="Download icon" class="h-5 w-5">
                                            <use xlink:href="#icon-pdf"></use>
                                        </svg>
                                        <span class="flex-1 text-center pl-2 text-sm">PDF</span>
                                    </button>
                                                            </div>
                                            </div>
                </div>
            </div>
                    </form>
    </div>
</div>
                </div>

                            </div>
        </div>

                    <div class="px-4">
                <h3 class="pt-5 mb-2 text-xl font-medium flex items-center">
                    <a
                       href="https://slidesgo.com/theme/policewoman#position-3&amp;rs=home-coloring-pages&amp;rs=home-coloring-pages"
                       class="text-gray-900 no-underline block font-semibold sm:truncate hover:text-purple-700">
                        Policewoman
                    </a>
                </h3>
                                    <p class="text-base text-gray-700 leading-normal line-clamp-3">Printable design A4 format with coloring activities. You can save it in Google Drive and then print it!</p>
                            </div>
        
        <div class="p-4 flex items-center justify-between">
                            <a href="https://slidesgo.com/coloring-page"
                   class="bg-gray-75 text-gray-900 rounded hover:bg-gray-200 active:bg-gray-300 py-4 px-2 h-6 flex items-center lg:px-3">
                    <svg class="h-3.5 w-3.5 shrink-0 fill-current">
                <use xlink:href="#coloring-page"/>
            </svg>
                    <span class="text-sm font-bold ml-2">Coloring Page</span>
                </a>
                        <div class="flex items-center flex-wrap">
                                    <span class="rounded-full h-6 p-4 mr-1 flex items-center border border-gray-300 text-gray-900 font-medium text-sm cursor-default lg:px-3">
                                                A4
                    </span>
                                
                            </div>
        </div>

            </div>
</div>
                                    </div>
                <div class="text-center mt-8">
                    <a href="https://slidesgo.com/coloring-page"
                       data-cy="see-more-coloring-pages"
                       class="inline-block rounded px-6 py-3 text-lg text-white font-bold bg-gray-900 hover:bg-gray-800 active:bg-gray-700">
                        See more                    </a>
                </div>
            </div>

                            <div class="bg-purple-50 py-8 sm:py-12 flex py-20 px-8 rounded flex-col xl:flex-row">
    <div class="mr-12 w-full text-center mb-4 xl:pt-4 xl:text-left xl:w-min xl:min-w-[320px]">
        <h4 class="mb-4 font-semibold text-5xl font-title text-gray-900">What's new on Slidesgo</h4>
        <p class="text-gray-800 text-lg leading-normal">
            See the latest website updates, new features and tools and make the most of your Slidesgo experience.        </p>
    </div>
    <div class="w-full text-md flex flex-col sm:flex-row">
                <a
            class="w-full bg-white p-3 rounded-lg shadow-md mr-4 mb-4 hover:shadow-black/30 hover:shadow-lg sm:w-1/3 sm:h-full sm:mb-0"
            href="https://slidesgo.com/ai-presentations#rs=whatsnew"
        >
            <div class="sm:h-28 xl:h-40">
                <img class="rounded w-full h-full object-cover" src="/images/ai/ai_preview.svg" alt="AI presentation generator">
            </div>
            <div class="px-3 mt-4 mb-5 flex flex-col justify-between sm:h-14">
                <h5 class="text-lg text-gray-900 font-semibold line-clamp-2 mb-2 sm:mb-0">
                    Make presentations with AI                </h5>
                <span class="text-gray-700 text-sm font-semibold">More info</span>
            </div>
        </a>
        
                <a
            href="https://slidesgo.com/slidesgo-school/news/create-great-design-faster-and-express-the-power-of-your-ideas-behind-the-scenes-of-our-rebranding#rs=whatsnew"
            data-testid="school_post"
            class="w-full bg-white p-3 rounded-lg shadow-md mr-4 mb-4 hover:shadow-black/30 hover:shadow-lg sm:w-1/3 sm:h-full sm:mb-0 mr-4"
                >
            <div class="sm:h-28 xl:h-40">
                        <img loading="lazy" alt="Create great design faster and express the power of your ideas – behind the scenes of our rebranding | Quick Tips & Tutorial for your presentations" class="rounded w-full h-full object-cover"  srcset="https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_1280_720.jpeg 1280w, https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_1070_602.jpeg 1070w, https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_896_504.jpeg 896w, https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_749_421.jpeg 749w, https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_627_353.jpeg 627w, https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_524_295.jpeg 524w, https://media.slidesgo.com/storage/46332723/responsive-images/upload___media_library_original_439_247.jpeg 439w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgoJPGltYWdlIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErNE5EMUMrdkoya3VFOHVJZXRiTTJ0V1lVaDVsR1BlcXMrcFF0R3lJdkJIWVZpZjhJM1phaTVET3lzZmV2b1hUbHZZeWxVako2R2lOVnRra3hEY0lkeDlhdngyVDNDaDkvWDByQWJ3SloyUUV3ZHlGNTYxcTZkNGxzZ0RDSkFwVGprMGUwbDBKVk52VkVHbGdHUGtacU51TDVjY2MwVVY2TCtKbkowUnUzUE5pL3dEdTE0anFqc3VxM0cxaVBtN0dpaXVHanV6M2NKMVAvOWs9Ij4KCTwvaW1hZ2U+Cjwvc3ZnPg== 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/46332723/upload.jpeg" width="1280" height="720">

                        </div>
            <div class="px-3 mt-4 mb-5 flex flex-col justify-between sm:h-14">
                <h5 class="text-lg text-gray-900 font-semibold line-clamp-2 mb-2 sm:mb-0">
                    Create great design faster and express the power of your ideas – behind the scenes of our rebranding
                </h5>
                <span class="text-gray-700 text-sm font-semibold">More info</span>
            </div>
        </a>
                <a
            href="https://slidesgo.com/slidesgo-school/news/disney-assets-at-slidesgo#rs=whatsnew"
            data-testid="school_post"
            class="w-full bg-white p-3 rounded-lg shadow-md mr-4 mb-4 hover:shadow-black/30 hover:shadow-lg sm:w-1/3 sm:h-full sm:mb-0"
                >
            <div class="sm:h-28 xl:h-40">
                        <img loading="lazy" alt="Disney assets at Slidesgo! | Quick Tips & Tutorial for your presentations" class="rounded w-full h-full object-cover"  srcset="https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_1280_720.jpeg 1280w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_1070_602.jpeg 1070w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_896_504.jpeg 896w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_749_421.jpeg 749w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_627_353.jpeg 627w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_524_295.jpeg 524w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_439_247.jpeg 439w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_367_206.jpeg 367w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_307_173.jpeg 307w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_257_145.jpeg 257w, https://media.slidesgo.com/storage/45476244/responsive-images/upload___media_library_original_215_121.jpeg 215w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTI4MCA3MjAiPgoJPGltYWdlIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBN1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJPREFwTENCeGRXRnNhWFI1SUQwZ09UQUsvOXNBUXdBREFnSURBZ0lEQXdNREJBTURCQVVJQlFVRUJBVUtCd2NHQ0F3S0RBd0xDZ3NMRFE0U0VBME9FUTRMQ3hBV0VCRVRGQlVWRlF3UEZ4Z1dGQmdTRkJVVS85c0FRd0VEQkFRRkJBVUpCUVVKRkEwTERSUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVLzhBQUVRZ0FFZ0FnQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEErRjRuYU9SV1g3d1BGZWtlRzlhdWxnVWxDVGpHY1ZKOEp2aHpGNGsxYUEzNTJXNVlBazE5OGVDUDJhUEJRMHUzY2lOMlpRZVNLK3RyWWhVZFdjM0p6Ym53QjRsMSs3VzBrUUx0RGRlSzg0Wml6RW5xVFg2Vy9GZjlsTFFielJacHJLTllXVUhCV3ZoTDRrZkN5NzhHWHpoUVhoendSVG8xNDFsZEJ5T0tQVFBoNThsbGFsZUR1SFN2cW53cmRUQzN0UUpwQndQNGpSUldWZlpIWDloSHBldFN1M2hXWExzZms3bXZqUDQycUcwMlVrQW5jZXRGRllZWForb1A0R2YvMlE9PSI+Cgk8L2ltYWdlPgo8L3N2Zz4= 32w" onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});" sizes="1px" src="https://media.slidesgo.com/storage/45476244/upload.jpeg" width="1280" height="720">

                        </div>
            <div class="px-3 mt-4 mb-5 flex flex-col justify-between sm:h-14">
                <h5 class="text-lg text-gray-900 font-semibold line-clamp-2 mb-2 sm:mb-0">
                    Disney assets at Slidesgo!
                </h5>
                <span class="text-gray-700 text-sm font-semibold">More info</span>
            </div>
        </a>
            </div>
</div>
                    </div>

        
        <div class="bg-gray-50 py-8 sm:py-12" data-gi="bottom-links">
            <div class="container mx-auto px-4">
                <h4 class="text-gray-900 text-5xl font-title font-semibold mb-6">
                    Browse by tags                </h4>
                <ul class="flex flex-wrap">
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/kids#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Kids
                                <span class="font-normal text-base text-gray-600">1328 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/food#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Food
                                <span class="font-normal text-base text-gray-600">720 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/technology#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Technology
                                <span class="font-normal text-base text-gray-600">666 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/travel#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Travel
                                <span class="font-normal text-base text-gray-600">307 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/animal#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Animal
                                <span class="font-normal text-base text-gray-600">690 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/art#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Art
                                <span class="font-normal text-base text-gray-600">539 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/health#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Health
                                <span class="font-normal text-base text-gray-600">2635 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/history#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                History
                                <span class="font-normal text-base text-gray-600">922 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/environment#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Environment
                                <span class="font-normal text-base text-gray-600">325 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/galaxy#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Galaxy
                                <span class="font-normal text-base text-gray-600">144 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/fashion#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Fashion
                                <span class="font-normal text-base text-gray-600">196 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/biology#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Biology
                                <span class="font-normal text-base text-gray-600">308 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/summer#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Summer
                                <span class="font-normal text-base text-gray-600">127 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/architecture#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Architecture
                                <span class="font-normal text-base text-gray-600">109 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/music#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Music
                                <span class="font-normal text-base text-gray-600">307 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/research#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Research
                                <span class="font-normal text-base text-gray-600">1122 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/culture#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Culture
                                <span class="font-normal text-base text-gray-600">1561 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/background#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Background
                                <span class="font-normal text-base text-gray-600">6562 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/finances#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Finances
                                <span class="font-normal text-base text-gray-600">315 templates</span>
                            </a>
                        </li>
                                            <li class="w-1/2 sm:w-1/5 mb-4">
                            <a
                                href="https://slidesgo.com/back-to-school#rs=home"
                                class="flex flex-col text-lg font-bold text-gray-900 hover:text-purple-700 leading-snug"
                            >
                                Back to School
                                <span class="font-normal text-base text-gray-600">152 templates</span>
                            </a>
                        </li>
                                    </ul>
            </div>
        </div>

        
        <div class="flex relative" data-gi="testimonials">
            <div class="hidden sm:block absolute top-0 left-0 bottom-0 w-1/2 bg-purple-600 overflow-hidden">
                <svg alt="Quotes icons" class="fill-current absolute top-0 right-0 mr-40 lg:mr-56 xl:mr-64 -mt-8 text-purple-400 opacity-25 w-48" viewBox="0 0 197 169" xmlns="http://www.w3.org/2000/svg"><path d="M64.6 80.3c-4.5-1-9-1.2-13.4-.8-6.7.6-12.1 2.6-16.3 4.9 2.8-15.8 10.5-43.3 30.3-48 1.8-.5 3.2-2 3.5-3.8l3-16.2a4.8 4.8 0 00-4.4-5.7l-4.5.1c-24 2.1-45.6 29.5-52.4 66.5-4 21.7-3 53.8 13.3 72.6a43.3 43.3 0 0036.7 14.7h.2a42.4 42.4 0 0031.1-66.5 42.4 42.4 0 00-27-17.8zM185.3 90a42.4 42.4 0 00-27-18c-4.6-.8-9.1-1-13.4-.7-6.7.6-12.2 2.6-16.3 4.9 2.8-15.8 10.5-43.3 30.2-48 1.8-.5 3.2-2 3.6-3.8l3-16.2a4.8 4.8 0 00-4.5-5.6h-4.5c-24 2.1-45.5 29.5-52.4 66.5-4 21.7-3 53.8 13.3 72.6a43.3 43.3 0 0036.7 14.7h.2A42.4 42.4 0 00185.3 90z"/></svg>            </div>
            <div class="relative container mx-auto flex px-6">
                <div class="hidden sm:block w-3/12 relative">
                    <svg alt="triangle image" class="fill-current absolute top-0 right-0 h-full w-20" viewBox="0 0 156 330" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M0 330L156 0v330" fill-rule="evenodd"/></svg>                </div>
                <div class="w-full sm:w-9/12 py-12 bg-white sm:pl-4 flex flex-col">
                    <h3 class="text-gray-900 text-5xl font-title font-bold mb-6">What do our users say about us?</h3>
                    <div class="swiper-testimonials overflow-hidden relative sm:-ml-24 h-full">
                        <div class="swiper-wrapper w-full h-full relative flex">
                                                            <div class="swiper-slide shrink-0 w-full relative h-52 sm:h-full flex flex-col sm:flex-row bg-white sm:bg-transparent">
                                    <img src="/images/testimonials/1.jpg" class="h-12 w-12 sm:h-16 sm:w-16 rounded-full sm:border-4 border-white sm:absolute top-0 left-0 mb-4 sm:mb-0 ml-2" alt="user testimonial avatar">
                                    <div class="sm:ml-20 bg-white sm:pl-4 sm:pr-4 xl:pr-16 w-full">
                                        <p class="text-base sm:text-lg italic text-gray-700 mb-4 leading-tight sm:leading-normal">
                                            I just wanted to thank you! I learned more about slides in one day of quarantine than in my whole life                                        </p>
                                        <p class="text-gray-900 font-bold text-base">Gabriela Miranda</p>
                                    </div>
                                </div>
                                                            <div class="swiper-slide shrink-0 w-full relative h-52 sm:h-full flex flex-col sm:flex-row bg-white sm:bg-transparent">
                                    <img src="/images/testimonials/2.jpg" class="h-12 w-12 sm:h-16 sm:w-16 rounded-full sm:border-4 border-white sm:absolute top-0 left-0 mb-4 sm:mb-0 ml-2" alt="user testimonial avatar">
                                    <div class="sm:ml-20 bg-white sm:pl-4 sm:pr-4 xl:pr-16 w-full">
                                        <p class="text-base sm:text-lg italic text-gray-700 mb-4 leading-tight sm:leading-normal">
                                            Your slides are so unique and gorgeous! They really help me with PowerPoint presentations for school and now even my mom uses them for work                                        </p>
                                        <p class="text-gray-900 font-bold text-base">Marie Dupuis</p>
                                    </div>
                                </div>
                                                            <div class="swiper-slide shrink-0 w-full relative h-52 sm:h-full flex flex-col sm:flex-row bg-white sm:bg-transparent">
                                    <img src="/images/testimonials/3.jpg" class="h-12 w-12 sm:h-16 sm:w-16 rounded-full sm:border-4 border-white sm:absolute top-0 left-0 mb-4 sm:mb-0 ml-2" alt="user testimonial avatar">
                                    <div class="sm:ml-20 bg-white sm:pl-4 sm:pr-4 xl:pr-16 w-full">
                                        <p class="text-base sm:text-lg italic text-gray-700 mb-4 leading-tight sm:leading-normal">
                                             I would like to thank to you for these amazing templates. I have never seen such service, especially free! They are very useful for my presentation.                                        </p>
                                        <p class="text-gray-900 font-bold text-base">Ali Serdar Çelikezen</p>
                                    </div>
                                </div>
                                                            <div class="swiper-slide shrink-0 w-full relative h-52 sm:h-full flex flex-col sm:flex-row bg-white sm:bg-transparent">
                                    <img src="/images/testimonials/4.jpg" class="h-12 w-12 sm:h-16 sm:w-16 rounded-full sm:border-4 border-white sm:absolute top-0 left-0 mb-4 sm:mb-0 ml-2" alt="user testimonial avatar">
                                    <div class="sm:ml-20 bg-white sm:pl-4 sm:pr-4 xl:pr-16 w-full">
                                        <p class="text-base sm:text-lg italic text-gray-700 mb-4 leading-tight sm:leading-normal">
                                             Thank you Slidesgo for creating amazing templates for us. It's made my presentation become much better.                                        </p>
                                        <p class="text-gray-900 font-bold text-base">Thiên Trang Nguyễn</p>
                                    </div>
                                </div>
                                                    </div>
                    </div>
                    <div class="swiper-testimonals-pagination transition-opacity duration-300 z-10 hidden lg:block">
                        <div class="swiper-pagination relative text-left mt-4"></div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <script type="application/ld+json">
        {"@context" : "http://schema.org", "@type" : "Organization", "name" : "Slidesgo", "url" : "https://www.slidesgo.com", "logo": "https://slidesgo.com/images/logos/slidesgo.png" }
    </script>

            <script type="text/javascript">
function onetapCallback(googleUser) {
    return fetch(`https://id-api.freepikcompany.com/v2/login/google-one-tap?client_id=slidesgo&lang=en&no-redirect=1`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({ credential: googleUser.credential }),
    }).then(async response => {
        const data = await response.json()

        if (data.success === false || !data.data?.redirectUrl) {
            window.dispatchEvent(
                new CustomEvent('onetaperror', { detail: data?.message ?? 'There was an error, please try again later' })
            );
        } else {
            window.location.href = data.data.redirectUrl;
        }
    });
}

</script>
<div id="onetap-warning" x-data="{ open: false, message: '' }" @onetaperror.window="open=true; message=$event.detail">
    <div class="absolute top-10 right-10 z-20" x-show="open" x-cloak :class="{
        'pointer-events-none hide-after': open
    }">
        <div
    x-data="{show: true}"
    x-show="show"
    class="bg-red-100 text-gray-900 py-3 px-3 rounded text-base mx-auto h-fit" danger="danger"
>
    <div class="flex justify-start">
        <svg class="fill-current h-4 w-4 mr-3 fill-current shrink-0 text-red-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3 13.7a8 8 0 0011.4 0 8 8 0 000-11.4 8 8 0 00-11.4 0 8 8 0 000 11.4zM1.6 8a6.4 6.4 0 1112.9 0 6.4 6.4 0 01-13 0zm6.7 4.6a.8.8 0 01-.8-.8v-4h-.8a.8.8 0 010-1.5h1.6c.4 0 .8.3.8.7v4.8c0 .4-.4.8-.8.8zM7.1 4.4a1 1 0 101.8 0 1 1 0 00-1.8 0z"/></svg>        <div class="text-left">
            
                            <p class="text-gray-900" >
                    <span x-html="message"></span>
                </p>
                    </div>
    </div>
</div>
    </div>
    <div id="g_id_onload"
         data-client_id="705648808057-3chuddbr6oahbebib1uh693k02sgfl30.apps.googleusercontent.com"
         data-login_uri="https://id-api.freepikcompany.com/v2/login/google-one-tap?client_id=slidesgo"
         data-callback="onetapCallback"
    ></div>
</div>
                        <footer class="z-10">
        <div class="pt-8 sm:pt-10 bg-gray-900 text-gray-300 mt-auto">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="flex flex-col items-center mb-8 w-full sm:flex-row sm:items-start sm:justify-between">
                    <div class="flex items-end mb-4 sm:mb-0">
                        <img src="/images/logos/slidesgo-by-freepik.svg" class="h-6 float-left" alt="Slidesgo logo" />
                    </div>
                    <div class="flex flex-col sm:flex-row">
                        <div x-data="{ open: false }" class="relative">
                            <button
                                @click="open = true"
                                class="py-2 px-4 bg-white border border-white text-gray-900 flex justify-center items-center text-base hover:text-gray-800 hover:bg-gray-100 hover:border-gray-100 rounded font-semibold mb-4 sm:mb-0 sm:mr-4 -z-10" aria-label="Open work with us">
                                Work with us                                <svg alt="icon caret" x-bind:class="open ? 'rotate-270' : ''" class="fill-current fill-current h-4 w-4 ml-2 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><defs/><path d="M226.6 397l-92.3 92.3a25 25 0 0035.4 35.4l110-110a25 25 0 000-35.4l-110-110a25 25 0 00-35.4 35.4l92.3 92.3z"/></svg>                            </button>
                            <div x-cloak x-show="open" @click.outside="open = false"
                                class="absolute -right-6 top-12 bg-white rounded-sm py-1 shadow-xl sm:right-4 items-start">
                                <svg alt="icon caret" class="fill-current h-3 w-3 absolute right-10 -top-2 text-white sm:right-4" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0L20 10H0L10 0Z"/>
</svg>                                <a class="block text-gray-800 hover:bg-gray-100 hover:text-gray-900 py-2 px-4 whitespace-nowrap" href="https://slidesgo.com/ambassadors">
                                    Become ambassador                                </a>
                                <a class="block text-gray-800 hover:bg-gray-100 hover:text-gray-900 py-2 px-4 whitespace-nowrap" href="https://slidesgo.com/contributor">
                                    Become contributor                                </a>
                            </div>
                        </div>
                        <a
                            class="py-2 px-4 bg-transparent text-white border border-white text-base flex justify-center items-center hover:bg-white hover:text-gray-900 rounded font-semibold"
                            href="https://forms.gle/mUYJ5G2oCnGoCAQE8"
                            target="_blank"
                        >
                            Suggestion box                        </a>
                    </div>
                </div>
                <div class="w-full order-last sm:w-1/4 flex flex-col items-center mt-8 sm:items-start sm:order-none sm:mt-4">
                    <h3 class="w-full uppercase text-base mb-3 px-6 sm:px-0 font-bold text-center sm:text-left">
                        Social Media                    </h3>
                    <div class="flex flex-wrap items-center justify-start mb-2 sm:grid sm:gap-2 sm:grid-cols-3 xl:grid-cols-5">
                        <a href="https://www.pinterest.es/slidesgo/" target="_blank" rel="noreferrer" class="bg-pinterest rounded flex items-center justify-center p-2 hover:bg-red-800 mr-2 sm:mr-0 focus:outline-none share">
                            <svg alt="Pinterest" class="fill-current h-5 w-5 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M12.053 0.237061C5.513 0.237061 0.184998 5.53806 0.184998 12.1051C0.184998 17.1161 3.323 21.4151 7.727 23.1561C7.622 22.2061 7.543 20.7821 7.78 19.7541C7.991 18.8311 9.178 13.8461 9.178 13.8461C9.178 13.8461 8.835 13.1341 8.835 12.0791C8.835 10.4181 9.785 9.20406 10.971 9.20406C11.974 9.20406 12.475 9.96906 12.475 10.8661C12.475 11.8951 11.815 13.3981 11.499 14.8221C11.209 16.0091 12.079 16.9581 13.266 16.9581C15.376 16.9581 16.985 14.7431 16.985 11.5251C16.985 8.67706 14.954 6.69906 12.026 6.69906C8.651 6.69906 6.673 9.23106 6.673 11.8421C6.673 12.8701 7.068 13.9521 7.543 14.5581C7.648 14.6641 7.648 14.7691 7.622 14.9011C7.542 15.2711 7.332 16.0881 7.305 16.2461C7.253 16.4571 7.121 16.5101 6.91 16.4041C5.433 15.7191 4.51 13.5561 4.51 11.8151C4.51 8.07006 7.226 4.64206 12.343 4.64206C16.457 4.64206 19.648 7.56906 19.648 11.4991C19.648 15.5871 17.064 18.8841 13.503 18.8841C12.29 18.8841 11.183 18.2511 10.787 17.5121C10.787 17.5121 10.18 19.7801 10.048 20.3341C9.785 21.3631 9.046 22.6541 8.571 23.4461C9.679 23.7891 10.866 23.9741 12.079 23.9741C18.619 23.9741 23.947 18.6731 23.947 12.1051C23.895 5.53806 18.593 0.237061 12.053 0.237061Z" /></svg>                        </a>
                        <a href="https://www.tiktok.com/@slidesgotemplates" target="_blank" rel="noreferrer" class="bg-tiktok rounded flex items-center justify-center p-2 hover:bg-red-600 mr-2 sm:mr-0 focus:outline-none share">
                            <svg alt="tiktok" class="fill-current h-5 w-5 text-white" viewBox="0 0 116 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.2 52.0999V46.7999C43.4 46.5999 41.7 46.3999 39.8 46.3999C17.8 46.3999 0 64.2999 0 86.1999C0 99.6999 6.7 111.6 17 118.8C16.8 118.6 16.6 118.4 16.4 118.2C10.1 111.1 6.5 101.9 6.5 91.6999C6.5 69.9999 23.7 52.5999 45.2 52.0999Z" fill="#6AC4D0"/>
<path d="M46.1 110C55.9 110 64.1 102.1 64.4 92.3V5.70001H80.1V5.5C79.8 3.7 79.6 1.9 79.6 0H58V86.8C57.6 96.5 49.6 104.3 39.8 104.3C36.8 104.3 33.9 103.5 31.4 102.2C34.7 106.9 40.1 110 46.1 110Z" fill="#6AC4D0"/>
<path d="M109.8 35.4001V30.2001C103.8 30.2001 98.1 28.4 93.4 25.3C97.6 30.2 103.3 34.0001 109.8 35.4001Z" fill="#6AC4D0"/>
<path d="M93.4 25.3999C88.8 20.0999 86 13.2 86 5.69995H80C81.6 13.9 86.6 20.8999 93.4 25.3999Z" fill="#E83659"/>
<path d="M39.8 67.8C29.8 67.8 21.4 76.1001 21.4 86.2001C21.4 93.2001 25.5 99.3 31.3 102.3C29.1 99.3 27.9 95.6001 27.9 91.7001C27.9 81.7001 36.1 73.5 46.1 73.5C48 73.5 49.8 73.8 51.5 74.3V52.2001C49.7 52.0001 48 51.8 46.1 51.8C45.8 51.8 45.5 51.8 45.2 51.8H45.1V68.5C43.3 68 41.7 67.8 39.8 67.8Z" fill="#E83659"/>
<path d="M109.8 35.1001H109.7L109.6 51.8001C98.4 51.8001 88 48.1001 79.5 42.1001V86.3001C79.5 108.3 61.8 126 39.8 126C31.3 126 23.4 123.5 17 118.9C24.3 126.7 34.6 131.6 46.1 131.6C68.1 131.6 85.9 113.7 85.9 91.8001V47.8001C94.4 53.9001 104.8 57.5001 116 57.5001V35.9001C114 35.7001 111.8 35.5001 109.8 35.1001Z" fill="#E83659"/>
<path d="M79.7 86.2V42.2C88.2 48.3 98.6 51.8999 109.8 51.8999V35.0999C103.3 33.6999 97.6 30.1999 93.4 25.3999C86.6 20.9999 81.7 13.9 80.2 5.69995H64.3V92.4999C63.9 102.2 55.9 110 46.1 110C40 110 34.7 107 31.3 102.4C25.5 99.3999 21.5 93.2999 21.5 86.2999C21.5 76.2999 29.7 68.0999 39.7 68.0999C41.6 68.0999 43.4 68.3999 45.1 68.8999V51.8999C23.6 52.3999 6.20001 70.1 6.20001 91.7C6.20001 102.2 10.3 111.7 16.9 118.8C23.4 123.3 31.2 126 39.7 126C61.8 126 79.7 108.2 79.7 86.2Z"/>
</svg>                        </a>
                        <a href="https://twitter.com/slidesgo" target="_blank" rel="noreferrer" class="bg-twitter rounded flex items-center justify-center p-2 hover:bg-gray-100 mr-2 sm:mr-0 focus:outline-none share">
                            <!-- Generator: Adobe Illustrator 27.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg alt="twitter" class="fill-current h-5 w-5 text-black" version="1.1" id="svg5" xmlns:svg="http://www.w3.org/2000/svg"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1668.56 1221.19"
	 style="enable-background:new 0 0 1668.56 1221.19;" xml:space="preserve">
<g id="layer1" transform="translate(52.390088,-25.058597)">
	<path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/>
</g>
</svg>                        </a>
                        <a href="https://www.instagram.com/slidesgo/" target="_blank" rel="noreferrer" class="bg-instagram rounded flex items-center justify-center p-2 hover:bg-pink-600 mr-2 sm:mr-0 focus:outline-none share">
                            <svg alt="instagram" class="fill-current h-5 w-5 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2224_13585)">
<path d="M11.9992 2.32032C15.1539 2.32032 15.5242 2.33439 16.7711 2.39064C17.9242 2.4422 18.5477 2.63439 18.9648 2.79845C19.518 3.01407 19.9117 3.2672 20.3242 3.6797C20.7367 4.0922 20.9945 4.48595 21.2055 5.03907C21.3648 5.45626 21.5617 6.0797 21.6133 7.23282C21.6695 8.4797 21.6836 8.85001 21.6836 12.0047C21.6836 15.1594 21.6695 15.5297 21.6133 16.7766C21.5617 17.9297 21.3695 18.5531 21.2055 18.9703C20.9898 19.5234 20.7367 19.9172 20.3242 20.3297C19.9117 20.7422 19.518 21 18.9648 21.2109C18.5477 21.3703 17.9242 21.5672 16.7711 21.6188C15.5242 21.675 15.1539 21.6891 11.9992 21.6891C8.84453 21.6891 8.47422 21.675 7.22734 21.6188C6.07422 21.5672 5.45078 21.375 5.03359 21.2109C4.48047 20.9953 4.08672 20.7422 3.67422 20.3297C3.26172 19.9172 3.00391 19.5234 2.79297 18.9703C2.63359 18.5531 2.43672 17.9297 2.38516 16.7766C2.32891 15.5297 2.31484 15.1594 2.31484 12.0047C2.31484 8.85001 2.32891 8.4797 2.38516 7.23282C2.43672 6.0797 2.62891 5.45626 2.79297 5.03907C3.00859 4.48595 3.26172 4.0922 3.67422 3.6797C4.08672 3.2672 4.48047 3.00939 5.03359 2.79845C5.45078 2.63907 6.07422 2.4422 7.22734 2.39064C8.47422 2.3297 8.84453 2.32032 11.9992 2.32032ZM11.9992 0.1922C8.79297 0.1922 8.38985 0.206262 7.12891 0.262512C5.87266 0.318762 5.01484 0.520325 4.26484 0.81095C3.48672 1.11095 2.83047 1.51876 2.17422 2.17501C1.51797 2.83126 1.11484 3.4922 0.810156 4.26564C0.519531 5.01564 0.317969 5.87345 0.261719 7.13439C0.205469 8.39063 0.191406 8.79376 0.191406 12C0.191406 15.2063 0.205469 15.6094 0.261719 16.8703C0.317969 18.1266 0.519531 18.9844 0.810156 19.7391C1.11016 20.5172 1.51797 21.1734 2.17422 21.8297C2.83047 22.4859 3.49141 22.8891 4.26484 23.1938C5.01484 23.4844 5.87266 23.6859 7.13359 23.7422C8.39453 23.7984 8.79297 23.8125 12.0039 23.8125C15.2148 23.8125 15.6133 23.7984 16.8742 23.7422C18.1305 23.6859 18.9883 23.4844 19.743 23.1938C20.5211 22.8938 21.1773 22.4859 21.8336 21.8297C22.4898 21.1734 22.893 20.5125 23.1977 19.7391C23.4883 18.9891 23.6898 18.1313 23.7461 16.8703C23.8023 15.6094 23.8164 15.2109 23.8164 12C23.8164 8.78907 23.8023 8.39064 23.7461 7.1297C23.6898 5.87345 23.4883 5.01564 23.1977 4.26095C22.8977 3.48282 22.4898 2.82657 21.8336 2.17032C21.1773 1.51407 20.5164 1.11095 19.743 0.806262C18.993 0.515637 18.1352 0.314075 16.8742 0.257825C15.6086 0.206262 15.2055 0.1922 11.9992 0.1922Z"/>
<path d="M11.9997 5.93439C8.65283 5.93439 5.93408 8.64845 5.93408 12C5.93408 15.3516 8.65283 18.0656 11.9997 18.0656C15.3466 18.0656 18.0653 15.3469 18.0653 12C18.0653 8.65314 15.3466 5.93439 11.9997 5.93439ZM11.9997 15.9375C9.82471 15.9375 8.06221 14.175 8.06221 12C8.06221 9.82501 9.82471 8.06251 11.9997 8.06251C14.1747 8.06251 15.9372 9.82501 15.9372 12C15.9372 14.175 14.1747 15.9375 11.9997 15.9375Z"/>
<path d="M18.3043 7.11097C19.0861 7.11097 19.7199 6.47718 19.7199 5.69535C19.7199 4.91352 19.0861 4.27972 18.3043 4.27972C17.5225 4.27972 16.8887 4.91352 16.8887 5.69535C16.8887 6.47718 17.5225 7.11097 18.3043 7.11097Z"/>
</g>
<defs>
</defs>
</svg>                        </a>
                        <a href="https://www.youtube.com/channel/UCwitIiMU0oUOHshx4pywqaw" target="_blank" rel="noreferrer" class="bg-youtube rounded flex items-center justify-center p-2 hover:bg-red-700 mr-2 sm:mr-0 focus:outline-none share">
                            <svg alt="youtube icon" class="fill-current h-5 w-5 text-white" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.35814 7.75533V3.14959L10.54 5.45255L6.35814 7.75533ZM15.6601 1.7004C15.4761 1.02967 14.934 0.501492 14.2456 0.322236C12.9979 -0.00354004 7.99451 -0.00354004 7.99451 -0.00354004C7.99451 -0.00354004 2.99114 -0.00354004 1.74342 0.322236C1.05505 0.501492 0.51287 1.02967 0.32887 1.7004C-0.00549316 2.91604 -0.00549316 5.45246 -0.00549316 5.45246C-0.00549316 5.45246 -0.00549316 7.9888 0.32887 9.20452C0.51287 9.87525 1.05505 10.4034 1.74342 10.5828C2.99114 10.9085 7.99451 10.9085 7.99451 10.9085C7.99451 10.9085 12.9979 10.9085 14.2456 10.5828C14.934 10.4034 15.4761 9.87525 15.6601 9.20452C15.9945 7.9888 15.9945 5.45246 15.9945 5.45246C15.9945 5.45246 15.9945 2.91604 15.6601 1.7004V1.7004Z"/>
</svg>                        </a>
                    </div>
                </div>
                <div x-data="{ open: false }" class="w-full sm:w-1/4 sm:pr-4 flex flex-col items-center sm:items-start sm:mt-4">
                    <h3 @click="open = true" class="w-full uppercase text-base mb-4 px-6 sm:px-0 font-bold flex items-center justify-between">
                        Content                        <svg alt="caret icon" x-bind:class="open ? 'rotate-270' : ''" class="fill-current sm:hidden fill-current h-5 w-5 ml-1 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><defs/><path d="M226.6 397l-92.3 92.3a25 25 0 0035.4 35.4l110-110a25 25 0 000-35.4l-110-110a25 25 0 00-35.4 35.4l92.3 92.3z"/></svg>                    </h3>
                    <ul x-cloak x-show="open" @click.outside="open = false" id="dropdown-footer" class="p-0 sm:flex flex-wrap px-6 sm:px-0 w-full">
                        <li class="sm:w-1/2">
                            <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com">Home</a>
                        </li>
                        <li class="sm:w-1/2">
                            <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/recent">Recent</a>
                        </li>

                        <li class="sm:w-1/2 ">
                            <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/themes">Popular</a>
                        </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/planner#rs=footer">Planner</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/notebook#rs=footer">Notebook</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/a4#rs=footer">A4</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/education#rs=footer">Education</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesclass#rs=footer">Slidesclass</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/business#rs=footer">Business</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/marketing#rs=footer">Marketing</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/medical#rs=footer">Medical</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/multi-purpose#rs=footer">Multi-purpose</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/technology#rs=footer">Technology</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/lesson#rs=footer">Lesson</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/school#rs=footer">School</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/infographics#rs=footer">Infographics</a>
                            </li>
                                                    <li class="sm:w-1/2">
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/coloring-page#rs=footer">Coloring Page</a>
                            </li>
                                            </ul>
                </div>
                <div x-data="{ open: false }" class="w-full sm:w-1/4 flex flex-col items-center sm:items-start sm:mt-4">
                    <h3 @click="open = true" class="w-full uppercase text-base my-4 sm:mb-4 sm:mt-0 px-6 sm:px-0 font-bold flex items-center justify-between">
                        Learn                        <svg x-bind:class="open ? 'rotate-270' : ''" class="fill-current sm:hidden fill-current h-5 w-5 ml-1 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><defs/><path d="M226.6 397l-92.3 92.3a25 25 0 0035.4 35.4l110-110a25 25 0 000-35.4l-110-110a25 25 0 00-35.4 35.4l92.3 92.3z"/></svg>                    </h3>
                    <ul x-show="open" @click.outside="open = false" id="dropdown-footer" class="p-0 sm:flex flex-col px-6 sm:px-0 w-full">
                        <li>
                            <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesgo-school">Blog</a>
                        </li>
                                                    <li>
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesgo-school/news">News</a>
                            </li>
                                                    <li>
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesgo-school/inspiration-by-slidesgo">Inspiration by Slidesgo</a>
                            </li>
                                                    <li>
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesgo-school/presentation-tips">Presentation Tips</a>
                            </li>
                                                    <li>
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesgo-school/google-slides-tutorials">Google Slides Tutorials</a>
                            </li>
                                                    <li>
                                <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/slidesgo-school/powerpoint-tutorials">PowerPoint Tutorials</a>
                            </li>
                                            </ul>
                </div>
                <div x-data="{ open: false }" class="w-full sm:w-1/4 flex flex-col items-center sm:items-start sm:mt-4">
                    <h3 @click="open = true" class="w-full uppercase text-base my-4 sm:mb-4 sm:mt-0 px-6 sm:px-0 font-bold flex items-center justify-between">
                        Help                        <svg x-bind:class="open ? 'rotate-270' : ''" class="fill-current sm:hidden fill-current h-5 w-5 ml-1 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><defs/><path d="M226.6 397l-92.3 92.3a25 25 0 0035.4 35.4l110-110a25 25 0 000-35.4l-110-110a25 25 0 00-35.4 35.4l92.3 92.3z"/></svg>                    </h3>
                    <ul x-cloak x-show="open" @click.outside="open = false" id="dropdown-footer" class="p-0 sm:flex flex-wrap px-6 sm:px-0 w-full">
                        <li
                                                        class="sm:w-1/2"
                            >
                            <ul>
                                <li class="sm:pr-2">
                                    <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/faqs">FAQs</a>
                                </li>
                                <li class="sm:pr-2">
                                    <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/profile/support">Contact</a>
                                </li>
                                <li class="sm:pr-2 hidden sm:block">
                                    <button id="ot-sdk-btn" class="ot-sdk-show-settings text-gray-300 mb-2 inline-block text-base hover:text-gray-300">Cookie Settings</button>
                                </li>
                                <li class="sm:pr-2">
                                    <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://slidesgo.com/terms-conditions">Terms & conditions</a>
                                </li>
                                                                                                    <li class="sm:pr-2" id="footer-community-link">
                                        <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" target="_blank" href="https://slidesgo-community.circle.so/join?invitation_token=789ada186939aa931122ff8241e9c818be94dd10-903ef7eb-48a0-495c-880e-394e0ce73ff8">Slidesgo Educator Community</a>
                                    </li>
                                                            </ul>
                            </li>
                            <!--mobile:text-xs -->
                            <li                                 class="sm:w-1/2"
                            >
                            <ul>
                                <li>
                                    <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://www.freepikcompany.com/privacy">Privacy policy</a>
                                </li>
                                                                    <li>
                                        <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://www.freepikcompany.com/cookie" target="_blank" rel="noreferrer">Cookies policy</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://www.freepikcompany.com/digital-services-act" target="_blank" rel="noreferrer">Digital Services Act</a>
                                    </li>
                                    <li>
                                        <a class="text-gray-300 mb-2 inline-block text-base hover:text-gray-300" href="https://www.freepikcompany.com/about_us" target="_blank" rel="noreferrer">About us</a>
                                    </li>
                                                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="bg-gray-900 text-gray-300">
        <div class="container mx-auto text-center flex flex-col sm:flex-row items-baseline justify-between pt-4 sm:pt-12 mb-6 px-8 sm:px-0">
            <div class="flex flex-col text-base sm:flex-row sm:items-center sm:justify-start">
                <p class="leading-normal text-gray-300">Copyright ©2024 Freepik Company S.L. All rights reserved.</p>
            </div>
            <div x-data="{ open: false }" class="relative mt-4 sm:mt-0">
            <button @click="open = true" class="flex items-center border border-white rounded py-2 px-4 text-base text-white font-bold hover:bg-white hover:text-gray-900 focus:outline-none">
                English
                <svg alt="icon caret" x-bind:class="open ? 'rotate-270' : ''" class="fill-current fill-current h-4 w-4 ml-1 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512"><defs/><path d="M226.6 397l-92.3 92.3a25 25 0 0035.4 35.4l110-110a25 25 0 000-35.4l-110-110a25 25 0 00-35.4 35.4l92.3 92.3z"/></svg>            </button>

            <div x-cloak x-show="open" @click.outside="open = false" class="absolute right-0 bottom-0 bg-white w-28 lg:w-40 rounded-sm mb-14 py-2 shadow-tooltip">
                <svg alt="icon caret" class="fill-current h-3 w-3 absolute right-5 -bottom-2 text-white transform rotate-180" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0L20 10H0L10 0Z"/>
</svg>                                    <a hreflang="es" href="https://slidesgo.com/es/" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">Español</a>
                                    <a hreflang="es-mx" href="https://slidesgo.com/es-mx/" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">Español (México)</a>
                                    <a hreflang="en" href="https://slidesgo.com" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">English</a>
                                    <a hreflang="pt" href="https://slidesgo.com/pt/" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">Português</a>
                                    <a hreflang="fr" href="https://slidesgo.com/fr/" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">Français</a>
                                    <a hreflang="de" href="https://slidesgo.com/de/" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">Deutsch</a>
                                    <a hreflang="ko" href="https://slidesgo.com/ko/" class="block text-gray-800 hover:bg-gray-100 py-2 px-4 text-base text-left">한국어</a>
                            </div>
        </div>
            </div>

        <div class="container mx-auto flex flex-col sm:flex-row items-center sm:justify-between text-sm text-gray-200 pt-4 pb-6 border-t border-gray-800 px-8 sm:px-0">
            <strong>Freepik Company Projects</strong>
            <ul class="flex-1 flex justify-end mt-2 sm:mt-0 w-full sm:w-auto ml-auto">
                <li class="mb-0 flex-1 sm:flex-initial">
                    <a class="block sm:inline text-center px-2 mb-0 text-gray-300 text-sm font-bold hover:text-gray-400"
                                                href="https://www.freepik.com/"
                                            target="_blank" rel="noreferrer">Freepik
                    </a>
                </li>
                <li class="mb-0 flex-1 sm:flex-initial">
                    <a class="block sm:inline text-center px-2 mb-0 text-gray-300 text-sm font-bold hover:text-gray-400"
                                                href="https://www.flaticon.com/"
                                            target="_blank" rel="noreferrer">Flaticon</a>
                </li>
                <li class="mb-0 flex-1 sm:flex-initial">
                    <a class="block sm:inline text-center px-2 mb-0 text-gray-300 text-sm font-bold hover:text-gray-400" href="https://slidesgo.com" rel="noreferrer">
                        Slidesgo
                    </a>
                </li>
                <li class="mb-0 flex-1 sm:flex-initial">
                    <a class="block sm:inline text-center px-2 mb-0 text-gray-300 text-sm font-bold hover:text-gray-400" href="https://wepik.com/" target="_blank" rel="noreferrer">
                        Wepik
                    </a>
                </li>
                <li class="mb-0 flex-1 sm:flex-initial">
                    <a class="block sm:inline text-center px-2 mb-0 text-gray-300 text-sm font-bold hover:text-gray-400" href="https://www.videvo.net/" target="_blank" rel="noreferrer">
                        Videvo
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132705033-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
                    gtag('set', {'content_group1': 'home'});
    
    gtag('set', {
        'dimension1':
                                    'anonymous'
                });
    gtag('config', 'UA-132705033-1', {
        'optimize_id': 'OPT-WQSHHXF',
        'linker': {
            'domains': ['freepikcompany.com']
        }
    });
</script>


<script src='https://cdn.ranksci.com/slidesgo-443963.min.js' type='text/javascript' async></script>

<script>
    window.slg = window.slg || {};
            window.slg.viewTag = 'home'
    LUX = window.LUX || {};
    LUX.label = "home";
            window.slg.userId = "";
    window.slg.fpUserId = "";
    window.slg.userCountry = "";
    window.slg.userType = "anonymous";
    window.slg.totalResults = 0;
    window.slg.nextSearchExpression = "";

    
</script>

<script src="/vendor/livewire/livewire.js?id=90730a3b0e7144480175" data-turbo-eval="false" data-turbolinks-eval="false" ></script><script data-turbo-eval="false" data-turbolinks-eval="false" >window.livewire = new Livewire();window.Livewire = window.livewire;window.livewire_app_url = '';window.livewire_token = '';window.deferLoadingAlpine = function (callback) {window.addEventListener('livewire:load', function () {callback();});};let started = false;window.addEventListener('alpine:initializing', function () {if (! started) {window.livewire.start();started = true;}});document.addEventListener("DOMContentLoaded", function () {if (! started) {window.livewire.start();started = true;}});</script>
<script src="/js/alpine.js?id=fa129feea8581693b5b4"></script>

    <script type="text/javascript" src="/js/home.js?id=158aad2aac89ffe7ce8f"></script>
    <script type="text/javascript" src="/js/article-list.js?id=cdabf06a36f0ff9a9747"></script>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
<script type="text/javascript" src="/js/searcher.js?id=46f160b457a063147a54"></script>
<script src="/js/app.js?id=a934e72df05078d23b67"></script>
<script>
    gtm.pageView(null, null)
</script>

<div
    x-data="{modalOpen: false, closeable: true}" x-cloak="x-cloak" x-show="modalOpen" @download-editable-guest-modal.window="modalOpen = true" x-on:keyup.escape.window="modalOpen = false"
            x-data="{ modalOpen: false, closeable : 1, ...{} }"
        x-ref="self"
            x-init="document.querySelector('body').appendChild($refs.self)"
        x-on:keyup.escape.window="!closeable ? modalOpen = false : ''"
>
    <div
        x-cloak
        x-show="modalOpen"
        x-transition:enter="transition ease-out duration-300 transform"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-200 transform"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="origin-center fixed inset-0 z-30 flex items-center justify-center px-4 overflow-auto"
    >
                    <div class="bg-opacity-50 bg-gray-900 fixed inset-0 z-10" x-on:click="modalOpen = false" data-testid="out-premium-modal">
                            </div>
                <div
                        class="bg-white relative z-15 flex flex-col items-center justify-center p-6 sm:p-8 rounded max-w-sm sm:max-w-lg" id="modal-editor"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline">
            
                        <div class="relative landscape:hidden lg:landscape:flex h-auto w-auto flex justify-center items-center">
                                                                    <img src="/images/illustrations/premium-creativity.png" loading="lazy" class="object-contain mb-4 hidden md:flex w-3/4 h-3/4 2xl:w-full 2xl:h-full"/>
                                            </div>
                            <h3
                    class="text-center text-4xl font-semibold font-title mb-3 leading-tight text-gray-900 sm:text-6xl"
                >
                    Register for free and start editing online
                </h3>
                                        <div class="mb-4 text-gray-800 text-lg text-center leading-relaxed w-full">Just one quick step before editing: Sign up to Slidesgo. By registering in Slidesgo, you will be able to edit online templates and download up to 5 templates per month. If you are already registered, log in!</div>
                                        <div class="flex items-center justify-center w-full"><button
            x-on:click="modalOpen = false;"
            class="group absolute top-0 right-0 cursor-pointer hover:bg-gray-200 focus:outline-none rounded w-10 h-10 mt-2 mr-2 flex items-center justify-center"
        >
            <svg class="fill-current w-3.5 h-3.5 text-gray-600 group-hover:text-gray-800 transition-all duration-300" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg"><path d="M368.7 339.4L35.9 6.6A20.7 20.7 0 006.6 36l332.8 332.8a20.7 20.7 0 1029.3-29.3z"/><path d="M339.4 6.6L6.6 339.4A20.7 20.7 0 1036 368.7L368.7 35.9a20.7 20.7 0 10-29.3-29.3z"/></svg>        </button>
        <form method="POST" action="https://slidesgo.com/auth/login" class="flex items-center justify-center sm:justify-start">
            <input type="hidden" name="_token" value="" autocomplete="off">            <input type="hidden" value="en.home" name="login-route"/>
            <input type="hidden" value="modal-editor" name="login-from"/>
            <input type="hidden" value="en" name="language"/>
            <button
                data-cy="register"
                type="submit"
                onclick="gtm.login('Register', 'https://slidesgo.com/auth/login', 'editor_modal');"
                class="rounded h-12 px-6 text-lg text-white font-semibold bg-gray-900 hover:bg-gray-800 active:bg-gray-700"
            >
                Register            </button>
        </form></div>
                    </div>
    </div>
</div>



    <script>
        (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:1330819,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>

<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"846c51c35e4b11b3","version":"2023.10.0","token":"08e518c428c0465b8398e1f267f32687"}' crossorigin="anonymous"></script>
</body>
</html>
