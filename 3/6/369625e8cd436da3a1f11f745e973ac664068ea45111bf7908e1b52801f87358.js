var _hsp = window['_hsp'] = window['_hsp'] || [];
_hsp.push(['setBannerSettings', {}]);
_hsp.push(['setCustomizationSettings', {}]);
_hsp.push(['addCookieDomain', '.wrightsmedia.com']);
_hsp.push(['addCookieDomain', '.hsforms.com']);
_hsp.push(['addCookieDomain', '.hs-sites.com']);
_hsp.push(['addCookieDomain', '.hubspot.com']);
_hsp.push(['addCookieDomain', '.hubspotpagebuilder.com']);
_hsp.push(['setApiBaseUrl', 'https://js.hs-banner.com/v2']);
/**
 * HubSpot Cookie Banner Code Copyright 2024 HubSpot, Inc.  http://www.hubspot.com
 */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};e[o].call(i.exports,i,i.exports,n);i.l=!0;return i.exports}n.m=e;n.c=t;n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})};n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};n.t=function(e,t){1&t&&(e=n(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);n.r(o);Object.defineProperty(o,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o};n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="//static.hsappstatic.net/cookie-banner-js/static-1.1671/";n(n.s=4)}([function(e,t,n){var o;function s(){var e,t;t=arguments[0]||{};this.config={};this.config.elements=t.elements?t.elements:[];this.config.attributes=t.attributes?t.attributes:{};this.config.attributes[s.ALL]=this.config.attributes[s.ALL]?this.config.attributes[s.ALL]:[];this.config.allow_comments=!!t.allow_comments&&t.allow_comments;this.allowed_elements={};this.config.protocols=t.protocols?t.protocols:{};this.config.add_attributes=t.add_attributes?t.add_attributes:{};this.dom=t.dom?t.dom:document;for(e=0;e<this.config.elements.length;e++)this.allowed_elements[this.config.elements[e]]=!0;this.config.remove_element_contents={};this.config.remove_all_contents=!1;if(t.remove_contents)if(t.remove_contents instanceof Array)for(e=0;e<t.remove_contents.length;e++)this.config.remove_element_contents[t.remove_contents[e]]=!0;else this.config.remove_all_contents=!0;this.transformers=t.transformers?t.transformers:[]}s.REGEX_PROTOCOL=/^([A-Za-z0-9\+\-\.\&\;\*\s]*?)(?:\:|&*0*58|&*x0*3a)/i;s.RELATIVE="__RELATIVE__";s.ALL="__ALL__";s.prototype.clean_node=function(e){var t=this.dom.createDocumentFragment();this.current_element=t;this.whitelist_nodes=[];function n(e,t){var n;for(n=0;n<t.length;n++)if(t[n]==e)return n;return-1}function o(){var e,t,n=[],o={};for(e=0;e<arguments.length;e++)if(arguments[e]&&arguments[e].length)for(t=0;t<arguments[e].length;t++)if(!o[arguments[e][t]]){o[arguments[e][t]]=!0;n.push(arguments[e][t])}return n}function r(e){var t;switch(e.nodeType){case 1:a.call(this,e);break;case 3:case 5:t=e.cloneNode(!1);this.current_element.appendChild(t);break;case 8:if(this.config.allow_comments){t=e.cloneNode(!1);this.current_element.appendChild(t)}break;default:console&&console.log&&console.log("unknown node type",e.nodeType)}}function a(e){var t,i,a,l,h,d,u,_,f,g,m=c.call(this,e);a=(e=m.node).nodeName.toLowerCase();i=this.current_element;if(this.allowed_elements[a]||m.whitelist){this.current_element=this.dom.createElement(e.nodeName);i.appendChild(this.current_element);var p=this.config.attributes;l=o(p[a],p[s.ALL],m.attr_whitelist);for(t=0;t<l.length;t++){d=l[t];if(h=e.attributes[d]){g=!0;if(this.config.protocols[a]&&this.config.protocols[a][d]){_=this.config.protocols[a][d];g=(f=h.value.toLowerCase().match(s.REGEX_PROTOCOL))?-1!=n(f[1],_):-1!=n(s.RELATIVE,_)}if(g){(u=document.createAttribute(d)).value=h.value;this.current_element.setAttributeNode(u)}}}if(this.config.add_attributes[a])for(d in this.config.add_attributes[a]){(u=document.createAttribute(d)).value=this.config.add_attributes[a][d];this.current_element.setAttributeNode(u)}}else if(-1!=n(e,this.whitelist_nodes)){this.current_element=e.cloneNode(!0);for(;this.current_element.childNodes.length>0;)this.current_element.removeChild(this.current_element.firstChild);i.appendChild(this.current_element)}if(!this.config.remove_all_contents&&!this.config.remove_element_contents[a])for(t=0;t<e.childNodes.length;t++)r.call(this,e.childNodes[t]);this.current_element.normalize&&this.current_element.normalize();this.current_element=i}function c(e){var t,i,s,r={attr_whitelist:[],node:e,whitelist:!1};for(t=0;t<this.transformers.length;t++)if(null!=(s=this.transformers[t]({allowed_elements:this.allowed_elements,config:this.config,node:e,node_name:e.nodeName.toLowerCase(),whitelist_nodes:this.whitelist_nodes,dom:this.dom}))){if("object"!=typeof s)throw new Error("transformer output must be an object or null");if(s.whitelist_nodes&&s.whitelist_nodes instanceof Array)for(i=0;i<s.whitelist_nodes.length;i++)-1==n(s.whitelist_nodes[i],this.whitelist_nodes)&&this.whitelist_nodes.push(s.whitelist_nodes[i]);r.whitelist=!!s.whitelist;s.attr_whitelist&&(r.attr_whitelist=o(r.attr_whitelist,s.attr_whitelist));r.node=s.node?s.node:r.node}return r}for(i=0;i<e.childNodes.length;i++)r.call(this,e.childNodes[i]);t.normalize&&t.normalize();return t};void 0!==(o=function(){return s}.apply(t,[]))&&(e.exports=o)},function(e,t){e.exports='@font-face{font-family:Lato;font-display:swap;src:local("Lato-Regular"),url(https://api_base_url/fonts/Lato/Lato-Regular.woff2) format("woff2"),url(https://api_base_url/fonts/Lato/Lato-Regular.woff) format("woff")}@font-face{font-family:Lato;font-style:italic;font-display:swap;src:local("Lato-Italic"),url(https://api_base_url/fonts/Lato/Lato-Italic.woff2) format("woff2"),url(https://api_base_url/fonts/Lato/Lato-Italic.woff) format("woff")}@font-face{font-family:Lato;font-weight:800;font-display:swap;src:local("Lato-Bold"),url(https://api_base_url/fonts/Lato/Lato-Bold.woff2) format("woff2"),url(https://api_base_url/fonts/Lato/Lato-Bold.woff) format("woff")}#hs-banner-parent div,#hs-banner-parent p{color:inherit}#hs-banner-parent *{font-size:inherit;font-family:inherit;background:none;border:none;box-shadow:none;box-sizing:border-box;margin:0;padding:0;display:inline-block;line-height:1.75em}#hs-banner-parent .hs-hidden{display:none!important}#hs-banner-parent #hs-banner-gpc{font-size:var(--hs-banner-font-size,14px);font-family:Lato;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0));-webkit-transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0)) translateZ(3000000000px)}#hs-banner-gpc #hs-banner-gpc-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-banner-gpc #hs-banner-gpc-header{display:flex;flex-direction:row;justify-content:flex-end}#hs-banner-gpc #hs-banner-gpc-close-button{cursor:pointer;display:block}#hs-banner-gpc #hs-banner-gpc-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-banner-parent #hs-eu-cookie-confirmation{font-size:var(--hs-banner-font-size,14px);font-family:Lato;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0));-webkit-transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0)) translateZ(3000000000px)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner button:focus{box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px -webkit-focus-ring-color}#hs-eu-cookie-confirmation #hs-eu-header-container{display:var(--hs-banner-close-button-display,none);flex-direction:row;justify-content:flex-end}#hs-eu-cookie-confirmation #hs-eu-close-button{cursor:pointer;display:block}#hs-eu-cookie-confirmation #hs-eu-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-buttons-area{display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:baseline}#hs-eu-cookie-confirmation #hs-eu-confirmation-button-group,#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{flex-grow:1}#hs-eu-cookie-confirmation #hs-eu-confirmation-button,#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button,#hs-eu-cookie-confirmation #hs-eu-decline-button{flex:1;cursor:pointer;border-radius:var(--hs-banner-button-corners,3em);min-width:11em;height:3.3em}#hs-eu-cookie-confirmation #hs-eu-confirmation-button{color:var(--hs-banner-accept-text-color,#fff);background:var(--hs-banner-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-decline-button{color:var(--hs-banner-decline-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-decline-color,#fff);border:1px solid var(--hs-banner-decline-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button{text-decoration:underline;font-weight:800;color:var(--hs-banner-settings-text-color,var(--hs-banner-accentColor,#425b76))}@media print{#hs-banner-gpc,#hs-eu-cookie-confirmation{display:none!important}}'},function(e,t){e.exports="#hs-banner-parent #hs-modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.28);display:flex;justify-content:center;align-items:center;z-index:3000000001;-webkit-transform:translateZ(3000000001px)}@media print{#hs-banner-parent #hs-modal{display:none!important}}#hs-banner-parent #hs-modal-content{position:absolute;display:flex;flex-direction:column;gap:1.1em;padding:var(--hs-banner-modal-padding,2.2em);width:calc(min(var(--hs-banner-modal-width, 50.3em), 100%));max-height:80%;background-color:var(--hs-banner-modal-color,#fafbff);border-radius:var(--hs-banner-modal-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);font-size:var(--hs-banner-modal-font-size,14px);font-family:Lato;font-weight:400;line-height:1.75em;color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-header-container{display:flex;flex-direction:row;justify-content:flex-end}#hs-modal-content #hs-modal-close-button{cursor:pointer;display:block}#hs-modal-content #hs-modal-close-button svg{width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-body{overflow:auto}#hs-modal-content #hs-modal-body-container{position:relative;display:flex;flex-flow:column;gap:1.1em;height:100%;width:100%}#hs-modal-content #hs-modal-introduction{display:inline-block}#hs-modal-content #hs-modal-introduction span{font-weight:800;font-size:1.3em;color:inherit}#hs-modal-content #hs-categories-container{display:flex;flex-direction:column;gap:1.1em}#hs-modal-content #hs-categories-container .hs-category-row{display:flex;flex-direction:column;background:var(--hs-banner-modal-cateogry-color,#fff);border-radius:var(--hs-banner-modal-category-corners,var(--hs-banner-modal-corners,12px));padding:2em}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-input{opacity:0;width:100%;height:100%;cursor:pointer}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch{width:calc(3.4em + 6px);height:calc(1.7em + 6px);position:relative;background-color:var(--hs-banner-modal-toggle-off-color,#f1f1f1);border:3px solid var(--hs-banner-modal-toggle-off-color,#f1f1f1);border-radius:1.7em;transition:background-color .2s ease,border-color .2s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-nob{position:absolute;height:1.7em;width:1.7em;left:0;border-radius:inherit;box-shadow:0 2px 5px rgba(0,0,0,.3);background:var(--hs-banner-modal-cateogry-color,#fff);transition:left .5s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag{background-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76));border-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag .hs-toggle-switch-nob{left:50%}#hs-modal-content #hs-categories-container .description-accordion-arrow{transition:transform .2s;width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .description-accordion-arrow.rotated{transform:rotate(90deg)}#hs-modal-content #hs-categories-container .hs-category-description{transition:max-height .2s;box-sizing:border-box;overflow:hidden;opacity:0}#hs-modal-content #hs-categories-container .hs-category-description.visible{opacity:1;color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .hs-category-row-header{display:flex;justify-content:space-between;align-items:center}#hs-modal-content #hs-categories-container .hs-category-label{display:flex;flex-grow:1;gap:1.1em;align-items:center;justify-content:left;font-weight:800;color:var(--hs-banner-modal-category-text-color,#15295a);cursor:pointer}#hs-modal-content #hs-categories-container .hs-always-active-label{color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-modal-footer{display:flex;justify-content:flex-end}#hs-modal-content #hs-modal-footer-container{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-modal-content #hs-modal-accept-all,#hs-modal-content #hs-modal-save-settings{flex:1;border-radius:var(--hs-banner-modal-button-corners,3em);min-width:11em;height:3.3em;cursor:pointer}#hs-modal-content #hs-modal-accept-all{color:var(--hs-banner-modal-accept-text-color,#fafbff);background:var(--hs-banner-modal-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-modal-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-modal-save-settings{color:var(--hs-banner-modal-save-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-modal-save-color,#fafbff);border:1px solid var(--hs-banner-modal-save-border-color,var(--hs-banner-accentColor,#425b76))}"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="<unknown>";function i(e){return e.split("\n").reduce((function(e,t){var n=a(t)||l(t)||u(t)||m(t)||f(t);n&&e.push(n);return e}),[])}var s=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,r=/\((\S*)(?::(\d+))(?::(\d+))\)/;function a(e){var t=s.exec(e);if(!t)return null;var n=t[2]&&0===t[2].indexOf("native"),i=t[2]&&0===t[2].indexOf("eval"),a=r.exec(t[2]);if(i&&null!=a){t[2]=a[1];t[3]=a[2];t[4]=a[3]}return{file:n?null:t[2],methodName:t[1]||o,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var c=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function l(e){var t=c.exec(e);return t?{file:t[2],methodName:t[1]||o,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var h=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,d=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function u(e){var t=h.exec(e);if(!t)return null;var n=t[3]&&t[3].indexOf(" > eval")>-1,i=d.exec(t[3]);if(n&&null!=i){t[3]=i[1];t[4]=i[2];t[5]=null}return{file:t[3],methodName:t[1]||o,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var _=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function f(e){var t=_.exec(e);return t?{file:t[3],methodName:t[1]||o,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var g=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function m(e){var t=g.exec(e);return t?{file:t[2],methodName:t[1]||o,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}t.parse=i},function(e,t,n){"use strict";n.r(t);const o="_hspb_loaded",i="_hsp",s="_hsq",r="_hsGeoTargetingTest",a="_hsGpcSignal",c="_hsScanningMode",l="_hspb_ran",h="hsdbg",d="_hsPrivacyTest",u="hs-eu-cookie-confirmation",_="hs-banner-gpc",f="hs-banner-parent",g="hs-modal",m="hs-modal-content",p={NECESSARY:"necessary",ANALYTICS:"analytics",ADVERTISEMENT:"advertisement",FUNCTIONALITY:"functionality"},b="hs-hidden",y="hs-banner-style",v="hs-banner-modal-style",C="disabledHsPopups",x="PRIVACY";class S{constructor(e,t){this.win=e;this.doc=t;this.hasLoadedBaseStyle=!1;this.hasLoadedCbcStyle=!1}setHasLoadedBaseStyle(e){this.hasLoadedBaseStyle=e}setHasLoadedCbcStyle(e){this.hasLoadedCbcStyle=e}getWindow(){return this.win}getDocument(){return this.doc}getNavigator(){return this.getWindow().navigator}getLocation(){return this.getWindow().location}getPathname(){return this.getLocation().pathname}getHostname(){try{return this.getLocation().hostname}catch(e){return this.getDocument().domain}}getHasLoadedBaseStyle(){return this.hasLoadedBaseStyle}getHasLoadedCbcStyle(){return this.hasLoadedCbcStyle}}const w=new S(window,document);function T(){return w}class k{constructor(e){this.logPrepend="[HubSpot cookie banner]";this.context=e}info(e){this.isDebugEnabled()&&this.context.getWindow().console.log(`${this.logPrepend} ${e}`)}debug(e){this.isDebugEnabled()&&this.context.getWindow().console.debug(`${this.logPrepend} ${e}`)}error(e){this.isDebugEnabled()&&this.context.getWindow().console.error(`${this.logPrepend} ${e}`)}isDebugEnabled(){return this.context.getDocument().location.search.includes(h)}}var O=new k(T());const E=[0,0,0],I=e=>e.some(e=>e>0),L=(e,t)=>(e.map((e,n)=>e-t[n]).find(e=>0!==e)||0)>=0;class N{constructor(e="",t=[],n=[]){this.targetedPathPrefix=e;this.targetedCountries=t;this.targetedRegions=n}test(e,t,n){const o=this.targetedPathPrefix.length+1;if(!e.startsWith(this.targetedPathPrefix))return E;const i=this.targetedCountries.length>0||this.targetedRegions.length>0,s=void 0!==t&&this.targetedCountries.includes(t),r=t&&n?`${t}-${n}`:void 0,a=void 0!==r&&this.targetedRegions.includes(r);return[i&&a?o:0,i&&s?o:0,i?0:o]}static fromJS(e){const{allUrlsAndLocations:t,path:n,targetedCountries:o,targetedRegions:i}=e;return t?new N:new N(n||"",o||[],i||[])}}class A{constructor(e){this.value=e}getValue(){return this.value}static fromJS(e){if(!e)return this.TOP;switch(e){case 0:return this.TOP;case 1:return this.BOTTOM;case 2:return this.BOTTOM_LEFT;case 3:return this.BOTTOM_RIGHT;case 4:return this.CENTER;default:return this.TOP}}}A.TOP=new A(0);A.BOTTOM=new A(1);A.BOTTOM_LEFT=new A(2);A.BOTTOM_RIGHT=new A(3);A.CENTER=new A(4);class B{constructor(e,t,n){this.position=e;this.accentColor=t;this.showCloseButton=n}static fromJS(e){const{position:t,accentColor:n,showCloseButton:o}=e;return new B(A.fromJS(t),n,o||!1)}}var P=n(0),R=n.n(P);const D=new R.a({attributes:{a:["href","title","target"],blockquote:["cite"],ol:["start","type"],q:["cite"],ul:["type"],span:["class"]},elements:["a","b","blockquote","br","caption","cite","code","dd","dl","dt","em","h1","h2","h3","h4","h5","h6","i","li","ol","p","pre","q","small","strike","strong","sub","sup","u","ul","font","div","span"],protocols:{a:{href:["http","https","mailto",R.a.ALL]},blockquote:{cite:["http","https",R.a.RELATIVE]},q:{cite:["http","https",R.a.RELATIVE]}},remove_contents:["style","script"],add_attributes:{a:{rel:"noopener"}}}),U=e=>{if(!e)return e;const t=document.createElement("div");try{const n=document.createRange().createContextualFragment(e),o=D.clean_node(n);t.appendChild(o.cloneNode(!0))}catch(t){O.error("we had an error sanitizing an html string: "+e)}return t.innerHTML},G=e=>({__html:e||""});class M{constructor(e,t,n){this.description=e;this.label=t;this.toggleLabel=n}static fromJS(e){return new M(e.description,e.label,e.toggleLabel)}getSanitizedText(){return new M(U(this.description),U(this.label),U(this.toggleLabel))}}class Y{constructor(e,t,n,o,i,s,r){this.acceptLabel=e;this.saveSettingsLabel=t;this.introduction=n;this.necessary=o;this.analytics=i;this.advertisement=s;this.functionality=r}static fromJS(e){return new Y(e.acceptAllLabel,e.saveSettingsLabel,M.fromJS(e.introduction),M.fromJS(e.categories.necessary),M.fromJS(e.categories.analytics),M.fromJS(e.categories.advertisement),M.fromJS(e.categories.functionality))}getSanitizedText(){return new Y(U(this.acceptLabel),U(this.saveSettingsLabel),this.introduction.getSanitizedText(),this.necessary.getSanitizedText(),this.analytics.getSanitizedText(),this.advertisement.getSanitizedText(),this.functionality.getSanitizedText())}}class F{constructor(e,t,n,o,i,s){this.notification=e;this.acceptLabel=t;this.declineLabel=n;this.disclaimer=o;this.cookieSettingsLabel=i;this.modalText=s}static fromJS(e){return new F(e.notification,e.acceptLabel,e.declineLabel,e.disclaimer,e.modalText&&e.modalText.cookieSettingsLabel,e.modalText&&Y.fromJS(e.modalText))}getSanitizedText(){return new F(U(this.notification),U(this.acceptLabel),U(this.declineLabel),U(this.disclaimer),this.cookieSettingsLabel&&U(this.cookieSettingsLabel),this.modalText&&this.modalText.getSanitizedText())}}class H{constructor(e,t){this.value=e;this.name=t}getValue(){return this.value}getName(){return this.name}static fromJS(e){switch(e){case 0:return this.COOKIES_WITHOUT_BANNER;case 1:return this.NO_COOKIES;case 2:return this.NOTIFY;case 3:return this.OPT_IN;case 4:return this.COOKIES_BY_CATEGORY;case 5:return this.OPT_OUT;case 6:return this.OPT_OUT_BY_CATEGORY;default:return this.COOKIES_BY_CATEGORY}}}H.COOKIES_WITHOUT_BANNER=new H(0,"COOKIES_WITHOUT_BANNER");H.NO_COOKIES=new H(1,"NO_COOKIES");H.NOTIFY=new H(2,"NOTIFY");H.OPT_IN=new H(3,"OPT_IN");H.COOKIES_BY_CATEGORY=new H(4,"COOKIES_BY_CATEGORY");H.OPT_OUT=new H(5,"OPT_OUT");H.OPT_OUT_BY_CATEGORY=new H(6,"OPT_OUT_BY_CATEGORY");class z{constructor(e,t){this.type=e;this.text=t}static fromJS(e){const{type:t,text:n}=e;return new z(H.fromJS(t),F.fromJS(n))}getSanitizedPolicy(){return new z(this.type,this.text.getSanitizedText())}}class V{constructor(e,t){this.enabled=e;this.notificationText=U(t||"")}static fromJS(e){return new V(e.enabled,e.notificationText)}}class ${constructor(e,t,n,o,i,s,r,a,c){this.id=e;this.portalId=t;this.domain=n;this.label=o;this.enabled=i;this.configuration=s;this.policy=r;this.customizationSettings=a;this.gpcSettings=c}static fromJS(e){const{id:t,portalId:n,domain:o,label:i,enabled:s,configuration:r,policy:a,legacyCustomization:c,gpcSettings:l}=e;return new $(t,n,o,i,s,N.fromJS(r),z.fromJS(a),B.fromJS(c),V.fromJS(l))}withSanitizedPolicy(){return new $(this.id,this.portalId,this.domain,this.label,this.enabled,this.configuration,this.policy.getSanitizedPolicy(),this.customizationSettings,this.gpcSettings)}toLegacyPrivacyPolicy(){let e;switch(this.policy.type){case H.COOKIES_WITHOUT_BANNER:e=0;break;case H.NO_COOKIES:e=2;break;case H.OPT_OUT:case H.NOTIFY:case H.OPT_IN:e=1;break;case H.OPT_OUT_BY_CATEGORY:case H.COOKIES_BY_CATEGORY:default:e=3}return{active:this.enabled,testing:!1,mode:e,policyWording:"not used",acceptWording:"not used",cancelWording:"not used",disclaimerWording:"not used",hideDecline:this.policy.type===H.NOTIFY,accentColor:this.customizationSettings.accentColor,bannerType:"not used",label:this.label,privacyDefault:!1,cookiesByCategory:{},id:this.id,portalId:this.portalId}}}const K=1,W=2,q=3,j={[K]:"analytics",[W]:"advertisement",[q]:"functionality"};class J{constructor(e,t,n){this.allowed=e;this.previousCategories=n||{necessary:!0,analytics:!1,advertisement:!1,functionality:!1};this.categories=t||{necessary:!0,analytics:e,advertisement:e,functionality:e}}hasAnalyticsConsent(){return this.allowed||!0===this.categories.analytics}adsHasChangedToFalse(){return!0===this.previousCategories.advertisement&&!1===this.categories.advertisement}update(e){this.previousCategories=this.categories;this.categories=Object.assign({},this.categories,{analytics:e,advertisement:e,functionality:e});this.allowed=e;return this}updateCategories({analytics:e,advertisement:t,functionality:n}){this.previousCategories=this.categories;this.categories={necessary:!0,analytics:e,advertisement:t,functionality:n};this.allowed=e&&t&&n;return this}allCategoriesSelected(){return this.categories.necessary&&this.categories.analytics&&this.categories.advertisement&&this.categories.functionality}getSafeCopy(){return new J(this.allowed,{necessary:this.categories.necessary,analytics:this.categories.analytics,advertisement:this.categories.advertisement,functionality:this.categories.functionality},{necessary:this.previousCategories.necessary,analytics:this.previousCategories.analytics,advertisement:this.previousCategories.advertisement,functionality:this.previousCategories.functionality})}toCookieString(){return`${K}:${this.categories.analytics}_${W}:${this.categories.advertisement}_${q}:${this.categories.functionality}`}static buildFromCookieString(e){const t=e.includes(",")?e.split(","):e.split("_"),n={necessary:!0,analytics:!1,advertisement:!1,functionality:!1};t.forEach(e=>{const t=e.split(":");if(2!==t.length)return;const o=t[0],i=j[o];i&&(n[i]="true"===t[1])});const o=n.necessary&&n.advertisement&&n.analytics&&n.functionality;return new J(o,n)}static buildInitialConsent(){return new J(!1,{necessary:!0,analytics:!1,advertisement:!1,functionality:!1})}}const Q=e=>encodeURI(e),Z=e=>decodeURI(e),X="_fbp",ee="1970-01-01T00:00:01-00:00";class te{constructor(e){this.context=e;this.cookiesToSubdomain=!1;this.useSecureCookies=!1;this.domains=[];this.currentDomain=""}isEnabled(){return this.context.getNavigator().cookieEnabled||"cookie"in this.context.getDocument()&&this.context.getDocument().cookie.length>0}addDomain(e){("."+this.context.getHostname()).endsWith(e)&&(!this.currentDomain||e.length<this.currentDomain.length)&&(this.currentDomain=e);this.domains.push(e)}getDomains(){return this.domains}get(e){const t=new RegExp(`(^|;)[ ]*${e}=([^;]*)`).exec(this.context.getDocument().cookie);return t?Z(t[2]):""}set(e,t,n){let o,i,s=!1;if((n=n||{}).minsToExpire){o=new Date;o.setTime(o.getTime()+1e3*n.minsToExpire*60)}else if(n.daysToExpire){o=new Date;o.setTime(o.getTime()+1e3*n.daysToExpire*60*60*24)}else n.expiryDate&&n.expiryDate.toGMTString?o=n.expiryDate:n.expiryDate&&(o=new Date(n.expiryDate));if(void 0!==o){i=o.toGMTString();s=!0}this.setCookie(e,Q(t),{expires:s?";expires="+i:"",expiresTime:s?o:null,path:";path="+(n.path?n.path:"/"),domain:!this.cookiesToSubdomain&&this.currentDomain?";domain="+this.currentDomain:"",secure:this.useSecureCookies?";secure":"",sameSite:";SameSite=Lax"})}getDomainAncestry(e){if(""===e||!e)return[];const t=e.split(".");if(2===t.length)return[e];if(""===t[t.length-1]||t.length<2){console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);return[]}const n=[];let o,i=""+t[t.length-1];for(o=t.length-2;o>=0;o--){if(""===t[o]){if(0!==o){console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);return[]}continue}const s=`${t[o]}.${i}`;n.push(s);i=s}return n}removeFBPCookie(){const e=new Date(ee),t=e.toUTCString();this.getDomainAncestry(this.context.getDocument().domain).forEach(n=>{this.setCookie(X,"",{expires:";expires="+t,expiresTime:e,path:";path=/",domain:";domain=."+n,secure:"",sameSite:";SameSite=Lax"})})}getGACookieNames(){const e=this.context.getDocument().cookie;if(!e)return[];const t=e.split(";"),n=new RegExp("^(_ga_[a-zA-Z0-9]+)=[^;]+$"),o=[];t.forEach(e=>{const t=e.trim().match(n);t&&o.push(t[1])});return o}removeGACookie(){this.getGACookieNames().forEach(e=>this.remove(e))}remove(e){this.set(e,"",{expiryDate:ee})}setCookie(e,t,n){const o=n.expires+n.path+n.domain+n.sameSite+n.secure;this.writeCookie(`${e}=${t}${o}`)}writeCookie(e){this.context.getDocument().cookie=e}setCookiesToSubdomain(e){this.cookiesToSubdomain=e}setUseSecureCookies(e){this.useSecureCookies=e}}class ne{constructor(e,t){this.name=e;this.expirationDays=t}getName(){return this.name}getExpirationDays(){return this.expirationDays}}ne.CATEGORY_PREFERENCE_COOKIE=new ne("__hs_cookie_cat_pref",180);ne.GPC_BANNER_DISMISS_COOKIE=new ne("__hs_gpc_banner_dismiss",180);ne.NOTIFY_BANNER_DIMISS_COOKIE=new ne("__hs_notify_banner_dismiss",180);ne.OPT_OUT_COOKIE=new ne("__hs_opt_out",180);ne.INITIAL_OPT_IN=new ne("__hs_initial_opt_in",7);var oe,ie,se,re,ae,ce,le={},he=[],de=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ue(e,t){for(var n in t)e[n]=t[n];return e}function _e(e){var t=e.parentNode;t&&t.removeChild(e)}function fe(e,t,n){var o,i,s,r={};for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:r[s]=t[s];if(arguments.length>2&&(r.children=arguments.length>3?oe.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===r[s]&&(r[s]=e.defaultProps[s]);return ge(e,r,o,i,null)}function ge(e,t,n,o,i){var s={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++se:i};return null==i&&null!=ie.vnode&&ie.vnode(s),s}function me(e){return e.children}function pe(e,t){this.props=e,this.context=t}function be(e,t){if(null==t)return e.__?be(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?be(e):null}function ye(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return ye(e)}}function ve(e){(!e.__d&&(e.__d=!0)&&re.push(e)&&!Ce.__r++||ce!==ie.debounceRendering)&&((ce=ie.debounceRendering)||ae)(Ce)}function Ce(){for(var e;Ce.__r=re.length;)e=re.sort((function(e,t){return e.__v.__b-t.__v.__b})),re=[],e.some((function(e){var t,n,o,i,s,r;e.__d&&(s=(i=(t=e).__v).__e,(r=t.__P)&&(n=[],(o=ue({},i)).__v=i.__v+1,Le(r,i,o,t.__n,void 0!==r.ownerSVGElement,null!=i.__h?[s]:null,n,null==s?be(i):s,i.__h),Ne(n,i),i.__e!=s&&ye(i)))}))}function xe(e,t,n,o,i,s,r,a,c,l){var h,d,u,_,f,g,m,p=o&&o.__k||he,b=p.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(_=n.__k[h]=null==(_=t[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?ge(null,_,null,null,_):Array.isArray(_)?ge(me,{children:_},null,null,null):_.__b>0?ge(_.type,_.props,_.key,null,_.__v):_)){if(_.__=n,_.__b=n.__b+1,null===(u=p[h])||u&&_.key==u.key&&_.type===u.type)p[h]=void 0;else for(d=0;d<b;d++){if((u=p[d])&&_.key==u.key&&_.type===u.type){p[d]=void 0;break}u=null}Le(e,_,u=u||le,i,s,r,a,c,l),f=_.__e,(d=_.ref)&&u.ref!=d&&(m||(m=[]),u.ref&&m.push(u.ref,null,_),m.push(d,_.__c||f,_)),null!=f?(null==g&&(g=f),"function"==typeof _.type&&_.__k===u.__k?_.__d=c=Se(_,c,e):c=we(e,_,u,p,f,c),"function"==typeof n.type&&(n.__d=c)):c&&u.__e==c&&c.parentNode!=e&&(c=be(u))}for(n.__e=g,h=b;h--;)null!=p[h]&&("function"==typeof n.type&&null!=p[h].__e&&p[h].__e==n.__d&&(n.__d=be(o,h+1)),Pe(p[h],p[h]));if(m)for(h=0;h<m.length;h++)Be(m[h],m[++h],m[++h])}function Se(e,t,n){for(var o,i=e.__k,s=0;i&&s<i.length;s++)(o=i[s])&&(o.__=e,t="function"==typeof o.type?Se(o,t,n):we(n,o,o,i,o.__e,t));return t}function we(e,t,n,o,i,s){var r,a,c;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||i!=s||null==i.parentNode)e:if(null==s||s.parentNode!==e)e.appendChild(i),r=null;else{for(a=s,c=0;(a=a.nextSibling)&&c<o.length;c+=2)if(a==i)break e;e.insertBefore(i,s),r=s}return void 0!==r?r:i.nextSibling}function Te(e,t,n,o,i){var s;for(s in n)"children"===s||"key"===s||s in t||Oe(e,s,null,n[s],o);for(s in t)i&&"function"!=typeof t[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===t[s]||Oe(e,s,t[s],n[s],o)}function ke(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||de.test(t)?n:n+"px"}function Oe(e,t,n,o,i){var s;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||ke(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||ke(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?o||e.addEventListener(t,s?Ie:Ee,s):e.removeEventListener(t,s?Ie:Ee,s);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function Ee(e){this.l[e.type+!1](ie.event?ie.event(e):e)}function Ie(e){this.l[e.type+!0](ie.event?ie.event(e):e)}function Le(e,t,n,o,i,s,r,a,c){var l,h,d,u,_,f,g,m,p,b,y,v=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,a=t.__e=n.__e,t.__h=null,s=[a]),(l=ie.__b)&&l(t);try{e:if("function"==typeof v){if(m=t.props,p=(l=v.contextType)&&o[l.__c],b=l?p?p.props.value:l.__:o,n.__c?g=(h=t.__c=n.__c).__=h.__E:("prototype"in v&&v.prototype.render?t.__c=h=new v(m,b):(t.__c=h=new pe(m,b),h.constructor=v,h.render=Re),p&&p.sub(h),h.props=m,h.state||(h.state={}),h.context=b,h.__n=o,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=v.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=ue({},h.__s)),ue(h.__s,v.getDerivedStateFromProps(m,h.__s))),u=h.props,_=h.state,d)null==v.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==v.getDerivedStateFromProps&&m!==u&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,b),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,b)||t.__v===n.__v){h.props=m,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),h.__h.length&&r.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,b),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(u,_,f)}))}h.context=b,h.props=m,h.state=h.__s,(l=ie.__r)&&l(t),h.__d=!1,h.__v=t,h.__P=e,l=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(o=ue(ue({},o),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(f=h.getSnapshotBeforeUpdate(u,_)),y=null!=l&&l.type===me&&null==l.key?l.props.children:l,xe(e,Array.isArray(y)?y:[y],t,n,o,i,s,r,a,c),h.base=t.__e,t.__h=null,h.__h.length&&r.push(h),g&&(h.__E=h.__=null),h.__e=!1}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ae(n.__e,t,n,o,i,s,r,c);(l=ie.diffed)&&l(t)}catch(e){t.__v=null,(c||null!=s)&&(t.__e=a,t.__h=!!c,s[s.indexOf(a)]=null),ie.__e(e,t,n)}}function Ne(e,t){ie.__c&&ie.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){ie.__e(e,t.__v)}}))}function Ae(e,t,n,o,i,s,r,a){var c,l,h,d=n.props,u=t.props,_=t.type,f=0;if("svg"===_&&(i=!0),null!=s)for(;f<s.length;f++)if((c=s[f])&&"setAttribute"in c==!!_&&(_?c.localName===_:3===c.nodeType)){e=c,s[f]=null;break}if(null==e){if(null===_)return document.createTextNode(u);e=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,u.is&&u),s=null,a=!1}if(null===_)d===u||a&&e.data===u||(e.data=u);else{if(s=s&&oe.call(e.childNodes),l=(d=n.props||le).dangerouslySetInnerHTML,h=u.dangerouslySetInnerHTML,!a){if(null!=s)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(h||l)&&(h&&(l&&h.__html==l.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(Te(e,u,d,i,a),h)t.__k=[];else if(f=t.props.children,xe(e,Array.isArray(f)?f:[f],t,n,o,i&&"foreignObject"!==_,s,r,s?s[0]:n.__k&&be(n,0),a),null!=s)for(f=s.length;f--;)null!=s[f]&&_e(s[f]);a||("value"in u&&void 0!==(f=u.value)&&(f!==e.value||"progress"===_&&!f||"option"===_&&f!==d.value)&&Oe(e,"value",f,d.value,!1),"checked"in u&&void 0!==(f=u.checked)&&f!==e.checked&&Oe(e,"checked",f,d.checked,!1))}return e}function Be(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){ie.__e(e,n)}}function Pe(e,t,n){var o,i;if(ie.unmount&&ie.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Be(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){ie.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Pe(o[i],t,"function"!=typeof e.type);n||null==e.__e||_e(e.__e),e.__e=e.__d=void 0}function Re(e,t,n){return this.constructor(e,n)}function De(e,t,n){var o,i,s;ie.__&&ie.__(e,t),i=(o="function"==typeof n)?null:n&&n.__k||t.__k,s=[],Le(t,e=(!o&&n||t).__k=fe(me,null,[e]),i||le,le,void 0!==t.ownerSVGElement,!o&&n?[n]:i?null:t.firstChild?oe.call(t.childNodes):null,s,!o&&n?n:i?i.__e:t.firstChild,o),Ne(s,e)}oe=he.slice,ie={__e:function(e,t){for(var n,o,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),i=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(t){e=t}throw e}},se=0,function(e){return null!=e&&void 0===e.constructor},pe.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=ue({},this.state),"function"==typeof e&&(e=e(ue({},n),this.props)),e&&ue(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),ve(this))},pe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ve(this))},pe.prototype.render=me,re=[],ae="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ce.__r=0,0;var Ue=0;function Ge(e,t,n,o,i){var s,r,a={};for(r in t)"ref"==r?s=t[r]:a[r]=t[r];var c={type:e,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ue,__source:o,__self:i};if("function"==typeof e&&(s=e.defaultProps))for(r in s)void 0===a[r]&&(a[r]=s[r]);return ie.vnode&&ie.vnode(c),c}var Me,Ye,Fe,He=0,ze=[],Ve=ie.__b,$e=ie.__r,Ke=ie.diffed,We=ie.__c,qe=ie.unmount;function je(e,t){ie.__h&&ie.__h(Ye,e,He||t),He=0;var n=Ye.__H||(Ye.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Je(e){return He=1,Qe(rt,e)}function Qe(e,t,n){var o=je(Me++,2);return o.t=e,o.__c||(o.__=[n?n(t):rt(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=Ye),o.__}function Ze(e,t){var n=je(Me++,3);!ie.__s&&st(n.__H,t)&&(n.__=e,n.__H=t,Ye.__H.__h.push(n))}function Xe(e){return He=5,et((function(){return{current:e}}),[])}function et(e,t){var n=je(Me++,7);return st(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function tt(){for(var e;e=ze.shift();)if(e.__P)try{e.__H.__h.forEach(ot),e.__H.__h.forEach(it),e.__H.__h=[]}catch(t){e.__H.__h=[],ie.__e(t,e.__v)}}ie.__b=function(e){Ye=null,Ve&&Ve(e)},ie.__r=function(e){$e&&$e(e),Me=0;var t=(Ye=e.__c).__H;t&&(t.__h.forEach(ot),t.__h.forEach(it),t.__h=[])},ie.diffed=function(e){Ke&&Ke(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==ze.push(t)&&Fe===ie.requestAnimationFrame||((Fe=ie.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),nt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);nt&&(t=requestAnimationFrame(n))})(tt)),Ye=null},ie.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ot),e.__h=e.__h.filter((function(e){return!e.__||it(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],ie.__e(n,e.__v)}})),We&&We(e,t)},ie.unmount=function(e){qe&&qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{ot(e)}catch(e){t=e}})),t&&ie.__e(t,n.__v))};var nt="function"==typeof requestAnimationFrame;function ot(e){var t=Ye,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),Ye=t}function it(e){var t=Ye;e.__c=e.__(),Ye=t}function st(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function rt(e,t){return"function"==typeof t?t(e):t}function at(){return Ge("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32",children:Ge("path",{fill:"currentColor",d:"M4.3,27.7c0.2,0.2,0.6,0.5,1,0.5c0.4,0,0.8-0.2,1-0.5l9.6-9.5l9.6,9.5c0.2,0.2,0.6,0.5,1,0.5 c0.8,0,1.5-0.6,1.5-1.5c0-0.4-0.2-0.8-0.5-1L18.2,16l9.5-9.5c0.2-0.2,0.4-0.6,0.4-1c0-0.8-0.6-1.5-1.5-1.5c-0.4,0-0.7,0.2-1,0.4l0,0 L16,13.8L6.5,4.3C6.2,4,5.8,3.8,5.4,3.8c-0.8,0-1.5,0.6-1.5,1.5c0,0.5,0.2,0.8,0.5,1.1l0,0l9.5,9.5l-9.5,9.6c-0.2,0.2-0.5,0.6-0.5,1 S4.1,27.4,4.3,27.7L4.3,27.7z"})})}function ct(e,t,n,o){n&&o&&t.addEventListener("keydown",t=>{if(!("Tab"===t.key||"Tab"===t.code))return;const i=e.getDocument().activeElement;if(t.shiftKey){if(i===n){o.focus();t.preventDefault()}}else if(i===o){n.focus();t.preventDefault()}})}function lt({context:e,onAcceptAll:t,onCookieSettingsClick:n,onDeclineAll:o,setting:i,onCloseBannerButtonClick:s,isModalDisplayed:r}){const a=Xe(null),c=Xe(null),l=Xe(null),h=Xe(null),d=Xe(null);Ze(()=>{if(!a.current)return;const t=c.current||l.current,n=d.current||h.current;ct(e,a.current,t,n)},[e,a,c,h,d,l]);const _=r?-1:0,f=i.policy,g=i.policy.type,m=g===H.OPT_OUT_BY_CATEGORY||g===H.COOKIES_BY_CATEGORY,p=g===H.OPT_IN||g===H.OPT_OUT||g===H.OPT_OUT_BY_CATEGORY||g===H.COOKIES_BY_CATEGORY;return Ge("div",{id:u,className:i.customizationSettings.position===A.BOTTOM?"hs-cookie-notification-position-bottom":"","data-nosnippet":"true",role:"dialog","aria-describedby":"hs-eu-policy-wording","aria-label":"Cookie banner",ref:a,tabIndex:_,children:Ge("div",{id:"hs-eu-cookie-confirmation-inner",children:[Ge("div",{id:"hs-eu-header-container",children:Ge("button",{id:"hs-eu-close-button",className:"hs-close-button",onClick:()=>s(g),ref:c,"aria-label":"Dismiss cookie banner",tabIndex:_,children:Ge(at,{})})}),Ge("div",{id:"hs-eu-policy-wording",dangerouslySetInnerHTML:G(f.text.notification),ref:l,tabIndex:_}),f.text.disclaimer&&p&&Ge("p",{id:"hs-eu-cookie-disclaimer",dangerouslySetInnerHTML:G(f.text.disclaimer),tabIndex:_}),Ge("div",{id:"hs-eu-cookie-confirmation-buttons-area",children:Ge("div",{id:"hs-eu-confirmation-button-group",children:[m&&Ge("button",{onClick:()=>n(),id:"hs-eu-cookie-settings-button",dangerouslySetInnerHTML:G(f.text.cookieSettingsLabel),"aria-label":f.text.cookieSettingsLabel,tabIndex:_}),Ge("div",{id:"hs-eu-opt-in-buttons",children:[Ge("button",{id:"hs-eu-confirmation-button",onClick:()=>t(g),dangerouslySetInnerHTML:G(f.text.acceptLabel),"aria-label":f.text.acceptLabel,ref:h,tabIndex:_}),p&&Ge("button",{id:"hs-eu-decline-button",onClick:()=>o(),dangerouslySetInnerHTML:G(f.text.declineLabel),ref:d,"aria-label":f.text.declineLabel,tabIndex:_})]})]})})]})})}function ht({category:e,disabled:t,onToggleChange:n,toggleValue:o}){const i="hs-category-toggle-"+e,s=i+"-help-text";return Ge("div",{className:"hs-toggle-switch "+(o?"hs-toggle-selected-flag":""),children:[Ge("div",{className:"hs-toggle-switch-nob"}),Ge("label",{htmlFor:i,children:Ge("span",{className:"hs-hidden",id:s,children:`${e} cookies ${o?"allowed":"disallowed"}`})}),Ge("input",{id:i,className:"hs-toggle-switch-input",type:"checkbox",onChange:e=>n(e.currentTarget.checked),checked:o,disabled:t,"aria-pressed":o,tabIndex:0,"aria-describedby":s,"data-test-id":i})]})}function dt({className:e}){return Ge("svg",{version:"1.1",id:"plus-icon-svg",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32",className:e,children:Ge("path",{fill:"currentColor",d:"M22.6,15.3c-0.1-0.1-0.1-0.2-0.2-0.2l0,0l-0.1-0.2l0,0l0,0l0,0L12.1,4.2c-0.2-0.2-0.6-0.5-1.1-0.5 c-0.9,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.7,0.4,1l0,0l9.3,9.7l-9.3,9.7c-0.3,0.3-0.6,0.7-0.6,1.1c0,0.9,0.7,1.5,1.5,1.5 c0.5,0,1-0.2,1.2-0.6l0,0l10.2-10.7l0,0l0,0l0,0l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.2l0,0c0-0.1,0.1-0.2,0.1-0.2l0,0 c0-0.1,0.1-0.2,0.1-0.3l0,0c0-0.1,0-0.2-0.1-0.3l0,0v-0.1C22.6,15.5,22.6,15.4,22.6,15.3L22.6,15.3L22.6,15.3z"})})}function ut(e,t){if(!t)return!1;const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return n.top>=o.top&&n.left>=o.left&&n.bottom<=o.bottom&&n.right<=o.right}function _t({category:e,onToggleChange:t,sectionText:n,toggleValue:o,modalBodyRef:i}){const[s,r]=Je(!1),a=e===p.NECESSARY,c=Xe(null),l=Xe(null),h=()=>{r(!s)};Ze(()=>{if(s){const e=c.current;e&&e.scrollIntoView&&!ut(e,i.current)&&e.scrollIntoView({behavior:"smooth"})}},[s,i,c]);return Ge("div",{className:"hs-category-row",ref:c,children:[Ge("div",{className:"hs-category-row-header",children:[Ge("button",{id:"hs-category-"+e,className:"hs-category-label",onClick:h,"aria-expanded":s,"aria-controls":"hs-category-description-"+e,tabIndex:0,children:[Ge(dt,{className:"description-accordion-arrow "+(s?"rotated":"")}),Ge("span",{dangerouslySetInnerHTML:G(n.label)})]}),!a&&Ge(ht,{category:e,disabled:e===p.NECESSARY,onToggleChange:e=>t(e),toggleValue:o}),n.toggleLabel&&Ge("span",{className:"hs-always-active-label",dangerouslySetInnerHTML:G(n.toggleLabel),tabIndex:0,"aria-label":n.toggleLabel})]}),Ge("div",{className:"hs-category-description "+(s?"visible":""),ref:l,style:{maxHeight:s&&l.current?2*l.current.scrollHeight:0},id:"hs-category-description-"+e,dangerouslySetInnerHTML:G(n.description),tabIndex:0})]})}var ft=n(1),gt=n.n(ft),mt=n(2),pt=n.n(mt);const bt=(e,t,n,o,i)=>{const s=e.getDocument(),r=s.createElement("style");r.setAttribute("type","text/css");r.setAttribute("id",o);const a=new RegExp("https://api_base_url","g"),c=i?t.replace(a,i):t,l=s.createTextNode(c);r.appendChild(l);const h=s.body.firstChild;s.body.insertBefore(r,h)};function yt(e,t,n){if(!e.getHasLoadedBaseStyle()){bt(e,gt.a,t,y,n);e.setHasLoadedBaseStyle(!0)}}function vt(e,t){if(!e.getHasLoadedCbcStyle()){bt(e,pt.a,t,v);e.setHasLoadedCbcStyle(!0)}}function Ct({accentColor:e,consent:t,context:n,modalText:o,onAcceptCategories:i,onCloseModal:s}){const r=Xe(null),a=Xe(null),c=Xe(null),l=Xe(null);Ze(()=>{r.current&&ct(n,r.current,a.current,c.current)},[n,r,a,c]);const[h,d]=Je(t.categories.analytics),[u,_]=Je(t.categories.advertisement),[f,b]=Je(t.categories.functionality),y=()=>{i({[p.ANALYTICS]:h,[p.ADVERTISEMENT]:u,[p.FUNCTIONALITY]:f})},v=()=>{d(!0);_(!0);b(!0);i({[p.ANALYTICS]:!0,[p.ADVERTISEMENT]:!0,[p.FUNCTIONALITY]:!0})};vt(n,e);return Ge("div",{id:g,"data-nosnippet":"true",children:Ge("div",{id:m,ref:r,role:"alertdialog","aria-modal":"true","aria-labelledby":"hs-modal-introduction","aria-describedby":"hs-modal-introduction-description",tabIndex:0,children:[Ge("div",{id:"hs-modal-header",children:Ge("div",{id:"hs-modal-header-container",children:Ge("button",{id:"hs-modal-close-button",className:"hs-close-button",onClick:()=>s(),ref:a,tabIndex:0,"aria-label":"Close modal",children:Ge(at,{})})})}),Ge("div",{id:"hs-modal-body",ref:l,children:Ge("div",{id:"hs-modal-body-container",children:[Ge("div",{id:"hs-modal-introduction",children:Ge("span",{dangerouslySetInnerHTML:G(o.introduction.label)})}),Ge("div",{id:"hs-modal-introduction-description",children:Ge("p",{dangerouslySetInnerHTML:G(o.introduction.description)})}),Ge("div",{id:"hs-categories-container",children:[Ge(_t,{category:p.NECESSARY,onToggleChange:()=>{},sectionText:o.necessary,toggleValue:!0,modalBodyRef:l}),Ge(_t,{category:p.ANALYTICS,onToggleChange:e=>d(e),sectionText:o.analytics,toggleValue:h,modalBodyRef:l}),Ge(_t,{category:p.ADVERTISEMENT,onToggleChange:e=>_(e),sectionText:o.advertisement,toggleValue:u,modalBodyRef:l}),Ge(_t,{category:p.FUNCTIONALITY,onToggleChange:e=>b(e),sectionText:o.functionality,toggleValue:f,modalBodyRef:l})]})]})}),Ge("div",{id:"hs-modal-footer",children:Ge("div",{id:"hs-modal-footer-container",children:[Ge("button",{id:"hs-modal-accept-all",onClick:()=>v(),tabIndex:0,children:o.acceptLabel}),Ge("button",{id:"hs-modal-save-settings",onClick:y,ref:c,tabIndex:0,children:o.saveSettingsLabel})]})})]})})}function xt({apiBaseUrl:e,consent:t,setting:n,context:o,onConsentChange:i,onCloseBannerWithoutConsent:s,dismissNotifyBanner:r}){const[a,c]=Je(!1),l=e=>{if(e!==H.NOTIFY){t.update(!0);i(t)}else r()},h=()=>{t.update(!1);i(t)},d=({analytics:e,advertisement:n,functionality:o})=>{t.updateCategories({analytics:e,advertisement:n,functionality:o});i(t)},_=e=>{if(e!==H.OPT_IN&&e!==H.COOKIES_BY_CATEGORY)if(e!==H.NOTIFY){t.update(!0);i(t)}else r();else s()},f=()=>{c(!0)},g=()=>{c(!1);const e=o.getDocument().getElementById(u);e&&e.focus()};yt(o,n.customizationSettings.accentColor,e);return Ge(me,{children:[Ge(lt,{context:o,setting:n,onAcceptAll:l,onDeclineAll:h,onCookieSettingsClick:f,onCloseBannerButtonClick:_,isModalDisplayed:a}),a&&Ge(Ct,{accentColor:n.customizationSettings.accentColor,consent:t,context:o,modalText:n.policy.text.modalText,onAcceptCategories:d,onCloseModal:g})]})}function St({apiBaseUrl:e,context:t,setting:n,onCloseBanner:o}){yt(t,n.customizationSettings.accentColor,e);return Ge("div",{id:_,"data-nosnippet":"true",role:"dialog","aria-describedby":"hs-banner-gpc-wording",children:Ge("div",{id:"hs-banner-gpc-inner",children:[Ge("div",{id:"hs-banner-gpc-header",children:Ge("button",{id:"hs-banner-gpc-close-button",className:"hs-close-button",onClick:o,"aria-label":"Dismiss banner",children:Ge(at,{})})}),Ge("div",{id:"hs-banner-gpc-wording",dangerouslySetInnerHTML:G(n.gpcSettings.notificationText)})]})})}const wt=(e,t)=>{const n=e.getDocument().createElement("div");n.setAttribute("id",f);n.setAttribute("style",t);const o=e.getDocument().body;o.insertBefore(n,o.firstChild);return n};function Tt(e,t,n,o,i,s,r,a){const c=wt(i,o);De(Ge(xt,{apiBaseUrl:e,consent:t,setting:n,context:i,onConsentChange:e=>s(e),onCloseBannerWithoutConsent:r,dismissNotifyBanner:a}),c);return c}function kt(e,t,n,o,i){const s=wt(t,o);De(Ge(St,{apiBaseUrl:e,context:t,setting:n,onCloseBanner:i}),s);return s}class Ot{static postActivity(e,t,n){fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(()=>O.info(`Sent a banner ${t} event.`)).catch(()=>O.error(`There was an issue sending a banner ${t} event.`))}static sendView(e,t){Ot.postActivity(e+"/activity/view","VIEW",t)}static sendClick(e,t){Ot.postActivity(e+"/activity/click","CLICK",t)}}let Et;!function(e){e[e.ROUND=0]="ROUND";e[e.SQUARE=1]="SQUARE";e[e.PILL=2]="PILL"}(Et||(Et={}));const It={[Et.ROUND]:"0.5em",[Et.SQUARE]:"0",[Et.PILL]:"3em"},Lt={[Et.ROUND]:"12px",[Et.SQUARE]:"0",[Et.PILL]:"0"},Nt=e=>null==e,At=(e,t)=>t?[{cssVar:e,value:t}]:[],Bt=(e,t)=>t?[{cssVar:e,value:`${t.number}${t.units}`}]:[],Pt=(e,t)=>Nt(t)?[]:[{cssVar:e,value:It[t]}],Rt=(e,t)=>Nt(t)?[]:[{cssVar:e,value:Lt[t]}],Dt=(e,t)=>Nt(t)?[]:[...At(`--hs-banner-${e}-color`,t.color),...At(`--hs-banner-${e}-text-color`,t.textColor),...At(`--hs-banner-${e}-border-color`,t.borderColor)],Ut=e=>Nt(e)?[]:[{cssVar:"--hs-banner-close-button-display",value:e?"flex":"none"}],Gt=e=>{if(Nt(e))return[];switch(A.fromJS(e)){case A.BOTTOM:return[{cssVar:"--hs-banner-inset",value:"auto 50% 32px"},{cssVar:"--hs-banner-translate-x",value:"-50%"},{cssVar:"--hs-banner-translate-y",value:"0"}];case A.BOTTOM_LEFT:return[{cssVar:"--hs-banner-inset",value:"auto auto 32px 32px"},{cssVar:"--hs-banner-translate-x",value:"0"},{cssVar:"--hs-banner-translate-y",value:"0"}];case A.BOTTOM_RIGHT:return[{cssVar:"--hs-banner-inset",value:"auto 32px 32px auto"},{cssVar:"--hs-banner-translate-x",value:"0"},{cssVar:"--hs-banner-translate-y",value:"0"}];case A.CENTER:return[{cssVar:"--hs-banner-inset",value:"50% auto auto 50%"},{cssVar:"--hs-banner-translate-x",value:"-50%"},{cssVar:"--hs-banner-translate-y",value:"-50%"}];default:return[{cssVar:"--hs-banner-inset",value:"32px auto auto 50%"},{cssVar:"--hs-banner-translate-x",value:"-50%"},{cssVar:"--hs-banner-translate-y",value:"0"}]}},Mt=e=>e.map(e=>`${e.cssVar}:${e.value}`).join(";"),Yt=e=>[...At("--hs-banner-color",e.bannerColor),...At("--hs-banner-text-color",e.bannerTextColor),...At("--hs-banner-settings-text-color",e.bannerSettingsButtonTextColor),...Bt("--hs-banner-width",e.bannerWidth),...Bt("--hs-banner-padding",e.bannerPadding),...Rt("--hs-banner-corners",e.bannerCorners),...Pt("--hs-banner-button-corners",e.bannerButtonCorners),...Dt("accept",e.bannerAcceptButtonStyle),...Dt("decline",e.bannerDeclineButtonStyle),...Ut(e.showCloseButton),...Gt(e.position),...At("--hs-banner-modal-color",e.modalColor),...At("--hs-banner-modal-text-color",e.modalTextColor),...Bt("--hs-banner-modal-padding",e.modalContainerPadding),...Bt("--hs-banner-modal-width",e.modalWidth),...Rt("--hs-banner-modal-corners",e.modalCorners),...Pt("--hs-banner-modal-button-corners",e.modalButtonCorners),...Dt("modal-accept",e.modalAcceptButtonStyle),...Dt("modal-save",e.modalSaveSettingsButtonStyle),...Rt("--hs-banner-modal-category-corners",e.modalCategoryCorners),...At("--hs-banner-modal-cateogry-color",e.modalCategoryColor),...At("--hs-banner-modal-category-text-color",e.modalCategoryTextColor),...At("--hs-banner-modal-toggle-on-color",e.modalCategoryToggleOnColor),...At("--hs-banner-modal-toggle-off-color",e.modalCategoryToggleOffColor)],Ft=e=>[...At("--hs-banner-accentColor",e.accentColor),...Gt(e.position.getValue()),...Ut(e.showCloseButton)],Ht=e=>{const t={};if(!e)return t;const n=e.indexOf("-"),[o,i]=-1===n?[e,void 0]:[e.substring(0,n),e.substring(n+1)];o&&(t.countryCode=o);i&&(t.regionCode=i);return t};class zt{constructor(e){this.publicMethods=["showBanner","hideBanner","addPrivacyConsentListener","setApiBaseUrl","setCookiesToSubdomain","setUseSecureCookies","addCookieDomain","addEnabledFeatureGates","setBannerSettings","setCustomizationSettings","setUseGeoLocation","setGeoLocation","addPrivacySettingsListener","revokeCookieConsent"];this.enabledFeatureGates=[];this.context=e;this.bannerSettings=[];this.privacyConsentListeners=[];this.privacySettingsListeners=[];this.useGeoLocation=!1;this.cookie=new te(e);this.isRunningInTestMode=e.getLocation().search.includes(d);this.removeDeprecatedBannerCookies()}removeDeprecatedBannerCookies(){this.cookie.get(ne.OPT_OUT_COOKIE.getName())&&this.cookie.remove(ne.OPT_OUT_COOKIE.getName());this.cookie.get(ne.INITIAL_OPT_IN.getName())&&this.cookie.remove(ne.INITIAL_OPT_IN.getName())}run(){if(this.disableBannerFlagSet()){O.info('"PRIVACY" flag found in disabledHsPopups window queue. Banner script will not run.');return!0}this.findMatchingSetting();this.logGpcSignal();if(!this.matchedSetting){O.debug("we were unable to find the matching settings for this webpages. The banner will not run.");this.setConsent(new J(!0),{reportClick:!1});return!1}if(this.shouldScanningOverride()){this.setConsent(new J(!0),{reportClick:!1,persist:!0,treatAsConsentEvent:!0});return!0}if(this.shouldGpcOverride()){this.setConsent(new J(!1),{persist:!1,reportClick:!1});this.isGpcBannerDismissCookiePresent()||this.renderGpcBanner();return!0}switch(this.matchedSetting.policy.type){case H.NO_COOKIES:this.setConsent(new J(!1),{reportClick:!1});break;case H.OPT_IN:case H.COOKIES_BY_CATEGORY:if(this.useConsentFromExistingCookie())break;this.cookie.removeGACookie();this.setConsent(J.buildInitialConsent(),{persist:!1,reportClick:!1});this.renderBanner();break;case H.OPT_OUT_BY_CATEGORY:case H.OPT_OUT:if(this.useConsentFromExistingCookie())break;this.setConsent(new J(!0),{persist:!1,reportClick:!1});this.renderBanner();break;case H.NOTIFY:this.setConsent(new J(!0),{persist:!1,reportClick:!1});if(this.isNotifyBannerDismissCookiePresent())break;this.renderBanner();break;case H.COOKIES_WITHOUT_BANNER:default:this.setConsent(new J(!0),{reportClick:!1})}return!0}useConsentFromExistingCookie(){const e=this.readConsentCookie();if(e){this.setConsent(e,{persist:!1,reportClick:!1});e.hasAnalyticsConsent()||this.cookie.removeGACookie();return!0}return!1}shouldScanningOverride(){return[H.OPT_OUT,H.OPT_OUT_BY_CATEGORY,H.COOKIES_BY_CATEGORY,H.OPT_IN,H.NOTIFY].includes(this.matchedSetting.policy.type)&&this.context.getWindow()[c]}shouldGpcOverride(){return this.matchedSetting.gpcSettings.enabled&&this.getGpcSignal()}getGpcSignal(){const e=this.context.getLocation().search;if(e.includes(a)){return{TRUE:!0,FALSE:!1}[(new URLSearchParams(e).get(a)||"").toUpperCase()]}return this.context.getNavigator().globalPrivacyControl}logGpcSignal(){O.debug("GPC signal: "+this.getGpcSignal())}findMatchingSetting(){const e=this.context.getPathname(),{countryCode:t,regionCode:n}=Ht(this.geoLocation),o=this.bannerSettings.filter(e=>e.enabled).map(o=>({setting:o,matchResult:o.configuration.test(e,t,n)})).reduce((e,t)=>L(e.matchResult,t.matchResult)?e:t,{setting:null,matchResult:E});I(o.matchResult)&&o.setting&&this.setMatchingSetting(o.setting.withSanitizedPolicy())}setMatchingSetting(e){this.matchedSetting=e;if(0===this.privacySettingsListeners.length)return;const t=e.toLegacyPrivacyPolicy();this.privacySettingsListeners.forEach(e=>this.safeCallListener(e,t))}getMatchingSetting(){return this.matchedSetting}hasEnabledFeatureGate(e){return this.enabledFeatureGates&&this.enabledFeatureGates.includes(e)}setApiBaseUrl(e){/^https:\/\/js-?.{0,3}\.hs-banner(qa)?\.com.*/.test(e)?this.apiBaseUrl=e:O.error("unsupported base Api url provided.")}setBannerSettings(e){(e[this.context.getLocation().hostname]||[]).forEach(e=>this.bannerSettings.push($.fromJS(e)))}setCustomizationSettings(e){const t=e[this.context.getLocation().hostname];this.styleOverrides=t;this.bannerParentElement&&this.bannerParentElement.setAttribute("style",this.getRenderStyles())}getCurrentGeoLocation(){return new Promise(e=>{const t=this.context.getLocation().search;if(t.includes(r)){const n=new URLSearchParams(t).get(r);e(n||"")}else fetch(this.apiBaseUrl+"/cf-location").then(e=>e.text()).then(t=>e(t)).catch(()=>{O.error("We could not fetch the geolocation.");e("")})})}setGeoLocation(e){this.geoLocation=e}addEnabledFeatureGates(e){e.forEach(e=>this.enabledFeatureGates.push(e))}addCookieDomain(e){this.cookie.addDomain(e)}setCookiesToSubdomain(e){this.cookie.setCookiesToSubdomain(e)}setUseSecureCookies(e){this.cookie.setUseSecureCookies(e)}setUseGeoLocation(){this.useGeoLocation=!0}addPrivacyConsentListener(e){this.consent&&this.safeCallListener(e,this.consent.getSafeCopy());this.privacyConsentListeners.push(e)}setConsent(e,t){const n={persist:!0,treatAsConsentEvent:!0,reportClick:!0},{persist:o,treatAsConsentEvent:i,reportClick:s}=Object.assign({},n,{},t);this.consent=e;i&&this.hideBanner();o&&this.setConsentCookie();if(!this.isRunningInTestMode){s&&(this.consent.hasAnalyticsConsent()?this.trackAction("trackApproveCookieConsent"):this.trackAction("trackDeclineCookieConsent"));if(i){this.privacyConsentListeners.forEach(t=>this.safeCallListener(t,e.getSafeCopy()));this.consent.adsHasChangedToFalse()&&this.cookie.removeFBPCookie()}s&&this.sendClickActivity()}}getConsent(){return this.consent.getSafeCopy()}setConsentCookie(){if(!this.matchedSetting||this.isRunningInTestMode)return;const e=this.matchedSetting.policy.type;e!==H.NO_COOKIES&&e!==H.COOKIES_WITHOUT_BANNER&&e!==H.NOTIFY&&this.cookie.set(ne.CATEGORY_PREFERENCE_COOKIE.getName(),this.consent.toCookieString(),{daysToExpire:ne.CATEGORY_PREFERENCE_COOKIE.getExpirationDays(),path:"/"})}readConsentCookie(){const e=this.cookie.get(ne.CATEGORY_PREFERENCE_COOKIE.getName());return e?J.buildFromCookieString(e):null}safeCallListener(e,t){try{e(t)}catch(e){O.error("error calling listener.")}}isGpcBannerDismissCookiePresent(){return!!this.cookie.get(ne.GPC_BANNER_DISMISS_COOKIE.getName())}setGpcBannerDismissCookie(){this.cookie.set(ne.GPC_BANNER_DISMISS_COOKIE.getName(),"true",{daysToExpire:ne.GPC_BANNER_DISMISS_COOKIE.getExpirationDays(),path:"/"})}isNotifyBannerDismissCookiePresent(){return!!this.cookie.get(ne.NOTIFY_BANNER_DIMISS_COOKIE.getName())}setNotifyBannerDismissCookie(){this.cookie.set(ne.NOTIFY_BANNER_DIMISS_COOKIE.getName(),"true",{daysToExpire:ne.NOTIFY_BANNER_DIMISS_COOKIE.getExpirationDays(),path:"/"})}dismissNotifyBanner(){this.hideBanner();this.setNotifyBannerDismissCookie()}dismissGpcBanner(){this.hideBanner();this.setGpcBannerDismissCookie()}getRenderStyles(){try{if(this.styleOverrides){O.debug("using style overrides");return Mt(Yt(this.styleOverrides))}if(this.matchedSetting){O.debug("using legacy customization render styles");return Mt(Ft(this.matchedSetting.customizationSettings))}}catch(e){console.error("unable to utilize style overides",e)}return""}renderGpcBanner(){this.bannerParentElement=kt(this.apiBaseUrl,this.context,this.matchedSetting,this.getRenderStyles(),this.dismissGpcBanner.bind(this));this.sendViewActivity()}renderBanner(){this.bannerParentElement=Tt(this.apiBaseUrl,this.consent,this.matchedSetting,this.getRenderStyles(),this.context,this.setConsent.bind(this),this.hideBanner.bind(this),this.dismissNotifyBanner.bind(this));this.sendViewActivity()}hideBanner(){if(this.bannerParentElement){const e=this.bannerParentElement.children;for(let t=0;t<e.length;t++)e[t].classList.add(b)}}showBanner(){if(this.matchedSetting.policy.type===H.NO_COOKIES||this.matchedSetting.policy.type===H.COOKIES_WITHOUT_BANNER)return;this.bannerParentElement||(this.shouldGpcOverride()?this.renderGpcBanner():this.renderBanner());const e=this.bannerParentElement.children;if(e.length>1){e[1].classList.remove(b)}else e[0].classList.remove(b)}invoke(e,t){if(!this.publicMethods.includes(e)||!Reflect.has(this,e)){O.debug(`failed to invoke method ${e} of the banner.`);throw new Error("Could not invoke banner method.")}Reflect.get(this,e).apply(this,t)}getBaseActivityPayload(){const e=this.context.getWindow().hsVars,t=e&&e.page_id;return{bannerGeoLocation:this.geoLocation||"",bannerPolicyId:this.matchedSetting.id,bannerType:this.matchedSetting.policy.type.getName(),domain:this.matchedSetting.domain,portalId:this.matchedSetting.portalId,contentId:t||""}}sendClickActivity(){if(!this.consent||!this.matchedSetting||this.isRunningInTestMode)return;const e={consentAllowed:this.consent.allowed,consentAnalytics:this.consent.categories.analytics,consentAdvertisement:this.consent.categories.advertisement,consentFunctionality:this.consent.categories.functionality},t=Object.assign({},this.getBaseActivityPayload(),{},e);Ot.sendClick(this.apiBaseUrl,t)}sendViewActivity(){if(!this.matchedSetting||this.isRunningInTestMode)return;const e=this.getBaseActivityPayload();Ot.sendView(this.apiBaseUrl,e)}getAnalyticsQueue(){return this.context.getWindow()[s]=this.context.getWindow()[s]||[]}trackAction(e){try{this.getAnalyticsQueue().push([e])}catch(e){O.error("Unable to send analytics tracking event: "+e)}}disableBannerFlagSet(){const e=this.context.getWindow()[C]||[];return Array.isArray(e)&&e.includes(x)}revokeCookieConsent(){[ne.INITIAL_OPT_IN.getName(),ne.OPT_OUT_COOKIE.getName(),ne.CATEGORY_PREFERENCE_COOKIE.getName(),ne.GPC_BANNER_DISMISS_COOKIE.getName(),ne.NOTIFY_BANNER_DIMISS_COOKIE.getName(),"__hssc","__hssrc","__hstc","__hs_do_not_track","hubspotutk","messagesUtk"].forEach(e=>this.cookie.remove(e));this.trackAction("trackRevokeCookieConsent");this.setConsent(new J(!1),{reportClick:!1})}addPrivacySettingsListener(e){this.matchedSetting&&this.safeCallListener(e,this.matchedSetting.toLegacyPrivacyPolicy());this.privacySettingsListeners.push(e)}}class Vt{constructor(e){this.priorityFunctions=["setApiBaseUrl","setCookiesToSubdomain","setUseSecureCookies","addCookieDomain","addEnabledFeatureGates","setBannerSettings"];const t=e.getWindow();if(Array.isArray(t[i]))this.queue=t[i];else{this.queue=[];t[i]=this.queue}this.banner=new zt(e);this.context=e}queuePushFn(e){try{if(!(e&&Array.isArray(e)&&e.length>0)){O.debug("invalid arguments passed to the banner queue.");return!1}const t=e[0],n=e.slice(1);this.banner.invoke(t,n);return!0}catch(e){O.error("There was an error running banner method.")}return!1}overrideQueuePush(){this.queue.push=this.queuePushFn.bind(this)}dequeueEntries(e){for(let t=0;t<this.queue.length;t++){const n=this.queue[t];if(!Array.isArray(n)||0===n.length)continue;const o=n[0];if(e.includes(o)){this.queuePushFn(n);this.queue.splice(t--,1)}}}dequeueAllEntries(){for(let e=0;e<this.queue.length;e++){const t=this.queue[e];if(Array.isArray(t)&&0!==t.length){this.queuePushFn(t);this.queue.splice(e--,1)}}}run(){const e=this.context.getWindow();if(!e[l]){e[l]=!0;this.dequeueEntries(["setUseGeoLocation"]);this.dequeueEntries(this.priorityFunctions);this.dequeueAllEntries();this.overrideQueuePush();this.banner.useGeoLocation?this.banner.getCurrentGeoLocation().then(e=>{this.banner.setGeoLocation(e);this.banner.run()}):this.banner.run()}}}var $t=n(3);const Kt=e=>e.stack?$t.parse(e.stack).map(e=>({filename:e.file,function:e.methodName,args:e.arguments,lineno:e.lineNumber,colno:e.column})):[],Wt=()=>{if(!document.currentScript)return null;const e=document.currentScript.getAttribute("src");return e?e.toLowerCase().includes("qa")?"qa":"prod":null},qt=()=>{if(!document.currentScript)return null;const e=document.currentScript.getAttribute("src");return e?e.toLowerCase().includes("eu1")?"eu1":"na1":null},jt="https://exceptions{{hublet}}.hs-embed-reporting{{env}}.com/outpost",Jt=()=>"10000000-1000-4000-8000-100000000000".replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)),Qt=()=>"randomUUID"in crypto?crypto.randomUUID():Jt(),Zt=(e,t)=>{const n="na1"!==e?"-"+e:"",o="qa"===t?"qa":"";return jt.replace("{{hublet}}",n).replace("{{env}}",o)},Xt=(e,t,n,o)=>{const i=Date.now()/1e3,s=Kt(e);return{level:"error",environment:t,tags:{region:n},logger:"javascript",platform:"javascript",request:{headers:{"User-Agent":navigator.userAgent},url:window.location.href},event_id:Qt().replace(/-/g,""),transaction:e.message,exception:{values:[{mechanism:{handled:!0,type:"generic"},type:e.name,value:e.message,stacktrace:{frames:s}}]},timestamp:i,extra:o}},en=e=>{(new Image).src=e},tn=e=>{const t=e instanceof Error,n=t?e:new Error(String(e)),o=Wt()||"prod",i=qt()||"na1",s=Xt(n,o,i,{isInstanceOfError:t});en(`${Zt(i,o)}/cookie-banner-v2/raw/error.gif?url=${s.request.url}\n    &report=${encodeURIComponent(JSON.stringify(s))}`)},nn=T();function on(){const e=nn.getWindow();if(e[o]){O.info("the cookie banner has already been loaded via another script.");return}e[o]=!0;new Vt(nn).run()}function sn(e){try{e()}catch(e){console.error(e);tn(e)}}function rn(){sn(on)}const an=nn.getDocument();function cn(){rn();an.removeEventListener("DOMContentLoaded",cn)}"loading"===an.readyState?an.addEventListener("DOMContentLoaded",cn):rn()}]);
