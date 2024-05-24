let t=function e(){t("[reveal] web components ready"),t("[reveal] elements ready, revealing the body"),window.document.body.removeAttribute("unresolved")}function s(t){return t.hasOwnProperty("default")&&t.default.constructor===t.type}Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:),Object.entries||(Object.entries=,String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:),Element.prototype.closest||(Element.prototype.closest=,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:configurable:!0,writable:!0});class r extends HTMLElement{static debugLog(t=null){if(null!==t)try{localStorage.pfeLog=!!t}catch(e){return r._debugLog=!!t,r._debugLog}return"true"===localStorage.pfeLog||r._debugLog}static trackPerformance(t=null){return null!==t&&(r._trackPerformance=!!t),r._trackPerformance}static get configtatic log(...t){r.debugLog()&&console.log(...t)}log(...t){r.log(`[${this.tag}${this.id?"#"+this.id:""}]`,...t)}arn(...t){r.warn(`[${this.tag}${this.id?"#"+this.id:""}]`,...t)}static error(...t){throw new Error([...t].join(" "))}error(...t){r.error(`[${this.tag}${this.id?"#"+this.id:""}]`,...t)}tic get properties(){return{pfelement:{title:"Upgraded flag",type:Boolean,default:!0,observer:"_upgradeObserver"},on:{title:"Context",description:"Describes the visual context (backgrounds).",type:String,values:["light","dark","saturated"],default:observer:"_onObserver"},context:{title:"Context hook",description:"Lets you override the system-set context.",type:String,values:["light","dark","saturated"],observer:"_contextObserver"},oldTheme:{type:String,values:["light","dark","saturated"],alias:"context",attr:"pfe-theme"},_style:{title:"Custom styles",type:String,attr:"style",observer:"_inlineStyleObserver"},type:{title:"Component type",type:String,values:["container","content","combo"]}}}static get observedAttributes(){const t=this.allProperties;if(t){return[...Object.keys(t).filter(.map(]}}LightDOMasSlot(t){if(t)return"string"==typeof t?[...this.children].filter(e=>e.hasAttribute("slot")&&e.getAttribute("slot")===t).length>0:Array.isArray(t)?t.reduce(t=>[...this.children].filter(e=>e.hasAttribute("slot")&&e.getAttribute("slot")===t).length>0):void this.warn(`Expected hasSlot argument to be a string or an array, but it was given: ${typeof t}.`);this.warn("Please provide at least one slot name for which to search.")}getSlot(t="unassigned"){return"unassigned"!==t?[...this.children].filter(e=>e.hasAttribute("slot")&&e.getAttribute("slot")===t):[...this.children].filter(t=>!t.hasAttribute("slot"))}cssVariable(t,e,s=this){return t="--"!==t.substr(0,2)?"--"+t:t,e?(s.style.setProperty(t,e),e):window.getComputedStyle(s).getPropertyValue(t).trim()||null}contextUpdate(){const t=[...this.querySelectorAll("*")].filter(t=>"pfe-"===t.tagName.toLowerCase().slice(0,4)).filter(t=>t.parentElement?t.parentElement.closest(`[${this._pfeClass._getCache("prop2attr").pfelement}]`)===this:void 0);let e=[...this.shadowRoot.querySelectorAll("*")].filter(t=>"pfe-"===t.tagName.toLowerCase().slice(0,4)).filter(t=>t.parentElement&&t.parentElement.closest(`[${this._pfeClass._getCache("prop2attr").pfelement}]`)?t.parentElement.closest(`[${this._pfeClass._getCache("prop2attr").pfelement}]`)===this:t.getRootNode().host===this);const s=t.concat(e);0!==s.length&&s.map(t=>{t.resetContext&&(this.log("Update context of "+t.tagName.toLowerCase()),t.resetContext(this.on))})}resetContext(t){if(this.isIE11)return;let e=this.context||this.contextVariable||t;this.on!==e&&(this.on||e)&&(this.log(`Resetting context from ${this.on} to ${e||"null"}`),this.on=e)}constructor(t,{type:e=null,delayRender:s=!1}={}){super(),this._pfeClass=t,this.tag=t.tag,this._parseObserver=this._parseObserver.bind(this),this.isIE11=/MSIE|Trident|Edge\//.test(window.navigator.userAgent),this._pfeClass.instances&&this._pfeClass.instances.length>=0||(this._pfeClass.instances=[]),this.id?this.id.startsWith("pfe-")&&!this.id.startsWith(this.tag)?this._markId=this.id.replace("pfe",this.tag):this._markId=`${this.tag}-${this.id}`:this._markId=this.randomId.replace("pfe",this.tag),this._markCount=0,this.schemaProps=t.schemaProperties,this.slots=t.slots,this.template=document.createElement("template"),e&&this._pfeClass.allProperties.type&&(this._pfeClass.allProperties.type.default=e),this._initializeProperties(),this.attachShadow({mode:"open"}),this._rendered=!1,s||this.render()}connectedCallback(){this._initializeAttributeDefaults(),window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._pfeClass.instances.push(this),r.allInstances.push(this),"object"==typeof this.slots&&(this._slotsObserver=new MutationObserver(,this._initializeSlots(this.tag,this.slots))}disconnectedCallback(){this._cascadeObserver&&this._cascadeObserver.disconnect(),this._slotsObserver&&this._slotsObserver.disconnect();const t=this._pfeClass.instances.find(t=>t!==this);delete this._pfeClass.instances[t];const e=r.allInstances.find(;delete r.allInstances[e]}attributeChangedCallback(t,e,s){if(!this._pfeClass.allProperties)return;let r=this._pfeClass._attr2prop(t);const i=this._pfeClass.allProperties[r];if(i){if(i.alias){const t=this._pfeClass.allProperties[i.alias],e=this._pfeClass._prop2attr(i.alias);this.getAttribute(e)!==s&&(this[i.alias]=this._castPropertyValue(t,s))}i.observer&&this[i.observer](this._castPropertyValue(i,e),this._castPropertyValue(i,s)),i.cascade&&this._cascadeAttribute(t,this._pfeClass._convertSelectorsToArray(i.cascade))}}render(){if(this.shadowRoot.innerHTML="",this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0)),this.log("render"),this.cascadeProperties(),this.contextUpdate(),r.trackPerformance())try{performance.mark(this._markId+"-rendered"),this._markCount<1&&(this._markCount=this._markCount+1,performance.measure(this._markId+"-from-navigation-to-first-render",void 0,this._markId+"-rendered"),performance.measure(this._markId+"-from-defined-to-first-render",this._markId+"-defined",this._markId+"-rendered"))}catch(t){this.log("Performance marks are not supported by this browser.")}"object"==typeof this.slots&&this._slotsObserver&&this._slotsObserver.observe(this,{childList:!0}),this._cascadeObserver&&this._cascadeObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this._rendered=!0}emitEvent(t,{bubbles:e=!0,cancelable:s=!1,composed:r=!0,detail:i={}}={}){i?this.log("Custom event: "+t,i):this.log("Custom event: "+t),this.dispatchEvent(new CustomEvent(t,{bubbles:e,cancelable:s,composed:r,detail:i}))}cascadeProperties(t){const e=this._pfeClass._getCache("cascadingProperties");if(e){this._cascadeObserver&&this._cascadeObserver.disconnect();let s=Object.keys(e);if(s)if(t)[...t].forEach(t=>{s.forEach(s=>{if(t.matches&&t.matches(s)){e[s].forEach(}})});else{const t=s.filter(t=>"pfe-"===t.slice(0,"pfe".length+1)).map(;t?Promise.all(t).then(:this._cascadeAttributes(s,e)}this._rendered&&this._cascadeObserver&&this._cascadeObserver.observe(this,{attributes:!0,childList:!0,subtree:!0})}}contextObserver(t,e){e&&(t&&t!==e||!t)&&(this.log("Running the context observer"),this.on=e,this.cssVariable("context",e))}_onObserver(t,e){(t&&t!==e||e&&!t)&&(this.log("Context update"),this.contextUpdate())}_inlineStyleObserver(t,e){if(t!==e)if(e){this.log("Style observer activated on "+this.tag,""+(e||"null"));let t=/--[\w|-]*(?:context|theme):\s*(?:\"*(light|dark|saturated)\"*)/gi.exec(e);if(!t)return;const s=t[1];s===this.on||this.context||(this.on=s)}else this.resetContext()}_parseObserver(t){for(let e of t)if("childList"===e.type&&e.addedNodes.length){const t=[...e.addedNodes].filter(;this.cascadeProperties(t)}}static _validateProperties(){for(let t in this.allProperties){const e=this.allProperties[t];[String,Number,Boolean].includes(e.type||String)||this.error(`Property "${t}" on ${this.name} must have type String, Number, or Boolean.`),/^[a-z_]/.test(t)||this.error(`Property ${this.name}.${t} defined, but prop names must begin with a lower-case letter or an underscore`);const r="function"==typeof e.default;!e.default||s(e)||r||this.error(`[${this.name}] The default value \`${e.default}\` does not match the assigned type ${e.type.name} for the '${t}' property`)}}_castPropertyValue(t,e){switch(t.type){case Number:return{[e]:Number(e),null:null,NaN:NaN,undefined:void 0}[e];case Boolean:return null!==e;case String:return{[e]:e,undefined:void 0}[e];default:return e}}_assignValueToAttribute(t,e,s){t.type===Boolean&&!s||null===s||void 0===s?this.removeAttribute(e):t.type===Boolean&&"boolean"==typeof s?this.setAttribute(e,""):(t.values&&this._validateAttributeValue(t,e,s),this.setAttribute(e,s))}_initializeSlots(t,e){this.log("Validate slots..."),this._slotsObserver&&this._slotsObserver.disconnect(),Object.keys(e).forEach(s=>{let r=e[s];if("object"==typeof r){let e=!1,i=[];r.namedSlot?(i=this.getSlot(`${t}--${s}`),i.length>0&&(r.nodes=i,e=!0),i=this.getSlot(""+s),i.length>0&&(r.nodes=i,e=!0)):(i=[...this.children].filter(,i.length>0&&(r.nodes=i,e=!0)),e?this.setAttribute("has_"+s,""):this.removeAttribute("has_"+s)}}),this.log("Slots validated."),this._slotsObserver&&this._slotsObserver.observe(this,{childList:!0})}_initializeProperties(){const t=this._pfeClass.allProperties;let e=!1;Object.keys(t).length>0&&this.log("Initialize properties");for(let s in t){const r=t[s];if(void 0!==this[s])this.log(`Property "${s}" on ${this.constructor.name} cannot be defined because the property name is reserved`);else{const t=this._pfeClass._prop2attr(s);r.cascade&&(e=!0),Object.defineProperty(this,s,{get:()=>{const e=this.getAttribute(t);return this._castPropertyValue(r,e)},set:writeable:!0,enumerable:!0,configurable:!1})}}e&&(this._cascadeObserver=new MutationObserver(this._parseObserver))}_initializeAttributeDefaults(){const t=this._pfeClass.allProperties;for(let e in t){const s=t[e],r=this._pfeClass._prop2attr(e);if(s.hasOwnProperty("default")){let t=s.default;"function"==typeof s.default&&(t=s.default(this)),this.hasAttribute(r)||this._assignValueToAttribute(s,r,t)}}}_validateAttributeValue(t,e,s){return Array.isArray(t.values)&&t.values.length>0&&!t.values.includes(s)&&this.warn(`${s} is not a valid value for ${e}. Please provide one of the following values: ${t.values.join(", ")}`),s}static _prop2attr(t){return this._getCache("prop2attr")[t]}static _attr2proptatic _convertPropNameToAttrName(t){const e=this.allProperties[t];return e.attr?e.attr:t.replace(/^_/,"").replace(/^[A-Z]/,.replace(/[A-Z]/g,}static _convertAttrNameToPropName(t){for(let e in this.allProperties)if(this.allProperties[e].attr===t)return e;return t.replace(/-([A-Za-z])/g,}_cascadeAttributes(t,e){t.forEach(}_cascadeAttribute(t,e){const s=[...this.querySelectorAll(e),...this.shadowRoot.querySelectorAll(e)];for(const e of s)this._copyAttribute(t,e)}_copyAttribute(t,e){this.log(`copying ${t} to ${e}`);const s=this.getAttribute(t);e[null==s?"removeAttribute":"setAttribute"](t,s)}static _convertSelectorsToArray(t){if(t){if("string"==typeof t)return t.split(",");if("object"==typeof t)return t;this.warn(`selectors should be provided as a string, array, or object; received: ${typeof t}.`)}}static _parsePropertiesForCascade(t){let e={};for(const[s,r]of Object.entries(t)){let t=this._convertSelectorsToArray(r.cascade);t&&t.map(t=>{let r=this._prop2attr(s);e[t]?e[t].push(r):e[t]=[r]})}return e}static create(t){t._createCache(),t._populateCache(t),t._validateProperties();try{window.customElements.define(t.tag,t)}catch(e){const s=window.customElements.get(t.tag);s&&s.version!==t.version&&this.warn(`${t.tag} was registered at version ${s.version}; cannot register version ${t.version}.`),e&&e.message&&this.log(e.message)}if(r.trackPerformance())try{performance.mark(this._markId+"-defined")}catch(t){this.log("Performance marks are not supported by this browser.")}}static _createCache(){this._cache={properties:{},globalProperties:{},componentProperties:{},cascadingProperties:{},attr2prop:{},prop2attr:{}}}atic _populateCache(t){const e={...t.properties,...r.properties};t._setCache("componentProperties",t.properties),t._setCache("globalProperties",r.properties),t._setCache("properties",e);const s={},i={};for(let t in e){const e=this._convertPropNameToAttrName(t);s[t]=e,i[e]=t}t._setCache("attr2prop",i),t._setCache("prop2attr",s);const a=this._parsePropertiesForCascade(e);Object.keys(a)&&t._setCache("cascadingProperties",a)}static get allProperties(){return this._getCache("properties")}tatic get breakpoint(){return{xs:"0px",sm:"576px",md:"768px",lg:"992px",xl:"1200px","2xl":"1450px"}}}r.allInstances=[],function(s){t=s;const r=window.WebComponents,i=r&&window.WebComponents.ready;!r||i?e():window.addEventListener("WebComponentsReady",e)}(r.log);export default r;
//# sourceMappingURL=./pfelement.min.js.map