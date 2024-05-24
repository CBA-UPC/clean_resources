!{0:1:10:16:function(t,e,s){"use strict";e.a=(t,e)=>{if("string"!=typeof t)throw new Error("registerComponent requires a name of type string");if(!e)throw new Error("registerComponent requires a valid component");window&&customElements&&void 0===customElements.get(t)&&(customElements.define(t,e),document.dispatchEvent(new CustomEvent("mesoAdTagRegistered",{detail:{name:t}})))}},2:3:4:function(t,e,s){"use strict";s.d(e,"c",(function(){return u.c})),s.d(e,"b",(function(){return C})),s.d(e,"a",(function(){return E}));var n=s(3),i=s(0);onst o=a=var c=s(7),l=s(6),d=s(10),u=s(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=m=["html","svg"],_=new Set,g=window.JSCompiler_renameProperty=const y={toAttributefromAttribute,v=b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v};class S extends HTMLElement{let s=!0;if(void 0!==t){const n=this.constructor,i=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}t _hasRequestedUpdate(){return 4&this._updateState}erformUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}etUpdateComplete(){return this._updatePromise}dated(t){}S.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const w="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x=Symbol();onst C=
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const N={};.finalized=!0,E.render=,46:function(t,e,s){"use strict";s.r(e);var n=s(4),i=s(16);class r extends n.a{onstructor(){super(),this.children=0,this.childrenresponses=0,this.houseads=0,this.emptySlots={},this._experimentsEvaluated=!1}connectedCallback(){function t(e){e.detail&&e.detail.code&&("AD-LOAD-EMPTY"!==e.detail.code&&"AD-LOAD-FAIL"!==e.detail.code||e.detail.uci&&!(e.detail.uci in this.emptySlots)&&(this.emptySlots[e.detail.uci]=!0,this.houseads+=1,this.houseads===this.children&&this.dispatchEvent(this.getCollapseEvent())),e.currentTarget.removeEventListener("mesoAd",t.bind(this)))}super.connectedCallback(),window.addEventListener("mesoAd",t=>{"AD-LOAD-FAIL"===t.detail.code&&this.dispatchEvent(this.getCollapseEvent())});const e=this.getChildren();this.children=e.length,window.addEventListener("message",t=>{t&&"object"==typeof t.data&&t.data.hasOwnProperty("type")&&"isHouseAd"===t.data.type&&(this.setAttribute("childrenresponses",this.childrenresponses+1),!0===t.data.message.isHouseAd&&this.setAttribute("houseads",this.houseads+1))});for(const s of e)s.addEventListener("mesoAd",t.bind(this))}getChildren(){let t=this.getElementsByTagName("meso-native");return 0!==t.length?t:(t=this.querySelectorAll("[class*=meso-native-card]"),0!==t.length?t:this.getElementsByTagName("meso-native-marquee-gallery-tile"))}getCollapseEvent(){return new CustomEvent("collapseAdGroup",{detail:{type:"meso-collapsible-group-event",collapse:!0}})}render(){return window.meso&&window.meso.privacy&&window.meso.privacy.canTrack&&this.houseads!==this.children||this.dispatchEvent(this.getCollapseEvent()),n.c`
      <div id="groupChildren">
        <slot></slot>
      </div>`}}Object(i.a)("meso-collapsible-group",r)},5:function(t,e,s){"use strict";s.d(e,"b",(function(){return o.a})),s.d(e,"a",(),s.d(e,"c",(function(){return a}));var n=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new var r=s(9),o=s(8);s(3),s(2),s(7),s(6),s(10),s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const a=,6:7:8:9:);
//# sourceMappingURL=meso-collapsible-group.js.map