/****** Cookie Banner version static-1.1671 *****/-概要と使い方</a>
          <span class="date"><span class="icon-time"></span>2023年11月13日</span>
        </li>
        <li class="story-rank">
          <span class="rank rankall">11</span><a href="/article/35213610/">2024年のスマホはさらに「賢く」「速く」「折りたたみ式」に</a>
          <span class="date"><span class="icon-time"></span>2024年01月15日</span>
        </li>
        <li class="story-rank">
          <span class="rank rankall">12</span><a href="/article/35213718/">ASUS、折りたためる17型ディスプレイ「ZenScreen Fold OLED」を発表</a>
          <span class="date"><span class="icon-time"></span>2024年01月11日</span>
        </li>
        <li class="story-rank">
          <span class="rank rankall">13</span><a href="/article/35212640/">「iPhone 16」うわさまとめ--画面の大型化、ズームの向上、新チップなど</a>
          <span class="date"><span class="icon-time"></span>2023年12月15日</span>
        </li>
        <li class="story-rank">
          <span class="rank rankall">14</span><a href="/article/35213677/">サムスン、内にも外にも折りたためる最新コンセプトスマホを披露</a>
          <span class="date"><span class="icon-time"></span>2024年01月11日</span>
        </li>
        <li class="story-rank">
          <span class="rank rankall">15</span><a href="/article/35213933/">ドコモ、メタバース空間内のNPCをテキスト入力のみで自動生成する生成AIを開発</a>
          <span class="date"><span class="icon-time"></span>2024年01月16日</span>
        </li>
    </ul>
  </div>

    <div class="left-article-block" id="editor_recommend">
    <h2 class="content-ttl">編集部おすすめの記事</h2>
    <ul>
            <li><a
                href="https://japan.cnet.com/article/35213073/">「AIだけ」はNG--生成AIをいち早く取り入れたDMM英会話に聞く、上達のコツとこれから</a><span><span class="icon-time"></span>2024年01月03日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35213153/">「Second Life」創業メンバー、元Facebook/Googleのコリー氏がスマートニュースCTOに--背景や狙いは</a><span><span class="icon-time"></span>2024年01月02日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35213160/">「合わせに行く」のではなく「引き込む」--共創型のモビリティ開発で世界に挑むソニー・ホンダモビリティ</a><span><span class="icon-time"></span>2024年01月01日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35212361/">イトーキ、全てを自分たちで決める社内PJ--若手6人が「徳島ワーケーション」を選んだ理由</a><span><span class="icon-time"></span>2023年12月31日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35213161/">迫る物流業界の2024年問題--DXで省人化に挑む山善の取り組み</a><span><span class="icon-time"></span>2023年12月30日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35213040/">LIFULL、伊東祐司氏が新社長に就任--不動産業で社会課題の解決目指す</a><span><span class="icon-time"></span>2023年12月22日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35212419/">本場NYでアートビジネスを立ち上げた日本人起業家</a><span><span class="icon-time"></span>2023年12月20日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35211457/">食のスタートアップが利益を出せる事業モデルとは--大手アクセラ米Union Kitchen創業者に聞く</a><span><span class="icon-time"></span>2023年11月28日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35211045/">新製品一挙発表のシャオミ、国内トップが見据える「スマホの次」</a><span><span class="icon-time"></span>2023年11月20日</span>
            </li>
            <li><a
                href="https://japan.cnet.com/article/35211136/">「お～いお茶 カテキン緑茶」のパッケージをAIが作成--開発したプラグが語る「ダメ出し」に強い理由</a><span><span class="icon-time"></span>2023年11月16日</span>
            </li>
    </ul>
  </div><!-- 編集部おすすめここまで -->
      </div><!--/leftside-column-->
      <!----------------------/left-------------------------->
    
          <!----------------------right-------------------------->
      <div id="rightside-column" class="nocontent">
        
