(window.ndsWebpackChunkLoader=window.ndsWebpackChunkLoader||[]).push([[186,83,84,89,93,98,161,181,215,233,282,285,287,290,314,315,316,330,363,365,410],{121:function(t,e,i){"use strict";i.r(e);i(521);var a=i(523);i(45);window.nds=window.nds||{};const{getSlottedChildren:o}=window.nds;window.nds.EaQdcZeroResultMixin=t=>class extends t{static get qdcZeroResultSlotTemplate(){return a.b`
                <style>
                    .eapl-qdc-zero-message__wrapper {
                        display: none;
                    }

                    [slot="qdcZeroResultTitle"],
                    [slot="qdcZeroResultSubTitle"],
                    [slot="qdcZeroResultCta"] {
                        display: none;
                    }
                </style>
                <div class="eapl-qdc-zero-message__wrapper">
                    <slot id="qdcZeroResultTitle" name="qdcZeroResultTitle"></slot>
                    <slot id="qdcZeroResultSubTitle" name="qdcZeroResultSubTitle"></slot>
                    <slot id="qdcZeroResultCta" name="qdcZeroResultCta"></slot>
                </div>
            `}adjustQdcZeroResultSlot(t){const e=o(this,["qdcZeroResultTitle","qdcZeroResultSubTitle","qdcZeroResultCta"]);if(t.length||!e[0])return;const i=document.querySelector("#ea-shared-styles-common-spacing template"),a=e[0].getAttribute("data-empty-text-color"),n=this.parentNode,s=document.createElement("ea-element"),r=document.createElement("div"),l=e.filter(;r.classList.add("eapl-qdc-zero-result__wrapper"),r.append(...l),a&&s.setAttribute("theme",a),s.attachShadow({mode:"open"}).append(this._getStyle().content.cloneNode(!0),i.content.cloneNode(!0),r),0===l.length&&r.classList.add("eapl-qdc-zero-result__empty"),s.setAttribute("spacing-bottom",this.spacingBottom),s.setAttribute("spacing-top",this.spacingTop),n.insertBefore(s,this),n.removeChild(this)}}},340:function(t,e,i){"use strict";i.r(e);var a=i(522),o=i(545),n=i(540),s=i(536),r=(i(529),i(43));i(4),i(136),i(89),i(121),i(45),i(46),i(49);const{EaMixin:l,EaCatalogMixin:d,getSlottedChildren:c,EaAnimationSystemMixin:h,EaQdcZeroResultMixin:u}=window.nds,{EacomDeviceMixin:m}=window.eacom;class g extends(l(r.EaElement).with(d,h,u,m)){tatic get is(){return"ea-grid"}static get properties(){return{hidden:{observer:"_hiddenChanged",type:Boolean,value:!1},type:{type:String,value:"ordered"},cards:{type:Boolean,value:!1},displayCardImageOnMobile:{type:Boolean,value:!1},backgroundColor:{type:String,value:"none"},layout:{type:String,value:"3up",reflectToAttribute:!0},noMargins:{type:Boolean,value:!1},tileType:{type:String,value:"vertical"},tileAlign:{type:String,value:"left"},tileTextAlign:{type:String,value:"left"},tileTextColor:{type:String,value:"dark"},tileColor:{type:String,value:"light"},tileMediaShape:{type:String,value:"rectangle"},tileScrimColor:{type:String,value:"none"},tileScrimOpacity:{type:String,value:"medium"},tileVerticalAlign:{type:String,value:"vertical-bottom"},tileLinkTarget:String,hideMedia:{type:Boolean,value:!1},hideEyebrow:{type:Boolean,value:!1},hideTitle:{type:Boolean,value:!1},hideCopy:{type:Boolean,value:!1},hideCtas:{type:Boolean,value:!1},hideTags:{type:Boolean,value:!1},hideBrandStroke:{type:Boolean,value:!1},hideByline:{type:Boolean,value:!1},spacingTop:{type:String,value:"medium"},spacingBottom:{type:String,value:"medium"},twoUpOnMobile:{type:Boolean,value:!1,reflectToAttribute:!0},animationsOnMobile:{type:Boolean,value:!1},animateInOrder:String,animateOutOrder:String,_colNum:Number,_rowAnimateTimes:{type:Array,value:()=>[]},_tileAnimateTimes:{type:Array,value:,_loading:{type:Boolean,value:!0}}}static get observers(){return["_processCatalogItems(twoUpOnMobile,tileType,tileTextColor,tileColor,tileScrimColor,tileScrimOpacity,tileLinkTarget,tileVerticalAlign,hideMedia,hideEyebrow,hideTitle,hideCopy,hideCtas,hideTags,hideBrandStroke)"]}_hiddenChanged(t){!t&&this._masonry&&(this._masonry.layout,1)&&this._masonry.layout()}_imagesLoaded(){[...this._getAllDistributedTiles()].map(t=>{t.shadowRoot?this._imageLoad(t):t.addEventListener("nds.catalog.tileReady",()=>{setTimeout(this._imageLoad,0,t)})})}_imageLoad(t){const e=t.shadowRoot.querySelector("img");e&&(e.complete&&this._resetLayout(e),e.onload=}_resetLayout(t){t&&this._imagesLoadedCount++,this._debouncer=n.a.debounce(this._debouncer,s.c.after(10),()=>{this._masonry.layout(),this.dispatchEvent(new CustomEvent("nds.grid.imagesloaded",{bubbles:!0,composed:!0,detail:{count:this._imagesLoadedCount}})),this._imagesLoadedCount=0})}get _catalogItemsshowRows(t,e){[...this.shadowRoot.querySelectorAll('[slot="container"]')].forEach((i,a)=>{i.removeAttribute("style"),a>=t&&a<e?i.removeAttribute("hidden"):i.setAttribute("hidden",!0)}),"organic"!==this.type||this.cards||this._observeCatalogContainer()}_getAllDistributedTiles(){return this.$.catalogContainer.querySelectorAll('[slot="tile"]')}processCatalogItems(){const t=this._getAllDistributedTiles(),e=this._getAllDistributedCtas();t.forEach((e,i)=>{e.twoUpOnMobile=this.twoUpOnMobile,e.type=this.tileType,e.textAlign=this.tileTextAlign,e.textColor=this.tileTextColor,e.mediaShape=this.tileMediaShape,e.color=this.tileColor,e.scrimColor=this.tileScrimColor,e.scrimOpacity=this.tileScrimOpacity,e.verticalAlign=this.tileVerticalAlign,e.hideMedia=this.hideMedia,e.hideEyebrow=this.hideEyebrow,e.hideTitle=this.hideTitle,e.hideCopy=this.hideCopy,e.hideCtas=this.hideCtas,e.hideCategoryTags=this.hideTags,e.hideBrandStroke=this.hideBrandStroke,e.hideByline=this.hideByline,e.mediaSize=this.mediaSize,e.context="ea-grid",e.card=this.cards,e.showCardImage=this.displayCardImageOnMobile,e.shadowColor=this.backgroundColor,e.animatable=e.animatable||this.animatable,e.animationThreshold=e.animationThreshold||this.animationThreshold,e.animationExitThreshold=e.animationExitThreshold||this.animationExitThreshold,e.animationMargin=e.animationMargin||this.animationMargin,e.animationOverrides=e.animationOverrides||this.animationOverrides,e.animationOnLoad=e.animationOnLoad||this.animationOnLoad,e.animationOnEnter=e.animationOnEnter||this.animationOnEnter,e.animationOnExit=e.animationOnExit||this.animationOnExit,e.animationsOnMobile=e.animationsOnMobile||this.animationsOnMobile,this.tileLinkTarget&&(e.linkTarget=this.tileLinkTarget),(this.animateInOrder||this.animateOutOrder)&&(this.isDesktop||this.isMobile&&this.twoUpOnMobile)&&this._processOrderItems(t,i)}),e.forEach(,this._resetTilesAnimate(t)}_processOrderItems(t,e){const i=t[e];this._colNum||(this._colNum=this._getGridColumns(i));const a=(e+1)%this._colNum==1,o=(e+1)%this._colNum==0||e+1===t.length,n={delayTime:"0ms",animateTime:this._getTileDelayTime(i)};if(a)this._rowAnimateTimes=[n];else{const t=this._rowAnimateTimes[e%this._colNum-1];n.delayTime=`${t.delayTime} + ${t.animateTime}`,this._rowAnimateTimes.push(n)}o&&this._tileAnimateTimes.push(this._rowAnimateTimes)}_resetTilesAnimate(t){if(!this._tileAnimateTimes||!this._tileAnimateTimes.length)return;const e=[];this._tileAnimateTimes.forEach(t=>e.push(Object.assign([],t).reverse()));const i="rtl"===this.animateInOrder?e:this._tileAnimateTimes,a="rtl"===this.animateOutOrder?e:this._tileAnimateTimes;t.forEach((t,e)=>{if(!t.updateStyles)return void(this._loading=!0);const o=Math.floor(e/this._colNum),n=e-o*this._colNum;this.animateInOrder&&i.length&&(t.setAttribute("animate-in-order",this.animateInOrder),t.updateStyles({"--ea-tile-order-animation-in-delay":`calc(${i[o][n].delayTime})`})),this.animateOutOrder&&a.length&&(t.setAttribute("animate-out-order",this.animateOutOrder),t.updateStyles({"--ea-tile-order-animation-out-delay":`calc(${a[o][n].delayTime})`}))})}_getGridColumns(t){const e=t.parentNode;return Math.round(this.$.catalogContainer.offsetWidth/e.offsetWidth)}_getStyleValue(t,e){const{animationOverrides:i={}}=e,a=getComputedStyle(e).getPropertyValue(t);return i[t]||a||"0ms"}_getTileDelayTime(t){return`${this._getStyleValue("--ea-animation-delay-long",t)} + ${this._getStyleValue("--ea-animation-timing-short",t)}`}_setupMasonry(){const t=this.$.catalogContainer,e='[slot="container"]:not([hidden])';this._masonry=new Masonry(t,{itemSelector:e,columnWidth:e,horizontalOrder:!0}),this._masonry.layout.bind(this._masonry),this._masonry.layout(),this._imagesLoadedCount=0}setup(){setTimeout(()=>{this._loading&&(this._loading=!1,this._moveTiles(),this._processCatalogItems(),"organic"!==this.type||this.cards||(this._catalogObserver=new o.a(this.$.catalogContainer,this._observeCatalogContainer)),this.dispatchEvent(new CustomEvent("nds.catalog.itemsReady",{bubbles:!0,composed:!0,detail:{items:this.$.catalogContainer.querySelectorAll('[slot="container"]')}})))})}_moveTiles(){const t=this._catalogItems;if(!this._catalogItems.length)return void this._adjustQdcZeroResultSlot(this._catalogItems);const e=document.createDocumentFragment();[...t].forEach(,this.$.catalogContainer.appendChild(e)}sconnectedCallback(){this._debouncer&&this._debouncer.cancel(),this._catalogObserver&&this._catalogObserver.disconnect(),this.removeEventListener("nds.catalog.tileReady",this._setup)}}window.customElements.define(g.is,g)},43:44:47:48:49:51:533:function(t,e,i){"use strict";nst n=new Map;const s=document.createElement("template");s.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class r extends HTMLElement{teChangedCallback(){this.render()}ocusLastElement(){this.trapFocus(!0)}getFocusableElements(){return function t(e,i,a,o=20,n=0){let s=[];if(n>=o)return s;const r=l=Array.from(e.children||[]);for(const d of l)i(d)||(a(d)&&s.push(d),null!=d.shadowRoot?s.push(...t(d.shadowRoot,i,a,o,n+1)):"SLOT"===d.tagName?s.push(...r(d)):s.push(...t(d,i,a,o,n+1)));return s}(this,a,o)}nFocusIn(){this.updateFocused(!0)}ndow.customElements.define("focus-trap",r)},89:]);