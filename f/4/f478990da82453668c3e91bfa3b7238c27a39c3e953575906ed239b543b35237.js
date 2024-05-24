import{i as X,E as st,J as u,K as ot,F as nt,x,e as le,c as ae,n as p,ae as ce,a3 as ue,G as tt,a4 as Kt,L as rt,N as zt,H as Yt,ah as he,ai as Vt,h as pe,j as de,af as Z,aj as fe,z as bt,T as me,q as ge,r as Q,a2 as be,O as E,m as Rt,B as $t,a as ve,s as Xt,g as Et,l as pt,Y as Ht,b as ye,t as we}from"./index-64e4e9e7.js";import{c as vt}from"./repeat-632d6c35.js";import{o as xe}from"./style-map-69b34fe6.js";var _e=X`
  ${st}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Lt=class extends nt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath().find(o=>{var n;return e.includes(((n=o?.getAttribute)==null?void 0:n.call(o,"role"))||"")});if(!s)return;const i=s;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let i=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Lt.styles=_e;u([ot("slot")],Lt.prototype,"defaultSlot",2);Lt.define("sl-menu");var ke=X`
  ${st}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Se=class{constructor(t,e,s){this.popupRef=le(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i?.assignedElements({flatten:!0}).filter(m=>m.localName==="sl-menu")[0],n=this.localize.dir()==="rtl";if(!o)return;const{left:r,top:a,width:l,height:c}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of e.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{var r;const a=(r=e.get(n))!=null?r:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?x`
      <sl-popup
        ${ae(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:x` <slot name="submenu" hidden></slot> `}},Ce=X`
  ${st}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const W=Math.min,T=Math.max,xt=Math.round,yt=Math.floor,j=t=>({x:t,y:t}),Re={left:"right",right:"left",bottom:"top",top:"bottom"},$e={start:"end",end:"start"};function At(t,e,s){return T(t,W(e,s))}function lt(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function Jt(t){return t==="x"?"y":"x"}function Ot(t){return t==="y"?"height":"width"}function ft(t){return["top","bottom"].includes(K(t))?"y":"x"}function Dt(t){return Jt(ft(t))}function Ee(t,e,s){s===void 0&&(s=!1);const i=at(t),o=Dt(t),n=Ot(o);let r=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(r=_t(r)),[r,_t(r)]}function Pe(t){const e=_t(t);return[Tt(t),e,Tt(e)]}function Tt(t){return t.replace(/start|end/g,e=>$e[e])}function Ae(t,e,s){const i=["left","right"],o=["right","left"],n=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return s?e?o:i:e?i:o;case"left":case"right":return e?n:r;default:return[]}}function Te(t,e,s,i){const o=at(t);let n=Ae(K(t),s==="start",i);return o&&(n=n.map(r=>r+"-"+o),e&&(n=n.concat(n.map(Tt)))),n}function _t(t){return t.replace(/left|right|bottom|top/g,e=>Re[e])}function ze(t){return{top:0,right:0,bottom:0,left:0,...t}}function Gt(t){return typeof t!="number"?ze(t):{top:t,right:t,bottom:t,left:t}}function kt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Nt(t,e,s){let{reference:i,floating:o}=t;const n=ft(e),r=Dt(e),a=Ot(r),l=K(e),c=n==="y",m=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,g=i[a]/2-o[a]/2;let h;switch(l){case"top":h={x:m,y:i.y-o.height};break;case"bottom":h={x:m,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-o.width,y:d};break;default:h={x:i.x,y:i.y}}switch(at(e)){case"start":h[r]-=g*(s&&c?-1:1);break;case"end":h[r]+=g*(s&&c?-1:1);break}return h}const Le=async(t,e,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:r}=s,a=n.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:m,y:d}=Nt(c,i,l),g=i,h={},f=0;for(let v=0;v<a.length;v++){const{name:w,fn:y}=a[v],{x:_,y:k,data:$,reset:C}=await y({x:m,y:d,initialPlacement:i,placement:g,strategy:o,middlewareData:h,rects:c,platform:r,elements:{reference:t,floating:e}});if(m=_??m,d=k??d,h={...h,[w]:{...h[w],...$}},C&&f<=50){f++,typeof C=="object"&&(C.placement&&(g=C.placement),C.rects&&(c=C.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:o}):C.rects),{x:m,y:d}=Nt(c,g,l)),v=-1;continue}}return{x:m,y:d,placement:g,strategy:o,middlewareData:h}};async function Bt(t,e){var s;e===void 0&&(e={});const{x:i,y:o,platform:n,rects:r,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:g=!1,padding:h=0}=lt(e,t),f=Gt(h),w=a[g?d==="floating"?"reference":"floating":d],y=kt(await n.getClippingRect({element:(s=await(n.isElement==null?void 0:n.isElement(w)))==null||s?w:w.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:m,strategy:l})),_=d==="floating"?{...r.floating,x:i,y:o}:r.reference,k=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),$=await(n.isElement==null?void 0:n.isElement(k))?await(n.getScale==null?void 0:n.getScale(k))||{x:1,y:1}:{x:1,y:1},C=kt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:_,offsetParent:k,strategy:l}):_);return{top:(y.top-C.top+f.top)/$.y,bottom:(C.bottom-y.bottom+f.bottom)/$.y,left:(y.left-C.left+f.left)/$.x,right:(C.right-y.right+f.right)/$.x}}const Oe=t=>({name:"arrow",options:t,async fn(e){const{x:s,y:i,placement:o,rects:n,platform:r,elements:a,middlewareData:l}=e,{element:c,padding:m=0}=lt(t,e)||{};if(c==null)return{};const d=Gt(m),g={x:s,y:i},h=Dt(o),f=Ot(h),v=await r.getDimensions(c),w=h==="y",y=w?"top":"left",_=w?"bottom":"right",k=w?"clientHeight":"clientWidth",$=n.reference[f]+n.reference[h]-g[h]-n.floating[f],C=g[h]-n.reference[h],R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let P=R?R[k]:0;(!P||!await(r.isElement==null?void 0:r.isElement(R)))&&(P=a.floating[k]||n.floating[f]);const I=$/2-C/2,U=P/2-v[f]/2-1,ct=W(d[y],U),ut=W(d[_],U),O=ct,ht=P-v[f]-ut,A=P/2-v[f]/2+I,M=At(O,A,ht),F=!l.arrow&&at(o)!=null&&A!=M&&n.reference[f]/2-(A<O?ct:ut)-v[f]/2<0,H=F?A<O?A-O:A-ht:0;return{[h]:g[h]+H,data:{[h]:M,centerOffset:A-M-H,...F&&{alignmentOffset:H}},reset:F}}}),De=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:o,middlewareData:n,rects:r,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...w}=lt(t,e);if((s=n.arrow)!=null&&s.alignmentOffset)return{};const y=K(o),_=K(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(c.floating)),$=g||(_||!v?[_t(a)]:Pe(a));!g&&f!=="none"&&$.push(...Te(a,v,f,k));const C=[a,...$],R=await Bt(e,w),P=[];let I=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&P.push(R[y]),d){const O=Ee(o,r,k);P.push(R[O[0]],R[O[1]])}if(I=[...I,{placement:o,overflows:P}],!P.every(O=>O<=0)){var U,ct;const O=(((U=n.flip)==null?void 0:U.index)||0)+1,ht=C[O];if(ht)return{data:{index:O,overflows:I},reset:{placement:ht}};let A=(ct=I.filter(M=>M.overflows[0]<=0).sort((M,F)=>M.overflows[1]-F.overflows[1])[0])==null?void 0:ct.placement;if(!A)switch(h){case"bestFit":{var ut;const M=(ut=I.map(F=>[F.placement,F.overflows.filter(H=>H>0).reduce((H,re)=>H+re,0)]).sort((F,H)=>F[1]-H[1])[0])==null?void 0:ut[0];M&&(A=M);break}case"initialPlacement":A=a;break}if(o!==A)return{reset:{placement:A}}}return{}}}};async function Be(t,e){const{placement:s,platform:i,elements:o}=t,n=await(i.isRTL==null?void 0:i.isRTL(o.floating)),r=K(s),a=at(s),l=ft(s)==="y",c=["left","top"].includes(r)?-1:1,m=n&&l?-1:1,d=lt(e,t);let{mainAxis:g,crossAxis:h,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof f=="number"&&(h=a==="end"?f*-1:f),l?{x:h*m,y:g*c}:{x:g*c,y:h*m}}const Ie=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:o,y:n,placement:r,middlewareData:a}=e,l=await Be(e,t);return r===((s=a.offset)==null?void 0:s.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:n+l.y,data:{...l,placement:r}}}}},Me=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:o}=e,{mainAxis:n=!0,crossAxis:r=!1,limiter:a={fn:w=>{let{x:y,y:_}=w;return{x:y,y:_}}},...l}=lt(t,e),c={x:s,y:i},m=await Bt(e,l),d=ft(K(o)),g=Jt(d);let h=c[g],f=c[d];if(n){const w=g==="y"?"top":"left",y=g==="y"?"bottom":"right",_=h+m[w],k=h-m[y];h=At(_,h,k)}if(r){const w=d==="y"?"top":"left",y=d==="y"?"bottom":"right",_=f+m[w],k=f-m[y];f=At(_,f,k)}const v=a.fn({...e,[g]:h,[d]:f});return{...v,data:{x:v.x-s,y:v.y-i}}}}},Fe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:s,rects:i,platform:o,elements:n}=e,{apply:r=()=>{},...a}=lt(t,e),l=await Bt(e,a),c=K(s),m=at(s),d=ft(s)==="y",{width:g,height:h}=i.floating;let f,v;c==="top"||c==="bottom"?(f=c,v=m===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(v=c,f=m==="end"?"top":"bottom");const w=h-l[f],y=g-l[v],_=!e.middlewareData.shift;let k=w,$=y;if(d){const R=g-l.left-l.right;$=m||_?W(y,R):R}else{const R=h-l.top-l.bottom;k=m||_?W(w,R):R}if(_&&!m){const R=T(l.left,0),P=T(l.right,0),I=T(l.top,0),U=T(l.bottom,0);d?$=g-2*(R!==0||P!==0?R+P:T(l.left,l.right)):k=h-2*(I!==0||U!==0?I+U:T(l.top,l.bottom))}await r({...e,availableWidth:$,availableHeight:k});const C=await o.getDimensions(n.floating);return g!==C.width||h!==C.height?{reset:{rects:!0}}:{}}}};function Y(t){return Qt(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function q(t){var e;return(e=(Qt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Qt(t){return t instanceof Node||t instanceof z(t).Node}function N(t){return t instanceof Element||t instanceof z(t).Element}function V(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function qt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function mt(t){const{overflow:e,overflowX:s,overflowY:i,display:o}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(o)}function Ve(t){return["table","td","th"].includes(Y(t))}function It(t){const e=Mt(),s=D(t);return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function He(t){let e=it(t);for(;V(e)&&!St(e);){if(It(e))return e;e=it(e)}return null}function Mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function St(t){return["html","body","#document"].includes(Y(t))}function D(t){return z(t).getComputedStyle(t)}function Ct(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function it(t){if(Y(t)==="html")return t;const e=t.assignedSlot||t.parentNode||qt(t)&&t.host||q(t);return qt(e)?e.host:e}function Zt(t){const e=it(t);return St(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&mt(e)?e:Zt(e)}function dt(t,e,s){var i;e===void 0&&(e=[]),s===void 0&&(s=!0);const o=Zt(t),n=o===((i=t.ownerDocument)==null?void 0:i.body),r=z(o);return n?e.concat(r,r.visualViewport||[],mt(o)?o:[],r.frameElement&&s?dt(r.frameElement):[]):e.concat(o,dt(o,[],s))}function te(t){const e=D(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=V(t),n=o?t.offsetWidth:s,r=o?t.offsetHeight:i,a=xt(s)!==n||xt(i)!==r;return a&&(s=n,i=r),{width:s,height:i,$:a}}function Ft(t){return N(t)?t:t.contextElement}function et(t){const e=Ft(t);if(!V(e))return j(1);const s=e.getBoundingClientRect(),{width:i,height:o,$:n}=te(e);let r=(n?xt(s.width):s.width)/i,a=(n?xt(s.height):s.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const Ne=j(0);function ee(t){const e=z(t);return!Mt()||!e.visualViewport?Ne:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qe(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==z(t)?!1:e}function G(t,e,s,i){e===void 0&&(e=!1),s===void 0&&(s=!1);const o=t.getBoundingClientRect(),n=Ft(t);let r=j(1);e&&(i?N(i)&&(r=et(i)):r=et(t));const a=qe(n,s,i)?ee(n):j(0);let l=(o.left+a.x)/r.x,c=(o.top+a.y)/r.y,m=o.width/r.x,d=o.height/r.y;if(n){const g=z(n),h=i&&N(i)?z(i):i;let f=g.frameElement;for(;f&&i&&h!==g;){const v=et(f),w=f.getBoundingClientRect(),y=D(f),_=w.left+(f.clientLeft+parseFloat(y.paddingLeft))*v.x,k=w.top+(f.clientTop+parseFloat(y.paddingTop))*v.y;l*=v.x,c*=v.y,m*=v.x,d*=v.y,l+=_,c+=k,f=z(f).frameElement}}return kt({width:m,height:d,x:l,y:c})}function Ue(t){let{rect:e,offsetParent:s,strategy:i}=t;const o=V(s),n=q(s);if(s===n)return e;let r={scrollLeft:0,scrollTop:0},a=j(1);const l=j(0);if((o||!o&&i!=="fixed")&&((Y(s)!=="body"||mt(n))&&(r=Ct(s)),V(s))){const c=G(s);a=et(s),l.x=c.x+s.clientLeft,l.y=c.y+s.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-r.scrollLeft*a.x+l.x,y:e.y*a.y-r.scrollTop*a.y+l.y}}function We(t){return Array.from(t.getClientRects())}function ie(t){return G(q(t)).left+Ct(t).scrollLeft}function je(t){const e=q(t),s=Ct(t),i=t.ownerDocument.body,o=T(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=T(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-s.scrollLeft+ie(t);const a=-s.scrollTop;return D(i).direction==="rtl"&&(r+=T(e.clientWidth,i.clientWidth)-o),{width:o,height:n,x:r,y:a}}function Ke(t,e){const s=z(t),i=q(t),o=s.visualViewport;let n=i.clientWidth,r=i.clientHeight,a=0,l=0;if(o){n=o.width,r=o.height;const c=Mt();(!c||c&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:n,height:r,x:a,y:l}}function Ye(t,e){const s=G(t,!0,e==="fixed"),i=s.top+t.clientTop,o=s.left+t.clientLeft,n=V(t)?et(t):j(1),r=t.clientWidth*n.x,a=t.clientHeight*n.y,l=o*n.x,c=i*n.y;return{width:r,height:a,x:l,y:c}}function Ut(t,e,s){let i;if(e==="viewport")i=Ke(t,s);else if(e==="document")i=je(q(t));else if(N(e))i=Ye(e,s);else{const o=ee(t);i={...e,x:e.x-o.x,y:e.y-o.y}}return kt(i)}function se(t,e){const s=it(t);return s===e||!N(s)||St(s)?!1:D(s).position==="fixed"||se(s,e)}function Xe(t,e){const s=e.get(t);if(s)return s;let i=dt(t,[],!1).filter(a=>N(a)&&Y(a)!=="body"),o=null;const n=D(t).position==="fixed";let r=n?it(t):t;for(;N(r)&&!St(r);){const a=D(r),l=It(r);!l&&a.position==="fixed"&&(o=null),(n?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||mt(r)&&!l&&se(t,r))?i=i.filter(m=>m!==r):o=a,r=it(r)}return e.set(t,i),i}function Je(t){let{element:e,boundary:s,rootBoundary:i,strategy:o}=t;const r=[...s==="clippingAncestors"?Xe(e,this._c):[].concat(s),i],a=r[0],l=r.reduce((c,m)=>{const d=Ut(e,m,o);return c.top=T(d.top,c.top),c.right=W(d.right,c.right),c.bottom=W(d.bottom,c.bottom),c.left=T(d.left,c.left),c},Ut(e,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ge(t){const{width:e,height:s}=te(t);return{width:e,height:s}}function Qe(t,e,s){const i=V(e),o=q(e),n=s==="fixed",r=G(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=j(0);if(i||!i&&!n)if((Y(e)!=="body"||mt(o))&&(a=Ct(e)),i){const c=G(e,!0,n,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else o&&(l.x=ie(o));return{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function Wt(t,e){return!V(t)||D(t).position==="fixed"?null:e?e(t):t.offsetParent}function oe(t,e){const s=z(t);if(!V(t))return s;let i=Wt(t,e);for(;i&&Ve(i)&&D(i).position==="static";)i=Wt(i,e);return i&&(Y(i)==="html"||Y(i)==="body"&&D(i).position==="static"&&!It(i))?s:i||He(t)||s}const Ze=async function(t){let{reference:e,floating:s,strategy:i}=t;const o=this.getOffsetParent||oe,n=this.getDimensions;return{reference:Qe(e,await o(s),i),floating:{x:0,y:0,...await n(s)}}};function ti(t){return D(t).direction==="rtl"}const wt={convertOffsetParentRelativeRectToViewportRelativeRect:Ue,getDocumentElement:q,getClippingRect:Je,getOffsetParent:oe,getElementRects:Ze,getClientRects:We,getDimensions:Ge,getScale:et,isElement:N,isRTL:ti};function ei(t,e){let s=null,i;const o=q(t);function n(){clearTimeout(i),s&&s.disconnect(),s=null}function r(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const{left:c,top:m,width:d,height:g}=t.getBoundingClientRect();if(a||e(),!d||!g)return;const h=yt(m),f=yt(o.clientWidth-(c+d)),v=yt(o.clientHeight-(m+g)),w=yt(c),_={rootMargin:-h+"px "+-f+"px "+-v+"px "+-w+"px",threshold:T(0,W(1,l))||1};let k=!0;function $(C){const R=C[0].intersectionRatio;if(R!==l){if(!k)return r();R?r(!1,R):i=setTimeout(()=>{r(!1,1e-7)},100)}k=!1}try{s=new IntersectionObserver($,{..._,root:o.ownerDocument})}catch{s=new IntersectionObserver($,_)}s.observe(t)}return r(!0),n}function ii(t,e,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Ft(t),m=o||n?[...c?dt(c):[],...dt(e)]:[];m.forEach(y=>{o&&y.addEventListener("scroll",s,{passive:!0}),n&&y.addEventListener("resize",s)});const d=c&&a?ei(c,s):null;let g=-1,h=null;r&&(h=new ResizeObserver(y=>{let[_]=y;_&&_.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{h&&h.observe(e)})),s()}),c&&!l&&h.observe(c),h.observe(e));let f,v=l?G(t):null;l&&w();function w(){const y=G(t);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&s(),v=y,f=requestAnimationFrame(w)}return s(),()=>{m.forEach(y=>{o&&y.removeEventListener("scroll",s),n&&y.removeEventListener("resize",s)}),d&&d(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const si=Me,oi=De,jt=Fe,ni=Oe,ri=(t,e,s)=>{const i=new Map,o={platform:wt,...s},n={...o.platform,_c:i};return Le(t,e,{...o,platform:n})};function li(t){return ai(t)}function Pt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ai(t){for(let e=t;e;e=Pt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Pt(t);e;e=Pt(e)){if(!(e instanceof Element))continue;const s=getComputedStyle(e);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||e.tagName==="BODY"))return e}return null}function ci(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var S=class extends nt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ci(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ii(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ie({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(jt({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(oi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(si({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(jt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ni({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>wt.getOffsetParent(s,li):wt.getOffsetParent;ri(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ce(ue({},wt),{getOffsetParent:e})}).then(({x:s,y:i,middlewareData:o,placement:n})=>{const r=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const l=o.arrow.x,c=o.arrow.y;let m="",d="",g="",h="";if(this.arrowPlacement==="start"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=r?f:"",h=r?"":f}else if(this.arrowPlacement==="end"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=r?"":f,h=r?f:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",m=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:m,right:d,bottom:g,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${tt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};S.styles=Ce;u([ot(".popup")],S.prototype,"popup",2);u([ot(".popup__arrow")],S.prototype,"arrowEl",2);u([p()],S.prototype,"anchor",2);u([p({type:Boolean,reflect:!0})],S.prototype,"active",2);u([p({reflect:!0})],S.prototype,"placement",2);u([p({reflect:!0})],S.prototype,"strategy",2);u([p({type:Number})],S.prototype,"distance",2);u([p({type:Number})],S.prototype,"skidding",2);u([p({type:Boolean})],S.prototype,"arrow",2);u([p({attribute:"arrow-placement"})],S.prototype,"arrowPlacement",2);u([p({attribute:"arrow-padding",type:Number})],S.prototype,"arrowPadding",2);u([p({type:Boolean})],S.prototype,"flip",2);u([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],S.prototype,"flipFallbackPlacements",2);u([p({attribute:"flip-fallback-strategy"})],S.prototype,"flipFallbackStrategy",2);u([p({type:Object})],S.prototype,"flipBoundary",2);u([p({attribute:"flip-padding",type:Number})],S.prototype,"flipPadding",2);u([p({type:Boolean})],S.prototype,"shift",2);u([p({type:Object})],S.prototype,"shiftBoundary",2);u([p({attribute:"shift-padding",type:Number})],S.prototype,"shiftPadding",2);u([p({attribute:"auto-size"})],S.prototype,"autoSize",2);u([p()],S.prototype,"sync",2);u([p({type:Object})],S.prototype,"autoSizeBoundary",2);u([p({attribute:"auto-size-padding",type:Number})],S.prototype,"autoSizePadding",2);var B=class extends nt{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new zt(this),this.hasSlotController=new Yt(this,"submenu"),this.submenuController=new Se(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return he(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return x`
      <div
        id="anchor"
        part="base"
        class=${tt({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};B.styles=ke;B.dependencies={"sl-icon":Kt,"sl-popup":S};u([ot("slot:not([name])")],B.prototype,"defaultSlot",2);u([ot(".menu-item")],B.prototype,"menuItem",2);u([p()],B.prototype,"type",2);u([p({type:Boolean,reflect:!0})],B.prototype,"checked",2);u([p()],B.prototype,"value",2);u([p({type:Boolean,reflect:!0})],B.prototype,"disabled",2);u([rt("checked")],B.prototype,"handleCheckedChange",1);u([rt("disabled")],B.prototype,"handleDisabledChange",1);u([rt("type")],B.prototype,"handleTypeChange",1);B.define("sl-menu-item");var ui=X`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,hi=X`
  ${st}
  ${ui}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,pi=(t="value")=>(e,s)=>{const i=e.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,r,a){var l;const c=i.getPropertyOptions(t),m=typeof c.attribute=="string"?c.attribute:t;if(n===m){const d=c.converter||Vt,h=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:Vt.fromAttribute)(a,c.type);this[t]!==h&&(this[s]=h)}o.call(this,n,r,a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=pe(class extends de{constructor(t){if(super(t),t.type!==Z.PROPERTY&&t.type!==Z.ATTRIBUTE&&t.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fe(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===bt||e===me)return e;const s=t.element,i=t.name;if(t.type===Z.PROPERTY){if(e===s[i])return bt}else if(t.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return bt}else if(t.type===Z.ATTRIBUTE&&s.getAttribute(i)===e+"")return bt;return ge(t),e}});var b=class extends nt{constructor(){super(...arguments),this.formControlController=new be(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Yt(this,"help-text","label"),this.localize=new zt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,i){this.input.setRangeText(t,e,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,i=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly,n=o&&(typeof this.value=="number"||this.value.length>0);return x`
      <div
        part="form-control"
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${tt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${E(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${E(this.placeholder)}
              minlength=${E(this.minlength)}
              maxlength=${E(this.maxlength)}
              min=${E(this.min)}
              max=${E(this.max)}
              step=${E(this.step)}
              .value=${di(this.value)}
              autocapitalize=${E(this.autocapitalize)}
              autocomplete=${E(this.autocomplete)}
              autocorrect=${E(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${E(this.pattern)}
              enterkeyhint=${E(this.enterkeyhint)}
              inputmode=${E(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?x`
                  <button
                    part="clear-button"
                    class=${tt({input__clear:!0,"input__clear--visible":n})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:x`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};b.styles=hi;b.dependencies={"sl-icon":Kt};u([ot(".input__control")],b.prototype,"input",2);u([Q()],b.prototype,"hasFocus",2);u([p()],b.prototype,"title",2);u([p({reflect:!0})],b.prototype,"type",2);u([p()],b.prototype,"name",2);u([p()],b.prototype,"value",2);u([pi()],b.prototype,"defaultValue",2);u([p({reflect:!0})],b.prototype,"size",2);u([p({type:Boolean,reflect:!0})],b.prototype,"filled",2);u([p({type:Boolean,reflect:!0})],b.prototype,"pill",2);u([p()],b.prototype,"label",2);u([p({attribute:"help-text"})],b.prototype,"helpText",2);u([p({type:Boolean})],b.prototype,"clearable",2);u([p({type:Boolean,reflect:!0})],b.prototype,"disabled",2);u([p()],b.prototype,"placeholder",2);u([p({type:Boolean,reflect:!0})],b.prototype,"readonly",2);u([p({attribute:"password-toggle",type:Boolean})],b.prototype,"passwordToggle",2);u([p({attribute:"password-visible",type:Boolean})],b.prototype,"passwordVisible",2);u([p({attribute:"no-spin-buttons",type:Boolean})],b.prototype,"noSpinButtons",2);u([p({reflect:!0})],b.prototype,"form",2);u([p({type:Boolean,reflect:!0})],b.prototype,"required",2);u([p()],b.prototype,"pattern",2);u([p({type:Number})],b.prototype,"minlength",2);u([p({type:Number})],b.prototype,"maxlength",2);u([p()],b.prototype,"min",2);u([p()],b.prototype,"max",2);u([p()],b.prototype,"step",2);u([p()],b.prototype,"autocapitalize",2);u([p()],b.prototype,"autocorrect",2);u([p()],b.prototype,"autocomplete",2);u([p({type:Boolean})],b.prototype,"autofocus",2);u([p()],b.prototype,"enterkeyhint",2);u([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],b.prototype,"spellcheck",2);u([p()],b.prototype,"inputmode",2);u([rt("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1);u([rt("step",{waitUntilFirstUpdate:!0})],b.prototype,"handleStepChange",1);u([rt("value",{waitUntilFirstUpdate:!0})],b.prototype,"handleValueChange",1);b.define("sl-input");var fi=X`
  ${st}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,gt=class extends nt{constructor(){super(...arguments),this.localize=new zt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return x`
      <div
        part="base"
        class=${tt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${E(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${xe({width:`${this.value}%`})}>
          ${this.indeterminate?"":x` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};gt.styles=fi;u([p({type:Number,reflect:!0})],gt.prototype,"value",2);u([p({type:Boolean,reflect:!0})],gt.prototype,"indeterminate",2);u([p()],gt.prototype,"label",2);gt.define("sl-progress-bar");var mi=X`
  ${st}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,ne=class extends nt{render(){return x` <slot></slot> `}};ne.styles=mi;ne.define("sl-visually-hidden");const gi=X`
    :host {
        position: relative;
        display: inline-block;
    }

    :host(:focus-within) sl-input {
        position: relative;
    }

    ${Rt($t.md+65)} {
        :host(:focus-within) .cancel-btn {
            display: flex;
        } 

        :host(:focus-within) sl-input {
            left: unset;
        }
    }

    .cancel-btn {
        display: none;
    }

    .cancel-btn::part(base) {
        font-family: (--body-font);
        font-weight: 400;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .search-text-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3px;
    }

    .result-search-icon {
        width: 18px;
        height: 18px;
    }

    .product-icon {
        margin-inline-end: 2px;
        background: rgba(211, 211, 211, 0.5);
        border-radius: var(--sl-border-radius-small);
    }

    ${Rt($t.xs-150)} {
        .x-icon {
            position: relative;
            top: 1px;
        }
    }

    ${Rt($t.xs-150)} {
        sl-menu-item::part(label), .text-container {
            font-size: var(--sl-font-size-2x-small) !important;
            line-height: 10px;
        }

        sl-menu-item::part(base) {
            height: 20px;
        }

        .product-icon {
            width: 12px;
            height: 12px;
        }

        .result-search-icon {
            width: 10px;
            height: 12px;
        }
    }

    /** The search results menu should be absolutely positioned and match the width the search box */
    sl-menu {
        position: absolute;
        z-index: var(--sl-z-index-dropdown);
        width: 100%;
    }

    /** Search result items should have their icon align with the search box icon */
    sl-menu-item::part(prefix) {
        margin-inline-start: -12px;
    }

    sl-menu-item::part(label) {
        font-size: var(--sl-font-size-small);

        /** Menu items should have ellipsis if they go beyond the width of the menu */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    sl-input {
        width: 100%;
    }

    /** When focused, the base search box container should have a lighter background  */
    sl-input::part(base) {
        background-color: var(--sl-color-neutral-0);
        height: 32px;
        font-size: var(--sl-font-size-small);
    }

    sl-input::part(form-control-label) {
        position: absolute;
        bottom: 32px;
    }

    /** The search input should have a slightly darker background color */
    sl-input::part(input) { /* the icon too */
        transition: background-color var(--sl-transition-medium);
        height: 28px;
        padding: 0 var(--sl-input-spacing-small);
    }

    /** The search input when focused should have a white background */
    sl-input::part(input):focus,
    sl-input.contains-focus::part(prefix) { /** the icon too */
        background-color: var(--sl-color-neutral-0);
    }

    sl-input.contains-focus::part(base) {
        box-shadow: none;
        border-bottom: 2px solid var(--theme-primary-element-color);
    }

    /** The progress bar should have a minimal appearance */
    sl-progress-bar {
        --height: 2px;
        --track-color: transparent;
        margin-top: -2px;
        margin-left: 2px;
        margin-right: 2px;
        position: relative;
        max-width: 776px;
    }

    .cancel-text {
        color: var(--theme-primary-element-color);
    }
    
    @media (prefers-color-scheme: dark) {
        sl-input::part(input)::placeholder, sl-icon {
            color: rgba(255, 255, 255, 0.786);
        }

        sl-button::part(base){
            color: var(--theme-secondary-element-color);
        }

        sl-progress-bar {
            --indicator-color: var(--theme-secondary-element-color);
            --label-color: var(--theme-secondary-element-color);
        }

        sl-button::part(base):focus {
            outline-color: var(--theme-secondary-element-color);
        }

        .cancel-text {
            color: var(--theme-secondary-element-color);
        }

        sl-input.contains-focus::part(base) {
        box-shadow: none;
        border-bottom: 2px solid var(--theme-secondary-element-color);
    }
    }
`;var bi=Object.defineProperty,vi=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var o=i>1?void 0:i?vi(e,s):e,n=t.length-1,r;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&bi(e,s,o),o};let L=class extends Xt{constructor(){super(),this.isDarkMode=!1,this.query="",this.searchResults=[],this.isSearching=!1,this.isFocused=!1,this.isResultsDropdownHidden=!0,this.autosuggestProducts=[],this.debounceHandle=null,this.focusSearchHandler=()=>this.focusSearch(),this.tabEscKeyDownHandler=t=>(t.key==="Tab"||t.key==="Escape")&&(this.isResultsDropdownHidden=!0),this.bindClickOutside=()=>{window.addEventListener("click",()=>this.isResultsDropdownHidden=!0),this.addEventListener("click",t=>{t.stopPropagation(),this.isResultsDropdownHidden=!1})},this.unbindClickOutside=()=>{window.removeEventListener("click",()=>this.isResultsDropdownHidden=!0),this.removeEventListener("click",t=>{t.stopPropagation(),this.isResultsDropdownHidden=!1})}}connectedCallback(){super.connectedCallback(),this.bindClickOutside(),document.body.addEventListener("focus-search-box",this.focusSearchHandler),this.shadowRoot?.addEventListener("keydown",this.tabEscKeyDownHandler)}disconnectedCallback(){super.disconnectedCallback(),this.unbindClickOutside(),document.body.removeEventListener("focus-search-box",this.focusSearchHandler),this.shadowRoot?.removeEventListener("keydown",this.tabEscKeyDownHandler)}updated(t){t.has("isSearching")&&!this.isSearching&&(this.searchResults.length>0||this.autosuggestProducts.length>0)&&Et.track({name:"AutoSuggestShown",properties:{query:this.query,autoSuggestList:this.autosuggestProducts.map(({productId:e,title:s})=>({productId:e,title:s})),searchResultList:this.searchResults}})}render(){const t=this.isFocused?"contains-focus":"";return x`
            <div class="d-flex justify-content-center align-items-center">
                <sl-input
                    aria-label="${pt.get("NavigationBar.Search")}"
                    dir=""
                    id="auto-search-input"
                    class="${t}"
                    placeholder="${pt.get("Search.Placeholder")}"
                    size="medium"
                    spellcheck="false"
                    enterkeyhint="search"
                    maxlength="75"
                    telemetry-event-id="SearchValueEntered"
                    telemetry-data='{ "data": "${this.query}", "autoSuggestList": ${JSON.stringify(this.searchResults)} }'
                    @sl-input="${this.inputChanged}"
                    @focusout="${this.inputFocusout}"
                    @keydown="${this.inputKeyDown}"
                    @focus="${()=>this.isFocused=!0}">
                    <sl-icon class="preview-search-icon" name="search" slot="prefix"></sl-icon>
                </sl-input>
                ${this.renderAnnouncement()}
                ${this.renderCancelButton()}
                </div>
            ${this.renderProgressBar()}
            ${this.renderSearchResults()}
        `}renderCancelButton(){return x`
            <sl-button class="cancel-btn" variant="text" @click="${this.cancelButtonClicked}" @keydown="${this.cancelButtonKeyDown}">
                <div class="row">
                    <img class="x-icon" src="${this.isDarkMode?"assets/icons/x-header-dark.svg":"assets/icons/x-header-light.svg"}" alt="${pt.get("NavigationBar.Cancel")}" />
                    <div class="cancel-text">${pt.getFormatted("NavigationBar.Cancel")}</div>
                </div>
            </sl-button>
        `}blurSearch(t){t.blur(),this.isFocused=!1}cancelButtonKeyDown(){const t=this.shadowRoot?.querySelector(".cancel-btn");t instanceof HTMLElement&&this.blurSearch(t)}cancelButtonClicked(){const t=this.shadowRoot?.querySelector("sl-input");t instanceof HTMLElement&&this.blurSearch(t)}renderProgressBar(){return this.isSearching?x`<sl-progress-bar indeterminate></sl-progress-bar>`:x``}renderSearchResults(){return this.searchResults.length===0&&this.autosuggestProducts.length===0||this.isResultsDropdownHidden?x``:this.searchResults.length===0&&this.autosuggestProducts.length>0?x`
                <sl-menu class="dropdown">
                    ${vt(this.autosuggestProducts,t=>t,t=>this.renderSearchResultProduct(t))}
                </sl-menu>
            `:this.autosuggestProducts?x`
            <sl-menu class="dropdown">
                ${vt(this.searchResults,t=>t,t=>this.renderSearchResultItem(t))}
                ${vt(this.autosuggestProducts,t=>t,t=>this.renderSearchResultProduct(t))}
            </sl-menu>
        `:x`
                <sl-menu class="dropdown">
                    ${vt(this.searchResults,t=>t,t=>this.renderSearchResultItem(t))}
                </sl-menu>
            `}renderSearchResultItem(t){let e=t;return e.includes("\\")&&(e=t.replaceAll("\\","")),x`
            <sl-menu-item value="${t}" @click="${()=>this.searchResultClicked(e)}" z-index="1">
                <sl-icon class="result-search-icon" slot="prefix" name="search"></sl-icon>
                ${this.renderSearchResultText(e)}
            </sl-menu-item>
        `}renderSearchResultProduct(t){const e=t.title,s=t.iconUrl,i=t.productId;return!e||!s||!i?x``:x`
        <sl-menu-item value="${e}" @click="${()=>this.productResultClicked(t)}" z-index="1">
            <div class="search-text-container">
                <img src=${s} alt="" class="product-icon" width="20" height="20"/>
                <div class="text-container">
                    ${this.renderSearchResultText(e,!0)}
                </div>
            </div>
        </sl-menu-item>
        `}renderSearchResultText(t,e=!1){const s=this.query.toLowerCase().trim(),i=e?t:(t||"").toLowerCase(),o=i.indexOf(s);if(!s||!i||o===-1)return x`${i}`;const n=i.slice(0,o),r=i.slice(o+s.length);return x`
            <span>${n}</span><strong>${s}</strong><span>${r}</span>
        `}inputChanged(t){this.query=t.target.value,this.isSearching=!!this.query,this.isResultsDropdownHidden=!1,this.debounceHandle&&clearTimeout(this.debounceHandle),this.debounceHandle=setTimeout(()=>{this.search().then(e=>this.searchResults=e,e=>console.warn("Error during search",e)).finally(()=>{const e=this.renderRoot.querySelector("sl-visually-hidden");if(e){const s=this.searchResults.length+this.autosuggestProducts.length;e.textContent=pt.getFormatted("Search.AnnounceSuggestion",s,this.query)}this.isSearching=!1})},L.debounceTimeMs)}renderAnnouncement(){return x`
            <sl-visually-hidden role="status" aria-live="assertive"></sl-visually-hidden>
        `}inputFocusout(t){const e=t.relatedTarget;e&&e.classList.contains("search-result")||(this.isFocused=!1)}inputKeyDown(t){if(t.key==="ArrowDown"){t.preventDefault();const e=this.shadowRoot?.querySelector("sl-menu-item");e&&e.focus()}else if(t.key==="ArrowUp"){t.preventDefault();const e=this.shadowRoot?.querySelector("sl-menu-item:last-child");e&&e.focus()}else t.key==="Enter"&&this.query?(this.isResultsDropdownHidden=!0,this.goToSearchResultsPage(this.query)):t.key==="Tab"&&t.stopPropagation()}goToSearchResultsPage(t){this.resetState(),Ht.navigate("/search",new URLSearchParams({query:t}))}resetState(){this.isFocused=!1,this.searchResults=[],this.autosuggestProducts=[]}productResultClicked(t){if(this.resetState(),Et.track({name:"SearchValueEntered",properties:{itemId:t.productId,data:t.title,autoSuggestList:this.searchResults,redirect:!!t.redirectUrl}}),t.redirectUrl){window.open(t.redirectUrl,"_blank");return}Ht.navigate(`/detail/${t.productId}`)}searchResultClicked(t){const e=this.shadowRoot?.querySelector("sl-input");e&&(e.value=t),Et.track({name:"SearchValueEntered",properties:{data:t,autoSuggestList:this.searchResults}}),this.goToSearchResultsPage(t)}async search(){const t=this.query;if(!t)return this.autosuggestProducts=[],[];const e=await ye.getAutoSuggestions(t);this.autosuggestProducts=e.products||[];const s=new Set;return(e.autoCompleteList||[]).forEach(i=>s.add(i)),Array.from(s)}focusSearch(){this.shadowRoot?.querySelector("sl-input")?.focus()}};L.debounceTimeMs=350;L.styles=[ve,gi];L.shadowRootOptions={...Xt.shadowRootOptions,delegatesFocus:!0};J([p({type:Boolean})],L.prototype,"isDarkMode",2);J([Q()],L.prototype,"query",2);J([Q()],L.prototype,"searchResults",2);J([Q()],L.prototype,"isSearching",2);J([Q()],L.prototype,"isFocused",2);J([Q()],L.prototype,"isResultsDropdownHidden",2);J([Q()],L.prototype,"autosuggestProducts",2);L=J([we("auto-complete-app-search")],L);export{S,pi as d,ui as f,di as l};