<!--AD_RECT-->
<div id="ad_rect" class="right-ad-block ad_container">
  <div id="10713_9757"><script type="text/javascript">try{  TagProvider.displayAd('10713_9757')}catch(err){}</script></div></div>
<!--AD_RECT END-->      <div class="right-ad-block">
        <a href="https://japan.zdnet.com/extra/domo_202103/" target="_top">
          <img src="https://www.aiasahi.jp/ads/2023/300x50/230801_domo_300_50.gif" alt="">
        </a>
      </div>
  
  <div class="iframeWrapper">
    <iframe id="ad_tieup_right_300_ifr" class="parts_frame_ads_iframe" src="/parts/frame/responsive/ad_tieup_right_300.htm" frameborder="0" scrolling="no" width="100%" height="388" style="margin:0 auto"></iframe>
  </div>

      <div class="right-photorepo-block">
    <h2 class="content-ttl">フォトレポート</h2>
    <ul class="photorepo-inner">
              <li>
          <a href="/article/35213886/" ><img src="/storage/2024/01/15/5d2107ed4cc962454e0f0df987ac1ae7/t/276/207/d/240115_a350_000.jpg" alt="JALの新機材「A350-1000」を見る--全クラスでグレードアップした長距離国際線向けフラッグシップ"></a>
          <span class="photorepo-text">
            <a href="/article/35213886/" >JALの新機材「A350-1000」を見る--全クラスでグレードアップした長距離国際線向けフラッグシップ</a>
          </span>
        </li>
              <li>
          <a href="/article/35213697/" ><img src="/storage/2024/01/10/6a0816467134eb8dcc01ea9f8dda2dc1/t/276/207/d/240110_sharp_ces_05.jpg" alt="シャープ、CESで最新技術続々--調理時間短縮できるオーブンから宇宙用ソーラーシートまで"></a>
          <span class="photorepo-text">
            <a href="/article/35213697/" >シャープ、CESで最新技術続々--調理時間短縮できるオーブンから宇宙用ソーラーシートまで</a>
          </span>
        </li>
              <li>
          <a href="/article/35213820/" ><img src="/storage/2024/01/12/506557a135094011e4789aba1403e3a8/t/276/207/d/img-1349_1280x960.jpg" alt="「CES 2024」で未来が楽しみに--想像力をかきたてるコンセプト製品の数々"></a>
          <span class="photorepo-text">
            <a href="/article/35213820/" >「CES 2024」で未来が楽しみに--想像力をかきたてるコンセプト製品の数々</a>
          </span>
        </li>
              <li>
          <a href="/article/35213699/" ><img src="/storage/2024/01/10/5d19fe7ef4d2804a574d7591807f24ef/t/276/207/d/240110_panasonic_ces_15.jpg" alt="パナソニックがCESで示した「くらしの質」向上家電--再エネからFireTV搭載テレビまで"></a>
          <span class="photorepo-text">
            <a href="/article/35213699/" >パナソニックがCESで示した「くらしの質」向上家電--再エネからFireTV搭載テレビまで</a>
          </span>
        </li>
          </ul>
    <ul class="photorepo-inner">
              <li>
          <a href="/article/35212369/" ><img src="/storage/2023/12/06/c3506a5258a265e692041790befdaca3/t/276/207/d/20231206pulseextop_640.jpg" alt="「PULSE Explore ワイヤレスイヤホン」開封＆実機体験--PS5のゲーム体験を向上させるアイテム" ></a>
          <span class="photorepo-text">
            <a href="/article/35212369/" >「PULSE Explore ワイヤレスイヤホン」開封＆実機体験--PS5のゲーム体験を向上させるアイテム</a>
          </span>
        </li>
              <li>
          <a href="/article/35212317/" ><img src="/storage/2023/12/04/6529c884c4e6804a04866edb6fab02f6/t/276/207/d/23.JPG" alt="シャオミ、渋谷に国内初のポップアップストア--「13T/13T Pro」や国内未発表製品も" ></a>
          <span class="photorepo-text">
            <a href="/article/35212317/" >シャオミ、渋谷に国内初のポップアップストア--「13T/13T Pro」や国内未発表製品も</a>
          </span>
        </li>
              <li>
          <a href="/article/35212136/" ><img src="/storage/2023/11/29/b7486d84b6e0ba13b2069ef49f8c16c1/t/276/207/d/7231129_robot_13.jpg" alt="働き方を変える最新ロボットが一堂に--作業効率化から人との協働まで" ></a>
          <span class="photorepo-text">
            <a href="/article/35212136/" >働き方を変える最新ロボットが一堂に--作業効率化から人との協働まで</a>
          </span>
        </li>
              <li>
          <a href="/article/35212010/" ><img src="/storage/2023/11/28/0286bfc4fbb2097285c7ea80985d671a/t/276/207/d/20231127amexpotop_640.jpg" alt="巨大ロボットの歩行実演、懐かしのゲーセンゲームも--「アミューズメント エキスポ」" ></a>
          <span class="photorepo-text">
            <a href="/article/35212010/" >巨大ロボットの歩行実演、懐かしのゲーセンゲームも--「アミューズメント エキスポ」</a>
          </span>
        </li>
      
    </ul>

  </div><!--/right-photorepo-block-->
      <div class="right-wp-block mb10 clearfix">
    <h2 class="content-ttl">ホワイトペーパー</h2>
    <ul>
              <li>
          <a href="https://japan.zdnet.com/paper/cio/">経営</a>
        </li>
              <li>
          <a href="https://japan.zdnet.com/paper/security/">セキュリティ</a>
        </li>
              <li>
          <a href="https://japan.zdnet.com/paper/cloud/">クラウドコンピューティング</a>
        </li>
              <li>
          <a href="https://japan.zdnet.com/paper/mobile/">モバイル</a>
        </li>
              <li>
          <a href="https://japan.zdnet.com/paper/business-application/">ビジネスアプリケーション</a>
        </li>
              <li>
          <a href="https://japan.zdnet.com/paper/web/">マーケティング</a>
        </li>
          </ul>
  </div><!--/right-wp-block-->
  <div class="right-info-block">
  <div class="item">
    <a href="#"
       onclick="dialogopen('https://s.japan.cnet.com/membership/new_register/?next=68747470733a2f2f6a6170616e2e636e65742e636f6d2f'); return false;" data-ga_category="cnet_id_register" data-ga_label="right_col_newsletter">
      <img src="/media/c/2012/images/banner/newsletter2011_300x41.png">
    </a>
  </div>
</div><!-- info -->
<div class="right-info-block">
  <div class="item">
    <h3 class="content-ttl">朝日インタラクティブからのお知らせ</h3>
    <ul class="list_arrow_k">
      <li><a href="https://japan.zdnet.com/cio/sp_12executive/" target="_blank">「ZDNET Japan
          トップインタビュー」：CEOやCIOが毎回登場（毎週木曜更新）</a></li>
    </ul>
  </div>
</div>
<!-- //info -->
<div class="right-info-block">
  <div class="item tc">
    <div class="fb-page" data-href="https://www.facebook.com/cnetjapan" data-width="380" data-hide-cover="false"
         data-show-facepile="false" data-show-posts="false">
      <div class="fb-xfbml-parse-ignore">
        <blockquote cite="https://www.facebook.com/cnetjapan">
          <a href="https://www.facebook.com/cnetjapan">CNET Japan（Facebook窓）</a>
        </blockquote>
      </div>
    </div>
  </div>
</div><!-- AD RECT MIDDLE -->
<div id="ad_mrect" class="right-ad-block">
  <div id="10714_9757"><script type="text/javascript">try{  TagProvider.displayAd('10714_9757')}catch(err){}</script></div></div>
<!-- //AD RECT MIDDLE -->      </div><!--/rightside-column-->
    
    <!----------------------/right-------------------------->

  </div><!--/column-content-block-->
</div>
      <div id="content-bottom-block" class="nocontent">
      <div class="item">
        
<!--AD_FLARGE-->
<div class="ad_large_footer_wrapper clearfix">
    <div id="ad_large_footer" class="ad_large_footer clearfix">
      <div id="10716_9757"><script type="text/javascript">try{  TagProvider.displayAd('10716_9757')}catch(err){}</script></div>    </div>
</div>
<!--AD_FLARGE END-->      </div>
    </div><!--/content-bottom-block-->
  </div><!--/page-wrap-->

<div class="nocontent">
    <!-- footer -->


  <div id="footer-wrap">
    <div class="footer-info-block">
      <div class="info-left">
        <span>The Japanese edition of 'CNET' is published under license from A Red Ventures Company., Fort Mill, SC, USA. Editorial items appearing in 'CNET Japan' that were originally published in the US Edition of 'CNET', 'ZDNET' and 'CNET News.com' are the copyright properties of A Red Ventures Company. or its suppliers. Copyright (c) A Red Ventures Company. All Rights Reserved. 'CNET', 'ZDNET' and 'CNET News.com' are trademarks of A Red Ventures Company.</span>
      </div>
      <div class="info-right">
        <span><a href="https://aiasahi.jp/privacy/" target="_blank">個人情報保護方針</a></span> ｜ <span><a href="https://aiasahi.jp/term/" target="_blank">利用規約</a></span>｜ <span><a href="https://aiasahi.jp/" target="_blank">運営会社</a></span> ｜ <span><a href="https://aiasahi.jp/cookie/" target="_blank">クッキーについて</a></span> ｜ <a href="https://aiasahi.jp/advertisement/" target="_blank">広告について</a>
      </div>
    </div>
    <div class="map-block">
      <ul>
        <li>
          <div class="footer-logo"><a href="/"><img src="/media/c/2012/images/responsive/logo_cnetjapan_2022.png" alt="CNET Japan"></a></div>
        </li>
        <li>
          <div class="site-map">
            <p class="map-topics"><a href="/news/">ニュース</a></p>
            <p class="map-contents"><a href="/news/service/">製品・サービス</a></p>
            <p class="map-contents"><a href="/news/business/">企業・業界</a></p>
            <p class="map-contents"><a href="/news/society/">社会</a></p>
            <p class="map-contents"><a href="/news/offtopic/">オフトピック</a></p>
            <p class="map-contents"><a href="/news/topics/">トピック</a></p>
            <p class="map-contents"><a href="/news/commentary/">解説</a></p>
            <p class="map-contents"><a href="/release/">リリース</a></p>
            <p class="map-contents"><a href="/event/">イベント</a></p>
            <p class="map-contents"><a href="/archives/">過去記事</a></p>
          </div>
        </li>
        <li>
          <div class="site-map">
            <p class="map-contents"><a href="/marketers/">Marketers'</a></p>
            <p class="map-contents"><a href="/sp/">特集</a></p>
            <p class="map-contents"><a href="/interview/">インタビュー</a></p>
            <p class="map-contents"><a href="/opinion/">オピニオン</a></p>
            <p class="map-contents"><a href="/app/android/">ビジネスアプリセンター（Android）</a></p>
            <p class="map-contents"><a href="/app/ios/">ビジネスアプリセンター（iOS）</a></p>
            <p class="map-contents"><a href="/tag/">タグ</a></p>
            <p class="map-contents"><a href="/search/">検索</a></p>
          </div>
        </li>
        <li>
          <div class="site-map">
            <p class="map-topics"><a href="/digital/">デジタル製品</a></p>
            <p class="map-contents"><a href="/mobile/">モバイル</a></p>
            <p class="map-contents"><a href="/digital/pc/">PC</a></p>
            <p class="map-contents"><a href="/digital/av/">AV</a></p>
            <p class="map-contents"><a href="/digital/camera/">デジタルカメラ</a></p>
            <p class="map-contents"><a href="/apple/">アップル</a></p>
            <p class="map-contents"><a href="/entertainment/">エンターテインメント</a></p>
          </div>
        </li>
        <li>
          <div class="site-map">
            <p class="map-topics"><a href="/guide/cnet_id/">CNET_ID</a></p>
            <p class="map-contents"><a href="https://s.japan.cnet.com/membership/">新規登録</a></p>
            <p class="map-contents"><a href="/info/newsletter/">ニューズレター</a></p>
          </div>
        </li>
        <li>
          <div class="site-map">
            <p class="map-contents"><a href="/info/feed/">RSSフィード</a></p>
            <p class="map-contents"><a href="//twitter.com/cnet_japan">X</a></p>
            <p class="map-contents"><a href="//www.facebook.com/CNETJapan">Facebook</a></p>
            <p class="map-topics"><a href="/info/sitemap/">サイトマップ</a></p>
          </div>
          <div class="site-map">
            <p class="map-topics"><a href="https://aiasahi.jp/" target="_blank">朝日インタラクティブ</a></p>
            <p class="map-contents"><a href="https://japan.zdnet.com/" target="_blank">ZDNET Japan</a></p>
            <p class="map-contents"><a href="https://www.tetsudo.com/" target="_blank">Tetsudo.com</a></p>
            <p class="map-contents"><a href="https://uchubiz.com/" target="_blank">UchuBiz</a></p>
            <p class="map-contents"><a href="https://smbiz.asahi.com/" target="_blank">ツギノジダイ</a></p>
          </div>
        </li>

      </ul>
    </div>

    <div class="footer-copy-block">
      <div class="info-left" >
        <p>当サイトは最新ブラウザでの閲覧を推奨します。</p>
        <p>Copyright (c) 2024 ASAHI INTERACTIVE, Inc. All rights reserved. No reproduction or republication
          without written permission.</p>
      </div>
    </div>
  </div><!--/footer-wrap-->

<div id="footer-wrap-resp">
    <div class="footer-terms">
        <span>The Japanese edition of 'CNET' is published under license from A Red Ventures Company., Fort Mill, SC, USA. Editorial items appearing in 'CNET Japan' that were originally published in the US Edition of 'CNET', 'ZDNET' and 'CNET News.com' are the copyright properties of A Red Ventures Company. or its suppliers. Copyright (c) A Red Ventures Company. All Rights Reserved. 'CNET', 'ZDNET' and 'CNET News.com' are trademarks of A Red Ventures Company.</span>
        <span><a href="https://aiasahi.jp/privacy/" target="_blank">個人情報保護方針</a></span>
        <span><a href="https://aiasahi.jp/term/" target="_blank">利用規約</a></span>
        <span><a href="https://aiasahi.jp/" target="_blank">運営会社</a></span>
        <span><a href="https://aiasahi.jp/cookie/" target="_blank">クッキーについて</a></span>
        <span><a href="https://aiasahi.jp/advertisement/" target="_blank">広告について</a></span>
    </div>
    
    <div class="footer-copy">
        <span>当サイトは最新ブラウザでの閲覧を推奨します。</span>
        <span>Copyright (c) 2024 ASAHI INTERACTIVE, Inc. All rights reserved. No reproduction or republication without written permission.</span>
    </div> 
</div><!--// footer-wrap-resp --><script type="text/javascript" src="/static/js/ants/common.js?1678867599"></script>



<script>
  $(function(){
    if($(".photolist").length > 0)
      $(".photolist").FeatureBox({});
  });
</script>
<script type="text/javascript" src="//www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=ja"></script>
<script>
  window.ptsdkConfig = {
    autoSubscribe: true,
    readyFunc: ptsdk_updateAttibutes
  };

  /**
   *
   */
  function ptsdk_updateAttibutes() {

    var data = [];
    if (getCookie("CNET_ID_LOGINED")) {
            data.push({"key": "member_key", "value": getCookie("_aicid")});
    }
    
        var content_categories = JSON.parse('[]');

    var ls_item = localStorage.getItem('pt_new_categories');
    var ls_categories = [];
    var all_categories = [];

    if (ls_item != null) {
      
      ls_categories = JSON.parse(ls_item);
      all_categories = JSON.parse(ls_item);

      _update_func(data, content_categories, ls_categories, all_categories);

    } else {
      
      ptsdk.getAttributes()
        .then(function (attributes) {

          var pt_value = null;

          for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].key == 'new_category') {
              pt_value = attributes[i].value;
              break;
            }
          }

          //
          if (pt_value != null) {
            
            ls_categories = pt_value.split('|||');
            localStorage.setItem('pt_new_categories', JSON.stringify(ls_categories));

            all_categories = pt_value.split('|||');
          }

          //
          _update_func(data, content_categories, ls_categories, all_categories);
        });
    }
  }

  /**
   *
   */
  function _update_func(data, content_categories, ls_categories, all_categories) {

    for (var i = 0, l = content_categories.length; i < l; i++) {
      if (ls_categories.indexOf(content_categories[i]) == -1) {
        all_categories.push(content_categories[i]);
      }
    }

    if (ls_categories.length != all_categories.length && all_categories.length > 0) {
      data.push({"key": "new_category", "value": all_categories.join('|||')});
    }

    //
    if (ptsdk && data.length > 0) {
      ptsdk.updateAttributes(
        data
      )
        .catch(function (e) {
                  })
        .then(function () {
          if (ls_categories.length != all_categories.length && all_categories.length > 0) {
            localStorage.setItem('pt_new_categories', JSON.stringify(all_categories));
          }
                  });
    }
  }
</script>
<script type="text/javascript">(function(d,u){var b=d.getElementsByTagName("script")[0],j=d.createElement("script");j.async=true;j.src=u;b.parentNode.insertBefore(j,b);})(document,"//img.ak.impact-ad.jp/ut/bb5e8db7c2720d69_3807.js");</script><noscript><iframe src="//nspt.unitag.jp/bb5e8db7c2720d69_3807.php" width="0" height="0" frameborder="0"></iframe></noscript>  <script src="/static/js/ants/swiper.min.js?1497504507"></script>
  <script type="text/javascript">
      var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      spaceBetween: 30,
      effect: 'fade',
      loop: true
    });
      </script>


  <script type="text/javascript" src="/static/js/ants/iziModal.min.js?1505826204"></script>
  <div id="modal_dialog" style="display: none;"></div>

<script type="text/javascript">
  var current_scrollY;
  var $modal;

  function dialogopen(url, max_heigt, window_width){
    $modal = init_modal(url, max_heigt, window_width);

    $modal.iziModal('open');
  }

  function dialog_close(){

    $modal.iziModal('close');
    return false;
  }

  //
  function init_modal(url, max_height, window_width) {
    iframe_height = window.innerHeight * 0.85;
    if (!max_height) {

      if (iframe_height <= 350) {
        iframe_height = 350;
      }
    }else{
      if (max_height <= iframe_height){
        iframe_height = max_height;
      }
    }
    if (!window_width){
      window_width = 600; //default
    }else{
      if (window_width < 600){
        window_width = 600;
      }
    }

    $modal = new $("#modal_dialog").iziModal({
      zindex: 10001,
      title: ' ',
      headerColor: 'silver',
      width: window_width,
      iframe: true,
      iframeHeight: iframe_height,
      iframeURL: url,
      transitionIn: false,
      transitionInOverlay: false,
      overlayColor: 'rgba(0,0,0,0.7)',
      onOpening: function(modal){
        current_scrollY = $(window).scrollTop();
        scroll_width = document.body.scrollWidth;
        $('body').css({position:"fixed", width:scroll_width, overflow:'hidden', top: -1 * current_scrollY});
      },
      onClosing: function(modal) {
        $("body").css({position:"", width:'', overflow:'', top:''});
        $('html, body').prop( { scrollTop: current_scrollY } );
        current_scrollY = 0;
      },
      onClosed: function(modal){
        modal.destroy();
      }
    });

    return $modal;
  }


</script></div>

<p id="pageTop"><a href="#"><i class="fa fa-chevron-up"></i></a></p>
<!-- //AD ELU -->

  <div id="fb-root"></div>
  <script type="text/javascript">
  window.fbAsyncInit = function() {
    if ($("#fb").length > 0){
      FB.Event.subscribe('xfbml.render',
        function(response){
          $("#fb img").show();
        }
      );
    }
    FB.Event.subscribe('edge.create', function(url) {
      ga('send', 'social', 'facebook', 'share', url);
    });
  };

  function facebookbtnload(d, s, id) {
    if ($("#block_elu").css("display") == "none") {
      setTimeout(function(){
        facebookbtnload(document, 'script', 'facebook-jssdk');
      }, 1000);
    } else {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id; js.async=true;
      js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=593474487353841&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
  facebookbtnload(document, 'script', 'facebook-jssdk');
</script><!-- ad inread -->
<div class="ad" id="ad-inread">
  <div id="10717_9757"><script type="text/javascript">try{  TagProvider.displayAd('10717_9757')}catch(err){}</script></div></div>
<!-- //ad inread --><!-- ad inread_rich -->
<div class="ad" id="ad-inread_rich">
  <div id="10718_9757"><script type="text/javascript">try{  TagProvider.displayAd('10718_9757')}catch(err){}</script></div></div>
<!-- //ad inread_rich --><!-- #ad_float -->
<div id="ad_float">
  <div class="floating_banner_area">
    <div id="16715_9757"><script type="text/javascript">try{  TagProvider.displayAd('16715_9757')}catch(err){}</script></div>  </div>
</div>
<!-- /#ad_float -->
<div id="gdpr_area">
  <div class="gdpr_area_inner">
    <span class="break">このサイトでは、利用状況の把握や広告配信などのために、Cookieなどを使用してアクセスデータを取得・利用しています。</span>
    これ以降ページを遷移した場合、Cookieなどの設定や使用に同意したことになります。<br>
    Cookieなどの設定や使用の詳細、オプトアウトについては<a href="https://aiasahi.jp/cookie/">詳細</a>をご覧ください。<br>
    <span class="gdpr_btn_agree">[ 閉じる ]</span>
  </div>
</div>

</body>
</html>